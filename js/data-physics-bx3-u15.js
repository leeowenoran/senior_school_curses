/* ============================================================
 * 高二物理 · 必修 第三册 · 第十二章 电能 能量守恒定律
 * 课时15：电路中的能量转化
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u15',
    name: '电路中的能量转化',
    chapter: '必修第三册 · 第十二章 电能 能量守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、电流做功——电能转化成别的能量' },
      { type: 'paragraph', text: '通电的灯泡会发光发热，通电的电动机能转动，通电的电热壶能把水烧开。这些现象背后是同一件事：电荷在电场力推动下流过用电器，电场力对电荷做功，于是电能变成了光能、内能、机械能等其他形式的能量。这个由电流完成的功，就叫电功。' },
      { type: 'keypoint', label: '重点·电功公式', text: '<strong>电功 W = U × I × t</strong>。其中 U 是用电器两端的电压（单位伏特 V），I 是流过的电流（单位安培 A），t 是通电时间（单位秒 s）。计算出来的 W 单位是焦耳 J。' },
      { type: 'paragraph', text: '公式 W = U × I × t 可以这么理解：电压 U 表示每搬运 1 库仑电荷电场力做多少功，电流 I 表示每秒搬运多少库仑电荷，再乘时间 t，就是总共搬运的电荷量对应的总功。所以电功本质上就是电场力对电荷做的功。' },
      { type: 'list', items: ['电功是电流做的功，也就是电能转化成其他能量多少的量度', '公式 W = U × I × t，三个量都用国际单位时结果单位是焦耳 J', '日常用电常用"度"作单位，1 度 = 1 千瓦时 = 3.6×10⁶ 焦耳', '电能还可能转化成机械能（电动机）、化学能（充电电池）等，不限于内能'] },
      { type: 'heading', text: '二、电功率——做功有多快' },
      { type: 'paragraph', text: '同样消耗 1 度电，有的电器几分钟就用完，有的能用一整天。为了描述消耗电能的快慢，物理学引入电功率。它等于单位时间内电流做的功，也就是电功对时间的变化率。' },
      { type: 'keypoint', label: '重点·电功率公式', text: '<strong>电功率 P = U × I</strong>。它是电功 W 对时间 t 的比值，P = W / t = U × I。单位瓦特 W，1000 瓦 = 1 千瓦。P 越大，说明该用电器消耗电能越快。' },
      { type: 'example', label: '例题·求电功率', text: '一个标有"220 V，40 W"的灯泡接在家庭电路中使用，求它正常发光时的电流。<br><br><strong>解析</strong>：<br>由 P = U × I 可得 I = P / U = 40 W / 220 V ≈ 0.18 A。<br>所以正常发光时电流约为 0.18 安培。' },
      { type: 'warn', label: '易错', text: '<strong>P = U × I 是用电器的总功率（也叫总电功率），不是只算发热的功率。</strong>对纯电阻电路（如电炉、白炽灯），总功率才等于发热功率；对电动机、充电器这类非纯电阻电路，总功率大于发热功率，千万别把 P = U × I 直接当成热功率。' },
      { type: 'heading', text: '三、焦耳定律——电能转化成内能' },
      { type: 'paragraph', text: '电流通过导体时，导体会发热，这就是电流的热效应。英国物理学家焦耳通过大量实验发现：电流通过导体产生的热量，跟电流的二次方成正比，跟导体的电阻成正比，跟通电时间成正比。' },
      { type: 'keypoint', label: '重点·焦耳定律', text: '<strong>焦耳定律 Q = I² × R × t</strong>。Q 是产生的热量（单位焦耳 J），I 是电流（安培），R 是电阻（欧姆），t 是时间（秒）。这个公式对纯电阻和非纯电阻电路都成立。' },
      { type: 'keypoint', label: '重点·热功率', text: '<strong>热功率 P热 = I² × R</strong>，就是单位时间内导体因发热而消耗的功率。它等于热量 Q 对时间 t 的比值，P热 = Q / t = I² × R。' },
      { type: 'example', label: '例题·求发热量', text: '一根电阻丝阻值 R = 10 Ω，通以 2 A 的电流，工作 5 分钟，求产生的热量。<br><br><strong>解析</strong>：<br>t = 5 分钟 = 300 s。<br>Q = I² × R × t = 2² × 10 × 300 = 4 × 10 × 300 = 12000 J。<br>所以产生热量为 12000 焦耳，即 1.2×10⁴ J。' },
      { type: 'heading', text: '四、纯电阻电路与非纯电阻电路' },
      { type: 'paragraph', text: '同样是用电，电炉几乎把电能全变成热，而电动机把大部分电能变成转动的机械能，只有一小部分变成热。这两类电路对公式的使用差别很大，必须分清楚，否则极易算错。' },
      { type: 'table', headers: ['对比项', '纯电阻电路', '非纯电阻电路'], rows: [['典型例子', '白炽灯、电炉、电热丝', '电动机、电解槽、充电电池'], ['能量去向', '电能全部转化为内能', '电能主要转化为机械能或化学能，少量变内能'], ['电功与电热', 'W = Q', 'W > Q（电功大于电热）'], ['能用 P=U²/R 吗', '能，且 P=U×I=I²×R', '不能，U×I 不等于 I²×R']] },
      { type: 'warn', label: '易错', text: '<strong>非纯电阻电路不能用 P = U² / R 和 W = U² / R × t 来算发热！</strong>因为此时 U × I（总功率）大于 I² × R（热功率），U 不等于 I × R 这个欧姆定律形式（部分电压降在"非电阻"上）。只有纯电阻电路中才有 U = I × R、W = Q。' },
      { type: 'tip', label: '提示', text: '<strong>判断小窍门：</strong>看到"电动机""电解""充电"这类词，基本就是非纯电阻电路，发热要用 Q = I² × R × t 单独算，总功用 W = U × I × t 算，两者不相等。看到"电炉""电阻丝""白炽灯"则通常按纯电阻处理。' },
      { type: 'list', items: ['纯电阻电路：电能全部变内能，W = Q，可用 U = I × R 及其变形', '非纯电阻电路：电能主要变机械能或化学能，W > Q，发热只能用 Q = I² × R × t', '总功率 P总 = U × I 永远成立，热功率 P热 = I² × R 永远成立', '区分两类电路是本章计算题不丢分的关键'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电流做功：电能转化成其他能量</text><rect x="40" y="60" width="200" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="140" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">电源</text><circle cx="90" cy="150" r="16" fill="#4fb3a5"/><circle cx="190" cy="150" r="16" fill="#4fb3a5"/><text x="140" y="200" font-size="12" fill="#234b45" text-anchor="middle">提供电能</text><rect x="300" y="60" width="340" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="470" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">用电器（做功对象）</text><rect x="340" y="120" width="80" height="50" rx="6" fill="#4fb3a5"/><text x="380" y="150" font-size="12" fill="#234b45" text-anchor="middle">光能</text><rect x="440" y="120" width="80" height="50" rx="6" fill="#4fb3a5"/><text x="480" y="150" font-size="12" fill="#234b45" text-anchor="middle">内能</text><rect x="540" y="120" width="80" height="50" rx="6" fill="#4fb3a5"/><text x="580" y="150" font-size="12" fill="#234b45" text-anchor="middle">机械能</text><text x="470" y="216" font-size="12" fill="#234b45" text-anchor="middle">电能 W = U × I × t 转化出去</text><line x1="240" y1="150" x2="300" y2="150" stroke="#234b45" stroke-width="3"/><polygon points="300,144 312,150 300,156" fill="#234b45"/></svg>', caption: '图1　电源提供电能，电流流过用电器时电场力做功，电能转化成光、热、机械等多种能量。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">焦耳定律：电流越大发热越猛</text><rect x="120" y="60" width="180" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="210" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">电阻丝</text><rect x="160" y="110" width="100" height="30" rx="6" fill="#4fb3a5"/><rect x="160" y="150" width="100" height="30" rx="6" fill="#4fb3a5"/><text x="210" y="218" font-size="12" fill="#234b45" text-anchor="middle">I² × R × t = Q</text><rect x="380" y="60" width="180" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="470" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">发热多少</text><text x="470" y="130" font-size="13" fill="#234b45" text-anchor="middle">与 I 的二次方成正比</text><text x="470" y="160" font-size="13" fill="#234b45" text-anchor="middle">与 R 成正比</text><text x="470" y="190" font-size="13" fill="#234b45" text-anchor="middle">与 t 成正比</text><text x="340" y="282" font-size="12" fill="#234b45" text-anchor="middle">电流加倍，相同电阻下热量变 4 倍</text></svg>', caption: '图2　电流通过电阻丝发热，热量 Q 与电流二次方、电阻、时间三者成正比，这就是焦耳定律。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">纯电阻电路与非纯电阻电路的区别</text><rect x="40" y="60" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">纯电阻（电炉）</text><rect x="75" y="115" width="210" height="40" rx="6" fill="#4fb3a5"/><text x="180" y="140" font-size="12" fill="#234b45" text-anchor="middle">电能全部 → 内能</text><text x="180" y="185" font-size="13" fill="#234b45" text-anchor="middle">W = Q</text><text x="180" y="210" font-size="13" fill="#234b45" text-anchor="middle">U = I × R 成立</text><rect x="360" y="60" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">非纯电阻（电动机）</text><rect x="395" y="110" width="210" height="32" rx="6" fill="#4fb3a5"/><text x="500" y="131" font-size="12" fill="#234b45" text-anchor="middle">电能 → 机械能（大部分）</text><rect x="395" y="150" width="210" height="32" rx="6" fill="#4fb3a5"/><text x="500" y="171" font-size="12" fill="#234b45" text-anchor="middle">电能 → 内能（少量）</text><text x="500" y="212" font-size="13" fill="#234b45" text-anchor="middle">W > Q，U × I ≠ I² × R</text></svg>', caption: '图3　纯电阻电路电能全变热（左），非纯电阻电路电能主要变机械能且 W 大于 Q（右），两者公式用法不同。' }
    ],
    exercises: [
      { type: 'choice', question: '关于电功 W = U × I × t，下列说法正确的是？', options: ['电功的单位是瓦特 W', '只有纯电阻电路才能用电功公式 W = U × I × t', '电功表示电能转化成其他形式能量的多少', '电压越大、电流越小，电功一定越大'], answer: '电功表示电能转化成其他形式能量的多少', explanation: '电功是电流做的功，等于电能转化成其他形式能量的总量，其国际单位是焦耳 J，不是瓦特（瓦特是功率单位）。公式 W = U × I × t 对一切电路（包括电动机等非纯电阻电路）都适用，并不局限于纯电阻。电功大小由 U、I、t 三者共同决定，不能单看其中一个量下结论。' },
      { type: 'choice', question: '一个用电器两端电压 12 V，电流 2 A，它的总电功率是？', options: ['6 W', '24 W', '14 W', '10 W'], answer: '24 W', explanation: '根据电功率公式 P = U × I，代入 U = 12 V、I = 2 A，得 P = 12 × 2 = 24 W。这里算出的是总电功率，也就是该用电器消耗电能的总快慢。若它是纯电阻，则热功率也等于 24 W；若是非纯电阻（如电动机），实际发热功率会小于 24 W。' },
      { type: 'choice', question: '关于焦耳定律 Q = I² × R × t，下列说法正确的是？', options: ['它只适用于纯电阻电路', '热量与电流成正比', '热量与电流的二次方成正比', '电动机发热不能用此式计算'], answer: '热量与电流的二次方成正比', explanation: '焦耳定律 Q = I² × R × t 对任何有电阻的导体、任何电路（包括电动机、电解槽等非纯电阻电路）都成立，因此电动机发热也必须用它计算。公式中热量与电流的二次方成正比、与电阻成正比、与时间成正比，而不是与电流简单成正比。' },
      { type: 'fill', question: '纯电阻电路中电能全部转化为内能，所以电功 W 与电热 Q 的关系是 W ___ Q（填"="或">"）。', answer: '=', explanation: '在纯电阻电路里，电流做的功全部变成了导体的内能，没有任何其他形式的能量输出，因此电功在数值上等于电热，即 W = Q。此时欧姆定律的变形也都成立，例如 P = U × I = I² × R = U² / R 可以互换使用。' },
      { type: 'fill', question: '一台电动机工作时两端电压 U、电流 I，则其发热功率只能用 P热 = ___ 计算（用含 I 和 R 的式子填写）。', answer: 'I² × R', explanation: '电动机属于非纯电阻电路，电能主要转化为机械能，只有一小部分变成内能，因此总功率 U × I 大于热功率。发热功率必须由焦耳定律的热功率形式给出，即 P热 = I² × R，而不能用 U² / R 或 U × I，因为此时 U ≠ I × R 不再成立。' }
    ]
  });
})();
