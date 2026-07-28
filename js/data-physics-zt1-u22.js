/* ============================================================
 * 高三复习 · 力学综合 · 专题五 机械能与能量
 * 课时22：机械能守恒
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u22',
    name: '机械能守恒',
    chapter: '力学综合 · 专题五 机械能与能量',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是机械能' },
      { type: 'paragraph', text: '机械能是动能和势能的统称。势能又分两种：被举高而具有的重力势能 E_p（比如山上的石头），以及因发生弹性形变而具有的弹性势能 E_p（比如拉开的弓、压缩的弹簧）。机械能就是 E = E_k + E_p，它描述了物体"能干活"的总本事。' },
      { type: 'keypoint', label: '重点·机械能', text: '<strong>机械能 E = E_k + E_p。</strong>其中 E_k 是动能，E_p 是势能（重力势能或弹性势能）。机械能守恒，就是动能和势能之间互相"转来转去"，但加起来的总数不变。' },
      { type: 'paragraph', text: '想象荡秋千：最高点速度最小、位置最高，势能最大、动能最小；荡到最低点时速度最大、位置最低，动能最大、势能最小。这一上一下，正是动势能相互转化的过程，而总机械能基本不变。' },
      { type: 'heading', text: '二、机械能守恒的条件' },
      { type: 'keypoint', label: '重点·守恒条件', text: '<strong>只有重力或弹力做功时，机械能守恒。</strong>注意是"只有重力或弹力做功"，不是说"只受重力或弹力"。其他力可以存在，但只要它们不做功（或不做功的代数和为零），机械能照样守恒。' },
      { type: 'paragraph', text: '为什么摩擦力会破坏守恒？因为摩擦力做功会把一部分机械能转化成内能（发热），机械能"漏"掉了，总数就减少。所以判断一道题能否用机械能守恒，第一步就是看"有没有除重力、弹力外的力在做功"。' },
      { type: 'list', items: ['满足守恒：自由落体（只有重力做功）、光滑斜面下滑、不计空气阻力的抛体运动', '满足守恒：光滑水平面上弹簧振子（只有弹力做功）', '不守恒：粗糙水平面上滑动（摩擦力做负功，机械能减少）', '不守恒：用起重机吊着匀速上升（拉力做正功，机械能增加）'] },
      { type: 'table', headers: ['情景', '做功的力', '机械能是否守恒'], rows: [['自由落体', '只有重力', '守恒'], ['光滑斜面下滑', '只有重力', '守恒'], ['粗糙地面滑动', '重力+摩擦力', '不守恒（减少）'], ['匀速吊升重物', '重力+拉力', '不守恒（增加）']] },
      { type: 'example', label: '例题·判断能否守恒', text: '小球从光滑斜面顶端由静止滑下，斜面光滑无摩擦。问下滑过程机械能是否守恒？<br><br><strong>解析</strong>：<br>斜面光滑，支持力垂直于位移不做功，只有重力做功。<br>满足"只有重力或弹力做功"的条件，所以机械能守恒。下落中重力势能减小，动能增大，二者相互转化，总和不变。' },
      { type: 'warn', label: '易错', text: '<strong>别把"只有重力或弹力做功"误读成"只受重力或弹力"。</strong>比如物体在绳的拉力下做圆周运动，绳的拉力始终垂直于速度方向、不做功，此时仍有机械能守恒。关键是"其他力做不做功"，而不是"有没有其他力存在"。' },
      { type: 'heading', text: '三、机械能守恒的两种写法' },
      { type: 'keypoint', label: '重点·守恒表达式', text: '<strong>① 总量式：E_k1 + E_p1 = E_k2 + E_p2，</strong>即初态机械能等于末态机械能。<br><strong>② 增量式：ΔE_k = −ΔE_p，</strong>即动能的增加量等于势能的减少量（或反过来）。两种写法本质相同，看题目给的条件选顺手的。' },
      { type: 'paragraph', text: '用总量式时，一定要先选定"零势能面"（通常取最低点或地面），再写出各状态的动能和势能。用增量式则不必选零势能面，只看变化量，往往更简洁。' },
      { type: 'tip', label: '提示', text: '<strong>选零势能面是个"人为约定"，选哪里都行，但同一道题里要前后一致。</strong>通常把最容易计算的面（如最低点、地面）设为零势能面，这样某些状态的势能可直接写成 0，计算最省事。' },
      { type: 'heading', text: '四、用机械能守恒解题的步骤' },
      { type: 'list', items: ['第一步：明确<strong>研究对象</strong>（单个物体或系统）', '第二步：判断<strong>是否守恒</strong>——除重力、弹力外其他力是否做功', '第三步：<strong>选零势能面</strong>，写出初、末状态的动能与势能', '第四步：列守恒式 E_k1 + E_p1 = E_k2 + E_p2（或 ΔE_k = −ΔE_p）求解'] },
      { type: 'example', label: '例题·最点求最低点速度', text: '质量为 m 的小球从高度 h 处由静止自由下落（不计空气阻力），求落地瞬间的速度。<br><br><strong>解析</strong>：<br>只有重力做功，机械能守恒。取地面为零势能面。<br>初态：E_k1 = 0，E_p1 = m g h。<br>末态：E_k2 = (1/2) m v²，E_p2 = 0。<br>由守恒：m g h = (1/2) m v²，得 v = √(2 g h)。' },
      { type: 'keypoint', label: '重点·守恒与动能定理的关系', text: '<strong>机械能守恒是动能定理在"只有重力或弹力做功"时的特例。</strong>此时其他力做功为零，W_合 就只剩重力（或弹力）功，从而动能变化与势能变化互成相反数，得到机械能守恒。所以机械能守恒条件更严，但列式往往更简单。' },
      { type: 'warn', label: '易错', text: '用总量式 E_k1 + E_p1 = E_k2 + E_p2 时，<strong>两边都要同时包含动能和势能，且必须用同一零势能面。</strong>常见错误是初态忘了加某一项势能，或末态把重力势能符号写反，导致等式不成立。养成"每态先列 E_k 再列 E_p"的习惯能避坑。' },
      { type: 'tip', label: '提示', text: '<strong>涉及"最高点/最低点速度""光滑轨道上的速率"的题，十有八九用机械能守恒最快。</strong>只要确认无摩擦、无其他力做功，直接用初末状态列式，比套运动学公式省时又不易错。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">机械能 = 动能 + 势能，二者相互转化</text><line x1="60" y1="250" x2="620" y2="250" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="110" r="18" fill="#4fb3a5"/><text x="340" y="82" font-size="13" fill="#234b45" text-anchor="middle">最高点</text><text x="340" y="146" font-size="12" fill="#234b45" text-anchor="middle">E_p大 E_k小</text><circle cx="340" cy="222" r="18" fill="#4fb3a5"/><text x="340" y="200" font-size="13" fill="#234b45" text-anchor="middle">最低点</text><text x="340" y="258" font-size="12" fill="#234b45" text-anchor="middle">E_k大 E_p小</text><path d="M 340 128 Q 250 190 340 204" fill="none" stroke="#234b45" stroke-width="2" stroke-dasharray="4,4"/><path d="M 340 204 Q 430 150 340 128" fill="none" stroke="#234b45" stroke-width="2" stroke-dasharray="4,4"/><text x="200" y="170" font-size="12" fill="#234b45">下落：势→动</text><text x="430" y="170" font-size="12" fill="#234b45">上升：动→势</text><rect x="240" y="278" width="200" height="30" rx="6" fill="#4fb3a5"/><text x="340" y="298" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">总数 E_k+E_p 不变</text></svg>', caption: '图1　荡秋千式上下运动：动势能相互转化，但机械能总和保持不变。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">守恒条件：只有重力或弹力做功</text><rect x="50" y="80" width="260" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="106" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">守恒 ✓</text><path d="M 180 240 L 180 130" stroke="#234b45" stroke-width="3"/><polygon points="180,124 174,140 186,140" fill="#234b45"/><text x="180" y="262" font-size="12" fill="#234b45" text-anchor="middle">小球自由下落</text><text x="180" y="282" font-size="12" fill="#234b45" text-anchor="middle">只有重力做功</text><rect x="370" y="80" width="260" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="106" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">不守恒 ✗</text><rect x="440" y="200" width="120" height="30" rx="6" fill="#4fb3a5"/><line x1="440" y1="215" x2="560" y2="215" stroke="#234b45" stroke-width="3"/><polygon points="560,209 576,215 560,221" fill="#234b45"/><text x="500" y="262" font-size="12" fill="#234b45" text-anchor="middle">粗糙面滑动</text><text x="500" y="282" font-size="12" fill="#234b45" text-anchor="middle">摩擦力做负功</text></svg>', caption: '图2　左图只有重力做功则守恒；右图摩擦力做功，机械能不守恒。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">解题四步：对象→判断守恒→选零面→列式</text><rect x="40" y="100" width="140" height="50" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="110" y="124" font-size="12" fill="#234b45" text-anchor="middle">①对象</text><rect x="200" y="100" width="140" height="50" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="270" y="124" font-size="12" fill="#234b45" text-anchor="middle">②判守恒</text><rect x="360" y="100" width="140" height="50" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="430" y="124" font-size="12" fill="#234b45" text-anchor="middle">③零势能面</text><rect x="520" y="100" width="130" height="50" rx="8" fill="#4fb3a5"/><text x="585" y="124" font-size="12" fill="#234b45" text-anchor="middle">④列式求</text><line x1="180" y1="125" x2="200" y2="125" stroke="#234b45" stroke-width="2"/><line x1="340" y1="125" x2="360" y2="125" stroke="#234b45" stroke-width="2"/><line x1="500" y1="125" x2="520" y2="125" stroke="#234b45" stroke-width="2"/><text x="340" y="210" font-size="14" fill="#234b45" text-anchor="middle">E_k1 + E_p1 = E_k2 + E_p2</text><text x="340" y="250" font-size="13" fill="#4fb3a5" text-anchor="middle">或 ΔE_k = −ΔE_p</text><text x="340" y="280" font-size="12" fill="#234b45" text-anchor="middle">同一零势能面，初末两态各列动能与势能</text></svg>', caption: '图3　机械能守恒解题四步：先判断能否守恒，再选零势能面列式。' }
    ],
    exercises: [
      { type: 'choice', question: '机械能守恒的条件是？', options: ['物体只受重力作用', '只有重力或弹力做功', '物体做匀速直线运动', '物体的速度不变'], answer: '只有重力或弹力做功', explanation: '机械能守恒的严格条件是"只有重力或弹力做功"，并非"只受重力或弹力"。其他力可以存在，只要它们不做功（做功能代数和为零），机械能仍然守恒。例如绳子拉力始终垂直速度不做功时，物体机械能依然守恒。' },
      { type: 'choice', question: '下列情景中，物体机械能守恒的是？', options: ['在粗糙水平面上滑动的木块', '自由下落的小球（不计空气阻力）', '被起重机匀速吊起的重物', '沿斜面匀加速下滑且受摩擦的滑块'], answer: '自由下落的小球（不计空气阻力）', explanation: '自由下落的小球只有重力做功，满足守恒条件，机械能守恒。粗糙面滑动有摩擦力做负功，机械能减少；匀速吊升时拉力做正功，机械能增加；受摩擦的斜面下滑同样因摩擦机械能减少，三者都不守恒。' },
      { type: 'choice', question: '机械能守恒的增量式可写为？', options: ['ΔE_k = ΔE_p', 'ΔE_k = −ΔE_p', 'ΔE_k + ΔE_p = 1', 'ΔE_k = 2 ΔE_p'], answer: 'ΔE_k = −ΔE_p', explanation: '机械能守恒意味着总机械能 E_k + E_p 不变，因此动能的增加量必然等于势能的减少量，即 ΔE_k = −ΔE_p。这等价于总量式 E_k1 + E_p1 = E_k2 + E_p2，只是表达形式不同，用增量式常可省去选零势能面。' },
      { type: 'fill', question: '机械能 E 等于动能与势能之和，即 E = E_k + ___（用势能符号 E_p 填写）。', answer: 'E_p', explanation: '机械能是物体动能和势能的总和，表达式 E = E_k + E_p。势能包括重力势能和弹性势能。机械能守恒就是指在只有重力或弹力做功时，这个总和保持不变，动能和势能之间相互转化。' },
      { type: 'fill', question: '用总量式表示机械能守恒：初态机械能等于末态机械能，即 E_k1 + E_p1 = E_k2 + ___（填写末态势能项）。', answer: 'E_p2', explanation: '机械能守恒的总量式为 E_k1 + E_p1 = E_k2 + E_p2，表示初态的动能加重力（或弹性）势能，等于末态的动能加势能。使用时必须选定同一零势能面，并完整写出初末两态的动能和势能，不能漏掉任一项。' }
    ]
  });
})();
