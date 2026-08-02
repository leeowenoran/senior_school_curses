/* ============================================================
 * 高一化学 · 必修 第二册 · 第七章 有机化合物
 * 课时15：乙酸与酯化反应
 * 数据注入：chemistry.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u15',
    name: '乙酸与酯化反应',
    chapter: '必修 第二册 · 第七章 有机化合物',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、食醋里的酸味主角' },
      { type: 'paragraph', text: '家里做菜用的食醋，酸味来自一种叫乙酸的物质，食醋里大约含 3% 到 5% 的乙酸。纯净的乙酸在低温下会凝成像冰一样的晶体，所以俗称"冰醋酸"。它无色、有刺激性气味，能溶于水，是日常生活和工业上都常见的有机酸。' },
      { type: 'keypoint', label: '重点·乙酸的组成', text: '<strong>乙酸的分子式是 CH₃COOH，结构可看成 CH₃—COOH，特征官能团是羧基 —COOH。</strong>含两个碳的有机酸叫乙酸，它是羧酸家族里最简单、最常见的一员。' },
      { type: 'paragraph', text: '乙酸有酸性，能使紫色的石蕊溶液变红，也能和活泼金属、碱、碳酸钠等反应。不过它的酸性比盐酸、硫酸弱得多，属于弱酸，在水中只有一小部分分子电离出 H⁺。' },
      { type: 'list', items: ['食醋的酸味来自乙酸，纯乙酸俗称冰醋酸', '乙酸有酸性，能使石蕊变红', '乙酸能和乙醇反应生成有香味的乙酸乙酯'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙酸结构：CH₃—COOH，特征基团是羧基 —COOH</text><rect x="60" y="100" width="150" height="70" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="135" y="140" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">CH₃—</text><rect x="230" y="100" width="380" height="70" rx="10" fill="#d98e3a" stroke="#b5651d" stroke-width="2"/><text x="420" y="140" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="bold">—COOH（羧基）</text><text x="340" y="225" font-size="13" fill="#4a3724" text-anchor="middle">羧基由 C=O（羰基）和 —OH（羟基）相连组成，使乙酸显酸性</text></svg>', caption: '图1　乙酸 CH₃—COOH 的结构简式，橙色方框是羧基 —COOH，由羰基和羟基相连而成。' },
      { type: 'heading', text: '二、羧基——乙酸的官能团' },
      { type: 'paragraph', text: '羧基 —COOH 长得像一个羰基 C=O 再接一个羟基 —OH。正是这个组合让乙酸既表现出"酸"的脾气（能电离出 H⁺），又保留了有机物能发生取代、酯化等反应的特性。只要有机物里带羧基，我们就把它归为羧酸。' },
      { type: 'warn', label: '易错·羧基不是羟基', text: '羧基写作 <strong>—COOH</strong>，羟基写作 —OH，两者不是一回事：羧基比羟基多了一个 C=O，因此乙酸有酸性而乙醇（只有 —OH）溶液不显碱性。<strong>乙酸是弱酸</strong>，别把它和盐酸、硫酸那种强酸混淆，它在水中只部分电离。' },
      { type: 'table', headers: ['对比项', '乙醇 C₂H₅OH', '乙酸 CH₃COOH'], rows: [['官能团', '羟基 —OH', '羧基 —COOH'], ['溶液酸碱性', '中性', '酸性（弱酸）'], ['与碳酸钠', '不反应', '放出二氧化碳'], ['气味', '特殊酒香', '刺激性酸味']] },
      { type: 'heading', text: '三、酯化反应' },
      { type: 'paragraph', text: '把乙酸和乙醇混在一起，加入浓硫酸并加热，它们会"手拉手"生成一种带水果香味的物质——乙酸乙酯，同时放出一份水。这类酸和醇作用生成酯和水的反应，就叫酯化反应。做菜时加酒又加醋，锅里微微加热，也会悄悄发生类似的酯化，产生诱人的香味。' },
      { type: 'keypoint', label: '重点·酯化反应', text: '<strong>酯化反应：酸与醇在浓硫酸催化、加热条件下生成酯和水。</strong>记法口诀是"酸脱羟基（—OH），醇脱氢（—H）"。乙酸与乙醇的反应为：CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O（浓硫酸，加热）。' },
      { type: 'example', label: '例题·写酯化产物', text: '乙酸 CH₃COOH 与乙醇 C₂H₅OH 发生酯化反应，生成物是？<br><br><strong>解析</strong>：按"酸脱羟基、醇脱氢"的规律，乙酸脱去 —OH，乙醇脱去 —H，两者结合成酯键 —COO—，得到<strong>乙酸乙酯 CH₃COOC₂H₅</strong>，同时生成一份水 H₂O。所以产物是乙酸乙酯和水。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">酯化反应：酸脱羟基，醇脱氢，生成酯和水</text><rect x="30" y="80" width="290" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="175" y="118" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">CH₃COOH（酸）</text><text x="175" y="148" font-size="12" fill="#d98e3a" text-anchor="middle">脱去 —OH</text><rect x="360" y="80" width="290" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="505" y="118" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">C₂H₅OH（醇）</text><text x="505" y="148" font-size="12" fill="#d98e3a" text-anchor="middle">脱去 —H</text><text x="340" y="210" font-size="22" fill="#b5651d" text-anchor="middle" font-weight="bold">→</text><rect x="80" y="230" width="300" height="60" rx="10" fill="#d98e3a" stroke="#b5651d" stroke-width="2"/><text x="230" y="266" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">CH₃COOC₂H₅（酯）</text><rect x="410" y="230" width="190" height="60" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="505" y="266" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">H₂O（水）</text></svg>', caption: '图2　酯化反应中，乙酸脱去羟基 —OH、乙醇脱去氢 —H，结合生成乙酸乙酯 CH₃COOC₂H₅ 和水。' },
      { type: 'heading', text: '四、乙酸乙酯与酯的香味' },
      { type: 'paragraph', text: '乙酸乙酯 CH₃COOC₂H₅ 是一种有水果清香的无色液体，常用作溶剂，也添加到食品香精里。更广泛地说，酯类化合物大多带有令人愉快的香味——苹果、香蕉、菠萝的香气里都有不同的酯。所以酯化反应不仅是个化学知识点，也和"香味"直接相关。' },
      { type: 'tip', label: '提示', text: '酯化反应是可逆反应（用 ⇌ 表示），生成的酯和水可能又变回酸和醇。实际实验里加入<strong>浓硫酸</strong>既作催化剂又吸水，把生成的水"搬走"，就能推动反应更多走向生成酯的一边，提高乙酸乙酯的产量。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙酸乙酯：CH₃—C(=O)—O—C₂H₅，水果香味的代表</text><rect x="60" y="100" width="170" height="70" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="145" y="140" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">CH₃—C(=O)—O—</text><rect x="250" y="100" width="170" height="70" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="335" y="140" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">—C₂H₅</text><text x="430" y="100" font-size="14" fill="#d98e3a" text-anchor="middle">酯键</text><text x="200" y="135" font-size="18" fill="#b5651d" text-anchor="middle">⭐</text><text x="340" y="225" font-size="13" fill="#4a3724" text-anchor="middle">很多水果的香味来自不同酯，乙酸乙酯就是其中之一</text></svg>', caption: '图3　乙酸乙酯含酯键 —COO—，是带有水果清香的酯类代表物。' },
      { type: 'list', items: ['酯化反应通式：酸 + 醇 → 酯 + 水（浓硫酸催化、加热）', '记忆口诀："酸脱羟基醇脱氢"', '酯类多有香味，常用于香料、溶剂和食品香精'] },
      { type: 'example', label: '例题·判断反应物', text: '要制取有香味的乙酸乙酯，需要下列哪一组反应物？<br>A. 乙酸和乙醇<br>B. 乙酸和甲烷<br>C. 乙醇和水<br>D. 乙酸和氢气<br><br><strong>解析</strong>：酯化反应是<strong>酸与醇</strong>在浓硫酸、加热下生成酯和水的反应。乙酸提供酸、乙醇提供醇，二者酯化得到乙酸乙酯 CH₃COOC₂H₅。甲烷、水、氢气都不能和酸发生酯化。因此选 A。' },
      { type: 'warn', label: '易错·别写反脱去的基团', text: '酯化反应记成"<strong>酸脱羟基、醇脱氢</strong>"，不是反过来。若记错成"酸脱氢、醇脱羟基"，写出的酯键位置就会错，产物结构也会错。练习时先在结构式上分别圈出乙酸的 —OH 和乙醇的 —H，再连成 —COO— 酯键，最稳妥。' }
    ],
    exercises: [
      { type: 'choice', question: '乙酸的官能团是下列哪一个？', options: ['羟基 —OH', '羧基 —COOH', '醛基 —CHO', '碳碳双键 C=C'], answer: '羧基 —COOH', explanation: '乙酸结构简式为 CH₃—COOH，分子里决定其酸性和反应特性的原子团是羧基 —COOH，它由羰基 C=O 和羟基 —OH 相连构成。羟基在乙醇里、醛基在乙醛里、碳碳双键在乙烯里，都不是乙酸的官能团。' },
      { type: 'choice', question: '乙酸与乙醇在浓硫酸、加热条件下发生的反应类型是？', options: ['取代反应', '酯化反应', '加成反应', '加聚反应'], answer: '酯化反应', explanation: '酸与醇在浓硫酸催化、加热下生成酯和水的反应叫酯化反应，乙酸和乙醇生成乙酸乙酯 CH₃COOC₂H₅ 与水，正属于酯化反应。它本质也是取代，但题目明确问这一特定类型，应选"酯化反应"。' },
      { type: 'choice', question: '乙酸与乙醇酯化时，生成的水中的氧来自哪里？', options: ['来自乙醇的 —OH', '来自乙酸的 —OH', '来自乙酸的甲基', '来自空气中的氧'], answer: '来自乙酸的 —OH', explanation: '酯化反应按"酸脱羟基、醇脱氢"进行：乙酸脱去羧基上的 —OH，乙醇脱去羟基上的 —H，两者结合成水 H₂O。所以水中的氧来自乙酸脱下的羟基 —OH，而不是乙醇或空气。' },
      { type: 'fill', question: '乙酸（CH₃COOH）与乙醇（C₂H₅OH）在浓硫酸、加热下酯化，生成的酯叫___，其化学式为 CH₃COOC₂H₅。', answer: '乙酸乙酯', explanation: '乙酸和乙醇发生酯化反应，酸脱羟基、醇脱氢，生成带有水果香味的乙酸乙酯，化学式为 CH₃COOC₂H₅，同时放出一份水。乙酸乙酯是最典型的酯类代表物，常用于溶剂和食品香精。' },
      { type: 'fill', question: '酯化反应是可逆反应，实验室中常加入___既作催化剂又吸收生成的水，使反应更多走向生成酯的一方。', answer: '浓硫酸', explanation: '酯化反应是可逆反应，用 ⇌ 表示。加入浓硫酸有双重作用：一是作催化剂加快反应速率，二是吸水把生成的水"搬走"，根据平衡移动原理，减少生成物浓度能推动反应正向进行，提高乙酸乙酯的产率。' }
    ]
  });
})();
