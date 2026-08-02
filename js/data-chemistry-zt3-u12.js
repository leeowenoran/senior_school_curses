/* 化学 · 高三复习 · 有机化学 · 专题三 · 课时：羧酸与酯 */
(function () {
  var v = gzGetVolume('chemistry', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u12',
    name: '羧酸与酯',
    chapter: '有机化学 · 专题三 烃的衍生物',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、羧酸和羧基：酸味的来源' },
      { type: 'paragraph', text: '羧酸的官能团是<strong>羧基 —COOH</strong>，可以看成一个羰基 C=O 连着一个羟基 —OH。乙酸 CH₃COOH 是最常见的羧酸，相当于甲基 CH₃— 接上羧基，就是我们厨房里的食醋主要成分。羧基里的羟基受旁边羰基影响，容易电离出氢离子，所以羧酸有酸性，而且乙酸的酸性比碳酸强。' },
      { type: 'list', items: ['羧基写法 —COOH，由羰基 C=O 和羟基 —OH 直接相连组成', '乙酸 CH₃COOH：甲基接羧基，是最简单的羧酸之一', '羧基既能表现酸性（—OH 电离），也能发生酯化（脱羟基）'] },
      { type: 'heading', text: '二、羧酸的酸性：比碳酸还强' },
      { type: 'paragraph', text: '乙酸能和可溶性碳酸盐反应放出二氧化碳，证明它酸性比碳酸强。比如把乙酸滴到碳酸钠 Na₂CO₃ 溶液里，会冒出无色气泡（CO₂），这是检验羧酸酸性的常用方法。羧酸还能和活泼金属、碱、碱性氧化物反应，本质是羧基电离出的氢离子在起作用。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙酸的酸性：与碳酸钠反应放出二氧化碳</text><rect x="150" y="60" width="70" height="180" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><rect x="158" y="120" width="54" height="112" rx="8" fill="#d98e3a"/><text x="185" y="100" font-size="12" fill="#4a3724" text-anchor="middle">CO₂↑</text><text x="285" y="100" font-size="13" fill="#4a3724">乙酸 CH₃COOH</text><text x="285" y="126" font-size="13" fill="#4a3724">+ 碳酸钠 Na₂CO₃</text><text x="285" y="152" font-size="13" fill="#4a3724">冒出无色气泡</text><text x="285" y="184" font-size="13" fill="#d98e3a" font-weight="bold">酸性比碳酸强</text><rect x="40" y="250" width="600" height="58" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="277" font-size="13" fill="#4a3724" text-anchor="middle">2CH₃COOH + Na₂CO₃ → 2CH₃COONa + CO₂↑ + H₂O</text><text x="340" y="300" font-size="12" fill="#b5651d" text-anchor="middle">现象：产生无色气体，该气体能使澄清石灰水变浑浊</text></svg>', caption: '图1　乙酸酸性强于碳酸，能与碳酸钠反应放出二氧化碳气泡。' },
      { type: 'keypoint', label: '重点·酸性方程式要配平', text: '<strong>乙酸酸性比碳酸强，能制出二氧化碳。</strong>方程式：2CH₃COOH + Na₂CO₃ → 2CH₃COONa + CO₂↑ + H₂O。注意羧基 —COOH 脱的是氢离子，两个乙酸分子才对应一个碳酸钠，生成乙酸钠、二氧化碳和水。这个反应是"强酸制弱酸"的体现，也说明含羧基的物质大多显酸性。' },
      { type: 'heading', text: '三、酯化反应：酸脱羟基、醇脱氢' },
      { type: 'paragraph', text: '羧酸和醇在浓硫酸、加热条件下生成酯和水的反应叫<strong>酯化反应</strong>。它的机理特别好记：<strong>酸脱羟基（—OH），醇脱氢（—H）</strong>，这两部分结合成水，剩下的酸部分和醇部分连起来成酯。乙酸和乙醇生成的乙酸乙酯 CH₃COOC₂H₅，有浓郁的果香味，是很多水果香气的来源。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">酯化反应机理：酸脱羟基，醇脱氢</text><rect x="60" y="70" width="220" height="60" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="170" y="106" font-size="14" fill="#4a3724" text-anchor="middle">乙酸 CH₃COOH</text><text x="170" y="158" font-size="13" fill="#d98e3a" font-weight="bold" text-anchor="middle">脱 —OH</text><rect x="400" y="70" width="220" height="60" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="510" y="106" font-size="14" fill="#4a3724" text-anchor="middle">乙醇 C₂H₅OH</text><text x="510" y="158" font-size="13" fill="#d98e3a" font-weight="bold" text-anchor="middle">脱 —H</text><polygon points="170,200 160,222 180,222" fill="#b5651d"/><polygon points="510,200 500,222 520,222" fill="#b5651d"/><rect x="40" y="250" width="600" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="285" font-size="13" fill="#4a3724" text-anchor="middle">CH₃COOH + C₂H₅OH →（浓硫酸，加热）CH₃COOC₂H₅ + H₂O</text><text x="340" y="315" font-size="12" fill="#b5651d" text-anchor="middle">脱下的 —OH 与 —H 结合成水，酸醇相连成酯</text></svg>', caption: '图2　酯化反应中酸脱羟基、醇脱氢，二者结合成水，其余部分成酯。' },
      { type: 'list', items: ['反应条件：浓硫酸作催化剂和吸水剂，加热', '断键规律：酸脱 —OH，醇脱 —H，二者结合成 H₂O', '产物乙酸乙酯 CH₃COOC₂H₅ 有果香味，难溶于水、密度比水小', '该反应是可逆反应，浓硫酸吸水有利于平衡向生成酯的方向移动'] },
      { type: 'heading', text: '四、乙酸乙酯的制备实验' },
      { type: 'paragraph', text: '实验室制备乙酸乙酯有一套标准操作。先加<strong>乙醇，再慢慢加浓硫酸，最后加乙酸</strong>（顺序不能乱，否则放热危险）；浓硫酸既催化又吸水；收集时试管里装<strong>饱和 Na₂CO₃ 溶液</strong>，作用是吸收挥发的乙醇、中和挥发的乙酸、降低酯在水里的溶解度，让酯更好分层。导管口要悬在饱和 Na₂CO₃ 液面上方，防止倒吸。加热用小火，避免液体暴沸。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙酸乙酯制备实验装置</text><polygon points="150,90 270,90 240,210 180,210" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="210" y="160" font-size="13" fill="#4a3724" text-anchor="middle">乙醇+浓硫酸+乙酸</text><line x1="210" y1="90" x2="210" y2="50" stroke="#b5651d" stroke-width="2"/><line x1="210" y1="50" x2="470" y2="50" stroke="#b5651d" stroke-width="2"/><line x1="470" y1="50" x2="470" y2="230" stroke="#b5651d" stroke-width="2"/><text x="430" y="45" font-size="12" fill="#4a3724">导管（液面上方防倒吸）</text><rect x="420" y="230" width="120" height="90" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><rect x="428" y="280" width="104" height="36" rx="6" fill="#d98e3a"/><text x="480" y="262" font-size="12" fill="#4a3724" text-anchor="middle">饱和Na₂CO₃</text><text x="210" y="300" font-size="12" fill="#b5651d">饱和Na₂CO₃：吸乙醇、中和乙酸、降酯溶解度</text><text x="210" y="325" font-size="12" fill="#b5651d">饱和Na₂CO₃：吸乙醇、中和乙酸、降低酯的溶解度</text></svg>', caption: '图3　制备装置中导管口在液面上方，用饱和碳酸钠吸收杂质并防止倒吸。' },
      { type: 'heading', text: '五、酯的水解：酯化反应的逆过程' },
      { type: 'paragraph', text: '酯的官能团是<strong>酯基 —COOR</strong>，乙酸乙酯 CH₃COOC₂H₅ 是代表。酯在水的参与下能水解变回羧酸和醇，相当于酯化反应的逆反应。<strong>酸性水解是可逆的</strong>，生成羧酸和醇；<strong>碱性水解是不可逆的</strong>，碱把生成的酸中和成盐，推动反应一直向右，最终得到羧酸盐和醇。' },
      { type: 'table', headers: ['水解条件', '产物', '是否可逆', '特点'], rows: [['稀硫酸、加热', '乙酸 + 乙醇', '可逆', '和酯化互为逆反应，程度小'], ['氢氧化钠、加热', '乙酸钠 + 乙醇', '不可逆', '碱中和酸，反应较完全']] },
      { type: 'warn', label: '易错·酯化与水解的两个坑', text: '易错点一：酯化"酸脱羟基醇脱氢"，很多同学记反成"酸脱氢醇脱羟基"，断键位置写错方程式就错。记住酸提供 —OH、醇提供 —H，合起来才是水。易错点二：酸性水解可逆、碱性水解不可逆，写方程式时别漏写催化剂和加热条件，碱性条件下产物是羧酸盐不是羧酸。' },
      { type: 'example', label: '例题·酯化断键', text: '写出乙酸和乙醇发生酯化反应的化学方程式，并说明水中氧原子的来源。<br><br><strong>解析</strong>：方程式为 CH₃COOH + C₂H₅OH →（浓硫酸，加热）CH₃COOC₂H₅ + H₂O。根据"酸脱羟基醇脱氢"，水中的 —OH 来自乙酸的羧基，—H 来自乙醇的羟基，所以水中的氧原子来自乙酸。酯化是取代反应的一种，浓硫酸既催化又吸水。' },
      { type: 'tip', label: '提示·一句口诀', text: '酯化反应记一句：<strong>"酸脱羟基醇脱氢，二者碰头成水生。"</strong>水解是它倒着走，酸性可逆、碱性彻底。考试不论写酯化还是写水解，先把断键位置想清楚，方程式基本不会错。' }
    ],
    exercises: [
      { type: 'choice', question: '能说明乙酸酸性比碳酸强的实验事实是？', options: ['乙酸能与 Na₂CO₃ 反应生成 CO₂', '乙酸有刺激性气味', '乙酸在常温下是液体', '乙酸可以燃烧'], answer: '乙酸能与 Na₂CO₃ 反应生成 CO₂', explanation: '根据强酸制弱酸原理，较强酸能和较弱酸的盐反应生成较弱酸。乙酸能与碳酸钠 Na₂CO₃ 反应放出二氧化碳 CO₂，说明乙酸把碳酸从盐中置换出来，即乙酸酸性强于碳酸。气味、状态、可燃性都与酸性强弱无关。所以选乙酸能与碳酸钠反应生成二氧化碳。' },
      { type: 'choice', question: '酯化反应"酸脱羟基醇脱氢"中，生成的水里的氧原子来自？', options: ['乙醇', '乙酸（羧酸）', '浓硫酸', '空气'], answer: '乙酸（羧酸）', explanation: '酯化反应的断键规律是酸脱羟基（—OH）、醇脱氢（—H），脱下的 —OH 与 —H 结合成水。水中的 —OH 来自羧酸的羧基，因此氧原子来自乙酸（羧酸）。浓硫酸只是催化剂和吸水剂，不参与成键。所以选乙酸（羧酸）。' },
      { type: 'choice', question: '制备乙酸乙酯时，试管中饱和 Na₂CO₃ 溶液的作用不包括？', options: ['吸收挥发的乙醇', '中和挥发的乙酸', '降低酯的溶解度', '作反应的催化剂'], answer: '作反应的催化剂', explanation: '饱和碳酸钠溶液的作用是吸收挥发的乙醇、中和挥发的乙酸、降低乙酸乙酯在水中的溶解度，使其更易分层。催化剂是浓硫酸，不是饱和碳酸钠。另外导管口在液面上方是为了防倒吸。所以不包括的作用是作催化剂，选该项。' },
      { type: 'fill', question: '乙酸乙酯在稀硫酸、加热条件下水解，是可逆反应，生成乙酸和___。', answer: '乙醇 | C₂H₅OH', explanation: '酯的水解与酯化互为逆反应。乙酸乙酯 CH₃COOC₂H₅ 在稀硫酸加热条件下水解，断开酯基中的碳氧单键，结合水分子，生成乙酸 CH₃COOH 和乙醇 C₂H₅OH，且该反应可逆、程度较小。所以填乙醇（也可写结构简式 C₂H₅OH）。' },
      { type: 'fill', question: '乙酸与乙醇酯化制备乙酸乙酯时，浓硫酸的作用是催化剂兼___剂。', answer: '吸水 | 吸水剂', explanation: '酯化反应是可逆反应，加入浓硫酸一方面作催化剂加快反应速率，另一方面作吸水剂吸收生成的水，使平衡向生成乙酸乙酯的方向移动，提高产率。所以浓硫酸的作用是催化兼吸水，填吸水（或吸水剂）。' }
    ]
  });
})();
