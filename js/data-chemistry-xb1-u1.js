/* ============================================================
 * 高二化学 · 选择性必修1 化学反应原理 · 第一章 化学反应的热效应
 * 课时1：反应热与焓变
 * 数据注入：chemistry.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u1',
    name: '反应热与焓变',
    chapter: '选择性必修1 化学反应原理 · 第一章 化学反应的热效应',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、化学反应中为什么会有"热"' },
      { type: 'paragraph', text: '你一定见过这样的现象：木头燃烧会发烫，生石灰倒进水里会冒热气，硝酸铵溶于水却把手摸的杯子变凉。这些现象说明，化学反应不只是生成新物质，还常常伴随着热量的放出或吸收。化学上把这种在反应过程中放出或吸收的热量，统称为反应热。' },
      { type: 'keypoint', label: '重点·反应热的两种方向', text: '<strong>放出热量的反应叫放热反应</strong>（体系能量降低）；<strong>吸收热量的反应叫吸热反应</strong>（体系能量升高）。判断时看"热量是跑出来还是钻进去"，跑出来就是放热，钻进去就是吸热。' },
      { type: 'paragraph', text: '生活中绝大多数燃烧、食物在体内氧化、酸碱中和都是放热反应；而多数分解反应、碳和二氧化碳在高温下化合、氯化铵与氢氧化钡的反应是吸热反应。先记住这几个典型，后面判断就有底了。' },
      { type: 'list', items: ['放热反应：燃料燃烧、酸碱中和、金属与酸反应、食物的缓慢氧化', '吸热反应：多数分解反应、碳与二氧化碳高温化合、氢氧化钡与氯化铵反应', '判断口诀：发光发热多放热，需要持续加热才进行多吸热'] },
      { type: 'heading', text: '二、反应热与焓变 ΔH' },
      { type: 'paragraph', text: '为了定量描述反应热，化学家引入了一个物理量叫"焓"，符号是 H，它代表物质内部含有的那部分与热量有关的能量。对一个反应来说，生成物的总焓减去反应物的总焓，就是这次反应的焓变，记作 ΔH。' },
      { type: 'keypoint', label: '重点·焓变的定义式', text: '<strong>ΔH = H(反应产物) − H(反应物)</strong>。若产物的焓比反应物小，ΔH 为负，反应放热；若产物的焓比反应物大，ΔH 为正，反应吸热。把"产物减反应物"这个顺序记牢，符号就不会乱。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">焓变 ΔH 与反应放热、吸热的关系</text><rect x="70" y="80" width="180" height="40" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="160" y="106" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">反应物</text><rect x="430" y="200" width="180" height="40" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="520" y="226" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">生成物</text><line x1="160" y1="120" x2="520" y2="200" stroke="#d98e3a" stroke-width="2"/><text x="350" y="160" font-size="13" fill="#d98e3a" text-anchor="middle">ΔH 向下，放热</text><text x="350" y="178" font-size="13" fill="#4a3724" text-anchor="middle">ΔH = H(产物) − H(反应物) 小于 0</text><text x="160" y="270" font-size="12" fill="#4a3724" text-anchor="middle">放热反应：产物能量更低</text><text x="520" y="270" font-size="12" fill="#4a3724" text-anchor="middle">能量以热的形式放出</text></svg>', caption: '图1　放热反应中生成物总焓低于反应物，ΔH 为负值，能量以热的形式释放到环境。' },
      { type: 'paragraph', text: '从宏观能量角度看：如果生成物的总能量低于反应物，多余的能量只能以热的形式跑出来，这就是放热；反过来生成物总能量更高，反应就得从外界"借"热量，这就是吸热。所以只要比较反应前后总能量的高低，就能预判反应放热还是吸热。' },
      { type: 'list', items: ['反应物总能量 > 生成物总能量：反应放热，ΔH < 0', '反应物总能量 < 生成物总能量：反应吸热，ΔH > 0', '焓变 ΔH 只与反应体系和始末状态有关，与反应路径无关'] },
      { type: 'heading', text: '三、从微观（化学键）看反应热' },
      { type: 'paragraph', text: '反应之所以伴随能量变化，根本原因是旧化学键断裂要吸收能量，新化学键形成会放出能量。断键吸能、成键放能，两者不相等，差值就表现为反应热。可以这样算：先把反应物里所有要断的键的总能量加起来，再减去生成物里所有新键的总能量。' },
      { type: 'keypoint', label: '重点·键能与焓变', text: '<strong>ΔH = 反应物总键能 − 生成物总键能。</strong>断键吸能记为正，成键放能记为负；反应物断键吸得多、生成物成键放得少，差值就是放出的热。用键能算焓变，是微观视角最常用的方法。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">断键吸能，成键放能，差值即反应热</text><rect x="60" y="70" width="200" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="160" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">断旧键 吸能</text><rect x="420" y="70" width="200" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="520" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">成新键 放能</text><line x1="260" y1="95" x2="420" y2="95" stroke="#d98e3a" stroke-width="2"/><text x="340" y="130" font-size="13" fill="#d98e3a" text-anchor="middle">差值</text><rect x="240" y="160" width="200" height="50" rx="8" fill="#d98e3a" stroke="#b5651d" stroke-width="2"/><text x="340" y="190" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">反应热 ΔH</text><text x="340" y="245" font-size="12" fill="#4a3724" text-anchor="middle">断键吸能多则放热；成键放能多则吸热</text></svg>', caption: '图2　反应热来自断键吸能与成键放能的差值，掌握这个微观图像就抓住了焓变的本质。' },
      { type: 'table', headers: ['对比项', '放热反应', '吸热反应'], rows: [['ΔH 符号', 'ΔH < 0（负值）', 'ΔH > 0（正值）'], ['体系能量变化', '生成物总能量更低', '生成物总能量更高'], ['键能关系', '生成物总键能更大', '反应物总键能更大'], ['常见例子', '燃烧、中和、金属与酸', '分解、碳与二氧化碳化合']] },
      { type: 'heading', text: '四、反应热与物质的聚集状态' },
      { type: 'paragraph', text: '同一个化学方程式，如果反应物或生成物的状态不同，反应热也不一样。比如同样生成水，水蒸气和液态水所含的能量就不同，对应的 ΔH 自然不同。所以书写反应热相关的方程式时，必须标清楚每种物质是气态、液态还是固态。' },
      { type: 'warn', label: '易错·ΔH 的符号与单位', text: '很多同学把"放热"和正负号弄反：<strong>放热反应的 ΔH 是负数</strong>（体系能量降低），吸热反应的 ΔH 是正数，千万别记反。另外 ΔH 的常用单位是 kJ·mol⁻¹（千焦每摩尔），这里的"每摩尔"指的是按所给化学计量数进行 1 摩尔反应，不是指某一种物质。' },
      { type: 'example', label: '例题·用键能算焓变', text: '已知断开 1 摩尔 H−H 键需 436 千焦，断开 1 摩尔 Cl−Cl 键需 243 千焦，形成 1 摩尔 H−Cl 键放出 431 千焦。反应 H₂ + Cl₂ → 2HCl，求 ΔH。<br><br><strong>解析</strong>：反应物断键吸能 = 436 + 243 = 679 千焦；生成物成键放能 = 2 × 431 = 862 千焦。ΔH = 反应物总键能 − 生成物总键能 = 679 − 862 = −183 千焦每摩尔。ΔH 为负，说明该反应是放热反应。' },
      { type: 'tip', label: '提示', text: '看到化学方程式先别急着算，可以用"能量高低"快速估计：燃烧、化合、中和通常放热；分解、高温下的还原（如碳还原二氧化碳）通常吸热。考试时若给了键能数据，就老老实实用"断键吸能减成键放能"去算，结果的正负直接告诉你放热还是吸热。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">能量变化曲线：反应物与生成物的能量台阶</text><rect x="60" y="90" width="240" height="44" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="118" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">反应物能量台阶</text><rect x="380" y="180" width="240" height="44" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="208" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">生成物能量台阶</text><line x1="300" y1="112" x2="380" y2="202" stroke="#d98e3a" stroke-width="2"/><text x="340" y="155" font-size="13" fill="#d98e3a" text-anchor="middle">下降即放热</text><text x="180" y="270" font-size="12" fill="#4a3724" text-anchor="middle">台阶下降：反应物高、生成物低 → 放热</text><text x="500" y="270" font-size="12" fill="#4a3724" text-anchor="middle">台阶上升则相反 → 吸热</text></svg>', caption: '图3　把反应物和生成物的能量想成两级台阶：台阶下降对应放热，台阶上升对应吸热。' }
    ],
    exercises: [
      { type: 'choice', question: '下列反应中，属于放热反应的是？', options: ['碳与二氧化碳在高温下化合', '氢氧化钡与氯化铵反应', '甲烷在氧气中燃烧', '碳酸钙高温分解'], answer: '甲烷在氧气中燃烧', explanation: '燃烧是典型的放热反应，甲烷燃烧放出大量热。碳与二氧化碳化合、氢氧化钡与氯化铵反应、碳酸钙分解都需要吸收热量或持续加热，属于吸热反应。判断时记住：燃烧、中和、金属与酸反应多放热，分解反应多吸热。' },
      { type: 'choice', question: '某反应焓变 ΔH = −57.3 千焦每摩尔，说明该反应？', options: ['吸热，生成物能量更高', '放热，生成物能量更低', '既不吸热也不放热', '无法判断方向'], answer: '放热，生成物能量更低', explanation: 'ΔH 为负值表示放热反应。根据 ΔH = H(产物) − H(反应物)，当 ΔH < 0 时产物的总焓小于反应物，即生成物总能量更低，多余的能量以热的形式放出，所以选"放热，生成物能量更低"。' },
      { type: 'choice', question: '用键能判断时，若反应物的总键能大于生成物的总键能，则？', options: ['反应吸热', '反应放热', '反应不热', '键能无关'], answer: '反应放热', explanation: '公式是 ΔH = 反应物总键能 − 生成物总键能。当反应物总键能更大时，差值 ΔH 为正还是负？注意断键吸能、成键放能，反应物断键吸能多、生成物成键放能少，体系净放出热量，所以是放热。也可直接代入：反应物键能大于生成物键能，则 ΔH 计算结果为负，放热。' },
      { type: 'fill', question: '焓变 ΔH 的定义式写作：ΔH = ___（用反应产物与反应物的焓表示）。', answer: 'H(反应产物) − H(反应物)', explanation: '焓变是生成物总焓减去反应物总焓，即 ΔH = H(反应产物) − H(反应物)。顺序一定是"产物减反应物"，不能写反。若结果为负则是放热，为正则是吸热。这是整章计算反应热的基础公式。' },
      { type: 'fill', question: '吸热反应的焓变 ΔH ___ 0（填"大于"或"小于"）。', answer: '大于', explanation: '吸热反应中生成物的总焓高于反应物，根据 ΔH = H(产物) − H(反应物)，差值大于零，所以吸热反应的 ΔH 大于 0。与之相对，放热反应的 ΔH 小于 0。记清正负号与放热吸热的对应关系是这一章的基本功。' }
    ]
  });
})();
