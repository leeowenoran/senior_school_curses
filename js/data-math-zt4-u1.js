/* ============================================================
 * 高三数学 · 高考复习专题 · 立体几何
 * 第1单元（2 课时）：空间几何体（多面体与旋转体）
 * 数据注入：math.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt4');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 考试要求与命题趋势 + 空间几何体（多面体） ---------------- */
    {
      id: 'zt4-u1-l1',
      name: '考试要求与命题趋势 / 空间几何体（多面体）',
      chapter: '立体几何复习 · 一 考试要求与命题趋势 / 二 空间几何体（多面体）',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、考试要求与命题趋势' },
        { type: 'paragraph', text: '立体几何在高考数学中通常占 22 至 27 分，一般由 1 到 2 道小题（选择或填空）和 1 道解答题组成。解答题多以棱柱、棱锥、圆柱、圆锥、球等空间几何体为背景，考查线面平行与垂直的证明，以及空间角、距离的求解。' },
        { type: 'keypoint', label: '重点·课标要求', text: '课标要求：认识柱、锥、台、球的结构特征；会用斜二测画法画直观图；掌握柱、锥、球及简单组合体的表面积与体积公式；理解点、直线、平面之间的位置关系；能<strong>综合法或空间向量法</strong>证明平行与垂直、求空间角与距离。' },
        { type: 'list', items: ['分值稳定：约 22–27 分，含 1–2 道小题加 1 道解答题', '解法趋势：解答题多用空间向量法，建系求方向向量与法向量', '考查重点：平行与垂直的证明、空间角、点到平面的距离'] },
        { type: 'tip', label: '提示', text: '新高考已不要求掌握三视图（大题删去三视图），但小题可能考查空间几何体的基本概念与结构特征。复习时应把精力放在结构特征、表面积体积以及向量法建系上。' },
        { type: 'warn', label: '易错', text: '高频失分提醒：把棱锥误判为棱柱、忽略“侧棱延长交于一点”这一棱台判定依据，都会导致后续证明全盘皆输。读图时要先看清底面形状与顶点位置，再判断几何体类型。' },
        { type: 'heading', text: '二、空间几何体与多面体' },
        { type: 'paragraph', text: '由若干个平面多边形围成的几何体叫做多面体。围成多面体的各个多边形叫做面，相邻面的公共边叫做棱，棱的公共端点叫做顶点。根据围成方式不同，多面体分为棱柱、棱锥和棱台三类。' },
        { type: 'table', headers: ['类型', '定义特征', '关键性质'], rows: [
          ['棱柱', '有两个面互相平行，其余各面都是四边形且每相邻两四边形的公共边互相平行', '侧棱平行且相等；直棱柱侧棱⊥底面；正棱柱底面是正多边形'],
          ['棱锥', '有一个面是多边形，其余各面都是有一个公共顶点的三角形', '正棱锥底面是正多边形，顶点在底面中心正上方，侧棱相等'],
          ['棱台', '用平行于棱锥底面的平面去截棱锥，底面与截面之间的部分', '各侧棱延长后交于一点，是判定棱台的关键依据']
        ] },
        { type: 'keypoint', label: '重点·棱柱', text: '棱柱的两个底面互相平行且全等，所有侧棱<strong>互相平行且长度相等</strong>。侧棱垂直于底面的棱柱叫做直棱柱；底面是正多边形且侧棱垂直底面的直棱柱叫做正棱柱。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><polygon points="405,100 372,156 308,156 275,100 308,44 372,44" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><polygon points="405,200 372,256 308,256 275,200 308,144 372,144" fill="#b8d4f5" stroke="#4a7de0" stroke-width="2.5"/><g stroke="#2b5b9e" stroke-width="2"><line x1="405" y1="100" x2="405" y2="200"/><line x1="372" y1="156" x2="372" y2="256"/><line x1="308" y1="156" x2="308" y2="256"/><line x1="275" y1="100" x2="275" y2="200"/><line x1="308" y1="44" x2="308" y2="144"/><line x1="372" y1="44" x2="372" y2="144"/></g><text x="500" y="120" font-size="15" fill="#33536e">侧棱</text><line x1="405" y1="100" x2="500" y2="118" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="4 3"/><text x="340" y="270" font-size="15" fill="#33536e" text-anchor="middle">六棱柱（轴测图）：各侧棱平行且相等，两底面是全等多边形</text></svg>', caption: '图1　六棱柱：上下底面平行全等，六条侧棱互相平行且长度相等。' },
        { type: 'keypoint', label: '重点·棱锥', text: '棱锥只有一个底面，其余各面是共顶点的三角形。特别地，<strong>正棱锥</strong>的底面是正多边形，顶点在底面中心的正上方，各侧棱相等，各侧面是全等的等腰三角形。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><polygon points="250,210 430,210 430,250 250,250" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="340" y1="230" x2="340" y2="90" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="340,90 250,210 430,210" fill="#dceafb" stroke="#4a7de0" stroke-width="2"/><polygon points="340,90 430,210 430,250" fill="#c4ddf7" stroke="#4a7de0" stroke-width="2"/><line x1="340" y1="230" x2="250" y2="250" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="340" y1="230" x2="430" y2="250" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="4 3"/><circle cx="340" cy="230" r="4" fill="#c0392b"/><text x="350" y="235" font-size="14" fill="#33536e">底面中心</text><text x="300" y="82" font-size="14" fill="#2b5b9e">顶点 P</text><text x="340" y="272" font-size="15" fill="#33536e" text-anchor="middle">正四棱锥：顶点在底面中心正上方，四条侧棱相等</text></svg>', caption: '图2　正四棱锥：顶点在底面正方形中心的正上方，侧棱相等。' },
        { type: 'keypoint', label: '重点·棱台', text: '棱台由棱锥被平行于底面的平面截得，因此它的<strong>各侧棱延长后必交于一点</strong>。反之，若一个多面体的各侧棱延长交于一点，且上下底面平行，则它是棱台。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><polygon points="250,210 430,210 430,250 250,250" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><polygon points="290,150 390,150 390,180 290,180" fill="#dceafb" stroke="#4a7de0" stroke-width="2.5"/><g stroke="#2b5b9e" stroke-width="2" fill="none"><polygon points="290,150 390,150 430,210 250,210"/><polygon points="290,150 390,150 430,250 250,250" stroke="#4a7de0"/></g><line x1="290" y1="150" x2="240" y2="70" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="5 3"/><line x1="390" y1="150" x2="440" y2="70" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="5 3"/><circle cx="340" cy="62" r="4" fill="#c0392b"/><text x="345" y="58" font-size="14" fill="#33536e">侧棱延长交于一点</text><text x="340" y="272" font-size="15" fill="#33536e" text-anchor="middle">棱台：由棱锥被平行于底面的平面截得，各侧棱延长交于一点</text></svg>', caption: '图3　棱台：上下底面平行，四条侧棱延长后交于原棱锥顶点。' },
        { type: 'example', label: '例题1', text: '判断下列说法是否正确，并说明理由。<br>（1）有两个面互相平行，其余各面都是平行四边形的几何体是棱柱；<br>（2）用一个平面去截棱锥，底面与截面之间的部分是棱台。<br><br><strong>解</strong>：（1）<strong>错误</strong>。反例：将两个相同的斜棱柱底面重合拼接，得到的几何体有两个平行面且其余面是平行四边形，但侧棱不都互相平行，不是棱柱。棱柱要求每相邻两四边形的公共边（侧棱）互相平行。<br>（2）<strong>错误</strong>。只有用<strong>平行于底面</strong>的平面去截棱锥，所得部分才是棱台；若截面不平行于底面，则不是棱台。' },
        { type: 'example', label: '例题2', text: '已知正四棱锥 P-ABCD 的底面边长为 4，高为 6，求侧棱长。<br><br><strong>解</strong>：正四棱锥顶点 P 在底面中心 O 的正上方，底面是边长 4 的正方形，故底面对角线的一半为 AO = (4√2)/2 = 2√2。在直角三角形 POA 中，PO = 6，由勾股定理得侧棱长 PA = √(PO² + AO²) = √(36 + 8) = √44 = 2√11。' },
        { type: 'warn', label: '易错', text: '棱台判定易错：必须是“平行于底面的平面”截棱锥所得。若只说“一个平面截棱锥”而未强调平行，则不能判定为棱台。同时，棱台上下底面相似且对应边平行，侧棱延长交于一点。' },
        { type: 'tip', label: '记忆', text: '记忆口诀：棱柱看“侧棱平行且相等”，棱锥看“共顶点三角形”，棱台看“侧棱延长交于一点”。做题时先定性（是什么几何体），再定量（代入公式）。' },
        { type: 'heading', text: '三、本课小结' },
        { type: 'list', items: [
          '分值约 22–27 分，解答题多用空间向量法处理平行、垂直、空间角与距离',
          '多面体三类：棱柱（侧棱平行相等）、棱锥（共顶点三角形）、棱台（侧棱延长交于一点）',
          '正棱柱底面为正多边形且侧棱⊥底面；正棱锥顶点在底面中心正上方',
          '棱台必须由平行于底面的平面截棱锥得到，否则不是棱台',
          '读图先辨几何体类型，再选用对应公式与证明思路'
        ] }
      ],
      exercises: [
        { type: 'choice', question: '关于棱柱，下列说法正确的是？', options: ['棱柱的两个底面可以不平行', '棱柱的所有侧棱互相平行且相等', '棱柱的侧面一定是全等的矩形', '斜棱柱的侧棱长度不全相等'], answer: '棱柱的所有侧棱互相平行且相等', explanation: '根据棱柱定义，棱柱有两个互相平行且全等的底面，其余各面都是四边形且相邻四边形的公共边（侧棱）互相平行，因此所有侧棱平行且长度相等。两个底面必须平行，故 A 错；侧面是平行四边形，未必全等矩形，故 C 错；侧棱长度全部相等，故 D 错。' },
        { type: 'choice', question: '下列命题正确的是？', options: ['用一个平面截棱锥，所得部分是棱台', '棱台的各侧棱延长后交于一点', '棱锥的侧面可以不是三角形', '棱柱的侧面一定是正方形'], answer: '棱台的各侧棱延长后交于一点', explanation: '棱台由平行于棱锥底面的平面截得，其各侧棱延长后必交于原棱锥的顶点，这是棱台的本质特征，故 B 正确。A 缺“平行于底面”条件；棱锥侧面都是共顶点的三角形，C 错；棱柱侧面是平行四边形，未必是正方形，D 错。' },
        { type: 'fill', question: '正四棱锥的顶点在底面的____的正上方，各侧棱____。（填“中心；相等”）', answer: '中心；相等', explanation: '正棱锥的底面是正多边形，其顶点在底面中心的正上方，且所有侧棱长度相等。因此正四棱锥作为正棱锥的一种，顶点在底面正方形中心的正上方，四条侧棱长度相等。这是正棱锥与一般性棱锥的重要区别。' },
        { type: 'choice', question: '下列关于多面体的说法，错误的是？', options: ['棱柱有两个互相平行且全等的底面', '棱锥的侧面都是共顶点的三角形', '棱台的两个底面相似且平行', '棱台是由任意平面截棱锥得到的'], answer: '棱台是由任意平面截棱锥得到的', explanation: '棱台必须由“平行于底面”的平面截棱锥得到，若截面不平行于底面则不是棱台，故 D 说法错误。A、B、C 均符合棱柱、棱锥、棱台的定义与性质，是正确的。因此本题选错误的 D。' },
        { type: 'fill', question: '若一个几何体的各侧棱延长后交于一点，且上下底面平行，则该几何体是____。', answer: '棱台', explanation: '根据棱台的定义与判定，用平行于棱锥底面的平面去截棱锥，底面与截面之间的部分是棱台，其上下底面平行且各侧棱延长后交于一点。反之，若某多面体上下底面平行且各侧棱延长交于一点，则它正是棱台。故填“棱台”。' }
      ]
    },

    /* ---------------- 第2课时 空间几何体（旋转体） ---------------- */
    {
      id: 'zt4-u1-l2',
      name: '空间几何体（旋转体）',
      chapter: '立体几何复习 · 二 空间几何体（旋转体）',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、旋转体及其生成方式' },
        { type: 'paragraph', text: '一条平面图形（或平面曲线）绕一条定直线旋转一周所形成的几何体叫做旋转体，这条定直线叫做旋转轴。常见的旋转体有圆柱、圆锥、圆台和球。' },
        { type: 'keypoint', label: '重点·定义', text: '旋转体都<strong>关于旋转轴对称</strong>。识别旋转体的关键，是弄清“由什么平面图形、绕哪条轴旋转”得到，再据此推导表面积与体积公式。' },
        { type: 'paragraph', text: '这四种旋转体都由平面图形绕定轴旋转一周得到，因此都关于旋转轴对称。掌握“谁绕什么轴旋转”是识别旋转体、推导表面积与体积公式的关键。' },
        { type: 'table', headers: ['旋转体', '生成方式', '关键量及关系'], rows: [
          ['圆柱', '矩形绕其一边所在直线旋转一周', '底面半径 r，母线 l，高 h = l，侧面积 = 2πrl'],
          ['圆锥', '直角三角形绕一条直角边旋转一周', '底面半径 r，高 h，母线 l，满足 l² = r² + h²，侧面积 = πrl'],
          ['圆台', '直角梯形绕垂直于底边的腰旋转一周', '上、下底面半径 r₁、r₂，高 h，母线 l，满足 l² = (r₂−r₁)² + h²'],
          ['球', '半圆绕其直径所在直线旋转一周', '半径 R，表面积 = 4πR²，体积 V = 4/3·πR³']
        ] },
        { type: 'keypoint', label: '重点·圆柱', text: '圆柱由矩形绕一边旋转生成，两个底面是<strong>半径相等且互相平行</strong>的圆，母线（侧面上平行于轴的线段）长度都等于高，即 <strong>l = h</strong>。侧面积 = 2πrl，全面积 = 2πr² + 2πrl，体积 V = πr²h。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><ellipse cx="240" cy="90" rx="70" ry="22" fill="#dceafb" stroke="#4a7de0" stroke-width="2.5"/><line x1="170" y1="90" x2="170" y2="220" stroke="#2b5b9e" stroke-width="2.5"/><line x1="310" y1="90" x2="310" y2="220" stroke="#4a7de0" stroke-width="2.5"/><path d="M170,220 A70,22 0 0 0 310,220" fill="none" stroke="#4a7de0" stroke-width="2.5"/><ellipse cx="240" cy="220" rx="70" ry="22" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="240" y1="90" x2="240" y2="220" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="4 3"/><text x="250" y="160" font-size="15" fill="#c0392b">高 h（母线 l = h）</text><line x1="170" y1="90" x2="310" y2="90" stroke="#5a7a2a" stroke-width="2"/><text x="200" y="82" font-size="14" fill="#5a7a2a">r</text><text x="430" y="150" font-size="15" fill="#33536e">矩形绕其一边旋转</text><text x="430" y="175" font-size="15" fill="#33536e">一周生成圆柱</text><text x="240" y="262" font-size="15" fill="#33536e" text-anchor="middle">圆柱：底面半径 r，高 h，母线 l = h</text></svg>', caption: '图1　圆柱：矩形绕一边旋转，两底面是半径相等的圆。' },
        { type: 'keypoint', label: '重点·圆锥', text: '圆锥由直角三角形绕直角边旋转生成，底面是圆，顶点到底面的垂足是底面圆心，高 h、底面半径 r、母线 l 满足 <strong>l² = r² + h²</strong>。侧面积 = πrl，全面积 = πr² + πrl，体积 V = 1/3·πr²h。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><ellipse cx="260" cy="220" rx="90" ry="26" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="260" y1="220" x2="260" y2="70" stroke="#2b5b9e" stroke-width="2.5"/><path d="M170,220 L260,70 L350,220" fill="none" stroke="#4a7de0" stroke-width="2.5"/><line x1="260" y1="220" x2="350" y2="220" stroke="#e05d44" stroke-width="2"/><text x="300" y="235" font-size="15" fill="#c0392b">底面半径 r</text><line x1="260" y1="70" x2="260" y2="220" stroke="#5a7a2a" stroke-width="2"/><text x="268" y="150" font-size="14" fill="#5a7a2a">高 h</text><line x1="260" y1="70" x2="350" y2="220" stroke="#7a5aa0" stroke-width="2"/><text x="300" y="140" font-size="14" fill="#7a5aa0">母线 l</text><text x="430" y="150" font-size="15" fill="#33536e">直角三角形绕</text><text x="430" y="175" font-size="15" fill="#33536e">直角边旋转</text><text x="430" y="200" font-size="15" fill="#33536e">生成圆锥</text><text x="260" y="262" font-size="15" fill="#33536e" text-anchor="middle">圆锥：l² = r² + h²，侧面积 = π r l</text></svg>', caption: '图2　圆锥：直角三角形绕直角边旋转，母线 l、高 h、半径 r 成勾股关系。' },
        { type: 'keypoint', label: '重点·圆台', text: '圆台可看作直角梯形绕垂直底边的腰旋转生成，也可看作圆锥被平行于底面的平面截去顶部所得。其上下底面半径 r₁、r₂，高 h，母线 l 满足 <strong>l² = (r₂ − r₁)² + h²</strong>。体积 V = 1/3·πh(r₁² + r₁r₂ + r₂²)。' },
        { type: 'warn', label: '易错', text: '圆台母线公式易错：是 l² = (r₂ − r₁)² + h²，而不是 l² = (r₂ + r₁)² + h²。这里取上下底面半径之差的绝对值，因为圆台由大圆锥截去小圆锥得到，母线差对应两底面半径差。' },
        { type: 'keypoint', label: '重点·球', text: '球由半圆绕直径旋转生成，球面上任意一点到球心距离都等于半径 R。球的表面积 = <strong>4πR²</strong>，体积 <strong>V = 4/3·πR³</strong>。截面是圆，球心到截面的距离 d 与截面圆半径 r 满足 r² = R² − d²。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><circle cx="300" cy="150" r="100" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="200" y1="150" x2="400" y2="150" stroke="#2b5b9e" stroke-width="2.5"/><line x1="300" y1="150" x2="400" y2="150" stroke="#e05d44" stroke-width="2"/><text x="338" y="145" font-size="15" fill="#c0392b">半径 R</text><path d="M200,150 A100,100 0 0 1 400,150" fill="#dceafb" stroke="#4a7de0" stroke-width="2"/><text x="430" y="140" font-size="15" fill="#33536e">半圆绕直径</text><text x="430" y="165" font-size="15" fill="#33536e">旋转一周成球</text><text x="300" y="268" font-size="15" fill="#33536e" text-anchor="middle">球：半径 R，表面积 = 4πR²，体积 V = 4/3·πR³</text></svg>', caption: '图3　球：半圆绕直径旋转一周，球面上各点到球心距离均为 R。' },
        { type: 'example', label: '例题1', text: '已知圆锥的底面半径 r = 3，高 h = 4，求母线长 l 与侧面积。<br><br><strong>解</strong>：由 l² = r² + h² 得 l = √(3² + 4²) = √(9 + 16) = √25 = 5。侧面积 = πrl = π × 3 × 5 = 15π。' },
        { type: 'example', label: '例题2', text: '圆台的上底面半径 r₁ = 1，下底面半径 r₂ = 2，高 h = 2，求母线长 l。<br><br><strong>解</strong>：由圆台母线公式 l² = (r₂ − r₁)² + h²，得 l = √((2 − 1)² + 2²) = √(1 + 4) = √5。' },
        { type: 'tip', label: '提示', text: '球的截面圆半径 r、球半径 R、球心到截面距离 d 三者满足 r² = R² − d²（垂径定理在空间的推广）。当截面过球心（d = 0）时截面圆半径最大，等于 R，此时截面为大圆。' },
        { type: 'list', items: [
          '圆柱：侧面积 2πrl，全面积 2πr²+2πrl，体积 πr²h（l = h）',
          '圆锥：侧面积 πrl，体积 1/3·πr²h，l² = r² + h²',
          '圆台：母线 l² = (r₂−r₁)² + h²，体积 1/3·πh(r₁²+r₁r₂+r₂²)',
          '球：表面积 4πR²，体积 4/3·πR³，截面 r² = R² − d²'
        ] },
        { type: 'paragraph', text: '球的截面都是圆。设球半径为 R，截面圆半径为 r，球心到该截面的距离为 d，由直角三角形关系可得 r² + d² = R²，即 r² = R² − d²。距离 d 越大，截面圆越小；d = 0 时截面过球心，得到半径最大的大圆。' },
        { type: 'warn', label: '易错', text: '不要把“母线”与“高”混为一谈。圆柱中母线等于高（l = h）；但圆锥、圆台中母线 l 与高 h 不相等，需用勾股定理 l² = r² + h²（圆锥）或 l² = (r₂−r₁)² + h²（圆台）联系。直接把 l 当 h 是常见失分点。' },
        { type: 'heading', text: '二、本课小结' },
        { type: 'list', items: [
          '旋转体由平面图形绕定轴旋转生成：矩形→圆柱，直角三角形→圆锥，直角梯形→圆台，半圆→球',
          '圆柱 l = h；圆锥 l² = r² + h²；圆台 l² = (r₂−r₁)² + h²',
          '体积：柱 V = S底·h，锥 V = 1/3·S底·h，球 V = 4/3·πR³',
          '球截面：r² = R² − d²，过球心的大圆半径最大等于 R',
          '读题先定几何体与已知量，再代入公式，注意母线与高的区别'
        ] }
      ],
      exercises: [
        { type: 'choice', question: '矩形绕其一边旋转一周得到的几何体是？', options: ['圆柱', '圆锥', '圆台', '球'], answer: '圆柱', explanation: '以矩形的一边所在直线为旋转轴，将矩形旋转一周，所得几何体上下底面是半径相等的圆、侧面是曲面，这正是圆柱的定义。圆锥由直角三角形旋转得到，圆台由直角梯形旋转得到，球由半圆旋转得到，均不符合题意。' },
        { type: 'choice', question: '圆锥的底面半径 r = 3，高 h = 4，则其母线 l 等于？', options: ['5', '7', '12', '25'], answer: '5', explanation: '圆锥的母线 l、底面半径 r、高 h 构成直角三角形，满足 l² = r² + h²。代入 r = 3、h = 4，得 l = √(3² + 4²) = √(9 + 16) = √25 = 5。故母线长为 5。' },
        { type: 'fill', question: '圆台的母线 l、高 h 与上下底面半径 r₁、r₂ 满足关系式 l² = ____。', answer: '(r₂−r₁)² + h²', explanation: '圆台可看作大圆锥截去小圆锥得到，其母线长等于两圆锥母线之差。由勾股关系，圆台母线 l、高 h 与上下底面半径差满足 l² = (r₂ − r₁)² + h²。注意是上下底面半径之差的平方，不是之和，这是解题常用公式。' },
        { type: 'choice', question: '关于球，下列说法正确的是？', options: ['球的截面都是椭圆', '过球心的截面圆半径最大，等于 R', '球的表面积公式是 2πR²', '球的体积公式是 1/3·πR³'], answer: '过球心的截面圆半径最大，等于 R', explanation: '球的任意截面都是圆，当截面过球心时（球心到截面距离 d = 0），截面圆半径 r = √(R² − 0) = R，达到最大，该圆叫大圆，故 B 正确。A 错在截面是圆不是椭圆；C 应为 4πR²；D 应为 4/3·πR³。' },
        { type: 'fill', question: '圆柱底面半径为 2，高为 5，则其体积 V = ____（用 π 表示）。', answer: '20π', explanation: '圆柱的体积公式为 V = πr²h。代入底面半径 r = 2、高 h = 5，得 V = π × 2² × 5 = π × 4 × 5 = 20π。注意圆柱母线等于高，此处高直接取 5 即可，无需另行求母线。' }
      ]
    }

  );
})();
