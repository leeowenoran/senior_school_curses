/* 生物学 · 必修1 分子与细胞 · 第6章 · 课时：第3节 细胞的衰老和凋亡 */
(function () {
  var v = gzGetVolume('biology', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u20',
    name: '第3节 细胞的衰老和凋亡',
    chapter: '必修1 分子与细胞 · 第6章 细胞的生命历程',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、个体衰老与细胞衰老的关系' },
      { type: 'paragraph', text: '对于多细胞生物，个体的衰老是组成身体的<strong>绝大多数细胞普遍衰老</strong>的结果。单细胞生物（如草履虫）的细胞衰老就是个体的衰老；而多细胞生物体内，每时每刻都有细胞在衰老、死亡，同时又有新细胞产生，总体上老年个体中衰老细胞的比例更高。' },
      { type: 'list', items: ['单细胞生物：细胞衰老 = 个体衰老', '多细胞生物：个体衰老是细胞普遍衰老的过程', '年轻个体中也有衰老、凋亡的细胞，这是正常新陈代谢', '老年个体中新生细胞比例下降、衰老细胞积累'] },
      { type: 'heading', text: '二、细胞衰老的特征' },
      { type: 'paragraph', text: '衰老的细胞在结构和功能上会发生一系列变化，教材概括为「一小、一多、两低」等：细胞内水分减少使细胞萎缩、体积变小；多种酶活性降低；色素（如脂褐素）逐渐积累；呼吸速率减慢；细胞膜的通透性改变，物质运输功能降低。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">衰老细胞的主要特征</text><rect x="40" y="70" width="180" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="130" y="110" font-size="14" fill="#3f7d1e" text-anchor="middle" font-weight="bold">结构与代谢</text><text x="130" y="142" font-size="13" fill="#2e3a22" text-anchor="middle">水分减少、体积变小</text><text x="130" y="170" font-size="13" fill="#2e3a22" text-anchor="middle">酶活性降低</text><text x="130" y="198" font-size="13" fill="#2e3a22" text-anchor="middle">呼吸速率减慢</text><rect x="250" y="70" width="180" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="110" font-size="14" fill="#3f7d1e" text-anchor="middle" font-weight="bold">物质积累</text><text x="340" y="142" font-size="13" fill="#2e3a22" text-anchor="middle">色素积累（老年斑）</text><text x="340" y="170" font-size="13" fill="#2e3a22" text-anchor="middle">染色质收缩</text><text x="340" y="198" font-size="13" fill="#2e3a22" text-anchor="middle">核体积增大</text><rect x="460" y="70" width="180" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="110" font-size="14" fill="#3f7d1e" text-anchor="middle" font-weight="bold">膜的变化</text><text x="550" y="142" font-size="13" fill="#2e3a22" text-anchor="middle">通透性改变</text><text x="550" y="170" font-size="13" fill="#2e3a22" text-anchor="middle">物质运输功能降低</text><text x="550" y="198" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">整体功能下降</text><text x="340" y="310" font-size="13" fill="#2e3a22" text-anchor="middle">衰老细胞多项指标下降，最终被机体清除或由凋亡结束生命。</text></svg>', caption: '图1　衰老细胞在结构、代谢、膜功能等方面都表现出衰退特征。' },
      { type: 'keypoint', label: '重点·细胞衰老的特征', text: '<strong>细胞衰老的主要特征可记为：水分减少体积小、酶活性降代谢慢、色素积累生老年斑、呼吸减慢核固缩、膜透性变差运输难。</strong>这些变化的共同结果是细胞执行正常功能的能力下降，是机体老化的细胞学基础。' },
      { type: 'heading', text: '三、细胞衰老的学说' },
      { type: 'paragraph', text: '<strong>自由基学说</strong>认为，细胞代谢中会产生攻击生物膜的自由基，损伤蛋白质和 DNA，使细胞功能逐渐衰退。机体自身有清除自由基的酶（如超氧化物歧化酶），但随年龄增长清除能力下降。' },
      { type: 'paragraph', text: '<strong>端粒学说</strong>认为，染色体两端的端粒 DNA 序列会随细胞分裂而逐渐缩短；当端粒短到一定程度，细胞就停止分裂而走向衰老。因此端粒被称为细胞的「分子钟」。' },
      { type: 'table', headers: ['学说', '核心观点', '关键结构/物质'], rows: [['自由基学说', '自由基攻击细胞组分导致损伤积累', '自由基、抗氧化酶'], ['端粒学说', '端粒随分裂缩短，短到极限则衰老', '染色体端粒']] },
      { type: 'heading', text: '四、细胞的凋亡' },
      { type: 'paragraph', text: '<strong>细胞凋亡</strong>是由基因决定的细胞自动结束生命的过程，又叫做细胞编程性死亡。它对于多细胞生物体完成正常发育、维持内部环境稳定，以及抵御外界干扰都十分重要，是一种对机体有利的、主动的过程。' },
      { type: 'list', items: ['蝌蚪发育成青蛙时，尾部的细胞凋亡使尾巴消失', '人胚胎发育中，指间细胞凋亡使手指分开而不是连成蹼', '衰老或受损的细胞通过凋亡被清除，避免影响正常组织'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">细胞凋亡的实例</text><rect x="40" y="80" width="270" height="160" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="175" y="115" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">蝌蚪尾消失</text><text x="175" y="148" font-size="13" fill="#2e3a22" text-anchor="middle">尾部细胞凋亡</text><text x="175" y="176" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">正常发育所需</text><text x="175" y="205" font-size="13" fill="#2e3a22" text-anchor="middle">由基因控制</text><rect x="370" y="80" width="270" height="160" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="505" y="115" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">指间细胞凋亡</text><text x="505" y="148" font-size="13" fill="#2e3a22" text-anchor="middle">指间细胞死亡</text><text x="505" y="176" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">手指分开成形</text><text x="505" y="205" font-size="13" fill="#2e3a22" text-anchor="middle">由基因控制</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">凋亡是基因决定的、对机体有利的程序性死亡，贯穿发育与维持稳态全过程。</text></svg>', caption: '图2　蝌蚪尾消失、指间细胞凋亡都是基因控制的正常发育过程。' },
      { type: 'warn', label: '易错·凋亡与坏死不同', text: '细胞凋亡是<strong>基因控制的、主动的、对机体有利</strong>的程序性死亡；而细胞坏死是外界不利因素（如强酸、高热、机械损伤）导致细胞被动破裂死亡，常引起炎症反应，对机体有害。二者不可混为一谈，凋亡不是「病理性死亡」。' },
      { type: 'example', label: '例题·判断凋亡', text: '人的胚胎发育到第 5 周时，手指之间由蹼相连；到第 8 周蹼消失，手指分开。问这一变化属于什么过程？<br>答：指间细胞在基因控制下自动结束生命，使手指分开，属于细胞凋亡。这是正常发育必需的、对机体有利的程序性死亡，而不是外界损伤造成的坏死。' },
      { type: 'heading', text: '五、凋亡的意义与坏死对比' },
      { type: 'paragraph', text: '细胞凋亡在生物体中具有不可替代的作用：它清除多余、受损或危险细胞，维持组织器官的正常形态和功能。与之相对，细胞坏死是突发、被动的死亡，往往破坏周围结构。理解二者的区别，有助于认识许多疾病和衰老现象。' },
      { type: 'tip', label: '提示·一句话记住', text: '把细胞凋亡想成「身体按计划拆迁旧房子」，有序、有益；把坏死想成「房子被意外炸毁」，混乱、有害。口诀：<strong>凋亡主动利机体，坏死被动害相邻</strong>。考试常考两者区别，抓住「是否由基因决定、是否有利」即可判断。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">细胞凋亡与坏死的对比</text><rect x="40" y="70" width="270" height="160" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="175" y="110" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">细胞凋亡</text><text x="175" y="145" font-size="13" fill="#2e3a22" text-anchor="middle">基因决定、主动</text><text x="175" y="175" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">对机体有利、无炎症</text><polygon points="310,150 348,138 348,162" fill="#3f7d1e"/><rect x="370" y="70" width="270" height="160" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="505" y="110" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">细胞坏死</text><text x="505" y="145" font-size="13" fill="#2e3a22" text-anchor="middle">外界损伤、被动</text><text x="505" y="175" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">对机体有害、常发炎</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">判断关键：是否由基因程序控制、是否对机体有利。</text></svg>', caption: '图3　凋亡与坏死在原因、主动性和对机体影响上截然不同。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于细胞衰老特征的说法，正确的是？', options: ['水分增多、体积变大', '酶活性升高、代谢加快', '水分减少、酶活性降低', '细胞膜通透性不变'], answer: '水分减少、酶活性降低', explanation: '衰老细胞表现为水分减少、细胞萎缩、体积变小；多种酶活性降低、代谢减慢；色素积累；呼吸变慢；细胞膜通透性改变、物质运输功能下降。因此正确选项是水分减少、酶活性降低。' },
      { type: 'choice', question: '蝌蚪发育成青蛙时尾巴消失，属于什么过程？', options: ['细胞坏死', '细胞凋亡', '细胞癌变', '细胞分化'], answer: '细胞凋亡', explanation: '蝌蚪尾部的细胞在基因控制下自动结束生命，使尾巴消失，这是正常发育必需的、对机体有利的程序性死亡，属于细胞凋亡。细胞坏死是外界损伤导致的被动死亡。因此选细胞凋亡。' },
      { type: 'choice', question: '细胞凋亡与细胞坏死的根本区别是？', options: ['是否由基因决定', '是否发生在胚胎期', '是否消耗 ATP', '是否有细胞膜'], answer: '是否由基因决定', explanation: '细胞凋亡是由基因决定的、主动的程序性死亡，对机体有利；细胞坏死是外界不利因素导致的被动死亡，对机体有害。二者最根本的区别在于是否由基因程序控制、是否有利机体。因此选是否由基因决定。' },
      { type: 'fill', question: '端粒学说认为，染色体两端的___会随细胞分裂次数的增加而逐渐缩短，短到一定程度细胞就走向衰老。', answer: '端粒', explanation: '端粒是染色体末端的一段 DNA 序列，每次细胞分裂都会有所损耗、逐渐缩短。当端粒短到极限，细胞便停止分裂并走向衰老，因此端粒被称为细胞的分子钟。所以填端粒。' },
      { type: 'fill', question: '细胞凋亡是由___决定的细胞自动结束生命的过程，又叫做细胞编程性死亡。', answer: '基因', explanation: '细胞凋亡是由基因决定的、细胞主动结束生命的过程，属于编程性死亡。它对多细胞生物完成正常发育、维持内环境稳定有重要作用，是一种对机体有利的死亡方式。因此填基因。' }
    ]
  });
})();
