/* ============================================================
 * 高一化学 · 必修 第一册 · 第一章 物质及其变化
 * 课时4：氧化还原反应（特征与本质）
 * 数据注入：chemistry.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u4',
    name: '氧化还原反应（特征与本质）',
    chapter: '必修 第一册 · 第一章 物质及其变化',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、从"得氧失氧"升级到"化合价升降"' },
      { type: 'paragraph', text: '初中我们学过氧化还原反应：物质得到氧被氧化，失去氧被还原，比如木炭燃烧 C + O₂ → CO₂，碳得到氧被氧化。但很多反应表面上看不到"氧"的来去，比如 Zn + CuSO₄ → ZnSO₄ + Cu，这里没有氧的得失，却是高中定义的氧化还原反应。于是高中换了一个更通用、更能看穿本质的标准：看化合价有没有升降。' },
      { type: 'keypoint', label: '重点·新定义', text: '<strong>有元素化合价升降的化学反应，就是氧化还原反应。</strong>只要反应前后有元素的化合价发生变化，不管有没有氧参与，都算氧化还原反应。没有化合价变化的反应，叫做非氧化还原反应（如复分解反应）。' },
      { type: 'list', items: ['初中标准：得氧被氧化、失氧被还原（只适用于有氧参与的反应）', '高中标准：看化合价是否升降，适用范围更广', '化合价有升有降的反应 = 氧化还原反应'] },
      { type: 'heading', text: '二、特征与本质' },
      { type: 'paragraph', text: '氧化还原反应有两个层面。表面上看，是某些元素的化合价升高了、某些降低了，这叫"特征"，是我们判断它是不是氧化还原反应的依据。往深处看，为什么化合价会升降？因为反应过程中有电子的转移：有的原子把电子"交出去"，有的原子把电子"收进来"，或者电子对发生了偏移。这就是本质。' },
      { type: 'keypoint', label: '重点·特征与本质', text: '<strong>特征：元素化合价的升降。</strong><br><strong>本质：电子的转移（电子的得失或共用电子对的偏移）。</strong><br>化合价升高，是因为该元素失去了电子（或电子对偏向对方）；化合价降低，是因为得到了电子（或电子对偏向自己）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">化合价升降与电子转移的关系</text><rect x="40" y="70" width="240" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="160" y="96" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">化合价升高</text><text x="160" y="132" font-size="13" fill="#4a3724" text-anchor="middle">失去电子</text><text x="160" y="162" font-size="13" fill="#4a3724" text-anchor="middle">被氧化</text><text x="160" y="200" font-size="13" fill="#d98e3a" text-anchor="middle">如 Zn → Zn²⁺ + 2e⁻</text><rect x="400" y="70" width="240" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="520" y="96" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">化合价降低</text><text x="520" y="132" font-size="13" fill="#4a3724" text-anchor="middle">得到电子</text><text x="520" y="162" font-size="13" fill="#4a3724" text-anchor="middle">被还原</text><text x="520" y="200" font-size="13" fill="#d98e3a" text-anchor="middle">如 Cu²⁺ + 2e⁻ → Cu</text><line x1="280" y1="155" x2="400" y2="155" stroke="#d98e3a" stroke-width="3"/><polygon points="400,149 412,155 400,161" fill="#d98e3a"/><text x="340" y="142" font-size="12" fill="#d98e3a" text-anchor="middle">电子转移</text></svg>', caption: '图1　化合价升高伴随失电子（被氧化），化合价降低伴随得电子（被还原），电子从升价元素转移到降价元素。' },
      { type: 'heading', text: '三、核心口诀：升失氧还，降得还氧' },
      { type: 'paragraph', text: '氧化还原里最容易混的是"谁被氧化、谁作氧化剂"。记一句顺口溜就不会错：化合价升高，失去电子，被氧化，作还原剂；化合价降低，得到电子，被还原，作氧化剂。简记为"升失氧还，降得还氧"——升价的一方是还原剂，降价的一方是氧化剂。' },
      { type: 'keypoint', label: '重点·四组对应关系', text: '<strong>化合价升高 → 失电子 → 被氧化 → 作还原剂。</strong><br><strong>化合价降低 → 得电子 → 被还原 → 作氧化剂。</strong><br>注意：氧化剂自己被还原，还原剂自己被氧化。还原剂是"牺牲自己、帮助别人被还原"的角色。' },
      { type: 'list', items: ['化合价升高 → 失电子 → 被氧化 → 作还原剂（升失氧还）', '化合价降低 → 得电子 → 被还原 → 作氧化剂（降得还氧）', '氧化剂被还原、还原剂被氧化，名字与产物正好交叉，别记反'] },
      { type: 'table', headers: ['项目', '氧化反应', '还原反应'], rows: [['化合价变化', '升高', '降低'], ['电子变化', '失去电子（或偏移离开）', '得到电子（或偏移靠近）'], ['被何处理', '被氧化', '被还原'], ['对应物质', '还原剂（反应物）', '氧化剂（反应物）'], ['产物', '氧化产物', '还原产物']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="310" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">双线桥法：标出化合价升降与电子得失</text><text x="340" y="80" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">2Na + Cl₂ → 2NaCl</text><text x="160" y="120" font-size="14" fill="#4a3724" text-anchor="middle">Na: 0 → +1</text><text x="160" y="140" font-size="13" fill="#d98e3a" text-anchor="middle">失 1e⁻ × 2</text><text x="160" y="200" font-size="13" fill="#4a3724" text-anchor="middle">被氧化</text><text x="500" y="120" font-size="14" fill="#4a3724" text-anchor="middle">Cl: 0 → −1</text><text x="500" y="140" font-size="13" fill="#d98e3a" text-anchor="middle">得 1e⁻ × 2</text><text x="500" y="200" font-size="13" fill="#4a3724" text-anchor="middle">被还原</text><line x1="120" y1="100" x2="200" y2="100" stroke="#b5651d" stroke-width="2"/><line x1="120" y1="160" x2="200" y2="160" stroke="#b5651d" stroke-width="2"/><line x1="460" y1="100" x2="540" y2="100" stroke="#b5651d" stroke-width="2"/><line x1="460" y1="160" x2="540" y2="160" stroke="#b5651d" stroke-width="2"/><rect x="250" y="240" width="180" height="44" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="267" font-size="13" fill="#4a3724" text-anchor="middle">Na 是还原剂，Cl₂ 是氧化剂</text></svg>', caption: '图2　双线桥法：从反应物指向生成物，分别标出 Na 失电子被氧化、Cl 得电子被还原，总价态变化相等。' },
      { type: 'heading', text: '四、氧化产物与还原产物' },
      { type: 'paragraph', text: '反应进行后，谁变成了什么？还原剂被氧化之后得到的产物，叫氧化产物；氧化剂被还原之后得到的产物，叫还原产物。在 2Na + Cl₂ → 2NaCl 中，NaCl 既是 Na 被氧化得到的，也是 Cl₂ 被还原得到的，所以 NaCl 既是氧化产物又是还原产物。' },
      { type: 'keypoint', label: '重点·产物归属', text: '<strong>还原剂 → 被氧化 → 生成氧化产物。</strong><br><strong>氧化剂 → 被还原 → 生成还原产物。</strong><br>记住"剂变产物"：还原剂对应氧化产物，氧化剂对应还原产物，名字正好交叉。' },
      { type: 'example', label: '例题·角色判断', text: '在反应 Zn + H₂SO₄ → ZnSO₄ + H₂↑ 中，判断氧化剂、还原剂及产物。<br><br><strong>解析</strong>：先标化合价，Zn 从 0 升到 +2，失去电子被氧化，所以 <strong>Zn 是还原剂</strong>，生成的 ZnSO₄ 是氧化产物；H₂SO₄ 中 H 从 +1 降到 0，得到电子被还原，所以 <strong>H₂SO₄ 是氧化剂</strong>，生成的 H₂ 是还原产物。SO₄²⁻ 化合价没变，留在 ZnSO₄ 中。这是典型的"活泼金属置换酸中氢"的氧化还原反应。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">氧化剂与还原剂的角色分工</text><rect x="40" y="70" width="280" height="190" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="96" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">还原剂</text><text x="180" y="130" font-size="13" fill="#4a3724" text-anchor="middle">化合价升高</text><text x="180" y="156" font-size="13" fill="#4a3724" text-anchor="middle">失电子</text><text x="180" y="182" font-size="13" fill="#4a3724" text-anchor="middle">自身被氧化</text><text x="180" y="220" font-size="13" fill="#d98e3a" text-anchor="middle">生成氧化产物</text><rect x="360" y="70" width="280" height="190" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="96" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">氧化剂</text><text x="500" y="130" font-size="13" fill="#4a3724" text-anchor="middle">化合价降低</text><text x="500" y="156" font-size="13" fill="#4a3724" text-anchor="middle">得电子</text><text x="500" y="182" font-size="13" fill="#4a3724" text-anchor="middle">自身被还原</text><text x="500" y="220" font-size="13" fill="#d98e3a" text-anchor="middle">生成还原产物</text></svg>', caption: '图3　还原剂升价失电子被氧化、生成氧化产物；氧化剂降价得电子被还原、生成还原产物。' },
      { type: 'heading', text: '五、易错与提示' },
      { type: 'warn', label: '易错·有单质不一定氧化还原', text: '<strong>有单质参加的化合或分解反应，不一定都是氧化还原反应。</strong>必须看反应前后元素的化合价是否变化。例如 3O₂ → 2O₃（臭氧生成），反应物和生成物都是氧单质，氧的化合价始终为 0，没有升降，所以不是氧化还原反应。另外，同一元素化合价既升高又降低的反应叫<strong>歧化反应</strong>，如 Cl₂ + H₂O → HCl + HClO，Cl 从 0 既变成 −1 又变成 +1。' },
      { type: 'tip', label: '提示·先标价再判断', text: '拿到一个反应，第一时间在每种元素上方标出化合价，看前后有没有变。只要有一个元素升、另一个降，就是氧化还原反应，并据此找氧化剂、还原剂。如果所有元素价态都没变（如 NaCl + AgNO₃ → AgCl↓ + NaNO₃），那就是非氧化还原反应（复分解）。' },
      { type: 'example', label: '例题·歧化识别', text: '反应 Cl₂ + H₂O → HCl + HClO 中，关于氯元素说法正确的是？<br>A. 氯全被氧化　B. 氯全被还原　C. 氯既被氧化又被还原　D. 不是氧化还原反应<br><br><strong>解析</strong>：反应物 Cl₂ 中 Cl 化合价为 0；产物 HCl 中 Cl 为 −1（降价、被还原），HClO 中 Cl 为 +1（升价、被氧化）。同一元素 Cl 在反应中既升价又降价，属于歧化反应，氯既被氧化又被还原。因此选 C。' }
    ],
    exercises: [
      { type: 'choice', question: '判断一个反应是否为氧化还原反应，根本依据是？', options: ['有没有氧气参加', '有没有单质生成', '元素化合价是否升降', '反应是否放热'], answer: '元素化合价是否升降', explanation: '高中判断氧化还原反应的标准是看反应前后是否有元素的化合价发生升降。只要有化合价升降就是氧化还原反应，与有没有氧气、有没有单质、是否放热都无关。例如 Zn 与 CuSO₄ 反应没有氧参与却是氧化还原反应。所以根本依据是元素化合价是否升降。' },
      { type: 'choice', question: '在 2Na + Cl₂ → 2NaCl 中，下列说法正确的是？', options: ['Na 是氧化剂', 'Cl₂ 被氧化', 'Na 失电子、作还原剂', '化合价没有变化'], answer: 'Na 失电子、作还原剂', explanation: '反应中 Na 的化合价从 0 升到 +1，失去电子，被氧化，因此 Na 是还原剂；Cl₂ 中 Cl 从 0 降到 −1，得到电子，被还原，Cl₂ 是氧化剂。所以"Na 失电子、作还原剂"正确。Na 不是氧化剂，Cl₂ 是被还原而非被氧化，且化合价明显变化。' },
      { type: 'choice', question: '氧化还原反应的本质是？', options: ['化合价升降', '电子的转移', '生成新物质', '反应速率加快'], answer: '电子的转移', explanation: '化合价升降是氧化还原反应的"特征"，是我们用来判断的外在表现；而其内在"本质"是反应过程中发生了电子的转移，包括电子的得失或共用电子对的偏移。正是因为电子转移，才导致化合价升降。所以本质是电子的转移，特征才是化合价升降。' },
      { type: 'fill', question: '化合价升高的物质___电子，被氧化，在反应中作___（填"氧化剂"或"还原剂"）。', answer: '失去|失|失电子', explanation: '核心口诀是"升失氧还"：化合价升高，失去电子，被氧化，该物质作还原剂。注意还原剂自身被氧化，它帮助氧化剂被还原，名字容易搞反，记住"还原剂对应氧化产物、被氧化"即可。这里依次填"失去（或失）"和"还原剂"。' },
      { type: 'fill', question: '在 Cl₂ + H₂O → HCl + HClO 中，氯元素的化合价从 0 同时变为 ___ 和 ___（用离子/数字表示，如 −1 与 +1）。', answer: '−1 与 +1|-1 和 +1', explanation: '产物 HCl 中 Cl 为 −1 价，HClO 中 Cl 为 +1 价（H 为 +1、O 为 −2，故 Cl 为 +1）。同一元素 Cl 在反应中一部分降价到 −1、一部分升价到 +1，这种同一元素既升又降的反应叫歧化反应，所以氯的化合价从 0 同时变为 −1 与 +1。' }
    ]
  });
})();
