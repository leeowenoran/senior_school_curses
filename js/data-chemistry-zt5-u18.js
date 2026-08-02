/* 化学 · 高三复习 · 化学计算 · 专题八 · 课时：差量法 */
(function () {
  var v = gzGetVolume('chemistry', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u18',
    name: '差量法',
    chapter: '化学计算 · 专题八 常用计算技巧',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、差量法：用质量差体积差列式' },
      { type: 'paragraph', text: '有些题目直接算很麻烦，但反应<strong>前后某物理量的差值</strong>却很好求。差量法就是利用这个差值与化学方程式中对应系数成正比的关系，直接按比例列式。常用于固体质量变化、气体体积变化的题目。' },
      { type: 'list', items: ['Δm 固体质量差：反应前后固体质量的变化', 'ΔV 气体体积差：反应前后气体体积的变化', 'Δn 物质的量差：反应前后物质的量的变化'] },
      { type: 'heading', text: '二、差量法的原理' },
      { type: 'paragraph', text: '差量法的本质是比例关系：反应中某物理量的差值，与化学方程式中该量对应的系数成正比。只要找准差值对应方程式中哪一物质，直接按系数比列式就能求出未知量。' },
      { type: 'keypoint', label: '重点·差量正比于系数', text: '<strong>差量法的核心是比例，差值与系数成正比。</strong>例如反应前后气体体积减少了 1 体积，而方程式里这个体积差对应消耗了 2 体积某气体，那么体积差与消耗量的比例就是 1:2，按此比例即可求任意已知差对应的消耗量。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">差量法原理：反应前后质量差</text><rect x="50" y="70" width="260" height="80" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">反应前总质量</text><text x="180" y="130" font-size="13" fill="#4a3724" text-anchor="middle">m(前)</text><text x="340" y="120" font-size="26" fill="#b5651d" text-anchor="middle" font-weight="bold">−</text><rect x="370" y="70" width="260" height="80" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">反应后总质量</text><text x="500" y="130" font-size="13" fill="#4a3724" text-anchor="middle">m(后)</text><text x="340" y="200" font-size="22" fill="#d98e3a" text-anchor="middle" font-weight="bold">Δm = m(前) − m(后)</text><text x="340" y="245" font-size="13" fill="#4a3724" text-anchor="middle">差值与方程式中对应物质的系数成正比</text><text x="340" y="272" font-size="13" fill="#4a3724" text-anchor="middle">用比例列式即可直接求未知量</text></svg>', caption: '图1　差量 Δm 与反应系数成正比，可直接比例列式。' },
      { type: 'heading', text: '三、固体质量差示例' },
      { type: 'paragraph', text: '固体质量差常见于金属与酸反应、碳酸盐分解、金属被氧化或被还原等。特点是反应前后都有固体，但质量变了（通常是失去或得到氧）。' },
      { type: 'example', label: '例题·CuO 还原的固体减轻', text: '将 8 g CuO 用 H₂ 还原为 Cu，固体减轻多少？<br>解：CuO → Cu 每 mol 减轻 16 g（失去 O）。<br>n(CuO) = 8 / 80 = 0.1 mol，故减轻 0.1 × 16 = 1.6 g。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">固体质量差示例：CuO 还原为 Cu</text><rect x="60" y="80" width="240" height="80" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="115" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">CuO (80)</text><text x="180" y="142" font-size="13" fill="#4a3724" text-anchor="middle">含 O 质量 16</text><text x="340" y="125" font-size="22" fill="#b5651d" text-anchor="middle" font-weight="bold">→</text><rect x="380" y="80" width="240" height="80" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="115" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">Cu (64)</text><text x="500" y="142" font-size="13" fill="#4a3724" text-anchor="middle">失去 O</text><text x="340" y="205" font-size="15" fill="#d98e3a" text-anchor="middle" font-weight="bold">每 mol CuO 固体减轻 16 g</text><text x="340" y="250" font-size="13" fill="#4a3724" text-anchor="middle">减轻量 = n(CuO) × 16 ，对应 Δm 列式</text></svg>', caption: '图2　CuO 还原为 Cu，每 mol 固体减轻 16 g（失去 O）。' },
      { type: 'heading', text: '四、体积差示例' },
      { type: 'paragraph', text: '气体体积差常来自反应前后气体物质的量的变化。在同温同压下，气体体积之比等于物质的量之比，所以体积差可以直接按方程式系数差来用。' },
      { type: 'warn', label: '易错·找准差值对应的物质', text: '用差量法必须确认差值对应方程式中哪一物质的系数。气体体积差常来自气体物质的量变化，要按同温同压下 V 与 n 成正比来换算。千万别把差值张冠李戴到别的物质上。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">气体体积差示例：2SO₂ + O₂ ⇌ 2SO₃</text><rect x="50" y="80" width="270" height="80" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="185" y="115" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">反应前气体 3 体积</text><text x="185" y="142" font-size="13" fill="#4a3724" text-anchor="middle">2 SO₂ + 1 O₂</text><text x="340" y="125" font-size="22" fill="#b5651d" text-anchor="middle" font-weight="bold">→</text><rect x="360" y="80" width="270" height="80" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="495" y="115" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">反应后气体 2 体积</text><text x="495" y="142" font-size="13" fill="#4a3724" text-anchor="middle">2 SO₃</text><text x="340" y="205" font-size="15" fill="#d98e3a" text-anchor="middle" font-weight="bold">ΔV = 3 − 2 = 1 体积</text><text x="340" y="250" font-size="13" fill="#4a3724" text-anchor="middle">每消耗 2 体积 SO₂，气体体积减少 1 体积</text></svg>', caption: '图3　同温同压下气体体积差与系数差对应，比例列式。' },
      { type: 'example', label: '例题·由体积差求消耗量', text: '2SO₂ + O₂ ⇌ 2SO₃，反应前后气体体积从 3 体积变为 2 体积，每消耗 2 体积 SO₂ 体积减少 1 体积。已知体积减少 10 L，求消耗 SO₂ 多少？<br>解：ΔV = 1 对应 SO₂ 系数 2，故消耗 SO₂ = 10 × 2 = 20 L。' },
      { type: 'list', items: ['第一步：写出相关反应，标出各物质系数', '第二步：找出题目给的差量对应的物质与系数', '第三步：按比例列式求解未知量'] },
      { type: 'table', headers: ['差量类型', '来源', '列比例的依据'], rows: [['Δm 质量差', '固体失重或增重', '质量差对应物质系数比'], ['ΔV 体积差', '气体物质的量变化', '同温同压下 V 正比于 n'], ['Δn 物质的量差', '反应前后 n 变化', '物质的量差对应系数比']] },
      { type: 'tip', label: '提示·差量法适用场景', text: '差量法适合有固体质量变化、气体体积变化、或者混合气体反应后体积差明确的题目。看准差值来源，远比一步步算省事。先找差，再找对应系数。' },
      { type: 'heading', text: '五、综合例题' },
      { type: 'example', label: '例题·碳酸盐混合物分解', text: '把 12.4 g 碳酸镁和碳酸钡的混合物加热分解，质量减少 4.4 g（生成 CO₂）。求原混合物中碳酸镁质量。<br>解：MgCO₃ → MgO 失 44 g/mol CO₂；BaCO₃ → BaO 失 44 g/mol CO₂。每 mol 碳酸盐都失 44 g CO₂。<br>n(CO₂) = 4.4 / 44 = 0.1 mol，故混合物总物质的量 0.1 mol。<br>设 MgCO₃ 为 x mol，则 BaCO₃ 为 (0.1 − x) mol，质量 84x + 197(0.1 − x) = 12.4，解得 x = 0.05 mol，质量 = 84 × 0.05 = 4.2 g。' },
      { type: 'paragraph', text: '小结：差量法的关键是<strong>找差、找对应</strong>。把差值当作一个“虚拟产物”，它和方程中某物质的系数是成固定比例的，这一步想通了，题目就变得像一道简单比例题。' }
    ],
    exercises: [
      { type: 'choice', question: '差量法依据的关系是？', options: ['差量与系数成反比', '差量与系数成正比', '差量等于生成物质量', '差量只用于气体'], answer: '差量与系数成正比', explanation: '差量法利用反应前后某物理量的变化量来列式，这个变化量（如质量差、体积差、物质的量差）与化学方程式中对应物质的系数成正比，而不是反比。它既可用于固体质量差，也可用于气体体积差。所以正确项是差量与系数成正比。' },
      { type: 'choice', question: 'CuO 用 H₂ 还原为 Cu，每 mol CuO 固体减轻约？', options: ['16 g', '32 g', '64 g', '80 g'], answer: '16 g', explanation: 'CuO 的摩尔质量为 80 g/mol，其中 Cu 为 64、O 为 16。用 H₂ 还原 CuO 时氧以 H₂O 形式脱去，每 mol CuO 固体减少的质量就是其中氧的质量 16 g。所以每 mol CuO 固体减轻约 16 g。' },
      { type: 'choice', question: '2SO₂ + O₂ ⇌ 2SO₃，每消耗 2 体积 SO₂，气体体积减少？', options: ['1 体积', '2 体积', '3 体积', '0 体积'], answer: '1 体积', explanation: '反应 2SO₂ + O₂ ⇌ 2SO₃ 中，反应前气体总体积为 2+1=3 体积，反应后生成 2 体积 SO₃，故每消耗 2 体积 SO₂，气体总体积减少 3−2=1 体积。所以体积减少 1 体积。' },
      { type: 'fill', question: '碳酸盐受热分解，每 mol 碳酸盐失去 CO₂ 的质量为___ g（CO₂ 摩尔质量 44 g/mol）。', answer: '44', explanation: '碳酸盐受热分解的通式为 MCO₃ → MO + CO₂，每 mol 碳酸盐都失去 1 mol CO₂。CO₂ 的摩尔质量为 44 g/mol，因此每 mol 碳酸盐失去 CO₂ 的质量为 44 g。答案为 44。' },
      { type: 'fill', question: '8 g CuO（M=80 g/mol）完全还原为 Cu，固体质量减少___ g。', answer: '1.6', explanation: 'CuO 摩尔质量 M = 80 g/mol。n(CuO) = 8 g / 80 g·mol⁻¹ = 0.1 mol。还原为 Cu 时每 mol CuO 失去 16 g 氧，故固体质量减少 = 0.1 mol × 16 g/mol = 1.6 g。答案为 1.6。' }
    ]
  });
})();
