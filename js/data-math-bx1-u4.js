/* ============================================================
 * 高一数学 · 必修 第一册 · 第二章 一元二次函数、方程和不等式
 * 第6课时：等式性质与不等式性质（人教A版 §2.1）
 * 第7课时：基本不等式（人教A版 §2.2）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;
  v.points.push(

    /* ---------------- 第6课时 等式性质与不等式性质 ---------------- */
    {
      id: 'bx1-u4-l1',
      name: '等式性质与不等式性质',
      chapter: '第二章 一元二次函数、方程和不等式 · 2.1',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、等式的基本性质' },
        { type: 'paragraph', text: '等式反映两个量“相等”的关系。研究不等式之前，先回顾等式的基本性质，因为不等式的许多性质是从等式类比而来，并在“比较方向”上做了扩展。' },
        { type: 'keypoint', label: '重点·等式性质', text: '设 a、b、c 为实数：<br>① <strong>对称性</strong>：若 a = b，则 b = a；<br>② <strong>传递性</strong>：若 a = b 且 b = c，则 a = c；<br>③ <strong>可加性</strong>：若 a = b，则 a + c = b + c；<br>④ <strong>可乘性</strong>：若 a = b，则 ac = bc（乘以任意实数仍相等）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><line x1="60" y1="150" x2="620" y2="150" stroke="#888" stroke-width="3"/><polygon points="340,150 320,132 360,132" fill="#888"/><circle cx="190" cy="118" r="20" fill="#2b5b9e"/><circle cx="190" cy="178" r="20" fill="#2b5b9e"/><circle cx="490" cy="118" r="20" fill="#4a7de0"/><circle cx="490" cy="178" r="20" fill="#4a7de0"/><text x="190" y="124" font-size="15" fill="#fff" text-anchor="middle">a</text><text x="190" y="184" font-size="15" fill="#fff" text-anchor="middle">a</text><text x="490" y="124" font-size="15" fill="#fff" text-anchor="middle">b</text><text x="490" y="184" font-size="15" fill="#fff" text-anchor="middle">b</text><text x="340" y="40" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">等式：天平两端平衡（a = b）</text><text x="340" y="205" font-size="14" fill="#33536e" text-anchor="middle">两边同加 c、同乘 c，平衡依旧保持</text></svg>', caption: '图1　等式如同天平：两边同加、同乘同一数仍平衡。' },
        { type: 'list', items: ['对称性：a = b ⇔ b = a', '传递性：a = b, b = c ⇒ a = c', '可加性：a = b ⇒ a + c = b + c', '可乘性：a = b ⇒ ac = bc'] },
        { type: 'heading', text: '二、不等式及其性质' },
        { type: 'keypoint', label: '重点·不等式性质', text: '设 a、b、c 为实数：<br>① <strong>传递性</strong>：若 a &gt; b 且 b &gt; c，则 a &gt; c；<br>② <strong>可加性</strong>：若 a &gt; b，则 a + c &gt; b + c（加减任意实数，不等号方向<strong>不变</strong>）；<br>③ <strong>可乘性</strong>：若 a &gt; b 且 c &gt; 0，则 ac &gt; bc；若 a &gt; b 且 c &lt; 0，则 ac &lt; bc（<strong>乘负数要变号</strong>）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><line x1="70" y1="120" x2="610" y2="120" stroke="#888" stroke-width="3"/><polygon points="610,120 593,113 593,127" fill="#888"/><text x="70" y="112" font-size="20" fill="#c0392b" font-weight="bold" text-anchor="middle">a</text><text x="250" y="112" font-size="20" fill="#2b5b9e" font-weight="bold" text-anchor="middle">b</text><text x="430" y="112" font-size="20" fill="#2b5b9e" font-weight="bold" text-anchor="middle">c</text><text x="160" y="70" font-size="16" fill="#2b5b9e" font-weight="bold" text-anchor="middle">a &gt; b</text><text x="340" y="70" font-size="16" fill="#2b5b9e" font-weight="bold" text-anchor="middle">b &gt; c</text><text x="340" y="165" font-size="16" fill="#c0392b" font-weight="bold" text-anchor="middle">传递得 a &gt; c（指向右端越大）</text></svg>', caption: '图2　不等式的传递性：数轴上越靠右越大，a &gt; b &gt; c 可推出 a &gt; c。' },
        { type: 'example', label: '例题1', text: '已知 a &gt; b，c &lt; 0，则下列一定成立的是？<br>A. a + c &gt; b + c　B. ac &gt; bc　C. a − c &lt; b − c　D. a/c &gt; b/c<br><br><strong>解</strong>：a &gt; b 两边同加 c（可加性）得 a + c &gt; b + c，A 正确；c &lt; 0，同乘负数要<strong>变号</strong>，ac &lt; bc，B 错；同减 c 即同加 −c（−c &gt; 0），a − c &gt; b − c，C 错；两边同除以 c（负数）也要变号，a/c &lt; b/c，D 错。故选 A。' },
        { type: 'heading', text: '三、作差法比较大小' },
        { type: 'keypoint', label: '重点·作差法', text: '比较两个实数 a、b 的大小，只需考察它们的差：<br><strong>a − b &gt; 0 ⇔ a &gt; b</strong>；<br><strong>a − b = 0 ⇔ a = b</strong>；<br><strong>a − b &lt; 0 ⇔ a &lt; b</strong>。<br>这种“作差—变形—与 0 比较”的方法叫<strong>作差比较法</strong>，是不等式证明与大小比较的基础工具。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><rect x="60" y="80" width="140" height="52" rx="8" fill="#2b5b9e"/><text x="130" y="113" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">计算 a − b</text><rect x="270" y="80" width="140" height="52" rx="8" fill="#4a7de0"/><text x="340" y="113" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">变形为因式积</text><rect x="480" y="80" width="140" height="52" rx="8" fill="#5a7a2a"/><text x="550" y="113" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">与 0 比较</text><path d="M200 106 L268 106" stroke="#2b5b9e" stroke-width="3"/><path d="M410 106 L478 106" stroke="#4a7de0" stroke-width="3"/><text x="340" y="175" font-size="14" fill="#33536e" text-anchor="middle">正 ⇔ a &gt; b；零 ⇔ a = b；负 ⇔ a &lt; b</text></svg>', caption: '图3　作差比较法三步：作差 → 变形 → 与 0 比较定大小。' },
        { type: 'example', label: '例题2', text: '比较 (x² + 1) 与 x² + x 的大小（x ∈ R）。<br><br><strong>解</strong>：作差 (x² + 1) − (x² + x) = 1 − x。<br>当 1 − x &gt; 0 即 x &lt; 1 时，前者大；<br>当 x = 1 时，两者相等；<br>当 x &gt; 1 时，后者大。<br>即大小关系随 x 而变化，不能笼统说谁大。' },
        { type: 'heading', text: '四、性质对照表' },
        { type: 'table', headers: ['运算', '等式', '不等式（注意方向）'], rows: [['传递', 'a=b,b=c ⇒ a=c', 'a&gt;b,b&gt;c ⇒ a&gt;c'], ['加法', 'a=b ⇒ a+c=b+c', 'a&gt;b ⇒ a+c&gt;b+c（不变号）'], ['乘法', 'a=b ⇒ ac=bc', 'a&gt;b,c&gt;0 ⇒ ac&gt;bc；c&lt;0 ⇒ ac&lt;bc（变号）']] },
        { type: 'warn', label: '易错', text: '不等式最频繁的失误就是<strong>乘（除）以负数忘记变号</strong>。口诀：<strong>“加减不变号，乘除看正负；负数一来，方向要翻”</strong>。此外，两边平方、开方、取倒数也会改变不等式方向，必须分类讨论，切忌“想当然”。' },
        { type: 'tip', label: '记忆', text: '比较两数大小，首选<strong>作差法</strong>，其次在“同号”前提下可用作商法（a/b &gt; 1 且 b &gt; 0 时 a &gt; b）。作差后一定要把式子<strong>因式分解或配方</strong>成可判断符号的形式，而不是停留在“1 − x”这种还要讨论的状态——若题目要求恒定关系，更需配方看是否恒非负。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['等式四性质：对称、传递、可加、可乘', '不等式可加不变号；可乘(除)负数要变号', '作差法：a−b 与 0 比，定 a、b 大小', '比较大小先作差，再配方/因式分解判号', '负数的乘除是方向翻转的“开关”'] },
        { type: 'reading', text: '当比较的两个数<strong>同号且为正</strong>时，也可用<strong>作商法</strong>：若 a/b &gt; 1 且 b &gt; 0，则 a &gt; b；若 0 &lt; a/b &lt; 1，则 a &lt; b。作商法在处理指数式、连乘式时往往比作差更简洁，但它<strong>要求两数同号</strong>，否则结论会反转，使用时务必先确认符号。' }
      ],
      exercises: [
        { type: 'choice', question: '若 a > b，c < 0，则下列各式一定成立的是？', options: ['a + c > b + c', 'ac > bc', 'a − c < b − c', 'a/c > b/c'], answer: 'a + c > b + c', explanation: '由 a > b 两边同加 c（可加性，不变号）得 a + c > b + c，成立。c < 0 时同乘或同除负数要变号，故 ac < bc、a/c < b/c，B、D 错；a − c = a + (−c)，因 −c > 0，得 a − c > b − c，C 错。故选 A。' },
        { type: 'fill', question: '用“>”“<”或“=”填空：若 a > b，则 −2a ____ −2b。', answer: '<', explanation: '不等式两边同乘负数 −2，不等号方向改变，由 a > b 得 −2a < −2b。故填“<”。' },
        { type: 'choice', question: '已知 M = x² + 3，N = 3x，则 M 与 N 的大小关系为？', options: ['M > N', 'M < N', 'M = N', '随 x 变化不能确定'], answer: 'M > N', explanation: '作差：M − N = x² + 3 − 3x = x² − 3x + 3 = (x − 3/2)² + 3/4 ≥ 3/4 > 0，故对任意实数 x 都有 M > N（严格大于，不取等）。选项中“M > N”描述恒成立关系，最贴切。' },
        { type: 'fill', question: '作差法判定大小的核心等价式：a − b > 0 ⇔ ______。', answer: 'a > b', explanation: '作差比较法的定义就是：a − b > 0 当且仅当 a > b；a − b = 0 当且仅当 a = b；a − b < 0 当且仅当 a < b。故 a − b > 0 ⇔ a > b。' },
        { type: 'choice', question: '下列命题正确的是？', options: ['若 a > b，则 a² > b²', '若 a > b，则 1/a < 1/b', '若 a > b，则 a + 1 > b + 1', '若 a > b，则 ac > bc（c 为任意实数）'], answer: '若 a > b，则 a + 1 > b + 1', explanation: 'A 错：a=1,b=−2 时 a>b 但 a²<b²；B 错：需 a,b 同号，如 a=1,b=−1 时 1/a=1>−1=1/b；C 对：两边同加 1 不变号；D 错：c 为负时要变号。故选“若 a > b，则 a + 1 > b + 1”。' }
      ]
    },

    /* ---------------- 第7课时 基本不等式 ---------------- */
    {
      id: 'bx1-u4-l2',
      name: '基本不等式',
      chapter: '第二章 一元二次函数、方程和不等式 · 2.2',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、基本不等式的内容' },
        { type: 'paragraph', text: '基本不等式揭示了两个正数的算术平均数与几何平均数之间的大小关系，是解决“求最值”问题最经典的工具，也是不等式板块的核心考点。' },
        { type: 'keypoint', label: '重点·基本不等式', text: '对任意 <strong>a &gt; 0，b &gt; 0</strong>，都有 <strong>√ab ≤ (a + b)/2</strong>，即<strong>几何平均数不超过算术平均数</strong>；当且仅当 <strong>a = b</strong> 时，等号成立。这就是<strong>基本不等式</strong>（均值不等式）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef4fc"/><path d="M120 180 A130 130 0 0 1 380 180 Z" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><line x1="120" y1="180" x2="380" y2="180" stroke="#2b5b9e" stroke-width="2.5"/><line x1="250" y1="180" x2="250" y2="74" stroke="#e05d44" stroke-width="3"/><text x="80" y="200" font-size="15" fill="#1a3a5c">a</text><text x="372" y="200" font-size="15" fill="#1a3a5c">b</text><text x="250" y="64" font-size="15" fill="#c0392b" text-anchor="middle">√ab</text><text x="250" y="215" font-size="14" fill="#33536e" text-anchor="middle">半圆直径 a+b，半径 (a+b)/2 ≥ 高 √ab</text></svg>', caption: '图1　基本不等式的几何意义：半圆中半径（算术平均）不小于半弦高（几何平均）。' },
        { type: 'list', items: ['前提：a、b 必须为正数（一正）', '结论：√ab ≤ (a+b)/2', '等号条件：a = b 时取到', '用途：常用来求“和定积最大、积定和最小”'] },
        { type: 'heading', text: '二、重要变形' },
        { type: 'keypoint', label: '重点·两个变形', text: '由基本不等式可推出两个常用变形（a、b 同号或均为实数时需谨慎前提）：<br>① <strong>a² + b² ≥ 2ab</strong>（对任意实数 a、b 恒成立，a = b 取等）；<br>② 当 a &gt; 0、b &gt; 0 时，<strong>a + b ≥ 2√ab</strong>（即“和 ≥ 2 倍根号积”）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="180" fill="#eef4fc"/><rect x="50" y="65" width="250" height="52" rx="8" fill="#2b5b9e"/><text x="175" y="98" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">√ab ≤ (a+b)/2</text><rect x="380" y="65" width="250" height="52" rx="8" fill="#4a7de0"/><text x="505" y="98" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">a+b ≥ 2√ab</text><path d="M300 91 L378 91" stroke="#2b5b9e" stroke-width="3"/><text x="340" y="50" font-size="14" fill="#2b5b9e" text-anchor="middle">等价变形（a,b&gt;0）</text><text x="340" y="150" font-size="14" fill="#33536e" text-anchor="middle">两式核心都是“积与和”的此消彼长</text></svg>', caption: '图2　基本不等式与其“和 ≥ 2√积”的等价变形（前提 a,b &gt; 0）。' },
        { type: 'example', label: '例题1', text: '已知 x &gt; 0，求 y = x + 1/x 的最小值。<br><br><strong>解</strong>：x &gt; 0，1/x &gt; 0，由 a + b ≥ 2√ab 得 x + 1/x ≥ 2√(x·1/x) = 2。当且仅当 x = 1/x 即 x = 1 时取等号。故 y 的<strong>最小值为 2</strong>。' },
        { type: 'heading', text: '三、利用基本不等式求最值' },
        { type: 'keypoint', label: '重点·求最值三条件', text: '用基本不等式求最值，必须同时满足<strong>“一正二定三相等”</strong>：<br>① <strong>正</strong>：参与的量必须为正数；<br>② <strong>定</strong>：和或积中必须有一个是<strong>定值</strong>（常数）；<br>③ <strong>相等</strong>：等号能够<strong>实际取到</strong>（即存在使 a = b 的变量值）。缺一则不能直接用。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 190" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="190" fill="#eef4fc"/><rect x="50" y="70" width="150" height="50" rx="8" fill="#2b5b9e"/><text x="125" y="102" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">① 正</text><rect x="265" y="70" width="150" height="50" rx="8" fill="#4a7de0"/><text x="340" y="102" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">② 定</text><rect x="480" y="70" width="150" height="50" rx="8" fill="#5a7a2a"/><text x="555" y="102" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">③ 相等</text><path d="M200 95 L263 95" stroke="#2b5b9e" stroke-width="3"/><path d="M415 95 L478 95" stroke="#4a7de0" stroke-width="3"/><text x="340" y="160" font-size="14" fill="#33536e" text-anchor="middle">三者俱全，方可套用不等式求最值</text></svg>', caption: '图3　求最值“一正二定三相等”：缺一不可。' },
        { type: 'example', label: '例题2', text: '用一段长 20 m 的篱笆围矩形菜地，怎样围面积最大？<br><br><strong>解</strong>：设长、宽分别为 a、b（a,b&gt;0），则 2(a+b) = 20，即 a+b = 10（定和）。面积 S = ab ≤ ((a+b)/2)² = 25。当且仅当 a = b = 5 时取等。故围成<strong>边长 5 m 的正方形</strong>时面积最大，为 25 m²。' },
        { type: 'heading', text: '四、常见对照' },
        { type: 'table', headers: ['不等式', '适用前提', '等号条件', '典型用途'], rows: [['√ab ≤ (a+b)/2', 'a,b &gt; 0', 'a = b', '和定求积最大'], ['a + b ≥ 2√ab', 'a,b &gt; 0', 'a = b', '积定求和最小'], ['a² + b² ≥ 2ab', 'a,b ∈ R', 'a = b', '配凑、放缩']] },
        { type: 'warn', label: '易错', text: '三大失分点：①<strong>忽略“正”</strong>，对负数或零直接套用（如 a = −1,b = −2 时 a+b=−3 &lt; 2√2）；②<strong>忽略“定”</strong>，和、积都不是常数时硬套得不出最值；③<strong>忽略“相等”</strong>，等号取不到（如 x&gt;0 求 x+1/x 在 x 被限制为 x≥2 时，x=1 取不到，须改用单调性）。' },
        { type: 'tip', label: '记忆', text: '求最值先问三句：<strong>“正不正？定不定？等不等？”</strong> 若和不是定值，常通过“凑系数”“拆项”制造定值；若等号取不到，立刻改用<strong>函数单调性</strong>求解，不要死磕不等式。常见凑法：x + k/x 型直接套；ax + b/x 型提出系数再套。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['基本不等式：√ab ≤ (a+b)/2（a,b&gt;0）', '核心变形：a+b ≥ 2√ab、a²+b² ≥ 2ab', '求最值三条件：一正、二定、三相等', '和定积最大，积定和最小', '等号取不到时改用函数单调性'] },
        { type: 'reading', text: '当“等号无法取到”时，基本不等式只是给出下界而非最小值。例如 x ≥ 2 时求 y = x + 1/x，x = 1 处取等的等式不成立，应改用单调性：y′ = 1 − 1/x² ≥ 0（x≥2），函数在 [2,+∞) 单调递增，故最小值在 x = 2 处取得，为 2 + 1/2 = 2.5。可见<strong>“不等式+单调性”常需配合判断</strong>。' }
      ],
      exercises: [
        { type: 'choice', question: '已知 x > 0，则 x + 1/x 的最小值为？', options: ['0', '1', '2', '无最小值'], answer: '2', explanation: 'x>0 时由 a+b ≥ 2√ab 得 x + 1/x ≥ 2√(x·1/x) = 2，当且仅当 x = 1/x 即 x = 1 时取等号，故最小值为 2。' },
        { type: 'fill', question: '用基本不等式求最值必须同时满足的三个条件是：一正、二____、三相等。', answer: '定', explanation: '求最值三条件为“一正二定三相等”：参与量为正（正）、和或积中有定值（定）、等号能实际取到（相等）。故填“定”。' },
        { type: 'choice', question: '若 a>0, b>0 且 a+b=4，则 ab 的最大值为？', options: ['2', '4', '8', '16'], answer: '4', explanation: '由 √ab ≤ (a+b)/2 = 2 得 ab ≤ 4，当且仅当 a=b=2 时取等号，故 ab 最大值为 4（和定积最大）。' },
        { type: 'fill', question: '对任意实数 a、b，恒成立的不等式 a² + b² ____ 2ab（填 ≥ 或 ≤）。', answer: '≥', explanation: '由 (a−b)² ≥ 0 展开得 a² + b² − 2ab ≥ 0，即 a² + b² ≥ 2ab，对任意实数 a、b 恒成立，a = b 时取等号。故填“≥”。' },
        { type: 'choice', question: '下列做法中，不能直接用基本不等式求最值的是？', options: ['x>0 时求 x+4/x 最小值', 'x>0 时求 x²+1 最小值', 'x,y>0 且 xy=9 时求 x+y 最小值', 'x>0 时求 x+1/x 在 x≥2 时的最小值（硬套等号）'], answer: 'x>0 时求 x+1/x 在 x≥2 时的最小值（硬套等号）', explanation: 'A、B、C 都满足一正二定三相等，可直接套用。D 中 x+1/x 取等条件 x=1 不在区间 [2,+∞) 内，等号取不到，硬套会得错误最小值 2（实际应在 x=2 处取得 2.5），须改用单调性，故选 D。' }
      ]
    }

  );
})();
