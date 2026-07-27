/* ============================================================
 * 高二数学 · 选择性必修 第二册 · 第四章 数列
 * 第3课时组：等比数列前 n 项和 · 数学归纳法（选学）
 * 数据注入：math.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'xb2');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 等比数列的前 n 项和公式 ---------------- */
    {
      id: 'xb2-u3-l1',
      name: '等比数列的前 n 项和公式',
      chapter: '第四章 数列 · 4.3.2',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、公式的两种情形' },
        { type: 'paragraph', text: '等比数列的前 n 项和是数列学习的核心公式之一。与等差数列求和不同，等比数列求和必须根据公比 q 是否等于 1 分两种情形处理。掌握这一公式，既能解决储蓄、折纸、细胞分裂等实际问题，也为后续学习数列求和与不等式打下基础。' },
        { type: 'keypoint', label: '重点·公式', text: '等比数列前 n 项和公式分两种情形：<br><strong>当 q = 1 时</strong>，数列为常数列，Sₙ = n·a₁；<br><strong>当 q ≠ 1 时</strong>，Sₙ = a₁(1−qⁿ)/(1−q)，等价地也可写成 Sₙ = (a₁−aₙq)/(1−q)。<br>使用时<strong>必须先判断 q 是否等于 1</strong>，再选用相应公式。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="40" y="38" font-size="17" fill="#2b5b9e" font-weight="bold">错位相减法推导示意</text><text x="40" y="84" font-size="16" fill="#33536e">Sₙ = a₁ + a₁q + a₁q² + … + a₁qⁿ⁻¹</text><text x="64" y="118" font-size="16" fill="#33536e">q·Sₙ = a₁q + a₁q² + … + a₁qⁿ⁻¹ + a₁qⁿ</text><text x="40" y="156" font-size="16" fill="#c0392b">两式相减：(1−q)Sₙ = a₁ − a₁qⁿ = a₁(1−qⁿ)</text><text x="40" y="192" font-size="16" fill="#33536e">Sₙ = a₁(1−qⁿ)/(1−q)　（q ≠ 1）</text><line x1="40" y1="212" x2="640" y2="212" stroke="#4a7de0" stroke-width="1.5"/><text x="40" y="246" font-size="15" fill="#33536e">说明：两边同乘公比 q 后错开一位相减，中间各项成对抵消，</text><text x="40" y="270" font-size="15" fill="#33536e">只剩首尾两项，从而解出 Sₙ。这是等比数列求和的核心推导。</text></svg>', caption: '图1　错位相减法：乘 q 错位相减，中间项全部抵消，只剩首尾。' },
        { type: 'list', items: ['写出和式 Sₙ = a₁ + a₁q + … + a₁qⁿ⁻¹', '两边同乘公比 q，得 qSₙ = a₁q + … + a₁qⁿ', '两式错开一位相减，中间项全部抵消', '化简得 (1−q)Sₙ = a₁(1−qⁿ)，解出 Sₙ'] },
        { type: 'heading', text: '二、错位相减法推导' },
        { type: 'paragraph', text: '错位相减法的本质是利用等比数列相邻项成固定倍数的特点：将和式 Sₙ 两边同乘公比 q，使第二式的每一项恰好落在第一式相邻两项之间，两式相减后中间项全部抵消，从而把 n 项和转化为首尾两项的差。' },
        { type: 'example', label: '例题1', text: '已知等比数列 1, 2, 4, …，求前 10 项和 S₁₀。<br><br><strong>解</strong>：由数列知 a₁ = 1，公比 q = 2 ≠ 1，项数 n = 10。<br>代入公式 Sₙ = a₁(1−qⁿ)/(1−q)：<br>S₁₀ = 1·(1−2¹⁰)/(1−2) = (1−1024)/(−1) = 1023。<br>所以这前 10 项和为 1023。' },
        { type: 'example', label: '例题2', text: '已知等比数列 2, 2, 2, …，求前 5 项和。<br><br><strong>解</strong>：该数列公比 q = 1，是常数列，每一项都等于 2。<br>此时不能用分式公式（分母为零），应改用 Sₙ = n·a₁：<br>S₅ = 5 × 2 = 10。<br>所以前 5 项和为 10。' },
        { type: 'example', label: '例题3', text: '等比数列中 a₁ = 1，q = 2，求前 n 项和 Sₙ。<br><br><strong>解</strong>：q = 2 ≠ 1，代入分式公式：<br>Sₙ = 1·(1−2ⁿ)/(1−2) = (1−2ⁿ)/(−1) = 2ⁿ − 1。<br>故该数列前 n 项和 Sₙ = 2ⁿ − 1。' },
        { type: 'warn', label: '易错', text: '最易犯的错误是<strong>忽略对 q 的分类讨论</strong>。当 q = 1 时，若仍套用 q≠1 的公式，会出现分母 1−q = 0，式子无意义。因此拿到题目第一步就要判断公比：q=1 用 n·a₁，q≠1 才用分式公式。' },
        { type: 'list', items: ['先用 q = 1 还是 q ≠ 1 分类，这是答题第一步', 'q = 1：Sₙ = n·a₁（常数列求和）', 'q ≠ 1：Sₙ = a₁(1−qⁿ)/(1−q) 或 (a₁−aₙq)/(1−q)', '已知末项 aₙ 时优先用含 aₙ 的等价式'] },
        { type: 'tip', label: '提示', text: '两个公式可统一记忆：<strong>Sₙ = a₁(1−qⁿ)/(1−q)</strong>（q≠1）与 <strong>Sₙ = n·a₁</strong>（q=1）。当已知末项 aₙ 时，用 (a₁−aₙq)/(1−q) 更方便，避免先求 n 次方。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="36" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">两种情形的求和公式</text><rect x="40" y="62" width="280" height="118" fill="#f7fbf3" stroke="#5a7a2a" stroke-width="2"/><text x="180" y="94" font-size="16" fill="#5a7a2a" text-anchor="middle" font-weight="bold">情形一：q = 1（常数列）</text><text x="180" y="126" font-size="15" fill="#33536e" text-anchor="middle">a₁, a₁, a₁, …（每一项相等）</text><text x="180" y="156" font-size="15" fill="#33536e" text-anchor="middle">Sₙ = a₁ + a₁ + … + a₁ = n·a₁</text><rect x="360" y="62" width="280" height="118" fill="#eef4fc" stroke="#4a7de0" stroke-width="2"/><text x="500" y="94" font-size="16" fill="#2b5b9e" text-anchor="middle" font-weight="bold">情形二：q ≠ 1</text><text x="500" y="126" font-size="15" fill="#33536e" text-anchor="middle">指数型：a₁, a₁q, a₁q², …</text><text x="500" y="156" font-size="15" fill="#33536e" text-anchor="middle">Sₙ = a₁(1−qⁿ)/(1−q)</text><line x1="40" y1="200" x2="640" y2="200" stroke="#4a7de0" stroke-width="1.5"/><text x="40" y="230" font-size="15" fill="#33536e">说明：q = 1 时各项相等，求和即 n 个 a₁ 相加得 n·a₁；</text><text x="40" y="254" font-size="15" fill="#33536e">q ≠ 1 时不能直接用 n·a₁，必须套用指数求和公式。</text></svg>', caption: '图2　等比求和的两种情形：常数列用 n·a₁，指数型用分式公式。' },
        { type: 'heading', text: '三、前 n 项和的性质' },
        { type: 'keypoint', label: '重点·性质', text: '若 Sₙ 为等比数列的前 n 项和，则把前 3n 项依次等分为三段：<br><strong>Sₙ，S_{2n}−Sₙ，S_{3n}−S_{2n}</strong> 仍成等比数列，其公比为 <strong>qⁿ</strong>。<br>注意前提 q ≠ −1 且 Sₙ ≠ 0，否则可能出现零项导致公比失效。' },
        { type: 'paragraph', text: '等比数列前 n 项和还有一个重要而巧妙的性质：把前 3n 项等分成三段，每一段恰好包含 n 项，这三段的和仍构成一个等比数列，其公比等于原公比的 n 次方 qⁿ。这个性质在分段求和、构造新数列时非常有用。' },
        { type: 'example', label: '例题4', text: '设等比数列前 n 项和为 Sₙ，求证 Sₙ, S_{2n}−Sₙ, S_{3n}−S_{2n} 成等比数列。<br><br><strong>解</strong>：记这三段分别为 A = Sₙ，B = S_{2n}−Sₙ，C = S_{3n}−S_{2n}。<br>由错位相减可得 B/A = qⁿ，C/B = qⁿ，即相邻两段之比均为 qⁿ（常数）。<br>因此 A, B, C 成等比数列，公比为 qⁿ。' },
        { type: 'table', headers: ['情形', '公比条件', '前 n 项和公式', '特点'], rows: [['一', 'q = 1', 'Sₙ = n·a₁', 'n 个相等项相加，呈线性'], ['二', 'q ≠ 1', 'Sₙ = a₁(1−qⁿ)/(1−q)', '指数型，由错位相减求得']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="36" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">前 n 项和的分段等比性质</text><rect x="40" y="72" width="160" height="58" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="120" y="107" font-size="15" fill="#2b5b9e" text-anchor="middle">Sₙ（前 n 项）</text><rect x="260" y="72" width="160" height="58" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="340" y="107" font-size="15" fill="#2b5b9e" text-anchor="middle">S_{2n}−Sₙ</text><rect x="480" y="72" width="160" height="58" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="560" y="107" font-size="15" fill="#2b5b9e" text-anchor="middle">S_{3n}−S_{2n}</text><text x="200" y="172" font-size="16" fill="#c0392b" text-anchor="middle">× qⁿ</text><text x="420" y="172" font-size="16" fill="#c0392b" text-anchor="middle">× qⁿ</text><text x="340" y="214" font-size="15" fill="#33536e" text-anchor="middle">说明：三段和仍成等比数列，公比为 qⁿ（q ≠ −1 且 Sₙ ≠ 0）；</text><text x="340" y="238" font-size="15" fill="#33536e" text-anchor="middle">该性质可用来快速处理分段求和与构造新数列。</text></svg>', caption: '图3　Sₙ、S_{2n}−Sₙ、S_{3n}−S_{2n} 三段和成等比，公比 qⁿ。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['等比数列前 n 项和分 q=1 与 q≠1 两种情形', 'q=1：Sₙ = n·a₁；q≠1：Sₙ = a₁(1−qⁿ)/(1−q)', '推导核心方法：错位相减法', '分段和性质：Sₙ, S_{2n}−Sₙ, S_{3n}−S_{2n} 成等比，公比 qⁿ', '做题先判断公比，避免分母为零'] }
      ],
      exercises: [
        { type: 'choice', question: '等比数列前 n 项和公式的核心推导方法是？', options: ['错位相减法', '累加法', '倒序相加法', '裂项相消法'], answer: '错位相减法', explanation: '等比数列前 n 项和公式的推导，核心思路是错位相减法。将和式 Sₙ 两边同乘公比 q，使两式的项对齐后错开一位相减，中间所有项成对抵消，只剩首尾两项，从而解出 Sₙ。该法专用于等比型数列求和，是本节必须掌握的基本方法。' },
        { type: 'choice', question: '数列 1, 2, 4, …, 2⁹ 的前 10 项和为？', options: ['1023', '1024', '511', '2047'], answer: '1023', explanation: '该数列是首项 a₁=1、公比 q=2 的等比数列，前 10 项即从 2⁰ 到 2⁹ 共 10 项。由公式 Sₙ = a₁(1−qⁿ)/(1−q) 得 S₁₀ = 1·(1−2¹⁰)/(1−2) = (1−1024)/(−1) = 1023。也可直接由 1+2+…+2⁹ = 2¹⁰−1 = 1023 得到。' },
        { type: 'choice', question: '当公比 q = 1 时，等比数列前 n 项和 Sₙ 等于？', options: ['n·a₁', 'a₁(1−qⁿ)/(1−q)', '(a₁−aₙq)/(1−q)', 'a₁qⁿ'], answer: 'n·a₁', explanation: '当公比 q = 1 时，等比数列退化为常数列，每一项都等于 a₁，前 n 项就是 n 个 a₁ 相加，故 Sₙ = n·a₁。若误用 q≠1 的公式，分母 1−q 为零，式子无意义，因此必须先判断 q 是否等于 1。' },
        { type: 'fill', question: '等比数列中 a₁ = 3，q = 1，则前 4 项和 S₄ = ____。', answer: '12', explanation: '已知 a₁=3 且 q=1，该数列为常数列 3,3,3,3,…。当 q=1 时前 n 项和公式退化为 Sₙ = n·a₁，故 S₄ = 4×3 = 12。若套用 q≠1 的公式会出现分母为零，因此必须先判定公比情形再选用公式。' },
        { type: 'fill', question: '若 Sₙ, S_{2n}−Sₙ, S_{3n}−S_{2n} 成等比数列，则其公比为 ____。', answer: 'qⁿ', explanation: '设等比数列前 n 项和为 Sₙ，则将其等分为三段：第一段 Sₙ，第二段 S_{2n}−Sₙ，第三段 S_{3n}−S_{2n}。由等比数列求和性质可知，这三段和仍成等比数列，且公比等于原数列公比的 n 次方，即 qⁿ。该性质常用来巧解分段和与新数列构造问题。' }
      ]
    },

    /* ---------------- 第2课时 数学归纳法（选学） ---------------- */
    {
      id: 'xb2-u3-l2',
      name: '数学归纳法（选学）',
      chapter: '第四章 数列 · 4.4*',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、数学归纳法的原理' },
        { type: 'paragraph', text: '有些与正整数 n 有关的命题，例如等式 1+2+…+n = n(n+1)/2，当 n 取任意正整数时都成立，但难以逐一验证。数学归纳法提供了一种严谨的证明框架：只要证明起点成立，并且能从任意一步推出下一步，就能断定结论对所有正整数都成立。' },
        { type: 'keypoint', label: '重点·原理', text: '数学归纳法是证明<strong>与正整数 n 有关</strong>的命题的一种重要方法。其基本思想是：先验证起点成立，再证明若某一步成立则下一步也成立，从而由有限步的推理推及无限多个正整数，使命题对从 n₀ 开始的所有正整数都成立。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="36" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">数学归纳法 ≈ 多米诺骨牌连锁</text><g fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.5"><rect x="90" y="110" width="18" height="80"/><rect x="170" y="110" width="18" height="80"/><rect x="250" y="110" width="18" height="80"/><rect x="330" y="110" width="18" height="80"/><rect x="410" y="110" width="18" height="80"/><rect x="490" y="110" width="18" height="80"/></g><path d="M80 150 Q80 95 105 95" fill="none" stroke="#e05d44" stroke-width="2.5"/><text x="40" y="92" font-size="14" fill="#e05d44">推倒第 n₀ 张</text><line x1="110" y1="72" x2="500" y2="72" stroke="#5a7a2a" stroke-width="2.5"/><polygon points="500,72 486,65 486,79" fill="#5a7a2a"/><text x="300" y="60" font-size="14" fill="#5a7a2a" text-anchor="middle">一张推倒下一张，连锁传递</text><text x="40" y="232" font-size="15" fill="#33536e">说明：推倒第一张（归纳奠基：n=n₀ 成立），</text><text x="40" y="254" font-size="15" fill="#33536e">任意一张倒下都能推倒其后一张（归纳递推），最终全部倒下。</text></svg>', caption: '图1　多米诺骨牌：起点推倒后连锁传递，类比归纳奠基与递推。' },
        { type: 'list', items: ['证明与正整数 n 有关的恒等式，如求和公式', '证明与 n 有关的不等式', '证明整除性、几何计数等随 n 递推的命题', '不适用于 n 取连续实数或 n 无关的命题'] },
        { type: 'heading', text: '二、证题的两个步骤' },
        { type: 'keypoint', label: '重点·步骤', text: '数学归纳法证明分两步：<br><strong>① 归纳奠基</strong>：证明当 n 取第一个值 n₀（如 n₀=1 或 2）时命题成立；<br><strong>② 归纳递推</strong>：假设当 n=k（k≥n₀，k∈N*）时命题成立，证明当 n=k+1 时命题也成立。<br>两步完成，即可判定命题对所有 n≥n₀ 的正整数成立。' },
        { type: 'paragraph', text: '完整的数学归纳法证明由两个步骤组成。第一步归纳奠基确定起点，第二步归纳递推搭建桥梁。两步必须同时具备，缺一不可：缺了奠基就没有起点，缺了递推就无法向后传递，只有二者齐备才能判定命题对所有 n ≥ n₀ 成立。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">数学归纳法证明步骤</text><rect x="40" y="68" width="160" height="56" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="120" y="93" font-size="15" fill="#2b5b9e" text-anchor="middle">① 归纳奠基</text><text x="120" y="113" font-size="13" fill="#33536e" text-anchor="middle">证 n=n₀ 成立</text><rect x="260" y="68" width="160" height="56" rx="8" fill="#d7e9d0" stroke="#5a7a2a" stroke-width="2"/><text x="340" y="93" font-size="15" fill="#33536e" text-anchor="middle">② 归纳假设</text><text x="340" y="113" font-size="13" fill="#33536e" text-anchor="middle">设 n=k 成立</text><rect x="480" y="68" width="160" height="56" rx="8" fill="#e6dcf0" stroke="#7a5aa0" stroke-width="2"/><text x="560" y="93" font-size="15" fill="#7a5aa0" text-anchor="middle">③ 归纳递推</text><text x="560" y="113" font-size="13" fill="#33536e" text-anchor="middle">证 n=k+1 成立</text><line x1="200" y1="96" x2="260" y2="96" stroke="#4a7de0" stroke-width="2"/><polygon points="260,96 248,90 248,102" fill="#4a7de0"/><line x1="420" y1="96" x2="480" y2="96" stroke="#4a7de0" stroke-width="2"/><polygon points="480,96 468,90 468,102" fill="#4a7de0"/><text x="40" y="166" font-size="15" fill="#33536e">说明：三步缺一不可——奠基是起点，假设是桥梁，递推保证从 n₀ 起全部成立。</text><text x="40" y="188" font-size="15" fill="#33536e">只有完成①与②，才能判定命题对所有 n ≥ n₀ 的正整数都成立。</text></svg>', caption: '图2　证明三步：归纳奠基 → 归纳假设 → 归纳递推。' },
        { type: 'example', label: '例题1', text: '用数学归纳法证明 1+2+…+n = n(n+1)/2（n∈N*）。<br><br><strong>证明</strong>：① 奠基：n=1，左边=1，右边=1×2/2=1，成立。<br>② 递推：假设 n=k 时成立，即 1+2+…+k = k(k+1)/2。<br>当 n=k+1 时，左边 = k(k+1)/2 + (k+1) = (k+1)(k/2+1) = (k+1)(k+2)/2，恰为 n=k+1 时的右边，成立。<br>由①②，命题对一切 n∈N* 成立。' },
        { type: 'example', label: '例题2', text: '证明 1+3+5+…+(2n−1) = n²（n∈N*）。<br><br><strong>证明</strong>：① 奠基：n=1，左边=1，右边=1²=1，成立。<br>② 递推：假设 n=k 时成立，即 1+3+…+(2k−1) = k²。<br>当 n=k+1 时，左边 = k² + (2k+1) = (k+1)²，恰为 n=k+1 时的右边，成立。<br>由①②，命题对一切 n∈N* 成立。' },
        { type: 'example', label: '例题3', text: '证明 2⁰+2¹+…+2ⁿ⁻¹ = 2ⁿ − 1（n∈N*）。<br><br><strong>证明</strong>：① 奠基：n=1，左边=2⁰=1，右边=2¹−1=1，成立。<br>② 递推：假设 n=k 时成立，即 2⁰+…+2ᵏ⁻¹ = 2ᵏ−1。<br>当 n=k+1 时，左边 = (2ᵏ−1) + 2ᵏ = 2·2ᵏ − 1 = 2ᵏ⁺¹ − 1，成立。<br>由①②，命题对一切 n∈N* 成立。' },
        { type: 'warn', label: '易错', text: '归纳递推中极易出现两类失误：<strong>一是忘记写归纳假设</strong>，直接用 n=k+1 的式子，逻辑不成立；<strong>二是没有“用上”归纳假设</strong>，证明过程与 k 无关。正确做法是明确写出“假设 n=k 时成立”，并在推导 n=k+1 时主动利用该假设。' },
        { type: 'list', items: ['奠基起点 n₀ 要选准，未必都是 1', '归纳假设必须明确写出“设 n=k 成立”', '递推目标必须是 n=k+1，且要真正用上假设', '两步齐备才能下结论，缺一不可'] },
        { type: 'tip', label: '提示', text: '写好归纳递推的秘诀是：<strong>盯住 n=k+1 的目标式，再把 n=k 的假设“加一项”凑出来</strong>。例如求和题，就在 k 项和的基础上补上第 k+1 项，再通过变形化为 k+1 时的形式。' },
        { type: 'heading', text: '三、从 k 到 k+1 的递推' },
        { type: 'paragraph', text: '归纳递推是整个方法的关键。在假设 n=k 成立的前提下，要把结论从 k 推向 k+1，往往需要借助 n=k 时的表达式，通过代数恒等变形（如配方、提取公因式）证明 n=k+1 时形式一致。这一步体现了从有限推向无限的递推思想。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">归纳递推：由 n=k 推出 n=k+1</text><rect x="120" y="80" width="150" height="64" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="195" y="112" font-size="16" fill="#2b5b9e" text-anchor="middle">n = k 成立</text><text x="195" y="134" font-size="13" fill="#33536e" text-anchor="middle">（归纳假设）</text><rect x="410" y="80" width="150" height="64" rx="8" fill="#d7e9d0" stroke="#5a7a2a" stroke-width="2"/><text x="485" y="112" font-size="16" fill="#33536e" text-anchor="middle">n = k+1 成立</text><text x="485" y="134" font-size="13" fill="#33536e" text-anchor="middle">（递推目标）</text><line x1="270" y1="112" x2="410" y2="112" stroke="#e05d44" stroke-width="3"/><polygon points="410,112 396,105 396,119" fill="#e05d44"/><text x="340" y="172" font-size="15" fill="#33536e" text-anchor="middle">说明：在“n=k 成立”的前提下，通过恒等变形</text><text x="340" y="194" font-size="15" fill="#33536e" text-anchor="middle">证明“n=k+1 也成立”，完成从 k 到 k+1 的传递。</text></svg>', caption: '图3　归纳递推：以 n=k 成立为跳板，推出 n=k+1 成立。' },
        { type: 'table', headers: ['步骤', '名称', '要做什么', '符号/起点'], rows: [['①', '归纳奠基', '证明 n 取第一个值 n₀ 时命题成立', 'n=n₀'], ['②', '归纳假设', '假设 n=k（k≥n₀）时命题成立', '设 n=k'], ['③', '归纳递推', '由 n=k 成立推出 n=k+1 成立', '证 n=k+1']] },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['数学归纳法适用于与正整数 n 有关的命题', '两步：归纳奠基（证 n=n₀）+ 归纳递推（由 k 推 k+1）', '归纳假设是递推桥梁，必须写出并真正使用', '递推核心是凑出 n=k+1 的目标式', '两步缺一不可，否则证明无效'] }
      ],
      exercises: [
        { type: 'choice', question: '数学归纳法的第一步是？', options: ['归纳奠基，证明 n=n₀ 时命题成立', '归纳递推，证明 n=k+1 成立', '归纳假设，设 n=k 成立', '直接写出结论'], answer: '归纳奠基，证明 n=n₀ 时命题成立', explanation: '数学归纳法包含两个必要步骤，第一步是归纳奠基：取命题涉及的最小正整数为起点 n₀（如 n₀=1 或 2），直接验证当 n=n₀ 时命题成立。这是整个证明的根基，没有起点就无法递推，因此必须首先完成归纳奠基。' },
        { type: 'choice', question: '数学归纳法的第二步要假设什么？', options: ['假设 n=k 时命题成立，证 n=k+1 成立', '假设 n=1 时成立', '假设结论已经成立', '假设 n 取任意值'], answer: '假设 n=k 时命题成立，证 n=k+1 成立', explanation: '第二步为归纳递推，其核心是归纳假设：先假设当 n=k（k≥n₀，k 为正整数）时命题已经成立，再在这一假设基础上，通过恒等变形证明当 n=k+1 时命题也成立。这一步架起了从 k 到 k+1 的桥梁，保证结论向后传递。' },
        { type: 'choice', question: '数学归纳法主要适用于哪一类命题？', options: ['与正整数 n 有关的命题', '所有代数等式', '几何图形问题', '任意数学命题'], answer: '与正整数 n 有关的命题', explanation: '数学归纳法专门用来证明与正整数 n 有关的命题，例如恒等式、不等式、整除性问题等，只要结论随正整数 n 变化且能建立递推关系即可使用。它不适用于与 n 无关或 n 取连续实数值的情形，使用前应确认命题对象为正整数。' },
        { type: 'fill', question: '用归纳法证 1+2+…+n = n(n+1)/2，第一步 n=1 时：左边 = ____，右边 = ____。', answer: '1, 1', explanation: '用归纳法证明 1+2+…+n = n(n+1)/2 时，第一步归纳奠基取 n=1。此时等式左边为 1（只有一项），右边代入 n=1 得 1×(1+1)/2 = 1，左右相等，奠基成立。所以左边填 1，右边填 1。' },
        { type: 'fill', question: '在归纳递推中，“假设 n=k 时命题成立”这一步称为 ____。', answer: '归纳假设', explanation: '在归纳递推环节，先假定当 n=k 时命题成立，这一前提叫做归纳假设。它既不是已经证出的最终结论，也不是随意设定，而是递推的跳板：必须在它的基础上推出 n=k+1 成立，整个归纳链条才得以延续。' }
      ]
    }

  );
})();
