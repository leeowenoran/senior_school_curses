/* ============================================================
 * 高三复习 · 力学综合 · 专题五 机械能与能量
 * 课时20：功与功率
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u20',
    name: '功与功率',
    chapter: '力学综合 · 专题五 机械能与能量',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是功：力在"空间"上的积累' },
      { type: 'paragraph', text: '平时说"做功"，意思是"用力让物体移动了一段距离"。比如你推着箱子在平地上走，箱子被推动了，你就对它做了功。物理学把这种现象定量化：功等于力的大小、位移的大小、以及两者夹角余弦的乘积。它衡量的是"力在位移方向上到底起了多大作用"。' },
      { type: 'keypoint', label: '重点·恒力做功公式', text: '<strong>恒力做功 W = F × l × cosα。</strong>其中 F 是力的大小，l 是物体的位移大小，α 是力 F 和位移方向之间的夹角。cosα 表示"力在位移方向上的分量占了多少"。' },
      { type: 'paragraph', text: '为什么要有 cosα？因为只有当力的方向和物体移动方向一致时，力才全部用来"推着走"。如果力是斜着的，只有沿着位移方向的那一部分才真正做了功，夹角越大，真正起作用的部分越小，这正是 cosα 在公式里的原因。' },
      { type: 'list', items: ['α < 90° 时，cosα > 0，力帮着物体前进，做<strong>正功</strong>', 'α = 90° 时，cosα = 0，力和位移垂直，力不起作用，<strong>不做功</strong>', 'α > 90° 时，cosα < 0，力和位移方向相反，做<strong>负功</strong>（阻碍运动）'] },
      { type: 'table', headers: ['夹角 α', 'cosα 符号', '做功情况', '物理含义'], rows: [['α < 90°', '正', '做正功', '力推动物体前进'], ['α = 90°', '零', '不做功', '力与位移垂直，无效果'], ['α > 90°', '负', '做负功', '力阻碍物体运动']] },
      { type: 'example', label: '例题·算一算推力做的功', text: '用 10 N 的水平力推着箱子在水平地面上前进了 5 m，力的方向和位移方向完全相同（α = 0°）。<br><br><strong>解析</strong>：<br>W = F × l × cosα = 10 × 5 × cos0° = 10 × 5 × 1 = 50（J）。<br>因为力与位移同向，全部力都用来推动箱子，所以做了 50 焦耳的正功。' },
      { type: 'warn', label: '易错', text: '千万别把"位移 l"和"路程"搞混。<strong>公式里的 l 是位移（起点到终点的有向直线距离），不是物体实际走过的弯曲路程。</strong>另外 cosα 里 α 是"力"与"位移"的夹角，不是力与某个随便方向的夹角，看清题目给的是哪个角。' },
      { type: 'heading', text: '二、功率：做功的快慢' },
      { type: 'paragraph', text: '两个人都能把一桶水从一楼提到三楼，做的功一样多。但小伙子十几秒就提上去了，老人家用了一分钟——谁"更猛"？这就引出了功率：功率表示单位时间内做多少功，也就是做功的快慢。' },
      { type: 'keypoint', label: '重点·平均功率', text: '<strong>平均功率 P = W / t。</strong>它表示一段时间 t 内平均每秒做多少功。比如 10 秒做了 1000 焦耳的功，平均功率就是 1000 / 10 = 100 W。' },
      { type: 'paragraph', text: '平均功率看的是"整段过程的总功除以总时间"。但很多时候我们关心某一瞬间的快慢，比如汽车刚起步和高速巡航时发动机出力很不一样，这时就要用瞬时功率。' },
      { type: 'keypoint', label: '重点·瞬时功率', text: '<strong>瞬时功率 P = F × v × cosα，</strong>其中 v 是瞬时速度，α 是力 F 与速度 v 的夹角。<strong>当 F 与 v 方向相同时（α = 0°），P = F × v。</strong>这是机车、起重机等题目里最常用的形式。' },
      { type: 'tip', label: '提示', text: '<strong>功率的单位是瓦特，符号 W；1 W = 1 J/s。</strong>日常汽车、电机常标千瓦（kW），1 kW = 1000 W。做题时若题目给的是 kW，记得先换算成 W 再代入公式。' },
      { type: 'example', label: '例题·起重机提升重物的瞬时功率', text: '起重机用 2000 N 的竖直向上的拉力，以 0.5 m/s 的恒定速度吊起货物，拉力与速度同向。<br><br><strong>解析</strong>：<br>拉力与速度同向，α = 0°，所以 P = F × v = 2000 × 0.5 = 1000 W = 1 kW。<br>即起重机此时正以 1 千瓦的功率工作。' },
      { type: 'heading', text: '三、机车启动的两种方式' },
      { type: 'paragraph', text: '汽车、火车怎么从静止加速到最快？这里有两种典型情况。一种是"发动机功率保持不变"，另一种是"先保持加速度不变、功率逐渐增大，达到额定功率后再转为恒定功率"。两种方式的加速过程和最终速度都不同。' },
      { type: 'paragraph', text: '对于恒定功率启动：功率 P 不变，由 P = F × v 知，速度 v 越大，牵引力 F 越小。牵引力减小则加速度 a = (F − f) / m 也减小，所以机车做加速度越来越小的加速运动，直到 F 减小到等于阻力 f 时，加速度为零，速度达到最大 v_max = P / f。' },
      { type: 'list', items: ['恒定功率启动：P 不变，v 增大则 F 减小，a 减小，最终匀速，最大速度 v_max = P / f', '恒定加速度启动：先 a 不变（F 不变），P 随 v 增大而增大，到额定功率后转恒定功率，再加速到 v_max = P / f'] },
      { type: 'table', headers: ['启动方式', '恒定量', '速度变化', '最大速度'], rows: [['恒定功率', '功率 P', '加速度渐小的加速', 'v_max = P / f'], ['恒定加速度', '加速度 a（前期）', '先匀加速，后加速度渐小', 'v_max = P / f']] },
      { type: 'warn', label: '易错', text: '<strong>恒定加速度启动的前期，发动机功率并不是恒定的，而是在不断增大。</strong>只有当功率升到额定功率那一刻起才"封顶"不再增加。很多同学误以为整个过程功率都不变，从而算错匀加速阶段能维持的时间和位移。' },
      { type: 'tip', label: '提示', text: '无论哪种启动方式，<strong>最终的最大速度都受同一公式限制：v_max = P / f（额定功率除以阻力）。</strong>记住这个式子，遇到求"最大速度"的题先往这上面想。' },
      { type: 'example', label: '例题·求机车最大速度', text: '某机车额定功率 P = 60 kW，所受阻力 f = 3000 N 保持不变，求它能达到的最大速度。<br><br><strong>解析</strong>：<br>达到最大速度时牵引力等于阻力，F = f，且 P = F × v_max。<br>所以 v_max = P / f = 60000 / 3000 = 20 m/s。<br>即机车最快能跑到 20 米每秒。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">力与位移成角α时做的功：W = F × l × cosα</text><line x1="60" y1="262" x2="620" y2="262" stroke="#2e9e8f" stroke-width="2"/><rect x="210" y="222" width="70" height="40" rx="6" fill="#4fb3a5"/><text x="245" y="248" font-size="13" fill="#234b45" text-anchor="middle">箱子</text><line x1="245" y1="290" x2="430" y2="290" stroke="#234b45" stroke-width="3"/><polygon points="430,284 446,290 430,296" fill="#234b45"/><text x="338" y="308" font-size="13" fill="#234b45" text-anchor="middle">位移 l（水平）</text><line x1="245" y1="222" x2="370" y2="120" stroke="#234b45" stroke-width="3"/><polygon points="370,120 352,128 364,142" fill="#234b45"/><text x="330" y="150" font-size="13" fill="#234b45" text-anchor="middle">力 F</text><path d="M 285 222 A 64 64 0 0 0 245 262" fill="none" stroke="#2e9e8f" stroke-width="2"/><text x="296" y="200" font-size="13" fill="#2e9e8f">α</text><rect x="430" y="60" width="210" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="535" y="92" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">W = F × l × cosα</text><text x="535" y="114" font-size="12" fill="#234b45" text-anchor="middle">cosα 取力在位移方向的分量</text></svg>', caption: '图1　斜向上拉力推箱子，只有沿位移方向的分量 F×cosα 真正做了功。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">夹角α决定功的正负</text><rect x="40" y="70" width="190" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="135" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">α &lt; 90° 正功</text><rect x="95" y="200" width="60" height="40" rx="5" fill="#4fb3a5"/><line x1="125" y1="240" x2="240" y2="240" stroke="#234b45" stroke-width="3"/><polygon points="240,234 256,240 240,246" fill="#234b45"/><line x1="155" y1="200" x2="235" y2="150" stroke="#234b45" stroke-width="3"/><polygon points="235,150 220,156 228,168" fill="#234b45"/><rect x="245" y="70" width="190" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">α = 90° 不做功</text><rect x="300" y="200" width="60" height="40" rx="5" fill="#4fb3a5"/><line x1="330" y1="200" x2="330" y2="120" stroke="#234b45" stroke-width="3"/><polygon points="330,120 324,136 336,136" fill="#234b45"/><line x1="300" y1="220" x2="200" y2="220" stroke="#234b45" stroke-width="3" stroke-dasharray="4,4"/><rect x="450" y="70" width="190" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="545" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">α &gt; 90° 负功</text><rect x="505" y="200" width="60" height="40" rx="5" fill="#4fb3a5"/><line x1="535" y1="240" x2="420" y2="240" stroke="#234b45" stroke-width="3"/><polygon points="420,234 404,240 420,246" fill="#234b45"/><line x1="505" y1="200" x2="425" y2="150" stroke="#234b45" stroke-width="3"/><polygon points="425,150 440,156 432,168" fill="#234b45"/></svg>', caption: '图2　力与位移夹角小于、等于、大于90°时，分别做正功、不做功、负功。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">机车恒定功率启动的速度—时间图像</text><line x1="70" y1="280" x2="630" y2="280" stroke="#234b45" stroke-width="2"/><line x1="70" y1="60" x2="70" y2="280" stroke="#234b45" stroke-width="2"/><text x="58" y="280" font-size="12" fill="#234b45">0</text><text x="600" y="298" font-size="13" fill="#234b45" text-anchor="middle">时间 t</text><text x="50" y="70" font-size="13" fill="#234b45" text-anchor="middle">v</text><path d="M 70 280 Q 250 120 400 95 T 620 85" fill="none" stroke="#2e9e8f" stroke-width="3"/><line x1="70" y1="85" x2="620" y2="85" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="6,4"/><text x="300" y="78" font-size="13" fill="#4fb3a5">v_max = P / f（匀速）</text><circle cx="400" cy="95" r="5" fill="#234b45"/><text x="410" y="92" font-size="12" fill="#234b45">a 渐小</text><text x="430" y="200" font-size="13" fill="#234b45">曲线越来越平，</text><text x="430" y="220" font-size="13" fill="#234b45">说明加速度 a 变小</text></svg>', caption: '图3　恒定功率启动时，v—t 图像是一条上凸曲线，最终趋于最大速度 v_max = P/f。' }
    ],
    exercises: [
      { type: 'choice', question: '用水平力推箱子，若力与位移方向互相垂直（α = 90°），则力对箱子？', options: ['做正功', '不做功', '做负功', '做功大小等于 F × l'], answer: '不做功', explanation: '根据功的公式 W = F × l × cosα，当 α = 90° 时 cos90° = 0，因此 W = 0，力与位移垂直时不做功。力必须沿位移方向有分量才能做功，垂直方向上分量为零，所以不做功。' },
      { type: 'choice', question: '机车以恒定功率 P 启动，所受阻力恒为 f，它最终能达到的最大速度 v_max 等于？', options: ['P / f', 'f / P', 'P / m', 'm / P'], answer: 'P / f', explanation: '当机车速度达到最大时，加速度为零，牵引力 F 恰好等于阻力 f。由恒定功率关系 P = F × v_max 可得 v_max = P / f。这是机车启动问题求最大速度的通用结论，与质量 m 无关。' },
      { type: 'choice', question: '关于瞬时功率公式，当力 F 与速度 v 方向相同时，正确的表达式是？', options: ['P = F × v × cosα', 'P = F × v', 'P = W / t', 'P = F × v × sinα'], answer: 'P = F × v', explanation: '瞬时功率一般式为 P = F × v × cosα，其中 α 是力与速度的夹角。当 F 与 v 方向相同时 α = 0°，cos0° = 1，于是简化为 P = F × v。题目强调"方向相同"，因此直接选 P = F × v。' },
      { type: 'fill', question: '恒力做功公式为 W = F × l × cosα，当 0° ≤ α < 90° 时，力对物体做___功（填"正""负"或"零"）。', answer: '正', explanation: '当 α 在 0° 到 90° 之间时，cosα > 0，代入公式 W = F × l × cosα 得到 W > 0，说明力在位移方向上有正向分量，推动物体前进，因此做正功。' },
      { type: 'fill', question: '平均功率表示做功的快慢，其计算公式为 P = ___（用总功 W 和总时间 t 表示）。', answer: 'W / t', explanation: '平均功率的定义就是一段时间内做的总功除以所用的时间，即 P = W / t，单位是瓦特（W），1 W = 1 J/s。它反映的是整个过程平均每单位时间完成多少功。' }
    ]
  });
})();
