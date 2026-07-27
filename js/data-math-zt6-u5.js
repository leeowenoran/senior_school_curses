/* ============================================================
 * 高三数学 · 高考复习专题 · 概率统计
 * 第5单元 第1课时：随机变量的数字特征（期望与方差）
 * 第5单元 第2课时：统计——抽样与用样本估计总体
 * 数据注入：math.zt6.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt6');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 随机变量的数字特征（期望与方差） ---------------- */
    {
      id: 'zt6-u5-l1',
      name: '随机变量的数字特征（期望与方差）',
      chapter: '概率统计复习 · 九、随机变量的数字特征（期望与方差）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、离散型随机变量的期望（均值）' },
        { type: 'paragraph', text: '离散型随机变量 X 取各个值 x₁, x₂, …, xₙ，对应概率 p₁, p₂, …, pₙ（满足 pᵢ ≥ 0 且 Σ pᵢ = 1）。用一个数字概括它的“平均取值水平”，就是期望，也叫均值。它把每个取值按概率大小加权后汇总，是描述分布位置特征的核心指标。' },
        { type: 'keypoint', label: '重点·期望定义', text: '离散型随机变量 X 的期望定义为 <strong>E(X) = Σ xᵢ · pᵢ</strong>，即把每个取值 xᵢ 乘以对应的概率 pᵢ 后求和。从直观上看，期望是<strong>以概率为权重的加权平均</strong>：概率越大的取值，对期望的“拉动”越强。' },
        { type: 'list', items: ['E(c) = c：常数的期望就是它本身', 'E(aX + b) = a·E(X) + b：期望具有线性（平移、伸缩均可直接提出）', 'E(X + Y) = E(X) + E(Y)：可加性无条件成立', '当 X、Y 独立时，E(XY) = E(X)·E(Y)'] },
        { type: 'keypoint', label: '重点·期望性质', text: '期望最常用的是<strong>线性性质与可加性</strong>：<strong>E(aX + b) = a·E(X) + b</strong>，其中 a、b 为常数；<strong>E(X + Y) = E(X) + E(Y)</strong> 对任意 X、Y 都成立，无需独立；当 X、Y 独立时还有 <strong>E(XY) = E(X)·E(Y)</strong>。利用这些性质可免去列全分布列再求和的繁琐。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">期望 = 以概率为权重的加权平均（平衡支点）</text><line x1="80" y1="150" x2="620" y2="150" stroke="#33536e" stroke-width="3"/><circle cx="80" cy="150" r="14" fill="#4a7de0"/><circle cx="350" cy="150" r="24" fill="#2b5b9e"/><circle cx="620" cy="150" r="18" fill="#7a5aa0"/><polygon points="377,150 360,205 394,205" fill="#e05d44"/><g font-size="14" fill="#33536e" text-anchor="middle"><text x="80" y="190">x=1, p=0.2</text><text x="350" y="200">x=2, p=0.5</text><text x="620" y="190">x=3, p=0.3</text><text x="377" y="228">支点 E(X)=2.1</text></g><text x="340" y="262" font-size="14" fill="#33536e" text-anchor="middle">概率越大的取值越靠近支点，权重越大</text></svg>', caption: '图1　期望可看作支点位置：概率作为权重，E(X) 是使“加权平衡”成立的中心值。' },
        { type: 'heading', text: '二、方差与标准差' },
        { type: 'paragraph', text: '仅有期望还不够：两个随机变量可能期望相同，但一个取值很集中、另一个很分散。刻画“取值围绕期望的离散程度”的指标是方差，它的平方根叫标准差，二者与期望一起完整描述一个分布的形状。' },
        { type: 'keypoint', label: '重点·方差定义', text: '方差定义为 <strong>D(X) = Σ (xᵢ - E(X))² · pᵢ</strong>，即各取值与期望偏差的平方，再按概率加权求和。偏差平方保证正负偏离不会相互抵消，结果恒非负：<strong>D(X) ≥ 0</strong>。' },
        { type: 'keypoint', label: '重点·简化公式', text: '计算方差时常用<strong>简化公式 D(X) = E(X²) - [E(X)]²</strong>。先求 X² 的期望 E(X²) = Σ xᵢ² · pᵢ，再减去期望的平方。该公式无需先算出 E(X) 后逐项求偏差，运算量更小，考试中最常用。' },
        { type: 'keypoint', label: '重点·标准差', text: '标准差是方差的算术平方根：<strong>σ(X) = √D(X)</strong>。方差的量纲是“原单位的平方”，而标准差与原变量同量纲，便于和实际数据直接比较。报告离散程度时通常同时给出方差与标准差。' },
        { type: 'list', items: ['D(c) = 0：常数的方差为 0（取值无波动）', 'D(aX + b) = a²·D(X)：伸缩放大 a² 倍，平移 b 不影响', '当 X、Y 独立时，D(X + Y) = D(X) + D(Y)'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">同均值、不同方差：离散程度对比</text><line x1="340" y1="50" x2="340" y2="220" stroke="#33536e" stroke-width="1.5" stroke-dasharray="5 4"/><g font-size="13" fill="#33536e" text-anchor="middle"><text x="340" y="64">均值 μ 相同</text></g><g fill="#4a7de0"><circle cx="320" cy="100" r="9"/><circle cx="332" cy="100" r="9"/><circle cx="340" cy="100" r="9"/><circle cx="348" cy="100" r="9"/><circle cx="360" cy="100" r="9"/></g><g font-size="14" fill="#2b5b9e"><text x="200" y="104">分布 A：方差小</text><text x="200" y="124">（集中、稳定）</text></g><g fill="#e05d44"><circle cx="230" cy="175" r="9"/><circle cx="290" cy="175" r="9"/><circle cx="340" cy="175" r="9"/><circle cx="390" cy="175" r="9"/><circle cx="450" cy="175" r="9"/></g><g font-size="14" fill="#c0392b"><text x="200" y="179">分布 B：方差大</text><text x="200" y="199">（分散、波动大）</text></g><text x="340" y="242" font-size="13" fill="#33536e" text-anchor="middle">中心相同，但胖瘦（方差）不同</text></svg>', caption: '图2　两分布均值相同：分布 A 离散小、集中；分布 B 离散大、分散。' },
        { type: 'heading', text: '三、期望与方差的性质对照' },
        { type: 'table', headers: ['性质类别', '期望 E(X)', '方差 D(X)'], rows: [['常数', 'E(c) = c', 'D(c) = 0'], ['线性变换', 'E(aX + b) = a·E(X) + b', 'D(aX + b) = a²·D(X)'], ['可加性', 'E(X + Y) = E(X) + E(Y)', '独立时 D(X + Y) = D(X) + D(Y)'], ['独立乘积', '独立时 E(XY) = E(X)·E(Y)', '—']] },
        { type: 'heading', text: '四、物理意义与解读' },
        { type: 'keypoint', label: '重点·物理意义', text: '期望刻画分布的<strong>中心位置</strong>（“平均落在哪”）；方差刻画分布的<strong>离散程度</strong>（“数据离中心有多散”）。二者共同描述一个随机变量：期望告诉你中心，方差告诉你这个中心有多可靠。' },
        { type: 'tip', label: '解读', text: '<strong>方差越小，数据越集中、越稳定</strong>；方差越大，数据越分散、波动越大。比较两组数据时，先看期望（中心高低），再看方差（稳定性），不能只凭期望下结论。例如两名运动员平均得分相同，方差小者发挥更稳定。' },
        { type: 'warn', label: '易错', text: '使用简化公式 D(X) = E(X²) - [E(X)]² 时，<strong>先求 E(X²) 再平方 E(X)</strong>，顺序不要颠倒；注意 E(X²) ≠ [E(X)]²（除非方差为 0）。另外，<strong>D(X + Y) = D(X) + D(Y) 仅在 X、Y 独立（或不相关）时成立</strong>，一般情形还要加协方差项。' },
        { type: 'heading', text: '五、典型例题' },
        { type: 'example', label: '例题1', text: '已知随机变量 X 的分布列：P(X=1)=0.2，P(X=2)=0.5，P(X=3)=0.3。<br>求 E(X) 与 D(X)。<br><br><strong>解</strong>：由期望定义，E(X) = 1×0.2 + 2×0.5 + 3×0.3 = 0.2 + 1.0 + 0.9 = <strong>2.1</strong>。<br>再用简化公式：E(X²) = 1²×0.2 + 2²×0.5 + 3²×0.3 = 0.2 + 2.0 + 2.7 = 4.9，<br>故 D(X) = E(X²) - [E(X)]² = 4.9 - 2.1² = 4.9 - 4.41 = <strong>0.49</strong>。' },
        { type: 'example', label: '例题2', text: '已知随机变量 X 满足 E(X) = 4，D(X) = 9，令 Y = 2X - 3。<br>求 E(Y) 与 D(Y)。<br><br><strong>解</strong>：由期望线性性质，E(Y) = E(2X - 3) = 2·E(X) - 3 = 2×4 - 3 = <strong>5</strong>。<br>由方差性质，D(Y) = D(2X - 3) = 2²·D(X) = 4×9 = <strong>36</strong>。<br>注意减 3 是平移，不改变离散程度；只有系数 2 会按平方放大方差。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">线性变换对期望与方差的影响</text><rect x="60" y="90" width="240" height="90" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="180" y="120" font-size="15" fill="#2b5b9e" text-anchor="middle" font-weight="bold">随机变量 X</text><text x="180" y="150" font-size="14" fill="#33536e" text-anchor="middle">中心 E(X)，宽度 ∝ √D(X)</text><rect x="420" y="90" width="200" height="90" rx="8" fill="#f3e6f7" stroke="#7a5aa0" stroke-width="2"/><text x="520" y="120" font-size="15" fill="#7a5aa0" text-anchor="middle" font-weight="bold">Y = 2X - 3</text><text x="520" y="150" font-size="14" fill="#33536e" text-anchor="middle">中心 2E(X)-3，宽度 2 倍</text><line x1="300" y1="135" x2="420" y2="135" stroke="#c0392b" stroke-width="2.5"/><polygon points="420,135 406,129 406,141" fill="#c0392b"/><text x="360" y="80" font-size="14" fill="#c0392b" text-anchor="middle">×2 再 -3</text><text x="340" y="225" font-size="14" fill="#33536e" text-anchor="middle">中心平移伸缩，宽度按系数放大；方差变为 2² 倍</text></svg>', caption: '图3　线性变换 Y = aX + b：期望线性变化，方差放大 a² 倍（平移 b 不影响方差）。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['期望 E(X) = Σ xᵢ·pᵢ，是以概率为权重的加权平均，刻画中心位置', '期望性质：E(c)=c，E(aX+b)=aE(X)+b，可加性无条件成立', '方差 D(X) = Σ(xᵢ-E(X))²·pᵢ，简化公式 D(X)=E(X²)-[E(X)]²', '标准差 σ(X)=√D(X)，与原变量同量纲', '方差性质：D(c)=0，D(aX+b)=a²D(X)，独立时 D(X+Y)=D(X)+D(Y)', '方差越小越集中稳定；比较数据先看期望再看方差'] }
      ],
      exercises: [
        { type: 'choice', question: '设离散型随机变量 X 的分布列满足 P(X=1)=0.2，P(X=2)=0.5，P(X=3)=0.3，则 E(X) 等于？', options: ['1.8', '2.0', '2.1', '2.3'], answer: '2.1', explanation: '期望是以概率为权重的加权平均，计算公式为 E(X)=Σ xᵢ·pᵢ。代入数据得 1×0.2 + 2×0.5 + 3×0.3 = 0.2 + 1.0 + 0.9 = 2.1。逐项把取值与对应概率相乘再求和，即可得到该随机变量平均取值水平。' },
        { type: 'choice', question: '已知 E(X)=4，根据期望的线性性质，E(2X-3) 等于？', options: ['5', '8', '11', '2'], answer: '5', explanation: '由期望线性性质 E(aX+b)=a·E(X)+b，令 a=2、b=-3，得 E(2X-3)=2×E(X)-3=2×4-3=5。注意常数项 -3 直接参与加减，不乘以系数 2，只有随机变量前的系数才放大期望。' },
        { type: 'fill', question: '已知 D(X)=9，根据方差性质，D(2X+1) = ____。', answer: '36', explanation: '由方差性质 D(aX+b)=a²·D(X)，常数平移 b 不改变方差，只有系数 a 按平方起作用。代入 a=2 得 D(2X+1)=2²×9=4×9=36。因此加 1 对方差毫无影响，方差仅随系数平方放大。' },
        { type: 'choice', question: '已知 E(X)=2 且 E(X²)=9，则 D(X) 等于？', options: ['5', '7', '11', '13'], answer: '5', explanation: '由方差简化公式 D(X)=E(X²)-[E(X)]²，代入 E(X²)=9、E(X)=2 得 D(X)=9-2²=9-4=5。该公式先求 X² 的期望再减去期望的平方，避免了逐项计算偏差平方，是考试中常用的高效算法。' },
        { type: 'fill', question: '若 D(X)=16，则标准差 σ(X) = ____。', answer: '4', explanation: '标准差是方差的算术平方根，即 σ(X)=√D(X)。由 D(X)=16 得 σ(X)=√16=4。标准差与随机变量本身同量纲，能直接与实际数据的单位对照，便于解释数据的波动大小。' }
      ]
    },

    /* ---------------- 第2课时 统计：抽样与用样本估计总体 ---------------- */
    {
      id: 'zt6-u5-l2',
      name: '统计：抽样与用样本估计总体',
      chapter: '概率统计复习 · 十、统计：抽样与用样本估计总体',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、抽样方法概述' },
        { type: 'paragraph', text: '统计研究的核心思想是用样本推断总体。要从总体中抽取能代表总体的样本，必须依据总体的结构选择合适的抽样方法。高考常考三种：简单随机抽样、分层随机抽样、系统抽样，各自适用于不同的总体特征。' },
        { type: 'keypoint', label: '重点·简单随机抽样', text: '<strong>简单随机抽样</strong>：从总体中<strong>逐个不放回</strong>地抽取，每个个体被抽到的概率相等。常用方法有抽签法和随机数法，适用于<strong>总体较小</strong>、个体间差异不明显的情况。' },
        { type: 'keypoint', label: '重点·分层随机抽样', text: '<strong>分层随机抽样</strong>：当总体由差异明显的若干层（类）组成时，先分层，再按各层个体数占总体比例抽取。各层抽取比相等：<strong>nᵢ / Nᵢ = n / N</strong>（Nᵢ、nᵢ 为第 i 层的总体数与样本数，N、n 为总体与样本总量）。适用于<strong>层间差异大</strong>的总体，能保证各层都被代表。' },
        { type: 'keypoint', label: '重点·系统抽样', text: '<strong>系统抽样（等距抽样）</strong>：将总体按一定顺序编号，先随机确定起点，再按<strong>固定间隔 k</strong> 依次抽取。适用于<strong>总体较大且个体有顺序</strong>（如学号、编号）的情形，操作简便、分布较均匀。' },
        { type: 'list', items: ['简单随机：总体小、无层间差异，逐个不放回等概率', '分层抽样：层间差异大，各层按同一比例 nᵢ/Nᵢ = n/N 抽取', '系统抽样：总体大且有顺序，固定间隔等距抽取', '无论哪种抽样，都要保证每个个体被抽到的机会公平'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">三种抽样方法对比</text><rect x="40" y="60" width="190" height="170" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="135" y="88" font-size="15" font-weight="bold" fill="#2b5b9e" text-anchor="middle">简单随机</text><g fill="#2b5b9e"><circle cx="80" cy="130" r="10"/><circle cx="120" cy="130" r="10"/><circle cx="160" cy="130" r="10"/><circle cx="190" cy="130" r="10"/><circle cx="100" cy="175" r="10"/><circle cx="150" cy="175" r="10"/></g><text x="135" y="215" font-size="12" fill="#33536e" text-anchor="middle">总体小·等概率</text><rect x="250" y="60" width="190" height="170" fill="#f3e6f7" stroke="#7a5aa0" stroke-width="2"/><text x="345" y="88" font-size="15" font-weight="bold" fill="#7a5aa0" text-anchor="middle">分层抽样</text><g font-size="12" fill="#33536e" text-anchor="middle"><text x="290" y="125">层1</text><text x="345" y="125">层2</text><text x="400" y="125">层3</text></g><g fill="#7a5aa0"><rect x="270" y="140" width="40" height="14"/><rect x="325" y="140" width="40" height="14"/><rect x="380" y="140" width="40" height="14"/></g><text x="345" y="215" font-size="12" fill="#33536e" text-anchor="middle">层间差异大·按比例</text><rect x="460" y="60" width="190" height="170" fill="#fde7e0" stroke="#e05d44" stroke-width="2"/><text x="555" y="88" font-size="15" font-weight="bold" fill="#c0392b" text-anchor="middle">系统抽样</text><g stroke="#c0392b" stroke-width="3"><line x1="490" y1="150" x2="620" y2="150"/></g><g fill="#c0392b"><circle cx="490" cy="150" r="8"/><circle cx="530" cy="150" r="8"/><circle cx="570" cy="150" r="8"/><circle cx="610" cy="150" r="8"/></g><text x="555" y="215" font-size="12" fill="#33536e" text-anchor="middle">总体大·固定间隔</text></svg>', caption: '图1　三种抽样：简单随机（等概率小总体）、分层（按比例）、系统（等距大总体）。' },
        { type: 'table', headers: ['抽样方法', '适用总体', '核心特点'], rows: [['简单随机抽样', '总体较小', '逐个不放回，每个个体等概率'], ['分层随机抽样', '层间差异明显', '按比例从各层抽，各层抽取比相等'], ['系统抽样', '总体大且有顺序', '固定间隔等距抽取，先随机定起点']] },
        { type: 'heading', text: '二、用样本估计总体：频率分布直方图' },
        { type: 'keypoint', label: '重点·直方图要点', text: '频率分布直方图中，<strong>纵轴 = 频率 / 组距</strong>，而不是频率；每个<strong>小长方形的面积 = 组距 ×（频率/组距）= 频率</strong>，所有小长方形面积之和 = 1。读图时务必先看纵轴单位，再看面积含义。' },
        { type: 'warn', label: '易错', text: '最大误区是<strong>把纵轴当成频率</strong>。纵轴是“频率/组距”，只有<strong>面积</strong>才代表频率。若某组频率/组距为 0.03、组距为 10，则该组频率为 0.3。比较各组频率大小要看“哪个长方形更高更宽（面积更大）”，而非仅看高度。' },
        { type: 'keypoint', label: '重点·由直方图估计数字特征', text: '用频率分布直方图估计总体数字特征：<strong>估计平均数 = Σ（组中值 × 频率）</strong>；<strong>估计中位数</strong>为累计频率达到 <strong>0.5</strong> 时所在组的组中值（或更精确地用比例插值）；众数是最高长方形对应组的组中值。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">频率分布直方图（纵轴=频率/组距，面积=频率）</text><line x1="80" y1="60" x2="80" y2="240" stroke="#33536e" stroke-width="2"/><line x1="80" y1="240" x2="560" y2="240" stroke="#33536e" stroke-width="2"/><text x="50" y="70" font-size="13" fill="#33536e" text-anchor="middle" transform="rotate(-90 50 70)">频率/组距</text><g fill="#4a7de0" stroke="#2b5b9e" stroke-width="1"><rect x="100" y="200" width="80" height="40"/><rect x="185" y="160" width="80" height="80"/><rect x="270" y="80" width="80" height="160"/><rect x="355" y="160" width="80" height="80"/><rect x="440" y="200" width="80" height="40"/></g><g font-size="12" fill="#33536e" text-anchor="middle"><text x="140" y="258">15</text><text x="225" y="258">25</text><text x="310" y="258">35</text><text x="395" y="258">45</text><text x="480" y="258">55</text></g><rect x="270" y="80" width="80" height="160" fill="#e05d44" fill-opacity="0.35" stroke="#c0392b" stroke-width="1.5"/><text x="310" y="70" font-size="12" fill="#c0392b" text-anchor="middle">面积=频率</text><text x="320" y="285" font-size="13" fill="#33536e" text-anchor="middle">组中值×频率 求和 ≈ 总体平均数</text></svg>', caption: '图2　直方图：纵轴是频率/组距，小长方形面积等于该组频率，面积总和为 1。' },
        { type: 'heading', text: '三、百分位数' },
        { type: 'keypoint', label: '重点·百分位数', text: '把一组数据<strong>从小到大排列</strong>后，<strong>第 p 百分位数</strong>是这样一个数：使得<strong>至少有 p% 的数据小于或等于它</strong>，且至少有 (100-p)% 的数据大于或等于它。常用 p = 25、50（中位数）、75、90 等描述数据分布位置。' },
        { type: 'tip', label: '计算步骤', text: '求第 p 百分位数的步骤：① 将数据从小到大排列；② 计算 i = n × p%；③ 若 i 不是整数，向上取整得的位置即为所求；④ 若 i 是整数，则取第 i 项与第 i+1 项的平均数。中位数就是第 50 百分位数。' },
        { type: 'heading', text: '四、样本数字特征' },
        { type: 'keypoint', label: '重点·位置特征', text: '<strong>平均数</strong> x̄ = (1/n)·Σ xᵢ，反映集中趋势；<strong>中位数</strong>是排序后位于中间的数（n 为奇数取中间，偶数取中间两数的平均），不受极端值影响；<strong>众数</strong>是出现次数最多的数。三者从不同角度刻画“中心”。' },
        { type: 'keypoint', label: '重点·离散特征', text: '<strong>样本方差</strong> s² = (1/n)·Σ (xᵢ - x̄)²，衡量数据偏离平均数的程度；<strong>样本标准差</strong> s = √s²，与原始数据同量纲。方差或标准差越大，数据越分散。' },
        { type: 'list', items: ['平均数 x̄ = (1/n)·Σ xᵢ（受极端值影响）', '中位数：排序后中间值（抗极端值）', '众数：出现次数最多的值', '方差 s² = (1/n)·Σ(xᵢ - x̄)²，标准差 s = √s²', '方差越小，数据越集中稳定'] },
        { type: 'heading', text: '五、数据的线性变换' },
        { type: 'keypoint', label: '重点·变换公式', text: '若对每个数据作线性变换 <strong>yᵢ = a·xᵢ + b</strong>，则新数据的数字特征满足：<strong>平均数 ȳ = a·x̄ + b</strong>，<strong>方差 s_y² = a²·s_x²</strong>（标准差 s_y = |a|·s_x）。常数项 b 只平移中心，不改变离散程度。' },
        { type: 'warn', label: '易错', text: '线性变换中最易出错的是方差：<strong>乘 a 使方差变为原来的 a² 倍，加 b 对方差毫无影响</strong>。常见误写 s_y² = a²·s_x² + b 或 s_y² = a·s_x²。记住：方差衡量的是“偏离程度”，整体平移 b 不会改变偏离，只会被伸缩 a 按平方放大。' },
        { type: 'heading', text: '六、典型例题' },
        { type: 'example', label: '例题1', text: '某班身高（单位 cm）的频率分布直方图中，各组组中值为 155、165、175、185、195，对应频率分别为 0.1、0.2、0.4、0.2、0.1。<br>估计平均身高。<br><br><strong>解</strong>：用组中值近似代替该组平均，估计平均数 = Σ（组中值 × 频率）<br>= 155×0.1 + 165×0.2 + 175×0.4 + 185×0.2 + 195×0.1<br>= 15.5 + 33 + 70 + 37 + 19.5 = <strong>175 cm</strong>。' },
        { type: 'example', label: '例题2', text: '某校高三共 N = 2000 人，其中男生 N₁ = 1200 人、女生 N₂ = 800 人。现按比例抽取 n = 200 人的样本，问男、女生各抽多少人？<br><br><strong>解</strong>：抽取比 = n / N = 200 / 2000 = 0.1。<br>男生应抽 n₁ = N₁ × 0.1 = 1200 × 0.1 = <strong>120 人</strong>；<br>女生应抽 n₂ = N₂ × 0.1 = 800 × 0.1 = <strong>80 人</strong>。<br>检验：各层抽取比均为 0.1，且 120 + 80 = 200，符合。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">分层随机抽样：各层按同一比例抽取</text><rect x="60" y="70" width="560" height="40" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="340" y="96" font-size="14" fill="#2b5b9e" text-anchor="middle">总体 N = 2000（男生 1200，女生 800）</text><rect x="60" y="130" width="336" height="40" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.5"/><text x="228" y="156" font-size="13" fill="#fff" text-anchor="middle">男生层 N₁=1200 → n₁=120</text><rect x="404" y="130" width="216" height="40" fill="#7a5aa0" stroke="#4a7de0" stroke-width="1.5"/><text x="512" y="156" font-size="13" fill="#fff" text-anchor="middle">女生层 N₂=800 → n₂=80</text><text x="340" y="210" font-size="14" fill="#33536e" text-anchor="middle">各层抽取比相同：n₁/N₁ = n₂/N₂ = n/N = 0.1</text></svg>', caption: '图3　分层抽样：按各层人数占总体比例分配样本量，各层抽取比相等。' },
        { type: 'heading', text: '七、本课小结' },
        { type: 'list', items: ['三种抽样：简单随机（小总体）、分层（层间差异大，按比例）、系统（大总体等距）', '直方图纵轴=频率/组距，小长方形面积=频率，面积和=1', '估计平均数=Σ(组中值×频率)，估计中位数看累计频率 0.5 所在组', '百分位数：从小到大排列，至少 p% 数据≤它', '样本特征：x̄、中位数、众数、s²、s', '线性变换 yᵢ=a xᵢ+b：ȳ=a x̄+b，s_y²=a² s_x²'] }
      ],
      exercises: [
        { type: 'choice', question: '某中学高一、高二、高三共 3000 人，三层人数差异较大，要抽取 300 人做调查，最适宜的抽样方法是？', options: ['简单随机抽样', '分层随机抽样', '系统抽样', '全面调查'], answer: '分层随机抽样', explanation: '当总体由差异明显的若干层构成时，应采用分层随机抽样，使各层按同一比例被抽到，样本结构更贴近总体。题中三个年级人数差异大，故适宜分层抽样，可保证各年级都被代表。简单随机可能使某层代表不足，系统抽样不解决层间差异。' },
        { type: 'fill', question: '总体 N = 2000，样本量 n = 200，某层总体数 Nᵢ = 400，则该层应抽取人数 nᵢ = ____。', answer: '40', explanation: '分层随机抽样中各层抽取比相等，满足 nᵢ / Nᵢ = n / N。代入 N=2000、n=200、Nᵢ=400，得 nᵢ = 400 × (200/2000) = 400 × 0.1 = 40 人。即按总体中该层所占比例分配样本量。' },
        { type: 'choice', question: '在频率分布直方图中，纵轴的含义是？', options: ['频率', '频率/组距', '频数', '组距'], answer: '频率/组距', explanation: '频率分布直方图的纵轴是频率除以组距，即“频率/组距”。每个小长方形的面积等于组距乘以纵轴值，恰好是该组的频率，所有面积之和为 1。纵轴本身不是频率，这是高考常见易错点，读图时务必先看纵轴单位。' },
        { type: 'choice', question: '若 yᵢ = 3xᵢ - 2，且样本 x 的方差 s_x² = 4，则 y 的方差 s_y² 等于？', options: ['4', '10', '12', '36'], answer: '36', explanation: '数据作线性变换 yᵢ = a xᵢ + b 时，方差满足 s_y² = a²·s_x²，常数项 b 不改变离散程度。代入 a=3、s_x²=4，得 s_y² = 3² × 4 = 9 × 4 = 36。注意加 -2 对方差无影响，方差只随系数平方放大。' },
        { type: 'fill', question: '将 10 个数据从小到大排列，第 80 百分位数是指至少有 ____% 的数据小于或等于它的值。', answer: '80', explanation: '百分位数的定义：把数据从小到大排列后，第 p 百分位数是这样一个值，使得至少有 p% 的数据小于或等于它，且至少有 (100-p)% 的数据大于或等于它。题中 p=80，因此至少有 80% 的数据不大于该百分位数。' }
      ]
    }

  );
})();
