/* ============================================================
 * 高三复习 · 实验专题 · 专题一 力学实验
 * 课时5：验证机械能守恒定律
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u5',
    name: '验证机械能守恒定律',
    chapter: '实验专题 · 专题一 力学实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验要验证什么' },
      { type: 'paragraph', text: '物体自由下落时，高度越来越低、速度越来越快。减小的重力势能去哪儿了？它变成了动能。机械能守恒定律说：在只有重力做功时，物体的动能和重力势能互相转化，总和不变。这一课用打点计时器验证"减少的重力势能 = 增加的动能"。' },
      { type: 'list', items: ['打点计时器、纸带、重物（带夹子）、铁架台', '刻度尺、交流电源', '不选密度太小或体积太大的重物，以减小空气阻力影响'] },
      { type: 'heading', text: '二、实验装置和原理' },
      { type: 'paragraph', text: '把纸带一端夹在重物上，另一端穿过打点计时器，让重物自由下落，计时器在纸带上打点。选取一条点迹清晰的纸带，设某点速度为 v，从起点下落高度为 h，则减少的重力势能是 m g h，增加的动能是 (1/2) m v²。若 m g h ≈ (1/2) m v²，就验证了守恒。' },
      { type: 'keypoint', label: '重点·验证式', text: '<strong>验证机械能守恒，只需比较 m g h 与 (1/2) m v² 是否相等。</strong>质量 m 在两边都有，可以约掉，所以本实验不需要测重物质量，只要测下落高度 h 和对应速度 v。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">自由下落：重力势能转化为动能</text><rect x="300" y="60" width="70" height="40" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="335" y="85" font-size="12" fill="#234b45" text-anchor="middle">计时器</text><line x1="335" y1="100" x2="335" y2="250" stroke="#234b45" stroke-width="2"/><text x="350" y="120" font-size="12" fill="#234b45">纸带</text><rect x="318" y="120" width="34" height="30" rx="4" fill="#4fb3a5"/><text x="335" y="140" font-size="12" fill="#234b45" text-anchor="middle">重物</text><line x1="365" y1="135" x2="365" y2="240" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5 4"/><text x="430" y="190" font-size="13" fill="#234b45">下落高度 h</text><text x="335" y="280" font-size="12" fill="#234b45" text-anchor="middle">减小的势能 m g h = 增加的动能 (1/2) m v²</text></svg>', caption: '图1　重物自由下落，减少的重力势能 m g h 转化为动能 (1/2) m v²。' },
      { type: 'heading', text: '三、速度 v 怎么求' },
      { type: 'paragraph', text: '纸带上某点的速度不能用 v = g t 算（那样就默认守恒了，成了循环论证）。要用"中间时刻速度等于平均速度"的方法：取该点前后相邻两段位移 x₁、x₂，对应时间都是 T，则 v = (x₁ + x₂) / (2T)。这样 v 是实测出来的，再拿去和 g h 比较才公平。' },
      { type: 'list', items: ['在纸带上选第 1、2、3…点，相邻计数点间隔 T（常为 0.02 s 或 0.04 s）', '第 n 点速度 vₙ = (xₙ + xₙ₊₁) / (2T)，x 为该点前后两段位移', '该点相对起点下落高度 hₙ 用刻度尺从纸带量出', '计算 g hₙ 与 (1/2) vₙ²，看是否近似相等'] },
      { type: 'example', label: '例题·验证守恒', text: '例：某点下落高度 h = 0.196 m，用纸带测得该点速度 v = 1.96 m/s，g = 9.8 m/s²。验证是否守恒。<br><strong>解析</strong>：减少的势能对应 g h = 9.8 × 0.196 = 1.9208（单位是 m²/s²，即 J/kg）；增加的动能 (1/2) v² = 0.5 × 1.96² = 0.5 × 3.8416 = 1.9208。两者相等，说明机械能守恒。注意两边都可除以 m。' },
      { type: 'warn', label: '易错', text: '<strong>千万别用 v = g t 去求速度来验证守恒，那是循环论证。</strong>验证实验的速度必须来自纸带实测（平均速度法）。另外 h 要从"第一个清晰点"量起，且重物要靠近计时器释放，减少初段摩擦带来的点不清晰。' },
      { type: 'heading', text: '四、误差从哪来' },
      { type: 'paragraph', text: '实验中纸带与计时器有摩擦，空气也有阻力，所以一部分机械能变成了内能，导致测得的动能 (1/2) m v² 会略小于 m g h，这是正常的系统误差。只要两者相差不大（在允许范围内），就认为守恒成立。' },
      { type: 'table', headers: ['可能的误差', '原因', '处理'], rows: [['动能略小于势能', '摩擦和空气阻力', '属系统误差，允许略有偏差'], ['点迹不清晰', '释放时纸带松弛', '重物贴近计时器、纸带先拉直'], ['h 量错', '起点没找准', '选点迹清楚处作起点重测']] },
      { type: 'keypoint', label: '重点·结论表述', text: '<strong>在实验误差范围内，重物自由下落时减少的重力势能等于增加的动能，机械能守恒。</strong>表述时一定要加"在误差范围内"，因为摩擦使动能略小于势能是不可避免的。' },
      { type: 'heading', text: '五、另一种思路：看 v²-h 是否直线' },
      { type: 'paragraph', text: '把验证式 m g h = (1/2) m v² 两边同除以 m 并整理，得到 v² = 2 g h。若以 h 为横轴、v² 为纵轴描点，应得到一条过原点的直线，斜率约为 2 g。这也是常用的图像验证法，比逐点比较更整体。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">v²-h 图像：斜率应约为 2g</text><line x1="90" y1="250" x2="630" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="250" x2="90" y2="60" stroke="#234b45" stroke-width="2"/><text x="70" y="55" font-size="13" fill="#234b45">v²</text><text x="618" y="270" font-size="13" fill="#234b45">h</text><line x1="90" y1="250" x2="580" y2="80" stroke="#2e9e8f" stroke-width="3"/><circle cx="200" y="210" r="4" fill="#4fb3a5"/><circle cx="320" y="170" r="4" fill="#4fb3a5"/><circle cx="440" y="130" r="4" fill="#4fb3a5"/><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">斜率 ≈ 2g，说明 v² = 2 g h</text></svg>', caption: '图2　画 v²-h 图，过原点直线斜率约为 2g，即验证了机械能守恒。' },
      { type: 'tip', label: '提示', text: '<strong>选纸带要挑"第一、二点间距约 2 mm"的。</strong>因为计时器打点周期 0.02 s，自由落体在 0.02 s 内下落约 (1/2) g (0.02)² ≈ 2 mm。这样的纸带说明是"先通电、后释放"，初速度接近零，数据才可靠。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">能量转化：势能↔动能</text><rect x="110" y="100" width="200" height="90" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="210" y="135" font-size="13" fill="#234b45" text-anchor="middle">高处、速度小</text><text x="210" y="160" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">势能大动能小</text><rect x="370" y="100" width="200" height="90" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="470" y="135" font-size="13" fill="#234b45" text-anchor="middle">低处、速度大</text><text x="470" y="160" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">势能小动能大</text><text x="340" y="225" font-size="12" fill="#234b45" text-anchor="middle">总和不变：机械能守恒</text></svg>', caption: '图3　下落过程势能减小、动能增大，二者总和保持不变。' },
      { type: 'paragraph', text: '小结：验证机械能守恒，关键是速度要实测（平均速度法），不能套公式；比较 g h 与 (1/2) v² 即可，质量可约去。摩擦使动能略小属正常误差。' },
      { type: 'warn', label: '易错', text: '<strong>本实验不用天平测质量，很多同学白忙活。</strong>因为 m 在 g h 和 (1/2) m v² 两边都出现，可以约掉，只需测 h 和 v。但若用图像法 v² = 2 g h，连 g 都能从斜率估出来，更妙。' }
    ],
    exercises: [
      { type: 'choice', question: '验证机械能守恒定律时，求纸带上某点速度应该用？', options: ['v = g t 直接算', '用平均速度法 v = (x₁ + x₂)/(2T)', '用 v = 2 g h', '凭感觉估'], answer: '用平均速度法 v = (x₁ + x₂)/(2T)', explanation: '验证实验的速度必须实测，取该点前后两段位移之和除以两倍时间间隔，即 v = (x₁ + x₂)/(2T)。若用 v = g t 就默认了守恒，属于循环论证，是错误的。' },
      { type: 'choice', question: '本实验是否需要用天平测出重物质量 m？', options: ['必须测，否则算不出能量', '不需要，m 在等式两边可约掉', '只需测一次', '必须用电子秤'], answer: '不需要，m 在等式两边可约掉', explanation: '验证式 m g h = (1/2) m v² 两边都有 m，可同时约去，只需测下落高度 h 和速度 v，无需测质量。这是本实验的一大便利。' },
      { type: 'choice', question: '实验中发现动能 (1/2) m v² 略小于 m g h，原因是？', options: ['机械能不守恒', '摩擦和空气阻力消耗了部分能量，属正常系统误差', '计算错误', '重力变大了'], answer: '摩擦和空气阻力消耗了部分能量，属正常系统误差', explanation: '纸带摩擦和空气阻力把一小部分机械能变成了内能，所以实测动能略小于减少的势能，这是系统误差，在允许范围内仍认为守恒成立。' },
      { type: 'fill', question: '验证机械能守恒的比较式（约去 m 后）可写为 g h = ___，其中 h 是下落高度、v 是该点速度。', answer: '(1/2) v²|0.5 v²', explanation: '由 m g h = (1/2) m v² 约去 m 得 g h = (1/2) v²。只要实测的 g h 与 (1/2) v² 近似相等，即可认为机械能守恒。注意 h 和 v 要对应同一点。' },
      { type: 'fill', question: '若画 v²-h 图像，应得到过原点的直线，其斜率理论上约为 ___（用 g 表示）。', answer: '2g', explanation: '由 g h = (1/2) v² 整理得 v² = 2 g h，故以 h 为横轴、v² 为纵轴时图像斜率应为 2 g。斜率接近 2 g 即验证了守恒，也可借此估算 g。' }
    ]
  });
})();
