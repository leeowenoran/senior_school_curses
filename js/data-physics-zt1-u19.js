/* ============================================================
 * 高三复习 · 力学综合 · 专题四 曲线运动与万有引力
 * 课时19：万有引力与天体
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u19',
    name: '万有引力与天体',
    chapter: '力学综合 · 专题四 曲线运动与万有引力',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、开普勒三定律' },
      { type: 'paragraph', text: '在牛顿之前，开普勒根据天文观测数据，总结出行星绕太阳运动的规律，叫开普勒三定律。它告诉我们行星走的不是正圆，而是椭圆，而且离太阳近时走得快、远时走得慢。这三条定律是万有引力定律的重要铺垫。' },
      { type: 'list', items: ['第一定律（轨道定律）：行星绕太阳的轨道是椭圆，太阳在椭圆的一个焦点上', '第二定律（面积定律）：行星与太阳的连线在相等时间内扫过相等的面积（近太阳处速度快）', '第三定律（周期定律）：所有行星轨道半长轴 a 的立方与周期 T 的平方之比相等，即 a³ / T² = k'] },
      { type: 'keypoint', label: '重点·开普勒第三定律', text: '<strong>a³ / T² = k</strong>（k 是与中心天体有关的常数）。也就是说，轨道半长轴 a 越大，公转周期 T 越长。对绕同一中心天体的卫星，这条规律同样成立。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">开普勒定律：椭圆轨道 + 面积定律</text><ellipse cx="340" cy="160" rx="200" ry="95" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="430" cy="160" r="9" fill="#4fb3a5"/><text x="430" y="185" font-size="12" fill="#234b45">太阳(焦点)</text><circle cx="180" cy="120" r="6" fill="#234b45"/><circle cx="500" cy="200" r="6" fill="#234b45"/><line x1="430" y1="160" x2="180" y2="120" stroke="#234b45" stroke-width="2"/><line x1="430" y1="160" x2="500" y2="200" stroke="#234b45" stroke-width="2"/><text x="250" y="135" font-size="12" fill="#234b45">面积1</text><text x="470" y="180" font-size="12" fill="#234b45">面积2</text></svg>', caption: '图1　行星沿椭圆轨道绕太阳（位于焦点）运动，在相等时间内太阳与行星连线扫过的面积相等。' },
      { type: 'heading', text: '二、万有引力定律' },
      { type: 'paragraph', text: '牛顿把地上苹果落地和天上月亮绕地统一起来，提出任何两个有质量的物体之间都存在相互吸引的力，这就是万有引力。它的大小和两物体质量的乘积成正比，和它们之间距离的平方成反比。' },
      { type: 'keypoint', label: '重点·万有引力公式', text: '两质点间的万有引力 <strong>F = G × m₁ × m₂ / r²</strong>，其中 G 是引力常量（G ≈ 6.67×10⁻¹¹ N·m²/kg²），r 是两质点中心之间的距离。' },
      { type: 'warn', label: '易错', text: '<strong>公式里的 r 是两个质点（或均匀球体球心）之间的距离，不是表面距离。</strong>对于地球上的物体，r 是从地心算起，不是从地面算起；对于两球，r 是球心距。另外，万有引力定律对"质点"或"均匀球体"严格成立，不能直接套用两个不规则物体的表面间距。' },
      { type: 'example', label: '例题·地面附近重力近似', text: '在地球表面附近，物体受地球的万有引力近似等于重力。若地球质量 M、半径 R，求地表重力加速度 g。<br><br><strong>解析</strong>：<br>地表物体 m 受万有引力 F = G M m / R²，近似等于重力 mg，所以 mg = G M m / R²，约去 m 得 g = G M / R²。这说明 g 由地球质量和半径决定。' },
      { type: 'heading', text: '三、万有引力提供向心力' },
      { type: 'paragraph', text: '行星、卫星绕中心天体做圆周运动（近似圆轨道），它们需要的向心力正是来自中心天体对它的万有引力。把万有引力公式和向心力公式联立，就能推出轨道半径越大时各个参量怎么变。' },
      { type: 'keypoint', label: '重点·万有引力 = 向心力', text: '由 <strong>G M m / r² = m v² / r = m ω² r = m (4π² / T²) r</strong> 可得：轨道半径 r 越大，线速度 v 越小、角速度 ω 越小、周期 T 越大、向心加速度 a 越小。即"越高越慢"。' },
      { type: 'list', items: ['v = √(G M / r)：r 越大 v 越小', 'ω = √(G M / r³)：r 越大 ω 越小', 'T = 2π √(r³ / (G M))：r 越大 T 越大', 'a = G M / r²：r 越大向心加速度越小'] },
      { type: 'tip', label: '提示', text: '记住"越高越慢"四个字：卫星轨道越高，线速度越小、角速度越小、周期越大。所以低轨道卫星反而跑得更快、周期更短。这个定性结论在选择题里极其常用，能快速排除错误选项。' },
      { type: 'table', headers: ['轨道参量', '随轨道半径 r 增大', '公式'], rows: [['线速度 v', '减小', 'v = √(G M / r)'], ['角速度 ω', '减小', 'ω = √(G M / r³)'], ['周期 T', '增大', 'T = 2π √(r³/(G M))'], ['向心加速度 a', '减小', 'a = G M / r²']] },
      { type: 'heading', text: '四、天体质量、宇宙速度与同步卫星' },
      { type: 'paragraph', text: '利用万有引力提供向心力，可以"称"出天体质量。若测出卫星绕某天体做半径为 r、周期为 T 的圆周运动，则 G M m / r² = m (4π² / T²) r，解得中心天体质量 M = 4π² r³ / (G T²)。若知道地表 g 和半径 R，也能用 M = g R² / G 求出地球质量。' },
      { type: 'keypoint', label: '重点·宇宙速度', text: '第一宇宙速度（环绕速度）<strong>v₁ ≈ 7.9 km/s</strong>：贴地圆轨道所需最小速度，也是最大环绕速度。<br>第二宇宙速度 <strong>v₂ ≈ 11.2 km/s</strong>：挣脱地球引力、飞离地球的最小速度。<br>第三宇宙速度 <strong>v₃ ≈ 16.7 km/s</strong>：挣脱太阳引力、飞出太阳系的最小速度。' },
      { type: 'paragraph', text: '同步卫星是地球上空一种特殊卫星：它绕地球转一圈的时间刚好等于地球自转周期（24 小时），所以从地面看它"静止"在天空某点不动，常用于通信、广播。要实现同步，它必须满足三个条件。' },
      { type: 'example', label: '例题·求中心天体质量', text: '一颗卫星绕某行星做半径为 r、周期为 T 的匀速圆周运动，引力常量为 G。求行星质量 M。<br><br><strong>解析</strong>：<br>万有引力提供向心力：G M m / r² = m (4π² / T²) r。两边约去卫星质量 m，整理得 M = 4π² r³ / (G T²)。只要测出 r 和 T，就能算出中心行星的质量，这就是"称量天体"的方法。' },
      { type: 'warn', label: '易错', text: '<strong>同步卫星不是随便放多高都行。</strong>它必须同时满足：周期 T = 24 h、轨道在赤道正上方平面、离地高度固定（约 36000 km）。很多同学以为"同步卫星可以在任意高度"，这是错的——高度由周期唯一决定，不能随意改变。另外第一宇宙速度既是最小发射速度，又是最大环绕速度，别只记一半。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">万有引力提供卫星绕地球的向心力</text><circle cx="340" cy="170" r="60" fill="#4fb3a5"/><text x="340" y="174" font-size="12" fill="#234b45" text-anchor="middle">地球</text><circle cx="340" cy="170" r="120" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="460" cy="170" r="7" fill="#234b45"/><line x1="340" y1="170" x2="460" y2="170" stroke="#234b45" stroke-width="2" stroke-dasharray="4,3"/><line x1="460" y1="170" x2="460" y2="120" stroke="#234b45" stroke-width="3"/><polygon points="460,120 453,134 467,134" fill="#234b45"/><text x="470" y="135" font-size="12" fill="#234b45">F向(指向地心)</text><text x="340" y="275" font-size="13" fill="#234b45" text-anchor="middle">万有引力 F = G M m / r² 充当向心力，使卫星绕地球做圆周运动</text></svg>', caption: '图2　卫星绕地球运动时，地球对它的万有引力指向地心，恰好提供所需的向心力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">同步卫星：在赤道上空固定高度，相对地面静止</text><circle cx="340" cy="220" r="50" fill="#4fb3a5"/><text x="340" y="224" font-size="12" fill="#234b45" text-anchor="middle">地球</text><ellipse cx="340" cy="220" rx="150" ry="40" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="340" cy="120" r="7" fill="#234b45"/><line x1="340" y1="220" x2="340" y2="120" stroke="#234b45" stroke-width="2" stroke-dasharray="4,3"/><text x="350" y="170" font-size="12" fill="#234b45">h 固定</text><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">同步卫星 T=24h、在赤道平面、高度固定，相对地面静止</text></svg>', caption: '图3　同步卫星位于赤道正上方的固定高度处，周期等于地球自转周期（24 小时），从地面看静止不动。' }
    ],
    exercises: [
      { type: 'choice', question: '关于万有引力定律 F = G m₁ m₂ / r²，下列说法正确的是？', options: ['r 是两物体表面的距离', 'r 是两质点（或均匀球体球心）间的距离', 'G 没有单位', '只有天体之间才有万有引力'], answer: 'r 是两质点（或均匀球体球心）间的距离', explanation: '万有引力定律中 r 指两个质点中心之间的距离；对于均匀球体，r 取两球心之间的距离，而不是表面距离或别的量。引力常量 G 有单位（N·m²/kg²）；万有引力存在于任何两个有质量的物体之间，不只天体才有，只是普通物体间引力太小不易察觉。因此只有"r 是球心距"正确。' },
      { type: 'choice', question: '卫星绕地球做圆轨道运动，轨道半径 r 越大时，下列说法正确的是？', options: ['线速度越大', '周期越小', '线速度越小、周期越大', '向心加速度越大'], answer: '线速度越小、周期越大', explanation: '由万有引力提供向心力可得 v = √(G M / r)，T = 2π √(r³/(G M))。r 越大，线速度 v 越小、周期 T 越大、向心加速度 a 越小，这就是"越高越慢"。所以"线速度越小、周期越大"正确，其余选项都与规律相反。' },
      { type: 'choice', question: '关于同步卫星，下列说法错误的是？', options: ['周期等于地球自转周期 24 h', '轨道在赤道正上方', '离地高度固定', '可以在任意高度任意轨道'], answer: '可以在任意高度任意轨道', explanation: '同步卫星必须满足三个条件：周期 T = 24 h、轨道在赤道平面内、离地高度固定（约 36000 km，由周期唯一决定）。说它"可以在任意高度任意轨道"是错误的。它能相对地面静止，正是因为高度和周期被严格锁定，不能随意改变。' },
      { type: 'fill', question: '若测出卫星绕行星做半径为 r、周期为 T 的圆周运动，则中心行星质量 M = ___（用 G、r、T 表示）。', answer: '4π² r³ / (G T²)', explanation: '由万有引力提供向心力：G M m / r² = m (4π² / T²) r。两边约去卫星质量 m，再乘 r² 得 G M = 4π² r³ / T²，所以 M = 4π² r³ / (G T²)。这就是通过卫星轨道参数"称量"中心天体质量的方法。' },
      { type: 'fill', question: '地球的第一宇宙速度（最大环绕速度、最小发射速度）约为 ___ km/s。', answer: '7.9', explanation: '第一宇宙速度 v₁ = √(g R) ≈ 7.9 km/s，是物体在地球表面附近绕地球做匀速圆周运动所需的速度，也是卫星的最大环绕速度（轨道越低速度越大，贴地最快）和最小的发射速度（低于它无法入轨）。第二宇宙速度约 11.2 km/s，第三宇宙速度约 16.7 km/s。' }
    ]
  });
})();
