/* ============================================================
 * 高三复习 · 实验专题 · 专题一 力学实验
 * 课时7：研究平抛运动的特点
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u7',
    name: '研究平抛运动的特点',
    chapter: '实验专题 · 专题一 力学实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是平抛运动' },
      { type: 'paragraph', text: '把物体水平抛出，它只受重力，初速度沿水平方向——这种运动叫平抛运动。比如水平扔出的石子、从桌上滑落的杯子。平抛运动可以拆成两部分：水平方向不受力、匀速前进；竖直方向自由下落、匀加速。' },
      { type: 'list', items: ['斜槽、小球、坐标纸（或白纸+复写纸）、图钉', '重锤线（确定竖直方向）、刻度尺、铅笔', '保证斜槽末端水平，让小球真正做平抛'] },
      { type: 'heading', text: '二、实验怎么描出轨迹' },
      { type: 'paragraph', text: '让小球从斜槽上固定高度滚下，从末端水平飞出。在它的必经之路上放一张带复写纸的坐标纸，小球每次撞到纸会留下印点。改变纸的位置或挡板的上下位置，得到多个点，连起来就是平抛轨迹。' },
      { type: 'keypoint', label: '重点·两个分运动', text: '<strong>平抛运动可分解为：水平方向匀速直线运动（x = v₀ t），竖直方向自由落体（y = (1/2) g t²）。</strong>两方向独立进行、互不影响，这是研究平抛的核心思路。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">小球水平抛出，留下平抛轨迹</text><path d="M 80 70 Q 200 70 240 150 L 240 230" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="240" cy="150" r="9" fill="#4fb3a5"/><path d="M 240 150 Q 360 175 560 230" fill="none" stroke="#234b45" stroke-width="2"/><circle cx="320" cy="172" r="4" fill="#234b45"/><circle cx="400" cy="191" r="4" fill="#234b45"/><circle cx="480" cy="210" r="4" fill="#234b45"/><circle cx="560" cy="230" r="4" fill="#234b45"/><line x1="240" y1="150" x2="560" y2="150" stroke="#4fb3a5" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="240" y1="150" x2="240" y2="230" stroke="#4fb3a5" stroke-width="1.5" stroke-dasharray="4 3"/><text x="400" y="142" font-size="12" fill="#234b45">水平匀速</text><text x="560" y="195" font-size="12" fill="#234b45">竖直下落</text></svg>', caption: '图1　平抛轨迹是抛物线：水平方向匀速、竖直方向自由落体。' },
      { type: 'heading', text: '三、轨迹是抛物线吗' },
      { type: 'paragraph', text: '把描出的点用平滑曲线连起来，会得到一条向下弯的抛物线。理论上，由 x = v₀ t 和 y = (1/2) g t² 消去 t，得 y = (g / (2 v₀²)) x²，正是抛物线。所以轨迹应为抛物线，这是第一个要确认的特点。' },
      { type: 'list', items: ['取轨迹上若干点，记下坐标 (x, y)', '看 y 是否与 x² 成正比（画 y-x² 图应为直线）', '多次实验，轨迹应重合、可重复', '确认斜槽末端水平，否则不是标准平抛'] },
      { type: 'example', label: '例题·求初速度', text: '例：平抛轨迹上某点坐标 x = 20.0 cm、y = 19.6 cm，g = 9.8 m/s²。求水平初速度 v₀。<br><strong>解析</strong>：由 y = (1/2) g t² 得 t = √(2y/g) = √(2×0.196/9.8) = √0.04 = 0.20 s；再由 x = v₀ t 得 v₀ = x / t = 0.20 / 0.20 = 1.0 m/s。' },
      { type: 'warn', label: '易错', text: '<strong>斜槽末端必须水平，否则小球有斜向初速度，不是平抛。</strong>可用重锤线检查槽末端是否水平，或放小球看是否匀速滚离。另外坐标原点应取在槽口小球球心在纸上的投影，而不是随便一点。' },
      { type: 'heading', text: '四、用轨迹求初速度 v₀' },
      { type: 'paragraph', text: '在轨迹上选两个点（不是起点），读出它们的 (x₁, y₁)、(x₂, y₂)。由竖直方向 y = (1/2) g t² 可分别求时间，再用 x = v₀ t 求 v₀；更稳的办法是取水平间距相等的几个点，它们的竖直间距之比应为 1:3:5…，由此也能反推 v₀。' },
      { type: 'table', headers: ['点', '水平 x / cm', '竖直 y / cm', '说明'], rows: [['1', '10.0', '4.9', 't₁ 对应下落'], ['2', '20.0', '19.6', 't₂ = 2 t₁'], ['3', '30.0', '44.1', 't₃ = 3 t₁']] },
      { type: 'keypoint', label: '重点·等时距特点', text: '<strong>平抛运动在连续相等时间内，竖直方向下落的位移之比为 1 : 3 : 5 …（即奇数比）。</strong>利用这个特点，可在轨迹上找水平等距的点，它们的竖直落差应呈奇数比，从而检验轨迹并求 v₀。' },
      { type: 'heading', text: '五、图像法验证' },
      { type: 'paragraph', text: '以 x² 为横轴、y 为纵轴描点，若得一条过原点的直线，说明 y ∝ x²，即轨迹是抛物线，且斜率 = g / (2 v₀²)，由此还能估出初速度 v₀ = √(g / (2k))。图像法整体性好，比单点计算更可靠。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">y-x² 图像：直线说明轨迹是抛物线</text><line x1="90" y1="250" x2="630" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="250" x2="90" y2="60" stroke="#234b45" stroke-width="2"/><text x="70" y="55" font-size="13" fill="#234b45">y</text><text x="600" y="270" font-size="13" fill="#234b45">x²</text><line x1="90" y1="250" x2="580" y2="90" stroke="#2e9e8f" stroke-width="3"/><circle cx="220" y="205" r="4" fill="#4fb3a5"/><circle cx="350" y="160" r="4" fill="#4fb3a5"/><circle cx="480" y="115" r="4" fill="#4fb3a5"/><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">斜率 k = g / (2 v₀²)</text></svg>', caption: '图2　画 y-x² 图得直线，说明 y 与 x² 成正比，轨迹为抛物线，并可求 v₀。' },
      { type: 'tip', label: '提示', text: '<strong>每次小球要从斜槽同一高度释放。</strong>这样初速度 v₀ 才一致，轨迹才能重合、点才好连。释放高度不同，v₀ 不同，轨迹会变，难以比较。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">平抛的两个分运动独立</text><rect x="100" y="110" width="220" height="90" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="210" y="145" font-size="13" fill="#234b45" text-anchor="middle">水平：匀速 x = v₀ t</text><text x="210" y="172" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">不受力</text><rect x="360" y="110" width="220" height="90" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="470" y="145" font-size="13" fill="#234b45" text-anchor="middle">竖直：自由落体</text><text x="470" y="172" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">y = (1/2) g t²</text><text x="340" y="230" font-size="12" fill="#234b45" text-anchor="middle">两个方向互不影响，合成即平抛</text></svg>', caption: '图3　平抛可分解为水平匀速与竖直自由落体两个独立分运动。' },
      { type: 'paragraph', text: '小结：研究平抛，关键是确认轨迹是抛物线，并会用分运动公式求初速度 v₀。水平匀速、竖直自由落体，两方向独立，这是处理一切平抛问题的基础。' },
      { type: 'warn', label: '易错', text: '<strong>求 v₀ 时不能直接用整段轨迹的 x、y 套公式就完事，要看清原点。</strong>若原点不在抛出点，x、y 对应的时间关系就不纯粹，应先建立以抛出点为原点的坐标系，或选轨迹上两点列方程组求解。' }
    ],
    exercises: [
      { type: 'choice', question: '关于平抛运动，正确的分解是？', options: ['水平匀加速、竖直匀速', '水平匀速、竖直自由落体', '水平自由落体、竖直匀速', '两个方向都匀速'], answer: '水平匀速、竖直自由落体', explanation: '平抛运动水平方向不受力，保持初速度 v₀ 做匀速直线运动 x = v₀ t；竖直方向只受重力，做自由落体 y = (1/2) g t²。两个分运动独立进行。' },
      { type: 'choice', question: '本实验要求斜槽末端必须？', options: ['向上倾斜', '向下倾斜', '水平', '任意角度'], answer: '水平', explanation: '只有斜槽末端水平，小球飞出时初速度才沿水平方向，才是标准的平抛运动；若末端倾斜，初速度有竖直分量，变成斜抛，轨迹不再是平抛。' },
      { type: 'choice', question: '为验证平抛轨迹是抛物线，应画哪个图像成直线？', options: ['y-x 图', 'y-x² 图', 'x-y 图', 'x²-y² 图'], answer: 'y-x² 图', explanation: '由 x = v₀ t、y = (1/2) g t² 消去 t 得 y = (g/(2 v₀²)) x²，即 y 与 x² 成正比。所以画 y-x² 图若得过原点直线，说明轨迹是抛物线，斜率还可求 v₀。' },
      { type: 'fill', question: '平抛运动的水平分运动方程 x = ___，竖直分运动方程 y = ___（用 v₀、g、t 表示）。', answer: 'v₀ t', explanation: '水平方向不受力，匀速：x = v₀ t；竖直方向自由落体：y = (1/2) g t²。两式联立可消去 t 得轨迹方程 y = (g/(2 v₀²)) x²，是抛物线。' },
      { type: 'fill', question: '在连续相等时间内，平抛运动竖直方向下落的位移之比为 ___（写出比例）。', answer: '1 : 3 : 5', explanation: '竖直方向是初速为零的匀加速运动，在连续相等时间 T 内的位移之比为 1 : 3 : 5 …（奇数比）。利用这一特点可在轨迹上取水平等距点检验是否为平抛并求 v₀。' }
    ]
  });
})();
