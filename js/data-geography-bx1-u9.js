/* 地理 · 必修 第一册 · 第3章 · 课时：第3节 海水的运动 */
(function () {
  var v = gzGetVolume('geography', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u9',
    name: '第3节 海水的运动',
    chapter: '必修 第一册 · 第3章 地球上的水',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、海水的运动有哪些形式' },
      { type: 'paragraph', text: '海水从来不是安静的，它一直在以不同方式运动。地理上把海水的运动主要分成三类：波浪、潮汐和洋流。波浪是水面上下起伏，像风吹起的层层浪；潮汐是海水周期性的涨落，像大海在呼吸；洋流是海水沿固定方向的大规模流动，像海洋里的河流。三者都会影响航运、渔业和海岸。' },
      { type: 'list', items: ['波浪：水面受风或地震等影响上下起伏', '潮汐：海水在天体引力下周期性涨落', '洋流：海水沿相对稳定路径大规模流动', '三者都能塑造海岸、影响人类活动'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">海水的三种运动</text><rect x="50" y="60" width="170" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="135" y="95" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">波浪</text><text x="135" y="135" font-size="13" fill="#1f3a4d" text-anchor="middle">水面起伏</text><text x="135" y="170" font-size="13" fill="#1f3a4d" text-anchor="middle">多由风引起</text><rect x="255" y="60" width="170" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="95" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">潮汐</text><text x="340" y="135" font-size="13" fill="#1f3a4d" text-anchor="middle">周期涨落</text><text x="340" y="170" font-size="13" fill="#1f3a4d" text-anchor="middle">天体引力</text><rect x="460" y="60" width="170" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="545" y="95" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">洋流</text><text x="545" y="135" font-size="13" fill="#1f3a4d" text-anchor="middle">大规模流动</text><text x="545" y="170" font-size="13" fill="#1f3a4d" text-anchor="middle">有固定方向</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">波浪、潮汐、洋流是海水运动的三种主要形式。</text></svg>', caption: '图1　海水运动分为波浪、潮汐和洋流三类。' },
      { type: 'keypoint', label: '重点·三种运动的特点', text: '<strong>波浪</strong>最常见，主要由风摩擦海面引起，叫风浪，此外海底地震、火山也能激起巨浪（海啸）；<strong>潮汐</strong>是海水在月球和太阳引力下周期性涨落，一天通常两涨两落；<strong>洋流</strong>是海水常年沿一定方向的大规模流动，按水温分暖流和寒流。三者中洋流影响范围最广、历时最久，是本章重点。' },
      { type: 'heading', text: '二、波浪' },
      { type: 'paragraph', text: '我们在海边看到的浪，大多是被风刮起来的，风越大、吹得越久，浪就越高，这种浪叫风浪。还有一种破坏力极强的浪叫海啸，它通常不是风引起的，而是海底地震、火山喷发或海底滑坡掀起的，波长很长、能量巨大，冲上岸时危害严重。波浪会拍击海岸、搬运沙石，是塑造海岸地貌的重要力量。' },
      { type: 'list', items: ['风浪：风力作用于海面形成，最常见', '海啸：海底地震或火山引发，破坏力强', '波浪能量可用于发电', '巨浪会影响船只航行和海上作业'] },
      { type: 'table', headers: ['波浪类型', '主要成因', '特点'], rows: [['风浪', '风力摩擦海面', '常见，随风强弱变化'], ['海啸', '海底地震、火山、滑坡', '波长长、能量大、破坏强'], ['拍岸浪', '波浪靠近浅水海岸', '冲击海岸、塑造地貌']] },
      { type: 'warn', label: '易错·风浪与海啸成因不同', text: '① 风浪由风引起，海啸由海底地震、火山或滑坡引起，二者成因完全不同，不能混为一谈；② 海啸在深海时浪并不高，但传到浅海会急剧升高，所以近岸才最危险；③ 波浪塑造海岸说的是长期拍打作用，不是一次大浪就能完成的。答题时要分清「风因」和「地因」。' },
      { type: 'example', label: '例题·波浪辨析', text: '题目：下列由海底地震引发、破坏力极强的海水运动是？<br>A. 风浪　B. 海啸　C. 潮汐　D. 洋流<br>解析：风浪是风吹起的，潮汐是天体引力造成的涨落，洋流是大规模定向流动，三者都不是海底地震引起的。海啸正是由海底地震、火山喷发或滑坡激发的巨浪，波长很长、能量巨大、破坏力强。所以答案应选海啸。' },
      { type: 'heading', text: '三、潮汐' },
      { type: 'paragraph', text: '潮汐是海水在月球和太阳引力作用下，周期性地涨起来又落下去的现象。因为月球离地球近，它的引力影响比太阳更大，所以潮汐主要随月球走。当太阳、月球、地球三者排成一条直线（农历初一和十五前后），引潮力叠加，出现潮差最大的大潮；当三者成直角（农历初八、廿三前后），引潮力互相抵消一部分，出现小潮。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">大潮与小潮的成因</text><circle cx="120" cy="120" r="22" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="120" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">月球</text><circle cx="340" cy="170" r="30" fill="#2a6fa8"/><text x="340" y="215" font-size="12" fill="#1f3a4d" text-anchor="middle">地球</text><circle cx="560" cy="220" r="22" fill="#e3a33d" stroke="#b5651d" stroke-width="2"/><text x="560" y="260" font-size="12" fill="#1f3a4d" text-anchor="middle">太阳</text><line x1="142" y1="135" x2="310" y2="165" stroke="#3389c4" stroke-width="3"/><line x1="370" y1="185" x2="538" y2="210" stroke="#3389c4" stroke-width="3"/><text x="340" y="120" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">大潮（初一、十五）</text><text x="340" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">日、月、地成一直线时引潮力叠加，形成大潮；成直角时为小潮。</text></svg>', caption: '图2　日地月成一直线时引潮力叠加形成大潮。' },
      { type: 'list', items: ['农历初一、十五前后出现大潮', '农历初八、廿三前后出现小潮', '一天中通常海水两涨两落', '潮汐可用于发电、辅助航运和养殖'] },
      { type: 'tip', label: '提示·记住大小潮时间', text: '判断大潮小潮，看农历日期最省事：<strong>初一和十五前后必然是大潮</strong>，因为那天日月地排成直线；初八和廿三前后是小潮，因为日月地成直角。口诀「初一十五大潮，初八廿三小潮」背下来，相关选择题几乎直接秒答。' },
      { type: 'heading', text: '四、洋流' },
      { type: 'paragraph', text: '洋流是海洋里的大规模「河流」，海水常年沿相对固定的路线流动。按水温相对于流经海区，分暖流和寒流：暖流比周围海水暖、从低纬流向高纬；寒流比周围海水冷、从高纬流向低纬。洋流的分布很有规律，比如中低纬度大洋环流，北半球呈顺时针、南半球呈逆时针；北半球中高纬度则呈逆时针；南半球中纬度还有环绕全球的西风漂流。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">中低纬度大洋环流模式</text><circle cx="340" cy="175" r="120" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="100" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">北半球 顺时针</text><text x="340" y="255" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">南半球 逆时针</text><path d="M 340 55 A 120 120 0 0 1 460 175" fill="none" stroke="#d9534f" stroke-width="3"/><text x="430" y="80" font-size="12" fill="#1f3a4d">暖流</text><path d="M 460 175 A 120 120 0 0 1 340 295" fill="none" stroke="#3389c4" stroke-width="3"/><text x="430" y="280" font-size="12" fill="#1f3a4d">寒流</text><text x="340" y="325" font-size="12" fill="#1f3a4d" text-anchor="middle">中低纬环流：北顺南逆，东岸多暖流、西岸多寒流。</text></svg>', caption: '图3　中低纬度大洋环流北半球顺时针、南半球逆时针。' },
      { type: 'table', headers: ['环流类型', '分布', '流向形状'], rows: [['中低纬环流', '热带、副热带海区', '北顺南逆'], ['中高纬环流', '北半球高纬', '逆时针'], ['西风漂流', '南半球中纬度', '自西向东环绕全球']] },
      { type: 'list', items: ['暖流增温增湿，寒流降温减湿', '寒暖流交汇处易形成大渔场', '顺洋流航行省时，逆流费时', '寒流常带来海雾，影响视线', '洋流能加快污染物扩散也扩大污染范围'] },
      { type: 'paragraph', text: '洋流对气候和生命影响很大：暖流经过的沿岸更温暖湿润，寒流经过则更冷干；寒暖流交汇或上升流处，营养盐上翻，鱼虾聚集形成渔场。航海时顺着洋流走又快又省油，逆着则慢。理解洋流，能帮我们认识天气、渔场和航线。' }
    ],
    exercises: [
      { type: 'choice', question: '关于潮汐大潮出现时间的说法，正确的是？', options: ['农历初一、十五前后', '农历初八前后', '农历廿三前后', '每天中午'], answer: '农历初一、十五前后', explanation: '潮汐由月球和太阳的引潮力共同引起，月球作用更强。当农历初一和十五前后，太阳、月球、地球三者大致排成一条直线，引潮力叠加，潮差最大，形成大潮。初八和廿三前后三者成直角，引潮力部分抵消，形成小潮。所以大潮出现在初一、十五前后，应选此项。' },
      { type: 'choice', question: '按水温划分，从低纬度流向高纬度、比流经海区更暖的洋流是？', options: ['寒流', '暖流', '风浪', '上升流'], answer: '暖流', explanation: '洋流按水温相对周围海区分为暖流和寒流。暖流是指从低纬度流向高纬度、水温比所经海区高的洋流，它常带来增温增湿的效果；寒流则从高纬流向低纬、水温较低。风浪和上升流不属于按水温划分的洋流类别。因此从低纬流向高纬且更暖的是暖流。' },
      { type: 'choice', question: '中低纬度大洋环流的分布规律是？', options: ['北逆南顺', '北顺南逆', '全球都顺时针', '全球都逆时针'], answer: '北顺南逆', explanation: '受盛行风和地转偏向力影响，中低纬度（热带、副热带）的大洋环流，北半球呈顺时针方向流动，南半球呈逆时针方向流动，简称「北顺南逆」。两侧岸段上，大洋东岸多为寒流、西岸多为暖流。所以正确表述是北顺南逆，其余三项都与实际相反或笼统错误。' },
      { type: 'fill', question: '海水的三种主要运动形式是波浪、___和___。', answer: '潮汐；洋流', explanation: '海水运动形式主要有三种：波浪是水面在风或海底地震等作用下上下起伏；潮汐是海水在月球和太阳引力下周期性涨落；洋流是海水常年沿固定路径的大规模流动。三者都会影响航运、渔业和海岸地貌，其中洋流对气候和渔场影响尤其深远，是学习海水运动的核心内容。' },
      { type: 'fill', question: '由海底地震、火山或滑坡引发、破坏力极强的巨浪叫做___；海水在天体引力下周期性涨落的现象叫做___。', answer: '海啸；潮汐', explanation: '波浪中由风引起的是风浪，而由海底地震、火山喷发或海底滑坡激发的巨浪叫海啸，它波长很长、能量巨大，近岸危害严重，成因与风浪完全不同。潮汐则是海水在月球和太阳（主要是月球）引潮力作用下，周期性涨落的现象，一天通常两涨两落，初一十五前后为大潮。两者分别属于波浪和潮汐两类运动。' }
    ]
  });
})();
