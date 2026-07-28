/* ============================================================
 * 高三复习 · 力学综合 · 专题五 机械能与能量
 * 课时23：功能关系
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u23',
    name: '功能关系',
    chapter: '力学综合 · 专题五 机械能与能量',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、功能关系：什么力做功，对应什么能量变' },
      { type: 'paragraph', text: '前面学了功、动能、机械能守恒。现在把它们串成一张"对照表"：不同的力做功，会引起不同的能量变化。记住这张表，做题时看到"某种力做了多少功"，就能立刻说出"哪种能量变了多少"，这就是功能关系的核心思想。' },
      { type: 'keypoint', label: '重点·功能关系总览', text: '<strong>合力做功 W_合 = ΔE_k（动能变化）；重力做功 W_G = −ΔE_p（重力势能变化）；弹力做功 W_弹 = −ΔE_p；除重力和弹力外的其他力做功 W_其他 = ΔE_机械（机械能变化）。</strong>每个力"管"一种能量。' },
      { type: 'paragraph', text: '注意公式里的负号：重力做正功时，物体高度下降，重力势能减少，所以 W_G 是正的、ΔE_p 是负的，二者互为相反数，写成 W_G = −ΔE_p。这条负号规则是功能关系最容易写错的地方，务必记牢。' },
      { type: 'heading', text: '二、重力做功与重力势能' },
      { type: 'keypoint', label: '重点·重力做功', text: '<strong>重力做功 W_G = −ΔE_p = m g × Δh（只看初末高度差，与路径无关）。</strong>重力做正功，物体下降，重力势能减小；重力做负功（物体上升），重力势能增大。' },
      { type: 'example', label: '例题·下落过程的重力功与势能', text: '质量为 m 的物体从高度 h₁ 下降到 h₂（h₁ > h₂），求重力做功与势能变化。<br><br><strong>解析</strong>：<br>重力做功 W_G = m g (h₁ − h₂) > 0，做正功。<br>重力势能减少量 ΔE_p = E_p2 − E_p1 = m g h₂ − m g h₁ < 0。<br>可见 W_G = −ΔE_p，重力做正功、势能减少，二者完全一致。' },
      { type: 'warn', label: '易错', text: '重力做功<strong>只与初末位置的高度差有关，与物体走什么路径无关</strong>。无论是直线下落、沿斜面滑下，还是抛体运动，只要高度差相同，重力做功就相同。别被"路程长"迷惑而多算功。' },
      { type: 'heading', text: '三、弹力做功与弹性势能' },
      { type: 'paragraph', text: '弹簧的弹力做功和重力类似：弹簧弹力做功也等于弹性势能变化量的相反数。弹簧被拉长或压缩时储存弹性势能；弹力做正功（弹簧恢复原长），弹性势能减小；外力克服弹力做功，弹性势能增大。' },
      { type: 'keypoint', label: '重点·弹力做功', text: '<strong>弹力做功 W_弹 = −ΔE_p（弹性势能）。</strong>弹力做正功，弹性势能减少；外力克服弹力做功，弹性势能增加。它和重力做功一样，都满足"做功等于势能增量的相反数"。' },
      { type: 'heading', text: '四、合力做功与动能（回到动能定理）' },
      { type: 'keypoint', label: '重点·合力做功', text: '<strong>合力做功 W_合 = ΔE_k。</strong>这正是动能定理。所有力做功的代数和决定了动能怎么变：总功为正，动能增加；总功为负，动能减少。' },
      { type: 'list', items: ['重力做功 → 改变重力势能（W_G = −ΔE_p）', '弹力做功 → 改变弹性势能（W_弹 = −ΔE_p）', '合力做功 → 改变动能（W_合 = ΔE_k）', '其他力做功 → 改变机械能（W_其他 = ΔE_机械）'] },
      { type: 'heading', text: '五、其他力做功与机械能的变化' },
      { type: 'paragraph', text: '如果除了重力和弹力，还有别的力（如拉力、摩擦力）在做功，机械能就不再守恒。这个"其他力"做的总功，正好等于机械能的变化量：其他力做正功，机械能增加；其他力做负功，机械能减少。' },
      { type: 'keypoint', label: '重点·其他力与机械能', text: '<strong>其他力做功 W_其他 = ΔE_机械 = E_末 − E_初。</strong>这是判断机械能增减的"总开关"：W_其他 > 0 则机械能增加，W_其他 < 0 则机械能减少，W_其他 = 0 则机械能守恒。' },
      { type: 'tip', label: '提示', text: '<strong>判断机械能增减，不用死记条件，直接看"除重力和弹力外的力做的总功"。</strong>总功为正机械能就增，为负就减，为零就守恒。这一条把前面所有守恒判断统一到了一个式子上。' },
      { type: 'heading', text: '六、滑动摩擦力做功与摩擦生热' },
      { type: 'paragraph', text: '两个物体互相摩擦、发生相对滑动时，会产生热量（内能）。这部分热量来自机械能的损耗。关键要分清：滑动摩擦力对"单个物体"做的功，和它"产生多少热"不是一回事。' },
      { type: 'keypoint', label: '重点·摩擦生热', text: '<strong>一对滑动摩擦力做的总功等于产生的热量：Q = f × x_相对，</strong>其中 f 是滑动摩擦力大小，x_相对 是两物体间的相对位移。这部分机械能转化成了内能（发热）。' },
      { type: 'list', items: ['Q = f × x_相对 中的 x_相对 是两物体的<strong>相对位移</strong>，不是任一对地位移', '滑动摩擦力对单个物体做的功 ≠ 产生的热量，二者概念不同', '摩擦生热本质是机械能转化为内能，系统机械能因此减少', '若两物体无相对滑动（静摩擦），则 x_相对 = 0，不生热'] },
      { type: 'warn', label: '易错', text: '<strong>摩擦生热 Q = f × x_相对，用的是"相对位移"，不是某个物体对地位移！</strong>若把 x_相对 误写成木块对地位移或木板对地位移，热量就算错。相对位移指两接触面之间错开的距离，要根据题目分别算两物体的位移再求差。' },
      { type: 'example', label: '例题·木块在木板上滑行生热', text: '木块在长木板上滑动，滑动摩擦力 f = 5 N。滑行中木块对地移 4 m，木板对地移 1 m，二者同向。<br><br><strong>解析</strong>：<br>相对位移 x_相对 = 4 − 1 = 3 m。<br>摩擦生热 Q = f × x_相对 = 5 × 3 = 15 J。<br>即这段过程有 15 焦耳的机械能转化成了内能。' },
      { type: 'table', headers: ['什么力做功', '对应能量变化', '关系'], rows: [['合力 W_合', '动能 E_k', 'W_合 = ΔE_k'], ['重力 W_G', '重力势能 E_p', 'W_G = −ΔE_p'], ['弹力 W_弹', '弹性势能 E_p', 'W_弹 = −ΔE_p'], ['其他力 W_其他', '机械能 E', 'W_其他 = ΔE_机械'], ['滑动摩擦力对', '内能 Q', 'Q = f × x_相对']] },
      { type: 'tip', label: '提示', text: '<strong>功能关系是一张"万能对照表"：见力想能，见能想力。</strong>考场上先列出所有力，再分别写出各自对应的能量变化，最后用这些等式联立，绝大多数力学能量题都能拆开解决。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">功能关系对照：力做功对应能量变</text><rect x="50" y="70" width="150" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="125" y="98" font-size="13" fill="#234b45" text-anchor="middle">合力W合</text><text x="125" y="118" font-size="12" fill="#234b45" text-anchor="middle">→动能</text><rect x="265" y="70" width="150" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="98" font-size="13" fill="#234b45" text-anchor="middle">重力WG</text><text x="340" y="118" font-size="12" fill="#234b45" text-anchor="middle">→重力势能</text><rect x="480" y="70" width="150" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="555" y="98" font-size="13" fill="#234b45" text-anchor="middle">其他力</text><text x="555" y="118" font-size="12" fill="#234b45" text-anchor="middle">→机械能</text><rect x="50" y="170" width="150" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="125" y="198" font-size="13" fill="#234b45" text-anchor="middle">弹力W弹</text><text x="125" y="218" font-size="12" fill="#234b45" text-anchor="middle">→弹性势能</text><rect x="265" y="170" width="150" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="198" font-size="13" fill="#234b45" text-anchor="middle">滑动摩擦</text><text x="340" y="218" font-size="12" fill="#234b45" text-anchor="middle">→内能Q</text><text x="480" y="196" font-size="13" fill="#4fb3a5" text-anchor="middle">见力想能</text><text x="480" y="218" font-size="13" fill="#4fb3a5" text-anchor="middle">见能想力</text><text x="340" y="282" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">每个力"管"一种能量</text></svg>', caption: '图1　功能关系对照表：合力管动能，重力/弹力管势能，其他力管机械能，滑动摩擦管生热。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">重力做正功 → 重力势能减少（W_G = −ΔE_p）</text><line x1="60" y1="250" x2="620" y2="250" stroke="#2e9e8f" stroke-width="2"/><circle cx="150" cy="100" r="18" fill="#4fb3a5"/><text x="150" y="80" font-size="13" fill="#234b45" text-anchor="middle">高处 h₁</text><text x="150" y="138" font-size="12" fill="#234b45" text-anchor="middle">E_p大</text><line x1="150" y1="118" x2="150" y2="240" stroke="#234b45" stroke-width="3"/><polygon points="150,246 144,230 156,230" fill="#234b45"/><circle cx="450" cy="220" r="18" fill="#4fb3a5"/><text x="450" y="200" font-size="13" fill="#234b45" text-anchor="middle">低处 h₂</text><text x="450" y="258" font-size="12" fill="#234b45" text-anchor="middle">E_p小</text><text x="300" y="170" font-size="13" fill="#234b45" text-anchor="middle">下落：重力做正功</text><text x="300" y="195" font-size="13" fill="#4fb3a5" text-anchor="middle">势能减少，W_G = −ΔE_p</text></svg>', caption: '图2　物体从高处下落，重力做正功，重力势能减小，二者互为相反数。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">摩擦生热 Q = f × x_相对（用相对位移）</text><rect x="60" y="120" width="200" height="40" rx="6" fill="#4fb3a5"/><text x="160" y="146" font-size="13" fill="#234b45" text-anchor="middle">木块（移4m）</text><line x1="60" y1="160" x2="560" y2="160" stroke="#2e9e8f" stroke-width="2"/><rect x="60" y="190" width="300" height="34" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="210" y="212" font-size="13" fill="#234b45" text-anchor="middle">木板（移1m）</text><line x1="60" y1="120" x2="460" y2="120" stroke="#234b45" stroke-width="3" stroke-dasharray="5,4"/><text x="260" y="108" font-size="12" fill="#234b45">木块对地 4 m</text><line x1="60" y1="240" x2="360" y2="240" stroke="#234b45" stroke-width="3" stroke-dasharray="5,4"/><text x="210" y="258" font-size="12" fill="#234b45">木板对地 1 m</text><text x="500" y="160" font-size="13" fill="#4fb3a5">相对位移</text><text x="500" y="180" font-size="13" fill="#4fb3a5">= 4 − 1 = 3 m</text><text x="340" y="290" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">Q = f × 3 m，不是 4 m 也不是 1 m</text></svg>', caption: '图3　摩擦生热用两物体相对位移，Q = f × x_相对，此处 x_相对 = 3 m。' }
    ],
    exercises: [
      { type: 'choice', question: '关于重力做功与重力势能的关系，正确的是？', options: ['W_G = ΔE_p', 'W_G = −ΔE_p', '重力做正功时势能增加', '重力做功与高度差无关'], answer: 'W_G = −ΔE_p', explanation: '重力做功等于重力势能变化量的相反数，即 W_G = −ΔE_p。重力做正功时物体下降，重力势能减少，此时 W_G 为正、ΔE_p 为负，二者互为相反数。且重力做功只与初末高度差有关，与路径无关。' },
      { type: 'choice', question: '除重力和弹力外，其他力对物体做的总功 W_其他 与机械能变化 ΔE_机械 的关系是？', options: ['W_其他 = −ΔE_机械', 'W_其他 = ΔE_机械', 'W_其他 = 0 时机械能减少', 'W_其他 与机械能无关'], answer: 'W_其他 = ΔE_机械', explanation: '根据功能关系，除重力和弹力外的其他力做的总功等于机械能的变化量，即 W_其他 = ΔE_机械。其他力做正功时机械能增加，做负功时机械能减少，不做功时机械能守恒。这是判断机械能增减的统一标准。' },
      { type: 'choice', question: '一对滑动摩擦力做功产生的热量 Q 等于？', options: ['f × 木块对地位移', 'f × 木板对地位移', 'f × 两物体相对位移', 'f × 两物体位移之和'], answer: 'f × 两物体相对位移', explanation: '摩擦生热公式 Q = f × x_相对，其中 x_相对 是两接触物体间的相对位移，不是任一对地位移。滑动摩擦力在相对位移上做的总功转化为内能，因此必须用相对位移来计算热量，用单个物体位移会算错。' },
      { type: 'fill', question: '合力做功与动能变化的关系为 W_合 = ___（用动能变化量符号填写）。', answer: 'ΔE_k', explanation: '这正是动能定理的表述：合力做的总功等于物体动能的变化量，即 W_合 = ΔE_k = E_k2 − E_k1。合力做正功动能增加，做负功动能减少，它是功能关系中最基础的一条。' },
      { type: 'fill', question: '一对滑动摩擦力产生的热量 Q = f × ___（用相对位移符号 x_相对 填写）。', answer: 'x_相对', explanation: '摩擦生热公式为 Q = f × x_相对，其中 f 是滑动摩擦力大小，x_相对 是两物体间的相对位移。这部分机械能通过滑动摩擦转化为内能（热量），必须用相对位移而非任一对地位移来计算。' }
    ]
  });
})();
