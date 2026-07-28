/* ============================================================
 * 高一化学 · 必修 第一册 · 第四章 物质结构 元素周期律
 * 课时16：原子结构
 * 数据注入：chemistry.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u16',
    name: '原子结构',
    chapter: '必修 第一册 · 第四章 物质结构 元素周期律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、原子是由什么组成的' },
      { type: 'paragraph', text: '所有物质都是由原子构成的（先不管分子、离子这些细节）。每个原子中间有一个很小的原子核，核外有电子在运动。原子核里有两类粒子：带正电的质子，和不带电的中子。电子带负电，在核外分层排布。一个原子里，质子的正电荷总数和核外电子的负电荷总数相等，所以整个原子对外不显电性。' },
      { type: 'keypoint', label: '重点·原子的组成', text: '<strong>原子 = 原子核（质子 + 中子）+ 核外电子。</strong>质子带正电，中子不带电，电子带负电。中性原子里：质子数 = 核外电子数，正负电荷相互抵消，原子呈电中性。' },
      { type: 'paragraph', text: '为了把一种原子的"身份"写清楚，化学家发明了一个符号：左上角写质量数 A，左下角写质子数 Z，中间写元素符号 X，即 ₍Z₎₍A₎X 的形式。例如钠原子写作 ²³₁₁Na：左下 11 是质子数，左上 23 是质量数。' },
      { type: 'keypoint', label: '重点·原子符号 ₍Z₎₍A₎X 的含义', text: '<strong>左上角 A 是质量数，等于质子数加中子数（A = Z + N）；左下角 Z 是质子数，等于核电荷数，也等于中性原子的核外电子数。</strong>记住"左上质量、左下质子"就不会弄反。' },
      { type: 'list', items: ['质子：带一个单位正电荷，位于原子核内，数目决定元素种类', '中子：不带电，位于原子核内，影响质量数但不变更元素种类', '电子：带一个单位负电荷，在核外分层运动，数目在中性原子中等于质子数', '质量数 A = 质子数 Z + 中子数 N，是一个近似的整数'] },
      { type: 'table', headers: ['粒子', '符号', '质量（近似）', '电荷', '位置'], rows: [['质子', 'p', '约为 1', '带 1 个单位正电荷', '原子核内'], ['中子', 'n', '约为 1', '不带电（0）', '原子核内'], ['电子', 'e', '约为 1/1836', '带 1 个单位负电荷', '核外']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">原子的组成：原子核（质子+中子）+ 核外电子</text><circle cx="340" cy="180" r="70" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="165" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">原子核</text><text x="340" y="190" font-size="13" fill="#4a3724" text-anchor="middle">质子 p⁺</text><text x="340" y="210" font-size="13" fill="#4a3724" text-anchor="middle">中子 n⁰</text><circle cx="340" cy="180" r="110" fill="none" stroke="#d98e3a" stroke-width="2"/><circle cx="450" cy="180" r="5" fill="#b5651d"/><circle cx="340" cy="70" r="5" fill="#b5651d"/><circle cx="230" cy="180" r="5" fill="#b5651d"/><circle cx="340" cy="290" r="5" fill="#b5651d"/><text x="470" y="184" font-size="12" fill="#4a3724" text-anchor="middle">电子 e⁻</text><text x="340" y="300" font-size="12" fill="#d98e3a" text-anchor="middle">电子在核外分层绕核运动</text></svg>', caption: '图1　原子中心是原子核（含质子和中子），电子带负电在核外分层运动；中性原子内质子数等于电子数。' },
      { type: 'heading', text: '二、核外电子排布规律' },
      { type: 'paragraph', text: '核外电子不是乱飞的，而是分层排布的。从里到外依次叫 K、L、M、N 层，对应主量子数 n = 1、2、3、4。离核越近能量越低。电子总是先填满内层，再往外层排，这样最稳定。' },
      { type: 'keypoint', label: '重点·排布的几条规则', text: '<strong>第一，第 n 层最多容纳 2n² 个电子（K 层 2 个、L 层 8 个、M 层 18 个）。</strong><strong>第二，最外层电子不超过 8 个（若 K 层是最外层，则不超过 2 个）。</strong><strong>第三，次外层电子不超过 18 个。</strong><strong>第四，先排满内层，再排外层。</strong>' },
      { type: 'list', items: ['K 层（n=1）最多 2 个电子，L 层（n=2）最多 8 个', 'M 层（n=3）最多 18 个，但作最外层时不超过 8 个', '最外层电子数 ≤ 8（K 层作最外层时 ≤ 2）', '次外层电子数 ≤ 18，且电子先填满内层再排外层'] },
      { type: 'example', label: '例题·电子排布', text: '已知某原子核外有 11 个电子，请按规律写出各层电子数。<br><br><strong>解析</strong>：先排 K 层，最多 2 个，排满后还剩 9 个；再排 L 层，最多 8 个，排满后剩 1 个；剩下 1 个排到 M 层。所以该原子各层电子数为 <strong>2、8、1</strong>，这正是钠原子 Na 的排布。可见排布必须遵循"先内后外、各层不超上限"的规则。' },
      { type: 'heading', text: '三、原子结构示意图画法' },
      { type: 'paragraph', text: '原子结构示意图用一个圆圈代表原子核，圈内写"＋"号和质子数，圈外画弧线代表电子层，每条弧线上写该层的电子数。例如钠原子 Na：核内 11 个质子，电子排布为 2、8、1，就画成三层弧线，分别标 2、8、1。氯原子 Cl 有 17 个电子，排布为 2、8、7，最外层有 7 个电子。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">原子结构示意图：Na（2,8,1）与 Cl（2,8,7）</text><circle cx="200" cy="200" r="42" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="200" y="196" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">+11</text><text x="200" y="214" font-size="11" fill="#4a3724" text-anchor="middle">Na</text><circle cx="200" cy="200" r="70" fill="none" stroke="#d98e3a" stroke-width="2"/><circle cx="200" cy="200" r="100" fill="none" stroke="#d98e3a" stroke-width="2"/><circle cx="200" cy="200" r="130" fill="none" stroke="#d98e3a" stroke-width="2"/><text x="200" y="120" font-size="12" fill="#4a3724" text-anchor="middle">2</text><text x="200" y="90" font-size="12" fill="#4a3724" text-anchor="middle">8</text><text x="200" y="62" font-size="12" fill="#4a3724" text-anchor="middle">1</text><circle cx="480" cy="200" r="42" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="480" y="196" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">+17</text><text x="480" y="214" font-size="11" fill="#4a3724" text-anchor="middle">Cl</text><circle cx="480" cy="200" r="70" fill="none" stroke="#d98e3a" stroke-width="2"/><circle cx="480" cy="200" r="100" fill="none" stroke="#d98e3a" stroke-width="2"/><circle cx="480" cy="200" r="130" fill="none" stroke="#d98e3a" stroke-width="2"/><text x="480" y="120" font-size="12" fill="#4a3724" text-anchor="middle">2</text><text x="480" y="90" font-size="12" fill="#4a3724" text-anchor="middle">8</text><text x="480" y="62" font-size="12" fill="#4a3724" text-anchor="middle">7</text><text x="340" y="320" font-size="12" fill="#d98e3a" text-anchor="middle">弧线由内到外为 K、L、M 层，线上数字即该层电子数</text></svg>', caption: '图2　钠原子结构示意图：核内 +11，电子层 2、8、1；氯原子：核内 +17，电子层 2、8、7。' },
      { type: 'table', headers: ['符号位置', '数字含义', '举例（以 ²³₁₁Na 为例）'], rows: [['左下角 Z', '质子数 = 核电荷数 = 中性原子电子数', 'Z = 11'], ['左上角 A', '质量数 = 质子数 + 中子数', 'A = 23'], ['A − Z', '中子数 N', 'N = 23 − 11 = 12'], ['中间 X', '元素符号', 'Na 表示钠元素']] },
      { type: 'heading', text: '四、同位素——质子同、中子异' },
      { type: 'paragraph', text: '同一种元素，质子数一定相同；但中子数可以不同。质子数相同、中子数不同的同一种元素的不同原子，互称为同位素。例如氢元素有 ¹H（无中子，叫氕）、²H（1 个中子，叫氘）、³H（2 个中子，叫氚）三种同位素；碳元素有 ¹²C、¹³C、¹⁴C 等同位素。同位素属于同一种元素，化学性质几乎完全相同，只是质量数不同。' },
      { type: 'keypoint', label: '重点·同位素', text: '<strong>同位素 = 质子数相同、中子数不同的同一元素的不同原子。</strong>它们核电荷数一样，因此化学性质几乎相同；质量数不同，物理性质（如质量）有差异。氢的三种同位素 ¹H、²H、³H 是最典型的例子。' },
      { type: 'warn', label: '易错·几个"不等于"', text: '<strong>第一，质量数不等于原子量（相对原子质量）。</strong>质量数是整数（质子+中子），原子量是各同位素按自然丰度算出的平均值，常为小数。<strong>第二，同位素之间只是中子数不同，质子数相同。</strong><strong>第三，离子中质子数不等于电子数：阳离子失电子，电子数比质子数少；阴离子得电子，电子数比质子数多。</strong>例如 Na⁺ 有 11 个质子却只有 10 个电子。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">氢的三种同位素：质子同（1个）、中子异</text><circle cx="140" cy="170" r="50" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="140" y="166" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">¹H</text><text x="140" y="188" font-size="12" fill="#4a3724" text-anchor="middle">氕 0 中子</text><circle cx="340" cy="170" r="50" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="166" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">²H</text><text x="340" y="188" font-size="12" fill="#4a3724" text-anchor="middle">氘 1 中子</text><circle cx="540" cy="170" r="50" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="540" y="166" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">³H</text><text x="540" y="188" font-size="12" fill="#4a3724" text-anchor="middle">氚 2 中子</text><text x="340" y="262" font-size="13" fill="#d98e3a" text-anchor="middle">三者质子数都是 1，中子数 0、1、2 不同</text><text x="340" y="288" font-size="13" fill="#4a3724" text-anchor="middle">质子同、中子异 → 互为同位素</text></svg>', caption: '图3　氢的三种同位素（氕、氘、氚）：质子数同为 1，中子数分别 0、1、2，因此互为同位素。' },
      { type: 'tip', label: '提示·原子量怎么来的', text: '我们查元素周期表看到的"原子量"如氯为 35.45，不是某一种原子的质量数，而是自然界中 ³⁵₁₇Cl 和 ³⁷₁₇Cl 等多种同位素按含量比例算出的<strong>平均值</strong>。所以原子量常带小数，而单个同位素的质量数一定是整数。' }
    ],
    exercises: [
      { type: 'choice', question: '关于原子符号 ²³₁₁Na，下列说法中正确的是？', options: ['左上角 23 表示中子数', '左下角 11 表示质子数', '该原子有 23 个质子', '该原子有 11 个中子'], answer: '左下角 11 表示质子数', explanation: '在 ₍Z₎₍A₎X 中，左下角 Z 是质子数，左上角 A 是质量数。对 ²³₁₁Na 而言，左下 11 是质子数，左上 23 是质量数（质子+中子）。中子数 = 23 − 11 = 12，电子数在中性原子中等于质子数 11。因此只有"左下角 11 表示质子数"正确。' },
      { type: 'choice', question: '某原子的核外电子排布为 2、8、7，该原子是？', options: ['钠 Na', '氯 Cl', '氧 O', '氖 Ne'], answer: '氯 Cl', explanation: '电子层数表示有 K、L、M 三层，共 2+8+7 = 17 个电子。中性原子中电子数等于质子数，所以质子数为 17，对应氯元素 Cl。钠 Na 排布为 2、8、1，氧 O 为 2、6，氖 Ne 为 2、8。因此选氯 Cl。' },
      { type: 'choice', question: '下列关于同位素的说法，正确的是？', options: ['同位素质子数不同', '同位素中子数不同', '同位素的化学性质完全不同', '¹²C 与 ¹⁴C 不是同位素'], answer: '同位素中子数不同', explanation: '同位素的定义是质子数相同、中子数不同的同一元素的不同原子，所以"中子数不同"正确、"质子数不同"错误。由于核电荷相同，它们化学性质几乎相同而非完全不同；¹²C 与 ¹⁴C 质子数都是 6、中子数 6 与 8，正是一组同位素。因此选"同位素中子数不同"。' },
      { type: 'fill', question: '某中性原子的质子数为 11、中子数为 12，则其质量数 A = 质子数 + 中子数 = ___。', answer: '23', explanation: '质量数等于质子数加中子数，即 A = Z + N。已知质子数 Z = 11、中子数 N = 12，所以 A = 11 + 12 = 23，该原子正是 ²³₁₁Na。质量数是整数，注意不要和带小数的原子量混淆。' },
      { type: 'fill', question: 'Na⁺ 离子的质子数为 11，由于它失去了 1 个电子，所以它的核外电子数为 ___。', answer: '10', explanation: '中性钠原子有 11 个质子和 11 个电子。Na⁺ 是钠离子，失去了最外层 1 个电子，所以核外电子数 = 11 − 1 = 10，而质子数不变仍为 11。这正是离子中"质子数不等于电子数"的体现：阳离子电子数少于质子数。' }
    ]
  });
})();
