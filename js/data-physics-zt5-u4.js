/* ============================================================
 * 高三复习 · 计算压轴 · 专题一 力学计算
 * 课时4：平抛运动与圆周运动组合计算
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u4',
    name: '平抛运动与圆周运动组合计算',
    chapter: '计算压轴 · 专题一 力学计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、平抛运动：水平匀速 + 竖直自由落体' },
      { type: 'paragraph', text: '平抛运动是把物体水平抛出、只受重力作用的运动。它可以被拆成两个独立方向：水平方向不受力，做匀速直线；竖直方向受重力，做自由落体。两个方向同时进行、互不干扰，这是处理一切平抛题的钥匙。' },
      { type: 'keypoint', label: '重点·平抛公式', text: '<strong>水平方向：x = v₀×t（匀速）；竖直方向：y = ½×g×t²，v_y = g×t（自由落体）。</strong>合速度大小 v = √(v₀² + v_y²)，方向与水平夹角满足 tanθ = v_y / v₀。两个方向用同一个时间 t 联系。' },
      { type: 'list', items: ['水平速度 v₀ 始终不变', '竖直速度 v_y 随时间增大：v_y = g×t', '飞行时间只由高度决定：t = √(2h/g)', '水平射程 X = v₀×t = v₀×√(2h/g)'] },
      { type: 'paragraph', text: '常见题型：给高度求落地时间、给初速和射程求高度、求落地速度和方向。关键都是先由竖直方向求出时间 t，再用 t 去算水平位移和末速度。' },
      { type: 'heading', text: '二、平抛与圆周的组合' },
      { type: 'paragraph', text: '综合题常让物体先做平抛，再切入光滑圆弧轨道，或平抛后落到圆轨道入口。处理原则：平抛段用平抛公式，圆周段用圆周（向心力）公式，两段在"交接点"用速度、位置连续把条件接起来。' },
      { type: 'keypoint', label: '重点·组合题衔接', text: '<strong>交接点：平抛末速度的大小和方向 = 进入圆周时的初速度。</strong>把平抛段算出的 v 和它与切线的夹角，作为圆周段的已知量；圆周段再由向心力公式 m×v²/r = 合力(指向圆心) 列式求解。' },
      { type: 'example', label: '例题·平抛入圆', text: '小球从高度 h=5 m 处以 v₀=10 m/s 水平抛出，求落地时水平位移和与水平方向夹角。（g=10）<br><br><strong>解析</strong>：飞行时间 t = √(2h/g) = √(10/10) = 1 秒。水平位移 x = v₀×t = 10×1 = 10 米。竖直速度 v_y = g×t = 10×1 = 10 m/s。合速度方向 tanθ = v_y/v₀ = 10/10 = 1，θ = 45°。即落地时速度与水品成 45°，水平射程 10 米。' },
      { type: 'list', items: ['先由竖直高度 h 求飞行时间 t = √(2h/g)', '用 t 算水平射程 x = v₀×t 和竖直速度 v_y', '需要方向时算 tanθ = v_y/v₀', '若接圆轨道，把该点的 v 和角度代入圆周向心力方程'] },
      { type: 'tip', label: '提示·时间桥梁', text: '<strong>平抛运动里"时间 t"是连接水平和竖直两个方向的唯一桥梁。</strong>凡是两个方向量要扯上关系，一定先求 t。组合题中若已知射程和高度，多半也是先反推 t。' },
      { type: 'heading', text: '三、圆周运动的向心力' },
      { type: 'paragraph', text: '物体做匀速圆周运动时，速度大小不变但方向不断变，因此有指向圆心的加速度，叫向心加速度 aₙ = v²/r = ω²×r。产生它的力叫向心力，向心力不是一种新力，而是各种力（重力、弹力、摩擦力或它们的合力）指向圆心的分量。' },
      { type: 'keypoint', label: '重点·向心力', text: '<strong>向心力 F向 = m×v²/r = m×ω²×r，方向始终指向圆心。</strong>它不是额外添加的力，而是"现有的合力在指向圆心方向的分量"。列方程要对指向圆心方向写：ΣF指向圆心 = m×v²/r。' },
      { type: 'example', label: '例题·水平圆周', text: '质量 0.5 kg 的小球系在长 0.4 m 绳端，在水平面做匀速圆周运动，绳与竖直成 37°，求角速度和张力。（g=10，cos37°≈0.8，sin37°≈0.6）<br><br><strong>解析</strong>：竖直 T×cos37° = mg = 5，得 T = 5/0.8 = 6.25 N。水平 T×sin37° = m×ω²×r，其中 r = 0.4×sin37° = 0.24 m，T×sin37° = 6.25×0.6 = 3.75 N，故 ω² = 3.75/(0.5×0.24) = 31.25，ω ≈ 5.59 rad/s。' },
      { type: 'list', items: ['确定圆心位置和半径 r', '分析哪些力提供向心力（指向圆心分量）', '向圆心方向列方程：ΣF向 = m×v²/r', '常见模型：绳模型、杆模型、圆锥摆'] },
      { type: 'tip', label: '提示·向心力非独立', text: '<strong>千万别在受力图里额外画一个"向心力"。</strong>向心力是现有合力（或分力）的效果名称。你只需把指向圆心的那些力的分量加起来，等于 m×v²/r 即可。' },
      { type: 'heading', text: '四、竖直面内圆周的临界速度' },
      { type: 'paragraph', text: '物体在竖直圆内运动（如过山车、水流星、小球沿圆轨道），重力始终参与，最高点和最低点最关键是临界点。绳模型和杆模型的处理不同：绳只能拉，杆可拉可压。' },
      { type: 'keypoint', label: '重点·最高点临界', text: '<strong>绳模型最高点：恰能过最高点的临界条件是绳张力为0，仅重力提供向心力，即 m×g = m×v²/r，得 v_min = √(g×r)。</strong>速度再小就会掉下来。杆模型最高点 v 可为0（杆支持）。最低点：T − mg = m×v²/r，张力必须大于重力。' },
      { type: 'example', label: '例题·竖直圆周最高点', text: '长为 0.5 m 的细绳系小球，在竖直面内做圆周运动，求恰能过最高点的最小速度。（g=10）<br><br><strong>解析</strong>：绳模型最高点临界是绳张力为0，仅重力充当向心力：m×g = m×v²/r。两边约去 m，v² = g×r = 10×0.5 = 5，v = √5 ≈ 2.24 m/s。这就是不松手、不掉落的最小速度。' },
      { type: 'table', headers: ['模型', '最高点临界', '能否 v=0', '说明'], rows: [['绳模型', 'v_min = √(g×r)', '不能', '张力为0时仅重力提供向心'], ['杆模型', 'v_min = 0', '能', '杆可向上支持，提供额外力'], ['管道模型', '类似杆', '能', '外壁可支撑']] },
      { type: 'warn', label: '易错·内外轨', text: '<strong>竖直圆最高点的向心力方向向下（指向圆心），但"提供向心力的力"可能是重力减去支持力，要看具体模型。</strong>绳模型最高点支持力为0；若物体在外轨道（如车过拱桥），最高点 F向 = mg − N = m×v²/r，速度越大 N 越小，过快会飞离。方向务必画对。' },
      { type: 'paragraph', text: '组合与临界题的通用打法：平抛段用"水平匀速、竖直自由落体"拆开算，时间 t 作桥梁；圆周段认准圆心、半径，向圆心列 ΣF = m×v²/r；竖直圆最高点是临界高发区，绳模型记 v_min = √(g×r)，杆模型 v 可为0。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">平抛运动：水平匀速 + 竖直自由落体</text><line x1="80" y1="80" x2="600" y2="80" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><circle cx="100" cy="80" r="8" fill="#234b45"/><circle cx="230" cy="140" r="8" fill="#234b45"/><circle cx="360" cy="210" r="8" fill="#234b45"/><circle cx="490" cy="290" r="8" fill="#234b45"/><line x1="100" y1="80" x2="490" y2="80" stroke="#4fb3a5" stroke-width="2"/><text x="280" y="70" font-size="13" fill="#234b45" text-anchor="middle">水平位移x=v0×t</text><line x1="490" y1="80" x2="490" y2="290" stroke="#4fb3a5" stroke-width="2"/><text x="510" y="190" font-size="13" fill="#234b45" text-anchor="middle">下落y</text><text x="100" y="300" font-size="13" fill="#234b45" text-anchor="middle">抛出点</text><text x="490" y="310" font-size="13" fill="#234b45" text-anchor="middle">落地点</text></svg>', caption: '图1　平抛轨迹可分解为水平匀速与竖直自由落体，二者共用时间 t。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">圆锥摆：重力和张力合力提供水平向心力</text><circle cx="340" cy="120" r="10" fill="#234b45"/><line x1="340" y1="120" x2="340" y2="40" stroke="#2e9e8f" stroke-width="2"/><text x="355" y="40" font-size="13" fill="#234b45" text-anchor="middle">悬点</text><line x1="340" y1="120" x2="480" y2="250" stroke="#4fb3a5" stroke-width="3"/><text x="490" y="250" font-size="13" fill="#234b45" text-anchor="middle">轨迹圆</text><line x1="340" y1="120" x2="340" y2="250" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="350" y="190" font-size="13" fill="#234b45" text-anchor="middle">θ</text><line x1="340" y1="250" x2="200" y2="250" stroke="#234b45" stroke-width="2" stroke-dasharray="4,3"/><text x="250" y="270" font-size="13" fill="#234b45" text-anchor="middle">r</text></svg>', caption: '图2　圆锥摆中，绳张力与重力的合力指向圆心，提供水平方向的向心力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">竖直圆周最高点：绳模型临界 v_min=√(g×r)</text><circle cx="340" cy="200" r="120" fill="none" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="80" r="10" fill="#234b45"/><line x1="340" y1="80" x2="340" y2="200" stroke="#4fb3a5" stroke-width="3"/><text x="352" y="145" font-size="13" fill="#234b45" text-anchor="middle">绳张力T</text><line x1="340" y1="80" x2="340" y2="20" stroke="#234b45" stroke-width="3"/><text x="352" y="15" font-size="13" fill="#234b45" text-anchor="middle">重力mg</text><text x="340" y="320" font-size="13" fill="#234b45" text-anchor="middle">最高点：mg+T=m×v²/r，临界T=0→v=√(g×r)</text></svg>', caption: '图3　竖直圆最高点，绳模型临界条件为张力为零、仅重力提供向心力。' }
    ],
    exercises: [
      { type: 'choice', question: '平抛运动在竖直方向的运动是？', options: ['匀速直线运动', '自由落体运动', '匀加速水平运动', '静止'], answer: '自由落体运动', explanation: '平抛运动水平方向不受力做匀速直线运动，竖直方向只受重力做自由落体运动，位移 y = ½×g×t²、速度 v_y = g×t。两个方向独立、用同一时间 t 联系。所以竖直方向是自由落体，不是匀速也不是静止。' },
      { type: 'choice', question: '关于竖直圆绳模型最高点，下列说法正确的是？', options: ['最高点速度可以为0', '恰能过最高点的临界速度 v_min = √(g×r)', '最高点张力一定最大', '杆模型和绳模型最高点临界相同'], answer: '恰能过最高点的临界速度 v_min = √(g×r)', explanation: '绳模型最高点若速度过小绳子会松弛、物体脱落，临界是绳张力为0，仅重力提供向心力 m×g = m×v²/r，得 v_min = √(g×r)。绳模型速度不能为0；最高点张力在临界时为0并非最大；杆模型因可支持，临界速度可为0，与绳模型不同。' },
      { type: 'choice', question: '质量为 m 的物体在水平面做半径 r 的匀速圆周运动，速度为 v，所需向心力为？', options: ['m×g', 'm×v×r', 'm×v²/r', 'm×r/v²'], answer: 'm×v²/r', explanation: '匀速圆周运动的向心力公式为 F向 = m×v²/r = m×ω²×r，方向始终指向圆心。它并非独立的新力，而是现有合力（或合力在指向圆心方向的分量）的效果名称。重力 m×g 只有在特定情形才参与提供向心力，不能直接当作向心力。' },
      { type: 'fill', question: '小球从高度 h = 20 m 处水平抛出（g=10），落到地面的飞行时间为___秒。', answer: '2', explanation: '平抛运动飞行时间由竖直方向自由落体决定：h = ½×g×t²，得 t = √(2h/g) = √(40/10) = √4 = 2 秒。注意时间只与高度有关，与水平初速度无关。水平初速度只影响射程 x = v₀×t。' },
      { type: 'fill', question: '竖直圆绳模型，半径 r = 0.8 m，g = 10 m/s²，小球恰能过最高点的临界速度 v_min = ___ m/s。', answer: '√8 或 2.83', explanation: '绳模型最高点临界条件为绳张力为0、仅重力提供向心力，有 m×g = m×v²/r，解得 v_min = √(g×r) = √(10×0.8) = √8 ≈ 2.83 m/s。速度小于此值绳子松弛、小球不能完整过最高点。' }
    ]
  });
})();
