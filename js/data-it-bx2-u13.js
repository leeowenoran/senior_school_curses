/* 信息技术 · 必修2 · 信息系统与社会 · 第2节 信息系统安全防范 */
(function () {
  var v = gzGetVolume('it', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u13',
    name: '第2节 信息系统安全防范',
    chapter: '高一信息技术（必修2·信息系统与社会）· 第四章 信息安全与社会责任',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、防范的总体思路' },
      { type: 'paragraph', text: '上一节我们知道了安全风险来自技术、管理和用户三个层面，防范当然也要从这三个方面同时下手。技术方法负责建起“防护墙”，操作规范负责堵住“人的漏洞”。只靠其中一个都不够——再厚的防火墙，也挡不住用户主动把密码交给骗子。' },
      { type: 'keypoint', label: '重点·防范的基本原则', text: '信息安全防范要坚持<strong>技术防护与规范操作相结合</strong>：<strong>技术上</strong>做到有防护（防火墙杀毒软件）、有加密（数据加密与数字签名）、有更新（及时修复漏洞）、有控制（访问控制与身份认证）；<strong>行为上</strong>做到不乱连（陌生Wi-Fi）、不乱给（APP权限）、常备份（重要数据）、用强密码（并定期更换）。另外还要牢记<strong>预防为主</strong>：事前防范的成本，远远低于事后补救。' },

      { type: 'heading', text: '二、四种技术防范方法' },
      { type: 'list', items: [
        '① 安装防火墙和杀毒软件：防火墙像小区门口的保安，检查进出网络的数据，拦截来路不明的访问和攻击；杀毒软件负责查杀已经进入系统的病毒和木马。两者要配合使用，并保持病毒库和规则库自动更新，否则防不住新出现的威胁。',
        '② 数据加密与数字签名：加密是按一定算法把明文变成看不懂的密文，只有掌握密钥的人才能还原。这样即使数据在传输中被截获、或者硬盘被人拿走，别人也读不出内容。数字签名则用来验证消息发送者的身份，并确认内容在传输途中没有被篡改。我们平时看到网址前面的HTTPS，就是加密传输的标志。',
        '③ 定期更新、及时修复漏洞：软件厂商发现漏洞后会发布补丁，用户要及时安装系统更新和软件升级，把“后门”堵上。很多大规模病毒爆发，感染的都是长期不打补丁的机器。同时也要及时卸载不再维护的老旧软件。',
        '④ 访问控制与身份认证：身份认证解决“你是谁”的问题，方式包括密码、短信验证码、指纹、人脸、动态口令，两种以上方式组合使用叫双因素认证，安全性更高；访问控制解决“你能做什么”的问题，按岗位分配权限，遵循“最小够用”原则，不该看的看不到，不该改的改不了。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="26" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">信息系统安全的四种技术防范方法</text><line x1="275" y1="84" x2="299" y2="120" stroke="#6266d9" stroke-width="1.5"/><line x1="405" y1="84" x2="381" y2="120" stroke="#6266d9" stroke-width="1.5"/><line x1="275" y1="216" x2="299" y2="180" stroke="#6266d9" stroke-width="1.5"/><line x1="405" y1="216" x2="381" y2="180" stroke="#6266d9" stroke-width="1.5"/><circle cx="340" cy="150" r="52" fill="#6266d9"/><text x="340" y="146" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">技术防范</text><text x="340" y="170" font-size="12" fill="#ffffff" text-anchor="middle">四道防线</text><rect x="25" y="44" width="250" height="80" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="150" y="68" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">① 防火墙与杀毒软件</text><text x="150" y="90" font-size="10" fill="#2a3454" text-anchor="middle">拦截非法访问，查杀病毒木马</text><text x="150" y="110" font-size="10" fill="#2a3454" text-anchor="middle">病毒库要保持自动更新</text><rect x="405" y="44" width="250" height="80" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="530" y="68" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">② 数据加密与数字签名</text><text x="530" y="90" font-size="10" fill="#2a3454" text-anchor="middle">明文变密文，被截获也看不懂</text><text x="530" y="110" font-size="10" fill="#2a3454" text-anchor="middle">签名验证身份、防止内容篡改</text><rect x="25" y="176" width="250" height="80" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="150" y="200" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">③ 定期更新修复漏洞</text><text x="150" y="222" font-size="10" fill="#2a3454" text-anchor="middle">及时安装补丁、升级软件版本</text><text x="150" y="242" font-size="10" fill="#2a3454" text-anchor="middle">不给攻击者留下可乘之机</text><rect x="405" y="176" width="250" height="80" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="530" y="200" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">④ 访问控制与身份认证</text><text x="530" y="222" font-size="10" fill="#2a3454" text-anchor="middle">密码、指纹、人脸、短信验证码</text><text x="530" y="242" font-size="10" fill="#2a3454" text-anchor="middle">按岗位分权限，最小够用</text><text x="340" y="282" font-size="12" font-weight="bold" fill="#3d4f8a" text-anchor="middle">身份认证解决“你是谁”，访问控制解决“你能做什么”</text></svg>', caption: '图1　四种技术防范方法：防火墙杀毒软件、数据加密与数字签名、定期更新修复漏洞、访问控制与身份认证。' },
      { type: 'table', headers: ['技术方法', '解决的问题', '生活中的例子'], rows: [
        ['防火墙与杀毒软件', '挡住外来攻击，清除已入侵的恶意程序', '电脑安装安全软件并开启实时防护'],
        ['数据加密', '数据被截获或设备丢失时内容仍不泄露', '网址前的HTTPS、手机加密锁屏、加密压缩包'],
        ['数字签名', '确认发送者身份，防止内容被篡改', '电子合同签章、软件安装包的官方签名'],
        ['定期更新修复漏洞', '堵住软件缺陷这个“后门”', '手机和电脑提示的系统更新要及时安装'],
        ['访问控制与身份认证', '确认“你是谁”并限定“你能做什么”', '登录要验证码、学生只能查自己的成绩']
      ] },

      { type: 'heading', text: '三、日常安全操作规范' },
      { type: 'paragraph', text: '技术方法主要由专业人员来落实，而下面这四条操作规范，是我们每个普通用户每天都要做到的。' },
      { type: 'list', items: [
        '① 不随意连接陌生Wi-Fi：公共场所的免费Wi-Fi有可能是攻击者伪造的“假热点”，一旦连上，你输入的账号、密码、支付信息都可能被截取。确需使用时，不要进行登录、支付等敏感操作，用完及时断开并关闭自动连接功能。',
        '② 规范APP权限授权：安装APP时仔细看它要什么权限，只给业务真正需要的。一个计算器要读取通讯录、一个手电筒要获取位置，都属于过度索权，应当拒绝。定期在设置里检查并关闭不再需要的权限，同时从官方应用商店下载软件。',
        '③ 定期备份重要数据：把作业、照片、资料等重要文件定期复制到移动硬盘、U盘或云盘中，最好做到“重要数据至少两份、存放在不同地方”。这样即使遭遇勒索病毒、硬盘损坏或误删除，也能把损失降到最低。',
        '④ 使用强密码并定期更换：强密码应当足够长（一般不少于8位），包含大写字母、小写字母、数字和符号，不使用生日、手机号、姓名拼音等容易猜到的信息。不同网站要用不同密码，重要账号定期更换，有条件时开启双因素认证。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">日常安全操作规范自查清单</text><rect x="40" y="46" width="600" height="44" rx="9" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><rect x="54" y="55" width="26" height="26" rx="5" fill="#6266d9"/><text x="67" y="75" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text><text x="96" y="74" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="start">不随意连接陌生Wi-Fi</text><text x="626" y="74" font-size="10" fill="#2a3454" text-anchor="end">免费热点可能是伪造的，账号密码容易被截取</text><rect x="40" y="98" width="600" height="44" rx="9" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><rect x="54" y="107" width="26" height="26" rx="5" fill="#6266d9"/><text x="67" y="127" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text><text x="96" y="126" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="start">规范APP权限授权</text><text x="626" y="126" font-size="10" fill="#2a3454" text-anchor="end">只开放必要权限，位置、通讯录谨慎授权</text><rect x="40" y="150" width="600" height="44" rx="9" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><rect x="54" y="159" width="26" height="26" rx="5" fill="#6266d9"/><text x="67" y="179" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text><text x="96" y="178" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="start">定期备份重要数据</text><text x="626" y="178" font-size="10" fill="#2a3454" text-anchor="end">重要文件至少两份、存放在不同地方</text><rect x="40" y="202" width="600" height="44" rx="9" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><rect x="54" y="211" width="26" height="26" rx="5" fill="#6266d9"/><text x="67" y="231" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text><text x="96" y="230" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="start">使用强密码并定期更换</text><text x="626" y="230" font-size="10" fill="#2a3454" text-anchor="end">大小写字母＋数字＋符号，一站一密码</text><rect x="40" y="256" width="600" height="34" rx="8" fill="#6266d9"/><text x="340" y="278" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">技术防范 ＋ 操作规范，双管齐下才能真正保障信息安全</text></svg>', caption: '图2　日常安全操作规范清单：不乱连Wi-Fi、规范授权、定期备份、使用强密码。' },
      { type: 'keypoint', label: '重点·四条操作规范', text: '<strong>不随意连陌生Wi-Fi、规范APP权限授权、定期备份重要数据、使用强密码并定期更换。</strong>可以简记为<strong>“不乱连、不乱给、常备份、强密码”</strong>。其中<strong>定期备份</strong>是应对勒索病毒、硬盘损坏和误删除最有效的办法，<strong>强密码</strong>是保护账号安全的第一道关口。' },
      { type: 'warn', label: '易错·关于密码的三个错误做法', text: '第一，<strong>所有账号用同一个密码</strong>：一个网站被拖库，其他账号全部沦陷，这叫“撞库”。第二，<strong>用生日、手机号、姓名拼音、123456做密码</strong>：这些都在攻击者的常用密码字典里，几秒就能试出来。第三，<strong>把密码告诉别人或写在便签上贴在桌面</strong>。还要特别记住：<strong>短信验证码等同于密码，任何情况下都不能告诉他人</strong>，正规机构绝不会索要验证码。' },
      { type: 'tip', label: '提示·强密码怎么编又好记又安全', text: '可以用一句自己熟悉的话取首字母，再掺入数字和符号。例如“我在第三中学读高一2班”→ wzd3zxdg1@2b。它包含字母、数字、符号，长度够长，别人猜不到，自己却容易回忆。不同网站可以在末尾加上网站缩写来区分，比如邮箱账号加 -ml，购物账号加 -sp，这样就做到了“一站一密码”。' },
      { type: 'example', label: '例题·给出防范建议', text: '题目：某同学在奶茶店连上了名为“Free-WiFi”的免费热点，随后登录网上银行转账；他的手机里装了一个来路不明的美颜相机APP，安装时把通讯录、位置、短信权限全部开放；他所有账号都用“abc123456”这一个密码，重要照片只存在手机里。请指出他存在哪些安全隐患，并给出改进建议。<br>解析：隐患一是<strong>随意连接陌生Wi-Fi还进行支付操作</strong>，该热点可能是伪造的，银行账号和密码有被截取的风险；隐患二是<strong>从非官方渠道安装APP并过度授权</strong>，美颜相机并不需要通讯录和短信权限，这些信息可能被非法收集；隐患三是<strong>所有账号共用弱密码</strong>，一处泄露则全部账号失守；隐患四是<strong>重要数据没有备份</strong>，手机丢失或损坏照片就永久丢失。改进建议：使用手机移动数据完成支付，不在公共Wi-Fi下做敏感操作；只从官方应用商店下载软件，安装后关闭不必要权限；为不同网站设置不同的强密码（字母大小写＋数字＋符号，不少于8位）并定期更换，重要账号开启双因素认证；把照片等重要数据定期备份到云盘或移动硬盘，做到至少两份、分开存放。' }
    ],
    exercises: [
      { type: 'choice', question: '下列做法中，最有利于防范勒索病毒造成数据永久丢失的是？', options: ['定期备份重要数据', '把密码写在便签上', '连接免费公共Wi-Fi', '关闭系统自动更新'], answer: '定期备份重要数据', explanation: '勒索病毒会把文件加密，逼迫用户交钱赎回。如果重要数据已经定期备份到移动硬盘或云盘，并做到至少两份、分开存放，即使被加密也可以直接从备份恢复，损失降到最低。写密码在便签、连陌生Wi-Fi、关闭自动更新都会增加而不是降低风险。' },
      { type: 'choice', question: '在网络中，把明文按一定算法变成看不懂的密文，只有掌握密钥的人才能还原。这种技术是？', options: ['数据备份', '数据加密', '数据压缩', '数据采集'], answer: '数据加密', explanation: '数据加密是按一定算法把明文转换成密文，只有掌握密钥的人才能还原成明文。这样即使数据在传输中被截获或存储设备丢失，别人也读不出内容。网址前的HTTPS就是加密传输的标志。数据备份是复制副本防丢失，数据压缩是减小文件体积，二者作用不同。' },
      { type: 'choice', question: '下列关于身份认证与访问控制的说法，正确的是？', options: ['身份认证解决“你能做什么”的问题', '访问控制应尽量给每个人最高权限', '两种以上认证方式组合称为双因素认证，安全性更高', '设置了密码就不需要访问控制了'], answer: '两种以上认证方式组合称为双因素认证，安全性更高', explanation: '身份认证解决“你是谁”的问题，方式有密码、短信验证码、指纹、人脸等，两种以上方式组合使用称为双因素认证，安全性显著提高。访问控制解决“你能做什么”的问题，应遵循“最小够用”原则按岗位分配权限，而不是给所有人最高权限。两者作用不同，必须配合使用。' },
      { type: 'fill', question: '信息系统安全的技术防范方法包括：安装___和杀毒软件、数据___与数字签名、定期更新修复___、访问控制与身份认证。', answer: '防火墙；加密；漏洞', explanation: '四种技术防范方法是：安装防火墙和杀毒软件（拦截攻击、查杀病毒木马）、数据加密与数字签名（保证内容不被读取和篡改）、定期更新及时修复漏洞（堵住软件缺陷这个后门）、访问控制与身份认证（确认身份并限定权限）。' },
      { type: 'fill', question: '日常安全操作规范可以概括为：不乱连（陌生___）、不乱给（APP___）、常___（重要数据）、强密码（并定期更换）。', answer: 'Wi-Fi；权限；备份', explanation: '四条日常操作规范是：不随意连接陌生Wi-Fi，避免账号密码在伪造热点上被截取；规范APP权限授权，只开放业务必需的权限；定期备份重要数据，做到至少两份、分开存放；使用强密码并定期更换，不同网站使用不同密码。' }
    ]
  });
})();
