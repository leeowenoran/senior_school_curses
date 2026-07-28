/* ============================================================
 * 高三复习 · 实验专题 · 专题一 力学实验
 * 课时1：用打点计时器/光电门测瞬时速度（研究匀变速直线运动）
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u1',
    name: '用打点计时器/光电门测瞬时速度（研究匀变速直线运动）',
    chapter: '实验专题 · 专题一 力学实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验目的' },
      { type: 'paragraph', text: '这一课我们要研究"匀变速直线运动"——也就是加速度保持不变的直线运动，比如沿斜面下滑的小车。实验的关键本领是：学会用打点计时器（或光电门）测出物体某一时刻的瞬时速度，再根据一组速度算出加速度。' },
      { type: 'list', items: ['打点计时器（电磁式或电火花式）、纸带、小车、一端带滑轮的长木板、刻度尺、交流电源', '光电门、挡光片、光电计时器（另一种测速方案）', '坐标纸或直接用刻度尺测量纸带上两点间的距离'] },
      { type: 'heading', text: '二、打点计时器是怎么打点的' },
      { type: 'paragraph', text: '打点计时器接在交流电源上，会每隔相同的一小段时间 T 在穿过它的纸带上打下一个点。把纸带连在小车上，小车运动时纸带被拉着经过计时器，就留下一长串点。相邻两个点之间的时间间隔就是 T。点越稀疏，说明那段时间车跑得越远、运动越快。' },
      { type: 'keypoint', label: '重点·打点周期', text: '<strong>打点周期由电源频率决定。</strong>我国交流电频率是 50 Hz，所以每两个点之间的时间 T = 1 / 50 = 0.02 s。如果题目说"每 5 个点取一个计数点"，那么相邻计数点之间的时间就是 5 × 0.02 = 0.1 s，而不是 0.02 s。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">实验装置：小车拖纸带过打点计时器</text><line x1="60" y1="220" x2="630" y2="170" stroke="#2e9e8f" stroke-width="4"/><rect x="90" y="120" width="80" height="46" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="130" y="148" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">打点计时器</text><line x1="170" y1="166" x2="380" y2="158" stroke="#234b45" stroke-width="2"/><text x="275" y="150" font-size="12" fill="#234b45" text-anchor="middle">纸带</text><rect x="330" y="120" width="80" height="34" rx="4" fill="#4fb3a5"/><text x="370" y="142" font-size="13" fill="#234b45" text-anchor="middle">小车</text><rect x="560" y="150" width="40" height="40" rx="4" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="580" y="206" font-size="12" fill="#234b45" text-anchor="middle">滑轮</text><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">小车沿斜面下滑，纸带被打下一串等时间间隔的点</text></svg>', caption: '图1　打点计时器实验装置：小车拖着纸带从计时器下经过，留下等时间间隔的点。' },
      { type: 'heading', text: '三、怎样从纸带求某点的瞬时速度' },
      { type: 'paragraph', text: '纸带上直接能读出来的是"位移"，不是"速度"。诀窍是：做匀变速直线运动的物体，在一段运动正中间时刻的瞬时速度，恰好等于这一段的平均速度。比如想求纸带上第 n 个点的速度 vₙ，就取它前面一段和后面一段的总位移，除以这两段对应的总时间，公式写成 vₙ ≈ (xₙ₊₁ − xₙ₋₁) / (2T)。' },
      { type: 'example', label: '例题·求瞬时速度', text: '例：纸带上相邻计数点 A、B、C、D 间距依次为 x₁ = 3.20 cm、x₂ = 4.00 cm、x₃ = 4.80 cm，相邻计数点时间间隔 T = 0.1 s。求 B 点的瞬时速度。<br><strong>解析</strong>：B 点在 A、C 正中间时刻，所以 v_B ≈ (x₂ + x₁) / (2T) = (4.00 + 3.20) cm / (0.2 s) = 7.20 cm / 0.2 s = 36.0 cm/s = 0.36 m/s。把前后两段位移加起来再除以两倍时间即可。' },
      { type: 'warn', label: '易错', text: '<strong>最容易错的是"时间间隔 T 到底是多少"。</strong>题目若说"每 5 个点取一个计数点"，则相邻计数点时间是 5×0.02 = 0.1 s；若说"相邻计数点间还有 4 个点未画出"，同样也是 0.1 s。看清是"点"还是"计数点"，否则整道题速度、加速度会差 5 倍。' },
      { type: 'heading', text: '四、用逐差法求加速度 a' },
      { type: 'paragraph', text: '匀变速直线运动中，在连续相等时间 T 内，相邻两段位移之差是常数：x₂ − x₁ = x₃ − x₂ = … = aT²。为减小误差，我们把多条纸带分成偶数段（如 6 段），用后半段之和减去前半段之和来求 a，这种方法叫逐差法。' },
      { type: 'list', items: ['把连续相等时间内的位移记为 x₁、x₂、…、x₆', '用公式 a = (x₄ + x₅ + x₆ − x₁ − x₂ − x₃) / (9 T²) 计算', '多做几次取平均值，或在坐标纸上画 v-t 图求斜率作为 a', '测量位移时用刻度尺一次读到位，估读到毫米下一位'] },
      { type: 'table', headers: ['计数点', '位移 x / cm', '速度 v / (m·s⁻¹)'], rows: [['A', '3.20', '0.28'], ['B', '4.00', '0.36'], ['C', '4.80', '0.44'], ['D', '5.60', '0.52']] },
      { type: 'tip', label: '提示', text: '<strong>求加速度有两个办法互相印证：</strong>一是逐差法直接套公式算 a；二是在坐标纸上以速度为纵轴、时间为横轴描点，连成直线后斜率就是 a。两种方法结果应接近，若差得远要检查数据或单位。' },
      { type: 'heading', text: '五、光电门测速度' },
      { type: 'paragraph', text: '光电门由发光器和接收器组成，中间是一道看不见的光束。小车前端装一片很窄的挡光片，经过光电门时遮住光，计时器记下遮光时间 Δt。已知挡光片宽度 d，则小车经过光电门的平均速度 v = d / Δt。因为挡光片很窄，这一小段平均速度就非常接近经过光电门那一刻的瞬时速度。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">光电门测瞬时速度</text><line x1="60" y1="180" x2="630" y2="180" stroke="#2e9e8f" stroke-width="4"/><rect x="300" y="150" width="80" height="30" rx="4" fill="#4fb3a5"/><rect x="338" y="146" width="6" height="38" fill="#234b45"/><text x="341" y="142" font-size="12" fill="#234b45" text-anchor="middle">d</text><rect x="150" y="120" width="26" height="60" rx="3" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="163" y="196" font-size="12" fill="#234b45" text-anchor="middle">光源</text><rect x="470" y="120" width="26" height="60" rx="3" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="483" y="196" font-size="12" fill="#234b45" text-anchor="middle">接收</text><line x1="176" y1="150" x2="470" y2="150" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="6 5"/><text x="323" y="214" font-size="12" fill="#234b45" text-anchor="middle">挡光片遮光，记遮光时间 Δt</text><text x="340" y="246" font-size="13" fill="#234b45" text-anchor="middle">v = d / Δt，d 越窄越接近瞬时速度</text></svg>', caption: '图2　光电门法：挡光片宽度 d 除以遮光时间 Δt 得瞬时速度。' },
      { type: 'keypoint', label: '重点·光电门公式', text: '<strong>光电门测速核心公式：v = d / Δt。</strong>其中 d 是挡光片宽度（要实际测量，别用题目没给的数），Δt 是遮光时间。挡光片越窄，平均速度越接近瞬时速度，测量越准。' },
      { type: 'heading', text: '六、匀变速直线运动的 v-t 图像' },
      { type: 'paragraph', text: '把算出的各时刻速度描在"速度—时间"坐标上，匀变速运动的点会排成一条斜直线。这条直线的斜率就是加速度 a（a = Δv / Δt），直线和横轴围成的梯形面积就是这段时间的位移。图像法既直观又能减小偶然误差。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">匀变速直线运动的 v-t 图像</text><line x1="90" y1="250" x2="630" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="250" x2="90" y2="60" stroke="#234b45" stroke-width="2"/><text x="80" y="55" font-size="13" fill="#234b45">v</text><text x="620" y="270" font-size="13" fill="#234b45">t</text><line x1="120" y1="240" x2="600" y2="80" stroke="#2e9e8f" stroke-width="3"/><circle cx="240" cy="200" r="4" fill="#4fb3a5"/><circle cx="360" cy="160" r="4" fill="#4fb3a5"/><circle cx="480" cy="120" r="4" fill="#4fb3a5"/><polygon points="500,100 492,120 512,116" fill="#2e9e8f"/><text x="520" y="96" font-size="13" fill="#1f7a6e" font-weight="bold">a = 斜率</text><rect x="300" y="200" width="120" height="50" fill="#4fb3a5" opacity="0.5"/><text x="360" y="232" font-size="12" fill="#234b45" text-anchor="middle">面积=位移</text></svg>', caption: '图3　v-t 图像是一条斜直线，斜率等于加速度 a，图像下方面积等于位移。' },
      { type: 'paragraph', text: '小结：无论是打点计时器还是光电门，本质都是"把瞬时速度转化为一小段位移和小段时间的比值"。打点法看纸带间距，光电门法看挡光宽度与遮光时间，最后都可用 v-t 图或逐差法求加速度。' },
      { type: 'warn', label: '易错', text: '<strong>单位换算和有效数字常被扣分。</strong>纸带位移多用厘米读出，代入公式前要统一成米（m）；速度单位用 m/s；加速度用 m/s²。读数要估读到最小分度的下一位，比如毫米刻度尺读到 0.1 mm。' }
    ],
    exercises: [
      { type: 'choice', question: '打点计时器接 50 Hz 交流电源时，相邻两个点之间的时间间隔是？', options: ['0.01 s', '0.02 s', '0.1 s', '0.5 s'], answer: '0.02 s', explanation: '打点周期由电源频率决定，T = 1 / f。频率 f = 50 Hz 时，T = 1 / 50 = 0.02 s。注意区分"点"和"计数点"：每 5 个点取一个计数点时，相邻计数点间隔才是 0.1 s。' },
      { type: 'choice', question: '用光电门测小车瞬时速度，已知挡光片宽度 d、遮光时间 Δt，速度应表示为？', options: ['v = d × Δt', 'v = d / Δt', 'v = Δt / d', 'v = d + Δt'], answer: 'v = d / Δt', explanation: '光电门中挡光片宽度为 d，遮光时间为 Δt，这段时间内小车平均速度为 d / Δt。因挡光片很窄，该平均速度近似等于经过光电门时的瞬时速度，故 v = d / Δt。' },
      { type: 'choice', question: '关于纸带求某点瞬时速度的方法，正确的是？', options: ['直接把相邻两点距离当速度', '用该点前后两段总位移除以对应总时间，即中间时刻速度等于平均速度', '必须用 x = v t 反推', '速度永远等于位移除以一个 T'], answer: '用该点前后两段总位移除以对应总时间，即中间时刻速度等于平均速度', explanation: '匀变速直线运动中，某段运动中间时刻的瞬时速度等于该段平均速度。因此第 n 点的速度 vₙ ≈ (xₙ₊₁ − xₙ₋₁)/(2T)，即用前后两段位移之和除以两倍时间间隔，不能直接把单段距离当速度。' },
      { type: 'fill', question: '我国交流电频率为 50 Hz，打点计时器相邻两个点（即一个打点周期）的时间 T = ___ s。', answer: '0.02', explanation: '打点周期 T = 1 / f = 1 / 50 = 0.02 s。这是纸带上相邻点的时间间隔；若取计数点，要把若干个 T 相乘得到计数点间隔。' },
      { type: 'fill', question: '在 v-t 图像中，匀变速直线运动图像是一条___直线，其斜率表示___。', answer: '斜|倾斜', explanation: '匀变速直线运动的 v-t 图像是一条倾斜的直线，直线的斜率为 Δv / Δt，正好等于加速度 a；图像与时间轴围成的面积则等于对应时间内的位移。' }
    ]
  });
})();
