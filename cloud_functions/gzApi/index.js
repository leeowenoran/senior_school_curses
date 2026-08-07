/**
 * CloudBase 云函数 gzApi —— 负责「手机号」账号与学习数据的云端读写。
 * 通过管理态 Node SDK 操作数据库，前端用 HTTP 访问地址调用，绕开 CloudBase 自带的
 * 用户登录体系（其邮箱/用户名登录需要验证码、邮件服务等一系列额外配置，对初学者不友好）。
 *
 * 集合：
 *   users_auth  —— 文档 _id = 手机号，存 { phone, salt, pwHash, createdAt }
 *   users_data  —— 文档 _id = 手机号，存 { phone, data: {...}, updatedAt }
 *
 * 安全：密码用 scrypt + 随机盐哈希；登录成功后返回一个由服务端密钥签名的 token，
 *       后续 getData/saveData/changePassword 都需携带该 token，函数侧校验身份。
 */
const cloudbase = require('@cloudbase/node-sdk');
const crypto = require('crypto');

const app = cloudbase.init({});
const db = app.database();
const AUTH = db.collection('users_auth');
const DATA = db.collection('users_data');
// 自建访客统计：匿名访客的页面浏览事件（path/referrer/ua/vid/sid/entry/isNew/screen/lang/ip/ts/day）
const VISIT = db.collection('visit_logs');
// IP 归属地缓存：_id = ip，{ region, ts }。避免每次统计都重复请求外部归属地接口。
const IPGEO = db.collection('ip_geo');

/**
 * 服务端签名密钥。
 * ⚠️ 历史默认值曾硬编码在本文件中并随**公开仓库**泄漏，已被用于伪造 token。
 * 已于 2026-08-04 将默认值轮换为下方新的随机串：旧密钥签发的 token 立即全部失效。
 * 但本仓库仍公开，下方默认值同样会随代码公开，故**部署时务必再配一次环境变量做兜底**，
 * 这样今后轮换密钥无需改代码、直接改环境变量即可：
 *   tcb fn config update gzApi --envs GZ_API_SECRET=<一串全新的随机字符串>
 * 若运行时仍在使用代码默认值（未配环境变量），管理后台页面会显示红色危险横幅。
 */
const LEGACY_SECRET = 'gz-rt2026-' + 'qjnx0mhWKYcK6yuhW3fuvZCxVS2SRYQksyNF6WfZiL7RR3w5CvhB0Ad-PTcYksPJ';
const SECRET = process.env.GZ_API_SECRET || LEGACY_SECRET;
// 是否仍在使用已公开的默认密钥——会在管理接口响应里回传，供后台页面显示告警
const SECRET_IS_LEGACY = !process.env.GZ_API_SECRET;

// token 有效期：30 天
const TOKEN_TTL_MS = 30 * 24 * 60 * 60 * 1000;

function hmacPhone(phone) {
  return crypto.createHmac('sha256', SECRET).update('token:' + phone).digest('hex');
}
function hmacPhoneExp(phone, exp) {
  return crypto.createHmac('sha256', SECRET).update('token2:' + phone + ':' + exp).digest('hex');
}
/** 签发 v2 token：v2.<base64(手机号)>.<过期毫秒时间戳>.<签名> */
function makeToken(phone) {
  const exp = Date.now() + TOKEN_TTL_MS;
  return 'v2.' + Buffer.from(phone).toString('base64') + '.' + exp + '.' + hmacPhoneExp(phone, exp);
}
/**
 * 校验 token。同时兼容两种格式：
 *   v2（带有效期，新签发）
 *   v1（无有效期，历史遗留）—— 保留是为了让改造上线时已登录用户不被强制登出。
 * 返回 { phone, ver } 或 null。
 */
function verifyTokenEx(token) {
  if (!token || typeof token !== 'string') return null;
  if (token.slice(0, 3) === 'v2.') {
    const parts = token.split('.');
    if (parts.length !== 4) return null;
    let phone;
    try { phone = Buffer.from(parts[1], 'base64').toString('utf8'); } catch (e) { return null; }
    const exp = parseInt(parts[2], 10);
    if (!exp || Date.now() > exp) return null;               // 已过期
    if (parts[3] !== hmacPhoneExp(phone, exp)) return null;  // 签名不符
    return { phone: phone, ver: 2 };
  }
  const dot = token.indexOf('.');
  if (dot < 0) return null;
  let phone;
  try { phone = Buffer.from(token.slice(0, dot), 'base64').toString('utf8'); } catch (e) { return null; }
  if (token.slice(dot + 1) !== hmacPhone(phone)) return null;
  return { phone: phone, ver: 1 };
}
function verifyToken(token) {
  const r = verifyTokenEx(token);
  return r ? r.phone : null;
}
/** 管理接口鉴权：token 有效 且 账号在 ADMIN_IDS 白名单内 */
function requireAdmin(token) {
  const r = verifyTokenEx(token);
  if (!r || !isAdminId(r.phone)) return null;
  return r.phone;
}
function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString('hex');
}
function isPhone(s) {
  return /^1[3-9]\d{9}$/.test(s);
}

/**
 * 管理员账号白名单（硬编码在云函数内，改库无法提权）。
 * 这类账号不是手机号，**不能**通过公开的 register 接口创建——register 仍强制 isPhone()，
 * 因此外部无论如何都注册不出 'king' 这样的账号名。
 * 唯一的建档入口是下方 seedAdmin，且该操作在 HTTP 调用时直接拒绝，只能由 CLI / 控制台执行。
 */
