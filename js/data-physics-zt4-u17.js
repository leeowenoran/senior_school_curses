/* ============================================================
 * 高三复习 · 实验专题 · 专题三 热学、光学与其他实验
 * 课时17：用双缝干涉测量光的波长
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u17',
    name: '用双缝干涉测量光的波长',
    chapter: '实验专题 · 专题三 热学、光学与其他实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是双缝干涉' },
      { type: 'paragraph', text: '光是一种波。当一束光同时穿过两条靠得很近的狭缝（双缝）后，在两缝后面的屏上会出现一条条明暗相间的条纹，这就是双缝干涉现象。明条纹是光波"加强"的地方，暗条纹是光波"抵消"的地方。条纹之间距离相等，叫条纹间距，记作 Δx。通过测 Δx，就能反推出这束光的波长 λ。' },
      { type: 'keypoint', label: '重点·干涉条纹', text: '<strong>双缝干涉在屏上产生等间距的明暗条纹，相邻两明纹（或暗纹）之间的距离叫条纹间距 Δx。</strong>Δx 与波长 λ 成正比，因此测出 Δx 就能算出光的波长。' },
      { type: 'list', items: ['观察双缝干涉的明暗条纹', '测出条纹间距 Δx', '用公式 λ = Δx × d / L 算出光的波长'] },
      { type: 'heading', text: '二、实验装置与原理' },
      { type: 'paragraph', text: '实验用光源（常用激光或滤光后的单色光）照到双缝上，双缝后面放一个光屏（或带刻度尺的观测屏）。双缝间距 d 很小（约 0.1 毫米级），双缝到屏的距离 L 较大（约几十厘米到一米）。理论推导给出：条纹间距 Δx = L × λ / d。把式子变形就得到波长 λ = Δx × d / L。' },
      { type: 'list', items: ['光源（激光笔或单色光 + 滤光片）', '双缝（已知间距 d）', '屏（或带测量标尺）', '测量头、刻度尺、米尺'] },
      { type: 'keypoint', label: '重点·核心公式', text: '<strong>条纹间距 Δx = L × λ / d，故波长 λ = Δx × d / L。</strong>其中 L 是双缝到屏的距离，d 是双缝间距，Δx 是相邻明（暗）纹间距。只要这三个量测准，波长就算得准。' },
      { type: 'example', label: '例题·算波长', text: '例：双缝间距 d = 0.2 mm，双缝到屏距离 L = 0.8 m，测得相邻明纹间距 Δx = 2.0 mm。求光的波长 λ。<br><strong>解析</strong>：先把单位统一成米，d = 2×10⁻⁴ m，Δx = 2×10⁻³ m，L = 0.8 m。λ = Δx × d / L = 2×10⁻³ × 2×10⁻⁴ / 0.8 = 5×10⁻⁷ m = 500 nm。' },
      { type: 'warn', label: '易错', text: '<strong>公式里 L 是双缝到屏的距离，d 是双缝间距，千万别把两者弄反，也别用错单位。</strong>d 通常只有零点几毫米，L 是几十厘米，差一千倍。代入公式前必须把 d、Δx、L 统一成相同单位（都化成分米或米），否则波长会差上千倍。' },
      { type: 'heading', text: '三、测量条纹间距 Δx' },
      { type: 'paragraph', text: '单看相邻两条纹去量，读数误差较大。更稳妥的办法是：用测量头测出 n 条条纹的总宽度，再用总宽度除以 (n−1)，得到平均的 Δx。例如测出第 1 条到第 6 条明纹的总距离是 10.0 mm，则 Δx = 10.0 / (6−1) = 2.0 mm。' },
      { type: 'table', headers: ['测量对象', '物理量', '处理'], rows: [['双缝间距', 'd', '由双缝标签读出，注意单位'], ['缝到屏距离', 'L', '用米尺量，化米'], ['n 条总宽', 'W', 'W / (n−1) = Δx'], ['算波长', 'λ', 'λ = Δx × d / L']] },
      { type: 'list', items: ['测量头先对准某条明纹，记位置 x₁', '再数 n 条，对准第 n 条记 xₙ', '总宽 W = |xₙ − x₁|，Δx = W / (n−1)', '换不同位置多测几组，取平均 Δx'] },
      { type: 'tip', label: '提示', text: '<strong>不要只测相邻两条纹，误差大；应一次量多条、用 n−1 平均。</strong>测量时眼睛正对刻度，估读到分度值下一位。算出 λ 后再和已知值比较（红光约 630 nm、绿光约 530 nm、蓝光约 450 nm），可判断结果是否合理。' },
      { type: 'heading', text: '四、误差与注意事项' },
      { type: 'paragraph', text: '本实验主要误差来自：L 和 d 的数值不准、条纹位置读数误差、光源不是理想单色光（使条纹模糊）。为保证效果，要让双缝、屏、测量头大致共轴，屏要平整，环境尽量暗一些，使条纹更清晰、更易对准。' },
      { type: 'warn', label: '易错·单色光', text: '<strong>必须用单色光（如激光或加滤光片的光）做实验，白光会产生彩色重叠条纹，无法准确测 λ。</strong>若用普通白光，屏上中央是白色亮纹、两侧呈彩色，条纹间距不再单一，不能代入公式求波长。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">双缝干涉实验装置</text><circle cx="80" cy="160" r="14" fill="#4fb3a5"/><text x="80" y="195" font-size="12" fill="#234b45" text-anchor="middle">光源</text><rect x="240" y="140" width="16" height="40" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="248" y1="148" x2="248" y2="172" stroke="#234b45" stroke-width="2"/><line x1="252" y1="148" x2="252" y2="172" stroke="#234b45" stroke-width="2"/><text x="248" y="200" font-size="12" fill="#234b45" text-anchor="middle">双缝 d</text><rect x="560" y="90" width="20" height="180" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="570" y="290" font-size="12" fill="#234b45" text-anchor="middle">屏</text><line x1="94" y1="160" x2="240" y2="160" stroke="#234b45" stroke-width="2"/><line x1="256" y1="150" x2="560" y2="120" stroke="#4fb3a5" stroke-width="1.5"/><line x1="256" y1="170" x2="560" y2="200" stroke="#4fb3a5" stroke-width="1.5"/><text x="400" y="250" font-size="12" fill="#234b45" text-anchor="middle">距离 L（双缝到屏）</text></svg>', caption: '图1　双缝干涉装置：光源经双缝后在屏上成等间距明暗条纹，L 为缝到屏距离。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">明暗相间的等间距干涉条纹</text><rect x="60" y="70" width="560" height="160" fill="#ffffff" stroke="#2e9e8f" stroke-width="2"/><g fill="#234b45"><rect x="100" y="70" width="14" height="160"/><rect x="180" y="70" width="14" height="160"/><rect x="260" y="70" width="14" height="160"/><rect x="340" y="70" width="14" height="160"/><rect x="420" y="70" width="14" height="160"/><rect x="500" y="70" width="14" height="160"/></g><line x1="107" y1="245" x2="507" y2="245" stroke="#4fb3a5" stroke-width="2"/><text x="307" y="268" font-size="12" fill="#234b45" text-anchor="middle">Δx（相邻明纹间距）</text></svg>', caption: '图2　屏上明暗相间的等间距条纹，相邻两条明纹之间的距离就是条纹间距 Δx。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">多条测距求平均 Δx</text><line x1="120" y1="120" x2="560" y2="120" stroke="#234b45" stroke-width="3"/><g fill="#2e9e8f"><circle cx="140" cy="120" r="6"/><circle cx="220" cy="120" r="6"/><circle cx="300" cy="120" r="6"/><circle cx="380" cy="120" r="6"/><circle cx="460" cy="120" r="6"/><circle cx="540" cy="120" r="6"/></g><text x="140" y="100" font-size="12" fill="#234b45" text-anchor="middle">x₁</text><text x="540" y="100" font-size="12" fill="#234b45" text-anchor="middle">xₙ</text><line x1="140" y1="140" x2="540" y2="140" stroke="#4fb3a5" stroke-width="2"/><text x="340" y="165" font-size="12" fill="#234b45" text-anchor="middle">总宽 W = |xₙ − x₁|</text><text x="340" y="220" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">Δx = W / (n − 1)</text><text x="340" y="258" font-size="12" fill="#234b45" text-anchor="middle">一次量多条再平均，减小读数误差</text></svg>', caption: '图3　用测量头测第 1 条到第 n 条的位置，Δx = |xₙ − x₁| / (n − 1)。' }
    ],
    exercises: [
      { type: 'choice', question: '用双缝干涉测光的波长，相邻明纹间距 Δx 与哪些量有关（L 为缝到屏距离，d 为双缝间距，λ 为波长）？', options: ['Δx = L × d / λ', 'Δx = L × λ / d', 'Δx = d × λ / L', 'Δx = L + d'], answer: 'Δx = L × λ / d', explanation: '双缝干涉条纹间距公式为 Δx = L × λ / d。λ 越大、L 越大，条纹越疏；双缝间距 d 越大，条纹越密。由此可变形得波长 λ = Δx × d / L，这正是本实验求波长的依据。' },
      { type: 'choice', question: '关于双缝干涉实验，下列说法中正确的是？', options: ['白光也能准确测出单一波长', '必须用单色光才能得到清晰等间距条纹', '双缝间距越大条纹越疏', '条纹间距与波长无关'], answer: '必须用单色光才能得到清晰等间距条纹', explanation: '白光由多种波长组成，经双缝后各色光条纹位置不同，会重叠成彩色条纹，无法用单一公式求波长。只有用单色光（激光或加滤光片）才能得到清晰的等间距明暗条纹，从而准确测量 Δx 并算出 λ。' },
      { type: 'choice', question: '为减小条纹间距 Δx 的测量误差，下列做法最好的是？', options: ['只测相邻两条纹', '一次测多条条纹用 n−1 平均', '凭眼睛估计', '不读数直接写'], answer: '一次测多条条纹用 n−1 平均', explanation: '单看相邻两条纹读数，偶然误差大。应先对准第 1 条记 x₁，数 n 条后对第 n 条记 xₙ，用 Δx = |xₙ − x₁| / (n−1) 求平均间距，这样能把读数误差分摊，结果更可靠。' },
      { type: 'fill', question: '由条纹间距公式 Δx = L × λ / d，可得波长 λ = Δx × ___ / L（用双缝间距 d 表示）。', answer: 'd', explanation: '将 Δx = L × λ / d 两边同乘 d 再除以 L，得到 λ = Δx × d / L。测量时 L 是双缝到屏的距离，d 是双缝间距，Δx 是相邻明（暗）纹间距，三者统一单位后代入即可求波长。' },
      { type: 'fill', question: '若测出第 1 条到第 6 条明纹的总宽度为 10.0 mm，则平均条纹间距 Δx = ___ mm。', answer: '2.0', explanation: '从第 1 条到第 6 条之间共有 6 − 1 = 5 个间隔，所以平均条纹间距 Δx = 总宽 / (n−1) = 10.0 / 5 = 2.0 mm。这种一次量多条再除以间隔数的方法能有效减小读数误差。' }
    ]
  });
})();
