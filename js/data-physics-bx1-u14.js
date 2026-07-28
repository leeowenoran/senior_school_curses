/* ============================================================
 * 高一物理 · 必修 第一册 · 第三章 相互作用——力
 * 课时14：力的合成与分解
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u14',
    name: '力的合成与分解',
    chapter: '必修第一册 · 第三章 相互作用——力',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、合力与分力' },
      { type: 'paragraph', text: '一个大人能提起的重物，换作两个小孩从不同方向一起提，也可能提起来。如果这一个力产生的效果，跟几个力共同作用产生的效果相同，那么这个力就叫作那几个力的合力，那几个力就叫作这个力的分力。合力与分力之间是一种"等效替代"的关系。' },
      { type: 'keypoint', label: '重点·等效替代', text: '<strong>合力与分力是等效替代关系，而不是同时存在的真实力。</strong>分析物体受力时，要么用几个分力，要么用一个合力，不能把合力与分力重复算进去。' },
      { type: 'list', items: ['合力：一个力等效代替几个力共同的作用', '分力：几个力共同等效于一个合力的作用', '合力与分力可以互相替代，但不能同时都算上', '求合力叫力的合成，求分力叫力的分解'] },
      { type: 'heading', text: '二、同一直线上的力的合成' },
      { type: 'paragraph', text: '如果几个力都沿同一直线，合成最为简单：方向相同的力，合力大小等于它们大小相加，方向与它们相同；方向相反的力，合力大小等于它们大小相减，方向与较大的那个力相同。' },
      { type: 'keypoint', label: '重点·同一直线合成法则', text: '同一直线上：<strong>同向相加，合力方向与它们相同；反向相减，合力方向与较大的力相同。</strong>例如向右 5 牛和向右 3 牛，合力是向右 8 牛；向右 5 牛和向左 3 牛，合力是向右 2 牛。' },
      { type: 'warn', label: '易错', text: '<strong>只有同一直线上的力才能直接相加减。</strong>如果两个力互成角度，绝不能直接把数值相加，而必须按平行四边形定则来求合力，否则结果会严重错误。' },
      { type: 'example', label: '例题·求同一直线上的合力', text: '一个物体同时受到三个力：向右 4 牛、向右 6 牛、向左 3 牛。求合力。<br><br><strong>解析</strong>：<br>取向右为正方向。向右的力之和 = 4 + 6 = 10 牛；向左的力为 3 牛，相当于负方向 3 牛。合力 = 10 − 3 = 7 牛，方向向右。' },
      { type: 'heading', text: '三、平行四边形定则' },
      { type: 'paragraph', text: '当两个力互成角度时，以表示这两个力的有向线段为邻边，作一个平行四边形，从两力共同作用点出发的那条对角线，就表示合力的大小和方向。这叫作平行四边形定则，它是所有矢量（既有大小又有方向的量）合成的基本法则。' },
      { type: 'keypoint', label: '重点·平行四边形定则', text: '<strong>互成角度的两个力合成时，以这两力为邻边作平行四边形，其对角线就表示合力的大小和方向。</strong>合力可以比分力大，也可以比分力小，甚至可以是零（当两力等大反向时）。' },
      { type: 'heading', text: '四、力的分解' },
      { type: 'paragraph', text: '力的分解是合成的逆运算，同样遵循平行四边形定则。把一个已知力作为平行四边形的对角线，就可以画出无数种可能的分力组合。实际分解时，要按照力"实际产生的效果"来确定分力的方向，不能任意乱分。' },
      { type: 'keypoint', label: '重点·分解要按实际效果', text: '分解一个力时，<strong>要看这个力在实际中产生了哪些效果，就沿这些效果的方向去分解。</strong>例如放在斜面上的物体，重力可分解为沿斜面向下的分力和垂直斜面的分力，分别对应物体下滑和压斜面的效果。' },
      { type: 'tip', label: '提示', text: '没有特别说明时，把一个力分解到互相垂直的两个方向上最方便，这叫正交分解法，是后续求解平衡问题最常用的工具。' },
      { type: 'list', items: ['分解是合成的逆运算，也用平行四边形定则', '分解方向要依据力实际产生的效果来定', '斜面上物体的重力常分解为沿斜面和垂直斜面两个分力', '正交分解把力分解到互相垂直的两个方向，便于计算'] },
      { type: 'table', headers: ['对比项', '力的合成', '力的分解'], rows: [['关系', '由分力求合力', '由合力求分力'], ['法则', '平行四边形定则', '平行四边形定则（逆运算）'], ['唯一性', '给定分力，合力唯一', '不附加条件时分解不唯一'], ['确定方法', '直接求对角线', '按实际效果或需要确定方向']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">同一直线上的力：同向相加、反向相减</text><rect x="40" y="70" width="290" height="90" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="98" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">向右5牛+向右3牛</text><line x1="90" y1="135" x2="280" y2="135" stroke="#4fb3a5" stroke-width="3"/><text x="185" y="165" font-size="12" fill="#234b45" text-anchor="middle">合力 = 8牛 向右</text><rect x="350" y="70" width="290" height="90" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="98" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">向右5牛+向左3牛</text><line x1="470" y1="135" x2="540" y2="135" stroke="#4fb3a5" stroke-width="3"/><text x="495" y="165" font-size="12" fill="#234b45" text-anchor="middle">合力 = 2牛 向右</text></svg>', caption: '图1　同一直线上的力，方向相同相加、相反相减。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">平行四边形定则求互成角度的合力</text><rect x="80" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="180" y1="220" x2="180" y2="120" stroke="#4fb3a5" stroke-width="3"/><line x1="180" y1="220" x2="300" y2="200" stroke="#4fb3a5" stroke-width="3"/><line x1="180" y1="120" x2="300" y2="200" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="4,3"/><line x1="300" y1="200" x2="300" y2="120" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="4,3"/><line x1="180" y1="220" x2="300" y2="120" stroke="#234b45" stroke-width="3"/><text x="240" y="158" font-size="12" fill="#234b45">合力F</text><text x="220" y="245" font-size="12" fill="#234b45">分力F1、F2为邻边</text><rect x="400" y="70" width="240" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="520" y="100" font-size="12" fill="#234b45" text-anchor="middle">对角线即合力</text><text x="520" y="230" font-size="12" fill="#234b45" text-anchor="middle">大小方向由对角线决定</text></svg>', caption: '图2　以两个分力为邻边作平行四边形，对角线表示合力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">斜面上重力的分解（按实际效果）</text><line x1="80" y1="230" x2="430" y2="120" stroke="#2e9e8f" stroke-width="3"/><rect x="200" y="180" width="70" height="36" rx="4" fill="#4fb3a5"/><text x="235" y="202" font-size="12" fill="#234b45" text-anchor="middle">物体</text><line x1="235" y1="198" x2="235" y2="270" stroke="#4fb3a5" stroke-width="3"/><text x="250" y="262" font-size="12" fill="#234b45">垂直斜面分力</text><line x1="235" y1="198" x2="160" y2="168" stroke="#4fb3a5" stroke-width="3"/><text x="130" y="160" font-size="12" fill="#234b45">沿斜面分力</text><line x1="235" y1="198" x2="235" y2="118" stroke="#234b45" stroke-width="2" stroke-dasharray="4,3"/></svg>', caption: '图3　斜面上物体的重力，可按下滑和压斜面两个效果分解。' }
    ],
    exercises: [
      { type: 'choice', question: '关于合力与分力，下列说法正确的是？', options: ['合力一定比分力大', '合力可以比分力小', '两个分力大小不变，合力大小也固定不变', '合力与分力是同时作用在物体上的真实力'], answer: '合力可以比分力小', explanation: '合力与分力是等效替代关系，并非同时真实存在。当互成角度的两个分力夹角较大时，合力可能比分力都小；当两力等大反向时合力甚至为零。同一组大小固定的分力，若夹角改变，合力大小也会随之改变。' },
      { type: 'choice', question: '同一直线上，向右的力 5 牛和向右的力 3 牛，合力为？', options: ['2 牛向左', '8 牛向右', '8 牛向左', '2 牛向右'], answer: '8 牛向右', explanation: '同一直线上方向相同的力，合力大小等于各力大小之和，方向与它们相同。5 牛加 3 牛等于 8 牛，方向向右，所以合力是向右 8 牛。' },
      { type: 'choice', question: '两个互成角度的力合成时，应当采用？', options: ['直接相加', '直接相减', '平行四边形定则', '取平均值'], answer: '平行四边形定则', explanation: '只有同一直线上的力才能直接加减。互成角度的两个力必须用平行四边形定则来求合力：以两个分力为邻边作平行四边形，其对角线就表示该合力的大小和方向。' },
      { type: 'fill', question: '如果一个力产生的效果跟几个力共同作用产生的效果相同，这个力就叫作那几个力的___，那几个力就叫作它的___。', answer: '合力|分力', explanation: '合力与分力之间是一种等效替代关系，而不是同时存在的真实力。几个分力共同作用的效果，可以用一个合力来等效代替。求几个已知分力的合力叫作力的合成；求一个已知力的分力叫作力的分解。' },
      { type: 'fill', question: '两个力互成角度时，以表示这两个力的线段为邻边作平行四边形，这两个力所夹的对角线的长度和方向，就表示合力的___和___。', answer: '大小|方向', explanation: '平行四边形定则是矢量合成的基本法则。两个互成角度的力合成时，以表示这两个力的有向线段为邻边作平行四边形，从共同作用点出发的那条对角线，就表示合力的大小和方向。力的分解是合成的逆运算，同样遵循这一法则。' }
    ]
  });
})();
