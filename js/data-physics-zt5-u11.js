/* ============================================================
 * 高三复习 · 计算压轴 · 专题二 电磁学计算
 * 课时11：电磁感应计算
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u11',
    name: '电磁感应计算',
    chapter: '计算压轴 · 专题二 电磁学计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、磁通量与楞次定律' },
      { type: 'paragraph', text: '磁通量 Φ 可以理解为穿过某一面积的磁感线"条数"，公式 Φ = B × S（B 与面垂直时）。当穿过回路的磁通量发生变化时，回路中就会产生感应电流，这就是电磁感应现象。' },
      { type: 'keypoint', label: '重点·楞次定律', text: '<strong>楞次定律：感应电流的磁场总是阻碍引起感应电流的磁通量的变化。</strong><br>简记："增反减同"——原磁通量增加时感应磁场与原磁场反向，减少时同向。还可记为"阻碍相对运动"。' },
      { type: 'list', items: ['磁通量 Φ = B × S（面积与磁场垂直时）', 'Φ 变化的原因：B 变、S 变、或二者夹角变', '楞次定律判断感应电流方向，是电磁感应第一工具', '感应电流的效果总是阻碍引起它的原因'] },
      { type: 'paragraph', text: '用楞次定律判断方向的步骤：① 确定原磁场方向；② 看磁通量增减；③ 由"增反减同"定感应磁场方向；④ 用右手螺旋定则（安培定则）定感应电流方向。' },
      { type: 'heading', text: '二、法拉第电磁感应定律：感应电动势大小' },
      { type: 'paragraph', text: '感应电动势的大小由磁通量变化的快慢决定，变化越快（单位时间变化量越大），感应电动势越大。这是计算感应电动势的根本定律。' },
      { type: 'keypoint', label: '重点·法拉第定律', text: '<strong>感应电动势 E感 = n × ΔΦ / Δt</strong>（n 为线圈匝数）。<br>若回路面积 S 不变、磁场均匀变化：E感 = n × S × ΔB / Δt。<br>平均电动势用法拉第定律；瞬时值用对时间的导数。' },
      { type: 'list', items: ['E感 与磁通量变化率 ΔΦ/Δt 成正比，不是与 Φ 成正比', 'n 匝线圈电动势是单匝的 n 倍', '单位：Φ 用 Wb，t 用 s，E感 得 V', '楞次定律定方向，法拉第定律定大小，二者配合'] },
      { type: 'example', label: '例题·法拉第定律', text: '例：100 匝线圈，面积 S = 0.02 m²，磁场在 0.1 s 内由 0 均匀增大到 0.5 T，求平均感应电动势。<br><strong>解析</strong>：ΔΦ = ΔB × S = (0.5 − 0)×0.02 = 0.01 Wb；ΔΦ/Δt = 0.01/0.1 = 0.1 Wb/s；E感 = n×ΔΦ/Δt = 100×0.1 = 10 V。' },
      { type: 'warn', label: '易错', text: '<strong>法拉第定律里是磁通量的"变化率" ΔΦ/Δt，不是磁通量 Φ 本身。</strong>磁通量很大但不变（ΔΦ/Δt=0）时电动势为零。另外 Φ = B×S 只适用于 B 垂直面积，若 B 与面有夹角 θ，要用 Φ = B×S×cosθ。' },
      { type: 'heading', text: '三、导体棒切割磁感线' },
      { type: 'paragraph', text: '一段导体棒在磁场中运动、切割磁感线时，也会产生感应电动势。这是高考最典型的模型，常见于导轨上的金属棒。' },
      { type: 'keypoint', label: '重点·切割公式', text: '<strong>棒垂直切割磁感线时：E = B × l × v</strong>（l 为棒长，v 为垂直于磁场和棒的速度）。<br>若 v 与 B 不垂直，取有效分量；若棒与 v 不垂直，l 取垂直速度方向的有效长度。' },
      { type: 'list', items: ['B、l、v 三者两两垂直时直接用 E = Blv', 'B 恒定、l 恒定，E 与 v 成正比', '切割产生的电动势方向用右手定则判断', '多段棒或转动切割（E = ½Bωl²）是进阶情形'] },
      { type: 'example', label: '例题·棒切割', text: '例：长 l = 0.4 m 的金属棒以 v = 2 m/s 垂直切割 B = 0.5 T 的匀强磁场，求感应电动势。<br><strong>解析</strong>：B、l、v 两两垂直，直接用 E = Blv = 0.5 × 0.4 × 2 = 0.4 V。电动势方向由右手定则判定（磁感线穿手心，大拇指指运动方向，四指指向感应电动势正极）。' },
      { type: 'heading', text: '四、导轨上的导体棒：力、电、能综合' },
      { type: 'paragraph', text: '导体棒放在平行导轨上，在磁场中运动切割磁感线，会产生感应电流，而电流又使棒受安培力。安培力阻碍棒的运动，这正是"阻碍磁通量变化"的体现。这类题常结合牛顿定律和能量守恒。' },
      { type: 'keypoint', label: '重点·导轨棒模型', text: '<strong>感应电流 I = E / R = B×l×v / R。</strong><br><strong>安培力 F安 = B×I×l = B²×l²×v / R，方向阻碍运动。</strong><br><strong>最终匀速时 F外 = F安（合力为零）。</strong><br>能量：外力功 = 电能（焦耳热）。' },
      { type: 'example', label: '例题·双力平衡', text: '例：导轨上棒受恒力 F外 = 0.2 N 拉动，磁感应强度 B = 0.5 T，棒长 l = 0.4 m，总电阻 R = 0.1 Ω。求最终匀速速度。<br><strong>解析</strong>：匀速时 F外 = F安 = B²l²v/R，故 v = F外×R/(B²l²) = 0.2×0.1/(0.5²×0.4²) = 0.02/(0.25×0.16) = 0.02/0.04 = 0.5 m/s。' },
      { type: 'warn', label: '易错', text: '<strong>导轨棒最终匀速的条件是外力等于安培力，不是速度为零。</strong>常见错误是直接令 v=0。实际上棒从静止加速，速度增大则感应电流和安培力都增大，直到安培力等于外力才匀速。另外求电量时用 q = ΔΦ/R 而不是用瞬时电流。' },
      { type: 'table', headers: ['情形', '感应电动势公式', '方向判断'], rows: [['磁通量变化（线圈）', 'E = n×ΔΦ/Δt', '楞次定律'], ['导体棒平动切割', 'E = B×l×v', '右手定则'], ['导体棒转动切割', 'E = ½×B×ω×l²', '右手定则'], ['导轨匀速棒', 'E = Blv，I = E/R', '右手定则 + 安培力阻碍']] },
      { type: 'tip', label: '提示', text: '<strong>电磁感应计算三步：① 判断 Φ 是否变化、怎么变（找 ΔΦ/Δt 或用 Blv）；② 用楞次定律/右手定则定方向；③ 求大小后接电路（I=E/R）、力学（F安=BIL）或能量（W=Q）。</strong>切割模型优先用 E=Blv，线圈磁通变化优先用 E=nΔΦ/Δt。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">磁通量变化产生感应电动势</text><circle cx="200" cy="160" r="50" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="200" y="165" font-size="13" fill="#234b45" text-anchor="middle">线圈 n</text><text x="200" y="80" font-size="13" fill="#234b45" text-anchor="middle">B 增大 → Φ 增大</text><line x1="200" y1="110" x2="200" y2="130" stroke="#234b45" stroke-width="2"/><polygon points="193,130 207,130 200,142" fill="#234b45"/><path d="M 260 160 A 60 60 0 1 1 260 161" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="280" y="200" font-size="13" fill="#234b45">感应电流</text><text x="200" y="250" font-size="13" fill="#234b45" text-anchor="middle">E感 = n × ΔΦ / Δt</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">楞次定律定方向，法拉第定律定大小</text></svg>', caption: '图1　线圈磁通量变化产生感应电动势，大小由 E = nΔΦ/Δt 决定。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">导体棒切割磁感线</text><rect x="120" y="90" width="20" height="140" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="130" y="80" font-size="12" fill="#234b45" text-anchor="middle">N</text><rect x="540" y="90" width="20" height="140" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="550" y="80" font-size="12" fill="#234b45" text-anchor="middle">S</text><line x1="300" y1="80" x2="300" y2="240" stroke="#4fb3a5" stroke-width="6"/><text x="320" y="100" font-size="13" fill="#234b45">棒 l</text><line x1="300" y1="160" x2="430" y2="160" stroke="#234b45" stroke-width="2"/><polygon points="430,154 430,166 442,160" fill="#234b45"/><text x="370" y="148" font-size="12" fill="#234b45">v</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">E = B × l × v（B、l、v 两两垂直）</text></svg>', caption: '图2　导体棒垂直切割磁感线，电动势 E = Blv，方向用右手定则。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">导轨上导体棒的力电综合</text><line x1="120" y1="180" x2="560" y2="180" stroke="#2e9e8f" stroke-width="3"/><line x1="120" y1="220" x2="560" y2="220" stroke="#2e9e8f" stroke-width="3"/><line x1="330" y1="180" x2="330" y2="220" stroke="#4fb3a5" stroke-width="6"/><text x="330" y="245" font-size="12" fill="#234b45" text-anchor="middle">棒</text><line x1="330" y1="180" x2="330" y2="120" stroke="#234b45" stroke-width="2"/><text x="340" y="115" font-size="12" fill="#234b45">F安(阻碍)</text><line x1="430" y1="180" x2="500" y2="180" stroke="#234b45" stroke-width="2"/><polygon points="500,174 500,186 512,180" fill="#234b45"/><text x="470" y="168" font-size="12" fill="#234b45">v</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">匀速时 F外 = F安 = B²l²v/R</text></svg>', caption: '图3　导轨棒受外力拉动，最终匀速条件为外力等于安培力。' }
    ],
    exercises: [
      { type: 'choice', question: '法拉第电磁感应定律中，感应电动势 E感 等于？', options: ['n × Φ', 'n × ΔΦ / Δt', 'B × l × v', 'Φ / t'], answer: 'n × ΔΦ / Δt', explanation: '法拉第电磁感应定律指出，回路中感应电动势的大小与磁通量的变化率成正比，即 E感 = n×ΔΦ/Δt，n 为匝数。关键是"变化率"而非磁通量本身；若磁场均匀变化则 E = n×S×ΔB/Δt。B×l×v 是切割情形的等价形式。' },
      { type: 'choice', question: '导体棒垂直切割磁感线（B、l、v 两两垂直）时，感应电动势公式是？', options: ['E = B + l + v', 'E = B × l × v', 'E = B / (l × v)', 'E = ½ × B × l × v'], answer: 'E = B × l × v', explanation: '当磁感应强度 B、导体棒长 l、运动速度 v 三者两两垂直时，切割产生的感应电动势为 E = B×l×v。若三者不垂直，需取有效分量（垂直于磁场和棒的速度分量、垂直于速度的有效棒长）。方向用右手定则判断。' },
      { type: 'choice', question: '根据楞次定律，感应电流的效果总是？', options: ['促进磁通量变化', '阻碍引起感应电流的磁通量变化', '与磁场方向相同', '使导体棒加速'], answer: '阻碍引起感应电流的磁通量变化', explanation: '楞次定律的核心是"阻碍"：感应电流的磁场总是阻碍引起感应电流的磁通量的变化（增反减同）。从效果看，感应电流总要阻碍相对运动或磁通量变化。这正是能量守恒在电磁感应中的体现，机械能转化为电能。' },
      { type: 'fill', question: '导轨上导体棒最终匀速运动时，外力 F外 与安培力 F安 的关系是 ___（填相等或不相等），且此时感应电流 ___（填"为零"或"不为零"）。', answer: '相等|不为零', explanation: '棒从静止被拉动，速度增大使感应电动势和电流增大，安培力随之增大；当安培力增大到等于外力时合力为零，棒匀速。此时速度恒定但仍在切割磁感线，所以感应电流不为零，只是安培力恰好与外力平衡。' },
      { type: 'fill', question: '单匝线圈面积 S = 0.05 m²，磁场在 0.2 s 内由 0 均匀增至 0.4 T，平均感应电动势 E感 = ___ V。', answer: '0.1', explanation: '磁通量变化 ΔΦ = ΔB×S = (0.4−0)×0.05 = 0.02 Wb。变化率 ΔΦ/Δt = 0.02/0.2 = 0.1 Wb/s。单匝线圈 n=1，故 E感 = n×ΔΦ/Δt = 1×0.1 = 0.1 V。若匝数更多则再乘以 n。' }
    ]
  });
})();
