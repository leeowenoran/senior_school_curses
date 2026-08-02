/* ============================================================
 * 高二化学 · 选择性必修1 化学反应原理 · 第二章 化学反应速率与化学平衡
 * 课时4：化学反应速率
 * 数据注入：chemistry.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u4',
    name: '化学反应速率',
    chapter: '选择性必修1 化学反应原理 · 第二章 化学反应速率与化学平衡',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、为什么有的反应快有的慢' },
      { type: 'paragraph', text: '同样都是化学变化，快慢却能差出天壤：氢气和氧气点燃瞬间爆炸，而铁生锈要几个月，食物在肚子里消化要几小时。化学上用"反应速率"来衡量一个反应进行的快慢，就像用"速度"衡量汽车跑得快慢一样。知道了速率，才能控制生产快慢、预测反应要多久完成。' },
      { type: 'keypoint', label: '重点·反应速率的定义式', text: '<strong>反应速率 v = Δc / Δt</strong>，即单位时间内某物质浓度的变化量。Δc 用摩尔每升（mol/L），Δt 用秒（s）或分（min），所以速率单位常写作 mol/(L·s) 或 mol/(L·min)。' },
      { type: 'list', items: ['速率描述反应进行的快慢，不是反应进行的程度', '速率越大，反应进行得越快', '常用单位 mol/(L·s) 和 mol/(L·min)', '速率一般指某段时间内的平均速率'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">浓度随时间下降，斜率就是反应速率</text><line x1="80" y1="60" x2="80" y2="240" stroke="#b5651d" stroke-width="2"/><line x1="80" y1="240" x2="620" y2="240" stroke="#b5651d" stroke-width="2"/><text x="40" y="150" font-size="13" fill="#4a3724" text-anchor="middle">浓度</text><text x="350" y="262" font-size="13" fill="#4a3724" text-anchor="middle">时间 t</text><line x1="80" y1="90" x2="580" y2="220" stroke="#d98e3a" stroke-width="3"/><text x="330" y="140" font-size="13" fill="#d98e3a" text-anchor="middle">反应物浓度下降</text><text x="600" y="225" font-size="12" fill="#4a3724" text-anchor="middle">斜率大=快</text><text x="200" y="225" font-size="12" fill="#4a3724" text-anchor="middle">斜率小=慢</text></svg>', caption: '图1　反应物浓度随时间逐渐下降，曲线在某段的平均斜率（浓度变化/时间）就是这段的平均反应速率。' },
      { type: 'heading', text: '二、反应速率的计算' },
      { type: 'paragraph', text: '算速率只要三步：先找出某物质在 Δt 时间内浓度的变化量 Δc，再用 Δc 除以 Δt。注意一定要用"浓度"而不是"物质的量"，因为同样的反应在不同体积里快慢表现不同，浓度才公平。例如 2 升容器中某物质 10 秒减少 0.4 摩尔，浓度减少 0.2 摩尔每升，速率就是 0.02 摩尔每升每秒。' },
      { type: 'example', label: '例题·算反应速率', text: '在 2 升密闭容器中，反应物 A 的浓度在 10 秒内从 1.0 摩尔每升降到 0.8 摩尔每升。求这段时间内 A 的平均反应速率。<br><br><strong>解析</strong>：Δc = 1.0 − 0.8 = 0.2 摩尔每升，Δt = 10 秒。v(A) = Δc / Δt = 0.2 / 10 = 0.02 mol/(L·s)。所以 A 的平均反应速率是 0.02 摩尔每升每秒。' },
      { type: 'warn', label: '易错·浓度与物质的量的区别', text: '<strong>速率公式 v = Δc / Δt 中的 Δc 是浓度变化，不是物质的量变化。</strong>若题目给的是物质的量，要先除以体积 V 变成浓度再算。另外算出来的通常是"平均速率"，代表一段时间内的整体快慢，不等于某一瞬间的瞬时速率。' },
      { type: 'list', items: ['给物质的量时，先除以体积 V 得浓度再代入', 'Δc 用绝对值，速率恒为非负', '算的是一段时间的平均速率，不是瞬时速率', '单位别漏写，摩尔每升每秒或每分'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">不同快慢的速率：曲线陡缓不一样</text><line x1="80" y1="60" x2="80" y2="230" stroke="#b5651d" stroke-width="2"/><line x1="80" y1="230" x2="620" y2="230" stroke="#b5651d" stroke-width="2"/><line x1="80" y1="80" x2="600" y2="200" stroke="#d98e3a" stroke-width="3"/><line x1="80" y1="100" x2="360" y2="200" stroke="#b5651d" stroke-width="3" stroke-dasharray="6 4"/><text x="340" y="150" font-size="12" fill="#d98e3a" text-anchor="middle">反应快：斜率大</text><text x="220" y="175" font-size="12" fill="#4a3724" text-anchor="middle">反应慢：斜率小</text><text x="350" y="255" font-size="12" fill="#4a3724" text-anchor="middle">同一反应，浓度降得越陡表示速率越大</text></svg>', caption: '图2　两条下降曲线代表不同快慢的反应：在相同时间内，降得更陡（斜率更大）的反应速率更大。' },
      { type: 'heading', text: '三、用不同物质表示同一反应的速率' },
      { type: 'paragraph', text: '同一个反应，我们可以选反应物 A 来算速率，也可以选 B 或生成物 C 来算。因为各物质的消耗和生成是按化学方程式里的比例同步进行的，所以这些速率之间也成固定比例。具体说：同一反应中，用不同物质表示的速率之比，等于化学方程式中各物质的化学计量数之比。' },
      { type: 'keypoint', label: '重点·速率之比等于计量数之比', text: '<strong>对反应 aA + bB → cC，有 v(A) : v(B) : v(C) = a : b : c。</strong>例如 2A + B → 3C，若 v(A) = 0.4，则 v(B) = 0.2，v(C) = 0.6。用这个关系，知道一种物质的速率就能推出所有物质的速率。' },
      { type: 'table', headers: ['反应', '速率关系', '说明'], rows: [['2A + B → 3C', 'v(A):v(B):v(C)=2:1:3', '速率比等于化学计量数比'], ['N₂ + 3H₂ → 2NH₃', 'v(N₂):v(H₂):v(NH₃)=1:3:2', '同一反应快慢一致', '比较快慢要先统一到同一物质']] },
      { type: 'heading', text: '四、怎样测定反应速率' },
      { type: 'paragraph', text: '速率本身看不见，但反应常带来可观测的变化：有气体产生的看体积或压强随时间变，有颜色的可看颜色深浅，有酸碱的可测 pH。只要找到一种"随时间单调变化且易测量"的量，记录它随时间的变化，就能反推出速率。' },
      { type: 'example', label: '例题·由一种速率求另一种', text: '对反应 2A + B → 3C，已知 A 的消耗速率 v(A) = 0.4 mol/(L·s)，求 C 的生成速率。<br><br><strong>解析</strong>：由速率比等于计量数比，v(A) : v(C) = 2 : 3，所以 v(C) = v(A) × 3 / 2 = 0.4 × 1.5 = 0.6 mol/(L·s)。即 C 的生成速率为 0.6 摩尔每升每秒。注意 B 的速率则是 0.4 / 2 = 0.2。' },
      { type: 'warn', label: '易错·比较快慢要先统一物质', text: '题目常给"甲反应 v(A)=0.3、乙反应 v(B)=0.2"让你比快慢，<strong>不能直接比数字</strong>，因为不同物质的计量数不同。正确做法是把速率都换算成"同一物质"的速率，或者都除以各自计量数再比。否则会得出错误结论。' },
      { type: 'tip', label: '提示', text: '做题时把"速率 ÷ 化学计量数"当作比较快慢的统一标准最省事。例如 v(A)=0.4 对应计量数 2，则 0.4/2=0.2；v(C)=0.6 对应计量数 3，则 0.6/3=0.2，两者其实一样快。养成这个习惯，比较题就不会栽跟头。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">速率换算：v(A):v(B):v(C) = 计量数 a:b:c</text><rect x="60" y="80" width="160" height="46" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="140" y="109" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">v(A) 计量数2</text><rect x="260" y="80" width="160" height="46" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="109" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">v(B) 计量数1</text><rect x="460" y="80" width="160" height="46" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="540" y="109" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">v(C) 计量数3</text><text x="340" y="170" font-size="13" fill="#d98e3a" text-anchor="middle">0.4 : 0.2 : 0.6</text><text x="340" y="210" font-size="13" fill="#4a3724" text-anchor="middle">除以计量数都等于 0.2，说明快慢一致</text><text x="340" y="245" font-size="12" fill="#4a3724" text-anchor="middle">统一到同一基准再比快慢，才不会出错</text></svg>', caption: '图3　同一反应各物质速率之比等于化学计量数之比，把速率除以计量数可公平比较反应快慢。' }
    ],
    exercises: [
      { type: 'choice', question: '化学反应速率的常用单位是？', options: ['mol/(L·s)', 'mol', '克每升', '秒'], answer: 'mol/(L·s)', explanation: '速率 v = Δc / Δt，浓度单位是摩尔每升（mol/L），时间单位常用秒或分，所以速率单位写作 mol/(L·s) 或 mol/(L·min)。"mol"只是物质的量单位，不能单独作速率单位；"秒"是时间单位，也不是速率单位。' },
      { type: 'choice', question: '公式 v = Δc / Δt 中的 Δc 指的是？', options: ['物质的量变化', '浓度变化量', '质量变化', '压强变化'], answer: '浓度变化量', explanation: '反应速率定义式 v = Δc / Δt 中的 Δc 是某物质浓度的变化量，单位摩尔每升，不是物质的量。若题目只给了物质的量，必须先除以容器体积 V 换算成浓度，否则算出的不是标准定义的速率。' },
      { type: 'choice', question: '反应 2A + B → 3C 中，若 v(A) = 0.4 mol/(L·s)，则 v(B) 为？', options: ['0.8 mol/(L·s)', '0.2 mol/(L·s)', '0.4 mol/(L·s)', '0.6 mol/(L·s)'], answer: '0.2 mol/(L·s)', explanation: '同一反应中速率之比等于化学计量数之比：v(A):v(B)=2:1。已知 v(A)=0.4，则 v(B)=v(A)/2=0.2 mol/(L·s)。同理 v(C)=0.4×3/2=0.6。记住"除以自己的计量数"就能推出其他物质的速率。' },
      { type: 'fill', question: '用浓度变化量除以时间变化量表示反应速率，公式写作 v = ___。', answer: 'Δc / Δt', explanation: '反应速率定义为单位时间内浓度的变化量，公式为 v = Δc / Δt。其中 Δc 是浓度变化（摩尔每升），Δt 是时间（秒或分），两者相除得到速率。该式只适用于用浓度表示的速率，是本章最基础的计算式。' },
      { type: 'fill', question: '同一化学反应中，用不同物质表示的反应速率之比，等于化学方程式中各物质的___之比。', answer: '化学计量数', explanation: '同一反应里各物质按化学方程式的比例同步消耗或生成，所以用不同物质表示的速率之比等于化学计量数之比，即 v(A):v(B):v(C)=a:b:c。利用这个关系，只要知道一种物质的速率，就能求出所有物质的速率，也能公平比较反应快慢。' }
    ]
  });
})();
