/* ============================================================
 * 网站访问统计（第三方 · 百度统计）
 *
 * 用法（只需 3 步）：
 *   1. 打开 https://tongji.baidu.com 注册 →「新增网站」→ 拿到「站点 ID」（一串字母数字）。
 *   2. 把下面 BAIDU_ID 的值改成你的站点 ID，刷新网站即开始统计。
 *   3. 想在学习后台里内联看板，去百度统计「报告分享」生成【嵌入链接】，
 *      填到 EMBED_URL；不填则后台只显示指标清单 + 跳转到百度统计。
 *
 * 说明：
 *   - 本文件同时被 前台(index.html) 与 后台(admin.html) 加载，作为唯一配置源。
 *   - BAIDU_ID 为空时，不会注入任何外部脚本，网站照常运行（零副作用）。
 *   - 本站是 hash 路由单页应用，已在 hashchange 时补记一次页面浏览，
 *     否则百度统计只会记到首页、记不到各科/各课时。
 * ============================================================ */
(function () {
  'use strict';

  // ↓↓↓ 只改这两项 ↓↓↓
  var BAIDU_ID = '73dd0bb5171a275b2a5a0c4f92503d85';     // 百度统计站点 ID（已配置）
  var EMBED_URL = '';    // 百度统计「报告分享」生成的【嵌入链接】（可选）
  // ↑↑↑ 只改这两项 ↑↑↑

  window.GZ_ANALYTICS = { baiduId: BAIDU_ID, embedUrl: EMBED_URL };

  if (!BAIDU_ID) return; // 未配置：不打扰，等站长填好 ID 再启用

  var _hmt = window._hmt = window._hmt || [];
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
  trackPageview(); // 首屏
  window.addEventListener('hashchange', trackPageview); // SPA 路由切换
})();
