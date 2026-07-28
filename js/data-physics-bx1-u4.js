/* ============================================================
 * 高一物理 · 必修 第一册 · 第一章 运动的描述
 * 课时4：加速度
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u4',
    name: '加速度',
    chapter: '必修第一册 · 第一章 运动的描述',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、加速度的定义' },
      { type: 'paragraph', text: '运动状态变化快慢，不能只看速度大小，还要看速度变化有多快。物理上用"加速度"来描述速度变化的快慢。加速度等于速度的变化量除以发生这一变化所用的时间。若速度从 v₁ 变到 v₂，变化量 Δv = v₂ − v₁，所用时间 Δt，则加速度 a = Δv / Δt。' },
      { type: 'keypoint', label: '重点·加速度定义式', text: '<strong>a = Δv / Δt</strong><br>其中 Δv 是速度的变化量（末速度减初速度），Δt 是发生这一变化所用的时间。加速度在数值上等于单位时间内速度的变化量。' },
      { type: 'paragraph', text: '加速度表示速度变化得有多快，它是矢量。加速度的方向与速度变化量 Δv 的方向一致。也就是说，加速度指向"速度往哪个方向在变"。这一点很重要，因为加速度的方向不一定和速度方向相同。' },
      { type: 'list', items: ['加速度描述速度变化的快慢，是矢量', '定义式 a = Δv / Δt，Δv 为速度变化量', '加速度方向与速度变化量 Δv 的方向一致', '比较加速度要同时比较大小和方向'] },
      { type: 'heading', text: '二、加速度的单位和方向' },
      { type: 'paragraph', text: '从定义 a = Δv / Δt 看，速度单位是米每秒（m/s），时间单位是秒（s），所以加速度的单位是"米每二次方秒"，写作 m/s²。读作"米每平方秒"。它描述的是每秒钟速度变化了多少。' },
      { type: 'keypoint', label: '重点·加速度方向', text: '<strong>加速度 a 的方向与速度变化量 Δv 的方向相同。</strong>当 a 与速度 v 同向时，速度是增加的（加速）；当 a 与 v 反向时，速度是减小的（减速）。' },
      { type: 'example', label: '例题·加速度方向判断', text: '一辆汽车初速度 v₁ = 10 m/s，2秒后变为 v₂ = 16 m/s，方向不变。求加速度大小和方向。<br><br><strong>解析</strong>：Δv = v₂ − v₁ = 16 − 10 = 6 m/s，a = Δv / Δt = 6 ÷ 2 = 3 m/s²。因为 Δv 为正、与速度同向，所以加速度方向与速度方向相同，汽车做加速运动。' },
      { type: 'warn', label: '易错', text: '<strong>加速度大，不代表速度大。</strong>加速度大只说明速度变化得快。例如火箭刚起飞时加速度很大，但那一刻速度还很小。反过来，速度很大时加速度也可以很小，比如高空匀速飞行的飞机速度很大，加速度却为零。' },
      { type: 'table', headers: ['比较项', '速度 v', '加速度 a'], rows: [['物理意义', '描述位置变化快慢', '描述速度变化快慢'], ['矢量方向', '沿运动方向', '沿速度变化量 Δv 方向'], ['单位', 'm/s', 'm/s²'], ['为零时', '静止或匀速', '速度不变（匀速或静止）']] },
      { type: 'paragraph', text: '判断物体是加速还是减速，关键看加速度 a 与速度 v 的方向关系：同向则加速，反向则减速，与加速度本身大小无关。哪怕加速度在减小，只要它和速度同向，速度就仍在增大，只是增大得越来越慢。' },
      { type: 'heading', text: '三、关于加速度的常见误解' },
      { type: 'paragraph', text: '第一个误解：以为"加速度为零速度就一定为零"。其实加速度为零只说明速度不变，物体可以静止（v=0），也可以以很大的速度匀速直线运动（v≠0）。匀速直线运动中加速度 a=0，但速度并不为零。' },
      { type: 'keypoint', label: '重点·a=0 不代表 v=0', text: '<strong>加速度为零，表示速度保持不变。</strong>此时物体可能静止，也可能做匀速直线运动（v≠0）。所以"加速度为零"和"速度为零"是两回事，不能画等号。' },
      { type: 'warn', label: '易错', text: '<strong>加速度减小，不代表速度在减小。</strong>只要加速度 a 与速度 v 方向相同，无论 a 是变大还是变小，速度都在增大。只有 a 与 v 方向相反时，速度才会减小。判断加速减速看"方向关系"，不看加速度大小如何变化。' },
      { type: 'tip', label: '提示', text: '<strong>判断加速还是减速，只需看 a 与 v 是否同向。</strong>同向→加速，反向→减速。加速度大小只反映速度变化得快慢，不决定速度是增是减。' },
      { type: 'list', items: ['加速度大 ≠ 速度大（火箭起飞 a 大 v 小）', '加速度为零 ≠ 速度为零（匀速直线 a=0 但 v≠0）', '加速度减小 ≠ 速度减小（只要 a、v 同向仍在加速）', '加速还是减速，由 a 与 v 的方向关系决定'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">加速度 = 速度变化量 ÷ 所用时间</text><text x="170" y="150" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">初速度 v₁</text><line x1="110" y1="180" x2="230" y2="180" stroke="#234b45" stroke-width="4"/><text x="430" y="150" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">末速度 v₂</text><line x1="370" y1="180" x2="490" y2="180" stroke="#234b45" stroke-width="6"/><text x="340" y="110" font-size="18" fill="#1f7a6e" font-weight="bold" text-anchor="middle">a = Δv / Δt</text><text x="340" y="235" font-size="13" fill="#234b45" text-anchor="middle">Δv = v₂ − v₁，表示速度的变化量</text></svg>', caption: '图1　加速度等于速度变化量 Δv 与所用时间 Δt 的比值。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">加速度与速度同向则加速，反向则减速</text><rect x="40" y="60" width="600" height="90" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="70" y="90" font-size="14" fill="#234b45" font-weight="bold">同向 → 加速</text><line x1="200" y1="105" x2="320" y2="105" stroke="#234b45" stroke-width="4"/><text x="260" y="95" font-size="12" fill="#234b45" text-anchor="middle">v</text><line x1="380" y1="105" x2="500" y2="105" stroke="#4fb3a5" stroke-width="4"/><text x="440" y="95" font-size="12" fill="#234b45" text-anchor="middle">a</text><text x="560" y="105" font-size="13" fill="#234b45" text-anchor="middle">速度变大</text><rect x="40" y="170" width="600" height="90" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="70" y="200" font-size="14" fill="#234b45" font-weight="bold">反向 → 减速</text><line x1="200" y1="215" x2="320" y2="215" stroke="#234b45" stroke-width="4"/><text x="260" y="205" font-size="12" fill="#234b45" text-anchor="middle">v</text><line x1="500" y1="215" x2="380" y2="215" stroke="#4fb3a5" stroke-width="4"/><text x="440" y="205" font-size="12" fill="#234b45" text-anchor="middle">a</text><text x="560" y="215" font-size="13" fill="#234b45" text-anchor="middle">速度变小</text></svg>', caption: '图2　加速度 a 与速度 v 同向（上）物体加速，反向（下）物体减速。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">加速度大≠速度大，加速度为零≠速度为零</text><rect x="40" y="60" width="280" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="90" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">火箭刚起飞</text><text x="180" y="120" font-size="13" fill="#234b45" text-anchor="middle">加速度 a 很大</text><text x="180" y="148" font-size="13" fill="#234b45" text-anchor="middle">但速度 v 仍很小</text><rect x="360" y="60" width="280" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="90" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">匀速直线</text><text x="500" y="120" font-size="13" fill="#234b45" text-anchor="middle">加速度 a = 0</text><text x="500" y="148" font-size="13" fill="#234b45" text-anchor="middle">但速度 v ≠ 0</text><text x="340" y="230" font-size="13" fill="#234b45" text-anchor="middle">加速度描述速度变化快慢，与速度大小无直接关系</text></svg>', caption: '图3　两个易错情形：火箭起飞加速度大但速度小；匀速直线加速度为零但速度不为零。' }
    ],
    exercises: [
      { type: 'choice', question: '加速度的定义式是？', options: ['a = v / t', 'a = Δv / Δt', 'a = Δx / Δt', 'a = Δv × Δt'], answer: 'a = Δv / Δt', explanation: '加速度等于速度的变化量除以发生这一变化所用的时间，定义式为 a = Δv / Δt，其中 Δv 是末速度减初速度，Δt 是时间。Δx / Δt 是速度定义式，不是加速度，所以其余选项都不对。' },
      { type: 'choice', question: '关于加速度与速度的方向关系，下列说法正确的是？', options: ['加速度为零时速度一定为零', '加速度与速度同向时物体做加速运动', '加速度越大速度一定越大', '加速度方向总是与速度方向相同'], answer: '加速度与速度同向时物体做加速运动', explanation: '判断加减速看加速度 a 与速度 v 的方向关系：同向则加速，反向则减速。加速度为零只表示速度不变，物体可能匀速（v≠0）；加速度大只说明速度变化快，不一定速度大；加速度方向与速度方向可以相同也可以相反，并非总是相同。' },
      { type: 'choice', question: '下列关于加速度的说法，正确的是？', options: ['加速度是标量', '加速度就是速度', '加速度是矢量，有大小也有方向', '加速度的单位是米'], answer: '加速度是矢量，有大小也有方向', explanation: '加速度既有大小又有方向，是矢量，其方向与速度变化量 Δv 的方向一致。加速度不是速度本身，而是描述速度变化快慢的物理量；它的单位是 m/s²，不是米。' },
      { type: 'fill', question: '物体做匀速直线运动时，速度保持不变，因此它的加速度 a = ___（填数值）。', answer: '0', explanation: '匀速直线运动中速度的大小和方向都不变，即速度的变化量 Δv = 0，所以加速度 a = Δv / Δt = 0。加速度为零表示速度不变化，物体可以静止也可以匀速运动，并非一定静止。' },
      { type: 'fill', question: '若加速度 a 与速度 v 的方向相反，物体做___运动（填"加速"或"减速"）。', answer: '减速', explanation: '判断物体加速还是减速，看加速度 a 与速度 v 的方向关系：两者同向则加速，反向则减速。a 与 v 反向说明速度在减小，即使加速度本身很大或正在变化，只要方向相反，物体仍在减速。' }
    ]
  });
})();
