/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第三章 交变电流
 * 课时10：描述交变电流的物理量
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u10',
    name: '描述交变电流的物理量',
    chapter: '选择性必修第二册 · 第三章 交变电流',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是交变电流的峰值' },
      { type: 'paragraph', text: '交变电流的大小和方向都随时间变化。在它不断变化的过程中，总会有一个"瞬间达到最大"的时刻。我们把交变电流在一个周期内所能达到的<strong>最大瞬时值</strong>叫做峰值。电压的最大值记作 Uₘ，电流的最大值记作 Iₘ，符号右下角的小 m 就是英文 maximum（最大）的意思。' },
      { type: 'keypoint', label: '重点·峰值', text: '<strong>峰值是指交变电流在一个周期内的最大瞬时值。</strong>电压峰值记作 Uₘ，电流峰值记作 Iₘ。它反映了交变电流变化所能到达的"最高高度"，是衡量电器耐压能力的重要指标。' },
      { type: 'paragraph', text: '举个例子，家里插座里的市电是正弦式交变电流，它的电压峰值大约是 311 伏。虽然平时常说"220 伏"，但那不是峰值，而是下面要学的有效值。电器元件（比如电容、绝缘层）实际承受的最高电压是峰值 311 伏，所以选元件时不能只看 220 伏，得看它能不能扛住 311 伏。' },
      { type: 'list', items: ['峰值就是交变电流在一个周期内出现的最大瞬时值', '电压峰值记作 Uₘ，电流峰值记作 Iₘ，下标 m 表示最大', '峰值反映电流电压变化的"最高限度"，关系到元件耐压'] },
      { type: 'heading', text: '二、有效值——让交变电流和直流"一样热"' },
      { type: 'paragraph', text: '交变电流一会儿大一会儿小，还有正有负，直接用某个瞬时值无法说明它"总体有多强"。于是人们想了个聪明的办法：找一个大小不变的直流电，让这个直流电和交变电流分别通过<strong>相同的电阻</strong>，在<strong>相同的时间</strong>里，如果它们产生的<strong>热量相等</strong>，那么这个直流电的数值，就叫做该交变电流的有效值。' },
      { type: 'keypoint', label: '重点·有效值', text: '<strong>有效值是根据电流的热效应规定的：</strong>让交变电流和某一直流电通过相同电阻，在相同时间内产生相同热量，这一直流电的数值就是交变电流的有效值。电压有效值记作 U，电流有效值记作 I。我们平时说的"220 伏""5 安"都是指有效值。' },
      { type: 'example', label: '例题·正弦交流电的有效值', text: '已知某正弦式交变电流的电压峰值 Uₘ = 311 伏，求它的电压有效值 U。<br><br><strong>解析</strong>：<br>对于正弦式交变电流，有效值和峰值之间有固定关系：U = Uₘ / √2。<br>代入：U = 311 / 1.414 ≈ 220 伏。<br>所以电压有效值约为 220 伏，这正是我们熟悉的市电电压。' },
      { type: 'warn', label: '易错', text: '<strong>有效值不等于平均值，也不能拿"峰值除以 2"。</strong>只有正弦式交变电流才满足 U = Uₘ / √2、I = Iₘ / √2。如果是方波、三角波等其它波形，有效值和峰值的关系不同，不能乱套用这个公式。另外，求通过截面的电荷量时要用平均值，而不是有效值。' },
      { type: 'list', items: ['有效值按"热效应相同"来定义，是交变电流的等效直流值', '正弦式交变电流：U = Uₘ / √2，I = Iₘ / √2', '家用电器标称的电压、电流几乎都是有效值'] },
      { type: 'table', headers: ['常见交变电流', '峰值 Uₘ', '有效值 U', '说明'], rows: [['市电（正弦）', '约 311 伏', '220 伏', 'U = Uₘ / √2', ], ['小型电池逆变器输出', '约 14 伏', '10 伏', '同样满足 √2 关系'], ['一般交流电流表读数', '不直接显示', '有效值', '表头读数为有效值']] },
      { type: 'heading', text: '三、周期与频率' },
      { type: 'paragraph', text: '交变电流是周期性变化的，每隔一段固定的时间就会"重复一遍"原来的变化。完成一次完整的变化（从一个状态回到相同状态）所需要的时间，叫做周期，记作 T，单位是秒。周期越短，说明电流变化得越快。' },
      { type: 'keypoint', label: '重点·周期与频率', text: '<strong>周期 T 是交变电流完成一次周期性变化所需的时间；频率 f 是每秒内完成的周期数，单位是赫兹（Hz）。</strong>两者互为倒数：f = 1 / T，或者说 T = 1 / f。我国市电频率是 50 赫兹，意思是每秒变化 50 个周期。' },
      { type: 'tip', label: '提示', text: '<strong>我国和多数国家的市电频率是 50 赫兹，对应的周期 T = 1 / 50 = 0.02 秒。</strong>少数国家（如美国、日本部分地区）用 60 赫兹。频率这个量在发电机、电动机里非常重要，不同频率的电器常常不能混用。' },
      { type: 'paragraph', text: '峰值、有效值、周期、频率，是从不同角度描述同一路交变电流的四个"尺子"：峰值看它能冲多高，有效值看它平均有多强（发热能力），周期和频率看它变得有多快。把这四个量弄清楚，后面学变压器、电感电容就轻松多了。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">峰值 Uₘ 是正弦波达到的最高点</text><line x1="40" y1="160" x2="640" y2="160" stroke="#2e9e8f" stroke-width="2"/><path d="M40,160 Q115,40 190,160 Q265,280 340,160 Q415,40 490,160 Q565,280 640,160" fill="none" stroke="#234b45" stroke-width="3"/><line x1="115" y1="160" x2="115" y2="40" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="5,4"/><circle cx="115" cy="40" r="5" fill="#4fb3a5"/><text x="125" y="36" font-size="14" fill="#234b45" font-weight="bold">峰值 Uₘ</text><line x1="265" y1="160" x2="265" y2="280" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="5,4"/><circle cx="265" cy="280" r="5" fill="#4fb3a5"/><text x="275" y="300" font-size="14" fill="#234b45" font-weight="bold">负峰值 −Uₘ</text><text x="40" y="305" font-size="13" fill="#234b45">时间 →</text></svg>', caption: '图1　正弦交变电流在波峰处达到峰值 Uₘ，在波谷处达到负峰值 −Uₘ，两者绝对值相等。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">有效值 = 产生相同热量的等效直流值</text><rect x="40" y="70" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">交变电流</text><path d="M70,200 Q125,110 180,200 Q235,290 290,200" fill="none" stroke="#234b45" stroke-width="3"/><text x="180" y="252" font-size="13" fill="#234b45" text-anchor="middle">发热 Q</text><rect x="360" y="70" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">等效直流电</text><line x1="420" y1="200" x2="580" y2="200" stroke="#234b45" stroke-width="3"/><text x="500" y="252" font-size="13" fill="#234b45" text-anchor="middle">同样发热 Q</text><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">相同电阻、相同时间，热量相等 → 该直流值即有效值 I</text></svg>', caption: '图2　交变电流和某一直流电在同样条件下发热相同，这一直流电流 I 就是交变电流的有效值。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">周期 T 是完成一次完整变化的时间</text><line x1="40" y1="170" x2="640" y2="170" stroke="#2e9e8f" stroke-width="2"/><path d="M40,170 Q115,50 190,170 Q265,290 340,170 Q415,50 490,170 Q565,290 640,170" fill="none" stroke="#234b45" stroke-width="3"/><rect x="40" y="60" width="300" height="230" fill="none" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="6,4"/><text x="190" y="86" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">一个周期 T</text><line x1="40" y1="295" x2="40" y2="305" stroke="#234b45" stroke-width="2"/><line x1="340" y1="295" x2="340" y2="305" stroke="#234b45" stroke-width="2"/><text x="190" y="315" font-size="13" fill="#234b45" text-anchor="middle">T = 1 / f</text><text x="500" y="100" font-size="14" fill="#234b45">频率 f = 每秒周期数</text><text x="500" y="124" font-size="14" fill="#234b45">单位：赫兹 Hz</text></svg>', caption: '图3　框出的一段（从某起点到完成一次完整变化）就是一个周期 T，频率 f 等于每秒包含的周期个数。' }
    ],
    exercises: [
      { type: 'choice', question: '关于交变电流的峰值，下列说法正确的是？', options: ['峰值就是交变电流的有效值', '峰值是交变电流在一个周期内的最大瞬时值', '峰值的单位是赫兹', '所有交变电流的峰值都是 220 伏'], answer: '峰值是交变电流在一个周期内的最大瞬时值', explanation: '峰值指交变电流在一个周期内所能达到的最大瞬时值，电压峰值记作 Uₘ、电流峰值记作 Iₘ，单位是伏特或安培，而不是赫兹（赫兹是频率单位）。有效值是另一回事，不能把峰值说成有效值；不同交变电流的峰值各不相同，并非都是 220 伏。' },
      { type: 'choice', question: '对于正弦式交变电流，电压有效值 U 与峰值 Uₘ 的关系正确的是？', options: ['U = Uₘ / √2', 'U = Uₘ × 2', 'U = Uₘ / 2', 'U = Uₘ'], answer: 'U = Uₘ / √2', explanation: '正弦式交变电流的有效值和峰值之间存在固定关系：电压有效值 U = Uₘ / √2，电流有效值 I = Iₘ / √2。这个关系只对正弦（余弦）波形成立，对于方波、三角波等其它波形并不适用，不能随意用"除以 2"来替代。' },
      { type: 'choice', question: '我国民用市电的频率为 50 赫兹，它的周期 T 约为多少？', options: ['0.02 秒', '50 秒', '0.5 秒', '20 秒'], answer: '0.02 秒', explanation: '周期 T 与频率 f 互为倒数，即 T = 1 / f。代入 f = 50 赫兹，得到 T = 1 / 50 = 0.02 秒。也就是说，我国市电每秒完成 50 个完整的变化周期，每个周期只用 0.02 秒。' },
      { type: 'fill', question: '根据电流的热效应，让交变电流和某一直流电通过相同电阻、在相同时间内产生相同热量，这一直流电的数值就叫做交变电流的___（填"有效值"或"峰值"）。', answer: '有效值', explanation: '有效值是按热效应来定义的：把交变电流跟一个直流电比较，若通过相同电阻在相同时间内发热相等，则该直流电的数值就是交变电流的有效值。日常所说的电压、电流数值一般均指有效值，而峰值只是变化过程中的最大瞬时值。' },
      { type: 'fill', question: '某正弦式交变电流的电压峰值 Uₘ = 311 伏，则它的电压有效值 U = ___ 伏（保留整数）。', answer: '220', explanation: '正弦式交变电流满足 U = Uₘ / √2。代入 Uₘ = 311 伏，得 U = 311 / 1.414 ≈ 220 伏。这也是我们熟悉的家用市电电压数值，说明市电标称的 220 伏是有效值而非峰值。' }
    ]
  });
})();
