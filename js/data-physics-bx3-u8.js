/* ============================================================
 * 高一物理 · 必修 第三册 · 第十章 静电场中的能量
 * 课时8：电势差与电场强度的关系
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u8',
    name: '电势差与电场强度的关系',
    chapter: '必修第三册 · 第十章 静电场中的能量',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、匀强电场中电势差与场强的关系' },
      { type: 'paragraph', text: '电场强度 E 描述"单位电荷受多大力"，电势差 U 描述"两点电势差多少"。在匀强电场里，这两者可以通过一个简单公式直接联系：沿电场线方向相距 d 的两点，电势差等于场强乘以距离。也就是说，场强越大、沿电场线走得越远，电势降得越多。' },
      { type: 'keypoint', label: '重点·U = E × d', text: '<strong>在匀强电场中，沿电场线方向的两点间电势差 U = E × d。</strong>其中 E 是电场强度，d 是这两点沿电场线方向的距离，单位是米（m）。这个公式说明：电场线方向上，电势是均匀下降的。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">匀强电场：沿电场线 U = E × d</text><rect x="40" y="56" width="600" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="120" y="80" width="20" height="160" fill="#4fb3a5"/><text x="130" y="250" font-size="12" fill="#234b45" text-anchor="middle">+板</text><rect x="540" y="80" width="20" height="160" fill="#4fb3a5"/><text x="550" y="250" font-size="12" fill="#234b45" text-anchor="middle">−板</text><line x1="250" y1="110" x2="470" y2="110" stroke="#234b45" stroke-width="2"/><polygon points="470,110 456,104 456,116" fill="#234b45"/><text x="360" y="100" font-size="13" fill="#234b45" text-anchor="middle">E 方向</text><line x1="250" y1="190" x2="470" y2="190" stroke="#234b45" stroke-width="2"/><polygon points="470,190 456,184 456,196" fill="#234b45"/><text x="360" y="215" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">d（沿电场线）</text><text x="360" y="252" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">U = E × d</text></svg>', caption: '图1　匀强电场中，沿电场线方向相距 d 的两点间电势差 U 等于 E 乘以 d。' },
      { type: 'paragraph', text: '这里要特别注意 d 的含义：它不是两点之间的任意直线距离，而是两点沿"电场线方向"的距离，也就是把两点连线投影到电场线方向上得到的长度。如果连线正好平行于电场线，d 就是连线长度；如果斜着，就要取投影。' },
      { type: 'list', items: ['公式 U = E × d 只适用于匀强电场', 'd 是两点沿电场线方向的距离，不是任意距离', '沿电场线走，电势均匀降低，每米降 E 伏特'] },
      { type: 'heading', text: '二、电场强度的新单位 V/m' },
      { type: 'paragraph', text: '把 U = E × d 变形，得到 E = U / d。这说明电场强度也可以用"每米降落多少伏特"来表示，即单位是 V/m（伏特每米）。实际上 1 V/m 和之前学过的 1 N/C 完全相等，只是换了个说法：一个强调"力的效果"，一个强调"电势降落的效果"。' },
      { type: 'keypoint', label: '重点·E = U / d 与单位', text: '<strong>由 U = E × d 可得 E = U / d，电场强度单位是 V/m（伏特每米）。</strong>1 V/m = 1 N/C。这两个单位等价，V/m 突出了"场强等于沿电场方向单位长度上的电势降落"。' },
      { type: 'table', headers: ['表达式', 'E = F / q', 'E = U / d'], rows: [['适用电场', '任何电场', '仅匀强电场'], ['单位', 'N/C（牛每库）', 'V/m（伏每米）'], ['物理意义', '单位电荷受力大小', '单位长度电势降落'], ['两者关系', '1 N/C = 1 V/m', '等价']] },
      { type: 'example', label: '例题·用 U = E × d 计算', text: '某匀强电场的场强 E = 2.0×10³ V/m，沿电场线方向两点间距离 d = 0.05 m。求这两点的电势差 U。<br><br><strong>解析</strong>：<br>由 U = E × d = 2.0×10³ V/m × 0.05 m = 100 V。所以沿电场线方向走 0.05 米，电势降低了 100 V。也就是每米降低 2.0×10³ V。' },
      { type: 'warn', label: '易错', text: '<strong>公式里的 d 必须是沿电场线方向的距离，不是两点连线的几何长度。</strong>若 A、B 连线与电场线成 θ 角，则 d = L × cosθ（L 为几何距离）。很多同学直接把 L 代进去，结果算出的电压偏大。画个图、把投影距离找对，就不会错。' },
      { type: 'list', items: ['E = U / d 给出场强的另一种单位 V/m', 'V/m 与 N/C 等价，只是描述角度不同', '实际测量中常通过测电压 U 和距离 d 来算场强 E'] },
      { type: 'heading', text: '三、公式的适用范围与理解' },
      { type: 'paragraph', text: 'U = E × d 是从匀强电场严格推导出来的。它告诉我们：电场线越密的地方，相同距离内电势降得越快，也就是场强越大。这个"电势降落快慢"正是场强的本质。在非匀强电场中，这个公式不能直接用，但可以用它做定性估计——在哪段电场线密，哪段场强就大。' },
      { type: 'keypoint', label: '重点·适用范围', text: '<strong>U = E × d 及其变形 E = U / d 只严格适用于匀强电场，且 d 为沿电场线方向的距离。</strong>非匀强电场中该式不成立，但可定性理解为"电势降落越快的地方场强越大"。' },
      { type: 'example', label: '例题·由电压求板间场强', text: '平行金属板间电压 U = 600 V，板间距 d = 0.02 m，板间为匀强电场。求板间电场强度 E。<br><br><strong>解析</strong>：<br>板间是匀强电场，可用 E = U / d = 600 V / 0.02 m = 3.0×10⁴ V/m。即板间每米电势降落 3.0×10⁴ V，电场线从正极板指向负极板。' },
      { type: 'warn', label: '易错', text: '<strong>不要把 U = E × d 套用到非匀强电场求精确值。</strong>比如点电荷周围的电场，越靠近电荷场强越大，沿一条电场线各段 d 对应的 U 并不相等。此时只能用 E = U / d 做近似（取很短一段），不能整段直接代公式，否则结果错误。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">d 是连线在电场线方向上的投影</text><rect x="40" y="56" width="600" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="140" y1="80" x2="560" y2="80" stroke="#234b45" stroke-width="3"/><polygon points="560,80 544,73 544,87" fill="#234b45"/><text x="450" y="70" font-size="13" fill="#234b45" text-anchor="middle">E 水平向右</text><circle cx="160" cy="150" r="12" fill="#4fb3a5"/><text x="160" y="185" font-size="12" fill="#234b45" text-anchor="middle">A</text><circle cx="500" cy="220" r="12" fill="#4fb3a5"/><text x="500" y="255" font-size="12" fill="#234b45" text-anchor="middle">B</text><line x1="172" y1="150" x2="488" y2="220" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><line x1="172" y1="150" x2="488" y2="150" stroke="#234b45" stroke-width="2"/><polygon points="488,150 474,144 474,156" fill="#234b45"/><text x="330" y="140" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">d（投影）</text><text x="330" y="270" font-size="12" fill="#234b45" text-anchor="middle">L 是几何距离，d = L×cosθ 才是沿电场线距离</text></svg>', caption: '图2　A、B 连线不沿电场线时，d 取连线在电场线方向上的投影长度，而不是几何距离 L。' },
      { type: 'tip', label: '提示·从等势面看场强', text: '<strong>等势面越密，电势降落越快，场强越大。</strong>把 U = E × d 写成 E = U / d：若相邻等势面电势差 U 固定，间距 d 越小（面越密），E 就越大。所以看等势面图时，线密处场强大，线疏处场强小。' },
      { type: 'paragraph', text: '总结一句：电场强度 E 的两种含义是统一的——它既是"单位电荷受力"（F/q），也是"沿电场方向单位长度的电势降落"（U/d）。掌握这个统一，很多电场题就有了抓手。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">平行板间匀强电场：E = U / d</text><rect x="40" y="56" width="600" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="150" y="90" width="20" height="140" fill="#4fb3a5"/><text x="160" y="248" font-size="12" fill="#234b45" text-anchor="middle">高电势板</text><rect x="510" y="90" width="20" height="140" fill="#4fb3a5"/><text x="520" y="248" font-size="12" fill="#234b45" text-anchor="middle">低电势板</text><line x1="300" y1="120" x2="460" y2="120" stroke="#234b45" stroke-width="2"/><polygon points="460,120 446,114 446,126" fill="#234b45"/><line x1="300" y1="160" x2="460" y2="160" stroke="#234b45" stroke-width="2"/><polygon points="460,160 446,154 446,166" fill="#234b45"/><line x1="300" y1="200" x2="460" y2="200" stroke="#234b45" stroke-width="2"/><polygon points="460,200 446,194 446,206" fill="#234b45"/><text x="330" y="252" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">U = E × d  →  E = U / d</text></svg>', caption: '图3　平行金属板间是匀强电场，板间电压 U 与板距 d 满足 E = U / d。' }
    ],
    exercises: [
      { type: 'choice', question: '在匀强电场中，沿电场线方向两点间的电势差 U 与场强 E、距离 d 的关系是？', options: ['U = E / d', 'U = E × d', 'U = d / E', 'U = E + d'], answer: 'U = E × d', explanation: '匀强电场中沿电场线方向，电势均匀下降，两点间电势差等于场强乘以沿电场线方向的距离，即 U = E × d。变形可得 E = U / d，这也是场强单位 V/m 的来源。注意 d 必须是沿电场线方向的距离，不能随便取几何距离。' },
      { type: 'choice', question: '电场强度的单位 V/m 与下列哪个单位等价？', options: ['N·m', 'N/C', 'J/C', 'C/V'], answer: 'N/C', explanation: '由 E = U / d 得单位 V/m，由 E = F / q 得单位 N/C。两者描述的是同一个物理量，因此 1 V/m = 1 N/C。V/m 强调单位长度的电势降落，N/C 强调单位电荷受力，本质一致。' },
      { type: 'choice', question: '关于公式 U = E × d，下列说法正确的是？', options: ['适用于任何电场', 'd 是两点任意连线距离', '只适用于匀强电场，且 d 为沿电场线方向距离', '只适用于点电荷电场'], answer: '只适用于匀强电场，且 d 为沿电场线方向距离', explanation: 'U = E × d 是从匀强电场严格推导的，只适用于匀强电场；其中 d 必须是两点沿电场线方向的距离（即连线在电场线方向上的投影）。在非匀强电场中不能用它求精确值，但可作定性估计。' },
      { type: 'fill', question: '匀强电场中场强 E = 4.0×10³ V/m，沿电场线方向两点距离 d = 0.02 m，则这两点电势差 U = ___ V。', answer: '80', explanation: '由 U = E × d = 4.0×10³ V/m × 0.02 m = 80 V。沿电场线方向前进 0.02 米，电势降低 80 V。这里 d 直接沿电场线方向，无需投影处理，直接代入即可。' },
      { type: 'fill', question: '公式 U = E × d 中的 d 指的是两点沿___方向的距离，而不是两点间的几何直线距离。', answer: '电场线', explanation: 'd 是两点沿电场线方向的距离，即把两点连线投影到电场线方向上得到的长度。若连线与电场线不平行，应取投影 d = L × cosθ（L 为几何距离，θ 为连线与电场线夹角）。用错 d 是这类题最常见的失分点。' }
    ]
  });
})();
