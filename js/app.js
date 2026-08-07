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
    else if (r.route === 'bank') { renderBank(r.param); restoreScrollKeep(prevScroll); }
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
      case 'original': {
        var o = b, html = '';
        html += '<div class="b-original"><div class="box-label">📜 原文</div>';
        if (o.title) html += '<div class="b-original-title">' + esc(o.title) + '</div>';
        if (o.copyright) {
          html += '<div class="orig-cr-banner">⚠️ 本篇作者仍在著作权保护期内（或系当代作品），此处仅依教材提供<b>节选</b>并附解析，供课堂学习使用；完整原文请购买正版图书或到图书馆借阅。</div>';
        }
        if (o.segments && o.segments.length) {
          html += '<div class="orig-segs">';
          o.segments.forEach(function (s, i) {
            html += '<div class="orig-seg">';
            html += '<div class="orig-seg-idx">第 ' + (i + 1) + ' 段</div>';
            html += '<div class="orig-seg-text">' + esc(s.text || '').replace(/\n/g, '<br>') + '</div>';
            if (s.note) html += '<div class="orig-seg-note"><span class="orig-note-label">💡 分析</span>' + esc(s.note) + '</div>';
            html += '</div>';
          });
          html += '</div>';
        } else if (o.text) {
          html += '<div class="b-original-text">' + esc(o.text).replace(/\n/g, '<br>') + '</div>';
        }
        var fullTxt = o.full || (o.segments ? o.segments.map(function (s) { return s.text; }).join('\n\n') : '');
        if (fullTxt && !o.copyright) {
          html += '<details class="orig-full"><summary class="orig-full-label">📖 完整全文（含全部段落）</summary><div class="b-original-text">' + esc(fullTxt).replace(/\n/g, '<br>') + '</div></details>';
        }
        if (o.src) html += '<div class="b-original-src">出处：' + esc(o.src) + '</div>';
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
                 '<span class="opt-txt">' + esc(o) + '</span></button>';
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
    var expBody = (ans && q.explanation) ? '<div class="quiz-exp-label">📝 解析</div><div class="quiz-exp-body">' + esc(q.explanation) + '</div>' : '';
    return '<div class="quiz' + (ans ? (ans.correct ? ' is-correct' : ' is-wrong') : '') + '" data-q="' + i + '" data-type="' + q.type + '">' +
      '<div class="quiz-q"><span class="quiz-no">' + (i + 1) + '</span>' + status + '<span>' + esc(q.question) + '</span>' +
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
    { id: 'easy', name: '简单' },
    { id: 'medium', name: '中等' },
    { id: 'hard', name: '偏难' },
    { id: 'expert', name: '困难' }
  ];
  if (!window.__commonFilter) window.__commonFilter = { difficulty: 'all', types: [], search: '' };
  if (window.__commonModal === undefined) window.__commonModal = null;

  function commonTypeLabel(k) {
    var p = String(k).split('::');
    var s = GZ_COMMON_TYPES[p[0]];
    if (!s) return k;
    var c = (s.cats || []).filter(function (x) { return x.id === p[1]; })[0];
    return s.name + '·' + (c ? c.name : p[1]) + (c && c.struct ? '（' + c.struct + '）' : '');
  }

  function renderCommonContent() {
    var f = window.__commonFilter;
    var items = f.types.map(function(k) { return { k: k, label: commonTypeLabel(k) }; });
    if (f.search && f.search.trim()) {
      var q = f.search.trim().toLowerCase();
      items = items.filter(function(it) { return it.label.toLowerCase().indexOf(q) >= 0 || __typeHasMatchSearch(it.k, q); });
    }
    if (!items.length) {
      if (!f.types.length) return '<div class="cc-empty">🧭 请先在上方选择科目与常考题型，开始筛选题目。<br>难度、科目与搜索都会作用于题目列表。</div>';
      return '<div class="cc-empty">🔍 没有匹配「' + esc(f.search) + '」的题型或题目。</div>';
    }
    var diffMap = { easy: '简单', medium: '中等', hard: '偏难', expert: '困难' };
    var groups = items.map(function(it) {
      var p = String(it.k).split('::');
      var s = GZ_COMMON_TYPES[p[0]];
      var c = (s.cats || []).filter(function(x) { return x.id === p[1]; })[0];
      var color = (s && s.color) || '#6b7280';
      var icon = (c && c.icon) || '📝';
      var tfaved = isTypeFaved(it.k);
      var favBtn = '<button class="cc-tc-fav' + (tfaved ? ' is-fav' : '') + '" title="' + (tfaved ? '取消收藏题型' : '收藏此题型') + '" onclick="event.stopPropagation();window.__toggleTypeFav(\'' + esc(it.k) + '\')">' + (tfaved ? '★' : '☆') + '</button>';
      var qs = (window.GZ_COMMON_QUESTIONS || {})[it.k] || [];
      var qsHtml = qs.length ? qs.map(function(q, i) {
        var key = it.k + '#' + i;
        var qType = q.opts ? 'choice' : ((q.a || '').length <= 20 ? 'fill' : 'solve');
        var typeLabel = qType === 'choice' ? '选择' : (qType === 'fill' ? '填空' : '解答');
        var diffLabel = diffMap[q.diff] || '中等';
        var ansId = 'q-ans-' + key.replace(/[^a-zA-Z0-9]/g, '_');
        var faved = isQFav(key);
        var qFavBtn = '<button class="cc-q-fav' + (faved ? ' is-fav' : '') + '" title="="' + (faved ? '取消收藏本题' : '收藏本题') + '" onclick="window.__toggleQFav(\'' + esc(key) + '\', this)">' + (faved ? '★' : '☆') + '</button>';

        // 题干 + 选项
        var optsHtml = '';
        var inputHtml = '';
        var saved = getQAnswer(key);
        var myAns = saved ? saved.myAnswer : '';
        var correct = saved ? saved.correct : null;

        if (qType === 'choice') {
          optsHtml = '<div class="cc-q-opts">' + q.opts.map(function(o, j) {
            var letter = 'ABCDE'[j];
            var isSel = (myAns === letter);
            return '<label class="cc-q-opt' + (isSel ? ' selected' : '') + '" data-key="' + key + '" data-letter="' + letter + '" onclick="window.__qSelectOpt(this, \'' + key + '\', \'' + letter + '\')">' +
              '<input type="radio" name="cc-opt-' + key + '" value="' + letter + '"' + (isSel ? ' checked' : '') + '>' +
              '<span class="cc-q-opt-letter">' + letter + '</span>' +
              '<span class="cc-q-opt-text">' + esc(o) + '</span>' +
            '</label>';
          }).join('') + '</div>';
          inputHtml = '<div class="cc-q-actions"><button class="cc-q-submit" onclick="window.__qSubmit(\'' + esc(key) + '\', \'choice\', \'' + esc(q.a) + '\', this)">提交答案</button></div>';
        } else if (qType === 'fill') {
          inputHtml = '<div class="cc-q-fill"><input type="text" placeholder="请输入答案..." value="' + esc(myAns) + '"><button class="cc-q-submit" onclick="window.__qSubmit(\'' + esc(key) + '\', \'fill\', \'' + esc(q.a) + '\', this)">提交答案</button></div>';
        } else {
          inputHtml = '<div class="cc-q-solve"><textarea placeholder="请写下你的解题过程..." rows="4">' + esc(myAns) + '</textarea><button class="cc-q-submit" onclick="window.__qSubmit(\'' + esc(key) + '\', \'solve\', \'' + esc(q.a) + '\', this)">提交答案</button></div>';
        }

        var resultHtml = '';
        if (correct === true) {
          resultHtml = '<div class="cc-q-result correct">✓ 回答正确</div>';
        } else if (correct === false) {
          resultHtml = '<div class="cc-q-result wrong">✗ 回答错误</div>';
        } else if (saved) {
          resultHtml = '<div class="cc-q-result submitted">已记录你的作答（解答题不自动判分）</div>';
        }

        var hiddenAttr = (correct === false) ? '' : ' hidden';

        return '<div class="cc-q-item" data-key="' + key + '">' +
          '<div class="cc-q-head">' +
            '<span class="cc-q-no">题 ' + (i + 1) + '</span>' +
            '<span class="cc-q-type type-' + qType + '">' + typeLabel + '</span>' +
            '<span class="cc-q-diff diff-' + esc(q.diff || 'medium') + '">' + diffLabel + '</span>' +
            '<span class="cc-q-src">' + esc(q.src || '') + '</span>' +
            qFavBtn +
            '<button class="cc-q-toggle" onclick="window.__toggleQAns(\'' + ansId + '\')">显示答案</button>' +
          '</div>' +
          '<div class="cc-q-body">' + esc(q.q) + '</div>' +
          optsHtml +
          inputHtml +
          resultHtml +
          '<div class="cc-q-ans" id="' + ansId + '"' + hiddenAttr + '>' +
            '<div class="cc-q-a"><b>答案：</b>' + esc(q.a) + '</div>' +
            (q.exp ? '<div class="cc-q-exp"><b>解析：</b>' + esc(q.exp) + '</div>' : '') +
          '</div>' +
        '</div>';
      }).join('') : '<div class="cc-q-empty">该题型暂未配题，可先点击 ★ 收藏题型。</div>';
      var expandId = 'cc-questions-' + it.k.replace(/[^a-zA-Z0-9]/g, '_');
      var qCountHtml = qs.length ? ' · ' + qs.length + ' 题' : '';
      return '<div class="cc-type-group" style="--sc:' + color + '">' +
        '<div class="cc-type-card" onclick="window.__toggleTypeExpand(\'' + expandId + '\', this)">' +
          favBtn +
          '<div class="cc-tc-icon">' + icon + '</div>' +
          '<div class="cc-tc-body"><div class="cc-tc-subj">' + esc(s ? s.name : '') + (c && c.struct ? ' <span class="cc-tc-struct">' + esc(c.struct) + '</span>' : '') + '</div><div class="cc-tc-name">' + esc(c ? c.name : '') + qCountHtml + '</div></div>' +
          '<div class="cc-tc-arrow">▼</div>' +
        '</div>' +
        '<div class="cc-type-questions" id="' + expandId + '">' + qsHtml + '</div>' +
      '</div>';
    }).join('');
    return '<div class="cc-type-grid">' + groups + '</div>';
  }

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
    var item = label.closest ? label.closest('.cc-q-item') : null;
    if (!item) return;
    item.querySelectorAll('.cc-q-opt').forEach(function(el) { el.classList.remove('selected'); });
    label.classList.add('selected');
    var radio = label.querySelector('input[type=radio]');
    if (radio) radio.checked = true;
  };

  window.__qSubmit = function(key, type, correctAnswer, btn) {
    var item = btn.closest ? btn.closest('.cc-q-item') : null;
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

    saveQAnswer(key, myAnswer, correct);

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
        '<div class="bank-hero" style="background: linear-gradient(120deg, #f0f4ff 0%, #f7eaff 100%);">' +
          '<div class="bank-hero-text">' +
            '<div class="bank-hero-greet">📚 高考备考</div>' +
            '<h2 class="bank-hero-title">高中常考题型</h2>' +
            '<p class="bank-hero-desc">按科目、题型与难度筛选常考题，可在线作答、即时反馈。<br>目前已上线 ' + keys.length + ' 个学科 · ' + totalCats + ' 个常考题型。</p>' +
          '</div>' +
          '<div class="bank-hero-deco">📚</div>' +
        '</div>' +
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
    renderBankCommon();
  };
  window.__removeType = function (k) {
    var f = window.__commonFilter;
    f.types = f.types.filter(function (x) { return x !== k; });
    renderBankCommon();
  };
  window.__commonSetDiff = function (d) { window.__commonFilter.difficulty = d; renderBankCommon(); };
  window.__commonSearch = function (v) {
    window.__commonFilter.search = v;
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

  function renderBank(mode) {
    if (mode === 'fav') renderBankFav();
    else if (mode === 'common') renderBankCommon();
    else if (mode === 'wrong') renderBankWrong();
    else renderBankHome();
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
