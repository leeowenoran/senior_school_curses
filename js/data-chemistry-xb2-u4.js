/* ============================================================
 * 化学 · 选择性必修2 物质结构与性质 · 第一章 原子结构与性质
 * 课时4：构造原理与核外电子排布规律
 * 数据注入：chemistry.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u4',
    name: '构造原理与核外电子排布规律',
    chapter: '选择性必修2 物质结构与性质 · 第一章 原子结构与性质',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、构造原理：电子按“能量由低到高”入住' },
      { type: 'paragraph', text: '把原子核外那么多能级按能量从低到高排成一条“入住顺序”，电子就按这个顺序从低能级的“房间”往高能级的“房间”填，这叫构造原理（也叫能量最低原理下的填充顺序）。记住这条顺序，是写电子排布式的基础。' },
      { type: 'keypoint', label: '重点·构造原理填充顺序', text: '<strong>1s→2s→2p→3s→3p→4s→3d→4p→5s→4d→5p→6s→4f→5d→6p→7s→5f→6d→7p。</strong>注意 4s 排在 3d 前面（能级交错），所以先填 4s 再填 3d。' },
      { type: 'list', items: ['先填内层低能级：1s、2s、2p、3s、3p', '出现交错：填完 3p 后填 4s，再填 3d', '继续：4p、5s、4d、5p、6s、4f、5d、6p……'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">构造原理：电子按能级由低到高依次入住</text><text x="60" y="80" font-size="13" fill="#4a3724" text-anchor="middle">能量升高 →</text><rect x="40" y="110" width="70" height="40" rx="6" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="75" y="135" font-size="13" fill="#4a3724" text-anchor="middle">1s</text><rect x="120" y="110" width="70" height="40" rx="6" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="155" y="135" font-size="13" fill="#4a3724" text-anchor="middle">2s</text><rect x="200" y="110" width="70" height="40" rx="6" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="235" y="135" font-size="13" fill="#4a3724" text-anchor="middle">2p</text><rect x="280" y="110" width="70" height="40" rx="6" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="315" y="135" font-size="13" fill="#4a3724" text-anchor="middle">3s</text><rect x="360" y="110" width="70" height="40" rx="6" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="395" y="135" font-size="13" fill="#4a3724" text-anchor="middle">3p</text><rect x="440" y="110" width="70" height="40" rx="6" fill="#d98e3a" stroke="#b5651d" stroke-width="2"/><text x="475" y="135" font-size="13" fill="#ffffff" text-anchor="middle">4s</text><rect x="520" y="110" width="70" height="40" rx="6" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="555" y="135" font-size="13" fill="#4a3724" text-anchor="middle">3d</text><text x="340" y="210" font-size="13" fill="#4a3724" text-anchor="middle">4s 排在 3d 前（能级交错）</text><text x="340" y="250" font-size="12" fill="#d98e3a" text-anchor="middle">其后：4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p …</text></svg>', caption: '图1　构造原理填充顺序：电子严格按能级由低到高入住，注意 4s 插在 3d 之前。' },
      { type: 'heading', text: '二、能量最低原理：电子优先占“便宜”的房间' },
      { type: 'paragraph', text: '能量最低原理说：在基态（最稳定状态）原子里，电子总是尽可能先占据能量最低的轨道，让整个原子能量最低，就像水总往低处流、东西总爱落在稳固的低处。构造原理的填充顺序，正是能量最低原理的直接体现。' },
      { type: 'keypoint', label: '重点·能量最低原理', text: '<strong>基态原子的电子优先占据能量最低的原子轨道，使整个原子的总能量最低。</strong>这是排电子首先要遵守的总原则。' },
      { type: 'heading', text: '三、泡利原理：一个“床”最多睡两人且朝向相反' },
      { type: 'paragraph', text: '泡利原理规定：一个原子轨道里最多只能容纳 2 个电子，而且这 2 个电子的“自旋”方向必须相反。可以把它想象成一张单人床（一个轨道）其实能挤两个人睡，但必须“背对背”（自旋相反），不能同向。通常用 ↑↓ 表示同一轨道里的两个反向自旋电子。' },
      { type: 'keypoint', label: '重点·泡利不相容原理', text: '<strong>每个原子轨道最多容纳 2 个电子，且这 2 个电子自旋方向相反。</strong>结合轨道数可知：s(1轨道)最多2电子、p(3轨道)最多6、d(5轨道)最多10、f(7轨道)最多14。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">泡利原理：一个轨道最多 2 个电子，自旋相反</text><rect x="240" y="90" width="200" height="80" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="270" y="140" font-size="30" fill="#b5651d" text-anchor="middle">↑</text><text x="410" y="140" font-size="30" fill="#b5651d" text-anchor="middle">↓</text><text x="340" y="200" font-size="14" fill="#4a3724" text-anchor="middle">一个轨道里的两个电子：↑↓（自旋相反）</text><text x="340" y="230" font-size="12" fill="#d98e3a" text-anchor="middle">不能两个都 ↑ 或都 ↓</text></svg>', caption: '图2　同一原子轨道里最多容纳 2 个电子，且自旋方向必须相反（↑↓）。' },
      { type: 'heading', text: '四、洪特规则：先“一人一间”，再考虑成对' },
      { type: 'paragraph', text: '洪特规则说：当电子填入能量相同的等价轨道（比如 p 能级的 3 个轨道）时，电子会先“一人占一间”，分占不同轨道且自旋方向相同；只有当每个轨道都先住了一个电子后，才会出现两个电子挤同一轨道（成对）。这就像进宿舍，先每人一间，住满了才双人合住。' },
      { type: 'keypoint', label: '重点·洪特规则', text: '<strong>电子在等价（能量相同）的轨道上排布时，优先分占不同轨道，且自旋方向相同。</strong>这样排布体系能量最低、最稳定。' },
      { type: 'list', items: ['等价轨道（如 p_x、p_y、p_z）能量相同', '电子先一个轨道放一个，尽量不配对', '等所有等价轨道都各有 1 个电子后，再两两配对'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">洪特规则：等价轨道先分占、自旋相同</text><rect x="180" y="90" width="90" height="70" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="225" y="140" font-size="28" fill="#b5651d" text-anchor="middle">↑</text><rect x="300" y="90" width="90" height="70" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="345" y="140" font-size="28" fill="#b5651d" text-anchor="middle">↑</text><rect x="420" y="90" width="90" height="70" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="465" y="140" font-size="28" fill="#b5651d" text-anchor="middle">↑</text><text x="340" y="200" font-size="14" fill="#4a3724" text-anchor="middle">p 能级 3 个电子：↑  ↑  ↑（分占三轨道、自旋相同）</text><text x="340" y="230" font-size="12" fill="#d98e3a" text-anchor="middle">而不是 ↑↓  ↑  □（过早成对）</text></svg>', caption: '图3　洪特规则示意：3 个电子分占 p 能级的 3 个等价轨道，且自旋方向相同。' },
      { type: 'heading', text: '五、洪特规则特例：全空、半满、全满特别稳' },
      { type: 'paragraph', text: '洪特规则还有个特例：当等价轨道处于“全空、半满、全满”状态时，体系特别稳定。最常见例子是铬 Cr 和铜 Cu。按普通顺序，Cr 应该是 3d⁴ 4s²，但 3d⁵（半满）4s¹ 更稳定，所以实际是 [Ar] 3d⁵ 4s¹；Cu 应该是 3d⁹ 4s²，但 3d¹⁰（全满）4s¹ 更稳定，实际是 [Ar] 3d¹⁰ 4s¹。' },
      { type: 'keypoint', label: '重点·特例的三种稳定态', text: '<strong>等价轨道“全空（如 p⁰、d⁰）”“半满（如 p³、d⁵）”“全满（如 p⁶、d¹⁰）”时能量较低、较稳定。</strong>遇到 Cr、Cu 等要写特例排布。' },
      { type: 'table', headers: ['原子', '原子序数', '基态电子排布式（简写）'], rows: [['O 氧', '8', '1s² 2s² 2p⁴'], ['Fe 铁', '26', '[Ar] 3d⁶ 4s²'], ['Cr 铬', '24', '[Ar] 3d⁵ 4s¹（半满特例）'], ['Cu 铜', '29', '[Ar] 3d¹⁰ 4s¹（全满特例）']] },
      { type: 'warn', label: '易错·填充顺序 ≠ 书写顺序', text: '写电子排布式时，要先按构造原理顺序“填”，但书写时通常按能层从内到外写（如 Fe 写成 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²，而不是把 4s 写在 3d 前）。另外别把“填充时 4s 先于 3d”和“失电子时先失 4s”搞混：原子失去电子时先失去最外层、即 4s 的电子。' },
      { type: 'example', label: '例题·Cr 的特例排布', text: '题目：根据构造原理与洪特规则特例，基态铬 Cr（24号）的价层部分排布是？<br>A. 3d⁴ 4s²<br>B. 3d⁵ 4s¹<br>C. 3d⁶ 4s⁰<br>D. 3d³ 4s²<br><br><strong>解析</strong>：Cr 有 24 个电子。3d 半满（3d⁵）比 3d⁴ 更稳定，于是 4s 的一个电子“挪”到 3d，形成 3d⁵ 4s¹ 的半满加半满组合，整体能量更低。所以实际排布为 [Ar] 3d⁵ 4s¹，选 B。' },
      { type: 'tip', label: '提示·用“惰性气体核心”简写', text: '写排布式时可把内层已经达到稀有气体结构的部分用方括号加元素符号代替，例如铁可写成 [Ar] 3d⁶ 4s²，既简洁又突出“价层”。读题时看到 [Ar]、[Ne] 这类写法，先把它还原成内层电子数再处理，能减少出错。' }
    ],
    exercises: [
      { type: 'choice', question: '构造原理填充顺序中，填完 3p 之后接下来先填哪个能级？', options: ['3d', '4s', '4p', '4d'], answer: '4s', explanation: '构造原理顺序为 …3p→4s→3d…，因为存在能级交错 E(4s)<E(3d)，所以 3p 之后先填 4s 再填 3d。牢记“4s 插队到 3d 前面”能避免绝大多数填充顺序错误。' },
      { type: 'choice', question: '泡利原理规定一个原子轨道最多容纳几个电子、自旋关系如何？', options: ['1个，同向', '2个，同向', '2个，相反', '4个，相反'], answer: '2个，相反', explanation: '泡利不相容原理：每个原子轨道最多容纳 2 个电子，且这 2 个电子自旋方向相反（记作 ↑↓）。所以“2个，相反”正确；自旋同向会违反原理，一个轨道也不能容纳 4 个电子。' },
      { type: 'choice', question: '关于洪特规则特例，下列排布正确的是？', options: ['Cr 为 3d⁴ 4s²', 'Cu 为 3d⁹ 4s²', 'Cr 为 3d⁵ 4s¹', 'Cu 为 3d⁸ 4s³'], answer: 'Cr 为 3d⁵ 4s¹', explanation: '洪特规则特例：半满 3d⁵、全满 3d¹⁰ 更稳定。Cr 实际为 [Ar]3d⁵4s¹（半满加半满），Cu 实际为 [Ar]3d¹⁰4s¹（全满加半满）。所以只有“Cr 为 3d⁵ 4s¹”正确，其余把特例写反了。' },
      { type: 'fill', question: '构造原理填充顺序中，1s 之后填 2s，2s 之后紧跟着填的能级是___。', answer: '2p', explanation: '构造原理顺序为 1s→2s→2p→3s→3p→4s→3d…，所以 2s 之后紧跟着填 2p。完整记住这条顺序链（必要时配合能级交错处的特例）是正确书写电子排布式的基础。' },
      { type: 'fill', question: '根据洪特规则，p 能级的 3 个等价轨道上填入 3 个电子时，它们应分占 3 个轨道且自旋___（填“相同”或“相反”）。', answer: '相同', explanation: '洪特规则指出，电子在能量相同的等价轨道上排布时，优先分占不同轨道且自旋方向相同，这样体系能量最低。所以 p 能级 3 个电子应分别占 p_x、p_y、p_z 且自旋相同（↑ ↑ ↑），而不是先两两配对。' }
    ]
  });
})();
