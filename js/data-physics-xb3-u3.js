/* ============================================================
 * 高二物理 · 选择性必修 第三册 · 第一章 分子动理论
 * 课时3：分子间的作用力
 * 数据注入：physics.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u3',
    name: '分子间的作用力',
    chapter: '选择性必修 第三册 · 第一章 分子动理论',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、分子间同时存在引力和斥力' },
      { type: 'paragraph', text: '既然分子间有空隙，为什么固体、液体不会一碰就散？为什么又不容易把一块铁压缩变小？这说明分子间除了"想靠近"的引力，还有"不想被压扁"的斥力。事实上，分子之间同时存在着引力和斥力，二者是并存的。' },
      { type: 'keypoint', label: '重点·引力和斥力并存', text: '<strong>分子间同时存在着引力和斥力，两者都随距离增大而减小。</strong>平时我们觉得是"吸引"还是"排斥"，只是因为在某个距离下哪一种力更占上风，而不是只有一种力存在。' },
      { type: 'list', items: ['固体很难被拉断，说明分子间有相互吸引的引力', '固体、液体很难被压缩，说明距离很近时分子间有排斥的斥力', '气体容易被压缩，是因为正常气压下分子间距离大，作用力很弱'] },
      { type: 'heading', text: '二、平衡位置 r₀：引力和斥力相等' },
      { type: 'paragraph', text: '随着分子间距离变化，引力和斥力的"强弱对比"会改变。当距离恰好等于某个特殊值 r₀（数量级约为 10⁻¹⁰ m，和水分子直径同量级）时，引力和斥力大小相等、方向相反，合力为零，这个位置就是分子力的平衡位置。' },
      { type: 'keypoint', label: '重点·平衡距离 r₀', text: '<strong>当 r = r₀（约 10⁻¹⁰ m）时，分子间的引力与斥力大小相等，合力为零，分子处于平衡状态。</strong>固体、液体里大多数分子大致就处在这个平衡距离附近。' },
      { type: 'example', label: '例题·平衡距离理解', text: '问：为什么固态物质有一定体积和形状？<br><br><strong>解析</strong>：<br>固体中分子间距大约就是 <strong>r₀</strong>，此时引力和斥力近乎平衡，分子既不会被轻易拉开，也不会被压得更近，于是宏观上表现出固定的体积和形状。一旦强行拉伸或压缩，平衡被打破，就会出现明显的引力或斥力来抵抗。' },
      { type: 'warn', label: '易错', text: '<strong>不要以为"分子间只有引力"。</strong>引力和斥力始终同时存在，只是不同距离下谁占主导不同。另外 r₀ 是"平衡距离"，不是分子半径；它约为 10⁻¹⁰ m，指的是两分子中心之间的距离。' },
      { type: 'heading', text: '三、r < r₀ 斥力主导；r > r₀ 引力主导' },
      { type: 'paragraph', text: '引力和斥力都随距离增大而减小，但斥力减小得比引力快得多。于是：当分子被压得比 r₀ 更近（r < r₀）时，斥力比引力大，合力表现为斥力；当分子被拉得比 r₀ 更远（r > r₀）时，引力比斥力大，合力表现为引力。' },
      { type: 'keypoint', label: '重点·谁占主导', text: '<strong>r < r₀ 时斥力主导，表现为斥力；r > r₀ 时引力主导，表现为引力。</strong>记住"近了互相顶、远了互相拉"这句大白话，就不会乱。' },
      { type: 'list', items: ['r < r₀：距离太近，斥力增长更快，合力为斥力，物体难压缩', 'r > r₀：距离变远，斥力衰减更快，合力为引力，物体难被拉开', 'r = r₀：引力斥力相等，合力为零，是平衡点'] },
      { type: 'heading', text: '四、r > 10r₀ 可忽略；分子力随距离的变化' },
      { type: 'paragraph', text: '当分子间距离大到一定程度（大约 r > 10r₀，也就是超过平衡距离十倍左右），引力和斥力都已经衰减到几乎为零，分子力可以忽略不计。这就是为什么气体分子间通常"互不理睬"，除非发生碰撞。' },
      { type: 'keypoint', label: '重点·分子力随距离变化', text: '<strong>分子力随距离变化的规律：</strong>r 很小（r < r₀）时合力为斥力且随 r 减小急剧增大；r = r₀ 时合力为零；r 略大于 r₀ 时合力为引力；r 继续增大，引力先增大一点再逐渐减小；到 r > 10r₀ 时分子力基本忽略。' },
      { type: 'tip', label: '提示', text: '<strong>分子力是"短程力"。</strong>它只在分子靠得很近（大约几个 10⁻¹⁰ m）时才明显，距离一大就迅速消失。所以宏观上我们感觉不到相邻物体之间的分子引力，必须让它们贴得非常近（如光滑铅块压紧）才能显现。' },
      { type: 'table', headers: ['分子间距 r', '引力和斥力对比', '分子力表现'], rows: [['r < r₀', '斥力 > 引力', '表现为斥力（难压缩）'], ['r = r₀', '引力 = 斥力', '合力为零（平衡）'], ['r > r₀', '引力 > 斥力', '表现为引力（难拉开）'], ['r > 10r₀', '两者都极小', '分子力可忽略']] },
      { type: 'paragraph', text: '把上面四点连起来：分子间始终同时有引力和斥力，它们随距离都减小，但斥力减得更快，于是出现"近斥远引、r₀ 平衡、再远就忽略"的整体规律。这就是分子力的全貌。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">引力和斥力都随距离增大而减小，斥力减得更快</text><line x1="80" y1="60" x2="80" y2="250" stroke="#234b45" stroke-width="2"/><line x1="80" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><polyline points="90,70 180,120 300,165 430,205 560,235" fill="none" stroke="#4fb3a5" stroke-width="3"/><polyline points="90,55 180,100 300,200 430,238 560,250" fill="none" stroke="#234b45" stroke-width="3" stroke-dasharray="6,4"/><text x="300" y="150" font-size="12" fill="#4fb3a5">斥力（减得快）</text><text x="470" y="225" font-size="12" fill="#234b45">引力（减得慢）</text><text x="350" y="275" font-size="13" fill="#234b45" text-anchor="middle">横轴：分子间距 r　纵轴：力的大小</text></svg>', caption: '图1　引力和斥力都随距离增大而减小，但斥力衰减更快；两条线在某个位置相交，那里就是 r₀。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">平衡距离 r₀：两分子中心相距约 10⁻¹⁰ m</text><circle cx="250" cy="160" r="34" fill="#4fb3a5"/><circle cx="430" cy="160" r="34" fill="#4fb3a5"/><line x1="284" y1="160" x2="396" y2="160" stroke="#234b45" stroke-width="2"/><text x="340" y="148" font-size="13" fill="#234b45" text-anchor="middle">r₀</text><text x="340" y="200" font-size="13" fill="#234b45" text-anchor="middle">此处引力 = 斥力，合力为零</text><text x="250" y="220" font-size="12" fill="#234b45" text-anchor="middle">分子A</text><text x="430" y="220" font-size="12" fill="#234b45" text-anchor="middle">分子B</text></svg>', caption: '图2　当两个分子中心间距正好为 r₀（约 10⁻¹⁰ m）时，引力和斥力平衡，合力为零。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">分子合力随距离变化的曲线（示意）</text><line x1="70" y1="155" x2="620" y2="155" stroke="#234b45" stroke-width="2"/><line x1="230" y1="60" x2="230" y2="250" stroke="#2e9e8f" stroke-width="1.5" stroke-dasharray="5,4"/><polyline points="80,70 150,100 230,155 320,200 430,222 560,240" fill="none" stroke="#234b45" stroke-width="3"/><text x="230" y="270" font-size="12" fill="#2e9e8f" text-anchor="middle">r₀</text><text x="130" y="95" font-size="12" fill="#234b45">斥力区 r&lt;r₀</text><text x="430" y="210" font-size="12" fill="#234b45">引力区 r&gt;r₀</text><text x="345" y="150" font-size="12" fill="#234b45" text-anchor="middle">合力为零</text><text x="600" y="232" font-size="12" fill="#234b45">r&gt;10r₀ 趋零</text></svg>', caption: '图3　合力曲线：r 小于 r₀ 时表现为斥力，等于 r₀ 时为零，大于 r₀ 时表现为引力并最终趋于零（可忽略）。' }
    ],
    exercises: [
      { type: 'choice', question: '关于分子间的引力和斥力，下列说法正确的是？', options: ['分子间只有引力没有斥力', '分子间只有斥力没有引力', '引力和斥力同时存在，都随距离增大而减小', '引力和斥力都随距离增大而增大'], answer: '引力和斥力同时存在，都随距离增大而减小', explanation: '分子之间同时存在着引力和斥力，两种力都随分子间距离的增大而减小，只是斥力减小得更快。宏观上表现出的"吸引"或"排斥"，只是某一距离下哪种力更占上风，并不是只有一种力存在。' },
      { type: 'choice', question: '当分子间距离 r = r₀（约 10⁻¹⁰ m）时，分子力的合力为？', options: ['表现为引力', '表现为斥力', '为零', '无法判断'], answer: '为零', explanation: 'r₀ 是引力和斥力大小相等的特殊距离，此时两者方向相反、大小相同，合力为零，分子处于平衡状态。固体、液体中的分子大多在 r₀ 附近振动，这正是它们有固定体积和形状的原因。' },
      { type: 'choice', question: '当分子间距离 r < r₀ 时，分子力的合力表现为？', options: ['引力', '斥力', '为零', '先引后斥'], answer: '斥力', explanation: '当 r < r₀ 时，分子被压得比平衡距离更近，由于斥力随距离减小增长得比引力快，斥力大于引力，合力表现为斥力，这也是固体、液体难以被压缩的原因。' },
      { type: 'fill', question: '当分子间距离 r > 10r₀ 时，分子力已经衰减到几乎为零，可以___（填"忽略"或"加强"）不计。', answer: '忽略', explanation: '分子力是短程力，只在分子靠得很近（大约几个 10⁻¹⁰ m）时才明显。当距离超过平衡距离约十倍（r > 10r₀）时，引力和斥力都已衰减到极小，合力可近似看作零，因此气体分子间通常可忽略相互作用，只有碰撞时才受力。' },
      { type: 'fill', question: '固体很难被压缩，是因为当分子间距小于 r₀ 时，分子力主要表现为___（填"引力"或"斥力"），抵抗压缩。', answer: '斥力', explanation: '压缩固体时分子间距被压到小于平衡距离 r₀，此时斥力比引力增长得更快，合力表现为斥力，对外表现出抵抗压缩的力，所以固体难以被压缩。相应的，拉伸时表现为引力，所以也难被拉断。' }
    ]
  });
})();
