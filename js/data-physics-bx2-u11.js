/* ============================================================
 * 高一物理 · 必修 第二册 · 第七章 万有引力与宇宙航行
 * 课时11：万有引力理论的成就
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u11',
    name: '万有引力理论的成就',
    chapter: '必修第二册 · 第七章 万有引力与宇宙航行',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、万有引力理论能做什么' },
      { type: 'paragraph', text: '万有引力定律提出后，物理学家发现它不仅能解释已知现象，还能反推出许多原来不知道的事情。比如，能不能用引力算出地球、太阳有多重？能不能预言还没被发现的行星？这些正是万有引力理论的辉煌成就。' },
      { type: 'keypoint', label: '重点·两大应用方向', text: '<strong>万有引力理论的两大成就：一是称量天体质量（地球、太阳等），二是预言并发现未知天体（如海王星）。</strong>核心思路都是：用观测到的运动，反推产生这种运动的引力源。' },
      { type: 'paragraph', text: '我们先来看称量地球。在地球表面，一个物体的重力近似等于地球对它的万有引力，由此可以算出地球的质量。' },
      { type: 'list', items: ['用地面重力可算出地球质量', '用行星公转可算出太阳等中心天体质量', '由轨道偏差可预言未知行星', '万有引力理论让称量天体成为可能'] },
      { type: 'heading', text: '二、称量地球的质量' },
      { type: 'paragraph', text: '在地球表面附近，物体受到的重力 mg 近似等于地球对它的万有引力 G × M × m / R²，其中 M 是地球质量，R 是地球半径。消去物体质量 m，就得到 g = G × M / R²。' },
      { type: 'keypoint', label: '重点·黄金代换', text: '<strong>由 mg = G × M × m / R² 可推出 G × M = g × R²，这就是黄金代换关系。</strong>只要知道地面重力加速度 g 和地球半径 R，再代入 G，就能算出地球质量 M = g × R² / G。' },
      { type: 'example', label: '例题·算地球质量', text: '已知地面重力加速度 g≈9.8，地球半径 R≈6.4×10⁶ 米，G≈6.67×10⁻¹¹，估算地球质量。<br><br><strong>解析</strong>：由黄金代换 M = g × R² / G。代入数值得 M ≈ 9.8 × (6.4×10⁶)² / (6.67×10⁻¹¹)，约为 6.0×10²⁴ 千克。这就是我们称量出的地球质量。' },
      { type: 'warn', label: '易错·重力与引力的区别', text: '<strong>地球表面的重力并不严格等于万有引力，因为地球自转会让一部分引力提供向心力。</strong>在两极处重力才最接近等于引力；在赤道处差别最大。不过粗略计算时通常忽略自转影响，直接把 mg 当作万有引力。' },
      { type: 'table', headers: ['方法', '已知量', '可求量'], rows: [['地面重力法', 'g、R、G', '地球质量 M'], ['行星公转法', 'T、r、G', '中心天体质量'], ['发现未知天体', '轨道偏差', '未知行星位置']] },
      { type: 'heading', text: '三、计算太阳等中心天体的质量' },
      { type: 'paragraph', text: '行星绕太阳公转时，太阳对行星的万有引力提供向心力。把引力公式和圆周运动公式结合起来，就能消去行星质量，得到中心天体（太阳）的质量表达式。' },
      { type: 'tip', label: '提示·只能量中心天体', text: '<strong>用行星公转只能算出中心天体（被绕的那个，如太阳）的质量，算不出绕行行星自身的质量。</strong>因为行星质量在等式两边被约掉了。要测行星质量，得看它的卫星怎么绕它转。' },
      { type: 'list', items: ['行星公转的向心力来自太阳引力', '由 G×M×m/r² = m×v²/r 可推出太阳质量 M', '测得轨道半径 r 和周期 T 即可算出 M', '这一方法也适用于算其他恒星、星系中心质量'] },
      { type: 'heading', text: '四、预言并发现未知天体' },
      { type: 'paragraph', text: '天王星被发现后，人们发现它的实际轨道和理论计算总对不上。天文学家猜想：是不是还有一颗未被发现的行星在偷偷拉它？根据万有引力定律反推，有人算出了这颗未知行星应该在的位置。' },
      { type: 'keypoint', label: '重点·海王星的发现', text: '<strong>1846 年，人们根据万有引力定律计算出的位置，果然找到了海王星。这是万有引力理论预言未知天体的经典成功案例。</strong>后来冥王星等也是用类似思路发现的。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">用地面重力称量地球质量：g × R² = G × M</text><rect x="40" y="58" width="600" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="180" cy="158" r="60" fill="#4fb3a5"/><text x="180" y="162" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">地球</text><circle cx="180" cy="78" r="10" fill="#234b45"/><text x="200" y="72" font-size="12" fill="#234b45">物体(受重力mg)</text><line x1="180" y1="88" x2="180" y2="98" stroke="#234b45" stroke-width="2"/><text x="380" y="130" font-size="14" fill="#234b45" font-weight="bold">mg = G×M×m/R²</text><text x="380" y="162" font-size="14" fill="#234b45" font-weight="bold">⇒ M = g×R²/G</text><text x="380" y="200" font-size="13" fill="#234b45">已知 g、R、G 即可求 M</text></svg>', caption: '图1　利用地面物体所受重力近似等于地球引力，可推出 M = g×R²/G，从而称量地球。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">行星绕太阳公转：引力提供向心力，可算太阳质量</text><rect x="40" y="58" width="600" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="158" r="20" fill="#4fb3a5"/><text x="340" y="162" font-size="12" fill="#234b45" text-anchor="middle">太阳</text><circle cx="340" cy="158" r="100" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><circle cx="440" cy="158" r="8" fill="#234b45"/><text x="440" y="142" font-size="11" fill="#234b45" text-anchor="middle">行星</text><text x="500" y="200" font-size="13" fill="#234b45">G×M×m/r² = m×v²/r</text><text x="500" y="224" font-size="13" fill="#234b45">⇒ M = 4π²r³/(G×T²)</text></svg>', caption: '图2　行星绕太阳公转时万有引力提供向心力，已知轨道半径和周期就能算出太阳质量。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">由天王星轨道偏差，预言并找到海王星</text><rect x="40" y="58" width="600" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="158" r="16" fill="#4fb3a5"/><text x="340" y="152" font-size="11" fill="#234b45" text-anchor="middle">太阳</text><circle cx="340" cy="158" r="90" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><circle cx="430" cy="158" r="8" fill="#234b45"/><text x="430" y="142" font-size="11" fill="#234b45" text-anchor="middle">天王星</text><circle cx="300" cy="110" r="7" fill="#234b45"/><text x="300" y="100" font-size="11" fill="#234b45" text-anchor="middle">海王星(预言)</text></svg>', caption: '图3　天王星轨道的异常偏差，引导人们按万有引力定律预言并找到了海王星。' }
    ],
    exercises: [
      { type: 'choice', question: '利用地球表面的重力估算地球质量，依据的关系式是？', options: ['F = G×m₁×m₂/r²', 'g×R² = G×M（黄金代换）', 'v² = G×M/r', 'a = v²/r'], answer: 'g×R² = G×M（黄金代换）', explanation: '在地球表面，物体重力 mg 近似等于地球引力 G×M×m/R²，消去物体质量 m 后得到 g×R² = G×M，即黄金代换。由此 M = g×R²/G，只要知道 g、R、G 就能估算地球质量。其他式子分别描述两物体引力和圆周运动，不直接用于称地球。' },
      { type: 'choice', question: '通过行星绕太阳的公转，我们能够算出下列哪者的质量？', options: ['绕行行星自身的质量', '太阳（中心天体）的质量', '所有卫星的质量', '无法算出任何天体质量'], answer: '太阳（中心天体）的质量', explanation: '行星绕太阳公转时，太阳引力提供向心力，联立方程后绕行行星的质量会被约掉，因此只能求出中心天体（太阳）的质量，求不出行星自身质量。若要测行星质量，需要观察它的卫星绕它转动的情况。' },
      { type: 'choice', question: '海王星的发现主要说明了万有引力理论可以？', options: ['精确测量时间', '预言并发现未知天体', '制造人造卫星', '解释光的传播'], answer: '预言并发现未知天体', explanation: '天王星被发现后实际轨道与理论不符，天文学家根据万有引力反推存在一颗未知行星并在预言位置找到了海王星。这成为万有引力理论预言未知天体的经典证明，展示了理论的强大预测能力。' },
      { type: 'fill', question: '由地面重力近似等于万有引力 mg = G×M×m/R²，消去物体质量 m 后可得 M = ___ / G。', answer: 'g×R²', explanation: '由 mg = G×M×m/R²，等式两边同时消去物体质量 m，得到 g = G×M/R²，整理为 g×R² = G×M，所以地球质量 M = g×R²/G。这就是著名的黄金代换关系，是称量地球质量的基础。' },
      { type: 'fill', question: '计算中心天体质量时，常用的已知量是行星的轨道半径 r 和公转___（填“周期”或“质量”）。', answer: '周期', explanation: '用行星公转计算中心天体质量时，把引力等于向心力 G×M×m/r² = m×4π²r/T² 联立，可解出 M = 4π²r³/(G×T²)。因此只需要知道轨道半径 r 和公转周期 T，而不需要知道行星自身的质量。' }
    ]
  });
})();
