/* ============================================================
 * 高二物理 · 必修 第三册 · 第九章 静电场及其应用
 * 课时3：电场强度
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u3',
    name: '电场强度',
    chapter: '必修第三册 · 第九章 静电场及其应用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、电场——电荷周围的"看不见的手"' },
      { type: 'paragraph', text: '两个电荷并没有接触，却能让彼此受力，这种作用是怎么传过去的？物理学认为：任何电荷都在它周围空间产生一种特殊的物质，叫做电场。另一个电荷受到的力，正是通过这个电场传递的。也就是说，电荷 A 产生电场，电荷 B 处在电场中才受力。' },
      { type: 'keypoint', label: '重点·电场', text: '<strong>电场是电荷周围存在的一种特殊物质，它看不见摸不着，但客观存在。</strong>电场最基本的性质是：对放入其中的电荷有力的作用。电荷之间的相互作用，是通过电场实现的。' },
      { type: 'paragraph', text: '电场和我们熟悉的空气、水一样，是"物质"的一种形态，只不过它不像桌子椅子那样有固定形状。地球周围有引力场，磁铁周围有磁场，电荷周围有电场，它们都是传递相互作用的"场"。' },
      { type: 'list', items: ['电场由电荷产生，存在于电荷周围的整个空间', '电场是客观存在的特殊物质，不依赖是否放入检验电荷', '电场的基本性质：对放入其中的电荷施加力的作用', '电荷间的相互作用是通过电场传递的'] },
      { type: 'heading', text: '二、电场强度 E' },
      { type: 'paragraph', text: '电场有强有弱、有方向。为了描述电场本身，我们放入一个电量很小的"检验电荷" q，测出它受到的力 F。发现无论 q 取多大，F 与 q 的比值总是一个只由电场位置决定的常数，这个比值就定义为电场强度。' },
      { type: 'keypoint', label: '重点·电场强度定义', text: '<strong>电场强度 E = F / q</strong>。它等于放入电场中某点的检验电荷所受的力 F，跟它的电荷量 q 的比值。E 是描述电场本身强弱和方向的物理量，与是否放入检验电荷无关。' },
      { type: 'example', label: '例题·求电场强度', text: '在电场中某点放入电荷量 q = 1.0×10⁻⁸ C 的检验电荷，测得它受到的力 F = 2.0×10⁻⁶ N，求该点电场强度大小。<br><br><strong>解析</strong>：<br>由 E = F / q = (2.0×10⁻⁶) / (1.0×10⁻⁸) = 2.0×10² = 200 N/C。<br>该点电场强度大小为 200 N/C，方向与正检验电荷受力方向相同。' },
      { type: 'warn', label: '易错', text: '<strong>E = F / q 是定义式，不是决定式。</strong>电场强度由电场本身（场源电荷、位置）决定，与检验电荷的电荷量 q 和它受力 F 无关。换一个更大的检验电荷，F 变大但 F/q 不变。不要误以为"F 越大 E 就越大、q 越大 E 就越小"。' },
      { type: 'tip', label: '提示', text: '<strong>电场强度的单位：牛/库(N/C)，也等于伏/米(V/m)，两者完全等价。</strong>计算时若 F 用 N、q 用 C，得到的 E 自然就是 N/C。方向规定为：正电荷在该点受力的方向。' },
      { type: 'list', items: ['点电荷产生的电场：E = k × Q / r²（Q 为场源电荷量）', '电场强度方向：正电荷受力方向，负电荷受力方向与之相反', 'E 是矢量，既有大小又有方向', '匀强电场中各点 E 大小和方向都相同'] },
      { type: 'heading', text: '三、用电场线描绘电场' },
      { type: 'paragraph', text: '电场看不见，为了直观，人们画出"电场线"：在电场中画一系列曲线，使曲线上每点的切线方向与该点电场方向一致，用线的疏密表示电场的强弱。电场线不是真实存在的线，而是帮助理解的几何图像。' },
      { type: 'keypoint', label: '重点·电场线的特点', text: '<strong>① 电场线从正电荷出发，终止于负电荷（或无穷远）；② 电场线不闭合、也不相交；③ 线越密的地方电场越强，越疏越弱；④ 线上每点的切线方向就是该点的电场方向。</strong>' },
      { type: 'list', items: ['正点电荷：电场线从电荷向外呈放射状', '负点电荷：电场线从四面八方向电荷会聚', '等量异种电荷：连线从中点向外弯曲分布', '匀强电场：一组疏密均匀、互相平行的直线'] },
      { type: 'heading', text: '四、电场的叠加' },
      { type: 'paragraph', text: '当空间中有多个场源电荷时，某一点的电场强度，等于各个场源电荷单独在该点产生的电场强度的矢量和。先分别算出每个场源产生的 E（用 E = kQ/r²），再按平行四边形定则合成，这就是电场的叠加原理。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电荷周围存在电场，对放入的电荷有力的作用</text><circle cx="200" cy="180" r="34" fill="#4fb3a5"/><text x="200" y="190" font-size="26" fill="#234b45" text-anchor="middle">+</text><text x="200" y="248" font-size="13" fill="#234b45" text-anchor="middle">场源电荷</text><circle cx="470" cy="180" r="22" fill="#e6f4f1" stroke="#2e9e8f" stroke-width="2"/><text x="470" y="190" font-size="20" fill="#234b45" text-anchor="middle">q</text><text x="470" y="248" font-size="13" fill="#234b45" text-anchor="middle">检验电荷</text><polygon points="430,180 400,167 400,193" fill="#234b45"/><text x="335" y="150" font-size="13" fill="#234b45" text-anchor="middle">电场对 q 施加力 F</text><text x="340" y="298" font-size="13" fill="#234b45" text-anchor="middle">通过 E = F / q 描述电场的强弱</text></svg>', caption: '图1　场源电荷在周围产生电场，检验电荷放入后受电场力 F，用 E = F/q 描述电场。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">正点电荷的电场线：从电荷向外放射</text><circle cx="340" cy="180" r="26" fill="#4fb3a5"/><text x="340" y="190" font-size="22" fill="#234b45" text-anchor="middle">+</text><line x1="340" y1="120" x2="340" y2="80" stroke="#2e9e8f" stroke-width="2"/><line x1="340" y1="240" x2="340" y2="280" stroke="#2e9e8f" stroke-width="2"/><line x1="280" y1="180" x2="240" y2="180" stroke="#2e9e8f" stroke-width="2"/><line x1="400" y1="180" x2="440" y2="180" stroke="#2e9e8f" stroke-width="2"/><line x1="297" y1="137" x2="270" y2="110" stroke="#2e9e8f" stroke-width="2"/><line x1="383" y1="137" x2="410" y2="110" stroke="#2e9e8f" stroke-width="2"/><line x1="297" y1="223" x2="270" y2="250" stroke="#2e9e8f" stroke-width="2"/><line x1="383" y1="223" x2="410" y2="250" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="312" font-size="13" fill="#234b45" text-anchor="middle">离电荷越近线越密，电场越强</text></svg>', caption: '图2　正点电荷的电场线从电荷向四周放射，越靠近电荷越密，表示电场越强。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电场叠加：某点场强是各场源场强的矢量和</text><circle cx="200" cy="170" r="24" fill="#4fb3a5"/><text x="200" y="180" font-size="20" fill="#234b45" text-anchor="middle">+</text><circle cx="480" cy="170" r="24" fill="#e6f4f1" stroke="#2e9e8f" stroke-width="2"/><text x="480" y="180" font-size="20" fill="#234b45" text-anchor="middle">−</text><circle cx="340" cy="250" r="8" fill="#234b45"/><polygon points="328,228 312,212 330,214" fill="#234b45"/><polygon points="352,228 368,212 350,214" fill="#234b45"/><line x1="340" y1="235" x2="340" y2="170" stroke="#234b45" stroke-width="2" stroke-dasharray="5,4"/><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">P 点场强 = 正电荷场强 + 负电荷场强的矢量和</text></svg>', caption: '图3　空间某点 P 的电场强度，等于各场源电荷单独在该点产生场强的矢量和。' },
      { type: 'table', headers: ['物理量', '符号', '定义式', '方向'], rows: [['电场强度', 'E', 'E = F / q', '正电荷受力方向'], ['点电荷电场', 'E', 'E = k × Q / r²', '沿径向，正电荷向外'], ['单位', 'N/C 或 V/m', '二者等价', '—']] },
      { type: 'tip', label: '提示', text: '<strong>电场强度是矢量，叠加时要按矢量和来算，不能简单相加大小。</strong>若两个分场强方向相同就相加，方向相反就相减，成角度时要用平行四边形定则求合场强，和普通力的合成完全一样。' }
    ],
    exercises: [
      { type: 'choice', question: '关于电场，下列说法中正确的是？', options: ['电场是人为假想出来的，并不真实存在', '电场是电荷周围存在的一种特殊物质，客观存在', '只有带电体接触时才存在电场', '电场只对负电荷有力的作用'], answer: '电场是电荷周围存在的一种特殊物质，客观存在', explanation: '电场是电荷周围空间存在的一种特殊物质，它客观存在，并不依赖是否放入检验电荷。电场的基本性质是对放入其中的电荷有力的作用，无论正电荷还是负电荷都会受力。电荷间的相互作用正是通过电场传递的。' },
      { type: 'choice', question: '关于电场强度 E = F / q，下列说法正确的是？', options: ['F 越大，E 一定越大', 'q 越大，E 一定越小', 'E 由电场本身决定，与 F、q 无关', 'E 的方向总是与电荷受力方向相反'], answer: 'E 由电场本身决定，与 F、q 无关', explanation: 'E = F / q 只是电场强度的定义式。电场中某点的电场强度由场源电荷和该点位置决定，与是否放入检验电荷、以及 q 和 F 的大小无关。放入不同检验电荷时 F 会变，但 F/q 这个比值保持不变。E 的方向规定为正电荷受力方向。' },
      { type: 'choice', question: '关于电场线，下列说法错误的是？', options: ['电场线越密的地方电场越强', '电场线不相交', '电场线是真实存在的线', '电场线从正电荷出发终止于负电荷'], answer: '电场线是真实存在的线', explanation: '电场线是为了形象地描绘电场而人为画出的几何曲线，并不是真实存在的物质。它的切线方向表示电场方向，疏密表示电场强弱，且电场线不相交、从正电荷出发终止于负电荷或无穷远。把电场线当成"真实存在的线"是常见错误。' },
      { type: 'fill', question: '在电场中某点放入电荷量 q = 2.0×10⁻⁸ C 的检验电荷，测得它受力 F = 4.0×10⁻⁶ N，则该点电场强度大小为 ___ N/C。', answer: '200', explanation: '由电场强度定义式 E = F / q，代入 F = 4.0×10⁻⁶ N、q = 2.0×10⁻⁸ C，得 E = (4.0×10⁻⁶) / (2.0×10⁻⁸) = 2.0×10² = 200 N/C。电场强度大小只由电场本身决定，与检验电荷无关。' },
      { type: 'fill', question: '点电荷 Q 在距离 r 处产生的电场强度公式为 E = ___（用 k、Q、r 表示）。', answer: 'k × Q / r²', explanation: '由库仑定律，点电荷 Q 对检验电荷 q 的力为 F = k × Q × q / r²，再代入 E = F / q，约去 q 得到 E = k × Q / r²。这里 Q 是产生电场的场源电荷量，r 是到场源的距离，说明点电荷的场强与距离平方成反比。' }
    ]
  });
})();
