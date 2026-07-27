/* ============================================================
 * 数学 · 高三总复习专题一 函数与导数
 * 第5单元：导数的概念、意义与运算法则（2 课时）
 * 数据注入：math.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt1');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 导数的概念与几何/物理意义 + 基本公式 ---------------- */
    {
      id: 'zt1-u5-l1',
      name: '导数的概念与几何、物理意义及基本公式',
      chapter: '函数与导数复习 · 五 5.1 导数概念 / 5.2 导数公式',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、从平均变化率到瞬时变化率' },
        { type: 'paragraph', text: '研究函数时，常常关心“一个量随另一个量变化得有多快”。例如汽车行驶中，先算一段时间内的平均速度，再让时间间隔无限缩小，就得到某一瞬间的速度。这种思想正是导数概念的来源：用平均变化率的极限来刻画瞬时变化率。' },
        { type: 'keypoint', label: '重点·平均变化率', text: '函数 f(x) 在区间 [x₀, x₀+Δx] 上的<strong>平均变化率</strong>为 [f(x₀+Δx) − f(x₀)]/Δx，它表示函数在该区间上变化的“平均快慢”。当 Δx 越来越小并趋于 0 时，平均变化率的极限就是<strong>瞬时变化率</strong>，也就是导数。' },
        { type: 'paragraph', text: '平均变化率给出的是“一段”上的整体快慢，而导数给出的是“一点”处的精确快慢。从平均到瞬时，核心操作就是取极限 Δx→0。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">割线随 Q 趋近 P 变为切线</text><path d="M 120 240 Q 320 0 520 240" fill="none" stroke="#2b5b9e" stroke-width="3"/><line x1="180" y1="120" x2="470" y2="120" stroke="#c0392b" stroke-width="2.5"/><line x1="250" y1="111" x2="430" y2="129" stroke="#4a7de0" stroke-width="2" stroke-dasharray="6 4"/><line x1="270" y1="114" x2="400" y2="126" stroke="#4a7de0" stroke-width="2" stroke-dasharray="6 4"/><circle cx="320" cy="120" r="6" fill="#e05d44"/><circle cx="420" cy="150" r="6" fill="#2b5b9e"/><circle cx="370" cy="128" r="5" fill="#2b5b9e"/><text x="320" y="112" font-size="15" fill="#c0392b" text-anchor="middle">P (切点)</text><text x="430" y="146" font-size="15" fill="#2b5b9e">Q</text><text x="378" y="120" font-size="13" fill="#4a7de0">Q′</text><path d="M 392 134 L 362 127" stroke="#7a5aa0" stroke-width="1.5" fill="none"/><path d="M 362 127 L 370 124 M 362 127 L 368 132" stroke="#7a5aa0" stroke-width="1.5" fill="none"/><text x="350" y="160" font-size="13" fill="#7a5aa0">Q → P</text><text x="180" y="285" font-size="14" fill="#33536e">红：切线（斜率 f′(x₀)）；蓝虚线：割线 PQ、PQ′（斜率 = 平均变化率）</text></svg>', caption: '图1　当动点 Q 沿曲线不断向 P 靠近时，割线 PQ 的斜率逐渐逼近切线斜率，即导数 f′(x₀)。' },
        { type: 'keypoint', label: '重点·导数定义', text: '设函数 y=f(x) 在 x₀ 附近有定义，当自变量增量 Δx→0 时，若比值 [f(x₀+Δx) − f(x₀)]/Δx 的极限存在，则称该极限为 f(x) 在 x₀ 处的<strong>导数</strong>，记作 <strong>f′(x₀)</strong>，即 f′(x₀)=lim_{Δx→0} [f(x₀+Δx) − f(x₀)]/Δx。' },
        { type: 'list', items: ['导数 f′(x₀) 是平均变化率的极限，反映 x₀ 处的瞬时变化率', 'lim_{Δx→0} 表示 Δx 无限趋近于 0，但 Δx 本身不等于 0', '导数存在要求左、右极限都存在并且相等'] },
        { type: 'heading', text: '二、导数的几何意义' },
        { type: 'paragraph', text: '把函数 y=f(x) 的图像看作一条曲线，导数与曲线上的切线有着直接联系。这是导数最直观的几何解释，也是高考切线问题的基础。' },
        { type: 'keypoint', label: '重点·几何意义', text: '函数 y=f(x) 在 x=x₀ 处的导数 f′(x₀)，其<strong>几何意义是曲线 y=f(x) 在点 (x₀, f(x₀)) 处切线的斜率</strong>。切线斜率的正负反映函数在该点附近的增减趋势：正为增、负为减。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">切线方程 y − f(x₀) = f′(x₀)(x − x₀)</text><path d="M 90 210 Q 320 30 590 190" fill="none" stroke="#2b5b9e" stroke-width="3"/><line x1="250" y1="77" x2="450" y2="197" stroke="#c0392b" stroke-width="2.5"/><line x1="330" y1="125" x2="390" y2="125" stroke="#5a7a2a" stroke-width="1.5"/><line x1="390" y1="125" x2="390" y2="161" stroke="#5a7a2a" stroke-width="1.5"/><circle cx="330" cy="125" r="6" fill="#e05d44"/><text x="330" y="116" font-size="15" fill="#c0392b" text-anchor="middle">P(x₀, f(x₀))</text><text x="398" y="122" font-size="13" fill="#5a7a2a">Δx</text><text x="398" y="150" font-size="13" fill="#5a7a2a">f′(x₀)Δx</text><text x="250" y="70" font-size="14" fill="#c0392b">切线：斜率 = f′(x₀)</text><text x="100" y="262" font-size="14" fill="#33536e">切线与曲线仅有一个公共点 P，其斜率等于函数在该点的导数。</text></svg>', caption: '图2　曲线在点 P 处的切线，斜率等于 f′(x₀)，切线方程由点斜式写出。' },
        { type: 'keypoint', label: '重点·切线方程', text: '曲线 y=f(x) 在点 (x₀, f(x₀)) 处的切线方程为 <strong>y − f(x₀) = f′(x₀)(x − x₀)</strong>。其中 f′(x₀) 是切线斜率，由导数给出；切点为已知坐标 (x₀, f(x₀))。' },
        { type: 'warn', label: '易错', text: '求切线时务必分清“在 x₀ 处切线”与“过点 (a,b) 的切线”：前者切点已知为 (x₀, f(x₀))，直接求导得斜率即可；后者只知直线经过 (a,b)，切点往往未知，需设切点 (x₀, f(x₀))，利用“斜率相等且点在直线上”列方程解出 x₀，有时会得到多条切线。' },
        { type: 'heading', text: '三、导数的物理意义' },
        { type: 'paragraph', text: '导数不仅在平面几何中有意义，在运动学中同样重要。它把“瞬时”的概念用数学语言严格表达出来，是连接函数与物理世界的桥梁。' },
        { type: 'keypoint', label: '重点·物理意义', text: '若 s=s(t) 表示位移关于时间的函数，则 s′(t₀) 表示物体在 t₀ 时刻的<strong>瞬时速度</strong>；若 v=v(t) 表示速度函数，则 v′(t₀) 表示<strong>瞬时加速度</strong>。导数刻画的就是“变化的快慢”，即变化率。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">位移-时间图像：切线斜率 = 瞬时速度</text><line x1="80" y1="240" x2="620" y2="240" stroke="#33536e" stroke-width="1.5"/><line x1="90" y1="240" x2="90" y2="60" stroke="#33536e" stroke-width="1.5"/><text x="600" y="262" font-size="13" fill="#33536e">t</text><text x="74" y="70" font-size="13" fill="#33536e">s</text><path d="M 90 235 C 200 230, 260 90, 360 95 S 520 160, 600 80" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="300" cy="120" r="6" fill="#e05d44"/><line x1="220" y1="170" x2="400" y2="78" stroke="#c0392b" stroke-width="2.5"/><text x="300" y="112" font-size="15" fill="#c0392b" text-anchor="middle">M(t₀, s(t₀))</text><text x="410" y="80" font-size="14" fill="#c0392b">切线斜率 = v(t₀) = s′(t₀)</text><text x="120" y="262" font-size="14" fill="#33536e">曲线上某点切线斜率表示物体在该时刻的瞬时速度。</text></svg>', caption: '图3　位移-时间图像中，某点切线斜率等于该时刻的瞬时速度 s′(t₀)。' },
        { type: 'tip', label: '提示', text: '<strong>记忆窍门</strong>：导数无处不在“变化率”。几何上是切线斜率（位置变化的快慢），物理上是瞬时速度或加速度（运动变化的快慢）。看到“瞬时”“变化率”这类词，就要想到求导。' },
        { type: 'heading', text: '四、基本初等函数的导数公式' },
        { type: 'paragraph', text: '下表汇总了高考最常用的八个基本初等函数的导数公式。它们是一切求导运算的“原子”，必须熟练到能直接写出，否则后续的运算法则将无法落地。' },
        { type: 'table', headers: ['函数 f(x)', '导数 f′(x)', '说明'], rows: [
          ['C（常数）', '0', '常数函数的导数为 0'],
          ['x^a', 'a·x^(a-1)', '幂函数求导，指数降到系数'],
          ['sin x', 'cos x', '正弦的导数是余弦'],
          ['cos x', '−sin x', '余弦的导数是负正弦'],
          ['e^x', 'e^x', '以 e 为底的指数函数导数不变'],
          ['a^x（a>0 且 a≠1）', 'a^x·ln a', '一般指数函数多乘 ln a'],
          ['ln x', '1/x', '自然对数导数，定义域 x>0'],
          ['log_a x（a>0 且 a≠1）', '1/(x·ln a)', '一般对数导数，定义域 x>0']
        ] },
        { type: 'example', label: '例题1', text: '求 f(x)=x² 在 x=1 处的切线方程。<br><br><strong>解</strong>：先求导数 f′(x)=2x，则切线斜率 k=f′(1)=2。又 f(1)=1，切点坐标为 (1,1)。<br>由点斜式得切线方程 y−1=2(x−1)，化简得 y=2x−1。' },
        { type: 'example', label: '例题2', text: '用导数定义求 f(x)=x² 在 x=0 处的导数。<br><br><strong>解</strong>：根据定义，f′(0)=lim_{Δx→0} [f(0+Δx)−f(0)]/Δx。<br>代入 f(x)=x² 得 f′(0)=lim_{Δx→0} [(Δx)² − 0]/Δx = lim_{Δx→0} Δx = 0。<br>所以 f′(0)=0。这也说明函数 y=x² 在原点处的切线是水平直线 y=0。' },
        { type: 'example', label: '例题3', text: '已知曲线 y=x³ 经过点 (1,1)，求该曲线过点 (1,1) 的切线方程。<br><br><strong>解</strong>：点 (1,1) 在曲线 y=x³ 上（因为 1³=1）。对 y=x³ 求导得 y′=3x²，故在 x=1 处切线斜率 k=3·1²=3。<br>由点斜式得切线方程 y−1=3(x−1)，化简得 y=3x−2。<br>补充：若所给点在曲线上，则所求即该点处切线；若所给点不在曲线上，则需另设切点坐标联立求解。' },
        { type: 'warn', label: '易错', text: '在例题3中，点 (1,1) 恰好在曲线上，因此“过点切线”就是“在该点处切线”。但高考常把所给点设在曲线外，此时必须设切点 (x₀, f(x₀)) 并利用切线经过该点列方程，不能直接把该点代入 f′(x)。审题时先判断点在不在曲线上。' },
        { type: 'list', items: ['常数导数为 0；幂函数把指数拉下做系数', 'sin 导 cos，cos 导 −sin', 'e^x 导数仍是 e^x；a^x 多乘 ln a', 'ln x 导 1/x；log_a x 导 1/(x·ln a)'] },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['导数 f′(x₀)=lim_{Δx→0}[f(x₀+Δx)−f(x₀)]/Δx', '几何意义：曲线在该点处切线的斜率', '物理意义：位移函数导数即瞬时速度', '切线方程：y−f(x₀)=f′(x₀)(x−x₀)', '熟记基本初等函数的导数公式表', '区分“在 x₀ 处切线”与“过点切线”'] }
      ],
      exercises: [
        { type: 'choice', question: '函数 y=f(x) 在 x=x₀ 处的导数 f′(x₀) 的几何意义是？', options: ['曲线 y=f(x) 在 x₀ 处切线的斜率', '曲线 y=f(x) 在 x₀ 处的截距', '函数 f(x) 在 x₀ 处的函数值', '曲线 y=f(x) 在 x₀ 处割线的斜率'], answer: '曲线 y=f(x) 在 x₀ 处切线的斜率', explanation: '根据导数的几何意义，函数 y=f(x) 在 x=x₀ 处的导数 f′(x₀) 表示曲线 y=f(x) 在点 (x₀, f(x₀)) 处切线的斜率。截距、函数值、割线斜率都不是导数的几何含义，故正确选项为曲线在该点切线的斜率。' },
        { type: 'choice', question: '用导数定义求 f(x)=x² 的 f′(0)，结果应为？', options: ['0', '1', '2', '不存在'], answer: '0', explanation: '由定义 f′(0)=lim_{Δx→0}[f(Δx)−f(0)]/Δx = lim_{Δx→0}(Δx)²/Δx = lim_{Δx→0} Δx = 0。因此 f′(0)=0，对应抛物线在原点处的切线是水平直线。选项 1、2 分别是 f′(0.5)、f′(1) 的量级，故不正确。' },
        { type: 'choice', question: '下列基本初等函数的导数，正确的是？', options: ['（sin x）′ = −sin x', '（cos x）′ = sin x', '（e^x）′ = e^x', '（ln x）′ = x'], answer: '（e^x）′ = e^x', explanation: '基本公式：(sin x)′=cos x，(cos x)′=−sin x，(e^x)′=e^x，(ln x)′=1/x。故只有“（e^x）′=e^x”正确；其余三项分别应为 cos x、−sin x、1/x，均不成立。' },
        { type: 'fill', question: '曲线 y=f(x) 在点 (x₀, f(x₀)) 处的切线方程为 y − f(x₀) = ______ · (x − x₀)。', answer: 'f′(x₀)|f撇(x₀)', explanation: '由切线方程公式，曲线 y=f(x) 在点 (x₀, f(x₀)) 处的切线斜率为 f′(x₀)，故切线方程写作 y − f(x₀) = f′(x₀)·(x − x₀)。横线上应填 f′(x₀)，即函数在该点的导数（切线斜率）。' },
        { type: 'fill', question: '若 s=s(t) 表示位移关于时间的函数，则 s′(t) 表示物体在 t 时刻的 ______。', answer: '瞬时速度|瞬时速率|速度', explanation: '导数的物理意义中，位移函数 s(t) 对时间 t 的导数 s′(t) 表示物体在时刻 t 的瞬时速度，它刻画的是位置变化的快慢（瞬时变化率）。因此横线上应填“瞬时速度”。' }
      ]
    },

    /* ---------------- 第2课时 导数的四则运算与复合函数求导 ---------------- */
    {
      id: 'zt1-u5-l2',
      name: '导数的四则运算与复合函数求导',
      chapter: '函数与导数复习 · 五 5.3 运算法则',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、导数的四则运算法则' },
        { type: 'paragraph', text: '掌握了基本初等函数的导数公式后，就可以利用四则运算法则求更复杂的函数导数。四则运算包括加、减、乘、除，以及常数倍，它们都有简洁统一的公式。' },
        { type: 'keypoint', label: '重点·和差法则', text: '若 f(x)、g(x) 均可导，则和差的导数等于导数的和差：<strong>[f(x) ± g(x)]′ = f′(x) ± g′(x)</strong>。该法则可推广到多个函数相加减的情形。' },
        { type: 'keypoint', label: '重点·数乘法则', text: '若 c 为常数，f(x) 可导，则常数倍的导数等于导数的常数倍：<strong>[c·f(x)]′ = c·f′(x)</strong>。计算时常数因子可以提到导数符号之外。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">乘积 f·g 的面积增量与 (fg)′</text><rect x="150" y="70" width="250" height="150" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2"/><rect x="400" y="70" width="70" height="150" fill="#f6c9bf" stroke="#c0392b" stroke-width="2"/><rect x="150" y="20" width="250" height="50" fill="#d6e6bf" stroke="#5a7a2a" stroke-width="2"/><rect x="400" y="20" width="70" height="50" fill="#e2d6f0" stroke="#7a5aa0" stroke-width="2"/><text x="275" y="150" font-size="18" fill="#2b5b9e" text-anchor="middle">f·g</text><text x="435" y="148" font-size="14" fill="#c0392b" text-anchor="middle">g·Δf</text><text x="275" y="50" font-size="14" fill="#5a7a2a" text-anchor="middle">f·Δg</text><text x="435" y="50" font-size="13" fill="#7a5aa0" text-anchor="middle">Δf·Δg</text><text x="150" y="255" font-size="14" fill="#33536e">面积增量 = fΔg + gΔf + ΔfΔg，忽略高阶小量 ΔfΔg 后除以 Δx，得 (fg)′ = f′g + fg′。</text></svg>', caption: '图1　把乘积 f·g 看作矩形面积，增量由三块组成，主部对应 (fg)′ = f′g + fg′。' },
        { type: 'keypoint', label: '重点·乘法法则', text: '若 f(x)、g(x) 均可导，则乘积的导数为 <strong>[f(x)·g(x)]′ = f′(x)·g(x) + f(x)·g′(x)</strong>。可记为“前导后不导，加后导前不导”，两项都要写，不能漏掉任一项。' },
        { type: 'keypoint', label: '重点·除法法则', text: '若 f(x)、g(x) 均可导且 g(x)≠0，则商的导数为 <strong>[f(x)/g(x)]′ = [f′(x)·g(x) − f(x)·g′(x)] / [g(x)]²</strong>。分母是内层函数的平方，分子是“上导乘下减下导乘上”。' },
        { type: 'table', headers: ['运算法则', '公式', '记忆要点'], rows: [
          ['和差', '[f±g]′=f′±g′', '分别求导再相加减'],
          ['数乘', '[c·f]′=c·f′', '常数可提到导数外'],
          ['乘积', '[f·g]′=f′g+fg′', '前导后不导加后导前不导'],
          ['商', '[f/g]′=(f′g−fg′)/g²', '上导乘下减下导乘上，分母平方（g≠0）']
        ] },
        { type: 'warn', label: '易错', text: '使用商法则最易出错：① 必须保证分母 g(x)≠0，否则导数不存在；② 分母是 [g(x)]² 而不是 g′(x)；③ 分子是“f′g − fg′”，中间是减号，常有人误写成 f′/g′ 或忘记整体除以 g²。计算时建议先写公式框架，再代入分子分母。' },
        { type: 'list', items: ['和差法则：各函数分别求导后再相加减', '数乘法则：常数因子可提到导数符号外面', '乘积法则：两项都要，缺一不可', '商法则：分子是“上导乘下减下导乘上”，分母是下方函数的平方'] },
        { type: 'heading', text: '二、复合函数求导（链式法则）' },
        { type: 'paragraph', text: '当函数不是基本初等函数简单相加，而是“函数套函数”时，就要用链式法则。高考中 sin(2x+1)、e^(x²)、ln(3x+2) 等都是典型的复合函数。' },
        { type: 'keypoint', label: '重点·链式法则', text: '对于复合函数 y=f(g(x))，其导数为 <strong>y′ = f′(g(x)) · g′(x)</strong>。即对最外层函数求导（保持内层不变），再逐层乘以内层的导数。本质是“由外向内，层层求导，连乘起来”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">复合函数链式法则 y = f(g(x))</text><rect x="120" y="90" width="90" height="50" rx="8" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2"/><text x="165" y="120" font-size="16" fill="#2b5b9e" text-anchor="middle">x</text><rect x="300" y="90" width="110" height="50" rx="8" fill="#d6e6bf" stroke="#5a7a2a" stroke-width="2"/><text x="355" y="113" font-size="15" fill="#5a7a2a" text-anchor="middle">u = g(x)</text><text x="355" y="132" font-size="13" fill="#5a7a2a" text-anchor="middle">变化率 g′(x)</text><rect x="500" y="90" width="100" height="50" rx="8" fill="#e2d6f0" stroke="#7a5aa0" stroke-width="2"/><text x="550" y="113" font-size="15" fill="#7a5aa0" text-anchor="middle">y = f(u)</text><text x="550" y="132" font-size="13" fill="#7a5aa0" text-anchor="middle">变化率 f′(u)</text><line x1="210" y1="115" x2="296" y2="115" stroke="#33536e" stroke-width="2"/><path d="M 296 115 L 284 109 M 296 115 L 284 121" stroke="#33536e" stroke-width="2" fill="none"/><line x1="410" y1="115" x2="496" y2="115" stroke="#33536e" stroke-width="2"/><path d="M 496 115 L 484 109 M 496 115 L 484 121" stroke="#33536e" stroke-width="2" fill="none"/><text x="340" y="185" font-size="15" fill="#33536e" text-anchor="middle">y′ = f′(u) · g′(x) = f′(g(x)) · g′(x)</text></svg>', caption: '图2　复合函数由 x 经 u=g(x) 再到 y=f(u)，导数沿链路层层相乘。' },
        { type: 'example', label: '例题1', text: '求 y=sin(2x+1) 的导数。<br><br><strong>解</strong>：这是复合函数，令 u=2x+1，则 y=sin u。由链式法则，y′=cos u · u′ = cos(2x+1) · (2x+1)′ = cos(2x+1) · 2。<br>所以 y′=2cos(2x+1)。' },
        { type: 'example', label: '例题2', text: '求 y=e^(x²) 的导数。<br><br><strong>解</strong>：令 u=x²，则 y=e^u。由链式法则，y′=e^u · u′ = e^(x²) · 2x。<br>所以 y′=2x·e^(x²)。注意内层 u=x² 的导数是 2x，不要漏乘。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">商法则 (f/g)′ 的结构</text><rect x="150" y="70" width="380" height="40" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="1.5" rx="6"/><text x="340" y="96" font-size="18" fill="#2b5b9e" text-anchor="middle">f′g − fg′</text><line x1="160" y1="120" x2="520" y2="120" stroke="#33536e" stroke-width="2.5"/><rect x="150" y="130" width="380" height="40" fill="#f6c9bf" stroke="#c0392b" stroke-width="1.5" rx="6"/><text x="340" y="156" font-size="18" fill="#c0392b" text-anchor="middle">g²（g ≠ 0）</text><text x="340" y="205" font-size="14" fill="#33536e" text-anchor="middle">分子“上导乘下减下导乘上”，分母是下方函数的平方。</text></svg>', caption: '图3　商法则形如“分子在上、分母平方在下”，分子中间是减号。' },
        { type: 'example', label: '例题3', text: '求 y=(x²+1)/(x−1) 的导数（x≠1）。<br><br><strong>解</strong>：由商法则，y′=[(x²+1)′(x−1) − (x²+1)(x−1)′]/(x−1)²。<br>其中 (x²+1)′=2x，(x−1)′=1，代入得 y′=[2x(x−1) − (x²+1)]/(x−1)² = (2x²−2x−x²−1)/(x−1)² = (x²−2x−1)/(x−1)²。' },
        { type: 'tip', label: '提示', text: '<strong>链式法则诀窍</strong>：把复合函数“由外向内”一层层剥开求导，外层函数对其变量的导数，乘以内层函数对自身变量的导数，直到最内层是 x。常见结构如 sin(···)、e^(···)、ln(···)、(···)^n，先把外层导数写出，再乘括号里内容的导数。' },
        { type: 'heading', text: '三、综合应用' },
        { type: 'example', label: '例题4', text: '求 y=x²·sin x 的导数。<br><br><strong>解</strong>：由乘积法则 [f·g]′=f′g+fg′，取 f=x²，g=sin x，则 f′=2x，g′=cos x。<br>所以 y′=2x·sin x + x²·cos x。' },
        { type: 'example', label: '例题5', text: '求 y=ln(3x+2) 的导数（要求 3x+2>0）。<br><br><strong>解</strong>：对数 ln u 的导数是 1/u，再乘内层 u=3x+2 的导数。由链式法则，y′=1/(3x+2) · (3x+2)′ = 1/(3x+2) · 3 = 3/(3x+2)。' },
        { type: 'list', items: ['复合函数先设中间变量，由外向内逐层求导', '乘法与复合常结合出现，注意别漏乘内层导数', '商法则牢记分母平方与中间减号', '求导后用导数公式表自查基本函数是否正确'] },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['四则运算：和差、数乘、乘积、商各有固定公式', '链式法则：y=f(g(x)) 则 y′=f′(g(x))·g′(x)', '复合求导“由外向内”，每层都要求导并连乘', '基本初等函数导数公式是所有运算的基础，务必熟记'] }
      ],
      exercises: [
        { type: 'choice', question: '设 f、g 均可导，则 [f(x)·g(x)]′ 等于？', options: ['f′(x)·g′(x)', 'f′(x)·g(x) + f(x)·g′(x)', 'f′(x)·g(x) − f(x)·g′(x)', 'f(x)·g(x)'], answer: 'f′(x)·g(x) + f(x)·g′(x)', explanation: '乘积法则规定 [f·g]′ = f′g + fg′，即“前导后不导加后导前不导”。选项 f′g′ 漏掉了交叉项，f′g−fg′ 是商法则的分子形式，fg 根本没有求导，均不正确。故正确者为 f′g+fg′。' },
        { type: 'choice', question: '设 y=sin(2x+1)，则 y′ 等于？', options: ['cos(2x+1)', '2cos(2x+1)', '−2cos(2x+1)', '2sin(2x+1)'], answer: '2cos(2x+1)', explanation: '这是复合函数，外层 sin u 导数为 cos u，内层 u=2x+1 导数为 2。由链式法则 y′=cos(2x+1)·2=2cos(2x+1)。漏乘内层导数 2 会得到 cos(2x+1)，故正确选项是 2cos(2x+1)。' },
        { type: 'choice', question: '设 y=e^(x²)，则 y′ 等于？', options: ['e^(x²)', '2x·e^(x²)', 'x·e^(x²)', 'e^(2x)'], answer: '2x·e^(x²)', explanation: '令 u=x²，则 y=e^u。由链式法则 y′=e^u·u′=e^(x²)·2x=2x·e^(x²)。注意必须乘内层 u=x² 的导数 2x，漏乘会得到 e^(x²)，故正确者为 2x·e^(x²)。' },
        { type: 'fill', question: '商法则中，[f(x)/g(x)]′ 的分母是 ______（设 g(x)≠0）。', answer: '[g(x)]²|g(x)的平方|g²', explanation: '商法则公式为 [f/g]′ = (f′g − fg′)/g²。分母是内层函数 g(x) 的平方，即 [g(x)]²，而不是 g′(x)（导数）。许多同学会误把分母写成 g′(x)，需特别注意分母是原函数的平方。' },
        { type: 'fill', question: '复合函数 y=f(g(x)) 的导数 y′ = ______ · g′(x)。', answer: 'f′(g(x))|f撇(g(x))', explanation: '链式法则：对复合函数 y=f(g(x)) 求导，应先用外层函数 f 对其变量求导（保持内层 g(x) 不变），再乘以内层函数 g(x) 对 x 的导数 g′(x)，即 y′=f′(g(x))·g′(x)。横线上应填 f′(g(x))。' }
      ]
    }

  );
})();
