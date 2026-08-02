/* ============================================================
 * 化学 · 选择性必修2 物质结构与性质 · 第二章 分子结构与性质
 * 课时9：分子结构与物质的性质
 * 数据注入：chemistry.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u9',
    name: '分子结构与物质的性质',
    chapter: '选择性必修2 物质结构与性质 · 第二章 分子结构与性质',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、分子极性：正电中心与负电中心是否重合' },
      { type: 'paragraph', text: '由共价键构成的分子，如果整个分子中正电荷的“重心”和负电荷的“重心”重合在同一点上，就是非极性分子；如果不重合、出现一端略正、一端略负，就是极性分子。关键看“结构是否对称”：结构对称（如直线形的 CO₂、正四面体的 CH₄）正负中心重合，是非极性；结构不对称（如 V 形的 H₂O、三角锥的 NH₃）正负中心错开，是极性分子。' },
      { type: 'keypoint', label: '重点·判断分子极性', text: '<strong>看正、负电荷中心是否重合：重合→非极性分子；不重合→极性分子。结构对称（CO₂、CH₄、CCl₄）多为非极性，结构不对称（H₂O、NH₃）多为极性。</strong>' },
      { type: 'list', items: ['非极性分子：CO₂（直线）、CH₄（四面体）、CCl₄、BF₃（平面三角）', '极性分子：H₂O（V 形）、NH₃（三角锥）、HCl', '注意：含极性键 ≠ 分子有极性（CO₂ 就是反例）'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">分子极性：看正、负电荷中心是否重合</text><circle cx="200" cy="160" r="22" fill="#b5651d"/><circle cx="120" cy="160" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="280" cy="160" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="200" y="200" font-size="12" fill="#4a3724" text-anchor="middle">CO₂：对称→非极性</text><text x="200" y="220" font-size="11" fill="#d98e3a" text-anchor="middle">两端正好抵消</text><circle cx="520" cy="160" r="24" fill="#b5651d"/><circle cx="450" cy="200" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="590" cy="200" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="520" y="245" font-size="12" fill="#4a3724" text-anchor="middle">H₂O：不对称→极性</text><text x="520" y="262" font-size="11" fill="#d98e3a" text-anchor="middle">负端偏向 O，正负错开</text></svg>', caption: '图1　CO₂ 对称、正负中心重合故非极性；H₂O 不对称、正负中心错开故极性。' },
      { type: 'heading', text: '二、分子间作用力：范德华力' },
      { type: 'paragraph', text: '分子与分子之间也存在着吸引力，统称分子间作用力，其中最普遍的一种叫范德华力。它比化学键弱得多，但决定了物质的熔沸点、溶解度等。一般分子越大、电子越多，范德华力越强，熔沸点越高。例如卤素单质 F₂、Cl₂、Br₂、I₂，从上到下分子变大，范德华力增强，状态从气体逐渐变成固体。' },
      { type: 'keypoint', label: '重点·范德华力', text: '<strong>范德华力是分子间普遍存在的微弱吸引力，比化学键弱得多；相对分子质量越大、分子越大，范德华力一般越强，熔沸点越高。</strong>' },
      { type: 'list', items: ['范德华力影响物质的熔沸点、溶解度', '组成结构相似时，相对分子质量越大、范德华力越强', '例：F₂、Cl₂、Br₂、I₂ 熔沸点依次升高'] },
      { type: 'heading', text: '三、氢键：一种“特殊又强大”的分子间力' },
      { type: 'paragraph', text: '当 H 原子直接连在电负性很大、半径很小的 N、O、F 上时，这个 H 像一根“小钩子”，会被另一个分子中带孤对电子的 N、O、F 吸引，形成一股比范德华力强得多的相互作用，叫氢键。氢键不是化学键，而是一种较强的分子间作用力。它会造成反常现象：H₂O、NH₃、HF 的沸点比同族同类物高出一大截；冰的密度比水小（4℃ 时水最密）；氨、乙醇易溶于水等。' },
      { type: 'keypoint', label: '重点·氢键的条件与影响', text: '<strong>氢键发生在 H 连在 N/O/F 上、并被另一分子的 N/O/F 吸引时。它使 H₂O、NH₃、HF 沸点反常偏高；使冰密度小于水；显著影响溶解性和物质性质。</strong>' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">氢键：H₂O 分子间 O–H···O 的“小钩子”</text><circle cx="160" cy="150" r="24" fill="#b5651d"/><circle cx="110" cy="110" r="16" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="110" cy="190" r="16" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="340" cy="150" r="24" fill="#b5651d"/><circle cx="290" cy="110" r="16" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="290" cy="190" r="16" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="520" cy="150" r="24" fill="#b5651d"/><circle cx="470" cy="110" r="16" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="470" cy="190" r="16" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><line x1="110" y1="190" x2="290" y2="110" stroke="#d98e3a" stroke-width="2" stroke-dasharray="5 4"/><line x1="290" y1="190" x2="470" y2="110" stroke="#d98e3a" stroke-width="2" stroke-dasharray="5 4"/><text x="200" y="240" font-size="12" fill="#4a3724" text-anchor="middle">虚线 = 氢键（比范德华力强）</text><text x="200" y="262" font-size="12" fill="#d98e3a" text-anchor="middle">使水沸点反常高、冰浮于水面</text></svg>', caption: '图2　水分子间通过 O–H···O 氢键相连（虚线），氢键使水有许多反常性质。' },
      { type: 'heading', text: '四、溶解性：相似相溶' },
      { type: 'paragraph', text: '物质在溶剂里溶不溶，有个通俗规律——“相似相溶”：结构、极性相近的物质容易互溶。非极性溶质（如碘 I₂、油脂）易溶于非极性溶剂（如汽油、四氯化碳）；极性溶质（如食盐、糖、氯化氢）易溶于极性溶剂（如水）。例如溴水里的 Br₂ 是非极性、更易溶于汽油，于是可用汽油把溴从水里“萃取”出来。' },
      { type: 'keypoint', label: '重点·相似相溶', text: '<strong>极性分子易溶于极性溶剂，非极性分子易溶于非极性溶剂；结构、极性越相近，越容易互溶。</strong>' },
      { type: 'table', headers: ['结构特征', '对应的性质表现', '实例'], rows: [['分子对称', '非极性分子（CO₂、CH₄）', '难溶于极性水'], ['分子不对称', '极性分子（H₂O、NH₃）', '易溶于极性水'], ['含 N/O/F–H', '存在氢键、沸点反常高', 'H₂O、NH₃、HF'], ['极性相近', '相似相溶', 'I₂ 易溶于 CCl₄']] },
      { type: 'warn', label: '易错·氢键不是化学键', text: '很多同学把氢键当成一种化学键，这是错的。氢键的强度和键能远小于共价键、离子键，它本质上是“较强的分子间作用力”，只发生在含 N/O/F–H 的体系。它的存在能解释许多反常（水的高沸点、冰浮在水面），但书写时用虚线“···”表示，化学键才用实线。' },
      { type: 'example', label: '例题·氢键解释现象', text: '题目：下列事实能用“氢键”解释的是？<br>A. CO₂ 比 CO 沸点高<br>B. 水的沸点比 H₂S 高得多<br>C. I₂ 易溶于 CCl₄<br>D. 金刚石硬度很大<br><br><strong>解析</strong>：水 H₂O 分子间存在 O–H···O 氢键，使沸点比同族 H₂S（无氢键）高得多，B 正确。CO₂ 沸点高于 CO 是分子量大、范德华力大所致；I₂ 溶于 CCl₄ 是相似相溶；金刚石硬是共价键网，三者都与氢键无关。' },
      { type: 'tip', label: '提示·手性分子', text: '有些分子像人的左手和右手，互为镜像却不能完全重合（就像左手戴不进右手手套），这样的分子叫手性分子，它们成对出现、互称对映异构体。生命体内许多重要分子（如氨基酸、糖、药物分子）都是手性的，且往往只有一种“手性”有活性、另一种无效甚至有害。认识手性，是理解生命化学的一把钥匙。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">手性：像左右手，镜像对称却不能完全重合</text><path d="M180 90 q 30 40 0 100 q -30 -20 0 -100" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="220" font-size="13" fill="#4a3724" text-anchor="middle">左手</text><line x1="340" y1="70" x2="340" y2="230" stroke="#b5651d" stroke-width="1.5" stroke-dasharray="4 4"/><path d="M500 90 q -30 40 0 100 q 30 -20 0 -100" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="220" font-size="13" fill="#4a3724" text-anchor="middle">右手（镜像）</text><text x="340" y="260" font-size="12" fill="#d98e3a" text-anchor="middle">左右手互为镜像但不能叠合 → 手性分子</text></svg>', caption: '图3　手性分子如左右手：互为镜像却无法完全重叠，成对出现为对映异构体。' },
      { type: 'heading', text: '五、把“结构—性质”串起来' },
      { type: 'paragraph', text: '从原子结构到分子结构，再到分子间作用力，一条主线始终是“结构决定性质”：分子是否对称决定极性；分子间是范德华力还是氢键，决定熔沸点和溶解性；是否有手性，决定生物活性。学这一章，永远记得用“结构”去解释“性质”。' }
    ],
    exercises: [
      { type: 'choice', question: '下列分子中，属于非极性分子的是？', options: ['H₂O', 'NH₃', 'CO₂', 'HCl'], answer: 'CO₂', explanation: 'CO₂ 是直线形、结构对称，正负电荷中心重合，属于非极性分子；H₂O（V 形）、NH₃（三角锥）结构不对称、有极性；HCl 是极性键构成的双原子极性分子。所以选 CO₂。' },
      { type: 'choice', question: '关于氢键，下列说法正确的是？', options: ['氢键是化学键', '氢键使 H₂O 沸点反常偏高', '氢键只存在于水分子内部', '所有分子之间都有氢键'], answer: '氢键使 H₂O 沸点反常偏高', explanation: '氢键是比范德华力强、但远弱于化学键的“分子间作用力”，不是化学键，A 错；它发生在含 N/O/F–H 的体系、是分子之间的作用，C 错；并非所有分子都有，D 错。正是氢键使水的沸点比同族 H₂S 高得多，B 正确。' },
      { type: 'choice', question: '“相似相溶”规律指的是？', options: ['极性分子溶于非极性溶剂', '非极性分子溶于极性溶剂', '结构、极性相近的物质易互溶', '所有物质都互溶'], answer: '结构、极性相近的物质易互溶', explanation: '相似相溶指极性分子易溶于极性溶剂、非极性分子易溶于非极性溶剂，结构极性越相近越易互溶。所以选“结构、极性相近的物质易互溶”；其余三项把关系说反或说错。' },
      { type: 'fill', question: '冰中水分子之间存在氢键，使冰的密度比液态水___（填“大”或“小”），所以冰能浮在水面上。', answer: '小', explanation: '氢键使冰中水分子形成疏松的网状结构，空隙比液态水大，因此冰的密度比 4℃ 的水小，能浮在水面上。这也是氢键影响物质性质的重要反常现象之一。' },
      { type: 'fill', question: '互为镜像但不能完全重合的一对手性分子，互称为___（填“对映异构体”或“同分异构体”）。', answer: '对映异构体', explanation: '手性分子像左右手，互为镜像却不能完全重合，这一对分子互称对映异构体。它们分子式相同、只是空间排布镜像对称；注意区别于一般的同分异构体（连接方式不同），手性强调的是“镜像不可重合”。' }
    ]
  });
})();
