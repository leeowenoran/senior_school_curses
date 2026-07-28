/* ============================================================
 * 高一物理 · 必修 第二册 · 第五章 抛体运动
 * 课时3：实验：探究平抛运动的特点
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u3',
    name: '实验：探究平抛运动的特点',
    chapter: '必修第二册 · 第五章 抛体运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是平抛运动' },
      { type: 'paragraph', text: '把一个小物体水平抛出，如果忽略空气阻力，它在运动中只受重力作用，初速度又是水平的，这样的运动就叫做平抛运动。从水平飞行的飞机上落下的物资、水平击出的乒乓球，都可以近似看作平抛运动。' },
      { type: 'keypoint', label: '重点·平抛运动', text: '<strong>平抛运动是将物体以水平初速度抛出，只在重力作用下的运动。</strong>它的特点是：初速度水平，受力只有竖直向下的重力，加速度恒为重力加速度 g。' },
      { type: 'paragraph', text: '这一节我们通过实验来亲自"看"清平抛运动到底有什么规律：它的轨迹是什么形状？水平方向和竖直方向各自怎样运动？' },
      { type: 'list', items: ['平抛运动初速度水平', '运动过程中只受重力，加速度恒为 g', '轨迹是一条曲线（实际是抛物线）', '可分解为水平与竖直两个方向分别研究'] },
      { type: 'heading', text: '二、实验装置与步骤' },
      { type: 'paragraph', text: '实验室常用"碰撞实验仪"或斜槽来研究。让小球从斜槽上一定高度滚下，从末端水平飞出做平抛运动；在小球出口处装一支铅笔，当小球经过时自动在后面的坐标纸上画点，多次改变位置就能描出一条轨迹。' },
      { type: 'keypoint', label: '重点·实验关键', text: '<strong>实验要保证每次小球从同一高度由静止释放，使平抛的初速度相同；</strong>同时斜槽末端必须水平，保证初速度沿水平方向，这样小球才是真正的平抛运动。' },
      { type: 'example', label: '例题·判断轨迹', text: '实验中得到平抛运动的一系列点，把这些点用平滑曲线连起来，得到的轨迹最接近下列哪条曲线？A 直线　B 圆　C 抛物线　D 螺旋线<br><br><strong>解析</strong>：<br>平抛运动水平方向匀速、竖直方向自由落体，两个分运动合成后的轨迹是抛物线。因此把这些实验点用平滑曲线连接，得到的应是抛物线形状，故选 C。' },
      { type: 'warn', label: '易错', text: '有同学以为平抛轨迹是圆弧（像圆的一部分）。<strong>平抛轨迹是抛物线，不是圆弧。</strong>因为竖直方向位移与时间的平方成正比，并不是匀速，所以轨迹弯曲程度在不断增加，和圆的等曲率弯曲不同。' },
      { type: 'table', headers: ['实验步骤', '操作要点', '目的'], rows: [['安装斜槽', '末端切线水平', '保证初速度水平'], ['释放小球', '同一高度静止释放', '保证初速度相同'], ['描点', '小球经处用铅笔记录', '获取轨迹上的点'], ['连线', '用平滑曲线连点', '得到运动轨迹'], ['分析', '对比水平、竖直位移', '探究分运动规律']] },
      { type: 'tip', label: '提示', text: '<strong>描点时眼睛要正对坐标纸，减小视差；</strong>连线时要用平滑曲线，不要连成折线；若某一点明显偏离曲线，多半是操作失误，可舍去重测，不要强行连上。' },
      { type: 'list', items: ['调节斜槽，使末端水平', '每次从同一位置由静止释放小球', '在坐标纸上记录小球经过的位置', '用平滑曲线连接各点得到轨迹', '测量相等时间内的水平、竖直位移并比较'] },
      { type: 'heading', text: '三、实验结论' },
      { type: 'paragraph', text: '通过分析轨迹和频闪照片可以发现两条重要规律：第一，在相等的时间间隔内，小球水平方向的位移相等，说明水平方向做匀速直线运动；第二，竖直方向的位移随时间增加，且相邻相等时间内的位移差相等（比例约1:3:5），说明竖直方向做自由落体运动。' },
      { type: 'keypoint', label: '重点·实验结论', text: '<strong>平抛运动可分解为：水平方向的匀速直线运动和竖直方向的自由落体运动。</strong>水平方向不受力故速度不变；竖直方向只受重力故做自由落体。两个方向运动互不影响、同时进行。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">平抛实验装置：斜槽末端水平，小球平抛描点</text><polygon points="120,150 220,150 220,120" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="165" y="142" font-size="11" fill="#234b45">斜槽</text><line x1="220" y1="150" x2="260" y2="150" stroke="#2e9e8f" stroke-width="4"/><circle cx="270" cy="150" r="9" fill="#4fb3a5"/><text x="270" y="178" font-size="12" fill="#234b45">小球</text><rect x="300" y="60" width="14" height="200" fill="none" stroke="#234b45" stroke-width="1.5"/><text x="284" y="270" font-size="12" fill="#234b45">坐标纸</text><circle cx="320" cy="170" r="5" fill="#234b45"/><circle cx="350" cy="196" r="5" fill="#234b45"/><circle cx="380" cy="228" r="5" fill="#234b45"/><text x="400" y="240" font-size="12" fill="#234b45">轨迹点</text><text x="340" y="290" font-size="13" fill="#234b45" text-anchor="middle">末端水平，保证小球以水平初速度飞出</text></svg>', caption: '图1　平抛实验装置：调节斜槽末端水平，让小球水平飞出并在坐标纸上描出轨迹点。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">平抛轨迹是一条抛物线</text><path d="M 80 80 Q 360 80 600 280" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="80" cy="80" r="6" fill="#234b45"/><circle cx="200" cy="104" r="5" fill="#4fb3a5"/><circle cx="320" cy="146" r="5" fill="#4fb3a5"/><circle cx="440" cy="206" r="5" fill="#4fb3a5"/><circle cx="560" cy="280" r="5" fill="#4fb3a5"/><text x="360" y="160" font-size="13" fill="#234b45">抛物线轨迹</text><text x="340" y="290" font-size="13" fill="#234b45" text-anchor="middle">用平滑曲线连接实验点，得到抛物线形状的轨迹</text></svg>', caption: '图2　将实验描出的各点用平滑曲线连接，得到一条抛物线（青线）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">频闪照片：水平等距，竖直位移比约1:3:5</text><circle cx="120" cy="90" r="6" fill="#234b45"/><circle cx="220" cy="120" r="6" fill="#234b45"/><circle cx="320" cy="180" r="6" fill="#234b45"/><circle cx="420" cy="270" r="6" fill="#234b45"/><text x="170" y="100" font-size="12" fill="#4fb3a5">水平等距</text><line x1="120" y1="96" x2="220" y2="96" stroke="#4fb3a5" stroke-width="2"/><line x1="220" y1="126" x2="320" y2="126" stroke="#4fb3a5" stroke-width="2"/><line x1="320" y1="186" x2="420" y2="186" stroke="#4fb3a5" stroke-width="2"/><text x="470" y="170" font-size="12" fill="#234b45">竖直位移</text><text x="470" y="190" font-size="12" fill="#234b45">1:3:5</text><text x="340" y="290" font-size="13" fill="#234b45" text-anchor="middle">相等时间内水平位移相等，竖直位移差相等</text></svg>', caption: '图3　频闪照片显示：相等时间内水平位移相等，竖直位移之比约为1:3:5。' },
      { type: 'paragraph', text: '小结：通过实验我们确认，平抛运动的轨迹是抛物线；它可以分解为水平方向的匀速直线运动和竖直方向的自由落体运动。下一节，我们将用这两个分运动的规律，推出平抛运动的位移和速度公式。' }
    ],
    exercises: [
      { type: 'choice', question: '关于平抛运动，下列说法正确的是？', options: ['平抛运动的轨迹是圆弧', '平抛运动只受重力，初速度水平', '平抛运动加速度不断变化', '平抛运动水平方向做匀加速运动'], answer: '平抛运动只受重力，初速度水平', explanation: '平抛运动的定义是将物体以水平初速度抛出，且运动中只受重力作用。正因为只受重力，加速度恒为重力加速度 g 不变；水平方向不受力，做匀速直线运动；竖直方向做自由落体运动。其轨迹是抛物线而不是圆弧。' },
      { type: 'choice', question: '在探究平抛运动特点的实验中，斜槽末端必须调节成什么状态？', options: ['向上倾斜', '向下倾斜', '水平', '任意角度都行'], answer: '水平', explanation: '实验要求小球离开斜槽时初速度沿水平方向，这样才是严格的平抛运动。若末端不水平，小球飞出时会有竖直分速度，就不是平抛而是斜抛了。因此必须仔细调节斜槽末端，使其切线水平。' },
      { type: 'choice', question: '根据平抛实验的频闪照片，相等时间内小球的水平位移特点是？', options: ['越来越大', '越来越小', '相等', '先大后小'], answer: '相等', explanation: '频闪照片每隔相等时间曝光一次。实验表明，在相等的时间间隔内，小球在水平方向的位移相等，这说明水平方向速度不变，即水平方向做匀速直线运动。同时竖直方向相邻位移差相等，说明竖直方向做自由落体运动。' },
      { type: 'fill', question: '做平抛运动实验时，每次都应让小球从斜槽的___高度由静止释放，以保证每次平抛的初速度相同。', answer: '同一', explanation: '只有每次都从斜槽的同一位置（同一高度）由静止释放，小球到达末端时的水平初速度才会相同，这样多次描出的点才属于同一条平抛轨迹，实验才有可比性。若每次释放高度不同，初速度不同，轨迹就会不同，无法研究规律。' },
      { type: 'fill', question: '实验表明，平抛运动可以分解为水平方向的___直线运动和竖直方向的自由落体运动。', answer: '匀速', explanation: '平抛运动水平方向不受力，根据牛顿第一定律，水平方向速度保持不变，做匀速直线运动；竖直方向只受重力，初速度为零，做自由落体运动。两个分运动相互独立、同时进行，合起来就是平抛运动。' }
    ]
  });
})();
