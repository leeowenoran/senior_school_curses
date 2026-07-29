/* 生物学 · 必修1 分子与细胞 · 第2章 · 课时：第5节 核酸是遗传信息的携带者 */
(function () {
  var v = gzGetVolume('biology', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u7',
    name: '第5节 核酸是遗传信息的携带者',
    chapter: '必修1 分子与细胞 · 第2章 组成细胞的分子',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、核酸的种类' },
      { type: 'paragraph', text: '核酸是细胞内携带遗传信息的物质，在生物体的遗传、变异和蛋白质合成中具有重要作用。我们熟悉的DNA（脱氧核糖核酸）和RNA（核糖核酸）都属于核酸。新冠病毒、流感病毒等的遗传物质是RNA，而绝大多数生物的遗传物质是DNA。' },
      { type: 'list', items: ['DNA：脱氧核糖核酸，是绝大多数生物的遗传物质', 'RNA：核糖核酸，是少数病毒（如烟草花叶病毒、HIV）的遗传物质', '核酸是一切生物的遗传物质的基础载体'] },
      { type: 'keypoint', label: '重点·核酸的两大类', text: '<strong>核酸分为脱氧核糖核酸（DNA）和核糖核酸（RNA）两大类。</strong>真核细胞和原核细胞的遗传物质都是DNA；部分病毒的遗传物质是RNA。因此可以说，DNA是主要的遗传物质，但核酸本身才是遗传信息的携带者。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 核酸的两大分类</text><rect x="60" y="80" width="250" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="185" y="120" font-size="17" fill="#2e3a22" text-anchor="middle" font-weight="bold">DNA</text><text x="185" y="150" font-size="14" fill="#2e3a22" text-anchor="middle">脱氧核糖核酸</text><text x="185" y="180" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">绝大多数生物遗传物质</text><rect x="370" y="80" width="250" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="495" y="120" font-size="17" fill="#2e3a22" text-anchor="middle" font-weight="bold">RNA</text><text x="495" y="150" font-size="14" fill="#2e3a22" text-anchor="middle">核糖核酸</text><text x="495" y="180" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">部分病毒遗传物质</text><polygon points="310,155 368,140 368,170" fill="#3f7d1e"/><text x="340" y="280" font-size="13" fill="#2e3a22" text-anchor="middle">核酸 = DNA 或 RNA，二者都由核苷酸聚合而成。</text></svg>', caption: '图1 核酸分为DNA和RNA两大类。' },
      { type: 'heading', text: '二、核苷酸——核酸的基本组成单位' },
      { type: 'paragraph', text: '核酸是大分子聚合物，它的基本组成单位是<strong>核苷酸</strong>。每个核苷酸由三部分组成：一分子含氮的碱基、一分子五碳糖、一分子磷酸。碱基、五碳糖、磷酸三者连接，构成单个核苷酸；许多核苷酸连成链，再形成核酸。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 核苷酸的结构（碱基 + 五碳糖 + 磷酸）</text><rect x="250" y="130" width="180" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="170" font-size="15" fill="#2e3a22" text-anchor="middle">五碳糖</text><rect x="70" y="130" width="160" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="150" y="170" font-size="15" fill="#2e3a22" text-anchor="middle">含氮碱基</text><polygon points="230,170 268,158 268,182" fill="#3f7d1e"/><rect x="450" y="130" width="160" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="530" y="170" font-size="15" fill="#2e3a22" text-anchor="middle">磷酸</text><polygon points="430,170 468,158 468,182" fill="#3f7d1e"/><text x="340" y="270" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">五碳糖为脱氧核糖 → 脱氧核苷酸 → DNA</text><text x="340" y="300" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">五碳糖为核糖 → 核糖核苷酸 → RNA</text></svg>', caption: '图2 核苷酸由含氮碱基、五碳糖、磷酸三部分组成。' },
      { type: 'list', items: ['DNA的基本单位：脱氧核苷酸，五碳糖为脱氧核糖，碱基有 A、T、C、G', 'RNA的基本单位：核糖核苷酸，五碳糖为核糖，碱基有 A、U、C、G', 'DNA与RNA共有碱基 A、C、G；DNA特有T，RNA特有U'] },
      { type: 'table', headers: ['比较项目', 'DNA', 'RNA'], rows: [['五碳糖', '脱氧核糖', '核糖'], ['含氮碱基', 'A、T、C、G', 'A、U、C、G'], ['主要分布', '细胞核（线粒体、叶绿体也有）', '细胞质'], ['结构', '一般为双链', '一般为单链']] },
      { type: 'example', label: '例题·判断核酸类型', text: '已知某核酸含碱基U（尿嘧啶），不含碱基T。它最可能是哪种核酸？<br>解：碱基U是RNA特有的碱基，T是DNA特有的碱基。该核酸含U而不含T，说明其基本单位是核糖核苷酸。<br>答：它是RNA（核糖核酸）。' },
      { type: 'heading', text: '三、DNA与RNA在细胞中的分布' },
      { type: 'paragraph', text: '在真核细胞中，<strong>DNA主要分布在细胞核中</strong>，少量分布在线粒体和叶绿体里；<strong>RNA主要分布在细胞质中</strong>，比如核糖体、mRNA都位于细胞质。利用甲基绿和吡罗红混合染色剂可以观察：甲基绿使DNA呈绿色，吡罗红使RNA呈红色。' },
      { type: 'warn', label: '易错·分布不是绝对', text: '① DNA主要分布在细胞核，但线粒体和叶绿体也含少量DNA；② RNA主要分布在细胞质，但细胞核中也有RNA（如转录出来的mRNA先出现在核内）；③ 说DNA只在细胞核、RNA只在细胞质是错误表述，应说主要在何处。' },
      { type: 'tip', label: '提示·染色观察', text: '记住一句口诀：<strong>甲基绿染DNA显绿色，吡罗红染RNA显红色。</strong>观察时先用盐酸处理，使染色质中DNA与蛋白质分离，便于染色剂与DNA结合，同时能改变膜的通透性。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 DNA与RNA在真核细胞中的分布</text><rect x="250" y="70" width="180" height="220" rx="90" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="150" font-size="15" fill="#2e3a22" text-anchor="middle">细胞核</text><text x="340" y="178" font-size="15" fill="#5aa832" text-anchor="middle" font-weight="bold">DNA 主要在此</text><circle cx="340" cy="100" r="20" fill="#eef6e4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="105" font-size="12" fill="#2e3a22" text-anchor="middle">核仁</text><text x="340" y="230" font-size="14" fill="#2e3a22" text-anchor="middle">细胞质</text><text x="340" y="256" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">RNA 主要在此</text><polygon points="200,180 248,170 248,190" fill="#3f7d1e"/><rect x="40" y="150" width="160" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="120" y="186" font-size="14" fill="#2e3a22" text-anchor="middle">DNA 绿色</text><polygon points="432,180 480,170 480,190" fill="#3f7d1e"/><rect x="480" y="150" width="160" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="560" y="186" font-size="14" fill="#2e3a22" text-anchor="middle">RNA 红色</text></svg>', caption: '图3 真核细胞中DNA主要在细胞核，RNA主要在细胞质。' },
      { type: 'heading', text: '四、核酸是遗传信息的携带者' },
      { type: 'paragraph', text: '核酸能够储存遗传信息，靠的是<strong>核苷酸的排列顺序</strong>。就像用少数字母能拼出无数单词，4种碱基（A、T、C、G或A、U、C、G）的不同排列顺序，记录了生物体的遗传信息。正因为如此，核酸是细胞内携带遗传信息的物质，在生物体的遗传、变异和蛋白质的生物合成中具有极其重要的作用。' },
      { type: 'keypoint', label: '重点·核酸的功能', text: '<strong>核酸是细胞内携带遗传信息的物质，在生物体的遗传、变异和蛋白质合成中具有重要作用。</strong>绝大多数生物的遗传物质是DNA；少数病毒的遗传物质是RNA。无论DNA还是RNA，遗传信息都储存在核苷酸的排列顺序之中。' },
      { type: 'example', label: '例题·综合理解', text: '为什么核酸能够储存大量遗传信息？<br>解：核酸由核苷酸连接而成，组成DNA的脱氧核苷酸有4种，组成RNA的核糖核苷酸也有4种。大量核苷酸在链上的排列顺序是千变万化的，不同的排列顺序代表不同的遗传信息。<br>答：遗传信息储存在核苷酸的排列顺序中，排列顺序的多样性使核酸能携带大量信息。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于核酸的说法，正确的是？', options: ['核酸包括DNA和RNA两类', '所有生物的遗传物质都是DNA', 'RNA不含磷酸', 'DNA不含含氮碱基'], answer: '核酸包括DNA和RNA两类', explanation: '核酸根据五碳糖不同分为脱氧核糖核酸（DNA）和核糖核酸（RNA）两大类。绝大多数生物的遗传物质是DNA，但少数病毒以RNA为遗传物质，所以并非所有生物遗传物质都是DNA。RNA和DNA的核苷酸都由含氮碱基、五碳糖、磷酸三部分组成，都含有磷酸和碱基。因此正确选项是A。' },
      { type: 'choice', question: '组成RNA的含氮碱基不包括下列哪一种？', options: ['A（腺嘌呤）', 'U（尿嘧啶）', 'C（胞嘧啶）', 'T（胸腺嘧啶）'], answer: 'T（胸腺嘧啶）', explanation: 'RNA的基本单位是核糖核苷酸，其含氮碱基有A、U、C、G四种。其中T（胸腺嘧啶）是DNA特有的碱基，U（尿嘧啶）是RNA特有的碱基。因此组成RNA的碱基不包括T，正确选项为D。' },
      { type: 'choice', question: '在真核细胞中，DNA与RNA的主要分布是？', options: ['DNA主要在细胞质，RNA主要在细胞核', 'DNA主要在细胞核，RNA主要在细胞质', 'DNA和RNA都只在细胞核', 'DNA和RNA都只在细胞质'], answer: 'DNA主要在细胞核，RNA主要在细胞质', explanation: '在真核细胞中，DNA主要分布在细胞核中，线粒体和叶绿体也含少量DNA；RNA主要分布在细胞质中（如核糖体、mRNA），但细胞核内也有RNA。描述分布时应强调主要在何处，而非绝对只在某处。所以正确选项是DNA主要在细胞核、RNA主要在细胞质。' },
      { type: 'fill', question: '核苷酸由含氮碱基、___和磷酸三部分组成。', answer: '五碳糖', explanation: '核酸的基本组成单位是核苷酸。每个核苷酸都由一分子含氮碱基、一分子五碳糖和一分子磷酸组成。DNA中的五碳糖是脱氧核糖，RNA中的五碳糖是核糖，五碳糖种类不同是区分DNA与RNA的关键之一。' },
      { type: 'fill', question: '观察核酸在细胞中的分布时，甲基绿使___呈绿色，吡罗红使RNA呈红色。', answer: 'DNA', explanation: '甲基绿和吡罗红两种染色剂对DNA和RNA的亲和力不同：甲基绿使DNA呈现绿色，吡罗红使RNA呈现红色。利用混合染色剂可以显示DNA和RNA在细胞中的分布位置，实验中常用盐酸处理以增大膜的通透性并促使DNA与蛋白质分离。' }
    ]
  });
})();
