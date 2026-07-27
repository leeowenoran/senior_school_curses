/* ============================================================
 * 高三数学 · 高考复习专题 · 解析几何
 * 第4单元 圆锥曲线（二）：双曲线与抛物线
 * 数据注入：math.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt5');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 双曲线 ---------------- */
    {
      id: 'zt5-u4-l1',
      name: '双曲线',
      chapter: '解析几何复习 · 七、双曲线',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、双曲线的定义' },
        { type: 'paragraph', text: '双曲线是解析几何中三类圆锥曲线之一，与椭圆、抛物线并称。它描述的是平面内到两个定点距离之差为常数的点的轨迹，在天体力学、光学反射等问题中有重要应用。' },
        { type: 'keypoint', label: '重点·定义', text: '平面内与两个定点 F1、F2 的距离的<strong>差的绝对值</strong>等于常数 2a（0 &lt; 2a &lt; 2c，c 为半焦距）的点的轨迹叫做<strong>双曲线</strong>。这两个定点叫做双曲线的<strong>焦点</strong>，两焦点间的距离 2c 叫做焦距。定义中必须带绝对值，且常数严格小于焦距，否则轨迹退化或不存在。' },
        { type: 'paragraph', text: '由定义 ||PF1| - |PF2|| = 2a 可知，满足等式的点的集合构成两支曲线，分别靠近 F1 与 F2。当 2a = 2c 时轨迹退化为从焦点出发的两条射线；当 2a &gt; 2c 时平面内不存在满足条件的点，故必须 0 &lt; 2a &lt; 2c。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">双曲线 x²/a² - y²/b² = 1（焦点在 x 轴）</text><line x1="117" y1="280" x2="563" y2="20" stroke="#7a5aa0" stroke-width="1.6" stroke-dasharray="6 5"/><line x1="117" y1="20" x2="563" y2="280" stroke="#7a5aa0" stroke-width="1.6" stroke-dasharray="6 5"/><text x="572" y="22" font-size="14" fill="#7a5aa0">y=(b/a)x</text><text x="572" y="285" font-size="14" fill="#7a5aa0">y=-(b/a)x</text><path d="M460 150 C 510 128 590 88 660 52" fill="none" stroke="#2b5b9e" stroke-width="3"/><path d="M460 150 C 510 172 590 212 660 248" fill="none" stroke="#2b5b9e" stroke-width="3"/><path d="M220 150 C 170 128 90 88 20 52" fill="none" stroke="#2b5b9e" stroke-width="3"/><path d="M220 150 C 170 172 90 212 20 248" fill="none" stroke="#2b5b9e" stroke-width="3"/><line x1="220" y1="150" x2="460" y2="150" stroke="#4a7de0" stroke-width="2"/><circle cx="220" cy="150" r="5" fill="#4a7de0"/><circle cx="460" cy="150" r="5" fill="#4a7de0"/><text x="332" y="172" font-size="14" fill="#33536e">2a</text><circle cx="201" cy="150" r="6" fill="#e05d44"/><circle cx="479" cy="150" r="6" fill="#e05d44"/><text x="193" y="134" font-size="14" fill="#c0392b">F1</text><text x="483" y="134" font-size="14" fill="#c0392b">F2</text><text x="340" y="294" font-size="14" fill="#33536e" text-anchor="middle">实轴在 x 轴，渐近线过中心且斜率为 ±(b/a)</text></svg>', caption: '图1　焦点在 x 轴的双曲线：两支曲线被渐近线约束，焦点位于实轴两端。' },
        { type: 'heading', text: '二、标准方程' },
        { type: 'keypoint', label: '重点·标准方程', text: '以中心为原点建立坐标系，双曲线有两种标准形式。焦点在 x 轴：x²/a² - y²/b² = 1，焦点 (±c, 0)，渐近线 y = ±(b/a)x；焦点在 y 轴：y²/a² - x²/b² = 1，焦点 (0, ±c)，渐近线 y = ±(a/b)x。其中恒有 c² = a² + b²，离心率 e = c/a &gt; 1。' },
        { type: 'table', headers: ['焦点位置', '标准方程', '焦点坐标', '渐近线'], rows: [['x 轴', 'x²/a² - y²/b² = 1', '(±c, 0)', 'y = ±(b/a)x'], ['y 轴', 'y²/a² - x²/b² = 1', '(0, ±c)', 'y = ±(a/b)x']] },
        { type: 'paragraph', text: '渐近线是双曲线无限接近但永不相交的直线，它是刻画双曲线“张开方向”的关键。判断焦点位置要看<strong>正项</strong>对应的变量：x² 项为正则焦点在 x 轴，此时渐近线斜率为 ±(b/a)；y² 项为正则焦点在 y 轴，渐近线斜率为 ±(a/b)。两者斜率互为倒数，切勿记反。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7fbf3"/><text x="340" y="26" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">等轴双曲线（a = b，e = √2）</text><line x1="180" y1="0" x2="500" y2="320" stroke="#7a5aa0" stroke-width="1.6" stroke-dasharray="6 5"/><line x1="500" y1="0" x2="180" y2="320" stroke="#7a5aa0" stroke-width="1.6" stroke-dasharray="6 5"/><path d="M385 160 C 450 140 540 95 630 42" fill="none" stroke="#5a7a2a" stroke-width="3"/><path d="M385 160 C 450 180 540 225 630 278" fill="none" stroke="#5a7a2a" stroke-width="3"/><path d="M295 160 C 230 140 140 95 50 42" fill="none" stroke="#5a7a2a" stroke-width="3"/><path d="M295 160 C 230 180 140 225 50 278" fill="none" stroke="#5a7a2a" stroke-width="3"/><circle cx="295" cy="160" r="5" fill="#5a7a2a"/><circle cx="385" cy="160" r="5" fill="#5a7a2a"/><text x="340" y="308" font-size="14" fill="#33536e" text-anchor="middle">渐近线互相垂直（斜率 ±1），离心率 e = √2</text></svg>', caption: '图2　等轴双曲线：实半轴与虚半轴相等，两条渐近线互相垂直。' },
        { type: 'heading', text: '三、几何性质' },
        { type: 'keypoint', label: '重点·几何性质', text: '双曲线 x²/a² - y²/b² = 1 的主要几何性质：实轴长 2a、虚轴长 2b、焦距 2c；离心率 e = c/a &gt; 1（e 越大，双曲线开口越开阔）；范围上 |x| ≥ a（x 轴情形）或 |y| ≥ a（y 轴情形）；顶点为 (±a, 0)（x 轴情形）。' },
        { type: 'list', items: ['实轴 2a：连接两顶点的线段，是双曲线“最窄”处的宽度', '虚轴 2b：与实轴垂直、过中心的线段，决定渐近线斜率', '离心率 e = c/a > 1：衡量开口大小，e 越大开口越阔', '范围：x 轴焦点时 |x| ≥ a，y 轴焦点时 |y| ≥ a'] },
        { type: 'keypoint', label: '重点·等轴与共轭', text: '<strong>等轴双曲线</strong>满足 a = b，此时渐近线互相垂直（斜率 ±1），离心率 e = √2。<strong>共轭双曲线</strong>指 x²/a² - y²/b² = 1 与 y²/a² - x²/b² = 1 这一对曲线，它们共用相同的渐近线 y = ±(b/a)x，实虚轴互换。' },
        { type: 'list', items: ['共轭双曲线与原双曲线共用同一对渐近线', '两者实轴与虚轴互换，焦点位置也随之互换', '等轴双曲线的共轭双曲线仍是等轴双曲线'] },
        { type: 'heading', text: '四、焦半径与通径长' },
        { type: 'keypoint', label: '重点·通径长', text: '过焦点且垂直于实轴的弦叫做<strong>通径</strong>，其长度为 <strong>2b²/a</strong>。通径反映了双曲线在焦点附近的“厚度”，是选择题与填空题的常考结论，建议直接记忆。' },
        { type: 'paragraph', text: '通径的两个端点位于 x = ±c（x 轴情形）上，代入标准方程可求得纵坐标 y = ±b²/a，故通径长 = 2b²/a。类似地，椭圆中通径长也为 2b²/a，可对比记忆。' },
        { type: 'heading', text: '五、易错提醒' },
        { type: 'warn', label: '易错', text: '双曲线中 <strong>c² = a² + b²</strong>，而椭圆中 c² = a² - b²，二者<strong>相反</strong>。许多同学套用椭圆公式导致 c 算错，必须区分清楚：双曲线 c 最大（c &gt; a, c &gt; b），椭圆 c 最小（c &lt; a）。' },
        { type: 'warn', label: '易错', text: '双曲线的渐近线斜率<strong>因焦点位置而异</strong>：x 轴焦点为 ±(b/a)，y 轴焦点为 ±(a/b)。另外双曲线有<strong>两支</strong>，定义必须带<strong>绝对值</strong>；若漏掉绝对值，得到的只是一支而非整条双曲线。' },
        { type: 'example', label: '例题1', text: '已知双曲线方程 x²/9 - y²/16 = 1，求其渐近线方程与离心率。<br><br><strong>解</strong>：由方程知 a² = 9，b² = 16，故 a = 3，b = 4，焦点在 x 轴。渐近线为 y = ±(b/a)x = ±(4/3)x。<br>又 c² = a² + b² = 9 + 16 = 25，c = 5，离心率 e = c/a = 5/3。' },
        { type: 'example', label: '例题2', text: '已知双曲线渐近线为 y = ±(3/4)x，且焦点为 (±5, 0)，求双曲线方程。<br><br><strong>解</strong>：焦点在 x 轴且 c = 5，故设方程为 x²/a² - y²/b² = 1，渐近线 y = ±(b/a)x = ±(3/4)x，得 b/a = 3/4，即 b = (3/4)a。<br>由 c² = a² + b² = a² + (9/16)a² = (25/16)a² = 25，得 a² = 16，b² = 9。<br>所以双曲线方程为 x²/16 - y²/9 = 1。' },
        { type: 'tip', label: '提示', text: '已知渐近线求双曲线方程，可先根据渐近线斜率设出 a、b 的比例，再结合 c 或其他条件求出具体数值。若只给渐近线而未指定焦点位置，则还需判断焦点在 x 轴还是 y 轴，两情形方程不同。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="26" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">共轭双曲线（共用渐近线 y = ±(b/a)x）</text><line x1="117" y1="280" x2="563" y2="20" stroke="#7a5aa0" stroke-width="1.6" stroke-dasharray="6 5"/><line x1="117" y1="20" x2="563" y2="280" stroke="#7a5aa0" stroke-width="1.6" stroke-dasharray="6 5"/><path d="M460 150 C 510 128 590 88 660 52" fill="none" stroke="#2b5b9e" stroke-width="3"/><path d="M460 150 C 510 172 590 212 660 248" fill="none" stroke="#2b5b9e" stroke-width="3"/><path d="M220 150 C 170 128 90 88 20 52" fill="none" stroke="#2b5b9e" stroke-width="3"/><path d="M220 150 C 170 172 90 212 20 248" fill="none" stroke="#2b5b9e" stroke-width="3"/><path d="M340 60 C 312 42 272 32 232 27" fill="none" stroke="#e05d44" stroke-width="3"/><path d="M340 60 C 368 42 408 32 448 27" fill="none" stroke="#e05d44" stroke-width="3"/><path d="M340 240 C 312 258 272 268 232 273" fill="none" stroke="#e05d44" stroke-width="3"/><path d="M340 240 C 368 258 408 268 448 273" fill="none" stroke="#e05d44" stroke-width="3"/><text x="340" y="288" font-size="14" fill="#33536e" text-anchor="middle">蓝：x²/a² - y²/b² = 1；红：y²/a² - x²/b² = 1（共轭）</text></svg>', caption: '图3　共轭双曲线：蓝色左右开、红色上下开，二者共用同一对渐近线。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['定义：||PF1| - |PF2|| = 2a，要求 0 &lt; 2a &lt; 2c', '标准方程分焦点在 x 轴与 y 轴两种，注意渐近线斜率不同', 'c² = a² + b²（与椭圆相反），离心率 e = c/a > 1', '等轴双曲线 a = b、e = √2；共轭双曲线共用渐近线', '通径长 2b²/a；易错：渐近线斜率因焦点位置而异、定义带绝对值'] }
      ],
      exercises: [
        { type: 'choice', question: '双曲线的定义中，常数 2a 的取值范围是？', options: ['2a > 2c', '2a = 2c', '0 < 2a < 2c', '2a < 0'], answer: '0 < 2a < 2c', explanation: '双曲线定义要求平面内到两定点距离之差的绝对值为常数 2a，且必须满足 0 < 2a < 2c（c 为两焦点间距离的一半）。若 2a = 2c 轨迹退化为两条射线，若 2a > 2c 则无轨迹，故常数必须严格小于焦距。' },
        { type: 'choice', question: '双曲线 x²/9 - y²/16 = 1 的渐近线方程是？', options: ['y = ±(3/4)x', 'y = ±(4/3)x', 'y = ±(9/16)x', 'y = ±(16/9)x'], answer: 'y = ±(4/3)x', explanation: '对于焦点在 x 轴的双曲线 x²/a² - y²/b² = 1，渐近线为 y = ±(b/a)x。本题 a²=9 得 a=3，b²=16 得 b=4，故渐近线为 y = ±(4/3)x。应当看清斜率是 b/a 而非 a/b。' },
        { type: 'choice', question: '关于双曲线中 a、b、c 的关系，下列说法正确的是？', options: ['与椭圆相同：c² = a² - b²', 'c² = a² + b²，与椭圆相反', 'c² = b² - a²', 'c² = a² × b²'], answer: 'c² = a² + b²，与椭圆相反', explanation: '双曲线中 a、b、c 满足 c² = a² + b²，其中 c 为半焦距，a 为实半轴，b 为虚半轴。这与椭圆 c² = a² - b² 正好相反，是双曲线与椭圆最重要的区别之一，极易混淆，务必记牢。' },
        { type: 'fill', question: '等轴双曲线满足 a = b，此时离心率 e = ____。', answer: '√2', explanation: '等轴双曲线即实半轴与虚半轴相等 a = b，由 c² = a² + b² = 2a² 得 c = √2·a，离心率 e = c/a = √2。等轴双曲线的渐近线互相垂直（斜率为 ±1），是解析几何中的重要特例。' },
        { type: 'fill', question: '双曲线 y²/4 - x²/5 = 1 的焦点在 ____ 轴上。（填“x”或“y”）', answer: 'y', explanation: '方程形如 y²/a² - x²/b² = 1，正项对应的变量是 y，故焦点在 y 轴上，焦点坐标为 (0, ±c)，其中 c² = a² + b² = 4 + 5 = 9，c = 3，焦点为 (0, ±3)。判断焦点位置看正项对应的变量即可。' }
      ]
    },

    /* ---------------- 第2课时 抛物线 ---------------- */
    {
      id: 'zt5-u4-l2',
      name: '抛物线',
      chapter: '解析几何复习 · 八、抛物线',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、抛物线的定义' },
        { type: 'paragraph', text: '抛物线是圆锥曲线中最简单的一类，它只有一个焦点、一条准线。抛物线在物理上对应抛体运动轨迹，在工程上广泛用于抛物线天线、桥梁拱形等设计，是高考解析几何的必考内容。' },
        { type: 'keypoint', label: '重点·定义', text: '平面内与一个<strong>定点 F（焦点）</strong>和一条<strong>定直线 l（准线）</strong>的距离<strong>相等</strong>的点的轨迹叫做<strong>抛物线</strong>。定点 F 不在定直线 l 上。这个“到定点与到定直线距离相等”的几何特征是抛物线的本质，也是推导标准方程与解题的出发点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="26" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">抛物线 y² = 2px（p &gt; 0，开口向右）</text><line x1="40" y1="150" x2="660" y2="150" stroke="#4a7de0" stroke-width="1.4" stroke-dasharray="5 5"/><line x1="160" y1="40" x2="160" y2="260" stroke="#e05d44" stroke-width="2.2"/><text x="150" y="285" font-size="14" fill="#c0392b" text-anchor="middle">准线 x = -p/2</text><path d="M220 150 Q 340 70 620 40" fill="none" stroke="#2b5b9e" stroke-width="3"/><path d="M220 150 Q 340 230 620 260" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="220" cy="150" r="5" fill="#4a7de0"/><text x="196" y="172" font-size="14" fill="#33536e">顶点</text><circle cx="280" cy="150" r="6" fill="#e05d44"/><text x="284" y="135" font-size="14" fill="#c0392b">焦点 F(p/2, 0)</text><text x="340" y="292" font-size="14" fill="#33536e" text-anchor="middle">抛物线上任一点到焦点与到准线距离相等</text></svg>', caption: '图1　开口向右的抛物线：焦点在对称轴上，准线是与对称轴垂直的定直线。' },
        { type: 'heading', text: '二、四种标准方程' },
        { type: 'keypoint', label: '重点·四种标准方程', text: '抛物线标准方程有四种（p &gt; 0）：y² = 2px（焦点 (p/2, 0)，准线 x = -p/2，开口右）；y² = -2px（焦点 (-p/2, 0)，准线 x = p/2，开口左）；x² = 2py（焦点 (0, p/2)，准线 y = -p/2，开口上）；x² = -2py（焦点 (0, -p/2)，准线 y = p/2，开口下）。' },
        { type: 'table', headers: ['方程', '焦点', '准线', '开口方向'], rows: [['y² = 2px', '(p/2, 0)', 'x = -p/2', '右'], ['y² = -2px', '(-p/2, 0)', 'x = p/2', '左'], ['x² = 2py', '(0, p/2)', 'y = -p/2', '上'], ['x² = -2py', '(0, -p/2)', 'y = p/2', '下']] },
        { type: 'paragraph', text: '四种方程的顶点均为坐标原点 (0,0)。一次项变量决定对称轴：含 y² 时对称轴为 x 轴，含 x² 时对称轴为 y 轴。开口方向与一次项系数的正负对应，记住“正右正上、负左负下”（以右侧、上方为正方向）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="22" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">抛物线的四种标准方程与开口方向</text><path d="M120 95 Q 185 72 255 72" fill="none" stroke="#2b5b9e" stroke-width="2.6"/><path d="M120 95 Q 185 118 255 118" fill="none" stroke="#2b5b9e" stroke-width="2.6"/><text x="150" y="140" font-size="13" fill="#33536e" text-anchor="middle">y² = 2px 右</text><path d="M560 95 Q 495 72 425 72" fill="none" stroke="#2b5b9e" stroke-width="2.6"/><path d="M560 95 Q 495 118 425 118" fill="none" stroke="#2b5b9e" stroke-width="2.6"/><text x="490" y="140" font-size="13" fill="#33536e" text-anchor="middle">y² = -2px 左</text><path d="M150 255 Q 120 190 120 120" fill="none" stroke="#2b5b9e" stroke-width="2.6"/><path d="M150 255 Q 180 190 180 120" fill="none" stroke="#2b5b9e" stroke-width="2.6"/><text x="150" y="285" font-size="13" fill="#33536e" text-anchor="middle">x² = 2py 上</text><path d="M530 255 Q 500 190 500 120" fill="none" stroke="#2b5b9e" stroke-width="2.6"/><path d="M530 255 Q 560 190 560 120" fill="none" stroke="#2b5b9e" stroke-width="2.6"/><text x="530" y="285" font-size="13" fill="#33536e" text-anchor="middle">x² = -2py 下</text></svg>', caption: '图2　四种开口：由一次项变量与系数符号决定开口方向与焦点位置。' },
        { type: 'heading', text: '三、几何性质' },
        { type: 'keypoint', label: '重点·几何性质', text: '抛物线 x² = 2py 或 y² = 2px 的几何性质：顶点 (0,0)；对称轴分别为 y 轴或 x 轴；离心率 e = 1（抛物线独有）；焦点到准线距离为 p；抛物线向开口方向无限延伸，没有中心，也无渐近线。' },
        { type: 'list', items: ['顶点恒为原点 (0,0)，是抛物线的最“尖”点', '对称轴由平方项决定：y² 对应 x 轴，x² 对应 y 轴', '离心率 e = 1，这是抛物线区别于椭圆与双曲线的标志', '焦点到准线距离 = p > 0，顶点恰在两者正中间'] },
        { type: 'heading', text: '四、焦参数 p 的几何意义' },
        { type: 'keypoint', label: '重点·p 的几何意义', text: '参数 <strong>p &gt; 0</strong> 的几何意义是<strong>焦点到准线的距离</strong>，它恒为正。焦点到顶点的距离与顶点到准线的距离都等于 p/2。p 越大，抛物线开口越宽阔；p 越小，开口越窄。' },
        { type: 'paragraph', text: '在标准形式中，只要把方程化为 y² = 2px（或另外三种）的样子，系数 2p 即可读出。例如 y² = 6x 对应 2p = 6，p = 3，焦点 (3/2, 0)，准线 x = -3/2。务必先化为标准形式再读 p，否则极易读错。' },
        { type: 'heading', text: '五、易错提醒' },
        { type: 'warn', label: '易错', text: 'p 表示<strong>焦点到准线的距离，恒为正</strong>，并非焦点到顶点的距离（后者是 p/2）。有些同学误以为 p 可正可负，或把 p/2 当作 p，导致焦点、准线位置整体算错。' },
        { type: 'warn', label: '易错', text: '四种开口的<strong>焦点与准线位置各不相同</strong>：开口向右时焦点在正 x 轴、准线在负 x 轴；开口向上时焦点在正 y 轴、准线在负 y 轴。若未先把方程化为标准形式就直接套用，常把焦点、准线写反。' },
        { type: 'example', label: '例题1', text: '求抛物线 y² = -8x 的焦点坐标与准线方程。<br><br><strong>解</strong>：方程形如 y² = -2px（p &gt; 0），开口向左。由 -2p = -8 得 p = 4。<br>焦点为 (-p/2, 0) = (-2, 0)，准线为 x = p/2 = 2。' },
        { type: 'example', label: '例题2', text: '已知抛物线焦点为 (0, 3)，准线为 y = -3，求其标准方程。<br><br><strong>解</strong>：焦点在 y 轴正半轴，故设方程为 x² = 2py（p &gt; 0），开口向上。焦点 (0, p/2) = (0, 3)，得 p/2 = 3，p = 6。<br>所以标准方程为 x² = 12y（此时准线 y = -p/2 = -3，与已知一致）。' },
        { type: 'tip', label: '提示', text: '已知焦点或准线求抛物线方程，先由焦点所在坐标轴判定开口方向，从而确定用哪一种标准形式；再由焦点到顶点的距离 p/2 求出 p，最后写出方程。若只知准线方程，同样可先读 p/2 与方向。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="26" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">抛物线 x² = 2py（p &gt; 0，开口向上）</text><line x1="340" y1="40" x2="340" y2="285" stroke="#4a7de0" stroke-width="1.4" stroke-dasharray="5 5"/><line x1="120" y1="270" x2="560" y2="270" stroke="#e05d44" stroke-width="2.2"/><text x="340" y="290" font-size="14" fill="#c0392b" text-anchor="middle">准线 y = -p/2</text><circle cx="340" cy="210" r="5" fill="#4a7de0"/><text x="352" y="206" font-size="14" fill="#33536e">顶点</text><path d="M340 210 Q 250 160 180 90" fill="none" stroke="#2b5b9e" stroke-width="3"/><path d="M340 210 Q 430 160 500 90" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="340" cy="150" r="6" fill="#e05d44"/><text x="352" y="142" font-size="14" fill="#c0392b">焦点 F(0, p/2)</text><text x="340" y="62" font-size="14" fill="#33536e" text-anchor="middle">顶点到焦点与到准线距离均为 p/2</text></svg>', caption: '图3　开口向上的抛物线：焦点在顶点上方，准线在顶点下方，二者间距为 p。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['定义：到定点（焦点）与定直线（准线）距离相等的点的轨迹', '四种标准方程依开口方向区分，焦点与准线位置随之改变', 'p > 0 表示焦点到准线距离，顶点到焦点与准线均为 p/2', '顶点 (0,0)，对称轴由平方项决定，离心率 e = 1', '易错：先化为标准形式再读 p；四种开口的焦点准线勿写反'] }
      ],
      exercises: [
        { type: 'choice', question: '抛物线 y² = 8x 的焦点坐标是？', options: ['(2, 0)', '(-2, 0)', '(0, 2)', '(0, -2)'], answer: '(2, 0)', explanation: '标准形式 y² = 2px（p > 0）开口向右，焦点为 (p/2, 0)。由 y² = 8x 得 2p = 8，p = 4，焦点横坐标为 p/2 = 2，故焦点为 (2, 0)，准线为 x = -2。' },
        { type: 'choice', question: '抛物线 x² = -6y 的准线方程是？', options: ['y = 3/2', 'y = -3/2', 'x = 3/2', 'x = -3/2'], answer: 'y = 3/2', explanation: '标准形式 x² = -2py（p > 0）开口向下，焦点为 (0, -p/2)，准线为 y = p/2。由 x² = -6y 得 2p = 6，p = 3，准线为 y = p/2 = 3/2（在顶点上方）。开口向下的准线位于顶点上方。' },
        { type: 'choice', question: '关于抛物线中的参数 p，下列说法正确的是？', options: ['p 表示焦点到顶点的距离', 'p 表示焦点到准线的距离且恒为正', 'p 可以为负数', 'p 等于准线到顶点距离的一半'], answer: 'p 表示焦点到准线的距离且恒为正', explanation: '在抛物线四种标准方程中均规定 p > 0，p 的几何意义是焦点到准线的距离，它恒为正。焦点到顶点的距离以及顶点到准线的距离都是 p/2，而非 p 本身，解题时务必牢记这一区别。' },
        { type: 'fill', question: '抛物线 x² = 2py 的焦点到准线的距离为 5，则 p = ____。', answer: '5', explanation: '在标准方程中参数 p 的几何意义就是焦点到准线的距离，题目已说明该距离为 5，故 p = 5（且 p > 0）。此时焦点为 (0, p/2) = (0, 2.5)，准线为 y = -2.5，两者间距恰为 p = 5。' },
        { type: 'fill', question: '抛物线 y² = -4x 的开口方向为 ____。（填“左”“右”“上”“下”）', answer: '左', explanation: '方程形如 y² = -2px（p > 0）时，平方项变量为 y、一次项系数为负，抛物线开口向左。由 y² = -4x 得 2p = 4，p = 2，焦点为 (-1, 0)，准线为 x = 1，故开口向左。' }
      ]
    }

  );
})();