const ADMIN_IDS = ['king'];
function isAdminId(s) {
  return ADMIN_IDS.indexOf(s) >= 0;
}
// 登录允许的账号形态：合法手机号 或 管理员账号名
function isLoginId(s) {
  return isPhone(s) || isAdminId(s);
}
// 手机号脱敏：13800138000 -> 138****8000；非手机号（管理员账号名）原样返回
function maskPhone(s) {
  s = String(s || '');
  return /^\d{11}$/.test(s) ? s.slice(0, 3) + '****' + s.slice(7) : s;
}

async function handleRegister(payload) {
  const phone = (payload && payload.phone || '').trim();
  const password = payload && payload.password || '';
  // 公开注册永远只认 11 位手机号；管理员账号名在此双重拦截（isPhone 已排除，这里再显式兜一道）
  if (isAdminId(phone)) return { ok: false, msg: '该账号名不可注册' };
  if (!isPhone(phone)) return { ok: false, msg: '请输入有效的 11 位手机号' };
  if (!password || password.length < 6) return { ok: false, msg: '密码至少 6 位' };
  const exist = await AUTH.doc(phone).get();
  if (exist && exist.data && exist.data.length) return { ok: false, msg: '该手机号已注册，请直接登录' };
  const salt = crypto.randomBytes(16).toString('hex');
  const pwHash = hashPassword(password, salt);
  await AUTH.doc(phone).set({ phone: phone, salt: salt, pwHash: pwHash, createdAt: new Date() });
  // 同时初始化一份空的学习数据文档
  await DATA.doc(phone).set({ phone: phone, data: {}, updatedAt: new Date() });
  return { ok: true, token: makeToken(phone), phone: phone };
}

async function handleLogin(payload) {
  const phone = (payload && payload.phone || '').trim();
  const password = payload && payload.password || '';
  // 登录放开：手机号 或 管理员账号名（注册接口不放开，故外部无法自行创建管理员账号）
  if (!isLoginId(phone)) return { ok: false, msg: '请输入有效的 11 位手机号' };
  if (!password) return { ok: false, msg: '请输入密码' };
  const res = await AUTH.doc(phone).get();
  if (!res || !res.data || !res.data.length) return { ok: false, msg: '该手机号尚未注册' };
  const u = res.data[0];
  const pwHash = hashPassword(password, u.salt);
  if (pwHash !== u.pwHash) return { ok: false, msg: '密码错误' };
  return { ok: true, token: makeToken(phone), phone: phone, isAdmin: isAdminId(phone) };
}

/**
 * 创建 / 重置管理员账号（仅限 CLI、云开发控制台调用）。
 * HTTP 调用一律拒绝——这是该接口的核心安全前提，勿移除 isHttp 判断。
 * 用法：tcb fn invoke gzApi --params '{"action":"seedAdmin","payload":{"id":"king","password":"<密码>"}}'
 * 注意：本仓库为公开仓库，请勿把真实密码写进代码或注释。
 */
async function handleSeedAdmin(payload, isHttp) {
  if (isHttp) return { ok: false, msg: '未知操作: seedAdmin' };
  const id = (payload && payload.id || '').trim();
  const password = payload && payload.password || '';
  if (!isAdminId(id)) return { ok: false, msg: '账号名不在 ADMIN_IDS 白名单内：' + id };
  if (!password) return { ok: false, msg: '请提供密码' };
  // 管理员账号由运维直接建档，故不受公开注册的「密码至少 6 位」限制
  const salt = crypto.randomBytes(16).toString('hex');
  const pwHash = hashPassword(password, salt);
  await AUTH.doc(id).set({ phone: id, salt: salt, pwHash: pwHash, isAdmin: true, createdAt: new Date() });
  // 管理员为「纯管理员」定位：数据文档建空壳，不参与全站学习统计
  const exist = await DATA.doc(id).get();
  if (!exist || !exist.data || !exist.data.length) {
    await DATA.doc(id).set({ phone: id, data: {}, isAdmin: true, updatedAt: new Date() });
  }
  return { ok: true, id: id, msg: '管理员账号已就绪：' + id };
}

async function handleChangePassword(payload) {
  const token = payload && payload.token;
  const phone = verifyToken(token);
  if (!phone) return { ok: false, msg: '登录状态已失效，请重新登录' };
  const oldPassword = payload && payload.oldPassword || '';
  const newPassword = payload && payload.newPassword || '';
  if (!newPassword || newPassword.length < 6) return { ok: false, msg: '新密码至少 6 位' };
  const res = await AUTH.doc(phone).get();
  if (!res || !res.data || !res.data.length) return { ok: false, msg: '账号不存在' };
  const u = res.data[0];
  if (oldPassword) {
    const oldHash = hashPassword(oldPassword, u.salt);
    if (oldHash !== u.pwHash) return { ok: false, msg: '旧密码不正确' };
  }
  const salt = crypto.randomBytes(16).toString('hex');
  const pwHash = hashPassword(newPassword, salt);
  await AUTH.doc(phone).set({ salt: salt, pwHash: pwHash, updatedAt: new Date() }, { merge: true });
  return { ok: true, token: makeToken(phone), phone: phone };
}

async function handleGetData(payload) {
  const token = payload && payload.token;
  const phone = verifyToken(token);
  if (!phone) return { ok: false, msg: '登录状态已失效，请重新登录' };
  const res = await DATA.doc(phone).get();
  if (!res || !res.data || !res.data.length) {
    // 没有数据文档则补建一个
    await DATA.doc(phone).set({ phone: phone, data: {}, updatedAt: new Date() });
    return { ok: true, data: {} };
  }
  return { ok: true, data: res.data[0].data || {} };
}

