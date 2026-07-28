/* ============================================================
 * 高三复习 · 力学综合 · 专题四 曲线运动与万有引力
 * 课时17：平抛运动
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u17',
    name: '平抛运动',
    chapter: '力学综合 · 专题四 曲线运动与万有引力',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、平抛运动的特点与分解' },
      { type: 'paragraph', text: '把物体水平抛出，比如从桌上推落一个小球、飞机水平投弹，物体只受重力（忽略空气阻力），初速度却是水平的。这种"水平抛出、只受重力"的运动叫平抛运动。它是曲线运动里最容易算的一种，因为可以干净利落地拆成两个互相垂直的直线运动。' },
      { type: 'keypoint', label: '重点·平抛的分解', text: '平抛运动 = <strong>水平方向：匀速直线运动</strong> + <strong>竖直方向：自由落体运动</strong>。两个方向互不影响、同时发生（等时性），合起来就是一条抛物线。' },
      { type: 'list', items: ['水平方向：不受力，保持初速度 v₀ 匀速，x = v₀ × t', '竖直方向：只受重力，初速为 0 的自由落体，y = ½ × g × t²', '两方向运动同时进行，总时间由竖直高度决定', '合运动是曲线，轨迹是一条开口向下的抛物线'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">平抛运动可分解为水平匀速与竖直自由落体</text><path d="M 80 70 Q 300 160 580 300" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="80" cy="70" r="7" fill="#234b45"/><text x="90" y="64" font-size="12" fill="#234b45">抛出点</text><line x1="80" y1="70" x2="240" y2="70" stroke="#4fb3a5" stroke-width="3"/><polygon points="240,70 226,63 226,77" fill="#4fb3a5"/><text x="140" y="58" font-size="12" fill="#234b45">水平 v₀</text><line x1="80" y1="70" x2="80" y2="200" stroke="#234b45" stroke-width="3"/><polygon points="80,200 73,186 87,186" fill="#234b45"/><text x="50" y="140" font-size="12" fill="#234b45">竖直下落</text><text x="340" y="310" font-size="13" fill="#234b45" text-anchor="middle">水平匀速 + 竖直自由落体，合成抛物线轨迹</text></svg>', caption: '图1　平抛物体同时做水平匀速（右）和竖直自由落体（下），两运动合成得到抛物线轨迹。' },
      { type: 'heading', text: '二、平抛运动的基本公式' },
      { type: 'paragraph', text: '把两个分方向的规律写出来，就是平抛运动最常用的公式。水平方向匀速：速度 v_x = v₀，位移 x = v₀ × t。竖直方向自由落体：速度 v_y = g × t，位移 y = ½ × g × t²。' },
      { type: 'keypoint', label: '重点·水平方向公式', text: '<strong>v_x = v₀ ，x = v₀ × t</strong>。水平方向不受力，速度始终等于初速度 v₀ 不变，位移随时间均匀增大。' },
      { type: 'paragraph', text: '竖直方向只受重力，初速度为 0，完全等同于自由落体：t 秒末的竖直速度 v_y = g × t，竖直下落高度 y = ½ × g × t²。任意时刻物体的合速度大小 v = √(v_x² + v_y²)，方向可用速度偏转角描述。' },
      { type: 'keypoint', label: '重点·竖直方向公式', text: '<strong>v_y = g × t ，y = ½ × g × t²</strong>。竖直方向是自由落体，速度随时间线性增大，位移随时间平方增大。' },
      { type: 'list', items: ['合速度：v = √(v_x² + v_y²) = √(v₀² + g² t²)', '合速度方向（速度偏转角 θ）：tanθ = v_y / v_x = g t / v₀', '位移：水平 x = v₀ t，竖直 y = ½ g t²', '位移偏转角 α：tanα = y / x = g t / (2 v₀)'] },
      { type: 'example', label: '例题·平抛基本计算', text: '从高度 h = 20 m 处水平抛出，初速度 v₀ = 10 m/s，取 g = 10 m/s²。<br>求：落地时间、水平射程、落地速度大小。<br><br><strong>解析</strong>：<br>落地时间由竖直方向决定：y = ½ g t² = 20，即 5 t² = 20，t = 2 s。水平射程 x = v₀ t = 10 × 2 = 20 m。落地时 v_x = 10、v_y = g t = 20，合速度 v = √(10² + 20²) = √500 ≈ 22.4 m/s。' },
      { type: 'heading', text: '三、飞行时间、水平射程与轨迹方程' },
      { type: 'paragraph', text: '由竖直方向公式可以推出几个特别有用的结论。飞行时间：由 y = h = ½ g t²，得 t = √(2h / g)。看出飞行时间只由下落高度 h 决定，与初速度 v₀ 无关——从同一高度平抛，飞多快都同时落地。' },
      { type: 'keypoint', label: '重点·飞行时间与射程', text: '飞行时间 <strong>t = √(2h / g)</strong>（只由高度 h 决定）；水平射程 <strong>x = v₀ × √(2h / g)</strong>（既与初速 v₀ 有关，也与高度 h 有关）。' },
      { type: 'paragraph', text: '把 x = v₀ t 和 y = ½ g t² 联立消去 t，得到轨迹方程 y = g / (2 v₀²) × x²。这是一条开口向下的抛物线，开口向下程度由 g 和 v₀ 决定：v₀ 越大，抛物线越"扁"，射得越远。' },
      { type: 'warn', label: '易错', text: '千万不要以为"初速度越大，在空中飞得越久"。<strong>平抛的飞行时间只由下落高度 h 决定（t = √(2h/g)），与水平初速度 v₀ 无关。</strong>初速度只影响水平射程，不影响停留时间。不同 v₀ 从同高度抛出会同时落地。' },
      { type: 'tip', label: '提示', text: '速度偏转角 θ 与位移偏转角 α 有个漂亮关系：tanθ = 2 tanα（速度偏转角正切是位移偏转角正切的两倍）。记住它，很多选择题能秒答。推导：tanθ = v_y/v₀ = g t / v₀，tanα = y/x = (½ g t²)/(v₀ t) = g t/(2 v₀)。' },
      { type: 'table', headers: ['物理量', '平抛运动', '自由落体（对比）'], rows: [['水平方向', '匀速 v_x = v₀', '无水平运动'], ['竖直方向', '自由落体 y = ½ g t²', '自由落体 y = ½ g t²'], ['飞行时间', 't = √(2h/g)，由高度决定', '相同，t = √(2h/g)'], ['轨迹', '抛物线 y = g x²/(2 v₀²)', '直线下落']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">速度偏转角 θ 与位移偏转角 α 的关系</text><circle cx="120" cy="220" r="6" fill="#234b45"/><line x1="120" y1="220" x2="380" y2="220" stroke="#4fb3a5" stroke-width="3"/><text x="240" y="240" font-size="12" fill="#234b45">x（位移水平）</text><line x1="120" y1="220" x2="320" y2="110" stroke="#234b45" stroke-width="3"/><polygon points="320,110 306,118 314,130" fill="#234b45"/><text x="330" y="130" font-size="12" fill="#234b45">v 合速度</text><line x1="120" y1="220" x2="320" y2="110" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="210" y="160" font-size="12" fill="#234b45">y（位移竖直）</text><text x="150" y="200" font-size="12" fill="#234b45">α</text><text x="200" y="150" font-size="12" fill="#234b45">θ</text><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">tanθ = 2 tanα （速度偏转角正切是位移偏转角正切的 2 倍）</text></svg>', caption: '图2　平抛中合速度方向（偏转角 θ）与合位移方向（偏转角 α）不同，满足 tanθ = 2 tanα。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">飞行时间只由高度决定（不同 v₀ 同时落地）</text><line x1="380" y1="60" x2="380" y2="250" stroke="#2e9e8f" stroke-width="2"/><text x="350" y="270" font-size="12" fill="#234b45">抛出高度 h</text><circle cx="380" cy="60" r="6" fill="#234b45"/><line x1="380" y1="60" x2="180" y2="250" stroke="#4fb3a5" stroke-width="3"/><line x1="380" y1="60" x2="500" y2="250" stroke="#234b45" stroke-width="3"/><text x="160" y="270" font-size="12" fill="#234b45">v₀ 小</text><text x="510" y="270" font-size="12" fill="#234b45">v₀ 大</text><text x="340" y="290" font-size="13" fill="#234b45" text-anchor="middle">初速不同但同高度 → 竖直都自由落体 → 同时落地，时间 t=√(2h/g)</text></svg>', caption: '图3　从同一高度以不同初速度 v₀ 平抛，因竖直方向都是自由落体，所以同时落地，飞行时间只由高度决定。' }
    ],
    exercises: [
      { type: 'choice', question: '关于平抛运动，下列说法正确的是？', options: ['是匀变速曲线运动', '加速度时刻变化', '水平方向是匀加速运动', '飞行时间由初速度决定'], answer: '是匀变速曲线运动', explanation: '平抛运动只受重力，加速度恒为 g 不变（大小和方向都不变），所以它是匀变速运动；又因为初速度与合力不共线，轨迹是曲线，因此是匀变速曲线运动。水平方向不受力、做匀速直线运动而非匀加速；飞行时间 t = √(2h/g) 只由高度决定，与初速度无关。' },
      { type: 'choice', question: '从不同高度水平抛出两个小球，初速度相同，则？', options: ['同时落地', '高度大的先落地', '高度小的先落地', '无法判断谁先落地'], answer: '高度小的先落地', explanation: '平抛飞行时间 t = √(2h/g)，只由下落高度 h 决定，与初速度无关。高度越小，竖直方向自由落体需要的时间越短，所以高度小的小球先落地，高度大的后落地。初速度相同只是干扰条件，不影响飞行时间。因此正确说法是"高度小的先落地"。' },
      { type: 'choice', question: '平抛运动的轨迹方程是？', options: ['y = v₀ t', 'y = g/(2v₀²) × x²', 'x = ½ g t²', 'y = g t'], answer: 'y = g/(2v₀²) × x²', explanation: '由水平 x = v₀ t 得 t = x / v₀，代入竖直 y = ½ g t²，得 y = ½ g (x/v₀)² = g x² / (2 v₀²)，这就是平抛的轨迹方程，是一条开口向下的抛物线。其余选项要么是分方向位移公式，要么不是轨迹（消去 t 后的 x-y 关系）。' },
      { type: 'fill', question: '平抛运动中，物体的飞行时间 t = ___（用高度 h 和重力加速度 g 表示）。', answer: '√(2h/g)', explanation: '竖直方向做自由落体，下落高度 h = ½ g t²，解得 t = √(2h/g)。这表明飞行时间只由抛出高度决定，与水平初速度无关。从同一高度平抛，无论初速度多大都同时落地，这是平抛的重要结论。' },
      { type: 'fill', question: '平抛运动中，速度偏转角 θ 的正切值 tanθ 与位移偏转角 α 的正切值 tanα 满足关系：tanθ = ___ tanα。', answer: '2', explanation: '由 tanθ = v_y / v₀ = g t / v₀，tanα = y / x = (½ g t²)/(v₀ t) = g t /(2 v₀)，两式相比得 tanθ = 2 tanα。即速度偏转角正切是位移偏转角正切的两倍。这个结论在判断速度方向与位移方向关系时非常有用。' }
    ]
  });
})();
