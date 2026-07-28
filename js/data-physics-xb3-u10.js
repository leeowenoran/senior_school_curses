/* ============================================================
 * 高二物理 · 选择性必修 第三册 · 第三章 热力学定律
 * 课时10：能量守恒定律应用
 * 数据注入：physics.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u10',
    name: '能量守恒定律应用',
    chapter: '选择性必修 第三册 · 第三章 热力学定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、能量守恒定律' },
      { type: 'paragraph', text: '我们学过很多种能量：动能、重力势能、弹性势能、内能、电能等等。大量事实表明，能量既不会凭空产生，也不会凭空消失，它只能从一种形式转化为另一种形式，或从一个物体转移到别的物体，在转化和转移的过程中，总能量始终保持不变。' },
      { type: 'keypoint', label: '重点·能量守恒', text: '<strong>能量守恒定律：各种形式的能量在转化和转移过程中，总能量保持不变。</strong>这是自然界最普遍、最可靠的规律之一，适用于机械运动、热现象、电磁现象等一切过程。' },
      { type: 'heading', text: '二、第一类永动机不可能实现' },
      { type: 'paragraph', text: '历史上曾有许多人梦想制造一种机器：不需要给它提供任何能量，却能源源不断地对外做功，最好还能永远转下去。这种不消耗能量却不断输出功的机器，被称为第一类永动机。' },
      { type: 'keypoint', label: '重点·第一类永动机', text: '<strong>第一类永动机是指不消耗任何能量却不断对外做功的机器。</strong>它违反能量守恒定律，因此无论技术多先进都不可能实现，这不是"暂时造不出"，而是规律根本不允许。' },
      { type: 'warn', label: '易错', text: '<strong>第一类永动机做不成，不是因为材料不够强、摩擦太大或技术不行，而是因为它违背了能量守恒定律。</strong>只要想"不付出能量却不断得到功"，就永远不可能成功。' },
      { type: 'example', label: '例题·判断永动机', text: '有人宣称发明了一种装置：把它放在桌上就能源源不断地带动发电机发电，不需要燃料也不需要电源。它可能实现吗？<br><br><strong>解析</strong>：这正是一类永动机的设想——不输入能量却持续对外做功。根据能量守恒定律，输出的功必须由等量能量转化而来，没有能量来源就不可能持续做功，所以它不可能实现。' },
      { type: 'heading', text: '三、用 ΔU = Q + W 分析典型过程' },
      { type: 'paragraph', text: '借助热力学第一定律 ΔU = Q + W，我们能分析气体在不同变化过程中的能量关系。关键是先判断 Q 和 W 的符号，再代入公式。下面看三种常见过程。' },
      { type: 'list', items: ['等温过程：温度不变，理想气体内能不变（ΔU = 0），于是 Q = -W', '等容过程：体积不变，气体不做功（W = 0），于是 ΔU = Q', '等压过程：压强不变，气体膨胀会对外做功（W 为负），ΔU = Q + W'] },
      { type: 'table', headers: ['过程', '体积变化', '做功 W', '内能关系'], rows: [['等温', '可变', 'W = -Q', 'ΔU = 0，内能不变'], ['等容', '不变', 'W = 0', 'ΔU = Q，吸热即增内能'], ['等压', '膨胀', 'W 为负', 'ΔU = Q + W']] },
      { type: 'paragraph', text: '等温过程举例：理想气体在恒温下缓慢膨胀，温度不变所以内能不变（ΔU = 0）。由 ΔU = Q + W 得 Q = -W。气体膨胀对外做功使 W 为负，于是 Q 为正，说明气体必须从外界吸热来"补上"这份功。' },
      { type: 'paragraph', text: '等容过程举例：把密闭气体加热但体积固定（比如刚性容器），气体体积不变就无力做功，W = 0，于是 ΔU = Q。气体吸收的热量全部用来增加自己的内能，温度随之升高。' },
      { type: 'example', label: '例题·等压膨胀', text: '一定量气体做等压膨胀，从外界吸热 Q = 500 J，同时气体膨胀对外做功 200 J，求气体内能的变化 ΔU。<br><br><strong>解析</strong>：气体对外做功，按符号规定 W = -200 J；吸热 Q = 500 J 为正。代入 ΔU = Q + W = 500 J + (-200 J) = 300 J。结果为正，说明气体内能增加了 300 J。' },
      { type: 'tip', label: '提示·分析步骤', text: '<strong>分析物态过程三步走：先判体积定 W，再判吸放热定 Q，最后代入 ΔU = Q + W。</strong>牢牢记住"外界对气体做功 W 为正、气体对外做功 W 为负"，符号就不会乱。' },
      { type: 'list', items: ['第一步：看体积——膨胀则气体对外做功（W 负），被压缩则外界对气体做功（W 正），体积不变则 W = 0', '第二步：看热量——吸热 Q 为正，放热 Q 为负', '第三步：代入公式 ΔU = Q + W，正号表示内能增加，负号表示减少'] },
      { type: 'paragraph', text: '压缩气体实例：用活塞快速压缩气缸里的气体，外界对气体做功（W 为正）。如果压缩很快来不及散热，气体又没放热（Q 很小甚至为 0），则 ΔU 增大，气体内能增加、温度明显升高，这就是为什么打气筒用久了会发烫。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">第一类永动机：不耗能却做功，违背守恒</text><rect x="180" y="70" width="320" height="120" rx="12" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="105" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">幻想中的永动机</text><text x="340" y="135" font-size="13" fill="#234b45" text-anchor="middle">不输入能量却不断对外做功</text><text x="340" y="165" font-size="13" fill="#234b45" text-anchor="middle">违反能量守恒定律</text><text x="330" y="240" font-size="60" fill="#4fb3a5" text-anchor="middle">✕</text><text x="340" y="285" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">永远造不出来</text></svg>', caption: '图1　第一类永动机想"不耗能却做功"，直接违反能量守恒定律，注定失败。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">等温膨胀：ΔU = 0，吸热 Q = -W</text><rect x="60" y="80" width="180" height="70" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="150" y="120" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">气体膨胀做功</text><rect x="440" y="80" width="180" height="70" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="530" y="120" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">气体吸热</text><rect x="250" y="190" width="180" height="60" rx="10" fill="#4fb3a5"/><text x="340" y="226" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="bold">ΔU = 0</text><text x="250" y="120" font-size="26" fill="#234b45" text-anchor="middle">→</text><text x="430" y="120" font-size="26" fill="#234b45" text-anchor="middle">→</text><text x="340" y="285" font-size="13" fill="#1f7a6e" text-anchor="middle">温度不变，内能不变，吸热恰好等于对外做的功</text></svg>', caption: '图2　等温膨胀中温度不变、内能不变，气体吸收的热量用来对外做功。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">等容与等压过程的能量关系对比</text><rect x="40" y="70" width="280" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">等容过程</text><text x="180" y="135" font-size="13" fill="#234b45" text-anchor="middle">体积不变，W = 0</text><text x="180" y="165" font-size="13" fill="#234b45" text-anchor="middle">ΔU = Q</text><text x="180" y="195" font-size="13" fill="#234b45" text-anchor="middle">吸热全变内能</text><rect x="360" y="70" width="280" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">等压膨胀</text><text x="500" y="135" font-size="13" fill="#234b45" text-anchor="middle">膨胀对外做功 W 为负</text><text x="500" y="165" font-size="13" fill="#234b45" text-anchor="middle">ΔU = Q + W</text><text x="500" y="195" font-size="13" fill="#234b45" text-anchor="middle">吸热部分用于做功</text></svg>', caption: '图3　等容过程不做功（左），等压膨胀对外做功（右），二者内能变化关系不同。' }
    ],
    exercises: [
      { type: 'choice', question: '第一类永动机至今未能制成，其根本原因是？', options: ['技术还不够先进', '违背了能量守恒定律', '材料不够坚固', '摩擦力太大无法消除'], answer: '违背了能量守恒定律', explanation: '第一类永动机的设想是不消耗任何能量却不断对外做功，这直接违反能量守恒定律。能量守恒是自然界的基本规律，不是技术或材料问题，所以无论怎样改进都不可能制成。' },
      { type: 'choice', question: '一定量理想气体做等温膨胀，温度不变则内能不变（ΔU = 0），气体对外做功使 W 为负，则由 ΔU = Q + W 可知？', options: ['Q 为正，气体吸热', 'Q 为负，气体放热', 'Q = 0，不吸不放热', '无法判断 Q 的符号'], answer: 'Q 为正，气体吸热', explanation: '等温过程温度不变，理想气体内能不变，ΔU = 0。由 ΔU = Q + W 得 Q = -W。气体膨胀对外做功，W 为负，所以 Q = -（负数）为正，说明气体必须从外界吸热，吸收的热量恰好等于对外做的功。' },
      { type: 'choice', question: '气体在等容（体积不变）升温过程中，体积不变不做功，则内能的增加量等于？', options: ['外界对气体做的功', '气体放出的热量', '气体吸收的热量', '零'], answer: '气体吸收的热量', explanation: '等容过程中气体体积不变，没有位移，不做功，W = 0。由热力学第一定律 ΔU = Q + W 得 ΔU = Q，即内能的增加量等于气体吸收的热量。这也说明等容升温时，吸收的热量全部用于升高内能和温度。' },
      { type: 'fill', question: '能量既不会凭空产生，也不会凭空消失，它在转化和转移的过程中，总能量保持___。', answer: '不变', explanation: '这就是能量守恒定律的核心表述：能量只能从一种形式转化为另一种形式，或从一个物体转移到另一个物体，但在一切转化和转移过程中，总能量始终保持不变。它是自然界普遍适用的基本规律。' },
      { type: 'fill', question: '气体等压膨胀，对外做功 200 J（即 W = -200 J），同时吸热 500 J，则内能变化 ΔU = Q + W = ___ J。', answer: '300', explanation: '代入符号：吸热 Q = 500 J 为正，气体对外做功 W = -200 J 为负。由 ΔU = Q + W 得 ΔU = 500 J + (-200 J) = 300 J，结果为正，说明气体内能增加了 300 J。计算时务必先按符号规定确定 Q 和 W 的正负。' }
    ]
  });
})();
