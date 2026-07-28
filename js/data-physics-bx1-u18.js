/* ============================================================
 * 高一物理 · 必修 第一册 · 第四章 运动和力的关系
 * 课时18：牛顿第二定律
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u18',
    name: '牛顿第二定律',
    chapter: '必修第一册 · 第四章 运动和力的关系',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、牛顿第二定律的内容' },
      { type: 'paragraph', text: '上一节的实验告诉我们：加速度和合力成正比、和质量成反比。牛顿把它总结成一条定律，这就是牛顿第二定律，它是解决"受力后怎么运动"问题的核心工具，也是整个经典力学的基石之一。' },
      { type: 'keypoint', label: '重点·牛顿第二定律', text: '<strong>物体的加速度 a 的大小跟它所受合力 F 的大小成正比，跟它的质量 m 成反比；加速度的方向跟合力的方向相同。</strong>关系式写作 a = F / m，也可写成 F = m × a。' },
      { type: 'paragraph', text: '这条定律有三层意思。第一是"大小关系"：力越大、加速度越大，质量越大、加速度越小。第二是"方向关系"：加速度朝哪儿，完全由合力朝哪儿决定，二者方向始终一致。第三是"因果关系"：力是原因，加速度是结果。' },
      { type: 'list', items: ['定量关系：加速度 a 与合力 F 成正比，与质量 m 成反比', '方向关系：加速度方向始终与合力方向相同', '因果关系：力是产生加速度的原因，不是维持运动的原因', '瞬时关系：合力一变，加速度立刻跟着变'] },
      { type: 'heading', text: '二、公式与单位' },
      { type: 'paragraph', text: '定律的公式最常写成 F = m × a。这里要特别强调：公式里的 F 指的是物体受到的"合力"，不是某一个单独的力。如果物体同时受好几个力，必须先把这些力合成，求出合力，才能代入公式。' },
      { type: 'keypoint', label: '重点·公式要点', text: '<strong>F = m × a 中的 F 是合力。</strong>当质量用千克、加速度用米每二次方秒时，力 F 的单位就是牛顿。1 牛顿约等于让 1 千克物体产生 1 米每二次方秒加速度所需的力。' },
      { type: 'example', label: '例题·求加速度', text: '一个质量为 2 千克的物体，在水平方向只受一个 6 牛顿的拉力，求它的加速度。<br><br><strong>解析</strong>：<br>物体只受一个水平力，合力 F = 6 牛顿，质量 m = 2 千克。由 a = F / m 得 a = 6 / 2 = 3，单位是米每二次方秒。所以物体的加速度大小为 3 米每二次方秒，方向沿拉力方向。' },
      { type: 'warn', label: '易错', text: '<strong>第一，F = m × a 中的 F 是"合力"，不是某一个力；常见错误是漏掉重力、支持力或摩擦力的合成。</strong><br><strong>第二，力和加速度是瞬时对应的：某一时刻的合力决定这一时刻的加速度，合力一旦改变，加速度立刻改变，但速度不会瞬间改变。</strong>' },
      { type: 'table', headers: ['物理量', '符号', '单位（中文）', '单位（符号）'], rows: [['质量', 'm', '千克', 'kg'], ['加速度', 'a', '米每二次方秒', 'm/s²'], ['力（合力）', 'F', '牛顿', 'N'], ['关系', 'F = m × a', '1 N = 1 kg × 1 m/s²', '—']] },
      { type: 'tip', label: '提示', text: '<strong>代入公式前，先画受力分析图并求合力。</strong>把物体受到的所有力都画出来，沿运动方向和垂直方向分别合成，得到合力 F 后再用 a = F / m 求加速度。养成这个习惯，能少犯很多方向或漏力的错误。' },
      { type: 'list', items: ['先受力分析，再求合力', '合力代 F，质量代 m，求加速度 a', '加速度方向与合力方向相同', '单位要统一用国际单位（千克、米、秒、牛顿）'] },
      { type: 'heading', text: '三、力的独立作用原理与瞬时性' },
      { type: 'paragraph', text: '牛顿第二定律还隐含一个很有用的结论：当物体同时受几个力时，每个力都会独立地产生自己那份加速度，物体实际的总加速度，等于各个力单独产生的加速度的矢量和。这就是力的独立作用原理。' },
      { type: 'keypoint', label: '重点·独立作用原理', text: '<strong>每个力都独立地使物体产生加速度，总加速度等于各力分别产生的加速度的矢量和。</strong>也可以先求合力再算总加速度，两种做法结果一致。这让我们能"分力逐个分析"，问题更好处理。' },
      { type: 'paragraph', text: '瞬时性也值得注意。比如绳子突然断了，拉力瞬间消失，合力立刻改变，加速度也立刻改变；但物体的速度只能逐渐变化，不会突变。理解"加速度瞬变、速度渐变"，对分析动态过程很重要。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">力越大，加速度越大（质量相同）</text><rect x="60" y="210" width="560" height="20" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="120" y="150" width="40" height="60" fill="#4fb3a5"/><text x="140" y="140" font-size="13" fill="#234b45" text-anchor="middle">小力</text><rect x="340" y="120" width="80" height="90" fill="#4fb3a5"/><text x="380" y="110" font-size="13" fill="#234b45" text-anchor="middle">中力</text><rect x="520" y="80" width="120" height="130" fill="#4fb3a5"/><text x="580" y="70" font-size="13" fill="#234b45" text-anchor="middle">大力</text><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">同一物体，受力越大，产生的加速度越大</text></svg>', caption: '图1　质量相同时，物体所受合力越大，产生的加速度越大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L11,6 L0,12 Z" fill="#234b45"/></marker><marker id="ah2" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L11,6 L0,12 Z" fill="#2e9e8f"/></marker></defs><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">加速度方向与合力方向相同</text><circle cx="200" cy="180" r="22" fill="#4fb3a5"/><text x="200" y="185" font-size="13" fill="#234b45" text-anchor="middle">物体</text><line x1="222" y1="180" x2="360" y2="180" stroke="#234b45" stroke-width="4" marker-end="url(#ah)"/><text x="291" y="168" font-size="13" fill="#234b45" text-anchor="middle">合力 F</text><line x1="222" y1="210" x2="360" y2="210" stroke="#2e9e8f" stroke-width="4" stroke-dasharray="6,4" marker-end="url(#ah2)"/><text x="291" y="232" font-size="13" fill="#234b45" text-anchor="middle">加速度 a</text><text x="500" y="180" font-size="14" fill="#234b45" text-anchor="middle">二者方向一致</text><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">加速度 a 与合力 F 同向，这是矢量性的体现</text></svg>', caption: '图2　加速度方向总与合力方向相同，体现了牛顿第二定律的矢量性。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">合力一定时，质量越大加速度越小</text><rect x="60" y="120" width="220" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="170" y="150" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">小车 m 小</text><text x="170" y="200" font-size="13" fill="#234b45" text-anchor="middle">加速度 a 大</text><rect x="400" y="90" width="220" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="510" y="125" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">货车 m 大</text><text x="510" y="195" font-size="13" fill="#234b45" text-anchor="middle">加速度 a 小</text><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">受同样大的力，质量大的物体加速度更小</text></svg>', caption: '图3　合力相同时，质量越大，物体获得的加速度越小。' }
    ],
    exercises: [
      { type: 'choice', question: '关于牛顿第二定律 F = m × a，下列说法正确的是？', options: ['式中的 F 是物体受到的某一个力', '式中的 F 是物体受到的合力', '加速度方向与合力方向可以不同', '质量越大的物体加速度一定越大'], answer: '式中的 F 是物体受到的合力', explanation: '牛顿第二定律公式中的 F 指的是物体所受的合力，而不是其中某一个单独的力。如果物体同时受几个力，必须先把它们合成求出合力，才能代入公式。加速度方向始终与合力方向相同，C错误；在合力一定时质量越大加速度反而越小，D错误。因此只有"F 是合力"说法正确。' },
      { type: 'choice', question: '一个物体的受力突然增大，则它的加速度会怎样变化？', options: ['保持不变', '立刻增大', '逐渐增大', '立刻减小'], answer: '立刻增大', explanation: '根据牛顿第二定律，加速度与合力之间存在瞬时对应关系：某一时刻的合力大小决定这一时刻的加速度大小。当物体所受合力突然增大时，加速度也立刻随之增大。但要注意，速度的变化需要时间积累，不会瞬间改变，只有加速度能随合力瞬时变化。因此选"立刻增大"。' },
      { type: 'choice', question: '质量相同的甲、乙两物体，甲受合力是乙的两倍，则甲的加速度是乙的？', options: ['一半', '相同', '两倍', '四倍'], answer: '两倍', explanation: '由 a = F / m 可知，在质量 m 相同的情况下，加速度 a 与合力 F 成正比。甲的合力是乙的两倍，所以甲的加速度也是乙的两倍。这正体现了"质量一定时，加速度与合力成正比"的规律，与实验结论一致。' },
      { type: 'fill', question: '牛顿第二定律表明，加速度的方向总是跟物体所受___的方向相同。', answer: '合力', explanation: '牛顿第二定律不仅给出加速度大小与合力、质量的数量关系，还规定了方向关系：加速度的方向与合力的方向始终相同。这意味着已知合力方向就能直接判断加速度方向，而速度方向未必与加速度方向一致，二者不能混淆。' },
      { type: 'fill', question: '一个质量为 4 千克的物体，受到 12 牛顿的合力，则它的加速度大小为___米每二次方秒。', answer: '3', explanation: '由牛顿第二定律 a = F / m，代入合力 F = 12 牛顿、质量 m = 4 千克，得 a = 12 / 4 = 3，单位是米每二次方秒。所以物体的加速度大小为 3 米每二次方秒，加速度方向与 12 牛顿的合力方向相同。计算时要注意质量、力都已用国际单位，结果单位自然为米每二次方秒。' }
    ]
  });
})();
