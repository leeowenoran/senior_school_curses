/* ============================================================
 * 高一数学 · 必修 第一册 · 第四章 指数函数与对数函数
 * 第13课时：指数（人教A版 §4.1）
 * 第14课时：指数函数（人教A版 §4.2）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;
  v.points.push(

    /* ---------------- 第13课时 指数 ---------------- */
    {
      id: 'bx1-u8-l1',
      name: '指数',
      chapter: '第四章 指数函数与对数函数 · 4.1',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、n 次方根' },
        { type: 'paragraph', text: '方根是开方运算的逆运算。理解 n 次方根，是学习分数指数幂和根式运算的基础。' },
        { type: 'keypoint', label: '重点·n次方根', text: '若 <strong>xⁿ = a</strong>（n ∈ N*，n &gt; 1），则称 x 为 a 的 <strong>n 次方根</strong>。<br>① n 为<strong>奇数</strong>：任意实数 a 都有唯一 n 次方根，记作 <strong>ⁿ√a</strong>；<br>② n 为<strong>偶数</strong>：a ≥ 0 时有两个互为相反数的方根，正根记作 <strong>ⁿ√a</strong>（a &lt; 0 时无实数方根）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="180" fill="#eef4fc"/><rect x="60" y="60" width="250" height="56" rx="8" fill="#2b5b9e"/><text x="185" y="95" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">奇次根：xⁿ=a 唯一根</text><rect x="370" y="60" width="250" height="56" rx="8" fill="#4a7de0"/><text x="495" y="95" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">偶次根：±ⁿ√a（a≥0）</text><text x="340" y="150" font-size="14" fill="#33536e" text-anchor="middle">偶数次下的方根成对出现，且 ⁿ√a ≥ 0</text></svg>', caption: '图1　n 次方根：奇数次唯一，偶数次成对（a≥0 时）。' },
        { type: 'list', items: ['n 为奇数：a 的 n 次方根唯一，记作 ⁿ√a', 'n 为偶数：a≥0 时有 ±ⁿ√a，且 ⁿ√a≥0', '(ⁿ√a)ⁿ = a', 'n 为偶数时 ⁿ√(aⁿ) = |a|（注意绝对值）'] },
        { type: 'heading', text: '二、分数指数幂' },
        { type: 'keypoint', label: '重点·分数指数幂', text: '规定（<strong>a &gt; 0</strong>，m、n ∈ N*，n &gt; 1）：<br><strong>a^(m/n) = ⁿ√(aᵐ)</strong>，<br><strong>a^(−m/n) = 1 / a^(m/n)</strong>。<br>这样根式都可写成<strong>分数指数幂</strong>，运算统一为指数运算。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="170" fill="#eef4fc"/><rect x="60" y="55" width="260" height="52" rx="8" fill="#2b5b9e"/><text x="190" y="88" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">ⁿ√(aᵐ)</text><text x="345" y="88" font-size="22" fill="#2b5b9e" text-anchor="middle">⇔</text><rect x="380" y="55" width="240" height="52" rx="8" fill="#4a7de0"/><text x="500" y="88" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">a^(m/n)</text><text x="340" y="140" font-size="14" fill="#33536e" text-anchor="middle">根式与分数指数幂等价，运算更方便</text></svg>', caption: '图2　根式 ⁿ√(aᵐ) 与分数指数幂 a^(m/n) 等价互化。' },
        { type: 'example', label: '例题1', text: '把下列根式写成分数指数幂：√a = a^(1/2)；³√(a²) = a^(2/3)；1/√a = a^(−1/2)。<br><br><strong>解</strong>：直接套用 a^(m/n) = ⁿ√(aᵐ)：平方根对应 1/2 次，立方根对应 1/3 次，分母作根指数、分子作幂次。' },
        { type: 'heading', text: '三、有理数指数幂的运算性质' },
        { type: 'keypoint', label: '重点·运算律', text: '设 a &gt; 0，b &gt; 0，r、s 为有理数：<br>① <strong>aʳ · aˢ = a^(r+s)</strong>（同底数相乘，指数相加）；<br>② <strong>(aʳ)ˢ = a^(rs)</strong>（幂的乘方，指数相乘）；<br>③ <strong>(ab)ʳ = aʳ bʳ</strong>（积的乘方，分配到底数）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="170" fill="#eef4fc"/><rect x="50" y="55" width="180" height="52" rx="8" fill="#2b5b9e"/><text x="140" y="88" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">aʳ·aˢ=a^(r+s)</text><rect x="250" y="55" width="180" height="52" rx="8" fill="#4a7de0"/><text x="340" y="88" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">(aʳ)ˢ=a^(rs)</text><rect x="450" y="55" width="180" height="52" rx="8" fill="#5a7a2a"/><text x="540" y="88" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">(ab)ʳ=aʳbʳ</text><text x="340" y="140" font-size="14" fill="#33536e" text-anchor="middle">三条运算律是化简指数式的基石</text></svg>', caption: '图3　有理数指数幂的三个基本运算性质。' },
        { type: 'example', label: '例题2', text: '计算 a^(1/2) · a^(1/3) ÷ a^(1/6)（a &gt; 0）。<br><br><strong>解</strong>：a^(1/2 + 1/3 − 1/6) = a^((3+2−1)/6) = a^(4/6) = a^(2/3)。' },
        { type: 'heading', text: '四、指数类型对照' },
        { type: 'table', headers: ['指数形式', '含义', '示例'], rows: [['整数指数', 'aⁿ（n∈Z）', 'a³, a⁻²'], ['分数指数', 'a^(m/n) = ⁿ√(aᵐ)', 'a^(1/2)=√a'], ['无理数指数', '由有理数指数逼近定义', 'a^√2']] },
        { type: 'warn', label: '易错', text: '两类高频失误：①<strong>忽略 a &gt; 0 前提</strong>，分数指数与运算律只在底数正时无条件成立；②<strong>偶次根式丢绝对值</strong>，如 ⁿ√(aⁿ)（n 偶）等于 |a| 而非 a，负数时会错。运算时先把所有根式化为分数指数，统一用指数律处理最稳妥。' },
        { type: 'tip', label: '记忆', text: '根式运算的万能办法：<strong>“先化分数指数，再用指数律”</strong>。看到 √ 或 ⁿ√ 就改写成 a^(m/n)，所有乘除、乘方都变成指数加减乘，比直接套根式公式不易错。牢记偶数次根式结果非负、必要时加 |a|。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['xⁿ=a 的解叫 n 次方根（奇唯一、偶成对）', 'a^(m/n)=ⁿ√(aᵐ)，负指数表示倒数', '运算律：aʳaˢ=a^(r+s)、(aʳ)ˢ=a^(rs)、(ab)ʳ=aʳbʳ', '所有根式优先化分数指数再算', '偶数次根式注意绝对值与非负性'] },
        { type: 'reading', text: '无理数指数幂（如 a^√2）本身没有简单的“开方”解释，它的严格定义是<strong>用有理数指数幂去逼近</strong>：取一串越来越接近 √2 的有理数 rₙ，用 a^(rₙ) 的极限来定义 a^√2。这一思路体现了高中数学“用已知逼近未知”的重要思想，也为后续学习实数指数函数在严格意义上的定义打下基础。' }
      ],
      exercises: [
        { type: 'choice', question: '⁴√(16) 的值等于？', options: ['2', '−2', '±2', '4'], answer: '2', explanation: '⁴√ 表示四次算术根，结果非负。因 2⁴ = 16，故 ⁴√(16) = 2（不是 ±2，偶次算术根只取非负值）。' },
        { type: 'fill', question: '把 ³√(a²) 写成分数指数幂的形式为 ____。', answer: 'a^(2/3)|a^(2/3)', explanation: '由 a^(m/n) = ⁿ√(aᵐ)，立方根对应分母 3、幂次 2 作分子，故 ³√(a²) = a^(2/3)。' },
        { type: 'choice', question: '下列各式运算正确的是（a>0）？', options: ['a^(1/2)·a^(1/3)=a^(1/6)', 'a^(1/2)·a^(1/3)=a^(5/6)', '(a²)³=a^5', 'a⁻¹=−a'], answer: 'a^(1/2)·a^(1/3)=a^(5/6)', explanation: '同底数相乘指数相加：1/2+1/3=5/6，故 a^(1/2)·a^(1/3)=a^(5/6)，B 正确。A 错（应为 5/6）；(a²)³=a^6 而非 a^5；a⁻¹=1/a 而非 −a。' },
        { type: 'fill', question: '当 n 为偶数时，ⁿ√(aⁿ) = ____（用含 a 的符号表示）。', answer: '|a|', explanation: '偶次算术根结果非负，而 a 可能为负，故 ⁿ√(aⁿ) = |a|（不是 a）。例如 ²√((-3)²)=√9=3=|−3|。' },
        { type: 'choice', question: '关于分数指数幂的前提，正确的是？', options: ['a 可为任意实数', '需 a > 0', '需 a ≠ 0', '无需前提'], answer: '需 a > 0', explanation: '分数指数幂 a^(m/n) 与运算律的无条件成立都要求底数 a > 0（保证偶次根有意义且运算封闭）。故前提是 a > 0。' }
      ]
    },

    /* ---------------- 第14课时 指数函数 ---------------- */
    {
      id: 'bx1-u8-l2',
      name: '指数函数',
      chapter: '第四章 指数函数与对数函数 · 4.2',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、指数函数的定义' },
        { type: 'paragraph', text: '指数函数是描述“爆炸式增长”与“指数衰减”的基本模型，在复利、人口增长、放射性衰变中广泛应用。' },
        { type: 'keypoint', label: '重点·定义', text: '形如 <strong>y = aˣ</strong>（<strong>a &gt; 0 且 a ≠ 1</strong>）的函数叫<strong>指数函数</strong>。注意：<strong>底数是常数 a，指数是自变量 x</strong>（与幂函数 y = xᵃ 恰好相反）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><path d="M120 170 Q300 170 540 50" fill="none" stroke="#2b5b9e" stroke-width="3"/><path d="M120 60 Q330 170 540 170" fill="none" stroke="#e05d44" stroke-width="3"/><line x1="120" y1="110" x2="560" y2="110" stroke="#999" stroke-dasharray="5,4"/><text x="430" y="70" font-size="14" fill="#2b5b9e" font-weight="bold">a&gt;1 递增</text><text x="300" y="160" font-size="14" fill="#c0392b" font-weight="bold">0&lt;a&lt;1 递减</text></svg>', caption: '图1　指数函数两种形态：a&gt;1 上升，0&lt;a&lt;1 下降，都过 (0,1)。' },
        { type: 'list', items: ['定义域：R（全体实数）', '值域：(0, +∞)（恒正）', '恒过点 (0, 1)，因为 a⁰ = 1', 'a>1 递增；0<a<1 递减'] },
        { type: 'heading', text: '二、图象与性质' },
        { type: 'keypoint', label: '重点·性质', text: '① <strong>定义域 R，值域 (0, +∞)</strong>；<br>② <strong>恒过点 (0,1)</strong>；<br>③ a &gt; 1 时<strong>单调递增</strong>，0 &lt; a &lt; 1 时<strong>单调递减</strong>；<br>④ 图象始终在 <strong>x 轴上方</strong>，以 x 轴为<strong>渐近线</strong>（x→−∞ 时趋近 0，a&gt;1 情形）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="170" fill="#eef4fc"/><rect x="50" y="55" width="270" height="52" rx="8" fill="#2b5b9e"/><text x="185" y="88" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">a&gt;1：定义域R,值域(0,+∞)</text><rect x="360" y="55" width="270" height="52" rx="8" fill="#4a7de0"/><text x="495" y="88" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">恒过(0,1)，x轴为渐近线</text><text x="340" y="140" font-size="14" fill="#33536e" text-anchor="middle">无论 a 取何值，图象都不过 x 轴下方</text></svg>', caption: '图2　指数函数的共性：值域正、过 (0,1)、以 x 轴为渐近线。' },
        { type: 'example', label: '例题1', text: '比较 2^0.5 与 2^0.3 的大小。<br><br><strong>解</strong>：底数 a = 2 &gt; 1，指数函数 y = 2ˣ 单调递增。因 0.5 &gt; 0.3，故 <strong>2^0.5 &gt; 2^0.3</strong>。' },
        { type: 'heading', text: '三、简单应用' },
        { type: 'keypoint', label: '重点·应用', text: '指数函数的“爆炸式增长”使它在建模中常见：<br>① <strong>复利</strong>：本金 P，年利率 r，t 年后 A = P(1+r)ᵗ；<br>② <strong>衰减</strong>：放射性物质剩余量 M = M₀·(1/2)^(t/T)（T 为半衰期）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="170" fill="#eef4fc"/><path d="M100 150 Q260 150 500 50" fill="none" stroke="#2b5b9e" stroke-width="3"/><text x="300" y="40" font-size="15" fill="#2b5b9e" font-weight="bold" text-anchor="middle">指数增长曲线（越来越陡）</text><text x="340" y="160" font-size="14" fill="#33536e" text-anchor="middle">初期平缓、后期急剧上升，是“指数爆发”的特征</text></svg>', caption: '图3　指数增长曲线：初期平缓、后期急剧上升。' },
        { type: 'example', label: '例题2', text: '求 f(x) = 2ˣ 的定义域与值域。<br><br><strong>解</strong>：指数对任意实数 x 都有意义，定义域 <strong>R</strong>；又 2ˣ &gt; 0 恒成立，值域 <strong>(0, +∞)</strong>。' },
        { type: 'heading', text: '四、两种情形对照' },
        { type: 'table', headers: ['性质', 'a > 1', '0 < a < 1'], rows: [['单调性', '递增', '递减'], ['过点', '(0,1)', '(0,1)'], ['值域', '(0,+∞)', '(0,+∞)'], ['渐近线', 'x 轴（x→−∞）', 'x 轴（x→+∞）']] },
        { type: 'warn', label: '易错', text: '三大失误：①<strong>弄错底数与指数位置</strong>，把 y = aˣ 与幂函数 y = xᵃ 混淆；②<strong>误以为图象会穿过 x 轴</strong>，实际值域恒正、只能无限逼近；③<strong>比较底数不同的幂</strong>时直接比指数，应先化同底或借助中间值（如 1）。' },
        { type: 'tip', label: '记忆', text: '判指数函数图象，先看 <strong>a 与 1 的大小</strong>：a&gt;1 上升、0&lt;a&lt;1 下降；都过 (0,1)、都在 x 轴上方。比较幂大小时<strong>优先化同底</strong>，再利用单调性；底不同则用“1”或常用值作桥梁。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['指数函数 y = aˣ（a>0,a≠1）', '定义域 R，值域 (0,+∞)', '恒过 (0,1)，以 x 轴为渐近线', 'a>1 增，0<a<1 减', '别与幂函数 y=xᵃ 的位置混淆'] },
        { type: 'reading', text: '指数函数与直线、幂函数相比，最震撼的特征是<strong>增长速率</strong>：当 x 足够大时，指数函数 y=aˣ（a>1）会远远超过任何多项式函数（如 x¹⁰⁰）。这就是“指数爆炸”——它提醒我们，许多看似缓慢的变化（如病毒传播、复利积累）在指数规律下会迅速失控或膨胀，因此理解和预测指数趋势极具现实意义。' }
      ],
      exercises: [
        { type: 'choice', question: '下列函数中是指数函数的是？', options: ['y = x²', 'y = 2ˣ', 'y = xˣ', 'y = 2x'], answer: 'y = 2ˣ', explanation: '指数函数形如 y = aˣ（a>0,a≠1），底数为常数、指数为自变量。y=2ˣ 符合。y=x² 是幂函数，y=xˣ 底数也含 x，y=2x 是正比例函数。故选 y=2ˣ。' },
        { type: 'fill', question: '指数函数 y = aˣ（a>0,a≠1）恒过的定点坐标是 ____。', answer: '(0,1)', explanation: '对任意 a>0,a≠1，当 x=0 时 y=a⁰=1，故指数函数恒过定点 (0,1)。' },
        { type: 'choice', question: '关于 y = (1/2)ˣ，正确的是？', options: ['在 R 上递增', '在 R 上递减', '值域为 R', '过点 (0,0)'], answer: '在 R 上递减', explanation: '底数 a=1/2，满足 0<a<1，故 y=(1/2)ˣ 在 R 上单调递减；值域为 (0,+∞)（恒正），且过 (0,1) 而非 (0,0)。故选“在 R 上递减”。' },
        { type: 'fill', question: '指数函数 y = 3ˣ 的值域是 ____（用区间表示）。', answer: '(0,+∞)|(0, +∞)', explanation: '对任意实数 x，3ˣ > 0 恒成立，且可取到任意正数，故值域为 (0,+∞)。' },
        { type: 'choice', question: '比较 3^0.2 与 3^0.5 的大小，结果为？', options: ['3^0.2 > 3^0.5', '3^0.2 < 3^0.5', '两者相等', '无法比较'], answer: '3^0.2 < 3^0.5', explanation: '底数 a=3>1，指数函数 y=3ˣ 单调递增。因 0.2<0.5，故 3^0.2 < 3^0.5。' }
      ]
    }

  );
})();
