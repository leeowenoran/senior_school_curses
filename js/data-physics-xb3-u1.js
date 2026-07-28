/* ============================================================
 * 高二物理 · 选择性必修 第三册 · 第一章 分子动理论
 * 课时1：物质由大量分子组成
 * 数据注入：physics.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u1',
    name: '物质由大量分子组成',
    chapter: '选择性必修 第三册 · 第一章 分子动理论',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、物质是由大量分子组成的' },
      { type: 'paragraph', text: '我们周围的石头、水、空气，摸上去是连成一片的，其实它们都是由数不清的微小颗粒——分子组成的。一杯水里含有的水分子数目，比全地球的人口还要多得多得多。分子小到肉眼根本看不见，但数量极其庞大，这正是后面许多热现象的根源。' },
      { type: 'keypoint', label: '重点·分子很小', text: '<strong>分子的直径数量级约为 10⁻¹⁰ m</strong>（也就是大约 0.1 纳米）。这个尺寸太小了，即使用倍数很高的光学显微镜也看不到单个分子，需要更先进的手段才能观测。' },
      { type: 'paragraph', text: '为了感受"小"和"多"，可以做个对比：一个乒乓球的直径约 4 厘米，而一个分子的直径约 10⁻¹⁰ m。如果把一个分子放大到乒乓球那么大，那么按同样比例，一个乒乓球会被放大到比地球还大。可见分子有多么微小。' },
      { type: 'list', items: ['分子是构成物质的一种极小微粒，肉眼和普通显微镜都看不到', '物质含有的分子数目极其庞大，一滴水、一粒沙里都有天文数字般的分子', '分子虽然小，但真实存在，并且在不停地运动'] },
      { type: 'heading', text: '二、阿伏伽德罗常数 NA' },
      { type: 'paragraph', text: '化学里学过的"摩尔"是物质的量的单位。规定：1 摩尔（1 mol）任何物质所含的分子（或原子、离子）数目都相同，这个数叫作阿伏伽德罗常数，记作 NA。' },
      { type: 'keypoint', label: '重点·阿伏伽德罗常数', text: '<strong>NA = 6.02×10²³ mol⁻¹</strong>。它的意思是：每 1 mol 物质里都含有约 6.02×10²³ 个分子。这是一个联系"宏观数量（摩尔）"和"微观个数（分子数）"的桥梁。' },
      { type: 'example', label: '例题·算一算分子数', text: '问：1 mol 水大约含有多少个水分子？<br><br><strong>解析</strong>：<br>根据阿伏伽德罗常数的定义，1 mol 任何物质都含 NA 个基本微粒。所以 1 mol 水含有约 <strong>6.02×10²³ 个</strong>水分子。若是 2 mol 水，则是 2×NA ≈ 1.20×10²⁴ 个。可见哪怕一小杯水，分子数也大得惊人。' },
      { type: 'warn', label: '易错', text: '<strong>NA 是"个数"不是"质量"，也不是"体积"。</strong>常有同学把 6.02×10²³ 当成 1 mol 物质的质量或体积，这是错的。NA 只表示 1 mol 里有多少"个"分子；1 mol 不同物质的质量、体积都各不相同。' },
      { type: 'table', headers: ['物质', '分子直径数量级', '1 mol 时的体积'], rows: [['水', '约 10⁻¹⁰ m', '约 18 cm³'], ['铁', '约 10⁻¹⁰ m', '约 7.1 cm³'], ['氧气（标准状况）', '约 10⁻¹⁰ m', '约 22.4 L']] },
      { type: 'heading', text: '三、用油膜法估测分子直径' },
      { type: 'paragraph', text: '既然分子看不见，怎么估测它的大小呢？实验室里常用"油膜法"。把一滴油滴到水面上，油会在水面散开成一层极薄的薄膜，而且这层膜薄到只有"一个分子"那么厚，叫单分子油膜。膜越薄，铺得越开。' },
      { type: 'keypoint', label: '重点·油膜法公式', text: '<strong>分子直径 d = V / S</strong>，其中 V 是一滴油的体积，S 是油膜在水面上摊开的面积。因为油膜厚度正好约等于一个分子的直径，所以用"体积除以面积"就算出了分子直径。' },
      { type: 'list', items: ['配制浓度很低的油酸酒精溶液，让一滴里含的油很少', '在水面上撒一层痱子粉，滴一滴油酸溶液，油会散成圆形单分子薄膜', '测出油膜面积 S，再算出一滴中纯油的体积 V，代入 d = V / S 求直径'] },
      { type: 'example', label: '例题·油膜法计算', text: '问：一滴纯油体积 V = 1.2×10⁻⁹ m³，在水面摊成面积 S = 0.40 m² 的单分子油膜，求油分子直径 d。<br><br><strong>解析</strong>：<br>由 d = V / S 得 d = 1.2×10⁻⁹ / 0.40 = <strong>3.0×10⁻⁹ m</strong>。这个结果和"分子直径约 10⁻¹⁰ m"同处一个数量级（差几倍很正常，因为油酸分子比简单小球略长），说明油膜法确实能估出分子大小。' },
      { type: 'tip', label: '提示', text: '<strong>油膜法的前提是"单分子层"。</strong>必须让油在水面只铺一层分子，不能重叠成两层或更多，否则 S 偏小、算出的 d 就会偏大。所以实验要滴得极稀、水要平静、等油膜稳定后再测量。' },
      { type: 'heading', text: '四、摩尔体积与分子大小的关系' },
      { type: 'paragraph', text: '把 1 mol 物质的体积（摩尔体积）除以 NA，就得到"每个分子平均占多大空间"。如果把分子粗略看成紧挨着的小球，这个平均体积还能帮我们估计分子间距和大小。' },
      { type: 'keypoint', label: '重点·摩尔体积与分子大小', text: '<strong>每个分子平均占有的体积 ≈ 摩尔体积 / NA。</strong>固体、液体分子排得紧密，这个体积大约等于一个分子本身的大小；气体分子间距很大，所以这个体积远大于分子本身，气体容易被压缩。' },
      { type: 'paragraph', text: '例如 1 mol 水约 18 cm³，除以 NA 后每个水分子平均只占极小一点空间，说明水分子几乎是紧挨着的。而 1 mol 氧气在标准状况下有 22.4 L，比同质量的水大一千多倍，正是因为气体分子之间大部分是空荡荡的空隙。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">分子非常小，直径数量级约为 10⁻¹⁰ m</text><rect x="40" y="58" width="290" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">大小对比</text><circle cx="115" cy="170" r="32" fill="#4fb3a5"/><text x="115" y="224" font-size="12" fill="#234b45" text-anchor="middle">乒乓球</text><circle cx="298" cy="170" r="4" fill="#234b45"/><text x="298" y="224" font-size="12" fill="#234b45" text-anchor="middle">分子</text><rect x="350" y="58" width="290" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">分子直径数量级</text><text x="495" y="160" font-size="22" fill="#234b45" text-anchor="middle">约 10⁻¹⁰ m</text><text x="495" y="200" font-size="14" fill="#234b45" text-anchor="middle">也就是约 0.1 纳米</text></svg>', caption: '图1　把分子与乒乓球放在一起对比，可见分子直径数量级约为 10⁻¹⁰ m，极其微小。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">油膜法：油在水面铺成单分子层，厚度即分子直径</text><rect x="60" y="90" width="300" height="150" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="210" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">水面</text><rect x="90" y="200" width="240" height="10" fill="#4fb3a5"/><text x="210" y="234" font-size="12" fill="#234b45" text-anchor="middle">油膜（单分子层，很薄）</text><line x1="380" y1="160" x2="380" y2="100" stroke="#234b45" stroke-width="2"/><polygon points="374,108 386,108 380,96" fill="#234b45"/><text x="400" y="110" font-size="13" fill="#234b45">d（厚度）</text><rect x="430" y="90" width="190" height="150" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="525" y="130" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">d = V / S</text><text x="525" y="170" font-size="12" fill="#234b45" text-anchor="middle">V 是油滴体积</text><text x="525" y="194" font-size="12" fill="#234b45" text-anchor="middle">S 是油膜面积</text></svg>', caption: '图2　油滴在水面散成极薄的单分子油膜，膜的厚度 d 就等于分子直径，由 d = V / S 算出。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="xb3u1dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r="4" fill="#4fb3a5"/></pattern></defs><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">1 mol 任何物质都含约 6.02×10²³ 个分子</text><rect x="60" y="60" width="560" height="170" rx="10" fill="url(#xb3u1dots)" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="262" font-size="14" fill="#234b45" text-anchor="middle">每个点代表极大量的分子，整片点阵示意 NA 这个数目有多大</text></svg>', caption: '图3　用密集的点阵象征 1 mol 物质里约 6.02×10²³ 个分子，帮助体会"数量极其庞大"。' }
    ],
    exercises: [
      { type: 'choice', question: '关于分子的大小，下列说法正确的是？', options: ['分子的直径约为 10⁻¹⁰ m', '分子的直径约为 1 毫米', '分子用放大镜就能直接看到', '分子的质量约为 1 千克'], answer: '分子的直径约为 10⁻¹⁰ m', explanation: '分子非常小，直径数量级约为 10⁻¹⁰ m（约 0.1 纳米），普通光学显微镜都看不见单个分子，更不可能用放大镜直接看到，分子的质量也远小于 1 千克。只有"分子直径约为 10⁻¹⁰ m"这个说法正确。' },
      { type: 'choice', question: '阿伏伽德罗常数 NA 的含义是？', options: ['1 mol 物质的质量', '1 mol 物质含有的分子个数', '1 mol 物质的体积', '一个分子的质量'], answer: '1 mol 物质含有的分子个数', explanation: '阿伏伽德罗常数 NA = 6.02×10²³ mol⁻¹，它表示的是每 1 mol 物质所含的基本微粒（分子、原子或离子）的个数，是联系宏观物质的量与微观粒子数的桥梁，而不是质量或体积。' },
      { type: 'choice', question: '用油膜法估测分子直径时，依据的公式是？', options: ['d = V × S', 'd = V / S', 'd = S / V', 'd = V + S'], answer: 'd = V / S', explanation: '油膜法把油滴在水面铺成单分子薄层，油膜厚度就等于分子直径。已知一滴纯油的体积 V 和油膜面积 S，用体积除以面积得到厚度，即 d = V / S。其余式子在物理意义上都不成立。' },
      { type: 'fill', question: '1 mol 氧气在标准状况下的体积约为___L（填写数值）。', answer: '22.4', explanation: '在标准状况（0 ℃、1 个标准大气压）下，1 mol 任何理想气体的体积都约为 22.4 L。这是气体摩尔体积的常见数值，与气体种类无关，常用来由体积推算气体的物质的量。' },
      { type: 'fill', question: '用油膜法测分子直径时，必须让油在水面铺成___（填"单分子层"或"多分子层"），否则算出的直径会偏差很大。', answer: '单分子层', explanation: '油膜法的核心假设是油在水面只铺一层分子，此时膜厚才等于一个分子的直径。如果油铺成两层或更多层，油膜面积会偏小，由 d = V / S 算出的直径就会偏大，因此必须是单分子层。' }
    ]
  });
})();
