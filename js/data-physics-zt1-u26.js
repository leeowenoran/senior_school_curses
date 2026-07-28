/* ============================================================
 * 高三复习 · 力学综合 · 专题六 动量与碰撞
 * 课时26：碰撞模型：弹性碰撞与完全非弹性碰撞
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u26',
    name: '碰撞模型：弹性碰撞与完全非弹性碰撞',
    chapter: '力学综合 · 专题六 动量与碰撞',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、碰撞的共性特点' },
      { type: 'paragraph', text: '碰撞是生活中最常见的相互作用：打台球、汽车追尾、小球相撞，都是碰撞。它们的共同点是作用时间极短、相互作用力（内力）极大，相比之下外界的摩擦力、重力等可以忽略。因此碰撞过程系统动量守恒，这是我们处理一切碰撞问题的总前提。' },
      { type: 'keypoint', label: '重点·碰撞的共性', text: '<strong>碰撞时间极短、内力远大于外力，系统动量守恒。</strong>但机械能是否守恒，取决于碰撞的"弹性程度"，从而把碰撞分成弹性、非弹性、完全非弹性三类。' },
      { type: 'paragraph', text: '碰撞又分"对心碰撞"（正碰，两球连心线在同一直线）和"斜碰"。高三一轮主要研究一维正碰，所有的公式结论都针对一维情况，方向用正负号表示。' },
      { type: 'list', items: ['碰撞时间极短，过程动量守恒', '一维正碰：所有速度在一条直线上，用正负号表示方向', '按机械能是否损失，分弹性、非弹性、完全非弹性碰撞', '碰后两物体不能穿越：完全非弹性时共速，是临界状态'] },
      { type: 'heading', text: '二、弹性碰撞：动量、机械能都守恒' },
      { type: 'paragraph', text: '弹性碰撞是理想情形：碰撞后物体形变能完全恢复，没有机械能转化为内能。因此除了动量守恒，系统的总动能也守恒。台球、微观粒子碰撞常近似看作弹性碰撞。' },
      { type: 'keypoint', label: '重点·弹性碰撞条件', text: '<strong>弹性碰撞同时满足：动量守恒 m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′，且动能守恒 (1/2)m₁v₁² + (1/2)m₂v₂² = (1/2)m₁v₁′² + (1/2)m₂v₂′²。</strong>联立可解出碰后速度。' },
      { type: 'example', label: '例题·等质量一动碰一静', text: '质量相等的 A、B 两球，A 以 v₀ 撞静止的 B，发生弹性正碰。求碰后速度。<br><br><strong>解析</strong>：<br>由动量守恒与动能守恒联立（或记结论）：等质量弹性正碰时两球交换速度。<br>得 v_A′ = 0，v_B′ = v₀。<br>即 A 停下、B 以 v₀ 前进，像台球"传递"了速度。' },
      { type: 'table', headers: ['情形（弹性正碰）', '碰后 A 速度', '碰后 B 速度'], rows: [['m₁ = m₂，B 静止', '0', 'v₀'], ['m₁ ≫ m₂，B 静止', '≈ v₀', '≈ 2v₀'], ['m₁ ≪ m₂，B 静止', '≈ −v₀', '≈ 0']] },
      { type: 'warn', label: '易错', text: '<strong>弹性碰撞的"动能守恒"是总动能守恒，不是每个物体动能守恒。</strong>单个物体动能可以变，变来的是对方获得的。另外"等质量交换速度"只在弹性、一维、一动碰一静时成立，换成非弹性或斜碰就不成立，切勿乱套。' },
      { type: 'heading', text: '三、完全非弹性碰撞：碰后共速' },
      { type: 'paragraph', text: '完全非弹性碰撞是"损失最大"的碰撞：两物体碰后粘在一起、以相同速度运动，就像子弹打进木块、两节车厢挂钩。形变完全不能恢复，大量机械能转成内能，但动量依然守恒。' },
      { type: 'keypoint', label: '重点·完全非弹性碰撞', text: '<strong>碰后两物体共速 v′，动量守恒：m₁v₁ + m₂v₂ = (m₁ + m₂) × v′。</strong>由于共速，相对速度为零，机械能损失达到最大，损失的能量转化为内能。' },
      { type: 'example', label: '例题·子弹打木块（完全非弹性）', text: '质量 m 的子弹以 v₀ 水平射入静止的质量 M 的木块，最终共同速度 v′（子弹留在木块中）。求 v′。<br><br><strong>解析</strong>：<br>子弹与木块系统水平方向动量守恒：m×v₀ = (m + M) × v′。<br>所以 v′ = m×v₀ / (m + M)。<br>碰后两者以相同速度运动，机械能有损失。' },
      { type: 'tip', label: '提示', text: '<strong>判断"是否共速"是区分碰撞类型的关键。</strong>题目说"粘在一起""结合在一起""子弹留在木块中未穿出"，基本就是完全非弹性碰撞，直接用 (m₁+m₂)v′ 处理，机械能一定不守恒但要另算损失。' },
      { type: 'warn', label: '易错', text: '<strong>完全非弹性碰撞机械能不守恒，不能用动能守恒列式。</strong>常见错误是既用动量守恒又顺手用动能守恒，这会和共速条件自相矛盾。记住：共速 + 动量守恒即可，动能损失单独算 ΔE = 初动能 − 末动能。' },
      { type: 'heading', text: '四、三类碰撞对比与一般非弹性碰撞' },
      { type: 'paragraph', text: '介于弹性和完全非弹性之间的是"一般非弹性碰撞"：碰后分开但不共速，机械能有损失但不最大。它只满足动量守恒，动能不守恒。做题时若未说明"弹性"或"共速"，默认按一般非弹性处理，仅有动量守恒可用。' },
      { type: 'list', items: ['弹性碰撞：动量、动能都守恒，碰后分开', '一般非弹性碰撞：仅动量守恒，动能有损失，碰后分开', '完全非弹性碰撞：仅动量守恒，动能损失最大，碰后共速', '总规律：无论哪类，碰撞过程动量都守恒'] },
      { type: 'table', headers: ['碰撞类型', '动量', '动能', '碰后状态'], rows: [['弹性碰撞', '守恒', '守恒', '分开，相对速度反向'], ['一般非弹性', '守恒', '减少', '分开'], ['完全非弹性', '守恒', '减少最多', '共速（粘在一起）']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">弹性碰撞：碰后分开，形变形变可恢复</text><rect x="40" y="90" width="270" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="175" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">碰前</text><circle cx="110" cy="175" r="20" fill="#4fb3a5"/><line x1="130" y1="175" x2="180" y2="175" stroke="#234b45" stroke-width="3"/><polygon points="180,169 196,175 180,181" fill="#234b45"/><circle cx="250" cy="175" r="20" fill="#4fb3a5"/><rect x="370" y="90" width="270" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="505" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">碰后（等质量交换速度）</text><circle cx="440" cy="175" r="20" fill="#4fb3a5"/><circle cx="580" cy="175" r="20" fill="#4fb3a5"/><line x1="600" y1="175" x2="550" y2="175" stroke="#234b45" stroke-width="3"/><polygon points="550,169 534,175 550,181" fill="#234b45"/><text x="580" y="215" font-size="12" fill="#234b45" text-anchor="middle">B 以 v₀ 前进</text><text x="440" y="215" font-size="12" fill="#234b45" text-anchor="middle">A 静止</text></svg>', caption: '图1　弹性碰撞后两球分开，等质量时交换速度，动能守恒。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">完全非弹性碰撞：碰后粘在一起共速</text><rect x="40" y="90" width="270" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="175" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">碰前</text><circle cx="110" cy="175" r="20" fill="#4fb3a5"/><line x1="130" y1="175" x2="180" y2="175" stroke="#234b45" stroke-width="3"/><polygon points="180,169 196,175 180,181" fill="#234b45"/><rect x="250" y="160" width="40" height="40" rx="4" fill="#4fb3a5"/><rect x="370" y="90" width="270" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="505" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">碰后（粘在一起）</text><circle cx="440" cy="175" r="20" fill="#4fb3a5"/><rect x="460" y="160" width="40" height="40" rx="4" fill="#4fb3a5"/><line x1="540" y1="175" x2="490" y2="175" stroke="#234b45" stroke-width="3"/><polygon points="490,169 474,175 490,181" fill="#234b45"/><text x="505" y="215" font-size="12" fill="#234b45" text-anchor="middle">共同速度 v′</text></svg>', caption: '图2　完全非弹性碰撞后两物体粘在一起，以同一速度运动，动能损失最大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">三类碰撞的机械能损失：完全非弹性最大</text><line x1="80" y1="250" x2="600" y2="250" stroke="#234b45" stroke-width="2"/><rect x="120" y="120" width="120" height="130" rx="6" fill="#4fb3a5"/><text x="180" y="270" font-size="13" fill="#234b45" text-anchor="middle">弹性（无损失）</text><rect x="280" y="90" width="120" height="160" rx="6" fill="#4fb3a5"/><rect x="280" y="200" width="120" height="50" rx="0" fill="#d6ece8"/><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">一般非弹性</text><rect x="440" y="60" width="120" height="190" rx="6" fill="#4fb3a5"/><rect x="440" y="170" width="120" height="80" rx="0" fill="#d6ece8"/><text x="500" y="270" font-size="13" fill="#234b45" text-anchor="middle">完全非弹性</text></svg>', caption: '图3　灰色为机械能损失部分，完全非弹性碰撞损失最大，弹性碰撞无损失。' }
    ],
    exercises: [
      { type: 'choice', question: '关于碰撞过程的动量，下列说法正确的是？', options: ['碰撞时间太长所以动量不守恒', '碰撞内力远大于外力，系统动量守恒', '只有弹性碰撞动量才守恒', '完全非弹性碰撞动量不守恒'], answer: '碰撞内力远大于外力，系统动量守恒', explanation: '碰撞过程作用时间极短、相互作用的内力远大于外界的摩擦力或重力，因此系统在碰撞瞬间合外力近似为零，动量守恒。这一结论对所有类型的碰撞都成立，包括弹性、一般非弹性和完全非弹性碰撞。正确选项是"碰撞内力远大于外力，系统动量守恒"。' },
      { type: 'choice', question: '两个质量相等的弹性小球发生一维正碰，其中一个静止，则碰后两球速度符合？', options: ['两球都以原速前进', '两球交换速度', '两球都静止', '两球反向弹回'], answer: '两球交换速度', explanation: '等质量弹性正碰且一动碰一静时，由动量守恒和动能守恒联立可得：运动的球停下，静止的球以原来速度前进，即两球交换速度。这是弹性碰撞的重要结论，也常见于台球。正确选项是"两球交换速度"。' },
      { type: 'choice', question: '完全非弹性碰撞的典型特征是？', options: ['碰后分开且动能守恒', '碰后两物体共速，动能损失最大', '碰后两物体反向弹开', '动量不守恒'], answer: '碰后两物体共速，动能损失最大', explanation: '完全非弹性碰撞中两物体碰后粘在一起、以相同速度运动（共速），相对速度为零，机械能损失达到最大，并转化为内能；但系统动量依然守恒。因此正确特征是"碰后两物体共速，动能损失最大"。' },
      { type: 'fill', question: '完全非弹性碰撞中两物体碰后粘在一起，设质量分别为 m₁、m₂，碰前速度 v₁、v₂，碰后共同速度为 v′，由动量守恒可得 v′ = ___（用 m₁、m₂、v₁、v₂ 表示）。', answer: '(m₁×v₁ + m₂×v₂) / (m₁ + m₂)', explanation: '完全非弹性碰撞碰后两物体共速，系统动量守恒：m₁×v₁ + m₂×v₂ = (m₁ + m₂) × v′，解得共同速度 v′ = (m₁×v₁ + m₂×v₂) / (m₁ + m₂)。注意速度是矢量，列式前要规定正方向并带正负号。' },
      { type: 'fill', question: '在三类碰撞中，___碰撞的机械能损失最大（填"弹性""一般非弹性"或"完全非弹性"）。', answer: '完全非弹性', explanation: '三类碰撞都满足动量守恒，但机械能损失程度不同：弹性碰撞动能守恒、无损失；一般非弹性碰撞动能有损失；完全非弹性碰撞两物体碰后共速，相对速度为零，机械能损失达到最大，损失的能量主要转化为内能。因此损失最大的是完全非弹性碰撞。' }
    ]
  });
})();
