/* ============================================================
 * 高三复习 · 计算压轴 · 专题三 热学与近代物理计算
 * 课时14：热力学第一定律与能量守恒计算
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u14',
    name: '热力学第一定律与能量守恒计算（ΔU = Q + W、内能变化、做功与热传递符号判断）',
    chapter: '计算压轴 · 专题三 热学与近代物理计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、内能是什么' },
      { type: 'paragraph', text: '内能是物体内部所有分子无规则运动的动能，加上分子之间相互作用的势能的总和。对理想气体来说，由于分子间几乎没有相互作用力，势能可以忽略，内能只跟温度有关：温度越高，分子平均动能越大，内能就越大。也就是说，理想气体的内能只由温度 T 决定。' },
      { type: 'keypoint', label: '重点·内能与温度', text: '<strong>理想气体的内能只与温度有关：温度升高，内能增加（ΔU > 0）；温度降低，内能减少（ΔU < 0）。</strong><br>体积或压强单独变化，只要温度不变，理想气体内能就不变。' },
      { type: 'heading', text: '二、改变内能的两种方式' },
      { type: 'paragraph', text: '要让一杯水的内能增加，要么用火加热（热传递），要么用力搅拌、摩擦（做功）。做功和热传递在改变内能上是等效的，但它们本质不同：做功是其他形式的能和内能的转化，热传递是内能的转移。' },
      { type: 'list', items: ['做功：通过机械运动改变内能，例如压缩气体、摩擦生热', '热传递：高温物体把内能"传"给低温物体，例如加热、散热', '两者等效：1 J 的功和 1 J 的热量在改变内能上效果相同', '联系：Q 与 W 共同决定内能变化 ΔU'] },
      { type: 'heading', text: '三、热力学第一定律 ΔU = Q + W' },
      { type: 'paragraph', text: '做功和热传递都能改变内能，它们共同决定了内能的变化量。这就是热力学第一定律，写成公式：ΔU = Q + W。记住这里 W 表示"外界对气体做的功"。外界把气体压缩，对气体做功，W 为正；气体膨胀把外界推开，是气体对外界做功，相当于外界对气体做负功，W 为负。' },
      { type: 'keypoint', label: '重点·符号规定', text: '<strong>ΔU = Q + W，其中 W 是外界对气体做的功。</strong><br>吸热 Q > 0，放热 Q < 0；<br>外界压缩气体 W > 0，气体膨胀对外做功 W < 0；<br>内能增加 ΔU > 0，内能减少 ΔU < 0。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">热力学第一定律：ΔU = Q + W</text><rect x="120" y="90" width="150" height="70" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="195" y="120" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">吸热 Q</text><text x="195" y="142" font-size="12" fill="#234b45" text-anchor="middle">(+吸热 −放热)</text><rect x="410" y="90" width="150" height="70" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="485" y="120" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">外界做功 W</text><text x="485" y="142" font-size="12" fill="#234b45" text-anchor="middle">(+压缩 −膨胀)</text><rect x="265" y="220" width="150" height="70" rx="10" fill="#4fb3a5"/><text x="340" y="250" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">内能变化 ΔU</text><text x="340" y="272" font-size="12" fill="#234b45" text-anchor="middle">= Q + W</text><line x1="195" y1="160" x2="320" y2="220" stroke="#2e9e8f" stroke-width="2"/><polygon points="320,214 320,226 332,220" fill="#2e9e8f"/><line x1="485" y1="160" x2="360" y2="220" stroke="#2e9e8f" stroke-width="2"/><polygon points="360,214 360,226 372,220" fill="#2e9e8f"/></svg>', caption: '图1　热力学第一定律 ΔU = Q + W：吸热与外界做功共同决定内能的变化。' },
      { type: 'heading', text: '四、符号判断三字诀' },
      { type: 'paragraph', text: '做题时先把 Q、W 的符号定下来，再相加得 ΔU。口诀是：吸热 Q 为正，放热为负；外界压气体（体积变小）W 为正，气体膨胀（体积变大）W 为负。最后 ΔU = Q + W，正表示内能增加、温度升高，负表示内能减少、温度降低。' },
      { type: 'list', items: ['看热量：吸热 Q>0，放热 Q<0', '看体积：压缩 V 变小 → W>0；膨胀 V 变大 → W<0', '套公式：ΔU = Q + W', '看 ΔU 正负：正→升温增内能；负→降温减内能'] },
      { type: 'warn', label: '易错', text: '<strong>最容易错的是 W 的正负：气体膨胀时 W 是"负"的，因为那是气体对外界做功，等于外界对气体做负功。</strong><br>很多同学误把"气体对外做功"写成 W>0，结果 ΔU 符号全反。牢记本公式的 W 是"外界对气体做的功"。' },
      { type: 'heading', text: '五、典型过程逐一分析' },
      { type: 'paragraph', text: '把几个常见过程列出来，符号一目了然：等温膨胀，温度不变 ΔU=0，气体对外做功 W<0，则 Q = −W > 0，即要吸热；绝热过程 Q=0，压缩则 W>0、ΔU>0 升温，膨胀则 W<0、ΔU<0 降温。' },
      { type: 'table', headers: ['过程', 'Q', 'W', 'ΔU'], rows: [['等温膨胀', '吸热 +', '膨胀 −', '0'], ['等温压缩', '放热 −', '压缩 +', '0'], ['绝热压缩', '0', '压缩 +', '增加 +'], ['绝热膨胀', '0', '膨胀 −', '减少 −'], ['等容升温', '吸热 +', '0（体积不变）', '增加 +']] },
      { type: 'example', label: '例题·符号代入', text: '例：一定质量理想气体被压缩，外界对气体做功 W = 200 J，同时气体向外界放热 Q = −120 J。求内能变化 ΔU，并判断温度变化。<br><strong>解析</strong>：代入 ΔU = Q + W = −120 + 200 = 80 J。ΔU > 0，说明气体内能增加，因为是理想气体，内能只与温度有关，所以温度升高。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">气体膨胀做功：体积变大 W 为负</text><rect x="90" y="80" width="220" height="200" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="110" y="100" width="180" height="160" fill="#e6f4f1"/><rect x="290" y="170" width="40" height="90" fill="#4fb3a5"/><text x="310" y="280" font-size="12" fill="#234b45" text-anchor="middle">活塞</text><rect x="350" y="170" width="120" height="90" fill="#4fb3a5"/><text x="410" y="160" font-size="12" fill="#234b45" text-anchor="middle">膨胀后气体</text><line x1="290" y1="215" x2="350" y2="215" stroke="#2e9e8f" stroke-width="2"/><polygon points="350,209 350,221 362,215" fill="#2e9e8f"/><text x="540" y="160" font-size="13" fill="#234b45">体积 V 变大</text><text x="540" y="184" font-size="13" fill="#234b45">气体对外做功</text><text x="540" y="208" font-size="13" fill="#234b45">W < 0</text><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">气体推开活塞，对外做功，W 取负</text></svg>', caption: '图2　气体膨胀：体积增大，气体对外界做功，在本公式约定下 W 为负。' },
      { type: 'heading', text: '六、与气体实验定律的综合' },
      { type: 'paragraph', text: '当题目既给状态变化又问能量时，先由状态方程（或三条定律）求出末态温度、做功大小，再用 ΔU = Q + W 算内能或热量。做功也能从 p–V 图像上"曲线和横轴围成的面积"读出：膨胀时面积就是气体对外做的功的大小。' },
      { type: 'keypoint', label: '重点·p–V 图面积即功', text: '<strong>在 p–V 图像上，图线与 V 轴围成的面积等于气体做功的大小；膨胀时气体对外做功，W（外界对气体）为负。</strong><br>面积 S = p × ΔV（压强近似不变时）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">p–V 图：曲线下面积 = 做功大小</text><rect x="90" y="70" width="500" height="200" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="120" y1="250" x2="560" y2="250" stroke="#234b45" stroke-width="2"/><line x1="120" y1="90" x2="120" y2="250" stroke="#234b45" stroke-width="2"/><text x="335" y="278" font-size="13" fill="#234b45" text-anchor="middle">体积 V</text><path d="M 160 230 L 480 130 L 480 250 Z" fill="#4fb3a5" opacity="0.55"/><path d="M 160 230 L 480 130" stroke="#4fb3a5" stroke-width="3" fill="none"/><text x="330" y="195" font-size="13" fill="#234b45" text-anchor="middle">阴影面积 = p×ΔV = 做功大小</text><text x="540" y="110" font-size="12" fill="#234b45" text-anchor="middle">膨胀方向</text><text x="335" y="300" font-size="13" fill="#234b45" text-anchor="middle">气体从左侧膨胀到右侧，对外做功</text></svg>', caption: '图3　p–V 图中曲线与横轴围成的面积等于气体做功的大小，膨胀时对外做功。' },
      { type: 'tip', label: '提示', text: '<strong>三步走：先判 Q 符号、再判 W 符号、最后 ΔU = Q + W。</strong><br>把"吸热/放热""压缩/膨胀"翻译成符号，代入公式就完事。理想气体别忘了"内能只由温度定"，ΔU 正负直接告诉你升温和降温。' },
      { type: 'example', label: '例题·p–V 综合', text: '例：1 mol 理想气体从状态 A（p=1.0×10⁵ Pa，V=1.0 m³）等压膨胀到 V=2.0 m³，此过程吸热 Q = 3.0×10⁵ J。求外界对气体做的功 W 和内能变化 ΔU。<br><strong>解析</strong>：等压膨胀，气体对外做功大小 = p × ΔV = 1.0×10⁵ × (2.0 − 1.0) = 1.0×10⁵ J，所以外界对气体做功 W = −1.0×10⁵ J。由 ΔU = Q + W = 3.0×10⁵ + (−1.0×10⁵) = 2.0×10⁵ J > 0，内能增加、温度升高。' }
    ],
    exercises: [
      { type: 'choice', question: '关于热力学第一定律 ΔU = Q + W（W 为外界对气体做的功），下列说法正确的是？', options: ['气体膨胀时 W > 0', '气体被压缩时 W > 0', '放热时 Q > 0', '内能减少时 ΔU > 0'], answer: '气体被压缩时 W > 0', explanation: '公式规定 W 是外界对气体做的功。气体被压缩，外界对气体做正功，W > 0；气体膨胀是气体对外界做功，W < 0。放热 Q < 0；内能减少 ΔU < 0。因此只有"气体被压缩时 W > 0"正确。' },
      { type: 'choice', question: '一定质量理想气体经历等温膨胀过程，下列关于 Q、W、ΔU 的判断正确的是？', options: ['ΔU > 0', 'W > 0', 'Q < 0', 'Q > 0'], answer: 'Q > 0', explanation: '理想气体等温过程温度不变，内能不变，ΔU = 0。气体膨胀对外做功，外界对气体做负功 W < 0。由 ΔU = Q + W 得 0 = Q + W，所以 Q = −W > 0，即气体要吸热才能维持温度不变，故 Q > 0 正确。' },
      { type: 'choice', question: '一定质量理想气体被压缩，外界做功 150 J，同时放热 50 J，则内能变化 ΔU 为？', options: ['100 J，内能增加', '200 J，内能增加', '100 J，内能减少', '−100 J，内能减少'], answer: '100 J，内能增加', explanation: '压缩则外界对气体做功 W = +150 J；放热 Q = −50 J。代入 ΔU = Q + W = −50 + 150 = 100 J。ΔU > 0 表示内能增加，温度升高。因此"100 J，内能增加"正确。' },
      { type: 'fill', question: '理想气体在 p–V 图像上从体积 V₁ 等压膨胀到 V₂，压强为 p，则气体对外做功的大小为 ___（用 p、V₁、V₂ 表示）。', answer: 'p × (V₂ − V₁)', explanation: '做功大小等于 p–V 图线与横轴围成面积，等压过程是个矩形，面积 = 压强 × 体积变化量 = p × (V₂ − V₁)。注意这是气体对外做功的大小；若代入 ΔU = Q + W，则 W = −p(V₂ − V₁)。' },
      { type: 'fill', question: '气体绝热膨胀（Q = 0），对外做功 80 J，则 ΔU = ___ J，内能 ___（填"增加"或"减少"）。', answer: '−80|减少', explanation: '绝热过程 Q = 0。气体对外做功，外界对气体做负功 W = −80 J。由 ΔU = Q + W = 0 + (−80) = −80 J。ΔU < 0 表示内能减少、温度降低。两空分别为 −80 和减少。' }
    ]
  });
})();
