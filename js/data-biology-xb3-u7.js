/* 生物学 · 选择性必修3 生物技术与工程 · 第2章 细胞工程 · 课时：第3节 胚胎工程 */
(function () {
  var v = gzGetVolume('biology', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u7',
    name: '第3节 胚胎工程',
    chapter: '选择性必修3 生物技术与工程 · 第2章 细胞工程',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、胚胎工程的概念' },
      { type: 'paragraph', text: '胚胎工程是指对动物的生殖细胞、受精卵或早期胚胎进行多种显微操作和处理，然后让它继续发育成新个体的技术。常见的技术有体外受精、胚胎移植、胚胎分割和胚胎干细胞培养等。' },
      { type: 'keypoint', text: '<strong>胚胎工程的操作对象</strong>：不是成年动物的任意细胞，而是生殖细胞（精子、卵细胞）、受精卵以及早期胚胎，这些材料才可能发育成完整动物个体。' },
      { type: 'heading', text: '二、受精' },
      { type: 'paragraph', text: '受精是精子和卵细胞结合形成受精卵的过程。精子必须先获能（在雌性生殖道或获能液中获得受精能力），卵母细胞也要发育到MⅡ中期才成熟，两者才能正常结合。' },
      { type: 'list', items: [
        '顶体反应：精子头部的顶体释放酶，溶解放射冠和透明带，打开进入卵子的通道。',
        '透明带反应：精子进入后透明带发生变化，阻止其他精子再进入，是防止多精入卵的第一道屏障。',
        '卵细胞膜反应：精子入卵后卵细胞膜拒绝其他精子，是防止多精入卵的第二道屏障。',
        '雌雄原核形成与融合：精子和卵子的核分别形成雄原核、雌原核，二者融合成受精卵的核。'
      ] },
      { type: 'warn', text: '<strong>两道屏障的意义</strong>：透明带反应和卵细胞膜反应共同保证一个卵子通常只与一个精子结合，避免出现多精入卵而导致染色体数目异常的胚胎。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">图（a）受精过程示意图</text><ellipse cx="55" cy="165" rx="20" ry="13" fill="#5aa832"/><line x1="75" y1="165" x2="115" y2="165" stroke="#5aa832" stroke-width="4"/><text x="55" y="200" text-anchor="middle" font-size="13" fill="#2e3a22">精子</text><rect x="150" y="140" width="110" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="205" y="167" text-anchor="middle" font-size="14" fill="#2e3a22">顶体反应</text><rect x="280" y="140" width="110" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="335" y="167" text-anchor="middle" font-size="14" fill="#2e3a22">透明带反应</text><rect x="410" y="140" width="110" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="465" y="167" text-anchor="middle" font-size="14" fill="#2e3a22">卵细胞膜反应</text><rect x="540" y="140" width="110" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="595" y="167" text-anchor="middle" font-size="14" fill="#2e3a22">原核融合</text><line x1="115" y1="165" x2="146" y2="162" stroke="#3f7d1e" stroke-width="3"/><polygon points="150,162 136,154 136,170" fill="#3f7d1e"/><line x1="260" y1="162" x2="276" y2="162" stroke="#3f7d1e" stroke-width="3"/><polygon points="280,162 266,154 266,170" fill="#3f7d1e"/><line x1="390" y1="162" x2="406" y2="162" stroke="#3f7d1e" stroke-width="3"/><polygon points="410,162 396,154 396,170" fill="#3f7d1e"/><line x1="520" y1="162" x2="536" y2="162" stroke="#3f7d1e" stroke-width="3"/><polygon points="540,162 526,154 526,170" fill="#3f7d1e"/><text x="335" y="210" text-anchor="middle" font-size="13" fill="#2e3a22">第一道屏障</text><text x="465" y="210" text-anchor="middle" font-size="13" fill="#2e3a22">第二道屏障</text><text x="340" y="270" text-anchor="middle" font-size="14" fill="#2e3a22">精子获能后穿越透明带，两道屏障防止多精入卵</text></svg>', caption: '受精过程：顶体反应打开通道，透明带反应和卵细胞膜反应防止多精入卵，最后雌雄原核融合。' },
      { type: 'heading', text: '三、胚胎早期发育' },
      { type: 'paragraph', text: '受精卵形成后开始分裂。卵裂是有丝分裂，细胞数目不断增多，但胚胎总体积并不增大，有机物总量反而减少。随着分裂进行，胚胎依次经历桑葚胚、囊胚、原肠胚。' },
      { type: 'list', items: [
        '卵裂：受精卵反复有丝分裂，细胞数增多、总体积不增。',
        '桑葚胚：细胞数目达到32个左右，形似桑葚，细胞都具有全能性。',
        '囊胚：出现囊胚腔，细胞分化为内细胞团和滋养层。',
        '原肠胚：出现外胚层、中胚层、内胚层三个胚层。'
      ] },
      { type: 'table', headers: ['发育阶段', '主要特点'], rows: [
        ['卵裂', '有丝分裂，细胞数增多，总体积基本不变'],
        ['桑葚胚', '约32个细胞，细胞均有全能性'],
        ['囊胚', '有囊胚腔，出现内细胞团和滋养层'],
        ['原肠胚', '出现外、中、内三个胚层']
      ] },
      { type: 'keypoint', text: '<strong>囊胚的关键结构</strong>：囊胚中出现内细胞团（将来发育成胎儿的各种组织）和滋养层（将来发育成胎膜和胎盘），以及充满液体的囊胚腔。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">图（b）胚胎早期发育阶段</text><circle cx="95" cy="150" r="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><circle cx="82" cy="140" r="7" fill="#5aa832"/><circle cx="105" cy="138" r="7" fill="#5aa832"/><circle cx="95" cy="162" r="7" fill="#5aa832"/><circle cx="115" cy="160" r="7" fill="#5aa832"/><circle cx="80" cy="165" r="6" fill="#5aa832"/><circle cx="110" cy="150" r="6" fill="#5aa832"/><text x="95" y="225" text-anchor="middle" font-size="14" fill="#2e3a22">卵裂</text><circle cx="265" cy="150" r="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><circle cx="255" cy="140" r="6" fill="#5aa832"/><circle cx="272" cy="138" r="6" fill="#5aa832"/><circle cx="262" cy="155" r="6" fill="#5aa832"/><circle cx="278" cy="153" r="6" fill="#5aa832"/><circle cx="258" cy="165" r="6" fill="#5aa832"/><circle cx="275" cy="165" r="6" fill="#5aa832"/><circle cx="268" cy="148" r="6" fill="#5aa832"/><text x="265" y="225" text-anchor="middle" font-size="14" fill="#2e3a22">桑葚胚</text><circle cx="435" cy="150" r="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><circle cx="435" cy="135" r="16" fill="#5aa832"/><text x="435" y="225" text-anchor="middle" font-size="14" fill="#2e3a22">囊胚</text><circle cx="605" cy="150" r="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><path d="M575 130 A30 30 0 0 1 635 130" fill="none" stroke="#5aa832" stroke-width="4"/><path d="M580 150 A25 25 0 0 0 630 150" fill="none" stroke="#3f7d1e" stroke-width="3"/><path d="M585 170 A20 20 0 0 1 625 170" fill="none" stroke="#5aa832" stroke-width="3"/><text x="605" y="225" text-anchor="middle" font-size="14" fill="#2e3a22">原肠胚</text><line x1="150" y1="150" x2="210" y2="150" stroke="#3f7d1e" stroke-width="3"/><polygon points="214,150 200,142 200,158" fill="#3f7d1e"/><line x1="320" y1="150" x2="380" y2="150" stroke="#3f7d1e" stroke-width="3"/><polygon points="384,150 370,142 370,158" fill="#3f7d1e"/><line x1="490" y1="150" x2="550" y2="150" stroke="#3f7d1e" stroke-width="3"/><polygon points="554,150 540,142 540,158" fill="#3f7d1e"/><text x="340" y="290" text-anchor="middle" font-size="14" fill="#2e3a22">卵裂 → 桑葚胚 → 囊胚（内细胞团、滋养层）→ 原肠胚（三胚层）</text></svg>', caption: '胚胎早期发育：卵裂增加细胞数，依次形成桑葚胚、囊胚和具三胚层的原肠胚。' },
      { type: 'heading', text: '四、体外受精与胚胎移植' },
      { type: 'paragraph', text: '体外受精是在体外让卵子和精子结合形成受精卵；胚胎移植则是把早期胚胎移植到代孕母畜子宫内继续发育。两者结合，让优良母畜生出更多后代。' },
      { type: 'list', items: [
        '卵母细胞采集与培养：从卵巢采集卵母细胞，培养到MⅡ中期。',
        '精子获能：使精子获得受精能力。',
        '体外受精：在体外完成精卵结合。',
        '胚胎移植：供体超数排卵并与受体同期发情，冲卵收集胚胎后移植入受体子宫。'
      ] },
      { type: 'keypoint', text: '<strong>胚胎移植的生理学基础</strong>：同一物种的受体子宫不会对移入的胚胎发生免疫排斥，并且受体与供体生理状态同期化（同期发情），为胚胎提供相同的发育环境，所以移植容易成功。' },
      { type: 'heading', text: '五、胚胎分割' },
      { type: 'paragraph', text: '胚胎分割是用分割针把早期胚胎（桑葚胚或囊胚）切成几份，每份都能发育成一个个体，从而得到遗传完全相同的同卵多胎。' },
      { type: 'example', text: '<strong>同卵双胎或多胎</strong>：把一枚桑葚胚或囊胚均等地分割成两份或四份，分别移植，生下的个体遗传物质完全相同，相当于人工制造的同卵双胞胎，常用于优良家畜的快速扩繁。' },
      { type: 'heading', text: '六、胚胎干细胞' },
      { type: 'paragraph', text: '胚胎干细胞（ES细胞）来自早期胚胎（如囊胚的内细胞团）或原始性腺，具有发育的全能性，可以诱导分化成各种组织器官，在器官修复、药物筛选等方面前景广阔。' },
      { type: 'tip', text: '记忆对比：胚胎发育顺序为卵裂、桑葚胚、囊胚、原肠胚；囊胚的内细胞团是ES细胞的来源；胚胎分割要选桑葚胚或囊胚，且要均等分割。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">图（c）胚胎移植流程图</text><rect x="20" y="130" width="120" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="80" y="157" text-anchor="middle" font-size="13" fill="#2e3a22">供体（超数排卵）</text><rect x="150" y="130" width="120" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="210" y="157" text-anchor="middle" font-size="13" fill="#2e3a22">配种/体外受精</text><rect x="280" y="130" width="120" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="157" text-anchor="middle" font-size="13" fill="#2e3a22">冲卵取胚胎</text><rect x="410" y="130" width="120" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="470" y="157" text-anchor="middle" font-size="13" fill="#2e3a22">胚胎移植</text><rect x="540" y="130" width="120" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="600" y="157" text-anchor="middle" font-size="13" fill="#2e3a22">受体分娩</text><line x1="140" y1="152" x2="146" y2="152" stroke="#3f7d1e" stroke-width="3"/><polygon points="150,152 136,144 136,160" fill="#3f7d1e"/><line x1="270" y1="152" x2="276" y2="152" stroke="#3f7d1e" stroke-width="3"/><polygon points="280,152 266,144 266,160" fill="#3f7d1e"/><line x1="400" y1="152" x2="406" y2="152" stroke="#3f7d1e" stroke-width="3"/><polygon points="410,152 396,144 396,160" fill="#3f7d1e"/><line x1="530" y1="152" x2="536" y2="152" stroke="#3f7d1e" stroke-width="3"/><polygon points="540,152 526,144 526,160" fill="#3f7d1e"/><text x="80" y="195" text-anchor="middle" font-size="12" fill="#2e3a22">注射促性腺激素</text><text x="600" y="195" text-anchor="middle" font-size="12" fill="#2e3a22">需同期发情</text><text x="340" y="270" text-anchor="middle" font-size="14" fill="#2e3a22">供体超数排卵，受体同期发情，冲卵后移植，子宫不排斥胚胎</text></svg>', caption: '胚胎移植：供体超数排卵并与受体同期发情，冲卵收集胚胎后移植入受体，妊娠分娩。' }
    ],
    exercises: [
      { type: 'choice', question: '防止多精入卵的第一道屏障是下列哪一项？', options: ['透明带反应', '卵细胞膜反应', '顶体反应', '雌雄原核融合'], answer: '透明带反应', explanation: '精子进入卵子后，透明带立即发生生理反应，阻止其他精子穿过透明带，这是防止多精入卵的第一道屏障；随后卵细胞膜反应构成第二道屏障，两者共同保证单精受精。' },
      { type: 'choice', question: '在胚胎早期发育中，首先出现细胞分化（形成内细胞团和滋养层）的阶段是哪一项？', options: ['囊胚', '桑葚胚', '卵裂期', '受精卵'], answer: '囊胚', explanation: '桑葚胚阶段的细胞都具有全能性、尚未分化；到囊胚阶段出现了囊胚腔，细胞分化为内细胞团和滋养层，这是胚胎发育中细胞开始分化的标志，原肠胚进一步形成三个胚层。' },
      { type: 'choice', question: '进行胚胎分割时，通常选用的胚胎发育阶段是哪一项？', options: ['桑葚胚或囊胚', '原肠胚', '刚排出的卵细胞', '孵化的幼体'], answer: '桑葚胚或囊胚', explanation: '桑葚胚和囊胚阶段的细胞分化程度还比较低，分割后每块仍能发育成完整个体；分割时必须做到均等分割，尤其囊胚要注意内细胞团的均等分配，否则会影响发育。' },
      { type: 'fill', question: '为了使供体母畜排出更多卵子，在胚胎移植前常注射促性腺激素，这一过程称为________________。', answer: '超数排卵', explanation: '超数排卵是用促性腺激素处理供体母畜，使其一次排出比自然状态下多得多的卵子，从而获得更多可用胚胎，再结合体外受精或配种提高繁殖效率。' },
      { type: 'fill', question: '胚胎干细胞（ES细胞）主要来自早期胚胎囊胚中的________________（填结构名称）。', answer: '内细胞团', explanation: '囊胚由内细胞团和滋养层组成，其中内细胞团细胞具有发育的全能性，是分离胚胎干细胞的主要来源，可诱导分化成多种组织和器官用于医学研究。' }
    ]
  });
})();