async function handleSaveData(payload) {
  const token = payload && payload.token;
  const phone = verifyToken(token);
  if (!phone) return { ok: false, msg: '登录状态已失效，请重新登录' };
  const data = payload && payload.data;
  if (typeof data !== 'object' || data === null) return { ok: false, msg: '数据格式错误' };
  await DATA.doc(phone).set({ phone: phone, data: data, updatedAt: new Date() }, { merge: true });
  return { ok: true };
}

/* ==================== 管理后台 ==================== */

/** 毫秒时间戳 -> 'YYYY-MM-DD'（东八区，用户都在国内，固定 +8 比依赖容器时区可靠） */
function dayKey(ts) {
  return new Date(ts + 8 * 3600 * 1000).toISOString().slice(0, 10);
}

/**
 * 把单个用户的学习数据 blob 归纳为一行摘要 + 一组活跃日期。
 * 注意 gz_progress 存在两种历史形态：旧记录为 true，新记录为 { ts }，两者都要算作已完成。
 */
function summarizeUser(phone, authDoc, dataDoc) {
  const blob = (dataDoc && dataDoc.data) || {};
  const prog = blob.gz_progress || {};
  const quiz = Array.isArray(blob.gz_quiz_log) ? blob.gz_quiz_log : [];
  const wrong = Array.isArray(blob.gz_wrongbook) ? blob.gz_wrongbook : [];
  const favs = Array.isArray(blob.gz_favs) ? blob.gz_favs : [];
  const checkin = blob.gz_checkin || {};

  const activeDays = {};   // 'YYYY-MM-DD' -> true
  const dailyLessons = {}; // 'YYYY-MM-DD' -> 完成课时数
  const subjects = {};     // sid -> 已完成课时数
  let lessons = 0;
  let lastActive = 0;

  Object.keys(prog).forEach(function (k) {
    const v = prog[k];
    if (!v) return;                       // false / null 视为未完成
    lessons++;
    const sid = String(k).split('/')[0];
    if (sid) subjects[sid] = (subjects[sid] || 0) + 1;
    const ts = (v === true) ? 0 : (v.ts || 0);  // 旧记录无时间戳，只计入总数不计入趋势
    if (ts) {
      const d = dayKey(ts);
      activeDays[d] = true;
      dailyLessons[d] = (dailyLessons[d] || 0) + 1;
      if (ts > lastActive) lastActive = ts;
    }
  });

  let right = 0;
  const dailyQuiz = {};
  quiz.forEach(function (q) {
    if (q && q.right) right++;
    const ts = q && q.ts;
    if (ts) {
      const d = dayKey(ts);
      activeDays[d] = true;
      dailyQuiz[d] = (dailyQuiz[d] || 0) + 1;
      if (ts > lastActive) lastActive = ts;
    }
  });

  // 签到只有日期字符串，没有具体时刻，仅用于判定"当天活跃"
  (Array.isArray(checkin.history) ? checkin.history : []).forEach(function (d) {
    if (d) activeDays[String(d)] = true;
  });

  const createdAt = (authDoc && authDoc.createdAt) || (blob.createdAt) || null;
  const updatedAt = (dataDoc && dataDoc.updatedAt) || null;

  return {
    row: {
      phoneMask: maskPhone(phone),
      // 真实手机号：仅管理员端可见（本接口已 requireAdmin 鉴权 + token 有过期），
      // 供前端钻取到「用户明细」时回传定位。UI 展示仍用 phoneMask 脱敏。
      phone: phone,
      nickname: blob.nickname || '',
      isAdmin: !!(authDoc && authDoc.isAdmin) || isAdminId(phone),
      createdAt: createdAt ? +new Date(createdAt) : null,
      updatedAt: updatedAt ? +new Date(updatedAt) : null,
      lastActive: lastActive || (updatedAt ? +new Date(updatedAt) : null),
      lessons: lessons,
      wrong: wrong.length,
      favs: favs.length,
      quizTotal: quiz.length,
      quizRight: right,
      accuracy: quiz.length ? Math.round(right * 1000 / quiz.length) / 10 : null,
      streak: checkin.streak || 0,
      checkinTotal: checkin.total || 0,
      subjects: subjects
    },
    activeDays: activeDays,
    dailyLessons: dailyLessons,
    dailyQuiz: dailyQuiz,
    hasNoTsProgress: Object.keys(prog).some(function (k) { return prog[k] === true; })
  };
}

/**
 * 全站概览。仅返回聚合摘要与脱敏手机号，不下发任何原始答题内容。
 * payload: { token, days? }
 */
