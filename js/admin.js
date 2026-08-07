/* ============================================================
 * 管理后台 · 全站学习数据看板
 *
 * 数据来源：云函数 gzApi 的 adminOverview（仅返回聚合摘要与脱敏手机号）。
 * 若云函数尚未部署该 action，会自动降级为「演示数据」并在页面顶部挂出横幅，
 * 以便在不部署的情况下先评估界面。
 * ============================================================ */
(function () {
  'use strict';

  var CB_API = 'https://shanghai-env1-d3gq2odzh654c9264-1462691854.ap-shanghai.app.tcloudbase.com/api';
  var TOKEN_KEY = 'gz_admin_token';
  var NAME_KEY = 'gz_admin_name';

  var state = {
    days: 30,
    data: null,
    demo: false,
    view: 'learning',   // 'learning' = 学习行为；'traffic' = 访客流量（统一看板的两个标签页）
    sortKey: 'lessons',
    sortDir: -1,
    keyword: ''
  };

  /* ---------- 基础工具 ---------- */
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function fmtDate(ts) {
    if (!ts) return '—';
    var d = new Date(ts);
    return d.getFullYear() + '-' + p2(d.getMonth() + 1) + '-' + p2(d.getDate());
  }
  function p2(n) { return n < 10 ? '0' + n : '' + n; }
  /** 相对时间：用于「最后活跃」，比绝对日期更快判断谁在活跃 */
  function fmtAgo(ts) {
    if (!ts) return '<span class="muted">从未</span>';
    var s = (Date.now() - ts) / 1000;
    if (s < 3600) return '刚刚';
    if (s < 86400) return Math.floor(s / 3600) + ' 小时前';
    var d = Math.floor(s / 86400);
    if (d === 1) return '昨天';
    if (d < 30) return d + ' 天前';
    if (d < 365) return Math.floor(d / 30) + ' 个月前';
    return Math.floor(d / 365) + ' 年前';
  }

  /* ---------- 学科元数据（来自 data-gz.js + data-meta.js） ---------- */
  function subjectMeta() {
    var m = {};
    (window.GZ_SUBJECTS || []).forEach(function (s) {
      var total = 0;
      (s.volumes || []).forEach(function (v) {
        total += (v.units && v.units.length) || (v.points && v.points.length) || 0;
      });
      m[s.id] = { name: s.name, icon: s.icon, color: s.color, total: total };
    });
    return m;
  }
  function siteTotalLessons() {
    // data-meta.js 已把 GZ_UNITS 的 units 合并进 GZ_SUBJECTS.volumes，
    // 故累加各学科的 units 长度即全站课时总数（与 data-meta 头部注释的 1274 一致）。
    if (typeof window.gzStats === 'function') {
      try { var p = window.gzStats().points; if (p) return p; } catch (e) { /* 忽略 */ }
    }
    var m = subjectMeta();
    var total = 0;
    Object.keys(m).forEach(function (sid) { total += m[sid].total || 0; });
    return total;
  }

  /* ---------- 网络 ---------- */
  function api(action, payload) {
    return fetch(CB_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: action, payload: payload || {} })
    }).then(function (r) { return r.json(); });
  }

  /* ============================================================
   * 演示数据
   * 云函数未部署 adminOverview 时使用，结构与真实响应完全一致，
   * 以保证界面在两种模式下的渲染路径没有分叉。
   * ============================================================ */
  function buildDemo(days) {
    var DAY = 86400000;
    var now = Date.now();
    var sm = subjectMeta();
    var sids = Object.keys(sm);
    if (!sids.length) sids = ['chinese', 'math', 'english', 'physics', 'chemistry', 'biology'];

    var people = [
      { n: '林晓', d: 0.9, l: 46, w: 12, q: 138, a: 0.82, st: 14 },
      { n: '陈屿', d: 1, l: 38, w: 21, q: 122, a: 0.66, st: 9 },
      { n: '苏念', d: 2, l: 33, w: 7, q: 96, a: 0.88, st: 6 },
      { n: '周越', d: 4, l: 21, w: 15, q: 74, a: 0.61, st: 0 },
      { n: '何予', d: 6, l: 17, w: 4, q: 51, a: 0.79, st: 2 },
      { n: '罗一鸣', d: 13, l: 12, w: 9, q: 40, a: 0.58, st: 0 },
      { n: '沈知白', d: 27, l: 6, w: 2, q: 15, a: 0.73, st: 0 },
      { n: '', d: 55, l: 0, w: 0, q: 0, a: 0, st: 0 }
    ];

    // 用确定性伪随机，保证每次刷新演示数据一致，便于比对界面
    var seed = 20260804;
    function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }

    var rows = [];
    var subjTotals = {};
    var daily = {};   // date -> {actives, lessons, quiz}
    function bump(d, f, v) {
      if (!daily[d]) daily[d] = { actives: 0, lessons: 0, quiz: 0 };
      daily[d][f] += v;
    }

    people.forEach(function (p, i) {
      var last = p.l ? now - p.d * DAY : null;
      var phone = '1' + (37 + i) + '****' + (1000 + i * 137).toString().slice(0, 4);
      var subs = {};
      var left = p.l;
      // 课时按学科分配，靠前的学科多一些
      for (var k = 0; k < sids.length && left > 0; k++) {
        var take = (k === sids.length - 1) ? left : Math.min(left, Math.round(p.l * (0.34 / (k + 1)) + rnd() * 2));
        if (take > 0) { subs[sids[k]] = take; subjTotals[sids[k]] = (subjTotals[sids[k]] || 0) + take; left -= take; }
      }
      rows.push({
        phoneMask: phone,
        phone: phone,
        nickname: p.n,
        isAdmin: false,
        createdAt: now - (p.d + 20 + i * 9) * DAY,
        updatedAt: last,
        lastActive: last,
        lessons: p.l,
        wrong: p.w,
        favs: Math.round(p.l * 0.3),
        quizTotal: p.q,
        quizRight: Math.round(p.q * p.a),
        accuracy: p.q ? Math.round(p.a * 1000) / 10 : null,
        streak: p.st,
        checkinTotal: p.st ? p.st + Math.round(rnd() * 20) : 0,
        subjects: subs
      });

      // 把该用户的活动铺到近 days 天里，越近越密
      var span = Math.min(days, 60);
      var actDays = {};
      for (var j = 0; j < p.l; j++) {
        var off = Math.floor(Math.pow(rnd(), 1.7) * span) + p.d;
        if (off >= days) continue;
        var ds = dstr(now - off * DAY);
        bump(ds, 'lessons', 1);
        actDays[ds] = true;
      }
      for (var j2 = 0; j2 < p.q; j2++) {
        var off2 = Math.floor(Math.pow(rnd(), 1.7) * span) + p.d;
        if (off2 >= days) continue;
        var ds2 = dstr(now - off2 * DAY);
        bump(ds2, 'quiz', 1);
        actDays[ds2] = true;
      }
      Object.keys(actDays).forEach(function (d) { bump(d, 'actives', 1); });
    });

    function dstr(ms) { return new Date(ms + 8 * 3600000).toISOString().slice(0, 10); }

    var trend = [];
    var todayMs = +new Date(dstr(now) + 'T00:00:00Z');
    for (var i2 = days - 1; i2 >= 0; i2--) {
      var d2 = new Date(todayMs - i2 * DAY).toISOString().slice(0, 10);
      var v = daily[d2] || { actives: 0, lessons: 0, quiz: 0 };
      trend.push({ date: d2, actives: v.actives, lessons: v.lessons, quiz: v.quiz });
    }

    var d7 = now - 7 * DAY;
    var qt = rows.reduce(function (a, r) { return a + r.quizTotal; }, 0);
    var qr = rows.reduce(function (a, r) { return a + r.quizRight; }, 0);

    return {
      ok: true,
      generatedAt: now,
      days: days,
      summary: {
        users: rows.length,
        active7: rows.filter(function (r) { return r.lastActive && r.lastActive >= d7; }).length,
        lessons: rows.reduce(function (a, r) { return a + r.lessons; }, 0),
        wrong: rows.reduce(function (a, r) { return a + r.wrong; }, 0),
        quizTotal: qt,
        quizRight: qr,
        accuracy: qt ? Math.round(qr * 1000 / qt) / 10 : null,
        newUsers7: 1
      },
      rows: rows,
      subjects: Object.keys(subjTotals).map(function (sid) {
        return { sid: sid, lessons: subjTotals[sid] };
      }).sort(function (a, b) { return b.lessons - a.lessons; }),
      trend: trend,
      content: buildDemoContent(days),
      warnings: { legacySecret: false, progressWithoutTs: false, truncated: false }
    };
  }

  /* ============================================================
   * 渲染
   * ============================================================ */
  function renderBanners() {
    var w = (state.data && state.data.warnings) || {};
    var h = '';
    if (state.demo) {
      h += bn('demo', '🧪',
        '<b>当前为演示数据</b>，非真实用户。云函数尚未部署 <code>adminOverview</code>，' +
        '因此页面用一份结构完全相同的模拟数据渲染，供你先评估界面。' +
        '部署后刷新本页即会自动切换为真实数据。');
    }
    if (w.legacySecret) {
      h += bn('danger', '🔓',
        '<b>服务端签名密钥仍是代码里的默认值</b>，而该默认值已随公开仓库泄漏——' +
        '任何人都可以伪造任意账号的登录凭证。请尽快配置环境变量后重新部署：' +
        '<br><code>tcb fn config update gzApi --envs GZ_API_SECRET=&lt;足够长的随机串&gt;</code>');
    }
    if (w.progressWithoutTs) {
      h += bn('warn', 'ℹ️',
        '存在<b>没有时间戳的历史进度记录</b>（早期版本写入）。这部分已计入「累计学完课时」，' +
        '但无法归入具体日期，故不体现在下方趋势图中——趋势图的课时数会略低于总数。');
    }
    if (w.truncated) {
      h += bn('warn', '⚠️',
        '用户数已达单次查询上限 1000 条，统计结果可能不完整，需要改造为分页读取。');
    }
    $('banners').innerHTML = h;
  }
  function bn(cls, icon, html) {
    return '<div class="banner ' + cls + '"><span class="bi">' + icon + '</span><div>' + html + '</div></div>';
  }

  function renderCards() {
    var s = state.data.summary;
    var total = siteTotalLessons();
    var cov = total ? Math.round(s.lessons * 1000 / total) / 10 : null;
    var accCls = s.accuracy == null ? '' : (s.accuracy >= 80 ? 'up' : '');

    return '<div class="cards">' +
      card('c1', '👥 注册用户', s.users, '',
        s.newUsers7 ? '近 7 天新增 ' + s.newUsers7 + ' 人' : '近 7 天无新增') +
      card('c2', '🔥 7 日活跃', s.active7, '',
        s.users ? '占全部用户 ' + Math.round(s.active7 * 100 / s.users) + '%' : '—') +
      card('c3', '📘 累计学完课时', s.lessons, '',
        cov != null ? '覆盖全站 ' + total + ' 课时的 ' + cov + '%' : '') +
      card('c4', '✏️ 累计做题', s.quizTotal, '',
        s.accuracy == null ? '暂无作答记录' : '正确率 ' + s.accuracy + '%', accCls) +
      card('c5', '📕 错题总量', s.wrong, '',
        s.quizTotal ? '约占作答量 ' + Math.round(s.wrong * 100 / s.quizTotal) + '%' : '') +
      '</div>';
  }
  function card(cls, k, v, unit, sub, subCls) {
    return '<div class="card ' + cls + '">' +
      '<div class="k">' + k + '</div>' +
      '<div class="v">' + v + (unit ? '<small>' + unit + '</small>' : '') + '</div>' +
      '<div class="s ' + (subCls || '') + '">' + (sub || '') + '</div>' +
      '</div>';
  }

  /* ---------- 趋势折线图（手写 SVG，不引入图表库） ---------- */
  function renderTrend() {
    var t = state.data.trend || [];
    var series = [
      { key: 'actives', name: '活跃人数', color: '#4a7de0' },
      { key: 'lessons', name: '完成课时', color: '#16a34a' },
      { key: 'quiz', name: '做题数', color: '#9c56d4' }
    ];
    var W = 1000, H = 250, PL = 42, PR = 14, PT = 14, PB = 26;
    var iw = W - PL - PR, ih = H - PT - PB;

    var max = 0;
    t.forEach(function (d) {
      series.forEach(function (s) { if (d[s.key] > max) max = d[s.key]; });
    });
    if (max <= 0) {
      return panel('学习趋势', rangeHint(),
        '<div class="empty"><span class="big">📉</span>所选时间范围内没有任何学习活动</div>');
    }
    var nice = niceMax(max);

    function X(i) { return PL + (t.length === 1 ? iw / 2 : i * iw / (t.length - 1)); }
    function Y(v) { return PT + ih - (v / nice) * ih; }

    var g = '';
    for (var i = 0; i <= 4; i++) {
      var y = PT + ih - i * ih / 4;
      var val = Math.round(nice * i / 4);
      g += '<line x1="' + PL + '" y1="' + y + '" x2="' + (W - PR) + '" y2="' + y +
        '" stroke="#eef1f7" stroke-width="1"/>' +
        '<text x="' + (PL - 8) + '" y="' + (y + 4) + '" font-size="11" fill="#9ca3af" text-anchor="end">' + val + '</text>';
    }

    // X 轴日期标签：最多 7 个，避免拥挤
    var step = Math.max(1, Math.ceil(t.length / 7));
    for (var j = 0; j < t.length; j += step) {
      g += '<text x="' + X(j) + '" y="' + (H - 6) + '" font-size="11" fill="#9ca3af" text-anchor="middle">' +
        t[j].date.slice(5) + '</text>';
    }

    var paths = '';
    series.forEach(function (s, si) {
      var pts = t.map(function (d, i) { return X(i) + ',' + Y(d[s.key]); }).join(' ');
      if (si === 0) {
        // 首条序列加面积填充，突出主指标
        paths += '<polygon points="' + PL + ',' + (PT + ih) + ' ' + pts + ' ' + (W - PR) + ',' + (PT + ih) +
          '" fill="' + s.color + '" opacity="0.07"/>';
      }
      paths += '<polyline points="' + pts + '" fill="none" stroke="' + s.color +
        '" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>';
      // 数据点：点数少时才画，避免 90 天时糊成一片
      if (t.length <= 31) {
        t.forEach(function (d, i) {
          paths += '<circle cx="' + X(i) + '" cy="' + Y(d[s.key]) + '" r="2.4" fill="#fff" stroke="' +
            s.color + '" stroke-width="1.6"><title>' + d.date + ' · ' + s.name + ' ' + d[s.key] + '</title></circle>';
        });
      }
    });

    var legend = '<div class="legend">' + series.map(function (s) {
      return '<span><i style="background:' + s.color + '"></i>' + s.name + '</span>';
    }).join('') + '</div>';

    return panel('学习趋势', rangeHint() + legend,
      '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid meet">' +
      g + paths + '</svg>');
  }
  function rangeHint() {
    return '<span class="hint">近 ' + state.days + ' 天</span><div class="spacer"></div>';
  }
  function niceMax(v) {
    if (v <= 5) return 5;
    var mag = Math.pow(10, Math.floor(Math.log(v) / Math.LN10));
    var n = Math.ceil(v / mag * 2) / 2 * mag;
    return n;
  }

  /* ---------- 学科热度 ---------- */
  function renderSubjects() {
    var sm = subjectMeta();
    var list = state.data.subjects || [];
    if (!list.length) {
      return panel('学科热度', '<span class="hint">按全站已学完课时数排序</span>',
        '<div class="empty"><span class="big">📚</span>还没有任何学科被学习</div>');
    }
    var max = list[0].lessons || 1;
    var h = list.map(function (s) {
      var meta = sm[s.sid] || { name: s.sid, icon: '📘', color: '#4a7de0', total: 0 };
      var pct = Math.round(s.lessons * 100 / max);
      var cov = meta.total ? Math.round(s.lessons * 100 / meta.total) : null;
      return '<div class="subj-row">' +
        '<span class="nm">' + (meta.icon || '') + ' ' + esc(meta.name) + '</span>' +
        '<span class="subj-bar"><i style="width:' + pct + '%;background:' + meta.color + '"></i></span>' +
        '<span class="vl">' + s.lessons + (cov != null ? ' <span class="muted">/' + meta.total + '</span>' : '') + '</span>' +
        '</div>';
    }).join('');
    return panel('学科热度', '<span class="hint">数字为「全站已学完课时 / 该科总课时」</span>', h);
  }

  /* ---------- 用户表 ---------- */
  var COLS = [
    { k: 'phoneMask', t: '账号', num: false },
    { k: 'nickname', t: '昵称', num: false },
    { k: 'lessons', t: '学完课时', num: true },
    { k: 'quizTotal', t: '做题', num: true },
    { k: 'accuracy', t: '正确率', num: true },
    { k: 'wrong', t: '错题', num: true },
    { k: 'streak', t: '连签', num: true },
    { k: 'lastActive', t: '最后活跃', num: true },
    { k: 'createdAt', t: '注册时间', num: true }
  ];

  function sortedRows() {
    var rows = (state.data.rows || []).slice();
    var kw = state.keyword.trim().toLowerCase();
    if (kw) {
      rows = rows.filter(function (r) {
        return (r.phoneMask || '').toLowerCase().indexOf(kw) >= 0 ||
          (r.nickname || '').toLowerCase().indexOf(kw) >= 0;
      });
    }
    var k = state.sortKey, dir = state.sortDir;
    rows.sort(function (a, b) {
      var x = a[k], y = b[k];
      // null 恒排在末尾，不受升降序影响——否则「从未活跃」的用户会顶到第一行
      if (x == null && y == null) return 0;
      if (x == null) return 1;
      if (y == null) return -1;
      if (typeof x === 'string') return x.localeCompare(y) * dir;
      return (x - y) * dir;
    });
    return rows;
  }

  function renderUsers() {
    var rows = sortedRows();
    var head = COLS.map(function (c) {
      var on = state.sortKey === c.k;
      return '<th class="' + (c.num ? 'num ' : '') + (on ? 'on' : '') + '" data-k="' + c.k + '">' +
        c.t + '<span class="ar">' + (on ? (state.sortDir > 0 ? '▲' : '▼') : '▽') + '</span></th>';
    }).join('');

    var body = rows.map(function (r) {
      var acc = r.accuracy;
      var accHtml = acc == null ? '<span class="muted">—</span>'
        : '<span class="acc-bar ' + (acc < 60 ? 'low' : acc < 80 ? 'mid' : '') + '">' +
          '<i style="width:' + acc + '%"></i></span>' + acc + '%';
      var isNew = r.createdAt && (Date.now() - r.createdAt) < 7 * 86400000;
      var active = r.lastActive && (Date.now() - r.lastActive) < 7 * 86400000;
      return         '<tr data-phone="' + esc(r.phone || '') + '" style="cursor:pointer">' +
        '<td class="mono">' + esc(r.phoneMask) +
          (isNew ? ' <span class="tag new">新</span>' : '') + '</td>' +
        '<td>' + (r.nickname ? esc(r.nickname) : '<span class="muted">未设置</span>') + '</td>' +
        '<td class="num"><b>' + r.lessons + '</b></td>' +
        '<td class="num">' + (r.quizTotal || '<span class="muted">0</span>') + '</td>' +
        '<td class="num">' + accHtml + '</td>' +
        '<td class="num">' + (r.wrong || '<span class="muted">0</span>') + '</td>' +
        '<td class="num">' + (r.streak ? r.streak + ' 天' : '<span class="muted">—</span>') + '</td>' +
        '<td class="num">' + fmtAgo(r.lastActive) +
          (active ? ' <span class="tag on">活跃</span>' : '') + '</td>' +
        '<td class="num muted">' + fmtDate(r.createdAt) + '</td>' +
        '</tr>';
    }).join('');

    var inner = rows.length
      ? '<div class="tbl-wrap"><table class="tbl"><thead><tr>' + head + '</tr></thead><tbody>' + body + '</tbody></table></div>'
      : '<div class="empty"><span class="big">🔍</span>没有匹配的用户</div>';

    var tools = '<span class="hint">共 ' + (state.data.rows || []).length + ' 人（不含管理员）· 点击表头可排序</span>' +
      '<div class="spacer"></div>' +
      '<input class="search" id="kw" placeholder="搜索账号或昵称" value="' + esc(state.keyword) + '" />' +
      '<button class="btn sm" id="btnCsv">导出 CSV</button>';

    return panel('用户明细', tools, inner);
  }

  function panel(title, tools, inner) {
    return '<div class="panel">' +
      '<div class="panel-head"><h2>' + title + '</h2>' + (tools || '') + '</div>' +
      inner + '</div>';
  }

  /* ---------- 访客流量看板（统一看板的第二个标签页） ---------- */
  function setView(v) {
    state.view = v;
    highlightView(v);
    if (v === 'traffic') { renderTraffic(); return; }
    // 切回学习行为：已有数据直接重渲染，否则按当前登录态重新拉取
    if (state.data) { renderAll(); loadContent(); }
    else if (localStorage.getItem(TOKEN_KEY)) loadOverview();
    else enterDemo(false);
  }
  function highlightView(v) {
    state.view = (typeof v === 'string') ? v : state.view;
    Array.prototype.forEach.call(document.querySelectorAll('#viewSeg button'), function (x) {
      x.classList.toggle('on', x.getAttribute('data-view') === state.view);
    });
  }

  /* ---------- 访客流量（自建 · 数据存自有 CloudBase visit_logs）---------- */
  var trafficDays = 30;
  var trafficCharts = {};
  function destroyTrafficCharts() {
    Object.keys(trafficCharts).forEach(function (k) {
      try { trafficCharts[k].destroy(); } catch (e) { /* 忽略 */ }
    });
    trafficCharts = {};
  }

  function renderTraffic() {
    destroyTrafficCharts();
    var seg = [7, 30, 90].map(function (n) {
      return '<button data-td="' + n + '" class="' + (n === trafficDays ? 'on' : '') + '">' + n + ' 天</button>';
    }).join('');
    var head = '<span class="hint">这里显示有多少人来看你的网站 · 数据只存在你自己的云库里，随时能看</span>' +
      '<div class="spacer"></div>' +
      '<div class="seg small" id="trafSeg">' + seg + '</div>';
    $('body').innerHTML =
      '<div class="cards" id="trafCards"></div>' +
      panel('网站访客情况', head, '<div id="trafBody"><div class="empty"><div class="spin"></div>加载访客统计…</div></div>');
    Array.prototype.forEach.call(document.querySelectorAll('#trafSeg button'), function (b) {
      b.onclick = function () {
        trafficDays = parseInt(b.getAttribute('data-td'), 10) || 30;
        Array.prototype.forEach.call(document.querySelectorAll('#trafSeg button'), function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        loadTraffic();
      };
    });
    loadTraffic();
  }

  function loadTraffic() {
    var token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      destroyTrafficCharts();
      $('trafBody').innerHTML = '<div class="empty">请先以管理员身份登录后再查看访客统计。</div>';
      return;
    }
    $('trafBody').innerHTML = '<div class="empty"><div class="spin"></div>加载访客统计…</div>';
    api('visitStats', { token: token, days: trafficDays }).then(function (res) {
      if (!res || !res.ok) {
        $('trafBody').innerHTML = '<div class="empty">加载失败：' + esc((res && res.msg) || '未知错误') +
          '<br><span class="muted">若提示无权限，请重新登录管理员账号。</span></div>';
        return;
      }
      paintTraffic(res.stats || {});
    }).catch(function (e) {
      $('trafBody').innerHTML = '<div class="empty">请求异常：' + esc((e && e.message) || e) + '</div>';
    });
  }

  function friendlyPath(p) {
    p = (p || '').replace(/^#\/?/, '').replace(/^[\/]+/, '');
    if (!p || p === 'index.html' || p === 'index') return '首页';
    var map = {
      'bank': '题库', 'video': '视频课', 'course': '课程', 'subject': '学科',
      'lesson': '课时', 'profile': '我的', 'login': '登录页', 'guide': '使用指南',
      'about': '关于', 'rank': '排行榜', 'wrong': '错题本', 'fav': '收藏夹', 'exam': '试卷'
    };
    var seg = p.split('/')[0].split('?')[0];
    return map[seg] || seg;
  }
  function fmtDur(sec) {
    sec = sec || 0;
    if (sec < 60) return sec + ' 秒';
    var m = Math.floor(sec / 60), s = sec % 60;
    if (m < 60) return m + ' 分 ' + s + ' 秒';
    var h = Math.floor(m / 60);
    return h + ' 时 ' + (m % 60) + ' 分';
  }
  function delta(a, b) {
    a = a || 0; b = b || 0;
    if (!b) return { cls: '', txt: '昨日无数据' };
    var d = Math.round((a - b) * 1000 / b) / 10;
    if (d > 0) return { cls: 'up', txt: '较昨日 +' + d + '%' };
    if (d < 0) return { cls: 'down', txt: '较昨日 ' + d + '%' };
    return { cls: '', txt: '与昨日持平' };
  }

  function paintRank(elId, arr, unit) {
    var box = document.getElementById(elId);
    if (!box) return;
    if (!arr.length) { box.innerHTML = '<p class="muted">暂无数据</p>'; return; }
    var max = arr[0].value || 1;
    box.innerHTML = arr.slice(0, 8).map(function (x, i) {
      var pct = Math.max(8, Math.round((x.value / max) * 100));
      return '<div class="rank-row">' +
        '<div class="rank-name"><span class="rank-no">' + (i + 1) + '</span>' + esc(x.name || '') + '</div>' +
        '<div class="rank-val">' + x.value + ' ' + unit + '</div>' +
        '<div class="rank-bar"><span style="width:' + pct + '%"></span></div>' +
      '</div>';
    }).join('');
  }

  function paintTraffic(s) {
    destroyTrafficCharts();
    var rangeDays = s.rangeDays || 30;
    var t = s.today || { pv: 0, uv: 0, ip: 0 };
    var y = s.yesterday || { pv: 0, uv: 0, ip: 0 };
    var tot = s.total || { pv: 0, uv: 0, ip: 0 };
    var trend = s.trend || [];
    var hourly = s.hourly || [];
    var realtime = s.realtime || [];
    var nvo = s.newVsOld || { new: 0, old: 0 };
    var newPct = (nvo.new + nvo.old) ? Math.round(nvo.new * 1000 / (nvo.new + nvo.old)) / 10 : 0;

    var dPv = delta(t.pv, y.pv), dUv = delta(t.uv, y.uv), dIp = delta(t.ip, y.ip);
    $('trafCards').innerHTML =
      card('t-pv', '👁 今日浏览量(PV)', String(t.pv), '', dPv.txt, dPv.cls) +
      card('t-uv', '🧑 今日访客(UV)', String(t.uv), '', dUv.txt, dUv.cls) +
      card('t-ip', '🌍 今日独立IP', String(t.ip), '', dIp.txt, dIp.cls) +
      card('t-cum', '📊 累计浏览量', String(tot.pv), '', '近 ' + rangeDays + ' 天 · ' + tot.uv + ' 人') +
      card('t-stay', '⏱ 平均停留', fmtDur(s.avgDuration), '', '跳出率 ' + (s.bounceRate || 0) + '%') +
      card('t-new', '🆕 新访客占比', newPct + '%', '', '新 ' + nvo.new + ' · 老 ' + nvo.old);

    if (!tot.pv) {
      $('trafBody').innerHTML = '<div class="empty">近 ' + rangeDays +
        ' 天还没有访客记录。让用户访问你的网站，几分钟后这里就会出数字了。</div>';
      return;
    }
    if (typeof Chart === 'undefined') {
      $('trafBody').innerHTML = '<div class="empty">图表库（Chart.js）没加载出来，刷新一下页面就好。</div>';
      return;
    }

    function rtRows() {
      if (!realtime.length) return '<p class="muted">最近还没有访客进来</p>';
      return '<div class="tbl-wrap"><table class="tbl rt">' +
        '<thead><tr><th>时间</th><th>地域</th><th>来源</th><th>看的页面</th><th>设备</th><th>浏览器</th></tr></thead><tbody>' +
        realtime.map(function (r) {
          return '<tr>' +
            '<td class="mono">' + (r.ts ? new Date(r.ts).toLocaleString('zh-CN', { hour12: false }) : '—') + '</td>' +
            '<td>' + esc(r.region || '未知') + '</td>' +
            '<td>' + esc(r.source || '直接访问') + '</td>' +
            '<td>' + esc(friendlyPath(r.path)) + '</td>' +
            '<td>' + esc(r.device || '未知') + '</td>' +
            '<td>' + esc(r.browser || '未知') + '</td>' +
          '</tr>';
        }).join('') + '</tbody></table></div>';
    }
    function rankPanel(title, cap, id) {
      return panel(title, '<span class="hint">' + (cap || '') + '</span>', '<div id="' + id + '" class="rank"></div>');
    }

    $('trafBody').innerHTML =
      panel('流量趋势', '<span class="hint">近 ' + rangeDays + ' 天每天的变化</span>',
        '<p class="traf-cap">折线往上 = 最近看的人变多了；往下 = 变少了。三条线分别是浏览量、访客数、独立IP。</p>' +
        '<div class="cv"><canvas id="trafTrend"></canvas></div>') +
      '<div class="traf-cols">' +
        panel('时段分布', '<span class="hint">按访问发生的钟点（北京时间）</span>',
          '<p class="traf-cap">哪个钟点来看的人最多，一眼就能看出来。</p>' +
          '<div class="cv"><canvas id="trafHourly"></canvas></div>') +
        panel('实时访客', '<span class="hint">最近进来的 ' + realtime.length + ' 个人</span>',
          '<p class="traf-cap">谁、在哪儿、从哪来、看的哪个页面，实时滚动。</p>' + rtRows()) +
      '</div>' +
      '<div class="traf-cols">' +
        rankPanel('来源分析', '大家从哪儿点进来的', 'trafSources') +
        rankPanel('地域分布', '访客都在哪些省份', 'trafRegions') +
      '</div>' +
      '<div class="traf-cols">' +
        rankPanel('受访页面 Top', '被打开最多的页面', 'trafPages') +
        rankPanel('入口页面 Top', '大家第一次进来看的页面', 'trafEntry') +
      '</div>' +
      '<div class="traf-cols">' +
        rankPanel('设备', '手机 / 电脑 / 平板', 'trafDevices') +
        rankPanel('浏览器', '大家用哪种浏览器', 'trafBrowsers') +
      '</div>' +
      '<div class="traf-cols">' +
        rankPanel('操作系统', '手机 / 电脑用的系统', 'trafOs') +
        rankPanel('屏幕分辨率', '大家屏幕多大', 'trafRes') +
      '</div>' +
      rankPanel('新老访客', '第一次来的 vs 回来过的', 'trafNewOld');

    trafficCharts.trend = new Chart(document.getElementById('trafTrend'), {
      type: 'line',
      data: {
        labels: trend.map(function (x) { return (x.day || '').slice(5); }),
        datasets: [
          { label: '浏览量(PV)', data: trend.map(function (x) { return x.pv; }), borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,.10)', fill: true, tension: .3 },
          { label: '访客(UV)', data: trend.map(function (x) { return x.uv; }), borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,.10)', fill: true, tension: .3 },
          { label: '独立IP', data: trend.map(function (x) { return x.ip; }), borderColor: '#9c56d4', backgroundColor: 'rgba(156,86,212,.10)', fill: true, tension: .3 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
        plugins: { legend: { position: 'top' } }, scales: { y: { beginAtZero: true, ticks: { precision: 0 } } } }
    });

    trafficCharts.hourly = new Chart(document.getElementById('trafHourly'), {
      type: 'bar',
      data: {
        labels: hourly.map(function (x) { return x.hour + '时'; }),
        datasets: [{ label: '访问次数', data: hourly.map(function (x) { return x.pv; }), backgroundColor: 'rgba(74,125,224,.75)', borderRadius: 4 }]
      },
      options: { responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { precision: 0 } } } }
    });

    paintRank('trafSources', s.sources || [], '次');
    paintRank('trafRegions', s.regions || [], '次');
    paintRank('trafPages', (s.topPages || []).map(function (x) { return { name: friendlyPath(x.name), value: x.value }; }), '次');
    paintRank('trafEntry', (s.entryPages || []).map(function (x) { return { name: friendlyPath(x.name), value: x.value }; }), '次');
    paintRank('trafDevices', s.devices || [], '次');
    paintRank('trafBrowsers', s.browsers || [], '次');
    paintRank('trafOs', s.os || [], '次');
    paintRank('trafRes', s.resolutions || [], '次');
    paintRank('trafNewOld', [
      { name: '🆕 新访客', value: nvo.new },
      { name: '👴 老访客', value: nvo.old }
    ], '人');
  }

  function renderAll() {
    renderBanners();
    var contentInner = (state.data && state.data.content)
      ? renderContentInner()
      : '<div class="empty"><div class="spin"></div>加载内容分析…</div>';
    $('body').innerHTML = renderCards() + renderTrend() + renderUsers() + renderSubjects() +
      '<div class="panel" id="contentPanel">' + contentHead() + contentInner + '</div>';
    $('genAt').textContent = new Date(state.data.generatedAt).toLocaleString('zh-CN');
    bindBody();
  }

  function bindBody() {
    Array.prototype.forEach.call(document.querySelectorAll('th[data-k]'), function (th) {
      th.onclick = function () {
        var k = th.getAttribute('data-k');
        if (state.sortKey === k) state.sortDir = -state.sortDir;
        else { state.sortKey = k; state.sortDir = -1; }
        renderAll();
      };
    });
    Array.prototype.forEach.call(document.querySelectorAll('#body tr[data-phone]'), function (tr) {
      tr.onclick = function () { openDetail(tr.getAttribute('data-phone')); };
    });
    var dc = $('drawerClose'); if (dc) dc.onclick = closeDrawer;
    var dm = $('drawerMask'); if (dm) dm.onclick = closeDrawer;
    var kw = $('kw');
    if (kw) {
      kw.oninput = function () {
        state.keyword = kw.value;
        renderAll();
        // 重渲染后输入框是新元素，需把焦点与光标位置还原，否则每输一个字就失焦
        var n = $('kw');
        if (n) { n.focus(); n.setSelectionRange(n.value.length, n.value.length); }
      };
    }
    var csv = $('btnCsv');
    if (csv) csv.onclick = exportCsv;
  }

  function exportCsv() {
    var rows = sortedRows();
    var head = ['账号', '昵称', '学完课时', '做题数', '答对数', '正确率(%)', '错题数', '收藏', '连续签到', '最后活跃', '注册时间'];
    var lines = [head.join(',')];
    rows.forEach(function (r) {
      lines.push([
        r.phoneMask, q(r.nickname), r.lessons, r.quizTotal, r.quizRight,
        r.accuracy == null ? '' : r.accuracy, r.wrong, r.favs, r.streak,
        r.lastActive ? fmtDate(r.lastActive) : '', fmtDate(r.createdAt)
      ].join(','));
    });
    // BOM 头，否则 Excel 打开中文会乱码
    var blob = new Blob(['\ufeff' + lines.join('\n')], { type: 'text/csv;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = '全站用户数据_' + fmtDate(Date.now()) + (state.demo ? '_演示' : '') + '.csv';
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }
  function q(s) {
    s = String(s == null ? '' : s);
    return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }

  /* ============================================================
   * 内容分析（演示 / 真实共用渲染）
   * ============================================================ */
  function buildDemoContent(days) {
    var sm = subjectMeta();
    var sids = Object.keys(sm);
    if (!sids.length) sids = ['chinese', 'math', 'english', 'physics', 'chemistry', 'biology'];

    var subjects = sids.map(function (sid, i) {
      var total = (sm[sid] && sm[sid].total) || 20;
      var attempts = total * (3 + (i % 3)) + (i * 7);
      var right = Math.round(attempts * (0.45 + ((i * 0.07) % 0.5)));
      return { sid: sid, wrong: attempts - right, attempts: attempts, right: right,
        accuracy: attempts ? Math.round(right * 1000 / attempts) / 10 : null };
    }).sort(function (a, b) { return (a.accuracy == null ? -1 : a.accuracy) - (b.accuracy == null ? -1 : b.accuracy); });

    var weak = [];
    sids.forEach(function (sid, i) {
      var meta = sm[sid] || { name: sid };
      for (var j = 0; j < (1 + (i % 2)); j++) {
        var attempts = 10 + ((i * 5 + j) % 20);
        var right = Math.floor(attempts * ((i * 0.11 + 0.1) % 0.7));
        weak.push({
          key: sid + '/u' + (j + 1),
          subjectName: meta.name,
          lessonName: meta.name + ' · 第' + (j + 1) + '节',
          wrong: 3 + ((i * 3 + j) % 9),
          attempts: attempts,
          right: right,
          accuracy: attempts ? Math.round(right * 1000 / attempts) / 10 : null
        });
      }
    });
    weak.sort(function (a, b) { return b.wrong - a.wrong; });
    return { subjects: subjects, weakLessons: weak.slice(0, 20) };
  }

  function renderContentInner() {
    var c = state.data.content || { subjects: [], weakLessons: [] };
    var sm = subjectMeta();

    var subjHtml = (c.subjects && c.subjects.length) ? c.subjects.map(function (s) {
      var meta = sm[s.sid] || { name: s.sid, icon: '📘', color: '#4a7de0', total: 0 };
      var acc = s.accuracy;
      var accCls = acc == null ? '' : (acc < 60 ? 'low' : acc < 80 ? 'mid' : '');
      return '<div class="subj-row">' +
        '<span class="nm">' + (meta.icon || '') + ' ' + esc(meta.name) + '</span>' +
        '<span class="subj-bar"><i class="' + accCls + '" style="width:' + (acc == null ? 0 : acc) + '%;background:' + meta.color + '"></i></span>' +
        '<span class="vl">' + (acc == null ? '—' : acc + '%') +
        (s.wrong ? ' <span class="muted">错' + s.wrong + '</span>' : '') + '</span>' +
        '</div>';
    }).join('') : '<div class="empty"><span class="big">📊</span>暂无可分析的作答数据</div>';

    var wl = c.weakLessons || [];
    var wlHtml = wl.length ? (
      '<div class="tbl-wrap"><table class="tbl"><thead><tr>' +
      '<th>学科</th><th>知识点</th><th class="num">错题</th><th class="num">作答</th><th class="num">正确率</th>' +
      '</tr></thead><tbody>' +
      wl.map(function (w) {
        var acc = w.accuracy;
        return '<tr><td>' + esc(w.subjectName || '—') + '</td><td>' + esc(w.lessonName || '—') + '</td>' +
          '<td class="num"><b>' + w.wrong + '</b></td><td class="num">' + (w.attempts || '—') + '</td>' +
          '<td class="num">' + (acc == null ? '—' : acc + '%') + '</td></tr>';
      }).join('') + '</tbody></table></div>'
    ) : '<div class="empty"><span class="big">✅</span>目前没有高频错题</div>';

    return '<div class="content-cols">' +
      '<div class="content-col"><h3>学科正确率（最弱在前）</h3>' + subjHtml + '</div>' +
      '<div class="content-col"><h3>薄弱知识点 Top ' + wl.length + '</h3>' + wlHtml + '</div>' +
      '</div>';
  }

  function loadContent() {
    var panel = $('contentPanel');
    if (!panel) return;
    if (state.demo || !localStorage.getItem(TOKEN_KEY)) return; // 演示模式由 renderAll 直接渲染
    api('adminContent', { token: localStorage.getItem(TOKEN_KEY), days: state.days }).then(function (res) {
      if (!panel) return;
      if (res && res.ok) { state.data.content = res; panel.innerHTML = contentHead() + renderContentInner(); return; }
      var msg = (res && res.msg) || '';
      if (msg.indexOf('未知操作') >= 0) { state.data.content = buildDemoContent(state.days); panel.innerHTML = contentHead() + renderContentInner(); return; }
      panel.innerHTML = contentHead() + '<div class="empty">内容分析加载失败</div>';
    }).catch(function () {
      if (panel) panel.innerHTML = contentHead() + '<div class="empty">内容分析加载失败</div>';
    });
  }
  function contentHead() {
    return '<div class="panel-head"><h2>内容分析</h2><span class="hint">跨全站用户的薄弱学科与知识点</span></div>';
  }

  /* ============================================================
   * 用户明细抽屉
   * ============================================================ */
  function buildDemoDetail(row) {
    var sm = subjectMeta();
    var sids = Object.keys(row.subjects || {});
    var wrongList = [];
    var n = Math.min(row.wrong || 0, 12);
    for (var i = 0; i < n; i++) {
      var sid = sids[i % (sids.length || 1)] || 'math';
      var meta = sm[sid] || { name: sid };
      wrongList.push({
        key: sid + '/u' + (i + 1),
        subjectName: meta.name,
        lessonName: meta.name + ' · 第' + (i + 1) + '节',
        question: '【示例题 ' + (i + 1) + '】这是一道关于「' + meta.name + '」的练习题',
        myAnswer: '（示例）学生的错误作答',
        answer: '（示例）标准答案',
        type: 'choice'
      });
    }
    var quizRecent = [];
    var base = sids[0] || 'math';
    for (var j = 0; j < Math.min(row.quizTotal || 0, 8); j++) {
      quizRecent.push({ ts: Date.now() - j * 3600000, key: base + '/u1', qi: j, right: j % 3 !== 0 });
    }
    return {
      ok: true, generatedAt: Date.now(),
      profile: row,
      wrongList: wrongList,
      quizRecent: quizRecent,
      checkin: { streak: row.streak || 0, total: row.checkinTotal || 0, lastDate: '' }
    };
  }

  function openDetail(phone) {
    var row = null;
    (state.data.rows || []).forEach(function (r) { if (r.phone === phone) row = r; });
    if (!row) return;
    $('drawerMask').style.display = 'block';
    $('drawer').style.display = 'flex';
    $('drawerBody').innerHTML = '<div class="empty"><div class="spin"></div>加载用户明细…</div>';

    if (state.demo || !localStorage.getItem(TOKEN_KEY)) { renderDetail(buildDemoDetail(row)); return; }
    api('adminUserDetail', { token: localStorage.getItem(TOKEN_KEY), phone: phone }).then(function (res) {
      if (res && res.ok) { renderDetail(res); return; }
      var msg = (res && res.msg) || '';
      if (msg.indexOf('未知操作') >= 0) { renderDetail(buildDemoDetail(row)); return; }
      if (msg.indexOf('无权限') >= 0 || msg.indexOf('失效') >= 0) { closeDrawer(); showGate('登录状态已失效，请重新登录'); return; }
      $('drawerBody').innerHTML = '<div class="empty">加载失败：' + esc(msg) + '</div>';
    }).catch(function (e) {
      $('drawerBody').innerHTML = '<div class="empty">网络错误：' + esc(e && e.message) + '</div>';
    });
  }
  function closeDrawer() {
    $('drawerMask').style.display = 'none';
    $('drawer').style.display = 'none';
  }
  function stat(k, v) {
    return '<div class="d-stat"><div class="k">' + k + '</div><div class="v">' + v + '</div></div>';
  }
  function renderDetail(d) {
    var p = d.profile || {};
    var sm = subjectMeta();
    var subjHtml = Object.keys(p.subjects || {}).map(function (sid) {
      var meta = sm[sid] || { name: sid, total: 0, color: '#4a7de0', icon: '' };
      var done = p.subjects[sid];
      var pct = meta.total ? Math.round(done * 100 / meta.total) : null;
      return '<div class="subj-row"><span class="nm">' + (meta.icon || '') + ' ' + esc(meta.name) + '</span>' +
        '<span class="subj-bar"><i style="width:' + (pct == null ? 0 : Math.min(pct, 100)) + '%;background:' + meta.color + '"></i></span>' +
        '<span class="vl">' + done + (pct != null ? ' <span class="muted">/' + meta.total + ' (' + pct + '%)</span>' : '') + '</span></div>';
    }).join('') || '<div class="muted">暂无学习记录</div>';

    var wrongHtml = (d.wrongList && d.wrongList.length) ? d.wrongList.map(function (w) {
      return '<div class="wq"><div class="wq-meta"><span class="tag">' + esc(w.subjectName || '') + '</span> ' + esc(w.lessonName || '') + '</div>' +
        '<div class="wq-q">' + esc(w.question || '') + '</div>' +
        '<div class="wq-a"><span class="lab">我的：</span><span class="bad wrong">' + esc(w.myAnswer || '') + '</span>' +
        ' <span class="lab">正确：</span><span class="bad ok">' + esc(w.answer || '') + '</span></div></div>';
    }).join('') : '<div class="muted">暂无错题记录</div>';

    var quizHtml = (d.quizRecent && d.quizRecent.length) ? d.quizRecent.map(function (q) {
      return '<span class="qdot ' + (q.right ? 'r' : 'w') + '" title="' + fmtDate(q.ts) + ' · ' + (q.right ? '对' : '错') + '">●</span>';
    }).join('') : '<span class="muted">暂无作答记录</span>';

    $('drawerBody').innerHTML =
      '<div class="d-prof">' +
        '<div class="d-ava">' + (p.nickname ? esc(p.nickname).slice(0, 1) : '👤') + '</div>' +
        '<div class="d-info"><b>' + esc(p.nickname || '未设置昵称') + '</b>' +
          '<div class="muted mono">' + esc(p.phoneMask || p.phone || '') + '</div>' +
          '<div class="muted">注册 ' + fmtDate(p.createdAt) + ' · 最后活跃 ' + fmtAgo(p.lastActive) + '</div></div>' +
        '<div class="d-stats">' +
          stat('学完课时', p.lessons) + stat('错题', p.wrong) + stat('做题', p.quizTotal) +
          stat('正确率', p.accuracy == null ? '—' : p.accuracy + '%') +
          stat('连续签到', p.streak) + stat('累计签到', p.checkinTotal) +
        '</div>' +
      '</div>' +
      '<div class="d-sec"><h4>学科进度</h4>' + subjHtml + '</div>' +
      '<div class="d-sec"><h4>最近作答（新→旧）</h4><div class="qdots">' + quizHtml + '</div></div>' +
      '<div class="d-sec"><h4>错题本（最近 ' + (d.wrongList ? d.wrongList.length : 0) + ' 条）</h4>' + wrongHtml + '</div>';
  }

  /* ============================================================
   * 加载流程
   * ============================================================ */
  function loadOverview() {
    var token = localStorage.getItem(TOKEN_KEY);
    if (!token) { enterDemo(); return; }

    $('body').innerHTML = '<div class="panel"><div class="empty"><div class="spin"></div>正在加载全站数据…</div></div>';

    api('adminOverview', { token: token, days: state.days }).then(function (res) {
      if (res && res.ok) {
        state.data = res;
        state.demo = false;
        renderAll();
        loadContent();
        return;
      }
      var msg = (res && res.msg) || '';
      // 云函数还没部署这个 action —— 降级为演示数据，而不是报错吓人
      if (msg.indexOf('未知操作') >= 0) { enterDemo(true); return; }
      if (msg.indexOf('无权限') >= 0 || msg.indexOf('失效') >= 0) {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(NAME_KEY);
        showGate('登录状态已失效，请重新登录');
        return;
      }
      $('body').innerHTML = '<div class="panel"><div class="empty"><span class="big">⚠️</span>' +
        esc(msg || '加载失败') + '</div></div>';
    }).catch(function (e) {
      $('body').innerHTML = '<div class="panel"><div class="empty"><span class="big">🌐</span>' +
        '网络请求失败：' + esc(e && e.message) + '</div></div>';
    });
  }

  function enterDemo(fromApi) {
    state.demo = true;
    state.data = buildDemo(state.days);
    $('gate').style.display = 'none';
    $('main').style.display = '';
    $('whoami').textContent = fromApi
      ? (localStorage.getItem(NAME_KEY) || '管理员') + ' · 演示数据'
      : '演示数据（未登录）';
    renderAll();
  }

  function showGate(msg) {
    $('main').style.display = 'none';
    $('gate').style.display = '';
    if (msg) { $('gMsg').className = 'gate-msg err'; $('gMsg').textContent = msg; }
    $('gUser').focus();
  }

  function doLogin() {
    var u = $('gUser').value.trim();
    var p = $('gPwd').value;
    var msg = $('gMsg'), btn = $('gBtn');
    msg.className = 'gate-msg'; msg.textContent = '';
    if (!u || !p) { msg.className = 'gate-msg err'; msg.textContent = '请输入账号与密码'; return; }

    btn.disabled = true; btn.textContent = '登录中…';
    api('login', { phone: u, password: p }).then(function (res) {
      btn.disabled = false; btn.textContent = '登 录';
      if (!res || !res.ok) {
        msg.className = 'gate-msg err';
        msg.textContent = (res && res.msg) || '登录失败';
        return;
      }
      if (!res.isAdmin) {
        msg.className = 'gate-msg err';
        msg.textContent = '该账号不是管理员，无权进入后台';
        return;
      }
      localStorage.setItem(TOKEN_KEY, res.token);
      localStorage.setItem(NAME_KEY, res.phone);
      msg.className = 'gate-msg ok'; msg.textContent = '登录成功，正在加载…';
      $('gate').style.display = 'none';
      $('main').style.display = '';
      $('whoami').textContent = res.phone;
      loadOverview();
    }).catch(function (e) {
      btn.disabled = false; btn.textContent = '登 录';
      msg.className = 'gate-msg err';
      msg.textContent = '网络错误：' + (e && e.message);
    });
  }

  /* ---------- 启动 ---------- */
  function init() {
    $('gBtn').onclick = doLogin;
    $('gPwd').onkeydown = function (e) { if (e.key === 'Enter') doLogin(); };
    $('gUser').onkeydown = function (e) { if (e.key === 'Enter') $('gPwd').focus(); };
    $('gDemo').onclick = function () { enterDemo(false); };

    $('btnReload').onclick = function () {
      highlightView('learning');
      if (state.demo && !localStorage.getItem(TOKEN_KEY)) { enterDemo(false); return; }
      loadOverview();
    };
    $('btnLogout').onclick = function () {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(NAME_KEY);
      state.demo = false;
      showGate('');
      $('gMsg').textContent = '';
    };
    Array.prototype.forEach.call(document.querySelectorAll('#rangeSeg button'), function (b) {
      b.onclick = function () {
        highlightView('learning');
        Array.prototype.forEach.call(document.querySelectorAll('#rangeSeg button'), function (x) {
          x.classList.remove('on');
        });
        b.classList.add('on');
        state.days = parseInt(b.getAttribute('data-days'), 10) || 30;
        if (state.demo) { state.data = buildDemo(state.days); renderAll(); }
        else loadOverview();
      };
    });

    Array.prototype.forEach.call(document.querySelectorAll('#viewSeg button'), function (b) {
      b.onclick = function () { setView(b.getAttribute('data-view')); };
    });

    if (localStorage.getItem(TOKEN_KEY)) {
      $('main').style.display = '';
      $('whoami').textContent = localStorage.getItem(NAME_KEY) || '管理员';
      loadOverview();
    } else {
      showGate('');
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
