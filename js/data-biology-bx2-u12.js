/* 生物学 · 必修2 遗传与进化 · 第5章 · 课时：第1节 基因突变和基因重组 */
(function () {
  var v = gzGetVolume('biology', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u12',
    name: '第1节 基因突变和基因重组',
    chapter: '必修2 遗传与进化 · 第5章 基因突变及其他变异',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是基因突变' },
      { type: 'paragraph', text: '基因是有遗传效应的 DNA 片段，它的遗传信息藏在碱基的排列顺序里。如果 DNA 分子中发生<strong>碱基对的增添、缺失或替换</strong>，就会引起基因结构的改变，这种改变叫做基因突变。基因结构一变，它指导合成的蛋白质可能也随之改变，从而让生物表现出新的性状或出现疾病。' },
      { type: 'keypoint', label: '重点·基因突变的本质', text: '<strong>基因突变是 DNA 分子中碱基对发生增添、缺失或替换，导致基因结构发生改变，从而产生新基因的过程。</strong>基因突变是基因内部碱基序列的变化，不改变基因的数量和位置，但会产生原来没有的等位基因，是生物变异的根本来源。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 碱基对替换导致基因结构改变</text><rect x="50" y="80" width="260" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="115" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">正常 DNA： … A T G C …</text><rect x="380" y="80" width="260" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="510" y="115" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">突变 DNA： … A C G C …</text><polygon points="310,115 362,102 362,128" fill="#3f7d1e"/><text x="340" y="200" font-size="13" fill="#2e3a22" text-anchor="middle">碱基对 T—A 被替换成 C—G（替换型突变）</text><rect x="120" y="220" width="200" height="55" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="220" y="253" font-size="13" fill="#2e3a22" text-anchor="middle">增添：多插一对碱基</text><rect x="380" y="220" width="200" height="55" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="480" y="253" font-size="13" fill="#2e3a22" text-anchor="middle">缺失：少了一对碱基</text></svg>', caption: '图1 碱基对的替换、增添或缺失都会改变基因内部的碱基序列，即基因突变。' },
      { type: 'list', items: ['替换：一个碱基对被另一个碱基对顶替，影响最小', '增添：DNA 中额外插入一对或多对碱基', '缺失：DNA 中丢掉一对或多对碱基，常造成较大影响', '三种情况都改变基因结构，可能产生新基因'] },
      { type: 'heading', text: '二、经典实例：镰刀型贫血症' },
      { type: 'paragraph', text: '镰刀型贫血症是理解基因突变最好的例子。患者红细胞里的血红蛋白基因中，有一个碱基对发生了<strong>替换</strong>，使得血红蛋白的一个氨基酸由谷氨酸变成了缬氨酸。仅仅是这一个小改动，就让红细胞在缺氧时扭曲成镰刀状，容易破裂造成贫血。这清楚说明：碱基序列变一点，蛋白质就变，性状也跟着变。' },
      { type: 'table', headers: ['比较项', '正常人', '镰刀型贫血患者'], rows: [['血红蛋白基因', '碱基序列正常', '一个碱基对发生替换'], ['对应 mRNA', '密码子 GAG', '密码子 GUG'], ['氨基酸', '谷氨酸', '缬氨酸'], ['红细胞形态', '圆饼状', '镰刀状易破裂']] },
      { type: 'heading', text: '三、诱发基因突变的因素' },
      { type: 'paragraph', text: '基因突变可以自发发生，也可以被外界因素诱发。科学家把这些诱因分成三类，记住它们有助于理解生活中如何减少突变伤害。物理因素主要是各种射线，化学因素是某些化学物质，生物因素则是某些病毒的遗传物质插入细胞 DNA。' },
      { type: 'list', items: ['物理因素：紫外线、X 射线等电离辐射，损伤 DNA 链', '化学因素：亚硝酸、碱基类似物等，改变碱基结构', '生物因素：某些病毒，把自身基因插入宿主 DNA', '诱变剂提高突变率，但也带来多害少利的风险'] },
      { type: 'heading', text: '四、基因突变的特点' },
      { type: 'paragraph', text: '基因突变有五个常被考查的特点。它普遍存在于生物界；发生的时间和部位都随机；在自然状态下频率很低；方向不定向，不能按生物需要定向发生；而且多数突变对生物有害，少数有利，即多害少利。正因不定向，同一种诱变处理会得到多种不同突变体。' },
      { type: 'list', items: ['普遍性：从病毒到人类都会发生基因突变', '随机性：可发生在任何基因、任何时期', '低频性：自然状态下突变率很低', '不定向性：一个基因可突变成多个等位基因', '多害少利性：多数有害，少数有利'] },
      { type: 'example', label: '例题·判断突变特点', text: '同一批小麦种子用射线照射后，长出的植株有的矮秆、有的抗病、有的白化，各不相同。<br>分析：这些不同性状来自同一个诱变处理，说明突变没有朝着某个预定方向发生，体现了不定向性；同时多种突变同时出现，也说明突变具有随机性。<br>若问为什么还要大量处理种子才得到少数突变，则体现低频性。' },
      { type: 'heading', text: '五、基因突变的意义' },
      { type: 'paragraph', text: '基因突变最重要的意义，是产生了<strong>新基因</strong>。基因重组只是把已有基因重新组合，而基因突变能创造从未有过的等位基因，这就为生物的进化提供了原始材料。没有突变，生物就没有可供自然选择的新变异，进化也就无从谈起。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 基因突变产生新基因，提供进化原材料</text><rect x="50" y="100" width="200" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="150" y="140" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">原基因 A</text><polygon points="250,135 312,122 312,148" fill="#3f7d1e"/><rect x="320" y="100" width="200" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="420" y="140" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">新等位基因 a</text><rect x="220" y="210" width="240" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="246" font-size="14" fill="#2e3a22" text-anchor="middle">新变异 → 自然选择 → 进化</text><text x="340" y="300" font-size="13" fill="#2e3a22" text-anchor="middle">只有基因突变能创造新基因，是变异的根本来源。</text></svg>', caption: '图2 基因突变产生新等位基因，为生物进化提供原始材料。' },
      { type: 'heading', text: '六、另一种变异：基因重组' },
      { type: 'paragraph', text: '除了基因突变，还有<strong>基因重组</strong>。它不产生新基因，只是把已有的基因重新组合，产生新的基因型，使后代出现新性状组合。减数分裂时非同源染色体自由组合、同源染色体交叉互换，都会造成基因重组；现代生物技术中的转基因，也是人为的基因重组。' },
      { type: 'list', items: ['自由组合：减Ⅰ后期非同源染色体上的非等位基因自由组合', '交叉互换：减Ⅰ前期同源染色体非姐妹染色单体交换片段', '转基因：人为把一种生物的基因转入另一种生物', '基因重组不产生新基因，但能产生新基因型'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 减数分裂中的基因自由组合</text><rect x="60" y="90" width="220" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="170" y="130" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">亲代 AaBb</text><polygon points="280,125 342,112 342,138" fill="#3f7d1e"/><rect x="350" y="90" width="270" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="485" y="125" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">配子 AB Ab aB ab</text><text x="340" y="210" font-size="13" fill="#2e3a22" text-anchor="middle">非同源染色体自由组合，配子基因组合多样化</text><rect x="180" y="240" width="320" height="55" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="273" font-size="14" fill="#2e3a22" text-anchor="middle">基因重组 → 后代出现新性状组合</text></svg>', caption: '图3 减数分裂时非同源染色体自由组合，产生多种配子，即基因重组。' },
      { type: 'warn', label: '易错·突变与重组的区别', text: '① 基因突变产生新基因，基因重组只产生新基因型，不产生新基因；② 基因突变在光学显微镜下一般看不见，染色体变异能看见；③ 基因突变的三种类型是替换、增添、缺失，不要漏掉替换；④ 基因重组发生在有性生殖减数分裂过程，转基因是人为重组；⑤ 突变的特点里多害少利，不是全有害。' },
      { type: 'tip', label: '提示·两类变异一起记', text: '一句话区分：<strong>突变改的是基因内部的字母，重组改的是基因之间的搭配。</strong>做题看到碱基对的增添缺失替换，选基因突变；看到后代出现新的性状组合、自由组合或交叉互换，选基因重组。两者都能增加生物多样性。' }
    ],
    exercises: [
      { type: 'choice', question: '基因突变是指 DNA 分子中发生碱基对的什么变化？', options: ['染色体数目改变', '增添、缺失或替换', '基因位置移动', '染色体结构倒位'], answer: '增添、缺失或替换', explanation: '基因突变的本质是 DNA 分子中碱基对发生增添、缺失或替换，引起基因结构的改变。它改变的是基因内部的碱基序列，不产生染色体数目或结构的变化，也不是基因整体位置的移动。因此正确选项是增添、缺失或替换。' },
      { type: 'choice', question: '镰刀型贫血症的根因是血红蛋白基因中发生了？', options: ['碱基对缺失', '碱基对增添', '碱基对替换', '染色体缺失'], answer: '碱基对替换', explanation: '镰刀型贫血症患者血红蛋白基因的一个碱基对发生替换，使对应的密码子由 GAG 变为 GUG，导致血红蛋白中一个氨基酸由谷氨酸变为缬氨酸，红细胞变形为镰刀状。这只是单个碱基对的替换，不是缺失、增添或染色体层面的变化。因此选碱基对替换。' },
      { type: 'choice', question: '下列关于基因突变特点的说法，错误的是？', options: ['普遍存在', '随机发生', '自然状态下低频', '总是对生物有利'], answer: '总是对生物有利', explanation: '基因突变具有普遍性、随机性、低频性、不定向性和多害少利性。多数突变对生物有害，少数有利，并不是总是有利。所以“总是对生物有利”这一说法是错误的，符合题目要求的错误选项。' },
      { type: 'fill', question: '减数分裂过程中，非同源染色体上的非等位基因自由组合，以及同源染色体交叉互换，都属于___。', answer: '基因重组', explanation: '基因重组是指在生物体进行有性生殖时，控制不同性状的基因重新组合。减数第一次分裂后期非同源染色体自由组合，以及减数第一次分裂前期同源染色体非姐妹染色单体交叉互换，都会造成基因重组。它不产生新基因，只产生新基因型。' },
      { type: 'fill', question: '基因突变能产生原来没有的___，为生物进化提供原始材料，是生物变异的根本来源。', answer: '新基因', explanation: '基因突变通过改变基因内部的碱基序列，产生新的等位基因，这是基因重组和染色体变异都无法做到的。新基因的出现使种群中出现新的可遗传变异，自然选择才能在此基础上发挥作用，所以它是生物变异的根本来源和进化的原材料。' }
    ]
  });
})();
