/* ============================================================
 * 高二物理 · 必修 第三册 · 第十二章 电能 能量守恒定律
 * 课时17：实验：电池电动势和内阻的测量
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u17',
    name: '实验：电池电动势和内阻的测量',
    chapter: '必修第三册 · 第十二章 电能 能量守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验原理：伏安法' },
      { type: 'paragraph', text: '要测出电池的电动势 E 和内阻 r，只需要知道闭合电路里的两个量：路端电压 U 和干路电流 I。因为 U = E − I × r 这个关系恒成立，只要我们改变外电阻、得到若干组不同的 (U, I)，就能解出 E 和 r。这种用电压表和电流表配合测量的方法叫"伏安法"。' },
      { type: 'keypoint', label: '重点·实验原理', text: '<strong>根据 U = E − I × r，测得多组路端电压 U 和电流 I，就能求出 E 和 r。</strong>理论上只要有两组数据代入联立方程即可，但为了减小误差通常测 5 组以上再用图像处理。' },
      { type: 'list', items: ['改变外电阻，得到多组对应的路端电压 U 和电流 I', '利用 U = E − I × r 这个线性关系处理数据', '既可用代数法（两组数据联立）也可用图像法（更准）', '核心器材是电压表、电流表、滑动变阻器'] },
      { type: 'heading', text: '二、实验电路与器材' },
      { type: 'paragraph', text: '把电池、开关、电流表、滑动变阻器串联成干路；电压表并联在电池两极，用来测路端电压。调节滑动变阻器，外电阻随之改变，于是电流 I 和路端电压 U 都跟着变，我们就能读到一组组数据。' },
      { type: 'list', items: ['待测电池（如旧干电池一节）', '电流表（串联测干路电流 I）', '电压表（并联在电池两端测路端电压 U）', '滑动变阻器（改变外电阻，得到不同组数据）', '开关、导线若干'] },
      { type: 'keypoint', label: '重点·滑动变阻器的作用', text: '<strong>滑动变阻器用来改变外电阻 R，从而得到多组不同的 U 和 I。</strong>阻值调大时电流变小、路端电压变大；阻值调小时电流变大、路端电压变小，这样图像上的采样点就分散开，求得的 E、r 更准。' },
      { type: 'warn', label: '易错', text: '<strong>电压表必须并联在电池（电源）两极测"路端电压"，而不是只并联在某一电阻两端；电流表要串联在干路里。</strong>另外滑动变阻器应从阻值较大的位置开始调节，再逐渐调小，避免一开始电流过大损坏电表或电池。' },
      { type: 'heading', text: '三、实验步骤' },
      { type: 'paragraph', text: '实验操作要按顺序来：先连电路（开关断开、变阻器阻值调大），检查无误后再闭合开关读数，之后调节变阻器记录多组数据，最后断开开关、处理数据。注意每调一次变阻器就同时读一次电压表和电流表的示数。' },
      { type: 'list', items: ['按电路图连接，开关断开，滑动变阻器阻值调到最大', '闭合开关，记录一组电压表、电流表读数 (U, I)', '调节变阻器，使阻值变小，再记录新的一组 (U, I)', '重复测量 5 组以上数据', '断开开关，用图像法或代数法求出 E 和 r'] },
      { type: 'heading', text: '四、用 U-I 图像求 E 和 r' },
      { type: 'keypoint', label: '重点·图像法求 E、r', text: '<strong>把各组 (I, U) 描点，画一条最贴合这些点的直线：直线与纵轴交点的数值就是 E，直线斜率的绝对值就是 r。</strong>图像法能抵消偶然误差，比只用两组数据联立更可靠。' },
      { type: 'example', label: '例题·图像法求 E 和 r', text: '测得两组数据：① I = 0.10 A，U = 1.40 V；② I = 0.30 A，U = 1.20 V。求 E 和 r。<br><br><strong>解析</strong>：<br>由 U = E − I × r 代入：<br>1.40 = E − 0.10 × r<br>1.20 = E − 0.30 × r<br>两式相减得 0.20 = 0.20 × r，所以 r = 1.0 Ω。<br>代回得 E = 1.40 + 0.10 = 1.50 V。<br>故电动势 1.50 V，内阻 1.0 Ω。' },
      { type: 'table', headers: ['次数', '电流 I (A)', '路端电压 U (V)'], rows: [['1', '0.10', '1.40'], ['2', '0.16', '1.34'], ['3', '0.22', '1.28'], ['4', '0.30', '1.20'], ['5', '0.38', '1.12']] },
      { type: 'warn', label: '易错', text: '<strong>绝不能把滑动变阻器调到 0 让电池短路！</strong>短路时电流极大，会迅速烧坏电表、导线甚至使电池发热漏液，非常危险。另外描点时若发现某个点明显偏离直线，应检查是否为读数错误或接触不良，不要随手把它硬塞进直线。' },
      { type: 'tip', label: '提示', text: '<strong>代数法和图像法可以互相验证：</strong>先用图像法读出 E 和 r 的近似值，再挑两组数据代入联立验算；若差距较大，说明测量或画图有误，应重做。考试和实验报告都推荐以图像法为主，因为它更稳健、更能体现误差规律。' },
      { type: 'example', label: '例题·验证数据', text: '上表第 5 组 I = 0.38 A、U = 1.12 V，用刚才求得的 E = 1.50 V、r = 1.0 Ω 验证是否成立。<br><br><strong>解析</strong>：<br>由公式 U = E − I × r = 1.50 − 0.38 × 1.0 = 1.50 − 0.38 = 1.12 V。<br>计算值 1.12 V 与实测 1.12 V 一致，说明求出的 E、r 可靠，数据点落在直线上。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">伏安法实验电路图</text><circle cx="120" cy="170" r="10" fill="#4fb3a5"/><circle cx="150" cy="170" r="10" fill="#4fb3a5"/><text x="135" y="200" font-size="12" fill="#234b45" text-anchor="middle">电池</text><line x1="135" y1="160" x2="135" y2="120" stroke="#234b45" stroke-width="2"/><line x1="135" y1="120" x2="300" y2="120" stroke="#234b45" stroke-width="2"/><rect x="300" y="108" width="40" height="24" rx="3" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="320" y="124" font-size="12" fill="#234b45" text-anchor="middle">开关</text><line x1="340" y1="120" x2="400" y2="120" stroke="#234b45" stroke-width="2"/><circle cx="430" cy="120" r="16" fill="#4fb3a5"/><text x="430" y="124" font-size="13" fill="#234b45" text-anchor="middle">A</text><text x="430" y="150" font-size="11" fill="#234b45" text-anchor="middle">电流表</text><line x1="446" y1="120" x2="540" y2="120" stroke="#234b45" stroke-width="2"/><rect x="540" y="108" width="60" height="24" rx="3" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="570" y="124" font-size="11" fill="#234b45" text-anchor="middle">变阻器</text><line x1="600" y1="120" x2="640" y2="120" stroke="#234b45" stroke-width="2"/><line x1="640" y1="120" x2="640" y2="170" stroke="#234b45" stroke-width="2"/><line x1="640" y1="170" x2="135" y2="170" stroke="#234b45" stroke-width="2"/><line x1="150" y1="170" x2="300" y2="230" stroke="#234b45" stroke-width="2" stroke-dasharray="4,3"/><line x1="300" y1="230" x2="540" y2="230" stroke="#234b45" stroke-width="2" stroke-dasharray="4,3"/><circle cx="420" cy="230" r="16" fill="#4fb3a5"/><text x="420" y="234" font-size="13" fill="#234b45" text-anchor="middle">V</text><text x="420" y="262" font-size="11" fill="#234b45" text-anchor="middle">电压表并接电池两端</text></svg>', caption: '图1　伏安法电路：电池、开关、电流表、滑动变阻器串联，电压表并联在电池两极测路端电压 U，电流表串联测电流 I。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">把多组 (I, U) 数据描成点</text><line x1="90" y1="270" x2="620" y2="270" stroke="#234b45" stroke-width="2"/><line x1="90" y1="70" x2="90" y2="270" stroke="#234b45" stroke-width="2"/><text x="60" y="170" font-size="13" fill="#234b45" text-anchor="middle">U/V</text><text x="350" y="298" font-size="13" fill="#234b45" text-anchor="middle">I/A</text><circle cx="150" cy="220" r="6" fill="#4fb3a5"/><circle cx="210" cy="195" r="6" fill="#4fb3a5"/><circle cx="270" cy="170" r="6" fill="#4fb3a5"/><circle cx="340" cy="140" r="6" fill="#4fb3a5"/><circle cx="410" cy="110" r="6" fill="#4fb3a5"/><text x="150" y="240" font-size="11" fill="#234b45">1.40</text><text x="410" y="100" font-size="11" fill="#234b45">1.12</text></svg>', caption: '图2　把 5 次测得的 (电流 I, 路端电压 U) 在坐标系中描成散点，这些点大致沿一条直线分布。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">拟合直线读出 E 和 r</text><line x1="90" y1="270" x2="620" y2="270" stroke="#234b45" stroke-width="2"/><line x1="90" y1="70" x2="90" y2="270" stroke="#234b45" stroke-width="2"/><line x1="90" y1="110" x2="600" y2="220" stroke="#2e9e8f" stroke-width="3"/><circle cx="90" cy="110" r="7" fill="#4fb3a5"/><text x="120" y="104" font-size="13" fill="#234b45" font-weight="bold">纵截距 = E = 1.50 V</text><circle cx="150" cy="220" r="5" fill="#234b45"/><circle cx="340" cy="140" r="5" fill="#234b45"/><circle cx="410" cy="110" r="5" fill="#234b45"/><text x="500" y="180" font-size="13" fill="#234b45">斜率绝对值 = r = 1.0 Ω</text></svg>', caption: '图3　让直线最贴合所有散点，它与纵轴交点即电动势 E，斜率绝对值即内阻 r，这就是图像处理法。' }
    ],
    exercises: [
      { type: 'choice', question: '用伏安法测电池电动势和内阻时，滑动变阻器的主要作用是？', options: ['提高电池电动势', '改变外电阻从而得到多组 U、I 数据', '代替电压表测量电压', '减小电池内阻'], answer: '改变外电阻从而得到多组 U、I 数据', explanation: '实验中滑动变阻器串联在干路里，调节它的阻值就能改变外电阻 R，进而使干路电流 I 和路端电压 U 随之变化，从而测得多组 (U, I) 数据。电动势和内阻都由电池本身决定，变阻器既不能提高电动势也不能减小内阻，更不会替代电压表。' },
      { type: 'choice', question: '关于处理数据，下列说法正确的是？', options: ['只用一组数据就能算出 E 和 r', '图像法中直线与纵轴交点数值等于内阻 r', '图像法中直线斜率的绝对值等于内阻 r', '代数法一定比图像法更准确'], answer: '图像法中直线斜率的绝对值等于内阻 r', explanation: '由 U = E − I × r 可知这是一条截距为 E、斜率为 −r 的直线，所以图像与纵轴交点数值是电动势 E，斜率 ΔU/ΔI = −r 的绝对值才是内阻 r，选项说交点等于内阻是错误的。至少需要两组数据才能联立求解，多组数据用图像法能减小偶然误差，通常比只用两组代数法更可靠。' },
      { type: 'choice', question: '实验中电压表应连接在？', options: ['只并联在某一个外电阻两端', '并联在电池两极测路端电压', '串联在干路中', '与电流表并联'], answer: '并联在电池两极测路端电压', explanation: '伏安法要求测的是路端电压 U，即电源（电池）两端的电压，因此电压表必须并联在电池两极。电流表才需要串联在干路里测量总电流 I。若电压表只并联在某个外电阻两端，测到的只是该电阻上的分压，不是整个外电路的路端电压，会导致结果错误。' },
      { type: 'fill', question: '用伏安法测得两组数据：I₁ = 0.20 A、U₁ = 1.30 V 和 I₂ = 0.40 A、U₂ = 1.10 V，则电源电动势 E = ___ V，内阻 r = ___ Ω。', answer: '1.50 | 1.0', explanation: '由 U = E − I × r 列出：1.30 = E − 0.20 r，1.10 = E − 0.40 r。两式相减得 0.20 = 0.20 r，故 r = 1.0 Ω。代回第一式：E = 1.30 + 0.20 × 1.0 = 1.50 V。所以电动势为 1.50 V，内阻为 1.0 Ω。' },
      { type: 'fill', question: '实验中调节滑动变阻器时，严禁把阻值调到 0，否则会造成电源___，电流极大且非常危险。', answer: '短路', explanation: '当滑动变阻器调到 0，相当于外电路直接被导线连通，外电阻近似为 0，根据 I = E / (R + r) 此时电流 I短 = E / r 会非常大，这就是电源短路。短路会瞬间产生大量热，可能烧坏电表、导线，并使电池急剧发热甚至漏液爆炸，因此实验必须避免把变阻器调到零。' }
    ]
  });
})();
