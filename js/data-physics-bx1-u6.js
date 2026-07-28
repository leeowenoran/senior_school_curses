/* ============================================================
 * 高一物理 · 必修 第一册 · 第一章 运动的描述
 * 课时6：x-t图像和v-t图像
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u6',
    name: 'x-t图像和v-t图像',
    chapter: '必修第一册 · 第一章 运动的描述',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、x-t图像（位移-时间图像）' },
      { type: 'paragraph', text: 'x-t图像以时间 t 为横轴、位移 x 为纵轴，把物体的位移随时间变化画成一条曲线（通常是直线）。图像上的每一点，都对应"某一时刻物体在什么位置"。通过图像的形状，不用公式也能直观看出物体的运动情况。' },
      { type: 'keypoint', label: '重点·x-t图像的斜率', text: '在 x-t 图像中，<strong>图线的斜率等于物体的速度</strong>。斜率越大，速度越大；斜率为正表示沿正方向运动，斜率为负表示沿反方向运动。' },
      { type: 'list', items: ['横轴是时间 t，纵轴是位移 x', '图线斜率 = 速度', '水平直线 = 物体静止不动', '两条图线的交点 = 两物体在该时刻相遇', '图线与纵轴截距 = 初位置'] },
      { type: 'paragraph', text: '如果 x-t 图像是一条水平直线，说明位移不随时间变化，物体静止。如果是一条倾斜的直线，说明物体做匀速直线运动，直线越陡速度越大。如果图线向上倾斜，物体沿正方向运动；向下倾斜，则沿反方向运动。' },
      { type: 'example', label: '例题·由x-t图像判断相遇', text: '甲、乙两物体的 x-t 图像有交点，交点处横坐标（时间）相同、纵坐标（位移）也相同。这说明什么？<br><br><strong>解析</strong>：交点表示在同一时刻两物体到达了同一位置，也就是两物体在该时刻相遇（或追及）。因此，x-t 图像中两条图线的交点代表两物体相遇。' },
      { type: 'table', headers: ['x-t图像特征', '物理含义'], rows: [['倾斜直线', '匀速直线运动，斜率=速度'], ['水平直线', '静止'], ['两直线交点', '两物体在该时刻相遇'], ['纵轴截距', 't=0时的初位置'], ['上斜/下斜', '沿正方向/反方向运动']] },
      { type: 'paragraph', text: 'x-t 图像与纵轴的截距，表示 t=0（开始计时）时物体的位置，也叫初位置。如果从原点出发，初位置就是0。比较不同物体的纵截距，还能看出谁起点在前、谁起点在后。' },
      { type: 'heading', text: '二、v-t图像（速度-时间图像）' },
      { type: 'paragraph', text: 'v-t图像以时间 t 为横轴、速度 v 为纵轴，反映速度随时间的变化。图像上的每一点对应"某一时刻物体的速度大小和方向"。它不仅能告诉我们速度怎么变，还能进一步算出位移。' },
      { type: 'keypoint', label: '重点·v-t图像的斜率与面积', text: '在 v-t 图像中，<strong>图线的斜率等于加速度</strong>；<strong>图线与时间轴围成的面积等于这段时间的位移</strong>（图线在时间轴上方，面积为正位移；在下方，面积为负位移）。' },
      { type: 'warn', label: '易错', text: '<strong>v-t 图像的斜率是加速度，不是速度。</strong>初学者常把"图线变高"误认为斜率变大。其实图线高低表示速度大小，而斜率（倾斜程度）才表示加速度。水平直线速度不变，斜率是零，加速度为零——这正是匀速直线运动。' },
      { type: 'paragraph', text: 'v-t 图像中，水平直线表示速度不变，即匀速直线运动（加速度为零）。倾斜直线表示速度均匀变化，即匀变速直线运动：向上倾斜是匀加速，向下倾斜是匀减速。图线越陡，加速度越大。' },
      { type: 'example', label: '例题·由v-t图像求位移', text: '一物体做匀速直线运动，v-t 图像是一条 v = 4 m/s 的水平直线，持续 5 秒。求这段时间内的位移。<br><br><strong>解析</strong>：v-t 图像中图线与时间轴围成的面积等于位移。图形是一个长方形，底为时间 5 秒，高为速度 4 m/s，面积 = 4 × 5 = 20 米。所以位移为 20 米，方向为正方向。' },
      { type: 'heading', text: '三、两类图像对比与应用' },
      { type: 'paragraph', text: 'x-t 图像和 v-t 图像是运动学里最重要的两种图像，要学会互相转换。x-t 看"位置怎么变"，v-t 看"速度怎么变"。同一个运动，两种图像形状不同，但含义要对应得上。' },
      { type: 'keypoint', label: '重点·两类图像要点对照', text: '<strong>x-t图像</strong>：斜率=速度，水平线=静止，交点=相遇，纵截距=初位置。<br><strong>v-t图像</strong>：斜率=加速度，水平线=匀速，下方面积=位移，交点=该时刻速度相同。' },
      { type: 'tip', label: '提示', text: '<strong>v-t 图像中图线在时间轴上方，面积表示正位移；在下方，面积表示负位移。</strong>某段总位移等于上、下方面积的代数和（下方面积取负号）。这能帮我们判断物体最终相对起点是前进还是后退。' },
      { type: 'list', items: ['x-t：斜率→速度，v-t：斜率→加速度', 'x-t 水平线→静止，v-t 水平线→匀速', 'x-t 交点→相遇，v-t 交点→速度相同', 'v-t 图线下方面积→位移（上正下负）'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">x-t图像：斜率=速度，两直线交点=相遇</text><line x1="80" y1="280" x2="600" y2="280" stroke="#2e9e8f" stroke-width="3"/><line x1="80" y1="280" x2="80" y2="70" stroke="#2e9e8f" stroke-width="3"/><text x="615" y="285" font-size="13" fill="#234b45">t</text><text x="70" y="65" font-size="13" fill="#234b45">x</text><line x1="120" y1="200" x2="560" y2="200" stroke="#4fb3a5" stroke-width="3"/><text x="560" y="220" font-size="12" fill="#234b45">水平线→静止</text><line x1="120" y1="260" x2="420" y2="120" stroke="#234b45" stroke-width="3"/><line x1="200" y1="260" x2="500" y2="120" stroke="#1f7a6e" stroke-width="3"/><circle cx="350" cy="190" r="6" fill="#e05d44"/><text x="362" y="185" font-size="12" fill="#e05d44">交点→相遇</text><text x="340" y="310" font-size="13" fill="#234b45" text-anchor="middle">斜线斜率越大速度越大；两斜线交点表示同一时刻到达同一位置</text></svg>', caption: '图1　x-t图像：水平线表示静止，斜线表示匀速，两条斜线交点表示两物体相遇。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">v-t图像：斜率=加速度，图线下方面积=位移</text><line x1="80" y1="280" x2="600" y2="280" stroke="#2e9e8f" stroke-width="3"/><line x1="80" y1="280" x2="80" y2="70" stroke="#2e9e8f" stroke-width="3"/><text x="615" y="285" font-size="13" fill="#234b45">t</text><text x="70" y="65" font-size="13" fill="#234b45">v</text><line x1="120" y1="160" x2="560" y2="160" stroke="#4fb3a5" stroke-width="3"/><text x="560" y="180" font-size="12" fill="#234b45">水平线→匀速</text><line x1="120" y1="240" x2="430" y2="120" stroke="#234b45" stroke-width="3"/><text x="440" y="115" font-size="12" fill="#234b45">斜线→匀加速(斜率=加速度)</text><polygon points="120,280 120,160 560,160 560,280" fill="#d6ece8" opacity="0.7"/><text x="340" y="255" font-size="12" fill="#234b45" text-anchor="middle">面积=位移</text></svg>', caption: '图2　v-t图像：水平线为匀速，斜线斜率是加速度，图线与时间轴围成的面积等于位移。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">x-t图像 与 v-t图像 的关键对应</text><rect x="40" y="60" width="280" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">x-t图像</text><text x="180" y="116" font-size="13" fill="#234b45" text-anchor="middle">斜率 = 速度</text><text x="180" y="142" font-size="13" fill="#234b45" text-anchor="middle">水平线 = 静止</text><text x="180" y="168" font-size="13" fill="#234b45" text-anchor="middle">交点 = 相遇</text><text x="180" y="194" font-size="13" fill="#234b45" text-anchor="middle">纵截距 = 初位置</text><rect x="360" y="60" width="280" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">v-t图像</text><text x="500" y="116" font-size="13" fill="#234b45" text-anchor="middle">斜率 = 加速度</text><text x="500" y="142" font-size="13" fill="#234b45" text-anchor="middle">水平线 = 匀速</text><text x="500" y="168" font-size="13" fill="#234b45" text-anchor="middle">下方面积 = 位移</text><text x="500" y="194" font-size="13" fill="#234b45" text-anchor="middle">交点 = 速度相同</text></svg>', caption: '图3　两类图像的核心对应关系总览：斜率、水平线、交点、截距/面积各有确定含义。' }
    ],
    exercises: [
      { type: 'choice', question: '在 x-t（位移-时间）图像中，图线的斜率表示？', options: ['加速度', '位移', '速度', '时间'], answer: '速度', explanation: 'x-t 图像中纵坐标 x 随横坐标 t 的变化率（即图线斜率）就是位移对时间的变化率，等于速度。斜率越大速度越大，斜率为正则沿正方向运动，水平直线斜率为零表示静止。加速度在 x-t 图像中对应斜率的变化率，不是斜率本身。' },
      { type: 'choice', question: '在 v-t（速度-时间）图像中，图线的斜率表示？', options: ['速度', '位移', '加速度', '时间'], answer: '加速度', explanation: 'v-t 图像中纵坐标 v 随 t 的变化率（斜率）是速度对时间的变化率，等于加速度。水平直线斜率为零，表示加速度为零、做匀速直线运动。位移则对应图线与时间轴围成的面积，不是斜率。' },
      { type: 'choice', question: '在 v-t 图像中，图线与时间轴围成的面积表示？', options: ['加速度', '位移', '速度', '时间'], answer: '位移', explanation: 'v-t 图像中，速度对时间积分就是位移，几何上等于图线与时间轴围成的面积。图线在时间轴上方面积为正位移，下方面积为负位移，总位移为上下面积的代数和。加速度和速度都不是由面积表示的。' },
      { type: 'fill', question: '在 x-t 图像中，两条图线的交点表示两物体在该时刻到达同一位置，即两物体___（填"相遇"或"静止"）。', answer: '相遇', explanation: 'x-t 图像的交点处，两物体的横坐标（时刻）相同、纵坐标（位移/位置）也相同，说明同一时刻处在同一位置，这就是两物体相遇（或追及）。静止对应的是水平直线，不是交点。' },
      { type: 'fill', question: '在 x-t 图像中，若图线是一条水平直线，说明位移不随时间变化，物体处于___状态（填"静止"或"匀速"）。', answer: '静止', explanation: 'x-t 图像水平直线意味着无论时间怎么变，位移都保持不变，物体位置不动，所以处于静止状态。匀速直线运动在 x-t 图像中表现为倾斜的直线，而非水平直线。' }
    ]
  });
})();
