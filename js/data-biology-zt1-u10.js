/* 生物学 · 高三复习 · 分子与细胞 · 第3章 · 课时：第3节 细胞核的结构和功能 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u10',
    name: '第3节 细胞核的结构和功能',
    chapter: '分子与细胞 · 第3章 细胞的基本结构',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、细胞核的功能' },
      { type: 'paragraph', text: '<strong>细胞核</strong>是遗传信息库，是细胞代谢和遗传的控制中心。就像公司的「总部」，指挥着整个细胞的生命活动。大量实验（如伞藻嫁接、核移植）证明，细胞的遗传性状主要由细胞核决定。' },
      { type: 'list', items: [
        '细胞核是遗传信息库：DNA 主要存在于细胞核中的染色质上。',
        '细胞核是细胞代谢和遗传的控制中心。',
        '真核细胞一般只有一个细胞核，少数细胞有多个核（如骨骼肌细胞）或无核（如成熟红细胞）。'
      ] },
      { type: 'keypoint', label: '核心概念', text: '细胞核是遗传信息库，是细胞代谢和遗传的控制中心。细胞的一切生命活动都受细胞核中遗传信息的调控，但细胞核也必须依赖细胞质提供的物质和能量。' },
      { type: 'table', headers: ['结构', '特点', '功能'], rows: [
        ['核膜', '双层膜', '分隔核质，上有核孔'],
        ['核孔', '蛋白质复合体', '核质物质交换、信息交流'],
        ['核仁', '球形小体', 'rRNA 合成、核糖体形成'],
        ['染色质', 'DNA 和蛋白质', '遗传信息的载体']
      ] },
      { type: 'heading', text: '二、细胞核的结构' },
      { type: 'paragraph', text: '细胞核由核膜、核孔、核仁和染色质四部分构成。核膜是双层膜，把核内物质与细胞质分开；核孔实现核质之间的物质交换和信息交流；核仁与 rRNA 合成及核糖体形成有关；染色质是 DNA 和蛋白质的复合物。' },
      { type: 'svg', caption: '细胞核结构：核膜（双层）、核孔、核仁、染色质', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">细胞核的结构</text><circle cx="340" cy="175" r="110" fill="#d6eac4" stroke="#3f7d1e" stroke-width="4"/><circle cx="340" cy="175" r="95" fill="#eef6e4" stroke="#3f7d1e" stroke-width="1.5"/><circle cx="300" cy="150" r="22" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><text x="300" y="156" font-size="13" text-anchor="middle" fill="#ffffff" font-family="sans-serif">核仁</text><line x1="360" y1="120" x2="380" y2="100" stroke="#3f7d1e" stroke-width="3"/><text x="392" y="96" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">核孔</text><text x="340" y="220" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">染色质</text><text x="340" y="270" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">核膜（双层膜）</text></svg>' },
      { type: 'warn', label: '易错辨析', text: '核孔并非简单小孔，而是蛋白质复合体，对物质进出具有选择性，mRNA、蛋白质可通过核孔，但 DNA 不能通过核孔出细胞核。核仁在细胞周期中周期性消失和重建，代谢旺盛的细胞（如分泌细胞）核仁较大。' },
      { type: 'heading', text: '三、染色质与染色体的关系' },
      { type: 'paragraph', text: '<strong>染色质</strong>和<strong>染色体</strong>是同一物质在细胞不同时期的两种存在状态。分裂间期呈细长的染色质丝，进入分裂期时高度螺旋化、缩短变粗成为染色体；分裂结束后又解开螺旋恢复为染色质。' },
      { type: 'svg', caption: '染色质与染色体是同一物质在不同时期的两种形态：染色质（细丝）→染色体（棒状）', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">染色质与染色体</text><path d="M 80 150 Q 120 90 160 150 T 240 150" fill="none" stroke="#3f7d1e" stroke-width="5"/><text x="160" y="200" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">染色质（间期，细长丝）</text><rect x="420" y="110" width="36" height="90" rx="14" fill="#5aa832" stroke="#3f7d1e" stroke-width="3"/><text x="438" y="230" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">染色体（分裂期，棒状）</text><line x1="260" y1="150" x2="400" y2="150" stroke="#3f7d1e" stroke-width="3"/><polygon points="400,150 385,143 385,157" fill="#3f7d1e"/></svg>' },
      { type: 'tip', label: '高频考点', text: '染色质和染色体的关系常考判断题：二者是「同一物质」而非「不同物质」，化学组成都是 DNA 和蛋白质，只是形态和螺旋化程度不同。易错点是误以为它们是两种不同物质。' },
      { type: 'heading', text: '四、细胞核与细胞整体的关系' },
      { type: 'paragraph', text: '细胞核控制着细胞的代谢和遗传，但细胞核不能独立生存，必须依赖细胞质提供物质和能量。去核后的细胞不能长久存活，说明细胞核与细胞质是相互依存、不可分割的统一整体。' },
      { type: 'list', items: [
        '结构完整性：只有保持细胞结构完整，细胞才能正常完成各项生命活动。',
        '核质依存：细胞核调控细胞质，细胞质为细胞核提供物质和能量。',
        '典型案例：伞藻嫁接实验证明帽的形态由细胞核控制。'
      ] },
      { type: 'svg', caption: '细胞核与细胞质相互依存：核调控质、质供养核', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="260" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">核质相互依存</text><rect x="90" y="100" width="180" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="138" font-size="17" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">细胞核</text><rect x="410" y="100" width="180" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="138" font-size="17" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">细胞质</text><line x1="270" y1="120" x2="405" y2="120" stroke="#3f7d1e" stroke-width="3"/><polygon points="405,120 390,113 390,127" fill="#3f7d1e"/><line x1="410" y1="140" x2="275" y2="140" stroke="#3f7d1e" stroke-width="3"/><polygon points="275,140 290,133 290,147" fill="#3f7d1e"/></svg>' },
      { type: 'example', label: '典型例题', text: '将黑色美西螈胚胎细胞核移植到白色美西螈去核卵细胞中，发育成的个体为黑色。该实验说明细胞核控制着生物的遗传性状，因为细胞核中含有指导发育的全套遗传信息（DNA）。' },
      { type: 'tip', label: '高频考点', text: '细胞核相关实验结论要记牢：伞藻嫁接与核移植证明细胞核控制遗传；蝾螈受精卵横缢证明细胞核与分裂分化有关；变形虫去核后不能摄食，说明细胞核控制代谢。考查常以实验分析题出现。' },
      { type: 'paragraph', text: '总结：细胞核是遗传信息库和控制中心，由核膜、核孔、核仁、染色质组成，其中染色质与染色体是同一物质不同时期的两种形态。细胞核与细胞质相互依存，共同保证细胞正常生命活动。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于细胞核功能的叙述，正确的是（ ）', options: ['细胞核是细胞代谢的主要场所', '细胞核是遗传信息库和代谢、遗传的控制中心', '细胞核中的 DNA 都位于染色体上', '原核细胞也有真正的细胞核'], answer: '细胞核是遗传信息库和代谢、遗传的控制中心', explanation: '细胞代谢的主要场所是细胞质基质，不是细胞核；细胞核是遗传信息库，也是细胞代谢和遗传的控制中心，这一表述正确；细胞核中的 DNA 主要位于染色质上，线粒体和叶绿体中也含少量 DNA；原核细胞没有以核膜包被的真正细胞核。' },
      { type: 'choice', question: '核仁的功能是（ ）', options: ['储存遗传信息', '与 rRNA 合成及核糖体形成有关', '控制物质进出细胞核', '进行有氧呼吸'], answer: '与 rRNA 合成及核糖体形成有关', explanation: '核仁与某种 RNA（rRNA）的合成以及核糖体的形成有关，代谢旺盛、蛋白质合成量大的细胞往往核仁较大。储存遗传信息的是染色质上的 DNA，控制物质进出的是核孔，有氧呼吸主要在线粒体进行。' },
      { type: 'choice', question: '染色质和染色体的关系是（ ）', options: ['两种不同物质', '同一物质在细胞不同时期的两种形态', '成分完全不同', '分别存在于原核和真核细胞'], answer: '同一物质在细胞不同时期的两种形态', explanation: '染色质和染色体是同一物质在细胞不同时期的两种存在状态，都由 DNA 和蛋白质组成，间期呈细丝状染色质，分裂期高度螺旋化为棒状染色体。它们不是不同物质，原核细胞没有真正的染色体或染色质结构。' },
      { type: 'fill', question: '细胞核的结构包括核膜、核孔、核仁和______，其中实现核质之间物质交换的是______。', answer: '染色质；核孔', explanation: '细胞核由核膜、核孔、核仁和染色质四部分构成。核孔是核膜上的结构，是核质之间频繁进行物质交换和信息交流的通道，对大分子物质进出具有选择性。' },
      { type: 'fill', question: '______实验证明伞藻帽的形态由细胞核控制，说明细胞核是细胞______的控制中心。', answer: '伞藻嫁接（或核移植）；遗传', explanation: '伞藻的嫁接和核移植实验表明，伞藻帽的形态结构取决于细胞核，证明细胞核控制着生物的遗传性状，即细胞核是细胞遗传和代谢的控制中心。' }
    ]
  });
})();
