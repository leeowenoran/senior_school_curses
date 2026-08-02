/* 化学 · 高三复习 · 有机化学 · 专题三 · 课时：醇 */
(function () {
  var v = gzGetVolume('chemistry', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u9',
    name: '醇',
    chapter: '有机化学 · 专题三 烃的衍生物',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、醇与官能团羟基 —OH' },
      { type: 'paragraph', text: '醇是<strong>羟基（—OH）直接连在饱和碳原子上</strong>的一类有机物。最熟悉的醇就是乙醇（酒精）C₂H₅OH。羟基像一只小手，让醇比烃活泼得多：能和水交朋友（互溶），能和钠反应放氢气，还能被氧化、被消去。只要羟基连的是不带双键的碳（饱和碳），就属于醇；如果羟基直接连在苯环上，那就是另一类物质——酚。' },
      { type: 'list', items: ['甲醇 CH₃OH：最简单的醇，有毒，误饮会失明', '乙醇 C₂H₅OH：酒精，可饮用酒里的成分，常用燃料和溶剂', '丙三醇（甘油）：含三个羟基，黏稠有吸水性', '乙二醇：含两个羟基，用作防冻液'] },
      { type: 'heading', text: '二、乙醇的物理性质' },
      { type: 'paragraph', text: '乙醇是<strong>无色、有特殊香味</strong>的液体，容易挥发，能和水以任意比例互溶，也能溶解很多有机物。正因为好溶，医院里的碘酒就是把碘溶在酒精里。乙醇沸点比水低，所以易挥发，这也是酒精能当燃料、能消毒的原因之一。' },
      { type: 'keypoint', label: '重点·乙醇为什么和水任意互溶', text: '<strong>乙醇分子里的羟基（—OH）能和水分子形成氢键，所以乙醇与水以任意比例互溶。</strong>烃类无水这种"小手"，所以不溶于水；而乙醇有羟基，能拉住水分子。羟基数目越多，亲水性越强，比如丙三醇比乙醇更粘稠、更易溶于水。这是醇类重要的物理性质基础。' },
      { type: 'heading', text: '三、乙醇与钠反应' },
      { type: 'paragraph', text: '乙醇能和金属钠反应放出氢气，但比水与钠的反应温和得多：<br>2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑<br>产物是乙醇钠（C₂H₅ONa）和氢气。这说明羟基上的氢比较活泼，能被钠置换。因为反应不像水那样剧烈，所以可以把钠保存在酒精里观察缓慢冒泡，常用于检验羟基的存在。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙醇与钠反应放出氢气</text><rect x="50" y="64" width="580" height="74" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="96" font-size="15" fill="#4a3724" text-anchor="middle">2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑</text><text x="340" y="122" font-size="13" fill="#d98e3a" text-anchor="middle">羟基上的氢被钠置换，生成乙醇钠</text><rect x="50" y="162" width="580" height="104" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="194" font-size="13" fill="#4a3724" text-anchor="middle">反应比水与钠温和：钠在乙醇中缓慢冒气泡</text><text x="340" y="222" font-size="13" fill="#4a3724" text-anchor="middle">1 个羟基只放出半个 H₂，2 个乙醇才得 1 个 H₂</text><text x="340" y="250" font-size="13" fill="#4a3724" text-anchor="middle">可用于检验物质中是否含有活泼羟基</text></svg>', caption: '图1　乙醇与钠反应，羟基上的氢被置换生成氢气和乙醇钠。' },
      { type: 'heading', text: '四、乙醇的催化氧化' },
      { type: 'paragraph', text: '乙醇在<strong>铜或银催化并加热</strong>的条件下，能被氧气氧化成乙醛：<br>2C₂H₅OH + O₂ →（Cu，加热）2CH₃CHO + 2H₂O<br>实际过程是：先把铜丝在空气中烧黑（生成 CuO），再伸进乙醇里，黑色变回红色，同时闻到刺激性气味的乙醛。这个实验在厨房里类比就是酒变醋的第一步——醇被氧化成醛。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙醇催化氧化成乙醛</text><rect x="50" y="62" width="580" height="76" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="94" font-size="15" fill="#4a3724" text-anchor="middle">2C₂H₅OH + O₂ →（Cu，加热）2CH₃CHO + 2H₂O</text><text x="340" y="120" font-size="13" fill="#d98e3a" text-anchor="middle">脱去两个氢（一个来自羟基，一个来自邻位碳）</text><rect x="50" y="162" width="580" height="130" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="194" font-size="13" fill="#4a3724" text-anchor="middle">铜丝先在空气中烧黑：2Cu + O₂ → 2CuO</text><text x="340" y="222" font-size="13" fill="#4a3724" text-anchor="middle">再伸入乙醇，黑色 CuO 变红，把乙醇氧化为乙醛</text><text x="340" y="250" font-size="13" fill="#4a3724" text-anchor="middle">总过程铜作催化剂，反应前后质量不变</text><text x="340" y="278" font-size="13" fill="#4a3724" text-anchor="middle">产物乙醛 CH₃CHO 有刺激性气味</text></svg>', caption: '图2　铜催化下乙醇脱去两个氢，被氧气氧化为乙醛。' },
      { type: 'keypoint', label: '重点·醇的催化氧化规律', text: '<strong>伯醇（羟基连在只连 1 个碳的碳上）氧化成醛；仲醇（羟基连在连 2 个碳的碳上）氧化成酮；叔醇（羟基连在连 3 个碳的碳上）不能被催化氧化。</strong>原因在结构：氧化要脱去羟基上的氢和邻位碳上的氢。叔醇邻位碳上没有氢，断不出来，所以不氧化。乙醇是伯醇，氧化成乙醛 CH₃CHO；异丙醇是仲醇，氧化成丙酮；叔丁醇则不被氧化。' },
      { type: 'heading', text: '五、乙醇的消去反应' },
      { type: 'paragraph', text: '乙醇在<strong>浓硫酸、约 170℃</strong>的条件下，分子间脱去一分子水，生成乙烯：<br>C₂H₅OH →（浓硫酸，170℃）CH₂=CH₂↑ + H₂O<br>这就是实验室制乙烯的原理。反应要控温，温度很关键——温度低了会走另一条路。' },
      { type: 'warn', label: '易错·温度决定产物', text: '<strong>乙醇消去制乙烯必须控制在约 170℃，若温度在 140℃ 左右，两分子乙醇会脱水生成乙醚而不是乙烯。</strong>所以用温度计插在液面下实时控温。另外浓硫酸既是催化剂又是脱水剂，用量要多；加热到 170℃ 时液体容易暴沸，常加碎瓷片防暴沸。记住：170℃ 出乙烯，140℃ 出乙醚。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙醇消去成乙烯（170℃）</text><rect x="50" y="62" width="580" height="74" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="94" font-size="15" fill="#4a3724" text-anchor="middle">C₂H₅OH →（浓硫酸，170℃）CH₂=CH₂↑ + H₂O</text><text x="340" y="120" font-size="13" fill="#d98e3a" text-anchor="middle">脱去一分子水，形成碳碳双键</text><rect x="50" y="162" width="280" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="190" y="198" font-size="14" fill="#b5651d" text-anchor="middle" font-weight="bold">170℃</text><text x="190" y="228" font-size="13" fill="#4a3724" text-anchor="middle">消去生成乙烯</text><text x="190" y="256" font-size="13" fill="#4a3724" text-anchor="middle">CH₂=CH₂↑</text><rect x="350" y="162" width="280" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="490" y="198" font-size="14" fill="#b5651d" text-anchor="middle" font-weight="bold">140℃</text><text x="490" y="228" font-size="13" fill="#4a3724" text-anchor="middle">分子间脱水生成乙醚</text><text x="490" y="256" font-size="13" fill="#4a3724" text-anchor="middle">C₂H₅—O—C₂H₅</text></svg>', caption: '图3　乙醇在浓硫酸中脱水，温度决定产物是乙烯还是乙醚。' },
      { type: 'heading', text: '六、乙醇的酯化反应' },
      { type: 'paragraph', text: '乙醇能和羧酸在浓硫酸、加热条件下生成有香味的酯，同时生成水，这叫酯化反应。以乙酸为例：<br>CH₃COOH + C₂H₅OH →（浓硫酸，加热）CH₃COOC₂H₅ + H₂O<br>产物乙酸乙酯 CH₃COOC₂H₅ 是水果香味物质的代表，用浓硫酸作催化剂和吸水剂，推动反应向右走。酯化是酿酒、制香精的基础反应。' },
      { type: 'list', items: ['与钠反应：放出 H₂，羟基上的氢被置换', '催化氧化：伯醇→醛、仲醇→酮、叔醇不氧化', '消去反应：浓硫酸 170℃ 生成烯烃', '酯化反应：与羧酸生成酯和水，需浓硫酸加热'] },
      { type: 'example', label: '例题·推断氧化产物', text: '下列物质分别属于伯醇、仲醇、叔醇中的哪一类？写出它们催化氧化的产物类型：<br>① 乙醇 CH₃CH₂OH；② 异丙醇 CH₃CH(OH)CH₃；③ 叔丁醇 (CH₃)₃COH。<br><br><strong>解析</strong>：① 乙醇的羟基碳只连 1 个碳，是伯醇，氧化成乙醛 CH₃CHO。② 异丙醇的羟基碳连 2 个碳，是仲醇，氧化成丙酮 CH₃COCH₃（酮）。③ 叔丁醇的羟基碳连 3 个碳，是叔醇，邻位碳上没有可脱的氢，不能被催化氧化。判断口诀：看羟基碳连了几个碳——1 个是伯、2 个是仲、3 个是叔。' },
      { type: 'tip', label: '提示·两类脱水要分清', text: '乙醇的脱水反应有两种，别混淆：<strong>分子内脱水（消去）在 170℃ 得乙烯，分子间脱水在 140℃ 得乙醚。</strong>二者都要浓硫酸，差别全在温度。可记口诀"一七零出烯、一四零成醚"。另外醇的氧化看羟基碳连几个碳，这是高考常考的送分点。' },
      { type: 'table', headers: ['醇的类型', '羟基碳连接碳数', '催化氧化产物', '举例'], rows: [['伯醇', '连 1 个碳', '醛', '乙醇 CH₃CH₂OH → 乙醛 CH₃CHO'], ['仲醇', '连 2 个碳', '酮', '异丙醇 → 丙酮 CH₃COCH₃'], ['叔醇', '连 3 个碳', '不氧化', '叔丁醇 (CH₃)₃COH 不反应']] }
    ],
    exercises: [
      { type: 'choice', question: '乙醇 C₂H₅OH 的官能团是下列哪一种？', options: ['碳卤键 C—X', '羟基 —OH', '醛基 —CHO', '羧基 —COOH'], answer: '羟基 —OH', explanation: '乙醇是羟基连在饱和碳原子上的醇类，官能团是羟基 —OH。碳卤键是卤代烃的官能团，醛基是醛的官能团，羧基是羧酸的官能团，三者都不属于乙醇。所以选羟基 —OH。' },
      { type: 'choice', question: '乙醇在铜催化并加热条件下与氧气反应，主要产物是？', options: ['乙醛 CH₃CHO', '乙酸 CH₃COOH', '乙烯 CH₂=CH₂', '乙烷 C₂H₆'], answer: '乙醛 CH₃CHO', explanation: '乙醇是伯醇，在铜或银催化并加热时被氧气氧化，脱去羟基和邻位碳上的各一个氢，生成乙醛 CH₃CHO 和水。乙酸是乙醛进一步氧化的产物，乙烯是消去产物，乙烷需还原得到。所以催化氧化主产物是乙醛 CH₃CHO。' },
      { type: 'choice', question: '实验室用乙醇制乙烯，浓硫酸条件下的合适温度是？', options: ['100℃', '140℃（生成乙醚）', '170℃（生成乙烯）', '200℃（裂化）'], answer: '170℃（生成乙烯）', explanation: '乙醇在浓硫酸中脱水，温度决定产物：约 170℃ 发生分子内脱水（消去）生成乙烯 CH₂=CH₂；约 140℃ 发生分子间脱水生成乙醚。制乙烯必须控温在 170℃ 左右，并用温度计插入液面下实时监测。所以选 170℃ 生成乙烯。' },
      { type: 'fill', question: '乙醇与金属钠反应的化学方程式为 2C₂H₅OH + 2Na → ___ + H₂↑（写生成物的化学式）。', answer: '2C₂H₅ONa', explanation: '乙醇羟基上的氢比较活泼，能被金属钠置换生成乙醇钠和氢气。配平后两分子乙醇与两原子钠反应，得到两分子乙醇钠 2C₂H₅ONa 和一分子氢气 H₂。乙醇钠是白色固体，易溶于醇，遇水又水解回乙醇和氢氧化钠，说明醇羟基的酸性比水弱。' },
      { type: 'fill', question: '醇的催化氧化规律：伯醇氧化成醛，仲醇氧化成___，叔醇不能被催化氧化。', answer: '酮', explanation: '醇催化氧化的产物取决于羟基碳的连接情况：羟基碳只连 1 个碳的伯醇氧化成醛，连 2 个碳的仲醇氧化成酮，连 3 个碳的叔醇因邻位碳上无氢可供脱去，不能发生催化氧化。因此仲醇对应的氧化产物是酮，如异丙醇氧化生成丙酮 CH₃COCH₃。' }
    ]
  });
})();
