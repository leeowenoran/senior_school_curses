/* 生物学 · 高三复习 · 分子与细胞 · 第6章 · 课时：第1节 细胞的增殖 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u18',
    name: '第1节 细胞的增殖',
    chapter: '分子与细胞 · 第6章 细胞的生命历程',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、细胞周期与有丝分裂过程' },
      { type: 'paragraph', text: '细胞以分裂方式进行增殖。对于连续分裂的细胞，从一次分裂完成时开始，到下一次分裂完成时为止，为一个细胞周期。细胞周期包括分裂间期和分裂期，间期持续的时间远长于分裂期。' },
      { type: 'list', items: [
        '分裂间期：完成DNA复制和有关蛋白质合成，为分裂期作准备，分为G₁、S、G₂三个阶段。',
        '分裂期（M期）：包括前期、中期、后期、末期，将复制后的遗传物质均分到两个子细胞。',
        '只有连续分裂的细胞才有细胞周期，如根尖分生区细胞；已分化的细胞（如神经细胞）一般无细胞周期。'
      ] },
      { type: 'keypoint', text: '细胞周期前提：连续分裂的细胞；起止：一次分裂完成到下一次分裂完成。间期进行DNA复制和蛋白质合成，是周期中耗时最长的阶段。' },
      { type: 'warn', text: '易错：并非所有细胞都有细胞周期，只有连续分裂的细胞才有；减数分裂产生的生殖细胞不再进行有丝分裂，故无细胞周期。细胞周期必须先有间期后有分裂期。' },
      { type: 'tip', text: '高考高频考点：根据染色体行为判别分裂时期，并计数染色体数、染色单体数和DNA数。记住“单体数=0或2×染色体数”，着丝点数目即染色体数目。' },
      { type: 'table', headers: ['时期', '主要特点', '染色体行为'], rows: [
        ['前期', '核膜核仁消失，纺锤体形成', '染色体出现，散乱分布'],
        ['中期', '纺锤丝牵引，染色体排列在赤道板', '形态最清晰，易计数'],
        ['后期', '着丝点分裂', '姐妹染色单体分开移向两极'],
        ['末期', '核膜核仁重建，细胞质分裂', '染色体解旋成染色质']
      ] },
      { type: 'heading', text: '二、动植物细胞有丝分裂的区别与实验' },
      { type: 'table', headers: ['区别点', '植物细胞', '动物细胞'], rows: [
        ['前期纺锤体来源', '细胞两极发出纺锤丝', '中心体发出星射线'],
        ['末期细胞质分裂', '赤道板处形成细胞板', '细胞膜从中部向内凹陷'],
        ['中心体', '无（低等植物除外）', '有']
      ] },
      { type: 'list', items: [
        '解离：用盐酸和酒精混合液使组织中的细胞相互分离。',
        '漂洗：用清水洗去解离液，防止过度解离并便于染色。',
        '染色：用龙胆紫溶液或醋酸洋红液使染色体着色。',
        '制片：压片使细胞分散，便于显微镜观察。',
        '观察：先低倍镜找到分生区，再高倍镜观察各时期图像。'
      ] },
      { type: 'keypoint', text: '有丝分裂意义：亲代细胞的染色体经复制后精确地平均分配到两个子细胞，保证了亲子代细胞间遗传性状的稳定性，染色体数目保持恒定。' },
      { type: 'warn', text: '易错：染色体数目加倍发生在后期（着丝点分裂），不是中期；染色单体在后期着丝点分裂后消失。细胞板是植物细胞特有的结构，动物细胞靠细胞膜缢裂。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 380" width="680" height="380"><rect x="0" y="0" width="680" height="380" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图1 有丝分裂各时期染色体形态</text><circle cx="120" cy="160" r="14" fill="#5aa832"/><text x="120" y="210" text-anchor="middle" font-size="13" fill="#2e3a22">间期</text><path d="M200,150 q15,20 0,40" stroke="#5aa832" stroke-width="4" fill="none"/><text x="210" y="210" text-anchor="middle" font-size="13" fill="#2e3a22">前期</text><line x1="290" y1="130" x2="290" y2="190" stroke="#5aa832" stroke-width="4"/><line x1="310" y1="130" x2="310" y2="190" stroke="#5aa832" stroke-width="4"/><text x="300" y="210" text-anchor="middle" font-size="13" fill="#2e3a22">中期</text><line x1="380" y1="130" x2="360" y2="190" stroke="#5aa832" stroke-width="4"/><line x1="420" y1="130" x2="440" y2="190" stroke="#5aa832" stroke-width="4"/><text x="400" y="210" text-anchor="middle" font-size="13" fill="#2e3a22">后期</text><circle cx="490" cy="150" r="12" fill="#5aa832"/><circle cx="560" cy="150" r="12" fill="#5aa832"/><circle cx="490" cy="190" r="12" fill="#5aa832"/><circle cx="560" cy="190" r="12" fill="#5aa832"/><text x="525" y="230" text-anchor="middle" font-size="13" fill="#2e3a22">末期</text><polygon points="640,200 660,200 650,180" fill="#3f7d1e"/></svg>', caption: '有丝分裂四时期染色体的典型形态变化。' },
      { type: 'example', text: '例题：某植物细胞有丝分裂后期观察到16条染色体，则该生物体细胞染色体数为（  ）\n思路：后期着丝点分裂使染色体数目暂时加倍，体细胞染色体数应为后期的一半，即8条。答案要点：8条。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图2 动植物细胞有丝分裂区别</text><rect x="50" y="90" width="260" height="220" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="120" text-anchor="middle" font-size="15" fill="#3f7d1e">植物细胞</text><line x1="180" y1="160" x2="180" y2="290" stroke="#3f7d1e" stroke-width="3"/><rect x="90" y="180" width="180" height="14" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="230" font-size="13" fill="#2e3a22">赤道板形成细胞板</text><rect x="370" y="90" width="260" height="220" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="120" text-anchor="middle" font-size="15" fill="#3f7d1e">动物细胞</text><circle cx="500" cy="180" r="50" fill="none" stroke="#3f7d1e" stroke-width="3"/><text x="500" y="250" font-size="13" fill="#2e3a22">细胞膜中部缢裂</text><polygon points="330,200 370,200 350,180" fill="#3f7d1e"/></svg>', caption: '动植物细胞末期细胞质分裂方式不同。' },
      { type: 'paragraph', text: '染色体、染色单体与DNA的数量关系：未复制时，一条染色体含1个DNA、无染色单体；复制后，一条染色体含2条染色单体、2个DNA。着丝点分裂后染色单体消失，每条染色体又只含1个DNA。' },
      { type: 'tip', text: '解题技巧：判断染色体数目数着丝点；有单体时DNA数=2×染色体数，无单体时DNA数=染色体数。图像中染色体散乱或排赤道板多为前期或中期，两极各有一套则为后期或末期。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图3 有丝分裂染色体数目变化</text><line x1="80" y1="300" x2="620" y2="300" stroke="#3f7d1e" stroke-width="2"/><line x1="80" y1="80" x2="80" y2="300" stroke="#3f7d1e" stroke-width="2"/><polyline points="80,200 200,200 200,100 360,100 360,200 600,200" fill="none" stroke="#5aa832" stroke-width="3"/><text x="200" y="230" font-size="13" fill="#2e3a22">间期2N</text><text x="360" y="90" font-size="13" fill="#2e3a22">后期4N</text><text x="340" y="335" text-anchor="middle" font-size="14" fill="#2e3a22">后期着丝点分裂使染色体数暂时加倍</text><polygon points="600,300 620,300 610,280" fill="#3f7d1e"/></svg>', caption: '有丝分裂中染色体数目在后期暂时加倍。' },
      { type: 'paragraph', text: '观察根尖分生组织细胞有丝分裂实验中，解离液为质量分数15%盐酸与体积分数95%酒精的1:1混合液；由于解离时细胞已被杀死，故在装片中看不到一个细胞连续分裂的全过程，只能看到不同时期的静态图像。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于细胞周期的叙述，正确的是（  ）', options: ['所有细胞都有细胞周期', '细胞周期包括间期和分裂期', '分裂期比间期时间长', '减数分裂也有细胞周期'], answer: '细胞周期包括间期和分裂期', explanation: '细胞周期仅存在于连续分裂的细胞中，由分裂间期和分裂期组成，其中间期耗时最长；减数分裂产生的细胞一般不再连续分裂，没有细胞周期。本题选B。' },
      { type: 'choice', question: '有丝分裂过程中，着丝点分裂、染色体数目加倍发生在（  ）', options: ['前期', '中期', '后期', '末期'], answer: '后期', explanation: '有丝分裂后期，着丝点一分为二，姐妹染色单体分开成为两条子染色体，染色体数目暂时加倍；中期染色体排列在赤道板，数目不变。本题选C。' },
      { type: 'choice', question: '动物细胞与高等植物细胞有丝分裂的主要区别是（  ）', options: ['都有细胞板', '前期纺锤体来源和末期细胞质分裂方式不同', '都靠细胞膜缢裂', '动物细胞无染色体'], answer: '前期纺锤体来源和末期细胞质分裂方式不同', explanation: '动物细胞由中心体发出星射线形成纺锤体，末期细胞膜向内凹陷缢裂；植物细胞由两极发出纺锤丝，末期形成细胞板。这是二者有丝分裂的主要区别。本题选B。' },
      { type: 'fill', question: '制作根尖有丝分裂装片的步骤是：解离、______、染色、制片。', answer: '漂洗', explanation: '观察根尖分生区细胞有丝分裂时，装片制作流程为解离、漂洗、染色、制片。解离后必须漂洗以洗去盐酸，防止影响后续染色效果，这一步不能省略。' },
      { type: 'fill', question: '有丝分裂的重要意义在于保持了亲子代细胞间______数目的恒定。', answer: '染色体', explanation: '有丝分裂将复制后的染色体精确平均分配到两个子细胞中，使亲子代细胞染色体数目保持不变，从而维持遗传性状的稳定，这是有丝分裂的核心意义。' }
    ]
  });
})();
