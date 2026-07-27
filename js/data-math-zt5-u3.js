/* ============================================================
 * 高三数学 · 高考复习专题 · 解析几何
 * 第3单元 第1课时：圆与圆的位置关系、圆系
 * 第2课时：椭圆
 * 数据注入：math.zt5.points（由 js/data-gz.js 的 GZ_REVIEW.math 自动注册）
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt5');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 圆与圆的位置关系、圆系 ---------------- */
    {
      id: 'zt5-u3-l1',
      name: '圆与圆的位置关系、圆系',
      chapter: '解析几何复习 · 五、圆与圆的位置关系',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、两圆的位置关系' },
        { type: 'paragraph', text: '在平面几何与解析几何中，研究两个圆的相对位置，是处理圆与圆相交、相切、相离等问题的基础。设两圆的圆心距 d = |O₁O₂|，半径分别为 r₁、r₂（不妨设 r₁ ≥ r₂），通过比较 d 与两半径之和、两半径之差的绝对值，就能完整刻画两圆的五种位置关系。' },
        { type: 'keypoint', label: '重点·五种关系', text: '设圆心距 d = |O₁O₂|，半径 r₁、r₂，则：<br><strong>外离</strong>：d &gt; r₁ + r₂；<br><strong>外切</strong>：d = r₁ + r₂；<br><strong>相交</strong>：|r₁ - r₂| &lt; d &lt; r₁ + r₂；<br><strong>内切</strong>：d = |r₁ - r₂|；<br><strong>内含</strong>：d &lt; |r₁ - r₂|（当 d = 0 时为同心圆，是内含的特例）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">两圆的五种位置关系</text><circle cx="60" cy="95" r="35" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="132" cy="95" r="28" fill="#f7d9d0" stroke="#e05d44" stroke-width="2.5"/><text x="96" y="162" font-size="14" fill="#33536e" text-anchor="middle">外离 d&gt;r₁+r₂</text><circle cx="305" cy="95" r="35" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="365" cy="95" r="25" fill="#f7d9d0" stroke="#e05d44" stroke-width="2.5"/><text x="335" y="162" font-size="14" fill="#33536e" text-anchor="middle">外切 d=r₁+r₂</text><circle cx="548" cy="95" r="40" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="612" cy="95" r="32" fill="#f7d9d0" stroke="#e05d44" stroke-width="2.5"/><text x="580" y="162" font-size="14" fill="#33536e" text-anchor="middle">相交 |r₁-r₂|&lt;d&lt;r₁+r₂</text><circle cx="200" cy="265" r="55" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="235" cy="265" r="20" fill="#f7d9d0" stroke="#e05d44" stroke-width="2.5"/><text x="200" y="302" font-size="14" fill="#33536e" text-anchor="middle">内切 d=|r₁-r₂|</text><circle cx="480" cy="265" r="55" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="500" cy="265" r="18" fill="#f7d9d0" stroke="#e05d44" stroke-width="2.5"/><text x="480" y="302" font-size="14" fill="#33536e" text-anchor="middle">内含 d&lt;|r₁-r₂|</text></svg>', caption: '图1　两圆按圆心距 d 与半径的关系分为五种位置状态，蓝圆与红圆分别表示两个圆。' },
        { type: 'table', headers: ['位置关系', '圆心距 d 的条件', '公共点个数'], rows: [['外离', 'd &gt; r₁ + r₂', '0'], ['外切', 'd = r₁ + r₂', '1'], ['相交', '|r₁ - r₂| &lt; d &lt; r₁ + r₂', '2'], ['内切', 'd = |r₁ - r₂|', '1'], ['内含', 'd &lt; |r₁ - r₂|', '0']] },
        { type: 'keypoint', label: '重点·判断方法', text: '判断两圆位置关系，先求<strong>圆心距 d = |O₁O₂|</strong>，再与 <strong>r₁ + r₂</strong> 和 <strong>|r₁ - r₂|</strong> 比较：先比 d 与 r₁+r₂ 判断内外，再比 d 与 |r₁-r₂| 判断是否内含，中间区间即为相交。' },
        { type: 'list', items: ['第一步：把两圆方程化为标准方程，读出圆心 O₁、O₂ 与半径 r₁、r₂', '第二步：用两点间距离公式求圆心距 d = |O₁O₂|', '第三步：比较 d 与 r₁+r₂、|r₁-r₂|，对照五种关系得出结论'] },
        { type: 'example', label: '例题1', text: '已知圆 C₁：(x-1)² + (y-2)² = 25，圆 C₂：(x-4)² + (y+2)² = 4，判断两圆的位置关系。<br><br><strong>解</strong>：由 C₁ 得 O₁(1, 2)，r₁ = 5；由 C₂ 得 O₂(4, -2)，r₂ = 2。<br>圆心距 d = |O₁O₂| = √[(4-1)² + (-2-2)²] = √(9 + 16) = 5。<br>而 r₁ + r₂ = 7，|r₁ - r₂| = 3，满足 3 &lt; 5 &lt; 7，即 |r₁ - r₂| &lt; d &lt; r₁ + r₂，故<strong>两圆相交</strong>。' },
        { type: 'heading', text: '二、两圆的公共弦' },
        { type: 'paragraph', text: '当两个圆相交时，它们有两个公共点，连接这两个公共点的线段叫做两圆的公共弦。公共弦所在的直线，可以通过一种非常简洁的方法得到：将两圆的一般方程直接相减。' },
        { type: 'keypoint', label: '重点·公共弦方程', text: '设两圆的一般方程为 C₁ = 0、C₂ = 0，把它们<strong>相减（C₁ - C₂ = 0）</strong>，二次项恰好抵消，得到的一次方程就是两圆<strong>公共弦所在直线</strong>的方程；若相减后得到常数 0，则说明两圆同心或方程成比例，需另行讨论。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">相交两圆的公共弦</text><circle cx="280" cy="140" r="90" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="400" cy="140" r="90" fill="#f7d9d0" stroke="#e05d44" stroke-width="2.5"/><line x1="340" y1="55" x2="340" y2="225" stroke="#5a7a2a" stroke-width="3"/><circle cx="340" cy="55" r="4" fill="#5a7a2a"/><circle cx="340" cy="225" r="4" fill="#5a7a2a"/><text x="340" y="48" font-size="14" fill="#5a7a2a" text-anchor="middle">公共弦 AB</text><text x="340" y="252" font-size="14" fill="#33536e" text-anchor="middle">两圆方程相减，得公共弦所在直线方程</text></svg>', caption: '图2　两圆相交时，公共弦 AB 是两圆公共部分连成的线段，所在直线由方程相减得到。' },
        { type: 'example', label: '例题2', text: '已知圆 C₁：x² + y² + 2x - 4y - 4 = 0，圆 C₂：x² + y² - 4x + 2y - 6 = 0，求两圆公共弦的长。<br><br><strong>解</strong>：① 两圆方程相减：(C₁ - C₂) 得 6x - 6y + 2 = 0，即公共弦所在直线为 3x - 3y + 1 = 0。<br>② 由 C₁ 配方得 (x+1)² + (y-2)² = 9，故圆心 O₁(-1, 2)，半径 r₁ = 3。<br>③ O₁ 到公共弦直线的距离 h = |3(-1) - 3·2 + 1| / √(3²+3²) = 8 / √18 = 4√2 / 3。<br>④ 由弦长公式，公共弦长 = 2√(r₁² - h²) = 2√(9 - 32/9) = 2√(49/9) = 14/3。<br>故公共弦长为 <strong>14/3</strong>。' },
        { type: 'heading', text: '三、圆系方程' },
        { type: 'paragraph', text: '圆系（也称圆族）是指满足某种共同条件的一族圆。高考中常见两类：过两圆交点的圆系，以及过直线与圆交点的圆系。掌握圆系方程，可以避免重复求解交点，简化计算。' },
        { type: 'keypoint', label: '重点·过两圆交点的圆系', text: '设两圆 C₁ = 0、C₂ = 0 相交于两点，则<strong>过这两个交点</strong>的所有圆（除 C₂ 本身外）可统一表示为：<br><strong>C₁ + λC₂ = 0（λ ≠ -1）</strong>。<br>其中 λ 为参数。当 λ = -1 时方程退化为两圆的公共弦直线，故须 λ ≠ -1。' },
        { type: 'paragraph', text: '类似地，对于一条直线与一个圆的交点，也可以构造圆系。这类圆系的特点是把直线“吸收”进方程，使交点自然满足。' },
        { type: 'keypoint', label: '重点·过直线与圆交点的圆系', text: '设直线 l = 0 与圆 C = 0 相交于两点，则<strong>过这两个交点</strong>的所有圆可统一表示为：<br><strong>C + λl = 0（λ 为参数）</strong>。<br>代入交点坐标时，因 l = 0 且 C = 0 同时成立，故所得方程必过这两个交点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="26" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">过两圆交点的圆系（示意）</text><line x1="340" y1="50" x2="340" y2="260" stroke="#7a5aa0" stroke-width="1.5" stroke-dasharray="5"/><circle cx="340" cy="150" r="90" fill="none" stroke="#4a7de0" stroke-width="2.5"/><circle cx="340" cy="105" r="100.6" fill="none" stroke="#e05d44" stroke-width="2.5"/><circle cx="340" cy="195" r="100.6" fill="none" stroke="#7a5aa0" stroke-width="2.5"/><circle cx="250" cy="150" r="5" fill="#2b5b9e"/><circle cx="430" cy="150" r="5" fill="#2b5b9e"/><text x="250" y="140" font-size="13" fill="#2b5b9e" text-anchor="middle">P₁</text><text x="430" y="140" font-size="13" fill="#2b5b9e" text-anchor="middle">P₂</text><text x="340" y="285" font-size="14" fill="#33536e" text-anchor="middle">所有过 P₁、P₂ 的圆构成一个圆系（含原两圆）</text></svg>', caption: '图3　过两定点 P₁、P₂ 的无数个圆组成圆系，三个不同颜色的圆都经过 P₁、P₂。' },
        { type: 'list', items: ['使用 C₁ + λC₂ = 0 时，注意它不包含圆 C₂ 本身（λ 取不到使 C₂ 单独出现的情形）', '求圆系中满足额外条件（如过某点、半径定值）的圆时，代入条件解 λ 即可', '公共弦对应 λ = -1 的退化情形，是直线而非圆'] },
        { type: 'warn', label: '易错', text: '使用圆系方程 <strong>C₁ + λC₂ = 0</strong> 时，最容易漏掉两点：一是 <strong>λ ≠ -1</strong>，否则方程退化为公共弦直线而不是圆；二是该圆系<strong>不含第二个已知圆 C₂</strong> 本身（因为无论 λ 取何值都消不去 C₁ 项）。若题目要求“包括已知圆在内的所有圆”，需单独把 C₂ 补上。' },
        { type: 'tip', label: '提示', text: '遇到“求过两圆交点且满足某条件的圆”时，<strong>优先设圆系 C₁ + λC₂ = 0</strong>，把额外条件代入解出 λ，往往比先求交点再设标准圆方程更简洁，也避免了求解交点坐标的繁琐运算。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['五种位置关系由 d 与 r₁+r₂、|r₁-r₂| 的大小关系唯一确定', '相交两圆的公共弦所在直线：将两圆方程相减得到', '公共弦长 = 2√(r² - h²)，h 为圆心到该直线的距离', '过两圆交点的圆系：C₁ + λC₂ = 0（λ ≠ -1）', '过直线与圆交点的圆系：C + λl = 0', '用圆系解题可避免求交点，注意 λ = -1 退化为公共弦直线'] }
      ],
      exercises: [
        { type: 'choice', question: '已知两圆圆心距 d = 5，半径 r₁ = 2、r₂ = 3，则两圆的位置关系是？', options: ['外离', '外切', '相交', '内切'], answer: '外切', explanation: '两圆外切的判定条件是圆心距等于两半径之和，即 d = r₁ + r₂。本题中 r₁ + r₂ = 2 + 3 = 5，恰好等于 d = 5，因此两圆外切。外离需 d>5，相交需 1<d<5，内切需 d=1，均不满足。' },
        { type: 'choice', question: '求相交两圆公共弦所在直线的方程，应当采用的方法是？', options: ['将两圆方程相加', '将两圆方程相减', '联立两圆方程求交点', '求两圆圆心连线方程'], answer: '将两圆方程相减', explanation: '两圆方程相减时，二次项 x²、y² 系数相同会相互抵消，得到一个一次方程，该方程恰好经过两圆的两个公共点，即为公共弦所在直线。相加不能消去二次项；联立求交点虽可行但更繁琐；圆心连线是连心线，并非公共弦。' },
        { type: 'choice', question: '关于过两圆交点的圆系方程，下列说法正确的是？', options: ['过两圆交点的圆系不含这两个已知圆', '过直线与圆交点的圆系只有一个圆', '过两圆交点的圆系可表示为 C₁ + λC₂ = 0（λ≠-1）', '圆系方程中 λ 可以取 -1'], answer: '过两圆交点的圆系可表示为 C₁ + λC₂ = 0（λ≠-1）', explanation: '过两圆 C₁=0、C₂=0 交点的圆系标准形式为 C₁ + λC₂ = 0，且要求 λ ≠ -1，否则二次项全部消去而退化为公共弦直线。该圆系通过取不同 λ 得到无数个圆，但本身不含圆 C₂；过直线与圆交点的圆系含无数个圆而非仅一个。' },
        { type: 'fill', question: '若两圆圆心距 d 满足 d < |r₁ - r₂|，则两圆的位置关系为____。', answer: '内含', explanation: '两圆位置由圆心距 d 与半径的关系决定：当 d 小于两半径之差的绝对值 |r₁ - r₂| 时，半径较小的圆完全落在另一个圆的内部且无公共点，这种状态称为内含（d = 0 时退化为同心圆，是内含的特殊情形）。' },
        { type: 'fill', question: '过两圆交点的圆系方程 C₁ + λC₂ = 0 中，参数 λ 不能等于____，否则方程退化为公共弦所在直线。', answer: '-1', explanation: '在圆系 C₁ + λC₂ = 0 中，若 λ = -1，则方程变为 C₁ - C₂ = 0，两圆的二次项 x²、y² 全部抵消，只剩一次项和常数项，得到的是公共弦所在直线而非圆。因此为保证表示一个圆，必须规定 λ ≠ -1。' }
      ]
    },

    /* ---------------- 第2课时 椭圆 ---------------- */
    {
      id: 'zt5-u3-l2',
      name: '椭圆',
      chapter: '解析几何复习 · 六、椭圆',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、椭圆的定义' },
        { type: 'paragraph', text: '椭圆是平面内最基础的圆锥曲线之一。从几何定义上看，椭圆是到两个定点距离之和为常数（且该常数大于两定点间距离）的点的轨迹，这两个定点就是椭圆的焦点。' },
        { type: 'paragraph', text: '设平面内两个定点为 F₁、F₂，动点 P 到 F₁、F₂ 的距离之和记为常数 2a。只有当这个常数严格大于两焦点间距离 2c 时，轨迹才是真正的椭圆；若等于 2c 则轨迹退化为线段 F₁F₂，若小于 2c 则无轨迹。' },
        { type: 'keypoint', label: '重点·定义', text: '平面内与两个定点 F₁、F₂ 的距离之和等于常数 2a 的点的轨迹叫做椭圆，其中 <strong>|PF₁| + |PF₂| = 2a &gt; 2c</strong>（2a &gt; 2c &gt; 0），两个定点 F₁、F₂ 叫做椭圆的<strong>焦点</strong>，两焦点间的距离 |F₁F₂| = 2c 叫做焦距。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="26" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">椭圆（焦点在 x 轴）</text><ellipse cx="340" cy="170" rx="180" ry="120" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="160" y1="170" x2="520" y2="170" stroke="#33536e" stroke-width="1.5" stroke-dasharray="5"/><line x1="340" y1="50" x2="340" y2="290" stroke="#33536e" stroke-width="1.5" stroke-dasharray="5"/><circle cx="206" cy="170" r="5" fill="#e05d44"/><circle cx="474" cy="170" r="5" fill="#e05d44"/><circle cx="160" cy="170" r="4" fill="#2b5b9e"/><circle cx="520" cy="170" r="4" fill="#2b5b9e"/><circle cx="340" cy="50" r="4" fill="#5a7a2a"/><circle cx="340" cy="290" r="4" fill="#5a7a2a"/><g font-size="14" fill="#2b5b9e"><text x="206" y="194" text-anchor="middle">F₁</text><text x="474" y="194" text-anchor="middle">F₂</text><text x="148" y="158" text-anchor="middle">A₁</text><text x="532" y="158" text-anchor="middle">A₂</text><text x="340" y="44" text-anchor="middle">B₁</text><text x="340" y="308" text-anchor="middle">B₂</text></g><text x="340" y="312" font-size="13" fill="#33536e" text-anchor="middle">长轴 2a，短轴 2b，焦距 2c，c² = a² - b²</text></svg>', caption: '图1　焦点在 x 轴的椭圆：A₁A₂ 为长轴（2a），B₁B₂ 为短轴（2b），F₁、F₂ 为焦点，c² = a² - b²。' },
        { type: 'keypoint', label: '重点·标准方程（焦点在 x 轴）', text: '当焦点在 x 轴上时，设半焦距 c，半长轴 a，半短轴 b，标准方程为 <strong>x²/a² + y²/b² = 1（a &gt; b &gt; 0）</strong>，其中 <strong>c² = a² - b²</strong>，焦点坐标为 <strong>(±c, 0)</strong>，顶点为 (±a, 0)、(0, ±b)。' },
        { type: 'keypoint', label: '重点·标准方程（焦点在 y 轴）', text: '当焦点在 y 轴上时，标准方程交换 x、y 的位置：<strong>y²/a² + x²/b² = 1（a &gt; b &gt; 0）</strong>，其中 <strong>c² = a² - b²</strong>，焦点坐标为 <strong>(0, ±c)</strong>，顶点为 (0, ±a)、(±b, 0)。两种情形下 a 始终大于 b，且 a 对应长轴方向。' },
        { type: 'table', headers: ['项目', '焦点在 x 轴', '焦点在 y 轴'], rows: [['标准方程', 'x²/a² + y²/b² = 1', 'y²/a² + x²/b² = 1'], ['焦点', '(±c, 0)', '(0, ±c)'], ['长轴顶点', '(±a, 0)', '(0, ±a)'], ['短轴顶点', '(0, ±b)', '(±b, 0)'], ['a、b、c 关系', 'c² = a² - b²', 'c² = a² - b²']] },
        { type: 'list', items: ['先判断焦点所在坐标轴：看 x² 与 y² 分母谁大，分母大的对应 a²、即长轴方向', '焦点在 x 轴 ⇔ x² 的分母 a² 大于 y² 的分母 b²', '焦点在 y 轴 ⇔ y² 的分母 a² 大于 x² 的分母 b²'] },
        { type: 'keypoint', label: '重点·几何性质', text: '椭圆 x²/a² + y²/b² = 1（a &gt; b &gt; 0）的主要性质：<br><strong>长轴</strong> 2a、<strong>短轴</strong> 2b、<strong>焦距</strong> 2c；<br><strong>离心率</strong> e = c/a ∈ (0, 1)，e 越接近 1 椭圆越扁；<br><strong>范围</strong> |x| ≤ a、|y| ≤ b；<br><strong>通径</strong>（过焦点且垂直于长轴的弦）长为 2b²/a。' },
        { type: 'keypoint', label: '重点·焦半径公式', text: '设焦点在 x 轴上，P(x₀, y₀) 为椭圆上一点，则 P 到左焦点 F₁(-c, 0) 的距离为 <strong>|PF₁| = a + e·x₀</strong>，到右焦点 F₂(c, 0) 的距离为 <strong>|PF₂| = a - e·x₀</strong>（也可统一记作 a ± e·x₀）。利用焦半径公式可快速处理与焦点距离相关的最值、定值问题。' },
        { type: 'example', label: '例题1', text: '已知椭圆焦点在 x 轴上，焦距 2c = 8，长轴长 2a = 10，求椭圆的标准方程。<br><br><strong>解</strong>：由 2c = 8 得 c = 4；由 2a = 10 得 a = 5。<br>因为焦点在 x 轴，设方程为 x²/a² + y²/b² = 1。<br>由 c² = a² - b² 得 b² = a² - c² = 25 - 16 = 9。<br>故椭圆的标准方程为 <strong>x²/25 + y²/9 = 1</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="24" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">焦点三角形 PF₁F₂</text><ellipse cx="340" cy="170" rx="180" ry="120" fill="#eaf1fb" stroke="#4a7de0" stroke-width="2" opacity="0.7"/><circle cx="206" cy="170" r="5" fill="#e05d44"/><circle cx="474" cy="170" r="5" fill="#e05d44"/><circle cx="340" cy="50" r="5" fill="#2b5b9e"/><line x1="206" y1="170" x2="340" y2="50" stroke="#7a5aa0" stroke-width="2.5"/><line x1="474" y1="170" x2="340" y2="50" stroke="#7a5aa0" stroke-width="2.5"/><text x="206" y="190" font-size="13" fill="#e05d44" text-anchor="middle">F₁</text><text x="474" y="190" font-size="13" fill="#e05d44" text-anchor="middle">F₂</text><text x="348" y="46" font-size="13" fill="#2b5b9e">P</text><text x="280" y="105" font-size="14" fill="#7a5aa0">|PF₁|+|PF₂|=2a</text><text x="330" y="138" font-size="14" fill="#7a5aa0">∠F₁PF₂=θ</text><text x="340" y="282" font-size="14" fill="#33536e" text-anchor="middle">焦点三角形面积公式 S = b²·tan(θ/2)</text></svg>', caption: '图2　点 P 在椭圆上，与两焦点 F₁、F₂ 构成三角形（焦点三角形），其面积可由顶角 θ 直接求出。' },
        { type: 'keypoint', label: '二级结论·焦点三角形面积', text: '设 P 为椭圆上一点，∠F₁PF₂ = θ，则焦点三角形 PF₁F₂ 的面积为 <strong>S = b²·tan(θ/2)</strong>。该结论由余弦定理结合 |PF₁| + |PF₂| = 2a 推导而来，在求解面积最值或与角相关的问题时非常高效，可作为二级结论直接使用。' },
        { type: 'example', label: '例题2', text: '已知椭圆方程为 x²/16 + y²/7 = 1，求该椭圆的离心率 e。<br><br><strong>解</strong>：由方程知 a² = 16，b² = 7，故 a = 4。<br>由 c² = a² - b² = 16 - 7 = 9，得 c = 3。<br>离心率 e = c/a = 3/4。<br>故该椭圆的离心率为 <strong>e = 3/4</strong>。' },
        { type: 'heading', text: '二、易错提醒' },
        { type: 'warn', label: '易错', text: '椭圆中最容易混淆的是 a、b、c 的关系：椭圆满足 <strong>c² = a² - b²</strong>（a 最大），而双曲线满足 c² = a² + b²。两者符号截然不同，切勿张冠李戴。其次，<strong>焦点位置的判断</strong>要看 x²、y² 分母谁大：分母大的那一项对应 a²，其所在轴就是长轴、也是焦点所在轴，绝不能想当然地认为焦点一定在 x 轴。' },
        { type: 'tip', label: '记忆', text: '区分椭圆与双曲线的一个顺口溜：椭圆“平方和”里 c² 是 a² 减 b²（a 最长），双曲线“平方差”里 c² 是 a² 加 b²。判断焦点轴时牢记“<strong>分母大者为 a²，a² 在哪轴焦点就在哪轴</strong>”，列方程前先定轴再代值。' },
        { type: 'heading', text: '三、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="26" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">焦点位置对比</text><ellipse cx="200" cy="150" rx="120" ry="70" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="80" y1="150" x2="320" y2="150" stroke="#33536e" stroke-width="1.5" stroke-dasharray="5"/><circle cx="155" cy="150" r="4" fill="#e05d44"/><circle cx="245" cy="150" r="4" fill="#e05d44"/><text x="200" y="250" font-size="14" fill="#33536e" text-anchor="middle">焦点在 x 轴：x²/a² + y²/b² = 1（a&gt;b）</text><ellipse cx="500" cy="150" rx="70" ry="120" fill="#f7d9d0" stroke="#e05d44" stroke-width="2.5"/><line x1="500" y1="30" x2="500" y2="270" stroke="#33536e" stroke-width="1.5" stroke-dasharray="5"/><circle cx="500" cy="105" r="4" fill="#2b5b9e"/><circle cx="500" cy="195" r="4" fill="#2b5b9e"/><text x="500" y="250" font-size="14" fill="#33536e" text-anchor="middle">焦点在 y 轴：y²/a² + x²/b² = 1（a&gt;b）</text></svg>', caption: '图3　左右对比两种焦点位置的标准方程：长轴始终对应分母较大的那一项。' },
        { type: 'list', items: ['定义：|PF₁| + |PF₂| = 2a > 2c，2a > 2c > 0 才有椭圆', '标准方程分焦点在 x 轴、y 轴两种，a 始终对应长轴方向', '核心关系 c² = a² - b²（区别于双曲线的 c² = a² + b²）', '离心率 e = c/a ∈ (0, 1)，范围 |x|≤a、|y|≤b，通径长 2b²/a', '焦半径（焦点在 x 轴）：|PF₁| = a + e·x₀，|PF₂| = a - e·x₀', '焦点三角形面积 S = b²·tan(θ/2)（二级结论）'] }
      ],
      exercises: [
        { type: 'choice', question: '椭圆定义中，动点 P 到两焦点距离之和 2a 与焦距 2c 必须满足的关系是？', options: ['2a < 2c', '2a = 2c', '2a > 2c', '二者无关系'], answer: '2a > 2c', explanation: '椭圆的几何定义要求动点 P 到两定点 F₁、F₂ 的距离之和为常数 2a，且该常数必须严格大于两焦点间的距离 2c，即 2a > 2c > 0。若 2a = 2c 轨迹退化为线段 F₁F₂，若 2a < 2c 则无轨迹，均不能称为椭圆。' },
        { type: 'choice', question: '焦点在 x 轴上的椭圆标准方程是下列哪一个？', options: ['x²/b² + y²/a² = 1（a>b>0）', 'x²/a² + y²/b² = 1（a>b>0）', 'x²/a² - y²/b² = 1（a>b>0）', 'y²/a² - x²/b² = 1（a>b>0）'], answer: 'x²/a² + y²/b² = 1（a>b>0）', explanation: '焦点在 x 轴上时，长轴沿 x 轴，标准方程形式为 x²/a² + y²/b² = 1，且满足 a > b > 0，焦点坐标为 (±c, 0)。含减号的两个选项是双曲线方程；第一项把 x²、y² 分母颠倒，对应焦点在 y 轴的情形。' },
        { type: 'choice', question: '在椭圆中，参数 a、b、c 之间满足的关系是？', options: ['c² = a² + b²', 'c² = a² - b²', 'c² = b² - a²', 'c = a + b'], answer: 'c² = a² - b²', explanation: '椭圆中 a 为半长轴、b 为半短轴、c 为半焦距，三者满足 c² = a² - b²，且 a 最大。这与双曲线 c² = a² + b² 正好相反，是椭圆与双曲线最核心的区别，记忆时务必区分符号。' },
        { type: 'fill', question: '椭圆的离心率定义为 e = ____（用 a、c 表示）。', answer: 'c/a', explanation: '椭圆的离心率 e 刻画椭圆的扁平程度，定义为半焦距 c 与半长轴 a 的比值，即 e = c/a。由于椭圆中 0 < c < a，所以离心率的取值范围是 0 < e < 1；e 越接近 1 椭圆越扁，越接近 0 越接近圆。' },
        { type: 'fill', question: '椭圆上一点 P 与两焦点 F₁、F₂ 构成焦点三角形，若 ∠F₁PF₂ = θ，则其面积 S = ____。', answer: 'b²·tan(θ/2)', explanation: '设 P 在椭圆上，∠F₁PF₂ = θ，由椭圆定义 |PF₁| + |PF₂| = 2a 及余弦定理可推导出焦点三角形 PF₁F₂ 的面积公式为 S = b²·tan(θ/2)。该结论是处理椭圆焦点三角形面积、与角相关问题的常用二级结论，能显著简化运算。' }
      ]
    }

  );
})();
