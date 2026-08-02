/* 化学 · 高三复习 · 基本概念与原理 · 专题三 · 课时：氧化性还原性强弱 */
(function () {
  var v = gzGetVolume('chemistry', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u8',
    name: '氧化性还原性强弱',
    chapter: '基本概念与原理 · 专题三 离子反应与氧化还原',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、氧化性还原性强弱的根本规律' },
      { type: 'paragraph', text: '判断一种物质氧化性或还原性的强弱，有一个最管用的规律，来自氧化还原反应本身：<strong>氧化剂的氧化性强于氧化产物，还原剂的还原性强于还原产物</strong>。记住这句话，绝大多数比较题都能做。' },
      { type: 'keypoint', label: '核心规律·剂比产物强', text: '氧化性：氧化剂 ＞ 氧化产物（反应中氧化性强的物质把对方氧化，自己变成氧化产物的对应还原态）。<br>还原性：还原剂 ＞ 还原产物（反应中还原性强的物质把对方还原，自己变成还原产物的对应氧化态）。<br>这两条是判断强弱的“总开关”，任何具体规律都由此推出。' },
      { type: 'paragraph', text: '怎么用？先看一个已知反应，认出谁是氧化剂、谁是氧化产物，就能排出氧化性顺序。例如 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂ 中，Fe³⁺ 是氧化剂，I₂ 是氧化产物，所以氧化性 Fe³⁺ ＞ I₂；I⁻ 是还原剂，Fe²⁺ 是还原产物，所以还原性 I⁻ ＞ Fe²⁺。' },
      { type: 'list', items: ['第一步：从反应方程式中找出氧化剂与氧化产物（或还原剂与还原产物）', '第二步：套用“氧化剂＞氧化产物、还原剂＞还原产物”排出顺序', '注意比较的是“性”（能力），不是得失电子的数目', '多个反应可串联成强弱顺序链条'] },
      { type: 'heading', text: '二、强弱与得失电子数目无关' },
      { type: 'paragraph', text: '这是最常考也最易错的一点：<strong>氧化性和还原性的强弱，只与得失电子的难易程度有关，与得失电子数目的多少无关</strong>。Na 失 1 个电子，Al 失 3 个电子，但 Na 失电子比 Al 容易得多，所以还原性 Na ＞ Al。' },
      { type: 'warn', label: '易错·数目误区', text: '很多同学误以为“失电子越多还原性越强、得电子越多氧化性越强”，这是错的。<strong>还原性看谁更容易失电子，不是看失几个</strong>；氧化性看谁更容易得电子，不是看得几个。比如 Cu 得 2 个电子、Fe³⁺ 也得电子，但 Fe³⁺ 远比 Cu²⁺ 更容易得电子，氧化性 Fe³⁺ ＞ Cu²⁺，与得电子数无关。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">氧化性比较：氧化剂 > 氧化产物</text><rect x="60" y="80" width="200" height="80" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="160" y="115" font-size="15" fill="#b5651d" text-anchor="middle" font-weight="bold">氧化剂</text><text x="160" y="140" font-size="12" fill="#4a3724" text-anchor="middle">得电子，被还原</text><polygon points="262,115 280,120 262,125" fill="#b5651d"/><rect x="420" y="80" width="200" height="80" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="520" y="115" font-size="15" fill="#b5651d" text-anchor="middle" font-weight="bold">氧化产物</text><text x="520" y="140" font-size="12" fill="#4a3724" text-anchor="middle">还原剂被氧化得到</text><text x="340" y="210" font-size="15" fill="#d98e3a" text-anchor="middle" font-weight="bold">氧化性：氧化剂 ＞ 氧化产物</text><text x="340" y="245" font-size="12" fill="#4a3724" text-anchor="middle">反应中氧化性强的物质把对方氧化，自己变成氧化产物的对应还原态</text></svg>', caption: '图1　氧化性：氧化剂强于它生成的氧化产物。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">还原性比较：还原剂 > 还原产物</text><rect x="60" y="80" width="200" height="80" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="160" y="115" font-size="15" fill="#b5651d" text-anchor="middle" font-weight="bold">还原剂</text><text x="160" y="140" font-size="12" fill="#4a3724" text-anchor="middle">失电子，被氧化</text><polygon points="262,115 280,120 262,125" fill="#b5651d"/><rect x="420" y="80" width="200" height="80" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="520" y="115" font-size="15" fill="#b5651d" text-anchor="middle" font-weight="bold">还原产物</text><text x="520" y="140" font-size="12" fill="#4a3724" text-anchor="middle">氧化剂被还原得到</text><text x="340" y="210" font-size="15" fill="#d98e3a" text-anchor="middle" font-weight="bold">还原性：还原剂 ＞ 还原产物</text><text x="340" y="245" font-size="12" fill="#4a3724" text-anchor="middle">反应中还原性强的你更容易失电子，自己变成还原产物的对应氧化态</text></svg>', caption: '图2　还原性：还原剂强于它生成的还原产物。' },
      { type: 'heading', text: '三、常见氧化剂清单' },
      { type: 'list', items: ['O₂、Cl₂、Br₂：非金属单质，易得电子', '浓 H₂SO₄、HNO₃：强氧化性酸', 'KMnO₄(H⁺)：酸性高锰酸根，强氧化剂', 'Fe³⁺、H₂O₂：常见中等强度氧化剂'] },
      { type: 'table', headers: ['类别', '代表物质', '特点'], rows: [['常见氧化剂', 'O₂、Cl₂、浓 H₂SO₄、HNO₃、KMnO₄(H⁺)、Fe³⁺、H₂O₂', '易得电子，显氧化性'], ['常见还原剂', '金属单质、H₂、CO、C、S²⁻、I⁻、SO₂、Fe²⁺', '易失电子，显还原性'], ['判断方法', '看化合价：高价态易得电子作氧化剂', '低价态易失电子作还原剂']] },
      { type: 'heading', text: '四、常见还原剂清单' },
      { type: 'list', items: ['金属单质（如 Na、Fe、Zn）：易失电子', 'H₂、CO、C：常见还原性气体或固体', 'S²⁻、I⁻：低价态阴离子，易失电子', 'SO₂、Fe²⁺：中间价态，可作还原剂'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">常见氧化剂与还原剂清单</text><rect x="30" y="70" width="300" height="220" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="100" font-size="15" fill="#b5651d" text-anchor="middle" font-weight="bold">常见氧化剂</text><text x="180" y="135" font-size="13" fill="#4a3724" text-anchor="middle">O₂ Cl₂ 浓 H₂SO₄</text><text x="180" y="165" font-size="13" fill="#4a3724" text-anchor="middle">HNO₃ KMnO₄(H⁺)</text><text x="180" y="195" font-size="13" fill="#4a3724" text-anchor="middle">Fe³⁺ H₂O₂</text><text x="180" y="235" font-size="13" fill="#4a3724" text-anchor="middle">得电子，显氧化性</text><rect x="350" y="70" width="300" height="220" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="100" font-size="15" fill="#b5651d" text-anchor="middle" font-weight="bold">常见还原剂</text><text x="500" y="135" font-size="13" fill="#4a3724" text-anchor="middle">金属单质 H₂ CO</text><text x="500" y="165" font-size="13" fill="#4a3724" text-anchor="middle">C S²⁻ I⁻</text><text x="500" y="195" font-size="13" fill="#4a3724" text-anchor="middle">SO₂ Fe²⁺</text><text x="500" y="235" font-size="13" fill="#4a3724" text-anchor="middle">失电子，显还原性</text><text x="340" y="320" font-size="13" fill="#d98e3a" text-anchor="middle" font-weight="bold">记住代表物，见到即可判断物质角色</text></svg>', caption: '图3　常见氧化剂易得电子，常见还原剂易失电子。' },
      { type: 'example', label: '例题·比较强弱', text: '已知：2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂，且 Cl₂ + 2Fe²⁺ → 2Fe³⁺ + 2Cl⁻。<br>由第一式：氧化性 Fe³⁺ ＞ I₂，还原性 I⁻ ＞ Fe²⁺。<br>由第二式：Cl₂ 是氧化剂，Fe³⁺ 是氧化产物，所以氧化性 Cl₂ ＞ Fe³⁺。<br>串联得氧化性顺序：Cl₂ ＞ Fe³⁺ ＞ I₂。这就是用反应链排出强弱的方法。' },
      { type: 'tip', label: '提示·强弱口诀', text: '记强弱就背：<strong>“剂比产物强，强弱看难易；氧化剂看氧化性，还原剂看还原性。”</strong>见到新反应，先认氧化剂、氧化产物，立刻排顺序；再记住常见氧化剂还原剂代表物，考试直接调用。' },
      { type: 'paragraph', text: '氧化性还原性强弱是氧化还原的收口考点，也是电化学的基础。把“氧化剂＞氧化产物、还原剂＞还原产物”刻进脑子，再加上“强弱看难易不看数目”，这一块就稳了。' }
    ],
    exercises: [
      { type: 'choice', question: '已知反应 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂，由此可判断氧化性强弱关系是？', options: ['Fe³⁺ > I₂', 'I₂ > Fe³⁺', 'Fe²⁺ > I⁻', 'I⁻ > Fe³⁺'], answer: 'Fe³⁺ > I₂', explanation: '在氧化还原反应中，氧化剂的氧化性强于氧化产物。该反应中 Fe³⁺ 是氧化剂，I₂ 是氧化产物（I⁻ 被氧化得到），因此氧化性 Fe³⁺ 大于 I₂。对应还原性则是还原剂 I⁻ 强于还原产物 Fe²⁺。所以选 Fe³⁺ > I₂。' },
      { type: 'choice', question: '下列关于氧化性还原性强弱的说法，正确的是？', options: ['得电子数越多，氧化性越强', '失电子数越多，还原性越强', '强弱与得失电子难易有关，与数目无关', '氧化剂得失电子数目决定其氧化性'], answer: '强弱与得失电子难易有关，与数目无关', explanation: '氧化性和还原性的强弱取决于物质得失电子的难易程度，而不是得失电子数目的多少。例如 Al 失 3 个电子，Na 失 1 个电子，但 Na 比 Al 更容易失电子，还原性 Na 更强。所以强弱只看难易，与数目无关。' },
      { type: 'choice', question: '下列物质中，通常作氧化剂的是？', options: ['Fe', 'H₂', 'KMnO₄(H⁺)', 'I⁻'], answer: 'KMnO₄(H⁺)', explanation: 'KMnO₄ 在酸性条件下（KMnO₄(H⁺)）中 Mn 为 +7 价，极易得电子被还原，是常见强氧化剂。Fe 是金属单质易失电子作还原剂；H₂ 和 I⁻ 也都易失电子，常作还原剂。所以通常作氧化剂的是 KMnO₄(H⁺)。' },
      { type: 'fill', question: '在氧化还原反应中，还原性比较规律是：还原剂___还原产物（填“大于”或“小于”）。', answer: '大于', explanation: '氧化还原反应中存在规律：氧化剂的氧化性强于氧化产物，还原剂的还原性强于还原产物。也就是说，还原剂比它反应后生成的还原产物更容易失去电子，还原性更强。因此还原性：还原剂大于还原产物。' },
      { type: 'fill', question: '常见氧化剂 O₂、Cl₂、浓 H₂SO₄、HNO₃、KMnO₄(H⁺)、Fe³⁺、H₂O₂，它们共同的特点是容易___电子，表现出___性。', answer: '得|氧化', explanation: '氧化剂在反应中得到电子，自身被还原，因此表现出氧化性。题中列举的 O₂、Cl₂、浓 H₂SO₄、HNO₃、KMnO₄(H⁺)、Fe³⁺、H₂O₂ 都是常见氧化剂，其共同特点是容易得到电子，显示氧化性。与之相对，还原剂容易失去电子，显示还原性。' }
    ]
  });
})();
