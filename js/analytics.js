/* ============================================================
 * 网站访问统计（自建 · 数据存自有 CloudBase visit_logs）
 *
 * 采集维度对标百度统计，但数据 100% 存在你自己的 CloudBase：
 *   页面 path / 来源 referrer / 设备 UA / 访客 ID vid / 会话 sid /
 *   是否入口页 entry / 是否新访客 isNew / 屏幕分辨率 screen / 语言 lang / 时间。
 * 无第三方、无 PV 门槛、无需授权钥匙，后台「🌐 访客流量」直接看图表。
 *
 * 说明：
 *   - 本文件同时被 前台(index.html) 与 后台(admin.html) 加载，后台自身不计入。
 *   - 本站是 hash 路由单页应用：加载与 hashchange 各记一次，覆盖各科/各课时。
 * ============================================================ */
(function () {
  'use strict';

  var CB_API = 'https://shanghai-env1-d3gq2odzh654c9264-1462691854.ap-shanghai.app.tcloudbase.com/api';
  var VISIT_DISABLED = false; // 自建统计为主：访客数据写入你自己的 CloudBase

  function uid(prefix) {
    return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }
  // 访客 ID：跨会话长期标识同一浏览器（用于 UV 去重、新老访客）
  function getVid() {
    try {
      var v = localStorage.getItem('gz_vid');
      if (!v) { v = uid('v'); localStorage.setItem('gz_vid', v); }
      return v;
    } catch (e) { return 'anon'; }
  }
  // 会话 ID：同一标签页的一次连续浏览为一个会话（关闭/重开标签即新会话）
  function getSid() {
    try {
      var s = sessionStorage.getItem('gz_sid');
      if (!s) { s = uid('s'); sessionStorage.setItem('gz_sid', s); }
      return s;
    } catch (e) { return uid('s'); }
  }
  // 是否本会话首跳（入口页）——仅第一次返回 1
  function markEntry() {
    try {
      if (sessionStorage.getItem('gz_entered')) return 0;
      sessionStorage.setItem('gz_entered', '1');
      return 1;
    } catch (e) { return 1; }
  }
  // 是否新访客（此浏览器首次访问）——仅首次返回 1
  function markNew() {
    try {
      if (localStorage.getItem('gz_seen')) return 0;
      localStorage.setItem('gz_seen', '1');
      return 1;
    } catch (e) { return 0; }
  }
  function localDay(d) {
    var z = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
    return z.toISOString().slice(0, 10);
  }
  function screenStr() {
    try {
      var w = (window.screen && window.screen.width) || 0;
      var h = (window.screen && window.screen.height) || 0;
      return (w && h) ? (w + 'x' + h) : '';
    } catch (e) { return ''; }
  }

  var firstShot = true; // 仅首跳携带真实 referrer / isNew，避免 hashchange 重复放大来源
  function sendVisit() {
    if (VISIT_DISABLED) return;
    if (/admin\.html/.test(location.pathname)) return; // 不统计后台自身
    try {
      var payload = {
        path: location.hash || location.pathname,
        referrer: firstShot ? (document.referrer || '') : '',
        ua: navigator.userAgent || '',
        vid: getVid(),
        sid: getSid(),
        entry: markEntry(),
        isNew: firstShot ? markNew() : 0,
        screen: screenStr(),
        lang: navigator.language || '',
        ts: Date.now(),
        day: localDay(new Date())
      };
      firstShot = false;
      var body = JSON.stringify({ action: 'logVisit', payload: payload });
      if (navigator.sendBeacon) {
        try { navigator.sendBeacon(CB_API, new Blob([body], { type: 'application/json' })); }
        catch (e) { navigator.sendBeacon(CB_API, body); }
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

  sendVisit();                                       // 首屏
  window.addEventListener('hashchange', sendVisit);  // SPA 路由切换

  // ===== 百度统计：已停用（PV 未达开放平台门槛，无法把数据接回后台）=====
  // 保留配置位：日后 PV 上来想启用，把站点 ID 填回 BAIDU_ID 即可。
  var BAIDU_ID = '';
  window.GZ_ANALYTICS = { baiduId: BAIDU_ID, selfHosted: true };
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
