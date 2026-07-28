/* ============================================================
 * 高三复习 · 力学综合 · 专题一 运动学
 * 课时2：匀变速直线运动
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u2',
    name: '匀变速直线运动',
    chapter: '力学综合 · 专题一 运动学',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、匀变速直线运动与三个基本公式' },
      { type: 'paragraph', text: '匀变速直线运动，就是加速度 a 保持不变的直线运动。如果 a 与速度方向相同，物体做匀加速直线运动；如果相反，做匀减速直线运动。研究这类运动，最核心的是三个公式，只要知道其中几个量，就能求出其余的量。' },
      { type: 'list', items: ['加速度 a 恒定（大小和方向都不变）', '运动轨迹是直线', '速度随时间均匀变化，即每秒速度变化量相同', '分为匀加速（a 与 v 同向）和匀减速（a 与 v 反向）两类'] },
      { type: 'keypoint', label: '重点·三个基本公式', text: '<strong>速度公式：v = v₀ + a × t；位移公式：x = v₀ × t + ½ × a × t²；速度位移公式：v² − v₀² = 2 × a × x。</strong>其中 v₀ 是初速度，v 是末速度，a 是加速度，t 是时间，x 是位移。' },
      { type: 'table', headers: ['公式', '名称', '用途'], rows: [['v = v₀ + a × t', '速度公式', '已知初速度和加速度，求某时刻的速度'], ['x = v₀ × t + ½ × a × t²', '位移公式', '已知初速度、加速度和时间，求位移'], ['v² − v₀² = 2 × a × x', '速度位移公式', '不涉及时间时，直接联系速度与位移']] },
      { type: 'heading', text: '二、两个重要推论' },
      { type: 'paragraph', text: '从三个基本公式还能推出两个非常好用的结论。第一个关于"中间时刻的速度"，第二个关于"连续相等时间内的位移差"，做选择题和实验题时经常用到。' },
      { type: 'keypoint', label: '重点·推论1 中间时刻速度', text: '在匀变速直线运动中，<strong>某段过程的中间时刻瞬时速度，等于这段过程的平均速度，也等于初速度与末速度的平均值</strong>，即 v(t/2) = v平均 = (v₀ + v) / 2。' },
      { type: 'keypoint', label: '重点·推论2 位移差恒定', text: '在匀变速直线运动中，<strong>连续相等的时间 T 内，相邻两段位移之差是一个常数：Δx = a × T²</strong>。比如第1秒内走 x₁、第2秒内走 x₂，则 x₂ − x₁ = a × T²。' },
      { type: 'example', label: '例题·用位移差求加速度', text: '打点计时器纸带上，相邻计数点时间间隔 T = 0.1 s，测得连续三段位移 x₁ = 3.0 cm、x₂ = 5.0 cm、x₃ = 7.0 cm。求加速度。<br><strong>解析</strong>：相邻位移差 Δx = x₂ − x₁ = 2.0 cm，也等于 x₃ − x₂ = 2.0 cm，说明 Δx 恒定。由 Δx = a × T² 得 a = Δx / T² = 2.0 / 0.1² = 200 cm/s² = 2.0 m/s²。' },
      { type: 'heading', text: '三、初速度为零的匀加速比例' },
      { type: 'paragraph', text: '当物体从静止开始做匀加速直线运动时（v₀ = 0），把三个基本公式代进去，会得到一组漂亮的整数比例，记熟了能秒杀很多选择题。注意这些比例只在"初速度为零且加速度恒定"时才成立。' },
      { type: 'list', items: ['第1、2、3…n秒末的速度之比 = 1 : 2 : 3 : … : n', '前1、2、3…n秒内的位移之比 = 1² : 2² : 3² : … : n² = 1 : 4 : 9 : …', '第1、2、3…n秒内的位移之比 = 1 : 3 : 5 : … : (2n−1)', '通过连续相等位移所用时间之比 = 1 : (√2−1) : (√3−√2) : …'] },
      { type: 'table', headers: ['比较量', '比例', '举例(n=3)'], rows: [['第n秒末速度', '1 : 2 : 3', 'v₁ : v₂ : v₃ = 1 : 2 : 3'], ['前n秒位移', '1 : 4 : 9', 'x₁ : x₂ : x₃ = 1 : 4 : 9'], ['第n秒内位移', '1 : 3 : 5', '第1秒:第2秒:第3秒 = 1 : 3 : 5']] },
      { type: 'warn', label: '易错', text: '<strong>比例只适用于初速度为零的匀加速直线运动。</strong>若初速度不为零，或加速度在变化，这些比例全部失效。此外"前n秒位移 1:4:9"与"第n秒内位移 1:3:5"是不同的概念，前者是累积位移比，后者是每一秒各自位移比，不要混为一谈。' },
      { type: 'heading', text: '四、自由落体运动' },
      { type: 'paragraph', text: '自由落体是初速度为零、加速度为重力加速度 g 的匀加速直线运动的典型例子。物体只在重力作用下从静止开始下落，就近似为自由落体（忽略空气阻力）。g 在地球表面约为 9.8 m/s²，粗略计算常取 10 m/s²。' },
      { type: 'keypoint', label: '重点·自由落体公式', text: '自由落体是 v₀ = 0、a = g 的匀加速直线运动，套用基本公式得：<strong>速度 v = g × t，下落高度 h = ½ × g × t²</strong>；若已知高度求落地速度，用 v² = 2 × g × h。' },
      { type: 'tip', label: '提示', text: '<strong>自由落体是初速为零匀加速的特例，前面所有比例都适用。</strong>比如从塔顶自由释放，第1秒、第2秒、第3秒下落距离之比就是 1 : 3 : 5，前1秒、前2秒、前3秒总下落距离之比是 1 : 4 : 9。' },
      { type: 'example', label: '例题·自由落体', text: '一石子从静止自由下落，取 g = 10 m/s²，求第2秒末的速度和前2秒下落的高度。<br><strong>解析</strong>：v = g × t = 10 × 2 = 20 m/s；h = ½ × g × t² = ½ × 10 × 2² = 20 m。即第2秒末速度为20 m/s，前2秒共下落20米。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">匀变速直线运动的三个基本公式</text><rect x="60" y="70" width="180" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="150" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">速度公式</text><text x="150" y="124" font-size="13" fill="#234b45" text-anchor="middle">v = v₀ + a × t</text><rect x="250" y="70" width="180" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">位移公式</text><text x="340" y="124" font-size="13" fill="#234b45" text-anchor="middle">x = v₀ t + ½ a t²</text><rect x="440" y="70" width="180" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="530" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">速度位移</text><text x="530" y="124" font-size="13" fill="#234b45" text-anchor="middle">v² − v₀² = 2 a x</text><line x1="150" y1="160" x2="150" y2="200" stroke="#4fb3a5" stroke-width="3"/><line x1="340" y1="160" x2="340" y2="200" stroke="#4fb3a5" stroke-width="3"/><line x1="530" y1="160" x2="530" y2="200" stroke="#4fb3a5" stroke-width="3"/><text x="340" y="240" font-size="13" fill="#234b45" text-anchor="middle">三个公式由加速度恒定推出，可互相推导</text><text x="340" y="270" font-size="12" fill="#234b45" text-anchor="middle">已知部分量即可求未知量</text></svg>', caption: '图1　匀变速直线运动的三个核心公式，彼此可由加速度恒定这一条件推导得到。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">连续相等时间内位移差 Δx = a T²</text><rect x="60" y="80" width="120" height="40" rx="6" fill="#4fb3a5"/><rect x="190" y="80" width="160" height="40" rx="6" fill="#4fb3a5"/><rect x="360" y="80" width="200" height="40" rx="6" fill="#4fb3a5"/><text x="120" y="105" font-size="13" fill="#234b45" text-anchor="middle">第1个T: x₁</text><text x="270" y="105" font-size="13" fill="#234b45" text-anchor="middle">第2个T: x₂</text><text x="460" y="105" font-size="13" fill="#234b45" text-anchor="middle">第3个T: x₃</text><line x1="60" y1="150" x2="560" y2="150" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="4,3"/><text x="120" y="175" font-size="12" fill="#234b45" text-anchor="middle">T</text><text x="270" y="175" font-size="12" fill="#234b45" text-anchor="middle">T</text><text x="460" y="175" font-size="12" fill="#234b45" text-anchor="middle">T</text><text x="340" y="225" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">x₂ − x₁ = x₃ − x₂ = a × T²</text><text x="340" y="260" font-size="13" fill="#234b45" text-anchor="middle">相邻段位移差相等，可用来求加速度</text></svg>', caption: '图2　把时间分成相等的 T，每段位移之差恒定，等于 a × T²，这是求加速度的常用方法。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">自由落体：v = g t，h = ½ g t²</text><line x1="80" y1="60" x2="80" y2="250" stroke="#2e9e8f" stroke-width="2"/><line x1="80" y1="250" x2="600" y2="250" stroke="#2e9e8f" stroke-width="2"/><circle cx="80" cy="250" r="6" fill="#234b45"/><circle cx="200" cy="212" r="6" fill="#4fb3a5"/><circle cx="320" cy="138" r="6" fill="#4fb3a5"/><circle cx="440" cy="28" r="6" fill="#4fb3a5"/><line x1="80" y1="250" x2="440" y2="28" stroke="#234b45" stroke-width="2" stroke-dasharray="5,4"/><text x="100" y="270" font-size="12" fill="#234b45">t=0</text><text x="190" y="200" font-size="12" fill="#234b45">t₁</text><text x="310" y="126" font-size="12" fill="#234b45">t₂</text><text x="430" y="20" font-size="12" fill="#234b45">t₃</text><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">下落高度随时间平方增大，是初速为零匀加速的特例</text></svg>', caption: '图3　自由落体下落高度 h 随 t² 增大，对应 v-t 图像是一条过原点的倾斜直线。' }
    ],
    exercises: [
      { type: 'choice', question: '对于初速度为零的匀加速直线运动，下列说法正确的是？', options: ['第1、2、3秒末速度之比为1:2:3', '前1、2、3秒位移之比为1:2:3', '第1、2、3秒内位移之比为1:2:3', '这些比例也适用于初速度不为零的运动'], answer: '第1、2、3秒末速度之比为1:2:3', explanation: '初速度为零的匀加速直线运动，由 v = a t 得第1、2、3秒末速度之比等于时间比 1:2:3；前n秒位移 x = ½ a t² 之比为 1:4:9；第n秒内位移之比为 1:3:5。这些比例仅在初速度为零且加速度恒定时成立，初速度不为零时不适用。' },
      { type: 'choice', question: '在匀变速直线运动中，关于中间时刻速度，正确的是？', options: ['中间时刻速度等于初速度', '中间时刻速度等于末速度', '中间时刻速度等于平均速度，也等于(v₀+v)/2', '中间时刻速度一定大于末速度'], answer: '中间时刻速度等于平均速度，也等于(v₀+v)/2', explanation: '匀变速直线运动中一个重要推论是：某段过程的中间时刻瞬时速度，等于该段过程的平均速度，也等于初速度与末速度的算术平均值，即 v(t/2) = v平均 = (v₀ + v) / 2。这个结论在处理纸带和实验题时非常常用，能避开繁琐的加速度计算。' },
      { type: 'choice', question: '打点计时器实验中，相邻计数点时间间隔 T，测得连续位移 x₁、x₂、x₃，求加速度应使用的公式是？', options: ['a = (x₂−x₁)/T', 'a = (x₂−x₁)/T²', 'a = (x₃−x₁)/T', 'a = 2×(x₂−x₁)/T²'], answer: 'a = (x₂−x₁)/T²', explanation: '匀变速直线运动中，连续相等时间 T 内的位移差恒定，满足 Δx = a × T²，即 x₂ − x₁ = a × T²，所以 a = (x₂ − x₁) / T²。若用多段数据，常用 (x₃ − x₁) = 2 a T² 来减小误差，原理相同。' },
      { type: 'fill', question: '自由落体运动是初速度为零、加速度等于 ___ 的匀加速直线运动，其下落高度公式为 h = ___。', answer: 'g | ½ g t²', explanation: '自由落体是只在重力作用下从静止开始下落的运动，加速度为重力加速度 g（约9.8 m/s²，粗略取10）。套用初速为零的位移公式 x = ½ a t²，得到下落高度 h = ½ × g × t²。若已知高度求落地速度，则用 v² = 2 g h。' },
      { type: 'fill', question: '一物体做匀减速直线运动，初速度 v₀ = 10 m/s，加速度 a = −2 m/s²，则停止所需时间为 ___ 秒（用 v = v₀ + a t，令 v = 0 计算）。', answer: '5', explanation: '由速度公式 v = v₀ + a t，物体停下时末速度 v = 0。代入得 0 = 10 + (−2) × t，解得 t = 5 s。注意这里加速度取负值表示与初速度方向相反，做减速运动；算出时间后还要检查在这个时间内物体是否真的停下，避免"回头"的虚假解。' }
    ]
  });
})();
