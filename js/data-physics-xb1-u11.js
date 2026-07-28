/* ============================================================
 * 高二物理 · 选择性必修第一册 · 第二章 机械振动
 * 课时11：实验：用单摆测量重力加速度
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u11',
    name: '实验：用单摆测量重力加速度',
    chapter: '选择性必修第一册 · 第二章 机械振动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验目的与原理' },
      { type: 'paragraph', text: '我们已经知道，小角度下单摆的周期 T = 2π × √(l / g)。如果把公式两边变形，就能得到 g = 4π² × l / T²。也就是说，只要测出摆长 l 和周期 T，就算出当地的重力加速度 g。这就是用单摆测 g 的实验，它设备简单、结果却相当准确。' },
      { type: 'keypoint', label: '重点·实验原理', text: '<strong>由单摆周期公式 T = 2π × √(l / g) 变形得到 g = 4π² × l / T²。</strong>实验中只要准确测出摆长 l 和周期 T，代入公式就能算出当地的重力加速度 g。' },
      { type: 'paragraph', text: '为什么能这样测？因为单摆的周期只和摆长、g 有关。在同一地点 g 是固定的，所以我们只要把 l 和 T 量准，算出来的 g 就准。这个方法比直接"落体法"测 g 更省事，一根绳、一个球、一把尺、一只表就能做。' },
      { type: 'list', items: ['细线一根（尽量轻、不可伸长）', '小钢球一个（密度大、体积小，可看作质点）', '铁架台和夹子（固定悬点）', '米尺（测摆长）、游标卡尺（测摆球直径）', '停表（测 n 次全振动的总时间）'] },
      { type: 'heading', text: '二、实验步骤' },
      { type: 'paragraph', text: '先把细线一端用夹子固定在铁架台上，另一端系好小钢球，做成单摆。让摆球静止下垂，这就是平衡位置。接着测量摆长：用米尺量出悬点到摆球顶部的距离，再用游标卡尺量出摆球直径，摆长 l 等于这两段相加（悬点到球心）。' },
      { type: 'keypoint', label: '重点·摆长的正确测法', text: '<strong>摆长 l = 悬点到摆球中心的距离 = 悬点到摆球顶部的距离 + 摆球半径。</strong>不能直接把绳子长度当成摆长，那样会漏掉摆球半径那一段，使结果偏小。' },
      { type: 'list', items: ['让摆球从小于约 5 度的偏角释放，不要推它，让它自由摆动', '在摆球经过最低点时开始计时并数"1"，之后每经过一次最低点加 1', '测出完成 n 次（如 50 次）全振动的总时间 t，则周期 T = t / n', '改变摆长，重复测量几组 l 和 T，最后求 g 的平均值减小误差'] },
      { type: 'example', label: '例题·根据数据求 g', text: '某同学测得摆长 l = 1.00 米，让单摆完成 50 次全振动共用时 100.0 秒。求当地重力加速度 g（取 π² ≈ 9.87）。<br><br><strong>解析</strong>：<br>周期 T = t / n = 100.0 / 50 = 2.00 秒。<br>由 g = 4π² × l / T² 得：g = 4 × 9.87 × 1.00 / (2.00)² = 39.48 / 4.00 ≈ 9.87 米/秒²。<br>结果与标准值很接近，说明测量较准确。' },
      { type: 'warn', label: '易错', text: '<strong>两个最常见的错误：</strong>第一，把"绳子长度"直接当摆长，忘了加摆球半径，导致 l 偏小、算出的 g 也偏小；第二，只测一次全振动的时间当周期，随机误差很大。<strong>应当测 n 次全振动的总时间再除以 n</strong>，并且从最低点开始/结束计时，因为最低点位置最容易看准。' },
      { type: 'table', headers: ['测量量', '怎么测', '注意事项'], rows: [['摆长 l', '悬点到球心距离 = 线长 + 半径', '用游标卡尺测直径，别漏半径'], ['周期 T', 'n 次全振动总时间 t 除以 n', 'n 取大些（如 50），从最低点计时'], ['重力加速度 g', '代入公式 g = 4π² × l / T²', '多测几组取平均更准']] },
      { type: 'tip', label: '提示', text: '<strong>减小误差的小窍门：</strong>摆角要小（约 5 度以内），这样才满足单摆近似；悬点要固定牢，别让绳子在夹子里滑动；计时要选摆球经过最低点的瞬间，因为那里速度最大、位置最易判断；摆球选密度大的金属球，可减小空气阻力影响。' },
      { type: 'heading', text: '三、误差分析与拓展' },
      { type: 'paragraph', text: '本实验的系统误差主要来自"摆长测不准"和"空气阻力、绳子质量不能完全忽略"。摆长如果少算了半径，g 就会算小。偶然误差主要来自计时，所以采用"测多次总时间再平均"的方法最有效。如果改变摆长得到多组 l 和 T²，还可以用图像法（l 对 T² 作图，斜率就是 g / 4π²）来求 g，更加直观可靠。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">实验装置与摆长的测量</text><rect x="150" y="60" width="10" height="180" fill="#234b45"/><rect x="120" y="240" width="70" height="12" fill="#234b45"/><circle cx="155" cy="60" r="6" fill="#234b45"/><line x1="155" y1="60" x2="155" y2="190" stroke="#2e9e8f" stroke-width="3"/><circle cx="155" cy="190" r="18" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><rect x="300" y="60" width="8" height="180" fill="#d6ece8" stroke="#2e9e8f" stroke-width="1"/><text x="330" y="80" font-size="12" fill="#234b45">米尺</text><line x1="200" y1="60" x2="200" y2="190" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="4,3"/><text x="210" y="130" font-size="13" fill="#234b45">摆长 l = 线长 + 摆球半径</text></svg>', caption: '图1　用铁架台固定单摆，摆长 l 是悬点到摆球中心的距离，等于线长加上摆球半径。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">在最低点开始计时并数全振动次数</text><circle cx="340" cy="60" r="6" fill="#234b45"/><line x1="340" y1="60" x2="340" y2="200" stroke="#2e9e8f" stroke-width="3"/><circle cx="340" cy="200" r="18" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><line x1="340" y1="60" x2="290" y2="180" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="5,4"/><line x1="340" y1="60" x2="390" y2="180" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="5,4"/><text x="340" y="250" font-size="14" fill="#1f7a6e" text-anchor="middle">从最低点出发，完成 n 次全振动记总时间 t，T = t / n</text></svg>', caption: '图2　从最低点开始计时并数全振动次数，用总时间除以次数得到周期，可减小计时误差。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">由周期公式推得重力加速度</text><rect x="90" y="90" width="500" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="135" font-size="20" fill="#234b45" text-anchor="middle">T = 2π × √(l / g)</text><text x="340" y="175" font-size="20" fill="#1f7a6e" text-anchor="middle">两边变形 → g = 4π² × l / T²</text><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">测出摆长 l 与周期 T，即可算出当地的 g</text></svg>', caption: '图3　把单摆周期公式变形，得到 g = 4π² × l / T²，这就是本实验的计算依据。' }
    ],
    exercises: [
      { type: 'choice', question: '本实验用单摆测量重力加速度，依据的原理公式是？', options: ['g = 4π² × l / T²', 'g = T² / (4π² × l)', 'g = 2π × √(l / T)', 'g = l × T² / (4π²)'], answer: 'g = 4π² × l / T²', explanation: '由单摆周期公式 T = 2π × √(l / g)，两边同时平方得 T² = 4π² × l / g，再整理就得到 g = 4π² × l / T²。其他几个式子都写反了或形式不对，只有这一项正确。实验中正是测出 l 和 T 后代入这个式子求 g。' },
      { type: 'choice', question: '本实验中的"摆长 l"指的是？', options: ['摆线的长度', '悬点到摆球中心的距离', '摆球的直径', '悬点到摆球顶部的距离'], answer: '悬点到摆球中心的距离', explanation: '单摆的摆长 l 是悬点到摆球中心（球心）的距离，它等于悬点到摆球顶部的距离加上摆球半径。只量绳子长度会漏掉摆球半径，使 l 偏小；摆球直径或悬点到球顶距离都不是完整摆长。正确测法是线长加半径。' },
      { type: 'choice', question: '为了提高周期的测量精度，下列做法正确的是？', options: ['只测一次全振动的时间当周期', '测 n 次全振动的总时间再除以 n', '从最高点开始计时最准', '摆角越大测得越准'], answer: '测 n 次全振动的总时间再除以 n', explanation: '一次全振动时间很短，只测一次随机误差很大，应当测 n 次（如 50 次）全振动的总时间 t，再用 T = t / n 求周期，这样误差被平均掉很多。应从最低点（速度最大、位置最易判断）计时，而不是最高点；摆角应小（约5度内），并非越大越准。' },
      { type: 'fill', question: '若测得摆长 l = 1.00 米，单摆完成 50 次全振动共用时 100 秒，则周期 T = ___ 秒。', answer: '2', explanation: '周期是指一次全振动的时间，应把总时间除以全振动次数：T = t / n = 100 秒 / 50 = 2.00 秒。这里关键是先求总时间与次数的商，不能直接把 100 秒当成周期，也不能用 50 除以 100。' },
      { type: 'fill', question: '实验中为了减小误差，摆角应较___（填"大"或"小"），通常不超过约 5 度。', answer: '小', explanation: '单摆周期公式 T = 2π × √(l / g) 只在偏角很小时才成立（此时近似为简谐运动）。如果摆角太大，运动不再是好的简谐近似，公式失效、误差变大。所以实验中通常让偏角小于约 5 度，即摆角要小。' }
    ]
  });
})();
