/* ============================================================
 * 数学 · 高考复习专题「函数与导数」 · 第 3 单元（2 课时）
 * 第1课时：幂函数·二次函数·对勾函数
 * 第2课时：指数函数与对数函数
 * 数据注入：math.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt1');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 幂函数·二次函数·对勾函数 ---------------- */
    {
      id: 'zt1-u3-l1',
      name: '幂函数·二次函数·对勾函数',
      chapter: '函数与导数复习 · 三 3.1 幂函数·二次函数·对勾函数',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、幂函数' },
        { type: 'paragraph', text: '幂函数是高考函数部分的入门模型。一般地，形如 y = x^α（α ∈ R）的函数称为幂函数，其中 x 是自变量，α 是常数。研究幂函数，重点是抓住指数 α 对图像形状、奇偶性与单调性的影响。' },
        { type: 'keypoint', label: '重点·定义', text: '<strong>幂函数</strong>：形如 <strong>y = x^α（α ∈ R）</strong> 的函数。它的特点是<strong>底数是自变量 x，指数 α 是常数</strong>。所有幂函数都经过定点 <strong>(1,1)</strong>：因为无论 α 取何值，1^α = 1。' },
        { type: 'paragraph', text: '常见的幂函数有 y = x、y = x²、y = x³、y = x^(1/2)（即 √x，定义域 x ≥ 0）、y = x^(-1)（即 1/x，定义域 x ≠ 0）。它们的图像在原点附近与第一象限差异明显。' },
        { type: 'list', items: ['y=x：过原点与 (1,1)，奇函数，在 R 上递增', 'y=x²：过 (0,0) 与 (1,1)，偶函数，在 (-∞,0] 减、[0,+∞) 增', 'y=x³：过原点与 (1,1)，奇函数，在 R 上递增', 'y=x^(1/2)：定义域 [0,+∞)，在 [0,+∞) 上递增', 'y=x^(-1)：奇函数，在 (-∞,0) 与 (0,+∞) 上分别递减'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><line x1="60" y1="170" x2="650" y2="170" stroke="#33536e" stroke-width="2"/><line x1="340" y1="20" x2="340" y2="300" stroke="#33536e" stroke-width="2"/><text x="650" y="190" font-size="14" fill="#33536e">x</text><text x="352" y="35" font-size="14" fill="#33536e">y</text><polyline points="190,300 340,170 490,40" fill="none" stroke="#2b5b9e" stroke-width="3"/><text x="500" y="45" font-size="14" fill="#2b5b9e">y=x</text><polyline points="295,70 313,128 340,170 367,128 385,70" fill="none" stroke="#e05d44" stroke-width="3"/><text x="395" y="70" font-size="14" fill="#e05d44">y=x^2</text><polyline points="340,170 360,150 385,140 420,132 470,126" fill="none" stroke="#5a7a2a" stroke-width="3"/><text x="480" y="124" font-size="14" fill="#5a7a2a">y=x^(1/2)</text><polyline points="356,160 358,150 376,158 420,166 470,169" fill="none" stroke="#7a5aa0" stroke-width="3"/><polyline points="324,180 322,190 304,182 260,174 210,171" fill="none" stroke="#7a5aa0" stroke-width="3"/><text x="210" y="190" font-size="14" fill="#7a5aa0">y=x^(-1)</text></svg>', caption: '图1　幂函数族图像对比：不同指数 α 下 y=x^α 的形状、奇偶性与单调性各不相同。' },
        { type: 'keypoint', label: '重点·奇偶与单调', text: '幂函数 y=x^α 的<strong>奇偶性由 α 决定</strong>：α 为整数时，奇数对应奇函数、偶数对应偶函数；α 为分数 m/n 时，需看定义域是否关于原点对称。<strong>单调性</strong>：α > 0 时在 (0,+∞) 上递增，α < 0 时在 (0,+∞) 上递减。' },
        { type: 'warn', label: '易错', text: '幂函数与指数函数容易混淆：<strong>幂函数是底数 x 变、指数 α 固定</strong>（y=x^α），<strong>指数函数是底数 a 固定、指数 x 变</strong>（y=a^x）。另外 y=x^α 在 α ≤ 0 时<strong>不经过原点</strong>，例如 y=1/x 在 x=0 无定义，绘图时切勿画到 y 轴上。' },
        { type: 'heading', text: '二、二次函数' },
        { type: 'paragraph', text: '二次函数是高中最重要的多项式函数。它既是幂函数的自然推广，又是一元二次方程、不等式的桥梁。其图像是抛物线，最值问题在闭区间上需要分类讨论，是高考高频考点。' },
        { type: 'keypoint', label: '重点·对称轴与顶点', text: '二次函数 <strong>f(x)=a x²+b x+c（a≠0）</strong>。配方得 f(x)=a(x + b/(2a))² + (4ac-b²)/(4a)。<br><strong>对称轴</strong>：直线 <strong>x = -b/(2a)</strong>；<br><strong>顶点</strong>：<strong>(-b/(2a), (4ac-b²)/(4a))</strong>；<br><strong>a 的符号决定开口方向</strong>：a>0 开口向上，a<0 开口向下。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><line x1="40" y1="240" x2="650" y2="240" stroke="#33536e" stroke-width="2"/><line x1="340" y1="30" x2="340" y2="270" stroke="#33536e" stroke-width="2"/><polyline points="120,240 250,70 340,40 430,70 560,240" fill="none" stroke="#2b5b9e" stroke-width="3"/><line x1="340" y1="40" x2="340" y2="240" stroke="#c0392b" stroke-width="2" stroke-dasharray="6 4"/><text x="345" y="60" font-size="14" fill="#c0392b">对称轴 x=-b/2a</text><line x1="430" y1="230" x2="560" y2="230" stroke="#5a7a2a" stroke-width="3"/><text x="445" y="225" font-size="14" fill="#5a7a2a">区间 [m,n]</text><text x="118" y="265" font-size="14" fill="#33536e">m</text><text x="553" y="265" font-size="14" fill="#33536e">n</text><text x="60" y="50" font-size="15" fill="#2b5b9e" font-weight="bold">二次函数最值由对称轴与区间 [m,n] 的相对位置决定</text></svg>', caption: '图2　闭区间 [m,n] 上二次函数最值：比较对称轴 x=-b/2a 与区间左、中、右三种位置。' },
        { type: 'example', label: '例题1', text: '已知函数 f(x)=x²-2x，求它在闭区间 [0,3] 上的最大值与最小值。<br><br><strong>解</strong>：配方得 f(x)=(x-1)²-1，抛物线开口向上，对称轴为 x=1。<br>因为 x=1 落在区间 [0,3] 内，所以在 x=1 处取得最小值 f(1)=-1。<br>最大值在离对称轴较远的端点取得：f(0)=0，f(3)=3，故最大值为 3。<br>因此，最小值为 -1，最大值为 3。' },
        { type: 'keypoint', label: '重点·闭区间最值', text: '二次函数在闭区间 [m,n] 上的最值，由<strong>对称轴与区间的相对位置</strong>决定：<br>① 对称轴在区间左侧：最值在右端点或顶点（a>0 时最小值在左端点，最大值在右端点）；<br>② 对称轴在区间内：顶点处取最值之一；<br>③ 对称轴在区间右侧：与左侧对称。务必先判断对称轴位置再求最值。' },
        { type: 'list', items: ['对称轴 x0 ≤ m（在区间左侧）：区间上单调，最值在两端点', 'm < x0 < n（在区间内）：顶点必为最值之一，另一最值在较远端', 'x0 ≥ n（在区间右侧）：区间上单调，最值在两端点'] },
        { type: 'example', label: '例题2', text: '已知函数 f(x)=x²-2a x，a 为实数，求它在 [-1,1] 上的最小值 g(a)。<br><br><strong>解</strong>：配方得 f(x)=(x-a)²-a²，对称轴为 x=a，开口向上。<br>① 当 a ≤ -1 时，对称轴在区间左侧，函数在 [-1,1] 上递增，最小值 g(a)=f(-1)=1+2a；<br>② 当 -1 < a < 1 时，对称轴在区间内，最小值 g(a)=f(a)=-a²；<br>③ 当 a ≥ 1 时，对称轴在区间右侧，函数递减，最小值 g(a)=f(1)=1-2a。<br>因此 g(a) 为分段函数，按 a 与区间 [-1,1] 的位置分三种情况讨论。' },
        { type: 'tip', label: '提示', text: '求含参数的二次函数最值时，<strong>把对称轴位置作为分类标准</strong>：以对称轴相对于区间左、右端点的位置分情况，每种情况内函数单调，最值落在端点或顶点。画一条带区间的数轴能极大降低讨论出错率。' },
        { type: 'heading', text: '三、对勾函数' },
        { type: 'paragraph', text: '对勾函数（耐克函数）f(x)=x+a/x（a>0）是一类重要的非多项式函数，常出现在最值、不等式与恒成立问题中。它由两个分支组成，在 x>0 时具有明显的最低点。' },
        { type: 'keypoint', label: '重点·对勾性质', text: '对勾函数 <strong>f(x)=x+a/x（a>0）</strong>：<br>① <strong>奇函数</strong>，图像关于原点对称；<br>② 在 <strong>(0, √a] 上递减、[√a, +∞) 上递增</strong>，最小值为 <strong>2√a</strong>（在 x=√a 取得）；<br>③ 在 (-∞, -√a] 上递增、[-√a, 0) 上递减，最大值为 <strong>-2√a</strong>（x=-√a）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><line x1="40" y1="150" x2="650" y2="150" stroke="#33536e" stroke-width="2"/><line x1="340" y1="20" x2="340" y2="280" stroke="#33536e" stroke-width="2"/><polyline points="345,150 360,170 390,180 450,185 560,190" fill="none" stroke="#2b5b9e" stroke-width="3"/><polyline points="335,150 320,130 290,120 230,115 120,110" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="390" cy="180" r="6" fill="#e05d44"/><circle cx="290" cy="120" r="6" fill="#e05d44"/><text x="400" y="200" font-size="14" fill="#e05d44">最小值点 (√a,2√a)</text><text x="200" y="105" font-size="14" fill="#e05d44">最大值点 (-√a,-2√a)</text><text x="348" y="172" font-size="13" fill="#33536e">x&gt;0</text><text x="312" y="135" font-size="13" fill="#33536e">x&lt;0</text></svg>', caption: '图3　对勾函数 f(x)=x+a/x (a>0)：奇函数，在 x=√a 取最小 2√a，在 x=-√a 取最大 -2√a。' },
        { type: 'example', label: '例题3', text: '求函数 f(x)=x+4/x 在闭区间 [1,4] 上的最大值与最小值。<br><br><strong>解</strong>：这是 a=4 的对勾函数，√a=2，在 (0,2] 上递减、[2,+∞) 上递增，最小值为 f(2)=4。<br>区间 [1,4] 包含最小值点 x=2，故最小值为 4。<br>比较两端点：f(1)=5，f(4)=5，均大于 4，故最大值为 5。<br>因此，在 [1,4] 上最小值为 4，最大值为 5。' },
        { type: 'table', headers: ['函数', '形式', '关键特征'], rows: [['幂函数', 'y = x^α（α∈R）', '过定点 (1,1)；α>0 增，α<0 减'], ['二次函数', 'f(x)=a x²+b x+c（a≠0）', '对称轴 x=-b/(2a)；顶点处取最值'], ['对勾函数', 'f(x)=x+a/x（a>0）', '奇函数；x=√a 时最小 2√a']] },
        { type: 'warn', label: '易错', text: '对勾函数 y=x+a/x 中 a 必须 <strong>大于 0</strong> 才具有上述对勾形状；若 a<0，函数在 (0,+∞) 上递增、无最小值。另外 x=0 不在定义域内，讨论最值时<strong>区间必须避开 0</strong>，并注意正负区间的单调性相反。' },
        { type: 'tip', label: '记忆', text: '对勾函数最小值 2√a 可由<strong>基本不等式</strong>直接得到：x>0 时 x + a/x ≥ 2√(x·a/x) = 2√a，当且仅当 x=√a 取等。记住 "√a 处取极值" 这一口诀，考试可快速定位最值点。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['幂函数 y=x^α 过 (1,1)，α>0 增、α<0 减', '二次函数对称轴 x=-b/(2a)，a 定开口方向', '闭区间最值先判对称轴相对区间位置，分左/中/右', '对勾函数 f(x)=x+a/x 在 x=√a 取最小 2√a，是奇函数', '含参最值按对称轴与区间位置分类讨论'] }
      ],
      exercises: [
        { type: 'choice', question: '幂函数 y = x^α（α ∈ R）的图像必过的定点是？', options: ['(0,0)', '(1,1)', '(0,1)', '(-1,-1)'], answer: '(1,1)', explanation: '对任意实数 α，当 x=1 时 y=1^α=1，故幂函数 y=x^α 的图像恒过定点 (1,1)。当 α>0 时图像也过 (0,0)，但 α≤0 时在 x=0 处无定义，因此 (0,0) 不是公共点；(0,1)、(−1,−1) 一般不过。所以答案选 (1,1)。' },
        { type: 'choice', question: '二次函数 f(x)=x²-2x 的对称轴是哪条直线？', options: ['x=1', 'x=-1', 'x=2', 'x=0'], answer: 'x=1', explanation: '二次函数 f(x)=a x²+b x+c 的对称轴公式为 x=-b/(2a)。本题中 a=1，b=-2，代入得 x=-(-2)/(2·1)=1，故对称轴为直线 x=1。也可配方得 f(x)=(x-1)²-1，直接读出对称轴 x=1。因此选 x=1。' },
        { type: 'fill', question: '函数 f(x)=x²-2x 在闭区间 [0,3] 上的最小值是 ____。', answer: '-1', explanation: '由 f(x)=(x-1)²-1 可知抛物线开口向上，顶点为 (1,-1)，且 x=1 落在区间 [0,3] 内，故最小值为 -1（在 x=1 处取得）。区间端点值 f(0)=0、f(3)=3 均大于 -1。所以该函数在 [0,3] 上的最小值为 -1。' },
        { type: 'choice', question: '对勾函数 f(x)=x+a/x（a>0）在 (0,+∞) 上的最小值是？', options: ['√a', '2√a', 'a', 'a/2'], answer: '2√a', explanation: '对勾函数 f(x)=x+a/x (a>0) 在 x>0 时由基本不等式得 x+a/x ≥ 2√(x·a/x)=2√a，当且仅当 x=√a 时取等号。因此它在 (0,+∞) 上的最小值为 2√a，在 x=√a 处取得。故正确选项为 2√a。' },
        { type: 'fill', question: '对勾函数 y=x+4/x 在 x>0 时取得最小值所对应的 x 值为 ____。', answer: '2', explanation: '对勾函数 y=x+a/x 中 a=4，由性质知在 x>0 时当 x=√a=√4=2 取得最小值，最小值为 2√a=4。也可由基本不等式 x+4/x ≥ 2√4 = 4（x=2 取等）验证。所以该函数在 x=2 处取得最小值，填 2。' }
      ]
    },

    /* ---------------- 第2课时 指数函数与对数函数 ---------------- */
    {
      id: 'zt1-u3-l2',
      name: '指数函数与对数函数',
      chapter: '函数与导数复习 · 三 3.2 指数·对数函数',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、指数函数' },
        { type: 'paragraph', text: '指数函数是描述增长与衰减的基本模型。形如 y=a^x（a>0 且 a≠1）的函数称为指数函数，其中 a 是底数、x 是自变量。指数运算律是处理指数式、解指数方程的基础。' },
        { type: 'keypoint', label: '重点·定义与性质', text: '<strong>指数函数</strong>：<strong>y = a^x（a>0，a≠1）</strong>，定义域为 R，值域为 (0,+∞)。<br>① 恒过定点 <strong>(0,1)</strong>：a^0 = 1；<br>② <strong>a>1 时递增，0<a<1 时递减</strong>；<br>③ 值域恒为正，图像始终在 x 轴上方。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><line x1="60" y1="240" x2="640" y2="240" stroke="#33536e" stroke-width="2"/><line x1="340" y1="40" x2="340" y2="260" stroke="#33536e" stroke-width="2"/><polyline points="340,150 380,110 430,75 510,45 600,35" fill="none" stroke="#2b5b9e" stroke-width="3"/><text x="560" y="35" font-size="14" fill="#2b5b9e">a&gt;1</text><polyline points="340,150 300,190 250,225 170,255 80,265" fill="none" stroke="#e05d44" stroke-width="3"/><text x="90" y="282" font-size="14" fill="#e05d44">0&lt;a&lt;1</text><circle cx="340" cy="150" r="6" fill="#5a7a2a"/><text x="350" y="145" font-size="14" fill="#5a7a2a">过 (0,1)</text></svg>', caption: '图1　指数函数 y=a^x：a>1 时递增且过 (0,1)；0<a<1 时递减且过 (0,1)。' },
        { type: 'list', items: ['a^m · a^n = a^(m+n)（同底数相乘，指数相加）', '(a^m)^n = a^(m n)（幂的乘方，指数相乘）', '(a b)^n = a^n b^n（积的幂等于幂的积）', 'a^(-n) = 1/a^n；a^(m/n) = n 次根号下 a^m'] },
        { type: 'keypoint', label: '重点·指数运算性质', text: '常用指数运算律：<strong>a^m·a^n=a^(m+n)</strong>、<strong>(a^m)^n=a^(m n)</strong>、<strong>(a b)^n=a^n b^n</strong>。解题时尽量<strong>统一底数或统一指数</strong>，再比较大小或解方程。注意 a>0 这一前提，避免对负数开偶次根。' },
        { type: 'warn', label: '易错', text: '指数函数中底数 a 必须满足 <strong>a>0 且 a≠1</strong>：a=1 时 y=1 为常函数，失去指数特征；a≤0 时 a^x 在多数 x 处无意义。另外比较 a^x 与 b^x 时，<strong>底数不同要先化同底</strong>，不能直接比指数。' },
        { type: 'heading', text: '二、对数函数' },
        { type: 'paragraph', text: '对数函数是指数函数的反函数，用于把乘法转化为加法、处理增长阶与量纲。形如 y=log_a x（a>0 且 a≠1，x>0）的函数称为对数函数，定义域为正实数。' },
        { type: 'keypoint', label: '重点·定义与性质', text: '<strong>对数函数</strong>：<strong>y = log_a x（a>0，a≠1，x>0）</strong>。与指数 y=a^x 互为反函数。<br>① 恒过定点 <strong>(1,0)</strong>：log_a 1 = 0；<br>② <strong>a>1 时递增，0<a<1 时递减</strong>；<br>③ 定义域 x>0，值域为 R。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><line x1="60" y1="260" x2="640" y2="260" stroke="#33536e" stroke-width="2"/><line x1="340" y1="40" x2="340" y2="290" stroke="#33536e" stroke-width="2"/><line x1="60" y1="280" x2="620" y2="40" stroke="#7a5aa0" stroke-width="2" stroke-dasharray="6 4"/><text x="500" y="70" font-size="14" fill="#7a5aa0">y=x</text><polyline points="340,150 380,110 430,75 510,45 600,35" fill="none" stroke="#2b5b9e" stroke-width="3"/><text x="560" y="35" font-size="14" fill="#2b5b9e">y=a^x</text><polyline points="340,150 380,190 430,225 510,255 600,265" fill="none" stroke="#e05d44" stroke-width="3"/><text x="560" y="282" font-size="14" fill="#e05d44">y=log_a x</text></svg>', caption: '图2　指数函数 y=a^x 与对数函数 y=log_a x 互为反函数，图像关于直线 y=x 对称。' },
        { type: 'keypoint', label: '重点·反函数', text: '指数函数 <strong>y=a^x</strong> 与对数函数 <strong>y=log_a x</strong> 互为反函数，两者的图像关于直线 <strong>y=x 对称</strong>，且定义域与值域互换：指数的定义域 R 是对数的值域，指数的值域 (0,+∞) 是对数的定义域。' },
        { type: 'list', items: ['log_a(M N) = log_a M + log_a N（乘积化加）', 'log_a(M/N) = log_a M - log_a N（商化减）', 'log_a(M^n) = n log_a M（幂提系数）', '换底公式：log_a b = ln b / ln a = log_c b / log_c a'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><rect x="250" y="30" width="180" height="40" rx="8" fill="#2b5b9e"/><text x="340" y="56" font-size="16" fill="#fff" text-anchor="middle">对数运算性质</text><line x1="340" y1="70" x2="150" y2="130" stroke="#4a7de0" stroke-width="2"/><line x1="340" y1="70" x2="340" y2="130" stroke="#4a7de0" stroke-width="2"/><line x1="340" y1="70" x2="530" y2="130" stroke="#4a7de0" stroke-width="2"/><rect x="60" y="130" width="180" height="44" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="1.5"/><text x="150" y="157" font-size="14" fill="#2b5b9e" text-anchor="middle">log_a(MN)=log_a M+log_a N</text><rect x="250" y="130" width="180" height="44" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="1.5"/><text x="340" y="157" font-size="14" fill="#2b5b9e" text-anchor="middle">log_a(M/N)=log_a M-log_a N</text><rect x="440" y="130" width="180" height="44" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="1.5"/><text x="530" y="157" font-size="14" fill="#2b5b9e" text-anchor="middle">log_a M^n=n log_a M</text><text x="340" y="220" font-size="15" fill="#33536e" text-anchor="middle">换底公式：log_a b = ln b / ln a</text></svg>', caption: '图3　对数三大运算性质与换底公式：乘积化加、商化减、幂提系数。' },
        { type: 'example', label: '例题1', text: '解方程 2^(x+1)=4^x。<br><br><strong>解</strong>：将右边的 4^x 化为以 2 为底：4^x=(2²)^x=2^(2x)，原方程化为 2^(x+1)=2^(2x)。<br>因为底数 2>0 且 2≠1，指数函数单调，故指数相等：x+1=2x，解得 x=1。<br>检验：左边 2²=4，右边 4¹=4，成立。因此原方程的解为 x=1。' },
        { type: 'example', label: '例题2', text: '比较 log_0.3 0.2 与 log_0.3 0.5 的大小。<br><br><strong>解</strong>：函数 y=log_0.3 x 的底数 a=0.3 满足 0<a<1，故该对数函数在定义域上单调递减。<br>因为 0.2 < 0.5，由递减性可得 log_0.3 0.2 > log_0.3 0.5。<br>因此前者大于后者。' },
        { type: 'example', label: '例题3', text: '解不等式 log_2(x-1) < 1。<br><br><strong>解</strong>：首先由对数定义要求 x-1 > 0，即 x > 1。<br>又 1 = log_2 2，原不等式化为 log_2(x-1) < log_2 2。<br>因为底数 2>1，对数函数递增，故 x-1 < 2，得 x < 3。<br>综合定义域得 1 < x < 3，解集为 (1,3)。' },
        { type: 'example', label: '例题4', text: '解方程 log_2 x + log_2(x-2) = 3。<br><br><strong>解</strong>：由对数定义需 x > 0 且 x-2 > 0，即 x > 2。<br>利用运算性质合并：log_2[x(x-2)] = 3，即 log_2(x²-2x)=3。<br>化为指数式：x²-2x = 2³ = 8，整理得 x²-2x-8=0，解得 x=4 或 x=-2。<br>由 x>2 舍去 x=-2，故原方程的解为 x=4。' },
        { type: 'table', headers: ['项目', '指数函数 y=a^x', '对数函数 y=log_a x'], rows: [['过定点', '(0,1)', '(1,0)'], ['单调性', 'a>1 增，0<a<1 减', 'a>1 增，0<a<1 减'], ['定义域/值域', 'R / (0,+∞)', '(0,+∞) / R'], ['关系', '互为反函数，图像关于 y=x 对称', '互为反函数，图像关于 y=x 对称']] },
        { type: 'warn', label: '易错', text: '对数函数的<strong>定义域 x>0 是红线</strong>：解题时凡遇 log_a(式子)，必须先令真数 > 0，并在最后<strong>检验根是否落在定义域内</strong>（增根常因忽略真数 > 0 产生）。另外 log_a(M+N) <strong>不能</strong>拆成 log_a M + log_a N，只有乘积才可拆。' },
        { type: 'tip', label: '记忆', text: '对数运算三句话：<strong>乘积化加、商化减、幂提系数</strong>。解对数方程先化同底或利用运算性质合并，再转为代数方程；解对数不等式则先定定义域，再利用单调性去掉对数符号比真数。' },
        { type: 'heading', text: '三、本课小结' },
        { type: 'list', items: ['指数 y=a^x 过 (0,1)，a>1 增、0<a<1 减', 'a^m·a^n=a^(m+n)、(a^m)^n=a^(m n)、(ab)^n=a^n b^n', '对数 y=log_a x 过 (1,0)，与指数互为反函数', 'log_a(MN)=log_aM+log_aN，log_a(M/N)=log_aM-log_aN', '解方程/不等式先化同底、定定义域，再比大小'] }
      ],
      exercises: [
        { type: 'choice', question: '指数函数 y = a^x（a>0 且 a≠1）的图像必过的定点是？', options: ['(0,0)', '(1,0)', '(0,1)', '(1,1)'], answer: '(0,1)', explanation: '对任意底数 a>0 且 a≠1，当 x=0 时 y=a^0=1，故指数函数 y=a^x 的图像恒过定点 (0,1)。(1,0) 是对数函数过的点；(0,0)、(1,1) 指数函数一般不过。因此正确选项是 (0,1)。' },
        { type: 'choice', question: '根据对数运算性质，log_a(MN) 等于下列哪式？', options: ['log_a M · log_a N', 'log_a M + log_a N', 'log_a M - log_a N', '(log_a M)/(log_a N)'], answer: 'log_a M + log_a N', explanation: '对数的乘法运算法则为 log_a(MN)=log_a M + log_a N（M>0,N>0）。这是对数的核心性质之一，常用于把乘积的对数化为对数的和。其余选项分别混淆了乘、除、商的关系，均不正确。故应选 log_a M + log_a N。' },
        { type: 'fill', question: '方程 2^(x+1)=4^x 的解为 x = ____。', answer: '1', explanation: '将 4^x 化为同底数：4^x=(2²)^x=2^(2x)，原方程变为 2^(x+1)=2^(2x)。底数相同且 2>0 且 2≠1，故指数相等：x+1=2x，解得 x=1。检验：左边 2^(2)=4，右边 4^1=4，成立。所以方程的解为 x=1。' },
        { type: 'choice', question: '比较大小：log_0.3 0.2 与 log_0.3 0.5，正确关系是？', options: ['log_0.3 0.2 < log_0.3 0.5', 'log_0.3 0.2 = log_0.3 0.5', 'log_0.3 0.2 > log_0.3 0.5', '无法比较'], answer: 'log_0.3 0.2 > log_0.3 0.5', explanation: '底数 a=0.3 满足 0<a<1，故对数函数 y=log_0.3 x 在定义域上单调递减。因为 0.2<0.5，由递减性得 log_0.3 0.2 > log_0.3 0.5。因此正确关系为前者大于后者。（底数 0.3 小于 1，对数函数递减，勿与 a>1 情形混淆。）' },
        { type: 'fill', question: '不等式 log_2(x-1) < 1 的解集是 ____（写成区间形式）。', answer: '(1,3)', explanation: '由对数定义需 x-1>0 即 x>1。又 log_2(x-1)<1=log_2 2，因底数 2>1 函数递增，故 x-1<2，得 x<3。综合得 1<x<3，解集为 (1,3)。所以答案为 (1,3)。' }
      ]
    }

  );
})();
