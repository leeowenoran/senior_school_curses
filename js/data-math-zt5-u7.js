/* ============================================================
 * 高三数学 · 解析几何复习专题 · 第7单元
 * 第1课时：难点专题（定点、定值、最值、存在性）
 * 第2课时：二级结论速记与备考策略
 * 数据注入：math.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt5');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 定点、定值、最值与存在性 ---------------- */
    {
      id: 'zt5-u7-l1',
      name: '难点专题：定点、定值、最值与存在性',
      chapter: '解析几何复习 · 十三、难点专题：定点定值与最值存在性',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、本专题的地位与解题思路' },
        { type: 'paragraph', text: '解析几何大题的压轴部分常以“定点、定值、最值、存在性”四类综合问题出现。它们表面上千变万化，本质都围绕“设而不求、韦达定理、函数与方程思想”展开。本课时把四类问题的通性通法梳理清楚，帮助你在考场上快速识别题型、选择方法。' },
        { type: 'keypoint', label: '重点·四大核心题型', text: '<strong>定点问题</strong>：证明动直线或动曲线恒过某定点；<strong>定值问题</strong>：证明某代数式（斜率和、数量积等）与参数无关；<strong>最值问题</strong>：求某量的最大值、最小值或取值范围；<strong>存在性问题</strong>：判断满足某条件的点、直线是否存在。' },

        { type: 'heading', text: '二、定点问题（含参直线恒过定点）' },
        { type: 'paragraph', text: '已知直线方程含有参数，要证明它恒过定点，最常用的方法是“恒等式法”：把方程按参数整理成“系数×参数 + 常数 = 0”的形式，由于对任意参数都成立，所以各参数的系数必须为 0。' },
        { type: 'keypoint', label: '方法·恒等式法', text: '设直线方程为含参形式，例如 m 为参数。将方程改写为 <strong>P(x,y)·m + Q(x,y) = 0</strong>。因为对任意 m 都成立，故 <strong>P(x,y)=0 且 Q(x,y)=0</strong>，联立解出 (x, y) 即为定点坐标。' },
        { type: 'list', items: ['第一步：把直线方程按参数整理成“系数×参数 + 常数 = 0”', '第二步：令参数的系数和常数项分别为 0，得到方程组', '第三步：解方程组得到定点坐标，并代回原方程验证'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="24" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">动直线恒过定点示意</text><line x1="40" y1="270" x2="660" y2="270" stroke="#33536e" stroke-width="1.5"/><line x1="40" y1="270" x2="40" y2="30" stroke="#33536e" stroke-width="1.5"/><line x1="80" y1="60" x2="600" y2="300" stroke="#4a7de0" stroke-width="2"/><line x1="100" y1="300" x2="590" y2="50" stroke="#7a5aa0" stroke-width="2"/><line x1="40" y1="180" x2="660" y2="180" stroke="#2b5b9e" stroke-width="2"/><line x1="340" y1="40" x2="340" y2="280" stroke="#5a7a2a" stroke-width="2"/><line x1="120" y1="70" x2="560" y2="270" stroke="#e05d44" stroke-width="2"/><circle cx="340" cy="180" r="7" fill="#c0392b"/><text x="356" y="176" font-size="16" fill="#c0392b" font-weight="bold">定点 P(1,2)</text><text x="24" y="294" font-size="14" fill="#33536e">无论参数 m 如何变化，直线族都经过同一点 P。</text></svg>', caption: '图1　含参直线族恒过同一定点 P：把方程按参数整理，令系数为 0 即可解出 P。' },
        { type: 'example', label: '例题1', text: '已知动直线 l：(2m+1)x + (m+1)y - (4m+3) = 0（m 为实数），证明 l 恒过定点，并求定点坐标。<br><br><strong>解</strong>：将方程按 m 整理：<br>m(2x + y - 4) + (x + y - 3) = 0。<br>因对任意 m 成立，故<br>2x + y - 4 = 0 且 x + y - 3 = 0。<br>两式相减得 x = 1，代入得 y = 2。<br>所以直线 l 恒过定点 <strong>P(1, 2)</strong>。代回原方程：左边 = (2m+1)·1 + (m+1)·2 - (4m+3) = 2m+1+2m+2-4m-3 = 0，恒成立。' },

        { type: 'heading', text: '三、定值问题（目标式与参数无关）' },
        { type: 'paragraph', text: '定值问题要求证明某表达式的值与参数无关。通常先设出交点坐标，利用韦达定理把目标式中的 x₁+x₂、x₁x₂ 代入，经过化简后参数被消去，得到一个常数。' },
        { type: 'keypoint', label: '方法·韦达定理', text: '联立直线与曲线得一元二次方程，设两交点为 A(x₁,y₁)、B(x₂,y₂)，由韦达定理得 <strong>x₁+x₂ = -b/a，x₁x₂ = c/a</strong>。将目标式（如 k_PA + k_PB、向量FA·向量FB）用 x₁+x₂、x₁x₂ 表示并化简，若结果与参数无关，则得定值。' },
        { type: 'list', items: ['斜率之和：k₁ + k₂ = (y₁-y₀)/(x₁-x₀) + (y₂-y₀)/(x₂-x₀)，通分后代入韦达', '向量数量积：向量FA·向量FB = (x₁-c)(x₂-c) + y₁y₂', '面积或长度表达式：统一用 x₁+x₂、x₁x₂ 表示再化简'] },
        { type: 'warn', label: '易错', text: '化简目标式时，<strong>分母不能为 0</strong> 的情况要单独讨论；另外直线斜率不存在（垂直于 x 轴）的情形不能遗漏，否则定值可能漏解或出错。写解答时务必先说明“当直线斜率存在时”，再补充分母为 0 的特殊情形。' },

        { type: 'heading', text: '四、最值与范围问题' },
        { type: 'paragraph', text: '求取值范围或最值，本质是把目标量表示为变量的函数，再求这个函数的值域。常用的四种通法如下，选择哪种取决于目标式的结构。' },
        { type: 'keypoint', label: '方法·四种通法', text: '<strong>函数法</strong>：把目标表示为单变量函数，用二次函数、三角函数求最值；<strong>判别式法</strong>：把等式化为关于某变量的二次方程，由 Δ ≥ 0 求范围；<strong>基本不等式</strong>：形如 a+b、ab 可用均值不等式；<strong>数形结合</strong>：利用几何意义（距离、斜率）直接观察最值。' },
        { type: 'table', headers: ['方法', '适用情形', '关键操作'], rows: [['函数法', '目标能写成单变量解析式', '配方、求导或利用三角函数有界性'], ['判别式法', '含两个变量且有等式约束', '化为二次方程，令 Δ ≥ 0'], ['基本不等式', '出现和定积或积定和', '满足正、定、等三条件'], ['数形结合', '有明确几何意义（距离、斜率）', '借助图形直观读取最值']] },
        { type: 'list', items: ['先判断目标式能否用几何意义（距离、斜率）直接看出', '能配方就用二次函数顶点，注意定义域', '含根号或分式时优先考虑判别式或三角换元', '最后务必把最值代回检验是否可达'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="24" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">数形结合求最值（动点到定点距离）</text><ellipse cx="340" cy="160" rx="220" ry="100" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="340" cy="160" r="4" fill="#2b5b9e"/><text x="346" y="156" font-size="14" fill="#2b5b9e">中心</text><circle cx="340" cy="40" r="7" fill="#c0392b"/><text x="352" y="36" font-size="16" fill="#c0392b" font-weight="bold">定点 A(0,3)</text><line x1="340" y1="40" x2="340" y2="60" stroke="#5a7a2a" stroke-width="2.5"/><circle cx="340" cy="60" r="6" fill="#5a7a2a"/><text x="350" y="95" font-size="15" fill="#5a7a2a">d_min</text><line x1="340" y1="40" x2="340" y2="260" stroke="#e05d44" stroke-width="2.5"/><circle cx="340" cy="260" r="6" fill="#e05d44"/><text x="350" y="250" font-size="15" fill="#e05d44">d_max</text><text x="24" y="294" font-size="14" fill="#33536e">动点到定点距离的最值，常在与定点共线方向的曲线端点取得。</text></svg>', caption: '图2　椭圆上动点到椭圆外定点 A 的距离，最近、最远点都在过 A 与中心的直线上。' },
        { type: 'example', label: '例题2', text: '已知 P 是椭圆 x²/9 + y²/4 = 1 上的动点，定点 A(0, 3)，求 |PA| 的取值范围。<br><br><strong>解</strong>：设 P(3cosθ, 2sinθ)，则<br>|PA|² = (3cosθ)² + (2sinθ - 3)²<br>= 9cos²θ + 4sin²θ - 12sinθ + 9<br>= 9(1-sin²θ) + 4sin²θ - 12sinθ + 9<br>= -5sin²θ - 12sinθ + 18。<br>令 t = sinθ ∈ [-1, 1]，f(t) = -5t² - 12t + 18，开口向下，对称轴 t = -6/5 在区间左侧，故在 [-1,1] 上递减，最小值 f(1)=1，最大值 f(-1)=25。<br>所以 |PA| ∈ [1, 5]。' },

        { type: 'heading', text: '五、存在性问题' },
        { type: 'paragraph', text: '存在性问题的标准处理是“先假设存在，再推导”：假设满足条件的对象存在，把它转化为方程或不等式是否有解；若能解出符合条件的参数，则存在；若推出矛盾或无解，则不存在。' },
        { type: 'keypoint', label: '方法·假设存在', text: '设所求点（或直线）存在并设出坐标，代入已知条件列出方程/不等式。若方程组<strong>有解</strong>且满足定义域，则存在；若<strong>无解</strong>或解不满足约束，则不存在。注意“存在”只需找到一个，“不存在”必须严格证明无解。' },
        { type: 'tip', label: '提示', text: '存在性常与定点、最值结合：判断“是否存在定点使某式恒成立”，可先令特殊位置猜出定点，再证明一般情况；判断“是否存在直线满足某条件”，多用联立后的判别式 Δ 与韦达关系处理。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="24" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">存在性＝直线与曲线是否有公共点</text><path d="M120,250 C 240,110 440,110 560,250" fill="none" stroke="#2b5b9e" stroke-width="2.5"/><text x="300" y="135" font-size="15" fill="#2b5b9e">曲线</text><line x1="60" y1="60" x2="600" y2="240" stroke="#5a7a2a" stroke-width="2.5"/><circle cx="200" cy="123" r="5" fill="#5a7a2a"/><circle cx="470" cy="197" r="5" fill="#5a7a2a"/><text x="500" y="70" font-size="15" fill="#5a7a2a" font-weight="bold">有交点→存在</text><line x1="120" y1="70" x2="560" y2="70" stroke="#e05d44" stroke-width="2.5"/><text x="360" y="60" font-size="15" fill="#e05d44" font-weight="bold">无交点→不存在</text><text x="24" y="272" font-size="14" fill="#33536e">假设存在后联立，用判别式 Δ 判断：Δ≥0 有解即存在，Δ<0 无解即不存在。</text></svg>', caption: '图3　存在性等价于直线与曲线是否有公共点：相交则有解（存在），相离则无解（不存在）。' },

        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['定点：恒等式法，令参数各次项系数为 0 解定点', '定值：联立—韦达—代入化简，消去参数得常数', '最值：函数法、判别式法、基本不等式、数形结合', '存在性：先假设存在，转化为方程（组）是否有解', '考场上务必写清“设而不求、联立、韦达、判别式”四步'] }
      ],
      exercises: [
        { type: 'choice', question: '用恒等式法求动直线恒过定点，关键步骤是？', options: ['令参数的系数与常数项分别为 0', '令参数等于 0', '令 x 等于 0', '令 y 等于 0'], answer: '令参数的系数与常数项分别为 0', explanation: '恒等式法要求直线方程对任意参数都成立，因此将方程按参数整理后，参数的系数和常数项必须同时为 0，联立解得定点。令参数或 x、y 为 0 只能得到特殊位置的直线，不能保证恒过定点，故该方法不正确。' },
        { type: 'choice', question: '定值问题中，把目标式化简为常数通常依赖？', options: ['韦达定理', '配方法', '换元法', '待定系数法'], answer: '韦达定理', explanation: '定值问题多涉及直线与曲线两交点坐标，设交点后利用联立所得二次方程的韦达定理，用 x₁+x₂ 与 x₁x₂ 表示目标式并化简，参数往往被消去得到常数。配方法和换元法主要用于单变量函数求最值，待定系数法用于求解析式，均非定值问题的核心工具。' },
        { type: 'choice', question: '求椭圆上动点到定点距离的最值，下列最适合的直观方法是？', options: ['数形结合（几何意义）', '列举法', '归纳法', '反证法'], answer: '数形结合（几何意义）', explanation: '距离的最值具有明显的几何意义，可结合椭圆图形与参数方程，将距离平方表示为三角函数后在闭区间上求最值，属于数形结合思想。列举法、归纳法与反证法都不适合处理连续变量的取值范围问题。' },
        { type: 'fill', question: '动直线 l：(2m+1)x + (m+1)y - (4m+3) = 0 恒过定点 ____。', answer: '(1,2)|(1, 2)|P(1,2)|(1,2)点', explanation: '将方程按 m 整理为 m(2x+y-4)+(x+y-3)=0，因对任意 m 成立，故 2x+y-4=0 且 x+y-3=0，解得 x=1、y=2，所以直线恒过定点 (1, 2)。代回原方程验证左边恒等于 0，结论成立。' },
        { type: 'fill', question: '存在性问题应“先假设存在，再转化为 ________ 是否有解”来判断。', answer: '方程（组）|方程|方程组|方程或不等式', explanation: '存在性问题的标准思路是先假设满足条件的对象存在，设出坐标后代入条件，将其转化为方程或不等式是否有解。若有解且满足定义域则存在，若无解或解不满足约束则不存在。因此填空可写为“方程（组）”，也可写方程或不等式。' }
      ]
    },

    /* ---------------- 第2课时 二级结论速记与备考策略 ---------------- */
    {
      id: 'zt5-u7-l2',
      name: '二级结论速记与备考策略',
      chapter: '解析几何复习 · 十四、二级结论速记与备考策略',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、本课时内容与复习定位' },
        { type: 'paragraph', text: '解析几何大题运算量大、结论多。熟记一批“二级结论”能显著缩短推导时间；同时，科学的备考策略可避免无谓失分。本课时汇总最常考的二级结论，并给出可操作的备考建议。' },
        { type: 'keypoint', label: '重点·结论价值', text: '<strong>二级结论</strong>是由定义与通法推导出的“半成品结论”，在选择题、填空题中可直接套用快速得结果，在大题中可作为检验答案的参照。但使用前提是<strong>先确认曲线类型与适用条件</strong>，不能张冠李戴。' },

        { type: 'heading', text: '二、焦点三角形面积结论' },
        { type: 'paragraph', text: '椭圆或双曲线上一点 P 与两焦点 F₁、F₂ 构成的三角形叫做焦点三角形，记 ∠F₁PF₂ = θ。其面积有简洁公式，由余弦定理与定义联立可得。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="24" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">椭圆焦点三角形（∠F₁PF₂ = θ）</text><ellipse cx="340" cy="170" rx="230" ry="110" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="200" cy="170" r="6" fill="#c0392b"/><text x="180" y="195" font-size="16" fill="#c0392b" font-weight="bold">F₁</text><circle cx="480" cy="170" r="6" fill="#c0392b"/><text x="488" y="195" font-size="16" fill="#c0392b" font-weight="bold">F₂</text><circle cx="340" cy="60" r="7" fill="#2b5b9e"/><text x="350" y="56" font-size="16" fill="#2b5b9e" font-weight="bold">P</text><line x1="200" y1="170" x2="340" y2="60" stroke="#4a7de0" stroke-width="2"/><line x1="480" y1="170" x2="340" y2="60" stroke="#4a7de0" stroke-width="2"/><path d="M310,90 A 40 40 0 0 0 370 90" fill="none" stroke="#5a7a2a" stroke-width="2"/><text x="340" y="108" font-size="15" fill="#5a7a2a" text-anchor="middle">θ</text><text x="24" y="272" font-size="14" fill="#33536e">焦点三角形面积 S = b²·tan(θ/2)，θ 越大面积越大（椭圆）。</text></svg>', caption: '图1　椭圆上一点 P 与两焦点构成三角形，记顶角 ∠F₁PF₂ = θ，面积公式 S = b²·tan(θ/2)。' },
        { type: 'table', headers: ['曲线', '焦点三角形面积 S', '说明'], rows: [['椭圆', 'S = b²·tan(θ/2)', 'θ = ∠F₁PF₂，0<θ<π'], ['双曲线', 'S = b²·cot(θ/2)', 'θ = ∠F₁PF₂，注意是余切'], ['记忆口诀', '椭圆正切、双曲余切', '同是 b² 乘三角比']] },
        { type: 'keypoint', label: '结论·面积', text: '椭圆焦点三角形面积 <strong>S = b²·tan(θ/2)</strong>；双曲线焦点三角形面积 <strong>S = b²·cot(θ/2)</strong>。两式仅三角函数不同，记忆为“椭圆正切、双曲余切”，其中 θ 为 ∠F₁PF₂。' },

        { type: 'heading', text: '三、焦半径与中点弦结论' },
        { type: 'paragraph', text: '焦半径公式与中点弦斜率关系是解析几何高频结论，常出现在求弦长、求离心率、判断点位置等场景。' },
        { type: 'list', items: ['椭圆焦半径：P(x₀,y₀) 在右支（右焦点）时 |PF| = a - e·x₀（左焦点为 a + e·x₀）', '双曲线焦半径：由定义 |PF| = |e·x₀ ± a|，注意点在哪一支', '中点弦斜率：椭圆中 k_PQ · k_OM = -b²/a²，双曲线中 k_PQ · k_OM = b²/a²', '抛物线焦半径：|PF| = x₀ + p/2（开口向右时）'] },
        { type: 'keypoint', label: '结论·中点弦', text: '设 P、Q 是椭圆上两点，M 是 PQ 中点，则 <strong>k_PQ · k_OM = -b²/a²</strong>；若为双曲线，则 <strong>k_PQ · k_OM = b²/a²</strong>。注意双曲线情形为正号，与椭圆仅差一个负号，极易混淆。' },

        { type: 'heading', text: '四、抛物线焦点弦结论与光学性质' },
        { type: 'paragraph', text: '抛物线过焦点的弦（焦点弦）有若干漂亮性质，既能快速求弦长，也能联系物理中的光学性质。' },
        { type: 'table', headers: ['结论', '公式', '适用'], rows: [['倒数和', '1/|FA| + 1/|FB| = 2/p', 'AB 为焦点弦，F 为焦点'], ['弦长', '|AB| = 2p/sin²θ', 'θ 为 AB 与对称轴夹角'], ['焦半径', '|FA| = x_A + p/2', '抛物线 y²=2px，开口向右']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="24" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">抛物线光学性质：平行光反射过焦点</text><path d="M130,150 Q 350,30 560,150" fill="none" stroke="#2b5b9e" stroke-width="2.5"/><path d="M130,150 Q 350,270 560,150" fill="none" stroke="#2b5b9e" stroke-width="2.5"/><line x1="130" y1="150" x2="600" y2="150" stroke="#33536e" stroke-width="1.2" stroke-dasharray="6 5"/><text x="560" y="140" font-size="13" fill="#33536e">对称轴</text><circle cx="250" cy="150" r="7" fill="#c0392b"/><text x="258" y="146" font-size="16" fill="#c0392b" font-weight="bold">焦点 F</text><line x1="20" y1="100" x2="261" y2="100" stroke="#5a7a2a" stroke-width="2"/><line x1="20" y1="150" x2="130" y2="150" stroke="#5a7a2a" stroke-width="2"/><line x1="20" y1="200" x2="261" y2="200" stroke="#5a7a2a" stroke-width="2"/><line x1="261" y1="100" x2="250" y2="150" stroke="#e05d44" stroke-width="2"/><line x1="130" y1="150" x2="250" y2="150" stroke="#e05d44" stroke-width="2"/><line x1="261" y1="200" x2="250" y2="150" stroke="#e05d44" stroke-width="2"/><circle cx="261" cy="100" r="4" fill="#2b5b9e"/><circle cx="130" cy="150" r="4" fill="#2b5b9e"/><circle cx="261" cy="200" r="4" fill="#2b5b9e"/><text x="24" y="292" font-size="14" fill="#33536e">平行于对称轴的光线（绿）经抛物线反射后（红）全部汇聚于焦点 F。</text></svg>', caption: '图2　平行于对称轴的入射光（绿）经抛物线反射后（红）汇聚于焦点 F，这是天线聚波的原理。' },
        { type: 'keypoint', label: '结论·光学性质', text: '<strong>椭圆</strong>：从一个焦点发出的光经椭圆反射会聚于另一焦点；<strong>抛物线</strong>：平行于对称轴的光线经抛物线反射后必过焦点 F。光学性质常用于解释天线、望远镜聚光原理，也是解答“光线反射”类新定义题的依据。' },

        { type: 'heading', text: '五、备考策略' },
        { type: 'paragraph', text: '解析几何想在高考中拿稳分，既要会方法，也要讲策略。下面五条来自一线备考经验，建议逐条落实。' },
        { type: 'list', items: ['重视定义：离心率、准线、焦半径多由定义直接得出，解题先想定义', '规范运算：联立—韦达—判别式三步不能省，步骤分就在这里', '强化“设而不求”：能不用坐标就别硬算，用韦达整体代换', '限时训练：大题限时 12–15 分钟，平时练速度也练心态', '错题归因：分清是计算错还是方法错，针对性补弱'] },
        { type: 'tip', label: '提示', text: '选择题遇到离心率范围，可先由图形直观估计（如椭圆 0<e<1、双曲线 e>1），再用 a、b、c 关系精确推导；遇到焦点三角形面积直接用 S = b²·tan(θ/2) 或 b²·cot(θ/2)，省去从头推导。' },
        { type: 'warn', label: '易错', text: '用二级结论前<strong>必须核对曲线类型</strong>：椭圆与双曲线的中点弦斜率符号相反、焦点三角形面积一个用正切一个用余切，套错符号整题皆错。此外，抛物线焦点弦的 2/p 与 2p 易混，写之前先确认公式是倒数和还是弦长。' },

        { type: 'heading', text: '六、例题（用二级结论快速判断离心率范围）' },
        { type: 'example', label: '例题', text: '已知椭圆 x²/a² + y²/b² = 1 (a>b>0) 上一点 P，若 ∠F₁PF₂ 的最大值为 90°，求该椭圆离心率 e 的取值范围。<br><br><strong>解</strong>：由焦点三角形面积公式 S = b²·tan(θ/2)，当 θ 最大时面积最大。又由余弦定理，θ 最大发生在 P 位于短轴端点时，此时 cosθ = (|PF₁|²+|PF₂|²-|F₁F₂|²)/(2|PF₁||PF₂|) = (2a²-4c²)/(2a²) = 1 - 2e²。<br>θ 最大值为 90° 即 cosθ ≤ 0，故 1 - 2e² ≤ 0，得 e² ≥ 1/2，即 e ≥ √2/2。<br>又椭圆 e<1，所以 <strong>e ∈ [√2/2, 1)</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="24" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">离心率 e = c/a 与椭圆形状</text><ellipse cx="200" cy="150" rx="160" ry="45" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="40" y1="150" x2="360" y2="150" stroke="#33536e" stroke-width="1.2" stroke-dasharray="6 5"/><circle cx="120" cy="150" r="5" fill="#c0392b"/><circle cx="280" cy="150" r="5" fill="#c0392b"/><text x="200" y="225" font-size="15" fill="#2b5b9e" text-anchor="middle">e 较大（接近 1）→ 椭圆较扁</text><ellipse cx="500" cy="150" rx="120" ry="105" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="380" y1="150" x2="620" y2="150" stroke="#33536e" stroke-width="1.2" stroke-dasharray="6 5"/><circle cx="440" cy="150" r="5" fill="#c0392b"/><circle cx="560" cy="150" r="5" fill="#c0392b"/><text x="500" y="225" font-size="15" fill="#2b5b9e" text-anchor="middle">e 较小（接近 0）→ 接近圆</text><text x="24" y="252" font-size="14" fill="#33536e">椭圆满足 0&lt;e&lt;1；e 越大越扁，e 越小越圆。</text></svg>', caption: '图3　离心率 e = c/a 决定椭圆胖瘦：e 越接近 1 越扁，越接近 0 越圆，始终在 (0,1) 内。' },

        { type: 'heading', text: '七、本课小结' },
        { type: 'list', items: ['焦点三角形：椭圆 S=b²·tan(θ/2)，双曲线 S=b²·cot(θ/2)', '中点弦：椭圆 k_PQ·k_OM=-b²/a²，双曲线为正号', '抛物线焦点弦：1/|FA|+1/|FB|=2/p，|AB|=2p/sin²θ', '光学性质：椭圆两焦点互聚，抛物线平行光过焦点', '备考：重定义、规范运算、设而不求、限时、错题归因'] }
      ],
      exercises: [
        { type: 'choice', question: '椭圆焦点三角形面积公式为？', options: ['S = b²·tan(θ/2)', 'S = b²·cot(θ/2)', 'S = a²·tan(θ/2)', 'S = b²·sinθ'], answer: 'S = b²·tan(θ/2)', explanation: '椭圆上一点与两焦点构成的焦点三角形，其面积公式为 S = b²·tan(θ/2)，其中 θ = ∠F₁PF₂。双曲线才是 S = b²·cot(θ/2)，二者仅三角函数不同，注意区分。选项中 a²、sinθ 均不符合推导结果。' },
        { type: 'choice', question: '椭圆中，若 P、Q 为椭圆上两点，M 为 PQ 中点，则 k_PQ·k_OM 等于？', options: ['-b²/a²', 'b²/a²', '-a²/b²', 'a²/b²'], answer: '-b²/a²', explanation: '椭圆的中点弦斜率关系为 k_PQ · k_OM = -b²/a²，这是由点差法推导出的标准结论。双曲线对应为正号 b²/a²，二者仅差一个负号，使用时务必看清曲线类型是椭圆还是双曲线。' },
        { type: 'choice', question: '抛物线焦点弦 AB（F 为焦点），下列恒成立的是？', options: ['1/|FA| + 1/|FB| = 2/p', '|AB| = 2p·sin²θ', '1/|FA| + 1/|FB| = p/2', '|AB| = p/sin²θ'], answer: '1/|FA| + 1/|FB| = 2/p', explanation: '抛物线焦点弦满足倒数和公式 1/|FA| + 1/|FB| = 2/p，以及弦长公式 |AB| = 2p/sin²θ（θ 为弦与对称轴夹角）。选项中把 2/p 写成 p/2、把 2p 写成 p 均错误，需准确记忆系数与形式。' },
        { type: 'fill', question: '双曲线焦点三角形面积 S = ________（设 θ = ∠F₁PF₂）。', answer: 'b²·cot(θ/2)|b²cot(θ/2)|b²·cot(θ/2)', explanation: '双曲线焦点三角形面积公式为 S = b²·cot(θ/2)，其中 θ 为 ∠F₁PF₂。它与椭圆公式 S = b²·tan(θ/2) 仅三角函数不同，记忆口诀为“椭圆正切、双曲余切”。填空时写 b²·cot(θ/2) 即可。' },
        { type: 'fill', question: '已知椭圆离心率 e = c/a，则椭圆的离心率取值范围是 ________。', answer: '0<e<1|(0,1)|0<e<1', explanation: '椭圆中 c < a 且 c > 0，故离心率 e = c/a 满足 0 < e < 1。e 越接近 1 椭圆越扁，越接近 0 越接近圆。双曲线 e>1，抛物线 e=1，三者由离心率大小区分，这是判断曲线类型的基本依据。' }
      ]
    }

  );
})();
