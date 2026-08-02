/* 生物学 · 高三复习 · 遗传与进化 · 第3章 · 课时：第1节 DNA是主要的遗传物质 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u8',
    name: '第1节 DNA是主要的遗传物质',
    chapter: '遗传与进化 · 第3章 基因的本质',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、早期对遗传物质的猜想' },
      { type: 'paragraph', text: '20 世纪早期，科学家已经知道染色体由 DNA 和蛋白质组成，但到底谁是遗传物质并不清楚。蛋白质结构复杂、种类多，曾被很多人认为是遗传物质的候选；直到一系列巧妙实验逐一排除，才确立 DNA 的地位。这一节的三组经典实验，是高三复习的必考重点。' },
      { type: 'heading', text: '二、格里菲思的体内转化实验' },
      { type: 'paragraph', text: '1928 年格里菲思用肺炎链球菌做小鼠体内实验。S 型菌有荚膜、菌落光滑、有毒性，能使小鼠死亡；R 型菌无荚膜、菌落粗糙、无毒性。他把不同组合注射到小鼠体内，发现一个奇怪现象：加热杀死的 S 型菌本身无毒，但和活的 R 型菌混合后注射，小鼠竟死亡，且从死鼠体内分离出了活的 S 型菌。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 格里菲思体内转化实验</text><rect x="40" y="70" width="290" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="185" y="104" font-size="13" fill="#2e3a22" text-anchor="middle">① R型活菌 → 小鼠存活</text><rect x="350" y="70" width="290" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="495" y="104" font-size="13" fill="#2e3a22" text-anchor="middle">② S型活菌 → 小鼠死亡</text><rect x="40" y="150" width="290" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="185" y="184" font-size="13" fill="#2e3a22" text-anchor="middle">③ 加热杀S → 小鼠存活</text><rect x="350" y="150" width="290" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="495" y="178" font-size="13" fill="#2e3a22" text-anchor="middle">④ R活 + 加热杀S</text><text x="495" y="199" font-size="12" fill="#5aa832" text-anchor="middle">→ 小鼠死亡，得S活菌</text><polygon points="330,178 360,170 360,196" fill="#3f7d1e"/><text x="340" y="250" font-size="13" fill="#2e3a22" text-anchor="middle">结论：加热杀死的 S 型含「转化因子」</text><text x="340" y="280" font-size="13" fill="#2e3a22" text-anchor="middle">能使 R 型活菌转化为 S 型活菌</text></svg>', caption: '图1　格里菲思实验：加热杀死的 S 型含转化因子，可使 R 型转化为 S 型。' },
      { type: 'list', items: [
        '组别①：注射 R 型活菌，小鼠存活',
        '组别②：注射 S 型活菌，小鼠死亡',
        '组别③：注射加热杀死的 S 型菌，小鼠存活',
        '组别④：注射 R 型活菌 + 加热杀死的 S 型菌，小鼠死亡，且分离到 S 型活菌'
      ] },
      { type: 'keypoint', label: '核心概念·转化因子', text: '<strong>格里菲思提出：加热杀死的 S 型细菌中含有某种「转化因子」，能将无毒的 R 型活细菌转化为有毒的 S 型活细菌。</strong>该实验只证明存在转化因子，但并未指出转化因子是什么物质。' },
      { type: 'heading', text: '三、艾弗里的体外转化实验' },
      { type: 'paragraph', text: '1944 年艾弗里及同事把 S 型菌的提取物分开，分别用蛋白酶、RNA 酶、酯酶、DNA 酶等处理，再与 R 型菌混合培养，观察能否发生转化。结果发现：只有用 DNA 酶把 DNA 水解后，转化现象才消失；其他酶处理都不影响转化。这说明起转化作用的正是 DNA。' },
      { type: 'list', items: [
        '将 S 型菌的 DNA、蛋白质、多糖等物质分离提纯',
        '分别与 R 型活菌混合培养，观察转化',
        '去除蛋白质、多糖等不影响转化；去除 DNA 后转化不发生',
        '结论：DNA 才是使 R 型转化为 S 型的物质，即 DNA 是遗传物质'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 艾弗里体外转化实验</text><rect x="40" y="70" width="280" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="100" font-size="13" fill="#2e3a22" text-anchor="middle">S提取物 + R活菌 → 转化</text><rect x="360" y="70" width="280" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="100" font-size="13" fill="#2e3a22" text-anchor="middle">去蛋白/多糖 → 仍转化</text><rect x="40" y="150" width="280" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="180" font-size="13" fill="#2e3a22" text-anchor="middle">去DNA（+DNA酶）→ 不转化</text><rect x="360" y="150" width="280" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="180" font-size="13" fill="#2e3a22" text-anchor="middle">加入纯DNA → 可转化</text><polygon points="320,95 360,87 360,113" fill="#3f7d1e"/><polygon points="320,175 360,167 360,193" fill="#3f7d1e"/><text x="340" y="255" font-size="13" fill="#5aa832" text-anchor="middle">只有 DNA 能使 R 型转化为 S 型</text><text x="340" y="285" font-size="13" fill="#2e3a22" text-anchor="middle">结论：DNA 是遗传物质（转化因子）</text></svg>', caption: '图2　艾弗里实验：去除 DNA 后转化停止，证明 DNA 是转化因子。' },
      { type: 'paragraph', text: '艾弗里的实验利用了「减法原理」：每次去掉一种成分，看转化是否还能发生。由于当时提取的 DNA 纯度有限，仍有少数人怀疑残留蛋白质的作用，这一怀疑直到噬菌体实验才被彻底排除。' },
      { type: 'heading', text: '四、噬菌体侵染细菌实验（赫尔希和蔡斯）' },
      { type: 'paragraph', text: '1952 年赫尔希和蔡斯用 T₂ 噬菌体做实验。噬菌体由蛋白质外壳和内部 DNA 组成，专门寄生在细菌里。他们用放射性同位素标记法：用 ³²P 标记 DNA（因 DNA 含磷不含硫），用 ³⁵S 标记蛋白质（因蛋白质含硫不含磷）。让标记的噬菌体去侵染未标记的大肠杆菌，再经搅拌、离心，观察放射性位置。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 噬菌体侵染实验（³²P 与 ³⁵S）</text><rect x="40" y="80" width="270" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="175" y="108" font-size="13" fill="#2e3a22" text-anchor="middle">³²P 标记DNA → 沉淀(菌)有放射</text><rect x="370" y="80" width="270" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="505" y="108" font-size="13" fill="#2e3a22" text-anchor="middle">³⁵S 标记蛋白 → 上清(壳)有放射</text><polygon points="310,108 350,100 350,126" fill="#3f7d1e"/><polygon points="310,108 350,100 350,126" fill="#3f7d1e" transform="translate(60,0)"/><text x="340" y="180" font-size="13" fill="#2e3a22" text-anchor="middle">³²P 组：DNA 注入细菌，放射性在沉淀物</text><text x="340" y="205" font-size="13" fill="#2e3a22" text-anchor="middle">³⁵S 组：蛋白质留外壳，放射性在上清液</text><text x="340" y="255" font-size="13" fill="#5aa832" text-anchor="middle">DNA 进入细菌并传后代，蛋白质未进入</text><text x="340" y="285" font-size="13" fill="#2e3a22" text-anchor="middle">结论：DNA 是遗传物质</text></svg>', caption: '图3　³²P 标记 DNA 进入细菌，³⁵S 标记蛋白质留在外壳，证明 DNA 是遗传物质。' },
      { type: 'table', headers: ['标记元素', '标记对象', '放射性位置', '结论'], rows: [
        ['³²P', 'DNA（含磷）', '沉淀物（细菌内）', 'DNA 注入细菌'],
        ['³⁵S', '蛋白质（含硫）', '上清液（外壳）', '蛋白质未注入']
      ] },
      { type: 'paragraph', text: '实验结果清晰：³²P 组的放射性随细菌沉淀到管底，说明 DNA 进入了细菌内部并指导了子代噬菌体的合成；³⁵S 组的放射性留在上清液（噬菌体空壳）中，说明蛋白质外壳根本没有进入细菌。由此直接证明遗传物质是 DNA 而非蛋白质。' },
      { type: 'heading', text: '五、DNA 是主要的遗传物质' },
      { type: 'paragraph', text: '对所有有细胞结构的生物（原核和真核）以及多数病毒来说，遗传物质都是 DNA；只有少数病毒（如烟草花叶病毒、HIV）的遗传物质是 RNA。因为绝大多数生物的遗传物质是 DNA，所以说「DNA 是主要的遗传物质」，而非「DNA 是唯一的遗传物质」。' },
      { type: 'example', label: '例题·噬菌体实验分析', text: '用 ³²P 标记的 T₂ 噬菌体侵染未标记的大肠杆菌，短时间保温后搅拌、离心。<br>分析：³²P 标记的是 DNA，噬菌体侵染时只有 DNA 注入细菌，蛋白质外壳留在外面；离心后细菌较重沉到管底（沉淀物），外壳较轻留在上清液。<br>结果：放射性主要分布在沉淀物中，说明 DNA 进入了细菌并作为遗传物质指导子代合成。' },
      { type: 'warn', label: '易错·几个分辨', text: '① 格里菲思只发现「转化因子」，没证明它是 DNA；证明 DNA 是转化因子的是艾弗里。② 艾弗里用的是「减法原理」分别去除物质，噬菌体实验用的是「同位素标记」。③ 「DNA 是主要的遗传物质」不等同「DNA 是唯一」——少数病毒遗传物质是 RNA。④ ³²P 标记 DNA、³⁵S 标记蛋白质，不要记反。' },
      { type: 'tip', label: '高频考点·实验方法对照', text: '高考常把三个实验放一起比较：格里菲思（体内转化，找转化因子）、艾弗里（体外转化，减法证明 DNA 是转化因子）、赫尔希蔡斯（同位素 ³²P/³⁵S 标记，证明 DNA 进入细菌）。另注意：凡含 DNA 的生物遗传物质都是 DNA；只含 RNA 的病毒遗传物质才是 RNA。' }
    ],
    exercises: [
      { type: 'choice', question: '格里菲思的体内转化实验得出的直接结论是？', options: ['DNA 是遗传物质', '蛋白质是遗传物质', '加热杀死的 S 型菌中含有「转化因子」', 'RNA 是遗传物质'], answer: '加热杀死的 S 型菌中含有「转化因子」', explanation: '格里菲思把加热杀死的 S 型菌与活的 R 型菌混合注射，小鼠死亡并分离出 S 型活菌，说明加热杀死的 S 型菌中存在某种能使 R 型转化为 S 型的「转化因子」。该实验并未指明转化因子是 DNA，证明 DNA 是转化因子的是后续的艾弗里实验。' },
      { type: 'choice', question: '在噬菌体侵染实验中，用 ³²P 和 ³⁵S 分别标记噬菌体，离心后放射性的主要分布分别是？', options: ['³²P 在上清液，³⁵S 在沉淀物', '³²P 在沉淀物，³⁵S 在上清液', '两者都在沉淀物', '两者都在上清液'], answer: '³²P 在沉淀物，³⁵S 在上清液', explanation: '³²P 标记的是 DNA，噬菌体侵染时 DNA 注入细菌内部，离心后细菌沉于沉淀物，所以 ³²P 主要在沉淀物；³⁵S 标记的是蛋白质外壳，外壳留在细菌外面，离心后位于上清液。该结果说明进入细菌的是 DNA。' },
      { type: 'choice', question: '下列关于「DNA 是主要的遗传物质」的理解，正确的是？', options: ['所有生物的遗传物质都是 DNA', '绝大多数生物遗传物质是 DNA，少数病毒是 RNA', '只有动物和植物的遗传物质是 DNA', 'RNA 永远不是遗传物质'], answer: '绝大多数生物遗传物质是 DNA，少数病毒是 RNA', explanation: '有细胞结构的生物和多数病毒的遗传物质是 DNA；少数病毒如烟草花叶病毒、HIV 的遗传物质是 RNA。因为绝大多数生物的遗传物质是 DNA，所以说 DNA 是主要的遗传物质，但不能说它是唯一的遗传物质。' },
      { type: 'fill', question: '艾弗里在体外转化实验中，将 S 型菌的提取物分别用蛋白酶、RNA 酶、酯酶、DNA 酶处理，结果发现只有用___酶处理后转化现象消失。', answer: 'DNA', explanation: '艾弗里把 S 型菌的 DNA、蛋白质、多糖等成分分开，分别与 R 型活菌混合培养。当用 DNA 酶把 DNA 水解后，转化不再发生；而去除蛋白质、多糖等不影响转化。这说明起转化作用的物质是 DNA，即 DNA 是遗传物质（转化因子）。' },
      { type: 'fill', question: '赫尔希和蔡斯用 ³⁵S 标记的噬菌体侵染细菌，离心后放射性主要出现在___（填「上清液」或「沉淀物」）中，说明蛋白质外壳未进入细菌。', answer: '上清液', explanation: '³⁵S 标记的是噬菌体的蛋白质外壳。侵染时蛋白质外壳留在细菌外部，离心后较轻的空壳位于上清液，所以 ³⁵S 的放射性主要在上清液中，表明蛋白质没有进入细菌，遗传物质不是蛋白质而是注入菌内的 DNA。' }
    ]
  });
})();
