/* ============================================================
 * 高三复习 · 力学综合 · 专题六 动量与碰撞
 * 课时24：动量与冲量 动量定理
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u24',
    name: '动量与冲量 动量定理',
    chapter: '力学综合 · 专题六 动量与碰撞',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、动量：描述物体"运动了多少"的矢量' },
      { type: 'paragraph', text: '两个质量不同的物体以相同速度运动，比如一辆自行车和一辆卡车都以 10 m/s 行驶，要撞上你时你肯定更怕卡车。这说明"运动得多不多"不能只看速度，还得看质量。物理学把"质量乘以速度"定义为动量，用它来衡量物体运动的"冲劲"大小。' },
      { type: 'keypoint', label: '重点·动量的定义', text: '<strong>动量 p = m × v。</strong>其中 m 是质量，v 是速度。动量既有大小又有方向，方向与速度方向相同，是一个矢量。单位是千克·米每秒，记作 kg·m/s。' },
      { type: 'paragraph', text: '动量是矢量，这一点比动能更要注意。动能 (1/2)mv² 只有大小没有方向，而动量既有大小也有方向。比较两物体动量是否"相同"，既要看大小相等，也要看方向一致，方向不同就是不同的动量。' },
      { type: 'list', items: ['动量是矢量，方向与速度 v 相同', '动量大小 p = m × v，质量越大或速度越大，动量越大', '单位是 kg·m/s，与冲量的单位相同'] },
      { type: 'heading', text: '二、冲量：力在"时间"上的积累' },
      { type: 'paragraph', text: '要让一个静止的箱子获得动量，需要"用力并持续一段时间"。用的时间越长、力越大，箱子最后冲得越猛。这种"力乘以作用时间"的积累效果，物理学叫冲量。它衡量的是力在时间上到底起了多大作用。' },
      { type: 'keypoint', label: '重点·冲量的定义', text: '<strong>恒力的冲量 I = F × t。</strong>其中 F 是力的大小，t 是力的作用时间。冲量也是矢量，方向与力的方向相同，单位也是 N·s，与 kg·m/s 等价。' },
      { type: 'example', label: '例题·算一算冲量', text: '用 20 N 的水平恒力推一个箱子，作用了 3 秒，力的方向始终水平向右。<br><br><strong>解析</strong>：<br>I = F × t = 20 × 3 = 60（N·s）。<br>冲量大小为 60 N·s，方向与水平推力相同，即水平向右。' },
      { type: 'warn', label: '易错', text: '冲量是<strong>过程量</strong>，必须对应一段作用时间，离开时间谈冲量没有意义。<strong>另外冲量是矢量，方向由力的方向决定；变力作用时冲量要用力—时间图像下的"面积"来求，不能简单用 F×t。</strong>' },
      { type: 'list', items: ['冲量 I = F × t，是力在时间上的积累，对应"过程"', '冲量是矢量，方向与作用力方向相同', '功 W = F × l × cosα，是力在空间上的积累，是标量', '冲量和功单位不同、一个是矢量一个是标量，不要混为一谈'] },
      { type: 'table', headers: ['对比项', '冲量 I', '功 W'], rows: [['物理意义', '力在时间上的积累', '力在空间上的积累'], ['公式', 'I = F × t', 'W = F × l × cosα'], ['矢量/标量', '矢量（方向与力相同）', '标量（只有正负）'], ['单位', 'N·s（= kg·m/s）', 'J']] },
      { type: 'heading', text: '三、动量定理：冲量改变了动量' },
      { type: 'paragraph', text: '力作用一段时间，会改变物体的动量——这正是动量定理说的。一个物体受到合外力冲量，它的动量就会从初动量变成末动量，冲量正好等于这个动量变化量。动量定理把"力作用一段时间"和"动量改变"直接联系起来，是处理打击、碰撞、缓冲等问题最有力的工具。' },
      { type: 'keypoint', label: '重点·动量定理', text: '<strong>合外力的冲量等于物体动量的变化：F × Δt = Δp = m×v₂ − m×v₁。</strong>左边是合外力乘以作用时间，右边是末动量减初动量。注意它是<strong>矢量式</strong>，列式时要先规定正方向。' },
      { type: 'example', label: '例题·用动量定理求平均作用力', text: '一个质量 0.5 kg 的篮球以 4 m/s 竖直向下撞地，反弹后速度大小 3 m/s 竖直向上，与地面接触时间 0.1 s。取向上为正方向。<br><br><strong>解析</strong>：<br>初动量 p₁ = m×v₁ = 0.5 × (−4) = −2 kg·m/s（向下为负）。<br>末动量 p₂ = m×v₂ = 0.5 × 3 = 1.5 kg·m/s。<br>由 F×Δt = p₂ − p₁ 得：F×0.1 = 1.5 − (−2) = 3.5。<br>所以 F = 35 N（这是地面对球的平均作用力，已含重力以外的净效果，若算地面对球的支持力还要加 mg）。' },
      { type: 'tip', label: '提示', text: '<strong>动量定理是矢量式，第一步永远是先规定正方向。</strong>把初、末速度按正方向写成带正负的代数量，再代入公式，方向自然由结果的正负号给出。这样处理打击、反弹类问题最不容易错。' },
      { type: 'warn', label: '易错', text: '公式左边是<strong>合外力</strong>的冲量，不是某一个力的冲量。若物体还受重力、摩擦力等，必须把它们都算进去求合力再乘时间。<strong>许多同学漏掉重力，只在缓冲、碰撞瞬间因重力相对很小可忽略时才能省去。</strong>' },
      { type: 'table', headers: ['对比项', '动量定理', '牛顿第二定律'], rows: [['表达式', 'F × Δt = m×v₂ − m×v₁', 'F = m × a'], ['适用对象', '单个物体（或质点系）', '单个物体'], ['突出关系', '力的时间积累→动量变化', '力→加速度'], ['对变力', '可用平均力或图像面积', '瞬时关系']] },
      { type: 'list', items: ['用动量定理解题四步：规定正方向 → 写出初、末动量（带符号）→ 算合外力冲量 F×Δt → 列方程求解', '缓冲问题：延长作用时间 Δt 可减小平均作用力 F，这是安全带、海绵垫的原理', '碰撞、打击瞬间：作用时间极短，重力等恒力冲量常可忽略'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动量的大小 p = m × v，方向与速度方向相同</text><rect x="60" y="70" width="240" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">运动的小车</text><text x="180" y="125" font-size="12" fill="#234b45" text-anchor="middle">质量 m</text><rect x="120" y="150" width="80" height="50" rx="6" fill="#4fb3a5"/><line x1="200" y1="175" x2="320" y2="175" stroke="#234b45" stroke-width="3"/><polygon points="320,169 336,175 320,181" fill="#234b45"/><text x="270" y="200" font-size="13" fill="#234b45" text-anchor="middle">速度 v</text><rect x="380" y="70" width="240" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">动量 p</text><text x="500" y="152" font-size="20" fill="#234b45" text-anchor="middle" font-weight="bold">p = m × v</text><text x="500" y="200" font-size="13" fill="#234b45" text-anchor="middle">矢量，方向与 v 相同</text></svg>', caption: '图1　动量等于质量乘以速度，方向与速度方向一致，是一个矢量。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">冲量 I = F × t：力在时间上的积累</text><rect x="60" y="80" width="250" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="110" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">恒力 F 作用时间 t</text><line x1="90" y1="180" x2="260" y2="180" stroke="#234b45" stroke-width="3"/><polygon points="260,174 276,180 260,186" fill="#234b45"/><text x="175" y="206" font-size="13" fill="#234b45" text-anchor="middle">力 F（恒定）</text><line x1="90" y1="150" x2="90" y2="210" stroke="#4fb3a5" stroke-width="2"/><line x1="260" y1="150" x2="260" y2="210" stroke="#4fb3a5" stroke-width="2"/><text x="175" y="142" font-size="12" fill="#4fb3a5" text-anchor="middle">时间 t</text><rect x="380" y="80" width="250" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="505" y="120" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">冲量 I</text><text x="505" y="170" font-size="20" fill="#234b45" text-anchor="middle" font-weight="bold">I = F × t</text><text x="505" y="210" font-size="13" fill="#234b45" text-anchor="middle">矢量，方向与 F 相同</text></svg>', caption: '图2　冲量是力在时间上的积累，等于力乘以作用时间，方向与力相同。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动量定理：合外力的冲量等于动量变化</text><rect x="40" y="90" width="180" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="130" y="125" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">初态</text><text x="130" y="165" font-size="16" fill="#234b45" text-anchor="middle" font-weight="bold">m×v₁</text><text x="130" y="200" font-size="12" fill="#234b45" text-anchor="middle">初动量</text><rect x="460" y="90" width="180" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="550" y="125" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">末态</text><text x="550" y="165" font-size="16" fill="#234b45" text-anchor="middle" font-weight="bold">m×v₂</text><text x="550" y="200" font-size="12" fill="#234b45" text-anchor="middle">末动量</text><line x1="220" y1="165" x2="280" y2="165" stroke="#234b45" stroke-width="3"/><polygon points="280,159 296,165 280,171" fill="#234b45"/><line x1="460" y1="165" x2="400" y2="165" stroke="#234b45" stroke-width="3"/><polygon points="400,159 384,165 400,171" fill="#234b45"/><rect x="290" y="60" width="120" height="56" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="350" y="93" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">F × Δt</text><text x="350" y="238" font-size="14" fill="#234b45" text-anchor="middle">F × Δt = m×v₂ − m×v₁</text><text x="350" y="262" font-size="13" fill="#234b45" text-anchor="middle">合外力冲量 = 末动量 − 初动量</text></svg>', caption: '图3　动量定理：合外力的冲量等于物体末动量与初动量之差。' }
    ],
    exercises: [
      { type: 'choice', question: '关于动量，下列说法正确的是？', options: ['动量是标量，只有大小没有方向', '动量是矢量，方向与速度方向相同', '动量的方向与物体受力方向相同', '动量只与速度有关，与质量无关'], answer: '动量是矢量，方向与速度方向相同', explanation: '动量 p = m × v，既有大小又有方向，是矢量，其方向与速度 v 的方向相同，而不是与受力方向相同。动量同时由质量和速度决定，质量越大或速度越大，动量越大。因此只有"动量是矢量，方向与速度方向相同"这一项正确。' },
      { type: 'choice', question: '关于恒力的冲量，下列说法正确的是？', options: ['冲量 I = F / t', '冲量是标量', '冲量 I = F × t，方向与力方向相同', '冲量只与力的大小有关，与时间长短无关'], answer: '冲量 I = F × t，方向与力方向相同', explanation: '恒力的冲量等于力乘以作用时间，即 I = F × t，单位 N·s。冲量是矢量，方向与作用力方向相同。冲量既与力的大小有关，也与作用时间有关，离开时间谈冲量没有意义。因此正确选项是"冲量 I = F × t，方向与力方向相同"。' },
      { type: 'choice', question: '动量定理的表达式及其含义，正确的是？', options: ['合外力冲量等于动能的变化', '合外力冲量等于动量的变化', '动量定理只适用于恒力作用', '动量定理不适用于变力作用'], answer: '合外力冲量等于动量的变化', explanation: '动量定理指出：物体所受合外力的冲量等于它的动量变化，即 F × Δt = m×v₂ − m×v₁，这是一个矢量式。它既适用于恒力，也适用于变力（变力时取平均力或用图像面积）。动能变化对应的是动能定理，不是动量定理。所以正确选项是"合外力冲量等于动量的变化"。' },
      { type: 'fill', question: '动量的定义式为 p = ___（用质量 m 和速度 v 表示）。', answer: 'm×v', explanation: '动量等于物体的质量与速度的乘积，定义式为 p = m × v。它是一个矢量，方向与速度方向相同，单位是 kg·m/s，与冲量单位 N·s 等价。' },
      { type: 'fill', question: '动量定理表达式 F × Δt = Δp = ___（用初动量 m×v₁ 和末动量 m×v₂ 表示合外力的冲量等于什么）。', answer: 'm×v₂ − m×v₁', explanation: '动量定理表明合外力的冲量等于物体动量的变化量，即 F × Δt = Δp，而动量变化量等于末动量减初动量，所以写成 F × Δt = m×v₂ − m×v₁。使用时要先规定正方向，把初、末速度写成带正负的代数量再代入。' }
    ]
  });
})();
