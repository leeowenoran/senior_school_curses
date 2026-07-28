/* ============================================================
 * 高三物理 · 力学综合 · 专题二 相互作用与受力分析
 * 课时8：共点力平衡（平衡条件、三力平衡推论、动态平衡）
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u8',
    name: '共点力平衡',
    chapter: '力学综合 · 专题二 相互作用与受力分析',
    difficulty: '中档',
    content: [
      { type: 'heading', text: '一、什么是共点力平衡' },
      { type: 'paragraph', text: '几个力作用在物体的同一点（或力的作用线交于一点），就叫共点力。当物体在这几个共点力作用下保持静止，或沿直线匀速运动时，我们说它处于平衡状态。平衡的核心不是"不受力"，而是"所有力的总效果互相抵消，合力为零"。' },
      { type: 'keypoint', label: '重点·平衡条件', text: '<strong>共点力平衡的条件是：物体所受合力为零，写作 ΣF = 0。</strong>用分量表示，就是 x 方向合力为零、y 方向合力也为零（ΣFx = 0 且 ΣFy = 0）。只要合力为零，物体要么静止，要么做匀速直线运动。' },
      { type: 'paragraph', text: '例如天花板上静止的吊灯，受重力和两根绳子的拉力，三个力合力为零，所以吊灯不动。再比如匀速直线行驶的汽车，牵引力、阻力、重力、支持力四力平衡，合力为零，速度才保持不变。' },
      { type: 'warn', label: '易错', text: '<strong>平衡不等于不受力，而是合力为零。</strong>很多同学一看到"平衡"就以为物体没受力，这是大错。静止在桌上的书受重力和支持力两个力，二力大小相等方向相反，合力为零，所以平衡。判断平衡看的是"合力是否为零"，不是"受力个数是否为零"。' },
      { type: 'heading', text: '二、三力平衡的重要推论' },
      { type: 'paragraph', text: '当物体只受三个共点力而平衡时，有一个非常有用的推论：其中任意两个力的合力，必定与第三个力大小相等、方向相反。换句话说，把这三个力首尾相接画出来，一定构成一个闭合的三角形，叫矢量三角形。' },
      { type: 'keypoint', label: '重点·三力平衡推论', text: '<strong>三力平衡时：① 任意两个力的合力与第三个力等大反向；② 三个力可以平移后首尾相接，构成一个闭合的矢量三角形。</strong>利用这个三角形，配合正弦定理、几何关系，就能求出未知力的大小和方向。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">三力平衡时，三个力首尾相接构成闭合矢量三角形</text><line x1="200" y1="210" x2="460" y2="210" stroke="#234b45" stroke-width="3"/><polygon points="453,203 453,217 467,210" fill="#234b45"/><text x="330" y="230" font-size="13" fill="#234b45" text-anchor="middle">F₁</text><line x1="460" y1="210" x2="330" y2="90" stroke="#4fb3a5" stroke-width="3"/><polygon points="337,97 351,97 344,83" fill="#4fb3a5"/><text x="420" y="150" font-size="13" fill="#4fb3a5">F₂</text><line x1="330" y1="90" x2="200" y2="210" stroke="#2e9e8f" stroke-width="3"/><polygon points="207,203 207,217 193,210" fill="#2e9e8f"/><text x="255" y="150" font-size="13" fill="#2e9e8f">F₃</text><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">三边首尾相接正好闭合，合力为零</text></svg>', caption: '图1　三力平衡时，把 F₁、F₂、F₃ 平移成首尾相接，恰好围成一个闭合三角形（矢量三角形），说明合力为零。' },
      { type: 'example', label: '例题·用推论求未知力', text: '一个重物用两根等长的细绳悬挂，绳与竖直方向夹角均为 30°，重物重力 G = 20 N。求每根绳的拉力 T。<br><br><strong>解析</strong>：<br>三力平衡，两根绳拉力对称，竖直分量之和抵消重力。每根绳拉力的竖直分量为 T × cos30°，两根合计 2 × T × cos30° = G = 20 N。所以 T = 20 / (2 × cos30°) = 20 / (2 × 0.866) ≈ 11.5 N。利用三力平衡的对称与分解即可快速求解。' },
      { type: 'list', items: ['先确认物体只受三个共点力且平衡', '选一个力作"已知边"，把它和另外两力构成三角形', '用几何关系或正弦定理 F₁/sinα = F₂/sinβ = F₃/sinγ 求未知力', '对称情形优先用对称关系简化计算'] },
      { type: 'heading', text: '三、动态平衡问题' },
      { type: 'paragraph', text: '动态平衡指物体在缓慢变化的过程中，每一瞬间都近似处于平衡状态。比如人缓慢拉着绳子让灯笼升高，角度在变，但每一刻都"几乎平衡"。处理这类问题，常用三种方法：图解法、相似三角形法、解析法。' },
      { type: 'keypoint', label: '重点·动态平衡三方法', text: '<strong>① 图解法：画出力的矢量三角形，看各边随角度如何变化；② 相似三角形法：当力的三角形与某个几何三角形相似时，用对应边成比例求力；③ 解析法：列 ΣFx = 0、ΣFy = 0，把力表示成角度的函数再分析。</strong>' },
      { type: 'list', items: ['图解法：适合三力平衡，其中一个力恒定、另一个力方向不变，第三个力大小和方向都变', '相似三角形法：适合力的三角形与几何三角形相似的情景（如绳、杆构成固定几何形）', '解析法：把力写成角度的函数，适合要精确讨论变化规律的题目', '三种方法可配合使用，图解直观、解析严谨'] },
      { type: 'example', label: '例题·图解法判断力的变化', text: '用两根细绳吊着一盏灯，保持左侧绳固定，缓慢向右拉动右侧绳的端点使夹角变大。判断右侧绳拉力 T 和支持力 N 怎么变。<br><br><strong>解析</strong>：<br>灯受重力 G（恒定向下）、左绳拉力（方向不变）、右绳拉力 T 三力平衡。画矢量三角形：G 边固定，左绳力方向固定，随右绳端点右移，T 先变小后变大（当两绳垂直时 T 最小），而左绳支持力 N 逐渐变大。图解能直观看出变化趋势，不必硬算。' },
      { type: 'tip', label: '提示', text: '<strong>图解法最适用条件：</strong>三力平衡中，有一个力大小方向都不变（通常是重力），第二个力方向不变、大小可变，第三个力大小和方向都变。此时力的矢量三角形中两角一边固定，第三边随动，画图就能直接看出谁增谁减，比列公式更快。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图解法：角度变化时力的三角形随之变化，但始终闭合</text><line x1="120" y1="225" x2="280" y2="225" stroke="#234b45" stroke-width="3"/><polygon points="273,218 273,232 287,225" fill="#234b45"/><text x="200" y="245" font-size="12" fill="#234b45" text-anchor="middle">G(恒定)</text><line x1="280" y1="225" x2="220" y2="120" stroke="#4fb3a5" stroke-width="3"/><polygon points="227,127 241,127 234,113" fill="#4fb3a5"/><text x="255" y="165" font-size="12" fill="#4fb3a5">T₁</text><line x1="220" y1="120" x2="120" y2="225" stroke="#2e9e8f" stroke-width="3"/><polygon points="127,218 127,232 113,225" fill="#2e9e8f"/><text x="160" y="165" font-size="12" fill="#2e9e8f">N₁</text><text x="200" y="280" font-size="12" fill="#234b45" text-anchor="middle">状态一</text><line x1="400" y1="225" x2="560" y2="225" stroke="#234b45" stroke-width="3"/><polygon points="553,218 553,232 567,225" fill="#234b45"/><text x="480" y="245" font-size="12" fill="#234b45" text-anchor="middle">G(恒定)</text><line x1="560" y1="225" x2="470" y2="95" stroke="#4fb3a5" stroke-width="3"/><polygon points="477,102 491,102 484,88" fill="#4fb3a5"/><text x="535" y="160" font-size="12" fill="#4fb3a5">T₂</text><line x1="470" y1="95" x2="400" y2="225" stroke="#2e9e8f" stroke-width="3"/><polygon points="407,218 407,232 393,225" fill="#2e9e8f"/><text x="425" y="155" font-size="12" fill="#2e9e8f">N₂</text><text x="480" y="280" font-size="12" fill="#234b45" text-anchor="middle">状态二(角度变大)</text></svg>', caption: '图2　同是三力平衡，重力 G 恒定、左绳方向不变，随右绳角度变化，拉力 T 和支持力 N 构成的矢量三角形形状改变，直观反映力的增减。' },
      { type: 'table', headers: ['方法', '适用特征', '关键操作'], rows: [['图解法', '三力平衡，一力恒定、一力方向不变', '画力的矢量三角形，看边长随角度变化'], ['相似三角形法', '力的三角形与几何三角形相似', '利用对应边成比例 G/c = T/a = N/b'], ['解析法', '任意力数，需精确规律', '列 ΣFx=0、ΣFy=0，把力写成角度函数']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">相似三角形法：力的矢量三角形与几何三角形相似</text><line x1="160" y1="80" x2="430" y2="80" stroke="#2e9e8f" stroke-width="2"/><text x="295" y="72" font-size="12" fill="#2e9e8f" text-anchor="middle">c(几何边)</text><line x1="430" y1="80" x2="430" y2="200" stroke="#2e9e8f" stroke-width="2"/><text x="445" y="145" font-size="12" fill="#2e9e8f">a</text><line x1="430" y1="200" x2="160" y2="80" stroke="#2e9e8f" stroke-width="2"/><text x="280" y="150" font-size="12" fill="#2e9e8f" text-anchor="middle">b</text><line x1="180" y1="235" x2="380" y2="235" stroke="#4fb3a5" stroke-width="3"/><polygon points="373,228 373,242 387,235" fill="#4fb3a5"/><text x="280" y="228" font-size="12" fill="#4fb3a5" text-anchor="middle">G(对应c)</text><line x1="380" y1="235" x2="380" y2="285" stroke="#234b45" stroke-width="3"/><polygon points="373,278 373,292 387,285" fill="#234b45"/><text x="395" y="265" font-size="12" fill="#234b45">T(对应a)</text><line x1="380" y1="285" x2="180" y2="235" stroke="#2e9e8f" stroke-width="3"/><polygon points="187,228 187,242 173,235" fill="#2e9e8f"/><text x="270" y="275" font-size="12" fill="#2e9e8f">N(对应b)</text><text x="340" y="120" font-size="12" fill="#234b45" text-anchor="middle">力三角形 ∽ 几何三角形</text></svg>', caption: '图3　当力的矢量三角形与某个固定几何三角形相似时，对应边成比例：G/c = T/a = N/b，由此可求各力大小。' }
    ],
    exercises: [
      { type: 'choice', question: '物体受共点力作用而处于平衡状态时，其受力特点是？', options: ['一定不受任何力', '所受合力为零', '只受两个力', '所受合力不为零'], answer: '所受合力为零', explanation: '共点力平衡的核心条件是物体所受所有力的合力为零，即 ΣF = 0（分量上 ΣFx = 0 且 ΣFy = 0）。平衡时物体可以静止，也可以做匀速直线运动；它完全可能受多个力，只是这些力的总效果互相抵消。所以"不受力"和"合力不为零"都不对。' },
      { type: 'choice', question: '一个物体受三个共点力而平衡，下列说法正确的是？', options: ['三个力大小一定相等', '任意两个力的合力与第三个力等大反向', '三个力一定互相垂直', '三个力方向一定相同'], answer: '任意两个力的合力与第三个力等大反向', explanation: '三力平衡的重要推论是：其中任意两个力的合力，必定与第三个力大小相等、方向相反，三者平移后首尾相接能构成闭合的矢量三角形。三个力大小不必相等，也不必互相垂直或方向相同。这个推论是图解法和正弦定理求解未知力的基础。' },
      { type: 'choice', question: '用图解法处理动态平衡问题时，通常适用的情景是？', options: ['四个以上力的平衡', '三力平衡，其中一个力大小和方向都不变，另一个力方向不变', '只有两个力平衡', '任意多个力的平衡'], answer: '三力平衡，其中一个力大小和方向都不变，另一个力方向不变', explanation: '图解法最适合三力平衡且满足条件：一个力（常为重力）大小和方向都不变，第二个力方向不变、大小可变，第三个力大小和方向都变。此时力的矢量三角形中两角一边固定，第三边随动，画图即可直观判断各力增减。力数过多或条件不符时图解法不便，应改用解析法。' },
      { type: 'fill', question: '三个共点力平衡时，把这三个力平移后首尾相接，可以构成一个___的矢量三角形（填"闭合"或"开放"）。', answer: '闭合', explanation: '三力平衡时合力为零，把三个力依次头尾相接平移后，正好围成一个没有缺口的三角形，即闭合矢量三角形。正是这种闭合关系，使得我们可以用几何或正弦定理求出各未知力的大小和方向。' },
      { type: 'fill', question: '共点力平衡的核心条件是物体所受合外力为零，写作 ΣF = ___。', answer: '0', explanation: '共点力平衡条件为合力为零，记为 ΣF = 0。写成直角分量即 ΣFx = 0 且 ΣFy = 0，表示物体在相互垂直的两个方向上合力都为零。满足该条件时物体保持静止或匀速直线运动状态，这是解决所有静力学平衡问题的基本方程。' }
    ]
  });
})();
