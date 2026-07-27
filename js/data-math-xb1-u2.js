/* ============================================================
 * 高中数学 · 选择性必修 第一册 · 第一章 空间向量与立体几何
 * 第1课时：空间向量及其运算的坐标表示（人教A版 §1.3）
 * 第2课时：空间向量的应用（人教A版 §1.4）
 * 数据注入：math.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'xb1');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 空间向量及其运算的坐标表示 ---------------- */
    {
      id: 'xb1-u2-l1',
      name: '空间向量及其运算的坐标表示',
      chapter: '第一章 空间向量与立体几何 · 1.3',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、空间向量的坐标表示' },
        { type: 'paragraph', text: '在平面向量中，我们可以用一对有序实数 (x, y) 表示向量。推广到空间，建立空间直角坐标系后，空间中的任意一个向量都可以用三个有序实数来表示，这为空间图形的代数化运算奠定了基础。' },
        { type: 'keypoint', label: '重点·坐标表示', text: '在空间直角坐标系 Oxyz 中，分别取与 x 轴、y 轴、z 轴方向相同的单位向量 i、j、k 作为基底，则对任意空间向量 a，存在唯一有序实数组 (x, y, z)，使 <strong>a = x i + y j + z k</strong>。有序实数组 (x, y, z) 叫做 a 的<strong>坐标</strong>，记作 <strong>a = (x, y, z)</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">空间向量的坐标分解 a=(x,y,z)</text><polygon points="150,270 360,270 420,205 210,205" fill="#dbe9fb" stroke="#4a7de0" stroke-width="1.5"/><polygon points="150,270 150,120 360,120 360,270" fill="#c4dcf6" stroke="#4a7de0" stroke-width="1.5"/><polygon points="360,270 420,205 420,55 360,120" fill="#a8cdf0" stroke="#4a7de0" stroke-width="1.5"/><line x1="210" y1="205" x2="210" y2="55" stroke="#4a7de0" stroke-width="1.5"/><line x1="150" y1="120" x2="210" y2="55" stroke="#4a7de0" stroke-width="1.5"/><line x1="210" y1="55" x2="420" y2="55" stroke="#4a7de0" stroke-width="1.5"/><line x1="120" y1="270" x2="400" y2="270" stroke="#2b5b9e" stroke-width="2"/><line x1="150" y1="295" x2="150" y2="100" stroke="#2b5b9e" stroke-width="2"/><text x="412" y="276" font-size="15" fill="#2b5b9e">x</text><text x="130" y="96" font-size="15" fill="#2b5b9e">z</text><line x1="150" y1="270" x2="360" y2="270" stroke="#5a7a2a" stroke-width="2" stroke-dasharray="6 4"/><line x1="360" y1="270" x2="420" y2="205" stroke="#5a7a2a" stroke-width="2" stroke-dasharray="6 4"/><line x1="420" y1="205" x2="420" y2="55" stroke="#5a7a2a" stroke-width="2" stroke-dasharray="6 4"/><text x="240" y="294" font-size="14" fill="#5a7a2a">x 分量</text><text x="430" y="245" font-size="14" fill="#5a7a2a">y 分量</text><text x="430" y="135" font-size="14" fill="#5a7a2a">z 分量</text><line x1="150" y1="270" x2="420" y2="55" stroke="#e05d44" stroke-width="3"/><circle cx="420" cy="55" r="5" fill="#e05d44"/><text x="300" y="160" font-size="15" fill="#c0392b" font-weight="bold">a</text><text x="432" y="52" font-size="14" fill="#c0392b">P(x,y,z)</text><text x="60" y="322" font-size="15" fill="#33536e">向量 a 由原点指向点 P(x, y, z)，其坐标就是 P 的三维坐标。</text><text x="60" y="344" font-size="15" fill="#33536e">绿色虚线表示沿 x、y、z 三个方向的分量，三者合成即为向量 a。</text></svg>', caption: '图1　空间向量 a 的坐标分解：从原点沿 x、y、z 三个分量合成得到向量。' },
        { type: 'heading', text: '二、空间向量的线性运算（坐标表示）' },
        { type: 'keypoint', label: '重点·线性运算', text: '设 a = (x₁, y₁, z₁)，b = (x₂, y₂, z₂)，λ 为实数，则：<br>加法 <strong>a + b = (x₁+x₂, y₁+y₂, z₁+z₂)</strong><br>减法 <strong>a − b = (x₁−x₂, y₁−y₂, z₁−z₂)</strong><br>数乘 <strong>λa = (λx₁, λy₁, λz₁)</strong><br>线性运算归结为对应坐标的加、减、乘运算。' },
        { type: 'example', label: '例题1', text: '已知 a = (1, 2, −1)，b = (0, 1, 3)，求 a + b、3a − 2b、a·b 与 |a|。<br><br><strong>解</strong>：<br>a + b = (1+0, 2+1, −1+3) = <strong>(1, 3, 2)</strong>；<br>3a − 2b = (3, 6, −3) − (0, 2, 6) = <strong>(3, 4, −9)</strong>；<br>a·b = 1×0 + 2×1 + (−1)×3 = 0 + 2 − 3 = <strong>−1</strong>；<br>|a| = √(1² + 2² + (−1)²) = √(1+4+1) = <strong>√6</strong>。' },
        { type: 'list', items: ['向量的加减运算：对应坐标分别相加减', '数乘运算：每个坐标分量都乘以同一个实数 λ', '线性运算的顺序与实数运算一致，先数乘后加减'] },
        { type: 'warn', label: '易错', text: '坐标运算时必须<strong>严格“对应分量”操作</strong>，即 x 与 x 相加、y 与 y 相加，绝不能把不同坐标轴上的分量混淆。数乘 λa 要把 λ 乘到每一个分量上，常见错误是只乘了部分分量。' },
        { type: 'heading', text: '三、数量积与模（坐标表示）' },
        { type: 'keypoint', label: '重点·数量积', text: '设 a = (x₁, y₁, z₁)，b = (x₂, y₂, z₂)，则数量积 <strong>a·b = x₁x₂ + y₁y₂ + z₁z₂</strong>，即对应坐标乘积之和。数量积的结果是一个实数，不再是向量。' },
        { type: 'keypoint', label: '重点·模长', text: '向量 a = (x, y, z) 的模（长度）<strong>|a| = √(x² + y² + z²)</strong>。它是各坐标分量平方和的算术平方根，几何意义是向量终点到原点的距离。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="310" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">数量积与夹角：a·b=|a||b|cosθ</text><line x1="120" y1="220" x2="560" y2="220" stroke="#4a7de0" stroke-width="2"/><text x="572" y="226" font-size="15" fill="#2b5b9e">x</text><line x1="200" y1="220" x2="440" y2="120" stroke="#e05d44" stroke-width="3"/><circle cx="440" cy="120" r="5" fill="#e05d44"/><text x="330" y="150" font-size="15" fill="#c0392b" font-weight="bold">a</text><line x1="200" y1="220" x2="500" y2="180" stroke="#7a5aa0" stroke-width="3"/><circle cx="500" cy="180" r="5" fill="#7a5aa0"/><text x="430" y="208" font-size="15" fill="#7a5aa0" font-weight="bold">b</text><path d="M 274 189 A 78 78 0 0 1 279 209" fill="none" stroke="#33536e" stroke-width="1.6"/><text x="244" y="182" font-size="15" fill="#33536e">θ</text><line x1="500" y1="180" x2="420" y2="160" stroke="#5a7a2a" stroke-width="1.6" stroke-dasharray="6 4"/><text x="430" y="148" font-size="13" fill="#5a7a2a">b 在 a 上的投影</text><text x="60" y="268" font-size="15" fill="#33536e">两向量夹角 θ∈[0,π]，数量积等于 |a||b| 与 cosθ 的乘积。</text><text x="60" y="290" font-size="15" fill="#33536e">当 θ=90° 时 cosθ=0，两向量垂直；θ 越小，数量积越大。</text></svg>', caption: '图2　两向量数量积：a·b = |a||b|cosθ，θ 为两向量夹角。' },
        { type: 'example', label: '例题2', text: '判断向量 a = (1, 2, 2) 与 b = (2, 4, 4) 是否平行。<br><br><strong>解</strong>：观察两向量对应坐标：2/1 = 2，4/2 = 2，4/2 = 2，三组比值都等于 2，即 <strong>b = 2a</strong>，存在实数 λ = 2 使 b = λa，故两向量<strong>平行</strong>。' },
        { type: 'example', label: '例题3', text: '已知空间两点 A(1, 0, 1)，B(2, 1, 0)，求 |AB| 与线段 AB 的中点坐标。<br><br><strong>解</strong>：坐标差：Δx = 2−1 = 1，Δy = 1−0 = 1，Δz = 0−1 = −1。<br>|AB| = √(1² + 1² + (−1)²) = √3。<br>中点 M 坐标为各坐标的平均值：((1+2)/2, (0+1)/2, (1+0)/2) = <strong>(1.5, 0.5, 0.5)</strong>。' },
        { type: 'heading', text: '四、夹角、垂直与平行（坐标判定）' },
        { type: 'keypoint', label: '重点·夹角公式', text: '设 a、b 为非零向量，则夹角余弦 <strong>cos〈a, b〉 = (a·b) / (|a||b|)</strong>。夹角 〈a, b〉∈[0, π]。' },
        { type: 'keypoint', label: '重点·垂直与平行', text: '<strong>垂直</strong>：a ⊥ b ⇔ a·b = 0 ⇔ x₁x₂ + y₁y₂ + z₁z₂ = 0。<br><strong>平行</strong>：a ∥ b ⇔ 对应坐标成比例（b 的各分量非零时），或存在实数 λ 使 a = λb。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="310" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">空间两点间的距离 |AB|</text><line x1="100" y1="240" x2="560" y2="240" stroke="#4a7de0" stroke-width="2"/><line x1="130" y1="260" x2="130" y2="90" stroke="#4a7de0" stroke-width="2"/><text x="572" y="246" font-size="15" fill="#2b5b9e">x</text><text x="112" y="84" font-size="15" fill="#2b5b9e">z</text><circle cx="220" cy="180" r="6" fill="#e05d44"/><text x="170" y="176" font-size="15" fill="#c0392b" font-weight="bold">A(x1,y1,z1)</text><circle cx="470" cy="130" r="6" fill="#7a5aa0"/><text x="484" y="126" font-size="15" fill="#7a5aa0" font-weight="bold">B(x2,y2,z2)</text><line x1="220" y1="180" x2="470" y2="130" stroke="#2b5b9e" stroke-width="3"/><text x="330" y="146" font-size="15" fill="#2b5b9e" font-weight="bold">|AB|</text><line x1="220" y1="180" x2="470" y2="180" stroke="#5a7a2a" stroke-width="1.4" stroke-dasharray="6 4"/><line x1="470" y1="180" x2="470" y2="130" stroke="#5a7a2a" stroke-width="1.4" stroke-dasharray="6 4"/><text x="330" y="200" font-size="13" fill="#5a7a2a">Δx</text><text x="486" y="160" font-size="13" fill="#5a7a2a">Δz</text><text x="60" y="270" font-size="15" fill="#33536e">空间两点距离公式：|AB|=√[(x2−x1)²+(y2−y1)²+(z2−z1)²]。</text><text x="60" y="292" font-size="15" fill="#33536e">将坐标差的平方和开根号，即为两点间的直线距离。</text></svg>', caption: '图3　空间两点 A、B 及其距离 |AB|，等于坐标差平方和开方。' },
        { type: 'table', headers: ['运算/关系', '坐标公式', '说明'], rows: [['加法', 'a+b=(x₁+x₂, y₁+y₂, z₁+z₂)', '对应分量相加'], ['减法', 'a−b=(x₁−x₂, y₁−y₂, z₁−z₂)', '对应分量相减'], ['数乘', 'λa=(λx₁, λy₁, λz₁)', '每个分量乘 λ'], ['数量积', 'a·b=x₁x₂+y₁y₂+z₁z₂', '结果为实数'], ['模', '|a|=√(x²+y²+z²)', '分量平方和开方'], ['距离', '|AB|=√[(x₂−x₁)²+(y₂−y₁)²+(z₂−z₁)²]', '两点间直线距离'], ['垂直', 'a⊥b ⇔ x₁x₂+y₁y₂+z₁z₂=0', '数量积为零'], ['平行', 'a∥b ⇔ 坐标成比例或 a=λb', '方向相同或相反']] },
        { type: 'tip', label: '提示', text: '距离公式与模长公式本质一致：向量 AB 的坐标就是终点减起点，因此 <strong>|AB| = |向量 AB|</strong>。记忆时抓住“坐标差平方和再开方”这一核心，可同时覆盖模长与两点距离。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['坐标表示：a=(x,y,z)，建立在空间直角坐标系之上', '线性运算：对应分量相加减、数乘每个分量', '数量积：a·b=x₁x₂+y₁y₂+z₁z₂，结果为实数', '模长：|a|=√(x²+y²+z²)', '夹角：cos〈a,b〉=(a·b)/(|a||b|)', '垂直⇔数量积为0；平行⇔坐标成比例或a=λb', '两点距离：坐标差平方和开方'] }
      ],
      exercises: [
        { type: 'choice', question: '已知向量 a=(1,0,0)，b=(0,1,0)，则 a·b 等于？', options: ['0', '1', '-1', '3'], answer: '0', explanation: '根据空间向量数量积的坐标公式 a·b = x₁x₂ + y₁y₂ + z₁z₂，代入 a=(1,0,0)、b=(0,1,0) 得 a·b = 1×0 + 0×1 + 0×0 = 0。直观上看，a 沿 x 轴方向，b 沿 y 轴方向，两个坐标轴互相垂直，故两向量垂直，数量积为零。' },
        { type: 'choice', question: '向量 (2,4,6) 与 (1,2,3) 的位置关系是？', options: ['垂直', '平行', '相等', '夹角为 60°'], answer: '平行', explanation: '判断两向量是否平行，看对应坐标是否成比例。2/1 = 2，4/2 = 2，6/3 = 2，三组比值都等于 2，即 (2,4,6) = 2×(1,2,3)，存在实数 λ=2 使前者等于 λ 倍后者，因此两向量平行。它们长度不同，故不是相等。' },
        { type: 'choice', question: '已知向量 a=(1,1,1)，b=(1,1,-2)，则 a·b 等于？', options: ['0', '-2', '3', '1'], answer: '0', explanation: '由数量积坐标公式 a·b = x₁x₂ + y₁y₂ + z₁z₂，代入得 1×1 + 1×1 + 1×(−2) = 1 + 1 − 2 = 0。数量积为零说明两向量互相垂直，即 a ⊥ b。本题既考查了运算，也隐含了垂直判定：坐标乘积之和为零即垂直。' },
        { type: 'fill', question: '向量 (0,3,4) 的模 |(0,3,4)| = ____。', answer: '5', explanation: '由模长公式 |a| = √(x² + y² + z²)，代入坐标得 |(0,3,4)| = √(0² + 3² + 4²) = √(0 + 9 + 16) = √25 = 5。这是空间直角坐标系中一个常见的勾股数组合 3、4、5，计算时先平方再开方即可。' },
        { type: 'fill', question: '已知空间两点 A(1,2,3)，B(4,6,3)，则 |AB| = ____。', answer: '5', explanation: '由空间两点距离公式 |AB| = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]，坐标差分别为 3、4、0，故 |AB| = √(3² + 4² + 0²) = √(9 + 16) = √25 = 5。注意距离公式与模长公式本质一致，向量 AB 的坐标即终点减起点。' }
      ]
    },

    /* ---------------- 第2课时 空间向量的应用 ---------------- */
    {
      id: 'xb1-u2-l2',
      name: '空间向量的应用',
      chapter: '第一章 空间向量与立体几何 · 1.4',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、直线的方向向量与平面的法向量' },
        { type: 'paragraph', text: '用向量研究空间图形，关键是把“直线”和“平面”转化为向量语言。直线的“方向”可用一个向量表示，平面的“姿态”可用一个垂直于它的向量表示，由此把几何位置关系转化为向量运算。' },
        { type: 'keypoint', label: '重点·方向向量', text: '<strong>直线的方向向量</strong>：与直线<strong>平行</strong>的<strong>非零向量</strong>叫做该直线的方向向量。一条直线的方向向量不唯一，但它们彼此平行。已知直线上两点 P、Q，则向量 PQ 就是它的一个方向向量。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">直线的方向向量</text><line x1="120" y1="190" x2="560" y2="90" stroke="#4a7de0" stroke-width="2.5"/><text x="500" y="150" font-size="15" fill="#4a7de0" font-weight="bold">l</text><circle cx="250" cy="162" r="5" fill="#2b5b9e"/><text x="206" y="158" font-size="14" fill="#2b5b9e">P</text><line x1="250" y1="162" x2="430" y2="123" stroke="#e05d44" stroke-width="3"/><circle cx="430" cy="123" r="5" fill="#e05d44"/><text x="380" y="112" font-size="15" fill="#c0392b" font-weight="bold">v 方向向量</text><text x="60" y="220" font-size="15" fill="#33536e">与直线平行的非零向量称为该直线的方向向量，确定方向即可。</text><text x="60" y="242" font-size="15" fill="#33536e">同一直线的方向向量不唯一，它们彼此平行（存在倍数关系）。</text></svg>', caption: '图1　直线 l 的方向向量 v：与直线平行的非零向量。' },
        { type: 'keypoint', label: '重点·法向量', text: '<strong>平面的法向量</strong>：与平面<strong>垂直</strong>的<strong>非零向量</strong>叫做该平面的法向量。一个平面有两个方向相反的法向量，它们互相平行。<br><strong>求法</strong>：设 n = (x, y, z)，在平面内取两个不共线向量 u、v，则 n 满足 n·u = 0 且 n·v = 0，列方程组求解。' },
        { type: 'example', label: '例题1', text: '平面 α 经过点 A(1,0,0)、B(0,1,0)、C(0,0,1)，求 α 的一个法向量。<br><br><strong>解</strong>：取平面内两向量 AB = (−1, 1, 0)，AC = (−1, 0, 1)。设 n = (x, y, z)，则<br>n·AB = −x + y = 0，<br>n·AC = −x + z = 0。<br>令 x = 1，得 y = 1，z = 1，故 <strong>n = (1, 1, 1)</strong> 是 α 的一个法向量。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="310" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">平面的法向量</text><polygon points="160,200 360,160 520,200 320,240" fill="#c4dcf6" stroke="#4a7de0" stroke-width="2"/><text x="330" y="225" font-size="15" fill="#2b5b9e" font-weight="bold">α 平面</text><line x1="340" y1="200" x2="340" y2="90" stroke="#e05d44" stroke-width="3"/><circle cx="340" cy="90" r="5" fill="#e05d44"/><text x="352" y="98" font-size="15" fill="#c0392b" font-weight="bold">n 法向量</text><text x="60" y="270" font-size="15" fill="#33536e">与平面垂直的非零向量称为该平面的法向量，它垂直于面内任一条直线。</text><text x="60" y="292" font-size="15" fill="#33536e">求法向量：设 n=(x,y,z)，令其与面内两不共线向量数量积均为 0。</text></svg>', caption: '图2　平面 α 的法向量 n：与平面垂直的非零向量。' },
        { type: 'tip', label: '求法向量步骤', text: '求平面法向量按四步进行：①在平面内找两个<strong>不共线</strong>向量 u、v；②设 n = (x, y, z)；③列方程 n·u = 0、n·v = 0；④给某个分量赋一个非零值（如令 x = 1），解出其余分量。方程组有两个独立方程、三个未知数，故法向量有无穷多个，彼此平行。' },
        { type: 'heading', text: '二、平行关系的向量判定' },
        { type: 'keypoint', label: '重点·平行判定', text: '设直线 l、m 的方向向量分别为 v、u，平面 α、β 的法向量分别为 n₁、n₂，则：<br>线线平行：<strong>v ∥ u</strong>（且两直线不重合）；<br>线面平行：<strong>v ⊥ n₁</strong>（v·n₁ = 0）且直线上有一点在平面外；<br>面面平行：<strong>n₁ ∥ n₂</strong>（两平面不重合）。' },
        { type: 'list', items: ['线线平行 ⇔ 方向向量平行', '线面平行 ⇔ 方向向量⊥法向量 且 线有一点在平面外', '面面平行 ⇔ 两平面法向量平行', '判定前先确认所用向量为非零向量'] },
        { type: 'example', label: '例题2', text: '已知直线 l 的方向向量 v = (1, 1, −1)，平面 α 的法向量 n = (1, 0, 1)，且 l 上一点 P(2, 0, 0) 不在 α 内（已验）。判断 l 与 α 的位置关系。<br><br><strong>解</strong>：计算 v·n = 1×1 + 1×0 + (−1)×1 = 0，故 v ⊥ n。又 P 不在平面 α 内，于是<strong>直线 l 平行于平面 α</strong>（l ∥ α）。' },
        { type: 'warn', label: '易错', text: '线面平行的判定必须同时满足两个条件：方向向量<strong>垂直于法向量</strong>，且<strong>直线上有一点在平面外</strong>。若忽略第二个条件，当直线本身就在平面内时，方向向量同样垂直于法向量，但此时不是平行而是“直线在平面内”，二者容易被混淆而失分。' },
        { type: 'heading', text: '三、垂直关系的向量判定' },
        { type: 'keypoint', label: '重点·垂直判定', text: '沿用上面的记号：<br>线线垂直：<strong>v ⊥ u</strong>（v·u = 0）；<br>线面垂直：<strong>v ∥ n₁</strong>（方向向量平行于法向量）；<br>面面垂直：<strong>n₁ ⊥ n₂</strong>（n₁·n₂ = 0）。<br>可见“线面垂直”与“线面平行”恰好对偶：方向向量与法向量从垂直变为平行。' },
        { type: 'heading', text: '四、空间角' },
        { type: 'keypoint', label: '重点·异面直线所成角', text: '设两条异面直线的方向向量为 a、b，则它们所成角 θ 满足 <strong>cosθ = |a·b| / (|a||b|)</strong>，且 θ∈(0, π/2]。注意取数量积的<strong>绝对值</strong>，保证角度为锐角或直角。' },
        { type: 'keypoint', label: '重点·线面角与二面角', text: '<strong>线面角 φ</strong>：直线与它在平面内的射影所成角，满足 <strong>sinφ = |v·n| / (|v||n|)</strong>，φ∈[0, π/2]。<br><strong>二面角</strong>：其大小等于两个平面法向量的夹角，或其<strong>补角</strong>，需结合图形判断锐角还是钝角。' },
        { type: 'example', label: '例题3', text: '直线 l 的方向向量 v = (1, 1, 0)，平面 α 的法向量 n = (0, 0, 1)，求直线 l 与平面 α 所成的角 φ。<br><br><strong>解</strong>：|v| = √(1+1+0) = √2，|n| = 1，v·n = 0。于是 sinφ = |0| / (√2×1) = 0，故 φ = 0。这说明直线 l <strong>平行于平面 α</strong>（或在平面内），与平面夹角为 0。' },
        { type: 'heading', text: '五、空间距离' },
        { type: 'keypoint', label: '重点·点到平面距离', text: '点 P 到平面 α 的距离：在 α 内任取一点 A，设 α 的法向量为 n，则 <strong>d = |PA·n| / |n|</strong>。公式的几何意义是向量 PA 在法向量方向上的投影长度。' },
        { type: 'example', label: '例题4', text: '求点 P(1, 1, 1) 到平面 x + y + z = 0 的距离。<br><br><strong>解</strong>：平面法向量 n = (1, 1, 1)，|n| = √3。在平面内取点 A(0, 0, 0)，则 PA = (−1, −1, −1)。<br>PA·n = −1−1−1 = −3，故 |PA·n| = 3。<br>距离 d = 3 / √3 = <strong>√3</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">点到平面的距离</text><polygon points="140,220 380,180 560,220 320,260" fill="#c4dcf6" stroke="#4a7de0" stroke-width="2"/><text x="330" y="245" font-size="15" fill="#2b5b9e" font-weight="bold">α 平面</text><circle cx="360" cy="90" r="6" fill="#e05d44"/><text x="374" y="86" font-size="15" fill="#c0392b" font-weight="bold">P</text><line x1="360" y1="90" x2="360" y2="200" stroke="#5a7a2a" stroke-width="3" stroke-dasharray="6 4"/><circle cx="360" cy="200" r="5" fill="#5a7a2a"/><text x="318" y="150" font-size="15" fill="#5a7a2a" font-weight="bold">d</text><text x="372" y="204" font-size="14" fill="#5a7a2a">Q 垂足</text><text x="60" y="292" font-size="15" fill="#33536e">点 P 到平面 α 的距离是 P 到平面的垂线段长度，即 |PQ|。</text><text x="60" y="314" font-size="15" fill="#33536e">公式：d = |PA·n| / |n|，其中 A 为面内任一点，n 为法向量。</text></svg>', caption: '图3　点 P 到平面 α 的距离 d，即垂线段 PQ 的长度。' },
        { type: 'table', headers: ['对象', '向量条件', '结论'], rows: [['线线平行', '方向向量 v∥u', 'l∥m'], ['线面平行', 'v⊥n 且 线有一点在平面外', 'l∥α'], ['面面平行', '法向量 n₁∥n₂', 'α∥β'], ['线线垂直', '方向向量 v⊥u', 'l⊥m'], ['线面垂直', '方向向量 v∥n', 'l⊥α'], ['面面垂直', '法向量 n₁⊥n₂', 'α⊥β'], ['异面直线角', 'cosθ=|a·b|/(|a||b|)', 'θ∈(0,π/2]'], ['线面角', 'sinφ=|v·n|/(|v||n|)', 'φ∈[0,π/2]'], ['点到平面距离', 'd=|PA·n|/|n|', 'A在面内']] },
        { type: 'tip', label: '解题提示', text: '用向量法解决立体几何问题，通常按“建系—设点—求向量—列条件—算结果”的流程：先建立空间直角坐标系（或选定基底），写出关键点坐标，再求方向向量或法向量，最后用数量积、平行、垂直或距离公式得出结论。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['方向向量：与直线平行的非零向量', '法向量：与平面垂直的非零向量，由 n·u=n·v=0 求得', '平行：方向向量平行 / 方向向量⊥法向量(点在面外) / 法向量平行', '垂直：方向向量垂直 / 方向向量∥法向量 / 法向量垂直', '异面直线角取数量积绝对值；线面角用正弦；二面角看法向量夹角或补角', '点到平面距离 d=|PA·n|/|n|'] }
      ],
      exercises: [
        { type: 'choice', question: '若一条直线的方向向量与一个平面的法向量平行，则该直线与该平面的位置关系是？', options: ['平行', '垂直', '相交但不垂直', '在平面内'], answer: '垂直', explanation: '直线的方向向量 v 与平面的法向量 n 平行，而法向量垂直于平面内的所有直线，因此 v 也垂直于平面，即直线垂直于该平面。这是线面垂直的向量判定：方向向量平行于法向量则线面垂直。注意区别于线面平行（要求方向向量垂直于法向量）。' },
        { type: 'choice', question: '若两个平面的法向量平行，则这两个平面的位置关系是？', options: ['垂直', '平行或重合', '相交', '无法确定'], answer: '平行或重合', explanation: '平面的法向量决定了平面的“姿态”。两个法向量平行，说明两平面的倾斜方向一致，因此它们要么平行、要么重合。仅由法向量平行无法区分这两种情况，还需结合两平面是否有公共点来判断：无公共点则平行，有公共点则重合。' },
        { type: 'choice', question: '已知两条异面直线的方向向量夹角余弦为 -1/2，则这两条异面直线所成角的余弦值为？', options: ['-1/2', '1/2', '-√3/2', '√3/2'], answer: '1/2', explanation: '异面直线所成角 θ 的取值范围是 (0, π/2]，恒为锐角或直角，因此要用方向向量夹角余弦的绝对值。已知方向向量夹角余弦为 -1/2，取绝对值后得 |−1/2| = 1/2，故异面直线所成角的余弦值为 1/2，所成角为 60°。' },
        { type: 'fill', question: '点 (0,0,0) 到平面 x + y + z - 3 = 0 的距离 d = ____。', answer: '√3', explanation: '由点到平面距离公式 d = |Ax₀ + By₀ + Cz₀ + D| / √(A² + B² + C²)，平面方程 x+y+z−3=0 中 A=B=C=1，D=−3，点 (0,0,0) 代入得 d = |0+0+0−3| / √(1+1+1) = 3/√3 = √3。也可取平面内一点与法向量用向量法计算，结果一致。' },
        { type: 'fill', question: '二面角的大小等于两个平面法向量的夹角或其____。', answer: '补角', explanation: '二面角的大小由两个半平面张开的程度决定。设两平面法向量夹角为 φ，则二面角可能是 φ，也可能是 π − φ（即 φ 的补角），具体取哪一个要结合二面角是锐角还是钝角来判断。因此填空应填“补角”。' }
      ]
    }

  );
})();
