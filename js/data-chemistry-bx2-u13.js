/* ============================================================
 * 高一化学 · 必修 第二册 · 第七章 有机化合物
 * 课时13：乙烯与有机高分子材料
 * 数据注入：chemistry.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u13',
    name: '乙烯与有机高分子材料',
    chapter: '必修 第二册 · 第七章 有机化合物',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、乙烯——来自石油的"明星分子"' },
      { type: 'paragraph', text: '乙烯是化学工业里产量最大的有机物之一。它从石油里提炼出来，一方面能让青香蕉、青西红柿快速变熟（水果店常用它催熟），另一方面更是制造塑料的"原料王"。你手里的塑料袋、保鲜膜，追根溯源都是乙烯变的。' },
      { type: 'keypoint', label: '重点·乙烯的组成', text: '<strong>乙烯的分子式是 C₂H₄，分子里含有一个碳碳双键 C=C。</strong>它比乙烷 C₂H₆ 少了 2 个氢原子，正是因为两个碳原子之间多了一根键（双键），才"腾不出"位置连更多氢。' },
      { type: 'paragraph', text: '乙烯在常温常压下是一种无色、稍有气味的气体，难溶于水，但能很好地燃烧，燃烧时火焰明亮并冒黑烟（因为含碳量高、燃烧不够充分）。' },
      { type: 'list', items: ['乙烯是最简单的烯烃，工业上主要来自石油裂解', '乙烯能催熟水果，是植物体内的天然激素', '乙烯是制造聚乙烯塑料的基本原料'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙烯 C₂H₄：含碳碳双键 C=C，六个原子共平面</text><circle cx="270" cy="150" r="24" fill="#d98e3a"/><text x="270" y="156" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="bold">C</text><circle cx="410" cy="150" r="24" fill="#d98e3a"/><text x="410" y="156" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="bold">C</text><line x1="294" y1="150" x2="386" y2="150" stroke="#b5651d" stroke-width="4"/><circle cx="180" cy="100" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="106" font-size="13" fill="#4a3724" text-anchor="middle">H</text><circle cx="180" cy="200" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="206" font-size="13" fill="#4a3724" text-anchor="middle">H</text><circle cx="500" cy="100" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="106" font-size="13" fill="#4a3724" text-anchor="middle">H</text><circle cx="500" cy="200" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="206" font-size="13" fill="#4a3724" text-anchor="middle">H</text><line x1="270" y1="150" x2="198" y2="100" stroke="#b5651d" stroke-width="2"/><line x1="270" y1="150" x2="198" y2="200" stroke="#b5651d" stroke-width="2"/><line x1="410" y1="150" x2="482" y2="100" stroke="#b5651d" stroke-width="2"/><line x1="410" y1="150" x2="482" y2="200" stroke="#b5651d" stroke-width="2"/><text x="340" y="258" font-size="13" fill="#4a3724" text-anchor="middle">碳碳双键 C=C 把两个碳拉在同一平面，六个原子都在一个平面上</text></svg>', caption: '图1　乙烯 C₂H₄ 中两个碳原子以双键 C=C 相连，分子呈平面结构。' },
      { type: 'heading', text: '二、碳碳双键——乙烯活泼的根源' },
      { type: 'paragraph', text: '乙烷里两个碳之间是单键 C—C，很牢固；乙烯里却是双键 C=C。双键其实由一根"结实的键"和一根"较脆弱的键"组成，那根较脆弱的键特别容易断开，让别的原子"插进来"。正是这个爱打开的双键，让乙烯比烷烃活泼得多。' },
      { type: 'warn', label: '易错·双键不是两根单键', text: '碳碳双键要写成 <strong>C=C</strong>，绝不能写成 C—C—C 或当作两根单键。乙烷是 C—C 单键（C₂H₆），乙烯是 C=C 双键（C₂H₄），两者不是同一种物质，化学性质差别很大，别混为一谈。' },
      { type: 'table', headers: ['对比项', '乙烷 C₂H₆', '乙烯 C₂H₄'], rows: [['碳碳键', '单键 C—C', '双键 C=C'], ['氢原子数', '6 个', '4 个'], ['分子形状', '立体', '平面'], ['与溴水', '不反应', '使溴水褪色'], ['活泼性', '较稳定', '较活泼']] },
      { type: 'heading', text: '三、加成反应' },
      { type: 'paragraph', text: '乙烯最典型的一类反应是加成反应：双键中那根脆弱的键断开，两个碳原子各"抓住"一个外来原子或原子团，直接加到分子两端。比如把乙烯通入橙红色的溴水，溴分子 Br₂ 加到双键两端，生成无色的 1,2-二溴乙烷，溴水因此褪色——这是检验乙烯（或双键）的常用方法。' },
      { type: 'keypoint', label: '重点·加成反应', text: '<strong>加成反应：有机物分子中不饱和键（如 C=C）断裂，两端直接加上其他原子或原子团，生成饱和或较饱和的产物。</strong>例如 CH₂=CH₂ + Br₂ → CH₂Br—CH₂Br，双键变单键，溴水褪色。' },
      { type: 'example', label: '例题·加成产物', text: '乙烯与溴水发生加成反应，生成物的结构简式是？<br><br><strong>解析</strong>：乙烯 CH₂=CH₂ 的双键打开，一个溴原子加在左边碳、另一个溴原子加在右边碳上，得到 <strong>CH₂Br—CH₂Br</strong>（1,2-二溴乙烷），溶液由橙红变无色。这是碳碳双键的特征反应。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">加成反应：乙烯双键打开，溴原子加在两端</text><rect x="40" y="90" width="290" height="110" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="185" y="135" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">CH₂=CH₂ + Br₂</text><text x="185" y="170" font-size="12" fill="#d98e3a" text-anchor="middle">双键中一根键断裂</text><text x="370" y="150" font-size="26" fill="#b5651d" text-anchor="middle" font-weight="bold">→</text><rect x="410" y="90" width="230" height="110" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="525" y="135" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">CH₂Br—CH₂Br</text><text x="525" y="170" font-size="12" fill="#d98e3a" text-anchor="middle">溴水褪色，双键变单键</text><text x="340" y="250" font-size="13" fill="#4a3724" text-anchor="middle">Br 原子分别接在两个碳上，原本的 C=C 变成 C—C</text></svg>', caption: '图2　乙烯与溴的加成：双键打开，两个溴原子分别加到两个碳原子上，生成 1,2-二溴乙烷。' },
      { type: 'heading', text: '四、加聚反应与聚乙烯' },
      { type: 'paragraph', text: '如果让成千上万个乙烯分子排队，每个乙烯都打开自己的双键，把"断口"和邻居接起来，就能连成一条极长极长的碳链，这种反应叫加成聚合反应，简称加聚反应。得到的长链就是聚乙烯，我们熟悉的食品袋、保鲜膜就是它做的。' },
      { type: 'tip', label: '提示', text: '聚乙烯是由重复的 <strong>—CH₂—CH₂—</strong> 单元连成的，化学上写成 (—CH₂—CH₂—)ₙ，n 表示重复次数（聚合度）。聚乙烯本身无毒、柔韧、防水，所以能安全地接触食品；但它很难自然降解，用完要记得回收。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">加聚反应：许多乙烯分子连成聚乙烯长链</text><rect x="40" y="80" width="120" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="100" y="116" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">CH₂=CH₂</text><rect x="200" y="80" width="120" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="260" y="116" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">CH₂=CH₂</text><rect x="360" y="80" width="120" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="420" y="116" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">CH₂=CH₂</text><text x="520" y="116" font-size="20" fill="#d98e3a" text-anchor="middle">…</text><text x="340" y="180" font-size="22" fill="#b5651d" text-anchor="middle" font-weight="bold">→</text><rect x="60" y="210" width="560" height="46" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="239" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">—CH₂—CH₂—CH₂—CH₂—CH₂—CH₂— …（聚乙烯，重复单元 —CH₂—CH₂—）</text></svg>', caption: '图3　加聚反应：无数乙烯分子打开双键首尾相连，形成聚乙烯长链，是塑料的"骨架"。' },
      { type: 'list', items: ['加聚反应的本质：含双键的小分子打开键，连成高分子长链', '聚乙烯、聚丙烯都是常见的加聚产物', '高分子材料包括塑料、合成纤维、合成橡胶，统称三大合成材料'] },
      { type: 'example', label: '例题·高分子来源', text: '我们常用的食品塑料袋，主要成分来自下列哪一种反应？<br>A. 乙烯的加聚反应<br>B. 乙醇的燃烧<br>C. 乙酸的酯化<br>D. 甲烷的取代<br><br><strong>解析</strong>：食品塑料袋的主要成分是<strong>聚乙烯</strong>，它由许多乙烯 CH₂=CH₂ 分子打开双键、首尾相连聚合而成，属于加聚反应。乙醇燃烧、乙酸酯化、甲烷取代都不产生这种塑料长链。因此选 A。' },
      { type: 'warn', label: '易错·高分子是混合物', text: '聚乙烯不是"一种"纯净物，而是一<strong>类</strong>分子的混合物：因为不同分子的重复次数 n 不一样长，所以没有固定的分子量，只有平均分子量。做题时写聚乙烯结构要带上 n，写成 (—CH₂—CH₂—)ₙ，不能当成单一确定分子。' }
    ],
    exercises: [
      { type: 'choice', question: '乙烯的分子式是下列哪一个？', options: ['C₂H₆', 'C₂H₄', 'C₆H₆', 'CH₄'], answer: 'C₂H₄', explanation: '乙烯是最简单的烯烃，分子中含有碳碳双键 C=C，分子式为 C₂H₄，比乙烷 C₂H₆ 少 2 个氢。C₆H₆ 是苯，CH₄ 是甲烷，都不含碳碳双键，不是乙烯。' },
      { type: 'choice', question: '能用来检验乙烯（或碳碳双键）的试剂是？', options: ['蒸馏水', '溴水', '食盐水', '氢氧化钠溶液'], answer: '溴水', explanation: '乙烯含有碳碳双键，能与溴发生加成反应，使橙红色的溴水褪色，这是检验双键最常用的方法。蒸馏水、食盐水、氢氧化钠溶液都不能和乙烯发生这种特征反应，无法用来检验。' },
      { type: 'choice', question: '聚乙烯塑料是由乙烯经过下列哪种反应制得的？', options: ['加成聚合（加聚）反应', '酯化反应', '取代反应', '中和反应'], answer: '加成聚合（加聚）反应', explanation: '乙烯 CH₂=CH₂ 打开碳碳双键，许多分子首尾相连形成长链 (—CH₂—CH₂—)ₙ，这就是聚乙烯，该过程属于加成聚合反应（加聚反应）。酯化、取代、中和都不产生这种高分子塑料长链。' },
      { type: 'fill', question: '有机物分子中不饱和键（如碳碳双键）断裂，两端直接加上其他原子或原子团的反应叫___反应。', answer: '加成', explanation: '加成反应是指有机物分子中不饱和键（典型如 C=C 双键）中的一根键断裂，两个碳原子各加上一个原子或原子团，生成较饱和产物的反应。例如乙烯与溴加成生成 CH₂Br—CH₂Br，溴水因此褪色。' },
      { type: 'fill', question: '乙烯 CH₂=CH₂ 发生加聚反应后，得到的高分子结构可表示为 (—CH₂—CH₂—)ₙ，其中 n 表示___。', answer: '重复单元的个数（聚合度）', explanation: '聚乙烯是由无数个 —CH₂—CH₂— 单元重复连接而成的长链，n 代表重复单元的个数，化学上称为聚合度。因为不同分子的 n 不一样，聚乙烯是混合物，没有固定的单一分子量，只有平均分子量。' }
    ]
  });
})();
