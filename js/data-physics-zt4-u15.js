/* ============================================================
 * 高三复习 · 实验专题 · 专题三 热学、光学与其他实验
 * 课时15：用油膜法估测分子的大小
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u15',
    name: '用油膜法估测分子的大小',
    chapter: '实验专题 · 专题三 热学、光学与其他实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、分子太小，得用"间接法"量' },
      { type: 'paragraph', text: '分子的直径大约只有 10⁻¹⁰ 米，比头发丝细一百多万倍，根本不可能用尺子直接量。科学家想出了一个非常巧妙的办法：把一滴油酸滴在水面上，让它在水面散开成只有一层分子的"单分子油膜"。既然只有一层，那么这层膜的厚度就等于一个分子的直径。这样，只要测出油的体积和油膜的面积，就能算出分子的大小。' },
      { type: 'keypoint', label: '重点·核心思想', text: '<strong>油膜法的核心：把"看不见的分子直径"转换成"看得见的油膜厚度"。</strong>油酸在水面铺成单层分子，油膜厚度就等于分子直径，用宏观量 V（体积）和 S（面积）就能求出微观量 d。' },
      { type: 'list', items: ['估测分子直径的数量级（约 10⁻¹⁰ 米）', '体会"用宏观量测微观量"的间接方法', '学会用方格纸法测量不规则图形的面积'] },
      { type: 'heading', text: '二、油膜法的原理' },
      { type: 'paragraph', text: '油酸分子的一端亲水、一端疏水，滴到水面上后会平铺开，形成厚度仅为一层分子的薄膜。把油膜看成由一个个分子紧密排成的薄层，那么油膜体积 V 就等于油膜面积 S 乘以厚度 d。于是 d = V / S。这里 V 必须是纯油酸的体积，不是酒精溶液的体积。' },
      { type: 'keypoint', label: '重点·公式', text: '<strong>油膜法测分子直径：d = V / S。</strong>V 是一滴溶液中纯油酸的体积，S 是稳定后油膜的面积。分子直径 d 等于油膜厚度。' },
      { type: 'list', items: ['先算出一滴溶液中纯油酸的体积 V', '再把油膜在水面散开，等稳定后描出轮廓', '用方格纸数出油膜面积 S', '代入公式 d = V / S 算出分子直径'] },
      { type: 'example', label: '例题·油膜法计算', text: '例：把 1 mL 纯油酸溶于酒精，配成 200 mL 油酸酒精溶液。用滴管取 1 滴（约 1/100 mL 溶液）滴在水面，形成的单分子油膜面积约为 0.2 m²。求油酸分子直径。<br><strong>解析</strong>：纯油酸体积 V = (1/200) × (1/100) mL = 5×10⁻⁵ mL = 5×10⁻¹¹ m³；分子直径 d = V / S = 5×10⁻¹¹ / 0.2 = 2.5×10⁻¹⁰ m，数量级约为 10⁻¹⁰ m。' },
      { type: 'warn', label: '易错', text: '<strong>公式里的 V 是纯油酸体积，绝不是酒精溶液的体积。</strong>题目常给"溶液浓度""每毫升多少滴"等信息，必须先把溶液体积乘以油酸占比、再除以滴数，得到纯油酸体积后才能代入。算出的结果若与 10⁻¹⁰ m 差很多，多半是单位没统一或 V 弄错。' },
      { type: 'heading', text: '三、实验器材与操作步骤' },
      { type: 'paragraph', text: '实验需要浅盘（装水）、痱子粉或细石膏粉（让油膜轮廓显形）、注射器或滴管、量筒、坐标纸、彩笔。先在浅盘里装入约 2 厘米深的水，均匀撒上痱子粉；再用滴管滴一滴油酸酒精溶液在水面，油酸散开后把轮廓描在坐标纸上。' },
      { type: 'list', items: ['用滴管把 1 mL 溶液分成若干滴，测出每滴平均体积', '浅盘装水，撒上薄薄一层痱子粉', '在水面中央滴一滴溶液，待其散成稳定油膜', '用彩笔描出油膜边界，再放到方格纸上数格子求面积'] },
      { type: 'table', headers: ['步骤', '操作', '记录内容'], rows: [['配溶液', '油酸溶于酒精并稀释', '溶液浓度、总体积'], ['数滴数', '量 1 mL 溶液共有多少滴', '每滴溶液体积'], ['滴油膜', '滴一滴于撒粉水面', '油膜轮廓'], ['测面积', '方格纸数格子', '油膜面积 S'], ['算结果', '代入 d = V / S', '分子直径 d']] },
      { type: 'heading', text: '四、油膜面积的测量（方格纸法）' },
      { type: 'paragraph', text: '油膜形状不规则，不能直接套公式。把描有轮廓的坐标纸放在小方格（常见边长 1 cm 或 0.5 cm）上，数出油膜占了多少个小格。规则是：完整的格子算一个，不足半格的舍去，超过半格的算一个整格。格子总数乘以每格面积，就得到油膜面积 S。' },
      { type: 'list', items: ['完整小格：计 1 格', '不足半格：舍去，计 0 格', '超过半格：算 1 格', '面积 S = 格子总数 × 单格面积'] },
      { type: 'tip', label: '提示', text: '<strong>数格子时最稳妥的做法：先数整格，再数"大于半格"的边界格，两者相加。</strong>不要反复纠结临界格子，统一按"过半就算"原则处理，误差很小。算完 S 记得和 V 统一单位（都用 m³ 和 m²）再代入 d = V / S。' },
      { type: 'warn', label: '易错·痱子粉', text: '<strong>痱子粉不能撒太厚，否则油膜无法展平，面积偏小、算出的 d 偏大。</strong>同样，滴完溶液后要等油膜完全稳定、轮廓不再变化再描边界；水面上若有灰尘或风扰也会使结果不准。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">油膜法原理：油酸铺成单分子层</text><rect x="40" y="60" width="280" height="220" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">油滴滴入水面</text><circle cx="180" cy="150" r="16" fill="#234b45"/><line x1="180" y1="166" x2="180" y2="210" stroke="#234b45" stroke-width="2"/><rect x="170" y="210" width="20" height="50" fill="#4fb3a5"/><rect x="360" y="60" width="280" height="220" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">单分子油膜</text><rect x="390" y="170" width="220" height="14" fill="#4fb3a5"/><text x="500" y="214" font-size="13" fill="#234b45" text-anchor="middle">厚度 = 分子直径 d</text><text x="500" y="238" font-size="13" fill="#234b45" text-anchor="middle">d = V / S</text><text x="340" y="308" font-size="13" fill="#234b45" text-anchor="middle">油酸只铺一层分子，膜厚即分子直径</text></svg>', caption: '图1　油膜法原理：纯油酸在水面散成单分子油膜，油膜厚度等于分子直径 d = V / S。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">操作步骤：撒粉、滴液、描轮廓</text><rect x="40" y="70" width="170" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="125" y="110" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">浅盘装水</text><text x="125" y="135" font-size="12" fill="#234b45" text-anchor="middle">撒痱子粉</text><rect x="255" y="70" width="170" height="120" rx="10" fill="#4fb3a5"/><text x="340" y="110" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">滴一滴</text><text x="340" y="135" font-size="12" fill="#234b45" text-anchor="middle">油酸溶液</text><rect x="470" y="70" width="170" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="555" y="110" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">描轮廓</text><text x="555" y="135" font-size="12" fill="#234b45" text-anchor="middle">放方格纸数</text><line x1="210" y1="130" x2="253" y2="130" stroke="#2e9e8f" stroke-width="2"/><polygon points="253,126 253,134 264,130" fill="#2e9e8f"/><line x1="425" y1="130" x2="468" y2="130" stroke="#2e9e8f" stroke-width="2"/><polygon points="468,126 468,134 479,130" fill="#2e9e8f"/><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">水 + 薄粉 → 滴液散开 → 描边数格求面积 S</text></svg>', caption: '图2　实验操作流程：装水撒粉、滴油酸、描轮廓后放到方格纸上数面积。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">方格纸数格子法求油膜面积</text><rect x="60" y="70" width="240" height="180" fill="#ffffff" stroke="#2e9e8f" stroke-width="2"/><g stroke="#4fb3a5" stroke-width="1"><line x1="110" y1="70" x2="110" y2="250"/><line x1="160" y1="70" x2="160" y2="250"/><line x1="210" y1="70" x2="210" y2="250"/><line x1="260" y1="70" x2="260" y2="250"/><line x1="60" y1="120" x2="300" y2="120"/><line x1="60" y1="170" x2="300" y2="170"/><line x1="60" y1="220" x2="300" y2="220"/></g><rect x="100" y="120" width="60" height="50" fill="#2e9e8f" opacity="0.5"/><text x="180" y="155" font-size="12" fill="#234b45">油膜占格</text><rect x="380" y="90" width="240" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="130" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">数格规则</text><text x="500" y="162" font-size="12" fill="#234b45" text-anchor="middle">整格算 1</text><text x="500" y="186" font-size="12" fill="#234b45" text-anchor="middle">不足半格舍去</text><text x="500" y="210" font-size="12" fill="#234b45" text-anchor="middle">过半算 1 格</text><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">S = 格子总数 × 每格面积</text></svg>', caption: '图3　用方格纸数格子：整格与过半格均算 1 格，不足半格舍去，乘以单格面积得 S。' }
    ],
    exercises: [
      { type: 'choice', question: '用油膜法估测分子直径，所依据的计算公式是（V 为纯油酸体积，S 为油膜面积）？', options: ['d = V + S', 'd = S / V', 'd = V / S', 'd = V × S'], answer: 'd = V / S', explanation: '油酸在水面铺成单层分子，油膜的厚度就等于分子直径。油膜体积 V 等于面积 S 乘以厚度 d，即 V = S × d，所以 d = V / S。注意 V 必须是纯油酸的体积，不是酒精溶液体积。' },
      { type: 'choice', question: '配好油酸酒精溶液后，一滴溶液中纯油酸的体积应当如何确定？', options: ['直接等于一滴溶液的体积', '用一滴溶液体积乘以油酸在溶液中的体积占比', '等于酒精的体积', '无法求出只能估算'], answer: '用一滴溶液体积乘以油酸在溶液中的体积占比', explanation: '纯油酸体积 = 一滴溶液体积 × 溶液浓度（油酸体积占比）。需要先用量筒测出 1 mL 溶液共有多少滴，得到每滴溶液体积，再乘以浓度。不能直接用溶液体积代替纯油酸体积。' },
      { type: 'choice', question: '用方格纸测油膜面积时，对于压在轮廓边界上的小格子，正确做法是？', options: ['全部算入', '全部舍去', '不足半格舍去，超过半格算一格', '只数完整的整格'], answer: '不足半格舍去，超过半格算一格', explanation: '方格纸数格子法的规则是：完整的小格计 1 格；压在边界上、面积不足半格的舍去；超过半格的算 1 格。这样统一处理可减小面积测量的随意误差，得到较合理的油膜面积 S。' },
      { type: 'fill', question: '油膜法测分子直径的公式写作 d = ___（用纯油酸体积 V 和油膜面积 S 表示）。', answer: 'V / S', explanation: '油酸在水面散成单分子油膜，膜厚即分子直径。体积 V 等于面积 S 乘厚度 d，故 d = V / S。计算时务必统一单位，并把溶液浓度折算成纯油酸体积后再代入。' },
      { type: 'fill', question: '用油膜法估测出的分子直径数量级约为 ___ m（用科学计数法，如 10⁻¹⁰）。', answer: '10⁻¹⁰', explanation: '分子直径的数量级约为 10⁻¹⁰ 米（即 10 的负十次方米）。若算出的结果远大于或远小于这个数量级，通常是纯油酸体积 V 算错或面积 S、单位没有统一，需要回头检查。' }
    ]
  });
})();
