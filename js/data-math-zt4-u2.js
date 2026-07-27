/* ============================================================
 * 高中数学 · 高考复习专题 · 立体几何
 * 第2单元：空间几何体的表面积与体积（2 课时）
 * 数据注入：math.zt4.points
 * 说明：本文件只注入数据，注册由 data-gz.js 中 GZ_REVIEW.math 遍历完成。
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt4');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 空间几何体的表面积 ---------------- */
    {
      id: 'zt4-u2-l1',
      name: '空间几何体的表面积',
      chapter: '立体几何复习 · 三 表面积',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、表面积的意义与基本思想' },
        { type: 'paragraph', text: '表面积指几何体所有外表面面积的总和。求表面积的核心思想是“展开”：把立体表面沿某些棱剪开、铺平，得到若干平面图形（矩形、圆、扇形、扇环等），表面积就是这些平面图形面积之和。' },
        { type: 'keypoint', label: '重点·定义', text: '空间几何体的<strong>表面积</strong>等于它的<strong>表面展开图</strong>中各个平面图形面积的总和。圆柱展开为“一个矩形加两个圆”，圆锥展开为“一个扇形加一个圆”，圆台展开为“一个扇环加两个圆”，球没有平面展开图、直接套用公式。' },
        { type: 'paragraph', text: '记住“表面积 = 展开图面积之和”，就能把立体问题转化为熟悉的平面图形面积问题，避免死记硬背。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">圆柱表面展开图</text><rect x="130" y="120" width="300" height="120" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="280" y="178" font-size="16" fill="#2b5b9e" text-anchor="middle">侧面展开为矩形</text><text x="280" y="202" font-size="15" fill="#33536e" text-anchor="middle">长 = 2πr，高 = h</text><circle cx="130" cy="60" r="38" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="130" y="65" font-size="14" fill="#2b5b9e" text-anchor="middle">底面圆</text><circle cx="540" cy="60" r="38" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="540" y="65" font-size="14" fill="#2b5b9e" text-anchor="middle">底面圆</text><text x="340" y="285" font-size="15" fill="#33536e" text-anchor="middle">圆柱表面积 = 侧面积(矩形) + 2 × 底面积(圆)</text></svg>', caption: '图1　圆柱表面展开图：侧面铺平成矩形（长等于底面周长 2πr，高等于 h），上下底是两个等圆。' },
        { type: 'heading', text: '二、圆柱、圆锥、圆台的表面积' },
        { type: 'table', headers: ['几何体', '侧面积', '全面积'], rows: [['圆柱', '2πrl', '2πr² + 2πrl'], ['圆锥', 'πrl', 'πr² + πrl'], ['圆台', 'π(r₁ + r₂)l', 'π(r₁² + r₂² + r₁l + r₂l)']] },
        { type: 'paragraph', text: '表中 r 是底面半径，l 是母线长（圆锥、圆台中顶点到底面圆周上任意一点的线段）。圆柱没有母线，l 在圆柱里就是高 h。记法：全面积 = 侧面积 + 2 × 底面积（球除外，球只有一个面）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">圆锥表面展开图</text><path d="M 300 70 L 110 230 A 250 250 0 0 1 490 230 Z" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="300" y="170" font-size="15" fill="#2b5b9e" text-anchor="middle">侧面扇形</text><text x="300" y="194" font-size="14" fill="#33536e" text-anchor="middle">母线 l = 扇形半径</text><text x="300" y="216" font-size="14" fill="#33536e" text-anchor="middle">弧长 = 2πr</text><circle cx="560" cy="160" r="45" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="560" y="166" font-size="14" fill="#2b5b9e" text-anchor="middle">底面圆</text><text x="340" y="285" font-size="15" fill="#33536e" text-anchor="middle">圆锥表面积 = 侧面积(扇形) + 底面积(圆)</text></svg>', caption: '图2　圆锥表面展开图：侧面是扇形（半径等于母线 l，弧长等于底面周长 2πr），底面是一个圆。' },
        { type: 'heading', text: '三、球的表面积' },
        { type: 'keypoint', label: '重点·球', text: '球的表面积公式为 <strong>S = 4πR²</strong>，其中 R 是球的半径。球是连续曲面，不存在平面展开图，该公式需直接记忆。' },
        { type: 'paragraph', text: '球的表面积与半径的平方成正比：半径扩大为原来的 2 倍，表面积扩大为原来的 4 倍。做题时注意区分“直径”与“半径”，题目给的是直径 d 时要先取 R = d/2。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">圆台表面展开图</text><path d="M 290 50 L 120 220 A 230 230 0 0 1 460 220 L 365 220 A 160 160 0 0 0 215 220 Z" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="290" y="165" font-size="15" fill="#2b5b9e" text-anchor="middle">侧面扇环</text><text x="290" y="188" font-size="13" fill="#33536e" text-anchor="middle">母线 l 连接两底圆周</text><circle cx="120" cy="258" r="30" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="120" y="263" font-size="12" fill="#2b5b9e" text-anchor="middle">下底</text><circle cx="470" cy="258" r="20" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="470" y="262" font-size="12" fill="#2b5b9e" text-anchor="middle">上底</text><text x="340" y="292" font-size="13" fill="#33536e" text-anchor="middle">圆台表面积 = 扇环 + 两圆</text></svg>', caption: '图3　圆台表面展开图：侧面是扇环（两底面半径 r₁、r₂，母线 l），上下底是两个半径不同的圆。' },
        { type: 'example', label: '例题1', text: '已知圆柱底面半径 r = 2，高 h = 3，求其侧面积与全面积。<br><br><strong>解</strong>：圆柱母线（即高）l = h = 3。<br>侧面积 = 2πrl = 2π × 2 × 3 = 12π。<br>底面积 = πr² = π × 2² = 4π，两个底面共 8π。<br>全面积 = 2πr² + 2πrl = 8π + 12π = 20π。<br>答：侧面积为 12π，全面积为 20π。' },
        { type: 'example', label: '例题2', text: '已知圆锥底面半径 r = 3，母线 l = 5，求其侧面积与全面积。<br><br><strong>解</strong>：侧面积 = πrl = π × 3 × 5 = 15π。<br>底面积 = πr² = π × 3² = 9π。<br>全面积 = πr² + πrl = 9π + 15π = 24π。<br>答：侧面积为 15π，全面积为 24π。' },
        { type: 'example', label: '例题3', text: '已知球半径 R = 2，求其表面积。<br><br><strong>解</strong>：由公式 S = 4πR²，代入 R = 2 得 S = 4π × 2² = 4π × 4 = 16π。<br>答：球的表面积为 16π。' },
        { type: 'warn', label: '易错', text: '圆锥、圆台的<strong>母线 l</strong>与<strong>高 h</strong>不是同一个量：高 h 是顶点到底面的垂线段，母线 l 是斜线段，二者满足 l² = h² + r²（圆锥）或 l² = h² + (r₁ − r₂)²（圆台）。计算侧面积必须用母线 l，切勿把高 h 当成 l 代入。' },
        { type: 'tip', label: '提示', text: '计算表面积建议分三步：① 确定几何体类型并写出对应公式；② 找准 r、l、h、R 各量（注意单位统一）；③ 先算侧面积，再加底面积得到全面积。列式时保留 π 不要急于取近似值。' },
        { type: 'list', items: ['圆柱：全面积 = 2πr² + 2πrl，展开为矩形加两圆', '圆锥：全面积 = πr² + πrl，展开为扇形加一圆', '圆台：全面积 = π(r₁² + r₂² + r₁l + r₂l)，展开为扇环加两圆', '球：S = 4πR²，无展开图，直接套公式'] },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['表面积等于表面展开图各平面图形面积之和', '圆柱侧面积 2πrl，圆锥侧面积 πrl，圆台侧面积 π(r₁+r₂)l', '全面积 = 侧面积 + 底面积之和（球只有一个面）', '圆锥、圆台用母线 l 算侧面积，注意 l 与高 h 的区别', '球表面积 S = 4πR²，r 与 R、直径与半径要看清'] }
      ],
      exercises: [
        { type: 'choice', question: '圆柱底面半径为 2，高为 5，则其侧面积为？', options: ['10π', '20π', '28π', '40π'], answer: '20π', explanation: '圆柱侧面积公式为 2πrl，其中母线 l 等于高 h，故侧面积 = 2π × 2 × 5 = 20π。28π 是全面积（再加两个底面积 8π），40π 与 10π 均是混淆了半径与高的计算结果，不符合公式。' },
        { type: 'choice', question: '圆锥底面半径为 3，母线长为 4，则其全面积为？', options: ['12π', '9π', '21π', '15π'], answer: '21π', explanation: '圆锥侧面积 = πrl = π × 3 × 4 = 12π，底面积 = πr² = π × 3² = 9π，全面积 = 12π + 9π = 21π。12π 只算侧面积，9π 只算底面积，15π 是错误相加，均不完整。' },
        { type: 'fill', question: '圆台的上、下底面半径分别为 1 和 2，母线长为 3，则其侧面积 = ____。（用 π 表示）', answer: '9π', explanation: '圆台侧面积公式为 π(r₁ + r₂)l，代入 r₁ = 1、r₂ = 2、l = 3，得侧面积 = π × (1 + 2) × 3 = 9π。注意是上下底面半径之和乘以母线长再乘 π，不要漏掉括号或把母线平方。' },
        { type: 'choice', question: '球的半径为 3，则其表面积等于？', options: ['9π', '12π', '36π', '4π'], answer: '36π', explanation: '球表面积公式为 S = 4πR²，代入 R = 3 得 S = 4π × 3² = 4π × 9 = 36π。9π 误用了 R 而非 R²，12π 与 4π 均少乘了半径的平方项，均不正确。' },
        { type: 'fill', question: '圆柱的表面积等于侧面积加上 ____ 个底面积。（填数字）', answer: '2', explanation: '圆柱有上下两个底面，均为半径为 r 的圆，因此全面积 = 侧面积 + 2 × 底面积 = 2πrl + 2πr²。题目所求即底面个数，显然为 2。这与圆锥（1 个底面）、球（无底面）的表面积构成不同。' }
      ]
    },

    /* ---------------- 第2课时 空间几何体的体积 + 割补法与等体积法 ---------------- */
    {
      id: 'zt4-u2-l2',
      name: '空间几何体的体积与割补法',
      chapter: '立体几何复习 · 三 体积',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、体积公式总览' },
        { type: 'paragraph', text: '体积描述几何体所占空间的大小。柱、锥、台、球四类基本几何体的体积公式既有区别又有联系：当台体的上底面缩小为一点时，台退化为锥；当上底面扩大到与下底面相等时，台退化为柱。' },
        { type: 'keypoint', label: '重点·记忆口诀', text: '体积记忆口诀：<strong>柱体 Sh，锥体 1/3 Sh，台体“上 + 下 + 开根号”乘 h/3</strong>。其中 S 是底面积、h 是高；台体公式里的“上、下”指上、下底面积，根号连接二者乘积，体现柱与锥之间的过渡。' },
        { type: 'table', headers: ['几何体', '体积公式'], rows: [['柱体', 'V = S底 · h'], ['锥体', 'V = 1/3 · S底 · h'], ['台体', 'V = 1/3 · h (S上 + S下 + √(S上S下))'], ['球', 'V = 4/3 · πR³']] },
        { type: 'paragraph', text: '锥体体积为什么是柱体的 1/3？可由实验（等底等高的柱、锥盛水）或祖暅原理理解：同底等高的圆锥体积恰为圆柱的三分之一。台体公式可由“大锥减去小锥”得到，是割补思想的体现。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">柱体体积 V = S底 · h</text><polygon points="210,120 330,80 450,120 330,160" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><polygon points="210,120 210,220 330,260 330,160" fill="#b6d3f5" stroke="#4a7de0" stroke-width="2.5"/><polygon points="330,160 330,260 450,220 450,120" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2.5"/><line x1="330" y1="160" x2="330" y2="260" stroke="#e05d44" stroke-width="2.5" stroke-dasharray="6 4"/><text x="345" y="215" font-size="15" fill="#c0392b">高 h</text><text x="250" y="248" font-size="15" fill="#2b5b9e">底面积 S底</text><text x="340" y="288" font-size="15" fill="#33536e" text-anchor="middle">柱体体积 = 底面积 × 高</text></svg>', caption: '图1　柱体体积：底面积 S底 与高 h 垂直对应，体积等于底面积乘以高。' },
        { type: 'heading', text: '二、锥体体积' },
        { type: 'keypoint', label: '重点·锥体', text: '锥体（含圆锥、棱锥）体积公式 <strong>V = 1/3 · S底 · h</strong>。只要底面积与高确定，体积就确定，与顶点的水平位置无关（等底等高的锥体积相等）。' },
        { type: 'paragraph', text: '应用锥体公式时，关键是找准“底面”和对应的“高”。底面可以是任一面，高则是该面到对顶点的垂直距离。对于正棱锥，高过底面中心；对于任意棱锥，体积仍严格等于 1/3 底面积乘高。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">锥体体积 V = 1/3 · S底 · h</text><polygon points="200,210 300,170 400,210 300,250" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2.5"/><polygon points="200,210 300,170 300,80" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><polygon points="300,170 400,210 300,80" fill="#b6d3f5" stroke="#4a7de0" stroke-width="2.5"/><polygon points="200,210 300,250 300,80" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2.5"/><line x1="300" y1="80" x2="300" y2="210" stroke="#e05d44" stroke-width="2.5" stroke-dasharray="6 4"/><text x="312" y="150" font-size="15" fill="#c0392b">高 h</text><text x="340" y="290" font-size="15" fill="#33536e" text-anchor="middle">同底等高的锥体体积 = 柱体的 1/3</text></svg>', caption: '图2　锥体体积：从底面到顶点的高 h，体积恰为同底等高柱体的三分之一。' },
        { type: 'heading', text: '三、台体体积与割补法' },
        { type: 'keypoint', label: '重点·台体', text: '台体（棱台、圆台）体积公式 <strong>V = 1/3 · h (S上 + S下 + √(S上S下))</strong>。其中 S上、S下 分别为上、下底面积，h 为高。当 S上 = S下 时退化为柱体，当 S上 = 0 时退化为锥体，公式统一涵盖三者。' },
        { type: 'paragraph', text: '割补法处理不规则几何体：把难以直接求体积的图形，分割（割）成几个规则几何体分别求体积再相加，或补成一个规则几何体后减去多余部分（补）。核心是把“未知”转化为“已知”的规则体积。' },
        { type: 'warn', label: '易错·等体积法', text: '<strong>等体积法是求点到平面距离的重要方法。</strong>同一个几何体，选用不同的面作底面，体积不变。常把“未知距离”设为某面的高，借助 V = 1/3 · S · h 建立方程解出该距离，避免繁琐的几何作图。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">台体体积与割补思想</text><polygon points="200,230 300,180 400,230 300,280" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2.5"/><polygon points="245,140 320,115 395,140 320,165" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="200" y1="230" x2="245" y2="140" stroke="#4a7de0" stroke-width="2.5"/><line x1="400" y1="230" x2="395" y2="140" stroke="#4a7de0" stroke-width="2.5"/><line x1="300" y1="280" x2="320" y2="165" stroke="#4a7de0" stroke-width="2.5"/><line x1="245" y1="140" x2="320" y2="40" stroke="#e05d44" stroke-width="2" stroke-dasharray="6 4"/><line x1="395" y1="140" x2="320" y2="40" stroke="#e05d44" stroke-width="2" stroke-dasharray="6 4"/><text x="320" y="34" font-size="14" fill="#c0392b">补成锥</text><text x="120" y="165" font-size="15" fill="#2b5b9e">台体</text><text x="340" y="292" font-size="13" fill="#33536e" text-anchor="middle">V台 = 1/3·h(S上+S下+√(S上S下))，或补成大锥减小锥</text></svg>', caption: '图3　台体体积结构（上 + 下 + 根号）与割补思想：把台体补成完整锥体，用大锥减小锥得到台体体积。' },
        { type: 'heading', text: '四、等体积法应用' },
        { type: 'paragraph', text: '等体积法求距离的步骤：① 选定一个三棱锥，其体积可较易求出；② 把待求距离所在的点与对面构成以该面为底、距离为高的三棱锥；③ 利用同一体积列方程，解出距离。它把“求距离”转化为“求体积再反解高”。' },
        { type: 'example', label: '例题1', text: '已知正四棱锥底面边长为 4，高为 6，求其体积。<br><br><strong>解</strong>：底面积 S底 = 4 × 4 = 16。<br>由锥体体积公式 V = 1/3 · S底 · h = 1/3 × 16 × 6 = 32。<br>答：正四棱锥的体积为 32。' },
        { type: 'example', label: '例题2', text: '已知三棱柱底面是边长为 3 的正三角形，侧棱长为 5，求其体积。<br><br><strong>解</strong>：底面正三角形面积 S底 = (√3/4) × 3² = 9√3/4。<br>柱体体积 V = S底 · h = (9√3/4) × 5 = 45√3/4。<br>答：三棱柱体积为 45√3/4。' },
        { type: 'example', label: '例题3', text: '在三棱锥 P − ABC 中，已知底面 ABC 面积为 6，三棱锥体积 V = 12，求点 P 到平面 ABC 的距离。<br><br><strong>解</strong>：设点 P 到平面 ABC 的距离为 h，则三棱锥体积 V = 1/3 · S底 · h。<br>代入 12 = 1/3 × 6 × h，得 12 = 2h，解得 h = 6。<br>答：点 P 到平面 ABC 的距离为 6。' },
        { type: 'example', label: '例题4', text: '已知圆台的上、下底面半径分别为 1 和 2，高为 3，求其体积。<br><br><strong>解</strong>：S上 = π·1² = π，S下 = π·2² = 4π。<br>V = 1/3 · h (S上 + S下 + √(S上S下)) = 1/3 × 3 × (π + 4π + √(π·4π)) = 5π + 2π = 7π。<br>答：圆台体积为 7π。' },
        { type: 'tip', label: '提示', text: '遇到“点到面距离”“异面直线距离转化为点面距离”类问题，优先考虑等体积法：选一个易算体积的三棱锥，把待求距离当作某面上的高，列方程反解。它不依赖图形直观，计算稳定不易出错。' },
        { type: 'list', items: ['柱体 V = S底·h；锥体 V = 1/3·S底·h', '台体 V = 1/3·h(S上+S下+√(S上S下))', '球 V = 4/3·πR³；半径扩大 2 倍，体积扩大 8 倍', '割补法：不规则体化为规则体相加减'] },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['四类体积公式以“底面积乘高”为骨架，锥比柱多 1/3 因子', '台体公式统一了柱与锥，注意 S上、S下、根号三项齐全', '割补法把不规则几何体化为规则几何体求体积', '等体积法是求点到平面距离的关键方法：换底列方程', '用等体积法时体积恒定，选易算的底面作基准'] }
      ],
      exercises: [
        { type: 'choice', question: '正四棱锥底面边长为 4，高为 6，则体积为？', options: ['16', '24', '32', '48'], answer: '32', explanation: '底面积 S底 = 4 × 4 = 16，锥体体积 V = 1/3 · S底 · h = 1/3 × 16 × 6 = 32。16 只算底面积，48 误把系数写成 3/2，24 误用了 1/2 系数，均不符合锥体 1/3 公式。' },
        { type: 'choice', question: '底面半径为 3、高为 4 的圆柱，其体积为？', options: ['12π', '24π', '36π', '48π'], answer: '36π', explanation: '圆柱体积 V = S底 · h = πr² · h = π × 3² × 4 = 9π × 4 = 36π。12π 与 24π 错用了锥体的 1/3 系数，48π 误将半径当成 4 参与计算，均不正确。' },
        { type: 'fill', question: '圆台上下底面半径分别为 1 和 2，高为 3，则其体积 V = ____。（用 π 表示）', answer: '7π', explanation: '圆台体积 V = 1/3 · h (S上 + S下 + √(S上S下))。S上 = π·1² = π，S下 = π·2² = 4π，√(S上S下) = √(4π²) = 2π。代入 V = 1/3 × 3 × (π + 4π + 2π) = 7π。注意根号下是面积乘积，结果为 2π 而非 2。' },
        { type: 'choice', question: '关于等体积法，下列说法正确的是？', options: ['等体积法只能求柱体体积', '等体积法是求点到平面距离的重要方法', '换底会改变几何体体积', '等体积法必须先画出高'], answer: '等体积法是求点到平面距离的重要方法', explanation: '同一几何体无论选哪个面作底面，其体积保持不变，等体积法正是利用这一点把点到面的距离设为某面的高来列方程求解，是求点到平面距离的重要方法。其余说法均错：等体积法不限于柱体，换底不改变体积，也无需先画出高。' },
        { type: 'fill', question: '半径为 R 的球，体积公式为 V = ____。', answer: '4/3·πR³', explanation: '球的体积公式为 V = 4/3 · πR³，其中 R 为球半径。它与表面积 4πR² 不同：体积含 R 的三次方及系数 4/3，表面积含 R 的二次方及系数 4。记忆时可联系“体积随半径三次方增长”。' }
      ]
    }

  );
})();
