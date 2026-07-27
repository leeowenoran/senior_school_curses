/* ============================================================
 * 高考数学复习专题 · 函数与导数
 * 第4单元 函数的图像与变换、识图与用图（2 课时）
 * 数据注入：math.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt1');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 函数的图像与变换 ---------------- */
    {
      id: 'zt1-u4-l1',
      name: '函数的图像与变换',
      chapter: '函数与导数复习 · 四 4.1 图像与变换',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、平移变换' },
        { type: 'paragraph', text: '平移是最基本的图像变换。它通过改变自变量或函数值，把原图像整体移动而不改变形状。高考中常要求由已知函数图像，写出平移后的解析式，或反过来由目标图像识别变换过程。' },
        { type: 'keypoint', label: '重点·平移规律', text: '<strong>左右平移（针对自变量 x）</strong>：遵循“<strong>左加右减</strong>”。y = f(x+a) 表示把 y = f(x) 的图像<strong>向左</strong>平移 a（a 大于 0）；y = f(x-a) 表示<strong>向右</strong>平移 a。<br><strong>上下平移（针对函数值整体）</strong>：遵循“<strong>上加下减</strong>”。y = f(x)+b 表示把图像<strong>向上</strong>平移 b；y = f(x)-b 表示<strong>向下</strong>平移 b。' },
        { type: 'list', items: ['左加右减：向左平移看 x 后加，向右平移看 x 后减', '上加下减：向上平移整体加，向下平移整体减', '平移顺序可交换，先左右后上下与先上下后左右结果相同'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><line x1="40" y1="150" x2="660" y2="150" stroke="#33536e" stroke-width="1.5"/><line x1="70" y1="20" x2="70" y2="260" stroke="#33536e" stroke-width="1.5"/><path d="M90 210 Q220 70 380 150" fill="none" stroke="#4a7de0" stroke-width="3"/><text x="150" y="86" font-size="15" fill="#2b5b9e">y = f(x)</text><path d="M150 190 Q280 50 440 130" fill="none" stroke="#e05d44" stroke-width="3" stroke-dasharray="7 5"/><text x="250" y="44" font-size="15" fill="#c0392b">y = f(x-1)+2</text><text x="470" y="232" font-size="15" fill="#33536e">右移 1，上移 2</text></svg>', caption: '图1　平移变换：把原曲线 f(x) 向右平移 1、向上平移 2 得到 f(x-1)+2。' },
        { type: 'example', label: '例题1', text: '把函数 y = x² 的图像向右平移 1 个单位，再向上平移 2 个单位，求所得函数的解析式。<br><br><strong>解</strong>：先向右平移 1 个单位，按“右减”把 x 换成 x-1，得 y = (x-1)²；再向上平移 2 个单位，按“上加”整体加 2，得 <strong>y = (x-1)² + 2</strong>。<br>故所求解析式为 y = (x-1)² + 2。' },
        { type: 'heading', text: '二、伸缩变换' },
        { type: 'paragraph', text: '伸缩变换会改变图像的形状比例，分为横向伸缩（作用于自变量 x）和纵向伸缩（作用于函数值整体），两者规律不同，容易混淆，需重点区分。' },
        { type: 'keypoint', label: '重点·伸缩规律', text: '<strong>横向伸缩</strong>：y = f(ωx)（ω 大于 0）把图像沿 x 轴方向压缩为原来的 <strong>1/ω</strong> 倍（ω 大于 1 时压缩，0 小于 ω 小于 1 时拉伸）。<br><strong>纵向伸缩</strong>：y = A f(x)（A 大于 0）把图像沿 y 轴方向拉伸为原来的 <strong>A 倍</strong>（A 大于 1 时拉伸，0 小于 A 小于 1 时压缩）。' },
        { type: 'list', items: ['横向伸缩作用在 x 上：y = f(ωx) 横向压缩 1/ω', '纵向伸缩作用在函数值上：y = A f(x) 纵向拉伸 A 倍', '伸缩只改变比例，不改变图像的对称中心和基本走势'] },
        { type: 'heading', text: '三、对称变换' },
        { type: 'paragraph', text: '对称变换用来处理带负号或绝对值的函数。高考常考 y = -f(x)、y = f(-x)、y = f(|x|)、y = |f(x)| 四类，它们的作图规则各不相同。' },
        { type: 'keypoint', label: '重点·对称规律', text: '<strong>y = -f(x)</strong>：关于 <strong>x 轴</strong>对称（上下翻转）。<br><strong>y = f(-x)</strong>：关于 <strong>y 轴</strong>对称。<br><strong>y = -f(-x)</strong>：关于 <strong>原点</strong>对称。<br><strong>y = f(|x|)</strong>：保留 y 轴<strong>右侧</strong>图像，再把右侧部分关于 y 轴<strong>镜像</strong>到左侧。<br><strong>y = |f(x)|</strong>：保留 x 轴<strong>上方</strong>图像，把 x 轴<strong>下方</strong>部分沿 x 轴<strong>翻折</strong>到上方。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><line x1="40" y1="150" x2="660" y2="150" stroke="#33536e" stroke-width="1.5"/><line x1="70" y1="20" x2="70" y2="260" stroke="#33536e" stroke-width="1.5"/><path d="M100 150 Q230 290 360 150 Q490 10 600 150" fill="none" stroke="#4a7de0" stroke-width="2.5"/><text x="190" y="214" font-size="15" fill="#2b5b9e">y = f(x) 下方</text><path d="M100 150 Q230 20 360 150 Q490 20 600 150" fill="none" stroke="#e05d44" stroke-width="3"/><text x="320" y="44" font-size="15" fill="#c0392b">y = |f(x)|</text></svg>', caption: '图2　翻折变换：y = |f(x)| 把 x 轴下方的部分沿 x 轴翻折到上方。' },
        { type: 'example', label: '例题2', text: '画出函数 y = |x² - 1| 的图像。<br><br><strong>解</strong>：先画 y = x² - 1 的抛物线，它与 x 轴交于 x = -1 和 x = 1，顶点在 (0, -1)，在 [-1, 1] 区间位于 x 轴下方。<br>对 y = |x² - 1|，保留 x 轴上方部分；把 [-1, 1] 内 x 轴下方的“凹谷”沿 x 轴<strong>翻折到上方</strong>，得到两段开口向上的弧，顶点变为 (0, 1)。<br>最终图像在 (-∞, -1] 与 [1, +∞) 与抛物线一致，在 [-1, 1] 上呈向上凸起的形状。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><line x1="40" y1="150" x2="660" y2="150" stroke="#33536e" stroke-width="1.5"/><line x1="340" y1="20" x2="340" y2="260" stroke="#33536e" stroke-width="1.5"/><path d="M340 150 Q470 70 620 100" fill="none" stroke="#4a7de0" stroke-width="3"/><text x="470" y="70" font-size="15" fill="#2b5b9e">x 大于等于 0 保留</text><path d="M340 150 Q210 70 60 100" fill="none" stroke="#e05d44" stroke-width="3" stroke-dasharray="7 5"/><text x="110" y="70" font-size="15" fill="#c0392b">x 小于 0 镜像</text><text x="340" y="250" font-size="15" fill="#33536e" text-anchor="middle">y = f(|x|)：右半保留，左半关于 y 轴对称</text></svg>', caption: '图3　绝对值变换：y = f(|x|) 保留右侧图像，左侧为右侧关于 y 轴的镜像。' },
        { type: 'example', label: '例题3', text: '由 y = ln x（定义域 x 大于 0）经过变换得到 y = ln|x|，说明变换过程并写出新函数的定义域。<br><br><strong>解</strong>：y = ln|x| 是 y = f(|x|) 型（此处 f(t) = ln t）。保留 y 轴右侧（x 大于 0）的 y = ln x 图像，再把右侧部分关于 y 轴<strong>镜像</strong>到左侧（x 小于 0）。<br>由于 |x| 大于 0 当且仅当 x ≠ 0，故新函数定义域为 <strong>(-∞, 0) ∪ (0, +∞)</strong>，图像关于 y 轴对称，是偶函数。' },
        { type: 'warn', label: '易错', text: '区分两类绝对值：<strong>y = |f(x)|</strong> 是对“函数值”取绝对值，影响的是 <strong>上下</strong>方向（下方翻折）；<strong>y = f(|x|)</strong> 是对“自变量”取绝对值，影响的是 <strong>左右</strong>方向（左侧镜像）。两者变换对象完全不同，作图时务必看清绝对值套在 x 上还是套在整个 f(x) 上。' },
        { type: 'tip', label: '提示', text: '遇到 <strong>f(-x)</strong> 与 <strong>f(|x|)</strong> 时，可先判断奇偶性：若 f 是偶函数，则 f(-x) = f(x)、f(|x|) = f(x)，图像不变；若 f 是奇函数，则 f(-x) = -f(x)。常用函数如 y = x²、y = |x|、y = cos x 本身是偶函数，处理 |x| 与 -x 时更便捷。' },
        { type: 'heading', text: '四、作图方法' },
        { type: 'paragraph', text: '画函数图像主要有三种方法：描点法、变换法、分段函数分段画。高考解答题中，常先通过函数性质（定义域、奇偶性、单调性）缩小范围，再用变换法或分段法快速成图。' },
        { type: 'table', headers: ['变换类型', '操作口诀', '结果函数'], rows: [['右移 a（a 大于 0）', 'x 替换为 x-a', 'y = f(x-a)'], ['左移 a（a 大于 0）', 'x 替换为 x+a', 'y = f(x+a)'], ['上移 b', '整体加 b', 'y = f(x)+b'], ['下移 b', '整体减 b', 'y = f(x)-b'], ['横向压缩 1/ω', 'x 替换为 ωx', 'y = f(ωx)'], ['纵向拉伸 A 倍', '整体乘 A', 'y = A f(x)']] },
        { type: 'keypoint', label: '重点·综合', text: '多个变换<strong>叠加</strong>时，建议分步进行并写清每一步：先左右、再伸缩、后上下，最后对称或绝对值。复合变换如 y = 2^(-x) + 1 可拆为“先关于 y 轴对称得 2^(-x)，再向上平移 1”，切忌一步到位导致符号错误。' },
        { type: 'list', items: ['描点法：求关键点（截距、顶点、端点）后连线', '变换法：在基本函数图像上叠加平移、伸缩、对称', '分段函数：按定义域区间分别作图，注意分段点处是否闭合'] },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['平移：左右“左加右减”，上下“上加下减”', '伸缩：y = f(ωx) 横向压缩 1/ω，y = A f(x) 纵向拉伸 A 倍', '对称：y=-f(x) 关于 x 轴，y=f(-x) 关于 y 轴，y=-f(-x) 关于原点', '绝对值：y=|f(x)| 下方翻折，y=f(|x|) 左侧镜像', '作图：描点法、变换法、分段函数分段画', '复合变换分步写，先左右后上下、再对称'] }
      ],
      exercises: [
        { type: 'choice', question: '函数 y = f(x) 的图像向右平移 2 个单位后，所得函数的解析式是？', options: ['y = f(x+2)', 'y = f(x-2)', 'y = f(x)+2', 'y = f(x)-2'], answer: 'y = f(x-2)', explanation: '左右平移针对自变量 x，遵循“左加右减”原则：图像向右平移 2 个单位，对应把 x 替换为 x-2，所得函数为 y = f(x-2)。向左平移才是 x+2；上下平移作用于函数值整体，向上加、向下减，与本题的左右移动无关。' },
        { type: 'choice', question: '将 y = f(x) 的图像向上平移 3 个单位，所得函数为？', options: ['y = f(x+3)', 'y = f(x-3)', 'y = f(x)+3', 'y = f(x)-3'], answer: 'y = f(x)+3', explanation: '上下平移针对函数值整体，遵循“上加下减”原则：图像向上平移 3 个单位，即在函数整体后加 3，得到 y = f(x)+3。左右平移才作用于自变量 x，写成 f(x±3) 是左右移动，与本题的上下平移不符。' },
        { type: 'choice', question: '函数 y = |x² - 1| 的图像可由 y = x² - 1 经过哪种变换得到？', options: ['关于 x 轴对称', '关于 y 轴对称', '将 x 轴下方部分翻折到上方', '向左平移 1 个单位'], answer: '将 x 轴下方部分翻折到上方', explanation: 'y = |f(x)| 的作图规则是保留 x 轴上方的部分，把 x 轴下方的部分沿 x 轴翻折到上方。因此 y = |x²-1| 由 y = x²-1 经过“将 x 轴下方部分翻折到上方”得到，而不是关于坐标轴对称或左右平移。' },
        { type: 'fill', question: '将函数 y = f(x) 的图像向左平移 1 个单位，再向下平移 2 个单位，所得解析式为 y = ____。', answer: 'f(x+1)-2', explanation: '左右平移遵循“左加右减”：向左平移 1 个单位，把 x 替换为 x+1，得 y = f(x+1)；再向下平移 2 个单位（下减），在函数整体后减 2，最终解析式为 y = f(x+1)-2。平移顺序可交换，结果不变。' },
        { type: 'fill', question: '函数 y = f(|x|) 的图像关于 ____ 轴对称。', answer: 'y', explanation: 'y = f(|x|) 满足 f(|-x|) = f(|x|)，即它是偶函数，其图像关于 y 轴对称。具体做法是保留 y 轴右侧（x≥0）的图像，再将右侧部分关于 y 轴镜像到左侧（x 小于 0），因此整体关于 y 轴对称。' }
      ]
    },

    /* ---------------- 第2课时 识图与用图（含导数视角） ---------------- */
    {
      id: 'zt1-u4-l2',
      name: '识图与用图（含导数视角）',
      chapter: '函数与导数复习 · 四 4.2 识图与用图',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、从图像读取性质（识图）' },
        { type: 'paragraph', text: '识图是指观察一个函数图像，准确读出它的定义域、值域、单调性、奇偶性、极值点、零点和渐近线等信息。这是解函数综合题、选择题“识图题”的基础能力。' },
        { type: 'keypoint', label: '重点·识图清单', text: '看图像可依次读出：<strong>定义域</strong>（图像在 x 轴上的投影范围）、<strong>值域</strong>（图像在 y 轴上的投影范围）、<strong>单调性</strong>（上升段增、下降段减）、<strong>奇偶性</strong>（关于 y 轴或原点对称）、<strong>极值点</strong>（峰、谷）、<strong>零点</strong>（与 x 轴交点）、<strong>渐近线</strong>（无限接近但不相交的直线）。' },
        { type: 'list', items: ['先看定义域与值域：图像左右、上下延伸的边界', '再看单调与极值：上升下降区间、峰谷位置', '最后看对称与零点：是否偶/奇函数、与 x 轴交点'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><line x1="40" y1="150" x2="660" y2="150" stroke="#33536e" stroke-width="1.5"/><line x1="70" y1="20" x2="70" y2="260" stroke="#33536e" stroke-width="1.5"/><path d="M80 230 Q200 230 280 150 Q360 70 440 110 Q560 170 640 90" fill="none" stroke="#4a7de0" stroke-width="3"/><circle cx="280" cy="150" r="5" fill="#e05d44"/><text x="190" y="206" font-size="14" fill="#c0392b">极小值点</text><circle cx="440" cy="110" r="5" fill="#5a7a2a"/><text x="350" y="80" font-size="14" fill="#5a7a2a">极大值点</text><text x="560" y="74" font-size="14" fill="#33536e">上升段 f 增</text><text x="100" y="256" font-size="14" fill="#33536e">读取：定义域、值域、零点、单调性</text></svg>', caption: '图1　识图标注：从一条曲线读出极小值、极大值、单调区间等性质。' },
        { type: 'example', label: '例题1', text: '已知奇函数 f(x) 的部分图像如图所示（略），它在 (0, +∞) 上单调递减，且 f(1) = 0。判断下列哪一项一定正确：A 在 (-∞, 0) 单调递增；B f(-1) = 0；C f(x) 在 (-∞, 0) 单调递减；D f(0) = 1。<br><br><strong>解</strong>：f 为奇函数，图像关于原点对称，因此在 (-∞, 0) 上单调性与 (0, +∞) 一致，即也<strong>单调递减</strong>，C 正确、A 错。<br>由 f(1) = 0 及奇函数得 f(-1) = -f(1) = 0，B 正确。D 无法由已知推出。<br>故一定正确的是 <strong>B、C</strong>。' },
        { type: 'heading', text: '二、数形结合用图' },
        { type: 'paragraph', text: '用图是指借助函数图像解决方程与不等式问题。把代数关系转化为图形位置关系，往往能化繁为简，是高考高频思想方法。' },
        { type: 'keypoint', label: '重点·用图三法', text: '<strong>交点个数</strong>：方程 f(x) = g(x) 的解的个数，即 y = f(x) 与 y = g(x) 两图像<strong>交点</strong>的个数。<br><strong>不等式</strong>：f(x) 大于 g(x) 的解集，对应图像上 f 位于 g <strong>上方</strong>的 x 区间。<br><strong>零点分布</strong>：f(x) = 0 的根的分布，可转化为图像与 x 轴交点位置，结合单调性、端点值符号判断。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><line x1="40" y1="150" x2="660" y2="150" stroke="#33536e" stroke-width="1.5"/><line x1="70" y1="20" x2="70" y2="260" stroke="#33536e" stroke-width="1.5"/><path d="M80 220 Q260 220 360 150 Q460 90 640 90" fill="none" stroke="#4a7de0" stroke-width="3"/><text x="110" y="212" font-size="14" fill="#2b5b9e">y = f(x)</text><path d="M80 120 Q300 80 360 150 Q440 200 640 190" fill="none" stroke="#e05d44" stroke-width="3"/><text x="430" y="232" font-size="14" fill="#c0392b">y = g(x)</text><circle cx="360" cy="150" r="6" fill="#5a7a2a"/><text x="378" y="140" font-size="14" fill="#5a7a2a">交点 x0</text><text x="220" y="256" font-size="14" fill="#33536e">交点个数即方程 f(x) = g(x) 解的个数</text></svg>', caption: '图2　数形结合：两曲线交点横坐标就是方程 f(x) = g(x) 的解。' },
        { type: 'example', label: '例题2', text: '设函数 f(x) = ln x，g(x) = -x + 2，求方程 f(x) = g(x) 解的个数。<br><br><strong>解</strong>：方程等价于 ln x = -x + 2。分别画出 y = ln x（在 x 大于 0 上递增，过点 (1,0)）与 y = -x + 2（递减直线，过 (2,0)）。<br>两图像<strong>只有一个交点</strong>：当 x = 1 时 ln1 = 0 大于 -1+2 = 1 不成立（直线在上）；当 x = 2 时 ln2 ≈ 0.69 小于 0（直线在下），由连续性知在 (1, 2) 内恰有一交点。<br>故方程有 <strong>1 个解</strong>。' },
        { type: 'heading', text: '三、导数视角看图像' },
        { type: 'paragraph', text: '导数是研究函数图像升降与极值的有力工具。高考常给出导函数 f′(x) 的草图，要求还原原函数 f(x) 的单调区间与极值点，这是选择题、填空题的经典考法。' },
        { type: 'keypoint', label: '重点·导数与图像', text: '<strong>f′(x) 大于 0</strong> 的区间，f(x) <strong>单调递增</strong>（图像上升）；<strong>f′(x) 小于 0</strong> 的区间，f(x) <strong>单调递减</strong>（图像下降）。<br><strong>f′(x) = 0</strong> 的点叫<strong>驻点</strong>（临界点）；当 f′(x) 在该点<strong>两侧变号</strong>时，才是<strong>极值点</strong>，由正变负为极大值，由负变正为极小值。' },
        { type: 'list', items: ['由 f′(x) 正负区间直接写出 f(x) 的单调递增、递减区间', 'f′(x)=0 且两侧变号处才是极值点', '导函数与 x 轴交点对应原函数的峰或谷'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><line x1="40" y1="150" x2="660" y2="150" stroke="#33536e" stroke-width="1.5"/><line x1="70" y1="20" x2="70" y2="260" stroke="#33536e" stroke-width="1.5"/><path d="M90 150 L210 150 L210 90 L370 90 L370 210 L530 210 L530 150 L650 150" fill="none" stroke="#7a5aa0" stroke-width="3"/><text x="110" y="116" font-size="14" fill="#7a5aa0">f 撇(x) 大于 0</text><text x="390" y="234" font-size="14" fill="#7a5aa0">f 撇(x) 小于 0</text><text x="110" y="44" font-size="15" fill="#5a7a2a">f 递增</text><text x="390" y="44" font-size="15" fill="#e05d44">f 递减</text></svg>', caption: '图3　导函数正负还原：f 撇(x) 正区间 f 递增，负区间 f 递减。' },
        { type: 'example', label: '例题3', text: '设 f′(x) 的草图如下（略）：在 (-∞, 1) 上 f′(x) 大于 0，在 (1, 3) 上 f′(x) 小于 0，在 (3, +∞) 上 f′(x) 大于 0，且 f′(1) = f′(3) = 0。求 f(x) 的单调区间与极值。<br><br><strong>解</strong>：由导数符号：在 (-∞, 1) 上 f′(x) 大于 0，f <strong>递增</strong>；在 (1, 3) 上 f′(x) 小于 0，f <strong>递减</strong>；在 (3, +∞) 上 f′(x) 大于 0，f 再次<strong>递增</strong>。<br>x = 1 处导数由正变负，为<strong>极大值点</strong>；x = 3 处导数由负变正，为<strong>极小值点</strong>。<br>故单调递增区间为 (-∞, 1) 和 (3, +∞)，递减区间为 (1, 3)。' },
        { type: 'warn', label: '易错', text: 'f′(x0) = 0 <strong>不一定</strong>是极值点。例如 f(x) = x³，在 x = 0 处 f′(0) = 0，但导数在该点两侧均为正（不变号），故 x = 0 不是极值点。判断极值必须看 f′(x) 在 x0 <strong>两侧是否变号</strong>，不能只看导数为零。' },
        { type: 'tip', label: '提示', text: '由 f′(x) 图像还原 f(x) 图像时，可先标注 f′(x) 的正负号区间，画出 f(x) 的“上升—下降—上升”骨架，再在 f′(x)=0 处标出峰或谷。高考选择题常给出四幅候选原图，用“单调区间是否匹配、峰谷位置是否正确”两条即可快速排除错误项。' },
        { type: 'heading', text: '四、二阶导数与凹凸性' },
        { type: 'paragraph', text: '除一阶导数外，二阶导数 f″(x) 刻画图像的弯曲方向（凹凸性），在压轴题与图像识别中也有应用。' },
        { type: 'keypoint', label: '重点·二阶导', text: '若 <strong>f″(x) 大于 0</strong>，则 f(x) 图像<strong>凹向上</strong>（也称下凸，形似碗状）；若 <strong>f″(x) 小于 0</strong>，则 f(x) 图像<strong>凹向下</strong>（也称上凸，形似拱形）。f″(x) = 0 且两侧变号处为<strong>拐点</strong>。' },
        { type: 'table', headers: ['导数信息', '原函数 f(x) 性质', '图像特征'], rows: [['f 撇(x) 大于 0', '单调递增', '图像上升'], ['f 撇(x) 小于 0', '单调递减', '图像下降'], ['f 撇(x)=0 且两侧变号', '取得极值', '出现峰或谷'], ['f 双撇(x) 大于 0', '凹向上（下凸）', '开口向上弧'], ['f 双撇(x) 小于 0', '凹向下（上凸）', '开口向下弧']] },
        { type: 'keypoint', label: '重点·综合应用', text: '识图与用图要结合“图像直观”与“导数定量”：先用图像读出增减、极值、零点，再用导数符号验证或细化单调区间。解 f(x) 大于 g(x) 时，优先比较两图像上下位置；涉及参数时，常用端点值符号与单调性控制零点个数。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['识图：读定义域、值域、单调性、奇偶性、极值、零点、渐近线', '用图：交点个数、不等式上下位置、零点分布', '导数符号：f 撇大于 0 增、小于 0 减', '极值点：f 撇=0 且两侧变号（驻点未必是极值）', '二阶导数：大于 0 凹向上、小于 0 凹向下', '由 f 撇图像还原 f：正区间增、负区间减、零点处峰谷'] }
      ],
      exercises: [
        { type: 'choice', question: '已知函数 f(x) 的导函数 f 撇(x) 在区间 (a, b) 上恒大于 0，则在 (a, b) 上 f(x) ？', options: ['单调递增', '单调递减', '先增后减', '有极值点'], answer: '单调递增', explanation: '导数符号决定函数单调性：当 f 撇(x) 大于 0 在某区间恒成立时，函数 f(x) 在该区间单调递增。因此 f 撇(x) 在 (a, b) 上恒大于 0，推出 f(x) 在 (a, b) 上单调递增，而非递减、先增后减或出现极值。' },
        { type: 'choice', question: '方程 f(x) = g(x) 的解的个数等于？', options: ['f(x) 的零点个数', 'g(x) 的零点个数', '两图像交点个数', 'f(x) 的极值个数'], answer: '两图像交点个数', explanation: '方程 f(x) = g(x) 等价于函数 y = f(x) 与 y = g(x) 的图像交点的横坐标。因此该方程解的个数，就是两函数图像交点的个数。这与单个函数的零点个数、极值个数没有直接相等的关系。' },
        { type: 'choice', question: '若点 x0 满足 f 撇(x0) = 0，则 x0 一定是？', options: ['极大值点', '极小值点', '驻点（稳定点）', '零点'], answer: '驻点（稳定点）', explanation: 'f 撇(x0) = 0 的点称为驻点（也叫稳定点或临界点），但它不一定是极值点。例如 f(x) = x³ 在 x = 0 处导数为 0，却不是极值点。是否为极值还需结合导数在 x0 两侧是否变号来判断。' },
        { type: 'fill', question: '函数 f(x) 的图像在区间 (a, b) 上上升，则 f 撇(x) 在该区间上 ____ 0（填“大于”或“小于”）。', answer: '大于', explanation: '函数图像的升降与导数符号一一对应：图像上升对应函数单调递增，此时导数 f 撇(x) 大于 0；图像下降则导数小于 0。因此 (a, b) 上图像上升说明 f 撇(x) 大于 0，即在 (a, b) 上导数大于 0。' },
        { type: 'fill', question: '由导函数 f 撇(x) 的图像（正负区间）可以还原原函数的 ____ 与极值点。', answer: '单调区间', explanation: '导函数 f 撇(x) 的正区间对应原函数单调递增的区间，负区间对应原函数单调递减的区间，而 f 撇(x)=0 且两侧变号的位置对应极值点。因此由 f 撇(x) 的正负号分布即可还原原函数的单调区间和极值点位置。' }
      ]
    }

  );
})();
