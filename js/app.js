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
        var pts = v.points || [];
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

  // 点击科目导航区：进入科目页（同时确保已展开）
  window.__sbNav = function (sid) {
    var arr = getOpenSids();
    if (arr.indexOf(sid) < 0) {
      arr.unshift(sid);
      setOpenSids(arr);
    }
    navigate('subject', sid);
  };

  // 点击小三角形：仅展开/收起，不导航
  window.__sbToggle = function (sid) {
    toggleOpenSid(sid);
    var r = parseHash();
    renderSidebar(r, { manualToggle: true });
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
      if (v.grade !== '高三') totalPts += (v.points || []).length;
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
      var f = findLesson(r.sid, r.vid, r.idx);
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
        if (vol && (vol.points || []).length > 0) {
          // 找 top.idx 之后第一个未完成的
          for (var j = top.idx; j < vol.points.length; j++) {
            if (!prog[lessonKey(top.sid, top.vid, j)]) {
              return { sid: top.sid, vid: top.vid, idx: j, f: findLesson(top.sid, top.vid, j) };
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
          if (!(vv.points || []).length) continue;
          for (var pi = 0; pi < vv.points.length; pi++) {
            if (!prog[lessonKey(subj2.id, vv.id, pi)]) {
              return { sid: subj2.id, vid: vv.id, idx: pi, f: findLesson(subj2.id, vv.id, pi) };
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
        if ((v3.points || []).length > 0) {
          return { sid: s3.id, vid: v3.id, idx: 0, f: findLesson(s3.id, v3.id, 0) };
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
      var n = (v.points || []).length;
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
    var pts = v.points || [];
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
        var exN = (p.exercises || []).length;
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

    // 标记已读按钮（看完内容但不做题也能算完成）
    var isDone = !!lsGet('gz_progress', {})[lessonKey(sid, vid, idx)];
    var readBtn = isDone
      ? '<span class="read-toggle is-done">✓ 已学完</span>'
      : '<button class="read-toggle" onclick="window.__markLessonRead(\'' + esc(sid) + '\',\'' + esc(vid) + '\',' + idx + ')">我已读完，标记为完成</button>';

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
          '<div class="lesson-read">' + readBtn + '</div>' +
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
    var correct, myAnswer = '';
    if (q.type === 'choice') {
      var sel = box.querySelector('.opt.sel');
      if (!sel) { toast('请先选择一个选项'); return; }
      myAnswer = sel.getAttribute('data-val');
      correct = (myAnswer === String(q.answer));
      // 高亮正确选项
      var keys = box.querySelectorAll('.opt');
      for (var kk = 0; kk < keys.length; kk++) {
        var optEl = keys[kk];
        if (optEl.getAttribute('data-val') === String(q.answer)) optEl.classList.add('is-correct-opt');
        else if (optEl.classList.contains('sel') && !correct) optEl.classList.add('is-wrong-opt');
      }
    } else {
      var inp = document.getElementById('fill-' + qi);
      var val = (inp.value || '').trim();
      if (!val) { toast('请先填写答案'); return; }
      myAnswer = val;
      var ans = String(q.answer).trim();
      correct = (val === ans || (ans.indexOf('|') >= 0 && ans.split('|').map(function (x) { return x.trim(); }).indexOf(val) >= 0));
    }
    box.classList.add(correct ? 'is-correct' : 'is-wrong');
    var keys2 = box.querySelectorAll('.opt');
    for (var k = 0; k < keys2.length; k++) keys2[k].classList.add('disabled');
    var inpt = box.querySelector('.fill-input');
    if (inpt) inpt.disabled = true;
    var sb = box.querySelector('.quiz-submit'); if (sb) sb.disabled = true;
    // 记录做题日志（用于 7 天节奏图）
    logQuiz(sid, vid, idx, qi, correct);
    // 大图标 + 答案对比
    var bigIcon = correct
      ? '<div class="quiz-result-icon ok">✓</div>'
      : '<div class="quiz-result-icon no">✗</div>';
    var answerCompare = correct
      ? '<div class="quiz-result-text ok">回答正确，干得漂亮！</div>'
      : '<div class="quiz-result-text no">回答错误</div>' +
        '<div class="quiz-compare">' +
          '<div class="qc-row"><span class="qc-label">你的答案</span><span class="qc-val mine">' + esc(myAnswer) + '</span></div>' +
          '<div class="qc-row"><span class="qc-label">正确答案</span><span class="qc-val right">' + esc(String(q.answer)) + '</span></div>' +
        '</div>';
    var wrongBadge = '';
    fb.innerHTML = bigIcon + answerCompare;
    fb.className = 'quiz-feedback ' + (correct ? 'ok' : 'no');
    exp.innerHTML = '<div class="quiz-exp-label">📝 解析</div><div class="quiz-exp-body">' + esc(q.explanation || '') + '</div>';
    if (!correct) {
      var wrong = lsGet('gz_wrongbook', []);
      var key = lessonKey(sid, vid, idx);
      var dup = wrong.some(function (w) { return w.key === key && w.qi === qi; });
      if (!dup) {
        wrong.push({ key: key, qi: qi, question: q.question, answer: q.answer, myAnswer: myAnswer, subjectName: f.subject.name, lessonName: f.point.name, type: q.type });
        wrongBadge = '<div class="quiz-wrongbook-note">📕 已加入错题本，<a onclick="navigate(\'wrongbook\')">去查看</a></div>';
      } else {
        wrongBadge = '<div class="quiz-wrongbook-note">📕 已在错题本中</div>';
      }
      lsSet('gz_wrongbook', wrong);
      toast('已加入错题本');
    }
    if (wrongBadge) exp.insertAdjacentHTML('beforeend', wrongBadge);
    // 标记课时完成（提交后即记录）
    markProgress(sid, vid, idx);
    renderProgressSideNote();
    // 自动滚动到题目顶部
    try { box.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) {}
  };

  function markProgress(sid, vid, idx) {
    var prog = lsGet('gz_progress', {});
    prog[lessonKey(sid, vid, idx)] = { ts: Date.now() };
    lsSet('gz_progress', prog);
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
    // 重新渲染当前页（按钮变为"已学完"）
    renderLesson(sid, vid, idx);
    window.scrollTo(0, 0);
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
  // 把手机号格式化为 138****1234 形式
  function formatPhoneDisplay(phone) {
    if (!phone) return '';
    var s = String(phone).replace(/\D/g, '');
    if (s.length < 7) return s;
    if (s.length === 11) return s.slice(0, 3) + '****' + s.slice(7);
    // 非 11 位时，按前 3 + 中间 * + 后 4 截取
    return s.slice(0, 3) + '****' + s.slice(-4);
  }
  // 获取用户对外显示名：自定义昵称优先，否则用手机号掩码
  function getDisplayName(u) {
    if (!u) return '';
    if (u.nickname && u.nickname !== u.username && u.nickname !== (u.phone || '')) {
      return u.nickname;
    }
    return formatPhoneDisplay(u.phone || u.username);
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
          '<span class="auth-avatar">' + esc(u.avatar || '👤') + '</span>' +
          '<span class="auth-nickname">' + esc(displayName) + '</span>' +
          '<span class="auth-caret">▾</span>' +
        '</button>' +
        '<div class="auth-user-menu" id="authUserMenu">' +
          '<div class="auth-user-menu-head">' +
            '<div class="auth-avatar-lg">' + esc(u.avatar || '👤') + '</div>' +
            '<div class="auth-user-info">' +
              '<div class="auth-user-name">' + esc(displayName) + '</div>' +
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
        '<label class="auth-field"><span>手机号</span><input type="tel" id="authUser" placeholder="11 位手机号" maxlength="11" autocomplete="username" inputmode="numeric" /></label>' +
        '<label class="auth-field"><span>密码</span><input type="password" id="authPwd" placeholder="请输入密码" maxlength="40" autocomplete="current-password" /></label>' +
        '<div class="auth-msg" id="authMsg"></div>' +
        '<button class="auth-submit" id="authSubmit" onclick="window.__doAuth()">登 录</button>' +
        '<div class="auth-hint">没有账号？<a onclick="window.__switchAuthTab(\'register\')">立即注册</a></div>';
    } else {
      pane.innerHTML =
        '<div class="auth-title">创建账号 ✨</div>' +
        '<div class="auth-subtitle">用手机号注册，默认昵称为 138****1234 形式</div>' +
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

    // 1) 简洁页头
    var headerHtml = '<div class="bank-head">' +
      '<div class="bh-title"><span class="bh-icon">📝</span><h2>题库</h2></div>' +
      '<p class="bh-sub">收录你做过的题目，按学科分类练习高中常考题型</p>' +
    '</div>';

    // 2) 横向数据条（4 个数字 + 标签，中间分隔线）
    var stats = [
      { num: favCount,   label: '收藏',   icon: '⭐', tone: 'amber' },
      { num: done,       label: '答题',   icon: '✍️', tone: 'blue' },
      { num: wrongCount, label: '错题',   icon: '📕', tone: 'red' },
      { num: streak,     label: '连续',   icon: '🔥', tone: 'purple' }
    ];
    var statsHtml = '<div class="bank-stats-strip">' + stats.map(function (s, i) {
      return '<div class="bss-item ' + s.tone + (i < stats.length - 1 ? ' has-divider' : '') + '">' +
        '<div class="bss-icon">' + s.icon + '</div>' +
        '<div class="bss-body"><div class="bss-num">' + s.num + '</div><div class="bss-lbl">' + s.label + '</div></div>' +
      '</div>';
    }).join('') + '</div>';

    // 3) 快速进入（两个并排卡）
    var entriesHtml = '<div class="bank-entries">' +
      '<a class="bank-entry" onclick="navigate(\'bank\', \'fav\')">' +
        '<div class="be-icon" style="background:linear-gradient(135deg,#fbbf24 0%,#f59e0b 100%);">⭐</div>' +
        '<div class="be-body">' +
          '<div class="be-title">我的收藏 <span class="be-num">' + favCount + '</span></div>' +
          '<div class="be-sub">集中复习你做过的题目</div>' +
        '</div>' +
        '<div class="be-arrow">→</div>' +
      '</a>' +
      '<a class="bank-entry" onclick="navigate(\'bank\', \'common\')">' +
        '<div class="be-icon" style="background:linear-gradient(135deg,#4a7de0 0%,#9c56d4 100%);">📚</div>' +
        '<div class="be-body">' +
          '<div class="be-title">高中常考题型 <span class="be-num">' + totalCats + '</span></div>' +
          '<div class="be-sub">按学科 + 题型分类整理</div>' +
        '</div>' +
        '<div class="be-arrow">→</div>' +
      '</a>' +
    '</div>';

    // 4) 学科网格（干净版，去掉大装饰圆点）
    var subjGridHtml = '<div class="bank-section">' +
      '<div class="bank-section-head">' +
        '<h3>📚 按学科浏览</h3>' +
        '<span class="bank-section-tip">共 ' + subjectKeys.length + ' 个学科 · ' + totalCats + ' 个题型</span>' +
      '</div>' +
      '<div class="bank-subj-grid">' + subjectKeys.map(function (k) {
        var s = GZ_COMMON_TYPES[k];
        return '<a class="bank-subj-card" style="--sc:' + esc(s.color) + ';" onclick="navigate(\'bank\', \'common\')">' +
          '<div class="bsc-top">' +
            '<span class="bsc-icon">' + s.icon + '</span>' +
            '<span class="bsc-name">' + esc(s.name) + '</span>' +
            '<span class="bsc-count">' + s.cats.length + ' 题型</span>' +
          '</div>' +
          '<div class="bsc-cats">' + s.cats.slice(0, 4).map(function (c) {
            return '<span>' + esc(c.name) + '</span>';
          }).join('') + (s.cats.length > 4 ? '<span class="bsc-more">+' + (s.cats.length - 4) + '</span>' : '') + '</div>' +
        '</a>';
      }).join('') + '</div>' +
    '</div>';

    // 5) 最近收藏（垂直列表）
    var recentHtml = '';
    if (recent.length) {
      recentHtml = '<div class="bank-section">' +
        '<div class="bank-section-head">' +
          '<h3>⭐ 最近收藏</h3>' +
          '<a class="bank-section-more" onclick="navigate(\'bank\', \'fav\')">查看全部 →</a>' +
        '</div>' +
        '<div class="bank-recent-list">' + recent.map(function (f) {
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
          return '<a class="bank-recent-item" style="--sc:' + color + ';" onclick="navigate(\'bank\', \'fav\')">' +
            '<span class="bri-icon">' + icon + '</span>' +
            '<div class="bri-body">' +
              '<div class="bri-meta">' + esc(sName) + (vName ? ' · ' + esc(vName) : '') +
                '<span class="bri-type">' + (f.type === 'choice' ? '选择' : '填空') + '</span>' +
              '</div>' +
              '<div class="bri-q">' + esc(qText.length > 80 ? qText.slice(0, 80) + '…' : qText) + '</div>' +
            '</div>' +
            '<span class="bri-time">' + timeAgo(f.addedAt) + '</span>' +
          '</a>';
        }).join('') + '</div>' +
      '</div>';
    }

    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / 题库</div>' +
      '<div class="panel">' +
        headerHtml +
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

    // 学科筛选芯片
    var filterChips = '<span class="bank-cat-chip' + (filterSid === 'all' ? ' active' : '') + '" onclick="window.__setBankFavFilter(\'all\')">全部（' + favs.length + '）</span>' +
      Object.keys(GZ_COMMON_TYPES).map(function (k) {
        var s = GZ_COMMON_TYPES[k];
        var n = favs.filter(function (f) { return f.sid === k; }).length;
        return '<span class="bank-cat-chip' + (filterSid === k ? ' active' : '') + '" style="--sc:' + s.color + ';" onclick="window.__setBankFavFilter(\'' + k + '\')">' + s.icon + ' ' + s.name + '（' + n + '）</span>';
      }).join('');

    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / <a onclick="navigate(\'bank\', \'home\')">题库</a> / 我的收藏</div>' +
      '<div class="panel">' +
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

  function renderBankCommon() {
    var keys = Object.keys(GZ_COMMON_TYPES);
    var totalCats = keys.reduce(function (n, k) { return n + GZ_COMMON_TYPES[k].cats.length; }, 0);

    // 学科横向 tab
    var tabs = keys.map(function (k) {
      var s = GZ_COMMON_TYPES[k];
      return '<span class="bank-subj-tab" style="--sc:' + esc(s.color) + ';" onclick="window.__bankCommonSubject(\'' + k + '\')">' +
        esc(s.icon) + ' ' + esc(s.name) +
      '</span>';
    }).join('');

    // 每个学科一个分类块
    var blocks = keys.map(function (k) {
      var s = GZ_COMMON_TYPES[k];
      var cats = s.cats.map(function (c, i) {
        var hot = (i === 0) ? '<span class="bank-cat-hot">热门</span>' : '';
        return '<div class="bank-cat-card" style="--sc:' + esc(s.color) + ';" onclick="toast(\'' + esc(c.name) + ' 题目正在建设中…\')">' +
          '<div class="bank-cat-card-icon">' + c.icon + '</div>' +
          '<div class="bank-cat-card-name">' + esc(c.name) + hot + '</div>' +
          '<div class="bank-cat-card-arrow">→</div>' +
        '</div>';
      }).join('');
      return '<section class="bank-common-block" data-sid="' + esc(k) + '" style="--sc:' + esc(s.color) + ';">' +
        '<header class="bank-common-block-head">' +
          '<div class="bank-common-block-icon">' + s.icon + '</div>' +
          '<div>' +
            '<div class="bank-common-block-title">' + esc(s.name) + '常考题型</div>' +
            '<div class="bank-common-block-tip">共 ' + s.cats.length + ' 个常考题型 · 点击进入练习</div>' +
          '</div>' +
        '</header>' +
        '<div class="bank-cat-grid">' + cats + '</div>' +
      '</section>';
    }).join('');

    view.innerHTML = '' +
      '<div class="crumb"><a onclick="navigate(\'home\')">首页</a> / <a onclick="navigate(\'bank\', \'home\')">题库</a> / 高中常考题型</div>' +
      '<div class="panel">' +
        '<div class="bank-hero" style="background: linear-gradient(120deg, #f0f4ff 0%, #f7eaff 100%);">' +
          '<div class="bank-hero-text">' +
            '<div class="bank-hero-greet">📚 高考备考</div>' +
            '<h2 class="bank-hero-title">高中常考题型</h2>' +
            '<p class="bank-hero-desc">按学科与题型分类整理的高中常考题，可在线作答、即时反馈。<br>目前已上线 ' + keys.length + ' 个学科 · ' + totalCats + ' 个常考题型。</p>' +
          '</div>' +
          '<div class="bank-hero-deco">📚</div>' +
        '</div>' +
        '<div class="bank-subj-tabs">' + tabs + '</div>' +
        blocks +
      '</div>';
  }
  window.__bankCommonSubject = function (sid) {
    var block = document.querySelector('.bank-common-block[data-sid="' + sid + '"]');
    if (block) block.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  function renderBank(mode) {
    if (mode === 'fav') renderBankFav();
    else if (mode === 'common') renderBankCommon();
    else renderBankHome();
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
    var filtered = filterSid === 'all' ? wrong : wrong.filter(function (w) { return w.key && w.key.split('/')[0] === filterSid; });
    // 统计各学科
    var subjCount = {};
    wrong.forEach(function (w) {
      var sid = w.key ? w.key.split('/')[0] : '_';
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
        if (w.key) {
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
          '<div><b>高中预习网站</b><p>数据保存在本机浏览器中，无需登录即开即用。注册账号后可在本机多账号间切换。</p></div>' +
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

  /* ---------- 启动 ---------- */
  window.addEventListener('hashchange', render);
  document.addEventListener('DOMContentLoaded', render);
  if (document.readyState !== 'loading') render();
})();
