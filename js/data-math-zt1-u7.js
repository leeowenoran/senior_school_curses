/* ============================================================
 * 高中数学 · 高考复习专题 · 函数与导数（zt1）
 * 第7单元（综合收尾单元）：2 课时
 * 数据注入：math.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt1');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 导数与函数的零点、不等式证明（综合应用） ---------------- */
    {
      id: 'zt1-u7-l1',
      name: '导数与函数的零点、不等式证明（综合应用）',
      chapter: '函数与导数复习 · 综合 零点与不等式证明',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、零点问题：方程根与函数交点的统一' },
        { type: 'paragraph', text: '研究方程 f(x)=0 的实数根个数，本质上就是研究函数 y=f(x) 的图像与 x 轴交点的个数。这一「方程—函数—图像」三位一体的视角，是处理函数零点问题的总钥匙，也是高考导数压轴题的核心考点之一。' },
        { type: 'keypoint', label: '重点·零点定义', text: '使得 <strong>f(x)=0</strong> 成立的实数 x，叫做函数 f(x) 的零点。零点就是方程 f(x)=0 的<strong>实数根</strong>，也是函数 y=f(x) 图像与 <strong>x 轴交点的横坐标</strong>（注意：零点是一个数，不是点）。' },
        { type: 'list', items: ['零点 ⇔ 方程 f(x)=0 的实根 ⇔ 图像与 x 轴交点的横坐标', '零点存在定理：若 f(a)·f(b)<0 且连续，则区间 (a,b) 内至少存在一个零点', '讨论零点个数，常用数形结合、分离参数、构造函数三类方法'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><line x1="40" y1="250" x2="650" y2="250" stroke="#33536e" stroke-width="2"/><line x1="40" y1="40" x2="40" y2="250" stroke="#33536e" stroke-width="2"/><text x="636" y="270" font-size="14" fill="#33536e">x</text><path d="M40 110 C 150 30, 220 230, 320 200 S 470 70, 650 200" fill="none" stroke="#4a7de0" stroke-width="3"/><circle cx="118" cy="250" r="6" fill="#e05d44"/><circle cx="320" cy="250" r="6" fill="#e05d44"/><circle cx="512" cy="250" r="6" fill="#e05d44"/><text x="118" y="274" font-size="13" fill="#c0392b" text-anchor="middle">x₁</text><text x="320" y="274" font-size="13" fill="#c0392b" text-anchor="middle">x₂</text><text x="512" y="274" font-size="13" fill="#c0392b" text-anchor="middle">x₃</text><text x="340" y="28" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">零点个数随参数 a 变化（中间区间：3 个零点）</text><text x="350" y="138" font-size="14" fill="#33536e">a 偏小：1 个零点；a 居中：3 个；a 偏大：1 个</text></svg>', caption: '图1　曲线 y=f(x) 与 x 轴的交点个数随参数 a 变化，体现零点个数讨论的形数结合思想。' },
        { type: 'heading', text: '二、含参零点个数的讨论方法' },
        { type: 'paragraph', text: '含参数的零点问题，关键在于把「根的个数」转化为可以计算或画图的对象。常用三种方法各有侧重：能分离参数时优先分离，不能分离时构造函数研究最值，形态直观时直接数形结合。' },
        { type: 'table', headers: ['方法', '核心思想', '适用情形'], rows: [['分离参数法', '将 a 写成 a=h(x)，转化为直线 y=a 与曲线 y=h(x) 的交点个数', '参数易分离、h(x) 性质清楚'], ['构造函数法', '构造新函数 φ(x)，研究其单调性与极值最值', '参数难分离或需证不等式'], ['数形结合法', '分别画出 y=f(x) 与 y=g(x)，直接数交点个数', '函数形态直观、便于判断']] },
        { type: 'keypoint', label: '重点·分离参数法', text: '把方程 f(x,a)=0 化为 <strong>a=h(x)</strong>，则原方程的根的个数等于直线 y=a 与曲线 y=h(x) 的交点个数。再研究 h(x) 的值域与单调性，即可按参数 a 所处区间判定交点个数。' },
        { type: 'example', label: '例题1', text: '已知 f(x)=ln x - a x（x>0），求 a 的取值范围使 f(x) 恰有两个零点。<br><br><strong>解</strong>：定义域为 (0, +∞)，f′(x)=1/x - a。<br>① 当 a ≤ 0 时，f′(x)>0，f(x) 单调递增，至多 1 个零点，不合题意。<br>② 当 a>0 时，令 f′(x)=0 得 x=1/a；x∈(0,1/a) 时 f′>0 增，x∈(1/a,+∞) 时 f′<0 减，故 x=1/a 处取最大值 f(1/a)=ln(1/a)-1=-ln a -1。<br>又 x→0⁺ 时 f(x)→-∞，x→+∞ 时 f(x)→-∞。<br>要恰有两个零点，需最大值 >0，即 -ln a -1 >0 ⇒ ln a < -1 ⇒ <strong>0 < a < 1/e</strong>。<br>故 a 的取值范围是 (0, 1/e)。' },
        { type: 'warn', label: '易错', text: '讨论 f(x)=ln x - a x 这类零点时，<strong>定义域 x>0 是前提</strong>。容易漏掉两端极限 x→0⁺ 与 x→+∞ 的分析——只有端点都趋于 -∞ 且中间出现正的极大值，才会出现两个零点。另外 a≤0 情形常因「想当然单调」被遗漏。' },
        { type: 'heading', text: '三、不等式证明：构造差函数' },
        { type: 'paragraph', text: '证明 f(x) ≥ g(x)（或 ≤），标准手法是构造差函数 F(x)=f(x)-g(x)，再用导数证明 F(x) 的最小值不小于 0（或最大值不大于 0）。恒成立问题也常转化为求 F(x) 的最值。' },
        { type: 'keypoint', label: '重点·差函数法', text: '令 <strong>F(x)=f(x)-g(x)</strong>，问题转化为证 F(x)≥0。步骤：① 求导 F′(x)；② 令 F′(x)=0 得临界点；③ 判断单调性与极值；④ 求出最小值 F_min，证 F_min ≥ 0，从而原不等式成立。' },
        { type: 'example', label: '例题2', text: '证明：对任意实数 x，都有 e^x ≥ x+1。<br><br><strong>解</strong>：令 F(x)=e^x - x - 1，定义域 R，F′(x)=e^x - 1。<br>令 F′(x)=0 得 x=0。当 x<0 时 F′<0，F 减；当 x>0 时 F′>0，F 增。<br>故 x=0 处取极小值，也是最小值 F(0)=e⁰ -0 -1=0。<br>于是 F(x) ≥ 0 对一切 x 成立，即 <strong>e^x ≥ x+1</strong>，等号当且仅当 x=0 时成立。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><rect x="190" y="20" width="300" height="46" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="340" y="49" font-size="16" fill="#2b5b9e" text-anchor="middle" font-weight="bold">构造 F(x)=f(x)-g(x)</text><line x1="340" y1="66" x2="340" y2="92" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="340,98 333,84 347,84" fill="#2b5b9e"/><rect x="190" y="98" width="300" height="46" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="340" y="127" font-size="16" fill="#2b5b9e" text-anchor="middle">求导 F′(x)，令 F′(x)=0</text><line x1="340" y1="144" x2="340" y2="170" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="340,176 333,162 347,162" fill="#2b5b9e"/><rect x="190" y="176" width="300" height="46" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="340" y="205" font-size="16" fill="#2b5b9e" text-anchor="middle">判断符号，得单调与极值</text><line x1="340" y1="222" x2="340" y2="248" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="340,254 333,240 347,240" fill="#2b5b9e"/><rect x="190" y="254" width="300" height="46" rx="8" fill="#5a7a2a" stroke="#5a7a2a" stroke-width="2"/><text x="340" y="283" font-size="16" fill="#fff" text-anchor="middle">求最值 F_min ≥ 0 ⇒ f(x)≥g(x)</text></svg>', caption: '图2　不等式证明「构造差函数求最值」流程图：构造→求导→判号→取最值。' },
        { type: 'heading', text: '四、恒成立问题的转化' },
        { type: 'tip', label: '提示', text: '<strong>恒成立 ⇔ 最值</strong>：f(x)≥g(x) 对 x∈D 恒成立，等价于 F(x)=f(x)-g(x) 在 D 上的<strong>最小值 ≥ 0</strong>；f(x)≤g(x) 恒成立等价于 F(x) 在 D 上的<strong>最大值 ≤ 0</strong>。直接把 f 与 g 的最值拆开比较通常不成立，因为二者未必在同一点取到。' },
        { type: 'example', label: '例题3', text: '证明：当 x>0 时，x > ln(x+1)。<br><br><strong>解</strong>：令 F(x)=x - ln(x+1)，定义域 x>-1，F′(x)=1 - 1/(x+1)=x/(x+1)。<br>当 x>0 时 F′(x)>0，故 F(x) 在 (0,+∞) 上递增，于是 F(x)>F(0)=0-0=0。<br>即 x - ln(x+1) > 0，从而 <strong>x > ln(x+1)</strong>（x>0）。等号在 x=0 时取得。' },
        { type: 'heading', text: '五、压轴题型：隐零点处理' },
        { type: 'keypoint', label: '重点·隐零点', text: '设 x₀ 满足 f′(x₀)=0，但 x₀ 无法显式解出（隐零点）。处理关键：<strong>不求出 x₀</strong>，而是利用方程 f′(x₀)=0 把含 x₀ 的最值表达式中的参数消去，再完成证明或求范围。这叫「设而不求」。' },
        { type: 'paragraph', text: '隐零点常出现在含指数、对数的压轴题中。例如 f′(x)=e^x - 2a x=0 往往无初等解，但可记根为 x₀，由 e^{x₀}=2a x₀ 代换，将 f(x₀) 中的 e^{x₀} 替换掉，从而化为只含 x₀ 与 a 的代数式继续讨论。' },
        { type: 'list', items: ['设：记隐零点 x₀ 满足 f′(x₀)=0（必要时确认其存在唯一）', '代：用 f′(x₀)=0 的方程把指数、对数等难处理项替换消去', '论：将最值 f(x₀) 用 x₀ 表示，再结合 x₀ 的范围分类讨论'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><line x1="40" y1="230" x2="650" y2="230" stroke="#33536e" stroke-width="2"/><path d="M40 200 C 180 230, 260 70, 380 120 S 560 210, 650 150" fill="none" stroke="#4a7de0" stroke-width="3"/><circle cx="300" cy="118" r="7" fill="#e05d44"/><text x="300" y="100" font-size="15" fill="#c0392b" text-anchor="middle" font-weight="bold">x₀（切点水平）</text><line x1="300" y1="118" x2="300" y2="230" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="5 4"/><text x="300" y="252" font-size="14" fill="#c0392b" text-anchor="middle">f′(x₀)=0</text><text x="340" y="40" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">隐零点代换示意</text><rect x="430" y="160" width="220" height="60" rx="8" fill="#fff" stroke="#7a5aa0" stroke-width="2"/><text x="540" y="184" font-size="14" fill="#7a5aa0" text-anchor="middle">由 f′(x₀)=0 得方程</text><text x="540" y="206" font-size="14" fill="#7a5aa0" text-anchor="middle">代换消去参数 a</text></svg>', caption: '图3　隐零点 x₀ 处切线水平，借助 f′(x₀)=0 的方程代换消去参数，实现设而不求。' },
        { type: 'warn', label: '易错', text: '隐零点处理最常见的两类失误：① 求出临界点 x₀ 后<strong>忘记代回原方程</strong>，留下无法计算的参数；② 误以为 x₀ 是显式数值而强行代入小数近似，导致证明不严谨。正确做法是保留方程关系做代数代换。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['零点 = 方程根 = 图像与 x 轴交点横坐标，讨论个数用分离参数 / 构造函数 / 数形结合', '不等式证明统一用差函数 F(x)=f(x)-g(x)，证其最值非负（或非正）', '恒成立问题 ⇔ 差函数最值 ≥0（或 ≤0），不能把两函数最值直接拆比', '含参零点先看定义域与两端极限，再据极值正负判定个数', '隐零点「设而不求」，用 f′(x₀)=0 代换消去参数'] }
      ],
      exercises: [
        { type: 'choice', question: '关于函数 f(x) 零点的说法，正确的是？', options: ['f(x) 的零点就是方程 f(x)=0 的实数根', 'f(x) 的零点是点 (x,0)', 'f(x) 有零点等价于 f(x) 的最大值大于 0', '零点个数只与最高次项系数有关'], answer: 'f(x) 的零点就是方程 f(x)=0 的实数根', explanation: '函数 f(x) 的零点定义为使 f(x)=0 成立的实数 x，即方程 f(x)=0 的实数根，对应图像与 x 轴交点的横坐标（不是点本身）。零点存在并不要求最大值大于 0，个数由函数整体性质决定，而非仅由最高次项系数决定。' },
        { type: 'choice', question: '欲证当 x>0 时 e^x ≥ x+1，最合适的方法是？', options: ['构造 F(x)=e^x-x-1，证其最小值不小于 0', '直接比较 e^x 与 x+1 的大小', '对 e^x 两边取对数', '求导判断 f(x)=e^x 的单调性'], answer: '构造 F(x)=e^x-x-1，证其最小值不小于 0', explanation: '不等式证明的通法是构造差函数 F(x)=f(x)-g(x)。本题令 F(x)=e^x-x-1，求导 F′(x)=e^x-1，得 x>0 时 F 递增、F(x)>F(0)=0，从而 e^x ≥ x+1。其余选项无法给出严谨证明，直接比较或取对数都缺少依据。' },
        { type: 'fill', question: '函数 f(x)=ln x - a x 恰有两个零点，则参数 a 的取值范围是 ____。', answer: '0 < a < 1/e', explanation: 'f′(x)=1/x - a，令 f′(x)=0 得 x=1/a。当 a>0 时 x∈(0,1/a) 增、(1/a,+∞) 减，极大值为 f(1/a)=-ln a -1。恰有两个零点需极大值大于 0，即 -ln a -1>0，得 a<1/e；又 a≤0 时单调至多一个零点，故 a 的范围是 0<a<1/e。' },
        { type: 'choice', question: '关于「恒成立问题 f(x)≥g(x) 对 x∈D 恒成立」，等价转化正确的是？', options: ['等价于 [f(x)-g(x)] 在 D 上的最小值 ≥ 0', '等价于 [f(x)-g(x)] 在 D 上的最大值 ≥ 0', '等价于 f(x) 的最小值 ≥ g(x) 的最大值', '等价于 f(x) 的最大值 ≥ g(x) 的最小值'], answer: '等价于 [f(x)-g(x)] 在 D 上的最小值 ≥ 0', explanation: '设 F(x)=f(x)-g(x)，「F(x)≥0 对一切 x∈D 恒成立」等价于 F(x) 在 D 上的最小值不小于 0。不能直接拆成 f 最小值与 g 最大值比较，因为二者未必在同一点取到；只有构造差函数再取最值才严谨。' },
        { type: 'fill', question: '处理「隐零点」时，设 x₀ 满足 f′(x₀)=0 但 x₀ 无法显式求出，关键步骤是：利用 ____ 将含 x₀ 的式子消去参数后再代入最值表达式。', answer: 'f′(x₀)=0', explanation: '隐零点 x₀ 由 f′(x₀)=0 定义，但方程往往写不出 x₀ 的解析表达式。解题关键是不必求出 x₀，而是利用 f′(x₀)=0 这一关系式，把含 x₀ 的最值表达式中的参数消掉，从而完成证明或求范围。故应利用的方程是 f′(x₀)=0。' }
      ]
    },

    /* ---------------- 第2课时 核心数学思想 + 常见题型与备考策略 ---------------- */
    {
      id: 'zt1-u7-l2',
      name: '核心数学思想 + 常见题型与备考策略（综合收尾）',
      chapter: '函数与导数复习 · 六 核心思想 / 七 题型与备考',
      difficulty: '进阶',
      content: [
        { type: 'heading', text: '一、核心数学思想：五大思想总览' },
        { type: 'paragraph', text: '函数与导数模块之所以成为高考压轴重镇，是因为它集中承载了高中数学的核心思想方法。牢固掌握这些思想，比死记题型更重要——它们是从「会做一道题」到「会解一类题」的桥梁。' },
        { type: 'keypoint', label: '重点·五大思想', text: '<strong>① 数形结合</strong>：图像与性质互译；<strong>② 函数与方程</strong>：零点⇔根⇔交点；<strong>③ 转化与化归</strong>：把复杂式构造为新函数；<strong>④ 分类讨论</strong>：按参数分界逐类求解；<strong>⑤ 极限与逼近</strong>：导数定义、隐零点中的局部思想。' },
        { type: 'list', items: ['数形结合：以图助数、以数释图，直观判定个数与范围', '函数与方程：零点、根、交点三者互化', '转化与化归：恒成立、不等式统一归为最值问题', '分类讨论：参数使单调性分界时务必不重不漏', '极限与逼近：端点极限、导数定义、隐零点设而不求'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><circle cx="340" cy="160" r="58" fill="#4a7de0" stroke="#2b5b9e" stroke-width="2.5"/><text x="340" y="155" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">函数与</text><text x="340" y="177" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">导数</text><g font-size="15" fill="#2b5b9e" text-anchor="middle" font-weight="bold"><circle cx="120" cy="70" r="44" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="120" y="74">数形结合</text><circle cx="560" cy="70" r="44" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="560" y="74">函数方程</text><circle cx="120" cy="260" r="44" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="120" y="264">转化化归</text><circle cx="560" cy="260" r="44" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="560" y="264">分类讨论</text><circle cx="340" cy="290" r="44" fill="#e8d8f0" stroke="#7a5aa0" stroke-width="2"/><text x="340" y="294" fill="#7a5aa0">极限逼近</text></g><g stroke="#2b5b9e" stroke-width="1.8"><line x1="160" y1="90" x2="290" y2="135"/><line x1="520" y1="90" x2="392" y2="135"/><line x1="160" y1="240" x2="290" y2="185"/><line x1="520" y1="240" x2="392" y2="185"/><line x1="340" y1="218" x2="340" y2="248"/></g></svg>', caption: '图1　函数与导数压轴题承载的五大数学思想，以「函数与导数」为核心向外辐射。' },
        { type: 'heading', text: '二、数形结合与函数方程思想' },
        { type: 'keypoint', label: '重点·数形结合', text: '把代数等式转化为几何图形：方程 <strong>f(x)=g(x)</strong> 的根的个数，等于曲线 y=f(x) 与 y=g(x) 交点的个数；含参时令 a=h(x)，直线 y=a 与曲线 y=h(x) 的交点数即根的个数。' },
        { type: 'example', label: '例题1', text: '讨论方程 ln x = x - 2 的根的个数。<br><br><strong>解（数形结合）</strong>：令 f(x)=ln x，g(x)=x-2，在同一坐标系画图。y=ln x 过 (1,0)、递增且向下凹；y=x-2 是斜率为 1 的直线。<br>取点：x=1 时 f=0 > g=-1；x=3 时 f≈1.10 < g=1；x→0⁺ 时 f→-∞ 低于直线；x 很大时直线最终高于曲线。<br>由连续性与单调性，两图像恰有 <strong>2 个交点</strong>，故方程有 2 个实根。<br>（亦可用 h(x)=ln x - x + 2，h′=1/x - 1，x=1 处极大 h(1)=1>0，两端→-∞，得两零点。）' },
        { type: 'list', items: ['画图先定关键点：与坐标轴交点、特殊值、渐近线', '含参时把参数分离成 y=a，看水平线与曲线的交点', '交点个数变化处往往对应参数的临界值'] },
        { type: 'heading', text: '三、转化与化归、分类讨论' },
        { type: 'keypoint', label: '重点·转化与化归', text: '复杂不等式、恒成立、零点综合题，统一<strong>归为构造新函数求最值</strong>。例如证 f(x)≥g(x) 恒成立 ⇔ [f-g] 最小值 ≥0；零点个数 ⇔ 差函数最值符号与端点极限。' },
        { type: 'paragraph', text: '分类讨论的触发点通常有：参数使 f′(x)=0 有无根或根的个数变化；最高次项系数为 0；定义域因参数而变。找到分界点后，要在每一类内独立完成单调性与最值分析。' },
        { type: 'warn', label: '易错', text: '分类讨论最怕「漏分界、重分类、不验证」。确定分界点后，应<strong>逐类独立讨论并在最后汇总</strong>，不能只在某一类得出结论就推广。当最高次项系数含参数时，系数为 0 的情形常与系数不为 0 时性质突变，必须单独成类。' },
        { type: 'tip', label: '提示', text: '分类讨论的「分界点」一般来自：① f′(x)=0 的判别式 Δ 的符号；② 二次项系数（或最高次项系数）为 0；③ 指数、对数底数与 1 的比较；④ 定义域内使分母或根号下为 0 的点。动笔前列出清单可避免遗漏。' },
        { type: 'heading', text: '四、常见题型与备考策略' },
        { type: 'paragraph', text: '高考中函数与导数的考查分两层：选择填空侧重基础性质与快速判断；解答题前几问考规范求导与单调极值，压轴问综合含参讨论、不等式证明与零点。备考应「基础保分、压轴抢分」。' },
        { type: 'table', headers: ['题型', '分值占比', '能力要求', '复习重点'], rows: [['选择填空', '约 15%', '性质、切线、单调性快速判断', '熟记公式与图像特征'], ['解答前几问', '约 20%', '求导、单调性与极值', '规范求导与列表'], ['压轴大题', '约 12%', '含参讨论 + 不等式 + 零点', '分类讨论与隐零点']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">备考时间轴与题型分布</text><line x1="80" y1="140" x2="620" y2="140" stroke="#33536e" stroke-width="2.5"/><g font-size="14" fill="#33536e" text-anchor="middle"><circle cx="160" cy="140" r="10" fill="#4a7de0"/><text x="160" y="120">一轮</text><text x="160" y="170">基础性质</text><text x="160" y="190">选择填空保分</text><circle cx="360" cy="140" r="10" fill="#5a7a2a"/><text x="360" y="120">二轮</text><text x="360" y="170">专题突破</text><text x="360" y="190">含参+不等式</text><circle cx="560" cy="140" r="10" fill="#e05d44"/><text x="560" y="120">冲刺</text><text x="560" y="170">套卷限时</text><text x="560" y="190">规范与抢分</text></g><g stroke="#33536e" stroke-width="2"><line x1="170" y1="140" x2="350" y2="140"/><line x1="370" y1="140" x2="550" y2="140"/></g></svg>', caption: '图2　备考三阶段时间轴：一轮打基础保选择填空，二轮攻专题，冲刺练规范与抢分。' },
        { type: 'heading', text: '五、答题规范：求导 → 列表 → 结论' },
        { type: 'list', items: ['第一步：写定义域，再求导 f′(x) 并化简到易判号的形式', '第二步：令 f′(x)=0 求临界点，用表格或区间列出单调性与极值', '第三步：结合目标（不等式、零点、最值）给出明确结论', '第四步：分类讨论时逐类书写，最后汇总参数范围'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">答题规范步骤卡</text><g font-size="15" fill="#fff" text-anchor="middle"><rect x="40" y="70" width="150" height="60" rx="8" fill="#4a7de0"/><text x="115" y="98">① 定定义域</text><text x="115" y="118">　求导化简</text><rect x="210" y="70" width="150" height="60" rx="8" fill="#4a7de0"/><text x="285" y="98">② 解 f′=0</text><text x="285" y="118">　列表分析</text><rect x="380" y="70" width="150" height="60" rx="8" fill="#5a7a2a"/><text x="455" y="98">③ 判单调极值</text><text x="455" y="118">　求最值</text><rect x="550" y="70" width="130" height="60" rx="8" fill="#e05d44"/><text x="615" y="98">④ 下结论</text><text x="615" y="118">　分类汇总</text></g><g stroke="#33536e" stroke-width="2"><line x1="190" y1="100" x2="208" y2="100"/><line x1="360" y1="100" x2="378" y2="100"/><line x1="530" y1="100" x2="548" y2="100"/></g><text x="340" y="180" font-size="14" fill="#33536e" text-anchor="middle">易错警示：忘定义域、漏分类、把极值当最值、隐零点未代换</text></svg>', caption: '图3　导数解答题规范四步：定域求导 → 解临界点列表 → 判单调求最值 → 下结论。' },
        { type: 'keypoint', label: '重点·规范要点', text: '结论必须<strong>结合定义域与目标</strong>：证不等式要说明最值 ≥0；讨论零点要写清参数区间与对应个数；分类讨论要<strong>逐类给结论再汇总</strong>。极值是最值的有力候选，但闭区间最值还可能在端点取得。' },
        { type: 'heading', text: '六、压轴题完整解题脉络（思路演示）' },
        { type: 'example', label: '例题2（思路演示）', text: '已知 f(x)=e^x - a x²（a>0），证明：存在 x₀>0 使 f(x₀)≥0，并讨论 f(x) 单调性随 a 的变化。<br><br><strong>思路演示</strong>：<br>① 求导 f′(x)=e^x - 2a x，令 f′(x)=0 得 e^x=2a x，此为<strong>隐零点方程</strong>，设根为 x₁。<br>② 由 e^{x₁}=2a x₁ 代换：f(x₁)=e^{x₁} - a x₁² = 2a x₁ - a x₁² = a x₁(2 - x₁)。<br>③ 分类：当 0<x₁<2 时 f(x₁)>0，可取到非负值；x₁ 的范围由 a 与曲线交点决定。<br>④ 结论：a 较小时曲线先降后升且最低点非负，a 较大时最低点可能为负。<br>本题完整展示了「求导 → 找隐零点 → 方程代换 → 分类讨论 → 下结论」的压轴链条。' },
        { type: 'warn', label: '易错点回顾', text: '函数与导数压轴四大高频失分点：① <strong>忘写定义域</strong>（尤其对数 x>0、根号下非负）；② <strong>漏分类</strong>（参数使系数为 0 或 Δ 变号）；③ <strong>把极值当最值</strong>（忽略端点与全局比较）；④ <strong>隐零点未代换</strong>（留下无法计算的表达式）。考前逐条自查可显著提分。' },
        { type: 'list', items: ['定义域是第一步，永远先写再用', '求导后先化简，便于判号与求临界点', '极值 ≠ 最值，闭区间别忘比较端点', '隐零点设而不求，用方程代换消去参数', '分类讨论不重不漏，最后汇总参数范围'] },
        { type: 'heading', text: '七、本课小结' },
        { type: 'list', items: ['五大思想：数形结合、函数与方程、转化化归、分类讨论、极限逼近', '选择填空重基础性质与切线；大题重规范求导与列表', '压轴综合含参讨论 + 不等式证明 + 零点，隐零点设而不求', '答题四步：定域求导 → 解 f′=0 列表 → 判单调求最值 → 下结论', '四大易错：忘定义域、漏分类、极值当最值、隐零点未代换'] }
      ],
      exercises: [
        { type: 'choice', question: '「零点个数问题转化为方程根的个数、再转化为两函数图像交点个数」体现的 math 思想是？', options: ['函数与方程思想', '分类讨论思想', '极限与逼近思想', '转化与化归思想'], answer: '函数与方程思想', explanation: '零点、方程根、两函数图像交点三者本质一致，相互转化正是函数与方程思想的典型应用。分类讨论用于参数分界，极限与逼近用于导数定义与隐零点，转化与化归强调把复杂式构造为新函数；此处核心是「零点⇔根⇔交点」的对应。' },
        { type: 'choice', question: '解答导数大题时，规范的步骤顺序是？', options: ['求导 → 列表分析单调与极值 → 下结论', '列表 → 求导 → 下结论', '下结论 → 求导 → 列表', '求导 → 下结论 → 列表'], answer: '求导 → 列表分析单调与极值 → 下结论', explanation: '导数解答题标准流程是先求导 f′(x) 并化简，再令 f′(x)=0 求临界点、用表格或区间分析单调性与极值最值，最后结合目标（不等式、零点）给出结论。先列表后求导或颠倒结论顺序都不符合规范。' },
        { type: 'fill', question: '讨论含参函数单调性时，容易引起分类讨论的分界点通常来自 f′(x)=0 的根以及 ____ 的符号或为零的情形。', answer: '最高次项系数', explanation: '含参求导后，f′(x) 的符号常由多项式最高次项系数与判别式等决定；当该系数为 0 或变号时，需以之为分界点分类讨论。此外分母、指数底数与 1 的比较、根号下为 0 的点等也可能成为分界。本题应填「最高次项系数」。' },
        { type: 'choice', question: '关于「极值点」与「最值点」，下列说法正确的是？', options: ['极大值不一定是最大值，极小值也不一定是最小值', '有极大值就必定有最大值', '极值点一定是最值点', '闭区间上极值点个数等于最值点个数'], answer: '极大值不一定是最大值，极小值也不一定是最小值', explanation: '极值是局部概念，只在某邻域内比较；最值是全局概念，需在整个区间比较。极大值点处函数值可能小于另一处的极小值，故极大值未必是最大值。闭区间最值还可能在端点取得，与极值点个数无必然相等关系。' },
        { type: 'fill', question: '导数压轴题中「隐零点」指满足 f′(x₀)=0 但 ____ 不能显式解出的点，处理时须用原方程代换消去参数。', answer: 'x₀', explanation: '隐零点 x₀ 由 f′(x₀)=0 定义，但方程往往无法写出 x₀ 的解析表达式。解题关键是不必求出 x₀，而是利用 f′(x₀)=0 这一关系式，把含 x₀ 的最值表达式中的参数消去，完成证明或求范围。故空填「x₀」。' }
      ]
    }

  );
})();
