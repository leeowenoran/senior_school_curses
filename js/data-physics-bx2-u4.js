/* ============================================================
 * 高一物理 · 必修 第二册 · 第五章 抛体运动
 * 课时4：抛体运动的规律
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u4',
    name: '抛体运动的规律',
    chapter: '必修第二册 · 第五章 抛体运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、平抛运动的位移规律' },
      { type: 'paragraph', text: '既然平抛运动可以分解成水平匀速和竖直自由落体两个分运动，我们就可以分别写出两个方向的位移。设水平初速度为 v₀，抛出点作为坐标原点，水平方向为 x 轴，竖直向下为 y 轴。' },
      { type: 'keypoint', label: '重点·水平位移', text: '<strong>水平方向做匀速直线运动，位移公式为 x = v₀ × t。</strong>因为水平方向不受力，速度保持 v₀ 不变，所以经过时间 t 后，水平位移就等于初速度乘以时间。' },
      { type: 'paragraph', text: '竖直方向只受重力，初速度为零，做自由落体运动。经过时间 t 后，竖直下落的高度由自由落体公式给出：y = ½ × g × t²。这里 g 是重力加速度，通常取 10 米/秒²（或更精确的 9.8 米/秒²）。' },
      { type: 'keypoint', label: '重点·合位移', text: '<strong>任意时刻 t 的位置由 x 和 y 共同决定，合位移大小 s = √(x² + y²)，方向可用与水平方向夹角表示。</strong>消去时间 t 可得 y = (g / (2 v₀²)) × x²，这正是抛物线方程，说明轨迹是抛物线。' },
      { type: 'list', items: ['水平位移 x = v₀ × t', '竖直位移 y = ½ × g × t²', '轨迹方程 y = (g / (2 v₀²)) × x²，是抛物线', '合位移大小 s = √(x² + y²)'] },
      { type: 'heading', text: '二、平抛运动的速度规律' },
      { type: 'paragraph', text: '速度也可以按两个方向分开看。水平方向速度始终不变，竖直方向速度随时间增大，合速度就是这两个分速度的矢量和。' },
      { type: 'keypoint', label: '重点·分速度与合速度', text: '<strong>水平分速度 vₓ = v₀ 保持不变；竖直分速度 v_y = g × t 随时间增大；合速度大小 v = √(v₀² + (g × t)²)。</strong>合速度方向与水平方向夹角 θ 满足 tanθ = v_y / v₀ = (g × t) / v₀。' },
      { type: 'example', label: '例题·求某时刻的速度', text: '以初速度 v₀ = 10 米/秒水平抛出一个小球，取 g = 10 米/秒²，求抛出后 2 秒末的速度大小和方向。<br><br><strong>解析</strong>：<br>水平分速度 vₓ = v₀ = 10 米/秒；竖直分速度 v_y = g × t = 10 × 2 = 20 米/秒。合速度大小 v = √(10² + 20²) = √500 ≈ 22.4 米/秒。设速度与水平方向夹角为 θ，tanθ = v_y / vₓ = 20 / 10 = 2，故 θ ≈ 63.4°。' },
      { type: 'warn', label: '易错', text: '很多同学把"位移的方向"和"速度的方向"搞混。<strong>平抛运动中，某时刻的速度方向沿轨迹切线，与水平夹角满足 tanθ = 2y / x；而位移方向与水平夹角满足 tanφ = y / x。二者一般不相等（θ > φ），不能混用公式。</strong>' },
      { type: 'tip', label: '提示', text: '<strong>平抛运动的时间只由竖直高度决定：t = √(2h / g)。</strong>无论水平初速度多大，只要从同一高度抛出，落到同一水平面的时间都相同。想延长飞行时间，只能提高抛出点的高度。' },
      { type: 'heading', text: '三、飞行时间与水平射程' },
      { type: 'paragraph', text: '物体从高度 h 处水平抛出，落到地面所需时间由竖直方向决定。由 y = ½ × g × t² = h，解得飞行时间 t = √(2h / g)。在这段时间内，水平方向一直以 v₀ 前进，所以水平射程 X = v₀ × t = v₀ × √(2h / g)。' },
      { type: 'keypoint', label: '重点·射程与飞行时间', text: '<strong>飞行时间 t = √(2h / g)，只与抛出高度 h 有关；水平射程 X = v₀ × √(2h / g)，与初速度 v₀ 和高度 h 都有关。</strong>初速度越大、抛出越高，射程越远。' },
      { type: 'table', headers: ['物理量', '水平方向', '竖直方向', '合运动'], rows: [['速度', 'vₓ = v₀（不变）', 'v_y = g × t', 'v = √(v₀² + v_y²)'], ['位移', 'x = v₀ × t', 'y = ½ × g × t²', 's = √(x² + y²)'], ['加速度', '0', 'g（向下）', 'g（向下）'], ['运动性质', '匀速直线', '自由落体', '匀变速曲线']] },
      { type: 'list', items: ['飞行时间只由高度决定，与初速度无关', '水平射程随初速度和高度增大而增大', '速度方向沿轨迹切线，与位移方向不同', '斜抛可类似分解为水平匀速与竖直上抛'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">平抛分解为水平匀速与竖直自由落体</text><line x1="80" y1="240" x2="620" y2="240" stroke="#234b45" stroke-width="2"/><line x1="80" y1="240" x2="80" y2="70" stroke="#234b45" stroke-width="2"/><text x="64" y="80" font-size="12" fill="#234b45">y</text><text x="610" y="262" font-size="12" fill="#234b45">x</text><circle cx="80" cy="240" r="7" fill="#4fb3a5"/><line x1="80" y1="240" x2="360" y2="240" stroke="#2e9e8f" stroke-width="3"/><text x="210" y="232" font-size="12" fill="#234b45">x=v₀t</text><line x1="80" y1="240" x2="80" y2="120" stroke="#4fb3a5" stroke-width="3"/><text x="92" y="180" font-size="12" fill="#234b45">y=½gt²</text><circle cx="360" cy="120" r="7" fill="#234b45"/><text x="380" y="120" font-size="12" fill="#234b45">位置</text></svg>', caption: '图1　平抛运动在水平方向（绿）做匀速、竖直方向（青）做自由落体，合位置如图。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">速度合成：v 由 v₀ 与 g t 合成</text><line x1="140" y1="220" x2="420" y2="220" stroke="#2e9e8f" stroke-width="3"/><text x="280" y="212" font-size="13" fill="#234b45">水平分速度 v₀</text><line x1="140" y1="220" x2="140" y2="80" stroke="#4fb3a5" stroke-width="3"/><text x="150" y="150" font-size="13" fill="#234b45">竖直分速度 g t</text><line x1="140" y1="220" x2="420" y2="80" stroke="#234b45" stroke-width="3" stroke-dasharray="6,4"/><text x="430" y="150" font-size="13" fill="#234b45">合速度 v</text><text x="300" y="270" font-size="13" fill="#234b45" text-anchor="middle">合速度大小 v = √(v₀² + (g t)²)</text></svg>', caption: '图2　某时刻速度由水平分速度 v₀ 与竖直分速度 g·t 按平行四边形定则合成。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">斜抛运动：轨迹是对称的抛物线</text><path d="M 100 240 Q 340 40 580 240" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="100" cy="240" r="6" fill="#234b45"/><circle cx="340" cy="92" r="6" fill="#4fb3a5"/><text x="340" y="82" font-size="12" fill="#234b45" text-anchor="middle">最高点</text><circle cx="580" cy="240" r="6" fill="#234b45"/><line x1="100" y1="240" x2="170" y2="196" stroke="#234b45" stroke-width="2"/><text x="120" y="220" font-size="12" fill="#234b45">v₀</text><text x="340" y="284" font-size="13" fill="#234b45" text-anchor="middle">斜向上抛出，上升与下降对称，轨迹为抛物线</text></svg>', caption: '图3　斜抛运动轨迹为对称抛物线，可分解为水平匀速与竖直上抛两个分运动。' },
      { type: 'paragraph', text: '小结：平抛运动的规律可完全由"水平匀速 + 竖直自由落体"推出：位移 x = v₀ × t、y = ½ × g × t²，速度 vₓ = v₀、v_y = g × t。飞行时间只由高度决定，射程由初速度和高度共同决定。更一般的斜抛运动，也可沿水平和竖直方向同样分解来研究，只是竖直方向初速度不为零。' }
    ],
    exercises: [
      { type: 'choice', question: '从同一高度水平抛出两个小球，初速度分别为 v 和 2v，不计空气阻力，它们落到地面的时间关系是？', options: ['初速度大的时间长', '初速度小的时间长', '两球时间相同', '无法判断'], answer: '两球时间相同', explanation: '平抛运动的飞行时间由竖直方向决定，公式为 t = √(2h / g)，只与抛出高度 h 和重力加速度 g 有关，与水平初速度大小无关。因此从同一高度抛出，无论初速度是 v 还是 2v，落地时间都相同。' },
      { type: 'choice', question: '平抛运动中，关于速度方向和位移方向，下列说法正确的是？', options: ['二者方向始终相同', '速度方向沿轨迹切线，与位移方向一般不同', '位移方向沿轨迹切线', '二者夹角始终为零'], answer: '速度方向沿轨迹切线，与位移方向一般不同', explanation: '平抛运动中，某时刻的速度方向沿轨迹切线，与水平方向夹角满足 tanθ = 2y/x；而位移方向是从抛出点到该点的连线方向，与水平方向夹角满足 tanφ = y/x。由于 2y/x 不等于 y/x（y 不为零时），所以 θ 大于 φ，二者一般不同，不能混用。' },
      { type: 'choice', question: '一物体从高度 h 处水平抛出，初速度为 v₀，则水平射程 X 为？', options: ['v₀ × √(2h / g)', 'v₀ × √(h / g)', '√(2h / g)', 'v₀ × h / g'], answer: 'v₀ × √(2h / g)', explanation: '飞行时间由竖直方向自由落体决定：h = ½ × g × t²，解得 t = √(2h / g)。水平方向做匀速直线运动，射程 X = v₀ × t = v₀ × √(2h / g)。可见射程由初速度和抛出高度共同决定。' },
      { type: 'fill', question: '平抛运动中，竖直方向做自由落体运动，下落高度 y 与时间 t 的关系为 y = ½ × ___ × t²。', answer: 'g', explanation: '平抛运动竖直方向只受重力，初速度为零，做自由落体运动，其位移公式与自由落体相同：y = ½ × g × t²，其中 g 是重力加速度。水平方向不受力，位移才是 x = v₀ × t。两个分运动规律不同，需分别记忆。' },
      { type: 'fill', question: '平抛运动水平分速度保持不变，即 vₓ = ___；竖直分速度 v_y = g × t。', answer: 'v₀', explanation: '水平方向不受力，根据牛顿第一定律，水平方向速度不发生变化，始终等于初速度 v₀，即 vₓ = v₀；竖直方向受重力，做自由落体，竖直分速度随时间增大，v_y = g × t。合速度就是这两个互相垂直分速度的矢量和。' }
    ]
  });
})();
