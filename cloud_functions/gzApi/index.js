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

// 服务端签名密钥（仅存在于云函数内，不会下发给前端）
const SECRET = 'gz-cloudbase-api-secret-2026-7F3a9c2b';

function hmacPhone(phone) {
  return crypto.createHmac('sha256', SECRET).update('token:' + phone).digest('hex');
}
function makeToken(phone) {
  return Buffer.from(phone).toString('base64') + '.' + hmacPhone(phone);
}
function verifyToken(token) {
  if (!token || typeof token !== 'string' || token.indexOf('.') < 0) return null;
  const dot = token.indexOf('.');
  const phone = Buffer.from(token.slice(0, dot), 'base64').toString('utf8');
  const sig = token.slice(dot + 1);
  if (sig !== hmacPhone(phone)) return null;
  return phone;
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
      default: return apiResponse({ ok: false, msg: '未知操作: ' + action }, isHttp);
    }
  } catch (e) {
    return apiResponse({ ok: false, msg: (e && e.message) ? e.message : '服务器错误' }, isHttp);
  }
};
