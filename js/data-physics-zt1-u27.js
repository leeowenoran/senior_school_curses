/* ============================================================
 * 高三复习 · 力学综合 · 专题六 动量与碰撞
 * 课时27：动量与能量综合问题（爆炸、反冲、板块与子弹打木块）
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u27',
    name: '动量与能量综合问题（爆炸、反冲、板块与子弹打木块）',
    chapter: '力学综合 · 专题六 动量与碰撞',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、爆炸问题' },
      { type: 'paragraph', text: '爆竹炸开、炮弹分裂，都是爆炸。爆炸时间极短，内部火药产生的推力（内力）远大于重力等外力，所以系统动量守恒；同时化学能转化为碎片动能，系统机械能增加。处理爆炸题，先列动量守恒，再用能量关系算各部分速度或动能。' },
      { type: 'keypoint', label: '重点·爆炸的特点', text: '<strong>爆炸过程时间极短，系统动量守恒；但机械能增加（化学能转化）。</strong>若原来静止，爆炸后各碎片动量矢量和仍为零，向各方向飞散。' },
      { type: 'example', label: '例题·静止爆炸后两碎片', text: '质量为 M 的炮弹静止在空中等高处爆炸成质量相等的两块，一块以 v 竖直向上，求另一块的速度。<br><br><strong>解析</strong>：<br>爆炸瞬间动量守恒，初动量为 0。设另一块速度为 v₂（向上为正）。<br>0 = (M/2)×v + (M/2)×v₂，得 v₂ = −v。<br>即另一块以大小 v 竖直向下飞出，两碎片动量抵消。' },
      { type: 'list', items: ['爆炸前后动量守恒（时间极短、内力远大于外力）', '爆炸后机械能增加，不能用机械能守恒', '原来静止则各碎片动量矢量和为零', '常结合动能关系求速度大小或动能分配'] },
      { type: 'heading', text: '二、反冲运动' },
      { type: 'paragraph', text: '反冲是爆炸的"连续版"：喷气式飞机、火箭、射击时的后坐力，都是一部分物质向后喷出、主体向前运动。系统不受外力（或外力可忽略）时，向后喷出的物质带走的动量，由主体获得等大反向的动量来补偿。' },
      { type: 'keypoint', label: '重点·反冲规律', text: '<strong>反冲运动中，系统不受外力或合外力为零时总动量守恒。</strong>若初态静止，则"喷出部分动量 + 主体动量 = 0"，主体获得与喷出物反向的动量。火箭靠不断喷出燃气获得推力。' },
      { type: 'example', label: '例题·火箭反冲', text: '火箭在太空中（不受外力）以速度 v 向前，向后喷出质量为 m、相对火箭速度 u 的燃气。取向前为正，求喷气后火箭速度变化。<br><br><strong>解析</strong>：<br>系统动量守恒。设火箭剩余质量 M、喷气后速度 V。<br>初动量：(M+m)×v。末动量：M×V + m×(V − u)（燃气对地速度 = V − u）。<br>由 (M+m)v = MV + m(V−u) 解得 V = v + m×u/(M+m)，火箭速度增大，实现加速。' },
      { type: 'tip', label: '提示', text: '<strong>反冲题里"相对速度"要换成"对地速度"再代入动量守恒。</strong>燃气相对火箭速度为 u，其对地速度等于火箭末速度 V 减 u。弄错参照系是反冲题最常见的失分点。' },
      { type: 'warn', label: '易错', text: '<strong>地面上的反冲（如炮车发射）要考虑重力与支持力的竖直平衡，但水平方向动量守恒；若炮弹斜射，水平方向仍守恒、竖直方向不守恒。</strong>别把"整体不受外力"想当然，要分清哪个方向合外力为零。' },
      { type: 'heading', text: '三、子弹打木块' },
      { type: 'paragraph', text: '子弹射入木块是典型的"完全非弹性碰撞 + 能量转化"问题：子弹留在木块中、两者共速，动守恒但机械能不守恒，损失的动能转化为内能（摩擦生热）。常结合平抛、木板运动等场景考。' },
      { type: 'keypoint', label: '重点·子弹打木块的规律', text: '<strong>水平方向动量守恒：m×v₀ = (m + M) × v′；机械能损失 ΔE = (1/2)m×v₀² − (1/2)(m+M)v′²，转化为内能 Q = f×d（d 为相对位移）。</strong>若木块放在光滑面，两者共速后一起运动。' },
      { type: 'example', label: '例题·求共速与发热', text: '质量 m 的子弹以 v₀ 射入静止在光滑水平面的质量 M 木块并留在其中。求共速 v′ 和产生的内能 Q。<br><br><strong>解析</strong>：<br>动量守恒：m×v₀ = (m+M)×v′，故 v′ = m×v₀/(m+M)。<br>内能 Q = 初动能 − 末动能 = (1/2)m×v₀² − (1/2)(m+M)v′²。<br>代入 v′ 可得 Q = (1/2) m M v₀²/(m+M)，全部由摩擦生热。' },
      { type: 'table', headers: ['物理量', '子弹打木块', '说明'], rows: [['系统动量', '守恒', '水平方向无外力'], ['系统机械能', '减少', '损失转内能'], ['碰后状态', '共速 v′', '完全非弹性'], ['发热 Q', '= f × d', 'd 为子弹相对木块位移']] },
      { type: 'warn', label: '易错', text: '<strong>生成的内能 Q = f × d 中的 d 是"相对位移"，不是木块的位移，也不是子弹的位移。</strong>d = 子弹对地位移 − 木块对地位移。很多同学直接拿木块位移算热，得到错误结果。' },
      { type: 'heading', text: '四、板块模型' },
      { type: 'paragraph', text: '板块模型是小滑块在长木板上滑动：最初滑块快、木板慢，摩擦力使滑块减速、木板加速，直到两者共速；之后若地面光滑则一起匀速。全过程动量守恒（水平），但机械能因摩擦而损失。它是子弹打木块的"升级版"，更常考多阶段。' },
      { type: 'list', items: ['先判受力：滑块受摩擦减速，木板受摩擦加速', '达共速前：分别对两者用牛顿定律或运动学', '全过程：水平方向动量守恒求共速', '能量：损失的机械能 = f × 相对位移 d，转内能', '共速后若地面光滑则一起匀速，不再有相对滑动'] },
      { type: 'example', label: '例题·板块共速', text: '质量 m 的滑块以 v₀ 滑上静止在光滑水平面、质量 M 的长木板，动摩擦因数 μ。求最终共同速度及此过程相对位移 d。<br><br><strong>解析</strong>：<br>水平方向动量守恒：m×v₀ = (m+M)×v′，v′ = m×v₀/(m+M)。<br>能量：μ×m×g×d = (1/2)m×v₀² − (1/2)(m+M)v′²，得 d = [m×v₀²/(m+M) − m²v₀²/(m+M)²] / (2μ g)。<br>即摩擦生热等于摩擦力乘相对位移。' },
      { type: 'tip', label: '提示', text: '<strong>板块与子弹打木块本质相同：动量守恒求共速，能量守恒（含热）求相对位移。</strong>区别在于子弹打木块相对位移是"子弹进入深度"，板块是"滑块在板上滑过的长度"。记熟"Q = f × d"这一条，两类题通吃。' },
      { type: 'table', headers: ['模型', '动量', '机械能', '关键量'], rows: [['爆炸', '守恒', '增加', '化学能→动能'], ['反冲', '守恒', '增加', '喷出物对地速度'], ['子弹打木块', '守恒', '减少', '共速、发热 Q=f×d'], ['板块', '守恒', '减少', '共速、相对位移 d']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">爆炸：原静止，碎片动量相互抵消</text><rect x="60" y="100" width="200" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="160" y="165" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">炮弹 M（静止）</text><rect x="420" y="100" width="200" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="520" y="130" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">炸成两碎片</text><circle cx="470" cy="175" r="16" fill="#4fb3a5"/><line x1="486" y1="175" x2="520" y2="175" stroke="#234b45" stroke-width="3"/><polygon points="520,169 536,175 520,181" fill="#234b45"/><text x="455" y="205" font-size="11" fill="#234b45">向上 v</text><circle cx="570" cy="175" r="16" fill="#4fb3a5"/><line x1="554" y1="175" x2="520" y2="175" stroke="#234b45" stroke-width="3"/><polygon points="520,169 504,175 520,181" fill="#234b45"/><text x="585" y="205" font-size="11" fill="#234b45">向下 v</text><text x="160" y="252" font-size="13" fill="#234b45" text-anchor="middle">初动量 0</text><text x="520" y="252" font-size="13" fill="#234b45" text-anchor="middle">末动量仍 0</text></svg>', caption: '图1　炮弹原静止爆炸成两等质量碎片，动量矢量和为零，机械能增加。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">反冲：燃气向后喷，火箭向前加速</text><rect x="250" y="110" width="180" height="80" rx="10" fill="#4fb3a5"/><text x="340" y="158" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">火箭主体</text><line x1="250" y1="150" x2="150" y2="150" stroke="#234b45" stroke-width="3"/><polygon points="150,144 134,150 150,156" fill="#234b45"/><text x="200" y="180" font-size="13" fill="#234b45" text-anchor="middle">燃气(向后 u)</text><line x1="430" y1="150" x2="560" y2="150" stroke="#4fb3a5" stroke-width="3"/><polygon points="560,144 576,150 560,156" fill="#4fb3a5"/><text x="495" y="180" font-size="13" fill="#234b45" text-anchor="middle">火箭加速向前</text><text x="340" y="252" font-size="13" fill="#234b45" text-anchor="middle">喷出物动量 + 主体动量 = 0（守恒）</text></svg>', caption: '图2　火箭向后喷出燃气获得反冲，主体向前加速，系统动量守恒。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">子弹打木块：共速后机械能转化为内能</text><rect x="60" y="120" width="260" height="110" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="190" y="150" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">碰前</text><circle cx="120" cy="175" r="16" fill="#4fb3a5"/><line x1="136" y1="175" x2="190" y2="175" stroke="#234b45" stroke-width="3"/><polygon points="190,169 206,175 190,181" fill="#234b45"/><text x="120" y="210" font-size="11" fill="#234b45">子弹 v₀</text><rect x="240" y="162" width="50" height="36" rx="4" fill="#4fb3a5"/><text x="265" y="210" font-size="11" fill="#234b45">木块静</text><rect x="380" y="120" width="260" height="110" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="510" y="150" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">碰后共速</text><circle cx="450" cy="175" r="16" fill="#4fb3a5"/><rect x="470" y="162" width="50" height="36" rx="4" fill="#4fb3a5"/><line x1="560" y1="175" x2="510" y2="175" stroke="#234b45" stroke-width="3"/><polygon points="510,169 494,175 510,181" fill="#234b45"/><text x="510" y="210" font-size="11" fill="#234b45">共同 v′</text><text x="340" y="262" font-size="13" fill="#234b45" text-anchor="middle">损失动能 Q = f × d（相对位移）</text></svg>', caption: '图3　子弹打入木块后共速，系统动量守恒，损失的动能转化为内能。' }
    ],
    exercises: [
      { type: 'choice', question: '关于爆炸过程，下列说法正确的是？', options: ['爆炸过程动量不守恒', '爆炸过程机械能守恒', '爆炸过程动量守恒但机械能增加', '原来静止爆炸后碎片动量同向'], answer: '爆炸过程动量守恒但机械能增加', explanation: '爆炸时间极短，内力远大于外力，系统动量守恒；同时火药化学能转化为碎片动能，系统机械能增加，因此不能用机械能守恒。若原来静止，爆炸后各碎片动量矢量和仍为零，方向相反、并不同向。正确选项是"爆炸过程动量守恒但机械能增加"。' },
      { type: 'choice', question: '子弹水平射入静止木块并留在其中（地面光滑），关于此过程正确的是？', options: ['动量不守恒', '机械能守恒', '动量守恒但机械能减少，转为内能', '两者始终速度不同'], answer: '动量守恒但机械能减少，转为内能', explanation: '子弹打木块在水平方向无外力，系统动量守恒；但碰后两者共速，属于完全非弹性碰撞，机械能有损失并转化为内能，故机械能不守恒。正确选项是"动量守恒但机械能减少，转为内能"。' },
      { type: 'choice', question: '在子弹打木块问题中，转化为内能的热量 Q 等于？', options: ['摩擦力乘木块位移', '摩擦力乘子弹位移', '摩擦力乘子弹相对木块的位移', '子弹初动能'], answer: '摩擦力乘子弹相对木块的位移', explanation: '系统损失的机械能全部转化为内能，而内能 Q = 摩擦力 f 乘以子弹相对木块的相对位移 d，即 Q = f × d。注意 d 是相对位移，不是木块的位移也不是子弹对地位移。这是动量与能量综合问题最常考的易错点。正确选项是"摩擦力乘子弹相对木块的位移"。' },
      { type: 'fill', question: '子弹质量 m 以 v₀ 射入静止质量 M 的木块并留在其中（地面光滑），由动量守恒可得两者共同速度 v′ = ___（用 m、M、v₀ 表示）。', answer: 'm×v₀/(m+M)', explanation: '子弹打木块属完全非弹性碰撞，水平方向动量守恒：m×v₀ = (m + M) × v′，解得共同速度 v′ = m × v₀ / (m + M)。碰后两者以相同速度运动，系统机械能有损失并转化为内能。' },
      { type: 'fill', question: '板块模型中，滑块在木板上滑动产生的内能 Q = f × d，其中 d 指的是滑块与木块之间的___（填"相对位移"或"木块位移"）。', answer: '相对位移', explanation: '板块（或子弹打木块）模型中，摩擦生热等于滑动摩擦力 f 乘以两者间的相对位移 d，即 Q = f × d。d 是滑块相对木块的位移，等于滑块对地位移减去木块对地位移，绝不是单独某一方对地的位移。这是处理此类综合题的关键关系。' }
    ]
  });
})();
