/* 化学 · 选择性必修3 · 有机化学基础 · 第三章 · 课时：醛 酮 */
(function () {
  var v = gzGetVolume('chemistry', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u9',
    name: '醛 酮',
    chapter: '选择性必修3 有机化学基础 · 第三章 烃的衍生物',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、醛的概念与官能团' },
      { type: 'paragraph', text: '醛是羰基（C=O）碳上连一个氢原子的有机物，官能团叫醛基 —CHO。醛基写在结构简式里通常放在链端，如乙醛 CH₃CHO、甲醛 HCHO。醛基既有碳氧双键可以加成，又有连在羰基上的氢可以被氧化，所以醛的性质很活泼。' },
      { type: 'list', items: ['甲醛 HCHO：最简单的醛，水溶液称福尔马林，防腐', '乙醛 CH₃CHO：由乙醇氧化制得，有刺激性气味', '苯甲醛 C₆H₅CHO：存在于杏仁，有香味', '醛基都含 —CHO，羰基碳上连一个 H'] },
      { type: 'keypoint', label: '重点·醛基结构', text: '<strong>醛的官能团是醛基 —CHO，特点是羰基碳上连有一个氢原子。</strong>正是这个氢使醛能被弱氧化剂（银氨溶液、新制 Cu(OH)₂）氧化，酮因为没有这个氢，就不能发生银镜等反应。所以"羰基碳上有没有 H"是醛和酮的分水岭。' },
      { type: 'heading', text: '二、乙醛的结构与物理性质' },
      { type: 'paragraph', text: '乙醛分子式 C₂H₄O，结构简式 CH₃CHO。它是无色、有刺激性气味的液体，易挥发、易燃烧，能与水、酒精互溶。乙醛是重要的化工中间体，由乙醇催化氧化得到。' },
      { type: 'heading', text: '三、乙醛的加成反应' },
      { type: 'paragraph', text: '乙醛的羰基 C=O 能发生加成反应，比如和氢气在催化剂、加热条件下加成，羰基里的双键打开、加上 H，生成乙醇：CH₃CHO + H₂ →（催化剂，加热）CH₃CH₂OH。这是把醛还原成醇的常用方法。' },
      { type: 'heading', text: '四、乙醛的氧化反应——银镜反应' },
      { type: 'paragraph', text: '乙醛能被弱氧化剂氧化。在银氨溶液中加热，乙醛把银氨络离子还原成金属银，附着在试管壁形成光亮的银镜，这就是银镜反应：CH₃CHO + 2[Ag(NH₃)₂]OH →（加热）CH₃COONH₄ + 2Ag↓ + 3NH₃ + H₂O。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙醛的银镜反应</text><rect x="40" y="70" width="300" height="110" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="190" y="100" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">CH₃CHO + 2[Ag(NH₃)₂]OH</text><text x="190" y="126" font-size="12" fill="#4a3724" text-anchor="middle">→（加热）</text><text x="190" y="152" font-size="12" fill="#4a3724" text-anchor="middle">CH₃COONH₄ + 2Ag↓ + 3NH₃ + H₂O</text><rect x="370" y="70" width="120" height="160" rx="10" fill="#cfd8dc" stroke="#b5651d" stroke-width="2"/><text x="430" y="155" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">银镜</text><line x1="340" y1="125" x2="368" y2="125" stroke="#d98e3a" stroke-width="3"/><polygon points="368,118 368,132 382,125" fill="#d98e3a"/><text x="520" y="120" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">试管壁生成</text><text x="520" y="146" font-size="13" fill="#4a3724" text-anchor="middle">光亮银镜</text><text x="340" y="270" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">醛基 —CHO 被氧化成羧酸铵，Ag⁺ 被还原成 Ag</text><text x="340" y="300" font-size="13" fill="#d98e3a" text-anchor="middle">银镜反应可检验醛基的存在</text></svg>', caption: '图1　乙醛在银氨溶液中加热发生银镜反应：醛基被氧化，Ag⁺ 被还原成单质银附着在试管壁形成银镜。' },
      { type: 'keypoint', label: '重点·银镜反应', text: '<strong>银镜反应是醛基 —CHO 的特征反应：醛基被氧化成羧酸铵根，Ag⁺ 被还原成单质银附着在器壁。</strong>反应需在碱性、水浴加热条件下进行，现象是试管内壁出现光亮银镜。它既能检验醛基，也在工业上用于制镜、保温瓶镀银。' },
      { type: 'heading', text: '五、乙醛与新制 Cu(OH)₂ 反应' },
      { type: 'paragraph', text: '乙醛还能和新制的氢氧化铜悬浊液在加热条件下反应。新制 Cu(OH)₂（碱性环境）把乙醛氧化，自身被还原成砖红色的氧化亚铜沉淀：CH₃CHO + 2Cu(OH)₂ →（加热）CH₃COOH + Cu₂O↓ + 2H₂O。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙醛与新制 Cu(OH)₂ 反应</text><rect x="40" y="70" width="320" height="110" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="200" y="100" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">CH₃CHO + 2Cu(OH)₂</text><text x="200" y="126" font-size="12" fill="#4a3724" text-anchor="middle">→（加热，碱性）</text><text x="200" y="152" font-size="12" fill="#4a3724" text-anchor="middle">CH₃COOH + Cu₂O↓ + 2H₂O</text><rect x="400" y="70" width="120" height="120" rx="10" fill="#a0522d"/><text x="460" y="135" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">砖红色</text><line x1="360" y1="125" x2="398" y2="125" stroke="#d98e3a" stroke-width="3"/><polygon points="398,118 398,132 412,125" fill="#d98e3a"/><text x="560" y="120" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">生成 Cu₂O</text><text x="560" y="146" font-size="13" fill="#4a3724" text-anchor="middle">砖红沉淀</text><text x="340" y="240" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">新制 Cu(OH)₂ 须碱性、现配现用，加热生成砖红色 Cu₂O</text><text x="340" y="275" font-size="13" fill="#d98e3a" text-anchor="middle">该反应也可检验醛基 —CHO</text></svg>', caption: '图2　乙醛与新制 Cu(OH)₂ 在碱性、加热条件下反应，生成砖红色的氧化亚铜 Cu₂O 沉淀。' },
      { type: 'warn', label: '易错·新制 Cu(OH)₂ 条件', text: '<strong>新制 Cu(OH)₂ 必须"新制、碱性、现配现用"：用 CuSO₄ 滴加到 NaOH 过量溶液中制得，不能久放。</strong>若不是新制或碱性不足，砖红色 Cu₂O 沉淀不明显甚至不出现。这和银镜反应一样，都是检验醛基的常用方法。' },
      { type: 'heading', text: '六、乙醛的进一步氧化与燃烧' },
      { type: 'paragraph', text: '乙醛更容易被强氧化剂（如 KMnO₄）氧化成乙酸 CH₃COOH；也能燃烧：2CH₃CHO + 5O₂ →（点燃）4CO₂ + 4H₂O。总之，醛基非常容易被氧化，是有机里比较"活泼"的官能团之一。' },
      { type: 'list', items: ['加成：CH₃CHO + H₂ →（催化剂，加热）CH₃CH₂OH', '银镜：被银氨溶液氧化，析出 Ag', '与新制 Cu(OH)₂ 加热得砖红 Cu₂O', '被 KMnO₄ 氧化成乙酸；可燃'] },
      { type: 'heading', text: '七、醛类的代表——甲醛' },
      { type: 'paragraph', text: '甲醛 HCHO 是最简单的醛，羰基碳上连两个氢。它的 35%~40% 水溶液叫福尔马林，能使蛋白质变性，用于防腐、标本保存。甲醛也用于制酚醛树脂等。甲醛同样能发生银镜反应和新制 Cu(OH)₂ 反应。' },
      { type: 'example', label: '例题·银镜反应识别', text: '下列物质中，能发生银镜反应的是？<br>A. 丙酮 CH₃COCH₃　B. 乙醛 CH₃CHO　C. 乙酸 CH₃COOH　D. 乙烷 C₂H₆<br><br><strong>解析</strong>：银镜反应是<strong>醛基 —CHO 的特征反应</strong>。乙醛含 —CHO，能发生银镜反应，选 B。丙酮含酮羰基 C=O 但羰基碳上无氢，乙酸、乙烷都不含醛基，都不能发生银镜反应。记住：有醛基才能银镜。' },
      { type: 'heading', text: '八、酮的概念与官能团' },
      { type: 'paragraph', text: '酮是羰基 C=O 两侧都连烃基的有机物，官能团叫酮羰基（羰基碳上不连氢）。最典型的是丙酮 CH₃COCH₃，它是无色、易挥发的液体，常用作溶剂。丙酮没有醛基，不能发生银镜反应，也不与新制 Cu(OH)₂ 反应。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">醛与酮的结构对比</text><rect x="40" y="70" width="290" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="185" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">醛：含 —CHO</text><text x="185" y="130" font-size="13" fill="#d98e3a" text-anchor="middle" font-weight="bold">CH₃—CHO（乙醛）</text><text x="185" y="160" font-size="12" fill="#4a3724" text-anchor="middle">羰基碳上连一个 H</text><text x="185" y="190" font-size="12" fill="#4a3724" text-anchor="middle">能银镜、能还原成醇</text><text x="185" y="216" font-size="12" fill="#4a3724" text-anchor="middle">可被弱氧化剂氧化</text><rect x="360" y="70" width="290" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="505" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">酮：含 C=O 酮羰基</text><text x="505" y="130" font-size="13" fill="#d98e3a" text-anchor="middle" font-weight="bold">CH₃—CO—CH₃（丙酮）</text><text x="505" y="160" font-size="12" fill="#4a3724" text-anchor="middle">羰基碳两侧都连烃基</text><text x="505" y="190" font-size="12" fill="#4a3724" text-anchor="middle">不能银镜反应</text><text x="505" y="216" font-size="12" fill="#4a3724" text-anchor="middle">不与新制 Cu(OH)₂ 反应</text><text x="340" y="270" font-size="13" fill="#d98e3a" text-anchor="middle">差别在羰基碳是否连 H：连 H 为醛，不连 H 为酮</text></svg>', caption: '图3　醛含 —CHO（羰基碳上连 H），酮含 C=O（羰基碳两侧连烃基）。这是二者能否发生银镜反应的关键。' },
      { type: 'table', headers: ['对比项', '醛（如乙醛）', '酮（如丙酮）'], rows: [['官能团', '醛基 —CHO', '酮羰基 C=O'], ['羰基碳上', '连一个 H', '不连 H，两侧连烃基'], ['银镜反应', '能', '不能'], ['与新制 Cu(OH)₂', '砖红沉淀', '不反应'], ['还原产物', '醇', '醇（酮也可被还原）']] },
      { type: 'heading', text: '九、醛酮在有机合成中的桥梁作用' },
      { type: 'paragraph', text: '醛基处在"中间价态"，既能氧化又能还原，是连接醇和羧酸的桥梁：把醛氧化得到羧酸（—CHO → —COOH），把醛还原得到醇（—CHO → —CH₂OH）。酮虽不能被弱氧化剂氧化，但也能加氢还原成仲醇。因此醛、酮在有机合成中是十分重要的"中转站"。' },
      { type: 'tip', label: '提示·记忆口诀', text: '记忆口诀："醛基中间站，氧化成酸、还原成醇"。做题遇到"由醇到酸"的转化，中间几乎都要经过醛这一步；而判断某物质能不能银镜，先找有没有 —CHO。' },
      { type: 'warn', label: '易错·酮不能银镜', text: '<strong>酮虽然有 C=O 双键、能加氢还原成醇，但不能被银氨溶液、新制 Cu(OH)₂ 等弱氧化剂氧化。</strong>因为只有醛基碳上的那个氢容易被氧化。所以"含羰基就能银镜"是错的——必须是醛基 —CHO。丙酮再怎么处理也不会银镜。' }
    ],
    exercises: [
      { type: 'choice', question: '下列物质中，能发生银镜反应的是？', options: ['丙酮 CH₃COCH₃', '乙醛 CH₃CHO', '乙酸 CH₃COOH', '乙烷 C₂H₆'], answer: '乙醛 CH₃CHO', explanation: '银镜反应是醛基 —CHO 的特征反应，只有含醛基的物质才能发生。乙醛 CH₃CHO 含 —CHO，能发生银镜反应。丙酮含酮羰基但不含醛基的氢，乙酸含羧基、乙烷不含氧官能团，都不能银镜。因此选乙醛 CH₃CHO。' },
      { type: 'choice', question: '乙醛与新制 Cu(OH)₂ 在加热条件下反应，生成的砖红色沉淀是？', options: ['Ag', 'Cu', 'Cu₂O', 'Fe(OH)₃'], answer: 'Cu₂O', explanation: '乙醛被新制 Cu(OH)₂（碱性悬浊液）氧化，Cu(OH)₂ 中的 Cu²⁺ 被还原成 +1 价的氧化亚铜 Cu₂O，呈砖红色沉淀。反应式为 CH₃CHO + 2Cu(OH)₂ →（加热）CH₃COOH + Cu₂O↓ + 2H₂O。银是银镜反应的产物，铜单质和 Fe(OH)₃ 与此无关。所以选 Cu₂O。' },
      { type: 'choice', question: '下列关于醛基 —CHO 的说法，正确的是？', options: ['酮也能发生银镜反应', '醛基可被还原成羧基', '醛基可氧化成羧基也可还原成醇基', '丙酮含有醛基 —CHO'], answer: '醛基可氧化成羧基也可还原成醇基', explanation: '醛基处在中间价态：被氧化时 —CHO 变成 —COOH（羧基），被还原（如加 H₂）时 —CHO 变成 —CH₂OH（醇基），所以"可氧化成羧基也可还原成醇基"正确。酮不含醛基、不能银镜；醛基氧化才成羧基，还原成醇基，B 说反了；丙酮含酮羰基而非醛基。故选 C。' },
      { type: 'fill', question: '乙醛与氢气加成的产物（结构简式）是___，该反应把醛还原成了醇。', answer: 'CH₃CH₂OH', explanation: '乙醛的羰基 C=O 能与 H₂ 发生加成（还原）反应：CH₃CHO + H₂ →（催化剂，加热）CH₃CH₂OH。羰基双键打开加上氢，醛基 —CHO 变成醇基 —CH₂OH，产物是乙醇 CH₃CH₂OH。这是把醛还原为醇的典型方法。' },
      { type: 'fill', question: '醛的官能团名称与结构简式分别是：___。', answer: '醛基|—CHO', explanation: '醛的官能团叫做醛基，结构简式写作 —CHO（也可写成 —C(=O)H 的简化形式 —CHO）。其特征是羰基碳上连有一个氢原子，正是这个氢决定了醛能被弱氧化剂氧化、能发生银镜反应。填空答"醛基"与"—CHO"即可。' }
    ]
  });
})();
