/* ============================================================
 * 高三复习 · 计算压轴 · 专题一 力学计算
 * 课时1：匀变速直线运动规律综合计算（刹车、追及相遇、多过程）
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u1',
    name: '匀变速直线运动规律综合计算',
    chapter: '计算压轴 · 专题一 力学计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、匀变速直线运动的三个核心公式' },
      { type: 'paragraph', text: '匀变速直线运动，就是加速度 a 保持不变的直线运动。加速度可以是正的（越来越快），也可以是负的（越来越慢）。只要加速度恒定，下面三个公式全都成立，它们是解决一切直线运动计算题的根基。' },
      { type: 'keypoint', label: '重点·三大公式', text: '<strong>速度公式：v = v₀ + a×t</strong>（t 秒后速度等于初速度加加速度乘时间）<br><strong>位移公式：s = v₀×t + ½×a×t²</strong>（t 秒内走过的路程）<br><strong>速度位移公式：v² − v₀² = 2×a×s</strong>（不用时间就能算速度变化）<br>还有平均速度公式：s = (v₀ + v)/2 × t，只在匀变速时能用。' },
      { type: 'list', items: ['v₀ 是初速度，v 是末速度，a 是加速度，t 是时间，s 是位移', '公式里 a 带正负号：加速取正，减速取负', '三个公式联立，已知其中三个量就能求第四个量', '计算前先规定正方向，所有带方向的量都按正方向取正负'] },
      { type: 'paragraph', text: '用公式前一定要先统一单位，通常把速度换成 m/s、加速度换成 m/s²、位移换成 m、时间换成 s。带负号运算时不要慌，负号只是说明方向与规定的正方向相反。' },
      { type: 'heading', text: '二、刹车问题：减速到停后不能再反向算' },
      { type: 'paragraph', text: '汽车刹车是典型的匀减速直线运动，加速度 a 为负值。一个最常考也最容易丢分的陷阱是：车停住之后，人不能把"倒回去"的时间也算进去。必须先判断车在多长时间内停下来。' },
      { type: 'warn', label: '易错·刹车陷阱', text: '<strong>刹车题必须先算"刹车时间" t₀ = v₀ / |a|。</strong>如果题目给的时间 t 大于 t₀，车早已停住，真正运动时间只有 t₀，位移要用 t₀ 代入公式，而不能直接用 t。绝不能把停车后的时间当成反向匀加速继续算。' },
      { type: 'example', label: '例题·刹车距离', text: '汽车以 20 m/s 匀速行驶，突然刹车，加速度大小为 5 m/s²（方向与运动相反）。求刹车后 6 秒内的位移。<br><br><strong>解析</strong>：先算刹车时间 t₀ = v₀ / |a| = 20 / 5 = 4 秒。题目给 6 秒，但车 4 秒就停了，之后静止。所以真正运动时间取 4 秒。位移 s = v₀×t₀ + ½×a×t₀² = 20×4 + ½×(−5)×16 = 80 − 40 = 40 米。答案：40 米。' },
      { type: 'list', items: ['第一步：写出已知量，规定初速度方向为正', '第二步：算刹车时间 t₀ = v₀ / |a|', '第三步：比较题给时间 t 与 t₀，取较小者代入公式', '第四步：若问"停下前最后一秒位移"，可用逆向思维当作初速为0的匀加速'] },
      { type: 'tip', label: '提示·逆向思维', text: '<strong>匀减速到零的过程，可以反过来当作"从静止开始的匀加速"。</strong>例如求刹车最后 1 秒的位移，就等同于从静止匀加速 1 秒的位移，公式直接写成 s = ½×|a|×1²，省去先求末速度的麻烦。' },
      { type: 'heading', text: '三、追及与相遇问题' },
      { type: 'paragraph', text: '追及问题研究两物体位置随时间变化的关系。核心就是比较它们的位置：当两者位置相同时就"相遇"；当快车追上慢车但还没撞上时，存在一个"恰好不相撞"的临界状态。' },
      { type: 'keypoint', label: '重点·追及相遇条件', text: '<strong>相遇条件：两者位移差 = 初始距离差。</strong>设后车追前车，后车位移 s后，前车位移 s前，初始相距 d，则相遇时 s后 = s前 + d。<br><strong>恰好不相撞临界：两者速度相等时距离最小</strong>，若此时还没撞上，以后就永远追不上、也撞不着。' },
      { type: 'example', label: '例题·追及相遇', text: 'A 车在 B 车前方 100 米，B 以 10 m/s 匀速，A 从静止以 2 m/s² 加速追赶。问 B 能否追上 A？<br><br><strong>解析</strong>：设经 t 秒，B 位移 s_B = 10t，A 位移 s_A = ½×2×t² = t²。追上需 s_B = s_A + 100，即 10t = t² + 100，整理得 t² − 10t + 100 = 0。判别式 Δ = 100 − 400 = −300 < 0，无实数解，说明永远追不上。临界时两者速度相等：A 达 10 m/s 需 t = 10/2 = 5 秒，此时 s_A = 25 米，s_B = 50 米，相距仍 75 米 > 0，故确实追不上。' },
      { type: 'list', items: ['画示意图，标出各自初位置和初速度', '分别写出两物体的位移公式（用同一计时起点）', '令位移关系满足相遇条件列方程', '有临界问题时，先找"速度相等"那一刻判断是否相撞'] },
      { type: 'tip', label: '提示·临界速度', text: '<strong>判断能否追上的最关键一步，是看"后车速度等于前车速度"那一刻两车的距离。</strong>若此时距离仍大于零（或刚好等于零），则安全；若此时已经撞上，则一定追尾。很多题就考这个"速度相等"的瞬间。' },
      { type: 'heading', text: '四、多过程问题：分段处理' },
      { type: 'paragraph', text: '现实中的运动常常是几个阶段拼起来的：先加速、再匀速、最后减速。每一段都是一种简单的匀变速（或匀速）运动，关键是找到段与段之间的"连接量"——前一段的末速度就是后一段的初速度，前一段的末位置就是后一段的起点。' },
      { type: 'keypoint', label: '重点·多过程连接', text: '<strong>相邻两段在连接处的物理量必须连续：</strong>前一段的末速度 v = 后一段的初速度 v₀；前一段的末位置 = 后一段的初位置。把每一段当作独立匀变速处理，再拼接总时间、总位移即可。' },
      { type: 'example', label: '例题·多过程', text: '物体从静止开始以 2 m/s² 加速 5 秒，再匀速运动 10 秒，最后以 4 m/s² 减速到停。求总位移。<br><br><strong>解析</strong>：第一段末速度 v₁ = 0 + 2×5 = 10 m/s，位移 s₁ = ½×2×25 = 25 米。第二段匀速，位移 s₂ = 10×10 = 100 米。第三段减速到停，由 v² − v₀² = 2as，0 − 100 = 2×(−4)×s₃，得 s₃ = 12.5 米。总位移 = 25 + 100 + 12.5 = 137.5 米。' },
      { type: 'table', headers: ['阶段', '运动性质', '关键公式', '本段位移'], rows: [['加速段', '匀加速（a>0）', 'v = v₀ + a×t，s = ½×a×t²', '用已知 t、a 代入'], ['匀速段', 'v 不变', 's = v×t', '速度取前段末速度'], ['减速段', '匀减速（a<0）', 'v² − v₀² = 2×a×s', '末速度为0时 s = v₀²/(2|a|)']] },
      { type: 'warn', label: '易错·过程混淆', text: '<strong>不要把不同阶段的加速度混用。</strong>每一段要单独选公式，尤其减速段 a 取负值。总位移是各段位移相加，总时间是各段时间相加，不能在整段里用一个"平均加速度"硬套公式。' },
      { type: 'paragraph', text: '综合来看，匀变速直线运动的计算套路就是：定正方向 → 选公式 → 代数值（带正负号）→ 解未知数。刹车先判停车时间，追及先找速度相等瞬间，多过程分段再拼接，这三招几乎能对付所有高考基础计算题。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">刹车：v-t 图面积就是位移，车停后不再计时间</text><line x1="60" y1="270" x2="620" y2="270" stroke="#2e9e8f" stroke-width="3"/><line x1="60" y1="60" x2="60" y2="270" stroke="#2e9e8f" stroke-width="3"/><text x="40" y="150" font-size="13" fill="#234b45" text-anchor="middle">v</text><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">t</text><polygon points="60,90 320,270 60,270" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="160" y="180" font-size="13" fill="#234b45" text-anchor="middle">三角形面积=位移</text><line x1="320" y1="270" x2="320" y2="250" stroke="#4fb3a5" stroke-width="2"/><text x="320" y="240" font-size="13" fill="#234b45" text-anchor="middle">t0刹车时间</text><text x="470" y="270" font-size="13" fill="#4fb3a5" text-anchor="middle">停车后静止</text></svg>', caption: '图1　刹车过程 v-t 图，速度降到零后不再反向，面积（位移）只算到 t₀。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">追及相遇：两车的位移-时间线相交即相遇</text><line x1="60" y1="280" x2="620" y2="280" stroke="#2e9e8f" stroke-width="3"/><line x1="60" y1="60" x2="60" y2="280" stroke="#2e9e8f" stroke-width="3"/><path d="M60 120 Q 360 120 600 260" fill="none" stroke="#234b45" stroke-width="3"/><path d="M60 280 L 600 90" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="360" y="100" font-size="13" fill="#234b45" text-anchor="middle">前车(较慢)</text><text x="420" y="200" font-size="13" fill="#4fb3a5" text-anchor="middle">后车(追赶)</text><circle cx="330" cy="180" r="7" fill="#2e9e8f"/><text x="330" y="205" font-size="13" fill="#234b45" text-anchor="middle">相交=相遇</text></svg>', caption: '图2　两条位置-时间曲线相交表示两车到达同一位置，即相遇。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">多过程：加速—匀速—减速拼接</text><rect x="60" y="120" width="160" height="90" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="260" y="120" width="200" height="90" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="480" y="120" width="140" height="90" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="140" y="150" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">加速段</text><text x="140" y="178" font-size="12" fill="#234b45" text-anchor="middle">a&gt;0</text><text x="360" y="150" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">匀速段</text><text x="360" y="178" font-size="12" fill="#234b45" text-anchor="middle">v不变</text><text x="550" y="150" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">减速段</text><text x="550" y="178" font-size="12" fill="#234b45" text-anchor="middle">a&lt;0</text><line x1="220" y1="165" x2="260" y2="165" stroke="#4fb3a5" stroke-width="3"/><line x1="460" y1="165" x2="480" y2="165" stroke="#4fb3a5" stroke-width="3"/><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">前段末速度=后段初速度，逐段拼接求总位移</text></svg>', caption: '图3　多过程运动拆成三段分别处理，连接处速度、位置连续。' }
    ],
    exercises: [
      { type: 'choice', question: '汽车以 15 m/s 行驶，刹车加速度大小为 3 m/s²，刹车后 8 秒内的位移最接近多少？', options: ['37.5 米', '60 米', '120 米', '37.5 与 120 之间取平均'], answer: '37.5 米', explanation: '先算刹车时间 t₀ = v₀ / |a| = 15 / 3 = 5 秒，车在 5 秒时已停。题给 8 秒大于 5 秒，真正运动时间只取 5 秒。位移 s = v₀×t₀ + ½×a×t₀² = 15×5 + ½×(−3)×25 = 75 − 37.5 = 37.5 米。不能把 8 秒直接代入，否则会算成负值错误结果。' },
      { type: 'choice', question: '关于追及问题，下列说法正确的是？', options: ['后车速度大于前车就一定会撞上', '两者速度相等时距离最小，是判断能否追上的关键瞬间', '相遇就是两车速度相同', '前车匀速后车加速一定能追上'], answer: '两者速度相等时距离最小，是判断能否追上的关键瞬间', explanation: '追及问题中，后车比前车快时距离在缩小，当两者速度相等时距离达到最小。若此时还没相撞（距离仍大于零），之后后车速度将小于前车，距离又拉开，永远追不上。所以"速度相等"这一瞬间是判断能否追上的临界，其余三项均不严谨或错误。' },
      { type: 'choice', question: '物体从静止以 4 m/s² 加速 3 秒，然后匀速 2 秒，位移分别是多少？加速段与匀速段', options: ['加速段 18 米，匀速段 24 米', '加速段 12 米，匀速段 12 米', '加速段 36 米，匀速段 24 米', '加速段 18 米，匀速段 12 米'], answer: '加速段 18 米，匀速段 24 米', explanation: '加速段：末速度 v = a×t = 4×3 = 12 m/s，位移 s₁ = ½×a×t² = ½×4×9 = 18 米。匀速段速度就是前段末速度 12 m/s，位移 s₂ = 12×2 = 24 米。注意匀速段速度要用加速段的末速度，不能直接用初速度 0。' },
      { type: 'fill', question: '匀变速直线运动的速度位移公式是 v² − v₀² = ___（用 a 和 s 表示）。', answer: '2×a×s', explanation: '由 v = v₀ + a×t 与 s = v₀×t + ½×a×t² 消去 t 可得 v² − v₀² = 2×a×s。这个公式的好处是不需要知道时间 t 就能由初末速度求位移，或反过来由位移求末速度，是刹车、碰撞类题的常用公式。' },
      { type: 'fill', question: '汽车以 20 m/s 行驶，刹车加速度大小为 4 m/s²，则刹车到停所需的最短距离是___米。', answer: '50', explanation: '用速度位移公式，末速度 v=0，则 0 − v₀² = 2×(−a)×s，得 s = v₀²/(2a) = 400/(2×4) = 50 米。也可先算刹车时间 t₀=20/4=5 秒，再 s = 20×5 − ½×4×25 = 100 − 50 = 50 米，两种方法结果一致。' }
    ]
  });
})();