async function handleAdminOverview(payload) {
  const admin = requireAdmin(payload && payload.token);
  if (!admin) return { ok: false, msg: '无权限：需要管理员身份' };

  let days = parseInt(payload && payload.days, 10) || 30;
  days = Math.min(Math.max(days, 7), 90);

  const [authRes, dataRes] = await Promise.all([
    AUTH.limit(1000).get(),
    DATA.limit(1000).get()
  ]);
  const authDocs = (authRes && authRes.data) || [];
  const dataDocs = (dataRes && dataRes.data) || [];

  const authMap = {};
  authDocs.forEach(function (d) { authMap[d._id || d.phone] = d; });
  const dataMap = {};
  dataDocs.forEach(function (d) { dataMap[d._id || d.phone] = d; });

  // 以两个集合的并集为准，避免"注册了但从未同步"的用户被漏掉
  const ids = Object.keys(authMap).concat(Object.keys(dataMap)).filter(function (v, i, a) {
    return a.indexOf(v) === i;
  });

  const rows = [];
  const subjectTotals = {};
  const dayActive = {};   // date -> { users:Set 计数, lessons, quiz }
  let anyNoTs = false;

  ids.forEach(function (id) {
    const s = summarizeUser(id, authMap[id], dataMap[id]);
    if (s.hasNoTsProgress) anyNoTs = true;
    if (s.row.isAdmin) return;   // 纯管理员不参与全站统计，避免拉低人均

    rows.push(s.row);
    Object.keys(s.row.subjects).forEach(function (sid) {
      subjectTotals[sid] = (subjectTotals[sid] || 0) + s.row.subjects[sid];
    });
    Object.keys(s.activeDays).forEach(function (d) {
      if (!dayActive[d]) dayActive[d] = { actives: 0, lessons: 0, quiz: 0 };
      dayActive[d].actives++;
    });
    Object.keys(s.dailyLessons).forEach(function (d) {
      if (!dayActive[d]) dayActive[d] = { actives: 0, lessons: 0, quiz: 0 };
      dayActive[d].lessons += s.dailyLessons[d];
    });
    Object.keys(s.dailyQuiz).forEach(function (d) {
      if (!dayActive[d]) dayActive[d] = { actives: 0, lessons: 0, quiz: 0 };
      dayActive[d].quiz += s.dailyQuiz[d];
    });
  });

  // 近 N 天趋势（补齐空缺日期，前端可直接画图）
  const trend = [];
  const today = dayKey(Date.now());
  const todayMs = +new Date(today + 'T00:00:00Z');
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(todayMs - i * 86400000).toISOString().slice(0, 10);
    const v = dayActive[d] || { actives: 0, lessons: 0, quiz: 0 };
    trend.push({ date: d, actives: v.actives, lessons: v.lessons, quiz: v.quiz });
  }

  // 汇总
  const now = Date.now();
  const d7 = now - 7 * 86400000;
  const summary = {
    users: rows.length,
    active7: rows.filter(function (r) { return r.lastActive && r.lastActive >= d7; }).length,
    lessons: rows.reduce(function (a, r) { return a + r.lessons; }, 0),
    wrong: rows.reduce(function (a, r) { return a + r.wrong; }, 0),
    quizTotal: rows.reduce(function (a, r) { return a + r.quizTotal; }, 0),
    quizRight: rows.reduce(function (a, r) { return a + r.quizRight; }, 0),
    newUsers7: rows.filter(function (r) { return r.createdAt && r.createdAt >= d7; }).length
  };
  summary.accuracy = summary.quizTotal
    ? Math.round(summary.quizRight * 1000 / summary.quizTotal) / 10
    : null;

  const subjects = Object.keys(subjectTotals).map(function (sid) {
    return { sid: sid, lessons: subjectTotals[sid] };
  }).sort(function (a, b) { return b.lessons - a.lessons; });

  return {
    ok: true,
    generatedAt: now,
    days: days,
    summary: summary,
    rows: rows,
    subjects: subjects,
    trend: trend,
    warnings: {
      // 提醒：仍在用已公开的默认签名密钥
      legacySecret: SECRET_IS_LEGACY,
      // 提醒：存在无时间戳的历史进度记录，这部分计入总数但不体现在趋势图中
      progressWithoutTs: anyNoTs,
      // 提醒：单集合最多读取 1000 条，超出需改为分页
      truncated: authDocs.length >= 1000 || dataDocs.length >= 1000
    }
  };
}

/**
 * 单用户明细（用户钻取）。仅返回该用户自身的学习数据，不下发其他用户内容。
 * payload: { token, phone }
 */
async function handleAdminUserDetail(payload) {
  const admin = requireAdmin(payload && payload.token);
  if (!admin) return { ok: false, msg: '无权限：需要管理员身份' };
  const phone = (payload && payload.phone || '').trim();
  if (!phone) return { ok: false, msg: '缺少用户标识' };

  const [authRes, dataRes] = await Promise.all([
    AUTH.doc(phone).get(),
    DATA.doc(phone).get()
  ]);
  const authDoc = (authRes && authRes.data && authRes.data[0]) || null;
  const dataDoc = (dataRes && dataRes.data && dataRes.data[0]) || null;
  if (!dataDoc && !authDoc) return { ok: false, msg: '用户不存在' };

  const blob = (dataDoc && dataDoc.data) || {};
  const prof = summarizeUser(phone, authDoc, dataDoc).row;

  const wrong = Array.isArray(blob.gz_wrongbook) ? blob.gz_wrongbook : [];
  const quiz = Array.isArray(blob.gz_quiz_log) ? blob.gz_quiz_log : [];
  const checkin = blob.gz_checkin || {};

  // 错题：取最近 50 条（含题目原文 / 我的答案 / 正确答案，供管理员复盘学情）
  const wrongList = wrong.slice(-50).reverse().map(function (w) {
    return {
      key: w.key || '',
      subjectName: w.subjectName || '',
      lessonName: w.lessonName || '',
      question: w.question || '',
      myAnswer: w.myAnswer || '',
      answer: w.answer || '',
      type: w.type || ''
    };
  });
  // 最近作答：仅带 key/对错，不下发题目原文以免体积过大
  const quizRecent = quiz.slice(-30).reverse().map(function (q) {
    return { ts: q && q.ts || 0, key: q && q.key || '', qi: q && q.qi || 0, right: !!(q && q.right) };
  });

  return {
    ok: true,
    generatedAt: Date.now(),
    profile: prof,
    wrongList: wrongList,
    quizRecent: quizRecent,
    checkin: { streak: checkin.streak || 0, total: checkin.total || 0, lastDate: checkin.lastDate || '' }
  };
}

