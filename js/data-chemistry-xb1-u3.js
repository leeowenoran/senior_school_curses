/* ============================================================
 * 高二化学 · 选择性必修1 化学反应原理 · 第一章 化学反应的热效应
 * 课时3：盖斯定律与反应热的计算
 * 数据注入：chemistry.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u3',
    name: '盖斯定律与反应热的计算',
    chapter: '选择性必修1 化学反应原理 · 第一章 化学反应的热效应',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、盖斯定律说的什么' },
      { type: 'paragraph', text: '有些反应的热效应很难直接测，比如碳不完全燃烧生成一氧化碳时，同时还会生成二氧化碳，热量混在一起测不准。化学家盖斯发现了一个规律：一个反应不管是一步完成，还是分几步完成，只要起点和终点相同，总的热效应就一样。这就像从山脚到山顶，不管走哪条路，海拔升高总数不变。' },
      { type: 'keypoint', label: '重点·盖斯定律', text: '<strong>化学反应的反应热只与反应的始态和终态有关，与反应所经历的具体途径无关。</strong>也就是说，总反应的 ΔH 等于各分步反应 ΔH 的代数和。利用它，我们可以用"好测的反应"去算"难测的反应"。' },
      { type: 'list', items: ['反应热只取决于始态和终态，不取决于一步还是多步完成', '总 ΔH 等于各分步 ΔH 的代数相加', '可以用容易测量的反应，间接推算难测反应的热效应', '像登山：不同路径，海拔总变化相同'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">盖斯定律：一步走与分两步走，总焓变相同</text><rect x="60" y="180" width="120" height="46" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="120" y="209" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">始态 A</text><rect x="500" y="60" width="120" height="46" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="560" y="89" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">终态 B</text><line x1="180" y1="195" x2="500" y2="90" stroke="#d98e3a" stroke-width="2"/><text x="330" y="150" font-size="13" fill="#d98e3a" text-anchor="middle">直接 ΔH</text><rect x="250" y="120" width="120" height="46" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="310" y="149" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">中间 C</text><line x1="180" y1="195" x2="250" y2="140" stroke="#b5651d" stroke-width="2"/><line x1="370" y1="140" x2="500" y2="90" stroke="#b5651d" stroke-width="2"/><text x="200" y="170" font-size="12" fill="#4a3724" text-anchor="middle">ΔH₁</text><text x="450" y="120" font-size="12" fill="#4a3724" text-anchor="middle">ΔH₂</text><text x="340" y="250" font-size="12" fill="#4a3724" text-anchor="middle">ΔH = ΔH₁ + ΔH₂，与是否经过 C 无关</text></svg>', caption: '图1　盖斯定律示意：从 A 直接到 B，或经 C 分两步到 B，总焓变 ΔH 都等于各步之和。' },
      { type: 'heading', text: '二、用盖斯定律计算反应热' },
      { type: 'paragraph', text: '具体做法像"拼积木"：把题目给的几个已知热化学方程式，通过乘系数、反向写、相加减，凑出目标方程式；同时对它们的 ΔH 做完全相同的运算，就得到目标反应的 ΔH。关键是每一步的"变形"都要同步作用在 ΔH 上。' },
      { type: 'example', label: '例题·用盖斯定律求 ΔH', text: '已知：① C(s) + O₂(g) → CO₂(g)，ΔH₁ = −393.5 千焦每摩尔；② CO(g) + ½O₂(g) → CO₂(g)，ΔH₂ = −283.0 千焦每摩尔。求 C(s) + ½O₂(g) → CO(g) 的 ΔH。<br><br><strong>解析</strong>：目标式 = ① − ②。把两式相减，CO₂ 抵消，得到 C(s) + ½O₂(g) → CO(g)。ΔH = ΔH₁ − ΔH₂ = −393.5 − (−283.0) = −110.5 千焦每摩尔。这就是碳不完全燃烧生成一氧化碳的焓变。' },
      { type: 'warn', label: '易错·对 ΔH 的同步运算', text: '对方程式做三种操作时，ΔH 必须同步：<strong>① 方程式乘 n，ΔH 也乘 n；② 方程式反向写，ΔH 变号；③ 方程式相加减，ΔH 也相加减。</strong>最常见错误是只改了方程式却忘了改 ΔH，或者状态不同的式子硬凑在一起相加。' },
      { type: 'list', items: ['第一步：写出目标方程式，对照已知式找关系', '第二步：对已知式乘系数或反向，凑出目标式', '第三步：对已知 ΔH 做完全相同的运算', '第四步：检查物质状态是否一致，再得出结果'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">方程式"拼凑"：已知式变形后相加得到目标式</text><rect x="40" y="70" width="280" height="44" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="98" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">已知① C→CO₂  ΔH₁</text><rect x="40" y="130" width="280" height="44" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="158" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">已知② CO→CO₂  ΔH₂</text><rect x="400" y="100" width="240" height="44" rx="8" fill="#d98e3a" stroke="#b5651d" stroke-width="2"/><text x="520" y="128" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">① − ② = 目标</text><line x1="320" y1="120" x2="400" y2="120" stroke="#d98e3a" stroke-width="2"/><text x="520" y="180" font-size="13" fill="#4a3724" text-anchor="middle">ΔH = ΔH₁ − ΔH₂</text><text x="340" y="230" font-size="12" fill="#4a3724" text-anchor="middle">未知式 = 已知式代数组合，ΔH 同步组合</text></svg>', caption: '图2　把已知热化学方程式像代数式一样加减，目标方程的 ΔH 也按同样方式计算得到。' },
      { type: 'heading', text: '三、求反应热还有哪些"原料"' },
      { type: 'paragraph', text: '盖斯定律之外，我们还有两条常用"原料"来算反应热：一是上一课时学的键能法（ΔH = 反应物总键能 − 生成物总键能）；二是利用标准燃烧热或标准生成焓查表拼算。三种方法本质相通，都是"用已知热数据组合出未知"。考试时看题目给了哪种数据就用哪种。' },
      { type: 'keypoint', label: '重点·三种求 ΔH 的途径', text: '<strong>① 键能法：ΔH = 反应物总键能 − 生成物总键能；② 盖斯定律：用已知反应拼目标；③ 燃烧热/生成焓法：查标准数据代数组合。</strong>三者的共同前提是"反应热只与始末状态有关"，所以才能互相替代。' },
      { type: 'table', headers: ['方法', '需要的数据', '适用情形'], rows: [['键能法', '各化学键的键能', '已知分子结构与断键成键', 'ΔH = 反应物键能 − 生成物键能'], ['盖斯定律', '若干已知反应 ΔH', '反应难直接测、可拆解', 'ΔH 按方程式同法加减'], ['燃烧热法', '物质标准燃烧热', '有燃烧热表可查', '组合燃烧热求目标 ΔH']] },
      { type: 'heading', text: '四、用反应循环图理清关系' },
      { type: 'paragraph', text: '遇到三步以上的复杂关系，画一个"反应循环图"最清楚：把各物质画成顶点，反应箭头标上 ΔH，沿着能走通的方向把 ΔH 加一圈，必然回到起点、总和为 0。这其实就是盖斯定律的图形版，能帮你检查有没有算漏或算反。' },
      { type: 'example', label: '例题·循环图验证', text: '反应循环：A → B (ΔHₐ)，B → C (ΔHb)，C → A (ΔHc)。这三个焓变有什么关系？<br><br><strong>解析</strong>：从 A 出发走一圈 A→B→C→A 回到起点，总焓变应为 0，所以 ΔHₐ + ΔHb + ΔHc = 0，即 ΔHc = −(ΔHₐ + ΔHb)。这也说明，只要知道其中两个，第三个就能由盖斯定律推出，与中间经过哪些物质无关。' },
      { type: 'warn', label: '易错·状态必须一致才能相加', text: '用盖斯定律拼式子时，<strong>同一物质在不同式子里的聚集状态必须相同</strong>，否则能量基准不同，不能直接加减。例如一个式子里是 H₂O(l)，另一个是 H₂O(g)，要先统一状态（补上汽化吸热项）才能合并，否则算出的 ΔH 会错。' },
      { type: 'tip', label: '提示', text: '做盖斯定律题有个省力窍门：先盯住"目标式里有什么物质"，再拿已知式去"消"掉多余物质。某个物质在目标里没有，就让它在一正一反两个已知式里出现、相减抵消。多练几道，你会越来越快看出该怎么乘、该怎么反。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">反应循环图：绕一圈回到起点，焓变总和为 0</text><rect x="300" y="60" width="80" height="40" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="86" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">A</text><rect x="80" y="200" width="80" height="40" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="120" y="226" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">B</text><rect x="520" y="200" width="80" height="40" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="560" y="226" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">C</text><line x1="320" y1="100" x2="130" y2="200" stroke="#d98e3a" stroke-width="2"/><line x1="380" y1="100" x2="540" y2="200" stroke="#d98e3a" stroke-width="2"/><line x1="160" y1="240" x2="520" y2="240" stroke="#d98e3a" stroke-width="2"/><text x="210" y="150" font-size="12" fill="#4a3724" text-anchor="middle">ΔHₐ</text><text x="470" y="150" font-size="12" fill="#4a3724" text-anchor="middle">ΔHb</text><text x="340" y="262" font-size="13" fill="#d98e3a" text-anchor="middle">ΔHₐ + ΔHb + ΔHc = 0</text></svg>', caption: '图3　反应循环图：从 A 沿任意路径绕回 A，所有焓变相加必为 0，是检查盖斯定律计算的好工具。' }
    ],
    exercises: [
      { type: 'choice', question: '盖斯定律的核心含义是？', options: ['反应热与反应途径有关', '反应热只与始态和终态有关', '反应热只与温度有关', '反应热无法间接求得'], answer: '反应热只与始态和终态有关', explanation: '盖斯定律指出，一个反应不管是一步完成还是分几步完成，只要始态和终态相同，总反应热就相同，即反应热只取决于始态和终态，与途径无关。所以难测的反应可以借已知反应间接求得，这正是该定律最有用的地方。' },
      { type: 'choice', question: '已知 A → B 的 ΔH₁ = −100，B → C 的 ΔH₂ = +40。则 A → C 的总 ΔH 为？', options: ['−140', '−60', '+60', '+140'], answer: '−60', explanation: '根据盖斯定律，总反应 A → C 可看作 A → B 再 B → C，总焓变等于各步代数和：ΔH = ΔH₁ + ΔH₂ = −100 + 40 = −60。注意吸热项取正、放热项取负后直接相加即可，结果为负说明总过程仍放热。' },
      { type: 'choice', question: '若将某个热化学方程式整体反向书写，其 ΔH 应？', options: ['保持不变', '变为原来的两倍', '改变符号（取相反数）', '变为零'], answer: '改变符号（取相反数）', explanation: '正反应与逆反应互为反向过程，放出的热在逆过程要吸收回来，所以焓变大小相等、符号相反。例如正反应 ΔH = −285.8，逆反应就是 +285.8。这是盖斯定律运算中"反向就变号"的基本规则。' },
      { type: 'fill', question: '已知：① C(s) + O₂(g) → CO₂(g)，ΔH₁ = −393.5 千焦每摩尔；② CO(g) + ½O₂(g) → CO₂(g)，ΔH₂ = −283.0 千焦每摩尔。由盖斯定律求 C(s) + ½O₂(g) → CO(g) 的 ΔH = ___。', answer: '−110.5 千焦每摩尔', explanation: '目标式 C(s) + ½O₂(g) → CO(g) 等于已知式①减去已知式②。CO₂ 在两式中抵消，得到目标式。焓变同样相减：ΔH = ΔH₁ − ΔH₂ = −393.5 − (−283.0) = −110.5 千焦每摩尔。这就是碳不完全燃烧生成一氧化碳的焓变，结果为负表示放热。' },
      { type: 'fill', question: '盖斯定律指出，化学反应的反应热只与反应的___和___有关，与反应所经历的途径无关。', answer: '始态和终态', explanation: '盖斯定律的核心表述是：反应热只取决于体系的始态和终态，与反应是一步完成还是分多步完成无关。因此我们可以用若干已知反应的焓变，通过代数组合求出目标反应的焓变。填空应为"始态和终态"，强调路径无关这一关键性质。' }
    ]
  });
})();
