/* 信息技术 · 高三复习 · 信息系统与安全 · 第3节 信息系统安全的基本概念 */
(function () {
  var v = gzGetVolume('it', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u3',
    name: '第3节 信息系统安全的基本概念',
    chapter: '三、信息系统安全基础',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是信息系统安全' },
      { type: 'paragraph', text: '信息系统安全，就是让信息系统本身，以及它存储、处理、传输的信息，得到五个方面的保障：保密性、完整性、可用性、可控性、不可否认性。总的目标是：系统既不会因为偶然事故（比如断电、误操作），也不会因为别人恶意破坏、篡改、泄露或非法访问而出问题。' },
      { type: 'paragraph', text: '举个生活例子：你存在云笔记里的日记，只有你自己能看（保密），内容不会被别人偷偷改掉（完整），你想看的时候随时能打开（可用），谁在什么时候看过系统能查到（可控），你自己写下的东西不能赖说是别人写的（不可抵赖）。这五条都满足，才算“安全”。' },
      { type: 'keypoint', label: '重点·五大核心目标', text: '<strong>信息系统安全的五大目标是：保密性、完整性、可用性、可控性、不可否认性。</strong>记口诀“保密完可不可”——保(密)完(整)可(用)控(可)不(可)赖。它们合起来保证系统不受偶然或恶意的破坏。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">信息系统安全的五大目标</text><polygon points="340,70 410,110 380,190 300,190 270,110" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="120" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">安全</text><text x="340" y="140" font-size="11" fill="#2a3454" text-anchor="middle">盾牌</text><rect x="40" y="210" width="110" height="56" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="95" y="234" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">保密性</text><text x="95" y="254" font-size="10" fill="#2a3454" text-anchor="middle">不泄露</text><rect x="170" y="210" width="110" height="56" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="225" y="234" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">完整性</text><text x="225" y="254" font-size="10" fill="#2a3454" text-anchor="middle">不被改</text><rect x="300" y="210" width="110" height="56" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="355" y="234" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">可用性</text><text x="355" y="254" font-size="10" fill="#2a3454" text-anchor="middle">能正常使用</text><rect x="430" y="210" width="110" height="56" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="485" y="234" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">可控性</text><text x="485" y="254" font-size="10" fill="#2a3454" text-anchor="middle">可追溯</text><rect x="560" y="210" width="110" height="56" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="615" y="234" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">不可否认</text><text x="615" y="254" font-size="10" fill="#2a3454" text-anchor="middle">不能赖</text></svg>', caption: '图1　信息系统安全五大目标：保密性、完整性、可用性、可控性、不可否认性，像一面盾牌守护系统。' },
      { type: 'heading', text: '二、五大目标逐个看懂' },
      { type: 'paragraph', text: '保密性：信息不被没权限的人看到，比如你的支付密码只有你知道。完整性：内容不被随便篡改，比如转账金额不能被中途改成别的数字。可用性：系统能正常运行、合法用户随时能用，而且出异常后能很快恢复，比如网站宕机后能迅速修好。' },
      { type: 'paragraph', text: '可控性：对信息的访问和操作可以被管理、能被追查到是谁做的。不可否认性：用户做过的行为不能抵赖，比如你用电子签名确认过合同，就不能说“不是我签的”。这五条各有侧重，合起来才构成完整的安全。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">信息系统安全的四个层面</text><rect x="40" y="70" width="270" height="70" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="175" y="98" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">硬件安全</text><text x="175" y="120" font-size="11" fill="#2a3454" text-anchor="middle">设备不被破坏、被盗</text><rect x="370" y="70" width="270" height="70" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="505" y="98" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">软件安全</text><text x="505" y="120" font-size="11" fill="#2a3454" text-anchor="middle">程序无漏洞、无恶意</text><rect x="40" y="160" width="270" height="70" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="175" y="188" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">数据安全</text><text x="175" y="210" font-size="11" fill="#2a3454" text-anchor="middle">信息保密完整可用</text><rect x="370" y="160" width="270" height="70" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="505" y="188" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">网络安全</text><text x="505" y="210" font-size="11" fill="#2a3454" text-anchor="middle">传输不被窃听截获</text><text x="340" y="270" font-size="12" fill="#2a3454" text-anchor="middle">四个层面层层防护，缺一不可</text></svg>', caption: '图2　信息系统安全的四个层面：硬件安全、软件安全、数据安全、网络安全，从设备到传输全面守护。' },
      { type: 'tip', label: '提示·四个层面', text: '<strong>信息系统安全要从四个层面理解：硬件安全（设备本身）、软件安全（程序无漏洞）、数据安全（信息三性）、网络安全（传输不被截）。</strong>答题时若问“从哪些层面保障安全”，就按这四个层面展开。' },
      { type: 'warn', label: '易错·可用性与不可否认性', text: '容易把“可用性”理解成“谁都能用”。其实可用性是指“合法用户能正常使用，且异常后能恢复”，并不是向所有人开放。另外不可否认性强调“行为不能抵赖”，常和电子签名一起考，不要和保密性混为一谈。' },
      { type: 'example', label: '例题·目标辨析', text: '题目：某银行系统遭到攻击后迅速切换到备用服务器，几分钟内恢复对外服务。这主要体现了信息系统安全的哪一目标？<br>解析：系统在异常后能快速恢复、保证合法用户能正常使用，体现的是可用性（含异常快速恢复）。保密性讲不泄露，完整性讲不被改，可控性讲可追溯，均不符合“迅速恢复服务”的描述。所以答案是可用性。' },
      { type: 'table', headers: ['目标', '含义', '生活例子'], rows: [['保密性', '不被未授权访问', '密码只有自己知道'], ['完整性', '内容不被随意篡改', '转账金额不变'], ['可用性', '系统正常运行、可恢复', '网站宕机后快速修复'], ['可控性', '访问操作可追溯', '谁登录过能查到'], ['不可否认性', '用户行为不可抵赖', '电子签名不能赖']] }
    ],
    exercises: [
      { type: 'choice', question: '信息系统安全的五大核心目标不包括下列哪一项？', options: ['保密性', '完整性', '可用性', '趣味性'], answer: '趣味性', explanation: '五大目标是保密性、完整性、可用性、可控性、不可否认性；趣味性不是安全目标，属于干扰项。' },
      { type: 'choice', question: '“信息内容不被别人偷偷篡改”体现的是信息系统安全的哪一目标？', options: ['保密性', '完整性', '可用性', '可控性'], answer: '完整性', explanation: '完整性指信息内容不被未经授权地篡改；保密性是不泄露，可用性是能正常使用，可控性是操作可追溯，均不符合“不被篡改”。' },
      { type: 'choice', question: '下列关于信息系统安全四个层面的说法，正确的是？', options: ['只包括硬件安全和软件安全', '包括硬件、软件、数据、网络四个层面', '只关注数据安全即可', '网络安全不属于安全层面'], answer: '包括硬件、软件、数据、网络四个层面', explanation: '信息系统安全从硬件安全、软件安全、数据安全、网络安全四个层面共同保障；只讲某一个层面是不完整的。' },
      { type: 'fill', question: '信息系统安全要保证信息的保密性、完整性、可用性、可控性和___得到保障。', answer: '不可否认性', explanation: '五大核心目标为保密性、完整性、可用性、可控性、不可否认性；不可否认性指用户行为不能抵赖，常结合电子签名考查。' },
      { type: 'fill', question: '从层面看，信息系统安全包括硬件安全、软件安全、数据安全和___四个层面。', answer: '网络安全', explanation: '信息系统安全需从硬件、软件、数据、网络四个层面综合防护，网络安全重点保障信息传输不被窃听和截获。' }
    ]
  });
})();
