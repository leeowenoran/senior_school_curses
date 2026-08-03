# 腾讯云 CloudBase 云开发 · 部署清单（形态1：零运维）

目标：把现有纯前端预习网站接入「登录 + 学习数据」，全程不用买 CVM、不用管进程。

## 一、开通与环境
1. 腾讯云控制台 → 云开发 CloudBase → 新建环境（选「按量计费」或「包年包月」基础版即可）。
2. 记下**环境 ID**（形如 `my-env-1a2b3c`），后面填到 `js/cloudbase.js` 的 `CB_ENV`。

## 二、建集合 + 安全规则
1. 云开发控制台 → 数据库 → 新建集合：`users`、`studyProgress`、`exerciseRecords`、`wrongQuestions`。
2. 数据库 → 各自集合的「权限设置 / 安全规则」中，粘贴 `security-rules.json` 内容（核心：`doc.userId == auth.uid`），确保用户只能读写自己的数据。
3. 按 `schema.md` 建索引（提升查询性能）。

## 三、开启登录方式
云开发控制台 → 登录授权 → 开启「**邮箱密码登录**」（本骨架用此方式；也可改用微信登录，前端改 `signInWithEmailAndPassword` 为对应 API）。
> 注意：邮箱密码登录需在「登录授权」里开启，并在「安全来源」里把你的域名加入 Web 安全域名。

## 四、托管前端
1. 云开发控制台 → 静态网站托管 → 开通，把现有项目根目录（`index.html`、`js/`、`css/`）整体上传。
2. 拿到托管域名（如 `https://my-env-1a2b3c.tcloudbaseapp.com`），访问即可。
3. 如需自有域名：DNSPod 解析 + 控制台绑定 + 自动 HTTPS。

## 五、本地联调
- `index.html` / `login.html` 头部按 `js/cloudbase.js` 顶部注释引入 CloudBase Web SDK（CDN 或 npm 打包均可）。
- 把 `js/cloudbase.js` 里的 `CB_ENV` 改成你的环境 ID。
- 浏览器开 `login.html` 注册 → 登录 → 进首页学一课 → 交练习，数据即写入云数据库。

## 六、与现有项目的关系
- `data-*.js`（课时内容）**完全不用改**。
- 只在 `app.js` 渲染课时、提交练习处加两处埋点（见 js/cloudbase.js 的 `cbSaveProgress` / `cbSaveExercise`）。
- `server_nocache.py` 仅本地开发用，生产以静态托管替代。

## 七、成本提示
基础版 + 按量数据库对个人/小范围几乎免费；超出后按读写次数与存储计费，文档型数据库读写量通常远低于预警线。
