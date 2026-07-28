/* ============================================================
 * 高二物理 · 选择性必修第一册 · 第二章 机械振动
 * 课时7：简谐运动
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u7',
    name: '简谐运动',
    chapter: '选择性必修第一册 · 第二章 机械振动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、先把"弹簧振子"这个模型认识清楚' },
      { type: 'paragraph', text: '拿一根质量可以忽略的轻弹簧，左端固定在墙上，右端连一个小球，小球放在光滑的水平桌面上。用手把小球轻轻拉开一点，然后松手，小球就会在弹簧的拉扯下左右来回运动。像这样"一根轻弹簧 + 一个小球 + 光滑面"，就是物理学里最简单的振动模型——弹簧振子。' },
      { type: 'keypoint', label: '重点·弹簧振子模型', text: '弹簧振子是一个理想模型：<strong>忽略弹簧质量，忽略一切摩擦，小球只在弹簧弹力作用下运动。</strong>现实中的弹簧总有质量、桌面也总有摩擦，但我们先抓住"弹簧拉动小球来回运动"这个主要现象，把次要因素先丢开。' },
      { type: 'list', items: ['轻弹簧：质量忽略不计，只负责提供弹力，不占地、不耗能', '小球：看成一个有质量的质点，自身大小和形状忽略', '光滑面：桌面没有摩擦，小球运动只受弹簧弹力，不会被慢慢拖停'] },
      { type: 'paragraph', text: '小球静止不动时所在的位置，叫作平衡位置。此时弹簧既不拉长也不压缩，弹力为零。把小球拉开再放手后，它绕着这个位置左右来回摆动。' },
      { type: 'heading', text: '二、位移是怎么随时间变化的' },
      { type: 'paragraph', text: '我们说的"位移"，不是从墙上算，而是<strong>从小球的平衡位置算起</strong>。小球在平衡位置右边，位移记为正；在左边，记为负。小球来回运动，位移一会儿正、一会儿负，而且离平衡位置越远，位移的绝对值越大。' },
      { type: 'keypoint', label: '重点·位移公式', text: '简谐运动的位移随时间按余弦规律变化：<strong>x = A×cos(ωt+φ)</strong>。其中 x 是偏离平衡位置的位移，A 是振幅（最大位移的大小），ω 是角频率，t 是时间，φ 是初相位。这个式子告诉我们，小球的位置像余弦曲线一样起伏。' },
      { type: 'list', items: ['x：小球偏离平衡位置的位移，右边为正、左边为负', 'A：振幅，位移能达到的最大值，永远是正值', 'ω：角频率，反映振动快慢，越大晃得越快', 'φ：初相位，决定我们是从哪个瞬间开始计时的'] },
      { type: 'tip', label: '提示', text: '如果我们在小球刚被拉到最右边、准备松手的那一瞬间开始计时，那么一上来位移就是最大的 A，式子就简化成 x = A×cos(ωt)。<strong>余弦曲线一开始就从最高点出发，这点要记牢，做题经常用到。</strong>' },
      { type: 'example', label: '例题·代入公式求位移', text: '某弹簧振子从最右端开始计时，振幅 A = 0.1 米，角频率 ω = 2 弧度每秒。求 t = 0 时刻和 t = π/4 秒时的位移。<br><br><strong>解析：</strong><br>从最右端计时，x = A×cos(ωt) = 0.1×cos(2t)。<br>t = 0 时，x = 0.1×cos(0) = 0.1×1 = 0.1 米，在最右端，合理。<br>t = π/4 秒时，ωt = 2×(π/4) = π/2，cos(π/2) = 0，所以 x = 0.1×0 = 0，正好回到平衡位置。' },
      { type: 'paragraph', text: '小球从平衡位置出发，走到最右端，再回到平衡位置，走到最左端，最后又回到平衡位置——这一趟完整的来回，叫作"一次全振动"。做完一次全振动，小球的位置和速度都回到了最初的样子，可以周而复始地重复。' },
      { type: 'heading', text: '三、简谐运动的加速度有什么特征' },
      { type: 'paragraph', text: '小球被拉开后，弹簧要把它拉回平衡位置；越过平衡位置后，弹簧又把它往回推。所以不管小球在左边还是右边，加速度的方向<strong>总是指向平衡位置</strong>，和位移的方向正好相反。' },
      { type: 'keypoint', label: '重点·加速度特征', text: '简谐运动的加速度与位移大小成正比、方向总是指向平衡位置：<strong>a = −(k/m)×x</strong>，负号表示加速度方向与位移方向相反。位移越大，加速度越大；回到平衡位置时，位移为零，加速度也为零。' },
      { type: 'warn', label: '易错', text: '很多同学以为"在平衡位置速度最大，所以加速度也最大"。<strong>恰恰相反！平衡位置位移为零，加速度为零，是加速度最小的地方；速度最大是因为之前一直在被加速。</strong>最远端的加速度最大，但此刻速度恰好为零，这是最容易搞反的一对关系。' },
      { type: 'table', headers: ['小球所在位置', '位移 x', '加速度 a', '速度 v'], rows: [['最右端', '最大，记作 +A', '最大，方向指向左（平衡位置）', '0'], ['平衡位置', '0', '0', '最大'], ['最左端', '最大，记作 −A', '最大，方向指向右（平衡位置）', '0']] },
      { type: 'example', label: '例题·经过平衡位置', text: '弹簧振子从右向左经过平衡位置时，它的位移和加速度分别是多少？<br><br><strong>解析：</strong><br>经过平衡位置的瞬间，小球就在平衡位置，所以位移 x = 0。由 a = −(k/m)×x 可知，此时加速度 a 也等于 0。但要特别注意，此刻速度达到最大，小球正以最快的速度穿过平衡位置，只是这一瞬间既不被加速也不被减速。' },
      { type: 'paragraph', text: '一句话记住简谐运动：位移按余弦曲线起伏，加速度永远想把小球拉回平衡位置，且大小与位移成正比、方向相反。这既是简谐运动的特征，也是判断一个运动是不是简谐运动的核心标准。' },
      { type: 'list', items: ['模型：轻弹簧 + 小球 + 光滑面，忽略摩擦与弹簧质量', '位移 x 从平衡位置算起，随时间按 x = A×cos(ωt+φ) 变化', '加速度 a = −(k/m)×x，总指向平衡位置、与位移反向', '平衡位置加速度为零、速度最大；最远端加速度最大、速度为零'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">弹簧振子模型：轻弹簧 + 小球 + 光滑面</text><rect x="40" y="90" width="22" height="120" fill="#4fb3a5"/><text x="51" y="232" font-size="12" fill="#234b45" text-anchor="middle">墙</text><path d="M 62 150 L 95 128 L 128 172 L 161 128 L 194 172 L 227 128 L 260 172 L 293 128 L 326 172 L 359 150" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="410" cy="150" r="24" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="410" y="155" font-size="12" fill="#234b45" text-anchor="middle">小球</text><line x1="40" y1="190" x2="640" y2="190" stroke="#234b45" stroke-width="2"/><text x="640" y="210" font-size="12" fill="#234b45" text-anchor="end">光滑桌面</text><line x1="410" y1="60" x2="410" y2="250" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="410" y="270" font-size="12" fill="#234b45" text-anchor="middle">平衡位置</text></svg>', caption: '图1　弹簧振子由轻弹簧、小球和光滑桌面组成，小球静止处为平衡位置。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">位移随时间按余弦曲线起伏（x = A×cos(ωt)）</text><line x1="60" y1="170" x2="620" y2="170" stroke="#234b45" stroke-width="2"/><line x1="60" y1="60" x2="60" y2="250" stroke="#234b45" stroke-width="2"/><path d="M 60 90 C 120 90, 235 250, 290 250 C 345 250, 460 90, 520 90" fill="none" stroke="#2e9e8f" stroke-width="3"/><line x1="60" y1="170" x2="520" y2="170" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><circle cx="60" cy="90" r="6" fill="#4fb3a5"/><text x="70" y="80" font-size="12" fill="#234b45">t=0 时 x=+A（最右端）</text><circle cx="290" cy="250" r="6" fill="#4fb3a5"/><text x="300" y="270" font-size="12" fill="#234b45">最左端 x=−A</text><text x="600" y="160" font-size="12" fill="#234b45">时间 t</text><text x="40" y="150" font-size="12" fill="#234b45">位移 x</text></svg>', caption: '图2　从最右端开始计时，位移从最大正值出发，沿余弦曲线下降到最小负值再回到原点。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">加速度总指向平衡位置，与位移反向</text><line x1="340" y1="60" x2="340" y2="250" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="340" y="270" font-size="12" fill="#234b45" text-anchor="middle">平衡位置</text><circle cx="180" cy="160" r="22" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="165" font-size="12" fill="#234b45" text-anchor="middle">球(左)</text><polygon points="250,160 220,150 220,170" fill="#4fb3a5"/><line x1="200" y1="160" x2="250" y2="160" stroke="#4fb3a5" stroke-width="3"/><text x="180" y="200" font-size="12" fill="#234b45" text-anchor="middle">a 指向右</text><circle cx="500" cy="160" r="22" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="165" font-size="12" fill="#234b45" text-anchor="middle">球(右)</text><polygon points="430,160 460,150 460,170" fill="#4fb3a5"/><line x1="480" y1="160" x2="430" y2="160" stroke="#4fb3a5" stroke-width="3"/><text x="500" y="200" font-size="12" fill="#234b45" text-anchor="middle">a 指向左</text></svg>', caption: '图3　无论小球在平衡位置左侧还是右侧，加速度都指向平衡位置，与位移方向相反。' }
    ],
    exercises: [
      { type: 'choice', question: '关于弹簧振子模型，下列说法正确的是？', options: ['弹簧振子必须考虑弹簧的质量', '小球的大小形状不能忽略', '忽略摩擦，小球只在弹簧弹力作用下运动', '桌面必须有很大摩擦才能振动'], answer: '忽略摩擦，小球只在弹簧弹力作用下运动', explanation: '弹簧振子是一个理想模型，前提是忽略弹簧自身质量、忽略小球大小形状、忽略一切摩擦，使小球只在弹簧弹力作用下运动。现实弹簧有质量、桌面有摩擦，但建模时先抓住"弹簧拉小球来回运动"这个主要现象，把次要因素暂时丢开，这样才方便用公式描述。' },
      { type: 'choice', question: '简谐运动的位移 x 是从哪里开始算起的？', options: ['从固定墙算起', '从小球的平衡位置算起', '从地面算起', '从弹簧左端算起'], answer: '从小球的平衡位置算起', explanation: '简谐运动里讲的位移，专门指小球偏离平衡位置的距离和方向，在平衡位置右侧记为正、左侧记为负。如果从小球静止时的平衡位置算起，位移才能用 x = A×cos(ωt+φ) 这样整齐的余弦规律来表示；从墙或别处算起，式子就会变得复杂，所以统一规定从平衡位置算起。' },
      { type: 'choice', question: '弹簧振子经过平衡位置时，下列说法正确的是？', options: ['位移最大，加速度最大', '位移为零，加速度为零，速度最大', '位移为零，加速度最大', '速度为零，加速度最大'], answer: '位移为零，加速度为零，速度最大', explanation: '经过平衡位置的瞬间，小球就在平衡位置，所以位移 x = 0；由 a = −(k/m)×x 可知加速度也为 0；而此时小球已经积累了整个前半程的加速，速度达到最大，正以最快速度穿过平衡位置。最远端才是位移和加速度最大、速度为零的地方。' },
      { type: 'fill', question: '简谐运动的加速度与位移大小成正比、方向总是指向平衡位置，其关系可写成 a = −(k/m)×___（填物理量符号）。', answer: 'x', explanation: '简谐运动的加速度满足 a = −(k/m)×x，其中 x 是偏离平衡位置的位移。负号说明加速度方向始终与位移方向相反，即总是指向平衡位置；x 越大加速度越大，回到平衡位置时 x 为零、加速度也为零。这是判断一个运动是否为简谐运动的核心公式。' },
      { type: 'fill', question: '弹簧振子从最右端开始计时，位移公式为 x = A×cos(ωt)，则在 t = 0 时刻，小球位于___（填"最右端""平衡位置"或"最左端"）。', answer: '最右端', explanation: '把 t = 0 代入 x = A×cos(ωt) 得到 x = A×cos(0) = A×1 = A，是位移的最大正值，说明小球在平衡位置右侧最远处，即最右端。余弦曲线从最高点出发正是"从最右端开始计时"的特征，做题时看清计时起点就能直接写出简化公式。' }
    ]
  });
})();
