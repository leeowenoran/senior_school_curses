/* 生物学 · 高三复习 · 分子与细胞 · 第6章 · 课时：第2节 细胞的分化 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u19',
    name: '第2节 细胞的分化',
    chapter: '分子与细胞 · 第6章 细胞的生命历程',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、细胞分化的概念与实质' },
      { type: 'paragraph', text: '在个体发育中，由一个或一种细胞增殖产生的后代，在形态、结构和生理功能上发生稳定性差异的过程叫细胞分化。细胞分化是生物界普遍存在的生命现象，是多细胞生物发育的基础。' },
      { type: 'keypoint', text: '细胞分化的实质是基因的选择性表达：不同细胞中遗传信息相同，但只有部分基因被表达，合成特定的蛋白质，导致细胞形态和功能出现差异。' },
      { type: 'list', items: [
        '持久性：分化贯穿于生物整个生命进程，胚胎期达到最大限度。',
        '普遍性：多细胞生物体内普遍存在细胞分化。',
        '不可逆性（一般）：已分化的细胞通常难以再恢复到早期状态。',
        '遗传物质不变：分化不改变细胞内的DNA序列。'
      ] },
      { type: 'warn', text: '易错：细胞分化时遗传物质并没有改变，改变的只是基因的表达情况。不能误认为分化后细胞的DNA不同；同一生物不同体细胞的基因组成是相同的。' },
      { type: 'tip', text: '高考高频考点：给出“肌细胞、神经细胞、胰岛B细胞”判断其基因组成是否相同——相同；mRNA和蛋白质种类不完全相同，因为基因选择性表达。常结合全能性一起考查。' },
      { type: 'table', headers: ['比较项目', '细胞分裂', '细胞分化'], rows: [
        ['结果', '细胞数目增多', '细胞种类增多、功能特化'],
        ['遗传物质', '保持不变', '保持不变'],
        ['发生时期', '终生', '胚胎期最旺盛'],
        ['意义', '个体长大', '形成不同组织器官']
      ] },
      { type: 'heading', text: '二、细胞的全能性' },
      { type: 'paragraph', text: '细胞的全能性指已经分化的细胞，仍然具有发育成完整个体的潜能。植物细胞的全能性容易表现，可经植物组织培养获得完整植株；动物体细胞的全能性受到限制，但其细胞核仍具有全能性，克隆羊多莉即证明动物细胞核具全能性。' },
      { type: 'keypoint', text: '细胞全能性大小顺序：受精卵 ＞ 生殖细胞 ＞ 体细胞；植物体细胞 ＞ 动物体细胞。分化程度越高，全能性往往越低；受精卵全能性最高。' },
      { type: 'list', items: [
        '植物组织培养：离体植物细胞在适宜条件下发育成完整植株，证明植物细胞具全能性。',
        '克隆羊多莉：体细胞核移植到去核卵细胞中发育成个体，证明动物细胞核具全能性。',
        '干细胞：动物和人体内保留的少数具分裂分化能力的细胞。'
      ] },
      { type: 'warn', text: '易错：已分化的动物体细胞全能性受限制，但细胞核具有全能性，不能说动物细胞无全能性。判断“体现全能性”必须是由细胞发育成完整个体，仅形成组织或器官不算。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图1 细胞分化形成不同组织</text><circle cx="90" cy="180" r="30" fill="#5aa832"/><text x="90" y="230" text-anchor="middle" font-size="13" fill="#2e3a22">受精卵</text><polygon points="130,180 180,150 180,210" fill="#3f7d1e"/><rect x="200" y="100" width="120" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><rect x="200" y="170" width="120" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><rect x="200" y="240" width="120" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="260" y="130" text-anchor="middle" font-size="13" fill="#2e3a22">神经组织</text><text x="260" y="200" text-anchor="middle" font-size="13" fill="#2e3a22">肌肉组织</text><text x="260" y="270" text-anchor="middle" font-size="13" fill="#2e3a22">上皮组织</text><polygon points="460,120 500,120 480,100" fill="#3f7d1e"/><polygon points="460,190 500,190 480,170" fill="#3f7d1e"/><polygon points="460,260 500,260 480,240" fill="#3f7d1e"/></svg>', caption: '同一受精卵经分化形成多种组织。' },
      { type: 'example', text: '例题：下列有关细胞分化与全能性的叙述，正确的是（  ）\n思路：分化实质是基因选择性表达，遗传物质不变；植物细胞具全能性，动物细胞核具全能性。判断关键看是否由细胞发育成完整个体才叫体现全能性。答案要点：分化不改变遗传物质。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图2 植物组织培养体现全能性</text><circle cx="100" cy="180" r="24" fill="#5aa832"/><text x="100" y="225" text-anchor="middle" font-size="13" fill="#2e3a22">离体细胞</text><polygon points="130,180 180,180 160,160" fill="#3f7d1e"/><rect x="200" y="155" width="120" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="260" y="185" text-anchor="middle" font-size="13" fill="#2e3a22">愈伤组织</text><polygon points="320,180 370,180 350,160" fill="#3f7d1e"/><rect x="390" y="100" width="120" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><rect x="390" y="210" width="120" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="450" y="130" text-anchor="middle" font-size="13" fill="#2e3a22">芽</text><text x="450" y="240" text-anchor="middle" font-size="13" fill="#2e3a22">根</text><text x="450" y="300" text-anchor="middle" font-size="13" fill="#2e3a22">完整植株</text><polygon points="600,180 640,180 620,160" fill="#3f7d1e"/></svg>', caption: '离体植物细胞可培养成完整植株。' },
      { type: 'paragraph', text: '干细胞是动物和人体内少数具有分裂和分化能力的细胞。按分化潜能分为全能干细胞、多能干细胞和专能干细胞。造血干细胞属于多能干细胞，能分化成多种血细胞；胚胎干细胞分化潜能最高。' },
      { type: 'tip', text: '解题技巧：判断“是否体现全能性”看终点是否为完整个体；判断“分化实质”答基因的选择性表达且遗传物质不变；比较全能性大小先比受精卵、生殖细胞、体细胞，再比动植物。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图3 细胞全能性大小比较</text><rect x="80" y="120" width="120" height="160" rx="8" fill="#5aa832"/><text x="140" y="300" text-anchor="middle" font-size="14" fill="#2e3a22">受精卵</text><rect x="260" y="170" width="120" height="110" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="320" y="300" text-anchor="middle" font-size="14" fill="#2e3a22">生殖细胞</text><rect x="440" y="210" width="120" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="300" text-anchor="middle" font-size="14" fill="#2e3a22">体细胞</text><text x="340" y="335" text-anchor="middle" font-size="13" fill="#2e3a22">全能性：受精卵 ＞ 生殖细胞 ＞ 体细胞</text><polygon points="200,200 260,200 230,180" fill="#3f7d1e"/><polygon points="380,245 440,245 410,225" fill="#3f7d1e"/></svg>', caption: '不同细胞全能性大小依次递减。' },
      { type: 'paragraph', text: '细胞分化与细胞全能性并不矛盾：分化使细胞功能专一化，而全能性是潜在能力。在离体、适宜营养和外源激素等条件下，高度分化的植物细胞可脱分化恢复分裂能力，进而再分化发育为完整植株。' }
    ],
    exercises: [
      { type: 'choice', question: '细胞分化的根本原因是（  ）', options: ['遗传物质发生改变', '基因的选择性表达', '细胞体积增大', '染色体数目加倍'], answer: '基因的选择性表达', explanation: '细胞分化过程中遗传物质保持不变，根本原因是不同细胞中基因选择性表达，合成了不同的蛋白质，导致细胞在形态和功能上出现差异。本题选B。' },
      { type: 'choice', question: '下列实例中，能体现细胞全能性的是（  ）', options: ['骨骼肌细胞形成肌肉组织', '植物组织培养获得完整植株', '神经细胞长出突起', '红细胞运输氧'], answer: '植物组织培养获得完整植株', explanation: '细胞全能性指已分化细胞发育成完整个体的潜能。植物组织培养由离体细胞发育成完整植株，体现植物细胞全能性；其余仅为细胞形态或功能变化，未发育成个体。本题选B。' },
      { type: 'choice', question: '下列关于细胞全能性大小的比较，正确的是（  ）', options: ['体细胞 ＞ 生殖细胞', '生殖细胞 ＞ 受精卵', '受精卵 ＞ 生殖细胞 ＞ 体细胞', '植物细胞 ＜ 动物细胞'], answer: '受精卵 ＞ 生殖细胞 ＞ 体细胞', explanation: '细胞全能性大小顺序为受精卵最高，其次为生殖细胞，体细胞最低；同一比较尺度下植物细胞全能性高于动物细胞。分化程度越高全能性一般越低。本题选C。' },
      { type: 'fill', question: '细胞分化过程中，细胞内的遗传物质______（填“改变”或“不变”）。', answer: '不变', explanation: '细胞分化是基因选择性表达的结果，同一生物不同体细胞的DNA相同，分化过程不改变遗传物质，只是表达的基因种类不同，因此填“不变”。' },
      { type: 'fill', question: '植物组织培养能够成功，依据的原理是植物细胞具有______。', answer: '全能性', explanation: '植物细胞含有发育成完整个体所需的全套遗传信息，在离体、适宜营养和激素条件下能发育为完整植株，这一潜能称为细胞全能性，是植物组织培养的理论基础。' }
    ]
  });
})();
