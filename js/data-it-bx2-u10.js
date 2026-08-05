/* 信息技术 · 必修2 · 信息系统与社会 · 第2节 通信网络 */
(function () {
  var v = gzGetVolume('it', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u10',
    name: '第2节 通信网络',
    chapter: '高一信息技术（必修2·信息系统与社会）· 第三章 信息系统的基础设施',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是计算机网络' },
      { type: 'paragraph', text: '一台孤零零的计算机能做的事很有限，只有把很多台计算机连起来，才能查资料、发消息、看视频。把它们连起来的，就是计算机网络。计算机网络是信息系统的“血管”，负责把数据从一个地方送到另一个地方。' },
      { type: 'keypoint', label: '重点·计算机网络的定义', text: '<strong>计算机网络是指把地理位置不同的多台计算机及其外部设备，通过通信线路连接起来，在网络操作系统和网络管理软件的管理与协调下，实现资源共享和信息传递的系统。</strong>这个定义里有四个要点：<strong>地理位置不同的多台设备、通信线路连接、网络软件管理、实现资源共享和信息传递</strong>。缺了任何一条都不能叫计算机网络。' },
      { type: 'list', items: [
        '连接对象：不只是计算机，还包括打印机、服务器、摄像头等外部设备。',
        '连接手段：通信线路，可以是网线、光纤等有线线路，也可以是Wi-Fi、4G/5G等无线方式。',
        '管理手段：靠网络软件（网络操作系统、网络协议）来协调，不是简单地用线接上就行。',
        '最终目的：资源共享和信息传递，这是建网络的根本原因。'
      ] },

      { type: 'heading', text: '二、计算机网络的三大功能' },
      { type: 'list', items: [
        '① 数据传输：把数据从一台设备快速、准确地送到另一台设备。发微信、收邮件、上传作业、看直播，都是数据传输。',
        '② 资源共享：网络中的硬件、软件和数据都可以被大家共用。例如一间办公室的十台电脑共用一台网络打印机（硬件共享），全班同学访问同一个在线题库（数据共享），机房里的电脑共用服务器上的软件（软件共享）。',
        '③ 分布式处理：把一个很大的任务拆成许多小任务，分给网络中多台计算机同时去做，最后汇总结果。天气预报的超大规模计算、大型网站的高并发访问，都靠分布式处理来完成。'
      ] },
      { type: 'tip', label: '提示·三大功能怎么记', text: '可以用一句话串起来：<strong>把数据送过去（数据传输），把东西一起用（资源共享），把活儿分着干（分布式处理）</strong>。其中资源共享是计算机网络最重要、最基本的功能。' },

      { type: 'heading', text: '三、计算机网络的分类' },
      { type: 'paragraph', text: '按照覆盖的地理范围大小，计算机网络通常分为局域网、城域网和广域网三类。范围越大，涉及的技术和管理就越复杂。' },
      { type: 'table', headers: ['类型', '英文缩写', '覆盖范围', '典型例子'], rows: [
        ['局域网', 'LAN', '小于10km，一般在一栋楼或一个园区内', '校园网、机房网络、家庭Wi-Fi、公司办公网'],
        ['城域网', 'MAN', '10km~100km，覆盖一座城市', '全市政务专网、有线电视网、城市交通监控网'],
        ['广域网', 'WAN', '大于100km，跨城市、跨地区甚至跨国', '互联网（Internet）、全国银行专网、跨国企业网']
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">局域网 / 城域网 / 广域网 覆盖范围对比</text><rect x="40" y="46" width="600" height="238" rx="14" fill="#d5dcf5" stroke="#6266d9" stroke-width="2"/><text x="58" y="70" font-size="14" font-weight="bold" fill="#3d4f8a" text-anchor="start">广域网 WAN　＞100km</text><text x="622" y="70" font-size="11" fill="#2a3454" text-anchor="end">跨城市、跨地区、跨国，Internet 是最大的广域网</text><rect x="120" y="86" width="440" height="160" rx="12" fill="#eef2fc" stroke="#6266d9" stroke-width="1.8"/><text x="136" y="110" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="start">城域网 MAN　10~100km</text><text x="544" y="110" font-size="11" fill="#2a3454" text-anchor="end">覆盖一座城市，如全市政务专网</text><rect x="215" y="126" width="250" height="98" rx="11" fill="#6266d9"/><text x="340" y="156" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">局域网 LAN</text><text x="340" y="180" font-size="12" fill="#ffffff" text-anchor="middle">覆盖范围 ＜10km</text><text x="340" y="204" font-size="11" fill="#ffffff" text-anchor="middle">校园网、机房、家庭Wi-Fi</text><text x="340" y="270" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">覆盖范围由小到大：局域网 ＜ 城域网 ＜ 广域网</text></svg>', caption: '图1　三类网络的覆盖范围层层包含：局域网最小，城域网覆盖一座城市，广域网跨地区跨国。' },

      { type: 'heading', text: '四、网络接入方式' },
      { type: 'paragraph', text: '设备要上网，必须先接入网络。接入方式分为有线接入和无线接入两大类，各有各的适用场合。' },
      { type: 'table', headers: ['接入方式', '常见形式', '优点', '缺点'], rows: [
        ['有线接入', '光纤入户、网线（双绞线）、有线电视电缆', '传输速率高、信号稳定、抗干扰强、安全性较好', '需要布线，设备位置固定，不够灵活'],
        ['无线接入', 'Wi-Fi、4G/5G移动网络、蓝牙、卫星通信', '不用布线、灵活便捷、可随身移动使用', '易受障碍物和干扰影响，稳定性和安全性相对较弱']
      ] },
      { type: 'paragraph', text: '实际生活中两者常常配合使用：家里的光纤先有线接入到路由器，路由器再发出Wi-Fi信号供手机、平板无线使用。学校机房用网线保证稳定，走廊教室用Wi-Fi保证灵活。' },

      { type: 'heading', text: '五、IP地址、域名与DNS' },
      { type: 'paragraph', text: '网络里有海量设备，数据要准确送到目的地，就必须给每台设备一个“门牌号”，这就是IP地址。' },
      { type: 'list', items: [
        'IP地址：接入网络的每台设备的唯一标识，相当于设备在网络中的门牌号。常见的IPv4地址由四组数字组成，如203.0.113.25，每组取值0~255。',
        '域名：IP地址的字符化表示，方便人记忆，如www.example.com。数字串难记，字母单词好记，域名就是为人服务的。',
        'DNS（域名系统）：负责把域名翻译成对应IP地址的服务器系统，这个过程叫域名解析。没有DNS，我们上网就得背一串串数字。',
        '带宽：衡量网络传输能力的指标，可以理解为“路有多宽”，单位常用Mbps、Gbps。带宽越大，单位时间能通过的数据越多，传输速率越高，下载和看视频就越快。'
      ] },
      { type: 'keypoint', label: '重点·三者的关系', text: '<strong>IP地址是给机器用的，域名是给人记的，DNS负责把域名翻译成IP地址。</strong>浏览器真正用来找服务器的始终是IP地址，域名只是中间的一层“别名”。可以打个比方：域名像“人民路第一中学”，IP地址像“人民路125号”，DNS就是那本能把校名查成门牌号的地址簿。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">DNS 域名解析流程</text><rect x="30" y="62" width="150" height="64" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="105" y="88" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">用户计算机</text><text x="105" y="110" font-size="10" fill="#2a3454" text-anchor="middle">输入 www.example.com</text><rect x="265" y="62" width="150" height="64" rx="10" fill="#6266d9"/><text x="340" y="88" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">DNS 服务器</text><text x="340" y="110" font-size="10" fill="#ffffff" text-anchor="middle">保存域名与IP对照表</text><rect x="500" y="62" width="150" height="64" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="575" y="88" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">网站服务器</text><text x="575" y="110" font-size="10" fill="#2a3454" text-anchor="middle">IP：203.0.113.25</text><text x="222" y="76" font-size="10" fill="#2a3454" text-anchor="middle">① 送出域名查询</text><line x1="182" y1="86" x2="253" y2="86" stroke="#6266d9" stroke-width="2"/><polygon points="259,86 249,81 249,91" fill="#6266d9"/><line x1="263" y1="108" x2="192" y2="108" stroke="#6266d9" stroke-width="2"/><polygon points="186,108 196,103 196,113" fill="#6266d9"/><text x="222" y="124" font-size="10" fill="#2a3454" text-anchor="middle">② 返回IP地址</text><text x="340" y="162" font-size="11" fill="#2a3454" text-anchor="middle">③ 浏览器用得到的IP地址去访问网站服务器</text><path d="M105 126 L105 170 L575 170 L575 132" stroke="#6266d9" stroke-width="2" fill="none"/><polygon points="575,126 569,136 581,136" fill="#6266d9"/><path d="M605 126 L605 200 L135 200 L135 132" stroke="#6266d9" stroke-width="2" fill="none" stroke-dasharray="6 4"/><polygon points="135,126 129,136 141,136" fill="#6266d9"/><text x="370" y="216" font-size="11" fill="#2a3454" text-anchor="middle">④ 服务器把网页数据返回给浏览器，页面显示出来</text><rect x="30" y="228" width="620" height="56" rx="10" fill="#6266d9"/><text x="340" y="250" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">域名是给人记的，IP地址是给机器用的</text><text x="340" y="272" font-size="11" fill="#ffffff" text-anchor="middle">DNS 的作用就是把域名解析（翻译）成对应的IP地址</text></svg>', caption: '图2　DNS域名解析流程：输入域名 → DNS查询 → 返回IP地址 → 用IP访问网站服务器 → 返回网页。' },

      { type: 'warn', label: '易错·别把域名当成IP地址', text: '常见错误是认为“浏览器直接用域名找到网站”。实际上网络设备之间只认<strong>IP地址</strong>，域名必须先经过DNS解析成IP，通信才能进行。另一个易错点是把<strong>带宽</strong>和<strong>网速</strong>完全等同：带宽是网络能提供的最大传输能力，实际网速还会受到服务器性能、线路拥堵、设备状况等影响，所以带宽大不等于任何时候都快。' },
      { type: 'example', label: '例题·分析网络类型与解析过程', text: '题目：某中学建有校园网，机房用网线连接，教学楼提供Wi-Fi。同学在校园网内输入 www.example.com 访问一个外地网站。请回答：①校园网属于哪类网络？②教学楼的Wi-Fi属于哪种接入方式？③访问外地网站时，域名是怎样变成IP地址的？<br>解析：①校园网覆盖范围在一个校园内，小于10km，属于<strong>局域网（LAN）</strong>；②Wi-Fi不需要布线、可移动使用，属于<strong>无线接入</strong>；③浏览器先把域名 www.example.com 发送给<strong>DNS服务器</strong>查询，DNS在域名与IP的对照表中找到对应的IP地址并返回，浏览器再用这个IP地址去访问外地的网站服务器，服务器把网页数据传回来显示在屏幕上。由于访问的是外地网站，数据要通过<strong>广域网（Internet）</strong>传输。' }
    ],
    exercises: [
      { type: 'choice', question: '某学校的校园网覆盖整个校园，各教学楼之间用光纤连接。这个网络属于？', options: ['局域网LAN', '城域网MAN', '广域网WAN', '国际互联网'], answer: '局域网LAN', explanation: '按覆盖的地理范围划分，局域网小于10km，一般在一栋楼或一个园区内；城域网覆盖10~100km的一座城市；广域网大于100km，跨城市甚至跨国。校园网覆盖范围在一个校园内，明显小于10km，属于局域网。' },
      { type: 'choice', question: '在浏览器地址栏输入 www.example.com 后能够打开网页，其中把域名翻译成IP地址的是？', options: ['路由器', 'DNS服务器', '网站服务器', '交换机'], answer: 'DNS服务器', explanation: 'IP地址是网络设备的唯一标识，机器之间只认IP地址；域名是IP地址的字符化表示，方便人记忆。DNS（域名系统）服务器保存着域名与IP地址的对照表，负责把域名解析成对应的IP地址，浏览器再用这个IP去访问网站服务器。' },
      { type: 'choice', question: '下列关于有线接入和无线接入的说法，正确的是？', options: ['无线接入的稳定性通常优于有线接入', '有线接入灵活便捷但速率低', '有线接入稳定但布线后位置不灵活', '无线接入完全不会受到干扰'], answer: '有线接入稳定但布线后位置不灵活', explanation: '有线接入通过光纤、网线传输，速率高、信号稳定、抗干扰强，但需要布线、设备位置固定，不够灵活；无线接入不用布线、灵活便捷、可移动使用，但容易受到障碍物和电磁干扰影响，稳定性和安全性相对较弱。' },
      { type: 'fill', question: '计算机网络的三大功能是___、资源共享和___处理，其中最基本、最重要的功能是资源共享。', answer: '数据传输；分布式', explanation: '计算机网络的三大功能是数据传输（把数据从一台设备送到另一台设备）、资源共享（硬件、软件、数据被大家共用）和分布式处理（把大任务拆成小任务分给多台计算机同时完成）。其中资源共享是建立网络最基本、最重要的目的。' },
      { type: 'fill', question: '___是接入网络的每台设备的唯一标识；衡量网络传输能力的指标叫___，它越大，数据传输速率越高。', answer: 'IP地址；带宽', explanation: 'IP地址是网络中每台设备的唯一标识，相当于设备的门牌号，常见的IPv4地址由四组0~255的数字组成。带宽是衡量网络传输能力的指标，单位常用Mbps、Gbps，带宽越大单位时间内能通过的数据越多，传输速率越高。' }
    ]
  });
})();
