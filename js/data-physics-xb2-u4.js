/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第一章 安培力与洛伦兹力
 * 课时4：带电粒子在磁场中的运动
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u4',
    name: '带电粒子在磁场中的运动',
    chapter: '选择性必修第二册 · 第一章 安培力与洛伦兹力',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、垂直进入匀强磁场的粒子做匀速圆周运动' },
      { type: 'paragraph', text: '让一个带电粒子以垂直于磁场的方向射入匀强磁场。上一节说过，洛伦兹力方向始终垂直于速度，它只改变方向、不改变快慢。而要让物体做圆周运动，正需要一个大小不变、方向总是指向圆心的力。洛伦兹力恰好满足：它大小恒定、永远垂直速度并指向圆心，于是粒子就沿着一个圆匀速地打转，这就是匀速圆周运动。' },
      { type: 'keypoint', label: '重点·匀速圆周运动', text: '<strong>当带电粒子垂直射入匀强磁场时，在洛伦兹力作用下做匀速圆周运动。</strong>洛伦兹力在这里充当向心力，速度大小不变、方向不断改变，轨迹是一个圆。' },
      { type: 'paragraph', text: '为什么是"匀强"磁场、又要"垂直进入"？匀强保证洛伦兹力大小处处一样，圆才规整；垂直进入保证一开始速度就与磁场垂直，洛伦兹力达到最大、完全用来提供向心力。如果粒子是斜着进去的，会做螺旋运动，情况更复杂，本节先不展开。' },
      { type: 'list', items: ['粒子必须垂直进入匀强磁场，洛伦兹力最大且始终指向圆心', '洛伦兹力大小不变，只改变速度方向，不改变速率', '粒子轨迹是一个圆，做匀速圆周运动', '洛伦兹力在这里扮演"向心力"的角色'] },
      { type: 'heading', text: '二、轨道半径 r = m × v / (q × B)' },
      { type: 'keypoint', label: '重点·回旋半径公式', text: '<strong>垂直进入时，带电粒子做圆周运动的半径 r = m × v / (q × B)。</strong>其中 m 是粒子质量，v 是速度，q 是电荷量（取绝对值），B 是磁感应强度。' },
      { type: 'paragraph', text: '这个公式怎么来的？圆周运动的向心力是 m × v² / r，而提供这个向心力的正是洛伦兹力 q × v × B。让二者相等：q × v × B = m × v² / r，两边约去一个 v，再整理就得到 r = m × v / (q × B)。从式子能看出：粒子速度越大、质量越大，转的圈越大；磁场越强、电荷量越大，圈越小。' },
      { type: 'example', label: '例题·求轨道半径', text: '一个质子（m = 1.67×10⁻²⁷ 千克，q = 1.6×10⁻¹⁹ 库仑）以 v = 3.0×10⁶ 米/秒垂直进入 B = 0.20 特斯拉的匀强磁场。求轨道半径 r。<br><br><strong>解</strong>：<br>用 r = m × v / (q × B)。<br>r = (1.67×10⁻²⁷ × 3.0×10⁶) / (1.6×10⁻¹⁹ × 0.20)<br> = (5.01×10⁻²¹) / (3.2×10⁻²⁰) ≈ 0.157（米）。<br>答：轨道半径约为 0.157 米（约 15.7 厘米）。' },
      { type: 'warn', label: '易错', text: '代入 r = m × v / (q × B) 时，<strong>q 要取电荷量的绝对值</strong>，正负只影响旋转方向不影响半径大小。另外别把质量 m 漏掉，也别把速度平方带进去——半径和速度成正比，不是和速度平方成正比。磁场 B 在分母，B 越大半径越小。' },
      { type: 'table', headers: ['改变的量', '对半径 r 的影响', '记忆口诀'], rows: [['速度 v 增大', 'r 成正比增大', '越快转的圈越大'], ['质量 m 增大', 'r 成正比增大', '越重转的圈越大'], ['磁感应强度 B 增大', 'r 成反比减小', '磁场越强圈越紧'], ['电荷量 q 增大', 'r 成反比减小', '带电越多圈越紧']] },
      { type: 'heading', text: '三、运动周期 T = 2π × m / (q × B)' },
      { type: 'keypoint', label: '重点·周期公式', text: '<strong>粒子转一圈所用时间（周期）T = 2π × m / (q × B)。</strong>注意周期只和粒子的比荷 m/q 以及磁场 B 有关，和速度 v、半径 r 都无关。' },
      { type: 'paragraph', text: '把圆周周长 2π × r 除以速度 v，就得到周期 T = 2π × r / v。再把 r = m × v / (q × B) 代入，速度 v 奇妙地约掉了，得到 T = 2π × m / (q × B)。这说明一个很有意思的结论：不管粒子转大圈还是小圈、跑快还是跑慢，只要质量和电荷量固定、磁场固定，它转一圈花的时间是一样的。这就是回旋加速器能工作的道理。' },
      { type: 'list', items: ['周期 T = 2π × m / (q × B)，由质量、电荷量、磁场决定', '周期与速度 v 无关，与半径 r 无关', '速度大则半径大，但转一圈时间不变（因路程也变长）', '比荷 m/q 相同的粒子，在同一磁场中周期相同'] },
      { type: 'warn', label: '易错', text: '<strong>周期和速度无关，这是最容易想错的地方。</strong>很多人以为"速度快就转得快、周期短"，其实速度大时半径也变大了，路程按比例变长，二者抵消，周期保持不变。判断周期只看 m、q、B 三个量，别把 v 带进去。' },
      { type: 'tip', label: '提示', text: '<strong>记住两个核心式子就够：r = m × v / (q × B)，T = 2π × m / (q × B)。</strong>它们都来自"洛伦兹力充当向心力"这一条。做题时先判断粒子是否垂直进磁场，再套公式，注意 q 取绝对值、单位统一成国际单位。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">垂直进磁场的粒子做匀速圆周运动</text><circle cx="340" cy="170" r="100" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="340" cy="70" r="12" fill="#4fb3a5"/><line x1="340" y1="70" x2="405" y2="70" stroke="#234b45" stroke-width="4"/><polygon points="417,70 397,61 397,79" fill="#234b45"/><text x="378" y="58" font-size="12" fill="#234b45" text-anchor="middle">v</text><line x1="340" y1="70" x2="340" y2="170" stroke="#2e9e8f" stroke-width="3"/><polygon points="340,182 331,164 349,164" fill="#2e9e8f"/><text x="356" y="130" font-size="12" fill="#2e9e8f" text-anchor="middle">F向</text><circle cx="340" cy="170" r="5" fill="#234b45"/><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">洛伦兹力指向圆心，充当向心力</text></svg>', caption: '图1　粒子垂直进入匀强磁场，洛伦兹力始终指向圆心，使其做匀速圆周运动。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">速度越大、磁场越弱，半径越大</text><circle cx="200" cy="190" r="55" fill="none" stroke="#2e9e8f" stroke-width="3"/><text x="200" y="262" font-size="12" fill="#234b45" text-anchor="middle">B 大、v 小→r 小</text><circle cx="470" cy="190" r="100" fill="none" stroke="#2e9e8f" stroke-width="3"/><text x="470" y="305" font-size="12" fill="#234b45" text-anchor="middle">B 小、v 大→r 大</text></svg>', caption: '图2　由 r = m × v / (q × B)，磁场越弱或速度越大，粒子轨道半径越大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">周期与速度无关，只由 m、q、B 决定</text><circle cx="230" cy="180" r="70" fill="none" stroke="#2e9e8f" stroke-width="3" stroke-dasharray="6,4"/><circle cx="230" cy="180" r="40" fill="none" stroke="#2e9e8f" stroke-width="3"/><text x="230" y="280" font-size="12" fill="#234b45" text-anchor="middle">大小两个圆，周期相同</text><text x="500" y="160" font-size="14" fill="#234b45" text-anchor="middle">T = 2π × m / (q × B)</text><text x="500" y="200" font-size="12" fill="#234b45" text-anchor="middle">与 v、r 无关</text></svg>', caption: '图3　不同半径的圆，只要 m、q、B 相同，粒子转一圈的周期就相同。' }
    ],
    exercises: [
      { type: 'choice', question: '带电粒子垂直射入匀强磁场时，它的运动轨迹是？', options: ['一条直线', '一条抛物线', '一个圆（匀速圆周运动）', '一条螺旋线'], answer: '一个圆（匀速圆周运动）', explanation: '当粒子垂直进入匀强磁场，洛伦兹力大小恒定且始终垂直于速度、指向圆心，正好充当向心力，于是粒子做匀速圆周运动，轨迹是圆。若速度平行磁场则走直线；斜着进入才走螺旋线；磁场中不会自然形成抛物线。' },
      { type: 'choice', question: '带电粒子在磁场中做圆周运动的轨道半径公式是？', options: ['r = m × v / (q × B)', 'r = q × B / (m × v)', 'r = m × v² / (q × B)', 'r = 2π × m / (q × B)'], answer: 'r = m × v / (q × B)', explanation: '由洛伦兹力充当向心力：q × v × B = m × v² / r，约去一个 v 并整理得到 r = m × v / (q × B)，其中 q 取绝对值。半径与速度成正比、与磁感应强度和电荷量成反比。最后一个选项是周期公式，不是半径公式。' },
      { type: 'choice', question: '关于带电粒子在匀强磁场中圆周运动的周期 T，下列说法正确的是？', options: ['周期 T 与速度 v 有关', '周期 T 与半径 r 有关', '周期 T = 2π × m / (q × B)，与速度无关', '速度越大周期越短'], answer: '周期 T = 2π × m / (q × B)，与速度无关', explanation: '把 T = 2π × r / v 与 r = m × v / (q × B) 联立，速度 v 被约掉，得到 T = 2π × m / (q × B)。可见周期只由质量 m、电荷量 q、磁感应强度 B 决定，与速度 v 和半径 r 都无关。速度大时半径也大，路程按比例变长，转一圈时间反而不变。' },
      { type: 'fill', question: '推导半径公式时，提供向心力的是___力；令它等于圆周运动向心力 m × v² / r，整理可得 r = ___。', answer: '洛伦兹|m × v / (q × B)', explanation: '带电粒子在磁场中做圆周运动时，洛伦兹力方向始终指向圆心，正是它提供了向心力。令洛伦兹力大小 q × v × B 等于向心力 m × v² / r，即 q × v × B = m × v² / r，两边约去一个 v，得到 r = m × v / (q × B)。这里 q 取电荷量的绝对值。' },
      { type: 'fill', question: '两个比荷（m/q）相同的粒子，进入同一匀强磁场，即使速度不同，它们做圆周运动的___相同（填"周期"或"半径"）。', answer: '周期', explanation: '周期公式 T = 2π × m / (q × B) = 2π × (m/q) / B，只与比荷 m/q 和磁场 B 有关。比荷相同、磁场相同的两个粒子，周期必然相同，与速度无关。而半径 r = m × v / (q × B) 与速度成正比，速度不同时半径是不同的。' }
    ]
  });
})();
