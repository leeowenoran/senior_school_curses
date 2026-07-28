/* ============================================================
 * 高三复习 · 计算压轴 · 专题二 电磁学计算
 * 课时8：恒定电流电路计算
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u8',
    name: '恒定电流电路计算',
    chapter: '计算压轴 · 专题二 电磁学计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、闭合电路欧姆定律：含电源电路的核心' },
      { type: 'paragraph', text: '一个完整电路通常有电源、用电器和导线。电源有电动势 E（提供电压的能力）和内阻 r。把外电路总电阻记作 R，则电路中的电流由闭合电路欧姆定律决定，这是一切电路计算的总纲。' },
      { type: 'keypoint', label: '重点·闭合电路欧姆定律', text: '<strong>电流：I = E / (R + r)。</strong><br><strong>路端电压（外电压）：U = E − I × r = I × R。</strong><br><strong>电源总功率：P总 = E × I；输出功率：P出 = U × I；内耗功率：P内 = I² × r。</strong>' },
      { type: 'list', items: ['E 是电动势，等于电源没有接外电路时的路端电压', 'r 是电源内阻，电流越大内压降 I×r 越大', '外电阻 R 增大（如滑变调大），电流 I 减小，路端电压 U 增大', '当 R = r 时，电源输出功率最大，为 E²/(4r)'] },
      { type: 'example', label: '例题·闭合电路基本量', text: '例：电源电动势 E = 12 V，内阻 r = 1 Ω，外电阻 R = 5 Ω。求电流 I、路端电压 U 和内耗功率。<br><strong>解析</strong>：I = E/(R+r) = 12/(5+1) = 2 A；U = I×R = 2×5 = 10 V（或 U = E − I×r = 12 − 2×1 = 10 V）；内耗功率 P内 = I²×r = 2²×1 = 4 W。' },
      { type: 'heading', text: '二、电功、电热与电功率' },
      { type: 'paragraph', text: '电流通过用电器会做功，把电能转化为其他形式的能。如果是纯电阻（如电炉丝、白炽灯），电能全部变成热；如果是电动机、电解槽等非纯电阻，一部分变成热，其余变成机械能或化学能，这时电功和电热不相等。' },
      { type: 'keypoint', label: '重点·电功与电热', text: '<strong>电功（消耗电能）：W = U × I × t。</strong><br><strong>电功率：P = U × I。</strong><br><strong>纯电阻电热（焦耳定律）：Q = I² × R × t。</strong><br>纯电阻时 W = Q，即 U×I×t = I²×R×t，故 U = I×R；非纯电阻时 W > Q。' },
      { type: 'list', items: ['纯电阻：U = I×R，P = I²×R = U²/R', '非纯电阻（如电动机）：U > I×R，不能用 U²/R 算总功率', '电动机输出机械功率 = 总功率 − 热功率 = U×I − I²×R', '计算功率先判断是纯电阻还是非纯电阻'] },
      { type: 'example', label: '例题·电动机功率', text: '例：电动机两端电压 U = 220 V，电流 I = 5 A，线圈电阻 R = 2 Ω。求输入功率、热功率和机械功率。<br><strong>解析</strong>：输入功率 P入 = U×I = 220×5 = 1100 W；热功率 P热 = I²×R = 5²×2 = 50 W；机械功率 P机 = P入 − P热 = 1100 − 50 = 1050 W。可见非纯电阻中电热只是很小一部分。' },
      { type: 'warn', label: '易错', text: '<strong>非纯电阻电路中绝不能用 P = U²/R 或 U = I×R 计算总功率。</strong>例如电动机，其两端电压 U 大于线圈上的电压降 I×R。只有线圈发热才用 Q = I²×R×t，总电功仍用 W = U×I×t。混淆二者是高考高频失分点。' },
      { type: 'heading', text: '三、串并联电阻与电表改装' },
      { type: 'paragraph', text: '多个电阻串联时总电阻等于各电阻之和；并联时总电阻的倒数等于各电阻倒数之和。串联分压、并联分流，这是分析复杂电路的基础。' },
      { type: 'keypoint', label: '重点·串并联规律', text: '<strong>串联：R总 = R₁ + R₂ + …，电流处处相等，电压按电阻分配（U₁/U₂ = R₁/R₂）。</strong><br><strong>并联：1/R总 = 1/R₁ + 1/R₂ + …，各支路电压相等，电流按电阻反比分配（I₁/I₂ = R₂/R₁）。</strong>' },
      { type: 'list', items: ['串联电阻越多总电阻越大', '并联电阻越多总电阻越小，且总电阻小于任一分支', 'n 个相同电阻 R 并联，总阻为 R/n', '电流表并联小电阻扩量程，电压表串联大电阻扩量程'] },
      { type: 'heading', text: '四、含电容器电路的分析' },
      { type: 'paragraph', text: '电容器在直流稳态电路中相当于断路，没有电流流过，但它两端有电压、能储存电荷。分析含容电路的关键是：先去掉电容器，求出它两端所接两点间的电势差，再用 Q = C × U 算带电量。' },
      { type: 'keypoint', label: '重点·含容电路', text: '<strong>直流稳态下电容器支路无电流，可视为断路。</strong><br><strong>电容器带电量：Q = C × U，其中 U 是两极板间的电压。</strong><br>若与电容器串联的电阻中没有电流，则这些电阻不分压，电容器电压等于其直接连接的两节点电势差。' },
      { type: 'example', label: '例题·电容器电量', text: '例：电动势 E = 10 V、内阻不计的电源，接 R₁ = 4 Ω 与 R₂ = 6 Ω 串联，电容器 C = 2 μF 并联在 R₂ 两端。求电容器带电量。<br><strong>解析</strong>：电路电流 I = E/(R₁+R₂) = 10/10 = 1 A；电容器与 R₂ 并联，其电压 U = I×R₂ = 1×6 = 6 V；带电量 Q = C×U = 2×10⁻⁶ × 6 = 1.2×10⁻⁵ C。' },
      { type: 'warn', label: '易错', text: '<strong>含容电路里，与电容器串联的电阻在稳态下不分压（因为无电流、无压降）。</strong>常见错误是把串联电阻也算进电容器电压。正确做法是：电容器电压等于它两端节点间的电势差，等于与之并联的那个电阻（若有电流）两端的电压。' },
      { type: 'table', headers: ['对比项', '纯电阻电路', '非纯电阻电路'], rows: [['欧姆定律 U=IR', '成立', '不成立（U > IR）'], ['电功 W', 'U×I×t', 'U×I×t'], ['电热 Q', '等于 W', '仅 I²×R×t，小于 W'], ['典型用电器', '电炉、白炽灯', '电动机、电解槽']] },
      { type: 'tip', label: '提示', text: '<strong>电路计算四步法：① 看清是纯电阻还是非纯电阻；② 用闭合电路欧姆定律求总电流；③ 串并联分配求各部分电压电流；④ 含电容器先求两端电压再用 Q = C×U。</strong>列公式前先把单位统一成 V、A、Ω、W。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">闭合电路欧姆定律模型</text><rect x="80" y="120" width="120" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="140" y="148" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">电源 E,r</text><rect x="280" y="120" width="120" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="148" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">外电阻 R</text><line x1="200" y1="150" x2="280" y2="150" stroke="#234b45" stroke-width="2"/><line x1="400" y1="150" x2="480" y2="150" stroke="#234b45" stroke-width="2"/><line x1="480" y1="150" x2="480" y2="240" stroke="#234b45" stroke-width="2"/><line x1="480" y1="240" x2="140" y2="240" stroke="#234b45" stroke-width="2"/><line x1="140" y1="240" x2="80" y2="180" stroke="#234b45" stroke-width="2"/><text x="340" y="200" font-size="13" fill="#234b45" text-anchor="middle">I = E / (R + r)</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">路端电压 U = E − I×r</text></svg>', caption: '图1　闭合电路：电流 I = E/(R+r)，路端电压 U = E − I×r。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">纯电阻与非纯电阻功率对比</text><rect x="60" y="80" width="240" height="160" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="110" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">纯电阻（电炉）</text><text x="180" y="145" font-size="13" fill="#234b45" text-anchor="middle">W = Q = I²Rt</text><text x="180" y="170" font-size="13" fill="#234b45" text-anchor="middle">U = IR 成立</text><text x="180" y="195" font-size="13" fill="#234b45" text-anchor="middle">电功全变热</text><rect x="380" y="80" width="240" height="160" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="110" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">非纯电阻（电动机）</text><text x="500" y="145" font-size="13" fill="#234b45" text-anchor="middle">W = UI t > Q</text><text x="500" y="170" font-size="13" fill="#234b45" text-anchor="middle">U > IR</text><text x="500" y="195" font-size="13" fill="#234b45" text-anchor="middle">部分变机械能</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">非纯电阻绝不能用 U²/R 算总功率</text></svg>', caption: '图2　纯电阻电功等于电热；非纯电阻电功大于电热。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">含电容器电路分析</text><rect x="80" y="120" width="90" height="50" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="125" y="150" font-size="12" fill="#234b45" text-anchor="middle">R₁</text><rect x="260" y="120" width="90" height="50" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="305" y="150" font-size="12" fill="#234b45" text-anchor="middle">R₂</text><rect x="420" y="100" width="120" height="40" rx="6" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="480" y="125" font-size="12" fill="#234b45" text-anchor="middle">电容器 C</text><line x1="170" y1="145" x2="260" y2="145" stroke="#234b45" stroke-width="2"/><line x1="350" y1="145" x2="420" y2="145" stroke="#234b45" stroke-width="2"/><line x1="540" y1="120" x2="540" y2="145" stroke="#234b45" stroke-width="2"/><line x1="540" y1="145" x2="480" y2="145" stroke="#234b45" stroke-width="2"/><text x="305" y="200" font-size="13" fill="#234b45" text-anchor="middle">电容器与 R₂ 并联：U_C = I×R₂</text><text x="305" y="240" font-size="13" fill="#234b45" text-anchor="middle">Q = C × U_C</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">稳态下容支路断路，先求并联电压</text></svg>', caption: '图3　电容器与 R₂ 并联，先求 R₂ 两端电压即得电容器电压。' }
    ],
    exercises: [
      { type: 'choice', question: '闭合电路中，路端电压 U 与电流 I 的关系是？', options: ['U = E + I×r', 'U = E − I×r', 'U = I×r', 'U = E × r'], answer: 'U = E − I×r', explanation: '根据闭合电路欧姆定律，电源电动势 E 等于路端电压 U 与内压降 I×r 之和，即 E = U + I×r，所以路端电压 U = E − I×r。当外电阻增大、电流减小时，路端电压随之增大；短路时 I 很大，U 趋近于 0。' },
      { type: 'choice', question: '关于电动机这类非纯电阻用电器，下列说法正确的是？', options: ['U = I×R 仍然成立', '电功 W = I²×R×t', '电功 W = U×I×t，且 W 大于电热 Q', '电热 Q = U²/R×t'], answer: '电功 W = U×I×t，且 W 大于电热 Q', explanation: '非纯电阻（如电动机）两端电压 U 大于线圈电阻压降 I×R，故 U = IR 不成立，选项 A 错。电功仍按 W = U×I×t 计算，电热只用 Q = I²×R×t，且 W > Q，选项 B、D 错，C 正确。' },
      { type: 'choice', question: '两个电阻 R₁、R₂ 并联，通过它们的电流之比 I₁/I₂ 等于？', options: ['R₁/R₂', 'R₂/R₁', '(R₁+R₂)/R₁', '1/2'], answer: 'R₂/R₁', explanation: '并联电路各支路电压相等，由 I = U/R 可知电流与电阻成反比，即 I₁/I₂ = R₂/R₁。电阻小的支路电流大。同理串联时电压与电阻成正比 U₁/U₂ = R₁/R₂。' },
      { type: 'fill', question: '电源电动势 E = 6 V、内阻 r = 0.5 Ω，外电阻 R = 5.5 Ω，则电路电流 I = ___ A。', answer: '1', explanation: '由闭合电路欧姆定律 I = E/(R+r) = 6/(5.5+0.5) = 6/6 = 1 A。计算时注意把内阻 r 与外电阻 R 相加作为总电阻，电流只由电动势除以总电阻决定。' },
      { type: 'fill', question: '直流稳态下，与电容器串联的电阻中___（填"有"或"无"）电流，该电阻___（填"分压"或"不分压"）。', answer: '无|不分压', explanation: '直流稳态时电容器相当于断路，与之串联的电阻中没有电流流过，因此该电阻两端没有电压降，不分压。电容器两端电压等于其直接连接的两节点间的电势差，分析含容电路要先按断路处理再求节点电压。' }
    ]
  });
})();
