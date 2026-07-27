/* ============================================================
 * 高三数学 · 高考复习专题 · 解析几何
 * 第2单元：两直线位置关系/距离与对称、圆的方程与直线和圆的位置关系
 * 数据注入：math.zt5.points
 * 严禁改动 data-gz.js
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt5');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 两直线位置关系、距离与对称 ---------------- */
    {
      id: 'zt5-u2-l1',
      name: '两直线位置关系、距离与对称',
      chapter: '解析几何复习 · 三、两直线位置关系、距离与对称',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、两直线的位置关系' },
        { type: 'paragraph', text: '在平面解析几何中，两条直线的位置关系基本分为平行、相交（含垂直）与重合。高考中常以「平行与垂直的判定」「夹角与到角」「距离」「对称」四个考点呈现，其中平行与垂直是最基础、也最容易因斜率不存在而失分的部分。' },
        { type: 'keypoint', label: '重点·平行与垂直（斜率存在）', text: '<strong>斜率都存在时</strong>：两直线 l₁、l₂ 平行 ⇔ k₁ = k₂ 且 b₁ ≠ b₂（或 A₁/A₂ = B₁/B₂ ≠ C₁/C₂）；两直线垂直 ⇔ <strong>k₁·k₂ = -1</strong>（或 A₁A₂ + B₁B₂ = 0）。用一般式系数判断垂直无需讨论斜率是否存在，适用性更广。' },
        { type: 'keypoint', label: '重点·斜率不存在的情形', text: '当直线<strong>斜率不存在</strong>（即直线垂直于 x 轴，方程为 x = a）时：<br>① 另一条直线也垂直于 x 轴（x = b，且 b ≠ a）则两直线<strong>平行</strong>；<br>② 另一条直线平行于 x 轴（y = c，斜率为 0）则两直线<strong>垂直</strong>。<br>此时 k₁·k₂ = -1 不再适用，应改用 <strong>A₁A₂ + B₁B₂ = 0</strong> 判断垂直。' },
        { type: 'list', items: ['平行判断优先用 A₁/A₂ = B₁/B₂ ≠ C₁/C₂，可避开斜率不存在的讨论', '垂直判断优先用 A₁A₂ + B₁B₂ = 0，同样无需讨论斜率', '斜率相等只是平行的必要条件，还必须排除两直线重合（截距不等）', '一条竖直、一条水平时直接判定垂直，不必套用斜率乘积'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图1　两直线的平行与垂直</text><line x1="40" y1="270" x2="660" y2="270" stroke="#33536e" stroke-width="1.5"/><line x1="60" y1="290" x2="60" y2="50" stroke="#33536e" stroke-width="1.5"/><line x1="100" y1="230" x2="300" y2="140" stroke="#2b5b9e" stroke-width="3"/><line x1="120" y1="250" x2="320" y2="160" stroke="#4a7de0" stroke-width="3"/><text x="110" y="255" font-size="15" fill="#2b5b9e">l₁</text><text x="330" y="170" font-size="15" fill="#2b5b9e">l₂ ∥ l₁</text><line x1="400" y1="200" x2="620" y2="200" stroke="#2b5b9e" stroke-width="3"/><line x1="510" y1="280" x2="510" y2="90" stroke="#c0392b" stroke-width="3"/><polyline points="510,200 510,175 485,175" fill="none" stroke="#c0392b" stroke-width="2"/><text x="400" y="225" font-size="15" fill="#2b5b9e">l₃（水平，k=0）</text><text x="525" y="110" font-size="15" fill="#c0392b">l₄（竖直，斜率不存在）</text><text x="20" y="290" font-size="14" fill="#33536e">左：斜率相等且截距不等 ⇒ 平行；右：水平线与竖直线 ⇒ 垂直（斜率不存在情形）</text></svg>', caption: '图1　斜率相等（左）对应平行；水平线与竖直线（右）对应垂直，后者斜率不存在。' },
        { type: 'heading', text: '二、夹角与到角' },
        { type: 'keypoint', label: '重点·夹角公式', text: '设两直线斜率分别为 k₁、k₂，它们所成的<strong>夹角</strong> θ（取锐角或直角，0 ≤ θ ≤ π/2）满足：<br><strong>tanθ = |(k₂ - k₁) / (1 + k₁k₂)|</strong>。<br>当 1 + k₁k₂ = 0 时两直线垂直，θ = π/2。若斜率不存在，可先化为一般式再用方向向量求夹角。' },
        { type: 'keypoint', label: '重点·到角公式（有方向）', text: '<strong>到角</strong>是有方向的角：直线 l₁ 到 l₂ 的角 φ 是把 l₁ 按逆时针方向旋转到与 l₂ 重合所转过的角（0 ≤ φ < π），公式为 <strong>tanφ = (k₂ - k₁) / (1 + k₁k₂)</strong>（不带绝对值）。到角与夹角不同：夹角取绝对值是锐角，到角有方向、可为钝角。' },
        { type: 'warn', label: '易错·夹角 ≠ 到角', text: '夹角公式分子带<strong>绝对值</strong>，结果恒为锐角或直角；到角公式分子<strong>不带绝对值</strong>，有方向、可能得到钝角。解题时务必看清问的是「夹角」还是「到角（l₁ 到 l₂）」，二者不能混用。' },
        { type: 'example', label: '例题1', text: '已知点 P(1, 2)，直线 l: 2x - 3y + 1 = 0。<br>（1）求过点 P 且与 l 平行的直线方程；<br>（2）求过点 P 且与 l 垂直的直线方程。<br><br><strong>解</strong>：直线 l 可化为 y = (2/3)x + 1/3，其斜率 k = 2/3。<br>（1）与 l 平行的直线斜率也为 2/3，由点斜式得 y - 2 = (2/3)(x - 1)，整理为 <strong>2x - 3y + 4 = 0</strong>。<br>（2）与 l 垂直的直线斜率 k′ = -1/k = -3/2，由点斜式得 y - 2 = (-3/2)(x - 1)，整理为 <strong>3x + 2y - 7 = 0</strong>。' },
        { type: 'heading', text: '三、距离公式' },
        { type: 'keypoint', label: '重点·点到直线距离', text: '点 P(x₀, y₀) 到直线 l: Ax + By + C = 0 的距离：<br><strong>d = |Ax₀ + By₀ + C| / √(A² + B²)</strong>。<br>公式对任意位置的点和任意直线（含斜率不存在）都成立，分子必须加绝对值，分母是系数的平方和开根号。' },
        { type: 'keypoint', label: '重点·两平行线间距离', text: '两平行直线 l₁: Ax + By + C₁ = 0 与 l₂: Ax + By + C₂ = 0 之间的距离：<br><strong>d = |C₁ - C₂| / √(A² + B²)</strong>。<br>使用前提是两条直线的 x、y 系数必须完全相同（即 A、B 对应相等），若不相符须先化为同系数再代入。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图2　点到直线的距离</text><line x1="120" y1="200" x2="580" y2="140" stroke="#2b5b9e" stroke-width="3"/><text x="470" y="128" font-size="15" fill="#2b5b9e">直线 l</text><circle cx="300" cy="60" r="7" fill="#c0392b"/><text x="312" y="56" font-size="15" fill="#c0392b">P(x₀,y₀)</text><circle cx="315" cy="175" r="6" fill="#2b5b9e"/><text x="248" y="200" font-size="15" fill="#2b5b9e">垂足 D</text><line x1="300" y1="60" x2="315" y2="175" stroke="#e05d44" stroke-width="2.5" stroke-dasharray="4,3"/><polyline points="315,175 315,150 290,150" fill="none" stroke="#e05d44" stroke-width="2"/><text x="350" y="115" font-size="15" fill="#e05d44">d = |Ax₀+By₀+C| / √(A²+B²)</text><text x="20" y="265" font-size="14" fill="#33536e">过 P 作 l 的垂线，垂线段 PD 的长度就是点到直线的距离</text></svg>', caption: '图2　点到直线的距离是垂线段 PD 的长度，垂足 D 在直线 l 上。' },
        { type: 'example', label: '例题2', text: '（1）求两平行直线 3x - 4y + 1 = 0 与 3x - 4y - 9 = 0 之间的距离；<br>（2）求点 Q(2, -1) 到直线 3x - 4y + 1 = 0 的距离。<br><br><strong>解</strong>：（1）两线 x、y 系数相同，直接用平行线距离公式：d = |C₁ - C₂| / √(A² + B²) = |1 - (-9)| / √(3² + (-4)²) = 10 / 5 = <strong>2</strong>。<br>（2）代入点到直线距离公式：d = |3×2 - 4×(-1) + 1| / √(3² + (-4)²) = |6 + 4 + 1| / 5 = 11 / 5 = <strong>11/5</strong>。' },
        { type: 'heading', text: '四、对称问题' },
        { type: 'keypoint', label: '重点·点关于点对称', text: '<strong>点关于点对称（中心对称）</strong>：点 P(x₀, y₀) 关于点 M(a, b) 的对称点 P′ 满足 M 是 PP′ 的中点，由中点公式得 P′ = <strong>(2a - x₀, 2b - y₀)</strong>。这是平移与中心对称的基础。' },
        { type: 'keypoint', label: '重点·点关于直线对称', text: '<strong>点 P(x₀, y₀) 关于直线 l 的对称点 P′</strong>：满足两个条件——PP′ 与 l <strong>垂直</strong>，且 PP′ 的中点在 l 上。常用对称公式（设 l: Ax + By + C = 0）：<br>x′ = x₀ - 2A(Ax₀ + By₀ + C) / (A² + B²)，<br>y′ = y₀ - 2B(Ax₀ + By₀ + C) / (A² + B²)。' },
        { type: 'list', items: ['点关于直线对称：先写垂直关系（斜率乘积为 -1 或一竖一横），再写中点在轴上', '求对称点可直接套用对称公式，注意分母是 A²+B²', '曲线关于直线对称统一用代入法：找出对称点坐标关系后代入原方程', '关于 y = x 对称最简：横纵坐标互换；关于 x 轴、y 轴对称分别变 y、变 x 符号'] },
        { type: 'keypoint', label: '重点·曲线关于直线对称', text: '<strong>曲线（含直线）关于直线 l 对称</strong>：在对称后的图形上任取一点 (x, y)，它关于 l 的对称点 (x′, y′) 必在原图形上。因此把原方程中的 x、y 用 (x′, y′) 表示并代入，再换回 x、y 即可，这种方法称为<strong>代入法</strong>。特别地，关于 y = x 对称只需交换 x、y。' },
        { type: 'warn', label: '易错·对称', text: '求对称点时常见的两类错误：① 混淆「垂直」与「平行」，导致设错对称点坐标；② 忽略直线<strong>斜率不存在</strong>或<strong>斜率为 0</strong> 的特殊情形，机械套用斜率乘积公式。竖直对称轴（x = a）情形应直接利用「横坐标关于 a 对称、纵坐标不变」处理。' },
        { type: 'example', label: '例题3', text: '求点 A(3, 1) 关于直线 l: x + y - 2 = 0 的对称点 A′。<br><br><strong>解</strong>：直线 l 的法向量为 (1, 1)，故 AA′ 的方向应与 (1, 1) 平行，设 A′ = (3 + t, 1 + t)。AA′ 的中点 M = ((6 + t)/2, (2 + t)/2) 应在 l 上，代入 l 得 (6 + t)/2 + (2 + t)/2 - 2 = 0，解得 t = -2。于是 A′ = <strong>(1, -1)</strong>。检验：中点 (2, 0) 满足 2 + 0 - 2 = 0，且 AA′ 与 l 垂直，结果正确。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图3　点关于直线对称</text><line x1="100" y1="230" x2="600" y2="130" stroke="#2b5b9e" stroke-width="3"/><text x="470" y="160" font-size="15" fill="#2b5b9e">对称轴 l</text><circle cx="320" cy="82" r="7" fill="#c0392b"/><text x="330" y="78" font-size="15" fill="#c0392b">A</text><circle cx="360" cy="282" r="7" fill="#5a7a2a"/><text x="370" y="288" font-size="15" fill="#5a7a2a">A′</text><line x1="320" y1="82" x2="360" y2="282" stroke="#7a5aa0" stroke-width="2.5" stroke-dasharray="4,3"/><circle cx="340" cy="182" r="6" fill="#2b5b9e"/><text x="300" y="172" font-size="15" fill="#2b5b9e">M（中点，在 l 上）</text><text x="20" y="290" font-size="14" fill="#33536e">AA′ ⊥ l 且 M 为 AA′ 中点 ⇒ A、A′ 关于 l 对称</text></svg>', caption: '图3　点关于直线对称：AA′ 垂直于对称轴 l，且其中点 M 落在 l 上。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'table', headers: ['问题', '核心公式 / 方法', '注意'], rows: [['两直线平行', 'k₁=k₂ 且 b₁≠b₂；或 A₁/A₂=B₁/B₂≠C₁/C₂', '须排除重合'], ['两直线垂直', 'k₁k₂=-1；或 A₁A₂+B₁B₂=0', '斜率不存在时用系数式'], ['夹角', 'tanθ=|(k₂-k₁)/(1+k₁k₂)|', '分子带绝对值'], ['点到直线距离', 'd=|Ax₀+By₀+C|/√(A²+B²)', '分子加绝对值'], ['点关于直线对称', '垂直 + 中点落在轴上（或套公式）', '注意斜率特殊情形']] },
        { type: 'tip', label: '记忆', text: '判断两直线位置关系，<strong>优先使用一般式系数</strong>：平行看 A、B 成比例且 C 不成比例，垂直看 A₁A₂ + B₁B₂ = 0，这样就不必分情况讨论斜率是否存在。距离与对称问题都围绕「垂直」和「中点」两个关键词展开。' },
        { type: 'list', items: ['平行：k₁=k₂ 且 b₁≠b₂（或系数成比例且 C 不成比例），注意斜率不存在情形', '垂直：k₁k₂=-1 或 A₁A₂+B₁B₂=0，竖直与水平直线直接判垂直', '夹角 tanθ=|(k₂-k₁)/(1+k₁k₂)|；到角不带绝对值、有方向', '点到直线 d=|Ax₀+By₀+C|/√(A²+B²)；平行线距离 d=|C₁-C₂|/√(A²+B²)', '对称：点关于点用中点公式；点关于直线用垂直+中点；曲线用代入法'] }
      ],
      exercises: [
        { type: 'choice', question: '下列命题中，正确的是？', options: ['两直线斜率相等则一定平行', '两直线平行则斜率一定相等', '一条斜率不存在、另一条斜率为 0 时，两直线垂直', '两直线垂直的充要条件是 k₁·k₂ = -1'], answer: '一条斜率不存在、另一条斜率为 0 时，两直线垂直', explanation: '竖直直线（斜率不存在）与水平直线（斜率为 0）互相垂直，因此一条斜率不存在、另一条斜率为 0 时两直线垂直。说两直线斜率相等则一定平行，忽略了重合的情形；说平行则斜率一定相等，遗漏了两条都是竖直直线的情况；说垂直的充要条件是斜率乘积为 -1，也遗漏了斜率不存在的情形。因此只有该项正确。' },
        { type: 'choice', question: '点 P(1, 2) 到直线 x + y - 1 = 0 的距离是？', options: ['√2', '2', '2/√2', '1'], answer: '√2', explanation: '由点到直线距离公式 d = |Ax₀ + By₀ + C| / √(A² + B²)，代入 A=1、B=1、C=-1 及点 (1, 2)，得 d = |1×1 + 1×2 - 1| / √(1² + 1²) = |2| / √2 = √2。选项中 2/√2 与 √2 数值相等，但本题要求的是化简结果，标准答案为 √2。' },
        { type: 'choice', question: '点 A(2, 3) 关于直线 y = x 的对称点是？', options: ['(3, 2)', '(2, 3)', '(-3, -2)', '(-2, -3)'], answer: '(3, 2)', explanation: '关于直线 y = x 对称，规则是将横纵坐标互换，即点 (a, b) 的对称点为 (b, a)。因此点 A(2, 3) 关于 y = x 的对称点是 (3, 2)。也可由垂直且中点在对称轴上验证：AA′ 连线斜率为 -1 与 y = x 垂直，中点 (2.5, 2.5) 在 y = x 上。' },
        { type: 'fill', question: '两平行直线 2x - y + 1 = 0 与 2x - y - 3 = 0 之间的距离为 ____。', answer: '4/√5', explanation: '两平行线 2x - y + 1 = 0 与 2x - y - 3 = 0 的系数 A=2、B=-1 相同，距离公式为 d = |C₁ - C₂| / √(A² + B²)。代入得 d = |1 - (-3)| / √(2² + (-1)²) = 4 / √5。注意两条直线的 x、y 系数必须对应相等才能直接用该公式。' },
        { type: 'fill', question: '点 P(1, 1) 关于直线 x = 2 的对称点的坐标是 ____。', answer: '(3, 1)', explanation: '直线 x = 2 是竖直直线，点 P(1, 1) 关于它的对称点满足：纵坐标不变，横坐标关于直线 x = 2 对称。设对称点为 (x′, 1)，则中点横坐标 (1 + x′)/2 = 2，解得 x′ = 3。故对称点坐标为 (3, 1)。' }
      ]
    },

    /* ---------------- 第2课时 圆的方程、直线与圆的位置关系 ---------------- */
    {
      id: 'zt5-u2-l2',
      name: '圆的方程与直线与圆的位置关系',
      chapter: '解析几何复习 · 四、圆的方程与直线与圆的位置关系',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、圆的标准方程' },
        { type: 'paragraph', text: '圆是平面内到定点距离等于定长的点的集合。定点叫圆心，定长叫半径。圆的方程有标准形式和一般形式两种，标准形式能直接读出圆心和半径，是分析圆的位置与大小的最便捷工具。' },
        { type: 'keypoint', label: '重点·标准方程', text: '圆心为 (a, b)、半径为 r 的圆的<strong>标准方程</strong>为：<br><strong>(x - a)² + (y - b)² = r²</strong>（r > 0）。<br>当圆心在原点时简化为 x² + y² = r²。标准式的本质是两点间距离公式：圆上任一点到圆心的距离恒等于 r。' },
        { type: 'keypoint', label: '重点·圆心与半径的识别', text: '从标准式读出几何量：方程 (x - a)² + (y - b)² = r² 中，圆心为 <strong>(a, b)</strong>，半径为 <strong>r</strong>。注意括号内是「x 减 a」「y 减 b」，若写成 (x + 3)² 则对应 a = -3，圆心横坐标为 -3，符号容易看错。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图1　圆的标准方程</text><circle cx="340" cy="160" r="100" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="3"/><circle cx="340" cy="160" r="5" fill="#c0392b"/><text x="350" y="155" font-size="15" fill="#c0392b">圆心 (a, b)</text><line x1="340" y1="160" x2="440" y2="160" stroke="#e05d44" stroke-width="2.5"/><text x="380" y="150" font-size="15" fill="#e05d44">半径 r</text><text x="180" y="255" font-size="14" fill="#33536e">方程 (x-a)² + (y-b)² = r²：圆心 (a, b)，半径为 r</text></svg>', caption: '图1　标准方程中圆心 (a, b) 与半径 r 一目了然。' },
        { type: 'list', items: ['标准式左边是两个完全平方之和，右边是半径的平方 r²', '圆心坐标看括号内常数项的相反数：(x-a)² 对应 a，(y-b)² 对应 b', '右边必须为正，等于 r²，开方得半径 r', '圆心在原点时方程为 x² + y² = r²'] },
        { type: 'heading', text: '二、圆的一般方程' },
        { type: 'paragraph', text: '将标准式展开可得到圆的一般方程。一般式形式统一、便于代数运算，但使用时有成立条件，且需要通过配方才能看出圆心和半径。' },
        { type: 'keypoint', label: '重点·一般方程与成立条件', text: '圆的一般方程为 <strong>x² + y² + Dx + Ey + F = 0</strong>，它表示一个圆的<strong>充要条件</strong>是 <strong>D² + E² - 4F > 0</strong>。当该式等于 0 时表示一个点（点圆），小于 0 时不表示任何图形（虚圆）。' },
        { type: 'keypoint', label: '重点·配方求圆心半径', text: '由一般式配方可得圆心与半径：<br>圆心 <strong>(-D/2, -E/2)</strong>，半径 <strong>r = √(D² + E² - 4F) / 2</strong>。<br>配方法是：x² + Dx 配成 (x + D/2)² - D²/4，y² + Ey 配成 (y + E/2)² - E²/4，移项后即得标准式。' },
        { type: 'warn', label: '易错·成立条件', text: '使用圆的一般式时，<strong>必须检验 D² + E² - 4F > 0</strong>。很多题目给出「方程 x² + y² + Dx + Ey + F = 0 表示圆」，此时隐含该条件成立；若求参数范围，则必须让该不等式成立，否则方程不表示圆。' },
        { type: 'example', label: '例题1', text: '已知圆的一般方程 x² + y² - 2x + 4y - 4 = 0，求圆心和半径。<br><br><strong>解</strong>：配方，x² - 2x = (x - 1)² - 1，y² + 4y = (y + 2)² - 4，代入得 (x - 1)² - 1 + (y + 2)² - 4 - 4 = 0，即 <strong>(x - 1)² + (y + 2)² = 9</strong>。故圆心为 (1, -2)，半径 r = 3。' },
        { type: 'heading', text: '三、直线与圆的位置关系' },
        { type: 'paragraph', text: '判断直线与圆的位置关系，首选「几何法」：比较圆心到直线的距离 d 与半径 r。这种方法比联立方程用判别式更直观，也便于进一步求弦长等问题。' },
        { type: 'keypoint', label: '重点·几何法判断', text: '设圆心到直线的距离为 d，圆半径为 r：<br><strong>d > r</strong> ⇔ 直线与圆<strong>相离</strong>（无公共点）；<br><strong>d = r</strong> ⇔ 直线与圆<strong>相切</strong>（一个公共点）；<br><strong>d < r</strong> ⇔ 直线与圆<strong>相交</strong>（两个公共点）。' },
        { type: 'keypoint', label: '重点·弦长公式', text: '直线与圆相交时，设圆心到弦的距离为 d，半径为 r，则<strong>弦长 = 2√(r² - d²)</strong>。它是直角三角形（半径、弦心距、半弦）中勾股定理的直接结果，注意公式前有个系数 2（半弦长为 √(r² - d²)）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图2　直线与圆的三种位置关系</text><circle cx="120" cy="160" r="45" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="3"/><line x1="60" y1="100" x2="180" y2="100" stroke="#c0392b" stroke-width="2.5"/><text x="85" y="245" font-size="15" fill="#33536e">相离 d > r</text><circle cx="340" cy="160" r="45" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="3"/><line x1="280" y1="115" x2="400" y2="115" stroke="#5a7a2a" stroke-width="2.5"/><text x="310" y="245" font-size="15" fill="#33536e">相切 d = r</text><circle cx="560" cy="160" r="45" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="3"/><line x1="500" y1="150" x2="620" y2="150" stroke="#7a5aa0" stroke-width="2.5"/><text x="530" y="245" font-size="15" fill="#33536e">相交 d < r</text><text x="20" y="270" font-size="14" fill="#33536e">通过比较圆心到直线的距离 d 与半径 r 判断位置关系</text></svg>', caption: '图2　相离、相切、相交分别对应 d > r、d = r、d < r。' },
        { type: 'example', label: '例题2', text: '圆 (x - 1)² + (y + 2)² = 25，直线 3x - 4y + 4 = 0。判断位置关系并求弦长（若相交）。<br><br><strong>解</strong>：圆心 (1, -2)，半径 r = 5。圆心到直线的距离 d = |3×1 - 4×(-2) + 4| / √(3² + (-4)²) = |3 + 8 + 4| / 5 = 15 / 5 = <strong>3</strong>。因 d = 3 < r = 5，故直线与圆<strong>相交</strong>。弦长 = 2√(r² - d²) = 2√(25 - 9) = 2×4 = <strong>8</strong>。' },
        { type: 'heading', text: '四、圆系方程与切线' },
        { type: 'paragraph', text: '圆系方程用于描述「经过某些固定点（如两圆交点、直线与圆交点）」的一族圆；切线是解析几何中的高频考点，需掌握圆上一点与圆外一点两种情形的求法。' },
        { type: 'keypoint', label: '重点·圆系方程', text: '<strong>圆系方程</strong>：<br>① 经过两圆 C₁ = 0、C₂ = 0 交点的圆系：C₁ + λC₂ = 0（λ ≠ -1，避免退化为直线）；<br>② 经过直线与圆 C = 0 交点的圆系：C + λ·(直线) = 0。<br>圆系保留了公共交点，常用于不求交点而利用公共性质的解题。' },
        { type: 'keypoint', label: '重点·切线方程', text: '<strong>切线方程</strong>：<br>① 点在圆上 (x₀, y₀)：圆心在原点的圆 x² + y² = r²，切线为 <strong>x₀x + y₀y = r²</strong>；圆心在 (a, b) 的圆，将圆方程中 x² 换成 x₀x、y² 换成 y₀y、x 换成 (x+x₀)/2、y 换成 (y+y₀)/2、常数项不变，即得切线。<br>② 点在圆外：设切线 y - y₀ = k(x - x₀)，由圆心到切线距离等于 r 求 k；<strong>别忘了斜率不存在的竖直线 x = x₀ 也可能是切线</strong>。' },
        { type: 'list', items: ['圆上一点：直接代入切线公式，无需讨论斜率', '圆外一点：通常引出两条切线，用 d = r 求斜率 k', '务必单独检验斜率不存在的竖直线 x = 常数 是否为切线', '圆心在原点时，点 (x₀, y₀) 处切线为 x₀x + y₀y = r²'] },
        { type: 'warn', label: '易错·切线斜率不存在', text: '从圆外一点引切线时，若只设 y - y₀ = k(x - x₀) 求解，会<strong>漏掉斜率不存在的那条切线</strong>（竖直直线 x = x₀）。正确做法是：先检验过点 (x₀, y₀) 的竖直线是否与圆相切，再对斜率存在的情形用 d = r 求 k。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图3　弦长与弦心距</text><circle cx="340" cy="150" r="100" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="3"/><line x1="245" y1="120" x2="435" y2="120" stroke="#7a5aa0" stroke-width="3"/><circle cx="245" cy="120" r="5" fill="#2b5b9e"/><circle cx="435" cy="120" r="5" fill="#2b5b9e"/><text x="320" y="112" font-size="15" fill="#7a5aa0">弦 AB</text><circle cx="340" cy="150" r="5" fill="#c0392b"/><text x="350" y="155" font-size="15" fill="#c0392b">圆心 O</text><line x1="340" y1="150" x2="340" y2="120" stroke="#e05d44" stroke-width="2.5"/><polyline points="340,120 340,135 355,135" fill="none" stroke="#e05d44" stroke-width="2"/><text x="348" y="142" font-size="14" fill="#e05d44">d</text><text x="200" y="200" font-size="14" fill="#33536e">半弦长 = √(r² - d²)</text><text x="40" y="255" font-size="14" fill="#33536e">弦长 = 2√(r² - d²)，其中 d 是圆心到弦的距离</text></svg>', caption: '图3　弦长由半径 r 与弦心距 d 通过勾股定理得到，勿漏乘系数 2。' },
        { type: 'example', label: '例题3', text: '求过点 P(5, 5) 且与圆 x² + y² = 25 相切的切线方程。<br><br><strong>解</strong>：点 P 到圆心距离 √(5² + 5²) = √50 > 5，在圆外，应有两条切线。<br>先检验竖直线 x = 5：代入圆得 25 + y² = 25 ⇒ y = 0，仅一个交点 (5, 0)，故 x = 5 是一条切线（斜率不存在情形）。<br>再设斜率存在的切线 y - 5 = k(x - 5)，即 kx - y + 5 - 5k = 0。由圆心到切线距离等于半径：|5 - 5k| / √(k² + 1) = 5，化简得 k = 0，对应切线 y = 5。故两条切线为 <strong>x = 5 与 y = 5</strong>。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'table', headers: ['内容', '核心公式 / 结论', '易错'], rows: [['标准方程', '(x-a)²+(y-b)²=r²，圆心(a,b)半径r', '括号内符号易看错'], ['一般方程', 'x²+y²+Dx+Ey+F=0，需 D²+E²-4F>0', '漏检验成立条件'], ['圆心半径(一般)', '圆心(-D/2,-E/2)，r=√(D²+E²-4F)/2', '配方要仔细'], ['位置关系', '比较 d 与 r：d>r 相离，d=r 相切，d<r 相交', '联立判别式较繁'], ['弦长', '2√(r²-d²)', '勿漏乘系数 2'], ['切线', '圆上点代公式；圆外点用 d=r 并验斜率不存在', '漏掉竖直切线']] },
        { type: 'tip', label: '记忆', text: '圆的两种方程可互相转化：一般式<strong>配方</strong>得标准式，标准式<strong>展开</strong>得一般式。判断直线与圆位置关系用<strong>几何法（比 d 与 r）</strong>最快捷；求切线时牢记「圆外一点两条切线，且要单独检验斜率不存在的竖直切线」。' },
        { type: 'list', items: ['标准式 (x-a)²+(y-b)²=r²，圆心(a,b)半径r', '一般式须满足 D²+E²-4F>0；圆心(-D/2,-E/2)，r=√(D²+E²-4F)/2', '位置关系比较 d 与 r：相离 / 相切 / 相交', '弦长 = 2√(r²-d²)，注意系数 2', '切线：圆上点代公式，圆外点用 d=r 且检验竖直切线'] }
      ],
      exercises: [
        { type: 'choice', question: '圆 x² + y² - 4x + 6y = 0 的圆心与半径是？', options: ['圆心(2, -3)，半径√13', '圆心(-2, 3)，半径√13', '圆心(2, -3)，半径13', '圆心(-2, 3)，半径13'], answer: '圆心(2, -3)，半径√13', explanation: '将圆的一般方程 x² + y² - 4x + 6y = 0 配方：x² - 4x 配成 (x-2)² - 4，y² + 6y 配成 (y+3)² - 9，得 (x-2)² + (y+3)² = 13。与标准式 (x-a)²+(y-b)²=r² 对照，圆心为 (2, -3)，半径 r = √13。' },
        { type: 'choice', question: '直线 x + y - 1 = 0 与圆 (x-2)² + (y-2)² = 8 的位置关系是？', options: ['相离', '相切', '相交', '无法判断'], answer: '相交', explanation: '圆心为 (2, 2)，半径 r = √8 = 2√2。圆心到直线 x + y - 1 = 0 的距离 d = |2 + 2 - 1| / √(1² + 1²) = 3/√2 ≈ 2.12。因为 d < r，所以直线与圆相交。判断位置关系只需比较圆心到直线的距离 d 与半径 r 的大小。' },
        { type: 'choice', question: '圆 x² + y² = 4 在点 (0, 2) 处的切线方程是？', options: ['y = 2', 'x = 2', 'y = 0', 'x = 0'], answer: 'y = 2', explanation: '圆 x² + y² = 4 的圆心为原点、半径 r = 2。圆上一点 (x₀, y₀) 处的切线方程为 x₀x + y₀y = r²。代入 (0, 2) 得 0·x + 2y = 4，即 y = 2。也可直接观察：点 (0, 2) 在圆的正上方，过该点的切线是水平直线 y = 2。' },
        { type: 'fill', question: '圆 x² + y² + 2x - 4y - 4 = 0 的半径为 ____。', answer: '3', explanation: '将方程 x² + y² + 2x - 4y - 4 = 0 配方：x² + 2x 配成 (x+1)² - 1，y² - 4y 配成 (y-2)² - 4，得 (x+1)² + (y-2)² = 9。因此半径 r = √9 = 3。配方时等号两边同时加上所缺的常数项，注意移项后符号。' },
        { type: 'fill', question: '圆心为 (0, 0)、半径为 5 的圆与直线 3x - 4y = 0 相交所得的弦长为 ____。', answer: '10', explanation: '圆心为原点 (0, 0)，半径 r = 5。直线 3x - 4y = 0 过原点，故圆心到直线的距离 d = 0。弦长公式为 2√(r² - d²)，代入得弦长 = 2√(25 - 0) = 10，即该直线经过圆心，所截得的弦就是直径。凡过圆心的弦长都等于直径。' }
      ]
    }

  );
})();
