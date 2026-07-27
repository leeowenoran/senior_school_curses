/* ============================================================
 * 高一数学 · 必修 第二册 · 第七章 复数
 * 第1课时：复数的概念（人教A版 §7.1）
 * 第2课时：复数的四则运算（人教A版 §7.2）
 * 数据注入：math.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx2');
  if (!v) return;
  v.points.push(

    /* ---------------- 第1课时 复数的概念 ---------------- */
    {
      id: 'bx2-u3-l1',
      name: '复数的概念',
      chapter: '第七章 复数 · 7.1',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、数系的扩充（从自然数到复数）' },
        { type: 'paragraph', text: '人类对数的认识是逐步扩充的：先有用于计数的自然数，为表示相反意义的量引入负整数得到整数，为刻画分割引入分数得到有理数，为表示开方开不尽等引入无理数得到实数。实数仍不够用——例如方程 x² = −1 在实数中无解，于是引入虚数单位，把数系进一步扩充到复数。' },
        { type: 'keypoint', label: '重点·数系的扩充', text: '数系按包含关系逐步扩充：<strong>自然数集 N ⊂ 整数集 Z ⊂ 有理数集 Q ⊂ 实数集 R ⊂ 复数集 C</strong>。每扩充一步都是为了解决上一步“不够用”的问题；引入虚数单位 i 后，方程 x² = −1 才有了解 x = ±i。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="150" fill="#eef4fc"/><text x="340" y="28" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">数系的扩充：N ⊂ Z ⊂ Q ⊂ R ⊂ C</text><rect x="25" y="55" width="90" height="50" rx="8" fill="#ffffff" stroke="#2b5b9e" stroke-width="2.5"/><text x="70" y="86" font-size="18" fill="#2b5b9e" font-weight="bold" text-anchor="middle">N</text><rect x="160" y="55" width="90" height="50" rx="8" fill="#d4e4f8" stroke="#2b5b9e" stroke-width="2.5"/><text x="205" y="86" font-size="18" fill="#2b5b9e" font-weight="bold" text-anchor="middle">Z</text><rect x="295" y="55" width="90" height="50" rx="8" fill="#a9c8ef" stroke="#2b5b9e" stroke-width="2.5"/><text x="340" y="86" font-size="18" fill="#1a3a5c" font-weight="bold" text-anchor="middle">Q</text><rect x="430" y="55" width="90" height="50" rx="8" fill="#7eb0e6" stroke="#2b5b9e" stroke-width="2.5"/><text x="475" y="86" font-size="18" fill="#1a3a5c" font-weight="bold" text-anchor="middle">R</text><rect x="565" y="55" width="90" height="50" rx="8" fill="#e05d44" stroke="#c0392b" stroke-width="2.5"/><text x="610" y="86" font-size="18" fill="#ffffff" font-weight="bold" text-anchor="middle">C</text><text x="137" y="86" font-size="22" fill="#2b5b9e" font-weight="bold" text-anchor="middle">⊂</text><text x="272" y="86" font-size="22" fill="#2b5b9e" font-weight="bold" text-anchor="middle">⊂</text><text x="407" y="86" font-size="22" fill="#2b5b9e" font-weight="bold" text-anchor="middle">⊂</text><text x="542" y="86" font-size="22" fill="#2b5b9e" font-weight="bold" text-anchor="middle">⊂</text><text x="340" y="135" font-size="14" fill="#33536e" text-anchor="middle">复数集 C 最大，实数集 R 是 C 的真子集，解决了“负数不能开方”的问题</text></svg>', caption: '图1　数系扩充层次：N ⊂ Z ⊂ Q ⊂ R ⊂ C，每一步都补足了上一步的不足。' },
        { type: 'list', items: ['N（自然数）：0, 1, 2, 3, …', 'Z（整数）：在 N 基础上加入负整数', 'Q（有理数）：整数与分数（含无限循环小数）', 'R（实数）：有理数与无理数（如 √2、π）', 'C（复数）：形如 a+bi（a,b∈R）的数，R 是 C 的真子集'] },
        { type: 'heading', text: '二、虚数单位 i' },
        { type: 'keypoint', label: '重点·虚数单位 i', text: '规定<strong>虚数单位 i 满足 i² = −1</strong>。由此可得 i 的整数次幂呈周期循环：<strong>i¹ = i，i² = −1，i³ = −i，i⁴ = 1</strong>，之后每 4 次一循环。注意 i 不是实数，是引入的新“数”，实数运算律在含 i 的式子中仍可用，唯独记住 i² = −1 即可化简。' },
        { type: 'example', label: '例题1', text: '化简 i²⁰²³。<br><br><strong>解</strong>：因为 i 的幂以 4 为周期，2023 ÷ 4 = 505 余 3，所以 i²⁰²³ = i³ = <strong>−i</strong>。' },
        { type: 'heading', text: '三、复数的定义与结构' },
        { type: 'keypoint', label: '重点·复数的定义', text: '形如 <strong>z = a + bi（a, b ∈ R）</strong> 的数叫做复数。其中 <strong>a 叫做实部</strong>（记作 Re z），<strong>b 叫做虚部</strong>（记作 Im z，注意虚部 b 是实数，不带 i）。当 b = 0 时 z = a 就是实数；一般情形下复数由“实部 + 虚部×i”唯一确定。' },
        { type: 'list', items: ['实部 a：复数 a+bi 中的实数部分 a', '虚部 b：复数 a+bi 中的实数系数 b（不是 bi）', '复数 z = a+bi 由有序实数对 (a, b) 唯一确定', '两个复数相等当且仅当实部、虚部分别相等'] },
        { type: 'heading', text: '四、复数的分类' },
        { type: 'keypoint', label: '重点·复数的分类', text: '按虚部 b 是否为零分类：<strong>b = 0 时为实数</strong>；<strong>b ≠ 0 时为虚数</strong>；在虚数中，<strong>a = 0 且 b ≠ 0 时为纯虚数</strong>。即：实数 ⊂ 复数，虚数 ⊂ 复数，纯虚数 ⊂ 虚数。判断时先看 b 是否为 0，再看 a 是否为 0。' },
        { type: 'table', headers: ['类别', '条件', '例子'], rows: [['实数', 'b = 0', '3，−2，0，√5'], ['虚数', 'b ≠ 0', '2+i，−3i'], ['纯虚数', 'a = 0 且 b ≠ 0', '5i，−2i']] },
        { type: 'heading', text: '五、复数相等' },
        { type: 'keypoint', label: '重点·复数相等', text: '设 a, b, c, d 都是实数，则 <strong>a + bi = c + di ⇔ a = c 且 b = d</strong>。这就是复数相等的充要条件。特别地，若 a+bi = 0，则 a = 0 且 b = 0。利用此性质，凡遇复数等式，都把实部、虚部分别对应列方程求解。' },
        { type: 'example', label: '例题2', text: '已知 (2x−1) + (3y+2)i = 5 − 4i，求实数 x, y。<br><br><strong>解</strong>：由复数相等，实部相等、虚部分别相等，得 2x−1 = 5 且 3y+2 = −4。解得 <strong>x = 3，y = −2</strong>。' },
        { type: 'heading', text: '六、共轭复数' },
        { type: 'keypoint', label: '重点·共轭复数', text: '复数 <strong>z = a + bi 与 a − bi 互为共轭复数</strong>，后者记作 z 的共轭（常记作 z 上方加横线）。共轭复数实部相同、虚部互为相反数；实数的共轭是它自己。共轭运算满足：<strong>z + 共轭 = 2a（实数），z · 共轭 = a² + b² = |z|²（非负实数）</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="28" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">共轭复数：z = a + bi 与 a − bi 关于实轴对称</text><line x1="70" y1="160" x2="620" y2="160" stroke="#2b5b9e" stroke-width="2.5"/><line x1="340" y1="40" x2="340" y2="220" stroke="#2b5b9e" stroke-width="2.5"/><circle cx="470" cy="100" r="6" fill="#e05d44"/><circle cx="470" cy="220" r="6" fill="#4a7de0"/><text x="482" y="95" font-size="16" fill="#c0392b" font-weight="bold" text-anchor="start">z = a + bi</text><text x="482" y="225" font-size="16" fill="#2b5b9e" font-weight="bold" text-anchor="start">a − bi（共轭）</text><text x="630" y="180" font-size="15" fill="#2b5b9e" font-weight="bold" text-anchor="middle">实轴</text><text x="320" y="55" font-size="15" fill="#2b5b9e" font-weight="bold" text-anchor="middle">虚轴</text><text x="340" y="245" font-size="14" fill="#33536e" text-anchor="middle">共轭复数实部相同、虚部互为相反数，几何上关于实轴成镜像</text></svg>', caption: '图2　共轭复数关于实轴对称：z 与它的共轭像照镜子一样分布在实轴两侧。' },
        { type: 'heading', text: '七、复数的模' },
        { type: 'keypoint', label: '重点·复数的模', text: '复数 z = a + bi 的<strong>模</strong>定义为 <strong>|z| = |a + bi| = √(a² + b²)</strong>，即它对应点到原点的距离。模一定是非负实数；当 z = 0 时模为 0，反之模为 0 当且仅当 z = 0。模具有性质：<strong>|z| = |共轭 z|，|z₁z₂| = |z₁||z₂|</strong>。' },
        { type: 'example', label: '例题3', text: '求复数 z = 3 − 4i 的模。<br><br><strong>解</strong>：由模公式，|z| = √(3² + (−4)²) = √(9 + 16) = √25 = <strong>5</strong>。' },
        { type: 'heading', text: '八、复数的几何意义（复平面）' },
        { type: 'keypoint', label: '重点·几何意义', text: '建立直角坐标系，横轴为<strong>实轴</strong>（单位 1）、纵轴为<strong>虚轴</strong>（单位 i），这样的平面叫<strong>复平面</strong>。复数 z = a + bi 与复平面内点 <strong>Z(a, b)</strong> 一一对应，也与以原点 O 为起点、Z 为终点的<strong>向量 OZ</strong> 一一对应。因此复数的加、减也有直观的向量几何意义。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="28" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">复平面：复数 z = a + bi 与 点 Z(a, b) 一一对应</text><line x1="70" y1="240" x2="620" y2="240" stroke="#2b5b9e" stroke-width="2.5"/><line x1="120" y1="40" x2="120" y2="260" stroke="#2b5b9e" stroke-width="2.5"/><text x="615" y="262" font-size="15" fill="#2b5b9e" font-weight="bold" text-anchor="middle">实轴（x轴）</text><text x="95" y="55" font-size="15" fill="#2b5b9e" font-weight="bold" text-anchor="middle">虚轴（y轴）</text><circle cx="380" cy="120" r="6" fill="#e05d44"/><line x1="120" y1="240" x2="380" y2="120" stroke="#4a7de0" stroke-width="2" stroke-dasharray="5,4"/><text x="250" y="200" font-size="14" fill="#33536e" text-anchor="middle">|z|</text><line x1="380" y1="120" x2="380" y2="240" stroke="#5a7a2a" stroke-width="2" stroke-dasharray="4,4"/><text x="392" y="112" font-size="16" fill="#c0392b" font-weight="bold" text-anchor="start">Z(a, b)</text><text x="392" y="135" font-size="14" fill="#33536e" text-anchor="start">实部 a（横）</text><text x="210" y="255" font-size="14" fill="#33536e" text-anchor="middle">虚部 b（纵）</text><text x="340" y="288" font-size="14" fill="#33536e" text-anchor="middle">以原点为起点的向量 OZ 也与 z 一一对应，模 |z| 即向量长度</text></svg>', caption: '图3　复平面点对应：横轴实部、纵轴虚部，点 Z(a,b) 与复数 z=a+bi 一一对应。' },
        { type: 'warn', label: '易错', text: '高频失误：①<strong>把虚部写成 bi</strong>，虚部是实数 b，不是 bi；②<strong>纯虚数条件记反</strong>，纯虚数要求 a = 0 且 b ≠ 0，若只写 a = 0 会漏掉 b ≠ 0（b = 0 时是 0，是实数）；③<strong>复数相等忽略实数前提</strong>，a+bi = c+di ⇒ a=c 且 b=d 仅在 a,b,c,d 均为实数时成立；④<strong>模与绝对值混淆</strong>，复数模是距离 √(a²+b²)，不是简单去符号。' },
        { type: 'tip', label: '记忆', text: '判断复数类型，<strong>先抓虚部 b</strong>：b = 0 是实数，b ≠ 0 是虚数，再补一句“a 是否为 0”区分纯虚数。遇到复数等式先写“实部=实部、虚部=虚部”列方程组。复数与复平面点、向量一一对应，<strong>几何与代数双线并行</strong>，画图往往比死算更直观。' },
        { type: 'heading', text: '九、本课小结' },
        { type: 'list', items: ['数系：N⊂Z⊂Q⊂R⊂C，i² = −1', '复数 z = a+bi，a 实部、b 虚部', '分类：b=0 实数；b≠0 虚数；a=0 且 b≠0 纯虚数', '相等：a+bi=c+di ⇔ a=c 且 b=d', '共轭：a+bi 与 a−bi；模 |z|=√(a²+b²)', '几何：复数 ↔ 复平面点 Z(a,b) ↔ 向量 OZ'] }
      ],
      exercises: [
        { type: 'choice', question: '已知复数 z = 3 + 4i，则其虚部为？', options: ['3', '4', '4i', '3+4i'], answer: '4', explanation: '复数 z = a+bi 的虚部是指实数 b，而不是带 i 的 bi。本题中 a=3、b=4，所以虚部为 4。实部是前面的 3；4i 只是虚数部分，并非虚部；3+4i 表示整个复数，这三项都不是题目所问的虚部。' },
        { type: 'fill', question: '复数 z = 2 − 5i 的实部是 ____。', answer: '2', explanation: '复数一般写成 a+bi 的形式，其中 a 称为实部，b 称为虚部，二者都是不带 i 的实数。题目给出 z = 2 − 5i，对应 a=2、b=−5，因此实部就是 2。很多同学容易把负号一起写进实部，其实实部只看实数部分 a，与虚部系数无关。' },
        { type: 'choice', question: '下列命题正确的是？', options: ['i² = 1', 'i² = −1', 'i = √−1 且 i 为实数', 'i⁴ = −1'], answer: 'i² = −1', explanation: '虚数单位 i 的核心规定就是 i² = −1，这是整个复数理论的基础。由 i²=−1 可以推出 i⁴=(i²)²=1，所以 i⁴=−1 是错误的；i 是引入的新数而不是实数，因此说 i 为实数也不对；i²=1 直接违背定义。所以只有 i²=−1 是正确的命题。' },
        { type: 'fill', question: '若复数 a+bi 与 c+di 相等（a,b,c,d∈R），则 a = ____ 且 b = ____。', answer: 'c 且 b=d', explanation: '两个复数相等的条件是实部与实部相等、虚部与虚部相等，即 a=c 且 b=d，这是复数相等的充要条件。在解题时，凡是遇到形如 a+bi = c+di 的等式，都可以把实部和虚部分别对应，列出方程组来求解未知参数。这一性质是复数方程与实数方程联系的桥梁。' },
        { type: 'choice', question: '复数 5i 属于下列哪一类？', options: ['实数', '纯虚数', '虚数但不是纯虚数', '既不是实数也不是虚数'], answer: '纯虚数', explanation: '复数 z = a+bi 的分类要看虚部 b。当 a=0 且 b≠0 时为纯虚数。题目中的 5i 可以写成 0+5i，实部 a=0，虚部 b=5≠0，完全符合纯虚数的条件，所以它是纯虚数。实数要求 b=0，虚数只要求 b≠0，纯虚数是虚数中实部为 0 的特殊情形。' }
      ]
    },

    /* ---------------- 第2课时 复数的四则运算 ---------------- */
    {
      id: 'bx2-u3-l2',
      name: '复数的四则运算',
      chapter: '第七章 复数 · 7.2',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、复数的加法' },
        { type: 'paragraph', text: '复数的加减法是最自然的运算：把实部与实部、虚部与虚部分别相加减，i 当作“字母”处理，最后用 i² = −1 化简（加减中通常不会出现 i²，因为不含相乘）。' },
        { type: 'keypoint', label: '重点·加法法则', text: '设 z₁ = a+bi，z₂ = c+di，则 <strong>z₁ + z₂ = (a+c) + (b+d)i</strong>。即实部相加、虚部相加。复数加法满足交换律与结合律，几何上对应向量的平行四边形法则。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="28" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">复数加法的几何意义：向量加法的平行四边形法则</text><line x1="90" y1="200" x2="620" y2="200" stroke="#2b5b9e" stroke-width="2.5"/><line x1="140" y1="40" x2="140" y2="240" stroke="#2b5b9e" stroke-width="2.5"/><line x1="140" y1="200" x2="330" y2="110" stroke="#e05d44" stroke-width="3"/><line x1="140" y1="200" x2="430" y2="150" stroke="#4a7de0" stroke-width="3"/><line x1="330" y1="110" x2="620" y2="50" stroke="#4a7de0" stroke-width="2" stroke-dasharray="5,4"/><line x1="430" y1="150" x2="620" y2="50" stroke="#e05d44" stroke-width="2" stroke-dasharray="5,4"/><line x1="140" y1="200" x2="620" y2="50" stroke="#5a7a2a" stroke-width="3"/><circle cx="330" cy="110" r="5" fill="#e05d44"/><circle cx="430" cy="150" r="5" fill="#4a7de0"/><circle cx="620" cy="50" r="6" fill="#2b5b9e"/><text x="250" y="160" font-size="14" fill="#c0392b" text-anchor="middle">z₁</text><text x="300" y="190" font-size="14" fill="#2b5b9e" text-anchor="middle">z₂</text><text x="420" y="115" font-size="14" fill="#5a7a2a" text-anchor="middle">z₁ + z₂</text><text x="630" y="55" font-size="15" fill="#2b5b9e" font-weight="bold" text-anchor="middle">实轴</text><text x="120" y="50" font-size="15" fill="#2b5b9e" font-weight="bold" text-anchor="middle">虚轴</text><text x="340" y="262" font-size="14" fill="#33536e" text-anchor="middle">以 z₁、z₂ 为邻边作平行四边形，对角线向量就是 z₁ + z₂</text></svg>', caption: '图1　加法几何意义：以两向量为邻边作平行四边形，对角线即和向量 z₁+z₂。' },
        { type: 'example', label: '例题1', text: '计算 (3+2i) + (1−5i)。<br><br><strong>解</strong>：实部相加 3+1=4，虚部相加 2+(−5)=−3，故结果为 <strong>4 − 3i</strong>。' },
        { type: 'heading', text: '二、复数的减法' },
        { type: 'keypoint', label: '重点·减法法则', text: '复数减法是加法的逆运算：<strong>z₁ − z₂ = (a−c) + (b−d)i</strong>。也可理解为 z₁ + (−z₂)，其中 −z₂ = −c − di。几何上，z₁ − z₂ 对应从 z₂ 的终点指向 z₁ 的终点的向量。' },
        { type: 'list', items: ['减法 = 实部相减、虚部相减', 'z 与它的共轭相减：z − 共轭 = 2bi', '减法的几何意义是“终点差向量”', '加法与减法互为逆运算'] },
        { type: 'example', label: '例题2', text: '计算 (4−i) − (2+3i)。<br><br><strong>解</strong>：实部 4−2=2，虚部 (−1)−3 = −4，故结果为 <strong>2 − 4i</strong>。' },
        { type: 'heading', text: '三、复数的乘法' },
        { type: 'keypoint', label: '重点·乘法法则', text: '设 z₁ = a+bi，z₂ = c+di，则 <strong>z₁z₂ = (ac−bd) + (ad+bc)i</strong>。做法：先按多项式乘法展开，再把 i² 换成 −1 合并。特别地，<strong>(a+bi)(a−bi) = a² + b²</strong>（共轭相乘得实数）。' },
        { type: 'heading', text: '四、复数的除法' },
        { type: 'keypoint', label: '重点·除法法则', text: '除以复数要把分母“实数化”：<strong>(a+bi)/(c+di) = (a+bi)(c−di) / (c²+d²)</strong>。做法是分子分母同乘分母的共轭 c−di，分母化为正实数 c²+d²，再把分子展开成“实部+虚部 i”的形式后分别除以该实数。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">复数除法：分母实数化（分子分母同乘分母的共轭）</text><rect x="60" y="70" width="560" height="60" rx="8" fill="#ffffff" stroke="#4a7de0" stroke-width="2.5"/><text x="340" y="108" font-size="18" fill="#1a3a5c" text-anchor="middle">(a+bi)/(c+di) = (a+bi)(c−di) / (c²+d²)</text><text x="100" y="160" font-size="15" fill="#e05d44" font-weight="bold" text-anchor="start">c−di</text><text x="195" y="160" font-size="15" fill="#33536e" text-anchor="start">：分母 c+di 的共轭</text><text x="420" y="160" font-size="15" fill="#5a7a2a" font-weight="bold" text-anchor="start">c²+d²</text><text x="520" y="160" font-size="15" fill="#33536e" text-anchor="start">：正实数</text><text x="340" y="190" font-size="14" fill="#33536e" text-anchor="middle">乘共轭后分母变为实数，整个式子化为“实数分母 + 复数分子”，再展开即可</text></svg>', caption: '图2　除法实数化：分子分母同乘分母共轭 c−di，分母变为正实数 c²+d²。' },
        { type: 'example', label: '例题3', text: '计算 (1+i)/(1−i)。<br><br><strong>解</strong>：分子分母同乘 1+i（分母的共轭）：<br>[(1+i)(1+i)] / (1²+1²) = (1+2i+i²) / 2 = (1+2i−1)/2 = 2i/2 = <strong>i</strong>。' },
        { type: 'heading', text: '五、共轭复数的运算性质' },
        { type: 'keypoint', label: '重点·共轭性质', text: '共轭运算与四则运算可交换：<strong>共轭(z₁±z₂) = 共轭z₁ ± 共轭z₂</strong>，<strong>共轭(z₁z₂) = 共轭z₁ · 共轭z₂</strong>，<strong>共轭(z₁/z₂) = 共轭z₁ / 共轭z₂</strong>。最常用的是 <strong>z · 共轭z = a² + b² = |z|²</strong>，它正是除法实数化的理论依据。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="180" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">共轭相乘得实数：z · 共轭z = |z|² = a² + b²</text><rect x="80" y="65" width="520" height="55" rx="8" fill="#ffffff" stroke="#4a7de0" stroke-width="2.5"/><text x="340" y="100" font-size="18" fill="#1a3a5c" text-anchor="middle">(a+bi)(a−bi) = a² − (bi)² = a² + b² ≥ 0</text><text x="340" y="150" font-size="14" fill="#33536e" text-anchor="middle">结果恰为非负实数，等于该复数模的平方，这正是除法中“分母实数化”的依据</text></svg>', caption: '图3　共轭相乘：z 与它的共轭相乘必得非负实数 a²+b²，即模的平方。' },
        { type: 'example', label: '例题4', text: '利用共轭相乘计算 (2+3i)(2−3i)。<br><br><strong>解</strong>：由 (a+bi)(a−bi) = a²+b²，取 a=2、b=3，得 2²+3² = 4+9 = <strong>13</strong>（实数）。' },
        { type: 'heading', text: '六、复数范围内的运算律' },
        { type: 'keypoint', label: '重点·运算律', text: '复数集对加、减、乘、除（除数非零）封闭，且<strong>加法与乘法的交换律、结合律、分配律在复数范围内仍然成立</strong>。即：z₁+z₂=z₂+z₁，(z₁z₂)z₃=z₁(z₂z₃)，z₁(z₂+z₃)=z₁z₂+z₁z₃。可放心使用这些律来化简与变形。' },
        { type: 'table', headers: ['运算律', '加法形式', '乘法形式'], rows: [['交换律', 'z₁+z₂ = z₂+z₁', 'z₁z₂ = z₂z₁'], ['结合律', '(z₁+z₂)+z₃ = z₁+(z₂+z₃)', '(z₁z₂)z₃ = z₁(z₂z₃)'], ['分配律', '—', 'z₁(z₂+z₃) = z₁z₂ + z₁z₃']] },
        { type: 'list', items: ['复数加减：实部虚部分别加减', '复数乘法：展开后令 i² = −1', '复数除法：分子分母同乘分母共轭', '运算律与实数一致，可放心使用'] },
        { type: 'heading', text: '七、易错与记忆' },
        { type: 'warn', label: '易错', text: '高频失误：①<strong>除法忘记实数化</strong>，直接“分子分母分别相除”是错的，必须先乘共轭；②<strong>乘法漏掉 i² = −1</strong>，展开后 bi·di = bdi² 要变成 −bd；③<strong>混淆 (a+bi)² 与 a²+b²</strong>，(a+bi)² = a²−b²+2abi，不等于 a²+b²；④<strong>共轭性质用错符号</strong>，共轭(z₁z₂) = 共轭z₁·共轭z₂，但不是 z₁z₂ 的共轭等于各自共轭的和。' },
        { type: 'tip', label: '记忆', text: '四则运算口诀：<strong>加减分实虚，乘法展开换 i²，除法乘共轭实数化</strong>。做除法时牢记“分母 c+di 就配 c−di”，一步把分母变 c²+d²。遇到形如 (a+bi)(a−bi) 立刻想到等于 a²+b²，既能速算又能给除法“分母实数化”提供依据。' },
        { type: 'heading', text: '八、本课小结' },
        { type: 'list', items: ['加法：z₁+z₂=(a+c)+(b+d)i', '减法：z₁−z₂=(a−c)+(b−d)i', '乘法：z₁z₂=(ac−bd)+(ad+bc)i', '除法：乘分母共轭得 (c²+d²) 实数分母', '运算律（交换、结合、分配）在复数范围仍成立'] }
      ],
      exercises: [
        { type: 'choice', question: '计算 (2+3i)+(1−2i) = ?', options: ['3+i', '3+5i', '1+i', '3−i'], answer: '3+i', explanation: '复数相加时，实部与实部相加，虚部与虚部相加，即 (a+bi)+(c+di)=(a+c)+(b+d)i。本题中 (2+3i)+(1−2i)，实部 2+1=3，虚部 3+(−2)=1，结果应为 3+i。注意虚部系数是 3 加 −2 等于 1，不是 5，也不是 −1，因此只有 3+i 正确。' },
        { type: 'fill', question: '计算 (1+i)(1−i) = ____。', answer: '2', explanation: '利用共轭相乘公式 (a+bi)(a−bi)=a²+b²，这里 a=1、b=1，所以 (1+i)(1−i)=1²+1²=2，结果是实数。也可以直接展开：1 − i² = 1 − (−1) = 2。这个结果表明共轭复数相乘总能得到非负实数，也正是复数除法中分母实数化的依据。' },
        { type: 'choice', question: '计算 (1+2i)(3+4i) = ?', options: ['3+10i', '−5+10i', '11+10i', '−5−10i'], answer: '−5+10i', explanation: '按乘法公式 (a+bi)(c+di)=(ac−bd)+(ad+bc)i，取 a=1,b=2,c=3,d=4，则 ac−bd=3−8=−5，ad+bc=4+6=10，所以结果为 −5+10i。也可以直接展开验证：3+4i+6i+8i²=3+10i−8=−5+10i，其余选项要么实部算错，要么虚部算错，均不正确。' },
        { type: 'fill', question: '复数除法中，将分母 c+di 实数化需分子分母同乘 ____。', answer: 'c−di', explanation: '复数除法的分母是复数，要将其化为实数，方法是分子分母同乘分母的共轭复数 c−di，这样分母就变成 c²+d²，是一个正实数，从而把除法转化为乘法与实数除法。因此填空应填 c−di。牢记这一步，复数除法就不会出错。' },
        { type: 'choice', question: '下列关于复数运算律的说法，正确的是？', options: ['复数不满足交换律', '复数范围内加法不满足结合律', '交换律、结合律、分配律在复数范围内仍然成立', '复数不能进行除法运算'], answer: '交换律、结合律、分配律在复数范围内仍然成立', explanation: '复数集对加、减、乘、除（除数非零）都是封闭的，而且加法与乘法的交换律、结合律、分配律在复数范围内仍然成立，这与实数完全一致。前两项说复数不满足这些律显然错误；复数在除数不为零时完全可以做除法，所以最后一项也不对。因此正确说法是复数范围内的运算律仍然成立。' }
      ]
    }

  );
})();
