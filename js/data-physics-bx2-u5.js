/* ============================================================
 * 高一物理 · 必修 第二册 · 第六章 圆周运动
 * 课时1：圆周运动
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u5',
    name: '圆周运动',
    chapter: '必修第二册 · 第六章 圆周运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、从生活现象认识圆周运动' },
      { type: 'paragraph', text: '生活中很多物体的运动轨迹是圆：电风扇叶片上的某一点、时钟指针的尖端、旋转木马上的人、用绳子拴着在水平面内转动的小球。这些物体都在做圆周运动。圆周运动是最常见的曲线运动之一，研究它对我们理解天体运行、车辆转弯都很有用。' },
      { type: 'keypoint', label: '重点·什么是圆周运动', text: '<strong>圆周运动是物体的运动轨迹是圆的运动。</strong>如果物体沿着圆周运动，并且相等时间里通过的圆弧长度相等，就叫作匀速圆周运动。' },
      { type: 'heading', text: '二、线速度：描述运动的快慢' },
      { type: 'paragraph', text: '要在圆周上比较谁转得快，一个办法是看相同时间内物体沿圆弧走了多长的弧长。弧长越长，说明运动得越快。' },
      { type: 'keypoint', label: '重点·线速度', text: '<strong>线速度 v 等于物体沿圆周通过的弧长 s 与所用时间 t 之比，即 v = s / t。</strong>线速度描述物体沿圆周运动的快慢，它的方向沿该点的切线方向，单位常用米每秒（m/s）。' },
      { type: 'paragraph', text: '线速度的方向很容易判断：在圆周上某一点，沿着圆的切线画一条线，线速度就沿着这条切线。因为物体在圆周上不断改变位置，切线方向也不断改变，所以线速度的方向时刻在变。' },
      { type: 'heading', text: '三、角速度：描述转动的快慢' },
      { type: 'paragraph', text: '另一个看法是看连接物体和圆心的半径转过了多大的角度。相同时间里半径转过的角度越大，说明转得越快。' },
      { type: 'keypoint', label: '重点·角速度', text: '<strong>角速度 ω 等于半径转过的角度 θ 与所用时间 t 之比，即 ω = θ / t。</strong>角速度描述物体绕圆心转动的快慢，单位是弧度每秒（rad/s）。' },
      { type: 'list', items: ['线速度看的是弧长了多久，方向沿切线', '角速度看的是半径转过多少角度', '两者都能描述圆周运动的快慢，但角度不同', '匀速圆周运动中，线速度和角速度的大小都不变'] },
      { type: 'heading', text: '四、周期、频率和转速' },
      { type: 'paragraph', text: '除了线速度和角速度，还常用周期来描述圆周运动。物体运动一周所用的时间叫作周期，用 T 表示，单位是秒。周期越小，说明转得越快。' },
      { type: 'keypoint', label: '重点·周期与转速', text: '<strong>周期 T 是运动一周的时间；频率 f 是每秒转的圈数；转速 n 是单位时间转的圈数。</strong>它们之间的关系是 f = 1 / T，转速和频率数值上常相等，只是单位不同。' },
      { type: 'table', headers: ['物理量', '符号', '含义', '单位'], rows: [['线速度', 'v', '单位时间通过的弧长', 'm/s'], ['角速度', 'ω', '单位时间转过的角度', 'rad/s'], ['周期', 'T', '运动一周的时间', 's'], ['频率', 'f', '每秒运动的圈数', 'Hz']] },
      { type: 'example', label: '例题·比较快慢', text: '甲、乙两物体都做匀速圆周运动，甲在 4 秒里转了 2 圈，乙在 6 秒里转了 3 圈。谁的周期更小？<br><br><strong>解析</strong>：甲的周期 T甲 = 4 秒 / 2 圈 = 2 秒；乙的周期 T乙 = 6 秒 / 3 圈 = 2 秒。两人周期相等，都是 2 秒，转动快慢相同。' },
      { type: 'warn', label: '易错', text: '<strong>不要把“匀速圆周运动”的“匀”理解成速度不变。</strong>这里的“匀”只指速率（线速度的大小）不变，而线速度的方向沿切线时刻在变，所以速度其实是变化的，匀速圆周运动是一种变速运动。' },
      { type: 'tip', label: '提示', text: '<strong>记住线速度方向沿切线。</strong>做题时只要问线速度朝哪，立刻画该点的切线；只要问大小，就用 v = s / t 或后面的 v = ω × r 去算。' },
      { type: 'heading', text: '五、线速度与角速度的关系' },
      { type: 'paragraph', text: '线速度和角速度描述的是同一件事的两种角度，它们之间有简单的联系。设圆周半径为 r，物体转过角度 θ 时走过的弧长 s = r × θ，于是 v = s / t = r × θ / t = r × ω。' },
      { type: 'keypoint', label: '重点·核心关系', text: '<strong>线速度、角速度、半径满足 v = ω × r。</strong>对同一个圆周上的物体，半径越大，在相同角速度下线速度越大；对同一个物体，角速度越大线速度也越大。' },
      { type: 'list', items: ['由 v = ω × r，半径越大线速度越大（角速度相同时）', '由 v = ω × r，角速度越大线速度越大（半径相同时）', '周期 T 与角速度关系：ω = 2π / T，所以 v = 2π r / T'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">做圆周运动的物体，线速度方向沿轨迹切线</text><circle cx="340" cy="170" r="100" fill="none" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="70" r="10" fill="#4fb3a5"/><line x1="340" y1="70" x2="408" y2="38" stroke="#234b45" stroke-width="3"/><text x="412" y="36" font-size="13" fill="#234b45">v 切线方向</text><circle cx="240" cy="170" r="10" fill="#4fb3a5"/><line x1="240" y1="170" x2="240" y2="240" stroke="#234b45" stroke-width="3"/><text x="246" y="262" font-size="13" fill="#234b45">v 切线方向</text><text x="340" y="290" font-size="12" fill="#234b45" text-anchor="middle">线速度方向时刻改变，总沿该点的切线</text></svg>', caption: '图1　圆周上各点的线速度方向都沿该点的切线，方向时刻在改变。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">角速度描述半径转过角度的快慢</text><circle cx="340" cy="170" r="100" fill="none" stroke="#2e9e8f" stroke-width="2"/><line x1="340" y1="170" x2="440" y2="170" stroke="#234b45" stroke-width="3"/><line x1="340" y1="170" x2="392" y2="104" stroke="#4fb3a5" stroke-width="3"/><path d="M 392 104 A 100 100 0 0 1 440 170" fill="none" stroke="#234b45" stroke-width="2" stroke-dasharray="5,4"/><text x="400" y="140" font-size="14" fill="#234b45">θ</text><text x="340" y="290" font-size="12" fill="#234b45" text-anchor="middle">相同时间内半径转过角度越大，角速度越大</text></svg>', caption: '图2　半径从水平位置转到斜上方，转过的角度 θ 越大，角速度越大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">线速度、角速度、半径的关系 v = ω × r</text><rect x="120" y="90" width="160" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="200" y="135" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">角速度 ω</text><text x="200" y="170" font-size="13" fill="#234b45" text-anchor="middle">单位 rad/s</text><rect x="400" y="90" width="160" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="480" y="135" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">线速度 v</text><text x="480" y="170" font-size="13" fill="#234b45" text-anchor="middle">单位 m/s</text><text x="340" y="155" font-size="22" fill="#4fb3a5" text-anchor="middle">× r</text><text x="340" y="260" font-size="14" fill="#234b45" text-anchor="middle">半径 r 越大，同样角速度下线速度越大</text></svg>', caption: '图3　线速度由角速度和半径共同决定，满足 v = ω × r。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于圆周运动的说法，正确的是？', options: ['做圆周运动的物体，速度方向始终不变', '做圆周运动的物体，运动轨迹是圆', '圆周运动一定是匀速运动', '匀速圆周运动的速率不断改变'], answer: '做圆周运动的物体，运动轨迹是圆', explanation: '圆周运动指物体运动轨迹是圆的运动，所以轨迹是圆这一说法正确。做圆周运动时速度方向沿切线时刻改变，并非不变；圆周运动不一定是匀速，只有速率不变时才叫匀速圆周运动；匀速圆周运动速率不变，只是方向在变。' },
      { type: 'choice', question: '做匀速圆周运动的物体，其线速度方向？', options: ['始终指向圆心', '始终沿轨迹的切线方向', '始终保持不变', '与半径方向相同'], answer: '始终沿轨迹的切线方向', explanation: '线速度是物体沿圆周运动的瞬时速度，它的方向就在该点的切线方向上，并随位置变化而时刻改变。它不指向圆心（指向圆心的是向心力方向），也不是保持不变的。' },
      { type: 'choice', question: '对于做圆周运动的物体，下列说法正确的是？', options: ['半径越大，线速度一定越大', '角速度越大，线速度一定越大', '线速度等于角速度乘以半径', '周期越大，角速度越大'], answer: '线速度等于角速度乘以半径', explanation: '由 v = ω × r 可知，线速度由角速度和半径共同决定，单独说半径越大或角速度越大都不一定使线速度变大。周期 T 越大，由 ω = 2π / T 知角速度反而越小。只有 v = ω × r 这个关系恒成立。' },
      { type: 'fill', question: '描述圆周运动快慢时，物体沿圆弧通过的弧长 s 与所用时间 t 之比叫作___，它的方向沿轨迹的切线。', answer: '线速度', explanation: '线速度 v = s / t，描述物体沿圆周运动的快慢，是矢量，方向沿该点切线。它的大小反映运动快慢，方向反映瞬时运动方向，在匀速圆周运动中大小不变。' },
      { type: 'fill', question: '角速度 ω 等于半径转过的角度 θ 与所用时间 t 之比，它的国际单位是___。', answer: 'rad/s', explanation: '角速度描述物体绕圆心转动的快慢，定义式为 ω = θ / t，其中角度用弧度，所以单位为弧度每秒，写作 rad/s。它只与转动快慢有关，与半径大小无关。' }
    ]
  });
})();
