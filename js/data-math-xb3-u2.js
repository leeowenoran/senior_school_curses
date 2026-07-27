/* ============================================================
 * 高二数学 · 选择性必修 第三册 · 第六章 计数原理
 * 第1课时：组合（人教A版 §6.2.2）
 * 第2课时：二项式定理（人教A版 §6.3）
 * 数据注入：math.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'xb3');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 组合 ---------------- */
    {
      id: 'xb3-u2-l1',
      name: '组合',
      chapter: '第六章 计数原理 · 6.2.2',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、组合的概念' },
        { type: 'paragraph', text: '计数问题中，除了考虑“排顺序”的排列，更常见的是只关心“选出了哪些元素”、而不关心它们的先后顺序。这种只取不排的问题，就是组合。组合与排列同属计数原理的核心内容，区别在于是否考虑顺序。' },
        { type: 'keypoint', label: '重点·组合定义', text: '一般地，从 n 个<strong>不同</strong>元素中取出 m（m ≤ n）个元素<strong>作为一组</strong>，叫做从 n 个不同元素中取出 m 个元素的一个<strong>组合</strong>。组合只关注“取到了哪些元素”，与取出的先后顺序无关。' },
        { type: 'paragraph', text: '与排列对应，我们记“从 n 个不同元素中取出 m 个元素的组合数”为 C_n^m（也写作 C(n,m)）。组合数 C_n^m 表示满足条件的组合的个数，而不是具体的某一组。' },
        { type: 'keypoint', label: '重点·组合数记号', text: 'C_n^m 中，n 是总元素个数，m 是每次取出的个数，且 <strong>m ≤ n</strong>。例如 C_5^2 表示从 5 个不同元素中任取 2 个组成一组的组数。注意组合数是一个“数”，不是“一种排法”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">组合 vs 排列：与顺序是否有关</text><text x="30" y="62" font-size="15" fill="#33536e">① 组合（组队）：从 4 人中选 2 人，与顺序无关</text><g><circle cx="70" cy="100" r="16" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><circle cx="120" cy="100" r="16" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><circle cx="170" cy="100" r="16" fill="#eef4fc" stroke="#4a7de0" stroke-width="2"/><circle cx="220" cy="100" r="16" fill="#eef4fc" stroke="#4a7de0" stroke-width="2"/></g><text x="30" y="152" font-size="15" fill="#33536e">② 排列（排座）：同一 2 人排 2 个座位，与顺序有关</text><g font-size="15" fill="#2b5b9e"><text x="70" y="190">甲乙</text><text x="150" y="190">乙甲</text></g><line x1="105" y1="178" x2="105" y2="198" stroke="#4a7de0" stroke-width="2"/><line x1="185" y1="178" x2="185" y2="198" stroke="#4a7de0" stroke-width="2"/><text x="30" y="226" font-size="15" fill="#c0392b">结论：每种组合对应 2! = 2 种排列，排列数 = 组合数 × m!</text><text x="30" y="248" font-size="15" fill="#33536e">即 A_n^m = C_n^m · m!，故 C_n^m = A_n^m / m!</text></svg>', caption: '图1　组合只选不排（与顺序无关），排列还要排顺序（与顺序有关）。' },
        { type: 'heading', text: '二、组合数公式' },
        { type: 'paragraph', text: '组合数可以通过排列数推导得到：先对取出的 m 个元素做全排列（有 m! 种），再除以这些元素内部的顺序，就得到组合数。这就是公式的核心思想。' },
        { type: 'keypoint', label: '重点·组合数公式', text: 'C_n^m = A_n^m / A_m^m = n! / [m!(n-m)!]。<br>规定 <strong>C_n^0 = 1</strong>（从 n 个元素中一个都不取，只有一种取法）。<br>当 m = n 时，C_n^n = 1。' },
        { type: 'list', items: ['C_n^m = A_n^m / m!（先排后除）', 'C_n^m = n! / [m!(n-m)!]（阶乘形式，最常用）', '规定 C_n^0 = 1，且 C_n^n = 1'] },
        { type: 'example', label: '例题1', text: '求 C_5^2 的值。<br><br><strong>解</strong>：由公式 C_n^m = n(n-1)…(n-m+1) / m!，得 C_5^2 = (5×4) / (2×1) = 20 / 2 = <strong>10</strong>。<br>即 5 个不同元素中任取 2 个，共有 10 种组合。' },
        { type: 'warn', label: '易错', text: '使用公式时务必注意 <strong>m ≤ n</strong>，且 m、n 均为非负整数。常见错误是把 C_n^m 与 A_n^m 混淆：A_n^m 含顺序、数值更大；C_n^m 不含顺序。另外 C_n^0 = 1 是人为规定，不要误写成 0。' },
        { type: 'example', label: '例题2', text: '从 10 名同学中任选 3 人组成一支小队，共有多少种选法？<br><br><strong>解</strong>：只选人不排顺序，是组合问题。<br>C_10^3 = 10! / (3!·7!) = (10×9×8) / (3×2×1) = 720 / 6 = <strong>120</strong>。<br>答：共有 120 种选法。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">组合数公式的约分来源</text><text x="40" y="80" font-size="16" fill="#33536e">A_n^m = n(n-1)…(n-m+1) = n! / (n-m)!</text><text x="40" y="115" font-size="16" fill="#33536e">A_m^m = m! = 1·2·…·m</text><text x="40" y="155" font-size="16" fill="#2b5b9e">C_n^m = A_n^m / A_m^m = [n!/(n-m)!] / m! = n! / [m!(n-m)!]</text><text x="40" y="195" font-size="15" fill="#c0392b">即先全排列，再除以 m 个元素的内部顺序 m!</text><text x="40" y="218" font-size="15" fill="#33536e">约定 C_n^0 = 1（什么都不取，只有一种取法）</text></svg>', caption: '图2　组合数公式由排列数约分而来：去掉 m 个元素的内部顺序。' },
        { type: 'heading', text: '三、组合数的两个重要性质' },
        { type: 'keypoint', label: '重点·对称性', text: 'C_n^m = C_n^{n-m}。<br>含义：从 n 个中取 m 个，等价于“留下”n-m 个不取，两者取法数相同。利用对称性可把<strong>大下标化为小下标</strong>，简化计算。' },
        { type: 'keypoint', label: '重点·递推公式', text: 'C_n^m + C_n^{m-1} = C_{n+1}^m（n ≥ 1，m ≥ 1）。<br>这正是杨辉三角“肩上两数之和”的代数表达，常用于推导与证明。' },
        { type: 'example', label: '例题3', text: '利用对称性计算 C_8^6。<br><br><strong>解</strong>：由 C_n^m = C_n^{n-m}，得 C_8^6 = C_8^{8-6} = C_8^2。<br>C_8^2 = (8×7) / (2×1) = 56 / 2 = <strong>28</strong>。故 C_8^6 = 28。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">对称性：C_n^m = C_n^{n-m}</text><circle cx="150" cy="120" r="70" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="530" cy="120" r="70" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="150" y="115" font-size="15" fill="#2b5b9e" text-anchor="middle">取出 m 个</text><text x="150" y="138" font-size="15" fill="#2b5b9e" text-anchor="middle">（被选中的）</text><text x="530" y="115" font-size="15" fill="#c0392b" text-anchor="middle">留下 n-m 个</text><text x="530" y="138" font-size="15" fill="#c0392b" text-anchor="middle">（未选中的）</text><text x="340" y="100" font-size="16" fill="#33536e" text-anchor="middle">从 n 个中取 m 个</text><text x="340" y="125" font-size="16" fill="#33536e" text-anchor="middle">等价于</text><text x="340" y="150" font-size="16" fill="#33536e" text-anchor="middle">留下 n-m 个</text><line x1="225" y1="120" x2="455" y2="120" stroke="#4a7de0" stroke-width="2" stroke-dasharray="6 5"/><text x="340" y="208" font-size="15" fill="#c0392b" text-anchor="middle">例：C_8^6 = C_8^2 = 28，选 6 个 = 留 2 个</text><text x="340" y="230" font-size="15" fill="#33536e" text-anchor="middle">对称性可把大下标化为小下标，简化计算</text></svg>', caption: '图3　从 n 个取 m 个，等价于留下 n-m 个，故两种组合数相等。' },
        { type: 'heading', text: '四、排列与组合的区别' },
        { type: 'table', headers: ['对比', '排列', '组合'], rows: [['是否考虑顺序', '与顺序有关', '与顺序无关'], ['计数结果', 'A_n^m（较大）', 'C_n^m（较小）'], ['典型说法', '排座位、排队、编号', '组队、选人、取物品'], ['二者联系', 'A_n^m = C_n^m · m!', 'C_n^m = A_n^m / m!']] },
        { type: 'list', items: ['审题抓住“顺序”：说法含排、列、先后、编号 → 排列', '说法含组、选、取、队、集合 → 组合', '“先选后排”常把组合与排列结合考查'] },
        { type: 'tip', label: '提示', text: '判断一个问题是排列还是组合，最直接的方法是：<strong>交换其中两个元素的位置，若结果算“不同”则为排列，若算“相同”则为组合</strong>。例如选出的两人互换位置，小队不变 → 组合；两人互换座位，结果不同 → 排列。' },
        { type: 'heading', text: '五、常见类型与综合应用' },
        { type: 'paragraph', text: '组合应用题常见的类型有：“含”与“不含”某些元素、“至多”“至少”若干、以及分组分配问题。解题的关键是正确分类或分步，并用乘法、加法原理组合组合数。' },
        { type: 'example', label: '例题4', text: '从 5 名男生、4 名女生中选 3 人，要求恰有 1 名女生，有多少种选法？<br><br><strong>解</strong>：分两步——先选 1 名女生：C_4^1 = 4 种；再选 2 名男生：C_5^2 = 10 种。<br>由乘法原理，共 C_4^1 · C_5^2 = 4 × 10 = <strong>40</strong> 种。' },
        { type: 'warn', label: '易错', text: '“至多”“至少”类问题易漏算或重复。一般有两种思路：① <strong>直接分类</strong>（按满足条件的各种情况分别算再加总）；② <strong>间接法</strong>（总选法减去不满足的选法）。注意“恰有”与“至少”含义不同，切勿混用。' },
        { type: 'keypoint', label: '重点·含与不含', text: '“含某元素”= 该元素必选，再从其余中选；“不含某元素”= 该元素不选，只在剩余元素中选。两类都先把“确定选/不选”的元素固定，再对剩余元素用组合数。' },
        { type: 'list', items: ['含 k 个指定元素：先固定，再 C_{剩余}^{还需}', '不含某元素：直接从剩余元素中选取', '至多/至少：分类相加，或用总数减去反面'] },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['组合：从 n 个中取 m 个成一组，与顺序无关', '组合数 C_n^m = n! / [m!(n-m)!]，规定 C_n^0 = 1', '性质：对称性 C_n^m = C_n^{n-m}，递推 C_n^m + C_n^{m-1} = C_{n+1}^m', '排列与组合的根本区别：是否考虑顺序', '常见类型：含/不含、至多/至少、分组分配', '判断技巧：交换两元素位置看结果是否变化'] }
      ],
      exercises: [
        { type: 'choice', question: '计算 C_5^2 的值。', options: ['5', '10', '20', '25'], answer: '10', explanation: '由组合数公式 C_5^2 = (5×4)/(2×1) = 20/2 = 10。组合表示从 5 个不同元素中任取 2 个成一组，不区分顺序，因此结果为 10。选项 5、20、25 分别错在只算分子、未除以 2! 或计算有误。' },
        { type: 'choice', question: '组合数与排列数的根本区别在于？', options: ['组合数结果更大', '组合与顺序无关，排列与顺序有关', '排列与顺序无关，组合与顺序有关', '两者没有区别'], answer: '组合与顺序无关，排列与顺序有关', explanation: '排列与组合的根本区别在于是否考虑元素的先后顺序。排列把取出的元素按一定顺序排成一列，交换元素位置视为不同结果；组合只关心取到了哪些元素，交换位置仍视为同一种，与顺序无关。因此组合与顺序无关、排列与顺序有关。' },
        { type: 'choice', question: '按教材约定，C_n^0 等于？', options: ['0', '1', 'n', 'n!'], answer: '1', explanation: '按教材规定，从 n 个元素中一个都不取（取 0 个）只有一种取法，故约定 C_n^0 = 1。这与 C_n^n = 1 一致（全取也只有一种）。选项 0、n、n! 都不符合组合数定义与该约定。' },
        { type: 'fill', question: 'C_6^3 = ____。', answer: '20', explanation: '由组合数公式 C_6^3 = 6!/(3!·3!) = (6×5×4)/(3×2×1) = 120/6 = 20。也可逐步计算：从 6 个中取 3 个，先算 6×5×4 = 120，再除以 3! = 6，得 20。' },
        { type: 'fill', question: '从 10 个不同元素中任取 2 个，组合数为 C_10^2 = ____。', answer: '45', explanation: '从 10 个不同元素中任取 2 个组成一组，是组合问题，组合数为 C_10^2 = (10×9)/(2×1) = 90/2 = 45。注意组合与顺序无关，因此只除以 2! 而非再乘排列，结果为 45。' }
      ]
    },

    /* ---------------- 第2课时 二项式定理 ---------------- */
    {
      id: 'xb3-u2-l2',
      name: '二项式定理',
      chapter: '第六章 计数原理 · 6.3',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、二项式定理' },
        { type: 'paragraph', text: '二项式定理给出了 (a+b)^n 展开后的确切形式，把高次幂展开为若干个项的和。它是计数原理（尤其是组合）在代数中的直接应用，展开式中每一项的系数正是组合数。' },
        { type: 'keypoint', label: '重点·二项式定理', text: '对 n ∈ N*，有<br>(a+b)^n = C_n^0 a^n + C_n^1 a^{n-1}b + … + C_n^r a^{n-r}b^r + … + C_n^n b^n。<br>展开式共有 <strong>n+1 项</strong>，第 r+1 项（r = 0,1,…,n）的系数为二项系数 C_n^r。' },
        { type: 'paragraph', text: '观察展开式可以发现明显的规律：a 的指数从 n 逐项减到 0，b 的指数从 0 逐项增到 n，而每一项的系数恰好是杨辉三角对应行的数。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">(a+b)^n 展开式的结构</text><text x="40" y="75" font-size="16" fill="#2b5b9e">(a+b)^n = C_n^0 a^n + C_n^1 a^{n-1}b + … + C_n^r a^{n-r}b^r + … + C_n^n b^n</text><g font-size="15" fill="#33536e"><text x="40" y="120">a 的指数：n → n-1 → … → 0（逐项递减 1）</text><text x="40" y="148">b 的指数：0 → 1 → … → n（逐项递增 1）</text><text x="40" y="176">二项系数：C_n^0, C_n^1, …, C_n^n（即杨辉三角第 n+1 行）</text></g><text x="40" y="220" font-size="15" fill="#c0392b">每一项中 a、b 的指数之和恒为 n</text><text x="40" y="244" font-size="15" fill="#33536e">共 n+1 项，第 r+1 项 T_{r+1} = C_n^r a^{n-r} b^r（r = 0,1,…,n）</text></svg>', caption: '图1　展开式中 a 的指数递减、b 的指数递增，系数为对应行的组合数。' },
        { type: 'heading', text: '二、通项公式' },
        { type: 'keypoint', label: '重点·通项公式', text: '展开式第 r+1 项记为 T_{r+1}，则<br>T_{r+1} = C_n^r a^{n-r} b^r（r = 0,1,…,n）。<br>这是求“某一项”或“某次幂项系数”的核心工具，务必记清 a、b 的指数分别是 n-r 与 r。' },
        { type: 'example', label: '例题1', text: '展开 (x+1)^5。<br><br><strong>解</strong>：由定理，系数即杨辉三角第 6 行 1,5,10,10,5,1。<br>(x+1)^5 = C_5^0 x^5 + C_5^1 x^4·1 + C_5^2 x^3·1² + C_5^3 x^2·1³ + C_5^4 x·1⁴ + C_5^5·1⁵<br>= x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1。' },
        { type: 'example', label: '例题2', text: '求 (x+2)^6 展开式中 x^3 项的系数。<br><br><strong>解</strong>：通项 T_{r+1} = C_6^r x^{6-r} · 2^r。令 a 的指数 6-r = 3，得 r = 3。<br>该项为 C_6^3 x^3 · 2^3 = 20 × 8 · x^3 = 160 x^3。<br>故 x^3 项的系数为 <strong>160</strong>。' },
        { type: 'warn', label: '易错', text: '通项中 r 从 <strong>0</strong> 开始取值，第 r+1 项对应指数 r，不是第 r 项。常见错误是“找 x^3 就令 r = 3”，实际应令 a 的指数 n-r = 3。另外要区分“二项式系数 C_n^r”与“项的系数”（含 a、b 中的常数），二者一般不同。' },
        { type: 'heading', text: '三、二项式系数的性质' },
        { type: 'keypoint', label: '重点·对称性', text: '与首末“等距离”的两项二项式系数相等，即 C_n^m = C_n^{n-m}。图象上关于中间对称。' },
        { type: 'keypoint', label: '重点·增减性与最大值', text: '二项式系数先增后减。当 <strong>n 为偶数</strong>时，中间一项（第 n/2+1 项）最大；当 <strong>n 为奇数</strong>时，中间两项（第 (n+1)/2 项与第 (n+3)/2 项）相等且最大。' },
        { type: 'keypoint', label: '重点·各项系数和', text: '令 a = b = 1，得 (1+1)^n = 2^n，故<br>各二项式系数之和 C_n^0 + C_n^1 + … + C_n^n = <strong>2^n</strong>。' },
        { type: 'example', label: '例题3', text: '求 (a+b)^6 展开式各项二项式系数之和。<br><br><strong>解</strong>：由性质，各项二项式系数和为 2^n。取 n = 6，得 2^6 = <strong>64</strong>。也可直接加：1+6+15+20+15+6+1 = 64。' },
        { type: 'list', items: ['对称性：C_n^m = C_n^{n-m}', '增减性：先增后减，中间最大', '偶数 n：一项最大；奇数 n：两项最大', '系数和：C_n^0+…+C_n^n = 2^n'] },
        { type: 'heading', text: '四、杨辉三角' },
        { type: 'paragraph', text: '我国古代数学家杨辉在《详解九章算法》中记载了如下三角数表，西方称为帕斯卡三角。它直观呈现了二项式系数的对称与递推关系。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">杨辉三角（每个数 = 肩上两数之和）</text><g font-size="14" fill="#2b5b9e" text-anchor="middle"><text x="340" y="70">1</text><text x="310" y="98">1</text><text x="370" y="98">1</text><text x="280" y="126">1</text><text x="340" y="126">2</text><text x="400" y="126">1</text><text x="250" y="154">1</text><text x="310" y="154">3</text><text x="370" y="154">3</text><text x="430" y="154">1</text><text x="220" y="182">1</text><text x="280" y="182">4</text><text x="340" y="182">6</text><text x="400" y="182">4</text><text x="460" y="182">1</text><text x="190" y="210">1</text><text x="250" y="210">5</text><text x="310" y="210">10</text><text x="370" y="210">10</text><text x="430" y="210">5</text><text x="490" y="210">1</text></g><text x="340" y="245" font-size="14" fill="#33536e" text-anchor="middle">第 n+1 行（n 从 0 计）就是 (a+b)^n 的二项系数</text><text x="340" y="268" font-size="14" fill="#c0392b" text-anchor="middle">如第 6 行 1,5,10,10,5,1 即 (a+b)^5 的系数</text></svg>', caption: '图2　杨辉三角每一行对应一个二项式的系数，内部数为肩上两数之和。' },
        { type: 'table', headers: ['行（n）', '各项二项式系数', '行和'], rows: [['n = 0', '1', '1 = 2^0'], ['n = 1', '1, 1', '2 = 2^1'], ['n = 2', '1, 2, 1', '4 = 2^2'], ['n = 3', '1, 3, 3, 1', '8 = 2^3'], ['n = 4', '1, 4, 6, 4, 1', '16 = 2^4'], ['n = 5', '1, 5, 10, 10, 5, 1', '32 = 2^5']] },
        { type: 'tip', label: '提示', text: '杨辉三角的构造规律：<strong>每行首尾都是 1，内部每个数等于它“肩上”两个数之和</strong>。第 n+1 行（从第 0 行起）就是 (a+b)^n 的二项式系数，因此可用来快速写出低次幂展开式。' },
        { type: 'heading', text: '五、二项式系数的图象（增减与对称）' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">二项系数的增减性与对称性（n 为偶数时）</text><polyline points="120,230 180,150 240,90 300,60 360,90 420,150 480,230" fill="none" stroke="#4a7de0" stroke-width="3"/><g fill="#2b5b9e"><circle cx="120" cy="230" r="5"/><circle cx="180" cy="150" r="5"/><circle cx="240" cy="90" r="5"/><circle cx="300" cy="60" r="7" fill="#e05d44"/><circle cx="360" cy="90" r="5"/><circle cx="420" cy="150" r="5"/><circle cx="480" cy="230" r="5"/></g><line x1="300" y1="40" x2="300" y2="250" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="5 4"/><text x="300" y="262" font-size="14" fill="#33536e" text-anchor="middle">先增后减、左右对称；n 偶时中间一项最大</text><text x="300" y="278" font-size="13" fill="#33536e" text-anchor="middle">n 为奇数时中间两项相等且最大</text></svg>', caption: '图3　二项式系数图象呈钟形：关于中间对称，先增后减，中间最大。' },
        { type: 'list', items: ['以 r 为横轴、C_n^r 为纵轴，图象呈“钟形”', '关于直线 r = n/2 对称', 'n 偶：顶点在中间一项；n 奇：两个等高顶点', '利用对称性可少算一半系数'] },
        { type: 'heading', text: '六、常见题型与注意' },
        { type: 'paragraph', text: '二项式定理的常考题型包括：直接展开、求指定项或其系数、求系数和（赋值法）、利用性质比较大小。赋值法（令 a、b 取特殊值）是求“系数和”“奇偶项和”的利器。' },
        { type: 'warn', label: '易错', text: '务必分清 <strong>“二项式系数”</strong>与<strong>“项的系数”</strong>：前者恒为 C_n^r，只与 n、r 有关；后者还可能含 a、b 中的常数（如 (x+2)^n 中的 2^r），二者往往不同。求“系数和”时注意代入的是字母的值而非指数。' },
        { type: 'example', label: '例题（综合）', text: '已知 (1+x)^n 展开式中第 3 项与第 5 项的二项式系数相等，求 n。<br><br><strong>解</strong>：第 3 项对应 r = 2，系数为 C_n^2；第 5 项对应 r = 4，系数为 C_n^4。<br>由 C_n^2 = C_n^4，据对称性得 2 = n-4，故 n = 6。' },
        { type: 'tip', label: '提示', text: '遇到“某两项系数相等 / 最大 / 最小”问题，优先考虑<strong>对称性</strong>和<strong>增减性</strong>。求系数和优先使用<strong>赋值法</strong>：令所有字母为 1 得各项系数和，令为 -1 可得正负交错和，二者相减或相加可分离奇偶项。' },
        { type: 'heading', text: '七、本课小结' },
        { type: 'list', items: ['(a+b)^n 展开共 n+1 项，系数为 C_n^r', '通项 T_{r+1} = C_n^r a^{n-r} b^r（r 从 0 起）', '性质：对称、先增后减、系数和 2^n', '杨辉三角：肩上两数之和，即二项式系数', '区分二项式系数与项的系数', '赋值法是求系数和的关键技巧'] }
      ],
      exercises: [
        { type: 'choice', question: '(a+b)^n 展开式中各项的二项式系数之和为？', options: ['n', 'n+1', '2^n', '2n'], answer: '2^n', explanation: '令 a = b = 1，则 (1+1)^n = 2^n，其展开式左边等于各项二项式系数之和，故各项二项式系数之和为 2^n。这与杨辉三角第 n+1 行的行和相等。选项 n、n+1、2n 都不正确。' },
        { type: 'choice', question: '(a+b)^n 展开式的通项（第 r+1 项）是？', options: ['C_n^r a^r b^{n-r}', 'C_n^r a^{n-r} b^r', 'C_n^{r+1} a^{n-r} b^r', 'C_n^r a^n b^r'], answer: 'C_n^r a^{n-r} b^r', explanation: '二项式定理展开式中，第 r+1 项（r 从 0 起）为 T_{r+1} = C_n^r a^{n-r} b^r，其中 a 的指数为 n-r，b 的指数为 r。注意是“第 r+1 项”而非“第 r 项”，且 a、b 指数之和为 n。其余选项指数或系数标号有误。' },
        { type: 'choice', question: '当 n 为偶数时，(a+b)^n 展开式二项式系数最大的是？', options: ['第 1 项', '中间一项（第 n/2+1 项）', '中间两项', '最后一项'], answer: '中间一项（第 n/2+1 项）', explanation: '二项式系数先增后减且关于中间对称。当 n 为偶数时，最大项出现在正中间，即第 n/2+1 项（其系数 C_n^{n/2} 最大）；当 n 为奇数时才是中间两项相等且最大。故 n 偶时最大的是中间一项。' },
        { type: 'fill', question: '(1+1)^n 展开式的二项式系数和 = ____。', answer: '2^n', explanation: '令 a = b = 1 代入 (a+b)^n，得 (1+1)^n = 2^n，而等式左边展开后正是各项二项式系数相加，因此二项式系数和为 2^n。这是二项式系数和性质的特例，也可由杨辉三角各行行和验证。' },
        { type: 'fill', question: 'C_5^2 = ____。', answer: '10', explanation: '由组合数公式 C_5^2 = (5×4)/(2×1) = 20/2 = 10，即从 5 个不同元素中任取 2 个成一组共有 10 种。也可用对称性 C_5^2 = C_5^3 = 10。结果为 10。' }
      ]
    }

  );
})();
