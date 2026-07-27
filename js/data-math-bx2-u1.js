/* ============================================================
 * 高一数学 · 必修 第二册 · 第六章 平面向量及其应用
 * 第1课时：平面向量的概念（人教A版 §6.1）
 * 第2课时：平面向量的运算（人教A版 §6.2）
 * 数据注入：math.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx2');
  if (!v) return;
  v.points.push(

    /* ---------------- 第1课时 平面向量的概念 ---------------- */
    {
      id: 'bx2-u1-l1',
      name: '平面向量的概念',
      chapter: '第六章 平面向量及其应用 · 6.1',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、从数量到向量' },
        { type: 'paragraph', text: '在初中与前面的学习中，我们接触过许多只有大小的量，比如长度、面积、温度。但在物理与几何中，还存在一类既要有大小、又必须指明方向的量，例如位移、速度、力。为了刻画这类量，数学上引入了“向量”这一概念。' },
        { type: 'keypoint', label: '重点·向量定义', text: '既有<strong>大小</strong>又有<strong>方向</strong>的量叫做<strong>向量</strong>。向量不能用一个数表示，必须同时说明它的长度与指向。常见的向量有位移、速度、力、加速度等。' },
        { type: 'paragraph', text: '与向量相对的是只有大小而没有方向的量，称为数量（也叫标量）。数量只用一个数和相应的单位即可完全确定，例如“3 米”“26 摄氏度”。' },
        { type: 'list', items: ['数量举例：①年龄（如 15 岁）②长度（如 3 米）③面积（如 4 平方米）④温度（如 26 摄氏度）⑤质量（如 5 千克）', '这些量都只有大小、没有方向，统称为数量', '位移、速度、力等必须同时说明大小与方向，才是有意义的量', '向量的引入正是为了同时刻画“多大”与“朝哪”'] },
        { type: 'heading', text: '二、向量的几何表示——有向线段' },
        { type: 'keypoint', label: '重点·有向线段三要素', text: '向量可以用<strong>有向线段</strong>来表示。有向线段包含三个要素：<strong>起点、方向、长度</strong>。起点确定位置，箭头表示方向，线段的长度表示向量的大小。给定这三者，向量就被唯一确定（但向量本身与起点位置无关）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><text x="340" y="32" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">有向线段表示向量 a</text><line x1="130" y1="130" x2="520" y2="130" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="520,130 502,122 502,138" fill="#2b5b9e"/><circle cx="130" cy="130" r="5" fill="#2b5b9e"/><text x="118" y="118" font-size="17" fill="#1a3a5c" font-weight="bold" text-anchor="middle">A</text><text x="535" y="118" font-size="17" fill="#1a3a5c" font-weight="bold" text-anchor="middle">B</text><text x="325" y="115" font-size="16" fill="#c0392b" font-weight="bold" text-anchor="middle">|a|</text><text x="340" y="190" font-size="15" fill="#33536e" text-anchor="middle">有向线段三要素：起点 A、方向（箭头）、长度 |a|</text></svg>', caption: '图1　用有向线段表示向量 a：起点 A、箭头指向 B，长度记为 |a|。' },
        { type: 'example', label: '例题1', text: '如图1，用有向线段 AB 表示一个向量。<br><br><strong>解</strong>：画出从 A 指向 B 的有向线段，其长度即为该向量的<strong>模 |a|</strong>，箭头方向即向量的方向。只要 A、B 确定，这个向量就确定了；把它平移到别处，仍表示同一个向量（向量与起点位置无关）。' },
        { type: 'list', items: ['有向线段有固定起点，是“具体的线段”', '向量只有大小与方向，与起点位置无关', '同向且等长的有向线段表示同一个向量（自由向量）', '几何作图时常用有向线段直观呈现向量'] },
        { type: 'heading', text: '三、向量的模' },
        { type: 'keypoint', label: '重点·模', text: '向量的<strong>大小</strong>称为向量的<strong>模</strong>（或长度），记作 <strong>|a|</strong>（或 |AB|）。模是一个<strong>非负的数量</strong>，它只反映长度，不携带方向信息。' },
        { type: 'warn', label: '易错', text: '误把“模”当成向量：<strong>|a| 是数量不是向量</strong>，不能加箭头，也不能参与向量加减。另一常见错误是认为模可以为负——模恒非负，零向量的模等于 0。' },
        { type: 'tip', label: '记忆', text: '看到竖线 | | 就想到“长度、非负”。求模时只算大小；比较两个向量能否相等，要先比长度再比方向，二者缺一不可。' },
        { type: 'heading', text: '四、特殊向量：零向量与单位向量' },
        { type: 'keypoint', label: '重点·零向量', text: '长度为 <strong>0</strong> 的向量叫做<strong>零向量</strong>，记作 <strong>0</strong>（粗体数字 0）。零向量的方向<strong>任意</strong>（不确定）。它是唯一一个模为 0 的向量。' },
        { type: 'keypoint', label: '重点·单位向量', text: '长度等于 <strong>1 个单位长度</strong>的向量叫做<strong>单位向量</strong>。单位向量的方向可以任意；与非零向量 a 同向的单位向量记作 a/|a|。' },
        { type: 'list', items: ['零向量模为 0、方向任意', '单位向量模恒为 1', '任意非零向量都可化为同向单位向量乘以它的模', '方向不同的单位向量不是相等向量'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">平行向量（共线向量）</text><line x1="100" y1="80" x2="300" y2="80" stroke="#2b5b9e" stroke-width="3"/><polygon points="300,80 285,73 285,87" fill="#2b5b9e"/><line x1="380" y1="80" x2="580" y2="80" stroke="#2b5b9e" stroke-width="3"/><polygon points="580,80 565,73 565,87" fill="#2b5b9e"/><line x1="100" y1="140" x2="300" y2="140" stroke="#e05d44" stroke-width="3"/><polygon points="100,140 115,133 115,147" fill="#e05d44"/><line x1="380" y1="140" x2="580" y2="140" stroke="#e05d44" stroke-width="3"/><polygon points="380,140 395,133 395,147" fill="#e05d44"/><text x="200" y="68" font-size="14" fill="#33536e" text-anchor="middle">方向相同</text><text x="480" y="68" font-size="14" fill="#33536e" text-anchor="middle">方向相同</text><text x="200" y="172" font-size="14" fill="#33536e" text-anchor="middle">方向相反</text><text x="480" y="172" font-size="14" fill="#33536e" text-anchor="middle">方向相反</text><text x="340" y="212" font-size="15" fill="#5a7a2a" font-weight="bold" text-anchor="middle">规定：零向量与任意向量平行</text></svg>', caption: '图2　平行（共线）向量：方向相同或相反的非零向量；零向量与任意向量平行。' },
        { type: 'heading', text: '五、平行向量（共线向量）' },
        { type: 'keypoint', label: '重点·平行向量', text: '方向<strong>相同或相反</strong>的<strong>非零向量</strong>叫做<strong>平行向量</strong>，也叫<strong>共线向量</strong>（因为平移后可在同一直线上）。向量 a 与 b 平行记作 <strong>a ∥ b</strong>。' },
        { type: 'warn', label: '易错', text: '①平行向量也称共线向量，不要以为“共线”就必须在同一直线上，平移后共线即可；②<strong>规定零向量与任意向量平行</strong>，因此谈平行时零向量是特殊情况；③平行只要求方向相同或相反，长度可以不同。' },
        { type: 'heading', text: '六、相等向量' },
        { type: 'keypoint', label: '重点·相等向量', text: '长度<strong>相等</strong>且方向<strong>相同</strong>的向量叫做<strong>相等向量</strong>。向量 a 与 b 相等记作 <strong>a = b</strong>。相等向量与它们的起点位置无关，只要大小相等、指向一致即为同一向量。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">相等向量：长度相等且方向相同</text><line x1="120" y1="100" x2="380" y2="100" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="380,100 363,92 363,108" fill="#2b5b9e"/><line x1="300" y1="150" x2="560" y2="150" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="560,150 543,142 543,158" fill="#2b5b9e"/><text x="250" y="88" font-size="16" fill="#1a3a5c" font-weight="bold" text-anchor="middle">a</text><text x="430" y="138" font-size="16" fill="#1a3a5c" font-weight="bold" text-anchor="middle">b</text><text x="340" y="180" font-size="15" fill="#33536e" text-anchor="middle">两箭头长度相同、同向 ⇒ a = b（与起点位置无关）</text></svg>', caption: '图3　相等向量：两箭头长度相等且方向相同，故 a = b。' },
        { type: 'example', label: '例题2', text: '在平行四边形 ABCD 中（不含零向量情形），哪些向量相等？哪些平行？<br><br><strong>解</strong>：对边平行且等长，故 <strong>AB = DC</strong>、<strong>AD = BC</strong>（方向相同、长度相等）。同时 AB ∥ DC，AD ∥ BC。对角线向量 AC 与 CA 长度相等但方向相反，是相反向量而非相等向量。' },
        { type: 'heading', text: '七、向量概念辨析' },
        { type: 'table', headers: ['概念', '定义要点', '关键性质'], rows: [['向量', '既有大小又有方向', '用有向线段表示，与起点无关'], ['数量', '只有大小没有方向', '是普通实数，可比较大小'], ['零向量', '模为 0', '方向任意，与任意向量平行'], ['单位向量', '模为 1', '方向任意，不唯一'], ['相等向量', '模相等且方向相同', 'a = b，与起点无关'], ['平行向量', '方向相同或相反的非零向量', '记作 a ∥ b，也称共线向量']] },
        { type: 'list', items: ['向量 = 大小 + 方向', '有向线段三要素：起点、方向、长度', '|a| 是数量且非负', '零向量方向任意，与任意向量平行', '相等向量需等长且同向'] },
        { type: 'tip', label: '记忆', text: '判定两个向量关系按“三步法”：先比方向（相同 / 相反 / 既不同也不反），再比长度，最后下结论——同向等长则相等，同向或反向则平行，否则既不相等也不平行。' }
      ],
      exercises: [
        { type: 'choice', question: '下列命题中，正确的是？', options: ['向量就是有向线段', '有向线段就是向量', '长度相等的向量是相等向量', '零向量与任意向量平行'], answer: '零向量与任意向量平行', explanation: '零向量与任意向量平行是课本明确规定的内容，故该命题正确。向量可以用有向线段表示，但向量是自由的量、与起点无关，而有向线段有固定起点，二者不能等同，因此前两项错误。长度相等但方向不同的向量不是相等向量，故第三项错误。' },
        { type: 'fill', question: '长度为 0 的向量叫做______，记作 0（粗体）。', answer: '零向量', explanation: '长度为 0 的向量称为零向量，记作粗体的 0。零向量的方向是任意的（不确定），它是唯一一个模为 0 的向量，并且规定它与任意向量平行。故填“零向量”。' },
        { type: 'choice', question: '关于单位向量，下列说法正确的是？', options: ['单位向量只有一个', '所有单位向量都相等', '单位向量的模都等于 1', '单位向量都是零向量'], answer: '单位向量的模都等于 1', explanation: '单位向量的定义是长度等于 1 个单位长度的向量，因此所有单位向量的模都等于 1，该项正确。单位向量方向可以任意，因此不止一个，方向不同的单位向量也不相等，前两项错误；单位向量模为 1 而非 0，不是零向量，第四项错误。' },
        { type: 'fill', question: '向量 a 的______称为它的模，记作 |a|，它是一个非负的数量。', answer: '大小|长度', explanation: '向量的大小（即长度）称为向量的模，记作 |a| 或 |AB|。模是一个非负的数量，只反映长度而不携带方向信息，因此它不能像向量那样参与加减。故填“大小”或“长度”。' },
        { type: 'choice', question: '下列各组向量中，一定是平行（共线）向量的是？', options: ['两个相等向量', '两个单位向量', '两个模相等的向量', '两个长度不同的向量'], answer: '两个相等向量', explanation: '相等向量长度相等且方向相同，方向相同即满足平行向量“方向相同或相反”的定义，故相等向量一定平行，该项正确。单位向量方向任意，未必平行；模相等只说明长度相同，方向未知，未必平行；长度不同的向量方向同样未知，也未必平行。故选“两个相等向量”。' }
      ]
    },

    /* ---------------- 第2课时 平面向量的运算 ---------------- */
    {
      id: 'bx2-u1-l2',
      name: '平面向量的运算',
      chapter: '第六章 平面向量及其应用 · 6.2',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、向量加法的实际背景' },
        { type: 'paragraph', text: '先向东走 3 千米，再向北走 4 千米，总的效果是从起点直接到达终点，这条“总位移”就是两次位移的叠加。把这种叠加抽象为运算，就得到向量的加法。' },
        { type: 'keypoint', label: '重点·向量加法', text: '求两个向量和的运算叫做<strong>向量的加法</strong>。给定向量 a、b，它们的和记作 <strong>a + b</strong>。加法有两种几何法则：三角形法则与平行四边形法则。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">向量加法·三角形法则</text><line x1="140" y1="180" x2="330" y2="100" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="330,100 314,104 320,119" fill="#2b5b9e"/><line x1="330" y1="100" x2="540" y2="150" stroke="#4a7de0" stroke-width="3.5"/><polygon points="540,150 523,143 530,158" fill="#4a7de0"/><line x1="140" y1="180" x2="540" y2="150" stroke="#c0392b" stroke-width="3.5"/><polygon points="540,150 523,143 530,158" fill="#c0392b"/><text x="200" y="155" font-size="16" fill="#1a3a5c" font-weight="bold" text-anchor="middle">a</text><text x="440" y="115" font-size="16" fill="#1a3a5c" font-weight="bold" text-anchor="middle">b</text><text x="320" y="205" font-size="16" fill="#c0392b" font-weight="bold" text-anchor="middle">a + b</text><text x="340" y="228" font-size="14" fill="#33536e" text-anchor="middle">首尾相接：a 的终点是 b 的起点，和向量从 a 起点指向 b 终点</text></svg>', caption: '图1　三角形法则：两向量首尾相接，和向量封闭成三角形的第三边。' },
        { type: 'example', label: '例题1', text: '已知向量 a、b 如图1 所示，用三角形法则求 a + b。<br><br><strong>解</strong>：将 b 的起点平移到 a 的终点，使二者首尾相接，再从 a 的起点向 b 的终点连有向线段，所得向量即 <strong>a + b</strong>。其长度由起点到终点的直线距离决定，方向由起点指向终点。' },
        { type: 'keypoint', label: '重点·平行四边形法则', text: '当两个向量<strong>同起点</strong>时，以它们为邻边作平行四边形，从公共起点出发的<strong>对角线</strong>就表示和向量 a + b。这是与三角形法则等价的另一种几何作法。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef4fc"/><text x="340" y="28" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">向量加法·平行四边形法则</text><line x1="200" y1="190" x2="200" y2="90" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="200,90 193,106 207,106" fill="#2b5b9e"/><line x1="200" y1="190" x2="470" y2="150" stroke="#4a7de0" stroke-width="3.5"/><polygon points="470,150 453,143 460,158" fill="#4a7de0"/><line x1="200" y1="190" x2="470" y2="50" stroke="#c0392b" stroke-width="3.5"/><polygon points="470,50 453,57 460,43" fill="#c0392b"/><line x1="470" y1="150" x2="470" y2="50" stroke="#9fb8d6" stroke-width="2" stroke-dasharray="5 4"/><line x1="200" y1="90" x2="470" y2="50" stroke="#9fb8d6" stroke-width="2" stroke-dasharray="5 4"/><text x="160" y="140" font-size="16" fill="#1a3a5c" font-weight="bold" text-anchor="middle">a</text><text x="350" y="185" font-size="16" fill="#1a3a5c" font-weight="bold" text-anchor="middle">b</text><text x="360" y="30" font-size="16" fill="#c0392b" font-weight="bold" text-anchor="middle">a + b</text><text x="340" y="235" font-size="14" fill="#33536e" text-anchor="middle">同起点：以 a、b 为邻边作平行四边形，对角线即为和向量</text></svg>', caption: '图2　平行四边形法则：同起点的两向量，和向量为所构平行四边形的对角线。' },
        { type: 'list', items: ['三角形法则：适用于任意两个向量，首尾相接', '平行四边形法则：要求两向量同起点，取对角线', '当两向量共线时，平行四边形退化为线段，仍可用三角形法则', '两种法则本质一致，都得到同一个和向量 a + b'] },
        { type: 'keypoint', label: '重点·加法运算律', text: '向量加法满足：<strong>交换律 a + b = b + a</strong>；<strong>结合律 (a + b) + c = a + (b + c)</strong>。因此多个向量相加可不分先后与分组，结果唯一。' },
        { type: 'heading', text: '二、向量减法' },
        { type: 'keypoint', label: '重点·向量减法', text: '减去一个向量等于加上它的<strong>相反向量</strong>：<strong>a − b = a + (−b)</strong>。相反向量 −b 与 b 长度相等、方向相反。这样减法就统一转化为加法运算。' },
        { type: 'example', label: '例题2', text: '已知向量 a、b，求 a − b。<br><br><strong>解</strong>：先作出 b 的相反向量 −b（与 b 等长反向），再按加法求 a + (−b)，所得即 <strong>a − b</strong>。几何上也可“连终点、指向被减向量”：从 b 的终点指向 a 的终点的向量，就是 a − b。' },
        { type: 'warn', label: '易错', text: '①<strong>a − b 与 b − a 方向相反、长度相同</strong>，即 a − b = −(b − a)，不要弄反指向；②减法不能像数那样直接“去掉”，必须先转化为加相反向量；③共线向量的减法仍按同一直线上的有向线段处理。' },
        { type: 'tip', label: '记忆', text: '减法的几何口诀：“<strong>共起点，连终点，指向被减</strong>”。把 a、b 放到同一起点，从 b 的终点引向 a 的终点的有向线段，正是 a − b，方向千万别颠倒。' },
        { type: 'heading', text: '三、数乘向量' },
        { type: 'keypoint', label: '重点·数乘', text: '实数 λ 与向量 a 的乘积 <strong>λa</strong> 仍是一个向量。其模为 <strong>|λa| = |λ|·|a|</strong>；方向规定：当 <strong>λ > 0</strong> 时与 a <strong>同向</strong>，当 <strong>λ < 0</strong> 时与 a <strong>反向</strong>，当 λ = 0 或 a = 0 时 λa = 0。' },
        { type: 'list', items: ['λ > 0：λa 与 a 同向，长度为 |λ| 倍', 'λ < 0：λa 与 a 反向，长度为 |λ| 倍', 'λ = 0 或 a = 0：λa 为零向量', '数乘实现了向量的伸缩与反向，是共线的基础'] },
        { type: 'keypoint', label: '重点·向量共线定理', text: '向量 a（<strong>a ≠ 0</strong>）与 b 共线的<strong>充要条件</strong>是：存在<strong>唯一</strong>实数 λ，使 <strong>b = λa</strong>。此定理把“几何共线”转化为“代数数乘”，是判定共线、求解参数 λ 的核心工具。' },
        { type: 'example', label: '例题3', text: '已知向量 a ≠ 0，且 b = 3a，c = −2a，判断 b、c 与 a 的关系。<br><br><strong>解</strong>：由 b = 3a 知存在 λ = 3 使 b = λa，故 <strong>b 与 a 共线且同向</strong>；由 c = −2a 知存在 λ = −2，故 <strong>c 与 a 共线且反向</strong>。三者都在同一直线上（共线）。' },
        { type: 'warn', label: '易错', text: '共线定理的<strong>前提 a ≠ 0 不可省略</strong>：若 a = 0，则对任意 b 都有 b = λ·0 = 0，无法唯一确定 λ，也不能刻画方向。另一误区是忽略 λ 的“唯一性”，它来自 a ≠ 0 这一保证。' },
        { type: 'heading', text: '四、向量的数量积' },
        { type: 'keypoint', label: '重点·数量积定义', text: '两个向量的<strong>数量积</strong>（点乘）定义为 <strong>a·b = |a||b|cosθ</strong>，其中 θ 为 a 与 b 的夹角（0° ≤ θ ≤ 180°）。结果是一个<strong>数量（实数）</strong>，不是向量。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef4fc"/><text x="340" y="28" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">数量积 a·b 的几何意义：投影</text><line x1="120" y1="180" x2="560" y2="180" stroke="#5a7a2a" stroke-width="3"/><polygon points="560,180 545,173 545,187" fill="#5a7a2a"/><text x="560" y="200" font-size="14" fill="#5a7a2a" text-anchor="middle">b</text><line x1="200" y1="180" x2="340" y2="90" stroke="#2b5b9e" stroke-width="3.5"/><polygon points="340,90 323,97 330,112" fill="#2b5b9e"/><text x="260" y="120" font-size="16" fill="#1a3a5c" font-weight="bold" text-anchor="middle">a</text><line x1="340" y1="90" x2="340" y2="180" stroke="#c0392b" stroke-width="2.5" stroke-dasharray="5 4"/><text x="352" y="140" font-size="15" fill="#c0392b" font-weight="bold" text-anchor="start">投影</text><text x="340" y="215" font-size="14" fill="#33536e" text-anchor="middle">a·b = |a| ×（b 方向上 a 的投影长度），投影可正可负</text><text x="340" y="235" font-size="13" fill="#33536e" text-anchor="middle">当夹角为钝角时投影为负，故数量积可为负</text></svg>', caption: '图3　数量积的几何意义：a·b 等于 |a| 乘以 a 在 b 方向上的投影。' },
        { type: 'keypoint', label: '重点·数量积性质', text: '重要性质：①<strong>a ⊥ b ⇔ a·b = 0</strong>（垂直与数量积为零等价）；②<strong>a·a = |a|²</strong>（自乘得模平方）；③<strong>投影向量</strong>：a 在 b 方向上的投影向量长度为 |a|cosθ，方向与 b 同向（θ 为锐角）或反向（θ 为钝角）。' },
        { type: 'example', label: '例题4', text: '已知 |a| = 3，|b| = 4，且 a 与 b 夹角 θ = 60°，求 a·b。<br><br><strong>解</strong>：由定义 a·b = |a||b|cosθ = 3 × 4 × cos60° = 12 × 1/2 = <strong>6</strong>。若改为 θ = 120°，则 cos120° = −1/2，a·b = <strong>−6</strong>，可见数量积可正可负。' },
        { type: 'table', headers: ['运算', '结果类型', '几何法则 / 公式', '关键性质'], rows: [['加法 a+b', '向量', '三角形 / 平行四边形法则', '交换、结合律成立'], ['减法 a−b', '向量', 'a + (−b)，共起点连终点', 'a−b = −(b−a)'], ['数乘 λa', '向量', '模 |λ||a|，方向随 λ 正负', '共线定理 b = λa'], ['数量积 a·b', '数量', '|a||b|cosθ', 'a⊥b ⇔ a·b=0，a·a=|a|²']] },
        { type: 'warn', label: '易错', text: '①数量积是<strong>数量不是向量</strong>，不能再加箭头；②<strong>不满足结合律</strong>，(a·b)·c 与 a·(b·c) 一般不等（前者是与 c 共线的向量，后者是与 a 共线的向量）；③投影可正可负，数量积的符号由夹角余弦决定。' },
        { type: 'tip', label: '记忆', text: '四种运算各记一句话：加法“首尾接或同起点取对角”；减法“共起点连终点指向被减”；数乘“伸长缩短再定向”；数量积“模乘夹角的余弦，垂直即为零”。把法则与对应图形一起记，考场上直接画图套用。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['加法：三角形法则（首尾接）、平行四边形法则（同起点取对角线）', '运算律：交换律 a+b=b+a，结合律 (a+b)+c=a+(b+c)', '减法：a−b = a + (−b)，共起点、连终点、指向被减', '数乘：|λa|=|λ||a|，方向随 λ 正负；共线定理 b=λa（a≠0）', '数量积：a·b=|a||b|cosθ，a⊥b⇔a·b=0，a·a=|a|²'] }
      ],
      exercises: [
        { type: 'choice', question: '向量加法的三角形法则是指？', options: ['同起点的两向量，和向量为对角线', '首尾相接，和向量从第一个起点指向最后一个终点', '两向量相减得和向量', '两向量垂直时才能相加'], answer: '首尾相接，和向量从第一个起点指向最后一个终点', explanation: '三角形法则的做法是把两个向量首尾相接，即第一个向量的终点是第二个向量的起点，和向量从第一个向量的起点指向第二个向量的终点，该项描述正确。同起点取对角线是平行四边形法则，不是三角形法则；向量相加与是否垂直无关，减法也不得到和。故选该项。' },
        { type: 'fill', question: '向量减法法则：减去一个向量等于加上它的______，即 a − b = a + (−b)。', answer: '相反向量', explanation: '向量减法的定义是：减去一个向量等于加上这个向量的相反向量，即 a − b = a + (−b)。相反向量长度相等、方向相反，因此减法可转化为加法来处理。故填“相反向量”。' },
        { type: 'choice', question: '向量共线定理指出：对非零向量 a，向量 b 与 a 共线的充要条件是？', options: ['存在唯一实数 λ 使 b = λa', '存在实数 λ 使 a = λb', 'b 的模等于 a 的模', 'a 与 b 方向相同'], answer: '存在唯一实数 λ 使 b = λa', explanation: '向量共线定理：若 a 为非零向量，则向量 b 与 a 共线的充要条件是存在唯一的实数 λ，使得 b = λa。该 λ 唯一是因为 a ≠ 0，保证了表示不退化。仅要求模相等或方向相同都只是共线的特例而非充要条件。故选该项。' },
        { type: 'fill', question: '若两个非零向量 a、b 垂直，则它们的数量积 a·b = ______。', answer: '0', explanation: '数量积定义为 a·b = |a||b|cosθ，其中 θ 为两向量 a 与 b 的夹角。当 a 与 b 垂直时，夹角 θ = 90°，而 cos90° = 0，因此 a·b = |a||b|×0 = 0。反过来，若 a·b = 0 且 a、b 均不为零向量，则可推出两向量垂直。垂直与数量积为零互为充要条件，故填 0。' },
        { type: 'choice', question: '关于数量积 a·b，下列说法中正确的是？', options: ['a·b 的结果是一个向量', 'a·b = b·a 不成立', 'a·a = |a|²', '数量积满足结合律 (a·b)·c = a·(b·c)'], answer: 'a·a = |a|²', explanation: '数量积 a·b 的结果是一个数量（实数）而非向量，第一项错；数量积满足交换律 a·b = b·a，第二项错；当两向量都是 a 时，a·a = |a||a|cos0 = |a|²，第三项正确；数量积是数量与数量的乘法，结合律 (a·b)·c = a·(b·c) 一般不成立，第四项错。故选 a·a = |a|²。' }
      ]
    }

  );
})();
