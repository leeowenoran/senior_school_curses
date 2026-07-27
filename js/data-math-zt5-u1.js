/* ============================================================
 * 高三数学 · 高考复习专题 · 解析几何
 * 第1课时：考试要求、命题趋势与核心思想
 * 第2课时：直线与方程
 * 数据注入：math.zt5.points（仅 push，不注册册次）
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt5');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 考试要求、命题趋势与核心思想 ---------------- */
    {
      id: 'zt5-u1-l1',
      name: '考试要求、命题趋势与核心思想',
      chapter: '解析几何复习 · 一、考试要求、命题趋势与核心思想',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、高考考点梳理' },
        { type: 'paragraph', text: '解析几何是高考数学的必考板块，贯穿小题与大题。复习时应当先建立完整的知识框架，明确“考什么”，再针对核心思想方法反复训练，掌握“怎么考、怎么解”。下面按知识模块梳理主要考点。' },
        { type: 'keypoint', label: '重点·考点1', text: '<strong>直线与圆</strong>：直线的倾斜角与斜率、五种方程形式、两直线的位置关系（平行 ∥、垂直 ⊥、相交）、点到直线的距离、圆的标准方程与一般方程、直线与圆相交的<strong>弦长</strong>问题、圆上点的最值问题。' },
        { type: 'list', items: ['直线与圆：位置关系（相离、相切、相交）与弦长公式', '圆的几何性质：圆心、半径、切线、弦心距', '最值问题：圆上点到定点/定直线的距离最值'] },
        { type: 'keypoint', label: '重点·考点2', text: '<strong>圆锥曲线的定义与标准方程</strong>：椭圆、双曲线、抛物线三种曲线的<strong>第一定义</strong>（到定点与定直线距离的关系）及其标准方程 x²/a² + y²/b² = 1、x²/a² - y²/b² = 1、y² = 2px（p > 0）。' },
        { type: 'keypoint', label: '重点·考点3', text: '<strong>几何性质（尤其离心率 e）</strong>：椭圆的离心率 e = c/a ∈ (0, 1)；双曲线的离心率 e = c/a > 1，并有渐近线 y = ±(b/a)x；抛物线的离心率 e = 1。离心率 e 是区分曲线形状的核心量。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">高考解析几何考点结构图</text><rect x="40" y="70" width="150" height="60" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="115" y="100" font-size="15" fill="#2b5b9e" text-anchor="middle">直线与圆</text><text x="115" y="120" font-size="13" fill="#33536e" text-anchor="middle">位置·弦长·最值</text><rect x="265" y="70" width="150" height="60" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="340" y="100" font-size="15" fill="#2b5b9e" text-anchor="middle">圆锥曲线定义</text><text x="340" y="120" font-size="13" fill="#33536e" text-anchor="middle">标准方程</text><rect x="490" y="70" width="150" height="60" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="565" y="100" font-size="15" fill="#2b5b9e" text-anchor="middle">几何性质</text><text x="565" y="120" font-size="13" fill="#33536e" text-anchor="middle">离心率 e</text><rect x="190" y="170" width="300" height="60" rx="8" fill="#fbe3da" stroke="#e05d44" stroke-width="2"/><text x="340" y="198" font-size="15" fill="#c0392b" text-anchor="middle">直线与圆锥曲线综合（压轴）</text><text x="340" y="218" font-size="13" fill="#33536e" text-anchor="middle">定点定值·最值范围·存在性</text><line x1="190" y1="130" x2="340" y2="170" stroke="#7a5aa0" stroke-width="2"/><line x1="490" y1="130" x2="340" y2="170" stroke="#7a5aa0" stroke-width="2"/><line x1="340" y1="130" x2="340" y2="170" stroke="#7a5aa0" stroke-width="2"/></svg>', caption: '图1　解析几何四大考点：前三项是小题基础，直线与圆锥曲线综合常作为大题压轴。' },
        { type: 'paragraph', text: '圆锥曲线家族由椭圆、双曲线、抛物线组成，它们的定义统一于“到定点（焦点）与定直线（准线）的距离之比为常数 e”。掌握定义是快速解题的利器，许多选择题可直接由定义秒答。' },
        { type: 'heading', text: '二、命题趋势' },
        { type: 'paragraph', text: '近年高考解析几何试题稳中有变：小题重基础、重定义、重几何性质；大题重综合、重运算、重思想方法。明确趋势有助于合理分配复习精力。' },
        { type: 'table', headers: ['题型', '常考内容', '分值与难度'], rows: [['选择题 / 填空题（小题）', '定义、几何性质（离心率 e、焦点、准线、渐近线）', '约 5 分，中低难度'], ['解答题（大题）', '直线与圆锥曲线综合：定点定值、最值范围、存在性', '约 12–14 分，常作压轴']] },
        { type: 'tip', label: '备考建议', text: '<strong>小题保分、大题争分</strong>：小题务必熟记三种曲线的定义与几何性质，争取不丢分；大题要训练<strong>运算的条理性与规范性</strong>，把“设而不求”流程练熟，争取拿到前几问的步骤分。' },
        { type: 'warn', label: '易错', text: '大题失分往往不在思路，而在<strong>运算</strong>：联立方程消元错误、判别式 Δ 漏写、韦达定理符号弄反、忽略曲线自身范围（如椭圆中 |x| ≤ a）。落笔前先想清消元对象与目标式，再动手计算。' },
        { type: 'heading', text: '三、核心思想方法（重点）' },
        { type: 'keypoint', label: '重点·坐标法', text: '<strong>坐标法 / 解析法</strong>：用坐标表示点、用方程表示曲线，把几何图形的位置与形状问题转化为代数方程的运算问题，是解析几何的<strong>灵魂</strong>。' },
        { type: 'list', items: ['坐标法 / 解析法：几何问题代数化', '数形结合：用图形直观指导列式，用代数结果反观图形', '设而不求：设出交点坐标却不求解，借韦达定理整体代入', '函数与方程思想：把最值、范围转化为函数问题', '转化与化归：把综合问题化归为弦长、中点、定值等基础模型', '分类讨论：斜率存在与不存在、曲线两支等情形'] },
        { type: 'keypoint', label: '重点·数形结合', text: '<strong>数形结合</strong>：先由图形判断交点的个数、弦的位置、对称性等，再据此列方程。图形能告诉你“该往哪算”，可避免盲目运算、减少错误。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">数形结合：几何特征 与 代数方程 互译</text><line x1="80" y1="200" x2="600" y2="200" stroke="#33536e" stroke-width="2"/><line x1="120" y1="30" x2="120" y2="200" stroke="#33536e" stroke-width="2"/><path d="M 200 200 Q 320 50 440 200" fill="none" stroke="#4a7de0" stroke-width="3"/><line x1="175" y1="120" x2="465" y2="120" stroke="#e05d44" stroke-width="3"/><circle cx="220" cy="120" r="6" fill="#e05d44"/><circle cx="420" cy="120" r="6" fill="#e05d44"/><text x="150" y="215" font-size="13" fill="#33536e">x 轴</text><text x="126" y="45" font-size="13" fill="#33536e">y 轴</text><text x="300" y="155" font-size="14" fill="#2b5b9e">曲线 C</text><text x="320" y="108" font-size="14" fill="#c0392b">弦 AB（直线 l）</text><text x="340" y="232" font-size="13" fill="#33536e" text-anchor="middle">几何直观：交点、弦、位置关系 转化为 方程与代数运算</text></svg>', caption: '图2　数形结合：把曲线与直线的交点、弦等几何特征转化为方程与代数运算。' },
        { type: 'keypoint', label: '重点·设而不求', text: '<strong>设而不求</strong>：设直线与曲线交点为 A(x1, y1)、B(x2, y2)，联立消元得到一元二次方程后，用<strong>韦达定理</strong>直接得到 x1 + x2 与 x1x2，再整体代入求弦长、中点、定值等目标，<strong>不必求解</strong>出交点的坐标。它是解析几何最核心的运算策略。' },
        { type: 'example', label: '例题1', text: '直线 l：y = x - 1 与抛物线 C：y² = 4x 相交于 A、B 两点。不求 A、B 坐标，求弦 AB 中点 M 的横坐标。<br><br><strong>解</strong>：设 A(x1, y1)、B(x2, y2)，M(x0, y0)。由 x = y + 1 代入 y² = 4x，得 y² = 4(y + 1)，即 y² - 4y - 4 = 0。<br>由<strong>韦达定理</strong>，y1 + y2 = 4。<br>因 M 为 AB 中点，y0 = (y1 + y2)/2 = 2，又 M 在直线 y = x - 1 上，故 x0 = y0 + 1 = 3。<br>所以中点 M 的横坐标为 <strong>3</strong>。整个过程<strong>没有解出</strong> A、B 的具体坐标，这正是“设而不求”。' },
        { type: 'example', label: '例题2', text: '直线 l：y = 2x + m 与圆 O：x² + y² = 5 交于 A、B 两点。不求 A、B 坐标，求弦长 |AB| 关于 m 的表达式，并求 |AB| = 4 时 m 的值。<br><br><strong>解</strong>：联立得 5x² + 4mx + m² - 5 = 0。<br>由<strong>韦达定理</strong>，x1 + x2 = -4m/5，x1x2 = (m² - 5)/5。<br>弦长公式 |AB| = √(1 + k²)·|x1 - x2|（其中 k = 2）：<br>|AB| = √5·√((x1 + x2)² - 4x1x2) = √5·√((100 - 4m²)/25) = 2√((25 - m²)/5)。<br>令 |AB| = 4，得 2√((25 - m²)/5) = 4，解得 m² = 5，即 <strong>m = ±√5</strong>。全程只用到根与系数关系，未解出交点坐标。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">“设而不求”解题流程</text><rect x="40" y="70" width="150" height="56" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="115" y="95" font-size="14" fill="#2b5b9e" text-anchor="middle">设 A(x1,y1)</text><text x="115" y="115" font-size="14" fill="#2b5b9e" text-anchor="middle">B(x2,y2)</text><rect x="255" y="70" width="150" height="56" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="330" y="95" font-size="14" fill="#2b5b9e" text-anchor="middle">联立方程</text><text x="330" y="115" font-size="13" fill="#33536e" text-anchor="middle">消元得一元方程</text><rect x="470" y="70" width="170" height="56" rx="8" fill="#d9f0d4" stroke="#5a7a2a" stroke-width="2"/><text x="555" y="95" font-size="14" fill="#3a5a1e" text-anchor="middle">韦达定理</text><text x="555" y="115" font-size="13" fill="#33536e" text-anchor="middle">x1+x2, x1x2</text><rect x="230" y="160" width="220" height="56" rx="8" fill="#fbe3da" stroke="#e05d44" stroke-width="2"/><text x="340" y="185" font-size="14" fill="#c0392b" text-anchor="middle">整体代入求目标式</text><text x="340" y="205" font-size="13" fill="#33536e" text-anchor="middle">不求 x1,y1,x2,y2 具体值</text><line x1="190" y1="98" x2="255" y2="98" stroke="#7a5aa0" stroke-width="2"/><line x1="405" y1="98" x2="470" y2="98" stroke="#7a5aa0" stroke-width="2"/><line x1="555" y1="126" x2="340" y2="160" stroke="#7a5aa0" stroke-width="2"/></svg>', caption: '图3　设而不求：设出交点坐标但不必解出，借助韦达定理整体代入求目标量。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['考点四大块：直线与圆、圆锥曲线定义与标准方程、几何性质（离心率e）、直线与圆锥曲线综合', '小题重定义与几何性质（离心率、焦点、准线、渐近线）', '大题（约12–14分）考直线与圆锥曲线综合，常作压轴', '核心思想：坐标法、数形结合、设而不求、韦达定理、函数与方程、转化化归', '设而不求靠韦达定理整体代入，避免直接求解交点坐标', '大题成败关键在运算条理与对曲线范围、斜率存在性的讨论'] }
      ],
      exercises: [
        { type: 'choice', question: '高考解析几何解答题（大题）通常重点考查的内容是？', options: ['直线与圆的位置关系', '圆锥曲线的定义', '直线与圆锥曲线综合（定点定值、最值范围、存在性）', '空间几何体表面积'], answer: '直线与圆锥曲线综合（定点定值、最值范围、存在性）', explanation: '解析几何大题（解答题，约12至14分）通常以直线与圆锥曲线的综合问题为核心，考查定点定值、最值范围、存在性、弦长与面积等，是高考数学中的经典压轴题型。直线与圆、圆锥曲线定义多以小题形式出现。' },
        { type: 'choice', question: '在高考小题中，圆锥曲线最常直接考查的几何性质是？', options: ['弦长公式', '离心率 e', '韦达定理', '参数方程'], answer: '离心率 e', explanation: '离心率 e 是圆锥曲线最重要的几何特征量，直接反映曲线的扁平或张开程度，定义、标准方程与离心率等几何性质常以选择题或填空题形式单独考查，属于高频基础考点。' },
        { type: 'choice', question: '解析几何中“设而不求”思想主要借助下列哪一工具实现？', options: ['求导法', '代入消元法', '韦达定理（根与系数关系）', '换元法'], answer: '韦达定理（根与系数关系）', explanation: '设而不求的关键是在联立方程得到一元二次方程后，利用韦达定理直接得到两交点横坐标之和 x1+x2 与积 x1x2，从而整体求出弦长、中点、定值等目标，而不必解出交点坐标。' },
        { type: 'fill', question: '把几何问题转化为代数问题来研究的解析几何核心思想是______。（填“坐标法”或“解析法”）', answer: '坐标法|解析法|坐标法/解析法', explanation: '解析几何的基本思想是用坐标表示点、用方程表示曲线，把几何图形的性质转化为代数方程的运算，这种方法称为坐标法，也称解析法。' },
        { type: 'fill', question: '在直线与圆锥曲线综合题中，为避免直接求解交点坐标，常借助______（根与系数关系）整体代入。', answer: '韦达定理', explanation: '设而不求时，联立直线与曲线方程会消元得到关于 x（或 y）的一元二次方程，根据韦达定理可整体得到两根之和与两根之积，从而绕开求解交点坐标的繁琐步骤。' }
      ]
    },

    /* ---------------- 第2课时 直线与方程 ---------------- */
    {
      id: 'zt5-u1-l2',
      name: '直线与方程',
      chapter: '解析几何复习 · 二、直线与方程',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、倾斜角与斜率' },
        { type: 'paragraph', text: '直线与方程是解析几何的入门，也是研究圆锥曲线的基础工具。刻画一条直线，最自然的量是它的“倾斜程度”——倾斜角与斜率。' },
        { type: 'keypoint', label: '重点·倾斜角', text: '<strong>倾斜角 α</strong>：当直线 l 与 x 轴相交时，取 x 轴<strong>正方向</strong>为始边，直线 l 向上的方向为终边所成的角；当 l 与 x 轴平行或重合时，规定 α = 0。因此倾斜角的取值范围是 <strong>α ∈ [0, π)</strong>。' },
        { type: 'paragraph', text: '斜率反映直线相对于 x 轴的倾斜程度，是倾斜角的正切值。注意斜率并非对所有直线都存在。' },
        { type: 'keypoint', label: '重点·斜率', text: '当 <strong>α ≠ π/2</strong> 时，斜率 <strong>k = tan α</strong>；已知直线上两点 P1(x1, y1)、P2(x2, y2) 且 x1 ≠ x2 时，<strong>k = (y2 - y1)/(x2 - x1)</strong>。当 α = π/2（直线垂直于 x 轴）时，斜率不存在。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">倾斜角 α 与斜率 k</text><line x1="90" y1="230" x2="620" y2="230" stroke="#33536e" stroke-width="2"/><line x1="120" y1="250" x2="120" y2="40" stroke="#33536e" stroke-width="2"/><line x1="120" y1="230" x2="430" y2="90" stroke="#e05d44" stroke-width="3"/><path d="M 120 230 L 200 230 L 193 197 Z" fill="#cfe0f7" stroke="#4a7de0" stroke-width="1.5"/><text x="160" y="218" font-size="15" fill="#2b5b9e">α</text><text x="300" y="150" font-size="15" fill="#c0392b">直线 l</text><circle cx="430" cy="90" r="5" fill="#e05d44"/><text x="440" y="95" font-size="13" fill="#33536e">P(x0,y0)</text><text x="120" y="270" font-size="13" fill="#33536e" text-anchor="middle">x 轴（倾斜角从 x 轴正方向逆时针转到 l）</text><text x="560" y="235" font-size="13" fill="#33536e">x</text><text x="126" y="50" font-size="13" fill="#33536e">y</text></svg>', caption: '图1　倾斜角 α 是 x 轴正方向逆时针转到直线 l 的角，范围为 [0, π)；α = π/2 时斜率不存在。' },
        { type: 'list', items: ['α = 0：直线水平，k = 0', '0 < α < π/2：直线向右上倾斜，k > 0', 'π/2 < α < π：直线向右下倾斜，k < 0', 'α = π/2：直线垂直于 x 轴，斜率不存在'] },
        { type: 'heading', text: '二、直线方程的五种形式' },
        { type: 'keypoint', label: '重点·点斜式', text: '<strong>点斜式</strong>：y - y0 = k(x - x0)，表示过点 (x0, y0)、斜率为 k 的直线。<strong>限制</strong>：斜率 k 必须存在（不能表示垂直于 x 轴的直线）。' },
        { type: 'keypoint', label: '重点·斜截式', text: '<strong>斜截式</strong>：y = kx + b，其中 b 是直线在 y 轴上的截距。<strong>限制</strong>：斜率 k 必须存在。' },
        { type: 'keypoint', label: '重点·两点式', text: '<strong>两点式</strong>：(y - y1)/(y2 - y1) = (x - x1)/(x2 - x1)，表示过两点 (x1, y1)、(x2, y2) 的直线。<strong>限制</strong>：要求 x1 ≠ x2 且 y1 ≠ y2（即两点不能共线于坐标轴方向）。' },
        { type: 'keypoint', label: '重点·截距式', text: '<strong>截距式</strong>：x/a + y/b = 1，其中 a 为横截距、b 为纵截距。<strong>限制</strong>：要求 a、b ≠ 0，故不能表示过原点或与坐标轴平行的直线。' },
        { type: 'keypoint', label: '重点·一般式', text: '<strong>一般式</strong>：Ax + By + C = 0（A、B 不全为 0）。它能表示<strong>平面内的任意直线</strong>，是五种形式的最终归宿；当 B ≠ 0 时 k = -A/B，当 B = 0 时直线垂直于 x 轴。' },
        { type: 'table', headers: ['形式', '方程', '适用条件 / 限制'], rows: [['点斜式', 'y - y0 = k(x - x0)', '已知一点与斜率，要求 k 存在'], ['斜截式', 'y = kx + b', '已知斜率与 y 截距，要求 k 存在'], ['两点式', '(y-y1)/(y2-y1) = (x-x1)/(x2-x1)', '已知两点，且 x1≠x2、y1≠y2'], ['截距式', 'x/a + y/b = 1', 'a、b 均不为 0，不过原点、不与坐标轴平行'], ['一般式', 'Ax + By + C = 0（A、B 不全为 0）', '可表示平面内任意直线']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">直线方程五种形式的关系</text><rect x="270" y="90" width="140" height="54" rx="8" fill="#fbe3da" stroke="#e05d44" stroke-width="2"/><text x="340" y="115" font-size="15" fill="#c0392b" text-anchor="middle">一般式</text><text x="340" y="135" font-size="12" fill="#33536e" text-anchor="middle">Ax+By+C=0</text><rect x="40" y="40" width="120" height="44" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="100" y="67" font-size="14" fill="#2b5b9e" text-anchor="middle">点斜式</text><rect x="270" y="40" width="120" height="44" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="330" y="67" font-size="14" fill="#2b5b9e" text-anchor="middle">斜截式</text><rect x="500" y="40" width="120" height="44" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="560" y="67" font-size="14" fill="#2b5b9e" text-anchor="middle">两点式</text><rect x="500" y="140" width="120" height="44" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="560" y="167" font-size="14" fill="#2b5b9e" text-anchor="middle">截距式</text><line x1="160" y1="62" x2="270" y2="100" stroke="#7a5aa0" stroke-width="2"/><line x1="330" y1="84" x2="340" y2="90" stroke="#7a5aa0" stroke-width="2"/><line x1="500" y1="62" x2="410" y2="100" stroke="#7a5aa0" stroke-width="2"/><line x1="560" y1="140" x2="410" y2="120" stroke="#7a5aa0" stroke-width="2"/><text x="340" y="200" font-size="13" fill="#33536e" text-anchor="middle">特殊形式可统一化为一般式；注意各自的限制条件</text></svg>', caption: '图2　五种形式最终都可化为一般式 Ax + By + C = 0，但各自有不同的限制条件。' },
        { type: 'heading', text: '三、易错警示' },
        { type: 'warn', label: '易错·斜率不存在', text: '遇到<strong>垂直于 x 轴的直线</strong>（如 x = x0），其斜率<strong>不存在</strong>，此时<strong>点斜式、斜截式、两点式都无法使用</strong>，只能写成 x = x0，或一般式 x - x0 = 0。涉及“斜率”的题，务必先<strong>讨论斜率是否存在</strong>。' },
        { type: 'warn', label: '易错·截距非距离', text: '<strong>截距不是距离</strong>：横截距 a、纵截距 b 是直线与坐标轴交点的<strong>坐标值</strong>，可正、可负、也可为零；而距离恒为非负数。例如直线 y = 2x - 3 的纵截距是 -3，不是 3。' },
        { type: 'warn', label: '易错·截距式局限', text: '<strong>截距式 x/a + y/b = 1 不能表示</strong>：①过原点的直线（此时 a = 0 或 b = 0）；②与 x 轴平行的直线（b 不存在意义）；③与 y 轴平行的直线（a 无定义）。这些情形应改用一般式或 x = x0、y = y0。' },
        { type: 'tip', label: '记忆', text: '<strong>一般式兜底是万能钥匙</strong>：当不确定用哪种形式、或遇到斜率不存在、过原点等特殊情况时，直接设直线为 Ax + By + C = 0，再代入已知条件求系数，最稳妥。' },
        { type: 'heading', text: '四、例题' },
        { type: 'example', label: '例题1', text: '已知直线 l 经过 A(1, 2) 与 B(3, -2) 两点，求直线 l 的方程并化为一般式。<br><br><strong>解</strong>：斜率 k = (y2 - y1)/(x2 - x1) = (-2 - 2)/(3 - 1) = -4/2 = -2。<br>由点斜式，取点 A(1, 2)：y - 2 = -2(x - 1)，即 y - 2 = -2x + 2。<br>移项得 <strong>2x + y - 4 = 0</strong>，此即直线 l 的一般式方程。' },
        { type: 'example', label: '例题2', text: '已知点 A(3, 1)、B(3, 4)。求直线 AB 的方程，并说明其斜率是否存在。<br><br><strong>解</strong>：A、B 两点的横坐标均为 3，直线 AB 垂直于 x 轴，<strong>斜率不存在</strong>（因为 x2 - x1 = 0，斜率公式分母为 0）。<br>其方程为 <strong>x = 3</strong>；注意此时不能用点斜式或斜截式表示，一般式为 <strong>x - 3 = 0</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">例题图示：过两点的直线</text><line x1="80" y1="220" x2="620" y2="220" stroke="#33536e" stroke-width="2"/><line x1="120" y1="40" x2="120" y2="220" stroke="#33536e" stroke-width="2"/><line x1="180" y1="170" x2="420" y2="90" stroke="#e05d44" stroke-width="3"/><circle cx="180" cy="170" r="6" fill="#2b5b9e"/><circle cx="420" cy="90" r="6" fill="#2b5b9e"/><text x="150" y="190" font-size="14" fill="#2b5b9e">A(1,2)</text><text x="430" y="85" font-size="14" fill="#2b5b9e">B(3,-2)</text><text x="250" y="130" font-size="14" fill="#c0392b">直线 l：2x+y-4=0</text><text x="340" y="245" font-size="13" fill="#33536e" text-anchor="middle">由两点确定一条直线：先求斜率 k = -2，再得一般式 2x + y - 4 = 0</text></svg>', caption: '图3　例1：已知 A(1,2)、B(3,-2)，先算斜率 k = -2，再得一般式 2x + y - 4 = 0。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['倾斜角 α ∈ [0, π)；斜率 k = tan α（α ≠ π/2），k = (y2-y1)/(x2-x1)', '五种形式：点斜式、斜截式、两点式、截距式、一般式，各有限制', '斜率不存在时直线为 x = x0，只能用一般式或此形式', '截距是坐标值，可正可负可为零，不是距离', '截距式不能表示过原点或与坐标轴平行的直线', '不确定时用一般式 Ax+By+C=0 兜底最稳妥'] }
      ],
      exercises: [
        { type: 'choice', question: '直线的倾斜角 α 的取值范围是？', options: ['[0, π/2)', '[0, π)', '(0, π)', '[0, π/2]'], answer: '[0, π)', explanation: '倾斜角定义为 x 轴正方向逆时针旋转到直线的最小正角，当直线与 x 轴平行或重合时为 0，当直线垂直于 x 轴时趋近于 π 但取不到，故取值范围是左闭右开区间 [0, π)。' },
        { type: 'choice', question: '过点 (1, 2) 且斜率为 3 的点斜式方程是？', options: ['y - 2 = 3(x - 1)', 'y = 3x + 2', 'y - 1 = 3(x - 2)', '(y - 2)/(x - 1) = 3'], answer: 'y - 2 = 3(x - 1)', explanation: '点斜式方程的标准形式为 y - y0 = k(x - x0)，代入点 (1, 2) 与斜率 3，得到 y - 2 = 3(x - 1)。选项 y = 3x + 2 是斜截式且常数项错误，其余两项坐标代入有误。' },
        { type: 'choice', question: '下列关于直线截距的说法，正确的是？', options: ['截距就是距离，恒为正', '截距可正、可负，也可为零', '截距式能表示所有直线', '横截距一定大于纵截距'], answer: '截距可正、可负，也可为零', explanation: '截距是直线与坐标轴交点的坐标值，横截距是令 y=0 时的 x 值，纵截距是令 x=0 时的 y 值，它们可正可负也可为零，并不是长度距离；截距式 x/a + y/b = 1 还要求 a、b 均不为零。' },
        { type: 'fill', question: '过点 P(x0, y0) 且斜率为 k 的直线，其点斜式方程为______。', answer: 'y - y0 = k(x - x0)', explanation: '点斜式是已知一点坐标与斜率时最直接的表示形式，方程为 y - y0 = k(x - x0)；当斜率不存在时该式不适用，需改用 x = x0 表示。' },
        { type: 'fill', question: '当直线垂直于 x 轴时，其斜率______，直线方程写作 x = x0。', answer: '不存在', explanation: '直线垂直于 x 轴时，其上任意两点的横坐标相同，由斜率公式 k = (y2 - y1)/(x2 - x1) 可知分母为 0，斜率不存在，此时直线方程为 x = x0。' }
      ]
    }

  );
})();
