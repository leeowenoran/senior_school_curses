/* ============================================================
 * 高中数学 · 高考复习专题 · 数列专题
 * 第3单元（2 课时）：等比数列（定义、通项、等比中项 / 前n项和与性质）
 * 数据注入：math.zt3.points（由 data-gz.js 末尾 GZ_REVIEW.math 遍历注册，grade 高三）
 * 注入方式：gzGetVolume('math','zt3').points.push(...)
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt3');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 等比数列（定义、通项、等比中项） ---------------- */
    {
      id: 'zt3-u3-l1',
      name: '等比数列（定义、通项、等比中项）',
      chapter: '数列专题复习 · 四 等比数列（定义与通项）',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、等比数列的定义' },
        { type: 'paragraph', text: '我们已经学过等差数列，它研究的是“差相等”的数列。与等差相对，如果数列中从第二项起，每一项与它的前一项的比值都保持同一个常数，就得到另一类重要的数列——等比数列。等比数列在复利计算、细胞分裂、几何衰减等实际问题中都有广泛应用。' },
        { type: 'keypoint', label: '重点·定义', text: '一般地，如果从<strong>第二项起</strong>，每一项与它的前一项的比都等于<strong>同一个常数 q</strong>，即 a_{n+1}/a_n = q（q 为常数），则称数列 {a_n} 为等比数列，常数 q 叫做公比。' },
        { type: 'paragraph', text: '由定义式 a_{n+1}/a_n = q 可知，等比数列的每一项都不能为 0（否则后续比值无意义），并且公比 q 也不能为 0。公比 q 可以取正数也可以取负数；当 q 为负时，数列各项正负交替出现。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">等比数列的指数型增长点列（公比 q = 2）</text><line x1="70" y1="250" x2="640" y2="250" stroke="#33536e" stroke-width="2"/><line x1="70" y1="250" x2="70" y2="60" stroke="#33536e" stroke-width="2"/><polyline points="70,245 170,239 270,228 370,205 470,160 570,90" fill="none" stroke="#4a7de0" stroke-width="2.5"/><g fill="#2b5b9e"><circle cx="70" cy="245" r="6"/><circle cx="170" cy="239" r="6"/><circle cx="270" cy="228" r="6"/><circle cx="370" cy="205" r="6"/><circle cx="470" cy="160" r="6"/><circle cx="570" cy="90" r="6"/></g><g font-size="14" fill="#33536e" text-anchor="middle"><text x="70" y="268">n=1</text><text x="170" y="268">n=2</text><text x="270" y="268">n=3</text><text x="370" y="268">n=4</text><text x="470" y="268">n=5</text><text x="570" y="268">n=6</text></g><g font-size="13" fill="#2b5b9e" text-anchor="middle"><text x="70" y="235">3</text><text x="170" y="229">6</text><text x="270" y="218">12</text><text x="370" y="195">24</text><text x="470" y="150">48</text><text x="570" y="80">96</text></g><text x="430" y="120" font-size="15" fill="#c0392b" text-anchor="middle">每项 = 前一项 × q</text><text x="340" y="290" font-size="14" fill="#33536e" text-anchor="middle">公比 q = 2 时，点列呈指数型快速增长</text></svg>', caption: '图1　公比 q = 2 的等比数列点列，相邻项之比恒为 2，呈现指数型增长。' },
        { type: 'heading', text: '二、等比数列的通项公式' },
        { type: 'keypoint', label: '重点·通项', text: '等比数列通项为 <strong>a_n = a_1 q^{n−1}</strong>；若已知第 m 项，则有推广式 <strong>a_n = a_m q^{n−m}</strong>。两式本质相同，推广式在已知非首项时尤为方便。' },
        { type: 'paragraph', text: '通项公式 a_n = a_1 q^{n−1} 由定义反复迭代得到：a_2 = a_1 q，a_3 = a_2 q = a_1 q²，依此类推归纳即得。推广式 a_n = a_m q^{n−m} 表明，只要知道任意一项 a_m 和公比 q，就能求出其他任何一项，不必先求首项 a_1。' },
        { type: 'example', label: '例题1', text: '已知等比数列 {a_n} 中 a_1 = 3，q = 2。<br><br><strong>求</strong>：a_5 与通项公式 a_n。<br><strong>解</strong>：由通项 a_n = a_1 q^{n−1} 得 a_5 = 3 × 2⁴ = 3 × 16 = 48。<br>通项公式为 a_n = 3 × 2^{n−1}。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">通项公式 a_n = a_1 q^{n−1} 在指数曲线上的对应点</text><line x1="70" y1="250" x2="640" y2="250" stroke="#33536e" stroke-width="2"/><line x1="70" y1="250" x2="70" y2="50" stroke="#33536e" stroke-width="2"/><path d="M70,245 Q200,240 330,200 T570,70" fill="none" stroke="#4a7de0" stroke-width="2" stroke-dasharray="6 4"/><g fill="#2b5b9e"><circle cx="70" cy="245" r="6"/><circle cx="180" cy="232" r="6"/><circle cx="290" cy="210" r="6"/><circle cx="400" cy="175" r="6"/><circle cx="510" cy="120" r="6"/><circle cx="570" cy="90" r="6"/></g><g font-size="13" fill="#33536e" text-anchor="middle"><text x="70" y="268">1</text><text x="180" y="268">2</text><text x="290" y="268">3</text><text x="400" y="268">4</text><text x="510" y="268">5</text><text x="570" y="268">6</text></g><text x="320" y="160" font-size="15" fill="#7a5aa0">a_n = a_1 q^{n−1}</text><text x="340" y="290" font-size="14" fill="#33536e" text-anchor="middle">离散的点落在连续的指数曲线 y = a_1 q^{x−1} 上</text></svg>', caption: '图2　离散的项点恰好落在连续指数曲线上，体现通项公式与指数函数的联系。' },
        { type: 'heading', text: '三、等比中项' },
        { type: 'keypoint', label: '重点·等比中项', text: '若 a, b, c 成等比数列，则 b 叫做 a 与 c 的<strong>等比中项</strong>，满足 <strong>b² = a c</strong>（且 a, b, c 均不为 0）。反之，若 b² = a c 且各项非零，则 a, b, c 成等比。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">等比中项：a, b, c 成等比 则 b² = a c</text><g font-size="18" fill="#2b5b9e" text-anchor="middle"><text x="150" y="140">a</text><text x="340" y="140">b</text><text x="530" y="140">c</text></g><line x1="100" y1="150" x2="600" y2="150" stroke="#4a7de0" stroke-width="2"/><g fill="#4a7de0"><circle cx="150" cy="150" r="6"/><circle cx="340" cy="150" r="6"/><circle cx="530" cy="150" r="6"/></g><rect x="110" y="170" width="80" height="50" fill="#dbe9fb" stroke="#2b5b9e" stroke-width="1.5"/><rect x="300" y="170" width="80" height="50" fill="#f6d9cf" stroke="#c0392b" stroke-width="1.5"/><rect x="490" y="170" width="80" height="50" fill="#dbe9fb" stroke="#2b5b9e" stroke-width="1.5"/><g font-size="14" fill="#33536e" text-anchor="middle"><text x="150" y="200">a</text><text x="340" y="200">b</text><text x="530" y="200">c</text></g><text x="340" y="245" font-size="15" fill="#c0392b" text-anchor="middle">中间正方形面积 b² 等于两侧矩形面积 a 与 c 的乘积</text></svg>', caption: '图3　等比中项的几何意义：中间项的平方等于两侧项的乘积。' },
        { type: 'example', label: '例题2', text: '已知等比数列 {a_n} 中 a_2 = 6，a_4 = 54，求通项 a_n。<br><br><strong>解</strong>：由推广式 a_4 = a_2 q^{4−2} = a_2 q²，代入得 54 = 6 q²，故 q² = 9，q = 3 或 q = −3。<br>当 q = 3 时，a_1 = a_2 / q = 2，a_n = 2 × 3^{n−1}；<br>当 q = −3 时，a_1 = a_2 / q = −2，a_n = −2 × (−3)^{n−1}。<br>因此 a_n = 2·3^{n−1} 或 a_n = −2·(−3)^{n−1}，注意公比 q 可正可负。' },
        { type: 'heading', text: '四、等比数列的判定方法' },
        { type: 'table', headers: ['方法', '表达式', '说明'], rows: [
          ['定义法', 'a_{n+1}/a_n = q（q 为非零常数）', '从第二项起，每一项与前一项的比为常数'],
          ['通项法', 'a_n = k q^n（k≠0, q≠0）', '通项可写成指数函数形式'],
          ['前n项和法', 'S_n = k q^n − k（k≠0, q≠1）', '片段和呈等比特征'],
          ['等比中项法', 'a_{n+1}² = a_n · a_{n+2}', '相邻三项满足平方关系（各项非零）']
        ] },
        { type: 'list', items: [
          '定义法：计算 a_{n+1}/a_n，若是与 n 无关的非零常数 q，则为等比',
          '通项法：若 a_n 能写成 k q^n（k≠0, q≠0），则可直接判定为等比',
          '等比中项法：相邻三项满足 a_{n+1}² = a_n a_{n+2}（各项非零）也可判定'
        ] },
        { type: 'paragraph', text: '判定等比时，定义法要求比值 a_{n+1}/a_n 对所有 n 都等于同一个常数；通项法要求 a_n 是真正的指数函数型（系数 k 不为 0，底数 q 不为 0）。要注意区分“某一项满足某个关系式”与“对所有项都满足”，不能仅凭个别项下结论。' },
        { type: 'example', label: '例题3', text: '三个数成等比数列，且三数之积为 64，求这三个数。<br><br><strong>解</strong>：设三数为 a/q, a, a q（公比为 q，各项非零），则 (a/q)·a·(a q) = a³ = 64，解得 a = 4。<br>故三数为 4/q, 4, 4 q。例如取 q = 2，得 2, 4, 8；取 q = 1/2，得 8, 4, 2。无论 q 取何非零值，三数之积恒为 64。' },
        { type: 'tip', label: '提示', text: '判定一个数列是否为等比数列，最常用的是<strong>定义法</strong>：证明 a_{n+1}/a_n 为常数（与 n 无关）。若能化为 a_n = k q^n 的形式，也可直接判定。判定时务必保证分母 a_n 不为 0。' },
        { type: 'warn', label: '易错', text: '等比数列中<strong>公比 q ≠ 0 且各项 a_n ≠ 0</strong>。若某一项为 0，则后续比值 a_{n+1}/a_n 无意义；若 q = 0，则数列从第二项起全为 0，也不再是等比数列。涉及参数时求出的结果必须保证各项非零。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: [
          '定义：a_{n+1}/a_n = q（常数），q≠0 且各项非零',
          '通项：a_n = a_1 q^{n−1} = a_m q^{n−m}',
          '等比中项：a, b, c 成等比 ⇔ b² = a c',
          '判定常用定义法、通项法、等比中项法'
        ] }
      ],
      exercises: [
        { type: 'choice', question: '关于等比数列 {a_n} 的定义，下列说法正确的是？', options: ['公比 q 可以为 0', '数列中的项可以为 0', 'q 是非零常数且各项均不为 0', '公比 q 必须为正数'], answer: 'q 是非零常数且各项均不为 0', explanation: '等比数列要求从第二项起每一项与前一项的比等于同一个常数 q，且 q≠0，同时各项 a_n 均不为 0；若某项为 0 则后续比值无意义，若 q=0 则数列从第二项起全为 0 也不符合定义。公比 q 可正可负，不必为正数。' },
        { type: 'choice', question: '等比数列 {a_n} 中 a_1 = 2，q = 3，则 a_4 = ？', options: ['54', '27', '18', '81'], answer: '54', explanation: '由通项公式 a_n = a_1 q^{n−1} 得 a_4 = a_1 q³ = 2 × 3³ = 2 × 27 = 54。也可逐步计算：a_2 = 6，a_3 = 18，a_4 = 54，结果一致。' },
        { type: 'fill', question: '等比数列 {a_n} 中，a_2 = 4，a_5 = 32，则公比 q = ____。', answer: '2', explanation: '由通项推广式 a_5 = a_2 q^{5−2} = a_2 q³，代入得 32 = 4 q³，即 q³ = 8，解得 q = 2。也可利用 a_n = a_1 q^{n−1} 联立两式消去 a_1，同样得到公比 q = 2。' },
        { type: 'choice', question: '若 a, b, c 成等比数列，则它们满足的关系是？', options: ['b = (a+c)/2', 'b² = a c', 'b = a c', 'a² = b c'], answer: 'b² = a c', explanation: 'a, b, c 成等比数列等价于 b 是 a 与 c 的等比中项，即 b² = a c（且 a, b, c 均不为 0）。只有当数列同时是等差时才满足 b = (a+c)/2，一般等比数列并不满足该式。' },
        { type: 'fill', question: '若 2, x, 8 成等比数列，则 x = ____（填一个满足条件的值）。', answer: '4', explanation: '由等比中项性质，2, x, 8 成等比等价于 x² = 2 × 8 = 16，解得 x = 4 或 x = −4，两者均满足要求（且各项非零）。填 4 是一种正确答案，填 −4 同样正确。' }
      ]
    },

    /* ---------------- 第2课时 等比数列前n项和 + 重要性质 ---------------- */
    {
      id: 'zt3-u3-l2',
      name: '等比数列前n项和与重要性质',
      chapter: '数列专题复习 · 四 等比数列（前n项和与性质）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、等比数列的前 n 项和公式' },
        { type: 'keypoint', label: '重点·求和公式', text: '等比数列前 n 项和：当 <strong>q = 1</strong> 时，S_n = n a_1（常数列）；当 <strong>q ≠ 1</strong> 时，S_n = a_1(1−q^n)/(1−q) = (a_1 − a_n q)/(1−q)。使用时应按 q 是否等于 1 分类。' },
        { type: 'paragraph', text: '求和公式可由“错位相减法”推导：S_n = a_1 + a_1 q + … + a_1 q^{n−1}，两边同乘 q 后相减，得到 (1−q) S_n = a_1(1−q^n)，从而 S_n = a_1(1−q^n)/(1−q)（q≠1）。当 q = 1 时每一步都是 a_1，直接得 S_n = n a_1。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">等比数列前 n 项和：分类讨论流程图</text><rect x="270" y="50" width="140" height="44" rx="8" fill="#2b5b9e"/><text x="340" y="78" font-size="16" fill="#fff" text-anchor="middle">已知 a_1, q, n</text><line x1="340" y1="94" x2="340" y2="120" stroke="#33536e" stroke-width="2"/><rect x="270" y="120" width="140" height="44" rx="8" fill="#4a7de0"/><text x="340" y="148" font-size="16" fill="#fff" text-anchor="middle">判断 q 是否 = 1</text><line x1="340" y1="164" x2="170" y2="200" stroke="#5a7a2a" stroke-width="2"/><line x1="340" y1="164" x2="510" y2="200" stroke="#c0392b" stroke-width="2"/><rect x="90" y="200" width="160" height="50" rx="8" fill="#5a7a2a"/><text x="170" y="222" font-size="15" fill="#fff" text-anchor="middle">q = 1</text><text x="170" y="242" font-size="14" fill="#fff" text-anchor="middle">S_n = n a_1</text><rect x="430" y="200" width="160" height="50" rx="8" fill="#c0392b"/><text x="510" y="222" font-size="15" fill="#fff" text-anchor="middle">q ≠ 1</text><text x="510" y="242" font-size="14" fill="#fff" text-anchor="middle">S_n = a_1(1−q^n)/(1−q)</text><text x="170" y="285" font-size="13" fill="#33536e" text-anchor="middle">常数列求和</text><text x="510" y="285" font-size="13" fill="#33536e" text-anchor="middle">标准求和公式</text><text x="340" y="312" font-size="14" fill="#33536e" text-anchor="middle">使用求和公式前必须先分类，切勿直接套用 q≠1 的公式</text></svg>', caption: '图1　使用求和公式前必须先判断 q 是否等于 1，再选择对应公式。' },
        { type: 'example', label: '例题1', text: '已知等比数列 {a_n} 中 a_1 = 1，q = 2，求 S_6。<br><br><strong>解</strong>：因为 q = 2 ≠ 1，用求和公式 S_n = a_1(1−q^n)/(1−q)。<br>S_6 = 1 × (1−2⁶)/(1−2) = (1−64)/(−1) = 63。<br>也可逐项相加：1 + 2 + 4 + 8 + 16 + 32 = 63，结果一致。' },
        { type: 'heading', text: '二、使用求和公式的特别提醒' },
        { type: 'warn', label: '重点·分类讨论', text: '使用等比数列前 n 项和公式时，<strong>必须先讨论 q = 1 与 q ≠ 1 两种情况</strong>！当 q = 1 时公式 S_n = a_1(1−q^n)/(1−q) 的分母为 0，不能套用，此时 S_n = n a_1。漏掉 q = 1 的讨论是考试中最常见的失分点。' },
        { type: 'example', label: '例题2', text: '已知等比数列 {a_n} 的前 n 项和 S_3 = 7，S_6 = 63，求公比 q。<br><br><strong>解</strong>：先讨论 q = 1 的情形：若 q = 1，则 S_6 = 2 S_3 = 14 ≠ 63，故 q ≠ 1。<br>用 q≠1 公式：S_3 = a_1(1−q³)/(1−q) = 7，S_6 = a_1(1−q⁶)/(1−q) = 63。<br>两式相除得 (1−q⁶)/(1−q³) = 9，即 1 + q³ = 9，q³ = 8，故 q = 2。<br>经检验 q = 2 时 S_3 = 7 成立，所以公比 q = 2。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">前 n 项和 S_n 的累积增长（a_1 = 1, q = 2）</text><line x1="70" y1="250" x2="640" y2="250" stroke="#33536e" stroke-width="2"/><g fill="#4a7de0" stroke="#2b5b9e" stroke-width="1"><rect x="90" y="244" width="70" height="6"/><rect x="180" y="233" width="70" height="17"/><rect x="270" y="209" width="70" height="41"/><rect x="360" y="163" width="70" height="87"/><rect x="450" y="70" width="70" height="180"/></g><g font-size="14" fill="#33536e" text-anchor="middle"><text x="125" y="268">S1=1</text><text x="215" y="268">S2=3</text><text x="305" y="268">S3=7</text><text x="395" y="268">S4=15</text><text x="485" y="268">S5=31</text></g><text x="340" y="290" font-size="14" fill="#33536e" text-anchor="middle">S_n = 1 + 2 + 4 + … + 2^{n−1} = 2^n − 1</text></svg>', caption: '图2　前 n 项和随项数累积增长，对应 q≠1 求和公式的直观体现。' },
        { type: 'heading', text: '三、重要性质（下标和）' },
        { type: 'keypoint', label: '重点·下标和性质', text: '若下标满足 <strong>m + n = p + q</strong>，则对应项之积相等：<strong>a_m · a_n = a_p · a_q</strong>。特别地，a_n² = a_{n−1} · a_{n+1}（各项非零）。' },
        { type: 'paragraph', text: '下标和性质可由通项直接验证：a_m a_n = a_1 q^{m−1} · a_1 q^{n−1} = a_1² q^{m+n−2}；而 a_p a_q = a_1² q^{p+q−2}。当 m+n = p+q 时两式相等。该性质在简化乘积、求特定项时非常有用，常与通项公式配合使用。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">下标和性质：m + n = p + q ⇒ a_m · a_n = a_p · a_q</text><g font-size="16" fill="#2b5b9e" text-anchor="middle"><text x="120" y="120">a_m</text><text x="240" y="120">a_n</text><text x="440" y="120">a_p</text><text x="560" y="120">a_q</text></g><rect x="90" y="135" width="270" height="46" rx="6" fill="#dbe9fb" stroke="#2b5b9e" stroke-width="1.5"/><rect x="420" y="135" width="200" height="46" rx="6" fill="#f6d9cf" stroke="#c0392b" stroke-width="1.5"/><text x="225" y="164" font-size="16" fill="#2b5b9e" text-anchor="middle">a_m · a_n</text><text x="520" y="164" font-size="16" fill="#c0392b" text-anchor="middle">a_p · a_q</text><text x="340" y="220" font-size="15" fill="#33536e" text-anchor="middle">下标和相等 ⇒ 对应项之积相等</text><text x="340" y="245" font-size="14" fill="#5a7a2a" text-anchor="middle">例：a_2 · a_5 = a_3 · a_4（因为 2+5 = 3+4）</text></svg>', caption: '图3　下标之和相等的两对项，其乘积相等。' },
        { type: 'example', label: '例题3', text: '已知等比数列 {a_n} 中 a_1 = 2，q = 1/2，求 S_n 并说明 n 很大时的趋势。<br><br><strong>解</strong>：q = 1/2 ≠ 1，S_n = a_1(1−q^n)/(1−q) = 2 × [1−(1/2)^n]/(1−1/2) = 4 × [1−(1/2)^n] = 4 − 4·(1/2)^n。<br>当 n 越来越大时，(1/2)^n 趋于 0，于是 S_n 趋于 4。即前 n 项和以 4 为上界，并单调递增地逼近 4。' },
        { type: 'heading', text: '四、连续等长片段和的性质' },
        { type: 'keypoint', label: '重点·片段和性质', text: '等比数列依次每 k 项的和构成的数列 S_k, S_{2k}−S_k, S_{3k}−S_{2k}, … 仍成等比数列，<strong>公比为 q^k</strong>，前提是 S_k ≠ 0。' },
        { type: 'list', items: [
          'S_k, S_{2k}−S_k, S_{3k}−S_{2k}… 成等比，公比为 q^k',
          '使用该性质的前提是 S_k ≠ 0',
          '已知 S_n 与 S_{2n} 可联立反求 a_1 与 q'
        ] },
        { type: 'heading', text: '五、对数与等差的转化' },
        { type: 'keypoint', label: '重点·对数性质', text: '当等比数列各项均为正数时，取同底对数得到的数列 {log_a a_n} 是<strong>等差数列</strong>（a>0 且 a≠1），其公差为 log_a q。' },
        { type: 'paragraph', text: '设 b_n = log_a a_n = log_a (a_1 q^{n−1}) = log_a a_1 + (n−1) log_a q，这是关于 n 的一次式，故 {b_n} 是等差数列，公差为 log_a q。该性质把等比与等差联系起来，是解决综合题的重要桥梁。' },
        { type: 'table', headers: ['性质', '表达式', '条件'], rows: [
          ['下标和性质', 'm+n=p+q ⇒ a_m a_n = a_p a_q', '各项非零'],
          ['片段和性质', 'S_k, S_{2k}−S_k, S_{3k}−S_{2k}… 成等比', '公比 q^k，且 S_k≠0'],
          ['对数性质', '{log_a a_n} 为等差数列', '各项为正，a>0 且 a≠1']
        ] },
        { type: 'tip', label: '提示', text: '处理 S_n 与 S_{2n}、S_{3n} 关系的问题时，常利用片段和性质：S_n, S_{2n}−S_n, S_{3n}−S_{2n} 成等比（公比 q^n）。也可直接联立 S_n 与 S_{2n} 的两个方程求出 a_1 与 q，两种思路可互相验证。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: [
          '前 n 项和务必先分 q=1 与 q≠1 两类讨论',
          '下标和性质：m+n=p+q ⇒ a_m a_n = a_p a_q',
          '片段和 S_k, S_{2k}−S_k… 成等比，公比为 q^k',
          '各项为正时 {log_a a_n} 为等差数列'
        ] }
      ],
      exercises: [
        { type: 'choice', question: '等比数列 {a_n} 前 n 项和 S_n，当 q = 1 时公式应为？', options: ['S_n = a_1 (1−q^n)/(1−q)', 'S_n = n a_1', 'S_n = a_1 q^{n−1}', 'S_n = (a_1 − a_n q)/(1−q)'], answer: 'S_n = n a_1', explanation: '当公比 q = 1 时，等比数列退化为常数列 a_n = a_1，前 n 项和就是 n 个 a_1 相加，即 S_n = n a_1。此时分母 1−q 为 0，q≠1 的求和公式不再适用，必须单独列出。' },
        { type: 'choice', question: '等比数列 {a_n} 中 a_1 = 1，q = 2，则 S_5 = ？', options: ['31', '15', '63', '16'], answer: '31', explanation: '由 q≠1 的求和公式 S_n = a_1(1−q^n)/(1−q) 得 S_5 = 1 × (1−2⁵)/(1−2) = (1−32)/(−1) = 31。也可逐项相加：1+2+4+8+16 = 31，结果一致。' },
        { type: 'fill', question: '等比数列 {a_n} 中，若下标满足 m+n = p+q，则 a_m · a_n = ____。', answer: 'a_p·a_q', explanation: '等比数列中若下标之和相等，则对应项之积相等，即 m+n=p+q 时 a_m·a_n = a_p·a_q。该性质可由通项 a_k = a_1 q^{k−1} 直接验证：两边均等于 a_1² q^{m+n−2}。注意仅当各项非零时成立。' },
        { type: 'choice', question: '关于等比数列前 n 项和，下列说法正确的是？', options: ['可直接套用 S_n = a_1(1−q^n)/(1−q) 不必讨论', '必须分 q=1 与 q≠1 两种情况讨论', 'q=1 时 S_n = a_1 q^{n−1}', '求和公式与首项无关'], answer: '必须分 q=1 与 q≠1 两种情况讨论', explanation: '等比数列前 n 项和公式在 q≠1 时为 S_n = a_1(1−q^n)/(1−q)，而 q=1 时分母为 0 该式失效，此时 S_n = n a_1。因此使用求和公式前必须先判断 q 是否等于 1 并分类讨论，这是考试中的重点与易错点。' },
        { type: 'fill', question: '等比数列 {a_n} 各项均为正数且 a_1 = 2，q = 1/2，则 S_n = 4 − 4·(1/2)^n，当 n 趋于无穷时 S_n 趋于 ____。', answer: '4', explanation: '由求和公式 S_n = 2 × [1−(1/2)^n] / (1−1/2) = 4 × [1−(1/2)^n] = 4 − 4·(1/2)^n。当 n 趋于无穷时 (1/2)^n 趋于 0，故 S_n 趋于 4，即无穷项和的极限为 4。' }
      ]
    }

  );
})();
