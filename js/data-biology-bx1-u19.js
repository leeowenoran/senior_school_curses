/* 生物学 · 必修1 分子与细胞 · 第6章 · 课时：第2节 细胞的分化 */
(function () {
  var v = gzGetVolume('biology', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u19',
    name: '第2节 细胞的分化',
    chapter: '必修1 分子与细胞 · 第6章 细胞的生命历程',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、细胞分化的概念' },
      { type: 'paragraph', text: '在个体发育中，由一个或一种细胞增殖产生的后代，在<strong>形态、结构和生理功能</strong>上发生稳定性差异的过程，叫做细胞分化。例如受精卵发育成胚胎后，有的细胞变成神经细胞、有的变成肌肉细胞、有的变成红细胞，这就是分化的结果。' },
      { type: 'list', items: ['持久性：分化一旦发生，通常稳定不可逆转', '普遍性：多细胞生物体内普遍存在', '不可逆性：已分化的细胞一般不再回到未分化状态', '稳定性：分化后的细胞在形态功能上保持相对稳定'] },
      { type: 'heading', text: '二、细胞分化的根本原因' },
      { type: 'paragraph', text: '同一生物体的不同细胞都来自受精卵，含有的<strong>遗传物质（DNA）基本相同</strong>。它们之所以形态功能不同，是因为在个体发育中，不同细胞中遗传信息的执行情况不同，即<strong>基因的选择性表达</strong>：有的基因开启、有的基因关闭。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">细胞分化的本质：基因选择性表达</text><rect x="40" y="80" width="180" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="130" y="120" font-size="14" fill="#3f7d1e" text-anchor="middle" font-weight="bold">受精卵</text><text x="130" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">含全套基因</text><text x="130" y="178" font-size="13" fill="#2e3a22" text-anchor="middle">A B C D 都具备</text><text x="130" y="208" font-size="13" fill="#2e3a22" text-anchor="middle">遗传物质相同</text><polygon points="220,170 258,158 258,182" fill="#3f7d1e"/><rect x="270" y="80" width="380" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="350" y="112" font-size="14" fill="#3f7d1e" text-anchor="middle" font-weight="bold">不同细胞中开启不同基因</text><text x="330" y="148" font-size="13" fill="#2e3a22" text-anchor="middle">神经细胞：开 A、关 B、C、D</text><text x="330" y="176" font-size="13" fill="#2e3a22" text-anchor="middle">肌肉细胞：开 B、关 A、C、D</text><text x="330" y="204" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">→ 形态功能出现差异</text><text x="340" y="310" font-size="13" fill="#2e3a22" text-anchor="middle">分化不改变遗传物质，只是把哪些基因「打开」做了选择。</text></svg>', caption: '图1　细胞分化是基因选择性表达的结果，遗传物质本身不变。' },
      { type: 'keypoint', label: '重点·分化的概念与本质', text: '<strong>细胞分化是指在个体发育中，同源细胞在形态、结构和生理功能上发生稳定性差异的过程；其根本原因是基因的选择性表达，而不是遗传物质发生改变。</strong>高度分化的植物细胞仍保留全套遗传物质，因此具有发育成完整个体的潜能。' },
      { type: 'heading', text: '三、细胞分化的意义' },
      { type: 'paragraph', text: '细胞分化使多细胞生物体中的细胞趋向专门化，有利于提高各种生理功能的效率。没有分化，就只有一团相同的细胞，无法形成复杂的组织、器官和系统。分化是生物个体发育的基础。' },
      { type: 'table', headers: ['对比项', '未分化的细胞', '已分化的细胞'], rows: [['形态结构', '相似、未特化', '具有特定形态结构'], ['功能', '不专一', '专一（如运输氧、收缩）'], ['基因表达', '全套基因待命', '仅有部分基因表达'], ['实例', '受精卵、干细胞', '神经细胞、红细胞、肌肉细胞']] },
      { type: 'heading', text: '四、细胞的全能性' },
      { type: 'paragraph', text: '<strong>细胞的全能性</strong>是指已经分化的细胞，仍然具有发育成完整个体的潜能。原因是已分化的细胞一般仍含有该物种全套的遗传物质。全能性大小存在规律：受精卵 > 生殖细胞（如卵细胞）> 体细胞；植物细胞的全能性通常比动物细胞更容易表现。' },
      { type: 'list', items: ['植物组织培养：取一片叶或茎的体细胞，在适宜条件下能长成完整植株，证明植物细胞有全能性', '动物克隆：把体细胞的细胞核移植到去核卵细胞中，可培育出克隆羊，说明动物细胞核具有全能性', '受精卵全能性最高，能自然发育成完整个体'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">证明细胞全能性的两个实例</text><rect x="40" y="80" width="270" height="160" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="175" y="115" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">植物组织培养</text><text x="175" y="148" font-size="13" fill="#2e3a22" text-anchor="middle">体细胞 → 愈伤组织</text><text x="175" y="176" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">→ 完整植株</text><text x="175" y="205" font-size="13" fill="#2e3a22" text-anchor="middle">证明植物细胞全能性</text><rect x="370" y="80" width="270" height="160" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="505" y="115" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">克隆羊（核移植）</text><text x="505" y="148" font-size="13" fill="#2e3a22" text-anchor="middle">体细胞核 + 去核卵</text><text x="505" y="176" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">→ 新个体</text><text x="505" y="205" font-size="13" fill="#2e3a22" text-anchor="middle">证明动物细胞核全能性</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">二者都说明：已分化的细胞仍含全套遗传信息，具备发育成完整个体的潜能。</text></svg>', caption: '图2　植物组织培养和动物克隆都证明了细胞的全能性。' },
      { type: 'warn', label: '易错·全能性≠都能发育成个体', text: '全能性强调的是「具有发育成完整个体的潜能」，并不意味着每个细胞都能直接长成个体。动物体内高度分化的体细胞一般不能直接发育成个体，只有把它的<strong>细胞核</strong>移植到去核卵细胞后才能表现全能性，所以准确说是「动物细胞核具有全能性」。' },
      { type: 'example', label: '例题·全能性大小比较', text: '比较受精卵、神经细胞、卵细胞的全能性大小。<br>答：受精卵能直接发育成完整个体，全能性最高；卵细胞属于生殖细胞，全能性高于体细胞；神经细胞是高度分化的体细胞，全能性最低。因此大小为：受精卵 > 卵细胞 > 神经细胞。' },
      { type: 'heading', text: '五、干细胞' },
      { type: 'paragraph', text: '<strong>干细胞</strong>是动物和人体内仍保留着分裂和分化能力的细胞。根据分化潜能可分为全能干细胞、多能干细胞和专能干细胞。造血干细胞能分裂分化成红细胞、白细胞和血小板等多种血细胞，是医学上重要的干细胞。' },
      { type: 'tip', label: '提示·记忆小窍门', text: '把分化想成「同一份说明书（DNA），不同车间只印刷自己需要的章节」，所以细胞各不相同。全能性想成「只要全套说明书还在，就有机会重印整本书」。口诀：<strong>分化是选基因，全能是保全套</strong>。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">细胞全能性大小的规律</text><rect x="270" y="70" width="140" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="106" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">受精卵</text><rect x="250" y="160" width="180" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="196" font-size="14" fill="#2e3a22" text-anchor="middle">生殖细胞（卵、精子）</text><rect x="230" y="250" width="220" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="286" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">体细胞（神经、肌肉等）</text></svg>', caption: '图3　全能性由高到低：受精卵 ＞ 生殖细胞 ＞ 体细胞。' }
    ],
    exercises: [
      { type: 'choice', question: '细胞分化的根本原因是？', options: ['遗传物质发生改变', '基因的选择性表达', '染色体数目减半', '细胞体积增大'], answer: '基因的选择性表达', explanation: '同一生物体的不同细胞来自同一个受精卵，遗传物质基本相同。分化后形态功能不同的根本原因是个体发育中不同细胞遗传信息的执行情况不同，即基因的选择性表达，而不是遗传物质改变。因此选基因的选择性表达。' },
      { type: 'choice', question: '下列关于细胞全能性的说法，正确的是？', options: ['体细胞全能性最高', '受精卵全能性最高', '神经细胞能直接发育成个体', '分化后细胞失去全套基因'], answer: '受精卵全能性最高', explanation: '细胞全能性指已分化细胞仍具发育成完整个体的潜能，大小规律为受精卵 > 生殖细胞 > 体细胞。受精卵能自然发育成完整新个体，全能性最高；高度分化的体细胞一般不能直接发育成个体。因此选受精卵全能性最高。' },
      { type: 'choice', question: '克隆羊多莉的培育证明了？', options: ['植物细胞有全能性', '动物细胞核具有全能性', '神经细胞能发育成个体', '生殖细胞全能性最低'], answer: '动物细胞核具有全能性', explanation: '克隆羊多莉是用体细胞的细胞核移植到去核卵细胞中培育而成的，说明已分化的动物体细胞的细胞核仍含有全套遗传信息，具有发育成完整个体的潜能，即动物细胞核具有全能性。因此选动物细胞核具有全能性。' },
      { type: 'fill', question: '高度分化的植物细胞在适宜条件下能发育成完整植株，这说明植物细胞具有___。', answer: '全能性', explanation: '细胞的全能性是指已分化的细胞仍具有发育成完整个体的潜能。植物组织培养中，一片叶或茎的体细胞在适宜条件下能长成完整植株，正说明植物细胞具有全能性。因此填全能性。' },
      { type: 'fill', question: '细胞分化使多细胞生物体内的细胞趋向专门化，有利于提高各种___的效率', answer: '生理功能', explanation: '细胞分化后，不同细胞在形态、结构和生理功能上发生稳定性差异，使细胞趋向专门化。专门化的细胞各自承担特定任务，有利于提高多细胞生物体各项生理功能的效率。因此填生理功能。' }
    ]
  });
})();
