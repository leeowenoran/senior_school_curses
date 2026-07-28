/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题五 原子核
 * 课时3：核力、结合能与质量亏损（质能方程 E=mc²）
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u17-l1',
    name: '核力、结合能与质量亏损（质能方程 E=mc²）',
    chapter: '热学与近代物理 · 专题五 原子核',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、把核子粘在一起的核力' },
      { type: 'paragraph', text: '原子核里有那么多带正电的质子，按说同种电荷互相排斥，核早该被"撑爆"了。可原子核稳稳地存在，说明核子之间一定有另一种很强的吸引力把它牢牢拉住，这种力就叫核力。核力是比电磁力强得多的相互作用。' },
      { type: 'keypoint', label: '重点·核力', text: '<strong>核力是核子之间的强相互作用力。</strong>它的特点是：① 本领极强（远强于电磁力）；② <strong>短程</strong>，只在约 10⁻¹⁵ 米范围内起作用；③ 与电荷无关，质子和中子之间、质子之间、中子之间都有核力。' },
      { type: 'list', items: [
        '短程性：核力只在相邻核子间（约 10⁻¹⁵ 米）起作用，超出范围迅速消失',
        '强相互作用：在作用范围内核力远大于质子间的库仑斥力',
        '与电荷无关：质子—质子、中子—中子、质子—中子之间的核力几乎相同',
        '核力使原子核成为一个紧密结合的整体'
      ] },
      { type: 'heading', text: '二、结合能：把核拆开要花多少能量' },
      { type: 'paragraph', text: '既然核子被核力紧紧绑在一起，要把原子核拆回成单个的质子和中子，就得克服核力做功、输入能量。这个"拆开核所需的最小能量"叫结合能。反过来说，自由核子结合成原子核时，会放出同样多的能量。' },
      { type: 'keypoint', label: '重点·结合能与比结合能', text: '<strong>结合能</strong>是把原子核全部核子分开所需能量，也等于核子结合成核时放出的能量。<strong>比结合能</strong> = 结合能 ÷ 核子数，它反映核的稳固程度，比结合能越大，原子核越稳定。' },
      { type: 'heading', text: '三、质量亏损不是质量消失了' },
      { type: 'paragraph', text: '科学家发现一个奇怪的现象：原子核的实际质量，比组成它的所有核子单独存在时的质量之和要小一点点。这个差值就叫质量亏损。比如4个氢核聚成氦核，总质量会变小。注意，这里"质量少了"并不是质量凭空消失，而是这部分质量按质能方程转变成了能量放出来。' },
      { type: 'keypoint', label: '重点·质量亏损', text: '<strong>质量亏损 Δm = 组成核的所有核子质量之和 − 原子核的实际质量。</strong>它说明核子结合成原子核时释放了能量，亏损的质量以能量形式放出，并非质量"消失"。' },
      { type: 'warn', label: '易错', text: '<strong>质量亏损不等于质量守恒被打破，也不是质量凭空消失。</strong>在核反应中，核子的"质量数"（即核子个数）守恒成立，但静止质量并不守恒，亏损的静止质量按 ΔE=Δm·c² 转化为能量。此外，<strong>质量数守恒指的是核子总数不变，和质量（kg）是两回事</strong>，不要混淆。' },
      { type: 'heading', text: '四、质能方程 E = m×c²' },
      { type: 'paragraph', text: '爱因斯坦告诉我们：质量和能量是同一事物的两面，质量里"藏"着巨大的能量。一个质量为 m 的物体，对应的能量是 E = m×c²，其中 c 是光速（约 3.0×10⁸ m/s）。在核反应里，质量变化 Δm 对应能量变化 ΔE = Δm×c²。因为 c² 非常大，所以一点点质量亏损就能放出惊人能量。' },
      { type: 'keypoint', label: '重点·质能方程', text: '<strong>E = m×c²</strong> 表示质量为 m 的物体蕴含能量 E；<strong>ΔE = Δm×c²</strong> 表示质量变化 Δm 对应能量变化 ΔE。核反应中释放的能量就等于亏损质量乘以光速的平方。' },
      { type: 'example', label: '例题·用质能方程算能量', text: '已知 1 个原子质量单位 u ≈ 1.66×10⁻²⁷ kg，若某核反应亏损质量 Δm = 1 u，求释放的能量（取 c = 3.0×10⁸ m/s）。<br><strong>解析</strong>：<br>ΔE = Δm×c² = 1.66×10⁻²⁷ × (3.0×10⁸)² = 1.66×10⁻²⁷ × 9.0×10¹⁶ ≈ 1.49×10⁻¹⁰ J。换算成电子伏特约 931.5 MeV。所以 1 u 质量亏损约对应 931.5 MeV 能量。' },
      { type: 'tip', label: '提示', text: '<strong>实用换算：1 u（原子质量单位）对应的能量约为 931.5 MeV。</strong>做题时若质量亏损以 u 给出，直接乘 931.5 MeV/u 即可，不必每次都套 c²，既快又准。' },
      { type: 'list', items: [
        '比结合能越大，原子核越稳定',
        '中等质量数（约铁附近）的核比结合能最大，最稳定',
        '轻核聚变成中等核、重核裂变成中等核，都比结合能增大，都会释放能量',
        '质量亏损 Δm 与释放核能 ΔE 由 ΔE = Δm×c² 联系'
      ] },
      { type: 'table', headers: ['概念', '含义', '联系'], rows: [
        ['核力', '核子间强相互作用，短程', '使核子结合成核'],
        ['结合能', '拆开核所需能量', '核子结合时等量放出'],
        ['质量亏损 Δm', '核子质量之和 − 核质量', 'ΔE = Δm×c²'],
        ['比结合能', '结合能 ÷ 核子数', '越大核越稳定']
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">核力短程：只在相邻核子间起作用</text><circle cx="200" cy="170" r="22" fill="#4fb3a5"/><circle cx="260" cy="150" r="22" fill="#234b45"/><circle cx="250" cy="215" r="22" fill="#4fb3a5"/><circle cx="320" cy="185" r="22" fill="#234b45"/><circle cx="380" cy="150" r="22" fill="#4fb3a5"/><circle cx="380" cy="220" r="22" fill="#234b45"/><line x1="222" y1="160" x2="240" y2="158" stroke="#2e9e8f" stroke-width="3"/><line x1="272" y1="195" x2="305" y2="190" stroke="#2e9e8f" stroke-width="3"/><line x1="342" y1="175" x2="360" y2="168" stroke="#2e9e8f" stroke-width="3"/><line x1="402" y1="170" x2="355" y2="200" stroke="#2e9e8f" stroke-width="3" stroke-dasharray="4,3"/><text x="200" y="270" font-size="12" fill="#234b45" text-anchor="middle">相邻核子有核力</text><text x="430" y="210" font-size="12" fill="#234b45" text-anchor="middle">远处核力消失</text></svg>', caption: '图1　核力只在相邻核子（约 10⁻¹⁵ 米）间起作用，超出范围迅速消失。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">比结合能曲线：中等核最稳定</text><polyline points="80,270 200,140 320,90 440,150 560,230" fill="none" stroke="#2e9e8f" stroke-width="3"/><line x1="80" y1="280" x2="600" y2="280" stroke="#234b45" stroke-width="2"/><line x1="80" y1="280" x2="80" y2="60" stroke="#234b45" stroke-width="2"/><text x="90" y="300" font-size="12" fill="#234b45">轻核</text><text x="320" y="80" font-size="12" fill="#4fb3a5" text-anchor="middle">铁附近最高</text><text x="560" y="300" font-size="12" fill="#234b45">重核</text><text x="80" y="55" font-size="12" fill="#234b45">比结合能</text></svg>', caption: '图2　比结合能曲线：中等质量数（铁附近）最高，核最稳定；轻核、重核聚/裂成中等核都放能。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">质量亏损：结合时质量变小、放出能量</text><rect x="60" y="90" width="200" height="140" rx="12" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="160" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">自由核子</text><text x="160" y="160" font-size="13" fill="#234b45" text-anchor="middle">质量之和 m₁</text><polygon points="280,160 300,152 300,168" fill="#4fb3a5"/><line x1="260" y1="160" x2="290" y2="160" stroke="#4fb3a5" stroke-width="3"/><rect x="320" y="90" width="200" height="140" rx="12" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="420" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">原子核</text><text x="420" y="160" font-size="13" fill="#234b45" text-anchor="middle">实际质量 m₂</text><text x="420" y="200" font-size="13" fill="#4fb3a5" text-anchor="middle">m₂ &lt; m₁</text><circle cx="560" cy="160" r="20" fill="#4fb3a5"/><text x="560" y="165" font-size="13" fill="#234b45" text-anchor="middle">ΔE</text><text x="560" y="200" font-size="12" fill="#234b45" text-anchor="middle">放出能量</text><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">亏损 Δm = m₁ − m₂，ΔE = Δm×c²</text></svg>', caption: '图3　核子结合成原子核时总质量减小（质量亏损），差额按 ΔE=Δm×c² 转化为释放的能量。' }
    ],
    exercises: [
      { type: 'choice', question: '关于核力，下列说法正确的是？', options: ['核力是长程力', '核力比电磁力弱', '核力是短程的强相互作用，与电荷无关', '只有质子间才有核力'], answer: '核力是短程的强相互作用，与电荷无关', explanation: '核力是核子间的强相互作用，本领远大于电磁力；它是短程力，只在约 10⁻¹⁵ 米范围内起作用；且质子—质子、中子—中子、质子—中子之间核力几乎相同，与电荷无关。因此只有"核力是短程的强相互作用，与电荷无关"正确。' },
      { type: 'choice', question: '关于质量亏损，下列说法正确的是？', options: ['质量亏损表示质量凭空消失', '质量亏损是核子质量之和大于原子核质量', '质量数不守恒', '质量亏损与释放能量无关'], answer: '质量亏损是核子质量之和大于原子核质量', explanation: '质量亏损指组成核的所有核子单独质量之和大于原子核的实际质量，差值 Δm 对应的能量 ΔE = Δm×c² 在核子结合时放出。质量亏损不是质量消失，也不违反质量数（核子数）守恒。故只有"核子质量之和大于原子核质量"正确。' },
      { type: 'choice', question: '质能方程说明质量和能量的关系，其表达式为？', options: ['E = m×c', 'E = m×c²', 'E = m/c²', 'ΔE = Δm/c'], answer: 'E = m×c²', explanation: '爱因斯坦质能方程为 E = m×c²，其中 c 是光速。核反应中释放的能量与质量亏损的关系为 ΔE = Δm×c²。因为 c² 极大（约 9×10¹⁶），极小的质量亏损就能释放巨大能量。' },
      { type: 'fill', question: '原子核的结合能除以核子数叫做___，它越大表示原子核越___（填"稳定"或"不稳定"）。', answer: '比结合能 | 稳定', explanation: '比结合能 = 结合能 ÷ 核子数，它反映每个核子平均贡献的结合紧密程度。比结合能越大，原子核越难被拆开，也就越稳定。中等质量数（铁附近）的核比结合能最大。' },
      { type: 'fill', question: '若某核反应的质量亏损 Δm = 0.002 u，则释放的能量约为___ MeV（已知 1 u 对应约 931.5 MeV；结果取整数）。', answer: '1.9 | 2 | 1.86 | 约2', explanation: '由 ΔE = Δm × 931.5 MeV/u，得 ΔE = 0.002 × 931.5 ≈ 1.863 MeV，约 1.9 MeV（取整可写约2 MeV）。解题时直接用 1 u ≈ 931.5 MeV 的换算，可避免反复代入 c²。' }
    ]
  });
})();
