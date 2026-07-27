/* ============================================================
 * 高三数学 · 总复习专题五 · 解析几何
 * 第5单元：抛物线重要结论与焦点弦 / 直线与圆锥曲线通用方法
 * 数据注入：math.zt5.points（由 js/data-gz.js 的 GZ_REVIEW.math 自动注册）
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt5');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 抛物线重要结论与焦点弦 ---------------- */
    {
      id: 'zt5-u5-l1',
      name: '抛物线重要结论与焦点弦',
      chapter: '解析几何复习 · 九、抛物线重要结论与焦点弦',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、抛物线的焦点、准线与焦半径' },
        { type: 'paragraph', text: '抛物线是高考解析几何的三大圆锥曲线之一，其定义在“到定点与定直线距离相等”上具有独特的几何性质。这些性质衍生出一批简洁而好用的结论，特别是焦半径公式与焦点弦的若干乘积、长度关系，在小题与解答题中都能快速破题。' },
        { type: 'keypoint', label: '重点·定义', text: '<strong>抛物线定义</strong>：平面内到一个定点 F（焦点）和一条定直线 l（准线）距离相等的点的轨迹。标准形 y² = 2px (p &gt; 0) 的顶点在原点，开口向右，焦点 <strong>F(p/2, 0)</strong>，准线 <strong>x = -p/2</strong>。焦半径即抛物线上点到焦点的距离。' },
        { type: 'list', items: ['开口向右：y² = 2px，焦点 F(p/2, 0)，准线 x = -p/2', '开口向左：y² = -2px，焦点 F(-p/2, 0)，准线 x = p/2', '开口向上：x² = 2py，焦点 F(0, p/2)，准线 y = -p/2', '开口向下：x² = -2py，焦点 F(0, -p/2)，准线 y = p/2'] },
        { type: 'keypoint', label: '重点·焦半径', text: '对于 y² = 2px 上一点 P(x₀, y₀)，由定义（到焦点距离 = 到准线距离）可得 <strong>|PF| = x₀ + p/2</strong>。同理开口向左、向上、向下时，焦半径等于对应坐标加 p/2。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图1　抛物线焦半径</text><line x1="70" y1="150" x2="560" y2="150" stroke="#33536e" stroke-width="1.5"/><line x1="70" y1="40" x2="70" y2="270" stroke="#33536e" stroke-width="1.5"/><line x1="110" y1="55" x2="110" y2="250" stroke="#e05d44" stroke-width="2" stroke-dasharray="6 4"/><text x="78" y="68" font-size="14" fill="#c0392b">准线 x=-p/2</text><polyline points="310,270 231,240 161,200 130,150 161,100 231,60 310,30" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="150" cy="150" r="6" fill="#4a7de0"/><text x="158" y="172" font-size="15" fill="#2b5b9e">F(p/2,0)</text><circle cx="191" cy="80" r="6" fill="#5a7a2a"/><text x="200" y="76" font-size="15" fill="#5a7a2a">P(x0,y0)</text><line x1="150" y1="150" x2="191" y2="80" stroke="#7a5aa0" stroke-width="2.5"/><text x="92" y="112" font-size="14" fill="#7a5aa0">焦半径 |PF|</text><line x1="110" y1="80" x2="191" y2="80" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4"/><text x="118" y="232" font-size="14" fill="#33536e">P 到准线距离 = |PF| = x0 + p/2</text></svg>', caption: '图1　焦半径等于点到准线的距离，故 |PF| = x₀ + p/2（顶点在原点时）。' },
        { type: 'heading', text: '二、焦点弦的定义与基本量' },
        { type: 'paragraph', text: '过抛物线焦点 F 的直线与抛物线交于两点 A、B，线段 AB 称为<strong>焦点弦</strong>。焦点弦集中体现了抛物线的对称性与焦点性质，其端点坐标乘积、弦长都有固定公式，掌握它们可以省去大量联立计算。' },
        { type: 'keypoint', label: '重点·端点乘积', text: '设焦点弦 AB 两端 A(x₁, y₁)、B(x₂, y₂) 在 y² = 2px 上，设直线 AB 方程为 x = my + p/2（过焦点），与 y² = 2px 联立消去 x，利用韦达定理可得 <strong>x₁x₂ = p²/4</strong>，<strong>y₁y₂ = -p²</strong>。这两个乘积与弦的斜率无关。' },
        { type: 'keypoint', label: '重点·弦长', text: '由焦半径相加：|AB| = |AF| + |BF| = (x₁ + p/2) + (x₂ + p/2) = <strong>x₁ + x₂ + p</strong>。若设弦 AB 与对称轴夹角为 θ，则进一步有 <strong>|AB| = 2p / sin²θ</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图2　焦点弦 AB</text><line x1="70" y1="150" x2="600" y2="150" stroke="#33536e" stroke-width="1.5"/><polyline points="330,275 240,245 165,205 140,150 165,95 240,55 330,25" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="160" cy="150" r="6" fill="#4a7de0"/><text x="168" y="172" font-size="15" fill="#2b5b9e">F</text><line x1="120" y1="245" x2="300" y2="60" stroke="#e05d44" stroke-width="2.5"/><circle cx="135" cy="212" r="6" fill="#5a7a2a"/><text x="100" y="232" font-size="15" fill="#5a7a2a">A(x1,y1)</text><circle cx="262" cy="98" r="6" fill="#5a7a2a"/><text x="270" y="95" font-size="15" fill="#5a7a2a">B(x2,y2)</text><text x="360" y="90" font-size="14" fill="#33536e">x1·x2 = p²/4</text><text x="360" y="115" font-size="14" fill="#33536e">y1·y2 = -p²</text><text x="360" y="140" font-size="14" fill="#33536e">|AB| = x1+x2+p</text><text x="360" y="165" font-size="14" fill="#33536e">= 2p / sin²θ</text><text x="120" y="290" font-size="14" fill="#33536e">θ 为弦 AB 与对称轴的夹角</text></svg>', caption: '图2　过焦点的弦 AB：端点乘积与弦长都有固定关系，与斜率无关。' },
        { type: 'heading', text: '三、通径与焦点弦最值' },
        { type: 'keypoint', label: '重点·通径', text: '<strong>通径</strong>是过焦点且垂直于对称轴的弦（即 θ = 90° 的焦点弦），其端点纵坐标为 ±p，故通径长 = <strong>2p</strong>。由 |AB| = 2p/sin²θ 知，sin²θ 最大为 1，所以通径是<strong>所有焦点弦中最短的</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图3　通径（最短焦点弦）</text><line x1="70" y1="150" x2="600" y2="150" stroke="#33536e" stroke-width="1.5"/><polyline points="330,270 240,242 165,202 140,150 165,98 240,58 330,30" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="160" cy="150" r="6" fill="#4a7de0"/><text x="168" y="172" font-size="15" fill="#2b5b9e">F</text><line x1="160" y1="110" x2="160" y2="190" stroke="#e05d44" stroke-width="3"/><circle cx="160" cy="110" r="5" fill="#5a7a2a"/><circle cx="160" cy="190" r="5" fill="#5a7a2a"/><text x="175" y="105" font-size="14" fill="#5a7a2a">(p/2, p)</text><text x="175" y="200" font-size="14" fill="#5a7a2a">(p/2, -p)</text><text x="300" y="150" font-size="15" fill="#c0392b" text-anchor="middle">通径长 = 2p（焦点弦中最短）</text><text x="300" y="285" font-size="14" fill="#33536e">通径是过焦点且垂直于对称轴的弦</text></svg>', caption: '图3　通径垂直于对称轴，长度恒为 2p，是焦点弦中的最短者。' },
        { type: 'table', headers: ['结论', '表达式', '说明'], rows: [['端点乘积', 'x₁x₂ = p²/4，y₁y₂ = -p²', '与弦的斜率无关'], ['弦长', '|AB| = x₁ + x₂ + p', '由焦半径相加得到'], ['弦长（角形式）', '|AB| = 2p / sin²θ', 'θ 为与对称轴夹角'], ['通径', '|AB| = 2p', 'θ = 90° 时最短焦点弦'], ['倒数和', '1/|FA| + 1/|FB| = 2/p', '二级结论，常用于填空']] },
        { type: 'tip', label: '二级结论', text: '焦点弦还有一条极好用的性质：<strong>1/|FA| + 1/|FB| = 2/p</strong>，它只与 p 有关，与弦的倾斜角无关。在求焦点弦相关填空、选择时可直接套用，省去重新推导。' },
        { type: 'heading', text: '四、典型例题' },
        { type: 'example', label: '例题1', text: '已知抛物线 y² = 4x 上一点 P 到焦点的距离为 5，求 P 的横坐标 x₀。<br><br><strong>解</strong>：y² = 4x 即 2p = 4，p = 2，焦点 F(1, 0)，准线 x = -1。由焦半径公式 |PF| = x₀ + p/2 = x₀ + 1 = 5，解得 <strong>x₀ = 4</strong>。故 P 的横坐标为 4。' },
        { type: 'example', label: '例题2', text: '抛物线 y² = 4x 的焦点弦 AB 的倾斜角为 60°，求 |AB|。<br><br><strong>解</strong>：p = 2，θ = 60°，sinθ = √3/2，sin²θ = 3/4。由 |AB| = 2p / sin²θ = 4 / (3/4) = <strong>16/3</strong>。故弦长为 16/3。' },
        { type: 'warn', label: '易错', text: '焦点弦长公式 |AB| = 2p / sin²θ 中的 θ 是弦 AB 与对称轴的夹角（对称轴水平时即直线倾斜角）。切勿把 θ 当成与 y 轴的夹角，也别把 sin²θ 误写成 cos²θ；当弦平行于对称轴（θ = 0）时该式分母为零，此时不是一般焦点弦，应单独处理。' },
        { type: 'list', items: ['焦半径 |PF| = x₀ + p/2，由抛物线定义（到焦点与到准线等距）直接得到', '焦点弦端点：x₁x₂ = p²/4，y₁y₂ = -p²，与弦的斜率无关', '弦长两形式：|AB| = x₁ + x₂ + p = 2p / sin²θ', '通径最短且长为 2p；倒数和 1/|FA| + 1/|FB| = 2/p'] },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['标准方程：先判断开口方向，再写焦点与准线', '焦半径：|PF| = x₀ + p/2（顶点在原点）', '焦点弦：x₁x₂ = p²/4，y₁y₂ = -p²，|AB| = x₁ + x₂ + p = 2p / sin²θ', '通径是最短焦点弦，长为 2p', '熟记 1/|FA| + 1/|FB| = 2/p 便于快速填空'] }
      ],
      exercises: [
        { type: 'choice', question: '抛物线 y² = 2px (p > 0) 上一点 P(x₀, y₀) 到焦点 F 的距离 |PF| 等于？', options: ['x₀', 'x₀ + p/2', 'x₀ - p/2', 'x₀ + p'], answer: 'x₀ + p/2', explanation: '由抛物线定义，点 P 到焦点 F 的距离等于它到准线 x = -p/2 的距离，即 |PF| = x₀ + p/2（x₀ 为点 P 的横坐标）。这是焦半径公式，顶点在原点时直接用横坐标加 p/2，其余选项均少加或加减错误。' },
        { type: 'choice', question: '关于抛物线 y² = 2px 的焦点弦 AB，下列结论正确的是？', options: ['x₁x₂ = p²/4', 'x₁x₂ = p²', 'y₁y₂ = p²', '|AB| = x₁ + x₂ - p'], answer: 'x₁x₂ = p²/4', explanation: '对于抛物线 y² = 2px 的焦点弦，设两端 A(x₁, y₁)、B(x₂, y₂) 在曲线上，由联立可得 x₁x₂ = p²/4 且 y₁y₂ = -p²。选项 x₁x₂ = p²/4 正确；x₁x₂ = p² 与 y₁y₂ = p² 符号量均错；|AB| = x₁ + x₂ - p 应为加 p。' },
        { type: 'fill', question: '抛物线 y² = 2px (p > 0) 的通径长为 ____。', answer: '2p', explanation: '通径是过焦点且垂直于对称轴的弦，其端点纵坐标为 ±p，横坐标均为 p/2，故两端点距离 = 2p。通径是焦点弦中最短的，这一结论在比较弦长、求最值时常用，务必记住“通径长恒为 2p”。' },
        { type: 'choice', question: '抛物线 y² = 2px 的焦点弦 AB，设 θ 为弦与对称轴的夹角，则 |AB| = ？', options: ['2p·sin²θ', '2p/cos²θ', '2p/sin²θ', 'p/sin²θ'], answer: '2p/sin²θ', explanation: '焦点弦长公式 |AB| = 2p / sin²θ，其中 θ 为弦 AB 与对称轴（x 轴）的夹角（或倾斜角）。当 θ = 90°（通径）时 sin²θ = 1，弦长最小为 2p；其余情形随 sin²θ 减小而增大，故正确式为 2p/sin²θ。' },
        { type: 'fill', question: '抛物线 y² = 2px 的焦点弦 AB，则 1/|FA| + 1/|FB| = ____。', answer: '2/p', explanation: '由焦半径公式 |FA| = x₁ + p/2、|FB| = x₂ + p/2，结合焦点弦性质 x₁x₂ = p²/4 与 x₁ + x₂ 关系，可推得 1/|FA| + 1/|FB| = (|FA| + |FB|) / (|FA|·|FB|) = |AB| / (|FA|·|FB|) = 2/p，是常用的二级结论。' }
      ]
    },

    /* ---------------- 第2课时 直线与圆锥曲线通用方法 ---------------- */
    {
      id: 'zt5-u5-l2',
      name: '直线与圆锥曲线通用方法',
      chapter: '解析几何复习 · 十、直线与圆锥曲线通用方法',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、通用解题套路（设—联—消—判—用）' },
        { type: 'paragraph', text: '直线与圆锥曲线（椭圆、双曲线、抛物线）的综合题是高考解析几何的压轴常客。这类题目虽有变化，但解题“通法”高度一致：设线、联立、消元、判判别式、用韦达定理。熟练这套流程，绝大多数问题都能稳步推进。' },
        { type: 'keypoint', label: '重点·设线', text: '解题第一步是<strong>设直线方程</strong>。常用两种设法：① <strong>y = kx + m</strong>（斜率存在时）；② <strong>x = ty + n</strong>（参数 t，可表示除水平线外的所有直线）。优先采用 x = ty + n，能自动包含斜率不存在（竖直线）的情形，免去分类讨论。' },
        { type: 'list', items: ['y = kx + m：适用斜率存在的直线，竖直线需单独讨论', 'x = ty + n：可表示除水平线外所有直线，自动包含斜率不存在', '优先选 x = ty + n，能省去对斜率不存在的分类讨论', '设元后一律与曲线方程联立，按变量消元得一元方程'] },
        { type: 'keypoint', label: '重点·联立消元', text: '将所设直线方程代入圆锥曲线方程（椭圆、双曲线、抛物线），<strong>消去一个变量</strong>（通常消去 y 或 x），得到关于另一个变量的一元二次方程。这是后续使用判别式与韦达定理的前提。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图1　直线与圆锥曲线相交</text><ellipse cx="340" cy="150" rx="200" ry="110" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="3"/><line x1="180" y1="250" x2="520" y2="50" stroke="#e05d44" stroke-width="2.5"/><circle cx="262" cy="203" r="6" fill="#5a7a2a"/><text x="200" y="225" font-size="15" fill="#5a7a2a">A(x1,y1)</text><circle cx="430" cy="99" r="6" fill="#5a7a2a"/><text x="440" y="95" font-size="15" fill="#5a7a2a">B(x2,y2)</text><text x="430" y="278" font-size="14" fill="#33536e">联立方程 → 一元二次方程</text></svg>', caption: '图1　直线与曲线相交于 A、B 两点，联立后得到一元二次方程。' },
        { type: 'heading', text: '二、判别式与位置关系' },
        { type: 'keypoint', label: '重点·判别式', text: '联立得到 ax² + bx + c = 0（a ≠ 0）后，由<strong>判别式 Δ = b² - 4ac</strong> 判定直线与曲线的位置关系：<strong>Δ &gt; 0 相交</strong>（两个交点）；<strong>Δ = 0 相切</strong>（一个切点）；<strong>Δ &lt; 0 相离</strong>（无交点）。' },
        { type: 'table', headers: ['判别式', '交点个数', '位置关系'], rows: [['Δ &gt; 0', '2 个', '直线与曲线相交'], ['Δ = 0', '1 个（切点）', '直线与曲线相切'], ['Δ &lt; 0', '0 个', '直线与曲线相离']] },
        { type: 'keypoint', label: '重点·韦达定理', text: '当 Δ ≥ 0 时，设两交点横坐标为 x₁、x₂，则 <strong>韦达定理</strong>给出：x₁ + x₂ = -b/a，x₁x₂ = c/a。同理可得纵坐标的和与积。它们把交点信息用方程系数直接表示，是“设而不求”的基础。' },
        { type: 'heading', text: '三、弦长公式与设而不求' },
        { type: 'keypoint', label: '重点·弦长公式', text: '<strong>弦长公式</strong>：若交点 A(x₁, y₁)、B(x₂, y₂)，直线斜率为 k，则 |AB| = √[(x₁-x₂)² + (y₁-y₂)²] = <strong>√(1 + k²)·|x₁ - x₂|</strong>。注意 √(1 + k²) 不能漏，它来自沿直线方向的伸缩。' },
        { type: 'keypoint', label: '重点·另一形式', text: '结合韦达定理与 Δ，弦长还可写成 <strong>|AB| = √(1 + k²)·√Δ / |a|</strong>（a 为消元后二次方程首项系数）；若消去 x 保留 y，则 |AB| = <strong>√(1 + 1/k²)·|y₁ - y₂|</strong>。两种形式本质一致。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图2　弦长与中点坐标</text><line x1="120" y1="220" x2="560" y2="90" stroke="#e05d44" stroke-width="2.5"/><circle cx="120" cy="220" r="6" fill="#5a7a2a"/><text x="80" y="240" font-size="15" fill="#5a7a2a">A</text><circle cx="560" cy="90" r="6" fill="#5a7a2a"/><text x="570" y="88" font-size="15" fill="#5a7a2a">B</text><circle cx="340" cy="155" r="6" fill="#7a5aa0"/><text x="350" y="180" font-size="15" fill="#7a5aa0">M 中点</text><line x1="340" y1="155" x2="360" y2="148" stroke="#7a5aa0" stroke-width="2"/><text x="370" y="160" font-size="14" fill="#7a5aa0">中点 xM = (x1+x2)/2</text><text x="180" y="270" font-size="14" fill="#33536e">弦长 |AB| = √(1+k²)·|x1-x2|</text></svg>', caption: '图2　弦 AB 的中点 M 由韦达定理给出，弦长用 √(1+k²)·|x₁-x₂| 计算。' },
        { type: 'tip', label: '设而不求', text: '<strong>设而不求</strong>是解析几何的核心技巧：联立后<strong>不具体解出</strong> A、B 坐标，而是直接由韦达定理把弦长、中点、斜率和等目标式用系数 a、b、c 表示。这样既能避免复杂根号运算，又能保证推导严谨、不易出错。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图3　设元：x=ty+n 可含斜率不存在</text><line x1="70" y1="150" x2="610" y2="150" stroke="#33536e" stroke-width="1.5"/><line x1="340" y1="40" x2="340" y2="260" stroke="#e05d44" stroke-width="2.5"/><text x="350" y="55" font-size="15" fill="#e05d44">x=ty+n（含竖直线）</text><line x1="150" y1="60" x2="500" y2="240" stroke="#4a7de0" stroke-width="2.5"/><text x="420" y="235" font-size="15" fill="#4a7de0">y=kx+m（斜率存在）</text><text x="150" y="285" font-size="14" fill="#33536e">优先设 x=ty+n，可避免讨论斜率不存在</text></svg>', caption: '图3　设 x = ty + n 能自然表示竖直线，省去对斜率不存在的单独讨论。' },
        { type: 'example', label: '例题1', text: '直线 y = x + 1 与椭圆 x²/4 + y² = 1 相交于 A、B，求弦长 |AB|。<br><br><strong>解</strong>：联立得 x²/4 + (x + 1)² = 1 → x² + 4(x² + 2x + 1) = 4 → 5x² + 8x = 0 → x(5x + 8) = 0，故 x₁ = 0，x₂ = -8/5。由韦达 x₁ + x₂ = -8/5，x₁x₂ = 0，|x₁ - x₂| = 8/5。k = 1，故 <strong>|AB| = √(1 + 1)·(8/5) = 8√2/5</strong>。' },
        { type: 'example', label: '例题2', text: '上例中求弦 AB 的中点 M 坐标。<br><br><strong>解</strong>：由 x₁ = 0，x₂ = -8/5，得 x_M = (x₁ + x₂)/2 = -4/5；y_M = (y₁ + y₂)/2，而 y₁ = x₁ + 1 = 1，y₂ = x₂ + 1 = -3/5，故 y_M = (1 - 3/5)/2 = 1/5。所以 <strong>M(-4/5, 1/5)</strong>。' },
        { type: 'warn', label: '易错', text: '联立后必须先确认两件事：① 消元后二次项系数不为 0（否则退化成一次方程，不能用韦达定理与弦长公式）；② 判别式 Δ ≥ 0（保证有交点）。此外，设 y = kx + m 时要单独讨论斜率不存在（竖直线）的情形，改用 x = ty + n 可规避；弦长公式千万别漏掉 √(1 + k²) 这一因子。' },
        { type: 'list', items: ['联立后先检查二次项系数非 0，否则不能用韦达', '必须保证 Δ ≥ 0，才有交点、才能谈弦长', '斜率不存在的情形：用 x = ty + n 规避', '弦长公式勿漏 √(1 + k²) 因子', '中点、斜率和等尽量用韦达定理“设而不求”'] },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['通法：设线 → 联立 → 消元 → 判 Δ → 用韦达', 'Δ 决定相交(>0)、相切(=0)、相离(<0)', '弦长 |AB| = √(1+k²)·|x₁-x₂| = √(1+k²)·√Δ/|a|', '中点坐标由韦达定理直接给出，无需解根', '优先设 x = ty + n，规避斜率不存在的讨论'] }
      ],
      exercises: [
        { type: 'choice', question: '直线与圆锥曲线联立得到一元二次方程 ax² + bx + c = 0，若 Δ = 0，表示直线与曲线？', options: ['相交', '相切', '相离', '重合'], answer: '相切', explanation: '联立直线与圆锥曲线方程并消元，得到关于 x（或 y）的一元二次方程 ax² + bx + c = 0。其判别式 Δ 决定交点个数：Δ > 0 有两个交点（相交），Δ = 0 有一个切点（相切），Δ < 0 没有交点（相离）。故 Δ = 0 表示相切。' },
        { type: 'choice', question: '直线与椭圆联立消元得 ax² + bx + c = 0 (a ≠ 0)，弦长 |AB| 公式正确的是？', options: ['|AB| = √(1+k²)·|x₁-x₂|', '|AB| = |x₁-x₂|', '|AB| = √(1+k²)·(x₁+x₂)', '|AB| = (x₁-x₂)²'], answer: '|AB| = √(1+k²)·|x₁-x₂|', explanation: '弦长公式由两点距离公式与韦达定理导出：|AB| = √[(x₁-x₂)² + (y₁-y₂)²] = √(1+k²)·|x₁-x₂|，其中 k 为直线斜率。也可写成 √(1+k²)·√Δ/|a|。漏写 √(1+k²) 是常见错误，其余选项均缺此关键因子。' },
        { type: 'fill', question: '用“设而不求”时，联立后不解出具体根，而是借助 ____ 把目标式（弦长、中点等）用系数表示。', answer: '韦达定理', explanation: '“设而不求”是解析几何核心思想：联立后不具体解出 A、B 坐标，而是利用韦达定理 x₁ + x₂ = -b/a、x₁x₂ = c/a，把弦长、中点、斜率和等目标式直接用系数 a、b、c 表示，从而大幅简化运算并减少出错。' },
        { type: 'choice', question: '设直线 x = ty + n 与圆锥曲线联立的主要目的是？', options: ['使计算更复杂', '避免讨论斜率不存在', '必须先用 y = kx + m', '消去 x'], answer: '避免讨论斜率不存在', explanation: '设直线为 y = kx + m 时，当直线垂直于 x 轴（斜率不存在）需要单独讨论。改用 x = ty + n（t 为参数）可统一表示所有非水平直线，自然包含斜率不存在的情形，从而免去分类讨论，这是优先采用该设法的原因。' },
        { type: 'fill', question: '直线与椭圆交于 A、B，则线段 AB 的中点 M 的横坐标 x_M = ____。', answer: '(x1+x2)/2', explanation: '若 A(x₁, y₁)、B(x₂, y₂) 是直线与曲线相交的两端点，则线段 AB 的中点 M 的横坐标为 x_M = (x₁ + x₂)/2，纵坐标为 y_M = (y₁ + y₂)/2。结合韦达定理，中点坐标可直接用方程系数表示，无需解出 A、B 的具体坐标。' }
      ]
    }

  );
})();
