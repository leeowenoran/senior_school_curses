/* ============================================================
 * 高三复习 · 计算压轴 · 专题二 电磁学计算
 * 课时7：电场性质与带电粒子在电场中运动计算
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u7',
    name: '电场性质与带电粒子在电场中运动计算',
    chapter: '计算压轴 · 专题二 电磁学计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、电场强度：描述电场本身强弱的物理量' },
      { type: 'paragraph', text: '电荷周围存在一个我们看不见、摸不着的特殊物质，叫做电场。电场对放入其中的其他电荷有力的作用，这个力叫电场力。为了描述电场对电荷"推拉"的强弱，我们引入电场强度 E。它只由电场本身决定，与放入的试探电荷无关。' },
      { type: 'keypoint', label: '重点·电场强度定义', text: '<strong>电场强度的定义式：E = F / q。</strong>其中 F 是试探电荷受到的电场力，q 是试探电荷的电荷量。E 的方向规定为正电荷在该点所受电场力的方向。单位：牛/库（N/C）。' },
      { type: 'list', items: ['E 是矢量，有大小也有方向，方向与正电荷受力方向相同', '电场强度与试探电荷 q 无关，只由场源电荷和位置决定', '点电荷产生的电场：E = k × q / r²，k = 9.0×10⁹ N·m²/C²', '多个电荷产生的电场，某点的 E 等于各电荷单独产生电场的矢量和'] },
      { type: 'paragraph', text: '点电荷电场公式 E = k × q / r² 说明：离点电荷越近（r 越小），场强越大；电荷量 q 越大，场强越大。k 是静电力常量，数值约 9.0×10⁹。' },
      { type: 'heading', text: '二、电势、电势差与电场力做功' },
      { type: 'paragraph', text: '电场不仅能施力，还能对电荷做功，说明电场具有能量。电势就像"高度"，电势差就像"高度差"，电荷在电势差之间移动，电场力就会做功。' },
      { type: 'keypoint', label: '重点·电势差与电场力做功', text: '<strong>电势差定义：U_AB = W / q，即电场力做功除以电荷量。</strong><br><strong>匀强电场中：U = E × d</strong>，d 是沿电场方向的距离。<br><strong>电场力做功：W = q × U</strong>，与路径无关，只与初末位置的电势差有关。' },
      { type: 'list', items: ['沿电场线方向，电势逐渐降低', '电场力做正功，电势能减少；做负功，电势能增加', 'W = q × U_AB，q 带正负号代入计算', '电势差 U 与零电势点选取无关'] },
      { type: 'example', label: '例题·电势差计算', text: '例：在匀强电场中，场强 E = 2.0×10³ N/C，沿电场方向相距 d = 5.0 cm 的两点 A、B，求 U_AB。<br><strong>解析</strong>：先把距离化成米，d = 0.050 m。由 U = E × d 得 U_AB = 2.0×10³ × 0.050 = 100 V。因为沿电场方向电势降低，所以 A 点电势比 B 点高 100 V，即 U_AB = 100 V。' },
      { type: 'warn', label: '易错', text: '<strong>用 U = E × d 时，d 必须是沿电场线方向的距离，不是两点间的直线距离。</strong>如果两点连线与电场方向有夹角 θ，要用 d = L × cosθ。另外电场力做功 W = q × U 中的 q 要带正负号，正电荷顺电场线移动做正功，负电荷则相反。' },
      { type: 'heading', text: '三、带电粒子的加速（用动能定理）' },
      { type: 'paragraph', text: '带电粒子（如电子、质子）在电场中被加速时，电场力做正功，粒子的动能增加。不管电场是否匀强、路径是否弯曲，都可以用动能定理一步算出末速度，这是高考最常用的方法。' },
      { type: 'keypoint', label: '重点·加速公式', text: '<strong>动能定理：q × U = ½ × m × v² − ½ × m × v₀²。</strong>若初速度为零，则 <strong>q × U = ½ × m × v²</strong>，解得 <strong>v = √(2 × q × U / m)</strong>。可见末速度只与加速电压 U 和粒子比荷 q/m 有关，与路径无关。' },
      { type: 'example', label: '例题·加速末速度', text: '例：电子（电荷量 e = 1.6×10⁻¹⁹ C，质量 m = 9.1×10⁻³¹ kg）由静止经 U = 500 V 电压加速，求末速度。<br><strong>解析</strong>：由 qU = ½mv² 得 v = √(2qU/m) = √(2 × 1.6×10⁻¹⁹ × 500 / 9.1×10⁻³¹) = √(1.6×10⁻¹⁶ / 9.1×10⁻³¹) = √(1.76×10¹⁴) ≈ 1.33×10⁷ m/s。' },
      { type: 'heading', text: '四、带电粒子在匀强电场中的偏转（类平抛）' },
      { type: 'paragraph', text: '当带电粒子以初速度 v₀ 垂直射入匀强电场时，它在垂直于电场方向做匀速直线运动，在平行于电场方向做匀加速直线运动，合成运动是一条抛物线，与重力场中的平抛运动完全类似，叫做"类平抛"。' },
      { type: 'keypoint', label: '重点·偏转位移', text: '<strong>加速度 a = F/m = q×E/m = q×U/(m×d板)</strong>（U 为偏转电压，d板 为极板间距）。<br>偏转时间 t = L / v₀（L 为极板长度）。<br><strong>侧移量 y = ½ × a × t² = q×U×L² / (2×m×d板×v₀²)</strong>。<br>离开电场时偏转角的正切 tanθ = v_y / v₀ = q×U×L / (m×d板×v₀²)。' },
      { type: 'example', label: '例题·偏转侧移量', text: '例：质子以 v₀ = 1.0×10⁵ m/s 垂直进入长 L = 0.10 m、间距 d板 = 0.020 m 的平行板间，偏转电压 U = 200 V。求侧移量 y（质子 q = 1.6×10⁻¹⁹ C，m = 1.67×10⁻²⁷ kg）。<br><strong>解析</strong>：a = qU/(m×d板) = 1.6×10⁻¹⁹×200/(1.67×10⁻²⁷×0.020) ≈ 9.58×10¹¹ m/s²；t = L/v₀ = 0.10/1.0×10⁵ = 1.0×10⁻⁶ s；y = ½at² = 0.5×9.58×10¹¹×(1.0×10⁻⁶)² ≈ 4.8×10⁻¹ m = 4.8 cm。' },
      { type: 'table', headers: ['对比项', '加速过程', '偏转过程'], rows: [['受力特点', '电场力与速度同向，做匀加速', '垂直速度方向受力，做类平抛'], ['核心公式', 'qU = ½mv²', 'y = qUL²/(2md板v₀²)'], ['所用定理', '动能定理', '运动的合成与分解'], ['末速度决定因素', '只与 U 和 q/m 有关', '与 U、L、d板、v₀ 都有关']] },
      { type: 'tip', label: '提示', text: '<strong>先加速后偏转的题，常用"加速得 v₀，偏转用 v₀"两步接力。</strong>先由 qU₁ = ½mv₀² 求出进入偏转电场的速度 v₀，再把 v₀ 代入偏转公式。记住：偏转位移与比荷 q/m 成正比，与 v₀ 的平方成反比。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">正点电荷的电场线分布</text><circle cx="340" cy="170" r="22" fill="#4fb3a5"/><text x="340" y="176" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">+q</text><line x1="362" y1="170" x2="460" y2="170" stroke="#234b45" stroke-width="2"/><polygon points="460,163 460,177 472,170" fill="#234b45"/><line x1="355" y1="154" x2="425" y2="85" stroke="#234b45" stroke-width="2"/><polygon points="425,79 425,92 437,85" fill="#234b45"/><line x1="340" y1="148" x2="340" y2="50" stroke="#234b45" stroke-width="2"/><polygon points="333,50 347,50 340,38" fill="#234b45"/><line x1="324" y1="154" x2="255" y2="85" stroke="#234b45" stroke-width="2"/><polygon points="255,79 255,92 243,85" fill="#234b45"/><line x1="318" y1="170" x2="220" y2="170" stroke="#234b45" stroke-width="2"/><polygon points="220,163 220,177 208,170" fill="#234b45"/><line x1="324" y1="186" x2="255" y2="255" stroke="#234b45" stroke-width="2"/><polygon points="255,249 255,262 243,255" fill="#234b45"/><line x1="340" y1="192" x2="340" y2="290" stroke="#234b45" stroke-width="2"/><polygon points="333,290 347,290 340,302" fill="#234b45"/><line x1="355" y1="186" x2="425" y2="255" stroke="#234b45" stroke-width="2"/><polygon points="425,249 425,262 437,255" fill="#234b45"/><text x="340" y="290" font-size="12" fill="#234b45" text-anchor="middle"></text></svg>', caption: '图1　正点电荷的电场线从电荷向外辐射，离电荷越近场强越大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">带电粒子的加速装置</text><rect x="60" y="120" width="40" height="80" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="580" y="120" width="40" height="80" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="80" y="165" font-size="13" fill="#234b45" text-anchor="middle">+</text><text x="600" y="165" font-size="13" fill="#234b45" text-anchor="middle">-</text><line x1="100" y1="160" x2="580" y2="160" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="4 4"/><circle cx="180" cy="160" r="8" fill="#4fb3a5"/><line x1="188" y1="160" x2="280" y2="160" stroke="#234b45" stroke-width="2"/><polygon points="280,154 280,166 292,160" fill="#234b45"/><circle cx="300" cy="160" r="8" fill="#4fb3a5"/><line x1="308" y1="160" x2="400" y2="160" stroke="#234b45" stroke-width="2"/><polygon points="400,154 400,166 412,160" fill="#234b45"/><circle cx="420" cy="160" r="8" fill="#4fb3a5"/><line x1="428" y1="160" x2="520" y2="160" stroke="#234b45" stroke-width="2"/><polygon points="520,154 520,166 532,160" fill="#234b45"/><text x="340" y="210" font-size="13" fill="#234b45" text-anchor="middle">加速电压 U：qU = ½mv²</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">电场力做正功，粒子动能增加</text></svg>', caption: '图2　带电粒子在两板间被加速，由动能定理 qU = ½mv² 求末速度。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">带电粒子在匀强电场中的类平抛偏转</text><rect x="120" y="90" width="360" height="20" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="120" y="200" width="360" height="20" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="100" y="105" font-size="12" fill="#234b45" text-anchor="middle">+</text><text x="100" y="215" font-size="12" fill="#234b45" text-anchor="middle">-</text><path d="M 120 110 Q 230 110 300 130 T 480 195" fill="none" stroke="#4fb3a5" stroke-width="3"/><circle cx="120" cy="110" r="7" fill="#234b45"/><line x1="120" y1="110" x2="150" y2="110" stroke="#234b45" stroke-width="2"/><polygon points="150,104 150,116 162,110" fill="#234b45"/><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">水平匀速，竖直匀加速，轨迹为抛物线</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">侧移量 y = qUL² / (2md板v₀²)</text></svg>', caption: '图3　粒子垂直射入平行板电场，做类平抛运动，轨迹为抛物线。' }
    ],
    exercises: [
      { type: 'choice', question: '关于电场强度，下列说法正确的是？', options: ['E = F / q 说明 E 与 F 成正比、与 q 成反比', '电场强度是矢量，方向是正电荷受力方向', '电场强度只存在于点电荷周围', '放入试探电荷后电场强度才会存在'], answer: '电场强度是矢量，方向是正电荷受力方向', explanation: 'E = F / q 是定义式，电场强度由电场本身决定，与试探电荷的 F、q 无关，选项 A 错。电场强度是矢量，方向规定为正电荷在该点所受电场力方向，选项 B 正确。只要有电荷就有电场，与是否放入试探电荷无关，C、D 错。' },
      { type: 'choice', question: '在匀强电场中，沿电场方向相距 d 的两点间电势差 U 等于？', options: ['U = E / d', 'U = E × d', 'U = d / E', 'U = E × d²'], answer: 'U = E × d', explanation: '匀强电场中电势差与场强的关系为 U = E × d，其中 d 是两点沿电场方向的距离。注意 d 必须沿电场线方向，不是任意连线长度。单位上 E 取 N/C 或 V/m，d 取 m，得到 U 的单位是 V。' },
      { type: 'choice', question: '带电粒子由静止经电压 U 加速后，末速度 v 的表达式是？', options: ['v = qU / m', 'v = √(2qU/m)', 'v = 2qU / m', 'v = √(qU/2m)'], answer: 'v = √(2qU/m)', explanation: '由动能定理，电场力做功 qU 全部转化为动能，即 qU = ½mv²。解得 v = √(2qU/m)。可见末速度只与加速电压 U 和比荷 q/m 有关，与路径和电场是否匀强无关。' },
      { type: 'fill', question: '带电粒子在匀强电场中做类平抛时，垂直于电场方向的加速度 a = ___（用 q、E、m 表示）。', answer: 'qE / m', explanation: '粒子只受电场力 F = qE，由牛顿第二定律 a = F/m = qE/m。若电场由平行板提供，E = U/d板，则 a = qU/(m×d板)。加速度恒定，因此垂直方向做匀加速运动，配合水平匀速合成类平抛。' },
      { type: 'fill', question: '在匀强电场中，电场力对电荷做功 W = ___（用 q 和两点间电势差 U 表示）。', answer: 'q × U', explanation: '电场力做功等于电荷量乘以初末位置的电势差，即 W = q × U。计算时 q 要带正负号，若电场力做正功则电势能减少，做负功则电势能增加。该式与路径无关，只取决于初末位置的电势差。' }
    ]
  });
})();
