/* ============================================================
 * 选择性必修第一册 · 第一章 动量守恒定律
 * 课时4：碰撞
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u4',
    name: '碰撞',
    chapter: '选择性必修第一册 · 第一章 动量守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是碰撞' },
      { type: 'paragraph', text: '两个或两个以上的物体，在极短时间里互相靠近、发生强烈相互作用，之后又各自分开或粘在一起，这样的过程就叫作碰撞。台球互撞、汽车追尾、小球撞墙，都是碰撞。碰撞发生的时间非常短，外力（如摩擦力、重力）的冲量通常可以忽略，所以碰撞过程一般满足动量守恒。' },
      { type: 'keypoint', label: '重点·碰撞', text: '<strong>碰撞是物体在极短时间内发生强烈相互作用的过程。</strong>由于时间极短，外力冲量可忽略，因此碰撞前后系统的总动量守恒。这是分析一切碰撞问题的基础。' },
      { type: 'list', items: ['碰撞时间极短，过程中位置几乎没变', '碰撞时内力很大，外力冲量可忽略，系统动量守恒', '碰撞前后物体速度会突然改变，但总动量矢量和不变'] },
      { type: 'heading', text: '二、一维碰撞：沿同一直线撞' },
      { type: 'paragraph', text: '如果碰撞前后两物体都沿同一条直线运动，就叫一维碰撞，这是课本里最常见的情况。分析时先规定正方向，再用动量守恒列式：m₁×v₁ + m₂×v₂ = m₁×v₁′ + m₂×v₂′。一维碰撞只需要这一个方向上的代数运算，不需要考虑其他方向。' },
      { type: 'keypoint', label: '重点·一维碰撞列式', text: '<strong>一维碰撞沿同一直线进行，动量守恒写作 m₁×v₁ + m₂×v₂ = m₁×v₁′ + m₂×v₂′。</strong>记住：先定正方向，再给每个速度带正负号，方程就变成普通的代数等式。' },
      { type: 'example', label: '例题·一维碰撞速度', text: '质量相等的 A、B 两球在光滑水平面上一维碰撞。碰前 A 以 4 m/s 向右，B 静止。若碰后 A 仍向右以 1 m/s 运动，求碰后 B 的速度。（取向右为正，m_A = m_B = m）<br><br><strong>解析</strong>：<br>碰前总动量 p = m×4 + m×0 = 4m。<br>碰后总动量 p′ = m×1 + m×v_B′。<br>由守恒：4m = m×1 + m×v_B′，消去 m 得 4 = 1 + v_B′，所以 v_B′ = 3 m/s，方向向右。' },
      { type: 'heading', text: '三、弹性碰撞与非弹性碰撞' },
      { type: 'paragraph', text: '碰撞还可以按"动能有没有损失"来分类。如果碰撞前后系统的总动能完全不变，就叫弹性碰撞，比如理想的钢球、台球近似弹性碰撞。如果碰撞中有一部分动能变成了内能（发热、形变），总动能减少了，就叫非弹性碰撞。现实中的碰撞多少都会损失一点动能，都是非弹性的。' },
      { type: 'keypoint', label: '重点·弹性与非弹性', text: '<strong>弹性碰撞：碰后总动能不变；非弹性碰撞：碰后总动能减少（变成热或形变能）。</strong>无论哪种，动量都守恒，区别只在动能是否损失。' },
      { type: 'warn', label: '易错', text: '<strong>动量守恒和动能是否守恒是两回事，不要混为一谈。</strong>所有碰撞都满足动量守恒（忽略外力时），但只有弹性碰撞才同时满足动能守恒。非弹性碰撞动能不守恒，不能用"动能不变"去列式。完全非弹性碰撞动能损失得最多。' },
      { type: 'heading', text: '四、完全非弹性碰撞：碰后共速' },
      { type: 'paragraph', text: '有一种特殊又常见的碰撞：两物体撞在一起后"粘"住，不再分开，以同一个速度一起运动。这种碰后共速的碰撞，叫完全非弹性碰撞。它动能损失最大，但仍然满足动量守恒。列式时碰后两物体速度相同，记作 v，于是 m₁×v₁ + m₂×v₂ = (m₁ + m₂) × v。' },
      { type: 'keypoint', label: '重点·完全非弹性碰撞', text: '<strong>完全非弹性碰撞指两物体碰后粘在一起、以相同速度 v 运动：m₁×v₁ + m₂×v₂ = (m₁ + m₂) × v。</strong>此时动能损失最大，但总动量依然守恒。' },
      { type: 'tip', label: '提示', text: '<strong>看到"粘在一起""子弹打入木块并随之一起运动""撞后不分开"，立刻想到完全非弹性碰撞、碰后共速。</strong>这是考试里最高频的碰撞模型，抓住"共速"这个条件，动量守恒方程就只剩一个未知速度。' },
      { type: 'list', items: ['弹性碰撞：动能守恒，常见于理想钢球、台球', '一般非弹性碰撞：动能有损失，最常见于真实碰撞', '完全非弹性碰撞：碰后共速，动能损失最大', '三类都满足动量守恒，只是动能变化情况不同'] },
      { type: 'table', headers: ['碰撞类型', '动量是否守恒', '总动能', '碰后状态'], rows: [['弹性碰撞', '守恒', '不变', '两物体分开，各自有速度'], ['非弹性碰撞', '守恒', '减少', '两物体分开，动能有损失'], ['完全非弹性碰撞', '守恒', '损失最大', '两物体粘在一起共速']] },
      { type: 'heading', text: '五、碰撞问题怎么解' },
      { type: 'paragraph', text: '拿到碰撞题，先判断是一维还是二维（本册主要一维）；再判断属于哪类碰撞，确定还能用哪个守恒式；最后列动量守恒方程求解，必要时再列动能守恒（仅弹性）或共速条件（完全非弹性）。一步步来，碰撞题并不难。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">一维碰撞：沿同一直线</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">碰前</text><circle cx="110" cy="160" r="20" fill="#4fb3a5"/><polygon points="140,150 160,160 140,170" fill="#234b45"/><circle cx="250" cy="160" r="20" fill="#234b45"/><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">碰后</text><circle cx="150" cy="160" r="20" fill="#4fb3a5"/><polygon points="180,150 200,160 180,170" fill="#234b45"/><circle cx="290" cy="160" r="20" fill="#234b45"/><polygon points="320,150 340,160 320,170" fill="#234b45"/></svg>', caption: '图1　两个小球沿同一直线碰撞，碰前、碰后速度都在这条直线上，这就是一维碰撞。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">弹性 vs 非弹性：动能是否保留</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">弹性碰撞</text><circle cx="120" cy="160" r="18" fill="#4fb3a5"/><polygon points="148,151 166,160 148,169" fill="#234b45"/><circle cx="250" cy="160" r="18" fill="#234b45"/><text x="180" y="220" font-size="12" fill="#234b45" text-anchor="middle">动能不变</text><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">非弹性碰撞</text><circle cx="120" cy="160" r="18" fill="#4fb3a5"/><circle cx="240" cy="160" r="18" fill="#234b45"/><text x="430" y="160" font-size="16" fill="#234b45">≈</text><polygon points="470,152 488,160 470,168" fill="#234b45"/><text x="500" y="220" font-size="12" fill="#234b45" text-anchor="middle">动能变热损失</text></svg>', caption: '图2　弹性碰撞动能不损失（左）；非弹性碰撞部分动能变成热或形变能（右），但动量都守恒。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">完全非弹性碰撞：碰后共速</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">碰前</text><circle cx="110" cy="160" r="18" fill="#4fb3a5"/><polygon points="138,151 156,160 138,169" fill="#234b45"/><circle cx="250" cy="160" r="18" fill="#234b45"/><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">碰后粘在一起</text><rect x="430" y="142" width="120" height="40" rx="8" fill="#4fb3a5"/><polygon points="560,152 578,160 560,168" fill="#234b45"/><text x="490" y="220" font-size="12" fill="#234b45" text-anchor="middle">以同一速度 v 运动</text></svg>', caption: '图3　完全非弹性碰撞中两物体碰后粘成一个整体，以相同速度一起运动，动能损失最大。' }
    ],
    exercises: [
      { type: 'choice', question: '关于碰撞过程，下列说法正确的是？', options: ['碰撞时间很长，外力不可忽略', '碰撞时间极短，外力冲量可忽略，系统动量守恒', '碰撞时动量不守恒', '所有碰撞动能都守恒'], answer: '碰撞时间极短，外力冲量可忽略，系统动量守恒', explanation: '碰撞是物体在极短时间内发生的强烈相互作用，由于时间很短，重力、摩擦力等外力的冲量相比巨大的内力冲量可以忽略，因此碰撞前后系统总动量守恒。并不是所有碰撞动能都守恒，只有弹性碰撞动能才不变；非弹性碰撞动能会有损失。' },
      { type: 'choice', question: '两个物体发生完全非弹性碰撞后，它们的运动状态是？', options: ['各自以不同速度分开', '粘在一起以相同速度运动', '都静止不动', '动能完全不变'], answer: '粘在一起以相同速度运动', explanation: '完全非弹性碰撞的特点是两物体碰后粘在一起、不再分开，以同一个速度（共速）运动，常记作 v，列式时写为 m₁×v₁ + m₂×v₂ = (m₁ + m₂)×v。它是动能损失最大的一类碰撞，但仍满足动量守恒。碰后未必静止，要看初动量。' },
      { type: 'choice', question: '一维弹性碰撞与一般非弹性碰撞的共同点是？', options: ['动能都守恒', '动量都守恒', '碰后都共速', '都没有内力'], answer: '动量都守恒', explanation: '无论弹性还是非弹性碰撞，只要忽略外力冲量，系统动量都守恒，这是它们的共同点。区别在于动能：弹性碰撞总动能不变，非弹性碰撞总动能减少（转化为热或形变能）。共速只出现在完全非弹性碰撞中，并非所有碰撞都如此。' },
      { type: 'fill', question: '完全非弹性碰撞的动量守恒式写作：m₁×v₁ + m₂×v₂ = (m₁ + m₂) × ___（填"v"或"v₁′"）。', answer: 'v', explanation: '完全非弹性碰撞中两物体碰后粘在一起，以同一个速度 v 运动，相当于合并成一个质量为 (m₁ + m₂) 的整体，因此动量守恒式为 m₁×v₁ + m₂×v₂ = (m₁ + m₂)×v。这里 v 是碰后共同速度，不是某个物体单独的速度。' },
      { type: 'fill', question: '分析一维碰撞时，第一步必须先规定___（填"正方向"或"质量"），再给每个速度带上正负号。', answer: '正方向', explanation: '动量是矢量，一维碰撞虽然只沿一条直线，但仍有方向。列方程前必须先规定正方向，与正方向相同的速度取正、相反的取负，这样动量守恒式 m₁×v₁ + m₂×v₂ = m₁×v₁′ + m₂×v₂′ 就变成了带符号的代数等式，方向才不会搞错。' }
    ]
  });
})();
