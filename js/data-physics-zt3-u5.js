/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题二 气体、固体和液体
 * 课时5：理想气体状态方程与气体图像问题（p-V、p-T、V-T）
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u5',
    name: '理想气体状态方程与气体图像问题（p-V、p-T、V-T）',
    chapter: '热学与近代物理 · 专题二 气体、固体和液体',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、理想气体与状态方程' },
      { type: 'paragraph', text: '理想气体是一个理论模型，它忽略了分子本身的大小和分子之间的作用力。实际气体在温度不太低、压强不太大时，都近似服从理想气体规律。理想气体状态方程把压强 p、体积 V、温度 T 三者统一在一个式子中。' },
      { type: 'keypoint', label: '重点·状态方程', text: '<strong>理想气体状态方程（质量不变）：p × V / T = 常量，即 p₁V₁ / T₁ = p₂V₂ / T₂。</strong>更一般的形式是 pV = nRT，其中 n 是物质的量、R 是常量。' },
      { type: 'list', items: ['质量不变时 pV / T = 常量', '通用形式 pV = nRT（n 为物质的量）', '温度 T 必须用热力学温度 K', '理想气体不计分子势能，内能只由温度决定'] },
      { type: 'heading', text: '二、从实验定律到状态方程' },
      { type: 'paragraph', text: '玻意耳、查理、盖-吕萨克三条定律，其实都是理想气体状态方程在"某一个量不变"时的特例。例如温度 T 不变时，方程退化为 p₁V₁ = p₂V₂。掌握了统一方程，就不必死记三条定律。' },
      { type: 'keypoint', label: '重点·统一方程', text: '<strong>状态方程是"总纲"：只要气体质量不变，任意两个状态都满足 p₁V₁ / T₁ = p₂V₂ / T₂。</strong>把不变量去掉，就得到对应实验定律。' },
      { type: 'example', label: '例题·状态方程', text: '例：一定质量气体，初态 p₁ = 1 atm、V₁ = 2 L、T₁ = 300 K；末态 p₂ = 2 atm、V₂ = 1 L，求 T₂。<br><strong>解析</strong>：由 p₁V₁/T₁ = p₂V₂/T₂，得 T₂ = p₂V₂T₁ / (p₁V₁) = 2 × 1 × 300 / (1 × 2) = 300 K，说明温度没变（正是等温过程）。' },
      { type: 'warn', label: '易错', text: '<strong>状态方程要求"质量不变"；若出现充气、漏气（质量变化），不能直接套 pV/T = 常量，要考虑总质量守恒。</strong>例如向容器再充入气体，应把充入部分与原有部分的总物质的量合起来算。' },
      { type: 'heading', text: '三、气体图像问题（p-V、p-T、V-T）' },
      { type: 'paragraph', text: '气体状态变化常画成图像来研究。在 p-V 图里，等温线是双曲线，温度越高曲线越靠外（整体在更右上方）；在 p-T 图里，等容线是从原点出发的直线，斜率越大表示体积越小；在 V-T 图里，等压线也是从原点出发的直线，斜率越大表示压强越小。' },
      { type: 'list', items: ['p-V 图：等温线为双曲线，T 越大离原点越远', 'p-T 图：等容线为过原点直线，斜率正比于 1/V', 'V-T 图：等压线为过原点直线，斜率正比于 1/p'] },
      { type: 'keypoint', label: '重点·看图像步骤', text: '<strong>看图像先认坐标轴，判断是等温、等容还是等压过程；过原点的直线一般对应"某量不变"的特例。</strong>结合 pV/T = 常量，可把图像上的每一点读成一组 (p, V, T)。' },
      { type: 'table', headers: ['过程类型', 'p-V 图', 'p-T 图', 'V-T 图'], rows: [['等温（T 不变）', '双曲线', '竖直线', '水平线'], ['等容（V 不变）', '竖直线', '过原点直线', '水平线'], ['等压（p 不变）', '水平线', '水平线', '过原点直线']] },
      { type: 'tip', label: '提示', text: '<strong>图像法判断：过原点的直线必对应"某量恒定"的特例；曲线（如 p-V 图上的双曲线）一般对应等温过程。</strong>分清三种坐标轴的读图习惯，是图像题得分关键。' },
      { type: 'heading', text: '四、图像中的斜率与面积含义' },
      { type: 'paragraph', text: '在 p-V 图中，曲线下方的面积表示气体对外界做的功（外界对气体做功则为其相反数）。在 p-T 图中，等容线的斜率 p/T = nR/V，斜率越大体积越小。在 V-T 图中，等压线的斜率 V/T = nR/p，斜率越大压强越小。' },
      { type: 'keypoint', label: '重点·几何意义', text: '<strong>p-V 图曲线下面积 = 气体做功；p-T 图等容线斜率正比于 1/V（越陡体积越小）；V-T 图等压线斜率正比于 1/p（越陡压强越小）。</strong>这些几何意义常与热力学第一定律结合考查。' },
      { type: 'example', label: '例题·图像比较', text: '例：在 p-V 图中，同一温度下两条等温线，温度更高的曲线整体在更外侧；在 p-T 图中比较两条等容线，斜率大的对应体积更小的容器。<br><strong>解析</strong>：等温线 p = 常量 / V，T 越大常量越大，整条曲线越靠外；等容线 p = (nR/V) T，斜率 nR/V 越大说明 V 越小。' },
      { type: 'warn', label: '易错', text: '<strong>不要把"过原点的直线"想当然当成等温线。</strong>在 p-V 图中，过原点的直线没有特殊物理意义，只有双曲线才是等温线；过原点的直线出现在 p-T、V-T 图中才对应等容或等压。' },
      { type: 'heading', text: '五、方法归纳' },
      { type: 'paragraph', text: '图像题分两步：先认过程（等温、等容、等压），再列方程或利用几何意义（面积、斜率）求解。每一步都要把温度换成 T（K）。' },
      { type: 'list', items: ['第一：看坐标轴，确定是哪种图', '第二：识别等温（双曲线/竖或横线）、等容、等压线', '第三：用 pV/T = 常量 联系各状态', '第四：p-V 图下面积表示气体做功'] },
      { type: 'tip', label: '提示', text: '<strong>遇到多个状态变化时，先写出每个状态的 (p, V, T) 具体数值，再两两代入 pV/T = 常量，比直接盯着图像更可靠。</strong>图像只是辅助，列式计算才是根本。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">p-V 图：两条不同温度的等温线</text><line x1="80" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="80" y1="250" x2="80" y2="60" stroke="#234b45" stroke-width="2"/><polyline points="100,220 170,165 260,135 370,115 500,100 610,92" fill="none" stroke="#2e9e8f" stroke-width="3"/><polyline points="100,205 170,150 260,122 370,104 500,90 610,83" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="520" y="82" font-size="13" fill="#1f7a6e" font-weight="bold">T₂ &gt; T₁</text><text x="360" y="272" font-size="13" fill="#234b45">体积 V →</text><text x="50" y="150" font-size="13" fill="#234b45" text-anchor="middle" transform="rotate(-90 50 150)">压强 p</text></svg>', caption: '图1　p-V 图中等温线为双曲线，温度越高（T₂）曲线越靠外。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">p-T 图：两条不同体积的等容线</text><line x1="80" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="80" y1="250" x2="80" y2="60" stroke="#234b45" stroke-width="2"/><line x1="80" y1="250" x2="520" y2="80" stroke="#2e9e8f" stroke-width="3"/><line x1="80" y1="250" x2="430" y2="110" stroke="#4fb3a5" stroke-width="3"/><text x="300" y="160" font-size="13" fill="#234b45">V₁（斜率大）</text><text x="380" y="200" font-size="13" fill="#234b45">V₂（斜率小）</text><text x="360" y="272" font-size="13" fill="#234b45">温度 T(K) →</text><text x="50" y="150" font-size="13" fill="#234b45" text-anchor="middle" transform="rotate(-90 50 150)">压强 p</text></svg>', caption: '图2　p-T 图中等容线过原点，斜率越大表示体积越小。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">V-T 图：两条不同压强的等压线</text><line x1="80" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="80" y1="250" x2="80" y2="60" stroke="#234b45" stroke-width="2"/><line x1="80" y1="250" x2="520" y2="80" stroke="#2e9e8f" stroke-width="3"/><line x1="80" y1="250" x2="430" y2="110" stroke="#4fb3a5" stroke-width="3"/><text x="300" y="160" font-size="13" fill="#234b45">p₁（斜率大）</text><text x="380" y="200" font-size="13" fill="#234b45">p₂（斜率小）</text><text x="360" y="272" font-size="13" fill="#234b45">温度 T(K) →</text><text x="50" y="150" font-size="13" fill="#234b45" text-anchor="middle" transform="rotate(-90 50 150)">体积 V</text></svg>', caption: '图3　V-T 图中等压线过原点，斜率越大表示压强越小。' }
    ],
    exercises: [
      { type: 'choice', question: '对于一定质量的理想气体，其状态方程是（T 为热力学温度）？', options: ['p₁ + V₁ = p₂ + V₂', 'p₁V₁/T₁ = p₂V₂/T₂', 'p₁V₁ = p₂V₂（任意情况）', 'p₁/T₁ = p₂/T₂（任意情况）'], answer: 'p₁V₁/T₁ = p₂V₂/T₂', explanation: '理想气体状态方程（质量不变）为 pV/T = 常量，即任意两状态满足 p₁V₁/T₁ = p₂V₂/T₂。后两个选项只有在特定量不变时才成立（分别是等温、等容），不能作为普遍关系；第一个选项没有物理意义。' },
      { type: 'choice', question: '在 p-V 图中，曲线下方的面积表示？', options: ['气体的内能', '气体对外界做的功', '气体的温度', '气体的质量'], answer: '气体对外界做的功', explanation: '在 p-V 图上，由于功的微元 dW = p dV，过程曲线与 V 轴之间的面积就等于气体对外界做的功（压强大体积变化越大，做功越多）。若体积增大，气体对外做功；若体积减小，外界对气体做功，面积为其相反数。' },
      { type: 'choice', question: '在 p-T 图中，两条过原点的等容线，斜率越大的对应体积？', options: ['越大', '越小', '与体积无关', '无法确定'], answer: '越小', explanation: 'p-T 图中的等容线满足 p = (nR/V) T，是一条过原点的直线，其斜率等于 nR/V。斜率越大，说明 1/V 越大，即体积 V 越小。同理在 V-T 图中，等压线斜率越大表示压强越小。' },
      { type: 'fill', question: '理想气体状态方程的另一种常用写法是 pV = ______（用物质的量和气体常量表示）。', answer: 'nRT', explanation: '理想气体状态方程可写成 pV = nRT，其中 n 为气体的物质的量，R 为普适气体常量，T 为热力学温度。当质量（即 n）不变时，两边除以 T 即得 pV/T = 常量，这就是实验定律的统一形式。' },
      { type: 'fill', question: '摄氏温度 t（℃）与热力学温度 T（K）的换算关系为 T = ______。', answer: 't + 273', explanation: '热力学温度 T 与摄氏温度 t 的换算为 T = t + 273（更精确 273.15）。在气体定律和状态方程中，所有温度都必须用热力学温度 T（单位 K）代入，不能直接使用摄氏温度 t。' }
    ]
  });
})();
