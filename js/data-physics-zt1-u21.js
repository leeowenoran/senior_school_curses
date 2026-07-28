/* ============================================================
 * 高三复习 · 力学综合 · 专题五 机械能与能量
 * 课时21：动能定理
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u21',
    name: '动能定理',
    chapter: '力学综合 · 专题五 机械能与能量',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、动能：物体因运动而具有的能量' },
      { type: 'paragraph', text: '奔跑的人、飞行的子弹、流动的河水，都在运动，都能"撞"出效果——这种因为运动而拥有的能量就叫动能。物体质量越大、速度越快，动能越大。动能只和物体的质量与速度有关，是个"标量"（没有方向），并且恒为非负值。' },
      { type: 'keypoint', label: '重点·动能表达式', text: '<strong>动能 E_k = (1/2) × m × v²。</strong>其中 m 是物体质量，v 是瞬时速度大小。速度平方意味着：速度变成 2 倍，动能就变成 4 倍，所以高速运动的物体破坏力极大。' },
      { type: 'paragraph', text: '动能变化量 ΔE_k 表示末动能减初动能。若速度从 v₁ 变到 v₂，则 ΔE_k = (1/2) × m × v₂² − (1/2) × m × v₁²。动能定理要解决的，正是"合外力做的功"和"动能变化"之间的关系。' },
      { type: 'heading', text: '二、动能定理：合外力做功 = 动能的变化' },
      { type: 'keypoint', label: '重点·动能定理', text: '<strong>合外力做的总功 W_合 = ΔE_k = (1/2) × m × v₂² − (1/2) × m × v₁²。</strong>左边是所有力做功的代数和，右边是末动能减初动能。它把"力在空间上的积累"和"速度的变化"直接连了起来。' },
      { type: 'paragraph', text: '动能定理最大的好处是不管过程细节：无论物体走直线还是曲线，受力是恒力还是变力，只要你能算出初末动能和总功，就能列出方程求解。比起牛顿第二定律，它常常省去分析加速度和时间的麻烦。' },
      { type: 'list', items: ['适用于<strong>直线运动</strong>，也适用于<strong>曲线运动</strong>', '适用于<strong>恒力</strong>做功，也适用于<strong>变力</strong>做功', '不涉及中间过程细节，只关心初末状态的速度与总功', '既可用于一个物体，也可用于几个物体组成的系统（总功对应总动能变化）'] },
      { type: 'table', headers: ['对比项', '牛顿第二定律', '动能定理'], rows: [['研究内容', '力与加速度的瞬时关系', '合功与动能变化的关系'], ['是否需要时间', '常需结合运动学求时间', '不需要时间，直接连速度'], ['适用过程', '多限于恒力、简单过程', '直线曲线、恒力变力均可']] },
      { type: 'example', label: '例题·用动能定理求末速度', text: '质量 m = 2 kg 的物块，初速度为 0，在水平恒力作用下前进 10 m，合力做功 100 J。求末速度。<br><br><strong>解析</strong>：<br>由 W_合 = ΔE_k = (1/2) m v² − 0。<br>代入：100 = (1/2) × 2 × v² = v²，得 v = 10 m/s。<br>所以物块末速度为 10 米每秒。' },
      { type: 'warn', label: '易错', text: '<strong>W_合是所有力做功的代数和，不是合力大小乘以位移</strong>（除非合力恒定且方向不变）。重力、摩擦力、弹力等每个力做的功都要按 W = F × l × cosα 算后带正负号相加。另外 ΔE_k 一定写"末减初"，顺序写反结果符号全错。' },
      { type: 'heading', text: '三、用动能定理解题的标准步骤' },
      { type: 'paragraph', text: '动能定理是高三力学综合题的"万能钥匙"之一，按固定步骤来，不容易漏。先明确研究对象和过程，再逐个分析受力并算各力做功，然后把总功和动能变化列成等式求解。' },
      { type: 'list', items: ['第一步：确定<strong>研究对象</strong>和研究的<strong>运动过程</strong>（对应一段位移）', '第二步：对物体<strong>受力分析</strong>，逐个计算各力在该过程中做的功（带正负号）', '第三步：求出<strong>合外力总功</strong> W_合（代数和）', '第四步：写出初、末状态的<strong>动能</strong> E_k1、E_k2', '第五步：列方程 W_合 = E_k2 − E_k1 求解未知量'] },
      { type: 'tip', label: '提示', text: '<strong>遇到"求某段位移末速度""求克服阻力做功"这类题，优先考虑动能定理。</strong>因为它不要求加速度恒定、不要求知道时间，只要初末速度清楚就能用，比反复套牛顿定律省事得多。' },
      { type: 'example', label: '例题·斜面上下滑克服摩擦做功', text: '质量为 m 的物块从光滑斜面顶端滑下，高度下降 h，初速度为 0，到斜面底端时速度为 v。求重力做功与末速度关系。<br><br><strong>解析</strong>：<br>斜面光滑，只有重力做功，W_合 = W_G = m g h。<br>由动能定理：m g h = (1/2) m v² − 0，得 v = √(2 g h)。<br>可见末速度只由下降高度决定，与斜面倾角无关。' },
      { type: 'keypoint', label: '重点·动能定理的两种常见变形', text: '<strong>① 已知总功求速度：</strong>W_合 = (1/2) m v₂² − (1/2) m v₁²。<br><strong>② 求某力做功：</strong>把未知力做功当作 W_x，其余力做功已知，列方程解出 W_x。这种方法在变力做功题中特别好用。' },
      { type: 'warn', label: '易错', text: '动能定理中的速度是<strong>相对于同一参考系</strong>的（通常取地面）。如果题目给的是相对速度（比如人在运动的传送带上），必须先换算成对地速度再代入，否则动能算错，整题皆错。' },
      { type: 'tip', label: '提示', text: '<strong>动能恒为非负，但动能变化量 ΔE_k 可正可负。</strong>ΔE_k > 0 表示动能增加（合外力做正功），ΔE_k < 0 表示动能减少（合外力做负功，即物体克服外力做功）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动能定理：合外力总功 = 动能的变化</text><rect x="60" y="80" width="240" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="106" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">过程前</text><circle cx="180" cy="170" r="22" fill="#4fb3a5"/><text x="180" y="176" font-size="13" fill="#234b45" text-anchor="middle">v₁</text><text x="180" y="232" font-size="13" fill="#234b45" text-anchor="middle">初动能 E_k1</text><rect x="380" y="80" width="240" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="106" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">过程后</text><circle cx="500" cy="170" r="22" fill="#4fb3a5"/><text x="500" y="176" font-size="13" fill="#234b45" text-anchor="middle">v₂</text><text x="500" y="232" font-size="13" fill="#234b45" text-anchor="middle">末动能 E_k2</text><line x1="300" y1="170" x2="380" y2="170" stroke="#234b45" stroke-width="3"/><polygon points="380,164 396,170 380,176" fill="#234b45"/><text x="340" y="150" font-size="13" fill="#234b45" text-anchor="middle">W_合</text><rect x="200" y="278" width="280" height="30" rx="6" fill="#4fb3a5"/><text x="340" y="298" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">W_合 = E_k2 − E_k1</text></svg>', caption: '图1　合外力在一段过程中做的总功，等于物体末动能减初动能。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动能只与质量和速度有关（E_k = 1/2 · m · v²）</text><rect x="60" y="80" width="180" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="150" y="106" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">慢速小球</text><circle cx="150" cy="170" r="20" fill="#4fb3a5"/><text x="150" y="232" font-size="12" fill="#234b45" text-anchor="middle">v，E_k 较小</text><rect x="260" y="80" width="180" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="350" y="106" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">快速小球</text><circle cx="350" cy="170" r="34" fill="#4fb3a5"/><text x="350" y="234" font-size="12" fill="#234b45" text-anchor="middle">2v，E_k 变4倍</text><rect x="460" y="80" width="180" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="550" y="106" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">重小球</text><circle cx="550" cy="170" r="30" fill="#4fb3a5"/><text x="550" y="234" font-size="12" fill="#234b45" text-anchor="middle">m大，E_k 更大</text></svg>', caption: '图2　速度变为2倍，动能变为4倍；质量越大，动能也越大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">解动能定理题的五步法</text><rect x="40" y="90" width="110" height="50" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="95" y="114" font-size="12" fill="#234b45" text-anchor="middle">①对象过程</text><rect x="170" y="90" width="110" height="50" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="225" y="114" font-size="12" fill="#234b45" text-anchor="middle">②受力做功</text><rect x="300" y="90" width="110" height="50" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="355" y="114" font-size="12" fill="#234b45" text-anchor="middle">③总功W合</text><rect x="430" y="90" width="110" height="50" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="485" y="114" font-size="12" fill="#234b45" text-anchor="middle">④初末动能</text><rect x="560" y="90" width="100" height="50" rx="8" fill="#4fb3a5"/><text x="610" y="114" font-size="12" fill="#234b45" text-anchor="middle">⑤列方程</text><line x1="150" y1="115" x2="170" y2="115" stroke="#234b45" stroke-width="2"/><line x1="280" y1="115" x2="300" y2="115" stroke="#234b45" stroke-width="2"/><line x1="410" y1="115" x2="430" y2="115" stroke="#234b45" stroke-width="2"/><line x1="540" y1="115" x2="560" y2="115" stroke="#234b45" stroke-width="2"/><text x="340" y="200" font-size="14" fill="#234b45" text-anchor="middle">关键：W_合 = E_k2 − E_k1</text><text x="340" y="240" font-size="13" fill="#234b45" text-anchor="middle">不用管中间过程，只看初末状态</text><text x="340" y="270" font-size="13" fill="#4fb3a5" text-anchor="middle">直线曲线、恒力变力都适用</text></svg>', caption: '图3　动能定理解题五步：对象过程→受力做功→总功→初末动能→列方程。' }
    ],
    exercises: [
      { type: 'choice', question: '关于动能定理，下列说法正确的是？', options: ['只适用于恒力做功的直线运动', '合外力总功等于动能的变化量', '必须先求出加速度才能用', '只适用于单个物体不适用于系统'], answer: '合外力总功等于动能的变化量', explanation: '动能定理的核心表述就是合外力做的总功等于物体动能的变化，即 W_合 = E_k2 − E_k1。它既适用于直线也适用于曲线运动，既适用于恒力也适用于变力做功，而且不要求先求加速度，对单个物体和系统（总功对应总动能变化）都适用。' },
      { type: 'choice', question: '某物体质量不变，速度由 v 增大到 2v，其动能将变为原来的几倍？', options: ['2 倍', '3 倍', '4 倍', '不变'], answer: '4 倍', explanation: '动能公式为 E_k = (1/2) m v²，动能与速度的平方成正比。当速度从 v 变为 2v 时，新的动能为 (1/2) m (2v)² = (1/2) m × 4 v²，是原来 (1/2) m v² 的 4 倍。所以速度加倍，动能变为 4 倍。' },
      { type: 'choice', question: '用动能定理求末速度时，ΔE_k 应写为？', options: ['E_k1 − E_k2', 'E_k2 − E_k1', 'E_k1 + E_k2', '(E_k1 + E_k2) / 2'], answer: 'E_k2 − E_k1', explanation: '动能定理写成 W_合 = ΔE_k，其中 ΔE_k 表示动能的变化量，定义是末动能减初动能，即 E_k2 − E_k1。若写成初减末就会差一个负号，导致功的符号完全相反，题目就会算错。' },
      { type: 'fill', question: '动能的表达式是 E_k = (1/2) × m × ___²（用速度符号 v 填写）。', answer: 'v', explanation: '动能 E_k = (1/2) m v²，其中 m 是物体质量，v 是瞬时速度的大小。动能只与质量和速度有关，且恒为非负值，速度平方说明速度对动能影响非常显著。' },
      { type: 'fill', question: '质量为 m 的物体从静止开始，在合外力做功 W_合 后获得速度 v，由动能定理 W_合 = (1/2) m × ___（用 v 表示末动能）。', answer: 'v²', explanation: '物体初速度为 0，初动能为 0，末动能为 (1/2) m v²。由动能定理 W_合 = E_k2 − E_k1 = (1/2) m v² − 0 = (1/2) m v²。所以合外力做的功全部转化为物体的末动能。' }
    ]
  });
})();
