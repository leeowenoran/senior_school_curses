/* 地理 · 选择性必修1 · 第5章 · 课时：自然环境的地域差异性 */
(function () {
  var v = gzGetVolume('geography', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u13',
    name: '第2节 自然环境的地域差异性',
    chapter: '选择性必修1 · 第5章 自然环境的整体性与差异性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、地域分异的基本规律' },
      { type: 'paragraph', text: '在整体性的基础上，自然环境在不同地区表现出不同的特征，这就是地域差异性。最典型的是地带性分异，包括纬度地带性（由赤道到两极）、干湿度地带性（从沿海到内陆）和垂直地带性（从山麓到山顶）。此外还有非地带性现象。' },
      { type: 'list', items: ['纬度地带性：赤道→两极，热量主导', '干湿度地带性：沿海→内陆，水分主导', '垂直地带性：山麓→山顶，水热随高度变化', '非地带性：受地形、洋流等局地影响'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">三种地带性分异方向</text><rect x="60" y="90" width="170" height="170" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="145" y="125" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">纬度</text><text x="145" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">赤道→两极</text><text x="145" y="190" font-size="12" fill="#1f3a4d" text-anchor="middle">热量变化</text><rect x="260" y="90" width="170" height="170" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="345" y="125" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">干湿度</text><text x="345" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">沿海→内陆</text><text x="345" y="190" font-size="12" fill="#1f3a4d" text-anchor="middle">水分变化</text><rect x="460" y="90" width="170" height="170" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="545" y="125" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">垂直</text><text x="545" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">山麓→山顶</text><text x="545" y="190" font-size="12" fill="#1f3a4d" text-anchor="middle">水热变化</text></svg>', caption: '图1　三种地带性分异沿不同方向展开：纬度、干湿度、垂直，主导因素不一。' },
      { type: 'keypoint', label: '重点·纬度地带性', text: '<strong>纬度地带性（由赤道到两极的地域分异）：</strong>主导因素是热量，因太阳辐射从赤道向两极递减而产生。自然带大致与纬线平行、沿纬度方向延伸，如从热带雨林带→亚热带常绿阔叶林带→温带落叶阔叶林带→亚寒带针叶林带→苔原带。' },
      { type: 'heading', text: '二、干湿度地带性与垂直地带性' },
      { type: 'paragraph', text: '干湿度地带性（从沿海向内陆）的主导因素是水分，因距海远近不同、降水差异而产生，自然带呈南北延伸、东西更替，如中纬度从森林→草原→荒漠。垂直地带性则随海拔升高，水热条件变化，自然带沿等高线方向更替，类似纬度地带性的「压缩版」。' },
      { type: 'list', items: ['干湿度分异：中纬度最明显，森林→草原→荒漠', '垂直分异：类似纬度分异，但受山体高度影响', '垂直带谱基带与该山所在纬度自然带一致', '山越高、纬度越低，垂直带谱越复杂'] },
      { type: 'table', headers: ['分异规律', '主导因素', '更替方向'], rows: [['纬度地带性', '热量（太阳辐射）', '赤道→两极'], ['干湿度地带性', '水分（距海远近）', '沿海→内陆'], ['垂直地带性', '水热随高度', '山麓→山顶']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">垂直地带性：从山麓到山顶</text><polygon points="120,280 340,80 560,280" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="200" y="250" font-size="12" fill="#1f3a4d" text-anchor="middle">基带（森林）</text><text x="340" y="200" font-size="12" fill="#1f3a4d" text-anchor="middle">灌丛</text><text x="340" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">草甸</text><text x="340" y="100" font-size="12" fill="#1f3a4d" text-anchor="middle">冰雪</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">海拔升高，水热变化，自然带依次更替。</text></svg>', caption: '图2　山体随海拔升高，水热条件变化，自然带从基带向山顶依次更替。' },
      { type: 'example', label: '例题·判分异规律', text: '题目：从我国东部沿海向西北内陆，自然带由森林变为草原、荒漠，属于？<br>A. 纬度地带性　B. 干湿度地带性　C. 垂直地带性　D. 非地带性<br>解析：这种变化沿「沿海→内陆」方向更替，主导因素是水分（距海越远、降水越少），属于从沿海向内陆的地域分异，即干湿度地带性。纬度地带性是沿赤道向两极变化，垂直地带性随海拔变化。因此选 B。' },
      { type: 'heading', text: '三、非地带性分异' },
      { type: 'paragraph', text: '受地形、洋流、海陆分布、地下水等局部因素影响，自然带会出现偏离地带性规律的现象，称为非地带性。例如赤道附近的东非高原因海拔高而形成热带草原，南美西岸的荒漠直抵赤道附近（受秘鲁寒流影响），都是非地带性表现。' },
      { type: 'warn', label: '易错·垂直带谱的基带', text: '山体垂直自然带的基带（最下带）与该山所在纬度的水平自然带一致：赤道附近山体基带是热带雨林，温带山体基带是温带落叶林或针叶林。做题时先定基带，再向上推演带谱，避免把带谱顺序写反。' },
      { type: 'tip', label: '提示·三规律对比记忆', text: '纬度分异看「南北」（热量），干湿度分异看「东西」（水分），垂直分异看「上下」（水热）。中纬度地区干湿度分异最典型，低纬和高山垂直分异最明显。先判断更替方向，再反推主导因素，是解题捷径。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">非地带性：东非高原与寒流荒漠</text><rect x="60" y="100" width="270" height="180" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="195" y="135" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">东非高原</text><text x="195" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">赤道附近本应雨林</text><text x="195" y="205" font-size="12" fill="#1f3a4d" text-anchor="middle">因海拔高→草原</text><rect x="360" y="100" width="270" height="180" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="495" y="135" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">南美西岸</text><text x="495" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">寒流影响</text><text x="495" y="205" font-size="12" fill="#1f3a4d" text-anchor="middle">荒漠直抵赤道附近</text></svg>', caption: '图3　受地形、洋流等影响，自然带偏离地带性规律，形成非地带性现象。' },
      { type: 'heading', text: '四、小结：差异中有整体' },
      { type: 'paragraph', text: '地域差异性是自然环境在整体基础上的空间表现。三种地带性分异各有主导因素，非地带性则是局部因素的修正。认识分异规律，有助于理解植被土壤分布、指导农业和生态建设。' },
      { type: 'list', items: ['纬度分异：热量主导，南北更替', '干湿度分异：水分主导，东西更替', '垂直分异：水热随高度，上下更替', '非地带性：地形、洋流等打破规律'] },
      { type: 'keypoint', label: '重点·本课时核心结论', text: '<strong>地域差异性三规律：</strong>纬度地带性（热量、赤道→两极）、干湿度地带性（水分、沿海→内陆）、垂直地带性（水热、山麓→山顶）。非地带性由地形、洋流等造成。判断顺序：看更替方向→定主导因素→定分异类型。' }
    ],
    exercises: [
      { type: 'choice', question: '由赤道到两极的地域分异，主导因素是？', options: ['水分', '热量', '地形', '洋流'], answer: '热量', explanation: '由赤道到两极的地域分异即纬度地带性，其根本原因是太阳辐射随纬度增加而减少，热量条件从赤道向两极递减，导致自然带大致沿纬度方向更替。水分差异主导的是干湿度地带性，地形和洋流主要造成非地带性。因此主导因素是热量。' },
      { type: 'choice', question: '从我国东部沿海向西北内陆，自然带从森林变为草原、荒漠，属于？', options: ['纬度地带性', '干湿度地带性', '垂直地带性', '非地带性'], answer: '干湿度地带性', explanation: '这种自然带沿「沿海到内陆」方向更替的现象，是因为距海远近不同导致降水（水分）差异：越往内陆越干旱，景观由森林过渡到草原、荒漠。它属于从沿海向内陆的地域分异，即干湿度地带性，主导因素是水分。' },
      { type: 'choice', question: '关于山地垂直自然带，说法正确的是？', options: ['基带与山顶一致', '基带与该山所在纬度水平带一致', '山越高带谱越简单', '垂直分异与纬度无关'], answer: '基带与该山所在纬度水平带一致', explanation: '山体垂直带谱的基带（最下方的自然带）与该山所在纬度的水平自然带相同，如赤道附近山体基带为热带雨林带。山体越高、纬度越低，垂直带谱越复杂，而非越简单。因此正确说法是基带与所在纬度水平带一致。' },
      { type: 'fill', question: '赤道附近的东非高原，因海拔高、气温低，本应出现热带雨林却出现___，这属___地带性现象。', answer: '热带草原；非', explanation: '东非高原虽位于赤道附近，但因地势高、气温较低、降水减少，发育了热带草原而非热带雨林，偏离了地带性规律，属于非地带性现象。类似的还有受寒流影响使荒漠逼近赤道的南美西海岸。非地带性由地形、洋流、海陆分布等局部因素造成。' },
      { type: 'fill', question: '垂直地带性中，山体越___、所处纬度越___，垂直自然带谱越复杂。', answer: '高；低', explanation: '山地垂直自然带的复杂程度取决于山体相对高度和所在纬度：山体越高，水热垂直变化幅度越大，可容纳的带谱越多；纬度越低，基带水热条件越好、带谱起点越高，同样高度内能容纳更多自然带。因此山越高、纬度越低，垂直带谱越复杂。' }
    ]
  });
})();
