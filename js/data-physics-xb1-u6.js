/* ============================================================
 * 选择性必修第一册 · 第一章 动量守恒定律
 * 课时6：实验 验证动量守恒定律
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u6',
    name: '实验：验证动量守恒定律',
    chapter: '选择性必修第一册 · 第一章 动量守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验目的与思路' },
      { type: 'paragraph', text: '这一节课我们亲手做一个实验，看看"系统总动量在碰撞前后是否真的不变"。思路很简单：让两个小球在一维轨道上碰撞，分别测出它们碰前、碰后的质量和速度，算出碰前总动量和碰后总动量，比较两者是否相等。如果相等（在误差范围内），就说动量守恒得到了验证。' },
      { type: 'keypoint', label: '重点·实验核心', text: '<strong>实验核心是验证：碰前总动量 p前总 = m₁×v₁ + m₂×v₂ 与碰后总动量 p后总 = m₁×v₁′ + m₂×v₂′ 是否相等。</strong>只要分别测出质量和速度，就能算出两边进行比较。' },
      { type: 'list', items: ['选两个大小相同、质量可测的小球', '让它们在尽量光滑的一维轨道上发生对心碰撞', '测出每个球的质量和碰前、碰后速度', '比较碰前、碰后总动量是否一致'] },
      { type: 'heading', text: '二、实验装置：一维碰撞装置' },
      { type: 'paragraph', text: '中学常用两种装置。一种是气垫导轨加两个滑块：导轨上喷出的气流托起滑块，使滑动摩擦极小，滑块碰撞近似满足动量守恒。另一种是"碰撞实验器"：一个小球从斜槽滚下，在轨道末端与一个静止小球发生一维碰撞；通过记录落点，再利用平抛运动规律把"速度"换算成"水平射程"来比较。' },
      { type: 'keypoint', label: '重点·一维碰撞装置', text: '<strong>常用一维碰撞装置有气垫导轨（滑块近似无摩擦）和斜槽碰撞实验器（小球做平抛）。</strong>它们的共同目标，都是让两球沿同一直线碰撞，方便只研究一个方向上的动量。' },
      { type: 'example', label: '例题·用平抛测速度', text: '在斜槽实验里，小球碰后做平抛运动。已知每次下落高度 h 相同，则空中时间 t = √(2h/g) 相同。若碰后小球水平射程为 x，则其速度 v = x / t = x × √(g/(2h))。<br><br><strong>解析</strong>：<br>因为高度 h 不变，所有小球平抛时间 t 都相同。速度就正比于水平射程 x。于是比较动量时，可用 m×x 代替 m×v 来比较：只要 m₁×x₁ + m₂×x₂ 与 m₁×x₁′ + m₂×x₂′ 相等，就说明动量守恒。' },
      { type: 'heading', text: '三、要测哪些量' },
      { type: 'paragraph', text: '不管用哪种装置，都要测两类量：一是质量，用天平分别称出两个小球（或滑块）的质量 m₁、m₂；二是速度，方法因装置而异。气垫导轨常用光电门测挡光时间再算速度；斜槽法则用刻度尺量出落点到抛出点的水平距离 x，再换算成速度。把测到的数代入动量式，就能完成验证。' },
      { type: 'keypoint', label: '重点·待测物理量', text: '<strong>必须测的是：两物体的质量 m₁、m₂，以及碰前、碰后的速度（或等效的水平射程）。</strong>有了质量与速度，总动量 p = m×v 就能算出来。' },
      { type: 'warn', label: '易错', text: '<strong>用斜槽法时，不能直接拿"落点距离"当速度去比，要先确认下落高度相同、时间相同。</strong>只有时间相同时，水平射程才正比于速度，才能用 m×x 代替 m×v 比较。另外要多次实验取平均、选对心碰撞，否则误差会很大，甚至可能"看起来不守恒"。' },
      { type: 'heading', text: '四、实验步骤（以斜槽碰撞器为例）' },
      { type: 'paragraph', text: '第一步，用天平测出两球质量 m₁（入射球）、m₂（被撞球）；第二步，让 m₁ 从固定高度滚下，落在地面记录落点 P；第三步，在末端放 m₂，让两球碰撞，分别记录 m₁ 落点 M 和 m₂ 落点 N；第四步，测出各落点到槽口正下方的水平距离；第五步，代入公式比较 m₁×OP 与 m₁×OM + m₂×ON 是否相等。' },
      { type: 'tip', label: '提示', text: '<strong>为减小误差，入射球 m₁ 应比被撞球 m₂ 重一些，且每次都从同一高度释放。</strong>这样能保证每次碰前速度相同、碰撞是对心的。落点要重复多次取平均位置，用圆规画最小圆把大多数落点包住，圆心就是平均落点。' },
      { type: 'list', items: ['测质量：天平称 m₁、m₂', '测碰前：入射球单独下落，记落点 P（对应 OP）', '测碰后：两球碰撞，记 M、N（对应 OM、ON）', '比较：m₁×OP 与 m₁×OM + m₂×ON 是否相等', '多次重复，取平均落点减小误差'] },
      { type: 'table', headers: ['测量对象', '仪器', '得到量', '用途'], rows: [['小球质量', '天平', 'm₁、m₂', '算动量必须'], ['碰前水平射程', '刻度尺', 'OP', '代表入射球碰前速度'], ['碰后两球射程', '刻度尺', 'OM、ON', '代表两球碰后速度'], ['下落高度（验证用）', '刻度尺', 'h', '确认时间相同、可换算速度']]},
      { type: 'heading', text: '五、怎样判断实验成功' },
      { type: 'paragraph', text: '把数据代入后，如果碰前总动量和碰后总动量在实验误差范围内相等（一般相差不超过百分之几），就说明我们的实验支持动量守恒定律。若相差很大，要检查是否发生了斜碰、是否摩擦太大、是否读数有误。实验的价值，正在于用真实数据把一条规律"看见"。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">一维碰撞装置：气垫导轨</text><rect x="40" y="120" width="320" height="20" fill="#234b45"/><rect x="80" y="95" width="70" height="25" rx="4" fill="#4fb3a5"/><rect x="260" y="95" width="70" height="25" rx="4" fill="#4fb3a5"/><polygon points="150,107 175,107 162,118" fill="#234b45"/><polygon points="330,107 355,107 342,118" fill="#234b45"/><text x="200" y="170" font-size="12" fill="#234b45" text-anchor="middle">滑块近乎无摩擦</text><text x="200" y="200" font-size="12" fill="#234b45" text-anchor="middle">光电门测挡光时间→算速度</text><rect x="400" y="120" width="240" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="520" y="155" font-size="12" fill="#234b45" text-anchor="middle">测 m₁、m₂、v</text></svg>', caption: '图1　气垫导轨上两滑块碰撞，气流托起滑块使摩擦极小，用光电门测速，适合验证一维动量守恒。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">斜槽碰撞器：用平抛测速度</text><polygon points="60,90 120,90 120,210 60,210" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><polygon points="120,150 180,150 180,165 120,165" fill="#4fb3a5"/><circle cx="200" cy="240" r="14" fill="#4fb3a5"/><circle cx="260" cy="240" r="14" fill="#234b45"/><line x1="120" y1="270" x2="420" y2="270" stroke="#234b45" stroke-width="2" stroke-dasharray="5,4"/><text x="170" y="290" font-size="12" fill="#234b45" text-anchor="middle">测落点水平距离→换算速度</text></svg>', caption: '图2　斜槽实验中，小球碰后做平抛，下落高度相同则时间相同，用水平射程就能代表速度大小。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">验证：碰前总动量 ≈ 碰后总动量</text><rect x="40" y="70" width="280" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="98" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">碰前</text><text x="180" y="150" font-size="15" fill="#234b45" text-anchor="middle">p前总 = m₁×v₁</text><text x="180" y="200" font-size="12" fill="#234b45" text-anchor="middle">（m₂ 静止）</text><rect x="360" y="70" width="280" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="98" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">碰后</text><text x="500" y="150" font-size="15" fill="#234b45" text-anchor="middle">p后总 = m₁×v₁′+m₂×v₂′</text><text x="500" y="200" font-size="12" fill="#234b45" text-anchor="middle">两者相等即守恒</text></svg>', caption: '图3　把测到的质量与速度代入，比较碰前、碰后总动量，在误差范围内相等即验证了动量守恒。' }
    ],
    exercises: [
      { type: 'choice', question: '验证动量守恒定律的实验，核心是比较？', options: ['碰前和碰后的总动能', '碰前和碰后的总动量', '碰前和碰后的总质量', '碰前和碰后的总高度'], answer: '碰前和碰后的总动量', explanation: '本实验的目的就是验证系统总动量在碰撞前后是否保持不变，因此要把测到的质量与速度代入 p = m×v，分别算出碰前总动量 m₁×v₁ + m₂×v₂ 和碰后总动量 m₁×v₁′ + m₂×v₂′，比较两者是否在误差范围内相等。比较动能或质量都不是这个实验的核心。' },
      { type: 'choice', question: '用斜槽碰撞实验器时，为什么可以用水平射程 x 代替速度来比较动量？', options: ['射程就等于速度', '下落高度相同，平抛时间相同，x 正比于 v', '小球质量会变', '空气阻力让速度变零'], answer: '下落高度相同，平抛时间相同，x 正比于 v', explanation: '小球碰后做平抛运动，水平方向做匀速运动，竖直方向自由落体。因为每次下落高度 h 相同，空中时间 t = √(2h/g) 就相同。水平射程 x = v×t，所以 x 与 v 成正比。于是比较动量时，可用 m×x 代替 m×v，只要 m₁×OP 与 m₁×OM + m₂×ON 相等即可说明守恒。' },
      { type: 'choice', question: '为减小斜槽碰撞实验的误差，下列做法合理的是？', options: ['入射球比被撞球轻', '每次从同一高度释放入射球', '只做一次取一个落点', '让两球斜碰'], answer: '每次从同一高度释放入射球', explanation: '每次从同一高度释放入射球，可以保证它到达碰撞点的碰前速度相同，并且更容易实现稳定的对心碰撞，从而减小误差。入射球应比被撞球重一些（保证碰后仍能向前），实验要多次重复取平均落点，并尽量保持对心碰撞而非斜碰。' },
      { type: 'fill', question: '实验中必须测量的两类物理量是：两物体的___，以及碰前、碰后的速度（或等效的水平射程）。', answer: '质量', explanation: '动量 p = m×v，要算出总动量就必须知道每个物体的质量和速度。所以实验中要用天平测出两球（或两滑块）的质量 m₁、m₂，再用光电门或平抛射程测出相应的速度，二者缺一不可。' },
      { type: 'fill', question: '若碰前总动量与碰后总动量在实验误差范围内相等，就说明实验___（填"支持"或"否定"）动量守恒定律。', answer: '支持', explanation: '实验的意义在于用真实数据检验理论。当测得的碰前总动量和碰后总动量在合理误差范围内一致时，就说明实际观测与动量守恒定律相符，即实验结果支持该规律。若相差很大，则应检查是否斜碰、摩擦过大或读数错误。' }
    ]
  });
})();
