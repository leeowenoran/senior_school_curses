/* ============================================================
 * 高考复习 · 数学 · 专题二 三角与向量
 * 第6单元（2课时）：向量的坐标表示与运算、向量的数量积
 * 数据注入：gzGetVolume('math','zt2').points
 * 注：本文件仅追加 points，不修改 data-gz.js
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt2');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 向量的坐标表示与运算 ---------------- */
    {
      id: 'zt2-u6-l1',
      name: '向量的坐标表示与运算',
      chapter: '三角与向量复习 · 三(五) 坐标表示与运算',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、向量的坐标表示' },
        { type: 'paragraph', text: '在平面直角坐标系中引入向量后，每个向量都可以通过坐标来精确描述。坐标表示把几何向量转化为有序实数对，使向量的运算转化为实数的代数运算，这是用代数方法研究几何问题的基础。' },
        { type: 'keypoint', label: '重点·坐标定义', text: '<strong>向量的坐标表示</strong>：起点在原点的向量 向量a 可以用其终点的坐标 (x, y) 来表示，记作 <strong>向量a = (x, y)</strong>。其中 x 称为横坐标，y 称为纵坐标，二者合称向量的坐标（分量）。' },
        { type: 'paragraph', text: '坐标表示的核心思想是“以终点代替向量”：起点固定在原点时，向量与终点一一对应，因此用终点的坐标即可完整表示这个向量，无需再画箭头。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><line x1="50" y1="230" x2="640" y2="230" stroke="#33536e" stroke-width="2"/><line x1="90" y1="40" x2="90" y2="250" stroke="#33536e" stroke-width="2"/><text x="620" y="250" font-size="15" fill="#33536e">x</text><text x="72" y="54" font-size="15" fill="#33536e">y</text><text x="96" y="246" font-size="14" fill="#33536e">O</text><line x1="90" y1="230" x2="390" y2="90" stroke="#2b5b9e" stroke-width="3"/><circle cx="390" cy="90" r="6" fill="#e05d44"/><text x="402" y="86" font-size="16" fill="#c0392b">P(x, y)</text><line x1="390" y1="90" x2="390" y2="230" stroke="#4a7de0" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="390" y1="90" x2="90" y2="90" stroke="#4a7de0" stroke-width="1.5" stroke-dasharray="6 4"/><text x="225" y="222" font-size="14" fill="#2b5b9e">x</text><text x="64" y="165" font-size="14" fill="#2b5b9e">y</text><text x="180" y="56" font-size="17" font-weight="bold" fill="#2b5b9e">向量a = (x, y)</text><text x="120" y="270" font-size="14" fill="#33536e">平面直角坐标系中，向量由终点坐标唯一确定</text></svg>', caption: '图1　向量a=(x,y)：从原点指向点P(x,y)的有向线段，横纵坐标即向量分量。' },
        { type: 'heading', text: '二、坐标的线性运算' },
        { type: 'keypoint', label: '重点·加减法', text: '坐标加减法：<strong>(x1, y1) ± (x2, y2) = (x1 ± x2, y1 ± y2)</strong>。即对应坐标分别相加减。注意加减是“对应位置”运算，不可交叉。' },
        { type: 'keypoint', label: '重点·数乘', text: '<strong>数乘</strong>：实数 λ 与向量 (x, y) 相乘，λ(x, y) = (λx, λy)。数乘改变向量的长度（|λ| 倍），当 λ 小于 0 时还反向。' },
        { type: 'list', items: ['加减法：对应坐标分别相加减，即 (x1±x2, y1±y2)', '数乘：λ(x, y) = (λx, λy)，长度变为 |λ| 倍', '书写顺序：先算括号内坐标，再按对应位置运算'] },
        { type: 'paragraph', text: '向量的加减与数乘在坐标下都有简洁的统一算法。掌握这些坐标公式，可以避免每次都借助图形平行四边形法则，直接通过算式得到结果，既快又准。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><line x1="60" y1="200" x2="640" y2="200" stroke="#33536e" stroke-width="1.5"/><line x1="120" y1="30" x2="120" y2="220" stroke="#33536e" stroke-width="1.5"/><text x="600" y="218" font-size="14" fill="#33536e">x</text><text x="104" y="44" font-size="14" fill="#33536e">y</text><text x="126" y="216" font-size="13" fill="#33536e">O</text><line x1="120" y1="200" x2="300" y2="110" stroke="#2b5b9e" stroke-width="3"/><text x="190" y="146" font-size="15" fill="#2b5b9e">向量a</text><line x1="120" y1="200" x2="420" y2="150" stroke="#7a5aa0" stroke-width="3"/><text x="250" y="190" font-size="15" fill="#7a5aa0">向量b</text><line x1="300" y1="110" x2="420" y2="150" stroke="#7a5aa0" stroke-width="2" stroke-dasharray="5 4"/><line x1="420" y1="150" x2="300" y2="110" stroke="#2b5b9e" stroke-width="2" stroke-dasharray="5 4"/><line x1="120" y1="200" x2="420" y2="150" stroke="#e05d44" stroke-width="3"/><text x="270" y="178" font-size="15" fill="#c0392b">向量a+向量b</text><text x="140" y="248" font-size="14" fill="#33536e">平行四边形法则：以a、b为邻边，对角线即为a+b</text></svg>', caption: '图2　坐标加法的平行四边形法则：向量a与向量b之和由对角线表示。' },
        { type: 'heading', text: '三、向量共线的坐标条件' },
        { type: 'keypoint', label: '重点·共线条件', text: '<strong>共线坐标条件</strong>：向量 (x1, y1) 与 (x2, y2) 共线（平行）的充要条件是 <strong>x1 y2 − x2 y1 = 0</strong>。此式又称坐标叉积或二阶行列式，等价于两向量成比例。' },
        { type: 'warn', label: '易错', text: '判断共线时务必注意叉积公式的<strong>顺序</strong>：x1 y2 − x2 y1，不能写成 x1 y1 − x2 y2。若两向量中有零向量，零向量与任意向量共线；若分母含坐标运算需先确认分母不为 0。' },
        { type: 'example', label: '例题', text: '已知 向量a=(1,2)、向量b=(3,−1)，求 向量a+向量b、向量a−向量b、2向量a；判断 (1,2) 与 (2,4) 是否共线；求 |向量a|。<br><br><strong>解</strong>：坐标加减：向量a+向量b = (1+3, 2+(−1)) = (4,1)；向量a−向量b = (1−3, 2−(−1)) = (−2,3)。<br>数乘：2向量a = 2×(1,2) = (2,4)。<br>共线判断：x1 y2 − x2 y1 = 1×4 − 2×2 = 4 − 4 = 0，故 (1,2) 与 (2,4) 共线。<br>模长：|向量a| = √(1²+2²) = √5。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><line x1="120" y1="160" x2="640" y2="55" stroke="#33536e" stroke-width="1.5"/><line x1="120" y1="160" x2="380" y2="108" stroke="#2b5b9e" stroke-width="3"/><text x="250" y="128" font-size="15" fill="#2b5b9e">向量a=(x1,y1)</text><line x1="120" y1="160" x2="640" y2="55" stroke="#e05d44" stroke-width="3"/><text x="470" y="92" font-size="15" fill="#c0392b">向量b=(x2,y2)</text><circle cx="120" cy="160" r="5" fill="#33536e"/><text x="96" y="178" font-size="13" fill="#33536e">O</text><text x="140" y="215" font-size="15" fill="#2b5b9e" font-weight="bold">x1 y2 − x2 y1 = 0</text><text x="140" y="233" font-size="14" fill="#33536e">两向量共线时，坐标叉积（行列式）必为 0</text></svg>', caption: '图3　共线条件：向量a与向量b落在同一直线上，坐标满足 x1 y2 − x2 y1 = 0。' },
        { type: 'heading', text: '四、向量的模（长度）' },
        { type: 'keypoint', label: '重点·模长', text: '<strong>向量模长</strong>：|向量a| = √(x² + y²)。它表示向量 向量a 的长度。模长非负，且 |向量a|² = x² + y²。' },
        { type: 'tip', label: '提示', text: '<strong>模长与两点距离</strong>：|向量a| = √(x²+y²) 与原点到点 (x,y) 的距离公式一致。因此坐标法把“向量长度”与“几何距离”统一起来，求线段长可直接套用。' },
        { type: 'list', items: ['坐标表示：向量a = (x, y)', '加减：向量a ± 向量b = (x1±x2, y1±y2)', '数乘：λ向量a = (λx, λy)', '共线：x1 y2 − x2 y1 = 0', '模长：|向量a| = √(x²+y²)'] },
        { type: 'table', headers: ['运算', '坐标公式', '说明'], rows: [['坐标表示', '向量a = (x, y)', '终点坐标即向量分量'], ['加法', '(x1,y1)+(x2,y2)=(x1+x2,y1+y2)', '对应坐标相加'], ['减法', '(x1,y1)−(x2,y2)=(x1−x2,y1−y2)', '对应坐标相减'], ['数乘', 'λ(x, y) = (λx, λy)', '长度变为 |λ| 倍'], ['共线条件', 'x1 y2 − x2 y1 = 0', '叉积为0则共线'], ['模长', '|向量a| = √(x²+y²)', '向量的长度']] },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['向量用终点坐标 (x, y) 表示，几何与代数统一', '加减、数乘都对“对应坐标”进行', '共线充要条件是坐标叉积 x1 y2 − x2 y1 = 0', '模长公式为 √(x²+y²)，与距离公式一致'] }
      ],
      exercises: [
        { type: 'choice', question: '已知向量a=(1,2)，向量b=(3,1)，则 向量a+向量b 等于？', options: ['(4,3)', '(4,1)', '(2,3)', '(3,3)'], answer: '(4,3)', explanation: '向量相加时对应坐标分别相加：向量a+向量b = (1+3, 2+1) = (4,3)。其他选项均未正确完成坐标相加，只有 (4,3) 符合坐标加法的运算法则。' },
        { type: 'choice', question: '已知向量a=(2,4)，向量b=(1,2)，则两向量的关系是？', options: ['垂直', '共线', '长度相等', '夹角为90°'], answer: '共线', explanation: '两向量共线的坐标条件为 x1 y2 − x2 y1 = 0。代入 a=(2,4)、b=(1,2)：2×2 − 4×1 = 4 − 4 = 0，满足共线条件，故两向量共线。垂直要求数量积为0，此处不成立；长度相等也不成立。' },
        { type: 'fill', question: '已知向量a=(3,4)，则 |向量a| = ____。', answer: '5', explanation: '向量模长公式为 |向量a| = √(x² + y²)。代入 a=(3,4) 得 |a| = √(3² + 4²) = √(9+16) = √25 = 5。模长表示向量的长度，始终为非负数。' },
        { type: 'choice', question: '已知向量a=(x,2)，向量b=(3,6)，若两向量共线，则 x 等于？', options: ['1', '2', '3', '4'], answer: '1', explanation: '共线条件 x1 y2 − x2 y1 = 0，代入 (x,2) 与 (3,6)：x·6 − 3·2 = 0，即 6x − 6 = 0，解得 x = 1。其余选项代入后叉积不为零，不满足共线条件。' },
        { type: 'fill', question: '已知向量a=(1,2)，向量b=(2,4)，则 2向量a − 向量b = ____。', answer: '(0,0)', explanation: '先数乘再相减：2向量a = 2×(1,2) = (2,4)，再减 向量b=(2,4)，得 (2−2, 4−4) = (0,0)。结果为零向量，说明 2向量a 与 向量b 相等，即两向量共线。' }
      ]
    },

    /* ---------------- 第2课时 向量的数量积 ---------------- */
    {
      id: 'zt2-u6-l2',
      name: '向量的数量积',
      chapter: '三角与向量复习 · 三(六) 向量的数量积',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、数量积的定义' },
        { type: 'paragraph', text: '数量积是向量的一种乘法，结果是一个实数（标量），因此也叫点积或内积。它把两个向量的长度与夹角联系起来，在物理的功、几何的投影等问题中有直接应用。' },
        { type: 'keypoint', label: '重点·定义', text: '<strong>数量积定义</strong>：向量a·向量b = |向量a||向量b|cosθ，其中 θ 为两向量夹角（0° ≤ θ ≤ 180°）。物理意义是力做功：功 = 力·位移 = 力的大小乘位移在力方向上的投影。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><line x1="80" y1="220" x2="620" y2="220" stroke="#33536e" stroke-width="1.5"/><text x="600" y="240" font-size="14" fill="#33536e">a</text><line x1="120" y1="220" x2="520" y2="90" stroke="#2b5b9e" stroke-width="3"/><text x="430" y="120" font-size="16" fill="#2b5b9e">向量a</text><line x1="120" y1="220" x2="430" y2="140" stroke="#e05d44" stroke-width="3"/><text x="250" y="180" font-size="16" fill="#c0392b">向量b</text><line x1="430" y1="140" x2="430" y2="220" stroke="#7a5aa0" stroke-width="2" stroke-dasharray="6 4"/><text x="440" y="190" font-size="14" fill="#7a5aa0">|b|cosθ</text><text x="120" y="245" font-size="14" fill="#33536e">O</text><text x="150" y="60" font-size="16" fill="#2b5b9e" font-weight="bold">向量a·向量b = |a|·|b|cosθ</text><text x="150" y="265" font-size="14" fill="#33536e">向量b在向量a方向上的投影长度为 |b|cosθ</text></svg>', caption: '图1　数量积定义：向量a·向量b = |a|·|b|cosθ，等于 |a| 乘 向量b 在 向量a 上的投影。' },
        { type: 'paragraph', text: '从物理看，一个恒力 向量F 使物体位移 向量s，力所做的功 W = |向量F||向量s|cosθ = 向量F·向量s。可见数量积本质上是“一个向量在另一个向量方向上的投影长度，乘以另一个向量的长度”。' },
        { type: 'tip', label: '提示', text: '<strong>投影视角</strong>：向量a·向量b = |向量a| ×（向量b在向量a方向上的投影长度）。当夹角为钝角时投影为负，数量积也为负，这是判断夹角锐钝的简便方法。' },
        { type: 'heading', text: '二、数量积的坐标运算' },
        { type: 'keypoint', label: '重点·坐标公式', text: '<strong>数量积坐标公式</strong>：(x1, y1)·(x2, y2) = <strong>x1 x2 + y1 y2</strong>。即对应坐标乘积之和。用坐标公式可避免先求模长和夹角。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><line x1="70" y1="190" x2="630" y2="190" stroke="#33536e" stroke-width="1.5"/><line x1="110" y1="30" x2="110" y2="210" stroke="#33536e" stroke-width="1.5"/><text x="600" y="208" font-size="14" fill="#33536e">x</text><text x="94" y="44" font-size="14" fill="#33536e">y</text><line x1="110" y1="190" x2="350" y2="90" stroke="#2b5b9e" stroke-width="3"/><text x="210" y="130" font-size="15" fill="#2b5b9e">向量a=(x1,y1)</text><line x1="110" y1="190" x2="470" y2="120" stroke="#e05d44" stroke-width="3"/><text x="300" y="170" font-size="15" fill="#c0392b">向量b=(x2,y2)</text><text x="140" y="225" font-size="15" fill="#2b5b9e" font-weight="bold">向量a·向量b = x1 x2 + y1 y2</text><text x="140" y="235" font-size="14" fill="#33536e">对应坐标乘积之和即为数量积</text></svg>', caption: '图2　坐标运算：向量a·向量b = x1 x2 + y1 y2，对应坐标相乘再求和。' },
        { type: 'example', label: '例题', text: '已知 向量a=(1,2)、向量b=(2,−1)，求 向量a·向量b、夹角θ、|向量a|；判断 向量a 与 向量b 是否垂直；另已知 |向量a|=3、|向量b|=4、向量a·向量b=6，求夹角。<br><br><strong>解</strong>：数量积：向量a·向量b = 1×2 + 2×(−1) = 2 − 2 = 0。<br>因数量积为0，故 向量a ⊥ 向量b，夹角 θ = 90°。<br>模长：|向量a| = √(1²+2²) = √5。<br>另由夹角公式 cosθ = 6/(3×4) = 1/2，得 θ = 60°。' },
        { type: 'heading', text: '三、重要结论' },
        { type: 'keypoint', label: '重点·结论', text: '<strong>重要结论</strong>：① 向量a ⊥ 向量b ⇔ 向量a·向量b = 0；② 向量a·向量a = |向量a|²。<br>垂直的坐标判定与模长平方都可直接由坐标公式得到。' },
        { type: 'warn', label: '易错', text: '数量积满足交换律但不满足消去律：<strong>向量a·向量b = 向量a·向量c 不能推出 向量b = 向量c</strong>。另外 cosθ 由数量积与模长共同决定，单独知道数量积无法求夹角，还需 |向量a| 与 |向量b|。' },
        { type: 'list', items: ['向量a·向量b = 向量b·向量a（交换律）', '数量积不满足消去律', '垂直 ⇔ 数量积为0；向量a·向量a = |向量a|²'] },
        { type: 'heading', text: '四、夹角公式与垂直条件' },
        { type: 'keypoint', label: '重点·夹角公式', text: '<strong>夹角公式</strong>：cosθ = (向量a·向量b) / (|向量a||向量b|) = (x1 x2 + y1 y2) / (√(x1²+y1²) √(x2²+y2²))。夹角 θ 唯一确定在 [0°, 180°]。' },
        { type: 'keypoint', label: '重点·垂直条件', text: '<strong>垂直坐标条件</strong>：向量 (x1, y1) ⊥ (x2, y2) 当且仅当 <strong>x1 x2 + y1 y2 = 0</strong>。这是判断两向量垂直最常用、最直接的方法。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><line x1="100" y1="160" x2="580" y2="160" stroke="#33536e" stroke-width="1.5"/><line x1="340" y1="40" x2="340" y2="210" stroke="#33536e" stroke-width="1.5"/><line x1="340" y1="160" x2="520" y2="160" stroke="#2b5b9e" stroke-width="3"/><text x="430" y="150" font-size="15" fill="#2b5b9e">向量a</text><line x1="340" y1="160" x2="340" y2="70" stroke="#e05d44" stroke-width="3"/><text x="350" y="100" font-size="15" fill="#c0392b">向量b</text><text x="300" y="60" font-size="18" fill="#2b5b9e" font-weight="bold">⊥</text><text x="120" y="200" font-size="15" fill="#2b5b9e" font-weight="bold">向量a·向量b = 0</text><text x="120" y="225" font-size="14" fill="#33536e">垂直 ⇔ 数量积为0；|向量a|=√(x²+y²)</text></svg>', caption: '图3　垂直与模长：向量a⊥向量b时数量积为0，模长由坐标平方和开方得到。' },
        { type: 'table', headers: ['名称', '公式', '用途'], rows: [['数量积定义', '向量a·向量b = |a||b|cosθ', '由模长与夹角求积'], ['坐标公式', 'x1 x2 + y1 y2', '由坐标直接求数量积'], ['垂直条件', 'x1 x2 + y1 y2 = 0', '判定两向量垂直'], ['夹角公式', 'cosθ = (a·b)/(|a||b|)', '由数量积求夹角'], ['自乘', '向量a·向量a = |a|²', '求模长平方']] },
        { type: 'list', items: ['定义：向量a·向量b = |a||b|cosθ', '坐标：x1 x2 + y1 y2', '垂直：x1 x2 + y1 y2 = 0', '夹角：cosθ = 数量积 / (|a||b|)'] },
        { type: 'tip', label: '记忆', text: '记忆口诀：<strong>“点乘对位乘再加”</strong>——对应坐标相乘后求和即得数量积；垂直就看“对位乘之和为0”。求夹角先算数量积与两个模长，再取余弦反函数。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['数量积结果是实数，几何意义是投影乘模长', '坐标公式：对位相乘再求和', '垂直 ⇔ 数量积为0 ⇔ x1x2+y1y2=0', '夹角用余弦公式，范围 [0°,180°]'] }
      ],
      exercises: [
        { type: 'choice', question: '已知向量a=(1,2)，向量b=(2,−1)，则 向量a·向量b 等于？', options: ['0', '1', '2', '−2'], answer: '0', explanation: '数量积坐标公式：向量a·向量b = x1 x2 + y1 y2。代入 (1,2)·(2,−1) = 1×2 + 2×(−1) = 2 − 2 = 0。因为数量积为0，两向量互相垂直。' },
        { type: 'choice', question: '已知向量a=(1,2)，向量b=(2,−1)，则两向量的关系是？', options: ['共线', '垂直', '平行且同向', '长度相等'], answer: '垂直', explanation: '由数量积公式得 向量a·向量b = 1×2 + 2×(−1) = 0。两向量数量积为0是它们互相垂直的充要条件，故两向量垂直。其余选项均不能由该结果推出。' },
        { type: 'fill', question: '已知向量a=(3,4)，则 |向量a| = ____。', answer: '5', explanation: '模长公式 |向量a| = √(x²+y²)，代入 (3,4) 得 √(9+16) = √25 = 5。也可由数量积性质 |向量a|² = 向量a·向量a = 9+16 = 25 得到相同结果。' },
        { type: 'choice', question: '已知向量a=(1,0)，向量b=(0,1)，则 向量a·向量b 等于？', options: ['0', '1', '−1', '2'], answer: '0', explanation: '数量积坐标运算为对应坐标乘积之和：(1,0)·(0,1) = 1×0 + 0×1 = 0。这也是两标准基向量互相垂直的直接体现，互相垂直的向量数量积必为0。' },
        { type: 'fill', question: '已知 |向量a|=3，|向量b|=4，向量a·向量b=6，则夹角θ = ____ 度。', answer: '60', explanation: '由夹角公式 cosθ = (向量a·向量b) / (|向量a||向量b|) = 6 / (3×4) = 6/12 = 0.5，故夹角 θ = 60°。注意夹角取值范围是 [0°, 180°]，余弦值为0.5时对应唯一的锐角60°。' }
      ]
    }

  );
})();
