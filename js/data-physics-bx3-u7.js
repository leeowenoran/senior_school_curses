/* ============================================================
 * 高一物理 · 必修 第三册 · 第十章 静电场中的能量
 * 课时7：电势差
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u7',
    name: '电势差',
    chapter: '必修第三册 · 第十章 静电场中的能量',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、电势差（电压）' },
      { type: 'paragraph', text: '两点之间的电势之差，叫做这两点的电势差，也常叫"电压"，用 U 表示。比如电场中 A 点电势为 φ_A，B 点电势为 φ_B，那么 A 到 B 的电势差就记作 U_AB，它等于 φ_A 减去 φ_B。电势差衡量的是"两点之间电势差了多少"，它和"零电势点选在哪里"没有关系，是一个绝对可比较的量，所以实际电路里我们更多谈论电压而不是电势。' },
      { type: 'keypoint', label: '重点·电势差 U_AB', text: '<strong>A、B 两点间的电势差 U_AB = φ_A − φ_B。</strong>电势差也叫电压，单位是伏特（V）。它只与两点在电场中的位置有关，与零电势点的选择无关。U_BA = −U_AB，交换两点顺序电势差反号。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电势差 U_AB = φ_A − φ_B</text><rect x="40" y="56" width="600" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="170" cy="160" r="16" fill="#4fb3a5"/><text x="170" y="195" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">A点 φ_A</text><circle cx="510" cy="160" r="16" fill="#4fb3a5"/><text x="510" y="195" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">B点 φ_B</text><line x1="186" y1="160" x2="494" y2="160" stroke="#234b45" stroke-width="3"/><polygon points="494,160 478,153 478,167" fill="#234b45"/><text x="340" y="120" font-size="14" fill="#234b45" text-anchor="middle">U_AB</text><text x="340" y="240" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">U_AB = φ_A − φ_B</text></svg>', caption: '图1　A、B 两点的电势差等于 A 点电势减去 B 点电势。' },
      { type: 'paragraph', text: '电势差有正负，但日常说"电压 5 V"通常指大小。在物理计算里要保留符号：U_AB 为正，表示 A 点比 B 点电势高；为负则表示 A 比 B 低。' },
      { type: 'list', items: ['电势差 U_AB = φ_A − φ_B，反映两点电势相差多少', '电势差与零电势点选在哪里无关，是绝对量', 'U_BA = −U_AB，把两点顺序反过来电势差要变号'] },
      { type: 'heading', text: '二、静电力做功与电势差的关系' },
      { type: 'paragraph', text: '既然电势能变化 Δ E_p = E_pB − E_pA = q × φ_B − q × φ_A = q × (φ_B − φ_A) = −q × U_AB，而静电力做功 W_AB 等于电势能的减少量，也就是 W_AB = q × U_AB。这个公式把"做功"和"电压"直接连起来：只要知道电荷量和两点电压，不必管路径，就能算出静电力做的功。' },
      { type: 'keypoint', label: '重点·W_AB = q × U_AB', text: '<strong>电荷 q 从 A 点移到 B 点，静电力做的功 W_AB = q × U_AB。</strong>其中 q、U_AB 都要带正负号代入。W_AB 为正表示静电力做正功，电势能减少；W_AB 为负表示静电力做负功，电势能增加。' },
      { type: 'example', label: '例题·用 W = q × U 求功', text: '把电荷量 q = 3 C 的正电荷从 A 点移到 B 点，已知 U_AB = 4 V。求静电力做的功，并判断电势能怎么变。<br><br><strong>解析</strong>：<br>W_AB = q × U_AB = 3 C × 4 V = 12 J。结果为正，说明静电力做正功 12 J，电荷的电势能减少了 12 J。若 U_AB 为负，则 W_AB 为负，静电力做负功，电势能反而增加。' },
      { type: 'warn', label: '易错', text: '<strong>公式 W_AB = q × U_AB 中，q 和 U_AB 都必须带符号代入。</strong>不少同学只代绝对值，结果功的正负全错。记住：正电荷从高电势移向低电势（U_AB > 0），静电力做正功；负电荷则相反。正负号直接决定电势能增还是减，不能随手丢掉。' },
      { type: 'list', items: ['W_AB = q × U_AB，做功只由电荷量和电压决定，与路径无关', 'q、U_AB 带符号代入，结果正负表示做功性质', '电势能变化量 Δ E_p = −W_AB，做功为正则势能减少'] },
      { type: 'heading', text: '三、等势面' },
      { type: 'paragraph', text: '电场中电势相等的点连成的面，叫做等势面。比如点电荷周围的等势面是一族同心球面，匀强电场里的等势面是一族平行的平面。等势面是研究电场的好帮手：它和电场线配合，能让我们"看见"电场的分布。' },
      { type: 'keypoint', label: '重点·等势面', text: '<strong>电场中电势相同的点构成的面叫等势面。</strong>在同一等势面上移动电荷，静电力不做功；等势面一定与电场线垂直；电场线总是指向电势降低的方向，所以等势面越密的地方电场越强。' },
      { type: 'table', headers: ['等势面性质', '含义', '应用'], rows: [['等势面上各点电势相等', '移动电荷静电力不做功', '判断做功是否为零'], ['等势面与电场线垂直', '沿等势面无电场分量', '由等势面画出电场线'], ['等势面越密电场越强', '电势变化快', '比较场强大小'], ['电场线指向电势降低', '沿电场线 φ 减小', '判断电势高低']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">等势面（虚线）与电场线（实线）处处垂直</text><rect x="40" y="56" width="600" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="120" y1="90" x2="560" y2="90" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="6,4"/><line x1="120" y1="150" x2="560" y2="150" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="6,4"/><line x1="120" y1="210" x2="560" y2="210" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="6,4"/><line x1="200" y1="70" x2="200" y2="230" stroke="#234b45" stroke-width="3"/><polygon points="200,230 194,214 206,214" fill="#234b45"/><line x1="340" y1="70" x2="340" y2="230" stroke="#234b45" stroke-width="3"/><polygon points="340,230 334,214 346,214" fill="#234b45"/><line x1="480" y1="70" x2="480" y2="230" stroke="#234b45" stroke-width="3"/><polygon points="480,230 474,214 486,214" fill="#234b45"/><text x="340" y="252" font-size="13" fill="#234b45" text-anchor="middle">实线电场线 ⊥ 虚线等势面</text></svg>', caption: '图2　等势面（虚线）与电场线（实线）处处垂直，沿等势面移动电荷不做功。' },
      { type: 'paragraph', text: '等势面能把抽象的电场"画"出来。常见的规律是：离带电体越近，等势面越密，说明那里电场越强；匀强电场中等势面是一族间距相等的平行平面。' },
      { type: 'example', label: '例题·等势面上的功', text: '一个电荷在某一等势面上从 P 点缓慢移到 Q 点，已知该等势面电势处处为 φ。问静电力做功多少？<br><br><strong>解析</strong>：<br>P、Q 在同一等势面上，电势相等，所以 U_PQ = φ_P − φ_Q = 0。由 W_PQ = q × U_PQ = q × 0 = 0，可知静电力做功为零。这也说明沿等势面移动电荷，电场力不做功。' },
      { type: 'warn', label: '易错', text: '<strong>在同一等势面上移动电荷，静电力一定不做功，但这不等于电荷不受静电力。</strong>电荷仍然受电场力，只是力的方向处处垂直于等势面（即沿电场线方向），而位移沿着等势面，力与位移垂直，所以不做功。不要误以为"不做功就是没有力"。' },
      { type: 'tip', label: '提示·从等势面看电场强弱', text: '<strong>等势面越密，电场越强。</strong>相邻等势面间的电势差相等时，间距越小说明单位距离内电势变化越快，场强越大。因此看一张等势面图，哪里线密哪里场强就大，哪里线疏场强就小。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">点电荷的等势面是一族同心圆（球面截线）</text><rect x="40" y="56" width="600" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="160" r="14" fill="#4fb3a5"/><text x="340" y="190" font-size="12" fill="#234b45" text-anchor="middle">+Q</text><circle cx="340" cy="160" r="40" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><circle cx="340" cy="160" r="75" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><circle cx="340" cy="160" r="110" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><line x1="340" y1="50" x2="340" y2="270" stroke="#234b45" stroke-width="2"/><polygon points="340,270 334,254 346,254" fill="#234b45"/><text x="340" y="252" font-size="13" fill="#234b45" text-anchor="middle">电场线沿半径向外，等势面为同心圆</text></svg>', caption: '图3　点电荷的等势面是一族同心圆（空间里是同心球面），电场线沿半径方向与之垂直。' }
    ],
    exercises: [
      { type: 'choice', question: '关于电势差 U_AB，下列说法正确的是？', options: ['U_AB = φ_A − φ_B', 'U_AB = φ_B − φ_A', '电势差与零电势点的选择有关', 'U_AB 与两点位置无关'], answer: 'U_AB = φ_A − φ_B', explanation: '电势差（电压）定义为两点电势之差，A、B 间的电势差 U_AB = φ_A − φ_B。它是两点位置决定的绝对量，与零电势点选在哪里无关。交换两点顺序有 U_BA = −U_AB，所以第二个选项把顺序写反了。' },
      { type: 'choice', question: '静电力做功与电势差的关系式是？', options: ['W_AB = q / U_AB', 'W_AB = q × U_AB', 'W_AB = U_AB / q', 'W_AB = φ_A × φ_B'], answer: 'W_AB = q × U_AB', explanation: '由电势能变化 Δ E_p = q × (φ_B − φ_A) = −q × U_AB，而静电力做功 W_AB = −Δ E_p，所以 W_AB = q × U_AB。这个公式中的 q 和 U_AB 都要带符号代入，结果正负表示静电力做功还是克服静电力做功。' },
      { type: 'choice', question: '关于等势面，下列说法正确的是？', options: ['等势面上各点电势不同', '等势面与电场线平行', '同一等势面上移动电荷静电力不做功', '等势面越疏电场越强'], answer: '同一等势面上移动电荷静电力不做功', explanation: '等势面上各点电势相等，因此在其上移动电荷时 U = 0，由 W = q × U 知静电力做功为零。等势面处处与电场线垂直，且等势面越密电场越强、越疏电场越弱。第二个选项说与电场线平行是错误的，应为垂直。' },
      { type: 'fill', question: '若 U_AB = φ_A − φ_B，则 U_BA = ___（用 U_AB 表示）。', answer: '−U_AB', explanation: '根据定义 U_BA = φ_B − φ_A = −(φ_A − φ_B) = −U_AB。电势差与两点顺序有关，交换起点和终点，电势差大小不变但符号相反。这一点在计算时要特别注意，避免把方向搞反。' },
      { type: 'fill', question: '把电荷 q 从 A 点移到 B 点，静电力做功 W_AB = q × U_AB。若 W_AB 为负，说明静电力做___功（填"正"或"负"）。', answer: '负', explanation: 'W_AB 为负，表示静电力做负功，也就是外力需要克服静电力做功。此时电荷的电势能增加，Δ E_p = −W_AB > 0。例如把正电荷逆着电场线从低电势移向高电势时，就会出现这种情况。' }
    ]
  });
})();
