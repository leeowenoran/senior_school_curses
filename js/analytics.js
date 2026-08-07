/* ============================================================
 * 网站访问统计
 *
 * 两层统计：
 *   1) 自建轻量访客统计（主用）：匿名访客的页面浏览事件直接写入你
 *      自己的 CloudBase 数据库（visit_logs 集合），后台「🌐 访客流量」
 *      标签用图表展示，数据 100% 在你自己手里，无需任何第三方账号。
 *   2) 百度统计（可选·已停用）：保留配置位，日后想用再填 BAIDU_ID。
 *
 * 说明：
 *   - 本文件同时被 前台(index.html) 与 后台(admin.html) 加载。
 *   - 前台/后台之外的页面不重复统计（已跳过 admin.html 自身）。
 *   - 本站是 hash 路由单页应用，已在加载与 hashchange 时各记一次，
 *     保证各科/各课时都能被记录。
 * ============================================================ */
(function () {
  'use strict';

  // ===== 1) 自建轻量访客统计（数据存自有 CloudBase）=====
  var CB_API = 'https://shanghai-env1-d3gq2odzh654c9264-1462691854.ap-shanghai.app.tcloudbase.com/api';
  var VISIT_DISABLED = false; // 设为 true 可临时关闭自建统计

  function getVid() {
    try {
      var v = localStorage.getItem('gz_vid');
      if (!v) {
        v = 'v' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
        localStorage.setItem('gz_vid', v);
      }
      return v;
    } catch (e) { return 'anon'; }
  }

  function localDay(d) {
    var z = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
    return z.toISOString().slice(0, 10);
  }

  function sendVisit() {
    if (VISIT_DISABLED) return;
    if (/admin\.html/.test(location.pathname)) return; // 不统计后台自身
    try {
      var body = JSON.stringify({
        action: 'logVisit',
        payload: {
          path: location.hash || location.pathname,
          referrer: document.referrer || '',
          ua: navigator.userAgent || '',
          vid: getVid(),
          ts: Date.now(),
          day: localDay(new Date())
        }
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(CB_API, body);
      } else {
        fetch(CB_API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: body,
          keepalive: true
        }).catch(function () { /* 忽略 */ });
      }
    } catch (e) { /* 忽略 */ }
  }

  sendVisit();                                  // 首屏
  window.addEventListener('hashchange', sendVisit); // SPA 路由切换

  // ===== 2) 百度统计（可选·已停用；保留配置位以便日后启用）=====
  var BAIDU_ID = '';   // 留空即停用；想用百度再填回站点 ID
  var EMBED_URL = '';  // 百度「报告分享」嵌入链接（可选）
  window.GZ_ANALYTICS = { baiduId: BAIDU_ID, embedUrl: EMBED_URL };

  if (BAIDU_ID) {
    window._hmt = window._hmt || [];
    (function () {
      var hm = document.createElement('script');
      hm.src = 'https://hm.baidu.com/hm.js?' + encodeURIComponent(BAIDU_ID);
      hm.async = true;
      var s = document.getElementsByTagName('script')[0];
      if (s && s.parentNode) s.parentNode.insertBefore(hm, s);
      else document.head.appendChild(hm);
    })();
    function trackPageview() {
      try { window._hmt.push(['_trackPageview', location.hash || location.pathname]); } catch (e) { /* 忽略 */ }
    }
    trackPageview();
    window.addEventListener('hashchange', trackPageview);
  }
})();
