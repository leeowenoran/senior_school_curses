/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第三章 交变电流
 * 课时12：变压器
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u12',
    name: '变压器',
    chapter: '选择性必修第二册 · 第三章 交变电流',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、变压器的构造' },
      { type: 'paragraph', text: '变压器是我们身边最常见的电器之一：手机充电器、小区变电箱里都有它。它的核心构造很简单，由三部分组成：一个闭合的铁芯，以及绕在铁芯上的两个（或多个）线圈。接电源的线圈叫原线圈（也叫初级线圈），输出电能的线圈叫副线圈（也叫次级线圈）。两个线圈彼此绝缘、并不直接相连。' },
      { type: 'list', items: ['闭合铁芯：把磁场约束在内部，让磁通量尽量多地穿过两个线圈', '原线圈（初级）：接输入交流电源', '副线圈（次级）：向外输出改变了的电压'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">变压器的构造：铁芯 + 两个线圈</text><rect x="300" y="70" width="80" height="180" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="260" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">铁芯</text><path d="M250,110 q50,-25 100,0 q0,40 -50,40 q-50,0 0,40 q50,25 100,0" fill="none" stroke="#234b45" stroke-width="3"/><text x="200" y="100" font-size="13" fill="#234b45" font-weight="bold">原线圈 n₁</text><path d="M330,150 q50,25 100,0 q0,40 -50,40 q-50,0 0,40 q50,25 100,0" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="470" y="200" font-size="13" fill="#234b45" font-weight="bold">副线圈 n₂</text><line x1="120" y1="110" x2="250" y2="110" stroke="#234b45" stroke-width="2"/><text x="120" y="100" font-size="12" fill="#234b45">输入交流</text><line x1="430" y1="200" x2="560" y2="200" stroke="#234b45" stroke-width="2"/><text x="560" y="190" font-size="12" fill="#234b45">输出</text></svg>', caption: '图1　变压器由闭合铁芯、原线圈（n₁）和副线圈（n₂）组成，两线圈不直接相连，靠磁场联系。' },
      { type: 'heading', text: '二、工作原理——互感' },
      { type: 'paragraph', text: '变压器能改变电压，靠的是"互感"现象。当交变电流流入原线圈，铁芯中就会产生交变的磁场，穿过副线圈的磁通量随之不断变化。根据电磁感应，副线圈里就感应出了电动势，于是在副线圈两端出现了电压。简单说：原线圈的交变磁场"感应"出了副线圈的电压。' },
      { type: 'keypoint', label: '重点·互感原理', text: '<strong>变压器利用互感工作：</strong>原线圈中的交变电流产生交变磁通量，该磁通量穿过副线圈，使副线圈中产生感应电动势，从而得到不同的输出电压。正因为需要"变化的磁通量"，<strong>变压器只能用于交变电流，不能用于直流</strong>。' },
      { type: 'example', label: '例题·为什么变压器不能接直流', text: '如果把变压器原线圈直接接到电池（直流电源）上，副线圈两端会有持续的输出电压吗？<br><br><strong>解析</strong>：<br>不会。直流电流大小方向不变，铁芯中的磁通量保持不变，副线圈中的磁通量不变化，就不会产生感应电动势，副线圈两端没有持续电压。只有接入交变电流，磁通量不断变化，副线圈才有输出。所以变压器只能配交流电使用。' },
      { type: 'paragraph', text: '互感是双向的：实际上副线圈的电流也会反过来影响原线圈，但在理想情况讨论电压比时，我们主要看原线圈如何"感应"出副线圈的电压。铁芯把磁场紧紧关在内部，就是为了让尽量多的磁通量同时穿过两个线圈，提高传递效率。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">互感：原线圈的交变磁场感应出副线圈电压</text><circle cx="180" cy="170" r="55" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><path d="M150,170 a30,30 0 1 1 60,0" fill="none" stroke="#234b45" stroke-width="3"/><text x="180" y="255" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">原线圈（交流）</text><line x1="250" y1="170" x2="430" y2="170" stroke="#4fb3a5" stroke-width="3"/><polygon points="430,162 448,170 430,178" fill="#4fb3a5"/><text x="340" y="150" font-size="13" fill="#234b45" text-anchor="middle">交变磁通量</text><circle cx="500" cy="170" r="55" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><path d="M470,170 a30,30 0 1 0 60,0" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="500" y="255" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">副线圈（感应电压）</text></svg>', caption: '图2　原线圈通交变电流产生交变磁通量，穿过副线圈后感应出电压，这就是互感。' },
      { type: 'heading', text: '三、电压比 U₁ / U₂ = n₁ / n₂' },
      { type: 'paragraph', text: '在忽略能量损耗的"理想变压器"里，原、副线圈每匝上感应的电动势相同。于是线圈两端电压之比，就等于它们的匝数之比。公式写成：U₁ / U₂ = n₁ / n₂。也就是说，副线圈匝数多（n₂ 大于 n₁），输出电压就升高，这是升压变压器；副线圈匝数少，输出电压就降低，这是降压变压器。' },
      { type: 'keypoint', label: '重点·电压比公式', text: '<strong>理想变压器中，原、副线圈的电压之比等于匝数之比：U₁ / U₂ = n₁ / n₂。</strong>升压还是降压，完全看匝数：n₂ 比 n₁ 多就升压，n₂ 比 n₁ 少就降压。日常把高压电降到家用 220 伏，用的就是降压变压器。' },
      { type: 'warn', label: '易错', text: '<strong>电压比公式 U₁ / U₂ = n₁ / n₂ 只适用于理想变压器和交变电流。</strong>它不能用于直流，也不能用于带分接头、或多个副线圈的复杂情况。另外，公式说的是"电压比等于匝数比"，不是"电压等于匝数"，别把比值关系记反、记漏。' },
      { type: 'table', headers: ['变压器类型', '匝数关系', '电压关系', '用途举例'], rows: [['升压变压器', 'n₂ > n₁', 'U₂ > U₁', '发电站把电压升高便于远距离输电'], ['降压变压器', 'n₂ < n₁', 'U₂ < U₁', '小区把高压降为家用 220 伏'], ['隔离变压器', 'n₂ = n₁', 'U₂ = U₁', '隔离电路、保障安全']] },
      { type: 'heading', text: '四、电流比与互感器' },
      { type: 'paragraph', text: '理想变压器几乎不损耗能量，输入功率等于输出功率，即 U₁ × I₁ = U₂ × I₂。把电压比公式代进去，可以得到电流关系：I₁ / I₂ = n₂ / n₁。注意它和电压比"反着来"——升压变压器（n₂ 大）电压高，但电流反而小；降压变压器电流反而大。' },
      { type: 'keypoint', label: '重点·电流比与功率', text: '<strong>理想变压器功率守恒：U₁ × I₁ = U₂ × I₂；由此得电流比 I₁ / I₂ = n₂ / n₁。</strong>匝数多的线圈电压高、电流小；匝数少的线圈电压低、电流大。这正是远距离输电先升压、再降压能减少损耗的原因。' },
      { type: 'list', items: ['电压互感器：把高电压按比例变小，方便仪表安全测量', '电流互感器：把大电流按比例变小，方便测量且隔离高压', '两者实质都是特殊用途的变压器，原理仍是互感'] },
      { type: 'tip', label: '提示', text: '<strong>互感器是变压器的"测量版"应用。</strong>电压互感器二次侧严禁短路（否则烧坏），电流互感器二次侧严禁开路（否则产生危险高压）。记住"压互不开路、流互不短路"的口诀，有助于区分两者使用注意点。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">互感器：把大电压或大电流按比例变小再测量</text><rect x="60" y="90" width="170" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="145" y="116" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">电压互感器</text><text x="145" y="150" font-size="12" fill="#234b45" text-anchor="middle">高压 → 低压</text><text x="145" y="200" font-size="12" fill="#234b45" text-anchor="middle">仪表安全测量</text><rect x="450" y="90" width="170" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="535" y="116" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">电流互感器</text><text x="535" y="150" font-size="12" fill="#234b45" text-anchor="middle">大电流 → 小电流</text><text x="535" y="200" font-size="12" fill="#234b45" text-anchor="middle">隔离又测量</text><text x="340" y="290" font-size="13" fill="#234b45" text-anchor="middle">两者都是变压器，利用互感把被测电量按比例变换</text></svg>', caption: '图3　电压互感器和电流互感器都是变压器的应用，把高电压或大电流按比例变小，供仪表安全测量。' }
    ],
    exercises: [
      { type: 'choice', question: '变压器能够改变电压，所依据的工作原理是？', options: ['自感现象', '互感现象', '静电感应', '电流的磁效应'], answer: '互感现象', explanation: '变压器由原线圈的交变电流产生交变磁通量，该磁通量穿过副线圈并在其中感应出电动势，从而得到不同的输出电压，这正是互感现象。自感是线圈对自身电流变化的阻碍，静电感应与变压器无关，电流的磁效应只说明电流产生磁场，都不能完整解释变压原理。' },
      { type: 'choice', question: '对于理想变压器，原、副线圈的电压关系正确的是？', options: ['U₁ / U₂ = n₁ / n₂', 'U₁ / U₂ = n₂ / n₁', 'U₁ = U₂', 'U₁ × U₂ = n₁ × n₂'], answer: 'U₁ / U₂ = n₁ / n₂', explanation: '理想变压器中每匝线圈感应的电动势相同，所以电压之比等于匝数之比，即 U₁ / U₂ = n₁ / n₂。由此可判断：副线圈匝数多则升压，匝数少则降压。另外两个选项把比例关系弄反或弄错，都不符合变压器规律。' },
      { type: 'choice', question: '关于理想变压器的电流关系，下列说法正确的是？', options: ['电流比与匝数成正比', '升压变压器副线圈电流更大', '电流比 I₁ / I₂ = n₂ / n₁', '原、副线圈电流始终相等'], answer: '电流比 I₁ / I₂ = n₂ / n₁', explanation: '理想变压器功率守恒 U₁ × I₁ = U₂ × I₂，结合电压比 U₁ / U₂ = n₁ / n₂，可推出 I₁ / I₂ = n₂ / n₁。即匝数多的线圈电压高、电流小，匝数少的线圈电压低、电流大，所以升压变压器副线圈电流反而更小，并非更大。' },
      { type: 'fill', question: '利用变压器原理把高电压按比例变小、便于仪表安全测量的装置叫___；把大电流按比例变小的叫___（两空用顿号隔开）。', answer: '电压互感器、电流互感器', explanation: '电压互感器将高电压按比例变换为低电压供测量，电流互感器将大电流按比例变换为小电流供测量，二者实质都是特殊用途的变压器，依靠互感工作。使用时电压互感器二次侧不能短路，电流互感器二次侧不能开路。' },
      { type: 'fill', question: '一理想变压器原线圈匝数 n₁ = 100，副线圈匝数 n₂ = 200，原线圈输入电压 U₁ = 220 伏，则副线圈输出电压 U₂ = ___ 伏。', answer: '440', explanation: '由电压比公式 U₁ / U₂ = n₁ / n₂，可得 U₂ = U₁ × n₂ / n₁。代入数据：U₂ = 220 × 200 / 100 = 440 伏。因为副线圈匝数是原线圈的 2 倍，所以是升压变压器，输出电压 440 伏，正好为输入电压的两倍。' }
    ]
  });
})();
