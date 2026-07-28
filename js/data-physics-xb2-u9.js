/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第三章 交变电流
 * 课时1：交变电流的产生
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u9',
    name: '交变电流的产生',
    chapter: '选择性必修第二册 · 第三章 交变电流',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是交变电流' },
      { type: 'paragraph', text: '我们家里插座里流出来的电，和我们做实验用的电池电不一样。电池电的方向一直不变，从正极流向负极，这种叫直流电。而家庭电路里的电，它的电流大小和方向都随着时间做周期性的变化，一会儿正向流、一会儿反向流，这种电就叫作交变电流，简称交流。我们日常使用的市电就是最常见的交变电流。' },
      { type: 'keypoint', label: '重点·交变电流的定义', text: '<strong>交变电流是大小和方向都随时间做周期性变化的电流。</strong>判断是不是交变电流，关键看两点：一是大小变不变，二是方向变不变；只要方向随时间周期性改变，就是交变电流。' },
      { type: 'paragraph', text: '为什么会需要交变电流呢？因为交流在远距离输电时特别方便，可以用变压器把电压升高、减小线路损耗，送到千家万户后再降下来安全使用。所以发电站发出来的几乎都是交流电。要搞懂交流电，第一步就是弄清楚它是怎么产生的。' },
      { type: 'list', items: ['直流电：方向和大小基本不变（如电池供电），电流总是从一极流向另一极', '交变电流：大小和方向都随时间周期性变化（如家庭插座电），方向会来回翻转', '判断关键：看电流方向是否随时间周期性改变，改变了就是交流'] },
      { type: 'heading', text: '二、矩形线圈在匀强磁场中转动' },
      { type: 'paragraph', text: '最典型、最好理解的交流电源，就是一个矩形线圈在匀强磁场里匀速转动。想象在两块大磁铁之间有一根转轴，轴上装着一个矩形线圈，让它以恒定角速度绕轴转。线圈每转一圈，穿过它的磁通量就先变大、再变小、再反向变大变小，这样线圈里就被"感应"出了电动势，接上外电路就有了交变电流。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">矩形线圈在匀强磁场中匀速转动</text><rect x="40" y="60" width="280" height="220" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">俯视：线圈转过不同角度</text><circle cx="110" cy="170" r="44" fill="#4fb3a5"/><rect x="103" y="126" width="14" height="88" fill="#234b45"/><text x="110" y="240" font-size="12" fill="#234b45" text-anchor="middle">N极侧</text><circle cx="250" cy="170" r="44" fill="#4fb3a5"/><rect x="243" y="126" width="14" height="88" fill="#234b45"/><text x="250" y="240" font-size="12" fill="#234b45" text-anchor="middle">S极侧</text><rect x="360" y="60" width="280" height="220" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">侧视：转轴与磁场垂直</text><rect x="500" y="120" width="120" height="14" fill="#234b45"/><text x="500" y="112" font-size="12" fill="#234b45" text-anchor="middle">转轴</text><line x1="380" y1="200" x2="620" y2="200" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="500" y="222" font-size="12" fill="#234b45" text-anchor="middle">磁场方向（水平）</text><line x1="500" y1="127" x2="500" y2="60" stroke="#234b45" stroke-width="3"/><polygon points="500,54 494,68 506,68" fill="#234b45"/><text x="500" y="278" font-size="12" fill="#234b45" text-anchor="middle">线圈绕竖直轴转动，切割磁感线</text></svg>', caption: '图1　矩形线圈在匀强磁场中绕轴匀速转动，磁通量周期性变化，从而在线圈中产生电动势。' },
      { type: 'keypoint', label: '重点·产生交流的原理', text: '<strong>交流的产生靠的是电磁感应：线圈在磁场中转动时，穿过线圈的磁通量周期性变化，于是线圈里产生感应电动势，接上电路就有了交变电流。</strong>线圈转得越快，电流变化越频繁。' },
      { type: 'paragraph', text: '线圈在磁场里匀速转动时，磁通量的变化不是随便变的，而是按正弦规律变。正因为磁通量按正弦变，感应出来的电动势大小也按正弦规律变，方向还周期性翻转，所以得到了最规整的一种交流——正弦式交变电流。' },
      { type: 'heading', text: '三、正弦式交变电流' },
      { type: 'paragraph', text: '当线圈在匀强磁场里匀速转动、并且转轴和磁场方向垂直时，产生的交流电动势随时间按正弦曲线变化，这种交流就叫正弦式交变电流。它的电动势大小一会儿增大到最大、一会儿减小到零、再反向增大，画成图就是一条平滑的波浪线。我们国家的市电就是正弦式交流。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">正弦式电动势 e = Eₘ × sin(ωt)</text><line x1="90" y1="150" x2="630" y2="150" stroke="#234b45" stroke-width="2"/><line x1="110" y1="40" x2="110" y2="260" stroke="#234b45" stroke-width="2"/><path d="M 110 150 Q 160 50 210 150 Q 260 250 310 150 Q 360 50 410 150 Q 460 250 510 150 Q 560 50 610 150" fill="none" stroke="#2e9e8f" stroke-width="3"/><text x="110" y="278" font-size="12" fill="#234b45" text-anchor="middle">t=0</text><text x="318" y="278" font-size="12" fill="#234b45" text-anchor="middle">t</text><text x="640" y="154" font-size="12" fill="#234b45" text-anchor="middle">e</text><text x="300" y="70" font-size="13" fill="#234b45">Eₘ (最大值)</text><text x="408" y="230" font-size="13" fill="#234b45">−Eₘ</text><text x="340" y="290" font-size="12" fill="#234b45" text-anchor="middle">电动势随时间先正后负、大小按正弦变化</text></svg>', caption: '图2　正弦式交变电流的电动势随时间按正弦曲线变化，正向最大为 Eₘ，反向最大为 −Eₘ。' },
      { type: 'keypoint', label: '重点·瞬时值表达式', text: '<strong>电动势的瞬时值可以写成 e = Eₘ × sin(ωt)。</strong>其中 Eₘ 是电动势的最大值（峰值），ω 是线圈转动的角速度（单位弧度每秒），t 是时间。括号里的 ωt 表示线圈转过的角度，正弦让数值在 +Eₘ 和 −Eₘ 之间来回摆。' },
      { type: 'example', label: '例题·读图写瞬时值', text: '已知某线圈转动的角速度 ω = 100π，电动势的最大值 Eₘ = 311 伏。<br>求 t = 0.0025 秒时的瞬时电动势 e。<br><br><strong>解析</strong>：<br>代入公式 e = Eₘ × sin(ωt)：<br>ωt = 100π × 0.0025 = 0.25π = 90°<br>sin(90°) = 1<br>所以 e = 311 × 1 = 311 伏，此时电动势正好达到正向最大值。' },
      { type: 'warn', label: '易错', text: '很多同学把瞬时值 e = Eₘ × sin(ωt) 和最大值 Eₘ 弄混。<strong>e 是"某一时刻"的值，随时间一直在变；Eₘ 是"最大能达到"的值，是个固定不变的数。</strong>另外 sin 后面括号里是 ωt（角度，单位弧度），不是普通的 t；ω 的单位是弧度每秒，别写成每秒。' },
      { type: 'heading', text: '四、中性面' },
      { type: 'paragraph', text: '线圈转动时有一个非常特殊的位置：此时线圈平面正好和磁场方向垂直，穿过线圈的磁通量达到最大，但磁通量的变化率为零，所以这一瞬间感应电动势恰好为零。这个位置就叫中性面。线圈每转半圈，就会经过一次中性面，每经过一次中性面，电流方向就翻转一次。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">中性面：线圈平面与磁场垂直</text><rect x="60" y="60" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="200" y="86" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">在中性面位置</text><rect x="120" y="100" width="160" height="120" fill="#4fb3a5"/><line x1="60" y1="160" x2="340" y2="160" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="200" y="250" font-size="12" fill="#234b45" text-anchor="middle">线圈平面∥磁场垂直→磁通量最大，e=0</text><rect x="360" y="60" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">离开中性面后</text><rect x="420" y="120" width="160" height="80" fill="#4fb3a5"/><line x1="360" y1="160" x2="640" y2="160" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="500" y="250" font-size="12" fill="#234b45" text-anchor="middle">磁通量减小，电动势增大，方向翻转</text></svg>', caption: '图3　线圈处于中性面时磁通量最大而电动势为零；转过中性面后电流方向发生翻转。' },
      { type: 'keypoint', label: '重点·中性面的特点', text: '<strong>线圈在中性面时：磁通量最大，但磁通量变化率为零，所以感应电动势和感应电流都为零。</strong>线圈每转过中性面一次，电流方向就改变一次；在一个周期里线圈两次经过中性面，电流方向改变两次。' },
      { type: 'table', headers: ['位置', '磁通量', '磁通量变化率', '感应电动势 e', '电流方向'], rows: [['中性面（线圈∥磁场垂直）', '最大', '零', '零', '即将翻转'], ['垂直于中性面（线圈∥磁场平行）', '零', '最大', '最大 Eₘ', '不变'], ['转过半圈再次到中性面', '最大', '零', '零', '反向翻转']] },
      { type: 'tip', label: '提示', text: '<strong>记住"中性面"这个关键位置，能帮你快速判断很多题。</strong>只要题目说"线圈处于中性面"，立刻想到：磁通量最大、电动势为零、电流方向要翻转。反过来，若说"线圈平面与磁感线平行"，那就是电动势最大的位置。' },
      { type: 'list', items: ['线圈在匀强磁场中绕垂直磁场的轴匀速转动，产生正弦式交变电流', '电动势瞬时值 e = Eₘ × sin(ωt)，Eₘ 为最大值，ω 为角速度', '中性面是线圈平面与磁场垂直的位置，此时磁通量最大、电动势为零、电流方向翻转', '我国市电是正弦式交流，频率为 50 赫兹，方向每秒翻转 100 次'] }
    ],
    exercises: [
      { type: 'choice', question: '关于交变电流，下列说法中正确的是？', options: ['大小和方向都不变的电流是交变电流', '方向随时间周期性变化的电流是交变电流', '只有大小变化、方向不变的电流是交变电流', '电池供电的电流是交变电流'], answer: '方向随时间周期性变化的电流是交变电流', explanation: '交变电流的核心特征是大小和方向都随时间做周期性变化，其中方向发生周期性改变是最关键的判断标准。电池供电的直流电方向不变，不属于交变电流。只改变大小而不改变方向的电流也不是交变电流，因为方向没有翻转。' },
      { type: 'choice', question: '矩形线圈在匀强磁场中绕垂直于磁场的轴匀速转动，产生正弦式交变电流。当线圈平面与磁场方向垂直时，下列说法正确的是？', options: ['磁通量最大，电动势最大', '磁通量最大，电动势为零', '磁通量为零，电动势最大', '磁通量为零，电动势为零'], answer: '磁通量最大，电动势为零', explanation: '线圈平面与磁场方向垂直的位置就是中性面。此时穿过线圈的磁通量达到最大，但磁通量的变化率为零，所以感应电动势为零。电动势最大的位置在线圈平面与磁场平行（即垂直于中性面）时，那时磁通量为零而磁通量变化率最大。' },
      { type: 'choice', question: '正弦式交变电流的电动势瞬时值表达式为 e = Eₘ × sin(ωt)。其中 Eₘ 表示？', options: ['某一时刻的电动势', '电动势的最大值（峰值）', '线圈转动的角速度', '线圈转过的角度'], answer: '电动势的最大值（峰值）', explanation: '在表达式 e = Eₘ × sin(ωt) 中，Eₘ 是电动势能达到的最大值，也叫峰值，是一个固定不变的数；ω 是角速度，ωt 是线圈转过的角度。瞬时值 e 才是随时间不断变化的具体数值，不能用 Eₘ 来代表。' },
      { type: 'fill', question: '矩形线圈在匀强磁场中转动时，每经过一次___，感应电流的方向就改变一次；线圈转一圈共经过两次该位置，电流方向改变两次。', answer: '中性面', explanation: '中性面是线圈平面与磁场方向垂直的特殊位置。线圈每转过中性面一次，电流方向就翻转一次。在一个完整周期（线圈转一圈）里，线圈会两次经过中性面，因此电流方向改变两次。这是正弦式交流方向周期性翻转的根源。' },
      { type: 'fill', question: '正弦式交变电流电动势的瞬时值写成 e = Eₘ × sin(ωt)，已知最大电动势 Eₘ = 311 伏，角速度 ω = 100π（弧度/秒）。当 t = 0.01 秒时，括号内的角度 ωt = ___（填角度值，如 180°）。', answer: '180°', explanation: '把已知数直接代入：ωt = 100π × 0.01 = π 弧度。因为 π 弧度等于 180°，所以 ωt = 180°。此时 sin(180°) = 0，说明这个时刻电动势瞬时值 e = 311 × 0 = 0，正好对应线圈处于中性面、电动势为零的情形。' }
    ]
  });
})();
