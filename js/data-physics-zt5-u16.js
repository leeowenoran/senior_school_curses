/* ============================================================
 * 高三复习 · 计算压轴 · 专题四 实验计算
 * 课时16：力学实验数据处理与误差计算
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u16',
    name: '力学实验数据处理与误差计算（逐差法求加速度、图像斜率求 k、有效数字）',
    chapter: '计算压轴 · 专题四 实验计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、打点计时器与纸带测量' },
      { type: 'paragraph', text: '打点计时器每过固定时间 T（常用 0.02 s）在纸带上打一个点。测量相邻两点间的距离，就能得到物体在每段相等时间 T 内的位移。我们记这些位移为 s₁、s₂、s₃…。如果物体做匀变速直线运动，连续相等时间内的位移差是个常数：Δs = a × T²，这就是求加速度的根本依据。' },
      { type: 'keypoint', label: '重点·位移差公式', text: '<strong>匀变速直线运动：相邻相等时间 T 内的位移差恒定，Δs = sₙ₊₁ − sₙ = a × T²。</strong><br>由它可求加速度 a = Δs / T²。' },
      { type: 'list', items: ['打点周期 T = 0.02 s（电源频率 50 Hz）', '每 5 个点取一个计数点，则相邻计数点时间间隔为 5T = 0.1 s', '测量位移用毫米刻度尺，估读到毫米下一位', '纸带判断运动方向：点迹变疏表示加速，变密表示减速'] },
      { type: 'heading', text: '二、逐差法求加速度' },
      { type: 'paragraph', text: '如果只有两组位移差，偶然误差大。科学家想出"逐差法"：把多段位移分成前后两半，用后半段减前半段，从而让每段数据都用上，误差最小。比如测得 6 段位移 s₁~s₆（每段时间间隔 T），则加速度 a = [(s₄+s₅+s₆) − (s₁+s₂+s₃)] / (9 × T²)。' },
      { type: 'keypoint', label: '重点·逐差法公式', text: '<strong>a = [(s₄+s₅+s₆) − (s₁+s₂+s₃)] / (9 × T²)（6 段位移、每段间隔 T）。</strong><br>本质是"后三段之和减前三段之和"，除以 9T²（因为跨了 3 个间隔，3×3=9）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">纸带逐差法：把 6 段位移分两组</text><line x1="80" y1="180" x2="600" y2="180" stroke="#234b45" stroke-width="2"/><rect x="80" y="150" width="70" height="20" fill="#d6ece8" stroke="#2e9e8f" stroke-width="1.5"/><text x="115" y="164" font-size="12" fill="#234b45" text-anchor="middle">s₁</text><rect x="170" y="150" width="70" height="20" fill="#d6ece8" stroke="#2e9e8f" stroke-width="1.5"/><text x="205" y="164" font-size="12" fill="#234b45" text-anchor="middle">s₂</text><rect x="260" y="150" width="70" height="20" fill="#d6ece8" stroke="#2e9e8f" stroke-width="1.5"/><text x="295" y="164" font-size="12" fill="#234b45" text-anchor="middle">s₃</text><rect x="350" y="150" width="70" height="20" fill="#4fb3a5"/><text x="385" y="164" font-size="12" fill="#234b45" text-anchor="middle">s₄</text><rect x="440" y="150" width="70" height="20" fill="#4fb3a5"/><text x="475" y="164" font-size="12" fill="#234b45" text-anchor="middle">s₅</text><rect x="530" y="150" width="70" height="20" fill="#4fb3a5"/><text x="565" y="164" font-size="12" fill="#234b45" text-anchor="middle">s₆</text><text x="200" y="210" font-size="13" fill="#234b45" text-anchor="middle">前半组 s₁+s₂+s₃</text><text x="480" y="210" font-size="13" fill="#234b45" text-anchor="middle">后半组 s₄+s₅+s₆</text><text x="340" y="280" font-size="13" fill="#234b45" text-anchor="middle">a = [(s₄+s₅+s₆)−(s₁+s₂+s₃)] / (9T²)</text></svg>', caption: '图1　逐差法：将 6 段位移分成前后两组相减，充分利用数据、减小误差。' },
      { type: 'example', label: '例题·逐差法', text: '例：打点计时器纸带测得相邻计数点位移（每段 T = 0.1 s）为 s₁=3.0 cm、s₂=3.6 cm、s₃=4.2 cm、s₄=4.8 cm、s₅=5.4 cm、s₆=6.0 cm。求加速度 a。<br><strong>解析</strong>：前半组和 = 3.0+3.6+4.2 = 10.8 cm；后半组和 = 4.8+5.4+6.0 = 16.2 cm。a = (16.2 − 10.8) / (9 × 0.1²) cm/s² = 5.4 / 0.09 = 60 cm/s² = 0.60 m/s²。' },
      { type: 'heading', text: '三、用图像斜率求物理量 k' },
      { type: 'paragraph', text: '很多实验是"画一条直线，用它的斜率求未知量"。最常见的 v–t 图像：横轴时间 t、纵轴速度 v，直线的斜率为加速度 a = Δv / Δt。所以只要画出 v–t 图并求斜率，就得到加速度，比逐差法更直观。' },
      { type: 'keypoint', label: '重点·斜率即待求量', text: '<strong>v–t 图像的斜率 = 加速度 a = (v₂ − v₁) / (t₂ − t₁)。</strong><br>图像法取线上相距较远的两点求斜率，能进一步减小读数误差。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">v–t 图像：斜率 = 加速度 a</text><rect x="90" y="70" width="500" height="200" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="120" y1="250" x2="560" y2="250" stroke="#234b45" stroke-width="2"/><line x1="120" y1="90" x2="120" y2="250" stroke="#234b45" stroke-width="2"/><text x="335" y="278" font-size="13" fill="#234b45" text-anchor="middle">时间 t</text><text x="100" y="100" font-size="13" fill="#234b45">速度 v</text><line x1="160" y1="220" x2="520" y2="100" stroke="#4fb3a5" stroke-width="3"/><circle cx="220" cy="200" r="5" fill="#234b45"/><circle cx="460" cy="140" r="5" fill="#234b45"/><line x1="220" y1="200" x2="460" y2="200" stroke="#2e9e8f" stroke-width="1.5" stroke-dasharray="4"/><line x1="460" y1="140" x2="460" y2="200" stroke="#2e9e8f" stroke-width="1.5" stroke-dasharray="4"/><text x="340" y="235" font-size="12" fill="#234b45" text-anchor="middle">Δt</text><text x="485" y="175" font-size="12" fill="#234b45">Δv</text><text x="335" y="300" font-size="13" fill="#234b45" text-anchor="middle">取两点：a = Δv / Δt = 斜率</text></svg>', caption: '图2　v–t 图像是一条直线，其斜率等于加速度；取相距较远的两点求斜率更准。' },
      { type: 'list', items: ['描点后画"最能代表趋势"的直线，不一定要过每个点', '求斜率取线上两点，用 Δy / Δx，单位一起算', '弹簧弹力 F 与伸长量 x 的 F–x 图，斜率 = 劲度系数 k', '匀速直线运动 x–t 图斜率 = 速度 v'] },
      { type: 'heading', text: '四、误差与有效数字' },
      { type: 'paragraph', text: '任何测量都有误差。误差分系统误差（仪器不准、方法缺陷，多次测也消除不了）和偶然误差（读数起伏，可多次测量取平均减小）。报告结果时还要写对"有效数字"——从左边第一个非零数字起，到最后一位估读数字止，都是有效数字。' },
      { type: 'keypoint', label: '重点·有效数字规则', text: '<strong>有效数字：从左边第一个非零数字到末位（含估读位）的所有数字。</strong><br>加减法看"小数点后位数最少"的；乘除法看"有效数字最少"的来决定结果位数。' },
      { type: 'table', headers: ['运算', '结果保留规则', '例子'], rows: [['加减', '与小数点后位数最少的相同', '1.23 + 4.5 = 5.7'], ['乘除', '与有效数字最少的相同', '1.2 × 3.45 = 4.1'], ['常数 π、g', '视为无限位，不限结果', '取比测量值多一位'], ['末位', '与测量估读位对齐', '尺读 2.34 cm 估读到 0.01']] },
      { type: 'warn', label: '易错', text: '<strong>有效数字不是"小数位数"！0.0123 是三位有效数字，前面的零只是定位用；而 12.30 是四位有效数字，末尾零算数。</strong><br>计算题结果若题目给了两位有效数字的数据，答案一般也保留两位，别多写一堆位数显得"精确"。' },
      { type: 'example', label: '例题·有效数字', text: '例：用刻度尺量得位移 s = 12.3 cm（三位有效数字），时间 t = 0.20 s（两位）。求平均速度 v = s / t，结果保留合适位数。<br><strong>解析</strong>：v = 12.3 / 0.20 = 61.5 cm/s。除法结果应与有效数字最少的（0.20 是两位）一致，故取 62 cm/s（两位有效数字），即约 0.62 m/s。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">刻度尺读数：估读到毫米下一位</text><rect x="60" y="150" width="560" height="26" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="60" y1="150" x2="60" y2="176" stroke="#234b45" stroke-width="2"/><line x1="160" y1="150" x2="160" y2="176" stroke="#234b45" stroke-width="2"/><line x1="260" y1="150" x2="260" y2="176" stroke="#234b45" stroke-width="2"/><line x1="360" y1="150" x2="360" y2="176" stroke="#234b45" stroke-width="2"/><line x1="460" y1="150" x2="460" y2="176" stroke="#234b45" stroke-width="2"/><line x1="560" y1="150" x2="560" y2="176" stroke="#234b45" stroke-width="2"/><text x="60" y="140" font-size="12" fill="#234b45">0</text><text x="260" y="140" font-size="12" fill="#234b45">2</text><text x="460" y="140" font-size="12" fill="#234b45">4 cm</text><line x1="362" y1="140" x2="362" y2="186" stroke="#4fb3a5" stroke-width="3"/><text x="362" y="210" font-size="13" fill="#234b45" text-anchor="middle">读数 ≈ 2.03 cm（估读一位）</text><text x="335" y="290" font-size="13" fill="#234b45" text-anchor="middle">毫米以下要估读，2.03 是三位有效数字</text></svg>', caption: '图3　刻度尺读数要估读到最小分度下一位，例如 2.03 cm 为三位有效数字。' },
      { type: 'tip', label: '提示', text: '<strong>实验计算三板斧：逐差法求 a、图像斜率求 k、有效数字管结果。</strong><br>拿到数据先想清楚求什么、用哪招；写答案时统一单位并保留符合题意的有效数字，避免被扣"结果不规范"。' },
      { type: 'paragraph', text: '力学实验的核心是"把测量值变成物理量的准确数值"。逐差法和图像法都服务于"减小偶然误差"，而有效数字和误差分析则是实验报告是否规范、是否得满分的关键。' }
    ],
    exercises: [
      { type: 'choice', question: '打点计时器电源频率为 50 Hz，纸带上相邻两点时间间隔 T 为？', options: ['0.01 s', '0.02 s', '0.1 s', '0.2 s'], answer: '0.02 s', explanation: '打点计时器交流电频率 50 Hz，周期 T = 1 / f = 1 / 50 = 0.02 s，即每 0.02 s 打一个点。若每 5 个点取一个计数点，则相邻计数点间隔为 5T = 0.1 s。本题问相邻两点，故选 0.02 s。' },
      { type: 'choice', question: '关于逐差法求加速度 a = [(s₄+s₅+s₆)−(s₁+s₂+s₃)] / (9T²)，其目的主要是？', options: ['让公式更复杂显得专业', '充分利用数据、减小偶然误差', '只使用前三段数据', '避免使用时间 T'], answer: '充分利用数据、减小偶然误差', explanation: '逐差法把 6 段位移分成前后两组相减，使每一段位移都参与运算，而不是只用相邻两段之差，从而充分利用数据、有效减小读数带来的偶然误差。它不是为了复杂，而是为了更准确，且公式中明确要用时间间隔 T。' },
      { type: 'choice', question: '在 v–t 图像中，直线的斜率表示的物理量是？', options: ['位移', '速度', '加速度', '时间'], answer: '加速度', explanation: 'v–t 图像纵轴是速度 v、横轴是时间 t，斜率 = Δv / Δt，正等于加速度 a。所以画 v–t 图并求斜率是求加速度的常用图像法。位移由图线下的面积表示，速度由纵轴读取。' },
      { type: 'fill', question: '某数 0.0123 的有效数字位数是 ___ 位；而 12.30 的有效数字位数是 ___ 位。', answer: '3|4', explanation: '有效数字从左边第一个非零数字起算。0.0123 中前面两个 0 只起定位作用不算，从 1 开始有 1、2、3 共三位；12.30 中末尾的 0 是估读位也算数，共 1、2、3、0 四位。两空分别填 3 和 4。' },
      { type: 'fill', question: '纸带 6 段位移每段间隔 T = 0.1 s，s₁+s₂+s₃ = 9.0 cm，s₄+s₅+s₆ = 16.2 cm，则加速度 a = ___ m/s²。', answer: '0.80', explanation: '逐差法 a = [(s₄+s₅+s₆) − (s₁+s₂+s₃)] / (9T²)。代入：分子 = 16.2 − 9.0 = 7.2 cm，分母 = 9 × 0.1² = 0.09 s²，得 a = 7.2 / 0.09 = 80 cm/s² = 0.80 m/s²。注意单位换算，结果保留两位有效数字为 0.80 m/s²。' }
    ]
  });
})();
