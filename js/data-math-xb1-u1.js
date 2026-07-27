/* ============================================================
 * 高二数学 · 选择性必修 第一册 · 第一章 空间向量与立体几何
 * 第1课时：空间向量及其运算（人教A版 §1.1）
 * 第2课时：空间向量基本定理（人教A版 §1.2）
 * 数据注入：math.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'xb1');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 空间向量及其运算 ---------------- */
    {
      id: 'xb1-u1-l1',
      name: '空间向量及其运算',
      chapter: '第一章 空间向量与立体几何 · 1.1',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、空间向量的概念与表示' },
        { type: 'paragraph', text: '在平面向量的基础上，我们把向量推广到空间。空间中既有大小又有方向的量叫做空间向量，例如位移、力、速度等都是空间向量。空间向量是研究立体几何的重要工具，许多位置关系（平行、垂直）和度量问题（长度、夹角）都可以用向量方法来处理。' },
        { type: 'keypoint', label: '重点·表示', text: '空间向量可以用<strong>有向线段</strong>来表示，有向线段的长度表示向量的<strong>大小（模）</strong>，方向表示向量的<strong>方向</strong>。向量记作小写字母 <strong>a</strong>，或加箭头记作 <strong>\\vec{a}</strong>，或用起点终点记作 <strong>\\overrightarrow{AB}</strong>；其长度（模）记作 <strong>|a|</strong> 或 <strong>|\\overrightarrow{AB}|</strong>。' },
        { type: 'paragraph', text: '与平面向量类似，空间向量也有相等、相反和共线（平行）等关系，这些关系只看方向和长度，与向量在空间中的具体位置无关。' },
        { type: 'list', items: ['相等向量：方向相同且长度相等的两个向量相等，与起点位置无关', '相反向量：方向相反、长度相等的向量互为相反向量，记作 a 与 -a', '共线（平行）向量：方向相同或相反的非零向量互相平行，记作 a ∥ b'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><line x1="160" y1="150" x2="480" y2="92" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="480,92 459,84 466,104" fill="#2b5b9e"/><circle cx="160" cy="150" r="6" fill="#2b5b9e"/><circle cx="480" cy="92" r="6" fill="#2b5b9e"/><text x="136" y="172" font-size="18" fill="#2b5b9e">A</text><text x="496" y="88" font-size="18" fill="#2b5b9e">B</text><text x="320" y="50" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">有向线段表示向量</text><g font-size="14" fill="#33536e"><text x="70" y="192">· 起点 A、终点 B 决定一个向量，记作 AB→</text><text x="70" y="212">· 向量只由方向和长度确定，与起点位置无关</text></g></svg>', caption: '图1　有向线段表示向量：起点 A、终点 B 决定向量方向，线段长度即模 |a|。' },
        { type: 'heading', text: '二、空间向量的线性运算' },
        { type: 'paragraph', text: '空间向量的加法、减法和数乘统称为线性运算，其定义和运算律与平面向量完全一致：加法满足三角形法则与平行四边形法则，减法是加法的逆运算，数乘表示向量的伸缩。' },
        { type: 'keypoint', label: '重点·运算律', text: '设 a、b、c 为空间向量，λ、μ 为实数，则<br><strong>加法交换律</strong>：a + b = b + a<br><strong>加法结合律</strong>：(a + b) + c = a + (b + c)<br><strong>数乘分配律</strong>：λ(a + b) = λa + λb，(λ + μ)a = λa + μa<br>这些规律与平面向量相同，可直接在空间中沿用。' },
        { type: 'example', label: '例题1', text: '化简 \\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD}。<br><br><strong>解</strong>：由向量加法的三角形法则，<br>\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}，<br>再与 \\overrightarrow{CD} 相加得 \\overrightarrow{AC} + \\overrightarrow{CD} = \\overrightarrow{AD}。<br>故 \\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD} = <strong>\\overrightarrow{AD}</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><polygon points="160,180 380,180 520,80 300,80" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="160" y1="180" x2="380" y2="180" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="380,180 360,174 360,186" fill="#2b5b9e"/><line x1="160" y1="180" x2="300" y2="80" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="300,80 296,98 314,92" fill="#2b5b9e"/><line x1="160" y1="180" x2="520" y2="80" stroke="#e05d44" stroke-width="4"/><polygon points="520,80 498,82 506,100" fill="#e05d44"/><text x="255" y="200" font-size="16" fill="#2b5b9e">a</text><text x="208" y="120" font-size="16" fill="#2b5b9e">b</text><text x="350" y="132" font-size="17" font-weight="bold" fill="#c0392b">a+b</text><g font-size="14" fill="#33536e"><text x="60" y="240">· 以 a、b 为邻边作平行四边形</text><text x="60" y="222">· 对角线向量即为 a + b（平行四边形法则）</text></g></svg>', caption: '图2　向量加法的平行四边形法则：以 a、b 为邻边，红色对角线向量为 a+b。' },
        { type: 'heading', text: '三、共线向量与共面向量定理' },
        { type: 'keypoint', label: '重点·共线定理', text: '（共线向量定理）对于空间任意两个向量 a、b，若 <strong>a ≠ 0</strong>，则<br><strong>b ∥ a ⇔ 存在唯一实数 λ，使 b = λa</strong>。<br>也就是说，非零向量 a 与 b 平行，等价于 b 可以用 a 线性表示，且表示系数 λ 唯一。' },
        { type: 'keypoint', label: '重点·共面定理', text: '（共面向量定理）若 a、b <strong>不共线</strong>，则向量 p 与 a、b 共面<br>⇔ <strong>存在唯一有序实数对 (x, y)，使 p = xa + yb</strong>。<br>共面向量是指平行于同一平面的向量；该定理说明平面内任一向量都可由平面内两个不共线向量线性表示。' },
        { type: 'warn', label: '易错', text: '使用共线、共面向量定理时务必注意<strong>前提条件</strong>：共线定理要求 <strong>a ≠ 0</strong>（零向量方向任意，不能用来规定方向）；共面定理要求 <strong>a、b 不共线</strong>。此外，规定<strong>零向量与任意向量平行</strong>，这一特殊约定在判断“向量是否共线”时经常被用到，切勿遗漏。' },
        { type: 'example', label: '例题2', text: '已知 a、b 不共线，向量 p = 3a - 2b，判断 p 与 a、b 是否共面。<br><br><strong>解</strong>：由共面向量定理，若 a、b 不共线，则 p 与 a、b 共面当且仅当存在实数 x、y 使 p = xa + yb。现 p = 3a - 2b，即有 x = 3、y = -2，满足 p = xa + yb。<br>故 <strong>p 与 a、b 共面</strong>。' },
        { type: 'heading', text: '四、空间向量的数量积' },
        { type: 'paragraph', text: '类比平面向量，空间向量也可以定义数量积（点积），它把向量的长度和夹角联系起来，是判断垂直、求长度与夹角的基础。' },
        { type: 'table', headers: ['性质', '表达式', '含义'], rows: [['交换律', 'a·b = b·a', '数量积可以交换'], ['对加法的分配律', 'a·(b + c) = a·b + a·c', '数量积对向量加法满足分配'], ['与数乘结合', '(λa)·b = λ(a·b)', '数乘可提到数量积之外'], ['自乘', 'a·a = |a|²', '向量自身的点积等于模的平方'], ['垂直判定', 'a⊥b ⇔ a·b = 0', '非零向量垂直的充要条件']] },
        { type: 'keypoint', label: '重点·定义', text: '空间向量 a、b 的数量积定义为 <strong>a·b = |a||b|cos〈a, b〉</strong>，其中 〈a, b〉 表示 a 与 b 的夹角，范围是 0° 到 180°。由此可得：<br>① <strong>a⊥b ⇔ a·b = 0</strong>（垂直的充要条件）；<br>② <strong>a·a = |a|²</strong>（求向量长度的依据）。' },
        { type: 'warn', label: '易错', text: '数量积的运算律中<strong>没有结合律</strong>，即 (a·b)·c 一般不等于 a·(b·c)：左边 a·b 是实数，再与向量 c 数乘得与 c 共线的向量；右边 b·c 是实数，再与 a 数乘得与 a 共线的向量，二者通常不相等。遇到连乘时必须按“先点积得实数，再数乘向量”的顺序计算。' },
        { type: 'example', label: '例题3', text: '已知 |a| = 3，|b| = 4，〈a, b〉= 60°，求 a·b 与 a 在 b 上的投影向量。<br><br><strong>解</strong>：由数量积定义，<br>a·b = |a||b|cos〈a, b〉= 3 × 4 × cos60° = 12 × (1/2) = <strong>6</strong>。<br>a 在 b 上的投影向量 = (a·b / |b|²) · b = (6 / 16) · b = <strong>(3/8) b</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><line x1="100" y1="180" x2="580" y2="180" stroke="#2b5b9e" stroke-width="3"/><polygon points="580,180 562,174 562,186" fill="#2b5b9e"/><text x="590" y="185" font-size="16" fill="#2b5b9e">b</text><line x1="120" y1="180" x2="400" y2="80" stroke="#4a7de0" stroke-width="3.5"/><polygon points="400,80 382,86 392,102" fill="#4a7de0"/><text x="250" y="118" font-size="16" fill="#2b5b9e">a</text><line x1="400" y1="80" x2="400" y2="180" stroke="#7a5aa0" stroke-width="2" stroke-dasharray="6 5"/><line x1="120" y1="180" x2="400" y2="180" stroke="#5a7a2a" stroke-width="5"/><polygon points="400,180 384,174 384,186" fill="#5a7a2a"/><text x="248" y="206" font-size="16" font-weight="bold" fill="#5a7a2a">投影向量</text><g font-size="14" fill="#33536e"><text x="70" y="240">· a 在 b 上的投影向量 = (a·b/|b|²)·b，落于 b 所在直线</text><text x="70" y="223">· 绿色粗线段即投影向量，方向与 b 相同或相反</text></g></svg>', caption: '图3　向量 a 在 b 上的投影向量：绿色粗线段，落于 b 所在直线。' },
        { type: 'heading', text: '五、投影向量' },
        { type: 'keypoint', label: '重点·投影向量', text: '向量 a 在向量 b 上的<strong>投影向量</strong>为<br><strong>(a·b / |b|²) · b</strong>。<br>它等于 a 在 b 方向上的投影数量乘以 b 方向的单位向量；其方向由 a·b 的符号决定（同向或反向），长度等于 |a| 在 b 方向上的投影长度。' },
        { type: 'tip', label: '提示', text: '<strong>投影</strong>与<strong>投影向量</strong>不同：投影是一个<strong>数量</strong>（可正可负），等于 (a·b)/|b|；投影向量是一个<strong>向量</strong>，等于 (a·b/|b|²)·b，位于 b 所在直线上。求长度或夹角用投影数量，求分解或坐标用投影向量。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['空间向量用有向线段表示，记作 a、\\vec{a} 或 \\overrightarrow{AB}，模记作 |a|', '线性运算：加法（三角形/平行四边形法则）、减法、数乘，运算律与平面一致', '共线定理：a≠0 时 b∥a ⇔ b=λa；共面定理：a,b 不共线时 p 共面 ⇔ p=xa+yb', '数量积 a·b=|a||b|cosθ；a⊥b⇔a·b=0；a·a=|a|²（无结合律）', '投影向量 = (a·b/|b|²)b，方向沿 b，长度等于投影数量'] }
      ],
      exercises: [
        { type: 'choice', question: '下列关于空间向量的说法中，正确的是？', options: ['空间任意两个向量都可以比较大小', '零向量与任意向量平行', '长度相等的两个向量一定相等', '方向相反的向量叫做相等向量'], answer: '零向量与任意向量平行', explanation: '空间向量既有大小又有方向，方向无法比较大小，因此空间向量不能比较大小，选项“空间任意两个向量都可以比较大小”错误。相等向量要求方向相同且长度相等，仅长度相等的两个向量未必相等，故该项错误。方向相反的向量是相反向量而非相等向量，故该项错误。根据规定，零向量的方向任意，零向量与任意向量平行，因此“零向量与任意向量平行”正确。' },
        { type: 'choice', question: '已知 a ≠ 0 且向量 b 与 a 平行（b ∥ a），则下列结论正确的是？', options: ['存在唯一实数 λ 使 b = λa', '存在实数 λ 使 a = λb', '存在唯一实数 λ 使 a = λb', '存在实数 λ 使 b = a'], answer: '存在唯一实数 λ 使 b = λa', explanation: '共线（平行）向量定理指出：对空间任意两个向量 a、b，若 a ≠ 0，则 b ∥ a 当且仅当存在唯一的实数 λ，使得 b = λa。定理中等号左边是被表示的向量 b，右边是用非零向量 a 乘以实数 λ，且 λ 唯一。因此正确表述为“存在唯一实数 λ 使 b = λa”。其余选项或将 a、b 位置颠倒，或遗漏“唯一”，均不准确。' },
        { type: 'choice', question: '已知空间向量 a、b 满足 a·b = 0，则下列说法正确的是？', options: ['a = 0 且 b = 0', '一定有 a⊥b', 'a = 0 或 b = 0', 'a⊥b 或 a、b 中至少有一个为零向量'], answer: 'a⊥b 或 a、b 中至少有一个为零向量', explanation: '由数量积公式 a·b = |a||b|cosθ 可知，a·b = 0 当且仅当 |a|=0、|b|=0 或 cosθ=0。这说明要么 a 为零向量，要么 b 为零向量，要么 a 与 b 垂直（θ=90°）。因此 a·b=0 等价于“a⊥b 或 a、b 中至少有一个为零向量”。选项“a = 0 且 b = 0”要求两者同时为零，过强；“一定有 a⊥b”忽略了零向量的情形；“a = 0 或 b = 0”则遗漏了互相垂直但均非零的情形。' },
        { type: 'fill', question: '已知 |a| = 2，|b| = 3，〈a, b〉= 90°，则 a·b = ____。', answer: '0', explanation: '根据空间向量数量积的定义，a·b = |a||b|cos〈a, b〉。已知 |a|=2，|b|=3，夹角〈a, b〉=90°，而 cos90°=0，因此 a·b = 2×3×0 = 0。这也说明当两向量夹角为直角时它们互相垂直，符合 a⊥b ⇔ a·b=0 的性质。故填 0。' },
        { type: 'fill', question: '向量 a 在向量 b 上的投影向量可用 a、b 表示为 ____。', answer: '(a·b/|b|²)b', explanation: '向量 a 在向量 b 上的投影向量，等于 a 在 b 方向上的投影数量乘以 b 方向的单位向量。投影数量为 (a·b)/|b|，b 方向的单位向量为 b/|b|，两者相乘得到 (a·b/|b|²)·b。该公式中分母 |b|² 为正数，保证了投影向量的方向与 b 相同或相反。故填 (a·b/|b|²)b。' }
      ]
    },

    /* ---------------- 第2课时 空间向量基本定理 ---------------- */
    {
      id: 'xb1-u1-l2',
      name: '空间向量基本定理',
      chapter: '第一章 空间向量与立体几何 · 1.2',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、空间向量基本定理' },
        { type: 'paragraph', text: '平面向量基本定理告诉我们：平面内任一向量可由两个不共线向量唯一线性表示。在空间中，需要三个“不共面”的向量才能张成整个三维空间，这就是空间向量基本定理，它是建立空间坐标系、用坐标表示向量的理论依据。' },
        { type: 'keypoint', label: '重点·定理', text: '（空间向量基本定理）如果三个向量 e1、e2、e3 <strong>不共面</strong>，那么对空间<strong>任意</strong>向量 p，存在<strong>唯一</strong>的有序实数组 (x, y, z)，使<br><strong>p = x e1 + y e2 + z e3</strong>。' },
        { type: 'keypoint', label: '重点·基底', text: '把 {e1, e2, e3} 叫做空间的一个<strong>基底</strong>；基底中的每一个向量都叫做<strong>基向量</strong>。基底中的三个向量必须<strong>不共面</strong>，且<strong>都非零</strong>。空间中任意向量都可以由基底唯一表示，表示系数就是该向量在基底下的“坐标”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><polygon points="300,210 470,170 200,150 320,60" fill="#dbe9fb" opacity="0.55"/><line x1="300" y1="210" x2="470" y2="170" stroke="#7a5aa0" stroke-width="2.5"/><line x1="300" y1="210" x2="200" y2="150" stroke="#7a5aa0" stroke-width="2.5"/><line x1="300" y1="210" x2="320" y2="60" stroke="#7a5aa0" stroke-width="2.5"/><line x1="470" y1="170" x2="200" y2="150" stroke="#4a7de0" stroke-width="1.5" opacity="0.7"/><line x1="470" y1="170" x2="320" y2="60" stroke="#4a7de0" stroke-width="1.5" opacity="0.7"/><line x1="200" y1="150" x2="320" y2="60" stroke="#4a7de0" stroke-width="1.5" opacity="0.7"/><circle cx="300" cy="210" r="6" fill="#2b5b9e"/><text x="300" y="232" font-size="16" fill="#2b5b9e">O</text><text x="478" y="166" font-size="16" fill="#7a5aa0">e1</text><text x="180" y="146" font-size="16" fill="#7a5aa0">e2</text><text x="330" y="55" font-size="16" fill="#7a5aa0">e3</text><g font-size="14" fill="#33536e"><text x="60" y="268">· e1、e2、e3 不共面，从同一点 O 出发张成三维空间</text><text x="60" y="252">· 它们构成空间的一组基底</text></g></svg>', caption: '图1　基底 e1、e2、e3：三个不共面向量从同一点出发，张成三维空间。' },
        { type: 'warn', label: '易错', text: '基底的两个必要条件缺一不可：① 三个向量<strong>不共面</strong>（共面则无法张成三维空间）；② 每个向量<strong>都非零</strong>（零向量与任意向量共面，会破坏基底）。判断一组向量能否作基底，核心就是判断它们是否共面。' },
        { type: 'list', items: ['基底不唯一：同一空间可选取不同的基底', '基底中三个向量必须整体上不共面（两两不共面）', '表示系数 (x, y, z) 由基底和向量 p 唯一确定', '基底向量自身也可由该基底表示：e1 = 1·e1 + 0·e2 + 0·e3'] },
        { type: 'heading', text: '二、定理的推论与辨析' },
        { type: 'paragraph', text: '由空间向量基本定理可直接得到一条重要推论：空间中任意三个不共面的向量都可以作为一组基底。因此，“不共面”既是基底的必要条件，也是充分条件。' },
        { type: 'example', label: '例题2', text: '判断下列各组三个向量能否作为空间的一个基底：<br>（1）i = (1, 0, 0)，j = (0, 1, 0)，k = (0, 0, 1)；<br>（2）u = (1, 1, 0)，v = (2, 2, 0)，w = (0, 0, 1)。<br><br><strong>解</strong>：（1）i、j、k 两两垂直，显然不共面，<strong>能</strong>作为基底。<br>（2）u = (1, 1, 0) 与 v = (2, 2, 0) = 2u，即 u 与 v <strong>共线</strong>，三个向量共面，<strong>不能</strong>作为基底。' },
        { type: 'warn', label: '易错', text: '判断“能否作基底”只需一步：看三个向量是否<strong>共面</strong>。常见陷阱是其中两个向量共线（如 (1, 1, 0) 与 (2, 2, 0)），此时三者必共面，不能作基底。三个向量共面 ⇔ 其中一个可由另外两个线性表示，掌握这一点即可快速判断。' },
        { type: 'tip', label: '记忆', text: '记忆口诀：<strong>“基底三向量，不共面且非零”</strong>。遇到“下列可作基底的是”题型，先找有没有两个共线或三个共面的，排除后即可得到答案。' },
        { type: 'heading', text: '三、空间直角坐标系与坐标' },
        { type: 'paragraph', text: '最常用的一组基底是沿 x、y、z 轴正方向的单位向量 i、j、k，它们两两垂直且长度都为 1，称为单位正交基底。以它们为基底建立的坐标系就是空间直角坐标系。' },
        { type: 'keypoint', label: '重点·坐标', text: '在空间直角坐标系中，取 i、j、k 为单位正交基底，则任意向量 p 可唯一表示为<br><strong>p = x i + y j + z k</strong>，<br>有序数组 (x, y, z) 叫做向量 p 的<strong>坐标</strong>，记作 p = (x, y, z)。坐标向量的系数即为该向量在三个坐标轴上的分量。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><line x1="200" y1="200" x2="430" y2="200" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="430,200 414,194 414,206" fill="#2b5b9e"/><line x1="200" y1="200" x2="110" y2="120" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="110,120 122,124 128,138" fill="#2b5b9e"/><line x1="200" y1="200" x2="200" y2="50" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="200,50 194,66 206,66" fill="#2b5b9e"/><text x="440" y="205" font-size="15" fill="#2b5b9e">x (i)</text><text x="95" y="115" font-size="15" fill="#2b5b9e">y (j)</text><text x="205" y="45" font-size="15" fill="#2b5b9e">z (k)</text><line x1="200" y1="200" x2="360" y2="110" stroke="#e05d44" stroke-width="4"/><polygon points="360,110 342,118 354,130" fill="#e05d44"/><text x="300" y="150" font-size="17" font-weight="bold" fill="#c0392b">p</text><line x1="360" y1="110" x2="360" y2="200" stroke="#7a5aa0" stroke-width="2" stroke-dasharray="6 5"/><line x1="200" y1="200" x2="360" y2="200" stroke="#5a7a2a" stroke-width="4"/><text x="262" y="222" font-size="15" fill="#5a7a2a">x</text><g font-size="14" fill="#33536e"><text x="60" y="285">· 单位正交基底 i、j、k 分别沿 x、y、z 轴正向</text><text x="60" y="270">· p = xi + yj + zk，(x, y, z) 即向量坐标</text></g></svg>', caption: '图2　空间直角坐标系：单位正交基底 i、j、k，向量 p = xi+yj+zk。' },
        { type: 'example', label: '例题1', text: '已知 {a, b, c} 是一组基底，向量 p = 2a - b + 3c。<br>（1）写出 p 在基底 {a, b, c} 下的表示；<br>（2）若在该基底下的坐标依次为 (2, -1, 3)，写出 p 的坐标表达式。<br><br><strong>解</strong>：（1）由已知，p 在基底 {a, b, c} 下直接表示为 <strong>p = 2a - b + 3c</strong>。<br>（2）对应系数为 x = 2、y = -1、z = 3，故 p = 2a - b + 3c，其坐标形式即 (2, -1, 3)。' },
        { type: 'example', label: '例题3', text: '在平行六面体 ABCD-A′B′C′D′ 中，用基底向量 \\overrightarrow{AB}、\\overrightarrow{AD}、\\overrightarrow{AA′} 表示体对角线 \\overrightarrow{AG}（G 为与 A 相对的顶点）。<br><br><strong>解</strong>：由平行六面体的结构，从 A 到对角顶点 G 可沿三条棱走到：<br>\\overrightarrow{AG} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA′}。<br>即体对角线等于从同一点出发的三条棱向量之和。' },
        { type: 'heading', text: '四、共面向量与基底对照' },
        { type: 'paragraph', text: '共面向量与基底概念密切相关：两个不共线向量 a、b 张成一个平面，凡是能写成 p = xa + yb 的向量 p 都落在该平面内，即与 a、b 共面；而能作为基底的三个向量必须不共面。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><polygon points="120,170 400,120 560,180 280,230" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="330" y="215" font-size="14" fill="#4a7de0">a,b 张成的平面</text><line x1="200" y1="180" x2="360" y2="150" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="360,150 342,150 350,166" fill="#2b5b9e"/><text x="365" y="145" font-size="15" fill="#2b5b9e">a</text><line x1="200" y1="180" x2="300" y2="205" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="300,205 286,196 298,188" fill="#2b5b9e"/><text x="305" y="222" font-size="15" fill="#2b5b9e">b</text><line x1="200" y1="180" x2="290" y2="172" stroke="#e05d44" stroke-width="4"/><polygon points="290,172 273,171 279,186" fill="#e05d44"/><text x="295" y="165" font-size="16" font-weight="bold" fill="#c0392b">p = xa + yb</text><g font-size="14" fill="#33536e"><text x="70" y="248">· p 落在 a、b 张成的平面内，故 p 与 a、b 共面</text><text x="70" y="232">· 由共面定理：p 共面 ⇔ p = xa + yb（a,b 不共线）</text></g></svg>', caption: '图3　共面向量：p 落在 a、b 张成的平面内，即 p = xa+yb。' },
        { type: 'table', headers: ['概念', '条件', '表示'], rows: [['基底 {e1,e2,e3}', '三个向量不共面且非零', 'p = x e1 + y e2 + z e3'], ['单位正交基底 {i,j,k}', '两两垂直的单位向量', 'p = x i + y j + z k'], ['向量坐标', '在基底下的系数', '(x, y, z)']] },
        { type: 'keypoint', label: '重点', text: '空间向量基本定理统一了“基底表示”与“坐标表示”：选一般基底得到一般坐标，选单位正交基底 {i, j, k} 就得到常用的空间直角坐标 (x, y, z)。坐标的本质就是向量在基底下的表示系数。' },
        { type: 'tip', label: '提示', text: '由坐标 (x, y, z) 求基底表达式、或由基底表达式读坐标，只需“系数对应”：p = xi + yj + zk 的坐标就是 (x, y, z)；反过来已知坐标即可直接写出表达式。处理平行六面体、四面体问题时，常选从同一点出发的三条棱作为基底。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['空间向量基本定理：e1,e2,e3 不共面 ⇒ 任意 p 可唯一表为 p=xe1+ye2+ze3', '基底须满足：三个向量不共面且都非零', '推论：任意三个不共面向量都可作为一组基底', '单位正交基底 i,j,k：p = xi+yj+zk，有序数组 (x,y,z) 即坐标', '共面向量 p = xa+yb（a,b 不共线）落在 a,b 张成的平面内'] }
      ],
      exercises: [
        { type: 'choice', question: '空间中能作为基底的三个向量，必须满足的条件是？', options: ['三个向量两两垂直', '三个向量模长都相等', '三个向量不共面', '三个向量方向都相同'], answer: '三个向量不共面', explanation: '空间向量基本定理要求基底中的三个向量不共面，且都非零。只有三个向量不共面，才能线性表示空间中任意一个向量，并保证表示系数的唯一性。两两垂直只是不共面的一种特殊情况，并非必要条件；模长相等、方向相同均不能保证不共面（方向相同甚至共线）。因此能作为基底的充要条件是三个向量不共面。' },
        { type: 'choice', question: '在空间直角坐标系中，向量 p 的坐标为 (2, -1, 3)，则 p 可以表示为？', options: ['2i + j + 3k', '2i - j + 3k', '-2i + j - 3k', 'i - j + 3k'], answer: '2i - j + 3k', explanation: '空间直角坐标系中取 i、j、k 分别为 x、y、z 轴正方向的单位向量，构成单位正交基底。向量 p 的坐标 (x, y, z) 即表示 p = xi + yj + zk。将坐标 (2, -1, 3) 代入，得到 p = 2i + (-1)j + 3k = 2i - j + 3k。因此正确选项为 2i - j + 3k。' },
        { type: 'choice', question: '下列三组向量中，能作为空间基底的一组是？', options: ['(1,0,0), (2,0,0), (0,1,0)', '(1,1,0), (2,2,0), (0,0,1)', '(1,0,0), (0,1,0), (0,0,1)', '(1,1,1), (2,2,2), (3,3,3)'], answer: '(1,0,0), (0,1,0), (0,0,1)', explanation: '能作为空间基底的三个向量必须不共面。第一组（1,0,0）与（2,0,0）共线，三个向量共面；第二组（1,1,0）与（2,2,0）也共线，共面；第四组三个向量两两共线，更不可能不共面。第三组（1,0,0）、（0,1,0）、（0,0,1）分别对应 x、y、z 轴正方向的单位向量，两两垂直，显然不共面，可以作为基底。' },
        { type: 'fill', question: '空间向量基本定理中，实数组 (x, y, z) 的“唯一性”依赖于基底向量 e1、e2、e3 ____。', answer: '不共面', explanation: '空间向量基本定理指出：若 e1、e2、e3 不共面，则对任意向量 p，存在唯一的有序实数组 (x, y, z) 使 p = xe1 + ye2 + ze3。这里的“唯一性”正是建立在三个基底向量不共面的前提之上；若 e1、e2、e3 共面，则它们无法张成整个三维空间，表示系数将不再唯一甚至无法表示全部向量。故填“不共面”。' },
        { type: 'fill', question: '若向量 p 的坐标为 (1, 2, -1)，则它在 z 轴上的分量为 ____。', answer: '-k | (0,0,-1)', explanation: '向量 p 的坐标 (x, y, z) 表示 p = xi + yj + zk，其中 zk 就是在 z 轴上的分量。将坐标 (1, 2, -1) 代入，z 坐标为 -1，故 p 在 z 轴上的分量为 -1·k = -k，等价地写为坐标形式 (0, 0, -1)。因此答案为 -k（或写成 (0,0,-1)）。' }
      ]
    }

  );
})();
