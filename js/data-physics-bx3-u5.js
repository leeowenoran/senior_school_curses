/* ============================================================
 * 高二物理 · 必修 第三册 · 第十章 静电场中的能量
 * 课时5：电势能和电势
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u5',
    name: '电势能和电势',
    chapter: '必修第三册 · 第十章 静电场中的能量',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、静电力做功与路径无关' },
      { type: 'paragraph', text: '我们先回忆重力。把一个物体从高处移到低处，重力做的功只跟起点和终点的高度差有关，跟你走的是直线还是弯弯曲曲的路没有关系。电场里的静电力做功也有一模一样的脾气：把同一个检验电荷在电场中从 A 点搬到 B 点，静电力做的功只由 A、B 两点决定，跟你中间走的路线无关。' },
      { type: 'keypoint', label: '重点·静电力做功特点', text: '<strong>静电力做功与电荷经过的路径无关，只与电荷的起始位置和终止位置有关。</strong>这一点和重力做功完全相同，所以电场和重力场都属于"保守场"，可以引入"势能"这种概念。' },
      { type: 'paragraph', text: '既然做功跟路径无关，我们就能量出一个只属于位置的量——在 A 点"电荷带着多少能量"，在 B 点"带着多少能量"，两者之差正好等于静电力做的功。这就是下面要说的电势能。' },
      { type: 'list', items: ['重力做功只与初末高度有关，静电力做功只与初末位置有关', '两种力做功都不依赖中间走哪条路，都叫保守力', '正因为做功与路径无关，才能给每个位置定义一个确定的"势能"'] },
      { type: 'heading', text: '二、电势能' },
      { type: 'paragraph', text: '把电荷 q 放在电场里的某一点，它"凭借位置"而具有的能量，叫作电势能，记作 E_p。它和重力势能很像：物体在地球附近有重力势能，电荷在电场中有电势能。电荷在电场中移动时，静电力做正功，电势能就减少；静电力做负功（也就是外力克服静电力做功），电势能就增加。' },
      { type: 'keypoint', label: '重点·电势能变化与做功', text: '<strong>静电力做多少正功，电势能就减少多少；静电力做多少负功，电势能就增加多少。</strong>写成式子：W_AB = E_pA − E_pB，也就是从 A 到 B 静电力做的功等于 A 点电势能减去 B 点电势能。' },
      { type: 'example', label: '例题·电势能变化', text: '一个电荷在电场中从 A 点移到 B 点，静电力对它做了 5 焦耳的正功。<br><br><strong>解析</strong>：<br>静电力做正功 5 J，电势能减少 5 J，所以 E_pB = E_pA − 5 J。也就是说 B 点的电势能比 A 点少了 5 焦耳。反过来，如果从 A 到 B 是外力克服静电力做功 5 J（静电力做 −5 J），那电势能就增加 5 J。' },
      { type: 'warn', label: '易错', text: '电势能是<strong>电荷和电场共同拥有</strong>的，离开电荷谈"电场里某点的电势能"是不对的。而且电势能和重力势能一样，数值是相对的，必须先选一个"零电势能点"，各点的电势能大小才是确定的。同一点对不同的零势能点，数值可以不同，但两点之差不变。' },
      { type: 'heading', text: '三、电势' },
      { type: 'paragraph', text: '电势能 E_p 跟电荷的电量 q 有关：同一个位置，放 2 倍电量的电荷，电势能也变成 2 倍。为了描述"位置本身"的性质，我们把它"平均"掉——用 E_p 除以 q，得到一个只由位置决定、跟放不放电荷、放多大电荷都没关系的新量，这就是电势，记作 φ。' },
      { type: 'keypoint', label: '重点·电势定义', text: '<strong>电场中某点的电势等于该点电荷的电势能 E_p 与电荷电量 q 的比值：φ = E_p / q。</strong>电势是标量，单位叫伏特（V），1 V = 1 J/C。电势描述的是"位置本身"的本领，和有没有检验电荷无关。' },
      { type: 'tip', label: '提示', text: '<strong>电势 φ 与检验电荷 q 无关。</strong>虽然定义式写成 φ = E_p / q，但 φ 是电场本身的性质，由电场和该点位置决定。换一个 q，E_p 会跟着成比例变，比值 φ 不变。这就像密度 ρ = m / V，密度不因为你切下一块就改变。' },
      { type: 'heading', text: '四、零电势点的选取' },
      { type: 'paragraph', text: '电势和电势能一样，数值是相对的，必须人为选一个"零点"。理论上零点可以任选，但为了交流方便，大家约定：在理论问题中常选"无穷远处"电势为零；在实际电路和实验中常选"大地（地球）"电势为零。选定零点后，某点的电势就是：把单位正电荷从零点搬到该点，电场力做的功的负值；或者说该点相对零点的"高度"。' },
      { type: 'paragraph', text: '电势有正负。正电荷产生的电场里，各点电势都为正（离电荷越近电势越高）；负电荷产生的电场里，各点电势都为负（离电荷越近电势越低，负得越多）。比较电势高低时，别被负号骗了：−3 V 比 −1 V 电势更低。' },
      { type: 'table', headers: ['对比项', '电势能 E_p', '电势 φ'], rows: [['定义', '电荷在电场中因位置而具有的能量', '该点电势能 E_p 与电量 q 的比值 φ = E_p / q'], ['是否与 q 有关', '与电荷电量 q 有关', '与 q 无关，是电场本身性质'], ['是否相对', '是，需选零势能点', '是，需选零电势点'], ['单位', '焦耳 J', '伏特 V（= J/C）']] },
      { type: 'list', items: ['电势的正负由电场决定：正电荷电场中 φ 为正，负电荷电场中 φ 为负', '比较电势高低要看数值大小：−3 V 低于 −1 V', '选无穷远或大地为零点后，各点 φ 才有确定数值', '电势反映位置"能本领"的大小，与是否放入检验电荷无关'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">静电力做功与走的路径无关</text><rect x="40" y="60" width="280" height="220" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">同一电场中 A→B</text><circle cx="80" cy="240" r="12" fill="#4fb3a5"/><text x="80" y="262" font-size="12" fill="#234b45" text-anchor="middle">A</text><circle cx="280" cy="100" r="12" fill="#234b45"/><text x="280" y="82" font-size="12" fill="#234b45" text-anchor="middle">B</text><path d="M 92 232 Q 180 200 268 108" fill="none" stroke="#2e9e8f" stroke-width="3" stroke-dasharray="6,4"/><path d="M 80 240 L 95 235 L 90 250 Z" fill="#2e9e8f"/><path d="M 268 108 L 256 110 L 264 120 Z" fill="#2e9e8f"/><rect x="360" y="60" width="280" height="220" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">换一条弯曲的路</text><circle cx="420" cy="240" r="12" fill="#4fb3a5"/><text x="420" y="262" font-size="12" fill="#234b45" text-anchor="middle">A</text><circle cx="600" cy="100" r="12" fill="#234b45"/><text x="600" y="82" font-size="12" fill="#234b45" text-anchor="middle">B</text><path d="M 432 232 C 480 120 520 260 588 110" fill="none" stroke="#4fb3a5" stroke-width="3"/><circle cx="560" cy="180" r="8" fill="#234b45"/><text x="500" y="262" font-size="13" fill="#234b45" text-anchor="middle">两条路静电力做功相等</text></svg>', caption: '图1　把同一电荷从 A 移到 B，无论走直线（左）还是弯曲的路（右），静电力做的功都相同。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电势能：静电力做功等于初末电势能之差</text><rect x="40" y="60" width="280" height="220" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">静电力做正功</text><text x="100" y="150" font-size="13" fill="#234b45">E_pA</text><text x="240" y="150" font-size="13" fill="#234b45">E_pB</text><line x1="100" y1="160" x2="100" y2="200" stroke="#2e9e8f" stroke-width="6"/><line x1="240" y1="160" x2="240" y2="200" stroke="#4fb3a5" stroke-width="6"/><text x="170" y="195" font-size="13" fill="#234b45" text-anchor="middle">减少</text><text x="180" y="255" font-size="12" fill="#234b45" text-anchor="middle">E_pB = E_pA − W</text><rect x="360" y="60" width="280" height="220" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">外力克服静电力</text><text x="420" y="150" font-size="13" fill="#234b45">E_pA</text><text x="560" y="150" font-size="13" fill="#234b45">E_pB</text><line x1="420" y1="160" x2="420" y2="200" stroke="#4fb3a5" stroke-width="6"/><line x1="560" y1="160" x2="560" y2="200" stroke="#2e9e8f" stroke-width="6"/><text x="490" y="195" font-size="13" fill="#234b45" text-anchor="middle">增加</text><text x="500" y="255" font-size="12" fill="#234b45" text-anchor="middle">E_pB = E_pA + W</text></svg>', caption: '图2　静电力做正功时电势能减少（左），外力克服静电力做功时电势能增加（右），变化量等于功的大小。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电势 φ = E_p / q 只由位置决定</text><rect x="40" y="60" width="280" height="220" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">放不同电荷</text><circle cx="100" cy="170" r="18" fill="#4fb3a5"/><text x="100" y="175" font-size="12" fill="#234b45" text-anchor="middle">q</text><circle cx="260" cy="170" r="18" fill="#234b45"/><text x="260" y="175" font-size="12" fill="#e6f4f1" text-anchor="middle">2q</text><text x="180" y="235" font-size="13" fill="#234b45" text-anchor="middle">E_p 不同</text><rect x="360" y="60" width="280" height="220" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">比值 φ 相同</text><text x="420" y="160" font-size="14" fill="#234b45">φ = E_p / q</text><text x="500" y="200" font-size="14" fill="#234b45">= 2E_p / 2q</text><text x="500" y="245" font-size="13" fill="#234b45" text-anchor="middle">位置不变则 φ 不变</text></svg>', caption: '图3　同一位置放不同电量的电荷，电势能 E_p 不同，但 E_p 与 q 的比值（电势 φ）相同，说明 φ 只由位置决定。' }
    ],
    exercises: [
      { type: 'choice', question: '关于静电力做功的特点，下列说法正确的是？', options: ['静电力做功与电荷经过的路径有关', '静电力做功与电荷的起始和终止位置有关，与路径无关', '静电力做功一定大于零', '只有匀强电场中静电力做功才与路径无关'], answer: '静电力做功与电荷的起始和终止位置有关，与路径无关', explanation: '静电力是保守力，它做的功只由电荷的起始位置和终止位置决定，与中间经过哪条路径无关，这一点和重力做功类似。该结论对任意静电场都成立，并不局限于匀强电场。静电力做功可正可负，取决于电场力与位移的夹角。' },
      { type: 'choice', question: '一个电荷在电场中从 A 点移到 B 点，静电力对它做了正功，则？', options: ['电势能增加', '电势能减少', '电势能不变', '无法判断电势能变化'], answer: '电势能减少', explanation: '静电力做正功时，电势能减少，减少的量正好等于静电力做的功，即 W_AB = E_pA − E_pB。反之若静电力做负功（外力克服静电力做功），电势能才增加。这是功能关系的直接体现。' },
      { type: 'choice', question: '关于电势 φ = E_p / q，下列说法正确的是？', options: ['电势 φ 与检验电荷的电量 q 成正比', '电势 φ 由电场和该点位置决定，与检验电荷无关', '没有检验电荷时该点就没有电势', '电势 φ 与电势能 E_p 无关'], answer: '电势 φ 由电场和该点位置决定，与检验电荷无关', explanation: 'φ = E_p / q 是定义式而非决定式。电势是电场本身的性质，由电场分布和该点位置决定；放入不同电量的检验电荷，其电势能 E_p 会成比例变化，但比值 φ 保持不变。即使不放入检验电荷，该点的电势依然存在。' },
      { type: 'fill', question: '电场中某点电势等于该点电荷的电势能 E_p 与电荷电量 q 的比值，即 φ = ___。', answer: 'E_p / q', explanation: '电势的定义式为 φ = E_p / q，单位是伏特（V），1 V = 1 J/C。它表示单位正电荷在该点具有的电势能，反映的是电场中该位置本身的性质，与是否放入检验电荷以及放入多大的电荷都无关。' },
      { type: 'fill', question: '在实际电路和实验中，通常规定大地或无穷远处的电势为零；在负电荷产生的电场中，离负电荷越近的地方电势越___（填"高"或"低"）。', answer: '低', explanation: '负电荷产生的电场中，各点电势均为负值，离负电荷越近电势负得越多，也就是电势越低。比较电势高低时要看数值大小，−3 V 比 −1 V 更低。这一点容易因负号产生误判，需特别注意。' }
    ]
  });
})();
