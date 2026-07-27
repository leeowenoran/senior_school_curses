/* ============================================================
 * 数学 · 高考复习专题 · 函数与导数
 * 第1单元（2 课时）：函数概念与三要素 / 定义域值域与单调性
 * 数据注入：math.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt1');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 考试要求与命题趋势 + 函数概念与三要素 ---------------- */
    {
      id: 'zt1-u1-l1',
      name: '考试要求与命题趋势 · 函数概念与三要素',
      chapter: '函数与导数复习 · 一 考试要求与命题趋势 / 二 2.1 函数概念与三要素',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、高考考试要求与命题趋势' },
        { type: 'paragraph', text: '函数与导数是高中数学的核心模块，在新高考中分值占比约为 20% 至 25%，常以选择题、填空题以及压轴解答题的形式考查，是区分考生层次的关键板块。' },
        { type: 'keypoint', label: '重点·分值', text: '函数与导数在新高考中约占 <strong>20%–25%</strong> 的分值；其中小题侧重函数性质与导数几何意义，大题侧重导数与单调性、极值、最值、不等式证明及零点的综合。' },
        { type: 'list', items: ['函数性质（单调、奇偶、周期、对称）常以小题综合考查', '导数几何意义（切线方程）几乎每年必考小题', '导数与单调性、极值、最值、不等式证明、零点综合为压轴核心', '数形结合与分类讨论思想贯穿全章'] },
        { type: 'table', headers: ['题型', '常见考点', '难度'], rows: [['选择题', '函数性质、切线、零点', '基础至中等'], ['填空题', '单调区间、极值、不等式', '中等'], ['解答题', '导数综合、不等式证明', '进阶（压轴）']] },
        { type: 'tip', label: '提示', text: '复习本专题应“小题保分、大题争分”：先把函数性质与切线等小题练熟拿稳基础分，再突破导数压轴大题的分类讨论与构造函数。' },
        { type: 'heading', text: '二、函数的概念' },
        { type: 'paragraph', text: '函数是描述变量之间依赖关系的数学模型。理解函数，关键是抓住“每一个自变量都有唯一确定的函数值与之对应”这一本质。' },
        { type: 'keypoint', label: '重点·定义', text: '设 A、B 是非空数集，如果对于 <strong>A 中任意一个 x</strong>，按照某个确定的对应法则 f，在 B 中都有 <strong>唯一确定的 y</strong> 与之对应，那么就称 f: A → B 为从 A 到 B 的一个函数。x 叫自变量，A 叫定义域，函数值集合 {f(x) | x∈A} 叫值域。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ar" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0 0 L8 3 L0 6 z" fill="#e05d44"/></marker></defs><rect width="680" height="260" fill="#eef4fc"/><text x="40" y="34" font-size="17" font-weight="bold" fill="#2b5b9e">函数映射：f: A → B</text><ellipse cx="150" cy="155" rx="95" ry="82" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><ellipse cx="500" cy="155" rx="105" ry="86" fill="#d7e8c9" stroke="#5a7a2a" stroke-width="2.5"/><text x="150" y="62" font-size="18" fill="#2b5b9e" text-anchor="middle" font-weight="bold">A（定义域）</text><text x="500" y="60" font-size="18" fill="#3a5a1e" text-anchor="middle" font-weight="bold">B（值域集合）</text><circle cx="120" cy="145" r="7" fill="#2b5b9e"/><circle cx="160" cy="170" r="7" fill="#2b5b9e"/><circle cx="135" cy="195" r="7" fill="#2b5b9e"/><circle cx="470" cy="140" r="7" fill="#5a7a2a"/><circle cx="520" cy="165" r="7" fill="#5a7a2a"/><circle cx="490" cy="190" r="7" fill="#5a7a2a"/><path d="M128 147 L463 142" stroke="#e05d44" stroke-width="2.5" fill="none" marker-end="url(#ar)"/><path d="M167 172 L514 167" stroke="#e05d44" stroke-width="2.5" fill="none" marker-end="url(#ar)"/><path d="M142 197 L484 192" stroke="#e05d44" stroke-width="2.5" fill="none" marker-end="url(#ar)"/><text x="320" y="112" font-size="16" fill="#c0392b" text-anchor="middle">对应法则 f</text><text x="340" y="244" font-size="15" fill="#33536e" text-anchor="middle">A 中每个 x 经 f 唯一对应 B 中一个 y</text></svg>', caption: '图1　函数映射：定义域 A 中每个元素经对应法则 f 唯一对应值域集合 B 中一个元素。' },
        { type: 'warn', label: '易错', text: '值域是<strong>函数值组成的集合</strong> {f(x) | x∈A}，它不一定是 B 的全部，只是 B 的子集。不要把“值域”与“对应法则到达的整个集合 B”混为一谈。' },
        { type: 'heading', text: '三、函数的三要素与同一函数判定' },
        { type: 'keypoint', label: '重点·三要素', text: '函数由 <strong>定义域、对应法则、值域</strong> 三要素确定；其中<strong>定义域与对应法则确定后，值域随之确定</strong>。因此判断两个函数是否相同，只需看定义域与对应法则。' },
        { type: 'list', items: ['看定义域：化简前后定义域必须完全一致', '看对应法则：化简后的表达式本质相同', '定义域与对应法则都相同，才是同一函数'] },
        { type: 'example', label: '例题1', text: '判断下列函数是否为同一函数：(1) f(x)=x 与 g(x)=x²/x；(2) f(x)=x² 与 g(x)=(√x)⁴。<br><br><strong>解</strong>：(1) f(x)=x 定义域为 R，g(x)=x²/x 要求 x≠0，定义域不同，<strong>不是同一函数</strong>；(2) f(x)=x² 定义域为 R，g(x)=(√x)⁴ 要求 x≥0，定义域不同，<strong>不是同一函数</strong>。两组均因定义域不同而判定为不同函数。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="40" y="34" font-size="17" font-weight="bold" fill="#2b5b9e">函数三要素关系</text><circle cx="200" cy="130" r="78" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="340" cy="130" r="78" fill="#f3d9d2" stroke="#e05d44" stroke-width="2.5"/><circle cx="480" cy="130" r="78" fill="#d7e8c9" stroke="#5a7a2a" stroke-width="2.5"/><text x="200" y="135" font-size="18" fill="#2b5b9e" text-anchor="middle" font-weight="bold">定义域</text><text x="340" y="135" font-size="18" fill="#c0392b" text-anchor="middle" font-weight="bold">对应法则</text><text x="480" y="135" font-size="18" fill="#3a5a1e" text-anchor="middle" font-weight="bold">值域</text><text x="340" y="225" font-size="15" fill="#33536e" text-anchor="middle">定义域 + 对应法则 共同确定值域</text></svg>', caption: '图2　三要素关系：定义域与对应法则一旦确定，值域就随之确定。' },
        { type: 'heading', text: '四、区间表示' },
        { type: 'paragraph', text: '为书写方便，常用区间表示连续实数集。区间是定义域与值域最常见的表达形式，务必分清端点是否取到。' },
        { type: 'list', items: ['闭区间 [a, b]：含端点 a、b，即 a≤x≤b', '开区间 (a, b)：不含端点，即 a 小于 x 小于 b', '半开半闭 [a, b)、(a, b]：只含一个端点', '无穷区间 (-∞, b]、[a, +∞)、(-∞, +∞)'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><text x="40" y="34" font-size="17" font-weight="bold" fill="#2b5b9e">区间表示（数轴示意）</text><line x1="60" y1="120" x2="640" y2="120" stroke="#33536e" stroke-width="2"/><polygon points="640,120 626,114 626,126" fill="#33536e"/><text x="120" y="100" font-size="15" fill="#33536e" text-anchor="middle">a</text><text x="560" y="100" font-size="15" fill="#33536e" text-anchor="middle">b</text><circle cx="120" cy="120" r="7" fill="#2b5b9e"/><circle cx="560" cy="120" r="7" fill="#2b5b9e"/><line x1="120" y1="111" x2="560" y2="111" stroke="#4a7de0" stroke-width="8"/><text x="340" y="155" font-size="15" fill="#33536e" text-anchor="middle">[a, b]：闭区间，含端点 a、b</text><text x="340" y="190" font-size="14" fill="#5a7a2a" text-anchor="middle">(a, b)、[a, b)、(a, b]、(-∞, b]、[a, +∞) 同理</text></svg>', caption: '图3　区间数轴示意：方括号含端点，圆括号不含端点。' },
        { type: 'warn', label: '易错', text: '区间端点是否取到极易出错：<strong>方括号“[ ]”含端点，圆括号“( )”不含端点</strong>；涉及根式、分式、对数时，必须结合限制条件重新确定端点，不能照搬原式外观。' },
        { type: 'heading', text: '五、求函数的解析式' },
        { type: 'keypoint', label: '重点·方法', text: '已知含 f 的等式求解析式，常用 <strong>换元法</strong>（令 t = 整体）与 <strong>配凑法</strong>（将右边凑成整体表达式）。换元后务必写出新变量的取值范围。' },
        { type: 'example', label: '例题2', text: '已知 f(x+1)=x²+x，求 f(x) 及 f(2x-1)。<br><br><strong>解（换元法）</strong>：令 t=x+1，则 x=t-1，代入得 f(t)=(t-1)²+(t-1)=t²-2t+1+t-1=t²-t，故 <strong>f(x)=x²-x</strong>。<br><strong>求 f(2x-1)</strong>：将上式中的 x 替换为 2x-1，得 f(2x-1)=(2x-1)²-(2x-1)=4x²-4x+1-2x+1=4x²-6x+2。' },
        { type: 'tip', label: '提示', text: '配凑法更快：x²+x=(x+1)²-(x+1)，直接得 f(x)=x²-x。两种方法结果一致，考试时选用自己最有把握的一种即可。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['函数概念：非空数集 A 到 B 的确定对应，三要素为定义域、对应法则、值域', '同一函数：定义域与对应法则均相同', '区间：方括号含端点、圆括号不含端点', '求解析式：换元法或配凑法，注意新变量范围', '高考占比约 20%–25%，小题重性质、大题重导数综合'] }
      ],
      exercises: [
        { type: 'choice', question: '函数与导数模块在新高考数学中分值占比约为？', options: ['5%–10%', '10%–15%', '20%–25%', '40%–50%'], answer: '20%–25%', explanation: '函数与导数模块在新高考数学中分值占比约为 20% 至 25%，常以选择题、填空题以及压轴解答题形式出现，是高考复习的重中之重，需要系统梳理函数性质与导数应用。' },
        { type: 'choice', question: '下列各组函数中，表示同一函数的是？', options: ['f(x)=x 与 g(x)=x²/x', 'f(x)=|x| 与 g(x)=√(x²)', 'f(x)=x 与 g(x)=(√x)²', 'f(x)=1 与 g(x)=x⁰'], answer: 'f(x)=|x| 与 g(x)=√(x²)', explanation: '判断同一函数须定义域与对应法则都相同。g(x)=√(x²)=|x|，与 f(x)=|x| 定义域均为 R、对应法则一致，故为同一函数。其余各组定义域不同，不是同一函数。' },
        { type: 'fill', question: '函数的三要素是____、对应法则、值域。', answer: '定义域', explanation: '函数的三要素为定义域、对应法则和值域。其中定义域与对应法则共同确定值域，只要定义域和对应法则相同，两个函数就是同一函数。故填“定义域”。' },
        { type: 'choice', question: '已知 f(x+1)=x²+x，则 f(x) 等于？', options: ['x²-x', 'x²+x', 'x²+2x', 'x²-2x'], answer: 'x²-x', explanation: '设 t=x+1，则 x=t-1，代入得 f(t)=(t-1)²+(t-1)=t²-2t+1+t-1=t²-t，故 f(x)=x²-x。也可用配凑法由 x²+x=(x+1)²-(x+1) 直接得到结果。' },
        { type: 'fill', question: '闭区间 [a, b] 表示满足 ____ 的实数 x 的集合。', answer: 'a≤x≤b', explanation: '闭区间 [a, b] 表示所有满足 a 小于等于 x 且小于等于 b 的实数 x 的集合，即 a≤x≤b，包含左右两个端点 a 与 b。开区间 (a, b) 则不含端点。故填 a≤x≤b。' }
      ]
    },

    /* ---------------- 第2课时 定义域与值域求法 + 函数的单调性 ---------------- */
    {
      id: 'zt1-u1-l2',
      name: '定义域与值域求法 · 函数的单调性',
      chapter: '函数与导数复习 · 二 2.2 定义域与值域 / 2.3 单调性',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、函数定义域的求法' },
        { type: 'paragraph', text: '定义域是函数的三要素之首。求定义域的本质是：让解析式中所有运算在实数范围内都有意义，并把各类限制条件取交集。' },
        { type: 'list', items: ['分式：分母不等于 0', '偶次根式：被开方数大于或等于 0', '对数：真数大于 0，且底数大于 0 且不等于 1', '零次幂：底数不等于 0', '实际问题：符合实际意义（如长度、个数非负）'] },
        { type: 'keypoint', label: '重点·限制', text: '求定义域即把上述各类限制条件<strong>联立求交集</strong>。解出的 x 范围既是函数有意义的区域，也是后续研究单调性与值域的前提。' },
        { type: 'warn', label: '易错', text: '复合函数 f(g(x)) 的定义域是指 <strong>x 的取值范围</strong>，不是 g(x) 的范围。必须让“内层 g(x)”落在“外层 f 的定义域”内，这是高频易错点。' },
        { type: 'example', label: '例题1', text: '求函数 f(x)=√(x-1)+1/(x-3)+ln(2-x) 的定义域。<br><br><strong>解</strong>：各因式有意义需同时满足：<br>① 偶次根式 x-1≥0 ⇒ x≥1；<br>② 分式 1/(x-3) 分母 x-3≠0 ⇒ x≠3；<br>③ 对数 ln(2-x) 真数 2-x 大于 0 ⇒ x 小于 2。<br>取交集得 1≤x 且小于 2 且 x≠3，由于 x 小于 2 已自动排除 3，故定义域为 <strong>[1, 2)</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="40" y="34" font-size="17" font-weight="bold" fill="#2b5b9e">定义域：多条件取交集</text><line x1="60" y1="90" x2="640" y2="90" stroke="#33536e" stroke-width="2"/><polygon points="640,90 626,84 626,96" fill="#33536e"/><text x="60" y="76" font-size="14" fill="#33536e">① x-1≥0 ⇒ x≥1</text><rect x="120" y="83" width="520" height="14" fill="#4a7de0" opacity="0.5"/><circle cx="120" cy="90" r="7" fill="#2b5b9e"/><line x1="60" y1="140" x2="640" y2="140" stroke="#33536e" stroke-width="2"/><text x="60" y="126" font-size="14" fill="#33536e">② x-3≠0 ⇒ x≠3</text><line x1="60" y1="140" x2="200" y2="140" stroke="#5a7a2a" stroke-width="6"/><line x1="230" y1="140" x2="640" y2="140" stroke="#5a7a2a" stroke-width="6"/><circle cx="215" cy="140" r="9" fill="#fff" stroke="#e05d44" stroke-width="2.5"/><line x1="60" y1="185" x2="640" y2="185" stroke="#33536e" stroke-width="2"/><text x="60" y="171" font-size="14" fill="#33536e">③ 2-x 大于 0 ⇒ x 小于 2</text><line x1="60" y1="185" x2="200" y2="185" stroke="#7a5aa0" stroke-width="6"/><circle cx="200" cy="185" r="7" fill="#fff" stroke="#7a5aa0" stroke-width="2.5"/><text x="340" y="235" font-size="15" fill="#33536e" text-anchor="middle">交集为 [1, 2)：120≤x 小于 200（示意）</text></svg>', caption: '图1　定义域求法：将根式、分式、对数三类限制在数轴上取交集。' },
        { type: 'heading', text: '二、复合函数定义域' },
        { type: 'keypoint', label: '重点·原则', text: '已知 f(x) 的定义域为 D，求 f(g(x)) 的定义域：令 <strong>g(x) ∈ D</strong>，解出 x 的范围即为所求。即“外函数定义域约束内函数”。' },
        { type: 'example', label: '例题2', text: '已知 f(x) 的定义域为 [0, 2]，求 f(2x-1) 的定义域。<br><br><strong>解</strong>：f 作用的对象必须落在 [0, 2]，故对 f(2x-1) 须满足 0≤2x-1≤2，即 1≤2x≤3，解得 <strong>1/2≤x≤3/2</strong>。所以 f(2x-1) 的定义域为 [1/2, 3/2]。' },
        { type: 'list', items: ['写出外层 f 的定义域 D', '令内层 g(x) 落入 D，列不等式', '解不等式得 x 的范围，即复合函数定义域'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef4fc"/><text x="40" y="34" font-size="17" font-weight="bold" fill="#2b5b9e">复合函数：外函数定义域约束内函数</text><rect x="90" y="90" width="200" height="90" rx="12" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="190" y="140" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">f 的定义域</text><rect x="400" y="90" width="200" height="90" rx="12" fill="#d7e8c9" stroke="#5a7a2a" stroke-width="2.5"/><text x="500" y="140" font-size="17" fill="#3a5a1e" text-anchor="middle" font-weight="bold">g(x) 的值域</text><path d="M290 135 L400 135" stroke="#e05d44" stroke-width="2.5" fill="none" marker-end="url(#ar2)"/><text x="345" y="118" font-size="15" fill="#c0392b" text-anchor="middle">g(x) 须落在 f 定义域内</text><text x="340" y="215" font-size="15" fill="#33536e" text-anchor="middle">求 f(g(x)) 定义域：先定 g(x) 范围，再令其 ∈ f 的定义域</text><defs><marker id="ar2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0 0 L8 3 L0 6 z" fill="#e05d44"/></marker></defs></svg>', caption: '图2　复合函数定义域：内层 g(x) 的取值必须落在 f 的定义域之内。' },
        { type: 'heading', text: '三、函数值域的求法' },
        { type: 'paragraph', text: '值域是函数值的集合。基础求值域方法多样，需根据解析式结构灵活选择，常用方法如下。' },
        { type: 'list', items: ['观察法：由解析式直接看出取值范围', '配方法：二次函数配方求最值', '换元法：代数或三角换元化为易求值域式', '单调性法：利用单调性求区间最值', '基本不等式法：ab≤((a+b)/2)² 型', '数形结合：借助图像观察'] },
        { type: 'keypoint', label: '重点·分式值域', text: '对于形如 y=(ax+b)/(cx+d) 的分式函数，常用<strong>分离常数法或反解法</strong>：把 y 视为已知，反解出 x，由 x 有实数解的条件确定 y 的范围。' },
        { type: 'example', label: '例题3', text: '求函数 y=(2x-1)/(x+1) 的值域。<br><br><strong>解（反解法）</strong>：由 y=(2x-1)/(x+1) 得 y(x+1)=2x-1，整理为 x(y-2)=-(y+1)，故 x=-(y+1)/(y-2)。要使 x 为实数，须分母 y-2≠0，即 <strong>y≠2</strong>。所以值域为 y≠2，即 (-∞, 2)∪(2, +∞)。' },
        { type: 'tip', label: '提示', text: '分离常数法更直观：y=(2x-1)/(x+1)=[2(x+1)-3]/(x+1)=2-3/(x+1)，因 3/(x+1)≠0，故 y≠2。两种方法本质一致。' },
        { type: 'heading', text: '四、函数的单调性' },
        { type: 'paragraph', text: '单调性描述函数值随自变量增大而变化的趋势，是处理函数性质与不等式的核心工具。' },
        { type: 'keypoint', label: '重点·定义', text: '设函数 f(x) 的定义域为 D，区间 I⊆D。对任意 x1、x2∈I，当 <strong>x1 小于 x2</strong> 时：若 <strong>f(x1) 小于 f(x2)</strong>，则 f(x) 在 I 上递增；若 <strong>f(x1) 大于 f(x2)</strong>，则 f(x) 在 I 上递减。' },
        { type: 'warn', label: '易错', text: '单调性必须指明<strong>区间</strong>：不能说“函数在定义域上单调”，而要说“在某个区间上单调”。不同区间单调性可能不同，且单调区间之间一般用“、”或“和”连接，不宜用“∪”合并。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="40" y="34" font-size="17" font-weight="bold" fill="#2b5b9e">单调性：增区间与减区间</text><line x1="80" y1="200" x2="640" y2="200" stroke="#33536e" stroke-width="2"/><line x1="80" y1="60" x2="80" y2="200" stroke="#33536e" stroke-width="2"/><text x="360" y="225" font-size="14" fill="#33536e" text-anchor="middle">x</text><text x="70" y="72" font-size="14" fill="#33536e">y</text><path d="M120 190 C 220 170, 300 120, 380 90" stroke="#2b5b9e" stroke-width="3" fill="none"/><path d="M420 100 C 500 130, 560 160, 610 185" stroke="#e05d44" stroke-width="3" fill="none"/><text x="250" y="105" font-size="15" fill="#2b5b9e" font-weight="bold">递增：x1 小于 x2 ⇒ f(x1) 小于 f(x2)</text><text x="500" y="120" font-size="15" fill="#c0392b" font-weight="bold">递减：x1 小于 x2 ⇒ f(x1) 大于 f(x2)</text></svg>', caption: '图3　单调性图像：递增曲线随 x 增大而上升，递减曲线随 x 增大而下降。' },
        { type: 'example', label: '例题4', text: '用定义证明 f(x)=x+1/x 在 (1, +∞) 上单调递增。<br><br><strong>解</strong>：任取 1 小于 x1 小于 x2，作差 f(x1)-f(x2)=x1+1/x1-x2-1/x2=(x1-x2)+(1/x1-1/x2)=(x1-x2)(1-1/(x1x2))。因 x1,x2 大于 1，故 x1x2 大于 1，1-1/(x1x2) 大于 0；又 x1-x2 小于 0，所以差值小于 0，即 f(x1) 小于 f(x2)，得证。' },
        { type: 'list', items: ['取值：任取区间内 x1 小于 x2', '作差：计算 f(x1)-f(x2)', '变形：通分、因式分解或配方', '定号：由 x1,x2 范围判断差值符号', '结论：差值正负对应增减'] },
        { type: 'table', headers: ['方法', '适用情形', '关键'], rows: [['定义法', '证明单调性、理论上严格', '作差变形定号'], ['导数法', '可导函数求单调区间', 'f′(x) 正负'], ['图像法', '直观判断、数形结合', '上升或下降']] },
        { type: 'tip', label: '提示', text: '对勾函数 f(x)=x+1/x：在 (0,1] 递减、[1,+∞) 递增；利用此性质可快速判断最值与不等式，是高考常客。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['定义域：各类限制取交集，复合函数令内层落入外层定义域', '值域：观察、配方、换元、单调性、基本不等式、数形结合', '单调性：定义法五步（取值、作差、变形、定号、结论）', '单调区间必须指明，用“、”或“和”连接', '对勾函数 x+1/x 在 (0,1] 减、[1,+∞) 增'] }
      ],
      exercises: [
        { type: 'choice', question: '函数 f(x)=√(x-1)+ln(2-x) 的定义域是？', options: ['[1, 2]', '[1, 2)', '(1, 2]', '(1, 2)'], answer: '[1, 2)', explanation: '由偶次根式要求 x-1≥0 得 x≥1，由对数真数要求 2-x 大于 0 得 x 小于 2，两条件取交集得 1≤x 小于 2，即定义域为 [1, 2)。注意对数真数严格大于 0，右端点 2 不取。' },
        { type: 'choice', question: '已知 f(x) 定义域为 [0, 2]，则 f(2x-1) 的定义域为？', options: ['[0, 2]', '[1/2, 3/2]', '[-1, 1]', '[1, 3]'], answer: '[1/2, 3/2]', explanation: 'f 的定义域为 [0,2]，说明 f 作用的对象必须落在 [0,2]。对 f(2x-1) 须满足 0≤2x-1≤2，解得 1≤2x≤3，即 1/2≤x≤3/2，故定义域为 [1/2, 3/2]。' },
        { type: 'fill', question: '函数 y=(2x-1)/(x+1) 的值域为 ____（用 y 表示）。', answer: 'y≠2', explanation: '由 y=(2x-1)/(x+1) 反解 x，得 y(x+1)=2x-1，即 x(y-2)=-(y+1)，故 x=-(y+1)/(y-2)，要求分母 y-2≠0，即 y≠2，因此值域为 y≠2，也就是 (-∞, 2)∪(2, +∞)。' },
        { type: 'choice', question: '用定义证明函数单调性时，正确步骤是？', options: ['取值→作差→定号→变形→结论', '取值→作差→变形→定号→结论', '作差→取值→变形→定号→结论', '取值→变形→作差→定号→结论'], answer: '取值→作差→变形→定号→结论', explanation: '用定义证明函数单调性的标准步骤为：取值（任取 x1 小于 x2）、作差（计算 f(x1)-f(x2)）、变形（因式分解或配方）、定号（判断差值正负）、结论。顺序不可颠倒，变形便于判断符号。' },
        { type: 'fill', question: '函数 f(x)=x+1/x 在 (1, +∞) 上单调 ____（填“递增”或“递减”）。', answer: '递增', explanation: '任取 1 小于 x1 小于 x2，f(x1)-f(x2)=(x1-x2)(1-1/(x1x2))。因 x1,x2 大于 1，x1x2 大于 1，故 1-1/(x1x2) 大于 0，而 x1-x2 小于 0，所以差值小于 0，f(x1) 小于 f(x2)，函数在 (1,+∞) 递增。故填“递增”。' }
      ]
    }

  );
})();
