/* ============================================================
 * 高二物理 · 选择性必修第一册 · 第二章 机械振动
 * 课时9：简谐运动的回复力和能量
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u9',
    name: '简谐运动的回复力和能量',
    chapter: '选择性必修第一册 · 第二章 机械振动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、回复力：总想把振子拉回平衡位置' },
      { type: 'paragraph', text: '弹簧振子被拉开后，为什么总能自己往回走？因为弹簧在拉伸或压缩时会产生一个弹力，这个力的方向永远指向平衡位置。物理学把这种"总是指向平衡位置、专门把物体拉回去"的力，叫作回复力。' },
      { type: 'keypoint', label: '重点·回复力公式', text: '对弹簧振子，回复力就是弹簧的弹力，大小与位移成正比、方向与位移相反：<strong>F = −k × x</strong>。其中 k 是弹簧的劲度系数，x 是偏离平衡位置的位移，负号表示力的方向始终指向平衡位置。' },
      { type: 'list', items: ['回复力不是一种新的力，而是按"作用效果"起的名字', '弹簧振子里，回复力就是弹簧的弹力', '方向总指向平衡位置，与位移方向相反', '大小随位移变化，位移越大，回复力越大'] },
      { type: 'paragraph', text: '因为回复力总是指向平衡位置，它会使振子加速回到中点；而越过平衡位置后，回复力反过来又把它往回推，于是振子就来回摆动，不会跑掉。回复力正是简谐运动能"振动"的根本原因。' },
      { type: 'warn', label: '易错', text: '回复力 F = −k×x 里的 x 是<strong>相对平衡位置的位移</strong>，不是弹簧的形变量那么简单，更不是从墙算起的绝对位置。<strong>负号表示方向，不是说力是"负的"，画图时要按实际方向画箭头。</strong>' },
      { type: 'heading', text: '二、简谐运动中的能量：动、势能来回换' },
      { type: 'paragraph', text: '振子运动时有两种能量：小球运动具有动能，弹簧被拉长或压缩具有弹性势能。来回摆动的过程中，这两种能量不断相互转化，但总量不变。' },
      { type: 'keypoint', label: '重点·机械能守恒', text: '在理想弹簧振子中，<strong>动能与弹性势能相互转化，总机械能保持不变</strong>：在平衡位置速度最大、动能最大、势能最小；在最远端速度为零、动能最小、势能最大。整个过程机械能守恒。' },
      { type: 'list', items: ['平衡位置：速度最大 → 动能最大，弹簧无形变 → 势能最小', '最远端：速度为零 → 动能为零，形变最大 → 势能最大', '运动中动能与势能相互转化，但两者之和（总机械能）不变', '若无摩擦，振幅保持不变，振动永远进行下去'] },
      { type: 'example', label: '例题·能量转化判断', text: '弹簧振子从最右端向平衡位置运动的过程中，动能、势能怎么变化？<br><br><strong>解析：</strong><br>从最右端向平衡位置运动时，小球速度从 0 逐渐变大，所以动能逐渐增大；同时弹簧从拉得最开逐渐恢复原长，弹性势能逐渐减小。此过程正是势能转化为动能，但动能加势能的总机械能保持不变。' },
      { type: 'table', headers: ['位置', '速度', '动能', '弹性势能', '总机械能'], rows: [['最右端', '0', '最小(0)', '最大', '不变'], ['平衡位置', '最大', '最大', '最小(0)', '不变'], ['最左端', '0', '最小(0)', '最大', '不变']] },
      { type: 'heading', text: '三、把回复力和能量连起来看' },
      { type: 'paragraph', text: '回复力 F = −k×x 决定了加速度 a = F/m = −(k/m)×x。位移越大，回复力越大，加速度越大，振子被拉回的"劲"也越大；到达平衡位置时，回复力为零，加速度为零，但此时速度最大、动能最大。' },
      { type: 'tip', label: '提示', text: '<strong>判断一个运动是不是简谐运动，就看回复力是否满足 F = −k×x（即加速度与位移成正比且反向）。</strong>只要满足这个，能量就一定在动能和势能之间来回转化且总量守恒，这是简谐运动的两大标志。' },
      { type: 'example', label: '例题·是不是简谐运动', text: '某物体受力 F = −5 × x（x 为相对平衡位置的位移），问它是否做简谐运动？<br><br><strong>解析：</strong><br>把式子和 F = −k×x 对比，这里 k = 5，力的方向始终与位移相反、大小与位移成正比，完全符合简谐运动的回复力特征。所以该物体做简谐运动，且劲度系数 k = 5。' },
      { type: 'paragraph', text: '一句话总结：简谐运动靠回复力 F = −k×x 维持来回摆动，过程中动能与势能相互转化，只要没有摩擦，总机械能守恒、振幅不变。' },
      { type: 'list', items: ['回复力 F = −k×x：方向指向平衡位置，大小与位移成正比', '回复力是效果力，弹簧振子里它就是弹簧弹力', '动能与弹性势能相互转化，总机械能守恒', '平衡位置动能最大势能最小，最远端相反'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">回复力总指向平衡位置（F = −k×x）</text><line x1="340" y1="60" x2="340" y2="250" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="340" y="270" font-size="12" fill="#234b45" text-anchor="middle">平衡位置</text><circle cx="500" cy="155" r="20" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><polygon points="430,155 460,147 460,163" fill="#4fb3a5"/><line x1="480" y1="155" x2="430" y2="155" stroke="#4fb3a5" stroke-width="3"/><text x="455" y="140" font-size="12" fill="#234b45">F 向左</text><circle cx="180" cy="155" r="20" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><polygon points="250,155 220,147 220,163" fill="#4fb3a5"/><line x1="200" y1="155" x2="250" y2="155" stroke="#4fb3a5" stroke-width="3"/><text x="225" y="140" font-size="12" fill="#234b45">F 向右</text></svg>', caption: '图1　无论小球在平衡位置哪一侧，回复力都指向平衡位置，与位移方向相反。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动能与弹性势能相互转化、总量不变</text><rect x="60" y="200" width="180" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="150" y="235" font-size="13" fill="#234b45" text-anchor="middle">最右端：势能最大</text><rect x="250" y="200" width="180" height="60" rx="8" fill="#4fb3a5"/><text x="340" y="235" font-size="13" fill="#234b45" text-anchor="middle">平衡位置：动能最大</text><rect x="440" y="200" width="180" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="530" y="235" font-size="13" fill="#234b45" text-anchor="middle">最左端：势能最大</text><text x="340" y="160" font-size="13" fill="#234b45" text-anchor="middle">能量在两者间来回转化，总机械能守恒</text><path d="M 150 195 L 340 195 M 340 195 L 530 195" stroke="#234b45" stroke-width="2" fill="none"/><polygon points="340,195 332,189 332,201" fill="#234b45"/><polygon points="530,195 522,189 522,201" fill="#234b45"/></svg>', caption: '图2　在最远端势能最大、动能为零；在平衡位置相反。整体能量总和保持不变。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">回复力、加速度、位移三者同时反向</text><line x1="60" y1="170" x2="620" y2="170" stroke="#234b45" stroke-width="2"/><path d="M 80 90 C 140 90, 255 250, 310 250 C 365 250, 480 90, 540 90" fill="none" stroke="#2e9e8f" stroke-width="3"/><text x="80" y="80" font-size="12" fill="#234b45">位移 x 曲线</text><path d="M 80 250 C 140 250, 255 90, 310 90 C 365 90, 480 250, 540 250" fill="none" stroke="#4fb3a5" stroke-width="3" stroke-dasharray="6,4"/><text x="430" y="120" font-size="12" fill="#234b45">回复力 F、加速度 a（反向）</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">随位移增大而增大，方向始终相反</text></svg>', caption: '图3　回复力和加速度都与位移大小成正比、方向相反，二者形状相同只是上下颠倒。' }
    ],
    exercises: [
      { type: 'choice', question: '关于简谐运动的回复力，下列说法正确的是？', options: ['回复力是一种新的基本力', '回复力方向总指向平衡位置', '回复力大小与速度成正比', '回复力就是重力'], answer: '回复力方向总指向平衡位置', explanation: '回复力不是一种独立的新力，而是按"把物体拉回平衡位置"这个效果来命名的力；在弹簧振子里它就是弹簧弹力。回复力方向始终指向平衡位置，与位移方向相反，大小与位移成正比（F = −k×x），而不是与速度成正比，也不是重力。' },
      { type: 'choice', question: '弹簧振子在平衡位置时，能量的特点是？', options: ['动能最大、势能最小', '动能最小、势能最大', '动能和势能都为零', '动能和势能都最大'], answer: '动能最大、势能最小', explanation: '振子经过平衡位置时速度最大，所以动能最大；此时弹簧处于原长、无形变，弹性势能最小（理想情况下为零）。在理想无摩擦条件下，动能与弹性势能相互转化，但两者之和即总机械能保持不变。' },
      { type: 'choice', question: '判断一个运动是否为简谐运动，关键看？', options: ['振幅是否很大', '回复力是否满足 F = −k×x', '频率是否固定', '是否有能量损失'], answer: '回复力是否满足 F = −k×x', explanation: '简谐运动的本质特征是回复力（从而加速度）与位移成正比且方向相反，即满足 F = −k×x。只要满足这一点，运动就是简谐运动；振幅大小、频率是否固定、有无能量损失都不是判断的核心标准，后者还取决于是否有摩擦。' },
      { type: 'fill', question: '弹簧振子的回复力公式为 F = −___ × x，其中负号表示力的方向总是指向平衡位置。', answer: 'k', explanation: '弹簧振子的回复力就是弹簧弹力，公式为 F = −k×x，其中 k 是弹簧的劲度系数，x 是相对平衡位置的位移。负号表示回复力方向始终与位移方向相反、指向平衡位置。这是简谐运动回复力的标准形式。' },
      { type: 'fill', question: '在理想无摩擦的弹簧振子中，动能和弹性势能相互转化，但两者的总和（总机械能）保持___。', answer: '不变|守恒', explanation: '理想弹簧振子没有摩擦耗能，运动过程中动能与弹性势能不断相互转化：平衡位置动能最大、势能最小，最远端相反。但动能与势能之和即总机械能始终不变，这就是简谐运动中的机械能守恒。若有摩擦，振幅会逐渐减小、机械能才会损失。' }
    ]
  });
})();
