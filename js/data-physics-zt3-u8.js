/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题三 热力学定律
 * 课时1：功、热量与内能改变：热力学第一定律
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u8-l1',
    name: '功、热量与内能改变：热力学第一定律',
    chapter: '热学与近代物理 · 专题三 热力学定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是内能' },
      { type: 'paragraph', text: '内能是物体内部所有分子做无规则热运动的动能，加上分子间相互作用的势能，这两部分加起来的总能量。通俗地说，一个物体再怎么静止，它的分子仍在不断乱动、互相拉扯，这些看不见的运动都带着能量，全部加起来就是内能。内能是物体自身拥有的能量，只与物体的状态有关。' },
      { type: 'keypoint', label: '重点·内能定义', text: '<strong>内能是物体内部所有分子热运动的动能与分子势能的总和。</strong>它是物体内部的能量，是状态量，只由物体当前的状态（温度、体积、物质的量）决定，与物体整体是否运动、处于多高无关。' },
      { type: 'paragraph', text: '内能的大小主要和三个因素有关：温度越高，分子平均动能越大，内能越大；体积变化时分子间距离改变，分子势能随之改变；物质的量越多，分子总数越多，内能越大。注意，物体的机械能（整体动能加重力势能）和内能是两回事，一个静止在桌面的热水杯，机械能可以为零，但内能很大。' },
      { type: 'list', items: ['温度：温度升高，分子平均动能增大，内能一般增大', '体积：体积变化会改变分子间距和分子势能', '物质的量：分子数目越多，内能越大', '内能是状态量，只取决于物体的状态，与过程无关'] },
      { type: 'heading', text: '二、改变内能的两种方式：做功与热传递' },
      { type: 'paragraph', text: '想让一杯水变热，有两种办法：一是用火烧（热传递），二是用力搅拌或通电（做功）。做功和热传递都能改变物体的内能，效果上完全等效，但本质不同。做功是其他形式的能量和内能之间的转化，比如摩擦生热是机械能变成内能；热传递则是内能从高温物体转移到低温物体，没有能量形式的转化。' },
      { type: 'keypoint', label: '重点·两种方式的区别', text: '<strong>做功是能量形式的转化（其他能⇌内能），热传递是内能的转移（高温→低温）。</strong>两者改变内能的效果相同，但做功伴随宏观位移或电流，热传递伴随温度差，没有宏观位移。' },
      { type: 'example', label: '例题·辨析两种方式', text: '下列过程通过什么方式改变内能？<br>① 搓手取暖；② 把铁块放进火炉加热；③ 压缩气体使温度升高。<br><br><strong>解析</strong>：<br>① 搓手是摩擦力做功，机械能转化为内能。<br>② 火炉加热是热传递，内能从火炉转移到铁块。<br>③ 压缩气体是对气体做功，机械能转化为内能。' },
      { type: 'warn', label: '易错', text: '不要以为"做功一定升温、热传递一定不升温"。<strong>做功和热传递都能改变内能，不能凭方式判断内能一定增加还是减少。</strong>例如气体膨胀对外做功，内能可能减少而降温；物体放热，内能也会减少。关键看能量是进还是出。' },
      { type: 'heading', text: '三、热力学第一定律 ΔU = W + Q' },
      { type: 'paragraph', text: '热力学第一定律就是能量守恒定律在热现象中的具体表达：一个系统内能的变化量 ΔU，等于外界对它做的功 W，再加上它从外界吸收的热量 Q。写成公式就是 ΔU = W + Q。它告诉我们，内能的变化只能来自"做功"和"热传递"这两条途径，缺一不可。' },
      { type: 'keypoint', label: '重点·符号规定', text: '<strong>规定：外界对系统做功，W 取正；系统对外界做功，W 取负。系统吸热，Q 取正；系统放热，Q 取负。内能增加，ΔU 取正；内能减少，ΔU 取负。</strong>代入公式 ΔU = W + Q 即可判断。' },
      { type: 'table', headers: ['物理量', '取正号的情况', '取负号的情况'], rows: [['W（功）', '外界对系统做功（如压缩气体）', '系统对外界做功（如气体膨胀）'], ['Q（热量）', '系统从外界吸热', '系统向外界放热'], ['ΔU（内能变化）', '系统内能增加', '系统内能减少']] },
      { type: 'tip', label: '提示', text: '<strong>记符号用一句话："进为正，出为负"。</strong>外界对系统"进"能量（做功或供热）都取正，系统向外界"出"能量（对外做功或放热）都取负。这样就不容易把正负号搞反。' },
      { type: 'heading', text: '四、能量守恒定律' },
      { type: 'paragraph', text: '能量既不会凭空产生，也不会凭空消失，它只能从一种形式转化为另一种形式，或者从一个物体转移到别的物体，在转化和转移的过程中，能量的总量保持不变。热力学第一定律其实就是能量守恒在涉及内能时的具体写法。' },
      { type: 'keypoint', label: '重点·能量守恒', text: '<strong>能量总量守恒：ΔU = W + Q 是能量守恒在热学中的体现。</strong>第一类永动机（不消耗能量却不断对外做功的机器）不可能制成，因为它违反了能量守恒定律。' },
      { type: 'list', items: ['做功和热传递在改变内能上等效，但本质不同', '用 ΔU = W + Q 计算时，必须先统一正负号规定', '气体膨胀对外做功时 W 为负，常常导致内能减少、温度降低', '第一类永动机违反能量守恒，不可能实现'] },
      { type: 'example', label: '例题·计算内能变化', text: '一定质量的气体被压缩，外界对气体做功 W = 200 J，同时气体向外界放热 Q = −80 J（即放热 80 J）。求气体内能的变化 ΔU，并说明增加还是减少。<br><br><strong>解析</strong>：<br>按符号规定，外界对气体做功 W = +200 J；气体放热，Q = −80 J。<br>ΔU = W + Q = 200 + (−80) = 120 J。<br>ΔU 为正，说明气体内能增加了 120 J。' },
      { type: 'warn', label: '易错', text: '<strong>热力学第一定律里的 W 是"外界对系统做的功"，不是系统对外做的功。</strong>很多题目中给的是"气体膨胀对外做功 100 J"，这时应取 W = −100 J，而不是 +100 J。若把符号取反，会得出内能变化完全相反的错误结论。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">改变内能的两种方式：做功与热传递</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">做功（能量转化）</text><text x="180" y="124" font-size="13" fill="#234b45" text-anchor="middle">机械能 → 内能</text><text x="180" y="158" font-size="13" fill="#234b45" text-anchor="middle">例：摩擦、压缩气体</text><text x="180" y="210" font-size="12" fill="#4fb3a5" text-anchor="middle">伴随宏观位移或电流</text><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">热传递（能量转移）</text><text x="500" y="124" font-size="13" fill="#234b45" text-anchor="middle">内能 高温 → 低温</text><text x="500" y="158" font-size="13" fill="#234b45" text-anchor="middle">例：火烧、热水凉</text><text x="500" y="210" font-size="12" fill="#4fb3a5" text-anchor="middle">伴随温度差，无位移</text></svg>', caption: '图1　做功是能量形式转化，热传递是内能从高温物体转移到低温物体，两者改变内能的效果等效。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">热力学第一定律 ΔU = W + Q 的符号约定</text><circle cx="340" cy="170" r="95" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="150" font-size="20" font-weight="bold" fill="#234b45" text-anchor="middle">ΔU = W + Q</text><text x="340" y="185" font-size="13" fill="#234b45" text-anchor="middle">进为正 出为负</text><path d="M 250 95 L 220 70" stroke="#2e9e8f" stroke-width="3" fill="none"/><polygon points="220,70 232,72 226,82" fill="#2e9e8f"/><text x="150" y="66" font-size="13" fill="#234b45" text-anchor="middle">外界做功 W&gt;0</text><path d="M 430 95 L 460 70" stroke="#2e9e8f" stroke-width="3" fill="none"/><polygon points="460,70 448,72 454,82" fill="#2e9e8f"/><text x="530" y="66" font-size="13" fill="#234b45" text-anchor="middle">吸热 Q&gt;0</text><text x="340" y="285" font-size="12" fill="#4fb3a5" text-anchor="middle">能量守恒：内能变化只来自做功和热传递</text></svg>', caption: '图2　用"进为正、出为负"记忆 ΔU = W + Q 的符号：外界对系统进能量取正，系统对外出能量取负。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">活塞压缩气体：外界对气体做功</text><rect x="160" y="80" width="360" height="160" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="150" y="140" width="20" height="40" fill="#4fb3a5"/><rect x="510" y="140" width="20" height="40" fill="#4fb3a5"/><line x1="160" y1="160" x2="330" y2="160" stroke="#234b45" stroke-width="3"/><polygon points="330,160 316,154 316,166" fill="#234b45"/><text x="245" y="150" font-size="13" fill="#234b45" text-anchor="middle">气体</text><text x="420" y="150" font-size="14" font-weight="bold" fill="#234b45" text-anchor="middle">← 活塞压入</text><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">外界对气体做功 W &gt; 0，气体内能增加、温度升高</text></svg>', caption: '图3　活塞压缩气缸内气体时，外界对气体做功 W 为正，气体内能增加温度升高，这正是做功改变内能的实例。' }
    ],
    exercises: [
      { type: 'choice', question: '关于内能，下列说法正确的是？', options: ['物体的机械能越大，内能一定越大', '内能是物体内部所有分子热运动的动能与分子势能的总和', '温度为0℃的物体没有内能', '静止在地面上的物体内能为零'], answer: '内能是物体内部所有分子热运动的动能与分子势能的总和', explanation: '内能是物体内部分子热运动的动能和分子势能的总和，是物体自身状态决定的能量，与物体整体的机械能无关。任何温度高于绝对零度的物体都有内能，即使物体静止在地面上，其分子仍在运动，内能不为零；机械能大不代表内能大。' },
      { type: 'choice', question: '关于做功和热传递改变内能，下列说法正确的是？', options: ['做功和热传递在改变内能上效果不同', '做功是内能的转移，热传递是能量的转化', '做功是其他能与内能的转化，热传递是内能的转移', '只有热传递能改变物体的内能'], answer: '做功是其他能与内能的转化，热传递是内能的转移', explanation: '做功和热传递在改变物体内能的效果上完全等效，但本质不同：做功是机械能、电能等其他形式的能量与内能之间的相互转化，往往伴随宏观位移或电流；热传递是内能从高温物体转移到低温物体，伴随温度差而不发生能量形式的转化。两者都可以改变内能。' },
      { type: 'choice', question: '一定质量的气体膨胀对外做功 100 J，同时从外界吸热 40 J。按 ΔU = W + Q，气体内能变化为？', options: ['ΔU = 140 J', 'ΔU = 60 J', 'ΔU = −60 J', 'ΔU = −140 J'], answer: 'ΔU = −60 J', explanation: '按符号规定，气体膨胀对外做功，是系统对外界做功，应取 W = −100 J；气体从外界吸热，Q = +40 J。于是 ΔU = W + Q = −100 + 40 = −60 J，即内能减少 60 J。注意 W 是外界对系统做的功，气体对外做功时要取负号。' },
      { type: 'fill', question: '热力学第一定律的公式是 ΔU = ___（用 W 和 Q 表示），其中 W 表示外界对系统做的功，Q 表示系统吸收的热量。', answer: 'W+Q', explanation: '热力学第一定律就是能量守恒在热现象中的表达，公式为 ΔU = W + Q，其中 W 是外界对系统做的功，Q 是系统吸收的热量，ΔU 是系统内能的变化量。三者都需先按统一的正负规定代入再计算。' },
      { type: 'fill', question: '用 ΔU = W + Q 分析时，若气体向外界放热，则 Q 应取___（填"正"或"负"）；若气体被压缩，则 W 应取___（填"正"或"负"）。', answer: '负 | 正', explanation: '符号规定可记为"进为正、出为负"。气体向外界放热，是系统把内能送出去，Q 取负；气体被压缩，是外界对系统做功，能量进到系统，W 取正。统一符号后再代入 ΔU = W + Q 计算即可。' }
    ]
  });
})();
