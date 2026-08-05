/* 信息技术 · 必修2 · 信息系统与社会 · 第1节 信息系统安全风险 */
(function () {
  var v = gzGetVolume('it', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u12',
    name: '第1节 信息系统安全风险',
    chapter: '高一信息技术（必修2·信息系统与社会）· 第四章 信息安全与社会责任',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、为什么要关注信息系统安全' },
      { type: 'paragraph', text: '信息系统里存放着大量重要数据：学校的学籍成绩、医院的病历、银行的账户余额、公司的客户名单，还有我们每个人的姓名、身份证号、手机号、位置和聊天记录。数据越集中、越有价值，就越容易被人盯上。一旦出事，损失往往是成千上万人的，而且很难挽回。' },
      { type: 'paragraph', text: '信息安全通常包含三个基本要求：数据不能被无关的人看到（保密性）、数据不能被人偷偷改掉（完整性）、需要用的时候系统得能用（可用性）。下面这些风险，破坏的正是这三点。' },

      { type: 'heading', text: '二、常见的五类安全风险' },
      { type: 'list', items: [
        '① 计算机病毒与木马：病毒是人为编制的、能自我复制并破坏计算机功能或数据的一段程序代码，具有传染性、破坏性、潜伏性、隐蔽性。木马表面上是正常软件，实际上偷偷在后台运行，窃取账号密码、监控屏幕、远程控制你的电脑。勒索病毒还会把文件全部加密，逼你交钱赎回。',
        '② 网络黑客入侵：攻击者利用技术手段非法侵入他人的信息系统，越权查看、篡改、删除数据，或者让系统瘫痪无法服务。常见手段有暴力破解密码、利用漏洞提权、发起大量请求把服务器压垮。',
        '③ 数据泄露与隐私侵犯：大量个人信息或商业数据被非法获取、传播甚至买卖。可能是黑客拖库，也可能是内部人员违规导出，还可能是APP过度收集信息。泄露之后常常紧接着就是精准诈骗和骚扰。',
        '④ 系统漏洞与软件缺陷：任何软件都可能存在设计或编码上的缺陷，这些缺陷就是漏洞。漏洞一旦被攻击者发现，就成了闯进系统的“后门”。还没有被修补的新漏洞（零日漏洞）危害尤其大。',
        '⑤ 网络诈骗与钓鱼攻击：骗子伪造和真网站几乎一模一样的假网站、假短信、假链接、假二维码，诱骗你输入账号密码或直接转账。所谓“钓鱼”，就是撒下诱饵等着人上钩。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="26" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">信息系统面临的五类常见安全风险</text><rect x="20" y="40" width="200" height="104" rx="11" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><circle cx="120" cy="68" r="16" fill="#6266d9"/><text x="120" y="74" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">毒</text><text x="120" y="104" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">计算机病毒与木马</text><text x="120" y="126" font-size="10" fill="#2a3454" text-anchor="middle">自我复制、破坏数据、窃取信息</text><rect x="240" y="40" width="200" height="104" rx="11" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><circle cx="340" cy="68" r="16" fill="#6266d9"/><text x="340" y="74" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">客</text><text x="340" y="104" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">网络黑客入侵</text><text x="340" y="126" font-size="10" fill="#2a3454" text-anchor="middle">非法侵入，篡改删除数据</text><rect x="460" y="40" width="200" height="104" rx="11" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><circle cx="560" cy="68" r="16" fill="#6266d9"/><text x="560" y="74" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">泄</text><text x="560" y="104" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">数据泄露与隐私侵犯</text><text x="560" y="126" font-size="10" fill="#2a3454" text-anchor="middle">个人信息被窃取、被贩卖</text><rect x="130" y="158" width="200" height="104" rx="11" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><circle cx="230" cy="186" r="16" fill="#6266d9"/><text x="230" y="192" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">洞</text><text x="230" y="222" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">系统漏洞与软件缺陷</text><text x="230" y="244" font-size="10" fill="#2a3454" text-anchor="middle">缺陷成为攻击者的后门</text><rect x="350" y="158" width="200" height="104" rx="11" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><circle cx="450" cy="186" r="16" fill="#6266d9"/><text x="450" y="192" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">钓</text><text x="450" y="222" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">网络诈骗与钓鱼攻击</text><text x="450" y="244" font-size="10" fill="#2a3454" text-anchor="middle">假网站、假链接骗取账号钱财</text><text x="340" y="286" font-size="12" font-weight="bold" fill="#3d4f8a" text-anchor="middle">五类风险破坏的是数据的保密性、完整性和系统的可用性</text></svg>', caption: '图1　信息系统面临的五类常见安全风险：病毒木马、黑客入侵、数据泄露、系统漏洞、网络诈骗。' },
      { type: 'keypoint', label: '重点·五类风险要能对号入座', text: '记住这五类风险的关键词：<strong>病毒木马（会传染、会潜伏、会破坏）、黑客入侵（非法侵入、越权操作）、数据泄露（信息被窃取传播）、系统漏洞（软件本身的缺陷）、网络诈骗（伪装欺骗、骗取钱财）</strong>。做题时要能根据材料描述判断属于哪一类：看到“自我复制、传染”想到病毒，看到“假网站骗输密码”想到钓鱼，看到“程序存在缺陷被利用”想到漏洞。' },
      { type: 'table', headers: ['风险类型', '主要特征', '生活中的例子'], rows: [
        ['计算机病毒与木马', '传染性、破坏性、潜伏性、隐蔽性', '下载来路不明的软件后电脑变慢、文件被加密勒索'],
        ['网络黑客入侵', '非法侵入、越权操作、破坏服务', '网站被攻击后无法打开，后台数据被篡改'],
        ['数据泄露与隐私侵犯', '信息被非法获取、传播、买卖', '刚填完表格就接到精准推销和诈骗电话'],
        ['系统漏洞与软件缺陷', '程序自身存在缺陷，可被利用', '未及时打补丁的电脑被远程植入木马'],
        ['网络诈骗与钓鱼攻击', '伪装、诱骗、以骗取钱财为目的', '“中奖”短信里的链接、假冒客服要求转账']
      ] },

      { type: 'heading', text: '三、安全风险产生的三个层面的原因' },
      { type: 'paragraph', text: '安全事故很少是单一原因造成的。归纳起来，风险主要来自技术、管理和用户三个层面。' },
      { type: 'list', items: [
        '① 技术层面：软硬件本身存在漏洞和缺陷，加密强度不够，防火墙、杀毒软件等防护措施不到位，系统补丁没有及时更新。技术上留下的每一个口子，都可能被攻击者利用。',
        '② 管理层面：安全制度不健全或者形同虚设，账号权限分配混乱、离职人员账号不注销，重要数据没有定期备份，也没有日志审计和应急预案。很多泄露事件其实是管理疏忽而不是技术不行。',
        '③ 用户层面：安全意识薄弱。使用123456这类弱密码、多个网站用同一个密码、随意点击不明链接和二维码、在社交平台晒出车票和身份证、随便连接免费Wi-Fi、给APP开放不必要的权限。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">安全风险产生的三个层面原因</text><rect x="25" y="56" width="196" height="150" rx="11" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><rect x="25" y="56" width="196" height="34" rx="11" fill="#6266d9"/><text x="123" y="79" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">① 技术层面</text><text x="39" y="114" font-size="11" fill="#2a3454" text-anchor="start">· 系统存在漏洞</text><text x="39" y="138" font-size="11" fill="#2a3454" text-anchor="start">· 软件设计有缺陷</text><text x="39" y="162" font-size="11" fill="#2a3454" text-anchor="start">· 加密强度不足</text><text x="39" y="186" font-size="11" fill="#2a3454" text-anchor="start">· 补丁未及时更新</text><rect x="242" y="56" width="196" height="150" rx="11" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><rect x="242" y="56" width="196" height="34" rx="11" fill="#6266d9"/><text x="340" y="79" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">② 管理层面</text><text x="256" y="114" font-size="11" fill="#2a3454" text-anchor="start">· 安全制度不落实</text><text x="256" y="138" font-size="11" fill="#2a3454" text-anchor="start">· 账号权限分配混乱</text><text x="256" y="162" font-size="11" fill="#2a3454" text-anchor="start">· 数据没有定期备份</text><text x="256" y="186" font-size="11" fill="#2a3454" text-anchor="start">· 缺少审计与应急预案</text><rect x="459" y="56" width="196" height="150" rx="11" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><rect x="459" y="56" width="196" height="34" rx="11" fill="#6266d9"/><text x="557" y="79" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">③ 用户层面</text><text x="473" y="114" font-size="11" fill="#2a3454" text-anchor="start">· 安全意识薄弱</text><text x="473" y="138" font-size="11" fill="#2a3454" text-anchor="start">· 使用弱密码、一码多用</text><text x="473" y="162" font-size="11" fill="#2a3454" text-anchor="start">· 随意点击不明链接</text><text x="473" y="186" font-size="11" fill="#2a3454" text-anchor="start">· 乱连Wi-Fi、乱授权</text><rect x="25" y="222" width="630" height="60" rx="10" fill="#6266d9"/><text x="340" y="246" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">三个层面互相影响，任何一个环节出问题都可能酿成安全事故</text><text x="340" y="270" font-size="12" fill="#ffffff" text-anchor="middle">信息安全既是技术问题，更是管理问题和个人意识问题</text></svg>', caption: '图2　安全风险产生的三个层面原因：技术漏洞、管理疏忽、用户安全意识薄弱。' },
      { type: 'warn', label: '易错·三个常见误解', text: '误解一：<strong>“装了杀毒软件就绝对安全”</strong>。杀毒软件只能防住已知的部分威胁，新病毒、钓鱼骗术、内部泄露它都拦不住。误解二：<strong>“我又不是名人，没人会攻击我”</strong>。绝大多数攻击是广撒网式的自动扫描，谁的系统有漏洞就打谁，和你是不是重要人物无关。误解三：<strong>“信息安全全是技术部门的事”</strong>。用户点了一个钓鱼链接，再好的技术防护也可能被绕过，安全需要人人有责。' },
      { type: 'tip', label: '提示·识别钓鱼的小窍门', text: '收到链接先看三点：<strong>看网址</strong>（是不是官方域名，有没有多几个字母或换成相近字符）、<strong>看内容</strong>（是不是用“账号异常”“中奖”“限时”制造紧张，催你马上操作）、<strong>看要求</strong>（是不是索要密码、验证码或直接要求转账）。记住一条铁律：<strong>验证码任何时候都不能告诉别人，包括自称客服和民警的人</strong>。' },
      { type: 'example', label: '例题·判断风险类型和原因', text: '题目：某公司员工收到一封“系统管理员”发来的邮件，提示密码即将过期，请点击链接重新设置。员工点开链接、输入了原密码，随后公司内部系统被非法登录，大量客户资料被下载。事后调查发现该员工在多个网站使用同一密码，公司也没有对导出大量数据的行为进行监控。请分析这起事故属于哪些风险类型，原因出在哪些层面。<br>解析：风险类型上，伪造管理员邮件诱骗员工输入密码属于<strong>网络诈骗与钓鱼攻击</strong>；攻击者拿到密码后非法登录公司系统属于<strong>黑客入侵</strong>；大量客户资料被下载属于<strong>数据泄露与隐私侵犯</strong>。原因层面上：员工识别不出钓鱼邮件、多个网站使用同一密码，属于<strong>用户层面安全意识薄弱</strong>；公司没有对批量导出数据的异常行为进行监控和审计，属于<strong>管理层面疏忽</strong>；如果系统还缺少二次身份认证等防护手段，则同时存在<strong>技术层面</strong>的不足。' }
    ],
    exercises: [
      { type: 'choice', question: '某程序能够自我复制并感染其他文件，还会破坏计算机中的数据。这属于？', options: ['计算机病毒', '系统漏洞', '钓鱼网站', '数据备份'], answer: '计算机病毒', explanation: '计算机病毒是人为编制的、能够自我复制并破坏计算机功能或数据的程序代码，具有传染性、破坏性、潜伏性和隐蔽性。题目中“自我复制、感染其他文件、破坏数据”正是病毒最典型的特征。系统漏洞是软件自身的缺陷，钓鱼网站是伪造网站骗取信息，都与自我复制无关。' },
      { type: 'choice', question: '小李收到一条短信：“您的银行卡异常，请点击链接验证身份”，点开后页面与银行官网几乎一样，要求输入卡号和密码。这属于？', options: ['系统漏洞', '钓鱼攻击', '计算机病毒', '分布式处理'], answer: '钓鱼攻击', explanation: '钓鱼攻击是指伪造与真网站高度相似的假网站、假短信、假链接，利用“账号异常”等借口制造紧张感，诱骗用户输入账号、密码、验证码或直接转账。题目中伪造的银行页面正是典型的钓鱼手段。防范要点是核对官方域名，绝不在陌生链接中输入密码和验证码。' },
      { type: 'choice', question: '某单位员工使用“123456”作为系统登录密码，且多个平台共用一个密码，导致账号被盗。这一事故的主要原因属于？', options: ['技术层面漏洞', '管理层面疏忽', '用户安全意识薄弱', '基础设施故障'], answer: '用户安全意识薄弱', explanation: '安全风险主要来自技术、管理、用户三个层面。使用弱密码、多个平台共用同一密码，是典型的用户安全意识薄弱表现。技术层面指系统漏洞、加密不足等；管理层面指制度不落实、权限混乱、缺少备份审计；基础设施故障则属于可用性问题，不是本题原因。' },
      { type: 'fill', question: '信息系统常见的安全风险包括：计算机病毒木马、网络黑客入侵、___与隐私侵犯、系统___与软件缺陷、网络诈骗与钓鱼攻击。', answer: '数据泄露；漏洞', explanation: '五类常见安全风险是：计算机病毒与木马、网络黑客入侵、数据泄露与隐私侵犯、系统漏洞与软件缺陷、网络诈骗与钓鱼攻击。其中数据泄露指信息被非法获取、传播甚至买卖；系统漏洞指软件设计或编码上的缺陷，会成为攻击者进入系统的“后门”。' },
      { type: 'fill', question: '安全风险产生的原因可以归纳为三个层面：___层面的漏洞、___层面的疏忽和用户安全___薄弱。', answer: '技术；管理；意识', explanation: '技术层面指系统漏洞、软件缺陷、加密强度不足、补丁未及时更新；管理层面指安全制度不落实、账号权限混乱、缺少备份与审计；用户层面指安全意识薄弱，如使用弱密码、随意点击不明链接、乱连Wi-Fi和过度授权。三者互相影响，任何一环出问题都可能造成事故。' }
    ]
  });
})();
