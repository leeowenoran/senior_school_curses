/* ============================================================
 * 腾讯云 CloudBase 前端集成（手机号登录 + 学习数据同步）
 *
 * 通过云函数 gzApi 的 HTTP 访问地址完成：
 *   注册 / 登录 / 改密 / 读取学习数据 / 保存学习数据
 * 绕开 CloudBase 自带的用户登录体系（需要验证码/邮件服务，对初学者不友好）。
 *
 * 引入方式（在 index.html 的 <script src="js/app.js"> 之前）：
 *   <script src="js/cloudbase.js"></script>
 *
 * 设计：云端作为账号与学习数据的权威来源；localStorage 作为本机缓存 / 离线兜底。
 *       - 正常时：登录走云端，学习数据自动（防抖）同步到云数据库。
 *       - 云端网络不可达：自动回退到本机账号，保证网站始终可用。
 * ============================================================ */
(function () {
  // 云函数 gzApi 的 HTTP 访问地址（控制台「云函数 → HTTP 访问」获取）
  var CB_API = 'https://shanghai-env1-d3gq2odzh654c9264-1462691854.ap-shanghai.app.tcloudbase.com/api';
  var CB_TOKEN_KEY = 'gz_cloud_token';
  var CB_PHONE_KEY = 'gz_cloud_phone';

  function _getToken() {
    try { return localStorage.getItem(CB_TOKEN_KEY) || ''; } catch (e) { return ''; }
  }
  function _setToken(t, phone) {
    try {
      if (t) {
        localStorage.setItem(CB_TOKEN_KEY, t);
        if (phone) localStorage.setItem(CB_PHONE_KEY, phone);
      } else {
        localStorage.removeItem(CB_TOKEN_KEY);
        localStorage.removeItem(CB_PHONE_KEY);
      }
    } catch (e) {}
  }
  function _getPhone() {
    try { return localStorage.getItem(CB_PHONE_KEY) || ''; } catch (e) { return ''; }
  }

  // 统一调用云函数（网络异常时抛错，交由上层回退本机）
  async function cbApi(action, payload) {
    var resp;
    try {
      resp = await fetch(CB_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: action, payload: payload || {} })
      });
    } catch (e) {
      throw new Error('网络异常，无法连接云端');
    }
    var text = await resp.text();
    try { return JSON.parse(text); } catch (e) { throw new Error('服务器返回异常'); }
  }

  /* 手机号注册：成功写入 token + phone */
  async function cbRegister(phone, password) {
    var r = await cbApi('register', { phone: phone, password: password });
    if (r && r.ok && r.token) _setToken(r.token, r.phone || phone);
    return r; // {ok, token, phone} 或 {ok:false, msg}
  }

  /* 手机号登录 */
  async function cbLogin(phone, password) {
    var r = await cbApi('login', { phone: phone, password: password });
    if (r && r.ok && r.token) _setToken(r.token, r.phone || phone);
    return r;
  }

  /* 登出：清空 token */
  function cbLogout() { _setToken('', ''); }

  /* 读取该用户的云端学习数据（token 在内部携带） */
  async function cbLoadUserData() {
    var token = _getToken();
    if (!token) return null;
    var r = await cbApi('getData', { token: token });
    if (r && r.ok) return r.data || {};
    return null;
  }

  /* 把学习数据保存到云端（data 为学习类键值对象） */
  async function cbSaveUserData(data) {
    var token = _getToken();
    if (!token) return;
    await cbApi('saveData', { token: token, data: data });
  }

  /* 修改密码（服务端会校验旧密码） */
  async function cbChangePassword(oldPwd, newPwd) {
    var token = _getToken();
    if (!token) throw new Error('登录状态已失效，请重新登录');
    var r = await cbApi('changePassword', { token: token, oldPassword: oldPwd, newPassword: newPwd });
    if (r && r.ok && r.token) _setToken(r.token, _getPhone());
    return r;
  }

  // 导出到全局，供 app.js 使用
  window.cbApi = cbApi;            // 统一调用云函数（gradeAnswer 等 action 直接复用）
  window.cbAvailable = true;            // 标记云端能力可用（实际失败会在调用时回退）
  window.cbGetToken = _getToken;
  window.cbGetPhone = _getPhone;
  window.cbRegister = cbRegister;
  window.cbLogin = cbLogin;
  window.cbLogout = cbLogout;
  window.cbLoadUserData = cbLoadUserData;
  window.cbSaveUserData = cbSaveUserData;
  window.cbChangePassword = cbChangePassword;
})();
