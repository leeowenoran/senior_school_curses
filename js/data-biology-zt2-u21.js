/* 生物学 · 高三复习 · 遗传与进化 · 第6章 · 课时：第4节 协同进化与生物多样性 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u21',
    name: '第4节 协同进化与生物多样性',
    chapter: '遗传与进化 · 第6章 生物的进化',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、新课导入：进化是独角戏吗' },
      { type: 'paragraph', text: '前面我们把进化理解为种群内部基因频率的改变。但其实生物从来不是独自进化的。捕食者和猎物、开花植物和传粉昆虫、生物和它们所处的山川气候，都在互相影响中共同演变。这种你追我赶、相互促进的进化，叫协同进化。它最终编织出地球上绚丽的生物多样性。' },
      { type: 'keypoint', text: '核心概念：协同进化指不同物种之间、生物与无机环境之间在相互影响中不断进化和发展。生物多样性主要包括基因多样性、物种多样性和生态系统多样性三个层次。现代生物进化理论把以上各节整合为完整框架。' },
      { type: 'heading', text: '二、协同进化的含义' },
      { type: 'list', items: [
        '不同物种之间：如捕食者与猎物、寄生者与宿主、植物与传粉者相互塑造。',
        '生物与无机环境之间：生物改变环境，被改变的环境又反过来影响生物进化。',
        '协同进化是双向的、相互选择的过程，不是单方决定。'
      ]},
      { type: 'paragraph', text: '一个经典例子是猎豹和羚羊。猎豹跑得快才能追上羚羊，羚羊跑得快才能逃脱；每一方对另一方都是选择压力，逼迫对方也不断变快。再比如开花植物和蜜蜂，花演化出花蜜和特定形态吸引蜜蜂，蜜蜂演化出口器适应采蜜，二者互相成就。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="300" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">捕食者与猎物协同进化</text>'
        + '<rect x="60" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="140" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">猎物变快</text>'
        + '<rect x="260" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="340" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">互相选择</text>'
        + '<rect x="460" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="540" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">捕食者变快</text>'
        + '<polygon points="220,110 250,100 250,120" fill="#3f7d1e"/>'
        + '<polygon points="420,110 450,100 450,120" fill="#3f7d1e"/>'
        + '<text x="340" y="195" text-anchor="middle" font-size="14" fill="#2e3a22">你追我赶，双向塑造</text>'
        + '<text x="340" y="230" text-anchor="middle" font-size="14" fill="#5aa832">协同进化提升双方适应力</text>'
        + '</svg>', caption: '捕食者与猎物在相互选择中共同进化，能力同步提升。' },
      { type: 'heading', text: '三、生物与无机环境的协同进化' },
      { type: 'paragraph', text: '生物不仅彼此影响，也和周围环境共同演变。原始大气缺氧，直到蓝藻等光合生物出现，才逐渐释放氧气，改变了大气成分；而氧气的积累又促使好氧生物兴起。生物的活动塑造了环境，被改变的环境又成为新的选择压力，推动生物继续进化。' },
      { type: 'list', items: [
        '光合生物产氧，改变大气成分。',
        '氧气积累促成有氧呼吸生物兴起。',
        '环境变化不断提供新的选择压力。'
      ]},
      { type: 'example', text: '典型例题：下列关于协同进化的叙述，正确的是（ ）。A. 只发生在捕食关系之间；B. 只发生在植物与动物之间；C. 发生在不同物种之间以及生物与无机环境之间；D. 生物进化与环境无关。思路：协同进化包括物种间和生物与无机环境间两个层面，是双向相互选择。答案：C。' },
      { type: 'tip', text: '高频考点：协同进化是多选题和判断题热点。答题要记住它有两个层面——物种之间、生物与无机环境之间，且是相互影响而非单向。常考实例：捕食者与猎物、寄生关系、传粉昆虫与开花植物、光合生物与大气含氧量变化。注意它和共同祖先证据不是一回事，不要混淆。' },
      { type: 'warn', text: '易错辨析：协同进化和共同进化是同一概念的不同译法，不要当成两种机制。另一个易错点是把协同进化误以为只发生在互利关系中——其实捕食、竞争、寄生等对抗关系同样存在协同进化，只要双方相互施加选择压力、共同演变，就属此范畴。' },
      { type: 'heading', text: '四、生物多样性的形成' },
      { type: 'paragraph', text: '协同进化像一支编织笔，把地球上的生命织成多层次、多形式的网络，这就是生物多样性。它有三个层次：基因多样性是同一物种内部不同个体的遗传差异；物种多样性是物种的丰富程度；生态系统多样性是生物群落和无机环境形成的多样生态类型。三者层层包含，基因多样性是基础。' },
      { type: 'table', headers: ['层次', '含义', '举例'], rows: [
        ['基因多样性', '物种内遗传差异的丰富度', '水稻的众多品种'],
        ['物种多样性', '物种的丰富程度', '热带雨林物种繁多'],
        ['生态系统多样性', '群落与环境的多样类型', '森林、草原、湿地等']
      ]},
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="300" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">生物多样性的三个层次</text>'
        + '<rect x="40" y="80" width="180" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="130" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">基因多样性</text>'
        + '<rect x="250" y="80" width="180" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="340" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">物种多样性</text>'
        + '<rect x="460" y="80" width="180" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="550" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">生态系统多样性</text>'
        + '<polygon points="220,110 248,100 248,120" fill="#3f7d1e"/>'
        + '<polygon points="430,110 458,100 458,120" fill="#3f7d1e"/>'
        + '<text x="340" y="195" text-anchor="middle" font-size="14" fill="#2e3a22">由内到外：基因→物种→生态系统</text>'
        + '<text x="340" y="230" text-anchor="middle" font-size="14" fill="#5aa832">协同进化编织出多样性</text>'
        + '</svg>', caption: '生物多样性包括基因、物种、生态系统三个由基础到宏观的层次。' },
      { type: 'heading', text: '五、现代生物进化理论' },
      { type: 'paragraph', text: '把全章要点整合，就得到现代生物进化理论（现代综合进化论）的核心框架：种群是生物进化的基本单位；突变和基因重组提供进化的原材料；自然选择使种群基因频率发生定向改变，决定进化方向；隔离是物种形成的必要条件，生殖隔离标志新物种产生。这一框架把遗传、变异、选择和隔离统一起来。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="300" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">现代生物进化理论框架</text>'
        + '<rect x="40" y="80" width="160" height="55" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="120" y="113" text-anchor="middle" font-size="13" fill="#2e3a22">种群为单位</text>'
        + '<rect x="230" y="80" width="160" height="55" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="310" y="113" text-anchor="middle" font-size="13" fill="#2e3a22">突变重组</text>'
        + '<rect x="420" y="80" width="160" height="55" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="500" y="113" text-anchor="middle" font-size="13" fill="#2e3a22">自然选择</text>'
        + '<rect x="250" y="170" width="200" height="55" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="350" y="203" text-anchor="middle" font-size="13" fill="#2e3a22">隔离→新物种</text>'
        + '<polygon points="200,107 225,99 225,116" fill="#3f7d1e"/>'
        + '<polygon points="390,107 415,99 415,116" fill="#3f7d1e"/>'
        + '<polygon points="500,135 500,165 490,150" fill="#3f7d1e"/>'
        + '<text x="340" y="258" text-anchor="middle" font-size="14" fill="#5aa832">四要点构成完整进化理论</text>'
        + '</svg>', caption: '现代生物进化理论由种群单位、原材料、定向选择、隔离成种四要点构成。' },
      { type: 'paragraph', text: '小结：协同进化是物种间及生物与环境间双向塑造的过程，它驱动了生物多样性三大层次的形成。现代生物进化理论把种群、突变重组、自然选择、隔离融会贯通，为整章画上句号，也为高三复习建立起完整的进化观。' }
    ],
    exercises: [
      { type: 'choice', question: '协同进化发生在（ ）。', options: ['不同物种之间以及生物与无机环境之间', '同一物种个体之间', '仅捕食者与猎物之间', '仅植物之间'], answer: '不同物种之间以及生物与无机环境之间', explanation: '协同进化是不同物种之间、生物与无机环境之间在相互影响中不断进化和发展的过程，具有双向性。它既可发生在捕食、竞争、寄生等关系里，也发生在生物改变环境、环境反作用于生物的层面，并不局限于某一类关系。' },
      { type: 'choice', question: '生物多样性不包括下列哪一项（ ）。', options: ['物种变异多样性', '基因多样性', '物种多样性', '生态系统多样性'], answer: '物种变异多样性', explanation: '生物多样性包括三个层次：基因多样性、物种多样性和生态系统多样性。物种变异多样性并不是规范表述，生物多样性的标准三层中没有这一项，因此它是干扰选项。' },
      { type: 'choice', question: '现代生物进化理论认为进化的基本单位是（ ）。', options: ['种群', '个体', '群落', '生态系统'], answer: '种群', explanation: '现代生物进化理论明确以种群为生物进化的基本单位，因为个体的基因在其一生中基本不变，只有种群的基因频率才能在世代间发生改变，进化的实质正是种群基因频率的定向改变。' },
      { type: 'fill', question: '生物多样性主要包括基因多样性、物种多样性和______多样性。', answer: '生态系统', explanation: '生物多样性有三个层次：基因多样性是物种内遗传差异，物种多样性是物种丰富度，生态系统多样性是生物群落与无机环境形成的多样生态类型。三者由基础到宏观层层包含。' },
      { type: 'fill', question: '现代生物进化理论指出______导致物种形成。', answer: '隔离', explanation: '现代生物进化理论认为，突变和基因重组提供原材料，自然选择决定方向，隔离阻断基因交流并最终形成生殖隔离，从而导致新物种产生。隔离（尤其是生殖隔离）是物种形成的必要条件。' }
    ]
  });
})();
