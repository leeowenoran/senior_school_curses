/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题五 原子核
 * 课时4：核裂变与核聚变、核能利用与粒子物理简介
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u18-l1',
    name: '核裂变与核聚变、核能利用与粒子物理简介',
    chapter: '热学与近代物理 · 专题五 原子核',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、重核分裂——核裂变' },
      { type: 'paragraph', text: '用中子去轰击较重的铀核，铀核会分裂成两个中等质量的核，同时放出2到3个新中子和大量能量，这个过程叫核裂变。最常见的是铀-235 吸收一个中子后裂变成钡和氪，并放出3个中子：U-235 + n → Ba-141 + Kr-92 + 3n。' },
      { type: 'keypoint', label: '重点·核裂变', text: '<strong>重核分裂成两个中等质量核并释放能量的过程叫核裂变。</strong>典型反应：U-235 吸收中子裂变为 Ba 和 Kr，同时放出多个中子。裂变释放的能量来自质量亏损（ΔE = Δm×c²）。' },
      { type: 'example', label: '例题·配平裂变方程', text: '已知铀-235 吸收一个中子后裂变为钡-141 和氪-92，并放出若干中子，请补全方程：U-235 + n → Ba-141 + Kr-92 + ___n。<br><strong>解析</strong>：<br>质量数守恒：235 + 1 = 141 + 92 + x，得 x = 3；电荷数守恒：92 + 0 = 56 + 36 + 0，成立。所以放出 3 个中子，方程为 U-235 + n → Ba-141 + Kr-92 + 3n。' },
      { type: 'heading', text: '二、链式反应' },
      { type: 'paragraph', text: '一次裂变放出的两三个中子，又可以去轰击别的铀核，引起更多裂变，像多米诺骨牌一样越传越多，这就叫链式反应。要让它持续下去，必须保证每次平均至少有一个中子能引发下一次裂变，这要求铀块达到一定的体积，叫临界体积。' },
      { type: 'keypoint', label: '重点·链式反应', text: '<strong>链式反应</strong>是指裂变放出的中子引发后续裂变、使反应持续进行的过程。维持链式反应需要铀块达到<strong>临界体积</strong>，且中子平均增殖系数不小于1。' },
      { type: 'heading', text: '三、轻核聚合——核聚变' },
      { type: 'paragraph', text: '两个很轻的核（如氘和氚）在极高温度下克服斥力撞到一起，聚合成一个较重的核并放出能量，这叫核聚变。例如：H-2 + H-3 → He-4 + n。太阳发光发热就是靠内部的聚变。聚变单位质量放出的能量比裂变还要多，但难点是需要上亿度的高温。' },
      { type: 'keypoint', label: '重点·核聚变', text: '<strong>轻核结合成较重核并释放能量的过程叫核聚变。</strong>典型反应：H-2 + H-3 → He-4 + n。聚变需要极高温度（几百万到上亿度）才能发生，也称热核反应。' },
      { type: 'list', items: [
        '裂变：重核（如铀-235）分裂，较易控制，用于核电站和原子弹',
        '聚变：轻核（如氘、氚）聚合，能量更大，但需要极高温度',
        '两者都释放能量，本质都是质量亏损转化为能量（ΔE = Δm×c²）',
        '太阳等恒星的能量来自内部的核聚变'
      ] },
      { type: 'heading', text: '四、核能的利用' },
      { type: 'paragraph', text: '核电站利用可控的裂变链式反应烧"核燃料"发电：核反应堆里铀核裂变放热，把水加热成蒸汽，蒸汽推动汽轮机带动发电机。原子弹则是让裂变在极短时间内不受控地剧烈释放能量。氢弹用原子弹引爆，提供高温触发聚变，威力更大。' },
      { type: 'list', items: [
        '核反应堆：可控裂变，用控制棒吸收多余中子调节反应速率',
        '一回路：反应堆加热高压水，把热量带出',
        '二回路：蒸汽发生器产生蒸汽推动汽轮机发电，不直接接触放射性水',
        '氢弹：原子弹引爆提供高温，引发不可控聚变'
      ] },
      { type: 'heading', text: '五、粒子物理家族简介' },
      { type: 'paragraph', text: '探索原子核内部，科学家又发现了许多更小的粒子。物质的基本"砖块"包括夸克（组成质子、中子）和轻子（如电子、中微子）；传递相互作用的叫规范玻色子（如光子传递电磁力、胶子传递核力）。人们把已发现的粒子按是否参与强相互作用分为强子和轻子，并试图用"标准模型"统一描述。' },
      { type: 'keypoint', label: '重点·粒子物理', text: '组成物质的基本粒子大致分三类：<strong>夸克</strong>（组成质子、中子）、<strong>轻子</strong>（如电子、中微子）、<strong>规范玻色子</strong>（传递相互作用，如光子）。现代物理学用"标准模型"描述这些粒子及其相互作用。' },
      { type: 'table', headers: ['对比项', '核裂变', '核聚变'], rows: [
        ['参与核', '重核（铀-235等）', '轻核（氘、氚等）'],
        ['过程', '分裂成中等核', '聚合成较重核'],
        ['条件', '中子轰击、临界体积', '极高温度（热核）'],
        ['可控性', '较易控制（核电站）', '目前难控制（仍在研究）'],
        ['单位质量放能', '较少', '更多']
      ] },
      { type: 'warn', label: '易错', text: '<strong>聚变比裂变单位质量放能更多，但条件更苛刻。</strong>不要以为"裂变放热、聚变放热更多所以聚变更容易利用"——恰恰相反，聚变需要上亿度高温，目前还难以稳定控制；核电站用的是可控裂变。另外，<strong>原子弹基于裂变、氢弹基于聚变</strong>，二者原理不同。' },
      { type: 'tip', label: '提示', text: '<strong>判断放能方向：看比结合能。</strong>无论是裂变还是聚变，反应后生成中等质量数的核，比结合能都比反应前大，因此都释放能量。一句话："往铁靠，就放能"。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">核裂变：中子轰击重核一分为二</text><circle cx="150" cy="160" r="14" fill="#4fb3a5"/><text x="150" y="200" font-size="12" fill="#234b45" text-anchor="middle">中子</text><rect x="200" y="120" width="100" height="80" rx="12" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="250" y="165" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">U-235</text><polygon points="214,160 234,152 234,168" fill="#4fb3a5"/><line x1="174" y1="160" x2="200" y2="160" stroke="#4fb3a5" stroke-width="3"/><line x1="320" y1="160" x2="360" y2="160" stroke="#2e9e8f" stroke-width="3"/><rect x="370" y="110" width="90" height="60" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="415" y="145" font-size="12" fill="#234b45" text-anchor="middle">Ba-141</text><rect x="370" y="180" width="90" height="60" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="415" y="215" font-size="12" fill="#234b45" text-anchor="middle">Kr-92</text><circle cx="500" cy="140" r="9" fill="#4fb3a5"/><circle cx="525" cy="160" r="9" fill="#4fb3a5"/><circle cx="510" cy="185" r="9" fill="#4fb3a5"/><text x="512" y="220" font-size="12" fill="#234b45" text-anchor="middle">3n</text></svg>', caption: '图1　中子轰击铀-235，裂变为钡-141 和氪-92，并放出3个中子引发链式反应。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">核聚变：轻核在高温下聚合</text><circle cx="200" cy="160" r="18" fill="#4fb3a5"/><text x="200" y="200" font-size="12" fill="#234b45" text-anchor="middle">H-2</text><circle cx="280" cy="160" r="18" fill="#234b45"/><text x="280" y="200" font-size="12" fill="#234b45" text-anchor="middle">H-3</text><polygon points="300,160 320,152 320,168" fill="#4fb3a5"/><line x1="298" y1="160" x2="318" y2="160" stroke="#4fb3a5" stroke-width="3"/><text x="240" y="245" font-size="12" fill="#234b45" text-anchor="middle">高温下克服斥力相撞</text><rect x="400" y="120" width="100" height="80" rx="12" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="450" y="165" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">He-4</text><circle cx="530" cy="160" r="12" fill="#4fb3a5"/><text x="530" y="200" font-size="12" fill="#234b45" text-anchor="middle">放中子n</text></svg>', caption: '图2　氘核与氚核在高温下聚合成氦-4 并放出一个中子，是太阳能量来源。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">核电站原理：一回路加热、二回路发电</text><rect x="60" y="100" width="140" height="120" rx="12" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="130" y="140" font-size="12" fill="#234b45" text-anchor="middle" font-weight="bold">反应堆</text><text x="130" y="170" font-size="11" fill="#234b45" text-anchor="middle">可控裂变</text><rect x="260" y="100" width="140" height="120" rx="12" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="330" y="140" font-size="12" fill="#234b45" text-anchor="middle" font-weight="bold">蒸汽发生器</text><rect x="460" y="100" width="160" height="120" rx="12" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="540" y="135" font-size="12" fill="#234b45" text-anchor="middle" font-weight="bold">汽轮机+发电机</text><text x="540" y="165" font-size="11" fill="#234b45" text-anchor="middle">发电</text><line x1="200" y1="160" x2="260" y2="160" stroke="#4fb3a5" stroke-width="3"/><line x1="400" y1="160" x2="460" y2="160" stroke="#4fb3a5" stroke-width="3"/><text x="200" y="250" font-size="12" fill="#234b45" text-anchor="middle">一回路（带放射性）</text><text x="460" y="250" font-size="12" fill="#234b45" text-anchor="middle">二回路（洁净蒸汽）</text></svg>', caption: '图3　核电站：反应堆可控裂变加热一回路，经蒸汽发生器推动二回路汽轮机发电。' }
    ],
    exercises: [
      { type: 'choice', question: '关于核裂变与核聚变，下列说法正确的是？', options: ['聚变比裂变单位质量放能更少', '裂变需要极高温度，聚变较易控制', '裂变是重核分裂，聚变是轻核聚合，都释放能量', '核电站目前主要利用不可控聚变'], answer: '裂变是重核分裂，聚变是轻核聚合，都释放能量', explanation: '裂变是重核（如铀-235）分裂成中等核，聚变是轻核（如氘、氚）聚合成较重核，二者都比结合能增大、都释放能量。聚变单位质量放能更多，但需要上亿度高温、目前难以稳定控制；核电站用的是可控裂变。故只有"裂变是重核分裂，聚变是轻核聚合，都释放能量"正确。' },
      { type: 'choice', question: '维持裂变链式反应持续进行，需要满足的条件是？', options: ['铀块体积小于临界体积', '中子平均增殖系数小于1', '铀块达到临界体积且中子增殖系数不小于1', '不需要任何条件'], answer: '铀块达到临界体积且中子增殖系数不小于1', explanation: '链式反应要持续，必须保证每次裂变放出的中子平均至少有一个能引发下一次裂变，这要求铀块达到临界体积（否则太多中子逃逸），且中子增殖系数不小于1。体积太小或增殖系数小于1都会使反应熄灭。' },
      { type: 'choice', question: '太阳能够长期发光发热，其能量主要来自？', options: ['核裂变', '核聚变', '化学反应燃烧', '引力势能'], answer: '核聚变', explanation: '太阳内部在高温高压下持续发生轻核（主要是氢核）聚变成氦核的核聚变反应，释放巨大能量，这正是恒星发光发热的来源。太阳质量不足以发生持续的裂变链式反应，其能量不是化学燃烧。' },
      { type: 'fill', question: '典型聚变反应可写为 H-2 + H-3 → He-4 + ___（填放出的粒子）；该反应需要___（填"极高温度"或"常温"）才能发生。', answer: 'n（或中子） | 极高温度', explanation: '氘（H-2）与氚（H-3）聚变生成氦-4 并放出一个中子：H-2 + H-3 → He-4 + n。聚变需要克服轻核间的库仑斥力，必须达到几百万到上亿度的高温，所以也叫热核反应。' },
      { type: 'fill', question: '核电站中，核反应堆里发生的是可控的___（填"裂变"或"聚变"）；反应释放的热量通过___（填"一回路"或"二回路"）带出并加热产生蒸汽推动汽轮机发电。', answer: '裂变 | 一回路', explanation: '目前核电站利用可控核裂变（铀-235 链式反应）在反应堆中放热。热量由一回路的高压水带出，在蒸汽发生器中把二回路的水加热成蒸汽，蒸汽再推动汽轮机发电；二回路不与放射性的一回路直接接触，保证安全。' }
    ]
  });
})();
