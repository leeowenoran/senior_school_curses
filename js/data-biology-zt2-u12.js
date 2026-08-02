/* 生物学 · 高三复习 · 遗传与进化 · 第4章 · 课时：第1节 基因指导蛋白质的合成（二）翻译与中心法则 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u12',
    name: '第1节 基因指导蛋白质的合成（二）翻译与中心法则',
    chapter: '遗传与进化 · 第4章 基因的表达',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、翻译概述' },
      { type: 'paragraph', text: '转录得到的 mRNA 从细胞核进入细胞质，来到核糖体上。翻译就是以 mRNA 为模板，把核苷酸语言「翻译」成氨基酸语言，合成具有一定顺序的蛋白质的过程。如果说转录是抄图纸，翻译就是按图纸组装产品。' },
      { type: 'keypoint', label: '核心概念·翻译', text: '<strong>翻译是以 mRNA 为模板，以 20 种氨基酸为原料，在核糖体上合成蛋白质的过程。</strong>其本质是密码子与反密码子的互补配对，把核酸的碱基序列转化为蛋白质的氨基酸序列。' },
      { type: 'list', items: ['场所：核糖体（细胞质中）', '模板：mRNA', '原料：20 种氨基酸', '产物：具有一定氨基酸顺序的蛋白质', '配对：mRNA 上的密码子与 tRNA 上的反密码子互补配对'] },
      { type: 'table', headers: ['翻译要素', '内容'], rows: [['场所', '核糖体'], ['模板', 'mRNA'], ['原料', '20种氨基酸'], ['搬运工具', 'tRNA'], ['产物', '蛋白质']] },
      { type: 'heading', text: '二、密码子与反密码子' },
      { type: 'paragraph', text: '密码子是 mRNA 上决定一个氨基酸的 3 个相邻碱基。64 种密码子中，AUG 是起始密码子（编码甲硫氨酸），UAA、UAG、UGA 是终止密码子，它们不编码任何氨基酸，只起「句号」作用。反密码子是 tRNA 上与密码子互补配对的 3 个碱基，靠它把正确的氨基酸送到正确位置。' },
      { type: 'list', items: ['起始密码子 AUG：编码甲硫氨酸，标志翻译开始', '终止密码子 UAA、UAG、UGA：不编码氨基酸，标志翻译结束', '反密码子：tRNA 上与密码子互补的 3 个碱基', '简并性：一种氨基酸可由多个密码子编码，增强了容错能力'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 翻译：核糖体沿mRNA移动合成蛋白质</text><rect x="60" y="120" width="560" height="120" rx="14" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="150" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">核糖体</text><line x1="90" y1="200" x2="590" y2="200" stroke="#3f7d1e" stroke-width="4"/><text x="340" y="228" font-size="12" fill="#5aa832" text-anchor="middle">mRNA（模板，含密码子）</text><rect x="150" y="60" width="70" height="45" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="185" y="87" font-size="12" fill="#2e3a22" text-anchor="middle">tRNA</text><polygon points="220,105 240,118 220,131" fill="#3f7d1e"/><rect x="470" y="60" width="70" height="45" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="505" y="87" font-size="12" fill="#2e3a22" text-anchor="middle">tRNA</text><polygon points="540,105 560,118 540,131" fill="#3f7d1e"/><text x="340" y="278" font-size="12" fill="#2e3a22" text-anchor="middle">tRNA携带氨基酸进入核糖体，按密码子与反密码子配对，肽链不断延长。</text></svg>', caption: '图1　核糖体沿 mRNA 移动，tRNA 按密码子配对搬运氨基酸合成肽链。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 密码子与反密码子互补配对</text><rect x="120" y="90" width="200" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="220" y="115" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">AUG</text><text x="220" y="140" font-size="12" fill="#5aa832" text-anchor="middle">mRNA 密码子</text><polygon points="320,120 380,110 380,140" fill="#3f7d1e"/><rect x="390" y="90" width="200" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="490" y="115" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">UAC</text><text x="490" y="140" font-size="12" fill="#5aa832" text-anchor="middle">tRNA 反密码子</text><text x="340" y="200" font-size="13" fill="#2e3a22" text-anchor="middle">AUG 对应甲硫氨酸（起始），UAC 与其互补</text><text x="340" y="232" font-size="12" fill="#2e3a22" text-anchor="middle">反密码子与密码子反向互补配对，保证氨基酸正确入位。</text></svg>', caption: '图2　密码子 AUG 与反密码子 UAC 反向互补配对。' },
      { type: 'tip', label: '高频考点·简并性的意义', text: '一种氨基酸往往对应多个密码子，这叫密码子的简并性。高考常考它的意义：基因突变导致某个碱基改变时，可能改变后的密码子仍编码同一种氨基酸，蛋白质不变，所以突变不一定改变性状——这正是生物容错能力的体现，也是判断「突变是否影响性状」的关键。' },
      { type: 'warn', label: '易错辨析·密码子与反密码子', text: '① 终止密码子 UAA、UAG、UGA 不编码氨基酸，别把它们当普通氨基酸；② 反密码子在 tRNA 上，不在 mRNA 上；③ 一种 tRNA 只有一个反密码子，但通常对应一种氨基酸；④ 密码子共 64 种，其中 61 种编码氨基酸，3 种为终止密码子。' },
      { type: 'heading', text: '三、中心法则' },
      { type: 'paragraph', text: '中心法则概括了遗传信息的流动方向：DNA →（转录） RNA →（翻译） 蛋白质。这是所有细胞生物共同的信息主线。此外，某些 RNA 病毒还能进行 RNA 复制（RNA → RNA）和逆转录（RNA → DNA），这两条是中心法则的补充。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 中心法则信息流动方向</text><rect x="60" y="110" width="120" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="120" y="135" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">DNA</text><polygon points="180,140 230,130 230,160" fill="#3f7d1e"/><rect x="240" y="110" width="120" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="300" y="135" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">RNA</text><polygon points="360,140 410,130 410,160" fill="#3f7d1e"/><rect x="420" y="110" width="120" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="480" y="135" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">蛋白质</text><text x="120" y="205" font-size="12" fill="#5aa832" text-anchor="middle">转录</text><text x="365" y="205" font-size="12" fill="#5aa832" text-anchor="middle">翻译</text><text x="340" y="235" font-size="12" fill="#2e3a22" text-anchor="middle">RNA病毒还可RNA复制、逆转录（图中可补充的支线）。</text></svg>', caption: '图3　中心法则主线：DNA 经转录到 RNA，再经翻译到蛋白质。' },
      { type: 'paragraph', text: '记住一句话：遗传信息可以从 DNA 流向 DNA（复制）、从 DNA 流向 RNA（转录）、从 RNA 流向蛋白质（翻译）；个别病毒能从 RNA 流向 RNA（RNA 复制）或从 RNA 流向 DNA（逆转录）。但蛋白质不能反向决定核酸，这是单向为主的信息流。' },
      { type: 'table', headers: ['过程', '模板', '产物', '实例'], rows: [['转录', 'DNA一条链', 'RNA', '细胞生物'], ['翻译', 'mRNA', '蛋白质', '所有生物'], ['RNA复制', 'RNA', 'RNA', 'RNA病毒'], ['逆转录', 'RNA', 'DNA', '逆转录病毒']] },
      { type: 'example', label: '例题·由密码子推断氨基酸', text: '已知 mRNA 上一段序列为 AUG CCA UAA，其中 AUG 是起始密码子，UAA 是终止密码子。<br>分析：AUG 编码甲硫氨酸（翻译起点），CCA 编码脯氨酸，UAA 是终止密码子不编码氨基酸，翻译到此停止。<br>因此这段序列指导合成的多肽含 2 个氨基酸，顺序为甲硫氨酸—脯氨酸。注意终止密码子不计入氨基酸数目。' }
    ],
    exercises: [
      { type: 'choice', question: '翻译过程发生的场所是？', options: ['细胞核', '核糖体', '线粒体基质', '内质网'], answer: '核糖体', explanation: '翻译是以 mRNA 为模板合成蛋白质的过程，该过程在细胞质中的核糖体上进行。细胞核是转录的主要场所，线粒体是能量供应相关场所，内质网主要参与蛋白质的加工和运输，均不是翻译合成肽链的场所。' },
      { type: 'choice', question: '反密码子位于哪种分子上？', options: ['mRNA', 'tRNA', 'rRNA', 'DNA'], answer: 'tRNA', explanation: '反密码子是 tRNA 上与 mRNA 上密码子互补配对的 3 个相邻碱基。tRNA 靠反密码子识别密码子，从而把对应的氨基酸运到核糖体上。mRNA 上的是密码子，rRNA 是核糖体成分，DNA 上一般没有反密码子这一概念。' },
      { type: 'choice', question: '下列关于密码子的叙述，正确的是？', options: ['一种密码子可以编码多种氨基酸', '终止密码子 UAA、UAG、UGA 不编码氨基酸', '所有密码子都编码氨基酸，没有例外', '一个密码子由 2 个相邻碱基组成'], answer: '终止密码子 UAA、UAG、UGA 不编码氨基酸', explanation: '密码子是 mRNA 上决定一个氨基酸的 3 个相邻碱基，共 64 种。其中 UAA、UAG、UGA 是终止密码子，不编码任何氨基酸，仅作为翻译终止信号。多数氨基酸由多个密码子编码（简并性），并非一种密码子编码多种氨基酸，也不是所有密码子都编码氨基酸。' },
      { type: 'fill', question: '翻译过程的模板是___（填RNA的种类）。', answer: 'mRNA', explanation: '翻译是以 mRNA 为模板，以 20 种氨基酸为原料，在核糖体上合成蛋白质的过程。mRNA 上携带的密码子决定了氨基酸的排列顺序，因此翻译的模板是 mRNA 而不是 tRNA 或 rRNA。' },
      { type: 'fill', question: '作为起始密码子、编码甲硫氨酸的三个碱基是___。', answer: 'AUG', explanation: '在 64 种密码子中，AUG 是起始密码子，同时编码甲硫氨酸，翻译通常从此处开始。与之相对，UAA、UAG、UGA 是终止密码子，不编码氨基酸，翻译读到它们就停止。' }
    ]
  });
})();
