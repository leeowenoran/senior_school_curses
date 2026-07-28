/* ============================================================
 * 高三复习 · 力学综合 · 专题四 曲线运动与万有引力
 * 课时18：圆周运动
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u18',
    name: '圆周运动',
    chapter: '力学综合 · 专题四 曲线运动与万有引力',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、描述圆周运动的三个量' },
      { type: 'paragraph', text: '物体绕着一个中心转圈，叫圆周运动。要描述它转得有多快，常用三个量：线速度 v（沿圆周切线方向的速度大小）、角速度 ω（连接圆心和物体的半径转过的快慢）、周期 T 和频率 f（转一圈用的时间和每秒转几圈）。它们之间有密切的关系。' },
      { type: 'keypoint', label: '重点·基本关系', text: '线速度与角速度：<strong>v = ω × r</strong>。<br>角速度与周期、频率：<strong>ω = 2π / T = 2π × f</strong>。<br>由此还能推出 v = 2π r / T，即线速度也等于周长除以周期。' },
      { type: 'list', items: ['线速度 v：沿切线方向，v = 弧长 / 时间 = 2π r / T', '角速度 ω：半径转过的角度 / 时间 = 2π / T，单位 rad/s', '周期 T：转一圈的时间；频率 f：每秒转的圈数，f = 1 / T', '三者统一：v = ω r，ω = 2π / T = 2π f'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">圆周运动：线速度 v 沿切线，角速度 ω 描述转动</text><circle cx="340" cy="170" r="100" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="340" cy="170" r="5" fill="#234b45"/><circle cx="440" cy="170" r="8" fill="#4fb3a5"/><line x1="340" y1="170" x2="440" y2="170" stroke="#234b45" stroke-width="2" stroke-dasharray="4,3"/><text x="385" y="160" font-size="12" fill="#234b45">r</text><line x1="440" y1="170" x2="440" y2="90" stroke="#234b45" stroke-width="3"/><polygon points="440,90 433,104 447,104" fill="#234b45"/><text x="450" y="110" font-size="12" fill="#234b45">v 切线</text><path d="M 360 150 A 28 28 0 0 1 360 190" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="368" y="150" font-size="12" fill="#4fb3a5">ω</text></svg>', caption: '图1　圆周上物体的线速度 v 沿切线方向，角速度 ω 描述半径绕圆心的转动快慢，二者满足 v = ω r。' },
      { type: 'heading', text: '二、向心力' },
      { type: 'paragraph', text: '做圆周运动的物体，速度方向时刻在变，说明它一定有加速度，也一定受到一个指向圆心的合外力。这个力把物体"拉"向圆心，使运动轨迹弯成圆形，叫做向心力。要特别注意的是：向心力不是一种新种类的力。' },
      { type: 'keypoint', label: '重点·向心力公式', text: '向心力大小 <strong>Fₙ = m v² / r = m ω² r</strong>。方向始终指向圆心，时刻改变，所以向心力是变力（方向变）。' },
      { type: 'warn', label: '易错', text: '<strong>向心力不是单独存在的力，而是一种"效果力"。</strong>它必须由某个真实的力或几个力的合力来提供：可以是重力、弹力、摩擦力，或者是它们的合力。不能说"物体受到重力、弹力，还受到一个向心力"——那是重复算力。分析受力时只找真实力，再判断谁提供了向心力。' },
      { type: 'example', label: '例题·向心力来源', text: '汽车以速度 v 通过一座圆弧状拱桥的最高点，半径为 r。求此时桥对车的支持力。<br><br><strong>解析</strong>：<br>车在最高点受重力 mg（向下）和桥的支持力 N（向上）。向心力指向圆心，即在拱桥最高点指向圆心向下。由合力提供向心力：mg − N = m v² / r，得 N = mg − m v² / r。可见支持力小于重力，车速越快支持力越小，太快会"飞离"桥面。' },
      { type: 'heading', text: '三、传动问题：同轴与皮带' },
      { type: 'paragraph', text: '多个轮子或圆盘一起转时，有两种常见传动方式，它们有个关键规律，解题时先判断是哪一类。第一种是"同轴转动"：几个轮子固定在同一根轴上，一起转，所以它们转过的角度始终一样。第二种是"皮带（或齿轮）传动"：用皮带连着的两个轮，皮带不打滑时，轮缘上各点被皮带带着走，线速度大小一样。' },
      { type: 'keypoint', label: '重点·传动规律', text: '<strong>同轴转动：各点角速度 ω 相同</strong>（周期 T 也相同），离轴越远线速度越大（v = ω r）。<br><strong>皮带传动：接触处边缘线速度 v 相同</strong>，半径小的轮角速度大（ω = v / r）。' },
      { type: 'list', items: ['同轴：ω 相同、T 相同；比较 v 用 v = ω r，r 大的 v 大', '皮带：边缘 v 相同；比较 ω 用 ω = v / r，r 小的 ω 大', '先看清是哪种传动，再决定用"ω 同"还是"v 同"作为桥梁', '齿轮传动与皮带类似：啮合处线速度大小相同'] },
      { type: 'tip', label: '提示', text: '碰到多个圆盘、轮子的问题，第一步就在图上标出"哪里 ω 相等、哪里 v 相等"。同轴就写 ω₁ = ω₂，皮带就写 v₁ = v₂，这是连接各部分的唯一桥梁，找对了就豁然开朗。' },
      { type: 'table', headers: ['传动方式', '相等的量', '变化的量（随半径）'], rows: [['同轴转动', '角速度 ω、周期 T', '线速度 v 随 r 增大而增大'], ['皮带/齿轮传动', '边缘线速度 v', '角速度 ω 随 r 增大而减小']] },
      { type: 'heading', text: '四、竖直面内的圆周运动：绳模型与杆模型' },
      { type: 'paragraph', text: '物体在竖直平面内绕圈（如水流星、过山车、小球在圆环里转），重力会参与提供向心力，情况比水平面复杂。中学重点区分两种约束：绳模型（只能拉不能推，如用轻绳拴着的小球）和杆模型（能拉能推，如固定在轻杆一端的小球）。关键看最高点最小速度是多少。' },
      { type: 'keypoint', label: '重点·最高点最小速度', text: '<strong>绳模型：</strong>到最高点绳不能松弛，最小速度 v_min = √(g r)，此时重力恰好提供向心力（mg = m v²/r）。<br><strong>杆模型：</strong>杆可推可拉，最高点速度可以为 0，即 v_min = 0。' },
      { type: 'example', label: '例题·绳模型最高点', text: '长为 r 的轻绳拴小球在竖直面内圆周运动，到最高点时恰好绳的拉力为零。求此时速度。<br><br><strong>解析</strong>：<br>最高点小球受重力 mg 向下、绳拉力 T 向下（指向圆心）。恰好拉力为零时，仅重力提供向心力：mg = m v² / r，得 v = √(g r)。这就是绳模型能完成圆周运动的最小速度，再小绳子就松了、球做抛体运动。' },
      { type: 'warn', label: '易错', text: '绳模型和杆模型最高点的临界速度不同，千万别混。<strong>绳模型最高点最小速度是 √(g r)（不能为 0，否则绳松弛）；杆模型最高点最小速度可以是 0（杆能向上推住小球）。</strong>判断是"绳"还是"杆"（或光滑圆轨道内侧近似绳、外侧/管状近似杆）是解题第一步。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">同轴转动：A、B 角速度 ω 相同，r 大则 v 大</text><circle cx="340" cy="170" r="14" fill="#234b45"/><circle cx="340" cy="170" r="60" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="340" cy="170" r="110" fill="none" stroke="#4fb3a5" stroke-width="3"/><circle cx="400" cy="170" r="6" fill="#234b45"/><text x="410" y="165" font-size="12" fill="#234b45">A（r小）</text><circle cx="450" cy="170" r="6" fill="#234b45"/><text x="460" y="165" font-size="12" fill="#234b45">B（r大）</text><line x1="340" y1="170" x2="450" y2="170" stroke="#234b45" stroke-width="2" stroke-dasharray="4,3"/><text x="385" y="160" font-size="12" fill="#234b45">r</text><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">同一根轴 → ω_A = ω_B，而 v_B = ω r_B > v_A</text></svg>', caption: '图2　同轴转动时 A、B 两点角速度相同，离轴越远线速度越大（v = ω r）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">皮带传动：两轮边缘线速度 v 相同，小轮 ω 大</text><circle cx="230" cy="170" r="70" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="230" cy="170" r="8" fill="#234b45"/><circle cx="470" cy="170" r="40" fill="none" stroke="#4fb3a5" stroke-width="3"/><circle cx="470" cy="170" r="8" fill="#234b45"/><line x1="230" y1="240" x2="470" y2="210" stroke="#234b45" stroke-width="3"/><text x="320" y="250" font-size="12" fill="#234b45">皮带（边缘 v 相同）</text><text x="230" y="120" font-size="12" fill="#234b45">大轮</text><text x="470" y="115" font-size="12" fill="#234b45">小轮</text><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">v_大 = v_小，而 ω_小 = v / r_小 > ω_大</text></svg>', caption: '图3　皮带传动时两轮边缘线速度相同，半径小的轮角速度更大（ω = v / r）。' }
    ],
    exercises: [
      { type: 'choice', question: '关于向心力，下列说法正确的是？', options: ['向心力是一种新的基本力', '向心力就是物体受到的合外力指向圆心的部分', '向心力方向始终不变', '做圆周运动的物体不受向心力也行'], answer: '向心力就是物体受到的合外力指向圆心的部分', explanation: '向心力不是一种独立存在的新力，而是按效果命名的力，它由某个真实力或几个真实力的合力来提供，其方向始终指向圆心、时刻改变，所以是变力。分析受力时只找重力、弹力、摩擦力等真实力，再判断其中指向圆心的部分（或合力）充当向心力。因此"合外力指向圆心的部分"这一说法正确。' },
      { type: 'choice', question: '同轴转动的两个点，下列物理量一定相同的是？', options: ['线速度 v', '角速度 ω', '向心加速度', '向心力大小'], answer: '角速度 ω', explanation: '同轴转动指两点固定在同一根轴上，一起转，所以转过的角度始终相同，角速度 ω 和周期 T 一定相等。但线速度 v = ω r，离轴距离 r 不同则 v 不同；向心加速度 a = ω² r、向心力 F = m ω² r 也都随 r 变化而不同。因此只有角速度（和周期）相同。' },
      { type: 'choice', question: '轻绳拴着的小球在竖直面内做圆周运动，最高点能完成圆周运动的最小速度 v_min 为？', options: ['0', '√(g r)', '√(2 g r)', 'g r'], answer: '√(g r)', explanation: '绳模型在最高点绳只能拉不能推，要维持圆周运动绳不能松弛。临界情况是绳拉力恰好为零，仅重力提供向心力：mg = m v² / r，解得 v_min = √(g r)。若速度再小，绳就松了，小球不再做圆周运动。杆模型才允许 v_min = 0，本题是绳模型，故选 √(g r)。' },
      { type: 'fill', question: '圆周运动中，线速度 v、角速度 ω 与半径 r 的关系为 v = ___。', answer: 'ω × r', explanation: '线速度是物体沿圆周切线方向的速度，等于半径转过的弧长除以时间；角速度是半径转过的角度除以时间。弧长等于半径乘以角度，因此线速度 v = ω r。这是圆周运动最基本的公式，常结合 ω = 2π/T 推出 v = 2π r / T。' },
      { type: 'fill', question: '固定在轻杆一端的小球在竖直面内做圆周运动，最高点的最小速度 v_min = ___（填数值表达式）。', answer: '0', explanation: '杆模型与绳模型不同：杆既能拉也能推，在最高点即使速度为零，杆也能向上推住小球提供向心力，使小球不脱离圆周。因此杆模型最高点最小速度可以为 0。而绳模型因只能拉、不能推，最小速度才是 √(g r)。本题是杆模型，故 v_min = 0。' }
    ]
  });
})();
