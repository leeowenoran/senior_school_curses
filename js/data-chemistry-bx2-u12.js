/* ============================================================
 * 高一化学 · 必修 第二册 · 第七章 有机化合物
 * 课时12：认识有机化合物与烷烃
 * 数据注入：chemistry.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u12',
    name: '认识有机化合物与烷烃',
    chapter: '必修 第二册 · 第七章 有机化合物',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是有机化合物' },
      { type: 'paragraph', text: '你每天都会碰到很多"有机"的东西：喝的酒精、家里的食醋、嘴里的白砂糖、身上穿的化纤衣服、手里用的塑料瓶。它们有一个共同点——分子里都含有碳元素。化学上把含碳的化合物（除少数例外）叫作有机化合物，简称有机物。这一章我们就要认识这群和我们生活密不可分的物质。' },
      { type: 'keypoint', label: '重点·有机物概念', text: '<strong>有机化合物一般是指含碳元素的化合物。</strong>多数有机物还含有氢，有的还含有氧、氮、氯等。我们身边的糖、脂肪、蛋白质、塑料、汽油，本质上都是有机物。' },
      { type: 'paragraph', text: '不过要注意，含碳的物质并不全是有机物。像二氧化碳 CO₂、一氧化碳 CO、碳酸钙 CaCO₃、碳酸氢钠 NaHCO₃ 这些，虽然含碳，但它们的性质和无机物更像，化学上把它们算作无机物。所以"含碳"只是有机物的必要条件，不是充分条件。' },
      { type: 'list', items: ['有机物大多可以燃烧，燃烧后通常生成二氧化碳和水', '有机物一般熔点低、难溶于水、易溶于酒精等有机溶剂', '有机物分子里碳原子可以连成链或环，种类特别多'] },
      { type: 'heading', text: '二、烃——只含碳和氢的有机物' },
      { type: 'paragraph', text: '在所有有机物里，有一类最"纯粹"：它们只由碳和氢两种元素组成。这类物质叫烃（读音"听"，取碳和氢各一部分）。你可以把烃想象成有机世界的"积木底座"——很多复杂的有机物都是在烃的基础上"接上"别的元素或基团变来的。最简单的烃就是甲烷 CH₄。' },
      { type: 'table', headers: ['名称', '化学式', '类别', '日常所见'], rows: [['甲烷', 'CH₄', '烷烃', '天然气、沼气的主要成分'], ['乙烷', 'C₂H₆', '烷烃', '天然气中的少量成分'], ['乙烯', 'C₂H₄', '烯烃', '催熟水果的植物激素'], ['苯', 'C₆H₆', '芳香烃', '有机溶剂、化工原料']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">有机化合物的"家族"：化合物分有机与无机</text><rect x="290" y="50" width="100" height="40" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="75" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">化合物</text><line x1="340" y1="90" x2="200" y2="120" stroke="#b5651d" stroke-width="2"/><line x1="340" y1="90" x2="480" y2="120" stroke="#b5651d" stroke-width="2"/><rect x="150" y="120" width="100" height="40" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="200" y="145" font-size="14" fill="#4a3724" text-anchor="middle">有机物</text><rect x="430" y="120" width="100" height="40" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="480" y="145" font-size="14" fill="#4a3724" text-anchor="middle">无机物</text><line x1="200" y1="160" x2="150" y2="186" stroke="#b5651d" stroke-width="2"/><line x1="200" y1="160" x2="260" y2="186" stroke="#b5651d" stroke-width="2"/><rect x="100" y="186" width="100" height="40" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="150" y="211" font-size="13" fill="#4a3724" text-anchor="middle">烃(只含C、H)</text><rect x="210" y="186" width="120" height="40" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="270" y="211" font-size="13" fill="#4a3724" text-anchor="middle">烃的衍生物</text><text x="480" y="186" font-size="12" fill="#d98e3a" text-anchor="middle">盐、金属氧化物等</text><text x="150" y="252" font-size="12" fill="#d98e3a" text-anchor="middle">甲烷、乙烷、苯</text><text x="270" y="252" font-size="12" fill="#d98e3a" text-anchor="middle">乙醇、乙酸</text></svg>', caption: '图1　化合物分为有机物和无机物；有机物中最基础的一类是只含碳和氢的烃。' },
      { type: 'warn', label: '易错·含碳不一定是有机物', text: '二氧化碳 CO₂、一氧化碳 CO、碳酸 H₂CO₃、碳酸钙 CaCO₃、碳酸氢钠 NaHCO₃ 虽然含碳，但性质更接近无机物，<strong>一律算作无机物</strong>。判断有机物要看它是否以碳氢骨架为主体，不能只看"有没有碳"。' },
      { type: 'heading', text: '三、烷烃——最"老实"的碳氢家族' },
      { type: 'paragraph', text: '烷烃是烃里最普通的一类：碳原子之间只用单键相连，剩下的价键全部被氢占满，整条碳链像一串被氢原子包满的珠子，非常"饱和"。甲烷、乙烷、丙烷、丁烷都属于烷烃，汽油、液化气里就有大量烷烃。' },
      { type: 'keypoint', label: '重点·烷烃通式', text: '<strong>烷烃的通式是 CₙH₂ₙ₊₂（n 为正整数）。</strong>当 n=1 时是甲烷 CH₄，n=2 时是乙烷 C₂H₆，n=3 时是丙烷 C₃H₈。碳原子数每增加 1 个，氢原子就增加 2 个。' },
      { type: 'example', label: '例题·写分子式', text: '已知某烷烃分子中含有 2 个碳原子，则它的分子式是？<br><br><strong>解析</strong>：烷烃通式为 CₙH₂ₙ₊₂。把 n=2 代入，得到碳为 2 个、氢为 2×2+2=6 个，所以分子式是 <strong>C₂H₆</strong>，这就是乙烷。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">甲烷 CH₄：碳原子居中，4个氢原子构成正四面体</text><circle cx="340" cy="150" r="26" fill="#d98e3a"/><text x="340" y="156" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="bold">C</text><circle cx="230" cy="90" r="20" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="230" y="96" font-size="14" fill="#4a3724" text-anchor="middle">H</text><circle cx="450" cy="90" r="20" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="450" y="96" font-size="14" fill="#4a3724" text-anchor="middle">H</text><circle cx="250" cy="210" r="20" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="250" y="216" font-size="14" fill="#4a3724" text-anchor="middle">H</text><circle cx="430" cy="210" r="20" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="430" y="216" font-size="14" fill="#4a3724" text-anchor="middle">H</text><line x1="340" y1="150" x2="230" y2="90" stroke="#b5651d" stroke-width="2"/><line x1="340" y1="150" x2="450" y2="90" stroke="#b5651d" stroke-width="2"/><line x1="340" y1="150" x2="250" y2="210" stroke="#b5651d" stroke-width="2"/><line x1="340" y1="150" x2="430" y2="210" stroke="#b5651d" stroke-width="2"/><text x="340" y="258" font-size="13" fill="#4a3724" text-anchor="middle">键角均为 109.5°，甲烷是典型的正四面体结构，4个C—H键完全等价</text></svg>', caption: '图2　甲烷 CH₄ 的中心是碳原子，四个氢原子均匀分布在正四面体的四个顶点上。' },
      { type: 'heading', text: '四、同分异构现象' },
      { type: 'paragraph', text: '同样是 4 个碳、10 个氢（分子式都是 C₄H₁₀），碳原子的连接方式却可以不一样：可以排成一长条（正丁烷），也可以让中间那个碳"长出"一个分叉（异丁烷）。分子式相同、原子连接方式不同，导致结构不同，这种现象叫同分异构，这些化合物互称同分异构体。' },
      { type: 'tip', label: '提示', text: '同分异构体的<strong>分子式完全相同，只是原子的连接顺序不同</strong>。它们像"孪生兄弟"：体重（分子量）一样，长相（结构）不同，因此性质也会有差别。写结构简式时要看清碳链有没有分叉。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">同分异构：正丁烷与异丁烷分子式都是 C₄H₁₀</text><rect x="40" y="70" width="280" height="150" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">正丁烷</text><text x="180" y="140" font-size="14" fill="#4a3724" text-anchor="middle">CH₃—CH₂—CH₂—CH₃</text><text x="180" y="175" font-size="12" fill="#d98e3a" text-anchor="middle">碳链直直一排，没有分叉</text><rect x="360" y="70" width="280" height="150" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">异丁烷</text><text x="500" y="140" font-size="14" fill="#4a3724" text-anchor="middle">CH₃—CH(CH₃)—CH₃</text><text x="500" y="175" font-size="12" fill="#d98e3a" text-anchor="middle">中间碳上"长出"一个甲基分叉</text><text x="340" y="265" font-size="13" fill="#4a3724" text-anchor="middle">两者分子式相同、结构不同，互为同分异构体</text></svg>', caption: '图3　正丁烷碳链不分叉，异丁烷碳链有分叉，二者分子式都是 C₄H₁₀，互为同分异构体。' },
      { type: 'list', items: ['同分异构体分子式相同，但碳原子连接方式（碳骨架）不同', '碳链越长越容易"分叉"，同分异构体的数目随碳原子增多而迅速变多', '判断两物质是否同分异构：先比分子式，再看结构是否不同'] },
      { type: 'example', label: '例题·识别同分异构', text: '下列关于同分异构体的说法，正确的是？<br>A. 分子式不同但结构相同<br>B. 分子式相同但结构不同<br>C. 结构和分子式都不同<br>D. 结构和分子式都相同<br><br><strong>解析</strong>：同分异构体的定义就是<strong>分子式相同、结构不同</strong>。正丁烷和异丁烷都是 C₄H₁₀，但碳链一个直排、一个分叉，结构不同，所以互为同分异构体。因此选 B。' },
      { type: 'warn', label: '易错·同分异构不是"同种物质"', text: '很多同学以为分子式相同就是同一种东西，这是错的。<strong>同分异构体是不同物质</strong>，因为结构不同，熔点、沸点、气味等往往都不一样。书写时务必看清碳链形状，不要把正丁烷和异丁烷当成同一个。' }
    ],
    exercises: [
      { type: 'choice', question: '下列物质中，属于有机化合物的是？', options: ['二氧化碳 CO₂', '碳酸钠 Na₂CO₃', '甲烷 CH₄', '氯化钠 NaCl'], answer: '甲烷 CH₄', explanation: '有机化合物一般是含碳的化合物，甲烷 CH₄ 是以碳氢为骨架的有机物，是天然气的主要成分。二氧化碳 CO₂、碳酸钠 Na₂CO₃、氯化钠 NaCl 虽然有的含碳，但 CO₂ 与碳酸盐性质更接近无机物，NaCl 不含碳，它们都归为无机物。' },
      { type: 'choice', question: '只由碳和氢两种元素组成的有机物叫作？', options: ['烃', '醇', '酸', '酯'], answer: '烃', explanation: '只含碳、氢两种元素的有机物叫烃（读音"听"）。醇、酸、酯除了碳氢之外还含有氧等元素，属于烃的衍生物，不是单纯的烃。所以只含碳氢的有机物只能是烃。' },
      { type: 'choice', question: '烷烃的通式是下列哪一个？', options: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙHₙ'], answer: 'CₙH₂ₙ₊₂', explanation: '烷烃中碳原子之间全是单键，氢把剩余价键占满，通式为 CₙH₂ₙ₊₂（n 为正整数）。n=1 得 CH₄，n=2 得 C₂H₆。CₙH₂ₙ 是烯烃通式，CₙH₂ₙ₋₂ 是炔烃通式，都不适用于烷烃。' },
      { type: 'fill', question: '天然气、沼气的主要成分是最简单的有机物，它的化学式是___。', answer: 'CH₄', explanation: '最简单的有机物是甲烷，由 1 个碳原子和 4 个氢原子组成，化学式为 CH₄。甲烷分子中碳原子位于正四面体中心，4 个氢原子在四个顶点，是最基础的烷烃，也是天然气和沼气的主要成分。' },
      { type: 'fill', question: '分子式相同但原子连接方式（结构）不同的现象叫___，例如正丁烷和异丁烷都是 C₄H₁₀ 却互为这一类关系。', answer: '同分异构', explanation: '同分异构是指化合物分子式相同、但原子连接顺序或空间排列不同，因而结构不同的现象。正丁烷 CH₃—CH₂—CH₂—CH₃ 与异丁烷 CH₃—CH(CH₃)—CH₃ 分子式都是 C₄H₁₀，碳链一个直排一个分叉，互为同分异构体。' }
    ]
  });
})();
