/* 信息技术 · 高三复习 · 信息系统与安全 · 第5节 技术防护手段 */
(function () {
  var v = gzGetVolume('it', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u5',
    name: '第5节 技术防护手段',
    chapter: '五、信息系统安全防护技术',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、数据加密与数字签名' },
      { type: 'paragraph', text: '数据加密是把“看得懂”的信息变成“乱码”，只有拿到钥匙的人才能还原，用来保证保密性、完整性、不可否认性和存在性。加密分两种：对称加密，加密和解密用同一把密钥，像同一把锁的钥匙；非对称加密，用一对“公钥+私钥”，公钥能加密、私钥才能解密，更安全。' },
      { type: 'paragraph', text: '数字签名则是给电子文件“盖个章”：用发送者的私钥签名，别人用他的公钥就能验证“这真是他发的、没被改过”，从而保证不可否认性和完整性。我们网上办业务时看到的“电子签章”，背后就是数字签名。' },
      { type: 'keypoint', label: '重点·加密与签名', text: '<strong>对称加密：同一把密钥加解密，快但钥匙要保密；非对称加密：公钥加密、私钥解密，更安全。数字签名用私钥“盖章”，证明身份与未被篡改。</strong>记住：加密保“保密”，签名保“不可否认+完整”。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">数据加密的两种方式</text><rect x="30" y="70" width="290" height="150" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="175" y="98" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">对称加密</text><text x="175" y="124" font-size="11" fill="#2a3454" text-anchor="middle">加密、解密同一把密钥</text><text x="175" y="146" font-size="11" fill="#2a3454" text-anchor="middle">速度快</text><text x="175" y="168" font-size="11" fill="#2a3454" text-anchor="middle">钥匙保密是关键</text><text x="175" y="196" font-size="11" fill="#2a3454" text-anchor="middle">例：文件压缩包密码</text><rect x="360" y="70" width="290" height="150" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="505" y="98" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">非对称加密</text><text x="505" y="124" font-size="11" fill="#2a3454" text-anchor="middle">公钥加密 + 私钥解密</text><text x="505" y="146" font-size="11" fill="#2a3454" text-anchor="middle">更安全</text><text x="505" y="168" font-size="11" fill="#2a3454" text-anchor="middle">私钥自己留着</text><text x="505" y="196" font-size="11" fill="#2a3454" text-anchor="middle">例：网银数字证书</text></svg>', caption: '图1　对称加密（同密钥）与非对称加密（公钥+私钥）的区别与例子。' },
      { type: 'heading', text: '二、防火墙、身份认证与数据备份' },
      { type: 'paragraph', text: '防火墙是硬件和软件的组合，像一道“门卫”，时刻监控和控制进出的网络流量，挡住不请自来的访问。身份认证与权限管理，则是确认“你是谁”、并只给你该有的权限，比如用密码、指纹、验证码登录，普通用户不能看管理员才能看的数据。' },
      { type: 'paragraph', text: '数据备份是定期把重要数据另存一份，万一被勒索、误删或硬盘坏了，还能恢复，相当于给资料买份“保险”。这三样配合加密和签名，构成了防护的基本盘。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">技术防护手段一览</text><rect x="30" y="70" width="190" height="70" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="125" y="98" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">数据加密</text><text x="125" y="120" font-size="11" fill="#2a3454" text-anchor="middle">保密/不可否认</text><rect x="250" y="70" width="190" height="70" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="345" y="98" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">防火墙</text><text x="345" y="120" font-size="11" fill="#2a3454" text-anchor="middle">监控进出流量</text><rect x="470" y="70" width="190" height="70" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="565" y="98" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">身份认证</text><text x="565" y="120" font-size="11" fill="#2a3454" text-anchor="middle">确认是谁/给权限</text><rect x="140" y="170" width="190" height="70" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="235" y="198" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">数据备份</text><text x="235" y="220" font-size="11" fill="#2a3454" text-anchor="middle">防丢失可恢复</text><rect x="370" y="170" width="190" height="70" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="465" y="198" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">数字签名</text><text x="465" y="220" font-size="11" fill="#2a3454" text-anchor="middle">防抵赖保完整</text></svg>', caption: '图2　五大技术防护手段：数据加密、防火墙、身份认证、数据备份、数字签名。' },
      { type: 'keypoint', label: '重点·防范按因素分类', text: '<strong>防范要“对症”：人为因素→靠身份认证与权限管理；软件硬件因素→靠主机系统安全与网络应急响应；数据因素→靠数据加密与数据备份。</strong>记住“人管权限、机管安全、数据管加密备份”这个对应就能答题。' },
      { type: 'tip', label: '提示·日常这样防护', text: '<strong>日常防护很简单：不同账号用不同强密码（身份认证）、连Wi-Fi用防火墙、重要文件存云端或U盘双份（备份）、不点陌生链接。</strong>这些措施分别对应上面的技术，普通人也能做。' },
      { type: 'warn', label: '易错·对称与非对称', text: '容易把两种加密记反。对称加密是“同一把钥匙”开和锁，快但不方便传钥匙；非对称加密是“公钥人人可加密、私钥只有自己能解”，安全但慢。考试若问“网银用哪类更常见”，答案是非对称加密（配合数字证书）。' },
      { type: 'example', label: '例题·防护手段对应', text: '题目：某单位为防止员工误删或硬盘损坏导致资料丢失，每周把核心数据复制到另一台服务器。这用到了哪种防护手段？<br>解析：定期另存一份数据以便恢复，属于数据备份。加密保保密、防火墙控流量、身份认证确认身份，均与“防丢失恢复”不符。所以答案是数据备份。' },
      { type: 'table', headers: ['防护手段', '作用', '对应防范因素'], rows: [['数据加密', '保保密/完整/不可否认', '数据因素'], ['防火墙', '监控控制进出流量', '软硬件因素'], ['身份认证', '确认身份、分配权限', '人为因素'], ['数据备份', '防丢失、可恢复', '数据因素'], ['数字签名', '防抵赖、保完整', '数据因素']] }
    ],
    exercises: [
      { type: 'choice', question: '下列关于“对称加密”和“非对称加密”的说法，正确的是？', options: ['对称加密用公钥私钥配对', '非对称加密加解密用同一把密钥', '对称加密加解密用同一把密钥，非对称加密用公钥私钥配对', '两者都没有密钥'], answer: '对称加密加解密用同一把密钥，非对称加密用公钥私钥配对', explanation: '对称加密加密和解密使用同一密钥；非对称加密使用一对公钥和私钥，公钥加密、私钥解密。其余选项把二者特点混淆了。' },
      { type: 'choice', question: '防火墙在信息系统中主要起什么作用？', options: ['给文件加密', '监控和控制进出网络的流量', '定期复制数据', '确认用户身份'], answer: '监控和控制进出网络的流量', explanation: '防火墙是软硬件组合，作用是监控、控制进出网络的数据流量，挡住非法访问；加密、备份、身份认证是其他独立手段。' },
      { type: 'choice', question: '针对“人为因素”导致的安全风险，应主要采用哪种防护手段？', options: ['数据加密与备份', '身份认证与权限管理', '主机系统安全', '网络应急响应'], answer: '身份认证与权限管理', explanation: '防范按因素分类：人为因素→身份认证与权限管理；软件硬件因素→主机系统安全/网络应急响应；数据因素→加密/备份。' },
      { type: 'fill', question: '数字签名利用发送者的___进行“盖章”，别人用其公钥验证，从而保证信息的不可否认性和___。', answer: '私钥；完整性', explanation: '数字签名用发送者私钥签名，接收方用对应公钥验证，可证明身份且内容未被篡改，从而保障不可否认性与完整性。' },
      { type: 'fill', question: '为防止数据丢失，应定期进行___；为阻挡非法网络访问，应部署___。', answer: '数据备份；防火墙', explanation: '数据备份用于防丢失、可恢复；防火墙用于监控控制进出流量、阻挡非法访问，二者都是基础技术防护手段。' }
    ]
  });
})();
