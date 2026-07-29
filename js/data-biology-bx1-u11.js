/* 生物学 · 必修1 分子与细胞 · 第4章 · 课时：第1节 物质跨膜运输的实例 */
(function () {
  var v = gzGetVolume('biology', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u11',
    name: '第1节 物质跨膜运输的实例',
    chapter: '必修1 分子与细胞 · 第4章 细胞的物质输入和输出',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、从腌萝卜出水说起：什么是渗透作用' },
      { type: 'paragraph', text: '把萝卜条泡进浓盐水，过一会儿萝卜变软、碗里出了水；把蔫了的青菜泡进清水，它又会挺括起来。这些日常现象背后，是水透过一层筛子从一边跑到另一边，这种<strong>水分子（或其他溶剂分子）透过半透膜</strong>的扩散就是<strong>渗透作用</strong>。' },
      { type: 'list', items: ['必须有一层<strong>半透膜</strong>：膜上有小孔，水自由通过，蔗糖等溶质过不去', '膜两侧要有<strong>浓度差</strong>：单位体积内水分子数不同，水从多的一侧流向少的一侧'] },
      { type: 'paragraph', text: '这里的浓度指物质的量浓度。清水侧水分子多、蔗糖侧水分子少，于是水从清水侧渗入蔗糖侧，直到两侧浓度差被拉平。注意渗透方向看的是水分子的相对数量，而不是溶质的多少。' },
      { type: 'keypoint', label: '重点·渗透作用的两个必要条件', text: '<strong>一是具有半透膜，二是半透膜两侧存在浓度差。</strong>两个条件缺一不可。若膜对所有物质都通透，就不叫半透膜，也不会发生定向的渗透；若两侧浓度相等，水分子双向通过速率相同，不会有净水流。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 渗透作用装置与原理</text><rect x="120" y="70" width="120" height="90" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="112" font-size="14" fill="#2e3a22" text-anchor="middle">蔗糖溶液</text><text x="180" y="138" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">高浓度侧</text><rect x="120" y="162" width="120" height="14" fill="#3f7d1e"/><text x="180" y="200" font-size="12" fill="#2e3a22" text-anchor="middle">半透膜（小孔过水）</text><rect x="350" y="120" width="200" height="140" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="450" y="172" font-size="14" fill="#2e3a22" text-anchor="middle">清水</text><text x="450" y="198" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">低浓度侧</text><polygon points="350,138 350,162 308,150" fill="#3f7d1e"/><text x="320" y="128" font-size="12" fill="#2e3a22" text-anchor="middle">水进入</text><text x="340" y="300" font-size="13" fill="#2e3a22" text-anchor="middle">水从低浓度侧透过半透膜流向高浓度侧，漏斗液面上升。</text></svg>', caption: '图1　渗透作用需要半透膜和浓度差，水从低浓度一侧流向高浓度一侧。' },
      { type: 'heading', text: '二、动物细胞的吸水和失水' },
      { type: 'paragraph', text: '动物细胞（如红细胞）只有细胞膜，没有细胞壁，细胞膜就相当于半透膜。把红细胞放进不同浓度的溶液中，会看到明显变化，这正是渗透作用在细胞层面的体现。' },
      { type: 'list', items: ['外界溶液浓度小于细胞质浓度（低渗）：水进入细胞，红细胞<strong>吸水膨胀甚至涨破</strong>', '外界溶液浓度大于细胞质浓度（高渗）：水流出细胞，红细胞<strong>失水皱缩</strong>', '外界溶液浓度等于细胞质浓度（等渗，如 0.9% 生理盐水）：水分进出平衡，形态正常'] },
      { type: 'example', label: '例题·红细胞的命运', text: '把新鲜红细胞分别放入蒸馏水、0.9% 生理盐水、高浓度 NaCl 溶液中，问三种情况下细胞形态如何变化？<br>答：蒸馏水中细胞吸水涨破；生理盐水中形态保持正常；高浓度 NaCl 中细胞失水皱缩。原理是水从低浓度一侧向高浓度一侧渗透，膜两侧浓度差决定水流动方向。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 动物细胞在不同溶液中的形态</text><circle cx="130" cy="160" r="55" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="130" y="165" font-size="13" fill="#2e3a22" text-anchor="middle">正常</text><text x="130" y="240" font-size="13" fill="#2e3a22" text-anchor="middle">等渗 0.9% 盐水</text><circle cx="340" cy="160" r="40" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="165" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">吸水涨破</text><text x="340" y="240" font-size="13" fill="#2e3a22" text-anchor="middle">低渗 蒸馏水</text><circle cx="550" cy="160" r="55" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="155" font-size="13" fill="#2e3a22" text-anchor="middle">失水</text><text x="550" y="178" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">皱缩</text><text x="550" y="240" font-size="13" fill="#2e3a22" text-anchor="middle">高渗 浓盐水</text><text x="340" y="295" font-size="13" fill="#2e3a22" text-anchor="middle">外界浓度高于细胞质时失水皱缩，低于细胞质时吸水涨破。</text></svg>', caption: '图2　动物细胞无细胞壁，低渗吸水涨破、高渗失水皱缩。' },
      { type: 'heading', text: '三、植物细胞的质壁分离与复原' },
      { type: 'paragraph', text: '植物细胞有细胞壁，还有一层关键结构——<strong>原生质层</strong>，它由细胞膜、液泡膜以及两层膜之间的细胞质构成，在功能上相当于半透膜。' },
      { type: 'paragraph', text: '当外界溶液浓度高于细胞液浓度（高渗）时，细胞失水，液泡变小，原生质层收缩，而细胞壁伸缩性小，于是原生质层与细胞壁分离，叫<strong>质壁分离</strong>。把发生质壁分离的细胞再放入清水，细胞吸水，原生质层恢复原位，叫<strong>质壁分离复原</strong>。' },
      { type: 'list', items: ['细胞必须是<strong>活的成熟植物细胞</strong>（有中央大液泡）', '外界溶液浓度<strong>大于</strong>细胞液浓度', '原生质层相当于半透膜，细胞壁全透且伸缩性差'] },
      { type: 'warn', label: '易错·原生质层与原生质体', text: '<strong>原生质层</strong>指细胞膜、液泡膜及二者之间的细胞质，是质壁分离里收缩的那一层；<strong>原生质体</strong>是被去掉细胞壁的植物细胞（如植物细胞工程中用酶解法得到的对象）。二者只差一个字，但含义不同，考试常挖坑，答题时要写对。' },
      { type: 'table', headers: ['对象', '结构特点', '现象', '可否复原'], rows: [['动物细胞（红细胞）', '只有细胞膜', '吸水涨破 / 失水皱缩', '一般不可逆'], ['植物细胞', '细胞壁 + 原生质层', '质壁分离', '可复原']] },
      { type: 'example', label: '例题·质壁分离观察', text: '撕取紫色洋葱鳞片叶外表皮，制成临时装片，从盖玻片一侧滴入 0.3 g/mL 蔗糖溶液，另一侧用吸水纸吸引，显微镜下可见液泡变小、紫色加深，原生质层与细胞壁分离。<br>答：这证明活的成熟植物细胞能发生质壁分离，且原生质层相当于半透膜，细胞壁的伸缩性小于原生质层。' },
      { type: 'tip', label: '提示·实验选材', text: '做质壁分离实验首选<strong>紫色洋葱鳞片叶外表皮</strong>，因其液泡呈紫色、便于观察；若用无色细胞，需调暗视野或染色才看得清。实验中细胞必须保持活性，试剂浓度和处理时间都要适当。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 植物细胞质壁分离与复原</text><rect x="70" y="70" width="120" height="120" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><rect x="90" y="90" width="80" height="80" rx="6" fill="#eef6e4" stroke="#3f7d1e" stroke-width="2"/><text x="130" y="215" font-size="13" fill="#2e3a22" text-anchor="middle">正常：原生质层贴壁</text><rect x="270" y="70" width="120" height="120" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><rect x="300" y="100" width="50" height="60" rx="6" fill="#eef6e4" stroke="#3f7d1e" stroke-width="2"/><text x="330" y="215" font-size="13" fill="#2e3a22" text-anchor="middle">质壁分离：收缩</text><rect x="470" y="70" width="120" height="120" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><rect x="490" y="90" width="80" height="80" rx="6" fill="#eef6e4" stroke="#3f7d1e" stroke-width="2"/><text x="530" y="215" font-size="13" fill="#2e3a22" text-anchor="middle">复原：重新贴壁</text><polygon points="195,130 262,122 262,138" fill="#3f7d1e"/><text x="232" y="118" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">失水</text><polygon points="395,130 462,122 462,138" fill="#3f7d1e"/><text x="432" y="118" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">吸水</text><text x="340" y="330" font-size="13" fill="#2e3a22" text-anchor="middle">高渗失水发生质壁分离，再入清水吸水即可复原。</text></svg>', caption: '图3　活的成熟植物细胞在高渗溶液中失水质壁分离，低渗溶液中吸水复原。' },
      { type: 'heading', text: '四、探究：植物细胞的吸水和失水' },
      { type: 'paragraph', text: '探究实验遵循提出问题、作出假设、设计实验、观察记录、得出结论的思路。本实验自变量是外界溶液浓度，因变量是细胞是否发生质壁分离及复原程度，需要设置自身前后对照。' },
      { type: 'paragraph', text: '操作要点：制作临时装片 → 低倍镜观察正常细胞 → 滴加蔗糖溶液观察质壁分离 → 滴加清水观察复原。整个过程中细胞要始终保持活性，因此试剂浓度不能过高、处理时间不能过长，否则细胞死亡就无法复原。' }
    ],
    exercises: [
      { type: 'choice', question: '渗透作用发生的两个必要条件是？', options: ['半透膜和浓度差', '只有半透膜', '只有浓度差', '细胞壁和浓度差'], answer: '半透膜和浓度差', explanation: '渗透作用指水分子（或其他溶剂分子）透过半透膜，从低浓度溶液向高浓度溶液扩散。它发生必须同时具备两个条件：一是存在半透膜，二是膜两侧具有浓度差。仅有浓度差而无半透膜，物质自由通过就不叫渗透；仅有半透膜而无浓度差也不会发生定向流动。因此选半透膜和浓度差。' },
      { type: 'choice', question: '哺乳动物红细胞在 0.9% 生理盐水中会怎样？', options: ['吸水涨破', '形态基本正常', '失水皱缩', '先涨破后皱缩'], answer: '形态基本正常', explanation: '0.9% 的 NaCl 溶液是人的生理盐水，其浓度与红细胞细胞内液浓度基本相等，属于等渗溶液。此时水分子进出细胞达到动态平衡，红细胞既不大量吸水也不大量失水，因此形态保持正常。蒸馏水中会涨破，浓盐水中会皱缩。所以选形态基本正常。' },
      { type: 'choice', question: '植物细胞发生质壁分离必须具备的条件是？', options: ['死细胞也可发生', '必须有细胞壁和原生质层，且外液浓度大于细胞液', '只要有叶绿体', '外液浓度小于细胞液'], answer: '必须有细胞壁和原生质层，且外液浓度大于细胞液', explanation: '质壁分离是活的成熟植物细胞（有中央大液泡）在高渗外界溶液中失水，原生质层收缩而细胞壁伸缩性小，导致二者分离的现象。条件包括：细胞是活细胞、具有细胞壁和相当于半透膜的原生质层、外界溶液浓度大于细胞液浓度。死细胞的膜失去选择性，不能发生质壁分离；外液小于细胞液时反而吸水膨胀。所以选该描述。' },
      { type: 'fill', question: '原生质层由细胞膜、液泡膜以及两层膜之间的___构成，在功能上相当于半透膜。', answer: '细胞质', explanation: '原生质层是植物细胞特有的结构，具体指细胞膜、液泡膜以及这两层膜之间的细胞质所共同组成的整体。它在功能上相当于一层半透膜，对物质进出细胞具有选择性，是植物细胞发生渗透吸水和质壁分离的结构基础。因此空缺处应填细胞质。' },
      { type: 'fill', question: '把发生质壁分离的细胞放入清水中，细胞吸水，原生质层恢复原来位置，这一过程称为质壁分离___。', answer: '复原', explanation: '当外界溶液浓度大于细胞液浓度时，植物细胞失水发生质壁分离；若此时把细胞转移到浓度较低的清水（或低渗溶液）中，细胞又会吸水，原生质层逐渐膨胀并重新贴近细胞壁，恢复初始状态，这个过程叫质壁分离复原。所以空缺处应填复原。' }
    ]
  });
})();
