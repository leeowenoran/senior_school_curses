/* ============================================================
 * 高三复习 · 力学综合 · 专题六 动量与碰撞
 * 课时25：动量守恒定律及其应用
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u25',
    name: '动量守恒定律及其应用',
    chapter: '力学综合 · 专题六 动量与碰撞',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、动量守恒定律的内容' },
      { type: 'paragraph', text: '几个物体相互作用时（比如两个小车碰撞、炮弹发射炮弹），如果它们受到的"外力总和"为零，那么这些物体组成的整体，其总动量在相互作用前后保持不变。这就是动量守恒定律。它和能量守恒一样，是自然界最基本、最万能的规律之一，大到天体、小到微观粒子都适用。' },
      { type: 'keypoint', label: '重点·动量守恒定律', text: '<strong>如果一个系统不受外力，或者所受合外力为零，这个系统的总动量保持不变。</strong>写成式子：m₁×v₁ + m₂×v₂ = m₁×v₁′ + m₂×v₂′（多个物体时，所有物体初动量之和等于末动量之和）。' },
      { type: 'paragraph', text: '这里的"系统"是我们选定的研究对象整体。定律关心的是"系统总动量"，不是某一个物体的动量。单个物体的动量可能变来变去，但只要合外力为零，所有物体动量加起来的总和恒定不变。' },
      { type: 'list', items: ['系统不受外力，总动量守恒', '系统所受合外力为零（外部推力、摩擦力等合力为零），总动量守恒', '系统受外力但某方向合外力为零，则该方向动量守恒（分方向守恒）', '碰撞、爆炸时间极短，内力远大于外力，可近似认为动量守恒'] },
      { type: 'heading', text: '二、守恒条件怎么判断' },
      { type: 'paragraph', text: '考试里判断"能不能用动量守恒"，关键看系统合外力是否为零。最典型的易错点是：把"系统内力"当成"外力"。动量守恒只看"系统外面"的力；系统内部物体之间的相互作用力（如两球相碰的弹力）是内力，不改变总动量。' },
      { type: 'warn', label: '易错', text: '<strong>动量守恒的条件是"系统合外力为零"，不是"系统不受内力"。</strong>内力再大也只会在系统内部重新分配动量，不会让总动量改变。另外地面光滑不等于合外力为零的充要——要确认所有外力（重力、支持力、摩擦等）的矢量和确实为零。' },
      { type: 'table', headers: ['情形', '合外力', '动量是否守恒', '说明'], rows: [['两球在光滑水平面碰撞', '为零', '守恒', '无摩擦，竖直方向重力和支持力抵消'], ['斜面上两物体碰撞', '不为零', '不守恒', '有沿斜面的合外力分量'], ['爆炸（瞬间）', '近似为零', '近似守恒', '内力远大于外力，时间极短'], ['竖直下落中炸裂', '重力不为零', '不守恒', '但水平方向仍守恒']] },
      { type: 'example', label: '例题·判断是否守恒', text: '两个小球在光滑水平桌面上相向运动并碰撞。问碰撞前后两球组成的系统总动量是否守恒？<br><br><strong>解析</strong>：<br>水平桌面光滑，两球在水平方向不受外力；竖直方向重力与支持力平衡。因此系统所受合外力为零，满足守恒条件。<br>结论：碰撞前后系统总动量守恒，可用 m₁×v₁ + m₂×v₂ = m₁×v₁′ + m₂×v₂′ 列式。' },
      { type: 'keypoint', label: '重点·表达式的矢量写法', text: '<strong>列式前先规定正方向，把各速度写成带正负的代数量。</strong>一维情况直接代数相加：p初 = p末，即 m₁×v₁ + m₂×v₂ = m₁×v₁′ + m₂×v₂′。结果为正则沿正方向，为负则沿反方向。' },
      { type: 'tip', label: '提示', text: '<strong>动量守恒是矢量守恒，常拆成"某一方向"来用。</strong>比如炸弹在空中爆炸，竖直方向受重力、不守恒，但水平方向无外力，水平方向总动量仍然守恒。遇到斜向、竖直问题，优先检查某个方向是否合外力为零。' },
      { type: 'heading', text: '三、解题步骤与方法归纳' },
      { type: 'paragraph', text: '用动量守恒解题，套路比牛顿定律更清爽：不必分析中间繁琐的相互作用力，只要初态、末态清楚，且系统满足守恒条件，就能直接由"总量相等"求出未知速度。特别适合碰撞、反冲、爆炸、人船模型等。' },
      { type: 'list', items: ['明确系统：选定哪些物体作为整体', '判断守恒：系统合外力是否为零（或某方向是否为零）', '规定正方向：速度带正负号', '列守恒式：初总动量 = 末总动量', '结合其他条件（能量、运动学）联立求解'] },
      { type: 'example', label: '例题·反冲求速度', text: '质量为 60 kg 的人站在静止于光滑冰面的 40 kg 小车上，人相对地面以 2 m/s 向车后跳出。取向前为正方向，求人跳离后小车的速度。<br><br><strong>解析</strong>：<br>人与车组成系统，水平面光滑，水平方向合外力为零，动量守恒。初态总动量为 0。<br>设车速度为 v（向前为正），人相对地速度为 −2 m/s。<br>由 0 = 60×(−2) + 40×v，得 40v = 120，v = 3 m/s。<br>小车以 3 m/s 向前运动。' },
      { type: 'warn', label: '易错', text: '<strong>注意"相对速度"的参照系。</strong>题目常给"人相对车"的速度，而守恒式要用"相对地面"的速度。必须先换算成对地速度再代入，否则方向符号全错。上例中若给的是相对车速度，还需用 v人对地 = v人对车 + v车对地 转换。' },
      { type: 'table', headers: ['对比项', '动量守恒', '机械能守恒'], rows: [['守恒条件', '系统合外力为零', '只有重力或弹力做功'], ['守恒量', '总动量（矢量）', '总机械能（标量）'], ['适用范围', '宏观到微观均适用', '有约束（非保守力做功则不守恒'], ['典型场景', '碰撞、爆炸、反冲', '自由落体、光滑斜面']] },
      { type: 'list', items: ['动量守恒看"外力"，机械能守恒看"非保守力做功"', '碰撞过程常动量守恒，但不一定机械能守恒', '爆炸过程动量守恒，但机械能增加（化学能转化）', '两规律常联合使用，先看动量列等式，再用能量限范围'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">光滑水平面上两球碰撞，系统总动量守恒</text><rect x="40" y="90" width="270" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="175" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">碰前</text><circle cx="110" cy="180" r="20" fill="#4fb3a5"/><line x1="130" y1="180" x2="180" y2="180" stroke="#234b45" stroke-width="3"/><polygon points="180,174 196,180 180,186" fill="#234b45"/><text x="110" y="225" font-size="12" fill="#234b45" text-anchor="middle">m₁v₁</text><circle cx="250" cy="180" r="20" fill="#4fb3a5"/><line x1="270" y1="180" x2="220" y2="180" stroke="#234b45" stroke-width="3"/><polygon points="220,174 204,180 220,186" fill="#234b45"/><text x="250" y="225" font-size="12" fill="#234b45" text-anchor="middle">m₂v₂</text><rect x="370" y="90" width="270" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="505" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">碰后</text><circle cx="440" cy="180" r="20" fill="#4fb3a5"/><line x1="460" y1="180" x2="510" y2="180" stroke="#234b45" stroke-width="3"/><polygon points="510,174 526,180 510,186" fill="#234b45"/><text x="440" y="225" font-size="12" fill="#234b45" text-anchor="middle">m₁v₁′</text><circle cx="580" cy="180" r="20" fill="#4fb3a5"/><line x1="600" y1="180" x2="550" y2="180" stroke="#234b45" stroke-width="3"/><polygon points="550,174 534,180 550,186" fill="#234b45"/><text x="580" y="225" font-size="12" fill="#234b45" text-anchor="middle">m₂v₂′</text><text x="340" y="268" font-size="14" fill="#234b45" text-anchor="middle">m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′</text></svg>', caption: '图1　光滑水平面上两球碰撞，系统不受水平外力，总动量前后守恒。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动量守恒是矢量守恒：先定正方向</text><line x1="80" y1="160" x2="600" y2="160" stroke="#2e9e8f" stroke-width="2"/><polygon points="600,153 618,160 600,167" fill="#2e9e8f"/><text x="340" y="150" font-size="12" fill="#234b45" text-anchor="middle">正方向 →</text><line x1="220" y1="160" x2="320" y2="160" stroke="#4fb3a5" stroke-width="5"/><polygon points="320,152 338,160 320,168" fill="#4fb3a5"/><text x="270" y="140" font-size="13" fill="#4fb3a5" text-anchor="middle">v₁ 正</text><line x1="420" y1="160" x2="320" y2="160" stroke="#234b45" stroke-width="5"/><polygon points="320,152 302,160 320,168" fill="#234b45"/><text x="370" y="185" font-size="13" fill="#234b45" text-anchor="middle">v₂ 负</text><rect x="120" y="220" width="440" height="56" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="253" font-size="14" fill="#234b45" text-anchor="middle">初总动量 = m₁v₁(正) + m₂v₂(负)，带符号相加</text></svg>', caption: '图2　一维动量守恒要先规定正方向，各速度按正负号代入求和。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">反冲：人向后跳，车向前走（总动量仍为零）</text><rect x="60" y="90" width="240" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="125" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">初态（静止）</text><rect x="120" y="160" width="120" height="50" rx="6" fill="#4fb3a5"/><text x="180" y="190" font-size="13" fill="#234b45" text-anchor="middle">人+车</text><text x="180" y="228" font-size="13" fill="#234b45" text-anchor="middle">总动量 = 0</text><rect x="380" y="90" width="240" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="125" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">末态（反冲）</text><circle cx="450" cy="175" r="18" fill="#4fb3a5"/><line x1="432" y1="175" x2="382" y2="175" stroke="#234b45" stroke-width="3"/><polygon points="382,169 366,175 382,181" fill="#234b45"/><text x="450" y="215" font-size="11" fill="#234b45" text-anchor="middle">人(向后)</text><rect x="520" y="160" width="90" height="40" rx="6" fill="#4fb3a5"/><line x1="520" y1="180" x2="470" y2="180" stroke="#234b45" stroke-width="3"/><polygon points="470,174 454,180 470,186" fill="#234b45"/><text x="565" y="215" font-size="11" fill="#234b45" text-anchor="middle">车(向前)</text></svg>', caption: '图3　人向后跳离小车，小车向前反冲，系统总动量仍为零。' }
    ],
    exercises: [
      { type: 'choice', question: '关于动量守恒定律的适用条件，下列说法正确的是？', options: ['系统不受内力时动量才守恒', '系统所受合外力为零时动量守恒', '系统内部有相互作用力时动量不守恒', '只要有摩擦力动量就不守恒'], answer: '系统所受合外力为零时动量守恒', explanation: '动量守恒的条件是系统不受外力或所受合外力为零。系统内部物体之间的相互作用力是内力，内力只会重新分配系统内各物体的动量，不会改变系统的总动量。摩擦力若被其他力平衡使合外力为零，系统仍可守恒。因此正确选项是"系统所受合外力为零时动量守恒"。' },
      { type: 'choice', question: '两个小球在光滑水平面上碰撞，关于系统动量守恒，正确的表述是？', options: ['只有质量相等才守恒', '只有弹性碰撞才守恒', '合外力为零，总动量守恒', '碰后两球速度一定相等'], answer: '合外力为零，总动量守恒', explanation: '光滑水平面上两球碰撞时，水平方向无外力，竖直方向重力与支持力平衡，系统合外力为零，因此总动量守恒。动量守恒与两球质量是否相等、碰撞是否弹性无关，碰后速度也不一定相等。正确选项是"合外力为零，总动量守恒"。' },
      { type: 'choice', question: '用动量守恒列式时，正确的做法第一步是？', options: ['直接把速度大小相加', '先规定正方向，速度带正负号', '只比较动能大小', '忽略方向直接代入'], answer: '先规定正方向，速度带正负号', explanation: '动量守恒是矢量规律，一维情况下必须先用正号、负号表示各速度的方向，把所有动量按带符号的代数相加，才能正确列式。不规定正方向、盲目把速度大小相加是常见错误。因此正确做法是"先规定正方向，速度带正负号"。' },
      { type: 'fill', question: '动量守恒定律的表达式（两物体一维）为：m₁×v₁ + m₂×v₂ = ___（用末速度 v₁′、v₂′ 表示）。', answer: 'm₁×v₁′ + m₂×v₂′', explanation: '动量守恒定律指出系统总动量保持不变，两物体情况下初态总动量 m₁×v₁ + m₂×v₂ 等于末态总动量 m₁×v₁′ + m₂×v₂′。列式时所有速度应先按规定的正方向写成带正负的代数量。这是处理碰撞、反冲、爆炸等问题的基本方程。' },
      { type: 'fill', question: '炸弹在空中爆炸时，竖直方向受重力作用、合外力不为零，因此___方向动量不守恒，但水平方向无外力，水平方向动量仍守恒（填"竖直"或"水平"）。', answer: '竖直', explanation: '炸弹在空中爆炸，系统受重力，竖直方向合外力不为零，所以竖直方向动量不守恒；但水平方向不受外力，水平方向合外力为零，水平方向动量仍然守恒。这体现动量守恒可以按"某一方向"分别判断和使用，是矢量守恒的重要应用。' }
    ]
  });
})();
