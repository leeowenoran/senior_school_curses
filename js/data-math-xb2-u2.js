/* ============================================================
 * 高二数学 · 选择性必修 第二册 · 第四章 数列
 * 第2课时单元：等差数列前 n 项和 · 等比数列概念（人教A版 §4.2.2 / §4.3.1）
 * 数据注入：math.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'xb2');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 等差数列的前 n 项和公式 ---------------- */
    {
      id: 'xb2-u2-l1',
      name: '等差数列的前 n 项和公式',
      chapter: '第四章 数列 · 4.2.2',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、前 n 项和的概念' },
        { type: 'paragraph', text: '等差数列的前 n 项和，是指数列前 n 项相加的结果，记作 Sₙ = a₁ + a₂ + … + aₙ。高斯小时候快速算出 1 + 2 + … + 100 的故事，正是利用了等差数列求和的对称性。本节要推导并掌握等差数列前 n 项和的两个基本公式，以及它们蕴含的重要性质。' },
        { type: 'keypoint', label: '重点·定义', text: '记等差数列前 n 项的和为 <strong>Sₙ</strong>，即 Sₙ = a₁ + a₂ + … + aₙ。特别地，S₁ = a₁。前 n 项和公式以“首末项”或“首项与公差”表达，是求数列和、解数列应用题的核心工具。' },
        { type: 'paragraph', text: '两个公式形式不同，但可以相互转化，使用时根据题目所给条件灵活选择：已知首末项 a₁、aₙ 时用第一个，已知首项 a₁ 与公差 d 时用第二个。' },

        { type: 'heading', text: '二、前 n 项和公式与倒序相加法' },
        { type: 'keypoint', label: '重点·公式', text: '等差数列前 n 项和公式：<br><strong>Sₙ = n(a₁ + aₙ) / 2</strong><br><strong>Sₙ = n a₁ + n(n−1)d / 2</strong><br>第一个公式由“首项加末项”给出，第二个由“首项加公差”给出，二者等价。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="36" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">倒序相加法：把数列正写、倒写相加，每对对应项之和都等于 a₁ + aₙ</text><g font-size="18" fill="#2b5b9e" text-anchor="middle"><text x="120" y="118">a₁</text><text x="240" y="118">a₂</text><text x="360" y="118">a₃</text><text x="480" y="118">a₄</text></g><g font-size="18" fill="#2b5b9e" text-anchor="middle"><text x="120" y="232">a₄</text><text x="240" y="232">a₃</text><text x="360" y="232">a₂</text><text x="480" y="232">a₁</text></g><g stroke="#4a7de0" stroke-width="2" stroke-dasharray="4 4"><line x1="120" y1="130" x2="120" y2="220"/><line x1="240" y1="130" x2="240" y2="220"/><line x1="360" y1="130" x2="360" y2="220"/><line x1="480" y1="130" x2="480" y2="220"/></g><g font-size="16" fill="#c0392b" text-anchor="middle"><text x="120" y="268">= a₁+aₙ</text><text x="240" y="268">= a₁+aₙ</text><text x="360" y="268">= a₁+aₙ</text><text x="480" y="268">= a₁+aₙ</text></g><text x="340" y="292" font-size="15" fill="#33536e" text-anchor="middle">共 n 对，每对都是 a₁+aₙ，故 2Sₙ = n(a₁+aₙ)</text></svg>', caption: '图1　倒序相加配对示意：正写与倒写两列对应项相加，每对之和均为 a₁ + aₙ。' },
        { type: 'paragraph', text: '下面推导第一个公式。把 Sₙ 正着写一遍，再倒着写一遍，然后把两式相加，对应项就成了“首末配对”。' },
        { type: 'keypoint', label: '重点·推导（倒序相加）', text: '设 Sₙ = a₁ + a₂ + … + aₙ₋₁ + aₙ。<br>倒序得 Sₙ = aₙ + aₙ₋₁ + … + a₂ + a₁。<br>两式对应项相加：a₁ + aₙ = a₂ + aₙ₋₁ = … 都相等，共 n 对。<br>于是 2Sₙ = n(a₁ + aₙ)，即 <strong>Sₙ = n(a₁ + aₙ)/2</strong>。再把 aₙ = a₁ + (n−1)d 代入，即得第二个公式。' },
        { type: 'example', label: '例题1', text: '求等差数列 1, 3, 5, … 的前 10 项和。<br><br><strong>解</strong>：该数列 a₁ = 1，公差 d = 2，第 10 项 a₁₀ = a₁ + 9d = 1 + 18 = 19。<br>方法一（首末项）：S₁₀ = 10 × (1 + 19)/2 = 100。<br>方法二（首项公差）：S₁₀ = 10 × 1 + 10 × 9 × 2/2 = 10 + 90 = 100。<br>所以前 10 项和为 100。' },
        { type: 'example', label: '例题2', text: '已知等差数列首项 a₁ = 2，公差 d = 3，求前 n 项和 Sₙ。<br><br><strong>解</strong>：直接用第二个公式，<br>Sₙ = n a₁ + n(n−1)d/2 = 2n + n(n−1) × 3/2。<br>整理得 Sₙ = (3n² + n)/2。<br>即 Sₙ = (3n² + n)/2。' },

        { type: 'heading', text: '三、Sₙ 是关于 n 的二次函数' },
        { type: 'keypoint', label: '重点·函数视角', text: '把第二个公式按 n 的降幂排列：<br><strong>Sₙ = (d/2)n² + (a₁ − d/2)n</strong><br>当 d ≠ 0 时，Sₙ 是关于 n 的<strong>二次函数</strong>，且<strong>不含常数项</strong>（图像过原点）；当 d = 0 时，Sₙ 退化为关于 n 的正比例函数。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="36" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">Sₙ 是关于 n 的二次函数图像（抛物线过原点，无常数项）</text><g stroke="#33536e" stroke-width="2"><line x1="80" y1="250" x2="640" y2="250"/><line x1="80" y1="250" x2="80" y2="60"/></g><polygon points="640,250 628,244 628,256" fill="#33536e"/><polygon points="80,60 74,72 86,72" fill="#33536e"/><text x="652" y="255" font-size="15" fill="#33536e">n</text><text x="58" y="55" font-size="15" fill="#33536e">Sₙ</text><path d="M 80 250 C 240 248 440 150 620 70" fill="none" stroke="#4a7de0" stroke-width="3"/><circle cx="80" cy="250" r="6" fill="#e05d44"/><text x="320" y="120" font-size="15" fill="#2b5b9e">Sₙ = (d/2)n² + (a₁−d/2)n</text><text x="340" y="288" font-size="15" fill="#33536e" text-anchor="middle">当 d ≠ 0 时图像是抛物线；d = 0 时退化为过原点的直线</text></svg>', caption: '图2　Sₙ 关于 n 的图像：d ≠ 0 时为抛物线且过原点（无常数项），d = 0 时为直线。' },
        { type: 'paragraph', text: '利用这个二次形式，可以把“已知若干项和求基本量”的问题，转化为求二次函数的系数，从而使用待定系数法求解。' },
        { type: 'warn', label: '易错', text: '把 Sₙ 当作二次函数时，<strong>自变量 n 只能取正整数</strong>（n ∈ N*），不能把它当作连续变量随意代入非整数值。另外，公式中的“无常数项”指 Sₙ 表达式整理后常数项为 0，这与一般二次函数 y = An² + Bn + C（C 可不为 0）不同，求最值等问题要留意这一点。' },
        { type: 'tip', label: '提示', text: '判断一个数列的前 n 项和是否来自等差数列，可看其 Sₙ 是否为<strong>无常数项的二次函数</strong>：若 Sₙ = An² + Bn（A ≠ 0），则该数列公差为 2A、首项为 A + B。这是从“和”反推“数列”的快捷通道。' },

        { type: 'heading', text: '四、前 n 项和的性质（奇偶项分组）' },
        { type: 'keypoint', label: '重点·项数为 2n', text: '若等差数列共有 <strong>2n 项</strong>，设奇数项之和为 S_奇、偶数项之和为 S_偶，则：<br><strong>S_偶 − S_奇 = n d</strong>（每对相邻偶、奇项差一个 d，共 n 对）；<br><strong>S_偶 / S_奇 = aₙ₊₁ / aₙ</strong>。' },
        { type: 'keypoint', label: '重点·项数为 2n−1', text: '若等差数列共有 <strong>2n−1 项</strong>，则奇数项比偶数项多正中间一项 aₙ，于是：<br><strong>S_奇 − S_偶 = aₙ</strong>；<br><strong>S_奇 / S_偶 = n / (n−1)</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">奇偶项分组的性质：相邻奇偶项之差均为 d</text><text x="60" y="80" font-size="16" fill="#5a7a2a" font-weight="bold">项数为 2n 时（奇、偶各 n 项）</text><g font-size="17" fill="#2b5b9e" text-anchor="middle"><text x="120" y="120">a₁</text><text x="200" y="120">a₂</text><text x="280" y="120">a₃</text><text x="360" y="120">a₄</text></g><g stroke="#5a7a2a" stroke-width="2" fill="none"><path d="M 90 135 Q 160 165 230 135"/><path d="M 250 135 Q 320 165 390 135"/></g><g font-size="15" fill="#c0392b" text-anchor="middle"><text x="160" y="162">a₂−a₁ = d</text><text x="320" y="162">a₄−a₃ = d</text></g><text x="340" y="200" font-size="16" fill="#33536e" text-anchor="middle">S_偶 − S_奇 = (a₂−a₁)+(a₄−a₃)+… = n·d</text><text x="60" y="248" font-size="16" fill="#7a5aa0" font-weight="bold">项数为 2n−1 时（奇数项比偶数项多一个中间项 aₙ）</text><g font-size="17" fill="#2b5b9e" text-anchor="middle"><text x="140" y="290">a₁</text><text x="240" y="290">a₂</text><text x="340" y="290">aₙ</text><text x="440" y="290">a₂ₙ₋₂</text><text x="540" y="290">a₂ₙ₋₁</text></g><text x="340" y="322" font-size="16" fill="#33536e" text-anchor="middle">S_奇 − S_偶 = aₙ（多出的一项即正中项）</text></svg>', caption: '图3　奇偶项分组性质：2n 项时 S_偶 − S_奇 = nd；2n−1 项时 S_奇 − S_偶 = aₙ。' },
        { type: 'example', label: '例题3', text: '已知等差数列中 S₃ = 6，S₆ = 21，求公差 d。<br><br><strong>解</strong>：由 Sₙ = n a₁ + n(n−1)d/2，<br>S₃ = 3a₁ + 3d = 6 ⇒ a₁ + d = 2；<br>S₆ = 6a₁ + 15d = 21 ⇒ 2a₁ + 5d = 7。<br>联立：由 a₁ = 2 − d 代入第二式得 2(2 − d) + 5d = 7 ⇒ 4 + 3d = 7 ⇒ d = 1。<br>进而 a₁ = 1。所以公差 d = 1。' },

        { type: 'list', items: ['Sₙ = n(a₁+aₙ)/2 适合已知首末项', 'Sₙ = na₁ + n(n−1)d/2 适合已知首项和公差', 'Sₙ 可写成无常数项的二次函数 (d/2)n² + (a₁−d/2)n', '项数为 2n 时 S_偶−S_奇 = nd；项数为 2n−1 时 S_奇−S_偶 = aₙ'] },
        { type: 'table', headers: ['公式/性质', '表达形式', '适用情形'], rows: [['首末项公式', 'Sₙ = n(a₁+aₙ)/2', '已知 a₁ 与 aₙ（或易求 aₙ）'], ['首项公差公式', 'Sₙ = na₁ + n(n−1)d/2', '已知 a₁ 与 d'], ['二次函数形式', 'Sₙ = (d/2)n² + (a₁−d/2)n', '分析最值、反求和或判断数列'], ['2n 项奇偶性质', 'S_偶−S_奇 = nd', '项数为偶数时的分组求和'], ['2n−1 项奇偶性质', 'S_奇−S_偶 = aₙ', '项数为奇数时的分组求和']] },
        { type: 'warn', label: '易错', text: '使用奇偶项性质时，<strong>务必先确认总项数是 2n 还是 2n−1</strong>。若总项数为 2n，则奇偶项数相等（各 n 项）；若为 2n−1，则奇数项比偶数项多 1 项（中间项 aₙ）。混淆两种情形会导致符号和比值公式用错。' },
        { type: 'tip', label: '记忆', text: '奇偶项性质可这样记：把相邻“奇项、偶项”配对，偶数项总比奇数项<strong>多（或少）一个 d</strong>，配对几组就差几个 d；奇数项比偶数项“多出的那一项”恰好是正中间项 aₙ。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['两个求和公式：Sₙ = n(a₁+aₙ)/2 与 Sₙ = na₁ + n(n−1)d/2', '推导方法：倒序相加法', 'Sₙ 是关于 n 的无常数项二次函数（d ≠ 0）', '2n 项：S_偶−S_奇 = nd，S_偶/S_奇 = aₙ₊₁/aₙ', '2n−1 项：S_奇−S_偶 = aₙ，S_奇/S_偶 = n/(n−1)'] }
      ],
      exercises: [
        { type: 'choice', question: '推导等差数列前 n 项和公式 Sₙ = n(a₁+aₙ)/2 所采用的核心方法是？', options: ['错位相减法', '倒序相加法', '裂项相消法', '数学归纳法'], answer: '倒序相加法', explanation: '等差数列前 n 项和公式的推导，是把 Sₙ 正写和倒写两式相加，使对应项 a₁+aₙ、a₂+aₙ₋₁ 等每一对都相等，从而 2Sₙ = n(a₁+aₙ)。这种方法叫倒序相加法，是等差数列求和的标志性方法。错位相减用于等比数列，裂项相消与数学归纳法均不适用于此推导。' },
        { type: 'choice', question: '利用等差数列求和公式计算 1 + 2 + … + 100 的结果是？', options: ['4950', '5000', '5050', '5100'], answer: '5050', explanation: '数列 1, 2, …, 100 是首项 a₁ = 1、末项 a₁₀₀ = 100、项数 n = 100 的等差数列。由 Sₙ = n(a₁+aₙ)/2 得 S₁₀₀ = 100 × (1+100)/2 = 100 × 101/2 = 5050。这正是高斯求和的经典结果，其余选项均为常见计算错误。' },
        { type: 'choice', question: '当公差 d ≠ 0 时，等差数列前 n 项和 Sₙ 是关于 n 的什么函数？', options: ['一次函数', '无常数项的二次函数', '指数函数', '常函数'], answer: '无常数项的二次函数', explanation: '由 Sₙ = na₁ + n(n−1)d/2 展开整理得 Sₙ = (d/2)n² + (a₁ − d/2)n，是关于 n 的二次式，且常数项为 0，故图像过原点。当 d = 0 时它退化为正比例函数，但 d ≠ 0 时为无常数项的二次函数。指数与常函数均不符合。' },
        { type: 'fill', question: '等差数列首项 a₁ = 1，公差 d = 1，则其前 10 项和 S₁₀ = ____。', answer: '55', explanation: '由 Sₙ = na₁ + n(n−1)d/2，代入 a₁ = 1、d = 1、n = 10，得 S₁₀ = 10 × 1 + 10 × 9 × 1/2 = 10 + 45 = 55。也可先求 a₁₀ = 1 + 9 × 1 = 10，再用 S₁₀ = 10 × (1+10)/2 = 55 验证，两法结果一致。' },
        { type: 'fill', question: '若等差数列共有 2n 项，则其偶数项之和 S_偶 与奇数项之和 S_奇 满足 S_偶 − S_奇 = ____。', answer: 'nd', explanation: '把 2n 项按奇偶位置分成两组：奇数项为 a₁, a₃, …, a₂ₙ₋₁，偶数项为 a₂, a₄, …, a₂ₙ。每对相邻偶项比奇项多一个公差 d，即 a₂−a₁ = a₄−a₃ = … = d，共有 n 对，故 S_偶 − S_奇 = nd。注意前提是总项数恰为偶数 2n。' }
      ]
    },

    /* ---------------- 第2课时 等比数列的概念 ---------------- */
    {
      id: 'xb2-u2-l2',
      name: '等比数列的概念',
      chapter: '第四章 数列 · 4.3.1',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、等比数列的定义' },
        { type: 'paragraph', text: '等差数列研究“相邻两项之差相等”，类比地，等比数列研究“相邻两项之比相等”。等比数列在复利增长、细胞分裂、放射性衰变等实际问题中经常出现，是刻画“成倍变化”现象的基本模型。' },
        { type: 'keypoint', label: '重点·定义', text: '一般地，如果一个数列<strong>从第 2 项起，每一项与它的前一项的比</strong>都等于<strong>同一个常数</strong>，那么这个数列叫做等比数列，这个常数叫做等比数列的<strong>公比</strong>，通常用字母 <strong>q</strong> 表示（q ≠ 0）。即 aₙ / aₙ₋₁ = q（n ≥ 2）。' },
        { type: 'paragraph', text: '与等差数列的“差相等”相对照，等比数列的“比相等”是其本质特征。判断一个数列是否为等比数列，只需验证对所有 n ≥ 2，aₙ / aₙ₋₁ 是否为同一个非零常数。' },
        { type: 'warn', label: '易错', text: '等比数列有两个易错点：①<strong>公比 q 不能为 0</strong>，且数列中<strong>任何一项都不能为 0</strong>（否则比无意义）；②比值必须“从第 2 项起每一项都成立”，不能只看前几项。若某一项为 0，则该数列不可能是等比数列。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">等比数列的图像：在 n–aₙ 平面上呈指数型增长或衰减</text><g stroke="#33536e" stroke-width="2"><line x1="80" y1="250" x2="640" y2="250"/><line x1="80" y1="250" x2="80" y2="50"/></g><polygon points="640,250 628,244 628,256" fill="#33536e"/><polygon points="80,50 74,62 86,62" fill="#33536e"/><text x="652" y="255" font-size="15" fill="#33536e">n</text><text x="58" y="45" font-size="15" fill="#33536e">aₙ</text><path d="M 80 230 C 240 220 420 150 620 70" fill="none" stroke="#4a7de0" stroke-width="3"/><g fill="#e05d44"><circle cx="160" cy="222" r="6"/><circle cx="280" cy="190" r="6"/><circle cx="420" cy="140" r="6"/><circle cx="560" cy="86" r="6"/></g><g font-size="14" fill="#2b5b9e" text-anchor="middle"><text x="160" y="244">2</text><text x="280" y="212">6</text><text x="420" y="162">18</text><text x="560" y="108">54</text></g><text x="340" y="288" font-size="15" fill="#33536e" text-anchor="middle">公比 q &gt; 1 时指数增长；0 &lt; q &lt; 1 时指数衰减；q &lt; 0 时正负交替</text></svg>', caption: '图1　等比数列 2, 6, 18, 54, … 的散点落在指数型曲线上（本例公比 q = 3，呈增长）。' },

        { type: 'heading', text: '二、通项公式' },
        { type: 'keypoint', label: '重点·通项公式', text: '由定义 aₙ = aₙ₋₁ q 递推，可得等比数列通项公式：<br><strong>aₙ = a₁ q^{n−1}</strong>（n ∈ N*）。<br>它表明第 n 项由首项 a₁ 与公比 q 完全确定。' },
        { type: 'keypoint', label: '重点·通项变形', text: '通项公式的推广形式：<br><strong>aₙ = aₘ q^{n−m}</strong>（m, n ∈ N*）。<br>当已知某一项 aₘ 而不知 a₁ 时，可直接用此式，避免先求首项。' },
        { type: 'example', label: '例题1', text: '写出等比数列 2, 6, 18, 54, … 的通项公式。<br><br><strong>解</strong>：首项 a₁ = 2，公比 q = 6/2 = 3。<br>代入通项公式得 aₙ = a₁ q^{n−1} = 2 × 3^{n−1}。<br>即 aₙ = 2·3^{n−1}。' },
        { type: 'example', label: '例题2', text: '在等比数列中，已知 a₃ = 12，a₆ = 96，求公比 q 与首项 a₁。<br><br><strong>解</strong>：由通项变形 a₆ = a₃ q^{6−3} = a₃ q³，<br>即 96 = 12 q³ ⇒ q³ = 8 ⇒ q = 2。<br>再由 a₃ = a₁ q² 得 12 = a₁ × 2² = 4a₁，故 a₁ = 3。<br>所以 q = 2，a₁ = 3。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">公比 q 的几何意义：相邻两项的比值恒定</text><g font-size="20" fill="#2b5b9e" text-anchor="middle"><text x="120" y="150">a₁</text><text x="270" y="150">a₂</text><text x="420" y="150">a₃</text><text x="560" y="150">a₄</text></g><g font-size="16" fill="#c0392b" text-anchor="middle"><text x="195" y="110">q = a₂/a₁</text><text x="345" y="110">q = a₃/a₂</text><text x="490" y="110">q = a₄/a₃</text></g><text x="340" y="200" font-size="15" fill="#33536e" text-anchor="middle">每一段相邻项的后项除以前项，结果都是同一个常数 q</text><text x="340" y="250" font-size="15" fill="#33536e" text-anchor="middle">即 a₂ = a₁q，a₃ = a₂q = a₁q²，… 递推关系体现“等比”</text></svg>', caption: '图2　公比 q 的几何意义：相邻两项之比 a₂/a₁ = a₃/a₂ = a₄/a₃ = q 恒定不变。' },
        { type: 'paragraph', text: '公比 q 决定了数列的增减形态：q > 1 且 a₁ > 0 时数列递增；公比在 0 与 1 之间时数列递减并趋于 0；q = 1 时为常数列；q < 0 时数列正负交替。利用 aₙ / aₙ₋₁ = q 可快速判断数列类型。' },
        { type: 'tip', label: '提示', text: '已知相隔几项的两项求公比，优先用推广式 aₙ = aₘ q^{n−m}，先解出 q^{n−m} 再开方。开偶次方时<strong>公比可能为正也可能为负</strong>，要结合已知条件判断取舍，不要漏掉负的公比。' },

        { type: 'heading', text: '三、等比中项' },
        { type: 'keypoint', label: '重点·等比中项', text: '如果在 a 与 b 中间插入一个数 G，使 <strong>a, G, b 成等比数列</strong>，那么 G 叫做 a 与 b 的<strong>等比中项</strong>。由定义 G/a = b/G 得 <strong>G² = ab</strong>，故 <strong>G = ±√(ab)</strong>。注意要求 <strong>ab > 0</strong>（否则无实数等比中项）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">等比中项：a, G, b 成等比时 G² = ab</text><g stroke="#33536e" stroke-width="2"><line x1="80" y1="230" x2="640" y2="230"/><line x1="80" y1="230" x2="80" y2="50"/></g><path d="M 120 220 C 260 210 420 140 600 80" fill="none" stroke="#4a7de0" stroke-width="3"/><g fill="#e05d44"><circle cx="160" cy="214" r="7"/><circle cx="330" cy="172" r="7"/><circle cx="500" cy="118" r="7"/></g><g font-size="18" fill="#2b5b9e" text-anchor="middle"><text x="160" y="244">a</text><text x="330" y="202">G</text><text x="500" y="144">b</text></g><g font-size="15" fill="#c0392b" text-anchor="middle"><text x="245" y="160">G/a = q</text><text x="415" y="130">b/G = q</text></g><text x="340" y="268" font-size="15" fill="#33536e" text-anchor="middle">由 G/a = b/G 得 G² = ab；要求 ab &gt; 0，故 G = ±√(ab)</text></svg>', caption: '图3　等比中项示意：a, G, b 落在同一指数曲线上，相邻两段“倍率”相等（均为 q）。' },
        { type: 'example', label: '例题3', text: '求 4 与 9 的等比中项。<br><br><strong>解</strong>：设等比中项为 G，则 G² = 4 × 9 = 36，<br>故 G = ±6。<br>即 4, 6, 9 与 4, −6, 9 都成等比数列，等比中项为 6 或 −6。' },
        { type: 'list', items: ['定义：aₙ/aₙ₋₁ = q（n≥2），公比 q ≠ 0', '通项：aₙ = a₁ q^{n−1}；推广：aₙ = aₘ q^{n−m}', '公比 q > 1 递增，0 < q < 1 递减，q < 0 正负交替', '等比中项：G² = ab，G = ±√(ab)，要求 ab > 0'] },

        { type: 'heading', text: '四、等比与等差对照' },
        { type: 'table', headers: ['对比项', '等差数列', '等比数列'], rows: [['核心关系', 'aₙ − aₙ₋₁ = d（差相等）', 'aₙ / aₙ₋₁ = q（比相等）'], ['递推', 'aₙ = aₙ₋₁ + d', 'aₙ = aₙ₋₁ q'], ['通项', 'aₙ = a₁ + (n−1)d', 'aₙ = a₁ q^{n−1}'], ['中项', 'a, A, b 等差 ⇒ 2A = a+b', 'a, G, b 等比 ⇒ G² = ab'], ['限制', 'd 可为任意实数', 'q ≠ 0 且各项均不为 0']] },
        { type: 'warn', label: '易错', text: '等比中项与等差中项容易混淆：等差中项唯一（A = (a+b)/2），而<strong>等比中项一般有两个</strong>（G = ±√(ab)），前提是 ab > 0。当 ab < 0 时不存在实数等比中项；当 a、b 异号时只能求等差中项，不能套用 G² = ab 得到实数 G。' },
        { type: 'tip', label: '记忆', text: '记忆口诀：“等差看差、等比看比；等差中项取平均，等比中项开平方。”书写通项时，指数永远是 <strong>n−1</strong>（不是 n），因为从第 1 项到第 n 项一共乘了 n−1 次公比。' },

        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['定义：从第 2 项起，每一项与前一项的比等于同一常数 q（q ≠ 0）', '通项：aₙ = a₁ q^{n−1}，推广 aₙ = aₘ q^{n−m}', '公比决定增减：q>1 增、0<q<1 减、q<0 正负交替', '等比中项：G² = ab（要求 ab>0），G = ±√(ab)', '区分等差中项（唯一）与等比中项（通常两个）'] }
      ],
      exercises: [
        { type: 'choice', question: '关于等比数列的公比 q，下列说法正确的是？', options: ['q 可以是任意实数', 'q = aₙ / aₙ₋₁（n≥2）且 q ≠ 0', 'q 必须为正数', 'q 可以等于 0'], answer: 'q = aₙ / aₙ₋₁（n≥2）且 q ≠ 0', explanation: '等比数列定义为从第 2 项起每一项与前一项的比等于同一常数，即 q = aₙ / aₙ₋₁（n ≥ 2），且公比 q 不能为 0（否则后续项全为 0，比无意义）。故 q 不是任意实数，也不必为正数，更不可为 0。选项“q = aₙ/aₙ₋₁ 且 q ≠ 0”准确表达了定义与限制。' },
        { type: 'choice', question: '等比数列首项 a₁ = 1，公比 q = 2，则第 5 项 a₅ 等于？', options: ['8', '16', '32', '10'], answer: '16', explanation: '由通项公式 aₙ = a₁ q^{n−1}，代入 a₁ = 1、q = 2、n = 5，得 a₅ = 1 × 2^{5−1} = 2⁴ = 16。这里指数是 n−1 = 4 而不是 5，是常见易错点。其余选项或指数算错，或误用加法，均不正确。' },
        { type: 'choice', question: '若三个数 a, b, c 依次成等比数列，则它们满足？', options: ['2b = a + c', 'b² = ac', 'b = a + c', 'a² = bc'], answer: 'b² = ac', explanation: 'a, b, c 依次成等比，即 b/a = c/b，交叉相乘得 b² = ac。这是等比中项结论的特例（b 是 a、c 的等比中项）。选项 2b = a + c 是等差中项的条件，a² = bc 与 b² = ac 顺序不符，均错误。' },
        { type: 'fill', question: '2 与 8 的等比中项是 ____（两数之间用“或”连接）。', answer: '±4|4或-4', explanation: '设 2 与 8 的等比中项为 G，则由 G² = 2 × 8 = 16，得 G = ±4。即 2, 4, 8 与 2, −4, 8 都成等比数列（前者公比 2，后者公比 −2）。注意等比中项一般有两个，且要求两数同号（此处 2×8 > 0 满足），不要只写正数 4 而漏掉 −4。' },
        { type: 'fill', question: '已知等比数列通项 aₙ = 3·2^{n−1}，则其公比 q = ____。', answer: '2', explanation: '通项公式为 aₙ = a₁ q^{n−1}。已知 aₙ = 3·2^{n−1}，与标准形式对比可知 a₁ = 3，公比 q = 2（指数 n−1 上的底数即公比）。也可由相邻两项之比验证：a₂/a₁ = (3×2)/(3×1) = 2，故 q = 2。' }
      ]
    }

  );
})();
