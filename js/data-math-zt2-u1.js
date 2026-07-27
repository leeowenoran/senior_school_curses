/* ============================================================
 * 高考数学复习专题 · 三角与向量
 * 第1单元：考试要求与命题趋势 + 任意角与弧度制 + 三角函数的定义 + 同角基本关系
 * 数据注入：math.zt2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt2');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 考试要求与命题趋势 + 任意角与弧度制 ---------------- */
    {
      id: 'zt2-u1-l1',
      name: '考试要求与命题趋势 · 任意角与弧度制',
      chapter: '三角与向量复习 · 一 考试要求与命题趋势 / 二(一) 任意角与弧度制',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、考试要求与命题趋势' },
        { type: 'paragraph', text: '三角函数是高考数学的必考核心内容，通常分布在选择题、填空题与解答题中，合计约 15 至 18 分。平面向量每年基本固定考查一道基础选择题（5 分），属于必须稳拿满分的模块，不应丢分。' },
        { type: 'keypoint', label: '重点·分值分布', text: '在高考中，<strong>三角函数与解三角形</strong>合计约 15 至 18 分：其中小题（选择、填空）约 5 至 10 分，解答题约 12 分；<strong>平面向量</strong>每年约 5 分，通常是一道基础选择题。两者常交汇命题，是解答题三角函数板块的核心工具。' },
        { type: 'list', items: ['三角函数：小题考查诱导公式、图象与性质；解答题考查 y = A sin(ωx + φ) 与解三角形', '平面向量：小题考查数量积、模长、平行与垂直，难度基础', '三角与向量常结合命题，是综合解答题的常见切入点'] },
        { type: 'tip', label: '提示·命题趋势', text: '近年高考<strong>淡化纯记忆、强化应用</strong>：三角图象与性质多与实际问题结合；向量突出几何意义与数量积的运算。复习时应重通法、重运算准确性，保证基础题不丢分。' },
        { type: 'heading', text: '二、任意角' },
        { type: 'paragraph', text: '初中阶段角多在 0° 到 360° 之间；高中把角推广到任意大小，用旋转来定义角，从而能统一处理周期现象。' },
        { type: 'keypoint', label: '重点·任意角', text: '一条射线绕端点<strong>按逆时针方向旋转</strong>形成的角叫<strong>正角</strong>；按<strong>顺时针方向旋转</strong>形成的角叫<strong>负角</strong>；射线未作旋转时形成<strong>零角</strong>。正、负、零角统称任意角。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><line x1="40" y1="140" x2="640" y2="140" stroke="#33536e" stroke-width="2"/><line x1="340" y1="20" x2="340" y2="260" stroke="#33536e" stroke-width="2"/><text x="480" y="90" font-size="18" fill="#2b5b9e" font-weight="bold">一</text><text x="200" y="90" font-size="18" fill="#2b5b9e" font-weight="bold">二</text><text x="200" y="210" font-size="18" fill="#2b5b9e" font-weight="bold">三</text><text x="480" y="210" font-size="18" fill="#2b5b9e" font-weight="bold">四</text><text x="620" y="130" font-size="15" fill="#33536e">x</text><text x="350" y="40" font-size="15" fill="#33536e">y</text><line x1="340" y1="140" x2="470" y2="95" stroke="#e05d44" stroke-width="2.5"/><line x1="340" y1="140" x2="220" y2="100" stroke="#5a7a2a" stroke-width="2.5"/><line x1="340" y1="140" x2="210" y2="200" stroke="#7a5aa0" stroke-width="2.5"/><line x1="340" y1="140" x2="470" y2="200" stroke="#4a7de0" stroke-width="2.5"/><circle cx="340" cy="140" r="4" fill="#2b5b9e"/><text x="455" y="125" font-size="13" fill="#e05d44">α1</text><text x="235" y="125" font-size="13" fill="#5a7a2a">α2</text><text x="230" y="195" font-size="13" fill="#7a5aa0">α3</text><text x="455" y="195" font-size="13" fill="#4a7de0">α4</text><text x="340" y="262" font-size="14" fill="#33536e" text-anchor="middle">终边落在第几象限，该角就是第几象限角</text></svg>', caption: '图1　四个象限中的角终边：按逆时针为正方向，终边位置决定象限。' },
        { type: 'paragraph', text: '在平面直角坐标系中，角的顶点与原点重合、始边与 x 轴正半轴重合。终边落在第几象限，这个角就叫做第几象限角；终边落在坐标轴上的角不属于任何象限。' },
        { type: 'keypoint', label: '重点·终边相同的角', text: '所有与角 α 终边相同的角（含 α 自身）构成的集合为 <strong>{β | β = α + 2kπ, k∈Z}</strong>。由于 2π 是一个周角，加上整数个周角后终边不变。角度制下写作 {β | β = α + k·360°, k∈Z}。' },
        { type: 'list', items: ['判断象限角：先看终边落在哪一象限', '终边相同的角相差 2kπ（k∈Z），它们大小不同但位置相同', '轴线角（终边在坐标轴上）不属于任何象限'] },
        { type: 'heading', text: '三、弧度制' },
        { type: 'paragraph', text: '弧度制是另一种度量角的单位制，用弧长与半径的比值表示角的大小，便于后续微积分与三角公式的统一表达。' },
        { type: 'keypoint', label: '重点·弧度定义', text: '长度等于<strong>半径长</strong>的圆弧所对的圆心角叫做 <strong>1 弧度的角</strong>，记作 1 rad。角的大小等于其所对弧长 l 与半径 r 之比，即 α = l / r（α 用弧度）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">弧长公式 l = α · r</text><path d="M 200 170 A 130 130 0 0 1 292 78 L 200 170 Z" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><line x1="200" y1="170" x2="292" y2="78" stroke="#2b5b9e" stroke-width="2"/><circle cx="200" cy="170" r="4" fill="#2b5b9e"/><path d="M 200 170 A 130 130 0 0 1 292 78" fill="none" stroke="#e05d44" stroke-width="3.5"/><text x="255" y="112" font-size="14" fill="#e05d44">l (弧长)</text><text x="248" y="188" font-size="14" fill="#2b5b9e">r (半径)</text><text x="150" y="205" font-size="14" fill="#33536e">圆心角 α 用弧度表示</text></svg>', caption: '图2　扇形弧长：弧长 l 等于圆心角 α（弧度）乘以半径 r。' },
        { type: 'keypoint', label: '重点·角度与弧度换算', text: '<strong>180° = π rad</strong>，由此可得：1° = π/180 rad，1 rad = (180/π)° ≈ 57.3°。常用特殊角换算见下表。' },
        { type: 'table', headers: ['角度', '30°', '45°', '60°', '90°', '180°', '360°'], rows: [['弧度', 'π/6', 'π/4', 'π/3', 'π/2', 'π', '2π']] },
        { type: 'keypoint', label: '重点·弧长与扇形面积', text: '设圆心角 α（弧度）、半径 r，则 <strong>弧长 l = α · r</strong>；<strong>扇形面积 S = 1/2 · α · r² = 1/2 · l · r</strong>。注意 α 必须采用弧度，公式才如此简洁。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">扇形面积 S = 1/2 · α · r²</text><path d="M 200 170 A 130 130 0 0 1 292 78 L 200 170 Z" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><line x1="200" y1="170" x2="292" y2="78" stroke="#2b5b9e" stroke-width="2"/><circle cx="200" cy="170" r="4" fill="#2b5b9e"/><path d="M 200 170 A 130 130 0 0 1 292 78" fill="none" stroke="#e05d44" stroke-width="3.5"/><text x="250" y="120" font-size="14" fill="#e05d44">S</text><text x="246" y="188" font-size="14" fill="#2b5b9e">r</text><text x="150" y="205" font-size="14" fill="#33536e">也可写为 S = 1/2 · l · r</text></svg>', caption: '图3　扇形面积：S 等于二分之一圆心角乘半径平方，也等于半弧长乘半径。' },
        { type: 'heading', text: '四、例题精讲' },
        { type: 'example', label: '例题1', text: '把下列角度化为弧度：30°、45°、60°、120°、135°、150°、210°、225°、300°、330°。<br><br><strong>解</strong>：利用 1° = π/180 rad，分别乘以 π/180：<br>30° = π/6，45° = π/4，60° = π/3，120° = 2π/3，135° = 3π/4，150° = 5π/6，210° = 7π/6，225° = 5π/4，300° = 5π/3，330° = 11π/6。<br><strong>技巧</strong>：记住 30°→π/6、45°→π/4、60°→π/3 三个基准，其余用加减 π/2、π 推出。' },
        { type: 'example', label: '例题2', text: '已知半径 r = 2，圆心角 α = π/3（弧度），求弧长 l 与扇形面积 S。<br><br><strong>解</strong>：由 l = α · r 得 l = (π/3) · 2 = 2π/3。<br>由 S = 1/2 · α · r² 得 S = 1/2 · (π/3) · 2² = 1/2 · (π/3) · 4 = 2π/3。<br>也可由 S = 1/2 · l · r = 1/2 · (2π/3) · 2 = 2π/3 验证一致。' },
        { type: 'warn', label: '易错·换算单位', text: '使用弧长与扇形面积公式时，<strong>圆心角 α 必须用弧度</strong>。若题目给的是角度，要先化为弧度再代入。切勿把 60° 直接写成 60 代入公式，否则结果会错一个数量级。' },
        { type: 'tip', label: '记忆·特殊角', text: '建议背熟三组基准：<strong>30°=π/6、45°=π/4、60°=π/3</strong>，以及 90°=π/2、180°=π、270°=3π/2、360°=2π。考试中能直接写出，节省时间并减少计算失误。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['任意角：正角（逆时针）、负角（顺时针）、零角；终边相同角 {β | β = α + 2kπ, k∈Z}', '弧度制：弧长等于半径所对圆心角为 1 弧度；180° = π rad', '弧长 l = α · r；扇形面积 S = 1/2 α r² = 1/2 l r（α 用弧度）', '高考中三角约 15 至 18 分，向量约 5 分，均属必拿分模块', '轴线角不属于任何象限；特殊角弧度要熟记'] }
      ],
      exercises: [
        { type: 'choice', question: '任意角按旋转方向可分为？', options: ['正角、负角、零角', '锐角、钝角、直角', '第一象限角、第二象限角', '内角、外角、对顶角'], answer: '正角、负角、零角', explanation: '按旋转方向，逆时针旋转形成正角，顺时针旋转形成负角，未作旋转形成零角，三者统称任意角。锐角钝角直角是按大小分类，象限角按终边位置分类，均与旋转方向无关，故正确选项为正角、负角、零角。' },
        { type: 'choice', question: '角度与弧度的换算中，180° 等于？', options: ['π/2 rad', 'π rad', '2π rad', 'π/3 rad'], answer: 'π rad', explanation: '弧度制规定 180° 对应 π 弧度，即 180° = π rad，这是角度与弧度互化的基准。由此可知 90° = π/2、360° = 2π，故正确选项为 π rad。' },
        { type: 'choice', question: '已知圆心角 α = π/3（弧度），半径 r = 2，则弧长 l 等于？', options: ['2π/3', 'π/3', '2/3', 'π'], answer: '2π/3', explanation: '由弧长公式 l = α · r，代入 α = π/3、r = 2，得 l = (π/3) · 2 = 2π/3。注意圆心角必须采用弧度制公式才成立，角度需先换算，故正确选项为 2π/3。' },
        { type: 'fill', question: '与 30° 终边相同的角可表示为 β = ____ + 2kπ, k∈Z。', answer: 'π/6|π/6 + 2kπ|π/6 (k∈Z)', explanation: '30° 化为弧度是 π/6，终边相同的角彼此相差 2kπ（k 为整数），故集合为 {β | β = π/6 + 2kπ, k∈Z}。填空写 π/6 即可表示基准角，再加上 2kπ 才是完整集合。' },
        { type: 'fill', question: '半径为 3，圆心角为 π/2 弧度的扇形面积 S = ____。', answer: '9π/4|9π/4 (约7.07)', explanation: '由扇形面积公式 S = 1/2 · α · r²，代入 α = π/2、r = 3，得 S = 1/2 · (π/2) · 3² = 1/2 · (π/2) · 9 = 9π/4。也可先求 l = αr = 3π/2，再用 S = 1/2 · l · r 验证得 9π/4。' }
      ]
    },

    /* ---------------- 第2课时 三角函数的定义 + 同角三角函数的基本关系 ---------------- */
    {
      id: 'zt2-u1-l2',
      name: '三角函数的定义 · 同角基本关系',
      chapter: '三角与向量复习 · 二(二) 定义 / 二(三) 同角基本关系',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、三角函数的定义（单位圆）' },
        { type: 'paragraph', text: '三角函数是描述角与其终边位置关系的函数。借助单位圆，可以统一、直观地给出正弦、余弦、正切的定义，并自然推广到任意角。' },
        { type: 'keypoint', label: '重点·单位圆定义', text: '设角 α 的终边与<strong>单位圆</strong>（半径为 1 的圆）交于点 P(x, y)，则 <strong>sinα = y</strong>，<strong>cosα = x</strong>，<strong>tanα = y/x</strong>（x ≠ 0）。单位圆使 r = 1，公式最为简洁。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><line x1="40" y1="200" x2="640" y2="200" stroke="#33536e" stroke-width="2"/><line x1="340" y1="40" x2="340" y2="260" stroke="#33536e" stroke-width="2"/><circle cx="340" cy="200" r="130" fill="none" stroke="#4a7de0" stroke-width="2.5"/><circle cx="410" cy="150" r="5" fill="#e05d44"/><line x1="340" y1="200" x2="410" y2="150" stroke="#2b5b9e" stroke-width="2"/><line x1="410" y1="150" x2="410" y2="200" stroke="#5a7a2a" stroke-width="2" stroke-dasharray="4 3"/><line x1="340" y1="200" x2="410" y2="200" stroke="#7a5aa0" stroke-width="2" stroke-dasharray="4 3"/><text x="378" y="125" font-size="13" fill="#2b5b9e">r=1</text><text x="416" y="178" font-size="13" fill="#5a7a2a">y = sinα</text><text x="360" y="220" font-size="13" fill="#7a5aa0">x = cosα</text><text x="402" y="142" font-size="14" fill="#e05d44">P(x, y)</text><text x="300" y="225" font-size="13" fill="#33536e">tanα = y/x</text><text x="340" y="262" font-size="14" fill="#33536e" text-anchor="middle">单位圆上：sinα = y，cosα = x，tanα = y/x (x ≠ 0)</text></svg>', caption: '图1　单位圆定义：角 α 终边与单位圆交于 P(x, y)，纵纵坐标给出正余弦。' },
        { type: 'keypoint', label: '重点·推广定义', text: '若角 α 终边上任意一点为 P(x, y)，记 r = √(x² + y²)（r > 0），则 <strong>sinα = y/r</strong>，<strong>cosα = x/r</strong>，<strong>tanα = y/x</strong>（x ≠ 0）。单位圆定义是 r = 1 的特例。' },
        { type: 'paragraph', text: '由定义可知，正弦、余弦、正切都是角 α 的函数，其函数值只与终边的位置有关，与点 P 在终边上的选取无关（因为比值不变）。' },
        { type: 'list', items: ['求三函数值：先求 r = √(x² + y²)，再代入 sin=y/r、cos=x/r、tan=y/x', 'tanα 要求 x ≠ 0，即 α 的终边不能在 y 轴上', '函数值符号由各象限决定，可用口诀判断'] },
        { type: 'heading', text: '二、各象限符号' },
        { type: 'keypoint', label: '重点·符号口诀', text: '<strong>一全正、二正弦、三正切、四余弦</strong>。即第一象限 sinα、cosα、tanα 全为正；第二象限仅 sinα 为正；第三象限仅 tanα 为正；第四象限仅 cosα 为正。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><line x1="40" y1="140" x2="640" y2="140" stroke="#33536e" stroke-width="2"/><line x1="340" y1="20" x2="340" y2="260" stroke="#33536e" stroke-width="2"/><text x="480" y="90" font-size="17" fill="#2b5b9e" font-weight="bold">一</text><text x="200" y="90" font-size="17" fill="#2b5b9e" font-weight="bold">二</text><text x="200" y="210" font-size="17" fill="#2b5b9e" font-weight="bold">三</text><text x="480" y="210" font-size="17" fill="#2b5b9e" font-weight="bold">四</text><text x="470" y="100" font-size="14" fill="#5a7a2a">全正</text><text x="190" y="100" font-size="14" fill="#e05d44">sin 正</text><text x="195" y="200" font-size="14" fill="#7a5aa0">tan 正</text><text x="475" y="200" font-size="14" fill="#4a7de0">cos 正</text><text x="340" y="262" font-size="14" fill="#33536e" text-anchor="middle">口诀：一全正、二正弦、三正切、四余弦</text></svg>', caption: '图2　各象限三角函数符号：每象限只标出为正的那个函数。' },
        { type: 'paragraph', text: '判断某三角函数值符号时，先确定角所在象限，再按口诀取正负；也可由定义中分子分母的符号直接判断。' },
        { type: 'warn', label: '易错·tan 定义域', text: '<strong>tanα 在 α = π/2 + kπ（k∈Z）时无意义</strong>，因为此时终边在 y 轴上，x = 0。做题遇到 tanα 必须先确认 x ≠ 0，否则会误用公式或漏掉限制条件。' },
        { type: 'heading', text: '三、同角三角函数基本关系' },
        { type: 'keypoint', label: '重点·平方关系', text: '<strong>sin²α + cos²α = 1</strong>。由单位圆上 r = √(x² + y²) = 1 即 x² + y² = 1 直接得到，对任意 α 恒成立。' },
        { type: 'keypoint', label: '重点·商数关系', text: '<strong>tanα = sinα / cosα</strong>（cosα ≠ 0）。由 tanα = y/x = (y/r) / (x/r) = sinα / cosα 得到。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">sin²α + cos²α = 1</text><circle cx="300" cy="130" r="70" fill="none" stroke="#4a7de0" stroke-width="2.5"/><line x1="300" y1="130" x2="355" y2="92" stroke="#2b5b9e" stroke-width="2"/><circle cx="355" cy="92" r="4" fill="#e05d44"/><line x1="355" y1="92" x2="355" y2="130" stroke="#5a7a2a" stroke-width="2" stroke-dasharray="4 3"/><line x1="300" y1="130" x2="355" y2="130" stroke="#7a5aa0" stroke-width="2" stroke-dasharray="4 3"/><text x="360" y="112" font-size="13" fill="#e05d44">P(x,y)</text><text x="320" y="118" font-size="13" fill="#5a7a2a">y</text><text x="322" y="148" font-size="13" fill="#7a5aa0">x</text><text x="200" y="200" font-size="14" fill="#33536e">由 r = √(x² + y²) = 1 得 x² + y² = 1</text><text x="470" y="130" font-size="15" fill="#2b5b9e">即 cos²α + sin²α = 1</text></svg>', caption: '图3　平方关系的几何证明：单位圆上点 P 到原点距离恒为 1。' },
        { type: 'example', label: '例题1', text: '已知角 α 的终边过点 P(3, 4)，求 sinα、cosα、tanα。<br><br><strong>解</strong>：由 P(3, 4) 得 x = 3、y = 4，r = √(3² + 4²) = 5。<br>故 sinα = y/r = 4/5，cosα = x/r = 3/5，tanα = y/x = 4/3。' },
        { type: 'example', label: '例题2', text: '已知 sinα = 3/5 且 α 在第二象限，求 cosα、tanα。<br><br><strong>解</strong>：由 sin²α + cos²α = 1 得 cos²α = 1 − (3/5)² = 1 − 9/25 = 16/25，故 |cosα| = 4/5。<br>因 α 在第二象限，cosα < 0，所以 cosα = −4/5。<br>于是 tanα = sinα / cosα = (3/5) / (−4/5) = −3/4。' },
        { type: 'table', headers: ['关系式', '公式', '常用变形'], rows: [['平方关系', 'sin²α + cos²α = 1', 'sin²α = 1 − cos²α；cos²α = 1 − sin²α'], ['商数关系', 'tanα = sinα / cosα', 'sinα = tanα · cosα（cosα ≠ 0）'], ['隐含范围', 'sinα ∈ [−1, 1]，cosα ∈ [−1, 1]', '|sinα| ≤ 1，|cosα| ≤ 1']] },
        { type: 'warn', label: '易错·开方符号', text: '由 sin²α + cos²α = 1 求 sinα 或 cosα 时，<strong>开平方必须带上正负号</strong>，正负由角 α 所在象限决定，不能默认取正。这是同角关系题最常见的失分点。' },
        { type: 'tip', label: '提示·切化弦', text: '遇到含 tanα 的式子，常把 tanα 写成 sinα / cosα（<strong>切化弦</strong>），再统一用正弦、余弦运算，往往能化简复杂分式。' },
        { type: 'heading', text: '四、齐次式求值' },
        { type: 'example', label: '例题3', text: '已知 tanα = 2，求 (sinα + cosα) / (sinα − cosα) 的值。<br><br><strong>解</strong>：分子分母同除以 cosα（cosα ≠ 0），得<br>(sinα + cosα) / (sinα − cosα) = (tanα + 1) / (tanα − 1) = (2 + 1) / (2 − 1) = 3。' },
        { type: 'tip', label: '技巧·齐次式', text: '分子分母均为 sinα、cosα 的<strong>一次齐次式</strong>时，可同除以 cosα 转化为 tanα 的代数式，从而只用 tanα 即可求值，无需分别求出 sinα、cosα。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['单位圆定义：sinα = y，cosα = x，tanα = y/x（x ≠ 0）', '推广定义：sinα = y/r，cosα = x/r，tanα = y/x，r = √(x² + y²)', '符号口诀：一全正、二正弦、三正切、四余弦', '同角关系：sin²α + cos²α = 1，tanα = sinα / cosα', '开方带正负号；齐次式可同除以 cosα 化为 tanα'] }
      ],
      exercises: [
        { type: 'choice', question: '角 α 的终边上一点 P(3, 4)，则 sinα 等于？', options: ['3/5', '4/5', '4/3', '3/4'], answer: '4/5', explanation: '由 P(3, 4) 得 x = 3、y = 4，r = √(3² + 4²) = 5。按定义 sinα = y/r = 4/5。cosα = 3/5、tanα = 4/3 分别是其余两个比值，故正确选项为 4/5。' },
        { type: 'choice', question: '下列各式中，对任意角 α 恒成立的是？', options: ['sin²α + cos²α = 1', 'sinα + cosα = 1', 'sin²α − cos²α = 1', 'tanα = sinα · cosα'], answer: 'sin²α + cos²α = 1', explanation: '同角三角函数的基本平方关系 sin²α + cos²α = 1 对任意 α 都成立，源于单位圆 x² + y² = 1。sinα + cosα = 1 仅特殊角成立，sin² − cos² = 1 不成立，tanα = sinα/cosα 而非乘积，故正确选项是第一项。' },
        { type: 'choice', question: '已知 tanα > 0 且 cosα < 0，则 α 在第几象限？', options: ['第一象限', '第二象限', '第三象限', '第四象限'], answer: '第三象限', explanation: 'tanα > 0 说明正弦余弦同号，对应第一或第三象限；cosα < 0 说明余弦为负，对应第二或第三象限。两者同时成立的交集是第三象限，故 α 在第三象限，正确选项为第三象限。' },
        { type: 'fill', question: '已知 sinα = 3/5 且 α 在第二象限，则 cosα = ____。', answer: '-4/5|-0.8', explanation: '由 sin²α + cos²α = 1 得 cos²α = 1 − (3/5)² = 16/25，故 |cosα| = 4/5。因 α 在第二象限，余弦为负，所以 cosα = −4/5。开方必须带符号，不能漏掉负号。' },
        { type: 'fill', question: '已知 tanα = 2，则 (sinα + cosα) / (sinα − cosα) = ____。', answer: '3', explanation: '分子分母同为 sinα、cosα 的一次齐次式，同除以 cosα（cosα ≠ 0）得 (tanα + 1)/(tanα − 1)。代入 tanα = 2，得 (2 + 1)/(2 − 1) = 3。无需分别求 sinα、cosα 即可得出结果。' }
      ]
    }

  );
})();
