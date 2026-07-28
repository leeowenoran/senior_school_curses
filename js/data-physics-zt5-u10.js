/* ============================================================
 * 高三复习 · 计算压轴 · 专题二 电磁学计算
 * 课时10：带电粒子在复合场中运动计算
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u10',
    name: '带电粒子在复合场（电场+磁场+重力）中运动计算',
    chapter: '计算压轴 · 专题二 电磁学计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、复合场是什么' },
      { type: 'paragraph', text: '"复合场"就是电场、磁场和重力场中两个或三个同时存在的区域。带电粒子在复合场中运动，同时受到电场力、洛伦兹力和重力（若考虑）的作用。分析这类题，第一步永远是受力分析，把每个力都算清楚。' },
      { type: 'keypoint', label: '重点·三种力', text: '<strong>电场力 F电 = q × E，方向与 E 同向（正电荷）或反向（负电荷）。</strong><br><strong>洛伦兹力 F洛 = q × v × B（v⊥B 时），方向由左手定则，永远垂直速度。</strong><br><strong>重力 G = m × g（微观粒子如电子、质子常可忽略，宏观带电小球不可忽略）。</strong>' },
      { type: 'list', items: ['先判断要不要考虑重力：电子、质子、离子一般忽略重力', '电场力与速度无关，洛伦兹力与速度有关且永不做功', '重力恒向下，大小为 mg', '受力分析后，合力决定加速度（牛顿第二定律）'] },
      { type: 'paragraph', text: '复合场题型主要有两类：一是"直线运动型"（合力为零或合力沿速度方向），二是"圆周运动型"（洛伦兹力提供向心力，其余力合力为零）。' },
      { type: 'heading', text: '二、匀速直线运动：速度选择器原理' },
      { type: 'paragraph', text: '在正交的匀强电场和匀强磁场中，若粒子沿垂直于 E 和 B 的方向射入，能保持匀速直线通过的条件是电场力与洛伦兹力平衡。这就是速度选择器的原理。' },
      { type: 'keypoint', label: '重点·速度选择器', text: '<strong>匀速直线条件：qE = qvB，即 v = E / B。</strong><br>只有速度恰好等于 E/B 的粒子能直线通过，与电荷种类、质量无关。速度偏大则洛伦兹力大偏向一边，偏小则电场力大偏向另一边。' },
      { type: 'list', items: ['E 和 B 必须相互垂直，且都垂直于粒子速度', '通过速度 v = E/B，是唯一能直线穿过的', '若交换电场方向，则选择的速度方向也需相应改变', '速度选择器只筛选速度大小，不筛选电荷正负（正负受力同时反向仍平衡）'] },
      { type: 'example', label: '例题·速度选择器', text: '例：速度选择器中 E = 3.0×10³ V/m，B = 0.10 T，粒子沿垂直方向入射。求能直线通过的速度。<br><strong>解析</strong>：平衡条件 qE = qvB 约去 q 得 v = E/B = 3.0×10³ / 0.10 = 3.0×10⁴ m/s。只有速度等于 3.0×10⁴ m/s 的粒子能直线通过。' },
      { type: 'warn', label: '易错', text: '<strong>速度选择器平衡时电场力与洛伦兹力必须大小相等、方向相反，二者绝不能同时指向同一侧。</strong>判定方向要分别用正电荷受力（电场方向）和左手定则（洛伦兹力），确认二者反向后才能令 qE = qvB。负电荷两力同时反向，仍可取平衡。' },
      { type: 'heading', text: '三、匀速圆周运动：电场力与重力平衡' },
      { type: 'paragraph', text: '若空间同时存在电场、磁场和重力场，且电场力与重力恰好平衡（qE = mg），则粒子只受洛伦兹力，洛伦兹力充当向心力，粒子在垂直于磁场的平面内做匀速圆周运动，半径 r = mv/(qB)。' },
      { type: 'keypoint', label: '重点·复合场圆周运动', text: '<strong>若 qE = mg（电场力与重力平衡），则粒子仅受洛伦兹力，做圆周运动：r = m×v/(q×B)，T = 2π×m/(q×B)。</strong><br>若三个力不平衡，则做一般曲线运动，需分解求解。' },
      { type: 'list', items: ['先列平衡方程 qE = mg 求电场 E 或粒子比荷', '平衡后按纯磁场圆周运动处理', '注意电场方向要使电场力与重力反向（如重力向下则电场力向上）', '若电场力与重力不平衡，合力不为零，轨迹不是圆'] },
      { type: 'heading', text: '四、一般曲线运动与能量法' },
      { type: 'paragraph', text: '当三个力都不平衡时，粒子做一般曲线运动。由于洛伦兹力不做功，只有重力和电场力做功，因此可以用动能定理：合外力做功（重力功 + 电场力功）等于动能变化。' },
      { type: 'keypoint', label: '重点·能量法', text: '<strong>动能定理：W_G + W_电 = Δ(½mv²)。</strong>其中重力功 W_G = mgh，电场力功 W_电 = q×U（U 为初末位置电势差）。<br>洛伦兹力不做功，不出现在能量方程中。' },
      { type: 'example', label: '例题·复合场能量', text: '例：带负电小球 q、质量 m 在电场 E（向上）与重力场中，从静止释放。若电场力大于重力，求下降高度 h 时的速度。<br><strong>解析</strong>：合力向上 F = qE − mg，向下运动位移 h 时合外力做负功 W = −(qE−mg)h = Δ(½mv²)。即 ½mv² = (mg−qE)h，v = √[2(mg−qE)h/m]。可见洛伦兹力不影响能量，只改变方向。' },
      { type: 'warn', label: '易错', text: '<strong>洛伦兹力永远不做功，列动能定理时千万不要把洛伦兹力写进功的式子。</strong>很多同学会误以为洛伦兹力也做功。正确做法是：只有重力和电场力做功，洛伦兹力只改变速度方向、不改变动能大小。' },
      { type: 'table', headers: ['运动类型', '受力特征', '处理方法'], rows: [['匀速直线', 'qE = qvB（正交场）', 'v = E/B'], ['匀速圆周', 'qE = mg 且只有洛伦兹力', 'r = mv/(qB)'], ['一般曲线', '三力不平衡', '牛顿第二定律 + 动能定理'], ['直线加速', '合力沿速度方向', '动能定理']] },
      { type: 'tip', label: '提示', text: '<strong>复合场解题四步：① 判断能否忽略重力；② 对每种力逐一分析方向与大小；③ 看是否平衡决定运动类型（直线/圆周/曲线）；④ 圆周用 r=mv/qB，曲线用动能定理（洛伦兹力不做功）。</strong>画图标注各力是关键。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">速度选择器：电场力与洛伦兹力平衡</text><rect x="120" y="100" width="200" height="120" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="220" y="130" font-size="12" fill="#234b45" text-anchor="middle" font-weight="bold">电场 E（向下）</text><text x="220" y="152" font-size="11" fill="#234b45" text-anchor="middle">F电 = qE 向上</text><text x="220" y="174" font-size="11" fill="#234b45" text-anchor="middle">磁场 B（垂直纸面）</text><text x="220" y="196" font-size="11" fill="#234b45" text-anchor="middle">F洛 = qvB 向下</text><circle cx="460" cy="160" r="8" fill="#4fb3a5"/><line x1="460" y1="160" x2="540" y2="160" stroke="#234b45" stroke-width="2"/><polygon points="540,154 540,166 552,160" fill="#234b45"/><text x="500" y="148" font-size="12" fill="#234b45">v</text><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">平衡时 qE = qvB，故 v = E / B</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">只有速度 v = E/B 的粒子直线通过</text></svg>', caption: '图1　速度选择器：电场力与洛伦兹力平衡，只有 v = E/B 的粒子直线通过。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电场力与重力平衡后的圆周运动</text><circle cx="320" cy="160" r="90" fill="none" stroke="#4fb3a5" stroke-width="3"/><circle cx="320" cy="160" r="4" fill="#234b45"/><text x="320" y="178" font-size="12" fill="#234b45" text-anchor="middle">圆心</text><circle cx="410" cy="160" r="6" fill="#234b45"/><line x1="410" y1="160" x2="470" y2="160" stroke="#234b45" stroke-width="2"/><polygon points="470,154 470,166 482,160" fill="#234b45"/><text x="445" y="148" font-size="12" fill="#234b45">v</text><line x1="320" y1="70" x2="320" y2="120" stroke="#234b45" stroke-width="2"/><text x="328" y="90" font-size="11" fill="#234b45">qE=mg</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">qE = mg 平衡时，仅洛伦兹力提供向心力</text></svg>', caption: '图2　电场力与重力平衡后，粒子只受洛伦兹力做圆周运动 r = mv/(qB)。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">复合场中三种力的受力分析</text><line x1="100" y1="160" x2="580" y2="160" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5 4"/><circle cx="340" cy="160" r="14" fill="#4fb3a5"/><line x1="340" y1="174" x2="340" y2="230" stroke="#234b45" stroke-width="2"/><text x="350" y="210" font-size="12" fill="#234b45">重力 mg</text><line x1="340" y1="146" x2="340" y2="90" stroke="#234b45" stroke-width="2"/><text x="350" y="100" font-size="12" fill="#234b45">电场力 qE</text><line x1="354" y1="160" x2="420" y2="180" stroke="#234b45" stroke-width="2"/><polygon points="420,174 422,186 432,180" fill="#234b45"/><text x="430" y="170" font-size="12" fill="#234b45">洛伦兹力 qvB</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">先受力分析，再判断运动类型</text></svg>', caption: '图3　复合场受力分析：重力、电场力、洛伦兹力三力共存。' }
    ],
    exercises: [
      { type: 'choice', question: '速度选择器中，粒子能沿直线匀速通过的条件是？', options: ['qE > qvB', 'qE = qvB（即 v = E/B）', 'qE < qvB', '只需要有磁场'], answer: 'qE = qvB（即 v = E/B）', explanation: '速度选择器里电场力与洛伦兹力必须大小相等、方向相反才能平衡，使粒子匀速直线通过，即 qE = qvB，约去 q 得 v = E/B。只有速度恰好等于 E/B 的粒子能直线通过，与其电荷正负、质量无关。' },
      { type: 'choice', question: '关于复合场中洛伦兹力做功，下列说法正确的是？', options: ['洛伦兹力可以做正功', '洛伦兹力可以做负功', '洛伦兹力不做功', '洛伦兹力有时做功有时不做'], answer: '洛伦兹力不做功', explanation: '洛伦兹力方向永远垂直于粒子的速度方向，力与位移垂直，因此洛伦兹力永远不做功。它只改变速度的方向，不改变速度的大小和动能。列动能定理时，功只来自重力和电场力。' },
      { type: 'choice', question: '若空间同时存在匀强电场、重力场和磁场，且 qE = mg，粒子垂直射入磁场，其运动是？', options: ['匀速直线', '匀加速直线', '匀速圆周运动，r = mv/(qB)', '静止'], answer: '匀速圆周运动，r = mv/(qB)', explanation: '电场力与重力平衡后，粒子所受合力只有洛伦兹力，洛伦兹力始终垂直于速度、提供向心力，因此做匀速圆周运动，半径 r = mv/(qB)，周期 T = 2πm/(qB)。电场和重力此时相互抵消，不影响圆周运动。' },
      { type: 'fill', question: '速度选择器中，能直线通过的粒子速度大小 v = ___（用电场强度 E 和磁感应强度 B 表示）。', answer: 'E / B', explanation: '平衡条件为电场力等于洛伦兹力：qE = qvB，约去电荷量 q 后得到 v = E/B。该速度唯一，与粒子种类和质量无关。速度偏大则洛伦兹力占优偏向一侧，偏小则电场力占优偏向另一侧。' },
      { type: 'fill', question: '在复合场中用动能定理解题时，做功的力只有___和___，而___不做功。', answer: '重力|电场力|洛伦兹力', explanation: '复合场中重力做功 W_G = mgh，电场力做功 W_电 = qU，二者都会改变粒子动能。洛伦兹力方向始终垂直于速度，永远不做功，因此不能写入动能定理的功的项。动能定理写为 W_G + W_电 = Δ(½mv²)。' }
    ]
  });
})();
