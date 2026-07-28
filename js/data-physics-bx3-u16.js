/* ============================================================
 * 高二物理 · 必修 第三册 · 第十二章 电能 能量守恒定律
 * 课时16：闭合电路欧姆定律
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u16',
    name: '闭合电路欧姆定律',
    chapter: '必修第三册 · 第十二章 电能 能量守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、电源与电动势' },
      { type: 'paragraph', text: '要让电荷在电路中持续流动，必须有电源。电源的作用是把其他形式的能量（如化学能、机械能）不断转化成电能，从而在两极间维持一定的电势差，推动电荷循环流动。衡量电源"把其他能量转化成电能本领大小"的物理量，就是电动势。' },
      { type: 'keypoint', label: '重点·电动势', text: '<strong>电动势 E 表示电源把其他形式能量转化为电能的本领大小。</strong>单位也是伏特 V。电动势由电源本身决定，与外电路是否接通、外电阻多大都无关。' },
      { type: 'list', items: ['电动势 E 反映电源"供电本领"，越大说明每搬运单位电荷能提供的电能越多', '电动势由电源自身性质决定，与外电路无关', '常见干电池电动势约 1.5 V，铅蓄电池约 2 V', '电动势数值上等于电源没有接外电路时两极间的电压'] },
      { type: 'heading', text: '二、内阻与闭合电路' },
      { type: 'paragraph', text: '电源内部也有电阻，比如电池里的电解液、电极就有阻碍作用，这个电阻叫内阻，记作 r。电流在电源内部流动时，也要克服内阻做功，也会发热。所以一个真实电源，可以看成"理想电源（电动势 E）"和"一个内阻 r"串联在一起。' },
      { type: 'keypoint', label: '重点·内阻', text: '<strong>内阻 r 是电源内部的电阻。</strong>真实电源 = 电动势 E 串联内阻 r。电流 I 流过内阻时，内阻也要消耗电能发热，内阻上的电压降为 I × r。' },
      { type: 'warn', label: '易错', text: '<strong>电动势 E 不是电源两端的电压，也不是内阻上的电压降。</strong>电动势是"转化电能的本领"，路端电压 U 是外电路两端的电压，而内阻压降是 I × r。三者关系是 E = U + I × r，切勿把 E 和 U 混为一谈。' },
      { type: 'heading', text: '三、闭合电路欧姆定律' },
      { type: 'paragraph', text: '把电源（E 串联 r）和 outer 外电阻 R 连成闭合回路，整个回路的总电阻是 R + r。根据能量关系或欧姆定律，回路中的电流等于电动势除以总电阻。这就是闭合电路欧姆定律，是研究含电源电路的核心公式。' },
      { type: 'keypoint', label: '重点·闭合电路欧姆定律', text: '<strong>I = E / (R + r)</strong>。I 是干路电流，E 是电源电动势，R 是外电阻，r 是内阻。它说明：电流由电动势和全电路总电阻共同决定。' },
      { type: 'example', label: '例题·求电流', text: '一节电动势 E = 1.5 V、内阻 r = 0.5 Ω 的电池，接一个 R = 7 Ω 的电阻，求电路电流。<br><br><strong>解析</strong>：<br>总电阻 R总 = R + r = 7 + 0.5 = 7.5 Ω。<br>I = E / (R + r) = 1.5 / 7.5 = 0.2 A。<br>所以电路电流为 0.2 安培。' },
      { type: 'heading', text: '四、路端电压随电流的变化' },
      { type: 'paragraph', text: '路端电压 U 就是外电路（外电阻 R）两端的电压。由总电动势减去内阻压降，就得到路端电压。它也等于外电阻上的电压降 I × R，所以 U 同时等于 I × R 和 E − I × r。' },
      { type: 'keypoint', label: '重点·路端电压', text: '<strong>路端电压 U = E − I × r</strong>，也等于 U = I × R。当外电阻 R 增大时，电流 I 减小，内阻压降 I × r 减小，于是路端电压 U 增大；反之 R 减小时 U 减小。' },
      { type: 'example', label: '例题·求路端电压', text: '上题中若外电阻 R = 7 Ω、电流 I = 0.2 A、内阻 r = 0.5 Ω、电动势 E = 1.5 V，求路端电压 U。<br><br><strong>解析</strong>：<br>方法一：U = I × R = 0.2 × 7 = 1.4 V。<br>方法二：U = E − I × r = 1.5 − 0.2 × 0.5 = 1.5 − 0.1 = 1.4 V。两法一致，路端电压为 1.4 V。' },
      { type: 'heading', text: '五、U-I 图像（路端电压—电流图像）' },
      { type: 'paragraph', text: '把 U = E − I × r 画在以 I 为横轴、U 为纵轴的坐标系里，得到一条向下倾斜的直线。这条直线藏着两个重要信息：它与纵轴的交点就是电动势 E，而它的倾斜程度（斜率）就等于 −r。' },
      { type: 'table', headers: ['图像要素', '对应物理量', '说明'], rows: [['纵轴截距（I = 0 时）', '电动势 E', '外电路断开、电流为 0 时路端电压等于 E'], ['直线斜率', '−r（负的内阻）', '斜率的绝对值等于电源内阻 r'], ['横轴截距（U = 0 时）', '短路电流 I短 = E / r', '外电路短路时电流极大，很危险'], ['直线走向', '向右下倾斜', '电流越大，路端电压越小']] },
      { type: 'tip', label: '提示', text: '<strong>从 U-I 图像读 E 和 r 最快：</strong>直线往左延长与纵轴相交的点的数值就是 E；取图像上两点，用"电压差 / 电流差"算出斜率，其绝对值就是内阻 r。这个本领在下一节测电池电动势和内阻的实验里会直接用上。' },
      { type: 'list', items: ['闭合电路电流 I = E / (R + r)，由电动势和全电路总电阻决定', '路端电压 U = E − I × r = I × R，会随外电阻变化', 'U-I 图像是向下倾斜的直线，纵截距为 E，斜率大小为 r', '外电阻越大路端电压越高，外电路断开时 U 最大等于 E'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">真实电源 = 电动势 E 串联内阻 r</text><rect x="60" y="70" width="240" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="98" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">电源内部</text><rect x="95" y="120" width="90" height="40" rx="6" fill="#4fb3a5"/><text x="140" y="145" font-size="12" fill="#234b45" text-anchor="middle">电动势 E</text><rect x="200" y="120" width="80" height="40" rx="6" fill="#4fb3a5"/><text x="240" y="145" font-size="12" fill="#234b45" text-anchor="middle">内阻 r</text><rect x="360" y="70" width="240" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="480" y="98" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">外电路</text><rect x="420" y="120" width="120" height="40" rx="6" fill="#4fb3a5"/><text x="480" y="145" font-size="12" fill="#234b45" text-anchor="middle">外电阻 R</text><text x="480" y="210" font-size="12" fill="#234b45" text-anchor="middle">闭合回路总电阻 R + r</text></svg>', caption: '图1　真实电源可等效为电动势 E 与内阻 r 串联，再与外电阻 R 构成闭合回路，总电阻为 R + r。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">路端电压 U 随电流 I 增大而减小</text><line x1="90" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="60" x2="90" y2="250" stroke="#234b45" stroke-width="2"/><text x="60" y="160" font-size="13" fill="#234b45" text-anchor="middle">U</text><text x="350" y="278" font-size="13" fill="#234b45" text-anchor="middle">I</text><line x1="90" y1="90" x2="600" y2="240" stroke="#2e9e8f" stroke-width="3"/><polygon points="600,234 600,246 588,240" fill="#2e9e8f"/><circle cx="90" cy="90" r="6" fill="#4fb3a5"/><text x="120" y="84" font-size="13" fill="#234b45">纵截距 = E</text><text x="430" y="150" font-size="13" fill="#234b45">U = E − I × r</text></svg>', caption: '图2　路端电压 U 对电流 I 的图像是一条向下倾斜的直线：电流越大，路端电压越低。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">从 U-I 图像读电动势 E 与内阻 r</text><line x1="90" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="60" x2="90" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="100" x2="560" y2="240" stroke="#2e9e8f" stroke-width="3"/><circle cx="90" cy="100" r="7" fill="#4fb3a5"/><text x="120" y="94" font-size="13" fill="#234b45" font-weight="bold">纵截距 E</text><line x1="300" y1="170" x2="430" y2="170" stroke="#234b45" stroke-width="2" stroke-dasharray="4,3"/><line x1="300" y1="170" x2="300" y2="212" stroke="#234b45" stroke-width="2" stroke-dasharray="4,3"/><text x="360" y="162" font-size="13" fill="#234b45">ΔU</text><text x="270" y="228" font-size="13" fill="#234b45">ΔI</text><text x="470" y="210" font-size="13" fill="#234b45">斜率 = −r</text></svg>', caption: '图3　直线与纵轴交点数值即电动势 E；取两点算斜率 ΔU/ΔI，其绝对值就是内阻 r。' }
    ],
    exercises: [
      { type: 'choice', question: '关于电动势 E，下列说法正确的是？', options: ['电动势就是电源两端的电压', '电动势由外电路决定', '电动势反映电源把其他能量转化为电能的本领', '电动势越大的电源内阻一定越小'], answer: '电动势反映电源把其他能量转化为电能的本领', explanation: '电动势是描述电源把其他形式能量转化为电能本领大小的物理量，由电源自身性质决定，与外电路是否接通、外电阻大小都无关。电动势不是路端电压（外电压），也不是内阻上的压降；电动势大小与内阻大小没有必然联系，不能认为电动势大内阻就一定小。' },
      { type: 'choice', question: '一个电源电动势 E = 6 V、内阻 r = 1 Ω，接外电阻 R = 5 Ω，则电路中的电流为？', options: ['1 A', '6 A', '5 A', '0.5 A'], answer: '1 A', explanation: '根据闭合电路欧姆定律 I = E / (R + r)，代入 E = 6 V、R = 5 Ω、r = 1 Ω，总电阻为 5 + 1 = 6 Ω，电流 I = 6 / 6 = 1 A。注意分母要用外电阻与内阻之和，不能只除以外电阻 R，否则会得到 1.2 A 的错误结果。' },
      { type: 'choice', question: '关于路端电压 U = E − I × r，下列说法正确的是？', options: ['外电阻越大，路端电压越小', '电流越大，路端电压越大', '外电路断开（I = 0）时，路端电压等于 E', '短路时路端电压等于 E'], answer: '外电路断开（I = 0）时，路端电压等于 E', explanation: '由 U = E − I × r 可知，电流 I 越大内阻压降越大，路端电压反而越小，所以外电阻越大时电流越小、路端电压越大。当外电路断开 I = 0，内阻压降为 0，路端电压 U 等于电动势 E，这是路端电压的最大值。短路时外电阻近似为 0、电流极大，路端电压近似为 0，非常危险。' },
      { type: 'fill', question: '在路端电压 U 对电流 I 的图像中，直线与纵轴（I = 0）交点的数值等于电源的___，而直线斜率的绝对值等于电源的___。', answer: '电动势 E | 内阻 r', explanation: '由 U = E − I × r 可知，这是一条截距为 E、斜率为 −r 的直线。当电流 I = 0 时 U = E，所以纵轴截距就是电动势；直线斜率 ΔU/ΔI = −r，其绝对值就是内阻 r。实验里正是利用多组 U、I 数据描点画线，从图像读出 E 和 r。' },
      { type: 'fill', question: '某电源电动势 3 V、内阻 0.5 Ω，接外电阻 R = 5.5 Ω，则路端电压 U = ___ V。', answer: '2.75', explanation: '先算电流 I = E / (R + r) = 3 / (5.5 + 0.5) = 3 / 6 = 0.5 A。再由路端电压公式 U = E − I × r = 3 − 0.5 × 0.5 = 3 − 0.25 = 2.75 V。也可用 U = I × R = 0.5 × 5.5 = 2.75 V，两式结果一致。' }
    ]
  });
})();
