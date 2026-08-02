/* 生物学 · 高三复习 · 分子与细胞 · 第2章 · 课时：第5节 核酸是遗传信息的携带者 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u7',
    name: '第5节 核酸是遗传信息的携带者',
    chapter: '分子与细胞 · 第2章 组成细胞的分子',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、核酸的种类与功能' },
      { type: 'paragraph', text: '<strong>核酸</strong>是细胞内携带遗传信息的物质，在生物体的遗传、变异和蛋白质合成中具有极其重要的作用。核酸分为两大类：脱氧核糖核酸（DNA）和核糖核酸（RNA）。' },
      { type: 'list', items: [
        'DNA：主要存在于细胞核中，是绝大多数生物的遗传物质，携带遗传信息。',
        'RNA：主要存在于细胞质中，参与蛋白质的合成，某些病毒以 RNA 为遗传物质。',
        '核酸是遗传信息的携带者，是一切生物（包括病毒）都含有的物质。'
      ] },
      { type: 'keypoint', label: '核心概念', text: '核酸是遗传信息的携带者。绝大多数生物的遗传物质是 DNA，少数病毒以 RNA 为遗传物质，故 DNA 是主要的遗传物质。' },
      { type: 'heading', text: '二、核酸的基本组成单位——核苷酸' },
      { type: 'paragraph', text: '核酸水解后得到的基本组成单位叫<strong>核苷酸</strong>，一分子核苷酸由一分子磷酸、一分子五碳糖和一分子含氮碱基组成。根据五碳糖不同，核苷酸分为脱氧核糖核苷酸和核糖核苷酸两大类。' },
      { type: 'svg', caption: '核苷酸结构：由磷酸、五碳糖和含氮碱基三部分组成', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">核苷酸的结构</text><polygon points="340,120 400,150 400,210 340,240 280,210 280,150" fill="#d6eac4" stroke="#3f7d1e" stroke-width="3"/><text x="340" y="190" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">五碳糖</text><rect x="180" y="160" width="90" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="225" y="188" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">磷酸</text><rect x="430" y="70" width="90" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="475" y="98" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">含氮碱基</text><line x1="280" y1="180" x2="270" y2="182" stroke="#3f7d1e" stroke-width="3"/><line x1="340" y1="120" x2="475" y2="114" stroke="#3f7d1e" stroke-width="3"/><polygon points="475,114 460,108 460,120" fill="#3f7d1e"/></svg>' },
      { type: 'warn', label: '易错辨析', text: 'DNA 和 RNA 各有 4 种碱基，但两者共有的碱基是 A、G、C，特有不同：DNA 特有 T，RNA 特有 U。因此组成核酸的碱基共 5 种（A、G、C、T、U），而非 8 种。' },
      { type: 'heading', text: '三、DNA 与 RNA 的比较' },
      { type: 'paragraph', text: 'DNA 和 RNA 在化学组成、结构特点和分布上都存在差异，这些差异决定了它们不同的功能。可通过表格对比记忆。' },
      { type: 'table', headers: ['比较项目', 'DNA', 'RNA'], rows: [
        ['全称', '脱氧核糖核酸', '核糖核酸'],
        ['五碳糖', '脱氧核糖', '核糖'],
        ['碱基', 'A、G、C、T', 'A、G、C、U'],
        ['结构', '通常双链', '通常单链'],
        ['分布', '主要在细胞核', '主要在细胞质'],
        ['基本单位', '脱氧核糖核苷酸（4 种）', '核糖核苷酸（4 种）']
      ] },
      { type: 'svg', caption: 'DNA 多为双链、RNA 多为单链：碱基互补配对 A=T、G≡C', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">DNA 双链与 RNA 单链</text><rect x="120" y="90" width="200" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="220" y="117" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">DNA 链①</text><rect x="120" y="170" width="200" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="220" y="197" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">DNA 链②</text><line x1="220" y1="130" x2="220" y2="170" stroke="#3f7d1e" stroke-width="2" stroke-dasharray="4"/><text x="240" y="155" font-size="14" text-anchor="middle" fill="#5aa832" font-family="sans-serif">A=T</text><rect x="440" y="130" width="160" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="520" y="157" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">RNA 单链</text></svg>' },
      { type: 'tip', label: '高频考点', text: '高考常考「核酸与遗传物质」判断：细胞生物（原核、真核）均含 DNA 和 RNA，但遗传物质是 DNA；病毒只含一种核酸，含 DNA 的病毒遗传物质为 DNA，含 RNA 的病毒遗传物质为 RNA。' },
      { type: 'heading', text: '四、核苷酸的种类与核酸的分布' },
      { type: 'paragraph', text: 'DNA 的基本单位是 4 种脱氧核糖核苷酸，RNA 的基本单位是 4 种核糖核苷酸，所以核酸的基本组成单位共有 8 种核苷酸。观察核酸在细胞中的分布可用甲基绿和吡罗红混合染色剂。' },
      { type: 'list', items: [
        '甲基绿使 DNA 呈现绿色，吡罗红使 RNA 呈现红色。',
        '染色结果显示 DNA 主要分布在细胞核，RNA 主要分布在细胞质。',
        '线粒体、叶绿体中也含有少量 DNA。'
      ] },
      { type: 'svg', caption: '核酸基本单位共 8 种：DNA 的 4 种脱氧核苷酸 + RNA 的 4 种核糖核苷酸', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">核苷酸共 8 种</text><rect x="60" y="90" width="240" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="121" font-size="17" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">4 种脱氧核糖核苷酸</text><rect x="380" y="90" width="240" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="121" font-size="17" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">4 种核糖核苷酸</text><line x1="180" y1="140" x2="340" y2="190" stroke="#3f7d1e" stroke-width="3"/><line x1="500" y1="140" x2="340" y2="190" stroke="#3f7d1e" stroke-width="3"/><polygon points="340,190 330,176 350,176" fill="#3f7d1e"/><rect x="270" y="200" width="140" height="48" rx="10" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="230" font-size="17" text-anchor="middle" fill="#ffffff" font-family="sans-serif">共 8 种</text></svg>' },
      { type: 'example', label: '典型例题', text: '某病毒由核酸和蛋白质组成，将其核酸彻底水解，最多可得 6 种产物（磷酸、五碳糖、A、G、C、U 或 T 等碱基）。若水解产物含 U 无 T，则该病毒为 RNA 病毒，遗传物质是 RNA。' },
      { type: 'tip', label: '高频考点', text: '核酸彻底水解产物是磷酸、五碳糖和含氮碱基；而初步水解产物是核苷酸。注意「初步水解」与「彻底水解」的不同：前者得到核苷酸，后者得到小分子成分。' },
      { type: 'paragraph', text: '总结：核酸是遗传信息的携带者，DNA 是主要的遗传物质。学习时要抓住「元素—基本单位—链—空间结构—功能」这条主线，把 DNA 与 RNA 的差异对比清楚。' }
    ],
    exercises: [
      { type: 'choice', question: '下列有关核酸的叙述，正确的是（ ）', options: ['核酸的基本组成单位是氨基酸', '所有生物的遗传物质都是 DNA', '核酸是遗传信息的携带者', 'RNA 主要分布在细胞核中'], answer: '核酸是遗传信息的携带者', explanation: '核酸的基本组成单位是核苷酸而非氨基酸；细胞生物遗传物质是 DNA，但少数病毒遗传物质是 RNA，故并非所有生物都以 DNA 为遗传物质；核酸是遗传信息的携带者，这一表述正确；RNA 主要分布在细胞质而非细胞核，DNA 才主要分布在细胞核。' },
      { type: 'choice', question: '组成 DNA 和 RNA 的碱基共有几种？', options: ['4 种', '5 种', '6 种', '8 种'], answer: '5 种', explanation: 'DNA 的碱基为 A、G、C、T 四种，RNA 的碱基为 A、G、C、U 四种。两者共有的碱基是 A、G、C，DNA 特有 T，RNA 特有 U，因此构成核酸的碱基共有 A、G、C、T、U 五种，而不是八种。' },
      { type: 'choice', question: '下列物质中，HIV 病毒（RNA 病毒）不具有的是（ ）', options: ['RNA', '蛋白质', '逆转录酶', 'DNA'], answer: 'DNA', explanation: 'HIV 是 RNA 病毒，其组成成分含有 RNA 和蛋白质，侵入宿主细胞后还会利用自身逆转录酶合成 DNA。但病毒自身结构中不含有 DNA，DNA 是进入宿主细胞后才合成的，故病毒本身不具有 DNA。' },
      { type: 'fill', question: '核酸的基本组成单位是______，一分子该单位由______、______和含氮碱基组成。', answer: '核苷酸；磷酸；五碳糖', explanation: '核酸水解得到的基本组成单位是核苷酸。一分子核苷酸由一分子磷酸、一分子五碳糖（脱氧核糖或核糖）和一分子含氮碱基连接而成，这是核酸结构的统一基础。' },
      { type: 'fill', question: '观察核酸在细胞中的分布时，用甲基绿和吡罗红混合染色剂，其中甲基绿使______呈现绿色。', answer: 'DNA', explanation: '甲基绿和吡罗红两种染色剂对 DNA 和 RNA 的亲和力不同：甲基绿使 DNA 呈现绿色，吡罗红使 RNA 呈现红色。利用这一特性可显示 DNA 和 RNA 在细胞中的分布部位。' }
    ]
  });
})();
