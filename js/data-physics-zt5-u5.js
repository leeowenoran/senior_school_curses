/* ============================================================
 * 高三复习 · 计算压轴 · 专题一 力学计算
 * 课时5：机械能守恒与功能关系综合计算
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u5',
    name: '机械能守恒与功能关系综合计算',
    chapter: '计算压轴 · 专题一 力学计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、动能、势能和机械能' },
      { type: 'paragraph', text: '能量是物体"能做功的本领"。动能是物体因运动具有的能量，势能是物体因位置或形变具有的能量。动能加势能统称为机械能。计算能量变化，是绕开复杂运动过程、直接比较初末状态的利器。' },
      { type: 'keypoint', label: '重点·三种能量', text: '<strong>动能 Eₖ = ½×m×v²（与速度平方成正比）；重力势能 Eₚ = m×g×h（与高度有关，h 选参考面）；弹簧弹性势能 E弹 = ½×k×x²（x 为形变量）。机械能 E = Eₖ + Eₚ（重力势能+弹性势能）。</strong>' },
      { type: 'list', items: ['动能看速度：速度翻倍，动能变4倍', '重力势能看高度，需先规定零势能面', '弹簧势能看形变量 x = 伸长或压缩量', '机械能 = 动能 + 势能，是一个状态量'] },
      { type: 'paragraph', text: '规定零势能面后，物体在该面以上 h 为正、以下为负。比较能量时统一用同一个零势能面，否则会出错。' },
      { type: 'heading', text: '二、动能定理：合外力做功改变动能' },
      { type: 'paragraph', text: '动能定理说：合外力对物体做的总功，等于物体动能的变化量。写成 W合 = ΔEₖ = ½×m×v₂² − ½×m×v₁²。它不要求过程细节，只比较初末状态，特别适合多过程、变力做功的题。' },
      { type: 'keypoint', label: '重点·动能定理', text: '<strong>W合 = ΔEₖ = ½×m×v₂² − ½×m×v₁²。</strong>W合 是各力做功的代数和（重力、弹力做功算在内，也可单独列出）。若只有重力做功，就自然得到机械能守恒。它把"功"和"动能变化"直接挂钩。' },
      { type: 'example', label: '例题·动能定理', text: '质量 2 kg 物体从静止沿光滑斜面下滑 5 m，斜面高 3 m，求到底端速度。（g=10）<br><br><strong>解析</strong>：只有重力做功 W = m×g×h = 2×10×3 = 60 J。由动能定理 W = ½×m×v² − 0，得 60 = ½×2×v² = v²，v = √60 ≈ 7.75 m/s。若用牛顿定律先求 a 再算 v 也能得到同样结果，但动能定理一步到位。' },
      { type: 'list', items: ['明确初、末状态的速度，算出动能变化', '算各力做功（力×位移在力方向的分量）', '重力做功 W_G = m×g×Δh，与路径无关', '代数和代入 W合 = ΔEₖ 求解未知量'] },
      { type: 'tip', label: '提示·重力做功特点', text: '<strong>重力做功只与初末高度差有关，与路径无关：W_G = m×g×Δh。</strong>沿曲线、斜面还是折线下落，只要高度差相同，重力做功就相同。这正说明重力势能只由高度决定。' },
      { type: 'heading', text: '三、机械能守恒定律' },
      { type: 'paragraph', text: '如果只有重力或弹簧弹力做功（其他力不做功或做功代数和为零），物体的动能和势能相互转化，但机械能总量保持不变。这就是机械能守恒。' },
      { type: 'keypoint', label: '重点·守恒条件与式子', text: '<strong>条件：只有重力、弹力做功（或外力做功代数和为零）。</strong>表达式：Eₖ₁ + Eₚ₁ = Eₖ₂ + Eₚ₂；或 ΔEₖ = −ΔEₚ（动能增加量等于势能减少量）。弹簧参与时弹力属"系统内部保守力"，可计入势能一起守恒。' },
      { type: 'example', label: '例题·机械能守恒', text: '长为 L 的轻绳系小球，从水平位置静止释放，求到最低点速度。<br><br><strong>解析</strong>：只有重力做功，机械能守恒。初态：最高点动能0，势能取最低点为0则初势能 = m×g×L。末态：最低点势能0，动能 ½×m×v²。守恒：m×g×L = ½×m×v²，得 v = √(2×g×L)。过程再复杂也不用管，只比初末。' },
      { type: 'list', items: ['先判断是否满足守恒条件（只有重、弹力做功）', '选零势能面，写出初、末机械能', '列 E初 = E末 方程', '弹簧参与时把弹性势能 ½×k×x² 算进势能'] },
      { type: 'tip', label: '提示·守恒vs定理', text: '<strong>能用机械能守恒就用守恒（只比状态），有摩擦等耗散力时就用动能定理或功能关系。</strong>守恒是动能定理在"只有保守力做功"时的特例，更简洁，但条件要满足。' },
      { type: 'heading', text: '四、功能关系与传送带、弹簧综合' },
      { type: 'paragraph', text: '当存在摩擦力、阻力等非保守力时，机械能不再守恒，转化的机械能等于这些力做的功。最典型：滑动摩擦力做功产生热量 Q = f×s相对，传送带问题常要算这部分。弹簧则储存弹性势能，往复运动中与动能不断转化。' },
      { type: 'keypoint', label: '重点·功能关系', text: '<strong>除重力和弹力外，其他力做的总功 = 机械能变化：W其他 = ΔE机。</strong>滑动摩擦力做功：产生热量 Q = f×s相对（s相对 是接触面相对滑动距离）。弹簧弹性势能 E弹 = ½×k×x²，最大压缩/伸长处动能为零、弹性势能最大。' },
      { type: 'example', label: '例题·传送带', text: '物体以 v=2 m/s 滑上以 u=4 m/s 同向运转的传送带，动摩擦因数 μ=0.2，质量 m=1 kg，经多久与带同速？（g=10）<br><br><strong>解析</strong>：物体受滑动摩擦向前加速 a = μ×g = 2 m/s²。速度从 2 增到 4 需 t = (4−2)/2 = 1 秒。此过程物体位移 s物 = (2+4)/2×1 = 3 m，带位移 s带 = 4×1 = 4 m，相对滑动 s相对 = 1 m，生热 Q = f×s相对 = μ×m×g×1 = 0.2×1×10×1 = 2 J。' },
      { type: 'table', headers: ['模型', '关键能量关系', '注意点'], rows: [['光滑斜面', '机械能守恒', '只有重力做功'], ['弹簧振子', 'Eₖ + ½×k×x² = 常量', '最大形变处动能为0'], ['传送带(滑动摩擦)', 'W_f = −Q，Q = f×s相对', '相对位移算生热'], ['有阻力下落', 'W阻 = ΔE机（负值）', '阻力做负功减机械能']] },
      { type: 'warn', label: '易错·相对位移', text: '<strong>滑动摩擦力生热 Q = f×s相对，这里的 s相对 是"两接触面的相对滑动距离"，不是物体对地位移。</strong>很多同学直接拿物体位移算热量导致错误。物体对地位移用于算摩擦力对物体做的功（改变物体动能），两者不同。' },
      { type: 'paragraph', text: '能量法解题三板斧：①判断能否机械能守恒（只有重、弹力做功）；②能守恒就列 E初=E末；③有摩擦等就用动能定理 W合=ΔEₖ 或功能关系 W其他=ΔE机。传送带盯相对位移算生热，弹簧盯最大形变处动能为零。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">机械能守恒：动能与势能相互转化总量不变</text><line x1="80" y1="270" x2="600" y2="270" stroke="#2e9e8f" stroke-width="3"/><circle cx="340" cy="90" r="10" fill="#234b45"/><text x="340" y="78" font-size="13" fill="#234b45" text-anchor="middle">最高点(全势能)</text><circle cx="340" cy="250" r="10" fill="#4fb3a5"/><text x="340" y="295" font-size="13" fill="#234b45" text-anchor="middle">最低点(全动能)</text><path d="M340 100 Q 200 180 340 250" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="6,4"/><path d="M340 100 Q 480 180 340 250" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="6,4"/><text x="120" y="180" font-size="13" fill="#234b45" text-anchor="middle">Eₖ+Eₚ=常量</text></svg>', caption: '图1　单摆式运动，最高点势能最大动能为零，最低点反之，总量不变。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">弹簧：压缩量最大处动能为0，弹性势能最大</text><rect x="120" y="130" width="60" height="50" rx="6" fill="#4fb3a5"/><text x="150" y="160" font-size="13" fill="#234b45" text-anchor="middle">物块</text><g stroke="#2e9e8f" stroke-width="3"><line x1="180" y1="142" x2="200" y2="142"/><line x1="200" y1="138" x2="200" y2="146"/><line x1="200" y1="142" x2="220" y2="142"/><line x1="220" y1="138" x2="220" y2="146"/><line x1="220" y1="142" x2="240" y2="142"/><line x1="240" y1="138" x2="240" y2="146"/><line x1="240" y1="142" x2="260" y2="142"/></g><rect x="260" y="120" width="40" height="70" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="160" font-size="13" fill="#234b45" text-anchor="middle">墙</text><text x="430" y="150" font-size="13" fill="#234b45" text-anchor="middle">x最大→E弹=½×k×x²最大</text></svg>', caption: '图2　弹簧被压缩到最大程度时物体瞬时静止，动能为零，弹性势能达到最大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">传送带：物体与带速度不同，相对滑动产生热量</text><rect x="80" y="180" width="520" height="30" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="165" font-size="13" fill="#234b45" text-anchor="middle">传送带u=4向右</text><rect x="140" y="140" width="50" height="40" rx="6" fill="#4fb3a5"/><text x="165" y="165" font-size="12" fill="#234b45" text-anchor="middle">物v=2</text><line x1="195" y1="160" x2="320" y2="160" stroke="#234b45" stroke-width="2"/><text x="255" y="152" font-size="12" fill="#234b45" text-anchor="middle">s相对</text><text x="430" y="220" font-size="13" fill="#234b45" text-anchor="middle">Q=f×s相对</text></svg>', caption: '图3　物体速度小于传送带，相对滑动距离 s相对 决定摩擦生热 Q = f×s相对。' }
    ],
    exercises: [
      { type: 'choice', question: '关于机械能守恒，下列说法正确的是？', options: ['有摩擦力时机械能一定不守恒', '只有重力和弹力做功时机械能守恒', '物体受合力为零时机械能守恒', '动能增加则机械能一定增加'], answer: '只有重力和弹力做功时机械能守恒', explanation: '机械能守恒的条件是只有重力或系统内的弹力做功（其他力做功代数和为零）。静摩擦力若不做功也可能守恒，并非"有摩擦就一定不守恒"，所以第一项错误。合力为零只说明平衡状态，与机械能是否守恒无直接关系。动能增加若势能减少同等量，机械能仍可不变。故只有第二项准确。' },
      { type: 'choice', question: '质量为 1 kg 的物体，速度由 2 m/s 增至 6 m/s，动能变化量为？', options: ['8 J', '16 J', '32 J', '24 J'], answer: '16 J', explanation: '动能变化 ΔEₖ = ½×m×v₂² − ½×m×v₁² = ½×1×36 − ½×1×4 = 18 − 2 = 16 J。动能与速度平方成正比，不能简单用速度差计算。也可由动能定理：合外力做功等于这 16 J。' },
      { type: 'choice', question: '滑动摩擦力生热 Q 应该用哪个位移计算？', options: ['物体对地位移', '传送带对地位移', '两接触面的相对滑动距离', '物体初位置到末位置距离'], answer: '两接触面的相对滑动距离', explanation: '滑动摩擦力产生的热量 Q = f×s相对，其中 s相对 是两接触面之间的相对滑动距离，不是物体对地位移。物体对地位移用于计算摩擦力对物体所做的功（影响物体动能），二者物理意义不同，不能直接混用。' },
      { type: 'fill', question: '质量 2 kg 物体从静止沿光滑斜面下滑高度 5 m，到底端速度大小为___m/s。（g=10）', answer: '10', explanation: '光滑斜面只有重力做功，机械能守恒或动能定理：m×g×h = ½×m×v²。代入 2×10×5 = ½×2×v²，得 100 = v²，v = 10 m/s。可见结果与斜面倾角、长度无关，只由高度差决定。' },
      { type: 'fill', question: '弹簧劲度系数 k = 200 N/m，被压缩 x = 0.1 m，其弹性势能为___J。', answer: '1', explanation: '弹簧弹性势能公式 E弹 = ½×k×x² = ½×200×0.1² = 100×0.01 = 1 J。注意代入的是形变量 x=0.1 m，且平方后数量变小。该势能在最大压缩处达到最大、此时物体动能为零。' }
    ]
  });
})();
