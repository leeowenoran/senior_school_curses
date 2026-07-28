/* ============================================================
 * 高三复习 · 计算压轴 · 专题二 电磁学计算
 * 课时9：磁场中带电粒子运动计算
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u9',
    name: '磁场中带电粒子运动计算',
    chapter: '计算压轴 · 专题二 电磁学计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、洛伦兹力：磁场对运动电荷的力' },
      { type: 'paragraph', text: '带电粒子在磁场中运动且速度方向与磁场不平行时，会受到一个叫洛伦兹力的力。这个力永远垂直于速度方向，所以洛伦兹力不做功，只改变速度的方向、不改变速度的大小。' },
      { type: 'keypoint', label: '重点·洛伦兹力', text: '<strong>当速度 v 垂直于磁场 B 时，洛伦兹力大小 F = q × v × B。</strong><br>力的方向由左手定则判断：伸开左手，磁感线穿手心，四指指向正电荷运动方向，大拇指所指就是受力方向（负电荷则反向）。' },
      { type: 'list', items: ['v 与 B 平行时，洛伦兹力为零', '洛伦兹力始终垂直于速度，故不做功、不改速度大小', '负电荷受力方向与正电荷相反，可用左手定则后取反', '速度方向改变，洛伦兹力方向也随时改变，始终垂直于速度'] },
      { type: 'paragraph', text: '左手定则是判断洛伦兹力方向的核心工具。很多同学会误用右手，记住：判断"力"用左手，判断"感应电流"才用右手。' },
      { type: 'heading', text: '二、匀速圆周运动：垂直射入匀强磁场' },
      { type: 'paragraph', text: '当带电粒子以速度 v 垂直射入匀强磁场时，洛伦兹力大小不变且始终指向圆心，正好充当向心力，粒子做匀速圆周运动。半径和周期是高考必考的两个量。' },
      { type: 'keypoint', label: '重点·半径与周期', text: '<strong>由 qvB = m v² / r 得回旋半径 r = m × v / (q × B)。</strong><br><strong>运动周期 T = 2π × m / (q × B)。</strong><br>注意：周期 T 与速度 v、半径 r 无关，只由比荷 q/m 和磁感应强度 B 决定。' },
      { type: 'list', items: ['半径 r 与速度 v 成正比，与磁感应强度 B 成反比', '比荷 q/m 越大，半径越小、转得越快', '周期 T 与 v、r 无关，是磁场偏转的重要特征', '转半圈时间 = T/2，转过圆心角 θ 的时间 t = (θ/360°) × T'] },
      { type: 'example', label: '例题·半径与周期', text: '例：质子（q = 1.6×10⁻¹⁹ C，m = 1.67×10⁻²⁷ kg）以 v = 2.0×10⁵ m/s 垂直进入 B = 0.50 T 的匀强磁场。求轨道半径和周期。<br><strong>解析</strong>：r = mv/(qB) = 1.67×10⁻²⁷×2.0×10⁵/(1.6×10⁻¹⁹×0.50) ≈ 4.2×10⁻³ m = 4.2 mm；T = 2πm/(qB) = 2×3.14×1.67×10⁻²⁷/(1.6×10⁻¹⁹×0.50) ≈ 1.3×10⁻⁷ s。' },
      { type: 'warn', label: '易错', text: '<strong>周期 T 与速度无关，这是反直觉的易错点。</strong>速度变大，半径也变大，但转一圈的路程（2πr）同比增加，所以时间 T 不变。另外求运动时间要用 t = (圆心角/2π)×T 或 t = (θ/360°)×T，不能直接用 t = 弧长/v 时把圆心角算错。' },
      { type: 'heading', text: '三、确定圆心与轨迹的几何方法' },
      { type: 'paragraph', text: '解磁场题往往是几何题。已知入射点和出射点及速度方向，可用两个方法找圆心：① 洛伦兹力方向（速度垂线）延长线交点；② 弦的垂直平分线与速度垂线的交点。圆心找到后，半径和偏转角度就好算了。' },
      { type: 'keypoint', label: '重点·找圆心', text: '<strong>方法一：入射速度方向和出射速度方向的垂线交点即圆心（洛伦兹力指向圆心）。</strong><br><strong>方法二：粒子轨迹弦的中垂线必过圆心，与某条速度垂线相交得圆心。</strong><br>偏转圆心角 θ 等于速度方向改变的角度，也等于轨迹所对圆心角。' },
      { type: 'list', items: ['速度方向改变多少度，轨迹圆心角就是多少度', '弦长 L 与半径 r、圆心角 θ 关系：L = 2r×sin(θ/2)', '常用辅助线：半径、弦、弦心距构成直角三角形', '无界磁场中粒子做完整圆周；有界磁场中可能是圆弧'] },
      { type: 'heading', text: '四、临界与边界问题' },
      { type: 'paragraph', text: '粒子在有界磁场（如矩形、圆形边界）中运动，常常问"恰好不射出""最大半径""最小磁场区域"等临界条件。临界往往对应粒子轨迹与边界相切，或与边界交于某特殊点。' },
      { type: 'keypoint', label: '重点·临界条件', text: '<strong>临界问题核心是寻找"轨迹与边界相切"或"轨迹过边界顶点"的极限位置。</strong><br>例如粒子从边界一点射入恰好不从另一边界射出，通常轨迹与那条边相切，此时半径取临界最大值。' },
      { type: 'example', label: '例题·有界磁场临界', text: '例：宽度为 d 的匀强磁场区域，粒子从左侧垂直边界射入，速度 v，比荷 q/m 已知。求粒子恰好不穿过右侧边界所需的最小磁感应强度 B。<br><strong>解析</strong>：恰好不穿出即轨迹与右边界相切，此时轨道半径 r = d/2。由 r = mv/(qB) 得 B = mv/(q×r) = mv/(q×d/2) = 2mv/(qd)。这就是所需最小 B。' },
      { type: 'warn', label: '易错', text: '<strong>临界半径不是随意取的，必须用几何关系由边界尺寸推出。</strong>常见错误是直接把磁场宽度当半径。正确做法是先画临界轨迹（相切或过点），从该几何图形中读出半径与边界尺寸的关系，再代入 r = mv/(qB)。' },
      { type: 'table', headers: ['物理量', '表达式', '决定因素'], rows: [['洛伦兹力', 'F = qvB（垂直时）', 'q、v、B，方向用左手定则'], ['回旋半径', 'r = mv/(qB)', '与 v 成正比，与 B 成反比'], ['周期', 'T = 2πm/(qB)', '只与 q/m 和 B 有关'], ['运动时间', 't = (θ/2π)×T', '由圆心角 θ 决定']] },
      { type: 'tip', label: '提示', text: '<strong>磁场题三步法：① 用左手定则判断偏转方向（顺/逆时针）；② 由 r = mv/(qB) 求半径；③ 画几何图找圆心、弦、圆心角，再用 t = (θ/2π)×T 求时间。</strong>画图是最关键的一步，宁可多花时间把图描准。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">垂直射入匀强磁场的圆周运动</text><circle cx="300" cy="160" r="90" fill="none" stroke="#4fb3a5" stroke-width="3"/><circle cx="300" cy="160" r="4" fill="#234b45"/><text x="300" y="178" font-size="12" fill="#234b45" text-anchor="middle">圆心</text><circle cx="390" cy="160" r="6" fill="#234b45"/><line x1="390" y1="160" x2="450" y2="160" stroke="#234b45" stroke-width="2"/><polygon points="450,154 450,166 462,160" fill="#234b45"/><text x="430" y="148" font-size="12" fill="#234b45">v</text><line x1="390" y1="160" x2="300" y2="160" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="4 4"/><text x="345" y="150" font-size="12" fill="#234b45">r</text><path d="M 390 160 A 90 90 0 0 1 300 250" fill="none" stroke="#234b45" stroke-width="2"/><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">洛伦兹力指向圆心，粒子做匀速圆周运动</text></svg>', caption: '图1　粒子垂直射入磁场做圆周运动，r = mv/(qB)，周期 T = 2πm/(qB)。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">用几何法确定圆心与轨迹</text><line x1="120" y1="160" x2="560" y2="160" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5 4"/><circle cx="300" cy="160" r="90" fill="none" stroke="#4fb3a5" stroke-width="3"/><circle cx="210" cy="160" r="6" fill="#234b45"/><circle cx="300" cy="250" r="6" fill="#234b45"/><line x1="210" y1="160" x2="210" y2="90" stroke="#234b45" stroke-width="2"/><line x1="300" y1="250" x2="380" y2="250" stroke="#234b45" stroke-width="2"/><line x1="255" y1="205" x2="345" y2="205" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="4 4"/><circle cx="300" cy="160" r="4" fill="#234b45"/><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">两速度垂线交点（或弦中垂线）即圆心</text></svg>', caption: '图2　入射、出射速度方向的垂线交点即为圆心，用于求半径和圆心角。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">有界磁场中的临界轨迹</text><rect x="100" y="90" width="40" height="140" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="540" y="90" width="40" height="140" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="120" y="80" font-size="12" fill="#234b45" text-anchor="middle">左边界</text><text x="560" y="80" font-size="12" fill="#234b45" text-anchor="middle">右边界</text><circle cx="200" cy="160" r="80" fill="none" stroke="#4fb3a5" stroke-width="3"/><line x1="200" y1="160" x2="120" y2="160" stroke="#234b45" stroke-width="2"/><circle cx="120" cy="160" r="6" fill="#234b45"/><line x1="120" y1="160" x2="200" y2="160" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="4 4"/><text x="160" y="148" font-size="12" fill="#234b45">r</text><circle cx="280" cy="160" r="6" fill="#234b45"/><path d="M 120 160 A 80 80 0 0 1 280 160" fill="none" stroke="#234b45" stroke-width="2"/><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">临界：轨迹与右边界相切，r = d/2</text></svg>', caption: '图3　有界磁场临界问题，轨迹与边界相切时半径取临界值。' }
    ],
    exercises: [
      { type: 'choice', question: '带电粒子垂直射入匀强磁场做圆周运动，其半径 r 的表达式是？', options: ['r = qB/(mv)', 'r = mv/(qB)', 'r = qvB/m', 'r = 2πm/(qB)'], answer: 'r = mv/(qB)', explanation: '洛伦兹力充当向心力，即 qvB = mv²/r，两边约去一个 v 得 r = mv/(qB)。半径与速度成正比、与磁感应强度成反比。周期才是 T = 2πm/(qB)。' },
      { type: 'choice', question: '关于洛伦兹力，下列说法正确的是？', options: ['洛伦兹力可以做正功', '洛伦兹力方向始终与速度方向垂直', '速度越大洛伦兹力一定越大', '洛伦兹力方向与磁场方向平行'], answer: '洛伦兹力方向始终与速度方向垂直', explanation: '洛伦兹力 F = qvB（垂直时）方向由左手定则判定，永远垂直于速度方向，因此不做功、不改变速度大小，A 错 B 对。当 v 与 B 平行时洛伦兹力为零，并非速度大就大，C 错。洛伦兹力垂直于速度和磁场所决定的平面，不平行于磁场，D 错。' },
      { type: 'choice', question: '带电粒子在匀强磁场中做圆周运动的周期 T 与下列哪个量无关？', options: ['磁感应强度 B', '粒子的比荷 q/m', '粒子的速度 v', '粒子的质量 m'], answer: '粒子的速度 v', explanation: '由 T = 2πm/(qB) 可知，周期只取决于粒子的比荷 q/m 和磁感应强度 B，与速度 v 和半径 r 都无关。这是磁场偏转的重要特征：速度变大半径变大，但转一圈的时间不变。' },
      { type: 'fill', question: '带电粒子在匀强磁场中做圆周运动时，若速度方向改变了 θ 角（用角度表示），则运动时间 t = ___（用 T 表示）。', answer: '(θ / 360°) × T', explanation: '粒子转过的圆心角等于速度方向改变的角度 θ。整圈周期为 T 对应 360°，所以转过 θ 角所用时间 t = (θ/360°)×T。若用弧度，则 t = (θ/2π)×T。求时间必须先由几何关系确定圆心角。' },
      { type: 'fill', question: '质子以速度 v 垂直进入磁感应强度 B 的匀强磁场，其回旋半径 r = ___（用 m、v、q、B 表示）。', answer: 'm × v / (q × B)', explanation: '洛伦兹力提供向心力：qvB = mv²/r，约去一个 v 后得到 r = mv/(qB)。半径与动量 mv 成正比，与磁感应强度 B 和电荷量 q 成反比。计算时注意质量用 kg、速度用 m/s、B 用 T。' }
    ]
  });
})();
