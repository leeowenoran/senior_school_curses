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
      var coverHtml = (p.cover) ? '<div class="lesson-cover"><img src="' + esc(p.cover) + '" alt="' + esc(p.name) + ' 封面配图" loading="lazy"></div>' : '';

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
          coverHtml +
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
          q: "Terri Bolton is a dab hand when it comes to DIY (do-it-yourself). Skilled at putting up shelves and piecing together furniture, she never pays someone else to do a job she can do herself.\n\nShe credits these skills to her late grandfather and builder Derek Lloyd. From the age of six, Terri, now 26, accompanied Derek to work during her school holidays. A day's work was rewarded with £5 in pocket money. She says: \"I'm sure I wasn't much of a help to start with. But when Derek built our family house about eight years ago, I was heavily involved (参与), painting the rooms and putting down the flooring throughout the house. It took weeks and it was back-breaking work, but I know he was proud of my skills.\"\n\nTerri, who now rents a house with friends in Wandsworth, South West London, says DIY also saves her from losing any deposit when a tenancy (租期) comes to an end. She adds: \"I've moved house many times and I always like to personalise my room and put up pictures. So, it's been useful to know how to cover up holes and repaint a room to avoid any charges when I've moved out.\"\n\nWith millions of people likely to take on DIY projects over the coming weeks, new research shows that more than half of people are planning to make the most of the long, warm summer days to get jobs done. The average spend per project will be around £823. Two thirds of people aim to improve their comfort while at home. A fifth wish to increase the value of their homes. Though DIY has traditionally been seen as a male hobby, the research shows it is women now leading the charge.",
          diff: "medium", src: "2023年高考英语全国甲卷 阅读理解B篇",
          subs: [
            {
              q: "Which is closest in meaning to \"a dab hand\" in paragraph 1?",
              opts: ["A. An artist.", "B. A winner.", "C. A specialist.", "D. A pioneer."],
              a: "C",
              exp: "词义猜测题。划线短语后紧接 \"Skilled at putting up shelves and piecing together furniture, she never pays someone else to do a job she can do herself\"，说明她是DIY方面的行家里手，故 a dab hand 意为\"能手、行家\"，与 specialist 最接近。",
              diff: "easy"
            },
            {
              q: "Why did Terri's grandfather give her £5 a day?",
              opts: ["A. For a birthday gift.", "B. As a treat for her work.", "C. To support her DIY projects.", "D. To encourage her to take up a hobby."],
              a: "B",
              exp: "细节理解题。第二段 \"A day's work was rewarded with £5 in pocket money\" 表明这5英镑是对她一天劳动的奖励、犒劳，故选B。",
              diff: "easy"
            },
            {
              q: "How did Terri avoid losing the deposit on the house she rented?",
              opts: ["A. By making it look like before.", "B. By furnishing it herself.", "C. By splitting the rent with a roommate.", "D. By cancelling the rental agreement."],
              a: "A",
              exp: "推理判断题。第三段说她懂得 \"how to cover up holes and repaint a room to avoid any charges when I've moved out\"，即把房间恢复成原样以免被扣押金，故选A。",
              diff: "medium"
            },
            {
              q: "What trend in DIY does the research show?",
              opts: ["A. It is becoming more costly.", "B. It is getting more time-consuming.", "C. It is turning into a seasonal industry.", "D. It is gaining popularity among females."],
              a: "D",
              exp: "细节理解题。末段最后一句 \"Though DIY has traditionally been seen as a male hobby, the research shows it is women now leading the charge\" 表明如今女性成为DIY主力，即DIY在女性中越来越流行，故选D。",
              diff: "medium"
            }
          ]
        },
        {
          q: "When almost everyone has a mobile phone, why are more than half of Australian homes still paying for a landline (座机)?\n\nThese days you'd be hard pressed to find anyone in Australia over the age of 15 who doesn't own a mobile phone. In fact plenty of younger kids have one in their pocket. Practically everyone can make and receive calls anywhere, anytime.\n\nStill, 55 percent of Australians have a landline phone at home and only just over a quarter (29%) rely only on their smartphones, according to a survey (调查). Of those Australians who still have a landline, a third concede that it's not really necessary and they're keeping it as a security blanket — 19 percent say they never use it while a further 13 percent keep it in case of emergencies. I think my home falls into that category.\n\nMore than half of Australian homes are still choosing to stick with their home phone. Age is naturally a factor (因素) — only 58 percent of generation Ys still use landlines now and then, compared to 84 percent of Baby Boomers who've perhaps had the same home number for 50 years.\n\nAge isn't the only factor; I'd say it's also to do with the makeup of your household. Generation Xers with young families, like my wife and I, can still find it convenient to have a home phone rather than providing a mobile phone for every family member. That said, to be honest the only people who ever ring our home phone are our Baby Boomer parents, to the point where we play a game and guess who is calling before we pick up the phone (using Caller ID would take the fun out of it).\n\nHow attached are you to your landline? How long until they go the way of gas street lamps and morning milk deliveries?",
          diff: "medium", src: "2021年高考英语全国乙卷 阅读理解B篇",
          subs: [
            {
              q: "What does paragraph 2 mainly tell us about mobile phones?",
              opts: ["A. Their target users.", "B. Their wide popularity.", "C. Their major functions.", "D. Their complex design."],
              a: "B",
              exp: "段落大意题。第二段说在澳大利亚很难找到15岁以上不用手机的人，很多更小的孩子也有手机，几乎人人都能随时随地打接电话，重在说明手机普及面广，故选B。",
              diff: "easy"
            },
            {
              q: "What does the underlined word \"concede\" in paragraph 3 mean?",
              opts: ["A. Admit.", "B. Argue.", "C. Remember.", "D. Remark."],
              a: "A",
              exp: "词义猜测题。语境为\"在仍保留座机的澳大利亚人中，三分之一的人 concede 座机并非真的必要\"，此处是承认这一事实，故 concede 意为\"承认\"，选A。",
              diff: "easy"
            },
            {
              q: "What can we say about Baby Boomers?",
              opts: ["A. They like smartphone games.", "B. They enjoy guessing callers' identity.", "C. They keep using landline phones.", "D. They are attached to their family."],
              a: "C",
              exp: "推理判断题。第四段说84%的婴儿潮一代可能用同一个家庭号码长达50年，第五段又说只有婴儿潮一代的父母才会打家里的座机，可推知他们一直在使用座机，故选C。",
              diff: "medium"
            },
            {
              q: "What can be inferred about the landline from the last paragraph?",
              opts: ["A. It remains a family necessity.", "B. It will fall out of use some day.", "C. It may increase daily expenses.", "D. It is as important as the gas light."],
              a: "B",
              exp: "推理判断题。末段问座机还要多久会\"go the way of gas street lamps and morning milk deliveries\"，而煤气路灯和晨间送奶都已退出历史舞台，暗示座机终有一天也会被弃用，故选B。",
              diff: "medium"
            }
          ]
        },
        {
          q: "Returning to a book you've read many times can feel like drinks with an old friend. There's a welcome familiarity — but also sometimes a slight suspicion that time has changed you both, and thus the relationship. But books don't change, people do. And that's what makes the act of rereading so rich and transformative.\n\nThe beauty of rereading lies in the idea that our bond with the work is based on our present mental register. It's true, the older I get, the more I feel time has wings. But with reading, it's all about the present. It's about the now and what one contributes to the now, because reading is a give and take between author and reader. Each has to pull their own weight.\n\nThere are three books I reread annually. The first, which I take to reading every spring, is Ernest Hemingway's A Moveable Feast. Published in 1964, it's his classic memoir of 1920s Paris. The language is almost intoxicating (令人陶醉的), an aging writer looking back on an ambitious yet simpler time. Another is Annie Dillard's Holy the Firm, her poetic 1975 ramble (随笔) about everything and nothing. The third book is Julio Cortazar's Save Twilight: Selected Poems, because poetry. And because Cortazar.\n\nWhile I tend to buy a lot of books, these three were given to me as gifts, which might add to the meaning I attach to them. But I imagine that, while money is indeed wonderful and necessary, rereading an author's work is the highest currency a reader can pay them. The best books are the ones that open further as time passes. But remember, it's you that has to grow and read and reread in order to better understand your friends.",
          diff: "hard", src: "2020年高考英语全国卷I 阅读理解B篇",
          subs: [
            {
              q: "Why does the author like rereading?",
              opts: ["A. It evaluates the writer-reader relationship.", "B. It's a window to a whole new world.", "C. It's a substitute for drinking with a friend.", "D. It extends the understanding of oneself."],
              a: "D",
              exp: "推理判断题。第一段说\"books don't change, people do\"，第二段指出重读的美妙在于与作品的联系取决于当下的心境，末段又说要靠自己成长、阅读和重读才能更好地理解\"朋友\"，说明重读能加深对自我的理解，故选D。",
              diff: "hard"
            },
            {
              q: "What do we know about the book A Moveable Feast?",
              opts: ["A. It's a brief account of a trip.", "B. It's about Hemingway's life as a young man.", "C. It's a record of a historic event.", "D. It's about Hemingway's friends in Paris."],
              a: "B",
              exp: "细节理解题。第三段说该书是海明威关于20世纪20年代巴黎的经典回忆录，是\"an aging writer looking back on an ambitious yet simpler time\"，即年长作家回顾自己年轻时的生活，故选B。",
              diff: "medium"
            },
            {
              q: "What does the underlined word \"currency\" in paragraph 4 refer to?",
              opts: ["A. Debt.", "B. Reward.", "C. Allowance.", "D. Face value."],
              a: "B",
              exp: "词义猜测题。作者把金钱与重读作对比，认为重读作家的作品是读者能付给作家的\"最高币值\"，实指对作家最高的回报，故 currency 在此意为\"回报\"，选B。",
              diff: "hard"
            },
            {
              q: "What can we infer about the author from the text?",
              opts: ["A. He loves poetry.", "B. He's an editor.", "C. He's very ambitious.", "D. He teaches reading."],
              a: "A",
              exp: "推理判断题。第三段提到他每年重读的第三本书是科塔萨尔的诗选《Save Twilight》，理由就是\"because poetry\"，可推知作者热爱诗歌，故选A。",
              diff: "medium"
            }
          ]
        },
        {
          q: "In 1916, two girls of wealthy families, best friends from Auburn, N.Y. — Dorothy Woodruff and Rosamond Underwood — traveled to a settlement in the Rocky Mountains to teach in a one-room schoolhouse. The girls had gone to Smith College. They wore expensive clothes. So for them to move to Elkhead, Colo. to instruct the children whose shoes were held together with string was a surprise. Their stay in Elkhead is the subject of Nothing Daunted: The Unexpected Education of Two Society Girls in the West by Dorothy Wickenden, who is a magazine editor and Dorothy Woodruff's granddaughter.\n\nWhy did they go then? Well, they wanted to do something useful. Soon, however, they realized what they had undertaken.\n\nThey moved in with a local family, the Harrisons, and, like them, had little privacy, rare baths, and a blanket of snow on their quilt when they woke up in the morning. Some mornings, Rosamond and Dorothy would arrive at the schoolhouse to find the children weeping from the cold. In spring, the snow was replaced by mud over ice.\n\nIn Wickenden's book, she expanded on the history of the West and also on feminism, which of course influenced the girls' decision to go to Elkhead. A hair-raising section concerns the building of the railroads, which entailed (牵涉) drilling through the Rockies, often in blinding snowstorms. The book ends with Rosamond and Dorothy's return to Auburn.\n\nWickenden is a very good storyteller. The sweep of the land and the stoicism (坚忍) of the people move her to some beautiful writing. Here is a picture of Dorothy Woodruff, on her horse, looking down from a hill top: \"When the sun slipped behind the mountains, it shed a rosy glow all around them. Then a full moon rose. The snow was marked only by small animals: foxes, coyotes, mice, and varying hares, which turned white in the winter.\"",
          diff: "medium", src: "2022年高考英语全国乙卷 阅读理解B篇",
          subs: [
            {
              q: "Why did Dorothy and Rosamond go to the Rocky Mountains?",
              opts: ["A. To teach in a school.", "B. To study American history.", "C. To write a book.", "D. To do sightseeing."],
              a: "A",
              exp: "细节理解题。首段明确说两人 \"traveled to a settlement in the Rocky Mountains to teach in a one-room schoolhouse\"，即去落基山脉是为了在只有一间教室的学校教书，故选A。",
              diff: "easy"
            },
            {
              q: "What can we learn about the girls from paragraph 3?",
              opts: ["A. They enjoyed much respect.", "B. They had a room with a bathtub.", "C. They lived with the local kids.", "D. They suffered severe hardships."],
              a: "D",
              exp: "推理判断题。第三段说她们与当地的Harrison一家同住，几乎没有隐私、很少洗澡、早晨醒来被子上盖着一层雪，春天雪化后遍地泥泞，可见生活条件极为艰苦，故选D。",
              diff: "medium"
            },
            {
              q: "Which part of Wickenden's writing is hair-raising?",
              opts: ["A. The extreme climate of Auburn.", "B. The living conditions in Elkhead.", "C. The railroad building in the Rockies.", "D. The natural beauty of the West."],
              a: "C",
              exp: "细节理解题。第四段 \"A hair-raising section concerns the building of the railroads, which entailed drilling through the Rockies, often in blinding snowstorms\" 直接指出令人惊心动魄的部分是落基山脉中的铁路修建，故选C。",
              diff: "easy"
            },
            {
              q: "What is the text?",
              opts: ["A. A news report.", "B. A book review.", "C. A children's story.", "D. A diary entry."],
              a: "B",
              exp: "文章出处题。全文围绕Dorothy Wickenden的著作《Nothing Daunted》介绍内容并作出评价（如 \"Wickenden is a very good storyteller\"），属于书评，故选B。",
              diff: "medium"
            }
          ]
        }
      ],
            'english::rd_d': [
        {
          q: "Grizzly bears, which may grow to about 2.5 m long and weigh over 400 kg, occupy a conflicted corner of the American psyche — we revere (敬畏) them even as they give us frightening dreams. Ask the tourists from around the world that flood into Yellowstone National Park what they most hope to see, and their answer is often the same: a grizzly bear.\n“Grizzly bears are re-occupying large areas of their former range,” says bear biologist Chris Servheen. As grizzly bears expand their range into places where they haven’t been seen in a century or more, they’re increasingly being sighted by humans.\nThe western half of the U.S. was full of grizzlies when Europeans came, with a rough number of 50,000 or more living alongside Native Americans. By the early 1970s, after centuries of cruel and continuous hunting by settlers, 600 to 800 grizzlies remained on a mere 2 percent of their former range in the Northern Rockies. In 1975, grizzlies were listed under the Endangered Species Act.\nToday, there are about 2,000 or more grizzly bears in the U.S. Their recovery has been so successful that the U.S. Fish and Wildlife Service has twice attempted to de-list grizzlies, which would loosen legal protections and allow them to be hunted. Both efforts were overturned due to lawsuits from conservation groups. For now, grizzlies remain listed.\nObviously, if precautions (预防) aren’t taken, grizzlies can become troublesome, sometimes killing farm animals or walking through yards in search of food. If people remove food and attractants from their yards and campsites, grizzlies will typically pass by without trouble. Putting electric fencing around chicken houses and other farm animal quarters is also highly effective at getting grizzlies away. “Our hope is to have a clean, attractant-free place where bears can pass through without learning bad habits,” says James Jonkel, longtime biologist who manages bears in and around Missoula.",
          diff: "hard", src: "2023年高考全国甲卷 英语 阅读理解D篇",
          subs: [
            {
              q: "How do Americans look at grizzlies?",
              opts: ["A. They cause mixed feelings in people.", "B. They should be kept in national parks.", "C. They are of high scientific value.", "D. They are a symbol of American culture."],
              a: "A",
              exp: "细节理解题。第一段首句说灰熊在美国人心中占据“a conflicted corner”，“we revere them even as they give us frightening dreams”，即又敬畏又害怕，正是A项所说的“mixed feelings”。",
              diff: "medium"
            },
            {
              q: "What has helped the increase of the grizzly population?",
              opts: ["A. The European settlers’ behavior.", "B. The expansion of bears’ range.", "C. The protection by law since 1975.", "D. The support of Native Americans."],
              a: "C",
              exp: "细节理解题。第三段末句“In 1975, grizzlies were listed under the Endangered Species Act”，第四段说如今已有约2000头以上，恢复十分成功，可见数量增长得益于1975年起的法律保护，故选C。",
              diff: "medium"
            },
            {
              q: "What has stopped the U.S. Fish and Wildlife Service from de-listing grizzlies?",
              opts: ["A. The opposition of conservation groups.", "B. The successful comeback of grizzlies.", "C. The voice of the biologists.", "D. The local farmers’ advocates."],
              a: "A",
              exp: "细节理解题。第四段“Both efforts were overturned due to lawsuits from conservation groups”，两次除名尝试都因环保组织的诉讼而被推翻，故选A。",
              diff: "medium"
            },
            {
              q: "What can be inferred from the last paragraph?",
              opts: ["A. Food should be provided for grizzlies.", "B. People can live in harmony with grizzlies.", "C. A special path should be built for grizzlies.", "D. Technology can be introduced to protect grizzlies."],
              a: "B",
              exp: "推理判断题。末段指出只要移走食物和引诱物、加装电围栏，灰熊通常会平安通过而不惹麻烦，末句更希望熊能“pass through without learning bad habits”，由此可推知人与灰熊能够和谐共处，故选B。",
              diff: "hard"
            }
          ]
        },
        {
          q: "Human speech contains more than 2,000 different sounds, from the common “m” and “a” to the rare clicks of some southern African languages. But why are certain sounds more common than others? A ground-breaking, five-year study shows that diet-related changes in human bite led to new speech sounds that are now found in half the world’s languages.\nMore than 30 years ago, the scholar Charles Hockett noted that speech sounds called labiodentals, such as “f” and “v”, were more common in the languages of societies that ate softer foods. Now a team of researchers led by Damián Blasi at the University of Zurich, Switzerland, has found how and why this trend arose.\nThey discovered that the upper and lower front teeth of ancient human adults were aligned (对齐), making it hard to produce labiodentals, which are formed by touching the lower lip to the upper teeth. Later, our jaws changed to an overbite structure (结构), making it easier to produce such sounds.\nThe team showed that this change in bite was connected with the development of agriculture in the Neolithic period. Food became easier to chew at this point. The jawbone didn’t have to do as much work and so didn’t grow to be so large.\nAnalyses of a language database also confirmed that there was a global change in the sound of world languages after the Neolithic age, with the use of “f” and “v” increasing remarkably during the last few thousand years. These sounds are still not found in the languages of many hunter-gatherer people today.\nThis research overturns the popular view that all human speech sounds were present when human beings evolved around 300,000 years ago. “The set of speech sounds we use has not necessarily remained stable since the appearance of human beings, but rather the huge variety of speech sounds that we find today is the product of a complex interplay of things like biological change and cultural evolution,” said Steven Moran, a member of the research team.",
          diff: "hard", src: "2022年高考新高考I卷 英语 阅读理解D篇",
          subs: [
            {
              q: "Which aspect of the human speech sound does Damián Blasi’s research focus on?",
              opts: ["A. Its variety.", "B. Its distribution.", "C. Its quantity.", "D. Its development."],
              a: "D",
              exp: "细节理解题。文章说该团队发现了唇齿音这一趋势“how and why this trend arose”，并追溯咬合结构随农业发展而改变、语音随之演变的过程，可见研究聚焦语音的“发展演变”，故选D。",
              diff: "medium"
            },
            {
              q: "Why was it difficult for ancient human adults to produce labiodentals?",
              opts: ["A. They had fewer upper teeth than lower teeth.", "B. They could not open and close their lips easily.", "C. Their jaws were not conveniently structured.", "D. Their lower front teeth were not large enough."],
              a: "C",
              exp: "细节理解题。第三段说古人上下门牙是“aligned (对齐)”的，难以发出需要下唇触上齿的唇齿音；后来颌部变成“overbite structure”才容易发音，说明是颌骨结构不便，故选C。",
              diff: "medium"
            },
            {
              q: "What is paragraph 5 mainly about?",
              opts: ["A. Supporting evidence for the research results.", "B. Potential application of the research findings.", "C. A further explanation of the research methods.", "D. A reasonable doubt about the research process."],
              a: "A",
              exp: "段落大意题。第五段用语言数据库的分析“also confirmed”新石器时代后“f”“v”使用显著增加，是为前文研究结论提供佐证，故选A。",
              diff: "hard"
            },
            {
              q: "What does Steven Moran say about the set of human speech sounds?",
              opts: ["A. It is key to effective communication.", "B. It contributes much to cultural diversity.", "C. It is a complex and dynamic system.", "D. It drives the evolution of human beings."],
              a: "C",
              exp: "细节理解题。Moran说语音集“has not necessarily remained stable”，而是“the product of a complex interplay of things like biological change and cultural evolution”，即复杂而动态的系统，故选C。",
              diff: "hard"
            }
          ]
        },
        {
          q: "The connection between people and plants has long been the subject of scientific research. Recent studies have found positive effects. A study conducted in Youngstown, Ohio, for example, discovered that greener areas of the city experienced less crime. In another, employees were shown to be 15% more productive when their workplaces were decorated with houseplants.\nThe engineers at the Massachusetts Institute of Technology (MIT) have taken it a step further — changing the actual composition of plants in order to get them to perform diverse, even unusual functions. These include plants that have sensors printed onto their leaves to show when they’re short of water and a plant that can detect harmful chemicals in groundwater. “We’re thinking about how we can engineer plants to replace functions of the things that we use every day,” explained Michael Strano, a professor of chemical engineering at MIT.\nOne of his latest projects has been to make plants glow (发光) in experiments using some common vegetables. Strano’s team found that they could create a faint light for three-and-a-half hours. The light, about one-thousandth of the amount needed to read by, is just a start. The technology, Strano said, could one day be used to light the rooms or even to turn trees into self-powered street lamps.\nIn the future, the team hopes to develop a version of the technology that can be sprayed onto plant leaves in a one-off treatment that would last the plant’s lifetime. The engineers are also trying to develop an on and off “switch” where the glow would fade when exposed to daylight.\nLighting accounts for about 7% of the total electricity consumed in the US. Since lighting is often far removed from the power source (电源) — such as the distance from a power plant to street lamps on a remote highway — a lot of energy is lost during transmission (传输). Glowing plants could reduce this distance and therefore help save energy.",
          diff: "hard", src: "2020年高考全国I卷 英语 阅读理解D篇",
          subs: [
            {
              q: "What is the first paragraph mainly about?",
              opts: ["A. A new study of different plants.", "B. A big fall in crime rates.", "C. Employees from various workplaces.", "D. Benefits from green plants."],
              a: "D",
              exp: "段落大意题。第一段以“Recent studies have found positive effects”领起，随后举出绿化多的城区犯罪更少、办公室摆绿植员工效率高15%两例，都在说明绿色植物带来的益处，故选D。",
              diff: "medium"
            },
            {
              q: "What is the function of the sensors printed on plant leaves by MIT engineers?",
              opts: ["A. To detect plants’ lack of water.", "B. To change compositions of plants.", "C. To make the life of plants longer.", "D. To test chemicals in plants."],
              a: "A",
              exp: "细节理解题。第二段“plants that have sensors printed onto their leaves to show when they’re short of water”，可知传感器用于显示植物何时缺水，故选A；D项偷换概念，原文检测的是地下水中的有害化学物质。",
              diff: "medium"
            },
            {
              q: "What can we expect of the glowing plants in the future?",
              opts: ["A. They will speed up energy production.", "B. They may transmit electricity to the home.", "C. They might help reduce energy consumption.", "D. They could take the place of power plants."],
              a: "C",
              exp: "细节理解题。末段说照明远离电源导致输电损耗大，而“Glowing plants could reduce this distance and therefore help save energy”，即有助于减少能源消耗，故选C。",
              diff: "medium"
            },
            {
              q: "Which of the following can be the best title for the text?",
              opts: ["A. Can we grow more glowing plants?", "B. How do we live with glowing plants?", "C. Could glowing plants replace lamps?", "D. How are glowing plants made pollution-free?"],
              a: "C",
              exp: "主旨大意题。全文围绕MIT让植物发光的研究展开，指出该技术“could one day be used to light the rooms or even to turn trees into self-powered street lamps”并能节能，故“发光植物能否取代灯”最适合作标题，选C。",
              diff: "hard"
            }
          ]
        },
        {
          q: "During an interview for one of my books, my interviewer said something I still think about often. Annoyed by the level of distraction (干扰) in his open office, he said, “That’s why I have a membership at the coworking space across the street — so I can focus.” His comment struck me as strange. After all, coworking spaces also typically use an open office layout (布局). But I recently came across a study that shows why his approach works.\nThe researchers examined various levels of noise on participants as they completed tests of creative thinking. They were randomly divided into four groups and exposed to various noise levels in the background, from total silence to 50 decibels (分贝), 70 decibels, and 85 decibels. The differences between most of the groups were statistically insignificant; however, the participants in the 70 decibels group — those exposed to a level of noise similar to background chatter in a coffee shop — significantly outperformed the other groups. Since the effects were small, this may suggest that our creative thinking does not differ that much in response to total silence and 85 decibels of background noise.\nBut since the results at 70 decibels were significant, the study also suggests that the right level of background noise — not too loud and not total silence — may actually improve one’s creative thinking ability. The right level of background noise may interrupt our normal patterns of thinking just enough to allow our imaginations to wander, without making it impossible to focus. This kind of “distracted focus” appears to be the best state for working on creative tasks.\nSo why do so many of us hate our open offices? The problem may be that, in our offices, we can’t stop ourselves from getting drawn into others’ conversations while we’re trying to focus. Indeed, the researchers found that face-to-face interactions and conversations affect the creative process, and yet a coworking space or a coffee shop provides a certain level of noise while also providing freedom from interruptions.",
          diff: "hard", src: "2021年高考全国乙卷 英语 阅读理解D篇",
          subs: [
            {
              q: "Why does the interviewer prefer a coworking space?",
              opts: ["A. It helps him concentrate.", "B. It blocks out background noise.", "C. It has a pleasant atmosphere.", "D. It encourages face-to-face interactions."],
              a: "A",
              exp: "细节理解题。第一段采访者说因为开放式办公室干扰太多，“That’s why I have a membership at the coworking space across the street — so I can focus”，可见是为了能专注，故选A。",
              diff: "medium"
            },
            {
              q: "Which level of background noise may promote creative thinking ability?",
              opts: ["A. Total silence.", "B. 50 decibels.", "C. 70 decibels.", "D. 85 decibels."],
              a: "C",
              exp: "细节理解题。第二段指出“the participants in the 70 decibels group ... significantly outperformed the other groups”，70分贝组在创造性思维测试中明显优于其他组，故选C。",
              diff: "medium"
            },
            {
              q: "What makes an open office unwelcome to many people?",
              opts: ["A. Personal privacy unprotected.", "B. Limited working space.", "C. Restrictions on group discussion.", "D. Constant interruptions."],
              a: "D",
              exp: "细节理解题。末段说在办公室里“we can’t stop ourselves from getting drawn into others’ conversations while we’re trying to focus”，且面对面交流会影响创造过程，即不断被打断，故选D。",
              diff: "hard"
            },
            {
              q: "What can we infer about the author from the text?",
              opts: ["A. He’s a news reporter.", "B. He’s an office manager.", "C. He’s a professional designer.", "D. He’s a published writer."],
              a: "D",
              exp: "推理判断题。首句“During an interview for one of my books”表明作者出过书并接受采访，可推知他是已出版作品的作家，故选D。",
              diff: "hard"
            }
          ]
        }
      ],
            'english::rd_c': [
        {
          q: "The elderly residents (居民) in care homes in London are being given hens to look after to stop them feeling lonely.\n\nThe project was dreamed up by a local charity (慈善组织) to reduce loneliness and improve elderly people's wellbeing. It is also being used to help patients suffering dementia, a serious illness of the mind. Staff in care homes have reported a reduction in the use of medicine where hens are in use.\n\nAmong those taking part in the project is 80-year-old Ruth Xavier. She said: \"I used to keep hens when I was younger and had to prepare their breakfast each morning before I went to school.\n\n\"I like the project a lot. I am down there in my wheelchair in the morning letting the hens out and down there again at night to see they've gone to bed.\n\n\"It's good to have a different focus. People have been bringing their children in to see the hens and residents come and sit outside to watch them. I'm enjoying the creative activities, and it feels great to have done something useful.\"\n\nThere are now 700 elderly people looking after hens in 20 care homes in the North East, and the charity has been given financial support to roll it out countrywide.\n\nWendy Wilson, extra care manager at 60 Penfold Street, one of the first to embark on the project, said: \"Residents really welcome the idea of the project and the creative sessions. We are looking forward to the benefits and fun the project can bring to people here.\"\n\nLynn Lewis, director of Notting Hill Pathways, said: \"We are happy to be taking part in the project. It will really help connect our residents through a shared interest and creative activities.\"",
          diff: "medium", src: "2022年新高考I卷 阅读理解C篇",
          subs: [
            {
              q: "What is the purpose of the project?",
              opts: ["A. To ensure harmony in care homes.", "B. To provide part-time jobs for the aged.", "C. To raise money for medical research.", "D. To promote the elderly people's welfare."],
              a: "D",
              exp: "细节理解题。第二段指出该项目由当地慈善机构构思，目的是 to reduce loneliness and improve elderly people's wellbeing（减少孤独感、提升老人的幸福感）。D项中 promote 对应 improve，welfare 对应 wellbeing，故选D。",
              diff: "easy"
            },
            {
              q: "How has the project affected Ruth Xavier?",
              opts: ["A. She has learned new life skills.", "B. She has gained a sense of achievement.", "C. She has recovered her memory.", "D. She has developed a strong personality."],
              a: "B",
              exp: "推理判断题。Ruth Xavier 说 \"I'm enjoying the creative activities, and it feels great to have done something useful\"，做了有用的事让她感觉很好，说明她获得了成就感，故选B。她年轻时就养过鸡，并非学到新技能，排除A。",
              diff: "medium"
            },
            {
              q: "What do the underlined words \"embark on\" mean in paragraph 7?",
              opts: ["A. Improve.", "B. Oppose.", "C. Begin.", "D. Evaluate."],
              a: "C",
              exp: "词义猜测题。Wendy Wilson 所在的 60 Penfold Street 是 one of the first to embark on the project，且下文说住户很欢迎这个项目，可知该处指最早\"开始/启动\"该项目的机构之一，embark on 意为 begin，故选C。",
              diff: "medium"
            },
            {
              q: "What can we learn about the project from the last two paragraphs?",
              opts: ["A. It is well received.", "B. It needs to be more creative.", "C. It is highly profitable.", "D. It takes ages to see the results."],
              a: "A",
              exp: "推理判断题。最后两段中 \"Residents really welcome the idea of the project\" 和 \"We are happy to be taking part in the project\" 表明项目受到住户和机构的欢迎，即 well received，故选A。",
              diff: "easy"
            }
          ]
        },
        {
          q: "What comes into your mind when you think of British food? Probably fish and chips, or a Sunday dinner of meat and two vegetables. But is British food really so uninteresting? Even though Britain has a reputation for less-than-impressive cuisine, it is producing more top class chefs who appear frequently on our television screens and whose recipe books frequently top the best seller lists.\n\nIt's thanks to these TV chefs rather than any advertising campaign that Britons are turning away from meat-and-two-veg and ready-made meals and becoming more adventurous in their cooking habits. It is recently reported that the number of those sticking to a traditional diet is slowly declining and around half of Britain's consumers would like to change or improve their cooking in some way. There has been a rise in the number of students applying for food courses at UK universities and colleges. It seems that TV programmes have helped change what people think about cooking.\n\nAccording to a new study from market analysts, 1 in 5 Britons say that watching cookery programmes on TV has encouraged them to try different food. Almost one third say they now use a wider variety of ingredients (配料) than they used to, and just under 1 in 4 say they now buy better quality ingredients than before. One in four adults say that TV chefs have made them much more confident about expanding their cookery knowledge and skills, and young people are also getting more interested in cooking. The UK's obsession (痴迷) with food is reflected through television scheduling. Cookery shows and documentaries about food are broadcast more often than before. With an increasing number of male chefs on TV, it's no longer \"uncool\" for boys to like cooking.",
          diff: "medium", src: "2023年全国乙卷 阅读理解C篇",
          subs: [
            {
              q: "What do people usually think of British food?",
              opts: ["A. It is simple and plain.", "B. It is rich in nutrition.", "C. It lacks authentic tastes.", "D. It deserves a high reputation."],
              a: "A",
              exp: "细节理解题。第一段说提到英国食物人们想到的多半是 fish and chips 或 a Sunday dinner of meat and two vegetables，并用 uninteresting、less-than-impressive cuisine 加以概括，可见人们认为英国菜简单平淡，故选A。",
              diff: "easy"
            },
            {
              q: "Which best describes cookery programmes on British TV?",
              opts: ["A. Authoritative.", "B. Creative.", "C. Profitable.", "D. Influential."],
              a: "D",
              exp: "推理判断题。第二段指出正是这些电视厨师（而非广告）让英国人放弃传统饮食、烹饪更具冒险精神，并说 TV programmes have helped change what people think about cooking，可见电视烹饪节目影响力很大，故选D。",
              diff: "medium"
            },
            {
              q: "Which is the percentage of the people using more diverse ingredients now?",
              opts: ["A. 20%.", "B. 24%.", "C. 25%.", "D. 33%."],
              a: "D",
              exp: "细节理解题。第三段 \"Almost one third say they now use a wider variety of ingredients\"，三分之一约合33%，故选D。",
              diff: "medium"
            },
            {
              q: "What might the author continue talking about?",
              opts: ["A. The art of cooking in other countries.", "B. Male chefs on TV programmes.", "C. Table manners in the UK.", "D. Studies of big eaters."],
              a: "B",
              exp: "推理判断题。文章最后一句提到 With an increasing number of male chefs on TV, it's no longer \"uncool\" for boys to like cooking，按行文连贯，下文应继续谈电视上的男厨师，故选B。",
              diff: "hard"
            }
          ]
        },
        {
          q: "You've heard that plastic is polluting the oceans — between 4.8 and 12.7 million tonnes enter ocean ecosystems every year. But does one plastic straw or cup really make a difference? Artist Benjamin Von Wong wants you to know that it does. He builds massive sculptures out of plastic garbage, forcing viewers to re-examine their relationship to single-use plastic products.\n\nAt the beginning of the year, the artist built a piece called \"Strawpocalypse,\" a pair of 10-foot-tall plastic waves, frozen mid-crash. Made of 168,000 plastic straws collected from several volunteer beach cleanups, the sculpture made its first appearance at the Estella Place shopping center in Ho Chi Minh City, Vietnam.\n\nJust 9% of global plastic waste is recycled. Plastic straws are by no means the biggest source (来源) of plastic pollution, but they've recently come under fire because most people don't need them to drink with and, because of their small size and weight, they cannot be recycled. Every straw that's part of Von Wong's artwork likely came from a drink that someone used for only a few minutes. Once the drink is gone, the straw will take centuries to disappear.\n\nIn a piece from 2018, Von Wong wanted to illustrate (说明) a specific statistic: Every 60 seconds, a truckload's worth of plastic enters the ocean. For this work, titled \"Truckload of Plastic,\" Von Wong and a group of volunteers collected more than 10,000 pieces of plastic, which were then tied together to look like they'd been dumped (倾倒) from a truck all at once.\n\nVon Wong hopes that his work will also help pressure big companies to reduce their plastic footprint.",
          diff: "medium", src: "2021年全国乙卷 阅读理解C篇",
          subs: [
            {
              q: "What are Von Wong's artworks intended for?",
              opts: ["A. Beautifying the city he lives in.", "B. Introducing eco-friendly products.", "C. Drawing public attention to plastic waste.", "D. Reducing garbage on the beach."],
              a: "C",
              exp: "细节理解题。第一段末句说他用塑料垃圾制作巨型雕塑，forcing viewers to re-examine their relationship to single-use plastic products，即促使公众关注塑料垃圾问题，故选C。",
              diff: "easy"
            },
            {
              q: "Why does the author discuss plastic straws in paragraph 3?",
              opts: ["A. To show the difficulty of their recycling.", "B. To explain why they are useful.", "C. To voice his views on modern art.", "D. To find a substitute for them."],
              a: "A",
              exp: "推理判断题。第三段指出全球仅9%的塑料垃圾被回收，吸管因体积小、重量轻 they cannot be recycled，且需数百年才能降解，可见是为了说明吸管回收之难，故选A。",
              diff: "medium"
            },
            {
              q: "What effect would \"Truckload of Plastic\" have on viewers?",
              opts: ["A. Calming.", "B. Disturbing.", "C. Refreshing.", "D. Challenging."],
              a: "B",
              exp: "推理判断题。该作品用一万多件塑料垃圾堆成\"从卡车上一次性倾倒\"的效果，直观呈现每60秒就有一卡车塑料入海的骇人数据，会令观者感到不安、震撼，故选B。",
              diff: "hard"
            },
            {
              q: "Which of the following can be the best title for the text?",
              opts: ["A. Artists' Opinions on Plastic Safety", "B. Media Interest in Contemporary Art", "C. Responsibility Demanded of Big Companies", "D. Ocean Plastics Transformed into Sculptures"],
              a: "D",
              exp: "主旨大意题。全文围绕 Von Wong 把海滩、海洋中的塑料垃圾（吸管等）做成巨型雕塑以唤起环保意识展开，D项\"海洋塑料变成雕塑\"最能概括全文，故选D。",
              diff: "medium"
            }
          ]
        },
        {
          q: "The goal of this book is to make the case for digital minimalism, including a detailed exploration of what it asks and why it works, and then to teach you how to adopt this philosophy if you decide it's right for you.\n\nTo do so, I divided the book into two parts. In part one, I describe the philosophical foundations of digital minimalism, starting with an examination of the forces that are making so many people's digital lives increasingly intolerable, before moving on to a detailed discussion of the digital minimalism philosophy.\n\nPart one concludes by introducing my suggested method for adopting this philosophy: the digital declutter. This process requires you to step away from optional online activities for thirty days. At the end of the thirty days, you will then add back a small number of carefully chosen online activities that you believe will provide massive benefits to the things you value.\n\nIn the final chapter of part one, I'll guide you through carrying out your own digital declutter. In doing so, I'll draw on an experiment I ran in 2018 in which over 1,600 people agreed to perform a digital declutter. You'll hear these participants' stories and learn what strategies worked well for them, and what traps they encountered that you should avoid.\n\nThe second part of this book takes a closer look at some ideas that will help you cultivate (培养) a sustainable digital minimalism lifestyle. In these chapters, I examine issues such as the importance of solitude (独处) and the necessity of cultivating high-quality leisure to replace the time most now spend on mindless device use. Each chapter concludes with a collection of practices, which are designed to help you act on the big ideas of the chapter. You can view these practices as a toolbox meant to aid your efforts to build a minimalist lifestyle that works for your particular circumstances.",
          diff: "medium", src: "2023年新高考I卷 阅读理解C篇",
          subs: [
            {
              q: "What is the book aimed at?",
              opts: ["A. Teaching critical thinking skills.", "B. Advocating a simple digital lifestyle.", "C. Solving philosophical problems.", "D. Promoting the use of a digital device."],
              a: "B",
              exp: "细节理解题。第一段开门见山：The goal of this book is to make the case for digital minimalism（为数字极简主义提供支持理由），并教读者如何采纳这一理念，即倡导简约的数字生活方式，故选B。",
              diff: "easy"
            },
            {
              q: "What does the underlined word \"declutter\" in paragraph 3 mean?",
              opts: ["A. Clear-up.", "B. Add-on.", "C. Check-in.", "D. Take-over."],
              a: "A",
              exp: "词义猜测题。第三段解释该过程 requires you to step away from optional online activities for thirty days，即三十天内远离非必要的线上活动，可见 declutter 意为\"清理\"，与 Clear-up 同义，故选A。",
              diff: "medium"
            },
            {
              q: "What is presented in the final chapter of part one?",
              opts: ["A. Theoretical models.", "B. Statistical methods.", "C. Practical examples.", "D. Historical analyses."],
              a: "C",
              exp: "细节理解题。第四段说第一部分最后一章会引用2018年1600多人参与的实验，You'll hear these participants' stories and learn what strategies worked well for them，即提供真实的实践案例，故选C。",
              diff: "medium"
            },
            {
              q: "What does the author suggest readers do with the practices offered in part two?",
              opts: ["A. Use them as needed.", "B. Recommend them to friends.", "C. Evaluate their effects.", "D. Identify the ideas behind them."],
              a: "A",
              exp: "推理判断题。末段说 You can view these practices as a toolbox meant to aid your efforts to build a minimalist lifestyle that works for your particular circumstances，把这些做法视为工具箱、按自身情况取用，故选A。",
              diff: "hard"
            }
          ]
        }
      ],
            'english::rd_7': [
        {
          q: "Fitness Magazine recently ran an article titled \"Five Reasons to Thank Your Workout Partner.\" One reason was: \"You'll actually show up if you know someone is waiting for you at the gym,\" while another read: \"①\" With a workout partner, you will increase your training effort as there is a subtle (微妙) competition.\n\nSo, how do you find a workout partner?\n\nFirst of all, decide what you want from that person. ② Or do you just want to be physically fit, able to move with strength and flexibility? Think about the exercises you would like to do with your workout partner.\n\nYou might think about posting what you are looking for on social media, but it probably won't result in a useful response. ③ If you plan on working out in a gym, that person must belong to the same gym.\n\nMy partner posted her request on the notice board of a local park. Her notice included what kind of training she wanted to do, how many days a week and how many hours she wanted to spend on each session, and her age. It also listed her favorite sports and activities, and provided her phone number. ④\n\nYou and your partner will probably have different skills. ⑤ Over time, both of you will benefit — your partner will be able to lift more weights and you will become more physically fit. The core (核心) of your relationship is that you will always be there to help each other.\n\n选项：\nA. Your first meeting may be a little awkward.\nB. A workout partner usually needs to live close by.\nC. You'll work harder if you train with someone else.\nD. Do you want to be a better athlete in your favorite sport?\nE. How can you write a good \"seeking training partner\" notice?\nF. Just accept your differences and learn to work with each other.\nG. Any notice for a training partner should include such information.",
          diff: "medium", src: "2022年新高考I卷 七选五",
          subs: [
            {
              q: "空白处 ① 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "C",
              exp: "空前说《健身杂志》列举了感谢健身伙伴的理由，其中一条是“知道有人在健身房等你，你就真的会去”，空处是并列的“另一条理由”；空后紧接“有了健身伙伴，因为存在微妙的竞争，你会加大训练强度”。C项“和别人一起训练你会更努力”正是对这句的概括，与下文的 increase your training effort 构成同义复现。故选C。",
              diff: "easy"
            },
            {
              q: "空白处 ② 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "D",
              exp: "空前是“首先，要决定你想从对方那里获得什么”，空后以 Or do you just want to be physically fit...? 的选择疑问句承接。既然后句用 Or 提出另一种可能，空处必须是同样形式的一般疑问句，且与“只想身体健康”形成对照。D项“你想在自己喜爱的运动项目上成为更出色的运动员吗”正好构成 Or 前后的两个选项。故选D。",
              diff: "medium"
            },
            {
              q: "空白处 ③ 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "B",
              exp: "空前说在社交媒体上发帖找伙伴多半没有有用回应，空后说“如果你打算在健身房锻炼，那个人必须属于同一家健身房”。空处需要解释“为什么网上找不合适”，即伙伴必须在地理上就近。B项“健身伙伴通常需要住在附近”既解释了上文，也自然引出下文关于同一健身房的举例。故选B。",
              diff: "medium"
            },
            {
              q: "空白处 ④ 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "G",
              exp: "本段以“我的搭档”为例，罗列了她的启事中包含的内容：训练种类、每周天数、每次时长、年龄、喜爱的运动以及电话号码。空处位于段尾，需要对这些细节作总结。G项“任何征集训练伙伴的启事都应包含这类信息”中的 notice 与上文 notice 复现，such information 回指前面列举的各项内容。故选G。",
              diff: "medium"
            },
            {
              q: "空白处 ⑤ 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "F",
              exp: "空前说“你和伙伴的技能水平很可能不同”，空后说“久而久之，双方都会受益——你的伙伴能举起更大重量，你会变得更健康”。空处要把“差异”转化为“共赢”。F项“接受彼此的差异，学会与对方合作”承接 different skills，并为下文 both of you will benefit 提供前提。故选F。",
              diff: "medium"
            }
          ]
        },
        {
          q: "Important Things to Know When Dining Out\n\nCultural dining etiquette (礼节) might surprise you with some of its important rules. ① Knowing some tips will help ensure that you have an enjoyable meal with friends or family — no matter where you are in the world.\n\nChopstick Rules\n\nThe way you handle chopsticks is important to avoid annoying your companions. When you put them down between bites, always put them down together so they are parallel with the edge of the table in front of you. ②\n\nHands or Utensils (餐具)\n\nIn India and the Middle East, it's considered very rude to eat with your left hand. People in France expect you to eat with a utensil in each hand. ③, instead preferring to use their hands. In Chile, you may never touch any food with your fingers. People in Thailand generally use their forks only to push food onto their spoons.\n\nMaking Requests\n\n④ In Portugal, this would be a serious mistake, because it shows the chef that you don't like their seasoning skills. Similarly, in Italy, never ask for extra cheese to add to your food.\n\nSome of these cultural dining etiquette rules may seem random and strange, but they are important in various countries. ⑤, the more comfortable you'll begin to feel with its foreign cultural practices.\n\n选项：\nA. The more friends you make in your lifetime\nB. The more time you spend in any given country\nC. Mexicans consider it inappropriate to eat with utensils\nD. Don't get caught making an embarrassing mistake at a restaurant\nE. It's a good sign for the chef if you make a mess around your plate\nF. Never stick them upright in your food or cross them as you use them\nG. It may seem like a simple request to ask for salt and pepper at a meal",
          diff: "medium", src: "2022年全国甲卷 七选五",
          subs: [
            {
              q: "空白处 ① 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "D",
              exp: "空处在首段中间，起承上启下的作用。上句说各国餐饮礼节的一些重要规矩会让你吃惊，下句说“了解一些小贴士能确保你和亲友愉快地用餐”。D项“别让自己在餐馆里犯下令人尴尬的错误”中的 at a restaurant 与标题 When Dining Out 呼应，embarrassing mistake 承接上文的“规矩会让你吃惊”，同时引出下文的 tips。故选D。",
              diff: "medium"
            },
            {
              q: "空白处 ② 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "F",
              exp: "本段小标题是 Chopstick Rules，上句讲的是放筷子的正确方式（并排放好，与桌沿平行）。空处位于段尾，应继续讲使用筷子的禁忌。F项“绝不要把筷子直插在食物里，也不要交叉摆放”中的 them 回指 chopsticks，与上文同属筷子使用规范。故选F。",
              diff: "easy"
            },
            {
              q: "空白处 ③ 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "C",
              exp: "本段小标题为 Hands or Utensils，逐国对比“用手还是用餐具”。空后的 instead preferring to use their hands（而是更喜欢用手）表明空处主语是某国人且态度是“不赞成用餐具”。C项“墨西哥人认为用餐具吃饭不合适”与 instead preferring to use their hands 语义衔接，且与前面 India、France 的国别列举方式一致。故选C。",
              diff: "medium"
            },
            {
              q: "空白处 ④ 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "G",
              exp: "本段小标题是 Making Requests。空后 In Portugal, this would be a serious mistake 中的 this 必须有指代对象，且下文说这样做等于嫌厨师调味手艺不好。G项“在用餐时要点盐和胡椒似乎是个很简单的请求”正好提供了 this 所指的行为，request 与小标题 Requests 呼应。故选G。",
              diff: "medium"
            },
            {
              q: "空白处 ⑤ 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "B",
              exp: "空后是 the more comfortable you'll begin to feel with its foreign cultural practices，构成“the+比较级，the+比较级”结构，且 its 指代某个国家。B项“你在某个国家待的时间越长”与后半句构成完整的比较结构，its 回指 any given country，逻辑通顺；A项 the more friends you make 与 its 无法照应。故选B。",
              diff: "medium"
            }
          ]
        },
        {
          q: "According to Jessica Hagy, author of How to Be Interesting, it's not difficult to make yourself interesting at a dinner party. ①, if you're out of your comfort zone or if you're wandering into somebody's house for the first time. So the main thing is just to show up and be adventurous, trying different foods and talking to strangers.\n\nPeople love to talk about themselves. If you can start the conversation with a question other than \"What do you do for a living?\", you'll be able to get a lot more interesting conversation out of whomever it is you're talking to. ②, it can bring in \"I have this old, broken-down vehicle\" or \"I rode the bus with these crazy people who were laughing at silly jokes in the back.\" It just opens up conversation.\n\n③? If you can't take their wine away, you should certainly try to take away their soapbox (讲台). If you're the host, you can ask them to help you in the kitchen with something and just remove them from the situation. ④.\n\nAnd what about that other dinner-party killer: awkward silence? If you're faced with an awkward silence at a dinner party, the only thing that always gets everyone talking again is to give the host a compliment (赞扬). ⑤. Just quickly turn around and say, \"This cake is extremely delicious and you have to tell me all about it.\"\n\nSo being interesting at a dinner party isn't that hard.\n\n选项：\nA. How do you know the host\nB. The first step is to go exploring\nC. If you ask the question \"How did you get here?\"\nD. Be prepared to have awkward conversations with strangers\nE. Or turn the conversation into a topic where they have little to say\nF. What about that person who has had too much to drink or won't stop talking\nG. He or she is the person who is feeling the weight of that awkwardness the most",
          diff: "medium", src: "2021年全国乙卷 七选五",
          subs: [
            {
              q: "空白处 ① 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "B",
              exp: "空处是首段的主题句。上文说在晚宴上让自己变得有趣并不难，空后的条件状语 if you're out of your comfort zone or if you're wandering into somebody's house for the first time 说的是走出舒适区、初次登门；下文 So the main thing is just to show up and be adventurous 进一步总结。B项“第一步是去探索”中的 go exploring 与 be adventurous、trying different foods and talking to strangers 呼应。故选B。",
              diff: "medium"
            },
            {
              q: "空白处 ② 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "C",
              exp: "空后说“它能引出‘我那辆破旧的车’或者‘我和一群在后排为傻笑话大笑的人一起坐公交’”，这些回答显然都是在回答“你是怎么来的”。C项“如果你问‘你是怎么到这儿的？’这个问题”正好是引出这些回答的提问，且呼应本段主题句 People love to talk about themselves。故选C。",
              diff: "medium"
            },
            {
              q: "空白处 ③ 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "F",
              exp: "空处独立成句并以问号结尾，是本段的话题句。空后说“如果你没法把他的酒拿走，那你至少该把他的‘讲台’撤掉”，其中 their wine、won't stop talking 所对应的人物必须先被引出。F项“那种喝多了或者说个不停的人怎么办呢”正好提出这一话题，their 有了指代对象。故选F。",
              diff: "medium"
            },
            {
              q: "空白处 ④ 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "E",
              exp: "空前给出一个应对话痨客人的办法：如果你是主人，可以请他去厨房帮忙，把他从当下场合中支走。空处位于段尾，用 Or 引出另一种并列的办法。E项“或者把话题转到他们插不上话的领域”与上句构成并列的两种策略，句首 Or 是明显的衔接标志。故选E。",
              diff: "medium"
            },
            {
              q: "空白处 ⑤ 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "G",
              exp: "空前说面对尴尬的冷场，唯一能让大家重新开口的办法就是赞美主人；空后是具体示范：“赶紧转身说，这蛋糕太好吃了，你一定得跟我说说。”空处需要解释为什么要赞美主人。G项“他或她正是最能感受到这份尴尬分量的人”中的 He or she 回指 the host，awkwardness 回指 awkward silence，说明了赞美主人的理由。故选G。",
              diff: "medium"
            }
          ]
        },
        {
          q: "Personal Forgiveness\n\nTaking responsibility for mistakes is a positive step, but don't beat yourself up about them. To err (犯错) is human. ① You can use the following writing exercise to help you do this.\n\nIn a journal or on a piece of paper, put the heading \"Personal strengths.\" ② Are you caring? Creative? Generous? A good listener? Fun to be around? They don't have to be world-changing, just aspects of your personality that you're proud of.\n\nAt the top of a second page, put the heading \"Acts of kindness.\" On this one, list all the positive things you've done for others. It might be the time when you helped a friend with their homework, when you did the ironing without being asked, or when you baked cookies after the family had had a tiring day. ③\n\nYou could ask a friend or family member to help add to your list. ④ That way, you could exchange thoughts on what makes each of you special and the aspects of your personality that shine through. In fact, don't wait until you've made a mistake to try this — it's a great way to boost self-confidence at any time.\n\nIt's something of a cliché (陈词滥调) that most people learn not from their successes but their mistakes. The thing is, it's true. ⑤ We're all changing and learning all the time and mistakes are a positive way to develop and grow.\n\n选项：\nA. A little self-forgiveness also goes a long way.\nB. Now list all the characteristics you like about yourself.\nC. They might even like to have a go at doing the exercise.\nD. It's just as important to show yourself some forgiveness.\nE. It doesn't mean you have to ignore what's happened or forget it.\nF. Whatever it is, no matter how small it might seem, write it down.\nG. Whatever the mistake, remember it isn't a fixed aspect of your personality.",
          diff: "medium", src: "2023年新高考I卷 七选五",
          subs: [
            {
              q: "空白处 ① 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "D",
              exp: "空前说为错误承担责任是积极的一步，但不要为此过分自责，因为人非圣贤孰能无过；空后说“你可以用下面这个写作练习来帮你做到这一点（do this）”。空处必须给出 this 所指代的做法。D项“对自己宽容一些同样重要”既承接上文“别过分自责”，又与全文标题 Personal Forgiveness 一致，正是 do this 的所指。故选D。",
              diff: "medium"
            },
            {
              q: "空白处 ② 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "B",
              exp: "空前说在日记本或纸上写下标题“个人优点”，空后连续发问：你有爱心吗？有创造力吗？慷慨吗？是好的倾听者吗？相处起来有趣吗？这些都是在提示读者往下写什么。B项“现在把你喜欢自己的所有特质都列出来”紧承标题给出具体指令，characteristics 与后文 aspects of your personality 复现。故选B。",
              diff: "easy"
            },
            {
              q: "空白处 ③ 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "F",
              exp: "本段要求在第二页写下“善举”，并举了帮朋友做作业、主动熨衣服、家人疲惫时烤饼干等日常小事。空处在段尾，需要强调这些小事同样值得记录。F项“不管是什么事，也不管看上去多么微不足道，都把它写下来”中的 it 回指上文列举的善举，no matter how small 正与所举的琐碎小事对应。故选F。",
              diff: "medium"
            },
            {
              q: "空白处 ④ 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "C",
              exp: "空前说“你可以请朋友或家人帮你往清单上添加内容”，空后说“那样一来（That way），你们就能交流是什么让彼此与众不同”。空处需要在“请人帮忙”和“互相交流”之间搭桥。C项“他们甚至可能也想试着做做这个练习”中的 They 回指 a friend or family member，并使后文的 each of you、exchange thoughts 有了着落。故选C。",
              diff: "medium"
            },
            {
              q: "空白处 ⑤ 应填入哪个选项？",
              opts: ["A", "B", "C", "D", "E", "F", "G"],
              a: "G",
              exp: "空前说人们大多不是从成功而是从错误中学习，而且这话确实不假；空后说“我们都在不断变化、不断学习，错误是发展与成长的积极途径”。空处要点明应如何看待错误。G项“无论犯了什么错，记住它并不是你性格中固定不变的一面”中的 isn't a fixed aspect 与下文 We're all changing 正好照应，构成全文收尾。故选G。",
              diff: "medium"
            }
          ]
        }
      ],
            'english::cl': [
        {
          q: "Simply saying thank you doesn't seem enough in certain situations. I was considering this while working as a (41)____ just a few weeks ago. And it came to me then how much easier it would be if we had a range of words that express different (42)____ of gratitude (感谢).\n\nMy thoughts were soon (43)____. We had a woman patient who was (44)____ from a knee replacement operation. One afternoon, while (45)____ to get into bed she collapsed (倒下) from what was (46)____ discovered to be a heart attack. The collapse was disastrous, (47)____ the emergency medical team and good teamwork. But she recovered, though (48)____, and was ready for discharge (出院) after four weeks.\n\nShe was (49)____ for everything that the medical and nursing team had done for her. On her day of discharge, we shared in her (50)____ at her recovery. As she was (51)____ she was eager to say (52)____ to each of us in the nursing team. When she (53)____ one nurse, she tried to press a five-pound note into her hand. My colleague (54)____ to accept it, saying that we were all just (55)____ our job. The patient looked puzzled, and then (56)____: “Oh this isn't for the (57)____ I had. I take that as a (58)____. No, this is for setting my hair yesterday.”\n\nAnd there you have it. To many people, (59)____ lives is part of the job but styling hair is an (60)____ and should be rewarded.",
          diff: "medium", src: "2021年高考全国乙卷 完形填空",
          subs: [
            {
              q: "41. ",
              opts: ["cleaner", "chemist", "nurse", "doctor"],
              a: "C",
              exp: "后文“each of us in the nursing team”和“My colleague”表明作者是护理团队的一员，故选 nurse（护士）。",
              diff: "easy"
            },
            {
              q: "42. ",
              opts: ["grades", "meanings", "needs", "expectations"],
              a: "A",
              exp: "a range of words 提示需要表达不同“程度/等级”的感谢，grade 即“程度、等级”，其余三项与 gratitude 不搭配。",
              diff: "medium"
            },
            {
              q: "43. ",
              opts: ["brushed aside", "put to the test", "brought under discussion", "taken into account"],
              a: "B",
              exp: "紧接着作者就遇到一件真实事例，说明他的想法很快受到了“检验”，put...to the test 意为“接受检验”。",
              diff: "hard"
            },
            {
              q: "44. ",
              opts: ["departing", "escaping", "retiring", "recovering"],
              a: "D",
              exp: "recover from an operation 意为“手术后正在康复”，与下文 But she recovered 呼应。",
              diff: "easy"
            },
            {
              q: "45. ",
              opts: ["attempting", "choosing", "pausing", "promising"],
              a: "A",
              exp: "attempt to get into bed “试图上床”时突然倒下，符合突发病情的语境。",
              diff: "medium"
            },
            {
              q: "46. ",
              opts: ["eventually", "fortunately", "casually", "secretly"],
              a: "A",
              exp: "倒下时并不知道原因，是后来“最终”查明为心脏病发作，故用 eventually。",
              diff: "medium"
            },
            {
              q: "47. ",
              opts: ["assessing", "requiring", "forming", "proving"],
              a: "B",
              exp: "倒下情况十分危急(disastrous)，因而“需要”急救团队和良好的团队协作。",
              diff: "medium"
            },
            {
              q: "48. ",
              opts: ["slightly", "accidentally", "slowly", "happily"],
              a: "C",
              exp: "though 表让步，且四周后才出院，说明她虽然康复但“缓慢”。",
              diff: "medium"
            },
            {
              q: "49. ",
              opts: ["grateful", "thoughtful", "sorrowful", "fearful"],
              a: "A",
              exp: "be grateful for “对……心存感激”，她感激医护团队为她做的一切，与全文感谢主题一致。",
              diff: "easy"
            },
            {
              q: "50. ",
              opts: ["surprise", "delight", "curiosity", "disappointment"],
              a: "B",
              exp: "出院当天大家共同分享她康复的“喜悦”，delight 符合积极语境。",
              diff: "easy"
            },
            {
              q: "51. ",
              opts: ["operating", "thinking", "hesitating", "leaving"],
              a: "D",
              exp: "由 On her day of discharge 可知她正要“离开”，所以急于逐一道别。",
              diff: "easy"
            },
            {
              q: "52. ",
              opts: ["sorry", "hello", "goodbye", "yes"],
              a: "C",
              exp: "出院离开时向护理团队每个人 say goodbye（道别），与 51 空 leaving 呼应。",
              diff: "easy"
            },
            {
              q: "53. ",
              opts: ["reached", "consulted", "introduced", "persuaded"],
              a: "A",
              exp: "reach 在此为“走到……跟前”，她逐个道别，走到某位护士面前时塞钱。",
              diff: "hard"
            },
            {
              q: "54. ",
              opts: ["wished", "pretended", "failed", "refused"],
              a: "D",
              exp: "由 saying that we were all just doing our job 可知同事“拒绝”接受这五英镑。",
              diff: "easy"
            },
            {
              q: "55. ",
              opts: ["enjoying", "doing", "securing", "starting"],
              a: "B",
              exp: "do one's job 是固定搭配，意为“做本职工作”，故选 doing。",
              diff: "easy"
            },
            {
              q: "56. ",
              opts: ["repeated", "recited", "replied", "reported"],
              a: "C",
              exp: "病人先是困惑(looked puzzled)，随后引出引号中的“回答”，故用 replied。",
              diff: "easy"
            },
            {
              q: "57. ",
              opts: ["courage", "patience", "duty", "care"],
              a: "D",
              exp: "钱不是为了她住院期间得到的“护理照顾”，下句说那是理所当然的。",
              diff: "medium"
            },
            {
              q: "58. ",
              opts: ["goal", "given", "push", "greeting"],
              a: "B",
              exp: "take sth as a given 意为“把……视为理所当然的事”，与末段“is part of the job”一致。",
              diff: "hard"
            },
            {
              q: "59. ",
              opts: ["risking", "changing", "saving", "building"],
              a: "C",
              exp: "save lives“救死扶伤”是医护的本职，与上文救治心脏病人呼应。",
              diff: "easy"
            },
            {
              q: "60. ",
              opts: ["honour", "ability", "opening", "extra"],
              a: "D",
              exp: "给病人做头发是职责之外的“额外之事”，所以应当获得回报。",
              diff: "medium"
            }
          ]
        },
        {
          q: "Since our twins began learning to walk, my wife and I have kept telling them that our sliding glass door is just a window. The (41)____ is obvious. If we (42)____ it is a door, they'll want to go outside (43)____. It will drive us crazy. The kids apparently know the (44)____. But our insisting it's (45)____ a window has kept them from (46)____ millions of requests to open the door.\n\nI hate lying to the kids. One day they'll (47)____ and discover that everything they've always known about windows is a (48)____. I wonder if (49)____ should always tell the truth no matter the (50)____. I have a very strong (51)____ that the lie we're telling is doing (52)____ damage to our children. Windows and doors have (53)____ metaphorical (比喻) meanings. I'm telling them they can't open what they absolutely know is a door. What if later in (54)____ they come to a metaphorical door, like an opportunity (机会) of some sort, and (55)____ opening the door and taking the opportunity, they just (56)____ it and wonder, “What if it isn't a door?” That is, “What if it isn't a (57)____ opportunity?”\n\nMaybe it's an unreasonable fear. But the (58)____ is that I shouldn't lie to my kids. I should just (59)____ repeatedly having to say, “No. We can't go outside now.” Then when they come to other doors in life, be they real or metaphorical, they won't (60)____ to open them and walk through.",
          diff: "medium", src: "2020年高考全国卷I 完形填空",
          subs: [
            {
              q: "41. ",
              opts: ["relief", "target", "reason", "case"],
              a: "C",
              exp: "后文用 If 从句解释为什么把门说成窗户，故此处是“原因很明显”。",
              diff: "easy"
            },
            {
              q: "42. ",
              opts: ["admit", "believe", "mean", "realize"],
              a: "A",
              exp: "意为“如果我们承认那是一扇门”，孩子就会要求出去，admit“承认”最切合。",
              diff: "medium"
            },
            {
              q: "43. ",
              opts: ["gradually", "constantly", "temporarily", "casually"],
              a: "B",
              exp: "下句 It will drive us crazy 说明孩子会“不断地”要求出去，故选 constantly。",
              diff: "medium"
            },
            {
              q: "44. ",
              opts: ["result", "danger", "method", "truth"],
              a: "D",
              exp: "apparently“显然”提示孩子其实知道“真相”，与下文谎言主题形成对比。",
              diff: "easy"
            },
            {
              q: "45. ",
              opts: ["merely", "slightly", "hardly", "partly"],
              a: "A",
              exp: "与首句 our sliding glass door is just a window 中的 just 同义复现，merely = just。",
              diff: "easy"
            },
            {
              q: "46. ",
              opts: ["reviewing", "approving", "receiving", "attempting"],
              a: "D",
              exp: "keep sb. from doing “阻止某人做……”，坚称是窗户使孩子没有“尝试”提出无数次开门要求。",
              diff: "hard"
            },
            {
              q: "47. ",
              opts: ["win out", "give up", "wake up", "stand out"],
              a: "C",
              exp: "与后面的 discover 并列，wake up 意为“醒悟、开始察觉”。",
              diff: "hard"
            },
            {
              q: "48. ",
              opts: ["dream", "lie", "fantasy", "fact"],
              a: "B",
              exp: "下文 the lie we're telling 直接复现，孩子总有一天会发现这是个谎言。",
              diff: "easy"
            },
            {
              q: "49. ",
              opts: ["parents", "twins", "colleagues", "teachers"],
              a: "A",
              exp: "全文讨论的是作者夫妇对孩子擒谎，故此处泛指“父母”该不该总说真话。",
              diff: "easy"
            },
            {
              q: "50. ",
              opts: ["restrictions", "explanations", "differences", "consequences"],
              a: "D",
              exp: "no matter the consequences 意为“不管后果如何”，符合作者的道德纠结。",
              diff: "medium"
            },
            {
              q: "51. ",
              opts: ["demand", "fear", "desire", "doubt"],
              a: "B",
              exp: "下文 Maybe it's an unreasonable fear 复现，故此处是“强烈的担忧”。",
              diff: "medium"
            },
            {
              q: "52. ",
              opts: ["physical", "biological", "spiritual", "behavioral"],
              a: "C",
              exp: "谎言伤害的不是身体而是孩子的“精神”层面，故选 spiritual。",
              diff: "medium"
            },
            {
              q: "53. ",
              opts: ["traditional", "important", "double", "original"],
              a: "B",
              exp: "下文以“机会之门”举例说明门窗的比喻意义非常“重要”，故选 important。",
              diff: "hard"
            },
            {
              q: "54. ",
              opts: ["life", "time", "reply", "history"],
              a: "A",
              exp: "later in life 意为“在日后的人生中”，与末段 other doors in life 呼应。",
              diff: "easy"
            },
            {
              q: "55. ",
              opts: ["by comparison with", "in addition to", "regardless of", "instead of"],
              a: "D",
              exp: "“不是去开门把握机会，而是只盯着看”，前后是取舍关系，用 instead of。",
              diff: "medium"
            },
            {
              q: "56. ",
              opts: ["get hold of", "stare at", "knock on", "make use of"],
              a: "B",
              exp: "与 instead of opening the door 形成反差，他们只是“盯着”门心生疑虑。",
              diff: "medium"
            },
            {
              q: "57. ",
              opts: ["real", "typical", "similar", "limited"],
              a: "A",
              exp: "呼应前句 What if it isn't a door，即怀疑那是不是一个“真正的”机会。",
              diff: "medium"
            },
            {
              q: "58. ",
              opts: ["safety rule", "comfort zone", "bottom line", "top secret"],
              a: "C",
              exp: "the bottom line is that... 意为“最根本的一点是”，引出作者的结论。",
              diff: "hard"
            },
            {
              q: "59. ",
              opts: ["delay", "regret", "enjoy", "accept"],
              a: "D",
              exp: "与不擒谎相对应，作者应该“接受”不得不反复说“不行”的麻烦。",
              diff: "hard"
            },
            {
              q: "60. ",
              opts: ["hurry", "decide", "hesitate", "intend"],
              a: "C",
              exp: "全文落脚点：孩子日后面对人生之门时就不会“犹豫”去推开它。",
              diff: "medium"
            }
          ]
        },
        {
          q: "A Heroic Driver\n\nLarry works with Transport Drivers, Inc. One morning in 2009, Larry was (41)____ along I65 north after delivering to one of his (42)____. Suddenly, he saw a car with its bright lights on. (43)____ he got closer, he found (44)____ vehicle upside down on the road. One more look and he noticed (45)____ shooting out from under the (46)____ vehicle. Larry pulled over, set the brake and (47)____ the fire extinguisher (灭火器). Two good bursts from the extinguisher and the fire was put out.\n\nThe man who had his bright lights on (48)____ and told Larry he had (49)____ an emergency call. They (50)____ heard a woman's voice coming from the wrecked (毁坏的) vehicle. (51)____ the vehicle, they saw that a woman was trying to get out of the broken window. They told her to stay (52)____ until the emergency personnel arrived, (53)____ she thought the car was going to (54)____. Larry told her that he had already put out the fire and she should not move (55)____ she injured her neck.\n\nOnce fire and emergency people arrived, Larry and the other man (56)____ and let them go to work. Then, Larry asked the (57)____ if he was needed or (58)____ to go. They let him and the other man go.\n\nOne thing is (59)____ — Larry went above and beyond the call of duty by getting so close to the burning vehicle! His (60)____ most likely saved the woman's life.",
          diff: "medium", src: "2016年高考全国卷I（新课标Ⅰ卷）完形填空·A Heroic Driver",
          subs: [
            {
              q: "41. ",
              opts: ["walking", "touring", "traveling", "rushing"],
              a: "C",
              exp: "下文 Larry pulled over（靠边停车）说明他当时是在公路上“行驶”，travel along 符合语境。",
              diff: "medium"
            },
            {
              q: "42. ",
              opts: ["passengers", "colleagues", "employers", "customers"],
              a: "D",
              exp: "首句说他在运输公司工作，再结合 after delivering，可知是给“客户”送完货。",
              diff: "medium"
            },
            {
              q: "43. ",
              opts: ["Since", "Although", "As", "If"],
              a: "C",
              exp: "as 引导时间状语从句，表示“当他靠近时”，前后无因果或让步关系。",
              diff: "easy"
            },
            {
              q: "44. ",
              opts: ["each", "another", "that", "his"],
              a: "B",
              exp: "前句已提到一辆开着远光灯的车，此处发现的是“另一辆”翻倒的车。",
              diff: "medium"
            },
            {
              q: "45. ",
              opts: ["flames", "smoke", "water", "steam"],
              a: "A",
              exp: "本段末句 the fire was put out 说明当时喷出的是“火苗”。",
              diff: "easy"
            },
            {
              q: "46. ",
              opts: ["used", "disabled", "removed", "abandoned"],
              a: "B",
              exp: "车辆翻倒受损已无法行驶，disabled 意为“损坏的、失去行驶能力的”。",
              diff: "hard"
            },
            {
              q: "47. ",
              opts: ["got hold of", "prepared", "took charge of", "controlled"],
              a: "A",
              exp: "停车拉手刹后“拿起”灭火器，get hold of 意为“抓住、拿到”。",
              diff: "hard"
            },
            {
              q: "48. ",
              opts: ["came down", "came through", "came in", "came over"],
              a: "D",
              exp: "开远光灯的那个人“走了过来”告诉 Larry 情况，come over 符合。",
              diff: "medium"
            },
            {
              q: "49. ",
              opts: ["returned", "received", "made", "confirmed"],
              a: "C",
              exp: "make an emergency call 是固定搭配，意为“拨打了急救电话”。",
              diff: "medium"
            },
            {
              q: "50. ",
              opts: ["then", "again", "finally", "even"],
              a: "A",
              exp: "灭火、交谈之后“接着”听到车内传来女子的声音，按时间顺序推进。",
              diff: "medium"
            },
            {
              q: "51. ",
              opts: ["Starting", "Parking", "Passing", "Approaching"],
              a: "D",
              exp: "“走近”车辆时才看到女子正从破碎的车窗往外爬，故选 Approaching。",
              diff: "medium"
            },
            {
              q: "52. ",
              opts: ["quiet", "still", "away", "calm"],
              a: "B",
              exp: "stay still 意为“保持不动”，与下文 she should not move 呼应。",
              diff: "medium"
            },
            {
              q: "53. ",
              opts: ["for", "so", "and", "but"],
              a: "D",
              exp: "让她别动，“但”她担心车会爆炸，前后是转折关系。",
              diff: "hard"
            },
            {
              q: "54. ",
              opts: ["explode", "slip away", "fall apart", "crash"],
              a: "A",
              exp: "车子刚着过火，女子自然担心它会“爆炸”，故选 explode。",
              diff: "easy"
            },
            {
              q: "55. ",
              opts: ["as if", "unless", "in case", "after"],
              a: "C",
              exp: "in case 意为“以免、万一”，即不要乱动以免伤到脖子。",
              diff: "hard"
            },
            {
              q: "56. ",
              opts: ["stepped forward", "backed off", "moved on", "set out"],
              a: "B",
              exp: "消防和急救人员到场后，两人“退到一旁”让专业人员工作。",
              diff: "medium"
            },
            {
              q: "57. ",
              opts: ["woman", "police", "man", "driver"],
              a: "B",
              exp: "下句 They let him and the other man go 表明他询问的是现场的“警方”。",
              diff: "medium"
            },
            {
              q: "58. ",
              opts: ["forbidden", "ready", "asked", "free"],
              a: "D",
              exp: "or 连接两种情况：是还需要他，还是可以“自由离开”，be free to go。",
              diff: "medium"
            },
            {
              q: "59. ",
              opts: ["for certain", "for consideration", "reported", "checked"],
              a: "A",
              exp: "One thing is for certain 意为“有一点是肯定的”，引出作者评价。",
              diff: "hard"
            },
            {
              q: "60. ",
              opts: ["patience", "skills", "efforts", "promise"],
              a: "C",
              exp: "他灭火、安抚伤者等一系列“努力”很可能救了女子一命。",
              diff: "medium"
            }
          ]
        },
        {
          q: "During my second year at the city college, I was told that the education department was offering a “free” course, called Thinking Chess, for three credits. I (41)____ the idea of taking the class because, after all, who doesn't want to (42)____ a few dollars? More than that, I'd always wanted to learn chess. And, even if I weren't (43)____ enough about free credits, news about our (44)____ was appealing enough to me. He was an international grandmaster, which (45)____ I would be learning from one of the game's (46)____. I could hardly wait to (47)____ him.\n\nMaurice Ashley was kind and smart, a former graduate returning to teach, and this (48)____ was no game for him; he meant business. In his introduction, he made it (49)____ that our credits would be hard-earned. In order to (50)____ the class, among other criteria, we had to write a paper on how we plan to (51)____ what we would learn in class to our future professions and, (52)____, to our lives. I managed to get an A in that (53)____ and learned life lessons that have served me well beyond the (54)____.\n\nTen years after my chess class with Ashley, I'm still putting to use what he (55)____ me: “The absolute most important (56)____ that you learn when you play chess is how to make good (57)____. On every single move you have to (58)____ a situation, process what your opponent (对手) is doing and (59)____ the best move from among all your options.” These words still ring true today in my (60)____ as a journalist.",
          diff: "medium", src: "2018年高考全国卷I 完形填空",
          subs: [
            {
              q: "41. ",
              opts: ["put forward", "jumped at", "tried out", "turned down"],
              a: "B",
              exp: "课程免费且作者一直想学象棋，jump at the idea 意为“欣然接受这个想法”。",
              diff: "hard"
            },
            {
              q: "42. ",
              opts: ["waste", "earn", "save", "pay"],
              a: "C",
              exp: "呼应上文 a “free” course，免费课意味着能“省下”几美元。",
              diff: "medium"
            },
            {
              q: "43. ",
              opts: ["excited", "worried", "moved", "tired"],
              a: "A",
              exp: "even if 表让步：即使对免费学分不够“兴奋”，导师的消息也足够吸引人。",
              diff: "medium"
            },
            {
              q: "44. ",
              opts: ["title", "competitor", "textbook", "instructor"],
              a: "D",
              exp: "下句 He was an international grandmaster 中的 He 指代本空，即课程的“授课导师”。",
              diff: "medium"
            },
            {
              q: "45. ",
              opts: ["urged", "demanded", "held", "meant"],
              a: "D",
              exp: "which 指代前句，“这意味着”我将师从顶尖高手，故用 meant。",
              diff: "medium"
            },
            {
              q: "46. ",
              opts: ["fastest", "easiest", "best", "rarest"],
              a: "C",
              exp: "与 international grandmaster 呼应，one of the game's best 即“棋坛最优秀的选手之一”。",
              diff: "easy"
            },
            {
              q: "47. ",
              opts: ["interview", "meet", "challenge", "beat"],
              a: "B",
              exp: "导师如此吸引人，所以作者迫不及待想“见到”他，此时尚未上课。",
              diff: "medium"
            },
            {
              q: "48. ",
              opts: ["chance", "qualification", "honor", "job"],
              a: "D",
              exp: "空后 was no game for him; he meant business 说明回校教书这份“工作”对他而言是认真的事业。",
              diff: "hard"
            },
            {
              q: "49. ",
              opts: ["real", "perfect", "clear", "possible"],
              a: "C",
              exp: "make it clear that... 是固定句式，意为“明确表示”，it 为形式宾语。",
              diff: "easy"
            },
            {
              q: "50. ",
              opts: ["attend", "pass", "skip", "observe"],
              a: "B",
              exp: "由 our credits would be hard-earned 及写论文等要求可知，是为了“通过”这门课。",
              diff: "medium"
            },
            {
              q: "51. ",
              opts: ["add", "expose", "apply", "compare"],
              a: "C",
              exp: "apply...to... “将……运用于……”，空后 to our future professions 提示搭配。",
              diff: "medium"
            },
            {
              q: "52. ",
              opts: ["eventually", "naturally", "directly", "normally"],
              a: "A",
              exp: "从未来职业再到生活，是递进关系，eventually 表“最终”。",
              diff: "hard"
            },
            {
              q: "53. ",
              opts: ["game", "presentation", "course", "experiment"],
              a: "C",
              exp: "呼应上文 the class，作者在这门“课程”中拿到了A。",
              diff: "easy"
            },
            {
              q: "54. ",
              opts: ["criterion", "classroom", "department", "situation"],
              a: "B",
              exp: "beyond the classroom 意为“超出课堂之外”，强调人生启示的长远作用。",
              diff: "medium"
            },
            {
              q: "55. ",
              opts: ["taught", "wrote", "questioned", "promised"],
              a: "A",
              exp: "what he taught me “他教给我的东西”，引号中即导师的教诲。",
              diff: "easy"
            },
            {
              q: "56. ",
              opts: ["fact", "step", "manner", "skill"],
              a: "D",
              exp: "后文“how to make good decisions”是一种能力，故为下棋学到的最重要“技能”。",
              diff: "medium"
            },
            {
              q: "57. ",
              opts: ["grades", "decisions", "impressions", "comments"],
              a: "B",
              exp: "下文 choose the best move from among all your options 即“做出好的决定”。",
              diff: "medium"
            },
            {
              q: "58. ",
              opts: ["analyze", "describe", "rebuild", "control"],
              a: "A",
              exp: "空后 a situation 搭配 analyze，每走一步都要“分析”形势。",
              diff: "medium"
            },
            {
              q: "59. ",
              opts: ["announce", "signal", "block", "evaluate"],
              a: "D",
              exp: "从所有选项中“评估”出最佳一步，evaluate 与 from among all your options 相契。",
              diff: "hard"
            },
            {
              q: "60. ",
              opts: ["role", "desire", "concern", "behavior"],
              a: "A",
              exp: "as a journalist 提示此处指作者作为记者的“角色/身份”。",
              diff: "medium"
            }
          ]
        }
      ],
            'chinese::xxwl': [
        {
          q: "【材料】阅读下面的文字，完成1~5题。\n\n对素食者和肠胃疾病患者来说，藜麦的发现是一个奇迹。藜麦不含麸质，富含镁和铁，比其他种子含有更多的蛋白质，包括人体无法独自生成的必需的氨基酸。美国宇航局宣布，藜麦是地球上营养最均衡的食物之一，是宇航员的理想之选。产于安第斯山的藜麦有一个令西方消费者神往的传说：印加人非常重视藜麦，认为它是神圣的，并且称之为\"万谷之母\"。不过，藜麦的爱好者却通过媒体发现了一个令人不安的事实。从2006年到2013年，玻利维亚和秘鲁的藜麦价格上涨了两倍。2011年，《独立报》称，玻利维亚的藜麦消费量\"5年间下降了34%，当地家庭已经吃不起这种主食了，它已经变成了奢侈品\"。《纽约时报》援引研究报告称，藜麦种植区的儿童营养不良率正在上升。2013年，《卫报》用煽动性标题提升了人们对这个问题的关注度：\"素食者的肚子能装下藜麦令人反胃的事实吗？\"该报称，贫穷的玻利维亚人和秘鲁人正在食用更加便宜的\"进口垃圾食品\"。《独立报》2013年一篇报道的标题是\"藜麦：对你有利——对玻利维亚人有害\"。这些消息传遍了全球，在健康饮食者之中引发了一场良心危机。在社交媒体、素食博客和健康饮食论坛上，人们开始询问食用藜麦是否合适。\n\n这种说法看似可信，被许多人认可，但是经济学家马克·贝勒马尔等人对此则持保留意见。毕竟，藜麦贸易使大量外国资金涌入玻利维亚和秘鲁，其中许多资金进入了南美最贫穷的地区。几位经济学家跟踪了秘鲁家庭支出的调查数据，将种植且食用藜麦的家庭、食用但不种植藜麦的家庭和从不接触藜麦的家庭划分为三个小组。他们发现，从2004年到2013年，三个小组的生活水平都上升了，其中藜麦种植户家庭支出的增长速度是最快的。农民们正在变富，他们将这种新收入转化为支出又给周边民众带来了好处。那么藜麦消费量下降34%又是怎么回事呢？原来，在很长的时间内两个国家的藜麦消费量一直在缓慢而稳定地下降，这意味着消费量的下降和价格的激增不存在明显的联系。更加接近事实的解释是，秘鲁人和玻利维亚人只是想换换口味，吃点别的东西。\n\n为了解藜麦的种植情况，我去了秘鲁科尔卡山谷，这里在印加时代以前就得到了开垦。藜麦是一种美丽的作物，拥有深红色或金黄色的巨大种球。在安第斯山的这片区域，人们在梯田上同时种植藜麦以及当地特有的玉米和马铃薯品种。\"国外需求绝对是一件好事，\"我的秘鲁向导杰西卡说道，\"农民非常高兴，所有想吃藜麦的人仍然买得起这种食物。\"她还解释了另一个好处。之前，秘鲁城里人往往认为他们这片区域吃藜麦的人\"很土\"。现在，由于美国人和欧洲人的重视，食用藜麦被视作一种时尚。\"利马人终于开始尊重我们这些高原人和我们的传统了。\"玻利维亚西南部有一片遥远而不适合居住的区域，那里到处都是盐湖和休眠火山。在那里，我看到了由藜麦资金支持的当地急需的开发和旅游项目。千百年来勉强能够养家糊口的自耕农开始为更加美好的未来而投资。我在2017年4月听到的玻利维亚人对于该作物的唯一抱怨是，日益增长的供给正在拉低价格。玻利维亚的藜麦种植面积增长了两倍多，从2007年的5万公顷增长到2016年的18万公顷。马克·贝勒马尔后来对我说：\"这是一个令人悲伤的结局，因为它的价格不太可能再度回升。\"在风景如画的科尔卡山谷，当太阳落山时，我问杰西卡，欧洲和北美的消费者是否应该为吃掉秘鲁人和玻利维亚人的食物而感到内疚。我可以猜到答案，但我想听到当地人的亲口否认。\"相信我，\"杰西卡笑道，\"我们有许多藜麦。\"\n\n乍一看，这一关于食物热潮、全球贸易和消费者忧虑的事件讲述了谎言被揭穿的过程。不过，这些受到错误解读的真相可能会对当地的人们造成真正的伤害。各行各业有经验的沟通者会通过片面的事实、数字、背景呈现某种世界观，从而影响现实。在这个例子中，新闻工作者和博主出于高尚的理由引导消费者远离藜麦：他们由衷地为一个贫困群体感到担忧，害怕狂暴的全球贸易风潮会危及这一群体的利益。我们很早就知道这一点：每个新手辩论者和犯错误的小学生都知道如何挑选最有利于自己的真相。不过，我们可能不知道这些真相为沟通者提供了多大的灵活性。很多时候，你可以通过许多方式描述一个人、一件事物或者一起事件，这些描述可能具有同等的真实性。我将它们称为\"竞争性真相\"。\n\n（摘编自赫克托·麦克唐纳《后真相时代》，刘清山译）",
          diff: "medium", src: "2023年新课标Ⅰ卷 现代文阅读Ⅰ（信息类文本阅读，赫克托·麦克唐纳《后真相时代》）",
          subs: [
            {
              q: "1.下列对原文相关内容的理解和分析，不正确的一项是（3分）\nA.藜麦适合素食者和肠胃疾病患者食用，并且由于其营养均衡，被美国宇航局认为是宇航员食物的理想之选。\nB.\"马克·贝勒马尔等人对此则持保留意见\"中的\"此\"，指的是被国外需求推高的藜麦价格给玻利维亚和秘鲁当地人造成伤害这一说法。\nC.藜麦的大面积种植，不仅让玻利维亚和秘鲁等地农民的生活水平显著提高，而且改变了当地人对藜麦带有歧视的看法。\nD.作者认为，尽管一些媒体引导消费者远离藜麦的做法值得商榷，但是其出发点却不是恶意的，他们为当地的贫困居民感到担忧。",
              a: "C",
              exp: "解析：本题考查理解文中重要词句含义、筛选整合信息的能力。A项由第一段\"对素食者和肠胃疾病患者来说，藜麦的发现是一个奇迹\"与\"美国宇航局宣布……是宇航员的理想之选\"两处信息叠加可推出，正确。B项\"此\"承接第二段首句\"这种说法\"，回指第一段媒体报道的\"价格上涨—当地人吃不起—儿童营养不良\"这一伤害说，正确。C项两处失误：一是改变歧视看法的原因是\"由于美国人和欧洲人的重视\"，而非\"藜麦的大面积种植\"，属强加因果、偷换原因；二是原文只写秘鲁城里人（利马人）看不起吃藜麦的高原人，并未涉及玻利维亚，选项扩大了范围。D项综合第四段\"出于高尚的理由\"\"由衷地为一个贫困群体感到担忧\"，正确。故选C。答题要领：选项与原文比对时重点核查\"原因\"\"范围\"\"程度\"三处易设误点。",
              diff: "medium"
            },
            {
              q: "2.根据原文内容，下列说法不正确的一项是（3分）\nA.从第一段的内容可以看出，当一起事件超出了我们直接观察的范围时，有些人会根据他人提供的信息，并结合自己的判断，生成对该事件的看法。\nB.\"它的价格不太可能再度回升\"，可能是因为市场对藜麦的需求量不再大幅增加，而藜麦的种植面积持续扩大，供给日益增长。\nC.\"每个新手辩论者\"\"都知道如何挑选最有利于自己的真相\"，可见有些\"沟通者\"会选择有助于推进个人意图的真相，而这种选择具有一定的灵活性。\nD.从藜麦事件可以发现，一组片面的事实编织在一起引发了一场良心危机，而这场良心危机对玻利维亚和秘鲁当地的居民造成了真正的伤害。",
              a: "D",
              exp: "解析：本题考查依据文本作合理推断的能力。A项是对第一段\"消息传遍全球—健康饮食者产生良心危机\"的抽象概括，推断成立。B项依据第三段\"日益增长的供给正在拉低价格\"及种植面积由5万公顷增至18万公顷，符合供求规律，推断成立。C项依据第四段对\"沟通者\"\"灵活性\"的表述，推断成立。D项错在把\"可能\"坐实为\"已经造成\"：原文第四段只说\"这些受到错误解读的真相可能会对当地的人们造成真正的伤害\"；且第二、三段的数据显示2004—2013年三组家庭生活水平都在上升、种植面积持续扩大，说明良心危机并未实际造成伤害。故选D。答题要领：推断题要盯住\"可能/必然\"\"已然/未然\"的时态与或然性偷换。",
              diff: "hard"
            },
            {
              q: "3.下列选项，最适合作为论据来支撑第二段观点的一项是（3分）\nA.\"粮食优先\"智库的工作人员塔尼娅·科森在谈到安第斯山藜麦种植者时表示：\"坦率地说，他们厌倦了藜麦，因此开始购买其他食物。\"\nB.加拿大《环球邮报》一则新闻的标题为\"你对藜麦的爱越深，你对玻利维亚人和秘鲁人的伤害就越深\"。\nC.制片人迈克尔·威尔科克斯专门为这个问题制作了一部纪录片，他说：\"我见过一些反对食用藜麦的文字评论，实际上，停止消费才会真正伤害这些农民。\"\nD.英国广播公司播音员埃文·戴维斯指出：\"事实上，说谎常常是没有必要的。你可以在不使用任何谎言的情况下完成许多有效的欺骗。\"",
              a: "A",
              exp: "解析：本题考查论点与论据的匹配（实证）能力。第一步先锁定第二段的落脚点即分论点：\"更加接近事实的解释是，秘鲁人和玻利维亚人只是想换换口味，吃点别的东西\"——即当地消费量下降与价格上涨无关，是口味变化所致。第二步逐项比对：A项\"他们厌倦了藜麦，因此开始购买其他食物\"与该分论点高度契合，是最佳论据。B项是煽动性标题，宜作第一段媒体渲染的例证。C项针对\"错误解读的真相会造成真正伤害\"，宜置于第四段。D项谈\"不用谎言也能欺骗\"，宜与第四段\"竞争性真相\"配合。故选A。答题要领：论据题必须先精准提炼\"本段\"观点，切忌用全文中心去套。",
              diff: "medium"
            },
            {
              q: "4.请简要说明文本中的西方媒体在报道时使用了哪些\"竞争性真相\"。（4分）",
              a: "①从2006年到2013年，玻利维亚和秘鲁的藜麦价格上涨了两倍；②玻利维亚的藜麦消费量5年间下降了34%；③藜麦种植区的儿童营养不良率正在上升；④玻利维亚人和秘鲁人正在食用更加便宜的进口食品。",
              exp: "解析：本题考查归纳整合信息并辨析信息真实性的能力。第一步界定概念：由末段可知，\"竞争性真相\"是沟通者为达成自身意图而援引的、本身真实客观、但只呈现片面事实的描述。第二步回到第一段筛取媒体列举的\"事实性\"陈述，共四条（价格上涨两倍、消费量5年降34%、儿童营养不良率上升、改吃更便宜的进口食品）。第三步剔除干扰：媒体由这些事实推出的结论性、评价性语句（如\"当地家庭已经吃不起这种主食，它已变成奢侈品\"\"藜麦：对你有利——对玻利维亚人有害\"\"素食者的肚子能装下藜麦令人反胃的事实吗\"）属于虚假结论而非\"真相\"，不能计入答案。评分角度：每点1分，共4分；写成结论性表述不给分。",
              diff: "hard"
            },
            {
              q: "5.作者采用哪些方法证明关于藜麦的新闻报道结论有误？请根据文本概括。（6分）",
              a: "①引用经济学家（马克·贝勒马尔等人）的调查数据及观点；②针对媒体提出的问题（如消费量下降34%），作出合理的解释；③进行实地调研，征询当地居民的意见。",
              exp: "解析：本题考查整体把握文本、概括论证方法的能力。按段落切分作者的\"反驳链条\"：第二段前半引用几位经济学家跟踪秘鲁家庭支出的分组调查数据（三组生活水平均上升、种植户增长最快），并引马克·贝勒马尔的观点——这是\"引用权威数据与观点\"；第二段后半针对《独立报》\"消费量下降34%\"这一问题作出更接近事实的解释（长期缓慢下降，与价格激增无明显联系，只是想换口味）——这是\"合理解释、釜底抽薪\"；第三段作者亲赴秘鲁科尔卡山谷与玻利维亚西南部实地考察，见到藜麦资金支持的开发与旅游项目，并当面询问向导杰西卡——这是\"实地调研＋访谈当地人\"。评分角度：每点2分，共6分；只答\"举例论证\"\"引用论证\"等术语而无文本落实，酌情扣分。",
              diff: "hard"
            }
          ]
        },
        {
          q: "【材料】阅读下面的文字，完成1~3题。\n\n《中国金银器》是第一部中国古代金银器通史，囊括了器皿与首饰，着眼于造型与纹饰，究心于美术与工艺、审美与生活的关系。\n\n本书的研究旨趣，不在金银器的科学技术发展史，而在与社会生活史密切相关的造型、纹饰、风格的演变史，也可以说，它不是穷尽式的历史资料汇编，也不是用考古学的方法对器物分型、分式以划分时代，而是以目验实物为前提，从名物学入手，通过定名，以器物描述的方法，来展示工艺美术史与社会生活史中的金银器。\n\n中国古代金银器研究，是伴随现代考古学而生的一门新兴学问。传世文献展示的金银器史和出土文物呈现出来的金银器史，是不一样的。前者显示了数量颇多的名目和使用甚巨的数目，但提供具体形象的材料很少。考古发现的实物，就名目和数量而言，虽只是载籍的冰山一角，却是以形象示人；对于工艺美术要讨论的核心问题，即造型与纹饰，它提供了最为直观的实例。\n\n金银器兼具富与丽的双重品质。首先它是财富，其次它是一种艺术形态，然而通过销熔的办法又可使之反复改变样态以跟从时代风尚。相对于可入鉴藏的书画、金石、玉器、瓷器之雅，金银器可谓一俗到骨。它以它的俗，传播时代风尚。与其他门类相比，金银器皿和首饰的制作工艺都算不得复杂，这里便格外显示出设计的重要。\n\n从造型设计的角度来看，工艺美术是共性多、个性少、最为贴近生活的艺术。无论哪朝哪代，祈福与怡情都是纹样设计的两大主旨，当然，不同时代表现的形式多有不同，亦即选择与创造的艺术形象不同，这也正是工艺美术史所要展示的一个主要内容。这里\"史\"的概念是指以贴近设计者和制作者装饰用心的感知，展示没有文字或鲜有文字却只是以成品来显示的设计史脉络，而不是贴着历史编年来勾画发展的线索。小说家说：\"语言是我们的思维方式，是我们最基础、最直接的表达方式。语言也是一种建筑材料，许多意想不到的建筑物都是靠了语言一砖一瓦地搭建起来的。\"历史学家则说：\"我始终强调运用最基本的'语文学'的学术方法，对传到我手中需要研究的那个文本作尽可能全面和深入的历史化和语境化处理，进而对它们作出最准确的理解和解读。\"这两段话同样可以移用于作为艺术语汇的造型与纹饰。本书即是建立在对艺术语汇发生与演变的观察和分析之上。在这里呈现的是两类语言：一是物，即用造型和纹饰表达自身的艺术语言；一是文，即人对物的命名，此中包括了对物之本身和物所承载的意义的理解。\n\n金银器工艺的发展演进，关键在于品类的丰富以及与时代风尚紧密相关的造型和纹饰的设计之妙，技术的进步并非主导。纹样设计首先取决于工匠的慧心，付诸熟练掌握传统技术的巧手，乃其第二义。纹样设计所涉及的图式演变，也包括两项主要内容：一是金银器本身设计与制作具有连续性的工艺传统，一是设计者和制作者共处的风俗与共享的文学所形成的文化生态。因此可以说，中国金银器史，很大程度上也是一部古代社会风俗史。\n\n（摘编自扬之水《\"更想工人下手难\"〈中国金银器〉导言》）",
          diff: "medium", src: "2022年全国甲卷 论述类文本阅读（扬之水《\"更想工人下手难\"〈中国金银器〉导言》）",
          subs: [
            {
              q: "1.下列关于原文内容的理解和分析，正确的一项是（3分）\nA.考古发现的金银器实物在名目和数量上远远比不上典籍记载，而其价值和意义却在典籍记载之上。\nB.考察一个时期社会的审美风尚，应先注意其时金银器皿和首饰流行的工艺设计以及对时代风尚的传播。\nC.无论哪朝哪代，金银器纹样设计都脱不开祈福与怡情两大主旨，其他工艺美术门类的纹样设计也是如此。\nD.给没有文字或鲜有文字的金银器成品命名，其所处时代的社会风俗和文化生态是命名的主要依据。",
              a: "B",
              exp: "解析：本题考查筛选并辨析信息的能力。A项\"其价值和意义却在典籍记载之上\"于文无据（无中生有）：第三段只说考古实物\"以形象示人\"\"提供了最为直观的实例\"，与传世文献各有价值，并未作高下比较。C项\"其他工艺美术门类的纹样设计也是如此\"表述绝对且丢失前提：原文是\"从造型设计的角度来看……祈福与怡情都是纹样设计的两大主旨\"，未推及所有门类。D项无中生有：第五段只说\"文，即人对物的命名，此中包括了对物之本身和物所承载的意义的理解\"；末段所说风俗与文化生态影响的是\"纹样设计所涉及的图式演变\"，而非命名依据。B项综合第四段\"金银器可谓一俗到骨。它以它的俗，传播时代风尚\"\"格外显示出设计的重要\"，表述成立。故选B。",
              diff: "medium"
            },
            {
              q: "2.下列对原文论证的相关分析，不正确的一项是（3分）\nA.文章开宗明义，点明《中国金银器》一书的性质，概述了全书研究的对象和范畴。\nB.文章通过将金银器与书画、金石等对比，突出其品质特性，凸显了设计的重要。\nC.文章引用小说家、历史学家的话，来解释将造型和纹饰视作艺术语汇的研究思路。\nD.文章末段重点论证了连续性的工艺传统对金银器技术、造型和纹样设计的影响。",
              a: "D",
              exp: "解析：本题考查分析论点、论据和论证的能力。A项对应首段与第二段，点明该书\"第一部中国古代金银器通史\"的性质及研究旨趣，分析正确。B项对应第四段将金银器之\"俗\"与书画、金石、玉器、瓷器之\"雅\"作对比，进而引出\"格外显示出设计的重要\"，正确。C项对应第五段引小说家论\"语言\"、历史学家论\"语文学\"方法，用以说明把造型与纹饰当作\"艺术语汇\"来观察其发生与演变的研究思路，正确。D项概括不全且偷换要点：末段明确\"纹样设计所涉及的图式演变，也包括两项主要内容\"——工艺传统与文化生态，只讲其一即以偏概全；且原文强调\"技术的进步并非主导\"，选项却说影响\"技术\"。故选D。",
              diff: "medium"
            },
            {
              q: "3.根据原文内容，下列说法不正确的一项是（3分）\nA.《中国金银器》一书将各种金银器实物还原到其设计和制作的时代中来展开研究。\nB.与其他艺术品相比，金银器因其\"俗\"，且经反复销熔，所以传世实物的数量偏少。\nC.古代金银矿石分布状况和冶炼技术的发展不在《中国金银器》一书研究视野中。\nD.古代文学作品涉及金银器的相关描述，是中国金银器造型和纹饰研究的重要参考。",
              a: "B",
              exp: "解析：本题考查分析概括作者观点态度的能力。A项由第二段\"以目验实物为前提，从名物学入手，通过定名，以器物描述的方法，来展示工艺美术史与社会生活史中的金银器\"及末段\"中国金银器史，很大程度上也是一部古代社会风俗史\"可推，正确。C项由第二段\"本书的研究旨趣，不在金银器的科学技术发展史\"可推，正确。D项由末段\"设计者和制作者共处的风俗与共享的文学所形成的文化生态\"可推，正确。B项强加因果：第四段只说金银器\"一俗到骨\"、可通过销熔反复改变样态以跟从时代风尚，并未由此推出\"传世实物数量偏少\"这一结论。故选B。答题要领：凡出现\"因……所以……\"\"由于……\"的选项，须回原文核验因果链是否存在。",
              diff: "medium"
            }
          ]
        },
        {
          q: "【材料】阅读下面的文字，完成4~6题。\n\n材料一：\n\n利用杂种优势以大幅度提高农作物产量，是现代农业科学技术的突出成就之一，植物雄性不育性的发现和利用，使不少两性花植物，如高粱、向日葵、甜菜等作物的杂种优势能广泛应用于生产。近年来，我国的杂交水稻已取得了重大突破，为大幅度提高水稻产量开创了一条有效的途径。\n\n（摘编自袁隆平《杂交水稻培育的实践和理论》）\n\n材料二：\n\n遗传育种学界对水稻这一严格自花授粉作物具有杂种优势现象普遍持否定或怀疑态度，袁隆平根据自己对水稻的长期观察，经过与玉米等作物杂种优势利用现象的比较后，对水稻无杂种优势的观念提出了质疑。袁隆平于1964年正式开始水稻杂种优势利用的探索，两年后终于发现水稻具有杂种优势。根据高粱、玉米杂种优势利用的成功经验，他将这种杂交思路用于水稻物种上，由此提出了\"三系法\"籼稻杂交路线。所谓三系杂交水稻是指雄性不育系、保持系和恢复系三系配套育种。不育系为生产大量杂交种子提供了可能性，借助保持系来繁殖不育系，用恢复系给不育系授粉来生产育性恢复且有优势的杂交稻。从\"三系法\"的操作程序上讲，成功的关键首先是要找到合适的不育系材料。在认真总结多年来的研究工作的基础上，袁隆平终于认识到，后代不育性状的不理想是亲本的亲缘关系太近造成的。后代产生变异的可能性与亲本的亲缘关系呈正相关，即亲本的亲缘关系越远，后代产生变异的可能性就越大，不育性状就越明显。于是一切都变得清晰了：下一步的工作即是寻找地理远缘或遗传远缘的稻株，而在这些稻株中，野生稻或野生稻中的不育株作为亲本则是最为理想的，它极有可能突破此前不育系选育的难关。\"远缘杂交\"技术路线的确立，是袁隆平\"三系法\"杂交水稻迈向成功的关键性一步。随着雄性不育野生稻（野败）在海南的发现，\"远缘杂交\"的技术路线得到证明，它不仅正确而且完全可以实现。\n\n（摘编自雷毅《科学研究中的创造性思维与方法——以袁隆平\"三系\"法杂交水稻为例》）\n\n材料三：\n\n由于杂交水稻不同熟期组合的出现，全国各地涌现出各种与杂交水稻种植相配套的新型种植模式。湖南、浙江、广东、广西、江苏、湖北等省区以种植杂交水稻为主，发展麦类与一季杂交稻、双季杂交稻、玉米与杂交稻等多种模式。这些新型模式不仅提高了土地复种指数，促进了粮食、食用油和多种经济作物的经营发展，而且培育了地力，提高了土地经济效益与生态效益。推广杂交水稻，还促使中低产稻田的面貌发生根本性变化，同时改变了农民对中低产稻田的种植评估观念。杂交水稻分蘖力强，根系发达，吸收力好，秆粗叶茂，株型好，光能转化效率高，这使中低产稻田能够获得较高的产量，与高产稻田产量的差距大大缩小。\n\n（摘编自李晏军《中国杂交水稻技术发展研究（1964~2010）》）",
          diff: "medium", src: "2022年全国甲卷 实用类文本阅读（多文本：袁隆平《杂交水稻培育的实践和理论》＋雷毅＋李晏军）",
          subs: [
            {
              q: "4.原卷第4题为图示梳理题（\"下列对材料相关内容的梳理，不正确的一项是\"，四个选项均以流程图形式呈现，此处不便复现图形）。其中被判为错误的一项，把\"野败的发现\"梳理为\"突破了亲本亲缘关系过远的难关\"。请指出该梳理错在哪里，并写出正确的梳理链条。（3分）",
              a: "原卷答案为C项。该项错在把\"野败的发现\"所突破的难关说成\"亲本亲缘关系过远\"。材料二明确指出\"后代不育性状的不理想是亲本的亲缘关系太近造成的\"，故\"野败\"这一雄性不育野生稻的发现，突破的是\"亲本亲缘关系过近\"的难关。正确链条应为：质疑水稻无杂种优势→1964年开始探索、两年后发现水稻具有杂种优势→提出\"三系法\"籼稻杂交路线（不育系、保持系、恢复系配套）→关键是找到合适的不育系材料→认识到不育性状不理想源于亲本亲缘关系太近→确立\"远缘杂交\"技术路线，寻找地理远缘或遗传远缘的稻株（野生稻及其不育株最理想）→海南发现雄性不育野生稻\"野败\"，证明\"远缘杂交\"路线正确可行。",
              exp: "解析：本题考查依据文本梳理事理逻辑、辨析信息的能力。图示题的实质是把说明性文字转换为因果链或流程链，设误点几乎都在\"链条节点的因果倒置或概念反向\"。作答时须回原文定位关键句\"后代不育性状的不理想是亲本的亲缘关系太近造成的\"\"亲本的亲缘关系越远，后代产生变异的可能性就越大，不育性状就越明显\"，两句互证可知：问题出在\"太近\"，解决办法是\"求远\"，因而\"野败\"突破的是\"过近\"之关，选项将\"近\"改成\"远\"，属反向偷换。评分角度：指出\"太近\"而非\"太远\"给1分，完整复原关键链条给2分。",
              diff: "hard"
            },
            {
              q: "5.下列对材料相关内容的概括和分析，不正确的一项是（3分）\nA.袁隆平在进行杂种优势利用探索实践时，并没有盲从学界的权威理论，而是将杂交水稻作为自己研究的突破口。\nB.不育系材料的选育是三系配套育种技术能否实现的关键，理清这一研究思路后，袁隆平开始了寻找地理远缘或遗传远缘稻株的工作。\nC.亲本的亲缘关系越近，后代的不育性状就越不理想，这是袁隆平在认真总结多年研究工作的基础上才认识到的。\nD.杂交水稻的推广正好与全国各地涌现出的新型种植模式相配套，这些新型模式不仅提升了土地的复种指数，还培育了地力。",
              a: "D",
              exp: "解析：本题考查对多则材料信息进行比较、辨析的能力。A项对应材料二首句\"遗传育种学界……普遍持否定或怀疑态度\"而袁隆平\"提出了质疑\"，正确。B项对应\"成功的关键首先是要找到合适的不育系材料\"及\"下一步的工作即是寻找地理远缘或遗传远缘的稻株\"，先后顺序无误。C项是对\"后代不育性状的不理想是亲本的亲缘关系太近造成的\"\"在认真总结多年来的研究工作的基础上\"的正确转述。D项颠倒了因果与先后：材料三开头是\"由于杂交水稻不同熟期组合的出现，全国各地涌现出各种与杂交水稻种植相配套的新型种植模式\"——新型模式是杂交水稻不同熟期组合出现之后随之产生的结果，而非事先存在、恰好与推广\"相配套\"。故选D。",
              diff: "medium"
            },
            {
              q: "6.杂交水稻培育的成功有什么意义？请根据材料进行概括。（6分）",
              a: "①使很多两性花植物的杂种优势能广泛应用于生产；②找到了我国大幅度提高水稻产量的有效途径；③促使全国出现与杂交水稻种植相配套的新型种植模式，提高了土地复种指数，促进了粮食、食用油和多种经济作物的经营发展，培育了地力，提高了土地经济效益与生态效益；④提高了中低产稻田的产量，大大缩小了与高产稻田产量的差距。",
              exp: "解析：本题考查评价事件的社会价值和影响、筛选整合信息的能力。答题路径是\"按材料分区取点，逐条归并\"：材料一两句各出一点——\"植物雄性不育性的发现和利用，使不少两性花植物……杂种优势能广泛应用于生产\"对应第①点；\"为大幅度提高水稻产量开创了一条有效的途径\"对应第②点。材料三前半\"涌现出各种与杂交水稻种植相配套的新型种植模式\"\"提高了土地复种指数……提高了土地经济效益与生态效益\"对应第③点；后半\"促使中低产稻田的面貌发生根本性变化\"\"这使中低产稻田能够获得较高的产量，与高产稻田产量的差距大大缩小\"对应第④点。材料二侧重科研思路与方法，一般不作为\"意义\"要点。评分角度：每点约1.5分，共6分；要点须落实到\"生产应用—产量途径—种植模式与效益—中低产田\"四个层面，只笼统答\"解决了吃饭问题\"不能得满分。",
              diff: "medium"
            }
          ]
        },
        {
          q: "【材料】阅读下面的文字，完成1~5题。\n\n材料一：\n\n十八世纪德国学者莱辛的《拉奥孔》是近代诗画理论文献中第一部重要著作。从前人们相信诗画同质，直到莱辛才提出丰富的例证，用动人的雄辩，说明诗画并不同质。\n\n据传说，希腊人为了夺回海伦，举兵围攻特洛伊城，十年不下。最后他们佯逃，留着一匹腹内埋伏精兵的大木马在城外，特洛伊人看见木马，把它移到城内。典祭官拉奥孔当时极力劝阻，说留下木马是希腊人的诡计。他这番忠告激怒了偏心于希腊人的天神。当拉奥孔典祭时，河里就爬出两条大蛇，把拉奥孔和他的两个儿子一齐绞死了。\n\n这是罗马诗人维吉尔《伊尼特》第二卷里最有名的一段。十六世纪在罗马发现的拉奥孔雕像似以这段史诗为蓝本。莱辛拿这段诗和雕像互较，发现几个重要的异点。因为要解释这些异点，他才提出诗画异质说。\n\n据史诗，拉奥孔在被捆时放声号叫；在雕像中他的面孔只表现一种轻微的叹息，具有希腊艺术所特有的恬静与肃穆。为什么雕像的作者不表现诗人所描写的号啕呢？希腊人在诗中并不怕表现苦痛，而在造型艺术中却永远避免痛感所产生的面孔筋肉挛曲的丑状。在表现痛感之中，他们仍求形象的完美。\n\n其次，据史诗，那两条长蛇绕腰三圈，绕颈两圈，而在雕像中它们仅绕着两腿。因为作者要从全身筋肉上表现出拉奥孔的苦痛，如果依史诗，筋肉方面所表现的苦痛就看不见了。同理，雕像的作者让拉奥孔父子赤裸着身体，虽然在史诗中拉奥孔穿着典祭官的衣服。\n\n莱辛推原这不同的理由，作这样一个结论：\"图画和诗所用的模仿媒介或符号完全不同，图画用存于空间的形色，诗用存于时间的声音。……全体或部分在空间中相并立的事物叫作'物体'，物体和它们的看得见的属性是图画的特殊题材。全体或部分在时间上相承续的事物叫作'动作'，动作是诗的特殊题材。\"\n\n换句话说，画只宜于描写静物，诗只宜于叙述动作。静物各部分在空间中同时并存，这种静物不宜于诗，因为诗的媒介是在时间上相承续的语言。比如说一张桌子，画家只需用寥寥数笔，使人一眼看到就明白它是桌子。如果用语言来描写，你须从某一点说起，说它有多长多宽等等，说了一大篇，读者还不一定马上就明白它是桌子。\n\n诗只宜叙述动作，因为动作在时间上先后相承续，而诗所用的语言声音也是如此。这种动作不宜于画，因为一幅画仅能表现时间上的某一点，而动作却是一条绵延的直线。比如说，\"我弯下腰，拾一块石头打狗，狗见着就跑了\"，用语言来叙述这事，多么容易，但是如果把这简单的故事画出来，画十幅、二十幅，也不一定使观者一目了然。\n\n但是谈到这里，我们不免有疑问：画绝对不能叙述动作，而诗绝对不能描写静物么？莱辛也谈到这个问题，他说：\"图画也可以模仿动作，但是只能间接地用物体模仿动作。……诗也能描绘物体，但是也只能间接地用动作描绘物体。\"\n\n换句话说，图画叙述动作时，必化动为静，以一静面表现动作的全过程；诗描写静物时，亦必化静为动，以时间上的承续暗示空间中的绵延。\n\n（摘编自朱光潜《诗论》）\n\n材料二：\n\n《拉奥孔》所讲绘画或造型艺术和诗歌或文字艺术在功能上的区别，已成老生常谈了。它的主要论点——绘画宜于表现\"物体\"或形态，而诗歌宜于表现\"动作\"或情事，中国古人也浮泛地讲过。晋代陆机分划\"丹青\"和\"雅颂\"的界限，说：\"宣物莫大于言，存形莫善于画。\"这里的\"物\"是\"事\"的同义字。邵雍有两首诗说得详细些：\"史笔善记事，画笔善状物。状物与记事，二者各得一\"；\"画笔善状物，长于运丹青。丹青入巧思，万物无遁形。诗笔善状物，长于运丹诚。丹诚入秀句，万物无遗情\"。\n\n但是，莱辛的议论透彻深细得多，他不仅把\"事\"\"情\"和\"物\"\"形\"分开，还进一步把两者各和时间与空间结合；作为空间艺术的绘画、雕塑只能表现最小限度的时间，所画出、塑出的不可能超过一刹那内的物态和景象，绘画更是这一刹那内景物的一面观。我联想起唐代的传说：\"客有以《按乐图》示王维，维曰：'此《霓裳》第三叠第一拍也。'客未然，引工按曲，乃信。\"宋代沈括《梦溪笔谈》批驳了这个无稽之谈：\"此好奇者为之。凡画奏乐，止能画一声。\"\"止能画一声\"五字也帮助我们了解一首唐诗。徐凝《观钓台画图》：\"一水寂寥青霭合，两崖崔嵬白云残。画人心到啼猿破，欲作三声出树难。\"画家挖空心思，终画不出\"三声\"连续的猿啼，因为他\"止能画一声\"。徐凝很可以写\"欲作悲鸣出树难\"，那不过说图画只能绘形而不能\"绘声\"。他写\"三声\"，寓意精微，就是莱辛所谓绘画只表达空间里的平列，不表达时间上的后继，所以画家画\"一水\"加\"两崖\"的排列易，画\"一\"而\"两\"、\"两\"而\"三\"的连续\"三声\"难。\n\n（摘编自钱锺书《读〈拉奥孔〉》）",
          diff: "hard", src: "2021年新高考Ⅰ卷 现代文阅读Ⅰ（信息类文本阅读，多文本：朱光潜《诗论》＋钱锺书《读〈拉奥孔〉》）",
          subs: [
            {
              q: "1.下列对材料相关内容的理解和分析，不正确的一项是（3分）\nA.莱辛是历史上质疑\"诗画同质\"观念的第一人，他的《拉奥孔》在近代诗画理论中产生了广泛影响。\nB.雕塑《拉奥孔》既呈现了拉奥孔被缠绞的表情，又不让这表情表现为丑态，体现了希腊艺术恬静与肃穆的一面。\nC.雕塑《拉奥孔》与史诗记载的不同主要体现在三处：一是拉奥孔的表情，二是大蛇缠身的部位，三是人物穿衣与否。\nD.莱辛的《拉奥孔》认为，由于诗和画拥有不同的媒介和符号，所以形成了各擅胜场的题材范围。",
              a: "A",
              exp: "解析：本题考查理解分析材料内容的能力。A项\"质疑'诗画同质'观念的第一人\"于文无据、以偏概全。原文只说\"《拉奥孔》是近代诗画理论文献中第一部重要著作\"\"直到莱辛才提出丰富的例证……说明诗画并不同质\"，强调的是他第一次提出丰富例证并使人信服，并未说他是历史上质疑此说的第一人；且材料二还指出\"中国古人也浮泛地讲过\"，可反证A项不成立。B项对应第四段\"面孔只表现一种轻微的叹息，具有希腊艺术所特有的恬静与肃穆\"\"避免……面孔筋肉挛曲的丑状\"，正确。C项对应第四、五段三处异点，正确。D项对应莱辛结论\"图画和诗所用的模仿媒介或符号完全不同\"及\"特殊题材\"之说，正确。故选A。",
              diff: "medium"
            },
            {
              q: "2.根据材料内容，下列说法正确的一项是（3分）\nA.由于诗歌是时间的艺术，在描述一件事情时，即使是高明的绘画也不如诗歌来得生动和明白。\nB.绘画只能是对所画对象某一瞬间的定格，因此后人根据画作是推想不出所画对象动作的过程的。\nC.\"红杏枝头春意闹\"\"春风又绿江南岸\"\"两山排闼送青来\"等诗句，化静为动，以动作来描绘景致。\nD.沈括质疑了唐代传说，从这个例子可判断，后人关于王维\"诗中有画，画中有诗\"的说法其实没有道理。",
              a: "C",
              exp: "解析：本题考查筛选并整合信息、依文推断的能力。A项绝对化：原文只说\"用语言来叙述这事，多么容易\"，是就叙述动作的便利而言，并未断言绘画描述事情一定不如诗\"生动和明白\"。B项武断：材料一明确说\"图画叙述动作时，必化动为静，以一静面表现动作的全过程\"，可见观者可由画面推想动作过程。D项以偏概全、强加否定：沈括所驳的是\"《按乐图》可辨第三叠第一拍\"这一无稽之谈，与王维\"诗中有画，画中有诗\"的诗画相通之论不是一回事。C项三例正合材料一\"诗描写静物时，亦必化静为动，以时间上的承续暗示空间中的绵延\"，\"闹\"\"绿\"\"送\"皆以动作写景，正确。故选C。",
              diff: "medium"
            },
            {
              q: "3.结合材料内容，下列选项中最能支持莱辛\"诗画异质\"观点的一项是（3分）\nA.诗以空灵，才为妙诗，可以入画之诗尚是眼中金屑也。\nB.文者无形之画，画者有形之文，二者异迹而同趣。\nC.诗和画的圆满结合，就是情和景的圆满结合，也就是所谓的\"艺术意境\"。\nD.图画可以画爱神向一个人张弓瞄准，而诗歌则能写一个人怎样被爱神之箭射中。",
              a: "D",
              exp: "解析：本题考查论点与论据的匹配能力。先明确\"诗画异质\"的核心：画是空间艺术，宜表现并立于空间的\"物体\"（一刹那的静态）；诗是时间艺术，宜表现在时间中承续的\"动作\"（过程）。A项讲诗贵空灵、不宜入画，谈的是诗的品格高下，不是诗画媒介与题材之别。B项\"异迹而同趣\"恰是\"诗画同质\"论，与观点相反。C项讲诗画结合生成意境，仍是\"同质相通\"一路。D项\"画\"取张弓瞄准这一\"一刹那\"的姿态，\"诗\"写\"怎样被射中\"这一有先后承续的过程，正好分别落在空间之物体与时间之动作上，是最贴切的例证。故选D。",
              diff: "medium"
            },
            {
              q: "4.请简要分析材料一和材料二的论证思路。（4分）",
              a: "材料一：先由莱辛《拉奥孔》引出\"诗画并不同质\"这一观点；接着复述拉奥孔的传说，并将维吉尔史诗与雕像比较，举出表情、蛇缠部位、穿衣与否三处异点，说明莱辛提出\"诗画异质\"说的缘由；然后引莱辛的结论，从媒介（空间形色／时间声音）与题材（物体／动作）两方面阐明\"画只宜描写静物，诗只宜叙述动作\"，并以画桌子、打狗两例作通俗印证；最后提出\"画绝对不能叙述动作、诗绝对不能描写静物么\"的疑问，引莱辛之言加以辩证补充——化动为静、化静为动，使论证更为周严。全文以引用论证、举例论证为主，层层推进。\n材料二：先指出《拉奥孔》\"绘画宜表现物体、诗歌宜表现动作\"的主要论点中国古人也浮泛地讲过，引陆机\"宣物莫大于言，存形莫善于画\"和邵雍论诗笔画笔的两首诗为证；再转折指出莱辛更为透彻深细，因为他把\"事\"\"情\"与\"物\"\"形\"分开后，还进一步与时间、空间结合，提出绘画只能表现一刹那内景物的一面观；最后以王维《按乐图》的唐代传说、沈括\"凡画奏乐，止能画一声\"的批驳以及徐凝\"欲作三声出树难\"的诗句为例，论证绘画\"只表达空间里的平列，不表达时间上的后继\"。全文中西互参、由浅入深，以引证和例证层层深化。",
              exp: "解析：本题考查分析论证思路的能力。答题模式为\"首先……接着（然后）……最后……\"，并点明所用论证方法与文段间的逻辑关系。操作要领：（1）给材料分层——材料一可分为\"引出观点—例证异点—推出结论并阐释—辩证补充\"四层；材料二可分为\"中国古人已浮泛言之—莱辛更透彻（时空结合）—例证绘画只能画一刹那\"三层。（2）概括每层的核心句，注意抓标志词，如材料一\"换句话说\"\"但是谈到这里，我们不免有疑问\"，材料二\"但是，莱辛的议论透彻深细得多\"，这些正是层次转换的路标。（3）末尾点出论证方法（引用论证、举例论证、对比论证）与效果。评分角度：两则材料各2分，思路层次答对且有文本依据即可给分，只贴\"总分总\"标签而无内容概括不得分。",
              diff: "hard"
            },
            {
              q: "5.嵇康诗有\"目送归鸿，手挥五弦\"一句，顾恺之说画\"手挥五弦易，目送归鸿难\"。请结合材料，谈谈你对此的理解。（6分）",
              a: "①绘画是空间艺术，它\"只能表现最小限度的时间\"，所画不能超过一刹那内的物态和景象，且\"更是这一刹那内景物的一面观\"。②\"手挥五弦\"是一个可以定格的瞬间姿态，属于在空间中并立的\"物体\"及其看得见的属性，画家用形色即可直接呈现，所以\"易\"。③\"目送归鸿\"却是一段在时间上先后承续的\"动作\"：目光须随鸿雁远去，直至其消失于视野，这一绵延的过程无法压缩进一个静止的画面；绘画\"只表达空间里的平列，不表达时间上的后继\"，故\"难\"。④由此可见，顾恺之之说正印证了莱辛的\"诗画异质\"：画宜于写物体（空间并立），诗宜于叙动作（时间承续），二者媒介不同，各有擅场。",
              exp: "解析：本题考查运用文中观点解决具体问题的能力，属\"以理释例\"型。答题三步：第一步，提炼理论工具——从材料一取\"图画用存于空间的形色，诗用存于时间的声音\"\"一幅画仅能表现时间上的某一点，而动作却是一条绵延的直线\"，从材料二取\"绘画更是这一刹那内景物的一面观\"\"只表达空间里的平列，不表达时间上的后继\"。第二步，用理论分别观照\"易\"与\"难\"：\"手挥五弦\"是可被一刹那定格的静态物象故易；\"目送归鸿\"含有目光追送、鸿雁渐远直至消失的时间流程，超出了画面所能承载的\"一点\"故难。第三步，回扣结论——此例正是\"诗画异质\"的生动注脚。评分角度：答出绘画受制于\"一刹那／空间平列\"给2分，分别解释\"易\"\"难\"各2分；只复述题干或泛谈\"意境难画\"而不落实时空之别，最多得2分。",
              diff: "hard"
            }
          ]
        }
      ],
            'chinese::wxwl': [
        {
          q: "【小说】文本一：\n\n支队政委（节选）\n王愿坚\n\n我做了一个梦，梦见我像是负了伤，正在爬一个崖头，怎么也爬不上去。忽然，老胡来了，他变得跟棵老黄松似的，又高又大，伸出小葵扇那么大的一只手，拉住了我……一睁眼，可不是，我的手正在他手里攥着呢。\n\n见我醒了，他把我的手捏紧了，突然问我：“老黄，我求你个事成不成？”\n\n“怎么不成！”我奇怪地看了他一眼。他的脸被拂晓时的月光一照，更是苍白，简直像是块白石头刻出来的。\n\n“我让你干什么你干什么？”\n\n“一定！”\n\n他扭身戳了戳正在酣睡的林大富。小伙子一骨碌爬起来，愣眉愣眼地问：“政委，要出发？”\n\n“不，有任务！”老胡说着抓起一个挎包，对我说：“咱们到那边竹林里去。”\n\n我疑疑惑惑地背起他，来到了那片竹林边上。这时，启明星贼亮贼亮的，东方已经现出鱼肚白了。老胡四下里看了看，选了一棵大毛竹，靠在上面坐下来，又问了我一句：“真的叫你干啥你干啥？”\n\n“真的，快说吧！”我被他弄得又糊涂又心焦。\n\n“好！”他伸手从挎包里掏出两根绳子，“噗”的一声扔在我面前，然后两手往竹子后面一背，厉声说：“把我绑起来！”\n\n“该不是叫伤口疼得他神经错乱了吧？”我想，本想不干，无奈已经有言在先了，我一面绑，一面问：“这是干啥？你疯啦？”他没搭我的腔，只是一个劲叫着：“绑紧点，绑紧点！”等我们把他两手绑好，他又把那条伤腿伸开，蹬住了另一棵竹子：“把这也绑住！”我们也照办了。\n\n看看我们都弄妥了，他咬咬牙说：“来，使劲挤它！”\n\n直到这时，我才明白他的意思。我叫过小林，轻轻地打开了他伤口上的布带子。伤口，像个发得过了火的开花馒头，又红又肿，没有器械，没有麻药，硬是把脓血从伤口里挤出来，这痛苦……\n\n“快，快下手哇！”他在催我。\n\n“我，我干不来！”我痛苦地说。\n\n“你答应过我嘛，黄兴和同志！”他哀求似的说，“你总不能瞪着眼看我受罪呀，是不是？俗话说‘疮口出了脓，比不长还受用’，帮我挤挤就好了。好了，那不给队上减少了个累赘？又可以多帮你干点工作。”对我说完软的，又对小林来硬的：“林大富同志，‘三大纪律’头一条就是服从命令，我命令你：挤！”\n\n我横了横心：“干！”便让小林抱住他的腿，我两手握着伤口按下去。随着手劲，我觉得手底下他的肌肉猛地哆嗦了一下。我问：“老胡，怎么样？”\n\n“没关系，你，你别管我！”\n\n我继续用力挤着伤口，这会儿我真想看看他是不是吃得消，却又不敢看。为了分散他的注意，减少些痛苦，我故意把话岔开来：“老胡，你看今天敌人还会不会再跟上来？”\n\n“说……说不上……”他低声回答。他把“上”字说成了“桑”，听得出话是从牙缝里挤出来的。\n\n“再追上来怎么办呢？”我又问。\n\n“嗯……”他猛地抖了一下，那两株竹子也跟着索索地抖一阵。\n\n“要是真来了，咱就再干他一下，好不好？”\n\n“嗯……”他又是一阵猛抖。\n\n一连两次问话没有回答，我心慌了，扭头向他望了望，只见他两手紧紧抠住地面，那被痛苦扭歪了的脸上，汗水顺着那浓黑的眉毛和鬓角，一串串地流着。\n\n我费了好大的劲才压下想住手的打算，火辣辣地喊了声小林：“快，快去化杯盐水来！”\n\n蓦地，竹子剧烈地颤动了一下，两片硬硬的小碎骨片跳到了我的手上，然后滑过指缝掉落到脚下的草丛里。我停住了手。这才觉得自己的脊背一阵发冷，原来衣服不知什么时候已经被汗水湿透了。\n\n我俩把他的伤口用盐水洗净，包扎好了，然后解开绳子，扶他在草地上平躺下来。他紧闭着眼，像睡着了似的。我撩把野草擦着手，坐到他的身边。小林正在掰着他的手指，他手里紧握着一把潮湿的泥土。\n\n太阳已经出来了。阳光淡淡地洒在他的脸上。他无力地睁开了眼，深深地吸了口气，说：“老黄，痛——啊！”\n\n汗珠映着阳光，晶亮晶亮的。我觉得自己的眼睛仿佛被这晶亮的反光刺得发痛，一滴咸咸的东西滚下来，流到了嘴角上。\n\n（有删改）\n\n文本二：\n\n长征：前所未闻的故事（节选）\n［美］哈里森·索尔兹伯里\n\n陈毅的伤口始终愈合不了，到了1935年6月，他已不能行走。游击队缺医少药，只有四种成药：八公丹、万金油、人丹和济公水。陈毅把万金油涂在伤口上，再换上新纱布。不久，伤口情况有所好转。①\n\n夏天，陈毅还能一瘸一拐地走路，可是到了9月，伤口变得疼痛难忍，腿也肿了起来，为了去南雄开会，他不得不拄着拐棍，脚步蹒跚地翻山越岭。这时他决定彻底治疗一下他的腿伤。他叫警卫员把他伤口中的脓挤出去。警卫员看到陈毅痛得脸色发白，急忙停下手来。陈毅命令他继续挤，警卫员说他下不了手。陈毅已经痛得浑身发抖，“好吧，”他说，“用绳子把我捆起来，这样我就不会发抖了。”警卫员把陈毅的腿捆在树上又继续挤，直到把脓挤净并挤出了一片碎骨头才停下。然后，用盐水冲洗了伤口，用涂过万金油的干净布包扎好。陈毅痛得像得了舞蹈病似的浑身发抖，但不久就恢复了自制力，笑着说：“这回它不会再反攻了。”的确如此，伤口彻底愈合了，再也没有发作。②\n\n［注］①见陈丕显回忆录《赣南三年游击战争》。②材料来自1984年3月23日对胡华的采访。\n\n（过家鼎等译，有删改）",
          diff: "medium", src: "2022年全国甲卷 文学类文本阅读·王愿坚《支队政委》（节选）／哈里森·索尔兹伯里《长征：前所未闻的故事》（节选）",
          subs: [
            {
              q: "第7题　下列对文本相关内容和艺术特色的分析鉴赏，不正确的一项是：\nA．文本一依次写到“月光一照”“启明星贼亮贼亮的”“太阳已经出来了”，既推进了情节发展，也暗示了主人公心理的变化。\nB．文本一中的老黄是小说叙述者，也是“手术”的实施者，小说通过描写他不敢下手、不敢看等情形，烘托了老胡的刚毅。\nC．文本二中陈毅“术”后笑着说“这回它不会再反攻了”，这样的话语既带着战争年代的特定色彩，也表现出陈毅的乐观与幽默。\nD．通过对老胡和陈毅战胜身体痛苦的描写，两个文本不仅写出了战斗生活的艰苦卓绝，更写出了革命信仰的巨大力量。",
              a: "选A。文本一确实依次写到了“月光一照”“启明星贼亮贼亮的”“太阳已经出来了”，但这些描写并未起到“推进情节发展、暗示主人公心理变化”的作用：“月光一照”是为写老胡的脸“更是苍白”，强调他身体十分虚弱；“启明星贼亮贼亮的”只是表明故事发生的时间；“太阳已经出来了”表示故事已近结束。三处均为交代时间的景物描写，与情节推进和人物心理变化关系不大。B、C、D三项分析均正确。",
              exp: "解析：本题考查对文本内容与艺术特色的分析鉴赏。此类“景物描写作用”选项极易被套路化误判——考生一见时间性景物就贴上“推动情节”“暗示心理”的标签。作答须回到文本：判断景物是否真的承担叙事功能，要看它有没有引发人物行动、造成情境转折，或与人物情绪形成对应。文本一中三处光线描写只承担交代时间、烘托人物身体状态的功能，属于“标示时间”而非“推动情节”。用环境描写推动情节、暗示心理是常用手法，却不是必然。B项“烘托”判断正确：写老黄“我干不来”“不敢看”“脊背一阵发冷”，是以叙述者的怯懦反衬老胡的刚毅，属侧面衬托。故答案为A。",
              diff: "medium"
            },
            {
              q: "第8题　老胡这一人物形象有哪些特点？请结合文本一简要分析。（6分）",
              a: "①意志坚强：为了继续战斗，能够忍受常人难以忍受的痛苦。在没有器械、没有麻药的情况下要求“绑紧点”、要求“使劲挤它”，挤出碎骨片仍不喊停，只说“没关系，你，你别管我”。\n②处事果断：一旦决定“手术”，坚决实施。拂晓时叫醒老黄和林大富，备好绳子，选定毛竹，安排周密，说干就干，绝不拖延。\n③善于做思想工作：为了说服战友，或说理、或命令、或请求，切实有效。对老黄用软的——“你答应过我嘛，黄兴和同志”“你总不能瞪着眼看我受罪呀”；对林大富来硬的——搬出“三大纪律”头一条“服从命令”，直接下命令。",
              exp: "解析：人物形象题的答题公式是“特点概括＋文本依据”，切忌只贴标签或只复述情节。本文只截取了“挤脓”这一个场景，因此题干限定为“有哪些特点”而非“是怎样的人”，作答应紧扣该场景可见的侧面。三个要点分属两个层次：意志坚强、处事果断是性格层面；善于做思想工作则是他作为“支队政委”这一身份的职业特点——政委的本职正是做人的思想工作，答出这一点才算真正扣住标题。分析时应抓住动作细节（抠住地面、紧握泥土、肌肉哆嗦）、语言细节（把“上”说成“桑”）以及软硬两种劝说方式，避免脱离文本的套话。",
              diff: "medium"
            },
            {
              q: "第9题　这两个内容相近的文本文体不同，因而艺术表现也有差异。请比较并简要分析。（6分）",
              a: "①文体性质不同：文本一是小说，可以虚构；文本二是纪实作品，强调真实。\n②表现手法不同：文本一运用场景描写、细节描写、言行描写等多种表现手法，塑造了老胡这一艺术形象；文本二以采访、回忆录等为基础（文后注明材料出自陈丕显回忆录及1984年对胡华的采访），记录了陈毅的真实经历。\n③语言风格不同：文本一以描写为主，语言生动形象；文本二以叙事为主，语言平实简洁。",
              exp: "解析：这是2022年全国甲卷首创的“小说＋纪实作品”跨文体比较题，呼应统编教材选择性必修中册“了解纪实作品和虚构作品各自的特点和表现手法”的单元目标。答题的逻辑起点是文体属性——虚构与非虚构，这是一切差异的根源。由此顺势推出两条：虚构允许作者调动比喻（伤口像“发得过了火的开花馒头”）、细节（碎骨片跳到手上）、对话等手法着力塑造形象，故如见其人、如闻其声；非虚构则须以采访、回忆录等材料为凭据，重在“记录”，故交代具体的时间（1935年6月、9月）、地点（南雄）、人物（陈毅、警卫员）并加注出处。第三条落到语言风格：描写性语言与叙述性语言之别。三条构成“文体—手法—语言”的完整链条。",
              diff: "hard"
            }
          ]
        },
        {
          q: "【小说】越野滑雪\n［美］海明威\n\n缆车又颠了一下，停了。尼克正在行李车厢里给滑雪板上蜡，把靴尖塞进滑雪板上的铁夹，牢牢扣上夹子。他从车厢边缘跳下，落脚在硬邦邦的冰壳上，来一个弹跳旋转，蹲下身子，把滑雪杖拖在背后，一溜烟滑下山坡。\n\n乔治在下面的雪坡上一落一起，再一落就不见了人影。尼克顺着陡起陡伏的山坡滑下去时，那股冲势加上猛然下滑的劲儿把他弄得浑然忘却一切，只觉得身子里有一股飞翔、下坠的奇妙感。他挺起身，稍稍来个上滑姿势，一下子又往下滑，往下滑，冲下最后一个陡峭的长坡，越滑越快，越滑越快，雪坡似乎在他脚下消失了。身子下蹲得几乎倒坐在滑雪板上，尽量把重心放低，只见飞雪犹如沙暴，他知道速度太快了。但他稳住了。随即一搭被风刮进坑里的软雪把他绊倒，滑雪板一阵磕磕绊绊，他接连翻了几个筋斗，然后停住，两腿交叉，滑雪板朝天翘起，鼻子耳朵里满是雪。\n\n乔治站在坡下稍远的地方，正噼噼啪啪地拍掉风衣上的雪。\n\n“你的姿势真美妙，尼克，”他大声叫道，“那搭烂糟糟的雪真该死，把我也绊了一跤。”\n\n“在峡谷滑雪什么滋味儿？”尼克挣扎着站起来。\n\n“你得靠左滑。因为谷底有堵栅栏，所以飞速冲下去后得来个大旋身。”\n\n“等一会儿我们一起去滑。”\n\n“不，你先去。我想看你滑下峡谷。”\n\n尼克赶过乔治。他的滑雪板开始有点打滑，随后一下子猛冲下去。他坚持靠左滑，末了，在冲向栅栏时，紧紧并拢双膝，像拧紧螺旋似的旋转身子，把滑雪板向右来个急转弯，扬起滚滚白雪，然后慢慢减速，跟铁丝栅栏平行地站住了。\n\n他抬头看看山上。乔治正屈起双膝滑下山来；两支滑雪杖像虫子的细腿那样荡着，杖尖触到地面，掀起阵阵白雪，最后，他一腿下跪，一腿拖随，整个身子来个漂亮的右转弯，蹲着滑行，双腿一前一后，飞快移动，身子探出，防止旋转，两支滑雪杖像两个光点，把弧线衬托得更加突出，一切都笼罩在漫天飞舞的白雪中。\n\n尼克用滑雪板把铁丝栅栏最高一股铁丝压下，乔治纵身越过去。他们沿路屈膝滑行，进入一片松林。路面结着光亮的冰层，被拖运原木的马儿拉的犁弄脏了，染得一搭橙红，一搭烟黄。两人一直沿着路边那片雪地滑行。大路陡然往下倾斜通往小河，然后笔直上坡。他们透过林子，看得见一座饱经风吹雨打、屋檐较低的长形房子。走近了，看出窗框漆成绿色。油漆在剥落。\n\n他们把滑雪板竖靠在客栈的墙上，把靴子蹬蹬干净才走进去。\n\n客栈里黑咕隆咚的。有只大瓷火炉在屋角亮着火光。天花板很低。屋内两边那些酒渍斑斑的暗黑色桌子后面摆着光溜溜的长椅。两个瑞士人坐在炉边，喝着小杯浑浊的新酒。尼克和乔治在炉子另一边靠墙坐下。一个围着蓝围裙的姑娘走过来。\n\n“来瓶西昂酒，”尼克说，“行不行？”\n\n“行啊，”乔治说，“你对酒比我内行。”\n\n姑娘走出去了。\n\n“没一项玩意儿真正比得上滑雪，对吧？”尼克说，“你滑了老长一段路，头一回歇下来时就会有这么个感觉。”\n\n“嘿，”乔治说，“真是妙不可言。”\n\n姑娘拿进酒来又出去了，他们听见她在隔壁房里唱歌。\n\n门开了，一帮子从大路那头来的伐木工人走进来，在屋里把靴子上的雪跺掉，身上直冒水汽。女招待给这帮人送来了三公升新酒，他们分坐两桌，光抽烟，不作声，脱下了帽，有的背靠着墙，有的趴在桌上。屋外，拉运木雪橇的马儿偶尔一仰脖子，铃铛就清脆地丁当作响。\n\n乔治和尼克都高高兴兴的。他们两人很合得来。他们知道回去还有一段路程可滑呢。\n\n“你几时得回学校去？”尼克问。\n\n“今晚，”乔治回答，“我得赶十点四十的车。”\n\n“真希望你能留下，我们明天上百合花峰去滑雪。”\n\n“我得上学啊，”乔治说，“哎呀，尼克，难道你不希望我们能就这么在一起闲逛吗？带上滑雪板，乘上火车，到一个地方滑个痛快，滑好上路，找客栈投宿，再一直越过奥伯兰山脉，直奔瓦莱州，穿过恩加丁谷地。”\n\n“对，就这样穿过黑森林区。哎呀，都是好地方啊。”\n\n“就是你今年夏天钓鱼的地方吧？”\n\n“是啊。”\n\n他们喝干了剩酒。\n\n尼克双肘撑在桌上，乔治往墙上颓然一靠。\n\n“也许我们再也没机会滑雪了，尼克，”乔治说。\n\n“我们得滑，”尼克说，“否则就没意思了。”\n\n“我们要去滑，没错，”乔治说。\n\n“我们得滑，”尼克附和说。\n\n“希望我们能就此说定了，”乔治说。\n\n尼克站起身。他把风衣扣紧。他拿起靠墙放着的两支滑雪杖。\n\n“说定了可一点也靠不住，”他说。\n\n他们开了门，走出去。天气很冷。雪结得硬邦邦的。大路一直爬上山坡通到松林里。\n\n（陈良廷译，有删改）",
          diff: "hard", src: "2020年全国I卷 文学类文本阅读·［美］海明威《越野滑雪》（陈良廷译）",
          subs: [
            {
              q: "第7题　下列对小说相关内容和艺术特色的分析鉴赏，不正确的一项是：\nA．小说中描写滑雪的段落多从尼克的角度来写，要么侧重他本人滑雪时的感受，要么通过他的眼睛来观看乔治滑雪的姿态，虽多次描写而无雷同之感。\nB．小说的多个细节描写突出了客栈的破败和黯淡，与白雪皑皑的山间峡谷形成鲜明对比，小说氛围由此发生变化，情节也由此发生转折。\nC．小说插入了对喝酒的瑞士人、客栈女招待、伐木工人等人物的描写，这符合主人公在客栈小憩时的观察，也为小说增添了更真切的故事背景。\nD．小说主旨与《老人与海》较为接近，都是通过描写人挑战大自然或者投身不甘平庸的冒险生活，来塑造海明威式的“硬汉”形象。",
              a: "选D。D项属于对主旨的过度解读。本篇的重心并不在“人与自然的搏斗”和“硬汉”形象的塑造上，而是表现尼克与乔治想通过滑雪摆脱现实生活的牵绊，以及这一愿望注定难以实现的怅惘。滑雪在文中是自由、纯粹之乐的象征，与“上学”“赶十点四十的车”所代表的现实秩序相对立，与《老人与海》的抗争主题并不相同。A、B、C三项分析均正确。",
              exp: "解析：本题考查内容与艺术特色的分析鉴赏，难点在于抵抗“作家标签化”的思维定势。一见海明威就套“硬汉”“重压下的优雅风度”，正是命题人设置的陷阱。判断主旨须回到本篇：全文没有任何“搏斗”“失败而不被打垮”的意味，倒是反复出现“再也没机会滑雪了”“说定了可一点也靠不住”这类无可奈何的语句，情感基调是留恋与惘然而非豪迈。B项看似绝对，实则成立：客栈的“黑咕隆咚”、剥落的油漆与前文“漫天飞舞的白雪”确成对比，叙事也由室外动态的滑雪转入室内静态的对话，氛围与情节均有转折。故答案为D。",
              diff: "medium"
            },
            {
              q: "第8题　两人在喝完酒离开客栈前有一段一再相约的对话。请结合上下文分析对话者的心理。（6分）",
              a: "①两人一再相约，表明他们对再次一起滑雪有强烈的愿望。“我们得滑”“我们要去滑，没错”“我们得滑”“希望我们能就此说定了”，反复申说，正见渴盼之切。\n②分别之际的一再相约，也表达出依依不舍的心情。乔治当晚就要赶车回学校，尼克盼他留下同上百合花峰，相约实为惜别。\n③但他们已经感觉到这一愿望不会实现，心情有些惘然。乔治说“也许我们再也没机会滑雪了”，尼克最后说“说定了可一点也靠不住”，反复的约定终归于对不可期的清醒认知。",
              exp: "解析：心理分析题要“由言及心”，从人物的语言、动作和上下文情境反推内心。此处的妙处在于“重复”这一形式本身就是心理的外化——一句话若一说即定，便无须再说；正因心里没底，才要反复确认。三个答题点构成情感的递进层次：渴盼（对滑雪之乐的向往）→不舍（离别在即）→惘然（预感落空）。作答时须扣住两处关键句：乔治的“也许我们再也没机会滑雪了”是转折点，尼克的“说定了可一点也靠不住”是收束句，前者道破隐忧，后者拆穿约定。若只答“喜爱滑雪、依依不舍”而漏掉“惘然、无奈”，就失掉了本篇最重要的情感底色。",
              diff: "medium"
            },
            {
              q: "第9题　海明威的“冰山”理论将文学作品同冰山类比，他说：“冰山在海面移动很庄严宏伟，这是因为它只有八分之一露在水面上。”本小说正是只描写了这露出水面的八分之一。请据此简要说明本小说的情节安排及其效果。（6分）",
              a: "①小说的情节只是两人的越野滑雪及在小客栈的逗留，此外别无枝蔓，这只是小说“露出水面的八分之一”。\n②通过小说已有的情节安排，可以推测出其背后隐藏着更为丰富的内容，尤其是两人在滑雪之外的生活——乔治要回的学校、尼克的家庭牵绊、两人的过往交谊与此后各自的去向，都被隐去而可由只言片语想见。\n③这种情节安排使小说大量留白，含蓄蕴藉，引人遐思，读者须调动想象参与补足，作品的意蕴因此更加丰厚。",
              exp: "解析：这是一道以文学理论为支架的情节赏析题，答题必须“扣理论、析文本、说效果”三步走。第一步先落实“八分之一”指什么——即文中实写的部分：滑雪与客栈小憩，情节极简，无起因无结局。第二步指认水下的“八分之七”——文中只用“你几时得回学校去”“我得上学啊”“就是你今年夏天钓鱼的地方吧”等零星语句轻轻带过，人物的身份、处境、前史一概不予交代，却处处透出气息。第三步落到效果：省略与留白造成含蓄的张力，把判断和想象的权利交给读者，这正是“冰山理论”的美学追求。答题时切忌只复述理论而不落文本，也不可只概括情节而不谈效果。",
              diff: "hard"
            }
          ]
        },
        {
          q: "【小说】麦子\n红柯\n\n①他们住在祖国边疆旷野中的土房子里，要一直守护下去。不管是谁，问他们搬不搬走？他们都说要住下去。当然了，老婆婆的回答要平和一些：“搬走怎么办呢？你前脚走，草就后脚跟过来，这儿的草有多凶哇，你刚转个身，它们就爬到窗户上，往屋里钻。”老头脾气躁：“往哪搬？我搬走你住呀。”老头总以为他住的是宫殿。\n\n②房子又矮又小。房子高不起来，房子周围的树就不怎么高。这儿的树都是矮个儿，都是那种憨厚的榆树，树杈很多，叶子很密，就是长不高。风大。树像绿狮子，毛发纷乱，疯狂地扑打风，风疼得满地打滚，蹿到天上，发出长长的哨音，又跌落到洼地里发出猛兽似的嗥叫。风嗥叫起来，地都动呢。老头吓唬老婆婆：“树抽打它们呢，树是老天爷的鞭子，老天爷要抽它们，它们只能哇哇乱叫。”老婆婆战战兢兢：“老天爷为啥抽它们？”老头说：“谁让它们乱跑，老天爷可容不得谁整天乱跑。”\n\n③【以下为试题所指画线部分】老婆婆走到浓密的树林里，老头发现她竟然一身金黄，飘动着团团芳香，就像一头金色的豹子。豹子走在麦田里，麦子哗哗响起来。麦子的金光洒在榆树上，榆树叶子油汪汪的；麦子的金光洒在云朵上，云就像戴了金笼头，云跟牲畜一样弯下脖子在明净辽阔的苍穹上吃草，云吃草的声音很柔和，窸窸窣窣。老婆婆摸麦穗呢。她的手像一只跳鼠，跳到麦芒上，麦芒浓密绵长就像夏天的睫毛，老婆婆触摸到夏天最美丽的地方。【画线部分至此结束】\n\n④麦子在老婆婆掌心里颤动。\n\n⑤老婆婆的手黄巴巴的，长满了像豆子一般的金黄的茧，那些茧豆真大呀，又圆又壮实，比麦粒儿大，比麦粒儿好看，就像一颗小太阳。大漠的太阳都这样子，小小一点，原野就像合起来的手掌，太阳在金色的指缝间回落。有时太阳会挂在树梢上，挣扎半天也挣不脱，把树都拉弯了，茂密的树梢牢牢地抱着太阳不肯松手，就像一个粗野的汉子紧紧抱着他心爱的女人。\n\n⑥老婆婆的额头闪动着快乐的光芒，发出梦呓般的叫声：“长高了，长胖了。”老婆婆搓开一只麦穗，麦粒肥肥胖胖，软乎乎的，就像刚出生的婴儿。老婆婆用手轻轻拍打着：“哭哇哭哇，快哭上一声。”\n\n⑦老婆婆曾生过一个孩子，那孩子夭折了。从那以后，她再也没有生过孩子。\n\n⑧那时，他们年轻力壮，老头自己动手做了几只木碗，换了一口大锅，好像他们要生一大群孩子。她说：“拿什么养活他们呀？”丈夫自豪得不得了：“咱们这里，想要多少娃娃就有多少娃娃。”丈夫大手一指，外边是辽阔的原野。\n\n⑨旷野无边无际，伸向远方，好多年以后，从大城市来的洋学生把这辽阔的土地叫太平洋。\n\n⑩老头不知道什么太平洋，老头只知道他要养许多娃娃，老头就从太平洋开始的地方垦荒。老头端着簸箕①把金黄的麦种大把大把撒出去，那正是落日时分，泥土波涛汹涌就像沸腾的金属。老头的手臂跟鹰一样伸向苍穹，把落日给遮住了，手臂粗壮的黑影投落到地上，随即发出一阵粗重的刷刷声。麦种的大网捕获了土地，肥大的土块跟鱼群一样跳起来，向四周奔窜。太阳落下去，麦子升起来。\n\n⑪老头端着空簸箕，眼睛充满梦幻般的光芒。\n\n⑫那年，他去团部接受重要任务。他已经30岁，他在农场最偏远的地方开荒种地，领导想起了他的婚姻问题。传他去团部的重要任务就是解决这个问题。他骑马跑了三天三夜，赶到团部。他喊报告进去的时候，政委正给一个青年女子谈话，政委的脸色不太好看。那女子却眉是眉眼是眼，长得很好看。他都看呆了。女子不看他，他看人家。政委说：“怪我无能，没把工作做通。”漂亮女子转身走了。他劝政委别生气：“那么漂亮的女子根本不适合我。”政委吃惊地看他，他说：“我那地方需要结实的女人，跟马一样结实的女人。光漂亮不中用。”政委说：“你要身体棒的，还真有一个，长相差些，心灵绝对美。”\n\n⑬他很快就见到那个大块头女人，他们在猪圈见面的，她是炊事班长，兼管猪圈。她接触过好几个男的，都没谈成。她跟猪呆在一起，那些猪个个肥壮无比。大家发出惊叹：谁跟她过日子，谁就能肥壮起来。就是没人动这个念头。他们见面，她就说：“你这么壮，你还来找我。”他说：“谁不想壮。”“你想壮？”“我想壮。”“你找对人啦。”\n\n⑭他们就这么说好了，她跟他走。她骑上团部最好的大白马，跟他走了。\n\n⑮走进荒漠她就显出优势，她在空旷荒凉的景象中亮丽起来，他不停地看她，他故意把她让到前边，她圆浑浑的长脖子跟枯死的胡杨打个照面，胡杨就亮起来。坚实的木纹显得很清晰，她整个庞大的身躯一下子让大荒漠充满了生机。\n\n⑯女人和骏马走在太阳的谷地里，女人就像起伏的群山。他没想到他能娶这么大一个媳妇儿，一个顶三个。\n\n⑰“你说我一个顶三个。”\n\n⑱“三个女人才顶你一个。”\n\n⑲“从来没人这么说过我。”\n\n⑳“我是你男人才这么说你。”\n\n㉑“你是我男人，你就天天这么说我，我喜欢你这么说我。”\n\n㉒跟那个年代所有的边疆故事一样，他们的洞房在地窝子里。他们说：“我们虽然住的是地窝子，但我们种的是太阳。”麦子生长的样子就像太阳升起来……\n\n㉓长满谷地的麦子，大片大片的麦子……太阳落下去，麦子长起来。\n\n㉔老头端着大簸箕，麦种撒光了，簸箕里还有泥土的光芒。“我把泥土的光芒端回来啦。老婆子开门啊。”泥土金闪闪的，老婆婆被吸引住了。\n\n㉕“我们是簸箕命。”\n\n㉖他们伸出手，手指蛋上指纹的纹路，没有一只斗，全是簸箕。斗才聚财，簸箕不聚财。老婆婆说：“咱不要财。”老婆婆搓开一只麦穗，搓出几十颗胖乎乎的麦粒，轻轻拍打着：“哈哈我有这么多孩子。”\n\n（有删改）\n\n［注］①簸箕：用竹篾或柳条编的器具，三面有边沿，一面敞口，用来簸粮食等。",
          diff: "medium", src: "2021年浙江卷 文学类文本阅读·红柯《麦子》",
          subs: [
            {
              q: "第10题　第②自然段描写环境有何用意？（4分）",
              a: "①交代背景，写环境的恶劣，突出守护边疆荒漠土地的艰难。房子又矮又小，树长不高，风大得“地都动呢”，边疆自然条件的严酷由此可见。\n②衬托人物，用环境的恶劣衬托主人公守土的顽强精神。在这样的环境中老两口仍坚持“要一直守护下去”，其坚毅愈显可贵。\n③暗示主题，通过写整天乱跑的风“挨打”，揭示坚守边疆土地的重要性。老头说“谁让它们乱跑，老天爷可容不得谁整天乱跑”，看似吓唬老婆婆，实则道出了扎根不走的信念。",
              exp: "解析：环境描写作用题的通用答题维度是“交代背景—渲染氛围—衬托人物—推动情节—暗示主题”，本题应从背景、人物、主题三层切入。第②段可分三层：一写房矮树低（静态），二写风大树狂（动态），三写老两口关于风“挨打”的对话。前两层用比喻（树像绿狮子）和拟物（风“满地打滚”“发出猛兽似的嗥叫”）把边疆的荒僻酷烈写得可触可感，属“交代背景”；第三层由景转人，自然过渡到“衬托人物”。最见匠心的是第三层的对话——“乱跑”要“挨打”，与开篇老两口“搬不搬走”“要住下去”的回答遥相呼应，是以民间戏谑的口吻暗点“坚守”之旨，这一层不可漏答。",
              diff: "medium"
            },
            {
              q: "第11题　赏析文中画线部分比喻、象征手法的艺术效果。（4分）\n（画线部分即第③段：“老婆婆走到浓密的树林里……老婆婆触摸到夏天最美丽的地方。”）",
              a: "①把麦田里的老婆婆比喻成豹子，写出她战胜恶劣环境的强悍性格和守护领土的强烈意识。“一身金黄”“飘动着团团芳香”“就像一头金色的豹子”，赋予老婆婆以野性生命的力量感。\n②把老婆婆抚摸麦子的手比喻成跳鼠，写出了她对麦子的深深爱意和对丰收的喜悦。“她的手像一只跳鼠，跳到麦芒上”，动作轻盈灵动，见出爱抚之情。\n③用麦子的金光铺洒原野，象征丰盈的生命是守护边疆的希望。金光洒在榆树上、洒在云朵上，云“弯下脖子在明净辽阔的苍穹上吃草”，整个天地都被麦子点亮，构成生机勃勃的意境。",
              exp: "解析：本题要求赏析“比喻＋象征”，作答须按“指出手法（本体、喻体）＋分析内容（写出了什么）＋点明情感或效果”的思路逐项落实，且必须分别对应比喻与象征两类手法。红柯的语言以奇崛的动物性比喻著称：豹子、跳鼠都是大漠中的活物，用它们作喻体，既贴合西部边地的物候，又把人的生命力写得野性淋漓。象征一层则要跳出局部看整体——金光的反复铺洒并非单纯写景，麦子（金黄、生长、繁衍）在全篇中始终与“孩子”“太阳”“希望”互为映照，故象征扎根边疆的生命的丰盈与顽强。答题时切忌只说“生动形象”这类空话，须落实到“强悍性格与守土意识”“爱意与丰收之喜”“生命的希望”等具体的情感与意蕴上。",
              diff: "medium"
            },
            {
              q: "第12题　小说用多种风格的人物语言塑造了主人公多方面的品格，试作分析。（6分）",
              a: "①质朴的语言，塑造主人公长期守土的坚毅品格，如作品第一自然段中的人物语言：“搬走怎么办呢？你前脚走，草就后脚跟过来”“往哪搬？我搬走你住呀”，口语化、生活化，见出扎根边疆、决不挪窝的执拗与坚定。\n②诗化的语言，塑造主人公对未来充满信心的乐观品格，如“我们虽然住的是地窝子，但我们种的是太阳”，把种麦说成“种太阳”，苦难中透出浪漫与豪情。\n③含蓄的语言，塑造主人公大美不言的奉献品格，如“我们是簸箕命”——簸箕不聚财，他们却说“咱不要财”，以自嘲的方式道出一生付出而不索取的胸怀。",
              exp: "解析：本题的着眼点是“语言风格”与“人物品格”的对应关系，答题须“风格＋例句＋品格”三位一体，缺一不可。命题人已在题干中给出提示——“多种风格”“多方面品格”，暗示答案应分类且不重复。三种风格恰好覆盖全篇三个层面：日常对话是质朴的，属生活层面；“种的是太阳”是诗化的，属精神层面；“簸箕命”是含蓄的，属人格层面。特别要理解“簸箕命”这一民间说法：手指纹路全是簸箕而无斗，俗谓不聚财，老两口非但不以为憾，反说“咱不要财”，末句又以“我有这么多孩子”作结，把麦粒当儿女——不求财而求生命的丰收，奉献之情尽在不言中。",
              diff: "hard"
            },
            {
              q: "第13题　探究“麦子”在全文中的作用。（6分）",
              a: "①是全文的主线，结构上串联全文。从老婆婆抚摸麦穗、搓开麦穗，到老头撒播麦种、“太阳落下去，麦子升起来”，直至结尾搓出麦粒说“我有这么多孩子”，麦子贯穿今昔，把散点式的片段连缀成篇。\n②象征守护边疆的这对夫妇旺盛、顽强的生命力。夭折的孩子与“肥肥胖胖”“就像刚出生的婴儿”的麦粒形成对照，麦子成了他们生命的延续。\n③揭示扎根边疆拓荒产粮就是为守土作贡献的主题。种麦即守土，产粮即卫国，题旨由此升华。",
              exp: "解析：物象（兼标题）作用题的经典答题角度是“情节—人物—主题”三维，本题答案正是这一框架的标准示范。情节维度看“麦子”如何串线：全文时序跳跃，老年与青年两条线交错，正是靠麦子完成缝合。人物维度要抓住小说最动人的一处设置——老两口无后，而麦粒“就像刚出生的婴儿”，老婆婆对着麦粒说“哭哇哭哇”、说“我有这么多孩子”，麦子替代了子嗣，成为其生命力与情感的寄托，答此点须点出这一对照才算深入。主题维度则要把“种麦”与“守土”打通：他们守的是“祖国边疆”，种下的每一粒麦都是国土的印记，故物象最终指向家国。三点由表及里，层层递进。",
              diff: "hard"
            }
          ]
        },
        {
          q: "【小说】江上【注】\n冯至\n\n子胥望着昭关以外的山水，世界好像换了一件新的衣裳，他自己却真实地获得了真实的生命。时节正是晚秋，眼前还是一片绿色，夏天仿佛还没有结束。向南望去，是一片人烟稀少的平原。\n\n他在这荒凉的原野里走了三四天，后来原野渐渐变成田畴，村落也随着出现了，子胥穿过几个村落，最后到了江边。\n\n太阳已经西斜，岸上三三两两集聚了十来个人：有的操着吴音，有的说着楚语。有人在抱怨，二十年来，这一带总是打过来打过去，弄得田也不好耕，买卖也不好做。一个上了年纪的人说：“前几年吴王余昧死了，本应该传位给季札，但是季札死也不肯接受，退到延陵耕田去了。一个这样贤明的人偏偏不肯就王位，要保持他的高洁。”\n\n“他只自己保持高洁，而一般人都还在水火里过日子，——我恨这样的人，我们都是吃了他高洁的苦。”一个年轻人愤恨地说。\n\n那老年人却谅解季札：“士各有志。他用行为感动我们，不是比做国王有意义得多吗？——就以他在徐君墓旁挂剑的那件事而论，对于友情是怎样好的一幅画图！”\n\n季札在死友墓旁挂剑的事，子胥从前也若有所闻，他再低下头看一看自己佩着的剑，不觉起了一个愿望：“我这时若有一个朋友，我也愿意把我的剑，当作一个友情的赠品，——而我永久只是一个人。”子胥这样想时，也就和那些人的谈话隔远了，江水里的云影在变幻，他又回到他自己身上。这时江水的上游忽然浮下一只渔船，船上回环不断地唱着歌：\n\n日月昭昭乎浸已驰，与子期乎芦之漪。\n\n面前的景色，自己的身世，日月昭昭乎浸已驰，是怎样感动子胥的心！他听着歌声，身不由己地向芦苇丛中走去。\n\n西沉的太阳把芦花染成金色，半圆的月也显露在天空，映入江心，是江里边永久捉不到的一块宝石。渔夫的歌声又起了：\n\n日已夕兮予心忧悲，月已驰兮何不渡为？\n\n歌声越唱越近，渔舟在芦苇旁停住了。子胥身不由己地上了船。\n\n多少天的风尘仆仆，一走上船，呼吸着水上清新的空气，立即感到水的温柔。子胥无言，渔夫无语，耳边只有和谐的橹声，以及水上的泡沫随起随灭的声音。船到江中央，水流变得急骤了，世界回到原始一般地宁静。子胥对着这滔滔不断的流水，他想这是从郢城那里流来的。他立在船头，身影映在水里，好像又回到郢城，因为那里的楼台也曾照映在这同一的水里。他望着江水发呆，不知这里边含有多少故乡流离失所的人的眼泪。父亲的、哥哥的尸体无人埋葬，也许早已被人抛入江心；他们得不到祭享的魂灵，想必正在这月夜的江上出没。郢城里的王公们都还在享受眼前的升平，谁知道这时正有一个人在遥远的江上，想把那污秽的城市洗刷一次呢。子胥的心随着月光膨胀起来……\n\n他再看那渔夫有时抬起头望望远方，有时低下头看看江水，心境是多么平坦。子胥在他眼里是怎样一个人呢？一个不知从何处来，又不知向哪里去的远方的行人罢了。但是子胥，却觉得这渔夫是他流亡以来所遇到的唯一的恩人，这引渡的恩惠有多么博大，尤其是那两首歌，是如何正恰中子胥的运命，怕只有最亲密的朋友才唱得出这样深切感人的歌词，而这歌词却又吐自一个异乡的、素不相识的人的口里。\n\n船缓缓地前进着。两人在两个完全不同的世界，一个整日整夜浸在血的仇恨里，一个疏散于清淡的云水之乡。他看那渔夫摇橹的姿态，他享受到一些从来不曾体验过的柔情。往日的心总是箭一般地急，这时却唯恐把这段江水渡完，希望能多么久便多么久，与渔夫共同领会这美好的时刻。\n\n船靠岸了，子胥口里有些嗫嚅，但他最后不得不开口：“朋友。我把什么留给你作纪念呢？”渔夫倒有些惊奇了。\n\n这时子胥已经解下他的剑，捧在渔夫的面前。\n\n渔夫吓得倒退了两步，他说：“我，江上的人，要这有什么用呢？”\n\n“这是我家传的宝物，我佩带它将及十年了。”\n\n“你要拿这当作报酬吗？”渔夫的生活是有限的，他常常看见有些行人，不知为什么离乡背井要走得那么远。既然远行，山水就成为他们的阻碍；他看惯了走到江边过不来的行人，是多么苦恼！他于是立下志愿，只要一有闲暇，就把那样的人顺便渡过来。因为他引渡的时候多半在晚间，所以就即景生情，唱出那样的歌曲。“这值得什么报酬呢？”\n\n子胥半吞半吐地说：“你渡我过了江，同时也渡过了我的仇恨。将来说不定会有那么一天，你再渡我回去。”渔夫听了这句话，一点也不懂，他只拨转船头，向下游驶去。\n\n子胥独自立在江边，望着那只船越走越远了，最后他才自言自语地说：“你这无名的朋友，我现在空空地让你在我的面前消逝了，将来我却还要寻找你，不管是找到你的船，或是你的坟墓。”\n\n他再一看他手中的剑，觉得这剑已经不是他自己的了：他好像是在替一个永久难忘的朋友保留着这支剑。\n\n（有删改）\n\n［注］历史小说《伍子胥》写于1942—1943年，取材于春秋时期伍子胥的复仇故事，叙述他由楚至吴的辗转逃亡。小说共九节，《江上》为第六节，伍子胥过了昭关，继续跋涉，前往吴国。",
          diff: "hard", src: "2022年新高考I卷 文学类文本阅读·冯至《江上》（选自历史小说《伍子胥》第六节）",
          subs: [
            {
              q: "第6题　下列对文本相关内容和艺术特色的分析鉴赏，不正确的一项是：\nA．子胥过了昭关，所见风景与前大不相同，那大片绿色和原野，也是子胥再次“获得了真实的生命”的心情写照。\nB．“唯恐把这段江水渡完”，表现了逃亡中的子胥的心态，只有在江上的这段短暂时光，他才能够平和地欣赏风景。\nC．子胥同渔夫道别，说话时“有些嗫嚅”“半吞半吐”，表现的是子胥渴望同渔夫交流，又碍于隐情而无法敞开心扉。\nD．“你渡我过了江，同时也渡过了我的仇恨”，子胥在江上领会到渔夫的“世界”，他对自己的使命有了更深的理解。",
              a: "选B。“唯恐把这段江水渡完”所表现的是子胥“享受到一些从来不曾体验过的柔情”，希望这份宁静与温情延续得久一些，并非“只有在江上的这段短暂时光，他才能够平和地欣赏风景”。事实上小说开篇写他出昭关时便已“望着昭关以外的山水，世界好像换了一件新的衣裳”，可见在上船之前他也能平和地观景，B项的限定过于绝对且曲解了原意。A、C、D三项分析均正确。",
              exp: "解析：本题为综合性分析鉴赏题，B项之误在于两点：一是把“柔情的享受”误读为“欣赏风景”，偷换了心理内容；二是用“只有……才……”作排他性限定，与开篇的景物描写自相矛盾。做此类题须警惕选项中的绝对化表述（“只有”“才”“都”），并将其放回全文比对。A项抓住了情景交融——“绿色”“夏天仿佛还没有结束”是逃出生天后的心境外化；D项则把握了小说主旨的核心转折：渔夫渡的不只是“人”，更是子胥的“心”，剑由“仇恨的载体”转为“友情的纪念”，正见其对使命的重新理解。故答案为B。",
              diff: "medium"
            },
            {
              q: "第7题　关于文中江边人们谈论季札的部分，下列说法不正确的一项是：\nA．那位老人欣赏季札不就王位的高洁，也称赞他以美好的行为感动了世人。\nB．那位年轻人认为季札不顾百姓死活，只顾独善其身，逃避了济世的责任。\nC．季札挂剑一事进一步说明了他的品行，也为后文的子胥赠剑做了铺垫。\nD．季札的退耕田园，与下文渔夫的泛舟江上，共同表达出本文的隐逸主题。",
              a: "选D。本文的主题并非“隐逸”。季札退耕、渔夫泛舟在文中的功能各不相同：季札挂剑一事引发子胥对友情的渴望，为后文赠剑作铺垫；渔夫的“清淡的云水之乡”则与子胥“整日整夜浸在血的仇恨里”的世界构成对照，唤起他不曾体验过的柔情，使他重新审视仇恨与人生。二者共同指向的是对平凡人生中“友情”“恩惠”“温情”的肯定，而非归隐避世。A、B、C三项说法均正确。",
              exp: "解析：这是一道针对局部情节的理解题，D项属于典型的“标签化思维”错误——见“退耕田园”“泛舟江上”就贴“隐逸”标签，脱离了文本实际。判断主题须以文本的情感落点为准：小说结尾子胥并未归隐，他“还要寻找你，不管是找到你的船，或是你的坟墓”，复仇之路仍要继续，只是心中多了一份柔情与牵念。结合注释可知，小说写于1942—1943年抗战相持阶段，其现实寓意在于：民族苦难中不应被仇恨吞噬，要守住人性的温情，这与“隐逸”背道而驰。A项对应老年人的“士各有志”与“他用行为感动我们”；B项对应年轻人的“我恨这样的人，我们都是吃了他高洁的苦”；C项指出“挂剑”的铺垫作用，均能在文中落实。故答案为D。",
              diff: "medium"
            },
            {
              q: "第8题　舟行江上，子胥的思绪随着他在江上的所见所感而逐步生发展开。请结合文中相关部分简要分析。（6分）",
              a: "①子胥登上渔船，清新的空气、和谐的橹声等都使他感到安宁。“呼吸着水上清新的空气，立即感到水的温柔”，“子胥无言，渔夫无语”，多日风尘仆仆的紧张就此松弛下来。\n②船到江中央，月涌江流，子胥的思绪随着江水奔涌，复仇的情绪渐趋激昂。他由这滔滔江水想到郢城，想到父兄暴尸无人埋葬的魂灵，想到王公们仍在享受升平，“想把那污秽的城市洗刷一次”，“子胥的心随着月光膨胀起来”。\n③渔船缓缓前行，子胥观察摇橹的渔夫，体会渔夫的世界，感念渔夫的恩惠，享受到不曾体验过的柔情。他看渔夫“心境是多么平坦”，觉得这是“流亡以来所遇到的唯一的恩人”，于是“唯恐把这段江水渡完”。",
              exp: "解析：本题考查对人物心理流程的梳理，关键在于审清题干中“舟行江上”这一范围限定——只答子胥上船之后至靠岸之前的思绪，若从出昭关答起便超出范围。答题应以船的位置为线索划分层次，形成“上船—江中央—缓缓前行”三个阶段，并注意文中“望”“看”等领起性动词的提示作用：由“感到”（安宁）到“望着江水发呆”（激愤）再到“他再看那渔夫”（柔情），景随船移，情随景转。三个阶段的情绪构成“宁静—激昂—柔情”的起伏曲线，正是冯至以诗化笔法写心理波澜的典型手法。作答须“所见”与“所感”配对呈现，避免只罗列心情而无文本依据。",
              diff: "hard"
            },
            {
              q: "第9题　渔夫拒剑是一段广为流传的历史故事，渔夫是一位义士，明知伍子胥身份而冒死救他渡江，拒剑之后，更为了消除伍子胥的疑虑而自尽。本文将渔夫改写为一个普通渔人，这一改写带来了怎样的文学效果？谈谈你的理解。（6分）",
              a: "①把渔夫改为无意施恩的普通人，更显出平凡人“恩惠”的博大。他并不知道子胥的身份，渡人只是“一有闲暇”的顺便之举，恰因不图回报而愈见其善的自然与厚重。\n②借渔夫来书写一个散淡处世的境界，与伍子胥的“复仇”世界构成对比。“一个整日整夜浸在血的仇恨里，一个疏散于清淡的云水之乡”，两个世界互相映照。\n③放弃描述惊险的外部冲突，转向探究人物的内心冲突。不再写冒死相救与拒剑自尽的紧张情节，而以大量笔墨细描子胥的心理波动与精神成长。\n④使故事的传奇色彩有所减弱，而现实寓意则有所增强。小说写于抗战时期，渔夫与子胥代表两种人生态度与道路选择，改写后更贴近普通人的生活现实，引人思考。",
              exp: "解析：这是一道颇具开放性的“改写效果”探究题，作答的方法是先做原故事与改写本的对比，再从小说诸要素——人物形象、情节结构、主题意蕴、阅读效果——分别衡量其“文学效果”。对比可列为：义士（知其身份／冒死相救／拒剑自刎／传奇色彩）对普通渔人（不知其人／见人渡人／不解其意／日常本色）。由此四点顺次生成：人物层面，平凡见博大；结构层面，双世界对照；叙事层面，外部冲突内转为心理冲突；主题层面，传奇性减弱而现实寓意增强。第四点须结合注释中的创作年代（1942—1943年）来谈，方能触及冯至借历史写现实的深意——民族苦难之中，比复仇更持久的力量是人性的温情与善意。答题时忌只作故事复述，须每一点都落到“文学效果”上。",
              diff: "hard"
            }
          ]
        }
      ],
  'chinese::wyw':   [
    {
      "q": "【材料】唐高祖武德九年秋八月甲子，太宗即皇帝位于东宫显德殿。初上皇欲强宗室以镇天下故皇再从三从弟及兄弟之子虽童孺皆为王王者数十人上从容问群臣遍封宗子于天下利乎封德彝对曰：“上皇敦睦九族，大封宗室，自两汉以来未有如今之多者。爵命既崇，多给力役，恐非示天下以至公也。”上曰：“然。朕为天子，所以养百姓也，岂可劳百姓以养己之宗族乎！”十一月庚寅，降宗室郡王皆为县公，惟有功者数人不降。\n上与群臣论止盗。或请重法以禁之，上哂之曰：“民之所以为盗者，由赋繁役重，官吏贪求，饥寒切身，故不暇顾廉耻耳。朕当去奢省费，轻徭薄赋，选用廉吏，使民衣食有余，则自不为盗，安用重法邪！”自是数年之后，海内升平，路不拾遗，外户不闭，商旅野宿焉。\n上闻景州录事参军张玄素名，召见，问以政道。对曰：“隋主好自专庶务，不任群臣，群臣恐惧，唯知禀受奉行而已，莫之敢违。以一人之智决天下之务，借使得失相半，乖谬已多，下谀上蔽，不亡何待！陛下诚能谨择群臣而分任以事，高拱穆清而考其成败，以施刑赏，何忧不治！”上善其言，擢为侍御史。\n上患吏多受赇，密使左右试赂之。有司门令史受绢一匹，上欲杀之，民部尚书裴矩谏曰：“为吏受赂，罪诚当死。但陛下使人遗之而受，乃陷人于法也，恐非所谓‘道之以德，齐之以礼’。”上悦，召文武五品已上告之曰：“裴矩能当官力争，不为面从，傥每事皆然，何忧不治？”\n臣光曰：古人有言：“君明臣直。”裴矩佞于隋而忠于唐，非其性之有变也，君恶闻其过则忠化为佞，君乐闻直言则佞化为忠。是知君者表也，臣者景也，表动则景随矣。\n（节选自《通鉴纪事本末·贞观君臣论治》）\n【注】加点词语：甲子、宗室、海内、庶务。画横线句：①上患吏多受赇，密使左右试赂之。②君恶闻其过则忠化为佞，君乐闻直言则佞化为忠。",
      "diff": "medium",
      "src": "2021年新高考Ⅰ卷 文言文阅读（《通鉴纪事本末·贞观君臣论治》）",
      "subs": [
        {
          "q": "下列对文中画波浪线部分的断句，正确的一项是（3分）",
          "opts": [
            "A. 初/上皇欲强宗室/以镇天下故皇/再从三从弟及兄弟之子/虽童孺皆为王/王者数十人/上从容问群臣/遍封宗子于天下利乎/",
            "B. 初/上皇欲强宗室以镇天下/故皇再从三从弟及兄弟之子/虽童孺皆为王/王者数十人/上从容问群臣/遍封宗子/于天下利乎/",
            "C. 初/上皇欲强宗室以镇天下/故皇再从三从弟及兄弟之子虽童孺/皆为王/王者数十人/上从容问群臣/遍封宗子于天下/利乎/",
            "D. 初/上皇欲强宗室/以镇天下故皇/再从三从弟及兄弟之子虽童孺/皆为王/王者数十人/上从容问群臣/遍封宗子于天下/利乎/"
          ],
          "a": "B",
          "exp": "“强宗室”是“镇天下”的目的，二者构成目的关系，中间不能断开，且“故”是表结果的连词，须领起下句、其前断开，据此排除A、D两项。“虽”作连词常居句首，应在“虽”前断开，“虽童孺皆为王”语意完整；“遍封宗子”中“宗子”作宾语，其后断开，“于天下利乎”是承前省略主语的疑问句，独立成句，据此排除C。全句意为：起初，高祖想以加强皇室宗族的力量来威镇天下，所以与皇帝同曾祖、同高祖的远房堂兄弟及其儿子，即使童孺幼子均封为王，达数十人。太宗从容地征求群臣意见：“遍封皇族子弟为王，对天下有利吗？”故选B。",
          "diff": "medium"
        },
        {
          "q": "下列对文中加点词语的相关内容的解说，不正确的一项是（3分）",
          "opts": [
            "A. 甲子，甲为天干首位，子为地支首位，干支相配以纪年月日，文中是纪日。",
            "B. 宗室，是古代社会中对与君主同一宗族血亲的称谓，历代皇族例称为宗室。",
            "C. 海内，即国内，古人认为我国疆土四面环绕着大海，故称国境之内为海内。",
            "D. 庶务，指国家的各种政务，后来专指朝堂之上跟军国大事相关的各种急务。"
          ],
          "a": "D",
          "exp": "D项“后来专指朝堂之上跟军国大事相关的各种急务”表述错误。“庶务”即国家的各种政务（与“庶政”同义），也可指经办这些事务的人员，并没有窄化为“军国大事的急务”；文中“隋主好自专庶务”正指隋主事无巨细都要独揽，可反证其为“各种日常政务”。A项“甲子”在“武德九年秋八月甲子”中用于纪日，正确；B项“宗室”指与君主同宗族的血亲，与《荆轲刺秦王》“父母宗族”用法相通，正确；C项“海内”指国境之内，与“海内存知己”同义，正确。故选D。",
          "diff": "medium"
        },
        {
          "q": "下列对原文有关内容的概述，不正确的一项是（3分）",
          "opts": [
            "A. 唐太宗赞同封德彝的意见，认为天子应该养育百姓，不应辛劳百姓以养活自己宗族，于是将有功者之外的宗室郡王全都降格为县公。",
            "B. 在讨论制止偷盗一事时，有人提出用重法治理，唐太宗认为应减轻赋税，选用清官，使百姓衣食无忧，严刑峻法反而不能达到目的。",
            "C. 唐太宗向张玄素询问政事，张说隋亡在于君王专权，以致下谀上蔽，若君王能分任贤能之臣，考核成败，赏罚分明，一定能够大治。",
            "D. 裴矩是隋朝的旧臣，进入唐朝后，忠于国事，不做面从之臣，敢于进言，对唐太宗的不当行为谏诤，受到唐太宗的认可和当众表扬。"
          ],
          "a": "B",
          "exp": "B项“严刑峻法反而不能达到目的”属无中生有、曲解文意。原文太宗只说“安用重法邪”，意为“哪里用得着重法”，强调的是治本之策（去奢省费、轻徭薄赋、选用廉吏）比重法更根本，并未否定严刑峻法的效力。A项对应“朕为天子，所以养百姓也”“降宗室郡王皆为县公，惟有功者数人不降”，无误；C项对应张玄素“隋主好自专庶务……陛下诚能谨择群臣而分任以事……何忧不治”，无误；D项对应裴矩谏诤及太宗“召文武五品已上告之”，无误。故选B。",
          "diff": "medium"
        },
        {
          "q": "把文中画横线的句子翻译成现代汉语。（8分）\n（1）上患吏多受赇，密使左右试赂之。\n（2）君恶闻其过则忠化为佞，君乐闻直言则佞化为忠。",
          "a": "（1）皇上（唐太宗）担心官吏中多有接受贿赂的，暗中派身边的人去贿赂他们以进行试探。\n（2）君主厌恶听到自己的过错，那么忠臣就会变成佞臣；君主喜欢听到正直的言论，那么佞臣就会变成忠臣。",
          "exp": "第（1）句译出大意给2分，采分点“患”“密”各1分：“患”是“担心、忧虑”，“赇”即贿赂（名词，指赃款赃物），“密”是“暗中、秘密地”，“左右”是“身边的人”，“试赂之”为“用行贿的方式试探他们”。第（2）句译出大意给2分，采分点“恶”“佞”各1分：“恶”读wù，意为“厌恶、讨厌”；“过”指“过错、缺点”；“佞”指“谄媚、奸伪之臣”；两个分句结构对称，须译出“忠—佞”的相互转化关系。翻译时注意“化为”不可漏译，且句式的对举关系要在译文中保留。",
          "diff": "hard"
        }
      ]
    },
    {
      "q": "【材料】秦将伐魏。魏王闻之，夜见孟尝君，告之曰：“秦且攻魏，子为寡人谋，奈何？”孟尝君曰：“有诸侯之救，则国可存也。”王曰：“寡人愿子之行也！”重为之约车百乘。\n孟尝君之赵，谓赵王曰：“文愿借兵以救魏。”赵王曰：“寡人不能。”孟尝君曰：“夫敢借兵者，以忠王也。”王曰：“可得闻乎？”孟尝君曰：“夫赵之兵非能强于魏之兵，魏之兵非能弱于赵也。然而赵之地不岁危，而民不岁死；而魏之地岁危而民岁死者，何也？以其西为赵蔽也。今赵不救魏魏歃盟于秦是赵与强秦为界也地亦且岁危民亦且岁死矣此文之所以忠于大王也”赵王许诺，为起兵十万，车三百乘。\n又北见燕王曰：“今秦且攻魏，愿大王之救之。”燕王曰：“吾岁不熟二年矣，今又行数千里而以助魏，且奈何？”田文曰：“夫行数千里而救人者，此国之利也。今魏王出国门而望见军，虽欲行数千里而助人，可得乎？”燕王尚未许也。田文曰：“臣效便计于王，王不用臣之忠计，文请行矣。恐天下之将有大变也。”王曰：“大变可得闻乎？”曰：“燕不救魏，魏王折节割地，以国之半与秦，秦必去矣。秦已去魏，魏王悉韩、魏之兵，又西借秦兵，以因赵之众，以四国攻燕，王且何利？利行数千里而助人乎？利出燕南门而望见军乎？则道里近而输又易矣，王何利？”燕王曰：“子行矣，寡人听子。”乃为之起兵八万，车二百乘，以从田文。\n魏王大说曰：“君得燕、赵之兵甚众且亟矣。”秦王大恐，割地请讲于魏。因归燕、赵之兵，而封田文。\n（节选自《战国策·魏策三》）\n【注】加点词语：寡人、百乘、为赵蔽、国门。画横线句：①吾岁不熟二年矣，今又行数千里而以助魏，且奈何？②燕不救魏，魏王折节割地，以国之半与秦，秦必去矣。",
      "diff": "medium",
      "src": "2022年新高考Ⅰ卷 文言文阅读（《战国策·魏策三》“秦将伐魏”）",
      "subs": [
        {
          "q": "下列对文中画波浪线部分的断句，正确的一项是（3分）",
          "opts": [
            "A. 今赵不救魏/魏歃盟/于秦是赵与强秦为界也/地亦且岁危/民亦且岁死矣/此文之所以忠于大王也/",
            "B. 今赵不救魏/魏歃盟于秦/是赵与强秦为界也/地亦且岁危/民亦且岁死矣/此文之所/以忠于大王也/",
            "C. 今赵不救魏/魏歃盟于秦/是赵与强秦为界也/地亦且岁危/民亦且岁死矣/此文之所以忠于大王也/",
            "D. 今赵不救魏/魏歃盟/于秦是赵与强秦为界也/地亦且岁危/民亦且岁死矣/此文之所/以忠于大王也/"
          ],
          "a": "C",
          "exp": "“魏歃盟于秦”是状语后置句，“于秦”作“歃盟”的后置状语，语意完整，中间不可断开，据此排除A、D两项。“此文之所以忠于大王也”是“此……也”式判断句，“所以”是表原因的固定结构，不能拆开成“此文之所/以忠于大王也”，据此排除B项。全句意为：现在赵国不救援魏国，魏国就会同秦国歃血结盟，这样赵国就等于直接与强秦为邻，土地也将年年受到威胁，百姓也将年年死伤。这就是我忠于大王的表现。故选C。",
          "diff": "medium"
        },
        {
          "q": "下列对文中加点的词语及相关内容的解说，不正确的一项是（3分）",
          "opts": [
            "A. 寡人意为寡德之人，在文中是魏王自称，春秋战国时期君主常如此谦称自己。",
            "B. 百乘即一百辆兵车，“乘”指四马一车。“百乘”“千乘”常用作兵力的代称。",
            "C. 为赵蔽的“蔽”指屏障，与《邹忌讽齐王纳谏》中“王之蔽”的“蔽”相同。",
            "D. 国门，文中是实指，指魏国国都的城门；现在则用来指一个国家的边境。"
          ],
          "a": "C",
          "exp": "C项错误。“以其西为赵蔽也”的“蔽”是名词，意为“屏障”，指魏国在西面为赵国挡住秦国；而《邹忌讽齐王纳谏》“王之蔽甚矣”的“蔽”是动词，意为“受蒙蔽”，二者词性与词义均不相同。A项“寡人”为先秦君主谦称，正确；B项“乘”为四马一车，“百乘”“千乘”常代指兵力，正确；D项文中“出国门而望见军”的“国门”确指国都城门，今义则指国家边境，古今义有别，表述正确。故选C。",
          "diff": "medium"
        },
        {
          "q": "下列对原文有关内容的概述，不正确的一项是（3分）",
          "opts": [
            "A. 魏王受到强秦武力威胁之际，连夜向孟尝君问计，孟尝君表示有了诸侯的帮助，国家就可以存续下来，并表示希望替魏王出使诸侯，搬取救兵。",
            "B. 孟尝君见赵王不愿出兵，劝说赵王，指出魏国每年地危民死，而赵国土地与民众一直安全，如果不救魏，赵国将面临危险，赵王这才同意出兵。",
            "C. 孟尝君请燕王出兵救魏，燕王犹豫不决，孟尝君指出魏国倘若联合他国合力攻打燕国，将会对燕国十分不利。燕王听从了建议，出兵救助魏国。",
            "D. 孟尝君计谋得以实现，魏王非常高兴，夸奖他短时间内搬来很多援军。秦王非常恐慌，割地给魏国，魏王于是让燕、赵援军返国，封赏孟尝君。"
          ],
          "a": "A",
          "exp": "A项“并表示希望替魏王出使诸侯，搬取救兵”张冠李戴。原文是“王曰：‘寡人愿子之行也！’”，提出让孟尝君出行的是魏王，而非孟尝君主动请缨。B项对应孟尝君对赵王“赵之地不岁危，而民不岁死……以其西为赵蔽也”的说辞，无误；C项对应“魏王悉韩、魏之兵，又西借秦兵，以因赵之众，以四国攻燕”及燕王“子行矣，寡人听子”，无误；D项对应“君得燕、赵之兵甚众且亟矣”“秦王大恐，割地请讲于魏。因归燕、赵之兵，而封田文”，无误。故选A。",
          "diff": "medium"
        },
        {
          "q": "把文中画横线的句子翻译成现代汉语。（8分）\n（1）吾岁不熟二年矣，今又行数千里而以助魏，且奈何？\n（2）燕不救魏，魏王折节割地，以国之半与秦，秦必去矣。",
          "a": "（1）我国收成不好已经两年了，如今又要行军数千里去援助魏国，将怎么办呢？\n（2）如果燕国不救援魏国，魏王就会屈己下人（降低身份）割让土地，把魏国的一半送给秦国，秦国一定会撤兵离开。",
          "exp": "第（1）句译出大意给2分，采分点“岁不熟”“且”各1分：“岁”指年成、收成，“熟”指丰收、有收成，“岁不熟”即“年景不好、粮食歉收”（切忌误解为“不熟悉”）；“且”是“将、将要”，“且奈何”与《鸿门宴》“且为之奈何”同一格式，意为“将怎么办呢”。第（2）句译出大意给2分，采分点“折节”“去”各1分：“折节”意为屈己下人、降低身份（不可译为“折断符节”）；“与”是“送给、给予”；“去”是“离开、撤兵”，不能反向译成“前往攻打”，否则句意全反、整体句意分也不能得。",
          "diff": "hard"
        }
      ]
    }
  ],
  'chinese::gdsc':   [
    {
      "q": "【材料】寄江州白司马①\n[唐] 杨巨源\n江州司马平安否？惠远东林住得无②？\n湓浦曾闻似衣带，庐峰见说胜香炉。\n题诗岁晏离鸿断，望阙天遥病鹤孤。\n莫谩拘牵雨花社③，青云依旧是前途。\n【注】①江州白司马：即白居易。②惠远：东晋高僧，居庐山东林寺。③莫谩：不要。雨花社：指佛教讲经的集会。",
      "diff": "medium",
      "src": "2021年新高考Ⅰ卷 古代诗歌阅读（杨巨源《寄江州白司马》）",
      "subs": [
        {
          "q": "下列对这首诗的理解和赏析，不正确的一项是（3分）",
          "opts": [
            "A. 根据内容分析，这首诗的写作时间应该与白居易的《琵琶行》比较接近。",
            "B. 第三句使用“一衣带水”的典故，表现出朋友之间“天涯若比邻”之意。",
            "C. 第六句中的“病鹤”指的是白居易，他怀恋长安，时常遥望京城的宫阙。",
            "D. 诗人最后开解朋友，目前虽然身处贬谪之中，但未来的前途依然很远大。"
          ],
          "a": "B",
          "exp": "B项曲解诗意。“湓浦曾闻似衣带”是说诗人曾听说湓水像衣带一样又长又窄，属于对江州景物的描摹，与颔联下句“庐峰见说胜香炉”对举，都是“听说中的江州风物”，并无“一衣带水、天涯若比邻”的朋友相亲之意，属对用典的曲解。A项：白居易贬江州司马期间作《琵琶行》，本诗正寄于其贬谪之时，写作时间相近，正确；C项：“病鹤”以鹤之病困喻遭贬卧病的白居易，可与《琵琶行》“谪居卧病浔阳城”互证，“望阙”即遥望京城宫阙，正确；D项：尾联“莫谩拘牵雨花社，青云依旧是前途”正是劝慰友人不要沉溺佛事、前程仍然远大，正确。故选B。",
          "diff": "medium"
        },
        {
          "q": "前人论此诗，认为第二句已包含委婉劝告的意思，对这一观点应怎样理解？请简要分析。（6分）",
          "a": "①“劝诫”是这首诗的主旨，诗人在尾联“莫谩拘牵雨花社，青云依旧是前途”中点明此旨，劝白居易不要沉迷于佛事宗教、消磨志气，要对人生前途充满信心。②第二句“惠远东林住得无”在问候中特意提到东晋高僧惠远和庐山东林寺，用高僧遁世的典故，以问句形式含蓄地表达对友人出入佛寺的关切与提醒，为尾联正面劝诫作了铺垫，故说第二句已含委婉劝告之意。",
          "exp": "答题思路：题干“已包含委婉劝告”已给出方向，需要（1）指出全诗的劝诫主旨落在何处，（2）说明第二句用什么手法、如何含蓄地传达劝告。首联下句借“惠远”“东林”这两个与佛门相关的意象发问，表面是问“住得惯吗”，实则暗含“不要久滞佛门”的规劝；用问句而不用断语，正体现“委婉”二字。再与尾联“莫谩”“青云依旧”的直接劝勉形成由隐到显、前后照应的结构，答案须兼顾“第二句的含蓄劝告”与“尾联的明确劝勉”两个层次，才能拿满6分。",
          "diff": "hard"
        }
      ]
    },
    {
      "q": "【材料】画眉鸟\n[宋] 欧阳修\n百啭千声随意移，山花红紫树高低。\n始知锁向金笼听，不及林间自在啼。\n\n画眉禽\n[宋] 文同\n尽日闲窗生好风，一声初听下高笼。\n公庭事简人皆散，如在千岩万壑中。",
      "diff": "medium",
      "src": "2022年全国甲卷 古代诗歌阅读（欧阳修《画眉鸟》、文同《画眉禽》）",
      "subs": [
        {
          "q": "下列对这两首诗的理解和赏析，不正确的一项是（3分）",
          "opts": [
            "A. 欧诗和文诗题目大体相同，都是以画眉鸟作为直接描写对象的咏物诗。",
            "B. 欧诗所写的画眉鸟在花木间自由飞行，文诗中的画眉鸟则在笼中饲养。",
            "C. 欧诗认为鸟笼内外的画眉鸟，其鸣叫声有差别，而文诗对此并未涉及。",
            "D. 欧诗中的“林间”与文诗中的“千岩万壑”具有大致相同的文化含意。"
          ],
          "a": "A",
          "exp": "A项“都是以画眉鸟作为直接描写对象的咏物诗”说法错误。欧诗写画眉鸟“百啭千声随意移”“山花红紫树高低”，正面描摹其自由飞鸣之态，是典型的托物言志咏物诗；而文诗只写“一声初听下高笼”，借鸟声侧面烘托公务清简后的闲适心境，画眉并非直接描写对象，全诗也不属咏物诗。B项由“林间”“山花红紫”与“高笼”可分别推知两鸟处境，正确；C项欧诗以“金笼”与“林间”鸣声对比，文诗只写听觉感受的变化、未比较笼内外鸟声，正确；D项“林间”与“千岩万壑”都指向摆脱尘务、归隐山林的意趣，文化含意大致相同，正确。故选A。",
          "diff": "medium"
        },
        {
          "q": "这两首诗中，画眉鸟所起的作用并不相同。请简要分析。（6分）",
          "a": "①欧诗中的画眉鸟寄托了诗人的感情，诗歌表面上是写鸟，实际上是写人，通过林间自在啼与锁向金笼听的对比，表达了诗人对自由生活的向往和追求（挣脱羁绊、归隐山林之意）。②文诗中画眉鸟的鸣叫声烘托出轻松的气氛，使诗人有如置身千岩万壑，有助于表现诗人在公务闲暇时悠然自得的状态。",
          "exp": "答题思路：本题考查鉴赏诗歌事物形象的作用，须分别定位两诗中“画眉”的功能。欧诗以画眉为直接描写对象，用“金笼”与“林间”两种环境下鸣声的优劣作对比，托物言志，鸟即是人，落点在“向往自由”；文诗以画眉为陪衬，只取其“一声”作听觉媒介，借“公庭事简人皆散”后听声如在山谷的错觉，渲染气氛、烘托人物，落点在“悠然自得”。作答时要点明“寄托情感（托物言志）”与“烘托气氛（侧面衬托）”这两种不同作用，每点3分，意思对即可。",
          "diff": "hard"
        }
      ]
    }
  ],
  'chinese::szxs':   [
    {
      "q": "下列词语中，加点字的读音全都正确的一组是（3分）",
      "opts": [
        "A. 寂寥(liáo)／雾霾(mái)／瞋(chēng)目／潜(qián)移默化",
        "B. 氛(fēn)围／吝啬(sè)／熹(xī)微／束(shù)之高阁",
        "C. 发酵(jiào)／徘徊(huái)／滂(pāng)沱／叱咤(chà)风云",
        "D. 模(mó)板／怯(qiè)懦／签(qiān)署／断壁颓垣(yuán)"
      ],
      "a": "B",
      "exp": "B项四处注音全部正确：“氛围”读fēn wéi（“氛”只有fēn一个读音，常被误读为fèn），“吝啬”读lìn sè，“熹微”读xī wēi，“束之高阁”读shù。A项“瞋目”的“瞋”应读chēn，意为发怒时睁大眼睛，不读chēng。C项“叱咤风云”的“咤”应读zhà，不读chà。D项“模板”的“模”是多音字，指板状器具时应读mú，读mó时用于“模范”“模型”等。故选B。",
      "diff": "medium",
      "src": "2015年高考语文天津卷 第1题（语言文字运用·字音）"
    },
    {
      "q": "下列词语中，加点字的字音和字形全都正确的一项是（3分）",
      "opts": [
        "A. 追溯(sù)／隽(jùn)永／忙不迭(dié)／返璞(pú)归真",
        "B. 信笺(qiān)／洗漱(shù)／一溜(liù)烟／恪(kè)守不渝",
        "C. 收敛(liǎn)／蕴藉(jiè)／一刹(chà)那／敷衍塞(sè)责",
        "D. 整饬(chì)／框(kuàng)架／肇(zhào)事者／心无旁鹜(wù)"
      ],
      "a": "C",
      "exp": "C项字音字形均无误：“收敛”读liǎn，“蕴藉”的“藉”表示含蓄、宽厚时读jiè，“一刹那”的“刹”读chà，“敷衍塞责”的“塞”读sè（意为搪塞、应付）。A项“隽永”的“隽”应读juàn，指意味深长；读jùn时用于“隽秀”。B项“信笺”的“笺”应读jiān，不读qiān。D项存在字形错误，“心无旁鹜”应写作“心无旁骛”，“骛”意为纵横奔驰、追求，“鹜”是野鸭，二者不可混用。故选C。",
      "diff": "medium",
      "src": "2017年高考语文天津卷 第1题（语言文字运用·字音字形）"
    }
  ],
  'chinese::cybx':   [
    {
      "q": "阅读下面的文字，完成题目。\n在中国各种艺术形式中，篆刻是一个______的门类。篆刻是从实用印章的应用中发展而来的……明清时期，众多______的艺术家在篆刻上融入了对汉字形体的研究和理解，再加上他们对印面布局的精心设计，对各种刀法的熟练掌握，篆刻艺术迅速走向成熟并孕育出______的流派风格。篆刻艺术的发展及成就，使印章成为与中国画、中国书法紧密结合的艺术形式，同时也是中国画和书法作品中______的组成部分。\n依次填入文中横线上的词语，全都恰当的一项是（3分）",
      "opts": [
        "A. 别具匠心　才思敏捷　异彩纷呈　弥足珍贵",
        "B. 别具匠心　才华横溢　奇光异彩　不可或缺",
        "C. 十分独特　才华横溢　异彩纷呈　不可或缺",
        "D. 十分独特　才思敏捷　奇光异彩　弥足珍贵"
      ],
      "a": "C",
      "exp": "第一空修饰“门类”，强调篆刻这一艺术门类独一无二、与众不同，应选“十分独特”；“别具匠心”指构思巧妙、有创造性，用于技艺或作品的巧思，不能修饰“门类”。第二空修饰“艺术家”，下文说他们研究汉字形体、精心设计布局，强调才华，应选“才华横溢”；“才思敏捷”侧重思维反应快。第三空作定语修饰“流派风格”，“异彩纷呈”比喻突出的成就或表现纷纷显现，合乎语境；“奇光异彩”是名词性成语，一般不作定语。第四空强调篆刻是书画作品中不能缺少的部分，应选“不可或缺”；“弥足珍贵”只强调珍贵，未体现必需性。故选C。",
      "diff": "medium",
      "src": "2020年高考语文全国Ⅰ卷 第17题（语言文字运用）"
    },
    {
      "q": "阅读下面的文字，完成题目。\n有人说，互联网虽然实现了我们的一个古老梦想，把远在天涯的人变得______，但与此同时也可能恰好相反，把身边的人变得如在天涯……对线上虚拟世界的担心，并非______。……实际上，线上与线下之间的界限也不是那么______。……“虚拟”与“现实”早已是你中有我，我中有你。现实世界为虚拟生活______地提供养料，虚拟生活又能激发和充实现实世界的活力。\n依次填入文中横线上的词语，全都恰当的一项是（3分）",
      "opts": [
        "A. 近在咫尺　杞人忧天　泾渭分明　源源不断",
        "B. 触手可及　空穴来风　泾渭分明　取之不尽",
        "C. 近在咫尺　空穴来风　非此即彼　源源不断",
        "D. 触手可及　杞人忧天　非此即彼　取之不尽"
      ],
      "a": "A",
      "exp": "第一空与前文“远在天涯”相对，形容距离极近而非实指伸手可触，应选“近在咫尺”；“触手可及”强调一伸手就能接触到，是实指。第二空说这种担心“并非”多余，“杞人忧天”比喻毫无必要的忧虑，符合语境；“空穴来风”现多指消息传闻毫无根据，与“担心”不搭配。第三空说线上线下界限模糊，下文有“你中有我，我中有你”，故应用表示界限清楚的“泾渭分明”加以否定；“非此即彼”指非此即彼的二选一关系，不合。第四空后有结构助词“地”，需能作状语，“源源不断”可作状语修饰“提供”，而“取之不尽”一般作谓语或定语。故选A。",
      "diff": "medium",
      "src": "2021年高考语文全国乙卷 第17题（语言文字运用）"
    }
  ],
  'chinese::bjxg':   [
    {
      "q": "阅读下面的文字，完成题目。\n篆刻是从实用印章的应用中发展而来的……唐宋以后，由于文人士大夫参与到印章的创作中，使这门从前主要由工匠承揽的技艺，增加了人文意味。印章不再局限于用来昭示身份与权力，而是通过镌刻人名字号、斋馆名称、成语警句等来表达情趣志向。\n文中画横线的句子有语病，下列修改最恰当的一项是（3分）",
      "opts": [
        "A. 由于文人士大夫参与到印章的创作中，使这门从前主要由工匠传承的技艺，增加了人文意味",
        "B. 由于文人士大夫参与到印章的创作中，这门从前主要由工匠承揽的技艺，增加了人文意味",
        "C. 文人士大夫参与到印章的创作中，使这门从前主要由工匠承揽的技艺，增加了人文意味",
        "D. 文人士大夫参与到印章的创作中，使这门从前主要由工匠传承的技艺，增加了人文意味"
      ],
      "a": "D",
      "exp": "原句有两处语病：一是“由于……使……”两个虚词连用，滥用介词导致主语残缺（成分残缺），应删去“由于”或删去“使”；二是“工匠承揽的技艺”搭配不当，“承揽”指承接招揽业务，与“技艺”不搭配，应改为“传承”。A项保留“由于……使……”，主语仍然残缺，且只改了搭配。B项删去“使”解决了主语问题，但“承揽的技艺”搭配不当未改。C项删去“由于”，但仍是“承揽的技艺”，搭配不当未改。只有D项两处毛病都得到修改。故选D。",
      "diff": "medium",
      "src": "2020年高考语文全国Ⅰ卷 第18题（语言文字运用·病句修改）"
    },
    {
      "q": "阅读下面的文字，完成题目。\n研究发现，互联网中的社交关系大多是通过“上传”线下的好友形成的，是现实社交的延续。从空间角度来讲，互联网有助于我们维系远距离的线下关系；从时间角度来看，媒介化创造了一种广泛的双向即时互动。空间和时间由于不断压缩，大大增强了互动性，社会交往效率有助于得到显著提高。\n文中画波浪线的句子有语病，下列修改最恰当的一项是（3分）",
      "opts": [
        "A. 由于空间和时间不断压缩，大大增强了互动性，有助于社会交往效率显著提高。",
        "B. 空间和时间由于不断压缩，互动性大大增强，社会交往效率得到显著提高。",
        "C. 空间和时间由于不断压缩，大大增强了互动性，社会交往效率得到显著提高。",
        "D. 空间和时间由于不断压缩，互动性大大增强，有助于社会交往效率显著提高。"
      ],
      "a": "B",
      "exp": "原句有两处语病：一是“空间和时间由于不断压缩，大大增强了互动性”搭配不当，句子主干成了“空间和时间增强了互动性”，应改为“互动性大大增强”；二是“社会交往效率有助于得到显著提高”句式杂糅，把“……得到显著提高”和“有助于……提高”两种说法混在一起，应改为“社会交往效率得到显著提高”。A项把“由于”提到主语前，前后分句主语一致时关联词应放在主语之后，位置不当，且仍留“有助于”。C项“空间和时间……增强了互动性”搭配不当未改。D项“有助于……显著提高”仍是句式杂糅。只有B项两处都改对。故选B。",
      "diff": "hard",
      "src": "2021年高考语文全国乙卷 第19题（语言文字运用·病句修改）"
    }
  ],
  'chinese::yjsx':   [
    {
      "q": "阅读下面的文字，完成题目。\n研究发现，互联网中的社交关系大多是通过“上传”线下的好友形成的，是现实社交的延续。从空间角度来讲，互联网有助于我们维系远距离的线下关系；从时间角度来看，媒介化创造了一种广泛的双向即时互动。空间和时间不断压缩，互动性大大增强，社会交往效率得到显著提高。（　　）。“虚拟”与“现实”早已是你中有我，我中有你。现实世界为虚拟生活源源不断地提供养料，虚拟生活又能激发和充实现实世界的活力。\n下列填入文中括号内的语句，衔接最恰当的一项是（3分）",
      "opts": [
        "A. 社会交往是如此，我们工作和生活的其他方面也是如此",
        "B. 不但社会交往如此，而且我们工作和生活的其他方面也是如此",
        "C. 我们工作和生活的其他方面，和社会交往也是一样的",
        "D. 我们工作和生活的其他方面也是这样，除了社会交往"
      ],
      "a": "A",
      "exp": "解题关键是话题一致与由旧信息到新信息的推进。括号前一直在说“互联网中的社交关系”，即“社会交往”，所以填入的句子应以“社会交往”承前开头，再由它推及“工作和生活的其他方面”，话题由点到面，过渡自然。B项用“不但……而且”把两者并列强调，与前文只谈社会交往的语境不合；C项直接以“我们工作和生活的其他方面”开头，丢掉了与上文的衔接点，话题转换突兀；D项把“除了社会交往”置于句末，语序颠倒，逻辑不通。故选A。",
      "diff": "medium",
      "src": "2021年全国乙卷 语言文字运用Ⅰ（第18题）"
    },
    {
      "q": "阅读下面的文字，完成题目。\n风筝，是中国古人的一项重要发明，放风筝是一种人们喜闻乐见的传统活动。早期有关风筝的记载多与传递信息等军事活动有关。到唐代，风筝开始出现在文人诗歌中。宋代以后，逐渐演变成一种老少皆宜的玩具，而清明时节放风筝也成为一项普及的民俗活动。明代以后，风筝传播到世界各地，并深受各国人民喜爱。（　　），吸引着大批中外风筝专家、爱好者及游人前来观赏和竞技。\n下列填入文中括号内的语句，最恰当的一项是（3分）",
      "opts": [
        "A. 自1984年开始，迄今已经连续举办了36届山东潍坊国际风筝节",
        "B. 自1984年开始，迄今已经连续举办了36届的山东潍坊国际风筝节",
        "C. 山东潍坊自1984年开始迄今已经连续举办了36届国际风筝节",
        "D. 山东潍坊自1984年开始迄今已经连续举办了36届的国际风筝节"
      ],
      "a": "B",
      "exp": "括号后面是“，吸引着大批中外风筝专家、爱好者及游人前来观赏和竞技”，这一分句缺主语，因此填入的内容必须是以“风筝节”为中心语的名词性短语。B项有结构助词“的”，“自1984年开始，迄今已经连续举办了36届的”整体作定语修饰“山东潍坊国际风筝节”，恰好充当后文“吸引”的主语，前后句式呼应。A项没有“的”，整句变成动词性谓语，后文便无主语可依；C、D两项以“山东潍坊”作主语，会使“吸引”的主语误成潍坊而非风筝节，且D项成分杂糅、句子未完。故选B。",
      "diff": "medium",
      "src": "2020年新高考Ⅱ卷（海南卷）语言文字运用（第19题）"
    }
  ],
  'chinese::xzsf':   [
    {
      "q": "文中用“槐蝉”代指高官显贵。下列选项中，加点的词语和文中“槐蝉”所用修辞手法不同的一项是（3分）",
      "opts": [
        "A. 主人下马客在船，举酒欲饮无管弦",
        "B. 埋骨何须桑梓地，人生无处不青山",
        "C. 六军不发无奈何，宛转蛾眉马前死",
        "D. 心非木石岂无感，吞声踯躅不敢言"
      ],
      "a": "D",
      "exp": "文中“槐蝉”以事物代人，代指高官显贵，用的是借代。A项以乐器“管弦”代音乐，B项以“桑梓”代家乡，C项以“蛾眉”代杨贵妃，三项都属借代（以相关事物或特征代本体）。D项“心非木石”是把人心与木石相比，二者之间是相似关系而非相关关系，属于（否定式）比喻。借代重“相关性”，比喻重“相似性”，这是判断的关键。故与“槐蝉”修辞手法不同的是D。",
      "diff": "medium",
      "src": "2022年全国甲卷 语言文字运用Ⅱ（第21题）"
    },
    {
      "q": "文中写道：“博斯腾湖碧水连天，赛里木湖晶莹澄澈，艾比湖‘盐’装素裹，天池静卧在苍翠环绕之中……”下列句子中画波浪线的词语与文中的“苍翠”，所用的修辞手法相同的一项是（3分）",
      "opts": [
        "A. 烟花向上空冲去，下落时便洒散着满天花雨",
        "B. 鲁迅先生穿着朴素的长衫，从容地坐在西装领带们旁边",
        "C. 夏天的雨是热情洋溢的，喜欢不打招呼就前来拜访",
        "D. 微风过处，送来缕缕清香，仿佛远处高楼上渺茫的歌声似的"
      ],
      "a": "B",
      "exp": "“苍翠”本是表颜色的形容词，文中却指“苍翠的林木（山）”，以颜色特征代指事物本身，属借代。B项“西装领带们”以穿着特征代指穿西装打领带的人，同样是以特征代本体的借代，与“苍翠”一致。A项“花雨”把洒落的烟花比作雨，是比喻（借喻），本体与喻体是相似关系；C项赋予夏雨“热情洋溢”“前来拜访”等人的情态，是拟人；D项用听觉的“渺茫的歌声”写嗅觉的“清香”，是通感。故选B。",
      "diff": "medium",
      "src": "2024年全国甲卷 语言文字运用Ⅰ（第19题）"
    }
  ],
  'chinese::yylt':   [
    {
      "q": "请对下面这段新闻报道的文字进行压缩。要求保留关键信息，句子简洁流畅，不超过70个字。（5分）\n2020年“中国航天日”启动仪式于4月24日在国家航天局网站举行。备受关注的中国首次火星探测任务名称、任务标识在启动仪式上公布。中国行星探测任务被命名为“天问系列”，首次火星探测任务被命名为“天问一号”，后续行星任务将依次编号。据介绍，该名称源于屈原长诗《天问》，体现了探索自然和宇宙空间的文化传承，寓意追求科技创新永无止境。而象征“揽星九天”的任务标识，展现出中国航天开放合作的理念与态度。",
      "a": "示例：2020年“中国航天日”启动仪式4月24日在国家航天局网站举行，首次火星探测任务名称“天问一号”和象征“揽星九天”的任务标识在仪式上公布。",
      "exp": "新闻压缩以导语为主，抓住“何时、何地、何人（何事）、结果”等要素。本段可提取两层关键信息：一是仪式的时间（4月24日）、地点（国家航天局网站）和事件（2020年“中国航天日”启动仪式举行）；二是仪式上公布的两项内容（首次火星探测任务名称“天问一号”、象征“揽星九天”的任务标识）。名称的来源（源于屈原《天问》）、寓意和理念属背景性解释，可以删去。评分要点：时间、地点、事件、公布内容四个要素齐全，句子简洁通顺，不超过70字；漏要素或超字数酌情扣分。",
      "diff": "medium",
      "src": "2020年全国Ⅰ卷 语言文字运用（第21题）"
    },
    {
      "q": "请在文中画横线处补写恰当的语句，使整段文字语意完整连贯，内容贴切，逻辑严密，每处不超过10个字。（4分）\n日常生活中，我们常常会因为忘记重要信息而懊恼，幻想若是能过目不忘该多好啊！其实，我们更应该庆幸＿＿A＿＿，因为遗忘可以降低记忆带来的认知负荷，使认知系统能够更加高效地工作。而超强记忆力往往是以牺牲抽象、泛化能力为代价的。……网络时代，我们没有办法也没有必要＿＿B＿＿，毕竟互联网随时可以帮我们查阅。不过我们也不能过于依赖互联网，像互联网可以解决所有问题似的。",
      "a": "A. 自己拥有遗忘的能力（或：大脑有遗忘的能力）\nB. 记住所有的信息（或：记下大量的信息）",
      "exp": "补写要看句子位置、关联词和关键词。A处前句说“因为忘记重要信息而懊恼”，后句用“因为遗忘可以降低……认知负荷”作原因解释，可见所“庆幸”的正是“拥有遗忘的能力”，答案中必须出现“遗忘”这一关键词。B处是过渡句，后文“毕竟互联网随时可以帮我们查阅”是原因，与“没有办法也没有必要”搭配的只能是“记住所有的信息”，须含“记住”和“信息”两个要点；若答“提高记忆力”，与“没有办法也没有必要”逻辑不合，不得分。官方评分参考：每写出一处给2分，意思答对即可，字数不合要求酌情扣分。",
      "diff": "medium",
      "src": "2023年新课标Ⅰ卷 语言文字运用Ⅰ（第18题）"
    }
  ],
  'chinese::mpjj':   [
    {
      "q": "补写出下列句子中的空缺部分。（6分）\n（1）《离骚》中“＿＿＿＿＿，＿＿＿＿＿”两句对古代服饰的“上衣下裳制”有所反映。\n（2）元代戏剧家马致远的杂剧《青衫泪》根据白居易的诗《琵琶行》改编而成，剧名来自诗中的“＿＿＿＿＿，＿＿＿＿＿”两句。\n（3）在《水调歌头（明月几时有）》中，苏轼自言想要重返天上，但又有所顾虑，原因在于“＿＿＿＿＿，＿＿＿＿＿”。",
      "a": "（1）制芰荷以为衣兮，集芙蓉以为裳\n（2）座中泣下谁最多，江州司马青衫湿\n（3）又恐琼楼玉宇，高处不胜寒",
      "exp": "三句分别出自屈原《离骚》、白居易《琵琶行》和苏轼《水调歌头·明月几时有》。审题要抓提示语：“上衣下裳制”对应“衣”“裳”对举，“剧名（青衫泪）来自诗中”对应“青衫湿”，“想重返天上却有所顾虑”对应“又恐”。易错字：“芰”不可写作“芨”，“裳”不可写成“衫”；“座中”的“座”不能写作“坐”；“琼楼玉宇”的“琼”“宇”要写准，“不胜寒”的“胜”读shēng、不可写作“甚”。评分：每答对一空给1分，有错别字该空不给分。",
      "diff": "medium",
      "src": "2020年全国Ⅰ卷 名篇名句默写（第16题）"
    },
    {
      "q": "补写出下列句子中的空缺部分。（6分）\n（1）《荀子·劝学》中“＿＿＿＿＿，＿＿＿＿＿”两句，以劣马的执着为喻，强调为学必须持之以恒。\n（2）乐器在古代生活中发挥着重要作用，《诗经·周南·关雎》中写到乐器的句子是“＿＿＿＿＿”和“＿＿＿＿＿”。\n（3）自然界鸟类的啼鸣有时会引发人们的悲思愁绪，这在唐宋诗词中屡见不鲜，如“＿＿＿＿＿，＿＿＿＿＿”。",
      "a": "（1）驽马十驾，功在不舍\n（2）琴瑟友之；钟鼓乐之\n（3）本题答案开放，不唯一。示例：又闻子规啼夜月，愁空山（其他如“其间旦暮闻何物？杜鹃啼血猿哀鸣”“庄生晓梦迷蝴蝶，望帝春心托杜鹃”“江晚正愁余，山深闻鹧鸪”等均可）",
      "exp": "（1）出自《荀子·劝学》，与“骐骥一跃，不能十步”对举，以劣马坚持不懈作比，强调积累与坚持；（2）出自《诗经·周南·关雎》，“琴瑟”“钟鼓”均为古代乐器。（3）是开放性情境默写，只要所写为唐宋诗词中借鸟啼抒写悲愁的句子且书写无误即可得分。易错字：“驽”不能写成“努”或“弩”，“功在不舍”的“舍”不可写作“舍弃”的其他形近字，“琴瑟”的“瑟”、“钟鼓乐之”的“乐”要写准，“子规”不可写作“子归”。评分：每答对一空给1分，有错别字该空不给分。",
      "diff": "medium",
      "src": "2022年新高考Ⅰ卷 名篇名句默写（第17题）"
    }
  ],
  'chinese::clzw':   [
    {
      "q": "阅读下面的材料，根据要求写作。（60分）\n人们因技术发展得以更好地掌控时间，但也有人因此成了时间的仆人。\n这句话引发了你怎样的联想与思考？请写一篇文章。\n要求：选准角度，确定立意，明确文体，自拟标题；不要套作，不得抄袭；不得泄露个人信息；不少于800字。",
      "a": "立意解读：核心关键词是“技术”“时间”“人”，三者构成一组辩证关系；中心论点可定为——技术本应是人掌控时间的工具，人若丧失主体性便会沦为时间（技术）的仆人，唯有守住内心的自主与节奏，才能让技术真正为人所用。参考标题：《做时间的主人，而非技术的仆人》。\n写作提纲：（1）由材料切入，界定“掌控时间”与“成为时间的仆人”两种截然不同的生存状态，亮明观点；（2）正面立论——技术延展了人的时间效能，钟表、高铁、即时通讯把碎片时间变成可支配资源，技术是人对抗时间有限性的产物；（3）转折深化——当效率成为唯一尺度，人被日程表、待办清单、算法推送驱赶，时间被切割成焦虑的碎片，人反被工具异化；（4）辨明根源并给出出路——问题不在技术本身而在使用技术的人是否保有目的意识，提出“留白”“慢下来”“以目的驾驭手段”的具体做法，落到青年当下的学习与生活。\n可引用的素材方向：庄子“有机械者必有机事，有机事者必有机心”；梭罗《瓦尔登湖》的简朴生活实验；卓别林《摩登时代》流水线上的工人；海德格尔关于技术“座架”的思考；当代“时间管理焦虑”“倍速播放”“信息过载”“数字极简主义”等现实现象；科研工作者坐冷板凳、十年磨一剑的正面事例。",
      "exp": "审题要点在于抓住材料中的转折词“但也有人”，题目考查的是思辨而非单向歌颂技术，只谈技术进步或只谈技术危害都会失之片面。结构上建议采用“是什么—为什么—怎么办”的递进式，在第三层完成由现象到本质的追问，指出异化的根源是人放弃了对目的的思考。易错提醒：不要把文章写成技术发展史的罗列或反科技的空洞控诉，材料只给了一句话，必须自己补足具体情境与事例，否则容易通篇概念空转；同时注意“自拟标题”“明确文体”，议论文就要论点鲜明、论据充实，不要写成文体不明的抒情散文。",
      "diff": "hard",
      "src": "2023年全国甲卷 作文（人·技术·时间）"
    },
    {
      "q": "阅读下面的材料，根据要求写作。（60分）\n“本手、妙手、俗手”是围棋的三个术语。本手是指合乎棋理的正规下法；妙手是指出人意料的精妙下法；俗手是指貌似合理，而从全局看通常会受损的下法。对于初学者而言，应该从本手开始，本手的功夫扎实了，棋力才会提高。一些初学者热衷于追求妙手，而忽视更为常用的本手。本手是基础，妙手是创造。一般来说，对本手理解深刻，才可能出现妙手；否则，难免下出俗手，水平也不易提升。\n以上材料对我们颇具启示意义。请结合材料写一篇文章，体现你的感悟与思考。\n要求：选准角度，确定立意，明确文体，自拟标题；不要套作，不得抄袭；不得泄露个人信息；不少于800字。",
      "a": "立意解读：核心关键词是“本手”（基础）、“妙手”（创造）、“俗手”（急功近利的偏差）；中心论点可定为——夯实本手方能得妙手，脱离基础一味求奇必落俗手，个人成长与国家发展都须先守正而后创新。参考标题：《挽本手之弓，得妙手之箭》。\n写作提纲：（1）借围棋设喻入题，点明三者关系，提出“本手是妙手之源”的论点；（2）论“本手”之要——基础是对基本概念与规律的融通掌握，非机械重复，唯厚积方能薄发；（3）论“妙手”之生——妙手不是侥幸，而是深刻理解本手之后的水到渠成，创新永远长在传统与基本功的根系上；（4）辨“俗手”之戒——批判急功近利、投机取巧、好高骛远的心态，指出其貌似合理实则全局受损；（5）联系自身与时代作结，青年当先沉潜后腾跃。\n可引用的素材方向：《老子》“九层之台，起于累土”；《论语》“君子务本，本立而道生”；李昌镐“不得贪胜”“只胜51%”的稳健棋风；杨振宁“宁拙毋巧，宁朴毋华”；王羲之临池学书、墨池尽黑；敦煌壁画修复师与故宫文物修复的慢功夫；核心技术攻关中的基础研究与“卡脖子”问题；反面素材如“豆腐渣工程”、学术浮夸、网红速成。",
      "exp": "审题要点是抓住三个术语之间的逻辑链条——本手是基础、妙手是创造、俗手是恶果，三者必须在文中形成关联，只写“打好基础”而不提“创造”与“偏差”，立意就单薄了。结构上推荐“并列＋递进”混合：先分论本手与妙手的关系，再以俗手作反面警示，最后收束到青年成长与时代命题。易错提醒：不要通篇复述围棋知识而不作类比迁移，材料是喻体，人生、治学、治国才是本体；也不要把“妙手”简单等同于运气或投机，那是对材料的误读；行文中要至少有一处明确回扣材料原句，体现“结合材料”的要求。",
      "diff": "hard",
      "src": "2022年全国新高考Ⅰ卷 作文（本手·妙手·俗手）"
    }
  ],
  'chinese::zmbt':   [
    {
      "q": "从下面两个题目中任选一题，按要求作答。不少于700字。将题目写在答题卡上。\n（1）每个人都生活在特定的时代，每个人在特定时代中的人生道路各不相同。在同一个时代，有人慨叹生不逢时，有人只愿安分随时，有人深感生逢其时、时不我待……\n请以“论生逢其时”为题目，写一篇议论文。\n要求：论点明确，论据充实，论证合理；语言流畅，书写清晰。",
      "a": "立意解读：题眼是“论”与“生逢其时”，前者限定议论文体，后者要求辨析个人与时代的关系；中心论点可定为——时代给予每个人的境遇不可选择，但“生逢其时”与否取决于能否在自己的时代里找到位置、担起责任，是主动创造而非被动等待的结果。参考分论点：生逢其时是一种清醒的认知，是一种积极的选择，更是一种奋发的作为。\n写作提纲：（1）开篇由材料中“生不逢时”“安分随时”“生逢其时”三种态度切入，提出中心论点；（2）第一层辨“时”——时代是客观的舞台，任何时代都既有困厄也有机遇，抱怨生不逢时是把责任推给外部；（3）第二层辨“逢”——“逢”是相遇更是回应，安分随时者只是被时代裹挟，真正的“逢”需要主体的自觉；（4）第三层立“为”——生逢其时的落点是时不我待的担当，青年当把个人理想融入时代需要；（5）联系当下青年境遇作结，回扣题目。\n可引用的素材方向：孟子“天将降大任于是人也”；苏轼贬谪黄州而作《赤壁赋》，逆境中开出精神的花；张桂梅办女高、黄文秀返乡扶贫、南仁东与“中国天眼”；西南联大师生在战火中弦歌不辍；反面可用“躺平”“摆烂”“等风来”的消极心态作对照。",
      "exp": "这是命题作文，题目必须原样照抄，一字不能改，也不能自拟副标题以外的花样标题，题干中的“论”字已经明确规定必须写议论文，写成记叙文或抒情散文即为文体失误。审题关键是不能只谈“时代好”，要在“个人—时代”的双向关系中展开思辨，尤其要回应材料给出的三种人生态度，让论证有靶子。结构上建议采用递进式分论点，每段首句亮出分论点，论据古今结合、正反兼顾。易错提醒：北京卷要求不少于700字而非800字，注意书写清晰、卷面整洁，且不得透露所在区、学校及个人信息。",
      "diff": "hard",
      "src": "2021年北京卷 大作文（命题作文《论生逢其时》）"
    },
    {
      "q": "请以《站在____的门口》为题写一篇文章。（60分）\n要求：\n（1）请先将题目补充完整，并写在答题卡上，然后作文；\n（2）立意自定；\n（3）文体不限，可以记叙经历、抒发感情、发表议论、展开想象等等；\n（4）不少于800字。",
      "a": "立意解读：题眼在“站在”与“门口”。“站在”是一种驻足、临界、将入未入的状态，暗含回望与前瞻的双重视角；“门口”既可实指（母校门口、故宫门口、家门口），更宜虚写（成年的门口、理想的门口、历史的门口）。补题即立意，中心可定为——门口是人生的临界点，站立的姿态决定跨越的方向。参考补题：《站在十八岁的门口》《站在故乡的门口》《站在理想的门口》。\n写作提纲（以《站在十八岁的门口》记叙散文为例）：（1）开篇定格“站在门口”的具体场景与心理，营造临界感；（2）回望——由门内的少年时光起笔，选取两三个具体细节（母亲的白发、教室后墙的倒计时、雨夜的自行车），写出成长的重量；（3）沉思——在门槛上的犹疑与自省，写出对责任、独立、告别的理解；（4）跨越——抬脚推门，完成由怯懦到坚定的转变，以细节收束，升华“门口”的象征意义。\n可引用的素材方向：写实可取母校、老屋、书店、考场等具体场所；写虚可取青春、成人、大学、未来、传统文化等抽象概念；可化用鲁迅“世上本没有路”、汪曾祺笔下的市井烟火、史铁生《我与地坛》中在生死门口的沉思；议论方向可写“站在传统文化的门口”，谈守护与创新。",
      "exp": "半命题作文成败首先在补题：所填内容既要具体可感，又要能撑起立意，切忌填得过大过空（如“站在世界的门口”），也切忌与“门口”搭配不当；补好题目后务必抄写在答题卡上，漏补题目会被大幅扣分。写作关键是紧扣“站在”的临界状态，全文应有“门内—门槛—门外”的层次感，不能写成一篇脱离“门口”的普通成长记叙文，行文中要反复点题、扣住“门口”的比喻义。文体虽不限，但一旦选定就要特征鲜明：记叙文重细节与真情，议论文重逻辑与思辨，最忌不伦不类。",
      "diff": "hard",
      "src": "2009年湖北卷 作文（半命题作文《站在____的门口》）"
    }
  ],
  'chinese::htgw':   [
    {
      "q": "阅读下面一则寓言，根据要求作文。（60分）\n有一个年轻人跋涉在漫长的人生路上，到了一个渡口的时候，他已经拥有了“健康”“美貌”“诚信”“机敏”“才学”“金钱”“荣誉”七个背囊。渡船开出时风平浪静，说不清过了多久，风起浪涌，小船上下颠簸，险象环生。艄公说：“船小负载重，客官须丢弃一个背囊方可安度难关。”看年轻人哪一个都舍不得丢，艄公又说：“有弃有取，有失有得。”年轻人思索了一会儿，把“诚信”抛进了水里。\n寓言中“诚信”被抛弃了，它引发你想些什么呢？请以“诚信”为话题写一篇文章，可以写你的经历、体验、感受、看法和信念，也可以编写故事、寓言，等等。所写内容必须在“诚信”的范围之内。\n注意：①立意自定；②文体自选；③题目自拟；④不少于800字。",
      "a": "立意解读：话题是“诚信”，但材料的价值取向十分明确——年轻人抛弃诚信是错误的选择，因此中心必须落在“诚信不可抛”。中心论点可定为：诚信是做人的根本而非可有可无的行囊，弃之则七囊皆空。参考标题：《诚信不可抛》《守一诺，重千金》。\n写作提纲（议论文）：（1）由寓言切入，直陈年轻人之误——健康、才学、金钱皆为“用”，诚信是“体”，舍本而逐末；（2）论诚信之于个人——人无信不立，失信者纵有美貌才学亦不为人所容；（3）论诚信之于社会——市场经济与人际交往皆以信用为基石，失信的代价是整个社会的交易成本；（4）回应“有弃有取”——真正的取舍智慧是弃虚名浮利而守根本，而非相反；（5）联系现实与自身，发出守信的呼吁。\n可引用的素材方向：《论语》“人而无信，不知其可也”“民无信不立”；商鞅徙木立信；季布一诺千金；曾子杀彘教子；宋庆龄冒雨赴约；反面素材如烽火戏诸侯、学术造假、失信被执行人名单、诚信档案与社会信用体系建设。也可如当年满分作文《赤兔之死》那样，用故事新编、寓言、书信、日记等体裁承载话题。",
      "exp": "话题作文的第一要义是“所写内容必须在话题范围之内”，本题明确限定为“诚信”，把“诚”理解为诚恳、把“信”理解为自信或信仰均属偏题，只抓住艄公“有弃有取”一句大谈取舍之道也会跑题。第二要义是自拟标题：话题本身不是题目，直接以“诚信”二字为题会显得平淡，宜拟出带观点或有文采的标题。文体自选给了发挥空间，写议论文要论点鲜明、论据古今结合，写记叙文或故事新编则须情节完整、寓意自明，切忌泛泛而谈、空喊口号；材料中的寓言可作引子，但不必大段复述。",
      "diff": "hard",
      "src": "2001年全国卷 作文（话题作文“诚信”）"
    },
    {
      "q": "阅读下面的材料，根据要求作文。（60分）\n有一位登山者，在途中遇上暴风雪。他深知不尽快找到避风处，非冻死不可。他走啊走啊，腿已经迈不开了。就在这时，脚碰到一个硬邦邦的东西，扒开雪一看，竟然是个快冻僵的人。登山者犯难了：是继续向前，还是停下来援救这个陌生人？心灵深处翻江倒海之后，他毅然作出决定，脱下手套，给那人做按摩。经过一番按摩，陌生人可以活动了，而登山者也因此暖和了自己的身心。最后，两个人互相搀扶着走出了困境。\n也许不是人人都会碰上这种生死的抉择，但是每个人却常常遇到、见到、听到一些触动心灵需要作出选择的事情。那时，我们大家是怎样选择的呢？又应该如何选择呢？请以“心灵的选择”为话题写一篇作文，所写内容必须在这个话题范围之内。\n注意：①立意自定；②文体自选；③题目自拟；④不少于800字；⑤不得抄袭。",
      "a": "立意解读：话题的重心不在“选择”二字，而在“心灵”——考查的是道德良知在两难处境中的挣扎与抉择。中心论点可定为：真正的选择发生在心灵深处，善念看似利他，实则也照亮了自己；助人与自助本是一体。参考标题：《在雪地里点燃一盏灯》《选择善良，就是选择温暖自己》。\n写作提纲（记叙文为佳）：（1）设置一个真实可感的两难情境（如考场上发现同桌作弊、路遇摔倒的老人、拾到贵重失物、目睹校园欺凌）；（2）细写心灵的翻江倒海——写出至少两三次内心的交锋：怕被误解、怕耽误自己、怕承担后果，让犹豫真实可信；（3）写下决心的那一刻，抓住一个具体动作或细节（如登山者“脱下手套”）；（4）写出选择之后的回响——帮助他人的同时也温暖了自己，完成主旨升华。\n可引用的素材方向：材料中“脱下手套”的细节本身极具象征意味，可反复呼应；孟子“恻隐之心，人皆有之”；《病梅馆记》式的自省笔法；范仲淹“先天下之忧而忧”；当代如免费午餐、器官捐献者、见义勇为者的抉择；反面可写路人的冷漠与围观，形成对照。",
      "exp": "本题最大的陷阱是把“心灵的选择”写成一般的“选择”，只罗列人生道路的取舍而不写心灵的挣扎，或者写成没有道德内涵的利害权衡，都会偏离话题。写作时务必让“心灵”二字落地：内心冲突要有过程、有波澜、有细节，最好像满分作文那样呈现两到三次矛盾交锋，避免一开始就道德完美、毫无犹豫。文体上记叙文最易出彩，因为它能承载心理描写；若写议论文，则要有具体事例支撑，避免通篇道德说教。此外注意“不得抄袭”与“题目自拟”，标题应有形象感或思想性，不要直接照抄话题。",
      "diff": "hard",
      "src": "2002年全国卷 作文（话题作文“心灵的选择”）"
    }
  ],
  'chinese::rwpq':   [
    {
      "q": "阅读下面的材料，根据要求写作。（60分）\n“民生在勤，勤则不匮”，劳动是财富的源泉，也是幸福的源泉。“夙兴夜寐，洒扫庭内”，热爱劳动是中华民族的优秀传统，绵延至今。可是现实生活中，也有一些同学不理解劳动，不愿意劳动。有的说：“我们学习这么忙，劳动太占时间了！”有的说：“科技进步这么快，劳动的事，以后可以交给人工智能啊！”也有的说：“劳动这么苦，这么累，干吗非得自己干？花点钱让别人去做好了！”此外，我们身边也还有着一些不尊重劳动的现象。\n这引起了人们的深思。\n请结合材料内容，面向本校（统称“复兴中学”）同学写一篇演讲稿，倡议大家“热爱劳动，从我做起”，体现你的认识与思考，并提出希望与建议。\n要求：自拟标题，自选角度，确定立意；不要套作，不得抄袭；不得泄露个人信息；不少于800字。",
      "a": "立意解读：中心论点为——劳动是财富与幸福的源泉，忙碌、科技与花钱都不能成为拒绝劳动的理由，青年当从我做起，在亲手劳作中锤炼品格、体认价值。参考标题：《以劳动之手，托举青春之梦》。\n写作提纲（演讲稿）：（1）称呼与问候：“亲爱的同学们：大家好！”开门见山点明演讲主题；（2）立“劳动之义”——引《左传》《诗经》两句，说明劳动创造财富、创造幸福，是绵延千年的民族传统；（3）驳“三种论调”——逐一回应材料中“太占时间”“交给人工智能”“花钱请人”三种说法：劳动非但不耽误学习，反能磨砺意志；人工智能替代的是重复劳动，替代不了劳动中的创造与体验；花钱买到的是服务，买不到躬身实践的成长；（4）提“希望与建议”——具体可行，如自己的教室自己扫、参与家务与志愿服务、开展劳动实践周；（5）结尾发出倡议并致谢：“我的演讲完毕，谢谢大家！”\n文体注意点：演讲稿五要素齐备——称呼、问候、主体、倡议、结语与致谢；全文用第二人称“同学们”，多用短句、排比、反问以增强现场感染力；身份是复兴中学的学生，须以同龄人口吻说话，不可居高临下训导。",
      "exp": "这是典型的任务驱动型作文，审题要抓住引导语中的五重任务：结合材料、面向复兴中学同学、写演讲稿、倡议“热爱劳动，从我做起”、提出希望与建议，任何一项遗漏都会被判为任务缺失而降档。特别要有对象意识与情境意识：演讲对象是本校同学而非泛泛的“大家”，且必须正面回应材料中三种错误论调，否则就成了脱离靶子的空谈。格式上称呼、问候语、结束语不可省略，但不得出现真实校名与个人信息，统一用“复兴中学”。易错提醒：不要把演讲稿写成议论文，也不要通篇抒情高呼口号，“希望与建议”要落到具体可操作的行动上。",
      "diff": "hard",
      "src": "2019年全国Ⅰ卷 作文（任务驱动·演讲稿“热爱劳动，从我做起”）"
    },
    {
      "q": "阅读下面的材料，根据要求写作。（60分）\n人们用眼睛看他人、看世界，却无法直接看到完整的自己。所以，在人生的旅程中，我们需要寻找各种“镜子”、不断绘制“自画像”来审视自我，尝试回答“我是怎样的人”“我想过怎样的生活”“我能做些什么”“如何生活得更有意义”等重要的问题。\n毕业前，学校请你给即将入学的高一新生写一封信，主题是“如何为自己画好像”，与他们分享自己的感悟与思考。\n要求：结合材料，选好角度，确定立意，自拟标题；不要套作，不得抄袭；不得泄露个人信息；不少于800字。",
      "a": "立意解读：题眼是“如何”二字，重点不在论证“认识自我很重要”，而在给出为自己画好像的路径与方法。中心论点可定为——认识自己需要三面镜子：以他人为镜察己之短，以经典为镜立己之志，以实践为镜验己之能；在不断修改的自画像中走向清醒而丰盈的人生。\n写作提纲（书信）：（1）称呼与问候：“亲爱的学弟学妹们：你们好！”以过来人身份点明写信缘由；（2）第一面镜子——以人为镜，坦诚接受师友的评价，写一段自己曾因他人一句话而看清短处的真实经历；（3）第二面镜子——以书为镜，在经典与榜样中确立“我想过怎样的生活”；（4）第三面镜子——以事为镜，在做事、试错、复盘中回答“我能做些什么”；（5）提醒——自画像不必一次画成，也不必与他人雷同，允许修改才是成长；（6）祝愿与落款：“祝学业有成！学长（学姐）×××，×年×月×日”。\n文体注意点：书信格式完整——顶格称呼、下一行空两格问候、正文分层、结尾祝颂语与署名日期；署名须用化名或“一名高三毕业生”，绝不能泄露真实姓名与校名。",
      "exp": "本题的任务指令有三重：情境是毕业前、对象是即将入学的高一新生、文体是书信且主题限定为“如何为自己画好像”，写作时必须始终保持对话感，用“你们”“我”的口吻分享而非训诫。审题要抓住“如何”，围绕材料中四个问题给出可操作的方法与真切的体验，切忌泛泛而谈“要认识自我”却不给路径，这是本题最常见的失分点。结构上宜采用分点式，每一点辅以自己高中三年的具体片段，让感悟落地。格式上书信五要素缺一不可，署名处务必匿名处理，避免因泄露个人信息被扣分。",
      "diff": "hard",
      "src": "2020年全国Ⅲ卷 作文（任务驱动·书信“如何为自己画好像”）"
    }
  ],
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

    // ===== 仿洛谷「题目信息」侧边栏 =====
    function entryTitle(e) {
      if (e.q.subs && e.q.subs.length) {
        var s = String(e.q.src || e.catName || '').replace(/\n/g, ' ').trim();
        if (s.length > 20) s = s.slice(0, 20) + '…';
        return s + ' · ' + e.q.subs.length + ' 小题';
      }
      var t = String(e.q.q || '').replace(/\n/g, ' ').trim();
      return t.length > 26 ? t.slice(0, 26) + '…' : t;
    }
    function bankEntryStats(entry) {
      var att = 0, cor = 0;
      if (entry.q.subs && entry.q.subs.length) {
        entry.q.subs.forEach(function (s) { var st = getQStat(s._subbid); att += (st.attempts || 0); cor += (st.correct || 0); });
      } else {
        var st = getQStat(entry.q._bid); att = st.attempts || 0; cor = st.correct || 0;
      }
      return { attempts: att, correct: cor, rate: att ? Math.round(cor / att * 100) : null };
    }
    function bankRecommend(entry, n) {
      var same = window.__bankList.filter(function (e) { return e.catId === entry.catId && e.sid === entry.sid && e.q._bid !== entry.q._bid; });
      if (same.length < n) {
        var more = window.__bankList.filter(function (e) { return e.sid === entry.sid && e.catId !== entry.catId && e.q._bid !== entry.q._bid; });
        same = same.concat(more);
      }
      return same.slice(0, n);
    }
    function buildBankInfoPanel(entry) {
      var q = entry.q;
      var recTopics = getDiscuss().topics.filter(function (t) { return t.qid === q._bid; })
        .sort(function (a, b) { return b.ts - a.ts; }).slice(0, 4);
      var stats = bankEntryStats(entry);
      var rate = stats.rate;
      var rateTxt = (rate === null) ? '—' : (rate + '%');
      var rateColor = rate === null ? 'var(--text-3)' : (rate >= 60 ? '#2ecc71' : (rate >= 30 ? '#e0a000' : '#e25c5c'));
      var rateW = (rate === null) ? 0 : rate;
      var tags = [entry.subjectName, entry.catName, q._dword, '高考真题'];
      var tagsHtml = tags.map(function (t) { return '<span class="lg-info-tag">' + esc(t) + '</span>'; }).join('');
      var recs = bankRecommend(entry, 5);
      var recHtml = recs.length
        ? recs.map(function (e) {
            return '<div class="lg-info-rec-item" onclick="navigate(\'bank\',\'q\',\'' + e.q._bid + '\')">' +
              '<span class="lg-info-rec-id">' + esc(e.q._bid) + '</span>' +
              '<span class="lg-info-rec-title">' + esc(entryTitle(e)) + '</span>' +
              '<span class="lg-info-rec-go">›</span>' +
            '</div>';
          }).join('')
        : '<div class="lg-info-empty">暂无更多同类型题目</div>';
      var diffStars = { easy: 1, medium: 2, hard: 3, expert: 4 }[q.diff] || 2;
      var diffStarsHtml = '';
      for (var si = 0; si < 4; si++) diffStarsHtml += '<span class="lg-info-star' + (si < diffStars ? ' on' : '') + '">★</span>';
      return '' +
        '<aside class="lg-info">' +
          '<div class="lg-info-title">题目信息</div>' +
          '<div class="lg-info-sec">' +
            '<div class="lg-info-label">题目编号</div>' +
            '<div class="lg-info-bid">' + esc(q._bid) + '</div>' +
          '</div>' +
          '<div class="lg-info-sec">' +
            '<div class="lg-info-label">来源 / 提供者</div>' +
            '<div class="lg-info-val">' + esc(q.src || (entry.subjectName + ' · ' + entry.catName)) + '</div>' +
          '</div>' +
          '<div class="lg-info-sec">' +
            '<div class="lg-info-label">难度</div>' +
            '<div class="lg-info-val"><span class="lg-info-diff lg-d-' + q._dletter + '">' + esc(q._dword) + '</span> <span class="lg-info-stars">' + diffStarsHtml + '</span></div>' +
          '</div>' +
          '<div class="lg-info-sec">' +
            '<div class="lg-info-label">历史分数（通过率）</div>' +
            '<div class="lg-info-rate"><span class="lg-info-rate-num" style="color:' + rateColor + '">' + rateTxt + '</span>' +
              '<span class="lg-info-rate-bar"><span class="lg-info-rate-fill" style="width:' + rateW + '%;background:' + rateColor + '"></span></span>' +
            '</div>' +
          '</div>' +
          '<div class="lg-info-sec">' +
            '<div class="lg-info-label">提交记录</div>' +
            '<div class="lg-info-val">共 <b>' + stats.attempts + '</b> 次作答 · 通过 <b>' + stats.correct + '</b> 次</div>' +
          '</div>' +
          '<div class="lg-info-sec">' +
            '<div class="lg-info-label">标签</div>' +
            '<div class="lg-info-tags">' + tagsHtml + '</div>' +
          '</div>' +
          '<div class="lg-info-sec">' +
            '<div class="lg-info-label lg-info-label-row"><span>相关讨论 <span class="lg-info-count">' + recTopics.length + '</span></span>' +
              '<span class="lg-info-ask" onclick="window.__askQuestion(\'' + esc(q._bid) + '\')">提问 ›</span></div>' +
            (recTopics.length
              ? '<div class="lg-disc-list">' + recTopics.map(function (t) {
                  return '<div class="lg-disc-item" onclick="navigate(\'comments\',\'' + esc(t.board) + '\',\'' + esc(t.id) + '\')">' +
                    '<div class="lg-disc-title">' + esc(t.title) + '</div>' +
                    '<div class="lg-disc-meta">' + esc(t.authorName || '匿名') + ' · ' + (t.replies ? t.replies.length : 0) + ' 回复 · ' + esc(relativeTime(t.ts)) + '</div>' +
                  '</div>';
                }).join('') + '</div>'
              : '<div class="lg-info-empty">还没有讨论，来抢沙发 ✨</div>') +
          '</div>' +
          '<div class="lg-info-sec">' +
            '<div class="lg-info-label">推荐题目</div>' +
            '<div class="lg-info-rec">' + recHtml + '</div>' +
          '</div>' +
        '</aside>';
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
        '<div class="lg-detail-body">' +
          '<div class="lg-detail-main">' + buildBankQuestionCard(q, entry.key) + '</div>' +
          '<div class="lg-detail-side">' + buildBankInfoPanel(entry) + '</div>' +
        '</div>' +
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

  /* 从题库详情页「提问」按钮进入：关联本题并自动展开发帖框 */
  window.__askQuestion = function (bid) {
    window.__pendingQid = bid;
    window.__pendingCompose = true;
    navigate('comments', '题目总版');
  };

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
      var qchip = t.qid ? '<span class="ds-qtag" onclick="event.stopPropagation();navigate(\'bank\',\'q\',\'' + esc(t.qid) + '\')">📌 ' + esc(t.qid) + '</span>' : '';
      var attInd = (t.attachments && t.attachments.length) ? '<span class="ds-att-ind">📎 ' + t.attachments.length + '</span>' : '';
      return '<li class="ds-topic' + (canDel ? ' has-del' : '') + '" onclick="navigate(\'comments\',\'' + esc(t.board) + '\',\'' + esc(t.id) + '\')">' +
        '<div class="ds-topic-main">' +
          '<div class="ds-topic-title">' + esc(t.title) + '</div>' +
          '<div class="ds-topic-meta">' + tag +
            '<span class="ds-dot">·</span>' +
            authorChip(t.authorId, t.authorName, 'ds-topic-author') +
            (t.qid ? '<span class="ds-dot">·</span>' + qchip : '') +
            attInd +
            '<span class="ds-dot">·</span>' +
            '<span class="ds-topic-time">' + esc(relativeTime(t.ts)) + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="ds-topic-stat"><div class="ds-topic-stat-n">' + (t.replies ? t.replies.length : 0) + '</div><div class="ds-topic-stat-l">回复</div></div>' +
        (canDel ? '<button class="ds-del" onclick="event.stopPropagation();deleteTopic(\'' + esc(t.board) + '\',\'' + esc(t.id) + '\')">删除</button>' : '') +
      '</li>';
    }).join('') + '</ul>';
  }

  /* 附件相关辅助：文件读取、图片压缩、大小格式化、渲染 */
  function fmtSize(bytes) {
    if (bytes === null || bytes === undefined || isNaN(bytes)) return '';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1024 / 1024).toFixed(1) + ' MB';
  }
  function readFileAsDataUrl(file) {
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();
      fr.onload = function () { resolve(fr.result); };
      fr.onerror = function () { reject(fr.error || new Error('read fail')); };
      fr.readAsDataURL(file);
    });
  }
  function downscaleImage(dataUrl, maxDim, quality) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () {
        var w = img.width, h = img.height;
        if (!w || !h || (w <= maxDim && h <= maxDim)) { resolve(dataUrl); return; }
        var scale = Math.min(maxDim / w, maxDim / h);
        var cw = Math.max(1, Math.round(w * scale)), ch = Math.max(1, Math.round(h * scale));
        try {
          var canvas = document.createElement('canvas');
          canvas.width = cw; canvas.height = ch;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, cw, ch);
          resolve(canvas.toDataURL('image/jpeg', quality));
        } catch (e) { resolve(dataUrl); }
      };
      img.onerror = function () { resolve(dataUrl); };
      img.src = dataUrl;
    });
  }
  function attachmentsHtml(atts) {
    if (!atts || !atts.length) return '';
    var items = atts.map(function (a) {
      var isImg = (a.type || '').indexOf('image/') === 0;
      if (isImg) {
        return '<a class="ds-att ds-att-img" href="' + a.data + '" target="_blank" rel="noopener"><img loading="lazy" src="' + a.data + '" alt="' + esc(a.name) + '"></a>';
      }
      return '<a class="ds-att ds-att-file" href="' + a.data + '" download="' + esc(a.name) + '" target="_blank" rel="noopener">' +
        '<span class="ds-att-ico">📄</span><span class="ds-att-name">' + esc(a.name) + '</span><span class="ds-att-size">' + fmtSize(a.size) + '</span></a>';
    }).join('');
    return '<div class="ds-attachments">' + items + '</div>';
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
          '<input class="cm-title-input" id="cmTitle" maxlength="120" placeholder="帖子标题（选填，留空则自动取正文前 30 字）">' +
          '<textarea class="cm-textarea" id="cmText" maxlength="3000" placeholder="说点什么… 分享见解、提问、或反馈都可以 :)" rows="4"></textarea>' +
          '<div class="cm-file-row">' +
            '<label class="cm-file-btn">📎 添加附件<input type="file" id="cmFiles" multiple accept="image/*,.pdf,.doc,.docx,.txt,.zip,.ppt,.pptx"></label>' +
            '<span class="cm-file-hint">支持图片/文档，单文件 ≤ 8MB</span>' +
          '</div>' +
          '<div class="cm-previews" id="cmPreviews"></div>' +
          '<div class="cm-form-foot">' +
            '<div class="cm-counter"><span id="cmCount">0</span> / 3000</div>' +
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
    else { window.__pendingQid = null; window.__pendingCompose = false; }
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
    if (!window.__pendingCompose) window.__pendingQid = null; // 清掉非本题来源的残留关联
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
    if (window.__pendingCompose) {
      window.__pendingCompose = false;
      dsToggleCompose();
      var ti = document.getElementById('cmTitle');
      if (ti && window.__pendingQid) ti.value = '[' + window.__pendingQid + '] ';
    }
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
              attachmentsHtml(rp.attachments) +
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
          (t.qid ? '<span class="ds-qtag" onclick="navigate(\'bank\',\'q\',\'' + esc(t.qid) + '\')">📌 ' + esc(t.qid) + '</span>' : '') +
          '<span class="ds-dot">·</span><span>' + esc(relativeTime(t.ts)) + '</span>' +
          (canDelT ? '<button class="ds-del" onclick="deleteTopic(\'' + esc(board) + '\',\'' + esc(t.id) + '\')">删除</button>' : '') +
        '</div>' +
      '</div>' +
      '<div class="ds-post"><div class="ds-post-body">' + esc(t.content) + '</div>' + attachmentsHtml(t.attachments) + '</div>' +
      '<div class="ds-list-head"><span>回复</span><span>' + (t.replies ? t.replies.length : 0) + ' 条</span></div>' +
      repliesHtml +
      '<div class="cm-form-card ds-reply-form">' + idHtml +
        '<textarea class="cm-textarea" id="cmText" maxlength="3000" placeholder="写下你的回复…" rows="3"></textarea>' +
        '<div class="cm-file-row">' +
          '<label class="cm-file-btn">📎 添加附件<input type="file" id="cmFiles" multiple accept="image/*,.pdf,.doc,.docx,.txt,.zip,.ppt,.pptx"></label>' +
          '<span class="cm-file-hint">支持图片/文档，单文件 ≤ 8MB</span>' +
        '</div>' +
        '<div class="cm-previews" id="cmPreviews"></div>' +
        '<div class="cm-form-foot"><div class="cm-counter"><span id="cmCount">0</span> / 3000</div>' +
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
    var fileEl = document.getElementById('cmFiles');
    var prevEl = document.getElementById('cmPreviews');
    var pending = [];
    var MAX_FILE = 8 * 1024 * 1024;
    var MAX_TOTAL = 6 * 1024 * 1024;
    if (!text) return;
    function pendingBytes() {
      var n = 0; pending.forEach(function (p) { n += p.data.length * 0.75; }); return n;
    }
    function renderPreviews() {
      if (!prevEl) return;
      if (!pending.length) { prevEl.innerHTML = ''; return; }
      prevEl.innerHTML = pending.map(function (a, i) {
        var isImg = (a.type || '').indexOf('image/') === 0;
        var thumb = isImg ? '<img src="' + a.data + '" alt="">' : '<span class="ds-prev-ico">📄</span>';
        return '<div class="ds-prev' + (isImg ? ' is-img' : '') + '">' + thumb +
          '<span class="ds-prev-name">' + esc(a.name) + '</span>' +
          '<span class="ds-prev-size">' + fmtSize(a.size) + '</span>' +
          '<button type="button" class="ds-prev-x" data-i="' + i + '" title="移除">×</button></div>';
      }).join('');
      Array.prototype.forEach.call(prevEl.querySelectorAll('.ds-prev-x'), function (b) {
        b.addEventListener('click', function () {
          var i = parseInt(b.getAttribute('data-i'), 10);
          pending.splice(i, 1);
          renderPreviews();
        });
      });
    }
    function refresh() {
      var ok = text.value.trim().length > 0;
      if (btn) { btn.disabled = !ok; btn.classList.toggle('ready', ok); }
      if (count) count.textContent = text.value.length;
    }
    text.addEventListener('input', refresh);
    if (titleEl) titleEl.addEventListener('input', refresh);
    if (fileEl) {
      fileEl.addEventListener('change', function () {
        var files = Array.prototype.slice.call(fileEl.files || []);
        files.forEach(function (f) {
          if (f.size > MAX_FILE) { toast('「' + f.name + '」超过 8MB，已跳过'); return; }
          readFileAsDataUrl(f).then(function (data) {
            var p = { name: f.name, type: f.type, size: f.size, data: data };
            if ((f.type || '').indexOf('image/') === 0) {
              return downscaleImage(data, 1280, 0.82).then(function (d2) {
                p.data = d2; p.size = Math.round(d2.length * 0.75);
                return p;
              });
            }
            return p;
          }).then(function (p) {
            if (pendingBytes() + p.data.length * 0.75 > MAX_TOTAL) {
              toast('附件总大小已达上限（约 6MB），「' + p.name + '」未添加');
              return;
            }
            pending.push(p);
            renderPreviews();
          }).catch(function () { toast('读取文件失败'); });
        });
        fileEl.value = '';
      });
    }
    if (btn) btn.addEventListener('click', function () {
      var content = text.value.trim();
      if (!content) return;
      var cu = getCurrentUser();
      if (cu && cu.muted) { toast('你已被禁言，暂不能发表内容'); return; }
      var id = discussIdentity();
      var d = getDiscuss();
      if (mode === 'topic') {
        var title = titleEl && titleEl.value.trim() ? titleEl.value.trim() : (content.slice(0, 30) || '（无标题）');
        d.topics.push({
          id: 't_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
          board: board, ts: Date.now(),
          authorId: id.authorId, authorName: id.authorName, avatar: id.avatar,
          guestId: id.isAnon ? currentGuestId() : null,
          qid: window.__pendingQid || null,
          title: title, content: content, attachments: pending.slice(), replies: []
        });
        saveDiscuss(d);
        window.__pendingQid = null;
        renderComments(); // 重新渲染当前板块，立即显示新帖子（hash 未变不会触发 hashchange）
      } else {
        var t = d.topics.filter(function (x) { return x.id === topicId; })[0];
        if (t) {
          if (!t.replies) t.replies = [];
          t.replies.push({
            id: 'r_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
            ts: Date.now(), authorId: id.authorId, authorName: id.authorName, content: content,
            guestId: id.isAnon ? currentGuestId() : null,
            attachments: pending.slice()
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
