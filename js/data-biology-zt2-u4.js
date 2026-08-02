/* 生物学 · 高三复习 · 遗传与进化 · 第2章 · 课时：第1节 减数分裂和受精作用（一） */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u4',
    name: '第1节 减数分裂和受精作用（一）',
    chapter: '遗传与进化 · 第2章 基因和染色体的关系',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、减数分裂的核心特征' },
      { type: 'paragraph', text: '减数分裂是有性生殖生物在产生成熟生殖细胞时进行的特殊分裂方式。它的核心特征可以概括为四句话：对象是进行有性生殖的生物；过程是从原始生殖细胞变成成熟生殖细胞；特点是染色体<strong>复制一次，细胞连续分裂两次</strong>；结果是成熟生殖细胞中的染色体数目比原始生殖细胞减少一半。正是这次减半，才保证了受精后染色体数目恢复恒定。' },
      { type: 'list', items: [
        '范围：进行有性生殖的生物才发生减数分裂。',
        '过程：原始生殖细胞→成熟生殖细胞（精子或卵细胞）。',
        '关键：染色体复制一次，细胞连续分裂两次。',
        '结果：成熟生殖细胞染色体数目减半。'
      ] },
      { type: 'keypoint', text: '减数分裂实质：在减数分裂过程中，染色体只复制一次，而细胞连续分裂两次，最终产生的生殖细胞染色体数目是体细胞的一半。这是亲子代染色体数目保持恒定的根本原因。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="200" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">减数分裂总览</text><rect x="20" y="90" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="80" y="122" font-size="15" text-anchor="middle" fill="#2e3a22">原始生殖细胞</text><rect x="180" y="90" width="110" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="235" y="122" font-size="15" text-anchor="middle" fill="#2e3a22">间期复制</text><rect x="330" y="90" width="110" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="385" y="122" font-size="15" text-anchor="middle" fill="#2e3a22">减Ⅰ分裂</text><rect x="480" y="90" width="110" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="535" y="122" font-size="15" text-anchor="middle" fill="#2e3a22">减Ⅱ分裂</text><line x1="140" y1="117" x2="178" y2="117" stroke="#3f7d1e" stroke-width="2"/><polygon points="178,110 194,117 178,124" fill="#3f7d1e"/><line x1="290" y1="117" x2="328" y2="117" stroke="#3f7d1e" stroke-width="2"/><polygon points="328,110 344,117 328,124" fill="#3f7d1e"/><line x1="440" y1="117" x2="478" y2="117" stroke="#3f7d1e" stroke-width="2"/><polygon points="478,110 494,117 478,124" fill="#3f7d1e"/><text x="340" y="180" font-size="14" text-anchor="middle" fill="#5aa832">复制一次、连续分裂两次，染色体数目减半</text></svg>', caption: '减数分裂经历间期复制、减Ⅰ和减Ⅱ，复制一次分裂两次使染色体减半。' },
      { type: 'paragraph', text: '以精子形成为例看具体过程。精原细胞（染色体数 2n）经过减数第一次分裂前的间期，完成 DNA 复制和有关蛋白质合成，但染色体数目不变，此时每条染色体含两条姐妹染色单体。进入减数第一次分裂，同源染色体彼此分离，形成两个次级精母细胞，染色体数目减半为 n。减数第二次分裂中着丝粒分裂，姐妹染色单体分开成为两条染色体，最终一个精原细胞形成四个精子。' },
      { type: 'list', items: [
        '间期：DNA 复制，染色体数不变，每条染色体含两条姐妹染色单体。',
        '减Ⅰ：同源染色体分离，细胞一分为二，染色体数目减半。',
        '减Ⅱ：着丝粒分裂，姐妹染色单体分开，形成精细胞后变形为精子。'
      ] },
      { type: 'warn', text: '易错辨析：染色体数目减半发生在减数第一次分裂（同源染色体分离），而不是减数第二次分裂。减Ⅱ着丝粒分裂使染色单体变染色体，但细胞染色体数目在减Ⅱ前后并不减半（只是单体数减少）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="230" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">精子的形成过程</text><rect x="30" y="90" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="90" y="122" font-size="15" text-anchor="middle" fill="#2e3a22">精原细胞 2n</text><rect x="190" y="90" width="130" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="255" y="122" font-size="15" text-anchor="middle" fill="#2e3a22">初级精母 2n</text><rect x="360" y="90" width="130" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="425" y="122" font-size="15" text-anchor="middle" fill="#2e3a22">次级精母 n</text><rect x="530" y="90" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="590" y="122" font-size="15" text-anchor="middle" fill="#2e3a22">精子 n</text><line x1="150" y1="117" x2="188" y2="117" stroke="#3f7d1e" stroke-width="2"/><polygon points="188,110 204,117 188,124" fill="#3f7d1e"/><line x1="320" y1="117" x2="358" y2="117" stroke="#3f7d1e" stroke-width="2"/><polygon points="358,110 374,117 358,124" fill="#3f7d1e"/><line x1="490" y1="117" x2="528" y2="117" stroke="#3f7d1e" stroke-width="2"/><polygon points="528,110 544,117 528,124" fill="#3f7d1e"/><text x="340" y="190" font-size="14" text-anchor="middle" fill="#2e3a22">减Ⅰ同源染色体分离使数目减半，减Ⅱ着丝粒分裂</text></svg>', caption: '精子形成：精原细胞经减Ⅰ、减Ⅱ，最终一个细胞形成四个精子。' },
      { type: 'paragraph', text: '理解减数分裂必须掌握几个关键概念。<strong>同源染色体</strong>是指形态、大小一般相同，一条来自父方、一条来自母方，在减数分裂中能两两配对的染色体。<strong>联会</strong>指减数第一次分裂前期同源染色体两两配对的现象。<strong>四分体</strong>是联会的一对同源染色体，包含四条染色单体。<strong>交叉互换</strong>指同源染色体的非姐妹染色单体之间发生片段交换，是基因重组的来源之一。' },
      { type: 'tip', text: '高频考点：高考常以图像考查减数分裂时期。判别口诀：有同源染色体且联会→减Ⅰ前期；同源染色体成对排列在赤道板→减Ⅰ中期；同源染色体分到两极→减Ⅰ后期；无同源染色体且着丝粒分裂→减Ⅱ后期。' },
      { type: 'table', headers: ['时期', '主要变化', '染色体数目'], rows: [
        ['减数第一次分裂前间期', 'DNA 复制，染色体数不变', '2n'],
        ['减数第一次分裂', '同源染色体分离，子细胞减半', '2n → n'],
        ['减数第二次分裂', '着丝粒分裂，姐妹染色单体分开', 'n → n']
      ] },
      { type: 'paragraph', text: '交叉互换发生在四分体时期。同源染色体的非姐妹染色单体相互缠绕，对应片段发生交换，使染色单体上的基因组合发生改变。这种重组增加了配子的多样性，是生物变异的重要来源，也为后续自由组合定律提供了更丰富的物质基础。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="220" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">同源染色体联会与四分体</text><rect x="200" y="70" width="22" height="100" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><rect x="232" y="70" width="22" height="100" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><rect x="290" y="70" width="22" height="100" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><rect x="322" y="70" width="22" height="100" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><line x1="211" y1="120" x2="333" y2="120" stroke="#5aa832" stroke-width="3"/><text x="211" y="58" font-size="13" text-anchor="middle" fill="#2e3a22">父方</text><text x="333" y="58" font-size="13" text-anchor="middle" fill="#2e3a22">母方</text><line x1="380" y1="120" x2="430" y2="120" stroke="#3f7d1e" stroke-width="2"/><polygon points="430,113 446,120 430,127" fill="#3f7d1e"/><text x="500" y="124" font-size="13" fill="#5aa832">交叉互换</text><text x="340" y="205" font-size="14" text-anchor="middle" fill="#2e3a22">一对同源染色体含4条染色单体=四分体，可发生交叉互换</text></svg>', caption: '同源染色体联会形成四分体（4条染色单体），非姐妹染色单体间可发生交叉互换。' },
      { type: 'example', text: '例题：人的体细胞有 46 条染色体，求初级精母细胞、次级精母细胞和精子中的染色体数。思路：体细胞 2n = 46，初级精母细胞仍处于减Ⅰ、染色体数仍为 46；减Ⅰ后次级精母细胞为 n = 23；减Ⅱ着丝粒分裂但细胞染色体数仍是 23（只是单体分离）；精子也是 23。答案：46、23、23。' },
      { type: 'tip', text: '复习提示：把减数分裂比作「先分家再分财产」。同源染色体先分开（减Ⅰ，像两兄弟分家），姐妹染色单体再分开（减Ⅱ，像把共有的财产平分）。这样记，减Ⅰ减的是「同源对数」、减Ⅱ减的是「单体数」就清晰了。' },
      { type: 'list', items: [
        '同源染色体：形态大小一般相同，一条父方一条母方。',
        '联会：减Ⅰ前期同源染色体两两配对。',
        '四分体：联会的一对同源染色体，含 4 条染色单体。',
        '交叉互换：同源非姐妹染色单体间片段交换。'
      ] },
      { type: 'paragraph', text: '减数分裂是遗传规律的物质基础。分离定律对应减Ⅰ时同源染色体分离、等位基因分开；自由组合定律对应减Ⅰ时非同源染色体自由组合、非等位基因重组。理解减数分裂的图像和行为，是掌握整个遗传章节的关键。' }
    ],
    exercises: [
      { type: 'choice', question: '减数分裂过程中染色体数目减半发生在', options: ['间期', '减数第一次分裂', '减数第二次分裂', '受精作用'], answer: '减数第一次分裂', explanation: '减数第一次分裂时同源染色体分离，细胞一分为二，染色体数目由 2n 减半为 n；减数第二次分裂着丝粒分裂并不使染色体数目再次减半。' },
      { type: 'choice', question: '同源染色体的分离发生在', options: ['间期', '减数第一次分裂', '减数第二次分裂', '间期与减Ⅰ'], answer: '减数第一次分裂', explanation: '减数第一次分裂后期，同源染色体彼此分离分别进入两个子细胞，这是减数分裂特有的行为，减数第二次分裂中分离的是姐妹染色单体。' },
      { type: 'choice', question: '一个精原细胞经过减数分裂最终形成精子的数目是', options: ['1个', '2个', '4个', '8个'], answer: '4个', explanation: '一个精原细胞经减Ⅰ形成两个次级精母细胞，再经减Ⅱ共形成四个精细胞，变形后成为四个精子。' },
      { type: 'fill', question: '联会是指减数第一次分裂前期，同源染色体_____配对的现象。', answer: '两两', explanation: '联会是同源染色体在减Ⅰ前期两两配对形成四分体的过程，是减数分裂特有的现象，也是有丝分裂所没有的。' },
      { type: 'fill', question: '一个四分体包含_____条染色单体。', answer: '4', explanation: '一个四分体由一对联会的同源染色体组成，每条染色体含两条姐妹染色单体，因此共含 4 条染色单体，也含 2 个着丝粒。' }
    ]
  });
})();
