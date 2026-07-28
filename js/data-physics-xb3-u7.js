/* ============================================================
 * 高二物理 · 选择性必修 第三册 · 第二章 气体、固体和液体
 * 课时7：固体
 * 数据注入：physics.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u7',
    name: '固体',
    chapter: '选择性必修 第三册 · 第二章 气体、固体和液体',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、固体分成两大类：晶体和非晶体' },
      { type: 'paragraph', text: '我们身边的固体并不都一样。食盐、云母、冰，这些是有规则的"晶体"；玻璃、石蜡、塑料，这些是没有规则的"非晶体"。区分它们的关键，一是有没有固定的熔化温度（熔点），二是内部结构是否规则。' },
      { type: 'keypoint', label: '重点·晶体 vs 非晶体', text: '<strong>晶体有确定的熔点，内部粒子排列规则；非晶体没有固定熔点，内部粒子排列不规则。</strong>食盐、云母、石英、冰、金属都是晶体；玻璃、石蜡、沥青、塑料都是非晶体。' },
      { type: 'paragraph', text: '怎么判断有没有固定熔点？把冰加热到 0℃ 就会开始熔化，而且在全部化成水之前，温度一直停在 0℃ 不动——这个 0℃ 就是冰的熔点。可是玻璃呢？加热时它慢慢变软、越来越黏，没有"突然开始熔化"的温度，整个过程中温度一直在升，这就是没有固定熔点。' },
      { type: 'example', label: '例题·判断晶体', text: '下列物质中，哪个是非晶体？A. 食盐  B. 冰  C. 玻璃  D. 云母<br><br><strong>解析</strong>：<br>食盐、冰、云母都是内部结构规则的晶体，有确定的熔点；<strong>玻璃</strong>内部粒子排列无规则，没有固定熔点，属于非晶体。所以答案选 C。' },
      { type: 'warn', label: '易错', text: '<strong>不能凭"看起来透不透、硬不硬"来判断晶体与否。</strong>玻璃很硬也很透，却是非晶体；许多金属不透明，却是典型的晶体。真正的判断标准只有两条：有没有固定熔点，以及内部结构是否规则（表现为下面的"各向异性/各向同性"）。' },
      { type: 'list', items: ['晶体：有固定熔点，内部排列规则（食盐、云母、冰、金属）', '非晶体：没有固定熔点，内部排列不规则（玻璃、石蜡、塑料）', '判断晶体最可靠的方法是看有无固定熔点', '外观好看、透明、坚硬，都不等于一定是晶体'] },
      { type: 'heading', text: '二、各向异性与各向同性' },
      { type: 'paragraph', text: '"各向异性"是说：晶体在不同方向上的性质不一样。比如云母片，你顺着某个方向很容易把它一层层撕开，换个方向却很难；又如正方体的岩盐，沿不同方向导电、传热、透光的能力不同。非晶体则"各向同性"——各个方向性质都差不多，玻璃不管从哪边敲，性质都差不多。' },
      { type: 'keypoint', label: '重点·各向异性', text: '<strong>各向异性指物质在不同方向上的物理性质（如导热、导电、透光、硬度）不同。</strong>晶体（特别是单晶体）通常表现出各向异性；非晶体各方向性质相同，叫各向同性。' },
      { type: 'paragraph', text: '为什么会有这种差别？因为晶体内部的粒子是"排成整齐队伍"的，沿着队伍方向和横着队伍方向，自然表现不同。非晶体内部乱糟糟的，平均看来各个方向就一样了。' },
      { type: 'tip', label: '提示', text: '<strong>"各向异性"是晶体内部结构规则的外部表现。</strong>以后看到"某物质沿不同方向导热能力不同"，基本就能判断它是（单）晶体；看到"各个方向都一样"，多半是非晶体或多晶体。' },
      { type: 'heading', text: '三、单晶体和多晶体' },
      { type: 'paragraph', text: '晶体还能再细分。一块完整的、内部处处规则排列的晶体，叫单晶体，比如一粒食盐晶粒、一块天然云母片。而金属看起来是"一块"，其实是由无数个极小的晶粒拼起来的，每个晶粒内部规则，但彼此方向乱，这种叫多晶体。' },
      { type: 'keypoint', label: '重点·单晶体 vs 多晶体', text: '<strong>单晶体：整个一块内部规则排列，有各向异性，有固定熔点。多晶体：由许多小晶粒杂乱拼成，整体各向同性，但仍有固定熔点。</strong>金属就是典型的多晶体——它每个晶粒是晶体，但整体看各个方向差不多。' },
      { type: 'list', items: ['单晶体：一块到底都规则，各向异性，有熔点（食盐粒、云母片）', '多晶体：许多小晶粒拼成，整体各向同性，但有熔点（铁、铜等金属）', '多晶体和单晶体都有固定熔点，这是它们区别于非晶体的根本', '非晶体既无熔点，也各向同性'] },
      { type: 'table', headers: ['类型', '有无固定熔点', '各向异性/各向同性', '例子'], rows: [['单晶体', '有', '各向异性', '食盐晶粒、云母、石英'], ['多晶体', '有', '各向同性（整体）', '铁、铜、铝等金属'], ['非晶体', '无', '各向同性', '玻璃、石蜡、塑料']] },
      { type: 'warn', label: '易错', text: '<strong>多晶体有熔点，却各向同性，容易被误认成非晶体。</strong>关键区别在"有没有固定熔点"：金属加热到一定温度会突然开始熔化并保持不变，这是晶体特征；玻璃是慢慢变软、温度一直升，没有熔点。别因为金属"各个方向差不多"就把它当成非晶体。' },
      { type: 'example', label: '例题·单晶与多晶', text: '金属铁是单晶体还是多晶体？它有没有固定熔点？<br><br><strong>解析</strong>：<br>铁是由大量细小晶粒杂乱聚集而成的，整体各向同性，所以它是<strong>多晶体</strong>。但因为每个晶粒内部仍是规则排列，铁在熔化时有确定的熔点（约 1538℃）。因此铁是多晶体，且有固定熔点。' },
      { type: 'tip', label: '提示', text: '<strong>记三种固体的"两句话"模板：</strong>单晶体——有熔点、各向异性；多晶体——有熔点、各向同性；非晶体——无熔点、各向同性。考试让你填表或判断，套这三句基本不会错。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">晶体内部粒子规则排列，非晶体乱七八糟</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">晶体（有规则）</text><circle cx="100" cy="130" r="9" fill="#4fb3a5"/><circle cx="140" cy="130" r="9" fill="#4fb3a5"/><circle cx="180" cy="130" r="9" fill="#4fb3a5"/><circle cx="220" cy="130" r="9" fill="#4fb3a5"/><circle cx="100" cy="170" r="9" fill="#4fb3a5"/><circle cx="140" cy="170" r="9" fill="#4fb3a5"/><circle cx="180" cy="170" r="9" fill="#4fb3a5"/><circle cx="220" cy="170" r="9" fill="#4fb3a5"/><circle cx="100" cy="210" r="9" fill="#4fb3a5"/><circle cx="140" cy="210" r="9" fill="#4fb3a5"/><circle cx="180" cy="210" r="9" fill="#4fb3a5"/><circle cx="220" cy="210" r="9" fill="#4fb3a5"/><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">非晶体（无规则）</text><circle cx="400" cy="120" r="9" fill="#4fb3a5"/><circle cx="450" cy="140" r="9" fill="#4fb3a5"/><circle cx="500" cy="110" r="9" fill="#4fb3a5"/><circle cx="540" cy="150" r="9" fill="#4fb3a5"/><circle cx="420" cy="180" r="9" fill="#4fb3a5"/><circle cx="480" cy="200" r="9" fill="#4fb3a5"/><circle cx="530" cy="190" r="9" fill="#4fb3a5"/><circle cx="560" cy="220" r="9" fill="#4fb3a5"/><circle cx="400" cy="220" r="9" fill="#4fb3a5"/></svg>', caption: '图1　晶体内部粒子排成整齐的格子（左），非晶体内部粒子杂乱无章（右）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">单晶体：一块规则排列，有各向异性</text><rect x="200" y="70" width="280" height="170" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="245" y1="70" x2="245" y2="240" stroke="#4fb3a5" stroke-width="2"/><line x1="290" y1="70" x2="290" y2="240" stroke="#4fb3a5" stroke-width="2"/><line x1="335" y1="70" x2="335" y2="240" stroke="#4fb3a5" stroke-width="2"/><line x1="380" y1="70" x2="380" y2="240" stroke="#4fb3a5" stroke-width="2"/><line x1="425" y1="70" x2="425" y2="240" stroke="#4fb3a5" stroke-width="2"/><line x1="200" y1="115" x2="480" y2="115" stroke="#4fb3a5" stroke-width="2"/><line x1="200" y1="160" x2="480" y2="160" stroke="#4fb3a5" stroke-width="2"/><line x1="200" y1="205" x2="480" y2="205" stroke="#4fb3a5" stroke-width="2"/><text x="340" y="262" font-size="13" fill="#234b45" text-anchor="middle">整块一个方向，不同方向性质不同（各向异性）</text></svg>', caption: '图2　单晶体整块内部方向一致，沿不同方向物理性质不同，即各向异性。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">多晶体：许多小晶粒杂乱拼成，整体各向同性</text><polygon points="220,90 270,80 295,120 260,150 215,135" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><polygon points="300,95 355,90 370,135 315,150 295,125" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><polygon points="380,100 440,95 450,140 395,155 375,130" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><polygon points="230,160 285,155 300,200 255,215 215,200" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><polygon points="320,165 375,160 390,205 335,220 310,195" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><polygon points="400,170 455,165 465,210 410,225 390,200" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="262" font-size="13" fill="#234b45" text-anchor="middle">每个小晶粒是晶体，但方向乱，整体看各方向差不多</text></svg>', caption: '图3　多晶体由许多方向不一的小晶粒拼成，整体表现为各向同性，但仍有固定熔点。' }
    ],
    exercises: [
      { type: 'choice', question: '下列物质中，属于非晶体的是？', options: ['食盐', '冰', '云母', '玻璃'], answer: '玻璃', explanation: '玻璃内部粒子排列不规则，没有固定的熔化温度，属于非晶体。食盐、冰、云母内部结构规则、有确定熔点，都是晶体。判断晶体与否的关键是有无确定熔点，而不是看是否透明或坚硬。' },
      { type: 'choice', question: '关于单晶体和多晶体，下列说法正确的是？', options: ['多晶体没有固定熔点', '单晶体各向同性', '多晶体整体各向同性，但有固定熔点', '单晶体没有固定熔点'], answer: '多晶体整体各向同性，但有固定熔点', explanation: '单晶体整块规则排列，有固定熔点且各向异性；多晶体由许多小晶粒杂乱拼成，整体看各向同性，但因为每个小晶粒仍是晶体，所以多晶体也有固定熔点。金属就是典型的多晶体。非晶体才没有固定熔点。' },
      { type: 'choice', question: '"各向异性"指的是？', options: ['各个方向性质都相同', '不同方向上物理性质不同', '没有固定熔点', '内部排列无规则'], answer: '不同方向上物理性质不同', explanation: '各向异性是指物质沿不同方向，其导热、导电、透光、硬度等物理性质不同，这是晶体（尤其单晶体）内部结构规则的外在表现。非晶体和各向同性的多晶体在各个方向上性质差不多，叫各向同性。' },
      { type: 'fill', question: '食盐晶粒是单晶体，沿不同方向导热能力不同，这种性质叫作___（填"各向异性"或"各向同性"）。', answer: '各向异性', explanation: '单晶体内部粒子规则排列，沿不同方向物理性质不同，这种性质叫各向异性。食盐、云母等单晶体都表现出各向异性，例如云母容易沿某一方向被撕成薄片。各向同性则指各个方向性质相同，是非晶体和多晶体整体的特征。' },
      { type: 'fill', question: '金属铁由许多细小晶粒杂乱聚集而成，整体各方向性质差不多，但加热到约 1538℃ 会突然熔化，所以铁是___（填"单晶体""多晶体"或"非晶体"）。', answer: '多晶体', explanation: '铁由大量方向杂乱的小晶粒拼成，整体各向同性，但每个晶粒内部仍规则排列，因此有固定熔点（约 1538℃），属于多晶体。单晶体整块一个方向、各向异性；非晶体无熔点。铁符合多晶体的全部特征。' }
    ]
  });
})();
