/* ============================================================
 * 高一化学 · 必修 第一册 · 第二章 海水中的重要元素——钠和氯
 * 课时9：氯气的制法与 Cl⁻ 检验
 * 数据注入：chemistry.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u9',
    name: '氯气的制法与 Cl⁻ 检验',
    chapter: '必修 第一册 · 第二章 海水中的重要元素——钠和氯',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验室制取氯气' },
      { type: 'paragraph', text: '实验室里常用二氧化锰和浓盐酸在加热条件下反应来制取氯气。这个反应是高中最重要的气体制备反应之一，既能复习氧化还原反应，又能练习"固液加热型"气体发生装置。生成的氯气有毒，所以整个过程要在通风橱里做，并用碱液吸收尾气。' },
      { type: 'keypoint', label: '重点·实验室制 Cl₂ 原理', text: '<strong>MnO₂ + 4HCl（浓） → MnCl₂ + Cl₂↑ + 2H₂O（加热）</strong><br>其中 MnO₂ 是氧化剂（锰从 +4 降到 +2），浓盐酸既表现还原性（生成 Cl₂）又表现酸性（生成 MnCl₂）。注意必须用<strong>浓</strong>盐酸，稀盐酸与 MnO₂ 几乎不反应。' },
      { type: 'list', items: ['反应物：二氧化锰 MnO₂ 固体 + 浓盐酸', '条件：加热', '装置类型：固液加热型（与圆底烧瓶、分液漏斗配套）', '产物：氯气 Cl₂，用向上排空气法或排饱和食盐水法收集'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">实验室制取氯气装置：发生—除杂—收集—尾气吸收</text><rect x="60" y="90" width="150" height="120" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="135" y="130" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">圆底烧瓶</text><text x="135" y="155" font-size="12" fill="#4a3724" text-anchor="middle">MnO₂+浓HCl</text><text x="135" y="178" font-size="12" fill="#d98e3a" text-anchor="middle">加热</text><line x1="210" y1="150" x2="280" y2="150" stroke="#d98e3a" stroke-width="3"/><rect x="285" y="90" width="120" height="120" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="345" y="135" font-size="12" fill="#4a3724" text-anchor="middle">洗气瓶</text><text x="345" y="160" font-size="11" fill="#4a3724" text-anchor="middle">除 HCl、干燥</text><line x1="405" y1="150" x2="470" y2="150" stroke="#d98e3a" stroke-width="3"/><rect x="475" y="90" width="120" height="120" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="535" y="135" font-size="12" fill="#4a3724" text-anchor="middle">集气瓶</text><text x="535" y="160" font-size="11" fill="#4a3724" text-anchor="middle">收集 Cl₂</text><line x1="595" y1="150" x2="620" y2="150" stroke="#d98e3a" stroke-width="3"/><rect x="625" y="110" width="40" height="80" rx="6" fill="#b5651d"/><text x="645" y="155" font-size="11" fill="#ffffff" text-anchor="middle">NaOH</text><text x="340" y="300" font-size="13" fill="#d98e3a" text-anchor="middle">尾气用 NaOH 吸收：Cl₂ + 2NaOH → NaCl + NaClO + H₂O</text></svg>', caption: '图1　实验室制氯气流程：发生装置产生 Cl₂，经洗气除杂干燥后收集，多余氯气用 NaOH 溶液吸收防止污染。' },
      { type: 'heading', text: '二、收集、除杂与尾气处理' },
      { type: 'paragraph', text: '制出的氯气中会混有少量氯化氢气体和水蒸气，需要除掉。因为氯气在饱和食盐水里溶解度很小，而氯化氢极易溶于水，所以常用饱和食盐水除去氯化氢；再用浓硫酸干燥除去水蒸气。收集时因 Cl₂ 密度比空气大，可用向上排空气法。' },
      { type: 'keypoint', label: '重点·收集与吸收', text: '<strong>除杂：先通过饱和食盐水除 HCl，再通过浓硫酸干燥。</strong><br><strong>收集：向上排空气法，或排饱和食盐水法。</strong><br><strong>尾气：必须用 NaOH 溶液吸收</strong>，反应为 Cl₂ + 2NaOH → NaCl + NaClO + H₂O，绝不能把有毒氯气直接排入空气。' },
      { type: 'table', headers: ['装置环节', '所用试剂', '作用'], rows: [['发生装置', 'MnO₂ + 浓盐酸（加热）', '生成氯气 Cl₂'], ['除 HCl', '饱和食盐水', '吸收混有的氯化氢气体'], ['干燥', '浓硫酸', '吸收水蒸气'], ['收集', '向上排空气法', '得到较纯的氯气'], ['尾气吸收', 'NaOH 溶液', '吸收多余有毒氯气']] },
      { type: 'heading', text: '三、工业制法——电解饱和食盐水' },
      { type: 'paragraph', text: '工业上需要大量氯气，靠加热小烧瓶可不够，而是用电解的方法。电解饱和食盐水（即氯化钠水溶液）时，在阴阳两极分别得到氢气、氯气和氢氧化钠。这套联合生产叫"氯碱工业"，是化工的重要支柱。' },
      { type: 'keypoint', label: '重点·电解饱和食盐水', text: '<strong>2NaCl + 2H₂O → 2NaOH + H₂↑ + Cl₂↑（电解）</strong><br>阳极得到氯气 Cl₂，阴极得到氢气 H₂，溶液中留下 NaOH。三种产品在化工中都有巨大用途：Cl₂ 制漂白粉、塑料；H₂ 作燃料和加氢原料；NaOH 用于造纸、制皂。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="310" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">工业电解饱和食盐水：同时得到 Cl₂、H₂、NaOH</text><rect x="120" y="80" width="440" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="110" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">饱和食盐水（电解槽）</text><rect x="160" y="135" width="80" height="70" rx="6" fill="#d98e3a"/><text x="200" y="175" font-size="13" fill="#ffffff" text-anchor="middle">阳极 Cl₂</text><rect x="440" y="135" width="80" height="70" rx="6" fill="#b5651d"/><text x="480" y="175" font-size="13" fill="#ffffff" text-anchor="middle">阴极 H₂</text><text x="340" y="225" font-size="12" fill="#4a3724" text-anchor="middle">溶液中生成 NaOH</text><text x="340" y="285" font-size="13" fill="#d98e3a" text-anchor="middle">2NaCl + 2H₂O → 2NaOH + H₂↑ + Cl₂↑</text></svg>', caption: '图2　电解饱和食盐水时，阳极析出氯气、阴极析出氢气，溶液中得到氢氧化钠，这就是氯碱工业的基础。' },
      { type: 'list', items: ['阳极产物：氯气 Cl₂', '阴极产物：氢气 H₂', '溶液产物：氢氧化钠 NaOH', '三者都是重要化工原料，故称氯碱工业'] },
      { type: 'heading', text: '四、Cl⁻ 的检验' },
      { type: 'paragraph', text: '怎么知道一种溶液里有没有氯离子 Cl⁻？最经典的方法是用硝酸银加稀硝酸。向待测液中先加入稀硝酸酸化，再滴加硝酸银溶液，如果出现不溶于稀硝酸的白色沉淀，就说明溶液里含有 Cl⁻。这个白色沉淀就是氯化银 AgCl。' },
      { type: 'keypoint', label: '重点·检验操作', text: '<strong>检验 Cl⁻ 三步：先加稀硝酸酸化，再滴加 AgNO₃ 溶液，若生成不溶于稀硝酸的白色沉淀（AgCl），则证明含 Cl⁻。</strong><br>关键是不能省略"稀硝酸酸化"这一步，否则碳酸根等也会和 Ag⁺ 生成白色沉淀，造成误判。' },
      { type: 'example', label: '例题·检验 Cl⁻', text: '某无色溶液中可能含 Cl⁻，下列操作正确的是？<br>A. 直接加 AgNO₃，有白色沉淀即证明含 Cl⁻<br>B. 先加盐酸酸化，再加 AgNO₃<br>C. 先加稀硝酸酸化，再加 AgNO₃，白色沉淀不溶<br>D. 加 BaCl₂ 看有无沉淀<br><br><strong>解析</strong>：检验 Cl⁻ 必须排除 CO₃²⁻ 等干扰，标准操作是先加<strong>稀硝酸酸化</strong>（不能用盐酸，否则引入 Cl⁻），再加 AgNO₃ 看是否生成不溶于稀硝酸的白色 AgCl 沉淀，C 正确。A 未酸化会误判；B 用盐酸引入了 Cl⁻；D 的 BaCl₂ 用于检验硫酸根，不适用 Cl⁻。故选 C。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">Cl⁻ 检验：加 AgNO₃ 产生不溶于稀硝酸的白色 AgCl 沉淀</text><rect x="80" y="70" width="220" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="190" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">待测液 + 稀硝酸</text><rect x="110" y="120" width="160" height="55" rx="6" fill="#d98e3a"/><text x="190" y="153" font-size="13" fill="#ffffff" text-anchor="middle">酸化除干扰</text><line x1="305" y1="155" x2="375" y2="155" stroke="#d98e3a" stroke-width="3"/><polygon points="375,149 388,155 375,161" fill="#d98e3a"/><rect x="380" y="70" width="240" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">滴加 AgNO₃</text><rect x="415" y="120" width="170" height="55" rx="6" fill="#ffffff" stroke="#b5651d" stroke-width="2"/><text x="500" y="153" font-size="13" fill="#4a3724" text-anchor="middle">白色沉淀 AgCl</text><text x="340" y="272" font-size="13" fill="#d98e3a" text-anchor="middle">Ag⁺ + Cl⁻ → AgCl↓（白色，不溶于稀硝酸）</text></svg>', caption: '图3　向待测液先加稀硝酸酸化、再加硝酸银，若出现不溶于稀硝酸的白色沉淀，则证明含有 Cl⁻（生成 AgCl）。' },
      { type: 'warn', label: '易错·必须酸化且不能用盐酸', text: '<strong>第一，必须先加稀硝酸酸化，不能省略。</strong>若不加酸，CO₃²⁻ 也会和 Ag⁺ 生成白色 Ag₂CO₃ 沉淀，导致误以为有 Cl⁻。<strong>第二，酸化只能用稀硝酸，不能用盐酸</strong>，因为盐酸本身含 Cl⁻，会凭空引入被检验的离子，造成"假阳性"。<strong>第三，AgCl 不溶于稀硝酸</strong>，而 Ag₂CO₃ 能溶于稀硝酸，这正是加酸能区分的原因。' },
      { type: 'list', items: ['CO₃²⁻ 干扰：会生成溶于酸的 Ag₂CO₃ 白色沉淀', 'SO₃²⁻ 干扰：也能和 Ag⁺ 生成沉淀', '酸化只能用稀 HNO₃，绝不能用盐酸或硫酸', 'AgCl 是白色、不溶于稀硝酸的特征沉淀'] },
      { type: 'tip', label: '提示·加稀硝酸的双重作用', text: '先加稀硝酸，一是把 CO₃²⁻、SO₃²⁻ 等会变成气体的离子赶走（它们遇酸放出 CO₂、SO₂），二是创造酸性环境让 AgCl 稳定沉淀而 Ag₂CO₃ 溶解。<strong>记住：酸化用硝酸、沉淀用硝酸银、白色不溶即 Cl⁻。</strong>' },
      { type: 'example', label: '例题·鉴别三瓶溶液', text: '有三瓶无色溶液，分别是 NaCl、Na₂CO₃、NaNO₃，只用一种试剂就能鉴别，该试剂是？<br>A. 酚酞　B. 稀硝酸　C. AgNO₃ 溶液（配合稀硝酸）　D. 蒸馏水<br><br><strong>解析</strong>：向三瓶溶液中分别先加稀硝酸酸化，再加 AgNO₃：NaCl 含 Cl⁻，生成不溶于稀硝酸的白色 AgCl 沉淀；Na₂CO₃ 先遇酸放出 CO₂ 气泡（CO₃²⁻ 被赶走），再加 AgNO₃ 无明显白色沉淀；NaNO₃ 既无 Cl⁻ 也无遇酸产气现象，无明显变化。三者现象各不相同，故可用 AgNO₃ 配合稀硝酸鉴别，选 C。' }
    ],
    exercises: [
      { type: 'choice', question: '实验室用 MnO₂ 与浓盐酸反应制氯气时，作氧化剂的物质是？', options: ['HCl', 'MnO₂', 'MnCl₂', 'Cl₂'], answer: 'MnO₂', explanation: '反应 MnO₂ + 4HCl（浓）→ MnCl₂ + Cl₂↑ + 2H₂O 中，锰元素从 MnO₂ 里的 +4 价降到 MnCl₂ 里的 +2 价，得到电子被还原，所以 MnO₂ 是氧化剂。浓盐酸中的氯部分从 −1 升到 0 价生成 Cl₂，作还原剂，同时也提供酸性。因此氧化剂是 MnO₂。' },
      { type: 'choice', question: '检验溶液中是否含有 Cl⁻，常用的试剂组合是？', options: ['BaCl₂ 溶液', 'AgNO₃ 和稀硝酸', 'NaOH 溶液', 'KSCN 溶液'], answer: 'AgNO₃ 和稀硝酸', explanation: '检验 Cl⁻ 的标准方法是先加稀硝酸酸化（排除 CO₃²⁻ 等干扰），再滴加硝酸银 AgNO₃ 溶液，若生成不溶于稀硝酸的白色沉淀 AgCl，则证明含 Cl⁻。BaCl₂ 用于检验硫酸根，NaOH 和 KSCN 都不用于检验氯离子，所以选 AgNO₃ 和稀硝酸。' },
      { type: 'choice', question: '实验室用 MnO₂ 与浓盐酸制取氯气，反应需要的条件是？', options: ['常温', '加热', '光照', '通电'], answer: '加热', explanation: '二氧化锰与浓盐酸反应制取氯气需要加热条件，常温下二者几乎不反应，必须用浓盐酸并在加热时进行。光照和通电都不是该反应的必要条件。反应方程式为 MnO₂ + 4HCl（浓）→ MnCl₂ + Cl₂↑ + 2H₂O（加热）。因此选加热。' },
      { type: 'fill', question: '配平实验室制氯气的化学方程式：MnO₂ + 4HCl（浓） → MnCl₂ + Cl₂↑ + ___H₂O。', answer: '2', explanation: '根据氢原子守恒，左边 4 个 HCl 含 4 个 H，右边 MnCl₂ 和 Cl₂ 中都不含 H，所以 4 个 H 全部进入水，生成 2 个 H₂O；氧原子也吻合：左边 MnO₂ 含 2 个 O，右边正好 2 个 H₂O 含 2 个 O。因此横线处应填 2。' },
      { type: 'fill', question: '检验 Cl⁻ 时，向待测液中先加稀硝酸酸化，再滴加___，若产生不溶于稀硝酸的白色沉淀，则证明含 Cl⁻。', answer: 'AgNO₃', explanation: '检验氯离子的关键试剂是硝酸银 AgNO₃。Ag⁺ 与 Cl⁻ 结合生成白色、难溶于稀硝酸的氯化银沉淀：Ag⁺ + Cl⁻ → AgCl↓。必须先加稀硝酸酸化以排除碳酸根等干扰，再滴 AgNO₃。所以横线应填 AgNO₃（硝酸银）。' }
    ]
  });
})();
