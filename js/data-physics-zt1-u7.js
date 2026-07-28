/* ============================================================
 * 高三物理 · 力学综合 · 专题二 相互作用与受力分析
 * 课时7：力的合成与分解（平行四边形定则、合力范围、正交分解）
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u7',
    name: '力的合成与分解',
    chapter: '力学综合 · 专题二 相互作用与受力分析',
    difficulty: '中档',
    content: [
      { type: 'heading', text: '一、为什么要有"合成"与"分解"' },
      { type: 'paragraph', text: '一个物体常常同时受到好几个力，比如拖箱子时既有拉力、又有重力、还有摩擦力。如果每次都分别对付几个力，会很乱。聪明的方法是：把几个力"合并"成一个等效力（合成），或者把一个力"拆开"成几个方向更好算的力（分解）。只要效果不变，算法就简单多了。' },
      { type: 'keypoint', label: '重点·等效替代', text: '<strong>合力与分力是等效替代关系。</strong>几个力共同作用的效果，可以用一个力来替代，这个力叫那几个力的合力；反过来，一个力也可以由几个力来替代，那几个力叫它的分力。替代前后对物体运动的"效果"完全相同，所以叫等效替代，不是物体真的多了一个或少了一个力。' },
      { type: 'heading', text: '二、平行四边形定则' },
      { type: 'paragraph', text: '力是既有大小又有方向的矢量，不能像数字那样直接相加。两个力合成时，以这两个力为邻边画一个平行四边形，从公共起点出发的那条对角线，就代表它们的合力。这叫平行四边形定则，是处理所有矢量相加的基本法则。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">两个力合成遵循平行四边形定则，合力是对角线</text><line x1="180" y1="220" x2="380" y2="220" stroke="#234b45" stroke-width="3"/><polygon points="373,213 373,227 387,220" fill="#234b45"/><text x="270" y="240" font-size="13" fill="#234b45" text-anchor="middle">F₁</text><line x1="180" y1="220" x2="300" y2="100" stroke="#234b45" stroke-width="3"/><polygon points="293,108 307,108 300,94" fill="#234b45"/><text x="220" y="150" font-size="13" fill="#234b45">F₂</text><line x1="380" y1="220" x2="500" y2="100" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><line x1="300" y1="100" x2="500" y2="100" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><line x1="180" y1="220" x2="500" y2="100" stroke="#4fb3a5" stroke-width="4"/><polygon points="492,108 508,108 500,92" fill="#4fb3a5"/><text x="370" y="150" font-size="14" fill="#4fb3a5" font-weight="bold">F合</text><text x="340" y="280" font-size="13" fill="#234b45" text-anchor="middle">对角线 F合 同时替代 F₁ 和 F₂ 的作用效果</text></svg>', caption: '图1　以 F₁、F₂ 为邻边作平行四边形，从公共起点出发的对角线就是合力 F合，这就是平行四边形定则。' },
      { type: 'keypoint', label: '重点·合力与分力关系', text: '<strong>合力 F合 的大小不仅与两个分力的大小有关，还跟它们的夹角有关。</strong>两个分力大小不变时，夹角越小合力越大，夹角越大合力越小。当两个力方向相同时合力最大，方向相反时合力最小。' },
      { type: 'example', label: '例题·互相垂直二力的合成', text: '两个力大小分别为 F₁ = 3 N、F₂ = 4 N，且互相垂直，求合力大小。<br><br><strong>解析</strong>：<br>两力垂直时，合力是以它们为直角边的直角三角形的斜边，F合 = √(F₁² + F₂²) = √(3² + 4²) = √(9 + 16) = √25 = 5 N。所以合力大小为 5 N。方向在两力夹角的角平分附近，偏向较大的力。' },
      { type: 'list', items: ['找出两个分力的大小和它们之间的夹角', '按比例画出两个分力矢量作为邻边', '补成平行四边形，从公共起点画对角线得到合力', '用刻度尺量对角线长短、量角器量方向，或用直角三角形公式算'] },
      { type: 'heading', text: '三、合力的大小范围' },
      { type: 'paragraph', text: '两个力 F₁、F₂ 的合力并不是固定一个数，它会随着夹角在一段范围内变化。最容易记住的两个极端是：两力同向时合力最大，等于两力相加；两力反向时合力最小，等于两力相减的绝对值。' },
      { type: 'keypoint', label: '重点·合力范围公式', text: '<strong>两个力 F₁、F₂ 的合力大小范围是：|F₁ − F₂| ≤ F合 ≤ F₁ + F₂。</strong>合力最小值为两力之差的绝对值（方向相反时），最大值为两力之和（方向相同时）。中间夹角对应的合力就落在这个区间内。' },
      { type: 'example', label: '例题·求合力范围', text: '两个力大小分别为 5 N 和 8 N，求它们合力可能的取值范围。<br><br><strong>解析</strong>：<br>根据合力范围 |F₁ − F₂| ≤ F合 ≤ F₁ + F₂，代入得 |5 − 8| ≤ F合 ≤ 5 + 8，即 3 N ≤ F合 ≤ 13 N。所以当两力反向时合力最小为 3 N，同向时最大为 13 N，其它夹角下合力在 3 N 到 13 N 之间。' },
      { type: 'warn', label: '易错', text: '<strong>合力不一定比每一个分力都大。</strong>很多同学以为"合成就变大"，其实当两力夹角很大甚至接近反向时，合力可能比其中某个分力还小，最小甚至可以趋近于零（两力等大反向时合力为零）。合力的范围是 |F₁ − F₂| 到 F₁ + F₂，别误以为一定在中间值以上。' },
      { type: 'heading', text: '四、正交分解法' },
      { type: 'paragraph', text: '平行四边形定则画图直观，但多个力在一起时画图麻烦。更常用的办法是正交分解：先建立直角坐标系，把每个力都分解到 x 轴和 y 轴两个互相垂直的方向上，然后把同一方向上的分力代数相加，问题就变成两个直线方向的简单加减。' },
      { type: 'list', items: ['第一步 建系：选方便的直角坐标系，常让较多力落在坐标轴上', '第二步 分解：把每个力沿 x、y 方向拆成两个分力 Fx、Fy', '第三步 列方向方程：x 方向 ΣFx = 0（或 = m × a），y 方向 ΣFy = 0（或 = m × a）', '第四步 求解：联立两个方程解出未知力或加速度'] },
      { type: 'keypoint', label: '重点·正交分解列方程', text: '<strong>正交分解后，把所有 x 方向分力相加、所有 y 方向分力相加，分别令其等于零或质量乘加速度：ΣFx = 0（平衡）或 = m × a，ΣFy = 0（平衡）或 = m × a。</strong>这样就把矢量问题化成了两个标量方程。' },
      { type: 'example', label: '例题·正交分解求拉力', text: '用与水平成 37° 的拉力 F 拖着质量为 m 的箱子匀速前进，已知拉力水平分力等于滑动摩擦力。若 f = μ × F_N，求拉力 F 与重力的关系（设 sin37°=0.6，cos37°=0.8）。<br><br><strong>解析</strong>：<br>分解拉力：Fx = F × cos37° = 0.8F，Fy = F × sin37° = 0.6F。竖直方向平衡：F_N + Fy = G，即 F_N = G − 0.6F。水平方向平衡：0.8F = f = μ × (G − 0.6F)。由此可解出 F 与 G、μ 的关系。可见正交分解把斜拉力拆成水平和竖直两块，方程一目了然。' },
      { type: 'tip', label: '提示', text: '<strong>建系有讲究：</strong>尽量让未知力或多数力落在坐标轴上，这样分解出来的分量最少、计算最省。处理斜面问题时，常把 x 轴沿斜面、y 轴垂直斜面，重力就只需要分解成沿斜面和垂直斜面的两个分量，非常方便。' },
      { type: 'table', headers: ['方法', '适用情形', '优点', '缺点'], rows: [['平行四边形定则', '两个力的合成', '直观，直接看出合力大小方向', '力多时画图繁琐'], ['正交分解法', '三个及以上力或需列方程', '变成两个方向标量加减，好算', '需要选坐标系、做分解']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">正交分解：把一个力沿 x、y 轴拆成两个互相垂直的分力</text><line x1="120" y1="230" x2="560" y2="230" stroke="#2e9e8f" stroke-width="2"/><text x="545" y="250" font-size="12" fill="#2e9e8f">x 轴</text><line x1="160" y1="270" x2="160" y2="70" stroke="#2e9e8f" stroke-width="2"/><text x="148" y="80" font-size="12" fill="#2e9e8f">y 轴</text><line x1="160" y1="230" x2="440" y2="100" stroke="#4fb3a5" stroke-width="4"/><polygon points="432,108 448,108 440,92" fill="#4fb3a5"/><text x="290" y="150" font-size="14" fill="#4fb3a5" font-weight="bold">F</text><line x1="160" y1="230" x2="440" y2="230" stroke="#234b45" stroke-width="3" stroke-dasharray="5,4"/><text x="300" y="250" font-size="13" fill="#234b45">Fx = F×cosθ</text><line x1="440" y1="230" x2="440" y2="100" stroke="#234b45" stroke-width="3" stroke-dasharray="5,4"/><text x="455" y="170" font-size="13" fill="#234b45">Fy = F×sinθ</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">Fx、Fy 互相垂直，合力效果与原力 F 相同</text></svg>', caption: '图2　正交分解：把力 F 沿互相垂直的 x、y 轴拆成 Fx 和 Fy 两个分力，分别参与两个方向的运算。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">合力范围：|F₁ − F₂| ≤ F合 ≤ F₁ + F₂</text><line x1="120" y1="160" x2="560" y2="160" stroke="#234b45" stroke-width="3"/><text x="110" y="165" font-size="13" fill="#234b45">0</text><line x1="220" y1="148" x2="220" y2="172" stroke="#234b45" stroke-width="2"/><text x="220" y="195" font-size="13" fill="#2e9e8f" text-anchor="middle">|F₁−F₂|</text><line x1="540" y1="148" x2="540" y2="172" stroke="#234b45" stroke-width="2"/><text x="540" y="195" font-size="13" fill="#2e9e8f" text-anchor="middle">F₁+F₂</text><line x1="220" y1="130" x2="540" y2="130" stroke="#4fb3a5" stroke-width="3"/><polygon points="533,123 533,137 547,130" fill="#4fb3a5"/><polygon points="227,123 227,137 213,130" fill="#4fb3a5"/><text x="380" y="118" font-size="13" fill="#4fb3a5" font-weight="bold" text-anchor="middle">F合 可能取值</text><text x="340" y="245" font-size="13" fill="#234b45" text-anchor="middle">同向时取最大 F₁+F₂，反向时取最小 |F₁−F₂|</text></svg>', caption: '图3　合力 F合 的取值范围被夹在 |F₁ − F₂| 与 F₁ + F₂ 之间，随两力夹角连续变化。' }
    ],
    exercises: [
      { type: 'choice', question: '两个力合成时，应遵循的定则是？', options: ['平行四边形定则', '直线相加定则', '圆形定则', '梯形定则'], answer: '平行四边形定则', explanation: '力是矢量，合成不能用数字直接相加。两个力合成要用法则是：以这两个力为邻边作平行四边形，从公共起点画出的对角线就是合力，称为平行四边形定则。它是所有矢量相加（含速度、加速度、位移等）的基础法则。' },
      { type: 'choice', question: '大小分别为 3 N 和 4 N 的两个力，其合力大小的可能范围是？', options: ['1 N 到 7 N', '3 N 到 4 N', '0 N 到 7 N', '0 N 到 1 N'], answer: '1 N 到 7 N', explanation: '两个力的合力范围是 |F₁ − F₂| ≤ F合 ≤ F₁ + F₂。代入 F₁=3 N、F₂=4 N 得 |3−4| ≤ F合 ≤ 3+4，即 1 N ≤ F合 ≤ 7 N。当两力反向时合力最小为 1 N，同向时最大为 7 N，所以合力不可能是 0，也不局限在 3 N 到 4 N 之间。' },
      { type: 'choice', question: '用正交分解法处理平衡问题时，通常建立直角坐标系后列的方程是？', options: ['ΣFx = 0 且 ΣFy = 0', 'ΣFx = ΣFy', 'Fx + Fy = 0', '只列 ΣFx = 0'], answer: 'ΣFx = 0 且 ΣFy = 0', explanation: '正交分解把每个力分解到互相垂直的 x、y 轴上，平衡时物体在两个方向上的合力都为零，因此要同时列 ΣFx = 0 和 ΣFy = 0 两个方程。若物体有加速度，则相应方向改为 ΣFx = m × a 或 ΣFy = m × a。只列一个方向会漏掉约束条件，无法唯一求解。' },
      { type: 'fill', question: '两个力 F₁、F₂ 的合力大小范围是 |F₁ − F₂| ≤ F合 ≤ ___（填合力取最大值时的表达式）。', answer: 'F₁ + F₂', explanation: '合力大小随两力夹角变化，最大值出现在两力方向相同时，等于两力大小之和 F₁ + F₂；最小值出现在两力方向相反时，等于两力之差的绝对值 |F₁ − F₂|。所以合力范围写作 |F₁ − F₂| ≤ F合 ≤ F₁ + F₂。' },
      { type: 'fill', question: '用正交分解法处理平衡问题时，把力分解到 x 轴和 y 轴后，两个方向都需满足合力为零，即除了 ΣFx = 0，还要满足 ___ = 0。', answer: 'ΣFy', explanation: '正交分解法中，物体平衡要求沿任意方向合力都为零。把各力投影到互相垂直的 x、y 轴后，必须同时列出 ΣFx = 0 与 ΣFy = 0 两个方程，分别对应两个独立方向的平衡条件，二者缺一不可，联立才能解出未知力。' }
    ]
  });
})();
