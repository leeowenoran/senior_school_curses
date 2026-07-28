/* ============================================================
 * 高三复习 · 计算压轴 · 专题一 力学计算
 * 课时6：动量守恒与碰撞、能量综合计算
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u6',
    name: '动量守恒与碰撞、能量综合计算',
    chapter: '计算压轴 · 专题一 力学计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、动量、动量定理' },
      { type: 'paragraph', text: '动量 p 是物体的"运动量是多大"的度量，等于质量乘速度：p = m×v，是个矢量，方向和速度相同。动量定理则把"力作用一段时间"和"动量变化"联系起来：合外力的冲量等于动量变化。' },
      { type: 'keypoint', label: '重点·动量定理', text: '<strong>动量 p = m×v（矢量）。动量定理：F合×Δt = Δp = m×v末 − m×v初。</strong>左边是力在时间上的积累（冲量），右边是动量变化。它适合处理打击、碰撞、缓冲等"短时间大力"问题，不必知道中间细节。' },
      { type: 'list', items: ['动量是矢量，方向同速度方向', '冲量 I = F×Δt，也是矢量，方向同力', '动量变化 Δp 与冲量等大同向', '缓冲（延长时间）可减小受力，如跳远屈膝、安全气囊'] },
      { type: 'paragraph', text: '动量定理用得好，可以避开复杂的受力过程。比如鸡蛋落地，地面给的力很大；若下面铺海绵延长作用时间，同样动量变化下受力就小很多。' },
      { type: 'heading', text: '二、动量守恒定律' },
      { type: 'paragraph', text: '如果系统不受外力，或所受合外力为零，系统总动量保持不变。碰撞、爆炸、反冲都近似满足（作用时间极短，外力冲量可忽略），是这类题的核心武器。' },
      { type: 'keypoint', label: '重点·动量守恒', text: '<strong>条件：系统合外力为零（或某方向合外力为零，则该方向动量守恒）。</strong>表达式：m₁×v₁ + m₂×v₂ = m₁×v₁末 + m₂×v₂末（一维，带正负号）。碰撞前后总动量相等，是列方程的根本依据。' },
      { type: 'example', label: '例题·一维碰撞', text: '质量 m₁=2 kg 以 v₁=4 m/s 向右，碰静止 m₂=2 kg，碰后 m₁ 以 1 m/s 向右，求 m₂ 碰后速度。（取向右为正）<br><br><strong>解析</strong>：动量守恒：2×4 + 2×0 = 2×1 + 2×v₂末。左边 8，右边 2 + 2×v₂末，得 2×v₂末 = 6，v₂末 = 3 m/s，向右。再算动能：初 ½×2×16=16 J，末 ½×2×1 + ½×2×9 = 1+9 = 10 J，动能减少，属非弹性碰撞，能量转化为内能。' },
      { type: 'list', items: ['先规定正方向，给各速度带正负号', '判断是否满足守恒条件（合外力近似为零）', '列 m₁×v₁ + m₂×v₂ = m₁×v₁末 + m₂×v₂末', '结合能量关系区分弹性/非弹性碰撞'] },
      { type: 'tip', label: '提示·方向即正负', text: '<strong>一维动量守恒一定要先定正方向，速度按方向取正负。</strong>例如追尾碰撞中前车速度若与正方向相反就取负。列的是代数方程，正负号自动体现方向，最后结果的正负再反推实际方向。' },
      { type: 'heading', text: '三、碰撞的分类与反冲' },
      { type: 'paragraph', text: '碰撞按能量是否守恒分两类：弹性碰撞动能守恒（如钢球、分子），非弹性碰撞动能不守恒（部分变内能）。完全非弹性碰撞是两物体碰后粘在一起、共速，动能损失最大。反冲则是系统内一部分向某方向运动、另一部分向反方向运动（如火箭、射击）。' },
      { type: 'keypoint', label: '重点·碰撞类型', text: '<strong>弹性碰撞：动量守恒 + 动能守恒，可联立解出两末速度。</strong>完全非弹性碰撞：碰后共速 v共 = (m₁×v₁+m₂×v₂)/(m₁+m₂)，动能损失最大。<strong>反冲：系统动量守恒，m₁×v₁ + m₂×v₂ = 0（初动量为0时），两部分反向运动。</strong>' },
      { type: 'example', label: '例题·反冲', text: '静止在光滑冰面的两人，质量分别 60 kg、40 kg，互推后 40 kg 的人以 3 m/s 向后，求 60 kg 的人速度。（取向前为正）<br><br><strong>解析</strong>：初总动量为0，系统动量守恒：0 = 60×v + 40×(−3)。得 60×v = 120，v = 2 m/s，向前。两人反向运动，正是反冲，总动量始终为零。' },
      { type: 'list', items: ['弹性碰撞：联立动量和动能两方程', '非弹性：只动量守恒，动能有损失', '完全非弹性：共速，动能损失最大', '反冲：初动量为0则两部分动量等大反向'] },
      { type: 'tip', label: '提示·弹性碰撞结论', text: '<strong>质量相等的两球弹性正碰会"交换速度"：v₁末=v₂初、v₂末=v₁初。</strong>记住这个特例能秒杀很多题。若一动碰一静且等质量，则动的停下、静的以原速前进。这是弹性碰撞的对称美。' },
      { type: 'heading', text: '四、动量与能量综合' },
      { type: 'paragraph', text: '高考压轴常把动量和能量揉在一起：先用动量守恒求碰后速度，再用动能定理或机械能守恒算上升高度、压缩量等。两套守恒各管一段，配合起来威力巨大。' },
      { type: 'keypoint', label: '重点·综合套路', text: '<strong>碰撞瞬间用动量守恒（过程极短外力冲量可忽略）；碰后运动用能量法（动能定理、机械能守恒）。</strong>判断弹性与否决定是否还能列动能守恒。先动量后能量，分段处理。' },
      { type: 'example', label: '例题·动量+能量', text: '质量 m=1 kg 小球以 v=6 m/s 撞静止同质量弹簧（另一端固定），无摩擦。求弹簧最大压缩量。（k=100 N/m，弹性碰撞式能量转化）<br><br><strong>解析</strong>：球撞弹簧后减速，当速度减为0时弹簧压缩最大。此过程只有弹簧弹力做功，机械能守恒：½×m×v² = ½×k×x²。代入 ½×1×36 = ½×100×x²，得 18 = 50×x²，x² = 0.36，x = 0.6 m。' },
      { type: 'table', headers: ['情形', '用哪条规律', '关键式'], rows: [['碰撞瞬间', '动量守恒', 'm₁×v₁+m₂×v₂=m₁×v₁末+m₂×v₂末'], ['弹性碰撞', '再加动能守恒', '½×m₁×v₁²+½×m₂×v₂²=½×m₁×v₁末²+½×m₂×v₂末²'], ['碰后上坡/压缩', '机械能守恒/动能定理', '½×m×v²=m×g×h 或 =½×k×x²'], ['打击缓冲', '动量定理', 'F×Δt=Δp']] },
      { type: 'warn', label: '易错·守恒条件', text: '<strong>动量守恒看"合外力是否为零"，机械能守恒看"是否只有重弹力做功"，两者条件不同、互不等价。</strong>例如地面光滑两球碰撞，动量守恒但若是完全非弹性碰撞则机械能不守恒。别因为动量守恒就默认机械能也守恒。' },
      { type: 'paragraph', text: '动量能量综合题的固定打法：①碰撞/爆炸/反冲瞬间先用动量守恒求速度；②若弹性再加动能守恒；③碰后用能量法算高度、压缩量、生热。牢记动量守恒管"过程极短"，能量法管"状态变化"，分工明确。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">一维碰撞：碰前总动量 = 碰后总动量</text><circle cx="160" cy="150" r="18" fill="#234b45"/><line x1="178" y1="150" x2="240" y2="150" stroke="#4fb3a5" stroke-width="3"/><text x="205" y="140" font-size="13" fill="#234b45" text-anchor="middle">v1</text><circle cx="480" cy="150" r="18" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="360" y="200" font-size="13" fill="#234b45" text-anchor="middle">碰前</text><circle cx="320" cy="270" r="18" fill="#234b45"/><circle cx="460" cy="270" r="18" fill="#4fb3a5"/><text x="360" y="290" font-size="13" fill="#234b45" text-anchor="middle">碰后(均向右)</text></svg>', caption: '图1　一维碰撞前后，系统总动量（带方向）保持不变，可列代数方程求末速度。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">反冲：初动量为0，两部分反向、动量等大</text><circle cx="300" cy="150" r="16" fill="#234b45"/><line x1="316" y1="150" x2="360" y2="150" stroke="#4fb3a5" stroke-width="3"/><text x="338" y="140" font-size="13" fill="#234b45" text-anchor="middle">向前</text><circle cx="380" cy="150" r="16" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="364" y1="150" x2="320" y2="150" stroke="#4fb3a5" stroke-width="3"/><text x="342" y="170" font-size="13" fill="#234b45" text-anchor="middle">向后</text><text x="340" y="230" font-size="13" fill="#234b45" text-anchor="middle">总动量始终为0：m1×v1+m2×v2=0</text></svg>', caption: '图2　反冲现象中两部分动量等大反向，系统总动量保持为零。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动量+能量：碰后用机械能守恒求最大压缩量</text><circle cx="150" cy="150" r="16" fill="#234b45"/><line x1="166" y1="150" x2="240" y2="150" stroke="#4fb3a5" stroke-width="3"/><g stroke="#2e9e8f" stroke-width="3"><line x1="280" y1="142" x2="300" y2="142"/><line x1="300" y1="138" x2="300" y2="146"/><line x1="300" y1="142" x2="320" y2="142"/><line x1="320" y1="138" x2="320" y2="146"/><line x1="320" y1="142" x2="340" y2="142"/></g><rect x="340" y="130" width="40" height="60" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="470" y="150" font-size="13" fill="#234b45" text-anchor="middle">½×m×v²=½×k×x²</text></svg>', caption: '图3　球撞弹簧减速到零时压缩最大，动能全部转为弹性势能。' }
    ],
    exercises: [
      { type: 'choice', question: '关于动量守恒定律，下列说法正确的是？', options: ['系统不受外力时动量守恒', '只要动能守恒动量就守恒', '有摩擦力时动量一定不守恒', '系统合外力为零才守恒，与机械能无关'], answer: '系统合外力为零才守恒，与机械能无关', explanation: '动量守恒的条件是系统所受合外力为零（或某方向合外力为零则该方向守恒），与机械能是否守恒是两回事。系统不受外力当然守恒，但更一般的条件是合外力为零，并不要求无摩擦。动能守恒既不推出动量守恒、也不等价。故最准确的是"系统合外力为零才守恒，与机械能无关"。' },
      { type: 'choice', question: '质量相等的两钢球发生一维弹性正碰，球A初速v碰静止球B，碰后？', options: ['A继续以v前进，B不动', 'A停下，B以v前进', '两球都停', '两球各以v/2前进'], answer: 'A停下，B以v前进', explanation: '质量相等的两球一维弹性正碰会交换速度。可由联立动量守恒 m×v = m×v_A末 + m×v_B末 与动能守恒 ½×m×v² = ½×m×v_A末² + ½×m×v_B末² 解得 v_A末 = 0、v_B末 = v。这就是"交换速度"的特例，所以 A 停下、B 以原速 v 前进。' },
      { type: 'choice', question: '关于动量定理 F×Δt = Δp，下列说法正确的是？', options: ['只适用恒力', '适用于打击、碰撞等短时间大力情形', '力作用时间越长受力越大', '动量变化与冲量无关'], answer: '适用于打击、碰撞等短时间大力情形', explanation: '动量定理 F×Δt = Δp 既适用于恒力也适用于变力（F 取平均力），特别适合处理打击、碰撞、缓冲等过程复杂、时间极短但力很大的情形，因为它只需关注初末动量差，不必追究中间过程。时间越长在相同动量变化下平均受力越小，而非越大。' },
      { type: 'fill', question: '质量 3 kg 的物体以 4 m/s 向右运动，其动量为___kg·m/s。（向右为正）', answer: '12', explanation: '动量 p = m×v = 3×4 = 12 kg·m/s，方向与速度相同即向右为正。动量是矢量，计算时要注意方向，若物体向左运动则应取负值。' },
      { type: 'fill', question: '完全非弹性碰撞中，质量 m₁=2 kg、m₂=3 kg，m₁ 以 5 m/s 碰静止 m₂，碰后共同速度 v共 = ___m/s。', answer: '2', explanation: '完全非弹性碰撞碰后两物体共速。由动量守恒：m₁×v₁ + m₂×0 = (m₁+m₂)×v共，即 2×5 = (2+3)×v共，得 10 = 5×v共，v共 = 2 m/s。此时动能损失最大，部分转化为内能。' }
    ]
  });
})();
