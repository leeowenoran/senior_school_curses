/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题二 气体、固体和液体
 * 课时4：气体实验定律：玻意耳、查理、盖-吕萨克定律
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u4',
    name: '气体实验定律：玻意耳、查理、盖-吕萨克定律',
    chapter: '热学与近代物理 · 专题二 气体、固体和液体',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、气体状态的描述与三条实验定律' },
      { type: 'paragraph', text: '一定质量的气体，可以用三个量描述它的状态：压强 p、体积 V、温度 T（用热力学温度，单位是 K）。我们平时说的温度 t 是摄氏温度，单位 ℃，它与 T 的关系是 T = t + 273。三条实验定律，分别研究"某一个量不变时，另外两个量的关系"。' },
      { type: 'list', items: ['玻意耳定律：温度不变，p 与 V 成反比', '查理定律：体积不变，p 与 T 成正比', '盖-吕萨克定律：压强不变，V 与 T 成正比'] },
      { type: 'keypoint', label: '重点·三大定律共性', text: '<strong>三条定律都针对"一定质量的气体"，而且温度必须用热力学温度 T（K），绝不能拿摄氏温度 t 直接代入比例式。</strong>只要质量不变，三者可统一为理想气体状态方程。' },
      { type: 'heading', text: '二、玻意耳定律（温度不变）' },
      { type: 'paragraph', text: '一定质量的气体，温度保持不变时，压强 p 与体积 V 的乘积是一个常量：p × V = 常量，也就是 p₁ × V₁ = p₂ × V₂。体积被压缩变小，压强就变大；体积膨胀变大，压强就变小。' },
      { type: 'keypoint', label: '重点·玻意耳定律', text: '<strong>玻意耳定律：温度 T 不变时，p₁ × V₁ = p₂ × V₂。</strong>在 p-V 图上它是一条双曲线的一支，温度越高曲线位置越靠外。' },
      { type: 'example', label: '例题·玻意耳定律', text: '例：密闭气体体积从 2.0 L 被压缩到 1.0 L，初压 1.0 atm，温度不变，求末态压强。<br><strong>解析</strong>：由 p₁V₁ = p₂V₂ 得 p₂ = p₁V₁ / V₂ = 1.0 × 2.0 / 1.0 = 2.0 atm。体积减半，压强加倍。' },
      { type: 'warn', label: '易错', text: '<strong>玻意耳定律只适用于"质量一定、温度不变"。</strong>p-V 图像是双曲线而不是直线；比较两条等温线时，温度越高曲线越靠外（整体位置更高）。若过程中漏气或充气则不能直接用。' },
      { type: 'heading', text: '三、查理定律（体积不变）' },
      { type: 'paragraph', text: '一定质量的气体，体积不变时，压强 p 与热力学温度 T 成正比：p / T = 常量，即 p₁ / T₁ = p₂ / T₂。这里除的是 T（K），不是 t（℃）。' },
      { type: 'keypoint', label: '重点·查理定律', text: '<strong>查理定律：体积 V 不变时，p₁ / T₁ = p₂ / T₂。</strong>在 p-T 图上是一条过原点的直线，其斜率越大表示体积越小。' },
      { type: 'tip', label: '提示', text: '<strong>查理定律的"摄氏形式"是 p = p₀ × (1 + t / 273)，其中 p₀ 是 0 ℃ 时的压强。</strong>但一轮复习建议直接用 p / T = 常量更稳妥，避免记错系数而出错。' },
      { type: 'heading', text: '四、盖-吕萨克定律（压强不变）' },
      { type: 'paragraph', text: '一定质量的气体，压强不变时，体积 V 与热力学温度 T 成正比：V / T = 常量，即 V₁ / T₁ = V₂ / T₂。例如给气球加热（压强近似等于大气压），它就膨胀变大。' },
      { type: 'keypoint', label: '重点·盖-吕萨克定律', text: '<strong>盖-吕萨克定律：压强 p 不变时，V₁ / T₁ = V₂ / T₂。</strong>在 V-T 图上是一条过原点的直线，斜率越大表示压强越小。' },
      { type: 'table', headers: ['定律', '不变的量', '关系式', '图像特征'], rows: [['玻意耳', '温度 T', 'p₁V₁ = p₂V₂', 'p-V 图为双曲线'], ['查理', '体积 V', 'p₁/T₁ = p₂/T₂', 'p-T 图为过原点直线'], ['盖-吕萨克', '压强 p', 'V₁/T₁ = V₂/T₂', 'V-T 图为过原点直线']] },
      { type: 'example', label: '例题·查理定律', text: '例：一定质量气体在体积不变下从 27 ℃ 升温到 127 ℃，初压 1.0 atm，求末压。<br><strong>解析</strong>：T₁ = 27 + 273 = 300 K，T₂ = 127 + 273 = 400 K。由 p₁/T₁ = p₂/T₂ 得 p₂ = p₁ × T₂ / T₁ = 1.0 × 400 / 300 ≈ 1.33 atm。' },
      { type: 'warn', label: '易错', text: '<strong>代入定律前务必把摄氏温度 t 换成热力学温度 T = t + 273（更精确是 273.15）。</strong>很多同学直接拿 t 代入 p / T，得到错误结论。牢记：比例式里的温度是 T，绝不能是 t。' },
      { type: 'heading', text: '五、解题方法归纳' },
      { type: 'paragraph', text: '实验定律题的套路很固定：先判断"哪两个量不变"，选定对应的定律；统一单位（压强、体积前后单位一致即可，温度必须用 K），再列方程求解。' },
      { type: 'list', items: ['第一步：明确气体质量不变', '第二步：找出不变的量，选定对应定律', '第三步：摄氏温度先加 273 变成 T', '第四步：列出 p₁V₁/T₁ = p₂V₂/T₂ 的对应特例'] },
      { type: 'tip', label: '提示', text: '<strong>三条定律可统一写成 p₁V₁/T₁ = p₂V₂/T₂，只要质量不变，单独用哪条都只是"某量不变"的特例。</strong>记牢这个统一式，就不必死记三条定律各自的形式。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">玻意耳定律：T 不变时 p-V 双曲线</text><line x1="80" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="80" y1="250" x2="80" y2="60" stroke="#234b45" stroke-width="2"/><polyline points="100,225 160,180 240,150 340,128 460,112 600,102" fill="none" stroke="#2e9e8f" stroke-width="3"/><polyline points="100,205 160,165 240,138 340,118 460,104 600,95" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="500" y="88" font-size="13" fill="#1f7a6e" font-weight="bold">T₂ &gt; T₁</text><text x="430" y="125" font-size="13" fill="#234b45">T₁</text><text x="360" y="272" font-size="13" fill="#234b45">体积 V →</text><text x="50" y="150" font-size="13" fill="#234b45" text-anchor="middle" transform="rotate(-90 50 150)">压强 p</text></svg>', caption: '图1　玻意耳定律：温度不变时 p 与 V 成反比，p-V 图为双曲线，温度越高曲线越靠外。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">查理定律：V 不变时 p-T 过原点直线</text><line x1="80" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="80" y1="250" x2="80" y2="60" stroke="#234b45" stroke-width="2"/><line x1="80" y1="250" x2="520" y2="90" stroke="#2e9e8f" stroke-width="3"/><text x="300" y="170" font-size="13" fill="#234b45">p ∝ T（V 不变）</text><text x="360" y="272" font-size="13" fill="#234b45">温度 T(K) →</text><text x="50" y="150" font-size="13" fill="#234b45" text-anchor="middle" transform="rotate(-90 50 150)">压强 p</text></svg>', caption: '图2　查理定律：体积不变时压强与热力学温度成正比，p-T 图为过原点的直线。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">盖-吕萨克定律：p 不变时 V-T 过原点直线</text><line x1="80" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="80" y1="250" x2="80" y2="60" stroke="#234b45" stroke-width="2"/><line x1="80" y1="250" x2="520" y2="90" stroke="#2e9e8f" stroke-width="3"/><text x="300" y="170" font-size="13" fill="#234b45">V ∝ T（p 不变）</text><text x="360" y="272" font-size="13" fill="#234b45">温度 T(K) →</text><text x="50" y="150" font-size="13" fill="#234b45" text-anchor="middle" transform="rotate(-90 50 150)">体积 V</text></svg>', caption: '图3　盖-吕萨克定律：压强不变时体积与热力学温度成正比，V-T 图为过原点的直线。' }
    ],
    exercises: [
      { type: 'choice', question: '玻意耳定律的适用条件是？', options: ['一定质量气体，压强不变', '一定质量气体，温度不变', '体积不变', '任何气体任何情况'], answer: '一定质量气体，温度不变', explanation: '玻意耳定律的内容是：一定质量的气体，在温度保持不变时，压强与体积成反比，即 p₁V₁ = p₂V₂。它要求气体的质量不变且温度恒定，本质上是理想气体状态方程在 T 不变时的特例。若质量变化或温度变化则不能套用。' },
      { type: 'choice', question: '一定质量的气体在体积不变的条件下升高温度，其压强将如何变化？', options: ['压强不变', '压强减小', '压强增大（p 与 T 成正比）', '压强先增大后减小'], answer: '压强增大（p 与 T 成正比）', explanation: '体积不变时遵循查理定律 p / T = 常量，压强与热力学温度 T 成正比。温度升高（T 增大），压强随之增大。注意必须用热力学温度 T = t + 273 代入，不能直接用摄氏温度。' },
      { type: 'choice', question: '关于摄氏温度 t 与热力学温度 T 的关系，正确的是？', options: ['T = t − 273', 'T = t + 273', 't = T + 273', 'T = 273 − t'], answer: 'T = t + 273', explanation: '热力学温度 T 与摄氏温度 t 的换算关系是 T = t + 273（更精确为 273.15）。热力学温度的零点为 −273 ℃（绝对零度）。在气体实验定律和状态方程中，温度必须统一用热力学温度 T（单位 K）。' },
      { type: 'fill', question: '玻意耳定律的表达式为 p₁V₁ = ______（用末态压强与体积表示）。', answer: 'p₂V₂', explanation: '玻意耳定律：一定质量气体温度不变时，压强与体积成反比，即初末态满足 p₁V₁ = p₂V₂（乘积为常量）。解题时压强、体积单位前后一致即可，但温度必须不变。' },
      { type: 'fill', question: '查理定律的表达式为 p₁ / T₁ = ______（用末态压强与热力学温度表示）。', answer: 'p₂ / T₂', explanation: '查理定律：一定质量气体体积不变时，压强与热力学温度成正比，即 p₁/T₁ = p₂/T₂。关键是温度必须用热力学温度 T（K），若要写成摄氏形式需用 p = p₀(1 + t/273)，但建议直接使用 T 更稳妥。' }
    ]
  });
})();
