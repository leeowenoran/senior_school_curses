/* ============================================================
 * 高一物理 · 必修 第一册 · 第三章 相互作用——力
 * 课时11：重力 弹力
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u11',
    name: '重力 弹力',
    chapter: '必修第一册 · 第三章 相互作用——力',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、力是什么' },
      { type: 'paragraph', text: '在日常生活里，我们推门、拉箱子、提水桶，都用到了"力"。在物理学中，力是物体对物体的作用。一个物体受到了力，一定有另一个物体对它施加了这个力。离开了物体，力就不存在。比如人推车，人是施力物体，车是受力物体。' },
      { type: 'keypoint', label: '重点·力的三要素', text: '<strong>力的大小、方向和作用点，叫作力的三要素。</strong>这三个方面只要有一个不同，力的作用效果就可能不同。描述一个力时，必须把这三要素都说明白。' },
      { type: 'paragraph', text: '力有大小之分，例如用更大的劲推箱子，箱子就更容易动起来。力也有方向，向上提和向下压，效果显然不同。力还作用在物体上的某个具体位置，作用点不同，效果也会不同，比如推门时推在门把手上最省力。' },
      { type: 'list', items: ['大小：力越强，作用效果越明显，常用单位"牛"来衡量', '方向：力总是有方向的，用带箭头的线段表示', '作用点：力作用在物体上的具体位置，会影响转动等效果'] },
      { type: 'heading', text: '二、重力' },
      { type: 'paragraph', text: '地球上的一切物体，都受到地球的吸引。由于地球吸引而使物体受到的力，叫作重力。我们平时感觉东西"往下落"，就是因为物体受到了竖直向下的重力。重力用字母 G 表示。' },
      { type: 'keypoint', label: '重点·重力的大小', text: '物体所受重力的大小跟它的质量成正比，公式是 <strong>G = m × g</strong>。其中 g 叫作重力常数，在地球表面附近通常取 g ≈ 9.8 牛/千克，粗略计算时可取 10 牛/千克。' },
      { type: 'paragraph', text: '从 G = m × g 可以看出，质量越大的物体，受到的重力也越大。同一个物体在地球上不同位置（比如赤道和两极），g 的微小差别会使重力略有不同，但中学阶段我们一般统一取 9.8 牛/千克。' },
      { type: 'warn', label: '易错', text: '<strong>重力的方向是"竖直向下"，不是"垂直向下"。</strong>竖直向下指的是与水平面垂直、指向地心附近的方向；而"垂直向下"是相对于某个接触面说的，接触面一斜，垂直方向就跟着斜，两者不是一回事。另外，重力不是压力，压力是物体压在支撑面上的力，二者施力物体和方向都不同。' },
      { type: 'list', items: ['重力的施力物体是地球', '重力方向总是竖直向下', '重力大小 G = m × g，与质量成正比', '重力在物体上的作用点叫作重心'] },
      { type: 'heading', text: '三、弹力' },
      { type: 'paragraph', text: '用力弯一下尺子，松手后尺子又恢复原状，这说明尺子发生了"弹性形变"。物体由于发生弹性形变，会对与它接触的物体产生一种力，这种力叫作弹力。我们平时说的压力、支持力、绳子的拉力，本质上都是弹力。' },
      { type: 'keypoint', label: '重点·弹力产生的条件', text: '<strong>弹力产生的两个条件：一是两物体必须直接接触；二是接触处要发生弹性形变（撤去外力后能恢复原状的形变）。</strong>两个条件缺一不可。' },
      { type: 'example', label: '例题·判断有无弹力', text: '下面哪种情况 A 物体受到 B 物体给的弹力？<br>① 两个球靠在一起静止放在水平桌面上，但彼此没有挤压。<br>② 书静止放在桌面上。<br><br><strong>解析</strong>：<br>① 没有弹力。两球虽然接触，但彼此没有挤压，没有发生弹性形变，所以互不施加弹力。<br>② 有弹力。书压在桌面上，书和桌面都发生了微小的弹性形变，桌面对书产生向上的支持力，这就是弹力。' },
      { type: 'tip', label: '提示', text: '<strong>弹簧测力计就是利用弹力工作的。</strong>在弹性限度内，弹簧受到的拉力越大，伸得越长，所以可以用弹簧的伸长量来测量力的大小。使用时要注意所测的力不能超过它的量程。' },
      { type: 'table', headers: ['对比项', '重力', '弹力'], rows: [['产生原因', '由于地球吸引', '由于物体发生弹性形变'], ['方向', '总是竖直向下', '总是与恢复原状的方向相同'], ['是否需接触', '不需要直接接触地球', '必须两物体直接接触'], ['常见例子', '苹果下落、人受的重力', '压力、支持力、绳子拉力']] },
      { type: 'heading', text: '四、胡克定律' },
      { type: 'paragraph', text: '英国科学家胡克发现：在弹性限度内，弹簧受到的拉力（或压力）越大，它的伸长量（或压缩量）就越大，而且两者成正比。这个规律叫作胡克定律。公式为 F = k × x，其中 F 是弹簧弹力，x 是弹簧的伸长量或压缩量，k 是弹簧的劲度系数，反映弹簧的"软硬"程度。' },
      { type: 'tip', label: '提示', text: '<strong>重心不一定在物体内部。</strong>均匀规则物体的重心在它的几何中心；但像圆环、空心球这类物体，重心可以不在物质分布的地方，而在它们的中心空处。用悬挂法可以找出形状不规则薄板的重心。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">力的三要素：大小、方向、作用点</text><rect x="40" y="60" width="190" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="135" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">大小</text><text x="135" y="132" font-size="13" fill="#234b45" text-anchor="middle">力越大，作用</text><text x="135" y="154" font-size="13" fill="#234b45" text-anchor="middle">效果越明显</text><rect x="245" y="60" width="190" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">方向</text><line x1="340" y1="155" x2="402" y2="120" stroke="#4fb3a5" stroke-width="3"/><text x="340" y="200" font-size="13" fill="#234b45" text-anchor="middle">箭头表示方向</text><rect x="450" y="60" width="190" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="545" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">作用点</text><circle cx="545" cy="160" r="14" fill="#4fb3a5"/><text x="545" y="200" font-size="13" fill="#234b45" text-anchor="middle">作用在物体何处</text></svg>', caption: '图1　描述一个力必须说清三要素：大小、方向、作用点。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">重力方向总是竖直向下，作用点叫重心</text><rect x="40" y="60" width="290" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">悬挂法找重心</text><line x1="185" y1="110" x2="185" y2="232" stroke="#4fb3a5" stroke-width="3"/><circle cx="185" cy="172" r="12" fill="#234b45"/><text x="212" y="176" font-size="12" fill="#234b45">重心</text><line x1="150" y1="232" x2="220" y2="232" stroke="#234b45" stroke-width="2"/><rect x="350" y="60" width="290" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">重力方向竖直向下</text><line x1="495" y1="120" x2="495" y2="222" stroke="#4fb3a5" stroke-width="3"/><text x="495" y="248" font-size="12" fill="#234b45" text-anchor="middle">与水平面垂直，指向地心附近</text></svg>', caption: '图2　重力的方向始终竖直向下，物体所受重力的作用点称为重心。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">弹簧弹力与伸长量成正比：F = k × x</text><rect x="40" y="60" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">弹簧未受拉力</text><line x1="90" y1="162" x2="270" y2="162" stroke="#4fb3a5" stroke-width="4"/><text x="180" y="244" font-size="12" fill="#234b45" text-anchor="middle">x = 0，弹力 F = 0</text><rect x="360" y="60" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">弹簧被拉长</text><line x1="410" y1="150" x2="590" y2="150" stroke="#4fb3a5" stroke-width="4"/><text x="500" y="244" font-size="12" fill="#234b45" text-anchor="middle">伸长了 x，弹力 F = k × x</text></svg>', caption: '图3　在弹性限度内，弹簧的弹力大小与伸长量成正比，这就是胡克定律。' }
    ],
    exercises: [
      { type: 'choice', question: '关于重力，下列说法正确的是？', options: ['重力就是地球对物体的吸引力', '重力方向总是竖直向下', '质量大的物体没有重力', '重力大小与质量无关'], answer: '重力方向总是竖直向下', explanation: '重力是由于地球吸引而使物体受到的力，中学阶段常近似认为它等于地球引力，但严格说二者并不完全相同。重力的方向始终是竖直向下，而不是相对于某个接触面的"垂直向下"。任何有质量的物体都受重力，且重力大小 G = m × g，与质量成正比。' },
      { type: 'choice', question: '关于弹力，下列说法正确的是？', options: ['不接触的物体之间也能产生弹力', '只要物体发生形变就一定有弹力', '弹力产生条件是两个物体接触并发生弹性形变', '弹力总是向下的'], answer: '弹力产生条件是两个物体接触并发生弹性形变', explanation: '弹力产生的两个必要条件是：两物体必须直接接触，且接触处要发生能够恢复原状的弹性形变。不接触不可能产生弹力；如果发生的是不能恢复原状的塑性形变，也不会产生弹力。弹力的方向总是与物体恢复原状的方向相同，不一定向下。' },
      { type: 'choice', question: '一根弹簧在弹性限度内，受到 2 牛拉力时伸长了 4 厘米。若受到 4 牛拉力，伸长量为？', options: ['2 厘米', '4 厘米', '8 厘米', '16 厘米'], answer: '8 厘米', explanation: '在弹性限度内，弹簧的弹力与伸长量成正比，即 F = k × x。拉力从 2 牛变成 4 牛，增大为原来的 2 倍，所以伸长量也增大为原来的 2 倍，即 4 厘米 × 2 = 8 厘米。' },
      { type: 'fill', question: '物体由于发生弹性形变，而对与它接触的物体产生的力，叫作___。', answer: '弹力', explanation: '弹力是发生弹性形变的物体由于要恢复原状，对与它接触的物体施加的力。弹力产生必须同时满足两个条件：物体相互接触，且接触处发生了弹性形变。生活中常见的压力、支持力、绳子的拉力，本质上都属于弹力。' },
      { type: 'fill', question: '一个质量为 5 千克的物体，受到的重力 G = m × g。若取 g = 9.8 牛/千克，则它受到的重力为___牛。', answer: '49', explanation: '根据重力公式 G = m × g，把 m = 5 千克、g = 9.8 牛/千克代入，得到 G = 5 × 9.8 = 49 牛。计算时要注意质量单位用千克，重力单位是牛，不能把质量数值和重力数值混为一谈。' }
    ]
  });
})();
