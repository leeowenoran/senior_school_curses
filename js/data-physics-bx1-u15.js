/* ============================================================
 * 高一物理 · 必修 第一册 · 第三章 相互作用——力
 * 课时5：共点力的平衡
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u15',
    name: '共点力的平衡',
    chapter: '必修第一册 · 第三章 相互作用——力',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是物体的平衡状态' },
      { type: 'paragraph', text: '如果一个物体在力的作用下，保持静止不动，或者沿着一条直线做快慢不变的运动（匀速直线运动），我们就说这个物体处于平衡状态。比如停在桌面上的书、在平直轨道上匀速行驶的列车，它们都受到力的作用，但运动状态没有改变，都属于平衡。' },
      { type: 'keypoint', label: '重点·平衡状态', text: '<strong>物体的平衡状态是指：静止，或做匀速直线运动。</strong>判断平衡状态不看物体受不受力，而看它的运动状态是否改变。只要速度的大小和方向都不变，物体就处于平衡。' },
      { type: 'paragraph', text: '这里要特别注意：平衡并不等于"不受力"。现实生活中完全不受力的物体几乎不存在，物体往往受到好几个力，只是这几个力彼此"拉平"了，让物体既不加速也不减速、不拐弯，于是表现为平衡。' },
      { type: 'heading', text: '二、什么是共点力' },
      { type: 'paragraph', text: '研究多个力的平衡时，常遇到这样一类情况：这几个力要么都作用在物体的同一个点上，要么它们的作用线（把力顺着箭头方向延长出来的直线）交于同一点。这样的几个力，就叫作共点力。' },
      { type: 'list', items: ['几个力作用在物体的同一点上，它们是共点力', '几个力的作用线交于一点，它们也是共点力', '研究共点力的平衡，可以先把力合成，再谈平衡条件', '共点力是本章研究平衡问题的主要对象'] },
      { type: 'keypoint', label: '重点·共点力定义', text: '<strong>几个力如果作用在物体的同一点，或者它们的作用线交于一点，这几个力就叫作共点力。</strong>共点力可以方便地用一个点来代表所有力的作用效果。' },
      { type: 'heading', text: '三、二力平衡的条件' },
      { type: 'paragraph', text: '最简单的情况是物体只受两个力而平衡。比如用绳子竖直吊着一盏静止的灯，灯受到向下的重力和绳子向上的拉力，这两个力大小相等、方向相反、作用在同一直线上，灯就静止不动。' },
      { type: 'table', headers: ['条件', '说明'], rows: [['大小相等', '两个力的大小数值相同'], ['方向相反', '两个力指向正相反'], ['作用在同一直线', '两个力的作用线重合，不在同一直线会转动'], ['作用在同一物体', '两个力都作用在同一个物体上']] },
      { type: 'warn', label: '易错', text: '不要把"二力平衡的两个力"和"作用力与反作用力"搞混。<strong>平衡力作用在同一个物体上，可以是不同性质的力（如重力和支持力）；而作用力与反作用力作用在相互作用的两个不同物体上，且一定是同种性质的力。</strong>这是考试最爱挖的坑。' },
      { type: 'heading', text: '四、三力平衡（合成法）' },
      { type: 'paragraph', text: '当物体受到三个共点力而平衡时，可以先用平行四边形定则把其中任意两个力合成，得到一个合力。既然物体平衡，这个合力就必须和第三个力大小相等、方向相反、作用在同一直线上。换句话说，三个力中任意两个力的合力，都与剩下的那个力"拉平"了。' },
      { type: 'example', label: '例题·三力平衡', text: '一个物体受到三个共点力 F1、F2、F3 作用而静止。已知 F1 与 F2 的合力大小为 10 牛、方向向右，则 F3 的大小和方向怎样？<br><br><strong>解析</strong>：<br>物体平衡，说明三个力的合力为零。把 F1、F2 合成得到 10 牛向右的合力，那么 F3 必须和这个合力大小相等、方向相反，才能相互抵消。所以 F3 的大小是 10 牛，方向向左。' },
      { type: 'tip', label: '提示', text: '<strong>三力平衡时，把三个力依次首尾相接画出来，会得到一个首尾闭合的三角形，这叫矢量三角形。</strong>看到"三力平衡"，脑子里就可以冒出"闭合三角形"，很多题因此变得直观。' },
      { type: 'heading', text: '五、用正交分解法解平衡问题' },
      { type: 'paragraph', text: '当受力多于三个、或者力的方向比较乱时，常用正交分解法。先选一个直角坐标系，把每个力都分解到 x 轴和 y 轴上，然后分别让 x 方向的合力、y 方向的合力都等于零。这样就把一个复杂的平衡问题，变成两组简单的加减法。' },
      { type: 'list', items: ['第一步：分析物体受到哪几个力，画好受力图', '第二步：建立合适的直角坐标系（常让尽量多的力落在坐标轴上）', '第三步：把每个力沿 x、y 两个方向分解', '第四步：列出 x 方向合力为零、y 方向合力为零两个方程求解'] },
      { type: 'example', label: '例题·正交分解', text: '一个木块静止在斜面上，受到重力 G、支持力 N、摩擦力 f 三个力。若建立沿斜面方向和垂直斜面方向的坐标，则沿斜面方向有 f 与 G 的分量平衡，垂直斜面方向有 N 与 G 的分量平衡。<br><br><strong>解析</strong>：<br>把重力分解到沿斜面和垂直斜面两个方向。沿斜面方向，摩擦力 f 向上，重力分量向下，二者相等物体才不下滑；垂直斜面方向，支持力 N 等于重力的垂直分量。两个方向都满足合力为零，木块就静止。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">几个力都作用在物体的同一点，这样的力叫作共点力</text><circle cx="340" cy="178" r="6" fill="#234b45"/><text x="340" y="204" font-size="13" fill="#234b45" text-anchor="middle">力的作用点 O</text><line x1="340" y1="178" x2="200" y2="92" stroke="#234b45" stroke-width="3"/><polygon points="200,92 214,98 208,110" fill="#4fb3a5"/><text x="168" y="82" font-size="13" fill="#234b45">F1</text><line x1="340" y1="178" x2="480" y2="92" stroke="#234b45" stroke-width="3"/><polygon points="480,92 466,98 472,110" fill="#4fb3a5"/><text x="502" y="82" font-size="13" fill="#234b45">F2</text><line x1="340" y1="178" x2="340" y2="256" stroke="#234b45" stroke-width="3"/><polygon points="340,256 333,242 347,242" fill="#4fb3a5"/><text x="356" y="272" font-size="13" fill="#234b45">F3</text><rect x="40" y="60" width="240" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="160" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">共点力</text><text x="160" y="122" font-size="12" fill="#234b45" text-anchor="middle">多个力作用在同一点，</text><text x="160" y="144" font-size="12" fill="#234b45" text-anchor="middle">或作用线交于一点，</text><text x="160" y="166" font-size="12" fill="#234b45" text-anchor="middle">都算共点力。</text></svg>', caption: '图1　F1、F2、F3 都从同一点 O 出发，这样的三个力就是共点力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">受两个力而平衡：大小相等、方向相反、作用在同一直线</text><rect x="280" y="150" width="120" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="186" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">物体</text><line x1="280" y1="180" x2="150" y2="180" stroke="#234b45" stroke-width="3"/><polygon points="280,180 266,174 266,186" fill="#4fb3a5"/><text x="158" y="170" font-size="13" fill="#234b45">F1</text><line x1="400" y1="180" x2="530" y2="180" stroke="#234b45" stroke-width="3"/><polygon points="400,180 414,174 414,186" fill="#4fb3a5"/><text x="512" y="170" font-size="13" fill="#234b45">F2</text><text x="340" y="252" font-size="13" fill="#234b45" text-anchor="middle">两个力大小相等、方向相反、作用在同一直线上</text></svg>', caption: '图2　物体受 F1、F2 两个力而静止，这两个力满足二力平衡条件。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">三力平衡时，三个力首尾相接可构成闭合三角形</text><rect x="60" y="70" width="250" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">物体受三力</text><circle cx="185" cy="180" r="6" fill="#234b45"/><line x1="185" y1="180" x2="120" y2="120" stroke="#234b45" stroke-width="3"/><polygon points="120,120 134,124 128,136" fill="#4fb3a5"/><text x="100" y="112" font-size="13" fill="#234b45">F1</text><line x1="185" y1="180" x2="250" y2="120" stroke="#234b45" stroke-width="3"/><polygon points="250,120 236,124 242,136" fill="#4fb3a5"/><text x="258" y="112" font-size="13" fill="#234b45">F2</text><line x1="185" y1="180" x2="185" y2="240" stroke="#234b45" stroke-width="3"/><polygon points="185,240 178,226 192,226" fill="#4fb3a5"/><text x="200" y="258" font-size="13" fill="#234b45">F3</text><rect x="370" y="70" width="250" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">矢量三角形</text><line x1="400" y1="200" x2="560" y2="200" stroke="#234b45" stroke-width="3"/><text x="480" y="190" font-size="13" fill="#234b45">F1</text><line x1="560" y1="200" x2="560" y2="110" stroke="#234b45" stroke-width="3"/><text x="572" y="160" font-size="13" fill="#234b45">F2</text><line x1="560" y1="110" x2="400" y2="200" stroke="#234b45" stroke-width="3" stroke-dasharray="6,4"/><text x="448" y="142" font-size="13" fill="#234b45">F3</text></svg>', caption: '图3　左图是物体受三个共点力，右图把三力首尾相接得到闭合的矢量三角形。' }
    ],
    exercises: [
      { type: 'choice', question: '关于共点力平衡，下列说法正确的是？', options: ['物体受两个力平衡时，这两个力一定大小相等、方向相反、作用在同一直线', '物体受三个力平衡时，这三个力一定作用在同一直线上', '共点力平衡时，物体一定处于静止状态，不可能运动', '平衡力和作用力与反作用力是同一种力'], answer: '物体受两个力平衡时，这两个力一定大小相等、方向相反、作用在同一直线', explanation: '二力平衡的条件正是大小相等、方向相反、作用在同一直线上，且该条件只针对同一物体上的两个力。三力平衡时三个力不一定共线，可以构成闭合三角形；平衡包括静止和匀速直线运动两种情形；平衡力与作用力反作用力性质不同、作用对象也不同，不能混为一谈。' },
      { type: 'choice', question: '一个物体受到三个共点力 F1、F2、F3 作用而处于平衡，已知其中两个力 F1 与 F2 的合力大小和方向，则第三个力 F3 应怎样？', options: ['F3 的大小等于 F1 与 F2 的合力大小，方向与合力相同', 'F3 的大小等于 F1 与 F2 的合力大小，方向与合力相反', 'F3 的大小一定等于 F1 的大小', 'F3 的方向一定与 F1 相同'], answer: 'F3 的大小等于 F1 与 F2 的合力大小，方向与合力相反', explanation: '物体处于三力平衡，意味着三个力的合力为零。把 F1 和 F2 先合成得到一个合力，那么剩下的 F3 必须和这个合力大小相等、方向相反，二者才能互相抵消使总合力为零。F3 的大小和方向由 F1、F2 的合力唯一决定，不一定等于或平行于 F1。' },
      { type: 'choice', question: '用正交分解法解共点力平衡问题时，正确的做法是？', options: ['先随意建立坐标系，再把各力分解，最后只令合力为零', '先建立直角坐标系，把各力沿两坐标轴分解，再令 x 方向和 y 方向的合力都为零', '只需要令其中一个方向的合力为零即可', '不需要分解力，直接把所有力相加'], answer: '先建立直角坐标系，把各力沿两坐标轴分解，再令 x 方向和 y 方向的合力都为零', explanation: '正交分解法的标准步骤是：先建立合适的直角坐标系，把每个力都分解到 x 轴和 y 轴两个方向上，然后分别写出 x 方向合力为零、y 方向合力为零两个方程。只有两个方向都满足合力为零，物体才真正平衡，只令一个方向为零是不够的。' },
      { type: 'fill', question: '一个物体受到两个力作用而保持静止，若其中一个力大小为 12 牛、方向向右，则另一个力大小为___牛、方向___（填"向左"或"向右"）。', answer: '12|向左', explanation: '根据二力平衡条件，物体受两个力而静止时，这两个力必须大小相等、方向相反、作用在同一直线上。已知其中一个力是 12 牛向右，那么另一个力必然是 12 牛、方向向左，二者才能互相抵消，使合力为零。' },
      { type: 'fill', question: '几个力作用在物体的同一点，或者它们的作用线交于一点，这样的力叫作___力。', answer: '共点', explanation: '共点力的定义是：几个力如果作用在物体的同一点，或者它们的作用线交于一点，这几个力就叫作共点力。共点力可以方便地用一个点来代表所有力的作用效果，是本章研究平衡问题的主要对象。' }
    ]
  });
})();
