/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题一 分子动理论
 * 课时1：分子动理论基本内容与微观量估算（阿伏加德罗常数、油膜法）
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u1',
    name: '分子动理论基本内容与微观量估算（阿伏加德罗常数、油膜法）',
    chapter: '热学与近代物理 · 专题一 分子动理论',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、分子动理论的三条基本内容' },
      { type: 'paragraph', text: '我们身边的物质，比如一杯水、一块铁，放大到极微观去看，都是由极其微小、肉眼看不见的"分子"组成的。分子是保持物质化学性质的最小粒子。分子动理论就是用大量分子的集体行为，来解释温度、压强、内能这些宏观热现象的学说。' },
      { type: 'list', items: ['物质是由大量分子组成的，分子之间存在着空隙', '分子永不停息地做无规则运动，这种运动叫做热运动', '分子之间同时存在着引力和斥力'] },
      { type: 'keypoint', label: '重点·分子动理论', text: '<strong>分子动理论把宏观物体的热现象，归结为大量分子永不停息的无规则运动，是热学的微观基础。</strong>三条内容：物质由大量分子组成、分子做无规则热运动、分子间有引力和斥力。' },
      { type: 'heading', text: '二、用油膜法估测分子的大小' },
      { type: 'paragraph', text: '分子太小，不能直接用尺子量。科学家想了个巧妙办法：把一滴油酸滴在水面上，油酸会散开成只有一层分子的"单分子油膜"。把这层油膜看成由一个个小球（分子）紧密排成，那么油膜的厚度就等于分子的直径。已知纯油酸体积 V 和油膜面积 S，就能算出直径 d = V / S。' },
      { type: 'keypoint', label: '重点·油膜法公式', text: '<strong>油膜法测分子直径：d = V / S。</strong>其中 V 是一滴中纯油酸的体积，S 是稳定后油膜的面积。这是"以宏观量测微观量"的经典方法。' },
      { type: 'example', label: '例题·油膜法计算', text: '例：将 1 mL 纯油酸配成 200 mL 酒精溶液。取 1 滴（约 1/100 mL 溶液）滴在水面，形成的单分子油膜面积约为 0.2 m²。求油酸分子直径。<br><strong>解析</strong>：纯油酸体积 V = (1/200) × (1/100) mL = 5×10⁻⁵ mL = 5×10⁻¹¹ m³；分子直径 d = V / S = 5×10⁻¹¹ / 0.2 = 2.5×10⁻¹⁰ m，数量级约为 10⁻¹⁰ m。' },
      { type: 'warn', label: '易错', text: '<strong>油膜法里 V 必须是纯油酸体积，不是酒精溶液体积。</strong>题目中常给"溶液浓度""滴数"等信息，要先算出纯油酸体积再代入公式。分子直径数量级约为 10⁻¹⁰ m，算出的结果若差很多，多半是单位没统一或 V 弄错。' },
      { type: 'heading', text: '三、阿伏加德罗常数——连接宏观与微观的桥梁' },
      { type: 'paragraph', text: '1 mol 任何物质所含的分子数目都相同，这个数叫做阿伏加德罗常数，记作 NA，NA ≈ 6.02×10²³ mol⁻¹。它像一座桥，把我们能在实验室里称量的宏观量（摩尔质量 M、摩尔体积 V_m、总质量、总体积）和看不见的分子质量 m、分子体积 v 联系起来。' },
      { type: 'list', items: ['分子质量 m = M / NA', '分子体积 v = V_m / NA（适用于固体、液体）', '分子总数 N = (m总 / M) × NA = (V总 / V_m) × NA', '把分子看作小球时，直径 d ≈ (6v/π) 的三次方根'] },
      { type: 'keypoint', label: '重点·NA 是桥梁', text: '<strong>NA 是联系宏观量与微观量的桥梁，几乎一切微观量估算题都要用到它。</strong>思路是：先用总质量或总体积求分子数 N，再除以 NA 得单个分子的质量或体积。' },
      { type: 'example', label: '例题·估算水分子', text: '例：已知水的摩尔质量 M = 18 g/mol，摩尔体积 V_m = 18 cm³/mol，NA = 6.02×10²³ mol⁻¹。求一个水分子的质量与体积数量级。<br><strong>解析</strong>：分子质量 m = M / NA = 18 / (6.02×10²³) g ≈ 3.0×10⁻²³ g；分子体积 v = V_m / NA = 18 / (6.02×10²³) cm³ ≈ 3.0×10⁻²³ cm³ = 3.0×10⁻²⁹ m³；把分子看作小球，直径 d ≈ (6v/π) 的三次方根 ≈ 3×10⁻¹⁰ m。' },
      { type: 'table', headers: ['宏观量', '符号', '与微观量的关系'], rows: [['摩尔质量', 'M', 'M = NA × m（m 为分子质量）'], ['摩尔体积', 'V_m', 'V_m = NA × v（v 为分子体积）'], ['物质总质量', 'm总', '分子数 N = m总 / M × NA'], ['物质总体积', 'V总', '分子数 N = V总 / V_m × NA']] },
      { type: 'tip', label: '提示', text: '<strong>估算技巧：先求分子数 N，再分别求分子质量、体积。</strong>固体和液体分子间隙很小，可直接用 V_m / NA 求分子体积；但气体分子间隙很大，绝不能用 V_m / NA 求单个分子体积。' },
      { type: 'heading', text: '四、一轮复习方法归纳' },
      { type: 'paragraph', text: '微观量估算题本质上是"单位换算 + NA 桥梁"。关键是把题目给的宏观量（质量、体积、密度）先化成摩尔数，再乘或除以 NA，得到分子数或单个分子的量。' },
      { type: 'list', items: ['第一步：列出已知宏观量，统一单位（建议用 kg、m³）', '第二步：用 NA 建立宏观—微观关系', '第三步：油膜法用 d = V / S，注意 V 是纯油酸体积', '第四步：用数量级（分子直径约 10⁻¹⁰ m）检验结果是否合理'] },
      { type: 'warn', label: '易错', text: '<strong>气体分子间距远大于分子本身尺寸，不能用 V_m / NA 求分子体积。</strong>气体摩尔体积 22.4 L/mol 仅适用于标准状况（0 ℃、1 atm），其他温度下要结合 pV / T = 常量 计算，不可乱套。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">油膜法：把油酸在水面铺成单分子层</text><rect x="40" y="60" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">油滴滴入水面</text><rect x="70" y="190" width="220" height="50" fill="#4fb3a5"/><circle cx="180" cy="120" r="14" fill="#234b45"/><line x1="180" y1="140" x2="180" y2="182" stroke="#234b45" stroke-width="2"/><rect x="360" y="60" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">单分子层油膜</text><rect x="390" y="150" width="220" height="14" fill="#4fb3a5"/><text x="500" y="195" font-size="13" fill="#234b45" text-anchor="middle">厚度 = 分子直径 d</text><text x="500" y="216" font-size="13" fill="#234b45" text-anchor="middle">d = V / S</text><text x="340" y="288" font-size="13" fill="#234b45" text-anchor="middle">油酸铺成一层分子，膜厚即分子直径</text></svg>', caption: '图1　油膜法原理：纯油酸在水面散成单分子油膜，油膜厚度等于分子直径 d = V / S。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">阿伏加德罗常数：连接宏观与微观</text><rect x="40" y="60" width="270" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="175" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">宏观量（可称量）</text><text x="175" y="122" font-size="13" fill="#234b45" text-anchor="middle">总质量 m总</text><text x="175" y="148" font-size="13" fill="#234b45" text-anchor="middle">摩尔质量 M</text><text x="175" y="174" font-size="13" fill="#234b45" text-anchor="middle">摩尔体积 V_m</text><rect x="370" y="60" width="270" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="505" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">微观量（看不见）</text><text x="505" y="122" font-size="13" fill="#234b45" text-anchor="middle">分子质量 m</text><text x="505" y="148" font-size="13" fill="#234b45" text-anchor="middle">分子体积 v</text><text x="505" y="174" font-size="13" fill="#234b45" text-anchor="middle">分子数 N</text><line x1="310" y1="160" x2="340" y2="160" stroke="#2e9e8f" stroke-width="2"/><polygon points="340,154 340,166 352,160" fill="#2e9e8f"/><line x1="360" y1="160" x2="390" y2="160" stroke="#2e9e8f" stroke-width="2"/><polygon points="390,154 390,166 402,160" fill="#2e9e8f"/><text x="350" y="138" font-size="15" fill="#1f7a6e" text-anchor="middle" font-weight="bold">NA</text><text x="350" y="200" font-size="12" fill="#234b45" text-anchor="middle">≈ 6.02×10²³ mol⁻¹</text></svg>', caption: '图2　阿伏加德罗常数 NA 是宏观量与微观量之间的桥梁。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">常见尺度数量级对比</text><rect x="40" y="60" width="600" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="120" y="100" width="20" height="22" fill="#4fb3a5"/><text x="150" y="116" font-size="13" fill="#234b45">分子直径 ≈ 10⁻¹⁰ m</text><rect x="120" y="142" width="90" height="22" fill="#4fb3a5"/><text x="220" y="158" font-size="13" fill="#234b45">细菌 ≈ 10⁻⁶ m</text><rect x="120" y="184" width="240" height="22" fill="#4fb3a5"/><text x="370" y="200" font-size="13" fill="#234b45">头发丝 ≈ 10⁻⁴ m</text><text x="340" y="288" font-size="13" fill="#234b45" text-anchor="middle">分子直径数量级约 10⁻¹⁰ m，比头发细一百万倍</text></svg>', caption: '图3　分子直径数量级约 10⁻¹⁰ m，远小于日常可见物体。' }
    ],
    exercises: [
      { type: 'choice', question: '关于分子动理论，下列说法正确的是？', options: ['物质是由少数大分子组成的', '分子只在高温时才运动', '分子之间只存在引力', '物质由大量分子组成，分子间有空隙、有引力和斥力'], answer: '物质由大量分子组成，分子间有空隙、有引力和斥力', explanation: '分子动理论的三条基本内容是：物质由大量分子组成且分子间有空隙；分子永不停息地做无规则热运动（温度越高越剧烈，并非只在高温运动）；分子间同时存在着引力和斥力，并非只有引力。因此选项 D 全面正确。' },
      { type: 'choice', question: '用油膜法估测分子直径，其计算公式是（V 为纯油酸体积，S 为油膜面积）？', options: ['d = S / V', 'd = V × S', 'd = V / S', 'd = V + S'], answer: 'd = V / S', explanation: '油膜法把油酸在水面铺成单层分子，油膜厚度就等于分子直径。纯油酸体积 V 等于油膜面积 S 乘以厚度 d，即 V = S × d，所以 d = V / S。注意 V 必须是纯油酸体积，不是溶液体积。' },
      { type: 'choice', question: '关于阿伏加德罗常数 NA，下列说法正确的是？', options: ['NA 与物质种类有关', 'NA 是把宏观量与微观量联系起来的常数，NA ≈ 6.02×10²³ mol⁻¹', 'NA 只对固体有意义', '1 g 任何物质都含 NA 个分子'], answer: 'NA 是把宏观量与微观量联系起来的常数，NA ≈ 6.02×10²³ mol⁻¹', explanation: '阿伏加德罗常数 NA ≈ 6.02×10²³ mol⁻¹，表示 1 mol 任何物质所含的分子数，与物质种类无关。它是联系宏观量（质量、摩尔质量、体积、摩尔体积）与微观量（分子质量、分子体积、分子数）的桥梁。1 mol 物质才含 NA 个分子，不是 1 g。' },
      { type: 'fill', question: '油膜法测分子直径的公式写作 d = ___（用纯油酸体积 V 和油膜面积 S 表示）。', answer: 'V / S', explanation: '油酸在水面散成单分子油膜，膜厚即分子直径。体积 V 等于面积 S 乘厚度 d，故 d = V / S。计算时务必统一单位，并把溶液浓度折算成纯油酸体积后再代入。' },
      { type: 'fill', question: '阿伏加德罗常数 NA ≈ ___ mol⁻¹（写出数值与单位）。', answer: '6.02×10²³', explanation: 'NA ≈ 6.02×10²³ mol⁻¹，表示每摩尔物质所含的分子数目。它是微观量估算的核心常数，分子质量 m = M / NA，分子体积（固体液体）v = V_m / NA。' }
    ]
  });
})();
