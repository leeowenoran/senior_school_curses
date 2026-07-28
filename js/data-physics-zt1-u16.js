/* ============================================================
 * 高三复习 · 力学综合 · 专题四 曲线运动与万有引力
 * 课时16：运动的合成与分解
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u16',
    name: '运动的合成与分解',
    chapter: '力学综合 · 专题四 曲线运动与万有引力',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、运动的合成与分解的"三性"' },
      { type: 'paragraph', text: '一个复杂的曲线运动，常常可以看成几个简单直线运动"叠加"起来的结果。比如飞机斜着向远方飞，可以看成"向前飞"加上"向上爬升"两个运动合在一起；反过来，斜飞这个复杂运动，也能拆成向前、向上两个简单运动分别研究。这种"把复杂运动拆开、或把简单运动合起来"的办法，就叫运动的合成与分解。它建立在三条基本性质上。' },
      { type: 'keypoint', label: '重点·三性', text: '<strong>等时性：</strong>分运动与合运动经历的时间相同。<br><strong>独立性：</strong>各分运动互不影响，各自按自己的规律进行。<br><strong>等效性：</strong>分运动叠加的效果，与合运动的效果完全相同。' },
      { type: 'list', items: ['等时性：渡河时船横向走和纵向走同时开始同时结束，总时间一样', '独立性：水平方向怎么动，不影响竖直方向怎么动（如平抛中两方向独立）', '等效性：几个分运动加起来的效果，等于一个合运动，可以互相替代'] },
      { type: 'tip', label: '提示', text: '平行四边形法则是合成与分解的"万能工具"：把两个分速度作邻边画平行四边形，对角线就是合速度；反过来，把合速度沿两个方向分解，就得到两个分速度。实质就是矢量的加减法。' },
      { type: 'heading', text: '二、小船过河问题' },
      { type: 'paragraph', text: '小船在流动的河水里过河，是运动的合成与分解最经典的例子。河岸之间宽度固定为 d，水流速度为 v水（沿河岸方向），船在静水中的速度为 v船。船的实际运动是"船自身划行"与"河水带着走"两个分运动的合运动。' },
      { type: 'keypoint', label: '重点·最短时间', text: '要使过河时间最短，应让<strong>船头垂直河岸</strong>（船自身速度全部用于过河），此时最短时间 <strong>t = d / v船</strong>，与水流快慢无关。' },
      { type: 'paragraph', text: '很多人误以为水流越快过河越慢，其实水流只把船往下游冲，并不影响过河那一段的快慢。让船头垂直河岸，船自身的速度全都花在"跨过河宽"上，自然最快。最短位移则要看 v船 和 v水 谁大。' },
      { type: 'list', items: ['最短时间：船头垂直河岸，t = d / v船，此时位移不是最短（被水冲向下游）', '最短位移（当 v船 > v水）：调节船头偏向上游，使合速度垂直河岸，位移等于河宽 d', '最短位移（当 v船 ≤ v水）：无法垂直过河，最短位移大于 d，需让合速度方向与河岸夹角最大'] },
      { type: 'example', label: '例题·最短时间过河', text: '河宽 d = 100 m，水流 v水 = 3 m/s，船在静水中 v船 = 4 m/s。<br>问：过河最短时间是多少？此时被冲向下游多远？<br><br><strong>解析</strong>：<br>最短时间让船头垂直河岸：t = d / v船 = 100 / 4 = 25 s。这段时间水流把船向下游冲了 x = v水 × t = 3 × 25 = 75 m。所以最短时间 25 秒，被冲下 75 米。' },
      { type: 'warn', label: '易错', text: '不要把"最短时间"和"最短位移"搞混。<strong>最短时间要求船头垂直河岸，此时过河位移不是最短；最短位移要求合速度垂直河岸（需 v船 > v水），此时时间不是最短。</strong>两者目标不同，调节方式也不同。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">小船过河·最短时间（船头垂直河岸）</text><line x1="60" y1="80" x2="620" y2="80" stroke="#2e9e8f" stroke-width="2"/><line x1="60" y1="260" x2="620" y2="260" stroke="#2e9e8f" stroke-width="2"/><text x="80" y="74" font-size="12" fill="#234b45">上游岸</text><text x="80" y="282" font-size="12" fill="#234b45">下游岸（d 河宽）</text><circle cx="120" cy="260" r="8" fill="#234b45"/><line x1="120" y1="260" x2="120" y2="120" stroke="#234b45" stroke-width="3"/><polygon points="120,120 113,134 127,134" fill="#234b45"/><text x="130" y="175" font-size="13" fill="#234b45">v船 垂直河岸</text><line x1="120" y1="120" x2="240" y2="120" stroke="#4fb3a5" stroke-width="3"/><polygon points="240,120 226,113 226,127" fill="#4fb3a5"/><text x="250" y="124" font-size="13" fill="#234b45">v水 沿河</text><line x1="120" y1="260" x2="250" y2="120" stroke="#2e9e8f" stroke-width="3" stroke-dasharray="6,4"/><text x="300" y="180" font-size="13" fill="#234b45">v合</text><text x="320" y="300" font-size="13" fill="#234b45">船头垂直河岸 → 全部速度用于过河 → 时间最短 t=d/v船</text></svg>', caption: '图1　船头垂直河岸时，船自身速度全部用于跨过河宽，过河时间最短 t = d / v船。' },
      { type: 'heading', text: '三、关联速度（绳、杆连接的两个物体）' },
      { type: 'paragraph', text: '用绳子或杆连接的两个物体，一个动会带动另一个动。比如站在岸边拉绳子，水里的船就被拉过来；或者两个物体用杆连着绕某点转。这类问题的关键不是"两个物体速度相等"，而是：<strong>沿绳子（或杆）方向的速度分量相等</strong>。因为绳、杆不可伸长，它们两端沿自身方向"伸缩"的快慢必须一样，否则绳就断了或松了。' },
      { type: 'keypoint', label: '重点·关联速度', text: '绳（或杆）连接的两个物体，<strong>沿绳（或杆）方向的速度分量大小相等</strong>。把各自速度分解到沿绳/杆方向，令该分量相等即可列式。垂直绳/杆的分量可以不同（它让绳转动）。' },
      { type: 'example', label: '例题·绳拉船', text: '人用绳以速度 v₀ 向左拉船，某时刻绳与水平夹角 θ。求船的速度 v。<br><br><strong>解析</strong>：<br>船的实际速度是水平的 v。把它分解：沿绳方向的分量是 v × cosθ，垂直绳方向的分量是 v × sinθ。人拉绳的速度 v₀ 就是绳缩短的速度，等于沿绳分量，故 v × cosθ = v₀，得 v = v₀ / cosθ。船速比人拉绳的速度还快。' },
      { type: 'warn', label: '易错', text: '最常见的错是以为"船速等于人拉绳的速度"。<strong>两者并不相等，相等的是"沿绳方向的速度分量"。</strong>必须做速度分解、取沿绳分量列方程，直接令两速度相等会得出错误结论。' },
      { type: 'table', headers: ['问题类型', '相等量', '常见误区'], rows: [['小船过河', '两分运动时间相同（等时性）', '以为水流越快过河越慢'], ['绳连接两物体', '沿绳方向速度分量相等', '以为两端速度大小相等'], ['杆连接两物体', '沿杆方向速度分量相等', '忽略杆可推可拉']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">绳拉船：船速 v 沿绳的分量 = 拉绳速度 v₀</text><rect x="60" y="120" width="160" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="140" y="160" font-size="13" fill="#234b45" text-anchor="middle">船（水面）</text><circle cx="440" cy="90" r="7" fill="#234b45"/><line x1="220" y1="155" x2="440" y2="90" stroke="#234b45" stroke-width="3"/><text x="320" y="110" font-size="13" fill="#234b45">绳，夹角 θ</text><line x1="220" y1="155" x2="360" y2="155" stroke="#4fb3a5" stroke-width="3"/><polygon points="360,155 346,148 346,162" fill="#4fb3a5"/><text x="300" y="180" font-size="13" fill="#234b45">v 船（水平）</text><text x="250" y="140" font-size="12" fill="#234b45">v·cosθ</text><line x1="440" y1="90" x2="520" y2="60" stroke="#234b45" stroke-width="3"/><polygon points="520,60 506,62 512,73" fill="#234b45"/><text x="528" y="66" font-size="13" fill="#234b45">v₀ 拉绳</text><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">沿绳分量相等：v × cosθ = v₀ ，所以 v = v₀ / cosθ</text></svg>', caption: '图2　绳拉船时，船的水平速度 v 沿绳方向的分量等于人拉绳的速度 v₀，即 v·cosθ = v₀。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">最短位移过河（v船 > v水 时合速度垂直河岸）</text><line x1="60" y1="90" x2="620" y2="90" stroke="#2e9e8f" stroke-width="2"/><line x1="60" y1="250" x2="620" y2="250" stroke="#2e9e8f" stroke-width="2"/><circle cx="120" cy="250" r="8" fill="#234b45"/><line x1="120" y1="250" x2="180" y2="150" stroke="#234b45" stroke-width="3"/><polygon points="180,150 167,159 178,168" fill="#234b45"/><text x="150" y="200" font-size="12" fill="#234b45">v船偏上</text><line x1="180" y1="150" x2="250" y2="150" stroke="#4fb3a5" stroke-width="3"/><polygon points="250,150 236,143 236,157" fill="#4fb3a5"/><text x="258" y="154" font-size="12" fill="#234b45">v水</text><line x1="120" y1="250" x2="120" y2="90" stroke="#2e9e8f" stroke-width="3" stroke-dasharray="6,4"/><text x="130" y="170" font-size="12" fill="#234b45">v合 垂直</text><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">船头偏向上游使合速度垂直河岸，位移最短等于河宽 d</text></svg>', caption: '图3　当船速大于水速，把船头偏向上游使合速度垂直河岸，过河位移最短，恰等于河宽 d。' }
    ],
    exercises: [
      { type: 'choice', question: '关于运动的合成与分解，下列说法错误的是？', options: ['分运动与合运动具有等时性', '各分运动相互独立、互不影响', '分运动叠加的效果与合运动等效', '合运动一定比任一分运动更快'], answer: '合运动一定比任一分运动更快', explanation: '运动的合成与分解满足等时性（同时发生）、独立性（互不影响）、等效性（叠加效果相同）三性。但合运动的速度大小不一定大于分运动，例如两个等大的分速度互成 120 度时，合速度反而等于分速度大小。所以"合运动一定更快"是错误的。' },
      { type: 'choice', question: '小船在流动河水中过河，要使过河时间最短，应当？', options: ['船头垂直河岸', '船头始终指向对岸正中点', '船头偏向上游', '船速越大越慢'], answer: '船头垂直河岸', explanation: '过河时间取决于垂直河岸方向的分速度。让船头垂直河岸时，船在静水中的速度全部用于跨过河宽，垂直分量最大，时间 t = d / v船 最短。船头偏向上游是为了让合速度垂直河岸以取得最短位移，不是最短时间。时间只与 v船 和河宽有关，与水流快慢无关。' },
      { type: 'choice', question: '用不可伸长的绳拉船，船速 v 与拉绳速度 v₀ 的关系是？', options: ['v = v₀', 'v 沿绳的分量等于 v₀', 'v₀ 沿船方向的分量等于 v', '两者毫无关系'], answer: 'v 沿绳的分量等于 v₀', explanation: '绳不可伸长，两端沿绳方向"伸缩"的快慢必须相同，因此相等的是沿绳方向的速度分量，而不是速度大小本身。把船速 v 分解到沿绳方向得 v·cosθ，它等于拉绳速度 v₀，即 v·cosθ = v₀，故 v = v₀ / cosθ。直接令 v = v₀ 是常见错误。' },
      { type: 'fill', question: '河宽为 d，船在静水中的速度为 v船。小船过河的最短时间 t = ___。', answer: 'd / v船', explanation: '最短时间对应船头垂直河岸，此时船的全部速度都用于跨过河宽 d，垂直方向速度就是 v船，所以最短时间 t = d / v船。这个时间与水速无关，因为水流只把船向下游冲，不影响过河方向的快慢。' },
      { type: 'fill', question: '绳（或杆）连接的两个物体，沿绳（或杆）方向的___大小相等。', answer: '速度分量', explanation: '由于绳或杆不可伸长，两端沿绳/杆方向靠近或远离的快慢必须一致，因此沿绳（杆）方向的速度分量大小相等。垂直绳/杆方向的分量可以不同，那部分只让绳转动。列关联速度方程时，要把各自速度分解、取沿绳/杆的分量令其相等。' }
    ]
  });
})();
