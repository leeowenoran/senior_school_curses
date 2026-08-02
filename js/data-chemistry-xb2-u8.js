/* ============================================================
 * 化学 · 选择性必修2 物质结构与性质 · 第二章 分子结构与性质
 * 课时8：杂化轨道理论
 * 数据注入：chemistry.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u8',
    name: '杂化轨道理论',
    chapter: '选择性必修2 物质结构与性质 · 第二章 分子结构与性质',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、为什么要“杂化”：轨道先“混匀”再成键' },
      { type: 'paragraph', text: '前面学过，s 轨道是球形、p 轨道是哑铃形，形状不一样。但现实里很多分子的键却很“规整”：比如 CH₄ 的四个 C–H 键完全一样、指向正四面体四个角。为了解释这种规整，化学家提出：中心原子在成键前，会先把能量相近的 s 轨道和 p 轨道“混合”一下，重新变成几个一模一样的新轨道，再去和别的原子成键。这个过程就叫杂化，得到的新轨道叫杂化轨道。' },
      { type: 'keypoint', label: '重点·杂化的本质', text: '<strong>杂化是中心原子能量相近的原子轨道“混合重组”，形成数目相等、能量相同、方向一致的新轨道（杂化轨道）的过程。</strong>杂化轨道用来成 σ 键或容纳孤电子对。' },
      { type: 'list', items: ['杂化前后轨道总数不变（几个进、几个出）', '杂化轨道形状介于 s 和 p 之间，方向更集中', '杂化轨道主要用来形成 σ 键或容纳孤对电子'] },
      { type: 'heading', text: '二、sp 杂化：直线形（180°）' },
      { type: 'paragraph', text: '当中心原子用 1 个 s 轨道和 1 个 p 轨道杂化，得到 2 个等价的 sp 杂化轨道，它们像两根棍子分别指向直线的两端（夹角 180°）。例如 BeCl₂、CO₂ 的中心原子都是 sp 杂化，分子呈直线形。CO₂ 里 C 的另两个未杂化的 p 轨道分别与两个 O 形成 π 键，所以 C=O 是双键。' },
      { type: 'keypoint', label: '重点·sp 杂化', text: '<strong>1 个 s + 1 个 p → 2 个 sp 杂化轨道，直线形（180°）。实例：CO₂、BeCl₂。</strong>' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">sp 杂化：1 个 s + 1 个 p → 2 个 sp（直线形）</text><circle cx="120" cy="170" r="26" fill="#d98e3a"/><text x="120" y="175" font-size="12" fill="#ffffff" text-anchor="middle">s</text><ellipse cx="200" cy="170" rx="14" ry="34" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="200" y="225" font-size="12" fill="#4a3724" text-anchor="middle">p</text><text x="280" y="90" font-size="14" fill="#b5651d" text-anchor="middle">＋</text><text x="280" y="175" font-size="14" fill="#b5651d" text-anchor="middle">→</text><circle cx="430" cy="170" r="22" fill="#b5651d"/><circle cx="560" cy="170" r="22" fill="#b5651d"/><line x1="452" y1="170" x2="538" y2="170" stroke="#d98e3a" stroke-width="3"/><text x="495" y="150" font-size="12" fill="#4a3724" text-anchor="middle">180°</text><text x="495" y="245" font-size="12" fill="#4a3724" text-anchor="middle">2 个 sp 杂化轨道，直线排布</text></svg>', caption: '图1　sp 杂化：1 个 s 与 1 个 p 混合，得到 2 个等价的 sp 轨道，指向直线两端（180°）。' },
      { type: 'heading', text: '三、sp² 杂化：平面三角形（120°）' },
      { type: 'paragraph', text: '中心原子用 1 个 s 轨道和 2 个 p 轨道杂化，得到 3 个等价的 sp² 杂化轨道，指向平面正三角形的三个角（夹角 120°）。例如 BF₃ 是 sp² 杂化、平面三角形；乙烯 C₂H₄ 中每个 C 也是 sp² 杂化，3 个 sp² 轨道形成 3 个 σ 键，剩下一个未杂化的 p 轨道“肩并肩”重叠形成一个 π 键，所以 C=C 双键里含 1 个 π 键。' },
      { type: 'keypoint', label: '重点·sp² 杂化', text: '<strong>1 个 s + 2 个 p → 3 个 sp² 杂化轨道，平面三角形（120°）。实例：BF₃、乙烯 C₂H₄。</strong>' },
      { type: 'list', items: ['sp² 杂化留 1 个未杂化的 p 轨道', '这个 p 轨道可“肩并肩”形成 π 键', '所以双键 = σ 键(sp²) + π 键(未杂化 p)'] },
      { type: 'table', headers: ['杂化类型', '参与轨道', '杂化轨道数', '构型', '实例'], rows: [['sp', '1s + 1p', '2', '直线形(180°)', 'CO₂、BeCl₂'], ['sp²', '1s + 2p', '3', '平面三角形(120°)', 'BF₃、C₂H₄'], ['sp³', '1s + 3p', '4', '四面体(约109.5°)', 'CH₄、NH₃、H₂O']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">sp² 杂化：3 个 sp² 在平面三角，剩 1 个 p 形成 π 键</text><circle cx="340" cy="180" r="26" fill="#b5651d"/><line x1="340" y1="180" x2="240" y2="120" stroke="#d98e3a" stroke-width="3"/><line x1="340" y1="180" x2="440" y2="120" stroke="#d98e3a" stroke-width="3"/><line x1="340" y1="180" x2="340" y2="260" stroke="#d98e3a" stroke-width="3"/><text x="240" y="105" font-size="12" fill="#4a3724" text-anchor="middle">sp²</text><text x="440" y="105" font-size="12" fill="#4a3724" text-anchor="middle">sp²</text><text x="340" y="280" font-size="12" fill="#4a3724" text-anchor="middle">sp²</text><ellipse cx="340" cy="60" rx="46" ry="12" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="64" font-size="11" fill="#4a3724" text-anchor="middle">未杂化 p（→与邻C成π）</text></svg>', caption: '图2　sp² 杂化：3 个 sp² 轨道落在一个平面上成三角，剩余 1 个 p 轨道垂直于该平面，可形成 π 键（如乙烯 C=C）。' },
      { type: 'heading', text: '四、sp³ 杂化：四面体（约 109.5°）' },
      { type: 'paragraph', text: '中心原子用 1 个 s 轨道和全部 3 个 p 轨道杂化，得到 4 个等价的 sp³ 杂化轨道，指向正四面体的四个角（约 109.5°）。CH₄ 是典型 sp³、正四面体；NH₃ 中 N 的 4 个 sp³ 轨道里有 1 个装孤对，分子成三角锥；H₂O 中 O 的 4 个 sp³ 轨道里有 2 个装孤对，分子成 V 形。可见孤对同样让构型“变形”。' },
      { type: 'keypoint', label: '重点·sp³ 杂化', text: '<strong>1 个 s + 3 个 p → 4 个 sp³ 杂化轨道，四面体（约 109.5°）。实例：CH₄、NH₃、H₂O。</strong>含孤对时外形变为三角锥或 V 形。' },
      { type: 'list', items: ['CH₄：4 个 sp³ 全成键 → 正四面体', 'NH₃：3 成键 + 1 孤对 → 三角锥', 'H₂O：2 成键 + 2 孤对 → V 形'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">sp³ 杂化：4 个 sp³ 指向四面体</text><circle cx="200" cy="170" r="24" fill="#b5651d"/><circle cx="250" cy="120" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="250" cy="220" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="150" cy="120" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="150" cy="220" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="200" y="255" font-size="12" fill="#4a3724" text-anchor="middle">CH₄ 正四面体</text><circle cx="480" cy="170" r="24" fill="#b5651d"/><circle cx="530" cy="120" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="530" cy="220" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="430" cy="170" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="430" y="130" font-size="12" fill="#d98e3a" text-anchor="middle">孤对</text><text x="480" y="255" font-size="12" fill="#4a3724" text-anchor="middle">NH₃ 三角锥（1孤对）</text></svg>', caption: '图3　sp³ 杂化得 4 个轨道指向四面体；CH₄ 全成键为四面体，NH₃ 含 1 孤对变为三角锥。' },
      { type: 'heading', text: '五、杂化与大 π 键（简介）' },
      { type: 'paragraph', text: '有时多个原子的 p 轨道“肩并肩”地平行排列，所有 p 电子不再局限在两个原子之间，而是“云”在整个原子环或链上自由流动，这种由三个或以上原子共用、平行重叠形成的 π 键叫大 π 键（离域 π 键）。例如苯 C₆H₆ 里 6 个 C 各拿出一个 p 轨道，形成覆盖整个六元环的大 π 键，使苯特别稳定。高中只要求知道“有这回事”、能认出常见的大 π 键即可。' },
      { type: 'keypoint', label: '重点·大 π 键（离域 π 键）', text: '<strong>当三个或更多原子的 p 轨道平行重叠、电子在多个原子间“流动”共用时，形成大 π 键（离域 π 键）。</strong>典型如苯环。它和只属于两个原子的普通 π 键不同。' },
      { type: 'warn', label: '易错·杂化轨道数 = 参与轨道数', text: '杂化不改变轨道总数。1 个 s + 1 个 p = 2 个 sp；1 个 s + 2 个 p = 3 个 sp²；1 个 s + 3 个 p = 4 个 sp³。别把 sp³ 记成“3 个轨道”。另外，杂化轨道只用于 σ 键和孤对，π 键一定来自“未参与杂化”的 p 轨道，这是判断双键、三键里 π 键来源的关键。' },
      { type: 'example', label: '例题·杂化与构型', text: '题目：下列关于杂化与分子构型，正确的是？<br>A. CH₄ 中 C 为 sp² 杂化<br>B. CO₂ 中 C 为 sp 杂化、直线形<br>C. BF₃ 中 B 为 sp³ 杂化<br>D. NH₃ 中 N 为 sp 杂化<br><br><strong>解析</strong>：CH₄ 的 C 是 sp³ 杂化（四面体），A 错；CO₂ 的 C 用 1 个 s + 1 个 p 杂化为 sp，两 sp 轨道直线排布、分子直线形，B 正确；BF₃ 的 B 是 sp² 杂化（平面三角），C 错；NH₃ 的 N 是 sp³ 杂化（1 孤对成三角锥），D 错。故选 B。' },
      { type: 'tip', label: '提示·杂化与 VSEPR 配合', text: '杂化轨道理论和 VSEPR 是“两条腿走路”：先用 VSEPR 由电子对数推出构型（直线/平面三角/四面体），再用杂化类型去对应（sp/sp²/sp³）。两者结论一致时最可靠。遇到含孤对的分子（NH₃、H₂O），杂化看的是“电子对总数”而非“配体数”，所以 NH₃、H₂O 仍是 sp³。' }
    ],
    exercises: [
      { type: 'choice', question: 'CO₂ 分子中 C 原子的杂化类型及分子构型是？', options: ['sp²，平面三角形', 'sp，直线形', 'sp³，正四面体', 'sp³，V 形'], answer: 'sp，直线形', explanation: 'CO₂ 中心 C 用 1 个 s 轨道与 1 个 p 轨道杂化，得到 2 个 sp 杂化轨道，分别指向直线两端，分子呈直线形。未杂化的 p 轨道再与 O 形成 π 键，所以 C=O 为双键。故 C 是 sp 杂化、分子直线形。' },
      { type: 'choice', question: '乙烯 C₂H₄ 中每个 C 原子的杂化类型是？', options: ['sp', 'sp²', 'sp³', '不杂化'], answer: 'sp²', explanation: '乙烯每个 C 用 1 个 s 与 2 个 p 杂化为 3 个 sp² 轨道（形成 3 个 σ 键），剩下 1 个 p 轨道与另一个 C 的 p 轨道肩并肩形成 π 键，所以 C=C 双键 = 1σ + 1π，C 为 sp² 杂化。' },
      { type: 'choice', question: '关于 sp³ 杂化，下列说法正确的是？', options: ['1s+1p 得到 2 个轨道', '1s+2p 得到 3 个轨道', '1s+3p 得到 4 个轨道', '只存在于含双键的分子中'], answer: '1s+3p 得到 4 个轨道', explanation: 'sp³ 杂化是 1 个 s 轨道与全部 3 个 p 轨道混合，得到 4 个等价的 sp³ 杂化轨道，指向四面体（约 109.5°），典型如 CH₄、NH₃、H₂O。A、B 分别是 sp、sp² 的轨道数，D 把 sp³ 说成只存于双键也不对。' },
      { type: 'fill', question: 'H₂O 中 O 采取 sp³ 杂化，4 个杂化轨道中有 2 个成键、2 个装___，故分子呈 V 形。', answer: '孤电子对', explanation: 'H₂O 的 O 有 4 个 sp³ 杂化轨道，其中 2 个与 H 成 σ 键、2 个容纳孤电子对。孤对更胖、把 O–H 键下压，所以分子外形是 V 形，底层仍是四面体排布。' },
      { type: 'fill', question: '苯 C₆H₆ 中 6 个 C 各拿出 1 个未杂化的 p 轨道，平行重叠形成一个覆盖整个六元环的___（填“大 π 键”或“σ 键”）。', answer: '大 π 键', explanation: '苯的 6 个 C 均为 sp² 杂化，每个 C 剩 1 个未杂化的 p 轨道，这 6 个 p 轨道平行排列、电子在六个 C 之间流动共用，形成大 π 键（离域 π 键），使苯环特别稳定。它不是只属于两个原子的普通 σ 键或定域 π 键。' }
    ]
  });
})();
