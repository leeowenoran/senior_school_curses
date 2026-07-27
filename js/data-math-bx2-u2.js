/* ============================================================
 * 高一数学 · 必修 第二册 · 第六章 平面向量及其应用
 * 第1课时：平面向量基本定理及坐标表示（人教A版 §6.3）
 * 第2课时：平面向量的应用（人教A版 §6.4）
 * 数据注入：math.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx2');
  if (!v) return;
  v.points.push(

    /* ---------------- 第1课时 平面向量基本定理及坐标表示 ---------------- */
    {
      id: 'bx2-u2-l1',
      name: '平面向量基本定理及坐标表示',
      chapter: '第六章 平面向量及其应用 · 6.3',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、平面向量基本定理' },
        { type: 'paragraph', text: '要在一个平面内表示任意一个向量，只需要选定一对特殊的向量作为“标尺”。这对标尺必须能“张开”整个平面，不能随意选取，这就是基底的作用。' },
        { type: 'keypoint', label: '重点·基本定理', text: '如果 e1、e2 是同一平面内两个<strong>不共线</strong>的向量，那么对于这一平面内的<strong>任意向量 a</strong>，<strong>有且只有一对</strong>实数 λ1、λ2，使 <strong>a = λ1e1 + λ2e2</strong>。其中 e1、e2 叫做表示这一平面内所有向量的一组<strong>基底</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">图1　平面向量基本定理：a = λ1e1 + λ2e2</text><line x1="60" y1="210" x2="620" y2="210" stroke="#9bb4d4" stroke-width="1"/><line x1="70" y1="230" x2="70" y2="40" stroke="#9bb4d4" stroke-width="1"/><line x1="70" y1="210" x2="250" y2="150" stroke="#2b5b9e" stroke-width="3"/><polygon points="250,150 237,152 243,164" fill="#2b5b9e"/><text x="150" y="172" font-size="15" fill="#2b5b9e" text-anchor="middle">e1</text><line x1="70" y1="210" x2="170" y2="70" stroke="#4a7de0" stroke-width="3"/><polygon points="170,70 158,76 166,86" fill="#4a7de0"/><text x="108" y="125" font-size="15" fill="#4a7de0" text-anchor="middle">e2</text><line x1="70" y1="210" x2="420" y2="80" stroke="#e05d44" stroke-width="3.5"/><polygon points="420,80 406,86 412,98" fill="#e05d44"/><text x="250" y="138" font-size="16" fill="#c0392b" font-weight="bold" text-anchor="middle">a</text><line x1="250" y1="150" x2="420" y2="80" stroke="#bbb" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="170" y1="70" x2="420" y2="80" stroke="#bbb" stroke-width="1.2" stroke-dasharray="4 3"/><text x="340" y="245" font-size="14" fill="#33536e" text-anchor="middle">任意向量 a 都可由不共线的 e1、e2 唯一线性组合表示</text></svg>', caption: '图1　基本定理：平面内任意向量 a 可由不共线基底 e1、e2 唯一表示为 a = λ1e1 + λ2e2。' },
        { type: 'list', items: ['基底必须是两个不共线的向量（共线则无法张成整个平面）', '基底不要求垂直，也不要求长度相等，任意一对不共线向量都可作为基底', 'λ1、λ2 由 a 和基底唯一确定，具有唯一性', '同一平面内基底不唯一，但任意向量在同一组基底下的系数唯一'] },
        { type: 'heading', text: '二、向量的正交分解' },
        { type: 'keypoint', label: '重点·正交分解', text: '把一个向量分解为两个<strong>互相垂直</strong>的向量，叫做向量的<strong>正交分解</strong>。正交分解中的两个分向量互相正交，是最常用的一种分解方式。' },
        { type: 'paragraph', text: '正交分解在坐标系中尤为自然：选取互相垂直的单位向量作为基底，分解后的两个系数恰好就是向量的坐标，二者是一脉相承的。' },
        { type: 'example', label: '例题1', text: '将向量 a 分解为沿水平方向、竖直方向的两个互相垂直的分量。<br><br><strong>解</strong>：取水平单位向量 e1、竖直单位向量 e2，则 a 可写成 <strong>a = x e1 + y e2</strong> 的形式，其中 x、y 即为两个正交分量的大小，也就是后续要学习的向量坐标。' },
        { type: 'list', items: ['正交基底：互相垂直的一对向量，如单位向量 i、j', '任意不共线向量都可作为基底，但正交基底计算最简便', '基底改变时，同一向量的系数（坐标）也会随之改变'] },
        { type: 'heading', text: '三、向量的坐标表示' },
        { type: 'keypoint', label: '重点·坐标表示', text: '在平面直角坐标系中，分别取与 x 轴、y 轴方向相同的两个<strong>单位向量 i、j</strong> 作为基底，则对于向量 a，有 <strong>a = x i + y j</strong>，记作 <strong>a = (x, y)</strong>。其中 x 叫做 a 在 x 轴上的坐标，y 叫做 a 在 y 轴上的坐标。' },
        { type: 'paragraph', text: '向量的坐标本质上就是它在两坐标轴上投影的长度（带符号）。起点在原点的向量，其终点坐标与向量坐标完全相同，这是坐标表示最方便之处。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">图2　正交基底 i、j 与向量坐标 a = (x, y)</text><line x1="90" y1="220" x2="620" y2="220" stroke="#33536e" stroke-width="1.5"/><line x1="110" y1="230" x2="110" y2="40" stroke="#33536e" stroke-width="1.5"/><text x="615" y="238" font-size="14" fill="#33536e" text-anchor="end">x</text><text x="95" y="50" font-size="14" fill="#33536e" text-anchor="middle">y</text><circle cx="110" cy="220" r="4" fill="#2b5b9e"/><text x="98" y="240" font-size="13" fill="#33536e" text-anchor="middle">O</text><line x1="110" y1="220" x2="240" y2="220" stroke="#2b5b9e" stroke-width="3"/><polygon points="240,220 228,215 228,225" fill="#2b5b9e"/><text x="175" y="240" font-size="14" fill="#2b5b9e" text-anchor="middle">i</text><line x1="110" y1="220" x2="110" y2="90" stroke="#4a7de0" stroke-width="3"/><polygon points="110,90 105,102 115,102" fill="#4a7de0"/><text x="92" y="155" font-size="14" fill="#4a7de0" text-anchor="middle">j</text><line x1="110" y1="220" x2="470" y2="120" stroke="#e05d44" stroke-width="3.5"/><polygon points="470,120 456,124 461,137" fill="#e05d44"/><text x="300" y="160" font-size="16" fill="#c0392b" font-weight="bold" text-anchor="middle">a = (x, y)</text><line x1="110" y1="220" x2="470" y2="220" stroke="#5a7a2a" stroke-width="2" stroke-dasharray="5 3"/><line x1="470" y1="220" x2="470" y2="120" stroke="#7a5aa0" stroke-width="2" stroke-dasharray="5 3"/><text x="290" y="238" font-size="13" fill="#5a7a2a" text-anchor="middle">x = 横坐标</text><text x="486" y="175" font-size="13" fill="#7a5aa0" text-anchor="start">y = 纵坐标</text><text x="340" y="252" font-size="14" fill="#33536e" text-anchor="middle">a 在 x、y 轴上的投影分别给出坐标 x、y</text></svg>', caption: '图2　取与坐标轴同向的单位向量 i、j 为基底，向量 a = xi + yj，记作坐标 (x, y)。' },
        { type: 'list', items: ['a = (x, y) 表示 a 在 x 方向的分量为 x，在 y 方向的分量为 y', '相等向量坐标相同；零向量坐标为 (0, 0)', '向量坐标与点坐标的区别：向量只有大小方向，点有固定位置'] },
        { type: 'heading', text: '四、向量的坐标运算' },
        { type: 'keypoint', label: '重点·加减法', text: '设 a = (x1, y1)，b = (x2, y2)，则<br>加法：<strong>a + b = (x1 + x2, y1 + y2)</strong><br>减法：<strong>a − b = (x1 − x2, y1 − y2)</strong><br>即对应坐标分别相加、相减。' },
        { type: 'keypoint', label: '重点·数乘', text: '设 a = (x, y)，实数 λ，则 <strong>λ a = (λ x, λ y)</strong>。数乘就是把每个坐标分量同乘以 λ，几何上表示对向量拉伸或反向。' },
        { type: 'keypoint', label: '重点·数量积', text: '设 a = (x1, y1)，b = (x2, y2)，则<strong>数量积 a · b = x1 x2 + y1 y2</strong>。注意结果是一个实数，不是向量。' },
        { type: 'example', label: '例题2', text: '已知 a = (1, 2)，b = (3, −1)，求 a + b、2a、a · b。<br><br><strong>解</strong>：a + b = (1+3, 2+(−1)) = <strong>(4, 1)</strong>；2a = (2×1, 2×2) = <strong>(2, 4)</strong>；a · b = 1×3 + 2×(−1) = <strong>1</strong>。' },
        { type: 'table', headers: ['运算', '坐标表示', '说明'], rows: [['加法', 'a+b = (x1+x2, y1+y2)', '对应坐标相加'], ['减法', 'a−b = (x1−x2, y1−y2)', '对应坐标相减'], ['数乘', 'λa = (λx, λy)', '各分量同乘 λ'], ['数量积', 'a·b = x1x2 + y1y2', '结果为实数'], ['共线', 'a∥b ⇔ x1y2−x2y1 = 0', '坐标判定两向量平行']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">图3　向量共线坐标判定：x1y2 − x2y1 = 0</text><line x1="70" y1="170" x2="620" y2="90" stroke="#9bb4d4" stroke-width="1.5"/><line x1="90" y1="162" x2="280" y2="130" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="280,130 267,131 272,143" fill="#2b5b9e"/><text x="175" y="120" font-size="15" fill="#2b5b9e" text-anchor="middle">a = (x1, y1)</text><line x1="90" y1="162" x2="470" y2="108" stroke="#e05d44" stroke-width="3.5"/><polygon points="470,108 457,109 462,121" fill="#e05d44"/><text x="330" y="100" font-size="15" fill="#c0392b" text-anchor="middle">b = (x2, y2)</text><rect x="150" y="185" width="380" height="38" rx="6" fill="#fff" stroke="#4a7de0" stroke-width="1.5"/><text x="340" y="210" font-size="16" fill="#2b5b9e" font-weight="bold" text-anchor="middle">a ∥ b  ⇔  x1·y2 − x2·y1 = 0</text></svg>', caption: '图3　两向量共线的坐标充要条件：x1y2 − x2y1 = 0。' },
        { type: 'keypoint', label: '重点·共线坐标表示', text: '设 a = (x1, y1)，b = (x2, y2) 且 b ≠ 0，则 <strong>a ∥ b ⇔ x1 y2 − x2 y1 = 0</strong>。这是判断两向量（或两点连线）是否平行最便捷的坐标方法。' },
        { type: 'example', label: '例题3', text: '已知 a = (2, 3)，b = (4, m)，若 a ∥ b，求 m。<br><br><strong>解</strong>：由共线条件 x1y2 − x2y1 = 0，代入得 2m − 4×3 = 0，即 2m = 12，解得 <strong>m = 6</strong>。' },
        { type: 'warn', label: '易错', text: '坐标运算三类易错点：①<strong>混淆加减方向</strong>，a − b 是 a 的坐标减 b 的坐标，不是反过来；②<strong>数量积与数乘混淆</strong>，a·b 得到的是实数，而 λa 仍是向量，别把结果写成向量或实数两可；③<strong>共线公式写反顺序</strong>，应是 x1y2 − x2y1，写成 x1y1 − x2y2 或漏掉减号都会导致判断错误。' },
        { type: 'tip', label: '记忆', text: '坐标运算口诀：<strong>加减对应分量算，数乘逐项同乘 λ，数量积交叉相乘再相加</strong>。判断共线优先用 x1y2 − x2y1 = 0，比画图更快更准。做题时先把向量写成 (x, y) 形式，再代入公式，几乎不会出错。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['基本定理：a = λ1e1 + λ2e2（e1、e2 不共线，系数唯一）', '正交分解：分解为两个互相垂直的分量', '坐标表示：a = xi + yj = (x, y)', '坐标运算：加减、数乘、数量积、共线的坐标公式', '共线判定：a∥b ⇔ x1y2 − x2y1 = 0'] }
      ],
      exercises: [
        { type: 'choice', question: '关于平面向量基本定理，下列说法正确的是？', options: ['任意两个向量都可以作为基底', '同一平面内任意向量都可由两个不共线向量唯一线性表示', '基底向量必须互相垂直', 'λ1、λ2 可以不唯一'], answer: '同一平面内任意向量都可由两个不共线向量唯一线性表示', explanation: '平面向量基本定理要求基底是两个不共线的向量，平面内任意向量都能被这对基底唯一表示，且系数唯一。基底不必垂直，也可以不止一对。故只有“同一平面内任意向量都可由两个不共线向量唯一线性表示”正确。' },
        { type: 'choice', question: '已知向量 a = 3i + 4j（i、j 为坐标基底），则 a 的坐标是？', options: ['(3, 4)', '(4, 3)', '(3, 0)', '(0, 4)'], answer: '(3, 4)', explanation: '由坐标表示 a = xi + yj 可知，x 是 i 方向的系数、y 是 j 方向的系数，故 a = 3i + 4j 对应坐标为 (3, 4)。其余选项把两分量次序颠倒或只取了单一方向，均不正确。' },
        { type: 'choice', question: '已知向量 a = (2, 3)，b = (4, m)，若 a ∥ b，则 m = ?', options: ['5', '6', '7', '8'], answer: '6', explanation: '两向量共线的坐标条件为 x1y2 − x2y1 = 0。代入 a=(2,3)、b=(4,m) 得 2m − 4×3 = 0，即 2m = 12，解得 m = 6。将 m=6 代回验证 2×6−4×3=0，满足共线条件。' },
        { type: 'fill', question: '已知向量 a = (1, 2)，b = (3, −1)，则 a + b = ____。', answer: '(4, 1)|(4,1)', explanation: '向量相加时对应坐标分别相加：a+b 的 x 分量 1+3=4，y 分量 2+(−1)=1，故 a+b=(4, 1)。注意减号属于坐标值的一部分，结果写作 (4,1) 或 (4, 1) 均可。' },
        { type: 'fill', question: '已知向量 a = (2, 3)，b = (1, −1)，则 a · b = ____。', answer: '-1', explanation: '向量数量积的坐标公式为 a·b = x1x2 + y1y2。代入 a=(2,3)、b=(1,−1) 得 2×1 + 3×(−1) = 2 − 3 = −1。数量积的结果是实数而非向量，故填 −1。' }
      ]
    },

    /* ---------------- 第2课时 平面向量的应用 ---------------- */
    {
      id: 'bx2-u2-l2',
      name: '平面向量的应用',
      chapter: '第六章 平面向量及其应用 · 6.4',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、向量在平面几何中的应用' },
        { type: 'paragraph', text: '很多平面几何中的平行、垂直、长度、夹角问题，都可以转化为向量的运算。向量法把几何关系“代数化”，避免添辅助线、找全等相似的技巧性，思路统一而直接。' },
        { type: 'keypoint', label: '重点·向量法证几何', text: '用向量方法研究几何关系：<br>①<strong>平行</strong>：两直线方向向量共线（成比例）；<br>②<strong>垂直</strong>：两直线方向向量数量积为 0；<br>③<strong>长度与夹角</strong>：用 |a|、a·b 与夹角公式。把点用坐标或向量表示后，几何结论就变成代数等式。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">图1　向量法证几何：平行与垂直</text><line x1="90" y1="180" x2="320" y2="180" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="320,180 307,175 307,185" fill="#2b5b9e"/><text x="205" y="170" font-size="15" fill="#2b5b9e" text-anchor="middle">u</text><line x1="320" y1="180" x2="320" y2="70" stroke="#e05d44" stroke-width="3.5"/><polygon points="320,70 315,82 325,82" fill="#e05d44"/><text x="335" y="125" font-size="15" fill="#c0392b" text-anchor="start">v ⟂ u（u·v = 0）</text><path d="M320 160 L340 160 L340 180" fill="none" stroke="#5a7a2a" stroke-width="2"/><text x="360" y="205" font-size="14" fill="#33536e" text-anchor="middle">垂直 ⇔ 两方向向量数量积为 0</text><line x1="110" y1="230" x2="300" y2="230" stroke="#4a7de0" stroke-width="3"/><polygon points="300,230 287,225 287,235" fill="#4a7de0"/><line x1="380" y1="230" x2="570" y2="230" stroke="#4a7de0" stroke-width="3"/><polygon points="570,230 557,225 557,235" fill="#4a7de0"/><text x="245" y="248" font-size="13" fill="#33536e" text-anchor="middle">平行 ⇔ 方向向量共线（成比例）</text></svg>', caption: '图1　用方向向量的数量积为 0 证明垂直，用方向向量共线（成比例）证明平行。' },
        { type: 'example', label: '例题1', text: '已知四边形 ABCD 中，向量 AB = (2, 3)，DC = (2, 3)，求证 AB ∥ DC 且 AB = DC。<br><br><strong>解</strong>：AB 与 DC 的坐标完全相同，故两向量<strong>相等</strong>，方向相同、长度相等，因此 AB 与 DC <strong>平行且相等</strong>，四边形 ABCD 为平行四边形。' },
        { type: 'list', items: ['建立坐标系或用字母表示相关向量', '把要证的几何量（边、角、平行、垂直）翻译成向量运算', '通过向量等式或数量积得出结论', '优先用数量积判垂直、用共线判平行'] },
        { type: 'heading', text: '二、向量在物理中的应用' },
        { type: 'keypoint', label: '重点·力的合成分解', text: '力、速度、位移等都是既有大小又有方向的<strong>向量</strong>。多个力作用于同一点时，合力等于各分力的<strong>向量和</strong>，遵循<strong>平行四边形法则</strong>；把一个力分解为两个分力，则是向量分解的逆过程。' },
        { type: 'paragraph', text: '物理中的矢量运算与数学中的向量运算完全一致：速度的合成、位移的合成、力的平衡（合力为零向量）都可以用向量工具处理，这是向量最直观的应用场景。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">图2　力的合成：平行四边形法则</text><circle cx="140" cy="200" r="4" fill="#2b5b9e"/><line x1="140" y1="200" x2="330" y2="160" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="330,160 317,161 322,173" fill="#2b5b9e"/><text x="225" y="150" font-size="15" fill="#2b5b9e" text-anchor="middle">F1</text><line x1="140" y1="200" x2="250" y2="80" stroke="#4a7de0" stroke-width="3.5"/><polygon points="250,80 237,84 244,95" fill="#4a7de0"/><text x="180" y="130" font-size="15" fill="#4a7de0" text-anchor="middle">F2</text><line x1="330" y1="160" x2="440" y2="40" stroke="#bbb" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="250" y1="80" x2="440" y2="40" stroke="#bbb" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="140" y1="200" x2="440" y2="40" stroke="#e05d44" stroke-width="4"/><polygon points="440,40 425,46 430,58" fill="#e05d44"/><text x="300" y="100" font-size="16" fill="#c0392b" font-weight="bold" text-anchor="middle">F 合力</text><text x="340" y="245" font-size="14" fill="#33536e" text-anchor="middle">以 F1、F2 为邻边的平行四边形对角线表示合力 F = F1 + F2</text></svg>', caption: '图2　两个共点力的合力遵循平行四边形法则，对角线即合力向量。' },
        { type: 'example', label: '例题2', text: '两个共点力 F1、F2 大小分别为 3 N、4 N，方向互相垂直，求合力大小。<br><br><strong>解</strong>：设 F1 = (3, 0)，F2 = (0, 4)，则合力 F = F1 + F2 = (3, 4)，其大小 |F| = <strong>5 N</strong>（由 3²+4²=5²）。' },
        { type: 'list', items: ['力、速度、加速度、位移都是向量，运算满足向量法则', '合力（合速度）用平行四边形法则或三角形法则求', '平衡条件：所有力的向量和为零向量'] },
        { type: 'heading', text: '三、余弦定理与正弦定理' },
        { type: 'keypoint', label: '重点·余弦定理', text: '在 △ABC 中，设三边为 a、b、c（a 对角 A），则 <strong>a² = b² + c² − 2bc·cosA</strong>。同理有 b² = a² + c² − 2ac·cosB，c² = a² + b² − 2ab·cosC。可由向量法推导：a = b − c（向量），两边平方即得。' },
        { type: 'keypoint', label: '重点·正弦定理', text: '在 △ABC 中，<strong>a / sinA = b / sinB = c / sinC = 2R</strong>，其中 R 为三角形<strong>外接圆半径</strong>。它把边与对角的正弦联系起来，适用于“已知两角一边”或“已知两边与其中一边的对角”的情形。' },
        { type: 'table', headers: ['定理', '公式', '适用情形'], rows: [['余弦定理', 'a² = b² + c² − 2bc·cosA', '已知三边，或两边及夹角'], ['正弦定理', 'a/sinA = b/sinB = c/sinC = 2R', '已知两角一边，或两边及一对角'], ['联系', '二者可互推，均用于解三角形', '配合求边、求角、求面积']] },
        { type: 'example', label: '例题3', text: '在 △ABC 中，b = 3，c = 4，A = 60°，求 a。<br><br><strong>解</strong>：由余弦定理 a² = b² + c² − 2bc·cosA = 9 + 16 − 2×3×4×cos60° = 25 − 12 = 13，故 <strong>a = √13</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">图3　解三角形：标注边 a、b、c 与对角 A、B、C</text><polygon points="150,210 540,210 330,70" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><text x="140" y="230" font-size="16" fill="#2b5b9e" font-weight="bold" text-anchor="middle">A</text><text x="555" y="230" font-size="16" fill="#2b5b9e" font-weight="bold" text-anchor="middle">B</text><text x="330" y="62" font-size="16" fill="#2b5b9e" font-weight="bold" text-anchor="middle">C</text><text x="345" y="150" font-size="15" fill="#e05d44" font-weight="bold" text-anchor="middle">c</text><text x="245" y="130" font-size="15" fill="#5a7a2a" font-weight="bold" text-anchor="middle">b</text><text x="445" y="130" font-size="15" fill="#7a5aa0" font-weight="bold" text-anchor="middle">a</text><path d="M190 210 A40 40 0 0 1 175 178" fill="none" stroke="#33536e" stroke-width="1.5"/><text x="205" y="195" font-size="13" fill="#33536e" text-anchor="middle">A</text><path d="M500 210 A40 40 0 0 0 515 178" fill="none" stroke="#33536e" stroke-width="1.5"/><text x="498" y="195" font-size="13" fill="#33536e" text-anchor="middle">B</text><path d="M330 110 A40 40 0 0 1 362 95" fill="none" stroke="#33536e" stroke-width="1.5"/><text x="320" y="100" font-size="13" fill="#33536e" text-anchor="middle">C</text><text x="340" y="248" font-size="14" fill="#33536e" text-anchor="middle">边 a 对角 A，边 b 对角 B，边 c 对角 C（正弦定理、余弦定理的基础）</text></svg>', caption: '图3　解三角形时约定：边 a、b、c 分别对角 A、B、C。' },
        { type: 'heading', text: '四、解三角形' },
        { type: 'keypoint', label: '重点·解三角形', text: '利用<strong>正弦定理</strong>与<strong>余弦定理</strong>求解三角形的未知边与未知角，叫做<strong>解三角形</strong>。一般步骤：先判断已知量属于哪种情形，再选用合适的定理，最后结合三角形内角和 180° 求出其余元素。' },
        { type: 'example', label: '例题4', text: '在 △ABC 中，a = 2，A = 30°，求外接圆直径 2R。<br><br><strong>解</strong>：由正弦定理 a / sinA = 2R，代入得 2R = 2 / sin30° = 2 / 0.5 = <strong>4</strong>。' },
        { type: 'warn', label: '易错', text: '解三角形两类易错：①<strong>“两边及一对角”可能两解</strong>，如已知 a、b、A 时，B 可能有两个值（一锐一钝），需结合图形或“大边对大角”判断，不能随意舍解；②<strong>余弦定理符号</strong>，减号 −2bc·cosA 容易漏写或写错，当 A 为钝角时 cosA 为负，整体反成加，务必小心。' },
        { type: 'tip', label: '记忆', text: '选定理口诀：<strong>“知三边或两边夹角，用余弦；知两角一边或两边及对角，用正弦”</strong>。遇到“两边及一对角”先想是否两解。把边与对角配对（a 对 A、b 对 B、c 对 C）写清楚，再代入公式，可避免张冠李戴。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['向量法证几何：数量积为 0 判垂直，共线判平行', '物理应用：力、速度等按向量合成，平行四边形法则', '余弦定理：a² = b² + c² − 2bc·cosA', '正弦定理：a/sinA = b/sinB = c/sinC = 2R', '解三角形：依已知情形选定理，注意“两边及对角”可能两解'] }
      ],
      exercises: [
        { type: 'choice', question: '用向量方法判断两直线垂直，应验证？', options: ['两直线方向向量平行', '两直线方向向量数量积为 0', '两直线方向向量长度相等', '两直线方向向量夹角为 60°'], answer: '两直线方向向量数量积为 0', explanation: '两直线垂直的向量判定依据是它们方向向量的数量积为零：若 u·v=0，则两直线垂直。方向向量平行对应平行关系，长度相等或夹角为 60° 均与垂直无关，故只有“数量积为 0”正确。' },
        { type: 'choice', question: '在 △ABC 中，已知 b = 3，c = 4，A = 60°，由余弦定理得 a² = ?', options: ['9 + 16 + 2×3×4×cos60°', '9 + 16 − 2×3×4×cos60°', '13', '25'], answer: '13', explanation: '余弦定理公式 a² = b² + c² − 2bc·cosA。代入 b=3、c=4、cos60°=0.5，得 a² = 9+16−2×3×4×0.5 = 25−12 = 13。注意中间项带减号且 cos60° 等于 0.5，计算结果为 13。' },
        { type: 'choice', question: '在 △ABC 中，a = 2，A = 30°，则外接圆直径 2R = ?（R 为外接圆半径）', options: ['2 / sin30°', '2 × sin30°', 'sin30° / 2', '4'], answer: '4', explanation: '正弦定理给出 a/sinA = 2R。代入 a=2、sinA=sin30°=0.5，得 2R = 2/0.5 = 4。其余选项把分子分母颠倒或误用乘法，均不符合正弦定理的关系。' },
        { type: 'fill', question: '两个共点力 F1、F2 的合力可用____法则（以 F1、F2 为邻边作平行四边形，对角线即合力）表示。', answer: '平行四边形', explanation: '力的合成遵循平行四边形法则：以两个分力为邻边作平行四边形，该平行四边形对角线的长度与方向即表示合力。这是向量加法在物理中的直接应用，故应填“平行四边形”。' },
        { type: 'fill', question: '在 △ABC 中，已知 a = 6，b = 6√3，A = 30°，由正弦定理可得 sinB = ____。', answer: '√3/2', explanation: '由正弦定理 a/sinA = b/sinB，变形得 sinB = (b·sinA)/a。代入 a=6、b=6√3、sin30°=0.5，算得 sinB = (6√3×0.5)/6 = √3/2。注意这里得到的是正弦值而非角度。' }
      ]
    }

  );
})();