/**
 * 全站内容分析：跨所有非管理员用户聚合，找出「薄弱学科」与「薄弱知识点」。
 * 仅返回聚合计数与正确率，不下发任何题目原文或学生答案。
 * payload: { token }
 */
async function handleAdminContent(payload) {
  const admin = requireAdmin(payload && payload.token);
  if (!admin) return { ok: false, msg: '无权限：需要管理员身份' };

  const [authRes, dataRes] = await Promise.all([
    AUTH.limit(1000).get(),
    DATA.limit(1000).get()
  ]);
  const authDocs = (authRes && authRes.data) || [];
  const dataDocs = (dataRes && dataRes.data) || [];
  const authMap = {}; authDocs.forEach(function (d) { authMap[d._id || d.phone] = d; });
  const dataMap = {}; dataDocs.forEach(function (d) { dataMap[d._id || d.phone] = d; });
  const ids = Object.keys(authMap).concat(Object.keys(dataMap)).filter(function (v, i, a) {
    return a.indexOf(v) === i;
  });

  const subj = {};  // sid -> { wrong, attempts, right }
  const less = {};  // key -> { wrong, attempts, right, subjectName, lessonName }
  ids.forEach(function (id) {
    const s = summarizeUser(id, authMap[id], dataMap[id]);
    if (s.row.isAdmin) return;
    const blob = (dataMap[id] && dataMap[id].data) || {};
    const wrong = Array.isArray(blob.gz_wrongbook) ? blob.gz_wrongbook : [];
    const quiz = Array.isArray(blob.gz_quiz_log) ? blob.gz_quiz_log : [];

    wrong.forEach(function (w) {
      const sid = String(w.key || '').split('/')[0];
      if (sid) { subj[sid] = subj[sid] || { wrong: 0, attempts: 0, right: 0 }; subj[sid].wrong++; }
      const k = w.key;
      if (k) {
        less[k] = less[k] || { wrong: 0, attempts: 0, right: 0, subjectName: w.subjectName || '', lessonName: w.lessonName || '' };
        less[k].wrong++;
        if (w.subjectName) less[k].subjectName = w.subjectName;
        if (w.lessonName) less[k].lessonName = w.lessonName;
      }
    });
    quiz.forEach(function (q) {
      const sid = String((q && q.key) || '').split('/')[0];
      if (sid) {
        subj[sid] = subj[sid] || { wrong: 0, attempts: 0, right: 0 };
        subj[sid].attempts++; subj[sid].right += (q && q.right) ? 1 : 0;
      }
      const k = q && q.key;
      if (k) {
        less[k] = less[k] || { wrong: 0, attempts: 0, right: 0, subjectName: '', lessonName: '' };
        less[k].attempts++; less[k].right += (q && q.right) ? 1 : 0;
      }
    });
  });

  const subjects = Object.keys(subj).map(function (sid) {
    const o = subj[sid];
    return {
      sid: sid, wrong: o.wrong, attempts: o.attempts, right: o.right,
      accuracy: o.attempts ? Math.round(o.right * 1000 / o.attempts) / 10 : null
    };
  }).sort(function (a, b) {
    // 正确率越低越靠前（null 视作最弱）
    return (a.accuracy == null ? -1 : a.accuracy) - (b.accuracy == null ? -1 : b.accuracy);
  });

  const weakLessons = Object.keys(less).map(function (k) {
    const o = less[k];
    return {
      key: k, subjectName: o.subjectName, lessonName: o.lessonName,
      wrong: o.wrong, attempts: o.attempts, right: o.right,
      accuracy: o.attempts ? Math.round(o.right * 1000 / o.attempts) / 10 : null
    };
  }).sort(function (a, b) { return b.wrong - a.wrong; }).slice(0, 20);

  return {
    ok: true,
    generatedAt: Date.now(),
    subjects: subjects,
    weakLessons: weakLessons,
    warnings: {
      legacySecret: SECRET_IS_LEGACY,
      progressWithoutTs: false,
      truncated: authDocs.length >= 1000 || dataDocs.length >= 1000
    }
  };
}

// 兼容两种调用方式：
//   1) 控制台 / CLI 直接调用：event = { action, payload }
//   2) HTTP 访问（API 网关）：event = { httpMethod, body(字符串), headers, ... }
function normalizeEvent(event) {
  if (!event) return { action: null, payload: {}, isHttp: false };
  if (event.httpMethod || event.requestContext || (event.body !== undefined && typeof event.body === 'string')) {
    let body = {};
    try { body = JSON.parse(event.body || '{}'); } catch (e) { body = {}; }
    return { action: body.action || null, payload: body.payload || {}, isHttp: true };
  }
  return { action: event.action || null, payload: event.payload || {}, isHttp: false };
}

function apiResponse(result, isHttp) {
  if (!isHttp) return result;
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
    body: JSON.stringify(result)
  };
}

/* ===================== 自建轻量访客统计 ===================== */

