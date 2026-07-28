/* ============================================================
 * 高三复习 · 计算压轴 · 专题一 力学计算
 * 课时2：受力分析与共点力平衡计算（整体法隔离法、动态平衡、绳杆弹簧）
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u2',
    name: '受力分析与共点力平衡计算',
    chapter: '计算压轴 · 专题一 力学计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、受力分析：画对受力图是第一步' },
      { type: 'paragraph', text: '解决一切力学题，先要明确研究对象受了几个力。受力分析按顺序来最保险：先重力（任何物体都受），再接触力（弹力、摩擦力，看它和谁接触），最后场力（电场力、磁场力等，本题暂不涉及）。千万不要凭空添加"惯性力""向心力"这类不存在的力。' },
      { type: 'keypoint', label: '重点·受力分析顺序', text: '<strong>一重二弹三摩擦四其他。</strong>重力一定画；弹力看接触且挤压；摩擦力看接触面粗糙且相对运动（或有趋势）；每画一个力都要问"谁施加的"。画完后列清单，不漏不添。' },
      { type: 'list', items: ['重力：竖直向下，大小 G = m×g', '弹力：垂直接触面指向被支持物体，如支持力、拉力、绳张力', '摩擦力：沿接触面，阻碍相对运动或趋势，静摩擦大小待求', '只分析研究对象受到的力，不画它施加给别人的力'] },
      { type: 'paragraph', text: '常见坑：把"下滑力"当成独立力。其实斜面上下滑的效果，是重力沿斜面的分力，并非新增一个力。受力图里只画重力，不另画"下滑力"。' },
      { type: 'heading', text: '二、共点力平衡：合力为零' },
      { type: 'paragraph', text: '当几个力作用在同一点（或作用线交于一点），物体静止或匀速直线运动时，就叫共点力平衡。平衡状态的核心条件只有一个：合力为零。可以记作：x 方向合力为零、y 方向合力也为零。' },
      { type: 'keypoint', label: '重点·平衡条件', text: '<strong>合力为零：ΣF = 0。</strong>分解到直角坐标系就是 ΣF_x = 0、ΣF_y = 0。两个力平衡则它们大小相等、方向相反、作用在同一直线；三个力平衡则三力必共点，且任意两力合力与第三力等大反向。' },
      { type: 'example', label: '例题·斜面物体平衡', text: '质量 2 kg 的物块静止在 30° 斜面上，求支持力和静摩擦力。（g 取 10 m/s²）<br><br><strong>解析</strong>：重力 G = 2×10 = 20 N。分解重力：垂直斜面 G⊥ = G×cos30° = 20×0.866 ≈ 17.3 N，平行斜面 G∥ = G×sin30° = 20×0.5 = 10 N。平衡时支持力 N = G⊥ = 17.3 N，静摩擦力 f = G∥ = 10 N（沿斜面向上）。' },
      { type: 'list', items: ['建立坐标系，常让一轴垂直斜面、一轴平行斜面', '把不沿轴的力（尤其重力）分解到两轴', 'x 轴列方程：各力 x 分量代数和为零', 'y 轴列方程：各力 y 分量代数和为零，联立求解'] },
      { type: 'tip', label: '提示·分解技巧', text: '<strong>斜面上优先把重力分解，而不是把支持力、摩擦力分解。</strong>因为支持力垂直斜面、摩擦力平行斜面，正好落在坐标轴上，重力拆成 G×sinθ 和 G×cosθ 两分量，列方程最清爽。' },
      { type: 'heading', text: '三、整体法与隔离法' },
      { type: 'paragraph', text: '遇到几个物体连在一起（如叠放、用绳相连），如果只求"外界对整体的作用力"，就把它们看作一个整体，内力自动抵消，非常省事；如果要求物体之间相互作用的力（如相互压力、绳张力），就必须把某个物体单独"隔离"出来分析。' },
      { type: 'keypoint', label: '重点·整体与隔离', text: '<strong>求外界力用整体法，求内力用隔离法。</strong>整体法中各物体间的内力（相互挤压、绳张力）成对出现、相互抵消，不出现在方程里；隔离法单独对一个物体列平衡方程，才能把内力求出来。' },
      { type: 'example', label: '例题·整体隔离', text: 'A（3 kg）、B（2 kg）叠放，一起静止在水平面上。求地面对整体的支持力和 A、B 间的压力。<br><br><strong>解析</strong>：整体法，总重 G = (3+2)×10 = 50 N，地面支持力 N地 = 50 N。隔离 B：B 受重力 20 N 向下、A 对 B 压力 N_AB 向下？不对，A 在上压 B，故 B 受 A 的压力向下 30 N？应隔离 A：A 受重力 30 N 向下，B 对 A 支持力 N_BA 向上，平衡得 N_BA = 30 N，由牛顿第三定律 A 对 B 压力也为 30 N。' },
      { type: 'list', items: ['先看问题要的是外力还是内力', '求整体加速度或外界支持力 → 整体法', '求两物体间弹力、绳张力 → 隔离其中一个', '整体法和隔离法常配合使用，先整体后隔离'] },
      { type: 'tip', label: '提示·选谁隔离', text: '<strong>隔离时优先选"受力少的那个物体"。</strong>受力越少，方程越简单。比如求绳张力，通常隔离绳一端连接、且只受两三个力的物体来列方程最快。' },
      { type: 'heading', text: '四、动态平衡与绳杆弹簧' },
      { type: 'paragraph', text: '动态平衡指物体缓慢移动、始终近似平衡。常见模型：用三根绳吊一重物，缓慢改变某绳角度，求各力怎么变。处理思路有作图法（画力的三角形）和解析法（列平衡方程看变量关系）。' },
      { type: 'keypoint', label: '重点·绳杆弹簧区别', text: '<strong>绳子只能拉不能压，张力沿绳且同一根绳张力处处相等；轻杆可拉可压，力沿杆方向（二力杆）；弹簧弹力 F = k×x，可拉可压，但弹力大小随形变量变化，不突变。</strong>' },
      { type: 'example', label: '例题·动态平衡', text: '用两根等长绳 AO、BO 悬挂重物，缓慢增大两绳夹角，绳张力怎么变？<br><br><strong>解析</strong>：重物受重力 G 与两绳张力 T，三力平衡。两绳对称时每根张力 T = G/(2×cosθ)（θ 为绳与竖直方向夹角）。夹角增大 → θ 增大 → cosθ 减小 → 分母变小 → T 变大。故两绳夹角越大，绳越容易被拉断。' },
      { type: 'table', headers: ['模型', '能否受压', '力的方向', '大小特点'], rows: [['轻绳', '不能（只拉）', '沿绳收缩方向', '同一根绳张力处处相等'], ['轻杆(二力杆)', '能拉能压', '沿杆轴线', '由平衡决定'], ['弹簧', '能拉能压', '沿弹簧轴线', 'F = k×x，随形变变']] },
      { type: 'warn', label: '易错·弹簧突变', text: '<strong>弹簧弹力不能突变，而绳、杆受力可突变。</strong>若突然剪断绳，弹簧在瞬间仍保持原长、弹力不变；但绳一旦断，张力立即变为零。分析"瞬间的力"时千万别把弹簧弹力瞬间清零。' },
      { type: 'paragraph', text: '总结：受力分析按"一重二弹三摩擦"顺序画图；平衡即合力为零，列两个方向分量方程；多物体先用整体法求外力，再隔离求内力；绳杆弹簧特性不同，动态平衡盯住"不变的量"（如重力）列方程看变化趋势。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">斜面受力分析：重力分解为垂直与平行两分量</text><line x1="80" y1="250" x2="600" y2="250" stroke="#2e9e8f" stroke-width="3"/><polygon points="120,250 360,250 360,150 120,250" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="250" y="200" font-size="13" fill="#234b45" text-anchor="middle">30°斜面</text><rect x="230" y="170" width="60" height="40" fill="#4fb3a5"/><line x1="260" y1="190" x2="260" y2="120" stroke="#234b45" stroke-width="3"/><text x="270" y="115" font-size="13" fill="#234b45" text-anchor="middle">重力G</text><line x1="260" y1="190" x2="340" y2="220" stroke="#2e9e8f" stroke-width="3"/><text x="345" y="235" font-size="13" fill="#234b45" text-anchor="middle">G∥</text><line x1="260" y1="190" x2="320" y2="152" stroke="#2e9e8f" stroke-width="3"/><text x="330" y="150" font-size="13" fill="#234b45" text-anchor="middle">G⊥</text></svg>', caption: '图1　斜面上物体，重力分解为平行斜面的 G∥ 和垂直斜面的 G⊥。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">整体法与隔离法：整体看外力，隔离看内力</text><rect x="120" y="120" width="90" height="70" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="165" y="160" font-size="14" fill="#234b45" text-anchor="middle">A</text><rect x="220" y="120" width="90" height="70" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="265" y="160" font-size="14" fill="#234b45" text-anchor="middle">B</text><line x1="165" y1="190" x2="165" y2="240" stroke="#234b45" stroke-width="2"/><line x1="265" y1="190" x2="265" y2="240" stroke="#234b45" stroke-width="2"/><line x1="80" y1="240" x2="600" y2="240" stroke="#2e9e8f" stroke-width="3"/><text x="165" y="262" font-size="12" fill="#234b45" text-anchor="middle">A重</text><text x="265" y="262" font-size="12" fill="#234b45" text-anchor="middle">B重</text><text x="430" y="160" font-size="13" fill="#4fb3a5" text-anchor="middle">←整体法</text><text x="430" y="200" font-size="13" fill="#4fb3a5" text-anchor="middle">看地面支持力</text><text x="430" y="240" font-size="13" fill="#4fb3a5" text-anchor="middle">隔离A看A、B间压力</text></svg>', caption: '图2　叠放物体：整体法求地面支持力，隔离 A 求 A、B 间相互作用力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动态平衡：两根绳吊重物，夹角越大张力越大</text><circle cx="340" cy="200" r="14" fill="#234b45"/><text x="340" y="228" font-size="13" fill="#234b45" text-anchor="middle">重物G</text><line x1="340" y1="200" x2="200" y2="90" stroke="#4fb3a5" stroke-width="3"/><line x1="340" y1="200" x2="480" y2="90" stroke="#4fb3a5" stroke-width="3"/><line x1="340" y1="200" x2="340" y2="280" stroke="#234b45" stroke-width="3"/><text x="340" y="298" font-size="13" fill="#234b45" text-anchor="middle">竖直向下重力</text><text x="180" y="80" font-size="13" fill="#234b45" text-anchor="middle">绳张力T</text><text x="500" y="80" font-size="13" fill="#234b45" text-anchor="middle">绳张力T</text><text x="340" y="60" font-size="13" fill="#4fb3a5" text-anchor="middle">夹角越大T越大</text></svg>', caption: '图3　对称双绳悬挂，缓慢增大夹角，张力随之增大，存在被拉断风险。' }
    ],
    exercises: [
      { type: 'choice', question: '关于共点力平衡，下列说法正确的是？', options: ['物体受三个力平衡时，三力不一定共点', '合力为零即 ΣF_x = 0 且 ΣF_y = 0', '平衡时物体一定静止', '两个力平衡时大小可以不等'], answer: '合力为零即 ΣF_x = 0 且 ΣF_y = 0', explanation: '共点力平衡的条件是合力为零。建立直角坐标系后，就是 x 方向合力为零、y 方向合力也为零。三个力平衡时三力必共点；平衡包含静止和匀速直线运动两种状态；两个力平衡必须等大反向。因此只有第二项正确。' },
      { type: 'choice', question: '叠放的两物体 A 在上、B 在下，静止于水平面。要求 A、B 之间的压力，应采用的法是？', options: ['整体法', '隔离法', '只用平行四边形定则', '无法求出'], answer: '隔离法', explanation: 'A、B 间的压力是内力。整体法中内力相互抵消，求不出来，必须先整体求地面支持力，再隔离 A（或 B）单独列平衡方程把内力求出。所以求两物体间相互作用力要用隔离法，优先隔离受力较少的物体。' },
      { type: 'choice', question: '关于绳、杆、弹簧，下列说法正确的是？', options: ['轻绳可以受压', '轻杆(二力杆)的力一定沿杆方向', '弹簧弹力可以突变', '同一根绳各处张力可以不同'], answer: '轻杆(二力杆)的力一定沿杆方向', explanation: '轻绳只能拉不能压，且同一根绳张力处处相等，故"轻绳可以受压"和"张力可以不同"都错。弹簧弹力 F=k×x 随形变量变化，不能突变，剪断瞬间仍保持原值，故"可以突变"错。二力杆只受两端力，必沿杆轴线平衡，该项正确。' },
      { type: 'fill', question: '质量 5 kg 的物块静止在水平面上，地面对它的支持力大小为___N。（g 取 10 m/s²）', answer: '50', explanation: '物块受重力 G = m×g = 5×10 = 50 N 向下，支持力 N 向上。静止平衡时竖直方向合力为零，故 N = G = 50 N。水平方向若无其他力，支持力就等于重力大小。' },
      { type: 'fill', question: '用两根对称轻绳悬挂重物，每根绳与竖直方向夹角为 θ，重物重力为 G，则每根绳的张力 T = ___（用 G 和 θ 表示）。', answer: 'G/(2×cosθ)', explanation: '两绳对称，张力大小相等均为 T。竖直方向平衡：两绳张力的竖直分量之和 2×T×cosθ 等于重力 G，即 2×T×cosθ = G，解得 T = G/(2×cosθ)。当 θ 增大（两绳夹角变大）时 cosθ 减小，张力 T 变大。' }
    ]
  });
})();
