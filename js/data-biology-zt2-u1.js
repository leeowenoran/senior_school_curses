/* 生物学 · 高三复习 · 遗传与进化 · 第1章 · 课时：第1节 分离定律（一） */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u1',
    name: '第1节 分离定律（一）',
    chapter: '遗传与进化 · 第1章 遗传因子的发现',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、豌豆为什么是遗传实验的好材料' },
      { type: 'paragraph', text: '孟德尔选择豌豆做杂交实验，是因为豌豆有几大优点。第一，豌豆是<strong>自花传粉</strong>且<strong>闭花受粉</strong>的植物，花还没开放时就已经完成受粉，外来花粉很难进入，所以自然状态下几乎都是纯种，实验结果稳定可靠。第二，豌豆具有<strong>容易区分的相对性状</strong>，比如高茎和矮茎、圆粒和皱粒，一眼就能分辨。第三，豌豆花大，人工操作时可以对母本做去雄、套袋、授粉、再套袋的处理，严格控制交配对象。' },
      { type: 'list', items: [
        '自花传粉、闭花受粉：自然状态下一般是纯种，便于分析。',
        '具有多对易区分的相对性状：结果直观，不易混淆。',
        '花大易操作：去雄→套袋→人工授粉→再套袋，可控性强。'
      ] },
      { type: 'keypoint', text: '核心概念：相对性状是同一种生物同一性状的不同表现类型，如豌豆的高茎与矮茎。控制性状的遗传因子后来被称为基因，大写字母表示显性（如 D），小写表示隐性（如 d）。' },
      { type: 'paragraph', text: '一对相对性状的杂交实验过程如下：用纯种高茎豌豆（DD）作母本，纯种矮茎豌豆（dd）作父本进行杂交，得到的子一代（F1）全部是高茎。让 F1 自交，得到的子二代（F2）中既有高茎也有矮茎，高茎与矮茎的数量比约为 3∶1。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="280" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">豌豆一对相对性状杂交实验</text><rect x="40" y="80" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="100" y="112" font-size="16" text-anchor="middle" fill="#2e3a22">P 高茎 DD</text><rect x="230" y="80" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="290" y="112" font-size="16" text-anchor="middle" fill="#2e3a22">P 矮茎 dd</text><line x1="160" y1="107" x2="228" y2="107" stroke="#3f7d1e" stroke-width="2"/><polygon points="228,100 244,107 228,114" fill="#3f7d1e"/><text x="195" y="70" font-size="13" text-anchor="middle" fill="#5aa832">杂交</text><rect x="440" y="80" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="112" font-size="16" text-anchor="middle" fill="#2e3a22">F1 高茎 Dd</text><line x1="350" y1="107" x2="438" y2="107" stroke="#3f7d1e" stroke-width="2"/><polygon points="438,100 454,107 438,114" fill="#3f7d1e"/><line x1="500" y1="134" x2="500" y2="178" stroke="#3f7d1e" stroke-width="2"/><polygon points="493,178 500,194 507,178" fill="#3f7d1e"/><text x="560" y="160" font-size="13" fill="#5aa832">自交</text><rect x="370" y="200" width="260" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="232" font-size="16" text-anchor="middle" fill="#2e3a22">F2 高茎∶矮茎 ≈ 3∶1</text></svg>', caption: '纯种高茎与纯种矮茎杂交，F1全为高茎，F2出现性状分离且比例约为3∶1。' },
      { type: 'list', items: [
        'F1 只表现出一个亲本的性状（高茎），说明高茎对矮茎为显性。',
        'F2 中同时出现高茎和矮茎，这种现象叫性状分离。',
        'F2 高茎与矮茎之比约为 3∶1，是分离定律最直观的实验现象。'
      ] },
      { type: 'paragraph', text: '值得注意的是，无论用高茎作母本还是父本，结果都一样，说明性状遗传与性别无关。这种稳定的 3∶1 比例，是后续提出假说的事实基础。' },
      { type: 'warn', text: '易错辨析：性状分离不是「变异」，而是指杂种后代中显性和隐性性状同时出现的现象；相对性状必须限定在「同一物种、同一性状、不同表现」，例如人的身高与豌豆茎的高度不是相对性状。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="200" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">假说—演绎法基本步骤</text><rect x="20" y="90" width="110" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="75" y="120" font-size="14" text-anchor="middle" fill="#2e3a22">观察现象</text><rect x="155" y="90" width="110" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="210" y="120" font-size="14" text-anchor="middle" fill="#2e3a22">提出假说</text><rect x="290" y="90" width="110" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="345" y="120" font-size="14" text-anchor="middle" fill="#2e3a22">演绎推理</text><rect x="425" y="90" width="110" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="480" y="120" font-size="14" text-anchor="middle" fill="#2e3a22">实验验证</text><rect x="560" y="90" width="110" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="615" y="120" font-size="14" text-anchor="middle" fill="#2e3a22">得出结论</text><line x1="130" y1="115" x2="153" y2="115" stroke="#3f7d1e" stroke-width="2"/><polygon points="153,108 169,115 153,122" fill="#3f7d1e"/><line x1="265" y1="115" x2="288" y2="115" stroke="#3f7d1e" stroke-width="2"/><polygon points="288,108 304,115 288,122" fill="#3f7d1e"/><line x1="400" y1="115" x2="423" y2="115" stroke="#3f7d1e" stroke-width="2"/><polygon points="423,108 439,115 423,122" fill="#3f7d1e"/><line x1="535" y1="115" x2="558" y2="115" stroke="#3f7d1e" stroke-width="2"/><polygon points="558,108 574,115 558,122" fill="#3f7d1e"/></svg>', caption: '孟德尔用假说—演绎法研究遗传：先观察现象，再提出假说并用测交演绎验证。' },
      { type: 'example', text: '例题：纯种高茎豌豆 DD 与纯种矮茎豌豆 dd 杂交，F1 自交得到 F2。问 F2 中能稳定遗传的矮茎个体占多少？思路：F1 为 Dd，自交后代 DD∶Dd∶dd = 1∶2∶1，其中矮茎只有 dd，且 dd 是纯合子能稳定遗传，占全部个体的 1/4。答案：1/4。' },
      { type: 'tip', text: '高频考点：高考常考「F2 出现 3∶1 的条件」。需记住四个前提——子一代形成的两种配子生活力相同、雌雄配子结合机会均等、各基因型个体存活率一致、样本数量足够大。任何一条不满足都可能出现偏离。' },
      { type: 'table', headers: ['核心概念', '含义', '举例'], rows: [
        ['相对性状', '同一性状的不同表现类型', '高茎与矮茎'],
        ['显性性状', 'F1 表现出来的亲本性状', '高茎'],
        ['隐性性状', 'F1 未表现、F2 重现的性状', '矮茎'],
        ['性状分离', '杂种后代显隐性同时出现', 'F2 高∶矮≈3∶1'],
        ['纯合子', '基因组成相同，能稳定遗传', 'DD、dd'],
        ['杂合子', '基因组成不同，自交会分离', 'Dd'],
        ['等位基因', '同源染色体上控制相对性状的基因', 'D 与 d']
      ] },
      { type: 'paragraph', text: '孟德尔为解释上述现象提出了四点假说：第一，生物的性状由遗传因子决定；第二，体细胞中遗传因子成对存在；第三，形成配子时，成对的遗传因子彼此分离，分别进入不同配子；第四，受精时雌雄配子随机结合。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="240" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">测交验证分离定律</text><rect x="60" y="80" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="120" y="112" font-size="16" text-anchor="middle" fill="#2e3a22">F1 Dd</text><rect x="260" y="80" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="320" y="112" font-size="16" text-anchor="middle" fill="#2e3a22">dd 隐性</text><line x1="180" y1="107" x2="258" y2="107" stroke="#3f7d1e" stroke-width="2"/><polygon points="258,100 274,107 258,114" fill="#3f7d1e"/><text x="220" y="70" font-size="13" text-anchor="middle" fill="#5aa832">测交</text><rect x="440" y="80" width="180" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="530" y="112" font-size="16" text-anchor="middle" fill="#2e3a22">Dd ∶ dd = 1∶1</text><text x="340" y="180" font-size="14" text-anchor="middle" fill="#2e3a22">实质：减数分裂时等位基因随同源染色体分开进入不同配子</text></svg>', caption: '用 F1 与隐性纯合子测交，若后代高∶矮=1∶1，则证明 F1 产生两种比例相等的配子。' },
      { type: 'keypoint', text: '分离定律实质：在杂合子的细胞中，位于一对同源染色体上的等位基因具有一定的独立性；减数分裂形成配子时，等位基因随同源染色体的分开而分离，分别进入两个配子中，独立地随配子遗传给后代。' },
      { type: 'paragraph', text: '为了验证假说，孟德尔设计了测交实验：让 F1（Dd）与隐性纯合子（dd）杂交。如果假说正确，F1 应产生含 D 和 d 的两种配子且比例 1∶1，测交后代应为 Dd（高）∶dd（矮）= 1∶1。实验结果果然如此，假说得到证实。' },
      { type: 'tip', text: '复习提示：把等位基因比作一对性格相反的孪生兄弟，平时形影不离（在同源染色体上），一旦要分家（减数分裂），两人各奔东西进入不同配子，所以后代会出现性状分离。这种比喻有助于理解分离定律的本质。' }
    ],
    exercises: [
      { type: 'choice', question: '豌豆在自然状态下一般是纯种，其主要原因是', options: ['自花传粉且闭花受粉', '生长周期短', '种子颗粒较大', '容易区分相对性状'], answer: '自花传粉且闭花受粉', explanation: '豌豆是严格的自花传粉、闭花受粉植物，花未开放已完成受粉，外来花粉难以进入，因此自然状态下几乎都是纯种，这是孟德尔实验成功的重要前提。' },
      { type: 'choice', question: '纯种高茎豌豆与纯种矮茎豌豆杂交，F2 中高茎与矮茎的比例约为', options: ['1∶1', '2∶1', '3∶1', '9∶3∶3∶1'], answer: '3∶1', explanation: 'F1 为杂合子 Dd，自交后代基因型为 DD∶Dd∶dd = 1∶2∶1，表现型高茎∶矮茎 = 3∶1，这是性状分离的典型比例。' },
      { type: 'choice', question: '孟德尔验证分离定律时采用的测交，是用 F1 与下列哪类个体杂交', options: ['显性纯合子', '隐性纯合子', '杂合子', '任意个体'], answer: '隐性纯合子', explanation: '测交是用 F1 与隐性纯合子杂交，因为隐性纯合子只产生一种含隐性基因的配子，能直接反映 F1 产生配子的种类和比例，从而验证对分离现象的解释。' },
      { type: 'fill', question: 'F1 全部表现为高茎，说明高茎对矮茎为_____性状。', answer: '显性', explanation: '具有相对性状的纯合亲本杂交，F1 显现出来的性状叫显性性状，未显现的叫隐性性状，因此高茎是显性性状。' },
      { type: 'fill', question: '分离定律的实质是：减数分裂形成配子时，_____基因随同源染色体的分开而分离，进入不同配子。', answer: '等位', explanation: '等位基因位于一对同源染色体上，减数第一次分裂时同源染色体分离，其上的等位基因也随之分离，分别进入两个配子，这就是分离定律的细胞学实质。' }
    ]
  });
})();
