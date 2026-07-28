/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第一章 安培力与洛伦兹力
 * 课时3：洛伦兹力
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u3',
    name: '洛伦兹力',
    chapter: '选择性必修第二册 · 第一章 安培力与洛伦兹力',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、运动电荷在磁场中受到的力——洛伦兹力' },
      { type: 'paragraph', text: '前面学过，通电导线在磁场里会受到安培力。导线里其实是一大群自由电子在定向移动。那么，每一个单独运动着的带电粒子，在磁场里是不是也会受力呢？答案是肯定的。磁场对运动电荷施加的力，叫做洛伦兹力，以荷兰物理学家洛伦兹的名字命名。安培力其实就是大量运动电荷所受洛伦兹力的宏观总和。' },
      { type: 'keypoint', label: '重点·什么是洛伦兹力', text: '<strong>洛伦兹力是磁场对运动中的带电粒子施加的力。</strong>它只作用在"运动着的"电荷上；如果电荷静止不动，即使处在磁场中也不受洛伦兹力。' },
      { type: 'paragraph', text: '注意两个关键字：第一是"带电"，不带电的粒子（比如中子）在磁场里不受这个力；第二是"运动"，电荷必须相对于磁场有速度。一个静止在磁场里的电荷，磁场对它毫无办法。这点和电场不同——电场对静止电荷也会施加电场力。' },
      { type: 'list', items: ['粒子必须带电：中子、原子等不带电粒子不受洛伦兹力', '粒子必须运动：静止电荷不受洛伦兹力', '洛伦兹力是磁场对"运动电荷"的力，安培力是其宏观表现'] },
      { type: 'heading', text: '二、洛伦兹力的大小 F = q × v × B' },
      { type: 'keypoint', label: '重点·洛伦兹力公式（速度垂直磁场）', text: '<strong>当电荷运动方向垂直于磁场时，洛伦兹力大小 F = q × v × B。</strong>其中 q 是电荷量，v 是速度大小，B 是磁感应强度。三者相乘就是力的大小。' },
      { type: 'paragraph', text: '公式中 q 要代入电荷量的绝对值（正负只影响方向，不影响大小）。v 必须和 B 垂直；如果电荷是斜着运动的，只有垂直于磁场的速度分量才产生洛伦兹力，力会变小。单位上，q 用库仑（C），v 用米每秒（m/s），B 用特斯拉（T），算出的 F 是牛顿（N）。和安培力公式 F = B × I × L 对照着记会轻松很多。' },
      { type: 'example', label: '例题·计算洛伦兹力', text: '一个质子（电荷量 q = 1.6×10⁻¹⁹ 库仑）以 v = 2.0×10⁶ 米/秒的速度垂直进入 B = 0.10 特斯拉的匀强磁场。求它受到的洛伦兹力大小。<br><br><strong>解</strong>：<br>速度垂直磁场，用 F = q × v × B。<br>F = 1.6×10⁻¹⁹ × 2.0×10⁶ × 0.10 = 3.2×10⁻¹⁴（牛）。<br>答：洛伦兹力约为 3.2×10⁻¹⁴ 牛。' },
      { type: 'warn', label: '易错', text: '用 F = q × v × B 时，<strong>q 应代入电荷量的绝对值</strong>，正负号只决定受力方向，不影响力的大小。另外速度必须与磁场垂直，若题目说"速度平行磁场"，则洛伦兹力为零，粒子不受力、做匀速直线运动。' },
      { type: 'table', headers: ['情形', '洛伦兹力 F', '粒子的运动'], rows: [['速度垂直磁场', 'F = q × v × B（最大）', '做匀速圆周运动（下节学）'], ['速度平行磁场', 'F = 0', '不受力，匀速直线通过'], ['速度斜交磁场', 'F = q × v × B × sinθ', '螺旋运动（了解）']] },
      { type: 'heading', text: '三、用左手定则判断洛伦兹力方向（注意正负电荷）' },
      { type: 'paragraph', text: '洛伦兹力的方向同样用左手定则判断。但有个关键细节：四指指向"正电荷运动的方向"；如果运动的是负电荷（比如电子），四指要指向它运动的反方向（也就是等效电流的方向），大拇指才指出受力方向。很多同学在这里栽跟头，记住：负电荷要把四指反过来比。' },
      { type: 'keypoint', label: '重点·左手定则判断洛伦兹力', text: '<strong>伸开左手，磁感线穿手心，四指指向正电荷运动方向（负电荷则指向运动的反方向），大拇指所指即洛伦兹力方向。</strong>洛伦兹力方向同时垂直于速度和磁场。' },
      { type: 'list', items: ['第一步：伸开左手，让磁感线垂直穿入手心', '第二步：正电荷——四指指向运动方向；负电荷——四指指向运动反方向', '第三步：大拇指所指就是洛伦兹力 F 的方向', '注意：F 永远垂直于 v 和 B，不会与速度同向'] },
      { type: 'warn', label: '易错', text: '<strong>正负电荷方向正好相反！</strong>同样的速度、同样的磁场，电子（负电）受到的洛伦兹力方向，与质子（正电）受到的力方向相反。判断时务必先看清电荷的正负，负电荷要把四指指向它运动的反方向，否则整个方向都会算反。' },
      { type: 'tip', label: '提示', text: '<strong>洛伦兹力永远不做功。</strong>因为它始终垂直于电荷的运动方向（速度方向），力的方向和位移方向垂直，所以不改变粒子的速率和动能，只改变运动方向。这一点和电场力不同，电场力是可以对电荷做功、改变动能的。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">磁场向里（×）、正电荷向右，洛伦兹力向上</text><g fill="#234b45" font-size="20" text-anchor="middle"><text x="100" y="130">×</text><text x="150" y="130">×</text><text x="100" y="190">×</text><text x="150" y="190">×</text></g><circle cx="320" cy="160" r="16" fill="#4fb3a5"/><text x="320" y="166" font-size="16" fill="#e6f4f1" text-anchor="middle">+</text><line x1="336" y1="160" x2="430" y2="160" stroke="#234b45" stroke-width="4"/><polygon points="442,160 422,151 422,169" fill="#234b45"/><text x="385" y="148" font-size="12" fill="#234b45" text-anchor="middle">v</text><line x1="320" y1="160" x2="320" y2="70" stroke="#2e9e8f" stroke-width="4"/><polygon points="320,58 311,76 329,76" fill="#2e9e8f"/><text x="338" y="110" font-size="12" fill="#2e9e8f" text-anchor="middle">F</text></svg>', caption: '图1　正电荷垂直进入向里的磁场，速度向右时，用左手定则判断洛伦兹力向上。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">负电荷（电子）受力方向与正电荷相反</text><g fill="#234b45" font-size="20" text-anchor="middle"><text x="100" y="130">×</text><text x="150" y="130">×</text><text x="100" y="190">×</text><text x="150" y="190">×</text></g><circle cx="320" cy="160" r="16" fill="#4fb3a5"/><text x="320" y="166" font-size="16" fill="#e6f4f1" text-anchor="middle">−</text><line x1="336" y1="160" x2="430" y2="160" stroke="#234b45" stroke-width="4"/><polygon points="442,160 422,151 422,169" fill="#234b45"/><text x="385" y="148" font-size="12" fill="#234b45" text-anchor="middle">v（电子向右）</text><line x1="320" y1="160" x2="320" y2="250" stroke="#2e9e8f" stroke-width="4"/><polygon points="320,262 311,244 329,244" fill="#2e9e8f"/><text x="338" y="240" font-size="12" fill="#2e9e8f" text-anchor="middle">F向下</text></svg>', caption: '图2　同样速度向右的电子（负电），洛伦兹力方向向下，与正电荷相反。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">洛伦兹力与速度垂直，不做功</text><circle cx="340" cy="160" r="100" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><circle cx="340" cy="60" r="10" fill="#4fb3a5"/><line x1="340" y1="60" x2="400" y2="60" stroke="#234b45" stroke-width="4"/><polygon points="412,60 392,51 392,69" fill="#234b45"/><text x="380" y="48" font-size="12" fill="#234b45" text-anchor="middle">v</text><line x1="340" y1="60" x2="340" y2="120" stroke="#2e9e8f" stroke-width="4"/><polygon points="340,132 331,114 349,114" fill="#2e9e8f"/><text x="358" y="100" font-size="12" fill="#2e9e8f" text-anchor="middle">F⊥v</text><text x="340" y="280" font-size="13" fill="#234b45" text-anchor="middle">力始终垂直速度，只改方向不改快慢，不做功</text></svg>', caption: '图3　洛伦兹力始终与速度垂直，因此不改变粒子速率，不对粒子做功。' }
    ],
    exercises: [
      { type: 'choice', question: '关于洛伦兹力，下列说法正确的是？', options: ['静止在磁场中的电荷也受洛伦兹力', '不带电的粒子在磁场中也受洛伦兹力', '洛伦兹力是磁场对运动电荷的力', '洛伦兹力总是对电荷做正功'], answer: '洛伦兹力是磁场对运动电荷的力', explanation: '洛伦兹力是磁场对运动中的带电粒子施加的力，电荷必须带电且运动才受此力。静止电荷不受洛伦兹力，不带电的中子等也不受。又因为洛伦兹力方向始终垂直于速度方向，它不对电荷做功，既不做正功也不做负功，只改变运动方向。' },
      { type: 'choice', question: '用左手定则判断电子（负电荷）在磁场中的洛伦兹力方向时，四指应指向？', options: ['电子运动的方向', '电子运动的反方向', '磁场方向', '随便方向都行'], answer: '电子运动的反方向', explanation: '左手定则中四指指向正电荷运动的方向。对于电子这类负电荷，要把四指指向它运动的反方向（即等效电流方向），大拇指才给出正确的洛伦兹力方向。如果直接指向电子运动方向，得到的力会完全相反，这是最常见的错误。' },
      { type: 'choice', question: '一个电荷以速度 v 垂直进入匀强磁场，其洛伦兹力大小公式是？', options: ['F = q × v × B', 'F = q + v + B', 'F = q × v / B', 'F = B / (q × v)'], answer: 'F = q × v × B', explanation: '当电荷运动方向垂直于磁场时，洛伦兹力大小等于电荷量 q、速度 v、磁感应强度 B 三者的乘积，即 F = q × v × B（q 取绝对值）。后三个选项在物理上不成立，也不满足单位量纲。该公式与安培力公式 F = B × I × L 形式对应，便于对照记忆。' },
      { type: 'fill', question: '当电荷的运动速度方向与磁场方向平行时，洛伦兹力大小为___，电荷将做___运动。', answer: '0|匀速直线', explanation: '洛伦兹力大小与速度和磁场夹角的正弦成正比。当速度平行于磁场时，夹角为零，正弦为零，所以洛伦兹力为零。此时电荷不受磁场力，在磁场中保持原来的速度做匀速直线运动，就像磁场不存在一样。' },
      { type: 'fill', question: '洛伦兹力方向始终垂直于电荷的速度方向，因此它___（选填"能"或"不能"）改变电荷的动能，即洛伦兹力___（选填"做功"或"不做功"）。', answer: '不能|不做功', explanation: '因为洛伦兹力永远垂直于速度方向，而功等于力在位移方向上的分量乘以位移，垂直于位移的力不做功。所以洛伦兹力只改变电荷的运动方向、不改变其速率和动能。这与电场力不同，电场力可以对电荷做功并改变动能。' }
    ]
  });
})();
