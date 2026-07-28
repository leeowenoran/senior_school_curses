/* ============================================================
 * 高三复习 · 计算压轴 · 专题二 电磁学计算
 * 课时12：交变电流与变压器计算
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u12',
    name: '交变电流与变压器计算',
    chapter: '计算压轴 · 专题二 电磁学计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、正弦式交变电流的产生与表述' },
      { type: 'paragraph', text: '线圈在匀强磁场中匀速转动，产生的感应电动势和电流随时间按正弦规律变化，叫做正弦式交变电流。我们家里用的市电就是这种。它有瞬时值、最大值、有效值和周期、频率等几个关键量。' },
      { type: 'keypoint', label: '重点·交变电流表达式', text: '<strong>电动势瞬时值 e = Eₘ × sin(ωt)，其中 Eₘ = N × B × S × ω（N 匝线圈）。</strong><br><strong>角速度 ω = 2π × f = 2π / T。</strong><br>电流瞬时值 i = Iₘ × sin(ωt)。' },
      { type: 'list', items: ['Eₘ、Iₘ 是峰值（最大值）', 'ω 是角速度，f 是频率，T 是周期，ω=2πf', '线圈平面与磁场平行时感应电动势最大', '线圈平面与磁场垂直（中性面）时电动势为零'] },
      { type: 'paragraph', text: '中性面是一个重要概念：当线圈平面与磁场垂直时，磁通量最大但变化率为零，所以电动势为零，电流方向在此刻改变。' },
      { type: 'heading', text: '二、有效值：衡量交变电流"做功能力"的量' },
      { type: 'paragraph', text: '交变电流的大小时刻在变，为了能和直流电比较"热效应"，引入有效值。有效值定义为：让交流与直流通过相同电阻，在相同时间内产生相同热量，则直流电的数值就是该交流的有效值。' },
      { type: 'keypoint', label: '重点·有效值关系', text: '<strong>正弦式交变电流：有效值 = 最大值 / √2，即 U = Uₘ / √2，I = Iₘ / √2，E = Eₘ / √2。</strong><br>注意：电表读数、铭牌电压都是有效值；保险丝额定电流也是有效值。' },
      { type: 'list', items: ['日常所说"220 V 市电"指的是有效值', '最大值 Uₘ = 220×√2 ≈ 311 V', '计算电热、电功要用有效值：Q = I²Rt，P = UI', '电容器耐压要看最大值（峰值），不是有效值'] },
      { type: 'example', label: '例题·有效值', text: '例：正弦交流电最大值 Uₘ = 311 V，求有效值和接在电阻 R = 100 Ω 上的功率。<br><strong>解析</strong>：有效值 U = Uₘ/√2 = 311/1.414 ≈ 220 V；电流 I = U/R = 220/100 = 2.2 A；功率 P = UI = 220×2.2 = 484 W。可见市电 220 V 正是有效值。' },
      { type: 'warn', label: '易错', text: '<strong>有效值 = 最大值/√2 只适用于正弦式交变电流，其他波形不适用。</strong>另外，求电功、功率、电表读数必须用有效值；但选电容器耐压、二极管反向击穿电压必须看最大值（峰值）。混淆二者是高频失分点。' },
      { type: 'heading', text: '三、电感和电容对交变电流的影响' },
      { type: 'paragraph', text: '电感和电容会让交变电流的大小发生变化，这叫"感抗"和"容抗"。低频时电感阻碍明显、电容近似断路；高频时电容容易通过、电感阻碍更强。它们都不消耗能量，只储存和释放。' },
      { type: 'keypoint', label: '重点·感抗与容抗', text: '<strong>电感：通直流、阻交流，频率越高阻碍越大（感抗 X_L = 2πfL）。</strong><br><strong>电容：通交流、隔直流，频率越高阻碍越小（容抗 X_C = 1/(2πfC)）。</strong><br>二者都不消耗有功功率，只与电源交换无功功率。' },
      { type: 'list', items: ['电感线圈对恒定电流相当于导线（无感抗）', '电容器对恒定电流相当于断路（隔直）', '高频信号易通过电容，不易通过电感', '整流后常用电容滤波，利用容抗随频率变化'] },
      { type: 'heading', text: '四、理想变压器：电压、电流与功率' },
      { type: 'paragraph', text: '变压器利用电磁感应，把一种交流电压变成另一种交流电压。理想变压器（无能量损失）是高考计算的重点，核心是两个比值关系。' },
      { type: 'keypoint', label: '重点·理想变压器', text: '<strong>电压比：U₁ / U₂ = n₁ / n₂</strong>（匝数多的线圈电压高，是升压还是降压看匝数比）。<br><strong>功率关系：P₁ = P₂（理想变压器无损耗）。</strong><br><strong>电流比：I₁ / I₂ = n₂ / n₁（只有一个副线圈时）。</strong>' },
      { type: 'list', items: ['原、副线圈电压之比等于匝数之比', '输入功率由输出功率决定：P入 = P出', '多副线圈时：U₁n₁ = U₂n₂ + U₃n₃，功率守恒', '变压器只能改变交流电，不能改变直流电'] },
      { type: 'example', label: '例题·变压器计算', text: '例：理想变压器原线圈 n₁ = 1100 匝、电压 U₁ = 220 V，副线圈 n₂ = 55 匝。求副线圈电压 U₂；若副线圈接 R = 11 Ω 负载，求原线圈电流 I₁。<br><strong>解析</strong>：U₂ = U₁×n₂/n₁ = 220×55/1100 = 11 V；副线圈电流 I₂ = U₂/R = 11/11 = 1 A；由功率守恒 P₁=P₂ 得 I₁×U₁ = I₂×U₂，I₁ = I₂×U₂/U₁ = 1×11/220 = 0.05 A。' },
      { type: 'warn', label: '易错', text: '<strong>变压器电流比 I₁/I₂ = n₂/n₁ 只在"单一副线圈"时成立；多副线圈要用功率守恒 P₁=P₂+P₃+… 求电流。</strong>另外电压比始终成立 U₁/U₂=n₁/n₂。切记变压器改不了直流电，因为直流下磁通不变、不产生感应电动势。' },
      { type: 'table', headers: ['物理量', '正弦交流关系', '说明'], rows: [['有效值与峰值', 'U = Uₘ/√2', '仅正弦式适用'], ['电感', 'X_L = 2πfL', '通直阻交'], ['电容', 'X_C = 1/(2πfC)', '隔直通交'], ['变压器电压', 'U₁/U₂ = n₁/n₂', '理想无损耗'], ['变压器电流', 'I₁/I₂ = n₂/n₁', '单一副线圈']] },
      { type: 'tip', label: '提示', text: '<strong>交变电流与变压器解题：① 看到"220 V"先认出是有效值，电热功率用有效值算；② 最大值用于选耐压元件；③ 变压器先写 U₁/U₂=n₁/n₂，再用 P₁=P₂ 求电流，多副线圈用功率守恒。</strong>记住正弦有效值 = 峰值/√2。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">正弦式交变电流波形</text><line x1="80" y1="160" x2="600" y2="160" stroke="#234b45" stroke-width="2"/><path d="M 100 160 Q 145 60 190 160 T 280 160 T 370 160 T 460 160 T 550 160" fill="none" stroke="#4fb3a5" stroke-width="3"/><line x1="100" y1="160" x2="100" y2="50" stroke="#2e9e8f" stroke-width="1" stroke-dasharray="3 3"/><line x1="190" y1="160" x2="190" y2="60" stroke="#2e9e8f" stroke-width="1" stroke-dasharray="3 3"/><text x="190" y="48" font-size="12" fill="#234b45" text-anchor="middle">Eₘ</text><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">有效值 U = Uₘ / √2（正弦式）</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">电表、铭牌读数均为有效值</text></svg>', caption: '图1　正弦交变电流波形，有效值等于峰值除以 √2。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电感与电容对交流的影响</text><rect x="70" y="90" width="240" height="120" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="190" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">电感 L</text><text x="190" y="148" font-size="12" fill="#234b45" text-anchor="middle">通直流、阻交流</text><text x="190" y="172" font-size="12" fill="#234b45" text-anchor="middle">X_L = 2πfL</text><rect x="370" y="90" width="240" height="120" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="490" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">电容 C</text><text x="490" y="148" font-size="12" fill="#234b45" text-anchor="middle">隔直流、通交流</text><text x="490" y="172" font-size="12" fill="#234b45" text-anchor="middle">X_C = 1/(2πfC)</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">频率越高：电感阻碍越大，电容阻碍越小</text></svg>', caption: '图2　电感通直阻交、电容隔直通交，二者都不消耗有功功率。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">理想变压器原理</text><rect x="120" y="100" width="60" height="100" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="150" y="155" font-size="12" fill="#234b45" text-anchor="middle">n₁</text><rect x="500" y="100" width="60" height="100" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="530" y="155" font-size="12" fill="#234b45" text-anchor="middle">n₂</text><rect x="300" y="80" width="80" height="140" rx="10" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="150" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">铁芯</text><line x1="180" y1="120" x2="300" y2="120" stroke="#234b45" stroke-width="2"/><line x1="180" y1="180" x2="300" y2="180" stroke="#234b45" stroke-width="2"/><line x1="380" y1="120" x2="500" y2="120" stroke="#234b45" stroke-width="2"/><line x1="380" y1="180" x2="500" y2="180" stroke="#234b45" stroke-width="2"/><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">U₁/U₂ = n₁/n₂，P₁ = P₂</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">理想变压器无能量损失，电压比等于匝数比</text></svg>', caption: '图3　理想变压器：电压比等于匝数比，输入功率等于输出功率。' }
    ],
    exercises: [
      { type: 'choice', question: '正弦式交变电流的有效值 U 与最大值 Uₘ 的关系是？', options: ['U = Uₘ × √2', 'U = Uₘ / √2', 'U = 2 × Uₘ', 'U = Uₘ'], answer: 'U = Uₘ / √2', explanation: '正弦式交变电流的有效值等于最大值除以 √2，即 U = Uₘ/√2，I = Iₘ/√2。该关系仅对正弦（或余弦）波形成立。日常市电 220 V 是有效值，其峰值约为 311 V。电功、功率、电表读数都用有效值。' },
      { type: 'choice', question: '理想变压器原、副线圈的电压关系与匝数关系是？', options: ['U₁/U₂ = n₂/n₁', 'U₁/U₂ = n₁/n₂', 'U₁ = U₂ 与匝数无关', 'U₁×U₂ = n₁×n₂'], answer: 'U₁/U₂ = n₁/n₂', explanation: '理想变压器原副线圈的电压之比等于匝数之比，即 U₁/U₂ = n₁/n₂。匝数多的线圈电压高，因此 n₂>n₁ 为升压变压器，反之降压。同时理想变压器无损耗，输入功率等于输出功率 P₁=P₂。' },
      { type: 'choice', question: '关于电感、电容对交变电流的影响，下列说法正确的是？', options: ['电感通交流阻直流', '电容通直流隔交流', '电感通直流阻交流，电容隔直通交', '二者都消耗大量有功功率'], answer: '电感通直流阻交流，电容隔直通交', explanation: '电感对恒定电流相当于导线（通直流），对交流有阻碍且频率越高阻碍越大；电容隔直通交，频率越高越容易通过。二者都不消耗有功功率，只与电源交换无功功率，故选项 C 正确。' },
      { type: 'fill', question: '市电最大值为 311 V，则其有效值为 ___ V（保留整数，√2≈1.414）。', answer: '220', explanation: '正弦式有效值 U = Uₘ/√2 = 311/1.414 ≈ 220 V。这正是我国家庭电路的标准电压有效值。注意用电器的耐压指标要看最大值 311 V，不能用有效值 220 V 去选。' },
      { type: 'fill', question: '理想变压器原线圈匝数 n₁ = 1000、副线圈 n₂ = 200，原线圈电压 U₁ = 200 V，则副线圈电压 U₂ = ___ V。', answer: '40', explanation: '由电压比 U₁/U₂ = n₁/n₂ 得 U₂ = U₁×n₂/n₁ = 200×200/1000 = 40 V。这是降压变压器，副线圈匝数少、电压低。若副线圈接负载，再由功率守恒 P₁=P₂ 求原、副线圈电流。' }
    ]
  });
})();
