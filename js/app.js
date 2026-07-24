/* ============================================================
 * 高中预习网站 · SPA 主逻辑
 * 路由：
 *   #/home
 *   #/subjects
 *   #/subject/{id}
 *   #/vol/{sid}/{vid}            册次页（按章节列出课时）
 *   #/lesson/{sid}/{vid}/{idx}   课时详情（图文块 + 练习）
 *   #/bank | #/wrongbook | #/progress | #/settings | #/about
 * 数据来源：js/data-gz.js（GZ_SUBJECTS / gzGetSubject / gzGetVolume / gzStats）
 * ============================================================ */

(function () {
  'use strict';

  var view = document.getElementById('view');
  var expandedSid = null; // 侧边栏当前展开的学科 id

  /* ---------- 工具 ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  var toastTimer = null;
  function toast(msg) {
    var t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }

  function lessonKey(sid, vid, idx) { return sid + '/' + vid + '/' + idx; }
  function volUrl(sid, vid) { return '#/vol/' + sid + '/' + vid; }
  function lessonUrl(sid, vid, idx) { return '#/lesson/' + sid + '/' + vid + '/' + idx; }

  function findLesson(sid, vid, idx) {
    var v = gzGetVolume(sid, vid);
    if (!v) return null;
    var p = v.points && v.points[idx];
    if (!p) return null;
    return { subject: gzGetSubject(sid), vol: v, point: p, idx: idx };
  }

  /* ---------- 路由 ---------- */
  function parseHash() {
    var h = (location.hash || '#/home').replace(/^#\/?/, '');
    var parts = h.split('/');
    return { route: parts[0] || 'home', param: parts[1] || null, param2: parts[2] || null, param3: parts[3] || null };
  }

  window.navigate = function (route, param, param2, param3) {
    var h = '#/' + route;
    if (param != null) h += '/' + param;
    if (param2 != null) h += '/' + param2;
    if (param3 != null) h += '/' + param3;
    location.hash = h;
  };

  function setNavActive(route) {
    var navRoute = (route === 'subject' || route === 'vol' || route === 'lesson') ? 'subjects' : route;
    var btns = document.querySelectorAll('.nav-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].getAttribute('data-route') === navRoute);
    }
  }

  function render() {
    var r = parseHash();
    setNavActive(r.route);
    if (r.route === 'subject' && r.param && gzGetSubject(r.param)) expandedSid = r.param;
    renderSidebar(r);
    renderTopbarUser();
    if (r.route === 'lesson' && r.param && r.param2 != null && r.param3 != null) renderLesson(r.param, r.param2, parseInt(r.param3, 10));
    else if (r.route === 'vol' && r.param && r.param2 != null) renderVolume(r.param, r.param2);
    else if (r.route === 'subject' && r.param) renderSubject(r.param);
    else if (r.route === 'subjects') renderSubjects();
    else if (r.route === 'about') renderAbout();
    else if (r.route === 'bank') renderBank(r.param);
    else if (r.route === 'wrongbook') renderWrongbook();
    else if (r.route === 'progress') renderProgress();
    else if (r.route === 'settings') renderSettings();
    else renderHome();
    document.body.classList.remove('sidebar-open');
    window.scrollTo(0, 0);
  }

  /* ---------- 侧边栏 ---------- */
  // 多个科目可同时展开（持久化到 localStorage）
  function getOpenSids() {
    try { var s = JSON.parse(localStorage.getItem('gz_sb_open') || '[]'); return Array.isArray(s) ? s : []; }
    catch (e) { return []; }
  }
  function setOpenSids(arr) {
    try { localStorage.setItem('gz_sb_open', JSON.stringify(arr.slice(0, 50))); } catch (e) {}
  }
  function toggleOpenSid(sid) {
    var arr = getOpenSids();
    var i = arr.indexOf(sid);
    if (i >= 0) arr.splice(i, 1); else arr.unshift(sid);
    setOpenSids(arr);
  }

  function renderSidebar(r) {
    var sb = document.getElementById('sidebar');
    if (!sb) return;
    var cur = (r && r.route === 'subject') ? r.param
      : (r && (r.route === 'vol' || r.route === 'lesson')) ? r.param : null;
    var openSet = getOpenSids();
    // 当前页所属科目自动展开
    if (cur && openSet.indexOf(cur) < 0) { openSet.unshift(cur); setOpenSids(openSet); }

    var items = GZ_SUBJECTS.map(function (s) {
      var isOpen = openSet.indexOf(s.id) >= 0;
      var isCurrent = (cur === s.id);
      var vols = s.volumes.map(function (v) {
        var pts = v.points || [];
        var right = pts.length > 0 ? (pts.length + ' 课时') : '建设中';
        return '' +
          '<div class="sb-vol" onclick="window.__volClick(\'' + esc(s.id) + '\',\'' + esc(v.id) + '\')">' +
            '<span><i class="sb-grade">' + esc(v.grade || '') + '</i>' + esc(v.name) + '</span><span class="n">' + right + '</span>' +
          '</div>';
      }).join('');

      return '' +
        '<li class="sb-subject' + (isOpen ? ' open' : '') + (isCurrent ? ' current' : '') + '" style="--sc:' + esc(s.color) + '" data-sid="' + esc(s.id) + '">' +
          '<div class="sb-subj-head" onclick="window.__sbHead(\'' + esc(s.id) + '\')" data-tip="' + esc(s.name) + '">' +
            '<span class="sb-icon">' + esc(s.icon) + '</span>' +
            '<span class="sb-name">' + esc(s.name) + '</span>' +
            '<span class="sb-arrow">▶</span>' +
          '</div>' +
          '<div class="sb-vols">' + vols + '</div>' +
        '</li>';
    }).join('');

    var FUNCS = [
      { route: 'bank',      icon: '📝', name: '题库' },
      { route: 'wrongbook', icon: '📕', name: '错题本' },
      { route: 'progress',  icon: '📊', name: '学习进度' },
      { route: 'settings',  icon: '⚙️', name: '设置' }
    ];
    var funcs = FUNCS.map(function (f) {
      var active = (r && r.route === f.route) ? ' active' : '';
      return '' +
        '<li class="sb-func' + active + '" onclick="navigate(\'' + f.route + '\')" data-tip="' + f.name + '">' +
          '<span class="sb-icon">' + f.icon + '</span>' +
          '<span class="sb-name">' + f.name + '</span>' +
        '</li>';
    }).join('');

    sb.innerHTML =
      '<div class="sb-header">' +
        '<span class="sb-title">学科目录</span>' +
        '<button class="sb-collapse-btn" onclick="window.__toggleSidebarCollapse()" title="折叠/展开侧边栏">«</button>' +
      '</div>' +
      '<ul class="sb-list">' + items + '</ul>' +
      '<div class="sb-title sb-title-func">功能</div>' +
      '<ul class="sb-list sb-func-list">' + funcs + '</ul>' +
      '<button class="sb-expand-btn" onclick="window.__toggleSidebarCollapse()" title="展开侧边栏">»</button>';
    bindSidebarTooltip();
  }

  // 整体折叠/展开侧边栏
  function toggleSidebarCollapse() {
    var collapsed = !document.body.classList.contains('sb-collapsed');
    document.body.classList.toggle('sb-collapsed', collapsed);
    try { localStorage.setItem('gz_sb_collapsed', collapsed ? '1' : '0'); } catch (e) {}
    var r = parseHash();
    renderSidebar(r);
  }
  window.__toggleSidebarCollapse = toggleSidebarCollapse;

  window.__sbHead = function (sid) {
    toggleOpenSid(sid);
    var r = parseHash();
    if (r.route !== 'subject' || r.param !== sid) {
      navigate('subject', sid);
    } else {
      renderSidebar(r);
    }
  };

  window.__toggleSidebar = function (force) {
    var open = (typeof force === 'boolean') ? force : !document.body.classList.contains('sidebar-open');
    document.body.classList.toggle('sidebar-open', open);
  };

  // 恢复折叠状态（页面加载时）
  function restoreSidebarCollapsed() {
    try {
      if (localStorage.getItem('gz_sb_collapsed') === '1') {
        document.body.classList.add('sb-collapsed');
      }
    } catch (e) {}
  }
  restoreSidebarCollapsed();

  // 收起态 hover tooltip（实 DOM）
  function ensureSbTooltip() {
    var t = document.getElementById('sbTooltip');
    if (!t) {
      t = document.createElement('div');
      t.id = 'sbTooltip';
      t.className = 'sb-tooltip';
      document.body.appendChild(t);
    }
    return t;
  }
  function bindSidebarTooltip() {
    var tip = ensureSbTooltip();
    var sel = '.sb-subj-head[data-tip], .sb-func[data-tip]';
    document.querySelectorAll(sel).forEach(function (el) {
      el.onmouseenter = function (e) {
        if (!document.body.classList.contains('sb-collapsed')) return;
        var r = el.getBoundingClientRect();
        tip.textContent = el.getAttribute('data-tip');
        tip.style.left = (r.right + 8) + 'px';
        tip.style.top = (r.top + r.height / 2) + 'px';
        tip.classList.add('show');
      };
      el.onmouseleave = function () {
        tip.classList.remove('show');
      };
    });
  }
  // 在 renderSidebar 末尾调用
  var _origRenderSidebar = renderSidebar;

  /* 册次点击：有内容进册次页，否则提示建设中 */
  window.__volClick = function (sid, vid) {
    var v = gzGetVolume(sid, vid);
    if (v && (v.points || []).length > 0) navigate('vol', sid, vid);
    else toast('「' + (v ? v.name : '') + '」内容建设中，敬请期待');
  };

  function volCounts(s) {
    var books = 0, topics = 0;
    s.volumes.forEach(function (v) { if (v.grade === '高三') topics++; else books++; });
    return { books: books, topics: topics };
  }

  /* ---------- 学科卡片 ---------- */
  function subjectCardHTML(s) {
    var c = volCounts(s);
    var meta = c.books + ' 册教材' + (c.topics ? ' · ' + c.topics + ' 个高三专题' : '');
    return '' +
      '<div class="subject-card" style="--sc:' + esc(s.color) + '" onclick="navigate(\'subject\',\'' + esc(s.id) + '\')">' +
        '<div class="subject-head">' +
          '<div class="subject-icon">' + esc(s.icon) + '</div>' +
          '<div><div class="subject-name">' + esc(s.name) + '</div>' +
          '<div class="subject-vols">' + meta + '</div></div>' +
        '</div>' +
        '<div class="subject-desc">' + esc(s.desc) + '</div>' +
        '<div class="subject-foot">' +
          '<span class="badge-coming">内容建设中</span>' +
          '<span class="go-arrow">查看 →</span>' +
        '</div>' +
      '</div>';
  }

  /* ---------- 励志名言 ---------- */
  var QUOTES = [
    { text: '书山有路勤为径，学海无涯苦作舟。', who: '韩愈' },
    { text: '宝剑锋从磨砺出，梅花香自苦寒来。', who: '《警世贤文》' },
    { text: '业精于勤，荒于嬉；行成于思，毁于随。', who: '韩愈' },
    { text: '不积跬步，无以至千里；不积小流，无以成江海。', who: '荀子' },
    { text: '天行健，君子以自强不息。', who: '《周易》' },
    { text: '路漫漫其修远兮，吾将上下而求索。', who: '屈原' },
    { text: '纸上得来终觉浅，绝知此事要躬行。', who: '陆游' },
    { text: '博观而约取，厚积而薄发。', who: '苏轼' },
    { text: '非学无以广才，非志无以成学。', who: '诸葛亮' },
    { text: '锲而不舍，金石可镂。', who: '荀子' },
    { text: '千里之行，始于足下。', who: '老子' },
    { text: '少壮不努力，老大徒伤悲。', who: '《长歌行》' },
    { text: '合抱之木，生于毫末；九层之台，起于累土。', who: '老子' },
    { text: '苟日新，日日新，又日新。', who: '《礼记·大学》' }
  ];
  function dailyQuote() {
    var now = new Date();
    var seed = now.getFullYear() * 1000 + (now.getMonth() + 1) * 50 + now.getDate();
    return QUOTES[seed % QUOTES.length];
  }

  /* ---------- 首页 ---------- */
  function allLessons() {
    var out = [];
    GZ_SUBJECTS.forEach(function (s) {
      s.volumes.forEach(function (v) {
        if (v.grade === '高三') return;
        (v.points || []).forEach(function (p, i) {
          out.push({ subjectId: s.id, subjectName: s.name, color: s.color, volName: v.name, name: p.name, chapter: p.chapter, hash: lessonUrl(s.id, v.id, i) });
        });
      });
    });
    return out;
  }
  function makeHomeSection(title, sub, lessons) {
    lessons = lessons || [];
    var cards;
    if (lessons.length > 0) {
      cards = lessons.slice(0, 3).map(lessonCardHTML).join('');
    } else {
      cards = '';
      for (var i = 0; i < 3; i++) {
        cards += '<div class="lesson-card is-empty">' +
                   '<div class="lesson-card-ph"></div>' +
                   '<div class="lesson-card-hint">课时内容建设中，敬请期待</div>' +
                 '</div>';
      }
    }
    return '<section class="home-section">' +
             '<div class="home-section-head">' +
               '<span class="home-section-title">' + esc(title) + '</span>' +
               '<span class="home-section-sub">' + esc(sub) + '</span>' +
             '</div>' +
             '<div class="lesson-grid">' + cards + '</div>' +
           '</section>';
  }
  function lessonCardHTML(l) {
    return '<a class="lesson-card" style="--sc:' + esc(l.color || '') + '" href="' + esc(l.hash || '#/home') + '">' +
             '<div class="lesson-card-top">' +
               '<span class="lesson-card-subj">' + esc(l.subjectName || '') + '</span>' +
               '<span class="lesson-card-vol">' + esc(l.volName || '') + '</span>' +
             '</div>' +
             '<div class="lesson-card-name">' + esc(l.name || '') + '</div>' +
             (l.chapter ? '<div class="lesson-card-chapter">' + esc(l.chapter) + '</div>' : '') +
           '</a>';
  }
  function pushRecent(sid, vid, idx, name) {
    var list = lsGet('gz_recent', []);
    var key = lessonKey(sid, vid, idx);
    list = list.filter(function (x) { return x.key !== key; });
    list.unshift({ key: key, sid: sid, vid: vid, idx: idx, name: name });
    if (list.length > 12) list = list.slice(0, 12);
    lsSet('gz_recent', list);
  }
  function recentLessons() {
    var list = lsGet('gz_recent', []);
    var out = [];
    list.forEach(function (r) {
      var f = findLesson(r.sid, r.vid, r.idx);
      if (f) out.push({ subjectId: r.sid, subjectName: f.subject.name, color: f.subject.color, volName: f.vol.name, name: f.point.name, chapter: f.point.chapter, hash: lessonUrl(r.sid, r.vid, r.idx) });
    });
    return out;
  }

  /* ---------- 每日签到 ---------- */
  function todayStr() {
    var d = new Date();
    var m = String(d.getMonth() + 1);
    var day = String(d.getDate());
    return d.getFullYear() + '-' + (m.length < 2 ? '0' + m : m) + '-' + (day.length < 2 ? '0' + day : day);
  }
  function yesterdayStr() {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var m = String(d.getMonth() + 1);
    var day = String(d.getDate());
    return d.getFullYear() + '-' + (m.length < 2 ? '0' + m : m) + '-' + (day.length < 2 ? '0' + day : day);
  }
  function getCheckin() {
    return lsGet('gz_checkin', { lastDate: '', streak: 0, total: 0, history: [], todayLuck: null, luckDate: '' });
  }
  function setCheckin(c) { lsSet('gz_checkin', c); }

  // 六壬签：六种运势（参考洛谷签到 + 小六壬）
  // 宜/忌各 2 条（一行一条），玩梗向
  var LUCK_OF_DAY = [
    {
      key: 'daan', name: '大安', subtitle: '身不动时', element: '木', direction: '东',
      numbers: [1, 5, 7], color: '#10b981', emoji: '🌳',
      meaning: '静止、心安、吉祥',
      yi: ['摸鱼发呆，让心彻底躺平', '收藏今天的好题，明天再战'],
      ji: ['熬夜赶作业', '和同学对答案（容易吵）']
    },
    {
      key: 'liulian', name: '留连', subtitle: '人未归时', element: '水', direction: '北',
      numbers: [2, 8, 10], color: '#3b82f6', emoji: '🌊',
      meaning: '拖延、阻碍、纠缠',
      yi: ['佛系等外卖，饿过头再点', '整理书架 / 复盘旧题'],
      ji: ['催人催快递', '临时定 deadline']
    },
    {
      key: 'suxi', name: '速喜', subtitle: '人即至时', element: '火', direction: '南',
      numbers: [3, 6, 9], color: '#ef4444', emoji: '🔥',
      meaning: '快速、吉利、时机已到',
      yi: ['抢答抢红包，时机到了就上', '突击考试（趁手感热）'],
      ji: ['犹豫不决，错失良机', '课上偷偷点开红包']
    },
    {
      key: 'chikou', name: '赤口', subtitle: '官事凶时', element: '金', direction: '西',
      numbers: [4, 7, 10], color: '#a8a29e', emoji: '⚔️',
      meaning: '不吉利、惊恐、口舌是非',
      yi: ['装死沉默，先回房间冷静', '退群保平安（划掉）关朋友圈'],
      ji: ['抬杠、吵架、告老师', '点外卖写差评']
    },
    {
      key: 'xiaoji', name: '小吉', subtitle: '人来喜时', element: '木（六合）', direction: '—',
      numbers: [1, 5, 7], color: '#14b8a6', emoji: '🌸',
      meaning: '和合、吉利',
      yi: ['约饭组队、约图书馆', '加好友 / 拉人合作'],
      ji: ['独来独往、宅家不出', '推掉所有邀约']
    },
    {
      key: 'kongwang', name: '空亡', subtitle: '音信稀时', element: '土（勾陈）', direction: '中央',
      numbers: [3, 6, 9], color: '#a16207', emoji: '🌫️',
      meaning: '落空、无果',
      yi: ['睡觉做梦、断舍离', '佛系躺平、不强求'],
      ji: ['期待回复 / 查快递', '问「你在吗」+ 表白']
    }
  ];

  // 随机抽一个运势（每次签到时随机；同一天已签到就复用上次的，重置后清空）
  function pickRandomLuck() {
    return LUCK_OF_DAY[Math.floor(Math.random() * LUCK_OF_DAY.length)];
  }

  function doCheckin() {
    var c = getCheckin();
    var t = todayStr();
    if (c.lastDate === t) { toast('今日已签到，明天再来吧～'); return; }
    var y = yesterdayStr();
    if (c.lastDate === y) c.streak = (c.streak || 0) + 1;
    else c.streak = 1;
    c.total = (c.total || 0) + 1;
    c.lastDate = t;
    c.history = c.history || [];
    c.history.push(t);
    if (c.history.length > 60) c.history = c.history.slice(-60);
    // 随机抽一个运势（保证每次签到体验不同；重置后下次再抽）
    var luck = pickRandomLuck();
    c.todayLuck = luck;
    c.luckDate = t;
    setCheckin(c);
    renderHome();
    toast('签到成功！今日运势：' + luck.name + ' ' + luck.emoji);
  }
  window.__doCheckin = doCheckin;

  function resetCheckin() {
    if (!confirm('确定要重置签到吗？连续天数和累计天数都会清空，明天重新开始。')) return;
    setCheckin({ lastDate: '', streak: 0, total: 0, history: [], todayLuck: null, luckDate: '' });
    renderHome();
    toast('签到已重置');
  }
  window.__resetCheckin = resetCheckin;

  // 渲染运势块（洛谷风：极简，签到前后同结构，仅底部状态不同）
  function renderLuckBlock(luck) {
    var yi = luck.yi || [];
    var ji = luck.ji || [];
    // 2×2 网格：第 1 行 yi[0]+ji[0]，第 2 行 yi[1]+ji[1]
    var rowsHtml = '';
    for (var i = 0; i < 2; i++) {
      rowsHtml += '<div class="luck-grid-row">' +
        '<div class="luck-cell luck-cell-yi"><span class="luck-cell-tag">宜</span><span class="luck-cell-text">' + esc(yi[i] || '') + '</span></div>' +
        '<div class="luck-cell luck-cell-ji"><span class="luck-cell-tag">忌</span><span class="luck-cell-text">' + esc(ji[i] || '') + '</span></div>' +
      '</div>';
    }
    return '' +
      '<div class="luck-card-inline" data-luck="' + esc(luck.key) + '" style="--luck-color:' + luck.color + '">' +
        '<div class="luck-card-center">' +
          '<div class="luck-card-emoji">' + luck.emoji + '</div>' +
          '<div class="luck-card-name">' + esc(luck.name) + '</div>' +
          '<div class="luck-card-sub">「' + esc(luck.subtitle) + '」 · ' + esc(luck.element) + ' · ' + esc(luck.direction) + '方</div>' +
          '<div class="luck-card-meaning">' + esc(luck.meaning) + '</div>' +
        '</div>' +
        '<div class="luck-card-grid">' + rowsHtml + '</div>' +
      '</div>';
  }

  // 运势弹窗（已弃用：运势现在直接显示在签到卡内，见 renderLuckBlock）
  // function showLuckModal(luck, dateStr) { /* 旧版弹窗逻辑，不再调用 */ }
  // window.__showLuck = null; // 保留符号位，避免其他模块误用

  function getWeekdayName(dateStr) {
    var p = dateStr.split('-');
    var d = new Date(parseInt(p[0], 10), parseInt(p[1], 10) - 1, parseInt(p[2], 10));
    return ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][d.getDay()];
  }

  function renderCheckinCard() {
    var c = getCheckin();
    var t = todayStr();
    var signed = (c.lastDate === t);

    // 未签到：显示日期 + 签到按钮（含 hook 装饰）
    if (!signed) {
      // 展示一个未知的"诱饵"运势（用占位 emoji），引导签到
      var teasers = [
        { emoji: '🌳', hint: '大安 · 静止心安' },
        { emoji: '🌊', hint: '留连 · 拖延阻碍' },
        { emoji: '🔥', hint: '速喜 · 时机已到' },
        { emoji: '⚔️', hint: '赤口 · 口舌是非' },
        { emoji: '🌸', hint: '小吉 · 和合吉利' },
        { emoji: '🌫️', hint: '空亡 · 落空无果' }
      ];
      // 随机选一个当 teaser（基于 day-of-year，每天固定一个）
      var d = new Date();
      var dayOfYear = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
      var teaser = teasers[dayOfYear % teasers.length];
      return '' +
        '<div class="checkin-card">' +
          '<div class="checkin-head"><div class="checkin-title">📅 每日签到</div></div>' +
          '<div class="checkin-body">' +
            '<div class="checkin-hook">' +
              '<div class="checkin-hook-emoji">' + teaser.emoji + '</div>' +
              '<div class="checkin-hook-text">今日签运待揭晓</div>' +
              '<div class="checkin-hook-hint">可能是「' + teaser.hint + '」或其中之一</div>' +
            '</div>' +
            '<div class="checkin-date-big">' + esc(t) + '</div>' +
            '<div class="checkin-date-weekday">' + esc(getWeekdayName(t)) + '</div>' +
            '<button class="checkin-btn" onclick="window.__doCheckin()">签 到 揭 晓</button>' +
          '</div>' +
          '<div class="checkin-foot">' +
            '<button class="checkin-reset-btn" onclick="window.__resetCheckin()" title="重置签到">↻</button>' +
          '</div>' +
        '</div>';
    }

    // 已签到：显示运势 + 宜/忌（用 c.todayLuck；旧数据无 todayLuck 时随机补一个）
    var todayLuck = (c.luckDate === t && c.todayLuck) ? c.todayLuck : pickRandomLuck();
    return '' +
      '<div class="checkin-card checkin-card-luck is-signed">' +
        renderLuckBlock(todayLuck) +
        '<div class="checkin-foot">' +
          '<span class="checkin-status">✓ 今日已签到</span>' +
          '<button class="checkin-reset-btn" onclick="window.__resetCheckin()" title="重置签到">↻</button>' +
        '</div>' +
      '</div>';
  }

  function renderHome() {
    var st = gzStats();
    var q = dailyQuote();
    var pool = allLessons();
    var html = '' +
      '<div class="home-top">' +
        '<section class="hero">' +
          '<h1>欢迎来到高中预习网站 🎓</h1>' +
          '<p>覆盖高中全部 ' + st.subjects + ' 门学科，按新课标教材册次组织。提前预习、系统梳理，高中三年从容开局。</p>' +
          '<div class="hero-chips">' +
            '<span class="hero-chip">📚 全学科覆盖</span>' +
            '<span class="hero-chip">🗂️ 按教材册次组织</span>' +
            '<span class="hero-chip">✏️ 知识点 + 练习</span>' +
            '<span class="hero-chip">🆓 无需登录</span>' +
          '</div>' +
          '<div class="hero-stats">' +
            '<div class="hero-stat"><b>' + st.subjects + '</b><span>门学科</span></div>' +
            '<div class="hero-stat"><b>' + st.volumes + '</b><span>册教材</span></div>' +
            '<div class="hero-stat"><b>' + st.points + '</b><span>个课时</span></div>' +
          '</div>' +
        '</section>' +
        '<aside class="checkin-section">' + renderCheckinCard() + '</aside>' +
      '</div>' +
      '<section class="quote-bar">' +
        '<span class="quote-bar-label">📖 每日一言</span>' +
        '<span class="quote-bar-text">' + esc(q.text) + '</span>' +
        '<span class="quote-bar-line"></span>' +
        '<span class="quote-bar-who">' + esc(q.who) + '</span>' +
      '</section>' +
      makeHomeSection('⭐ 今日推荐', '为你精选的预习课时', pool.length ? pool.slice(0, 3) : []) +
      makeHomeSection('🕒 最近学习', '继续上次的进度', pool.length ? recentLessons() : []);
    view.innerHTML = html;
  }

  /* ---------- 全部学科 ---------- */
  function renderSubjects() {
    view.innerHTML = '' +
      '<h2 class="section-title">📚 全部学科（' + GZ_SUBJECTS.length + ' 门）</h2>' +
      '<div class="subject-grid">' + GZ_SUBJECTS.map(subjectCardHTML).join('') + '</div>';
  }

  /* ---------- 学科详情 ---------- */
  function renderSubject(id) {
    var s = gzGetSubject(id);
    if (!s) { view.innerHTML = '<div class="empty-tip"><div class="big">🤔</div><p>没有找到这个学科</p></div>'; return; }
    function volCardHTML(v) {
      var n = (v.points || []).length;
      if (n > 0) {
        return '' +
          '<div class="volume-card has-content" onclick="window.__volClick(\'' + esc(s.id) + '\',\'' + esc(v.id) + '\')">' +
            '<div class="volume-top"><div class="volume-name">' + esc(v.name) + '</div><span class="badge-building">' + n + ' 个课时</span></div>' +
            '<div class="volume-desc">' + esc(v.desc) + '</div>' +
          '</div>';
      }
      return '' +
        '<div class="volume-card" onclick="window.__volClick(\'' + esc(s.id) + '\',\'' + esc(v.id) + '\')">' +
          '<div class="volume-top"><div class="volume-name">' + esc(v.name) + '</div><span class="badge-building">内容建设中</span></div>' +
          '<div class="volume-desc">' + esc(v.desc) + '</div>' +
        '</div>';
    }
    var gradeSubMap = { '高一': '必修阶段', '高二': '选择性必修阶段', '高三': '总复习阶段' };
    var gradeUnit = { '高一': '册', '高二': '册', '高三': '个专题' };
    var groups = gzGradeGroups(s);
    var hasG3 = false;
    var body = groups.map(function (g) {
      if (g.grade === '高三') hasG3 = true;
      var sub = (gradeSubMap[g.grade] || '') + ' · ' + g.vols.length + ' ' + (gradeUnit[g.grade] || '册');
      var note = g.grade === '高三'
        ? '<div class="grade-note">高三不学新课，以一轮、二轮总复习为主。以下复习专题内容建设中，敬请期待。</div>'
        : '';
      return '' +
        '<div class="grade-group">' +
          '<div class="grade-head">' +
            '<span class="grade-tag">' + esc(g.grade) + '</span>' +
            '<span class="grade-sub">' + sub + '</span>' +
          '</div>' + note +
          '<div class="volume-list" style="--sc:' + esc(s.color) + '">' + g.vols.map(volCardHTML).join('') + '</div>' +
        '</div>';
    }).join('') +
    (hasG3 ? '' :
      '<div class="grade-group">' +
        '<div class="grade-head"><span class="grade-tag">高三</span><span class="grade-sub">总复习阶段 · 无新教材</span></div>' +
        '<div class="grade-note">高三不学新课，以一轮、二轮总复习为主。复习专题内容规划中，敬请期待。</div>' +
      '</div>');

    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / <a onclick="navigate(\'subjects\')">全部学科</a> / ' + esc(s.name) + '</div>' +
      '<div class="subject-hero" style="--sc:' + esc(s.color) + '">' +
        '<div class="subject-icon">' + esc(s.icon) + '</div>' +
        '<div><h2>' + esc(s.name) + '</h2><p>' + esc(s.desc) + '</p></div>' +
      '</div>' +
      '<h2 class="section-title">📖 教材册次（' + volCounts(s).books + ' 册教材 + ' + volCounts(s).topics + ' 个高三专题 · 按年级分组）</h2>' +
      body;
  }

  /* ---------- 册次页（按章节列出课时） ---------- */
  function renderVolume(sid, vid) {
    var v = gzGetVolume(sid, vid);
    if (!v) { view.innerHTML = '<div class="empty-tip"><div class="big">🤔</div><p>没有找到这个册次</p></div>'; return; }
    var s = gzGetSubject(sid);
    var pts = v.points || [];
    var crumb = '<a onclick="navigate(\'home\')">首页</a> / <a onclick="navigate(\'subject\',\'' + esc(sid) + '\')">' + esc(s.name) + '</a> / ' + esc(v.name);

    if (!pts.length) {
      view.innerHTML = '<div class="crumb">' + crumb + '</div>' +
        '<div class="subject-hero" style="--sc:' + esc(s.color) + '"><div class="subject-icon">' + esc(s.icon) + '</div><div><h2>' + esc(v.name) + '</h2><p>' + esc(v.desc) + '</p></div></div>' +
        '<div class="empty-tip">📦 「' + esc(v.name) + '」内容建设中，敬请期待。</div>';
      return;
    }
    // 按章节分组
    var groups = [];
    var map = {};
    pts.forEach(function (p, i) {
      var ch = p.chapter || '课时';
      if (!map[ch]) { map[ch] = []; groups.push(ch); }
      map[ch].push({ p: p, i: i });
    });
    var body = groups.map(function (ch) {
      var items = map[ch].map(function (o) {
        var p = o.p;
        var tags = '<span class="lp-chapter">' + esc(p.chapter || '') + '</span>';
        if (p.difficulty) tags += '<span class="lp-diff lp-diff-' + esc(p.difficulty) + '">' + esc(p.difficulty) + '</span>';
        var exN = (p.exercises || []).length;
        return '' +
          '<a class="lesson-pill" href="' + lessonUrl(sid, vid, o.i) + '">' +
            '<div class="lp-main"><div class="lp-name">' + esc(p.name) + '</div>' + tags + '</div>' +
            '<div class="lp-meta">' + (exN ? (exN + ' 题练习') : '图文讲解') + ' <span class="lp-go">→</span></div>' +
          '</a>';
      }).join('');
      return '<div class="chapter-block"><div class="chapter-title">' + esc(ch) + '</div><div class="lesson-list">' + items + '</div></div>';
    }).join('');

    view.innerHTML = '<div class="crumb">' + crumb + '</div>' +
      '<div class="subject-hero" style="--sc:' + esc(s.color) + '"><div class="subject-icon">' + esc(s.icon) + '</div>' +
        '<div><h2>' + esc(v.name) + '</h2><p>' + esc(v.desc) + ' · 共 ' + pts.length + ' 课时</p></div></div>' +
      '<h2 class="section-title">📑 课时目录</h2>' + body;
  }

  /* ---------- 课时详情 ---------- */
  function renderLesson(sid, vid, idx) {
    var f = findLesson(sid, vid, idx);
    if (!f) { view.innerHTML = '<div class="empty-tip"><div class="big">🤔</div><p>没有找到这个课时</p></div>'; return; }
    var s = f.subject, v = f.vol, p = f.point;
    pushRecent(sid, vid, idx, p.name);
    var crumb = '<a onclick="navigate(\'home\')">首页</a> / <a onclick="navigate(\'subject\',\'' + esc(sid) + '\')">' + esc(s.name) + '</a> / <a href="' + volUrl(sid, vid) + '">' + esc(v.name) + '</a> / ' + esc(p.name);

    var blocks = (p.content || []).map(renderContentBlock).join('');
    var exHTML = renderExercises(p, sid, vid, idx);

    // 上一课 / 下一课
    var pts = v.points || [];
    var prev = idx > 0 ? '<a class="nav-prev" href="' + lessonUrl(sid, vid, idx - 1) + '">← ' + esc(pts[idx - 1].name) + '</a>' : '<span class="nav-prev disabled">← 已是第一课</span>';
    var next = idx < pts.length - 1 ? '<a class="nav-next" href="' + lessonUrl(sid, vid, idx + 1) + '">' + esc(pts[idx + 1].name) + ' →</a>' : '<span class="nav-next disabled">已是最后一课 →</span>';

    view.innerHTML = '<div class="crumb">' + crumb + '</div>' +
      '<article class="lesson" style="--sc:' + esc(s.color) + '">' +
        '<header class="lesson-head">' +
          '<div class="lesson-kicker">' + esc(v.name) + ' · ' + esc(p.chapter || '') + '</div>' +
          '<h1 class="lesson-title">' + esc(p.name) + '</h1>' +
          (p.author ? '<div class="lesson-author">' + esc(p.author) + '</div>' : '') +
          (p.difficulty ? '<span class="lp-diff lp-diff-' + esc(p.difficulty) + '">难度：' + esc(p.difficulty) + '</span>' : '') +
        '</header>' +
        '<div class="lesson-body">' + blocks + '</div>' +
        '<section class="exercises" id="exercises"><h2 class="ex-title">📝 课后练习（' + (p.exercises || []).length + ' 题）</h2>' + exHTML + '</section>' +
        '<div class="lesson-nav">' + prev + next + '</div>' +
      '</article>';
  }

  /* ---------- 内容块渲染 ---------- */
  function blockTip(cls, label, text) {
    return '<div class="' + cls + '"><div class="box-label">' + esc(label) + '</div><div>' + text + '</div></div>';
  }
  function renderContentBlock(b) {
    if (!b) return '';
    switch (b.type) {
      case 'heading':   return '<h3 class="b-heading">' + esc(b.text) + '</h3>';
      case 'paragraph': return '<p class="b-paragraph">' + esc(b.text) + '</p>';
      case 'keypoint':  return blockTip('b-keypoint', b.label || '重点', b.text || '');
      case 'tip':       return blockTip('b-tip', b.label || '提示', b.text || '');
      case 'warn':      return blockTip('b-warn', b.label || '注意', b.text || '');
      case 'list':      return '<ul class="b-list">' + (b.items || []).map(function (it) { return '<li>' + esc(it) + '</li>'; }).join('') + '</ul>';
      case 'svg':       return '<figure class="b-figure"><div class="b-svg">' + b.svg + '</div>' + (b.caption ? '<figcaption>' + esc(b.caption) + '</figcaption>' : '') + '</figure>';
      case 'table':     return '<div class="b-table-wrap"><table class="b-table"><thead><tr>' + (b.headers || []).map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') + '</tr></thead><tbody>' + (b.rows || []).map(function (row) { return '<tr>' + row.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      case 'formula':   return '<div class="b-formula">' + esc(b.text) + '</div>';
      case 'example':   return blockTip('b-example', '例题', b.text || '');
      case 'reading':   return blockTip('b-reading', '阅读', b.text || '');
      case 'poem':      return '<div class="b-poem">' + esc(b.text).replace(/\n/g, '<br>') + '</div>';
      default:          return '';
    }
  }

  /* ---------- 练习 / 答题引擎 ---------- */
  function renderExercises(p, sid, vid, idx) {
    var ex = p.exercises || [];
    if (!ex.length) return '<div class="b-empty">本课暂无练习。</div>';
    var key = lessonKey(sid, vid, idx);
    return ex.map(function (q, i) {
      var opts = '';
      if (q.type === 'choice') {
        opts = (q.options || []).map(function (o, oi) {
          return '<button class="opt" data-q="' + i + '" data-val="' + esc(o) + '">' +
                   '<span class="opt-key">' + String.fromCharCode(65 + oi) + '</span>' +
                   '<span class="opt-txt">' + esc(o) + '</span></button>';
        }).join('');
      } else {
        opts = '<input class="fill-input" id="fill-' + i + '" placeholder="请输入答案" />';
      }
      var faved = isFav(key, i);
      return '<div class="quiz" data-q="' + i + '" data-type="' + q.type + '">' +
        '<div class="quiz-q"><span class="quiz-no">' + (i + 1) + '</span><span>' + esc(q.question) + '</span>' +
        '<button class="quiz-fav' + (faved ? ' is-fav' : '') + '" title="' + (faved ? '取消收藏' : '收藏本题') + '" onclick="window.__toggleFav(\'' + esc(sid) + '\',\'' + esc(vid) + '\',' + idx + ',' + i + ')">' + (faved ? '★' : '☆') + '</button>' +
        '</div>' +
        '<div class="quiz-opts">' + opts + '</div>' +
        '<div class="quiz-actions"><button class="quiz-submit" onclick="window.__submitQuiz(\'' + esc(sid) + '\',\'' + esc(vid) + '\',' + idx + ',' + i + ')">提交</button><span class="quiz-feedback" id="fb-' + i + '"></span></div>' +
        '<div class="quiz-exp" id="exp-' + i + '"></div>' +
      '</div>';
    }).join('');
  }

  window.__submitQuiz = function (sid, vid, idx, qi) {
    var f = findLesson(sid, vid, idx);
    if (!f) return;
    var q = (f.point.exercises || [])[qi];
    if (!q) return;
    var box = document.querySelector('.quiz[data-q="' + qi + '"]');
    if (!box) return;
    var fb = document.getElementById('fb-' + qi);
    var exp = document.getElementById('exp-' + qi);
    var correct;
    if (q.type === 'choice') {
      var sel = box.querySelector('.opt.sel');
      if (!sel) { toast('请先选择一个选项'); return; }
      correct = (sel.getAttribute('data-val') === String(q.answer));
    } else {
      var inp = document.getElementById('fill-' + qi);
      var val = (inp.value || '').trim();
      if (!val) { toast('请先填写答案'); return; }
      var ans = String(q.answer).trim();
      correct = (val === ans || (ans.indexOf('|') >= 0 && ans.split('|').map(function (x) { return x.trim(); }).indexOf(val) >= 0));
    }
    box.classList.add(correct ? 'is-correct' : 'is-wrong');
    var keys = box.querySelectorAll('.opt');
    for (var k = 0; k < keys.length; k++) keys[k].classList.add('disabled');
    var inpt = box.querySelector('.fill-input');
    if (inpt) inpt.disabled = true;
    var sb = box.querySelector('.quiz-submit'); if (sb) sb.disabled = true;
    fb.textContent = correct ? '✓ 回答正确' : '✗ 回答错误';
    fb.className = 'quiz-feedback ' + (correct ? 'ok' : 'no');
    exp.innerHTML = '<div class="quiz-exp-label">解析</div><div>' + esc(q.explanation || '') + '</div>' +
      (correct ? '' : '<div class="quiz-ans">正确答案：' + esc(q.answer) + '</div>');
    if (!correct) {
      var wrong = lsGet('gz_wrongbook', []);
      var key = lessonKey(sid, vid, idx);
      var dup = wrong.some(function (w) { return w.key === key && w.qi === qi; });
      if (!dup) wrong.push({ key: key, qi: qi, question: q.question, answer: q.answer, subjectName: f.subject.name, lessonName: f.point.name, type: q.type });
      lsSet('gz_wrongbook', wrong);
      toast('已加入错题本');
    }
    // 标记课时完成（提交全部题后）
    markProgress(sid, vid, idx);
    renderProgressSideNote();
  };

  function markProgress(sid, vid, idx) {
    var prog = lsGet('gz_progress', {});
    prog[lessonKey(sid, vid, idx)] = true;
    lsSet('gz_progress', prog);
  }
  function renderProgressSideNote() { /* 进度在「学习进度」页实时读取，无需在此刷新 */ }

  // 选项点击高亮（事件委托）
  document.addEventListener('click', function (e) {
    var opt = e.target.closest && e.target.closest('.opt');
    if (opt && !opt.classList.contains('disabled')) {
      var group = opt.parentNode;
      var sibs = group.querySelectorAll('.opt');
      for (var i = 0; i < sibs.length; i++) sibs[i].classList.remove('sel');
      opt.classList.add('sel');
    }
  });

  /* ---------- 本地存储辅助 ---------- */
  function lsGet(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return (v === null || v === undefined) ? fallback : v; }
    catch (e) { return fallback; }
  }
  function lsSet(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }

  /* ---------- 用户系统（多账号 + 登录/注册） ---------- */
  function getAllUsers() { return lsGet('gz_users', {}); }
  function getCurrentUserId() { return lsGet('gz_currentUser', null); }
  function setCurrentUserId(id) { lsSet('gz_currentUser', id); }
  function getCurrentUser() {
    var id = getCurrentUserId();
    if (!id) return null;
    var users = getAllUsers();
    return users[id] || null;
  }
  // 简单密码 hash（localStorage 不能防真攻击，至少不做明文）
  function hashPassword(pwd) {
    var h = 5381;
    for (var i = 0; i < pwd.length; i++) h = ((h << 5) + h + pwd.charCodeAt(i)) | 0;
    return 'h_' + (h >>> 0).toString(36);
  }
  function findUserByName(name) {
    var users = getAllUsers();
    for (var k in users) if (users[k].username === name) return users[k];
    return null;
  }
  function registerUser(username, password) {
    username = (username || '').trim();
    if (!username) return { ok: false, msg: '用户名不能为空' };
    if (username.length < 2 || username.length > 20) return { ok: false, msg: '用户名长度需 2-20' };
    if (!/^[\u4e00-\u9fa5\w.\-]+$/.test(username)) return { ok: false, msg: '用户名仅支持中英文/数字/_.-' };
    if (!password || password.length < 6) return { ok: false, msg: '密码至少 6 位' };
    if (findUserByName(username)) return { ok: false, msg: '用户名已被占用' };
    var users = getAllUsers();
    var id = 'u_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6);
    var avatarPool = ['🐱', '🐶', '🦊', '🐼', '🐯', '🦁', '🐰', '🐨', '🐸', '🐵', '🦄', '🐙'];
    var user = {
      id: id, username: username, password: hashPassword(password),
      nickname: username, avatar: avatarPool[Math.floor(Math.random() * avatarPool.length)],
      createdAt: new Date().toISOString(), lastLoginAt: new Date().toISOString()
    };
    users[id] = user;
    lsSet('gz_users', users);
    setCurrentUserId(id);
    return { ok: true, user: user };
  }
  function loginUser(username, password) {
    username = (username || '').trim();
    if (!username || !password) return { ok: false, msg: '请输入用户名和密码' };
    var user = findUserByName(username);
    if (!user) return { ok: false, msg: '用户不存在' };
    if (user.password !== hashPassword(password)) return { ok: false, msg: '密码错误' };
    var users = getAllUsers();
    user.lastLoginAt = new Date().toISOString();
    users[user.id] = user;
    lsSet('gz_users', users);
    setCurrentUserId(user.id);
    return { ok: true, user: user };
  }
  function logoutUser() {
    setCurrentUserId(null);
  }
  function updateProfile(patch) {
    var u = getCurrentUser();
    if (!u) return { ok: false, msg: '未登录' };
    var users = getAllUsers();
    Object.assign(users[u.id], patch);
    lsSet('gz_users', users);
    return { ok: true };
  }
  function changePassword(oldPwd, newPwd) {
    var u = getCurrentUser();
    if (!u) return { ok: false, msg: '未登录' };
    if (u.password !== hashPassword(oldPwd)) return { ok: false, msg: '旧密码错误' };
    if (!newPwd || newPwd.length < 6) return { ok: false, msg: '新密码至少 6 位' };
    if (newPwd === oldPwd) return { ok: false, msg: '新密码不能与旧密码相同' };
    var users = getAllUsers();
    users[u.id].password = hashPassword(newPwd);
    lsSet('gz_users', users);
    return { ok: true };
  }
  window.__registerUser = registerUser;
  window.__loginUser = loginUser;
  window.__logoutUser = logoutUser;
  window.__updateProfile = updateProfile;
  window.__changePassword = changePassword;

  // 顶栏用户区渲染（未登录显示"登录/注册"按钮；已登录显示头像+昵称+下拉）
  function renderTopbarUser() {
    var box = document.getElementById('topbarUser');
    if (!box) return;
    var u = getCurrentUser();
    if (!u) {
      box.innerHTML = '<button class="auth-btn" id="authOpenBtn" onclick="window.__openAuthModal()">登录 / 注册</button>';
      return;
    }
    box.innerHTML =
      '<div class="auth-user-wrap">' +
        '<button class="auth-user-btn" id="authUserBtn" onclick="window.__toggleUserMenu(event)">' +
          '<span class="auth-avatar">' + esc(u.avatar || '👤') + '</span>' +
          '<span class="auth-nickname">' + esc(u.nickname || u.username) + '</span>' +
          '<span class="auth-caret">▾</span>' +
        '</button>' +
        '<div class="auth-user-menu" id="authUserMenu">' +
          '<div class="auth-user-menu-head">' +
            '<div class="auth-avatar-lg">' + esc(u.avatar || '👤') + '</div>' +
            '<div class="auth-user-info">' +
              '<div class="auth-user-name">' + esc(u.nickname || u.username) + '</div>' +
              '<div class="auth-user-handle">@' + esc(u.username) + '</div>' +
            '</div>' +
          '</div>' +
          '<button class="auth-menu-item" onclick="window.__openProfileModal()">⚙️ 账号设置</button>' +
          '<button class="auth-menu-item danger" onclick="window.__logoutAndToast()">↩ 退出登录</button>' +
        '</div>' +
      '</div>';
  }
  window.__renderTopbarUser = renderTopbarUser;

  function toggleUserMenu(e) {
    if (e) e.stopPropagation();
    var m = document.getElementById('authUserMenu');
    if (m) m.classList.toggle('open');
  }
  window.__toggleUserMenu = toggleUserMenu;
  // 点击外部关闭菜单
  document.addEventListener('click', function (e) {
    var m = document.getElementById('authUserMenu');
    if (!m) return;
    if (!m.contains(e.target) && !document.getElementById('authUserBtn').contains(e.target)) {
      m.classList.remove('open');
    }
  });

  function logoutAndToast() {
    var u = getCurrentUser();
    logoutUser();
    var m = document.getElementById('authUserMenu');
    if (m) m.classList.remove('open');
    renderTopbarUser();
    // 顶栏 + 主页都重渲染（如果有"我的"数据需要切回公共）
    if (typeof renderHome === 'function') renderHome();
    if (typeof renderSettings === 'function' && (location.hash || '').indexOf('/settings') >= 0) renderSettings();
    toast('已退出登录：' + (u ? u.username : ''));
  }
  window.__logoutAndToast = logoutAndToast;

  // 登录/注册 modal
  function openAuthModal() {
    // 每次都重置 _authMode，确保清空旧 modal 的状态
    _authMode = 'login';
    var m = document.getElementById('authModal');
    if (m) { m.remove(); }  // 移除旧 modal（防止表单状态残留）
    var mask = document.createElement('div');
    mask.id = 'authModal';
    mask.className = 'auth-modal';
    mask.innerHTML =
      '<div class="auth-mask" onclick="window.__closeAuthModal()"></div>' +
      '<div class="auth-card">' +
        '<button class="auth-close" onclick="window.__closeAuthModal()" title="关闭">×</button>' +
        '<div class="auth-tabs">' +
          '<button class="auth-tab active" data-tab="login" onclick="window.__switchAuthTab(\'login\')">登录</button>' +
          '<button class="auth-tab" data-tab="register" onclick="window.__switchAuthTab(\'register\')">注册</button>' +
        '</div>' +
        '<div class="auth-pane" id="authPane">' +
          '<div class="auth-title">欢迎回来 👋</div>' +
          '<div class="auth-subtitle">登录后同步你的学习进度、错题本、签到记录</div>' +
          '<label class="auth-field">' +
            '<span>用户名</span>' +
            '<input type="text" id="authUser" placeholder="请输入用户名" maxlength="20" autocomplete="username" />' +
          '</label>' +
          '<label class="auth-field">' +
            '<span>密码</span>' +
            '<input type="password" id="authPwd" placeholder="请输入密码" maxlength="40" autocomplete="current-password" />' +
          '</label>' +
          '<div class="auth-msg" id="authMsg"></div>' +
          '<button class="auth-submit" id="authSubmit" onclick="window.__doAuth()">登 录</button>' +
          '<div class="auth-hint">没有账号？<a onclick="window.__switchAuthTab(\'register\')">立即注册</a></div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(mask);
    requestAnimationFrame(function () { mask.classList.add('show'); });
    setTimeout(function () { var i = document.getElementById('authUser'); if (i) i.focus(); }, 100);
    // 回车提交
    var onKey = function (e) {
      if (e.key === 'Enter') window.__doAuth();
      if (e.key === 'Escape') window.__closeAuthModal();
    };
    mask._onKey = onKey;
    document.addEventListener('keydown', onKey);
  }
  window.__openAuthModal = openAuthModal;

  function closeAuthModal() {
    // 通过当前显示的 modal 关闭：找 .auth-modal.show
    var m = document.querySelector('.auth-modal.show') || document.getElementById('authModal');
    if (!m) return;
    m.classList.remove('show');
    if (m._onKey) document.removeEventListener('keydown', m._onKey);
    setTimeout(function () { if (m.parentNode) m.remove(); }, 200);
  }
  window.__closeAuthModal = closeAuthModal;

  var _authMode = 'login';
  function switchAuthTab(mode) {
    _authMode = mode;
    document.querySelectorAll('.auth-tab').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-tab') === mode);
    });
    var pane = document.getElementById('authPane');
    if (!pane) return;
    document.getElementById('authMsg').textContent = '';
    document.getElementById('authUser').value = '';
    document.getElementById('authPwd').value = '';
    if (mode === 'login') {
      pane.innerHTML =
        '<div class="auth-title">欢迎回来 👋</div>' +
        '<div class="auth-subtitle">登录后同步你的学习进度、错题本、签到记录</div>' +
        '<label class="auth-field"><span>用户名</span><input type="text" id="authUser" placeholder="请输入用户名" maxlength="20" autocomplete="username" /></label>' +
        '<label class="auth-field"><span>密码</span><input type="password" id="authPwd" placeholder="请输入密码" maxlength="40" autocomplete="current-password" /></label>' +
        '<div class="auth-msg" id="authMsg"></div>' +
        '<button class="auth-submit" id="authSubmit" onclick="window.__doAuth()">登 录</button>' +
        '<div class="auth-hint">没有账号？<a onclick="window.__switchAuthTab(\'register\')">立即注册</a></div>';
    } else {
      pane.innerHTML =
        '<div class="auth-title">创建账号 ✨</div>' +
        '<div class="auth-subtitle">注册后数据保存在本地浏览器中</div>' +
        '<label class="auth-field"><span>用户名</span><input type="text" id="authUser" placeholder="2-20 位，中英文/数字" maxlength="20" autocomplete="username" /></label>' +
        '<label class="auth-field"><span>密码</span><input type="password" id="authPwd" placeholder="至少 6 位" maxlength="40" autocomplete="new-password" /></label>' +
        '<label class="auth-field"><span>确认密码</span><input type="password" id="authPwd2" placeholder="再输入一次" maxlength="40" autocomplete="new-password" /></label>' +
        '<div class="auth-msg" id="authMsg"></div>' +
        '<button class="auth-submit" id="authSubmit" onclick="window.__doAuth()">注 册</button>' +
        '<div class="auth-hint">已有账号？<a onclick="window.__switchAuthTab(\'login\')">直接登录</a></div>';
    }
  }
  window.__switchAuthTab = switchAuthTab;

  function doAuth() {
    var u = document.getElementById('authUser').value;
    var p = document.getElementById('authPwd').value;
    var p2 = document.getElementById('authPwd2') ? document.getElementById('authPwd2').value : null;
    var msg = document.getElementById('authMsg');
    var btn = document.getElementById('authSubmit');
    msg.className = 'auth-msg';
    msg.textContent = '';
    if (btn) { btn.disabled = true; btn.textContent = '处理中…'; }
    var res;
    if (_authMode === 'register') {
      if (p2 != null && p !== p2) {
        res = { ok: false, msg: '两次密码不一致' };
      } else {
        res = registerUser(u, p);
      }
    } else {
      res = loginUser(u, p);
    }
    if (btn) { btn.disabled = false; btn.textContent = _authMode === 'register' ? '注 册' : '登 录'; }
    if (!res.ok) {
      msg.className = 'auth-msg err';
      msg.textContent = res.msg;
      return;
    }
    msg.className = 'auth-msg ok';
    msg.textContent = (_authMode === 'register' ? '注册成功！' : '登录成功！') + ' 欢迎 ' + res.user.nickname;
    setTimeout(function () {
      closeAuthModal();
      renderTopbarUser();
      if (typeof renderHome === 'function') renderHome();
      if (typeof renderSettings === 'function' && (location.hash || '').indexOf('/settings') >= 0) renderSettings();
      toast('已登录：' + res.user.username);
    }, 600);
  }
  window.__doAuth = doAuth;

  // 账号设置 modal（修改昵称 / 修改密码 / 切换账号）
  function openProfileModal() {
    document.getElementById('authUserMenu') && document.getElementById('authUserMenu').classList.remove('open');
    var m = document.getElementById('profileModal');
    if (m) { m.classList.add('show'); return; }
    var u = getCurrentUser();
    if (!u) return;
    var mask = document.createElement('div');
    mask.id = 'profileModal';
    mask.className = 'auth-modal';
    mask.innerHTML =
      '<div class="auth-mask" onclick="window.__closeProfileModal()"></div>' +
      '<div class="auth-card profile-card">' +
        '<button class="auth-close" onclick="window.__closeProfileModal()" title="关闭">×</button>' +
        '<div class="auth-title">账号设置 ⚙️</div>' +
        '<div class="profile-head">' +
          '<div class="profile-avatar-big" id="profileAvatarBig">' + esc(u.avatar) + '</div>' +
          '<div class="profile-meta">' +
            '<div class="profile-name">' + esc(u.nickname) + '</div>' +
            '<div class="profile-handle">@' + esc(u.username) + '</div>' +
            '<div class="profile-joined">注册于 ' + (u.createdAt || '').slice(0, 10) + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="profile-section">' +
          '<div class="profile-section-title">头像</div>' +
          '<div class="profile-avatar-picker" id="profileAvatarPicker">' +
            ['🐱','🐶','🦊','🐼','🐯','🦁','🐰','🐨','🐸','🐵','🦄','🐙','🐧','🦉','🐢','🐳','🦋','🌸','⭐','🔥'].map(function (a) {
              return '<button class="profile-avatar-btn ' + (a === u.avatar ? 'active' : '') + '" data-avatar="' + a + '" onclick="window.__pickAvatar(this)">' + a + '</button>';
            }).join('') +
          '</div>' +
        '</div>' +
        '<div class="profile-section">' +
          '<div class="profile-section-title">昵称</div>' +
          '<label class="auth-field"><span>新昵称</span><input type="text" id="profileNick" value="' + esc(u.nickname) + '" maxlength="20" /></label>' +
        '</div>' +
        '<div class="profile-section">' +
          '<div class="profile-section-title">修改密码</div>' +
          '<label class="auth-field"><span>旧密码</span><input type="password" id="profileOldPwd" placeholder="不修改则留空" /></label>' +
          '<label class="auth-field"><span>新密码</span><input type="password" id="profileNewPwd" placeholder="至少 6 位" /></label>' +
        '</div>' +
        '<div class="auth-msg" id="profileMsg"></div>' +
        '<button class="auth-submit" onclick="window.__doProfileSave()">保 存</button>' +
      '</div>';
    document.body.appendChild(mask);
    requestAnimationFrame(function () { mask.classList.add('show'); });
    var onKey = function (e) { if (e.key === 'Escape') window.__closeProfileModal(); };
    mask._onKey = onKey;
    document.addEventListener('keydown', onKey);
  }
  window.__openProfileModal = openProfileModal;

  function closeProfileModal() {
    var m = document.getElementById('profileModal');
    if (!m) return;
    m.classList.remove('show');
    if (m._onKey) document.removeEventListener('keydown', m._onKey);
    setTimeout(function () { m.remove(); }, 200);
  }
  window.__closeProfileModal = closeProfileModal;

  function pickAvatar(btn) {
    document.querySelectorAll('.profile-avatar-btn').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var a = btn.getAttribute('data-avatar');
    var big = document.getElementById('profileAvatarBig');
    if (big) big.textContent = a;
  }
  window.__pickAvatar = pickAvatar;

  function doProfileSave() {
    var msg = document.getElementById('profileMsg');
    msg.className = 'auth-msg'; msg.textContent = '';
    var nick = document.getElementById('profileNick').value.trim();
    if (!nick) { msg.className = 'auth-msg err'; msg.textContent = '昵称不能为空'; return; }
    var activeAv = document.querySelector('.profile-avatar-btn.active');
    var avatar = activeAv ? activeAv.getAttribute('data-avatar') : null;
    var oldPwd = document.getElementById('profileOldPwd').value;
    var newPwd = document.getElementById('profileNewPwd').value;
    // 改昵称 + 头像
    var patch = { nickname: nick };
    if (avatar) patch.avatar = avatar;
    var r1 = updateProfile(patch);
    if (!r1.ok) { msg.className = 'auth-msg err'; msg.textContent = r1.msg; return; }
    // 改密码（可选）
    if (oldPwd || newPwd) {
      if (!oldPwd || !newPwd) {
        msg.className = 'auth-msg err'; msg.textContent = '修改密码需同时填旧/新密码';
        return;
      }
      var r2 = changePassword(oldPwd, newPwd);
      if (!r2.ok) { msg.className = 'auth-msg err'; msg.textContent = r2.msg; return; }
    }
    msg.className = 'auth-msg ok';
    msg.textContent = '保存成功！';
    renderTopbarUser();
    if (typeof renderSettings === 'function' && (location.hash || '').indexOf('/settings') >= 0) renderSettings();
    setTimeout(closeProfileModal, 700);
  }
  window.__doProfileSave = doProfileSave;

  // 切换账号
  function switchAccount() {
    document.getElementById('authUserMenu') && document.getElementById('authUserMenu').classList.remove('open');
    logoutUser();
    renderTopbarUser();
    if (typeof renderHome === 'function') renderHome();
    if (typeof renderSettings === 'function' && (location.hash || '').indexOf('/settings') >= 0) renderSettings();
    openAuthModal();
  }
  window.__switchAccount = switchAccount;

  /* ---------- 题库 ---------- */
  // 收藏管理
  function getFavs() { return lsGet('gz_favs', []); }
  function isFav(key, qi) {
    return getFavs().some(function (f) { return f.key === key && f.qi === qi; });
  }
  function toggleFav(sid, vid, idx, qi) {
    var f = findLesson(sid, vid, idx);
    if (!f) return;
    var q = (f.point.exercises || [])[qi];
    if (!q) return;
    var key = lessonKey(sid, vid, idx);
    var favs = getFavs();
    var i = favs.findIndex(function (x) { return x.key === key && x.qi === qi; });
    if (i >= 0) {
      favs.splice(i, 1);
      toast('已取消收藏');
    } else {
      favs.push({
        key: key, qi: qi, sid: sid, vid: vid, idx: idx,
        sName: f.subject.name, vName: f.volume.name, pName: f.point.name,
        type: q.type, question: q.question, options: q.options || [],
        answer: q.answer, explanation: q.explanation || '',
        addedAt: Date.now()
      });
      toast('已加入收藏 ⭐');
    }
    lsSet('gz_favs', favs);
    // 刷新当前视图
    var r = parseHash();
    if (r.route === 'bank') renderBank(r.param || 'home');
    else if (r.route === 'lesson') {
      // 重新渲染当前课时，仅刷新收藏按钮
      var btn = document.querySelector('.quiz[data-q="' + qi + '"] .quiz-fav');
      if (btn) {
        var faved = isFav(key, qi);
        btn.classList.toggle('is-fav', faved);
        btn.title = faved ? '取消收藏' : '收藏本题';
      }
    }
  }
  window.__toggleFav = toggleFav;

  // 高中常考题型库（按学科与题型分类的精选题）
  var GZ_COMMON_TYPES = {
    'chinese': {
      name: '语文', icon: '📖', color: '#dc2626',
      cats: [
        { id: 'gscrc', name: '古诗词默写', icon: '✍️' },
        { id: 'wywyd', name: '文言文阅读', icon: '📜' },
        { id: 'xdwyd', name: '现代文阅读', icon: '📰' },
        { id: 'cyyy', name: '成语运用', icon: '🔤' },
        { id: 'bjxg', name: '病句修改', icon: '🔧' },
        { id: 'zw', name: '命题作文', icon: '📝' }
      ]
    },
    'math': {
      name: '数学', icon: '📐', color: '#2563eb',
      cats: [
        { id: 'sx', name: '集合与函数', icon: '🔢' },
        { id: 'sd', name: '三角函数', icon: '📏' },
        { id: 'lh', name: '数列与不等式', icon: '📊' },
        { id: 'jj', name: '立体几何', icon: '🧊' },
        { id: 'pj', name: '解析几何', icon: '📈' },
        { id: 'gl', name: '概率与统计', icon: '🎲' }
      ]
    },
    'english': {
      name: '英语', icon: '🔤', color: '#0891b2',
      cats: [
        { id: 'yf', name: '语法填空', icon: '📝' },
        { id: 'yd', name: '完形填空', icon: '🧩' },
        { id: 'rd', name: '阅读理解', icon: '📖' },
        { id: 'xz', name: '单项选择', icon: '🔘' },
        { id: 'px', name: '短文改错', icon: '✏️' },
        { id: 'zw', name: '书面表达', icon: '✍️' }
      ]
    }
  };

  function renderBankHome() {
    var favs = getFavs();
    var favCount = favs.length;
    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / 题库</div>' +
      '<div class="panel">' +
        '<h2>📝 题库</h2>' +
        '<p>题目都来自你的收藏和高中常考题型，做错的题会自动进入错题本。</p>' +
        '<div class="bank-modes">' +
          '<div class="bank-mode" onclick="navigate(\'bank\', \'fav\')">' +
            '<div class="bank-mode-icon" style="background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);">⭐</div>' +
            '<div class="bank-mode-body">' +
              '<div class="bank-mode-title">我的收藏 <span class="bank-mode-count">' + favCount + '</span></div>' +
              '<div class="bank-mode-desc">收录你从课时练习中收藏的题目，便于集中复习。</div>' +
            '</div>' +
            '<div class="bank-mode-arrow">›</div>' +
          '</div>' +
          '<div class="bank-mode" onclick="navigate(\'bank\', \'common\')">' +
            '<div class="bank-mode-icon" style="background: linear-gradient(135deg, #4a7de0 0%, #9c56d4 100%);">📚</div>' +
            '<div class="bank-mode-body">' +
              '<div class="bank-mode-title">高中常考题型</div>' +
              '<div class="bank-mode-desc">按学科与题型分类整理的高中常考题，可在线作答。</div>' +
            '</div>' +
            '<div class="bank-mode-arrow">›</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function renderBankFav() {
    var favs = getFavs();
    var body;
    if (!favs.length) {
      body = '<div class="empty-tip">⭐ 收藏夹是空的。在课时练习中点击题目右上角的☆按钮即可收藏。</div>';
    } else {
      body = '<div class="bank-q-list">' + favs.map(function (f, i) {
        return '<div class="bank-q">' +
          '<div class="bank-q-head">' +
            '<div class="bank-q-meta">' + esc(f.sName) + ' · ' + esc(f.vName) + ' · ' + esc(f.pName) + '</div>' +
            '<button class="quiz-fav is-fav" title="取消收藏" onclick="window.__toggleFav(\'' + esc(f.sid) + '\',\'' + esc(f.vid) + '\',' + f.idx + ',' + f.qi + ')">★</button>' +
          '</div>' +
          '<div class="bank-q-text">【' + (f.type === 'choice' ? '选择' : '填空') + '】' + esc(f.question) + '</div>' +
          (f.type === 'choice' ? '<div class="bank-q-opts">' + (f.options || []).map(function (o) { return '<span>' + esc(o) + '</span>'; }).join('') + '</div>' : '') +
          '<div class="bank-q-ans">答案：' + esc(f.answer) + '</div>' +
          (f.explanation ? '<div class="bank-q-exp">💡 ' + esc(f.explanation) + '</div>' : '') +
        '</div>';
      }).join('') + '</div>';
    }
    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / <a onclick="navigate(\'bank\', \'home\')">题库</a> / 我的收藏</div>' +
      '<div class="panel">' +
        '<h2>⭐ 我的收藏 <span class="bank-mode-count">' + favs.length + '</span></h2>' +
        '<p>共收录 ' + favs.length + ' 道题目。可点击右上角★取消收藏。</p>' +
        body +
      '</div>';
  }

  function renderBankCommon() {
    // 取已加载学科的常考题型分类
    var keys = Object.keys(GZ_COMMON_TYPES);
    var cards = keys.map(function (k) {
      var s = GZ_COMMON_TYPES[k];
      var catsHtml = s.cats.map(function (c) {
        return '<span class="bank-cat-chip" onclick="toast(\'' + esc(c.name) + ' 题目正在建设中…\')">' + esc(c.icon) + ' ' + esc(c.name) + '</span>';
      }).join('');
      return '<div class="bank-mode" style="cursor:default;">' +
        '<div class="bank-mode-icon" style="background:' + esc(s.color) + '22; color:' + esc(s.color) + ';">' + esc(s.icon) + '</div>' +
        '<div class="bank-mode-body" style="width:100%;">' +
          '<div class="bank-mode-title">' + esc(s.name) + '常考题型</div>' +
          '<div class="bank-cat-list">' + catsHtml + '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / <a onclick="navigate(\'bank\', \'home\')">题库</a> / 高中常考题型</div>' +
      '<div class="panel">' +
        '<h2>📚 高中常考题型</h2>' +
        '<p>按学科与题型分类整理的高中常考题，可在线作答。点击下方分类查看。</p>' +
        '<div class="bank-modes">' + cards + '</div>' +
      '</div>';
  }

  function renderBank(mode) {
    if (mode === 'fav') renderBankFav();
    else if (mode === 'common') renderBankCommon();
    else renderBankHome();
  }

  /* ---------- 错题本 ---------- */
  function renderWrongbook() {
    var wrong = lsGet('gz_wrongbook', []);
    var body;
    if (!wrong.length) {
      body = '<div class="empty-tip">🎉 错题本是空的。开始做题后，答错的题目会自动收录到这里，方便反复巩固。</div>';
    } else {
      body = wrong.map(function (w, idx) {
        return '<div class="wrong-item"><div class="wrong-q">' + esc(w.question || '') + '</div>' +
               '<div class="wrong-meta">' + esc(w.subjectName || '') + ' · ' + esc(w.lessonName || '') + ' · 答案：' + esc(w.answer || '') + '</div>' +
               (w.key ? '<button class="wrong-go" onclick="navigate(\'lesson\',\'' + esc(w.key.split('/')[0]) + '\',\'' + esc(w.key.split('/')[1]) + '\',' + esc(w.key.split('/')[2]) + ')">去重做 →</button>' : '') +
               '</div>';
      }).join('');
    }
    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / 错题本</div>' +
      '<div class="panel">' +
        '<h2>📕 错题本</h2>' +
        '<p>收录你做错的题目，重做巩固、逐个消灭。（' + wrong.length + ' 题）</p>' + body +
      '</div>';
  }

  /* ---------- 学习进度 ---------- */
  function renderProgress() {
    var prog = lsGet('gz_progress', {});
    var recent = lsGet('gz_recent', []);
    var wrong = lsGet('gz_wrongbook', []);
    var checkin = lsGet('gz_checkin', { history: [] });
    var history = checkin.history || [];

    // 1) 按学科聚合
    var subjStats = {};
    GZ_SUBJECTS.forEach(function (s) {
      var st = {
        id: s.id, name: s.name, icon: s.icon, color: s.color,
        total: 0, done: 0, lastStudy: null, wrongCount: 0,
        diff: { '基础': 0, '重点': 0, '难点': 0 }
      };
      s.volumes.forEach(function (v) {
        if (v.grade === '高三') return;
        (v.points || []).forEach(function (p, idx) {
          st.total++;
          var k = s.id + '/' + v.id + '/' + idx;
          if (prog[k]) {
            st.done++;
            if (p.difficulty && st.diff[p.difficulty] !== undefined) st.diff[p.difficulty]++;
          }
        });
      });
      subjStats[s.id] = st;
    });
    wrong.forEach(function (w) {
      if (w.key) {
        var sid = w.key.split('/')[0];
        if (subjStats[sid]) subjStats[sid].wrongCount++;
      }
    });
    recent.forEach(function (r) {
      if (subjStats[r.sid] && !subjStats[r.sid].lastStudy) {
        subjStats[r.sid].lastStudy = { name: r.name };
      }
    });

    // 2) 7 天学习量
    var last7 = [];
    var now = new Date();
    for (var i = 6; i >= 0; i--) {
      var d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      var ds = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      last7.push({
        date: ds,
        label: (d.getMonth() + 1) + '/' + d.getDate(),
        weekday: ['日', '一', '二', '三', '四', '五', '六'][d.getDay()],
        studied: history.indexOf(ds) !== -1
      });
    }

    // 3) 难度分布
    var diffTotal = { '基础': 0, '重点': 0, '难点': 0 };
    var diffDone = { '基础': 0, '重点': 0, '难点': 0 };
    GZ_SUBJECTS.forEach(function (s) {
      s.volumes.forEach(function (v) {
        if (v.grade === '高三') return;
        (v.points || []).forEach(function (p, idx) {
          if (p.difficulty && diffTotal[p.difficulty] !== undefined) {
            diffTotal[p.difficulty]++;
            if (prog[s.id + '/' + v.id + '/' + idx]) diffDone[p.difficulty]++;
          }
        });
      });
    });
    var diffOrder = ['基础', '重点', '难点'];
    var diffColor = { '基础': '#10b981', '重点': '#f59e0b', '难点': '#ef4444' };
    var diffIcons = { '基础': '🟢', '重点': '🟡', '难点': '🔴' };

    // 4) 总览统计
    var totalLessons = 0, doneLessons = 0;
    GZ_SUBJECTS.forEach(function (s) { s.volumes.forEach(function (v) { if (v.grade !== '高三') totalLessons += (v.points || []).length; }); });
    Object.keys(prog).forEach(function (k) { if (prog[k]) doneLessons++; });
    var totalStudyDays = history.length;
    var streakText = 0;
    for (var si = last7.length - 1; si >= 0; si--) { if (last7[si].studied) streakText++; else break; }
    var last7Studied = last7.filter(function (d) { return d.studied; }).length;

    // 渲染：学科卡片
    var subjCardsHtml = GZ_SUBJECTS.map(function (s) {
      var st = subjStats[s.id];
      var pct = st.total > 0 ? Math.round(st.done / st.total * 100) : 0;
      var ringR = 36;
      var ringC = 2 * Math.PI * ringR;
      var dash = (pct / 100) * ringC;
      var empty = st.total === 0;
      var lastTxt, lastClass;
      if (st.lastStudy) { lastTxt = '最近：' + st.lastStudy.name.slice(0, 14); lastClass = 'has-study'; }
      else if (st.done > 0) { lastTxt = '最近：已学完一些课时'; lastClass = 'has-study'; }
      else { lastTxt = '尚未开始'; lastClass = 'no-study'; }
      return '' +
        '<a class="prog-subj-card" style="--sc:' + esc(s.color) + '" onclick="navigate(\'subject\',\'' + esc(s.id) + '\')">' +
          '<div class="psc-top">' +
            '<div class="psc-icon">' + esc(s.icon) + '</div>' +
            '<div class="psc-name">' + esc(s.name) + '</div>' +
          '</div>' +
          '<div class="psc-ring-wrap">' +
            '<svg class="psc-ring" viewBox="0 0 90 90">' +
              '<circle cx="45" cy="45" r="' + ringR + '" class="psc-ring-bg"/>' +
              '<circle cx="45" cy="45" r="' + ringR + '" class="psc-ring-fg" ' +
                'stroke-dasharray="' + dash.toFixed(2) + ' ' + ringC.toFixed(2) + '" ' +
                'transform="rotate(-90 45 45)"/>' +
            '</svg>' +
            '<div class="psc-ring-txt">' +
              (empty ? '<span class="psc-pct">—</span><span class="psc-lbl">未开课</span>' :
                      '<span class="psc-pct">' + pct + '<i>%</i></span><span class="psc-lbl">完成</span>') +
            '</div>' +
          '</div>' +
          '<div class="psc-meta">' +
            '<div class="psc-meta-row"><span>已学 / 总课时</span><b>' + st.done + ' / ' + st.total + '</b></div>' +
            '<div class="psc-meta-row"><span>错题数</span><b' + (st.wrongCount > 0 ? ' class="has-warn"' : '') + '>' + st.wrongCount + '</b></div>' +
            '<div class="psc-meta-row psc-last ' + lastClass + '">' + esc(lastTxt) + '</div>' +
          '</div>' +
        '</a>';
    }).join('');

    // 渲染：7 天柱状图
    var barsHtml = last7.map(function (d, idx) {
      var h = d.studied ? 100 : 8;
      var isToday = idx === last7.length - 1;
      return '' +
        '<div class="pbar-col' + (isToday ? ' is-today' : '') + (d.studied ? ' is-studied' : '') + '">' +
          '<div class="pbar-bar-wrap">' +
            '<div class="pbar-stick" style="height:' + h + '%"><span class="pbar-tip">' + (d.studied ? '✅ 已学习' : '⚪ 未学习') + '<br>' + d.date + '</span></div>' +
          '</div>' +
          '<div class="pbar-wd">' + d.weekday + '</div>' +
          '<div class="pbar-dt">' + d.label + '</div>' +
        '</div>';
    }).join('');

    // 渲染：难度分布
    var diffHtml = diffOrder.map(function (k) {
      var total = diffTotal[k], done = diffDone[k];
      var pct = total > 0 ? Math.round(done / total * 100) : 0;
      return '' +
        '<div class="pdiff-row">' +
          '<div class="pdiff-head"><span>' + diffIcons[k] + ' ' + k + '</span><b>' + done + ' / ' + total + ' <i>(' + pct + '%)</i></b></div>' +
          '<div class="pdiff-bar"><i style="width:' + pct + '%; background:' + diffColor[k] + '"></i></div>' +
        '</div>';
    }).join('');

    // 渲染：最近活动
    var recentHtml = recent.slice(0, 7).map(function (r) {
      var f = findLesson(r.sid, r.vid, r.idx);
      var subj = f ? f.subject : null;
      var vol = f ? f.vol : null;
      var color = subj ? subj.color : 'var(--text-3)';
      var icon = subj ? subj.icon : '📘';
      var subjName = subj ? subj.name : r.sid;
      var volName = vol ? vol.name : '';
      var url = lessonUrl(r.sid, r.vid, r.idx);
      return '' +
        '<a class="ptime-item" href="' + esc(url) + '" style="--sc:' + esc(color) + '">' +
          '<div class="ptime-dot">' + esc(icon) + '</div>' +
          '<div class="ptime-body">' +
            '<div class="ptime-name">' + esc(r.name) + '</div>' +
            '<div class="ptime-meta">' + esc(subjName) + (volName ? ' · ' + esc(volName) : '') + '</div>' +
          '</div>' +
          '<div class="ptime-go">→</div>' +
        '</a>';
    }).join('');
    if (!recentHtml) recentHtml = '<div class="prog-empty-mini">还没有学习记录，<a onclick="navigate(\'subjects\')">去选一节课</a> 开始吧～</div>';

    // 顶部 4 个汇总卡
    var overviewHtml = '<div class="prog-overview">' +
      overviewCard('📚', '总课时', totalLessons, totalLessons > 0 ? '全部学科可学' : '内容建设中') +
      overviewCard('✅', '已学完', doneLessons, totalLessons > 0 ? ('完成率 ' + Math.round(doneLessons / totalLessons * 100) + '%') : '尚未开始') +
      overviewCard('📕', '错题数', wrong.length, wrong.length > 0 ? '点击去重做' : '继续保持～', wrong.length > 0 ? 'navigate-wrong' : '') +
      overviewCard('🔥', '学习天数', totalStudyDays, '最近连续 ' + streakText + ' 天' + (streakText > 0 ? ' 🔥' : '')) +
      '</div>';

    var subjEmpty = totalLessons === 0
      ? '<div class="prog-empty">学科内容正在建设中，敬请期待～</div>'
      : '<div class="prog-subj-grid">' + subjCardsHtml + '</div>';

    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / 学习进度</div>' +
      '<div class="panel">' +
        '<h2>📊 学习进度</h2>' +
        '<p>总览你的学习情况：各学科完成度、最近 7 天节奏、难度攻克分布、最近活动一目了然。</p>' +
        overviewHtml +
        '<h3 class="prog-section-title">📚 各学科完成度</h3>' +
        subjEmpty +
        '<div class="prog-charts">' +
          '<div class="prog-chart-card">' +
            '<div class="pcc-head"><h4>📅 最近 7 天学习节奏</h4><span class="pcc-sub">已学 ' + last7Studied + ' / 7 天' + (streakText > 0 ? ' · 连续 ' + streakText + ' 天 🔥' : '') + '</span></div>' +
            '<div class="pbar-chart">' + barsHtml + '</div>' +
          '</div>' +
          '<div class="prog-chart-card">' +
            '<div class="pcc-head"><h4>🎯 难度攻克分布</h4><span class="pcc-sub">基础/重点/难点 三档</span></div>' +
            '<div class="pdiff">' + diffHtml + '</div>' +
          '</div>' +
        '</div>' +
        '<h3 class="prog-section-title">🕒 最近活动</h3>' +
        '<div class="ptime">' + recentHtml + '</div>' +
      '</div>';

    // 错题卡点击跳转
    if (wrong.length > 0) {
      var nCard = document.querySelector('.prog-overview .navigate-wrong');
      if (nCard) nCard.style.cursor = 'pointer';
    }
  }
  function overviewCard(icon, label, val, sub, flag) {
    var attrs = '';
    if (flag === 'navigate-wrong') attrs = ' onclick="navigate(\'wrong\')" style="cursor:pointer"';
    return '<div class="prog-ov-card"' + attrs + '>' +
      '<div class="pov-icon">' + icon + '</div>' +
      '<div class="pov-info"><div class="pov-val">' + val + '</div><div class="pov-lbl">' + esc(label) + '</div><div class="pov-sub">' + esc(sub) + '</div></div>' +
    '</div>';
  }

  /* ---------- 设置 ---------- */
  function renderSettings() {
    var u = getCurrentUser();
    var accountHtml;
    if (u) {
      accountHtml =
        '<div class="setting-row account-row">' +
          '<div class="account-info">' +
            '<div class="account-avatar-lg">' + esc(u.avatar || '👤') + '</div>' +
            '<div>' +
              '<div class="account-name">' + esc(u.nickname) + ' <span class="account-handle">@' + esc(u.username) + '</span></div>' +
              '<div class="account-meta">注册于 ' + (u.createdAt || '').slice(0, 10) + ' · 上次登录 ' + (u.lastLoginAt || '').slice(0, 16).replace('T', ' ') + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="account-actions">' +
            '<button class="btn-plain" onclick="window.__openProfileModal()">⚙️ 账号设置</button>' +
            '<button class="btn-plain" onclick="window.__switchAccount()">↔ 切换账号</button>' +
            '<button class="btn-danger" onclick="window.__logoutAndToast()">退出登录</button>' +
          '</div>' +
        '</div>';
    } else {
      accountHtml =
        '<div class="setting-row account-row">' +
          '<div class="account-info">' +
            '<div class="account-avatar-lg guest">👤</div>' +
            '<div>' +
              '<div class="account-name">未登录</div>' +
              '<div class="account-meta">登录后同步你的学习进度、错题本、签到记录</div>' +
            '</div>' +
          '</div>' +
          '<div class="account-actions">' +
            '<button class="auth-btn-primary" onclick="window.__openAuthModal()">登录 / 注册</button>' +
          '</div>' +
        '</div>';
    }
    var userCount = Object.keys(getAllUsers()).length;
    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / 设置</div>' +
      '<div class="panel">' +
        '<h2>⚙️ 设置</h2>' +
        '<h3 class="setting-section">👤 账号</h3>' +
        accountHtml +
        (u ? '' : '<div class="setting-hint">本机共注册 ' + userCount + ' 个账号</div>') +
        '<h3 class="setting-section">🗑️ 数据</h3>' +
        '<div class="setting-row">' +
          '<div><b>清除学习进度</b><p>清空所有课时的完成记录（不影响错题本）。</p></div>' +
          '<button class="btn-danger" onclick="window.__clearProgress()">清除</button>' +
        '</div>' +
        '<div class="setting-row">' +
          '<div><b>清空错题本</b><p>删除错题本中的全部题目。</p></div>' +
          '<button class="btn-danger" onclick="window.__clearWrongbook()">清空</button>' +
        '</div>' +
        '<h3 class="setting-section">ℹ️ 关于</h3>' +
        '<div class="setting-row">' +
          '<div><b>高中预习网站</b><p>数据保存在本机浏览器中。注册账号后可在多设备间同步（需手动导出/导入）。</p></div>' +
          '<button class="btn-plain" onclick="navigate(\'about\')">查看</button>' +
        '</div>' +
      '</div>';
  }
  window.__clearProgress = function () { lsSet('gz_progress', {}); toast('学习进度已清除'); };
  window.__clearWrongbook = function () { lsSet('gz_wrongbook', []); toast('错题本已清空'); };

  /* ---------- 关于 ---------- */
  function renderAbout() {
    var st = gzStats();
    var doneTotal = 0;
    GZ_SUBJECTS.forEach(function (s) { s.volumes.forEach(function (v) { if (v.grade !== '高三') doneTotal += (v.points || []).length; }); });
    view.innerHTML = '' +
      '<div class="panel">' +
        '<h2>🎓 关于高中预习网站</h2>' +
        '<p>本站是面向准高中生与高中生的全学科预习平台，覆盖高中 ' + st.subjects + ' 门学科、' + st.volumes + ' 册教材，按新课标教材体系组织内容。</p>' +
        '<p>已完成上线：' + doneTotal + ' 个课时（含图文讲解与课后练习）。更多学科与册次正在陆续建设中。</p>' +
        '<p>数据保存在本机浏览器中，无需登录，打开即用。</p>' +
      '</div>';
  }

  /* ---------- 启动 ---------- */
  window.addEventListener('hashchange', render);
  document.addEventListener('DOMContentLoaded', render);
  if (document.readyState !== 'loading') render();
})();
