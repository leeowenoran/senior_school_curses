/* ============================================================
 * 高一化学 · 必修 第二册 · 第六章 化学反应与能量
 * 课时9：原电池
 * 数据注入：chemistry.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u9',
    name: '原电池',
    chapter: '必修 第二册 · 第六章 化学反应与能量',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、原电池：让化学能直接变成电能' },
      { type: 'paragraph', text: '你手里的遥控器、手电筒靠电池供电。电池为什么能发电？核心装置叫原电池。它把化学反应里"电子的转移"引导到外电路中形成电流，从而把化学能直接变成电能。最早的化学电源是伏打发明的，所以也叫伏打电池。' },
      { type: 'keypoint', label: '重点·原电池定义', text: '<strong>原电池是利用氧化还原反应，把化学能转化为电能的装置。</strong>它的本质是：让氧化反应和还原反应分别在两块电极上发生，电子通过外导线从一极流向另一极，就形成了电流。' },
      { type: 'paragraph', text: '要形成一个原电池，一般需要四样东西：两种活泼性不同的金属（或一种金属一种能导电的非金属如石墨）、电解质溶液、构成闭合回路、并且总反应要是自发的氧化还原反应。少一样都发不了电。' },
      { type: 'list', items: ['两种活泼性不同的电极（如锌和铜，或金属与石墨）', '有电解质溶液（如稀硫酸、硫酸铜溶液）', '两极用导线相连形成外电路，并构成闭合回路', '总反应必须是能自发进行的氧化还原反应'] },
      { type: 'heading', text: '二、经典例子：锌铜原电池' },
      { type: 'paragraph', text: '把一块锌片和一块铜片插进稀硫酸里，再用导线把两极连起来，中间接一个小灯泡，灯泡就亮了。这就是最简单的锌铜原电池。锌比铜活泼，所以锌片是负极，铜片是正极。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">锌铜原电池：化学能转化为电能</text><rect x="180" y="120" width="320" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="295" font-size="12" fill="#4a3724" text-anchor="middle">稀硫酸（电解质溶液）</text><rect x="240" y="80" width="16" height="140" fill="#d98e3a"/><text x="248" y="70" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">Zn 负极</text><rect x="420" y="80" width="16" height="140" fill="#b5651d"/><text x="428" y="70" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">Cu 正极</text><circle cx="432" cy="160" r="4" fill="#4a3724"/><circle cx="432" cy="180" r="4" fill="#4a3724"/><text x="455" y="172" font-size="12" fill="#4a3724" text-anchor="middle">H₂气泡</text><line x1="248" y1="80" x2="248" y2="50" stroke="#4a3724" stroke-width="2"/><line x1="428" y1="80" x2="428" y2="50" stroke="#4a3724" stroke-width="2"/><line x1="248" y1="50" x2="380" y2="50" stroke="#4a3724" stroke-width="2"/><rect x="360" y="36" width="40" height="28" rx="4" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="380" y="55" font-size="11" fill="#4a3724" text-anchor="middle">灯泡</text><line x1="400" y1="50" x2="428" y2="50" stroke="#4a3724" stroke-width="2"/><text x="248" y="300" font-size="11" fill="#d98e3a" text-anchor="middle">e⁻ 流出</text><text x="428" y="300" font-size="11" fill="#d98e3a" text-anchor="middle">e⁻ 流入</text></svg>', caption: '图1　锌铜原电池：锌片作负极溶解，铜片表面冒氢气，电子经导线流向铜极点亮灯泡。' },
      { type: 'keypoint', label: '重点·两极反应', text: '<strong>负极（锌）发生氧化反应：Zn → Zn²⁺ + 2e⁻，锌不断溶解。</strong><br><strong>正极（铜）发生还原反应：2H⁺ + 2e⁻ → H₂↑，铜片表面冒气泡。</strong><br>总反应：Zn + 2H⁺ → Zn²⁺ + H₂↑。电子从负极经导线流向正极，电流方向相反。' },
      { type: 'table', headers: ['对比项', '负极（锌）', '正极（铜）'], rows: [['活泼性', '较活泼', '较不活泼'], ['反应类型', '氧化', '还原'], ['电极反应', 'Zn → Zn²⁺ + 2e⁻', '2H⁺ + 2e⁻ → H₂↑'], ['现象', '锌片逐渐溶解', '铜片表面有气泡'], ['电子流向', '电子流出', '电子流入']] },
      { type: 'heading', text: '三、怎么判断正负极' },
      { type: 'paragraph', text: '拿到一个原电池，先判断哪一极是负、哪一极是正。最实用的办法是看活泼性：两种金属里更活泼的那块作负极；如果一极是金属、一极是石墨或惰性电极，通常金属作负极。另外，发生氧化反应（失电子）的一极是负极，发生还原反应（得电子）的一极是正极。' },
      { type: 'example', label: '例题·判断电极', text: '在锌铜原电池中，下列说法正确的是？<br>A. 铜片是负极，发生氧化反应<br>B. 锌片是负极，发生氧化反应<br>C. 电子从铜极流向锌极<br>D. 正极产生锌离子<br><br><strong>解析</strong>：锌比铜活泼，所以<strong>锌片作负极，发生氧化反应</strong> Zn → Zn²⁺ + 2e⁻，A 错 B 对。电子从负极（锌）经导线流向正极（铜），C 错。Zn²⁺ 在负极产生，正极产生的是 H₂，D 错。故选 B。' },
      { type: 'warn', label: '易错·正负极别搞反', text: '<strong>负极是"失电子、被氧化、溶解"的一极，不是带负电的意思；正极是"得电子、被还原"的一极。</strong>很多同学把"负极"误想成"显负电"，其实电极的正负号是按反应类型定的。判断时优先用"活泼性 + 反应类型"双保险，别只凭一个线索下结论。' },
      { type: 'list', items: ['活泼性差异法：较活泼金属作负极', '反应类型法：失电子氧化的一极是负极', '现象法：溶解的一极是负极，冒气泡或析出金属的一极是正极', '电子流向法：电子流出的一极是负极'] },
      { type: 'heading', text: '四、原电池的实际应用' },
      { type: 'paragraph', text: '原电池不只是课堂实验，它就在我们身边。干电池、钮扣电池、手机里的锂电池、电动车的蓄电池，本质上都是巧妙设计的原电池。还有燃料电池，比如氢氧燃料电池，用氢气和氧气反应发电，产物只有水，非常清洁。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">化学能 → 电能：原电池把反应能量变成电流</text><rect x="60" y="90" width="160" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="140" y="130" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">化学能</text><text x="140" y="160" font-size="12" fill="#4a3724" text-anchor="middle">氧化还原反应</text><rect x="460" y="90" width="160" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="540" y="130" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">电能</text><text x="540" y="160" font-size="12" fill="#4a3724" text-anchor="middle">驱动灯泡/手机</text><rect x="270" y="110" width="140" height="80" rx="8" fill="#d98e3a"/><text x="340" y="145" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">原电池装置</text><line x1="220" y1="150" x2="270" y2="150" stroke="#b5651d" stroke-width="3"/><line x1="410" y1="150" x2="460" y2="150" stroke="#b5651d" stroke-width="3"/><polygon points="270,150 258,144 258,156" fill="#b5651d"/><polygon points="460,150 448,144 448,156" fill="#b5651d"/><text x="340" y="240" font-size="13" fill="#d98e3a" text-anchor="middle">干电池、锂电池、氢氧燃料电池都基于原电池原理</text></svg>', caption: '图2　原电池把化学能（来自氧化还原反应）转化为电能，是现代各种便携电源的核心。' },
      { type: 'tip', label: '提示·金属腐蚀', text: '原电池原理也能解释钢铁生锈：在潮湿空气里，铁和其中的杂质碳构成无数微小原电池，铁作负极被氧化成 Fe²⁺，最终变成铁锈。所以给船体、管道装上更活泼的锌块（牺牲阳极），让锌先被腐蚀，就能保护铁，这叫"牺牲阳极的阴极保护法"。' },
      { type: 'heading', text: '五、废旧电池与环境保护' },
      { type: 'paragraph', text: '电池里有锌、锰，也有汞、镉、铅等重金属。一节废电池烂在土里，渗出的重金属会污染大片土壤和水源，危害很大。所以废旧电池不能随手扔，要分类回收。另一方面，研发更环保、可充电、寿命长的电池，也是化学的重要任务。' },
      { type: 'warn', label: '易错·能量守恒', text: '原电池并不是"无中生有"造出电，而是把反应里本就存在的<strong>化学能转化成了电能</strong>，总的能量始终守恒。反应放出的总能量 = 电能 + 少量热能。因此反应物越活泼、反应越剧烈，可转化的能量往往越多，电池电压也越高。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">原电池中的能量流向</text><rect x="70" y="100" width="160" height="100" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="150" y="140" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">化学能</text><text x="150" y="170" font-size="12" fill="#4a3724" text-anchor="middle">反应放出</text><line x1="230" y1="150" x2="300" y2="150" stroke="#d98e3a" stroke-width="3"/><polygon points="300,150 290,144 290,156" fill="#d98e3a"/><rect x="300" y="100" width="150" height="100" rx="10" fill="#d98e3a"/><text x="375" y="145" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">电能</text><text x="375" y="172" font-size="11" fill="#ffffff" text-anchor="middle">主要输出</text><line x1="450" y1="150" x2="520" y2="150" stroke="#b5651d" stroke-width="3"/><polygon points="520,150 510,144 510,156" fill="#b5651d"/><rect x="520" y="100" width="120" height="100" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="580" y="145" font-size="13" fill="#4a3724" text-anchor="middle">少量</text><text x="580" y="170" font-size="12" fill="#4a3724" text-anchor="middle">热能</text><text x="340" y="255" font-size="13" fill="#d98e3a" text-anchor="middle">总能量守恒：化学能 = 电能 + 少量热能</text></svg>', caption: '图3　原电池把反应释放的化学能主要变成电能，另有少量以热能散失，总能量守恒。' },
      { type: 'example', label: '例题·总反应书写', text: '锌铜原电池中，总反应方程式正确的是？<br>A. Zn + Cu → ZnCu<br>B. Zn + 2H⁺ → Zn²⁺ + H₂↑<br>C. Cu + 2H⁺ → Cu²⁺ + H₂↑<br>D. 2Zn + O₂ → 2ZnO<br><br><strong>解析</strong>：锌铜原电池里，负极锌失电子 Zn → Zn²⁺ + 2e⁻，正极溶液里的 H⁺ 得电子 2H⁺ + 2e⁻ → H₂↑，两式相加得到总反应 <strong>Zn + 2H⁺ → Zn²⁺ + H₂↑</strong>，选 B。铜不活泼，不参与反应本身。' }
    ],
    exercises: [
      { type: 'choice', question: '关于原电池，下列说法正确的是？', options: ['原电池把电能转化为化学能', '原电池利用氧化还原反应把化学能转化为电能', '原电池不需要电解质溶液也能工作', '原电池的两极必须是同一种金属'], answer: '原电池利用氧化还原反应把化学能转化为电能', explanation: '原电池的本质是利用自发的氧化还原反应，让氧化和还原分别在两电极发生，电子经外电路流动形成电流，从而把化学能转化为电能。它正好与电解相反（电解是电能变化学能）；原电池必须有电解质溶液和两种不同活泼性的电极才能构成，所以其余三项均错。' },
      { type: 'choice', question: '在锌铜原电池（稀硫酸为电解质）中，负极发生的反应是？', options: ['2H⁺ + 2e⁻ → H₂↑', 'Zn → Zn²⁺ + 2e⁻', 'Cu → Cu²⁺ + 2e⁻', 'Zn²⁺ + 2e⁻ → Zn'], answer: 'Zn → Zn²⁺ + 2e⁻', explanation: '锌比铜活泼，锌片作负极，发生氧化反应失去电子：Zn → Zn²⁺ + 2e⁻，锌片逐渐溶解。正极（铜）上溶液中的 H⁺ 得电子生成 H₂ 气泡。Cu → Cu²⁺ 不会发生，因为铜不如氢活泼；Zn²⁺ + 2e⁻ → Zn 是还原，发生在正极方向而非负极。' },
      { type: 'choice', question: '下列做法中，能加快锌铜原电池产生电流的是？', options: ['把稀硫酸换成更浓的硫酸减少离子', '增大两极之间的距离', '使用更活泼的负极并增大接触面积', '断开外电路导线'], answer: '使用更活泼的负极并增大接触面积', explanation: '原电池的电流大小与反应的剧烈程度和离子迁移速率有关。使用更活泼的负极、增大电极与溶液的接触面积，都能让反应更快、电子转移更顺畅，从而增大电流。换成"更浓"若指浓硫酸则会使锌钝化反而不行；增大两极距离、断开电路都会削弱或中断电流。' },
      { type: 'fill', question: '在原电池中，发生氧化反应、失去电子的一极称为___极；电子从这一极经外导线流向另一极。', answer: '负', explanation: '原电池的两极按反应类型命名：失去电子、发生氧化反应的一极是负极；得到电子、发生还原反应的一极是正极。电子由负极流出，经外导线流向正极，而电流方向与电子流向相反。判断时可用"活泼性、反应类型、现象、电子流向"多种方法互相印证。' },
      { type: 'fill', question: '锌铜原电池的总反应可表示为：Zn + 2H⁺ → ___ + H₂↑（填离子符号）。', answer: 'Zn²⁺', explanation: '负极反应 Zn → Zn²⁺ + 2e⁻，正极反应 2H⁺ + 2e⁻ → H₂↑，两式相加消去电子，得到总反应 Zn + 2H⁺ → Zn²⁺ + H₂↑。所以空格填锌离子 Zn²⁺。注意电荷守恒：左边 2 个正电荷，右边 Zn²⁺ 带 2 个正电荷，加上中性的 H₂，电荷平衡。' }
    ]
  });
})();
