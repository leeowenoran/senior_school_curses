/* ============================================================
 * 高三复习 · 力学综合 · 专题一 运动学
 * 课时4：追及相遇问题
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u4',
    name: '追及相遇问题',
    chapter: '力学综合 · 专题一 运动学',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、追及相遇问题的核心' },
      { type: 'paragraph', text: '追及相遇问题，说到底是研究两个物体位置随时间变化的关系。把两个物体的位置都写出来，再看它们什么时候相等（相遇），或者什么时候距离最大、最小（追得上还是追不上）。最常用的办法是列方程，用位移把关系表达清楚。' },
      { type: 'keypoint', label: '重点·核心方程', text: '<strong>追及相遇的核心方程是：追赶者的位移 = 被追者的位移 + 初始间距</strong>，即 x追 = x被追 + x₀。当这个等式成立时，两物体位置相同，正好相遇（或刚好追上）。' },
      { type: 'list', items: ['分别写出两物体的位移表达式 x追(t) 和 x被追(t)', '代入核心方程 x追 = x被追 + x₀ 求相遇时刻', '判断这个时刻是否合理（物体是否还在运动）', '用距离函数 d(t) = x被追 + x₀ − x追 分析极值'] },
      { type: 'heading', text: '二、临界条件——速度相等时距离取极值' },
      { type: 'paragraph', text: '追及问题里最关键的"临界时刻"出现在两物体速度相等的时候。在那一刻之前，如果追者比被追者慢，两者距离会拉大；如果追者比被追者快，距离会缩小。一旦速度相等，距离就不再变化方向，于是"距离最大"或"距离最小（恰能追上）"往往就发生在速度相等的瞬间。' },
      { type: 'keypoint', label: '重点·速度相等是临界时刻', text: '<strong>当两物体速度相等时，它们之间的距离达到极值</strong>：若此前追者一直比被追者快，则此刻距离最小，是"恰好追上"或"追不上"的分界；若此前追者慢、被追者快，则此刻距离最大。' },
      { type: 'example', label: '例题·加速追匀速（距离最大）', text: '甲车从静止以 a = 2 m/s² 匀加速，在它前方 x₀ = 20 m 处有乙车以 v = 10 m/s 匀速同向行驶。何时两车距离最大？<br><strong>解析</strong>：开始甲慢乙快，距离拉大；甲速度赶上乙的时刻距离最大。令 v甲 = a t = v乙，即 2 t = 10，得 t = 5 s。所以第5秒时两车距离最大。' },
      { type: 'warn', label: '易错', text: '<strong>速度相等不等于已经追上。</strong>速度相等只是距离取极值的"临界时刻"，此时两物体位置往往还不同。判断是否追上，必须代回核心方程 x追 = x被追 + x₀ 看是否成立，不能一看"速度相等"就以为相遇了。' },
      { type: 'heading', text: '三、两类典型情形' },
      { type: 'paragraph', text: '追及相遇最常见两类：一类是"同向，后方加速追前方匀速（或较慢）"，另一类是"相向运动，两者朝对方走"。它们临界规律不同，要分别记。' },
      { type: 'keypoint', label: '重点·加速追匀速', text: '<strong>同向加速追匀速：在速度相等之前追者慢、距离变大；速度相等时距离最大；之后追者快、距离变小。</strong>若最大距离仍小于初始间距则永远追不上；若最大距离等于初始间距则恰好追上；若小于则能追上。' },
      { type: 'paragraph', text: '相向运动则相反：两者朝对方运动，距离随时间一直缩小。它们相遇的临界条件是"两人（或两车）走过的位移之和等于初始距离"。这相当于核心方程的另一种形式。' },
      { type: 'keypoint', label: '重点·相向运动', text: '<strong>相向运动（朝对方运动）相遇条件：两者位移之和等于初始距离</strong>，即 x₁ + x₂ = x₀。因为两者在缩短彼此距离，只要一直运动就一定会相遇，不存在"追不上"的问题。' },
      { type: 'list', items: ['同向追及：先比较速度，找速度相等的临界时刻看距离极值', '同向追及用 x追 = x被追 + x₀ 判断是否追上', '相向运动：用 x₁ + x₂ = x₀ 判断是否相遇', '两类都要先列位移表达式，再代临界条件'] },
      { type: 'table', headers: ['情形', '临界条件', '相遇/极值判据'], rows: [['同向·加速追匀速', '速度相等时', '距离最大；用 x追=x被追+x₀ 判断是否追上'], ['相向运动', '位移和等于初始距离', 'x₁+x₂=x₀ 时相遇']] },
      { type: 'tip', label: '提示', text: '<strong>拿到题先算"速度相等的时刻 t*"，再分别代位移公式。</strong>这个时刻往往就是极值或临界点，算出后比较距离就能判断"追得上/追不上/何时相遇"，比盲目解方程快得多。' },
      { type: 'heading', text: '四、综合例题' },
      { type: 'example', label: '例题·综合', text: '甲以 v₀ = 6 m/s 匀速在前，乙在后方 x₀ = 8 m 处从静止以 a = 2 m/s² 匀加速追甲。能否追上？若追上，何时？<br><strong>解析</strong>：速度相等时 t* = v₀ / a = 6 / 2 = 3 s。此时 x甲 = 6×3 = 18 m，x乙 = ½×2×3² = 9 m，x乙 + x₀ = 9 + 8 = 17 m < 18 m，即 x乙 < x甲 + x₀，说明3秒时仍没追上且距离最大。之后乙更快，终会追上。令 x乙 = x甲 + x₀：½×2×t² = 6 t + 8 → t² − 6 t − 8 = 0，解得 t = 3 + √17 ≈ 7.1 s（舍负）。所以约第7.1秒追上。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">同向追及：速度相等时距离最大</text><line x1="60" y1="250" x2="620" y2="250" stroke="#2e9e8f" stroke-width="2"/><path d="M 80 250 Q 260 250 540 70" fill="none" stroke="#4fb3a5" stroke-width="3"/><line x1="80" y1="250" x2="560" y2="160" stroke="#234b45" stroke-width="3"/><circle cx="330" cy="150" r="7" fill="#c0392b"/><text x="345" y="145" font-size="13" fill="#234b45">速度相等·距离最大</text><text x="590" y="270" font-size="12" fill="#234b45">t</text><text x="340" y="290" font-size="13" fill="#234b45" text-anchor="middle">绿线(追者,加速)与黑线(被追者,匀速)在红点处速度相等</text></svg>', caption: '图1　同向加速追匀速：在速度相等的红点时刻两车间距离最大，之后追者更快开始缩小距离。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">相向运动：位移和 = 初始距离时相遇</text><circle cx="120" cy="160" r="16" fill="#4fb3a5"/><text x="120" y="200" font-size="12" fill="#234b45" text-anchor="middle">甲</text><circle cx="560" cy="160" r="16" fill="#234b45"/><text x="560" y="200" font-size="12" fill="#234b45" text-anchor="middle">乙</text><line x1="160" y1="160" x2="520" y2="160" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="340" y="150" font-size="12" fill="#234b45" text-anchor="middle">初始距离 x₀</text><line x1="136" y1="160" x2="240" y2="160" stroke="#4fb3a5" stroke-width="3"/><line x1="544" y1="160" x2="440" y2="160" stroke="#234b45" stroke-width="3"/><text x="340" y="240" font-size="13" fill="#234b45" text-anchor="middle">x₁ + x₂ = x₀ 时两人在中间相遇</text></svg>', caption: '图2　相向运动：甲、乙朝对方走，各自位移 x₁、x₂ 之和等于初始距离 x₀ 时相遇。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">用核心方程判断是否追上</text><rect x="60" y="70" width="250" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">同向：x追 = x被追 + x₀</text><text x="185" y="124" font-size="12" fill="#234b45" text-anchor="middle">等式成立即恰好追上</text><rect x="370" y="70" width="250" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">相向：x₁ + x₂ = x₀</text><text x="495" y="124" font-size="12" fill="#234b45" text-anchor="middle">等式成立即相遇</text><line x1="185" y1="160" x2="185" y2="200" stroke="#4fb3a5" stroke-width="3"/><line x1="495" y1="160" x2="495" y2="200" stroke="#4fb3a5" stroke-width="3"/><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">先写位移，再代临界条件，判断是否相遇</text></svg>', caption: '图3　两类情形的核心方程：同向追及用 x追 = x被追 + x₀，相向运动用 x₁ + x₂ = x₀。' }
    ],
    exercises: [
      { type: 'choice', question: '在"同向加速追匀速"问题中，两物体距离最大的时刻出现在？', options: ['追者速度最大的时刻', '两物体速度相等的时刻', '被追者停止的时刻', '两物体相遇的时刻'], answer: '两物体速度相等的时刻', explanation: '同向追及中，开始追者慢、被追者快，距离不断拉大；当追者速度赶上被追者（两者速度相等）时，距离不再增大，达到最大；此后追者更快，距离开始缩小。所以距离最大的临界时刻就是两物体速度相等的瞬间，而不是相遇时刻。' },
      { type: 'choice', question: '关于追及相遇的核心方程，下列说法正确的是？', options: ['同向追及用 x追 = x被追 − x₀', '同向追及用 x追 = x被追 + x₀', '相向运动用 x₁ = x₂ + x₀', '相遇条件总是 x追 = x被追'], answer: '同向追及用 x追 = x被追 + x₀', explanation: '同向追及：追赶者要补上初始间距 x₀ 才能与被追者在同一位置，故核心方程为 x追 = x被追 + x₀，等式成立即相遇。相向运动则相反，两者位移之和等于初始距离 x₀，即 x₁ + x₂ = x₀。方程形式取决于运动方向，不能乱用。' },
      { type: 'choice', question: '相向运动的两物体，下列说法正确的是？', options: ['一定存在追不上的情况', '位移之和等于初始距离时相遇', '速度相等时距离最大', '必须用加速度才能求解'], answer: '位移之和等于初始距离时相遇', explanation: '相向运动是两者朝对方运动，距离一直缩短，只要持续运动就一定会相遇，不存在"追不上"。相遇的判据是两者各自走过的位移之和等于初始距离，即 x₁ + x₂ = x₀。速度相等并不是这类问题的临界条件。' },
      { type: 'fill', question: '同向追及问题中，若算得两物体速度相等的时刻为 t*，且此时追赶者位移 x追 仍小于 x被追 + x₀，则说明此时两车尚未相遇且距离达到 ___（填"最大"或"最小"）。', answer: '最大', explanation: '同向追及中，速度相等的时刻是距离取极值的临界时刻。若此时 x追 < x被追 + x₀，说明追者还没补上初始间距，位置仍落后，此刻正是距离最大的时刻。之后追者速度超过被追者，距离转为缩小，最终可能追上。' },
      { type: 'fill', question: '甲在前以 v = 8 m/s 匀速，乙在后从静止以 a = 2 m/s² 匀加速追甲，初始间距 x₀ = 10 m。速度相等时刻 t* = ___ 秒，此时乙走了 ___ 米（取整数可，用 ½ a t*² 计算）。', answer: '4 | 16', explanation: '速度相等时乙的速度等于甲的速度：a × t* = v，即 2 × t* = 8，得 t* = 4 s。此时乙的位移 x乙 = ½ × a × t*² = ½ × 2 × 4² = 16 m。再算甲的位移 x甲 = 8 × 4 = 32 m，x甲 + x₀ = 42 m > 16 m，说明4秒时仍未追上，距离最大；之后乙更快终会追上。' }
    ]
  });
})();
