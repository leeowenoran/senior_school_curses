/* 生物学 · 高三复习 · 遗传与进化 · 第1章 · 课时：第2节 自由组合定律 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u3',
    name: '第2节 自由组合定律',
    chapter: '遗传与进化 · 第1章 遗传因子的发现',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、两对相对性状的杂交实验' },
      { type: 'paragraph', text: '孟德尔在研究完一对相对性状后，又用纯种黄色圆粒豌豆（YYRR）与纯种绿色皱粒豌豆（yyrr）做两对相对性状杂交。子一代（F1）全部是黄色圆粒（YyRr），说明黄色对绿色为显性、圆粒对皱粒为显性。让 F1 自交得到 F2，出现了四种表现型：黄色圆粒、黄色皱粒、绿色圆粒、绿色皱粒，比例约为 9∶3∶3∶1。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="280" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">两对相对性状杂交实验</text><rect x="30" y="80" width="130" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="95" y="112" font-size="15" text-anchor="middle" fill="#2e3a22">P 黄圆 YYRR</text><rect x="220" y="80" width="130" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="285" y="112" font-size="15" text-anchor="middle" fill="#2e3a22">P 绿皱 yyrr</text><line x1="160" y1="107" x2="218" y2="107" stroke="#3f7d1e" stroke-width="2"/><polygon points="218,100 234,107 218,114" fill="#3f7d1e"/><rect x="420" y="80" width="140" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="490" y="112" font-size="15" text-anchor="middle" fill="#2e3a22">F1 黄圆 YyRr</text><line x1="350" y1="107" x2="418" y2="107" stroke="#3f7d1e" stroke-width="2"/><polygon points="418,100 434,107 418,114" fill="#3f7d1e"/><line x1="490" y1="134" x2="490" y2="178" stroke="#3f7d1e" stroke-width="2"/><polygon points="483,178 490,194 497,178" fill="#3f7d1e"/><rect x="370" y="200" width="240" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="490" y="232" font-size="15" text-anchor="middle" fill="#2e3a22">F2 黄圆∶黄皱∶绿圆∶绿皱 = 9∶3∶3∶1</text></svg>', caption: '两对相对性状杂交，F1全为双显性，F2出现四种表现型且比例约为9∶3∶3∶1。' },
      { type: 'list', items: [
        'F2 中两种亲本类型（黄圆、绿皱）与两种重组类型（黄皱、绿圆）并存。',
        '每一对相对性状单独看，都符合 3∶1 的分离比（黄∶绿=3∶1，圆∶皱=3∶1）。',
        '两对性状组合呈现 9∶3∶3∶1，是自由组合定律的典型标志。'
      ] },
      { type: 'keypoint', text: '自由组合定律实质：位于非同源染色体上的非等位基因的分离或组合是互不干扰的。减数第一次分裂时，同源染色体上的等位基因彼此分离的同时，非同源染色体上的非等位基因自由组合。' },
      { type: 'paragraph', text: '对 9∶3∶3∶1 的解释：F1（YyRr）在形成配子时，每对等位基因彼此分离（Y 与 y 分离、R 与 r 分离），而不同对的基因自由组合，结果产生四种比例相等的配子：YR、Yr、yR、yr，各占 1/4。雌雄配子随机结合，F2 共有 9 种基因型、4 种表现型。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="200" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">F1 产生四种等量配子</text><rect x="40" y="90" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="100" y="122" font-size="18" text-anchor="middle" fill="#2e3a22">YR</text><rect x="200" y="90" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="260" y="122" font-size="18" text-anchor="middle" fill="#2e3a22">Yr</text><rect x="360" y="90" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="420" y="122" font-size="18" text-anchor="middle" fill="#2e3a22">yR</text><rect x="520" y="90" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="580" y="122" font-size="18" text-anchor="middle" fill="#2e3a22">yr</text><line x1="160" y1="117" x2="198" y2="117" stroke="#3f7d1e" stroke-width="2"/><polygon points="198,110 214,117 198,124" fill="#3f7d1e"/><line x1="320" y1="117" x2="358" y2="117" stroke="#3f7d1e" stroke-width="2"/><polygon points="358,110 374,117 358,124" fill="#3f7d1e"/><line x1="480" y1="117" x2="518" y2="117" stroke="#3f7d1e" stroke-width="2"/><polygon points="518,110 534,117 518,124" fill="#3f7d1e"/><text x="340" y="180" font-size="14" text-anchor="middle" fill="#5aa832">每对基因分离，不同对自由组合，四种配子比例相等</text></svg>', caption: 'F1 减数分裂产生 YR、Yr、yR、yr 四种等量配子，是自由组合的细胞学基础。' },
      { type: 'table', headers: ['F2 表现型', '比例', '对应基因型范围'], rows: [
        ['黄色圆粒', '9', 'Y_R_（4种基因型）'],
        ['黄色皱粒', '3', 'Y_rr（2种基因型）'],
        ['绿色圆粒', '3', 'yyR_（2种基因型）'],
        ['绿色皱粒', '1', 'yyrr（1种基因型）']
      ] },
      { type: 'example', text: '例题：南瓜的黄色（Y）对白色（y）为显性，圆形（R）对盘状（r）为显性。黄圆（YyRr）与白盘（yyrr）测交，求后代表现型比例。思路：YyRr 产生 YR、Yr、yR、yr 四种等量配子，yyrr 只产 yr 一种配子，结合后四种表现型比例相等。答案：黄圆∶黄盘∶白圆∶白盘 = 1∶1∶1∶1。' },
      { type: 'warn', text: '易错辨析：9∶3∶3∶1 是「双显、单显、另一单显、双隐」四种表现型的比例；不要把它和测交的 1∶1∶1∶1 混淆。另外，只有当两对基因独立遗传（位于非同源染色体）时才成立，若基因连锁则比例会改变。' },
      { type: 'paragraph', text: '孟德尔用测交验证自由组合：让 F1（YyRr）与隐性纯合子（yyrr）杂交。若假说正确，F1 应产生四种等量配子，测交后代应为黄圆∶黄皱∶绿圆∶绿皱 = 1∶1∶1∶1。实验结果与此一致，自由组合定律得到证实。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="220" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">测交验证自由组合</text><rect x="60" y="80" width="150" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="135" y="112" font-size="15" text-anchor="middle" fill="#2e3a22">F1 YyRr 黄圆</text><rect x="280" y="80" width="150" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="355" y="112" font-size="15" text-anchor="middle" fill="#2e3a22">yyrr 绿皱</text><line x1="210" y1="107" x2="278" y2="107" stroke="#3f7d1e" stroke-width="2"/><polygon points="278,100 294,107 278,114" fill="#3f7d1e"/><rect x="440" y="80" width="200" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="540" y="112" font-size="15" text-anchor="middle" fill="#2e3a22">四种表现型 = 1∶1∶1∶1</text><text x="340" y="175" font-size="14" text-anchor="middle" fill="#2e3a22">后代四种表现型比例相等，证明 F1 产生四种等量配子</text></svg>', caption: 'F1 与双隐性纯合子测交，后代四种表现型比例为 1∶1∶1∶1，验证自由组合。' },
      { type: 'tip', text: '高频考点：自由组合题的核心技巧是「先分后合」。把两对基因拆成两对分离定律分别算概率，再用乘法原理相乘。例如求 YyRr × YyRr 中黄皱（Y_rr）概率：黄的概率 3/4 × 皱的概率 1/4 = 3/16。' },
      { type: 'table', headers: ['变式比例', '互作类型', '含义'], rows: [
        ['9∶7', '互补作用', '两对显性基因互补，只有双显（Y_R_）才表现某性状'],
        ['9∶3∶4', '隐性上位', '隐性基因（如 aa）掩盖另一对基因的表达'],
        ['12∶3∶1', '显性上位', '显性基因（如 A_）掩盖另一对基因的表达'],
        ['15∶1', '叠加作用', '只要有显性基因即表现同一性状，仅双隐不同'],
        ['1∶4∶6∶4∶1', '累加作用', '显性基因个数（0、1、2、3、4）决定表现型']
      ] },
      { type: 'tip', text: '复习提示：看到异常比例（9∶7、12∶3∶1 等）时，先把它还原成「总数为 16 份」的组合，再判断是哪种基因互作。只要总数仍是 16，本质仍是自由组合，只是表现型归类方式改变。' },
      { type: 'list', items: [
        '第一步：判断两对基因是否独立遗传（位于非同源染色体）。',
        '第二步：拆成两对分离定律，分别求各表现型概率。',
        '第三步：用乘法原理合并；遇到变式先还原成 16 份再归类。'
      ] },
      { type: 'paragraph', text: '自由组合定律与分离定律的关系：分离定律是自由组合定律的基础，自由组合定律是分离定律的延伸。两对及以上相对性状遗传时，每一对都遵循分离定律，对与对之间再自由组合，共同决定了后代丰富多样的性状组合。' },
      { type: 'paragraph', text: '在育种实践中，自由组合原理被用来将不同亲本的优良性状组合到一起。例如把抗病（R）与不抗病（r）、高产（Y）与低产（y）两个独立遗传的性状结合，先杂交再连续自交筛选，就能培育出既抗病又高产的新品种。这正是自由组合定律在生产上的直接应用。' }
    ],
    exercises: [
      { type: 'choice', question: '纯种黄圆（YYRR）与纯种绿皱（yyrr）杂交，F2 四种表现型的比例为', options: ['3∶1', '9∶3∶3∶1', '1∶1', '1∶1∶1∶1'], answer: '9∶3∶3∶1', explanation: '两对相对性状自由组合时，F2 出现黄圆、黄皱、绿圆、绿皱四种表现型，比例约为 9∶3∶3∶1，这是自由组合定律的典型比例。' },
      { type: 'choice', question: '基因型为 YyRr 的 F1 个体减数分裂产生的配子种类数为', options: ['1种', '2种', '4种', '9种'], answer: '4种', explanation: 'YyRr 在形成配子时，等位基因分离、非等位基因自由组合，产生 YR、Yr、yR、yr 四种比例相等的配子。' },
      { type: 'choice', question: 'F1（YyRr）与隐性纯合子（yyrr）测交，后代表现型比例为', options: ['3∶1', '9∶3∶3∶1', '1∶1', '1∶1∶1∶1'], answer: '1∶1∶1∶1', explanation: '测交中隐性纯合子只产生一种配子，F1 的四种配子直接决定后代表现型，故四种表现型比例为 1∶1∶1∶1。' },
      { type: 'fill', question: '自由组合定律的实质是：非同源染色体上的_____基因自由组合。', answer: '非等位', explanation: '减数第一次分裂时，同源染色体上的等位基因彼此分离，同时非同源染色体上的非等位基因自由组合，互不干扰。' },
      { type: 'fill', question: '若 F2 出现 9∶7 的比例，通常说明两对基因之间存在_____作用。', answer: '互补', explanation: '9∶7 是互补作用的典型比例，表示只有两对基因都为显性（Y_R_）时才表现某一性状，其余 7 份表现为另一种性状。' }
    ]
  });
})();
