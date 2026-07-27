/* ============================================================
 * 高三数学 · 总复习专题 zt2 三角与向量 · 第5单元（2 课时）
 * 第1课时：向量的基本概念 + 线性运算
 * 第2课时：平面向量基本定理 + 向量共线定理
 * 数据注入：gzGetVolume('math', 'zt2').points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt2');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 向量的基本概念 + 线性运算 ---------------- */
    {
      id: 'zt2-u5-l1',
      name: '向量的基本概念与线性运算',
      chapter: '三角与向量复习 · 三(一) 概念 / 三(二) 线性运算',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、向量的概念' },
        { type: 'paragraph', text: '在数学中，既有大小又有方向的量叫做向量。力、位移、速度等都是向量；而长度、面积、温度等只有大小没有方向，是数量。研究向量要同时关注它的大小和方向两个方面，这是向量与数量的本质区别。' },
        { type: 'keypoint', label: '重点·定义', text: '一般地，<strong>既有大小又有方向的量叫做向量</strong>。向量的<strong>大小</strong>称为它的<strong>长度（模）</strong>，记作 |向量a|；方向由箭头指向表示。只有大小没有方向的量叫做数量（标量）。' },
        { type: 'paragraph', text: '向量有两种常见的表示方式：几何表示法用有向线段，字母表示法用一个带箭头的字母或黑体字母。' },
        { type: 'list', items: ['几何表示：用一条有向线段表示，线段长度等于模，箭头方向等于方向', '字母表示：常写作 向量a（手写带箭头），印刷体常用黑体 a', '坐标表示：在平面中记作 (x, y)，其中 x、y 是向量在坐标轴上的投影'] },
        { type: 'keypoint', label: '重点·特殊向量', text: '<strong>零向量</strong>：长度为 0 的向量，记作 0，方向任意；<strong>单位向量</strong>：长度等于 1 的向量；<strong>相等向量</strong>：长度相等且方向相同的向量（与起点无关）；<strong>相反向量</strong>：长度相等、方向相反的向量；<strong>共线（平行）向量</strong>：方向相同或相反的非零向量，也叫平行向量。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><line x1="70" y1="190" x2="600" y2="190" stroke="#33536e" stroke-width="1.5"/><line x1="110" y1="220" x2="110" y2="50" stroke="#33536e" stroke-width="1.5"/><text x="588" y="210" font-size="15" fill="#33536e">x</text><text x="96" y="62" font-size="15" fill="#33536e">y</text><line x1="110" y1="190" x2="430" y2="90" stroke="#2b5b9e" stroke-width="3"/><polygon points="430,90 414,92 420,108" fill="#2b5b9e"/><circle cx="110" cy="190" r="4" fill="#2b5b9e"/><circle cx="430" cy="90" r="4" fill="#2b5b9e"/><text x="250" y="135" font-size="17" fill="#2b5b9e" font-weight="bold">向量a</text><text x="118" y="208" font-size="14" fill="#4a7de0">O</text><text x="438" y="86" font-size="14" fill="#4a7de0">A</text><text x="120" y="228" font-size="14" fill="#33536e">起点</text><text x="408" y="118" font-size="14" fill="#33536e">终点（箭头）</text><text x="58" y="56" font-size="14" fill="#c0392b">有向线段：长度=模 |向量a|，箭头=方向</text></svg>', caption: '图1　向量的几何表示：用有向线段表示向量，线段长度表示大小，箭头指向表示方向。' },
        { type: 'heading', text: '二、向量的加法' },
        { type: 'paragraph', text: '向量相加有两条几何法则。三角形法则把两个向量首尾相接，和向量从第一个起点指向第二个终点；平行四边形法则让两向量同起点，以它们为邻边作平行四边形，和向量是从公共起点出发的对角线。' },
        { type: 'keypoint', label: '重点·加法法则', text: '<strong>三角形法则</strong>：将 向量b 的起点接在 向量a 的终点，则 向量a+向量b 从 向量a 的起点指向 向量b 的终点；<strong>平行四边形法则</strong>：以 向量a、向量b 为邻边作平行四边形，和向量为从公共起点出发的对角线。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="170" y="34" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">三角形法则（首尾相连）</text><line x1="80" y1="230" x2="250" y2="150" stroke="#2b5b9e" stroke-width="3"/><polygon points="250,150 235,152 240,167" fill="#2b5b9e"/><line x1="250" y1="150" x2="380" y2="110" stroke="#e05d44" stroke-width="3"/><polygon points="380,110 366,114 372,128" fill="#e05d44"/><line x1="80" y1="230" x2="380" y2="110" stroke="#5a7a2a" stroke-width="3" stroke-dasharray="6 4"/><polygon points="380,110 364,120 378,128" fill="#5a7a2a"/><text x="150" y="200" font-size="15" fill="#2b5b9e">向量a</text><text x="305" y="140" font-size="15" fill="#c0392b">向量b</text><text x="200" y="118" font-size="15" fill="#5a7a2a">向量a+向量b</text><text x="74" y="250" font-size="14" fill="#4a7de0">P</text><text x="244" y="170" font-size="14" fill="#4a7de0">Q</text><text x="384" y="105" font-size="14" fill="#4a7de0">R</text><line x1="450" y1="290" x2="450" y2="60" stroke="#cccccc" stroke-width="1"/><text x="510" y="34" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">平行四边形法则（同起点）</text><line x1="450" y1="230" x2="560" y2="150" stroke="#2b5b9e" stroke-width="3"/><polygon points="560,150 545,152 550,167" fill="#2b5b9e"/><line x1="450" y1="230" x2="540" y2="270" stroke="#e05d44" stroke-width="3"/><polygon points="540,270 538,254 552,260" fill="#e05d44"/><line x1="560" y1="150" x2="650" y2="190" stroke="#e05d44" stroke-width="2" stroke-dasharray="5 4"/><line x1="540" y1="270" x2="650" y2="190" stroke="#2b5b9e" stroke-width="2" stroke-dasharray="5 4"/><line x1="450" y1="230" x2="650" y2="190" stroke="#5a7a2a" stroke-width="3"/><polygon points="650,190 634,194 640,208" fill="#5a7a2a"/><text x="500" y="185" font-size="15" fill="#2b5b9e">向量a</text><text x="488" y="262" font-size="15" fill="#c0392b">向量b</text><text x="540" y="205" font-size="15" fill="#5a7a2a">向量a+向量b</text></svg>', caption: '图2　向量加法的两种法则：左为三角形法则（首尾相接），右为平行四边形法则（同起点，对角线为和）。' },
        { type: 'example', label: '例题1', text: '用三角形法则作出 向量a+向量b。<br><br><strong>解</strong>：先画向量a，以其终点为起点画向量b，连接 向量a 的起点与 向量b 的终点，所得有向线段即为 向量a+向量b。由交换律 向量a+向量b=向量b+向量a，所以也可先画 向量b 再接 向量a，结果相同。' },
        { type: 'list', items: ['交换律：向量a+向量b = 向量b+向量a', '结合律：(向量a+向量b)+向量c = 向量a+(向量b+向量c)', '加零向量：向量a+0 = 0+向量a = 向量a'] },
        { type: 'heading', text: '三、向量的减法' },
        { type: 'keypoint', label: '重点·减法', text: '向量减法定义为加上相反向量：<strong>向量a−向量b = 向量a+(−向量b)</strong>。几何上采用“<strong>共同起点，指向被减</strong>”：将两向量平移到同一起点，差向量从减向量终点指向被减向量终点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><line x1="120" y1="200" x2="430" y2="90" stroke="#2b5b9e" stroke-width="3"/><polygon points="430,90 415,94 420,109" fill="#2b5b9e"/><line x1="120" y1="200" x2="360" y2="130" stroke="#e05d44" stroke-width="3"/><polygon points="360,130 346,133 351,148" fill="#e05d44"/><line x1="360" y1="130" x2="430" y2="90" stroke="#7a5aa0" stroke-width="3" stroke-dasharray="6 4"/><polygon points="430,90 416,96 426,108" fill="#7a5aa0"/><circle cx="120" cy="200" r="4" fill="#2b5b9e"/><text x="262" y="150" font-size="16" fill="#2b5b9e">向量a</text><text x="225" y="185" font-size="16" fill="#c0392b">向量b</text><text x="392" y="120" font-size="16" fill="#7a5aa0">向量a-向量b</text><text x="108" y="218" font-size="14" fill="#4a7de0">O（共起点）</text><text x="70" y="60" font-size="14" fill="#33536e">减法：向量a-向量b 从 向量b 终点指向 向量a 终点</text></svg>', caption: '图3　向量减法“共同起点，指向被减”：差向量从减向量终点指向被减向量终点。' },
        { type: 'example', label: '例题2', text: '已知 向量a、向量b 同起点，作出 向量a−向量b。<br><br><strong>解</strong>：把 向量a、向量b 平移到同一始点 O，连接两向量的终点，从 向量b 的终点指向 向量a 的终点的有向线段，就是 向量a−向量b。它等价于 向量a+(−向量b)，其中 −向量b 与 向量b 等长反向。' },
        { type: 'heading', text: '四、向量的数乘' },
        { type: 'keypoint', label: '重点·数乘', text: '实数 λ 与向量 向量a 的乘积 λ向量a 仍是向量：<strong>|λ向量a| = |λ|·|向量a|</strong>；当 <strong>λ 为正</strong> 时与 向量a 同向，当 <strong>λ 为负</strong> 时与 向量a 反向，当 λ=0 或 向量a=0 时为零向量。' },
        { type: 'paragraph', text: '数乘满足三条运算律，它们把实数乘法与向量运算联系起来，是向量线性运算的基础。' },
        { type: 'example', label: '例题3', text: '在实数 λ 取 2 与 −1/2 时，分别说明 2向量a 与 −1/2 向量a 的方向和长度。<br><br><strong>解</strong>：2向量a 中 λ=2 为正，故与 向量a 同向，长度为 |向量a| 的 2 倍；−1/2 向量a 中 λ=−1/2 为负，故与 向量a 反向，长度为 |向量a| 的 1/2。数乘只改变长度并按 λ 的符号翻转方向。' },
        { type: 'warn', label: '易错', text: '数乘 λ向量a 的方向由 λ 的符号决定，<strong>不是由 |λ| 决定</strong>。常见错误是只看绝对值而忽略符号，误判方向。另外 0·向量a = 0（左边是零向量，右边是实数 0），书写时要分清零向量与实数零。' },
        { type: 'tip', label: '提示', text: '判断两个向量关系时，先比较<strong>方向</strong>再比较<strong>长度</strong>：方向不同则不可能相等；长度相等且方向相同才是相等向量。共线只要求方向平行，对长度没有要求。' },
        { type: 'table', headers: ['特殊向量', '定义', '备注'], rows: [['零向量', '长度 |向量a|=0', '方向任意，记作 0'], ['单位向量', '长度 = 1', '方向任意，不唯一'], ['相等向量', '长度相等且方向相同', '与起点位置无关'], ['相反向量', '长度相等、方向相反', '向量a 的相反向量是 −向量a'], ['共线向量', '方向相同或相反', '即平行向量']] },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['向量：既有大小又有方向的量；长度叫模 |向量a|', '表示法：几何（有向线段）、字母（向量a）、坐标 (x, y)', '加法：三角形法则首尾相连、平行四边形法则同起点', '减法：向量a−向量b=向量a+(−向量b)，共同起点指向被减', '数乘：λ向量a，λ 为正同向、λ 为负反向，长度 |λ| 倍', '特殊向量：零向量、单位向量、相等、相反、共线向量'] }
      ],
      exercises: [
        { type: 'choice', question: '关于向量的说法，正确的是？', options: ['既有大小又有方向的量叫向量', '向量就是有向线段', '两个向量能比较大小', '向量的长度可以是负数'], answer: '既有大小又有方向的量叫向量', explanation: '向量是既有大小又有方向的量，这是向量的本质定义。有向线段只是向量的几何表示工具，二者不能等同；向量不能像实数那样比较大小，因为方向无法比较；向量的模长是长度，必为非负数，不可能是负数。' },
        { type: 'choice', question: '下列命题正确的是？', options: ['零向量没有方向', '单位向量都相等', '长度相等且方向相同的向量是相等向量', '平行向量一定相等'], answer: '长度相等且方向相同的向量是相等向量', explanation: '相等向量要求长度相等且方向相同，与起点位置无关。零向量方向任意而非没有方向；单位向量长度都为 1 但方向可以不同，故未必相等；平行（共线）向量只要求方向平行，长度可能不同，故不一定相等。' },
        { type: 'fill', question: '向量加法的三角形法则要求两个向量____（填“首尾相连”或“同起点”）。', answer: '首尾相连', explanation: '三角形法则的做法是把第二个向量的起点接在第一个向量的终点上，即“首尾相连”，再从第一个向量的起点指向第二个向量的终点得到和向量。平行四边形法则才要求两个向量同起点。' },
        { type: 'choice', question: '向量a−向量b 可以化为？', options: ['向量a+向量b', '向量a+(−向量b)', '−向量a+向量b', '向量b+向量a'], answer: '向量a+(−向量b)', explanation: '向量减法定义为加上被减向量的相反向量，即 向量a−向量b = 向量a+(−向量b)。这是统一处理加减法的基础，−向量b 与 向量b 长度相等、方向相反。' },
        { type: 'fill', question: '数乘 λ向量a 中，当 λ 为负时，λ向量a 与 向量a 方向____（填“相同”或“相反”）。', answer: '相反', explanation: '数乘 λ向量a 的方向由实数 λ 的符号决定：当 λ 为正时与 向量a 同向，当 λ 为负时与 向量a 反向；其长度为 |λ| 倍的 |向量a|。故 λ 为负时方向与原向量相反。' }
      ]
    },

    /* ---------------- 第2课时 平面向量基本定理 + 向量共线定理 ---------------- */
    {
      id: 'zt2-u5-l2',
      name: '平面向量基本定理与向量共线定理',
      chapter: '三角与向量复习 · 三(三) 基本定理 / 三(四) 共线定理',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、平面向量基本定理' },
        { type: 'paragraph', text: '平面内不是所有向量都能互相表示。基本定理告诉我们：只要选好两个不共线的向量作基底，平面内任意向量都能唯一地写成它们的线性组合。这个定理是向量坐标化的理论依据。' },
        { type: 'keypoint', label: '重点·基本定理', text: '如果 向量e1、向量e2 是<strong>不共线</strong>的向量，那么对于平面内任意向量 向量a，存在<strong>唯一</strong>一对实数 λ1、λ2，使 <strong>向量a = λ1 向量e1 + λ2 向量e2</strong>。把 {向量e1, 向量e2} 叫做表示这一平面内所有向量的一组<strong>基底</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><line x1="110" y1="210" x2="600" y2="210" stroke="#33536e" stroke-width="1.5"/><line x1="110" y1="210" x2="110" y2="40" stroke="#33536e" stroke-width="1.5"/><line x1="110" y1="210" x2="360" y2="90" stroke="#4a7de0" stroke-width="2.5"/><polygon points="360,90 345,96 354,110" fill="#4a7de0"/><line x1="110" y1="210" x2="250" y2="150" stroke="#5a7a2a" stroke-width="3"/><polygon points="250,150 235,153 240,168" fill="#5a7a2a"/><line x1="250" y1="150" x2="360" y2="90" stroke="#2b5b9e" stroke-width="3"/><polygon points="360,90 346,96 355,108" fill="#2b5b9e"/><text x="170" y="200" font-size="15" fill="#5a7a2a">λ1 e1</text><text x="290" y="125" font-size="15" fill="#2b5b9e">λ2 e2</text><text x="200" y="100" font-size="16" fill="#2b5b9e" font-weight="bold">向量a</text><text x="300" y="75" font-size="14" fill="#4a7de0">e1</text><text x="150" y="75" font-size="14" fill="#4a7de0">e2</text></svg>', caption: '图1　平面向量基本定理：任一向量 向量a 可唯一表示为 λ1 e1 + λ2 e2，其中 e1、e2 为不共线的基底。' },
        { type: 'paragraph', text: '基底不是唯一的，平面内任意一组不共线的向量都可以作为基底。基底选定后，每个向量对应的系数 (λ1, λ2) 就是它在这一基底下的坐标。' },
        { type: 'list', items: ['基底必须不共线，共线则无法张成整个平面', '基底不唯一，但一旦选定，表示系数唯一', '同一向量在不同基底下的坐标是不同的'] },
        { type: 'example', label: '例题1', text: '已知基底 向量e1、向量e2，把 向量a = 3向量e1 + 2向量e2 用图形表示，并写出其坐标。<br><br><strong>解</strong>：先沿 向量e1 方向取 3 倍得 3向量e1，再从其终点沿 向量e2 方向取 2 倍，首尾相接后的合向量即为 向量a。在以 {向量e1, 向量e2} 为基底的坐标系中，向量a 的坐标为 (3, 2)。' },
        { type: 'heading', text: '二、向量共线定理' },
        { type: 'keypoint', label: '重点·共线定理', text: '向量 向量a（<strong>向量a ≠ 0</strong>）与 向量b 共线的充要条件是：<strong>存在唯一实数 λ，使 向量b = λ向量a</strong>。定理中 向量a ≠ 0 必不可少，否则 λ 不唯一，条件失去意义。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><line x1="100" y1="130" x2="600" y2="130" stroke="#33536e" stroke-width="1.5"/><line x1="120" y1="130" x2="300" y2="130" stroke="#2b5b9e" stroke-width="4"/><polygon points="300,130 286,124 286,136" fill="#2b5b9e"/><line x1="300" y1="130" x2="540" y2="130" stroke="#e05d44" stroke-width="4"/><polygon points="540,130 526,124 526,136" fill="#e05d44"/><text x="200" y="112" font-size="16" fill="#2b5b9e">向量a</text><text x="410" y="112" font-size="16" fill="#c0392b">向量b = λ向量a</text><text x="120" y="155" font-size="14" fill="#4a7de0">O</text><text x="300" y="155" font-size="14" fill="#4a7de0">A</text><text x="540" y="155" font-size="14" fill="#4a7de0">B</text><text x="120" y="60" font-size="14" fill="#33536e">共线：O、A、B 在同一直线上，向量b 是 向量a 的实数倍</text></svg>', caption: '图2　向量共线定理：非零 向量a 与 向量b 共线，当且仅当存在实数 λ 使 向量b = λ向量a。' },
        { type: 'example', label: '例题2', text: '判断 向量a=(1, 2) 与 向量b=(2, 4) 是否共线。<br><br><strong>解</strong>：因为 向量b=(2, 4)=2·(1, 2)=2向量a，即存在 λ=2 使 向量b=λ向量a，所以二向量共线，且 λ=2 为正数说明二者同向。' },
        { type: 'warn', label: '易错', text: '使用共线定理时务必先确认 <strong>向量a ≠ 0</strong>。若 向量a=0，则对任意 向量b 都有 向量b=λ·0，无法据此判定共线。另外“共线”与“相等”不同：共线只要求方向平行，长度可以不等。' },
        { type: 'heading', text: '三、三点共线模型' },
        { type: 'keypoint', label: '重点·三点共线', text: '平面上 A、B、C 三点共线的充要条件是：<strong>向量AB 与 向量AC 共线</strong>，即存在实数 λ 使 <strong>向量AB = λ向量AC</strong>。这是把几何中的“共线”转化为向量关系的重要桥梁。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><line x1="120" y1="190" x2="580" y2="190" stroke="#33536e" stroke-width="1.5"/><circle cx="160" cy="190" r="5" fill="#2b5b9e"/><circle cx="340" cy="190" r="5" fill="#e05d44"/><circle cx="540" cy="190" r="5" fill="#5a7a2a"/><line x1="160" y1="190" x2="340" y2="190" stroke="#2b5b9e" stroke-width="3"/><polygon points="340,190 326,184 326,196" fill="#2b5b9e"/><line x1="160" y1="190" x2="540" y2="190" stroke="#7a5aa0" stroke-width="3" stroke-dasharray="6 4"/><polygon points="540,190 526,184 526,196" fill="#7a5aa0"/><text x="240" y="178" font-size="15" fill="#2b5b9e">向量AB</text><text x="345" y="178" font-size="15" fill="#7a5aa0">向量AC</text><text x="150" y="215" font-size="14" fill="#4a7de0">A</text><text x="330" y="215" font-size="14" fill="#4a7de0">B</text><text x="530" y="215" font-size="14" fill="#4a7de0">C</text><text x="120" y="60" font-size="14" fill="#33536e">A、B、C 共线 等价于 向量AB 与 向量AC 共线（即 向量AB = λ向量AC）</text></svg>', caption: '图3　三点共线模型：A、B、C 三点共线，等价于 向量AB 与 向量AC 共线（即 向量AB = λ向量AC）。' },
        { type: 'example', label: '例题3', text: '已知 向量AB = 2向量AC，证明 A、B、C 三点共线。<br><br><strong>解</strong>：由 向量AB = 2向量AC 可知，向量AB 与 向量AC 共线（λ=2），且二者有公共起点 A，因此 A、B、C 三点位于同一直线上，即三点共线。' },
        { type: 'paragraph', text: '三点共线模型在解析几何与向量综合题中极常用：只要能找到两个以同一点为起点的向量成比例，就能判定三点共线，从而避免繁琐的斜率计算。' },
        { type: 'list', items: ['取公共点作为向量起点', '写出 向量AB 与 向量AC', '验证是否存在 λ 使 向量AB=λ向量AC', '成比例即共线，不成比例则不共线'] },
        { type: 'tip', label: '提示', text: '证明三点共线时，优先构造<strong>有公共起点</strong>的两个向量。若给出的向量没有公共起点，先用减法统一平移到同一起点，再判断比例关系。' },
        { type: 'table', headers: ['定理', '条件', '结论'], rows: [['平面向量基本定理', '向量e1、向量e2 不共线', '任意 向量a = λ1向量e1 + λ2向量e2 唯一'], ['向量共线定理', '向量a ≠ 0', '向量b = λ向量a 等价于共线'], ['三点共线模型', 'A、B、C 共起点', '向量AB = λ向量AC 等价于三点共线']] },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['基本定理：不共线基底可唯一表示平面内任一向量', '基底 {向量e1, 向量e2} 不唯一，但表示系数唯一', '共线定理：向量a≠0 时，向量b=λ向量a 等价于共线', '三点共线：向量AB=λ向量AC 等价于 A、B、C 共线', '证明共线先统一公共起点，再找比例 λ'] }
      ],
      exercises: [
        { type: 'choice', question: '平面向量基本定理中，基底 e1、e2 必须满足？', options: ['e1、e2 方向相同', 'e1、e2 不共线', 'e1、e2 长度相等', 'e1、e2 都是单位向量'], answer: 'e1、e2 不共线', explanation: '平面向量基本定理要求基底 向量e1、向量e2 必须不共线，这样才能唯一表示平面内任一向量。若 向量e1、向量e2 共线，则它们只能表示同一直线上的向量，无法张成整个平面，因此“不共线”是定理成立的必要条件。' },
        { type: 'choice', question: '向量a（向量a≠0）与 向量b 共线的充要条件是？', options: ['存在实数 λ 使 向量b=λ向量a', '向量a+向量b=0', '|向量a|=|向量b|', '向量a·向量b=0'], answer: '存在实数 λ 使 向量b=λ向量a', explanation: '向量共线定理：对于非零向量 向量a，向量b 与 向量a 共线当且仅当存在唯一实数 λ 使 向量b=λ向量a。注意定理要求 向量a≠0，否则 λ 不唯一，共线条件失效。' },
        { type: 'fill', question: '三点 A、B、C 共线的一个判定是：若存在实数 λ 使 向量AB = λ ____，则 A、B、C 共线。', answer: '向量AC', explanation: '三点共线模型：若 向量AB 与 向量AC 共线，则 A、B、C 三点位于同一直线。由共线定理，存在实数 λ 使 向量AB=λ向量AC，这正是三点共线的向量判定依据。' },
        { type: 'choice', question: '已知向量a=(1, 2)，向量b=(2, 4)，则 向量a 与 向量b 的关系是？', options: ['共线且反向', '共线且同向', '不相等且不共线', '垂直'], answer: '共线且同向', explanation: '由 向量b=(2, 4)=2·(1, 2)=2向量a，得 向量b 是 向量a 的正实数倍。根据共线定理二者共线，且 λ=2 为正数，故方向相同、长度为 向量a 的 2 倍。二者不垂直（垂直要求数量积为 0，此处数量积为 10，不等于 0）。' },
        { type: 'fill', question: '用基底 e1、e2 表示 向量a：若 向量a=3向量e1−2向量e2，则系数 λ1=____（已知 λ2=−2）。', answer: '3', explanation: '由 向量a=λ1 向量e1+λ2 向量e2 对照 向量a=3向量e1−2向量e2，由于基底 向量e1、向量e2 不共线（线性无关），表示唯一，可直接对应系数得 λ1=3，λ2=−2。故空缺的系数为 3。' }
      ]
    }

  );
})();
