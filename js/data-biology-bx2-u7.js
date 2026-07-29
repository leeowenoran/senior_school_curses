/* 生物学 · 必修2 遗传与进化 · 第3章 · 课时：第2节 DNA分子的结构 */
(function () {
  var v = gzGetVolume('biology', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u7',
    name: '第2节 DNA分子的结构',
    chapter: '必修2 遗传与进化 · 第3章 基因的本质',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、DNA 双螺旋模型的诞生' },
      { type: 'paragraph', text: '1953 年，沃森和克里克在别人工作的基础上，提出了 DNA 的<strong>双螺旋结构模型</strong>。这个模型的提出离不开富兰克林和威尔金斯拍到的 X 射线衍射照片，那张照片让沃森和克里克看出 DNA 是螺旋形的、而且直径很规则。模型的建立是 20 世纪生物学最重大的突破之一。' },
      { type: 'list', items: ['沃森和克里克：提出 DNA 双螺旋结构模型', '威尔金斯、富兰克林：提供 X 射线衍射数据', '查哥夫：发现不同生物 DNA 中 A 量约等于 T 量、G 量约等于 C 量'] },
      { type: 'heading', text: '二、DNA 的化学组成——脱氧核苷酸' },
      { type: 'paragraph', text: 'DNA 是一种大分子，基本组成单位是<strong>脱氧核苷酸</strong>。每个脱氧核苷酸由三部分连成：一分子<strong>磷酸</strong>、一分子<strong>脱氧核糖</strong>（一种五碳糖）、一分子<strong>含氮碱基</strong>。碱基有四种：腺嘌呤 A、鸟嘌呤 G、胞嘧啶 C、胸腺嘧啶 T。四种脱氧核苷酸按不同顺序连接，就构成了长长的 DNA 链。' },
      { type: 'keypoint', label: '重点·四种碱基与基本单位', text: '<strong>DNA 的基本单位是脱氧核苷酸，由磷酸、脱氧核糖和碱基组成。碱基有四种：A（腺嘌呤）、G（鸟嘌呤）、C（胞嘧啶）、T（胸腺嘧啶）。很多个脱氧核苷酸通过磷酸和脱氧核糖交替连接形成一条脱氧核苷酸链。</strong>' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">脱氧核苷酸的结构</text><rect x="60" y="70" width="180" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="150" y="110" font-size="14" fill="#2e3a22" text-anchor="middle">磷酸</text><text x="150" y="145" font-size="14" fill="#2e3a22" text-anchor="middle">（含 P）</text><rect x="260" y="70" width="180" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="350" y="110" font-size="14" fill="#2e3a22" text-anchor="middle">脱氧核糖</text><text x="350" y="145" font-size="14" fill="#2e3a22" text-anchor="middle">（五碳糖）</text><rect x="460" y="70" width="180" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="110" font-size="14" fill="#2e3a22" text-anchor="middle">含氮碱基</text><text x="550" y="145" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">A T G C</text><polygon points="240,130 258,120 258,140" fill="#3f7d1e"/><polygon points="440,130 458,120 458,140" fill="#3f7d1e"/><text x="340" y="250" font-size="14" fill="#2e3a22" text-anchor="middle">一分子脱氧核苷酸 = 磷酸 + 脱氧核糖 + 含氮碱基，碱基有 A、T、G、C 四种。</text></svg>', caption: '图1　一个脱氧核苷酸由磷酸、脱氧核糖和含氮碱基组成。' },
      { type: 'heading', text: '三、两条链反向平行盘成双螺旋' },
      { type: 'paragraph', text: 'DNA 由<strong>两条脱氧核苷酸链</strong>组成。这两条链不是同向并排，而是<strong>反向平行</strong>的：一条链的方向是 5′ 到 3′，另一条是 3′ 到 5′，就像两条反向开的拉链。它们围绕同一个中心轴向右盘旋，形成规则的<strong>双螺旋</strong>结构，外形像旋转的楼梯。' },
      { type: 'warn', label: '易错·反向平行与碱基配对', text: '常考两个易错点：① 两条链是「反向平行」而不是同向；写一条链的序列时，另一条链要按反向读。② 碱基配对是 A 一定配 T、G 一定配 C，不能 A 配 G 或 T 配 C；A 与 T 之间连两条氢键，G 与 C 之间连三条氢键，所以 G−C 含量高的 DNA 更耐热这一特点常被考到。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">两条链反向平行、碱基互补配对</text><rect x="60" y="70" width="560" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="105" font-size="15" fill="#2e3a22" text-anchor="middle">链 1：5′ — A T G C A — 3′（方向向右）</text><rect x="60" y="180" width="560" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="215" font-size="15" fill="#2e3a22" text-anchor="middle">链 2：3′ — T A C G T — 5′（反向、互补配对）</text><text x="340" y="295" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">A 配 T（两条氢键），G 配 C（三条氢键）</text><text x="340" y="320" font-size="13" fill="#2e3a22" text-anchor="middle">两条链方向相反、碱基一一互补，盘成双螺旋。</text></svg>', caption: '图2　两条脱氧核苷酸链反向平行，碱基按 A—T、G—C 互补配对。' },
      { type: 'heading', text: '四、碱基互补配对原则' },
      { type: 'paragraph', text: '在双链 DNA 中，A 只能和 T 配对，G 只能和 C 配对，这叫<strong>碱基互补配对原则</strong>。由此推出一个重要等式：在整个 DNA 分子中，A 的总数等于 T 的总数，G 的总数等于 C 的总数，即 A = T、G = C。但 A + G 的总量等于 T + C 的总量，各占碱基总数的一半。' },
      { type: 'example', label: '例题·碱基数量计算', text: '已知某双链 DNA 中腺嘌呤 A 占全部碱基的 30%，求胞嘧啶 C 占多少？<br>解：由 A = T 可知 T 也占 30%，则 A + T 共占 60%。剩下 G + C 占 40%，又因 G = C，所以 C 占 20%。<br>答：胞嘧啶 C 占全部碱基的 20%。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">DNA 双螺旋结构（旋转楼梯）</text><rect x="80" y="70" width="200" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="105" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">外侧骨架</text><text x="180" y="135" font-size="14" fill="#2e3a22" text-anchor="middle">磷酸—脱氧核糖</text><text x="180" y="165" font-size="14" fill="#2e3a22" text-anchor="middle">交替连接</text><rect x="400" y="70" width="200" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="105" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">内侧</text><text x="500" y="135" font-size="14" fill="#2e3a22" text-anchor="middle">碱基对 A—T</text><text x="500" y="165" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">G—C 横档</text><polygon points="282,130 318,118 318,142" fill="#3f7d1e"/><text x="340" y="245" font-size="14" fill="#2e3a22" text-anchor="middle">两条链向右盘旋成双螺旋，像旋转楼梯：骨架是扶手，碱基对是台阶。</text><text x="340" y="280" font-size="13" fill="#2e3a22" text-anchor="middle">遗传信息储存在内侧碱基对的排列顺序中。</text></svg>', caption: '图3　DNA 像旋转楼梯，磷酸—脱氧核糖骨架在外、碱基对在内侧。' },
      { type: 'heading', text: '五、DNA 分子的多样性和特异性' },
      { type: 'paragraph', text: '虽然组成 DNA 的碱基只有 A、T、G、C 四种，但碱基的<strong>排列顺序</strong>可以千变万化。一个很短的 DNA 片段，不同排列就能代表不同信息，这叫 DNA 的<strong>多样性</strong>。而每一个具体的 DNA 分子，其碱基排列顺序是固定不变的，这构成它的<strong>特异性</strong>，就像每个人的身份证号。遗传信息就储存在碱基的排列顺序里。' },
      { type: 'table', headers: ['结构层次', '组成', '要点'], rows: [['基本单位', '脱氧核苷酸', '磷酸 + 脱氧核糖 + 碱基 A/T/G/C'], ['单链', '多个脱氧核苷酸', '磷酸—脱氧核糖交替连接成骨架'], ['双链', '两条链', '反向平行、碱基互补配对'], ['整体', '双螺旋', '右旋楼梯状，碱基对在内侧']] },
      { type: 'tip', label: '提示·记结构的三条线', text: '记 DNA 结构顺着三条线：① 单位线——脱氧核苷酸由磷酸、脱氧核糖、碱基构成；② 链线——两条链反向平行；③ 配对线——A 对 T、G 对 C，A=T、G=C。把旋转楼梯的比喻和这三条线一起记，结构和计算题都好办。' },
      { type: 'list', items: ['多样性：碱基排列顺序千变万化，使生物性状多种多样', '特异性：每个 DNA 碱基顺序固定，可区分不同个体', '稳定性：双螺旋结构使 DNA 在细胞内相对稳定', '遗传信息：储存在碱基的排列顺序中'] }
    ],
    exercises: [
      { type: 'choice', question: 'DNA 的基本组成单位是？', options: ['氨基酸', '脱氧核苷酸', '核糖核苷酸', '葡萄糖'], answer: '脱氧核苷酸', explanation: 'DNA 的中文名是脱氧核糖核酸，它的基本组成单位是脱氧核苷酸。每个脱氧核苷酸由一分子磷酸、一分子脱氧核糖和一分子含氮碱基组成。氨基酸是蛋白质的基本单位，核糖核苷酸是 RNA 的基本单位，葡萄糖是单糖。所以正确选项是脱氧核苷酸。' },
      { type: 'choice', question: '根据碱基互补配对原则，DNA 中鸟嘌呤 G 一定与哪种碱基配对？', options: ['腺嘌呤 A', '胸腺嘧啶 T', '胞嘧啶 C', '尿嘧啶 U'], answer: '胞嘧啶 C', explanation: '在 DNA 双链中，碱基互补配对原则是 A 与 T 配对、G 与 C 配对。鸟嘌呤 G 只能和胞嘧啶 C 通过三条氢键相连。尿嘧啶 U 是 RNA 中的碱基，不与 DNA 配对。因此 G 的配对对象是胞嘧啶 C。' },
      { type: 'choice', question: '某双链 DNA 中鸟嘌呤 G 占碱基总数的 24%，则胸腺嘧啶 T 占？', options: ['24%', '26%', '48%', '52%'], answer: '26%', explanation: '由 G = C 可知 C 也占 24%，则 G + C 共占 48%。剩下 A + T 占 52%，又因 A = T，所以 T 占 26%。计算依据是双链 DNA 中嘌呤总量等于嘧啶总量、且 A 与 T 数量相等。因此胸腺嘧啶 T 占 26%。' },
      { type: 'fill', question: 'DNA 两条链之间的连接方式是___平行，且碱基遵循互补配对。', answer: '反向', explanation: 'DNA 分子的两条脱氧核苷酸链方向相反、互相平行，称为反向平行。两条链围绕同一中心轴盘成双螺旋，碱基排在内侧并按 A 对 T、G 对 C 互补配对。因此该空填反向，注意不要写成同向或平行无修饰。' },
      { type: 'fill', question: 'DNA 中遗传信息储存在___的排列顺序中。', answer: '碱基', explanation: '组成 DNA 的碱基只有 A、T、G、C 四种，但四种碱基的排列顺序可以千变万化，不同的排列代表不同的遗传信息。因此 DNA 的遗传信息就储存在碱基的排列顺序之中，该空填碱基即可。' }
    ]
  });
})();