// 解析 User-Agent：返回 { device, browser, os }
function parseUA(ua) {
  ua = (ua || '').toLowerCase();
  var device = '桌面端';
  if (/ipad|tablet|kindle|playbook|silk/.test(ua)) device = '平板';
  else if (/mobile|android|iphone|ipod|blackberry|windows phone|webos|harmony|hongmeng/.test(ua)) device = '手机';
  var browser = '其他';
  if (/micromessenger/.test(ua)) browser = '微信内置';
  else if (/qqbrowser|\bqq\//.test(ua)) browser = 'QQ浏览器';
  else if (/ucbrowser|ucweb/.test(ua)) browser = 'UC浏览器';
  else if (/edg\//.test(ua)) browser = 'Edge';
  else if (/opr\/|opera/.test(ua)) browser = 'Opera';
  else if (/firefox\/|fxios/.test(ua)) browser = 'Firefox';
  else if (/chrome\/|crios\/|chromium/.test(ua)) browser = 'Chrome';
  else if (/safari\//.test(ua) && !/chrome\//.test(ua)) browser = 'Safari';
  else if (/msie|trident/.test(ua)) browser = 'IE';
  var os = '其他';
  if (/windows nt|windows phone/.test(ua)) os = 'Windows';
  else if (/iphone|ipad|ipod/.test(ua)) os = 'iOS';           // 注意：需在 mac 之前判断（iOS UA 含 "like Mac OS X"）
  else if (/harmony|hongmeng|openharmony/.test(ua)) os = 'HarmonyOS';
  else if (/android/.test(ua)) os = 'Android';                // 注意：需在 linux 之前判断（安卓 UA 含 "Linux"）
  else if (/mac os x|macintosh/.test(ua)) os = 'macOS';
  else if (/linux/.test(ua)) os = 'Linux';
  return { device: device, browser: browser, os: os };
}

function hostOf(url) {
  try {
    if (!url) return '';
    var u = new URL(url);
    return u.hostname || '';
  } catch (e) { return ''; }
}

// 把来源域名归类为「直接访问 / 搜索引擎 / 社交 / 其它站点」的可读名称（对标百度统计来源分析）
function classifySource(host, siteHost) {
  if (!host || host === siteHost) return '直接访问';
  var h = String(host).toLowerCase();
  var map = [
    ['baidu.', '百度搜索'], ['google.', '谷歌搜索'], ['bing.', '必应搜索'],
    ['sogou.', '搜狗搜索'], ['so.com', '360搜索'], ['haosou', '360搜索'], ['sm.cn', '神马搜索'],
    ['yandex', 'Yandex'], ['duckduckgo', 'DuckDuckGo'],
    ['micromessenger', '微信'], ['weixin', '微信'], ['mp.weixin', '微信公众号'],
    ['qq.com', 'QQ/腾讯'], ['weibo', '微博'], ['zhihu', '知乎'],
    ['douyin', '抖音'], ['xiaohongshu', '小红书'], ['bilibili', '哔哩哔哩'], ['toutiao', '今日头条']
  ];
  for (var i = 0; i < map.length; i++) { if (h.indexOf(map[i][0]) >= 0) return map[i][1]; }
  return host;
}

// 从 HTTP 访问事件里提取真实客户端 IP
function getClientIp(event) {
  try {
    var hd = (event && event.headers) || {};
    var xff = hd['x-forwarded-for'] || hd['X-Forwarded-For'] || hd['x-real-ip'] || hd['X-Real-IP'] || '';
    if (xff) return String(xff).split(',')[0].trim();
    if (event && event.requestContext && event.requestContext.sourceIp) return String(event.requestContext.sourceIp);
  } catch (e) { /* 忽略 */ }
  return '';
}

// 单个 IP 的归属地查询（外部接口，1.5s 超时保护；失败返回空串，绝不抛错）
async function geoLookup(ip) {
  if (!ip) return '';
  if (/^(10\.|127\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|::1$|fe80|fc|fd)/i.test(ip)) return '内网/本地';
  if (typeof fetch !== 'function') return '';
  var ctrl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
  var timer = ctrl ? setTimeout(function () { try { ctrl.abort(); } catch (e) { /* 忽略 */ } }, 1500) : null;
  try {
    var url = 'https://opendata.baidu.com/api.php?query=' + encodeURIComponent(ip) + '&co=&resource_id=6006&oe=utf8';
    var r = await fetch(url, ctrl ? { signal: ctrl.signal } : {});
    var j = await r.json();
    if (timer) { clearTimeout(timer); timer = null; }
    if (j && String(j.status) === '0' && j.data && j.data[0] && j.data[0].location) {
      var loc = String(j.data[0].location).split(' ')[0];   // "江苏省苏州市 电信" -> "江苏省苏州市"
      if (loc && !/CZ88|NET|保留|未知/i.test(loc)) return loc;
    }
    return '';
  } catch (e) {
    if (timer) { clearTimeout(timer); }
    return '';
  }
}

// 批量把 IP 解析为归属地：先读 ip_geo 缓存，未命中的每次最多外查 15 个并写回缓存
async function resolveRegions(ips) {
  var out = {};
  if (!ips || !ips.length) return out;
  var cache = {};
  try {
    var cres = await IPGEO.limit(1000).get();
    ((cres && cres.data) || []).forEach(function (d) { if (d && d._id) cache[d._id] = d.region; });
  } catch (e) {
    try { await db.createCollection('ip_geo'); } catch (e2) { /* 已存在则忽略 */ }
  }
  var miss = ips.filter(function (ip) { return !(ip in cache); });
  var toLookup = miss.slice(0, 15);
  var looked = await Promise.all(toLookup.map(function (ip) { return geoLookup(ip); }));
  for (var i = 0; i < toLookup.length; i++) {
    var reg = looked[i];
    if (reg) {
      cache[toLookup[i]] = reg;
      try { await IPGEO.doc(toLookup[i]).set({ _id: toLookup[i], region: reg, ts: Date.now() }); } catch (e) { /* 忽略 */ }
    }
  }
  ips.forEach(function (ip) { out[ip] = cache[ip] || '未知'; });
  return out;
}

// 记录一次页面访问（开放接口，无需登录/管理员）。clientIp 由 main 从请求头注入。
async function handleLogVisit(payload, clientIp) {
  var p = payload || {};
  var rec = {
    path: String(p.path || '').slice(0, 400) || '(unknown)',
    referrer: String(p.referrer || '').slice(0, 500),
    ua: String(p.ua || '').slice(0, 500),
    vid: String(p.vid || '').slice(0, 64),
    sid: String(p.sid || '').slice(0, 64),
    entry: p.entry ? 1 : 0,
    isNew: p.isNew ? 1 : 0,
    screen: String(p.screen || '').slice(0, 20),
    lang: String(p.lang || '').slice(0, 20),
    ip: String(clientIp || '').slice(0, 64),
    ts: (typeof p.ts === 'number' && p.ts > 0) ? p.ts : Date.now(),
    day: String(p.day || '').slice(0, 12)
  };
  try {
    await VISIT.add(rec);
    return { ok: true };
  } catch (e) {
    var msg = (e && e.message) ? e.message : '';
    if (/not exist|不存在|no such|missing/i.test(msg)) {
      try { await db.createCollection('visit_logs'); await VISIT.add(rec); return { ok: true }; }
      catch (e2) { return { ok: false, msg: '建集合失败: ' + ((e2 && e2.message) || e2) }; }
    }
    return { ok: false, msg: '记录失败: ' + msg };
  }
}

// 聚合访客统计（仅管理员）——输出对标百度统计的多维报表
async function handleVisitStats(payload) {
  var admin = requireAdmin(payload && payload.token);
  if (!admin) return { ok: false, msg: '无权限：需要管理员身份' };

  var days = parseInt(payload && payload.days, 10) || 30;
  days = Math.min(Math.max(days, 1), 365);
  var end = Date.now();
  var start = end - days * 86400000;

  // 拉取范围内记录（按 ts 倒序分页，遇到更早的记录即停）
  var recs = [];
  var skip = 0; var PAGE = 1000; var guard = 0;
  while (guard < 120) {
    var res = await VISIT.orderBy('ts', 'desc').skip(skip).limit(PAGE).get();
    var data = (res && res.data) || [];
    var hitOlder = false;
    for (var i = 0; i < data.length; i++) {
      var d = data[i];
      if (typeof d.ts === 'number' && d.ts < start) { hitOlder = true; continue; }
      recs.push(d);
    }
    if (data.length < PAGE || hitOlder) break;
    skip += PAGE; guard++;
  }

  var SITE_HOST = hostOf('https://shanghai-env1-d3gq2odzh654c9264-1462691854.tcloudbaseapp.com/');
  function recDay(r) {
    return (r.day && /^\d{4}-\d{2}-\d{2}/.test(r.day)) ? r.day.slice(0, 10) : dayKey(r.ts || end);
  }
  var todayKey = dayKey(end);
  var yestKey = dayKey(end - 86400000);

  var daily = {};                 // day -> { pv, uv:{}, ip:{} }
  var hourCnt = []; for (var hh = 0; hh < 24; hh++) hourCnt.push(0);
  var pageCnt = {}, entryCnt = {}, refCnt = {}, devCnt = {}, brCnt = {}, osCnt = {}, resCnt = {};
  var uvSet = {}, ipSet = {}, allVids = {}, newVids = {}, ipCount = {};
  var sessions = {};              // sid -> { min, max, count }

  recs.forEach(function (r) {
    var day = recDay(r);
    if (!daily[day]) daily[day] = { pv: 0, uv: {}, ip: {} };
    daily[day].pv++;
    if (r.vid) { daily[day].uv[r.vid] = 1; uvSet[r.vid] = 1; allVids[r.vid] = 1; if (r.isNew) newVids[r.vid] = 1; }
    var ip = r.ip || '';
    if (ip) { daily[day].ip[ip] = 1; ipSet[ip] = 1; ipCount[ip] = (ipCount[ip] || 0) + 1; }
    // 时段（东八区）
    hourCnt[new Date((r.ts || end) + 8 * 3600 * 1000).getUTCHours()]++;
    // 页面
    var pg = r.path || '(unknown)';
    pageCnt[pg] = (pageCnt[pg] || 0) + 1;
    // UA
    var ua = parseUA(r.ua);
    devCnt[ua.device] = (devCnt[ua.device] || 0) + 1;
    brCnt[ua.browser] = (brCnt[ua.browser] || 0) + 1;
    osCnt[ua.os] = (osCnt[ua.os] || 0) + 1;
    if (r.screen) resCnt[r.screen] = (resCnt[r.screen] || 0) + 1;
    // 会话（无 sid 的历史记录按 vid+day 兜底）
    var sid = r.sid || ('_' + (r.vid || 'x') + '_' + day);
    var t = (typeof r.ts === 'number') ? r.ts : end;
    if (!sessions[sid]) sessions[sid] = { min: t, max: t, count: 0 };
    sessions[sid].count++;
    if (t < sessions[sid].min) sessions[sid].min = t;
    if (t > sessions[sid].max) sessions[sid].max = t;
    // 入口页 & 来源（仅统计入口跳）
    if (r.entry) {
      entryCnt[pg] = (entryCnt[pg] || 0) + 1;
      refCnt[classifySource(hostOf(r.referrer), SITE_HOST)] = (refCnt[classifySource(hostOf(r.referrer), SITE_HOST)] || 0) + 1;
    }
  });

  // 若全是老数据（没有入口跳），退化为按全部记录统计来源/入口，避免看板空白
  if (!Object.keys(entryCnt).length) {
    recs.forEach(function (r) {
      var pg = r.path || '(unknown)';
      entryCnt[pg] = (entryCnt[pg] || 0) + 1;
      refCnt[classifySource(hostOf(r.referrer), SITE_HOST)] = (refCnt[classifySource(hostOf(r.referrer), SITE_HOST)] || 0) + 1;
    });
  }

  // IP -> 归属地
  var ipGeo = await resolveRegions(Object.keys(ipCount));
  var regionCnt = {};
  Object.keys(ipCount).forEach(function (ip) {
    var reg = ipGeo[ip] || '未知';
    regionCnt[reg] = (regionCnt[reg] || 0) + ipCount[ip];
  });

  // 概况：今日 / 昨日 / 区间累计
  function dayStat(k) {
    var d = daily[k] || { pv: 0, uv: {}, ip: {} };
    return { pv: d.pv, uv: Object.keys(d.uv).length, ip: Object.keys(d.ip).length };
  }
  var today = dayStat(todayKey);
  var yesterday = dayStat(yestKey);
  var total = { pv: recs.length, uv: Object.keys(uvSet).length, ip: Object.keys(ipSet).length };

  // 跳出率 & 人均停留（基于会话）
  var sArr = Object.keys(sessions).map(function (k) { return sessions[k]; });
  var totalSess = sArr.length;
  var bounces = sArr.filter(function (s) { return s.count <= 1; }).length;
  var bounceRate = totalSess ? Math.round(bounces * 1000 / totalSess) / 10 : 0;
  var durSum = sArr.reduce(function (a, s) { return a + Math.max(0, s.max - s.min); }, 0);
  var avgDuration = totalSess ? Math.round(durSum / totalSess / 1000) : 0;   // 秒

  // 趋势（补齐每天）
  var trend = [];
  for (var k = days - 1; k >= 0; k--) {
    var key = dayKey(end - k * 86400000);
    var row = daily[key] || { pv: 0, uv: {}, ip: {} };
    trend.push({ day: key, pv: row.pv, uv: Object.keys(row.uv).length, ip: Object.keys(row.ip).length });
  }

  // 时段分布
  var hourly = hourCnt.map(function (v, h) { return { hour: h, pv: v }; });

  // 实时访客（最近 20 条；recs 已按 ts 倒序）
  var realtime = recs.slice(0, 20).map(function (r) {
    var ua = parseUA(r.ua);
    return {
      ts: r.ts || 0,
      region: (r.ip && ipGeo[r.ip]) || '未知',
      source: classifySource(hostOf(r.referrer), SITE_HOST),
      path: r.path || '',
      device: ua.device,
      browser: ua.browser
    };
  });

  // 新老访客
  var newN = Object.keys(newVids).length;
  var allN = Object.keys(allVids).length;

  function top(obj, n) {
    return Object.keys(obj).map(function (k) { return { name: k, value: obj[k] }; })
      .sort(function (a, b) { return b.value - a.value; }).slice(0, n);
  }

  return {
    ok: true,
    stats: {
      rangeDays: days,
      today: today,
      yesterday: yesterday,
      total: total,
      pv: total.pv,           // 兼容旧字段
      uv: total.uv,
      bounceRate: bounceRate,
      avgDuration: avgDuration,
      trend: trend,
      hourly: hourly,
      realtime: realtime,
      topPages: top(pageCnt, 12),
      entryPages: top(entryCnt, 12),
      sources: top(refCnt, 10),
      regions: top(regionCnt, 12),
      devices: top(devCnt, 6),
      browsers: top(brCnt, 8),
      os: top(osCnt, 8),
      resolutions: top(resCnt, 10),
      newVsOld: { new: newN, old: Math.max(0, allN - newN) }
    }
  };
}

exports.main = async (event, context) => {
  // 处理 CORS 预检
  if (event && event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: ''
    };
  }
  const { action, payload, isHttp } = normalizeEvent(event);
  try {
    switch (action) {
      case 'register': return apiResponse(await handleRegister(payload), isHttp);
      case 'login': return apiResponse(await handleLogin(payload), isHttp);
      case 'changePassword': return apiResponse(await handleChangePassword(payload), isHttp);
      case 'getData': return apiResponse(await handleGetData(payload), isHttp);
      case 'saveData': return apiResponse(await handleSaveData(payload), isHttp);
      case 'seedAdmin': return apiResponse(await handleSeedAdmin(payload, isHttp), isHttp);
      case 'adminOverview': return apiResponse(await handleAdminOverview(payload), isHttp);
      case 'adminUserDetail': return apiResponse(await handleAdminUserDetail(payload), isHttp);
      case 'adminContent': return apiResponse(await handleAdminContent(payload), isHttp);
      case 'logVisit': return apiResponse(await handleLogVisit(payload, getClientIp(event)), isHttp);
      case 'visitStats': return apiResponse(await handleVisitStats(payload), isHttp);
      default: return apiResponse({ ok: false, msg: '未知操作: ' + action }, isHttp);
    }
  } catch (e) {
    return apiResponse({ ok: false, msg: (e && e.message) ? e.message : '服务器错误' }, isHttp);
  }
};
