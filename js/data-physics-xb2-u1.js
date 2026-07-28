/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第一章 安培力与洛伦兹力
 * 课时1：安培力
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u1',
    name: '安培力',
    chapter: '选择性必修第二册 · 第一章 安培力与洛伦兹力',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、磁场对通电导线的作用力——安培力' },
      { type: 'paragraph', text: '我们学过，磁体周围存在磁场。如果把一根通电的导线放到磁场里，你会发现导线好像被一只看不见的手推了一下，会发生运动或受到拉力。这个磁场施加在通电导线上的力，就叫做安培力。名字来自法国物理学家安培，他最早系统地研究了电流和磁场之间的这种力学作用。' },
      { type: 'keypoint', label: '重点·什么是安培力', text: '<strong>安培力是磁场对通电导线（电流）施加的力。</strong>只要有电流、又有磁场，而且电流方向不和磁场完全平行，导线就会受到安培力。它是电和磁之间联系的桥梁之一。' },
      { type: 'paragraph', text: '安培力不是凭空产生的。导线里有大量自由电子在定向移动，形成电流；这些运动的电荷在磁场里各自受到洛伦兹力（后面会学），合起来就表现为整根导线受到的安培力。所以安培力本质上是大量运动电荷所受洛伦兹力的宏观表现。' },
      { type: 'list', items: ['导线中必须有电流：没有电流，磁场再强也不会有安培力', '周围必须有磁场：没有磁场，电流再大也不受安培力', '电流方向不能和磁场方向完全平行：两者平行时安培力为零，垂直时安培力最大'] },
      { type: 'heading', text: '二、安培力的大小 F = B × I × L' },
      { type: 'keypoint', label: '重点·安培力公式（导线垂直磁场）', text: '<strong>当通电直导线与磁场方向垂直时，安培力大小 F = B × I × L。</strong>其中 B 是磁感应强度，I 是电流，L 是处在磁场中的导线长度。三者相乘就是安培力的大小。' },
      { type: 'paragraph', text: '这个公式有个重要前提：导线必须和磁场垂直。如果导线是斜着放的，只有垂直于磁场的那部分"有效长度"才起作用，安培力会变小。我们这一节先只讨论最简单、也最常见的垂直情况。单位上，B 用特斯拉（T），I 用安培（A），L 用米（m），算出来的 F 就是牛顿（N）。' },
      { type: 'example', label: '例题·计算安培力', text: '一根长 0.20 米的直导线，垂直放在磁感应强度 B = 0.50 特斯拉的匀强磁场中，通有电流 I = 2.0 安培。求导线受到的安培力大小。<br><br><strong>解</strong>：<br>因为导线垂直于磁场，直接用 F = B × I × L。<br>代入：F = 0.50 × 2.0 × 0.20 = 0.20（牛）。<br>答：导线受到的安培力为 0.20 牛。' },
      { type: 'warn', label: '易错', text: '使用 F = B × I × L 前，<strong>一定要确认导线与磁场垂直</strong>。若题目说"导线与磁场平行"，则安培力为零，不能直接套公式。另外，三个量要统一成国际单位（特斯拉、安培、米），否则算出来的力不是牛顿。' },
      { type: 'table', headers: ['所改变的量的关系', '安培力 F 的变化', '说明'], rows: [['B 增大（I、L 不变）', 'F 成正比增大', '磁场越强，力越大'], ['I 增大（B、L 不变）', 'F 成正比增大', '电流越大，力越大'], ['L 增大（B、I 不变）', 'F 成正比增大', '处在磁场中的导线越长，力越大'], ['导线与磁场平行', 'F = 0', '此时不受安培力']] },
      { type: 'heading', text: '三、用左手定则判断安培力的方向' },
      { type: 'paragraph', text: '安培力不仅有力的大小，还有明确的方向。方向怎么定？物理学家总结了一个特别好用的"左手定则"。伸出左手，让磁感线垂直穿进手心，四指指向电流的方向，这时大拇指所指的方向，就是安培力的方向。注意是"左手"，别用成右手了。' },
      { type: 'keypoint', label: '重点·左手定则（判断安培力方向）', text: '<strong>伸开左手，使磁感线垂直穿入手心，四指指向电流方向，则大拇指所指的方向就是安培力方向。</strong>安培力的方向既垂直于电流，也垂直于磁场，三者两两垂直。' },
      { type: 'list', items: ['第一步：伸开左手，让磁感线垂直穿过手心（手心对着磁场来的方向）', '第二步：四指并拢，指向导线中电流的方向', '第三步：大拇指自然伸直，它所指的方向就是安培力 F 的方向'] },
      { type: 'warn', label: '易错', text: '<strong>左手定则和右手定则容易搞混。</strong>判断"因电而生磁"（电流产生磁场）用右手螺旋定则；而判断"通电导线在磁场中受力方向"必须用左手定则。简单记：求力用左手，求磁（感线方向）用右手。' },
      { type: 'tip', label: '提示', text: '<strong>安培力方向一定同时垂直于电流和磁场。</strong>如果题目里给你画了磁场方向（用 × 表示向纸里、用 · 表示向纸外）和电流方向，你用左手定则一比划，大拇指自然就指出了力的方向，不用死记硬背。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">磁场向纸里（×）、电流向右，安培力向上</text><g fill="#234b45" font-size="20" text-anchor="middle"><text x="90" y="120">×</text><text x="140" y="120">×</text><text x="190" y="120">×</text><text x="90" y="170">×</text><text x="140" y="170">×</text><text x="190" y="170">×</text><text x="90" y="220">×</text><text x="140" y="220">×</text><text x="190" y="220">×</text></g><line x1="120" y1="245" x2="560" y2="245" stroke="#234b45" stroke-width="5"/><polygon points="575,245 553,235 553,255" fill="#234b45"/><text x="345" y="272" font-size="14" fill="#234b45" text-anchor="middle">导线中的电流 I（向右）</text><line x1="340" y1="245" x2="340" y2="80" stroke="#2e9e8f" stroke-width="5"/><polygon points="340,66 329,86 351,86" fill="#2e9e8f"/><text x="360" y="120" font-size="14" fill="#2e9e8f" text-anchor="middle">安培力 F（向上）</text><text x="300" y="300" font-size="13" fill="#234b45" text-anchor="middle">磁场 B（× 表示垂直纸面向里）</text></svg>', caption: '图1　磁场垂直纸面向里、电流水平向右时，用左手定则可判断安培力竖直向上。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">左手定则三步比划法</text><rect x="60" y="70" width="250" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">① 磁感线穿手心</text><path d="M 110 200 q 30 -50 75 -50" fill="none" stroke="#234b45" stroke-width="3"/><text x="185" y="250" font-size="12" fill="#234b45" text-anchor="middle">手心对着磁场方向</text><rect x="340" y="70" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="480" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">② 四指指电流</text><text x="480" y="130" font-size="13" fill="#234b45" text-anchor="middle">③ 大拇指指安培力 F</text><line x1="430" y1="200" x2="530" y2="200" stroke="#234b45" stroke-width="4"/><polygon points="542,200 522,191 522,209" fill="#234b45"/><line x1="480" y1="200" x2="480" y2="150" stroke="#2e9e8f" stroke-width="4"/><polygon points="480,140 471,158 489,158" fill="#2e9e8f"/><text x="480" y="258" font-size="12" fill="#234b45" text-anchor="middle">四指=电流，拇指=安培力</text></svg>', caption: '图2　左手定则：磁感线穿手心、四指指电流、拇指指安培力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">安培力随 B、I、L 成正比增大</text><rect x="70" y="80" width="120" height="170" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="130" y="180" font-size="13" fill="#234b45" text-anchor="middle">B 小</text><rect x="250" y="80" width="160" height="170" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="330" y="180" font-size="13" fill="#234b45" text-anchor="middle">B 中</text><rect x="470" y="80" width="120" height="170" fill="#2e9e8f" stroke="#2e9e8f" stroke-width="2"/><text x="530" y="180" font-size="13" fill="#e6f4f1" text-anchor="middle">B 大</text><line x1="70" y1="270" x2="610" y2="270" stroke="#234b45" stroke-width="2"/><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">磁感应强度 B 越大，安培力 F 越大（I、L 不变）</text></svg>', caption: '图3　在电流 I 和导线长度 L 不变时，磁感应强度 B 越大，安培力 F 越大，二者成正比。' }
    ],
    exercises: [
      { type: 'choice', question: '当通电直导线与磁场方向垂直时，安培力大小的公式是？', options: ['F = B × I × L（导线垂直磁场时）', 'F = B + I + L', 'F = B × I / L', 'F = B / (I × L)'], answer: 'F = B × I × L（导线垂直磁场时）', explanation: '当通电直导线与磁场方向垂直时，安培力大小等于磁感应强度 B、电流 I、处在磁场中的导线长度 L 三者的乘积，即 F = B × I × L。另外三个选项在物理上都没有意义，既不符合安培力的定义，量纲也不对。' },
      { type: 'choice', question: '用左手定则判断安培力方向时，大拇指指向的是？', options: ['磁感应强度方向', '电流方向', '安培力方向', '电场方向'], answer: '安培力方向', explanation: '左手定则的规则是：伸开左手，让磁感线垂直穿入手心，四指指向电流方向，这时大拇指所指的方向就是安培力方向。四指对应电流，大拇指对应安培力，千万不要记反。电场方向与这里讨论的磁场受力无关。' },
      { type: 'choice', question: '关于安培力，下列说法正确的是？', options: ['安培力方向一定与电流和磁场都垂直', '电流与磁场平行时安培力最大', '安培力大小与导线长度无关', '没有电流时磁场也会产生安培力'], answer: '安培力方向一定与电流和磁场都垂直', explanation: '安培力的方向由左手定则决定，它同时垂直于电流方向和磁场方向，三者两两垂直，所以第一项正确。当电流与磁场平行时安培力为零，不是最大；安培力大小 F = B × I × L 与导线长度 L 有关；安培力是磁场对电流的作用力，没有电流就不会有安培力。' },
      { type: 'fill', question: '当通电导线与磁场方向相互___时，导线受到的安培力最大；若二者平行，则安培力为___。', answer: '垂直|0', explanation: '安培力大小与导线和磁场的夹角有关。当导线垂直于磁场时，作用在导线上的有效长度最大，安培力达到最大，公式为 F = B × I × L；当导线与磁场平行时，没有垂直于磁场的分量，安培力为零。所以第一空填"垂直"，第二空填"0"。' },
      { type: 'fill', question: '在公式 F = B × I × L 中，磁感应强度 B 的国际单位是___（符号 T）。', answer: '特斯拉', explanation: '磁感应强度 B 的国际单位是特斯拉，符号是 T。使用安培力公式 F = B × I × L 时，必须保证 B 用特斯拉、I 用安培、L 用米，这样算出来的力 F 才是牛顿。单位不统一会导致结果错误。' }
    ]
  });
})();
