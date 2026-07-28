/* ============================================================
 * 选择性必修第一册 · 第一章 动量守恒定律
 * 课时2：动量定理
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u2',
    name: '动量定理',
    chapter: '选择性必修第一册 · 第一章 动量守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、先认识两个量：动量和冲量' },
      { type: 'paragraph', text: '物体的运动本领，不光看它跑得多快，还要看它有多重。物理学把"质量乘以速度"定义为动量，记作 p = m × v。一个质量大的卡车和一个质量小的自行车，即使速度相同，卡车撞过来更危险，就是因为它的动量更大。动量的方向和速度方向一致，是个有方向的量。' },
      { type: 'keypoint', label: '重点·动量', text: '<strong>动量 p = m × v，单位是千克·米/秒（kg·m/s）。</strong>它既和物体的质量有关，也和速度有关；物体运动得越快、质量越大，动量越大。动量的方向与速度方向相同。' },
      { type: 'paragraph', text: '再看"力作用了一段时间"这件事。比如你用同样的力气推一辆小车，推 1 秒和推 10 秒，小车最后的速度显然不同。我们把"力乘以它作用的时间"叫作冲量，记作 I = F × Δt。冲量衡量的是力在一段时间内累积的效果。' },
      { type: 'keypoint', label: '重点·冲量', text: '<strong>冲量 I = F × Δt，单位是牛·秒（N·s）。</strong>它表示力在时间上累积的作用效果。作用时间越长、力越大，冲量越大。冲量的方向与力的方向相同。' },
      { type: 'list', items: ['动量 p = m × v：描述物体在某一时刻"运动本领"的大小，是状态量', '冲量 I = F × Δt：描述力在一段时间内累积的效果，是过程量', '两者单位其实相同：1 N·s = 1 kg·m/s'] },
      { type: 'heading', text: '二、动量定理：力的时间累积改变动量' },
      { type: 'paragraph', text: '把冲量和动量连起来，就得到一个非常重要的规律：物体受到的冲量，等于它动量的变化量。用式子写就是 F × Δt = Δp，而 Δp 就是末动量减去初动量，即 m×v′ − m×v。也就是说，你想让一个物体的动量改变多少，就得给它多大的冲量。' },
      { type: 'keypoint', label: '重点·动量定理', text: '<strong>物体所受合外力的冲量等于它动量的变化：F × Δt = Δp = m×v′ − m×v。</strong>它把"力作用了一段时间"和"速度改变了多少"直接联系了起来。' },
      { type: 'example', label: '例题·用动量定理算力', text: '一个质量 0.5 kg 的皮球，以 4 m/s 竖直向下落到地面，弹起时速度大小为 3 m/s（向上）。求地面对球的平均作用力大小。（g 取 10 m/s²，取向上为正方向）<br><br><strong>解析</strong>：<br>初动量 p = m×v = 0.5 × (−4) = −2 kg·m/s（向下为负）。<br>末动量 p′ = 0.5 × 3 = 1.5 kg·m/s（向上为正）。<br>动量变化 Δp = p′ − p = 1.5 − (−2) = 3.5 kg·m/s。<br>设作用时间为 0.1 s，则 (F − mg) × Δt = Δp，即 (F − 5) × 0.1 = 3.5，解得 F = 40 N。地面对球的平均作用力约为 40 N。' },
      { type: 'paragraph', text: '从例子能看出，动量定理常常比牛顿第二定律更方便：它不要求力是恒力，也不要求过程细节，只要看初末动量和总共的冲量就行。只要知道作用时间，就能反推出平均作用力。' },
      { type: 'warn', label: '易错', text: '<strong>冲量是"合外力"的冲量，不是某一个力的冲量。</strong>动量定理里的 F 必须是物体受到的合外力。如果物体还受重力，就必须把重力算进去。另外动量是矢量，计算时一定要先规定正方向，末动量减初动量时方向不能乱。' },
      { type: 'heading', text: '三、动量定理的应用：为什么能"缓冲"' },
      { type: 'paragraph', text: '生活中很多保护设计都利用了动量定理。比如跳远运动员落地时要屈膝，摔跤时要在垫子上翻滚，搬运易碎品要用泡沫包裹。它们的共同点是：在动量变化 Δp 一定的情况下，让作用时间 Δt 变长，那么受到的平均作用力 F 就会变小，人就安全、东西就不易碎。' },
      { type: 'keypoint', label: '重点·缓冲原理', text: '<strong>当动量变化 Δp 一定时，作用时间 Δt 越长，受到的平均作用力 F 越小（F = Δp / Δt）。</strong>这就是缓冲、减震、安全气囊的全部物理依据。' },
      { type: 'tip', label: '提示', text: '<strong>记一句口诀："要想受力小，时间拖长它"。</strong>戴安全帽、系安全带、铺海绵垫，核心都是延长作用时间、减小冲击力。反过来，想增大作用力（如钉钉子）就让它短促有力。' },
      { type: 'list', items: ['安全气囊：碰撞瞬间充气，让头部的减速时间变长，受力减小', '跳高落地的厚垫子：延长人与地面作用时间，保护关节', '易碎品包泡沫：运输颠簸时延长冲击时间，防止破碎', '钉钉子：锤子短促猛击，作用时间短，瞬时力很大'] },
      { type: 'table', headers: ['场景', 'Δp 是否相同', 'Δt 长短', '受力 F 大小'], rows: [['直接摔在水泥地', '相同（都从同高落下）', '很短', '很大，易受伤'], ['落在海绵垫', '相同', '较长', '较小，更安全'], ['戴安全气囊', '相同', '较长', '较小，保护头部'], ['用锤猛钉钉子', '需要较大动量变化', '极短', '很大，能钉入']] },
      { type: 'heading', text: '四、用动量定理解题的步骤' },
      { type: 'paragraph', text: '第一步，明确研究对象并规定正方向；第二步，算出初动量 p 和末动量 p′，得到 Δp；第三步，分析这段时间内的合外力冲量（包括重力等）；第四步，列 F × Δt = Δp 求解。只要方向规定清楚，矢量运算就变成了带符号的代数运算。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">冲量 = 力 × 作用时间</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">恒定推力 F 作用</text><rect x="100" y="120" width="120" height="60" rx="6" fill="#4fb3a5"/><text x="160" y="156" font-size="13" fill="#234b45" text-anchor="middle">小车 m</text><polygon points="240,120 270,135 240,150" fill="#234b45"/><text x="180" y="220" font-size="12" fill="#234b45" text-anchor="middle">力 F 向右推 Δt 时间</text><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">冲量 I</text><text x="500" y="150" font-size="20" fill="#234b45" text-anchor="middle" font-weight="bold">I = F × Δt</text><text x="500" y="200" font-size="12" fill="#234b45" text-anchor="middle">单位 N·s，方向与 F 相同</text></svg>', caption: '图1　一个恒定的力 F 作用一段时间 Δt，就给物体一个冲量 I = F × Δt。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动量定理：冲量等于动量变化</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="90" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">初动量 p</text><line x1="100" y1="160" x2="200" y2="160" stroke="#234b45" stroke-width="4"/><polygon points="200,152 218,160 200,168" fill="#234b45"/><text x="150" y="190" font-size="12" fill="#234b45" text-anchor="middle">p = m×v（向右）</text><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="90" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">末动量 p′</text><line x1="460" y1="160" x2="580" y2="160" stroke="#4fb3a5" stroke-width="4"/><polygon points="580,152 598,160 580,168" fill="#4fb3a5"/><text x="520" y="190" font-size="12" fill="#234b45" text-anchor="middle">p′ = m×v′（更快）</text><text x="340" y="282" font-size="13" fill="#234b45" text-anchor="middle">F × Δt = p′ − p = Δp</text></svg>', caption: '图2　合外力冲量（左推右）等于物体末动量与初动量的差值 Δp。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">缓冲：延长时间，减小受力</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">硬地（Δt 短）</text><rect x="120" y="200" width="120" height="20" fill="#234b45"/><circle cx="180" cy="170" r="22" fill="#4fb3a5"/><text x="180" y="234" font-size="12" fill="#234b45" text-anchor="middle">受力大，易受伤</text><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">软垫（Δt 长）</text><rect x="380" y="200" width="240" height="20" rx="8" fill="#4fb3a5"/><circle cx="500" cy="160" r="22" fill="#4fb3a5"/><text x="500" y="234" font-size="12" fill="#234b45" text-anchor="middle">受力小，更安全</text></svg>', caption: '图3　从同样高度落下，落在硬地作用时间短、受力大；落在软垫作用时间长、受力小。' }
    ],
    exercises: [
      { type: 'choice', question: '关于冲量，下列说法正确的是？', options: ['冲量就是动量', '冲量 I = F × Δt，是力在时间上的累积', '冲量越大物体速度一定越大', '冲量的方向与速度方向相同'], answer: '冲量 I = F × Δt，是力在时间上的累积', explanation: '冲量是力在一段时间内的累积效果，定义为 I = F × Δt，单位是牛·秒。动量是 m×v，是某一时刻物体运动状态的量，二者概念不同。冲量的方向与力的方向相同，不一定与速度方向相同。冲量大只说明力作用的时间长或力大，并不直接决定速度大小。' },
      { type: 'choice', question: '动量定理的表达式是？', options: ['F = m × a', 'F × Δt = Δp', 'p = m × v', 'W = F × s'], answer: 'F × Δt = Δp', explanation: '动量定理指出，物体所受合外力的冲量等于它动量的变化量，表达式为 F × Δt = Δp = m×v′ − m×v。它是矢量关系，应用时必须先规定正方向。F = m×a 是牛顿第二定律，p = m×v 是动量定义，W = F×s 是功的表达式，都不是动量定理。' },
      { type: 'choice', question: '跳远运动员落地时总要屈膝，这是为了？', options: ['减小动量变化量', '延长作用时间从而减小受力', '增大受到的冲量', '改变落地时的动量方向'], answer: '延长作用时间从而减小受力', explanation: '运动员落地时动量从某一值减到零，动量变化 Δp 是一定的。屈膝可以延长身体与地面作用的时间 Δt，根据 F = Δp / Δt，作用时间越长，受到的平均作用力越小，从而减轻对关节和骨骼的冲击，保护身体不受伤。' },
      { type: 'fill', question: '物体动量变化量 Δp 一定时，作用时间 Δt 越长，受到的平均作用力 F 越___（填"大"或"小"）。', answer: '小', explanation: '由动量定理 F × Δt = Δp 可得 F = Δp / Δt。当动量变化量 Δp 固定时，平均作用力 F 与作用时间 Δt 成反比。因此延长作用时间可以减小受力，这就是缓冲、安全气囊、软垫保护背后的共同原理。' },
      { type: 'fill', question: '用动量定理列式时，式子中的 F 必须是物体受到的___（填"合外力"或"某一个力"）。', answer: '合外力', explanation: '动量定理中的冲量是合外力的冲量，因此式子 F × Δt = Δp 里的 F 指的是物体所受的合外力，而不是某一个单独的力。例如物体在竖直方向受冲击时，既要考虑冲击力，也要把重力算进合外力里，否则会得到错误结果。' }
    ]
  });
})();
