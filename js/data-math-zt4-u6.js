/* ============================================================
 * 高考数学复习专题 · 立体几何 · 第6单元
 * 第1课时：空间向量基本概念 + 常用结论
 * 第2课时：建系与坐标运算（向量法流程）
 * 数据注入：gzGetVolume('math', 'zt4').points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt4');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 空间向量基本概念 + 常用结论 ---------------- */
    {
      id: 'zt4-u6-l1',
      name: '空间向量概念与常用结论',
      chapter: '立体几何复习 · 七 空间向量（概念·结论）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、方向向量与法向量' },
        { type: 'paragraph', text: '空间向量是把几何问题转化为代数运算的重要工具。在立体几何中，我们不需要直接处理抽象的线面关系，而是用向量的平行、垂直与数量积来刻画位置，从而把证明题转化为计算题。本章先掌握两个核心概念：方向向量与法向量。' },
        { type: 'keypoint', label: '重点·方向向量', text: '与直线 l 平行的<strong>非零向量</strong>叫做直线 l 的<strong>方向向量</strong>，记作 v。一条直线的方向向量不唯一，只要与 l 平行且不为零即可；同一条直线的所有方向向量互相平行。' },
        { type: 'paragraph', text: '方向向量的作用是用一个向量代表整条直线的方向。已知方向向量 v，就相当于知道了直线朝哪个方向延伸，后续判定两直线平行或垂直，只需比较它们的方向向量。' },
        { type: 'keypoint', label: '重点·法向量', text: '与平面 α 垂直的<strong>非零向量</strong>叫做平面 α 的<strong>法向量</strong>，记作 n。一个平面的法向量也不唯一，所有法向量互相平行；法向量既垂直于平面，也垂直于平面内每一条线。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图1 直线的方向向量</text><line x1="80" y1="190" x2="600" y2="190" stroke="#4a7de0" stroke-width="3"/><polygon points="600,190 588,184 588,196" fill="#4a7de0"/><polygon points="80,190 92,184 92,196" fill="#4a7de0"/><text x="320" y="178" font-size="16" fill="#2b5b9e">直线 l</text><line x1="200" y1="110" x2="400" y2="110" stroke="#e05d44" stroke-width="3"/><polygon points="400,110 388,104 388,116" fill="#e05d44"/><text x="278" y="98" font-size="16" fill="#c0392b">方向向量 v</text><text x="500" y="150" font-size="15" fill="#33536e">v ∥ l</text></svg>', caption: '图1 直线的方向向量：与直线平行的非零向量 v 代表直线的方向。' },
        { type: 'paragraph', text: '法向量是处理平面问题的钥匙。一旦求出平面的法向量 n，平面的朝向就被完全确定，线面平行、线面垂直、面面平行、面面垂直都可以用 n 与相应方向向量的关系来表达。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图2 平面的法向量</text><polygon points="160,200 460,140 560,230 260,290" fill="#cfe0f7" stroke="#4a7de0" stroke-width="3"/><text x="360" y="200" font-size="16" fill="#2b5b9e">平面 α</text><line x1="360" y1="170" x2="360" y2="70" stroke="#e05d44" stroke-width="3"/><polygon points="360,70 354,84 366,84" fill="#e05d44"/><text x="372" y="80" font-size="16" fill="#c0392b">法向量 n</text><line x1="340" y1="170" x2="360" y2="170" stroke="#33536e" stroke-width="1.5"/><line x1="340" y1="170" x2="340" y2="190" stroke="#33536e" stroke-width="1.5"/><text x="190" y="112" font-size="15" fill="#33536e">n ⊥ α</text></svg>', caption: '图2 平面的法向量：与平面垂直的非零向量 n 代表平面的朝向。' },
        { type: 'heading', text: '二、平行与垂直的向量判定结论' },
        { type: 'paragraph', text: '下面给出立体几何中六组最常用的判定结论。它们把空间中的位置关系的几何语言，翻译成了向量语言，是向量法解题的公式表，务必记熟。' },
        { type: 'table', headers: ['位置关系', '向量条件', '结论符号'], rows: [['线线平行', '两直线方向向量 v1 ∥ v2', 'l1 ∥ l2 或重合'], ['线面平行', '方向向量 v ⊥ 法向量 n（v·n=0）', 'l ∥ α 或 l ⊂ α'], ['面面平行', '两平面法向量 n1 ∥ n2', 'α ∥ β 或重合'], ['线线垂直', '两直线方向向量 v1·v2 = 0', 'l1 ⊥ l2'], ['线面垂直', '方向向量 v ∥ 法向量 n', 'l ⊥ α'], ['面面垂直', '两平面法向量 n1·n2 = 0', 'α ⊥ β']] },
        { type: 'keypoint', label: '重点·结论解读', text: '记忆诀窍：平行看<strong>向量平行</strong>，垂直看<strong>数量积为零</strong>。线线、面面平行都转化为方向向量或法向量平行；线线、面面垂直都转化为对应向量数量积为零。线面关系则要分清：平行对应 v⊥n，垂直对应 v∥n。' },
        { type: 'paragraph', text: '使用这些结论时，先判断要证的是平行还是垂直，再决定是令向量平行还是比较数量积。例如要证线面垂直，就去验证直线的方向向量与平面法向量是否平行，而不必去验证它与平面内每条线垂直。' },
        { type: 'example', label: '例题1', text: '已知两直线 l1、l2 的方向向量分别为 v1=(2,4,6)，v2=(-1,-2,-3)。判断 l1 与 l2 的位置关系。<br><br><strong>解</strong>：观察两向量，v2 = -1/2 · v1，即 v1 与 v2 成比例，故 v1 ∥ v2。<br>由结论“线线平行 ⇔ 方向向量平行”，得 l1 ∥ l2 或两直线重合。<br><strong>答</strong>：l1 与 l2 平行或重合。' },
        { type: 'example', label: '例题2', text: '已知直线 l 的方向向量 v=(1,1,1)，平面 α 的法向量 n=(1,1,-2)。判断 l 与 α 的关系。<br><br><strong>解</strong>：计算数量积 v·n = 1×1 + 1×1 + 1×(-2) = 1+1-2 = 0。<br>由结论“线面平行 ⇔ v·n=0”，得 l ∥ α 或 l ⊂ α。<br><strong>答</strong>：直线 l 平行于平面 α，或直线 l 在平面 α 内。' },
        { type: 'example', label: '例题3', text: '平面 α 的法向量 n1=(2,-1,3)，平面 β 的法向量 n2=(4,-2,6)。判断 α 与 β 的关系。<br><br><strong>解</strong>：观察得 n2 = 2 · n1，故 n1 ∥ n2。<br>由结论“面面平行 ⇔ 法向量平行”，得 α ∥ β 或 α 与 β 重合。<br><strong>答</strong>：α 与 β 平行或重合。' },
        { type: 'warn', label: '易错', text: '方向向量与法向量都<strong>不唯一</strong>：一条直线的所有方向向量彼此平行，一个平面的所有法向量彼此平行，解题时取最简坐标即可。另外“v·n=0”只能推出 l ∥ α 或 l ⊂ α，<strong>不能直接断言 l ∥ α</strong>，必须排除直线在平面内的情况；若已知 l 不在平面内，才可写 l ∥ α。' },
        { type: 'tip', label: '提示', text: '向量判定结论是一张“公式表”，建议把六组结论抄在小卡片上反复记忆。考试时先写清所选的向量，再套结论，可避免把平行与垂直的条件记反：<strong>平行用向量平行，垂直用数量积为零</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图3 向量法判定平行与垂直对照</text><text x="180" y="74" font-size="15" fill="#33536e" text-anchor="middle">线线平行 ⇔ 方向向量平行</text><line x1="80" y1="120" x2="320" y2="120" stroke="#4a7de0" stroke-width="3"/><polygon points="320,120 308,114 308,126" fill="#4a7de0"/><text x="190" y="108" font-size="14" fill="#2b5b9e">v1</text><line x1="80" y1="180" x2="320" y2="180" stroke="#4a7de0" stroke-width="3"/><polygon points="320,180 308,174 308,186" fill="#4a7de0"/><text x="190" y="168" font-size="14" fill="#2b5b9e">v2</text><text x="500" y="74" font-size="15" fill="#33536e" text-anchor="middle">线面垂直 ⇔ v ∥ n</text><polygon points="400,260 600,210 640,270 440,320" fill="#cfe0f7" stroke="#4a7de0" stroke-width="3"/><text x="510" y="270" font-size="14" fill="#2b5b9e">平面 α</text><line x1="500" y1="240" x2="500" y2="120" stroke="#e05d44" stroke-width="3"/><polygon points="500,120 494,134 506,134" fill="#e05d44"/><text x="512" y="130" font-size="14" fill="#c0392b">v / n</text></svg>', caption: '图3 左：方向向量同向即线线平行；右：方向向量与法向量同向即线面垂直。' },
        { type: 'list', items: ['方向向量 v：与直线平行的非零向量，代表直线方向', '法向量 n：与平面垂直的非零向量，代表平面朝向', '六组结论：线线、面面平行看向量平行，线线、面面垂直看数量积为零'] },
        { type: 'list', items: ['线面平行 ⇔ v·n = 0（即 v ⊥ n），含 l⊂α 情形', '线面垂直 ⇔ v ∥ n', '两平面垂直 ⇔ n1·n2 = 0'] },
        { type: 'heading', text: '三、本课小结' },
        { type: 'list', items: ['方向向量与法向量是空间向量解题的两个基本工具，均不唯一', '六组判定结论把位置关系翻译成向量关系，是解题公式表', '平行看向量平行，垂直看数量积为零', '线面平行结论含直线在平面内的特殊情形，需留意'] }
      ],
      exercises: [
        { type: 'choice', question: '已知两直线的方向向量 v1 ∥ v2，则这两条直线？', options: ['平行或重合', '一定相交', '一定异面', '一定垂直'], answer: '平行或重合', explanation: '两直线的方向向量互相平行，说明两直线方向相同，在空间中它们要么平行、要么重合，不可能相交或异面。因此由 v1 ∥ v2 可直接得到 l1 与 l2 平行或重合，这是向量法判定线线平行的基本结论。' },
        { type: 'choice', question: '直线 l 的方向向量 v 与平面 α 的法向量 n 满足 v·n = 0，则？', options: ['l ∥ α 或 l ⊂ α', 'l ⊥ α', 'l 与 α 斜交', 'l 与 α 相交但不垂直'], answer: 'l ∥ α 或 l ⊂ α', explanation: '由 v·n = 0 可知直线的方向向量与平面的法向量垂直，这意味着直线的方向平行于平面或在平面的内部。因此直线 l 平行于平面 α 或者直线 l 包含于平面 α 内，不能直接断定二者一定平行，还需排除直线在平面内的情况。' },
        { type: 'choice', question: '两平面 α、β 的法向量分别为 n1、n2，若 n1 ∥ n2，则？', options: ['α ∥ β 或 α 与 β 重合', 'α ⊥ β', 'α 与 β 相交', '无法确定'], answer: 'α ∥ β 或 α 与 β 重合', explanation: '两平面的法向量互相平行，说明两个平面的朝向一致，因此这两个平面互相平行或完全重合。法向量平行是面面平行的充要条件（不考虑重合时即为平行），故由 n1 ∥ n2 可得 α 与 β 平行或重合。' },
        { type: 'fill', question: '若直线 l 的方向向量 v 与平面 α 的法向量 n 满足 v ∥ n，则 l ____ α。', answer: '⊥', explanation: '当直线的方向向量与平面的法向量平行时，直线的方向与平面的垂线方向一致，因此直线垂直于该平面。这是线面垂直的向量判定结论：线面垂直 ⇔ 方向向量与法向量平行，故填垂直符号 ⊥。' },
        { type: 'fill', question: '平面 α 的法向量 n 与直线 l 的方向向量 v 数量积为 0，则 l 与 α 的位置关系是 ____。', answer: '平行或直线在平面内', explanation: 'v·n = 0 表示直线方向向量与平面法向量垂直，即直线方向平行于平面。此时直线可能平行于平面，也可能整条直线都在平面内部。因此结论是 l ∥ α 或 l ⊂ α，答题时需要写出这两种可能情形。' }
      ]
    },

    /* ---------------- 第2课时 建系与坐标运算（向量法流程） ---------------- */
    {
      id: 'zt4-u6-l2',
      name: '建系与坐标运算',
      chapter: '立体几何复习 · 七 空间向量（建系·运算）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、空间直角坐标系的建立' },
        { type: 'paragraph', text: '向量法的第一步是建系：在几何体中选一点为原点，确定三条互相垂直的数轴 x、y、z，使空间中每一点都有唯一坐标。建系是否恰当，直接决定后续计算量的大小。' },
        { type: 'keypoint', label: '重点·建系原则', text: '建系总原则：<strong>尽量让更多的点落在坐标轴上或坐标平面内</strong>，减少未知坐标，使已知量直接成为坐标。原点优先取在顶点、底面中心或对称中心的垂足处，坐标轴尽量与棱、底边重合。' },
        { type: 'list', items: ['长方体、直棱柱：取一个顶点为原点，三条棱分别为 x、y、z 轴', '正四棱锥、正棱锥：底面中心为原点，底边方向为 x、y 轴，高所在直线为 z 轴', '一般棱锥：常把底面放 xy 平面，使底面各点 z=0，减小计算'] },
        { type: 'table', headers: ['几何体', '原点选取', '坐标轴安排'], rows: [['长方体 / 直棱柱', '一个顶点', '三条棱分别为 x、y、z 轴'], ['正四棱锥 / 正棱锥', '底面中心', '底边方向为 x、y 轴，高为 z 轴'], ['一般棱锥', '底面外一点垂足或顶点', '底面置 xy 平面，z 为高']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图1 长方体建系</text><line x1="120" y1="280" x2="360" y2="280" stroke="#e05d44" stroke-width="2.5"/><polygon points="360,280 348,274 348,286" fill="#e05d44"/><text x="370" y="286" font-size="15" fill="#c0392b">x</text><line x1="120" y1="280" x2="60" y2="200" stroke="#5a7a2a" stroke-width="2.5"/><polygon points="60,200 70,210 74,200" fill="#5a7a2a"/><text x="40" y="190" font-size="15" fill="#5a7a2a">y</text><line x1="120" y1="280" x2="120" y2="90" stroke="#7a5aa0" stroke-width="2.5"/><polygon points="120,90 114,104 126,104" fill="#7a5aa0"/><text x="128" y="84" font-size="15" fill="#7a5aa0">z</text><polygon points="120,280 260,240 380,270 240,310" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><polygon points="120,280 120,160 260,120 260,240" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2"/><polygon points="260,240 260,120 380,150 380,270" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><circle cx="190" cy="260" r="4" fill="#2b5b9e"/><text x="200" y="258" font-size="13" fill="#33536e">a</text><circle cx="120" cy="220" r="4" fill="#2b5b9e"/><text x="100" y="214" font-size="13" fill="#33536e">b</text><circle cx="120" cy="200" r="4" fill="#2b5b9e"/><text x="100" y="194" font-size="13" fill="#33536e">c</text><text x="120" y="300" font-size="15" fill="#2b5b9e">O(0,0,0)</text></svg>', caption: '图1 长方体建系：原点在顶点，三条棱为坐标轴，单位点直接标出尺寸。' },
        { type: 'paragraph', text: '建系后，几何体上的已知点坐标大多能直接写出。例如长方体中，若长宽高分别为 a、b、c，则顶点可写为 (0,0,0)、(a,0,0)、(0,b,0)、(0,0,c) 等，未知量仅剩尺寸参数。' },
        { type: 'heading', text: '二、坐标运算公式' },
        { type: 'paragraph', text: '有了坐标，向量的加减、数乘、数量积与模长都能按分量计算，这是向量法取代综合几何推理的核心。' },
        { type: 'keypoint', label: '重点·基本运算', text: '设 v1=(x1,y1,z1)，v2=(x2,y2,z2)。<br>加减：v1 ± v2 = (x1±x2, y1±y2, z1±z2)；<br>数乘：k·v1 = (k·x1, k·y1, k·z1)；<br>数量积：<strong>v1·v2 = x1x2 + y1y2 + z1z2</strong>；<br>模长：<strong>|v1| = √(x1²+y1²+z1²)</strong>。' },
        { type: 'list', items: ['数量积坐标公式不需要夹角，直接分量相乘再求和', '模长公式由数量积推出：|v| = √(v·v)', '两向量垂直 ⇔ 数量积为 0，即 x1x2+y1y2+z1z2=0'] },
        { type: 'example', label: '例题1', text: '在长方体中建系，设 A(0,0,0)，B(2,0,0)，D(0,3,0)，A1(0,0,4)。求向量 AB 与 AD1 的数量积。<br><br><strong>解</strong>：由坐标得 AB = (2,0,0)。D1 的坐标为 (0,3,4)，故 AD1 = (0,3,4)。<br>数量积 AB·AD1 = 2×0 + 0×3 + 0×4 = 0。<br><strong>答</strong>：AB·AD1 = 0，两向量垂直。' },
        { type: 'paragraph', text: '当数量积为零时，不必求夹角即可判断两向量垂直，这正是向量法简洁之处。建系后许多垂直、平行关系都能通过分量运算立刻得到。' },
        { type: 'heading', text: '三、平面法向量的求法' },
        { type: 'paragraph', text: '法向量是向量法证明线面、面面关系的枢纽。求法向量不需要图形直观，只要列方程组解出一个与面内两向量都垂直的向量即可。' },
        { type: 'keypoint', label: '重点·求法向量步骤', text: '设平面 α 内两<strong>不共线</strong>向量 a、b，设法向量 n=(x,y,z)。由 n ⊥ a 且 n ⊥ b 得方程组 n·a=0、n·b=0。两个方程是三元一次齐次组，令某一分量（如 x=1）代入，解出 y、z，即得一个法向量。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图3 法向量求解示意</text><polygon points="150,220 470,160 560,250 240,310" fill="#cfe0f7" stroke="#4a7de0" stroke-width="3"/><text x="360" y="240" font-size="15" fill="#2b5b9e">平面 α</text><line x1="300" y1="250" x2="420" y2="210" stroke="#5a7a2a" stroke-width="3"/><polygon points="420,210 408,204 408,216" fill="#5a7a2a"/><text x="350" y="200" font-size="14" fill="#5a7a2a">a</text><line x1="300" y1="250" x2="360" y2="300" stroke="#7a5aa0" stroke-width="3"/><polygon points="360,300 350,290 360,284" fill="#7a5aa0"/><text x="370" y="312" font-size="14" fill="#7a5aa0">b</text><line x1="300" y1="250" x2="300" y2="110" stroke="#e05d44" stroke-width="3"/><polygon points="300,110 294,124 306,124" fill="#e05d44"/><text x="312" y="120" font-size="15" fill="#c0392b">法向量 n</text><text x="300" y="334" font-size="14" fill="#33536e">n·a = 0，n·b = 0（n ⊥ a 且 n ⊥ b）</text></svg>', caption: '图3 法向量求解：设法向量 n 同时垂直于面内两不共线向量 a、b，列方程组求解。' },
        { type: 'list', items: ['所取两向量必须不共线，否则无法张成整个平面', '法向量乘以非零常数仍是法向量，答案不唯一', '令 x=1（或某分量为 1）可快速得到一组解，避免解不定方程组的麻烦'] },
        { type: 'example', label: '例题2', text: '已知平面 α 与向量 a=(1,0,0)、b=(0,1,0) 平行（即 α 为 xy 平面）。求 α 的一个法向量。<br><br><strong>解</strong>：设 n=(x,y,z)。由 n·a=0 得 x=0；由 n·b=0 得 y=0。故 n=(0,0,z)，取 z=1，得 n=(0,0,1)。<br><strong>答</strong>：α 的一个法向量为 (0,0,1)。' },
        { type: 'warn', label: '易错', text: '求法向量时取的两条面内向量必须<strong>不共线</strong>，否则方程组退化，求出的不是平面法向量。另外求出的 n 只是一组解，乘以任意非零常数仍合法，答题时不必纠结所谓标准答案，只要满足 n·a=0 且 n·b=0 即可。' },
        { type: 'tip', label: '提示', text: '熟练后可跳过设 x,y,z 的文字，直接由两向量分量列等式。若面内两向量含零分量，令对应分量取 1 往往最省力。把“建系—求坐标—求向量—代公式”四步走熟，绝大多数立体几何大题都能用向量法通关。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图2 正四棱锥建系</text><line x1="120" y1="250" x2="380" y2="250" stroke="#e05d44" stroke-width="2.5"/><polygon points="380,250 368,244 368,256" fill="#e05d44"/><text x="388" y="256" font-size="15" fill="#c0392b">x</text><line x1="120" y1="250" x2="60" y2="180" stroke="#5a7a2a" stroke-width="2.5"/><polygon points="60,180 70,190 74,180" fill="#5a7a2a"/><text x="40" y="172" font-size="15" fill="#5a7a2a">y</text><line x1="120" y1="250" x2="120" y2="80" stroke="#7a5aa0" stroke-width="2.5"/><polygon points="120,80 114,94 126,94" fill="#7a5aa0"/><text x="128" y="74" font-size="15" fill="#7a5aa0">z</text><polygon points="120,250 250,210 320,250 190,290" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="220" y="270" font-size="14" fill="#2b5b9e">底面</text><line x1="120" y1="250" x2="120" y2="120" stroke="#4a7de0" stroke-width="2.5"/><polygon points="120,120 114,134 126,134" fill="#4a7de0"/><circle cx="120" cy="120" r="5" fill="#e05d44"/><text x="132" y="118" font-size="14" fill="#c0392b">P(0,0,h)</text><text x="120" y="272" font-size="14" fill="#2b5b9e">O(0,0,0)</text></svg>', caption: '图2 正四棱锥建系：原点取底面中心，底边为 x、y 轴，高为 z 轴，顶点在 z 轴上。' },
        { type: 'heading', text: '四、向量法标准流程' },
        { type: 'list', items: ['第一步 建系：选原点与三轴，使多点落轴', '第二步 求坐标：写出各关键点坐标', '第三步 求向量：算方向向量与法向量', '第四步 代公式：用平行或数量积判定关系'] },
        { type: 'paragraph', text: '向量法解题的固定流程可记为“建系 → 求各点坐标 → 求方向向量（或法向量） → 代公式判定”。只要几何体便于建系，这一流程几乎万能，把空间想象转化为代数运算。' },
        { type: 'example', label: '例题3', text: '正四棱锥 P-ABCD，底面中心为 O，取 O 为原点，底面边平行于 x、y 轴，高 OP 为 z 轴，设底面半边长 a，高 h。判断侧棱 PA 是否平行于底面 ABCD。<br><br><strong>解</strong>：建系后 A(a,a,0)，P(0,0,h)，故 PA=(a,a,-h)。底面法向量 n=(0,0,1)。计算 PA·n = -h。<br>若 h≠0，则 PA·n ≠ 0，PA 与底面既不垂直也不平行（斜交）。<br><strong>答</strong>：侧棱 PA 不平行于底面，而是与底面斜交。' }
      ],
      exercises: [
        { type: 'choice', question: '在立体几何中建系，为使后续计算简便，通常应当？', options: ['尽量让更多点落在坐标轴上', '原点必须选在体对角线中点', 'z 轴必须竖直向上', '坐标轴可以任意选取'], answer: '尽量让更多点落在坐标轴上', explanation: '建系的核心目标是减少未知坐标、降低计算量。让尽量多的顶点落在坐标轴上或坐标平面内，可以使这些点的坐标直接由已知长度写出，避免引入多余参数。原点位置、坐标轴方向都可以灵活选择，只要三条轴互相垂直即可。' },
        { type: 'choice', question: '已知向量 v1=(1,2,3)，v2=(2,4,6)，则数量积 v1·v2 = ？', options: ['28', '14', '0', '-28'], answer: '28', explanation: '数量积的坐标公式为对应分量相乘再求和，即 v1·v2 = 1×2 + 2×4 + 3×6 = 2 + 8 + 18 = 28。注意逐项相乘后相加，不要漏掉某一项，也不要把平方误算进去。结果为 28，说明两向量不垂直。' },
        { type: 'choice', question: '设 n=(x,y,z) 是平面法向量，若 n 同时垂直于面内向量 a=(1,0,0) 与 b=(0,1,0)，则 n 可取？', options: ['(0,0,1)', '(1,0,0)', '(0,1,0)', '(1,1,0)'], answer: '(0,0,1)', explanation: '法向量 n 须同时垂直于面内两向量 a、b，即 n·a = 0 且 n·b = 0。代入 a=(1,0,0) 得 x=0，代入 b=(0,1,0) 得 y=0，故 n=(0,0,z)。取 z=1 得 n=(0,0,1)，它确实与 a、b 都垂直，是可取的法向量。' },
        { type: 'fill', question: '已知向量 v=(3,4,0)，则其模长 |v| = ____。', answer: '5', explanation: '向量模长公式为 |v| = √(x²+y²+z²)。代入坐标得 |v| = √(3²+4²+0²) = √(9+16) = √25 = 5。模长表示向量的长度，结果必为非负数，这里恰好构成勾股数 3、4、5。' },
        { type: 'fill', question: '用坐标法判断线面平行的标准流程依次是：建系、求各点坐标、求____、代公式。', answer: '方向向量与法向量', explanation: '向量法解题四步为：建系、写出各点坐标、求出所需的方向向量或法向量、最后代入平行或垂直的判定公式。求方向向量与法向量是承上启下的关键一步，没有它们就无法用 v·n 或向量平行来判定位置关系。' }
      ]
    }

  );
})();
