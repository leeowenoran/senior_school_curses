/* ============================================================
 * 高二物理 · 选择性必修第一册 · 第二章 机械振动
 * 课时8：简谐运动的描述
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u8',
    name: '简谐运动的描述',
    chapter: '选择性必修第一册 · 第二章 机械振动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、振幅 A：振动有多大幅度' },
      { type: 'paragraph', text: '简谐运动来回摆动，小球最远能离开平衡位置多远？这个"最远的距离"就叫振幅，记作 A。它描述振动的幅度大小，振幅越大，摆动得越开。' },
      { type: 'keypoint', label: '重点·振幅 A', text: '振幅 A 是<strong>振动物体离开平衡位置的最大距离</strong>，也就是位移能达到的绝对值的最大值。振幅永远是正值，单位是米，它只反映振动的强弱（幅度大小），不反映快慢。' },
      { type: 'warn', label: '易错', text: '振幅 A 和某时刻的位移 x 不是一回事。<strong>位移 x 是随时变化的，一会儿正一会儿负；而振幅 A 是固定不变的最大距离，永远是正值。</strong>比如振幅 A = 0.1 米，某一瞬间位移可能是 +0.06 米、−0.03 米或 0，但它们都不会超过 ±0.1 米。' },
      { type: 'heading', text: '二、周期 T 与频率 f：振动有多快' },
      { type: 'paragraph', text: '完成一次全振动要花多少时间？这个时间叫周期，记作 T，单位是秒。每秒能完成多少次全振动？这个次数叫频率，记作 f，单位是赫兹（Hz）。显然，周期越长，频率越小，振动越慢。' },
      { type: 'keypoint', label: '重点·周期与频率的关系', text: '周期 T 和频率 f 互为倒数：<strong>T = 1 / f</strong>，也写成 f = 1 / T。周期表示"做一次全振动的时间"，频率表示"每秒做几次全振动"，二者本质都在描述振动的快慢，知道一个就能算出另一个。' },
      { type: 'list', items: ['周期 T：完成一次全振动所需的时间，单位秒（s）', '频率 f：每秒完成的全振动次数，单位赫兹（Hz）', '关系：T = 1/f，或 f = 1/T，互为倒数', '周期越大振动越慢，频率越大振动越快'] },
      { type: 'example', label: '例题·周期与频率互算', text: '某弹簧振子每秒完成 2 次全振动，求它的频率 f 和周期 T。<br><br><strong>解析：</strong><br>每秒完成 2 次全振动，频率 f = 2 Hz。<br>由 T = 1/f = 1/2 = 0.5 秒，所以周期 T = 0.5 秒，即每半个钟头（半秒）完成一次全振动。' },
      { type: 'table', headers: ['物理量', '符号', '含义', '单位'], rows: [['振幅', 'A', '离开平衡位置的最大距离', '米（m）'], ['周期', 'T', '一次全振动的时间', '秒（s）'], ['频率', 'f', '每秒全振动的次数', '赫兹（Hz）']] },
      { type: 'heading', text: '三、相位：描述振动"走到了哪一步"' },
      { type: 'paragraph', text: '两个振幅相同、周期相同的振子，为什么看起来位置不一样？因为一个可能刚被拉到最右端，另一个可能已经回到平衡位置。这种"在同一时刻处于振动的哪一步"，由式子里的"ωt+φ"决定，这一整体就叫相位。' },
      { type: 'keypoint', label: '重点·相位与初相位', text: '相位就是 <strong>ωt+φ</strong>，它决定了振子在某一时刻的运动状态（位置和速度方向）。其中 t = 0 时的相位 φ 叫初相位，它告诉我们"是从哪一步开始计时的"。两个振子即使 A、ω 相同，只要 φ 不同，步调就不一致。' },
      { type: 'tip', label: '提示', text: '判断初相位 φ 有一个小窍门：<strong>看 t = 0 时小球在哪。</strong>若一上来在最右端（x = +A），则 φ = 0，式子变成 x = A×cos(ωt)；若一上来在平衡位置且向左运动，则 φ = π/2。把"开始计时那一刻的状态"和 φ 对应起来，题目就好做了。' },
      { type: 'heading', text: '四、一次全振动：一个完整的来回' },
      { type: 'paragraph', text: '从平衡位置出发，到最右端，回平衡位置，到最左端，再回平衡位置——这一整圈回到起点（位置和速度方向都相同），就叫一次全振动。周期 T 就是完成这一次全振动所花的时间。' },
      { type: 'list', items: ['振幅 A 描述幅度大小，是固定正值，不等于某时刻的位移', '周期 T 与频率 f 互为倒数：T = 1/f', '相位 ωt+φ 决定振子此刻走到了哪一步，初相位 φ 决定计时起点', '一次全振动后，振子的位置和速度方向都与初始完全相同'] },
      { type: 'example', label: '例题·判断全振动', text: '弹簧振子从平衡位置向右运动开始计时，到它再次从平衡位置向右运动，算完成了几次全振动？这段时间等于几个周期？<br><br><strong>解析：</strong><br>从"平衡位置向右"出发，再次回到"平衡位置向右"，位置和速度方向都和最初一模一样，正好是一个完整的来回，所以完成了一次全振动。这段时间正好等于一个周期 T，而不是半个周期——半周期时它虽回到平衡位置，但速度方向是向左的，不算同一状态。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">振幅 A：离开平衡位置的最大距离</text><line x1="340" y1="60" x2="340" y2="250" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="340" y="270" font-size="12" fill="#234b45" text-anchor="middle">平衡位置</text><circle cx="340" cy="160" r="20" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="340" y1="160" x2="500" y2="160" stroke="#4fb3a5" stroke-width="3"/><polygon points="500,160 470,152 470,168" fill="#4fb3a5"/><text x="420" y="145" font-size="12" fill="#234b45">A</text><circle cx="500" cy="160" r="18" fill="#4fb3a5"/><text x="500" y="200" font-size="12" fill="#234b45" text-anchor="middle">最右端</text><line x1="340" y1="160" x2="180" y2="160" stroke="#4fb3a5" stroke-width="3"/><polygon points="180,160 210,152 210,168" fill="#4fb3a5"/><circle cx="180" cy="160" r="18" fill="#4fb3a5"/><text x="180" y="200" font-size="12" fill="#234b45" text-anchor="middle">最左端</text></svg>', caption: '图1　小球离平衡位置最远的两端距离都是振幅 A，振幅是固定不变的正值。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">周期 T：完成一次全振动的时间</text><line x1="60" y1="170" x2="620" y2="170" stroke="#234b45" stroke-width="2"/><path d="M 60 90 C 120 90, 235 250, 290 250 C 345 250, 460 90, 520 90" fill="none" stroke="#2e9e8f" stroke-width="3"/><line x1="60" y1="60" x2="60" y2="250" stroke="#234b45" stroke-width="2"/><line x1="520" y1="60" x2="520" y2="250" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="290" y="275" font-size="12" fill="#234b45" text-anchor="middle">一个周期 T</text><text x="60" y="285" font-size="12" fill="#234b45" text-anchor="middle">起点</text><text x="520" y="285" font-size="12" fill="#234b45" text-anchor="middle">回到同一步调</text></svg>', caption: '图2　从某一步调出发，再次回到完全相同的步调，所经历的时间就是一个周期 T。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">初相位不同，两个振子步调不一致</text><line x1="60" y1="170" x2="620" y2="170" stroke="#234b45" stroke-width="2"/><path d="M 60 90 C 120 90, 235 250, 290 250 C 345 250, 460 90, 520 90" fill="none" stroke="#2e9e8f" stroke-width="3"/><path d="M 60 170 C 115 170, 235 90, 290 90 C 345 90, 465 250, 520 250" fill="none" stroke="#4fb3a5" stroke-width="3" stroke-dasharray="6,4"/><text x="90" y="80" font-size="12" fill="#234b45">振子甲 φ=0（从最右端出发）</text><text x="90" y="200" font-size="12" fill="#234b45">振子乙 φ≠0（步调错开）</text></svg>', caption: '图3　两条曲线振幅和快慢相同，只因初相位不同，同一时刻所处的位置就不一样。' }
    ],
    exercises: [
      { type: 'choice', question: '关于振幅 A，下列说法正确的是？', options: ['振幅就是某一时刻的位移', '振幅可能为负值', '振幅是离开平衡位置的最大距离，恒为正', '振幅越大的弹簧振子周期越长'], answer: '振幅是离开平衡位置的最大距离，恒为正', explanation: '振幅 A 是振子离开平衡位置的最大距离，是固定不变的正值，反映振动幅度大小；而位移 x 是随时变化的、可正可负。振幅只描述强弱，与周期长短没有直接关系，周期由振动系统本身决定，不会因为振幅变大而变长。' },
      { type: 'choice', question: '一个弹簧振子每秒完成 4 次全振动，它的周期 T 是？', options: ['4 秒', '0.25 秒', '1 秒', '2 秒'], answer: '0.25 秒', explanation: '频率 f 是每秒完成的全振动次数，所以 f = 4 Hz。由周期与频率的关系 T = 1/f 可得 T = 1/4 = 0.25 秒。即每四分之一秒完成一次全振动，周期短说明振动得很快。' },
      { type: 'choice', question: '两个振子振幅和角频率都相同，但看起来步调不一致，这是因为？', options: ['振幅不同', '周期不同', '初相位 φ 不同', '频率不同'], answer: '初相位 φ 不同', explanation: '当振幅 A 和角频率 ω 都相同时，位移公式 x = A×cos(ωt+φ) 里唯一能造成差异的就是初相位 φ。φ 不同，表示两个振子从不同的"步调"开始计时，所以同一时刻所处的位置和速度方向就不一致，看起来步调错开。' },
      { type: 'fill', question: '周期 T 与频率 f 互为倒数，写成公式就是 T = 1 / ___。', answer: 'f', explanation: '周期 T 表示完成一次全振动所需的时间，频率 f 表示每秒完成的全振动次数，二者互为倒数，关系式为 T = 1/f（也可写 f = 1/T）。周期越长，频率越小，振动越慢；周期越短，频率越大，振动越快。' },
      { type: 'fill', question: '弹簧振子从最右端开始计时，此时位移最大为正 A，对应初相位 φ = ___（填数字）。', answer: '0', explanation: '位移公式 x = A×cos(ωt+φ)，把 t = 0、x = A 代入得 A = A×cos(φ)，即 cos(φ) = 1，所以 φ = 0。也就是说，从最右端（位移最大正值）开始计时，初相位为零，公式简化为 x = A×cos(ωt)。这是最常见的计时起点。' }
    ]
  });
})();
