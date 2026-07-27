/* ============================================================
 * 高一数学 · 必修 第一册 · 第四章 指数函数与对数函数
 * 第15课时：对数（人教A版 §4.3）
 * 第16课时：对数函数（人教A版 §4.4）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;
  v.points.push(

    /* ---------------- 第15课时 对数 ---------------- */
    {
      id: 'bx1-u9-l1',
      name: '对数',
      chapter: '第四章 指数函数与对数函数 · 4.3',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、对数的定义' },
        { type: 'paragraph', text: '对数是指数运算的逆运算。当已知底数和幂的结果、要求指数时，就引入对数。它是解决“指数方程”和解决增长/衰减问题中“求时间”的关键工具。' },
        { type: 'keypoint', label: '重点·对数定义', text: '若 <strong>aᵇ = N</strong>（a &gt; 0 且 a ≠ 1），则 b 叫做以 a 为底 N 的<strong>对数</strong>，记作 <strong>b = logₐN</strong>。<br>其中 a 是<strong>底数</strong>，N 是<strong>真数</strong>（须 N &gt; 0）。<br>即 <strong>aᵇ = N ⇔ b = logₐN</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="180" fill="#eef4fc"/><rect x="60" y="60" width="200" height="56" rx="8" fill="#2b5b9e"/><text x="160" y="95" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">aᵇ = N</text><text x="345" y="95" font-size="22" fill="#2b5b9e" text-anchor="middle">⇔</text><rect x="420" y="60" width="200" height="56" rx="8" fill="#4a7de0"/><text x="520" y="95" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">logₐN = b</text><text x="340" y="150" font-size="14" fill="#33536e" text-anchor="middle">指数式与对数式互化：幂的结果 ⇄ 指数</text></svg>', caption: '图1　指数式 aᵇ=N 与对数式 logₐN=b 等价互化。' },
        { type: 'list', items: ['底数 a &gt; 0 且 a ≠ 1', '真数 N &gt; 0（对数只对正数有意义）', 'logₐ1 = 0（因 a⁰ = 1）', 'logₐa = 1（因 a¹ = a）'] },
        { type: 'heading', text: '二、常用对数与自然对数' },
        { type: 'keypoint', label: '重点·两类特殊对数', text: '以 <strong>10</strong> 为底叫<strong>常用对数</strong>，记作 <strong>lg N = log₁₀N</strong>；<br>以 <strong>e</strong>（无理数，e≈2.718）为底叫<strong>自然对数</strong>，记作 <strong>ln N = logₑN</strong>。<br>它们只是底数固定的“简写”，性质与普通对数一致。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="160" fill="#eef4fc"/><rect x="70" y="55" width="170" height="52" rx="8" fill="#2b5b9e"/><text x="155" y="88" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">logₐN 一般对数</text><rect x="270" y="55" width="160" height="52" rx="8" fill="#4a7de0"/><text x="350" y="88" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">lgN=log₁₀N</text><rect x="460" y="55" width="160" height="52" rx="8" fill="#5a7a2a"/><text x="540" y="88" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">lnN=logₑN</text><text x="340" y="135" font-size="14" fill="#33536e" text-anchor="middle">常用对数(lg)与自然对数(ln)是固定底数的简写</text></svg>', caption: '图2　三类对数：一般 logₐN、常用 lgN、自然 lnN。' },
        { type: 'example', label: '例题1', text: '将指数式化为对数式：2³ = 8 ⇔ log₂8 = 3；10² = 100 ⇔ lg100 = 2；e⁰ = 1 ⇔ ln1 = 0。<br><br><strong>解</strong>：直接按 aᵇ = N ⇔ logₐN = b 互化即可。' },
        { type: 'heading', text: '三、对数的运算性质' },
        { type: 'keypoint', label: '重点·运算律', text: '设 a &gt; 0，a ≠ 1，M、N &gt; 0：<br>① <strong>logₐ(MN) = logₐM + logₐN</strong>（积变和）；<br>② <strong>logₐ(M/N) = logₐM − logₐN</strong>（商变差）；<br>③ <strong>logₐ(Mⁿ) = n·logₐM</strong>（幂提出系数，n 可为任意实数）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="170" fill="#eef4fc"/><rect x="40" y="55" width="190" height="52" rx="8" fill="#2b5b9e"/><text x="135" y="88" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">logₐ(MN)=+</text><rect x="250" y="55" width="190" height="52" rx="8" fill="#4a7de0"/><text x="345" y="88" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">logₐ(M/N)=−</text><rect x="460" y="55" width="190" height="52" rx="8" fill="#5a7a2a"/><text x="555" y="88" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">logₐMⁿ=n·logₐM</text><text x="340" y="140" font-size="14" fill="#33536e" text-anchor="middle">积变和、商变差、幂提系数</text></svg>', caption: '图3　对数运算三性质：积→和、商→差、幂→系数。' },
        { type: 'example', label: '例题2', text: '计算 log₂8 + log₂4。<br><br><strong>解</strong>：log₂8 = log₂(2³) = 3，log₂4 = log₂(2²) = 2，故原式 = 3 + 2 = <strong>5</strong>。也可先合并：log₂(8×4) = log₂32 = 5。' },
        { type: 'heading', text: '四、运算性质与换底' },
        { type: 'table', headers: ['运算', '公式', '口诀'], rows: [['积', 'logₐ(MN)=logₐM+logₐN', '积变和'], ['商', 'logₐ(M/N)=logₐM−logₐN', '商变差'], ['幂', 'logₐMⁿ=n·logₐM', '幂提系数'], ['换底', 'logₐb=logₑb/logₑa', '换成同底再算']] },
        { type: 'warn', label: '易错', text: '对数最易错在<strong>真数必须为正</strong>。注意 <strong>logₐ(M+N) ≠ logₐM + logₐN</strong>（对数没有“和变和”），只有“积变和”。同样 <strong>logₐM − logₐN = logₐ(M/N)</strong> 而非 logₐ(M−N)。运算前先确认 M、N &gt; 0。' },
        { type: 'tip', label: '记忆', text: '对数运算口诀：<strong>“积变加、商变减、幂提前”</strong>。凡是见到对数里的乘积、商、幂，立刻想到拆成加减与系数。求解对数方程时，常用<strong>换底公式</strong>把不同底统一，再借助 lg、ln 的已知值计算。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['aᵇ=N ⇔ logₐN=b（a>0,a≠1,N>0）', 'lgN=log₁₀N，lnN=logₑN', '积变和、商变差、幂提系数', 'logₐ1=0，logₐa=1', '真数必须为正，注意 logₐ(M+N)≠两对数和'] },
        { type: 'reading', text: '换底公式 <strong>logₐb = log_c b / log_c a</strong>（c 任意正数且 ≠1）是对数计算的通行证：无论底数多“怪”，都能换成常用 lg 或自然 ln 来计算。特别地，取 c = b 可得 logₐb = 1/log_b a，这一对称性在化简连乘对数（如 log₂3·log₃4·log₄5…）时能链式消底，非常巧妙。' }
      ],
      exercises: [
        { type: 'choice', question: '将 2³ = 8 改写成对数式，正确的是？', options: ['log₂8 = 3', 'log₈2 = 3', 'log₂3 = 8', 'log₃8 = 2'], answer: 'log₂8 = 3', explanation: '由 aᵇ=N ⇔ logₐN=b，2³=8 对应底数 a=2、指数 b=3、幂 N=8，故对数式为 log₂8=3。' },
        { type: 'fill', question: 'log₂8 + log₂4 = ____。', answer: '5', explanation: 'log₂8=log₂(2³)=3，log₂4=log₂(2²)=2，故和为 3+2=5。也可先合并为 log₂(8×4)=log₂32=5。' },
        { type: 'choice', question: '下列等式恒成立的是（M,N>0）？', options: ['logₐ(M+N)=logₐM+logₐN', 'logₐ(MN)=logₐM+logₐN', 'logₐ(M−N)=logₐM−logₐN', 'logₐ(M/N)=logₐM/logₐN'], answer: 'logₐ(MN)=logₐM+logₐN', explanation: '对数运算性质：积变和，logₐ(MN)=logₐM+logₐN 成立。A 错（对数没有“和变和”）；C 错（商才是差，M−N 不能直接拆）；D 错（商变差不是相除）。故选 B。' },
        { type: 'fill', question: 'ln 1 = ____（填数值）。', answer: '0', explanation: '由 aᵇ=N⇔logₐN=b，ln1=logₑ1，因 e⁰=1，故 ln1=0。' },
        { type: 'choice', question: 'log₂16 的值等于？', options: ['2', '3', '4', '8'], answer: '4', explanation: 'log₂16 是满足 2ˣ=16 的指数 x。因 2⁴=16，故 log₂16=4。' }
      ]
    },

    /* ---------------- 第16课时 对数函数 ---------------- */
    {
      id: 'bx1-u9-l2',
      name: '对数函数',
      chapter: '第四章 指数函数与对数函数 · 4.4',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、对数函数的定义' },
        { type: 'paragraph', text: '对数函数是指数函数的反函数，用来“由结果反求指数”。它在测量震级、酸碱度（pH）、声音分贝等“对数刻度”领域无处不在。' },
        { type: 'keypoint', label: '重点·定义', text: '形如 <strong>y = logₐx</strong>（<strong>a &gt; 0 且 a ≠ 1</strong>）的函数叫<strong>对数函数</strong>。它是 y = aˣ 的<strong>反函数</strong>：自变量 x 是真数，要求 <strong>x &gt; 0</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><path d="M120 170 Q300 170 540 60" fill="none" stroke="#2b5b9e" stroke-width="3"/><path d="M120 60 Q300 60 540 170" fill="none" stroke="#e05d44" stroke-width="3"/><line x1="340" y1="30" x2="340" y2="180" stroke="#999" stroke-dasharray="5,4"/><text x="430" y="80" font-size="14" fill="#2b5b9e" font-weight="bold">a&gt;1 递增</text><text x="250" y="160" font-size="14" fill="#c0392b" font-weight="bold">0&lt;a&lt;1 递减</text></svg>', caption: '图1　对数函数两种形态：a&gt;1 上升，0&lt;a&lt;1 下降，都过 (1,0)。' },
        { type: 'list', items: ['定义域：(0, +∞)（真数必须为正）', '值域：R（全体实数）', '恒过点 (1, 0)，因为 logₐ1 = 0', 'a>1 递增；0<a<1 递减'] },
        { type: 'heading', text: '二、图象与性质' },
        { type: 'keypoint', label: '重点·性质', text: '① <strong>定义域 (0, +∞)，值域 R</strong>；<br>② <strong>恒过点 (1, 0)</strong>；<br>③ a &gt; 1 时<strong>单调递增</strong>，0 &lt; a &lt; 1 时<strong>单调递减</strong>；<br>④ 图象在 <strong>y 轴右侧</strong>，以 <strong>y 轴</strong> 为渐近线（x→0⁺ 时趋近 −∞，a&gt;1 情形）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="160" fill="#eef4fc"/><rect x="50" y="50" width="270" height="52" rx="8" fill="#2b5b9e"/><text x="185" y="83" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">定义域(0,+∞)，值域R</text><rect x="360" y="50" width="270" height="52" rx="8" fill="#4a7de0"/><text x="495" y="83" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">恒过(1,0)，y轴为渐近线</text><text x="340" y="130" font-size="14" fill="#33536e" text-anchor="middle">图象只在 y 轴右侧，且无限逼近 y 轴</text></svg>', caption: '图2　对数函数的共性：定义域正、过 (1,0)、以 y 轴为渐近线。' },
        { type: 'example', label: '例题1', text: '比较 log₂3 与 log₂5 的大小。<br><br><strong>解</strong>：底数 a = 2 &gt; 1，y = log₂x 单调递增。因 3 &lt; 5，故 <strong>log₂3 &lt; log₂5</strong>。' },
        { type: 'heading', text: '三、与指数函数的反函数关系' },
        { type: 'keypoint', label: '重点·互为反函数', text: 'y = aˣ 与 y = logₐx <strong>互为反函数</strong>，它们的图象关于直线 <strong>y = x</strong> 对称，定义域与值域<strong>互换</strong>（指数的值域 (0,+∞) 正是对数的定义域）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><line x1="100" y1="180" x2="580" y2="40" stroke="#999" stroke-dasharray="5,4"/><path d="M140 160 Q300 160 460 70" fill="none" stroke="#2b5b9e" stroke-width="3"/><path d="M140 70 Q300 70 460 160" fill="none" stroke="#e05d44" stroke-width="3"/><text x="340" y="35" font-size="14" fill="#2b5b9e" text-anchor="middle">y = aˣ 与 y = logₐx 关于 y = x 对称</text></svg>', caption: '图3　指数函数与其反函数对数函数关于 y=x 对称。' },
        { type: 'example', label: '例题2', text: '求 f(x) = log₂x 的定义域。<br><br><strong>解</strong>：对数的真数必须为正，故 x &gt; 0，定义域为 <strong>(0, +∞)</strong>。' },
        { type: 'heading', text: '四、不同函数的增长差异' },
        { type: 'table', headers: ['函数', '增长特征', '典型场景'], rows: [['指数函数 aˣ(a>1)', '爆炸式最快增长', '复利、人口'], ['幂函数 xⁿ', '多项式增长', '面积、体积'], ['对数函数 logₐx', '增长最慢', '信息熵、分贝']] },
        { type: 'warn', label: '易错', text: '三大失误：①<strong>定义域写错</strong>，误写成 R（实际 x&gt;0）；②<strong>与指数函数混淆</strong>，把 y=logₐx 当成 y=aˣ；③<strong>比较底数不同的对数</strong>时直接比真数，应先化同底或借中间值（如 0、1）。' },
        { type: 'tip', label: '记忆', text: '对数函数看 a 与 1：a&gt;1 上升、0&lt;a&lt;1 下降；都过 (1,0)、都在 y 轴右侧。比较对数大小<strong>优先化同底</strong>再用单调性；底不同则用 0 或 1 作“分水岭”（如 logₐ1=0、logₐa=1）。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['对数函数 y = logₐx（a>0,a≠1）', '定义域 (0,+∞)，值域 R', '恒过 (1,0)，以 y 轴为渐近线', 'a>1 增，0<a<1 减', '与 y=aˣ 互为反函数，关于 y=x 对称'] },
        { type: 'reading', text: '“增长最慢”的对数函数看似弱势，却在现实中极为有用：它能把跨度极大的数量压缩到易读范围。例如地震震级每差 1 级，能量差约 31.6 倍（对数刻度）；pH 每降 1，氢离子浓度增 10 倍。理解对数，才能正确解读这些“对数尺度”下被压缩但依然真实的信息。' }
      ],
      exercises: [
        { type: 'choice', question: '下列函数中是对数函数的是？', options: ['y = log₂x', 'y = 2ˣ', 'y = log₂(x+1)', 'y = x²'], answer: 'y = log₂x', explanation: '对数函数形如 y = logₐx（a>0,a≠1）。y=log₂x 符合。y=2ˣ 是指数函数，y=log₂(x+1) 真数不是纯 x（是复合），y=x² 是幂函数。故选 y=log₂x。' },
        { type: 'fill', question: '对数函数 y = logₐx（a>0,a≠1）恒过的定点坐标是 ____。', answer: '(1,0)', explanation: '真数 x=1 时 y=logₐ1=0（因 a⁰=1），故对数函数恒过定点 (1,0)。' },
        { type: 'choice', question: '关于 y = log_(1/2)x，正确的是？', options: ['定义域 R', '在 (0,+∞) 递增', '在 (0,+∞) 递减', '过点 (0,1)'], answer: '在 (0,+∞) 递减', explanation: '底数 a=1/2，0<a<1，故 y=log_(1/2)x 在 (0,+∞) 单调递减；定义域为 (0,+∞)（非 R），且过 (1,0) 而非 (0,1)。故选“在 (0,+∞) 递减”。' },
        { type: 'fill', question: 'y = log₃x 的定义域是 ____（用区间表示）。', answer: '(0,+∞)|(0, +∞)', explanation: '对数函数 y = log₃x 的真数必须为正，故要求 x > 0，其定义域为 (0, +∞)。注意对数定义域是 x > 0 而非全体实数，图象只分布在 y 轴右侧。' },
        { type: 'choice', question: '函数 y = 2ˣ 与 y = log₂x 的关系是？', options: ['互为相反数', '互为倒数', '互为反函数', '同一函数'], answer: '互为反函数', explanation: 'y=2ˣ 与 y=log₂x 互为反函数：定义域与值域互换，图象关于直线 y=x 对称。故选“互为反函数”。' }
      ]
    }

  );
})();
