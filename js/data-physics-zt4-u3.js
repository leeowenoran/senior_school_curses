/* ============================================================
 * 高三复习 · 实验专题 · 专题一 力学实验
 * 课时3：探究两个互成角度的力的合成规律（力的平行四边形定则）
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u3',
    name: '探究两个互成角度的力的合成规律（力的平行四边形定则）',
    chapter: '实验专题 · 专题一 力学实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验想解决什么问题' },
      { type: 'paragraph', text: '一个物体同时受到两个力 F₁、F₂，方向还不一样，那它实际感受到的"总效果"相当于多大的一个力？这个能代替两个力的力叫合力。这一课用橡皮条做实验，验证合力与分力之间满足"平行四边形定则"。' },
      { type: 'list', items: ['方木板、白纸、图钉、弹簧测力计两个', '橡皮条一根、细绳套两个、三角板、刻度尺', '铅笔（用来描点和画力的方向）'] },
      { type: 'heading', text: '二、实验的核心思想：等效替代' },
      { type: 'paragraph', text: '先用两个测力计分别通过细绳拉橡皮条，把橡皮条一端拉到某个标记点 O，记下两力 F₁、F₂ 的大小和方向。再换一个测力计单独拉，也让橡皮条端点到同一个 O 点——效果完全相同，所以这个单独的力 F 就是 F₁、F₂ 的合力。' },
      { type: 'keypoint', label: '重点·等效替代', text: '<strong>本实验的灵魂是"等效"：两次都把橡皮条拉到同一点 O。</strong>单独一个力 F 产生的效果（橡皮条伸长到 O）与两个力 F₁、F₂ 共同作用的効果相同，因此 F 就是 F₁、F₂ 的合力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">等效替代：一个力与两个力效果相同</text><circle cx="340" cy="170" r="6" fill="#234b45"/><text x="340" y="195" font-size="12" fill="#234b45" text-anchor="middle">O 点</text><line x1="340" y1="170" x2="220" y2="120" stroke="#2e9e8f" stroke-width="3"/><text x="200" y="112" font-size="13" fill="#234b45">F₁</text><line x1="340" y1="170" x2="460" y2="120" stroke="#2e9e8f" stroke-width="3"/><text x="480" y="112" font-size="13" fill="#234b45">F₂</text><line x1="340" y1="170" x2="340" y2="250" stroke="#4fb3a5" stroke-width="3"/><text x="352" y="240" font-size="13" fill="#234b45">合力 F</text><rect x="240" y="230" width="200" height="40" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="255" font-size="12" fill="#234b45" text-anchor="middle">橡皮条被拉到 O 点</text></svg>', caption: '图1　两次都把橡皮条拉到 O 点，单独一个力 F 等效于两个力 F₁、F₂ 共同作用。' },
      { type: 'heading', text: '三、怎样在纸上画出合力' },
      { type: 'paragraph', text: '在白纸上，从 O 点出发沿 F₁、F₂ 方向，按同一标度（比如 1 cm 代表 1 N）画出两段线段表示两个分力。以这两段为邻边作平行四边形，从 O 点出发的那条对角线，就代表合力的理论值。再画出单独一个测力计测得的 F，看两者是否重合。' },
      { type: 'list', items: ['选定标度，用同一长度代表同一大小的力', '从 O 点沿两绳方向画 F₁、F₂，长度按标度', '以这两条线段为邻边作平行四边形，对角线即合力理论值', '单独拉时记下 F 的大小方向，看它与对角线是否重合', '比较可知：合力是以两分力为邻边的平行四边形的对角线'] },
      { type: 'example', label: '例题·读图求合力', text: '例：两测力计读数 F₁ = 3.0 N、F₂ = 4.0 N，两力互相垂直。用标度作图，合力多大？<br><strong>解析</strong>：以 3.0 N、4.0 N 为直角边作平行四边形（实为矩形），对角线长就是合力。由勾股关系 F = √(3.0² + 4.0²) = √(9 + 16) = √25 = 5.0 N，方向与 F₁ 夹角约 53°。作图量得也应接近 5.0 N。' },
      { type: 'warn', label: '易错', text: '<strong>作图必须用同一标度，且从同一点 O 出发。</strong>常见错误：F₁、F₂ 线段长短和力的大小不成比例，或两次实验橡皮条没拉到同一 O 点，导致"等效"不成立，对角线和实测 F 对不上。还有人把合力画成两力简单相加，忘了方向。' },
      { type: 'heading', text: '四、平行四边形定则' },
      { type: 'paragraph', text: '实验结论：两个互成角度的力合成时，以这两个力为邻边作平行四边形，它们的合力就等于从公共点引出的那条对角线。这就是力的平行四边形定则，它是矢量相加的普遍规则，以后学速度、位移合成也一样用。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">平行四边形定则：合力是对角线</text><circle cx="200" cy="220" r="5" fill="#234b45"/><line x1="200" y1="220" x2="380" y2="140" stroke="#2e9e8f" stroke-width="3"/><text x="300" y="165" font-size="13" fill="#234b45">F₂</text><line x1="200" y1="220" x2="330" y2="250" stroke="#2e9e8f" stroke-width="3"/><text x="280" y="270" font-size="13" fill="#234b45">F₁</text><line x1="380" y1="140" x2="510" y2="170" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="5 4"/><line x1="330" y1="250" x2="510" y2="170" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="5 4"/><line x1="200" y1="220" x2="510" y2="170" stroke="#234b45" stroke-width="4"/><text x="350" y="185" font-size="13" fill="#234b45" font-weight="bold">合力 F</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">以 F₁、F₂ 为邻边作平行四边形，对角线即合力</text></svg>', caption: '图2　平行四边形定则：合力 F 是以 F₁、F₂ 为邻边的平行四边形的对角线。' },
      { type: 'keypoint', label: '重点·矢量相加', text: '<strong>力是矢量，合成不能简单加减，要按平行四边形定则。</strong>只有两力同向时合力才等于两力之和，反向时等于两力之差；一般成角度时合力介于两力之差与两力之和之间。' },
      { type: 'heading', text: '五、误差来源与减小办法' },
      { type: 'paragraph', text: '实验误差主要来自：弹簧测力计未调零、读数时视线歪斜、绳子与木板不平行、O 点没对齐。减小办法是：使用前检查调零，读数时眼睛正对刻度，细绳贴近板面，描点时动作轻、标记准。' },
      { type: 'table', headers: ['误差来源', '影响', '减小办法'], rows: [['测力计未调零', '读数与真值差一个常数', '实验前先调零'], ['视线歪斜', '读数偏大或偏小', '眼睛正对刻度线'], ['O 点不对齐', '等效失效', '两次都准确拉到同一点'], ['绳与板不平行', '力方向画不准', '绳套贴着板面拉']] },
      { type: 'tip', label: '提示', text: '<strong>选标度时让力画得大一些更准。</strong>比如用 1 cm 代表 1 N，3 N 就画 3 cm，太小会影响作图精度。两个测力计使用前最好互相校核，避免两个仪器本身读数就有偏差。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">合力大小的范围</text><rect x="120" y="100" width="220" height="80" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="230" y="130" font-size="13" fill="#234b45" text-anchor="middle">两力同向</text><text x="230" y="155" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">F = F₁ + F₂（最大）</text><rect x="360" y="100" width="220" height="80" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="470" y="130" font-size="13" fill="#234b45" text-anchor="middle">两力反向</text><text x="470" y="155" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">F = |F₁ − F₂|（最小）</text><text x="340" y="220" font-size="12" fill="#234b45" text-anchor="middle">一般成角度时，合力介于两者之间</text></svg>', caption: '图3　合力大小范围：同向最大、反向最小，成角度时介于两者之间。' },
      { type: 'paragraph', text: '小结：本实验用"等效替代"思想，把两个力的共同作用等效为一个力，再用平行四边形定则画出合力，与实测值对比验证。关键是两次都拉到同一点 O，作图用同一标度。' },
      { type: 'warn', label: '易错', text: '<strong>合力不一定大于分力。</strong>很多人直觉以为"合成就变大"，其实当两力夹角很大（接近 180°）时，合力可能比其中某个分力还小。合力范围是 |F₁ − F₂| ≤ F ≤ F₁ + F₂。' }
    ],
    exercises: [
      { type: 'choice', question: '验证力的平行四边形定则实验中，核心思想是？', options: ['用大力求小力', '等效替代：两次都把橡皮条拉到同一点 O', '直接把两力相加', '测力计读数取平均'], answer: '等效替代：两次都把橡皮条拉到同一点 O', explanation: '实验用等效替代法：先用两测力计把橡皮条拉到 O 点，再换一个测力计也把橡皮条拉到同一 O 点，则单独这个力与两力等效，即为合力。两次必须到同一点才能保证效果相同。' },
      { type: 'choice', question: '根据平行四边形定则，两个互成角度的力的合力等于？', options: ['两力大小相加', '两力大小相减', '以两力为邻边的平行四边形的对角线', '两力中较大的那个'], answer: '以两力为邻边的平行四边形的对角线', explanation: '力是矢量，合成遵循平行四边形定则：以两个分力为邻边作平行四边形，从公共点引出的对角线就表示合力的大小和方向，不是简单地相加或相减。' },
      { type: 'choice', question: '两个力 F₁ = 3 N、F₂ = 4 N 互相垂直时，合力大小约为？', options: ['1 N', '5 N', '7 N', '12 N'], answer: '5 N', explanation: '两力垂直时合力是以 3 N、4 N 为直角边的对角线长度，F = √(3² + 4²) = √25 = 5 N。这也说明合力可能大于每一个分力。' },
      { type: 'fill', question: '两力合成时，合力 F 的大小范围是 ___ ≤ F ≤ ___（用 F₁、F₂ 表示）。', answer: '|F₁ − F₂|', explanation: '合力范围是 |F₁ − F₂| ≤ F ≤ F₁ + F₂。两力同向时取最大 F₁ + F₂，反向时取最小 |F₁ − F₂|，成一般角度时介于两者之间。注意绝对值符号不能丢。' },
      { type: 'fill', question: '作图验证时，必须先用一个统一的___（如 1 cm 代表 1 N）来画 F₁、F₂ 和合力，并且都从同一点___出发。', answer: '标度', explanation: '为正确反映力的大小，作图要先定标度，使线段长度与力的大小成比例；两条分力线段和合力都要从公共点 O 引出，才能用平行四边形定则比较。标度不统一会导致对角线与实测 F 不符。' }
    ]
  });
})();
