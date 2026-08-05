/* 信息技术 · 必修1 · 数据与计算 · 第2节 人工智能的应用领域 */
(function () {
  var v = gzGetVolume('it', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u15',
    name: '第2节 人工智能的应用领域',
    chapter: '高一信息技术（必修1·数据与计算）· 第四章 走进智能时代',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、人工智能已经走进我们的生活' },
      { type: 'paragraph', text: '你有没有用过手机里的语音助手？有没有看视频时被平台"猜你喜欢"精准推荐？这些背后都是人工智能（AI）在帮忙。人工智能并不是一个遥远的科学概念，它已经悄悄应用到各行各业。本节课我们一起来认识人工智能最常见的<strong>七大应用领域</strong>：智能制造、智能家居、智能教育、智能交通、智能安防、智能医疗和智能物流。' },
      { type: 'keypoint', label: '重点·什么是人工智能', text: '<strong>人工智能（Artificial Intelligence，简称AI）是让计算机模拟人类智能的一门技术。</strong>它能像人一样"看"（识别图像）、"听"（识别语音）、"说"（语音合成）、"想"（推理决策）。今天我们重点看它应用在哪些领域，而不是研究它内部怎么实现。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">人工智能的七大应用领域</text><line x1="340" y1="150" x2="340" y2="35" stroke="#6266d9" stroke-width="1.5"/><line x1="340" y1="150" x2="430" y2="78" stroke="#6266d9" stroke-width="1.5"/><line x1="340" y1="150" x2="452" y2="176" stroke="#6266d9" stroke-width="1.5"/><line x1="340" y1="150" x2="390" y2="254" stroke="#6266d9" stroke-width="1.5"/><line x1="340" y1="150" x2="290" y2="254" stroke="#6266d9" stroke-width="1.5"/><line x1="340" y1="150" x2="228" y2="176" stroke="#6266d9" stroke-width="1.5"/><line x1="340" y1="150" x2="250" y2="78" stroke="#6266d9" stroke-width="1.5"/><circle cx="340" cy="150" r="38" fill="#6266d9"/><text x="340" y="146" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">人工智能</text><text x="340" y="164" font-size="11" fill="#ffffff" text-anchor="middle">AI</text><rect x="297" y="13" width="86" height="44" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="40" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">智能制造</text><rect x="387" y="56" width="86" height="44" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="430" y="83" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">智能家居</text><rect x="409" y="154" width="86" height="44" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="452" y="181" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">智能教育</text><rect x="347" y="232" width="86" height="44" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="390" y="259" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">智能交通</text><rect x="247" y="232" width="86" height="44" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="290" y="259" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">智能安防</text><rect x="185" y="154" width="86" height="44" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="228" y="181" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">智能医疗</text><rect x="207" y="56" width="86" height="44" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="250" y="83" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">智能物流</text></svg>', caption: '图1　人工智能向七个方向延伸，渗透到我们生活和生产的方方面面。' },
      { type: 'heading', text: '二、七大应用领域逐个看' },
      { type: 'paragraph', text: '<strong>① 智能制造：</strong>在工厂里，人工智能让生产变得更聪明、更高效。最常见的有两样：' },
      { type: 'list', items: ['工业机器人：会焊接、搬运、装配的机械臂，可以24小时不停歇地干活，而且动作精准', '智能质检：用摄像头拍下产品，AI自动判断有没有划痕、缺件等缺陷，比人眼检查更快更准'] },
      { type: 'paragraph', text: '<strong>② 智能家居：</strong>让家里的各种设备联网、能"听懂"指令、自动工作。' },
      { type: 'list', items: ['智能音箱：说一句"播放音乐""关灯"，它就照做（如小爱同学、小度、Siri）', '智能照明：根据光线明暗自动调节亮度，还能用手机远程开关', '智能安防：家里装了摄像头和门磁，有人闯入会立刻手机报警'] },
      { type: 'paragraph', text: '<strong>③ 智能教育：</strong>AI当"私人家教"，帮每个人找到适合自己的学习方式。' },
      { type: 'list', items: ['个性化学习：根据你的做题情况，自动推送你薄弱的知识点练习', '智能辅导：拍照搜题后，AI不仅给答案，还一步步讲思路'] },
      { type: 'paragraph', text: '<strong>④ 智能交通：</strong>让出行更安全、更顺畅。' },
      { type: 'list', items: ['自动驾驶：汽车自己看路、自己刹车转向，减轻司机负担（如无人驾驶出租车）', '智能导航：实时躲避拥堵路段，自动重新规划最快路线'] },
      { type: 'paragraph', text: '<strong>⑤ 智能安防：</strong>用AI守护公共安全。' },
      { type: 'list', items: ['人脸识别：车站、手机解锁时"刷脸"确认身份', '视频监控：摄像头自动发现可疑行为并报警，比如有人摔倒、有烟火'] },
      { type: 'paragraph', text: '<strong>⑥ 智能医疗：</strong>AI帮医生看病、帮普通人管健康。' },
      { type: 'list', items: ['医学影像诊断：看X光、CT片，帮医生更快发现肿瘤、骨折等问题', '健康管理：智能手表测心率、睡眠，提醒你多运动、早点睡'] },
      { type: 'paragraph', text: '<strong>⑦ 智能物流：</strong>让快递更快、更省成本。' },
      { type: 'list', items: ['智能仓储：仓库里机器人自动搬货、分拣，不用人工满仓库跑', '路径优化：AI算出快递车最省时间、最省油的送货路线'] },
      { type: 'keypoint', label: '重点·七大领域速记', text: '<strong>记住七个"智能"：制造、家居、教育、交通、安防、医疗、物流。</strong>它们有一个共同点——都用AI代替或辅助人完成"看、听、说、想"的任务，从而让事情做得更快、更准、更省力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">AI在日常生活中的应用场景（以智能家居为例）</text><rect x="240" y="55" width="200" height="170" rx="14" fill="#d5dcf5" stroke="#6266d9" stroke-width="2"/><polygon points="240,55 250,40 410,40 420,55" fill="#6266d9"/><text x="330" y="28" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">家</text><circle cx="290" cy="100" r="16" fill="#6266d9"/><text x="290" y="105" font-size="11" fill="#ffffff" text-anchor="middle">音箱</text><text x="330" y="105" font-size="11" fill="#2a3454" text-anchor="middle">"帮我关灯"</text><circle cx="290" cy="145" r="14" fill="#ffffff" stroke="#6266d9" stroke-width="1.5"/><text x="332" y="149" font-size="11" fill="#2a3454" text-anchor="middle">智能照明</text><rect x="270" y="138" width="14" height="14" fill="#6266d9"/><rect x="380" y="125" width="22" height="18" rx="3" fill="#6266d9"/><circle cx="391" cy="134" r="4" fill="#ffffff"/><text x="332" y="170" font-size="11" fill="#2a3454" text-anchor="middle">智能安防摄像头</text><rect x="270" y="188" width="40" height="26" rx="4" fill="#6266d9"/><text x="290" y="204" font-size="10" fill="#ffffff" text-anchor="middle">手机</text><text x="370" y="206" font-size="11" fill="#2a3454" text-anchor="middle">远程控制</text><line x1="420" y1="140" x2="500" y2="140" stroke="#6266d9" stroke-width="1.5" stroke-dasharray="4 4"/><rect x="500" y="100" width="150" height="80" rx="10" fill="#ffffff" stroke="#6266d9" stroke-width="1.5"/><text x="575" y="125" font-size="12" font-weight="bold" fill="#3d4f8a" text-anchor="middle">手机APP</text><text x="575" y="148" font-size="11" fill="#2a3454" text-anchor="middle">一句话指挥全屋</text><text x="575" y="168" font-size="11" fill="#2a3454" text-anchor="middle">设备自动联动</text><text x="340" y="250" font-size="13" fill="#2a3454" text-anchor="middle">人说话 → 智能音箱听懂 → 灯光/摄像头/手机协同工作</text></svg>', caption: '图2　一个典型的智能家居场景：人用语音指挥，家中设备联动响应。' },
      { type: 'tip', label: '提示·怎么区分这些领域', text: '分不清属于哪个领域时，记住一个窍门：看它主要用在"什么地方"。用在工厂→智能制造；用在家里→智能家居；用在学校/学习→智能教育；用在马路上/出行→智能交通；用在社会安全（抓坏人、管门禁）→智能安防；用在医院/看病→智能医疗；用在快递/仓库→智能物流。' },
      { type: 'example', label: '例题·判断应用领域', text: '题目：某快递公司用机器人自动分拣包裹，并用算法规划送货路线。这分别属于人工智能的哪个应用领域？<br>解析：机器人自动分拣包裹发生在仓库里，属于<strong>智能物流</strong>中的"智能仓储"；用算法规划送货路线，属于智能物流中的"路径优化"。所以这两件事都属于<strong>智能物流</strong>这一应用领域。' }
    ],
    exercises: [
      { type: 'choice', question: '下列哪一项属于"智能制造"的典型应用？', options: ['智能音箱语音点歌', '工业机器人自动焊接', '手机刷脸解锁', '导航软件躲避拥堵'], answer: '工业机器人自动焊接', explanation: '智能制造指AI在工厂生产中的应用，工业机械臂自动焊接是典型的智能制造（工业机器人）。智能音箱属于智能家居，刷脸解锁属于智能安防，导航躲避拥堵属于智能交通。' },
      { type: 'choice', question: '医院用AI分析CT影像来发现肿瘤，这主要属于哪个应用领域？', options: ['智能医疗', '智能教育', '智能物流', '智能家居'], answer: '智能医疗', explanation: '用AI辅助看医学影像、帮助诊断疾病，属于智能医疗中的"医学影像诊断"。它发生在医院、服务于看病诊断，所以归为智能医疗。' },
      { type: 'choice', question: '下列属于"智能交通"应用的是？', options: ['仓库机器人搬货', '自动驾驶汽车', '拍照搜题讲思路', '智能手表测心率'], answer: '自动驾驶汽车', explanation: '智能交通关注出行与安全，自动驾驶汽车自己看路、转向、刹车，是智能交通的典型代表。仓库搬货属智能物流，拍照搜题属智能教育，测心率属智能医疗。' },
      { type: 'fill', question: '人工智能的七大应用领域分别是：智能制造、智能家居、___、智能交通、___、智能医疗和___。', answer: '智能教育；智能安防；智能物流', explanation: '七大领域为：智能制造、智能家居、智能教育、智能交通、智能安防、智能医疗、智能物流。记忆口诀：制造、家居、教育、交通、安防、医疗、物流。' },
      { type: 'fill', question: '智能家居中，能"听懂"人说话并控制其他设备的是___；根据光线自动调节亮度的是___；有人闯入会手机报警的是___。', answer: '智能音箱；智能照明；智能安防', explanation: '智能家居的三个典型应用：智能音箱负责听懂语音指令并联动其他设备；智能照明根据环境光自动调节亮度；智能安防（摄像头、门磁）在异常时向手机报警。' }
    ]
  });
})();
