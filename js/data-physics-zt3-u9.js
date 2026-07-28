/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题三 热力学定律
 * 课时2：热力学第二定律与能量耗散、能源利用
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u9-l1',
    name: '热力学第二定律与能量耗散、能源利用',
    chapter: '热学与近代物理 · 专题三 热力学定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、自然界的过程有方向——不可逆' },
      { type: 'paragraph', text: '生活中许多过程只能朝一个方向自发进行，反过来不会自动发生。比如一杯热水会自然变凉，却不会自动从周围空气中把热量"吸"回来重新变热；一滴墨水滴进清水会散开，却不会自动聚回一滴。这类过程叫作不可逆过程，说明自然界的变化是有方向的。热力学第二定律就是描述这种方向性的规律。' },
      { type: 'keypoint', label: '重点·不可逆过程', text: '<strong>许多自然过程具有方向性，只能自发地向一个方向进行，反向过程不能自发发生，这类过程称为不可逆过程。</strong>热传递、扩散、摩擦生热都是典型的不可逆过程。' },
      { type: 'list', items: ['热水自然变凉，不会自动从空气吸热变热', '墨水在水中扩散开，不会自动聚回一点', '机械能通过摩擦变成内能，不会自动全部变回机械能', '气体自由膨胀充满容器，不会自动收缩回一半'] },
      { type: 'heading', text: '二、热力学第二定律的两种表述' },
      { type: 'paragraph', text: '热力学第二定律有多种等价表述，高三常考两种。第一种是克劳修斯表述：热量不能自发地从低温物体传到高温物体。注意"自发"二字，冰箱能把热量从低温搬到高温，但它是靠压缩机耗电做功才实现的，不是自发过程。第二种是开尔文表述：不可能从单一热源吸热并把它全部用来做功，而不引起其他变化。' },
      { type: 'keypoint', label: '重点·两种表述', text: '<strong>克劳修斯表述：热量不能自发地从低温物体传给高温物体。</strong><br><strong>开尔文表述：不可能从单一热源吸收热量并全部转化为功而不产生其他影响。</strong>两种表述等价，都揭示了过程的单向性。' },
      { type: 'example', label: '例题·辨析表述', text: '下列说法是否正确？<br>① 冰箱能把热量从低温食品传到高温房间，说明热量可以自发地从低温到高温。<br>② 热机可以把吸收的热量全部转化为机械能。<br><br><strong>解析</strong>：<br>① 错误。冰箱搬运热量是靠压缩机做功，不是自发过程，不违反克劳修斯表述。<br>② 错误。按开尔文表述，热机不可能把热量全部变成功而不引起其他变化，必然要向低温处放热。' },
      { type: 'warn', label: '易错', text: '<strong>不要把"热量不能自发地从低温到高温"记成"热量不能从低温到高温"。</strong>借助外界做功（如冰箱、空调），热量完全可以从低温传到高温，只是这不再是自发过程。同样，热机效率不可能达到百分之百，因为总有热量排向低温热源。' },
      { type: 'heading', text: '三、能量耗散与能量品质' },
      { type: 'paragraph', text: '能量守恒告诉我们能量总量不变，但能量的"品质"会下降。比如汽车刹车时，机械能通过摩擦变成了内能散失到空气中，这些内能虽然还在，却很难再被收集起来做功了。这种高品质能量转化为难以利用的低品质内能的现象，叫作能量耗散。能量耗散说明：虽然能量不灭，但可被利用的程度在下降。' },
      { type: 'keypoint', label: '重点·能量耗散', text: '<strong>能量耗散是指机械能等高品质能量在转化过程中变成分散的内能，难以再被收集利用的现象。</strong>它不违反能量守恒，却说明能量的"可用程度"在降低，反映了过程的方向性。' },
      { type: 'table', headers: ['能量形式', '品质', '举例与去向'], rows: [['机械能、电能', '高品质，容易做功', '摩擦后变为内能，难以回收'], ['内能（分散）', '低品质，难以利用', '散发到环境，无法集中做功'], ['燃料化学能', '高品质', '燃烧后变为废热散失']] },
      { type: 'tip', label: '提示', text: '<strong>能量守恒不等于能源无限。</strong>煤、石油等一旦烧掉，化学能变成废热散失，就再也不能当燃料用了。所以节约能源、提高能量利用率，本质上是在减少能量耗散、保护高品质能源。' },
      { type: 'heading', text: '四、热机效率与卡诺上限' },
      { type: 'paragraph', text: '热机是把内能转化为机械能的机器（如蒸汽机、内燃机）。它从高温热源吸热 Q1，一部分用来做功 W，另一部分 Q2 排给低温热源。效率 η = W / Q1。受热力学第二定律限制，只要还向低温处放热，效率就必然小于百分之百。理论上最理想的热机（卡诺热机）效率 η = 1 − T2 / T1，其中 T1、T2 是两热源的热力学温度。' },
      { type: 'keypoint', label: '重点·热机效率', text: '<strong>热机效率 η = W / Q1，永远小于 1。</strong>理想卡诺热机效率 η = 1 − T2 / T1（T1、T2 为高温、低温热源的热力学温度）。温差越大，理论最高效率越高，但实际热机因损耗远低于此。' },
      { type: 'list', items: ['热机从高温热源吸热，向低温热源放热，差额对外做功', '效率 η = W / Q1，受第二定律限制必小于1', '提高温差可提高理论效率，但无法达到百分之百', '实际热机还有摩擦、散热等额外损耗'] },
      { type: 'warn', label: '易错', text: '<strong>第二类永动机（从单一热源吸热全部变成功且不引起其他变化）不可能制成，这不违反能量守恒，却违反热力学第二定律。</strong>不要把它和第一类永动机（违反能量守恒）混淆：前者能量守恒但方向不对，后者能量都不守恒。' },
      { type: 'example', label: '例题·效率计算', text: '一台热机从高温热源吸热 Q1 = 1000 J，向低温热源放热 Q2 = 600 J。求这台热机对外做的功 W 和效率 η。<br><br><strong>解析</strong>：<br>由能量守恒，W = Q1 − Q2?? 应为 W = Q1 − Q2 = 1000 − 600 = 400 J。<br>效率 η = W / Q1 = 400 / 1000 = 0.4 = 40%。<br>可见有 600 J 热量排走，效率不可能达到百分之百。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">热量不能自发地从低温传到高温</text><rect x="60" y="80" width="200" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="160" y="160" font-size="22" font-weight="bold" fill="#234b45" text-anchor="middle">低温</text><rect x="420" y="80" width="200" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="520" y="160" font-size="22" font-weight="bold" fill="#234b45" text-anchor="middle">高温</text><path d="M 260 150 L 420 150" stroke="#2e9e8f" stroke-width="3" stroke-dasharray="6,4" fill="none"/><polygon points="420,150 406,144 406,156" fill="#2e9e8f"/><text x="340" y="120" font-size="13" fill="#234b45" text-anchor="middle">自发传热方向 ✗</text><text x="340" y="262" font-size="12" fill="#4fb3a5" text-anchor="middle">冰箱能反方向搬运，但必须靠压缩机做功，不是自发</text></svg>', caption: '图1　热量自发只能从高温传向低温；若要从低温传到高温（如冰箱），必须借助外界做功，不是自发过程。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">能量耗散：高品质机械能变为低品质内能</text><rect x="120" y="70" width="160" height="60" rx="8" fill="#4fb3a5"/><text x="200" y="106" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">机械能</text><text x="340" y="110" font-size="26" fill="#234b45" text-anchor="middle">→</text><rect x="400" y="70" width="160" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="480" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">分散内能</text><text x="200" y="170" font-size="12" fill="#234b45" text-anchor="middle">高品质 易做功</text><text x="480" y="170" font-size="12" fill="#234b45" text-anchor="middle">低品质 难回收</text><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">摩擦生热：能量还在，但散到空气里难以再利用</text></svg>', caption: '图2　刹车时机械能经摩擦转化为分散的内能（能量耗散），能量总量不变，但可利用程度下降。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">热机工作：吸热→做功→放热</text><rect x="80" y="90" width="140" height="120" rx="10" fill="#4fb3a5"/><text x="150" y="150" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">高温热源</text><rect x="270" y="120" width="140" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="155" font-size="13" fill="#234b45" text-anchor="middle">热机</text><rect x="460" y="90" width="140" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="530" y="150" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">低温热源</text><path d="M 220 150 L 270 150" stroke="#2e9e8f" stroke-width="3" fill="none"/><text x="245" y="138" font-size="11" fill="#234b45" text-anchor="middle">吸热Q1</text><path d="M 410 150 L 460 150" stroke="#2e9e8f" stroke-width="3" fill="none"/><text x="435" y="138" font-size="11" fill="#234b45" text-anchor="middle">放热Q2</text><text x="340" y="265" font-size="13" fill="#234b45" text-anchor="middle">对外做功 W = Q1 − Q2，效率 η = W / Q1 &lt; 1</text></svg>', caption: '图3　热机从高温热源吸热 Q1，一部分 W 对外做功，剩余 Q2 排给低温热源，效率恒小于1。' }
    ],
    exercises: [
      { type: 'choice', question: '关于热力学第二定律，下列说法正确的是？', options: ['热量可以自发地从低温物体传到高温物体', '不可能从单一热源吸热并全部用来做功而不引起其他变化', '热量不能从低温物体传到高温物体', '所有自然过程都是可逆的'], answer: '不可能从单一热源吸热并全部用来做功而不引起其他变化', explanation: '热力学第二定律的开尔文表述指出：不可能从单一热源吸收热量并把它全部转化为功而不产生其他影响，所以热机效率不可能达到百分之百。克劳修斯表述说热量不能"自发"地从低温到高温，借助外界做功（如冰箱）是可以反向传热的，因此A、C说法不严谨；自然界大量过程是不可逆的，D错误。' },
      { type: 'choice', question: '下列说法正确的是？', options: ['能量耗散违反能量守恒定律', '能量耗散说明能量的可用程度降低', '能量耗散后能量就消失了', '能量耗散只发生在热传递中'], answer: '能量耗散说明能量的可用程度降低', explanation: '能量耗散是指机械能等高品质能量在转化中变成分散、难以回收的内能，能量总量并未减少，不违反能量守恒，但可被利用的程度下降。它不是能量消失，也不是只发生在热传递中，摩擦、碰撞等过程同样会产生耗散。' },
      { type: 'choice', question: '一台热机从高温热源吸热 800 J，向低温热源放热 500 J，它的效率约为？', options: ['62.5%', '100%', '37.5%', '160%'], answer: '37.5%', explanation: '对外做功 W = Q1 − Q2 = 800 − 500 = 300 J。效率 η = W / Q1 = 300 / 800 = 0.375，即 37.5%。由于必须向低温热源放热，效率必然小于百分之百，不可能达到100%。' },
      { type: 'fill', question: '热力学第二定律的克劳修斯表述是：热量不能___地从低温物体传到高温物体。（填"自发"或"自动做功"）', answer: '自发', explanation: '克劳修斯表述强调"自发"二字：没有外界帮助时，热量只会从高温流向低温。借助外界做功（如空调、冰箱压缩机），热量可以从低温传到高温，但这已不是自发过程，因此关键词是"自发"而非"自动做功"。' },
      { type: 'fill', question: '热机效率定义为 η = W / Q1。若热机对外做功 200 J，从高温热源吸热 500 J，则效率 η = ___（用小数或百分数表示，如 0.4 或 40%）。', answer: '0.4 | 40%', explanation: '效率 η = W / Q1 = 200 / 500 = 0.4，也就是 40%。这说明有 300 J 的热量被排向低温热源。按照热力学第二定律，只要热机还向低温处放热，效率就必然小于1，不可能达到百分之百。' }
    ]
  });
})();
