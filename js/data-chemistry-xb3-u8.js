/* 化学 · 选择性必修3 · 有机化学基础 · 第三章 · 课时：醇 酚 */
(function () {
  var v = gzGetVolume('chemistry', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u8',
    name: '醇 酚',
    chapter: '选择性必修3 有机化学基础 · 第三章 烃的衍生物',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、醇的概念与分类' },
      { type: 'paragraph', text: '醇是羟基 —OH 直接连在链烃基（或脂环烃基）上形成的有机物。根据羟基数目，醇可分为一元醇（一个 —OH，如乙醇）、二元醇（两个 —OH，如乙二醇）、三元醇（三个 —OH，如丙三醇）。根据羟基所连碳的种类还分伯、仲、叔醇。' },
      { type: 'list', items: ['甲醇 CH₃OH：有毒，饮后失明甚至致死，工业用途', '乙醇 C₂H₅OH：酒精，消毒、燃料、饮品', '乙二醇 HOCH₂CH₂OH：防冻液主要成分', '丙三醇（甘油）HOCH₂CH(OH)CH₂OH：吸湿、护肤'] },
      { type: 'table', headers: ['名称', '结构简式', '羟基数', '常见用途'], rows: [['甲醇', 'CH₃OH', '1', '工业溶剂（有毒）'], ['乙醇', 'C₂H₅OH', '1', '消毒、燃料、饮料'], ['乙二醇', 'HOCH₂CH₂OH', '2', '汽车防冻液'], ['丙三醇', 'HOCH₂CH(OH)CH₂OH', '3', '护肤、吸湿']] },
      { type: 'heading', text: '二、乙醇的结构与物理性质' },
      { type: 'paragraph', text: '乙醇结构简式 CH₃CH₂OH，可看成乙烷分子里一个氢被 —OH 取代。它是无色透明、有特殊香味的液体，易挥发，能与水以任意比例互溶，是常用溶剂。医疗上 75% 的酒精用于消毒。' },
      { type: 'keypoint', label: '重点·醇的官能团', text: '<strong>醇的官能团是羟基 —OH，且 —OH 连在链烃基（或脂环烃基）上。</strong>注意和酚区分：酚的 —OH 是直接连在苯环上。乙醇是最典型的一元醇，结构里的 —CH₂OH 决定了它的主要反应。' },
      { type: 'heading', text: '三、乙醇的化学性质' },
      { type: 'paragraph', text: '乙醇的 —OH 上的氢比较活泼，能和活泼金属钠反应放出氢气：2CH₃CH₂OH + 2Na → 2CH₃CH₂ONa + H₂↑。这说明醇羟基上的 H 有活性，但反应比水与钠缓和得多。' },
      { type: 'list', items: ['与 Na 反应：2CH₃CH₂OH + 2Na → 2CH₃CH₂ONa + H₂↑（放氢气）', '燃烧：C₂H₅OH + 3O₂ →（点燃）2CO₂ + 3H₂O', '催化氧化：2CH₃CH₂OH + O₂ →（Cu/Ag，加热）2CH₃CHO + 2H₂O', '消去：C₂H₅OH →（浓硫酸，170℃）CH₂=CH₂↑ + H₂O', '分子间脱水：2C₂H₅OH →（浓硫酸，140℃）C₂H₅OC₂H₅ + H₂O'] },
      { type: 'paragraph', text: '在铜或银催化并加热时，乙醇脱去两个氢（一个来自 —OH、一个来自邻碳）变成乙醛，这是工业制乙醛的方法。乙醇也能被酸性 KMnO₄、K₂Cr₂O₇ 等强氧化剂氧化，比如酒驾检测就是利用橙色 K₂Cr₂O₇ 被还原成绿色 Cr³⁺。' },
      { type: 'warn', label: '易错·条件决定产物', text: '<strong>乙醇的消去和催化氧化对条件极其敏感：170℃ 浓硫酸得乙烯（消去）；140℃ 浓硫酸得乙醚（分子间脱水）；Cu/Ag 催化加热得乙醛（氧化）。</strong>温度差一点，产物就完全不同。另外乙醇被 KMnO₄ 氧化颜色由橙变绿，可用于检验乙醇存在。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙醇的催化氧化：脱氢成乙醛</text><rect x="40" y="80" width="200" height="70" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="140" y="112" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">2CH₃CH₂OH</text><text x="140" y="138" font-size="12" fill="#4a3724" text-anchor="middle">乙醇</text><line x1="240" y1="115" x2="320" y2="115" stroke="#d98e3a" stroke-width="3"/><polygon points="320,108 320,122 334,115" fill="#d98e3a"/><rect x="340" y="80" width="300" height="90" rx="8" fill="#d98e3a"/><text x="490" y="108" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">2CH₃CHO + 2H₂O</text><text x="490" y="134" font-size="12" fill="#ffffff" text-anchor="middle">条件：Cu/Ag，加热</text><text x="340" y="210" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">去氢（−2H）：—CH₂OH → —CHO</text><text x="490" y="240" font-size="13" fill="#4a3724" text-anchor="middle">断一个 C—H 和一个 O—H，相邻碳氧间成 C=O</text><text x="340" y="275" font-size="13" fill="#d98e3a" text-anchor="middle">醇氧化成醛，铜丝由黑变红（CuO→Cu）循环催化</text></svg>', caption: '图1　乙醇在 Cu/Ag 催化、加热下脱去两个氢，—CH₂OH 变成 —CHO，生成乙醛和水。' },
      { type: 'heading', text: '四、醇的沸点规律' },
      { type: 'paragraph', text: '常温下，含相同碳原子数的醇比烷烃沸点高很多。原因是醇分子之间能形成氢键（—OH 上的 H 和另一分子的 O 相互吸引），要把液体变成气体，除克服范德华力外还要破坏氢键，所以沸点升高。含碳原子数越多、羟基越多，沸点一般越高。' },
      { type: 'tip', label: '提示·氢键的影响', text: '氢键不仅让醇的沸点升高，也让低级醇（甲醇、乙醇、丙三醇）能与水任意互溶——因为醇和水之间也能形成氢键。但随碳链变长，烃基的"怕水"作用增强，溶解性又下降。' },
      { type: 'heading', text: '五、酚的概念' },
      { type: 'paragraph', text: '酚是羟基 —OH 直接连在苯环上的有机物。最常见的是苯酚 C₆H₅OH（也可写成 C₆H₅—OH），它是重要的化工原料。酚羟基和醇羟基虽然都写作 —OH，但因为连的基团不同，性质差别很大。' },
      { type: 'keypoint', label: '重点·酚的官能团', text: '<strong>酚的官能团是酚羟基，即 —OH 直接连在苯环上（结构特征 C₆H₅—OH）。</strong>这一点和醇（—OH 连链烃基）是本质区别，也带来酸性、显色等醇没有的性质。判断"醇还是酚"，只看 —OH 隔壁是不是苯环。' },
      { type: 'heading', text: '六、苯酚的物理性质' },
      { type: 'paragraph', text: '苯酚俗称石炭酸，常温下是略带粉红色的晶体，有特殊气味。它在常温下微溶于水，但当温度高于 65℃ 时能与水任意比例互溶；易溶于酒精等有机溶剂。苯酚有毒，有强腐蚀性，沾到皮肤可用酒精擦洗。' },
      { type: 'heading', text: '七、苯酚的酸性' },
      { type: 'paragraph', text: '苯酚在水中能微弱电离出 H⁺：C₆H₅OH ⇌ C₆H₅O⁻ + H⁺，所以它有弱酸性。它能和 NaOH 反应生成苯酚钠 C₆H₅ONa；也能和 Na₂CO₃ 反应生成 NaHCO₃ 和 C₆H₅ONa。但苯酚酸性比碳酸还弱，所以不能和 NaHCO₃ 反应放出 CO₂（这一点和羧酸不同）。' },
      { type: 'warn', label: '易错·苯酚酸性比碳酸弱', text: '<strong>苯酚有弱酸性，但酸性比碳酸弱：它与 Na₂CO₃ 能反应（生成 NaHCO₃），却不能与 NaHCO₃ 反应放出 CO₂。</strong>如果题目说"苯酚 + NaHCO₃ → 盐水 + CO₂↑"，这是错的。酸性由强到弱大致为：羧酸 > 碳酸 > 苯酚 > 水 > 醇。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">苯酚的弱酸性与显色反应</text><rect x="40" y="70" width="290" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="185" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">弱酸性</text><text x="185" y="128" font-size="12" fill="#4a3724" text-anchor="middle">C₆H₅OH ⇌ C₆H₅O⁻ + H⁺</text><text x="185" y="156" font-size="12" fill="#4a3724" text-anchor="middle">+ NaOH → C₆H₅ONa</text><text x="185" y="184" font-size="12" fill="#4a3724" text-anchor="middle">不与 NaHCO₃ 放 CO₂</text><text x="185" y="212" font-size="12" fill="#d98e3a" text-anchor="middle">酸性比碳酸弱</text><rect x="360" y="70" width="280" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">显色反应</text><rect x="430" y="120" width="140" height="80" rx="8" fill="#9b59b6"/><text x="500" y="166" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">紫色</text><text x="500" y="218" font-size="13" fill="#4a3724" text-anchor="middle">+ FeCl₃ 溶液显紫色</text><text x="340" y="270" font-size="13" fill="#d98e3a" text-anchor="middle">显色反应可检验酚羟基的存在</text></svg>', caption: '图2　苯酚有弱酸性（比碳酸弱，不与 NaHCO₃ 放 CO₂）；与 FeCl₃ 溶液作用显紫色，可检验酚羟基。' },
      { type: 'heading', text: '八、苯环上的取代反应' },
      { type: 'paragraph', text: '受 —OH 影响，苯酚苯环上邻、对位变得很活泼。向苯酚溶液中滴加浓溴水，不需要催化剂就能生成白色的三溴苯酚沉淀：C₆H₅OH + 3Br₂ → 三溴苯酚↓ + 3HBr。这个反应灵敏，也常用于检验苯酚。' },
      { type: 'example', label: '例题·苯酚与溴水', text: '向苯酚溶液中加入浓溴水，可观察到的现象是？<br>A. 无变化<br>B. 生成白色沉淀<br>C. 生成黄色沉淀<br>D. 溶液变红<br><br><strong>解析</strong>：苯酚的 —OH 使苯环邻对位活化，与<strong>浓溴水反应不需催化剂</strong>，在邻、对位引入三个溴原子，生成三溴苯酚白色沉淀。所以该现象是产生白色沉淀，选 B。注意这不同于苯和液溴在 FeBr₃ 催化下的取代，苯酚更容易。' },
      { type: 'table', headers: ['性质', '醇（以乙醇为例）', '酚（以苯酚为例）'], rows: [['—OH 所连基团', '链烃基', '苯环'], ['酸性', '无', '有弱酸性'], ['与 Na 反应', '放 H₂', '放 H₂'], ['与 FeCl₃', '不显色', '显紫色'], ['与浓溴水', '不反应', '白色沉淀（不需催化剂）']] },
      { type: 'heading', text: '九、结构对性质的影响' },
      { type: 'paragraph', text: '有机物里"结构决定性质"体现得非常清楚。苯酚中，酚羟基受苯环影响，O—H 键更易断裂，所以能电离出 H⁺ 显酸性；同时苯环受 —OH 供电子影响，邻对位电子云密度增大，更容易发生亲电取代。反过来，醇的 —OH 连在链烃基上，烃基对氧的拉电子作用弱，就不显酸性。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">醇与酚：羟基所连基团不同</text><rect x="40" y="70" width="290" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="185" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">醇：—OH 连在烃基上</text><text x="185" y="130" font-size="13" fill="#d98e3a" text-anchor="middle" font-weight="bold">CH₃CH₂—OH</text><text x="185" y="160" font-size="12" fill="#4a3724" text-anchor="middle">如乙醇 C₂H₅OH</text><text x="185" y="190" font-size="12" fill="#4a3724" text-anchor="middle">与 Na 反应放 H₂</text><text x="185" y="216" font-size="12" fill="#4a3724" text-anchor="middle">不与 FeCl₃ 显色</text><rect x="360" y="70" width="290" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="505" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">酚：—OH 直接连苯环</text><text x="505" y="130" font-size="13" fill="#d98e3a" text-anchor="middle" font-weight="bold">C₆H₅—OH</text><text x="505" y="160" font-size="12" fill="#4a3724" text-anchor="middle">如苯酚 C₆H₅OH</text><text x="505" y="190" font-size="12" fill="#4a3724" text-anchor="middle">有弱酸性、显紫色</text><text x="505" y="216" font-size="12" fill="#4a3724" text-anchor="middle">与浓溴水生成白色沉淀</text><text x="340" y="270" font-size="13" fill="#d98e3a" text-anchor="middle">差别只在 —OH 连接的基团：烃基 or 苯环</text></svg>', caption: '图3　醇与酚的官能团都是 —OH，但醇的 —OH 连在链烃基上、酚的 —OH 直接连在苯环上，性质因此不同。' },
      { type: 'tip', label: '提示·判断窍门', text: '学醇和酚，牢记"位置决定身份"：同一个 —OH，连在链烃基上是醇（中性、和钠放氢），连在苯环上是酚（弱酸、显紫色、遇浓溴水出白色沉淀）。做题先看 —OH 的邻居是谁，性质就清楚了。' }
    ],
    exercises: [
      { type: 'choice', question: '下列物质中，属于酚的是？', options: ['CH₃CH₂OH', 'C₆H₅OH', 'CH₃COOH', 'CH₃CH₂CH₂OH'], answer: 'C₆H₅OH', explanation: '酚的定义是羟基 —OH 直接连在苯环上的有机物。C₆H₅OH 即苯酚，—OH 连在苯环上，属于酚。CH₃CH₂OH 和 CH₃CH₂CH₂OH 的 —OH 连在链烃基上，是醇；CH₃COOH 含羧基 —COOH，是羧酸。因此选 C₆H₅OH。' },
      { type: 'choice', question: '苯酚与下列哪种物质反应能放出 CO₂？', options: ['NaOH', 'Na₂CO₃', 'NaHCO₃', '都不反应'], answer: '都不反应', explanation: '苯酚虽有弱酸性，但酸性比碳酸还弱。它只能和比它强的碱（如 NaOH、Na₂CO₃）反应，却不能和更弱的酸式盐 NaHCO₃ 反应放出 CO₂（因为酸性：碳酸 > 苯酚）。所以苯酚与 NaOH、Na₂CO₃ 反应但都不放 CO₂，与 NaHCO₃ 不反应，选"都不反应"。' },
      { type: 'choice', question: '乙醇在浓硫酸、170℃ 条件下主要发生的反应是？', options: ['水解', '消去成乙烯', '加成', '取代'], answer: '消去成乙烯', explanation: '乙醇在浓硫酸、170℃ 条件下发生消去反应，脱去一分子水生成乙烯：C₂H₅OH →（浓硫酸，170℃）CH₂=CH₂↑ + H₂O。这是实验室制乙烯的方法。140℃ 时主要发生分子间脱水成乙醚，水解和加成都不是该条件下的主要反应。所以选消去成乙烯。' },
      { type: 'fill', question: '苯酚与 FeCl₃ 溶液反应显___色，该显色反应可用来检验酚羟基。', answer: '紫', explanation: '苯酚等含酚羟基的物质遇到三氯化铁 FeCl₃ 溶液会显出特征的紫色，这是酚羟基的特征显色反应，常用于检验酚类物质的存在。注意是"紫色"而非红色或蓝色，记住这个特征现象即可用于鉴别。' },
      { type: 'fill', question: '写出乙醇与金属钠反应的化学方程式（写出乙醇钠和一种气体产物）：___。', answer: '2CH₃CH₂OH + 2Na → 2CH₃CH₂ONa + H₂↑', explanation: '乙醇分子里的羟基氢能被活泼金属钠置换，生成乙醇钠并放出氢气：2CH₃CH₂OH + 2Na → 2CH₃CH₂ONa + H₂↑。反应比水与钠缓和，试管壁发热并有气泡（H₂）。该反应证明醇羟基上的氢有活性，但不如水活泼。' }
    ]
  });
})();
