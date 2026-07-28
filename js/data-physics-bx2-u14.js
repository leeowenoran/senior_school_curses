/* ============================================================
 * 高一物理 · 必修 第二册 · 第八章 机械能守恒定律
 * 课时14：功与功率
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u14',
    name: '功与功率',
    chapter: '必修第二册 · 第八章 机械能守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、怎样才算"做了功"' },
      { type: 'paragraph', text: '在生活里，我们说"用力推车"未必是在做功。物理学里的"功"有严格含义：一个力对物体做功，必须同时满足两个条件——一是物体受到这个力的作用，二是物体沿着力的方向（或力在位移方向上的分量方向）发生了位移。这两个条件缺一个都不算做功。' },
      { type: 'keypoint', label: '重点·做功的两个条件', text: '<strong>做功必须同时具备：①作用在物体上的力；②物体在力的方向上发生的位移。</strong>如果有力没位移（比如推墙推不动，墙没动），或者物体有位移但力的方向与位移垂直（比如手提着书包水平走路，手向上的力不做功），都不算做功。' },
      { type: 'paragraph', text: '举例体会：你用力搬一块大石头，搬得满头大汗，可石头纹丝不动，这时你对石头没有做功，因为石头没有位移。反过来，如果你把石头举高，你向上托的力让石头向上移动了一段距离，这时你就对石头做了功。' },
      { type: 'list', items: ['条件一：物体受到力的作用', '条件二：物体在力的方向上产生了位移', '两个缺一不可，否则力对物体不做功', '功是能量转化的量度，做了多少功，就伴随多少能量转移或转化'] },
      { type: 'heading', text: '二、功的大小怎么算：W = F × s × cosθ' },
      { type: 'paragraph', text: '当力的方向与物体位移方向成夹角 θ 时，只有沿着位移方向的那部分力才"有效"。把力 F 沿着位移方向和垂直位移方向拆开，真正贡献功的只是位移方向上的分量 F × cosθ。于是功的大小等于：力的大小、位移的大小、以及夹角余弦三者的乘积。' },
      { type: 'keypoint', label: '重点·功的公式', text: '<strong>功 W = F × s × cosθ。</strong>其中 F 是力的大小，s 是位移大小，θ 是力 F 与位移 s 之间的夹角。功是标量，单位叫做焦耳（符号 J），1 焦耳 = 1 牛 × 1 米。' },
      { type: 'example', label: '例题·拉力做功', text: '用 50 牛的水平拉力，拉着小车沿水平地面前进 4 米，拉力方向与位移方向一致。求拉力做的功。<br><br><strong>解析</strong>：<br>拉力方向与位移方向相同，夹角 θ = 0°，cos0° = 1。<br>W = F × s × cosθ = 50 × 4 × 1 = 200（焦耳）。<br>答：拉力对小车做了 200 焦耳的功。' },
      { type: 'warn', label: '易错', text: '很多同学把公式记成 W = F × s，漏掉了 cosθ。只有在力与位移方向一致（θ = 0°）时才能这么写。一旦力与位移有夹角，必须乘 cosθ。特别是 θ = 90° 时 cos90° = 0，力不做功，这常是考试陷阱。' },
      { type: 'table', headers: ['夹角 θ 的情况', 'cosθ 的符号', '功的正负', '物理意义'], rows: [['0° ≤ θ < 90°', '正', '正功', '力推动物体运动，是动力做功'], ['θ = 90°', '0', '不做功', '力与位移垂直，不贡献功'], ['90° < θ ≤ 180°', '负', '负功', '力阻碍物体运动，是阻力做功']] },
      { type: 'heading', text: '三、功率——做功的快慢' },
      { type: 'paragraph', text: '做功多少只告诉我们能量转化了多少，却没说花了多少时间。同样搬一桶水到三楼，有人一口气跑上去，有人慢吞吞走上去，做的功一样多，但前者"更猛"。描述做功快慢的物理量就是功率。' },
      { type: 'keypoint', label: '重点·功率', text: '<strong>功率 P = W / t，表示单位时间内做的功，单位瓦特（W），1 瓦 = 1 焦/秒。</strong>功率越大，说明做功越快。汽车发动机的功率大，就能在短时间内做很多功，加速和爬坡更有力气。' },
      { type: 'list', items: ['平均功率：一段时间内的总功除以总时间，反映这段时间的"平均快慢"', '瞬时功率：某一时刻的做功快慢，常用 P = F × v × cosθ 计算', '当力与速度方向一致时，瞬时功率 P = F × v', '额定功率是机器长时间正常工作的最大功率，实际功率不能超过它'] },
      { type: 'tip', label: '提示', text: '<strong>区分"功"和"功率"：功看"多少"，功率看"快慢"。</strong>做得多不一定快，做得快也不一定多（可能时间很短）。遇到实际问题时，先看问的是总量（功）还是快慢（功率），再选公式。' },
      { type: 'paragraph', text: '骑自行车上坡时，如果感觉踩不动，通常会把档位调低、减慢速度。这是因为发动机（人）能提供的最大功率有限，根据 P = F × v，速度 v 减小时，能获得的牵引力 F 就增大，从而更容易爬上坡。这就是功率公式在生活中的妙用。' },
      { type: 'keypoint', label: '重点·瞬时功率公式', text: '<strong>当力与速度方向夹角为 θ 时，瞬时功率 P = F × v × cosθ。</strong>若力与速度同向，则 P = F × v。汽车上坡降速增牵引力，正是这个公式的体现。' },
      { type: 'heading', text: '四、功与功率在生活中的身影' },
      { type: 'paragraph', text: '电梯把人送上高楼，电动机克服重力做功；起重机吊起货物，拉力做正功；刹车时摩擦力让车停下，摩擦力做负功。所有这些过程，都可以用"功"来衡量能量如何转移，"功率"来衡量转移得多快。学好这两个概念，就握住了打开机械能大门的钥匙。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">力与位移成夹角 θ 时，只有分量 F·cosθ 做功</text><rect x="40" y="70" width="600" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="120" y1="220" x2="520" y2="220" stroke="#234b45" stroke-width="3"/><text x="320" y="248" font-size="13" fill="#234b45" text-anchor="middle">位移 s（水平向右）</text><rect x="95" y="195" width="50" height="40" rx="4" fill="#4fb3a5"/><line x1="120" y1="215" x2="120" y2="120" stroke="#234b45" stroke-width="3"/><line x1="120" y1="120" x2="190" y2="100" stroke="#234b45" stroke-width="3"/><text x="60" y="100" font-size="14" fill="#234b45" font-weight="bold">F</text><path d="M 120 215 A 40 40 0 0 0 162 185" fill="none" stroke="#2e9e8f" stroke-width="2"/><text x="175" y="180" font-size="13" fill="#234b45">θ</text><text x="320" y="84" font-size="13" fill="#234b45" text-anchor="middle">有效分力 F·cosθ 沿位移方向才做功</text></svg>', caption: '图1　拉力 F 与位移 s 成夹角 θ，只有沿位移方向的分量 F·cosθ 才对物体做功。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">功的正负：看力与位移夹角是动力还是阻力</text><rect x="30" y="60" width="190" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="125" y="86" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">正功</text><line x1="60" y1="200" x2="190" y2="200" stroke="#234b45" stroke-width="3"/><line x1="80" y1="200" x2="150" y2="160" stroke="#234b45" stroke-width="3"/><text x="125" y="246" font-size="12" fill="#234b45" text-anchor="middle">θ&lt;90° 动力</text><rect x="245" y="60" width="190" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="86" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">零功</text><line x1="275" y1="200" x2="405" y2="200" stroke="#234b45" stroke-width="3"/><line x1="340" y1="200" x2="340" y2="140" stroke="#234b45" stroke-width="3"/><text x="340" y="246" font-size="12" fill="#234b45" text-anchor="middle">θ=90° 不做功</text><rect x="460" y="60" width="190" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="555" y="86" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">负功</text><line x1="490" y1="200" x2="620" y2="200" stroke="#234b45" stroke-width="3"/><line x1="600" y1="200" x2="530" y2="160" stroke="#234b45" stroke-width="3"/><text x="555" y="246" font-size="12" fill="#234b45" text-anchor="middle">θ&gt;90° 阻力</text></svg>', caption: '图2　力与位移夹角为锐角做正功、直角不做功、钝角做负功。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">功率 P = W / t：相同功，时间越短功率越大</text><rect x="40" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">慢速搬运</text><rect x="90" y="150" width="40" height="70" fill="#4fb3a5"/><text x="180" y="240" font-size="12" fill="#234b45" text-anchor="middle">做功 W，用时 10 秒</text><text x="180" y="262" font-size="13" fill="#234b45" font-weight="bold" text-anchor="middle">P = W / 10</text><rect x="360" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">快速搬运</text><rect x="450" y="150" width="40" height="70" fill="#4fb3a5"/><text x="500" y="240" font-size="12" fill="#234b45" text-anchor="middle">做功 W，用时 2 秒</text><text x="500" y="262" font-size="13" fill="#234b45" font-weight="bold" text-anchor="middle">P = W / 2 更大</text></svg>', caption: '图3　做相同的功，用时越短功率越大，即做功越快。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于做功的说法，正确的是？', options: ['只要有力作用在物体上，力就一定做功', '只要物体发生位移，就一定有力对它做功', '物体受到力而且在力的方向上发生位移，力才做功', '人提着书包水平走路时，手对书包做了功'], answer: '物体受到力而且在力的方向上发生位移，力才做功', explanation: '做功必须同时具备两个条件：物体受到力的作用，并且物体在力的方向上发生了位移。有力无位移（推墙不动）不做功；有位移但力与位移垂直（提书包水平走，手向上的力与水平位移垂直）也不做功。所以只有第三个选项同时强调了力和在力方向上的位移，是正确的。' },
      { type: 'choice', question: '用水平力推着小车沿水平地面前进，推力方向与位移方向一致，下列说法正确的是？', options: ['推力做负功', '推力不做功', '推力做正功', '无法判断推力做功正负'], answer: '推力做正功', explanation: '推力方向与位移方向相同，夹角 θ = 0°，cos0° = 1 为正，由 W = F × s × cosθ 可知功为正，即推力对小车做正功。正功表示力是推动物体运动的动力，符合推车前进的实际情况。' },
      { type: 'choice', question: '关于功率，下列说法正确的是？', options: ['做功越多，功率一定越大', '功率是表示做功快慢的物理量', '功率越大，做的功一定越多', '功率的单位是焦耳'], answer: '功率是表示做功快慢的物理量', explanation: '功率 P = W / t，反映单位时间内做功的多少，是描述做功快慢的物理量。做功多但用时更长时功率未必大；功率大只说明快，若时间很短总功也不一定多；功率的单位是瓦特（W），焦耳是功和能量的单位。因此只有第二项正确。' },
      { type: 'fill', question: '功的计算公式为 W = ___（用 F、s、θ 表示，写明完整形式）。', answer: 'F × s × cosθ', explanation: '当力 F 与位移 s 方向成夹角 θ 时，只有沿位移方向的分量 F × cosθ 做功，所以功的完整表达式为 W = F × s × cosθ。注意不能漏掉 cosθ，只有在力与位移同向（θ=0°）时才能简化为 W = F × s。' },
      { type: 'fill', question: '汽车上坡时，驾驶员常换低档减小速度，以增大牵引力。若发动机功率 P 不变，根据 P = F × v 可知，速度 v 减小，牵引力 F 会___（填"增大"或"减小"）。', answer: '增大', explanation: '由瞬时功率公式 P = F × v（力与速度同向时）可知，当发动机输出功率 P 保持不变，速度 v 减小时，牵引力 F = P / v 必然增大。这正是汽车上坡换低档、降速以获更大牵引力爬坡的原理。' }
    ]
  });
})();
