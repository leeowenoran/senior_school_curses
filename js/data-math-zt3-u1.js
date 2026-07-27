/* ============================================================
 * 高三数学 · 高考复习专题 · 数列专题
 * 第1单元（2 课时）：考试要求与命题趋势 / 数列的概念 / 通项与前n项和的关系
 * 数据注入：math.zt3.points（由 data-gz.js 末尾 GZ_REVIEW.math 自动注册）
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt3');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 考试要求与命题趋势 + 数列的概念 ---------------- */
    {
      id: 'zt3-u1-l1',
      name: '考试要求与命题趋势 · 数列的概念',
      chapter: '数列专题复习 · 一 考试要求与命题趋势 / 二 数列的概念',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、考试要求与命题趋势' },
        { type: 'paragraph', text: '数列是高考数学的重要板块，在新高考卷中通常占 15 至 20 分，多以“一道小题（约 5 分）加一道大题（约 12 分）”的形式考查。小题侧重基本量与性质的直接运用，大题则以递推数列为背景，综合考查通项公式与前 n 项和的求法，是中高档题目中必须拿下的板块。' },
        { type: 'keypoint', label: '重点·课标要求', text: '课标要求：理解数列的概念及其表示（列表法、图像法、通项公式）；理解等差数列与等比数列的概念、通项公式与前 n 项和公式；能在具体问题中识别等差或等比关系；了解数学归纳法的原理。' },
        { type: 'paragraph', text: '命题趋势方面，小题侧重于等差、等比的基本量与性质（如通项、公比、中项、求和），大题则越来越强调“由递推关系求通项、再求和、并与不等式交汇”的综合能力。新高考整体淡化特殊技巧，强调通性通法，复习时应把基础打牢、把步骤写规范。' },
        { type: 'list', items: ['小题：考基本量与性质，注重熟练与准确', '大题：递推求通项加求和，并与不等式交汇', '新高考趋势：淡化技巧，强调通性通法', '复习策略：夯实基础，规范书写，重视 n=1 验证'] },
        { type: 'heading', text: '二、数列的概念与表示' },
        { type: 'paragraph', text: '数列可以看成定义域为正整数集（或它的有限子集）的函数，当自变量从小到大依次取值时，对应的一列函数值就是数列。研究数列，关键是把握它的“项”与“项数”的对应关系。' },
        { type: 'keypoint', label: '重点·概念', text: '数列定义：按一定顺序排列的一列数叫做数列，记作 {a_n}。<br>通项公式：如果第 n 项 a_n 与项数 n 之间的对应关系可以用一个式子表示，这个式子就叫通项公式。<br>递推公式：如果已知数列的首项（或前几项），且任一项与它的前一项（或前几项）的关系可以用一个式子表示，这个式子就叫递推公式。' },
        { type: 'paragraph', text: '与函数类比：数列 {a_n} 相当于函数 y = f(n)，其中自变量 n 取 1, 2, 3, …。因此数列的图像不是连续曲线，而是横坐标为正整数的一列离散的点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">数列是定义域为正整数集的函数（以 a_n = n 为例）</text><line x1="80" y1="230" x2="630" y2="230" stroke="#4a7de0" stroke-width="2"/><line x1="80" y1="60" x2="80" y2="230" stroke="#4a7de0" stroke-width="2"/><g font-size="14" fill="#33536e" text-anchor="middle"><text x="120" y="252">n=1</text><text x="200" y="252">n=2</text><text x="280" y="252">n=3</text><text x="360" y="252">n=4</text><text x="440" y="252">n=5</text></g><g fill="#2b5b9e" stroke="#2b5b9e" stroke-width="2"><circle cx="120" cy="210" r="6"/><circle cx="200" cy="190" r="6"/><circle cx="280" cy="170" r="6"/><circle cx="360" cy="150" r="6"/><circle cx="440" cy="130" r="6"/></g><polyline points="120,210 200,190 280,170 360,150 440,130" fill="none" stroke="#e05d44" stroke-width="2" stroke-dasharray="5 4"/><text x="500" y="84" font-size="14" fill="#33536e">横轴：项数 n</text><text x="500" y="108" font-size="14" fill="#33536e">纵轴：项 a_n</text><text x="500" y="132" font-size="14" fill="#c0392b">离散点列，非连续曲线</text></svg>', caption: '图1　数列可看作正整数集上的函数，其图像是一列离散的点，而非连续曲线。' },
        { type: 'heading', text: '三、数列的分类' },
        { type: 'keypoint', label: '重点·分类', text: '按项数分：项数有限的叫有穷数列，项数无限的叫无穷数列。<br>按单调性分（比较相邻两项）：a_{n+1} 大于 a_n 为递增数列，a_{n+1} 小于 a_n 为递减数列，a_{n+1} 等于 a_n 为常数列；项的大小交替变化的叫摆动数列。' },
        { type: 'list', items: ['递增数列：每一项都比前一项大，如 {1,3,5,7,...}', '递减数列：每一项都比前一项小，如 {9,7,5,3,...}', '常数列：各项都相等，如 {2,2,2,2,...}', '摆动数列：项的大小交替变化，如 {(-1)^n}'] },
        { type: 'warn', label: '易错', text: '判断单调性必须“对一切 n”恒成立。例如数列 {1,3,2,4,...} 既不满足每一项都大于前一项，也不满足每一项都小于前一项，它既不是递增也不是递减数列，不能仅凭前几项就下结论。' },
        { type: 'table', headers: ['分类依据', '类型', '定义或特征'], rows: [['按项数', '有穷数列', '项数有限，如 {1, 2, 3}'], ['按项数', '无穷数列', '项数无限，如 {1, 2, 3, ...}'], ['按单调性', '递增数列', 'a_{n+1} 大于 a_n 恒成立'], ['按单调性', '递减数列', 'a_{n+1} 小于 a_n 恒成立'], ['按单调性', '常数列', 'a_{n+1} 等于 a_n，各项相等'], ['按单调性', '摆动数列', '项的大小交替变化，如 (-1)^n']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">四类点列对照：递增 / 递减 / 常数列 / 摆动</text><g font-size="13" fill="#33536e"><text x="60" y="62" fill="#2b5b9e" font-weight="bold">递增 a_{n+1} &gt; a_n</text><g fill="#4a7de0"><circle cx="80" cy="102" r="5"/><circle cx="140" cy="88" r="5"/><circle cx="200" cy="74" r="5"/><circle cx="260" cy="60" r="5"/></g><text x="380" y="62" fill="#2b5b9e" font-weight="bold">递减 a_{n+1} &lt; a_n</text><g fill="#e05d44"><circle cx="380" cy="60" r="5"/><circle cx="440" cy="76" r="5"/><circle cx="500" cy="92" r="5"/><circle cx="560" cy="108" r="5"/></g><text x="60" y="172" fill="#2b5b9e" font-weight="bold">常数列 a_{n+1} = a_n</text><g fill="#5a7a2a"><circle cx="80" cy="212" r="5"/><circle cx="140" cy="212" r="5"/><circle cx="200" cy="212" r="5"/><circle cx="260" cy="212" r="5"/></g><text x="380" y="172" fill="#2b5b9e" font-weight="bold">摆动数列</text><g fill="#7a5aa0"><circle cx="380" cy="212" r="5"/><circle cx="440" cy="182" r="5"/><circle cx="500" cy="212" r="5"/><circle cx="560" cy="182" r="5"/></g></g><text x="340" y="288" font-size="13" fill="#33536e" text-anchor="middle">按单调性分：递增、递减、常数列、摆动四类</text></svg>', caption: '图2　四类点列对照：递增整体上升、递减整体下降、常数列水平、摆动上下交替。' },
        { type: 'heading', text: '四、数列的三种表示' },
        { type: 'paragraph', text: '同一个数列可以有多种表示方式，常用的有三种：列表法、图像法和通项公式法。它们各有优势，列表法直观、图像法形象、通项公式便于计算与推导。' },
        { type: 'list', items: ['列表法：列出 n 与 a_n 的对应值，适合项数较少的数列', '图像法：在坐标系中描出 (n, a_n) 点列，便于观察趋势', '通项公式法：用 a_n = f(n) 表达，便于求任意一项与求和'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">数列的三种表示：列表 / 图像 / 通项公式</text><g font-size="14" fill="#33536e"><text x="40" y="70" font-weight="bold" fill="#2b5b9e">列表法</text><rect x="40" y="84" width="180" height="110" fill="#cfe0f7" stroke="#4a7de0" stroke-width="1.5"/><text x="60" y="114">n : 1  2  3  4</text><text x="60" y="142">a_n: 2  4  6  8</text><text x="60" y="170">逐项列出</text><text x="250" y="70" font-weight="bold" fill="#2b5b9e">图像法</text><rect x="250" y="84" width="180" height="110" fill="#fff" stroke="#4a7de0" stroke-width="1.5"/><g fill="#e05d44"><circle cx="280" cy="170" r="5"/><circle cx="320" cy="150" r="5"/><circle cx="360" cy="130" r="5"/><circle cx="400" cy="110" r="5"/></g><text x="460" y="70" font-weight="bold" fill="#2b5b9e">通项公式</text><rect x="460" y="84" width="180" height="110" fill="#dbe9fb" stroke="#4a7de0" stroke-width="1.5"/><text x="480" y="134" font-family="serif" font-size="18" fill="#2b5b9e">a_n = 2n</text><text x="480" y="166">用 n 表示 a_n</text></g></svg>', caption: '图3　同一数列的三种表示：列表逐项列出、图像描点、通项用公式表达。' },
        { type: 'tip', label: '提示', text: '由数列的前几项写通项公式时，答案往往不唯一。例如数列 {1, 3, 5, 7, ...} 的一个通项公式可写为 a_n = 2n - 1，但也可以构造出无数个满足前四项的公式，考试通常要求写出“最简单、最自然”的一个。' },
        { type: 'example', label: '例题1', text: '判断数列 {1, 3, 5, 7, 9} 的单调性，并写出它的一个通项公式；再由递推 a_1 = 1，a_{n+1} = a_n + 2 写出前 5 项；最后说明数列 {(-1)^n} 的图像特征。<br><br><strong>解</strong>：（1）因为每一项都比前一项大 2，所以该数列是递增数列；观察可得 a_n = 2n - 1（n = 1, 2, 3, 4, 5）。<br>（2）由 a_1 = 1，a_{n+1} = a_n + 2，依次得 a_2 = 3，a_3 = 5，a_4 = 7，a_5 = 9，前 5 项为 1, 3, 5, 7, 9。<br>（3）{(-1)^n} 的各位为 -1, 1, -1, 1, …，在坐标系中描出的是纵坐标为正负交替的四个点，属于摆动数列。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['数列记 {a_n}，可看作正整数集上的离散函数', '通项公式给出 a_n 与 n 的关系，递推公式给出相邻项关系', '数列按项数分有穷与无穷，按单调性分递增、递减、常数列、摆动', '三种表示：列表法、图像法、通项公式法', '由前几项写通项不唯一，写出最简一个即可', '判断单调性要对所有 n 恒成立，不能只看前几项'] }
      ],
      exercises: [
        { type: 'choice', question: '在新高考数学卷中，数列板块通常的考查形式是？', options: ['只考一道 17 分的大题', '以一道小题（约5分）加一道大题（约12分）为主', '仅以选择题形式出现，不考解答题', '不单独设题，融入函数综合考查'], answer: '以一道小题（约5分）加一道大题（约12分）为主', explanation: '数列在新高考中通常占 15 至 20 分，典型考查形式是“一道小题加一道大题”：小题约 5 分，考查基本量与性质；大题约 12 分，以递推数列为背景综合考查通项与求和。其余三项与高考实际命题形式不符。' },
        { type: 'choice', question: '下列数列中，属于递增数列的是？', options: ['{9, 7, 5, 3, 1}', '{1, 3, 5, 7, 9}', '{1, 1, 1, 1}', '{1, -1, 1, -1}'], answer: '{1, 3, 5, 7, 9}', explanation: '递增数列要求从第二项起每一项都大于前一项。{1,3,5,7,9} 中 3大于1、5大于3、7大于5、9大于7，满足递增；{9,7,5,...} 递减；{1,1,1,...} 是常数列；{1,-1,1,-1} 是摆动数列。' },
        { type: 'choice', question: '数列 {(-1)^n}（即 -1, 1, -1, 1, ...）按单调性分类属于？', options: ['递增数列', '递减数列', '常数列', '摆动数列'], answer: '摆动数列', explanation: '{(-1)^n} 的各位依次为 -1, 1, -1, 1, ...，项的大小交替变化，既不单调递增也不单调递减，也不是各项相等的常数列，因此属于摆动数列。' },
        { type: 'fill', question: '数列 {2, 4, 6, 8, ...} 的一个通项公式可写为 a_n = ____（n∈N*）。', answer: '2n', explanation: '观察数列：第1项2 = 2×1，第2项4 = 2×2，第3项6 = 2×3，第4项8 = 2×4，故第 n 项 a_n = 2n。填 2n 即可，由前几项写通项答案不唯一，写出最简一个。' },
        { type: 'fill', question: '已知数列满足 a_1 = 1，a_{n+1} = a_n + 2，则 a_3 = ____。', answer: '5', explanation: '由递推式 a_{n+1} = a_n + 2 且 a_1 = 1，依次计算：a_2 = a_1 + 2 = 3，a_3 = a_2 + 2 = 5。故 a_3 = 5。这类递推表示后一项比前一项大 2，是等差数列的雏形。' }
      ]
    },

    /* ---------------- 第2课时 通项与前n项和的关系（a_n 与 S_n 互化） ---------------- */
    {
      id: 'zt3-u1-l2',
      name: '通项与前n项和的关系（a_n 与 S_n 互化）',
      chapter: '数列专题复习 · 二 通项与前n项和的关系',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、核心关系：a_n 与 S_n' },
        { type: 'keypoint', label: '重点·核心关系', text: '前 n 项和 S_n = a_1 + a_2 + ... + a_n。<br>核心关系：当 n = 1 时，a_1 = S_1；当 n ≥ 2 时，a_n = S_n - S_{n-1}。<br>直观理解：S_n 是前 n 项累计，S_{n-1} 是前 n-1 项累计，二者之差正好是第 n 项 a_n。' },
        { type: 'paragraph', text: '这一组关系是数列中“通项”与“求和”互相转化的桥梁。已知通项求和用累加，已知和求通项则用相减，二者方向相反，配合使用可以解决大量高考题。' },
        { type: 'warn', label: '易错·高频失分点', text: '公式 a_n = S_n - S_{n-1} 只在 n ≥ 2 时成立，n = 1 时 S_0 没有意义，绝对不能直接套用。求 a_1 必须单独用 a_1 = S_1；求出 n ≥ 2 的表达式后，还要把 n = 1 代回检验，若不满足则需分段书写。' },
        { type: 'heading', text: '二、已知 S_n 求 a_n 的步骤' },
        { type: 'list', items: ['第一步：令 n = 1，由 a_1 = S_1 求出首项', '第二步：当 n ≥ 2 时，计算 a_n = S_n - S_{n-1} 并化简', '第三步：把 n = 1 代入第二步的结果，看是否等于 a_1', '第四步：若吻合则统一写 a_n，若不吻合则分段写'] },
        { type: 'paragraph', text: '第三步的“检验”是整个过程的灵魂。许多同学算出 n ≥ 2 的表达式后直接当作通项，忽略了 n = 1 可能不吻合，从而丢掉分段这一步，导致整题失分。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">前 n 项和 S_n 与第 n 项 a_n 的关系</text><line x1="80" y1="240" x2="630" y2="240" stroke="#4a7de0" stroke-width="2"/><g font-size="13" fill="#33536e" text-anchor="middle"><text x="140" y="262">n=1</text><text x="240" y="262">n=2</text><text x="340" y="262">n=3</text><text x="440" y="262">n=4</text><text x="540" y="262">n=5</text></g><g fill="none" stroke="#2b5b9e" stroke-width="2.5"><polyline points="80,240 140,200 240,150 340,90 440,40"/></g><g fill="#2b5b9e"><circle cx="140" cy="200" r="5"/><circle cx="240" cy="150" r="5"/><circle cx="340" cy="90" r="5"/><circle cx="440" cy="40" r="5"/></g><text x="470" y="70" font-size="13" fill="#2b5b9e">S_n：到 n 为止的累计高度</text><g fill="#e05d44" stroke="#c0392b" stroke-width="1"><rect x="140" y="200" width="100" height="40"/><rect x="240" y="150" width="100" height="50"/><rect x="340" y="90" width="100" height="60"/></g><text x="470" y="190" font-size="13" fill="#c0392b">a_n：第 n 段的增量（高度差）</text><text x="340" y="288" font-size="13" fill="#33536e" text-anchor="middle">S_n = a_1 + a_2 + ... + a_n，故 a_n = S_n - S_{n-1}</text></svg>', caption: '图1　S_n 是累计高度，a_n 是第 n 段的增量；二者之差即第 n 项。' },
        { type: 'example', label: '例题1', text: '已知数列 {a_n} 的前 n 项和 S_n = n² + 1，求通项公式 a_n。<br><br><strong>解</strong>：当 n = 1 时，a_1 = S_1 = 1² + 1 = 2。<br>当 n ≥ 2 时，a_n = S_n - S_{n-1} = (n² + 1) - [(n-1)² + 1] = n² + 1 - (n² - 2n + 2) = 2n - 1。<br>检验：把 n = 1 代入 2n - 1 得 1，不等于 a_1 = 2，故 n = 1 不满足 n ≥ 2 的表达式。<br>因此通项需分段：a_1 = 2；当 n ≥ 2 时 a_n = 2n - 1。' },
        { type: 'tip', label: '提示', text: '检验 n = 1 时，只需把 n = 1 代入“n ≥ 2 的 a_n 表达式”，看结果是否等于 S_1。若相等，则可合并为统一式；若不等，必须写成分段形式，并且分段时 n = 1 这一支单独列出。' },
        { type: 'heading', text: '三、规范流程与分段判断' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">已知 S_n 求 a_n 的标准流程</text><g font-size="14" fill="#fff" text-anchor="middle"><rect x="240" y="54" width="200" height="38" rx="8" fill="#2b5b9e"/><text x="340" y="78">① 令 n=1，求 a_1 = S_1</text><rect x="240" y="118" width="200" height="38" rx="8" fill="#4a7de0"/><text x="340" y="142">② n≥2 时 a_n = S_n - S_{n-1}</text><rect x="240" y="182" width="200" height="38" rx="8" fill="#5a7a2a"/><text x="340" y="206">③ 检验 n=1 是否吻合</text></g><g stroke="#33536e" stroke-width="2" fill="#33536e"><line x1="340" y1="92" x2="340" y2="116"/><polygon points="340,120 334,110 346,110"/><line x1="340" y1="156" x2="340" y2="180"/><polygon points="340,184 334,174 346,174"/></g><g font-size="13" fill="#fff" text-anchor="middle"><rect x="60" y="250" width="220" height="40" rx="8" fill="#4a7de0"/><text x="170" y="275">吻合：统一写 a_n 表达式</text><rect x="400" y="250" width="220" height="40" rx="8" fill="#c0392b"/><text x="510" y="275">不吻合：分段书写</text></g><g stroke="#33536e" stroke-width="2" fill="#33536e"><line x1="280" y1="220" x2="170" y2="248"/><polygon points="170,252 164,242 176,242"/><line x1="400" y1="220" x2="510" y2="248"/><polygon points="510,252 504,242 516,242"/></g></svg>', caption: '图2　已知 S_n 求 a_n 的标准流程：先求 a_1，再求 n≥2 式，最后检验 n=1 决定统一或分段。' },
        { type: 'example', label: '例题2', text: '已知 S_n = 2n² - n，求 a_n。<br><br><strong>解</strong>：n = 1 时，a_1 = S_1 = 2 - 1 = 1。<br>n ≥ 2 时，a_n = S_n - S_{n-1} = (2n² - n) - [2(n-1)² - (n-1)]。<br>计算 S_{n-1} = 2(n² - 2n + 1) - n + 1 = 2n² - 5n + 3。<br>故 a_n = 2n² - n - (2n² - 5n + 3) = 4n - 3。<br>检验：n = 1 代入 4n - 3 得 1，恰等于 a_1 = 1，吻合。<br>所以 a_n = 4n - 3（n ∈ N*），无需分段。' },
        { type: 'table', headers: ['步骤', '做法', '说明'], rows: [['1', '求 a_1 = S_1', 'n=1 时直接用 S_1'], ['2', 'n≥2 时 a_n = S_n - S_{n-1}', '两式相减得第 n 项'], ['3', '检验 n=1 是否吻合', '代入 n≥2 式看是否等于 a_1'], ['4', '决定分段与否', '吻合则统一，不吻合则分段']] },
        { type: 'paragraph', text: '从例题2可见，当 n = 1 代入 n ≥ 2 的表达式恰好等于 a_1 时，两段可统一成一个式子；例题1则因不吻合而必须分段。判断分段与否完全取决于检验结果，不可想当然。' },
        { type: 'warn', label: '易错', text: '不要误以为“a_n = S_n - S_{n-1} 对所有 n 都成立”。S_0 没有定义，所以 n = 1 必须用 a_1 = S_1；也切勿在算出 n ≥ 2 表达式后忘记检验 n = 1，否则分段数列会被写成错误统一式而整题失分。' },
        { type: 'heading', text: '四、已知项与和的关系求通项' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">分段数列的图像（n=1 单独成点）</text><line x1="80" y1="230" x2="620" y2="230" stroke="#4a7de0" stroke-width="2"/><line x1="80" y1="50" x2="80" y2="230" stroke="#4a7de0" stroke-width="2"/><polyline points="160,210 260,190 360,170 460,150" fill="none" stroke="#e05d44" stroke-width="2" stroke-dasharray="6 4"/><g fill="#2b5b9e" stroke="#2b5b9e" stroke-width="2"><circle cx="160" cy="210" r="6"/><circle cx="260" cy="190" r="6"/><circle cx="360" cy="170" r="6"/><circle cx="460" cy="150" r="6"/></g><circle cx="120" cy="200" r="8" fill="#c0392b" stroke="#c0392b" stroke-width="2"/><text x="120" y="190" font-size="13" fill="#c0392b" text-anchor="middle">a_1</text><g font-size="12" fill="#33536e" text-anchor="middle"><text x="120" y="250">n=1</text><text x="160" y="250">n=2</text><text x="260" y="250">n=3</text><text x="360" y="250">n=4</text><text x="460" y="250">n=5</text></g><text x="510" y="92" font-size="13" fill="#33536e">红点 n=1 不满足</text><text x="510" y="114" font-size="13" fill="#33536e">n≥2 的线，须分段</text></svg>', caption: '图3　分段数列：n=1 的点（红）偏离 n≥2 的连线，必须单独列出、分段书写。' },
        { type: 'example', label: '例题3', text: '已知数列 {a_n} 满足 S_n = 2a_n - 1，求 a_n。<br><br><strong>解</strong>：n = 1 时，S_1 = a_1 = 2a_1 - 1，解得 a_1 = 1。<br>当 n ≥ 2 时，由 a_n = S_n - S_{n-1} = (2a_n - 1) - (2a_{n-1} - 1) = 2a_n - 2a_{n-1}，<br>移项得 a_n = 2a_{n-1}。<br>故从第二项起 {a_n} 是首项为 1、公比为 2 的等比数列，a_n = 2 的 n-1 次方。<br>检验：n = 1 时 2 的 0 次方 = 1 = a_1，吻合，故 a_n = 2 的 n-1 次方（n ∈ N*）。' },
        { type: 'list', items: ['已知 S_n 求 a_n：先 a_1 = S_1，再 n≥2 时 a_n = S_n - S_{n-1}', '算完必检验 n = 1 是否吻合，决定统一或分段', '已知 a_n 与 S_n 的混合关系：用 a_n = S_n - S_{n-1} 消元转化', '出现 a_n = q·a_{n-1} 时，考虑等比数列求通项'] },
        { type: 'tip', label: '提示', text: '当题中给出 a_n 与 S_n 的等式而非直接给出 S_n 时，标准做法是对 n ≥ 2 写出 a_n = S_n - S_{n-1}，代入已知等式消去 S_n，得到 a_n 与 a_{n-1} 的递推，再求通项。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['核心：n = 1 时 a_1 = S_1；n ≥ 2 时 a_n = S_n - S_{n-1}', 'n = 1 时 S_0 无意义，a_n = S_n - S_{n-1} 不可用于 n = 1', '求完必须代 n = 1 检验，吻合则统一、不吻合则分段', '分段数列务必把 n = 1 单独列出', '含 a_n 与 S_n 混合关系时，用相减消元化为递推'] }
      ],
      exercises: [
        { type: 'choice', question: '对任意数列，当 n ≥ 2 时，第 n 项 a_n 与前 n 项和 S_n 的关系是？', options: ['a_n = S_n + S_{n-1}', 'a_n = S_n - S_{n-1}', 'a_n = S_n · S_{n-1}', 'a_n = S_n / S_{n-1}'], answer: 'a_n = S_n - S_{n-1}', explanation: 'S_n 表示前 n 项之和，S_{n-1} 表示前 n-1 项之和，两者相减正好得到第 n 项，即 a_n = S_n - S_{n-1}（n ≥ 2）。加、乘、除三种运算均不符合“和的差等于第 n 项”这一事实。' },
        { type: 'choice', question: '对任意数列，首项 a_1 与前 1 项和 S_1 的关系是？', options: ['a_1 = S_2', 'a_1 与 S_1 无关', 'a_1 = S_1 - S_0', 'a_1 = S_1'], answer: 'a_1 = S_1', explanation: '前 1 项和 S_1 就是第一项本身，故 a_1 = S_1 恒成立。S_2 是前两项和，不等于 a_1；而 S_0 没有定义，不能用 S_1 - S_0 表示 a_1；a_1 显然由 S_1 直接给出。' },
        { type: 'choice', question: '已知 S_n = n² + 1，则 a_1 的值为？', options: ['1', '2', '3', '4'], answer: '2', explanation: '由 a_1 = S_1，代入 S_n = n² + 1 得 a_1 = S_1 = 1² + 1 = 2。此处不能套用 n ≥ 2 的公式 a_n = 2n - 1（代入 n=1 得 1，不等于 2），故 a_1 必须单独计算为 2。' },
        { type: 'fill', question: '已知 S_n = 2n² - n，则当 n ≥ 2 时，a_n = S_n - S_{n-1} = ____（化为最简）。', answer: '4n-3', explanation: 'S_n = 2n² - n，S_{n-1} = 2(n-1)² - (n-1) = 2n² - 5n + 3。相减得 a_n = (2n² - n) - (2n² - 5n + 3) = 4n - 3。代 n=1 得 1，与 a_1 = S_1 = 1 吻合，故可统一写为 a_n = 4n - 3。' },
        { type: 'fill', question: '已知 S_n = n² + 1，由 a_n = S_n - S_{n-1} 得 n ≥ 2 时 a_n = 2n - 1，而 a_1 = S_1 = 2，因 n=1 不吻合，故 a_1 应单独写为 ____，整体需分段。', answer: '2', explanation: 'a_1 = S_1 = 1² + 1 = 2，而 n ≥ 2 的表达式 2n - 1 在 n=1 时给出 1，与 a_1 不符，因此通项必须分段：n=1 时 a_1 = 2，n ≥ 2 时 a_n = 2n - 1。填空处即为 a_1 的取值 2。' }
      ]
    }

  );
})();
