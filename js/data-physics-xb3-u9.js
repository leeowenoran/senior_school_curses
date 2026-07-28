/* ============================================================
 * 高二物理 · 选择性必修 第三册 · 第三章 热力学定律
 * 课时9：热力学第一定律
 * 数据注入：physics.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u9',
    name: '热力学第一定律',
    chapter: '选择性必修 第三册 · 第三章 热力学定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是物体的内能' },
      { type: 'paragraph', text: '在初中我们就知道，物体内所有分子都在不停地做无规则热运动，分子之间还有相互作用。把物体内所有分子的动能和分子间势能加在一起，就是物体的内能。内能是物体内部的能量，和物体整体是否在运动、在什么高度都没有关系。' },
      { type: 'keypoint', label: '重点·内能是什么', text: '<strong>内能是物体内所有分子做无规则热运动的动能，与分子间相互作用的势能的总和。</strong>它只和物体的内部状态（温度、体积、物质的量）有关，与物体整体的机械运动无关。' },
      { type: 'paragraph', text: '温度越高，分子平均动能越大，内能通常也就越大；体积改变会影响分子间距离，从而改变分子势能，也会影响内能。所以同一个物体，温度升高时它的内能一般会增大。' },
      { type: 'list', items: ['升高温度：分子热运动更剧烈，平均动能增大，内能增加', '改变体积：分子间距离变化，分子势能变化，内能随之变化', '增加物质的量：分子总数变多，总内能增加'] },
      { type: 'heading', text: '二、改变内能的两种途径：做功与热传递' },
      { type: 'paragraph', text: '要让一块冰融化、让一壶水变热，办法不止一种。你可以把它放在火上加热，也可以用力摩擦、压缩它。前者是热传递，后者是做功。虽然方式不同，但最终都让物体的内能增加了。' },
      { type: 'keypoint', label: '重点·两种途径等效', text: '<strong>做功和热传递在改变物体内能上是等效的。</strong>两种方式都能让内能增加或减少，单看结果，你无法区分内能的变化到底是来自做功还是来自热传递。' },
      { type: 'example', label: '例题·搓手取暖', text: '冬天手冷，小明有两种办法让手暖起来：一是双手用力对搓，克服摩擦做功；二是把手伸进热水袋，吸收热量。<br><br><strong>解析</strong>：两种方式都使手的内能增加、温度升高，效果完全相同。这说明做功和热传递在改变内能上等效，但二者本质不同——做功是机械能与内能的转化，热传递是内能从一个物体转移到另一个物体。' },
      { type: 'warn', label: '易错·本质不同', text: '<strong>做功和热传递"效果等效"不等于"本质相同"。</strong>做功是不同形式能量之间的转化（比如摩擦把机械能变成内能）；热传递是内能从一个物体转移到另一个物体。二者道理不一样，只是对改变内能的结果相同。' },
      { type: 'heading', text: '三、热力学第一定律：ΔU = Q + W' },
      { type: 'paragraph', text: '既然做功和热传递都能改变内能，就需要一条定律把"内能的变化"和"热量、功"统一起来。这条定律就是热力学第一定律：一个系统内能的变化量 ΔU，等于它从外界吸收的热量 Q，再加上外界对它做的功 W。' },
      { type: 'keypoint', label: '重点·公式', text: '<strong>热力学第一定律：ΔU = Q + W。</strong>其中 Q 是气体从外界吸收的热量，W 是外界对气体做的功。它本质上是能量守恒定律在热现象中的具体形式。' },
      { type: 'table', headers: ['符号', '取正号（＋）', '取负号（－）'], rows: [['Q（热量）', '气体吸热', '气体放热'], ['W（功）', '外界对气体做功', '气体对外界做功'], ['ΔU（内能变化）', '内能增加', '内能减少']] },
      { type: 'tip', label: '提示·记忆口诀', text: '<strong>吸热为正、外界对气体做功为正、内能增加为正。</strong>套公式前先把每个量的符号定好：气体放热时 Q 取负，气体膨胀对外做功时 W 取负，这样就不容易算错。' },
      { type: 'example', label: '例题·代入公式', text: '一定量气体从外界吸热 Q = 200 J，同时外界对它做功 W = 100 J，求气体内能的变化 ΔU。<br><br><strong>解析</strong>：按符号规定，吸热 Q 为正、外界对气体做功 W 为正，直接代入 ΔU = Q + W = 200 J + 100 J = 300 J。结果为正，说明气体内能增加了 300 J。' },
      { type: 'list', items: ['第一步：确定 Q 的符号——气体吸热为正，放热为负', '第二步：确定 W 的符号——外界对气体做功为正，气体对外做功为负', '第三步：代入 ΔU = Q + W，结果为正则内能增加，为负则减少'] },
      { type: 'paragraph', text: '反过来用也一样：若气体膨胀对外做功，那么 W 应为负值，代入后如果 Q 不够大，ΔU 可能为负，表示内能减少、温度下降。这正是很多气体膨胀时会变冷的原因。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">内能 = 分子热运动的动能 + 分子间的势能</text><rect x="40" y="70" width="240" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="160" y="108" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">分子热运动的动能</text><text x="160" y="138" font-size="12" fill="#234b45" text-anchor="middle">温度越高，平均动能越大</text><rect x="400" y="70" width="240" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="520" y="108" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">分子间的势能</text><text x="520" y="138" font-size="12" fill="#234b45" text-anchor="middle">与体积、分子间距离有关</text><text x="340" y="138" font-size="30" fill="#4fb3a5" text-anchor="middle">+</text><text x="160" y="205" font-size="22" fill="#234b45" text-anchor="middle">↓</text><text x="520" y="205" font-size="22" fill="#234b45" text-anchor="middle">↓</text><rect x="220" y="218" width="240" height="58" rx="10" fill="#4fb3a5"/><text x="340" y="253" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="bold">物体的内能 U</text></svg>', caption: '图1　物体的内能由分子热运动的动能和分子间的势能两部分加和而成。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">做功和热传递都能让手的内能增加、温度升高</text><rect x="40" y="60" width="270" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="175" y="90" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">方式一：做功</text><text x="175" y="125" font-size="13" fill="#234b45" text-anchor="middle">双手快速摩擦</text><text x="175" y="152" font-size="13" fill="#234b45" text-anchor="middle">克服摩擦做功</text><rect x="110" y="172" width="130" height="34" rx="6" fill="#4fb3a5"/><text x="175" y="194" font-size="12" fill="#ffffff" text-anchor="middle">手内能增加、变暖</text><rect x="370" y="60" width="270" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="505" y="90" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">方式二：热传递</text><text x="505" y="125" font-size="13" fill="#234b45" text-anchor="middle">手握热水袋</text><text x="505" y="152" font-size="13" fill="#234b45" text-anchor="middle">吸收热量</text><rect x="440" y="172" width="130" height="34" rx="6" fill="#4fb3a5"/><text x="505" y="194" font-size="12" fill="#ffffff" text-anchor="middle">手内能增加、变暖</text><text x="340" y="280" font-size="14" fill="#1f7a6e" text-anchor="middle" font-weight="bold">两种途径效果等效：都使内能增加</text></svg>', caption: '图2　做功（左）和热传递（右）是不同的途径，但都能让手的内能增加、温度升高。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">热力学第一定律：内能变化 ΔU = Q + W</text><rect x="60" y="70" width="220" height="70" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="170" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">Q 吸热为正</text><text x="170" y="125" font-size="12" fill="#234b45" text-anchor="middle">放热则 Q 为负</text><rect x="60" y="160" width="220" height="70" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="170" y="190" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">W 外界对气体做功为正</text><text x="170" y="215" font-size="12" fill="#234b45" text-anchor="middle">气体对外做功 W 为负</text><rect x="400" y="110" width="220" height="80" rx="10" fill="#4fb3a5"/><text x="510" y="143" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">ΔU = Q + W</text><text x="510" y="172" font-size="12" fill="#ffffff" text-anchor="middle">ΔU 为正：内能增加</text><text x="318" y="120" font-size="26" fill="#234b45" text-anchor="middle">→</text><text x="318" y="210" font-size="26" fill="#234b45" text-anchor="middle">→</text></svg>', caption: '图3　把 Q 与 W 的符号规定好，代入公式即可得到内能变化 ΔU。' }
    ],
    exercises: [
      { type: 'choice', question: '关于物体的内能，下列说法正确的是？', options: ['物体的内能就是分子动能的总和', '物体的内能是分子动能与分子势能的总和', '温度相同的物体内能一定相同', '体积大的物体内能一定更大'], answer: '物体的内能是分子动能与分子势能的总和', explanation: '内能是物体内所有分子做无规则热运动的动能与分子间势能的总和，不只是动能，所以第一项错。温度相同的物体，若物质的量或体积不同，内能也可能不同，所以第三项错。体积大并不等于内能一定大，内能还取决于温度、物质的量等，所以第四项错。' },
      { type: 'choice', question: '关于做功和热传递改变内能，下列说法正确的是？', options: ['做功和热传递本质完全相同', '做功是能量转化，热传递是能量转移，二者效果等效', '只有做功能改变内能', '只有热传递能改变内能'], answer: '做功是能量转化，热传递是能量转移，二者效果等效', explanation: '做功是机械能与内能等形式的相互转化，而热传递是内能从一个物体转移到另一个物体，二者物理本质不同，所以第一项错。做功和热传递都能改变内能，二者在改变内能的效果上等效，因此第二项正确，第三、四项都说"只有"某一种能改变，显然错误。' },
      { type: 'choice', question: '一定量气体从外界吸热 Q = 200 J，同时外界对气体做功 W = 100 J，则内能变化 ΔU 为？', options: ['300 J，内能增加', '100 J，内能增加', '100 J，内能减少', '300 J，内能减少'], answer: '300 J，内能增加', explanation: '根据热力学第一定律 ΔU = Q + W，吸热 Q 取正值 200 J，外界对气体做功 W 取正值 100 J，代入得 ΔU = 200 J + 100 J = 300 J。结果为正，说明气体的内能增加了 300 J。' },
      { type: 'fill', question: '热力学第一定律用公式表示为：内能变化量 ΔU = ___ （用 Q 和 W 表示，中间用加号连接）。', answer: 'Q + W', explanation: '热力学第一定律的公式为 ΔU = Q + W，其中 Q 是气体从外界吸收的热量，W 是外界对气体做的功。它是能量守恒定律在热现象中的具体形式，把内能变化与热量、功三者联系起来。' },
      { type: 'fill', question: '某气体膨胀对外做功 50 J，按符号规定，此时 W = ___ J（填正号或负号）。', answer: '-50', explanation: '符号规定中，外界对气体做功时 W 为正；反过来，气体膨胀对外界做功时 W 为负。因此气体对外做功 50 J 应记作 W = -50 J，代入公式后会使内能变化量 ΔU 减小。' }
    ]
  });
})();
