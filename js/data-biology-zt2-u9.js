/* 生物学 · 高三复习 · 遗传与进化 · 第3章 · 课时：第2节 DNA的结构 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u9',
    name: '第2节 DNA的结构',
    chapter: '遗传与进化 · 第3章 基因的本质',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、DNA 双螺旋结构的发现' },
      { type: 'paragraph', text: '1953 年，沃森和克里克在富兰克林与威尔金斯提供的 DNA X 射线衍射数据基础上，提出了 DNA 的<strong>双螺旋结构模型</strong>。这一模型被誉为 20 世纪生命科学最伟大的成就，它把静态的分子结构和动态的复制、表达联系了起来，是现代分子生物学的基石。' },
      { type: 'heading', text: '二、DNA 双螺旋结构的主要特点' },
      { type: 'list', items: [
        'DNA 由两条脱氧核苷酸链组成，这两条链按反向平行方式盘旋成双螺旋',
        '脱氧核糖和磷酸交替连接，排列在内侧外侧构成基本骨架（骨架在外侧）',
        '碱基排列在内侧，通过氢键形成碱基对，遵循碱基互补配对原则',
        '两条链上的碱基通过氢键连接成碱基对，A 与 T 配对、G 与 C 配对'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 DNA双螺旋结构示意</text><path d="M120 90 Q200 140 280 90 Q360 40 440 90 Q520 140 600 90" fill="none" stroke="#3f7d1e" stroke-width="3"/><path d="M120 150 Q200 200 280 150 Q360 100 440 150 Q520 200 600 150" fill="none" stroke="#3f7d1e" stroke-width="3"/><line x1="200" y1="105" x2="200" y2="178" stroke="#5aa832" stroke-width="3"/><line x1="360" y1="78" x2="360" y2="148" stroke="#5aa832" stroke-width="3"/><line x1="520" y1="105" x2="520" y2="178" stroke="#5aa832" stroke-width="3"/><text x="200" y="130" font-size="11" fill="#2e3a22" text-anchor="middle">A=T</text><text x="360" y="113" font-size="11" fill="#2e3a22" text-anchor="middle">G=C</text><text x="520" y="130" font-size="11" fill="#2e3a22" text-anchor="middle">A=T</text><text x="340" y="250" font-size="13" fill="#2e3a22" text-anchor="middle">两条链反向平行；骨架（脱氧核糖—磷酸）在两侧</text><text x="340" y="278" font-size="13" fill="#5aa832" text-anchor="middle">碱基在内侧，A—T、G—C 互补配对</text></svg>', caption: '图1　DNA 由两条反向平行链组成，碱基在内、骨架在外，A 与 T、G 与 C 配对。' },
      { type: 'paragraph', text: '「反向平行」可以通俗理解为：两条链像两列朝相反方向开的火车，一条从 5′ 端走向 3′ 端，另一条从 3′ 端走向 5′ 端。骨架由「脱氧核糖—磷酸—脱氧核糖—磷酸」一节节连成，像铁路的枕木轨道，碱基则像一节节车厢挂在中间。' },
      { type: 'keypoint', label: '核心概念·碱基互补配对', text: '<strong>DNA 两条链上的碱基通过氢键配对，A（腺嘌呤）一定与 T（胸腺嘧啶）配对，G（鸟嘌呤）一定与 C（胞嘧啶）配对，即 A—T、G—C。</strong>这是 DNA 结构乃至复制、转录的核心法则。' },
      { type: 'heading', text: '三、碱基对的连接细节' },
      { type: 'paragraph', text: 'A 与 T 之间通过两个氢键相连，G 与 C 之间通过三个氢键相连。因此 G—C 碱基对比 A—T 碱基对更稳定，含 G—C 比例高的 DNA 分子更耐高温（解旋所需温度更高）。这一细节在比较不同 DNA 稳定性时常被考查。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 碱基对连接</text><rect x="180" y="80" width="80" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="220" y="108" font-size="16" fill="#2e3a22" text-anchor="middle">A</text><rect x="420" y="80" width="80" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="460" y="108" font-size="16" fill="#2e3a22" text-anchor="middle">T</text><line x1="260" y1="102" x2="275" y2="102" stroke="#5aa832" stroke-width="3"/><line x1="355" y1="102" x2="420" y2="102" stroke="#5aa832" stroke-width="3"/><text x="340" y="135" font-size="12" fill="#2e3a22" text-anchor="middle">A=T 两个氢键</text><rect x="180" y="170" width="80" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="220" y="198" font-size="16" fill="#2e3a22" text-anchor="middle">G</text><rect x="420" y="170" width="80" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="460" y="198" font-size="16" fill="#2e3a22" text-anchor="middle">C</text><line x1="260" y1="192" x2="420" y2="192" stroke="#5aa832" stroke-width="3"/><text x="340" y="228" font-size="12" fill="#2e3a22" text-anchor="middle">G=C 三个氢键</text></svg>', caption: '图2　A 与 T 之间两个氢键，G 与 C 之间三个氢键。' },
      { type: 'list', items: [
        '腺嘌呤（A）与胸腺嘧啶（T）配对，形成两个氢键',
        '鸟嘌呤（G）与胞嘧啶（C）配对，形成三个氢键',
        '在双链 DNA 中，嘌呤总数一定等于嘧啶总数',
        '两条链上对应位置的碱基彼此互补，序列反向'
      ] },
      { type: 'heading', text: '四、碱基数量计算规律' },
      { type: 'paragraph', text: '根据碱基互补配对，双链 DNA 中必然有 A = T、G = C，进而 A + G = T + C（即嘌呤总数 = 嘧啶总数），且 A + C = T + G。这些等式是研究 DNA 碱基计算的万能钥匙，面对各种已知比例求未知比例的题目都能由此推导。' },
      { type: 'table', headers: ['规律', '表达式', '含义'], rows: [
        ['配对相等', 'A = T，G = C', '互补碱基数量相等'],
        ['嘌呤=嘧啶', 'A + G = T + C', '嘌呤总数等于嘧啶总数'],
        ['单链比值', '（A+T）与（G+C）的比值', '一条链与互补链该比值相同'],
        ['单链比值', '（A+G）与（T+C）的比值', '一条链与互补链该比值互为倒数']
      ] },
      { type: 'list', items: [
        '就整条双链而言：A = T，G = C，所以 A + G = T + C',
        '若已知一条链中（A+T）与（G+C）的比值，则互补链及整条双链中该比值都相同',
        '若已知一条链中（A+G）与（T+C）的比值，则互补链中该比值与之互为倒数',
        '整条双链中（A+G）与（T+C）的比值恒等于 1'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 一条链与互补链的比值关系</text><rect x="60" y="80" width="250" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="185" y="108" font-size="13" fill="#2e3a22" text-anchor="middle">链1：（A+T）/（G+C）= k</text><rect x="370" y="80" width="250" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="495" y="108" font-size="13" fill="#2e3a22" text-anchor="middle">链2：该比值也 = k</text><polygon points="310,108 370,100 370,126" fill="#3f7d1e"/><rect x="60" y="180" width="250" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="185" y="208" font-size="13" fill="#2e3a22" text-anchor="middle">链1：（A+G）/（T+C）= m</text><rect x="370" y="180" width="250" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="495" y="208" font-size="13" fill="#2e3a22" text-anchor="middle">链2：该比值 = 1/m</text><polygon points="310,208 370,200 370,226" fill="#3f7d1e"/><text x="340" y="280" font-size="12" fill="#5aa832" text-anchor="middle">前一组比值两链相同，后一组比值两链互为倒数</text></svg>', caption: '图3　（A+T）与（G+C）的比值两条链相同；（A+G）与（T+C）的比值两链互为倒数。' },
      { type: 'example', label: '例题·碱基比例计算', text: '已知某双链 DNA 中一条链上的（A+G）与（T+C）的比值为 0.4。<br>分析：设该链为链1，则链1中（A+G）/（T+C）= 0.4；根据互补配对，链2中对应位置 A 对 T、G 对 C，故链2的（A+G）/（T+C）恰为链1的倒数，即 1 ÷ 0.4 = 2.5。<br>整条双链中嘌呤等于嘧啶，所以（A+G）/（T+C）总比值为 1。' },
      { type: 'warn', label: '易错·比值与配对', text: '① A = T、G = C 只在双链 DNA（及互补双链区）成立，单链内不一定相等。② 「（A+T）与（G+C）的比值」两条链相同，但「（A+G）与（T+C）的比值」两条链互为倒数——二者不要混淆。③ 看清题目问的是「一条链」还是「整个 DNA」，整条双链中嘌呤数总等于嘧啶数。④ G—C 含三氢键，更稳定。' },
      { type: 'tip', label: '高频考点·计算三步法', text: '做碱基计算题：第一步写清 A=T、G=C 等量关系；第二步区分对象是一条链还是整条双链；第三步套用两个比值规律——（A+T）与（G+C）的比值互补链相同，（A+G）与（T+C）的比值互补链互为倒数。记住整条双链该倒数比值恒为 1。' },
      { type: 'paragraph', text: '小结：DNA 双螺旋由两条反向平行链组成，骨架在外、碱基在内，A—T、G—C 互补配对；由此推出 A=T、G=C 及一系列碱基数量规律。这些规律是衔接结构和复制、转录计算的桥梁，务必熟练掌握。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于 DNA 双螺旋结构的叙述，正确的是？', options: ['两条链同向平行盘旋', '脱氧核糖和磷酸交替连接在内侧构成骨架', '碱基排列在内侧，遵循 A—T、G—C 互补配对', '碱基通过肽键连接成碱基对'], answer: '碱基排列在内侧，遵循 A—T、G—C 互补配对', explanation: 'DNA 两条链按反向平行方式盘旋成双螺旋；脱氧核糖与磷酸交替连接排在外侧构成基本骨架，碱基排在内侧，通过氢键形成碱基对，遵循 A 与 T 配对、G 与 C 配对的互补原则。肽键是连接氨基酸的化学键，碱基之间靠氢键连接。' },
      { type: 'choice', question: '在双链 DNA 分子中，下列数量关系一定成立的是？', options: ['A = G', 'A + G = T + C', 'A + T = G + C', 'G = T'], answer: 'A + G = T + C', explanation: '根据碱基互补配对，双链 DNA 中 A = T、G = C。把两式相加可得 A + G = T + C，即嘌呤总数等于嘧啶总数。A=G、G=T 一般不成立，A+T 与 G+C 的数量关系取决于物种，不恒等。' },
      { type: 'choice', question: '已知某双链 DNA 中一条链上的（A+G）与（T+C）的比值为 0.5，则互补链中该比值为？', options: ['0.5', '1', '2', '无法确定'], answer: '2', explanation: '一条链中（A+G）与（T+C）的比值，与其互补链中对应比值互为倒数。已知链1该比值为 0.5，则互补链2中（A+G）与（T+C）的比值为 1 ÷ 0.5 = 2。整条双链中该比值才恒等于 1。' },
      { type: 'fill', question: '在 DNA 分子中，腺嘌呤（A）通过两个氢键与___配对，鸟嘌呤（G）通过三个氢键与胞嘧啶配对。', answer: '胸腺嘧啶（T）', explanation: '碱基互补配对原则是 A 与 T 配对、G 与 C 配对。其中 A 与 T 之间形成两个氢键，G 与 C 之间形成三个氢键，因此 G—C 碱基对比 A—T 碱基对更稳定，含 G—C 比例高的 DNA 更耐高温。' },
      { type: 'fill', question: '若某双链 DNA 一条链中（A+T）与（G+C）的比值为 1.5，则其互补链中（A+T）与（G+C）的比值也为___。', answer: '1.5', explanation: '一条链中（A+T）与（G+C）的比值，在它的互补链以及整个双链 DNA 中都保持不变。因为链1的 A 对应链2的 T、链1的 T 对应链2的 A，所以链1的（A+T）与链2的（A+T）相等；同理（G+C）也相等，故比值相同，都是 1.5。' }
    ]
  });
})();
