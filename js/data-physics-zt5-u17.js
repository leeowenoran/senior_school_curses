/* ============================================================
 * 高三复习 · 计算压轴 · 专题四 实验计算
 * 课时17：电学实验设计计算（电表改装、电阻率、电动势与内阻的图像法处理）
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u17',
    name: '电学实验设计计算（电表改装、电阻率、电动势与内阻的图像法处理）',
    chapter: '计算压轴 · 专题四 实验计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、表头与电表改装' },
      { type: 'paragraph', text: '实验室用的电流表、电压表，核心都是一个"表头"——满偏电流 I_g 很小（比如 100 μA）、内阻 r_g 几百欧的小仪器。要让它测大电流或高电压，就得给它"配电阻"。把电流表改成大量程电流表，要并联一个分流电阻；改成电压表，要串联一个分压电阻。' },
      { type: 'keypoint', label: '重点·改装公式', text: '<strong>电流表扩程（并联分流）：R = I_g × r_g / (I − I_g)，I 是量程。</strong><br><strong>电压表扩程（串联分压）：R = U / I_g − r_g，U 是量程。</strong>' },
      { type: 'list', items: ['表头参数：满偏电流 I_g、内阻 r_g', '改电流表→并联小电阻分流（电阻越小量程越大）', '改电压表→串联大电阻分压', '改装后总内阻：电流表更小，电压表更大'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电表改装：并联分流 / 串联分压</text><rect x="80" y="130" width="120" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="140" y="158" font-size="13" fill="#234b45" text-anchor="middle">表头 G</text><text x="140" y="178" font-size="11" fill="#234b45" text-anchor="middle">r_g, I_g</text><rect x="80" y="200" width="120" height="40" rx="8" fill="#4fb3a5"/><text x="140" y="225" font-size="12" fill="#234b45" text-anchor="middle">并联R分流</text><text x="300" y="170" font-size="13" fill="#234b45" text-anchor="middle">→ 电流表</text><rect x="420" y="130" width="120" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="480" y="158" font-size="13" fill="#234b45" text-anchor="middle">表头 G</text><text x="480" y="178" font-size="11" fill="#234b45" text-anchor="middle">r_g, I_g</text><rect x="560" y="130" width="60" height="60" rx="8" fill="#4fb3a5"/><text x="590" y="165" font-size="12" fill="#234b45" text-anchor="middle">串联</text><text x="420" y="205" font-size="13" fill="#234b45" text-anchor="middle">→ 电压表</text><text x="340" y="290" font-size="13" fill="#234b45" text-anchor="middle">大电流用并联分流，高电压用串联分压</text></svg>', caption: '图1　电流表改装并联分流电阻，电压表改装串联分压电阻，核心都是利用表头满偏电流 I_g。' },
      { type: 'example', label: '例题·电流表改装', text: '例：表头 I_g = 1 mA、r_g = 100 Ω，要改成量程 I = 1 A 的电流表，求并联分流电阻 R。<br><strong>解析</strong>：表头满偏电压 U_g = I_g × r_g = 0.001 × 100 = 0.1 V。并联后 R 上分得的电流为 I − I_g = 1 − 0.001 = 0.999 A，两端电压同为 0.1 V，故 R = 0.1 / 0.999 ≈ 0.10 Ω。可见并联电阻远小于 r_g。' },
      { type: 'heading', text: '二、测定金属的电阻率' },
      { type: 'paragraph', text: '用伏安法测出一段金属丝的电阻 R，再量出它的长度 l 和直径 d（由直径算横截面积 S = π d² / 4），就能算出电阻率 ρ = R × S / l。电阻率反映了材料本身的导电性能，与导线长短粗细无关。' },
      { type: 'keypoint', label: '重点·电阻率公式', text: '<strong>ρ = R × S / l，其中 S = π d² / 4。</strong><br>先伏安法求 R = U / I，再代入几何量。注意 d 要用螺旋测微器测多次取平均。' },
      { type: 'list', items: ['用螺旋测微器测直径 d，估读到 0.001 mm', '用毫米刻度尺量长度 l', '伏安法测 R 要选对内外接法以减小误差', '电阻率 ρ 与温度有关，实验通常在室温下进行'] },
      { type: 'warn', label: '易错', text: '<strong>横截面积 S = π d² / 4，常见错误是漏掉平方或漏掉除以 4，或把直径 d 当成半径。</strong><br>另外电阻率公式 ρ = R S / l 里 R 是金属丝电阻，不是电表内阻；长度 l 是接入电路的那段有效长度。' },
      { type: 'heading', text: '三、伏安法测电阻的内外接' },
      { type: 'paragraph', text: '电流表接在电压表两接线点的"内侧"还是"外侧"，会影响测量误差。简单记：待测电阻很大时（R_x ≫ R_A）用内接法，电流表分压可忽略；待测电阻很小时（R_x ≪ R_V）用外接法，电压表分流可忽略。选错接法会系统性偏大或偏小。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">伏安法：内接法 vs 外接法</text><rect x="70" y="90" width="250" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="195" y="115" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">内接法</text><circle cx="140" cy="170" r="14" fill="none" stroke="#4fb3a5" stroke-width="3"/><circle cx="250" cy="170" r="14" fill="none" stroke="#4fb3a5" stroke-width="3"/><rect x="225" y="155" width="50" height="30" fill="#234b45"/><text x="250" y="230" font-size="12" fill="#234b45" text-anchor="middle">R_x 大时用</text><rect x="360" y="90" width="250" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="485" y="115" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">外接法</text><circle cx="430" cy="170" r="14" fill="none" stroke="#4fb3a5" stroke-width="3"/><circle cx="540" cy="170" r="14" fill="none" stroke="#4fb3a5" stroke-width="3"/><rect x="455" y="155" width="50" height="30" fill="#234b45"/><text x="485" y="230" font-size="12" fill="#234b45" text-anchor="middle">R_x 小时用</text></svg>', caption: '图2　伏安法测电阻：待测电阻大用内接法、小用外接法，可减小系统误差。' },
      { type: 'table', headers: ['接法', '适用', '误差来源', '测得 R 偏'], rows: [['内接法', 'R_x ≫ R_A', '电流表分压', '偏大'], ['外接法', 'R_x ≪ R_V', '电压表分流', '偏小']] },
      { type: 'heading', text: '四、电动势与内阻的图像法' },
      { type: 'paragraph', text: '用伏安法测电源电动势 E 和内阻 r：改变外电阻，读出路端电压 U 和电流 I。由闭合电路欧姆定律 I = E / (R + r) 可推出 U = E − I × r。把它看作 U 关于 I 的一次函数，画 U–I 图像，纵截距就是电动势 E，斜率的绝对值就是内阻 r。' },
      { type: 'keypoint', label: '重点·U–I 图像', text: '<strong>U = E − I × r：U–I 图是一条向下斜的直线。</strong><br>纵截距（I=0 时） = 电动势 E；<br>斜率 k = −r，即内阻 r = |k| = ΔU / ΔI。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">测电源：U–I 图像（U = E − Ir）</text><rect x="90" y="70" width="500" height="200" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="120" y1="250" x2="560" y2="250" stroke="#234b45" stroke-width="2"/><line x1="120" y1="90" x2="120" y2="250" stroke="#234b45" stroke-width="2"/><text x="335" y="278" font-size="13" fill="#234b45" text-anchor="middle">电流 I</text><text x="100" y="100" font-size="13" fill="#234b45">电压 U</text><line x1="120" y1="110" x2="540" y2="240" stroke="#4fb3a5" stroke-width="3"/><circle cx="120" cy="110" r="5" fill="#234b45"/><text x="135" y="105" font-size="13" fill="#234b45">纵截距 E</text><line x1="360" y1="175" x2="480" y2="175" stroke="#2e9e8f" stroke-width="1.5" stroke-dasharray="4"/><line x1="480" y1="140" x2="480" y2="175" stroke="#2e9e8f" stroke-width="1.5" stroke-dasharray="4"/><text x="420" y="195" font-size="12" fill="#234b45">斜率 = −r</text><text x="335" y="300" font-size="13" fill="#234b45" text-anchor="middle">直线与纵轴交点即电动势 E，斜率绝对值即内阻 r</text></svg>', caption: '图3　U–I 图像：纵截距为电动势 E，斜率绝对值等于电源内阻 r。' },
      { type: 'example', label: '例题·电动势内阻', text: '例：由实验数据画出 U–I 图，直线在纵轴截距 E = 1.5 V，直线上两点 (I₁=0.2 A, U₁=1.3 V)、(I₂=0.5 A, U₂=1.0 V)。求内阻 r。<br><strong>解析</strong>：斜率 k = (U₂ − U₁) / (I₂ − I₁) = (1.0 − 1.3) / (0.5 − 0.2) = −0.3 / 0.3 = −1.0 V/A。故内阻 r = |k| = 1.0 Ω。电动势由截距得 E = 1.5 V。' },
      { type: 'tip', label: '提示', text: '<strong>电学实验三件事：改装先算电阻、测电阻率走 ρ=RS/l、测电源画 U–I 图拿 E 和 r。</strong><br>所有计算先统一单位（Ω、V、A、m、mm 别混），图像法记得"截距和斜率"各代表什么。' },
      { type: 'warn', label: '易错', text: '<strong>U–I 图的斜率是"负的"，内阻 r = 斜率的绝对值，别把负号带进答案写成 r = −1 Ω。</strong><br>另外电流表内阻 R_A、电压表内阻 R_V 会引入系统误差，题目要求"真实值"时要做修正，不能简单拿测量值当真实值。' },
      { type: 'example', label: '例题·电阻率', text: '例：金属丝长 l = 0.50 m，直径 d = 0.50 mm，伏安法测得 R = 2.0 Ω。求电阻率 ρ（π 取 3.14）。<br><strong>解析</strong>：横截面积 S = π d² / 4 = 3.14 × (0.50×10⁻³)² / 4 = 3.14 × 2.5×10⁻⁷ / 4 ≈ 1.96×10⁻⁷ m²。ρ = R S / l = 2.0 × 1.96×10⁻⁷ / 0.50 ≈ 7.85×10⁻⁷ Ω·m。注意直径要换算成米再平方。' }
    ],
    exercises: [
      { type: 'choice', question: '将表头（满偏电流 I_g、内阻 r_g）改装为量程更大的电流表，应采用的电路连接与对应电阻是？', options: ['串联一个大电阻', '并联一个小电阻', '串联一个小电阻', '并联一个大电阻'], answer: '并联一个小电阻', explanation: '电流表扩大量程需要让大部分电流从并联电阻上"分流"过去，从而保护表头不超过满偏电流，所以要并联一个阻值很小的分流电阻，阻值由 R = I_g r_g / (I − I_g) 决定。串联电阻是用来改电压表的，且并联的应是小电阻而非大电阻。' },
      { type: 'choice', question: '在 U–I 图像（U = E − I r）中，图像与纵轴的截距和斜率绝对值分别表示？', options: ['截距是内阻 r，斜率是 E', '截距是 E，斜率绝对值是 r', '截距是 r，斜率是 E', '截距和斜率都等于 E'], answer: '截距是 E，斜率绝对值是 r', explanation: '把 U = E − I r 与一次函数 y = b + kx 对比，纵截距（I=0 时 U=E）就是电源电动势 E；斜率 k = −r，其绝对值就是电源内阻 r。所以"截距是 E，斜率绝对值是 r"正确，内阻应取正值不能带负号。' },
      { type: 'choice', question: '用伏安法测电阻，当待测电阻 R_x 远小于电压表内阻 R_V 时，为减小误差应选用？', options: ['内接法', '外接法', '两种一样', '不接电压表'], answer: '外接法', explanation: '当 R_x ≪ R_V 时，电压表分流很小，用外接法（电流表接在电压表接线点外侧）可使电压表分流带来的误差最小；若用内接法，电流表分压在大电阻下影响小，但本题是小电阻场景，故外接法更合适。' },
      { type: 'fill', question: '金属丝直径 d = 0.40 mm，则其横截面积 S = π d² / 4 = ___ ×10⁻⁷ m²（π 取 3.14，保留两位有效数字）。', answer: '1.3', explanation: 'd = 0.40 mm = 0.40×10⁻³ m。S = π d² / 4 = 3.14 × (0.40×10⁻³)² / 4 = 3.14 × 1.6×10⁻⁷ / 4 ≈ 1.256×10⁻⁷ m²，保留两位有效数字为 1.3×10⁻⁷ m²。注意直径要先换成米再平方。' },
      { type: 'fill', question: '表头 I_g = 2 mA、r_g = 50 Ω，要改装成量程 U = 3 V 的电压表，应串联的分压电阻 R = ___ Ω。', answer: '1450', explanation: '表头满偏电压 U_g = I_g r_g = 0.002 × 50 = 0.1 V。量程 3 V 时，串联电阻需分压 3 − 0.1 = 2.9 V，流过电流仍为 I_g = 0.002 A，故 R = 2.9 / 0.002 = 1450 Ω。也可直接用 R = U/I_g − r_g = 3/0.002 − 50 = 1500 − 50 = 1450 Ω。' }
    ]
  });
})();
