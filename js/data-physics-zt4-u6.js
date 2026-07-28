/* ============================================================
 * 高三复习 · 实验专题 · 专题一 力学实验
 * 课时6：验证动量守恒定律
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u6',
    name: '验证动量守恒定律',
    chapter: '实验专题 · 专题一 力学实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验想验证什么' },
      { type: 'paragraph', text: '两个小球碰撞时，各自的快慢会变，但它们"质量乘以速度"的总和（这个量叫动量，记作 p = m v）在碰撞前后会不会变？动量守恒定律说：若系统不受外力或外力合力为零，则总动量不变。这一课用两个小球碰撞来验证 m₁ v₁ + m₂ v₂ 在碰前碰后相等。' },
      { type: 'list', items: ['斜槽轨道、两个大小相同但质量不同的小球（入射球、靶球）', '重锤线、白纸、复写纸、刻度尺、圆规', '天平（测两球质量）'] },
      { type: 'heading', text: '二、怎么测碰前碰后的速度' },
      { type: 'paragraph', text: '本实验巧妙之处在于：让小球从斜槽滚下后做平抛运动，平抛时间相同，所以小球飞出的水平距离就正比于它的速度。记录落点，用水平距离代替速度来比较，不必真的测速度大小。' },
      { type: 'keypoint', label: '重点·用水平距离代速度', text: '<strong>平抛运动飞行时间相同，水平位移 x = v t，所以速度 v 正比于落点的水平距离 x。</strong>验证式可写成 m₁ x₁ + m₂ x₂ = m₁ x₁′ + m₂ x₂′，用距离代替速度，避开了测时间的麻烦。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">斜槽碰撞：落点距离代表速度</text><path d="M 80 90 Q 180 90 230 170 L 230 240" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="230" cy="170" r="10" fill="#4fb3a5"/><text x="200" y="120" font-size="12" fill="#234b45">入射球</text><line x1="230" y1="240" x2="630" y2="240" stroke="#234b45" stroke-width="2" stroke-dasharray="5 4"/><text x="420" y="258" font-size="12" fill="#234b45">水平地面（白纸+复写纸）</text><circle cx="300" cy="240" r="5" fill="#234b45"/><text x="300" y="232" font-size="12" fill="#234b45">落点1</text><circle cx="470" cy="240" r="5" fill="#234b45"/><text x="470" y="232" font-size="12" fill="#234b45">落点2</text></svg>', caption: '图1　小球碰后做平抛，落点的水平距离正比于碰后速度，用距离代替速度。' },
      { type: 'heading', text: '三、实验步骤与落点' },
      { type: 'paragraph', text: '先让入射球单独从斜槽滚下，落点为 P（代表碰前速度 v₁）。再把靶球放在槽口末端，入射球撞它后，两球分别落在 M 和 N。用圆规找多次落点的平均位置。然后用距离表示速度，验证 m₁ × OP = m₁ × OM + m₂ × ON。' },
      { type: 'list', items: ['用天平测两球质量 m₁（入射球）、m₂（靶球），且 m₁ 应大于 m₂', '不放靶球，让入射球落点重复多次，取平均得 P', '放靶球，重复碰撞，分别取平均落点 M（入射球）、N（靶球）', '用刻度尺量 OP、OM、ON', '验证 m₁ × OP = m₁ × OM + m₂ × ON'] },
      { type: 'example', label: '例题·验证动量守恒', text: '例：m₁ = 2m、m₂ = m，测得 OP = 30.0 cm、OM = 10.0 cm、ON = 40.0 cm。验证守恒。<br><strong>解析</strong>：碰前总动量（用距离代）m₁ × OP = 2m × 30.0 = 60.0 m；碰后 m₁ × OM + m₂ × ON = 2m × 10.0 + m × 40.0 = 20.0 m + 40.0 m = 60.0 m。两边相等，动量守恒成立。' },
      { type: 'warn', label: '易错', text: '<strong>入射球质量必须大于靶球，否则碰后入射球会反弹，落点位置判断易乱。</strong>另外落点要取"多次平均位置"而非单次；量距离要从槽口正下方的 O 点量起，O 点用重锤线确定，不能随便选起点。' },
      { type: 'heading', text: '四、为什么动量守恒' },
      { type: 'paragraph', text: '碰撞发生在极短时间内，两球之间的相互作用力（内力）很大，而外界（重力、支持力）的合力近似为零，所以系统总动量在碰撞前后保持不变。这是动量守恒定律成立的条件：系统所受合外力为零。' },
      { type: 'table', headers: ['阶段', '动量表达（用距离代速度）', '说明'], rows: [['碰前', 'm₁ × OP', '只有入射球运动'], ['碰后', 'm₁ × OM + m₂ × ON', '两球分开落不同点'], ['守恒式', 'm₁×OP = m₁×OM + m₂×ON', '两边应近似相等']] },
      { type: 'keypoint', label: '重点·守恒条件', text: '<strong>动量守恒的前提是系统合外力为零（或内力远大于外力）。</strong>本实验中碰撞瞬间内力远大于重力影响，故可认为碰撞过程动量守恒。若斜槽不水平、有持续外力，结论就不准。' },
      { type: 'heading', text: '五、另一种装置：气垫导轨' },
      { type: 'paragraph', text: '有些学校用气垫导轨做这个实验：两个滑块在几乎无摩擦的导轨上碰撞，用光电门测各自速度。验证式直接写成 m₁ v₁ + m₂ v₂ = m₁ v₁′ + m₂ v₂′。原理一样，只是速度由光电门实测，更精确。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">气垫导轨：光电门测碰前碰后速度</text><line x1="60" y1="160" x2="630" y2="160" stroke="#2e9e8f" stroke-width="4"/><rect x="200" y="138" width="50" height="22" rx="4" fill="#4fb3a5"/><text x="225" y="153" font-size="11" fill="#234b45" text-anchor="middle">滑块1</text><rect x="400" y="138" width="50" height="22" rx="4" fill="#4fb3a5"/><text x="425" y="153" font-size="11" fill="#234b45" text-anchor="middle">滑块2</text><rect x="300" y="120" width="14" height="44" rx="3" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="307" y="180" font-size="11" fill="#234b45" text-anchor="middle">光电门</text><text x="340" y="230" font-size="12" fill="#234b45" text-anchor="middle">验证 m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′</text></svg>', caption: '图2　气垫导轨配光电门直接测速度，验证两滑块总动量守恒。' },
      { type: 'tip', label: '提示', text: '<strong>用圆规找平均落点：以落点群中心为圆心画尽量小的圆，圆心即平均位置。</strong>多次重复可减小偶然误差；每次小球要从斜槽同一高度释放，保证碰前速度一致。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">守恒：碰前总动量 = 碰后总动量</text><rect x="110" y="100" width="200" height="90" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="210" y="135" font-size="13" fill="#234b45" text-anchor="middle">碰前：m₁v₁</text><text x="210" y="160" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">一个动量</text><rect x="370" y="100" width="200" height="90" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="470" y="135" font-size="13" fill="#234b45" text-anchor="middle">碰后：m₁v₁′+m₂v₂′</text><text x="470" y="160" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">总和相等</text><text x="340" y="225" font-size="12" fill="#234b45" text-anchor="middle">内力远大于外力时，总动量不变</text></svg>', caption: '图3　碰撞前后系统总动量相等，这就是动量守恒定律。' },
      { type: 'paragraph', text: '小结：验证动量守恒，既可用斜槽落点（距离代速度）也可用气垫导轨（光电门测速）。核心是碰前总动量等于碰后总动量，前提是碰撞时合外力近似为零。' },
      { type: 'warn', label: '易错', text: '<strong>动量守恒是矢量关系，要带方向。</strong>一维碰撞中通常取向右为正，向左的速度要取负值。若碰后某球反弹，其速度代入时为负数，不能一股脑全用正数相加，否则会"凭空多出动量"。' }
    ],
    exercises: [
      { type: 'choice', question: '本实验用落点水平距离代替速度，依据的原理是？', options: ['匀速直线运动', '平抛运动飞行时间相同，水平位移正比于速度', '自由落体', '圆周运动'], answer: '平抛运动飞行时间相同，水平位移正比于速度', explanation: '小球碰后做平抛运动，从同一高度飞出，在空中时间 t 相同。水平位移 x = v t，故 v 正比于 x，可用落点距离代替速度比较动量，避开测时间。' },
      { type: 'choice', question: '用斜槽验证动量守恒时，对两球质量的要求是？', options: ['两球质量必须相等', '入射球质量应大于靶球质量', '靶球质量应大于入射球', '无所谓'], answer: '入射球质量应大于靶球质量', explanation: '若入射球质量不大于靶球，碰撞后入射球可能反弹，落点位置和方向判断会变复杂，甚至违背"碰后向前"的直观。通常要求 m₁ > m₂ 以保证入射球碰后仍向前。' },
      { type: 'choice', question: '动量守恒的成立条件是？', options: ['系统不受任何力', '系统所受合外力为零（或内力远大于外力）', '两球质量相等', '速度相同'], answer: '系统所受合外力为零（或内力远大于外力）', explanation: '动量守恒定律要求系统所受合外力为零；碰撞瞬间内力远大于外力时，也可近似认为守恒。并非"不受任何力"，而是合外力为零。' },
      { type: 'fill', question: '用斜槽落点验证动量守恒的式子可写为 m₁ × ___ = m₁ × OM + m₂ × ___（用 OP、ON 填入）。', answer: 'OP', explanation: '碰前只有入射球，动量用 m₁ × OP 表示；碰后两球落点 M、N，总动量为 m₁ × OM + m₂ × ON。验证 m₁×OP = m₁×OM + m₂×ON 即可。OP、OM、ON 均从 O 点量起。' },
      { type: 'fill', question: '动量守恒定律的表达式（一维，带正负号）为 m₁ v₁ + m₂ v₂ = ___（用碰后速度 v₁′、v₂′ 表示）。', answer: 'm₁ v₁′ + m₂ v₂′', explanation: '系统总动量碰前等于碰后：m₁ v₁ + m₂ v₂ = m₁ v₁′ + m₂ v₂′。一维情形要规定正方向，反向速度取负值再代入相加，不能忽略符号。' }
    ]
  });
})();
