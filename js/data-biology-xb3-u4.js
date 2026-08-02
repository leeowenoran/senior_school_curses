/* 生物学 · 选择性必修3 生物技术与工程 · 第2章 细胞工程 · 课时：第1节 植物细胞工程（一）基本技术 */
(function () {
  var v = gzGetVolume('biology', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u4',
    name: '第1节 植物细胞工程（一）基本技术',
    chapter: '选择性必修3 生物技术与工程 · 第2章 细胞工程',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、细胞全能性' },
      { type: 'paragraph', text: '细胞全能性是指已经分化的细胞，仍然具有发育成完整个体的潜能。打个比方：一棵苹果树的叶肉细胞已经变成了专门的叶子细胞，但它体内仍然带着长成一棵完整苹果树的全部遗传信息，只要条件合适，它就能重新长成一整棵苹果树。' },
      { type: 'keypoint', text: '<strong>细胞全能性的定义</strong>：生物体的每一个细胞都含有该物种全套的遗传信息，因此已分化的细胞仍具有发育成完整个体的潜能，这就是细胞的全能性。' },
      { type: 'list', items: [
        '受精卵：全能性最高，能发育成完整的个体。',
        '生殖细胞（精子、卵细胞）：全能性高于体细胞，低于受精卵。',
        '体细胞：全能性较低，但在适宜条件下也可表现出全能性。',
        '一般规律：受精卵 ＞ 生殖细胞 ＞ 体细胞；植物细胞 ＞ 动物细胞。'
      ] },
      { type: 'paragraph', text: '为什么植物细胞比动物细胞全能性高？因为植物细胞在离体培养时较容易重新启动分裂和分化，长成完整植株；而动物细胞的全能性受到很大限制，通常只有细胞核在去核卵母细胞的帮助下才能体现（后面的体细胞核移植会讲到）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">图（a）细胞全能性大小比较</text><rect x="30" y="80" width="130" height="46" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="95" y="109" text-anchor="middle" font-size="17" fill="#2e3a22">受精卵</text><rect x="275" y="80" width="130" height="46" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="109" text-anchor="middle" font-size="17" fill="#2e3a22">生殖细胞</text><rect x="520" y="80" width="130" height="46" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="585" y="109" text-anchor="middle" font-size="17" fill="#2e3a22">体细胞</text><line x1="165" y1="103" x2="268" y2="103" stroke="#3f7d1e" stroke-width="3"/><polygon points="272,103 258,95 258,111" fill="#3f7d1e"/><line x1="410" y1="103" x2="513" y2="103" stroke="#3f7d1e" stroke-width="3"/><polygon points="517,103 503,95 503,111" fill="#3f7d1e"/><rect x="60" y="180" width="180" height="46" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="150" y="209" text-anchor="middle" font-size="17" fill="#2e3a22">植物细胞</text><rect x="440" y="180" width="180" height="46" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="530" y="209" text-anchor="middle" font-size="17" fill="#2e3a22">动物细胞</text><line x1="240" y1="203" x2="433" y2="203" stroke="#3f7d1e" stroke-width="3"/><polygon points="437,203 423,195 423,211" fill="#3f7d1e"/><text x="340" y="272" text-anchor="middle" font-size="15" fill="#2e3a22">全能性大小：受精卵 ＞ 生殖细胞 ＞ 体细胞；植物细胞 ＞ 动物细胞</text></svg>', caption: '细胞全能性大小的比较：受精卵最高，植物细胞高于动物细胞。' },
      { type: 'heading', text: '二、植物组织培养' },
      { type: 'paragraph', text: '植物组织培养就是在无菌条件下，把植物的器官、组织或细胞（叫外植体）放在含有营养物质和植物激素的培养基上，让它重新长成一棵完整植株的技术。它是植物细胞工程的基础。' },
      { type: 'list', items: [
        '外植体：从植物上切下来用于培养的小块组织或器官。',
        '脱分化：已分化的外植体失去原有分化状态，形成排列疏松、无定形的愈伤组织。',
        '愈伤组织：一团未分化的薄壁细胞，特点是细胞排列疏松、高度液泡化。',
        '再分化：愈伤组织在激素诱导下重新分化出芽和根。',
        '试管苗：长成带芽和根的幼小植株，再移栽到大田。'
      ] },
      { type: 'keypoint', text: '<strong>激素比例调控</strong>：培养基中生长素与细胞分裂素的比例决定分化方向——比值高有利于根的分化，比值低有利于芽的分化，比值适中则有利于愈伤组织的形成和生长。' },
      { type: 'table', headers: ['生长素 / 细胞分裂素比值', '培养结果'], rows: [
        ['比值高（＞1）', '有利于根的分化，抑制芽的形成'],
        ['比值低（＜1）', '有利于芽的分化，抑制根的形成'],
        ['比值适中（≈1）', '愈伤组织大量增殖，不分化'],
        ['先用适中、后调高', '先形成愈伤组织，再分化出根和芽']
      ] },
      { type: 'paragraph', text: '植物组织培养常用的培养基是MS培养基，它富含无机盐、蔗糖、维生素和植物激素，能为细胞提供充足营养。培养过程必须严格无菌，否则杂菌会污染培养物。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">图（b）植物组织培养流程图</text><rect x="240" y="55" width="200" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="80" text-anchor="middle" font-size="16" fill="#2e3a22">外植体（植物组织）</text><rect x="240" y="115" width="200" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="140" text-anchor="middle" font-size="16" fill="#2e3a22">脱分化</text><rect x="240" y="175" width="200" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="200" text-anchor="middle" font-size="16" fill="#2e3a22">愈伤组织</text><rect x="240" y="235" width="200" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="260" text-anchor="middle" font-size="16" fill="#2e3a22">再分化（芽和根）</text><rect x="240" y="295" width="200" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="320" text-anchor="middle" font-size="16" fill="#2e3a22">试管苗（完整植株）</text><line x1="340" y1="95" x2="340" y2="113" stroke="#3f7d1e" stroke-width="3"/><polygon points="340,117 333,105 347,105" fill="#3f7d1e"/><line x1="340" y1="155" x2="340" y2="173" stroke="#3f7d1e" stroke-width="3"/><polygon points="340,177 333,165 347,165" fill="#3f7d1e"/><line x1="340" y1="215" x2="340" y2="233" stroke="#3f7d1e" stroke-width="3"/><polygon points="340,237 333,225 347,225" fill="#3f7d1e"/><line x1="340" y1="275" x2="340" y2="293" stroke="#3f7d1e" stroke-width="3"/><polygon points="340,297 333,285 347,285" fill="#3f7d1e"/></svg>', caption: '植物组织培养：外植体经脱分化形成愈伤组织，再分化出芽和根，长成试管苗。' },
      { type: 'heading', text: '三、植物体细胞杂交技术' },
      { type: 'paragraph', text: '不同种植物的体细胞（如白菜和甘蓝）直接杂交很困难，因为它们的细胞壁把它们隔开了。植物体细胞杂交就是把两种植物的体细胞融合成一个杂种细胞，再培养成杂种植株的技术。' },
      { type: 'list', items: [
        '去除细胞壁：用纤维素酶和果胶酶处理，去掉细胞壁，得到原生质体。',
        '诱导融合：用PEG（聚乙二醇）或电刺激让两个原生质体融合。',
        '再生细胞壁：杂种细胞重新长出细胞壁。',
        '培养成株：杂种细胞经脱分化、再分化形成愈伤组织，再长成完整植株。'
      ] },
      { type: 'example', text: '<strong>白菜—甘蓝</strong>：把白菜的原生质体和甘蓝的原生质体融合，得到同时具有两者染色体的杂种细胞，培养后长成的白菜—甘蓝，既有白菜的某些优点，又有甘蓝的某些优点，是体细胞杂交克服远缘杂交障碍的典型例子。' },
      { type: 'warn', text: '<strong>注意</strong>：去除细胞壁一定要用纤维素酶和果胶酶，不能用蛋白酶；原生质体没有细胞壁保护，必须放在等渗溶液中，否则会吸水涨破。' },
      { type: 'tip', text: '记忆小窍门：植物体细胞杂交三步曲——去壁（酶）、融合（PEG或电）、长壁成株；体细胞杂交的意义是克服远缘杂交不亲和障碍。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">图（c）植物体细胞杂交流程图</text><rect x="20" y="60" width="120" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="80" y="87" text-anchor="middle" font-size="15" fill="#2e3a22">甲植物细胞</text><rect x="180" y="60" width="130" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="245" y="87" text-anchor="middle" font-size="15" fill="#2e3a22">甲原生质体</text><rect x="20" y="160" width="120" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="80" y="187" text-anchor="middle" font-size="15" fill="#2e3a22">乙植物细胞</text><rect x="180" y="160" width="130" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="245" y="187" text-anchor="middle" font-size="15" fill="#2e3a22">乙原生质体</text><rect x="340" y="110" width="120" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="400" y="137" text-anchor="middle" font-size="15" fill="#2e3a22">杂种细胞</text><rect x="500" y="60" width="150" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="575" y="87" text-anchor="middle" font-size="15" fill="#2e3a22">愈伤组织</text><rect x="500" y="160" width="150" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="575" y="187" text-anchor="middle" font-size="15" fill="#2e3a22">杂种植株</text><line x1="140" y1="82" x2="176" y2="82" stroke="#3f7d1e" stroke-width="3"/><polygon points="180,82 166,74 166,90" fill="#3f7d1e"/><line x1="140" y1="182" x2="176" y2="182" stroke="#3f7d1e" stroke-width="3"/><polygon points="180,182 166,174 166,190" fill="#3f7d1e"/><line x1="310" y1="82" x2="332" y2="118" stroke="#3f7d1e" stroke-width="3"/><polygon points="336,122 324,116 330,130" fill="#3f7d1e"/><line x1="310" y1="182" x2="332" y2="146" stroke="#3f7d1e" stroke-width="3"/><polygon points="336,142 330,128 342,134" fill="#3f7d1e"/><line x1="460" y1="132" x2="496" y2="88" stroke="#3f7d1e" stroke-width="3"/><polygon points="500,84 486,86 492,98" fill="#3f7d1e"/><line x1="575" y1="104" x2="575" y2="156" stroke="#3f7d1e" stroke-width="3"/><polygon points="575,160 568,148 582,148" fill="#3f7d1e"/><text x="340" y="300" text-anchor="middle" font-size="14" fill="#2e3a22">先去壁得原生质体，再融合成杂种细胞，最后培养成植株</text></svg>', caption: '植物体细胞杂交：去壁、融合、再生细胞壁并培养成杂种植株，可克服远缘杂交障碍。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于细胞全能性的叙述，正确的是哪一项？', options: ['受精卵的全能性最高', '体细胞的全能性高于生殖细胞', '动物细胞的全能性高于植物细胞', '已经分化的细胞不再具有全能性'], answer: '受精卵的全能性最高', explanation: '细胞全能性大小的一般规律是受精卵 ＞ 生殖细胞 ＞ 体细胞，并且植物细胞的全能性高于动物细胞。受精卵能直接发育成完整个体，因此全能性最高；已分化的细胞仍含有全套遗传信息，在适宜条件下可表现全能性。' },
      { type: 'choice', question: '在植物组织培养中，培养基里生长素与细胞分裂素的比值较高时，有利于什么结构的形成？', options: ['根的分化', '芽的分化', '愈伤组织的增殖', '种子的萌发'], answer: '根的分化', explanation: '植物激素的比例决定脱分化和再分化的方向。当生长素与细胞分裂素的比值高时，有利于根的分化；比值低时有利于芽的分化；比值适中时愈伤组织大量增殖而不分化。' },
      { type: 'choice', question: '植物体细胞杂交时，去除细胞壁所用的酶是下列哪一组？', options: ['纤维素酶和果胶酶', '胰蛋白酶', '胶原蛋白酶', '淀粉酶和蛋白酶'], answer: '纤维素酶和果胶酶', explanation: '植物细胞壁的主要成分是纤维素和果胶，因此要用纤维素酶和果胶酶把细胞壁分解，才能获得没有细胞壁的原生质体。胰蛋白酶和胶原蛋白酶用于分散动物细胞，不能去除植物细胞壁。' },
      { type: 'fill', question: '植物组织培养中，外植体经过脱分化会形成一团未分化的薄壁细胞，称为________________。', answer: '愈伤组织', explanation: '脱分化是已分化的外植体失去原有分化状态、恢复分裂能力的过程，其产物是一团排列疏松、无定形的薄壁细胞，称为愈伤组织，它可以再分化形成芽和根。' },
      { type: 'fill', question: '诱导植物原生质体融合常用的化学诱导剂是PEG，它的中文名称是________________。', answer: '聚乙二醇', explanation: 'PEG是聚乙二醇的英文缩写，它能改变细胞膜的流动性，促使两个原生质体的膜相互融合，是植物体细胞杂交中最常用的化学诱导剂，此外也可用电刺激诱导融合。' }
    ]
  });
})();
