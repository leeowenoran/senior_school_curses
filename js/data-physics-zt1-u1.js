/* ============================================================
 * 高三复习 · 力学综合 · 专题一 运动学
 * 课时1：运动学基本概念
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u1',
    name: '运动学基本概念',
    chapter: '力学综合 · 专题一 运动学',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、质点——物理学里的理想化模型' },
      { type: 'paragraph', text: '真实物体既有大小又有形状，运动往往很复杂。比如研究一列火车从北京到上海，我们更关心它开了多久、走了多远，并不关心车轮怎么转、车身怎么晃。这时可以把整列火车当成一个"点"，只研究这个点的位置变化。这种"抓主要因素、忽略次要因素"的办法，就是物理学建立模型的思想。' },
      { type: 'keypoint', label: '重点·什么是质点', text: '<strong>质点是用来代替物体的有质量的点。</strong>它忽略了物体的大小和形状，只保留"质量"这一最根本的性质，从而把复杂的真实运动简化为一个点的位置变化。' },
      { type: 'paragraph', text: '建模的目的是"简化"。现实世界太复杂，直接研究往往无从下手。物理学家先抓住最关键的因素，把次要因素暂时丢开，用简单的模型代替真实物体，再用数学工具描述它。等掌握了规律，再逐步把忽略的因素加回来。' },
      { type: 'list', items: ['抓主要因素：只研究物体整体的位置变化，忽略它的大小和形状', '忽略次要因素：暂时不研究物体自身的转动、形变等细节', '建立模型：把真实物体简化为一个质点，方便用位置和数学描述运动'] },
      { type: 'heading', text: '二、什么情况下能把物体看作质点' },
      { type: 'keypoint', label: '重点·看作质点的条件', text: '当<strong>物体的大小和形状对所研究的问题影响很小、可以忽略</strong>时，就可以把物体看作质点。反之，若大小形状会影响结论，就不能看作质点。' },
      { type: 'example', label: '例题·判断能否看作质点', text: '下列说法正确吗？请说明理由。<br>① 研究地球绕太阳公转时，可以把地球看作质点。<br>② 研究地球自转时，可以把地球看作质点。<br><br><strong>解析</strong>：<br>① 正确。地球直径远小于公转轨道半径，地球大小对公转问题影响极小，可忽略，所以能看作质点。<br>② 错误。研究自转要看地球各点的转动情况，必须考虑大小和形状，不能看作质点。' },
      { type: 'warn', label: '易错', text: '不能认为"小的物体就能看作质点，大的就不能"。<strong>原子很小，但研究原子内部电子的运动时，原子不能看作质点；地球很大，研究公转时却能看作质点。</strong>判断标准是"大小形状是否影响所研究的问题"，而不是物体的绝对大小。' },
      { type: 'heading', text: '三、参考系——描述运动的标准' },
      { type: 'keypoint', label: '重点·参考系', text: '<strong>参考系是假定不动、用来判断其他物体运动的标准物体。</strong>同一个运动，选不同的参考系，描述可能完全不同。因此描述任何运动都必须先说明"以什么为参考系"。' },
      { type: 'paragraph', text: '你坐在行驶的汽车里：以汽车为参考系，你觉得自己是静止的；以地面为参考系，你正随车向前运动。再看车外的树：以汽车为参考系，树在向后退；以地面为参考系，树是静止的。可见"运动还是静止"是相对于参考系而言的，没有参考系就无法谈运动。' },
      { type: 'tip', label: '提示', text: '<strong>通常选地面为参考系。</strong>在没有特别说明的情况下，一般默认以地面或地面上静止不动的物体作为参考系，这样大家描述运动时有共同标准，便于交流。' },
      { type: 'list', items: ['参考系是被假定不动的标准物体，用来判断其他物体的运动', '同一个运动选不同的参考系，描述可能不同', '没有特别说明时，通常取地面或地面上静止的物体为参考系', '研究任何运动，都必须先明确所选的参考系'] },
      { type: 'heading', text: '四、时刻与时间间隔' },
      { type: 'paragraph', text: '"第3秒末""上午8点"说的是时间轴上的一个点，叫时刻；"前3秒内""第3秒内"说的是两个点之间的一段，叫时间间隔（也叫时间）。时刻对应状态（比如某个瞬间在哪里），时间间隔对应过程（比如从A到B用了多久）。' },
      { type: 'keypoint', label: '重点·时刻与时间间隔', text: '<strong>时刻是时间轴上的一个点，对应某一瞬时；时间间隔是时间轴上两点间的线段，对应一段过程。</strong>例如"第2秒末"是时刻，"第2秒内"指从第1秒末到第2秒末这1秒的时间间隔。' },
      { type: 'table', headers: ['说法', '属于', '举例'], rows: [['上午8点', '时刻', '时间轴上的一个点'], ['第3秒末', '时刻', '第2秒末到第3秒末的分界点'], ['前3秒内', '时间间隔', '从0到第3秒末，共3秒'], ['第3秒内', '时间间隔', '从第2秒末到第3秒末，共1秒']] },
      { type: 'heading', text: '五、位移与路程' },
      { type: 'paragraph', text: '位移是从初位置指向末位置的一条有向线段，它只看起点和终点，不管中间怎么走；路程是物体实际运动轨迹的长度。位移是矢量（有大小也有方向），路程是标量（只有大小）。比如绕操场跑一圈回到起点，位移是0，但路程是一整圈的长度。' },
      { type: 'keypoint', label: '重点·位移与路程的区别', text: '<strong>位移是由初位置指向末位置的有向线段，是矢量，大小等于初末位置间的直线距离；路程是运动轨迹的实际长度，是标量。</strong>只有当物体做单向直线运动时，位移大小才等于路程。' },
      { type: 'warn', label: '易错', text: '<strong>位移大小不一定等于路程。</strong>除非物体始终沿同一方向做直线运动，否则位移大小小于路程。位移可以为零（如绕一圈回到原点），但路程不可能为零（只要动过）。' },
      { type: 'heading', text: '六、速度' },
      { type: 'paragraph', text: '速度是描述物体运动快慢和方向的物理量。用位移除以发生这段位移所用的时间得到平均速度：v = Δx / Δt。速度是矢量，方向与位移方向相同。平时说的"速度"如果指某一瞬间的，叫瞬时速度；平时说的"速率"则是路程除以时间，是标量。' },
      { type: 'keypoint', label: '重点·速度', text: '<strong>速度 v = Δx / Δt，是矢量，方向与位移方向相同，描述物体运动的快慢和方向。</strong>平均速度是位移与时间的比值；瞬时速度是某一时刻的速度。' },
      { type: 'heading', text: '七、加速度' },
      { type: 'paragraph', text: '加速度描述速度变化快慢。速度变化量 Δv 除以所用时间 Δt 就是加速度：a = Δv / Δt。加速度也是矢量，方向与 Δv 相同。要注意：加速度大不代表速度快，只代表速度变化快；加速度方向与速度方向相同时物体加速，相反时减速。加速度最终由物体所受的合力决定（这点后面牛顿定律会详讲）。' },
      { type: 'keypoint', label: '重点·加速度', text: '<strong>加速度 a = Δv / Δt，是矢量，方向与速度变化量 Δv 相同，由物体所受合力决定。</strong>它描述速度变化的快慢，不等于速度本身的大小。' },
      { type: 'example', label: '例题·加速度正负', text: '一辆汽车由静止开始向东加速，5秒内速度从0增大到20 m/s，求加速度并说明方向。<br><strong>解析</strong>：Δv = 20 − 0 = 20 m/s，Δt = 5 s，所以 a = Δv / Δt = 20 / 5 = 4 m/s²。方向与速度变化量相同，即向东。' },
      { type: 'warn', label: '易错', text: '<strong>加速度方向与速度方向没有必然相同关系。</strong>加速度方向由 Δv 决定，与速度方向可以相同（加速）、相反（减速）或成任意夹角（曲线运动）。不要误以为"加速度向东物体就一定向东运动"。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">真实物体可简化为一个有质量的点——质点</text><rect x="40" y="60" width="280" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">真实物体（如小车）</text><rect x="80" y="142" width="160" height="50" rx="6" fill="#4fb3a5"/><circle cx="110" cy="202" r="14" fill="#234b45"/><circle cx="210" cy="202" r="14" fill="#234b45"/><rect x="360" y="60" width="280" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">质点模型</text><circle cx="500" cy="158" r="22" fill="#4fb3a5"/><text x="500" y="210" font-size="13" fill="#234b45" text-anchor="middle">忽略大小形状，只留质量</text><text x="340" y="282" font-size="13" fill="#234b45" text-anchor="middle">建模思想：抓主要因素，忽略次要因素</text></svg>', caption: '图1　把有大小形状的真实物体（左）简化为一个有质量的点（右），这就是质点模型。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">同一棵树，选不同参考系描述不同</text><rect x="40" y="60" width="280" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">以地面为参考系</text><rect x="173" y="150" width="14" height="62" fill="#234b45"/><circle cx="180" cy="140" r="18" fill="#4fb3a5"/><text x="180" y="234" font-size="13" fill="#234b45" text-anchor="middle">树静止不动</text><rect x="360" y="60" width="280" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">以行驶的汽车为参考系</text><rect x="493" y="150" width="14" height="62" fill="#234b45"/><circle cx="500" cy="140" r="18" fill="#4fb3a5"/><text x="500" y="234" font-size="13" fill="#234b45" text-anchor="middle">树向后退（相对车运动）</text></svg>', caption: '图2　同一棵路边树，以地面为参考系是静止的，以行驶的汽车为参考系却在向后退。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">时刻是点，时间间隔是线段</text><line x1="60" y1="170" x2="620" y2="170" stroke="#2e9e8f" stroke-width="3"/><circle cx="120" cy="170" r="6" fill="#234b45"/><circle cx="300" cy="170" r="6" fill="#234b45"/><circle cx="500" cy="170" r="6" fill="#234b45"/><text x="120" y="200" font-size="13" fill="#234b45" text-anchor="middle">第1秒末</text><text x="300" y="200" font-size="13" fill="#234b45" text-anchor="middle">第2秒末</text><text x="500" y="200" font-size="13" fill="#234b45" text-anchor="middle">第3秒末</text><line x1="120" y1="150" x2="300" y2="150" stroke="#4fb3a5" stroke-width="4"/><text x="210" y="142" font-size="12" fill="#234b45" text-anchor="middle">第2秒内(间隔)</text><line x1="60" y1="225" x2="120" y2="225" stroke="#234b45" stroke-width="2" stroke-dasharray="4,3"/><text x="90" y="248" font-size="12" fill="#234b45" text-anchor="middle">0时刻</text></svg>', caption: '图3　时间轴上一个个点是时刻，两点之间的一段是时间间隔（如"第2秒内"）。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于质点的说法，正确的是？', options: ['体积很小的物体一定能看作质点', '研究地球自转时地球可看作质点', '研究地球公转时地球可看作质点', '任何物体在任何问题中都能看作质点'], answer: '研究地球公转时地球可看作质点', explanation: '物体能否看作质点，取决于在所研究的问题中其大小和形状是否可以忽略，与物体本身的绝对大小无关。研究地球公转时，地球直径远小于轨道半径，大小可忽略，故可看作质点；而研究自转时必须考虑大小形状，不能看作质点。' },
      { type: 'choice', question: '关于参考系，下列说法正确的是？', options: ['参考系必须选地面', '参考系是假定不动、用来判断其他物体运动的标准物体', '同一运动选不同参考系，结论一定相同', '没有参考系也能描述物体的运动'], answer: '参考系是假定不动、用来判断其他物体运动的标准物体', explanation: '参考系是人们假定不动、用来作为标准判断其他物体是否运动的物体。参考系可以任意选择，不一定选地面；同一运动选不同参考系，描述常常不同；描述运动必须先选定参考系，否则运动还是静止无从谈起。' },
      { type: 'choice', question: '关于位移与路程，下列说法正确的是？', options: ['位移是标量，路程是矢量', '位移大小一定等于路程', '位移由初位置指向末位置，是矢量', '位移和路程都是矢量'], answer: '位移由初位置指向末位置，是矢量', explanation: '位移是从初位置指向末位置的有向线段，既有大小也有方向，是矢量；路程是运动轨迹的实际长度，只有大小，是标量。只有在单向直线运动中位移大小才等于路程，一般情况下位移大小小于路程，位移甚至可能为零而路程不为零。' },
      { type: 'fill', question: '速度是位移与发生这段位移所用时间的比值，定义式写作 v = ___（用 Δx 和 Δt 表示）。', answer: 'Δx/Δt', explanation: '速度描述运动的快慢和方向，等于位移变化量除以所用时间，即 v = Δx / Δt。它是矢量，方向与位移方向相同。注意区分速率（路程除以时间，是标量）与速度。' },
      { type: 'fill', question: '加速度描述速度变化的快慢，定义式写作 a = ___（用 Δv 和 Δt 表示），其方向与 ___ 相同。', answer: 'Δv/Δt | Δv', explanation: '加速度 a = Δv / Δt，是矢量。它的方向与速度变化量 Δv 相同，由物体所受合力决定。加速度大小反映速度变化快慢，不等于速度本身大小；加速还是减速要看加速度与速度方向是相同还是相反。' }
    ]
  });
})();
