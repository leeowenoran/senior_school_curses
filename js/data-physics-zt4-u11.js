/* ============================================================
 * 高三复习 · 实验专题 · 专题二 电学实验
 * 课时11：测定电源的电动势和内阻（伏安法、图像法 U-I 图线）
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u11',
    name: '测定电源的电动势和内阻（伏安法、图像法 U-I 图线）',
    chapter: '实验专题 · 专题二 电学实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验原理：闭合电路欧姆定律' },
      { type: 'paragraph', text: '任何一个电源，都有两个重要参数：电动势 E（可以想象成电源"提供电压的本事"）和内阻 r（电源内部也有电阻）。把电源接上外电路，路端电压 U、电流 I 和 E、r 之间满足：E = U + I × r。我们只要改变外电阻，测出若干组 U 和 I，就能反推出 E 和 r。' },
      { type: 'keypoint', label: '重点·核心公式', text: '<strong>闭合电路：E = U + I × r，也可以写成 U = E − I × r。</strong>这是本实验的总原理。E 是纵截距，r 是斜率的绝对值。只要有多组 (U, I) 数据就能解出它们。' },
      { type: 'list', items: ['电源电动势 E 反映电源把其他能转化为电能的本领', '内阻 r 是电源内部的电阻，会分掉一部分电压', '外电压 U 也叫路端电压，等于 E 减去内阻上的压降 I×r', '电流越大，内阻分压 I×r 越大，路端电压 U 越低'] },
      { type: 'heading', text: '二、伏安法怎么测' },
      { type: 'paragraph', text: '最常见的做法：把电源、开关、滑动变阻器、电流表串联成回路，再用电压表并联在电源两端测路端电压 U，电流表测回路电流 I。每调一次滑动变阻器，就得到一组 (U, I)。为了结果准，至少测 6 组以上。' },
      { type: 'keypoint', label: '重点·伏安法电路', text: '<strong>电压表并联在电源两端测 U，电流表串联测 I，滑动变阻器改变外电阻。</strong>注意电压表要接到电源两极（含开关、导线电阻尽量小），这样测的才是真正的路端电压。' },
      { type: 'example', label: '例题·两组数据求 E、r', text: '例：测得两组数据：I₁ = 0.20 A、U₁ = 1.80 V；I₂ = 0.50 A、U₂ = 1.50 V。求 E 和 r。<br><strong>解析</strong>：列方程 E = 1.80 + 0.20 r，E = 1.50 + 0.50 r。两式相减得 0.30 = 0.30 r，故 r = 1.0 Ω；代入得 E = 1.80 + 0.20 = 2.0 V。' },
      { type: 'warn', label: '易错', text: '<strong>别把"路端电压 U"和"电动势 E"混为一谈。</strong>只有外电路断开（I = 0）时 U 才等于 E；一旦有电流，U 就比 E 小，差的就是内阻压降 I×r。另外测得多组数据时，电流不能太大以免电源发热使 E、r 变化。' },
      { type: 'heading', text: '三、图像法：画 U-I 图线最准' },
      { type: 'paragraph', text: '一组组数据手算累，而且有误差。更好的办法是把各组 (I, U) 描到坐标纸上，连成一条直线，这条直线就代表 U = E − I×r。直线与纵轴交点就是 I = 0 时的 U，即电动势 E；直线斜率的大小就是内阻 r。' },
      { type: 'list', items: ['横轴画电流 I，纵轴画路端电压 U', '把每组数据描成点，连成一条直线（个别偏离大的点舍去）', '直线与纵轴交点：I = 0 → U = E，读出电动势', '直线斜率 k = ΔU / ΔI = −r，其绝对值就是内阻 r'] },
      { type: 'keypoint', label: '重点·U-I 图线求 r', text: '<strong>取直线上相距较远的两点，r = |ΔU / ΔI|。</strong>例如两点 (0.2 A, 1.8 V) 和 (0.5 A, 1.5 V)，则 r = |(1.5 − 1.8) / (0.5 − 0.2)| = 1.0 Ω。用图线求比单用两组数更抗误差。' },
      { type: 'example', label: '例题·由图线读数', text: '例：U-I 图线纵截距为 1.5 V，直线过点 (0.30 A, 0.90 V)。求 E、r。<br><strong>解析</strong>：纵截距 E = 1.5 V；斜率 k = (0.90 − 1.5) / (0.30 − 0) = −2.0 V/A，故 r = |k| = 2.0 Ω。' },
      { type: 'table', headers: ['方法', '需要数据', '求 E', '求 r'], rows: [['两组方程', '2 组 (U, I)', '联立解 E', '联立解 r'], ['U-I 图线', '多组 (U, I)', '纵截距', '斜率绝对值'], ['电流表+电阻箱', 'I 与 R', 'E = I(R + r) 拟合', '拟合'], ['电压表+电阻箱', 'U 与 R', '1/U = r/(E R) + 1/E', '斜率比']] },
      { type: 'heading', text: '四、其他测量方案与注意事项' },
      { type: 'paragraph', text: '除了伏安法，还可以用"电流表加电阻箱"（只测电流和外电阻 R）或"电压表加电阻箱"（只测电压和外电阻 R）来求 E、r，本质都来自 E = I(R + r) 或 E = U + U×r/R。无论哪种，图像法都是减小偶然误差的好办法。' },
      { type: 'list', items: ['滑动变阻器从阻值最大处开始，逐渐调小使电流增大', '电流不要长时间过大，防止电源发热', '多测数据，用直线拟合而非只取两组', '描点时纵轴 U 从合适刻度起画，使直线尽量占满图面'] },
      { type: 'tip', label: '提示', text: '<strong>画 U-I 图线时，纵轴不一定从 0 开始。</strong>可以从比如 1.0 V 起画，这样直线更舒展、读数更准；但要注意纵截距的 E 要按坐标实际刻度读取，不能想当然等于格数乘以格值。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">伏安法测电动势和内阻电路</text><rect x="50" y="80" width="110" height="55" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="105" y="112" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">电源 E,r</text><rect x="200" y="80" width="120" height="34" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="260" y="102" font-size="12" fill="#234b45" text-anchor="middle">滑动变阻器</text><circle cx="410" cy="97" r="18" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="410" y="102" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">A</text><circle cx="560" cy="160" r="18" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="560" y="165" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">V</text><line x1="160" y1="105" x2="200" y2="97" stroke="#234b45" stroke-width="2"/><line x1="320" y1="97" x2="392" y2="97" stroke="#234b45" stroke-width="2"/><line x1="428" y1="97" x2="520" y2="97" stroke="#234b45" stroke-width="2"/><line x1="520" y1="97" x2="520" y2="142" stroke="#234b45" stroke-width="2"/><line x1="520" y1="178" x2="542" y2="178" stroke="#234b45" stroke-width="2"/><line x1="578" y1="178" x2="578" y2="240" stroke="#234b45" stroke-width="2"/><line x1="578" y1="240" x2="410" y2="240" stroke="#234b45" stroke-width="2"/><line x1="410" y1="240" x2="410" y2="115" stroke="#234b45" stroke-width="2"/><text x="340" y="308" font-size="13" fill="#234b45" text-anchor="middle">V 并联在电源两端测路端电压 U，A 串联测电流 I</text></svg>', caption: '图1　伏安法电路：电压表并联测路端电压，电流表串联测电流。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">U-I 图线：纵截距为 E，斜率绝对值为 r</text><line x1="100" y1="300" x2="630" y2="300" stroke="#234b45" stroke-width="2"/><line x1="100" y1="70" x2="100" y2="300" stroke="#234b45" stroke-width="2"/><text x="365" y="325" font-size="13" fill="#234b45" text-anchor="middle">电流 I（横轴）</text><text x="70" y="180" font-size="13" fill="#234b45" text-anchor="middle" transform="rotate(-90 70 180)">路端电压 U（纵轴）</text><line x1="100" y1="90" x2="600" y2="270" stroke="#2e9e8f" stroke-width="3"/><circle cx="100" cy="90" r="5" fill="#4fb3a5"/><text x="150" y="84" font-size="13" fill="#1f7a6e" font-weight="bold">纵截距 E</text><circle cx="350" cy="180" r="4" fill="#234b45"/><circle cx="480" cy="231" r="4" fill="#234b45"/><text x="500" y="262" font-size="13" fill="#4fb3a5" font-weight="bold">斜率 k = −r</text><text x="365" y="330" font-size="12" fill="#234b45" text-anchor="middle">直线向下倾斜，因为 U = E − I×r</text></svg>', caption: '图2　U-I 图线：纵轴交点读出电动势 E，直线斜率绝对值等于内阻 r。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">E = U + I×r 的直观含义</text><rect x="60" y="90" width="180" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="150" y="140" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">路端电压 U</text><text x="150" y="168" font-size="12" fill="#234b45" text-anchor="middle">外部能用的电压</text><rect x="440" y="90" width="180" height="120" rx="10" fill="#4fb3a5"/><text x="530" y="140" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">内阻压降 I×r</text><text x="530" y="168" font-size="12" fill="#234b45" text-anchor="middle">内部消耗掉</text><line x1="240" y1="150" x2="420" y2="150" stroke="#2e9e8f" stroke-width="2"/><text x="330" y="138" font-size="14" fill="#1f7a6e" font-weight="bold" text-anchor="middle">+</text><rect x="260" y="220" width="160" height="50" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">总电动势 E</text><text x="340" y="288" font-size="12" fill="#234b45" text-anchor="middle">E = U + I×r</text></svg>', caption: '图3　电动势 E 等于路端电压 U 与内阻压降 I×r 之和。' }
    ],
    exercises: [
      { type: 'choice', question: '测定电源电动势和内阻的实验，核心原理公式是？', options: ['U = I × R', 'E = U + I × r', 'P = U × I', 'Q = I² × R × t'], answer: 'E = U + I × r', explanation: '根据闭合电路欧姆定律，电源电动势等于路端电压与内阻压降之和，即 E = U + I × r，也可写成 U = E − I × r。本实验所有测量与图像法都建立在这个关系上。' },
      { type: 'choice', question: '在 U-I 图线中，电动势 E 和内阻 r 分别对应直线的什么？', options: ['纵截距和斜率绝对值', '横截距和斜率', '斜率和纵截距', '都与面积有关'], answer: '纵截距和斜率绝对值', explanation: 'U-I 图线方程为 U = E − I × r，是一条向下倾斜的直线。其与纵轴（I = 0）的交点给出 U = E 即电动势；直线斜率 k = −r，所以内阻 r 等于斜率的绝对值。' },
      { type: 'choice', question: '伏安法测 E、r 时，电压表应如何连接？', options: ['串联在电路中', '并联在电源两端测路端电压', '与电流表串联', '不用电压表'], answer: '并联在电源两端测路端电压', explanation: '电压表内阻很大，应并联在被测部分两端。本实验要测的是电源的路端电压 U，所以电压表要并联在电源两极上；电流表内阻很小，应串联测回路电流 I。' },
      { type: 'fill', question: '测得两组数据：I₁ = 0.2 A、U₁ = 1.8 V；I₂ = 0.4 A、U₂ = 1.6 V。则内阻 r = ___ Ω。', answer: '1.0|1', explanation: '由 E = U + I r 列方程：E = 1.8 + 0.2 r，E = 1.6 + 0.4 r。两式相减得 0.2 = 0.2 r，故 r = 1.0 Ω。再代入得 E = 2.0 V。' },
      { type: 'fill', question: 'U-I 图线上取两点 (0.1 A, 1.4 V) 和 (0.3 A, 1.0 V)，则电动势 E = ___ V。', answer: '1.5', explanation: '斜率 k = (1.0 − 1.4) / (0.3 − 0.1) = −2.0 V/A，故内阻 r = 2.0 Ω。由 U = E − I r，代入任一点如 (0.1, 1.4)：E = 1.4 + 0.1 × 2.0 = 1.6 V；代入 (0.3,1.0)：E = 1.0 + 0.3 × 2.0 = 1.6 V，所以 E = 1.6 V。' }
    ]
  });
})();
