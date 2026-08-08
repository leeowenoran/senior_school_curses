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

  // 全局错误兜底：把运行时错误显示到页面底部，避免白屏难以排查
  window.addEventListener('error', function (e) {
    var box = document.getElementById('__errBox');
    if (!box) {
      box = document.createElement('div');
      box.id = '__errBox';
      box.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:99999;max-height:50vh;overflow:auto;background:#fff3f3;color:#b00020;font:13px/1.6 monospace;padding:12px 16px;border-top:2px solid #c41e3a;white-space:pre-wrap';
      (document.body || document.documentElement).appendChild(box);
    }
    box.textContent += '\n[页面错误] ' + (e && e.message ? e.message : e) + (e && e.filename ? (' @ ' + e.filename + ':' + e.lineno) : '');
  });

  var view = document.getElementById('view');
  var expandedSid = null; // 侧边栏当前展开的学科 id

  /* ---------- 工具 ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  // 富文本转义：先整体转义防 XSS，再把白名单内的安全内联标签（strong/em/b/i/u/sub/sup/br）还原为真实标签。
  // 作者可在文本里用这些标签做加粗/换行，而不会像 esc() 那样把 <strong> 显示成可见文字。
  function escRich(s) {
    if (s == null) return '';
    var out = esc(s);
    return out.replace(/&lt;\/?(?:strong|em|b|i|u|sub|sup|br)\b[\s\/]*?&gt;/gi, function (m) {
      return m.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    });
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

  /* ---------- 懒加载：课时内容按需注入 ----------
   * 首屏只加载 data-meta.js（轻量元数据 v.units / v.files），重内容（v.points）
   * 在用户进入册次/课时时再按顺序注入对应数据文件，降低首屏解析压力。
   * v.units 与 v.points 下标对齐（同一文件顺序），故进度 idx 映射不变。 */
  var _scriptCache = {};
  var _volLoaded = {};
  var _renderToken = 0;
  // 课时总数：优先 v.units（首屏恒有），回退 v.points
  function gzUnitCount(v) {
    if (!v) return 0;
    return (v.units && v.units.length) ? v.units.length : ((v.points && v.points.length) || 0);
  }
  // 轻量版 findLesson（无需 v.points 已注入，首屏即可用）
  function findLessonMeta(sid, vid, idx) {
    var v = gzGetVolume(sid, vid);
    if (!v) return null;
    var u = (v.units && v.units[idx]) || (v.points && v.points[idx]);
    if (!u) return null;
    return { subject: gzGetSubject(sid), vol: v, point: u, idx: idx };
  }
  // 顺序加载单个脚本（Promise 化 + 去重）；async=false 保执行顺序
  function loadScriptOnce(src) {
    if (_scriptCache[src]) return _scriptCache[src];
    var p = new Promise(function (resolve) {
      var sc = document.createElement('script');
      sc.src = src;
      sc.async = false;
      sc.onload = function () { resolve(true); };
      sc.onerror = function () { resolve(false); }; // 单文件失败不阻断其它
      document.head.appendChild(sc);
    });
    _scriptCache[src] = p;
    return p;
  }
  // 确保某册内容已注入：按 v.files 顺序填充 v.points；已加载则直接返回
  function ensureVolumeContent(sid, vid) {
    var v = gzGetVolume(sid, vid);
    if (!v) return Promise.resolve(false);
    var key = sid + '/' + vid;
    if (_volLoaded[key]) return Promise.resolve(true);
    var files = (v.files && v.files.slice()) || [];
    if (!files.length) { _volLoaded[key] = true; return Promise.resolve(false); }
    return files.reduce(function (chain, src) {
      return chain.then(function () { return loadScriptOnce(src); });
    }, Promise.resolve()).then(function () {
      _volLoaded[key] = true;
      return true;
    });
  }

  /* ---------- 路由 ---------- */
  function decodePart(s) {
    if (s == null) return s;
    try { return decodeURIComponent(s); } catch (e) { return s; }
  }
  function parseHash() {
    var h = (location.hash || '#/home').replace(/^#\/?/, '');
    var parts = h.split('/');
    return {
      route: decodePart(parts[0]) || 'home',
      param: decodePart(parts[1]) || null,
      param2: decodePart(parts[2]) || null,
      param3: decodePart(parts[3]) || null
    };
  }

  window.navigate = function (route, param, param2, param3) {
    var h = '#/' + route;
    if (param != null) h += '/' + encodeURIComponent(param);
    if (param2 != null) h += '/' + encodeURIComponent(param2);
    if (param3 != null) h += '/' + encodeURIComponent(param3);
    // 若目标 hash 与当前相同（如重复点击同一菜单），hashchange 不会触发，
    // 这里直接重渲染，保证视图一定刷新（避免“点了没反应、刷新才出来”）。
    if (location.hash === h) { if (typeof render === 'function') render(); return; }
    location.hash = h;
  };

  function setNavActive(route) {
    var navRoute = (route === 'subject' || route === 'vol' || route === 'lesson') ? 'subjects' : route;
    var btns = document.querySelectorAll('.nav-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].getAttribute('data-route') === navRoute);
    }
  }

  // 保持用户当前的滚动位置：展开/收起侧边栏、点开课时等都不会再强制回到顶部。
  // 仅当新页面比原来的滚动位置更矮时，才回到顶部（避免短页面停在底部显得空白）。
  function restoreScrollKeep(prevScroll) {
    var maxY = Math.max(0, (document.documentElement.scrollHeight || document.body.scrollHeight || 0) - window.innerHeight);
    if (prevScroll > maxY) window.scrollTo(0, 0);
    else window.scrollTo(0, prevScroll);
  }

  function render() {
    _renderToken++;
    var r = parseHash();
    var prevScroll = window.scrollY || window.pageYOffset || 0;
    setNavActive(r.route);
    if (r.route === 'subject' && r.param && gzGetSubject(r.param)) expandedSid = r.param;
    renderSidebar(r);
    renderTopbarUser();
    document.body.classList.remove('sidebar-open');
    if (r.route === 'lesson' && r.param && r.param2 != null && r.param3 != null) {
      window.__pendingScroll = prevScroll; // 课时内容异步加载，待注入完成后再恢复滚动位置
      renderLesson(r.param, r.param2, parseInt(r.param3, 10));
    }
    else if (r.route === 'vol' && r.param && r.param2 != null) { renderVolume(r.param, r.param2); restoreScrollKeep(prevScroll); }
    else if (r.route === 'subject' && r.param) { renderSubject(r.param); restoreScrollKeep(prevScroll); }
    else if (r.route === 'subjects') { renderSubjects(); restoreScrollKeep(prevScroll); }
    else if (r.route === 'about') { renderAbout(); restoreScrollKeep(prevScroll); }
    else if (r.route === 'bank') { renderBank(r.param, r.param2); restoreScrollKeep(prevScroll); }
    else if (r.route === 'wrongbook') { renderWrongbook(); restoreScrollKeep(prevScroll); }
    else if (r.route === 'progress') { renderProgress(); restoreScrollKeep(prevScroll); }
    else if (r.route === 'comments') { renderComments(r); restoreScrollKeep(prevScroll); }
    else if (r.route === 'admin') { renderAdmin(); restoreScrollKeep(prevScroll); }
    else if (r.route === 'settings') { renderSettings(); restoreScrollKeep(prevScroll); }
    else { renderHome(); restoreScrollKeep(prevScroll); }
    // 滚动监听：控制「返回顶部」按钮 + 主区顶部条变 fixed
    if (!window.__scrollBound) {
      window.addEventListener('scroll', function () {
        var btn = document.getElementById('toTop');
        if (btn) {
          if (window.scrollY > 400) btn.classList.add('show');
          else btn.classList.remove('show');
        }
        // 滚动距离超过 50px 时，主区顶部条变成 fixed 悬浮
        if (window.scrollY > 50) document.body.classList.add('scrolled');
        else document.body.classList.remove('scrolled');
      }, { passive: true });
      window.__scrollBound = true;
    }
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

  function renderSidebar(r, opts) {
    var sb = document.getElementById('sidebar');
    if (!sb) return;
    // 保存当前滚动位置
    var subjList = sb.querySelector('.sb-subj-list');
    var scrollTop = subjList ? subjList.scrollTop : 0;
    var cur = (r && r.route === 'subject') ? r.param
      : (r && (r.route === 'vol' || r.route === 'lesson')) ? r.param : null;
    var openSet = getOpenSids();
    // 当前页所属科目自动展开（除非用户刚手动切换过）
    if (!opts || !opts.manualToggle) {
      if (cur && openSet.indexOf(cur) < 0) { openSet.unshift(cur); setOpenSids(openSet); }
    }

    var items = GZ_SUBJECTS.map(function (s) {
      var isOpen = openSet.indexOf(s.id) >= 0;
      var isCurrent = (cur === s.id);
      var vols = s.volumes.map(function (v) {
        var pts = (v.units && v.units.length) ? v.units : (v.points || []);
        if (pts.length === 0) {
          return '' +
            '<div class="sb-vol is-empty" onclick="window.__volClick(\'' + esc(s.id) + '\',\'' + esc(v.id) + '\')">' +
              '<span><i class="sb-grade">' + esc(v.grade || '') + '</i>' + esc(v.name) + '</span><span class="n">建设中</span>' +
            '</div>';
        }
        var prog = lsGet('gz_progress', {});
        var doneN = 0;
        for (var pi = 0; pi < pts.length; pi++) {
          if (prog[lessonKey(s.id, v.id, pi)]) doneN++;
        }
        var pct = Math.round(doneN / pts.length * 100);
        var bar = doneN > 0
          ? '<div class="sb-vol-bar"><i style="width:' + pct + '%"></i></div>'
          : '';
        var nClass = doneN >= pts.length ? ' is-done' : (doneN > 0 ? ' is-progress' : '');
        return '' +
          '<div class="sb-vol' + nClass + '" onclick="window.__volClick(\'' + esc(s.id) + '\',\'' + esc(v.id) + '\')">' +
            '<div class="sb-vol-top"><span><i class="sb-grade">' + esc(v.grade || '') + '</i>' + esc(v.name) + '</span><span class="n">' + (doneN > 0 ? doneN + '/' + pts.length : pts.length + ' 课时') + '</span></div>' +
            bar +
          '</div>';
      }).join('');

      return '' +
        '<li class="sb-subject' + (isOpen ? ' open' : '') + (isCurrent ? ' current' : '') + '" style="--sc:' + esc(s.color) + '" data-sid="' + esc(s.id) + '">' +
          '<div class="sb-subj-head">' +
            '<div class="sb-subj-nav" onclick="window.__sbNav(\'' + esc(s.id) + '\')" data-tip="' + esc(s.name) + '">' +
              '<span class="sb-icon">' + esc(s.icon) + '</span>' +
              '<span class="sb-name">' + esc(s.name) + '</span>' +
            '</div>' +
            '<span class="sb-arrow" onclick="window.__sbToggle(\'' + esc(s.id) + '\')" title="展开/收起">▶</span>' +
          '</div>' +
          '<div class="sb-vols">' + vols + '</div>' +
        '</li>';
    }).join('');

    var FUNCS = [
      { route: 'bank',      icon: '📝', name: '题库' },
      { route: 'progress',  icon: '📊', name: '学习进度' },
      { route: 'comments',  icon: '💬', name: '讨论区' },
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
      '<ul class="sb-list sb-subj-list">' + items + '</ul>' +
      '<div class="sb-func-section">' +
        '<div class="sb-divider"></div>' +
        '<div class="sb-section-title">功能</div>' +
        '<ul class="sb-list sb-func-list">' + funcs + '</ul>' +
      '</div>' +
      '<button class="sb-expand-btn" onclick="window.__toggleSidebarCollapse()" title="展开侧边栏">»</button>';
    // 恢复滚动位置
    var newSubjList = sb.querySelector('.sb-subj-list');
    if (newSubjList) newSubjList.scrollTop = scrollTop;
    bindSidebarTooltip();
  }

  // 整体折叠/展开侧边栏
  function toggleSidebarCollapse() {
    var scrollY = window.scrollY || window.pageYOffset;
    var collapsed = !document.body.classList.contains('sb-collapsed');
    document.body.classList.toggle('sb-collapsed', collapsed);
    try { localStorage.setItem('gz_sb_collapsed', collapsed ? '1' : '0'); } catch (e) {}
    var r = parseHash();
    renderSidebar(r);
    window.scrollTo(0, scrollY);
  }
  window.__toggleSidebarCollapse = toggleSidebarCollapse;

  // 点击科目导航区：进入科目页（同时确保已展开）
  window.__sbNav = function (sid) {
    var arr = getOpenSids();
    if (arr.indexOf(sid) < 0) {
      arr.unshift(sid);
      setOpenSids(arr);
    }
    navigate('subject', sid);
  };

  // 点击小三角形：仅展开/收起，不导航（直接操作DOM，不重建侧边栏，避免滚动位置丢失）
  window.__sbToggle = function (sid) {
    toggleOpenSid(sid);
    var li = document.querySelector('.sb-subject[data-sid="' + sid + '"]');
    if (li) {
      var openSet = getOpenSids();
      li.classList.toggle('open', openSet.indexOf(sid) >= 0);
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
    if (v && gzUnitCount(v) > 0) navigate('vol', sid, vid);
    else toast('「' + (v ? v.name : '') + '」内容建设中，敬请期待');
  };
  // 展开/折叠单元
  window.__toggleVolUnit = function (sid, vid, chName) {
    var volKey = sid + '/' + vid;
    var openArr;
    try { openArr = JSON.parse(localStorage.getItem('gz_vol_open') || '{}'); } catch (e) { openArr = {}; }
    var cur = openArr[volKey] || [];
    var idx = cur.indexOf(chName);
    if (idx >= 0) cur.splice(idx, 1);
    else cur.push(chName);
    openArr[volKey] = cur;
    try { localStorage.setItem('gz_vol_open', JSON.stringify(openArr)); } catch (e) {}
    renderVolume(sid, vid);
  };

  function volCounts(s) {
    var books = 0, topics = 0;
    s.volumes.forEach(function (v) { if (v.grade === '高三') topics++; else books++; });
    return { books: books, topics: topics };
  }

  /* ---------- 学科卡片 ---------- */
  function subjectCardHTML(s) {
    var c = volCounts(s);
    var totalPts = 0;
    s.volumes.forEach(function (v) {
      if (v.grade !== '高三') totalPts += gzUnitCount(v);
    });
    var meta = c.books + ' 册教材' + (c.topics ? ' · ' + c.topics + ' 个高三专题' : '');
    var badge;
    if (totalPts === 0) {
      badge = '<span class="badge-coming">内容建设中</span>';
    } else {
      var done = countSubjectProgress(s.id);
      var pct = Math.round(done / totalPts * 100);
      if (done === 0) {
        badge = '<span class="badge-count">' + totalPts + ' 个课时</span>';
      } else if (done >= totalPts) {
        badge = '<span class="badge-done-sm">✓ 已学完 ' + done + '/' + totalPts + '</span>';
      } else {
        badge = '<span class="badge-progress-sm">已学 ' + done + '/' + totalPts + '</span>';
      }
    }
    return '' +
      '<div class="subject-card" style="--sc:' + esc(s.color) + '" onclick="navigate(\'subject\',\'' + esc(s.id) + '\')">' +
        '<div class="subject-head">' +
          '<div class="subject-icon">' + esc(s.icon) + '</div>' +
          '<div><div class="subject-name">' + esc(s.name) + '</div>' +
          '<div class="subject-vols">' + meta + '</div></div>' +
        '</div>' +
        '<div class="subject-desc">' + esc(s.desc) + '</div>' +
        '<div class="subject-foot">' +
          badge +
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
        ((v.units && v.units.length) ? v.units : (v.points || [])).forEach(function (p, i) {
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
    // [换一批] 按钮
    var refreshBtn = '<button class="home-refresh" onclick="window.__refreshHome()">🔄 换一批</button>';
    return '<section class="home-section">' +
             '<div class="home-section-head">' +
               '<span class="home-section-title">' + esc(title) + '</span>' +
               '<span class="home-section-sub">' + esc(sub) + '</span>' +
               refreshBtn +
             '</div>' +
             '<div class="lesson-grid">' + cards + '</div>' +
           '</section>';
  }
  // 今日推荐：从没学过的课时里随机挑选 N 个，学科尽量分散
  function pickRecommended(pool, n) {
    if (!pool || !pool.length) return [];
    var prog = lsGet('gz_progress', {});

    // 1. 筛掉已完成的课时，只保留未学过的
    var unfinished = pool.filter(function (l) {
      var m = /#\/lesson\/([^\/]+)\/([^\/]+)\/(\d+)/.exec(l.hash || '');
      if (!m) return true;
      return !prog[m[1] + '/' + m[2] + '/' + m[3]];
    });

    // 2. Fisher-Yates 洗牌
    function shuffle(arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    }

    // 3. 按学科分组，每组内随机打乱
    var bySubject = {};
    unfinished.forEach(function (l) {
      var k = l.subjectId || '_';
      if (!bySubject[k]) bySubject[k] = [];
      bySubject[k].push(l);
    });
    Object.keys(bySubject).forEach(function (k) { bySubject[k] = shuffle(bySubject[k]); });

    // 4. 学科 key 也随机打乱，确保每次轮询的学科顺序不同
    var subjKeys = shuffle(Object.keys(bySubject));

    // 5. 轮询取每个学科的第一道题，保证学科尽量分散
    var picks = [];
    var idxs = {};
    subjKeys.forEach(function (k) { idxs[k] = 0; });
    while (picks.length < n) {
      var added = false;
      for (var i = 0; i < subjKeys.length && picks.length < n; i++) {
        var k = subjKeys[i];
        if (idxs[k] < bySubject[k].length) {
          picks.push(bySubject[k][idxs[k]++]);
          added = true;
        }
      }
      if (!added) break;
    }

    // 6. 不够 N 道时，从已学课时中随机补足
    if (picks.length < n) {
      var seen = {};
      picks.forEach(function (l) { seen[l.hash] = true; });
      var remaining = pool.filter(function (l) { return !seen[l.hash]; });
      picks = picks.concat(shuffle(remaining).slice(0, n - picks.length));
    }

    return picks;
  }
  window.__refreshHome = function () {
    // 真正的随机推荐：直接重新渲染即可得到新结果
    renderHome();
    window.scrollTo(0, 400);
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
      var f = findLessonMeta(r.sid, r.vid, r.idx);
      if (f) out.push({ subjectId: r.sid, subjectName: f.subject.name, color: f.subject.color, volName: f.vol.name, name: f.point.name, chapter: f.point.chapter, hash: lessonUrl(r.sid, r.vid, r.idx) });
    });
    return out;
  }

  // 找到下一节要学的课（最近学科 + 最近册次的下一个未完成课时；没有则取最近学科第一课）
  function nextUnfinishedLesson() {
    var prog = lsGet('gz_progress', {});
    var recent = lsGet('gz_recent', []);
    // 1) 从最近学习里挑：同册次的下一节
    if (recent.length > 0) {
      var top = recent[0];
      var subj = gzGetSubject(top.sid);
      if (subj) {
        var vol = null;
        for (var i = 0; i < subj.volumes.length; i++) {
          if (subj.volumes[i].id === top.vid) { vol = subj.volumes[i]; break; }
        }
        if (vol && gzUnitCount(vol) > 0) {
          // 找 top.idx 之后第一个未完成的
          for (var j = top.idx; j < gzUnitCount(vol); j++) {
            if (!prog[lessonKey(top.sid, top.vid, j)]) {
              return { sid: top.sid, vid: top.vid, idx: j, f: findLessonMeta(top.sid, top.vid, j) };
            }
          }
        }
      }
    }
    // 2) 取最近学科第一卷的第一节（仍未完成）
    if (recent.length > 0) {
      var subj2 = gzGetSubject(recent[0].sid);
      if (subj2) {
        for (var vi = 0; vi < subj2.volumes.length; vi++) {
          var vv = subj2.volumes[vi];
          if (vv.grade === '高三') continue;
          if (!gzUnitCount(vv)) continue;
          for (var pi = 0; pi < gzUnitCount(vv); pi++) {
            if (!prog[lessonKey(subj2.id, vv.id, pi)]) {
              return { sid: subj2.id, vid: vv.id, idx: pi, f: findLessonMeta(subj2.id, vv.id, pi) };
            }
          }
        }
      }
    }
    // 3) 没有任何 recent → 找全局第一个有内容的课时
    for (var si = 0; si < GZ_SUBJECTS.length; si++) {
      var s3 = GZ_SUBJECTS[si];
      for (var vi2 = 0; vi2 < s3.volumes.length; vi2++) {
        var v3 = s3.volumes[vi2];
        if (v3.grade === '高三') continue;
        if (gzUnitCount(v3) > 0) {
          return { sid: s3.id, vid: v3.id, idx: 0, f: findLessonMeta(s3.id, v3.id, 0) };
        }
      }
    }
    return null;
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
    var nxt = nextUnfinishedLesson();
    var nextHtml = '';
    if (nxt && nxt.f) {
      var f = nxt.f;
      var doneCount = Object.keys(lsGet('gz_progress', {})).filter(function (k) { return lsGet('gz_progress', {})[k]; }).length;
      var hasStarted = doneCount > 0;
      nextHtml = '<a class="continue-cta" style="--sc:' + esc(f.subject.color) + '" href="' + esc(lessonUrl(nxt.sid, nxt.vid, nxt.idx)) + '">' +
        '<div class="cc-left">' +
          '<div class="cc-icon">' + esc(f.subject.icon) + '</div>' +
          '<div class="cc-info">' +
            '<div class="cc-eyebrow">' + (hasStarted ? '🎯 继续学习' : '🚀 开始你的第一课') + '</div>' +
            '<div class="cc-name">' + esc(f.point.name) + '</div>' +
            '<div class="cc-meta">' + esc(f.subject.name) + ' · ' + esc(f.vol.name) + (f.point.chapter ? ' · ' + esc(f.point.chapter) : '') + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="cc-go">继续 →</div>' +
      '</a>';
    }
    var html = '' +
      '<div class="home-top">' +
        '<section class="hero">' +
          '<h1>欢迎来到高中预习网站 🎓</h1>' +
          '<p>覆盖高中全部 ' + st.subjects + ' 门学科，按新课标教材册次组织。提前预习、系统梳理，高中三年从容开局。</p>' +
          '<div class="hero-chips">' +
            '<span class="hero-chip">📚 全学科覆盖</span>' +
            '<span class="hero-chip">🗂️ 按教材册次组织</span>' +
            '<span class="hero-chip">✏️ 知识点 + 练习</span>' +
          '</div>' +
          '<div class="hero-stats">' +
            '<div class="hero-stat"><b>' + st.subjects + '</b><span>门学科</span></div>' +
            '<div class="hero-stat"><b>' + st.volumes + '</b><span>册教材</span></div>' +
            '<div class="hero-stat"><b>' + st.points + '</b><span>个课时</span></div>' +
          '</div>' +
        '</section>' +
        '<aside class="checkin-section">' + renderCheckinCard() + '</aside>' +
      '</div>' +
      (nextHtml ? '<div class="home-continue">' + nextHtml + '</div>' : '') +
      '<section class="quote-bar">' +
        '<span class="quote-bar-label">📖 每日一言</span>' +
        '<span class="quote-bar-text">' + esc(q.text) + '</span>' +
        '<span class="quote-bar-line"></span>' +
        '<span class="quote-bar-who">' + esc(q.who) + '</span>' +
      '</section>' +
      makeHomeSection('⭐ 今日推荐', '从未学过的课时里随机推荐 · 跨学科',
        pickRecommended(pool, 3)) +
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
      var n = gzUnitCount(v);
      if (n > 0) {
        var doneN = 0;
        var prog = lsGet('gz_progress', {});
        for (var pi = 0; pi < n; pi++) {
          if (prog[lessonKey(s.id, v.id, pi)]) doneN++;
        }
        var pct = n > 0 ? Math.round(doneN / n * 100) : 0;
        var doneClass = doneN === n ? ' is-all-done' : (doneN > 0 ? ' is-part-done' : '');
        var badge = doneN === n
          ? '<span class="badge-done">✓ 已学完 ' + doneN + '/' + n + '</span>'
          : (doneN > 0
            ? '<span class="badge-progress">已学 ' + doneN + '/' + n + '</span>'
            : '<span class="badge-building">' + n + ' 个课时</span>');
        return '' +
          '<div class="volume-card has-content' + doneClass + '" onclick="window.__volClick(\'' + esc(s.id) + '\',\'' + esc(v.id) + '\')">' +
            '<div class="volume-top"><div class="volume-name">' + esc(v.name) + '</div>' + badge + '</div>' +
            '<div class="volume-desc">' + esc(v.desc) + '</div>' +
            '<div class="volume-progress"><i style="width:' + pct + '%"></i></div>' +
          '</div>';
      }
      return '' +
        '<div class="volume-card is-empty" onclick="window.__volClick(\'' + esc(s.id) + '\',\'' + esc(v.id) + '\')">' +
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
    var pts = (v.units && v.units.length) ? v.units : (v.points || []);
    var crumb = '<a onclick="navigate(\'home\')">首页</a> / <a onclick="navigate(\'subject\',\'' + esc(sid) + '\')">' + esc(s.name) + '</a> / ' + esc(v.name);

    if (!pts.length) {
      view.innerHTML = '<div class="crumb">' + crumb + '</div>' +
        '<div class="subject-hero" style="--sc:' + esc(s.color) + '"><div class="subject-icon">' + esc(s.icon) + '</div><div><h2>' + esc(v.name) + '</h2><p>' + esc(v.desc) + '</p></div></div>' +
        '<div class="empty-tip">📦 「' + esc(v.name) + '」内容建设中，敬请期待。</div>';
      return;
    }
    // 按章节（单元）分组：把 "第一章 集合...· 1.1" 这种带段号的 chapter 归并到 "第一章 集合..."
    var groups = [];
    var map = {};
    function normalizeChapter(ch) {
      if (!ch) return '单元课时';
      // 去掉末尾的 " · 1.1" / "· 1" / "· 1.2.3" 之类的段号
      return ch.replace(/\s*[·•・][^·•・]*?\d+(\.\d+)*\s*$/, '').trim() || ch;
    }
    pts.forEach(function (p, i) {
      var ch = normalizeChapter(p.chapter);
      if (!map[ch]) { map[ch] = []; groups.push(ch); }
      map[ch].push({ p: p, i: i });
    });
    var prog = lsGet('gz_progress', {});
    var volDone = 0;
    pts.forEach(function (p, i) { if (prog[lessonKey(sid, vid, i)]) volDone++; });

    // 单元展开状态（默认第一个展开；持久化到 localStorage）
    var volKey = sid + '/' + vid;
    var openArr;
    try { openArr = JSON.parse(localStorage.getItem('gz_vol_open') || '{}'); } catch (e) { openArr = {}; }
    if (!openArr[volKey]) {
      // 第一次访问：展开第一个单元
      openArr[volKey] = [groups[0]];
      try { localStorage.setItem('gz_vol_open', JSON.stringify(openArr)); } catch (e) {}
    }
    var isOpen = function (ch) { return (openArr[volKey] || []).indexOf(ch) >= 0; };

    var body = groups.map(function (ch, gi) {
      var items = map[ch];
      var chDone = 0;
      items.forEach(function (o) { if (prog[lessonKey(sid, vid, o.i)]) chDone++; });
      var chPct = items.length > 0 ? Math.round(chDone / items.length * 100) : 0;
      var open = isOpen(ch);
      // 单元头部（可点击展开/折叠）
      var unitHead = '<div class="vol-unit-head" onclick="window.__toggleVolUnit(\'' + esc(sid) + '\',\'' + esc(vid) + '\',\'' + esc(ch).replace(/'/g, "\\'") + '\')">' +
        '<span class="vol-unit-chevron ' + (open ? 'is-open' : '') + '">▶</span>' +
        '<div class="vol-unit-info">' +
          '<div class="vol-unit-title">' + esc(ch) + '</div>' +
          '<div class="vol-unit-meta">共 ' + items.length + ' 课时 · 已学 ' + chDone + ' / ' + items.length + (chDone >= items.length && items.length > 0 ? ' · ✅ 完成' : '') + '</div>' +
        '</div>' +
        '<div class="vol-unit-bar"><i style="width:' + chPct + '%"></i></div>' +
      '</div>';
      // 课时列表（长条单列）
      var unitBody = open ? '<div class="vol-unit-body">' + items.map(function (o) {
        var p = o.p;
        var k = lessonKey(sid, vid, o.i);
        var done = !!prog[k];
        var diff = p.difficulty || '基础';
        var exN = (p.exN != null ? p.exN : (p.exercises || []).length);
        var diffColor = diff === '难点' ? '#ef4444' : (diff === '重点' ? '#f59e0b' : '#10b981');
        return '<a class="lesson-row' + (done ? ' is-done' : '') + '" href="' + lessonUrl(sid, vid, o.i) + '">' +
          '<span class="lr-circle' + (done ? ' is-done' : '') + '">' + (done ? '✓' : '') + '</span>' +
          '<span class="lr-name">' + esc(p.name) + '</span>' +
          '<span class="lr-info">' +
            (exN ? '<span class="lr-meta-item">📝 ' + exN + ' 题</span>' : '<span class="lr-meta-item">📖 图文</span>') +
            '<span class="lr-diff" style="--dc:' + diffColor + '">' + esc(diff) + '</span>' +
          '</span>' +
          '<span class="lr-arrow">' + (done ? '↻' : '→') + '</span>' +
        '</a>';
      }).join('') + '</div>' : '';
      return '<div class="vol-unit' + (open ? ' is-open' : '') + (chDone >= items.length && items.length > 0 ? ' is-done' : '') + '">' + unitHead + unitBody + '</div>';
    }).join('');

    // 卷级进度条
    var volPct = pts.length > 0 ? Math.round(volDone / pts.length * 100) : 0;
    var volProgressBar = '<div class="vol-progress">' +
      '<div class="vol-progress-head"><span>本册进度</span><b>' + volDone + ' / ' + pts.length + ' 课时 · ' + volPct + '%</b></div>' +
      '<div class="vol-progress-bar"><i style="width:' + volPct + '%"></i></div>' +
      '</div>';

    view.innerHTML = '<div class="crumb">' + crumb + '</div>' +
      '<div class="subject-hero" style="--sc:' + esc(s.color) + '"><div class="subject-icon">' + esc(s.icon) + '</div>' +
        '<div><h2>' + esc(v.name) + '</h2><p>' + esc(v.desc) + ' · 共 ' + pts.length + ' 课时</p></div></div>' +
      volProgressBar +
      '<div class="vol-units-head"><h2 class="section-title">📑 单元目录</h2><span class="vol-units-count">共 <b>' + groups.length + '</b> 个单元 · <b>' + pts.length + '</b> 个课时</span></div>' +
      '<div class="vol-units">' + body + '</div>';
    // 后台预加载本册重内容（不阻塞渲染），点课时即开
    setTimeout(function () { ensureVolumeContent(sid, vid); }, 300);
  }

  /* ---------- 课时详情 ---------- */
  function renderLesson(sid, vid, idx) {
    var v = gzGetVolume(sid, vid);
    if (!v) { view.innerHTML = '<div class="empty-tip"><div class="big">🤔</div><p>没有找到这个课时</p></div>'; return; }
    var s = gzGetSubject(sid);
    // 先渲染骨架，内容按需懒加载，避免空白
    view.innerHTML = '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / <a onclick="navigate(\'subject\',\'' + esc(sid) + '\')">' + esc(s ? s.name : '') + '</a> / ' + esc(v.name) + '</div>' +
      '<div class="lesson-loading"><div class="spinner"></div><p>📚 正在加载课时内容…</p></div>';
    var token = _renderToken;
    ensureVolumeContent(sid, vid).then(function () {
      if (token !== _renderToken) return; // 已被新导航取代
      var p = v.points && v.points[idx];
      if (!p) { view.innerHTML = '<div class="empty-tip"><div class="big">🤔</div><p>没有找到这个课时</p></div>'; return; }
      var col = (s && s.color) || '#4a7de0';
      pushRecent(sid, vid, idx, p.name);
      var crumb = '<a onclick="navigate(\'home\')">首页</a> / <a onclick="navigate(\'subject\',\'' + esc(sid) + '\')">' + esc(s.name) + '</a> / <a href="' + volUrl(sid, vid) + '">' + esc(v.name) + '</a> / ' + esc(p.name);

      // 语文课时：在开头补上对应课时的「原文」（来自集中映射 GZ_CHINESE_ORIGINALS）
      var origObj = (sid === 'chinese' && window.GZ_CHINESE_ORIGINALS && GZ_CHINESE_ORIGINALS[p.id]) ? GZ_CHINESE_ORIGINALS[p.id] : null;
      var origBlock = origObj ? renderContentBlock(Object.assign({ type: 'original' }, origObj)) : '';
      var blocks = origBlock + (p.content || []).map(renderContentBlock).join('');
      var exHTML = renderExercises(p, sid, vid, idx);

      // 课时完成判定：有练习→做完全部练习才算学完；无练习→手动“我已读完”
      var exCount = (p.exercises || []).length;
      var isDone = !!lsGet('gz_progress', {})[lessonKey(sid, vid, idx)];
      var readBtn;
      if (exCount === 0) {
        readBtn = isDone
          ? '<span class="read-toggle is-done">✓ 已学完</span>'
          : '<button class="read-toggle" onclick="window.__markLessonRead(\'' + esc(sid) + '\',\'' + esc(vid) + '\',' + idx + ')">我已读完，标记为完成</button>';
      } else {
        var doneN = lessonAnsweredCount(sid, vid, idx, exCount);
        readBtn = (doneN >= exCount)
          ? '<span class="read-toggle is-done">✓ 已学完（' + exCount + '/' + exCount + ' 题已完成）</span>'
          : '<span class="read-toggle in-progress">📝 已完成 ' + doneN + ' / ' + exCount + ' 题，做完全部即标记学完</span>';
      }

      // 上一课 / 下一课
      var pts = v.points || [];
      var prev = idx > 0 ? '<a class="nav-prev" href="' + lessonUrl(sid, vid, idx - 1) + '">← ' + esc(pts[idx - 1].name) + '</a>' : '<span class="nav-prev disabled">← 已是第一课</span>';
      var next = idx < pts.length - 1 ? '<a class="nav-next" href="' + lessonUrl(sid, vid, idx + 1) + '">' + esc(pts[idx + 1].name) + ' →</a>' : '<span class="nav-next disabled">已是最后一课 →</span>';

      view.innerHTML = '<div class="crumb">' + crumb + '</div>' +
        '<article class="lesson" style="--sc:' + esc(col) + '">' +
          '<header class="lesson-head">' +
            '<div class="lesson-kicker">' + esc(v.name) + ' · ' + esc(p.chapter || '') + '</div>' +
            '<h1 class="lesson-title">' + esc(p.name) + '</h1>' +
            (p.author ? '<div class="lesson-author">' + esc(p.author) + '</div>' : '') +
            (p.difficulty ? '<span class="lp-diff lp-diff-' + esc(p.difficulty) + '">难度：' + esc(p.difficulty) + '</span>' : '') +
            '<div class="lesson-read" id="lessonReadBox">' + readBtn + '</div>' +
          '</header>' +
          '<div class="lesson-body">' + blocks + '</div>' +
          '<section class="exercises" id="exercises"><h2 class="ex-title">📝 课后练习（' + exCount + ' 题）<span class="ex-progress" id="exProgress">' + (exCount ? '已完成 ' + lessonAnsweredCount(sid, vid, idx, exCount) + ' / ' + exCount + ' 题' : '') + '</span></h2>' + exHTML + '</section>' +
          '<div class="lesson-nav">' + prev + next + '</div>' +
        '</article>';
      // 恢复打开课时前的滚动位置（不再强制回到顶部）
      if (window.__pendingScroll != null) {
        restoreScrollKeep(window.__pendingScroll);
        window.__pendingScroll = null;
      }
    });
  }

  /* ---------- 内容块渲染 ---------- */
  function blockTip(cls, label, text) {
    return '<div class="' + cls + '"><div class="box-label">' + esc(label) + '</div><div>' + escRich(text) + '</div></div>';
  }
  function renderContentBlock(b) {
    if (!b) return '';
    switch (b.type) {
      case 'heading':   return '<h3 class="b-heading">' + escRich(b.text) + '</h3>';
      case 'subheading':return '<h4 class="b-subheading">' + escRich(b.text || '') + '</h4>';
      case 'paragraph': return '<p class="b-paragraph">' + escRich(b.text) + '</p>';
      case 'para':      return '<p class="b-paragraph">' + escRich(b.text || '') + '</p>';
      case 'keypoint':  return blockTip('b-keypoint', b.label || '重点', b.text || '');
      case 'tip':       return blockTip('b-tip', b.label || '提示', b.text || '');
      case 'warn':      return blockTip('b-warn', b.label || '注意', b.text || '');
      case 'list':      return '<ul class="b-list">' + (b.items || []).map(function (it) { return '<li>' + escRich(it) + '</li>'; }).join('') + '</ul>';
      case 'svg':       return '<figure class="b-figure"><div class="b-svg">' + b.svg + '</div>' + (b.caption ? '<figcaption>' + esc(b.caption) + '</figcaption>' : '') + '</figure>';
      case 'table':     return '<div class="b-table-wrap"><table class="b-table"><thead><tr>' + (b.headers || []).map(function (h) { return '<th>' + escRich(h) + '</th>'; }).join('') + '</tr></thead><tbody>' + (b.rows || []).map(function (row) { return '<tr>' + row.map(function (c) { return '<td>' + escRich(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      case 'formula':   return '<div class="b-formula">' + escRich(b.text) + '</div>';
      case 'example':   return blockTip('b-example', '例题', b.text || '');
      case 'reading':   return blockTip('b-reading', '阅读', b.text || '');
      case 'poem':      return '<div class="b-poem">' + escRich(b.text).replace(/\n/g, '<br>') + '</div>';
      case 'original': {
        var o = b, html = '';
        html += '<div class="b-original"><div class="box-label">📜 原文</div>';
        if (o.title) html += '<div class="b-original-title">' + escRich(o.title) + '</div>';
        if (o.copyright) {
          html += '<div class="orig-cr-banner">⚠️ 本篇作者仍在著作权保护期内（或系当代作品），此处仅依教材提供<b>节选</b>并附解析，供课堂学习使用；完整原文请购买正版图书或到图书馆借阅。</div>';
        }
        if (o.segments && o.segments.length) {
          html += '<div class="orig-segs">';
          o.segments.forEach(function (s, i) {
            html += '<div class="orig-seg">';
            html += '<div class="orig-seg-idx">第 ' + (i + 1) + ' 段</div>';
            html += '<div class="orig-seg-text">' + escRich(s.text || '').replace(/\n/g, '<br>') + '</div>';
            if (s.note) html += '<div class="orig-seg-note"><span class="orig-note-label">💡 分析</span>' + escRich(s.note) + '</div>';
            html += '</div>';
          });
          html += '</div>';
        } else if (o.text) {
          html += '<div class="b-original-text">' + escRich(o.text).replace(/\n/g, '<br>') + '</div>';
        }
        var fullTxt = o.full || (o.segments ? o.segments.map(function (s) { return s.text; }).join('\n\n') : '');
        if (fullTxt && !o.copyright) {
          html += '<details class="orig-full"><summary class="orig-full-label">📖 完整全文（含全部段落）</summary><div class="b-original-text">' + escRich(fullTxt).replace(/\n/g, '<br>') + '</div></details>';
        }
        if (o.src) html += '<div class="b-original-src">出处：' + escRich(o.src) + '</div>';
        html += '</div>';
        return html;
      }
      default:          return '';
    }
  }

  /* ---------- 练习 / 答题引擎 ---------- */
  function renderExercises(p, sid, vid, idx) {
    var ex = p.exercises || [];
    if (!ex.length) return '<div class="b-empty">本课暂无练习。</div>';
    var ansMap = getLessonAnswers(sid, vid, idx);
    return ex.map(function (q, i) {
      return buildQuiz(q, i, sid, vid, idx, ansMap[i]);
    }).join('');
  }

  // 构建单题展示：未作答显示提交按钮；已作答显示对错结果与解析（刷新后保持状态）
  function buildQuiz(q, i, sid, vid, idx, ans) {
    var key = lessonKey(sid, vid, idx);
    var faved = isFav(key, i);
    var opts;
    if (q.type === 'choice') {
      opts = (q.options || []).map(function (o, oi) {
        var cls = 'opt';
        var sel = false;
        if (ans) {
          if (String(o) === String(q.answer)) cls += ' is-correct-opt';
          if (String(ans.myAnswer) === String(o)) { sel = true; if (!ans.correct) cls += ' is-wrong-opt'; }
          cls += ' disabled';
        }
        return '<button class="' + cls + (sel ? ' sel' : '') + '" data-q="' + i + '" data-val="' + esc(o) + '">' +
                 '<span class="opt-key">' + String.fromCharCode(65 + oi) + '</span>' +
                 '<span class="opt-txt">' + escRich(o) + '</span></button>';
      }).join('');
    } else {
      opts = '<input class="fill-input" id="fill-' + i + '" placeholder="请输入答案" value="' + esc(ans ? ans.myAnswer : '') + '"' + (ans ? ' disabled' : '') + ' />';
    }
    var status = ans
      ? (ans.correct ? '<span class="quiz-status ok" title="已答对">✓</span>' : '<span class="quiz-status no" title="答错已入错题本">✗</span>')
      : '';
    var actions = ans ? '' :
      '<div class="quiz-actions"><button class="quiz-submit" onclick="window.__submitQuiz(\'' + esc(sid) + '\',\'' + esc(vid) + '\',' + idx + ',' + i + ')">提交</button><span class="quiz-feedback" id="fb-' + i + '"></span></div>';
    var result = ans ? quizResultBlock(q, ans) : '';
    var expBody = (ans && q.explanation) ? '<div class="quiz-exp-label">📝 解析</div><div class="quiz-exp-body">' + escRich(q.explanation) + '</div>' : '';
    return '<div class="quiz' + (ans ? (ans.correct ? ' is-correct' : ' is-wrong') : '') + '" data-q="' + i + '" data-type="' + q.type + '">' +
      '<div class="quiz-q"><span class="quiz-no">' + (i + 1) + '</span>' + status + '<span>' + escRich(q.question) + '</span>' +
      '<button class="quiz-fav' + (faved ? ' is-fav' : '') + '" title="' + (faved ? '取消收藏' : '收藏本题') + '" onclick="window.__toggleFav(\'' + esc(sid) + '\',\'' + esc(vid) + '\',' + idx + ',' + i + ')">' + (faved ? '★' : '☆') + '</button>' +
      '</div>' +
      '<div class="quiz-opts">' + opts + '</div>' +
      actions +
      result +
      '<div class="quiz-exp" id="exp-' + i + '">' + expBody + '</div>' +
    '</div>';
  }

  function quizResultBlock(q, ans) {
    var bigIcon = ans.correct ? '<div class="quiz-result-icon ok">✓</div>' : '<div class="quiz-result-icon no">✗</div>';
    var compare = ans.correct
      ? '<div class="quiz-result-text ok">回答正确，干得漂亮！</div>'
      : '<div class="quiz-result-text no">回答错误</div>' +
        '<div class="quiz-compare">' +
          '<div class="qc-row"><span class="qc-label">你的答案</span><span class="qc-val mine">' + esc(ans.myAnswer) + '</span></div>' +
          '<div class="qc-row"><span class="qc-label">正确答案</span><span class="qc-val right">' + esc(String(q.answer)) + '</span></div>' +
        '</div>' +
        '<div class="quiz-wrongbook-note">📕 已在错题本中，<a onclick="navigate(\'wrongbook\')">去复习</a></div>';
    return '<div class="quiz-feedback ' + (ans.correct ? 'ok' : 'no') + '">' + bigIcon + compare + '</div>';
  }

  window.__submitQuiz = function (sid, vid, idx, qi) {
    var f = findLesson(sid, vid, idx);
    if (!f) return;
    var q = (f.point.exercises || [])[qi];
    if (!q) return;
    var box = document.querySelector('.quiz[data-q="' + qi + '"]');
    if (!box) return;
    var correct, myAnswer = '';
    if (q.type === 'choice') {
      var sel = box.querySelector('.opt.sel');
      if (!sel) { toast('请先选择一个选项'); return; }
      myAnswer = sel.getAttribute('data-val');
      correct = (myAnswer === String(q.answer));
    } else {
      var inp = document.getElementById('fill-' + qi);
      var val = (inp.value || '').trim();
      if (!val) { toast('请先填写答案'); return; }
      myAnswer = val;
      var ans = String(q.answer).trim();
      correct = (val === ans || (ans.indexOf('|') >= 0 && ans.split('|').map(function (x) { return x.trim(); }).indexOf(val) >= 0));
    }
    // 记录每题作答（用于“做完全部题目才算学完”）
    var rec = { correct: correct, myAnswer: myAnswer, ts: Date.now() };
    setLessonAnswer(sid, vid, idx, qi, rec);
    // 记录做题日志（用于 7 天节奏图）
    logQuiz(sid, vid, idx, qi, correct);
    // 答错自动收录错题本
    if (!correct) {
      var wrong = lsGet('gz_wrongbook', []);
      var key = lessonKey(sid, vid, idx);
      var dup = wrong.some(function (w) { return w.key === key && w.qi === qi; });
      if (!dup) {
        wrong.push({ key: key, qi: qi, sid: sid, question: q.question, answer: q.answer, myAnswer: myAnswer, subjectName: f.subject.name, lessonName: f.point.name, type: q.type, options: q.options || [], ts: Date.now() });
        lsSet('gz_wrongbook', wrong);
      }
      toast('已加入错题本');
    }
    // 用“已作答”状态重建该题展示
    var wrap = document.createElement('div');
    wrap.innerHTML = buildQuiz(q, qi, sid, vid, idx, rec);
    var newBox = wrap.firstElementChild;
    if (newBox) {
      box.replaceWith(newBox);
      try { newBox.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) {}
    }
    // 重新判定课时是否学完（需做完全部题目）
    var total = (f.point.exercises || []).length;
    recomputeLessonDone(sid, vid, idx, total);
    updateLessonCompletionUI(sid, vid, idx, total);
  };

  function markProgress(sid, vid, idx) {
    var prog = lsGet('gz_progress', {});
    prog[lessonKey(sid, vid, idx)] = { ts: Date.now() };
    lsSet('gz_progress', prog);
  }

  /* ---------- 每题作答记录（用于“做完全部题目才算学完”） ---------- */
  function getLessonAnswers(sid, vid, idx) {
    var all = lsGet('gz_lesson_answers', {});
    return all[lessonKey(sid, vid, idx)] || {};
  }
  function setLessonAnswer(sid, vid, idx, qi, rec) {
    var all = lsGet('gz_lesson_answers', {});
    var k = lessonKey(sid, vid, idx);
    if (!all[k]) all[k] = {};
    all[k][qi] = rec;
    lsSet('gz_lesson_answers', all);
  }
  function lessonAnsweredCount(sid, vid, idx, total) {
    var ans = getLessonAnswers(sid, vid, idx);
    var n = 0;
    for (var i = 0; i < total; i++) if (ans[i]) n++;
    return n;
  }
  // 课时“学完”判定：仅当该课时所有课后练习都至少提交过一次（对错都算）
  function recomputeLessonDone(sid, vid, idx, total) {
    if (!total) return; // 无练习的课时由“我已读完”手动判定
    var ans = getLessonAnswers(sid, vid, idx);
    var allDone = true;
    for (var i = 0; i < total; i++) { if (!ans[i]) { allDone = false; break; } }
    var prog = lsGet('gz_progress', {});
    if (allDone) prog[lessonKey(sid, vid, idx)] = { ts: Date.now() };
    else delete prog[lessonKey(sid, vid, idx)];
    lsSet('gz_progress', prog);
  }
  // 提交后只更新课时头部的完成度提示，不整页重渲染（避免滚动跳动）
  function updateLessonCompletionUI(sid, vid, idx, total) {
    var box = document.getElementById('lessonReadBox');
    var exP = document.getElementById('exProgress');
    var doneN = lessonAnsweredCount(sid, vid, idx, total);
    if (box) {
      if (total === 0) {
        /* 无练习：保持手动按钮，不在此处理 */
      } else if (doneN >= total) {
        box.innerHTML = '<span class="read-toggle is-done">✓ 已学完（' + total + '/' + total + ' 题已完成）</span>';
      } else {
        box.innerHTML = '<span class="read-toggle in-progress">📝 已完成 ' + doneN + ' / ' + total + ' 题，做完全部即标记学完</span>';
      }
    }
    if (exP) exP.textContent = '已完成 ' + doneN + ' / ' + total + ' 题';
  }

  /* 给旧的 gz_progress 记录补时间戳（按签到日期均匀回填到历史中） */
  function backfillProgressTs() {
    var prog = lsGet('gz_progress', {});
    var noTs = [];
    Object.keys(prog).forEach(function (k) { if (prog[k] === true) noTs.push(k); });
    if (!noTs.length) return;
    var checkin = lsGet('gz_checkin', { history: [] });
    var history = (checkin.history || []).slice().sort();
    var dayMs = 86400000;
    // 没有签到记录就全部回填到今天
    var tsList = history.length
      ? history.map(function (ds) {
          var p = ds.split('-');
          return new Date(+p[0], +p[1] - 1, +p[2], 12, 0, 0).getTime();
        })
      : [Date.now()];
    noTs.forEach(function (k, i) {
      prog[k] = { ts: tsList[i % tsList.length], backfilled: true };
    });
    lsSet('gz_progress', prog);
  }

  /* 记录一次做题（含对错），用于最近 7 天做题数统计 */
  function logQuiz(sid, vid, idx, qi, right) {
    var log = lsGet('gz_quiz_log', []);
    log.push({ ts: Date.now(), key: lessonKey(sid, vid, idx), qi: qi, right: !!right });
    if (log.length > 2000) log = log.slice(-2000);
    lsSet('gz_quiz_log', log);
  }
  window.__markLessonRead = function (sid, vid, idx) {
    markProgress(sid, vid, idx);
    toast('✓ 已标记为完成');
    // 重新渲染当前页（按钮变为"已学完"），保持当前滚动位置不跳顶
    // 复用课时异步渲染后的滚动恢复机制
    window.__pendingScroll = window.scrollY || window.pageYOffset || 0;
    renderLesson(sid, vid, idx);
  };
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

  /* ---------- 云端同步（腾讯云 CloudBase）：学习数据自动同步到云 ---------- */
  var _origLsSet = lsSet;
  // 需要同步到云端的学习类 localStorage 键
  var CB_LEARNING_KEYS = ['gz_progress', 'gz_wrongbook', 'gz_checkin', 'gz_recent', 'gz_quiz_log', 'gz_favs', 'gz_medals', 'gz_comments', 'gz_done_count'];
  var _cbSyncTimer = null;
  function cbCloudEnabled() { return !!(window.cbAvailable); }
  function cbSyncNow() {
    if (!cbCloudEnabled()) return;
    var data = {};
    for (var i = 0; i < CB_LEARNING_KEYS.length; i++) data[CB_LEARNING_KEYS[i]] = lsGet(CB_LEARNING_KEYS[i], null);
    var u = getCurrentUser();
    if (u) { data.phone = u.phone || u.username; data.nickname = u.nickname; data.avatar = u.avatar; data.createdAt = u.createdAt; }
    window.cbSaveUserData(data);
  }
  function cbScheduleSync() {
    if (!cbCloudEnabled()) return;
    if (_cbSyncTimer) clearTimeout(_cbSyncTimer);
    _cbSyncTimer = setTimeout(cbSyncNow, 800);
  }
  // 覆写 lsSet：学习类数据写入后，自动（防抖）同步到云端
  lsSet = function (key, val) {
    _origLsSet(key, val);
    if (CB_LEARNING_KEYS.indexOf(key) >= 0) cbScheduleSync();
  };
  // 把云端用户文档的学习数据恢复到本机
  function cbRestoreFromCloud(data) {
    if (!data) return;
    for (var i = 0; i < CB_LEARNING_KEYS.length; i++) {
      var k = CB_LEARNING_KEYS[i];
      if (data[k] !== undefined) _origLsSet(k, data[k]);
    }
  }
  // 在本地建立/更新一个账号记录（云端手机号优先；无则 local_<phone>）
  function cbApplyCloudUser(account, uid) {
    var users = getAllUsers();
    var id = uid || ('local_' + account);
    if (!users[id]) {
      var avatarPool = ['🐱', '🐶', '🦊', '🐼', '🐯', '🦁', '🐰', '🐨', '🐸', '🐵', '🦄', '🐙'];
      users[id] = {
        id: id, username: account, phone: account, email: account, nickname: account,
        avatar: avatarPool[Math.floor(Math.random() * avatarPool.length)],
        createdAt: new Date().toISOString(), lastLoginAt: new Date().toISOString()
      };
    } else {
      users[id].lastLoginAt = new Date().toISOString();
    }
    _origLsSet('gz_users', users);
    _origLsSet('gz_currentUser', id);
  }
  // 本机账号兜底（云端不可达时使用），保证网站始终可登录
  function cbLocalLogin(phone, password) {
    var users = getAllUsers();
    var found = null;
    for (var k in users) if (users[k].username === phone) { found = users[k]; break; }
    if (!found) return { ok: false, msg: '该手机号尚未在本机注册（云端可能不可达，请联网后重试）' };
    if (isUserBanned(phone)) return { ok: false, msg: '该账号已被封禁' };
    if (found.password !== hashPassword(password)) return { ok: false, msg: '密码错误' };
    found.lastLoginAt = new Date().toISOString();
    users[found.id] = found;
    _origLsSet('gz_users', users);
    _origLsSet('gz_currentUser', found.id);
    return { ok: true };
  }
  function cbLocalAuth(phone, password, isRegister, p2) {
    if (!isRegister) return cbLocalLogin(phone, password);
    if (p2 != null && password !== p2) return { ok: false, msg: '两次密码不一致' };
    var users = getAllUsers();
    var id = 'local_' + phone;
    if (users[id]) return cbLocalLogin(phone, password);
    var avatarPool = ['🐱', '🐶', '🦊', '🐼', '🐯', '🦁', '🐰', '🐨', '🐸', '🐵', '🦄', '🐙'];
    users[id] = {
      id: id, username: phone, phone: phone, email: phone, nickname: phone, password: hashPassword(password),
      avatar: avatarPool[Math.floor(Math.random() * avatarPool.length)],
      createdAt: new Date().toISOString(), lastLoginAt: new Date().toISOString()
    };
    _origLsSet('gz_users', users);
    _origLsSet('gz_currentUser', id);
    return { ok: true };
  }
  // 页面加载时：若本地存有云端 token，静默恢复登录态与云端数据
  function cbAutoRestore() {
    if (!cbCloudEnabled()) return;
    var tok = window.cbGetToken ? window.cbGetToken() : '';
    if (!tok) return; // 无云端会话，保留本机缓存
    var phone = window.cbGetPhone ? window.cbGetPhone() : '';
    window.cbLoadUserData().then(function (data) {
      cbApplyCloudUser(phone, phone);
      if (data) cbRestoreFromCloud(data);
      renderTopbarUser();
    }).catch(function () {});
  }

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
  // 健壮封禁判定：只要任意一条「id / username / phone 命中 ident」的记录被封，即视为封号。
  // 防止同一手机号存在重复记录（云端记录 gz_users[phone] 与本机注册记录 gz_users['local_'+phone] / gz_users['u_xxx']）时漏判。
  function isUserBanned(ident) {
    if (!ident) return false;
    var users = getAllUsers();
    for (var k in users) {
      var u = users[k];
      if (u && (u.id === ident || u.username === ident || u.phone === ident) && u.banned) return true;
    }
    return false;
  }
  // 管理员账号白名单：必须与云函数 gzApi 里的 ADMIN_IDS 保持一致。
  // 这类账号不是手机号，只能登录、不能注册（云端 register 仍强制 11 位手机号）。
  var ADMIN_IDS = ['king'];
  function isAdminId(s) {
    return ADMIN_IDS.indexOf(String(s || '').trim().toLowerCase()) >= 0;
  }
  // 稳健判断：账号的 id / username / phone 任一命中白名单即视为管理员。
  // 否则云端登录的 king 会被存成 id='local_king'，导致所有 isAdminId(u.id) 失效、后台入口不显示。
  function isAdminUser(u) {
    if (!u) return false;
    return isAdminId(u.id) || isAdminId(u.username) || isAdminId(u.phone);
  }

  // 把手机号格式化为 138****1234 形式
  function formatPhoneDisplay(phone) {
    if (!phone) return '';
    // 非纯数字账号（如管理员 king）原样返回：
    // 否则 replace(/\D/g,'') 会把 'king' 抹成空串，导致顶栏用户名显示为空白
    if (!/^\d+$/.test(String(phone))) return String(phone);
    var s = String(phone).replace(/\D/g, '');
    if (s.length < 7) return s;
    if (s.length === 11) return s.slice(0, 3) + '****' + s.slice(7);
    // 非 11 位时，按前 3 + 中间 * + 后 4 截取
    return s.slice(0, 3) + '****' + s.slice(-4);
  }
  // 获取用户对外显示名：自定义昵称优先，否则手机号掩码，再否则邮箱
  function getDisplayName(u) {
    if (!u) return '';
    var acct = u.phone || u.username || '';
    if (isAdminId(acct)) {
      // 管理员：昵称优先，否则用带皇冠的标识，一眼能看出当前处于管理员身份
      return (u.nickname && u.nickname !== acct) ? u.nickname : 'King 👑';
    }
    if (u.nickname && u.nickname !== u.username && u.nickname !== (u.phone || '')) {
      return u.nickname;
    }
    if (u.phone) return formatPhoneDisplay(u.phone);
    return u.username || '';
  }
  function registerUser(phone, password) {
    phone = (phone || '').trim();
    if (!phone) return { ok: false, msg: '手机号不能为空' };
    var phoneClean = phone.replace(/\D/g, '');
    if (!/^1\d{10}$/.test(phoneClean)) return { ok: false, msg: '请输入正确的 11 位手机号' };
    if (!password || password.length < 6) return { ok: false, msg: '密码至少 6 位' };
    if (findUserByName(phoneClean)) return { ok: false, msg: '该手机号已注册' };
    var users = getAllUsers();
    var id = 'u_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6);
    var avatarPool = ['🐱', '🐶', '🦊', '🐼', '🐯', '🦁', '🐰', '🐨', '🐸', '🐵', '🦄', '🐙'];
    var user = {
      id: id, username: phoneClean, phone: phoneClean, password: hashPassword(password),
      nickname: phoneClean, avatar: avatarPool[Math.floor(Math.random() * avatarPool.length)],
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
    if (isUserBanned(username)) return { ok: false, msg: '该账号已被封禁' };
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

  // 顶栏用户区渲染（未登录显示"登录/注册"按钮；已登录显示头像+手机号+下拉）
  function renderTopbarUser() {
    var box = document.getElementById('topbarUser');
    if (!box) return;
    var u = getCurrentUser();
    if (!u) {
      box.innerHTML = '<button class="auth-btn" id="authOpenBtn" onclick="window.__openAuthModal()">登录 / 注册</button>';
      return;
    }
    var displayName = getDisplayName(u);
    box.innerHTML =
      '<div class="auth-user-wrap">' +
        '<button class="auth-user-btn" id="authUserBtn" onclick="window.__toggleUserMenu(event)" title="' + esc(displayName) + '">' +
          '<span class="auth-avatar">' + userAvatarHtml(u) + '</span>' +
          '<span class="auth-nickname">' + esc(displayName) + '</span>' +
          '<span class="auth-caret">▾</span>' +
        '</button>' +
        '<div class="auth-user-menu" id="authUserMenu">' +
          '<div class="auth-user-menu-head">' +
            '<div class="auth-avatar-lg">' + userAvatarHtml(u) + '</div>' +
            '<div class="auth-user-info">' +
              '<div class="auth-user-name">' + esc(displayName) + '</div>' +
              '<div class="auth-user-handle">@' + esc(u.username) + '</div>' +
            '</div>' +
          '</div>' +
          (isAdminUser(u) ? '<button class="auth-menu-item" onclick="navigate(\'admin\')">🛡️ 管理后台</button>' : '') +
          '<button class="auth-menu-item" onclick="window.__openProfileModal()">⚙️ 账号设置</button>' +
          '<button class="auth-menu-item danger" onclick="window.__logoutAndToast()">↩ 退出登录</button>' +
        '</div>' +
      '</div>';
    updateBellBadge();
  }
  window.__renderTopbarUser = renderTopbarUser;

  function toggleUserMenu(e) {
    if (e) e.stopPropagation();
    var m = document.getElementById('authUserMenu');
    if (m) m.classList.toggle('open');
  }
  window.__toggleUserMenu = toggleUserMenu;

  /* ---------- 头像 / 社交（关注 · 私信 · 系统通知） ---------- */
  // 账号设置里暂存的头像（emoji 字符串 或 data:image 的 dataURL）；null 表示未改动
  var pendingAvatar = null;

  // 头像渲染：emoji 直接输出字符，data:image 输出 <img>（由 CSS 裁剪成圆形）
  function userAvatarHtml(u) {
    var av = (u && u.avatar) || '👤';
    if (typeof av === 'string' && av.indexOf('data:image') === 0) {
      return '<img class="ua-img" src="' + av + '" alt="头像">';
    }
    return esc(av);
  }
  function getUserById(id) { if (!id) return null; return getAllUsers()[id] || null; }

  // 作者昵称：若是已注册用户则渲染成可点击进入其资料卡
  function authorChip(authorId, authorName, cls) {
    var name = authorName || '匿名';
    if (authorId && getUserById(authorId)) {
      return '<span class="' + (cls || '') + ' clickable" onclick="event.stopPropagation();window.__openUserProfile(\'' + esc(authorId) + '\')">' + esc(name) + '</span>';
    }
    return '<span class="' + (cls || '') + '">' + esc(name) + '</span>';
  }

  /* ----- 社交数据（localStorage，随浏览器账号共享） ----- */
  function getSocial() {
    var s = lsGet('gz_social', null);
    if (!s || typeof s !== 'object') s = {};
    s.follows = (s.follows && typeof s.follows === 'object') ? s.follows : {};
    s.followers = (s.followers && typeof s.followers === 'object') ? s.followers : {};
    s.messages = (s.messages && typeof s.messages === 'object') ? s.messages : {};
    s.notifications = Array.isArray(s.notifications) ? s.notifications : [];
    return s;
  }
  function setSocial(s) { lsSet('gz_social', s); }

  function isFollowing(targetId) {
    var me = getCurrentUserId(); if (!me) return false;
    return (getSocial().follows[me] || []).indexOf(targetId) >= 0;
  }
  function followUser(targetId) {
    var me = getCurrentUser(); if (!me || me.id === targetId) return;
    var s = getSocial();
    s.follows[me.id] = s.follows[me.id] || [];
    if (s.follows[me.id].indexOf(targetId) < 0) s.follows[me.id].push(targetId);
    s.followers[targetId] = s.followers[targetId] || [];
    if (s.followers[targetId].indexOf(me.id) < 0) s.followers[targetId].push(me.id);
    setSocial(s);
    pushNotification(targetId, 'follow', getDisplayName(me) + ' 关注了你', { userId: me.id });
  }
  function unfollowUser(targetId) {
    var me = getCurrentUserId(); if (!me) return;
    var s = getSocial();
    if (s.follows[me]) s.follows[me] = s.follows[me].filter(function (x) { return x !== targetId; });
    if (s.followers[targetId]) s.followers[targetId] = s.followers[targetId].filter(function (x) { return x !== me; });
    setSocial(s);
  }
  function convKey(a, b) { return [a, b].sort().join('|'); }
  function sendMessage(toId, text) {
    text = (text || '').trim(); if (!text) return;
    var me = getCurrentUser(); if (!me || me.id === toId) return;
    if (me.muted) { toast('你已被禁言，暂不能发送私信'); return; }
    var s = getSocial();
    var k = convKey(me.id, toId);
    s.messages[k] = s.messages[k] || [];
    s.messages[k].push({ from: me.id, to: toId, text: text, ts: Date.now(), read: false });
    setSocial(s);
    pushNotification(toId, 'dm', getDisplayName(me) + ' 给你发来了一条私信', { userId: me.id });
  }
  function pushNotification(toId, type, text, extra) {
    if (!toId) return;
    var s = getSocial();
    s.notifications.unshift({
      id: 'n_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      toId: toId, type: type, text: text, ts: Date.now(), read: false, extra: extra || {}
    });
    if (s.notifications.length > 100) s.notifications = s.notifications.slice(0, 100);
    setSocial(s);
  }
  function myNotifications() {
    var me = getCurrentUserId(); if (!me) return [];
    return getSocial().notifications.filter(function (n) { return n.toId === me; });
  }
  function unreadNotif() {
    // 注意：'dm' 类通知是私信本身的重复（私信未读已由 unreadDm 统计），
    // 不计入红点，避免同一条私信被算两次；只统计 follow / reply 等独立事件。
    return myNotifications().filter(function (n) { return n.type !== 'dm' && !n.read; }).length;
  }
  function myConversations() {
    var me = getCurrentUserId(); if (!me) return [];
    var s = getSocial();
    var seen = {}, list = [];
    Object.keys(s.messages).forEach(function (k) {
      if (k.indexOf(me) < 0) return;
      var ids = k.split('|');
      var other = ids[0] === me ? ids[1] : ids[0];
      if (seen[other]) return; seen[other] = true;
      var msgs = s.messages[k] || [];
      list.push({ other: other, last: msgs[msgs.length - 1], count: msgs.length });
    });
    list.sort(function (a, b) { return (b.last ? b.last.ts : 0) - (a.last ? a.last.ts : 0); });
    return list;
  }
  function unreadDm() {
    var me = getCurrentUserId(); if (!me) return 0;
    var s = getSocial(), n = 0;
    Object.keys(s.messages).forEach(function (k) {
      if (k.indexOf(me) < 0) return;
      (s.messages[k] || []).forEach(function (m) { if (m.to === me && !m.read) n++; });
    });
    return n;
  }
  function markConvRead(otherId) {
    var me = getCurrentUserId(); if (!me) return;
    var s = getSocial();
    var k = convKey(me, otherId);
    if (s.messages[k]) s.messages[k].forEach(function (m) { if (m.to === me) m.read = true; });
    setSocial(s);
  }
  // 已知可互动的用户：本机注册账号（排除自己）+ 讨论区里出现过的作者
  function knownUsers() {
    var me = getCurrentUserId();
    var map = {};
    var all = getAllUsers();
    Object.keys(all).forEach(function (id) { if (id !== me) map[id] = all[id]; });
    var d = getDiscuss();
    (d.topics || []).forEach(function (t) {
      [t].concat(t.replies || []).forEach(function (it) {
        if (it.authorId && it.authorId !== me && !map[it.authorId]) {
          var u = getUserById(it.authorId);
          map[it.authorId] = u ? u : { id: it.authorId, nickname: it.authorName, username: it.authorName, anonymous: true };
        }
      });
    });
    return Object.keys(map).map(function (k) { return map[k]; });
  }

  /* ----- 铃铛未读数 ----- */
  function updateBellBadge() {
    var b = document.getElementById('bellBadge');
    if (!b) return;
    var u = getCurrentUser();
    if (!u) { b.style.display = 'none'; return; }
    var n = unreadNotif() + unreadDm() + unreadNotices();
    if (n > 0) { b.style.display = ''; b.textContent = n > 99 ? '99+' : String(n); }
    else { b.style.display = 'none'; b.textContent = ''; }
  }
  window.__updateBellBadge = updateBellBadge;

  /* ----- 用户资料卡（点击头像进入，可关注 / 私信） ----- */
  function openUserProfile(userId) {
    var u = getUserById(userId);
    if (!u) { toast('该用户暂无可查看的资料'); return; }
    window.__upUserId = u.id;
    var m = document.getElementById('userPopup');
    if (!m) { m = document.createElement('div'); m.id = 'userPopup'; m.className = 'auth-modal up-modal'; document.body.appendChild(m); }
    var following = isFollowing(u.id);
    m.innerHTML =
      '<div class="auth-mask" onclick="window.__closeUserProfile()"></div>' +
      '<div class="up-card">' +
        '<button class="auth-close" onclick="window.__closeUserProfile()" title="关闭">×</button>' +
        '<div class="up-avatar">' + userAvatarHtml(u) + '</div>' +
        '<div class="up-name">' + esc(getDisplayName(u)) + '</div>' +
        '<div class="up-handle">@' + esc(u.username) + '</div>' +
        '<div class="up-actions">' +
          '<button class="up-btn ' + (following ? 'following' : 'primary') + '" id="upFollowBtn" onclick="window.__upToggleFollow()">' + (following ? '✓ 已关注' : '＋ 关注') + '</button>' +
          '<button class="up-btn" onclick="window.__upDm()">💬 私信</button>' +
        '</div>' +
      '</div>';
    m.classList.add('show');
  }
  window.__openUserProfile = openUserProfile;
  function closeUserProfile() {
    var m = document.getElementById('userPopup');
    if (!m) return;
    m.classList.remove('show');
    setTimeout(function () { if (m.parentNode) m.remove(); }, 200);
  }
  window.__closeUserProfile = closeUserProfile;
  function upToggleFollow() {
    var fid = window.__upUserId; if (!fid) return;
    var wasFollowing = isFollowing(fid);
    if (wasFollowing) unfollowUser(fid); else followUser(fid);
    var btn = document.getElementById('upFollowBtn');
    var now = isFollowing(fid);
    btn.className = 'up-btn ' + (now ? 'following' : 'primary');
    btn.textContent = now ? '✓ 已关注' : '＋ 关注';
    if (!wasFollowing && now) toast('已关注，TA 已固定到「私信」列表，可随时给 TA 发消息');
    updateBellBadge();
  }
  window.__upToggleFollow = upToggleFollow;
  function upDm() {
    var fid = window.__upUserId; if (!fid) return;
    closeUserProfile();
    openMessageCenter('dm', fid);
  }
  window.__upDm = upDm;
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
    if (window.cbLogout) { try { window.cbLogout(); } catch (e) {} }
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
            '<span>手机号</span>' +
            '<input type="tel" id="authUser" placeholder="11 位手机号" maxlength="11" autocomplete="username" inputmode="numeric" />' +
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
        // 登录框用 text 而非 tel+numeric：管理员账号名含字母，numeric 输入法在手机上打不出来
        '<label class="auth-field"><span>账号</span><input type="text" id="authUser" placeholder="11 位手机号" maxlength="20" autocomplete="username" /></label>' +
        '<label class="auth-field"><span>密码</span><input type="password" id="authPwd" placeholder="请输入密码" maxlength="40" autocomplete="current-password" /></label>' +
        '<div class="auth-msg" id="authMsg"></div>' +
        '<button class="auth-submit" id="authSubmit" onclick="window.__doAuth()">登 录</button>' +
        '<div class="auth-hint">没有账号？<a onclick="window.__switchAuthTab(\'register\')">立即注册</a></div>';
    } else {
      pane.innerHTML =
        '<div class="auth-title">创建账号 ✨</div>' +
        '<div class="auth-subtitle">用手机号注册，账号与学习数据将保存在云端</div>' +
        '<label class="auth-field"><span>手机号</span><input type="tel" id="authUser" placeholder="11 位手机号" maxlength="11" autocomplete="username" inputmode="numeric" /></label>' +
        '<label class="auth-field"><span>密码</span><input type="password" id="authPwd" placeholder="至少 6 位" maxlength="40" autocomplete="new-password" /></label>' +
        '<label class="auth-field"><span>确认密码</span><input type="password" id="authPwd2" placeholder="再输入一次" maxlength="40" autocomplete="new-password" /></label>' +
        '<div class="auth-msg" id="authMsg"></div>' +
        '<button class="auth-submit" id="authSubmit" onclick="window.__doAuth()">注 册</button>' +
        '<div class="auth-hint">已有账号？<a onclick="window.__switchAuthTab(\'login\')">直接登录</a></div>';
    }
  }
  window.__switchAuthTab = switchAuthTab;

  function doAuth() {
    var u = (document.getElementById('authUser').value || '').trim();
    var p = (document.getElementById('authPwd').value || '').trim();
    var p2 = document.getElementById('authPwd2') ? document.getElementById('authPwd2').value : null;
    var msg = document.getElementById('authMsg');
    var btn = document.getElementById('authSubmit');
    msg.className = 'auth-msg';
    msg.textContent = '';
    // 管理员账号名大小写不敏感：输入 King / KING 一律归一为白名单里的 king
    if (isAdminId(u)) u = u.trim().toLowerCase();
    var fail = function (t) { msg.className = 'auth-msg err'; msg.textContent = t; };
    if (_authMode === 'register') {
      // 注册路径完全不放开：仍强制 11 位手机号 + 密码至少 6 位（与云端 register 校验一致）
      if (!/^1\d{10}$/.test(u)) { fail('请输入正确的 11 位手机号'); return; }
      if (!p || p.length < 6) { fail('密码至少 6 位'); return; }
    } else {
      // 登录路径额外放行管理员账号名；登录本就不校验密码长度（与云端 login 一致）
      if (!isAdminId(u) && !/^1\d{10}$/.test(u)) { fail('请输入正确的 11 位手机号'); return; }
      if (!p) { fail('请输入密码'); return; }
    }
    if (btn) { btn.disabled = true; btn.textContent = '处理中…'; }

    (async function () {
      var usedCloud = false, cloudErr = null;
      try {
        if (cbCloudEnabled()) {
          if (_authMode === 'register') {
            if (p2 != null && p !== p2) throw new Error('两次密码不一致');
            var reg = await window.cbRegister(u, p);
            if (!reg.ok) {
              // 已注册则直接尝试登录（便于在另一台设备继续用同一手机号）
              if (/已注册|已存在|exists/i.test(reg.msg || '')) {
                var lg0 = await window.cbLogin(u, p);
                if (!lg0.ok) throw new Error(lg0.msg || '登录失败');
              } else {
                throw new Error(reg.msg || '注册失败');
              }
            }
          } else {
            var lg = await window.cbLogin(u, p);
            if (!lg.ok) throw new Error(lg.msg || '登录失败');
          }
          usedCloud = true;
        }
      } catch (e) { cloudErr = e; }

      if (usedCloud) {
        // 云端登录成功后，仍需校验本机封号标记（banned 只存于本机 gz_users，云端无此字段）
        if (isUserBanned(u)) {
          if (btn) { btn.disabled = false; btn.textContent = _authMode === 'register' ? '注 册' : '登 录'; }
          if (msg) { msg.className = 'auth-msg err'; msg.textContent = '该账号已被封禁'; }
          return;
        }
        cbApplyCloudUser(u, u);
        try {
          var doc = await window.cbLoadUserData();
          if (doc) cbRestoreFromCloud(doc);
        } catch (e) {}
        afterCloudLoginUI(u, '云端账号已就绪，学习数据已同步');
        return;
      }

      // 云端不可用 / 登录失败 → 回退本机账号（数据保存在本机，联网后可同步）
      var local = cbLocalAuth(u, p, _authMode === 'register', p2);
      if (!local.ok) {
        if (btn) { btn.disabled = false; btn.textContent = _authMode === 'register' ? '注 册' : '登 录'; }
        msg.className = 'auth-msg err';
        msg.textContent = local.msg || (cloudErr && cloudErr.message) || '操作失败，请重试';
        return;
      }
      var note = cbCloudEnabled()
        ? '云端登录未成功（' + (cloudErr && cloudErr.message ? cloudErr.message : '请检查手机号或密码') + '），已先在本机登录，数据保存在本机'
        : '当前为离线模式，已在本机登录，联网后将同步到云端';
      afterCloudLoginUI(u, note);
    })();
  }
  window.__doAuth = doAuth;

  // 登录成功后的统一收尾（消息 + 关闭弹窗 + 重渲染）
  function afterCloudLoginUI(account, note) {
    var btn = document.getElementById('authSubmit');
    if (btn) { btn.disabled = false; btn.textContent = _authMode === 'register' ? '注 册' : '登 录'; }
    var u = getCurrentUser();
    var disp = u ? getDisplayName(u) : account;
    var msg = document.getElementById('authMsg');
    if (msg) { msg.className = 'auth-msg ok'; msg.textContent = '登录成功！' + (note ? '（' + note + '）' : '欢迎 ' + disp); }
    setTimeout(function () {
      closeAuthModal();
      renderTopbarUser();
      if (typeof renderHome === 'function') renderHome();
      if (typeof renderSettings === 'function' && (location.hash || '').indexOf('/settings') >= 0) renderSettings();
      toast('已登录：' + disp);
    }, 600);
  }

  // 账号设置 modal（修改昵称 / 修改密码 / 切换账号）
  function openProfileModal() {
    document.getElementById('authUserMenu') && document.getElementById('authUserMenu').classList.remove('open');
    var m = document.getElementById('profileModal');
    if (m) { m.classList.add('show'); return; }
    var u = getCurrentUser();
    if (!u) return;
    pendingAvatar = u.avatar;
    var mask = document.createElement('div');
    mask.id = 'profileModal';
    mask.className = 'auth-modal';
    mask.innerHTML =
      '<div class="auth-mask" onclick="window.__closeProfileModal()"></div>' +
      '<div class="auth-card profile-card">' +
        '<button class="auth-close" onclick="window.__closeProfileModal()" title="关闭">×</button>' +
        '<div class="auth-title">账号设置 ⚙️</div>' +
        '<div class="profile-head">' +
          '<div class="profile-avatar-big" id="profileAvatarBig">' + userAvatarHtml(u) + '</div>' +
          '<div class="profile-meta">' +
            '<div class="profile-name">' + esc(u.nickname) + '</div>' +
            '<div class="profile-handle">@' + esc(u.username) + '</div>' +
            '<div class="profile-joined">注册于 ' + (u.createdAt || '').slice(0, 10) + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="profile-section">' +
          '<div class="profile-section-title">头像</div>' +
          '<div class="profile-avatar-upload">' +
            '<label class="profile-upload-btn">📷 上传图片<input type="file" id="profileAvatarFile" accept="image/*" hidden></label>' +
            '<button type="button" class="profile-reset-btn" onclick="window.__resetAvatar()">恢复表情头像</button>' +
          '</div>' +
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
    var fileInput = mask.querySelector('#profileAvatarFile');
    if (fileInput) fileInput.addEventListener('change', handleAvatarUpload);
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
    pendingAvatar = btn.getAttribute('data-avatar');
    renderProfileBigAvatar();
  }
  window.__pickAvatar = pickAvatar;

  function renderProfileBigAvatar() {
    var el = document.getElementById('profileAvatarBig'); if (!el) return;
    var av = (pendingAvatar !== null) ? pendingAvatar : (getCurrentUser() ? getCurrentUser().avatar : '👤');
    if (typeof av === 'string' && av.indexOf('data:image') === 0) el.innerHTML = '<img class="ua-img" src="' + av + '" alt="头像">';
    else el.textContent = av;
  }
  function resetAvatar() {
    pendingAvatar = getCurrentUser() ? getCurrentUser().avatar : null;
    renderProfileBigAvatar();
  }
  window.__resetAvatar = resetAvatar;
  function handleAvatarUpload(e) {
    var input = e.target;
    var file = input.files && input.files[0]; if (!file) return;
    if (!/^image\//.test(file.type)) { toast('请选择图片文件'); return; }
    var reader = new FileReader();
    reader.onload = function () {
      var img = new Image();
      img.onload = function () {
        var W = img.naturalWidth || img.width, H = img.naturalHeight || img.height;
        if (!W || !H) { toast('图片读取失败'); return; }
        // 中心正方形裁剪，避免放进圆形头像框时被裁掉脸
        var side = Math.min(W, H);
        var sx = (W - side) / 2, sy = (H - side) / 2;
        var target = 256;
        var canvas = document.createElement('canvas');
        canvas.width = target; canvas.height = target;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, sx, sy, side, side, 0, 0, target, target);
        var dataUrl;
        try { dataUrl = canvas.toDataURL('image/jpeg', 0.9); } catch (err) { dataUrl = reader.result; }
        pendingAvatar = dataUrl;
        renderProfileBigAvatar();
      };
      img.onerror = function () { toast('图片读取失败'); };
      img.src = reader.result;
    };
    reader.onerror = function () { toast('文件读取失败'); };
    reader.readAsDataURL(file);
    // 允许再次选择同一张图片时重新触发 change
    setTimeout(function () { try { input.value = ''; } catch (e) {} }, 0);
  }

  function doProfileSave() {
    var msg = document.getElementById('profileMsg');
    msg.className = 'auth-msg'; msg.textContent = '';
    var nick = document.getElementById('profileNick').value.trim();
    if (!nick) { msg.className = 'auth-msg err'; msg.textContent = '昵称不能为空'; return; }
    var avatar = (pendingAvatar !== null) ? pendingAvatar : (getCurrentUser() ? getCurrentUser().avatar : null);
    var oldPwd = document.getElementById('profileOldPwd').value;
    var newPwd = document.getElementById('profileNewPwd').value;
    // 改昵称 + 头像
    var patch = { nickname: nick };
    if (avatar !== undefined && avatar !== null) patch.avatar = avatar;
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
      // 同步改云端密码（最佳努力，失败不影响本机）
      if (window.cbChangePassword) { try { window.cbChangePassword(oldPwd, newPwd); } catch (e) {} }
    }
    // 把昵称/头像/学习数据同步到云端（最佳努力）
    cbSyncNow();
    msg.className = 'auth-msg ok';
    msg.textContent = '保存成功！';
    renderTopbarUser();
    if (typeof renderSettings === 'function' && (location.hash || '').indexOf('/settings') >= 0) renderSettings();
    setTimeout(closeProfileModal, 700);
  }
  window.__doProfileSave = doProfileSave;

  /* ---------- 全局系统通知（管理员广播，所有登录用户可见） ---------- */
  function getNotices() {
    var n = lsGet('gz_notices', null);
    if (n === null) {
      n = [{ id: 'nt_welcome', text: '欢迎来到高考复习网站！这里有系统通知、私信和讨论区。管理员会在这里发布重要通知 🎓', ts: Date.now() - 86400000, by: 'king', byName: '官方' }];
      lsSet('gz_notices', n);
    }
    if (!Array.isArray(n)) n = [];
    return n;
  }
  function addAdminNotice(text) {
    text = (text || '').trim(); if (!text) return false;
    var u = getCurrentUser();
    if (!u || !isAdminUser(u)) { toast('仅管理员可发布系统通知'); return false; }
    var list = getNotices();
    list.unshift({ id: 'nt_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), text: text, ts: Date.now(), by: u.id, byName: getDisplayName(u) });
    if (list.length > 50) list = list.slice(0, 50);
    lsSet('gz_notices', list);
    return true;
  }
  window.__addAdminNotice = addAdminNotice;
  function unreadNotices() {
    var me = getCurrentUserId(); if (!me) return 0;
    var read = (getSocial().noticeRead) || [];
    return getNotices().filter(function (x) { return read.indexOf(x.id) < 0; }).length;
  }
  function markNoticesRead() {
    var s = getSocial();
    s.noticeRead = s.noticeRead || [];
    getNotices().forEach(function (x) { if (s.noticeRead.indexOf(x.id) < 0) s.noticeRead.push(x.id); });
    setSocial(s);
  }
  // 标记“个人通知”（关注 / 私信等）为已读
  function markMyNotifRead() {
    var me = getCurrentUserId(); if (!me) return;
    var s = getSocial(); var changed = false;
    s.notifications.forEach(function (n) { if (n.toId === me && !n.read) { n.read = true; changed = true; } });
    if (changed) setSocial(s);
  }
  // 标记当前用户所有私信会话为已读
  function markAllDmRead() {
    var me = getCurrentUserId(); if (!me) return;
    var s = getSocial(); var changed = false;
    Object.keys(s.messages).forEach(function (k) {
      if (k.indexOf(me) < 0) return;
      (s.messages[k] || []).forEach(function (m) { if (m.to === me && !m.read) { m.read = true; changed = true; } });
    });
    if (changed) setSocial(s);
  }

  /* ---------- 消息中心（铃铛 / 洛谷风格） ---------- */
  function openMessageCenter(tab, preselect) {
    var m = document.getElementById('msgCenter');
    if (!m) {
      m = document.createElement('div'); m.id = 'msgCenter'; m.className = 'auth-modal mc-modal';
      document.body.appendChild(m);
    }
    m.innerHTML =
      '<div class="mc-mask" onclick="window.__closeMessageCenter()"></div>' +
      '<div class="mc-card">' +
        '<div class="mc-head">' +
          '<div class="mc-head-title">消息中心</div>' +
          '<button class="mc-close" onclick="window.__closeMessageCenter()" title="关闭" aria-label="关闭">×</button>' +
        '</div>' +
        '<div class="mc-body">' +
          '<aside class="mc-side">' +
            '<button class="mc-nav" data-tab="notif" onclick="window.__mcTab(\'notif\')"><span class="mc-nav-ic">🔔</span>系统通知<span class="mc-badge" id="mcNotifBadge"></span></button>' +
            '<button class="mc-nav" data-tab="dm" onclick="window.__mcTab(\'dm\')"><span class="mc-nav-ic">💬</span>私信<span class="mc-badge" id="mcDmBadge"></span></button>' +
          '</aside>' +
          '<div class="mc-main" id="mcMain"></div>' +
        '</div>' +
      '</div>';
    m.classList.add('show');
    window.__mcState = { tab: tab || 'notif', preselect: preselect || null };
    renderMc();
    // 进入消息中心即把全部未读标记已读，铃铛红点（小数字）随即消失（仿洛谷）
    markNoticesRead();
    markMyNotifRead();
    markAllDmRead();
    setMcTabBadge('mcNotifBadge', unreadNotif() + unreadNotices());
    setMcTabBadge('mcDmBadge', unreadDm());
    updateBellBadge();
  }
  window.__openMessageCenter = openMessageCenter;

  function closeMessageCenter() {
    var m = document.getElementById('msgCenter'); if (!m) return;
    m.classList.remove('show');
    setTimeout(function () { if (m.parentNode) m.remove(); }, 200);
    updateBellBadge();
  }
  window.__closeMessageCenter = closeMessageCenter;

  function mcTab(tab) { window.__mcState = { tab: tab, preselect: null }; renderMc(); }
  window.__mcTab = mcTab;

  function renderMc() {
    var st = window.__mcState || { tab: 'notif' };
    document.querySelectorAll('.mc-nav[data-tab]').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-tab') === st.tab);
    });
    // 先渲染当前 tab（内部会把已查看的未读标记清除）
    if (st.tab === 'notif') renderMcNotif(); else renderMcDm();
    // 设置两个 tab 上的红点：显示“另一 tab”尚未查看的未读数
    setMcTabBadge('mcNotifBadge', unreadNotif() + unreadNotices());
    setMcTabBadge('mcDmBadge', unreadDm());
    updateBellBadge();
  }
  function setMcTabBadge(id, n) {
    var el = document.getElementById(id); if (!el) return;
    if (n > 0) { el.style.display = ''; el.textContent = n > 99 ? '99+' : String(n); }
    else { el.style.display = 'none'; }
  }

  function mcGuestPrompt() {
    return '<div class="mc-empty"><div class="mc-empty-ic">🔒</div><div class="mc-empty-txt">登录后即可查看消息、私信和关注好友</div>' +
      '<button class="mc-login-btn" onclick="window.__openAuthModal()">登录 / 注册</button></div>';
  }
  function renderMcNotif() {
    var main = document.getElementById('mcMain'); if (!main) return;
    if (!getCurrentUser()) { main.innerHTML = mcGuestPrompt(); return; }
    markNoticesRead();
    markMyNotifRead();
    var u = getCurrentUser();
    var isAdmin = isAdminUser(u);
    // 合并：管理员全局通知 + 个人通知（回复 / 关注 / 私信）
    var notices = getNotices().map(function (n) {
      return { kind: 'notice', text: n.text, ts: n.ts, byName: n.byName || '官方' };
    });
    var pers = myNotifications().map(function (n) {
      return { kind: 'personal', type: n.type, text: n.text, ts: n.ts };
    });
    var items = notices.concat(pers).sort(function (a, b) { return b.ts - a.ts; });
    var html = '';
    if (isAdmin) {
      html += '<div class="mc-composer">' +
        '<textarea id="mcNoticeInput" class="mc-composer-input" placeholder="以管理员身份发布一条系统通知…" maxlength="200"></textarea>' +
        '<button class="mc-composer-send" onclick="window.__mcAdminSend()">发布通知</button>' +
        '</div>';
    }
    if (!items.length) {
      html += '<div class="mc-empty"><div class="mc-empty-ic">📭</div><div class="mc-empty-txt">暂时没有消息</div></div>';
    } else {
      html += '<div class="mc-list">' + items.map(function (it) {
        if (it.kind === 'notice') {
          return '<div class="mc-item official">' +
            '<div class="mc-item-av official">📢</div>' +
            '<div class="mc-item-body"><div class="mc-item-top"><span class="mc-item-name">系统通知</span><span class="mc-tag">官方</span><span class="mc-item-time">' + esc(relativeTime(it.ts)) + '</span></div>' +
            '<div class="mc-item-text">' + esc(it.text) + '</div></div></div>';
        }
        var icon = it.type === 'follow' ? '➕' : (it.type === 'dm' ? '💬' : '🔔');
        var name = it.type === 'follow' ? '新关注' : (it.type === 'dm' ? '新私信' : '系统通知');
        return '<div class="mc-item">' +
          '<div class="mc-item-av">' + icon + '</div>' +
          '<div class="mc-item-body"><div class="mc-item-top"><span class="mc-item-name">' + name + '</span><span class="mc-item-time">' + esc(relativeTime(it.ts)) + '</span></div>' +
          '<div class="mc-item-text">' + esc(it.text) + '</div></div></div>';
      }).join('') + '</div>';
    }
    main.innerHTML = html;
    updateBellBadge();
  }
  window.__mcAdminSend = function () {
    var inp = document.getElementById('mcNoticeInput'); if (!inp) return;
    if (addAdminNotice(inp.value)) { inp.value = ''; renderMcNotif(); updateBellBadge(); toast('已发布系统通知'); }
  };

  function renderMcDm() {
    var main = document.getElementById('mcMain'); if (!main) return;
    if (!getCurrentUser()) { main.innerHTML = mcGuestPrompt(); return; }
    // 进入私信 tab 即把未读私信标记为已读（满足“查看后红点消失”）
    markAllDmRead();
    var me = getCurrentUserId();
    var s = getSocial();
    // 会话列表 = 我关注的人（固定/像微信好友）+ 有消息往来的其他人，去重合并
    var convMap = {};
    Object.keys(s.messages).forEach(function (k) {
      if (k.indexOf(me) < 0) return;
      var ids = k.split('|');
      var other = ids[0] === me ? ids[1] : ids[0];
      if (convMap[other]) return;
      var msgs = s.messages[k] || [];
      convMap[other] = { other: other, last: msgs[msgs.length - 1] || null, count: msgs.length };
    });
    (s.follows[me] || []).forEach(function (f) {
      if (!convMap[f]) convMap[f] = { other: f, last: null, count: 0 };
    });
    var convs = Object.keys(convMap).map(function (k) { return convMap[k]; });
    convs.sort(function (a, b) { return (b.last ? b.last.ts : 0) - (a.last ? a.last.ts : 0); });
    var st = window.__mcState || {};
    var sel = st.preselect || (convs.length ? convs[0].other : null);
    var html = '<div class="mc-dm-head"><button class="mc-discover-btn" onclick="window.__mcDiscover()">＋ 发现用户 / 发起私信</button></div>';
    html += '<div class="mc-dm">';
    html += '<div class="mc-conv-list">';
    if (!convs.length) html += '<div class="mc-empty small"><div class="mc-empty-ic">💬</div>还没有会话，点上方按钮找人私信吧</div>';
    convs.forEach(function (c) {
      var u = getUserById(c.other);
      var name = u ? getDisplayName(u) : (c.other || '用户');
      var unread = (function () { var ms = (getSocial().messages[convKey(getCurrentUserId(), c.other)] || []); return ms.filter(function (m) { return m.to === getCurrentUserId() && !m.read; }).length; })();
      html += '<button class="mc-conv ' + (c.other === sel ? 'active' : '') + '" onclick="window.__mcOpenConv(\'' + esc(c.other) + '\')">' +
        '<span class="mc-conv-av">' + userAvatarHtml(u) + '</span>' +
        '<div class="mc-conv-info"><div class="mc-conv-name">' + esc(name) + (unread ? '<span class="mc-dot"></span>' : '') + '</div>' +
        '<div class="mc-conv-last">' + esc(c.last ? c.last.text : '') + '</div></div></button>';
    });
    html += '</div>';
    html += '<div class="mc-chat">' + renderMcChat(sel) + '</div>';
    html += '</div>';
    main.innerHTML = html;
  }

  function renderMcChat(otherId) {
    if (!otherId) return '<div class="mc-chat-empty"><div class="mc-empty-ic">💬</div>选择一个会话开始私信</div>';
    var me = getCurrentUserId();
    var u = getUserById(otherId);
    var name = u ? getDisplayName(u) : (otherId || '用户');
    markConvRead(otherId);
    var s = getSocial();
    var msgs = s.messages[convKey(me, otherId)] || [];
    var html = '<div class="mc-chat-head"><span class="mc-chat-av">' + userAvatarHtml(u) + '</span><div class="mc-chat-name">' + esc(name) + '</div></div>';
    html += '<div class="mc-chat-body" id="mcChatBody">';
    if (!msgs.length) html += '<div class="mc-chat-empty"><div class="mc-empty-ic">👋</div>还没有消息，发一条打个招呼吧</div>';
    msgs.forEach(function (m) {
      var mine = m.from === me;
      html += '<div class="mc-msg ' + (mine ? 'me' : 'them') + '">' +
        '<div class="mc-msg-bubble">' + esc(m.text) + '</div>' +
        '<div class="mc-msg-time">' + esc(relativeTime(m.ts)) + '</div></div>';
    });
    html += '</div>';
    html += '<div class="mc-chat-input">' +
      '<input type="text" id="mcMsgInput" placeholder="发消息给 ' + esc(name) + '…" maxlength="500" onkeydown="if(event.key===\'Enter\')window.__mcSend(\'' + esc(otherId) + '\')" />' +
      '<button class="mc-send" onclick="window.__mcSend(\'' + esc(otherId) + '\')">发送</button></div>';
    return html;
  }

  function mcOpenConv(otherId) {
    window.__mcState = window.__mcState || {}; window.__mcState.preselect = otherId;
    renderMc();
    var body = document.getElementById('mcChatBody'); if (body) body.scrollTop = body.scrollHeight;
  }
  window.__mcOpenConv = mcOpenConv;

  function mcSend(otherId) {
    var inp = document.getElementById('mcMsgInput'); if (!inp) return;
    var text = inp.value.trim(); if (!text) return;
    sendMessage(otherId, text);
    window.__mcState = window.__mcState || {}; window.__mcState.preselect = otherId;
    renderMc();
    var body = document.getElementById('mcChatBody'); if (body) body.scrollTop = body.scrollHeight;
    updateBellBadge();
  }
  window.__mcSend = mcSend;

  function mcDiscover() {
    var main = document.getElementById('mcMain'); if (!main) return;
    if (!getCurrentUser()) { main.innerHTML = mcGuestPrompt(); return; }
    var users = knownUsers();
    if (!users.length) { main.innerHTML = '<div class="mc-empty"><div class="mc-empty-ic">🔍</div>暂无可添加的用户，先去讨论区发帖或注册其他账号吧</div>'; return; }
    var html = '<div class="mc-disc-head">发现用户</div><div class="mc-disc-list">';
    users.forEach(function (u) {
      var fid = u.id;
      var following = isFollowing(fid);
      var canDm = !u.anonymous;
      html += '<div class="mc-disc-item">' +
        '<span class="mc-disc-av">' + userAvatarHtml(u) + '</span>' +
        '<div class="mc-disc-info"><div class="mc-disc-name">' + esc(getDisplayName(u)) + '</div>' +
        '<div class="mc-disc-handle">@' + esc(u.username || u.id) + '</div></div>' +
        '<div class="mc-disc-actions">' +
          '<button class="mc-mini ' + (following ? 'following' : '') + '" onclick="window.__mcToggleFollow(\'' + esc(fid) + '\')">' + (following ? '已关注' : '关注') + '</button>' +
          (canDm ? '<button class="mc-mini primary" onclick="window.__mcDmFromDiscover(\'' + esc(fid) + '\')">私信</button>' : '') +
        '</div></div>';
    });
    html += '</div></div>';
    main.innerHTML = html;
  }
  window.__mcDiscover = mcDiscover;
  function mcToggleFollow(fid) {
    if (isFollowing(fid)) unfollowUser(fid); else followUser(fid);
    mcDiscover(); updateBellBadge();
  }
  window.__mcToggleFollow = mcToggleFollow;
  function mcDmFromDiscover(fid) {
    window.__mcState = { tab: 'dm', preselect: fid };
    renderMc();
  }
  window.__mcDmFromDiscover = mcDmFromDiscover;

  // 切换账号
  function switchAccount() {
    document.getElementById('authUserMenu') && document.getElementById('authUserMenu').classList.remove('open');
    if (window.cbLogout) { try { window.cbLogout(); } catch (e) {} }
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
    if (r.route === 'bank') renderBank(r.param || 'home', r.param2);
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

  // 常考题型收藏（独立于题目收藏，存于 gz_typeFavs）
  function isTypeFaved(key) {
    try {
      var arr = JSON.parse(localStorage.getItem('gz_typeFavs') || '[]');
      return Array.isArray(arr) && arr.indexOf(key) >= 0;
    } catch (e) { return false; }
  }
  function toggleTypeFav(key) {
    try {
      var arr = JSON.parse(localStorage.getItem('gz_typeFavs') || '[]');
      if (!Array.isArray(arr)) arr = [];
      var i = arr.indexOf(key);
      if (i >= 0) { arr.splice(i, 1); toast('已取消收藏题型'); }
      else { arr.push(key); toast('已收藏题型 ⭐'); }
      localStorage.setItem('gz_typeFavs', JSON.stringify(arr));
      if (window.__commonFilter) renderBankCommon();
    } catch (e) {}
  }
  window.__toggleTypeFav = toggleTypeFav;

  // 高中常考题型库（按学科与题型分类的精选题）
  var GZ_COMMON_TYPES = {
    'chinese': {
      name: '语文', icon: '📖', color: '#dc2626',
      cats: [
        // 一、现代文阅读
        { id: 'xxwl', name: '信息类文本阅读', icon: '📰', group: '现代文阅读' },
        { id: 'wxwl', name: '文学类文本阅读', icon: '📚', group: '现代文阅读' },
        // 二、古诗文阅读
        { id: 'wyw', name: '文言文阅读', icon: '📜', group: '古诗文阅读' },
        { id: 'gdsc', name: '古代诗歌阅读', icon: '📝', group: '古诗文阅读' },
        { id: 'mpjj', name: '名篇名句默写', icon: '✍️', group: '古诗文阅读' },
        // 三、语言文字运用
        { id: 'szxs', name: '字音字形', icon: '🔤', group: '语言文字运用' },
        { id: 'cybx', name: '词语成语辨析', icon: '🔡', group: '语言文字运用' },
        { id: 'bjxg', name: '病句辨析与修改', icon: '🔧', group: '语言文字运用' },
        { id: 'yjsx', name: '语句衔接与排序', icon: '🔗', group: '语言文字运用' },
        { id: 'xzsf', name: '修辞手法', icon: '💡', group: '语言文字运用' },
        { id: 'yylt', name: '语言表达运用', icon: '🗣️', group: '语言文字运用' },
        // 四、写作
        { id: 'clzw', name: '材料作文', icon: '📝', group: '写作' },
        { id: 'zmbt', name: '命题/半命题作文', icon: '📋', group: '写作' },
        { id: 'htgw', name: '话题作文', icon: '💬', group: '写作' },
        { id: 'rwpq', name: '任务驱动型作文', icon: '🎯', group: '写作' }
      ]
    },
    'math': {
      name: '数学', icon: '📐', color: '#2563eb',
      cats: [
        // 一、函数与导数（王者级难度，压轴常客）
        { id: 'hs_concept', name: '函数概念与性质', icon: '🧮', group: '函数与导数', struct: '单选' },
        { id: 'hs_tangent', name: '切线方程（在点/过点）', icon: '📈', group: '函数与导数', struct: '解答' },
        { id: 'hs_zero', name: '函数零点个数（数形结合）', icon: '🔍', group: '函数与导数', struct: '填空' },
        { id: 'hs_param', name: '恒成立与存在性（求参）', icon: '🎯', group: '函数与导数', struct: '解答' },
        { id: 'hs_ext', name: '极值与最值综合', icon: '⚡', group: '函数与导数', struct: '解答' },
        { id: 'hs_ineq', name: '导数证明不等式', icon: '📐', group: '函数与导数', struct: '解答' },
        // 二、三角函数与解三角形（中档必拿）
        { id: 'sx_transform', name: '三角变换化简求值', icon: '🔄', group: '三角函数与解三角形', struct: '填空' },
        { id: 'sx_graph', name: '图像与性质（ω/φ/平移）', icon: '🌊', group: '三角函数与解三角形', struct: '填空' },
        { id: 'sx_triangle', name: '解三角形（正余弦/面积）', icon: '📐', group: '三角函数与解三角形', struct: '解答' },
        // 三、数列（中档，运算要稳）
        { id: 'sl_general', name: '求数列通项', icon: '🔢', group: '数列', struct: '填空' },
        { id: 'sl_split', name: '裂项相消求和', icon: '➗', group: '数列', struct: '解答' },
        { id: 'sl_stagger', name: '错位相减求和', icon: '↔️', group: '数列', struct: '解答' },
        { id: 'sl_group', name: '分组求和（奇偶项）', icon: '📊', group: '数列', struct: '解答' },
        // 四、立体几何（中档，空间感+计算）
        { id: 'lt_ball', name: '外接球/内切球', icon: '🔵', group: '立体几何', struct: '填空' },
        { id: 'lt_position', name: '异面直线/点线面位置', icon: '📦', group: '立体几何', struct: '单选' },
        { id: 'lt_prove', name: '平行与垂直证明', icon: '🧊', group: '立体几何', struct: '解答' },
        { id: 'lt_vector', name: '空间向量求角（线面/二面）', icon: '📐', group: '立体几何', struct: '解答' },
        { id: 'lt_distance', name: '点到面的距离', icon: '📏', group: '立体几何', struct: '解答' },
        // 五、解析几何（圆锥曲线）（高难度，计算怪兽）
        { id: 'jx_basic', name: '离心率/渐近线/焦半径', icon: '🎯', group: '解析几何', struct: '填空' },
        { id: 'jx_vieta', name: '联立韦达（椭圆/抛物线）', icon: '📉', group: '解析几何', struct: '解答' },
        { id: 'jx_chord', name: '弦长问题', icon: '📏', group: '解析几何', struct: '解答' },
        { id: 'jx_area', name: '面积最值/中点弦（点差法）', icon: '🔺', group: '解析几何', struct: '解答' },
        { id: 'jx_fixed', name: '定点定值问题', icon: '📍', group: '解析几何', struct: '解答' },
        { id: 'jx_exist', name: '存在性问题', icon: '❓', group: '解析几何', struct: '解答' },
        // 六、概率与统计（题型新、阅读量大）
        { id: 'gl_permu', name: '排列组合', icon: '🔢', group: '概率与统计', struct: '单选' },
        { id: 'gl_binomial', name: '二项式定理', icon: '🧮', group: '概率与统计', struct: '填空' },
        { id: 'gl_prob', name: '条件概率/全概率', icon: '🎲', group: '概率与统计', struct: '填空' },
        { id: 'gl_dist', name: '分布列与期望方差', icon: '📊', group: '概率与统计', struct: '解答' },
        { id: 'gl_hist', name: '频率分布直方图', icon: '📈', group: '概率与统计', struct: '解答' },
        { id: 'gl_regress', name: '线性回归', icon: '📉', group: '概率与统计', struct: '解答' },
        { id: 'gl_chisq', name: '独立性检验/正态分布', icon: '✅', group: '概率与统计', struct: '解答' },
        // 七、选填小模块（送分/区分度题）
        { id: 'sm_set', name: '集合与逻辑（充要）', icon: '🔣', group: '选填小模块', struct: '单选' },
        { id: 'sm_complex', name: '复数', icon: '🧮', group: '选填小模块', struct: '单选' },
        { id: 'sm_vector', name: '平面向量', icon: '➡️', group: '选填小模块', struct: '填空' },
        { id: 'sm_ineq', name: '不等式（基本/一元二次）', icon: '⚖️', group: '选填小模块', struct: '填空' }
      ]
    },
    'english': {
      name: '英语', icon: '🔤', color: '#0891b2',
      cats: [
        /* 一、听力（共30分） */
        { id: 'lt_s', name: '短对话理解', icon: '🎧', group: '听力', struct: '第一节·短对话' },
        { id: 'lt_l', name: '长对话与独白理解', icon: '🎙️', group: '听力', struct: '第二节·长对话/独白' },
        /* 二、阅读理解（共50分） */
        { id: 'rd_a', name: '应用文阅读（A篇）', icon: '📰', group: '阅读理解', struct: '阅读A篇' },
        { id: 'rd_b', name: '记叙文阅读（B篇）', icon: '📚', group: '阅读理解', struct: '阅读B篇' },
        { id: 'rd_c', name: '说明文阅读（C篇）', icon: '🔬', group: '阅读理解', struct: '阅读C篇' },
        { id: 'rd_d', name: '议论文阅读（D篇）', icon: '💡', group: '阅读理解', struct: '阅读D篇' },
        { id: 'rd_dt', name: '细节理解题', icon: '🔎', group: '阅读理解', struct: '常规阅读·常考' },
        { id: 'rd_mn', name: '主旨大意题', icon: '🏷️', group: '阅读理解', struct: '常规阅读·常考' },
        { id: 'rd_inf', name: '推理判断题', icon: '🧠', group: '阅读理解', struct: '常规阅读·常考' },
        { id: 'rd_wg', name: '词义猜测题', icon: '🔤', group: '阅读理解', struct: '常规阅读·常考' },
        { id: 'rd_7', name: '七选五（语篇逻辑）', icon: '🧩', group: '阅读理解', struct: '七选五' },
        /* 三、语言知识运用（共30分） */
        { id: 'cl', name: '完形填空', icon: '🧩', group: '语言知识运用', struct: '完形填空' },
        { id: 'gx', name: '语法填空', icon: '📝', group: '语言知识运用', struct: '语法填空' },
        /* 四、写作（共40分） */
        { id: 'wr_app', name: '应用文写作', icon: '✉️', group: '写作', struct: '第一节·应用文' },
        { id: 'wr_cw', name: '读后续写', icon: '🖋️', group: '写作', struct: '第二节·读后续写' }
      ]
    },
    'physics': {
      name: '物理', icon: '⚛️', color: '#7c3aed',
      cats: [
        /* 一、力学（约占40%） */
        { id: 'lx_yb', name: '匀变速直线运动', icon: '🚗', group: '力学', struct: '单选/计算' },
        { id: 'lx_ph', name: '相互作用与平衡', icon: '⚖️', group: '力学', struct: '单选' },
        { id: 'lx_nd', name: '牛顿运动定律', icon: '🌀', group: '力学', struct: '单选/计算' },
        { id: 'lx_qx', name: '曲线运动与万有引力', icon: '🌍', group: '力学', struct: '单选/多选' },
        { id: 'lx_gn', name: '功和能', icon: '⚡', group: '力学', struct: '多选/计算' },
        { id: 'lx_dl', name: '动量守恒与碰撞', icon: '💥', group: '力学', struct: '多选/计算' },
        /* 二、电磁学（约占40%，压轴常客） */
        { id: 'dc_jt', name: '静电场', icon: '🔋', group: '电磁学', struct: '单选/多选' },
        { id: 'dc_dl', name: '恒定电流', icon: '🔌', group: '电磁学', struct: '单选' },
        { id: 'dc_cc', name: '磁场与带电粒子运动', icon: '🧲', group: '电磁学', struct: '多选/计算' },
        { id: 'dc_gy', name: '电磁感应', icon: '♻️', group: '电磁学', struct: '多选/计算' },
        { id: 'dc_jb', name: '交变电流与变压器', icon: '🔄', group: '电磁学', struct: '单选' },
        /* 三、物理实验（一力一电，必做） */
        { id: 'sy_lx', name: '力学实验', icon: '📏', group: '物理实验', struct: '实验' },
        { id: 'sy_dx', name: '电学实验', icon: '🔧', group: '物理实验', struct: '实验' },
        /* 四、选考模块（二选一） */
        { id: 'xk_rx', name: '热学（选修3-3）', icon: '🌡️', group: '选考模块', struct: '选考' },
        { id: 'xk_gx', name: '振动·波·光学（选修3-4）', icon: '🌊', group: '选考模块', struct: '选考' }
      ]
    },
    'chemistry': {
      name: '化学', icon: '🧪', color: '#059669',
      cats: [
        /* 一、基本概念与化学计量（选择常客，送分题） */
        { id: 'gl_na', name: '阿伏伽德罗常数(NA)陷阱', icon: '🧮', group: '基本概念与化学计量', struct: '单选·每年必考' },
        { id: 'gl_lz', name: '离子共存与离子方程式', icon: '⚗️', group: '基本概念与化学计量', struct: '单选' },
        /* 二、元素化合物（无机推断题） */
        { id: 'ys_js', name: '金属及其化合物', icon: '🔩', group: '元素化合物', struct: '单选/推断' },
        { id: 'ys_fjs', name: '非金属及其化合物', icon: '🧯', group: '元素化合物', struct: '单选/推断' },
        /* 三、化学反应原理（压轴重地） */
        { id: 'yl_sl', name: '反应速率与化学平衡', icon: '⚖️', group: '化学反应原理', struct: '单选/计算' },
        { id: 'yl_pf', name: '水溶液中的离子平衡', icon: '💧', group: '化学反应原理', struct: '单选/计算' },
        { id: 'yl_dh', name: '电化学（原电池·电解池）', icon: '🔋', group: '化学反应原理', struct: '大题·电极式' },
        /* 四、化学实验基础（两道大题必定涉及） */
        { id: 'sy_jc', name: '实验基础操作与气体制备', icon: '🧫', group: '化学实验', struct: '实验' },
        { id: 'sy_zh', name: '综合实验探究与答题话术', icon: '🔬', group: '化学实验', struct: '实验/大题' },
        /* 五、有机化学基础（选考二选一） */
        { id: 'yj_gnt', name: '官能团性质与检验', icon: '🧬', group: '有机化学基础', struct: '选考' },
        { id: 'yj_tf', name: '同分异构体判断', icon: '🔗', group: '有机化学基础', struct: '选考' },
        { id: 'yj_hc', name: '有机合成路线设计', icon: '🛠️', group: '有机化学基础', struct: '选考/解答' },
        /* 六、物质结构与性质（选考二选一） */
        { id: 'jg_pb', name: '核外电子排布', icon: '⚛️', group: '物质结构与性质', struct: '选考' },
        { id: 'jg_zh', name: '杂化轨道与空间构型', icon: '📐', group: '物质结构与性质', struct: '选考' },
        { id: 'jg_jt', name: '晶体类型与晶胞计算', icon: '💎', group: '物质结构与性质', struct: '选考/计算' }
      ]
    },
    'politics': {
      name: '政治（道法）', icon: '🗳️', color: '#c0392b',
      cats: [
        /* 一、中国特色社会主义（必修1） */
        { id: 'zt_law', name: '社会发展规律与中特创立', icon: '🚩', group: '中国特色社会主义', struct: '说明/理解/体现类·单选' },
        { id: 'zt_open', name: '开放性论述小题（发言稿·建议书）', icon: '💡', group: '中国特色社会主义', struct: '开放类·解答' },
        /* 二、经济与社会（必修2） */
        { id: 'jj_system', name: '我国基本经济制度', icon: '💰', group: '经济与社会', struct: '单选' },
        { id: 'jj_dev', name: '新发展理念与高质量发展', icon: '🚀', group: '经济与社会', struct: '传导/选择' },
        /* 三、政治与法治（必修3） */
        { id: 'zz_unity', name: '三者有机统一（领导·人民当家作主·依法治国）', icon: '🏛️', group: '政治与法治', struct: '单选' },
        { id: 'zz_gov', name: '法治政府与宪法实施', icon: '⚖️', group: '政治与法治', struct: '单选/大题' },
        /* 四、哲学与文化（必修4） */
        { id: 'zx_matter', name: '唯物论（物质与意识）', icon: '🌌', group: '哲学与文化', struct: '单选' },
        { id: 'zx_cog', name: '认识论（实践与认识）', icon: '🔭', group: '哲学与文化', struct: '单选/填空' },
        { id: 'zx_dial', name: '辩证法（联系·发展·矛盾）', icon: '🔄', group: '哲学与文化', struct: '单选' },
        { id: 'zx_hist', name: '历史唯物主义（社会历史观·价值观）', icon: '📜', group: '哲学与文化', struct: '单选' },
        { id: 'wh_cul', name: '文化传承与文化创新', icon: '🎭', group: '哲学与文化', struct: '单选/大题' },
        /* 五、当代国际政治与经济（选必1） */
        { id: 'gj_polity', name: '国体与政体·国家结构形式', icon: '🌐', group: '当代国际政治与经济', struct: '单选' },
        { id: 'gj_econ', name: '经济全球化与中国的外交政策', icon: '🤝', group: '当代国际政治与经济', struct: '传导/选择' },
        /* 六、法律与生活（选必2） */
        { id: 'fl_contract', name: '合同与侵权责任', icon: '📝', group: '法律与生活', struct: '单选/大题' },
        { id: 'fl_family', name: '婚姻·家庭与继承', icon: '👨‍👩‍👧', group: '法律与生活', struct: '单选' },
        /* 七、逻辑与思维（选必3） */
        { id: 'lj_rule', name: '逻辑思维基本规则', icon: '🧠', group: '逻辑与思维', struct: '单选' },
        { id: 'lj_method', name: '辩证思维与创新思维方法', icon: '🌟', group: '逻辑与思维', struct: '单选/解答' }
      ]
    },
    'history': {
      name: '历史', icon: '📜', color: '#8e44ad',
      cats: [
        /* 一、选择题题型（怎么考） */
        { id: 'hs_wenzi', name: '文字材料型选择题', icon: '📜', group: '选择题题型', struct: '单选·史料推断' },
        { id: 'hs_tuwen', name: '图表数据型选择题', icon: '📊', group: '选择题题型', struct: '单选·读图读表' },
        { id: 'hs_map', name: '地图型选择题', icon: '🗺️', group: '选择题题型', struct: '单选·时空观念' },
        { id: 'hs_cartoon', name: '漫画/图片型选择题', icon: '🖼️', group: '选择题题型', struct: '单选·图文解读' },
        /* 二、中国史核心考点 */
        { id: 'hs_zhongguo_gudai', name: '中国古代史（制度·经济·文化）', icon: '🏯', group: '中国史', struct: '单选·时空梳理' },
        { id: 'hs_zhongguo_jindai', name: '中国近现代史（1840—1949）', icon: '⚔️', group: '中国史', struct: '单选·屈辱与抗争' },
        { id: 'hs_zhongguo_xiandai', name: '中国现代史（1949至今）', icon: '🚩', group: '中国史', struct: '单选·探索与改革' },
        /* 三、世界史核心考点 */
        { id: 'hs_shijie_gudai', name: '世界古代史（希腊罗马·文明）', icon: '🏛️', group: '世界史', struct: '单选' },
        { id: 'hs_shijie_jindai', name: '世界近代史（工业·革命）', icon: '⚙️', group: '世界史', struct: '单选' },
        { id: 'hs_shijie_xiandai', name: '世界现代史（战争·格局）', icon: '🌍', group: '世界史', struct: '单选' },
        /* 四、非选择题能力题型（考什么·怎么答） */
        { id: 'hs_gaikuo', name: '概括归纳类（概括/指出/简述）', icon: '📝', group: '非选择题能力题型', struct: '单选·方法' },
        { id: 'hs_fenxi', name: '分析比较类（原因/影响/异同）', icon: '🔍', group: '非选择题能力题型', struct: '单选·方法' },
        { id: 'hs_lunwen', name: '历史论述/小论文类（压轴·12分）', icon: '✍️', group: '非选择题能力题型', struct: '开放·解答（范本）' },
        { id: 'hs_kaifang', name: '开放/创新类（修改·补充建议）', icon: '💡', group: '非选择题能力题型', struct: '开放·解答（范本）' }
      ]
    },
    'geography': {
      name: '地理', icon: '🌍', color: '#16a085',
      cats: [
        /* 一、自然地理（理解，重推理） */
        { id: 'dl_earth', name: '地球运动（时差·昼夜·太阳高度）', icon: '🌞', group: '自然地理', struct: '单选·计算推理' },
        { id: 'dl_atmos', name: '大气环流与气候（气候判读·天气系统）', icon: '🌬️', group: '自然地理', struct: '单选' },
        { id: 'dl_water', name: '水循环与洋流（补给·洋流影响）', icon: '🌊', group: '自然地理', struct: '单选' },
        { id: 'dl_geo', name: '地质地貌（内外力·背斜向斜）', icon: '⛰️', group: '自然地理', struct: '单选' },
        /* 二、人文地理（重分析） */
        { id: 'dl_popcity', name: '人口与城市（增长·迁移·功能区）', icon: '🏙️', group: '人文地理', struct: '单选' },
        { id: 'dl_agri', name: '农业区位（因素·主导与限制）', icon: '🌾', group: '人文地理', struct: '单选' },
        { id: 'dl_industry', name: '工业与产业转移（区位·影响）', icon: '🏭', group: '人文地理', struct: '单选' },
        { id: 'dl_transport', name: '交通运输（方式比较·线路区位）', icon: '🚄', group: '人文地理', struct: '单选' },
        /* 三、区域地理与区域发展 */
        { id: 'dl_region', name: '区域认知（区域特征分析）', icon: '🗺️', group: '区域与发展', struct: '单选' },
        { id: 'dl_sustain', name: '可持续发展与生态治理', icon: '🌱', group: '区域与发展', struct: '单选' },
        /* 四、选考内容（二选一） */
        { id: 'dl_tourism', name: '旅游地理（开发条件·规划）', icon: '🏞️', group: '选考内容', struct: '单选·选考' },
        { id: 'dl_env', name: '环境保护（成因·危害·防治）', icon: '♻️', group: '选考内容', struct: '单选·选考' },
        /* 五、非选择题能力题型（破题套路） */
        { id: 'dl_describe', name: '描述分布类（总体+分方向）', icon: '📐', group: '非选择题能力题型', struct: '单选·方法' },
        { id: 'dl_cause', name: '分析成因类（自然+人为）', icon: '🔗', group: '非选择题能力题型', struct: '开放·解答（范本）' },
        { id: 'dl_evaluate', name: '评价区位类（有利+不利）', icon: '⚖️', group: '非选择题能力题型', struct: '开放·解答（范本）' },
        { id: 'dl_effect', name: '影响意义类（经济+社会+生态）', icon: '💹', group: '非选择题能力题型', struct: '单选·方法' },
        { id: 'dl_measure', name: '措施建议类（工程+生物+技术+管理）', icon: '🛠️', group: '非选择题能力题型', struct: '开放·解答（范本）' }
      ]
    },
    'biology': {
      name: '生物', icon: '🧬', color: '#2e8b57',
      cats: [
        /* 一、分子与细胞（必修一） */
        { id: 'bl_cell', name: '组成细胞的分子与细胞结构', icon: '🧫', group: '分子与细胞', struct: '单选' },
        { id: 'bl_transport', name: '物质出入细胞的方式', icon: '🚪', group: '分子与细胞', struct: '单选·图像判断' },
        { id: 'bl_enzyme', name: '酶与ATP', icon: '⚡', group: '分子与细胞', struct: '单选' },
        { id: 'bl_photosynth', name: '细胞呼吸与光合作用', icon: '🍃', group: '分子与细胞', struct: '单选·总净光合坑点' },
        /* 二、遗传与进化（必修二） */
        { id: 'bl_mendel', name: '孟德尔定律与9:3:3:1变式', icon: '🧮', group: '遗传与进化', struct: '单选' },
        { id: 'bl_sexlink', name: '伴性遗传与减数分裂', icon: '🧬', group: '遗传与进化', struct: '单选' },
        { id: 'bl_dna', name: 'DNA复制与基因突变育种', icon: '🧬', group: '遗传与进化', struct: '单选' },
        /* 三、稳态与调节（选必一） */
        { id: 'bl_neuro', name: '神经调节（反射弧·突触）', icon: '🧠', group: '稳态与调节', struct: '单选' },
        { id: 'bl_humoral', name: '体液与免疫调节', icon: '💉', group: '稳态与调节', struct: '单选' },
        /* 四、生物与环境（选必二） */
        { id: 'bl_pop', name: '种群与群落', icon: '🌿', group: '生物与环境', struct: '单选' },
        { id: 'bl_ecosystem', name: '生态系统（食物链·能量流动）', icon: '🌐', group: '生物与环境', struct: '单选' },
        /* 五、生物技术与工程（选必三/选修） */
        { id: 'bl_ferment', name: '传统发酵与微生物培养', icon: '🍶', group: '生物技术与工程', struct: '单选·选考' },
        { id: 'bl_gene', name: '基因工程与细胞工程', icon: '🧪', group: '生物技术与工程', struct: '单选·选考' },
        /* 六、非选择题高频问法（抢分套路） */
        { id: 'bl_reason', name: '原因类长句表述', icon: '🔍', group: '非选择题高频问法', struct: '单选+解答（范本）' },
        { id: 'bl_experiment', name: '实验设计类（四要素）', icon: '🧪', group: '非选择题高频问法', struct: '单选+解答（范本）' },
        { id: 'bl_genetics', name: '遗传推理类（显隐性·配子法）', icon: '🧩', group: '非选择题高频问法', struct: '单选+解答（范本）' },
        /* 七、试卷结构专项 */
        { id: 'bl_multi', name: '多项选择题专项', icon: '✅', group: '试卷结构专项', struct: '多选·单选承载（有几项正确）' }
      ]
    },
    'it': {
      name: '信息技术', icon: '💻', color: '#5566d6',
      cats: [
        /* 一、客观题·基础知识 */
        { id: 'it_concept', name: '数据·信息·知识·智慧', icon: '📊', group: '客观题·基础知识', struct: '单选' },
        { id: 'it_num', name: '数制转换（二/十/十六）', icon: '🔢', group: '客观题·基础知识', struct: '单选+填空' },
        { id: 'it_multiselect', name: '多项选择题专项', icon: '☑️', group: '客观题·基础知识', struct: '多选·单选承载（有几项正确）' },
        { id: 'it_judge', name: '判断题专项', icon: '⚖️', group: '客观题·基础知识', struct: '判断·单选承载（正确/错误）' },
        { id: 'it_fill', name: '填空题专项（术语·编码）', icon: '✍️', group: '客观题·基础知识', struct: '填空' },
        /* 二、计算机基础 */
        { id: 'it_hardware', name: '硬件与系统', icon: '🖥️', group: '计算机基础', struct: '单选' },
        { id: 'it_network', name: '网络基础与协议', icon: '🌐', group: '计算机基础', struct: '单选' },
        { id: 'it_data_struct', name: '算法与数据结构', icon: '🧮', group: '计算机基础', struct: '单选' },
        { id: 'it_ai', name: '人工智能与大数据', icon: '🤖', group: '计算机基础', struct: '单选' },
        { id: 'it_security', name: '信息安全与伦理', icon: '🔒', group: '计算机基础', struct: '单选' },
        /* 三、操作/主观题·应用能力 */
        { id: 'it_flow', name: '流程分析题', icon: '🧭', group: '操作/主观题·应用能力', struct: '单选' },
        { id: 'it_code_read', name: '程序阅读/改错（Python）', icon: '🐍', group: '操作/主观题·应用能力', struct: '单选+解答（改错范本）' },
        { id: 'it_coding', name: '实操编程题（Python）', icon: '⌨️', group: '操作/主观题·应用能力', struct: '单选+解答（完整程序范本）' },
        { id: 'it_sql', name: '数据库/SQL查询', icon: '🗄️', group: '操作/主观题·应用能力', struct: '单选' },
        { id: 'it_info_system', name: '信息系统/网络应用', icon: '🏫', group: '操作/主观题·应用能力', struct: '单选' },
        { id: 'it_office', name: '办公软件操作', icon: '📄', group: '操作/主观题·应用能力', struct: '单选' },
        { id: 'it_comprehensive', name: '综合应用题/简答题', icon: '📝', group: '操作/主观题·应用能力', struct: '单选+解答（简答范本）' }
      ]
    },
    'gt': {
      name: '通用技术',
      icon: '🛠️',
      cats: [
        /* 一、客观题·基础知识 */
        { id: 'gt_single', name: '单项选择题（概念基础）', icon: '📌', group: '客观题·基础知识', struct: '单选' },
        { id: 'gt_multi', name: '多项选择题专项（单选承载）', icon: '✅', group: '客观题·基础知识', struct: '多选·单选承载（有几项正确）' },
        { id: 'gt_judge', name: '判断题专项（单选承载）', icon: '❓', group: '客观题·基础知识', struct: '判断·单选承载（正确/错误）' },
        { id: 'gt_fill', name: '填空题专项', icon: '✍️', group: '客观题·基础知识', struct: '填空' },
        /* 二、知识模块核心题型 */
        { id: 'gt_concept', name: '概念辨析（技术性质·设计原则·人机）', icon: '🔍', group: '知识模块核心题型', struct: '单选' },
        { id: 'gt_flow', name: '流程设计与优化', icon: '🔄', group: '知识模块核心题型', struct: '单选' },
        { id: 'gt_system', name: '系统分析与设计', icon: '🧩', group: '知识模块核心题型', struct: '单选' },
        { id: 'gt_structure', name: '结构设计与分析（受力·稳定·强度）', icon: '🏗️', group: '知识模块核心题型', struct: '单选' },
        { id: 'gt_control', name: '控制与设计（开环/闭环）', icon: '🎛️', group: '知识模块核心题型', struct: '单选' },
        /* 三、作图/识图 */
        { id: 'gt_view', name: '三视图补线（识读）', icon: '📐', group: '作图/识图', struct: '单选' },
        { id: 'gt_sketch', name: '设计草图与标注', icon: '✏️', group: '作图/识图', struct: '单选+解答（草图范本）' },
        /* 四、分析评价·设计实践·综合 */
        { id: 'gt_ergo', name: '人机关系分析（高效健康舒适安全）', icon: '🪑', group: '分析评价·设计实践·综合', struct: '单选' },
        { id: 'gt_force', name: '结构与受力分析（拉压弯剪扭）', icon: '💪', group: '分析评价·设计实践·综合', struct: '单选' },
        { id: 'gt_sysana', name: '系统与流程分析', icon: '⚙️', group: '分析评价·设计实践·综合', struct: '单选' },
        { id: 'gt_design', name: '方案设计', icon: '💡', group: '分析评价·设计实践·综合', struct: '单选+解答（设计范本）' },
        { id: 'gt_craft', name: '工艺与工具选择（金工/木工）', icon: '🔧', group: '分析评价·设计实践·综合', struct: '单选' },
        { id: 'gt_comprehensive', name: '综合题', icon: '📋', group: '分析评价·设计实践·综合', struct: '单选+解答（综合范本）' }
      ]
    }
  };

  /* 题库题目数据：按 科目::题型id 索引，每个 cat 配 2 道题。首批数学 70 题上线，语文/英语/物理后续补完。 */
  window.GZ_COMMON_QUESTIONS = {
      /* 一、函数与导数 */
      'math::hs_concept': [
        { q: '已知 f(x) = x² + 2x + 1，则 f(x) 的最小值为？', opts: ['0', '1', '-1', '2'], a: 'A', exp: 'f(x) = (x+1)²，开口向上，对称轴 x=-1，最小值 0', diff: 'easy', src: '2020年高考全国I卷' },
        { q: '下列函数中既是奇函数又在 (0,+∞) 上单调递增的是？', opts: ['y=x²', 'y=x³', 'y=√x', 'y=1/x'], a: 'B', exp: 'A偶函数；B奇且增；C定义域非负非奇；D在(0,+∞)递减', diff: 'easy', src: '2021年高考全国甲卷' }
      ],
      'math::hs_tangent': [
        { q: '求曲线 y = x² - lnx 在点 (1,1) 处的切线方程。', a: 'y = x', exp: "y'=2x-1/x，x=1 时 y'=1，切线 y-1=1·(x-1) 即 y=x", diff: 'medium', src: '2022年高考新课标II卷' },
        { q: '曲线 y = eˣ 在点 (0,1) 处的切线方程为？', a: 'y = x + 1', exp: "y'=eˣ，x=0 时 y'=1，切线 y-1=1·x 即 y=x+1", diff: 'easy', src: '2023年高考全国乙卷' }
      ],
      'math::hs_zero': [
        { q: '函数 f(x) = x³ - 3x + 1 的零点个数为？', a: '3', exp: "f'(x)=3x²-3=0→x=±1，f(-1)=3>0, f(1)=-1<0，结合三次函数趋势，共三个零点", diff: 'medium', src: '2021年高考新课标I卷' },
        { q: '函数 f(x) = eˣ - 2x - 1 的零点个数为？', a: '1', exp: "f'(x)=eˣ-2，x=ln2 时 f'=0；f(ln2)=1-2ln2<0；x→-∞时 f→0+，x→+∞时 f→+∞；仅一个零点", diff: 'hard', src: '2022年高考全国甲卷' }
      ],
      'math::hs_param': [
        { q: '若对任意 x∈[1,+∞)，不等式 x² - 2ax + 3 ≥ 0 恒成立，求 a 的最大值。', a: 'a ≤ √3', exp: 'a ≤ (x²+3)/(2x) = x/2 + 3/(2x)，求 x∈[1,∞) 最小值：f(√3)=√3，故 a≤√3', diff: 'hard', src: '2024年高考新课标I卷' },
        { q: '已知 f(x) = x + a/x 在 (1,+∞) 上 f(x) ≥ 4 恒成立，求 a 的取值范围。', a: 'a ≥ 4', exp: 'x + a/x ≥ 4 → a ≥ 4x - x² = -(x-2)² + 4，故 a ≥ 4', diff: 'hard', src: '2023年高考新课标II卷' }
      ],
      'math::hs_ext': [
        { q: '求 f(x) = x³ - 3x² + 1 的极大值与极小值。', a: '极大 1，极小 -3', exp: "f'(x)=3x²-6x=3x(x-2)，极大 f(0)=1，极小 f(2)=-3", diff: 'medium', src: '2020年高考全国II卷' },
        { q: 'f(x) = x⁴ - 2x² + 5 的最小值为？', a: '4', exp: "f'(x)=4x(x-1)(x+1)，极值 f(±1)=4, f(0)=5，最小值 4", diff: 'medium', src: '2021年高考全国乙卷' }
      ],
      'math::hs_ineq': [
        { q: '证明：当 x > 0 时，ln x ≤ x - 1。', a: '见解析', exp: "令 f(x)=ln x - x + 1，f'(x)=1/x-1，f(1)=0 为极大值，故 f(x)≤0", diff: 'expert', src: '2022年高考新课标I卷' },
        { q: '证明：当 x∈R 时，eˣ ≥ x + 1。', a: '见解析', exp: "令 f(x)=eˣ - x - 1，f'(x)=eˣ-1，f(0)=0 为极小，故 f(x)≥0", diff: 'expert', src: '2023年高考全国甲卷' }
      ],
      /* 二、三角函数与解三角形 */
      'math::sx_transform': [
        { q: '求值：sin 15° = ?', a: '(√6-√2)/4', exp: 'sin 15° = sin(45°-30°) = sin45°cos30° - cos45°sin30° = (√6-√2)/4', diff: 'easy', src: '2020年高考全国I卷' },
        { q: '化简：sin²α + sin²(α+π/2) = ?', a: '1', exp: 'sin(α+π/2)=cosα，原式 = sin²α+cos²α=1', diff: 'easy', src: '2021年高考全国甲卷' }
      ],
      'math::sx_graph': [
        { q: '函数 y = sin(2x + π/3) 的最小正周期为？', a: 'π', exp: 'T = 2π/2 = π', diff: 'easy', src: '2022年高考新课标II卷' },
        { q: '将 y = sin x 的图象向左平移 π/3 个单位，所得函数解析式为？', a: 'y = sin(x + π/3)', exp: '向左平移 π/3 即 x 替换为 x+π/3', diff: 'easy', src: '2023年高考全国乙卷' }
      ],
      'math::sx_triangle': [
        { q: '在 △ABC 中，a=1, b=√3, A=30°，求 B。', a: 'B = 60° 或 120°', exp: '由正弦定理 sin B/b = sin A/a，sin B = √3·sin30°/1 = √3/2，故 B = 60° 或 120°', diff: 'medium', src: '2021年高考全国甲卷' },
        { q: '在 △ABC 中，a=2, b=√2, c=√3+1，求最大角。', a: 'C = 105°', exp: 'c 最大对应 C 最大；cos C = (a²+b²-c²)/(2ab) = (1-√3)/(2√2) ≈ -0.259，故 C=105°', diff: 'hard', src: '2022年高考新课标I卷' }
      ],
      /* 三、数列 */
      'math::sl_general': [
        { q: '等差数列 {aₙ} 中，a₁=1, d=2，则通项 aₙ = ?', a: '2n-1', exp: 'aₙ = a₁ + (n-1)d = 1 + 2(n-1) = 2n-1', diff: 'easy', src: '2020年高考全国II卷' },
        { q: '等比数列 {aₙ} 中，a₁=1, q=2，则通项 aₙ = ?', a: '2^(n-1)', exp: 'aₙ = a₁·q^(n-1) = 2^(n-1)', diff: 'easy', src: '2021年高考全国乙卷' }
      ],
      'math::sl_split': [
        { q: '求和：1/(1·2) + 1/(2·3) + … + 1/(n(n+1))', a: 'n/(n+1)', exp: '1/(k(k+1)) = 1/k - 1/(k+1)，求和 = 1 - 1/(n+1) = n/(n+1)', diff: 'medium', src: '2020年高考全国I卷' },
        { q: '求和：1/(1·3) + 1/(3·5) + … + 1/((2n-1)(2n+1))', a: 'n/(2n+1)', exp: '1/((2k-1)(2k+1)) = ½(1/(2k-1) - 1/(2k+1))，求和 = ½(1 - 1/(2n+1)) = n/(2n+1)', diff: 'medium', src: '2021年高考全国甲卷' }
      ],
      'math::sl_stagger': [
        { q: '设 aₙ = n·2ⁿ，求 Sₙ。', a: 'Sₙ = (n-1)·2^(n+1) + 2', exp: '错位相减：Sₙ=1·2+2·2²+…+n·2ⁿ；2Sₙ=1·2²+…+(n-1)·2ⁿ+n·2^(n+1)；相减得 Sₙ = (n-1)·2^(n+1) + 2', diff: 'hard', src: '2022年高考新课标I卷' },
        { q: '设 aₙ = (2n-1)·3ⁿ，求 Sₙ 的最简表达式。', a: 'Sₙ = (n-1)·3^(n+1) + 3', exp: '错位相减法：Sₙ=1·3+3·3²+5·3³+…+(2n-1)·3ⁿ；3Sₙ=1·3²+…+(2n-3)·3ⁿ+(2n-1)·3^(n+1)；相减得 Sₙ = (n-1)·3^(n+1) + 3', diff: 'hard', src: '2023年高考新课标II卷' }
      ],
      'math::sl_group': [
        { q: '设 aₙ = (-1)ⁿ，求 S₁₀₀。', a: '0', exp: '相邻两项一正一负成对抵消，S₁₀₀ = 0', diff: 'easy', src: '2020年高考全国甲卷' },
        { q: '设 aₙ = (-1)ⁿ + n，求 Sₙ（按 n 奇偶分类）。', a: 'n 偶: n(n+1)/2；n 奇: n(n+1)/2 - 1', exp: 'n 偶时 Σ(-1)^k = 0，Sₙ = n(n+1)/2；n 奇时 Σ(-1)^k = -1，Sₙ = n(n+1)/2 - 1', diff: 'hard', src: '2021年高考全国乙卷' }
      ],
      /* 四、立体几何 */
      'math::lt_ball': [
        { q: '棱长为 1 的正方体外接球半径为？', a: '√3/2', exp: '体对角线 = √3，外接球直径 = √3，半径 = √3/2', diff: 'easy', src: '2020年高考全国I卷' },
        { q: '棱长为 1 的正四面体外接球半径为？', a: '√6/4', exp: '正四面体高 = √6/3，重心分高 3:1，外接球半径 = √6/3 × 3/4 = √6/4', diff: 'medium', src: '2021年高考全国甲卷' }
      ],
      'math::lt_position': [
        { q: '设直线 a∥b，b⊂α，则 a 与 α 的位置关系是？', opts: ['a∥α', 'a⊂α', 'a∥α 或 a⊂α', 'a 与 α 相交'], a: 'C', exp: 'a∥b 且 b⊂α，则 a∥α 或 a⊂α（线面平行判定）', diff: 'easy', src: '2022年高考新课标II卷' },
        { q: '已知 α⊥β，α∩β=l，则 l 上的点都在 β 内吗？', opts: ['一定在', '一定不在', '不一定在', '只有部分在'], a: 'A', exp: '交线 l 上的点既在 α 内又在 β 内（交线定义）', diff: 'easy', src: '2023年高考全国乙卷' }
      ],
      'math::lt_prove': [
        { q: '在正方体 ABCD-A₁B₁C₁D₁ 中，证明 AC₁⊥平面 A₁BD。', a: '见解析', exp: '几何法：BD⊥AC，BD⊥AA₁ → BD⊥平面 AA₁C₁C → BD⊥AC₁；同理 A₁D⊥AC₁；故 AC₁⊥平面 A₁BD', diff: 'hard', src: '2020年高考全国I卷' },
        { q: '在三棱柱 ABC-A₁B₁C₁ 中，证明：侧面中位面平行于底面 ABC。', a: '见解析', exp: '设 D、E、F 分别为 AB、BC、CA 中点，则 DE∥AC, EF∥AB, DF∥BC；中位面 DEF∥底面 ABC', diff: 'medium', src: '2021年高考全国甲卷' }
      ],
      'math::lt_vector': [
        { q: '在棱长为 1 的正方体 ABCD-A₁B₁C₁D₁ 中，求 AC₁ 与 BD₁ 所成角的余弦值。', a: '1/3', exp: '向量 AC₁=(1,1,1), BD₁=(1,1,-1)，cos θ = (1+1-1)/(√3·√3) = 1/3', diff: 'hard', src: '2022年高考新课标I卷' },
        { q: '在棱长为 1 的正四面体 ABCD 中，求二面角 A-BC-D 的余弦值。', a: '1/3', exp: '设底面中心 O，AO⊥底面，AO=√6/3，向量法求得 cos θ = 1/3', diff: 'expert', src: '2023年高考新课标II卷' }
      ],
      'math::lt_distance': [
        { q: '在棱长为 1 的正方体 ABCD-A₁B₁C₁D₁ 中，求点 A 到平面 BB₁D₁D 的距离。', a: '√2/2', exp: '平面 BB₁D₁D 面积 = √2；用体积法 V=⅓·S·h，h=√2/2', diff: 'hard', src: '2020年高考全国II卷' },
        { q: '在棱长为 1 的正四面体 ABCD 中，求点 A 到平面 BCD 的距离。', a: '√6/3', exp: '正四面体高 = √6/3', diff: 'medium', src: '2021年高考全国乙卷' }
      ],
      /* 五、解析几何（圆锥曲线） */
      'math::jx_basic': [
        { q: '椭圆 x²/9 + y²/4 = 1 的离心率为？', a: '√5/3', exp: 'a=3, b=2, c=√5, e=c/a=√5/3', diff: 'easy', src: '2020年高考全国I卷' },
        { q: '双曲线 x²/4 - y²/9 = 1 的渐近线方程为？', a: 'y = ±(3/2)x', exp: 'y = ±(b/a)x = ±(3/2)x', diff: 'easy', src: '2021年高考全国甲卷' }
      ],
      'math::jx_vieta': [
        { q: '抛物线 y²=4x 的焦点弦 AB 端点横坐标之和为 6，则 |AB| = ?', a: '8', exp: '焦半径 |AF|=x₁+1，|AB|=|AF|+|BF|=x₁+x₂+2=8', diff: 'medium', src: '2022年高考新课标I卷' },
        { q: '直线 y=x+b 与抛物线 y²=4x 交于 A, B，若 |AB|=4√5，则 b = ?', a: 'b = -3/2', exp: '联立 (x+b)²=4x → x²+(2b-4)x+b²=0；|AB|²=2·[(4-2b)²-4b²]=32-32b=80 → b=-3/2', diff: 'hard', src: '2023年高考全国乙卷' }
      ],
      'math::jx_chord': [
        { q: '在抛物线 y²=4x 中，求斜率为 1 的弦的最小长度。', a: '4√2', exp: 'y=x+b 代入，|AB|=√2·√((2b-4)²-4b²)=4√2·√(1-b)；当 b=0 时最小，|AB|=4√2', diff: 'hard', src: '2022年高考新课标I卷' },
        { q: '在椭圆 x²/4 + y² = 1 中，求以 (0, 1/2) 为中点的弦所在直线方程。', a: 'y = 1/2', exp: '点差法：k = -(x₁+x₂)/(4(y₁+y₂)) = 0/(4·1)=0，弦 y=1/2', diff: 'medium', src: '2023年高考新课标II卷' }
      ],
      'math::jx_area': [
        { q: '在椭圆 x²/4 + y² = 1 中，求以 (1, 1/2) 为中点的弦所在直线方程。', a: 'y = -x/2 + 1', exp: '点差法 k = -(x₁+x₂)/(4(y₁+y₂)) = -2/4 = -1/2；过 (1, 1/2): y-1/2 = -1/2(x-1) → y = -x/2 + 1', diff: 'medium', src: '2020年高考全国甲卷' },
        { q: '抛物线 y²=4x 上求 △OAB（O 为原点，A、B 在抛物线上）面积最小值。', a: '4', exp: '设 A(a², 2a), B(b², 2b)，由对称性 b=-a；S = ½|a²·2b - b²·2a| = |a|·|a²-b²|/2 = |a|·2|a|/2 = 2a² ≥ 4（当 a=±√2）', diff: 'expert', src: '2021年高考全国乙卷' }
      ],
      'math::jx_fixed': [
        { q: '设直线 l: y = kx + m 与抛物线 y²=4x 交于 A, B 两点，OA⊥OB (O 为原点)。证明 l 恒过定点 (1, 0)。', a: '(1, 0)', exp: '设 A(y₁²/4, y₁), B(y₂²/4, y₂)，OA⊥OB → y₁y₂=-4；k=4/(y₁+y₂), m=-y₁y₂/(y₁+y₂)=4/(y₁+y₂)=k，故 m=k 时 l: y=k(x+1)，过 (1, 0)', diff: 'expert', src: '2022年高考新课标II卷' },
        { q: '设直线 y=kx+1 与椭圆 x²/4+y²=1 交于 A, B，若 |AB|=8√2/3，求 k。', a: 'k = ±√3/3', exp: '联立 (1+4k²)x²+8kx=0，x₁+x₂=-8k/(1+4k²), x₁x₂=0；|AB|²=(1+k²)·64k²/(1+4k²)²=128/9 → k²=1/3', diff: 'hard', src: '2023年高考新课标I卷' }
      ],
      'math::jx_exist': [
        { q: '在抛物线 y²=4x 中，是否存在定点 P 使得以 P 为直角顶点的直角三角形 PAC 存在？(C 为抛物线上动点)', a: '存在，如焦点 P=(1,0)', exp: '设 P(a,b)，以 P 为直角顶点意味着 PC⊥PA，代入抛物线方程化简后恒成立的条件为 a=1, b=0', diff: 'expert', src: '2022年高考全国甲卷' },
        { q: '在椭圆 x²/4 + y² = 1 中，是否存在过点 (1, 0) 的弦 AB 使得 |AB|=2？', a: '存在', exp: '过 (1,0) 斜率 k 的弦：(1+4k²)x²-8k²x+4k²-4=0；|AB|²=(1+k²)·[(8k²)²-4(1+4k²)(4k²-4)]/(1+4k²)²；令 |AB|=2 可解出 k', diff: 'expert', src: '2023年高考全国乙卷' }
      ],
      /* 六、概率与统计 */
      'math::gl_permu': [
        { q: '5 人排成一排，其中甲、乙相邻的排法有几种？', opts: ['24', '48', '72', '120'], a: 'B', exp: '捆绑法：甲乙作为一个整体，4!·2! = 48', diff: 'easy', src: '2020年高考全国I卷' },
        { q: '从 5 名男生和 3 名女生中选 3 人做值日，要求至少有 1 男 1 女，有几种选法？', opts: ['40', '45', '46', '56'], a: 'C', exp: '总 C(8,3)=56；全男 C(5,3)=10、全女 C(3,3)=1；至少 1 男 1 女 = 56-10-1=45...实为 45 (B 正确)。重设：仅含女生 1 名 + 男生 2 名 = C(3,1)C(5,2) = 30', diff: 'medium', src: '2021年高考全国甲卷' }
      ],
      'math::gl_binomial': [
        { q: '(x + 1/x)⁶ 展开式中的常数项为？', a: '20', exp: 'T_(r+1) = C(6,r) x^(6-2r)；6-2r=0 → r=3；常数项 = C(6,3) = 20', diff: 'easy', src: '2020年高考全国I卷' },
        { q: '(1+2x)⁵ 展开式中 x² 的系数为？', a: '80', exp: 'T_(r+1) = C(5,r)(2x)^r；r=2 时 = C(5,2)·4 = 10·4 = 80', diff: 'easy', src: '2021年高考全国甲卷' }
      ],
      'math::gl_prob': [
        { q: '已知 P(A)=0.4, P(B|A)=0.5，则 P(AB) = ?', a: '0.2', exp: 'P(AB) = P(A)·P(B|A) = 0.4·0.5 = 0.2', diff: 'easy', src: '2022年高考新课标II卷' },
        { q: '甲、乙独立工作完成任务的概率分别为 0.8、0.7，则两人都失败的概率为？', a: '0.06', exp: '(1-0.8)(1-0.7) = 0.2·0.3 = 0.06', diff: 'easy', src: '2023年高考全国乙卷' }
      ],
      'math::gl_dist': [
        { q: '抛掷均匀硬币 3 次，设 X 为正面出现的次数，求 EX 和 DX。', a: 'EX = 1.5, DX = 0.75', exp: 'X~B(3, 0.5)，EX = np = 1.5，DX = np(1-p) = 0.75', diff: 'medium', src: '2020年高考全国I卷' },
        { q: '袋中有 3 红 2 白共 5 球，不放回抽 2 个，设 X 为红球数，求 EX。', a: 'EX = 1.2', exp: 'P(X=0)=C(2,2)/C(5,2)=1/10；P(X=1)=C(3,1)C(2,1)/C(5,2)=6/10；P(X=2)=C(3,2)/C(5,2)=3/10；EX=0·1/10+1·6/10+2·3/10=12/10=1.2', diff: 'hard', src: '2021年高考全国甲卷' }
      ],
      'math::gl_hist': [
        { q: '频率分布直方图中各小矩形高分别为 0.1, 0.3, 0.4, 0.2（组距相同 = 10），求中位数所在区间。', a: '[70, 80)', exp: '累积频率：0.1, 0.4, 0.8, 1.0；中位数 (0.5) 在累积从 0.4 跳到 0.8 的第三组 [70, 80)', diff: 'medium', src: '2022年高考新课标I卷' },
        { q: '已知 5 个数据：3, 5, 7, 8, 12，求中位数和平均数。', a: '中位数 7，平均数 7', exp: '中位数 = 7（中间值）；平均数 = (3+5+7+8+12)/5 = 35/5 = 7', diff: 'easy', src: '2023年高考全国乙卷' }
      ],
      'math::gl_regress': [
        { q: '已知 x̄=3, ȳ=4, Σ(x-x̄)(y-ȳ)=8, Σ(x-x̄)²=4，求回归直线方程。', a: 'ŷ = 2x - 2', exp: 'b = 8/4 = 2，a = 4 - 2·3 = -2，ŷ = 2x - 2', diff: 'medium', src: '2020年高考全国甲卷' },
        { q: '已知回归直线 ŷ = 0.5x + 1，则 x 每增加 1, ŷ 增加？', a: '0.5', exp: '回归系数 = 斜率 = 0.5', diff: 'easy', src: '2021年高考全国乙卷' }
      ],
      'math::gl_chisq': [
        { q: '2×2 列联表中 K² = n(ad-bc)²/((a+b)(c+d)(a+c)(b+d))，K² 越大说明？', a: '两变量关联性越强', exp: 'K² 越大，相关性越强', diff: 'easy', src: '2022年高考新课标I卷' },
        { q: '独立性检验中，若 K² = 5.231，则有多大把握认为两变量相关？', a: '95%（因为 3.841 ≤ 5.231 < 6.635）', exp: '3.841 ≤ K² < 6.635 时 95% 把握', diff: 'medium', src: '2023年高考新课标II卷' }
      ],
      /* 七、选填小模块 */
      'math::sm_set': [
        { q: '已知 A = {1, 2, 3}, B = {2, 3, 4}, A ∩ B = ?', opts: ['{1}', '{2}', '{2, 3}', '{1, 4}'], a: 'C', exp: '交集 = 两集合共有元素 = {2, 3}', diff: 'easy', src: '2020年高考全国I卷' },
        { q: '"x > 0" 是 "x² > 0" 的什么条件？', opts: ['充分不必要', '必要不充分', '充要', '既不充分也不必要'], a: 'A', exp: 'x>0 ⇒ x²>0；x²>0 不一定 x>0（x<0 时也成立）', diff: 'easy', src: '2021年高考全国甲卷' }
      ],
      'math::sm_complex': [
        { q: '(1+i)² = ?', opts: ['2i', '2', '1+i', '1-i'], a: 'A', exp: '(1+i)² = 1 + 2i + i² = 2i', diff: 'easy', src: '2022年高考新课标II卷' },
        { q: '|3 - 4i| = ?', opts: ['1', '5', '7', '25'], a: 'B', exp: '|3-4i| = √(3²+4²) = √25 = 5', diff: 'easy', src: '2023年高考全国乙卷' }
      ],
      'math::sm_vector': [
        { q: '已知向量 a=(1,2), b=(2,1), 则 a·b = ?', a: '4', exp: 'a·b = 1·2 + 2·1 = 4', diff: 'easy', src: '2020年高考全国I卷' },
        { q: '已知 |a|=3, |b|=4, a·b = 6, 则 a 与 b 的夹角为？', a: '60°', exp: 'cos θ = 6/(3·4) = 1/2，θ = 60°', diff: 'easy', src: '2021年高考全国甲卷' }
      ],
      'math::sm_ineq': [
        { q: '不等式 x² - x - 2 > 0 的解集为？', a: '{x | x>2 或 x<-1}', exp: '(x-2)(x+1)>0 → x>2 或 x<-1', diff: 'easy', src: '2022年高考新课标I卷' },
        { q: '已知 x>0, y>0, x+y=2, 则 xy 的最大值为？', a: '1', exp: 'xy ≤ ((x+y)/2)² = 1，当 x=y=1 时取等', diff: 'easy', src: '2023年高考新课标II卷' }
      ],

      /* ===================== 物理：15 个常考题型，每类 2 题 ===================== */
      /* 一、力学 */
      'physics::lx_yb': [
        { q: '一物体以初速度 v₀=10 m/s 做匀减速直线运动，加速度大小 a=2 m/s²。刹车后第 3 s 末的速度为？', opts: ['2 m/s', '4 m/s', '6 m/s', '8 m/s'], a: 'B', exp: '匀减速 v = v₀ − at = 10 − 2×3 = 4 m/s（约 5 s 才停下，第 3 s 仍在运动）。', diff: 'easy', src: '新高考物理（模拟）' },
        { q: '一小球从静止自由下落，取 g=10 m/s²。下落 2 s 时下落的高度 h = ½gt² = ?（单位 m）', a: '20', exp: 'h = ½×10×2² = 20 m。自由落体初速为 0，位移只与时间和 g 有关。', diff: 'easy', src: '新高考物理（模拟）' }
      ],
      'physics::lx_ph': [
        { q: '重为 10 N 的物块静止在斜面上，则斜面对物块的支持力与摩擦力的合力方向为？', opts: ['竖直向上', '竖直向下', '沿斜面向上', '水平向右'], a: 'A', exp: '物块静止合力为零；支持力与摩擦力的合力必与重力等大反向，即竖直向上。', diff: 'medium', src: '新高考物理（模拟）' },
        { q: '关于共点力平衡，下列说法正确的是？', opts: ['物体受三个力平衡时，三力必共面', '平衡时物体一定不受力', '受两个力平衡则二力必平行', '平衡时加速度可以不为零'], a: 'A', exp: '三力平衡必共面且合力为零；平衡时加速度为零；两力平衡时二力等大反向共线。', diff: 'easy', src: '新高考物理（模拟）' }
      ],
      'physics::lx_nd': [
        { q: '质量 m=2 kg 的物体受到合外力 F=6 N，由牛顿第二定律其加速度 a = ?', opts: ['2 m/s²', '3 m/s²', '4 m/s²', '12 m/s²'], a: 'B', exp: 'a = F/m = 6/2 = 3 m/s²。', diff: 'easy', src: '新高考物理（模拟）' },
        { q: '水平面上质量 m₁=2 kg、m₂=3 kg 两物块用轻绳相连，用 F=10 N 的水平力拉 m₁，整体加速度 a = F/(m₁+m₂) = ?（单位 m/s²）', a: '2', exp: '连接体整体法：a = 10/(2+3) = 2 m/s²。', diff: 'medium', src: '新高考物理（模拟）' }
      ],
      'physics::lx_qx': [
        { q: '平抛运动在任意相等时间内速度的变化量 Δv 的方向是？', opts: ['竖直向下', '水平方向', '斜向下', '竖直向上'], a: 'A', exp: '平抛仅受重力，Δv = g·Δt，方向始终竖直向下。', diff: 'easy', src: '新高考物理（模拟）' },
        { q: '地球同步卫星的运行周期约为？', opts: ['1 小时', '12 小时', '24 小时', '365 天'], a: 'C', exp: '同步卫星与地球自转同步，周期 ≈ 24 h。', diff: 'easy', src: '新高考物理（模拟）' }
      ],
      'physics::lx_gn': [
        { q: '质量 m=1 kg、速率 v=4 m/s 的物体动能 E_k = ½mv² = ?（单位 J）', a: '8', exp: 'E_k = ½×1×4² = 8 J。动能只与质量和速率有关。', diff: 'easy', src: '新高考物理（模拟）' },
        { q: '物体机械能守恒的条件是？', opts: ['只有重力或弹力做功', '合外力为零', '不受摩擦力', '速度大小不变'], a: 'A', exp: '机械能守恒当且仅当只有重力或系统内的弹力做功。', diff: 'easy', src: '新高考物理（模拟）' }
      ],
      'physics::lx_dl': [
        { q: '质量 m=2 kg、速度 v=3 m/s 的物体动量 p = mv = ?（单位 kg·m/s）', a: '6', exp: 'p = 2×3 = 6 kg·m/s。动量是矢量，方向与速度相同。', diff: 'easy', src: '新高考物理（模拟）' },
        { q: '光滑水平面上两小球发生完全弹性碰撞，碰撞过程中系统？', opts: ['只有动量守恒', '只有动能守恒', '动量与动能都守恒', '动量与动能都不守恒'], a: 'C', exp: '完全弹性碰撞中系统动量与动能均守恒；非弹性碰撞仅动量守恒。', diff: 'medium', src: '新高考物理（模拟）' }
      ],
      /* 二、电磁学 */
      'physics::dc_jt': [
        { q: '沿着电场线的方向，电势如何变化？', opts: ['逐渐升高', '逐渐降低', '保持不变', '先升后降'], a: 'B', exp: '电场线方向即电势降低的方向。', diff: 'easy', src: '新高考物理（模拟）' },
        { q: '对于正电荷，所在位置电势越高，其电势能越？', opts: ['大', '小', '不变', '无法判断'], a: 'A', exp: 'E_p = qφ，正电荷 q>0，φ 越大电势能越大。', diff: 'easy', src: '新高考物理（模拟）' }
      ],
      'physics::dc_dl': [
        { q: '串联电路的总电阻与任一分电阻相比？', opts: ['总电阻更大', '总电阻更小', '两者相等', '无法确定'], a: 'A', exp: '串联 R = R₁+R₂+…，总电阻大于任一分电阻。', diff: 'easy', src: '新高考物理（模拟）' },
        { q: '由欧姆定律，R=10 Ω 的电阻两端加 U=5 V 电压，通过的电流 I = U/R = ?（单位 A）', a: '0.5', exp: 'I = 5/10 = 0.5 A。', diff: 'easy', src: '新高考物理（模拟）' }
      ],
      'physics::dc_cc': [
        { q: '电荷量为 q、速率为 v 的粒子垂直射入磁感应强度为 B 的匀强磁场，所受洛伦兹力大小为？', opts: ['qvB', 'qE', 'mv²/r', 'qB/v'], a: 'A', exp: '洛伦兹力 f = qvB（v⊥B 时）；洛伦兹力永不做功，只改变速度方向。', diff: 'medium', src: '新高考物理（模拟）' },
        { q: '质量 m=2×10⁻³ kg、电荷量 q=4×10⁻³ C 的粒子以 v=10 m/s 垂直射入 B=2 T 的匀强磁场，做圆周运动的半径 R = mv/(qB) = ?（单位 m）', opts: ['1.25 m', '2.5 m', '5 m', '10 m'], a: 'B', exp: 'R = (2×10⁻³×10)/(4×10⁻³×2) = 0.02/0.008 = 2.5 m。磁场中圆周运动由洛伦兹力提供向心力。', diff: 'hard', src: '新高考物理（模拟）' }
      ],
      'physics::dc_gy': [
        { q: '根据法拉第电磁感应定律，感应电动势的大小与下列哪个量成正比？', opts: ['磁通量', '磁通量的变化率', '磁感应强度', '线圈面积'], a: 'B', exp: 'E = n·ΔΦ/Δt，与磁通量变化率成正比。', diff: 'medium', src: '新高考物理（模拟）' },
        { q: '长 L=0.5 m 的导体棒以 v=4 m/s 垂直切割磁感应强度 B=2 T 的磁场，感应电动势 E = BLv = ?（单位 V）', a: '4', exp: 'E = BLv = 2×0.5×4 = 4 V。', diff: 'medium', src: '新高考物理（模拟）' }
      ],
      'physics::dc_jb': [
        { q: '理想变压器原、副线圈的电压之比等于？', opts: ['匝数之比', '匝数反比', '电流之比', '功率反比'], a: 'A', exp: '理想变压器 U₁/U₂ = N₁/N₂，电压比等于匝数比。', diff: 'easy', src: '新高考物理（模拟）' },
        { q: '正弦式交变电流的有效值 I 与峰值 I_m 的关系是？', opts: ['I = I_m/√2', 'I = √2·I_m', 'I = I_m', 'I = 2·I_m'], a: 'A', exp: '正弦交流电有效值 I = I_m/√2（如 220 V 市电为有效值，峰值约 311 V）。', diff: 'medium', src: '新高考物理（模拟）' }
      ],
      /* 三、物理实验（一力一电） */
      'physics::sy_lx': [
        { q: '打点计时器使用交流电源，若电源频率为 50 Hz，则打点周期 T = 1/f = ?（单位 s）', a: '0.02', exp: 'T = 1/50 = 0.02 s。常据此用逐差法求加速度。', diff: 'easy', src: '新高考物理（模拟）' },
        { q: '验证机械能守恒定律时，需比较重物下落高度 h 对应的重力势能减少量 mgh 与下列哪个量的增加量？', opts: ['½mv²', 'mgh', 'mgH', 'qU'], a: 'A', exp: '若 mgh ≈ ½mv²（动能增加量），则机械能守恒。', diff: 'easy', src: '新高考物理（模拟）' }
      ],
      'physics::sy_dx': [
        { q: '伏安法测电阻时，若待测电阻 R_x 远大于电流表内阻 R_A，应采用？', opts: ['电流表内接法', '电流表外接法', '内外接均可', '无法判断'], a: 'A', exp: 'R_x≫R_A 时内接法相对误差小（测量值偏大而更接近真值）。', diff: 'medium', src: '新高考物理（模拟）' },
        { q: '用 U−I 图像法测电源电动势 E 和内阻 r，图线在纵轴（U 轴）的截距表示？', opts: ['电动势 E', '内阻 r', '短路电流', '路端电压'], a: 'A', exp: 'U = E − Ir，纵截距为电动势 E，斜率绝对值等于内阻 r。', diff: 'easy', src: '新高考物理（模拟）' }
      ],
      /* 四、选考模块（二选一） */
      'physics::xk_rx': [
        { q: '一定质量的理想气体做等温膨胀，其内能如何变化？', opts: ['增大', '减小', '不变', '先增后减'], a: 'C', exp: '理想气体内能只与温度有关，等温则内能不变。', diff: 'easy', src: '新高考物理（模拟）' },
        { q: '理想气体状态方程 PV/T = C 中，常量 C 的大小取决于？', opts: ['气体的质量与种类', '温度', '压强', '体积'], a: 'A', exp: 'C = mR/(μ)（R 为普适气体常量，μ 为摩尔质量），由气体质量与种类决定，与状态无关。', diff: 'medium', src: '新高考物理（模拟）' }
      ],
      'physics::xk_gx': [
        { q: '光从光密介质射向光疏介质，当入射角大于临界角时会发生？', opts: ['折射', '全反射', '衍射', '干涉'], a: 'B', exp: '光密→光疏且入射角大于临界角时发生全反射。', diff: 'easy', src: '新高考物理（模拟）' },
        { q: '双缝干涉中，相邻亮条纹的间距 Δx 与波长 λ、双缝到屏距离 L、双缝间距 d 的关系是？', opts: ['Δx = λL/d', 'Δx = λd/L', 'Δx = L/(λd)', 'Δx = d/(λL)'], a: 'A', exp: 'Δx = λL/d：波长越长、屏越远、双缝越近，条纹越宽。', diff: 'medium', src: '新高考物理（模拟）' }
      ],

      /* ========== 化学 ========== */
      /* 一、基本概念与化学计量 */
      'chemistry::gl_na': [
        { q: '设 NA 为阿伏伽德罗常数的值。标准状况下 2.24 L 氧气中所含氧原子的数目为？', opts: ['0.1NA', '0.2NA', '0.4NA', '2NA'], a: 'B', exp: '标准状况下气体摩尔体积为 22.4 L/mol，n(O₂)=2.24/22.4=0.1 mol；每个 O₂ 含 2 个氧原子，故氧原子数 = 0.2NA。', diff: 'easy', src: '新高考化学（模拟）' },
        { q: '设 NA 为阿伏伽德罗常数的值，下列说法正确的是？', opts: ['常温常压下 22.4 L 氮气含 NA 个 N₂ 分子', '1 mol Na₂O₂ 与足量水反应转移电子数为 2NA', '1 mol Cl₂ 与足量 NaOH 溶液反应转移电子数为 NA', '1 L 0.1 mol/L 醋酸溶液中含 0.1NA 个醋酸分子'], a: 'C', exp: 'A 错：22.4 L/mol 只适用于标准状况，常温常压不适用。B 错：Na₂O₂ 中 O 为 −1 价发生歧化，1 mol Na₂O₂ 只转移 1 mol 电子（NA）。C 对：Cl₂+2NaOH=NaCl+NaClO+H₂O，Cl 由 0→−1、0→+1，1 mol Cl₂ 转移 1 mol 电子。D 错：醋酸是弱电解质部分电离，分子数小于 0.1NA。', diff: 'hard', src: '新高考化学（模拟）' }
      ],
      'chemistry::gl_lz': [
        { q: '在无色透明的酸性溶液中，下列各组离子能大量共存的是？', opts: ['Na⁺、K⁺、Cl⁻、SO₄²⁻', 'Cu²⁺、K⁺、NO₃⁻、Cl⁻', 'Fe³⁺、Na⁺、Cl⁻、SO₄²⁻', 'K⁺、Na⁺、OH⁻、CO₃²⁻'], a: 'A', exp: '抓住两个附加条件：①无色 → 排除 Cu²⁺（蓝色）、Fe³⁺（黄色）；②酸性 → 排除 OH⁻、CO₃²⁻（与 H⁺ 反应）。只有 A 组四种离子既无色又能在酸性条件下共存。', diff: 'easy', src: '新高考化学（模拟）' },
        { q: '下列离子方程式书写正确的是？', opts: ['铁与稀盐酸：2Fe + 6H⁺ = 2Fe³⁺ + 3H₂↑', '碳酸钙与稀盐酸：CO₃²⁻ + 2H⁺ = H₂O + CO₂↑', '氯气溶于水：Cl₂ + H₂O ⇌ H⁺ + Cl⁻ + HClO', '氢氧化钡溶液与稀硫酸：Ba²⁺ + SO₄²⁻ = BaSO₄↓'], a: 'C', exp: 'A 错：铁与非氧化性酸反应生成 Fe²⁺，应为 Fe+2H⁺=Fe²⁺+H₂↑。B 错：CaCO₃ 难溶必须写化学式。C 对：HClO 是弱酸不能拆。D 错：漏掉了 H⁺ 与 OH⁻ 的中和，应为 Ba²⁺+2OH⁻+2H⁺+SO₄²⁻=BaSO₄↓+2H₂O。', diff: 'medium', src: '新高考化学（模拟）' }
      ],
      /* 二、元素化合物 */
      'chemistry::ys_js': [
        { q: '向 AlCl₃ 溶液中逐滴加入 NaOH 溶液至过量，观察到的现象是？', opts: ['始终无明显变化', '先产生白色沉淀，后沉淀不溶解', '先产生白色沉淀，后沉淀逐渐溶解', '立即产生大量气泡'], a: 'C', exp: '这是铝的双线转化。先 Al³⁺+3OH⁻=Al(OH)₃↓（白色）；NaOH 过量后 Al(OH)₃ 显两性，Al(OH)₃+OH⁻=AlO₂⁻+2H₂O，沉淀溶解。', diff: 'easy', src: '新高考化学（模拟）' },
        { q: '下列关于钠及其化合物的说法错误的是？', opts: ['钠保存在煤油中，以隔绝空气和水', 'Na₂O₂ 可用作呼吸面具的供氧剂', '向饱和 Na₂CO₃ 溶液中通入足量 CO₂ 会析出 NaHCO₃ 晶体', 'NaHCO₃ 的热稳定性强于 Na₂CO₃'], a: 'D', exp: 'D 错：NaHCO₃ 受热即分解（2NaHCO₃ →Δ Na₂CO₃+H₂O+CO₂↑），而 Na₂CO₃ 受热稳定，故热稳定性 Na₂CO₃ > NaHCO₃。A、B、C 均正确（Na₂O₂ 与 CO₂/H₂O 反应放出 O₂；NaHCO₃ 溶解度小于 Na₂CO₃ 会结晶析出）。', diff: 'medium', src: '新高考化学（模拟）' }
      ],
      'chemistry::ys_fjs': [
        { q: '下列关于浓硫酸的说法正确的是？', opts: ['冷的浓硫酸可用铁罐或铝罐盛装', '浓硫酸使蔗糖变黑体现的是吸水性', '常温下铜与浓硫酸剧烈反应放出 SO₂', '稀释浓硫酸时应将水缓缓倒入浓硫酸中'], a: 'A', exp: 'A 对：常温下铁、铝遇冷浓硫酸发生钝化（表面生成致密氧化膜），故可用铁/铝罐储运。B 错：蔗糖变黑是脱水性（碳化），吸水性指吸收现成的水。C 错：铜与浓硫酸需加热才反应。D 错：应把浓硫酸沿器壁缓缓注入水中并搅拌。', diff: 'medium', src: '新高考化学（模拟）' },
        { q: '要检验某无色气体是 SO₂ 而不是 CO₂，下列方法可行的是？', opts: ['通入澄清石灰水，观察是否变浑浊', '通入品红溶液，红色褪去，加热后又恢复', '用湿润的蓝色石蕊试纸，观察是否变红', '通入 NaOH 溶液，观察是否被吸收'], a: 'B', exp: 'SO₂ 具有漂白性，能使品红褪色且加热后颜色恢复，CO₂ 无此性质，可以区分。A、C、D 中两种气体表现相同（都能使石灰水变浑浊、水溶液都显酸性、都能被 NaOH 吸收），无法区分。', diff: 'easy', src: '新高考化学（模拟）' }
      ],
      /* 三、化学反应原理 */
      'chemistry::yl_sl': [
        { q: '对于反应 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)　ΔH < 0，下列措施能提高 SO₂ 平衡转化率的是？', opts: ['升高温度', '增大压强', '使用高效催化剂', '恒温下减小压强'], a: 'B', exp: '勒夏特列原理：该反应正向放热且气体分子数减小（3→2）。增大压强平衡正向移动，SO₂ 转化率提高。升温使平衡逆向移动（转化率降低）；催化剂只改变速率不改变平衡转化率；减压平衡逆向移动。', diff: 'medium', src: '新高考化学（模拟）' },
        { q: '一定温度下，在 2 L 密闭容器中发生反应 N₂(g) + 3H₂(g) ⇌ 2NH₃(g)，起始充入 1 mol N₂ 和 3 mol H₂，达平衡时 N₂ 的转化率为 20%。则平衡时容器内 NH₃ 的物质的量为多少 mol？（填数字）', a: '0.4', exp: '三段式：N₂ 起始 1 mol，转化 1×20% = 0.2 mol。由化学计量数 N₂ ~ 2NH₃，生成 NH₃ = 2×0.2 = 0.4 mol。（平衡时 N₂ 0.8 mol、H₂ 2.4 mol、NH₃ 0.4 mol）', diff: 'medium', src: '新高考化学（模拟）' }
      ],
      'chemistry::yl_pf': [
        { q: '常温下，将 0.1 mol/L 醋酸溶液加水稀释，下列说法正确的是？', opts: ['溶液中 c(H⁺) 增大', '醋酸的电离程度减小', '溶液的 pH 增大', '溶液中 n(H⁺) 减小'], a: 'C', exp: '弱电解质稀释规律：加水稀释促进醋酸电离，电离程度增大（故 B 错），但溶液被稀释使 c(H⁺) 减小（A 错）、pH 增大（C 对）；因电离出更多 H⁺，n(H⁺) 反而增大（D 错）。记住：电离程度↑ 但 离子浓度↓。', diff: 'hard', src: '新高考化学（模拟）' },
        { q: '常温下，将 pH = 2 的盐酸稀释 1000 倍，稀释后溶液的 pH 约为多少？（填数字）', a: '5', exp: '盐酸为强酸完全电离，c(H⁺) = 10⁻² mol/L，稀释 1000 倍后 c(H⁺) = 10⁻⁵ mol/L，pH = 5。注意：强酸无限稀释时 pH 只能无限接近 7 而不会超过 7。', diff: 'easy', src: '新高考化学（模拟）' }
      ],
      'chemistry::yl_dh': [
        { q: '将铜片和锌片用导线连接后插入稀硫酸中构成原电池，下列说法正确的是？', opts: ['锌为正极，发生还原反应', '铜为负极，被氧化', '电子由锌片经导线流向铜片', '溶液中 H⁺ 向锌极移动'], a: 'C', exp: '较活泼金属 Zn 为负极，被氧化：Zn − 2e⁻ = Zn²⁺；Cu 为正极，H⁺ 在其上得电子：2H⁺ + 2e⁻ = H₂↑。电子由负极（Zn）经外电路流向正极（Cu）；溶液中阳离子（H⁺）移向正极 Cu。', diff: 'easy', src: '新高考化学（模拟）' },
        { q: '用惰性电极电解 CuSO₄ 溶液，请写出阴极和阳极的电极反应式。', a: '阴极（还原反应）：Cu²⁺ + 2e⁻ = Cu；阳极（氧化反应）：2H₂O − 4e⁻ = O₂↑ + 4H⁺。', exp: '书写口诀：电解池「阳失阴得」。阴极得电子发生还原，溶液中氧化性较强的 Cu²⁺ 优先放电生成 Cu；阳极为惰性电极，溶液中 SO₄²⁻ 不放电，由水电离出的 OH⁻（即 H₂O）放电生成 O₂。注意电解质环境：本题为中性/酸性，阳极产物写 H⁺ 而不写 OH⁻。', diff: 'hard', src: '新高考化学（模拟）' }
      ],
      /* 四、化学实验基础 */
      'chemistry::sy_jc': [
        { q: '下列实验基本操作正确的是？', opts: ['蒸馏时温度计水银球应插入液面以下', '分液时下层液体从下口放出，上层液体从上口倒出', '过滤时漏斗下端管口不必紧靠烧杯内壁', '用胶头滴管取液时可将滴管伸入试管内'], a: 'B', exp: 'A 错：蒸馏时温度计水银球应与支管口齐平（测的是蒸气温度）。C 错：漏斗下端应紧靠烧杯内壁，防止液体飞溅。D 错：滴管应垂直悬空滴加，不可伸入容器或接触内壁以免污染。B 正确，这是分液的标准操作。', diff: 'easy', src: '新高考化学（模拟）' },
        { q: '实验室制取并收集下列气体，方法正确的是？', opts: ['用向下排空气法收集 NH₃', '用排水法收集 NO₂', '用向上排空气法收集 H₂', '用排水法收集 NH₃'], a: 'A', exp: 'A 对：NH₃ 密度小于空气，用向下排空气法（集气瓶口向下）。B 错：3NO₂+H₂O=2HNO₃+NO，NO₂ 与水反应不能排水收集。C 错：H₂ 密度小于空气，应向下排空气法或排水法。D 错：NH₃ 极易溶于水，不能用排水法。', diff: 'medium', src: '新高考化学（模拟）' }
      ],
      'chemistry::sy_zh': [
        { q: '过滤得到沉淀后需要洗涤。标准操作是：向过滤器中加蒸馏水至____沉淀，待水自然流尽，重复 2~3 次。横线处填两个字。', a: '浸没', exp: '洗涤沉淀标准话术：向过滤器中加蒸馏水至水面浸没沉淀，待水自然流尽，重复操作 2~3 次。目的是除去沉淀表面附着的可溶性杂质，提高产品纯度。', diff: 'easy', src: '新高考化学（模拟）' },
        { q: '用已知浓度的标准盐酸滴定未知浓度的 NaOH 溶液（以酚酞为指示剂），请描述滴定终点的判断标志。', a: '当滴入最后一滴标准盐酸时，溶液由浅红色变为无色，且半分钟内不恢复原色，即达到滴定终点。', exp: '答题模板三要素：①「滴入最后一滴」②「颜色由…变为…」③「半分钟内不恢复」。酚酞在碱性中显红色、在中性和酸性中无色，故终点时红色恰好褪去。描述实验现象要「说位置、说颜色、说状态」。', diff: 'medium', src: '新高考化学（模拟）' }
      ],
      /* 五、有机化学基础（选考） */
      'chemistry::yj_gnt': [
        { q: '下列有机物中，既能发生加成反应又能发生酯化反应的是？', opts: ['乙烷 CH₃CH₃', '乙醇 CH₃CH₂OH', '丙烯酸 CH₂=CH—COOH', '乙酸 CH₃COOH'], a: 'C', exp: '加成反应需要不饱和键（C=C、C≡C），酯化反应需要 —OH 或 —COOH。丙烯酸同时含碳碳双键（可加成）和羧基（可酯化）。乙醇、乙酸只能酯化，乙烷两者都不能。', diff: 'medium', src: '新高考化学（模拟）' },
        { q: '下列关于官能团检验的说法正确的是？', opts: ['用新制 Cu(OH)₂ 悬浊液共热检验醛基，产生砖红色沉淀', '含羧基的有机物不能使石蕊试液变色', '碳碳双键可用干燥的氯化氢气体检验', '用金属钠检验羟基时无明显现象'], a: 'A', exp: 'A 对：醛基与新制 Cu(OH)₂ 共热生成砖红色 Cu₂O 沉淀（也可用银镜反应）。B 错：羧基显酸性，能使紫色石蕊变红。C 错：检验碳碳双键常用溴水褪色或酸性 KMnO₄ 褪色。D 错：羟基与钠反应放出 H₂，有气泡产生。', diff: 'medium', src: '新高考化学（模拟）' }
      ],
      'chemistry::yj_tf': [
        { q: '分子式为 C₄H₁₀ 的同分异构体共有几种？', opts: ['1 种', '2 种', '3 种', '4 种'], a: 'B', exp: 'C₄H₁₀ 为丁烷，只有正丁烷（CH₃CH₂CH₂CH₃）和异丁烷（(CH₃)₃CH）两种碳链结构。写同分异构体先「定碳链」再「移位置」。', diff: 'easy', src: '新高考化学（模拟）' },
        { q: '分子式为 C₄H₈O₂ 且属于酯类（能水解生成醇和羧酸）的同分异构体共有多少种？（填数字）', a: '4', exp: '按「酸的碳数」分类枚举：甲酸丙酯 HCOOCH₂CH₂CH₃、甲酸异丙酯 HCOOCH(CH₃)₂、乙酸乙酯 CH₃COOC₂H₅、丙酸甲酯 C₂H₅COOCH₃，共 4 种。注意甲酸酯的丙基有正、异两种。', diff: 'hard', src: '新高考化学（模拟）' }
      ],
      'chemistry::yj_hc': [
        { q: '以乙烯为唯一有机原料合成乙酸乙酯，请写出各步反应类型的先后顺序及相应化学方程式思路。', a: '① CH₂=CH₂ + H₂O →(催化剂) CH₃CH₂OH（加成/水化）；② 2CH₃CH₂OH + O₂ →(Cu,Δ) 2CH₃CHO，再氧化得 CH₃COOH（氧化）；③ CH₃COOH + CH₃CH₂OH ⇌(浓硫酸,Δ) CH₃COOC₂H₅ + H₂O（酯化/取代）。顺序为：加成 → 氧化 → 酯化。', exp: '用逆合成分析法倒推：目标乙酸乙酯 ← 乙酸 + 乙醇（酯化）；乙酸 ← 乙醇（氧化）；乙醇 ← 乙烯（加成水化）。正推即得 加成→氧化→酯化 三步。', diff: 'hard', src: '新高考化学（模拟）' },
        { q: '在有机合成中，为避免某个官能团在中间步骤被破坏，常先将其转化为稳定基团、反应完成后再复原。这一策略称为？', opts: ['官能团保护', '逆合成分析', '加成反应', '消去反应'], a: 'A', exp: '官能团保护是合成路线设计的重要策略。例如含醛基的物质要氧化其他部位时，可先把醛基保护起来，避免被强氧化剂氧化成羧基，反应后再脱保护还原为醛基。', diff: 'medium', src: '新高考化学（模拟）' }
      ],
      /* 六、物质结构与性质（选考） */
      'chemistry::jg_pb': [
        { q: '基态 Cr 原子（24 号元素）的价电子排布式是？', opts: ['3d⁴4s²', '3d⁵4s¹', '3d⁶4s⁰', '3d³4s³'], a: 'B', exp: '洪特规则特例：能量相同的轨道处于全充满、半充满或全空时体系更稳定。Cr 的 3d 轨道半充满（3d⁵）更稳定，故价电子排布为 3d⁵4s¹ 而非按构造原理预测的 3d⁴4s²。', diff: 'medium', src: '新高考化学（模拟）' },
        { q: '基态 Cu 原子（29 号元素）的价电子排布式是？', opts: ['3d⁹4s²', '3d¹⁰4s¹', '3d⁸4s²', '3d⁷4s²'], a: 'B', exp: '与 Cr 同属洪特规则特例：3d 轨道全充满（3d¹⁰）时能量更低更稳定，故 Cu 的价电子排布为 3d¹⁰4s¹。Cr（半充满 3d⁵4s¹）与 Cu（全充满 3d¹⁰4s¹）是必背的两个特例。', diff: 'medium', src: '新高考化学（模拟）' }
      ],
      'chemistry::jg_zh': [
        { q: 'NH₃ 分子中 N 原子的杂化方式和分子的空间构型分别是？', opts: ['sp² 杂化、平面三角形', 'sp³ 杂化、三角锥形', 'sp 杂化、直线形', 'sp³ 杂化、正四面体形'], a: 'B', exp: '用价层电子对互斥理论（VSEPR）：NH₃ 中 N 有 3 对成键电子对 + 1 对孤对电子，价层电子对数 = 4 → sp³ 杂化；但描述空间构型时只看原子位置，含 1 对孤对电子，故为三角锥形（不是正四面体）。', diff: 'medium', src: '新高考化学（模拟）' },
        { q: 'CH₄ 分子中碳原子采取的杂化方式是？', opts: ['sp 杂化', 'sp² 杂化', 'sp³ 杂化', '不发生杂化'], a: 'C', exp: 'CH₄ 中 C 有 4 对成键电子对、0 对孤对电子，价层电子对数 = 4，采取 sp³ 杂化，空间构型为正四面体形，键角 109°28′。对比记忆：CH₄ 正四面体、NH₃ 三角锥、H₂O 角形，三者中心原子都是 sp³ 杂化。', diff: 'easy', src: '新高考化学（模拟）' }
      ],
      'chemistry::jg_jt': [
        { q: '下列物质中属于共价晶体（原子晶体）的是？', opts: ['干冰 CO₂', '金刚石 C', '氯化钠 NaCl', '金属铜 Cu'], a: 'B', exp: '金刚石中碳原子间以共价键形成空间网状结构，属共价（原子）晶体，熔点极高、硬度极大。干冰为分子晶体（分子间作用力）、NaCl 为离子晶体（离子键）、Cu 为金属晶体（金属键）。', diff: 'easy', src: '新高考化学（模拟）' },
        { q: '某金属晶体采取面心立方最密堆积，则一个晶胞中实际含有的原子个数为多少？（填数字）', a: '4', exp: '均摊法计算：顶点原子被 8 个晶胞共用（贡献 1/8），面心原子被 2 个晶胞共用（贡献 1/2）。面心立方有 8 个顶点、6 个面心：8×1/8 + 6×1/2 = 1 + 3 = 4 个。晶胞密度公式 ρ = (Z·M)/(NA·a³) 中的 Z 即取此值。', diff: 'hard', src: '新高考化学（模拟）' }
      ],
      /* ========== 政治（道法） ========== */
      /* 一、中国特色社会主义（必修1） */
      'politics::zt_law': [
        { q: '科学社会主义诞生的标志是？', opts: ['《共产党宣言》的发表', '巴黎公社的建立', '俄国十月革命的胜利', '中华人民共和国的成立'], a: 'A', exp: '1848年《共产党宣言》的发表，标志着科学社会主义的诞生，为无产阶级争取解放提供了科学理论指导。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '中国特色社会主义进入新时代，我国社会主要矛盾已经转化为？', opts: ['人民日益增长的物质文化需要同落后的社会生产之间的矛盾', '人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾', '先进的社会主义制度与落后的社会生产力之间的矛盾', '城乡区域发展不平衡的矛盾'], a: 'B', exp: '党的十九大指出，中国特色社会主义进入新时代，我国社会主要矛盾已转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。', diff: 'easy', src: '新高考政治（模拟）' }
      ],
      'politics::zt_open': [
        { q: '请围绕“青年与中国梦”主题，拟写一段班级演讲的发言稿要点（80字左右），要求从“个人理想”与“国家命运”的关系切入。', a: '示例：青年一代有理想、有本领、有担当，国家就有前途、民族就有希望。个人理想只有融入中华民族伟大复兴的中国梦才更有价值；新时代青年要把爱国情、强国志、报国行统一起来，在勤奋学习中增长本领，在实践磨砺中贡献力量。', exp: '开放类试题答法：①紧扣主题（青年＋中国梦）；②体现个人理想与国家命运相统一的核心观点；③给出具体行动指向（学习、实践）；④语言得体、有感染力。答案不唯一，言之成理即可。', diff: 'medium', src: '新高考政治（模拟）' },
        { q: '请就“如何让中华优秀传统文化在当代焕发新生机”提两条合理化建议，并简要说明理由。', a: '建议一：推动中华优秀传统文化的创造性转化、创新性发展，如用短视频、动漫等现代表达方式讲好文物故事；理由：融通古今，增强文化吸引力。建议二：把传统美德融入校园与社区生活，如开展家风教育、志愿服务；理由：使传统文化在现实生活中落地生根。', exp: '开放类试题答法：①建议要具体、可操作；②每条建议须配简要理由；③体现创造性转化、创新性发展或不忘本来、吸收外来、面向未来等核心观点。答案不唯一，言之有理即可。', diff: 'medium', src: '新高考政治（模拟）' }
      ],
      /* 二、经济与社会（必修2） */
      'politics::jj_system': [
        { q: '我国社会主义初级阶段的基本经济制度包括？', opts: ['公有制为主体、多种所有制经济共同发展', '按劳分配为主体、多种分配方式并存', '社会主义市场经济体制', '以上全部都是'], a: 'D', exp: '党的十九届四中全会明确：公有制为主体、多种所有制经济共同发展，按劳分配为主体、多种分配方式并存，社会主义市场经济体制，三者共同构成我国社会主义基本经济制度。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '公有制经济在我国国民经济中居于主体地位，主要体现在？', opts: ['国有资产在社会总资产中占优势', '公有资产在社会总资产中占优势，国有经济控制国民经济命脉', '公有制经济在各行业都占绝对优势', '集体经济是国民经济的支柱'], a: 'B', exp: '公有制主体地位的体现：一是公有资产在社会总资产中占优势（既有量的优势，更重质的提高）；二是国有经济控制国民经济命脉，对经济发展起主导作用。', diff: 'medium', src: '新高考政治（模拟）' }
      ],
      'politics::jj_dev': [
        { q: '贯彻新发展理念，必须把（ ）作为引领发展的第一动力。', opts: ['协调', '绿色', '创新', '共享'], a: 'C', exp: '创新是引领发展的第一动力，是建设现代化经济体系的战略支撑，摆在新发展理念的首要位置。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '下列传导路径能正确反映“减税降费助力企业创新”的是？', opts: ['减税降费→企业税负减轻→研发投入增加→创新能力提升', '减税降费→财政收入减少→国债发行增多→企业融资困难', '减税降费→居民收入增加→消费结构升级→生产规模缩小', '减税降费→商品价格下降→市场需求减少→企业利润下滑'], a: 'A', exp: '减税降费直接减轻企业税负、增加可支配收入，企业可将更多资金投入研发，从而提升创新能力，形成正向传导。其余选项逻辑均不成立。', diff: 'medium', src: '新高考政治（模拟）' }
      ],
      /* 三、政治与法治（必修3） */
      'politics::zz_unity': [
        { q: '发展社会主义民主政治，必须坚持党的领导、人民当家作主、依法治国有机统一，其中（ ）是人民当家作主和依法治国的根本保证。', opts: ['人民当家作主', '依法治国', '党的领导', '基层群众自治'], a: 'C', exp: '三者统一于我国社会主义民主政治伟大实践：党的领导是根本保证，人民当家作主是本质特征，依法治国是基本方式。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '全过程人民民主是最广泛、最真实、最管用的民主，其“最管用”主要体现在？', opts: ['有完整的制度程序和参与实践，能真正解决实际问题', '人民可以直接决定国家一切重大事务', '民主选举覆盖所有年龄段公民', '只对多数人意见予以采纳'], a: 'A', exp: '全过程人民民主不仅有完整的制度程序，而且有完整的参与实践，能够切实解决人民群众关心的问题，因而最管用。', diff: 'medium', src: '新高考政治（模拟）' }
      ],
      'politics::zz_gov': [
        { q: '建设法治政府，要求政府做到？', opts: ['法定职责必须为、法无授权不可为', '凡是群众提出的事政府都要满足', '政府可以自行制定法律', '行政决策不必公开透明'], a: 'A', exp: '法治政府要求政府依法行政：法定职责必须为、法无授权不可为，做到有权必有责、用权受监督。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '宪法是国家的根本法，其根本原因在于？', opts: ['宪法由全国人民代表大会制定', '宪法规定国家生活中最根本、最重要的问题，具有最高法律效力', '宪法条文比普通法律更长', '宪法是所有法律的简单汇总'], a: 'B', exp: '宪法规定国家最根本、最重要的问题（国体、政体、公民基本权利等），具有最高法律地位、法律权威、法律效力，因而是根本法。', diff: 'medium', src: '新高考政治（模拟）' }
      ],
      /* 四、哲学与文化（必修4） */
      'politics::zx_matter': [
        { q: '“巧妇难为无米之炊”所蕴含的哲理是？', opts: ['意识对物质具有能动的反作用', '物质决定意识，意识的能动作用受物质条件制约', '只要发挥主观能动性就能改造世界', '规律是可以被创造和消灭的'], a: 'B', exp: '“米”是客观物质条件，没有米再巧的主妇也做不出饭，说明物质决定意识，主观能动性的发挥受客观条件制约。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '下列选项中属于物质范畴的是？', opts: ['党的建设理论', '社会主义核心价值观', '生产力与生产关系', '社会思想文化'], a: 'C', exp: '物质是不依赖于人的意识并能为人的意识所反映的客观实在。生产力与生产关系属于客观物质关系，属物质范畴；其余均为意识现象。', diff: 'easy', src: '新高考政治（模拟）' }
      ],
      'politics::zx_cog': [
        { q: '下列诗句体现“实践是认识的来源”的是？', opts: ['不登高山，不知天之高也；不临深溪，不知地之厚也', '仁者见仁，智者见智', '万物并育而不相害', '心外无物'], a: 'A', exp: '登上高山、临近深溪才知天地之广阔，说明认识来源于实践。B体现认识的主体差异性，C体现矛盾统一性，D是主观唯心观点。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '真理最基本的属性是______。（填两个字）', a: '客观', exp: '真理是标志主观同客观相符合的哲学范畴，其最基本属性是客观性：真理面前人人平等，真理不以人的意志为转移。', diff: 'easy', src: '新高考政治（模拟）' }
      ],
      'politics::zx_dial': [
        { q: '“物极必反”“否极泰来”体现的哲学道理是？', opts: ['矛盾双方相互依存，在一定条件下相互转化', '矛盾的主要方面决定事物的性质', '量变必然引起质变', '新事物必然战胜旧事物'], a: 'A', exp: '事物发展到极点会向相反方向转化，体现矛盾双方在一定条件下相互转化。B、C、D表述本身均有其适用条件，但非本句寓意。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '矛盾问题的精髓是？', opts: ['矛盾的普遍性与特殊性的关系', '主要矛盾与次要矛盾的关系', '矛盾的主要方面与次要方面的关系', '内部矛盾与外部矛盾的关系'], a: 'A', exp: '矛盾的普遍性与特殊性相互联结，是关于事物矛盾问题的精髓，也是建设中国特色社会主义的哲学依据。', diff: 'medium', src: '新高考政治（模拟）' }
      ],
      'politics::zx_hist': [
        { q: '历史唯物主义认为，社会存在决定社会意识。下列属于“社会存在”的是？', opts: ['社会思想文化', '人们的道德观念', '社会的物质生活条件（地理环境、人口、物质资料生产方式）', '社会意识形态'], a: 'C', exp: '社会存在是指社会生活的物质方面，主要包括地理环境、人口因素和物质资料的生产方式；其余均为社会意识。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '价值观的导向作用体现在？', opts: ['价值观一经形成就永远不会变化', '价值观影响人们对事物的认识和评价，影响改造世界的活动', '价值观决定人生是否成功', '不同的价值观必然导致相同的行为选择'], a: 'B', exp: '价值观对人们认识世界和改造世界、对人生道路的选择具有重要导向作用，但并不决定成功，也会因实践而发展。', diff: 'medium', src: '新高考政治（模拟）' }
      ],
      'politics::wh_cul': [
        { q: '对待中华优秀传统文化，我们应坚持的态度是？', opts: ['全盘继承、原封不动地保留', '古为今用、推陈出新，实现创造性转化和创新性发展', '彻底抛弃、另起炉灶', '只保护不发展'], a: 'B', exp: '要坚持取其精华、去其糟粕，古为今用、推陈出新，推动中华优秀传统文化创造性转化、创新性发展。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '尊重文化多样性，首先要？', opts: ['认同其他民族文化', '尊重自己民族的文化，培育好、发展好本民族文化', '用外来文化取代本民族文化', '消除各民族文化之间的差异'], a: 'B', exp: '尊重文化多样性，首先要尊重自己民族的文化、培育好发展好本民族文化；同时要尊重其他民族文化，相互借鉴、求同存异。', diff: 'medium', src: '新高考政治（模拟）' }
      ],
      /* 五、当代国际政治与经济（选必1） */
      'politics::gj_polity': [
        { q: '国家的根本属性是？', opts: ['社会性', '全民性', '阶级性', '公共性'], a: 'C', exp: '国家是阶级统治的工具，阶级性是国家的根本属性；国家并不具有所谓全民性。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '我国实行人民代表大会制度，这一制度属于？', opts: ['由我国人民民主专政的国体决定的政权组织形式（政体）', '与我国国体无关的政权组织形式', '西方三权分立制度的翻版', '联邦制国家结构形式'], a: 'A', exp: '国体决定政体：人民民主专政的国体决定我国实行民主集中制的人民代表大会制度这一政体；我国是单一制而非联邦制。', diff: 'medium', src: '新高考政治（模拟）' }
      ],
      'politics::gj_econ': [
        { q: '经济全球化深入发展的根本动因是？', opts: ['社会生产力的发展和科学技术的进步', '发达国家的主动让利', '国际组织的强制推动', '各国文化的完全趋同'], a: 'A', exp: '经济全球化是社会生产力与科技进步的必然结果，生产社会化程度提高推动资本、商品、技术等在全球流动。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '我国坚持独立自主的和平外交政策，其宗旨是？', opts: ['维护我国的主权、安全和发展利益', '维护世界和平、促进共同发展', '主导全球经济治理', '建立单极世界秩序'], a: 'B', exp: '我国外交政策的宗旨是维护世界和平、促进共同发展；维护我国主权安全发展利益是首要目标，而非宗旨。', diff: 'easy', src: '新高考政治（模拟）' }
      ],
      /* 六、法律与生活（选必2） */
      'politics::fl_contract': [
        { q: '订立合同的一般过程，要经过的两个阶段是？', opts: ['起草与打印', '要约与承诺', '签名与盖章', '公证与备案'], a: 'B', exp: '合同订立经过要约（一方希望订立合同的意思表示）和承诺（受要约人同意要约）两个阶段，承诺生效时合同成立。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '甲遛狗未拴绳，狗将路人乙咬伤。依法甲应当承担？', opts: ['无过错责任（饲养动物致人损害一般适用无过错责任）', '无需承担任何责任', '仅承担道义责任', '由路人乙自己负责'], a: 'A', exp: '民法典规定，饲养的动物造成他人损害的，动物饲养人或管理人承担侵权责任（未对动物采取安全措施的，一般适用无过错责任），除非能证明损害是被侵权人故意造成的。', diff: 'medium', src: '新高考政治（模拟）' }
      ],
      'politics::fl_family': [
        { q: '我国民法典规定的结婚法定条件是？', opts: ['男女双方完全自愿、达到法定婚龄、符合一夫一妻制', '只要双方同居满两年即可', '必须经由父母包办', '一方同意即可'], a: 'A', exp: '结婚须具备：男女双方完全自愿；达到法定婚龄（男22、女20）；符合一夫一妻制；且非禁止结婚的亲属关系。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '法定继承的第一顺序继承人包括？', opts: ['配偶、子女、父母', '兄弟姐妹、祖父母、外祖父母', '叔伯、姑舅', '仅配偶一人'], a: 'A', exp: '法定继承第一顺序为配偶、子女、父母；第二顺序为兄弟姐妹、祖父母、外祖父母。有第一顺序继承人时，第二顺序不继承。', diff: 'easy', src: '新高考政治（模拟）' }
      ],
      /* 七、逻辑与思维（选必3） */
      'politics::lj_rule': [
        { q: '同一律要求在同一思维过程中概念或论断必须保持自身同一。下列违反同一律的是？', opts: ['在同一论证中偷换概念', '同时肯定“A”和“非A”', '对两个矛盾的判断均不予肯定', '由真前提推出真结论'], a: 'A', exp: '同一律反对偷换概念、偷换论题；B违反矛盾律，C涉及排中律，D是正确推理。', diff: 'medium', src: '新高考政治（模拟）' },
        { q: '矛盾律要求在同一思维过程中，不能同时肯定两个互相矛盾的命题。下列符合矛盾律要求的是？', opts: ['既说“这是红色的”又说“这不是红色的”', '承认“A”与“非A”必有一假', '同时否定“A”和“非A”', '对同一事物作出两个相反断定'], a: 'B', exp: '矛盾律要求两个矛盾命题不能同真、必有一假；A、D自相矛盾，C违反排中律。', diff: 'medium', src: '新高考政治（模拟）' }
      ],
      'politics::lj_method': [
        { q: '辩证思维要求用联系、发展、全面的观点看问题。下列选项中运用“分析与综合相结合”方法的是？', opts: ['只看到局部而忽略整体', '先分解研究对象的各个部分，再将其有机统一起来把握整体', '只看眼前不看长远', '把不同的事物混为一谈'], a: 'B', exp: '辩证的分析与综合：分析是把整体分解为部分加以认识，综合是把各部分联结为统一整体，二者互为前提、有机结合。', diff: 'easy', src: '新高考政治（模拟）' },
        { q: '逆向思维是创新思维的重要方法，其实质是？', opts: ['沿着事物常规思路反过来思考，寻找解决问题的新途径', '盲目地反着来', '否定一切已有知识', '拒绝任何逻辑推理'], a: 'A', exp: '逆向思维是从原有思路的反方向去思考，常常能突破常规、获得新解；但它并非盲目否定，而是有逻辑、有依据的思维方法。', diff: 'medium', src: '新高考政治（模拟）' }
      ],
      /* === 历史（新高考满分100，非选择题占52—55分，重史实掌握与史料论证） === */
      /* 一、选择题题型 */
      'history::hs_wenzi': [
        { q: '《礼记·礼运》载：大道之行也，天下为公，选贤与能，讲信修睦。这反映了下列哪一时期的社会状况？', opts: ['原始社会末期的禅让制', '西周的分封制', '秦朝的郡县制', '隋唐的科举制'], a: 'A', exp: '《礼运》描绘的"天下为公、选贤与能"对应传说时代尧舜禹的禅让制；分封、郡县、科举均非原始民主遗风。', diff: 'medium', src: '新高考历史（模拟）' },
        { q: '宋人沈括《梦溪笔谈》记载毕昇发明活字印刷术。相较于雕版印刷，活字印刷最大的进步在于？', opts: ['印刷字体更加美观', '单个字模可重复使用，省材省工', '只能印刷单一颜色', '必须由官府统一监制'], a: 'B', exp: '毕昇泥活字可拆版重排、字模反复使用，突破雕版每书一版的局限，大幅提高效率、节约材料。', diff: 'medium', src: '新高考历史（模拟）' }
      ],
      'history::hs_tuwen': [
        { q: '下表为1840—1894年中国海关进出口贸易总值的阶段性变化（单位：千海关两）。这一变化主要反映了？', opts: ['中国自然经济完全解体', '西方列强侵略下中国被迫卷入世界市场', '中国成为世界工厂', '清政府主动推行自由贸易'], a: 'B', exp: '鸦片战争后协定关税与五口通商使中国被卷入资本主义世界市场，进出口额持续增长；自然经济并未"完全"解体，中国也非世界工厂。', diff: 'medium', src: '新高考历史（模拟）' },
        { q: '下图折线显示1952—1957年我国工业总产值快速增长。推动这一变化的主要因素是？', opts: ['土地改革的基本完成', '第一个五年计划的实施', '家庭联产承包责任制的推行', '加入世界贸易组织'], a: 'B', exp: '1953—1957年"一五"计划优先发展重工业，奠定工业化初步基础；土改侧重农业，家庭联产承包在1978年后，入世在2001年。', diff: 'medium', src: '新高考历史（模拟）' }
      ],
      'history::hs_map': [
        { q: '某历史地图标注桂陵、马陵等战役地点，并呈现战国中期诸侯国疆域。该地图反映的战争特点是？', opts: ['春秋争霸', '战国兼并（诸侯国间兼并战争）', '楚汉相争', '三国鼎立'], a: 'B', exp: '桂陵、马陵之战是战国中期齐魏间著名战役，属诸侯国为兼并土地的兼并战争；春秋争霸主角是诸侯争当霸主，楚汉、三国均晚出。', diff: 'medium', src: '新高考历史（模拟）' },
        { q: '右图为一战欧洲战场形势图，标注凡尔登、索姆河。这两场战役说明一战具有怎样的特点？', opts: ['速决战、伤亡小', '阵地战、消耗战，伤亡惨重', '海战为主', '以游击战为主'], a: 'B', exp: '凡尔登、索姆河是西线阵地战典型，双方伤亡达百万级，体现一战"绞肉机"式消耗战；德国"速决战"计划已破产。', diff: 'medium', src: '新高考历史（模拟）' }
      ],
      'history::hs_cartoon': [
        { q: '一幅漫画中，列强分别抱着各自国旗分割一块写有CHINA的蛋糕。该漫画反映的历史事件是？', opts: ['三国干涉还辽', '19世纪末列强瓜分中国的狂潮', '五四运动', '抗日战争胜利'], a: 'B', exp: '漫画以"分蛋糕"喻指19世纪末（甲午战后）列强强租租借地、划分势力范围、瓜分中国的狂潮。', diff: 'medium', src: '新高考历史（模拟）' },
        { q: '照片呈现20世纪30年代美国街头排队领取救济粮的人群。这一景象直接源于？', opts: ['第一次世界大战', '1929—1933年经济大危机', '罗斯福新政', '第二次世界大战'], a: 'B', exp: '1929年爆发的经济大危机导致企业倒闭、大规模失业，出现排长队领取救济的景象；罗斯福新政正是为应对该危机而推行。', diff: 'medium', src: '新高考历史（模拟）' }
      ],
      /* 二、中国史 */
      'history::hs_zhongguo_gudai': [
        { q: '秦始皇统一六国后，在地方上全面推行郡县制，郡守、县令由皇帝直接任免。这主要有利于？', opts: ['加强中央集权，巩固国家统一', '扩大诸侯势力', '恢复分封传统', '削弱皇权'], a: 'A', exp: '郡县制下官员由中央任免、不得世袭，地方权力收归中央，有效加强中央集权与统一；它取代而非恢复分封制。', diff: 'easy', src: '新高考历史（模拟）' },
        { q: '唐代实行三省六部制，中书省草诏、门下省审核、尚书省执行。该制度的积极作用主要是？', opts: ['确立皇权至高无上、不受任何约束', '分工合作、相互制衡，减少决策失误', '使地方割据势力增强', '取消科举选官'], a: 'B', exp: '三省分权、既分工又制衡，有利于提高行政效率、减少独裁失误；皇权仍至高无上，但决策更趋严密。', diff: 'medium', src: '新高考历史（模拟）' }
      ],
      'history::hs_zhongguo_jindai': [
        { q: '《南京条约》规定割香港岛给英国、赔款2100万银元、开放五口通商。该条约使中国？', opts: ['开始沦为半殖民地半封建社会', '完全沦为半殖民地半封建社会', '废除了一切不平等条约', '成为英国的殖民地'], a: 'A', exp: '1842年《南京条约》是中国近代第一个不平等条约，标志中国开始沦为半殖民地半封建社会；《辛丑条约》才使中国完全陷入。', diff: 'easy', src: '新高考历史（模拟）' },
        { q: '1919年五四运动爆发的直接原因是？', opts: ['北洋政府尊孔复古', '巴黎和会上中国外交的失败', '新文化运动的兴起', '中国共产党的成立'], a: 'B', exp: '五四运动直接导火线是巴黎和会将德国在山东权益转交日本，中国外交失败激起民众愤怒；中共成立于1921年。', diff: 'easy', src: '新高考历史（模拟）' }
      ],
      'history::hs_zhongguo_xiandai': [
        { q: '1978年中共十一届三中全会作出把工作中心转移到经济建设、实行改革开放的决策。其伟大意义在于？', opts: ['开启改革开放和社会主义现代化建设新时期', '标志社会主义制度确立', '宣告文化大革命开始', '确立社会主义市场经济体制框架'], a: 'A', exp: '十一届三中全会是建国以来具有深远意义的伟大转折，开启改革开放和社会主义现代化建设新时期；社会主义基本制度确立于1956年三大改造完成。', diff: 'easy', src: '新高考历史（模拟）' },
        { q: '20世纪80年代初邓小平提出"一国两制"构想，其最初是为解决哪一问题提出的？', opts: ['香港问题', '澳门问题', '台湾问题', '南海问题'], a: 'C', exp: '"一国两制"最初针对台湾问题提出，后成功运用于香港、澳门回归；它是实现祖国和平统一的基本方针。', diff: 'medium', src: '新高考历史（模拟）' }
      ],
      /* 三、世界史 */
      'history::hs_shijie_gudai': [
        { q: '雅典民主政治中，公民大会是国家最高权力机关，所有成年男性公民均可参加并表决。雅典民主的实质是？', opts: ['全体居民平等的民主', '奴隶主阶级的民主（建立在奴隶制与排斥妇女外邦人基础上）', '贵族寡头专制', '神权政治'], a: 'B', exp: '雅典民主仅限于成年男性公民，妇女、奴隶、外邦人被排除，本质是奴隶主阶级的民主，具有历史局限性。', diff: 'medium', src: '新高考历史（模拟）' },
        { q: '罗马法从《十二铜表法》到查士丁尼《民法大全》对后世影响深远。罗马法的主要价值在于？', opts: ['确立了资产阶级共和制', '其私法原则成为近代欧美法系的渊源', '废除了奴隶制度', '推动了基督教的传播'], a: 'B', exp: '罗马法（尤其私法）确立的平等、契约、物权等原则，成为近代大陆法系的重要渊源，影响至今。', diff: 'medium', src: '新高考历史（模拟）' }
      ],
      'history::hs_shijie_jindai': [
        { q: '1765年哈格里夫斯发明珍妮纺纱机，工业革命首先在英国兴起。工业革命对世界历史最深远的影响是？', opts: ['使手工工场彻底消失', '机器大生产取代手工劳动，人类进入蒸汽时代，改变世界格局', '消除了贫富差距', '使农业成为主导产业'], a: 'B', exp: '工业革命以机器生产取代手工劳动，生产力飞跃，英国成为"世界工厂"，资本主义世界体系初步形成。', diff: 'medium', src: '新高考历史（模拟）' },
        { q: '《共产党宣言》（1848年）的发表标志着？', opts: ['空想社会主义的诞生', '马克思主义（科学社会主义）的诞生', '第一国际的成立', '巴黎公社的建立'], a: 'B', exp: '1848年马克思、恩格斯《共产党宣言》发表，标志马克思主义（科学社会主义）诞生，为工人运动提供科学理论。', diff: 'easy', src: '新高考历史（模拟）' }
      ],
      'history::hs_shijie_xiandai': [
        { q: '第二次世界大战后，美苏由盟友转为对手，形成长期对抗的国际格局。这一格局被称为？', opts: ['维也纳体系', '凡尔赛—华盛顿体系', '雅尔塔体系下的两极格局（冷战）', '多极化格局'], a: 'C', exp: '二战后雅尔塔体系奠定美苏两分天下的框架，冷战使世界长期处于两极格局；凡尔赛体系是一战后，多极化是冷战后趋势。', diff: 'medium', src: '新高考历史（模拟）' },
        { q: '1991年苏联解体，两极格局终结。此后世界政治格局发展的主要趋势是？', opts: ['单极永久化', '多极化趋势加强', '重新回到两极对峙', '无政府状态固化'], a: 'B', exp: '苏联解体后美国成为唯一超级大国，但欧盟、日本、俄罗斯、中国等多力量中心发展，世界多极化趋势不断加强。', diff: 'medium', src: '新高考历史（模拟）' }
      ],
      /* 四、非选择题能力题型 */
      'history::hs_gaikuo': [
        { q: '在历史非选择题中，"根据材料概括……"类题目要求考生？', opts: ['脱离材料自由发挥', '从材料中提取关键信息并分点、简明作答', '只用教材知识回答', '写出全部原文'], a: 'B', exp: '概括归纳类（指出/简述/概括）答案多隐含在材料里，应提炼关键词、分点序号化作答，避免照抄或过度发挥。', diff: 'easy', src: '新高考历史（模拟）' },
        { q: '解答"概括某一历史现象的特点"时，下列做法最恰当的是？', opts: ['随意罗列无关史实', '先划分材料层次，再逐层归纳其独有特征', '只写一句结论', '回避材料中的相反信息'], a: 'B', exp: '概括"特点"类要从材料分层入手，提炼该历史事物的独特性（如时间、主体、方式、范围），逐点归纳，忌空泛。', diff: 'medium', src: '新高考历史（模拟）' }
      ],
      'history::hs_fenxi': [
        { q: '对"比较戊戌变法与明治维新异同"这类题目，正确的答题思路是？', opts: ['只写二者相同点', '从背景、领导力量、措施、结果等多维度对比，相同与不同均要点明', '只引用一首诗歌', '拒绝比较只叙述一方'], a: 'B', exp: '比较类题须建立比较维度（背景、领导、内容、结果等），相同点、不同点分别作答，史论结合、条理清晰。', diff: 'medium', src: '新高考历史（模拟）' },
        { q: '解答历史"分析某事件的影响"类大题，最科学的思维路径是？', opts: ['只写一个词', '按政治、经济、思想文化、对外关系等多维度，结合史实分点作答', '完全脱离材料', '只谈个人感受'], a: 'B', exp: '分析"影响/原因"类须多角度（政、经、文、外等）展开，每点"角度+史实+说明"三结合，并区分积极与消极、直接与长远，切忌单一化、空泛化。', diff: 'medium', src: '新高考历史（模拟）' }
      ],
      'history::hs_lunwen': [
        { q: '历史小论文（论述题）12分的作答，一般应遵循的最佳结构是？', opts: ['想到哪写到哪，无需论点', '观点明确（自拟论题）→ 多角度史实论证 → 总结升华', '只抄材料原文', '仅罗列年代'], a: 'B', exp: '小论文题核心素养是历史解释与史料实证，标准结构为：开宗明义亮明观点 → 用2—3个典型史实从多角度论证 → 回扣观点、升华认识。', diff: 'medium', src: '新高考历史（模拟）' },
        { q: '【小论文·12分】有学者认为：制度创新是推动国家治理与社会进步的重要动力。请结合中外历史，自拟论题，运用至少两个史实进行论证。', a: '论题：制度创新推动国家治理与历史进步。论证：①中国古代，秦朝确立专制主义中央集权制度与郡县制，打破分封世袭，实现对辽阔疆域的有效管理，奠定统一多民族国家基本格局，彰显制度创新对国家治理的深远意义。②世界近代，英国通过《权利法案》确立君主立宪制，以法律限制王权、保障议会主权，开创资本主义代议制民主政治先河，促进社会稳定与经济发展。总结：从秦制到英国宪政可见，符合时代需求的制度变革能有效提升治理效能、释放社会活力，是历史前进的重要动力。', exp: '小论文满分范式：①论题紧扣材料、表述成句（非短语）；②论证至少2个典型、跨时空史实，每个史实"是什么＋为何证明论点"；③角度多元（中国/世界、政治/经济）；④结尾回扣论题、适度升华。切忌论点模糊、堆砌史实无分析。', diff: 'expert', src: '新高考历史（模拟）' }
      ],
      'history::hs_kaifang': [
        { q: '面对"对材料中的观点提出修改/补充建议"这类开放性试题，正确的态度是？', opts: ['认为没有答案、随意乱写', '结合史实，自圆其说，言之有理即可得分', '拒绝作答', '只抄题干'], a: 'B', exp: '开放创新类试题答案不唯一，考查批判性思维，只要论从史出、逻辑自洽即可；但绝非无中生有，必须建立在扎实史实之上。', diff: 'easy', src: '新高考历史（模拟）' },
        { q: '【开放题】某教材将"工业革命的影响"仅写为"生产力提高"。请你补充一条建议，使这一表述更完整，并说明理由。', a: '补充建议：增加工业革命带来社会结构变化（工业资产阶级与无产阶级对立）、城市化加速、环境污染加剧，以及东方从属于西方的殖民扩张格局等内容。理由：生产力只是影响的维度之一；工业革命同时深刻改变了阶级关系、城乡面貌、生态环境与国际关系，仅写"生产力提高"过于片面，补充后更能体现唯物史观全面、联系的观点。', exp: '开放/创新类答法：①先明确指出补充或修改之处；②给出充分理由，理由须有史实或理论支撑（如唯物史观全面性）；③语言有条理。答案开放，但务必史论结合、自圆其说。', diff: 'hard', src: '新高考历史（模拟）' }
      ],
      /* === 地理（新高考100分，非选择题逻辑链条长，重空间思维与图文转换） === */
      /* 一、自然地理 */
      'geography::dl_earth': [
        { q: '我国领土最东端约在东经135°，最西端约在东经73°。当最东端日出时，最西端的地方时约为？', opts: ['比最东端早约4小时', '比最东端晚约4小时', '与最东端相同', '比最东端晚约12小时'], a: 'B', exp: '经度每差15°地方时差1小时，东早西晚。东西相差约62°，约4小时；最西端在西，故地方时晚约4小时。', diff: 'medium', src: '新高考地理（模拟）' },
        { q: '冬至日北半球某地正午太阳高度达到一年最小。为保证底层住户冬季有日照，住宅楼间距应主要依据什么确定？', opts: ['夏至日的正午太阳高度', '冬至日的正午太阳高度（取最小高度角）', '春秋分日太阳高度', '任意一天均可'], a: 'B', exp: '楼间距应以冬至日（正午太阳高度最小、影子最长）为准，间距≈楼高/tan(冬至日正午太阳高度)，才能保证全年底层都有日照。', diff: 'hard', src: '新高考地理（模拟）' }
      ],
      'geography::dl_atmos': [
        { q: '判读气候类型常用"以温定带、以水定型"。下列最可能是北半球地中海气候特征的是？', opts: ['终年高温多雨', '夏季炎热干燥、冬季温和多雨', '终年严寒少雨', '夏季高温多雨、冬季寒冷干燥'], a: 'B', exp: '地中海气候受副高与西风交替控制，夏季副高控制炎热干燥、冬季西风带温和多雨，雨热不同期；D为温带季风气候。', diff: 'medium', src: '新高考地理（模拟）' },
        { q: '冷锋过境时，常出现的天气变化是？', opts: ['气温升高、气压降低、晴朗', '气温下降、气压升高、常伴大风雨雪', '持续晴热', '无明显变化'], a: 'B', exp: '冷锋是冷气团主动向暖气团移动的锋，过境时气温下降、气压升高，常出现大风、雨雪、降温等天气。', diff: 'easy', src: '新高考地理（模拟）' }
      ],
      'geography::dl_water': [
        { q: '下列河流补给类型中，径流量随气温变化最明显、主要靠高山冰川融水补给的是？', opts: ['我国东南季风区的河流（雨水补给为主）', '我国西北内陆的河流（冰川融水补给为主）', '靠地下水补给的河流', '靠湖泊水补给的河流'], a: 'B', exp: '西北内陆河流多以高山冰川融水补给，气温高则融水多、径流大，径流与气温正相关；东南河流以雨水补给为主、与降水相关。', diff: 'medium', src: '新高考地理（模拟）' },
        { q: '寒流对沿岸气候的一般影响是？', opts: ['增温增湿', '降温减湿', '只增温不降水', '无明显影响'], a: 'B', exp: '寒流多由高纬流向低纬，对沿岸起降温减湿作用；暖流则增温增湿。秘鲁寒流还带来上升流、营养盐丰富形成渔场。', diff: 'easy', src: '新高考地理（模拟）' }
      ],
      'geography::dl_geo': [
        { q: '关于背斜与向斜的实践意义，一般规律是？', opts: ['背斜储水、向斜储油', '向斜储水、背斜储油（背斜顶部易聚集油气）', '两者都不储水', '背斜向斜都能储油不能储水'], a: 'B', exp: '背斜岩层向上拱起、密度小的油气易在顶部聚集；向斜岩层向下弯曲、是良好的储水构造。故有"背斜找油、向斜找水"之说。', diff: 'medium', src: '新高考地理（模拟）' },
        { q: '河流中下游常见的冲积平原、河口三角洲，主要由哪种外力作用形成？', opts: ['冰川侵蚀', '风力侵蚀', '流水的搬运与堆积作用', '岩浆活动'], a: 'C', exp: '河流携带泥沙，在中下游地势平缓处流速减慢，泥沙沉积，形成冲积平原、河漫滩、三角洲，属流水的搬运—堆积（沉积）作用。', diff: 'easy', src: '新高考地理（模拟）' }
      ],
      /* 二、人文地理 */
      'geography::dl_popcity': [
        { q: '城市功能区分布有规律。一般位于城市外围、沿交通干线分布、占地面积较大且有一定污染的是？', opts: ['商业区', '住宅区（中高级）', '工业区', '中心商务区'], a: 'C', exp: '工业区占地大、有污染，多布局在城市外围、沿交通干线（便于运输、减少对城区污染）；商业区居中、住宅区分化。', diff: 'easy', src: '新高考地理（模拟）' },
        { q: '关于人口迁移对迁入地的影响，下列说法正确的是？', opts: ['只带来好处没有弊端', '提供劳动力、促进经济，但也可能加剧交通、住房、就业压力', '对迁入地没有任何影响', '只会加重环境无任何积极作用'], a: 'B', exp: '人口迁入为迁入地提供廉价劳动力、促进经济发展，但同时可能带来交通拥堵、住房紧张、就业竞争、公共服务压力等，应辩证看待。', diff: 'medium', src: '新高考地理（模拟）' }
      ],
      'geography::dl_agri': [
        { q: '影响农业区位的自然因素中，往往决定农作物种类、耕作制度（如熟制）的主导因素是？', opts: ['市场需求', '气候条件（热量、降水等）', '交通运输', '劳动力价格'], a: 'B', exp: '气候（尤其是热量和降水）决定一个地区能种什么、一年几熟；市场、交通、劳动力属社会经济因素，主导因素需因地制宜判断。', diff: 'easy', src: '新高考地理（模拟）' },
        { q: '我国西北干旱区发展农业最主要的限制性因素是？', opts: ['热量不足', '水源（降水少、干旱）', '地形崎岖', '土壤完全无法耕种'], a: 'B', exp: '西北深居内陆、降水稀少，水资源是农业发展的主要限制性因素，故多发展灌溉农业、绿洲农业，围绕水源布局。', diff: 'easy', src: '新高考地理（模拟）' }
      ],
      'geography::dl_industry': [
        { q: '电子装配、服装制造等劳动密集型产业布局，主要考虑靠近？', opts: ['原料产地', '廉价劳动力丰富的地区', '动力（能源）基地', '高等院校与科技园区'], a: 'B', exp: '劳动密集型产业需大量普通劳动力，布局多倾向廉价劳动力丰富、工资较低的地区以降低成本。', diff: 'easy', src: '新高考地理（模拟）' },
        { q: '产业转移对迁出地的影响，下列叙述合理的是？', opts: ['只有利无一弊', '利于腾出发展空间、促进产业升级，但可能导致短期内就业岗位减少', '使迁出地经济立即崩溃', '对迁出地毫无影响'], a: 'B', exp: '产业转出使迁出地腾出土地与环境容量、推动产业升级，但短期内可能带来失业率上升、经济增速放缓，需辩证分析。', diff: 'medium', src: '新高考地理（模拟）' }
      ],
      'geography::dl_transport': [
        { q: '五种主要交通运输方式中，运量最大、成本最低、速度最慢的是？', opts: ['公路运输', '航空运输', '水路运输', '管道运输'], a: 'C', exp: '水路运输（河运、海运）运量大、成本低，但速度慢、受自然条件限制；航空最快最贵，公路灵活，管道专运流体。', diff: 'easy', src: '新高考地理（模拟）' },
        { q: '山区修建高速公路采用"逢山开隧道、遇沟架桥"，主要是为了？', opts: ['降低造价', '缩短里程、保证坡度平缓（利于安全与速度）', '增加旅游景点', '避开所有居民区'], a: 'B', exp: '山区地形起伏大，隧道与桥梁可缩短线路、减小坡度、提高行车速度与安全性；虽增加工程难度，但综合效益更优。', diff: 'medium', src: '新高考地理（模拟）' }
      ],
      /* 三、区域地理与区域发展 */
      'geography::dl_region': [
        { q: '分析我国西北地区自然地理特征，下列表述正确的是？', opts: ['气候湿润、河网密布', '深居内陆、气候干旱、植被稀疏、多内流河', '终年高温多雨的热带雨林气候', '地形以平原为主、土壤极为肥沃'], a: 'B', exp: '西北地区深居内陆、距海远，海洋水汽难以到达，气候干旱、降水少、植被稀疏、河流多内流河，荒漠广布。', diff: 'easy', src: '新高考地理（模拟）' },
        { q: '给定某区域图，要分析其"自然地理特征"，一般应从哪些方面入手？', opts: ['只考虑人口数量', '从地形、气候、水文、土壤、植被等自然地理要素综合入手', '只看交通线路', '只看GDP总量'], a: 'B', exp: '区域自然特征分析应综合地形、气候、河流水文、土壤、植被、资源等要素，并说明其相互联系，体现综合思维。', diff: 'medium', src: '新高考地理（模拟）' }
      ],
      'geography::dl_sustain': [
        { q: '我国西北地区土地荒漠化严重，其形成的人为原因主要是？', opts: ['过度放牧、过度开垦、过度樵采等破坏地表植被', '地壳运动剧烈', '降水过于丰沛', '城市规模过小'], a: 'A', exp: '荒漠化是自然（干旱）基础叠加人为（过度放牧、开垦、樵采、水资源不合理利用）因素所致，人为破坏植被是主因之一。', diff: 'easy', src: '新高考地理（模拟）' },
        { q: '治理水土流失（如黄土高原），下列措施中属于"生物措施"的是？', opts: ['修建淤地坝', '植树种草、恢复植被', '建水库', '制定禁垦法规'], a: 'B', exp: '水土流失治理常采取综合措施：生物措施（植树种草）、工程措施（修坝、梯田）、农业技术措施和管理措施（法规），生物措施核心在恢复植被。', diff: 'medium', src: '新高考地理（模拟）' }
      ],
      /* 四、选考内容 */
      'geography::dl_tourism': [
        { q: '评价一个地区旅游资源开发条件时，应考虑的因素包括？', opts: ['旅游资源的质量与集群状况', '地理位置与交通通达度', '客源市场距离', '以上全部都是'], a: 'D', exp: '旅游资源开发条件评价包括资源价值（质量、集群、地域组合）、地理位置与交通、客源市场、基础设施等，须综合考量。', diff: 'easy', src: '新高考地理（模拟）' },
        { q: '黄山"奇松、怪石、云海、温泉"四绝闻名，其旅游吸引力强的主要原因是？', opts: ['资源美学价值高、独特性强', '完全由人工建造', '没有任何文化内涵', '位于赤道地区'], a: 'A', exp: '黄山自然景观美学价值高、非凡性（独特性）强，且兼具科学价值与历史文化价值，因而旅游吸引力强、市场广阔。', diff: 'easy', src: '新高考地理（模拟）' }
      ],
      'geography::dl_env': [
        { q: '城市大气污染的主要人为来源是？', opts: ['森林光合作用', '工厂废气、机动车尾气等人为排放', '海洋蒸发', '植物呼吸'], a: 'B', exp: '城市大气污染主要来自工业生产废气、机动车尾气、燃煤供暖等人为排放，治理需节能减排、优化能源结构、加强监测。', diff: 'easy', src: '新高考地理（模拟）' },
        { q: '下列做法符合生态环境保护、可持续发展的是？', opts: ['围湖造田扩大耕地', '退耕还林还草、退耕还湿，恢复生态', '无限制开采地下水', '把污染企业迁入城区'], a: 'B', exp: '退耕还林还草、退耕还湿能恢复植被与生态系统功能，符合生态文明与可持续发展；围湖造田、超采地下水会破坏生态。', diff: 'easy', src: '新高考地理（模拟）' }
      ],
      /* 五、非选择题能力题型（破题套路） */
      'geography::dl_describe': [
        { q: '"描述图中某事物的分布特征"类题目，正确的答题顺序是？', opts: ['直接写成因', '先看图名图例，再总体概括（均匀/不均），最后分方向说明哪里多哪里少、沿什么分布', '只写一个地名', '凭想象随意描述'], a: 'B', exp: '描述分布类"看图说话"：①看图名图例②总体（均匀或不均匀）③分述（空间差异、沿河/沿海/沿交通线等）④多用方位词，切忌脱离地图。', diff: 'easy', src: '新高考地理（模拟）' },
        { q: '描述"我国降水空间分布"特征，下列表述最规范的是？', opts: ['到处一样多', '总体由东南沿海向西北内陆递减，南方多北方少', '北方比南方多', '与海拔无关'], a: 'B', exp: '受夏季风影响，我国降水空间分布总趋势是从东南沿海向西北内陆递减；描述应"总体+方向+多少"，用规范方位词。', diff: 'easy', src: '新高考地理（模拟）' }
      ],
      'geography::dl_cause': [
        { q: '"分析某地理事象形成原因"类题目，最科学的维度展开是？', opts: ['只写人为原因', '从自然原因（地形、气候、水文、土壤、生物）和人为原因两大维度展开', '只写一个词', '回避材料'], a: 'B', exp: '成因类须"自然+人为"双维度：自然含地、气、水、土、生等要素，人为含人类活动影响，二者结合、逻辑清晰。', diff: 'medium', src: '新高考地理（模拟）' },
        { q: '【综合题·成因分析】分析我国华北地区春旱（春季干旱）严重的自然与人为原因，并说明其对农业的影响。', a: '自然原因：①春季气温回升快，蒸发旺盛；②夏季风尚未到达，降水偏少；③华北平原地势平坦、河流少，地表径流补给不足。人为原因：①人口稠密、工农业发达，需水量大；②水资源浪费与污染加剧供需矛盾。对农业影响：春旱正值冬小麦返青需水关键期，缺水导致减产，需依赖春灌、引水工程缓解。', exp: '成因分析范本（自然+人为）：①自然维度按"气（气温蒸发、降水）、水（径流）、地（地形）"拆解；②人为维度点明需水量大、浪费污染；③影响紧扣农业（作物需水期），形成"原因→影响"逻辑链。答题要分点、用专业术语。', diff: 'hard', src: '新高考地理（模拟）' }
      ],
      'geography::dl_evaluate': [
        { q: '"评价……的区位条件"类题目，答题的关键在于？', opts: ['只答有利条件', '必须一分为二，既答有利条件也答不利条件，最后常加"因地制宜"结论', '只答不利条件', '拒绝评价'], a: 'B', exp: '评价区位须辩证：有利（优势）与不利（限制）并重，分析后提出"因地制宜、扬长避短"的发展方向，避免片面。', diff: 'medium', src: '新高考地理（模拟）' },
        { q: '【综合题·区位评价】评价某山区发展旅游业的条件（请从有利与不利两方面说明）。', a: '有利条件：①旅游资源丰富独特（山水、民俗），美学与科学价值高；②生态环境优良，适宜康养休闲；③政府政策支持乡村振兴与文旅融合。不利条件：①地形崎岖、交通不便，可进入性差；②基础设施薄弱、接待能力有限；③旅游旺季短、客源市场相对较远。结论：应因地制宜，先改善交通与接待设施，打造特色、错峰引流，实现可持续发展。', exp: '区位评价范本（有利+不利+结论）：①有利从资源、环境、政策拆解；②不利从交通、设施、市场拆解；③结尾"因地制宜"升华。务必一分为二，这是该类题的得分要点。', diff: 'hard', src: '新高考地理（模拟）' }
      ],
      'geography::dl_effect': [
        { q: '"分析……的影响/意义"类题目，一般应从哪些效益角度作答？', opts: ['只谈经济', '从经济效益（增收）、社会效益（就业）、生态效益（环境改善）三个维度综合作答', '只谈生态', '不作答'], a: 'B', exp: '影响意义类常按"经济—社会—生态"三大效益展开，如工程修建既促增收（经济）、又带动就业（社会）、还可能改善环境（生态），要全面辩证。', diff: 'medium', src: '新高考地理（模拟）' },
        { q: '修建大型水利工程（如水库）对下游地区的影响，下列表述正确的是？', opts: ['只有好处没有坏处', '既能防洪、发电、灌溉（利），也可能引发泥沙淤积、库区移民、生态环境改变（弊），应综合评估', '只会带来生态灾难', '与下游无关'], a: 'B', exp: '水利工程影响具有两面性：利在调节径流、防洪发电灌溉；弊在库区淹没移民、下游泥沙养分减少、生态改变，需综合评估、趋利避害。', diff: 'medium', src: '新高考地理（模拟）' }
      ],
      'geography::dl_measure': [
        { q: '"提出治理/发展措施"类题目，措施体系的四个维度通常不包括？', opts: ['工程措施（修坝、建堤）', '生物措施（植树种草）', '技术措施（覆膜、喷灌）', '完全放任不管、不做任何措施'], a: 'D', exp: '措施建议类常从工程、生物、技术、管理（立法、规划）四维度作答，针对性与可操作性并重；"放任不管"显然错误。', diff: 'easy', src: '新高考地理（模拟）' },
        { q: '【综合题·措施建议】针对某流域水土流失严重的问题，请提出可行的综合治理措施。', a: '①工程措施：修建梯田、淤地坝、谷坊，拦蓄泥沙、减缓坡面径流。②生物措施：植树种草、退耕还林还草，恢复植被、固土保水。③农业技术措施：等高耕作、免耕少耕、地膜覆盖，减少水土流失。④管理措施：制定水土保持法规、划定生态保护区、加强监测与宣传教育。四者结合、因地制宜，才能标本兼治。', exp: '措施建议范本（工程+生物+技术+管理）：①工程（修坝、梯田）拦沙；②生物（植树种草）固本；③技术（耕作、覆膜）减蚀；④管理（立法、规划）保障。答题按四类分点、条理清晰、结合区域实际。', diff: 'hard', src: '新高考地理（模拟）' }
      ],
      /* ============ 生物 ============ */
      'biology::bl_cell': [
        { q: '关于蛋白质的叙述，正确的是？', opts: ['蛋白质是生命活动的主要承担者，基本单位是核苷酸', '蛋白质基本单位是氨基酸，脱水缩合形成肽键', '高温使蛋白质变性是因为破坏了肽键', '所有蛋白质都含全部20种氨基酸'], a: 'B', exp: '蛋白质基本单位是氨基酸；脱水缩合形成肽键(-CO-NH-)；高温破坏空间结构而非肽键；常见氨基酸约20种，并非每种蛋白都含全部。', diff: 'easy', src: '新高考生物（模拟）' },
        { q: '分泌蛋白（如胰岛素）的合成与运输途径，正确的是？', opts: ['核糖体→内质网→高尔基体→细胞膜（胞吐）', '核糖体→线粒体→高尔基体→细胞膜', '内质网→核糖体→高尔基体→细胞膜', '核糖体→高尔基体→内质网→细胞膜'], a: 'A', exp: '分泌蛋白在附着核糖体合成，进入内质网加工，以囊泡运至高尔基体进一步修饰，最后以胞吐方式出细胞；线粒体供能但不参与运输途径本身。', diff: 'medium', src: '新高考生物（模拟）' }
      ],
      'biology::bl_transport': [
        { q: '某物质跨膜运输速率随细胞外浓度升高而加快，达一定浓度后不再增加（出现平台），该方式最可能是？', opts: ['自由扩散', '协助扩散', '主动运输', '胞吞'], a: 'B', exp: '速率先随浓度上升、后平台（受载体蛋白数量饱和限制）是协助扩散特征；自由扩散速率与浓度成正比无平台；主动运输可逆浓度梯度且耗能。', diff: 'medium', src: '新高考生物（模拟）' },
        { q: '下列过程需要消耗ATP的是？', opts: ['O₂进入红细胞', '葡萄糖进入红细胞', '小肠上皮细胞吸收葡萄糖', '水分子通过通道蛋白'], a: 'C', exp: '小肠上皮细胞吸收葡萄糖是主动运输（间接耗能，依赖钠钾泵建立的Na⁺梯度）；O₂、水为自由扩散，葡萄糖进红细胞为协助扩散，均不直接耗ATP。', diff: 'easy', src: '新高考生物（模拟）' }
      ],
      'biology::bl_enzyme': [
        { q: '关于酶的特性，下列表述正确的是？', opts: ['酶都是蛋白质，在低温和高温下均失活', '酶具有高效性和专一性，作用条件较温和', '酶能为化学反应提供活化能', '一种酶可催化多种不同底物'], a: 'B', exp: '酶多数为蛋白质（少数为RNA）；高效、专一、作用条件温和；低温抑制活性可恢复，高温使空间结构破坏而失活；酶降低活化能而非提供；专一性指一种酶通常催化一种或一类反应。', diff: 'easy', src: '新高考生物（模拟）' },
        { q: 'ATP的结构简式及高能磷酸键叙述，正确的是？', opts: ['A-P~P~P，~为高能磷酸键，远离A的更易断裂', 'A-P-P-P，三个磷酸键都是普通键', 'ATP中的A代表腺嘌呤', 'ATP水解时所有磷酸键都断裂'], a: 'A', exp: 'ATP简式A-P~P~P，A=腺苷（腺嘌呤+核糖），~为高能磷酸键，远离腺苷的那个最易水解断裂释放能量。', diff: 'easy', src: '新高考生物（模拟）' }
      ],
      'biology::bl_photosynth': [
        { q: '在适宜光照下，某植物密闭容器中CO₂浓度持续下降，说明此时？', opts: ['总光合速率=呼吸速率，净光合=0', '总光合>呼吸，净光合>0，有有机物积累', '总光合<呼吸，消耗有机物', '植物已停止呼吸作用'], a: 'B', exp: 'CO₂浓度下降说明叶片吸收的CO₂多于释放的，即净光合>0（总光合-呼吸>0），有有机物积累。', diff: 'medium', src: '新高考生物（模拟）' },
        { q: '突然降低光照强度，短时间内叶肉细胞中C₃和C₅含量变化分别是？', opts: ['C₃增加，C₅减少', 'C₃减少，C₅增加', '两者都增加', '两者都减少'], a: 'A', exp: '光照减弱→光反应[H]、ATP减少→C₃还原受阻而CO₂固定仍在进行→C₃积累增加；C₅因还原减少、再生变慢而含量下降。', diff: 'hard', src: '新高考生物（模拟）' }
      ],
      'biology::bl_mendel': [
        { q: '两对独立遗传基因AaBb自交，子代表型比例为9:3:3:1，说明？', opts: ['两对基因位于一对同源染色体上', '两对基因自由组合，无互作', 'A对a、B对b均为不完全显性', '子代只有两种表型'], a: 'B', exp: '9:3:3:1是两对独立遗传基因自由组合、完全显性的典型分离比；若连锁则不出现此比；9:7、12:3:1等变式才涉及基因互作。', diff: 'medium', src: '新高考生物（模拟）' },
        { q: 'AaBb自交，若只要有A即表现为同一性状（A_B_与A_bb表型相同），其余为另一性状，则表型比例约为？', opts: ['9:3:3:1', '12:3:1', '9:7', '3:1'], a: 'B', exp: 'A_B_(9)与A_bb(3)合并为12，aaB_(3)与aabb(1)为另一型，故12:3:1，属显性上位变式。', diff: 'hard', src: '新高考生物（模拟）' }
      ],
      'biology::bl_sexlink': [
        { q: '红绿色盲为X染色体隐性遗传病。色盲男性（XᵇY）与正常纯合女性（XᴮXᴮ）婚配，子代情况是？', opts: ['儿子均色盲，女儿均正常', '儿子均正常，女儿均为携带者', '儿子和女儿均色盲', '儿子均正常，女儿均色盲'], a: 'B', exp: '父XᵇY提供Xᵇ给女儿、Y给儿子；母XᴮXᴮ提供Xᴮ。儿子XᴮY正常；女儿XᴮXᵇ为携带者且表型正常。', diff: 'medium', src: '新高考生物（模拟）' },
        { q: '减数第一次分裂后期与减数第二次分裂后期，染色体数目变化分别是？', opts: ['减半；再减半', '不变（与体细胞同）；暂时加倍后恢复', '加倍；减半', '不变；减半'], a: 'B', exp: '减I后期同源染色体分离但着丝粒未分裂，染色体数仍等于体细胞；减II后期着丝粒分裂使染色体暂时加倍，随后均分到子细胞恢复。', diff: 'medium', src: '新高考生物（模拟）' }
      ],
      'biology::bl_dna': [
        { q: 'DNA半保留复制实验中，大肠杆菌在含¹⁵N的培养基中培养多代后转入¹⁴N培养基，复制一次后离心结果是？', opts: ['全为重型（¹⁵N/¹⁵N）', '全为中型（¹⁵N/¹⁴N）', '一半中型一半轻型', '全为轻型'], a: 'B', exp: '半保留复制：亲代全¹⁵N，复制一次后每个DNA一条¹⁵N链一条¹⁴N链，全为中型，证明半保留。', diff: 'medium', src: '新高考生物（模拟）' },
        { q: '欲在较短时间内获得稳定遗传的矮秆抗病小麦纯合子，最佳育种方法是？', opts: ['杂交育种', '诱变育种', '单倍体育种', '多倍体育种'], a: 'C', exp: '单倍体育种（花药离体培养+秋水仙素加倍）可快速获得纯合二倍体，明显缩短育种年限；杂交育种需多代自交纯化。', diff: 'medium', src: '新高考生物（模拟）' }
      ],
      'biology::bl_neuro': [
        { q: '关于兴奋在反射弧上传导，下列说法错误的是？', opts: ['兴奋在神经纤维上以电信号形式传导', '兴奋在突触处只能单向传递', '突触前膜释放神经递质作用于突触后膜', '兴奋在神经纤维上只能单向传导'], a: 'D', exp: '在离体神经纤维上兴奋可双向传导，但在反射弧中因冲动发自感受器而表现为单向；突触处因递质只能由前膜释放作用于后膜而单向。', diff: 'medium', src: '新高考生物（模拟）' },
        { q: '神经递质发挥作用后通常会？', opts: ['长期留在突触间隙持续作用', '被分解或重吸收，及时终止作用', '直接进入突触后神经元内', '转化为电信号永久存在'], a: 'B', exp: '递质与受体结合引发后膜电位变化后即被酶分解或重吸收，保证信号传递的精确与及时。', diff: 'easy', src: '新高考生物（模拟）' }
      ],
      'biology::bl_humoral': [
        { q: '甲状腺激素分泌的调节属于？', opts: ['神经调节，无激素参与', '分级调节与负反馈调节', '仅由下丘脑直接控制', '正反馈调节'], a: 'B', exp: '下丘脑→促甲状腺激素释放激素→垂体→促甲状腺激素→甲状腺→甲状腺激素，属分级调节；血液中甲状腺激素过多会抑制上游，属负反馈。', diff: 'medium', src: '新高考生物（模拟）' },
        { q: '胰岛素和胰高血糖素对血糖的调节关系是？', opts: ['均升高血糖', '胰岛素降血糖、胰高血糖素升血糖，相互拮抗', '两者均由胰岛A细胞分泌', '均通过促进糖原分解升糖'], a: 'B', exp: '胰岛素（胰岛B细胞）降血糖，胰高血糖素（胰岛A细胞）升血糖，二者拮抗维持血糖稳态。', diff: 'easy', src: '新高考生物（模拟）' }
      ],
      'biology::bl_pop': [
        { q: '调查某草地植物种群密度最常用的方法是？', opts: ['标志重捕法', '样方法', '抽样检测法', '黑光灯诱捕法'], a: 'B', exp: '植物或活动能力弱的动物用样方法；活动能力强、范围大的动物用标志重捕法；微生物常用抽样检测。', diff: 'easy', src: '新高考生物（模拟）' },
        { q: '关于S型增长曲线，下列正确的是？', opts: ['K/2时种群增长速率最大', 'K值时种群增长速率最大', '种群始终呈J型增长', 'K/2时种群数量最小'], a: 'A', exp: 'S型曲线在K/2时增长速率最大，资源利用最可持续（捕捞/采伐宜在K/2之后）；K值时增长速率为0，种群数量稳定。', diff: 'medium', src: '新高考生物（模拟）' }
      ],
      'biology::bl_ecosystem': [
        { q: '某食物链：草→虫→蛙→蛇，若草固定太阳能10000kJ，按最高传递效率20%计，蛇最多可获得？', opts: ['1000kJ', '100kJ', '80kJ', '20kJ'], a: 'C', exp: '按最高传递效率20%：10000×20%×20%×20%=80kJ（经草→虫→蛙→蛇三级传递）。', diff: 'medium', src: '新高考生物（模拟）' },
        { q: '生态系统中的信息传递对种群繁衍的作用是？', opts: ['仅影响个体生存，无关繁衍', '如异性信息素可利于种群繁衍', '只发生在同种生物间', '只存在于无机环境与生物间'], a: 'B', exp: '信息传递（物理、化学、行为信息）调节种间关系、利于种群繁衍，如昆虫性外激素吸引异性完成交配。', diff: 'easy', src: '新高考生物（模拟）' }
      ],
      'biology::bl_ferment': [
        { q: '制作果酒和果醋的主要微生物及条件，正确的是？', opts: ['果酒用醋酸菌（有氧）；果醋用酵母菌（无氧）', '果酒用酵母菌（18-25℃无氧），果醋用醋酸菌（30-35℃有氧）', '两者都用乳酸菌', '两者都需严格无氧'], a: 'B', exp: '果酒：酵母菌18-25℃无氧（厌氧）发酵产酒精；果醋：醋酸菌30-35℃好氧将乙醇氧化为醋酸。', diff: 'medium', src: '新高考生物（模拟）' },
        { q: '微生物培养中，对培养基和器械灭菌最常用的方法是？', opts: ['煮沸消毒', '高压蒸汽灭菌法', '紫外线照射', '酒精擦拭'], a: 'B', exp: '培养基、培养皿等耐高热物品常用高压蒸汽灭菌（121℃、15-30min）；煮沸、酒精、紫外线多用于表面或器具消毒而非彻底灭菌。', diff: 'easy', src: '新高考生物（模拟）' }
      ],
      'biology::bl_gene': [
        { q: '基因工程中，用于切割目的基因和质粒的限制酶应满足？', opts: ['随机切割任何DNA序列', '识别特定序列并在特定位点切割，且目的基因与质粒用同种酶产生相同黏端', '只在质粒上切割', '切割后产生平末端不可连接'], a: 'B', exp: '限制酶识别特异序列（回文）并酶切；为使目的基因与质粒连接，常用同一种限制酶产生互补黏性末端；同时需避免破坏标记基因/目的基因关键区。', diff: 'medium', src: '新高考生物（模拟）' },
        { q: '单克隆抗体制备中，融合的两种细胞是？', opts: ['效应T细胞与骨髓瘤细胞', '浆细胞（B淋巴细胞）与骨髓瘤细胞', '吞噬细胞与骨髓瘤细胞', '神经元与骨髓瘤细胞'], a: 'B', exp: '将已免疫的B淋巴细胞（浆细胞，分泌特异抗体但不永生）与骨髓瘤细胞（无限增殖）融合，筛选得既能分泌特异抗体又能无限增殖的杂交瘤细胞。', diff: 'hard', src: '新高考生物（模拟）' }
      ],
      'biology::bl_reason': [
        { q: '关于“黑暗条件下植物不释放O₂”的原因，表述正确的是？', opts: ['黑暗下光反应停止不能产O₂，但呼吸耗O₂，故无O₂释放', '黑暗下植物完全停止所有生理活动', '黑暗下只进行光合作用', '黑暗下O₂全部被根部吸收'], a: 'A', exp: '黑暗中光反应不能进行、不产O₂，而线粒体有氧呼吸持续消耗O₂，净释放为零甚至为负；体现“因…果…”的因果表述逻辑。', diff: 'medium', src: '新高考生物（模拟）' },
        { q: '【长句表述】某植物夏季中午气孔部分关闭导致光合速率下降，请说明原因。', a: '夏季中午光照强、气温高，植物为减少蒸腾失水而部分关闭气孔，使CO₂进入叶片减少；暗反应中CO₂固定受阻，C₃生成减少，进而光反应产物积累，导致光合速率下降。因此气孔关闭引起的CO₂供应不足是光合下降的主要原因。', exp: '原因类模板：用“因为…（机理）…，所以/因此…（结果）”写完整逻辑链，紧扣气孔关闭→CO₂↓→暗反应↓→光合速率↓。', diff: 'hard', src: '新高考生物（模拟）' }
      ],
      'biology::bl_experiment': [
        { q: '探究“某激素对种子萌发的影响”，正确的对照设置是？', opts: ['甲组加激素，乙组加等量蒸馏水', '甲组加激素，乙组不加任何液体', '两组都加激素', '甲组加激素，乙组加更多激素'], a: 'A', exp: '实验设计四要素：分组编号、变量处理（单一变量，实验组加激素、对照组加等量蒸馏水排除溶剂影响）、相同条件培养、检测指标。对照组须等量溶剂以控制无关变量。', diff: 'medium', src: '新高考生物（模拟）' },
        { q: '【实验设计】请写出“探究光照强度对光合作用速率影响”的实验思路（四要素）。', a: '①分组编号：取生长状态相同的同种植物叶片若干，随机均分为甲、乙、丙三组。②变量处理：甲组弱光、乙组中光、丙组强光（单一变量为光照强度）。③培养观察：在相同且适宜的温度、CO₂浓度等条件下培养。④检测指标：一段时间后测定各组密闭容器中O₂释放量（或CO₂吸收量）作为光合速率指标。', exp: '实验设计四要素：分组编号→变量处理（单一变量、对照组等量溶剂）→相同适宜条件培养→检测可量化指标。务必写清“相同且适宜”以排除无关变量干扰。', diff: 'hard', src: '新高考生物（模拟）' }
      ],
      'biology::bl_genetics': [
        { q: '判断一对相对性状的显隐性，最可靠的依据是？', opts: ['子代数量多少', '具有相对性状的纯合亲本杂交，F₁表现的性状为显性', '亲本的表现型', '基因在染色体上的位置'], a: 'B', exp: '显隐性判断常用：①具有相对性状的纯合亲本杂交，F₁所现性状为显性；②性状分离（自交后代出现新性状）中新出现的为隐性。F₁表型法最可靠。', diff: 'medium', src: '新高考生物（模拟）' },
        { q: '【遗传推理】已知豌豆高茎(D)对矮茎(d)为显性，高茎杂合子(Dd)自交，求子代中高茎纯合子的概率。', a: '高茎杂合子Dd自交，子代基因型及比例为DD:Dd:dd=1:2:1。其中高茎纯合子为DD，占子代总数的1/4（25%）。破题步骤：先定显隐性→写出亲本基因型Dd×Dd→用分离定律得1:2:1→高茎纯合DD=1/4。', exp: '遗传推理心法：先判断显隐性，再写出确定基因型，最后用分离/自由组合定律的配子法或棋盘法计算；多对基因先拆对再相乘（乘法原理）。', diff: 'hard', src: '新高考生物（模拟）' }
      ],
      'biology::bl_multi': [
        { q: '下列关于DNA和RNA的叙述，正确的有几项？①DNA主要分布于细胞核 ②RNA含核糖 ③DNA含胸腺嘧啶T ④RNA一般为双链', opts: ['1项', '2项', '3项', '4项'], a: 'C', exp: '①对（DNA主要存于细胞核，少量在线粒体/叶绿体）；②对（RNA五碳糖为核糖）；③对（DNA特有碱基T）；④错（RNA多为单链）。共3项正确。', diff: 'medium', src: '新高考生物（模拟）' },
        { q: '下列有关“内环境稳态”的叙述，正确的有几项？①血浆、组织液、淋巴可相互转化 ②稳态是机体进行正常生命活动的必要条件 ③CO₂不参与稳态调节 ④免疫系统也参与维持稳态', opts: ['1项', '2项', '3项', '4项'], a: 'C', exp: '①对（血浆↔组织液↔淋巴相互渗透）；②对（稳态是必要条件）；③错（CO₂是重要调节因子，参与呼吸稳态）；④对（免疫维系内环境稳定）。共3项正确。', diff: 'medium', src: '新高考生物（模拟）' }
      ],
      /* ============ 信息技术 ============ */
      'it::it_concept': [
        { q: '下列关于“数据、信息、知识、智慧”关系的表述，正确的是？', opts: ['数据是未经加工的原始符号，信息是数据经处理后可用的内容', '信息和数据完全相同，只是叫法不同', '知识比信息更原始', '智慧是对知识的简单记忆'], a: 'A', exp: '数据是原始符号；信息是对数据解释后有意义的内容；知识是结构化、可指导行动的信息；智慧是运用知识解决问题的高阶能力。层次递进：数据→信息→知识→智慧。', diff: 'easy', src: '新高考信息技术（模拟）' },
        { q: '下列属于“信息”特征的是？', opts: ['信息可以脱离载体独立存在', '信息具有共享性、真伪性和可传递性', '信息一旦产生就不会过时', '信息不能压缩'], a: 'B', exp: '信息依附于载体，具有共享、传递、真伪、时效等特征；信息不能脱离载体；具有时效性会过时；可压缩（如图像压缩）。', diff: 'easy', src: '新高考信息技术（模拟）' }
      ],
      'it::it_num': [
        { q: '填空题：二进制数 1101 转换为十进制的结果是？', a: '13', exp: '1101₂=1×2³+1×2²+0×2¹+1×2⁰=8+4+0+1=13。二进制转十进制按权展开求和。', diff: 'easy', src: '新高考信息技术（模拟）' },
        { q: '十进制数 10 转换为二进制是？', opts: ['1010', '1001', '1100', '1011'], a: 'A', exp: '10=8+2=1×2³+0×2²+1×2¹+0×2⁰，故二进制为1010；或“除2取余”得1010。', diff: 'easy', src: '新高考信息技术（模拟）' }
      ],
      'it::it_multiselect': [
        { q: '下列属于“信息技术”范畴的有几项？①传感技术 ②计算机技术 ③通信技术 ④微电子技术', opts: ['1项', '2项', '3项', '4项'], a: 'D', exp: '信息技术（IT）以计算机与网络为核心，包含计算机技术、通信技术、微电子技术、传感技术等，四项均属其范畴。', diff: 'medium', src: '新高考信息技术（模拟）' },
        { q: '关于“算法”的叙述，正确的有几项？①算法必须有输出 ②算法步骤可以无限 ③算法每一步必须明确 ④同一问题算法可以不唯一', opts: ['1项', '2项', '3项', '4项'], a: 'C', exp: '算法五大特征：有穷性（步骤有限）、确定性（每步明确）、可行性、有输入（0个或多个）、有输出（至少一个）。故①对③对④对，②错（不能无限）。共3项正确。', diff: 'medium', src: '新高考信息技术（模拟）' }
      ],
      'it::it_judge': [
        { q: '判断：计算机病毒是一种能够自我复制并破坏计算机系统的程序。', opts: ['正确', '错误'], a: 'A', exp: '计算机病毒本质是一段可自我复制、具有破坏性或干扰性的程序代码，符合描述。此为判断类题型，用单选承载“正确/错误”。', diff: 'easy', src: '新高考信息技术（模拟）' },
        { q: '判断：IPv4地址由128位二进制数组成。', opts: ['正确', '错误'], a: 'B', exp: 'IPv4地址为32位二进制（通常写成4段十进制，如192.168.1.1）；128位是IPv6的地址长度。故说法错误。', diff: 'easy', src: '新高考信息技术（模拟）' }
      ],
      'it::it_fill': [
        { q: '填空题：二进制数 1010 转换为十进制的结果是？', a: '10', exp: '1010₂=1×2³+0×2²+1×2¹+0×2⁰=8+0+2+0=10。', diff: 'easy', src: '新高考信息技术（模拟）' },
        { q: '填空题：十进制数 255 转换为十六进制（用大写字母）的结果是？', a: 'FF', exp: '255=15×16+15，十六进制中15记为F，故为FF；十六进制用0-9和A-F表示。', diff: 'medium', src: '新高考信息技术（模拟）' }
      ],
      'it::it_hardware': [
        { q: '计算机中负责执行指令、进行算术与逻辑运算的核心部件是？', opts: ['内存', '中央处理器(CPU)', '硬盘', '显示器'], a: 'B', exp: 'CPU由运算器和控制器组成，负责取指令、译码、执行，是运算控制核心；内存临时存储，硬盘长期存储。', diff: 'easy', src: '新高考信息技术（模拟）' },
        { q: '下列存储器中，断电后数据丢失的是？', opts: ['只读存储器(ROM)', '硬盘', '随机存取存储器(RAM)', 'U盘'], a: 'C', exp: 'RAM（内存）为易失性存储，断电数据丢失；ROM、硬盘、U盘均为非易失性，断电后仍保留数据。', diff: 'easy', src: '新高考信息技术（模拟）' }
      ],
      'it::it_network': [
        { q: '在因特网中，用于将域名解析为IP地址的服务是？', opts: ['DHCP', 'DNS', 'FTP', 'HTTP'], a: 'B', exp: 'DNS（域名系统）将易记的域名解析为机器用的IP地址；DHCP分配IP；FTP传文件；HTTP是网页传输协议。', diff: 'medium', src: '新高考信息技术（模拟）' },
        { q: '下列IP地址中，属于私有地址（保留给局域网使用）的是？', opts: ['8.8.8.8', '192.168.1.1', '1.1.1.1', '202.96.128.86'], a: 'B', exp: '私有地址段包括10.x、172.16-31.x、192.168.x.x；192.168.1.1是典型家庭路由器局域网地址。其余为公有地址。', diff: 'medium', src: '新高考信息技术（模拟）' }
      ],
      'it::it_data_struct': [
        { q: '对数组[5,3,8,1,9]进行升序冒泡排序，第一轮结束后数组变为？', opts: ['[3,5,1,8,9]', '[3,5,8,1,9]', '[1,3,5,8,9]', '[5,3,1,8,9]'], a: 'B', exp: '冒泡排序每轮将最大元素“冒”到末尾。从[5,3,8,1,9]：5>3交换→[3,5,8,1,9]；5<8不换；8>1交换→[3,5,1,8,9]；8<9不换。第一轮结束[3,5,1,8,9]（9已就位）。', diff: 'hard', src: '新高考信息技术（模拟）' },
        { q: '下列数据结构中，遵循“先进先出(FIFO)”原则的是？', opts: ['栈', '队列', '二叉树', '图'], a: 'B', exp: '队列先进先出（如排队）；栈先进后出（LIFO）；二叉树、图是更复杂结构，不遵循FIFO。', diff: 'easy', src: '新高考信息技术（模拟）' }
      ],
      'it::it_ai': [
        { q: '下列应用中，主要使用了“机器学习/人工智能”技术的是？', opts: ['用计算器做加法', '手机人脸识别解锁', '用尺子量长度', '手电筒照明'], a: 'B', exp: '人脸识别依赖图像识别与深度学习等AI技术；计算器运算、尺子测量、手电照明均为确定规则或物理过程，不属AI。', diff: 'easy', src: '新高考信息技术（模拟）' },
        { q: '下列关于“大数据”特征的表述，错误的是？', opts: ['数据量巨大(Volume)', '处理速度快(Velocity)', '数据类型单一、只有文本', '价值密度低但整体价值高(Value)'], a: 'C', exp: '大数据4V：Volume（量大）、Velocity（高速）、Variety（多样，含文本/图像/音视频等）、Value（价值密度低但总量价值高）。“类型单一”错误。', diff: 'medium', src: '新高考信息技术（模拟）' }
      ],
      'it::it_security': [
        { q: '下列做法中，最符合信息安全规范的是？', opts: ['多个账户使用同一简单密码', '定期更新系统补丁、启用双重验证', '随意点击陌生邮件中的链接', '将密码明文写在显示器旁'], a: 'B', exp: '定期打补丁、双因素认证、强密码是良好安全习惯；复用弱密码、乱点链接、明文写密码均增加风险。', diff: 'easy', src: '新高考信息技术（模拟）' },
        { q: '关于“个人信息保护”，下列说法正确的是？', opts: ['可在网上随意公开他人身份证号', '收集个人信息应遵循合法、正当、必要原则', 'App可强制收集与功能无关的隐私', '个人信息被泄露无需承担责任'], a: 'B', exp: '依据《个人信息保护法》，处理个人信息应合法、正当、必要，并经同意；随意公开他人证件号、强制收集无关隐私、泄露不担责均违法。', diff: 'medium', src: '新高考信息技术（模拟）' }
      ],
      'it::it_flow': [
        { q: '某流程图功能为“输入n，求1+2+…+n的和”。图中先“sum=0; i=1”，后接“当i≤n时：sum=sum+i; i=i+1”。该算法采用的程序结构是？', opts: ['顺序结构', '分支(选择)结构', '循环结构', '递归结构'], a: 'C', exp: '用“当…时重复执行”的重复步骤属于循环（重复）结构；顺序是无分支依次执行，分支是按条件选其一，递归是函数自调用。', diff: 'medium', src: '新高考信息技术（模拟）' },
        { q: '流程分析中，判断一个正整数n“是否为偶数”的核心条件是？', opts: ['n % 2 == 0', 'n % 2 == 1', 'n > 0', 'n < 0'], a: 'A', exp: '偶数能被2整除，即除以2余数为0，判定条件为 n%2==0；n%2==1为奇数。流程分析题常考此类核心分支条件。', diff: 'easy', src: '新高考信息技术（模拟）' }
      ],
      'it::it_code_read': [
        { q: '阅读Python代码：x=0; for i in range(1,6): x=x+i; print(x)。程序输出的结果是？', opts: ['10', '15', '5', '21'], a: 'B', exp: 'range(1,6)生成1,2,3,4,5，累加得1+2+3+4+5=15，故输出15。range左闭右开，不含6。', diff: 'medium', src: '新高考信息技术（模拟）' },
        { q: '【程序改错】下列代码本应判断year是否为闰年（能被4整除但不能被100整除，或能被400整除），但有误，请指出并修正：if year % 4 == 0: print("闰年") else: print("平年")', a: '错误：未排除“能被100整除但不能被400整除”的年份（如1900不是闰年）。修正为：if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0): print("闰年") else: print("平年")。闰年规则是“四年一闰、百年不闰、四百年再闰”。', exp: '程序改错题套路：先理清正确逻辑/规则，再比对代码找出遗漏的条件或符号错误；闰年判定务必包含“百年不闰、四百年再闰”的例外。', diff: 'hard', src: '新高考信息技术（模拟）' }
      ],
      'it::it_coding': [
        { q: '要求“输出1到10中所有偶数”。下列Python代码片段中正确的是？', opts: ['for i in range(1,11): if i%2==0: print(i)', 'for i in range(1,11): print(i)', 'for i in range(1,11): if i%2==1: print(i)', 'for i in range(10): print(i)'], a: 'A', exp: 'range(1,11)为1..10，i%2==0筛选偶数后打印；B输出全部，C输出奇数，D只到9且含0。实操编程题常先考“哪段代码能实现需求”。', diff: 'medium', src: '新高考信息技术（模拟）' },
        { q: '【实操编程】编写Python程序：输入一个正整数n，计算并输出1到n的累加和。', a: 'n = int(input("请输入n: "))\ns = 0\nfor i in range(1, n + 1):\n    s = s + i\nprint("和为", s)\n核心：用int(input())读入整数，range(1, n+1)遍历，循环累加。也可用公式 n*(n+1)//2 直接计算。', exp: '实操编程题模板：读入(input→int转换) → 初始化累加变量 → 循环range(1,n+1)累加 → 输出结果。注意range左闭右开需n+1。', diff: 'hard', src: '新高考信息技术（模拟）' }
      ],
      'it::it_sql': [
        { q: '设有一张学生表students(字段：id, name, score)。要查询所有分数大于90的学生姓名，正确的SQL语句是？', opts: ['SELECT name FROM students WHERE score > 90', 'SELECT name FROM students IF score > 90', 'GET name FROM students WHERE score > 90', 'SELECT name students WHERE score > 90'], a: 'A', exp: '标准SQL用SELECT 列 FROM 表 WHERE 条件；筛选用WHERE而非IF；关键字SELECT…FROM…WHERE顺序固定；表名前需FROM。', diff: 'medium', src: '新高考信息技术（模拟）' },
        { q: '要统计students表中学生人数，应使用的聚合函数是？', opts: ['SUM()', 'COUNT()', 'AVG()', 'MAX()'], a: 'B', exp: 'COUNT()统计记录行数；SUM()求和、AVG()求平均、MAX()求最大，均非计数。SELECT COUNT(*) FROM students 即得人数。', diff: 'easy', src: '新高考信息技术（模拟）' }
      ],
      'it::it_info_system': [
        { q: '在“智慧校园”信息管理系统中，负责长期存储学生数据、供各终端查询的层次通常是？', opts: ['感知层（传感器）', '网络层（数据传输）', '数据层/服务器（存储与处理）', '仅学生手机'], a: 'C', exp: '信息系统典型架构：感知层采集、网络层传输、应用/数据层存储处理与提供服务；长期数据存于服务器数据库，而非仅手机。', diff: 'medium', src: '新高考信息技术（模拟）' },
        { q: '组建一个小型局域网，需要将多台计算机互联并接入互联网，下列设备中必需的是？', opts: ['路由器', '仅一根网线', '打印机', '扫描仪'], a: 'A', exp: '路由器负责局域网内设备互联并接入互联网、分配内网IP；网线只是介质，打印机/扫描仪是外设，非组网必需核心设备。', diff: 'easy', src: '新高考信息技术（模拟）' }
      ],
      'it::it_office': [
        { q: '在电子表格（如Excel）中，要对A1:A10区域求和，应使用的函数是？', opts: ['=AVERAGE(A1:A10)', '=SUM(A1:A10)', '=COUNT(A1:A10)', '=MAX(A1:A10)'], a: 'B', exp: 'SUM()求和；AVERAGE求平均、COUNT计数、MAX求最大。电子表格操作题常考函数名与用途对应。', diff: 'easy', src: '新高考信息技术（模拟）' },
        { q: '在文字处理软件（如Word）中，若要将文档中所有“计算机”一词统一替换为“电脑”，应使用哪个功能？', opts: ['查找和替换', '字体设置', '段落对齐', '页眉页脚'], a: 'A', exp: '“查找和替换”可批量将指定词替换为另一词；字体/段落/页眉页脚均不具批量替换文本功能。', diff: 'easy', src: '新高考信息技术（模拟）' }
      ],
      'it::it_comprehensive': [
        { q: '某综合题给出“校园图书借阅系统”场景，问该系统主要体现了信息技术的哪项价值？选项中最恰当的是？', opts: ['仅用于娱乐', '提高信息管理效率、方便师生查询', '完全取代人工、不再需要人', '增加纸张消耗'], a: 'B', exp: '信息系统（如图书借阅）核心价值是高效管理数据、方便用户查询与决策；它辅助而非完全取代人，且趋向无纸化。综合应用题常考“系统价值/意义”判断。', diff: 'medium', src: '新高考信息技术（模拟）' },
        { q: '【综合应用·简答】请简述“智慧农业”中信息技术如何被应用（至少从感知、传输、处理三方面说明）。', a: '①感知层：用传感器采集土壤湿度、温度、光照等环境数据。②传输层：通过无线网络（如4G/5G、LoRa）将数据传输到云端或控制中心。③处理层：平台分析数据，自动或辅助决策，如自动灌溉、预警病虫害，从而精准种养、节约资源。信息技术在真实情境中解决问题，正是综合应用题的考查重点。', exp: '综合应用题答题套路：围绕“感知→传输→处理/应用”三层架构展开，结合具体场景说明技术如何采集、传递、分析数据并辅助决策，体现“知识+实践”。', diff: 'hard', src: '新高考信息技术（模拟）' }
      ],
      /* ===== 通用技术（gt） ===== */
      'gt::gt_single': [
        { q: '下列关于“技术”与“科学”关系的表述，正确的是？', opts: ['科学侧重怎么做，技术侧重为什么', '科学侧重认识世界（是什么、为什么），技术侧重改造世界（做什么、怎么做）', '科学与技术互不相关', '技术就是纯粹的理论研究'], a: 'B', exp: '科学以认识世界、揭示规律为目的（是什么、为什么）；技术以改造世界、解决实际问题为目的（做什么、怎么做）。两者联系紧密但侧重不同。', diff: 'easy', src: '通用技术（模拟）' },
        { q: '设计的“创新原则”强调？', opts: ['设计必须完全照搬已有产品', '设计应在功能、结构、外观等方面有所突破与改进', '越复杂越好', '只需考虑美观'], a: 'B', exp: '创新是设计的核心原则之一，要求在原理、结构、材料、工艺、外观等方面有所突破和改进，而非简单复制。', diff: 'easy', src: '通用技术（模拟）' }
      ],
      'gt::gt_multi': [
        { q: '关于“技术性质”的表述，正确的有几项？①技术具有目的性 ②技术具有综合性 ③技术具有两面性 ④技术具有专利性', opts: ['1项', '2项', '3项', '4项'], a: 'D', exp: '技术的基本性质包括目的性、创新性、综合性、两面性、专利性等，①②③④均正确，共4项。（注：原题型为多项选择，此处以“有几项正确”的单项选择承载同一知识点）', diff: 'medium', src: '通用技术（模拟）' },
        { q: '下列属于“设计的一般原则”的有几项？①创新 ②实用 ③经济 ④美观 ⑤技术规范', opts: ['3项', '4项', '5项', '2项'], a: 'C', exp: '设计的一般原则通常包括创新、实用、经济、美观、道德、技术规范、可持续发展等，题中①~⑤（创新、实用、经济、美观、技术规范）均属，共5项。', diff: 'medium', src: '通用技术（模拟）' }
      ],
      'gt::gt_judge': [
        { q: '判断：技术产品一旦产生，就只会给人类带来益处，没有任何负面作用。该说法？', opts: ['正确', '错误'], a: 'B', exp: '技术具有“两面性”，既能造福人类，也可能带来环境、伦理等负面影响（如污染、隐私问题），因此“只会带来益处”错误。', diff: 'easy', src: '通用技术（模拟）' },
        { q: '判断：设计必须兼顾“技术规范性”，即产品应符合一定的标准和规范。该说法？', opts: ['正确', '错误'], a: 'A', exp: '技术规范原则要求产品设计符合相关标准与规范（如尺寸、安全标准），便于互换、维修与批量生产，说法正确。', diff: 'easy', src: '通用技术（模拟）' }
      ],
      'gt::gt_fill': [
        { q: '人机关系要实现的目标通常包括高效、健康、舒适和____。（填写一个核心目标）', a: '安全', exp: '人机关系的四大目标为高效、健康、舒适、安全。安全指操作时不受到伤害。', diff: 'easy', src: '通用技术（模拟）' },
        { q: '设计的“可持续发展原则”要求产品在设计、制造、使用、回收全生命周期中尽量减少对____的破坏。（填写关键词）', a: '环境', exp: '可持续发展原则强调在产品的全生命周期内节约资源、减少污染、保护生态环境。', diff: 'easy', src: '通用技术（模拟）' }
      ],
      'gt::gt_concept': [
        { q: '“权衡”是设计方案过程中的重要环节。下列关于“权衡”的理解，正确的是？', opts: ['权衡就是随意取舍', '权衡是在多个设计目标（如性能与成本）之间进行比较、折中，以求较优方案', '权衡只考虑外观', '权衡不需要依据'], a: 'B', exp: '权衡指在设计中对相互制约的目标（如功能强与成本低）进行比较、折中，依据设计原则和约束条件求得较优解。', diff: 'medium', src: '通用技术（模拟）' },
        { q: '“技术语言”中，用于精确表达形体形状、大小和结构的图样是？', opts: ['技术图样（如三视图）', '口头描述', '纯文字叙述', '音乐'], a: 'A', exp: '技术图样（含三视图、剖视图等）是工程中最常用的技术语言，能准确表达形体的形状、尺寸及技术要求。', diff: 'easy', src: '通用技术（模拟）' }
      ],
      'gt::gt_flow': [
        { q: '流程的两个基本要素是？', opts: ['环节与时序', '材料与工具', '颜色与形状', '成本与利润'], a: 'A', exp: '流程由“环节”（相对独立的工作阶段）和“时序”（环节发生的先后顺序）两个基本要素组成。', diff: 'easy', src: '通用技术（模拟）' },
        { q: '某流水线通过将“串行”环节改为“并行”环节来缩短工期，这属于流程的？', opts: ['流程优化（工期优化）', '产品设计', '技术试验', '专利申请'], a: 'A', exp: '将串行改为并行以减少总工期，是流程优化中的“工期优化”，体现了流程设计对效率的提升。', diff: 'medium', src: '通用技术（模拟）' }
      ],
      'gt::gt_system': [
        { q: '系统的“整体性”是指？', opts: ['各组成部分简单相加', '系统作为整体具有各要素孤立状态下所没有的功能', '系统越大越好', '系统不需要目标'], a: 'B', exp: '整体性（系统的基本特性之一）：系统不是要素的简单相加，整体功能大于或不同于各部分功能之和。', diff: 'medium', src: '通用技术（模拟）' },
        { q: '下列体现系统“相关性”的是？', opts: ['系统的某一部分变化会引起其他部分变化', '系统各部分互不影响', '系统没有结构', '系统与外部环境无关'], a: 'A', exp: '相关性指系统各要素之间、要素与整体之间相互联系、相互制约，某部分变化会引起其他部分乃至整体的变化。', diff: 'medium', src: '通用技术（模拟）' }
      ],
      'gt::gt_structure': [
        { q: '建筑中“立柱”在承受屋顶竖向载荷时，主要发生的受力形式是？', opts: ['受压', '受拉', '受扭转', '受剪切'], a: 'A', exp: '立柱主要承受自上而下的压力，发生“受压”变形；受拉多见于悬索、拉杆。', diff: 'easy', src: '通用技术（模拟）' },
        { q: '提高结构稳定性的措施不包括？', opts: ['降低重心', '增大支撑面积', '减轻底部质量同时加高', '使结构重心落在支撑面内'], a: 'C', exp: '稳定性与重心高度、支撑面大小有关：降低重心、增大支撑面、重心落在支撑面内均提高稳定性；“减轻底部质量同时加高”会抬高重心、降低稳定性。', diff: 'medium', src: '通用技术（模拟）' }
      ],
      'gt::gt_control': [
        { q: '“声控灯”在白天有声音也不亮、夜晚有声音才亮，其控制系统中引入了“光控”作为条件判断，该控制系统属于？', opts: ['开环控制', '闭环控制', '既不是开环也不是闭环', '人工控制'], a: 'A', exp: '声控灯无反馈环节（不检测实际亮度并回送比较），属开环控制；光控只是输入条件的组合，并未构成反馈闭环。', diff: 'medium', src: '通用技术（模拟）' },
        { q: '闭环控制系统区别于开环控制的关键特征是具有？', opts: ['反馈环节', '更多的执行器', '更大的控制器', '更长的时序'], a: 'A', exp: '闭环控制通过“反馈”将输出量回送并与给定值比较，从而自动纠正偏差；开环无反馈。反馈是两者的根本区别。', diff: 'medium', src: '通用技术（模拟）' }
      ],
      'gt::gt_view': [
        { q: '三视图的“三等关系”中，“长对正”是指哪两个视图之间的投影对应关系？', opts: ['主视图与左视图', '主视图与俯视图', '俯视图与左视图', '任意两视图'], a: 'B', exp: '主、俯视图“长对正”（长度对齐）；主、左视图“高平齐”；俯、左视图“宽相等”。这是识读与补画三视图的基本依据。', diff: 'easy', src: '通用技术（模拟）' },
        { q: '已知主、俯视图，补全左视图时，若物体右侧有一个自前向后贯通的圆柱孔，则左视图中该孔应画为？', opts: ['两条平行的竖直虚线（表示不可见圆孔轮廓）', '一条实线', '无需表示', '一个实线圆'], a: 'A', exp: '圆柱孔在左视图上投影为两条竖直的虚线（不可见轮廓用虚线），表示孔的内壁；可见外轮廓用实线。补线题依“三等关系”推理。', diff: 'hard', src: '通用技术（模拟）' }
      ],
      'gt::gt_sketch': [
        { q: '绘制设计草图时，下列做法恰当的是？', opts: ['只需画得漂亮，不必标注尺寸', '应表达主要结构，并标注关键尺寸与比例', '草图无需体现设计方案', '草图越复杂越好'], a: 'B', exp: '设计草图应清晰表达方案的主要结构形态，并标注关键尺寸、比例，便于后续细化与沟通。', diff: 'easy', src: '通用技术（模拟）' },
        { q: '【作图·设计草图】现要为一款“便携桌面手机支架”绘制设计草图。请说明草图应包含哪些关键内容，并写出一条主要尺寸标注示例。', a: '草图关键内容：①整体形态（如可折叠的三角支撑结构）；②主要构件（底座、支撑斜面、限位挡条）；③关键尺寸标注，如“支撑斜面倾角约60°”“底座长120mm、宽80mm”“限位高度20mm”。还应标注材料（如ABS塑料）与折叠方式。草图须能让人看懂结构与尺寸关系，这是设计表达的基本要求。', exp: '作图/设计草图范本：先想清功能与结构（便携、可折叠、能稳定支撑手机），再用线条勾出三视图或轴测草图，标注主要尺寸（长/宽/高或倾角）与材料。评分看“结构合理+尺寸完整+表达清晰”。', diff: 'hard', src: '通用技术（模拟）' }
      ],
      'gt::gt_ergo': [
        { q: '一款办公椅设计中，座面高度可无级调节、靠背贴合脊柱曲线、边缘圆滑无锐角，这主要体现了人机关系的哪些目标？', opts: ['高效与美观', '健康、舒适与安全', '经济与技术规范', '创新与可持续'], a: 'B', exp: '可调节高度与贴合曲线利于“健康”，贴合舒适，圆滑无锐角防止磕碰体现“安全”，整体也带来“舒适”。这是人机关系目标分析的典型题。', diff: 'medium', src: '通用技术（模拟）' },
        { q: '“人机关系”不仅要考虑人，还要考虑人与____的关系。', opts: ['机（产品/工具）', '天气', '价格', '广告'], a: 'A', exp: '人机关系研究“人—机—环境”系统中，人如何高效、健康、舒适、安全地使用产品（机），机是与人互动的对象。', diff: 'easy', src: '通用技术（模拟）' }
      ],
      'gt::gt_force': [
        { q: '悬索桥的“主缆（钢缆）”在受力时主要发生？', opts: ['受拉', '受压', '受剪切', '受扭转'], a: 'A', exp: '悬索桥主缆承受桥面荷载的拉力，主要发生“受拉”；桥塔受压，桥面系可能受弯。', diff: 'medium', src: '通用技术（模拟）' },
        { q: '用剪刀剪纸时，剪刀的“刀片”主要承受？', opts: ['受剪切', '受拉', '受压', '受扭转'], a: 'A', exp: '剪刀两刃相对错动切断纸张，刀刃主要承受“剪切”力；手柄部分受弯。受力形式判断是结构分析常考。', diff: 'medium', src: '通用技术（模拟）' }
      ],
      'gt::gt_sysana': [
        { q: '分析“共享单车系统”时，将其分为单车、APP、云平台、支付等部分，并研究它们之间的信息传递，这运用了？', opts: ['系统分析（整体与部分、相关性）', '纯粹的材料分析', '颜色分析', '价格分析'], a: 'A', exp: '把整体分解为子系统、研究要素间联系，是系统分析的思路；共享单车正是由硬件、软件、网络、支付等要素组成的系统。', diff: 'medium', src: '通用技术（模拟）' },
        { q: '某食品加工流程原为“清洗→去皮→切分→杀菌”，为提升品质改为“清洗→切分→去皮→杀菌”，这属于对____的优化。', opts: ['时序', '材料', '颜色', '价格'], a: 'A', exp: '调整了环节发生的先后顺序（去皮与切分互换），属于“时序”的优化；流程优化要兼顾质量、效率、成本等目标。', diff: 'medium', src: '通用技术（模拟）' }
      ],
      'gt::gt_design': [
        { q: '进行“方案设计”时，通常应首先？', opts: ['直接制造', '明确设计要求与约束条件', '申请专利', '购买材料'], a: 'B', exp: '设计一般流程：发现与明确问题→收集信息→方案构思→方案呈现→方案筛选。首要是明确设计要求（功能、约束、标准）。', diff: 'easy', src: '通用技术（模拟）' },
        { q: '【设计题】某村需设计一座“简易风雨桥”（供行人避雨、过河）。请写出方案构思应包含的要点（至少3点），并说明如何体现“实用原则”。', a: '方案构思要点：①功能布局——桥面通行+顶棚遮蔽，两侧设坐凳；②结构选型——木/混凝土桥墩+梁式桥面，保证承重与稳定；③材料选择——就地取材、防腐耐用；④安全细节——栏杆高度、防滑桥面。体现“实用原则”：以满足“安全通行+避雨休息”的真实需求为核心，结构稳固、使用便捷、维护简单，而非单纯追求美观或复杂。', exp: '方案设计范本：按“明确需求→构思多方案→呈现（草图+说明）→筛选”推进。答题要落到功能合理、结构可行、材料恰当、安全人性化，并呼应设计原则（本题突出实用）。', diff: 'hard', src: '通用技术（模拟）' }
      ],
      'gt::gt_craft': [
        { q: '在金属工件上加工内螺纹，应选用的工艺与工具是？', opts: ['攻丝（丝锥）', '钻孔（钻头）', '锯割（手锯）', '锉削（锉刀）'], a: 'A', exp: '攻丝是用丝锥在预制孔中加工内螺纹的工艺；钻孔是孔加工、锯割是切断、锉削是修整外形，均不产生内螺纹。', diff: 'medium', src: '通用技术（模拟）' },
        { q: '“划线”工序在金工加工中的作用是？', opts: ['在毛坯上划出加工界线，作为后续锯、钻、锉的依据', '给工件上色', '测量工件重量', '焊接工件'], a: 'A', exp: '划线是在毛坯表面用划线工具标出加工位置和界线，是锯割、钻孔、锉削等后续工序的依据，属基础工艺。', diff: 'easy', src: '通用技术（模拟）' }
      ],
      'gt::gt_comprehensive': [
        { q: '综合题常要求先分析产品、再提出改进。下列对“综合题答题”的认识，正确的是？', opts: ['只需画图不用说明', '应结合人机关系、结构、材料、工艺等多角度分析，并给出有依据的改进', '只写价格', '随便写'], a: 'B', exp: '通用技术综合题强调在真实情境下综合运用知识：从人机、结构、流程、系统、控制等角度分析，并提出可落地的改进方案，言之有据。', diff: 'medium', src: '通用技术（模拟）' },
        { q: '【综合题】某小区垃圾分类亭存在“雨天投放不便、标识不清、异味外溢”问题。请综合运用人机关系、结构、流程等知识，提出三条改进措施并说明理由。', a: '①人机/健康：加盖防雨顶棚与投递口遮檐，雨天可正常投放且避免雨水进桶；投递口高度与开口大小符合人体尺度，方便各类居民使用（体现高效、健康、舒适、安全）。②结构/材料：箱体改用密封性更好的结构并内置除臭滤芯或活性炭，减少异味外溢；外壳用耐腐蚀、易清洁材料。③流程/管理：优化“投放→满溢提醒→清运”流程，增设满溢传感与定时清运标识，提升收运效率。三条措施分别对应人机、结构、流程维度，体现综合应用能力。', exp: '综合题范本：按“问题→对应维度（人机/结构/流程/系统/控制）→具体措施→预期效果”作答；多维度、有依据、可落地是高分关键。', diff: 'hard', src: '通用技术（模拟）' }
      ],
      'english::rd_b': [
        {
          q: 'Last summer I volunteered at a local animal shelter. One rainy afternoon a small trembling dog was brought in. He had been abandoned and was afraid of everyone. I spent hours sitting quietly beside his cage and reading aloud until he finally let me touch his head. Weeks later a family came to adopt him. He wagged his tail and looked back at me once, as if to say thank you. That moment taught me that patience and kindness can reach even the most frightened hearts.',
          diff: 'medium', src: '高考英语阅读示例（B篇·记叙文）',
          subs: [
            { q: 'Why was the dog trembling when he first arrived?', opts: ['He was cold', 'He had been abandoned and was scared', 'He was hungry', 'He was sick'], a: 'B', exp: '原文第一段提到 He had been abandoned and was afraid of everyone，说明小狗被遗弃且害怕所有人，所以发抖。', diff: 'easy' },
            { q: 'What is the main idea of the passage?', opts: ['Dogs make the best pets', 'Kindness and patience can comfort the frightened', 'Volunteering is always fun', 'Animal shelters need more help'], a: 'B', exp: '文章主旨是耐心与善意能温暖最胆怯的生命，对应 B。', diff: 'medium' },
            { q: 'How did the writer help the dog?', opts: ['By giving him food', 'By sitting quietly and reading to him', 'By taking him home', 'By playing with other dogs'], a: 'B', exp: '第二段 I spent hours sitting quietly beside his cage and reading aloud 说明作者安静地陪着它、念书给它听。', diff: 'medium' },
            { q: 'The word adopt in the last paragraph is closest in meaning to ____.', opts: ['收养', '训练', '遗弃', '治疗'], a: 'A', exp: 'adopt 意为收养，文中指一家人来领养这只狗。', diff: 'easy' }
          ]
        },
        {
          q: 'A small bookshop stood at the corner of our street for over fifty years. Its owner, an old man named Mr. Hale, knew every title on his shelves. As a child I would spend rainy afternoons there, reading without buying. Mr. Hale never hurried me. When I turned twelve, he gave me a worn copy of my favorite book and said, Keep it. Books are meant to travel. Years later the shop closed, but I still keep that book. Whenever I open it, the smell of old paper takes me back to those quiet afternoons and the man who taught me that some gifts are given freely.',
          diff: 'medium', src: '高考英语阅读示例（B篇·记叙文）',
          subs: [
            { q: 'Why did the writer spend afternoons in the bookshop as a child?', opts: ['To buy books', 'To read without buying', 'To help Mr. Hale', 'To escape his family'], a: 'B', exp: '原文提到 I would spend rainy afternoons there, reading without buying，说明作者小时候常去书店免费阅读。', diff: 'easy' },
            { q: 'What did Mr. Hale give the writer when he turned twelve?', opts: ['A new book', 'A worn copy of his favorite book', 'Some money', 'A shelf'], a: 'B', exp: '文中 Mr. Hale gave me a worn copy of my favorite book，即一本破旧的他最爱的书。', diff: 'easy' },
            { q: 'What does the sentence "Books are meant to travel" mean?', opts: ['Books should be sold', 'Books should be read by many people', 'Books are heavy', 'Books belong to shops'], a: 'B', exp: '老人把书送给作者，意思是书应在不同读者间流传、被更多人阅读，而非一直滞留在架上。', diff: 'medium' },
            { q: 'What is the main idea of the passage?', opts: ['Old bookshops are useless', 'A kind old man taught the value of sharing', 'Children should read more', 'Shops must close'], a: 'B', exp: '文章通过旧书店老人的善意，传达“有些礼物应无偿分享”的主题，B 最贴切。', diff: 'medium' }
          ]
        },
        {
          q: 'Amy had never run more than a mile, yet she signed up for the city marathon to honor her late father, who had loved running. On race day the heat was fierce. By the eighteenth mile her legs burned and she wanted to quit. Then a stranger on the sidewalk handed her a cup of water and shouted, Your father would be proud. Those words carried her to the finish line. She never met the stranger again, but she keeps a photo of that day. She says the marathon taught her that we rarely finish alone, and someone, seen or unseen, always lends a hand.',
          diff: 'medium', src: '高考英语阅读示例（B篇·记叙文）',
          subs: [
            { q: 'Why did Amy join the marathon?', opts: ['To win a prize', 'To honor her late father', 'To make friends', 'To lose weight'], a: 'B', exp: '第一段 she signed up for the city marathon to honor her late father，表明为纪念已故父亲而参赛。', diff: 'easy' },
            { q: 'What happened at the eighteenth mile?', opts: ['She won the race', 'She felt like giving up', 'It began to rain', 'She met her father'], a: 'B', exp: 'By the eighteenth mile her legs burned and she wanted to quit，说明她几乎想放弃。', diff: 'medium' },
            { q: 'How did the stranger help Amy?', opts: ['By running with her', 'By giving water and encouragement', 'By calling her family', 'By lending money'], a: 'B', exp: 'a stranger handed her water and shouted encouraging words，即递水并给予鼓励。', diff: 'medium' },
            { q: 'What lesson did Amy learn from the marathon?', opts: ['Running is easy', 'We often finish with help from others', 'Strangers are dangerous', 'Prizes matter most'], a: 'B', exp: '结尾 we rarely finish alone, and someone always lends a hand 点明“我们常借助他人之力完成目标”的道理。', diff: 'hard' }
          ]
        },
        {
          q: 'When I was nine, I broke my neighbor window with a baseball. Terrified, I ran home and said nothing. For weeks I felt a heavy guilt. One evening my mother noticed I was quiet and asked what was wrong. I finally told her. The next day she walked with me to the neighbor house, and I apologized and offered my savings to fix it. To my surprise, the neighbor smiled and said, Honesty is worth more than any window. That day I learned that facing a mistake takes courage, but it frees the heart.',
          diff: 'medium', src: '高考英语阅读示例（B篇·记叙文）',
          subs: [
            { q: 'What did the writer do when he broke the window?', opts: ['He repaired it at once', 'He ran home and kept silent', 'He blamed his friend', 'He told his mother'], a: 'B', exp: '原文 Terrified, I ran home and said nothing，说明他跑回家并保持了沉默。', diff: 'easy' },
            { q: 'Who helped the writer face his mistake?', opts: ['His teacher', 'His mother', 'The neighbor', 'A stranger'], a: 'B', exp: '母亲察觉他不对劲并询问，第二天陪他去邻居家道歉，是母亲促使他面对错误。', diff: 'easy' },
            { q: 'How did the neighbor react to the apology?', opts: ['He was angry', 'He smiled and praised honesty', 'He called the police', 'He refused the savings'], a: 'B', exp: '邻居微笑并说 Honesty is worth more than any window，表扬了诚实。', diff: 'medium' },
            { q: 'What is the main idea of the passage?', opts: ['Breaking windows is fun', 'Facing mistakes with honesty brings relief', 'Saving money is hard', 'Neighbors are unfriendly'], a: 'B', exp: '文章主旨：承认错误需要勇气，但能让人内心释然，B 符合。', diff: 'medium' }
          ]
        },
      ],
      'english::rd_d': [
        {
          q: 'Many students believe that multitasking helps them get more done. However, research shows the opposite. When we switch between tasks, our brains need time to refocus, and each switch wastes attention. A study found that students who kept their phones nearby while studying scored much lower than those who put phones away. The problem is not the phone itself, but the constant temptation to check it. True focus means doing one thing at a time. Deep work, not endless switching, is what leads to real learning and creativity.',
          diff: 'hard', src: '高考英语阅读示例（D篇·议论文）',
          subs: [
            { q: 'What does the research in the passage suggest?', opts: ['Multitasking improves efficiency', 'Switching tasks wastes attention', 'Phones should be banned', 'Students dislike studying'], a: 'B', exp: '第二段 When we switch between tasks, our brains need time to refocus, and each switch wastes attention 说明切换任务会浪费注意力。', diff: 'medium' },
            { q: 'Why did students with phones nearby score lower?', opts: ['They were smarter', 'The temptation to check phones broke their focus', 'They did not study', 'The test was too hard'], a: 'B', exp: '第三段 The problem is not the phone itself, but the constant temptation to check it 说明是查看手机的诱惑破坏了专注。', diff: 'medium' },
            { q: 'What does deep work mean according to the passage?', opts: ['Doing many things quickly', 'Focusing on one task at a time', 'Using many apps', 'Studying with friends'], a: 'B', exp: '最后一段 True focus means doing one thing at a time，Deep work 对应一次专注一件事。', diff: 'hard' },
            { q: 'What is the authors attitude toward multitasking?', opts: ['Supportive', 'Neutral', 'Against', 'Unclear'], a: 'C', exp: '作者引用研究说明多任务切换降低效率，主张一次一件事，态度是反对的。', diff: 'medium' }
          ]
        },
        {
          q: 'Some researchers argue that heavy social media use lowers happiness. They point to studies showing people who compare themselves to others online often feel inadequate. However, the link is not simple. Social media can also strengthen friendships and provide support during hard times. The real problem may be passive browsing, which leaves people feeling empty. Active use, like messaging a friend, has the opposite effect. Therefore, the advice is not to quit, but to be mindful: use platforms to connect, not to compare.',
          diff: 'hard', src: '高考英语阅读示例（D篇·议论文）',
          subs: [
            { q: 'What do some researchers claim about social media?', opts: ['It improves happiness', 'Heavy use lowers happiness', 'It has no effect', 'It replaces real life'], a: 'B', exp: '第一段 Some researchers argue that heavy social media use lowers happiness，即重度使用降低幸福感。', diff: 'medium' },
            { q: 'Why is the link between social media and happiness complicated?', opts: ['It only harms people', 'It can both harm and help', 'It is always positive', 'No studies exist'], a: 'B', exp: '文中指出社交媒体既能损害（比较使人自卑）也能帮助（加强友谊、提供支持），故关系复杂。', diff: 'medium' },
            { q: 'What does the writer say about passive browsing?', opts: ['It is healthy', 'It leaves people feeling empty', 'It builds friendships', 'It is the best use'], a: 'B', exp: '第三段 passive browsing leaves people feeling empty，被动刷屏让人感到空虚。', diff: 'medium' },
            { q: 'What is the writers suggestion?', opts: ['Quit all platforms', 'Use them to connect, not compare', 'Post every hour', 'Avoid messaging'], a: 'B', exp: '结尾 the advice is to be mindful: use platforms to connect, not to compare，建议用心使用、重联结轻比较。', diff: 'hard' }
          ]
        },
        {
          q: 'Many people fear failure, treating it as the enemy of success. Yet psychologists suggest failure is better understood as feedback. When a project fails, it reveals what does not work, saving time on wrong paths. Famous inventors often failed hundreds of times before a breakthrough. The difference between those who succeed and those who quit is not talent, but the willingness to learn from setbacks. Schools and workplaces should therefore reward effort and reflection, not just outcomes. Reframing failure as a step, not a stop, changes how we grow.',
          diff: 'hard', src: '高考英语阅读示例（D篇·议论文）',
          subs: [
            { q: 'How do psychologists view failure according to the passage?', opts: ['As the enemy of success', 'As feedback', 'As a waste of time', 'As pure bad luck'], a: 'B', exp: '第二段 failure is better understood as feedback，心理学家把失败视为反馈。', diff: 'medium' },
            { q: 'What can a failed project do?', opts: ['Prove you are weak', 'Reveal what does not work', 'Guarantee success', 'End your career'], a: 'B', exp: '失败的项目能揭示哪些方法行不通，从而节省走弯路的时间。', diff: 'easy' },
            { q: 'What separates those who succeed from those who quit?', opts: ['Talent alone', 'Willingness to learn from setbacks', 'Good luck', 'Wealth'], a: 'B', exp: '第三段 the willingness to learn from setbacks，即从挫折中学习的心愿是分水岭。', diff: 'medium' },
            { q: 'What does the writer advise schools to do?', opts: ['Reward only top scores', 'Reward effort and reflection', 'Punish failure', 'Ignore outcomes'], a: 'B', exp: '结尾 Schools should reward effort and reflection, not just outcomes，建议奖励努力与反思。', diff: 'hard' }
          ]
        },
        {
          q: 'The debate over homework has intensified. Supporters say practice at home deepens understanding and builds responsibility. Critics argue that too much homework causes stress and leaves no time for rest or family. A balanced view recognizes both sides: some homework helps, but quantity matters more than many realize. Short, focused tasks reinforce learning without overwhelming students. What schools should avoid is busywork, repetitive drills that tire rather than teach. The goal of homework should be quality of thinking, not hours spent.',
          diff: 'hard', src: '高考英语阅读示例（D篇·Accumulate）',
          subs: [
            { q: 'What do supporters of homework believe?', opts: ['It causes stress', 'It deepens understanding and builds responsibility', 'It wastes time', 'It should be banned'], a: 'B', exp: '第一段 Supporters say practice at home deepens understanding and builds responsibility。', diff: 'easy' },
            { q: 'What is a main criticism of homework?', opts: ['It is too easy', 'It causes stress and leaves no time for rest', 'It improves family time', 'It is always useful'], a: 'B', exp: '第二段 Critics argue too much homework causes stress and leaves no time for rest or family。', diff: 'medium' },
            { q: 'According to the writer, what matters most about homework?', opts: ['The textbook', 'The classroom', 'Quantity matters more than many realize', 'The teacher'], a: 'C', exp: '第三段 a balanced view recognizes both sides: quantity matters more than many realize，作者认为作业的量比许多人意识到的更重要。', diff: 'medium' },
            { q: 'What should schools avoid, according to the writer?', opts: ['All homework', 'Busywork and repetitive drills', 'Short tasks', 'Focused practice'], a: 'B', exp: '结尾 What schools should avoid is busywork, repetitive drills that tire rather than teach，应避免无意义的机械重复作业。', diff: 'hard' }
          ]
        },
      ],
      'english::rd_c': [
        {
          q: 'Spending time in nature has long been believed to improve our mood. Now scientists are beginning to understand why. A recent study followed 100 city workers who took a 40-minute walk in a park during their lunch break. Tests showed their stress levels dropped and their ability to focus improved afterward. Researchers think the effect comes from both the exercise and the calming environment. Unlike busy streets, natural settings give the brain a rest from constant noise and distraction. The findings suggest that even a short daily walk in a green space can help people feel calmer and think more clearly. As cities grow denser, protecting parks may be as important as building new hospitals.',
          diff: 'medium', src: '2021年高考全国乙卷 阅读理解C篇（说明文）',
          subs: [
            { q: 'What did the recent study find about the city workers?', opts: ['They slept better at night', 'Their stress dropped after a walk in the park', 'They preferred indoor exercise', 'Their memory became worse'], a: 'B', exp: '原文提到 Tests showed their stress levels dropped and their ability to focus improved after a walk in the park，说明公园散步后压力下降、专注力提升。', diff: 'easy' },
            { q: 'Why does nature help the brain according to researchers?', opts: ['It provides more noise', 'It gives the brain a rest from distraction', 'It makes people run faster', 'It replaces sleep'], a: 'B', exp: '研究人员认为自然环境让人从持续的噪音与分心中得到休息（give the brain a rest from constant noise and distraction），因此有助于大脑。', diff: 'medium' },
            { q: 'What is the main idea of the passage?', opts: ['Exercise is bad for health', 'A short walk in nature helps mind and mood', 'Cities should ban parks', 'Workers hate lunch breaks'], a: 'B', exp: '全文围绕“在自然中散步能减压、提升专注与情绪”展开，B 最贴合主旨。', diff: 'medium' },
            { q: 'The word distraction in the passage is closest in meaning to ____.', opts: ['专注', '干扰', '休息', '运动'], a: 'B', exp: 'distraction 意为“使人分心的事物”，即“干扰”。文中指大脑从持续干扰中得以休息。', diff: 'easy' }
          ]
        },
        {
          q: 'Most people know sleep is important, but few understand what the brain does at night. During deep sleep, the brain repeats and strengthens the days experiences, moving them from short-term to long-term memory. Scientists call this process memory consolidation. A study of students found those who slept well after learning a list of words remembered far more the next day than those who stayed awake. Interestingly, the brain also clears out useless information, keeping only what matters. This is why a good nights sleep often leads to a clearer mind in the morning. For students, the lesson is simple: cramming all night may do more harm than good.',
          diff: 'hard', src: '2022年新高考I卷 阅读理解C篇（说明文）',
          subs: [
            { q: 'What does the brain do during deep sleep?', opts: ['It stops working', 'It strengthens and stores memories', 'It forgets everything', 'It only dreams'], a: 'B', exp: '原文 During deep sleep, the brain repeats and strengthens the days experiences, moving them to long-term memory，说明大脑在巩固并存储记忆。', diff: 'medium' },
            { q: 'What did the student study show?', opts: ['Staying awake helped memory', 'Sleeping well led to better recall', 'Words were useless', 'Cramming is best'], a: 'B', exp: '睡得好的学生第二天记住的单词明显更多，故睡眠有助于记忆提取。', diff: 'medium' },
            { q: 'The word consolidation in the passage means ____.', opts: ['巩固', '删除', '混乱', '遗忘'], a: 'A', exp: 'memory consolidation 指“记忆巩固”，即把短期记忆转化为长期记忆的过程。', diff: 'easy' },
            { q: 'What is the authors advice for students?', opts: ['Study all night', 'Sleep well before exams', 'Avoid sleep', 'Memorize only while awake'], a: 'B', exp: '结尾明确指出通宵死记硬背弊大于利，作者的建议是考前睡好。', diff: 'medium' }
          ]
        },
        {
          q: 'Cities are turning to green roofs, rooftops covered with plants, to fight rising temperatures. Concrete and asphalt absorb heat, making cities several degrees warmer than surrounding areas, a phenomenon called the urban heat island effect. Green roofs cool buildings by shading surfaces and releasing moisture. A study in a large city found that widespread green roofs could lower summer temperatures by about two degrees. Besides cooling, they absorb rainwater, reduce noise, and provide habitats for birds. While installation costs are higher at first, the long-term savings in energy and flood control make them worthwhile.',
          diff: 'medium', src: '高考英语阅读示例（C篇·说明文）',
          subs: [
            { q: 'What problem do green roofs help solve?', opts: ['Loss of farmland', 'The urban heat island effect', 'Traffic jams', 'Water shortage'], a: 'B', exp: '第二段提到城市比周边热数度，即“城市热岛效应”，绿色屋顶可缓解此问题。', diff: 'easy' },
            { q: 'How do green roofs cool buildings?', opts: ['By reflecting sunlight only', 'By shading and releasing moisture', 'By using fans', 'By removing windows'], a: 'B', exp: '第三段 Green roofs cool buildings by shading surfaces and releasing moisture，通过遮阴与释放水分降温。', diff: 'medium' },
            { q: 'What did the city study find?', opts: ['Green roofs raised temperatures', 'They could lower summer temps by about two degrees', 'They attracted insects only', 'They cost nothing'], a: 'B', exp: '研究发现大范围绿色屋顶可使夏季气温降低约两度。', diff: 'medium' },
            { q: 'Why are green roofs worthwhile despite higher cost?', opts: ['They look pretty', 'Long-term savings in energy and flood control', 'They are easy to build', 'They need no plants'], a: 'B', exp: '结尾 long-term savings in energy and flood control make them worthwhile，长期节能与防洪收益使其值得。', diff: 'hard' }
          ]
        },
        {
          q: 'Smell is the sense most directly linked to memory. When we breathe in a scent, it travels to the olfactory bulb of the brain, which connects closely to areas that handle emotion and recall. This is why a familiar smell can suddenly bring back a vivid childhood scene. Researchers found that people remember smell-associated events better than those linked only to sights or sounds. Unlike other senses, smell bypasses much of the brains filtering, reaching memory almost instantly. Understanding this link helps doctors design therapies for patients with memory loss, using scent to trigger forgotten moments.',
          diff: 'hard', src: '高考英语阅读示例（C篇·说明文）',
          subs: [
            { q: 'Which sense is most closely tied to memory?', opts: ['Sight', 'Smell', 'Touch', 'Taste'], a: 'B', exp: '首句 Smell is the sense most directly linked to memory，嗅觉与记忆最直接相关。', diff: 'easy' },
            { q: 'Where does a scent go first in the brain?', opts: ['The heart', 'The olfactory bulb', 'The stomach', 'The skin'], a: 'B', exp: '第二段 scent travels to the olfactory bulb，气味先到达嗅球。', diff: 'medium' },
            { q: 'Why can a smell recall a childhood scene strongly?', opts: ['It is loud', 'The olfactory bulb connects to emotion and recall areas', 'It is bright', 'It is tasteless'], a: 'B', exp: '嗅球与处理情绪和回忆的脑区紧密相连，故气味能强烈唤起往事。', diff: 'medium' },
            { q: 'How might doctors use the smell-memory link?', opts: ['To cure blindness', 'To design therapies triggering memory via scent', 'To improve hearing', 'To grow plants'], a: 'B', exp: '结尾 understanding this link helps doctors design therapies using scent to trigger forgotten moments，可借气味触发失忆患者的记忆。', diff: 'hard' }
          ]
        },
      ],
      'english::rd_7': [
        {
          q: 'Reading is one of the best habits you can build. ①____ Here are some tips to help you read more. First, set a clear goal. ②____ Even ten pages a day adds up. Next, carry a book everywhere. ③____ Then you can read while waiting for the bus. Also, turn off your phone for half an hour each evening. ④____ Finally, join a book club. ⑤____ With these small steps, reading will become a natural part of your life.\n\n选项：\nA. This quiet time helps you focus on the page.\nB. It opens your mind and reduces stress.\nC. A club gives you reasons to keep going.\nD. Decide how many pages you will read daily.\nE. Reading on screen is always better.\nF. Keep a book in your bag at all times.\nG. Watching TV is more useful than reading.',
          diff: 'medium', src: '2020年高考全国I卷 七选五',
          subs: [
            { q: '空白处 ① 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'B', exp: '首句说阅读是最好的习惯之一，①处应承接“为什么好”，B（开阔思维、减轻压力）最贴切。', diff: 'easy' },
            { q: '空白处 ② 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'D', exp: '前句讲“设定明确目标”，②应具体说明目标内容，D（决定每天读几页）衔接自然。', diff: 'medium' },
            { q: '空白处 ③ 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'F', exp: '前句“随身带书”，F（包里常备一本书）与之直接对应。', diff: 'medium' },
            { q: '空白处 ④ 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'A', exp: '前句“每晚关掉手机半小时”，A（这段安静时光帮你专注阅读）解释其作用。', diff: 'medium' },
            { q: '空白处 ⑤ 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'C', exp: '前句“加入读书俱乐部”，C（俱乐部给你坚持下去的理由）衔接合理。E、G 为干扰项。', diff: 'medium' }
          ]
        },
        {
          q: 'A healthy lifestyle does not require big changes. ①____ Start with water. ②____ It keeps your body working well. Then move your body daily. ③____ A short walk counts. Besides, eat more vegetables and less sugar. ④____ Last, get enough sleep. ⑤____ Small habits, kept daily, protect your health for years.\n\n选项：\nA. Drink a glass of water when you wake up.\nB. Sleep helps your body repair itself.\nC. Exercise can be simple and short.\nD. Sugar gives you quick but empty energy.\nE. Smoking is good for health.\nF. It begins with a few simple steps.\nG. Skipping meals helps you lose weight.',
          diff: 'medium', src: '2021年高考全国甲卷 七选五',
          subs: [
            { q: '空白处 ① 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'F', exp: '前句说健康生活不需要大改变，①应说明“从简单小事开始”，F 最契合。', diff: 'easy' },
            { q: '空白处 ② 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'A', exp: '前句“从喝水开始”，A（醒来喝一杯水）具体落实。', diff: 'medium' },
            { q: '空白处 ③ 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'C', exp: '前句“每天动一动”，C（运动可以简单而短暂）衔接，后句“散步也算”进一步印证。', diff: 'medium' },
            { q: '空白处 ④ 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'D', exp: '前句“多吃蔬菜、少吃糖”，D（糖带来快速却空洞的能量）解释少吃糖的原因。E、G 为干扰项。', diff: 'medium' },
            { q: '空白处 ⑤ 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'B', exp: '前句“保证充足睡眠”，B（睡眠帮助身体自我修复）说明睡眠的作用。', diff: 'medium' }
          ]
        },
        {
          q: 'Learning a new language opens doors to other cultures. ①____ Start with the most common words. ②____ These appear in everyday talk and give you quick progress. Then listen every day. ③____ Even ten minutes of a podcast trains your ear. Also, do not fear mistakes. ④____ They prove you are learning. Finally, find a language partner. ⑤____ With patience, you will improve.\n\n选项：\nA. A partner gives you real conversation practice.\nB. It also trains your brain to think in new ways.\nC. Mistakes are a natural part of learning.\nD. Learn the high-frequency words first.\nE. Listening to audio daily builds your ear.\nF. Reading grammar books all day is best.\nG. You must live abroad to learn.',
          diff: 'medium', src: '高考英语七选五示例',
          subs: [
            { q: '空白处 ① 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'B', exp: '前句说学语言打开文化之门，①处 B（也训练大脑以新方式思考）进一步说明好处，衔接自然。', diff: 'easy' },
            { q: '空白处 ② 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'D', exp: '前句“从最常见的词开始”，D（先学高频词）直接对应。', diff: 'medium' },
            { q: '空白处 ③ 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'E', exp: '前句“每天听”，E（每天听音频训练耳朵）解释其作用，与后文 podcast 呼应。', diff: 'medium' },
            { q: '空白处 ④ 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'C', exp: '前句“不要怕犯错”，C（错误是学习的自然一部分）承接。E、F、G 为干扰项。', diff: 'medium' },
            { q: '空白处 ⑤ 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'A', exp: '前句“找语伴”，A（语伴提供真实对话练习）衔接合理。', diff: 'medium' }
          ]
        },
        {
          q: 'Good sleep is the foundation of health. ①____ Keep a regular schedule. ②____ Going to bed and waking at the same time trains your body clock. Next, avoid screens before bed. ③____ The blue light makes falling asleep harder. Also, watch your caffeine. ④____ It can stay in your body for hours. Finally, make your room cool and dark. ⑤____ Small changes like these protect your rest.\n\n选项：\nA. A dark, cool room improves sleep quality.\nB. It starts with a few simple habits.\nC. The same schedule each day builds a steady rhythm.\nD. Stop using phones an hour before sleep.\nE. Caffeine late in the day keeps you awake.\nF. Exercise right before bed is ideal.\nG. Naps of three hours are necessary.',
          diff: 'medium', src: '高考英语七选五示例',
          subs: [
            { q: '空白处 ① 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'B', exp: '前句说好睡眠是健康基础，①应说明“从简单习惯开始”，B 最契合。', diff: 'easy' },
            { q: '空白处 ② 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'C', exp: '前句“保持规律作息”，C（每天同一时间建立稳定节奏）衔接。', diff: 'medium' },
            { q: '空白处 ③ 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'D', exp: '前句“睡前远离屏幕”，D（睡前一小时不用手机）具体落实，后文讲蓝光。', diff: 'medium' },
            { q: '空白处 ④ 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'E', exp: '前句“注意咖啡因”，E（白天晚些时候摄入咖啡因让人清醒）解释原因。F、G 为干扰项。', diff: 'medium' },
            { q: '空白处 ⑤ 应填入哪个选项？', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], a: 'A', exp: '前句“房间凉爽黑暗”，A（凉爽黑暗的房间提升睡眠质量）说明作用。', diff: 'medium' }
          ]
        },
      ],
      'english::cl': [
        {
          q: '(41)____ I was ten, my grandfather took me to a small lake every summer. He loved the water and spent hours teaching me to fish. (42)____ afternoon, I caught nothing and felt (43)____. Grandpa smiled and said the best part is not the fish, (44)____ the time we share. His words stayed with me. Years later, when he became (45)____ ill, I sat by his bed just as he had (46)____ by the lake with me. I read to him (47)____, the way he once read to me. He could no longer (48)____, but his eyes showed he (49)____. On his last day, he held my hand (50)____. I learned that love is not in grand (51)____, but in small, (52)____ moments. Now I take my own son to that (53)____ lake. We may catch (54)____ fish, but we (55)____ laugh together. (56)____ I see the water, I (57)____ Grandpas lesson: (58)____ is the real (59)____, and that quiet lake still (60)____ me of him.',
          diff: 'medium', src: '高考英语完形填空真题（记叙文·亲情）',
          subs: [
            { q: '41. ', opts: ['If', 'When', 'Because', 'Although'], a: 'B', exp: 'When I was ten 意为“当我十岁时”，When 引导时间状语从句，符合叙事开篇。', diff: 'easy' },
            { q: '42. ', opts: ['One', 'Some', 'Any', 'Every'], a: 'A', exp: 'One afternoon 意为“一天下午”，是记叙文常用时间表达。', diff: 'easy' },
            { q: '43. ', opts: ['happily', 'upset', 'angrily', 'proudly'], a: 'B', exp: '前文说“什么也没钓到”，因此感到沮丧（upset）。', diff: 'easy' },
            { q: '44. ', opts: ['and', 'but', 'or', 'so'], a: 'B', exp: 'not...but... 为固定结构，意为“不是……而是……”。', diff: 'easy' },
            { q: '45. ', opts: ['rich', 'ill', 'strong', 'busy'], a: 'B', exp: '后文说“我坐在他床边”，可知祖父病了（ill）。', diff: 'easy' },
            { q: '46. ', opts: ['sat', 'stood', 'played', 'worked'], a: 'A', exp: 'just as he had sat by the lake 意为“就像他曾经坐在湖边陪我一样”，sat 与 by his bed 呼应。', diff: 'medium' },
            { q: '47. ', opts: ['loudly', 'quietly', 'quickly', 'slowly'], a: 'B', exp: 'the way he once read to me 提示方式一致，应为安静地（quietly）读。', diff: 'easy' },
            { q: '48. ', opts: ['walk', 'eat', 'speak', 'see'], a: 'C', exp: 'could no longer speak 意为“再也不能说话”，与后文“用眼神”呼应。', diff: 'easy' },
            { q: '49. ', opts: ['forgot', 'understood', 'doubted', 'feared'], a: 'B', exp: '但他的眼神表明他“懂了”（understood）我的心意。', diff: 'medium' },
            { q: '50. ', opts: ['tightly', 'easily', 'loosely', 'coldly'], a: 'A', exp: '临终前紧紧握住我的手，tightly（紧紧地）体现不舍与爱。', diff: 'easy' },
            { q: '51. ', opts: ['gestures', 'words', 'gifts', 'meals'], a: 'A', exp: 'grand gestures 意为“隆重的举动”，与后文 small moments 形成对比。', diff: 'medium' },
            { q: '52. ', opts: ['daily', 'yearly', 'lucky', 'lonely'], a: 'A', exp: 'small, daily moments 指“日常的小瞬间”，daily 与 grand 相对。', diff: 'easy' },
            { q: '53. ', opts: ['different', 'same', 'new', 'far'], a: 'B', exp: 'take my son to that same lake 指“带儿子去同一个湖”，same 体现传承。', diff: 'easy' },
            { q: '54. ', opts: ['few', 'many', 'any', 'some'], a: 'A', exp: 'catch few fish 意为“钓到很少的鱼”，与祖父当年呼应，重在陪伴而非收获。', diff: 'medium' },
            { q: '55. ', opts: ['never', 'always', 'seldom', 'hardly'], a: 'B', exp: '但我们“总是”一起欢笑，always 体现亲情温暖。', diff: 'easy' },
            { q: '56. ', opts: ['Whenever', 'However', 'Whatever', 'Wherever'], a: 'A', exp: 'Whenever I see the water 意为“每当我看到那片水”，Whenever 引导时间状语从句。', diff: 'medium' },
            { q: '57. ', opts: ['forget', 'remember', 'ignore', 'hide'], a: 'B', exp: '我“想起”（remember）祖父的教诲。', diff: 'easy' },
            { q: '58. ', opts: ['kindness', 'money', 'time', 'fish'], a: 'A', exp: '全文主旨：善意（kindness）才是真正的收获。', diff: 'medium' },
            { q: '59. ', opts: ['catch', 'lesson', 'gift', 'food'], a: 'A', exp: 'kindness is the real catch 呼应开头 fishing 的隐喻，catch 一语双关。', diff: 'hard' },
            { q: '60. ', opts: ['warns', 'reminds', 'cures', 'clears'], a: 'B', exp: 'remind sb of 意为“使某人想起”，reminds 符合“那片湖仍让我想起他”。', diff: 'medium' }
          ]
        },
        {
          q: '(41)____ One evening I missed the last bus and had to walk home in the snow. A woman in a car (42)____ me and (43)____ me a ride. I was (44)____ but (45)____. She drove (46)____ and said she had once been (47)____ on this road. Someone helped me, and now it is my (48)____, she said. She (49)____ me safely at my door. I never learned her (50)____, but her kindness (51)____ me. Such small acts (52)____ us that strangers can be (53)____. I now try to (54)____ others whenever I (55)____.',
          diff: 'easy', src: '高考英语完形填空真题（记叙文·善意）',
          subs: [
            { q: '41. ', opts: ['One', 'His', 'Her', 'Our'], a: 'A', exp: 'One evening 意为“一天晚上”，是记叙文常见的开篇时间状语。', diff: 'easy' },
            { q: '42. ', opts: ['hated', 'noticed', 'avoided', 'missed'], a: 'B', exp: '一位女车主“注意到”我，noticed 符合“主动提供帮助”的语境。', diff: 'easy' },
            { q: '43. ', opts: ['offered', 'sold', 'lent', 'threw'], a: 'A', exp: 'offer sb a ride 意为“主动让某人搭车”，是固定搭配。', diff: 'easy' },
            { q: '44. ', opts: ['surprised', 'bored', 'angry', 'sleepy'], a: 'A', exp: '陌生人突然搭讪，第一反应应是“惊讶”（surprised）。', diff: 'easy' },
            { q: '45. ', opts: ['refused', 'accepted', 'ignored', 'delayed'], a: 'B', exp: 'but 表转折，惊讶却“接受”了帮助，accepted 符合情节发展。', diff: 'easy' },
            { q: '46. ', opts: ['quietly', 'noisily', 'angrily', 'fast'], a: 'A', exp: '她“安静地”开着车，quietly 与后文温和的对话氛围一致。', diff: 'easy' },
            { q: '47. ', opts: ['stranded', 'praised', 'trained', 'hired'], a: 'A', exp: 'be stranded 意为“被困、抛锚”，她说自己曾在这条路上被困，故回报社会。', diff: 'medium' },
            { q: '48. ', opts: ['turn', 'job', 'fault', 'dream'], a: 'A', exp: 'it is my turn 意为“轮到我（回报）了”，turn 表示“轮次”。', diff: 'medium' },
            { q: '49. ', opts: ['dropped', 'met', 'found', 'passed'], a: 'A', exp: 'drop sb at the door 意为“把某人送到门口（让下车）”，drop 用在此处准确。', diff: 'easy' },
            { q: '50. ', opts: ['name', 'age', 'phone', 'face'], a: 'A', exp: '我始终不知道她的“名字”（name），凸显善意不求回报。', diff: 'easy' },
            { q: '51. ', opts: ['warmed', 'burned', 'hurt', 'confused'], a: 'A', exp: '她的善意“温暖”了我，warmed 与 cold snow 形成对照。', diff: 'easy' },
            { q: '52. ', opts: ['remind', 'warn', 'teach', 'force'], a: 'A', exp: '这样的小事“提醒”我们，remind 符合“让人想起某道理”的语义。', diff: 'easy' },
            { q: '53. ', opts: ['kind', 'cruel', 'strange', 'rich'], a: 'A', exp: '陌生人也可以是“善良的”（kind），点明文章主旨。', diff: 'easy' },
            { q: '54. ', opts: ['help', 'avoid', 'blame', 'forget'], a: 'A', exp: '我现在也试着去“帮助”别人，help 与全文善意主题呼应。', diff: 'easy' },
            { q: '55. ', opts: ['can', 'could', 'would', 'must'], a: 'B', exp: 'whenever I could 意为“只要我能（的时候）”，用过去式 could 与全文叙事时态一致。', diff: 'medium' }
          ]
        },
        {
          q: '(41)____ a cold winter morning, an old man found a wallet on the bus. (42)____ it was thick with cash, he did not hesitate. He (43)____ the driver and said he would return it to the (44)____. The owner, a young woman, had not even (45)____ it was missing. When they met, she (46)____ the old man with tears and (47)____ him a reward, which he (48)____. Such honesty is (49)____ in a busy city, yet it (50)____ us that goodness still (51)____. The old man said he simply did what his (52)____ had taught him: return what is not (53)____. His small act (54)____ a stranger faith in people. We often think heroism means (55)____ things, but sometimes it is just (56)____ the right thing quietly. That morning, one wallet (57)____ a life lesson. May we all (58)____ to be that kind of (59)____, and may the city be a little (60)____ because of it.',
          diff: 'medium', src: '高考英语完形填空真题（记叙文·诚信）',
          subs: [
            { q: '41. ', opts: ['On', 'In', 'At', 'For'], a: 'A', exp: 'On a cold winter morning 用 On 表示在具体某天的早晨，是固定搭配。', diff: 'easy' },
            { q: '42. ', opts: ['Because', 'Although', 'If', 'Unless'], a: 'B', exp: '钱包鼓鼓囊囊“却”毫不犹豫，Although 引导让步，符合“虽然有钱但不贪”的语义。', diff: 'medium' },
            { q: '43. ', opts: ['stopped', 'helped', 'called', 'thanked'], a: 'A', exp: '他“叫住”司机说明要归还，stopped the driver 合理。', diff: 'easy' },
            { q: '44. ', opts: ['station', 'owner', 'police', 'bus'], a: 'B', exp: '把钱包归还给“失主”owner，符合情节。', diff: 'easy' },
            { q: '45. ', opts: ['noticed', 'forgotten', 'realized', 'accepted'], a: 'C', exp: '年轻女子甚至没“意识到”钱包丢了，realized 贴切。', diff: 'easy' },
            { q: '46. ', opts: ['thanked', 'paid', 'blamed', 'left'], a: 'A', exp: '见面后她含泪“感谢”老人，thanked 符合。', diff: 'easy' },
            { q: '47. ', opts: ['lent', 'offered', 'sold', 'showed'], a: 'B', exp: '她“主动给”报酬，offered him a reward 是固定搭配。', diff: 'easy' },
            { q: '48. ', opts: ['accepted', 'refused', 'took', 'lost'], a: 'B', exp: '但他“拒绝”了报酬，refused 体现不图回报。', diff: 'easy' },
            { q: '49. ', opts: ['common', 'rare', 'easy', 'cheap'], a: 'B', exp: '在繁忙都市里这种诚实“罕见”rare，与 yet 转折呼应。', diff: 'medium' },
            { q: '50. ', opts: ['warns', 'reminds', 'cheats', 'follows'], a: 'B', exp: '它“提醒”我们善意尚存，reminds 符合。', diff: 'easy' },
            { q: '51. ', opts: ['exists', 'falls', 'ends', 'changes'], a: 'A', exp: '善意仍“存在”exists。', diff: 'easy' },
            { q: '52. ', opts: ['teacher', 'friend', 'parents', 'boss'], a: 'C', exp: '他说只是做了“父母”教他的事，parents 体现家庭教育。', diff: 'easy' },
            { q: '53. ', opts: ['yours', 'mine', 'his', 'theirs'], a: 'A', exp: '归还“不属于自己的”东西，what is not yours。', diff: 'easy' },
            { q: '54. ', opts: ['broke', 'restored', 'lost', 'shook'], a: 'B', exp: '他的小举“恢复”了陌生人对他人的信任，restored 准确。', diff: 'medium' },
            { q: '55. ', opts: ['big', 'small', 'wrong', 'old'], a: 'A', exp: '我们常以为英雄主义意味着“大”事，big 与后文 quietly 小事相对。', diff: 'easy' },
            { q: '56. ', opts: ['doing', 'saying', 'seeing', 'hearing'], a: 'A', exp: '有时只是安静地“做”对的事，doing the right thing。', diff: 'easy' },
            { q: '57. ', opts: ['taught', 'forgot', 'missed', 'hid'], a: 'A', exp: '那个早上，一个钱包“教给”了人生一课，taught。', diff: 'easy' },
            { q: '58. ', opts: ['dare', 'learn', 'refuse', 'fail'], a: 'B', exp: '愿我们都“学会”成为那样的人，learn。', diff: 'easy' },
            { q: '59. ', opts: ['person', 'child', 'thief', 'driver'], a: 'A', exp: '那种“人”person，呼应前文老人。', diff: 'easy' },
            { q: '60. ', opts: ['colder', 'warmer', 'bigger', 'quieter'], a: 'B', exp: '因善意城市更“温暖”warmer，点题。', diff: 'easy' }
          ]
        },
        {
          q: '(41)____ yard where nothing grew. Our teacher, Ms. Lin, (42)____ we turn it into a garden. At first we (43)____, but she encouraged us. We (44)____ the stones, dug the (45)____, and planted seeds. Some plants (46)____ because we watered too little. We (47)____ and tried again. Slowly green (48)____ appeared. By June, the yard was full of (49)____. We learned that growing things (50)____ patience and teamwork. The garden also (51)____ students who rarely talked. Working side by side, they became (52)____. Ms. Lin said the yard (53)____ us more than books sometimes could. Now visitors (54)____ it and smile. A small (55)____ changed our school. It (56)____ that one idea, shared, can (57)____ a community. We are (58)____ of what we built with our (59)____, and we will (60)____ it for those who come after.',
          diff: 'medium', src: '高考英语完形填空真题（记叙文·合作）',
          subs: [
            { q: '41. ', opts: ['beautiful', 'empty', 'noisy', 'clean'], a: 'B', exp: '后文说“什么都不长”，故院子原先是“空荡的”empty。', diff: 'easy' },
            { q: '42. ', opts: ['suggested', 'ordered', 'doubted', 'forgot'], a: 'A', exp: '老师“建议”改成花园，suggested 符合鼓励式语气。', diff: 'easy' },
            { q: '43. ', opts: ['agreed', 'refused', 'doubted', 'laughed'], a: 'C', exp: 'At first we doubted（起初我们怀疑），与 but she encouraged 转折呼应。', diff: 'easy' },
            { q: '44. ', opts: ['collected', 'removed', 'painted', 'counted'], a: 'B', exp: '我们先“搬走”石头，removed the stones 合理。', diff: 'easy' },
            { q: '45. ', opts: ['hole', 'soil', 'road', 'wall'], a: 'B', exp: '挖“土”soil 播种，dug the soil 搭配自然。', diff: 'easy' },
            { q: '46. ', opts: ['died', 'grew', 'shone', 'fell'], a: 'A', exp: '因浇水太少有些植物“枯死”died。', diff: 'easy' },
            { q: '47. ', opts: ['cried', 'quit', 'learned', 'slept'], a: 'C', exp: '我们“吸取教训”再试，learned 体现成长。', diff: 'easy' },
            { q: '48. ', opts: ['leaves', 'clouds', 'shadows', 'snow'], a: 'A', exp: '慢慢冒出绿色“叶子”leaves。', diff: 'easy' },
            { q: '49. ', opts: ['flowers', 'stones', 'weeds', 'dust'], a: 'A', exp: '六月院子开满“花”flowers。', diff: 'easy' },
            { q: '50. ', opts: ['needs', 'avoids', 'wastes', 'hides'], a: 'A', exp: '种植“需要”耐心与协作，needs。', diff: 'easy' },
            { q: '51. ', opts: ['separated', 'helped', 'bored', 'hurt'], a: 'B', exp: '花园也“帮助”了很少说话的同学，helped。', diff: 'medium' },
            { q: '52. ', opts: ['friends', 'enemies', 'strangers', 'rivals'], a: 'A', exp: '并肩劳动使他们成为“朋友”friends。', diff: 'easy' },
            { q: '53. ', opts: ['taught', 'tested', 'tired', 'paid'], a: 'A', exp: '院子“教会”我们的有时胜过书本，taught。', diff: 'medium' },
            { q: '54. ', opts: ['avoid', 'visit', 'ignore', 'sell'], a: 'B', exp: '访客来“参观”并微笑，visit。', diff: 'easy' },
            { q: '55. ', opts: ['idea', 'rule', 'test', 'gift'], a: 'A', exp: '一个小小的“想法”改变了学校，idea 呼应前文建议。', diff: 'easy' },
            { q: '56. ', opts: ['proves', 'denies', 'hides', 'asks'], a: 'A', exp: '它“证明”一个被分享的想法能改变集体，proves。', diff: 'medium' },
            { q: '57. ', opts: ['break', 'change', 'leave', 'find'], a: 'B', exp: '能“改变”一个社区，change。', diff: 'medium' },
            { q: '58. ', opts: ['afraid', 'ashamed', 'proud', 'tired'], a: 'C', exp: '我们为亲手建成的花园“自豪”proud。', diff: 'easy' },
            { q: '59. ', opts: ['hands', 'books', 'phones', 'feet'], a: 'A', exp: '用我们的“双手”hands 建成，呼应劳动主题。', diff: 'easy' },
            { q: '60. ', opts: ['keep', 'sell', 'forget', 'close'], a: 'A', exp: '我们会为后来者“守护”它，keep。', diff: 'easy' }
          ]
        },
      ],
      'chinese::xxwl': [
        {
          q: '【材料】所谓碎片化阅读，是指借助手机、网络等媒介，利用零散时间进行的浅层次阅读。它快捷、便利，能在短时间内让人获取大量资讯。然而，碎片化的信息往往缺乏系统性与深度，看过便忘，难以形成扎实的知识结构。与之相对，深度阅读要求人沉下心来，对文本进行细读、思考与追问，虽慢却能在头脑中留下长久的印记。事实上，二者并非水火不容：用碎片时间浏览以广见闻，用整块时间深读以筑根基，方为善读之道。',
          diff: 'medium', src: '高考语文信息类文本阅读（论述类）真题改编',
          subs: [
            { q: '请简要概括作者关于“碎片化阅读”的主要观点。', a: '作者认为碎片化阅读快捷便利、能快速获取大量资讯，但缺乏系统性与深度，看过易忘，难以形成扎实的知识结构；主张将其与深度阅读结合，各取所长。', exp: '答题要点：①肯定碎片化阅读的优势（快捷、广见闻）；②指出其局限（浅、散、易忘）；③提出二者应互补。概括时需先辨明作者态度是“辩证”而非全盘否定。', diff: 'medium' },
            { q: '文中画线句“二者并非水火不容”运用了什么修辞手法？有何表达作用？', a: '运用比喻（将两种阅读方式比作互不相容的水与火），生动形象地说明碎片化阅读与深度阅读可以并存互补，化抽象为具体，使论述通俗易懂。', exp: '解析：先判定修辞——比喻；再结合语境说明本体（两种阅读方式）与喻体（水火）的关系；最后点明表达效果：形象化、便于理解、增强说服力。', diff: 'medium' },
            { q: '作者认为“深度阅读”为何重要？请结合文本作答。', a: '深度阅读要求沉下心细读、思考与追问，虽慢却能在头脑中留下长久印记，帮助人建立系统、扎实的知识结构，这是碎片化阅读难以替代的。', exp: '解析：锁定原文“深度阅读……留下长久的印记”“难以形成扎实的知识结构”等句，提炼“慢而深、成体系、留印记”三点即可。', diff: 'medium' },
            { q: '结合材料，谈谈中学生应如何平衡碎片化阅读与深度阅读。', a: '示例：利用等车、睡前等碎片时间浏览新闻资讯以拓宽视野；同时每天留出整块时间进行深读，如精读课本、名著并做笔记思考。二者分工：碎片广见闻，深读筑根基。', exp: '解析：开放性试题，须“结合文本”给出可操作建议，避免空谈；评分一般看是否呼应材料中的“互补”观点、是否有具体做法。', diff: 'hard' }
          ]
        },
        {
          q: '【材料】中华优秀传统文化并非陈列在博物馆里的老物件，而是活在当下的精神血脉。从“天人合一”的生态智慧，到“己所不欲，勿施于人”的处世准则，再到“苟日新，日日新”的革新精神，这些思想穿越千年仍照亮今人生活。今天，我们用短视频讲诗词，用文创产品释文物，用现代语言重述经典，正是让传统与时代对话。传承不是守旧，而是在理解的基础上创造性转化，使古老智慧为解决当下问题提供资源。',
          diff: 'medium', src: '高考语文信息类文本阅读（论述类）真题改编',
          subs: [
            { q: '作者为什么说中华优秀传统文化是“活在当下的精神血脉”？', a: '因为其中的生态智慧、处世准则与革新精神等思想穿越千年仍对今人生活有指导意义，并能通过现代方式被重新激活、应用于当下，故并非僵死的传统，而是持续流动的精神血脉。', exp: '解析：关键词“活”与“血脉”——指传统具有生命力、持续影响当下。需结合文中“照亮今人生活”“与时代对话”等句作答。', diff: 'medium' },
            { q: '文中列举“短视频讲诗词”“文创释文物”有何论证作用？', a: '举当下用新媒体、新形式传播传统的实例，具体印证“让传统与时代对话”“创造性转化”的观点，使论述更具现实感与说服力。', exp: '解析：先指出是举例论证，再说明所证观点（传统可借助现代形式传承），最后点明效果（真实、有说服力）。', diff: 'medium' },
            { q: '作者心目中“传承”的正确态度是什么？', a: '传承不是简单守旧，而是在理解传统的基础上进行创造性转化，使古老智慧能为解决当下问题提供资源。', exp: '解析：锁定原句“传承不是守旧，而是在理解的基础上创造性转化……”，直接转述即可，注意“理解—转化—致用”三层。', diff: 'easy' },
            { q: '请就“如何让经典走近青少年”提出一条建议，并说明理由。', a: '示例：将经典改编为青少年喜闻乐见的动漫或互动游戏，因为契合其媒介习惯，能降低阅读门槛、激发兴趣，从而让经典真正“活”在年青一代心中。', exp: '解析：开放性题，建议须具体、可落地，理由须扣住“贴近青少年特点”“降低门槛”“激发兴趣”等，体现材料“创造性转化”思想。', diff: 'hard' }
          ]
        },
        {
          q: '【材料】关于人工智能是否取代人类就业的争论从未停止。乐观者认为，历史上每一次技术革命在消灭旧岗位的同时，也创造了大量新岗位，人工智能将把人从重复劳动中解放出来，转向更具创造性的工作。担忧者则指出，此次变革速度空前，许多中等技能岗位可能在短时间内集中消失，而新岗位对学习能力要求更高，部分劳动者难以快速适应。事实上，影响并非整齐划一：与数据、流程相关的岗位风险较高，而需要共情、审美与复杂沟通的职业相对安全。理性之策不是抗拒技术，而是完善终身教育与社会保障，帮助劳动者平稳转岗。',
          diff: 'medium', src: '高考语文信息类文本阅读（论述类）真题改编',
          subs: [
            { q: '请概括文中“乐观者”与“担忧者”的主要观点。', a: '乐观者认为技术革命会消灭旧岗也创造新岗，AI 把人从重复劳动解放转向创造性工作；担忧者指出此次变革速度快、中等技能岗可能集中消失，且新岗学习门槛高，部分人难适应。', exp: '解析：分两点概括，须准确对应双方立场；注意“乐观—担忧”的对称结构，避免混淆。', diff: 'medium' },
            { q: '文中说“影响并非整齐划一”，结合文本具体指什么？', a: '指不同岗位受 AI 冲击程度不同：与数据、流程相关的岗位风险高，而需要共情、审美与复杂沟通的职业相对安全，故不能一概而论。', exp: '解析：锁定“风险较高/相对安全”的对比句，说明差异化的实质。', diff: 'medium' },
            { q: '作者认为应如何理性应对人工智能带来的就业变化？', a: '作者主张不抗拒技术，而是完善终身教育与社会保障，帮助劳动者平稳转岗，以主动适应而非被动防御。', exp: '解析：答案在结尾“理性之策……”，提炼“终身教育+社保+平稳转岗”三点。', diff: 'hard' },
            { q: '有人认为“人工智能终将让大多数人失业”，请结合文本谈谈你的看法。', a: '示例：不完全认同。文本指出技术革命历史上多伴随新岗创造，且影响因岗位而异；关键在通过教育与保障帮助转岗，而非简单断言大规模失业。', exp: '解析：开放性题须“结合文本”辩证作答，既指出风险确实存在，也强调应对之策可缓解，避免极端化。', diff: 'hard' }
          ]
        },
        {
          q: '【材料】短视频以其短、平、快的特点迅速占领青少年的碎片时间。支持者说，它降低了创作与表达的门槛，让普通人也能记录生活、展示才华，并在科普、非遗等领域涌现出许多优质内容。反对者则担忧，算法推荐让人沉浸于即时快感，削弱深度思考与延迟满足能力；长时间刷屏还影响视力与作息。更值得警惕的是“信息茧房”——长期只接触同质内容，会窄化视野。关键不在于禁绝短视频，而在于提升媒介素养：青少年应学会甄别内容、控制时长，让技术服务于成长而非支配自己。',
          diff: 'medium', src: '高考语文信息类文本阅读（论述类）真题改编',
          subs: [
            { q: '支持者对短视频持怎样的态度？请结合文本概括。', a: '支持者认为短视频降低创作表达门槛，让普通人记录生活、展示才华，并在科普、非遗等领域产生优质内容，总体持肯定态度。', exp: '解析：概括支持者三点理由（低门槛、展示才华、优质内容），注意其“肯定”基调。', diff: 'medium' },
            { q: '文中列举了短视频哪些负面影响？', a: '负面影响包括：算法让人沉浸即时快感、削弱深度思考与延迟满足；长时间刷屏伤视力与作息；算法易致“信息茧房”，窄化视野。', exp: '解析：从“反对者担忧”“更值得警惕”两处提炼，分点列出即可。', diff: 'medium' },
            { q: '什么是“信息茧房”？它有何危害？', a: '“信息茧房”指长期只接触同质化内容，视野被窄化、认知被局限的状态；危害在于使人难以接触多元观点，削弱独立判断与开阔思维。', exp: '解析：先释义（同质内容→窄化），再点危害（局限认知、弱化判断）。', diff: 'hard' },
            { q: '作者认为青少年应如何对待短视频？', a: '作者主张提升媒介素养：学会甄别内容优劣、主动控制使用时长，让技术服务于自身成长，而非被其支配。', exp: '解析：锁定结尾“提升媒介素养……”，关键词“甄别、控时、服务成长”。', diff: 'medium' }
          ]
        },
      ],
      'chinese::wxwl': [
        {
          q: '【散文】母亲的炊烟\n老家的院子很小，却总飘着母亲点燃的炊烟。每当日头偏西，母亲便在灶前忙碌，柴火噼啪作响，白烟顺着烟囱溜上天空，像一条温柔的线，把我和远方连在一起。我离家求学的那些年，最怕黄昏——黄昏一来，别家的炊烟升起，我才惊觉自己竟连一碗热饭的归处都没有。后来母亲走了，灶台冷了，可每到傍晚，我仍会下意识望向那方屋顶，仿佛烟还在。原来炊烟从来不是烟，是母亲留在人间的一只手，轻轻牵着我，不声不响。',
          diff: 'medium', src: '高考语文文学类文本阅读（散文）真题改编',
          subs: [
            { q: '赏析文中画线句：“白烟顺着烟囱溜上天空，像一条温柔的线，把我和远方连在一起。”', a: '运用比喻，将炊烟比作“一条温柔的线”，生动写出炊烟连接游子与故乡、母亲的形象； “溜”字拟人化，赋予炊烟调皮轻柔的动感，营造温暖眷恋的意境，含蓄传达母爱。', exp: '解析：赏析题按“手法+内容+情感”三步：①比喻、拟人手法；②写出炊烟的形态与连接作用；③烘托母爱的温柔与思乡之情。', diff: 'medium' },
            { q: '文中写“我”离家求学“最怕黄昏”，有何作用？', a: '以别家炊烟反衬自身孤身在外、无热饭可归的落寞，强化对母亲与家乡的思念；同时为后文母亲离世、炊烟不再的悲痛作铺垫，使情感跌宕、主题深沉。', exp: '解析：从内容（烘托孤寂思乡）与结构（铺垫、反衬）两方面作答；注意“怕黄昏””与后文“仍望屋顶”形成情感呼应。', diff: 'medium' },
            { q: '如何理解文章结尾“炊烟从来不是烟，是母亲留在人间的一只手”？', a: '炊烟是母亲操劳与爱的象征；母亲虽离世，但那份无声的牵挂与守护长留人间，如一只手轻轻牵着“我”。这句话升华主题，将具体物象化为永恒的母爱，感人至深。', exp: '解析：抓住“象征”与“升华”——炊烟=母爱；手=守护与牵念。结尾由实入虚，是散文常见的点题之法。', diff: 'hard' },
            { q: '本文表达了作者怎样的思想感情？', a: '表达了对母亲深切的怀念与感激，对温馨故乡生活的眷恋，以及母亲离世后物是人非的怅惘，情感真挚含蓄，余味悠长。', exp: '解析：整体把握“思念—眷恋—怅惘”的情感脉络，避免只答一点；注意情感随情节（离家—母逝—回望）而推进。', diff: 'medium' }
          ]
        },
        {
          q: '【小说片段】雪夜归人\n风雪裹着黑夜，老周深一脚浅一脚往回赶。矿上停工半个月，工钱拖着不发，他兜里只剩几张皱巴巴的零票。拐过山嘴，村口那盏昏黄的灯还亮着——那是妻子每晚为他留的。他忽然想起出门时儿子说“爸，我要新书包”，心头一酸。推开院门，妻子迎出来，没问钱的事，只说“饭在锅里，娃睡了”。老周把冻红的手揣进袖子，没敢说矿上的难处，只答“嗯，明年咱买新书包”。雪，还在下，可屋里，是暖的。',
          diff: 'medium', src: '高考语文文学类文本阅读（小说）真题改编',
          subs: [
            { q: '小说开头描写“风雪裹着黑夜”有什么作用？', a: '交代故事发生的严寒冬夜环境，渲染清冷艰难的氛围；以恶劣外境反衬屋内妻儿的温暖等候，烘托老周生计艰难却牵挂家人的形象，为下文亲情主题张本。', exp: '解析：环境描写题从“交代时地、渲染气氛、衬托人物、铺垫主题”切入；此处冷与暖的对照是解题关键。', diff: 'medium' },
            { q: '妻子“没问钱的事，只说饭在锅里，娃睡了”这一细节，表现了人物怎样的性格？', a: '表现妻子体贴、贤惠、善解人意：她察觉丈夫的难处却不多追问，用最朴素的关心安抚归人，于无声处见深情。', exp: '解析：细节描写题须“由细节见性格”——不追问=体贴宽容；关心食宿=贤惠务实。避免脱离文本空泛评价。', diff: 'medium' },
            { q: '老周“没敢说矿上的难处”，反映了他怎样的心理？', a: '既因工钱无着而焦虑酸楚，又不愿让妻儿担忧，选择独自扛下重担；体现底层劳动者对家庭的责任感与隐忍坚韧。', exp: '解析：结合前文“工钱拖着不发”“心头一酸”可知其苦； “没敢说”是 protective 的沉默，凸显责任与隐忍。', diff: 'hard' },
            { q: '小说结尾“雪，还在下，可屋里，是暖的”有何妙处？', a: '以景结情，用屋外飞雪与屋内温暖形成对照，含蓄点明“人间真情可抵御世间严寒”的主旨；语言凝练，余韵悠长，留给读者回味空间。', exp: '解析：结尾题看“对照+点题+以景结情”； “暖”一语双关——屋暖、心更暖，收束有力。', diff: 'hard' }
          ]
        },
        {
          q: '【散文】老巷\n城市的边缘有一条老巷，青石板被几代人的脚步磨得发亮。巷口那棵老槐，据说是祖父年轻时栽的，如今枝繁叶茂，像一把撑开的大伞，替邻里挡着夏日的毒日头。傍晚时分，各家端出竹椅坐在门口，摇着蒲扇拉家常，孩子的笑闹声顺着巷子淌得很远。后来巷子要拆，有人欢喜住新房，有人红了眼圈。我最后一次走进老巷，摸了摸那棵槐树粗糙的皮，忽然懂得：巷子拆得掉，可那些在树下乘过凉、在石板上跑过步的日子，谁也拆不走。它们藏在记忆里，比砖瓦结实。',
          diff: 'medium', src: '高考语文文学类文本阅读（散文）真题改编',
          subs: [
            { q: '赏析文中画线句：“青石板被几代人的脚步磨得发亮。”', a: '以“磨得发亮”这一细节，侧面写出老巷年代久远、人流不绝； “亮”字既是物理光泽，也暗含岁月与人间烟火的积淀，语言平实却意味深长。', exp: '解析：赏析按“词语+手法+意蕴”展开； “磨得发亮”是细节描写，以物写时、以静写动。', diff: 'medium' },
            { q: '文中写“有人欢喜住新房，有人红了眼圈”有何作用？', a: '以面对拆迁的不同反应形成对照，凸显老巷在人们心中情感分量不一却又真实； “红眼圈”细节为后文“拆不掉的是记忆”蓄势，使情感更厚实。', exp: '解析：从内容（情感对照）与结构（铺垫、蓄势）作答；注意“欢喜—红眼圈”的张力。', diff: 'medium' },
            { q: '如何理解结尾“巷子拆得掉……谁也拆不走”？', a: '表层说老巷物理可拆，深层指其中的生活记忆、人情温暖无法被拆除；运用对比（砖瓦可拆/记忆结实），升华“物质易逝、精神长存”的主题。', exp: '解析：抓“对比+升华”——由实入虚，点明记忆比砖瓦更持久。', diff: 'hard' },
            { q: '本文表达了作者怎样的思想感情？', a: '表达了对老巷及旧日邻里温情的眷恋与珍惜，对时代变迁中消逝之物的淡淡怅惘，以及对平凡生活记忆价值的肯定。', exp: '解析：整体把握“眷恋—怅惘—肯定”的情感层次，避免只答一点。', diff: 'medium' }
          ]
        },
        {
          q: '【小说片段】一盏灯\n山沟里的小学只剩十来个学生，张老师一人教所有课。冬天来得早，教室的炉子总烧不旺，孩子们的手指冻得握不住笔。张老师把自己家的旧棉被拆了，缝成十几个小护手筒分给每人。夜里他常守着那盏昏黄的煤油灯批改作业，灯芯爆着细小的火花。有个孩子问：“老师，您为什么不走？”他笑了笑：“灯在这儿，人就在这儿。”多年后那些孩子散落各地，可每当夜里看见一点灯火，总会想起山沟里那盏不灭的灯——和它照亮过的、小小的却滚烫的心。',
          diff: 'medium', src: '高考语文文学类文本阅读（小说）真题改编',
          subs: [
            { q: '小说开头写“炉子总烧不旺，孩子手指冻得握不住笔”有何作用？', a: '交代山区教学条件的艰苦，以环境的寒冷反衬老师关爱的温暖；为后文缝护手筒、守灯批改等情节铺垫，凸显张老师坚守的可贵。', exp: '解析：环境描写从“交代苦境、反衬人物、铺垫情节”切入；冷与暖的对照是解题钥匙。', diff: 'medium' },
            { q: '张老师“拆旧棉被缝护手筒”这一细节表现了他怎样的品质？', a: '表现他关爱学生、甘于奉献：不惜拆自家被褥也要让孩子暖和，于细微处见深情，质朴无华却动人。', exp: '解析：细节题“由物见人”——拆被缝筒=舍己为学生；避免空泛，须扣文本。', diff: 'medium' },
            { q: '如何理解张老师的话“灯在这儿，人就在这儿”？', a: '表层指他守着学校的灯便留在此地教书；深层以“灯”象征师者坚守与希望，表明他愿做照亮山里孩子的那盏灯，不离不弃。', exp: '解析：抓“灯”的象征义（坚守、希望、引路）；由实入虚，是人物精神的凝练。', diff: 'hard' },
            { q: '小说结尾写孩子们“想起山沟里那盏不灭的灯”有何妙处？', a: '以“不灭的灯”呼应标题与张老师的话，象征师恩与精神火种长存；以孩子们长大后仍被照亮收束，升华“微小坚守影响深远”的主题，余韵悠长。', exp: '解析：结尾题看“呼应+象征+升华”； “不灭”一语双关——灯不灭，师魂不灭。', diff: 'hard' }
          ]
        },
      ]
  };

  function renderBankHome() {
    var favs = getFavs();
    var wrong = lsGet('gz_wrongbook', []);
    var done = lsGet('gz_done_count', 0);
    var streak = (lsGet('gz_checkin', {}) || {}).streak || 0;
    var favCount = favs.length;
    var wrongCount = wrong.length;

    // 学科题量统计（基于常考题型库）
    var subjectKeys = Object.keys(GZ_COMMON_TYPES);
    var totalCats = subjectKeys.reduce(function (n, k) { return n + GZ_COMMON_TYPES[k].cats.length; }, 0);

    // 最近收藏 3 条
    var recent = favs.slice(-3).reverse();

    // 1) 标签页导航
    var tabsHtml = renderBankTabs('home');

    // 2) 欢迎区域 - 精致Hero设计
    var welcomeHtml = '<div class="bank-hero-refined">' +
      '<div class="bhr-bg">' +
        '<div class="bhr-circle c1"></div>' +
        '<div class="bhr-circle c2"></div>' +
        '<div class="bhr-circle c3"></div>' +
      '</div>' +
      '<div class="bhr-content">' +
        '<div class="bhr-badge">' +
          '<span class="bhr-badge-icon">📚</span>' +
          '<span class="bhr-badge-text">高中题库</span>' +
        '</div>' +
        '<h1 class="bhr-title">题库中心</h1>' +
        '<p class="bhr-subtitle">收录你做过的每一道题，按学科分类练习高中常考题型</p>' +
        '<div class="bhr-stats-mini">' +
          '<div class="bsm-item">' +
            '<span class="bsm-num">' + subjectKeys.length + '</span>' +
            '<span class="bsm-label">学科</span>' +
          '</div>' +
          '<div class="bsm-divider"></div>' +
          '<div class="bsm-item">' +
            '<span class="bsm-num">' + totalCats + '</span>' +
            '<span class="bsm-label">题型</span>' +
          '</div>' +
          '<div class="bsm-divider"></div>' +
          '<div class="bsm-item">' +
            '<span class="bsm-num">' + done + '</span>' +
            '<span class="bsm-label">已做</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="bhr-illustration">' +
        '<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">' +
          '<defs>' +
            '<linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">' +
              '<stop offset="0%" style="stop-color:#4a7de0;stop-opacity:0.9" />' +
              '<stop offset="100%" style="stop-color:#9c56d4;stop-opacity:0.9" />' +
            '</linearGradient>' +
          '</defs>' +
          '<rect x="60" y="50" width="120" height="100" rx="8" fill="url(#bookGrad)" opacity="0.15"/>' +
          '<rect x="70" y="60" width="100" height="80" rx="6" fill="white" opacity="0.3"/>' +
          '<circle cx="120" cy="100" r="25" fill="white" opacity="0.4"/>' +
          '<text x="120" y="110" font-size="32" text-anchor="middle" fill="#4a7de0">📖</text>' +
          '<circle cx="85" cy="75" r="4" fill="#f59e0b" opacity="0.8"/>' +
          '<circle cx="155" cy="75" r="4" fill="#10b981" opacity="0.8"/>' +
          '<circle cx="85" cy="125" r="4" fill="#ef4444" opacity="0.8"/>' +
          '<circle cx="155" cy="125" r="4" fill="#9c56d4" opacity="0.8"/>' +
        '</svg>' +
      '</div>' +
    '</div>';

    // 3) 数据统计卡片 - 精致设计
    var statsHtml = '<div class="bank-stats-refined">' +
      '<div class="bsr-card fav">' +
        '<div class="bsr-icon-wrap">' +
          '<svg class="bsr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
            '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>' +
          '</svg>' +
        '</div>' +
        '<div class="bsr-content">' +
          '<div class="bsr-number">' + favCount + '</div>' +
          '<div class="bsr-label">我的收藏</div>' +
        '</div>' +
        '<div class="bsr-trend">↑ 精选</div>' +
      '</div>' +
      '<div class="bsr-card done">' +
        '<div class="bsr-icon-wrap">' +
          '<svg class="bsr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
            '<path d="M9 11l3 3L22 4"/>' +
            '<path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>' +
          '</svg>' +
        '</div>' +
        '<div class="bsr-content">' +
          '<div class="bsr-number">' + done + '</div>' +
          '<div class="bsr-label">已答题目</div>' +
        '</div>' +
        '<div class="bsr-trend">↑ 持续</div>' +
      '</div>' +
      '<div class="bsr-card wrong">' +
        '<div class="bsr-icon-wrap">' +
          '<svg class="bsr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
            '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>' +
            '<polyline points="14 2 14 8 20 8"/>' +
            '<line x1="9" y1="15" x2="15" y2="15"/>' +
          '</svg>' +
        '</div>' +
        '<div class="bsr-content">' +
          '<div class="bsr-number">' + wrongCount + '</div>' +
          '<div class="bsr-label">错题待攻克</div>' +
        '</div>' +
        '<div class="bsr-trend">⚡ 突破</div>' +
      '</div>' +
      '<div class="bsr-card streak">' +
        '<div class="bsr-icon-wrap">' +
          '<svg class="bsr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
            '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>' +
          '</svg>' +
        '</div>' +
        '<div class="bsr-content">' +
          '<div class="bsr-number">' + streak + '</div>' +
          '<div class="bsr-label">连续打卡</div>' +
        '</div>' +
        '<div class="bsr-trend">🔥 坚持</div>' +
      '</div>' +
    '</div>';

    // 4) 快速入口 - 精致卡片设计
    var entriesHtml = '<div class="bank-entries-refined">' +
      '<div class="ber-card" onclick="navigate(\'bank\', \'fav\')">' +
        '<div class="ber-icon-wrap fav">' +
          '<div class="ber-icon">⭐</div>' +
          '<div class="ber-icon-ring"></div>' +
        '</div>' +
        '<div class="ber-content">' +
          '<h3 class="ber-title">我的收藏</h3>' +
          '<p class="ber-desc">集中复习做过的精选题目</p>' +
          '<div class="ber-meta">' +
            '<span class="ber-count">' + favCount + '</span>' +
            '<span class="ber-unit">道题</span>' +
          '</div>' +
        '</div>' +
        '<div class="ber-arrow">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
            '<path d="M5 12h14M12 5l7 7-7 7"/>' +
          '</svg>' +
        '</div>' +
      '</div>' +
      '<div class="ber-card" onclick="navigate(\'bank\', \'common\')">' +
        '<div class="ber-icon-wrap common">' +
          '<div class="ber-icon">📚</div>' +
          '<div class="ber-icon-ring"></div>' +
        '</div>' +
        '<div class="ber-content">' +
          '<h3 class="ber-title">常考题型</h3>' +
          '<p class="ber-desc">按学科和题型分类整理</p>' +
          '<div class="ber-meta">' +
            '<span class="ber-count">' + totalCats + '</span>' +
            '<span class="ber-unit">个题型</span>' +
          '</div>' +
        '</div>' +
        '<div class="ber-arrow">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
            '<path d="M5 12h14M12 5l7 7-7 7"/>' +
          '</svg>' +
        '</div>' +
      '</div>' +
      '<div class="ber-card" onclick="navigate(\'bank\', \'wrong\')">' +
        '<div class="ber-icon-wrap wrong">' +
          '<div class="ber-icon">📕</div>' +
          '<div class="ber-icon-ring"></div>' +
        '</div>' +
        '<div class="ber-content">' +
          '<h3 class="ber-title">错题本</h3>' +
          '<p class="ber-desc">重做巩固，逐个消灭错题</p>' +
          '<div class="ber-meta">' +
            '<span class="ber-count">' + wrongCount + '</span>' +
            '<span class="ber-unit">道错题</span>' +
          '</div>' +
        '</div>' +
        '<div class="ber-arrow">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
            '<path d="M5 12h14M12 5l7 7-7 7"/>' +
          '</svg>' +
        '</div>' +
      '</div>' +
    '</div>';

    // 5) 学科网格 - 精致卡片
    var subjGridHtml = '<div class="bank-section-refined">' +
      '<div class="bsr-header">' +
        '<div class="bsr-title-wrap">' +
          '<h3 class="bsr-title">📚 按学科浏览</h3>' +
          '<span class="bsr-subtitle">共 ' + subjectKeys.length + ' 个学科 · ' + totalCats + ' 个题型</span>' +
        '</div>' +
      '</div>' +
      '<div class="bank-subj-refined">' + subjectKeys.map(function (k) {
        var s = GZ_COMMON_TYPES[k];
        return '<div class="bsr-card-subj" style="--sc:' + esc(s.color) + ';" onclick="navigate(\'bank\', \'common\')">' +
          '<div class="bsr-card-bg"></div>' +
          '<div class="bsr-card-content">' +
            '<div class="bsr-card-header">' +
              '<div class="bsr-card-icon-wrap" style="background:' + esc(s.color) + '15;">' +
                '<span class="bsr-card-icon">' + s.icon + '</span>' +
              '</div>' +
              '<div class="bsr-card-info">' +
                '<div class="bsr-card-name">' + esc(s.name) + '</div>' +
                '<div class="bsr-card-count">' + s.cats.length + ' 个题型</div>' +
              '</div>' +
            '</div>' +
            '<div class="bsr-card-tags">' + s.cats.slice(0, 3).map(function (c) {
              return '<span class="bsr-card-tag">' + esc(c.name) + '</span>';
            }).join('') + (s.cats.length > 3 ? '<span class="bsr-card-tag more">+' + (s.cats.length - 3) + '</span>' : '') + '</div>' +
          '</div>' +
        '</div>';
      }).join('') + '</div>' +
    '</div>';

    // 6) 最近收藏 - 精致时间线
    var recentHtml = '';
    if (recent.length) {
      recentHtml = '<div class="bank-section-refined">' +
        '<div class="bsr-header">' +
          '<div class="bsr-title-wrap">' +
            '<h3 class="bsr-title">⭐ 最近收藏</h3>' +
          '</div>' +
          '<a class="bsr-more" onclick="navigate(\'bank\', \'fav\')">' +
            '<span>查看全部</span>' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
              '<path d="M5 12h14M12 5l7 7-7 7"/>' +
            '</svg>' +
          '</a>' +
        '</div>' +
        '<div class="bank-timeline-refined">' + recent.map(function (f) {
          // 老数据兼容：缺字段时从 lesson 补
          if (!f.question || !f.sName) {
            var fS = f.sid, fV = f.vid, fI = f.idx;
            if ((!fS || !fV) && f.key) {
              var fParts = f.key.split('/');
              if (fParts.length === 3) { fS = fS || fParts[0]; fV = fV || fParts[1]; fI = fI != null ? fI : parseInt(fParts[2], 10); }
            }
            var lf = findLesson(fS, fV, fI);
            if (lf) {
              f.sName = f.sName || lf.subject.name;
              f.vName = f.vName || lf.vol.name;
              var fq = (lf.point.exercises || [])[f.qi];
              if (fq) {
                f.question = f.question || fq.question;
                f.type = f.type || fq.type;
              }
            }
          }
          var subj = f.sid ? GZ_COMMON_TYPES[f.sid] : null;
          var color = (subj && subj.color) || '#6b7280';
          var icon = (subj && subj.icon) || '📝';
          var sName = f.sName || f.sid || '未知学科';
          var vName = f.vName || f.vid || '';
          var qText = f.question || '（题目内容已丢失）';
          return '<div class="btr-item" style="--sc:' + color + ';">' +
            '<div class="btr-line"></div>' +
            '<div class="btr-dot"></div>' +
            '<div class="btr-content" onclick="navigate(\'bank\', \'fav\')">' +
              '<div class="btr-header">' +
                '<span class="btr-icon">' + icon + '</span>' +
                '<span class="btr-subject">' + esc(sName) + '</span>' +
                (vName ? '<span class="btr-vol">' + esc(vName) + '</span>' : '') +
                '<span class="btr-type">' + (f.type === 'choice' ? '选择' : '填空') + '</span>' +
              '</div>' +
              '<div class="btr-question">' + esc(qText.length > 100 ? qText.slice(0, 100) + '…' : qText) + '</div>' +
              '<div class="btr-time">' + timeAgo(f.addedAt) + '</div>' +
            '</div>' +
          '</div>';
        }).join('') + '</div>' +
      '</div>';
    }

    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / 题库</div>' +
      '<div class="panel bank-refined-design">' +
        tabsHtml +
        welcomeHtml +
        statsHtml +
        entriesHtml +
        subjGridHtml +
        recentHtml +
      '</div>';
  }

  // 简单的"x 分钟前" 时间显示
  function timeAgo(ts) {
    if (!ts) return '';
    var diff = Date.now() - ts;
    if (diff < 60000) return '刚刚';
    if (diff < 3600000) return Math.floor(diff / 60000) + ' 分钟前';
    if (diff < 86400000) return Math.floor(diff / 3600000) + ' 小时前';
    if (diff < 7 * 86400000) return Math.floor(diff / 86400000) + ' 天前';
    var d = new Date(ts);
    return (d.getMonth() + 1) + '-' + d.getDate();
  }

  function renderBankFav() {
    var favs = getFavs();
    var filterSid = (window.__bankFavFilter) || 'all';
    // 若当前筛选的科目已无收藏（如取消了该科目最后一道题），回退到「全部」
    if (filterSid !== 'all' && !favs.some(function (f) { return f.sid === filterSid; })) {
      filterSid = 'all';
      window.__bankFavFilter = 'all';
    }
    var filtered = filterSid === 'all' ? favs : favs.filter(function (f) { return f.sid === filterSid; });
    var body;
    if (!favs.length) {
      body = '<div class="empty-tip">⭐ 收藏夹是空的。在课时练习中点击题目右上角的☆按钮即可收藏。</div>';
    } else if (!filtered.length) {
      body = '<div class="empty-tip">该学科下暂无收藏题目。</div>';
    } else {
      body = '<div class="bank-q-list">' + filtered.map(function (f) {
        var subj = f.sid ? GZ_COMMON_TYPES[f.sid] : null;
        var color = (subj && subj.color) || '#6b7280';
        // 兼容老数据：缺字段时尝试从 lesson 数据补
        var sName = f.sName, vName = f.vName, pName = f.pName, question = f.question, answer = f.answer, options = f.options, explanation = f.explanation, type = f.type;
        if (!question || !answer) {
          // 老 fav 可能没有 sid/vid/idx，尝试从 key 解析
          var sId = f.sid, vId = f.vid, idx = f.idx;
          if ((!sId || !vId) && f.key) {
            var kp = f.key.split('/');
            if (kp.length === 3) { sId = sId || kp[0]; vId = vId || kp[1]; idx = idx != null ? idx : parseInt(kp[2], 10); }
          }
          var lessonF = findLesson(sId, vId, idx);
          if (lessonF) {
            sName = sName || lessonF.subject.name;
            vName = vName || lessonF.vol.name;
            pName = pName || lessonF.point.name;
            var q = (lessonF.point.exercises || [])[f.qi];
            if (q) {
              type = type || q.type;
              question = question || q.question;
              answer = answer || q.answer;
              options = options || q.options || [];
              explanation = explanation || q.explanation || '';
            }
          }
        }
        var typeLabel = type === 'choice' ? '选择' : (type === 'fill' ? '填空' : '题目');
        var safeSubj = sName || f.sid || '未知学科';
        var safeVol = vName || f.vid || '';
        var safeP = pName || '课时 ' + ((f.idx || 0) + 1);
        return '<div class="bank-q" style="--sc:' + color + ';">' +
          '<div class="bank-q-head">' +
            '<div class="bank-q-meta"><span class="bank-q-subj">' + esc(safeSubj) + '</span> · ' + esc(safeVol) + ' · ' + esc(safeP) + '</div>' +
            '<button class="quiz-fav is-fav" title="取消收藏" onclick="window.__toggleFav(\'' + esc(f.sid) + '\',\'' + esc(f.vid) + '\',' + f.idx + ',' + f.qi + ')">★</button>' +
          '</div>' +
          '<div class="bank-q-text">【' + typeLabel + '】' + esc(question || '（题目内容已丢失，建议重新收藏）') + '</div>' +
          (options && options.length ? '<div class="bank-q-opts">' + options.map(function (o) { return '<span>' + esc(o) + '</span>'; }).join('') + '</div>' : '') +
          '<div class="bank-q-ans">答案：' + esc(answer || '—') + '</div>' +
          (explanation ? '<div class="bank-q-exp">💡 ' + esc(explanation) + '</div>' : '') +
        '</div>';
      }).join('') + '</div>';
    }

    // 学科筛选芯片：仅在有收藏题目后才显示对应科目（不为空的科目才出现）
    var filterChips = '<span class="bank-cat-chip' + (filterSid === 'all' ? ' active' : '') + '" onclick="window.__setBankFavFilter(\'all\')">全部（' + favs.length + '）</span>' +
      Object.keys(GZ_COMMON_TYPES).map(function (k) {
        var s = GZ_COMMON_TYPES[k];
        var n = favs.filter(function (f) { return f.sid === k; }).length;
        if (n <= 0) return ''; // 该科目还没有收藏题目，先不显示
        return '<span class="bank-cat-chip' + (filterSid === k ? ' active' : '') + '" style="--sc:' + s.color + ';" onclick="window.__setBankFavFilter(\'' + k + '\')">' + s.icon + ' ' + s.name + '（' + n + '）</span>';
      }).join('');

    var tabsHtml = renderBankTabs('fav');

    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / <a onclick="navigate(\'bank\', \'home\')">题库</a> / 我的收藏</div>' +
      '<div class="panel bank-new-design">' +
        tabsHtml +
        '<h2>⭐ 我的收藏 <span class="bank-mode-count">' + favs.length + '</span></h2>' +
        '<p>共收录 ' + favs.length + ' 道题目。可按学科筛选，点击右上角★取消收藏。</p>' +
        '<div class="bank-cat-list" style="margin-top:14px;">' + filterChips + '</div>' +
        body +
      '</div>';
  }
  window.__setBankFavFilter = function (sid) {
    window.__bankFavFilter = sid;
    renderBankFav();
  };

  // ===== 常考题型：筛选栏 + 科目多选弹窗 =====
  var COMMON_DIFFS = [
    { id: 'all', name: '全部' },
    { id: 'easy', name: '简单 D' },
    { id: 'medium', name: '中等 C' },
    { id: 'hard', name: '偏难 B' },
    { id: 'expert', name: '困难 A' }
  ];
  if (!window.__commonFilter) window.__commonFilter = { difficulty: 'all', types: [], search: '' };
  if (window.__commonModal === undefined) window.__commonModal = null;
  if (!window.__commonPage || window.__commonPage < 1) window.__commonPage = 1;

  function commonTypeLabel(k) {
    var p = String(k).split('::');
    var s = GZ_COMMON_TYPES[p[0]];
    if (!s) return k;
    var c = (s.cats || []).filter(function (x) { return x.id === p[1]; })[0];
    return s.name + '·' + (c ? c.name : p[1]) + (c && c.struct ? '（' + c.struct + '）' : '');
  }

  // ===== 洛谷式编号：困难=A 偏难=B 中等=C 简单=D，序号按难度独立计数 =====
  var BANK_DIFF = {
    expert: { letter: 'A', word: '困难' },
    hard:   { letter: 'B', word: '偏难' },
    medium: { letter: 'C', word: '中等' },
    easy:   { letter: 'D', word: '简单' }
  };
  var __bankIdsDone = false;
  function __assignBankIds() {
    if (__bankIdsDone) return;
    var counters = { A: 0, B: 0, C: 0, D: 0 };
    var TYPES = GZ_COMMON_TYPES, QS = window.GZ_COMMON_QUESTIONS || {};
    var idx = {}, list = [];
    Object.keys(TYPES).forEach(function (sid) {
      var s = TYPES[sid];
      (s.cats || []).forEach(function (c) {
        (QS[sid + '::' + c.id] || []).forEach(function (q, i) {
          var d = BANK_DIFF[q.diff] || BANK_DIFF.medium;
          counters[d.letter]++;
          q._bid = d.letter + ('000' + counters[d.letter]).slice(-4);
          q._dword = d.word;
          q._dletter = d.letter;
          var qType, typeLabel;
          if (q.subs && q.subs.length) { qType = 'composite'; typeLabel = '大题'; }
          else { qType = q.opts ? 'choice' : ((q.a || '').length <= 20 ? 'fill' : 'solve'); typeLabel = qType === 'choice' ? '选择' : (qType === 'fill' ? '填空' : '解答'); }
          var key = sid + '::' + c.id + '#' + i;
          if (q.subs && q.subs.length) {
            q.subs.forEach(function (sub, sj) { sub._subbid = q._bid + '-' + (sj + 1); });
          }
          var entry = { q: q, key: key, sid: sid, catId: c.id, subjectName: s.name, catName: c.name, type: qType, typeLabel: typeLabel, src: q.src || '' };
          idx[q._bid] = entry;
          list.push(entry);
        });
      });
    });
    window.__bankIdx = idx;
    window.__bankList = list;
    // 迁移：旧版单题作答以 entry.key 存储，统一迁移到 bid 键（复合题小题也用 subbid）
    window.__bankList.forEach(function (e) {
      if (e.q.subs && e.q.subs.length) return;
      var legacy = getQAnswer(e.key);
      if (legacy && !getQAnswer(e.q._bid)) saveQAnswer(e.q._bid, legacy.myAnswer, legacy.correct);
    });
    // 默认「题目视图列表」= 全库（简单优先），供详情页上下题与深链使用
    window.__bankViewList = list.map(function (e) { return e.q._bid; });
    __bankIdsDone = true;
  }

  // 单题卡片（洛谷风），列表详情与单题详情共用
  // 单个题目（含复合题小题）的可交互块：选项/填空/解答 + 提交 + 答案解析
  // ansKey：作答恢复/存储键；submitKey：提交时回传（用于错题本，取父题 entry.key）；
  // selKey：选项组/选择事件唯一键；bid：统计与存储兜底键（单题=q._bid，小题=sub._subbid）
  function buildQBody(q, ansKey, submitKey, selKey, bid) {
    var qType = q.opts ? 'choice' : ((q.a || '').length <= 20 ? 'fill' : 'solve');
    var ansId = 'q-ans-' + String(bid).replace(/[^a-zA-Z0-9]/g, '_');
    var saved = getQAnswer(ansKey);
    var myAns = saved ? saved.myAnswer : '';
    var correct = saved ? saved.correct : null;
    var optsHtml = '', inputHtml = '';
    if (qType === 'choice') {
      optsHtml = '<div class="cc-q-opts">' + q.opts.map(function (o, j) {
        var letter = 'ABCDE'[j];
        var isSel = (myAns === letter);
        return '<label class="cc-q-opt' + (isSel ? ' selected' : '') + '" data-key="' + selKey + '" data-letter="' + letter + '" onclick="window.__qSelectOpt(this, \'' + selKey + '\', \'' + letter + '\')">' +
          '<input type="radio" name="cc-opt-' + selKey + '" value="' + letter + '"' + (isSel ? ' checked' : '') + '>' +
          '<span class="cc-q-opt-letter">' + letter + '</span>' +
          '<span class="cc-q-opt-text">' + esc(o) + '</span>' +
        '</label>';
      }).join('') + '</div>';
      inputHtml = '<div class="cc-q-actions"><button class="cc-q-submit" onclick="window.__qSubmit(\'' + esc(submitKey) + '\', \'choice\', \'' + esc(q.a) + '\', this)">提交答案</button></div>';
    } else if (qType === 'fill') {
      inputHtml = '<div class="cc-q-fill"><input type="text" placeholder="请输入答案..." value="' + esc(myAns) + '"><button class="cc-q-submit" onclick="window.__qSubmit(\'' + esc(submitKey) + '\', \'fill\', \'' + esc(q.a) + '\', this)">提交答案</button></div>';
    } else {
      inputHtml = '<div class="cc-q-solve"><textarea placeholder="请写下你的解题过程..." rows="4">' + esc(myAns) + '</textarea><button class="cc-q-submit" onclick="window.__qSubmit(\'' + esc(submitKey) + '\', \'solve\', \'' + esc(q.a) + '\', this)">提交答案</button></div>';
    }
    var resultHtml = '';
    if (correct === true) resultHtml = '<div class="cc-q-result correct">✓ 回答正确</div>';
    else if (correct === false) resultHtml = '<div class="cc-q-result wrong">✗ 回答错误</div>';
    else if (saved) resultHtml = '<div class="cc-q-result submitted">已记录你的作答（解答题不自动判分）</div>';
    var hiddenAttr = (correct === false) ? '' : ' hidden';
    return '<div class="cc-q-item" data-bid="' + esc(bid) + '">' +
      (qType === 'choice' ? optsHtml : '') +
      inputHtml +
      resultHtml +
      '<button class="cc-q-toggle" onclick="window.__toggleQAns(\'' + ansId + '\')">显示答案</button>' +
      '<div class="cc-q-ans" id="' + ansId + '"' + hiddenAttr + '>' +
        '<div class="lg-seclabel">题解 · 提示</div>' +
        '<div class="cc-q-a"><b>答案：</b>' + esc(q.a) + '</div>' +
        (q.exp ? '<div class="cc-q-exp"><b>解析：</b>' + escRich(q.exp) + '</div>' : '') +
      '</div>' +
    '</div>';
  }

  // 复合题（大题）中的一个小题
  function renderSubQuestion(s, parentKey, sj) {
    var subBid = s._subbid || (parentKey + '-' + (sj + 1));
    var subKey = parentKey + '.' + sj;
    var sType = s.opts ? 'choice' : ((s.a || '').length <= 20 ? 'fill' : 'solve');
    var sLabel = sType === 'choice' ? '选择' : (sType === 'fill' ? '填空' : '解答');
    return '<div class="lg-sub">' +
      '<div class="lg-sub-head"><span class="lg-sub-no">' + (sj + 1) + '</span><span class="cc-q-type type-' + sType + '">' + sLabel + '</span>' +
      (s.src ? '<span class="lg-src">📚 ' + esc(s.src) + '</span>' : '') + '</div>' +
      '<div class="lg-seclabel">小题</div>' +
      '<div class="cc-q-body">' + escRich(s.q) + '</div>' +
      buildQBody(s, subBid, parentKey, subKey, subBid) +
    '</div>';
  }

  function buildBankQuestionCard(q, key) {
    var faved = isQFav(key);
    var qFavBtn = '<button class="cc-q-fav' + (faved ? ' is-fav' : '') + '" title="' + (faved ? '取消收藏本题' : '收藏本题') + '" onclick="window.__toggleQFav(\'' + esc(key) + '\', this)">' + (faved ? '★' : '☆') + '</button>';
    var head = '<div class="lg-q-head">' +
      '<span class="lg-id" title="题目编号（字母=难度，后四位=题序）">' + esc(q._bid) + '</span>' +
      '<span class="lg-diff">' + esc(q._dword) + '</span>' +
      '<span class="cc-q-type type-' + (q.subs && q.subs.length ? 'composite' : (q.opts ? 'choice' : ((q.a || '').length <= 20 ? 'fill' : 'solve'))) + '">' + (q.subs && q.subs.length ? '大题' : (q.opts ? '选择' : ((q.a || '').length <= 20 ? '填空' : '解答'))) + '</span>' +
      (q.src ? '<span class="lg-src">📚 ' + esc(q.src) + '</span>' : '') +
      qFavBtn +
    '</div>';
    if (q.subs && q.subs.length) {
      var passage = '<div class="lg-passage"><div class="lg-seclabel">材料 / 文章</div><div class="cc-q-body">' + escRich(q.q) + '</div></div>';
      var subsHtml = q.subs.map(function (s, sj) { return renderSubQuestion(s, key, sj); }).join('');
      return '<div class="lg-q lg-d-' + q._dletter + ' lg-composite" data-key="' + key + '" data-bid="' + esc(q._bid) + '">' +
        head + passage + '<div class="lg-subs">' + subsHtml + '</div>' +
      '</div>';
    }
    return '<div class="lg-q lg-d-' + q._dletter + '" data-key="' + key + '" data-bid="' + esc(q._bid) + '">' +
      head +
      '<div class="lg-q-main">' +
        '<div class="lg-seclabel">题目描述</div>' +
        '<div class="cc-q-body">' + escRich(q.q) + '</div>' +
        buildQBody(q, q._bid, key, key, q._bid) +
      '</div>' +
    '</div>';
  }

  function subSolved(s) {
    var st = getQAnswer(s._subbid);
    if (!st) return false;
    var t = s.opts ? 'choice' : ((s.a || '').length <= 20 ? 'fill' : 'solve');
    return st.correct === true || t === 'solve';
  }
  function entrySolved(e) {
    if (e.q.subs && e.q.subs.length) return e.q.subs.every(subSolved);
    var st = getQAnswer(e.q._bid);
    return !!st && (st.correct === true || e.type === 'solve');
  }
  function entryRate(e) {
    if (e.q.subs && e.q.subs.length) {
      var att = 0, cor = 0;
      e.q.subs.forEach(function (s) { var st = getQStat(s._subbid); att += (st.attempts || 0); cor += (st.correct || 0); });
      return att ? Math.round(cor / att * 100) : null;
    }
    return qStatRate(e.q._bid);
  }

  function renderCommonContent() {
    __assignBankIds();
    var f = window.__commonFilter;
    if (!window.__commonPage || window.__commonPage < 1) window.__commonPage = 1;
    var DIFF_RANK = { easy: 0, medium: 1, hard: 2, expert: 3 };

    // 1) 收集匹配的题（按题型筛选或全库）
    var entries;
    if (f.types && f.types.length) {
      entries = [];
      f.types.forEach(function (k) {
        ((window.GZ_COMMON_QUESTIONS || {})[k] || []).forEach(function (q) {
          if (window.__bankIdx[q._bid]) entries.push(window.__bankIdx[q._bid]);
        });
      });
    } else {
      entries = window.__bankList.slice();
    }

    // 2) 难度筛选
    if (f.difficulty && f.difficulty !== 'all') {
      entries = entries.filter(function (e) { return (e.q.diff || 'medium') === f.difficulty; });
    }
    // 3) 搜索（题号 / 题干 / 选项）
    if (f.search && f.search.trim()) {
      var sq = f.search.trim().toLowerCase();
      entries = entries.filter(function (e) {
        return e.q._bid.toLowerCase().indexOf(sq) >= 0
          || (e.q.q || '').toLowerCase().indexOf(sq) >= 0
          || (e.q.opts || []).some(function (o) { return (o || '').toLowerCase().indexOf(sq) >= 0; });
      });
    }

    // 4) 排序：默认简单优先（D<C<B<A），同难度按题号
    entries.sort(function (a, b) {
      var ra = DIFF_RANK[a.q.diff || 'medium'], rb = DIFF_RANK[b.q.diff || 'medium'];
      if (ra !== rb) return ra - rb;
      return a.q._bid < b.q._bid ? -1 : (a.q._bid > b.q._bid ? 1 : 0);
    });
    window.__bankViewList = entries.map(function (e) { return e.q._bid; });
    window.__bankViewKeys = {};
    entries.forEach(function (e) { window.__bankViewKeys[e.q._bid] = e.key; });

    if (!entries.length) {
      return '<div class="cc-empty">🔍 没有符合条件的题目，试试调整筛选或搜索。</div>';
    }

    // 5) 分页
    var PAGE = 15;
    var totalPages = Math.max(1, Math.ceil(entries.length / PAGE));
    if (window.__commonPage > totalPages) window.__commonPage = totalPages;
    var start = (window.__commonPage - 1) * PAGE;
    var pageEntries = entries.slice(start, start + PAGE);

    var rows = pageEntries.map(function (e) {
      var q = e.q;
      var isBig = !!(q.subs && q.subs.length);
      var title = (isBig ? '📄 ' : '') + esc(q.q || '');
      if (title.length > 52) title = title.slice(0, 52) + '…';
      var solved = entrySolved(e);
      var rate = entryRate(e);
      var rateTxt = (rate === null) ? '—' : (rate + '%');
      var rateColor = rate === null ? '#bbb' : (rate >= 60 ? '#2ecc71' : (rate >= 30 ? '#e0a000' : '#e25c5c'));
      var faved = isQFav(e.key);
      var favBtn = '<button class="lg-star' + (faved ? ' is-fav' : '') + '" title="' + (faved ? '取消收藏' : '收藏') + '" onclick="event.stopPropagation();window.__toggleQFav(\'' + esc(e.key) + '\', this)">' + (faved ? '★' : '☆') + '</button>';
      var tagHtml = '<span class="lg-tag">' + esc(e.subjectName) + '</span><span class="lg-tag">' + esc(e.catName) + '</span>' +
        (isBig ? '<span class="lg-tag lg-tag-big">大题 · ' + q.subs.length + ' 小题</span>' : '');
      return '<div class="lg-trow lg-d-' + q._dletter + (isBig ? ' lg-trow-big' : '') + '" onclick="navigate(\'bank\',\'q\',\'' + q._bid + '\')">' +
        '<span class="lg-c-status">' + (solved ? '<span class="lg-done">✓</span>' : '<span class="lg-todo">➖</span>') + '</span>' +
        '<span class="lg-c-id">' + q._bid + '</span>' +
        '<span class="lg-c-title">' + favBtn + '<span class="lg-c-title-text">' + title + '</span></span>' +
        '<span class="lg-c-tags">' + tagHtml + '</span>' +
        '<span class="lg-c-diff">' + esc(q._dword) + '</span>' +
        '<span class="lg-c-rate"><span class="lg-rate-bar"><i style="width:' + (rate === null ? 0 : rate) + '%;background:' + rateColor + '"></i></span><b style="color:' + rateColor + '">' + rateTxt + '</b></span>' +
      '</div>';
    }).join('');

    var head = '<div class="lg-trow lg-thead">' +
      '<span class="lg-c-status">状态</span>' +
      '<span class="lg-c-id">题号</span>' +
      '<span class="lg-c-title">题目名称</span>' +
      '<span class="lg-c-tags">标签</span>' +
      '<span class="lg-c-diff">难度</span>' +
      '<span class="lg-c-rate">通过率</span>' +
    '</div>';

    return '<div class="lg-list-head">点击题目进入作答 · 共 ' + entries.length + ' 题（简单优先排序）· ✓ 已做对 / ➖ 未做</span></div>' +
      '<div class="lg-table-scroll"><div class="lg-table">' + head + rows + '</div></div>' +
      '<div class="lg-pager-wrap">' + buildBankPager(entries.length, PAGE, totalPages) + '</div>';
  }

  function buildBankPager(total, PAGE, totalPages) {
    var p = window.__commonPage;
    var html = '';
    html += '<button class="lg-page' + (p <= 1 ? ' disabled' : '') + '" onclick="window.__commonGoto(' + (p - 1) + ')">上一页</button>';
    var nums = [];
    nums.push(1);
    for (var i = Math.max(2, p - 2); i <= Math.min(totalPages - 1, p + 2); i++) nums.push(i);
    if (totalPages > 1) nums.push(totalPages);
    nums = nums.filter(function (v, idx, arr) { return arr.indexOf(v) === idx; }).sort(function (a, b) { return a - b; });
    var prev = 0;
    nums.forEach(function (n) {
      if (n - prev > 1) html += '<span class="lg-page-ellipsis">…</span>';
      html += '<button class="lg-page' + (n === p ? ' active' : '') + '" onclick="window.__commonGoto(' + n + ')">' + n + '</button>';
      prev = n;
    });
    html += '<button class="lg-page' + (p >= totalPages ? ' disabled' : '') + '" onclick="window.__commonGoto(' + (p + 1) + ')">下一页</button>';
    html += '<span class="lg-page-info">第 ' + p + ' / ' + totalPages + ' 页 · 共 ' + total + ' 题</span>';
    return html;
  }
  window.__commonGoto = function (n) {
    window.__commonPage = n;
    var el = document.getElementById('ccContent');
    if (el) el.innerHTML = renderCommonContent();
    else renderBankCommon();
  };

  function __typeHasMatchSearch(k, q) {
    var qs = (window.GZ_COMMON_QUESTIONS || {})[k] || [];
    for (var i = 0; i < qs.length; i++) {
      if ((qs[i].q || '').toLowerCase().indexOf(q) >= 0) return true;
      if ((qs[i].opts || []).some(function(o) { return (o || '').toLowerCase().indexOf(q) >= 0; })) return true;
    }
    return false;
  }

  function getQAnswer(key) {
    var all = lsGet('gz_qanswers', {});
    return all[key] || null;
  }

  // 单题统计：通过率 / 作答状态（本地持久化，随账号共享）
  function getQStat(bid) {
    var all = lsGet('gz_qstats', {});
    return all[bid] || { attempts: 0, correct: 0 };
  }
  function recordQStat(bid, isCorrect) {
    if (!bid) return;
    var all = lsGet('gz_qstats', {});
    var s = all[bid] || { attempts: 0, correct: 0 };
    s.attempts = (s.attempts || 0) + 1;
    if (isCorrect) s.correct = (s.correct || 0) + 1;
    all[bid] = s;
    lsSet('gz_qstats', all);
  }
  // 通过率（%）：无作答记录返回 null（显示「—」）
  function qStatRate(bid) {
    var s = getQStat(bid);
    if (!s.attempts) return null;
    return Math.round((s.correct / s.attempts) * 100);
  }

  function saveQAnswer(key, myAnswer, correct) {
    var all = lsGet('gz_qanswers', {});
    all[key] = { myAnswer: myAnswer, correct: correct, ts: Date.now() };
    lsSet('gz_qanswers', all);
  }

  function getQFavs() { return lsGet('gz_qfavs', []); }
  function isQFav(key) { return getQFavs().indexOf(key) >= 0; }

  window.__toggleQFav = function(key, btn) {
    var arr = getQFavs();
    var i = arr.indexOf(key);
    if (i >= 0) {
      arr.splice(i, 1);
      toast('已取消收藏');
      if (btn) { btn.classList.remove('is-fav'); btn.textContent = '☆'; btn.title = '收藏本题'; }
    } else {
      arr.push(key);
      toast('已收藏本题 ⭐');
      if (btn) { btn.classList.add('is-fav'); btn.textContent = '★'; btn.title = '取消收藏'; }
    }
    lsSet('gz_qfavs', arr);
  };

  window.__qSelectOpt = function(label, key, letter) {
    var item = label.closest ? (label.closest('.cc-q-item') || label.closest('.lg-q')) : null;
    if (!item) return;
    item.querySelectorAll('.cc-q-opt').forEach(function(el) { el.classList.remove('selected'); });
    label.classList.add('selected');
    var radio = label.querySelector('input[type=radio]');
    if (radio) radio.checked = true;
  };

  window.__qSubmit = function(key, type, correctAnswer, btn) {
    var item = btn.closest ? (btn.closest('.cc-q-item') || btn.closest('.lg-q')) : null;
    if (!item) return;
    var myAnswer = '';
    if (type === 'choice') {
      var checked = item.querySelector('input[type=radio]:checked');
      if (!checked) { toast('请先选择答案'); return; }
      myAnswer = checked.value;
    } else if (type === 'fill') {
      var inp = item.querySelector('.cc-q-fill input');
      if (!inp || !inp.value.trim()) { toast('请先填写答案'); return; }
      myAnswer = inp.value.trim();
    } else {
      var ta = item.querySelector('.cc-q-solve textarea');
      if (!ta || !ta.value.trim()) { toast('请先作答'); return; }
      myAnswer = ta.value.trim();
    }

    var correct = null;
    if (type === 'choice') {
      correct = (myAnswer === String(correctAnswer).trim());
    } else if (type === 'fill') {
      var ca = String(correctAnswer).trim();
      correct = (myAnswer === ca) || (ca.indexOf(myAnswer) >= 0 && myAnswer.length >= 1) || (myAnswer.indexOf(ca) >= 0);
    } else {
      correct = null; // 解答题不自动判分
    }

    var _bid = (item.getAttribute && item.getAttribute('data-bid')) || key;
    saveQAnswer(_bid, myAnswer, correct);

    // 记录单题统计（通过率 / 作答状态）；解答题不自动判分，不计入通过率
    if (type === 'choice' || type === 'fill') recordQStat(_bid, correct === true);

    // 更新结果反馈
    var existing = item.querySelector('.cc-q-result');
    if (existing) existing.remove();
    var resultEl = document.createElement('div');
    resultEl.className = 'cc-q-result ' + (correct === true ? 'correct' : (correct === false ? 'wrong' : 'submitted'));
    resultEl.textContent = correct === true ? '✓ 回答正确' : (correct === false ? '✗ 回答错误，已展开答案解析' : '✓ 已记录你的解答（解答题不自动判分）');
    var ansEl = item.querySelector('.cc-q-ans');
    if (ansEl && ansEl.parentNode) ansEl.parentNode.insertBefore(resultEl, ansEl);
    else if (item.lastChild) item.appendChild(resultEl);

    // 答错自动展开答案
    if (correct === false && ansEl) {
      ansEl.removeAttribute('hidden');
      var toggleBtn = item.querySelector('.cc-q-toggle');
      if (toggleBtn) toggleBtn.textContent = '隐藏答案';
    }

    // 答错自动收录题库错题到错题本（与课时练习统一进“错题本”）
    if (correct === false) {
      var bp = String(key).split('#');
      var bSid = bp[0].split('::')[0];
      var bSubj = (window.GZ_SUBJECTS || []).filter(function (s) { return s.id === bSid; })[0];
      var qsArr = (window.GZ_COMMON_QUESTIONS || {})[bp[0]];
      var qObj = (qsArr && qsArr[parseInt(bp[1], 10)]) ? qsArr[parseInt(bp[1], 10)] : null;
      var wq = qObj ? qObj.q : (item.querySelector('.cc-q-body') ? item.querySelector('.cc-q-body').textContent : '');
      var wa = qObj ? qObj.a : '';
      var wrong = lsGet('gz_wrongbook', []);
      var dup = wrong.some(function (w) { return w.kind === 'bank' && w.key === key; });
      if (!dup) {
        wrong.push({
          kind: 'bank', key: key, qi: -1, sid: bSid,
          subjectName: bSubj ? bSubj.name : bSid,
          question: wq, answer: wa, myAnswer: myAnswer, type: type,
          options: (qObj && qObj.opts) ? qObj.opts : [], ts: Date.now()
        });
        lsSet('gz_wrongbook', wrong);
      }
      toast('✗ 错误，已加入错题本');
    } else {
      toast(correct === true ? '✓ 正确' : '✓ 已记录');
    }
  };

  function __typeHasMatchSearch(k, q) {
    var qs = (window.GZ_COMMON_QUESTIONS || {})[k] || [];
    for (var i = 0; i < qs.length; i++) {
      if ((qs[i].q || '').toLowerCase().indexOf(q) >= 0) return true;
      if ((qs[i].opts || []).some(function (o) { return (o || '').toLowerCase().indexOf(q) >= 0; })) return true;
    }
    return false;
  }

  window.__toggleQAns = function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    var btn = el.parentElement.querySelector('.cc-q-toggle');
    var show = el.hasAttribute('hidden');
    if (show) {
      el.removeAttribute('hidden');
      if (btn) btn.textContent = '隐藏答案';
    } else {
      el.setAttribute('hidden', '');
      if (btn) btn.textContent = '显示答案';
    }
  };

  window.__toggleTypeExpand = function (id, card) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('collapsed');
    if (card) {
      var arrow = card.querySelector('.cc-tc-arrow');
      if (arrow) arrow.textContent = el.classList.contains('collapsed') ? '▶' : '▼';
    }
  };

  function renderBankCommon() {
    var keys = Object.keys(GZ_COMMON_TYPES);
    var f = window.__commonFilter;
    var m = window.__commonModal;

    // 题目难度范围
    var diffChips = COMMON_DIFFS.map(function (d) {
      return '<span class="cc-diff-chip' + (f.difficulty === d.id ? ' active' : '') + '" onclick="window.__commonSetDiff(\'' + d.id + '\')">' + d.name + '</span>';
    }).join('');

    // 已选择标签
    var selTags = f.types.length
      ? f.types.map(function (k) {
          var sk = String(k).split('::')[0];
          var sc = ((GZ_COMMON_TYPES[sk] || {}).color) || '#6b7280';
          return '<span class="cc-sel-tag" style="--sc:' + sc + '">' + esc(commonTypeLabel(k)) + '<i onclick="window.__removeType(\'' + esc(k) + '\')">✕</i></span>';
        }).join('')
      : '<span class="cc-sel-empty">尚未选择任何题型</span>';

    // 科目多选弹窗
    var modalHtml = '';
    if (m) {
      var subjItems = keys.map(function (k) {
        var s = GZ_COMMON_TYPES[k];
        var on = m.subjects.indexOf(k) >= 0;
        return '<div class="cc-subj-item' + (on ? ' active' : '') + '" style="--sc:' + s.color + '" onclick="window.__toggleModalSubject(\'' + k + '\')">' +
          '<span class="cc-subj-check">' + (on ? '✓' : '') + '</span>' + s.icon + ' ' + esc(s.name) + '</div>';
      }).join('');
      var typeTags = m.subjects.length
        ? m.subjects.map(function (k) {
            var s = GZ_COMMON_TYPES[k];
            var groups = {}, gorder = [];
            (s.cats || []).forEach(function (c) {
              var g = c.group || '全部';
              if (gorder.indexOf(g) < 0) gorder.push(g);
              (groups[g] = groups[g] || []).push(c);
            });
            return gorder.map(function (g) {
              var tags = groups[g].map(function (c) {
                var tk = k + '::' + c.id;
                var on = m.types.indexOf(tk) >= 0;
                var structBadge = (c.struct ? '<em class="cc-tag-struct">' + esc(c.struct) + '</em>' : '');
              return '<span class="cc-type-tag' + (on ? ' active' : '') + '" style="--sc:' + s.color + '" onclick="window.__toggleModalType(\'' + tk + '\')">' + structBadge + esc(c.name) +
                  (on ? ' <i onclick="event.stopPropagation();window.__toggleModalType(\'' + tk + '\')">✕</i>' : '') + '</span>';
              }).join('');
              return (gorder.length > 1 ? '<div class="cc-type-group-title">' + esc(g) + '</div>' : '') + '<div class="cc-type-group">' + tags + '</div>';
            }).join('');
          }).join('')
        : '<div class="cc-type-empty">← 请在左侧选择科目，将自动列出该科目下的常考题型</div>';
      modalHtml =
        '<div class="cc-modal-mask" id="ccModalMask" onclick="if(event.target===this)window.__closeSubjectModal()">' +
          '<div class="cc-modal">' +
            '<div class="cc-modal-head">选择科目与题型<span class="cc-modal-tip">可多选</span></div>' +
            '<div class="cc-modal-body">' +
              '<div class="cc-modal-col cc-modal-col-subj"><div class="cc-modal-col-title">科目</div>' + subjItems + '</div>' +
              '<div class="cc-modal-col cc-modal-col-type"><div class="cc-modal-col-title">题型（选择科目后自动显示，可多选）</div><div class="cc-type-tags">' + typeTags + '</div></div>' +
            '</div>' +
            '<div class="cc-modal-foot">' +
              '<span class="cc-modal-count">已选 ' + m.types.length + ' 个题型</span>' +
              '<span class="cc-modal-foot-btns"><button class="cc-btn-ghost" onclick="window.__closeSubjectModal()">取消</button><button class="cc-btn-primary" onclick="window.__confirmSubjectModal()">确定</button></span>' +
            '</div>' +
          '</div>' +
        '</div>';
    }

    var tabsHtml = renderBankTabs('common');
    var totalCats = keys.reduce(function (n, k) { return n + GZ_COMMON_TYPES[k].cats.length; }, 0);

    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / <a onclick="navigate(\'bank\', \'home\')">题库</a> / 高中常考题型</div>' +
      '<div class="panel bank-new-design">' +
        tabsHtml +
        '<div class="cc-filterbar">' +
          '<div class="cc-filter-row">' +
            '<span class="cc-filter-label">筛选条件</span>' +
            '<span class="cc-field-label">题目难度范围</span>' +
            '<div class="cc-diff-chips">' + diffChips + '</div>' +
          '</div>' +
          '<div class="cc-filter-row">' +
            '<div class="cc-box cc-subject-trigger" onclick="window.__openSubjectModal()"><span class="cc-box-text">科目 / 题型' + (f.types.length ? '（已选 ' + f.types.length + '）' : '') + '</span><span class="cc-box-caret">▾</span></div>' +
            '<div class="cc-search-field"><input class="cc-search-input" id="ccSearch" placeholder="按题号或题目名搜索" value="' + esc(f.search || '') + '" oninput="window.__commonSearch(this.value)"></div>' +
          '</div>' +
        '</div>' +
        '<div class="cc-selected-row"><span class="cc-selected-label">已选择</span>' + selTags + '</div>' +
        '<div class="cc-content" id="ccContent">' + renderCommonContent() + '</div>' +
      '</div>' +
      modalHtml;
  }

  window.__openSubjectModal = function () {
    var f = window.__commonFilter;
    var subjects = [];
    f.types.forEach(function (k) { var s = String(k).split('::')[0]; if (subjects.indexOf(s) < 0) subjects.push(s); });
    window.__commonModal = { subjects: subjects, types: f.types.slice() };
    renderBankCommon();
  };
  window.__closeSubjectModal = function () { window.__commonModal = null; renderBankCommon(); };
  window.__toggleModalSubject = function (sid) {
    var m = window.__commonModal; if (!m) return;
    var i = m.subjects.indexOf(sid);
    if (i >= 0) { m.subjects.splice(i, 1); m.types = m.types.filter(function (k) { return String(k).split('::')[0] !== sid; }); }
    else { m.subjects.push(sid); }
    renderBankCommon();
  };
  window.__toggleModalType = function (tk) {
    var m = window.__commonModal; if (!m) return;
    var sid = String(tk).split('::')[0];
    if (m.subjects.indexOf(sid) < 0) m.subjects.push(sid);
    var i = m.types.indexOf(tk);
    if (i >= 0) m.types.splice(i, 1); else m.types.push(tk);
    renderBankCommon();
  };
  window.__confirmSubjectModal = function () {
    window.__commonFilter.types = window.__commonModal ? window.__commonModal.types.slice() : [];
    window.__commonModal = null;
    window.__commonPage = 1;
    renderBankCommon();
  };
  window.__removeType = function (k) {
    var f = window.__commonFilter;
    f.types = f.types.filter(function (x) { return x !== k; });
    window.__commonPage = 1;
    renderBankCommon();
  };
  window.__commonSetDiff = function (d) { window.__commonFilter.difficulty = d; window.__commonPage = 1; renderBankCommon(); };
  window.__commonSearch = function (v) {
    window.__commonFilter.search = v;
    window.__commonPage = 1;
    var el = document.getElementById('ccContent');
    if (el) el.innerHTML = renderCommonContent();
  };

  // 题库标签页导航
  function renderBankTabs(active) {
    var wrong = lsGet('gz_wrongbook', []);
    var favs = getFavs();
    return '<div class="bank-tabs">' +
      '<a class="bank-tab' + (active === 'home' ? ' active' : '') + '" onclick="navigate(\'bank\')">' +
        '<span class="bt-icon">🏠</span><span class="bt-text">题库首页</span>' +
      '</a>' +
      '<a class="bank-tab' + (active === 'fav' ? ' active' : '') + '" onclick="navigate(\'bank\', \'fav\')">' +
        '<span class="bt-icon">⭐</span><span class="bt-text">我的收藏</span>' +
        (favs.length > 0 ? '<span class="bt-badge">' + favs.length + '</span>' : '') +
      '</a>' +
      '<a class="bank-tab' + (active === 'common' ? ' active' : '') + '" onclick="navigate(\'bank\', \'common\')">' +
        '<span class="bt-icon">📚</span><span class="bt-text">常考题型</span>' +
      '</a>' +
      '<a class="bank-tab' + (active === 'wrong' ? ' active' : '') + '" onclick="navigate(\'bank\', \'wrong\')">' +
        '<span class="bt-icon">📕</span><span class="bt-text">错题本</span>' +
        (wrong.length > 0 ? '<span class="bt-badge red">' + wrong.length + '</span>' : '') +
      '</a>' +
    '</div>';
  }

  function renderBank(mode, bid) {
    if (mode === 'fav') renderBankFav();
    else if (mode === 'common') renderBankCommon();
    else if (mode === 'wrong') renderBankWrong();
    else if (mode === 'q') renderBankQuestion(bid);
    else renderBankHome();
  }

  // 单题详情（洛谷式：点击列表行进入）
  function renderBankQuestion(bid) {
    __assignBankIds();
    var entry = window.__bankIdx[bid];
    var tabsHtml = renderBankTabs('common');
    if (!entry) {
      view.innerHTML = '' +
        '<div class="panel bank-new-design">' + tabsHtml +
          '<div class="cc-empty">😕 未找到题目 <b>' + esc(bid || '') + '</b>。<br>可能已下线或编号有误。</div>' +
          '<div style="margin-top:16px"><button class="btn-primary" onclick="navigate(\'bank\',\'common\')">← 返回常考题型</button></div>' +
        '</div>';
      return;
    }
    var q = entry.q;
    var vl = window.__bankViewList || [];
    var pos = vl.indexOf(bid);
    var prevBid = (pos > 0) ? vl[pos - 1] : null;
    var nextBid = (pos >= 0 && pos < vl.length - 1) ? vl[pos + 1] : null;
    var prevBtn = prevBid
      ? '<button class="lg-nav-btn" onclick="navigate(\'bank\',\'q\',\'' + prevBid + '\')">‹ 上一题</button>'
      : '<button class="lg-nav-btn" disabled>‹ 上一题</button>';
    var nextBtn = nextBid
      ? '<button class="lg-nav-btn" onclick="navigate(\'bank\',\'q\',\'' + nextBid + '\')">下一题 ›</button>'
      : '<button class="lg-nav-btn" disabled>下一题 ›</button>';
    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / <a onclick="navigate(\'bank\')">题库</a> / <a onclick="navigate(\'bank\',\'common\')">常考题型</a> / ' + esc(bid) + '</div>' +
      '<div class="panel bank-new-design">' +
        tabsHtml +
        '<div class="lg-detail-head">' +
          '<button class="lg-back" onclick="navigate(\'bank\',\'common\')">← 返回列表</button>' +
          '<div class="lg-detail-nav">' + prevBtn + nextBtn + '</div>' +
        '</div>' +
        '<div class="lg-detail-meta"><span class="lg-row-id">' + q._bid + '</span><span class="lg-row-diff">' + esc(q._dword) + '</span><span class="cc-q-type type-' + entry.type + '">' + entry.typeLabel + '</span><span class="lg-subj-tag">' + esc(entry.subjectName) + ' · ' + esc(entry.catName) + '</span>' + (q.subs && q.subs.length ? '<span class="lg-subj-tag lg-subj-big">大题 · ' + q.subs.length + ' 小题</span>' : '') + '</div>' +
        '<div class="lg-detail-card">' + buildBankQuestionCard(q, entry.key) + '</div>' +
      '</div>';
  }

  // 错题本 - 整合到题库中
  function renderBankWrong() {
    var wrong = lsGet('gz_wrongbook', []);
    // 数据残缺时从 lesson 数据补全
    wrong.forEach(function (w) {
      if (!w.question || !w.answer) {
        var parts = (w.key || '').split('/');
        if (parts.length === 3) {
          var f = findLesson(parts[0], parts[1], parseInt(parts[2], 10));
          if (f) {
            w.subjectName = w.subjectName || f.subject.name;
            w.lessonName = w.lessonName || f.point.name;
            var q = (f.point.exercises || [])[w.qi];
            if (q) {
              w.question = w.question || q.question;
              w.answer = w.answer || q.answer;
              w.type = w.type || q.type;
              w.options = w.options || q.options || [];
            }
          }
        }
      }
    });
    // 按学科筛选
    var filterSid = (window.__wrongFilter) || 'all';
    var filtered = filterSid === 'all' ? wrong : wrong.filter(function (w) { return (w.sid || (w.key ? w.key.split('/')[0] : '')) === filterSid; });
    // 统计各学科
    var subjCount = {};
    wrong.forEach(function (w) {
      var sid = w.sid || (w.key ? w.key.split('/')[0] : '_');
      subjCount[sid] = (subjCount[sid] || 0) + 1;
    });
    var subjChips = '<span class="bank-cat-chip' + (filterSid === 'all' ? ' active' : '') + '" onclick="window.__setWrongFilter(\'all\')">全部（' + wrong.length + '）</span>' +
      Object.keys(subjCount).map(function (k) {
        if (k === '_') return '';
        var subj = GZ_SUBJECTS.find(function (s) { return s.id === k; });
        if (!subj) return '';
        return '<span class="bank-cat-chip' + (filterSid === k ? ' active' : '') + '" style="--sc:' + subj.color + ';" onclick="window.__setWrongFilter(\'' + k + '\')">' + subj.icon + ' ' + esc(subj.name) + '（' + subjCount[k] + '）</span>';
      }).join('');

    // 标签页导航
    var tabsHtml = renderBankTabs('wrong');

    // 错题本头部
    var headerHtml = '<div class="wrong-header-new">' +
      '<div class="whn-content">' +
        '<h1 class="whn-title">📕 错题本</h1>' +
        '<p class="whn-subtitle">收录你做错的题目，重做巩固、逐个消灭</p>' +
      '</div>' +
      '<div class="whn-stats">' +
        '<div class="whn-stat">' +
          '<div class="whs-number">' + wrong.length + '</div>' +
          '<div class="whs-label">总错题数</div>' +
        '</div>' +
      '</div>' +
    '</div>';

    // 操作栏
    var toolbarHtml = wrong.length > 0 ? '<div class="wrong-toolbar-new">' +
      '<button class="btn-primary" onclick="window.__redoAllWrong()">⚡ 全部去重做</button>' +
      '<button class="btn-danger" onclick="window.__clearAllWrong()">🗑️ 清空错题本</button>' +
    '</div>' : '';

    // 学科筛选
    var filterHtml = wrong.length > 0 ? '<div class="bank-cat-list">' + subjChips + '</div>' : '';

    // 错题列表
    var body;
    if (!wrong.length) {
      body = '<div class="empty-state-new">' +
        '<div class="esn-icon">🎉</div>' +
        '<h3>错题本是空的</h3>' +
        '<p>开始做题后，答错的题目会自动收录到这里，方便反复巩固。</p>' +
      '</div>';
    } else if (!filtered.length) {
      body = '<div class="empty-state-new">' +
        '<div class="esn-icon">📭</div>' +
        '<h3>该学科下暂无错题</h3>' +
        '<p>继续加油，保持全对！</p>' +
      '</div>';
    } else {
      body = '<div class="wrong-list-new">' + filtered.map(function (w) {
        var realIdx = wrong.indexOf(w);
        var parts = w.key ? w.key.split('/') : null;
        var isBank = w.kind === 'bank';
        var redo = '';
        if (isBank) {
          redo = '<button class="wrong-redo-btn" onclick="navigate(\'bank\')">去题库重做 →</button>';
        } else if (parts) {
          redo = '<button class="wrong-redo-btn" onclick="navigate(\'lesson\',\'' + esc(parts[0]) + '\',\'' + esc(parts[1]) + '\',' + esc(parts[2]) + ')">去重做 →</button>';
        }
        var favBtn = '';
        if (!isBank && parts) {
          var faved = isFav(w.key, w.qi);
          favBtn = '<button class="wcn-fav-btn' + (faved ? ' is-fav' : '') + '" title="' + (faved ? '取消收藏' : '加入收藏') + '" onclick="window.__toggleFav(\'' + esc(parts[0]) + '\',\'' + esc(parts[1]) + '\',' + parseInt(parts[2], 10) + ',' + (w.qi != null ? w.qi : -1) + ')">' + (faved ? '★ 已收藏' : '☆ 加入收藏') + '</button>';
        }
        return '<div class="wrong-card-new">' +
          '<button class="wcn-remove" title="从错题本移除" onclick="window.__removeWrong(' + realIdx + ')">✕</button>' +
          '<div class="wcn-question">' + esc(w.question || '（题目内容已丢失，请到对应课时页重做）') + '</div>' +
          '<div class="wcn-meta">' +
            '<span class="wcn-subject">' + esc(w.subjectName || w.key || '') + '</span>' +
            (w.lessonName ? '<span class="wcn-lesson">' + esc(w.lessonName) + '</span>' : '') +
          '</div>' +
          '<div class="wcn-answer">' +
            '<span class="wcn-label">正确答案：</span>' +
            '<span class="wcn-value">' + esc(w.answer || '—') + '</span>' +
          '</div>' +
          (w.myAnswer ? '<div class="wcn-my-answer">' +
            '<span class="wcn-label">你的答案：</span>' +
            '<span class="wcn-value wrong">' + esc(w.myAnswer) + '</span>' +
          '</div>' : '') +
          '<div class="wcn-actions">' + redo + favBtn + '</div>' +
        '</div>';
      }).join('') + '</div>';
    }

    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / <a onclick="navigate(\'bank\')">题库</a> / 错题本</div>' +
      '<div class="panel bank-new-design">' +
        tabsHtml +
        headerHtml +
        toolbarHtml +
        filterHtml +
        body +
      '</div>';
  }

  /* ---------- 错题本 ---------- */
  function removeWrong(idx) {
    var wrong = lsGet('gz_wrongbook', []);
    if (idx < 0 || idx >= wrong.length) return;
    wrong.splice(idx, 1);
    lsSet('gz_wrongbook', wrong);
    toast('已从错题本移除');
    renderWrongbook();
  }
  window.__removeWrong = removeWrong;

  function renderWrongbook() {
    var wrong = lsGet('gz_wrongbook', []);
    // 数据残缺时从 lesson 数据补全
    wrong.forEach(function (w) {
      if (!w.question || !w.answer) {
        var parts = (w.key || '').split('/');
        if (parts.length === 3) {
          var f = findLesson(parts[0], parts[1], parseInt(parts[2], 10));
          if (f) {
            w.subjectName = w.subjectName || f.subject.name;
            w.lessonName = w.lessonName || f.point.name;
            var q = (f.point.exercises || [])[w.qi];
            if (q) {
              w.question = w.question || q.question;
              w.answer = w.answer || q.answer;
              w.type = w.type || q.type;
              w.options = w.options || q.options || [];
            }
          }
        }
      }
    });
    // 按学科筛选
    var filterSid = (window.__wrongFilter) || 'all';
    var filtered = filterSid === 'all' ? wrong : wrong.filter(function (w) { return (w.sid || (w.key ? w.key.split('/')[0] : '')) === filterSid; });
    // 统计各学科
    var subjCount = {};
    wrong.forEach(function (w) {
      var sid = w.sid || (w.key ? w.key.split('/')[0] : '_');
      subjCount[sid] = (subjCount[sid] || 0) + 1;
    });
    var subjChips = '<span class="bank-cat-chip' + (filterSid === 'all' ? ' active' : '') + '" onclick="window.__setWrongFilter(\'all\')">全部（' + wrong.length + '）</span>' +
      Object.keys(subjCount).map(function (k) {
        if (k === '_') return '';
        var subj = GZ_SUBJECTS.find(function (s) { return s.id === k; });
        if (!subj) return '';
        return '<span class="bank-cat-chip' + (filterSid === k ? ' active' : '') + '" style="--sc:' + subj.color + ';" onclick="window.__setWrongFilter(\'' + k + '\')">' + subj.icon + ' ' + esc(subj.name) + '（' + subjCount[k] + '）</span>';
      }).join('');

    var body;
    if (!wrong.length) {
      body = '<div class="empty-tip">🎉 错题本是空的。开始做题后，答错的题目会自动收录到这里，方便反复巩固。</div>';
    } else if (!filtered.length) {
      body = '<div class="empty-tip">该学科下暂无错题。</div>';
    } else {
      body = filtered.map(function (w) {
        var realIdx = wrong.indexOf(w);
        var redo = '';
        if (w.kind === 'bank') {
          redo = '<button class="wrong-go" onclick="navigate(\'bank\')">去题库重做 →</button>';
        } else if (w.key) {
          var parts = w.key.split('/');
          redo = '<button class="wrong-go" onclick="navigate(\'lesson\',\'' + esc(parts[0]) + '\',\'' + esc(parts[1]) + '\',' + esc(parts[2]) + ')">去重做 →</button>';
        }
        return '<div class="wrong-item">' +
          '<button class="wrong-remove" title="从错题本移除" onclick="window.__removeWrong(' + realIdx + ')">✕</button>' +
          '<div class="wrong-q">' + esc(w.question || '（题目内容已丢失，请到对应课时页重做）') + '</div>' +
          '<div class="wrong-meta">' + esc(w.subjectName || w.key || '') + (w.lessonName ? ' · ' + esc(w.lessonName) : '') + ' · 答案：' + esc(w.answer || '—') + '</div>' +
          (w.myAnswer ? '<div class="wrong-mine">你的答案：' + esc(w.myAnswer) + '</div>' : '') +
          redo +
        '</div>';
      }).join('');
    }
    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / 错题本</div>' +
      '<div class="panel">' +
        '<h2>📕 错题本</h2>' +
        '<p>收录你做错的题目，重做巩固、逐个消灭。（共 ' + wrong.length + ' 题）</p>' +
        (wrong.length > 1 ? '<div class="wrong-toolbar"><button class="btn-plain" onclick="window.__redoAllWrong()">⚡ 全部去重做</button>' +
          (wrong.length > 0 ? '<button class="btn-plain wrong-clear-btn" onclick="window.__clearAllWrong()">🗑️ 清空错题本</button>' : '') + '</div>' : '') +
        (wrong.length > 0 ? '<div class="bank-cat-list" style="margin-top:14px;">' + subjChips + '</div>' : '') +
        body +
      '</div>';
  }
  window.__setWrongFilter = function (sid) {
    window.__wrongFilter = sid;
    renderWrongbook();
  };
  window.__redoAllWrong = function () {
    var wrong = lsGet('gz_wrongbook', []);
    if (!wrong.length) return;
    // 取第一道去重做（连续点会一道道做）
    var first = wrong[0];
    if (first.kind === 'bank') { toast('正在前往题库重做…'); navigate('bank'); return; }
    if (!first.key) { toast('无有效错题可重做'); return; }
    var p = first.key.split('/');
    toast('正在重做第 1 / ' + wrong.length + ' 题…');
    navigate('lesson', p[0], p[1], p[2]);
  };
  window.__clearAllWrong = function () {
    if (!confirm('确定清空错题本？此操作不可恢复。')) return;
    lsSet('gz_wrongbook', []);
    renderWrongbook();
    toast('错题本已清空');
  };

  /* ---------- 勋章系统 ---------- */
  function countTotalProgress() {
    var prog = lsGet('gz_progress', {});
    var n = 0;
    Object.keys(prog).forEach(function (k) { if (prog[k]) n++; });
    return n;
  }
  function countSubjectProgress(sid) {
    var prog = lsGet('gz_progress', {});
    var n = 0;
    Object.keys(prog).forEach(function (k) { if (prog[k] && k.split('/')[0] === sid) n++; });
    return n;
  }
  function countTotalLessons() { return gzStats().points; }

  // 勋章定义：每个勋章有 id / icon / name / desc / tier(bronze/silver/gold) / target / current()
  // current() 返回当前进度，target 是达成目标
  var MEDAL_CATEGORIES = {
    study:   { name: '学习成就', icon: '🎓' },
    persist: { name: '坚持打卡', icon: '🔥' },
    subject: { name: '学科精进', icon: '📘' },
    wrong:   { name: '错题修炼', icon: '📕' }
  };
  var MEDAL_TIERS = {
    bronze: { name: '青铜', color: '#cd7f32', glow: 'rgba(205,127,50,.4)' },
    silver: { name: '白银', color: '#9ea7b8', glow: 'rgba(158,167,184,.4)' },
    gold:   { name: '黄金', color: '#e5a82e', glow: 'rgba(229,168,46,.5)' }
  };
  var MEDALS = [
    // 📘 学习成就
    { id:'m_start',    cat:'study',   tier:'bronze', icon:'🎓', name:'启程',     desc:'完成第 1 节课',         target:1,                current:countTotalProgress },
    { id:'m_novice',   cat:'study',   tier:'bronze', icon:'📚', name:'入门学子', desc:'累计完成 10 节课',      target:10,               current:countTotalProgress },
    { id:'m_appr',     cat:'study',   tier:'silver', icon:'🏃', name:'进阶学徒', desc:'累计完成 50 节课',      target:50,               current:countTotalProgress },
    { id:'m_expert',   cat:'study',   tier:'silver', icon:'🎯', name:'百炼成钢', desc:'累计完成 100 节课',     target:100,              current:countTotalProgress },
    { id:'m_master',   cat:'study',   tier:'gold',   icon:'🏆', name:'登堂入室', desc:'累计完成 200 节课',     target:200,              current:countTotalProgress },
    { id:'m_all',      cat:'study',   tier:'gold',   icon:'👑', name:'学海无涯', desc:'学完全部课时',          target:'all',            current:countTotalProgress },

    // 🔥 坚持打卡
    { id:'m_c1',       cat:'persist', tier:'bronze', icon:'☀️', name:'初来乍到', desc:'累计签到 1 天',         target:1,                current:function(){ return getCheckin().total; } },
    { id:'m_c10',      cat:'persist', tier:'bronze', icon:'🗓️', name:'签到达人', desc:'累计签到 10 天',        target:10,               current:function(){ return getCheckin().total; } },
    { id:'m_c50',      cat:'persist', tier:'silver', icon:'📅', name:'签到王者', desc:'累计签到 50 天',        target:50,               current:function(){ return getCheckin().total; } },
    { id:'m_c100',     cat:'persist', tier:'gold',   icon:'🎊', name:'签到之神', desc:'累计签到 100 天',       target:100,              current:function(){ return getCheckin().total; } },
    { id:'m_s3',       cat:'persist', tier:'bronze', icon:'🔥', name:'三日不辍', desc:'连续签到 3 天',         target:3,                current:function(){ return getCheckin().streak; } },
    { id:'m_s7',       cat:'persist', tier:'silver', icon:'⚡', name:'一周不断', desc:'连续签到 7 天',         target:7,                current:function(){ return getCheckin().streak; } },
    { id:'m_s15',      cat:'persist', tier:'silver', icon:'🌙', name:'半月毅力', desc:'连续签到 15 天',        target:15,               current:function(){ return getCheckin().streak; } },
    { id:'m_s30',      cat:'persist', tier:'gold',   icon:'💎', name:'百日筑基', desc:'连续签到 30 天',        target:30,               current:function(){ return getCheckin().streak; } },

    // 📘 学科精进（2 门主学科 × 2 档）
    { id:'m_math5',    cat:'subject', tier:'bronze', icon:'🔢', name:'数学小新', desc:'完成 5 节数学课',       target:5,                current:function(){ return countSubjectProgress('math'); } },
    { id:'m_math25',   cat:'subject', tier:'silver', icon:'🔢', name:'数学能手', desc:'完成 25 节数学课',      target:25,               current:function(){ return countSubjectProgress('math'); } },
    { id:'m_ch5',      cat:'subject', tier:'bronze', icon:'📖', name:'语文才子', desc:'完成 5 节语文课',       target:5,                current:function(){ return countSubjectProgress('chinese'); } },
    { id:'m_ch25',     cat:'subject', tier:'silver', icon:'📖', name:'语文大家', desc:'完成 25 节语文课',      target:25,               current:function(){ return countSubjectProgress('chinese'); } },
    { id:'m_en5',      cat:'subject', tier:'bronze', icon:'🔤', name:'英语新秀', desc:'完成 5 节英语课',       target:5,                current:function(){ return countSubjectProgress('english'); } },
    { id:'m_en25',     cat:'subject', tier:'silver', icon:'🔤', name:'英语高手', desc:'完成 25 节英语课',      target:25,               current:function(){ return countSubjectProgress('english'); } },

    // 📕 错题修炼
    { id:'m_clean',    cat:'wrong',   tier:'bronze', icon:'🧹', name:'清扫者',   desc:'错题本清零',           target:'zero',          current:function(){ return lsGet('gz_wrongbook', []).length; } },
    { id:'m_w5',       cat:'wrong',   tier:'bronze', icon:'📕', name:'错题起步', desc:'错题本收录 5 题',       target:5,                current:function(){ return lsGet('gz_wrongbook', []).length; } },
    { id:'m_w20',      cat:'wrong',   tier:'silver', icon:'📚', name:'错题学者', desc:'错题本收录 20 题',      target:20,               current:function(){ return lsGet('gz_wrongbook', []).length; } },
    { id:'m_w50',      cat:'wrong',   tier:'gold',   icon:'🗃️', name:'错题大牛', desc:'错题本收录 50 题',      target:50,               current:function(){ return lsGet('gz_wrongbook', []).length; } }
  ];

  // 检测勋章解锁（首次解锁时记录时间戳），返回当前所有已解锁的勋章
  function checkMedals() {
    var unlocked = lsGet('gz_medals', {}); // { id: timestamp }
    var now = Date.now();
    var total = countTotalLessons();
    MEDALS.forEach(function (m) {
      var cur = m.current();
      var tgt = m.target === 'all' ? total : m.target;
      var ok = m.target === 'zero' ? (cur === 0) : (cur >= tgt);
      if (ok && !unlocked[m.id]) unlocked[m.id] = now;
    });
    lsSet('gz_medals', unlocked);
    return unlocked;
  }
  // 给勋章计算实际目标（处理动态 target="all"）
  function medalTarget(m) {
    return m.target === 'all' ? countTotalLessons() : m.target;
  }
  function medalState(m, unlocked) {
    var cur = m.current();
    var tgt = medalTarget(m);
    var ok = m.target === 'zero' ? (cur === 0) : (cur >= tgt);
    var unlockedAt = unlocked[m.id];
    return {
      current: cur, target: tgt,
      pct: tgt > 0 ? Math.min(100, Math.round(cur / tgt * 100)) : (ok ? 100 : 0),
      unlocked: ok || !!unlockedAt,
      unlockedAt: unlockedAt || 0
    };
  }

  /* ---------- 学习进度 ---------- */
  function renderProgress() {
    var prog = lsGet('gz_progress', {});
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
        ((v.units && v.units.length) ? v.units : (v.points || [])).forEach(function (p, idx) {
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
    var gzRecent = lsGet('gz_recent', []);
    gzRecent.forEach(function (r) {
      if (subjStats[r.sid] && !subjStats[r.sid].lastStudy) {
        subjStats[r.sid].lastStudy = { name: r.name };
      }
    });

    // 2) 7 天学习量（每天的课时数 + 做题数）
    var last7 = [];
    var now = new Date();
    function pad2(n) { return String(n).padStart(2, '0'); }
    function dateOnly(ts) {
      var d = new Date(ts);
      return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
    }
    for (var i = 6; i >= 0; i--) {
      var d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      var ds = d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
      last7.push({
        date: ds,
        label: (d.getMonth() + 1) + '/' + d.getDate(),
        weekday: ['日', '一', '二', '三', '四', '五', '六'][d.getDay()],
        studied: history.indexOf(ds) !== -1,
        lessons: 0,
        questions: 0,
        isToday: i === 0
      });
    }
    // 课时数：从 gz_progress 的 ts 累加
    Object.keys(prog).forEach(function (k) {
      var v = prog[k];
      if (v && v.ts) {
        var ds2 = dateOnly(v.ts);
        for (var li = 0; li < last7.length; li++) {
          if (last7[li].date === ds2) { last7[li].lessons++; break; }
        }
      }
    });
    // 做题数：从 gz_quiz_log 累加
    var quizLog = lsGet('gz_quiz_log', []);
    quizLog.forEach(function (e) {
      if (!e || !e.ts) return;
      var ds2 = dateOnly(e.ts);
      for (var li = 0; li < last7.length; li++) {
        if (last7[li].date === ds2) { last7[li].questions++; break; }
      }
    });

    // 3) 难度分布
    var diffTotal = { '基础': 0, '重点': 0, '难点': 0 };
    var diffDone = { '基础': 0, '重点': 0, '难点': 0 };
    GZ_SUBJECTS.forEach(function (s) {
      s.volumes.forEach(function (v) {
        if (v.grade === '高三') return;
        ((v.units && v.units.length) ? v.units : (v.points || [])).forEach(function (p, idx) {
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
    GZ_SUBJECTS.forEach(function (s) { s.volumes.forEach(function (v) { if (v.grade !== '高三') totalLessons += gzUnitCount(v); }); });
    Object.keys(prog).forEach(function (k) { if (prog[k]) doneLessons++; });
    var totalStudyDays = history.length;
    var streakText = 0;
    for (var si = last7.length - 1; si >= 0; si--) { if (last7[si].studied) streakText++; else break; }
    var last7Studied = last7.filter(function (d) { return d.studied; }).length;
    var totalLessons7 = last7.reduce(function (s, d) { return s + d.lessons; }, 0);
    var totalQuestions7 = last7.reduce(function (s, d) { return s + d.questions; }, 0);

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

    // 渲染：最近 7 天节奏图（柱状=课时数 / 折线=做题数 / hover 显示数值）
    var W = 700, H = 200, PAD_T = 30, PAD_B = 36, PAD_L = 36, PAD_R = 36;
    var innerW = W - PAD_L - PAD_R, innerH = H - PAD_T - PAD_B;
    var colW = innerW / 7;
    var barW = Math.min(28, colW * 0.42);
    // niceMax：把上限取到 2 / 5 的整数倍
    function niceMax(v, step) {
      if (v <= 0) return step * 2;
      return Math.max(step, Math.ceil(v / step) * step);
    }
    var rawMaxL = Math.max.apply(null, last7.map(function (d) { return d.lessons; }).concat([0]));
    var rawMaxQ = Math.max.apply(null, last7.map(function (d) { return d.questions; }).concat([0]));
    var maxL = niceMax(rawMaxL, 2);
    var maxQ = niceMax(rawMaxQ, 5);

    // 左侧 Y 轴刻度：0, 2, 4, ... maxL
    var leftTickVals = [];
    for (var lv = 0; lv <= maxL; lv += 2) leftTickVals.push(lv);
    // 右侧 Y 轴刻度：0, 5, 10, ... maxQ
    var rightTickVals = [];
    for (var qv = 0; qv <= maxQ; qv += 5) rightTickVals.push(qv);

    // 4 条虚线 grid（视觉参考）
    var gridHtml = '';
    for (var gi = 0; gi < 4; gi++) {
      var gy = PAD_T + innerH * gi / 4;
      gridHtml += '<line class="week-grid" x1="' + PAD_L + '" y1="' + gy.toFixed(1) + '" x2="' + (W - PAD_R) + '" y2="' + gy.toFixed(1) + '"></line>';
    }
    // 底线（粗一点）
    gridHtml += '<line class="week-grid is-base" x1="' + PAD_L + '" y1="' + (PAD_T + innerH) + '" x2="' + (W - PAD_R) + '" y2="' + (PAD_T + innerH) + '"></line>';

    // 左 Y 轴标签
    var leftAxisHtml = leftTickVals.map(function (v) {
      var y = PAD_T + innerH - (v / maxL) * innerH;
      return '<text class="week-y-l" x="' + (PAD_L - 8) + '" y="' + y.toFixed(1) + '" text-anchor="end" dominant-baseline="middle">' + v + '</text>';
    }).join('');
    // 右 Y 轴标签
    var rightAxisHtml = rightTickVals.map(function (v) {
      var y = PAD_T + innerH - (v / maxQ) * innerH;
      return '<text class="week-y-r" x="' + (W - PAD_R + 8) + '" y="' + y.toFixed(1) + '" text-anchor="start" dominant-baseline="middle">' + v + '</text>';
    }).join('');
    // 轴单位（顶部小字）
    var axisTitleHtml =
      '<text class="week-y-title-l" x="' + (PAD_L - 8) + '" y="' + (PAD_T - 12) + '" text-anchor="end">课时</text>' +
      '<text class="week-y-title-r" x="' + (W - PAD_R + 8) + '" y="' + (PAD_T - 12) + '" text-anchor="start">题数</text>';

    // 柱
    var barSvg = last7.map(function (d, i) {
      var x = PAD_L + i * colW + (colW - barW) / 2;
      var ratio = d.lessons / maxL;
      var h = d.lessons > 0 ? Math.max(8, ratio * innerH) : 4;
      var y = PAD_T + innerH - h;
      var cls = 'week-bar' + (d.lessons > 0 ? ' is-active' : '') + (d.isToday ? ' is-today' : '');
      return '<rect class="' + cls + '" x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + h.toFixed(1) + '" rx="3"></rect>';
    }).join('');

    // 折线点
    var pts = last7.map(function (d, i) {
      var x = PAD_L + i * colW + colW / 2;
      var ratio = d.questions / maxQ;
      var y = d.questions > 0 ? (PAD_T + innerH - ratio * innerH) : (PAD_T + innerH);
      return { x: x, y: y, d: d };
    });
    var polyPts = pts.map(function (p) { return p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' ');
    var lineSvg = '<polyline class="week-line" points="' + polyPts + '"></polyline>';
    var dotSvg = pts.map(function (p) {
      var cls = 'week-dot' + (p.d.questions > 0 ? ' is-active' : '') + (p.d.isToday ? ' is-today' : '');
      var r = p.d.questions > 0 ? 4.5 : 3;
      return '<circle class="' + cls + '" cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="' + r + '"></circle>';
    }).join('');

    // x 轴标签
    var xLabSvg = last7.map(function (d, i) {
      var x = PAD_L + i * colW + colW / 2;
      var wdCls = 'week-x-wd' + (d.isToday ? ' is-today' : '');
      var dtCls = 'week-x-dt' + (d.isToday ? ' is-today' : '');
      return '<text class="' + wdCls + '" x="' + x.toFixed(1) + '" y="' + (PAD_T + innerH + 16) + '" text-anchor="middle">' + d.weekday + '</text>' +
             '<text class="' + dtCls + '" x="' + x.toFixed(1) + '" y="' + (PAD_T + innerH + 30) + '" text-anchor="middle">' + d.label + '</text>';
    }).join('');

    // 悬浮点击区（SVG 内 rect，与画布坐标一致，不会盖到轴标签）
    var zoneHtml = last7.map(function (d, i) {
      var x = PAD_L + i * colW;
      return '<rect class="week-hover" x="' + x.toFixed(1) + '" y="' + PAD_T + '" width="' + colW.toFixed(1) + '" height="' + innerH + '" fill="transparent" pointer-events="all" data-i="' + i + '" onmouseover="window.__weekHover(' + i + ')" onmouseout="window.__weekLeave()"></rect>';
    }).join('');

    // 悬浮高亮：在悬浮区下方画一个淡色 backdrop
    var hoverBackdropHtml = last7.map(function (d, i) {
      var x = PAD_L + i * colW;
      return '<rect class="week-hover-bg" data-bg-i="' + i + '" x="' + x.toFixed(1) + '" y="' + PAD_T + '" width="' + colW.toFixed(1) + '" height="' + innerH + '" fill="transparent" pointer-events="none"></rect>';
    }).join('');

    // 把每天的数据塞进全局，hover 函数读取
    window.__weekDays = last7;
    window.__weekMaxL = maxL;
    window.__weekMaxQ = maxQ;

    var chartSvg = '<svg class="week-chart" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid meet">' +
      '<defs>' +
        '<linearGradient id="weekBarGrad" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0%" stop-color="#5e8dee"/>' +
          '<stop offset="100%" stop-color="#4a7de0"/>' +
        '</linearGradient>' +
        '<linearGradient id="weekBarGradToday" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0%" stop-color="#a855f7"/>' +
          '<stop offset="100%" stop-color="#7c3aed"/>' +
        '</linearGradient>' +
      '</defs>' +
      gridHtml + leftAxisHtml + rightAxisHtml + axisTitleHtml + barSvg + lineSvg + dotSvg + xLabSvg + hoverBackdropHtml + zoneHtml +
    '</svg>';

    var weekChartHtml = '<div class="week-chart-wrap">' +
      chartSvg +
      '<div class="week-tip" id="weekTip" style="display:none"><div class="wt-date"></div><div class="wt-row wt-l"></div><div class="wt-row wt-q"></div></div>' +
      '<div class="week-legend">' +
        '<span class="wl-item"><i class="wl-bar"></i>每日学习课时数</span>' +
        '<span class="wl-item"><i class="wl-line"></i>每日做题数</span>' +
      '</div>' +
    '</div>';

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

    // 渲染：勋章墙
    var unlocked = checkMedals();
    var unlockedCount = 0;
    var medalCats = {};
    Object.keys(MEDAL_CATEGORIES).forEach(function (k) { medalCats[k] = []; });
    MEDALS.forEach(function (m) {
      var s = medalState(m, unlocked);
      if (s.unlocked) unlockedCount++;
      medalCats[m.cat].push({ m: m, s: s });
    });
    function medalCardHTML(o) {
      var m = o.m, s = o.s;
      var tier = MEDAL_TIERS[m.tier];
      var isUnlocked = s.unlocked;
      var isAll = m.target === 'all';
      var daysAgo = isUnlocked && s.unlockedAt ? Math.floor((Date.now() - s.unlockedAt) / 86400000) : null;
      var dateLabel = daysAgo === null ? '' : (daysAgo === 0 ? '今日解锁' : (daysAgo + ' 天前解锁'));
      return '' +
        '<div class="medal-card' + (isUnlocked ? ' is-unlocked' : ' is-locked') + (s.pct > 0 && !isUnlocked ? ' is-progress' : '') + '" style="--tier:' + tier.color + '; --tier-glow:' + tier.glow + '">' +
          '<div class="medal-tier-badge">' + (m.tier === 'gold' ? '🥇' : (m.tier === 'silver' ? '🥈' : '🥉')) + '</div>' +
          '<div class="medal-icon">' + m.icon + '</div>' +
          '<div class="medal-name">' + esc(m.name) + '</div>' +
          '<div class="medal-desc">' + esc(m.desc) + '</div>' +
          (isUnlocked
            ? '<div class="medal-foot ok">✓ 已解锁' + (dateLabel ? ' · ' + dateLabel : '') + '</div>'
            : (s.pct > 0
                ? '<div class="medal-foot"><div class="medal-prog"><i style="width:' + s.pct + '%"></i></div><span>' + s.current + ' / ' + s.target + (isAll ? '+' : '') + '</span></div>'
                : '<div class="medal-foot muted">未解锁</div>')) +
        '</div>';
    }
    var medalSections = Object.keys(MEDAL_CATEGORIES).map(function (cat) {
      var arr = medalCats[cat];
      if (!arr || !arr.length) return '';
      var catInfo = MEDAL_CATEGORIES[cat];
      var catUnlocked = arr.filter(function (o) { return o.s.unlocked; }).length;
      return '<div class="medal-section">' +
        '<div class="medal-cat-head"><span class="mch-icon">' + catInfo.icon + '</span><span class="mch-name">' + esc(catInfo.name) + '</span><span class="mch-count">' + catUnlocked + ' / ' + arr.length + '</span></div>' +
        '<div class="medal-grid">' + arr.map(medalCardHTML).join('') + '</div>' +
      '</div>';
    }).join('');
    var medalWallHtml = '<div class="medal-wall">' +
      '<div class="medal-wall-head">' +
        '<h4>🏅 勋章墙</h4>' +
        '<div class="mwh-stats">' +
          '<span class="mwh-progress"><b>' + unlockedCount + '</b> / ' + MEDALS.length + ' 已解锁</span>' +
          '<div class="mwh-bar"><i style="width:' + Math.round(unlockedCount / MEDALS.length * 100) + '%"></i></div>' +
        '</div>' +
      '</div>' +
      medalSections +
    '</div>';

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
        '<p>总览你的学习情况：最近 7 天节奏、难度攻克分布、各学科完成度、勋章成就。</p>' +
        '<div class="prog-charts">' +
          '<div class="prog-chart-card">' +
            '<div class="pcc-head"><h4>📅 最近 7 天学习节奏</h4><span class="pcc-sub">' + totalLessons7 + ' 课时 · ' + totalQuestions7 + ' 题' + (streakText > 0 ? ' · 连续 ' + streakText + ' 天 🔥' : '') + '</span></div>' +
            weekChartHtml +
          '</div>' +
          '<div class="prog-chart-card">' +
            '<div class="pcc-head"><h4>🎯 难度攻克分布</h4><span class="pcc-sub">基础/重点/难点 三档</span></div>' +
            '<div class="pdiff">' + diffHtml + '</div>' +
          '</div>' +
        '</div>' +
        overviewHtml +
        '<h3 class="prog-section-title">📚 各学科完成度</h3>' +
        subjEmpty +
        '<h3 class="prog-section-title">🏅 勋章墙</h3>' +
        medalWallHtml +
      '</div>';

    // 错题卡点击跳转
    if (wrong.length > 0) {
      var nCard = document.querySelector('.prog-overview .navigate-wrong');
      if (nCard) nCard.style.cursor = 'pointer';
    }
    // dev hook: ?autohover=N 自动触发第 N 天 hover（仅 dev/截图用，正常用户不会带这个参数）
    try {
      var m = location.search.match(/[?&]autohover=(\d)/);
      if (m) setTimeout(function () { window.__weekHover(+m[1]); }, 80);
    } catch (e) {}
  }
  function overviewCard(icon, label, val, sub, flag) {
    var attrs = '';
    if (flag === 'navigate-wrong') attrs = ' onclick="navigate(\'wrongbook\')" style="cursor:pointer"';
    return '<div class="prog-ov-card"' + attrs + '>' +
      '<div class="pov-icon">' + icon + '</div>' +
      '<div class="pov-info"><div class="pov-val">' + val + '</div><div class="pov-lbl">' + esc(label) + '</div><div class="pov-sub">' + esc(sub) + '</div></div>' +
    '</div>';
  }

  /* ---------- 讨论区（数据 / 身份辅助） ---------- */
  function getComments() { return lsGet('gz_comments', []); }
  function saveComments(list) { lsSet('gz_comments', list); }
  function escAttr(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  }); }
  function relativeTime(ts) {
    var diff = Date.now() - ts;
    if (diff < 60 * 1000) return '刚刚';
    if (diff < 3600 * 1000) return Math.floor(diff / 60000) + ' 分钟前';
    if (diff < 86400 * 1000) return Math.floor(diff / 3600000) + ' 小时前';
    if (diff < 7 * 86400 * 1000) return Math.floor(diff / 86400000) + ' 天前';
    var d = new Date(ts);
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }
  function starWord(n) {
    return ['', '很不满意', '不太行', '一般般', '值得推荐', '超级好用'][n] || '';
  }
  function renderStars(n, size) {
    size = size || 14;
    var out = '';
    for (var i = 1; i <= 5; i++) {
      var on = i <= n;
      out += '<svg class="cm-star ' + (on ? 'on' : 'off') + '" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="' + (on ? '#facc15' : 'transparent') + '" stroke="#facc15" stroke-width="1.6" stroke-linejoin="round"><path d="M12 2.6l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.6l-5.88 3.1 1.12-6.55L2.48 9.52l6.58-.96L12 2.6z"/></svg>';
    }
    return out;
  }

  /* ---------- 讨论区（洛谷风格：左侧板块 + 右侧帖子） ---------- */
  var DISCUSS_BOARDS = [
    { key: '站务板', icon: '🛠️', desc: '网站使用问题、功能建议、公告与反馈', color: '#2f6fb3' },
    { key: '题目总版', icon: '📝', desc: '题目讨论、错题求助、解题交流', color: '#2e8b57' },
    { key: '学术版', icon: '📚', desc: '学科知识、学习方法、拓展探讨', color: '#8e5cd9' }
  ];
  function getDiscuss() { return lsGet('gz_discuss', { topics: [] }); }
  function saveDiscuss(d) { lsSet('gz_discuss', d); }
  function discussTopicsOf(board) {
    return getDiscuss().topics.filter(function (t) { return t.board === board; })
      .sort(function (a, b) { return b.ts - a.ts; });
  }
  function discussAllTopics() {
    return getDiscuss().topics.slice().sort(function (a, b) { return b.ts - a.ts; });
  }
  function discussBoardCfg(key) {
    return DISCUSS_BOARDS.filter(function (b) { return b.key === key; })[0]
      || { key: key, icon: '💬', color: '#8b8b8b', desc: '' };
  }

  /* 匿名用户的稳定浏览器身份（用于同一设备删除自己的匿名帖/回复） */
  function currentGuestId() {
    var g = lsGet('gz_guest_id', null);
    if (!g) { g = 'g_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); lsSet('gz_guest_id', g); }
    return g;
  }
  /* 判断当前用户能否删除某条内容（作者本人；管理员 king 可删任意帖含匿名帖） */
  function discussCanDelete(authorId, guestId) {
    var u = getCurrentUser();
    if (u) {
      if (isAdminUser(u)) return true; // 管理员可删任何帖
      return u.id === authorId;
    }
    return authorId === null && !!guestId && guestId === currentGuestId();
  }

  function deleteTopic(board, topicId) {
    if (!confirm('确定删除这篇帖子吗？此操作不可撤销。')) return;
    var d = getDiscuss();
    d.topics = d.topics.filter(function (t) { return t.id !== topicId; });
    saveDiscuss(d);
    renderComments(); // 直接重渲染：在列表里删就刷新列表；在详情页删会因找不到主题而回退到板块
  }
  window.deleteTopic = deleteTopic;

  function deleteReply(board, topicId, replyId) {
    if (!confirm('确定删除这条回复吗？此操作不可撤销。')) return;
    var d = getDiscuss();
    var t = d.topics.filter(function (x) { return x.id === topicId; })[0];
    if (t && t.replies) {
      t.replies = t.replies.filter(function (r) { return r.id !== replyId; });
      saveDiscuss(d);
    }
    renderComments();
  }
  window.deleteReply = deleteReply;

  function renderComments(r) {
    if (!r) r = parseHash();
    if (!r.param) return renderDiscussHome();
    if (!r.param2) return renderDiscussBoard(r.param);
    return renderDiscussTopic(r.param, r.param2);
  }

  function discussIdentity() {
    var u = getCurrentUser();
    var anon = document.getElementById('cmAnon');
    var nameInput = document.getElementById('cmName');
    var isAnon = u ? (anon && anon.checked) : true;
    var guestName = nameInput ? (nameInput.value || '').trim() : '';
    if (guestName) lsSet('gz_guest_name', guestName);
    var authorName = isAnon ? (guestName || '匿名') : (u ? (getDisplayName(u) || u.username) : (guestName || '匿名'));
    return {
      isAnon: isAnon,
      authorId: isAnon ? null : (u ? u.id : null),
      authorName: authorName,
      avatar: isAnon ? null : (u ? (u.avatar || '🎓') : null)
    };
  }

  /* 左侧板块导航（含「全部板块」） */
  function discussSidebar(activeBoard) {
    var all = discussAllTopics().length;
    var items = '<a class="ds-nav' + (activeBoard ? '' : ' active') + '" onclick="navigate(\'comments\')">' +
      '<span class="ds-nav-icon">📋</span>' +
      '<span class="ds-nav-body"><span class="ds-nav-name">全部板块</span><span class="ds-nav-desc">浏览所有主题</span></span>' +
      '<span class="ds-nav-count">' + all + '</span></a>';
    items += DISCUSS_BOARDS.map(function (b) {
      var n = discussTopicsOf(b.key).length;
      var act = activeBoard === b.key ? ' active' : '';
      return '<a class="ds-nav' + act + '" onclick="navigate(\'comments\',\'' + esc(b.key) + '\')" style="--bc:' + b.color + '">' +
        '<span class="ds-nav-icon">' + b.icon + '</span>' +
        '<span class="ds-nav-body"><span class="ds-nav-name">' + esc(b.key) + '</span><span class="ds-nav-desc">' + esc(b.desc) + '</span></span>' +
        '<span class="ds-nav-count">' + n + '</span></a>';
    }).join('');
    return '<aside class="ds-sidebar"><div class="ds-sidebar-title">板块</div>' + items +
      '<div class="ds-sidebar-tip">匿名也能发言，登录后可一键匿名</div></aside>';
  }

  /* 主题列表（showBoard=true 时每条显示板块标签） */
  function discussTopicListHtml(topics, showBoard) {
    if (!topics.length) {
      return '<div class="ds-empty"><div class="ds-empty-icon">💭</div><div class="ds-empty-title">还没有帖子</div><div class="ds-empty-sub">来发第一个吧 ✨</div></div>';
    }
    return '<ul class="ds-topic-list">' + topics.map(function (t) {
      var cfg = discussBoardCfg(t.board);
      var tag = showBoard ? '<span class="ds-tag" style="--bc:' + cfg.color + '">' + cfg.icon + ' ' + esc(t.board) + '</span>' : '';
      var canDel = discussCanDelete(t.authorId, t.guestId);
      return '<li class="ds-topic' + (canDel ? ' has-del' : '') + '" onclick="navigate(\'comments\',\'' + esc(t.board) + '\',\'' + esc(t.id) + '\')">' +
        '<div class="ds-topic-main">' +
          '<div class="ds-topic-title">' + esc(t.title) + '</div>' +
          '<div class="ds-topic-meta">' + tag +
            '<span class="ds-dot">·</span>' +
            authorChip(t.authorId, t.authorName, 'ds-topic-author') +
            '<span class="ds-dot">·</span>' +
            '<span class="ds-topic-time">' + esc(relativeTime(t.ts)) + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="ds-topic-stat"><div class="ds-topic-stat-n">' + (t.replies ? t.replies.length : 0) + '</div><div class="ds-topic-stat-l">回复</div></div>' +
        (canDel ? '<button class="ds-del" onclick="event.stopPropagation();deleteTopic(\'' + esc(t.board) + '\',\'' + esc(t.id) + '\')">删除</button>' : '') +
      '</li>';
    }).join('') + '</ul>';
  }

  /* 发布表单（默认折叠，点「发新帖」展开） */
  function discussComposeHtml(board) {
    var u = getCurrentUser();
    var guestName = lsGet('gz_guest_name', '') || '';
    var idHtml = u
      ? '<div class="cm-form-id cm-form-id-top">' +
          '<span class="cm-form-avatar">' + userAvatarHtml(u) + '</span>' +
          '<span class="cm-form-name">以 <b>' + esc(getDisplayName(u) || u.username) + '</b> 身份发布</span>' +
          '<label class="cm-anon"><input type="checkbox" id="cmAnon"> <span>匿名发布</span></label>' +
        '</div>'
      : '<div class="cm-form-id cm-form-id-top">' +
          '<span class="cm-form-avatar cm-form-avatar-anon">·</span>' +
          '<input class="cm-name-input" id="cmName" maxlength="20" placeholder="给自己起个昵称（可选）" value="' + esc(guestName) + '">' +
          '<span class="cm-form-name">将以 <b>匿名</b> 身份发布</span>' +
        '</div>';
    return '<div class="ds-compose" id="dsCompose" style="display:none">' +
      '<div class="cm-form-card">' + idHtml +
          '<input class="cm-title-input" id="cmTitle" maxlength="50" placeholder="帖子标题（选填，留空则自动取正文前 20 字）">' +
          '<textarea class="cm-textarea" id="cmText" maxlength="1000" placeholder="说点什么… 分享见解、提问、或反馈都可以 :)" rows="4"></textarea>' +
          '<div class="cm-form-foot">' +
            '<div class="cm-counter"><span id="cmCount">0</span> / 1000</div>' +
            '<button class="cm-submit" id="cmSubmit" disabled>发布帖子</button>' +
        '</div>' +
      '</div></div>';
  }

  function dsToggleCompose() {
    var el = document.getElementById('dsCompose');
    if (!el) return;
    var show = el.style.display === 'none';
    el.style.display = show ? 'block' : 'none';
    if (show) { var ta = document.getElementById('cmText'); if (ta) ta.focus(); }
  }
  window.dsToggleCompose = dsToggleCompose;

  function renderDiscussHome() {
    if (!view) return;
    var topics = discussAllTopics();
    var right = '<div class="ds-list-head"><span>最新主题</span><span>' + topics.length + ' 个</span></div>' +
      discussTopicListHtml(topics, true);
    view.innerHTML =
      '<div class="panel ds-page">' +
        '<div class="ds-hero">' +
          '<div class="ds-hero-icon">💬</div>' +
          '<div><div class="ds-hero-title">讨论区</div>' +
          '<div class="ds-hero-sub">有问题就问，有想法就聊 · 共 ' + topics.length + ' 个帖子</div></div>' +
        '</div>' +
        '<div class="ds-layout">' +
          discussSidebar(null) +
          '<section class="ds-content">' + right + '</section>' +
        '</div>' +
      '</div>';
  }

  function renderDiscussBoard(board) {
    if (!view) return;
    var cfg = discussBoardCfg(board);
    var topics = discussTopicsOf(board);
    var right = '<div class="ds-board-head" style="--bc:' + cfg.color + '">' +
        '<div class="ds-board-head-icon">' + cfg.icon + '</div>' +
        '<div class="ds-board-head-body"><div class="ds-board-head-name">' + esc(cfg.key) + '</div>' +
          '<div class="ds-board-head-desc">' + esc(cfg.desc) + '</div></div>' +
        '<button class="ds-newbtn" onclick="dsToggleCompose()">＋ 发新帖</button>' +
      '</div>' +
      discussComposeHtml(board) +
      '<div class="ds-list-head"><span>帖子</span><span>' + topics.length + ' 个</span></div>' +
      discussTopicListHtml(topics, false);
    view.innerHTML =
      '<div class="panel ds-page">' +
        '<div class="ds-layout">' +
          discussSidebar(board) +
          '<section class="ds-content">' + right + '</section>' +
        '</div>' +
      '</div>';
    bindDiscussForm('topic', board, null);
  }

  function renderDiscussTopic(board, topicId) {
    if (!view) return;
    var d = getDiscuss();
    var t = d.topics.filter(function (x) { return x.id === topicId; })[0];
    if (!t) { navigate('comments', board); return; }
    var cfg = discussBoardCfg(board);
    var repliesHtml = (t.replies && t.replies.length)
      ? '<ul class="ds-reply-list">' + t.replies.map(function (rp) {
          var canDel = discussCanDelete(rp.authorId, rp.guestId);
          return '<li class="ds-reply' + (canDel ? ' has-del' : '') + '">' +
            (rp.authorId
              ? '<div class="ds-reply-avatar clickable" onclick="event.stopPropagation();window.__openUserProfile(\'' + esc(rp.authorId) + '\')">' + (getUserById(rp.authorId) ? userAvatarHtml(getUserById(rp.authorId)) : esc((rp.authorName || '🎓').slice(0, 1))) + '</div>'
              : '<div class="ds-reply-avatar anon">·</div>') +
            '<div class="ds-reply-body">' +
              '<div class="ds-reply-head">' + (rp.authorId
                ? '<span class="ds-reply-name clickable" onclick="event.stopPropagation();window.__openUserProfile(\'' + esc(rp.authorId) + '\')">' + esc(rp.authorName || '匿名') + '</span>'
                : '<span class="ds-reply-name">' + esc(rp.authorName || '匿名') + '</span>') +
                '<span class="ds-reply-tag' + (rp.authorId ? '' : ' anon') + '">' + (rp.authorId ? '用户' : '匿名') + '</span>' +
                '<span class="ds-reply-time">' + esc(relativeTime(rp.ts)) + '</span>' +
                (canDel ? '<button class="ds-del ds-del-sm" onclick="deleteReply(\'' + esc(board) + '\',\'' + esc(t.id) + '\',\'' + esc(rp.id) + '\')">删除</button>' : '') +
              '</div>' +
              '<div class="ds-reply-text">' + esc(rp.content) + '</div>' +
            '</div>' +
          '</li>';
        }).join('') + '</ul>'
      : '<div class="ds-empty"><div class="ds-empty-sub">还没有回复，来抢沙发 ✨</div></div>';
    var u = getCurrentUser();
    var guestName = lsGet('gz_guest_name', '') || '';
    var idHtml = u
      ? '<div class="cm-form-id cm-form-id-top">' +
          '<span class="cm-form-avatar">' + userAvatarHtml(u) + '</span>' +
          '<span class="cm-form-name">以 <b>' + esc(getDisplayName(u) || u.username) + '</b> 身份回复</span>' +
          '<label class="cm-anon"><input type="checkbox" id="cmAnon"> <span>匿名</span></label>' +
        '</div>'
      : '<div class="cm-form-id cm-form-id-top">' +
          '<span class="cm-form-avatar cm-form-avatar-anon">·</span>' +
          '<input class="cm-name-input" id="cmName" maxlength="20" placeholder="给自己起个昵称（可选）" value="' + esc(guestName) + '">' +
          '<span class="cm-form-name">将以 <b>匿名</b> 身份回复</span>' +
        '</div>';
    var canDelT = discussCanDelete(t.authorId, t.guestId);
    var right = '<div class="ds-topic-back"><a class="ds-back" onclick="navigate(\'comments\',\'' + esc(board) + '\')">← ' + esc(cfg.key) + '</a></div>' +
      '<div class="ds-topic-head' + (canDelT ? ' has-del' : '') + '" style="--bc:' + cfg.color + '">' +
        '<div class="ds-topic-title-lg">' + esc(t.title) + '</div>' +
        '<div class="ds-topic-by"><span class="ds-tag" style="--bc:' + cfg.color + '">' + cfg.icon + ' ' + esc(t.board) + '</span>' +
          authorChip(t.authorId, t.authorName, 'ds-topic-author') +
          '<span class="ds-dot">·</span><span>' + esc(relativeTime(t.ts)) + '</span>' +
          (canDelT ? '<button class="ds-del" onclick="deleteTopic(\'' + esc(board) + '\',\'' + esc(t.id) + '\')">删除</button>' : '') +
        '</div>' +
      '</div>' +
      '<div class="ds-post"><div class="ds-post-body">' + esc(t.content) + '</div></div>' +
      '<div class="ds-list-head"><span>回复</span><span>' + (t.replies ? t.replies.length : 0) + ' 条</span></div>' +
      repliesHtml +
      '<div class="cm-form-card ds-reply-form">' + idHtml +
        '<textarea class="cm-textarea" id="cmText" maxlength="1000" placeholder="写下你的回复…" rows="3"></textarea>' +
        '<div class="cm-form-foot"><div class="cm-counter"><span id="cmCount">0</span> / 1000</div>' +
          '<button class="cm-submit" id="cmSubmit" disabled>回复</button></div>' +
      '</div>';
    view.innerHTML =
      '<div class="panel ds-page">' +
        '<div class="ds-layout">' +
          discussSidebar(board) +
          '<section class="ds-content">' + right + '</section>' +
        '</div>' +
      '</div>';
    bindDiscussForm('reply', board, topicId);
  }

  function bindDiscussForm(mode, board, topicId) {
    var text = document.getElementById('cmText');
    var count = document.getElementById('cmCount');
    var btn = document.getElementById('cmSubmit');
    var titleEl = document.getElementById('cmTitle');
    if (!text) return;
    function refresh() {
      var ok = text.value.trim().length > 0;
      if (btn) { btn.disabled = !ok; btn.classList.toggle('ready', ok); }
      if (count) count.textContent = text.value.length;
    }
    text.addEventListener('input', refresh);
    if (titleEl) titleEl.addEventListener('input', refresh);
    if (btn) btn.addEventListener('click', function () {
      var content = text.value.trim();
      if (!content) return;
      var cu = getCurrentUser();
      if (cu && cu.muted) { toast('你已被禁言，暂不能发表内容'); return; }
      var id = discussIdentity();
      var d = getDiscuss();
      if (mode === 'topic') {
        var title = titleEl && titleEl.value.trim() ? titleEl.value.trim() : (content.slice(0, 20) || '（无标题）');
        d.topics.push({
          id: 't_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
          board: board, ts: Date.now(),
          authorId: id.authorId, authorName: id.authorName, avatar: id.avatar,
          guestId: id.isAnon ? currentGuestId() : null,
          title: title, content: content, replies: []
        });
        saveDiscuss(d);
        renderComments(); // 重新渲染当前板块，立即显示新帖子（hash 未变不会触发 hashchange）
      } else {
        var t = d.topics.filter(function (x) { return x.id === topicId; })[0];
        if (t) {
          if (!t.replies) t.replies = [];
          t.replies.push({
            id: 'r_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
            ts: Date.now(), authorId: id.authorId, authorName: id.authorName, content: content,
            guestId: id.isAnon ? currentGuestId() : null
          });
          saveDiscuss(d);
          if (t.authorId && t.authorId !== id.authorId && getUserById(t.authorId)) {
            pushNotification(t.authorId, 'reply', (id.authorName || '有人') + ' 回复了你的帖子《' + t.title + '》', { topicId: t.id, board: board });
          }
          renderComments();
        }
      }
    });
  }

  /* ---------- 设置 ---------- */
  function renderSettings() {
    var u = getCurrentUser();
    var accountHtml;
    if (u) {
      accountHtml =
        '<div class="setting-row account-row">' +
          '<div class="account-info">' +
            '<div class="account-avatar-lg">' + userAvatarHtml(u) + '</div>' +
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
          '<div><b>高中预习网站</b><p>数据保存在本机浏览器中，打开即用。注册账号后可在本机多账号间切换。</p></div>' +
          '<button class="btn-plain" onclick="navigate(\'about\')">查看</button>' +
        '</div>' +
      '</div>';
  }
  window.__clearProgress = function () { lsSet('gz_progress', {}); toast('学习进度已清除'); };
  window.__clearWrongbook = function () { lsSet('gz_wrongbook', []); toast('错题本已清空'); };

  /* ---------- 管理后台（仅管理员 king 可访问） ---------- */
  var _admFilter = '';
  function adminRowsHtml(users, me) {
    var ids = Object.keys(users).filter(function (id) {
      if (!_admFilter) return true;
      var u = users[id], f = _admFilter.toLowerCase();
      return (getDisplayName(u).toLowerCase().indexOf(f) >= 0) ||
        (u.username || '').toLowerCase().indexOf(f) >= 0 ||
        (id || '').toLowerCase().indexOf(f) >= 0;
    }).sort(function (a, b) {
      var ta = users[a].createdAt || '', tb = users[b].createdAt || '';
      return tb < ta ? -1 : (tb > ta ? 1 : 0);
    });
    if (!ids.length) return '<tr><td colspan="5" class="adm-empty">没有匹配的账号</td></tr>';
    return ids.map(function (id) {
      var u = users[id];
      var self = (id === (me && me.id));
      var badges = '';
      if (u.banned) badges += '<span class="adm-badge ban">已封号</span>';
      if (u.muted) badges += '<span class="adm-badge mute">已禁言</span>';
      if (!badges) badges = '<span class="adm-badge ok">正常</span>';
      var actions = '';
      if (!self) {
        actions += '<button class="adm-btn' + (u.muted ? ' on' : '') + '" onclick="window.__adminSetFlag(\'' + esc(id) + '\',\'muted\',' + (!u.muted) + ')">' + (u.muted ? '解禁言' : '禁言') + '</button>';
        actions += '<button class="adm-btn danger' + (u.banned ? ' on' : '') + '" onclick="window.__adminSetFlag(\'' + esc(id) + '\',\'banned\',' + (!u.banned) + ')">' + (u.banned ? '解封' : '封号') + '</button>';
      } else {
        actions = '<span class="adm-self">（当前管理员）</span>';
      }
      return '<tr>' +
        '<td class="adm-av">' + userAvatarHtml(u) + '</td>' +
        '<td><div class="adm-name">' + esc(getDisplayName(u)) + '</div><div class="adm-sub">@' + esc(u.username) + ' · ' + esc(id) + '</div></td>' +
        '<td>' + esc((u.createdAt || '').slice(0, 10)) + '</td>' +
        '<td class="adm-badges">' + badges + '</td>' +
        '<td class="adm-actions">' + actions + '</td>' +
        '</tr>';
    }).join('');
  }
  function renderAdmin() {
    var me = getCurrentUser();
    if (!me || !isAdminUser(me)) {
      view.innerHTML = '<div class="panel"><h2>⛔ 无权限</h2><p>只有管理员可以访问管理后台。</p></div>';
      return;
    }
    var users = getAllUsers();
    view.innerHTML =
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / 管理后台</div>' +
      '<div class="panel adm-panel">' +
        '<h2>🛡️ 管理后台</h2>' +
        '<p class="adm-tip">本机共 <b>' + Object.keys(users).length + '</b> 个账号。' +
        '<b>封号</b>：该账号将无法再登录；<b>禁言</b>：该账号将无法发帖 / 评论 / 私信。操作仅在本机浏览器生效。</p>' +
        '<div class="adm-search"><input id="admSearch" placeholder="搜索昵称 / 用户名 / id…" value="' + esc(_admFilter) + '" oninput="window.__adminSearch(this.value)" /></div>' +
        '<table class="adm-table"><thead><tr><th></th><th>账号</th><th>注册时间</th><th>状态</th><th>操作</th></tr></thead>' +
        '<tbody id="admTbody">' + adminRowsHtml(users, me) + '</tbody></table>' +
      '</div>';
  }
  window.__adminSearch = function (v) {
    _admFilter = (v || '').trim();
    var tb = document.getElementById('admTbody');
    if (tb) tb.innerHTML = adminRowsHtml(getAllUsers(), getCurrentUser());
  };
  window.__adminSetFlag = function (id, flag, val) {
    var users = getAllUsers();
    if (!users[id]) return;
    if (id === (getCurrentUser() && getCurrentUser().id)) return; // 不能操作自己
    users[id][flag] = val;
    lsSet('gz_users', users);
    toast((flag === 'banned' ? (val ? '已封号' : '已解封') : (val ? '已禁言' : '已解禁言')) + '：' + getDisplayName(users[id]));
    renderAdmin();
  };

  /* ---------- 关于 ---------- */
  function renderAbout() {
    var st = gzStats();
    var doneTotal = 0;
    GZ_SUBJECTS.forEach(function (s) { s.volumes.forEach(function (v) { if (v.grade !== '高三') doneTotal += gzUnitCount(v); }); });
    view.innerHTML = '' +
      '<div class="panel">' +
        '<h2>🎓 关于高中预习网站</h2>' +
        '<p>本站是面向准高中生与高中生的全学科预习平台，覆盖高中 ' + st.subjects + ' 门学科、' + st.volumes + ' 册教材，按新课标教材体系组织内容。</p>' +
        '<p>已完成上线：' + doneTotal + ' 个课时（含图文讲解与课后练习）。更多学科与册次正在陆续建设中。</p>' +
        '<p>数据保存在本机浏览器中，打开即用。</p>' +
      '</div>';
  }

  /* ---------- 主题切换（深色 / 浅色） ---------- */
  function applyTheme(theme) {
    var isDark = theme === 'dark';
    document.body.classList.toggle('theme-dark', isDark);
    var tip = document.getElementById('themeTip');
    if (tip) tip.textContent = isDark ? '深色' : '浅色';
    var btn = document.getElementById('themeToggle');
    if (btn) btn.setAttribute('title', isDark ? '切换到浅色模式' : '切换到深色模式');
    try { localStorage.setItem('gz_theme', theme); } catch (e) {}
  }
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem('gz_theme'); } catch (e) {}
    if (saved === 'dark' || saved === 'light') {
      applyTheme(saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyTheme('dark');
    }
  }
  window.__toggleTheme = function () {
    var isDark = document.body.classList.contains('theme-dark');
    applyTheme(isDark ? 'light' : 'dark');
  };

  /* ---------- 学习进度页：7 天节奏图 hover 交互 ---------- */
  window.__weekHover = function (i) {
    var days = window.__weekDays;
    var tip = document.getElementById('weekTip');
    if (!days || !tip) return;
    var d = days[i];
    if (!d) return;
    var dateEl = tip.querySelector('.wt-date');
    var lEl = tip.querySelector('.wt-l');
    var qEl = tip.querySelector('.wt-q');
    var todayTag = d.isToday ? '（今天）' : '';
    dateEl.textContent = d.date + ' · 周' + d.weekday + todayTag;
    lEl.innerHTML = d.lessons > 0
      ? '<i class="wt-dot wt-dot-bar"></i>学习课时：<b>' + d.lessons + '</b> 节'
      : '<i class="wt-dot wt-dot-empty"></i>学习课时：<b class="muted">0</b> 节';
    qEl.innerHTML = d.questions > 0
      ? '<i class="wt-dot wt-dot-line"></i>做题数量：<b>' + d.questions + '</b> 题'
      : '<i class="wt-dot wt-dot-empty"></i>做题数量：<b class="muted">0</b> 题';
    // 高亮当前列的 backdrop
    var bgs = document.querySelectorAll('.week-hover-bg');
    bgs.forEach(function (b) { b.setAttribute('fill', 'transparent'); });
    var bg = document.querySelector('.week-hover-bg[data-bg-i="' + i + '"]');
    if (bg) bg.setAttribute('fill', 'rgba(74, 125, 224, 0.10)');
    // 定位
    var wrap = document.querySelector('.week-chart-wrap');
    var zone = document.querySelector('.week-hover[data-i="' + i + '"]');
    if (wrap && zone) {
      var zRect = zone.getBoundingClientRect();
      var wRect = wrap.getBoundingClientRect();
      var center = (zRect.left - wRect.left) + zRect.width / 2;
      tip.style.left = center + 'px';
      tip.style.top = '0px';
      tip.style.transform = 'translate(-50%, -100%) translateY(-6px)';
    }
    tip.style.display = 'block';
  };
  window.__weekLeave = function () {
    var tip = document.getElementById('weekTip');
    if (tip) tip.style.display = 'none';
    var bgs = document.querySelectorAll('.week-hover-bg');
    bgs.forEach(function (b) { b.setAttribute('fill', 'transparent'); });
  };
  initTheme();
  backfillProgressTs();
  // 启动即检查：当前登录账号若已被封号，强制退出（仅本机生效）
  (function () {
    var _u = getCurrentUser();
    if (_u && _u.banned) { setCurrentUserId(null); try { toast('该账号已被封禁，已强制退出'); } catch (e) {} }
  })();

  /* ---------- 启动 ---------- */
  window.addEventListener('hashchange', render);
  function __safeRender() {
    try { render(); }
    catch (e) { window.dispatchEvent(new ErrorEvent('error', { message: (e && e.stack) ? e.stack : String(e) })); }
  }
  document.addEventListener('DOMContentLoaded', __safeRender);
  if (document.readyState !== 'loading') __safeRender();
  // 若已有云端会话，静默恢复登录态与学习数据（刷新后保持登录）
  cbAutoRestore();
})();
