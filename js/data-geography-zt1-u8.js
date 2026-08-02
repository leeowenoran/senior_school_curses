/* 地理 · 高三总复习 · 专题一 自然地理 · 第3章 地球上的大气 · 第1节 大气的受热过程 */
(function () {
  var v = gzGetVolume('geography', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u8',
    name: '第1节 大气的受热过程',
    chapter: '高三地理复习 · 专题一 自然地理 · 第3章 地球上的大气',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、大气受热的基本环节' },
      { type: 'paragraph', text: '大气受热过程可概括为「太阳暖大地、大地暖大气、大气还大地」。太阳辐射穿过大气时被削弱（吸收、反射、散射），大部分到达地面使地面增温；地面向外辐射长波（地面辐射），被大气中的水汽、二氧化碳等强烈吸收，使大气增温；大气再通过大气逆辐射把热量还给地面，起到保温作用。' },
      { type: 'list', items: ['太阳辐射：短波辐射，易被大气削弱后到达地面', '地面辐射：长波辐射，是近地面大气主要直接热源', '大气吸收：水汽、二氧化碳吸收地面长波辐射', '大气逆辐射：大气向地面返还热量，具有保温效应'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">大气受热过程示意</text><rect x="40" y="300" width="600" height="40" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="325" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地面</text><line x1="340" y1="60" x2="340" y2="300" stroke="#e8a33d" stroke-width="3"/><text x="350" y="120" font-size="13" fill="#e8a33d" font-weight="bold">① 太阳辐射（短波）</text><line x1="340" y1="300" x2="340" y2="190" stroke="#c1583b" stroke-width="3"/><text x="350" y="260" font-size="13" fill="#c1583b" font-weight="bold">② 地面辐射（长波）</text><path d="M340 190 Q250 230 340 300" fill="none" stroke="#2a6fa8" stroke-width="2.5" stroke-dasharray="5 4"/><text x="160" y="250" font-size="13" fill="#2a6fa8" font-weight="bold">③ 大气逆辐射（保温）</text><text x="340" y="345" font-size="12" fill="#1f3a4d" text-anchor="middle">地面是近地面大气主要直接热源；大气逆辐射对地面起保温作用。</text></svg>', caption: '图1　大气受热过程：太阳暖大地、大地暖大气、大气逆辐射还大地。' },
      { type: 'keypoint', label: '重点·大气对太阳辐射的削弱', text: '<strong>削弱作用包括吸收、反射、散射三种。</strong>吸收：臭氧吸收紫外线、水汽二氧化碳吸收红外线，可见光吸收少；反射：云层和尘埃反射太阳光，云越多反射越强；散射：空气分子散射蓝光（天空呈蓝色）。削弱后到达地面的主要是可见光，所以地面得到的是「过滤后」的太阳辐射。' },
      { type: 'heading', text: '二、大气的保温作用' },
      { type: 'paragraph', text: '大气中的水汽和二氧化碳吸收地面长波辐射后升温，又以大气逆辐射形式将部分热量送回地面，使地面实际损失的热量减少，这就是大气的保温效应。阴天或多云夜晚，大气逆辐射强，地面降温慢，所以「多云的夜晚比晴夜暖」。这一原理也解释了温室大棚和全球变暖。' },
      { type: 'list', items: ['大气逆辐射强弱与云量、大气中水汽二氧化碳含量有关', '阴天夜晚保温强，降温慢，不易出现霜冻', '晴空夜晚大气逆辐射弱，地面降温快，易结霜', '温室气体增多会增强保温效应，导致全球变暖'] },
      { type: 'table', headers: ['现象', '原因', '实例'], rows: [['多云夜晚较暖', '大气逆辐射强', '秋夜多云不易霜冻'], ['晴天昼夜温差大', '白天削弱少、夜晚保温弱', '沙漠昼夜温差大'], ['大棚保温', '薄膜阻挡地面辐射外逸', '温室种植'], ['全球变暖', '温室气体增强保温', '气温升高']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">晴夜与多云夜的保温对比</text><rect x="60" y="90" width="260" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="190" y="115" font-size="14" fill="#1f3a4d" font-weight="bold">晴夜</text><line x1="190" y1="280" x2="190" y2="160" stroke="#c1583b" stroke-width="2.5"/><text x="100" y="240" font-size="12" fill="#1f3a4d">逆辐射弱</text><text x="190" y="300" font-size="12" fill="#c1583b" font-weight="bold">降温快·易霜冻</text><rect x="360" y="90" width="260" height="200" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="490" y="115" font-size="14" fill="#1f3a4d" font-weight="bold">多云夜</text><line x1="490" y1="280" x2="490" y2="160" stroke="#c1583b" stroke-width="2.5"/><path d="M490 160 Q420 210 490 280" fill="none" stroke="#2a6fa8" stroke-width="2.5"/><text x="400" y="240" font-size="12" fill="#2a6fa8">逆辐射强</text><text x="490" y="300" font-size="12" fill="#2a6fa8" font-weight="bold">降温慢·较暖</text><text x="340" y="315" font-size="12" fill="#1f3a4d" text-anchor="middle">云量越多，大气逆辐射越强，地面越不易降温。</text></svg>', caption: '图2　多云夜大气逆辐射强，保温好、降温慢；晴夜反之。' },
      { type: 'example', label: '例题·昼夜温差', text: '题目：下列地区中昼夜温差最大的是？<br>解析：昼夜温差受削弱和保温双重影响。晴天削弱少、白天升温快，又因夜间大气逆辐射弱、降温快，所以温差大；多云地区白天削弱强、夜间保温强，温差小；陆地比海洋温差大（海陆热力差异）。因此「晴天的陆地（如沙漠）」昼夜温差最大。这是大气受热过程的典型应用。' },
      { type: 'heading', text: '三、气温的垂直分布' },
      { type: 'paragraph', text: '对流层大气温度随高度升高而降低，平均每上升 1000 米降温约 6.5℃，这是因为地面是对流层大气的主要热源。平流层因臭氧吸收紫外线而随高度升高升温。逆温现象指气温随高度升高而升高的反常情况，会抑制空气对流，使污染物不易扩散，常出现在晴稳的夜晚或盆地。' },
      { type: 'warn', label: '易错·逆温与污染', text: '① 对流层正常状况是「上冷下热」，利于对流；逆温是「上热下冷」，抑制对流；② 逆温出现时，近地面污染物被「盖」住难以扩散，易形成雾霾；③ 逆温常出现在晴朗无风的夜晚（辐射逆温）和盆地、谷地。把「逆温抑制扩散」与污染联系是常考点。' },
      { type: 'tip', label: '提示·气温直减率', text: '对流层气温垂直递减率约 6.5℃/1000m（考试常取 6℃/1000m）。已知山脚气温和相对高度，可估算山顶气温：山顶气温 = 山脚气温 − 高度差 ÷ 1000 × 6.5。这一规律也用于解释山地垂直自然带和雪线高度。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">气温垂直分布与逆温</text><line x1="120" y1="60" x2="120" y2="280" stroke="#1f3a4d" stroke-width="2"/><text x="110" y="295" font-size="12" fill="#1f3a4d">高度↑</text><polyline points="120,90 560,230" fill="none" stroke="#2a6fa8" stroke-width="3"/><text x="430" y="160" font-size="13" fill="#2a6fa8" font-weight="bold">正常：随高度降低</text><polyline points="120,90 340,150 560,120" fill="none" stroke="#c1583b" stroke-width="3"/><text x="430" y="110" font-size="13" fill="#c1583b" font-weight="bold">逆温：随高度升高</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">逆温层「上热下冷」，抑制对流，污染物难以扩散。</text></svg>', caption: '图3　正常对流层气温随高度降低，逆温层则随高度升高，抑制空气对流。' },
      { type: 'heading', text: '四、受热过程的实际意义' },
      { type: 'paragraph', text: '大气受热过程解释了众多地理现象：青藏高原因空气稀薄、削弱和保温都弱，所以「日照强、气温低、昼夜温差大」；西北地区深居内陆、晴天多，昼夜温差大利于糖分积累；坡向不同接受的太阳辐射不同，阳坡温度高、阴坡低。这些原理是分析气候、农业、环境问题的基础。' },
      { type: 'list', items: ['高原：空气稀薄，削弱弱、保温弱，日照强温差大', '内陆干旱区：晴天多，昼夜温差大，瓜果甜', '阳坡：太阳辐射强，温度高，雪线较高', '阴坡：温度低，蒸发弱，土壤水分较好'] },
      { type: 'example', label: '例题·青藏高原', text: '题目：青藏高原为什么「日照丰富但气温不高、昼夜温差大」？<br>解析：青藏高原海拔高、空气稀薄，大气中水汽和尘埃少，对太阳辐射削弱弱，所以日照强、到达地面的太阳辐射多；但空气稀薄也使大气吸收的地面辐射少、大气逆辐射弱，保温差，所以气温不高且夜间降温快。削弱弱与保温弱叠加，导致白天升温快、夜间降温快，昼夜温差大。' }
    ],
    exercises: [
      { type: 'choice', question: '近地面大气的主要直接热源是？', options: ['太阳辐射', '地面辐射', '大气辐射', '宇宙辐射'], answer: '地面辐射', explanation: '太阳辐射是短波辐射，大气对可见光吸收很少，大部分透过大气到达地面使地面增温；地面增温后以长波辐射形式向外放热，被大气中的水汽、二氧化碳强烈吸收，从而使大气增温。因此地面辐射是近地面大气主要的直接热源，即「大地暖大气」。' },
      { type: 'choice', question: '多云的夜晚通常比晴朗夜晚温暖，主要是因为？', options: ['云层反射太阳辐射', '大气逆辐射增强', '地面辐射增强', '太阳辐射增强'], answer: '大气逆辐射增强', explanation: '夜间没有太阳辐射，地面依靠自身辐射散热。多云时云量大，大气中水汽和二氧化碳多，吸收地面长波辐射后向地面放射的大气逆辐射强，把更多热量还给地面，使地面降温慢、气温较高。所以多云夜较暖的关键是大气逆辐射增强。' },
      { type: 'choice', question: '关于逆温的叙述，正确的是？', options: ['气温随高度升高而降低', '利于污染物扩散', '上热下冷抑制对流', '只出现在平流层'], answer: '上热下冷抑制对流', explanation: '逆温是气温随高度升高而升高的反常层结，呈「上热下冷」，使空气垂直对流受到抑制，近地面污染物难以向上扩散，易积聚形成雾霾。逆温多出现在对流层的晴稳夜或盆地谷地，并非只见于平流层。' },
      { type: 'fill', question: '对流层气温随高度升高而降低，平均每上升 1000 米约降低___℃（常用值约 6℃）。', answer: '6.5', explanation: '对流层大气主要依靠吸收地面长波辐射增温，离地面越远（海拔越高）获得的热量越少，气温随高度递减，平均递减率约 6.5℃/1000m，考试中常简化为 6℃/1000m。据此可由山脚气温和高度差估算山顶气温。' },
      { type: 'fill', question: '大气对太阳辐射的削弱作用包括吸收、反射和___三种方式，其中___使天空呈现蓝色。', answer: '散射；散射', explanation: '大气削弱太阳辐射的三种方式是吸收、反射和散射。空气分子和微小尘埃对波长较短的蓝紫光散射能力强，使天空呈现蓝色，这叫瑞利散射。云层反射可见光使白天降温，臭氧吸收紫外线，水汽二氧化碳吸收红外线，共同构成削弱作用。' }
    ]
  });
})();
