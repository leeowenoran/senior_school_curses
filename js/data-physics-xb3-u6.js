/* ============================================================
 * 高二物理 · 选择性必修 第三册 · 第二章 气体、固体和液体
 * 课时6：理想气体状态方程
 * 数据注入：physics.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u6',
    name: '理想气体状态方程',
    chapter: '选择性必修 第三册 · 第二章 气体、固体和液体',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、从三条实验定律到"统一公式"' },
      { type: 'paragraph', text: '上节课学了玻意耳、查理、盖吕萨克三条定律，每一条都要求"某个量保持不变"。可真实情况里，气体的压强、体积、温度常常一起变。能不能用一个公式同时管住三个量？可以。把三条定律合起来，就得到理想气体的状态方程。' },
      { type: 'keypoint', label: '重点·理想气体状态方程', text: '<strong>一定质量的理想气体，压强 p、体积 V、热力学温度 T 满足：p × V / T = C（C 是一个只由气体质量决定的常量）。</strong>对同一个气体的两个状态，可写成 p₁ × V₁ / T₁ = p₂ × V₂ / T₂。这个公式把三条实验定律统一在一起了。' },
      { type: 'paragraph', text: '怎么理解这个 C？对某一固定质量的气体，不管它的 p、V、T 怎么变，只要把"p×V/T"算出来，结果总是一个固定的数。质量越大，这个数越大。所以只要知道一个状态的 p₁、V₁、T₁，再知道变化后其中两个量，就能求出第三个量。' },
      { type: 'example', label: '例题·用状态方程', text: '一个瓶子里封着一定质量的气体，初始压强 p₁ = 1.0 标准大气压，体积 V₁ = 4.0 升，温度 T₁ = 300 K。后来温度升到 T₂ = 450 K，体积膨胀到 V₂ = 6.0 升，求此时压强 p₂。<br><br><strong>解析</strong>：<br>由 p₁ × V₁ / T₁ = p₂ × V₂ / T₂，得<br>p₂ = p₁ × V₁ × T₂ / (T₁ × V₂) = 1.0 × 4.0 × 450 / (300 × 6.0) = 1800 / 1800 = <strong>1.0 标准大气压</strong>。' },
      { type: 'warn', label: '易错', text: '<strong>状态方程里的 T 必须用热力学温度 K，不能用 ℃；而且公式只对"一定质量"的气体成立。</strong>常见错误：①直接代入摄氏温度；②气体漏气了还硬套（质量变了，C 也变了）；③把 C 当成对所有气体都相同——其实 C 和气体质量有关。' },
      { type: 'list', items: ['前提：一定质量的气体（质量不变）', '核心公式：p × V / T = C，其中 T 用 K', '两状态形式：p₁ × V₁ / T₁ = p₂ × V₂ / T₂', '已知任意五个量，就能求出第六个量'] },
      { type: 'heading', text: '二、什么是"理想气体"模型' },
      { type: 'paragraph', text: '真实气体分子之间是有吸引力的，分子本身也占着一点体积。但在压强不太大、温度不太低的时候，这些影响很小，可以忽略。科学家就把气体"理想化"：假设分子之间完全没有作用力，分子本身小到可以忽略不计。这样的气体叫理想气体。' },
      { type: 'keypoint', label: '重点·理想气体模型', text: '<strong>理想气体是一种理想化模型：分子之间除碰撞外没有相互作用力，分子本身的大小可以忽略不计。</strong>理想气体严格遵守 p×V/T = C。真实气体在常温常压下都很接近理想气体，所以这个方程很好用。' },
      { type: 'paragraph', text: '为什么要有模型？真实气体太复杂，分子数不清、还在乱动。把"分子间作用力"和"分子大小"暂时丢掉，问题就变得能算。等到需要很高精度时，再把这些因素一点点加回来。这是物理学里常用的"先简化、后修正"思路。' },
      { type: 'tip', label: '提示', text: '<strong>做题时若题目说"理想气体"或"视为理想气体"，就放心用 p×V/T = C。</strong>如果题目没说但实际是常温常压下的空气、氧气等常见气体，通常也可近似当作理想气体处理。' },
      { type: 'list', items: ['理想气体分子间除碰撞外无作用力', '理想气体分子本身大小可忽略', '理想气体严格遵守 p×V/T = C', '真实气体在常温常压下可近似看成理想气体'] },
      { type: 'heading', text: '三、三种图像的特点' },
      { type: 'paragraph', text: '把 p、V、T 中的两个量画成图，能更直观地看清关系。状态方程 p×V/T = C 变形后，可以得到三种常见图像，它们各自对应"第三个量不变"的情况。' },
      { type: 'keypoint', label: '重点·图像对应关系', text: '<strong>p-V 图：等温线是向下弯的双曲线（温度越高，曲线越靠外）。</strong><br><strong>p-T 图：等容线是从原点出发的倾斜直线（体积越大，斜率越小）。</strong><br><strong>V-T 图：等压线也是从原点出发的倾斜直线（压强越大，斜率越小）。</strong>' },
      { type: 'table', headers: ['图像', '第三个量不变', '曲线形状', '直观含义'], rows: [['p-V 图', '温度 T 不变（等温）', '向下弯的双曲线', '等温压缩，压强急剧上升'], ['p-T 图', '体积 V 不变（等容）', '过原点的直线', '体积固定，压强随温度正比上升'], ['V-T 图', '压强 p 不变（等压）', '过原点的直线', '压强固定，体积随温度正比增大']] },
      { type: 'warn', label: '易错', text: '<strong>看图像先看清"哪条线代表哪个量不变"。</strong>很多题会画两条等温线问"哪条温度更高"，这时要记住：p-V 图上温度越高的等温线位置越靠外（同样体积下压强更大）。另外 p-T、V-T 图的直线都过原点，因为温度用 K，0 K 时压强、体积都为 0。' },
      { type: 'example', label: '例题·读图判断', text: '在 p-V 图上画出同一气体的两条等温线 a、b，其中 a 在 b 的外侧（同样体积下 a 的压强更大）。问哪条对应的温度更高？<br><br><strong>解析</strong>：<br>由 p×V/T = C 可知，在 p-V 图上同一点 p×V 越大，对应温度 T 越高。a 线在 b 外侧，说明相同体积时 a 的 p 更大，即 a 的 p×V 更大，所以 <strong>a 对应的温度更高</strong>。' },
      { type: 'tip', label: '提示', text: '<strong>考试常给 p-T、V-T 图让你判断"斜率变化意味着什么"。</strong>记住：p-T 图的斜率是 V/C（体积越大斜率越小），V-T 图的斜率是 p/C（压强越大斜率越小）。把 p×V/T=C 改写成对应形式，斜率含义一眼就看出来。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">p-V 图：等温线是向下弯的双曲线，温度越高越靠外</text><line x1="90" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="250" x2="90" y2="50" stroke="#234b45" stroke-width="2"/><polygon points="620,250 608,244 608,256" fill="#234b45"/><polygon points="90,50 84,62 96,62" fill="#234b45"/><text x="610" y="270" font-size="13" fill="#234b45">体积 V</text><text x="70" y="46" font-size="13" fill="#234b45">压强 p</text><polyline points="150,70 230,140 330,185 430,210 530,228" fill="none" stroke="#2e9e8f" stroke-width="3"/><polyline points="180,120 260,178 360,208 460,226 540,238" fill="none" stroke="#4fb3a5" stroke-width="3" stroke-dasharray="6,4"/><text x="160" y="62" font-size="13" fill="#4fb3a5">b(低温)</text><text x="320" y="200" font-size="13" fill="#234b45">a(高温)</text></svg>', caption: '图1　p-V 图上的等温线。温度越高的等温线（如 a）位置越靠外，同样体积下压强更大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">p-T 图：等容线是从原点出发的直线，体积越大斜率越小</text><line x1="90" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="250" x2="90" y2="50" stroke="#234b45" stroke-width="2"/><polygon points="620,250 608,244 608,256" fill="#234b45"/><polygon points="90,50 84,62 96,62" fill="#234b45"/><text x="610" y="270" font-size="13" fill="#234b45">温度 T(K)</text><text x="70" y="46" font-size="13" fill="#234b45">压强 p</text><line x1="90" y1="250" x2="560" y2="70" stroke="#2e9e8f" stroke-width="3"/><line x1="90" y1="250" x2="470" y2="90" stroke="#4fb3a5" stroke-width="3" stroke-dasharray="6,4"/><text x="320" y="160" font-size="13" fill="#234b45">体积小(陡)</text><text x="380" y="200" font-size="13" fill="#4fb3a5">体积大(缓)</text></svg>', caption: '图2　p-T 图上的等容线。体积越小斜率越大（更陡），体积越大斜率越小（更缓）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">V-T 图：等压线也是从原点出发的直线，压强越大斜率越小</text><line x1="90" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="250" x2="90" y2="50" stroke="#234b45" stroke-width="2"/><polygon points="620,250 608,244 608,256" fill="#234b45"/><polygon points="90,50 84,62 96,62" fill="#234b45"/><text x="610" y="270" font-size="13" fill="#234b45">温度 T(K)</text><text x="70" y="46" font-size="13" fill="#234b45">体积 V</text><line x1="90" y1="250" x2="560" y2="70" stroke="#2e9e8f" stroke-width="3"/><line x1="90" y1="250" x2="470" y2="90" stroke="#4fb3a5" stroke-width="3" stroke-dasharray="6,4"/><text x="320" y="160" font-size="13" fill="#234b45">压强小(陡)</text><text x="380" y="200" font-size="13" fill="#4fb3a5">压强大(缓)</text></svg>', caption: '图3　V-T 图上的等压线。压强越小斜率越大（更陡），压强越大斜率越小（更缓）。' }
    ],
    exercises: [
      { type: 'choice', question: '理想气体状态方程 p₁×V₁/T₁ = p₂×V₂/T₂ 中的温度 T 应该用？', options: ['摄氏温度 ℃', '热力学温度 K', '华氏温度', '任意温度单位都行'], answer: '热力学温度 K', explanation: '状态方程里的 T 必须是热力学温度（单位 K），由 T = 273 + t 换算得到。如果用摄氏温度，会得出错误结论，因为气体定律的比例关系零点对应 0 K 而非 0℃。这是气体计算最常见的出错点之一。' },
      { type: 'choice', question: '关于理想气体模型，下列说法正确的是？', options: ['分子之间有很强的吸引力', '分子本身的大小不能忽略', '分子间除碰撞外无作用力，分子大小可忽略', '理想气体在现实中完全真实存在'], answer: '分子间除碰撞外无作用力，分子大小可忽略', explanation: '理想气体是一种理想化模型：假设分子之间除碰撞瞬间外没有相互作用力，分子本身的大小也忽略不计。真实气体在常温常压下很接近这个模型，但现实中并不存在完全理想的气体，模型是为了便于计算而做的简化。' },
      { type: 'choice', question: '在 p-V 图上，同一气体的两条等温线 a、b，a 在 b 外侧（同体积下 a 压强更大），则？', options: ['a 的温度更低', 'a 的温度更高', '两温度一样', '无法判断'], answer: 'a 的温度更高', explanation: '由 p×V/T = C，在 p-V 图上同体积处压强 p 越大，乘积 p×V 越大，对应温度 T 越高。a 线在 b 外侧，相同体积下 a 的压强更大，所以 a 对应的热力学温度更高。' },
      { type: 'fill', question: '一定质量的理想气体，初始压强 p₁ = 2.0 标准大气压、体积 V₁ = 3.0 升、温度 T₁ = 300 K；后来温度变为 T₂ = 600 K、体积不变，则压强 p₂ = ___ 标准大气压。', answer: '4.0', explanation: '体积不变属于等容过程，由 p₁/T₁ = p₂/T₂ 得 p₂ = p₁ × T₂ / T₁ = 2.0 × 600 / 300 = 4.0 标准大气压。温度从 300 K 升到 600 K（按 K 算升到两倍），压强也升到两倍。注意这里体积未变，也可直接用状态方程 p×V/T=C 算出同样结果。' },
      { type: 'fill', question: '状态方程 p×V/T = C 中的常量 C 由气体的___决定（填"质量""温度"或"压强"）。', answer: '质量', explanation: '对一定质量的理想气体，p×V/T 恒等于常量 C，而 C 的大小只由这团气体的质量决定，与它的压强、体积、温度具体取值无关。如果气体质量变了（比如漏气），C 就会改变，这时就不能再用原来那个 C 套公式了。' }
    ]
  });
})();
