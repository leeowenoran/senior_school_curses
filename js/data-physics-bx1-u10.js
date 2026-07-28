/* ============================================================
 * 高一物理 · 必修 第一册 · 第二章 匀变速直线运动
 * 第10课时：自由落体运动
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u10',
    name: '自由落体运动',
    chapter: '必修第一册 · 第二章 匀变速直线运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是自由落体运动' },
      { type: 'paragraph', text: '自由落体运动是指：物体只在重力作用下，从静止开始下落的运动。这里有两个关键条件，一是“只受重力”，二是“初速度为零”。在现实里完全不受空气阻力很难，但当我们忽略空气阻力，或者物体比较重、下落速度不大时，就可以近似看成自由落体。' },
      { type: 'paragraph', text: '自由落体其实是匀变速直线运动的一个特例：它的初速度 v₀ = 0，加速度就是重力加速度 g。也就是说，自由落体就是加速度恒为 g 的匀加速直线运动。前面学过的公式，把 a 换成 g、x 换成下落高度 h 就能直接用。' },
      { type: 'keypoint', label: '重点·自由落体定义', text: '<strong>自由落体运动 = 只受重力 + 从静止开始下落</strong>。<br>它是初速度 v₀ = 0、加速度 a = g 的匀加速直线运动特例。<br>把前面公式里的 a 换成 g、位移 x 换成高度 h 即可使用。' },
      { type: 'list', items: [
        '条件一：只受重力作用（忽略空气阻力）',
        '条件二：初速度为零，从静止开始下落',
        '本质：a = g 的匀加速直线运动',
        '常见近似：石块、铁球等较重物体可看作自由落体'
      ] },
      { type: 'table', headers: ['常规匀变速', '自由落体对应式'], rows: [
        ['v = v₀ + a t', 'v = g t（因 v₀ = 0）'],
        ['x = v₀ t + ½ a t²', 'h = ½ g t²'],
        ['v² - v₀² = 2 a x', 'v² = 2 g h']
      ] },
      { type: 'heading', text: '二、伽利略的研究与重力加速度 g' },
      { type: 'paragraph', text: '古时候有人以为“重的物体下落快、轻的下落慢”。伽利略通过推理和实验指出：在忽略空气阻力时，轻重不同的物体下落一样快。传说他在比萨斜塔同时释放两个铁球，两球几乎同时落地，就是这个结论的经典体现。' },
      { type: 'paragraph', text: '自由落体加速度叫做重力加速度，用 g 表示。在地球表面附近，g 的大小约为 9.8 米/秒²；在做粗略计算时，常取 g = 10 米/秒² 方便估算。g 的方向总是竖直向下的。同一地点 g 基本不变，不同纬度、海拔略有差异。' },
      { type: 'keypoint', label: '重点·g 的取值', text: '重力加速度 <strong>g ≈ 9.8 米/秒²</strong>，粗略计算常取 <strong>g = 10 米/秒²</strong>。<br>方向：<strong>竖直向下</strong>。<br>自由落体公式：<strong>v = g t</strong>、<strong>h = ½ g t²</strong>、<strong>v² = 2 g h</strong>。' },
      { type: 'example', label: '例题', text: '一石子从静止自由下落，取 g = 10 米/秒²，求下落 3 秒时的速度和下落高度。<br><br><strong>解析</strong>：由 v = g t 得 v = 10 × 3 = 30 米/秒；由 h = ½ g t² 得 h = 0.5 × 10 × 3² = 5 × 9 = 45 米。所以 3 秒末速度 30 米/秒，已下落 45 米。注意 t 用秒，g 取 10 时计算最简便。' },
      { type: 'warn', label: '易错', text: '自由落体公式只在<strong>初速度为零</strong>时成立。如果物体是“被向下抛出”或“向上抛出”，就不再是自由落体，不能直接套 h = ½ g t²。另外粗略计算取 g = 10，但正式题目若未说明，应按 g = 9.8 计算。' },
      { type: 'heading', text: '三、空气阻力的影响' },
      { type: 'paragraph', text: '现实中空气阻力不能总忽略。像纸片、羽毛这类又轻又大的物体，下落时空气阻力明显，它们会飘飘悠悠地落下，比石头慢得多，这时就不能看成自由落体。而在抽成真空的管子里，羽毛和铁球会同时落地，正好验证了伽利略的结论。' },
      { type: 'paragraph', text: '判断一个下落过程能否近似为自由落体，关键看空气阻力相比重力能否忽略。密度大、形状紧凑的物体（如钢珠、石块）阻力影响小，可近似；轻飘物体则不行。这也是为什么雨滴、苹果近似可算，而树叶、纸片不可以。' },
      { type: 'tip', label: '提示', text: '做题看到“自由下落”“从静止释放”“忽略空气阻力”等字眼，就放心套自由落体三公式。若题目特意说“考虑空气阻力”，则不能用这些公式，要按受力分析另算。' },
      { type: 'keypoint', label: '重点·自由落体三公式', text: '速度：<strong>v = g t</strong><br>高度：<strong>h = ½ g t²</strong><br>速度与高度关系：<strong>v² = 2 g h</strong><br>三式都由匀变速公式令 v₀ = 0、a = g 得到。' },
      { type: 'heading', text: '四、测重力加速度与小结' },
      { type: 'paragraph', text: '我们可以用落体实验来测 g。例如让小球从一定高度自由下落，用打点计时器记录纸带，算出各点速度，画出 v-t 图像，其斜率就是 g；或者用频闪照相测出连续相等时间内的位移差，由 Δh = g T² 求出 g。这些方法本质都是把自由落体当作匀加速来处理。' },
      { type: 'list', items: [
        '自由落体：只受重力、初速为零的下落',
        '它是 a = g 的匀加速直线运动特例',
        'g ≈ 9.8 米/秒²，粗略计算取 10',
        '公式 v = g t、h = ½ g t²、v² = 2 g h',
        '空气阻力不可忽略时（纸片、羽毛）不是自由落体',
        '可用落体纸带或频闪照相测 g，斜率或 Δh = g T²'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图1　空气阻力影响下落快慢</text><line x1="120" y1="70" x2="120" y2="280" stroke="#234b45" stroke-width="2"/><line x1="360" y1="70" x2="360" y2="280" stroke="#234b45" stroke-width="2"/><circle cx="120" cy="120" r="14" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="120" y="160" font-size="13" fill="#234b45" text-anchor="middle">铁球</text><line x1="120" y1="200" x2="120" y2="270" stroke="#4fb3a5" stroke-width="3"/><text x="120" y="295" font-size="12" fill="#1f7a6e" text-anchor="middle">快（近似自由落体）</text><rect x="345" y="110" width="30" height="22" rx="3" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="360" y="158" font-size="13" fill="#234b45" text-anchor="middle">纸片</text><line x1="360" y1="200" x2="360" y2="240" stroke="#4fb3a5" stroke-width="3" stroke-dasharray="4 4"/><text x="360" y="295" font-size="12" fill="#234b45" text-anchor="middle">慢（受空气阻力）</text></svg>', caption: '图1　铁球几乎自由下落较快，纸片受空气阻力明显下落慢，二者不能都看作自由落体。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图2　自由落体的 v-t 图像</text><line x1="90" y1="280" x2="90" y2="60" stroke="#234b45" stroke-width="2"/><line x1="90" y1="280" x2="610" y2="280" stroke="#234b45" stroke-width="2"/><text x="70" y="65" font-size="14" fill="#234b45">v</text><text x="610" y="302" font-size="14" fill="#234b45">t</text><line x1="90" y1="280" x2="560" y2="90" stroke="#2e9e8f" stroke-width="3"/><circle cx="90" cy="280" r="5" fill="#4fb3a5"/><text x="110" y="270" font-size="12" fill="#1f7a6e">过原点（v₀=0）</text><text x="430" y="110" font-size="13" fill="#234b45">斜率 = g</text><text x="320" y="305" font-size="13" fill="#1f7a6e" text-anchor="middle">从原点出发的斜直线，斜率即 g</text></svg>', caption: '图2　自由落体 v-t 图从原点出发，是斜率为 g 的斜直线（初速为 0 的匀加速）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图3　测 g 的思路：用纸带求斜率</text><rect x="80" y="100" width="260" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="210" y="128" font-size="13" fill="#234b45" text-anchor="middle">落体纸带 / 频闪</text><text x="340" y="135" font-size="20" fill="#1f7a6e" text-anchor="middle">→</text><rect x="360" y="100" width="240" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="480" y="128" font-size="13" fill="#234b45" text-anchor="middle">画 v-t 图求斜率 g</text><text x="340" y="220" font-size="14" fill="#234b45" text-anchor="middle">或利用连续等时位移差 Δh = g T²</text><text x="340" y="258" font-size="13" fill="#1f7a6e" text-anchor="middle">把自由落体当匀加速，从数据反推 g</text></svg>', caption: '图3　让物体自由下落并记录数据，通过 v-t 图斜率或 Δh = gT² 反推出重力加速度 g。' }
    ],
    exercises: [
      { type: 'choice', question: '关于自由落体运动，下列说法正确的是？', options: ['初速度不为零', '只受重力且从静止开始下落', '加速度随速度增大', '重的物体下落明显更快'], answer: '只受重力且从静止开始下落', explanation: '自由落体的定义是物体只在重力作用下、从静止开始下落的运动，其初速度为零、加速度恒为 g。轻重物体在同一地点自由下落快慢相同，加速度也不随速度变化。只有“只受重力且从静止开始”这一描述正确。' },
      { type: 'choice', question: '一物体从静止自由下落，取 g = 10 米/秒²，下落 2 秒时的速度为？', options: ['10 米/秒', '20 米/秒', '5 米/秒', '40 米/秒'], answer: '20 米/秒', explanation: '自由落体速度公式 v = g t，代入 g = 10、t = 2 得 v = 10 × 2 = 20 米/秒。注意自由落体初速度为零，直接用 v = g t 即可，不用加减初速度。' },
      { type: 'choice', question: '在忽略空气阻力的真空管中，同时释放羽毛和铁球，它们会？', options: ['铁球先落地', '羽毛先落地', '同时落地', '铁球悬在空中'], answer: '同时落地', explanation: '在忽略空气阻力的真空环境中，羽毛和铁球都做自由落体运动，加速度同为 g，从静止同时释放必然同时落地。这正验证了伽利略“轻重物体下落一样快”的结论；现实中羽毛慢是因为空气阻力不可忽略。' },
      { type: 'fill', question: '自由落体运动中，物体下落高度与时间的关系为 h = ____（用 g 和 t 表示，即 ½ g t²）。', answer: '½ g t²|0.5 g t²|1/2 g t²', explanation: '自由落体初速度为零，是 a = g 的匀加速直线运动，将位移公式 x = v₀t + ½at² 中 v₀ = 0、a = g、x = h 代入，得 h = ½ g t²。粗略计算可取 g = 10 米/秒² 简化。' },
      { type: 'fill', question: '在地球表面附近，重力加速度 g 的大小约为 ____ 米/秒²（粗略计算常取 10）。', answer: '9.8', explanation: '重力加速度 g 在地球表面附近约为 9.8 米/秒²，方向竖直向下。为方便粗略估算，常取 g = 10 米/秒²。同一地点 g 基本不变，不同纬度和海拔会略有差异。' }
    ]
  });
})();
