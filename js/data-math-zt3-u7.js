/* ============================================================
 * 高中数学 · 数列专题复习 · 第 7 单元（综合收尾）
 * 第1课时：数列的综合应用（数学归纳法、数列与函数、数列与不等式）
 * 第2课时：核心思想方法 + 常见题型与备考策略
 * 数据注入：gzGetVolume('math', 'zt3').points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt3');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 数列的综合应用 ---------------- */
    {
      id: 'zt3-u7-l1',
      name: '数列的综合应用',
      chapter: '数列专题复习 · 八 综合应用',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、数学归纳法——证明与正整数有关命题的利器' },
        { type: 'paragraph', text: '在数列复习中，许多与正整数 n 有关的命题（如求和公式、不等式）难以直接推导，需要专门的证明工具。数学归纳法正是处理这类问题的标准方法，它把对无穷多个 n 的证明，转化为第一步成立、且能一步步推下去两个有限步骤。' },
        { type: 'keypoint', label: '重点·定义', text: '<strong>数学归纳法</strong>：用于证明与正整数 n 有关的命题。核心逻辑类似多米诺骨牌——只要第一张倒下，且任意一张倒下能带倒下一张，则全部倒下。它把无穷命题化为两个有限步骤来论证。' },
        { type: 'list', items: ['① 归纳奠基：验证当 n = n_0（最小正整数）时命题成立', '② 归纳递推：假设 n = k（k≥n_0）时命题成立，推证 n = k+1 时命题也成立', '③ 得出结论：命题对从 n_0 起的所有正整数 n 都成立'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">数学归纳法：多米诺骨牌的递推</text><line x1="40" y1="225" x2="640" y2="225" stroke="#33536e" stroke-width="2"/><g stroke="#2b5b9e" stroke-width="2"><rect x="70" y="120" width="18" height="105" fill="#5a7a2a" transform="rotate(0 79 225)"/><rect x="180" y="120" width="18" height="105" fill="#4a7de0" transform="rotate(10 189 225)"/><rect x="290" y="120" width="18" height="105" fill="#4a7de0" transform="rotate(24 299 225)"/><rect x="400" y="120" width="18" height="105" fill="#e05d44" transform="rotate(40 409 225)"/><rect x="510" y="120" width="18" height="105" fill="#e05d44" transform="rotate(40 519 225)"/></g><text x="79" y="248" font-size="13" fill="#5a7a2a" text-anchor="middle">奠基 n=n_0</text><text x="345" y="248" font-size="13" fill="#33536e" text-anchor="middle">递推：第 k 张倒推第 k+1 张也倒</text><text x="560" y="248" font-size="13" fill="#c0392b" text-anchor="middle">全部倒下</text></svg>', caption: '图1　数学归纳法如多米诺骨牌：奠基使第一张倒下，递推保证逐张传递，从而全部成立。' },
        { type: 'heading', text: '二、数列与函数——数列是定义在正整数集上的特殊函数' },
        { type: 'paragraph', text: '数列 {a_n} 可以看成定义域为正整数集（或其有限子集）的函数：自变量是 n，函数值是 a_n。因此研究函数的方法（单调性、最值、图像）都可以迁移到数列中，这是函数思想在数列中的体现。' },
        { type: 'keypoint', label: '重点·对应关系', text: '<strong>等差数列</strong>：a_n = a_1 + (n−1)d = d·n + (a_1−d)，是关于 n 的<strong>一次函数</strong>型，点列等间隔分布。<br><strong>等比数列</strong>：a_n = a_1·q^{n−1} = (a_1/q)·q^n，是关于 n 的<strong>指数函数</strong>型，点列呈指数增长或衰减。' },
        { type: 'table', headers: ['数列类型', '对应函数模型', '图像特征'], rows: [['等差数列 {a_n}', '一次函数 a_n = d·n + (a_1−d)', '等间隔上升或下降的点列，斜率即公差 d'], ['等比数列 {a_n}', '指数函数 a_n = (a_1/q)·q^n', '指数型点列，公比 q 决定增减与快慢']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">数列：正整数集上的特殊函数</text><line x1="70" y1="60" x2="70" y2="235" stroke="#33536e" stroke-width="2"/><line x1="70" y1="235" x2="650" y2="235" stroke="#33536e" stroke-width="2"/><g fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.5"><circle cx="120" cy="200" r="6"/><circle cx="190" cy="165" r="6"/><circle cx="260" cy="130" r="6"/><circle cx="330" cy="95" r="6"/><circle cx="400" cy="70" r="6"/></g><g font-size="13" fill="#33536e" text-anchor="middle"><text x="120" y="252">1</text><text x="190" y="252">2</text><text x="260" y="252">3</text><text x="330" y="252">4</text><text x="400" y="252">5</text></g><polyline points="120,200 190,165 260,130 330,95 400,70" fill="none" stroke="#e05d44" stroke-width="2" stroke-dasharray="5 4"/><text x="470" y="120" font-size="14" fill="#33536e">a_n 随 n 变化的</text><text x="470" y="142" font-size="14" fill="#33536e">离散点列，本质</text><text x="470" y="164" font-size="14" fill="#33536e">是正整数集上的函数</text><text x="70" y="270" font-size="13" fill="#33536e">横轴 n（正整数），纵轴 a_n</text></svg>', caption: '图2　数列是自变量取正整数的离散函数，点 (n, a_n) 构成特殊点列。' },
        { type: 'heading', text: '三、数列与不等式——放缩与归纳的综合' },
        { type: 'paragraph', text: '数列不等式常见于压轴小题或解答题最后一问。常用方法有两种：一是数学归纳法直接证明；二是放缩法——把难以求和的通项放大或缩小，转化为可求和（如裂项）的结构，从而估计出上界或下界。' },
        { type: 'keypoint', label: '重点·放缩关键', text: '<strong>放缩法</strong>的核心是找桥梁：通过适当放大（或缩小）通项，使放大后的式子能化为可求和形式（如 1/[k(k−1)] = 1/(k−1) − 1/k）。放缩必须适度——过头会导致估计失效，不足则达不到目标。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">放缩：把难求和的项放大为可求和结构</text><text x="60" y="80" font-size="15" fill="#33536e">原式：Σ 1/k² （k = 1..n）</text><line x1="60" y1="100" x2="620" y2="100" stroke="#c0392b" stroke-width="2"/><text x="60" y="130" font-size="15" fill="#33536e">放缩：1/k² &lt; 1/(k(k-1)) = 1/(k-1) − 1/k  （k≥2）</text><line x1="60" y1="150" x2="620" y2="150" stroke="#5a7a2a" stroke-width="2"/><text x="60" y="180" font-size="15" fill="#33536e">可求和：（裂项）结果为 1 − 1/n &lt; 1</text><rect x="60" y="200" width="560" height="40" fill="#cfe0f7" stroke="#4a7de0" stroke-width="1.5"/><text x="340" y="225" font-size="14" fill="#2b5b9e" text-anchor="middle">关键：找到放缩桥梁，使放大后的式子能够裂项求和</text></svg>', caption: '图3　放缩的本质是找一个可求和的上界（或下界）桥梁，再用裂项求和完成估计。' },
        { type: 'example', label: '例题1', text: '已知 n∈N*，用数学归纳法证明：1 + 2 + ... + n = n(n+1)/2。<br><br><strong>证明</strong>：<br>① 奠基：当 n=1 时，左边 = 1，右边 = 1×2/2 = 1，等式成立。<br>② 递推：假设 n=k（k≥1）时等式成立，即 1+2+...+k = k(k+1)/2。则当 n=k+1 时，1+2+...+k+(k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2 = (k+1)[(k+1)+1]/2，等式也成立。<br>③ 结论：由①②知，对一切 n∈N* 等式成立。' },
        { type: 'example', label: '例题2', text: '用数学归纳法证明：1 + 3 + 5 + ... + (2n−1) = n²。<br><br><strong>证明</strong>：① 奠基：n=1 时，左边 = 1，右边 = 1² = 1，成立。<br>② 递推：假设 n=k 时 1+3+...+(2k−1)=k² 成立。则 n=k+1 时，左边 = k² + [2(k+1)−1] = k² + 2k + 1 = (k+1)²，成立。<br>③ 结论：对一切 n∈N* 等式成立。' },
        { type: 'example', label: '例题3', text: '证明：对 n≥2，有 Σ 1/k² 小于 2（k 从 1 到 n）。<br><br><strong>证明（放缩法）</strong>：当 k≥2 时，1/k² 小于 1/[k(k−1)] = 1/(k−1) − 1/k。于是 Σ_{k=2}^n 1/k² 小于 Σ_{k=2}^n [1/(k−1)−1/k] = 1 − 1/n 小于 1。再加上 k=1 时的项 1，得 Σ_{k=1}^n 1/k² 小于 1 + 1 = 2。' },
        { type: 'warn', label: '易错·归纳与放缩', text: '<strong>归纳法易错</strong>：第二步必须用到假设推 n=k+1，否则不是归纳证明；递推起点 n_0 不一定都是 1，要看清题意。<br><strong>放缩易错</strong>：放缩方向要与目标一致（求上界就放大、求下界就缩小），且放缩后必须仍可求和控制。' },
        { type: 'tip', label: '提示·检验习惯', text: '无论用归纳法还是由递推求通项，都<strong>务必检验 n=1</strong>（有时还要检验 n=2）。因为递推式常从 n≥2 开始成立，a_1 可能不满足通项，需单独验证或分段写出。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['数学归纳法三步：奠基、递推（用假设）、结论', '数列是特殊函数：等差对应一次函数、等比对应指数函数', '不等式证明两利器：数学归纳法、放缩法', '放缩要找可求和的桥梁，且方向、适度都要正确', '养成检验 n=1 的习惯，避免递推起点错误'] }
      ],
      exercises: [
        { type: 'choice', question: '数学归纳法的第二步（归纳递推）要完成的是？', options: ['验证 n=1 时命题成立', '假设 n=k 成立，证明 n=k+1 也成立', '直接断言对所有 n 成立', '验证 n=2 时命题成立'], answer: '假设 n=k 成立，证明 n=k+1 也成立', explanation: '归纳递推的任务是：在假设 n=k（k≥n_0）时命题成立的前提下，推导出 n=k+1 时命题也成立。这一步必须真正用到归纳假设，是把结论从 k 推向 k+1 的关键，既不能绕过假设直接断言，也不是验证起始值。' },
        { type: 'choice', question: '等差数列 {a_n} 的各项在坐标系中连成的点列，其整体形状最接近？', options: ['二次函数抛物线', '一次函数直线状点列', '指数函数图象', '反比例曲线'], answer: '一次函数直线状点列', explanation: '由 a_n = d·n + (a_1−d) 可知，等差数列的通项是关于 n 的一次函数形式，因此点 (n, a_n) 在坐标系中等间隔分布，整体呈直线状。它不是连续的直线，而是均匀分布在某条直线上的离散点。' },
        { type: 'choice', question: '等比数列 a_n = (a_1/q)·q^n 说明其图像特征类似于？', options: ['直线', '指数函数点列', '抛物线', '正弦曲线'], answer: '指数函数点列', explanation: '等比数列通项可写成 a_n = (a_1/q)·q^n，这是关于 n 的指数函数形式，因此点列呈指数型增长或衰减。当 q>1 时快速上升，0<q<1 时快速下降并趋近于 0，图像是指数型离散点。' },
        { type: 'fill', question: '用数学归纳法证明时，第一步（归纳奠基）通常验证 n = ____ 时命题成立（本题中最小正整数 n_0 = 1）。', answer: '1', explanation: '归纳奠基要验证命题在最小的起始正整数 n_0 处成立。当命题对从 1 开始的所有正整数成立时，n_0 = 1，故第一步验证 n = 1。若题目明确命题从某个 n_0 起成立，则应验证对应的 n_0 而非一律取 1。' },
        { type: 'fill', question: '数列 {a_n} 可以看作定义在 ____ 集（或其有限子集）上的函数，自变量为 n，函数值为 a_n。', answer: '正整数', explanation: '数列的本质是定义在正整数集 N*（或其有限子集 {1,2,…,n}）上的函数，自变量 n 取正整数，对应的函数值就是项 a_n。因此研究函数的单调、最值、图像的方法都可以迁移到数列中来分析和解决问题。' }
      ]
    },

    /* ---------------- 第2课时 核心思想方法 + 常见题型与备考策略 ---------------- */
    {
      id: 'zt3-u7-l2',
      name: '核心思想方法 + 常见题型与备考策略',
      chapter: '数列专题复习 · 九 核心思想 / 十 题型与备考',
      difficulty: '进阶',
      content: [
        { type: 'heading', text: '一、核心思想方法' },
        { type: 'paragraph', text: '解数列题，比记忆公式更重要的是掌握思想方法。四大核心思想贯穿所有题型，其中转化与化归是总纲——把陌生、复杂的问题化归为等差或等比数列来处理。' },
        { type: 'table', headers: ['思想方法', '核心含义', '典型应用'], rows: [['函数思想', '用函数观点研究数列的单调、最值、图像', '判断增减性、求最大(小)项'], ['转化与化归', '把递推、复杂求和化归为等差等比或基本公式', '构造法求通项、裂项相消求和'], ['分类讨论', '按公比 q=1 与 q≠1 等分情况处理', '等比数列求和必须讨论 q'], ['整体代换', '利用性质整体计算，避免逐项求', '下标和性质、片段和性质']] },
        { type: 'keypoint', label: '重点·函数思想', text: '<strong>函数思想</strong>：把 {a_n} 看作 n 的函数，借助图像与单调性分析。如求最大项，可比较 a_n 与 a_{n+1} 的大小，令 a_n ≥ a_{n+1} 且 a_n ≥ a_{n−1} 解出 n 的范围，再取正整数。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">数列解题的四大核心思想</text><circle cx="340" cy="150" r="46" fill="#7a5aa0" stroke="#5a3a78" stroke-width="2"/><text x="340" y="146" font-size="15" fill="#fff" text-anchor="middle">转化与</text><text x="340" y="166" font-size="15" fill="#fff" text-anchor="middle">化归</text><g font-size="14" fill="#fff" text-anchor="middle"><circle cx="150" cy="90" r="40" fill="#4a7de0"/><text x="150" y="95">函数思想</text><circle cx="150" cy="220" r="40" fill="#5a7a2a"/><text x="150" y="225">分类讨论</text><circle cx="530" cy="90" r="40" fill="#e05d44"/><text x="530" y="95">整体代换</text><circle cx="530" cy="220" r="40" fill="#7a5aa0"/><text x="530" y="225">化归</text></g><g stroke="#33536e" stroke-width="1.5" fill="none"><line x1="190" y1="100" x2="300" y2="135"/><line x1="190" y1="210" x2="300" y2="170"/><line x1="490" y1="100" x2="385" y2="135"/><line x1="490" y1="210" x2="385" y2="170"/></g><text x="340" y="285" font-size="13" fill="#33536e" text-anchor="middle">化归为等差、等比是贯穿始终的核心思路</text></svg>', caption: '图1　四大核心思想以转化与化归为中心，相互支撑，统领数列解题。' },
        { type: 'heading', text: '二、常见题型与命题方向' },
        { type: 'paragraph', text: '高考数列题层次分明：小题（选择、填空）侧重基本概念与性质，解答题（12分）侧重综合能力。明确题型分布，复习才能有的放矢。' },
        { type: 'keypoint', label: '重点·小题考点', text: '<strong>小题常考</strong>：基本量知三求二、等差(比)性质（下标和、片段和）、单调性、周期，以及数学文化题（如《九章算术》、杨辉三角中的数列）。' },
        { type: 'list', items: ['基本量计算：已知 a_1、d(q)、n、a_n、S_n 中三个求其余', '性质运用：下标和 a_m+a_n=a_p+a_q、片段和', '单调与周期：由通项判断增减或周期性', '数学文化：古文、三角阵中的数列识别'] },
        { type: 'table', headers: ['题型', '题量/分值', '常考内容'], rows: [['选择题', '约 5 题', '基本量知三求二、性质、单调性周期'], ['填空题', '约 2 题', '通项与求和、数学文化题'], ['解答题', '12 分', '递推求通项、求和、与不等式综合']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">数列题型分布（小题 + 大题）</text><text x="60" y="70" font-size="14" fill="#33536e">选择题（约 5 题）</text><rect x="60" y="80" width="560" height="26" fill="#cfe0f7" stroke="#4a7de0" stroke-width="1.5"/><rect x="60" y="80" width="420" height="26" fill="#4a7de0"/><text x="500" y="98" font-size="13" fill="#2b5b9e">基本量·性质·单调性</text><text x="60" y="140" font-size="14" fill="#33536e">填空题（约 2 题）</text><rect x="60" y="150" width="560" height="26" fill="#dbeede" stroke="#5a7a2a" stroke-width="1.5"/><rect x="60" y="150" width="230" height="26" fill="#5a7a2a"/><text x="310" y="168" font-size="13" fill="#3a5a1e">通项·求和·文化题</text><text x="60" y="210" font-size="14" fill="#33536e">解答题（12 分）</text><rect x="60" y="220" width="560" height="26" fill="#f6d9d2" stroke="#e05d44" stroke-width="1.5"/><rect x="60" y="220" width="330" height="26" fill="#e05d44"/><text x="410" y="238" font-size="13" fill="#c0392b">递推·求和·不等式综合</text></svg>', caption: '图2　小题重基础与性质，大题重递推、求和及不等式综合，分值集中在解答题。' },
        { type: 'heading', text: '三、备考策略（分阶段）' },
        { type: 'paragraph', text: '数列复习应分阶段推进，从基础到能力再到实战。同时日常要建错题本，并养成检验 n=1 的习惯，把易错点消灭在平日。' },
        { type: 'table', headers: ['阶段', '时间', '重点任务'], rows: [['一轮', '上学期', '全面覆盖基础，落实等差等比通性通法'], ['二轮', '下学期', '突破递推构造、裂项错位，与不等式综合'], ['三轮', '考前', '限时训练，关注数列模型的实际应用']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">备考三阶段任务卡</text><line x1="80" y1="130" x2="620" y2="130" stroke="#33536e" stroke-width="2"/><g font-size="14" fill="#fff" text-anchor="middle"><circle cx="180" cy="130" r="30" fill="#4a7de0"/><text x="180" y="126">一轮</text><text x="180" y="144">基础</text><circle cx="350" cy="130" r="30" fill="#5a7a2a"/><text x="350" y="126">二轮</text><text x="350" y="144">突破</text><circle cx="520" cy="130" r="30" fill="#e05d44"/><text x="520" y="126">三轮</text><text x="520" y="144">冲刺</text></g><g font-size="13" fill="#33536e" text-anchor="middle"><text x="180" y="195">全面覆盖</text><text x="180" y="213">等差等比通性</text><text x="350" y="195">递推构造</text><text x="350" y="213">裂项错位</text><text x="520" y="195">限时训练</text><text x="520" y="213">实际应用</text></g><text x="340" y="245" font-size="13" fill="#33536e" text-anchor="middle">日常：建错题本，养成检验 n=1 的习惯</text></svg>', caption: '图3　备考三阶段层层递进：一轮打基础、二轮破能力、三轮练实战。' },
        { type: 'example', label: '例题·综合题脉络', text: '已知 a_1 = 1，a_{n+1} = 2a_n + 1（n∈N*）。(1) 求通项 a_n；(2) 证明 1/a_1 + 1/a_2 + ... + 1/a_n 小于 2。<br><br><strong>解(1)</strong>：由 a_{n+1}+1 = 2(a_n+1)，知 {a_n+1} 是首项 a_1+1=2、公比 2 的等比数列，故 a_n+1 = 2·2^{n−1} = 2^n，即 a_n = 2^n − 1。<br><strong>解(2)</strong>：因 a_k = 2^k − 1 ≥ 2^{k−1}（k≥1），故 1/a_k ≤ 1/2^{k−1}。求和得 Σ 1/a_k ≤ 1 + 1/2 + ... + 1/2^{n−1} = 2 − 1/2^{n−1} 小于 2。' },
        { type: 'warn', label: '易错清单', text: '<strong>三大易错</strong>：① 等比数列求和<strong>忘讨论 q=1</strong>（直接套 S_n=a_1(1−q^n)/(1−q) 会漏解）；② 由递推求通项<strong>未验证 n=1</strong>，导致首项不符；③ <strong>放缩不当</strong>，方向错误或过度放缩使结论失效。' },
        { type: 'tip', label: '提示·得满分', text: '解答题争取拿满分：求通项先化简递推（构造等比/等差），求和先判断类型（错位相减或裂项相消），与不等式综合优先用放缩或归纳。书写时步骤完整、讨论到位，避免跳步失分。' },
        { type: 'keypoint', label: '核心提醒', text: '<strong>化归为等差(等比)是解题核心思路</strong>。重点突破递推求通项与数列求和两大能力，确保 12 分解答题稳拿满分。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['四大思想：函数思想、转化化归、分类讨论、整体代换', '小题考基础与性质，大题考递推、求和与不等式综合', '备考三阶段：一轮基础、二轮突破、三轮实战', '易错三件事：讨论 q=1、验证 n=1、放缩适度', '核心：化归等差等比，突破递推与求和两大能力'] }
      ],
      exercises: [
        { type: 'choice', question: '使用等比数列前 n 项和公式 S_n = a_1(1−q^n)/(1−q) 时，必须注意？', options: ['公比 q 一定不为 1', '必须分 q=1 与 q≠1 两种情况讨论', 'q 可以任意代入无需讨论', '只在 q>1 时成立'], answer: '必须分 q=1 与 q≠1 两种情况讨论', explanation: '公式 S_n = a_1(1−q^n)/(1−q) 的分母含有 1−q，仅在 q≠1 时成立。当 q=1 时数列为常数列，S_n = n·a_1。因此求和时必须先判断 q 是否等于 1，分两种情况分别处理，否则会漏掉 q=1 这一重要情形。' },
        { type: 'choice', question: '高考数列解答题（约 12 分）最常综合考查的内容是？', options: ['集合的运算', '递推求通项与数列求和', '三角函数图像', '立体几何证明'], answer: '递推求通项与数列求和', explanation: '数列解答题通常分两到三问：第一问由递推关系求通项（构造等差或等比），第二问对所得数列求和（错位相减或裂项相消），第三问常与不等式综合。集合、三角、立几均不属于数列解答题的考查范畴。' },
        { type: 'choice', question: '裂项相消法求和的主要目的是？', options: ['求等差数列通项', '把复杂分式和化为前后相消的结构', '求函数的极大值', '证明数列单调递增'], answer: '把复杂分式和化为前后相消的结构', explanation: '裂项相消法将通项写成两项之差（如 1/[k(k+1)] = 1/k − 1/(k+1)），求和时中间项两两抵消，只剩首尾少数几项，从而快速得到和式。它专门用于处理分母为乘积形式的分式数列求和。' },
        { type: 'fill', question: '已知 a_1 = 1，a_{n+1} = 2a_n + 1，构造数列 {a_n + 1} 可求得通项 a_n = ____。', answer: '2^n - 1', explanation: '由 a_{n+1}+1 = 2(a_n+1) 可知 {a_n+1} 是首项为 2、公比为 2 的等比数列，故 a_n+1 = 2·2^{n−1} = 2^n，从而 a_n = 2^n − 1。这是典型的加常数构造等比来求通项的方法，注意最后要减回所加的常数。' },
        { type: 'fill', question: '已知 a_n = 2^n − 1，则 1/a_1 + 1/a_2 + ... + 1/a_n 与 2 的大小关系是 ____（填“小于 2”或“大于 2”）。', answer: '小于 2', explanation: '因为 a_k = 2^k − 1 ≥ 2^{k−1}（k≥1 时成立），所以 1/a_k ≤ 1/2^{k−1}。求和得 Σ 1/a_k ≤ 1 + 1/2 + ... + 1/2^{n−1} = 2 − 1/2^{n−1} < 2，故该和严格小于 2。这里用到了放缩法，把分母放大以得到可求和的等比数列。' }
      ]
    }

  );
})();
