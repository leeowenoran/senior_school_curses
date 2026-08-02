/* 化学 · 高三复习 · 基本概念与原理 · 专题三 · 课时：氧化还原反应基础 */
(function () {
  var v = gzGetVolume('chemistry', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u7',
    name: '氧化还原反应基础',
    chapter: '基本概念与原理 · 专题三 离子反应与氧化还原',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是氧化还原反应' },
      { type: 'paragraph', text: '初中我们学过，有氧参加的反应叫氧化反应。但高中给氧化还原反应下了更本质的定义：<strong>有元素化合价升降的反应</strong>就是氧化还原反应。有没有氧参加不重要，关键看化合价变没变。化合价变了，就一定有电子的转移。' },
      { type: 'keypoint', label: '核心口诀·升失氧化还原剂，降得还原氧化剂', text: '这八个字是氧化还原的总纲：化合价升高 → 失电子 → 被氧化 → 作还原剂（该物质有还原性）；化合价降低 → 得电子 → 被还原 → 作氧化剂（该物质有氧化性）。前后半句一一对应，记熟它，概念题就不会乱。' },
      { type: 'list', items: ['升失氧还：化合价升高、失电子、被氧化、作还原剂（有还原性）', '降得还原：化合价降低、得电子、被还原、作氧化剂（有氧化性）', '记忆技巧：前半句“升失氧还”和后半句“降得还原”一一对应', '注意“被氧化”的是还原剂，别把“氧化”和“氧化剂”混为一谈'] },
      { type: 'heading', text: '二、化合价升降与电子得失' },
      { type: 'paragraph', text: '化合价升高，意味着这种元素的原子<strong>失去</strong>了电子（或电子对偏离），它所在的物质被氧化，在反应中充当还原剂。化合价降低，意味着得到电子（或电子对偏向），该物质被还原，充当氧化剂。' },
      { type: 'paragraph', text: '打个比方：还原剂像个<strong>“送电子的人”</strong>，把电子送给别人，自己被氧化；氧化剂像个<strong>“收电子的人”</strong>，收下电子，自己被还原。电子从还原剂流向氧化剂。' },
      { type: 'list', items: ['化合价升高 ↔ 失电子 ↔ 被氧化 ↔ 还原剂（有还原性）', '化合价降低 ↔ 得电子 ↔ 被还原 ↔ 氧化剂（有氧化性）', '电子总数守恒：失电子总数 = 得电子总数'] },
      { type: 'tip', label: '提示·剂/性/化/还四词关系', text: '很多同学分不清“氧化性、氧化剂、被氧化、氧化产物”这四个词。<strong>氧化性</strong>是一种能力（得电子的能力）；<strong>氧化剂</strong>是具有这种能力的物质，反应中得电子；<strong>被氧化</strong>指某种物质失去电子的变化过程；<strong>氧化产物</strong>是被氧化的物质变成的生成物。一句话：剂是物质，性是能力，化是过程，产物是生成物。' },
      { type: 'example', label: '例题·用具体反应说明', text: '以 Zn + 2HCl → ZnCl₂ + H₂↑ 为例。<br>Zn 化合价从 0 升到 +2，失去 2 个电子，被氧化，Zn 是还原剂，具有还原性。<br>HCl 中 H 化合价从 +1 降到 0，得到电子，被还原，HCl 是氧化剂，具有氧化性。<br>电子从 Zn 流向 H⁺，失去总数 = 得到总数 = 2e⁻。这是典型的“升失氧还、降得还原”。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">升降得失氧还口诀</text><rect x="40" y="70" width="280" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="105" font-size="16" fill="#b5651d" text-anchor="middle" font-weight="bold">化合价升高</text><text x="180" y="135" font-size="13" fill="#4a3724" text-anchor="middle">失电子 → 被氧化</text><text x="180" y="155" font-size="13" fill="#4a3724" text-anchor="middle">作还原剂（有还原性）</text><polygon points="322,115 340,120 322,125" fill="#b5651d"/><rect x="360" y="70" width="280" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="105" font-size="16" fill="#b5651d" text-anchor="middle" font-weight="bold">化合价降低</text><text x="500" y="135" font-size="13" fill="#4a3724" text-anchor="middle">得电子 → 被还原</text><text x="500" y="155" font-size="13" fill="#4a3724" text-anchor="middle">作氧化剂（有氧化性）</text><text x="340" y="210" font-size="14" fill="#d98e3a" text-anchor="middle" font-weight="bold">升失氧化还原剂</text><text x="340" y="240" font-size="14" fill="#d98e3a" text-anchor="middle" font-weight="bold">降得还原氧化剂</text><text x="340" y="275" font-size="12" fill="#4a3724" text-anchor="middle">前半句讲元素变化，后半句讲物质角色</text></svg>', caption: '图1　升失氧还、降得还原，前后半句一一对应。' },
      { type: 'heading', text: '三、双线桥法：表示电子得失' },
      { type: 'paragraph', text: '双线桥法用<strong>两条线</strong>分别表示反应中不同元素电子的得失。每条线从反应物中的某元素指向生成物中的同种元素，并在线上标明“失去 a×b e⁻”或“得到 a×b e⁻”。' },
      { type: 'example', label: '例题·双线桥示例', text: '以 2KClO₃ →（加热）2KCl + 3O₂↑ 为例（配平后）。<br>第一条桥：Cl 从 +5 降到 −1，每个 Cl 得 6e⁻，2 个 Cl 共<strong>得到 2×6 e⁻</strong>，从 KClO₃ 的 Cl 指向 KCl 的 Cl，标“得到 12e⁻”。<br>第二条桥：O 从 −2 升到 0，每个 O 失 2e⁻，6 个 O 共<strong>失去 6×2 e⁻</strong>，从 KClO₃ 的 O 指向 O₂，标“失去 12e⁻”。得失相等，配平正确。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">双线桥法示例</text><text x="340" y="90" font-size="16" fill="#4a3724" text-anchor="middle" font-weight="bold">Zn + 2HCl → ZnCl₂ + H₂↑</text><rect x="60" y="110" width="130" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="125" y="140" font-size="13" fill="#4a3724" text-anchor="middle">Zn → Zn²⁺</text><text x="125" y="195" font-size="12" fill="#b5651d" text-anchor="middle" font-weight="bold">失去 2e⁻（氧化）</text><line x1="125" y1="160" x2="125" y2="178" stroke="#b5651d" stroke-width="2"/><polygon points="119,178 131,178 125,190" fill="#b5651d"/><rect x="490" y="110" width="130" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="555" y="140" font-size="13" fill="#4a3724" text-anchor="middle">H⁺ → H₂</text><text x="555" y="195" font-size="12" fill="#b5651d" text-anchor="middle" font-weight="bold">得到 2×1e⁻（还原）</text><line x1="555" y1="160" x2="555" y2="178" stroke="#b5651d" stroke-width="2"/><polygon points="549,178 561,178 555,190" fill="#b5651d"/><text x="340" y="240" font-size="12" fill="#4a3724" text-anchor="middle">双线桥：从反应物指向生成物，分别标“失去/得到 电子数”</text><text x="340" y="270" font-size="12" fill="#4a3724" text-anchor="middle">两条线各自跨在一种元素的来与去之间，不跨反应号</text></svg>', caption: '图2　双线桥从反应物指向生成物，分别标失去或得到电子数。' },
      { type: 'heading', text: '四、单线桥法：表示电子转移方向' },
      { type: 'paragraph', text: '单线桥法用<strong>一条线</strong>表示电子从哪种元素转移到哪种元素。箭头从<strong>失电子的元素</strong>指向<strong>得电子的元素</strong>，线上只标电子转移的总数，不写“得到”或“失去”。' },
      { type: 'example', label: '例题·单线桥示例', text: '仍以 Zn + 2HCl → ZnCl₂ + H₂↑ 为例。<br>画一条箭头从 Zn（失电子）指向 H⁺（得电子），线上写<strong>2e⁻</strong>。<br>注意：单线桥不标“得/失”，只标总数；箭头必须跨越反应方程式，体现电子的流动方向。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">单线桥法示例</text><text x="340" y="90" font-size="16" fill="#4a3724" text-anchor="middle" font-weight="bold">Zn + 2HCl → ZnCl₂ + H₂↑</text><text x="180" y="145" font-size="14" fill="#b5651d" text-anchor="middle" font-weight="bold">Zn（失电子）</text><text x="500" y="145" font-size="14" fill="#b5651d" text-anchor="middle" font-weight="bold">H⁺（得电子）</text><line x1="220" y1="140" x2="460" y2="140" stroke="#b5651d" stroke-width="3"/><polygon points="460,133 478,140 460,147" fill="#b5651d"/><text x="340" y="185" font-size="13" fill="#4a3724" text-anchor="middle">单线桥：从失电子元素指向得电子元素</text><text x="340" y="215" font-size="13" fill="#d98e3a" text-anchor="middle" font-weight="bold">线上只标电子转移总数：2e⁻</text><text x="340" y="248" font-size="12" fill="#4a3724" text-anchor="middle">单线桥不标“得/失”，只标总电子数，且跨越反应箭头</text></svg>', caption: '图3　单线桥从失电子元素指向得电子元素，只标总数。' },
      { type: 'warn', label: '易错·双线桥与单线桥区别', text: '双线桥和单子桥最容易混：<strong>双线桥从反应物指向生成物</strong>，每条桥对应一种元素，要写“得到/失去”；<strong>单线桥从失电子元素指向得电子元素</strong>，只有一条，只写电子总数不写“得/失”。另外，双线桥的箭头不跨过反应号，单线桥的箭头必须跨过反应号。画错方向或标错内容都会丢分。' },
      { type: 'table', headers: ['项目', '双线桥法', '单线桥法'], rows: [['箭头起点终点', '从反应物指向生成物（同种元素）', '从失电子元素指向得电子元素'], ['线数', '两条或以上', '一条'], ['标注内容', '得到/失去 a×b e⁻', '只标电子转移总数'], ['是否跨反应号', '不跨', '跨过']] },
      { type: 'paragraph', text: '氧化还原反应是高中化学的枢纽，后面电化学、金属腐蚀都靠它。把“升失氧化还原剂、降得还原氧化剂”背熟，再分清双线桥和单线桥的画法，这一类题基本不会出错。' }
    ],
    exercises: [
      { type: 'choice', question: '氧化还原反应中，化合价升高的物质', options: ['失电子，作氧化剂', '得电子，作还原剂', '失电子，作还原剂', '得电子，作氧化剂'], answer: '失电子，作还原剂', explanation: '在氧化还原反应中，某元素化合价升高，说明它失去了电子，该物质被氧化，在反应中作还原剂，具有还原性。口诀“升失氧化还原剂”正好对应：升高、失电子、被氧化、作还原剂。化合价降低的物质才得电子作氧化剂。' },
      { type: 'choice', question: '关于双线桥法的说法，正确的是？', options: ['箭头从失电子元素指向得电子元素', '只标电子转移总数，不标得失', '从反应物指向生成物，标明得到或失去电子数', '桥线跨越在反应方程式上方'], answer: '从反应物指向生成物，标明得到或失去电子数', explanation: '双线桥法是分别画出两条线，每条线从反应物中某元素指向生成物中同种元素，并标明“得到”或“失去”的电子数目。单线桥才是从失电子元素指向得电子元素且只标总数。所以正确的是双线桥从反应物指向生成物并标明得失电子数。' },
      { type: 'choice', question: '在反应 Zn + 2HCl → ZnCl₂ + H₂↑ 中，作氧化剂的是？', options: ['Zn', 'HCl', 'ZnCl₂', 'H₂'], answer: 'HCl', explanation: '该反应中 Zn 化合价从 0 升高到 +2，失去电子，作还原剂；HCl 中 H 元素化合价从 +1 降低到 0，得到电子，被还原，所以 HCl 作氧化剂。ZnCl₂和 H₂是生成物，分别属于氧化产物和还原产物，不是剂。' },
      { type: 'fill', question: '氧化还原反应口诀“升失氧化还原剂”中，“还”指的是该物质作___（填“还原剂”或“氧化剂”）。', answer: '还原剂', explanation: '口诀“升失氧化还原剂”逐字对应：升（化合价升高）、失（失电子）、氧（被氧化）、还（作还原剂）。注意“氧”指被氧化，“还”指作还原剂。所以句中的“还”表示该物质作还原剂，而它自身是被氧化的。' },
      { type: 'fill', question: '单线桥法中，箭头从___电子的元素指向___电子的元素，线上只标电子转移总数。', answer: '失|得', explanation: '单线桥法用一条箭头线表示电子转移方向：箭头从失去电子的元素出发，指向得到电子的元素，线上只标注电子转移的总数，不写“得到”或“失去”。它跨越反应方程式，直观体现电子从还原剂流向氧化剂。' }
    ]
  });
})();
