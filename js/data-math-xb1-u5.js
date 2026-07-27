/* ============================================================
 * 高二数学 · 选择性必修 第一册 · 第二章/第三章（人教A版 2019）
 * 第5单元：直线与圆、圆与圆的位置关系（§2.5） & 椭圆（§3.1）
 * 数据注入：math.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'xb1');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 直线与圆、圆与圆的位置关系 ---------------- */
    {
      id: 'xb1-u5-l1',
      name: '直线与圆、圆与圆的位置关系',
      chapter: '第二章 直线和圆的方程 · 2.5',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、直线与圆的位置关系' },
        { type: 'paragraph', text: '直线与圆的位置关系，既可以通过圆心到直线的距离与半径比较（几何法）来判定，也可以通过联立方程看判别式（代数法）来判定。两种方法本质一致，是后续研究圆与圆位置关系的铺垫。' },
        { type: 'keypoint', label: '重点·几何法', text: '设圆的圆心为 C、半径为 r，圆心到直线 l 的距离为 d。则：<strong>d &lt; r</strong> 时直线与圆相交（两个公共点）；<strong>d = r</strong> 时相切（一个公共点）；<strong>d &gt; r</strong> 时相离（无公共点）。这是判断直线与圆位置关系的几何法，最为直观。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">直线与圆的三种位置关系（圆心到直线的距离 d 与半径 r 比较）</text><circle cx="130" cy="150" r="55" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="60" y1="200" x2="200" y2="100" stroke="#e05d44" stroke-width="2.5"/><text x="130" y="248" font-size="15" fill="#33536e" text-anchor="middle">相交 d &lt; r，两个交点</text><circle cx="340" cy="150" r="55" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="340" y1="80" x2="340" y2="220" stroke="#e05d44" stroke-width="2.5"/><text x="340" y="248" font-size="15" fill="#33536e" text-anchor="middle">相切 d = r，一个交点</text><circle cx="550" cy="150" r="55" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="490" y1="120" x2="560" y2="90" stroke="#e05d44" stroke-width="2.5"/><text x="550" y="248" font-size="15" fill="#33536e" text-anchor="middle">相离 d &gt; r，零个交点</text><text x="340" y="285" font-size="15" fill="#33536e" text-anchor="middle">口诀：比半径小则相交，等于则相切，大于则相离</text></svg>', caption: '图1　直线与圆的三种位置关系：相交、相切、相离（圆心到直线的距离 d 与半径 r 比较）。' },
        { type: 'paragraph', text: '当不便求圆心到直线的距离时，可用代数法：把直线方程代入圆的方程，消去一个未知数，得到关于另一个未知数的一元二次方程，由判别式 Δ 的符号判定交点个数。' },
        { type: 'keypoint', label: '重点·代数法', text: '将直线方程与圆的方程联立，消去一个未知数得到一元二次方程，其判别式为 Δ。<br><strong>Δ &gt; 0</strong>：直线与圆相交（两个交点）；<br><strong>Δ = 0</strong>：相切（一个交点）；<br><strong>Δ &lt; 0</strong>：相离（无交点）。<br>几何法与代数法本质一致，可根据题目灵活选择。' },
        { type: 'keypoint', label: '重点·弦长公式', text: '当直线与圆相交时，设圆心到直线距离为 d、圆半径为 r，则半弦长 = √(r² - d²)（由勾股定理），故 <strong>弦长 = 2√(r² - d²)</strong>。若 d = 0（直线过圆心），弦长即为直径 2r。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">弦长公式：弦长 = 2√(r² - d²)</text><circle cx="340" cy="140" r="90" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><line x1="250" y1="180" x2="430" y2="100" stroke="#e05d44" stroke-width="2.5"/><line x1="340" y1="140" x2="360" y2="120" stroke="#5a7a2a" stroke-width="2" stroke-dasharray="4 3"/><text x="372" y="118" font-size="14" fill="#5a7a2a">d</text><circle cx="340" cy="140" r="4" fill="#2b5b9e"/><text x="246" y="200" font-size="14" fill="#e05d44">半弦长 = √(r²-d²)</text><text x="430" y="96" font-size="14" fill="#2b5b9e">半径 r</text><text x="340" y="232" font-size="15" fill="#33536e" text-anchor="middle">圆心到弦的垂线段长度为 d，弦被垂足平分</text><text x="340" y="254" font-size="15" fill="#33536e" text-anchor="middle">故弦长 = 2 × 半弦长 = 2√(r² - d²)</text></svg>', caption: '图2　弦长公式：弦长等于 2 倍根号下(r² - d²)，其中 d 为圆心到弦的距离。' },
        { type: 'list', items: ['几何法：比较圆心到直线距离 d 与半径 r', '代数法：联立方程看判别式 Δ', '弦长公式：2√(r² - d²)，d 为圆心到弦的距离'] },
        { type: 'warn', label: '易错', text: '求弦长时不要忘记乘以 2：半弦长才是 √(r² - d²)，整条弦长为 2√(r² - d²)。另外，运用距离公式求 d 时务必先把直线方程化为一般式 Ax + By + C = 0，再代入点到直线距离公式，避免符号与系数错误。' },
        { type: 'example', label: '例题1', text: '已知圆 C: x² + y² = 4 与直线 l: y = x。判断它们的位置关系，并求相交弦长。<br><br><strong>解</strong>：圆心 O(0,0)，半径 r = 2。圆心到直线 y = x（即 x - y = 0）的距离 d = |0 - 0| / √(1² + 1²) = 0。<br>因为 d = 0 &lt; r = 2，直线与圆 <strong>相交</strong>，直线过圆心，弦长即为直径。<br>由弦长公式：弦长 = 2√(r² - d²) = 2√(4 - 0) = 4。<br>联立可得交点为 (±√2, ±√2)，验证弦长确为 4。' },

        { type: 'heading', text: '二、圆的切线' },
        { type: 'paragraph', text: '切线是与圆只有一个公共点的直线。过圆上一点可作唯一一条切线；过圆外一点可作两条切线。掌握切线方程的求法，是解析几何中的基本技能。' },
        { type: 'keypoint', label: '重点·过圆上一点', text: '若切点为圆上一点 P(x0, y0)，圆心为 C(a, b)、半径为 r，则切线方程为 <strong>(x0 - a)(x - a) + (y0 - b)(y - b) = r²</strong>。特别地，圆心在原点时，过圆上点 (x0, y0) 的切线为 x0·x + y0·y = r²。' },
        { type: 'keypoint', label: '重点·过圆外一点', text: '过圆外一点可作圆的 <strong>两条</strong>切线。一般求法：设切线斜率为 k 的点斜式方程，利用圆心到切线的距离等于半径 r 解出 k；或设切点坐标，结合切线公式与切点在圆上求解。两条切线关于圆心与该点的连线对称。' },
        { type: 'warn', label: '易错', text: '过圆外一点有两条切线，若用斜率 k 求解只得到一条，要检查是否存在 <strong>斜率不存在</strong> 的那条（垂直于 x 轴的直线）。切勿漏解。此外，用公式 (x0 - a)(x - a) + (y0 - b)(y - b) = r² 的前提是 (x0, y0) 确实在圆上，圆外点不能直接套用。' },
        { type: 'example', label: '例题2', text: '求圆 (x - 1)² + (y - 2)² = 9 上一点 P(4, 2) 处的切线方程。<br><br><strong>解</strong>：圆心 C(1, 2)，半径 r = 3，先验证 P 在圆上：(4 - 1)² + (2 - 2)² = 9，成立。<br>由过圆上点的切线公式 (x0 - a)(x - a) + (y0 - b)(y - b) = r²，代入 a = 1, b = 2, (x0, y0) = (4, 2)：<br>(4 - 1)(x - 1) + (2 - 2)(y - 2) = 9 ⇒ 3(x - 1) = 9 ⇒ x = 4。<br>故切线方程为 x = 4（一条垂直于 x 轴的直线）。' },

        { type: 'heading', text: '三、圆与圆的位置关系' },
        { type: 'keypoint', label: '重点·位置判定', text: '设两圆圆心距为 d、半径分别为 r1、r2（不妨设 r1 ≥ r2）。<br><strong>外离</strong>：d &gt; r1 + r2；<br><strong>外切</strong>：d = r1 + r2；<br><strong>相交</strong>：|r1 - r2| &lt; d &lt; r1 + r2；<br><strong>内切</strong>：d = |r1 - r2|；<br><strong>内含</strong>：d &lt; |r1 - r2|（同心是特例 d = 0）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">两圆的五种位置关系（圆心距 d 与半径 r1、r2 比较）</text><circle cx="70" cy="120" r="32" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="135" cy="120" r="32" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="102" y="178" font-size="15" fill="#2b5b9e" text-anchor="middle">外离</text><circle cx="235" cy="120" r="32" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="299" cy="120" r="32" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="267" y="178" font-size="15" fill="#2b5b9e" text-anchor="middle">外切</text><circle cx="370" cy="120" r="32" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="420" cy="120" r="32" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="395" y="178" font-size="15" fill="#2b5b9e" text-anchor="middle">相交</text><circle cx="520" cy="120" r="32" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="552" cy="120" r="18" fill="#eef4fc" stroke="#4a7de0" stroke-width="2.5"/><text x="536" y="178" font-size="15" fill="#2b5b9e" text-anchor="middle">内切</text><circle cx="630" cy="120" r="32" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="630" cy="120" r="14" fill="#eef4fc" stroke="#4a7de0" stroke-width="2.5"/><text x="630" y="178" font-size="15" fill="#2b5b9e" text-anchor="middle">内含</text><text x="340" y="218" font-size="15" fill="#33536e" text-anchor="middle">外离、外切：两圆无公共点，外切时仅有一个公共点（相切点）</text><text x="340" y="244" font-size="15" fill="#33536e" text-anchor="middle">相交：两圆有两个公共点，公共弦所在直线由两圆方程相减得到</text><text x="340" y="270" font-size="15" fill="#33536e" text-anchor="middle">内切、内含：一圆在另一圆内部；内含时 d 越小越接近同心（特例）</text></svg>', caption: '图3　两圆的五种位置关系，由圆心距 d 与两圆半径和、半径差比较决定。' },
        { type: 'list', items: ['外离、外切：无公共点；外切仅一个公共点', '相交：两个公共点，公共弦由两圆方程相减得到', '内切、内含：一圆在另一圆内部，内含时 d 越小越接近同心'] },
        { type: 'table', headers: ['位置关系', '圆心距 d 与半径关系', '公共点个数'], rows: [['外离', 'd 大于 r1 与 r2 之和', '0'], ['外切', 'd 等于 r1 与 r2 之和', '1'], ['相交', '|r1 - r2| 小于 d 小于 r1 + r2', '2'], ['内切', 'd 等于 |r1 - r2|', '1'], ['内含', 'd 小于 |r1 - r2|', '0']] },
        { type: 'example', label: '例题3', text: '判断圆 C1: x² + y² = 1 与圆 C2: (x - 3)² + y² = 1 的位置关系。<br><br><strong>解</strong>：C1 圆心 O1(0,0)、半径 r1 = 1；C2 圆心 O2(3,0)、半径 r2 = 1。<br>圆心距 d = |O1O2| = 3。<br>两圆半径和 r1 + r2 = 2，因为 d = 3 &gt; 2 = r1 + r2，两圆 <strong>外离</strong>，没有公共点。' },
        { type: 'example', label: '例题4', text: '求圆 C1: x² + y² = 5 与圆 C2: (x - 1)² + y² = 3 的公共弦所在直线方程。<br><br><strong>解</strong>：将两圆方程相减消去二次项：<br>C1: x² + y² = 5；<br>C2 展开：x² - 2x + 1 + y² = 3，即 x² + y² - 2x = 2。<br>两式相减（C1 - C2）：(x² + y²) - (x² + y² - 2x) = 5 - 2，得 2x = 3，故 x = 1.5。<br>这就是两圆公共弦所在的直线方程。' },
        { type: 'tip', label: '提示', text: '<strong>公共弦所在直线</strong>：当两圆相交时，将两圆的一般方程相减，消去 x²、y² 项，得到的一次方程就是公共弦所在直线。求公共弦长时，可先求该直线到某一圆心的距离，再用弦长公式 2√(r² - d²)。若相减后得到常数等式，则两圆相切（公共弦退化为一个点）。' },

        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['直线与圆：比较 d 与 r（几何法）或联立看 Δ（代数法）', '弦长 = 2√(r² - d²)，d 为圆心到弦的距离', '过圆上点切线：平移代入 (x0-a)(x-a)+(y0-b)(y-b)=r²', '圆与圆：比较 d 与 r1+r2、|r1-r2| 五种情形', '公共弦：两圆方程相减所得直线方程'] }
      ],
      exercises: [
        { type: 'choice', question: '圆的一条切线到圆心的距离等于？', options: ['圆的半径 r', '圆的直径 2r', '圆心到切点的连线长的一半', '半弦长'], answer: '圆的半径 r', explanation: '圆心到切线的距离等于圆的半径 r。因为切线与圆只有一个公共点（切点），且半径垂直于切线，所以从圆心向切线作垂线，垂足正是切点，垂线段长度就是半径。这是切线的根本几何特征，也是判断直线与圆相切的常用依据之一。' },
        { type: 'choice', question: '当两圆外切时，两圆的圆心距 d 等于？', options: ['|r1 - r2|', 'r1 + r2', '√(r1² + r2²)', '0'], answer: 'r1 + r2', explanation: '当两圆外切时，两圆有且仅有一个公共点，且该点位于两圆心连线上，圆心之间的距离恰好等于两圆半径之和，即 d = r1 + r2。外切是两圆从相离到相交的临界状态，需与内切 d = |r1 - r2| 以及外离 d > r1 + r2 区分开来。' },
        { type: 'choice', question: '当直线与圆相交时，弦长公式为？', options: ['2√(r² - d²)', '√(r² - d²)', '2√(r² + d²)', 'r² - d²'], answer: '2√(r² - d²)', explanation: '直线与圆相交时，设圆心到直线的距离为 d、圆的半径为 r，则半弦长由勾股定理得 √(r² - d²)，整条弦长即为 2√(r² - d²)。该公式在求解相交弦长时最常用，只需知道半径与圆心到直线的距离即可，无需先求交点坐标。' },
        { type: 'fill', question: '已知圆的半径为 3，且圆心到一条直线的距离为 0，则该直线与圆相交所得的弦长为 ____。（填写数字）', answer: '6', explanation: '圆的半径为 3，圆心到直线的距离为 0，说明该直线经过圆心，与圆相交于一条直径的两个端点。此时弦长就是圆的直径，即 2r = 2×3 = 6。也可由弦长公式弦长 = 2√(r² - d²) = 2√(9 - 0) = 6 得到同样结果，两种方法一致。' },
        { type: 'fill', question: '判断两圆的位置关系：圆 C1: x² + y² = 4 与圆 C2: (x - 5)² + y² = 4，它们的位置关系是 ____。', answer: '外离', explanation: '圆 C1: x² + y² = 4 的圆心为 (0,0)、半径 r1 = 2；圆 C2: (x - 5)² + y² = 4 的圆心为 (5,0)、半径 r2 = 2。两圆圆心距 d = 5，而 r1 + r2 = 4。因为 d = 5 > 4 = r1 + r2，两圆没有公共点且彼此分离，故位置关系为外离。' }
      ]
    },

    /* ---------------- 第2课时 椭圆 ---------------- */
    {
      id: 'xb1-u5-l2',
      name: '椭圆',
      chapter: '第三章 圆锥曲线的方程 · 3.1',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、椭圆的定义' },
        { type: 'paragraph', text: '椭圆是圆锥曲线中最基础的一类。它的定义源于一个非常直观的几何事实：平面内到两个定点距离之和为常数的点的轨迹。生活中常见的椭圆形餐盘、行星绕日的轨道，都与椭圆密切相关。' },
        { type: 'keypoint', label: '重点·定义', text: '平面内与两个定点 F1、F2 的距离之和等于常数（大于 |F1F2|）的点的轨迹叫做椭圆。这两个定点叫做椭圆的 <strong>焦点</strong>，两焦点间的距离叫做 <strong>焦距</strong>，记作 2c。设常数为 2a，则条件为 <strong>2a &gt; |F1F2| = 2c &gt; 0</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">椭圆的定义：到两定点 F1、F2 的距离之和恒为 2a</text><ellipse cx="340" cy="140" rx="220" ry="95" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="200" cy="140" r="5" fill="#e05d44"/><circle cx="480" cy="140" r="5" fill="#e05d44"/><text x="200" y="128" font-size="15" fill="#c0392b" text-anchor="middle">F1</text><text x="480" y="128" font-size="15" fill="#c0392b" text-anchor="middle">F2</text><line x1="200" y1="140" x2="340" y2="55" stroke="#5a7a2a" stroke-width="2" stroke-dasharray="4 3"/><line x1="480" y1="140" x2="340" y2="55" stroke="#5a7a2a" stroke-width="2" stroke-dasharray="4 3"/><text x="340" y="45" font-size="14" fill="#5a7a2a" text-anchor="middle">|PF1|+|PF2|=2a</text><text x="340" y="215" font-size="15" fill="#33536e" text-anchor="middle">绳圈长度固定为 2a，笔尖绷紧移动画出椭圆</text><text x="340" y="240" font-size="15" fill="#33536e" text-anchor="middle">定值条件：2a &gt; |F1F2| = 2c &gt; 0，否则轨迹退化</text><text x="340" y="265" font-size="15" fill="#33536e" text-anchor="middle">两定点 F1、F2 叫做椭圆的焦点，焦距为 |F1F2| = 2c</text></svg>', caption: '图1　椭圆的定义：平面内到两定点（焦点）距离之和为常数 2a 的点的轨迹。' },
        { type: 'keypoint', label: '重点·焦点与焦距', text: '记两焦点为 F1、F2，焦距 |F1F2| = 2c，常数和为 2a。三者关系：<strong>a &gt; c &gt; 0</strong>，且 a² = b² + c²（b 为短半轴）。b 是由 a、c 决定的量，并非独立参数。椭圆的“扁平程度”由比值 c/a 决定。' },
        { type: 'list', items: ['椭圆是到两焦点距离之和为常数 2a 的点的轨迹', '常数条件：2a 大于焦距 2c，即 2a > 2c > 0', '焦距 2c 是两焦点间距离，a、b、c 满足 a² = b² + c²'] },
        { type: 'warn', label: '易错', text: '椭圆定义中的常数 2a 必须满足 <strong>2a &gt; 2c</strong>。若 2a = 2c，轨迹退化为线段 F1F2；若 2a &lt; 2c，则无轨迹（满足条件的点不存在）。因此见到“到两定点距离之和为常数”要立即检查该常数是否大于焦距。' },

        { type: 'heading', text: '二、椭圆的标准方程' },
        { type: 'keypoint', label: '重点·焦点在 x 轴', text: '焦点在 x 轴上时，标准方程为 <strong>x²/a² + y²/b² = 1</strong>（a &gt; b &gt; 0），焦点为 (±c, 0)，其中 c² = a² - b²。此时长轴在 x 轴，长轴长 2a，短轴长 2b。' },
        { type: 'keypoint', label: '重点·焦点在 y 轴', text: '焦点在 y 轴上时，标准方程为 <strong>y²/a² + x²/b² = 1</strong>（a &gt; b &gt; 0），焦点为 (0, ±c)。注意此时 y² 项的分母是 a²（较大），x² 项的分母是 b²，切勿与焦点在 x 轴的形式写反。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">标准方程 x²/a² + y²/b² = 1（a &gt; b &gt; 0，焦点在 x 轴）</text><line x1="60" y1="150" x2="620" y2="150" stroke="#7a5aa0" stroke-width="1.5"/><line x1="340" y1="30" x2="340" y2="260" stroke="#7a5aa0" stroke-width="1.5"/><ellipse cx="340" cy="150" rx="230" ry="110" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="110" cy="150" r="5" fill="#e05d44"/><circle cx="570" cy="150" r="5" fill="#e05d44"/><text x="110" y="138" font-size="14" fill="#c0392b" text-anchor="middle">F1(-c,0)</text><text x="570" y="138" font-size="14" fill="#c0392b" text-anchor="middle">F2(c,0)</text><text x="50" y="155" font-size="14" fill="#2b5b9e">-a</text><text x="610" y="155" font-size="14" fill="#2b5b9e">a</text><text x="348" y="48" font-size="14" fill="#5a7a2a">b</text><text x="348" y="272" font-size="14" fill="#5a7a2a">-b</text><text x="340" y="240" font-size="15" fill="#33536e" text-anchor="middle">顶点：(±a, 0)、(0, ±b)；长轴 2a，短轴 2b，焦距 2c</text><text x="340" y="264" font-size="15" fill="#33536e" text-anchor="middle">关系式：a² = b² + c²（即 b² = a² - c²）</text></svg>', caption: '图2　焦点在 x 轴的标准方程，标注顶点、焦点与 a、b、c 的关系。' },
        { type: 'table', headers: ['项目', '焦点在 x 轴', '焦点在 y 轴'], rows: [['标准方程', 'x²/a² + y²/b² = 1', 'y²/a² + x²/b² = 1'], ['焦点坐标', '(±c, 0)', '(0, ±c)'], ['a, b 关系', 'a 大于 b 大于 0，b² = a² - c²', 'a 大于 b 大于 0，b² = a² - c²'], ['判断方法', 'x² 项分母较大（为 a²）', 'y² 项分母较大（为 a²）']] },
        { type: 'example', label: '例题1', text: '已知椭圆的焦点在 x 轴上，且 a = 5，b = 3，求椭圆标准方程。<br><br><strong>解</strong>：焦点在 x 轴，设方程为 x²/a² + y²/b² = 1（a &gt; b &gt; 0）。<br>由 a = 5 得 a² = 25；由 b = 3 得 b² = 9。<br>故椭圆方程为 <strong>x²/25 + y²/9 = 1</strong>。此时 c² = a² - b² = 25 - 9 = 16，c = 4，焦点为 (±4, 0)。' },

        { type: 'heading', text: '三、椭圆的几何性质' },
        { type: 'keypoint', label: '重点·范围与顶点', text: '以 x²/a² + y²/b² = 1 为例：<strong>范围</strong> |x| ≤ a，|y| ≤ b；<strong>对称轴</strong> 为 x 轴、y 轴，<strong>对称中心</strong> 为原点；<strong>顶点</strong> 为 (±a, 0)、(0, ±b)；<strong>长轴</strong> 2a，<strong>短轴</strong> 2b，<strong>焦距</strong> 2c。' },
        { type: 'keypoint', label: '重点·离心率', text: '椭圆的 <strong>离心率</strong> e = c/a，取值范围 <strong>0 &lt; e &lt; 1</strong>。e 越接近 0，椭圆越接近圆；e 越接近 1，椭圆越扁。离心率刻画的是椭圆的“扁平程度”，与椭圆的绝对大小无关。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">离心率 e = c/a ∈ (0,1)：e 越接近 1，椭圆越扁</text><ellipse cx="130" cy="130" rx="90" ry="78" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="130" y="235" font-size="14" fill="#33536e" text-anchor="middle">e 较小（接近 0）</text><ellipse cx="340" cy="130" rx="105" ry="58" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="340" y="235" font-size="14" fill="#33536e" text-anchor="middle">e 中等</text><ellipse cx="550" cy="130" rx="118" ry="34" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="550" y="235" font-size="14" fill="#33536e" text-anchor="middle">e 接近 1</text><text x="340" y="272" font-size="15" fill="#33536e" text-anchor="middle">e = 0 时椭圆退化为圆；e 越接近 1，椭圆越扁</text><text x="340" y="296" font-size="15" fill="#33536e" text-anchor="middle">离心率只反映“扁圆程度”，与椭圆大小无关；范围 0 &lt; e &lt; 1</text></svg>', caption: '图3　离心率 e 越大椭圆越扁，e 接近 0 时近似为圆。' },
        { type: 'list', items: ['范围 |x|≤a、|y|≤b，对称于坐标轴，中心在原点', '顶点 (±a,0)、(0,±b)，长轴 2a、短轴 2b、焦距 2c', '离心率 e=c/a∈(0,1)，e 越接近 1 椭圆越扁'] },
        { type: 'warn', label: '易错', text: '写标准方程时先 <strong>判断焦点位置</strong>：看 a² 在 x² 项还是 y² 项下（a² 始终对应长轴）。焦点在 x 轴时 x² 项分母大，焦点在 y 轴时 y² 项分母大。切勿凭“x、y 谁先写”判断，而要看分母大小。已知顶点求 a、b 时，长轴顶点对应 a，短轴顶点对应 b。' },
        { type: 'example', label: '例题2', text: '求焦点在 x 轴上，且经过 (3, 0) 与 (0, 2) 两点的椭圆标准方程。<br><br><strong>解</strong>：焦点在 x 轴，设方程为 x²/a² + y²/b² = 1。<br>点 (3, 0) 在 x 轴上，是长轴端点，故 a = 3，a² = 9；<br>点 (0, 2) 在 y 轴上，是短轴端点，故 b = 2，b² = 4。<br>所以椭圆方程为 <strong>x²/9 + y²/4 = 1</strong>。注意 (3,0) 对应长轴顶点，说明 3 &gt; 2，符合 a &gt; b。' },
        { type: 'example', label: '例题3', text: '已知椭圆的离心率 e = 1/2，且长轴长 2a = 8，求椭圆标准方程（焦点在 x 轴）。<br><br><strong>解</strong>：由 2a = 8 得 a = 4，a² = 16。<br>由 e = c/a = 1/2 得 c = a/2 = 2，故 c² = 4。<br>由 b² = a² - c² = 16 - 4 = 12。<br>焦点在 x 轴，故方程为 <strong>x²/16 + y²/12 = 1</strong>。' },
        { type: 'tip', label: '提示', text: '求椭圆标准方程的常用思路：① <strong>定位</strong>——判断焦点在 x 轴还是 y 轴（或中心是否在原点）；② <strong>定量</strong>——求出 a²、b²；③ <strong>写方程</strong>。若焦点位置不明，可设 mx² + ny² = 1（m, n &gt; 0, m ≠ n）待定系数；若知定义条件（如 2a、2c）优先用定义法。' },

        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['定义：到两定点距离之和为常数 2a（2a>2c>0）', '标准方程分焦点在 x 轴、y 轴两种', 'a²=b²+c²，焦点位置看 a² 所在项', '离心率 e=c/a，0<e<1，越接近 1 越扁', '求方程：先定位再定量，或用定义法'] }
      ],
      exercises: [
        { type: 'choice', question: '椭圆 x²/9 + y²/4 = 1 中，a、b、c 的值分别为？', options: ['a=3, b=2, c=√5', 'a=2, b=3, c=√5', 'a=3, b=2, c=√13', 'a=9, b=4, c=5'], answer: 'a=3, b=2, c=√5', explanation: '椭圆 x²/9 + y²/4 = 1 中，分母较大的在 x² 项下，故 a² = 9、b² = 4，得 a = 3、b = 2。由关系式 a² = b² + c² 得 c² = 9 - 4 = 5，所以 c = √5。注意 a 始终是长半轴（较大者），c 为半焦距，三者满足 a > b > 0 且 a² = b² + c²。' },
        { type: 'choice', question: '对于椭圆，离心率 e = c/a 的取值范围是？', options: ['[0, 1]', '(0, 1)', '(0, 1]', '[0, 1)'], answer: '(0, 1)', explanation: '椭圆的离心率定义为 e = c/a。由定义要求 2a 大于 2c 大于 0，即 a 大于 c 大于 0，因此 c/a 介于 0 与 1 之间，故离心率的取值范围是 (0, 1)。当 e 越接近 0 时椭圆越接近圆，e 越接近 1 时椭圆越扁，e 不能等于 0 或 1。' },
        { type: 'choice', question: '焦点在 y 轴上，且 a = 2，b = 1 的椭圆标准方程是？', options: ['x²/4 + y² = 1', 'y²/4 + x² = 1', 'x²/4 + y²/1 = 1', 'x² + y²/4 = 1'], answer: 'y²/4 + x² = 1', explanation: '焦点在 y 轴上时，椭圆标准方程形式为 y²/a² + x²/b² = 1（a > b > 0）。已知 a = 2、b = 1，代入得 y²/4 + x²/1 = 1，即 y²/4 + x² = 1。注意焦点在 y 轴时 y² 项的分母是 a²（较大），切勿与焦点在 x 轴的形式混淆写反。' },
        { type: 'fill', question: '椭圆 x²/25 + y²/16 = 1 的焦距 2c = ____。（填写数字）', answer: '6', explanation: '椭圆 x²/25 + y²/16 = 1 中 a² = 25、b² = 16，故 a = 5、b = 4。由关系式 a² = b² + c² 得 c² = 25 - 16 = 9，所以半焦距 c = 3，焦距 2c = 6。焦距表示两焦点之间的距离，等于 2c 而不是 c，求值时需先由 a² = b² + c² 算出 c 再乘以 2，切勿误填为 3。' },
        { type: 'fill', question: '焦点在 x 轴上，且经过 (5, 0) 与 (0, 3) 两点的椭圆标准方程为 ____。', answer: 'x²/25 + y²/9 = 1|x²/25+y²/9=1', explanation: '椭圆过点 (5,0) 与 (0,3)，且焦点在 x 轴上，标准方程为 x²/a² + y²/b² = 1。点 (5,0) 在 x 轴上，是长轴端点，故 a = 5；点 (0,3) 在 y 轴上，是短轴端点，故 b = 3。代入得 x²/25 + y²/9 = 1。判断焦点位置可看哪个轴上的顶点离原点更远。' }
      ]
    }

  );
})();
