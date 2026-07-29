/* 生物学 · 必修2 遗传与进化 · 第3章 · 课时：第4节 基因是有遗传效应的DNA片段 */
(function () {
  var v = gzGetVolume('biology', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u9',
    name: '第4节 基因是有遗传效应的DNA片段',
    chapter: '必修2 遗传与进化 · 第3章 基因的本质',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、基因是什么' },
      { type: 'paragraph', text: '通俗地说，<strong>基因是有遗传效应的 DNA 片段</strong>。所谓「有遗传效应」，是指这段 DNA 能指导合成蛋白质或控制某种性状，不是随便一段 DNA 都叫基因。比如决定你眼睛颜色的、决定豌豆高矮的，都是具体的基因。一个 DNA 分子上分布着许多个基因。' },
      { type: 'list', items: ['基因的化学本质：有遗传效应的 DNA 片段', '基因的功能：携带遗传信息、控制生物性状', '一个 DNA 分子上含多个基因，基因在 DNA 上呈线性排列'] },
      { type: 'heading', text: '二、DNA 片段不都是基因' },
      { type: 'paragraph', text: '一个 DNA 分子很长，上面只有一部分片段有遗传效应、是基因；还有一部分片段目前看不出有什么作用，叫作<strong>非基因片段</strong>或间隔序列。所以「DNA 片段」和「基因」不能画等号：基因是 DNA 片段，但 DNA 片段不一定是基因。这点考试常挖坑。' },
      { type: 'keypoint', label: '重点·基因与 DNA 的关系', text: '<strong>基因是有遗传效应的 DNA 片段，是遗传物质结构和功能的基本单位。基因在 DNA 分子上呈线性排列；DNA 分子包含基因和非基因区段，因此基因只是 DNA 的一部分，不能把「DNA 片段」和「基因」混为一谈。</strong>' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">基因是 DNA 上有遗传效应的片段</text><rect x="40" y="70" width="600" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="106" font-size="14" fill="#2e3a22" text-anchor="middle">一条长 DNA 分子：———基因———间隔———基因———间隔———基因———</text><rect x="40" y="160" width="180" height="100" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="130" y="200" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">基因片段</text><text x="130" y="232" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">有遗传效应</text><rect x="460" y="160" width="180" height="100" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="200" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">非基因区段</text><text x="550" y="232" font-size="14" fill="#2e3a22" text-anchor="middle">暂无效应</text><text x="340" y="285" font-size="13" fill="#2e3a22" text-anchor="middle">基因是 DNA 的一部分，DNA 上还有非基因间隔序列。</text></svg>', caption: '图1　基因是 DNA 上有遗传效应的片段，其间还有非基因区段。' },
      { type: 'heading', text: '三、基因的碱基排列顺序代表遗传信息' },
      { type: 'paragraph', text: '不同基因的差别，本质上是<strong>碱基排列顺序</strong>不同。就像用 A、T、G、C 四个「字母」写出不同「句子」，每个基因就是一句特定的「句子」，这句中蕴含的指令就是<strong>遗传信息</strong>。碱基排列顺序变了，基因携带的信息就变了，控制的性状也可能改变。' },
      { type: 'warn', label: '易错·遗传信息在哪', text: '易错点：遗传信息储存在基因的碱基排列顺序里，不是储存在「脱氧核糖」或「磷酸」里，因为所有 DNA 的糖—磷酸骨架都一样，真正有信息量的是碱基顺序。另外，RNA 病毒的遗传信息在 RNA 的碱基顺序里。不要说「基因在碱基里」，准确说法是基因中碱基的排列顺序代表遗传信息。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">基因在染色体上呈线性排列</text><rect x="60" y="90" width="560" height="50" rx="25" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="122" font-size="14" fill="#2e3a22" text-anchor="middle">一条染色体（含一个 DNA）：基因A——基因B——基因C——基因D——…</text><text x="340" y="190" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">多个基因排成一条直线</text><text x="340" y="230" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">一条染色体上含多个基因</text><text x="340" y="270" font-size="13" fill="#2e3a22" text-anchor="middle">染色体是基因的载体，基因在染色体上线性排列（线粒体、叶绿体也有少量基因）。</text></svg>', caption: '图2　基因在染色体上呈线性排列，一条染色体上有多个基因。' },
      { type: 'heading', text: '四、基因在染色体上' },
      { type: 'paragraph', text: '基因主要在染色体上（线粒体、叶绿体里也有少量基因，叫细胞质基因）。染色体是基因的「载体」。一条染色体含一个 DNA 分子（复制后含两个），一个 DNA 上有许多基因，所以<strong>基因在染色体上呈线性排列</strong>。摩尔根等人用果蝇实验证实，基因在染色体上排成一条直线。' },
      { type: 'example', label: '例题·数量关系', text: '已知人体一个体细胞有 46 条染色体，且染色体未复制。问其中含多少个 DNA 分子、基因数量和染色体数量的关系如何？<br>解：未复制时一条染色体对应一个 DNA 分子，所以 46 条染色体含 46 个 DNA 分子。每个 DNA 上有许多基因，因此基因总数远多于染色体数，且基因在染色体上线性排列。<br>答：46 个 DNA 分子；基因数远多于染色体数。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">DNA、基因、染色体、性状的关系</text><rect x="60" y="70" width="220" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="170" y="105" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">染色体（载体）</text><rect x="320" y="70" width="180" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="410" y="105" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">DNA</text><polygon points="280,105 318,93 318,117" fill="#3f7d1e"/><rect x="540" y="70" width="120" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="600" y="105" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">基因</text><polygon points="500,105 538,93 538,117" fill="#3f7d1e"/><rect x="200" y="190" width="280" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="225" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">基因指导蛋白质合成</text><text x="340" y="250" font-size="13" fill="#2e3a22" text-anchor="middle">从而控制性状</text><polygon points="410,140 340,180 480,180" fill="#3f7d1e"/><text x="340" y="300" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">染色体 ⊃ DNA ⊃ 基因；基因控制性状，环境也参与</text></svg>', caption: '图3　染色体含 DNA，DNA 含基因，基因控制性状。' },
      { type: 'heading', text: '五、DNA、基因、染色体与性状的关系' },
      { type: 'paragraph', text: '这四者的关系可以层层嵌套理解：<strong>染色体由 DNA 和蛋白质组成，是基因的载体；基因是有遗传效应的 DNA 片段；基因通过指导蛋白质合成来控制生物的性状</strong>。此外，性状不只由基因决定，还受环境的影响，是基因和环境共同作用的结果。' },
      { type: 'table', headers: ['名词', '与上一层的关系'], rows: [['染色体', '由 DNA 和蛋白质组成，是基因的载体'], ['DNA', '主要载体是染色体，上面有基因'], ['基因', '有遗传效应的 DNA 片段，控制性状'], ['性状', '由基因控制，也受环境影响']] },
      { type: 'tip', label: '提示·四者关系顺口溜', text: '记住这个链条：染色体装 DNA，DNA 上排基因，基因管性状、环境也来帮。做题遇到「谁包含谁」「谁是载体」这类题，顺着链条推就不会乱。并注意两点：基因只是 DNA 的一部分；性状是基因加环境共同结果。' },
      { type: 'list', items: ['基因是遗传物质结构和功能的基本单位', '不同基因的区别在于碱基排列顺序不同', '一条染色体上有多个基因，呈线性排列', '细胞质（线粒体、叶绿体）中也有少量基因'] }
    ],
    exercises: [
      { type: 'choice', question: '下列关于基因的叙述，正确的是？', options: ['基因就是任意一段 DNA', '基因是有遗传效应的 DNA 片段', '基因只存在于 RNA 中', '一个 DNA 分子上只有一个基因'], answer: '基因是有遗传效应的 DNA 片段', explanation: '基因的本质是有遗传效应的 DNA 片段，能控制生物性状，是遗传物质结构和功能的基本单位。并非任意 DNA 片段都是基因，DNA 上还有非基因区段；基因主要位于 DNA 上，RNA 病毒的基因在 RNA 上；一个 DNA 分子上有许多个基因。因此正确选项是基因是有遗传效应的 DNA 片段。' },
      { type: 'choice', question: '关于 DNA 片段和基因的关系，正确的说法是？', options: ['所有 DNA 片段都是基因', '基因都不是 DNA 片段', '基因是 DNA 上有遗传效应的片段，DNA 上也有非基因区段', '基因与 DNA 没有关系'], answer: '基因是 DNA 上有遗传效应的片段，DNA 上也有非基因区段', explanation: '基因是有遗传效应的 DNA 片段，而一个 DNA 分子上除了基因，还有不具备遗传效应的间隔序列。因此 DNA 片段不一定是基因，基因只是其中一部分。选项说所有 DNA 片段都是基因、或基因不是 DNA 片段都不对。正确说法是基因是 DNA 上有遗传效应的片段且 DNA 上有非基因区段。' },
      { type: 'choice', question: '遗传信息储存在基因的什么之中？', options: ['磷酸骨架的排列', '脱氧核糖的顺序', '碱基的排列顺序', '染色体的蛋白质中'], answer: '碱基的排列顺序', explanation: '所有 DNA 的磷酸和脱氧核糖骨架都相同，真正携带信息的是四种碱基 A、T、G、C 的排列顺序。不同基因的区别就在于碱基排列顺序不同，遗传信息就储存在这段顺序里。因此正确选项是碱基的排列顺序。' },
      { type: 'fill', question: '基因在染色体上呈___排列，一条染色体上有多个基因。', answer: '线性', explanation: '摩尔根等人通过果蝇杂交实验证明，基因在染色体上排成一条直线，称为线性排列。一条染色体含一个 DNA 分子（未复制时），一个 DNA 分子上有许多个基因，因此基因在染色体上呈线性排列。该空填线性。' },
      { type: 'fill', question: '生物的性状主要由___控制，同时也受环境影响。', answer: '基因', explanation: '基因是有遗传效应的 DNA 片段，它通过指导蛋白质的合成来控制生物的性状。但性状不是只由基因决定，还受外界环境（如光照、营养）影响，是基因与环境共同作用的结果。因此生物的性状主要由基因控制，同时也受环境影响，该空填基因。' }
    ]
  });
})();
