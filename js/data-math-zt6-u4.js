/* ============================================================
 * 高三数学 · 高考复习专题 · 概率统计
 * 第4课时（单元 u4）：
 *   第1课时 离散型随机变量及其分布列（分布列、两点分布、二项分布）
 *   第2课时 超几何分布与正态分布
 * 数据注入：math.zt6.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt6');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 离散型随机变量及其分布列（分布列、两点分布、二项分布） ---------------- */
    {
      id: 'zt6-u4-l1',
      name: '离散型随机变量及其分布列（分布列、两点分布、二项分布）',
      chapter: '概率统计复习 · 七、离散型随机变量及其分布列（分布列、两点分布、二项分布）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、离散型随机变量' },
        { type: 'paragraph', text: '在随机试验中，许多结果可以用数值直接表示，例如掷骰子的点数、抽取产品的次品数。把试验结果对应到实数，就得到随机变量。其中只取有限个或可列个值的随机变量，叫做离散型随机变量，它是高考考查的核心对象。' },
        { type: 'keypoint', label: '重点·定义', text: '如果随机变量 X 的<strong>所有可能取值能够一一列举出来</strong>（即取有限个或可列个值），就称 X 为<strong>离散型随机变量</strong>。例如掷一枚骰子的点数、n 次投篮的命中次数，都是离散型随机变量。' },
        { type: 'paragraph', text: '要掌握一个离散型随机变量，只知道它取哪些值还不够，还必须知道取每个值的概率。把取值与对应概率列成表格或式子，就是分布列。' },
        { type: 'keypoint', label: '重点·分布列', text: '设离散型随机变量 X 的可能取值为 x₁, x₂, …, xₙ，对应的概率为 pᵢ = P(X = xᵢ)，则称 P(X = xᵢ) = pᵢ (i = 1, 2, …, n) 为 X 的<strong>分布列</strong>。分布列也可写成表格：第一行是取值 xᵢ，第二行是对应的概率 pᵢ。' },
        { type: 'keypoint', label: '重点·两条性质', text: '任意分布列都必须满足两条性质：① <strong>pᵢ ≥ 0</strong>（每个概率非负）；② <strong>Σ pᵢ = 1</strong>（所有概率之和为 1）。这两条是<strong>检验分布列是否正确、是否合法的第一标准</strong>。' },
        { type: 'list', items: ['分布列给出“取值 — 概率”的对应表，是刻画离散型随机变量的完整方式', '性质一保证概率非负，性质二保证所有可能结果被穷尽', '拿到一个分布列，先验证 pᵢ ≥ 0 且 Σ pᵢ = 1，再计算期望方差', '分布列不完整时，可用 Σ pᵢ = 1 反求未知概率'] },
        { type: 'example', label: '例题1', text: '设随机变量 X 的分布列为 P(X = -1) = 0.2，P(X = 0) = 0.5，P(X = 1) = 0.3。验证它是否合法。<br><br><strong>解</strong>：检验分布列两条性质。<br>① 各概率均非负：0.2、0.5、0.3 都 ≥ 0，满足；<br>② 概率之和：0.2 + 0.5 + 0.3 = 1.0，满足。<br>两条性质均成立，故这是一个<strong>合法的分布列</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">离散型随机变量 X 的取值与概率分布列</text><line x1="60" y1="210" x2="640" y2="210" stroke="#33536e" stroke-width="2"/><rect x="120" y="170" width="60" height="40" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.5"/><rect x="260" y="80" width="60" height="130" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.5"/><rect x="400" y="110" width="60" height="100" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.5"/><rect x="540" y="140" width="60" height="70" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.5"/><g font-size="15" fill="#2b5b9e" text-anchor="middle"><text x="150" y="200">x₁</text><text x="290" y="200">x₂</text><text x="430" y="200">x₃</text><text x="570" y="200">x₄</text><text x="150" y="162">0.1</text><text x="290" y="72">0.4</text><text x="430" y="102">0.3</text><text x="570" y="132">0.2</text></g><text x="340" y="240" font-size="14" fill="#33536e" text-anchor="middle">性质：pᵢ ≥ 0，且 p₁ + p₂ + p₃ + p₄ = 1</text></svg>', caption: '图1　离散型随机变量 X 的取值与对应概率：柱高代表概率，全部柱高之和为 1。' },
        { type: 'heading', text: '二、两点分布（0-1 分布）' },
        { type: 'keypoint', label: '重点·分布列', text: '若随机变量 X 只取 <strong>0 和 1</strong> 两个值，且 P(X = 1) = p、P(X = 0) = 1 - p（其中 <strong>0＜p＜1</strong>），则称 X 服从<strong>两点分布</strong>（也称 0-1 分布）。它是最简单的离散型分布，常用于一次试验是否成功的建模。' },
        { type: 'keypoint', label: '重点·数字特征', text: '两点分布的数字特征为：<strong>期望 E(X) = p</strong>，<strong>方差 D(X) = p(1 - p)</strong>。由期望定义 E(X) = 0·(1-p) + 1·p = p，方差 D(X) = E(X²) - [E(X)]² = p - p² = p(1-p)。' },
        { type: 'table', headers: ['对比项', '两点分布', '二项分布（先了解）'], rows: [['取值个数', '2 个（0 和 1）', 'n+1 个（0 到 n）'], ['参数', 'p', 'n, p'], ['期望', 'p', 'np'], ['方差', 'p(1-p)', 'np(1-p)'], ['适用', '一次试验成功与否', 'n 次独立重复试验']] },
        { type: 'paragraph', text: '两点分布在生活中十分常见：一次投篮是否命中、一台机器是否故障、一道判断题是否答对，都可以用取值 0 或 1 的随机变量来描述。当 n = 1 时，二项分布就退化为两点分布。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">两点分布（0-1 分布）示意　取 p = 0.7</text><line x1="80" y1="190" x2="600" y2="190" stroke="#33536e" stroke-width="2"/><rect x="220" y="133" width="70" height="57" fill="#5a7a2a" stroke="#33536e" stroke-width="1.5"/><rect x="390" y="55" width="70" height="135" fill="#e05d44" stroke="#c0392b" stroke-width="1.5"/><g font-size="15" fill="#33536e" text-anchor="middle"><text x="255" y="180">X = 0</text><text x="425" y="180">X = 1</text><text x="255" y="123">1-p=0.3</text><text x="425" y="45">p=0.7</text></g><text x="340" y="222" font-size="14" fill="#33536e" text-anchor="middle">E(X) = 0.7，D(X) = 0.7 × 0.3 = 0.21</text></svg>', caption: '图2　两点分布：X 取 0 与 1，取 1 的概率 p 更高时，红色柱更高；期望等于 p。' },
        { type: 'heading', text: '三、二项分布' },
        { type: 'keypoint', label: '重点·适用条件', text: '二项分布 X ~ B(n, p) 适用于满足以下条件的随机试验：① 进行 <strong>n 次独立重复试验</strong>；② 每次试验<strong>只有两种结果</strong>（成功或失败）；③ 每次成功的<strong>概率 p 保持不变</strong>。记 X 为 n 次中成功的次数。' },
        { type: 'keypoint', label: '重点·概率公式', text: '若 X ~ B(n, p)，则恰好成功 k 次的概率为：<br><strong>P(X = k) = C_n^k · p^k · (1 - p)^{n-k}</strong>，其中 k = 0, 1, 2, …, n。组合数 C_n^k 表示从 n 次中选出 k 次成功，再乘各自的成功与失败概率。' },
        { type: 'keypoint', label: '重点·数字特征', text: '二项分布的数字特征为：<strong>期望 E(X) = np</strong>，<strong>方差 D(X) = np(1 - p)</strong>。期望表示平均成功次数，方差随 n、p 增大而增大；当 p = 0.5 时分布最对称。' },
        { type: 'list', items: ['投篮 / 射击命中：每次命中概率 p 恒定、各次独立', '有放回抽样：每次抽到目标的概率不变', '机器故障：每台机器独立工作、故障概率相同', '做题答对：每题答对概率固定、题目相互独立'] },
        { type: 'warn', label: '易错', text: '使用二项分布必须满足<strong>各次试验相互独立且成功概率 p 不变</strong>。常见错误是把“无放回抽样”误当成二项分布——无放回时各次不独立、抽取概率逐次变化，应改用超几何分布。审题时务必先判断独立性。' },
        { type: 'tip', label: '辨析口诀', text: '<strong>有放回 → 二项分布，无放回 → 超几何分布。</strong>只要试验可重复、每次成功概率恒定，就用二项公式；若从有限总体中不放回抽取，概率逐次改变，则用超几何分布。这一点是高考区分度最高的考点。' },
        { type: 'example', label: '例题2', text: '某射手命中率为 0.8，独立射击 5 次，求恰好命中 3 次的概率。<br><br><strong>解</strong>：每次射击相互独立、命中概率恒定，命中次数 X ~ B(5, 0.8)。<br>P(X = 3) = C_5^3 · 0.8³ · (1 - 0.8)^{5-3}<br>= 10 × 0.512 × 0.2²<br>= 10 × 0.512 × 0.04<br>= <strong>0.2048</strong>。<br>故恰好命中 3 次的概率为 0.2048。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">二项分布概率分布条形图　X ~ B(5, 0.5)</text><line x1="60" y1="240" x2="640" y2="240" stroke="#33536e" stroke-width="2"/><rect x="65" y="225" width="50" height="15" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.2"/><rect x="165" y="165" width="50" height="75" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.2"/><rect x="265" y="90" width="50" height="150" fill="#e05d44" stroke="#c0392b" stroke-width="1.2"/><rect x="365" y="90" width="50" height="150" fill="#e05d44" stroke="#c0392b" stroke-width="1.2"/><rect x="465" y="165" width="50" height="75" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.2"/><rect x="565" y="225" width="50" height="15" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.2"/><g font-size="14" fill="#33536e" text-anchor="middle"><text x="90" y="258">k=0</text><text x="190" y="258">k=1</text><text x="290" y="258">k=2</text><text x="390" y="258">k=3</text><text x="490" y="258">k=4</text><text x="590" y="258">k=5</text><text x="90" y="218">0.03</text><text x="190" y="158">0.16</text><text x="290" y="82">0.31</text><text x="390" y="82">0.31</text><text x="490" y="158">0.16</text><text x="590" y="218">0.03</text></g><text x="340" y="270" font-size="13" fill="#33536e" text-anchor="middle">p = 0.5 时左右对称，中间 k=2、3 概率最大</text></svg>', caption: '图3　二项分布 B(5, 0.5) 的概率分布：条形高度即 P(X=k)，总和为 1，图形关于 k=2.5 对称。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['离散型随机变量：取有限或可列个值，用分布列刻画', '分布列两条性质：pᵢ ≥ 0 且 Σ pᵢ = 1（检验合法性的第一标准）', '两点分布：X 取 0、1，P(X=1)=p，E(X)=p，D(X)=p(1-p)', '二项分布 X~B(n,p)：n 次独立重复试验、每次两结果、p 不变', '公式 P(X=k)=C_n^k·p^k·(1-p)^{n-k}，E(X)=np，D(X)=np(1-p)', '记忆：有放回→二项，无放回→超几何，先判独立性再用公式'] }
      ],
      exercises: [
        { type: 'choice', question: '关于离散型随机变量的分布列，下列说法正确的是？', options: ['分布列中 pᵢ 可以小于 0', '分布列中 Σ pᵢ = 1', '分布列只适用于连续型变量', 'E(X) 一定等于 0'], answer: '分布列中 Σ pᵢ = 1', explanation: '离散型随机变量取有限或可列个值，其分布列必须满足两条性质：一是每个概率 pᵢ ≥ 0，二是所有概率之和 Σ pᵢ = 1。这两条是检验分布列是否正确的第一标准。说 pᵢ 可小于 0 违背非负性，分布列正用于离散取值而非连续变量，期望也未必为 0。' },
        { type: 'choice', question: '已知 X 服从两点分布，P(X=1)=p，则期望 E(X) 等于？', options: ['p', '1-p', 'p(1-p)', '1'], answer: 'p', explanation: '两点分布也称 0-1 分布，随机变量 X 只取 0 和 1，且 P(X=1)=p、P(X=0)=1-p（0＜p＜1）。由期望定义 E(X)=0×(1-p)+1×p=p。方差则为 D(X)=p(1-p)。本题直接考查两点分布期望公式，结果为 p。' },
        { type: 'fill', question: '二项分布 X ~ B(n, p) 的期望 E(X) = ____。', answer: 'np', explanation: '二项分布 X ~ B(n,p) 描述 n 次独立重复试验、每次成功概率为 p 时成功次数 X 的分布。其期望为 E(X)=np，方差为 D(X)=np(1-p)。期望等于试验次数与单次成功概率的乘积，是二项分布最重要的数字特征之一，应牢固记忆。' },
        { type: 'choice', question: '某射手命中率 0.8，独立射击 5 次，恰好命中 3 次的概率公式是？', options: ['C_5^3 × 0.8³ × 0.2²', 'C_5^3 × 0.8² × 0.2³', '0.8³ × 0.2²', '0.8⁵'], answer: 'C_5^3 × 0.8³ × 0.2²', explanation: '独立射击且每次命中概率恒定，命中次数服从二项分布 B(5,0.8)。恰好命中 3 次的概率为 P(X=3)=C_5^3 × 0.8³ × (1-0.8)^{5-3}=C_5^3 × 0.8³ × 0.2²。必须乘以组合数表示从 5 次中选出 3 次命中，再乘各自的成功与失败概率，缺一不可。' },
        { type: 'fill', question: '二项分布要求各次试验相互 ____ 且每次成功概率 p 保持 ____。（两空用逗号隔开）', answer: '独立，不变', explanation: '二项分布的核心适用条件是 n 次独立重复试验，即各次试验相互独立、每次试验只有两种结果、且成功概率 p 始终不变。若抽样无放回导致各次不独立或概率变化，则不能用二项分布，而应使用超几何分布。审题时务必看清是放回还是不放回，先判独立性再用公式。' }
      ]
    },

    /* ---------------- 第2课时 超几何分布与正态分布 ---------------- */
    {
      id: 'zt6-u4-l2',
      name: '超几何分布与正态分布',
      chapter: '概率统计复习 · 八、超几何分布与正态分布',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、超几何分布' },
        { type: 'paragraph', text: '前面学习的二项分布对应“有放回”或独立重复的情形。现实中更常见的是从一批产品中“不放回”抽取若干件并检查其中次品数，此时各次抽取不独立、概率逐次变化，需要用超几何分布来建模。' },
        { type: 'keypoint', label: '重点·定义与公式', text: '从含有 <strong>M 件次品</strong>的 <strong>N 件产品</strong>中<strong>不放回</strong>抽取 n 件，设抽到的次品数为 X，则 X 服从<strong>超几何分布</strong>。其概率为：<br><strong>P(X = k) = [C_M^k · C_{N-M}^{n-k}] / C_N^n</strong>，其中 k = 0, 1, …, min{n, M}。' },
        { type: 'keypoint', label: '重点·数字特征', text: '超几何分布的数字特征为：<br><strong>期望 E(X) = n · M / N</strong>；<br><strong>方差 D(X) = n · (M/N) · (1 - M/N) · (N - n) / (N - 1)</strong>。<br>注意方差中多了一个 <strong>(N - n)/(N - 1)</strong> 的有限总体校正因子，它来自不放回抽样。' },
        { type: 'list', items: ['总体共 N 件，其中次品 M 件（合格品 N-M 件）', '不放回抽取 n 件，关心抽到的次品数 X', '分子：从 M 件次品取 k 件，再从合格品取 n-k 件', '分母：从 N 件中任取 n 件的总取法 C_N^n', 'k 的取值范围是 0 到 min{n, M}'] },
        { type: 'example', label: '例题1', text: '袋中有 10 件产品，其中 3 件次品，不放回抽取 2 件，求恰好抽到 1 件次品的概率。<br><br><strong>解</strong>：次品数 X 服从超几何分布，N = 10，M = 3，n = 2，k = 1。<br>P(X = 1) = [C_3^1 · C_7^1] / C_10^2<br>= (3 × 7) / 45<br>= 21 / 45<br>= <strong>7/15 ≈ 0.4667</strong>。<br>故恰好抽到 1 件次品的概率为 7/15。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">有放回（二项） vs 无放回（超几何）</text><rect x="50" y="60" width="280" height="170" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="190" y="90" font-size="15" font-weight="bold" fill="#2b5b9e" text-anchor="middle">有放回抽取</text><g font-size="13" fill="#33536e"><text x="70" y="120">每次抽后放回</text><text x="70" y="146">各次相互独立</text><text x="70" y="172">p 恒定不变</text><text x="70" y="200">→ 二项分布 B(n,p)</text></g><rect x="350" y="60" width="280" height="170" fill="#f3e6f7" stroke="#7a5aa0" stroke-width="2"/><text x="490" y="90" font-size="15" font-weight="bold" fill="#7a5aa0" text-anchor="middle">无放回抽取</text><g font-size="13" fill="#33536e"><text x="370" y="120">抽后不再放回</text><text x="370" y="146">各次不独立</text><text x="370" y="172">概率逐次变化</text><text x="370" y="200">→ 超几何分布</text></g><text x="340" y="244" font-size="13" fill="#c0392b" text-anchor="middle">审题关键：看清“放回”还是“不放回”</text></svg>', caption: '图1　两种抽样方式对比：有放回对应二项分布，无放回对应超几何分布，核心区别在于独立性与概率是否恒定。' },
        { type: 'heading', text: '二、二项分布与超几何分布辨析' },
        { type: 'table', headers: ['对比维度', '二项分布 B(n,p)', '超几何分布'], rows: [['抽样方式', '有放回（或独立重复）', '无放回'], ['独立性', '各次相互独立', '各次不独立'], ['概率是否恒定', '每次 p 不变', '概率逐次变化'], ['参数', 'n, p', 'N, M, n'], ['期望', 'np', 'n·M/N'], ['近似关系', '当 N 很大时可近似超几何', '当 N 很大时可用二项近似（p=M/N）']] },
        { type: 'keypoint', label: '重点·近似关系', text: '当总体容量 <strong>N 很大</strong>时，不放回抽样对概率的影响很小，此时<strong>超几何分布可用二项分布近似</strong>，近似中取 p = M/N。反之，若总体很小且不放回，则必须用超几何公式，不能用二项分布代替。' },
        { type: 'warn', label: '易错', text: '两类分布最易混在“抽样方式”上。务必<strong>审题看清是“放回”还是“不放回”</strong>：放回则独立、p 恒定，用二项分布；不放回则不独立、概率变化，用超几何分布。把不放回误当二项分布，是高考常见失分点。' },
        { type: 'tip', label: '解题关键', text: '拿到抽样题先问三句话：① 是放回还是不放回？② 各次是否独立？③ 成功概率是否恒定？三问清晰后，独立且恒定选二项，否则选超几何。总体很大时，不放回也可近似用二项（p = M/N）。' },
        { type: 'heading', text: '三、正态分布' },
        { type: 'keypoint', label: '重点·概率密度', text: '若连续型随机变量 X 的概率密度为 <strong>f(x) = [1 / (σ√(2π))] · e^{-(x-μ)²/(2σ²)}</strong>，则称 X 服从<strong>正态分布</strong>，记作 <strong>X ~ N(μ, σ²)</strong>。其中 e 为自然常数，π 为圆周率。' },
        { type: 'keypoint', label: '重点·参数意义', text: '参数 <strong>μ 是均值</strong>，决定曲线的<strong>位置</strong>（对称轴与中心）；参数 <strong>σ 是标准差</strong>，决定曲线的<strong>形状</strong>。μ 改变只让曲线左右平移，σ 改变则影响胖瘦。' },
        { type: 'list', items: ['曲线关于 x = μ 对称，呈中间高、两头低的钟形', '在 x = μ 处曲线取得最大值，向两侧逐渐降低', 'σ 越大，数据越分散，曲线越“矮胖”', 'σ 越小，数据越集中，曲线越“高瘦”', '曲线与 x 轴之间的总面积恒等于 1'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">正态分布钟形曲线　X ~ N(μ, σ²)</text><path d="M 100 250 C 180 250, 280 70, 340 70 C 400 70, 500 250, 580 250" fill="none" stroke="#4a7de0" stroke-width="3"/><line x1="340" y1="60" x2="340" y2="252" stroke="#2b5b9e" stroke-width="2" stroke-dasharray="5,4"/><rect x="260" y="70" width="160" height="180" fill="#e05d44" opacity="0.18"/><g stroke="#7a5aa0" stroke-width="1.5"><line x1="180" y1="250" x2="180" y2="150"/><line x1="260" y1="250" x2="260" y2="110"/><line x1="420" y1="250" x2="420" y2="110"/><line x1="500" y1="250" x2="500" y2="150"/></g><g font-size="13" fill="#33536e" text-anchor="middle"><text x="340" y="68">μ（对称轴）</text><text x="180" y="270">μ-2σ</text><text x="260" y="270">μ-σ</text><text x="420" y="270">μ+σ</text><text x="500" y="270">μ+2σ</text></g><text x="340" y="285" font-size="13" fill="#c0392b" text-anchor="middle">红色区域为 (μ-σ, μ+σ)，概率约 0.6827</text></svg>', caption: '图2　正态分布曲线关于 x=μ 对称；μ 决定位置，σ 决定胖瘦；红色阴影为 1 个标准差区间。' },
        { type: 'keypoint', label: '重点·3σ 原则', text: '正态变量落在区间内的概率遵循 <strong>3σ 原则</strong>：<br>P(μ-σ＜X＜μ+σ) ≈ <strong>0.6827</strong>；<br>P(μ-2σ＜X＜μ+2σ) ≈ <strong>0.9545</strong>；<br>P(μ-3σ＜X＜μ+3σ) ≈ <strong>0.9973</strong>。' },
        { type: 'example', label: '例题2', text: '已知 X ~ N(μ, σ²)，求 P(μ-σ＜X＜μ+σ) 的值。<br><br><strong>解</strong>：由 3σ 原则，正态变量落在区间 (μ-σ, μ+σ) 内的概率约为 0.6827。<br>故 <strong>P(μ-σ＜X＜μ+σ) ≈ 0.6827</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">3σ 原则：三段区间的概率</text><rect x="80" y="60" width="520" height="36" fill="#e05d44" stroke="#c0392b" stroke-width="1.2"/><text x="340" y="84" font-size="15" fill="#fff" text-anchor="middle">μ±σ　约 68.27%</text><rect x="80" y="106" width="520" height="36" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.2"/><text x="340" y="130" font-size="15" fill="#fff" text-anchor="middle">μ±2σ　约 95.45%</text><rect x="80" y="152" width="520" height="36" fill="#5a7a2a" stroke="#33536e" stroke-width="1.2"/><text x="340" y="176" font-size="15" fill="#fff" text-anchor="middle">μ±3σ　约 99.73%</text><text x="340" y="216" font-size="13" fill="#33536e" text-anchor="middle">区间越宽，覆盖概率越大；超出 3σ 视为小概率异常</text></svg>', caption: '图3　3σ 原则三段区间：随区间加宽，覆盖概率由约 68.27% 增至约 99.73%。' },
        { type: 'paragraph', text: '3σ 原则在实际中有广泛应用：质量控制中把超出 μ±3σ 的产品视为异常予以剔除；成绩分布、测量误差、身高体重等大量自然与社会现象都近似服从正态分布，可用其估计落在某区间的比例。' },
        { type: 'tip', label: '应用提示', text: '遇到“服从正态分布”的题，先标出 μ 与 σ，再利用 3σ 原则直接写出常见区间的概率，可避免积分计算。考试只要求掌握 0.6827、0.9545、0.9973 三个数值及其对称运用。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['超几何分布：不放回抽 n 件，P(X=k)=[C_M^k·C_{N-M}^{n-k}]/C_N^n', '超几何期望 E(X)=nM/N，方差含校正因子 (N-n)/(N-1)', '辨析：放回→二项，不放回→超几何；N 很大时超几何可用二项近似', '正态分布 X~N(μ,σ²)：μ 定位置，σ 定胖瘦，曲线关于 x=μ 对称', '3σ 原则：μ±σ≈0.6827，μ±2σ≈0.9545，μ±3σ≈0.9973', '应用：质量控制、成绩分布、测量误差等'] }
      ],
      exercises: [
        { type: 'choice', question: '超几何分布适用于下列哪种抽样情形？', options: ['有放回抽样', '不放回抽样', '独立重复试验', '连续型抽样'], answer: '不放回抽样', explanation: '超几何分布描述从含 M 件次品的 N 件产品中不放回抽取 n 件时次品数 X 的分布。有放回抽样各次独立且概率恒定，应归入二项分布；不放回抽样各次不独立、概率变化，才对应超几何分布。审题看清放回与否是解题关键。' },
        { type: 'choice', question: '已知 X ~ N(μ, σ²)，则 P(μ-σ＜X＜μ+σ) 约等于？', options: ['0.6827', '0.9545', '0.9973', '0.5'], answer: '0.6827', explanation: '正态分布服从 3σ 原则：落在区间 (μ-σ, μ+σ) 内的概率约为 0.6827，落在 (μ-2σ, μ+2σ) 内约为 0.9545，落在 (μ-3σ, μ+3σ) 内约为 0.9973。本题考查第一个区间，答案为 0.6827，其余数值对应更宽区间。' },
        { type: 'fill', question: '从 10 件含 3 件次品的产品中不放回抽 2 件，次品数 X 服从 ____ 分布。', answer: '超几何', explanation: '题目是不放回抽取且关心抽到的次品数，符合超几何分布模型：总体 N=10，其中次品 M=3，抽取 n=2，次品数 X 的概率为 C_3^k × C_7^{2-k} / C_10^2。因抽样不放回、各次不独立，不能用二项分布，只能用超几何分布。' },
        { type: 'choice', question: '正态分布密度曲线 f(x) 关于哪条直线对称？', options: ['x = 0', 'x = μ', 'x = σ', 'y 轴'], answer: 'x = μ', explanation: '正态分布 X ~ N(μ,σ²) 的概率密度曲线是关于直线 x=μ 对称的钟形曲线，在 x=μ 处取得最大值。参数 μ 决定曲线的位置（中心），σ 决定曲线的形状（高瘦或矮胖）。只有当 μ=0 时才关于 y 轴对称，一般情况下对称轴是 x=μ。' },
        { type: 'fill', question: '正态分布中，σ 越大，曲线越 ____；σ 越小，曲线越 ____。（两空用逗号隔开）', answer: '矮胖，高瘦', explanation: '参数 σ 是标准差，决定正态分布曲线的形状。σ 越大，数据越分散，曲线越矮胖；σ 越小，数据越集中，曲线越高瘦。参数 μ 只决定曲线的左右位置，不影响胖瘦。理解 μ 与 σ 的几何意义，有助于快速读图与解题。' }
      ]
    }

  );
})();
