/* ============================================================
 * 高一数学 · 必修 第一册 · 第三章 函数的概念与性质
 * 第11课时：幂函数（人教A版 §3.3）
 * 第12课时：函数的应用（一）（人教A版 §3.4）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;
  v.points.push(

    /* ---------------- 第11课时 幂函数 ---------------- */
    {
      id: 'bx1-u7-l1',
      name: '幂函数',
      chapter: '第三章 函数的概念与性质 · 3.3',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、幂函数的定义' },
        { type: 'paragraph', text: '幂函数是基本初等函数之一，形式非常简洁：底数是自变量，指数是常数。它在描述面积、体积、物理定律等“幂次关系”时经常出现。' },
        { type: 'keypoint', label: '重点·定义', text: '形如 <strong>y = xᵃ</strong>（a 为<strong>常数</strong>）的函数叫做<strong>幂函数</strong>。注意与指数函数 y = aˣ 区分：<strong>幂函数是底数 x 变、指数 a 定</strong>；指数函数是底数 a 定、指数 x 变。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><path d="M120 180 L200 100 L300 60" fill="none" stroke="#2b5b9e" stroke-width="2.5"/><path d="M120 180 Q240 180 320 80" fill="none" stroke="#4a7de0" stroke-width="2.5"/><path d="M120 180 Q300 60 560 170" fill="none" stroke="#e05d44" stroke-width="2.5"/><path d="M200 180 Q400 180 560 120" fill="none" stroke="#5a7a2a" stroke-width="2.5"/><path d="M120 180 Q360 40 560 60" fill="none" stroke="#7a5aa0" stroke-width="2.5"/><text x="340" y="205" font-size="14" fill="#33536e" text-anchor="middle">常见幂函数：y=x, x², x³, 1/x, √x 的草图</text></svg>', caption: '图1　常见幂函数图象形态各异，但都过定点 (1,1)。' },
        { type: 'list', items: ['y = x（a=1，过一二三象限的直线）', 'y = x²（a=2，开口向上抛物线）', 'y = x³（a=3，关于原点对称的曲线）', 'y = 1/x（a=−1，双曲线）', 'y = √x（a=1/2，只在 x≥0 的半支曲线）'] },
        { type: 'heading', text: '二、幂函数的性质' },
        { type: 'keypoint', label: '重点·性质', text: '所有幂函数都过定点 <strong>(1, 1)</strong>（因 1ᵃ = 1）。指数 a 的正负决定增减：<br>① <strong>a &gt; 0</strong>：在 (0, +∞) 上<strong>单调递增</strong>，且都过点 (0,0)（a&gt;0 时）；<br>② <strong>a &lt; 0</strong>：在 (0, +∞) 上<strong>单调递减</strong>，不过原点、以坐标轴为渐近线。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="170" fill="#eef4fc"/><rect x="60" y="55" width="250" height="52" rx="8" fill="#2b5b9e"/><text x="185" y="88" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">a &gt; 0：递增</text><rect x="370" y="55" width="250" height="52" rx="8" fill="#e05d44"/><text x="495" y="88" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">a &lt; 0：递减</text><text x="340" y="140" font-size="14" fill="#33536e" text-anchor="middle">指数符号决定幂函数增减方向</text></svg>', caption: '图2　幂函数增减由指数 a 的符号决定：a&gt;0 增，a&lt;0 减。' },
        { type: 'example', label: '例题1', text: '比较 2^0.5 与 3^0.5 的大小。<br><br><strong>解</strong>：可看作幂函数 y = x^0.5 = √x，指数 0.5 &gt; 0，在 (0,+∞) 上递增。因 2 &lt; 3，故 <strong>2^0.5 &lt; 3^0.5</strong>。' },
        { type: 'heading', text: '三、图象特征与定点' },
        { type: 'keypoint', label: '重点·过定点', text: '幂函数 y = xᵃ 在 x = 1 处 y = 1，故恒过 <strong>(1, 1)</strong>。a 为偶数时函数为偶函数（如 x²）；a 为奇数时函数为奇函数（如 x、x³）；a = 1/2 时定义域受限为 [0,+∞) 且非奇非偶。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="170" fill="#eef4fc"/><line x1="80" y1="140" x2="600" y2="140" stroke="#888" stroke-width="2"/><line x1="320" y1="30" x2="320" y2="150" stroke="#888" stroke-width="2"/><circle cx="340" cy="120" r="7" fill="#e05d44"/><text x="340" y="105" font-size="15" fill="#c0392b" text-anchor="middle">(1,1)</text><text x="340" y="165" font-size="14" fill="#33536e" text-anchor="middle">所有幂函数都经过定点 (1,1)</text></svg>', caption: '图3　幂函数恒过定点 (1,1)，是快速判断图象位置的“锚点”。' },
        { type: 'example', label: '例题2', text: '已知幂函数 f(x) = xᵃ 过点 (2, 8)，求 a。<br><br><strong>解</strong>：代入点得 2ᵃ = 8 = 2³，故 <strong>a = 3</strong>，即 f(x) = x³。' },
        { type: 'heading', text: '四、常见幂函数对照' },
        { type: 'table', headers: ['函数', 'a', '定义域', '奇偶', '单调性'], rows: [['y = x', '1', 'R', '奇', '增'], ['y = x²', '2', 'R', '偶', '[0,+∞)增'], ['y = x³', '3', 'R', '奇', '增'], ['y = 1/x', '−1', 'x≠0', '奇', '减(各支)'], ['y = √x', '1/2', '[0,+∞)', '非', '增']] },
        { type: 'warn', label: '易错', text: '常见混淆：①<strong>幂函数与指数函数</strong>搞反（幂是 xᵃ，指数是 aˣ）；②<strong>忽略定义域</strong>，如 y = 1/x 在 x = 0 无定义、y = √x 只在 x≥0；③<strong>用幂函数性质比较负底数</strong>，幂函数的单调性通常只在 (0,+∞) 讨论，负数情形要谨慎，必要时用奇偶转化。' },
        { type: 'tip', label: '记忆', text: '记住一句话：<strong>“幂函数是 x 的 a 次方，指数定增减，定点 (1,1) 必过”</strong>。比较幂值大小，先看指数正负定单调性，再看底数落在增区间还是减区间；底数含负数时先用奇偶性或转成正数处理。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['幂函数 y = xᵃ（a 为常数）', '恒过定点 (1,1)', 'a&gt;0 在 (0,+∞) 递增；a&lt;0 递减', '与指数函数 y=aˣ 区分（底数/指数位置相反）', '注意各幂函数的定义域差异'] },
        { type: 'reading', text: '幂函数与指数函数的“底数—指数”位置恰好相反，这是考试故意设置的辨析点。记忆窍门：<strong>幂函数形如“自变量 x 的常数次方”</strong>（x 在底），<strong>指数函数形如“常数 a 的自变量次方”</strong>（x 在指）。一旦把形式写对，剩下的性质（过定点、增减）就顺理成章了。' }
      ],
      exercises: [
        { type: 'choice', question: '下列函数中是幂函数的是？', options: ['y = 2ˣ', 'y = x²', 'y = 2x', 'y = log₂x'], answer: 'y = x²', explanation: '幂函数形如 y = xᵃ（a 为常数）。y=x² 符合（a=2）。y=2ˣ 是指数函数，y=2x 是正比例函数，y=log₂x 是对数函数，均不是幂函数。故选 y=x²。' },
        { type: 'fill', question: '幂函数 y = xᵃ 恒过的定点坐标是 ____。', answer: '(1,1)', explanation: '对任意常数 a，当 x=1 时 y=1ᵃ=1，故所有幂函数都过定点 (1,1)。' },
        { type: 'choice', question: '幂函数 y = x⁻¹（即 y = 1/x）在 (0, +∞) 上的单调性是？', options: ['递增', '递减', '先增后减', '常函数'], answer: '递减', explanation: '幂函数 y = xᵃ 当指数 a = −1 < 0 时，在区间 (0, +∞) 上单调递减；这也与 y = 1/x 的图象相符——x 越大，1/x 越小。故在 (0, +∞) 上递减。' },
        { type: 'fill', question: '若幂函数 f(x) = xᵃ 过点 (2, 8)，则 a = ____。', answer: '3', explanation: '将已知点 (2, 8) 代入幂函数 f(x) = xᵃ，得 2ᵃ = 8。由于 8 = 2³，故 2ᵃ = 2³，由底数相同可得 a = 3，即该幂函数为 f(x) = x³。' },
        { type: 'choice', question: '关于幂函数 y = x² 与 y = x³，正确的是？', options: ['都过 (0,0) 和 (1,1)', '都是偶函数', '都在 R 上递减', 'y=x³ 定义域是 [0,+∞)'], answer: '都过 (0,0) 和 (1,1)', explanation: 'x² 与 x³ 在 x=0 时 y=0、x=1 时 y=1，都过 (0,0) 和 (1,1)，A 正确。x³ 是奇函数非偶，B 错；二者均在 R 上递增，C 错；x³ 定义域为 R，D 错。故选 A。' }
      ]
    },

    /* ---------------- 第12课时 函数的应用（一） ---------------- */
    {
      id: 'bx1-u7-l2',
      name: '函数的应用（一）',
      chapter: '第三章 函数的概念与性质 · 3.4',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、函数模型与建模' },
        { type: 'paragraph', text: '函数的价值在于“用数学描述现实”。把实际问题中的数量关系抽象成函数，再借助函数性质求解，就是函数建模。本节先接触几种简单模型。' },
        { type: 'keypoint', label: '重点·建模步骤', text: '用函数解决实际问题的通用流程：<br>① <strong>设变量</strong>：明确自变量与因变量；<br>② <strong>列关系式</strong>：依题意写出函数解析式，并注明<strong>定义域（考虑实际意义）</strong>；<br>③ <strong>求解</strong>：利用函数性质（单调性、最值等）计算结果；<br>④ <strong>作答</strong>：还原成实际结论。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="180" fill="#eef4fc"/><rect x="40" y="65" width="120" height="50" rx="8" fill="#2b5b9e"/><text x="100" y="97" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">实际问题</text><rect x="200" y="65" width="120" height="50" rx="8" fill="#4a7de0"/><text x="260" y="97" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">设变量列式</text><rect x="360" y="65" width="120" height="50" rx="8" fill="#5a7a2a"/><text x="420" y="97" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">函数求解</text><rect x="520" y="65" width="120" height="50" rx="8" fill="#e05d44"/><text x="580" y="97" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">实际结论</text><path d="M160 90 L198 90" stroke="#2b5b9e" stroke-width="3"/><path d="M320 90 L358 90" stroke="#4a7de0" stroke-width="3"/><path d="M480 90 L518 90" stroke="#5a7a2a" stroke-width="3"/><text x="340" y="155" font-size="14" fill="#33536e" text-anchor="middle">建模四步：设变量 → 列式 → 求解 → 作答</text></svg>', caption: '图1　函数建模基本流程：从实际到模型再回到实际。' },
        { type: 'list', items: ['一次函数模型 y = kx + b（均匀变化）', '二次函数模型 y = ax²+bx+c（最值问题）', '分段函数模型（计费、阶梯价格）', '幂函数/反比例模型（面积、密度等）'] },
        { type: 'heading', text: '二、建立函数模型示例' },
        { type: 'keypoint', label: '重点·关键', text: '建模最关键是<strong>“找准变量关系”和“定义域的实际约束”</strong>。例如“总长固定围矩形”，面积 S 是边长的二次函数，求最大面积就是求二次函数最值——这把第二章的基本不等式与本章函数联系起来。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="170" fill="#eef4fc"/><rect x="80" y="60" width="200" height="50" rx="8" fill="#2b5b9e"/><text x="180" y="92" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">读题找量</text><rect x="320" y="60" width="200" height="50" rx="8" fill="#4a7de0"/><text x="420" y="92" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">写解析式+定义域</text><text x="340" y="145" font-size="14" fill="#33536e" text-anchor="middle">定义域必须含实际限制（如边长&gt;0）</text></svg>', caption: '图2　建模要点：变量关系 + 实际定义域。' },
        { type: 'example', label: '例题1', text: '某商品每件进价 40 元，售价 x 元时每天可卖 (200 − 2x) 件。求日利润 y 关于 x 的函数及最大利润。<br><br><strong>解</strong>：单件利润 (x − 40)，销量 (200 − 2x)，故 y = (x − 40)(200 − 2x) = −2x² + 280x − 8000，定义域由销量 &gt; 0 得 40 &lt; x &lt; 100。配方 y = −2(x − 70)² + 1800，故 x = 70 时利润最大为 <strong>1800 元</strong>。' },
        { type: 'heading', text: '三、分段函数模型' },
        { type: 'keypoint', label: '重点·分段计费', text: '现实中许多规则是“分档”的，如出租车计价、阶梯水价、个税，这类问题用<strong>分段函数</strong>建模：不同区间对应不同计费公式，每段都要写清适用范围。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="180" fill="#eef4fc"/><polyline points="100,150 250,90 400,150 550,90" fill="none" stroke="#2b5b9e" stroke-width="3"/><line x1="100" y1="160" x2="580" y2="160" stroke="#888" stroke-width="2"/><text x="175" y="50" font-size="13" fill="#2b5b9e" text-anchor="middle">第一段</text><text x="325" y="175" font-size="13" fill="#2b5b9e" text-anchor="middle">第二段</text><text x="340" y="30" font-size="14" fill="#33536e" text-anchor="middle">分段计费：不同区间不同单价</text></svg>', caption: '图3　分段函数模型图象（如阶梯计费）：折线在不同区间斜率不同。' },
        { type: 'example', label: '例题2', text: '市内通话前 3 分钟收费 0.6 元，之后每分钟 0.2 元（不足 1 分按 1 分计）。通话 t 分钟（t&gt;0）费用 f(t) 的分段式如何写？<br><br><strong>解</strong>：0 &lt; t ≤ 3 时 f(t) = 0.6；t &gt; 3 时 f(t) = 0.6 + 0.2·⌈t−3⌉（⌈ ⌉表示向上取整）。这是典型的<strong>分段函数模型</strong>。' },
        { type: 'heading', text: '四、建模注意点' },
        { type: 'table', headers: ['环节', '易错', '对策'], rows: [['设变量', '变量选错致关系混乱', '选“直接影响结果的量”为因变量'], ['定义域', '忽略实际限制', '结合题意写出 x 的合理范围'], ['求解', '套错函数性质', '先判单调/奇偶再求最值']] },
        { type: 'warn', label: '易错', text: '建模最易漏的是<strong>定义域的实际意义</strong>：求出的“数学最值点”若不在实际允许范围内（如边长、人数、价格必须为正或整数），就要改用<strong>区间端点或单调性</strong>取实际最值。此外分段函数每段的取值范围务必写全、不重叠。' },
        { type: 'tip', label: '记忆', text: '建模口诀：<strong>“设对量、列对式、限对域、用对性”</strong>。拿到应用题先画草图或列变量表，别急着写式子；定义域一定回到“现实能不能取”去检验；求最值时优先考虑二次函数顶点或基本不等式，再核对实际范围。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['建模四步：设变量→列式→求解→作答', '常用模型：一次、二次、分段函数', '定义域必须考虑实际意义', '分段计费用分段函数表达', '最值先看函数性质再核实际范围'] },
        { type: 'reading', text: '函数建模的本质是<strong>“翻译”</strong>：把语言文字翻译成符号关系。训练时建议养成三步习惯——先圈出“已知量”和“所求量”，再找它们之间的运算关系，最后补上“现实给定义域的约束”。熟练后，利润、面积、行程、计费四类问题都能快速对应到相应的函数模型。' }
      ],
      exercises: [
        { type: 'choice', question: '用函数建模解决实际问题的第一步通常是？', options: ['直接列解析式', '设变量明确自变量与因变量', '求最值', '画图象'], answer: '设变量明确自变量与因变量', explanation: '建模流程为：设变量 → 列关系式（含定义域） → 求解 → 作答。第一步是明确自变量与因变量，再据此列式。故选“设变量明确自变量与因变量”。' },
        { type: 'fill', question: '某商品进价 40 元、售价 x 元时日销 (200−2x) 件，日利润 y = ______（填空写出解析式）。', answer: '(x−40)(200−2x)|(x-40)(200-2x)', explanation: '单件利润 (x−40)，销量 (200−2x)，日利润 y = (x−40)(200−2x) = −2x²+280x−8000。故填 (x−40)(200−2x)。' },
        { type: 'choice', question: '下列关于“建模定义域”的说法正确的是？', options: ['定义域只看解析式有意义', '定义域必须考虑实际意义', '定义域越大越好', '定义域可随意取'], answer: '定义域必须考虑实际意义', explanation: '实际问题建模时，定义域除了解析式有意义，还必须符合现实约束（如边长、人数、价格须为正或整数），否则求出的数学最值可能不实际。故选“定义域必须考虑实际意义”。' },
        { type: 'fill', question: '出租车前 3 分钟收费 0.6 元、之后每分钟 0.2 元的计费方式，适合用 ____ 函数模型描述。', answer: '分段', explanation: '不同区间（前3分钟与之后）对应不同计费规则，属于“分档”问题，用分段函数模型描述最为合适。故填“分段”。' },
        { type: 'choice', question: '上题利润函数 y = −2x² + 280x − 8000（40<x<100）的最大利润在何处取得？', options: ['x = 40', 'x = 70', 'x = 100', 'x = 50'], answer: 'x = 70', explanation: '配方 y = −2(x−70)² + 1800，抛物线开口向下，在顶点 x=70 处取得最大值 1800；且 x=70 落在区间 (40,100) 内，故最大利润在 x=70 取得。' }
      ]
    }

  );
})();
