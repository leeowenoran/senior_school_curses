/* ============================================================
 * 高二数学 · 选择性必修 第一册 · 第二章 直线和圆的方程
 * 第1课时：直线的倾斜角与斜率（人教A版 §2.1）
 * 第2课时：直线的方程（人教A版 §2.2）
 * 数据注入：math.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'xb1');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 直线的倾斜角与斜率 ---------------- */
    {
      id: 'xb1-u3-l1',
      name: '直线的倾斜角与斜率',
      chapter: '第二章 直线和圆的方程 · 2.1',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、直线的倾斜角' },
        { type: 'paragraph', text: '在平面直角坐标系中，直线的位置由它相对于 x 轴的倾斜程度决定。我们需要一个量来刻画这种“倾斜程度”，这就是倾斜角，它是研究直线方向、斜率以及后续直线方程的基础。' },
        { type: 'keypoint', label: '重点·倾斜角', text: '当直线 l 与 x 轴相交时，取 x 轴作为基准，使 x 轴<strong>正向</strong>与直线 l 的<strong>向上方向</strong>之间所成的角 α 叫做直线 l 的倾斜角。当直线 l 与 x 轴平行或重合时，规定它的倾斜角为 <strong>0</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><line x1="60" y1="200" x2="560" y2="200" stroke="#4a7de0" stroke-width="2.5"/><polygon points="560,200 544,193 544,207" fill="#4a7de0"/><line x1="200" y1="200" x2="360" y2="98" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="360,98 338,104 348,122" fill="#2b5b9e"/><circle cx="200" cy="200" r="5" fill="#2b5b9e"/><path d="M 260 200 A 60 60 0 0 0 245.96 161.43" fill="none" stroke="#e05d44" stroke-width="2.5"/><text x="266" y="182" font-size="16" fill="#c0392b">α</text><text x="206" y="222" font-size="14" fill="#33536e">O</text><text x="470" y="190" font-size="14" fill="#4a7de0">x轴正向</text><text x="300" y="92" font-size="15" fill="#2b5b9e">直线向上方向</text><text x="40" y="262" font-size="15" fill="#33536e">倾斜角 α 是 x轴正向与直线的向上方向所成的最小正角</text><text x="40" y="284" font-size="15" fill="#33536e">α ∈ [0, π)，即 0° ≤ α &lt; 180°（直线平行 x 轴时 α = 0）</text></svg>', caption: '图1　倾斜角 α：x 轴正向绕交点逆时针旋转到直线向上方向所形成的最小正角。' },
        { type: 'keypoint', label: '重点·取值范围', text: '直线的倾斜角 α 的取值范围是 <strong>α ∈ [0, π)</strong>，也就是 <strong>0° ≤ α &lt; 180°</strong>。任何一条直线的倾斜角都落在这个区间内，且只取一个值。' },
        { type: 'warn', label: '易错', text: '倾斜角是“x 轴正向”与直线的“向上方向”所成的角，不是与向下方向所成的角。<strong>当直线与 x 轴平行或重合时倾斜角为 0</strong>（不是 π）；当直线垂直 x 轴时倾斜角为 <strong>π/2</strong>（90°）。' },
        { type: 'heading', text: '二、直线的斜率' },
        { type: 'keypoint', label: '重点·斜率定义', text: '一条直线的倾斜角 α（α ≠ π/2）的<strong>正切值</strong>叫做这条直线的斜率，记作 <strong>k = tanα</strong>。斜率 k 是实数，它定量地刻画了直线的倾斜程度。' },
        { type: 'warn', label: '易错', text: '当 α = π/2（直线垂直于 x 轴）时，tan(π/2) 无意义，此时<strong>直线的斜率不存在</strong>。注意是“不存在”而不是“等于 0”，垂直 x 轴的直线没有斜率这一实数。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">k = tanα 随 α 变化图像</text><line x1="80" y1="230" x2="620" y2="230" stroke="#4a7de0" stroke-width="2"/><polygon points="620,230 604,223 604,237" fill="#4a7de0"/><line x1="350" y1="250" x2="350" y2="40" stroke="#4a7de0" stroke-width="2"/><polygon points="350,40 343,56 357,56" fill="#4a7de0"/><line x1="350" y1="45" x2="350" y2="250" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="6 5"/><path d="M 110 230 Q 270 230 340 60" fill="none" stroke="#5a7a2a" stroke-width="3"/><path d="M 360 250 Q 430 250 590 230" fill="none" stroke="#e05d44" stroke-width="3"/><circle cx="110" cy="230" r="4" fill="#5a7a2a"/><circle cx="590" cy="230" r="4" fill="#e05d44"/><text x="100" y="248" font-size="14" fill="#33536e">0</text><text x="338" y="270" font-size="14" fill="#33536e">π/2</text><text x="575" y="248" font-size="14" fill="#33536e">π</text><text x="330" y="36" font-size="14" fill="#33536e">k</text><text x="200" y="150" font-size="15" fill="#5a7a2a">k≥0</text><text x="455" y="200" font-size="15" fill="#c0392b">k&lt;0</text><text x="40" y="285" font-size="14" fill="#33536e">α∈[0,π/2) 时 k≥0，随 α 增大而增大；α=π/2 时斜率不存在</text><text x="40" y="298" font-size="14" fill="#33536e">α∈(π/2,π) 时 k&lt;0，随 α 增大而增大（图像在渐近线右侧从 -∞ 升到 0）</text></svg>', caption: '图2　k = tanα 随 α 变化的图像：在 α=π/2 处断开，左侧 k≥0，右侧 k<0。' },
        { type: 'keypoint', label: '重点·两点斜率公式', text: '设直线上两点 P₁(x₁, y₁)、P₂(x₂, y₂)，且 x₁ ≠ x₂，则直线斜率 <strong>k = (y₂ - y₁) / (x₂ - x₁)</strong> = Δy / Δx，即“竖直变化量 ÷ 水平变化量”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><line x1="200" y1="180" x2="480" y2="80" stroke="#2b5b9e" stroke-width="3.5"/><circle cx="200" cy="180" r="5" fill="#2b5b9e"/><circle cx="480" cy="80" r="5" fill="#2b5b9e"/><text x="170" y="200" font-size="15" fill="#2b5b9e">P₁(x₁,y₁)</text><text x="490" y="78" font-size="15" fill="#2b5b9e">P₂(x₂,y₂)</text><line x1="200" y1="180" x2="480" y2="180" stroke="#7a5aa0" stroke-width="2" stroke-dasharray="6 4"/><line x1="480" y1="180" x2="480" y2="80" stroke="#7a5aa0" stroke-width="2" stroke-dasharray="6 4"/><path d="M 480 168 L 468 168 L 468 180 Z" fill="none" stroke="#7a5aa0" stroke-width="1.5"/><text x="320" y="200" font-size="15" fill="#7a5aa0">Δx = x₂ - x₁</text><text x="492" y="135" font-size="15" fill="#7a5aa0">Δy = y₂ - y₁</text><text x="40" y="240" font-size="14" fill="#33536e">过两点 P₁(x₁,y₁)、P₂(x₂,y₂)（x₁≠x₂），斜率 k = (y₂-y₁)/(x₂-x₁) = Δy/Δx</text><text x="40" y="256" font-size="14" fill="#33536e">即“竖直变化量 ÷ 水平变化量”，水平增量不为 0 时公式成立</text></svg>', caption: '图3　两点求斜率：构造直角三角形，k = 竖直增量 / 水平增量 = (y₂-y₁)/(x₂-x₁)。' },
        { type: 'example', label: '例题1', text: '已知 A(1, 2)、B(3, 6)，求直线 AB 的斜率 k 与倾斜角 α。<br><br><strong>解</strong>：由两点斜率公式，<br>k = (6 - 2) / (3 - 1) = 4 / 2 = <strong>2</strong>。<br>又 k = tanα = 2，且 α ∈ [0, π)，故 <strong>α = arctan2</strong>（约为 63.4°）。' },
        { type: 'example', label: '例题2', text: '若直线的倾斜角 α = 120°，求该直线的斜率 k。<br><br><strong>解</strong>：k = tan120° = tan(180° - 60°) = -tan60° = <strong>-√3</strong>。<br>说明当 α ∈ (π/2, π) 时，斜率 k 为负数。' },
        { type: 'example', label: '例题3', text: '已知 A(0, 1)、B(1, 3)、C(2, 5)，判断 A、B、C 是否共线。<br><br><strong>解</strong>：计算两两连线斜率：<br>k_AB = (3 - 1) / (1 - 0) = 2 / 1 = 2；<br>k_BC = (5 - 3) / (2 - 1) = 2 / 1 = 2。<br>因为 <strong>k_AB = k_BC = 2</strong>，即 AB 与 BC 斜率相等且过公共点 B，所以 A、B、C 三点共线。' },
        { type: 'heading', text: '三、倾斜角与斜率的对应关系' },
        { type: 'keypoint', label: '重点·对应规律', text: '倾斜角 α 与斜率 k = tanα 的对应规律如下：<br>① α ∈ [0, π/2) 时，<strong>k ≥ 0</strong>，且 k 随 α 增大而增大；<br>② α = π/2 时，<strong>k 不存在</strong>（直线垂直 x 轴）；<br>③ α ∈ (π/2, π) 时，<strong>k &lt; 0</strong>，且 k 随 α 增大而增大。' },
        { type: 'list', items: ['k > 0：直线从左下向右上倾斜，α 为锐角', 'k < 0：直线从左上向右下倾斜，α 为钝角', 'k = 0：直线水平（与 x 轴平行或重合），α = 0', 'k 不存在：直线垂直 x 轴，α = π/2'] },
        { type: 'tip', label: '提示', text: '由斜率 k 的正负可直接判断直线的<strong>升降趋势</strong>：k &gt; 0 直线上升，k &lt; 0 直线下降，k = 0 直线水平。这一性质在比较函数值大小、判断单调性时非常有用。' },
        { type: 'warn', label: '易错', text: '“k 随 α 增大而增大”要分段理解：在 [0, π/2) 和 (π/2, π) 各自内部成立，但<strong>不能跨过 π/2</strong>。例如 α 从 80° 增到 100° 时，k 从正值跳到负值（中间断开），并非单调递增。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'table', headers: ['倾斜角 α', '斜率 k', '直线特征'], rows: [['α = 0', 'k = 0', '水平直线（平行 x 轴）'], ['0 &lt; α &lt; π/2', 'k &gt; 0', '上升直线，α 越大越陡'], ['α = π/2', '不存在', '垂直 x 轴'], ['π/2 &lt; α &lt; π', 'k &lt; 0', '下降直线']] },
        { type: 'list', items: ['倾斜角 α∈[0,π) 是 x轴正向与直线向上方向的最小正角', '斜率 k = tanα（α≠π/2）；α=π/2 时斜率不存在', '两点斜率公式 k = (y₂-y₁)/(x₂-x₁)（x₁≠x₂）', 'k>0 上升、k<0 下降、k=0 水平；共线 ⇔ 斜率相等'] }
      ],
      exercises: [
        { type: 'choice', question: '直线的倾斜角为 45°，则其斜率为？', options: ['0', '1', '√2', '不存在'], answer: '1', explanation: '倾斜角 α=45° 时，斜率 k=tanα=tan45°=1。tan 函数在第一象限为正，45° 对应的正切值正好为 1。其余选项中，0 对应水平直线（α=0），√2 不是 45° 的正切值，不存在对应 α=90° 的垂直直线，均不正确。' },
        { type: 'choice', question: '过点 (0,0) 与 (2,0) 的直线的斜率为？', options: ['0', '1', '2', '不存在'], answer: '0', explanation: '两点 (0,0) 与 (2,0) 的纵坐标相同，直线水平，倾斜角 α=0，斜率 k=tan0=0。也可以用两点公式：k=(0-0)/(2-0)=0/2=0。斜率为 0 表示直线水平，与 x 轴平行。' },
        { type: 'choice', question: '若直线垂直于 x 轴，则它的斜率是？', options: ['0', '1', '-1', '不存在'], answer: '不存在', explanation: '直线垂直于 x 轴时倾斜角 α=π/2（90°），而 tan(π/2) 无定义，因此斜率不存在。注意“不存在”与“等于 0”不同：斜率为 0 对应水平直线，斜率不存在对应垂直直线。' },
        { type: 'fill', question: '过点 (1,1) 与 (4,5) 的直线的斜率 k = ____。', answer: '4/3', explanation: '由两点斜率公式 k=(y₂-y₁)/(x₂-x₁)，代入 (1,1)、(4,5) 得 k=(5-1)/(4-1)=4/3。即竖直方向上升 4、水平方向前进 3，斜率等于竖直变化量除以水平变化量。' },
        { type: 'fill', question: '若直线的斜率 k = -1，则它的倾斜角 α = ____（用角度表示）。', answer: '135°|135度|3π/4', explanation: '由 k=tanα=-1 且 α∈[0,π)，正切值为 -1 的倾斜角落在第二象限，故 α=180°-45°=135°（即 3π/4）。注意此时直线下降，对应钝角的倾斜角，而非 45°。' }
      ]
    },

    /* ---------------- 第2课时 直线的方程 ---------------- */
    {
      id: 'xb1-u3-l2',
      name: '直线的方程',
      chapter: '第二章 直线和圆的方程 · 2.2',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、直线的点斜式方程' },
        { type: 'paragraph', text: '知道了直线上一个点以及它的方向（斜率），就能唯一确定这条直线。把这一几何事实写成代数等式，就得到了直线的点斜式方程，它是推导其他形式方程的起点。' },
        { type: 'keypoint', label: '重点·点斜式', text: '若直线过点 P₀(x₀, y₀) 且斜率为 k，则直线上任意点 P(x, y) 满足 <strong>y - y₀ = k(x - x₀)</strong>，叫做直线的点斜式方程。当 k 不存在（直线垂直 x 轴）时，不能用点斜式表示。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><line x1="100" y1="140" x2="420" y2="140" stroke="#cdd9e8" stroke-width="1"/><line x1="260" y1="40" x2="260" y2="210" stroke="#cdd9e8" stroke-width="1"/><line x1="140" y1="80" x2="380" y2="200" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="380,200 360,194 367,212" fill="#2b5b9e"/><circle cx="260" cy="140" r="6" fill="#e05d44"/><line x1="260" y1="140" x2="320" y2="140" stroke="#7a5aa0" stroke-width="2" stroke-dasharray="5 4"/><line x1="320" y1="140" x2="320" y2="110" stroke="#7a5aa0" stroke-width="2" stroke-dasharray="5 4"/><path d="M 320 132 L 310 132 L 310 140 Z" fill="none" stroke="#7a5aa0" stroke-width="1.5"/><text x="240" y="128" font-size="15" fill="#e05d44">P₀(x₀,y₀)</text><text x="268" y="132" font-size="14" fill="#7a5aa0">Δx</text><text x="328" y="128" font-size="14" fill="#7a5aa0">Δy</text><text x="340" y="40" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">点斜式：y - y₀ = k(x - x₀)</text><text x="40" y="222" font-size="14" fill="#33536e">已知点 P₀(x₀,y₀) 与斜率 k，即可确定唯一一条直线</text><text x="40" y="238" font-size="14" fill="#33536e">几何意义：定点 + 方向（斜率）共同确定直线位置</text></svg>', caption: '图1　点斜式几何：已知定点 P₀ 与斜率 k（方向），直线被唯一确定。' },
        { type: 'keypoint', label: '重点·斜截式', text: '点斜式方程中若取直线与 y 轴的交点 (0, b)，则得到 <strong>y = kx + b</strong>，叫做斜截式。其中 k 为斜率，<strong>b 为直线在 y 轴上的截距</strong>（直线与 y 轴交点的纵坐标，可正可负也可为 0）。' },
        { type: 'heading', text: '二、直线的两点式与截距式' },
        { type: 'keypoint', label: '重点·两点式', text: '若直线过两点 P₁(x₁, y₁)、P₂(x₂, y₂)（x₁ ≠ x₂ 且 y₁ ≠ y₂），则方程为 <strong>(y - y₁)/(y₂ - y₁) = (x - x₁)/(x₂ - x₁)</strong>，叫做两点式。它本质上仍是斜率相等（k_P₁P = k_P₁P₂）。' },
        { type: 'keypoint', label: '重点·截距式', text: '若直线在 x 轴、y 轴上的截距分别为 a、b（均不为 0），则方程为 <strong>x/a + y/b = 1</strong>，叫做截距式。截距式直观体现直线与两坐标轴的截点，但不能表示过原点或平行于坐标轴的直线。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><line x1="60" y1="200" x2="600" y2="200" stroke="#4a7de0" stroke-width="2"/><polygon points="600,200 584,193 584,207" fill="#4a7de0"/><line x1="80" y1="210" x2="80" y2="50" stroke="#4a7de0" stroke-width="2"/><polygon points="80,50 73,66 87,66" fill="#4a7de0"/><line x1="440" y1="200" x2="80" y2="70" stroke="#2b5b9e" stroke-width="3.5"/><circle cx="440" cy="200" r="5" fill="#e05d44"/><circle cx="80" cy="70" r="5" fill="#e05d44"/><line x1="80" y1="200" x2="440" y2="200" stroke="#e05d44" stroke-width="4"/><line x1="80" y1="200" x2="80" y2="70" stroke="#e05d44" stroke-width="4"/><text x="240" y="224" font-size="15" fill="#c0392b">a（x 截距）</text><text x="92" y="138" font-size="15" fill="#c0392b">b（y 截距）</text><text x="450" y="196" font-size="14" fill="#e05d44">A(a,0)</text><text x="40" y="56" font-size="14" fill="#e05d44">B(0,b)</text><text x="340" y="40" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">截距式：x/a + y/b = 1（a≠0, b≠0）</text><text x="40" y="246" font-size="14" fill="#33536e">a 是直线与 x 轴交点的横坐标（横截距），b 是与 y 轴交点的纵坐标（纵截距）</text><text x="40" y="258" font-size="14" fill="#33536e">截距式要求 a≠0 且 b≠0，即直线不能过原点、也不能平行于坐标轴</text></svg>', caption: '图2　截距式：直线与两坐标轴交于 A(a,0)、B(0,b)，红色线段即两截距。' },
        { type: 'warn', label: '易错', text: '两点式要求 <strong>x₁ ≠ x₂ 且 y₁ ≠ y₂</strong>（否则分母为 0）；截距式要求 <strong>a ≠ 0 且 b ≠ 0</strong>。当直线平行坐标轴或过原点时，应改用点斜式或一般式，切勿强行套用这两种形式导致失效。' },
        { type: 'heading', text: '三、直线的一般式方程' },
        { type: 'keypoint', label: '重点·一般式', text: '关于 x、y 的二元一次方程 <strong>Ax + By + C = 0</strong>（A、B 不全为 0）叫做直线的一般式方程。任何一条直线都可以写成一般式，它不要求斜率存在，适用面最广。' },
        { type: 'list', items: ['垂直 x 轴：方程形如 x = a（a 为与 x 轴交点的横坐标），斜率不存在', '水平直线：方程形如 y = b（b 为与 y 轴交点的纵坐标），斜率为 0', '过原点的直线：斜截式中 b = 0，即 y = kx'] },
        { type: 'tip', label: '提示', text: '各种形式之间可以互化：一般式化为斜截式时，若 B ≠ 0 则 y = -(A/B)x - C/B，可得斜率 k = -A/B、截距 b = -C/B；若 B = 0 则直线垂直 x 轴。掌握互化便于在不同情境中灵活选用。' },
        { type: 'heading', text: '四、含参直线过定点' },
        { type: 'keypoint', label: '重点·过定点', text: '对于含参数（如 k、m）的直线方程，将其整理为关于参数的恒等式：<strong>参数的系数必须为 0 且常数项必须为 0</strong>。由此联立解出 x、y，即为直线恒过的定点坐标。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><line x1="140" y1="230" x2="540" y2="30" stroke="#4a7de0" stroke-width="2.5"/><line x1="160" y1="30" x2="520" y2="230" stroke="#2b5b9e" stroke-width="2.5"/><line x1="340" y1="30" x2="340" y2="230" stroke="#7a5aa0" stroke-width="2.5"/><line x1="140" y1="130" x2="540" y2="130" stroke="#5a7a2a" stroke-width="2.5"/><circle cx="340" cy="130" r="7" fill="#e05d44"/><text x="352" y="124" font-size="16" fill="#c0392b">定点(-2,1)</text><text x="340" y="40" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">含参直线过定点：y - 1 = k(x + 2)</text><text x="40" y="246" font-size="14" fill="#33536e">将含参方程整理为关于参数的恒等式，令各次项系数为 0，解得定点</text><text x="40" y="258" font-size="14" fill="#33536e">无论 k 取何值，直线都经过同一个定点 (-2,1)</text></svg>', caption: '图3　含参直线族：无论斜率 k 如何变化，所有直线都经过同一个定点。' },
        { type: 'example', label: '例题1', text: '求过点 (2,3) 且斜率为 2 的直线方程，并化为斜截式。<br><br><strong>解</strong>：由点斜式 y - y₀ = k(x - x₀)，代入得<br>y - 3 = 2(x - 2)，<br>展开 y - 3 = 2x - 4，整理得 <strong>y = 2x - 1</strong>。' },
        { type: 'example', label: '例题2', text: '求过 (1,2) 与 (3,4) 两点的直线方程。<br><br><strong>解</strong>：先求斜率 k = (4 - 2)/(3 - 1) = 2/2 = 1。<br>由点斜式（取点 (1,2)）：y - 2 = 1·(x - 1)，<br>整理得 <strong>y = x + 1</strong>。' },
        { type: 'example', label: '例题3', text: '已知直线 y = kx + 2k + 1，证明它恒过定点，并求定点坐标。<br><br><strong>解</strong>：将方程变形：y = k(x + 2) + 1，即 y - 1 = k(x + 2)。<br>不论 k 取何值，当 x = -2、y = 1 时等式恒成立，故直线恒过定点 <strong>(-2, 1)</strong>。' },
        { type: 'heading', text: '五、两直线的平行与垂直' },
        { type: 'keypoint', label: '重点·斜率存在时', text: '设两直线斜率分别为 k₁、k₂，且斜率均存在，则<br><strong>l₁ ∥ l₂ ⇔ k₁ = k₂ 且 b₁ ≠ b₂</strong>（截距不等才不重合）；<br><strong>l₁ ⊥ l₂ ⇔ k₁·k₂ = -1</strong>。<br>这是判断平行、垂直最常用的方法。' },
        { type: 'keypoint', label: '重点·一般式判定', text: '设 l₁: A₁x + B₁y + C₁ = 0，l₂: A₂x + B₂y + C₂ = 0（A、B 不全为 0）。<br>平行：<strong>A₁B₂ - A₂B₁ = 0</strong>（且不与常数项矛盾）；<br>垂直：<strong>A₁A₂ + B₁B₂ = 0</strong>。<br>用一般式判定可避免讨论斜率是否存在的麻烦。' },
        { type: 'table', headers: ['关系', '斜率存在时', '一般式 Ax+By+C=0 判定'], rows: [['平行 l₁∥l₂', 'k₁=k₂ 且 b₁≠b₂', 'A₁B₂-A₂B₁=0 且 A₁C₂≠A₂C₁'], ['垂直 l₁⊥l₂', 'k₁·k₂=-1', 'A₁A₂+B₁B₂=0'], ['重合', 'k₁=k₂ 且 b₁=b₂', 'A₁B₂-A₂B₁=0 且 A₁C₂=A₂C₁']] },
        { type: 'warn', label: '易错', text: '用斜率判断平行、垂直时，必须保证两直线斜率都存在。若一条直线斜率不存在（垂直 x 轴）、另一条斜率为 0（水平），则二者垂直；若两条都垂直 x 轴，则二者平行。这些特殊情形不能遗漏，否则会漏解。' },
        { type: 'tip', label: '记忆', text: '记忆口诀：平行看“系数交叉乘相减为零”，垂直看“x、y 系数对应相乘再相加为零”。当题目中出现一般式或直线可能垂直坐标轴时，优先用一般式条件判定，最为稳妥。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['点斜式 y-y₀=k(x-x₀)、斜截式 y=kx+b（需斜率存在）', '两点式、截距式 x/a+y/b=1（a,b≠0）', '一般式 Ax+By+C=0（A,B 不全为 0），最通用', '含参直线过定点：整理为参数恒等式，令系数为 0', 'l₁∥l₂⇔k₁=k₂且b₁≠b₂；l₁⊥l₂⇔k₁k₂=-1（斜率存在时）'] }
      ],
      exercises: [
        { type: 'choice', question: '过点 (0,0) 且斜率为 1 的直线方程是？', options: ['y = x', 'y = -x', 'y = 1', 'x = 0'], answer: 'y = x', explanation: '由斜截式 y = kx + b，代入 k=1、过 (0,0) 得 b=0，故方程为 y = x。也可由点斜式 y-0 = 1·(x-0) 直接得到 y = x。其余选项 y=-x 斜率为 -1，y=1 水平直线，x=0 是 y 轴，均不符合。' },
        { type: 'choice', question: '直线 2x + 3y - 6 = 0 在 y 轴上的截距是？', options: ['2', '3', '-2', '-6'], answer: '2', explanation: '将一般式化为斜截式：3y = -2x + 6，即 y = -(2/3)x + 2，故 y 截距 b = 2。也可令 x=0 得 3y-6=0，解得 y=2，直线与 y 轴交于 (0,2)，截距为 2。注意截距是坐标值，不是长度。' },
        { type: 'choice', question: '直线 y = 2x + 1 与 y = 2x - 3 的位置关系是？', options: ['相交', '平行', '重合', '垂直'], answer: '平行', explanation: '两直线的斜率均为 2，即 k₁ = k₂，但截距分别为 1 和 -3，b₁ ≠ b₂，因此它们平行而不重合。若化为一般式 2x - y + 1 = 0 与 2x - y - 3 = 0，x、y 系数成比例而常数项不成同一比例，故两直线平行。' },
        { type: 'fill', question: '过点 (1,0) 且垂直于 x 轴的直线方程是 ____。', answer: 'x=1|x = 1', explanation: '垂直于 x 轴的直线斜率不存在，其方程形如 x = a（a 为直线与 x 轴交点的横坐标）。已知直线过点 (1,0)，即与 x 轴交于 (1,0)，故 a = 1，方程为 x = 1。注意这类直线不能用点斜式或斜截式表示。' },
        { type: 'fill', question: '直线 (m - 1)x + (m + 1)y - 2m = 0 恒过定点 ____。', answer: '(1,1)|（1,1）', explanation: '将原方程按参数 m 整理：m(x + y - 2) + (-x + y) = 0。要使等式对任意 m 恒成立，须令 m 的系数与常数项同时为 0，即 x + y - 2 = 0 且 -x + y = 0，解得 x = 1、y = 1。故直线恒过定点 (1,1)。' }
      ]
    }

  );
})();
