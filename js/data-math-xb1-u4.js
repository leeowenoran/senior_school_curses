/* ============================================================
 * 高二数学 · 选择性必修 第一册 · 第二章 直线和圆的方程
 * 第1课时：直线的交点坐标与距离公式（人教A版 §2.3）
 * 第2课时：圆的方程（人教A版 §2.4）
 * 数据注入：math.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'xb1');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 直线的交点坐标与距离公式 ---------------- */
    {
      id: 'xb1-u4-l1',
      name: '直线的交点坐标与距离公式',
      chapter: '第二章 直线和圆的方程 · 2.3',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、两直线的交点坐标' },
        { type: 'paragraph', text: '在直角坐标系中，两条直线的位置关系有相交、平行、重合三种。当两条直线相交时，它们有且仅有一个公共点，这个点同时满足两条直线的方程，称为两直线的交点。求交点坐标，本质上就是求这两个一次方程的公共解。' },
        { type: 'keypoint', label: '重点·交点即联立方程组的解', text: '设两直线 l₁、l₂ 的方程分别为 A₁x+B₁y+C₁=0 与 A₂x+B₂y+C₂=0（A、B 不全为 0）。它们的交点坐标 (x, y) 必须<strong>同时满足两个方程</strong>，即联立方程组的解。把两方程联立求解，所得的一组 (x, y) 就是交点坐标。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">两直线的交点即联立方程组的唯一解</text><line x1="80" y1="210" x2="600" y2="210" stroke="#cdd9e8" stroke-width="1.5"/><line x1="330" y1="235" x2="330" y2="45" stroke="#cdd9e8" stroke-width="1.5"/><line x1="120" y1="80" x2="560" y2="170" stroke="#2b5b9e" stroke-width="3"/><line x1="120" y1="170" x2="560" y2="80" stroke="#e05d44" stroke-width="3"/><circle cx="340" cy="125" r="6" fill="#fff" stroke="#2b5b9e" stroke-width="2.5"/><text x="352" y="121" font-size="15" fill="#2b5b9e">交点 P(x₀,y₀)</text><text x="40" y="224" font-size="14" fill="#33536e">蓝色直线：A₁x+B₁y+C₁=0　红色直线：A₂x+B₂y+C₂=0</text><text x="40" y="244" font-size="14" fill="#33536e">两直线相交时方程组有唯一解，解即交点坐标</text></svg>', caption: '图1　两直线相交于一点 P，联立两直线方程的唯一解即为交点坐标。' },
        { type: 'keypoint', label: '重点·三种位置关系对应解的个数', text: '联立两直线方程所得方程组的解的情况，恰好对应两直线的三种位置关系：<br>① 有<strong>唯一解</strong> ⇔ 两直线<strong>相交</strong>，解为交点坐标；<br>② <strong>无解</strong> ⇔ 两直线<strong>平行</strong>（没有公共点）；<br>③ 有<strong>无穷多解</strong> ⇔ 两直线<strong>重合</strong>（实际上为同一条直线）。' },
        { type: 'list', items: ['相交：方程组有唯一解，即两直线唯一公共点（交点）', '平行：方程组无解，两直线无公共点、永不相交', '重合：方程组有无穷多解，两直线实为同一条直线'] },
        { type: 'heading', text: '二、平行与垂直的一般式判定' },
        { type: 'keypoint', label: '重点·平行条件（一般式）', text: '设 l₁: A₁x+B₁y+C₁=0，l₂: A₂x+B₂y+C₂=0。则 <strong>l₁ ∥ l₂ ⇔ A₁B₂ - A₂B₁ = 0 且 A₁C₂ - A₂C₁ ≠ 0</strong>（等价地，B₁C₂ - B₂C₁ ≠ 0）。前者保证方向平行，后者保证两直线不重合。若 A₁B₂ - A₂B₁ = 0 且 A₁C₂ - A₂C₁ = 0，则两直线重合。' },
        { type: 'keypoint', label: '重点·垂直条件（一般式）', text: '同样设两直线为一般式，则 <strong>l₁ ⊥ l₂ ⇔ A₁A₂ + B₁B₂ = 0</strong>。即 x 的系数相乘加上 y 的系数相乘之和为 0。用一般式判定垂直，无需讨论斜率是否存在，适用性最广。' },
        { type: 'warn', label: '易错', text: '用一般式判断平行时，<strong>必须同时检查常数项条件</strong>：仅 A₁B₂ - A₂B₁ = 0 只能说明两直线平行或重合，要排除重合需 A₁C₂ - A₂C₁ ≠ 0。另外，平行、垂直的一般式条件<strong>不要求斜率存在</strong>，因此比用斜率判断更稳妥，尤其当直线可能垂直 x 轴时。' },
        { type: 'example', label: '例题1', text: '求直线 2x + y - 1 = 0 与 x - y + 2 = 0 的交点坐标。<br><br><strong>解</strong>：联立方程组<br>2x + y = 1 ……①<br>x - y = -2 ……②<br>① + ② 得 3x = -1，故 x = -1/3。<br>代入②得 -1/3 - y = -2，解得 y = 5/3。<br>所以交点坐标为 <strong>(-1/3, 5/3)</strong>。' },
        { type: 'heading', text: '三、两点间距离公式' },
        { type: 'keypoint', label: '重点·两点距离公式', text: '设平面内两点 P₁(x₁, y₁)、P₂(x₂, y₂)，则两点间距离<br><strong>|P₁P₂| = √((x₂ - x₁)² + (y₂ - y₁)²)</strong>。<br>即先求横坐标之差、纵坐标之差，各自平方后相加再开平方。这就是勾股定理在平面上的直接体现。' },
        { type: 'list', items: ['坐标差先平方再相加，顺序 (x₂-x₁) 与 (x₁-x₂) 结果相同', '当两点在同一条水平（或竖直）直线上时，公式退化为坐标差的绝对值', '公式对三个及以上点求距离时逐个两两使用'] },
        { type: 'example', label: '例题（巩固）', text: '已知点 A(1, 2)、B(4, 6)，求 |AB|。<br><br><strong>解</strong>：由两点间距离公式，<br>|AB| = √((4 - 1)² + (6 - 2)²) = √(3² + 4²) = √(9 + 16) = √25 = <strong>5</strong>。' },
        { type: 'heading', text: '四、点到直线的距离' },
        { type: 'keypoint', label: '重点·点到直线距离公式', text: '设点 P(x₀, y₀)，直线 l: Ax + By + C = 0（A、B 不全为 0），则点 P 到直线 l 的距离<br><strong>d = |Ax₀ + By₀ + C| / √(A² + B²)</strong>。<br>分子是把点坐标代入直线左边取绝对值，分母是 x、y 系数平方和的算术平方根。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">点到直线的距离：点 P 到直线的垂线段长度</text><line x1="80" y1="160" x2="600" y2="200" stroke="#2b5b9e" stroke-width="3"/><text x="500" y="216" font-size="14" fill="#2b5b9e">直线 l：Ax+By+C=0</text><circle cx="340" cy="55" r="6" fill="#e05d44"/><text x="352" y="52" font-size="15" fill="#c0392b">P(x₀,y₀)</text><line x1="340" y1="55" x2="330" y2="179" stroke="#5a7a2a" stroke-width="3"/><circle cx="330" cy="179" r="5" fill="#5a7a2a"/><text x="300" y="200" font-size="14" fill="#5a7a2a">垂足 Q</text><text x="250" y="118" font-size="15" fill="#33536e" font-style="italic">d</text><text x="40" y="236" font-size="14" fill="#33536e">d = |Ax₀+By₀+C| / √(A²+B²)</text><text x="40" y="252" font-size="14" fill="#33536e">点到直线的垂线段 PQ 的长度即为距离</text></svg>', caption: '图2　点 P 到直线 l 的距离是垂线段 PQ 的长度，公式为 d = |Ax₀+By₀+C| / √(A²+B²)。' },
        { type: 'example', label: '例题2', text: '求点 (1, 2) 到直线 3x + 4y - 5 = 0 的距离。<br><br><strong>解</strong>：由点到直线距离公式，A=3、B=4、C=-5，点 (1,2)，<br>d = |3×1 + 4×2 - 5| / √(3² + 4²) = |3 + 8 - 5| / 5 = 6 / 5 = <strong>6/5</strong>。' },
        { type: 'warn', label: '易错', text: '使用点到直线距离公式前，<strong>必须先把直线方程化为一般式 Ax+By+C=0</strong>，再提取 A、B、C。分子上的绝对值不可省略；分母是 √(A²+B²)，不是 √(A+B)。若直线为 x=a 或 y=b 这类特殊情形，可直接用坐标差求解，也可套用公式（此时 A、B 中恰有一个为 0）。' },
        { type: 'heading', text: '五、两平行线间的距离' },
        { type: 'keypoint', label: '重点·两平行线距离公式', text: '设两条平行直线 l₁: Ax + By + C₁ = 0，l₂: Ax + By + C₂ = 0（已化为<strong>相同的 A、B</strong>），则它们之间的距离<br><strong>d = |C₁ - C₂| / √(A² + B²)</strong>。<br>可由“在其中一条直线上任取一点，求该点到另一条直线的距离”推导得到。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">两平行线间的距离：夹在它们之间的公垂线段长</text><line x1="100" y1="90" x2="560" y2="180" stroke="#2b5b9e" stroke-width="3"/><line x1="100" y1="170" x2="560" y2="260" stroke="#2b5b9e" stroke-width="3"/><text x="470" y="84" font-size="14" fill="#2b5b9e">l₁：2x+3y-5=0</text><text x="470" y="254" font-size="14" fill="#2b5b9e">l₂：2x+3y+1=0</text><line x1="330" y1="135" x2="315" y2="212" stroke="#5a7a2a" stroke-width="3"/><circle cx="330" cy="135" r="5" fill="#e05d44"/><circle cx="315" cy="212" r="5" fill="#e05d44"/><text x="250" y="178" font-size="15" fill="#33536e" font-style="italic">d</text><text x="40" y="266" font-size="14" fill="#33536e">d = |C₁-C₂| / √(A²+B²)（两线先化为相同 A、B）</text></svg>', caption: '图3　两条平行线 l₁、l₂ 之间的距离等于夹在它们之间的任一公垂线段的长度。' },
        { type: 'example', label: '例题3', text: '求平行线 2x + 3y - 5 = 0 与 2x + 3y + 1 = 0 的距离。<br><br><strong>解</strong>：两直线 x、y 系数已相同（A=2，B=3），C₁=-5，C₂=1。<br>d = |(-5) - 1| / √(2² + 3²) = | -6 | / √13 = <strong>6/√13</strong>。<br>（若需有理化，可写作 6√13/13。）' },
        { type: 'heading', text: '六、对称问题' },
        { type: 'keypoint', label: '重点·两类对称', text: '<strong>点关于点对称</strong>：点 P 关于点 M 的对称点 P′，满足 M 是线段 PP′ 的中点，用中点坐标公式即可求出 P′。<br><strong>点关于直线对称</strong>：点 P 关于直线 l 的对称点 P′，满足 PP′ 被 l 垂直平分，即 PP′ ⊥ l 且 PP′ 的中点在 l 上。' },
        { type: 'tip', label: '提示', text: '求“点关于直线对称”时，可先设出对称点坐标，利用两个条件列方程组：① 连线与已知直线垂直（斜率乘积为 -1，或用一般式 A·Δx + B·Δy = 0）；② 中点坐标满足原直线方程。两个条件联立即可解出对称点。' },
        { type: 'heading', text: '七、本课小结' },
        { type: 'list', items: ['交点：联立两直线方程，唯一解为交点，无解平行，无穷解重合', '平行 l₁∥l₂ ⇔ A₁B₂-A₂B₁=0 且 A₁C₂-A₂C₁≠0', '垂直 l₁⊥l₂ ⇔ A₁A₂+B₁B₂=0', '两点距离 |P₁P₂|=√((x₂-x₁)²+(y₂-y₁)²)', '点到直线 d=|Ax₀+By₀+C|/√(A²+B²)', '平行线距离 d=|C₁-C₂|/√(A²+B²)（先化为同 A、B）'] },
        { type: 'table', headers: ['公式', '表达式', '适用情形'], rows: [['联立求交点', '解 {A₁x+B₁y+C₁=0, A₂x+B₂y+C₂=0}', '两直线相交时得交点坐标'], ['两点间距离', '|P₁P₂|=√((x₂-x₁)²+(y₂-y₁)²)', '已知两点坐标求距离'], ['点到直线距离', 'd=|Ax₀+By₀+C|/√(A²+B²)', '点 P(x₀,y₀) 到直线'], ['两平行线距离', 'd=|C₁-C₂|/√(A²+B²)', '两直线平行（已化为同 A、B）']] }
      ],
      exercises: [
        { type: 'choice', question: '点 (0,0) 到直线 x + y - 2 = 0 的距离是？', options: ['√2', '2', '1', '2√2'], answer: '√2', explanation: '点到直线的距离公式为 d = |Ax₀ + By₀ + C| / √(A² + B²)。将直线 x + y - 2 = 0 化为一般式，得 A = 1，B = 1，C = -2，点 (0,0)，代入公式：d = |0 + 0 - 2| / √(1 + 1) = 2 / √2 = √2。故距离为 √2。其余选项 2、1、2√2 均与计算结果不符。' },
        { type: 'choice', question: '直线 x = 1 与 x = 4 之间的距离为？', options: ['2', '3', '4', '5'], answer: '3', explanation: '直线 x = 1 与 x = 4 都是垂直于 x 轴的直线，二者互相平行。它们之间的距离等于两直线横坐标之差的绝对值，即 |4 - 1| = 3。也可视为两平行线，化为 x - 1 = 0 与 x - 4 = 0，由平行线距离公式得 d = |(-1) - (-4)| / 1 = 3。故距离为 3。' },
        { type: 'choice', question: '直线 2x + 3y = 0 与 4x + 6y = 1 的位置关系是？', options: ['相交', '平行', '重合', '垂直'], answer: '平行', explanation: '将第二条直线 4x + 6y = 1 两边同除以 2，得 2x + 3y = 1/2。两条直线的 x、y 系数成比例（2 : 3 与 4 : 6 相同），但常数项 0 与 1/2 不成同一比例，因此两直线平行而不重合。用一般式判定：A₁B₂ - A₂B₁ = 2×6 - 4×3 = 0，且 A₁C₂ - A₂C₁ = 2×1 - 4×0 = 2 ≠ 0，满足平行条件。故二者平行。' },
        { type: 'fill', question: '两点 (0,0) 与 (3,4) 之间的距离为 ____。', answer: '5', explanation: '由两点间距离公式 |P₁P₂| = √((x₂-x₁)² + (y₂-y₁)²)。代入 (0,0) 与 (3,4)，得 √((3-0)² + (4-0)²) = √(9 + 16) = √25 = 5。故两点间距离为 5。计算时注意先求坐标差的平方再开根号，两点顺序不影响结果。' },
        { type: 'fill', question: '点 (1,1) 到直线 x = 1 的距离为 ____。', answer: '0', explanation: '直线 x = 1 是垂直于 x 轴且过横坐标 1 的直线，点 (1,1) 的横坐标也是 1，因此该点正好落在这条直线上，到直线的距离为 0。也可代入公式：化为 x - 1 = 0，则 d = |1 - 1| / 1 = 0。故距离为 0，点在直线上。' }
      ]
    },

    /* ---------------- 第2课时 圆的方程 ---------------- */
    {
      id: 'xb1-u4-l2',
      name: '圆的方程',
      chapter: '第二章 直线和圆的方程 · 2.4',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、圆的标准方程' },
        { type: 'paragraph', text: '圆是平面内到定点（圆心）的距离等于定长（半径）的所有点组成的图形。把这一几何定义写成代数方程，就得到圆的标准方程。它是研究圆的最直接、最常用的形式。' },
        { type: 'keypoint', label: '重点·标准方程', text: '圆心为 C(a, b)、半径为 r（r &gt; 0）的圆的标准方程为<br><strong>(x - a)² + (y - b)² = r²</strong>。<br>方程左边是“点到圆心距离的平方”，右边是半径的平方。圆心和半径一目了然，便于画图与分析。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">圆的标准方程：圆心 (a,b)，半径 r</text><line x1="60" y1="200" x2="620" y2="200" stroke="#cdd9e8" stroke-width="1.5"/><line x1="340" y1="245" x2="340" y2="45" stroke="#cdd9e8" stroke-width="1.5"/><circle cx="340" cy="160" r="90" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="340" cy="160" r="5" fill="#e05d44"/><text x="352" y="158" font-size="15" fill="#c0392b">C(a,b)</text><line x1="340" y1="160" x2="410" y2="120" stroke="#5a7a2a" stroke-width="3"/><circle cx="410" cy="120" r="4" fill="#5a7a2a"/><text x="416" y="116" font-size="14" fill="#5a7a2a">r</text><text x="40" y="248" font-size="14" fill="#33536e">标准方程：(x-a)²+(y-b)²=r²，r&gt;0</text><text x="40" y="266" font-size="14" fill="#33536e">圆心为 C(a,b)，半径为 r；圆心在原点时 x²+y²=r²</text></svg>', caption: '图1　圆的标准方程几何意义：圆心 C(a,b)，半径 r，圆上任一点到圆心距离为 r。' },
        { type: 'keypoint', label: '重点·圆心在原点', text: '当圆心在坐标原点 O(0,0) 时，a = 0、b = 0，标准方程简化为 <strong>x² + y² = r²</strong>。这是圆的标准方程最常用的特例，例如单位圆为 x² + y² = 1（r = 1）。' },
        { type: 'example', label: '例题1', text: '写出圆心为 (1, -2)、半径为 3 的圆的标准方程。<br><br><strong>解</strong>：由标准方程 (x - a)² + (y - b)² = r²，代入 a = 1，b = -2，r = 3，得<br>(x - 1)² + (y + 2)² = <strong>9</strong>。<br>注意 b = -2 时 (y - (-2)) = (y + 2)。' },
        { type: 'heading', text: '二、圆的一般方程' },
        { type: 'keypoint', label: '重点·一般方程及条件', text: '方程 <strong>x² + y² + Dx + Ey + F = 0</strong> 称为圆的一般方程。它能表示圆的前提是<br><strong>D² + E² - 4F &gt; 0</strong>。<br>若该式等于 0，则表示一个点（半径退化为 0）；若小于 0，则不表示任何实图形。' },
        { type: 'keypoint', label: '重点·配方求圆心半径', text: '将一般方程配方：<br>x² + Dx + y² + Ey = -F<br>⇒ (x + D/2)² + (y + E/2)² = (D² + E² - 4F) / 4。<br>于是圆心为 <strong>(-D/2, -E/2)</strong>，半径 <strong>r = ½√(D² + E² - 4F)</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">一般方程配方：化为标准方程得圆心与半径</text><circle cx="250" cy="170" r="80" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="250" cy="170" r="5" fill="#e05d44"/><text x="260" y="168" font-size="15" fill="#c0392b">(-D/2,-E/2)</text><text x="110" y="270" font-size="14" fill="#33536e">条件：D²+E²-4F&gt;0</text><text x="380" y="120" font-size="15" fill="#7a5aa0">x²+y²+Dx+Ey+F=0</text><text x="380" y="150" font-size="15" fill="#33536e">↓ 配方</text><text x="380" y="182" font-size="15" fill="#2b5b9e">(x+D/2)²+(y+E/2)²</text><text x="380" y="208" font-size="15" fill="#2b5b9e">=(D²+E²-4F)/4</text><text x="380" y="252" font-size="14" fill="#33536e">圆心(-D/2,-E/2)，r=½√(D²+E²-4F)</text></svg>', caption: '图2　将一般方程 x²+y²+Dx+Ey+F=0 配方，得到圆心 (-D/2,-E/2) 与半径。' },
        { type: 'warn', label: '易错', text: '使用一般方程时，<strong>务必先检查 D²+E²-4F &gt; 0</strong>，否则可能不表示圆。配方时注意：x 项要加上 (D/2)²、y 项加上 (E/2)²，且两边同时加，才能得到完全平方式。此外一般方程中 x²、y² 的系数必须相等且不为 0。' },
        { type: 'example', label: '例题2', text: '求过三点 (0,0)、(1,0)、(0,1) 的圆的方程、圆心和半径。<br><br><strong>解</strong>：设圆的一般方程为 x² + y² + Dx + Ey + F = 0。<br>代入 (0,0) 得 F = 0；代入 (1,0) 得 1 + D = 0 ⇒ D = -1；代入 (0,1) 得 1 + E = 0 ⇒ E = -1。<br>故方程为 <strong>x² + y² - x - y = 0</strong>，圆心 (-D/2, -E/2) = (1/2, 1/2)，半径 r = ½√(1 + 1) = <strong>√2/2</strong>。' },
        { type: 'heading', text: '三、点与圆的位置关系' },
        { type: 'keypoint', label: '重点·位置判定', text: '设圆心为 C(a, b)、半径为 r，点 P 到圆心的距离 d = |PC| = √((x₀-a)² + (y₀-b)²)。比较 d 与 r：<br>① <strong>d &lt; r</strong> ⇔ 点在圆<strong>内</strong>；<br>② <strong>d = r</strong> ⇔ 点在圆<strong>上</strong>；<br>③ <strong>d &gt; r</strong> ⇔ 点在圆<strong>外</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">点与圆的位置关系由 d=|PC| 与 r 比较</text><circle cx="320" cy="160" r="100" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="320" cy="160" r="5" fill="#2b5b9e"/><text x="328" y="158" font-size="14" fill="#2b5b9e">C</text><circle cx="300" cy="150" r="5" fill="#5a7a2a"/><text x="262" y="140" font-size="14" fill="#5a7a2a">点在圆内 d&lt;r</text><circle cx="420" cy="160" r="5" fill="#4a7de0"/><text x="430" y="156" font-size="14" fill="#4a7de0">点在圆上 d=r</text><circle cx="500" cy="90" r="5" fill="#e05d44"/><text x="510" y="86" font-size="14" fill="#c0392b">点在圆外 d&gt;r</text><text x="40" y="258" font-size="14" fill="#33536e">比较圆心到点 P 的距离 d 与半径 r：d&lt;r 内，d=r 上，d&gt;r 外</text></svg>', caption: '图3　点与圆的三种位置关系：d 小于 r 在圆内，d 等于 r 在圆上，d 大于 r 在圆外。' },
        { type: 'example', label: '例题3', text: '已知点 P(2,2)，判断它与圆 (x-1)² + (y-1)² = 4 的位置关系。<br><br><strong>解</strong>：圆心 C(1,1)，半径 r = 2。点 P 到圆心距离 d = √((2-1)² + (2-1)²) = √(1 + 1) = √2 ≈ 1.414。<br>因为 d = √2 &lt; 2 = r，所以<strong>点 P 在圆内</strong>。' },
        { type: 'list', items: ['点在圆内：d 小于 r，代入圆方程左边小于 r²（或一般式小于 0）', '点在圆上：d 等于 r，代入恰使方程成立', '点在圆外：d 大于 r，代入圆方程左边大于 r²（或一般式大于 0）'] },
        { type: 'heading', text: '四、求圆方程的方法' },
        { type: 'keypoint', label: '重点·待定系数法', text: '求圆的方程，常采用<strong>待定系数法</strong>：先设出圆的形式（标准方程或一般方程），再把已知条件（圆心、半径、过已知点等）代入，得到关于参数的方程组并求解。已知圆心和半径时优先设标准方程；已知圆上若干点时设一般方程更方便。' },
        { type: 'tip', label: '提示', text: '选择设<strong>标准方程</strong>还是<strong>一般方程</strong>：若已知圆心或半径，用标准方程 (x-a)²+(y-b)²=r²，直接代入即可；若已知圆经过三个点，用一般方程 x²+y²+Dx+Ey+F=0，代入三点得三元一次方程组，求解 D、E、F 更系统。' },
        { type: 'warn', label: '易错', text: '待定系数法求圆方程时，<strong>半径 r 必须严格大于 0</strong>；若求得 r² ≤ 0，则说明条件矛盾、不存在这样的圆。另外，设一般方程解出 D、E、F 后，应验算 D²+E²-4F &gt; 0 是否真正成立，避免出现“虚圆”。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['标准方程 (x-a)²+(y-b)²=r²，圆心 C(a,b)，半径 r', '圆心在原点：x²+y²=r²', '一般方程 x²+y²+Dx+Ey+F=0（需 D²+E²-4F>0）', '圆心(-D/2,-E/2)，半径 r=½√(D²+E²-4F)', '点与圆：比较 d=|PC| 与 r，d<r 内、d=r 上、d>r 外', '求圆方程用待定系数法，按已知条件的特点选标准式或一般式'] },
        { type: 'table', headers: ['形式', '方程', '关键信息'], rows: [['标准方程', '(x-a)²+(y-b)²=r²', '圆心 C(a,b)，半径 r（r>0）'], ['圆心在原点', 'x²+y²=r²', '圆心 (0,0)，半径 r'], ['一般方程', 'x²+y²+Dx+Ey+F=0', '需 D²+E²-4F>0；圆心(-D/2,-E/2)，r=½√(D²+E²-4F)'], ['点与圆', '比较 d=|PC| 与 r', 'd<r 内，d=r 上，d>r 外']] }
      ],
      exercises: [
        { type: 'choice', question: '圆心在原点、半径为 2 的圆的标准方程是？', options: ['x²+y²=2', 'x²+y²=4', 'x+y=4', 'x²+y²=2x'], answer: 'x²+y²=4', explanation: '圆心在原点 (0,0)、半径为 r 的圆的标准方程为 x² + y² = r²。已知半径 r = 2，代入得 x² + y² = 2² = 4。因此方程为 x² + y² = 4。选项 x² + y² = 2 对应半径为 √2，x + y = 4 是直线方程而非圆，x² + y² = 2x 配方后圆心是 (1,0)，均不正确。' },
        { type: 'choice', question: '圆 x² + y² - 2x = 0 的圆心坐标是？', options: ['(1,0)', '(0,1)', '(2,0)', '(0,2)'], answer: '(1,0)', explanation: '将一般方程 x² + y² - 2x = 0 配方，得 x² - 2x + 1 + y² = 1，即 (x - 1)² + y² = 1，所以圆心为 (1,0)，半径为 1。也可直接用公式：圆心 (-D/2, -E/2)，其中 D = -2、E = 0，得 (-(-2)/2, 0) = (1,0)。故圆心坐标是 (1,0)。' },
        { type: 'choice', question: '点 (0,0) 与圆 x² + y² - 4 = 0 的位置关系是？', options: ['在圆上', '在圆内', '在圆外', '无法确定'], answer: '在圆内', explanation: '方程 x² + y² - 4 = 0 即 x² + y² = 4，表示圆心在原点、半径 r = 2 的圆。将 (0,0) 代入方程左边得 0 + 0 - 4 = -4，小于 0，说明该点到圆心的距离 d = 0 小于半径 r = 2，因此点在圆内部，不在圆上。只有当代入值恰为 0 时，点才落在圆上。' },
        { type: 'fill', question: '过点 (0,0)、(2,0)、(0,2) 的圆的半径为 ____。', answer: '√2', explanation: '三点 (0,0)、(2,0)、(0,2) 构成直角等腰三角形，其外接圆圆心是斜边中点。斜边两端为 (2,0) 与 (0,2)，中点即圆心 (1,1)。半径 r 为圆心到任一点的距离，取 (0,0)：r = √((1-0)² + (1-0)²) = √2。故该圆的半径为 √2。也可设圆的一般方程代入三点求解。' },
        { type: 'fill', question: '圆心为 (0,0) 且经过点 (3,4) 的圆的半径为 ____。', answer: '5', explanation: '圆心在 (0,0) 的圆，半径等于圆心到圆上任意一点的距离。已知圆经过点 (3,4)，故半径 r = √((3-0)² + (4-0)²) = √(9 + 16) = √25 = 5。因此半径为 5，对应的圆方程为 x² + y² = 25。' }
      ]
    }

  );
})();
