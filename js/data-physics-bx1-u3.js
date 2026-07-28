/* ============================================================
 * 高一物理 · 必修 第一册 · 第一章 运动的描述
 * 课时3：速度
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u3',
    name: '速度',
    chapter: '必修第一册 · 第一章 运动的描述',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、速度的定义' },
      { type: 'paragraph', text: '只用"运动快慢"还不够精确，物理上用"速度"来定量描述物体运动的快慢和方向。速度等于物体的位移除以发生这段位移所用的时间。如果用 Δx 表示位移，Δt 表示发生这段位移所用的时间，那么速度 v = Δx / Δt。' },
      { type: 'keypoint', label: '重点·速度定义式', text: '<strong>v = Δx / Δt</strong><br>其中 Δx 是这段时间内的位移，Δt 是发生这段位移所用的时间。速度在数值上等于单位时间内的位移。' },
      { type: 'paragraph', text: '速度不但有大小，还有方向，它是矢量。速度的大小表示运动有多快，速度的方向就是物体运动的方向（也就是位移的方向）。说一个物体的速度，必须同时说明它的大小和方向。' },
      { type: 'list', items: ['速度描述运动的快慢和方向，是矢量', '定义式 v = Δx / Δt，Δx 为位移，Δt 为对应时间', '速度方向就是位移方向，即物体运动的方向', '比较速度要同时比较大小和方向'] },
      { type: 'heading', text: '二、平均速度和瞬时速度' },
      { type: 'paragraph', text: '物体运动快慢常常在变化。如果我们只看一段位移和对应的总时间，算出来的速度叫平均速度，它粗略地描述这段时间内整体的运动快慢。平均速度 = 这段位移 ÷ 这段时间。' },
      { type: 'example', label: '例题·求平均速度', text: '一辆汽车在2小时内从A城行驶到相距120千米的B城，位移大小120千米。求全过程的平均速度大小。<br><br><strong>解析</strong>：平均速度大小 = 位移 ÷ 时间 = 120千米 ÷ 2小时 = 60千米/小时。这里用位移而不是路程，所以平均速度大小与路程无关，只与初末位置有关。' },
      { type: 'keypoint', label: '重点·瞬时速度', text: '<strong>瞬时速度是物体在某一时刻或某一位置的速度</strong>，它能精确描述物体在该时刻的运动快慢和方向。汽车速度表上的读数，实际上显示的是瞬时速率（速度的大小）。' },
      { type: 'warn', label: '易错', text: '<strong>平均速度不是把几个速度简单求平均。</strong>平均速度必须用"总位移 ÷ 总时间"来算。如果物体往返运动，位移可能很小甚至为零，平均速度也会很小甚至为零，但这并不代表它没动过。求平均速度一定要用位移，不是路程。' },
      { type: 'table', headers: ['比较项', '平均速度', '瞬时速度'], rows: [['对应范围', '一段位移、一段时间', '某一时刻、某一位置'], ['精确程度', '粗略描述整体快慢', '精确描述该时刻快慢'], ['计算方法', '位移 ÷ 时间', '极短时间内的平均速度', '生活例子', '全程平均 60 km/h', '速度表读数 90 km/h']] },
      { type: 'paragraph', text: '瞬时速度可以理解为：把观察的时间取得极短极短，这时的平均速度就逼近某一时刻的真实速度。所以瞬时速度就是"时间间隔趋于零时的平均速度"。这是用平均速度去逼近瞬时速度的基本思想。' },
      { type: 'heading', text: '三、速率和单位换算' },
      { type: 'paragraph', text: '很多时候我们并不关心方向，只关心运动有多快，这时用"速率"。速率就是速度的大小，它只取数值，没有方向，因此是标量。比如"风速10米每秒""限速120千米每小时"，说的都是速率。' },
      { type: 'keypoint', label: '重点·速率', text: '<strong>速率是速度的大小，是标量（只有大小、没有方向）。</strong>速率 = 路程 ÷ 时间（当单向直线运动时，速率数值上等于平均速度的大小）。' },
      { type: 'tip', label: '提示', text: '<strong>路牌上的"限速120 km/h"指的是速率。</strong>交警测速只管你开得有多快（大小），不管你朝哪个方向开。所以限速限制的是速率，不是有方向的速度矢量。' },
      { type: 'list', items: ['常用单位：米每秒（m/s）、千米每小时（km/h）', '换算关系：1 m/s = 3.6 km/h；1 km/h = 1/3.6 m/s', 'm/s 化 km/h 乘 3.6，km/h 化 m/s 除以 3.6', '例：20 m/s = 72 km/h；108 km/h = 30 m/s'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">速度 = 位移 ÷ 发生这段位移所用时间</text><line x1="80" y1="220" x2="600" y2="220" stroke="#2e9e8f" stroke-width="3"/><circle cx="120" cy="220" r="8" fill="#234b45"/><text x="120" y="245" font-size="13" fill="#234b45" text-anchor="middle">初位置</text><circle cx="500" cy="220" r="8" fill="#234b45"/><text x="500" y="245" font-size="13" fill="#234b45" text-anchor="middle">末位置</text><line x1="120" y1="220" x2="500" y2="220" stroke="#4fb3a5" stroke-width="5"/><text x="310" y="200" font-size="15" fill="#234b45" text-anchor="middle">位移 Δx</text><text x="310" y="135" font-size="18" fill="#1f7a6e" font-weight="bold" text-anchor="middle">v = Δx / Δt</text><text x="310" y="165" font-size="13" fill="#234b45" text-anchor="middle">Δt 为发生位移 Δx 所用时间</text></svg>', caption: '图1　速度等于位移 Δx 与所用时间 Δt 的比值，方向沿位移方向。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">平均速度对应割线，瞬时速度对应切线</text><line x1="80" y1="250" x2="600" y2="250" stroke="#2e9e8f" stroke-width="3"/><line x1="80" y1="250" x2="80" y2="60" stroke="#2e9e8f" stroke-width="3"/><path d="M 100 240 Q 250 120 480 90" fill="none" stroke="#234b45" stroke-width="3"/><line x1="170" y1="220" x2="400" y2="120" stroke="#4fb3a5" stroke-width="3"/><text x="270" y="165" font-size="13" fill="#234b45" text-anchor="middle">割线→平均速度</text><line x1="400" y1="120" x2="432" y2="172" stroke="#1f7a6e" stroke-width="3"/><text x="455" y="155" font-size="13" fill="#1f7a6e" text-anchor="middle">切线→瞬时速度</text><text x="340" y="280" font-size="13" fill="#234b45" text-anchor="middle">一段位移的平均速度 vs 某一位置（时刻）的瞬时速度</text></svg>', caption: '图2　连接两点的割线斜率表示平均速度，曲线上某点的切线斜率表示瞬时速度。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">速度单位换算：1 m/s = 3.6 km/h</text><rect x="60" y="60" width="260" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="190" y="100" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">m/s → km/h</text><text x="190" y="135" font-size="14" fill="#234b45" text-anchor="middle">乘以 3.6</text><rect x="360" y="60" width="260" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="490" y="100" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">km/h → m/s</text><text x="490" y="135" font-size="14" fill="#234b45" text-anchor="middle">除以 3.6</text><text x="340" y="220" font-size="14" fill="#234b45" text-anchor="middle">例：限速 120 km/h ≈ 33.3 m/s</text></svg>', caption: '图3　速度单位换算：米每秒与千米每小时互化，记住乘或除以 3.6。' }
    ],
    exercises: [
      { type: 'choice', question: '速度的定义式是？', options: ['v = x / t', 'v = Δx / Δt', 'v = Δt / Δx', 'v = x × t'], answer: 'v = Δx / Δt', explanation: '速度等于位移除以发生这段位移所用的时间，定义式为 v = Δx / Δt，其中 Δx 是位移，Δt 是对应的时间间隔。这里必须用位移的变化量 Δx，而不是某个位置坐标 x，所以 v = x / t 是错的。' },
      { type: 'choice', question: '关于平均速度和瞬时速度，下列说法正确的是？', options: ['平均速度对应某一时刻', '瞬时速度是某位置的速度，能精确描述运动', '汽车速度表上的读数是平均速度', '瞬时速度没有方向'], answer: '瞬时速度是某位置的速度，能精确描述运动', explanation: '瞬时速度对应某一时刻或某一位置，能精确描述物体在该时刻的运动快慢和方向，是矢量。平均速度对应一段位移和一段时间，是粗略描述；汽车速度表读数显示的是瞬时速率（速度大小）；瞬时速度有方向，是矢量。' },
      { type: 'choice', question: '物理量"速率"是指？', options: ['位移与时间的比值', '速度的大小，是标量', '加速度的大小', '平均速度的大小'], answer: '速度的大小，是标量', explanation: '速率是速度的大小，只取数值没有方向，因此是标量。它等于路程除以时间（单向直线运动时数值上等于平均速度大小）。位移与时间的比值是速度（矢量），不是速率。' },
      { type: 'fill', question: '高速公路上"限速 120 km/h"，这里限制的是车辆开得有多快，不关心方向，所以 120 km/h 指的是___（填"速度"或"速率"）。', answer: '速率', explanation: '限速只限制车辆运动的快慢（大小），不限制方向，因此限制的是速率而非有方向的速度矢量。速率是标量，速度才是矢量。路牌和测速仪显示的都是速率。' },
      { type: 'fill', question: '将 10 m/s 换算成 km/h，结果是___ km/h（填数值）。', answer: '36', explanation: '速度单位换算关系为 1 m/s = 3.6 km/h。把米每秒化为千米每小时时乘以 3.6，所以 10 m/s = 10 × 3.6 = 36 km/h。反之千米每小时化为米每秒要除以 3.6。' }
    ]
  });
})();
