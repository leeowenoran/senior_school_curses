/* 信息技术 · 高三复习 · 信息系统与安全 · 第4节 安全威胁的主要类型 */
(function () {
  var v = gzGetVolume('it', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u4',
    name: '第4节 安全威胁的主要类型',
    chapter: '四、常见信息系统安全威胁与风险',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、恶意软件类威胁' },
      { type: 'paragraph', text: '恶意软件是“带着坏心思”的程序。计算机病毒：会把自己插进别的正常程序里，破坏功能或数据，而且必须依附在一个“宿主程序”上才能传播，比如藏在一封带附件的邮件里。蠕虫：能自己独立传播，不需要依附宿主，常常在网络里自己乱跑、大量复制。' },
      { type: 'paragraph', text: '木马：伪装成合法好用的程序，骗你安装，实际偷偷窃取你的信息（比如账号密码）。勒索软件：把你的数据加密锁起来，然后勒索你交“赎金”才肯解开。一句话记：病毒要“寄生”，蠕虫会“自跑”，木马会“伪装”，勒索会“绑票”。' },
      { type: 'keypoint', label: '重点·四类恶意软件', text: '<strong>病毒（寄生宿主）、蠕虫（独立传播）、木马（伪装窃密）、勒索软件（加密勒索）。</strong>区分关键：病毒和蠕虫都会传播，但病毒要依附宿主、蠕虫不用；木马重在“伪装偷信息”，勒索重在“加密要钱”。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">安全威胁的三大类别</text><rect x="30" y="60" width="180" height="200" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="120" y="86" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">恶意软件</text><text x="120" y="114" font-size="11" fill="#2a3454" text-anchor="middle">·病毒(寄生)</text><text x="120" y="134" font-size="11" fill="#2a3454" text-anchor="middle">·蠕虫(自传播)</text><text x="120" y="154" font-size="11" fill="#2a3454" text-anchor="middle">·木马(伪装)</text><text x="120" y="174" font-size="11" fill="#2a3454" text-anchor="middle">·勒索(加密)</text><rect x="250" y="60" width="180" height="200" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="86" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">网络攻击</text><text x="340" y="114" font-size="11" fill="#2a3454" text-anchor="middle">·钓鱼攻击</text><text x="340" y="134" font-size="11" fill="#2a3454" text-anchor="middle">·DDoS攻击</text><text x="340" y="154" font-size="11" fill="#2a3454" text-anchor="middle">·SQL注入</text><text x="340" y="174" font-size="11" fill="#2a3454" text-anchor="middle"> ·其他入侵</text><rect x="470" y="60" width="180" height="200" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="560" y="86" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">其他风险</text><text x="560" y="114" font-size="11" fill="#2a3454" text-anchor="middle">·人为失误</text><text x="560" y="134" font-size="11" fill="#2a3454" text-anchor="middle">·硬件故障</text><text x="560" y="154" font-size="11" fill="#2a3454" text-anchor="middle">·自然灾害</text><text x="560" y="174" font-size="11" fill="#2a3454" text-anchor="middle">·内部违规/漏洞</text></svg>', caption: '图1　安全威胁三大类：恶意软件、网络攻击、其他风险，每一类下面又有具体表现。' },
      { type: 'heading', text: '二、网络攻击类威胁' },
      { type: 'paragraph', text: '钓鱼攻击：发假邮件或假短信，伪装成银行、学校等合法机构，骗你点链接并输入账号、密码、银行卡号。DDoS攻击：用大量请求把系统资源耗尽，让正常用户进不去、服务瘫痪，像一群人堵在店门口不让真顾客进。SQL注入：在输入框里写恶意代码，骗后台数据库执行，从而偷到或改掉数据。' },
      { type: 'paragraph', text: '这三类常常“组合出现”：黑客可能先钓鱼骗到账号，再用SQL注入拖库。所以平时收到“中奖”“账号异常”的链接要先核实，别急着点。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">个人信息泄露的常见渠道</text><rect x="30" y="70" width="190" height="80" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="125" y="98" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">注册时无意泄露</text><text x="125" y="120" font-size="11" fill="#2a3454" text-anchor="middle">填太多真实信息</text><rect x="250" y="70" width="190" height="80" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="345" y="98" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">网上交流被窃取</text><text x="345" y="120" font-size="11" fill="#2a3454" text-anchor="middle">聊天/晒照暴露</text><rect x="470" y="70" width="190" height="80" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="565" y="98" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">连不安全Wi-Fi</text><text x="565" y="120" font-size="11" fill="#2a3454" text-anchor="middle">黑客截获流量</text><text x="340" y="200" font-size="12" fill="#2a3454" text-anchor="middle">→ 账号、密码、隐私被泄露盗用</text></svg>', caption: '图2　个人信息泄露三大渠道：注册泄露、网上交流被窃、连接不安全Wi-Fi被截获。' },
      { type: 'tip', label: '提示·其他风险与泄露渠道', text: '<strong>其他风险还包括人为操作失误（误删文件、用弱密码）、硬件故障、自然灾害、内部人员违规、系统漏洞；个人信息泄露常通过“注册时无意填、网上交流被窃、连不安全Wi-Fi被截”三条渠道。</strong>连公共Wi-Fi时别登网银，是最实用的提醒。' },
      { type: 'warn', label: '易错·病毒与蠕虫', text: '考试常把病毒和蠕虫放一起考。记住：病毒必须依附宿主程序才能传播（像寄生虫），蠕虫能自己独立复制传播（不依赖宿主）。不要把“木马”当成病毒——木马重在伪装窃密，一般不主动大量复制。' },
      { type: 'example', label: '例题·攻击类型判断', text: '题目：黑客伪造银行短信，称“账户异常”并附链接，诱骗用户点击后输入银行卡号和密码。这属于哪类威胁？<br>解析：伪造合法机构、诱骗用户主动交出敏感信息，是典型的钓鱼攻击。DDoS是耗尽资源致瘫痪，SQL注入是操纵数据库，木马是伪装程序窃密，均不符合“诱骗输入账号密码”的特征。所以答案是钓鱼攻击。' },
      { type: 'table', headers: ['类别', '具体威胁', '关键特点'], rows: [['恶意软件', '病毒/蠕虫/木马/勒索', '破坏、传播、窃密、加密'], ['网络攻击', '钓鱼/DDoS/SQL注入', '骗信息、耗资源、操纵库'], ['其他风险', '失误/故障/灾害/违规/漏洞', '非恶意但可致损']] }
    ],
    exercises: [
      { type: 'choice', question: '下列关于计算机病毒和蠕虫的说法，正确的是？', options: ['病毒能独立传播，不需要宿主', '蠕虫必须依附宿主程序才能传播', '病毒需依附宿主程序传播，蠕虫可独立传播', '病毒和蠕虫都不会传播'], answer: '病毒需依附宿主程序传播，蠕虫可独立传播', explanation: '病毒要插入并依附宿主程序才能传播，蠕虫能自己独立复制传播、不依赖宿主。其余选项把二者特点搞反了。' },
      { type: 'choice', question: '黑客用大量请求耗尽服务器资源，使网站无法访问，这属于？', options: ['钓鱼攻击', 'DDoS攻击', 'SQL注入', '木马攻击'], answer: 'DDoS攻击', explanation: 'DDoS（分布式拒绝服务）通过海量请求耗尽系统资源导致服务瘫痪；钓鱼是骗信息，SQL注入是操纵数据库，木马是伪装窃密。' },
      { type: 'choice', question: '在登录框输入恶意代码，从而操纵后台数据库窃取数据，这属于？', options: ['钓鱼攻击', 'DDoS攻击', 'SQL注入', '勒索软件'], answer: 'SQL注入', explanation: 'SQL注入是在输入处嵌入恶意SQL代码，欺骗数据库执行，从而读取或篡改数据；其余三类机制不同。' },
      { type: 'fill', question: '恶意软件主要包括：计算机病毒、蠕虫、木马和___。', answer: '勒索软件', explanation: '四类恶意软件为病毒、蠕虫、木马、勒索软件；勒索软件通过加密用户数据来勒索赎金。' },
      { type: 'fill', question: '个人信息泄露的三条常见渠道是：注册时无意泄露、网上交流被窃取，以及连接不安全的___导致流量被截获。', answer: 'Wi-Fi', explanation: '连接不安全的公共Wi-Fi时，黑客可能截获网络流量、盗取账号密码，是个人信息泄露的重要渠道之一。' }
    ]
  });
})();
