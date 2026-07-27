/* ============================================================
 * 高三数学 · 数列专题复习 · 第 6 单元（2 课时）
 * 第1课时：错位相减法
 * 第2课时：数列的性质（单调性、最值、周期性）
 * 数据注入：math.zt3.points（由 data-gz.js 末尾 GZ_REVIEW.math 遍历注册）
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt3');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 错位相减法 ---------------- */
    {
      id: 'zt3-u6-l1',
      name: '错位相减法',
      chapter: '数列专题复习 · 六 求和（错位相减）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、什么情形使用错位相减法' },
        { type: 'paragraph', text: '在高考数列求和题中，若通项是「一个等差数列与一个等比数列对应项相乘」的形式，即 c_n = a_n · b_n，其中 {a_n} 为等差数列、{b_n} 为等比数列，常规求和公式无法直接套用，此时应当使用错位相减法。' },
        { type: 'keypoint', label: '适用模型', text: '<strong>c_n = a_n · b_n</strong>，{a_n} 是等差数列（公差 d），{b_n} 是等比数列（公比 q）。典型例子：Σ k·2^k、Σ (2k−1)·3^k、1 + 2x + 3x² + ... + n·x^{n−1}。' },
        { type: 'paragraph', text: '错位相减的核心思想是：把原和 S_n 乘以等比数列的公比 q，得到 q·S_n，再将两式右对齐相减。相减后，除首尾少数项外，中间各项恰好构成一个等比数列，从而可用等比数列求和公式求出 S_n。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">错位相减：两式右对齐后相减（错一位）</text><g font-size="17" fill="#33536e" font-family="monospace"><text x="30" y="90">S_n  =  a_1·b_1 + a_2·b_2 + a_3·b_3 + ... + a_n·b_n</text><text x="30" y="130" fill="#c0392b">qS_n =           a_1·b_2 + a_2·b_3 + ... + a_{n-1}·b_n</text></g><line x1="30" y1="148" x2="650" y2="148" stroke="#2b5b9e" stroke-width="2"/><text x="30" y="185" font-size="17" fill="#2b5b9e" font-family="monospace">(1-q)S_n = a_1·b_1 + (a_2-a_1)b_2 + ... + (a_n-a_{n-1})b_n - a_n·b_{n+1}</text><g font-size="15" fill="#33536e"><text x="30" y="225">① 相减后，从第 2 项起相邻两项的差 (a_k - a_{k-1}) 是常数（等差特性）。</text><text x="30" y="252">② 括号内 (a_k-a_{k-1})·b_k 公比为 q，化为等比数列求和。</text><text x="30" y="279" fill="#c0392b">关键：减式比被减式整体右移一位（错一位），使同次幂 b_k 对齐。</text></g></svg>', caption: '图1　错位相减示意：q·S_n 整体右移一位（错一位）再与被减式相减。' },
        { type: 'heading', text: '二、核心操作步骤' },
        { type: 'list', items: ['写出 S_n 的展开式：S_n = a_1·b_1 + a_2·b_2 + ... + a_n·b_n', '等式两边同乘公比 q，得到 q·S_n = a_1·b_2 + a_2·b_3 + ... + a_n·b_{n+1}', '将两式右对齐相减，注意 q·S_n 比 S_n 整体错后一位', '相减后，从第 2 项起相邻两项之差为常数（等差特性），括号内化为等比数列求和', '代入等比数列求和公式，解关于 S_n 的一次方程并化简'] },
        { type: 'paragraph', text: '逐步操作的关键在于「对齐」：必须让同一次幂的 b_k 上下对齐，因此 q·S_n 的每一项都要相对 S_n 右移一格。减完之后，中间项合并为 (a_k − a_{k−1})·b_k = d·b_k，这是一个首项为 d·b_2、公比为 q 的等比数列。' },
        { type: 'keypoint', label: '关键一步', text: '相减得到 <strong>(1−q)·S_n = a_1·b_1 − a_n·b_{n+1} + d·(b_2 + b_3 + ... + b_n)</strong>，其中 d·(b_2 + ... + b_n) 是首项 d·b_2、公比 q 的等比数列，可直接求和。' },
        { type: 'example', label: '例题1', text: '求数列前 n 项和：T_n = Σ_{k=1}^{n} k·2^k = 1·2 + 2·2² + 3·2³ + ... + n·2^n。<br><br><strong>解</strong>：这里 a_k = k（等差，d = 1），b_k = 2^k（等比，q = 2）。<br>① 写出和式：T_n = 1·2 + 2·2² + 3·2³ + ... + n·2^n。<br>② 乘公比 2：2T_n = 1·2² + 2·2³ + ... + (n−1)·2^n + n·2^{n+1}。<br>③ 两式相减（错一位）：T_n − 2T_n = 2 + 2² + 2³ + ... + 2^n − n·2^{n+1}。<br>④ 中间为等比数列求和：2 + 2² + ... + 2^n = 2(2^n − 1)/(2 − 1) = 2^{n+1} − 2。<br>⑤ 代入：−T_n = (2^{n+1} − 2) − n·2^{n+1} = (1 − n)·2^{n+1} − 2，故 T_n = (n − 1)·2^{n+1} + 2。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">结构：等差数列 × 等比数列</text><g font-size="16" fill="#33536e"><text x="40" y="90" fill="#2b5b9e" font-weight="bold">{a_n} 等差</text><text x="40" y="115">a_1, a_1+d, a_1+2d, ... , a_1+(n-1)d</text><text x="40" y="160" fill="#7a5aa0" font-weight="bold">{b_n} 等比</text><text x="40" y="185">b_1, b_1·q, b_1·q^2, ... , b_1·q^{n-1}</text></g><text x="40" y="230" font-size="16" fill="#c0392b">c_n = a_n · b_n = (a_1+(n-1)d) · b_1·q^{n-1}  →  错位相减法求和</text><text x="40" y="252" font-size="14" fill="#33536e">特例：Σ k·2^k 中 a_k = k（等差），b_k = 2^k（等比，q = 2）。</text></svg>', caption: '图2　等差 × 等比 结构示意，乘积项用错位相减法求和。' },
        { type: 'heading', text: '三、含参数与特殊情形' },
        { type: 'example', label: '例题2', text: '求和：S_n = 1 + 2x + 3x² + ... + n·x^{n−1}（x ≠ 1）。<br><br><strong>解</strong>：通项为 k·x^{k−1}，a_k = k，b_k = x^{k−1}（公比 q = x）。<br>① S_n = 1 + 2x + 3x² + ... + n·x^{n−1}。<br>② 乘 x：x·S_n = x + 2x² + ... + (n−1)·x^{n−1} + n·x^n。<br>③ 相减：(1 − x)S_n = 1 + x + x² + ... + x^{n−1} − n·x^n。<br>④ 等比求和：1 + x + ... + x^{n−1} = (1 − x^n)/(1 − x)。<br>⑤ 故 S_n = (1 − x^n)/(1 − x)² − n·x^n/(1 − x)（x ≠ 1）。' },
        { type: 'warn', label: '易错', text: '使用错位相减时务必先判断 <strong>q = 1</strong> 的情形：若公比 q = 1，则 {b_n} 是常数列，相减后 (1−q)S_n = 0，不能再两边同除以 (1−q)。此时应直接求和。上题中已限定 x ≠ 1，故可直接除以 (1 − x)。' },
        { type: 'example', label: '例题3', text: '设等差数列 {a_n} 中 a_n = 2n − 1，等比数列 {b_n} 中 b_n = 2^{n−1}，求 c_n = a_n·b_n 的前 n 项和 S_n。<br><br><strong>解</strong>：S_n = 1·1 + 3·2 + 5·4 + ... + (2n−1)·2^{n−1}。<br>乘 2：2S_n = 1·2 + 3·4 + ... + (2n−3)·2^{n−1} + (2n−1)·2^n。<br>相减：−S_n = 1 + 2·2 + 2·4 + ... + 2·2^{n−1} − (2n−1)·2^n。<br>中间等比：2 + 4 + ... + 2^{n−1} = 2(2^{n−1} − 1)/(2 − 1) = 2^n − 2。<br>故 −S_n = 1 + 2(2^n − 2) − (2n−1)·2^n = (3 − 2n)·2^n − 3，得 S_n = (2n − 3)·2^n + 3。' },
        { type: 'heading', text: '四、方法归纳与对比' },
        { type: 'list', items: ['识别模型：通项是等差 × 等比，优先想到错位相减', '严格对齐：q·S_n 相对 S_n 错后一位，保证同次幂对齐', '处理 q = 1：先讨论公比是否为 1，等于 1 时直接求和', '化简技巧：相减后中间是等比数列，套公式后解一次方程得 S_n'] },
        { type: 'table', headers: ['求和类型', '适用方法', '关键特征'], rows: [['等差数列 {a_n}', 'S_n = n(a_1+a_n)/2', '公差 d 恒定'], ['等比数列 {b_n}', 'S_n = b_1(1−q^n)/(1−q)', '公比 q 恒定'], ['{a_n·b_n} 等差×等比', '错位相减法', '相减后化为等比求和']] },
        { type: 'tip', label: '提速', text: '熟练后可把过程写成「三行」：写 S_n、写 qS_n、相减合并。相减时建议<strong>从同一列开始对齐抄写</strong>，避免错位错误；最后代入等比求和公式，再解 (1−q)S_n = ... 求出 S_n。' },
        { type: 'paragraph', text: '错位相减是高考数列解答题的高频考点，常与通项公式、等比数列求和结合考查。解题时只要严格遵循「写和式 → 乘公比 → 错一位相减 → 等比求和 → 解 S_n」五步，就能稳定得分。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">相减后化为等比数列求和</text><g font-size="16" fill="#33536e"><text x="40" y="85">(1-q)S_n = a_1·b_1 - a_n·b_{n+1} + d·(b_2 + b_3 + ... + b_n)</text><text x="40" y="115" fill="#7a5aa0">其中 d·(b_2+...+b_n) 是首项 d·b_2、公比 q 的等比数列求和</text></g><g fill="#4a7de0"><rect x="60" y="150" width="40" height="40" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><rect x="110" y="150" width="40" height="40" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><rect x="160" y="150" width="40" height="40" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><rect x="210" y="150" width="40" height="40" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/></g><g font-size="14" fill="#33536e" text-anchor="middle"><text x="80" y="175">b_2</text><text x="130" y="175">b_3</text><text x="180" y="175">b_4</text><text x="230" y="175">...</text></g><text x="40" y="225" font-size="15" fill="#33536e">等比数列求和公式：Σ_{k=2}^{n} b_k = b_2·(1-q^{n-1})/(1-q) （q ≠ 1）</text><text x="40" y="248" font-size="14" fill="#c0392b">若 q = 1 则 b_k 为常数列，直接求和，不能用错位相减除以 (1-q)。</text></svg>', caption: '图3　相减后中间项为等比数列，用等比求和公式收尾。' }
      ],
      exercises: [
        { type: 'choice', question: '错位相减法最适用于下列哪类数列的求和？', options: ['等差数列的前 n 项和', '{a_n·b_n} 型，其中 {a_n} 等差、{b_n} 等比', '等比数列的前 n 项和', '常数列求和'], answer: '{a_n·b_n} 型，其中 {a_n} 等差、{b_n} 等比', explanation: '错位相减专门解决通项为等差乘等比（即 {a_n·b_n}）的求和问题。等差数列、等比数列各自有现成求和公式，常数列求和更简单，这三类都不需要错位相减。只有等差乘等比的结构才必须借助错位相减，把中间项化为等比数列来求和。' },
        { type: 'choice', question: '用错位相减法求和 S_n = a_1·b_1 + ... + a_n·b_n 时，关键操作是？', options: ['将 S_n 与 q·S_n 两式相加', '将 S_n 与 q·S_n 右对齐后相减（错一位）', '直接套用等差求和公式', '先求通项再开方'], answer: '将 S_n 与 q·S_n 右对齐后相减（错一位）', explanation: '错位相减的本质是把 S_n 乘以公比 q 得到 q·S_n，再把两式右对齐相减，且 q·S_n 相对 S_n 整体错后一位，使同次幂的 b_k 上下对齐。相减后中间项合并为公差乘等比的形式，从而化为等比数列求和。相加或套等差公式都无法达到这一目的。' },
        { type: 'choice', question: '对 S_n = 1 + 2x + 3x² + ... + n·x^{n−1} 使用错位相减，通常两边同乘的数是？', options: ['x', 'x²', 'n', '1/x'], answer: 'x', explanation: '该数列通项为 k·x^{k−1}，其中 k 是等差、x^{k−1} 是等比（公比 q = x）。错位相减的标准操作是两边同乘等比数列的公比，这里公比正是 x，所以同乘 x 后相减即可让同次幂对齐，进而化为等比求和。' },
        { type: 'fill', question: '错位相减法中，S_n 与 q·S_n 相减后，中间各项合并成一个_____数列（填「等差」或「等比」），可用其求和公式收尾。', answer: '等比', explanation: '相减之后，除首尾项外，中间各项为 (a_k − a_{k−1})·b_k = d·b_k，由于 {b_k} 公比为 q，这些中间项构成首项 d·b_2、公比 q 的等比数列，因此可用等比数列求和公式求出 (1−q)S_n，再解出 S_n。' },
        { type: 'fill', question: '若等比数列公比 q = 1，则 {b_n} 是常数列，错位相减时 (1−q)S_n = 0，此时应当_____（填「直接求和」或「除以 1−q」）。', answer: '直接求和', explanation: '当 q = 1 时，{b_n} 退化为常数列，此时 (1−q)S_n = 0，若再两边同除以 (1−q) 则出现除以 0 的错误。正确做法是先单独讨论 q = 1 的情形，按常数列直接求和，之后再处理 q ≠ 1 的错位相减。' }
      ]
    },

    /* ---------------- 第2课时 数列的性质 ---------------- */
    {
      id: 'zt3-u6-l2',
      name: '数列的性质（单调性、最值、周期性）',
      chapter: '数列专题复习 · 七 数列的性质',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、数列的单调性' },
        { type: 'paragraph', text: '数列的单调性研究的是随着项数 n 增大，项 a_n 是递增、递减还是保持不变。判断单调性既可以从通项公式 a_n 与 a_{n+1} 的大小比较入手，也可以利用等差、等比数列自身的参数特征直接判断。' },
        { type: 'keypoint', label: '等差单调性', text: '等差数列 {a_n} 公差为 d：<strong>d ＞ 0 时递增</strong>，<strong>d ＜ 0 时递减</strong>，<strong>d = 0 时为常数列</strong>。因为 a_{n+1} − a_n = d 恒定，符号由 d 决定。' },
        { type: 'paragraph', text: '等比数列的单调性不能只看公比 q，还要结合首项 a_1 的正负综合判断，因为 a_{n+1}/a_n = q 只说明相邻两项的比值，方向取决于 a_1 与 q 的符号组合。' },
        { type: 'list', items: ['a_1 ＞ 0 且 q ＞ 1：数列递增', 'a_1 ＞ 0 且 0 ＜ q ＜ 1：数列递减', 'a_1 ＜ 0 且 q ＞ 1：数列递减', 'a_1 ＜ 0 且 0 ＜ q ＜ 1：数列递增', 'q = 1 为常数列；q ＜ 0 时数列正负交替，不具有单调性'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">等差数列单调性由公差 d 的符号决定</text><g font-size="16" fill="#33536e"><text x="40" y="95" fill="#5a7a2a">d &gt; 0 ：a_1 &lt; a_2 &lt; a_3 &lt; ...   递增数列</text><text x="40" y="140" fill="#c0392b">d &lt; 0 ：a_1 &gt; a_2 &gt; a_3 &gt; ...   递减数列</text><text x="40" y="185" fill="#7a5aa0">d = 0 ：a_1 = a_2 = a_3 = ...   常数列</text></g><g font-size="15" fill="#33536e"><text x="40" y="225">等差：a_{n+1} - a_n = d 恒定，单调性完全由 d 的符号决定。</text></g></svg>', caption: '图1　等差数列单调性由公差 d 的符号决定：d＞0 递增，d＜0 递减，d=0 常数列。' },
        { type: 'heading', text: '二、前 n 项和的最值' },
        { type: 'warn', label: '最值重点', text: '等差数列前 n 项和 S_n 的最值，常用两种思路：<br>① <strong>变号点法</strong>：a_1 ＞ 0、d ＜ 0 时，由 a_n ≥ 0 且 a_{n+1} ≤ 0 确定 S_n 取最大值的位置；a_1 ＜ 0、d ＞ 0 时，由 a_n ≤ 0 且 a_{n+1} ≥ 0 确定最小值位置。<br>② <strong>二次函数法</strong>：S_n = d/2 · n² + (a_1 − d/2)·n，把 n 看作自变量，最值在抛物线顶点附近取得。' },
        { type: 'keypoint', label: '二次函数观点', text: '把 S_n = d/2 · n² + (a_1 − d/2)·n 看成关于 n 的二次函数（n 取正整数）。当 <strong>d ＜ 0 时开口向下</strong>，S_n 有最大值；当 <strong>d ＞ 0 时开口向上</strong>，S_n 有最小值。对称轴 n = (1/2) − a_1/d 附近的整数即最值点。' },
        { type: 'example', label: '例题1', text: '已知等差数列 {a_n} 中 a_1 = 20，d = −2，求 S_n 的最大值及对应的 n。<br><br><strong>解</strong>：法一（变号点）：a_n = 20 + (n−1)(−2) = 22 − 2n。<br>令 a_n ≥ 0 得 22 − 2n ≥ 0，即 n ≤ 11；令 a_{n+1} ≤ 0 得 22 − 2(n+1) ≤ 0，即 n ≥ 10。<br>故 n = 10 或 11 时 S_n 最大。<br>S_11 = 11×20 + 11×10/2×(−2) = 220 − 110 = 110。法二（二次函数）：S_n = −n² + 21n，对称轴 n = 10.5，最近整数 10、11，S_10 = S_11 = 110。' },
        { type: 'paragraph', text: '两种思路结果一致：变号点法直接利用项的正负转折，二次函数法把求和式转化为抛物线，二者本质相同。当公差 d 为负数且首项为正时，数列先正后负，前 n 项和在项由正转负处达到最大。' },
        { type: 'list', items: ['写出通项 a_n = a_1 + (n−1)d 与前 n 项和 S_n 表达式', '若用变号点法，解不等式 a_n ≥ 0 且 a_{n+1} ≤ 0（或反向）', '若用二次函数法，求对称轴 n = (1/2) − a_1/d 附近的整数', '代入整数 n 计算 S_n，比较相邻整数取最值', '注意 n 必须为正整数，最值点可能有两个相邻整数'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">前 n 项和 S_n 的最值：二次函数顶点与变号点</text><line x1="60" y1="240" x2="640" y2="240" stroke="#33536e" stroke-width="2"/><line x1="60" y1="60" x2="60" y2="240" stroke="#33536e" stroke-width="2"/><path d="M 120 230 Q 330 70 560 230" fill="none" stroke="#4a7de0" stroke-width="3"/><circle cx="330" cy="115" r="6" fill="#e05d44"/><text x="345" y="105" font-size="14" fill="#c0392b">顶点：S_n 最大</text><g font-size="14" fill="#33536e"><text x="90" y="262" fill="#5a7a2a">a_n ≥ 0 段</text><text x="430" y="262" fill="#c0392b">a_n ≤ 0 段</text></g><text x="330" y="155" font-size="14" fill="#33536e" text-anchor="middle">变号点 n0：a_{n0} ≥ 0 且 a_{n0+1} ≤ 0</text><text x="330" y="200" font-size="13" fill="#33536e" text-anchor="middle">S_n = d/2 · n^2 + (a_1 - d/2) · n  （d &lt; 0 时开口向下）</text></svg>', caption: '图2　S_n 作为二次函数（d＜0 时开口向下），最值在顶点/变号点处取得。' },
        { type: 'heading', text: '三、数列的周期性' },
        { type: 'keypoint', label: '周期数列定义', text: '若存在<strong>非零常数 T</strong>，使得对任意正整数 n 都有 <strong>a_{n+T} = a_n</strong>，则称 {a_n} 为周期数列，T 称为它的一个周期（最小正周期为基本周期）。' },
        { type: 'example', label: '例题2', text: '已知数列满足 a_{n+2} = −a_n，且 a_1 = 1，a_2 = 2，求周期 T 及 a_2024。<br><br><strong>解</strong>：由 a_{n+2} = −a_n，得 a_{n+4} = −a_{n+2} = −(−a_n) = a_n，故周期 T = 4。<br>数列为：a_1 = 1，a_2 = 2，a_3 = −a_1 = −1，a_4 = −a_2 = −2，a_5 = a_1 = 1，… 每 4 项重复。<br>2024 ÷ 4 = 506 余 0，即 2024 ≡ 0 (mod 4)，对应周期中第 4 项，故 a_2024 = a_4 = −2。' },
        { type: 'paragraph', text: '求周期数列的指定项（如 a_2024）时，核心是先求出周期 T，再把目标下标对 T 取余数，定位到周期内的对应位置。若余数为 0，则对应第 T 项而非第 0 项。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">周期数列：a_{n+T} = a_n 波形重复</text><line x1="50" y1="200" x2="650" y2="200" stroke="#33536e" stroke-width="2"/><polyline points="50,200 110,120 170,200 230,120 290,200 350,120 410,200 470,120 530,200 590,120 650,200" fill="none" stroke="#4a7de0" stroke-width="3"/><g font-size="14" fill="#33536e" text-anchor="middle"><text x="110" y="225">n=1</text><text x="170" y="225">n=2</text><text x="230" y="225">n=3</text><text x="290" y="225">n=4</text></g><text x="340" y="160" font-size="15" fill="#7a5aa0" text-anchor="middle">T = 2：每 2 项重复一次</text><text x="340" y="248" font-size="14" fill="#c0392b" text-anchor="middle">求 a_2024：用 2024 除以 T 取余数，定位到周期内的对应项</text></svg>', caption: '图3　周期数列波形重复，每 T 项回到原值，求 a_2024 用下标对 T 取余。' },
        { type: 'heading', text: '四、三类性质对比与巩固' },
        { type: 'table', headers: ['性质', '判断依据', '典型结论'], rows: [['单调性', 'a_{n+1} − a_n 的符号 / 参数范围', '等差看 d，等比综合 a_1 与 q'], ['最值', '变号点 a_n 的符号转折 / S_n 二次函数顶点', 'a_1＞0,d＜0 取最大；a_1＜0,d＞0 取最小'], ['周期性', '存在 T 使 a_{n+T}=a_n', '用下标对 T 取余求指定项']] },
        { type: 'tip', label: '取余技巧', text: '周期数列求 a_m 时，计算 m 除以 T 的余数 r：若 r ≠ 0，则 a_m = a_r；若 r = 0，则 a_m = a_T。熟练后可先写出前若干个周期项，再直接「数对号」定位，避免余数换算出错。' },
        { type: 'list', items: ['单调性：等差看 d 符号，等比需综合 a_1 与 q', '最值：变号点法或二次函数顶点法，n 取正整数', '周期性：先证 a_{n+T}=a_n，再用下标对 T 取余', '三类性质常综合考查，注意分类讨论公比 q 的符号与是否为 1'] },
        { type: 'paragraph', text: '单调性、最值、周期性是数列性质的三大考点，常与通项公式、求和结合出现在选择题与解答题中。掌握参数判断与取余技巧，就能快速准确地完成相关题目。' }
      ],
      exercises: [
        { type: 'choice', question: '等差数列 {a_n} 的公差 d ＞ 0，则该数列？', options: ['递减', '递增', '是常数列', '先增后减'], answer: '递增', explanation: '等差数列中 a_{n+1} − a_n = d 为定值。当 d ＞ 0 时，每一项都比前一项大，即 a_1 ＜ a_2 ＜ a_3 ＜ …，数列严格递增；d ＜ 0 才递减，d = 0 为常数列。故 d ＞ 0 对应递增数列。' },
        { type: 'choice', question: '已知 a_1 = 20，d = −2，用变号点法求 S_n 最大值时，应满足？', options: ['a_n ≥ 0 且 a_{n+1} ≤ 0', 'a_n ≤ 0 且 a_{n+1} ≥ 0', 'a_n = 0', 'd ＞ 0'], answer: 'a_n ≥ 0 且 a_{n+1} ≤ 0', explanation: 'a_1 ＞ 0 且 d ＜ 0 时数列先正后负，前 n 项和在项由非负转为非正处达到最大，即满足 a_n ≥ 0 且 a_{n+1} ≤ 0 的 n 使 S_n 最大。另一选项是取最小值的条件；a_n = 0 只是临界特例，d ＞ 0 与本题 d = −2 不符。' },
        { type: 'choice', question: '数列满足 a_{n+2} = −a_n，则它的周期 T 为？', options: ['2', '3', '4', '6'], answer: '4', explanation: '由 a_{n+2} = −a_n 递推得 a_{n+4} = −a_{n+2} = −(−a_n) = a_n，因此每 4 项重复一次，最小正周期 T = 4。也可写出前几项验证：a_1, a_2, −a_1, −a_2, a_1, a_2, … 确实以 4 为周期。' },
        { type: 'fill', question: '等差数列前 n 项和 S_n = d/2·n² + (a_1 − d/2)·n 可看作关于 n 的二次函数，当 d ≠ 0 时其最值出现在该二次函数的_____附近（填「顶点」或「端点」）。', answer: '顶点', explanation: '把 S_n = d/2·n² + (a_1 − d/2)·n 视为 n 的二次函数（n 取正整数），其图像是抛物线。当 d ≠ 0 时最值在抛物线对称轴（顶点）附近的整数点取得，故应填「顶点」。端点只在 d = 0（退化为一次函数）时才是唯一关注点。' },
        { type: 'fill', question: '若数列 {a_n} 满足 a_{n+T} = a_n 对任意正整数 n 成立，则称它为_____数列，T 称为它的一个周期。', answer: '周期', explanation: '周期数列的定义正是存在非零常数 T，使得对所有正整数 n 都有 a_{n+T} = a_n，此时称 {a_n} 为周期数列，T 是它一个周期。最小正周期称为基本周期。求指定项时用下标对 T 取余即可定位。' }
      ]
    }

  );
})();
