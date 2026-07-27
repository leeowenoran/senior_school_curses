/* ============================================================
 * 高三数学 · 高考复习专题「三角与向量」· 第4单元（2课时）
 * 第1课时：解三角形
 * 第2课时：三角与向量的综合应用
 * 数据注入：math.zt2.points（由 data-gz.js 末尾 GZ_REVIEW.math 遍历自动注册）
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt2');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 解三角形 ---------------- */
    {
      id: 'zt2-u4-l1',
      name: '解三角形',
      chapter: '三角与向量复习 · 二(八) 解三角形',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、正弦定理' },
        { type: 'paragraph', text: '解三角形是高中三角学的重要应用，研究如何在已知三角形部分边角条件下求出其余元素。正弦定理把三角形的边长与对角正弦值联系起来，并引入外接圆半径 R，是解斜三角形的基础工具。' },
        { type: 'keypoint', label: '重点·正弦定理', text: '在 △ABC 中，各边和它所对角的正弦值的比相等，且都等于外接圆直径 2R，即 <strong>a/sinA = b/sinB = c/sinC = 2R</strong>（R 为 △ABC 外接圆半径）。利用它可由边求角，也可由角求边。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="24" y="32" font-size="17" font-weight="bold" fill="#2b5b9e">图1　正弦定理：a/sinA = b/sinB = c/sinC = 2R</text><circle cx="340" cy="170" r="115" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><polygon points="340,55 245,115 435,115" fill="#fff" stroke="#2b5b9e" stroke-width="2"/><line x1="340" y1="55" x2="340" y2="285" stroke="#c0392b" stroke-width="2" stroke-dasharray="6 5"/><circle cx="245" cy="115" r="5" fill="#2b5b9e"/><circle cx="435" cy="115" r="5" fill="#2b5b9e"/><circle cx="340" cy="55" r="5" fill="#e05d44"/><circle cx="340" cy="285" r="5" fill="#e05d44"/><text x="340" y="48" font-size="16" fill="#2b5b9e" text-anchor="middle">A</text><text x="232" y="112" font-size="16" fill="#2b5b9e" text-anchor="middle">B</text><text x="448" y="112" font-size="16" fill="#2b5b9e" text-anchor="middle">C</text><text x="338" y="300" font-size="14" fill="#c0392b" text-anchor="middle">D</text><text x="346" y="92" font-size="15" fill="#c0392b">2R</text><text x="335" y="142" font-size="15" fill="#2b5b9e">a</text><text x="500" y="168" font-size="15" fill="#33536e">a = BC = 2R sinA</text><text x="500" y="193" font-size="15" fill="#33536e">可得 a/sinA = 2R</text></svg>', caption: '图1　外接圆中作直径 AD，利用直角三角形可得 a = 2R sinA，从而推出正弦定理。' },
        { type: 'paragraph', text: '正弦定理还有几个常用变形：a = 2R sinA、sinA = a/(2R)，以及 a : b : c = sinA : sinB : sinC。这些变形在边角互化、判断解的个数时非常方便。' },
        { type: 'list', items: ['已知两角及一边（AAS 或 ASA），先用内角和求第三角，再用正弦定理求其余两边', '已知两边及一对角（SSA），先用正弦定理求另一角，注意可能存在两解、一解或无解', '已知两边及夹角、或三边，正弦定理不便直接使用，应改用余弦定理'] },
        { type: 'heading', text: '二、余弦定理' },
        { type: 'keypoint', label: '重点·余弦定理', text: '三角形中任一边的平方等于其余两边平方的和减去这两边与它们夹角余弦乘积的两倍：<strong>a² = b² + c² − 2bc cosA</strong>；同理 b² = a² + c² − 2ac cosB；c² = a² + b² − 2ab cosC。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="24" y="32" font-size="17" font-weight="bold" fill="#2b5b9e">图2　余弦定理：c² = a² + b² − 2ab cosC</text><polygon points="200,200 470,200 360,70" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><circle cx="200" cy="200" r="5" fill="#2b5b9e"/><circle cx="470" cy="200" r="5" fill="#2b5b9e"/><circle cx="360" cy="70" r="5" fill="#e05d44"/><text x="190" y="222" font-size="16" fill="#2b5b9e">A</text><text x="480" y="222" font-size="16" fill="#2b5b9e">B</text><text x="360" y="58" font-size="16" fill="#e05d44" text-anchor="middle">C</text><text x="330" y="216" font-size="15" fill="#5a7a2a">c</text><text x="430" y="140" font-size="15" fill="#5a7a2a">a</text><text x="270" y="140" font-size="15" fill="#5a7a2a">b</text><text x="360" y="112" font-size="15" fill="#c0392b">C 角</text></svg>', caption: '图2　在 △ABC 中，a、b 为夹 C 角的两边，c 为 C 角的对边，满足 c² = a² + b² − 2ab cosC。' },
        { type: 'paragraph', text: '余弦定理也可写成求角的形式：cosA = (b² + c² − a²)/(2bc)。当已知三边时，直接代入即可求出各个角的余弦，进而得到角度，这是判断三角形形状（锐角、直角、钝角）的常用方法。' },
        { type: 'warn', label: '易错', text: '使用余弦定理求角时，务必分清<strong>「对边」与「夹角」</strong>：公式 c² = a² + b² − 2ab cosC 中，C 是边 a、b 的夹角，c 才是 C 的对边。把对角与邻边搞混是最常见的失分点，列式前建议先标好边角对应关系。' },
        { type: 'list', items: ['已知两边及夹角（SAS），直接用余弦定理求第三边', '已知三边（SSS），用余弦变形式求三个角，最大边对最大角', '由 cosC 的符号判断 C 为锐角、直角或钝角，用于判定三角形形状'] },
        { type: 'heading', text: '三、三角形面积公式' },
        { type: 'keypoint', label: '重点·面积公式', text: '三角形的面积等于任意两边及其夹角正弦值乘积的一半：<strong>S = 1/2 ab sinC = 1/2 bc sinA = 1/2 ac sinB</strong>。只要知道两边及夹角，就能直接求出面积。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="24" y="32" font-size="17" font-weight="bold" fill="#2b5b9e">图3　面积公式：S = 1/2 ab sinC</text><line x1="160" y1="210" x2="520" y2="210" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="160,210 520,210 410,80" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2"/><line x1="410" y1="80" x2="410" y2="210" stroke="#e05d44" stroke-width="2" stroke-dasharray="6 5"/><circle cx="160" cy="210" r="5" fill="#2b5b9e"/><circle cx="520" cy="210" r="5" fill="#2b5b9e"/><circle cx="410" cy="80" r="5" fill="#e05d44"/><text x="150" y="230" font-size="16" fill="#2b5b9e">A</text><text x="530" y="230" font-size="16" fill="#2b5b9e">B</text><text x="410" y="68" font-size="16" fill="#e05d44" text-anchor="middle">C</text><text x="345" y="200" font-size="15" fill="#5a7a2a">b</text><text x="465" y="155" font-size="15" fill="#5a7a2a">a</text><text x="420" y="155" font-size="15" fill="#c0392b">h</text><text x="400" y="245" font-size="15" fill="#33536e">h = b sinC，故 S = 1/2 · a · h = 1/2 ab sinC</text></svg>', caption: '图3　从顶点 C 向 AB 作高 h，高 h = b sinC，于是面积 S = 1/2 · 底 · 高 = 1/2 ab sinC。' },
        { type: 'paragraph', text: '面积公式与正弦定理、余弦定理配合，可以解决大量求面积的综合题。当已知两边及夹角时，无需先求第三边即可直接算面积；当已知三边时，可先用余弦定理求一角再代入面积公式。' },
        { type: 'example', label: '例题1', text: '在 △ABC 中，b = 3，c = 5，A = 60°，求边 a 与三角形面积 S。<br><br><strong>解</strong>：由余弦定理，a² = b² + c² − 2bc cosA = 9 + 25 − 2·3·5·(1/2) = 34 − 15 = 19，所以 a = √19。<br>由面积公式，S = 1/2 bc sinA = 1/2·3·5·sin60° = 15/2 · (√3/2) = 15√3/4。<br>即边 a = √19，面积 S = 15√3/4。' },
        { type: 'example', label: '例题2', text: '在 △ABC 中，已知 a = 3，b = 4，c = 5，求最大角 C。<br><br><strong>解</strong>：因为 c = 5 为最大边，所以角 C 最大。由余弦定理，cosC = (a² + b² − c²)/(2ab) = (9 + 16 − 25)/(2·3·4) = 0/(24) = 0。<br>由于 C ∈ (0, π)，cosC = 0 得 C = π/2 = 90°。<br>所以最大角 C 为 90°，该三角形为直角三角形。' },
        { type: 'heading', text: '四、解三角形的应用方向' },
        { type: 'paragraph', text: '解三角形在实际测量（距离、高度、角度）与最值问题中应用广泛。解题关键是先根据题意画出示意图，标出已知与所求，再选择正弦定理或余弦定理；涉及范围、最值时，常与基本不等式、函数单调性结合。' },
        { type: 'table', headers: ['已知条件', '可求内容', '选用定理'], rows: [['两角及一边', '其余两边与第三个角', '正弦定理'], ['两边及夹角', '第三边与面积', '余弦定理'], ['三边', '三个角（最大边对最大角）', '余弦定理'], ['两边及一对角', '另一角（注意多解）', '正弦定理']] },
        { type: 'tip', label: '提示', text: '<strong>实际测量问题</strong>：遇到「求不可到达的两点距离」「求塔高」「求视角」时，先抽象为三角形模型，明确已知边角，再选定理求解。画草图标数据是避免列式错误的关键一步。' },
        { type: 'example', label: '例题3', text: '在 △ABC 中，b + c = 10，A = 60°，求三角形面积 S 的最大值。<br><br><strong>解</strong>：S = 1/2 bc sinA = 1/2 · bc · (√3/2) = (√3/4) bc。<br>由基本不等式，bc ≤ ((b + c)/2)² = (10/2)² = 25，当且仅当 b = c = 5 时取等号。<br>所以 S ≤ (√3/4) · 25 = 25√3/4，即面积最大值为 25√3/4。' },
        { type: 'example', label: '例题4', text: '在 △ABC 中，a = 2√3，A = 60°，求外接圆半径 R。<br><br><strong>解</strong>：由正弦定理 a/sinA = 2R，得 2R = a/sinA = (2√3)/sin60° = (2√3)/(√3/2) = 4。<br>所以 R = 2。<br>这说明已知一边及其对角时，可直接求出外接圆半径。' },
        { type: 'list', items: ['解三角形三定理：正弦定理、余弦定理、面积公式，按已知条件的不同灵活选用', '已知三边或两边及夹角优先用余弦定理；已知两角一边或两边及一对角优先用正弦定理', '与基本不等式结合求最值时，先用公式把目标写成边的乘积，再用和定积最大'] },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['正弦定理 a/sinA = b/sinB = c/sinC = 2R，适合已知角与对边、求其余元素', '余弦定理 a² = b² + c² − 2bc cosA（及对称式），适合已知两边及夹角或三边', '面积公式 S = 1/2 ab sinC，已知两边及夹角即可直接求面积', '应用问题先建模画三角形，再选定理；最值问题常配合基本不等式', '列式前务必标清边角对应关系，避免对边与夹角混淆'] }
      ],
      exercises: [
        { type: 'choice', question: '在 △ABC 中，若 a = 2√3，A = 60°，则外接圆半径 R 等于？', options: ['2', '4', '2√3', '√3'], answer: '2', explanation: '由正弦定理 a/sinA = 2R，可得 2R = a/sinA = (2√3)/sin60° = (2√3)/(√3/2) = 4，于是 R = 2。其余选项代入后均不满足该关系式，故半径为 2。' },
        { type: 'choice', question: '在 △ABC 中，a = 3，b = 5，c = 7，则最大角 C 的余弦值为？', options: ['1/2', '-1/2', '√3/2', '-√3/2'], answer: '-1/2', explanation: '因为边长 c = 7 最大，所以角 C 最大。由余弦定理 cosC = (a² + b² − c²)/(2ab) = (9 + 25 − 49)/(2·3·5) = (−15)/30 = −1/2。其余选项在符号或数值上都不符合计算结果。' },
        { type: 'fill', question: '在 △ABC 中，已知 b = 4，c = 6，A = 60°，则边长 a = ____。', answer: '2√7', explanation: '由余弦定理 a² = b² + c² − 2bc cosA = 16 + 36 − 2·4·6·(1/2) = 52 − 24 = 28，故 a = √28 = 2√7。计算时注意 cos60° = 1/2，且边长取正根。' },
        { type: 'choice', question: '在 △ABC 中，a = 5，b = 8，C = 30°，则三角形面积 S 等于？', options: ['10', '20', '10√3', '20√3'], answer: '10', explanation: '由面积公式 S = 1/2 ab sinC = 1/2·5·8·sin30° = 20·(1/2) = 10。其余选项多算了系数或漏乘正弦值，不符合面积公式的结果。' },
        { type: 'fill', question: '在 △ABC 中，已知 b = 2，c = 2，A = 90°，则面积 S = ____。', answer: '2', explanation: '由面积公式 S = 1/2 bc sinA = 1/2·2·2·sin90° = 2·1 = 2。也可看作直角等腰三角形，两条直角边均为 2，面积等于两直角边乘积的一半，结果相同。' }
      ]
    },

    /* ---------------- 第2课时 三角与向量的综合应用 ---------------- */
    {
      id: 'zt2-u4-l2',
      name: '三角与向量的综合应用',
      chapter: '三角与向量复习 · 四 三角与向量综合',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、向量方法推导余弦定理' },
        { type: 'paragraph', text: '向量是联系几何与代数的桥梁。利用向量的线性运算与数量积，可以很自然地从代数角度推出余弦定理，这种推导避免了纯几何作辅助线的繁琐，也是高考中向量与三角综合题的常见思路。' },
        { type: 'keypoint', label: '重点·向量推导', text: '设 向量c = 向量a − 向量b，则 |向量c|² = (向量a − 向量b)² = |向量a|² + |向量b|² − 2 向量a·向量b = |a|² + |b|² − 2ab cosC。这正是边 c 所对夹角 C 的余弦定理表达式。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="24" y="32" font-size="17" font-weight="bold" fill="#2b5b9e">图1　向量法推导余弦定理</text><line x1="120" y1="180" x2="120" y2="60" stroke="#5a7a2a" stroke-width="1" stroke-dasharray="4 4"/><line x1="120" y1="180" x2="580" y2="180" stroke="#5a7a2a" stroke-width="1" stroke-dasharray="4 4"/><line x1="120" y1="180" x2="440" y2="80" stroke="#2b5b9e" stroke-width="3"/><line x1="440" y1="80" x2="560" y2="180" stroke="#4a7de0" stroke-width="3"/><line x1="120" y1="180" x2="560" y2="180" stroke="#e05d44" stroke-width="3"/><circle cx="120" cy="180" r="5" fill="#2b5b9e"/><circle cx="440" cy="80" r="5" fill="#2b5b9e"/><circle cx="560" cy="180" r="5" fill="#2b5b9e"/><text x="280" y="120" font-size="16" fill="#2b5b9e" text-anchor="middle">向量a</text><text x="510" y="125" font-size="16" fill="#4a7de0" text-anchor="middle">向量b</text><text x="345" y="205" font-size="16" fill="#e05d44" text-anchor="middle">向量c = 向量a − 向量b</text><text x="120" y="215" font-size="15" fill="#33536e">O</text><text x="440" y="70" font-size="15" fill="#33536e">A</text><text x="560" y="205" font-size="15" fill="#33536e">B</text><text x="120" y="248" font-size="15" fill="#33536e">|c|² = |a|² + |b|² − 2 a·b</text></svg>', caption: '图1　以 O 为起点作向量a、向量b，则向量c = 向量a − 向量b，两边平方即得余弦定理。' },
        { type: 'example', label: '例题1', text: '用向量法证明余弦定理：在 △ABC 中，c² = a² + b² − 2ab cosC。<br><br><strong>证明</strong>：记 向量CA = 向量b，向量CB = 向量a，则 向量AB = 向量a − 向量b，其模长 |向量AB| = c。<br>于是 c² = |向量a − 向量b|² = |a|² + |b|² − 2 向量a·向量b = a² + b² − 2ab cosC。<br>即 c² = a² + b² − 2ab cosC，余弦定理得证。' },
        { type: 'heading', text: '二、向量与三角函数的结合' },
        { type: 'keypoint', label: '重点·坐标与三角', text: '平面向量可用坐标表示，而坐标与三角函数天然相通：若向量 向量p 的模为 |p|、与 x 轴夹角为 θ，则 向量p = (|p| cosθ, |p| sinθ)。三角恒等变换常与向量坐标运算、数量积结合出题。' },
        { type: 'paragraph', text: '向量的数量积公式 向量a·向量b = |a||b| cosθ 也是沟通向量与三角的纽带。已知两向量的坐标或模与夹角，就能求出夹角的余弦，进而得到角度，这是解三角形与向量综合的核心计算手段。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="24" y="32" font-size="17" font-weight="bold" fill="#2b5b9e">图2　向量坐标与三角结合</text><line x1="150" y1="200" x2="580" y2="200" stroke="#2b5b9e" stroke-width="2"/><line x1="200" y1="220" x2="200" y2="70" stroke="#2b5b9e" stroke-width="2"/><line x1="200" y1="200" x2="460" y2="100" stroke="#e05d44" stroke-width="3"/><circle cx="200" cy="200" r="5" fill="#2b5b9e"/><circle cx="460" cy="100" r="5" fill="#2b5b9e"/><text x="195" y="235" font-size="15" fill="#33536e">O</text><text x="470" y="100" font-size="15" fill="#33536e">P</text><text x="320" y="150" font-size="15" fill="#e05d44" text-anchor="middle">向量p</text><text x="340" y="220" font-size="15" fill="#33536e">|p| cosθ</text><text x="205" y="150" font-size="15" fill="#33536e">|p| sinθ</text><text x="200" y="250" font-size="15" fill="#33536e">向量p = (|p| cosθ, |p| sinθ)</text></svg>', caption: '图2　向量的坐标分量恰好是模长乘以 cosθ 与 sinθ，体现向量与三角函数的内在联系。' },
        { type: 'example', label: '例题2', text: '在 △ABC 中，已知 |向量AB| = 3，|向量AC| = 2，且 向量AB·向量AC = 3，求 ∠A。<br><br><strong>解</strong>：由数量积公式 向量AB·向量AC = |向量AB||向量AC| cosA，得 cosA = (向量AB·向量AC)/(|向量AB||向量AC|) = 3/(3·2) = 1/2。<br>因为 A ∈ (0, π)，所以 A = π/3 = 60°。' },
        { type: 'list', items: ['向量坐标 (x, y) 与三角的关系：x = |p| cosθ，y = |p| sinθ', '数量积 向量a·向量b = |a||b| cosθ 是求两向量夹角的核心公式', '三角恒等变换（和差、倍角）常与向量坐标运算结合，化简后再求角或求值'] },
        { type: 'tip', label: '提示', text: '<strong>坐标法</strong>是处理向量与三角综合题的利器：把向量写成坐标形式，利用 向量a·向量b = x1x2 + y1y2 计算数量积，再结合三角恒等式化简。这样把几何问题转化为代数运算，思路清晰、不易出错。' },
        { type: 'heading', text: '三、三角形四心的向量表示' },
        { type: 'keypoint', label: '重点·重心', text: '设 O 为平面内任一点，则 △ABC 的<strong>重心 G</strong> 满足 向量OG = (向量OA + 向量OB + 向量OC)/3，即 <strong>G = (向量OA + 向量OB + 向量OC)/3</strong>。重心是三条中线的交点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="24" y="32" font-size="17" font-weight="bold" fill="#2b5b9e">图3　重心 G 的向量表示</text><polygon points="200,220 480,220 360,80" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><line x1="360" y1="80" x2="340" y2="220" stroke="#4a7de0" stroke-width="2"/><line x1="200" y1="220" x2="420" y2="150" stroke="#4a7de0" stroke-width="2"/><line x1="480" y1="220" x2="280" y2="150" stroke="#4a7de0" stroke-width="2"/><circle cx="200" cy="220" r="5" fill="#2b5b9e"/><circle cx="480" cy="220" r="5" fill="#2b5b9e"/><circle cx="360" cy="80" r="5" fill="#e05d44"/><circle cx="347" cy="160" r="6" fill="#c0392b"/><text x="190" y="240" font-size="15" fill="#2b5b9e">A</text><text x="490" y="240" font-size="15" fill="#2b5b9e">B</text><text x="360" y="68" font-size="15" fill="#e05d44" text-anchor="middle">C</text><text x="347" y="182" font-size="15" fill="#c0392b" text-anchor="middle">G</text><text x="150" y="268" font-size="15" fill="#33536e">G = (向量OA + 向量OB + 向量OC) / 3</text></svg>', caption: '图3　三条中线交于一点 G，该点即为重心，其向量表达式为 (向量OA + 向量OB + 向量OC)/3。' },
        { type: 'paragraph', text: '除了重心，三角形的外心、内心、垂心也有鲜明的向量特征：外心是到三个顶点距离相等的点；内心是三条角平分线的交点，到三边距离相等；垂心是三条高线的交点。' },
        { type: 'keypoint', label: '重点·外心/内心/垂心', text: '<strong>外心 O</strong>：|向量OA| = |向量OB| = |向量OC| = R（外接圆半径）。<strong>内心 I</strong>：到三边距离相等，常用 向量AI 与角平分线方向一致来判定。<strong>垂心 H</strong>：三条高线交点，满足 向量HA·向量HB = 向量HB·向量HC = 向量HC·向量HA = 0。' },
        { type: 'table', headers: ['名称', '几何定义', '向量特征'], rows: [['重心 G', '三条中线交点', 'G = (向量OA + 向量OB + 向量OC)/3'], ['外心 O', '三边垂直平分线交点', '|向量OA| = |向量OB| = |向量OC| = R'], ['内心 I', '三条角平分线交点', '到三边距离相等'], ['垂心 H', '三条高线交点', '向量HA·向量HB = 向量HB·向量HC = 0']] },
        { type: 'warn', label: '易错', text: '四心的向量判定很容易混淆：<strong>重心看「和」</strong>（三向量之和为 3 倍 向量OG），<strong>外心看「等距」</strong>（到三顶点距离相等），<strong>垂心看「垂直」</strong>（两组高线向量的数量积为 0）。判定时先明确题目给的是等距、共线还是垂直条件，再对应到相应心。' },
        { type: 'example', label: '例题3', text: '已知点 G 满足 向量GA + 向量GB + 向量GC = 0，判定 G 是 △ABC 的什么心，并说明理由。<br><br><strong>解</strong>：取平面内任一点 O，则 向量GA = 向量OA − 向量OG，同理 向量GB、向量GC 也可如此表示。<br>三式相加得 (向量GA + 向量GB + 向量GC) = (向量OA + 向量OB + 向量OC) − 3 向量OG = 0，故 向量OG = (向量OA + 向量OB + 向量OC)/3。<br>这正是重心的向量特征，所以 G 为 △ABC 的重心。' },
        { type: 'list', items: ['重心：三顶点向量之和等于 3 倍重心向量，是中线交点', '外心：到三顶点等距，是垂直平分线交点，距离为外接圆半径 R', '内心：到三边等距，是角平分线交点；垂心：高线交点，相邻高线向量垂直'] },
        { type: 'heading', text: '四、三角与向量的综合求值' },
        { type: 'example', label: '例题4', text: '已知向量 向量m = (sinA, cosA)，向量n = (1, −1)，且 向量m·向量n = 0，A ∈ (0, π)，求 A。<br><br><strong>解</strong>：由 向量m·向量n = sinA·1 + cosA·(−1) = sinA − cosA = 0，得 sinA = cosA。<br>即 tanA = 1，结合 A ∈ (0, π)，得 A = π/4 = 45°。<br>此类题把向量数量积作为条件，转化为三角方程求解。' },
        { type: 'tip', label: '提示', text: '<strong>综合题策略</strong>：先利用向量条件（数量积、模长、平行或垂直）建立关于角的三角等式，再用三角恒等变换化简求角或求值；若涉及三角形，可随时调用正弦定理、余弦定理与面积公式，注意角的取值范围。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['向量法推导余弦定理：|c|² = |a|² + |b|² − 2a·b，平方展开即得', '向量与三角结合：坐标分量即模乘 cosθ、sinθ；数量积求夹角余弦', '重心 G = (向量OA + 向量OB + 向量OC)/3；外心等距；垂心相邻高线垂直', '综合求值：先用向量条件建三角等式，再恒等变换化简，注意角范围'] }
      ],
      exercises: [
        { type: 'choice', question: '用向量法推导余弦定理时，若 向量c = 向量a − 向量b，则 |c|² 展开为？', options: ['|a|²+|b|²−2a·b', '|a|²+|b|²+2a·b', '|a|²−|b|²', '|a|²+|b|²'], answer: '|a|²+|b|²−2a·b', explanation: '由 |c|² = (向量a − 向量b)² = 向量a² + 向量b² − 2 向量a·向量b = |a|² + |b|² − 2a·b，这正是余弦定理的向量表达形式，其余选项漏掉交叉项或符号错误。' },
        { type: 'fill', question: '已知向量 向量p = (3, 4)，则其模长 |p| = ____。', answer: '5', explanation: '向量模长公式 |p| = √(x² + y²) = √(3² + 4²) = √(9 + 16) = √25 = 5。该向量对应直角三角形中两直角边为 3 与 4，斜边为 5，结果一致。' },
        { type: 'choice', question: '在 △ABC 中，若点 G 满足 向量GA + 向量GB + 向量GC = 0，则 G 是三角形的？', options: ['重心', '外心', '内心', '垂心'], answer: '重心', explanation: '取任一点 O，由 向量GA + 向量GB + 向量GC = 0 可推出 向量OG = (向量OA + 向量OB + 向量OC)/3，这正是重心的向量特征，故 G 为重心；外心看等距、垂心看垂直，均不符合。' },
        { type: 'fill', question: '已知向量 向量a = (1, 0)，向量b = (0, 1)，则 向量a·向量b = ____。', answer: '0', explanation: '数量积 向量a·向量b = x1x2 + y1y2 = 1·0 + 0·1 = 0，说明两向量互相垂直。也可由夹角公式 cosθ = 0 得到 θ = 90°，二者互相垂直。' },
        { type: 'choice', question: '在 △ABC 中，O 为外心，且 |向量OA| = |向量OB| = |向量OC| = R，则 R 称为？', options: ['外接圆半径', '内切圆半径', '重心到顶点距离', '三角形高'], answer: '外接圆半径', explanation: '外心是三角形三边垂直平分线的交点，到三个顶点距离相等，该相等的距离即为外接圆半径 R，这正是外心最核心的几何与向量特征，其余选项与定义不符。' }
      ]
    }

  );
})();
