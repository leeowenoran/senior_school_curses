/* ============================================================
 * 高三复习 · 实验专题 · 专题一 力学实验
 * 课时2：探究弹簧弹力与形变量的关系（胡克定律）
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u2',
    name: '探究弹簧弹力与形变量的关系（胡克定律）',
    chapter: '实验专题 · 专题一 力学实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验要探究什么' },
      { type: 'paragraph', text: '我们拉伸或压缩弹簧时，手要用力；弹簧也会反过来拉手，这个力叫弹力。这一课要弄清楚：弹簧的弹力 F 和它的伸长量（或压缩量）x 之间，到底是什么关系？结论是 F 和 x 成正比，这就是胡克定律。' },
      { type: 'list', items: ['弹簧、刻度尺（或毫米刻度尺）、铁架台、钩码一盒', '坐标纸（用来画 F-x 图像）', '记录表格（钩码个数、总质量、弹簧长度、伸长量）'] },
      { type: 'heading', text: '二、几个容易混的概念' },
      { type: 'paragraph', text: '弹簧没受力时的自然长度叫原长 L₀。挂上钩码后弹簧长度变成 L，那么伸长量 x = L − L₀，是"变长了多少"，不是弹簧总长。弹力 F 在数值上等于所挂钩码的重力，即 F = m g（g 取 9.8 N/kg 或 10 N/kg，看题目要求）。' },
      { type: 'keypoint', label: '重点·胡克定律', text: '<strong>在弹性限度内，弹簧弹力 F 与形变量 x 成正比：F = k x。</strong>比例系数 k 叫劲度系数，单位 N/m，它只由弹簧本身（材料、粗细、圈数）决定，与挂多重的钩码无关。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">弹簧受力伸长，形变量 x = L − L₀</text><rect x="80" y="80" width="16" height="180" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="88" y="272" font-size="12" fill="#234b45" text-anchor="middle">原长 L₀</text><rect x="300" y="80" width="16" height="180" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="316" y="120" width="40" height="20" fill="#4fb3a5"/><text x="336" y="135" font-size="12" fill="#234b45" text-anchor="middle">钩码</text><line x1="308" y1="140" x2="308" y2="260" stroke="#234b45" stroke-width="2" stroke-dasharray="5 4"/><text x="150" y="200" font-size="13" fill="#234b45">挂钩码后长度 L</text><text x="380" y="270" font-size="12" fill="#234b45" text-anchor="middle">伸长量 x</text><line x1="120" y1="262" x2="280" y2="262" stroke="#2e9e8f" stroke-width="2"/><polygon points="120,257 120,267 112,262" fill="#2e9e8f"/><polygon points="280,257 280,267 288,262" fill="#2e9e8f"/><text x="200" y="285" font-size="12" fill="#234b45" text-anchor="middle">x = L − L₀</text></svg>', caption: '图1　弹簧伸长量 x 等于受力后长度 L 减去原长 L₀，弹力 F = k x。' },
      { type: 'heading', text: '三、实验步骤' },
      { type: 'paragraph', text: '先把弹簧竖直挂在铁架台上，记下不挂钩码时的原长 L₀。然后逐个加钩码，每加一个就读一次弹簧长度 L，算出伸长量 x 和对应弹力 F = m g。把数据填进表格，最后在坐标纸上以 x 为横轴、F 为纵轴描点连线。' },
      { type: 'list', items: ['不挂钩码测原长 L₀，注意弹簧要自然下垂、不歪斜', '逐次增加钩码，待稳定后读弹簧长度 L', '计算 x = L − L₀，F = n × m₀ × g（n 为钩码个数）', '在坐标纸上描点，看是否近似过原点的一条直线', '用直线斜率求劲度系数 k'] },
      { type: 'table', headers: ['钩码数 n', '弹力 F / N', '弹簧长 L / cm', '伸长量 x / cm'], rows: [['0', '0', '10.00', '0.00'], ['1', '0.49', '12.00', '2.00'], ['2', '0.98', '14.00', '4.00'], ['3', '1.47', '16.00', '6.00']] },
      { type: 'example', label: '例题·求劲度系数', text: '例：某弹簧原长 10.00 cm，挂 2 个各 50 g 的钩码后长 14.00 cm（g 取 9.8 N/kg），求劲度系数 k。<br><strong>解析</strong>：总质量 m = 2 × 0.050 = 0.10 kg，弹力 F = m g = 0.10 × 9.8 = 0.98 N；伸长量 x = 14.00 − 10.00 = 4.00 cm = 0.040 m；由 F = k x 得 k = F / x = 0.98 / 0.040 = 24.5 N/m。' },
      { type: 'warn', label: '易错', text: '<strong>两个常见错误：一是把弹簧总长 L 当成形变量 x；二是钩码质量单位是克，代入公式前没化成千克。</strong>记住 x 一定是"伸长了多少"，F = m g 里 m 要用 kg，g 取 9.8 还是 10 看题目说明，前后保持一致。' },
      { type: 'heading', text: '四、用图像求 k 更准' },
      { type: 'paragraph', text: '把多组数据描在 F-x 坐标上，如果各点大致排在一条过原点的直线上上，就说 F 与 x 成正比，这就验证了胡克定律。k 等于这条直线的斜率，用 k = ΔF / Δx 计算，比只用一组数据算更可靠，因为能抵消部分读数误差。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">F-x 图像：过原点的直线，斜率即 k</text><line x1="90" y1="250" x2="630" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="250" x2="90" y2="60" stroke="#234b45" stroke-width="2"/><text x="78" y="55" font-size="13" fill="#234b45">F</text><text x="618" y="270" font-size="13" fill="#234b45">x</text><line x1="90" y1="250" x2="580" y2="90" stroke="#2e9e8f" stroke-width="3"/><circle cx="190" y="210" r="4" fill="#4fb3a5"/><circle cx="290" y="170" r="4" fill="#4fb3a5"/><circle cx="390" y="130" r="4" fill="#4fb3a5"/><circle cx="490" y="90" r="4" fill="#4fb3a5"/><polygon points="300,120 290,140 320,135" fill="#2e9e8f"/><text x="350" y="115" font-size="13" fill="#1f7a6e" font-weight="bold">k = 斜率</text></svg>', caption: '图2　F-x 图像过原点成直线，证明 F 与 x 成正比，斜率就是劲度系数 k。' },
      { type: 'keypoint', label: '重点·图像法', text: '<strong>F-x 图线必须是过原点的直线，才说明 F 与 x 成正比。</strong>若不过原点，可能是原长测错或弹簧自重引起；若后来变弯，说明已经超过弹性限度，胡克定律不再成立。' },
      { type: 'heading', text: '五、弹性限度是什么' },
      { type: 'paragraph', text: '弹簧被拉得太长会"永久变形"——松开后回不到原长，这时它就不听话了，F 不再和 x 成正比。能保持"松手就复原"的最大伸长范围，叫弹性限度。实验时钩码别加太多，确保在弹性限度内。' },
      { type: 'tip', label: '提示', text: '<strong>读弹簧长度时，眼睛要正对刻度尺，别从斜上方看，否则会有视差。</strong>建议每次加相同质量的钩码，让数据点均匀分布，画出的直线更准；也可以在弹簧下方贴一张纸条辅助读数。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">弹性限度内才成正比</text><rect x="60" y="90" width="200" height="120" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="160" y="150" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">弹性限度内</text><text x="160" y="175" font-size="12" fill="#234b45" text-anchor="middle">F 与 x 成正比</text><rect x="420" y="90" width="200" height="120" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="520" y="150" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">超过限度</text><text x="520" y="175" font-size="12" fill="#234b45" text-anchor="middle">不再成正比</text><line x1="260" y1="150" x2="400" y2="150" stroke="#2e9e8f" stroke-width="2"/><polygon points="400,144 400,156 412,150" fill="#2e9e8f"/><text x="330" y="200" font-size="12" fill="#234b45" text-anchor="middle">加太多钩码</text></svg>', caption: '图3　在弹性限度内弹簧才遵守 F = k x，超出后发生永久变形。' },
      { type: 'paragraph', text: '小结：本实验的核心是验证 F ∝ x。操作时测准原长和每次长度，算出 x 与 F；用图像法看出正比关系并求 k。一切都在"弹性限度内"才有效。' },
      { type: 'warn', label: '易错', text: '<strong>图像若明显不过原点，别急着说实验失败。</strong>先检查原长 L₀ 是否读错：若把弹簧自重造成的初始伸长也算进去，图线会平移。如实记录、分析原因，才是严谨的实验态度。' }
    ],
    exercises: [
      { type: 'choice', question: '胡克定律的内容（在弹性限度内）是？', options: ['弹力与形变量成反比', '弹力与形变量成正比，即 F = k x', '弹力与弹簧长度成正比', '弹力与钩码个数无关'], answer: '弹力与形变量成正比，即 F = k x', explanation: '在弹性限度内，弹簧弹力 F 与形变量 x 成正比，F = k x，k 为劲度系数。这是胡克定律的标准表述；钩码个数影响的是弹力大小，并非"无关"。' },
      { type: 'choice', question: '探究弹簧弹力与形变量关系时，形变量 x 应该取？', options: ['弹簧的自然长度 L₀', '弹簧受力后的总长度 L', '弹簧受力后的长度减去原长，即 x = L − L₀', '钩码的个数'], answer: '弹簧受力后的长度减去原长，即 x = L − L₀', explanation: '形变量是弹簧"伸长或压缩了多少"，等于受力后长度 L 减去不受力时的原长 L₀。绝不是弹簧总长，也不是钩码个数。' },
      { type: 'choice', question: '在 F-x 图像中，劲度系数 k 等于？', options: ['图像的截距', '图像的斜率，即 k = ΔF / Δx', '图像与横轴围成的面积', '图像最高点的值'], answer: '图像的斜率，即 k = ΔF / Δx', explanation: '由 F = k x 可知，F-x 图线是一条过原点的直线，其斜率 ΔF / Δx 就是劲度系数 k。截距应为 0，面积没有"劲度"的物理意义。' },
      { type: 'fill', question: '弹簧原长 10.0 cm，挂一质量为 100 g 的钩码后长 12.0 cm（g 取 10 N/kg），则伸长量 x = ___ m，弹力 F = ___ N。', answer: '0.020|0.02', explanation: '伸长量 x = 12.0 − 10.0 = 2.0 cm = 0.020 m。钩码质量 100 g = 0.10 kg，重力即弹力 F = m g = 0.10 × 10 = 1.0 N；由 F = k x 也可求 k = 50 N/m。' },
      { type: 'fill', question: '本实验要求弹簧在___内工作，否则 F 与 x 不再成正比，会发生永久变形。', answer: '弹性限度', explanation: '只有在弹性限度内，弹簧松手后能恢复原长，才满足 F = k x。若拉力过大超过弹性限度，弹簧将发生塑性（永久）变形，胡克定律不再成立。' }
    ]
  });
})();
