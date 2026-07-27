/* ============================================================
 * 高三数学 · 高考复习专题 三角与向量
 * 第7单元（综合收尾单元） 共 2 课时
 * 数据注入：math.zt2.points（由 data-gz.js 末尾遍历自动注册 grade 高三）
 * 本文件仅注入 gzGetVolume(math, zt2)，不修改 data-gz.js
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt2');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 向量的应用 + 核心思想方法 ---------------- */
    {
      id: 'zt2-u7-l1',
      name: '向量的应用与核心思想方法',
      chapter: '三角与向量复习 · 三(七) 应用 / 五 核心思想',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、向量在平面几何中的应用' },
        { type: 'paragraph', text: '向量既有大小又有方向，是研究平面几何问题的有力代数工具。把线段、角度等几何对象转化为向量语言后，许多证明题可以避开添辅助线、找全等等传统技巧，转而用向量的线性运算与数量积直接计算。' },
        { type: 'keypoint', label: '重点·工具化思路', text: '用向量处理几何问题的基本思路：把线段表示为向量，用<strong>向量相等</strong>证线段相等、用<strong>向量共线</strong>证平行、用<strong>数量积</strong>求夹角或证垂直。' },
        { type: 'paragraph', text: '具体而言，要证两条线段 AB 与 CD 平行且相等，只需证明 向量AB = 向量CD；要证两直线垂直，只需证明对应向量的数量积为 0；要求两向量夹角，则用公式 cos θ = (向量a·向量b)/(|a||b|)。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="40" y="40" font-size="17" font-weight="bold" fill="#2b5b9e">图1 用向量证平行与相等线段</text><polygon points="120,230 340,230 500,120 280,120" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="100" y="255" font-size="16" fill="#2b5b9e">A</text><text x="350" y="255" font-size="16" fill="#2b5b9e">B</text><text x="520" y="115" font-size="16" fill="#2b5b9e">C</text><text x="255" y="115" font-size="16" fill="#2b5b9e">D</text><line x1="120" y1="230" x2="340" y2="230" stroke="#e05d44" stroke-width="3"/><line x1="280" y1="120" x2="500" y2="120" stroke="#e05d44" stroke-width="3"/><text x="190" y="220" font-size="15" fill="#c0392b">向量AB</text><text x="375" y="110" font-size="15" fill="#c0392b">向量DC</text><text x="40" y="285" font-size="15" fill="#33536e">若 向量AB = 向量DC，则 AB ∥ DC 且 |AB| = |DC|</text></svg>', caption: '图1　向量相等意味着大小相等且方向相同，对应几何中线段平行且长度相等。' },
        { type: 'example', label: '例题1', text: '用向量证明：平行四边形 ABCD 的对角线互相平分。<br><br><strong>证明</strong>：设平行四边形 ABCD，取相邻两边对应的向量 向量AB = 向量a，向量AD = 向量b，则 向量AC = 向量a + 向量b，向量BD = 向量b - 向量a。<br>设对角线 AC 与 BD 交于点 O。令 向量AO = λ 向量AC = λ(向量a + 向量b)，向量BO = μ 向量BD = μ(向量b - 向量a)。<br>另一方面 向量AO = 向量AB + 向量BO = 向量a + μ(向量b - 向量a) = (1 - μ)向量a + μ向量b。<br>比较 向量a、向量b 的系数，得 λ = 1 - μ 且 λ = μ，解得 λ = μ = 1/2。<br>故 O 是 AC 的中点，也是 BD 的中点，即对角线互相平分。' },
        { type: 'list', items: ['把已知几何图形中的线段用向量表示，通常取相邻两边或已知点连线为基底', '将待证关系（相等、平行、垂直、中点）翻译成向量等式', '通过向量的线性运算与数量积化简，比较系数或计算得出结论'] },
        { type: 'heading', text: '二、向量在力学中的应用' },
        { type: 'paragraph', text: '力、速度、位移等物理量都是向量，向量的加法与减法天然对应着力的合成与分解，因此在力学问题中向量是直接可用的数学模型。' },
        { type: 'tip', label: '提示·物理背景', text: '力的合成与分解遵循<strong>平行四边形法则</strong>：以两个分力为邻边作平行四边形，其对角线即为合力。多个力平衡时，合力为零向量，即各力向量之和为零。' },
        { type: 'list', items: ['受力分析时先画出各力对应的向量，明确方向与大小', '求合力用向量加法，求分力用向量减法或分解', '平衡状态等价于所有力向量之和为零向量'] },
        { type: 'heading', text: '三、向量与解析几何综合' },
        { type: 'paragraph', text: '在解析几何中，向量常作为处理平行、垂直、共线、夹角等位置关系的工具，能避免繁琐的斜率讨论，特别适合含参数或坐标运算的场景。' },
        { type: 'warn', label: '易错·共线辨析', text: '易错：<strong>向量共线</strong>与<strong>三点共线</strong>虽都涉及共线，但前者指数值上两向量平行，后者需保证点在同一条直线上。用 向量AB = λ 向量AC 证明 A、B、C 共线时，务必确认三个点确实共用同一基准，避免漏掉退化情形。' },
        { type: 'heading', text: '四、核心思想方法（一）：数形结合' },
        { type: 'paragraph', text: '三角函数与向量都强烈依赖图形直观。三角函数的图像揭示了周期、最值、对称性，向量的几何意义把代数运算对应到长度与方向。' },
        { type: 'keypoint', label: '重点·数形结合', text: '数形结合：<strong>以形助数</strong>——由图像读出函数性质；<strong>以数解形</strong>——用代数运算精确求长度、角度。这是三角与向量解题的主线思想。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="40" y="40" font-size="17" font-weight="bold" fill="#2b5b9e">图2 数形结合：正弦函数图像与性质</text><line x1="60" y1="150" x2="640" y2="150" stroke="#33536e" stroke-width="2"/><line x1="350" y1="40" x2="350" y2="240" stroke="#33536e" stroke-width="2"/><path d="M 60 150 Q 130 50 200 150 T 340 150 T 480 150 T 620 150" fill="none" stroke="#4a7de0" stroke-width="3"/><text x="610" y="145" font-size="14" fill="#33536e">x</text><text x="355" y="55" font-size="14" fill="#33536e">y</text><circle cx="200" cy="50" r="5" fill="#e05d44"/><text x="150" y="42" font-size="14" fill="#c0392b">峰值</text><text x="40" y="265" font-size="15" fill="#33536e">由图像直观读周期、最值、对称性；由性质反推作图</text></svg>', caption: '图2　正弦曲线把周期、最值、对称性直观地呈现出来，是数形结合的典范。' },
        { type: 'list', items: ['由 y = sin x、y = cos x 图像直观判断周期、对称轴、对称中心', '终边上点的坐标直接给出三角函数定义，是最朴素的形', '用向量几何意义把代数运算与图形位置对应起来'] },
        { type: 'heading', text: '五、核心思想方法（二）：转化与化归' },
        { type: 'paragraph', text: '复杂的三角与向量问题往往需要通过恒等变形、边角互化等手段，转化为熟悉的基本模型再求解。' },
        { type: 'keypoint', label: '重点·转化化归', text: '转化化归：三角中通过<strong>统一角、统一函数名</strong>（如切化弦、二倍角降幂）化简式子；解三角形中通过<strong>正弦、余弦定理实现边角互化</strong>，把未知关系转化为已知量。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="40" y="40" font-size="17" font-weight="bold" fill="#2b5b9e">图3 转化化归：解三角形中的边角互化</text><polygon points="120,220 420,220 250,90" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2.5"/><text x="110" y="240" font-size="16" fill="#2b5b9e">A</text><text x="425" y="240" font-size="16" fill="#2b5b9e">B</text><text x="245" y="82" font-size="16" fill="#2b5b9e">C</text><text x="250" y="200" font-size="15" fill="#5a7a2a">a</text><text x="300" y="160" font-size="15" fill="#5a7a2a">b</text><text x="175" y="160" font-size="15" fill="#5a7a2a">c</text><text x="455" y="120" font-size="16" fill="#7a5aa0">a/sin A = b/sin B = c/sin C</text><text x="455" y="150" font-size="15" fill="#33536e">边 ⇄ 角 统一转化</text><text x="40" y="265" font-size="15" fill="#33536e">已知边求角用正弦、余弦定理由边化角；已知角求边由角化边</text></svg>', caption: '图3　正弦定理把边与角联系起来，解三角形时边角可双向互化。' },
        { type: 'table', headers: ['向量关系', '几何意义', '可证结论'], rows: [['向量a = 向量b', '大小相等且方向相同', '线段相等'], ['向量a = λ向量b (λ≠0)', '两向量共线', '线段平行'], ['向量a·向量b = 0', '两向量垂直', '直线垂直'], ['|向量a| = |向量b|', '两向量长度相同', '线段长度相等']] },
        { type: 'example', label: '例题2', text: '已知角 α 的终边上一点 P(-3, 4)，求 sin α、cos α 与 tan α。<br><br><strong>解</strong>：由 P(-3, 4) 得 x = -3，y = 4，r = √(x² + y²) = √((-3)² + 4²) = 5。<br>根据三角函数定义：sin α = y/r = 4/5，cos α = x/r = -3/5，tan α = y/x = 4/(-3) = -4/3。<br>这里 r 恒为正，符号由点所在象限决定，体现了数形结合中由形定数的思想。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['向量工具：用向量相等证线段相等、共线证平行、数量积证垂直', '力学应用：合成与分解遵循平行四边形法则，平衡时合力为零向量', '数形结合：图像与性质相互印证，向量几何意义连通代数与图形', '转化化归：三角统一角与函数，解三角形边角互化', '函数与方程：把三角问题转化为函数模型求最值、周期'] }
      ],
      exercises: [
        { type: 'choice', question: '用向量证明线段 AB 与 CD 平行且相等，只需证明下列哪式成立？', options: ['向量AB = 向量CD', '向量AB · 向量CD = 0', '|向量AB| = |向量CD|', '向量AB + 向量CD = 0'], answer: '向量AB = 向量CD', explanation: '两个向量相等意味着它们大小相等且方向相同，对应到几何中就是线段平行且长度相等。数量积为零只说明垂直，仅模相等不能保证平行，和为零说明反向共线，均不能完整表达平行且相等这一结论。' },
        { type: 'choice', question: '已知向量 向量a 与 向量b 满足 向量a·向量b = 0，则这两个向量？', options: ['平行', '垂直', '相等', '方向相反'], answer: '垂直', explanation: '数量积 向量a·向量b = |a||b|cos θ，当其为 0 且两向量均非零时 cos θ = 0，即夹角为 90°，两向量垂直。平行或方向相反对应 cos θ = ±1，相等还要模相等且方向相同，都与题设不符。' },
        { type: 'fill', question: '用向量法证明平行四边形对角线互相平分时，通常取相邻两边对应的向量作为 ____（填“基底”或“坐标”）。', answer: '基底', explanation: '取平行四边形相邻两边对应的向量作为基底，可把对角线向量表示为基底的线性组合，再比较系数即可证明交点为中点，这是向量法处理平面几何最常用、最自然的思路。' },
        { type: 'choice', question: '两个力合成时遵循的几何法则是？', options: ['三角形法则', '平行四边形法则', '正弦定理', '勾股定理'], answer: '平行四边形法则', explanation: '力是向量，两个力合成时以它们为邻边作平行四边形，合力即为对角线，这就是力的平行四边形法则。三角形法则是向量加法的另一种表述，但力学合成的标准说法仍是平行四边形法则。' },
        { type: 'fill', question: '数形结合中，已知角 α 终边上一点 P(-3, 4)，则 sin α = ____。', answer: '4/5', explanation: '由 P(-3, 4) 得 r = √((-3)² + 4²) = 5，根据三角函数定义 sin α = y/r = 4/5。注意 r 恒为正，符号由终边位置决定，x = -3 会使 cos α 为负，这是数形结合定号的关键。' }
      ]
    },

    /* ---------------- 第2课时 常见题型与备考建议（综合收尾） ---------------- */
    {
      id: 'zt2-u7-l2',
      name: '常见题型与备考建议',
      chapter: '三角与向量复习 · 六 题型与备考',
      difficulty: '进阶',
      content: [
        { type: 'heading', text: '一、三角常考题型概览' },
        { type: 'paragraph', text: '三角模块在高考中既出现在选择题、填空题，也出现在解答题。客观题侧重基础求值、图像变换与性质判断；解答题则以恒等变换结合解三角形为主，偶有与不等式、导数交汇求最值。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="40" y="40" font-size="17" font-weight="bold" fill="#2b5b9e">图1 三角与向量常见题型分布</text><rect x="50" y="70" width="180" height="150" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="140" y="100" font-size="15" fill="#2b5b9e" text-anchor="middle">三角客观题</text><text x="140" y="130" font-size="13" fill="#33536e" text-anchor="middle">求值·图像变换</text><text x="140" y="152" font-size="13" fill="#33536e" text-anchor="middle">图像与性质</text><rect x="250" y="70" width="180" height="150" rx="8" fill="#d6ead0" stroke="#5a7a2a" stroke-width="2"/><text x="340" y="100" font-size="15" fill="#5a7a2a" text-anchor="middle">三角解答题</text><text x="340" y="130" font-size="13" fill="#33536e" text-anchor="middle">恒等+解三角形</text><text x="340" y="152" font-size="13" fill="#33536e" text-anchor="middle">基本不等式求最值</text><rect x="450" y="70" width="180" height="150" rx="8" fill="#e9dcef" stroke="#7a5aa0" stroke-width="2"/><text x="540" y="100" font-size="15" fill="#7a5aa0" text-anchor="middle">向量题</text><text x="540" y="130" font-size="13" fill="#33536e" text-anchor="middle">线性运算·数量积</text><text x="540" y="152" font-size="13" fill="#33536e" text-anchor="middle">坐标·共线</text><text x="40" y="262" font-size="15" fill="#33536e">三类题型覆盖高考三角与向量主要分值</text></svg>', caption: '图1　三角客观题、三角解答题与向量题构成复习的三大板块。' },
        { type: 'list', items: ['客观题：同角求值、诱导公式、和差倍角公式的直接应用', '图像题：由解析式画图像或由图像求参数、判断变换', '性质题：周期、单调性、对称轴与对称中心的识别'] },
        { type: 'keypoint', label: '重点·恒等核心', text: '恒等变换的核心始终是<strong>同角关系、和差角公式与二倍角公式</strong>。解题时优先“切化弦”“统一角”“统一函数名”，把复杂式子化归为标准形式。' },
        { type: 'paragraph', text: '三角解答题是高考的保分题来源，难度通常稳定在中等，重点考查公式熟练度与运算准确度，不应失分。' },
        { type: 'heading', text: '二、解答题完整脉络示例' },
        { type: 'example', label: '例题1', text: '在 △ABC 中，a、b、c 分别为角 A、B、C 的对边，已知 2cos²((A+B)/2) + cos 2C = 1。<br>(1) 求 C 的大小；(2) 若 c = √7，求 △ABC 面积的最大值。<br><br><strong>解</strong>：(1) 由 A + B + C = π，得 (A+B)/2 = (π - C)/2，故 cos((A+B)/2) = sin(C/2)。原式化为 2 sin²(C/2) + cos 2C = 1。由半角公式 2 sin²(C/2) = 1 - cos C，得 (1 - cos C) + cos 2C = 1，即 cos 2C - cos C = 0。代入 cos 2C = 2cos²C - 1，得 2cos²C - cos C - 1 = 0，即 (2cos C + 1)(cos C - 1) = 0。C ∈ (0, π)，cos C = 1 舍去，故 cos C = -1/2，C = 2π/3。<br>(2) 由余弦定理 c² = a² + b² - 2ab cos C，得 7 = a² + b² + ab。由基本不等式 a² + b² ≥ 2ab，得 7 ≥ 3ab，故 ab ≤ 7/3。面积 S = (1/2)ab sin C = (√3/4)ab ≤ 7√3/12，当且仅当 a = b 时取等号，面积最大值为 7√3/12。' },
        { type: 'heading', text: '三、向量常考题型' },
        { type: 'paragraph', text: '向量模块以选择题、填空题为主，考查点集中在线性运算、共线基本定理、数量积与坐标运算，整体难度不高但要求概念清晰、运算迅速。' },
        { type: 'list', items: ['线性运算：加法、减法、数乘及其几何意义', '共线基本定理：基底表示、三点共线的向量判据', '数量积：垂直、夹角、模长的计算', '坐标运算：建系后用坐标完成上述全部计算'] },
        { type: 'table', headers: ['题型', '核心考点', '常用工具'], rows: [['线性运算', '加法减法数乘', '平行四边形法则'], ['共线基本定理', '基底表示三点共线', '向量a = λ向量b'], ['数量积', '垂直夹角模长', 'a·b = |a||b|cos θ'], ['坐标运算', '建系求坐标', '坐标公式']] },
        { type: 'keypoint', label: '重点·满分模块', text: '向量是选择题中<strong>必拿满分</strong>的模块：概念清楚、套用坐标公式即可快速求解，务必保证运算零失误。' },
        { type: 'heading', text: '四、备考策略要点' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="40" y="40" font-size="17" font-weight="bold" fill="#2b5b9e">图2 备考策略要点卡</text><rect x="50" y="70" width="270" height="70" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="70" y="100" font-size="15" fill="#2b5b9e">① 回归教材</text><text x="70" y="124" font-size="13" fill="#33536e">源自教材原型</text><rect x="360" y="70" width="270" height="70" rx="8" fill="#d6ead0" stroke="#5a7a2a" stroke-width="2"/><text x="380" y="100" font-size="15" fill="#5a7a2a">② 熟记公式</text><text x="380" y="124" font-size="13" fill="#33536e">诱导·恒等·正余弦</text><rect x="50" y="160" width="270" height="70" rx="8" fill="#e9dcef" stroke="#7a5aa0" stroke-width="2"/><text x="70" y="190" font-size="15" fill="#7a5aa0">③ 同角同函</text><text x="70" y="214" font-size="13" fill="#33536e">统一角统一函数</text><rect x="360" y="160" width="270" height="70" rx="8" fill="#f6d9cf" stroke="#c0392b" stroke-width="2"/><text x="380" y="190" font-size="15" fill="#c0392b">④ 区分易混</text><text x="380" y="214" font-size="13" fill="#33536e">概念清·运算准</text></svg>', caption: '图2　备考四项要点：回归教材、熟记公式、同角同函、区分易混。' },
        { type: 'tip', label: '提示·公式用法', text: '熟记公式要做到<strong>正用、逆用、变形用</strong>三者都会：诱导公式、恒等变换公式、正余弦定理不仅要正向代入，还要能由结论反推、能变形为降幂或升幂形式。' },
        { type: 'list', items: ['回归教材：大量高考题源自教材原型，复习要回到课本例题', '强化“同角同函”意识：化简时主动统一角与函数', '区分易混概念：周期与对称轴、线性运算与数量积不能混', '关注交汇：三角与向量、三角与导数、向量与解析几何'] },
        { type: 'warn', label: '易错·概念混淆', text: '易错：常把<strong>向量线性运算</strong>与<strong>数量积运算</strong>混淆，例如误以为 向量a² = 向量a·向量b 可约去 向量a；也常把三角函数的<strong>对称轴</strong>与<strong>对称中心</strong>记反。运算时务必区分“模长平方”与“向量平方”。' },
        { type: 'heading', text: '五、三角与向量交汇命题' },
        { type: 'paragraph', text: '交汇题把三角的恒等变换、解三角形与向量的数量积、共线结合起来，既考知识融合，也考转化能力，是近年命题热点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="40" y="40" font-size="17" font-weight="bold" fill="#2b5b9e">图3 三角与向量交汇命题</text><polygon points="120,220 420,220 270,100" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2.5"/><text x="235" y="185" font-size="15" fill="#2b5b9e">三角形ABC</text><line x1="270" y1="100" x2="300" y2="220" stroke="#e05d44" stroke-width="2.5"/><text x="305" y="170" font-size="14" fill="#c0392b">向量AD</text><circle cx="285" cy="160" r="5" fill="#5a7a2a"/><text x="295" y="155" font-size="14" fill="#5a7a2a">D</text><text x="455" y="130" font-size="15" fill="#7a5aa0">解三角形求边角</text><text x="455" y="158" font-size="15" fill="#7a5aa0">向量数量积求夹角</text><text x="40" y="262" font-size="15" fill="#33536e">交汇点：用向量工具处理解三角形中的垂直、夹角与共线</text></svg>', caption: '图3　三角与向量交汇：解三角形提供边角，向量提供垂直、夹角的代数工具。' },
        { type: 'keypoint', label: '核心提醒', text: '核心提醒：三角解答题是<strong>保分题</strong>来源，向量选择题是<strong>必拿满分</strong>模块。总体原则是概念清、公式熟、运算准，把该拿的分稳稳拿到。' },
        { type: 'example', label: '例题2', text: '已知向量 向量a = (cos x, sin x)，向量b = (√3, -1)，函数 f(x) = 向量a·向量b。<br>(1) 求 f(x) 的最小正周期；(2) 求 f(x) 在 [0, π/2] 上的最大值。<br><br><strong>解</strong>：(1) f(x) = cos x·√3 + sin x·(-1) = √3 cos x - sin x = 2((√3/2)cos x - (1/2) sin x) = 2 cos(x + π/6)。故最小正周期 T = 2π。<br>(2) 当 x ∈ [0, π/2] 时，x + π/6 ∈ [π/6, 2π/3]，cos 在该区间最大值为 cos(π/6) = √3/2（在 x = 0 时取得）。故 f(x) 最大值为 2·(√3/2) = √3。' },
        { type: 'heading', text: '六、易错清单回顾' },
        { type: 'list', items: ['诱导公式符号看象限，避免正负号出错', '二倍角与降幂公式互相变形要熟练', '解三角形先判断用正弦还是余弦定理', '向量数量积结果为数量不是向量，注意区分'] },
        { type: 'tip', label: '提示·考前建议', text: '最后阶段建议回到教材逐章梳理定义与公式，把易混概念（周期/对称轴/对称中心、线性运算/数量积）做成对照卡，考前反复强化，确保概念清、公式熟、运算准。' }
      ],
      exercises: [
        { type: 'choice', question: '高考三角解答题最常把哪两部分结合考查？', options: ['恒等变换与解三角形', '函数与导数', '向量与解析几何', '数列与不等式'], answer: '恒等变换与解三角形', explanation: '高考三角解答题多以同角关系、和差角、二倍角为工具进行恒等变换，再结合正弦定理或余弦定理解三角形，这是最稳定的命题模式。其余组合属于其他模块的交汇，不是三角解答题的主流。' },
        { type: 'choice', question: '下列关于向量的说法，正确的是？', options: ['向量线性运算只能在平面内', '数量积为零则两向量垂直', '向量模长可以为负', '共线向量必相等'], answer: '数量积为零则两向量垂直', explanation: '对非零向量，数量积为零等价于夹角为直角，即垂直。向量线性运算不限于平面也可在空间；模长是非负数不可能为负；共线只说明平行或反向，未必相等，故其余选项均错。' },
        { type: 'fill', question: '备考中强调公式要 ____ 用、逆用和变形用（填“正”）。', answer: '正', explanation: '三角公式不仅要会正向套用，还要能逆用和变形使用，例如余弦二倍角公式可变形为降幂公式，逆用能由结论反推条件，这是灵活解题的关键能力。' },
        { type: 'choice', question: '三角与向量交汇命题常借助向量工具处理解三角形中的？', options: ['周期与对称轴', '垂直、夹角与共线', '单调性', '值域'], answer: '垂直、夹角与共线', explanation: '交汇题中常把解三角形得到的边角关系转化为向量，用数量积判垂直、求夹角，用共线判定三点共线。而周期、单调性、值域是纯三角函数性质，不属向量工具范畴，故不选。' },
        { type: 'fill', question: '三角解答题是高考中的 ____ 题来源，应力求拿稳分数（填“保分”）。', answer: '保分', explanation: '三角解答题题型稳定、难度适中，属于必须稳拿分数的保分题；与之相对，向量选择题多为中低难度，是必须拿满分的模块。两者都要求概念清楚、公式熟练、运算准确。' }
      ]
    }

  );
})();
