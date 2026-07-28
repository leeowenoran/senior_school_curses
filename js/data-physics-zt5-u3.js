/* ============================================================
 * 高三复习 · 计算压轴 · 专题一 力学计算
 * 课时3：牛顿第二定律与连接体、临界问题计算
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u3',
    name: '牛顿第二定律与连接体、临界问题计算',
    chapter: '计算压轴 · 专题一 力学计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、牛顿第二定律：力决定加速度' },
      { type: 'paragraph', text: '牛顿第二定律是动力学的核心：物体受到的合外力等于质量乘加速度，即 F合 = m×a。它把"受力"和"运动"连了起来——知道了合力就能算出加速度，知道了加速度就能预测速度、位移怎么变。' },
      { type: 'keypoint', label: '重点·F合 = m×a', text: '<strong>F合 = m×a，且 a 的方向与 F合 方向一致。</strong>这是矢量式：要先把各力分解到坐标轴上，F_x = m×a_x、F_y = m×a_y 分别成立。加速度由合外力和质量共同决定，与速度无关。' },
      { type: 'list', items: ['先受力分析，求出合外力（或某方向合力）', '建立坐标系，通常让 x 轴沿加速度方向', '列 F_x = m×a、F_y = m×a_y（加速度为0则合力为0）', '注意 a 与 F合 同步产生、同方向，有合力才有加速度'] },
      { type: 'paragraph', text: '一个关键认识：加速度由"现在的合力"决定，不依赖过去的速度。比如急刹车时合力向后，加速度就向后（减速），与车正在向前开并不矛盾。' },
      { type: 'heading', text: '二、超重与失重' },
      { type: 'paragraph', text: '人站在加速上升或下降的电梯里，会感觉"变重"或"变轻"，这叫超重和失重。本质不是重力变了，而是"支持力（或对悬挂物的拉力）"变了。用牛顿第二定律看很清晰。' },
      { type: 'keypoint', label: '重点·超重失重判据', text: '<strong>加速度向上 → 超重，支持力 N > G；加速度向下 → 失重，N < G。</strong>完全失重是 a = g 且向下，此时 N = 0。判断只看过重加速度方向，与速度方向无关：向上加速和向下减速都向上超重。' },
      { type: 'example', label: '例题·电梯超重', text: '质量 60 kg 的人站在上升的电梯里，电梯以 2 m/s² 加速上升，求电梯地板对人的支持力。（g=10）<br><br><strong>解析</strong>：取向上为正。人受重力 G=60×10=600 N 向下，支持力 N 向上。加速度向上 a=2，由 N − G = m×a 得 N = G + m×a = 600 + 60×2 = 720 N。支持力大于重力，是超重。由牛顿第三定律，人对地板压力也是 720 N。' },
      { type: 'list', items: ['向上加速、向下减速 → 加速度向上 → 超重', '向下加速、向上减速 → 加速度向下 → 失重', '完全失重：a = g 向下，支持力为0（如自由落体）', '失重时重力依然存在，只是"视重"变小'] },
      { type: 'tip', label: '提示·只看加速度', text: '<strong>判断超重失重，千万别看速度方向，只看加速度方向。</strong>"向上运动"可能是减速（加速度向下、失重），"向下运动"也可能是加速（加速度向下、失重）或减速（加速度向上、超重）。速度向上不一定超重。' },
      { type: 'heading', text: '三、连接体问题' },
      { type: 'paragraph', text: '两个或多个物体靠绳、杆或接触连在一起运动，叫连接体。它们常有相同的加速度（绳杆不可伸长时）。解题思路和上一课的"整体法、隔离法"完全一样：求整体加速度用整体法，求连接处内力用隔离法。' },
      { type: 'keypoint', label: '重点·连接体套路', text: '<strong>先整体求加速度，再隔离求内力。</strong>整体法：把连接体当作一个整体，受的外力之和 = 总质量 × 共同加速度 a。隔离法：单独隔离一个物体，它受的合外力 = 该物体质量 × a，从而解出绳张力或相互压力。' },
      { type: 'example', label: '例题·连接体', text: '用轻绳拉质量 m₁=4 kg、m₂=2 kg 两物块一起在光滑水平面加速，水平拉力 F=12 N 作用在 m₁ 上。求共同加速度和绳张力。<br><br><strong>解析</strong>：整体法，总质量 6 kg，a = F/(m₁+m₂) = 12/6 = 2 m/s²。隔离 m₂：m₂ 只受绳张力 T 向右，T = m₂×a = 2×2 = 4 N。故共同加速度 2 m/s²，绳张力 4 N。' },
      { type: 'list', items: ['确认连接体是否有共同加速度（绳杆不可伸长通常相同）', '整体法列：F外 = 总质量 × a，求出 a', '隔离其中一个物体，列 F内 = 该质量 × a，求内力', '注意谁受外力、内力作用在哪一侧'] },
      { type: 'tip', label: '提示·选隔离对象', text: '<strong>求绳张力时隔离"远端"那个物体最省事。</strong>如上例中隔离 m₂ 只需一个未知数 T；若隔离 m₁ 则要同时处理 F 和 T 两个力，方程更复杂。优先挑受力少的。' },
      { type: 'heading', text: '四、临界问题' },
      { type: 'paragraph', text: '临界问题问"刚好……"的时刻，比如刚好脱离、刚好不滑动、绳子刚好拉直。这类题的特征是：在临界状态下某个力恰好为零（如支持力 N=0、静摩擦力达到最大值 f_max = μ×N），或者某个接触刚好要分离。' },
      { type: 'keypoint', label: '重点·临界标志', text: '<strong>临界状态常用"刚好"描述：刚好分离时支持力 N = 0；刚好滑动时静摩擦力 f = μ×N（达最大）；绳子刚拉直时张力从0突变。</strong>把临界条件写成等式，再结合 F合 = m×a 联立，就能求出临界加速度或临界外力。' },
      { type: 'example', label: '例题·临界加速度', text: '质量 m 的小球用细线系在车上，车向右加速，线与竖直方向夹角为 θ 时小球相对车静止。求车的加速度 a。<br><br><strong>解析</strong>：小球受重力 mg 向下、绳张力 T 沿绳。水平方向 T×sinθ = m×a，竖直方向 T×cosθ = mg。两式相除得 tanθ = a/g，故 a = g×tanθ。θ 越大说明所需加速度越大，这就是"刚好"保持该角度的临界条件体现。' },
      { type: 'table', headers: ['临界情形', '临界条件', '物理含义'], rows: [['物体刚要离开支持面', '支持力 N = 0', '不再接触'], ['物体刚要滑动', '静摩擦 f = μ×N', '达最大静摩擦'], ['绳刚拉直瞬间', '张力由0开始有值', '此前绳松弛'], ['刚好不飞离圆弧顶', '顶部支持力 N = 0', '仅靠重力提供向心']] },
      { type: 'warn', label: '易错·静摩擦上限', text: '<strong>静摩擦力不是恒定等于 μ×N，而是"小于等于 μ×N 的待求量"。</strong>只有"刚好要滑动"那一刻才取 f = μ×N。很多同学一上来就写 f = μ×N，会算错未达临界时的真实静摩擦，应先用平衡或 F合 = m×a 求出实际 f。' },
      { type: 'paragraph', text: '牛顿第二定律是连接"受力"和"运动"的桥梁。解题固定四步：受力分析 → 建系 → 列 F合 = m×a → 求解。连接体先整体后隔离；超重失重看加速度方向；临界问题抓住"刚好"时某个力取零或取最大值这一转折点。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">超重失重：取决于加速度方向而非速度方向</text><rect x="300" y="120" width="80" height="60" rx="6" fill="#4fb3a5"/><text x="340" y="158" font-size="13" fill="#234b45" text-anchor="middle">人</text><line x1="340" y1="120" x2="340" y2="70" stroke="#234b45" stroke-width="3"/><text x="352" y="68" font-size="13" fill="#234b45" text-anchor="middle">N支持力</text><line x1="340" y1="180" x2="340" y2="240" stroke="#234b45" stroke-width="3"/><text x="352" y="260" font-size="13" fill="#234b45" text-anchor="middle">G重力</text><text x="180" y="100" font-size="13" fill="#4fb3a5" text-anchor="middle">a向上→超重</text><text x="500" y="100" font-size="13" fill="#4fb3a5" text-anchor="middle">a向下→失重</text></svg>', caption: '图1　电梯中人对地板的压力（支持力 N）随加速度方向变化，向上超重、向下失重。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">连接体：先整体求加速度，再隔离求绳张力</text><rect x="160" y="150" width="70" height="50" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="195" y="180" font-size="13" fill="#234b45" text-anchor="middle">m1</text><rect x="290" y="150" width="70" height="50" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="325" y="180" font-size="13" fill="#234b45" text-anchor="middle">m2</text><line x1="80" y1="175" x2="160" y2="175" stroke="#234b45" stroke-width="3"/><text x="95" y="165" font-size="13" fill="#234b45" text-anchor="middle">F</text><line x1="230" y1="175" x2="290" y2="175" stroke="#4fb3a5" stroke-width="3"/><text x="260" y="165" font-size="13" fill="#4fb3a5" text-anchor="middle">T</text><text x="500" y="160" font-size="13" fill="#234b45" text-anchor="middle">整体: a=F/(m1+m2)</text><text x="500" y="195" font-size="13" fill="#234b45" text-anchor="middle">隔离m2: T=m2×a</text></svg>', caption: '图2　两物块用绳相连，整体求共同加速度，隔离 m₂ 求绳张力 T。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">临界：小球随车加速，线与竖直成 θ 角</text><circle cx="340" cy="200" r="14" fill="#234b45"/><line x1="340" y1="200" x2="260" y2="90" stroke="#4fb3a5" stroke-width="3"/><line x1="260" y1="90" x2="260" y2="200" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><line x1="340" y1="200" x2="340" y2="280" stroke="#234b45" stroke-width="3"/><text x="270" y="150" font-size="13" fill="#234b45" text-anchor="middle">θ</text><text x="352" y="290" font-size="13" fill="#234b45" text-anchor="middle">mg</text><text x="430" y="140" font-size="13" fill="#4fb3a5" text-anchor="middle">T张力</text><text x="430" y="180" font-size="13" fill="#4fb3a5" text-anchor="middle">a=g×tanθ</text></svg>', caption: '图3　小球与车相对静止时，水平方向合力提供加速度，a = g×tanθ。' }
    ],
    exercises: [
      { type: 'choice', question: '关于超重和失重，下列说法正确的是？', options: ['物体向上运动就是超重', '加速度向下时物体处于失重', '失重时重力变小了', '超重时物体加速度一定向下'], answer: '加速度向下时物体处于失重', explanation: '超重失重只看加速度方向：加速度向上为超重，加速度向下为失重，与速度方向无关。向上运动可能是减速（加速度向下、失重），所以"向上运动就是超重"错。失重时重力不变，只是支持力小于重力。超重时加速度向上而非向下。故只有"加速度向下时失重"正确。' },
      { type: 'choice', question: '质量 m₁=3 kg、m₂=1 kg 两物块用轻绳相连，在光滑水平面受 F=8 N 拉 m₁ 向右，共同加速度为？', options: ['8 m/s²', '2 m/s²', '4 m/s²', '6 m/s²'], answer: '2 m/s²', explanation: '整体法中两物块有共同加速度，总质量 m₁+m₂ = 4 kg。由 F = (m₁+m₂)×a，得 a = F/(m₁+m₂) = 8/4 = 2 m/s²。注意要用总质量去除外力，不能只除以某个物体质量。' },
      { type: 'choice', question: '连接体求绳张力时，一般先采用什么步骤？', options: ['先隔离求张力再整体', '先整体求加速度，再隔离求张力', '直接列单个物体方程', '无法求'], answer: '先整体求加速度，再隔离求张力', explanation: '连接体标准套路：先用整体法把连接体当整体，由外力之和求出共同加速度 a；再隔离其中一个物体（优先受力少的），由它受的合外力 = 该物体质量 × a，列出含张力的方程解出张力。先整体后隔离最清晰。' },
      { type: 'fill', question: '质量 50 kg 的人站在以 3 m/s² 向下加速的电梯里，电梯地板对人的支持力为___N。（g 取 10 m/s²）', answer: '350', explanation: '取向下为正。人受重力 G = 50×10 = 500 N 向下，支持力 N 向上（为负）。加速度向下 a = 3，由 G − N = m×a，得 N = G − m×a = 500 − 50×3 = 350 N。支持力小于重力，属于失重状态。' },
      { type: 'fill', question: '小球用细线系在向右加速的车上，线与竖直方向夹角为 θ 时相对车静止，车的加速度 a = ___（用 g 和 θ 表示）。', answer: 'g×tanθ', explanation: '小球受重力 mg 向下、绳张力 T 沿绳。水平方向 T×sinθ = m×a，竖直方向 T×cosθ = mg。两式相除得 tanθ = a/g，所以 a = g×tanθ。θ 越大，说明车需要的加速度越大，这是该临界状态的关系式。' }
    ]
  });
})();
