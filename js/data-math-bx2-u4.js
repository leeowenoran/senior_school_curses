/* ============================================================
 * 高二数学 · 选择性必修 第二册（拓展二 bx2）· 第七、八章
 * 第1课时：复数的三角表示（选学）（人教A版 §7.3*）
 * 第2课时：基本立体图形（人教A版 §8.1）
 * 数据注入：math.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx2');
  if (!v) return;
  v.points.push(

    /* ---------------- 第1课时 复数的三角表示（选学） ---------------- */
    {
      id: 'bx2-u4-l1',
      name: '复数的三角表示（选学）',
      chapter: '第七章 复数 · 7.3*',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、复数的模与辐角' },
        { type: 'paragraph', text: '在平面内可以用向量表示复数。复数 z = a + bi 对应复平面上从原点指向点 (a, b) 的向量，这个向量的长度就是复数的模，向量与正实轴的夹角就是复数的辐角。' },
        { type: 'keypoint', label: '重点·复数的三角形式', text: '当 r = |z| ≥ 0 且 θ 为 z 的辐角时，复数可写成 <strong>z = r(cosθ + i sinθ)</strong>，这称为复数的<strong>三角形式</strong>。其中 r 是模，θ 是辐角，i 是虚数单位。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">复数的模与辐角</text><line x1="40" y1="230" x2="640" y2="230" stroke="#2b5b9e" stroke-width="2"/><polygon points="640,230 628,224 628,236" fill="#2b5b9e"/><line x1="170" y1="270" x2="170" y2="60" stroke="#2b5b9e" stroke-width="2"/><polygon points="170,60 164,72 176,72" fill="#2b5b9e"/><line x1="170" y1="230" x2="540" y2="80" stroke="#4a7de0" stroke-width="3"/><polygon points="540,80 527,86 533,98" fill="#4a7de0"/><circle cx="540" cy="80" r="5" fill="#e05d44"/><path d="M 230 230 A 60 60 0 0 0 225.6 207.4" fill="none" stroke="#c0392b" stroke-width="2"/><text x="258" y="218" font-size="15" fill="#c0392b" text-anchor="middle">θ</text><text x="350" y="150" font-size="15" fill="#5a7a2a" font-weight="bold" text-anchor="middle">r = |z|</text><text x="552" y="78" font-size="15" fill="#2b5b9e" font-weight="bold" text-anchor="start">z = a + bi</text><text x="150" y="250" font-size="14" fill="#33536e" text-anchor="middle">O</text><text x="636" y="252" font-size="14" fill="#33536e" text-anchor="end">实轴</text><text x="150" y="55" font-size="14" fill="#33536e" text-anchor="middle">虚轴</text></svg>', caption: '图1　复平面上的向量：长度 r 为模，与正实轴夹角 θ 为辐角。' },
        { type: 'paragraph', text: '辐角不是唯一的。把一个向量旋转整数圈（2kπ）后方向不变，因此同一个复数有无穷多个辐角，它们相差 2π 的整数倍。' },
        { type: 'keypoint', label: '重点·辐角主值', text: '在辐角的无穷多个值中，通常取一个规定范围内的代表值，称为<strong>辐角主值</strong>，记作 <strong>arg z</strong>。常用范围是 <strong>[0, 2π)</strong>（或 (-π, π]）。当 z = 0 时，辐角没有意义。' },
        { type: 'list', items: ['辐角满足 θ = arg z + 2kπ（k 为整数）', '辐角主值 arg z 落在规定区间内，是辐角的代表', 'z = 0 时模为 0，辐角不确定', '三角形式要求 r ≥ 0，且实部为 r cosθ、虚部为 r sinθ'] },
        { type: 'heading', text: '二、三角形式与代数形式的互化' },
        { type: 'keypoint', label: '重点·互化公式', text: '设 z = a + bi = r(cosθ + i sinθ)，则 <strong>r = √(a² + b²)</strong>，<strong>cosθ = a/r</strong>，<strong>sinθ = b/r</strong>（r ≠ 0）。反过来由 r 与 θ 可得 a = r cosθ，b = r sinθ。' },
        { type: 'example', label: '例题1', text: '将 z = 1 + √3 i 化为三角形式。<br><br><strong>解</strong>：r = √(1² + (√3)²) = √4 = 2；cosθ = 1/2，sinθ = √3/2，故 θ = π/3。所以 <strong>z = 2(cos(π/3) + i sin(π/3))</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="32" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">三角形式的几何含义</text><line x1="60" y1="220" x2="600" y2="220" stroke="#2b5b9e" stroke-width="2"/><line x1="160" y1="250" x2="160" y2="50" stroke="#2b5b9e" stroke-width="2"/><line x1="160" y1="220" x2="520" y2="90" stroke="#4a7de0" stroke-width="3"/><polygon points="520,90 507,96 513,108" fill="#4a7de0"/><circle cx="520" cy="90" r="5" fill="#e05d44"/><line x1="520" y1="90" x2="520" y2="220" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4"/><line x1="520" y1="90" x2="160" y2="90" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4"/><path d="M 220 220 A 60 60 0 0 0 215.6 197.4" fill="none" stroke="#c0392b" stroke-width="2"/><text x="248" y="208" font-size="15" fill="#c0392b" text-anchor="middle">θ</text><text x="345" y="150" font-size="15" fill="#5a7a2a" font-weight="bold" text-anchor="middle">r</text><text x="370" y="245" font-size="14" fill="#33536e" text-anchor="middle">a = r cosθ</text><text x="118" y="155" font-size="14" fill="#33536e" text-anchor="middle">b = r sinθ</text><text x="532" y="90" font-size="14" fill="#2b5b9e" font-weight="bold" text-anchor="start">z</text></svg>', caption: '图2　三角形式的几何含义：向量在坐标轴上的投影分别为 a = r cosθ 与 b = r sinθ。' },
        { type: 'example', label: '例题2', text: '将 z = 4(cos(π/6) + i sin(π/6)) 化为代数形式 a + bi。<br><br><strong>解</strong>：a = 4 cos(π/6) = 4·(√3/2) = 2√3，b = 4 sin(π/6) = 4·(1/2) = 2，故 <strong>z = 2√3 + 2i</strong>。' },
        { type: 'list', items: ['代数化三角：先求 r = √(a²+b²)，再定 θ 使 cosθ=a/r、sinθ=b/r', '定 θ 时最好先判断点 (a,b) 所在象限，避免符号错误', '三角化代数：直接算 a = r cosθ、b = r sinθ', '互化前后模不变，辐角相差 2π 的整数倍不影响'] },
        { type: 'heading', text: '三、复数乘法的几何意义' },
        { type: 'keypoint', label: '重点·乘法辐角相加', text: '设 z₁ = r₁(cosθ₁ + i sinθ₁)，z₂ = r₂(cosθ₂ + i sinθ₂)，则 <strong>z₁z₂ = r₁r₂[cos(θ₁+θ₂) + i sin(θ₁+θ₂)]</strong>。几何上：<strong>模相乘、辐角相加</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="32" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">乘法时辐角相加</text><line x1="80" y1="200" x2="620" y2="200" stroke="#2b5b9e" stroke-width="2"/><line x1="250" y1="240" x2="250" y2="50" stroke="#2b5b9e" stroke-width="2"/><line x1="250" y1="200" x2="354" y2="140" stroke="#4a7de0" stroke-width="3"/><polygon points="354,140 341,145 347,157" fill="#4a7de0"/><line x1="250" y1="200" x2="330" y2="92" stroke="#7a5aa0" stroke-width="3"/><polygon points="330,92 318,98 323,110" fill="#7a5aa0"/><line x1="250" y1="200" x2="370" y2="60" stroke="#e05d44" stroke-width="3"/><polygon points="370,60 356,66 363,78" fill="#e05d44"/><path d="M 310 200 A 60 60 0 0 0 302 170" fill="none" stroke="#4a7de0" stroke-width="2"/><path d="M 360 200 A 110 110 0 0 0 321 116" fill="none" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4"/><text x="250" y="225" font-size="14" fill="#33536e" text-anchor="middle">O</text><text x="300" y="190" font-size="14" fill="#4a7de0" text-anchor="middle">θ₁</text><text x="300" y="160" font-size="14" fill="#c0392b" text-anchor="middle">θ₁+θ₂</text><text x="364" y="58" font-size="14" fill="#e05d44" font-weight="bold" text-anchor="start">z₁z₂</text><text x="360" y="140" font-size="14" fill="#4a7de0" font-weight="bold" text-anchor="start">z₁</text><text x="338" y="90" font-size="14" fill="#7a5aa0" font-weight="bold" text-anchor="start">z₂</text></svg>', caption: '图3　乘法时辐角相加：z₁z₂ 的辐角等于 θ₁ + θ₂，模等于 r₁r₂。' },
        { type: 'table', headers: ['运算', '三角形式结果'], rows: [['乘法', 'z₁z₂ = r₁r₂[cos(θ₁+θ₂) + i sin(θ₁+θ₂)]'], ['除法', 'z₁/z₂ = (r₁/r₂)[cos(θ₁-θ₂) + i sin(θ₁-θ₂)]'], ['乘方（棣莫弗）', 'zⁿ = rⁿ[cos(nθ) + i sin(nθ)]']] },
        { type: 'example', label: '例题3', text: '设 z₁ = 2(cos(π/4)+i sin(π/4))，z₂ = 3(cos(π/6)+i sin(π/6))，求 z₁z₂。<br><br><strong>解</strong>：模相乘 2×3 = 6，辐角相加 π/4 + π/6 = 5π/12，故 <strong>z₁z₂ = 6(cos(5π/12) + i sin(5π/12))</strong>。' },
        { type: 'warn', label: '易错', text: '三大易错点：①<strong>忘记 r ≥ 0</strong>，写成负模或把负号塞进括号；②<strong>辐角主值区间取错</strong>，例如把第二象限的角算成锐角；③<strong>乘法时误把辐角相乘</strong>，正确做法是辐角相加、模相乘。' },
        { type: 'tip', label: '记忆', text: '记住口诀<strong>“模乘辐加”</strong>：两个三角形式相乘，模与模相乘，辐角与辐角相加。互化时先画点在复平面，凭象限定 θ，比死套公式更稳。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['三角形式 z = r(cosθ + i sinθ)，r = |z|、θ 为辐角', '辐角主值 arg z 取规定区间内的代表值', '互化：r=√(a²+b²)，cosθ=a/r，sinθ=b/r', '乘法：模相乘、辐角相加', 'zⁿ = rⁿ[cos(nθ)+i sin(nθ)]（棣莫弗定理）'] }
      ],
      exercises: [
        { type: 'choice', question: '复数三角形式 z = r(cosθ + i sinθ) 中，r 表示什么？', options: ['模 |z|', '实部 a', '虚部 b', '辐角 θ'], answer: '模 |z|', explanation: '在三角形式 z = r(cosθ + i sinθ) 中，r 代表复数的模，即 r = |z| = √(a² + b²)，恒为非负数。实部 a = r cosθ，虚部 b = r sinθ，二者都不是 r。辐角用 θ 表示，也不是 r。因此 r 对应的是模 |z|。' },
        { type: 'fill', question: '复数 z = -1 的三角形式为 ____（写成 r(cosθ + i sinθ) 形式，如 1(cosπ + i sinπ)）。', answer: '1(cosπ + i sinπ)|1(cosπ+i sinπ)|cosπ+i sinπ', explanation: 'z = -1 对应复平面上的点 (-1,0)，模 r = 1，辐角主值 θ = π（位于负实轴上）。代入三角形式得 z = 1·(cosπ + i sinπ) = cosπ + i sinπ。故填 1(cosπ + i sinπ)。' },
        { type: 'choice', question: '复数 z = 1 + i 的辐角主值 arg z 等于？', options: ['π/6', 'π/4', 'π/3', 'π/2'], answer: 'π/4', explanation: 'z = 1 + i 对应复平面上的点 (1,1)，模 r = √(1²+1²) = √2。由 cosθ = 1/√2、sinθ = 1/√2 可得 θ = π/4（第一象限角）。π/6、π/3、π/2 对应的坐标分别为 (√3/2,1/2)、(1/2,√3/2)、(0,1)，均与点 (1,1) 不符。' },
        { type: 'fill', question: '设 z₁ = r₁(cosθ₁ + i sinθ₁)，z₂ = r₂(cosθ₂ + i sinθ₂)，则 z₁z₂ = ____。', answer: 'r₁r₂(cos(θ₁+θ₂)+i sin(θ₁+θ₂))|r1r2(cos(θ1+θ2)+i sin(θ1+θ2))', explanation: '根据三角形式的乘法法则，两复数相乘时模与模相乘、辐角与辐角相加，即 z₁z₂ = r₁r₂[cos(θ₁ + θ₂) + i sin(θ₁ + θ₂)]。这是复数乘法几何意义的直接表达，也是棣莫弗定理的乘法基础。' },
        { type: 'choice', question: '两个复数相乘时，它们的辐角如何变化？', options: ['相加', '相减', '相乘', '相除'], answer: '相加', explanation: '复数乘法的几何意义是“模相乘、辐角相加”。即 z₁z₂ 的模等于 r₁r₂，辐角等于 θ₁ + θ₂。相减、相乘、相除都不是三角形式下乘法的正确规律，只有辐角相加成立。' }
      ]
    },

    /* ---------------- 第2课时 基本立体图形 ---------------- */
    {
      id: 'bx2-u4-l2',
      name: '基本立体图形',
      chapter: '第八章 立体几何初步 · 8.1',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、多面体' },
        { type: 'paragraph', text: '由若干个平面多边形围成的几何体叫做多面体。围成多面体的各个多边形叫做多面体的面，相邻两个面的公共边叫做多面体的棱，棱与棱的公共点叫做多面体的顶点。' },
        { type: 'keypoint', label: '重点·多面体', text: '多面体是由<strong>平面多边形</strong>围成的封闭几何体。根据面数可分为四面体、五面体等；按结构特征主要分为<strong>棱柱、棱锥、棱台</strong>三类。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="32" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">棱柱的结构</text><polygon points="220,90 380,90 440,130 280,130" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="220,210 380,210 440,250 280,250" fill="#eef4fc" stroke="#2b5b9e" stroke-width="2.5"/><line x1="220" y1="90" x2="220" y2="210" stroke="#4a7de0" stroke-width="2.5"/><line x1="380" y1="90" x2="380" y2="210" stroke="#4a7de0" stroke-width="2.5"/><line x1="280" y1="130" x2="280" y2="250" stroke="#4a7de0" stroke-width="2.5"/><line x1="440" y1="130" x2="440" y2="250" stroke="#4a7de0" stroke-width="2.5"/><text x="340" y="75" font-size="14" fill="#2b5b9e" font-weight="bold" text-anchor="middle">上底面</text><text x="340" y="272" font-size="14" fill="#2b5b9e" font-weight="bold" text-anchor="middle">下底面</text><text x="456" y="195" font-size="14" fill="#4a7de0" text-anchor="start">侧棱互相平行</text></svg>', caption: '图1　棱柱：两个底面互相平行，各侧棱也互相平行。' },
        { type: 'keypoint', label: '重点·棱柱', text: '有两个面互相平行，其余各面都是四边形，且每相邻两个四边形的公共边都互相平行，由这些面围成的多面体叫做<strong>棱柱</strong>。两个平行的面叫底面，其余各面叫侧面，侧面公共边叫侧棱。' },
        { type: 'list', items: ['棱柱的两个底面互相平行且全等', '棱柱的所有侧棱都互相平行且长度相等', '侧棱与底面垂直的棱柱叫直棱柱，否则叫斜棱柱', '底面是正多边形的直棱柱叫正棱柱'] },
        { type: 'keypoint', label: '重点·棱锥', text: '有一个面是多边形，其余各面是有一个公共顶点的三角形，由这些面围成的多面体叫做<strong>棱锥</strong>。这个多边形面叫底面，有公共顶点的三角形面叫侧面，公共顶点叫棱锥的顶点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="32" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">棱锥与棱台</text><circle cx="170" cy="85" r="5" fill="#e05d44"/><line x1="170" y1="85" x2="100" y2="225" stroke="#2b5b9e" stroke-width="2.5"/><line x1="170" y1="85" x2="240" y2="225" stroke="#2b5b9e" stroke-width="2.5"/><line x1="100" y1="225" x2="240" y2="225" stroke="#2b5b9e" stroke-width="2.5"/><text x="170" y="76" font-size="14" fill="#2b5b9e" font-weight="bold" text-anchor="middle">棱锥</text><text x="170" y="248" font-size="13" fill="#33536e" text-anchor="middle">侧面共一个顶点</text><line x1="380" y1="85" x2="330" y2="150" stroke="#7a5aa0" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="380" y1="85" x2="430" y2="150" stroke="#7a5aa0" stroke-width="1.5" stroke-dasharray="4 3"/><polygon points="330,150 430,150 470,225 290,225" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="330" y1="150" x2="430" y2="150" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4"/><text x="380" y="248" font-size="13" fill="#33536e" text-anchor="middle">棱台：平行截面截棱锥</text><text x="380" y="140" font-size="14" fill="#4a7de0" font-weight="bold" text-anchor="middle">棱台</text><text x="455" y="160" font-size="12" fill="#c0392b" text-anchor="start">截面</text></svg>', caption: '图2　左侧棱锥各侧面共顶点；右侧棱台由平行于棱锥底面的平面截得。' },
        { type: 'keypoint', label: '重点·棱台', text: '用<strong>平行于棱锥底面</strong>的平面去截棱锥，底面与截面之间的部分叫做<strong>棱台</strong>。原棱锥的底面叫棱台的下底面，截面叫上底面，侧面是梯形。' },
        { type: 'list', items: ['棱台的两个底面互相平行，且对应边成比例', '棱台的各侧棱延长后交于一点（原棱锥顶点）', '棱台的侧面都是梯形', '用平行于圆锥底面的平面截圆锥可得圆台'] },
        { type: 'heading', text: '二、旋转体' },
        { type: 'keypoint', label: '重点·圆柱', text: '以<strong>矩形的一边所在直线</strong>为旋转轴，其余三边旋转形成的面所围成的旋转体叫做<strong>圆柱</strong>。旋转轴叫圆柱的轴，垂直于轴的边旋转成底面圆。' },
        { type: 'keypoint', label: '重点·圆锥', text: '以<strong>直角三角形的一条直角边</strong>所在直线为旋转轴，其余两边旋转形成的面所围成的旋转体叫做<strong>圆锥</strong>。另一条直角边旋转成底面圆，斜边旋转成侧面。' },
        { type: 'keypoint', label: '重点·圆台', text: '用<strong>平行于圆锥底面</strong>的平面去截圆锥，底面与截面之间的部分叫做<strong>圆台</strong>。圆台也可看作直角梯形绕直角腰旋转而成。' },
        { type: 'keypoint', label: '重点·球', text: '以<strong>半圆的直径所在直线</strong>为旋转轴，半圆面旋转一周形成的旋转体叫做<strong>球体</strong>，简称球。半圆的圆心叫球心，连接球心与球面上任一点的线段叫半径。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">旋转体的生成</text><line x1="95" y1="70" x2="95" y2="240" stroke="#2b5b9e" stroke-width="2" stroke-dasharray="4 3"/><rect x="95" y="80" width="55" height="150" fill="none" stroke="#4a7de0" stroke-width="2"/><ellipse cx="95" cy="80" rx="55" ry="12" fill="none" stroke="#2b5b9e" stroke-width="2"/><ellipse cx="95" cy="230" rx="55" ry="12" fill="none" stroke="#2b5b9e" stroke-width="2"/><line x1="40" y1="80" x2="40" y2="230" stroke="#2b5b9e" stroke-width="2"/><line x1="150" y1="80" x2="150" y2="230" stroke="#2b5b9e" stroke-width="2"/><text x="95" y="262" font-size="13" fill="#33536e" text-anchor="middle">圆柱（矩形旋转）</text><line x1="270" y1="70" x2="270" y2="240" stroke="#2b5b9e" stroke-width="2" stroke-dasharray="4 3"/><line x1="270" y1="80" x2="270" y2="230" stroke="#4a7de0" stroke-width="2"/><line x1="270" y1="230" x2="330" y2="230" stroke="#4a7de0" stroke-width="2"/><line x1="270" y1="80" x2="330" y2="230" stroke="#4a7de0" stroke-width="2"/><ellipse cx="270" cy="230" rx="55" ry="12" fill="none" stroke="#2b5b9e" stroke-width="2"/><line x1="215" y1="230" x2="270" y2="80" stroke="#2b5b9e" stroke-width="2"/><line x1="325" y1="230" x2="270" y2="80" stroke="#2b5b9e" stroke-width="2"/><text x="270" y="262" font-size="13" fill="#33536e" text-anchor="middle">圆锥（直角三角形旋转）</text><line x1="440" y1="70" x2="440" y2="240" stroke="#2b5b9e" stroke-width="2" stroke-dasharray="4 3"/><polygon points="415,150 465,150 470,230 410,230" fill="none" stroke="#4a7de0" stroke-width="2"/><ellipse cx="440" cy="150" rx="25" ry="7" fill="none" stroke="#2b5b9e" stroke-width="2"/><ellipse cx="440" cy="230" rx="60" ry="12" fill="none" stroke="#2b5b9e" stroke-width="2"/><line x1="380" y1="150" x2="380" y2="230" stroke="#2b5b9e" stroke-width="2"/><line x1="500" y1="150" x2="500" y2="230" stroke="#2b5b9e" stroke-width="2"/><text x="440" y="262" font-size="13" fill="#33536e" text-anchor="middle">圆台（截圆锥）</text><line x1="600" y1="110" x2="600" y2="210" stroke="#2b5b9e" stroke-width="2" stroke-dasharray="4 3"/><circle cx="600" cy="160" r="40" fill="none" stroke="#2b5b9e" stroke-width="2"/><line x1="560" y1="160" x2="640" y2="160" stroke="#4a7de0" stroke-width="2"/><path d="M 562 160 A 38 38 0 0 0 638 160" fill="none" stroke="#e05d44" stroke-width="1.5"/><text x="600" y="262" font-size="13" fill="#33536e" text-anchor="middle">球（半圆旋转）</text></svg>', caption: '图3　四类旋转体分别由矩形、直角三角形、截圆锥、半圆绕轴旋转生成。' },
        { type: 'table', headers: ['旋转体', '生成图形', '旋转轴'], rows: [['圆柱', '矩形', '矩形的一边所在直线'], ['圆锥', '直角三角形', '一条直角边所在直线'], ['圆台', '直角梯形（或截圆锥）', '直角腰所在直线'], ['球', '半圆', '半圆的直径所在直线']] },
        { type: 'example', label: '例题1', text: '判断下列说法是否正确：以直角三角形斜边所在直线为旋转轴旋转一周，得到的是圆锥。<br><br><strong>解</strong>：错误。圆锥要求以<strong>直角边</strong>所在直线为旋转轴；若以斜边为轴旋转，得到的是两个同底圆锥拼接的组合体，而不是单个圆锥。' },
        { type: 'heading', text: '三、简单组合体' },
        { type: 'paragraph', text: '现实中的许多物体并不是单一的基本几何体，而是由柱、锥、台、球等简单几何体组合或经过挖去、切割而成的，这样的几何体叫做简单组合体。' },
        { type: 'list', items: ['拼接：两个或多个简单几何体叠放相连，如厂房顶', '截去：在简单几何体上切去一部分，如乒乓球台网柱底座', '挖去：在几何体内挖掉一部分，如螺丝帽的孔', '旋转体与多面体混合，如蒙古包（下半圆柱上半圆锥）'] },
        { type: 'example', label: '例题2', text: '一个几何体上部是圆锥、下部是圆柱，且圆锥的底面与圆柱的上底面重合，这是什么几何体？<br><br><strong>解</strong>：这是典型的<strong>简单组合体</strong>，由圆锥与圆柱拼接而成，常用于粮囤、帐篷的几何模型。其表面由两个底面圆、圆柱侧面和圆锥侧面组成。' },
        { type: 'warn', label: '易错', text: '两类常见混淆：①<strong>棱柱与棱锥的底面数量</strong>，棱柱有两个平行底面，棱锥只有一个底面；②<strong>棱台必须由截棱锥得到</strong>，若两个底面不平行或侧棱延长不交于一点，则不是棱台。旋转体要分清是绕哪条边旋转。' },
        { type: 'tip', label: '记忆', text: '判断几何体先看“<strong>平面围成还是旋转生成</strong>”：平面多边形围成的是多面体（柱、锥、台），绕轴旋转的是旋转体（圆柱、圆锥、圆台、球）。棱台记住“<strong>截棱锥</strong>”三字，圆台记住“<strong>截圆锥</strong>”三字。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['多面体：棱柱（两底平行）、棱锥（一面多边形+共顶点三角面）、棱台（截棱锥）', '旋转体：圆柱（矩形旋）、圆锥（直角三角旋）、圆台（截圆锥）、球（半圆旋）', '棱柱两底平行、侧棱平行且相等', '棱台两底平行、侧棱延长共点', '简单组合体由基本几何体拼接、截去或挖去而成'] }
      ],
      exercises: [
        { type: 'choice', question: '棱台是由什么方式得到的？', options: ['用平行于棱锥底面的平面去截棱锥', '将两个棱锥拼接', '将圆柱斜切', '将球体截取'], answer: '用平行于棱锥底面的平面去截棱锥', explanation: '棱台的定义为：用平行于棱锥底面的平面去截棱锥，底面与截面之间的部分叫做棱台。两个棱锥拼接、将圆柱斜切、将球体截取都不符合棱台“由截棱锥得到”的生成方式。' },
        { type: 'fill', question: '以半圆的直径所在直线为旋转轴，半圆面旋转一周形成的旋转体叫做 ____。', answer: '球', explanation: '球的定义：以半圆的直径所在直线为旋转轴，半圆面旋转一周形成的旋转体叫做球体，简称球。旋转轴是半圆的直径所在直线，旋转的是半圆面而非整圆。故填“球”。' },
        { type: 'choice', question: '以矩形的一边所在直线为旋转轴，其余三边旋转形成的旋转体是？', options: ['圆锥', '圆柱', '圆台', '球'], answer: '圆柱', explanation: '圆柱的定义是：以矩形的一边所在直线为旋转轴，其余三边旋转形成的面所围成的旋转体。圆锥由直角三角形绕直角边旋转得到，圆台由平行于圆锥底面的平面截圆锥得到，球由半圆绕直径旋转得到。' },
        { type: 'fill', question: '有两个面互相平行，其余各面都是四边形，且每相邻两个四边形的公共边互相平行的多面体叫做 ____。', answer: '棱柱', explanation: '棱柱的定义：有两个面互相平行，其余各面都是四边形，且每相邻两个四边形的公共边都互相平行的多面体叫做棱柱。这两个互相平行的面称为底面，其余各面称为侧面，侧面的公共边称为侧棱。' },
        { type: 'choice', question: '简单组合体是指？', options: ['由简单几何体组合或拼接而成的几何体', '单个棱柱', '单个球体', '一个平面图形'], answer: '由简单几何体组合或拼接而成的几何体', explanation: '简单组合体是由柱、锥、台、球等简单几何体通过拼接、挖去或组合等方式构成的几何体。单个棱柱、单个球体只是简单几何体本身，平面图形不是立体图形，均不能称为简单组合体。' }
      ]
    }

  );
})();
