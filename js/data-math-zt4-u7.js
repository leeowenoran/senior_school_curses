/* ============================================================
 * 高三数学 · 总复习专题四（立体几何）· 第7单元（综合收尾）
 * 第1课时：空间角与距离（向量法）
 * 第2课时：核心思想方法 + 题型与备考策略
 * 数据注入：gzGetVolume('math', 'zt4').points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt4');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 空间角与距离（向量法） ---------------- */
    {
      id: 'zt4-u7-l1',
      name: '空间角与距离（向量法）',
      chapter: '立体几何复习 · 八 空间角与距离',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、用向量法处理空间角与距离' },
        { type: 'paragraph', text: '空间角（异面直线所成角、线面角、二面角）与空间距离，若用纯几何法常需作大量辅助线，难以稳定得分。向量法把空间图形放到直角坐标系中，用坐标与向量运算代替逻辑推理，流程固定、不易出错，是高考解答题求角的主流方法。' },
        { type: 'keypoint', label: '重点·通法思路', text: '向量法处理空间角与距离的核心流程是：<strong>建系 → 求坐标 → 求向量 → 代公式</strong>。其中建系最关键，要尽量让更多顶点落在坐标轴上或坐标平面内，使计算最简便。' },
        { type: 'list', items: ['第一步：建立合适的空间直角坐标系，确定原点与坐标轴方向', '第二步：写出相关顶点的坐标，得到所需方向向量与法向量', '第三步：代入公式计算数量积、模长，进而求角或距离', '第四步：根据图形判断符号与范围，写出最终结论'] },
        { type: 'heading', text: '二、异面直线所成角' },
        { type: 'paragraph', text: '异面直线不相交，求所成角时通常分别在两条直线上取方向向量 v1、v2。两向量夹角可能是钝角，而异面直线所成角规定取锐角或直角，因此要用绝对值，并把范围限制在 0<θ≤90°。' },
        { type: 'keypoint', label: '重点·公式', text: '设两直线方向向量为 v1、v2，则异面直线所成角 θ 满足 <strong>cosθ = |v1·v2| / (|v1|·|v2|)</strong>，取值范围 <strong>0<θ≤90°</strong>。绝对值保证结果落在锐角或直角范围。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图1　异面直线所成角：平移其中一条使相交</text><line x1="120" y1="240" x2="300" y2="90" stroke="#2b5b9e" stroke-width="3"/><text x="300" y="86" font-size="16" fill="#2b5b9e">a</text><line x1="380" y1="240" x2="560" y2="150" stroke="#2b5b9e" stroke-width="3"/><text x="566" y="148" font-size="16" fill="#2b5b9e">b</text><line x1="380" y1="240" x2="560" y2="90" stroke="#e05d44" stroke-width="2.5" stroke-dasharray="7 5"/><text x="566" y="86" font-size="16" fill="#c0392b">a′</text><path d="M 380 240 L 455 200 A 30 30 0 0 1 455 220 Z" fill="#fff" stroke="#33536e" stroke-width="1.5"/><text x="412" y="218" font-size="16" fill="#33536e">θ</text><text x="340" y="282" font-size="15" fill="#33536e" text-anchor="middle">cosθ = |v1·v2| / (|v1|·|v2|)，范围 0&lt;θ≤90°</text></svg>', caption: '图1　异面直线所成角：把直线 a 平移得到 a′ 与 b 相交，夹角 θ 即为所求，用方向向量数量积的绝对值求余弦。' },
        { type: 'list', items: ['取方向向量前先建系，使向量坐标尽可能简单', '若算得 cosθ 为负，取绝对值后对应锐角', '结果必须落在 0<θ≤90°，不能出现钝角'] },
        { type: 'heading', text: '三、直线与平面所成角' },
        { type: 'paragraph', text: '直线与平面所成角，是直线与其在平面内的射影所成的锐角或直角。设直线方向向量为 v，平面法向量为 n，则直线与法向量的夹角的余角恰好是线面角，因此公式中出现的是正弦。' },
        { type: 'keypoint', label: '重点·公式', text: '设直线方向向量为 v，平面法向量为 n，则线面角 θ 满足 <strong>sinθ = |v·n| / (|v|·|n|)</strong>，取值范围 <strong>0≤θ≤90°</strong>。注意与异面直线角的公式区分：线面角用正弦，异面直线角用余弦。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图2　线面角：直线与其在平面内射影的夹角</text><polygon points="80,240 600,240 540,200 20,200" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="560" y="262" font-size="15" fill="#33536e">平面 α</text><line x1="300" y1="90" x2="320" y2="220" stroke="#2b5b9e" stroke-width="3"/><text x="290" y="86" font-size="16" fill="#2b5b9e">l</text><line x1="320" y1="220" x2="320" y2="200" stroke="#5a7a2a" stroke-width="2" stroke-dasharray="5 4"/><text x="330" y="216" font-size="14" fill="#5a7a2a">P</text><line x1="120" y1="220" x2="320" y2="220" stroke="#e05d44" stroke-width="2.5"/><text x="195" y="240" font-size="15" fill="#c0392b">射影</text><path d="M 320 220 L 270 220 A 50 50 0 0 0 298 172 Z" fill="#fff" stroke="#33536e" stroke-width="1.5"/><text x="250" y="200" font-size="16" fill="#33536e">θ</text><text x="340" y="282" font-size="15" fill="#33536e" text-anchor="middle">sinθ = |v·n| / (|v|·|n|)，v为方向向量，n为法向量，0≤θ≤90°</text></svg>', caption: '图2　线面角：直线 l 与其在平面 α 内的射影所夹的 θ 即为线面角，满足 sinθ = |v·n| / (|v|·|n|)。' },
        { type: 'heading', text: '四、二面角' },
        { type: 'paragraph', text: '二面角由两个半平面组成，其平面角的范围是 0° 到 180°。用两个半平面的法向量 n1、n2 计算时，公式前带正负号，具体取正还是取负，必须结合图形判断该二面角是锐二面角还是钝二面角。' },
        { type: 'keypoint', label: '重点·公式与判断', text: '设两半平面法向量为 n1、n2，则二面角 θ 满足 <strong>cosθ = ±(n1·n2) / (|n1|·|n2|)</strong>，取值范围 <strong>0≤θ≤180°</strong>。法向量方向会影响结果的符号，必须根据图形判断是锐二面角还是钝二面角后再定正负。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图3　二面角（法向量 n1、n2）与点到平面距离</text><line x1="340" y1="60" x2="340" y2="300" stroke="#33536e" stroke-width="3"/><text x="348" y="300" font-size="15" fill="#33536e">棱 l</text><polygon points="340,60 120,180 120,300 340,300" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><polygon points="340,60 560,180 560,300 340,300" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2"/><line x1="340" y1="180" x2="250" y2="140" stroke="#e05d44" stroke-width="2.5"/><circle cx="250" cy="140" r="4" fill="#e05d44"/><text x="218" y="135" font-size="15" fill="#c0392b">n1</text><line x1="340" y1="180" x2="430" y2="140" stroke="#7a5aa0" stroke-width="2.5"/><circle cx="430" cy="140" r="4" fill="#7a5aa0"/><text x="438" y="135" font-size="15" fill="#7a5aa0">n2</text><circle cx="180" cy="110" r="5" fill="#c0392b"/><text x="150" y="106" font-size="15" fill="#c0392b">P</text><line x1="180" y1="110" x2="180" y2="240" stroke="#5a7a2a" stroke-width="2" stroke-dasharray="5 4"/><circle cx="180" cy="240" r="4" fill="#5a7a2a"/><text x="190" y="244" font-size="14" fill="#5a7a2a">A</text><text x="160" y="180" font-size="13" fill="#5a7a2a" text-anchor="middle">d</text><text x="340" y="314" font-size="15" fill="#33536e" text-anchor="middle">二面角 cosθ = ±(n1·n2)/(|n1|·|n2|)，0≤θ≤180°；点到面 d = |AP·n|/|n|</text></svg>', caption: '图3　二面角由两个半平面的法向量 n1、n2 计算；空间点 P 到平面的距离 d 等于 AP 在法向量 n 上的投影长度。' },
        { type: 'warn', label: '易错', text: '求二面角时，<strong>法向量的方向会直接改变 cosθ 的正负号</strong>。若两法向量都指向二面角内部（或都指向外部），得到的是二面角的补角余弦。务必结合图形判断二面角是锐角还是钝角，再决定取正号还是负号。' },
        { type: 'heading', text: '五、空间距离' },
        { type: 'paragraph', text: '空间中的距离包括两点距离、点到直线距离、点到平面距离、线到面距离、面到面距离等。其中点到平面的距离是最基本、最常用的一类，其余多数距离都能转化为点到平面的距离。' },
        { type: 'keypoint', label: '重点·点到平面距离', text: '设 A 为平面上一点，P 为空间一点，n 为平面的法向量，则点 P 到该平面的距离 <strong>d = |AP·n| / |n|</strong>。它等于向量 AP 在法向量 n 方向上的投影长度（取绝对值）。' },
        { type: 'example', label: '例题1', text: '在长方体 ABCD-A₁B₁C₁D₁ 中，AB=4，AD=3，AA₁=2。以 D 为原点，DA、DC、DD₁ 分别为 x、y、z 轴建系。<br><strong>求异面直线 A₁B 与 CC₁ 所成角。</strong><br><br><strong>解</strong>：各点坐标 A(3,0,0)、B(3,4,0)、A₁(3,0,2)、C(0,4,0)、C₁(0,4,2)。<br>方向向量 v1 = A₁B = (0,4,-2)，v2 = CC₁ = (0,0,2)。<br>v1·v2 = 0×0 + 4×0 + (-2)×2 = -4；|v1| = √(0+16+4) = √20 = 2√5，|v2| = 2。<br>cosθ = |v1·v2|/(|v1||v2|) = 4/(2√5×2) = 1/√5。<br>故异面直线所成角 θ 满足 cosθ = 1/√5，θ = arccos(1/√5)。' },
        { type: 'example', label: '例题2', text: '接上题，求直线 A₁B 与平面 ABCD 所成角。<br><br><strong>解</strong>：平面 ABCD（即 z=0）的法向量 n = (0,0,1)。直线 A₁B 的方向向量 v = (0,4,-2)。<br>|v·n| = |(0,4,-2)·the not needed| = |-2| = 2，|v| = 2√5，|n| = 1。<br>sinθ = |v·n|/(|v||n|) = 2/(2√5×1) = 1/√5。<br>故线面角 θ 满足 sinθ = 1/√5。' },
        { type: 'example', label: '例题3', text: '接上题，求二面角 A₁-BD-C 的大小（含锐钝判断）。<br><br><strong>解</strong>：平面 BCD（即 z=0）法向量 n1 = (0,0,1)。<br>平面 A₁BD 中，A₁(3,0,2)、B(3,4,0)、D(0,0,0)，向量 DB=(3,4,0)，DA₁=(3,0,2)。<br>设法向量 n2 = (x,y,z)，则 3x+4y=0 且 3x+2z=0，取 x=4 得 n2=(4,-3,-6)。<br>n1·n2 = -6，|n1|=1，|n2|=√(16+9+36)=√61。<br>cosφ = (n1·n2)/(|n1||n2|) = -6/√61。<br>由图形知二面角 A₁-BD-C 为钝二面角，故取 θ = π - arccos(6/√61)，即 cosθ = -6/√61。' },
        { type: 'example', label: '例题4', text: '接上题，求点 C₁(0,4,2) 到平面 A₁BD 的距离。<br><br><strong>解</strong>：平面 A₁BD 的法向量 n2 = (4,-3,-6)，取平面上一点 D(0,0,0)，则向量 DC₁ = (0,4,2)。<br>AP·n 此处为 DC₁·n2 = 0×4 + 4×(-3) + 2×(-6) = -24，|n2| = √61。<br>d = |DC₁·n2| / |n2| = 24/√61。<br>故点 C₁ 到平面 A₁BD 的距离为 24/√61。' },
        { type: 'table', headers: ['类型', '公式', '取值范围', '关键词'], rows: [['异面直线所成角', 'cosθ = |v1·v2|/(|v1||v2|)', '0<θ≤90°', '取绝对值'], ['线面角', 'sinθ = |v·n|/(|v||n|)', '0≤θ≤90°', '正弦、法向量'], ['二面角', 'cosθ = ±(n1·n2)/(|n1||n2|)', '0≤θ≤180°', '判锐钝定符号'], ['点到平面距离', 'd = |AP·n|/|n|', 'd≥0', '投影长度']] },
        { type: 'tip', label: '提示', text: '<strong>建系优先原则</strong>：尽量把底面放在坐标平面、把直角顶点或对称心作为原点，让更多点坐标为 0 或整值。长方体、直三棱柱、正棱锥、四棱锥都是高频建系模型，平时应熟记它们的标准建系方式。' }
      ],
      exercises: [
        { type: 'choice', question: '异面直线所成角 θ 的取值范围是？', options: ['0<θ≤90°', '0≤θ≤90°', '0≤θ≤180°', '0<θ<180°'], answer: '0<θ≤90°', explanation: '异面直线所成角取两直线方向向量夹角的锐角或直角，因此取值范围是 0<θ≤90°。当两方向向量平行时夹角不被包含，最小为正角，最大为直角90°，故正确范围是 0<θ≤90°描述的 0<θ≤90°。' },
        { type: 'choice', question: '直线与平面所成角 θ 的正确公式是？', options: ['cosθ = |v·n|/(|v||n|)', 'sinθ = |v·n|/(|v||n|)', 'tanθ = |v·n|/(|v||n|)', 'cosθ = (v·n)/(|v||n|)'], answer: 'sinθ = |v·n|/(|v||n|)', explanation: '设直线方向向量为 v，平面法向量为 n，直线与平面所成角 θ 满足 sinθ = |v·n|/(|v||n|)，范围 0≤θ≤90°。注意线面角用正弦而非余弦，且要取数量积的绝对值，故正确公式为 sinθ = |v·n|/(|v||n|)。' },
        { type: 'choice', question: '二面角 θ 的取值范围是？', options: ['0<θ≤90°', '0≤θ≤90°', '0≤θ≤180°', '0<θ<180°'], answer: '0≤θ≤180°', explanation: '二面角的平面角可以是锐角、直角或钝角，因此取值范围是 0≤θ≤180°。用公式 cosθ = ±(n1·n2)/(|n1||n2|) 计算时，正负号由图形判断该二面角是锐二面角还是钝二面角后确定。' },
        { type: 'fill', question: '点 P 到平面 α 的距离公式为 d = ____（设 A 为平面上一点，n 为平面法向量）。', answer: '|AP·n|/|n||AP·n| / |n||AP·n|÷|n|', explanation: '设 A 为平面上一点，P 为空间一点，n 为平面的法向量，则点 P 到平面的距离等于向量 AP 在法向量 n 方向上的投影长度，即 d = |AP·n| / |n|。空间中线到面、面到面的距离最终都可转化为点到平面的距离求解。' },
        { type: 'fill', question: '二面角公式 cosθ = ±(n1·n2)/(|n1||n2|) 中的正负号，必须由____判断锐二面角还是钝二面角后确定。', answer: '图形|图形判断|实际二面角|锐钝', explanation: '公式 cosθ = ±(n1·n2)/(|n1||n2|) 给出的是两个法向量夹角的余弦，其符号取决于法向量的取向。实际二面角是锐二面角还是钝二面角，必须结合空间图形（或观察半平面的方位）作出判断，从而决定取正号还是负号。' }
      ]
    },

    /* ---------------- 第2课时 核心思想方法 + 题型与备考策略 ---------------- */
    {
      id: 'zt4-u7-l2',
      name: '核心思想方法 + 题型与备考策略',
      chapter: '立体几何复习 · 九 核心思想 / 十 题型与备考',
      difficulty: '进阶',
      content: [
        { type: 'heading', text: '一、四大核心思想' },
        { type: 'paragraph', text: '立体几何之所以成为高考中得分率较高的板块，根本原因在于方法体系清晰。掌握以下四大核心思想，才能在不同题型中灵活选用合适的解法，而不是死记硬背。' },
        { type: 'table', headers: ['核心思想', '内涵', '典型应用'], rows: [['转化与化归', '空间问题化归为平面问题，几何问题转化为向量', '空间角转化为向量夹角'], ['数形结合', '图形辅助思考，坐标承载运算', '建系后坐标化计算'], ['割补法', '不规则体积等于规则几何体加减', '求不规则多面体体积'], ['等体积法', '换不同底面列方程求高', '求点到平面、线面距离']] },
        { type: 'list', items: ['转化与化归是总纲：把陌生空间关系降维到熟悉平面', '数形结合保证不丢几何直观，坐标承载精确运算', '割补与等体积是求体积、求距离的两条互补捷径'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图1　四大核心思想关系</text><circle cx="340" cy="160" r="46" fill="#2b5b9e"/><text x="340" y="155" font-size="15" fill="#fff" text-anchor="middle">立体</text><text x="340" y="173" font-size="15" fill="#fff" text-anchor="middle">几何</text><g stroke="#4a7de0" stroke-width="2.5"><line x1="340" y1="160" x2="130" y2="80"/><line x1="340" y1="160" x2="550" y2="80"/><line x1="340" y1="160" x2="130" y2="240"/><line x1="340" y1="160" x2="550" y2="240"/></g><g font-size="15" fill="#2b5b9e" text-anchor="middle"><rect x="70" y="62" width="120" height="34" rx="6" fill="#cfe0f7"/><text x="130" y="84">转化与化归</text><rect x="450" y="62" width="120" height="34" rx="6" fill="#cfe0f7"/><text x="510" y="84">数形结合</text><rect x="70" y="222" width="120" height="34" rx="6" fill="#cfe0f7"/><text x="130" y="244">割补法</text><rect x="450" y="222" width="120" height="34" rx="6" fill="#cfe0f7"/><text x="510" y="244">等体积法</text></g></svg>', caption: '图1　四大核心思想围绕立体几何展开：转化与化归、数形结合、割补法、等体积法相互配合。' },
        { type: 'heading', text: '二、几何法与建系法的选择原则' },
        { type: 'paragraph', text: '面对一道立体几何题，首先要决定用几何法还是向量法。两种方法的思维路径不同：几何法靠定理推演，向量法靠坐标运算。考场上应以稳妥、不易错为准来选择。' },
        { type: 'keypoint', label: '重点·选择原则', text: '<strong>几何法重逻辑链</strong>，依赖空间想象与定理（平行、垂直、余弦定理）书写严谨证明；<strong>建系法重运算量</strong>，把几何问题转为代数计算，流程固定但计算量可能偏大。一般证明题用几何法，求角求距离用向量法。' },
        { type: 'list', items: ['证明平行或垂直：优先几何法，逻辑清楚、书写简洁', '求空间角或距离：优先向量法，避免作辅助线', '若图形易建系且坐标整齐，全场可用向量法以保证稳定', '时间紧张时，向量法流程固定更不易卡壳'] },
        { type: 'heading', text: '三、常考题型梳理' },
        { type: 'paragraph', text: '立体几何的考查分为小题与解答题两类。小题以三视图识别、位置关系真假判断、空间角与距离、多面体与球（外接、内切）、截面为主；解答题（约12分）固定为两问结构。' },
        { type: 'keypoint', label: '重点·解答题结构', text: '解答题（约第18题，12分）第(1)问通常是<strong>平行或垂直证明</strong>（几何法为主），第(2)问通常是<strong>空间角计算</strong>（向量法为主）。少数年份两问均为证明，或第(2)问改为求体积、距离。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图2　解答题（约12分）两问结构</text><rect x="60" y="90" width="240" height="100" rx="10" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="180" y="125" font-size="16" fill="#2b5b9e" text-anchor="middle">第(1)问</text><text x="180" y="152" font-size="14" fill="#33536e" text-anchor="middle">平行或垂直证明</text><text x="180" y="174" font-size="13" fill="#5a7a2a" text-anchor="middle">几何法为主</text><rect x="380" y="90" width="240" height="100" rx="10" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2"/><text x="500" y="125" font-size="16" fill="#2b5b9e" text-anchor="middle">第(2)问</text><text x="500" y="152" font-size="14" fill="#33536e" text-anchor="middle">空间角计算</text><text x="500" y="174" font-size="13" fill="#5a7a2a" text-anchor="middle">向量法为主</text><line x1="300" y1="140" x2="380" y2="140" stroke="#e05d44" stroke-width="2.5"/><polygon points="380,140 366,134 366,146" fill="#e05d44"/><text x="340" y="125" font-size="13" fill="#c0392b" text-anchor="middle">承接</text></svg>', caption: '图2　解答题两问结构：第(1)问证明位置关系（几何法），第(2)问求空间角（向量法）。' },
        { type: 'warn', label: '易错', text: '<strong>证明题最忌跳步</strong>。使用定理（如线面平行判定、面面垂直判定）时必须把前提条件逐条写清：线在面内、线不在面内、线线平行等缺一不可。跳步是证明题失分的第一来源，应像写数学推导一样完整。' },
        { type: 'heading', text: '四、备考三阶段策略' },
        { type: 'paragraph', text: '立体几何总分值高、性价比突出，需要分阶段系统突破。一轮打基础、二轮攻题型、三轮练速度，配合日常的建系套路积累，才能保证解答题稳定拿高分。' },
        { type: 'table', headers: ['阶段', '目标', '重点任务'], rows: [['一轮', '全面掌握', '熟记公理定理与建系流程，过手所有基础模型'], ['二轮', '突破题型', '主攻证明题与求角题两类核心解答题'], ['三轮', '限时提速', '限时训练，确保第18题稳拿高分']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图3　知识体系总览与备考三阶段</text><g font-size="13" fill="#fff" text-anchor="middle"><rect x="40" y="60" width="120" height="34" rx="6" fill="#4a7de0"/><text x="100" y="82">空间几何体</text><rect x="180" y="60" width="120" height="34" rx="6" fill="#4a7de0"/><text x="240" y="82">点线面关系</text><rect x="320" y="60" width="130" height="34" rx="6" fill="#7a5aa0"/><text x="385" y="82">几何法/向量法</text><rect x="470" y="60" width="130" height="34" rx="6" fill="#5a7a2a"/><text x="535" y="82">角与距离</text></g><g stroke="#33536e" stroke-width="2"><line x1="160" y1="77" x2="180" y2="77"/><line x1="300" y1="77" x2="320" y2="77"/><line x1="450" y1="77" x2="470" y2="77"/></g><g font-size="14" fill="#2b5b9e"><rect x="60" y="150" width="160" height="120" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="140" y="180" text-anchor="middle" font-weight="bold">一轮</text><text x="140" y="206" text-anchor="middle" font-size="13" fill="#33536e">全面掌握公理定理</text><text x="140" y="228" text-anchor="middle" font-size="13" fill="#33536e">与建系流程</text><rect x="260" y="150" width="160" height="120" rx="8" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2"/><text x="340" y="180" text-anchor="middle" font-weight="bold">二轮</text><text x="340" y="206" text-anchor="middle" font-size="13" fill="#33536e">突破两类核心题型</text><text x="340" y="228" text-anchor="middle" font-size="13" fill="#33536e">证明与求角</text><rect x="460" y="150" width="160" height="120" rx="8" fill="#f3e6ef" stroke="#7a5aa0" stroke-width="2"/><text x="540" y="180" text-anchor="middle" font-weight="bold">三轮</text><text x="540" y="206" text-anchor="middle" font-size="13" fill="#33536e">限时训练稳拿解答题</text><text x="540" y="228" text-anchor="middle" font-size="13" fill="#33536e">约第18题高分</text></g></svg>', caption: '图3　知识体系由空间几何体到角与距离层层递进；备考分一轮、二轮、三轮三阶段推进。' },
        { type: 'heading', text: '五、核心提醒' },
        { type: 'keypoint', label: '重点·得分策略', text: '立体几何是高考中<strong>得分率较高</strong>的板块，方法体系清晰、套路固定。向量法流程为「建系 → 求坐标 → 求法向量 → 代公式」，务必熟练掌握；几何证明则要写清条件、避免跳步。日常应熟悉长方体、三棱柱、四棱锥、正棱锥等常见几何体的建系套路。' },
        { type: 'tip', label: '提示', text: '<strong>考场节奏</strong>：拿到解答题先判第(1)(2)问分别用什么法。若第(1)问用几何法、第(2)问用向量法，建系应尽可能让第(1)问已证的关系服务于第(2)问的坐标，减少重复计算。' },
        { type: 'example', label: '综合例题', text: '四棱锥 P-ABCD 中，底面 ABCD 为正方形，PA⊥底面，AB=2，PA=2。以 A 为原点，AB、AD、AP 分别为 x、y、z 轴建系。<br><strong>求二面角 B-PC-D 的大小。</strong><br><br><strong>解（向量法完整脉络）</strong>：<br>① 建系：A(0,0,0)，B(2,0,0)，C(2,2,0)，D(0,2,0)，P(0,0,2)。<br>② 坐标与向量：CB=(0,-2,0)，CP=(-2,-2,2)；DC=(2,0,0)，DP=(0,-2,2)。<br>③ 法向量：平面 PBC 法向量 n1 满足 n1⊥CB、n1⊥CP，取 n1=(1,0,1)；平面 PDC 法向量 n2 满足 n2⊥DC、n2⊥DP，取 n2=(0,1,1)。<br>④ 代公式：n1·n2=1，|n1|=√2，|n2|=√2，cosφ=1/2，φ=60°。由图形该二面角为锐二面角，故二面角大小为 60°。' },
        { type: 'warn', label: '易错清单', text: '回顾常见失分点：①<strong>法向量方向</strong>取错导致二面角符号反了；②<strong>二面角锐钝判断</strong>漏写，直接给补角；③<strong>证明跳步</strong>被扣过程分；④线面角误用余弦公式；⑤建系原点或坐标轴选错使坐标混乱。考前对照此清单逐一排查。' }
      ],
      exercises: [
        { type: 'choice', question: '关于几何法与向量法，下列说法正确的是？', options: ['几何法重运算量，向量法重逻辑链', '几何法重逻辑链，向量法重运算量', '两种方法完全相同可以混用', '向量法无法求二面角'], answer: '几何法重逻辑链，向量法重运算量', explanation: '几何法依赖空间想象与定理推演，重在清晰的逻辑链；向量法（建系）把几何问题转化为坐标运算，重在固定的代数计算流程。考场上应以稳妥不易错为原则选择方法，两种思路互补而非对立。' },
        { type: 'choice', question: '高考立体几何解答题（约12分）第(1)问通常考查？', options: ['空间角计算', '平行或垂直证明', '体积计算', '外接球半径'], answer: '平行或垂直证明', explanation: '高考立体几何解答题一般设置两问，第(1)问以平行或垂直的位置关系证明为主，常用几何法书写逻辑链；第(2)问则转向空间角（二面角、线面角等）的计算，多用向量法。证明题须写清条件避免跳步失分。' },
        { type: 'choice', question: '求不规则几何体体积，常用下列哪一种核心思想？', options: ['割补法化为规则体加减', '直接套用球体积公式', '仅凭三视图估算', '等体积法求角度'], answer: '割补法化为规则体加减', explanation: '对于不规则多面体，常采用割补法，将其分割或补形成长方体、棱柱、棱锥等规则几何体，再用规则体体积相加减得到原体积。等体积法主要用于求距离（不同底面列方程），而非直接求体积；球公式仅适用于球体。' },
        { type: 'fill', question: '立体几何四大核心思想包括：转化与化归、数形结合、割补法和____。', answer: '等体积法', explanation: '立体几何四大核心思想为：转化与化归（空间问题化归为平面、几何问题转化为向量）、数形结合（图形辅助、坐标承载）、割补法（不规则体积等于规则体加减）、等体积法（换不同底面列方程求高或距离）。' },
        { type: 'fill', question: '向量法标准流程为：建系 → 求坐标 → 求法向量 → ____。', answer: '代公式|代入公式|套公式', explanation: '向量法求解空间角与距离的固定流程是：建立空间直角坐标系，写出相关点坐标，求出所需方向向量与法向量，最后代入对应公式（如 cosθ、sinθ、d 的表达式）计算。熟练掌握这一流程可稳定拿分。' }
      ]
    }

  );
})();
