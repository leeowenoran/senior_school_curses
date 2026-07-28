/* ============================================================
 * 选择性必修第一册 · 第一章 动量守恒定律
 * 课时5：反冲运动
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u5',
    name: '反冲运动',
    chapter: '选择性必修第一册 · 第一章 动量守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是反冲运动' },
      { type: 'paragraph', text: '你玩过气球吗？把吹鼓的气球口松开，气体向后喷出，气球反而向前飞走。这种"一部分物体向某个方向抛出，剩下部分就向相反方向运动"的现象，叫作反冲运动。其实质是：把整体看作一个系统，内力让两部分分开，由于原来总动量为零（或某方向为零），分开后两部分动量大小相等、方向相反，于是朝相反方向运动。' },
      { type: 'keypoint', label: '重点·反冲运动', text: '<strong>反冲运动是系统在内力作用下分成两部分，一部分向某方向运动，另一部分向相反方向运动的现象。</strong>它本质上是动量守恒：分开前总动量为零，则分开后两部分动量等大反向。' },
      { type: 'list', items: ['系统原本静止（或一个方向总动量为零）', '内部发生作用，物体分成两部分', '两部分朝相反方向运动，动量大小相等、方向相反', '整个系统总动量仍保持为零（或不变）'] },
      { type: 'heading', text: '二、反冲运动的原理：动量守恒' },
      { type: 'paragraph', text: '设系统原来静止，总动量为零。某时刻喷出质量为 m₁、速度为 v₁ 的部分，剩下部分质量为 m₂、速度为 v₂。由动量守恒：0 = m₁×v₁ + m₂×v₂，所以 v₂ = −(m₁×v₁) / m₂。负号表示剩下方和喷出方方向相反——这就是"反冲"。只要喷得快、喷得多，剩下部分就能获得可观的速度。' },
      { type: 'keypoint', label: '重点·反冲公式', text: '<strong>由动量守恒得反冲速度 v₂ = −(m₁×v₁) / m₂（系统原静止）。</strong>负号说明剩下部分与喷出部分运动方向相反。喷出物质的速度 v₁ 越大、质量越多，反冲越明显。' },
      { type: 'example', label: '例题·气球反冲', text: '一个静止在空中的气球（含气总质量 0.2 kg），放出 0.05 kg 气体，气体相对地面以 10 m/s 向下喷出。求气球剩余部分的速度。（取向下为正）<br><br><strong>解析</strong>：<br>系统原静止，总动量为 0。气体质量 m₁ = 0.05 kg，速度 v₁ = 10 m/s（向下为正）。<br>剩余质量 m₂ = 0.2 − 0.05 = 0.15 kg。<br>由 0 = m₁×v₁ + m₂×v₂：0 = 0.05×10 + 0.15×v₂，得 v₂ = −3.33 m/s。<br>负号表示气球向上运动，速度约 3.33 m/s。' },
      { type: 'heading', text: '三、生活中的反冲' },
      { type: 'paragraph', text: '反冲运动在生活里到处可见。灌溉用的喷水器，水从侧孔喷出，喷头就反向旋转；烟花升空后，火药向一侧喷射，烟花就向另一侧窜动；枪炮发射子弹时，子弹向前、枪身后坐，也是反冲（所以才有"后坐力"）。这些现象背后都是同一条动量守恒规律。' },
      { type: 'warn', label: '易错', text: '<strong>反冲的速度方向取决于"喷出物"的方向，不是随便定的。</strong>列式时若取喷出物速度为正，则剩余物体速度必为负，二者永远相反。另外，实际反冲往往还受重力、空气阻力影响，严格说合外力不为零，但短时间内仍可近似用动量守恒处理。' },
      { type: 'heading', text: '四、火箭原理' },
      { type: 'paragraph', text: '火箭是最典型的反冲装置。火箭自带燃料和氧化剂，在尾部的喷口高速向后喷出燃烧产生的高温气体，根据动量守恒，火箭本体就获得向前的推力。由于火箭自己携带氧化剂，不依赖空气，所以能在没有空气的太空里飞行——这是它和普通飞机最大的区别。' },
      { type: 'keypoint', label: '重点·火箭原理', text: '<strong>火箭靠向后高速喷出燃气获得向前推力，本质是反冲运动与动量守恒。</strong>它自带氧化剂，不依赖外界空气，因此能在真空中飞行。喷出速度越大、喷气质量越多，火箭获得的推力越大。' },
      { type: 'tip', label: '提示', text: '<strong>想让火箭飞得更快更远，关键在两件事：一是把燃气喷得更快（提高喷气速度），二是尽量多喷、并减轻自身结构质量。</strong>现代多级火箭通过"扔掉"用完的空壳来减负，正是为了把更多动量留给有效载荷。' },
      { type: 'list', items: ['火箭自带燃料和氧化剂，太空真空也能工作', '尾部向后喷燃气 → 箭体向前获得推力', '喷气速度越大、喷气越多，推力越大', '多级火箭逐级抛掉空壳，提高最终速度'] },
      { type: 'table', headers: ['反冲实例', '喷出部分', '剩余部分运动方向', '说明'], rows: [['气球放气', '向后喷的气', '向前飞', '经典小反冲'], ['喷泉旋转喷头', '向侧面的水', '反向旋转', '灌溉喷头原理'], ['枪炮发射', '向前飞的子弹', '枪身后坐', '后坐力来自反冲'], ['火箭升空', '向后喷的燃气', '向前加速', '太空也能工作']]},
      { type: 'heading', text: '五、反冲的应用与防止' },
      { type: 'paragraph', text: '反冲既能利用也能要防范。利用方面：火箭、喷气式飞机、灌溉旋转喷头都靠反冲工作。防止方面：大炮发射时巨大的后坐力会移位，所以炮身要加止退装置；宇航员太空行走用的喷气背包，也是小心控制反冲方向来移动。理解反冲，既能造工具，也能保安全。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">反冲：一部分喷出，其余反向运动</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">气球放气</text><circle cx="180" cy="150" r="26" fill="#4fb3a5"/><polygon points="180,176 168,200 192,200" fill="#234b45"/><text x="180" y="228" font-size="12" fill="#234b45" text-anchor="middle">气向下喷，球向上飞</text><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">动量等大反向</text><line x1="420" y1="150" x2="500" y2="150" stroke="#234b45" stroke-width="4"/><polygon points="500,142 518,150 500,158" fill="#234b45"/><line x1="580" y1="150" x2="500" y2="150" stroke="#4fb3a5" stroke-width="4"/><polygon points="500,142 482,150 500,158" fill="#4fb3a5"/></svg>', caption: '图1　气球向下喷气、自身向上飞，喷出物与剩余部分动量等大反向，这就是反冲。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">火箭：向后喷燃气，向前加速</text><rect x="300" y="70" width="80" height="150" rx="10" fill="#4fb3a5"/><polygon points="300,220 340,220 320,250" fill="#4fb3a5"/><text x="340" y="60" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">火箭</text><polygon points="300,220 270,250 300,245" fill="#234b45"/><polygon points="300,228 262,258 300,252" fill="#234b45"/><text x="250" y="278" font-size="12" fill="#234b45" text-anchor="middle">燃气向后喷</text><line x1="380" y1="145" x2="470" y2="145" stroke="#4fb3a5" stroke-width="4"/><polygon points="470,137 488,145 470,153" fill="#4fb3a5"/><text x="470" y="120" font-size="12" fill="#234b45" text-anchor="middle">箭体向前</text></svg>', caption: '图2　火箭尾部向后高速喷出燃气，箭体因反冲获得向前的推力，真空里也能前进。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">反冲的两面：利用与防止</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">利用反冲</text><polygon points="120,170 150,150 150,190" fill="#234b45"/><text x="170" y="170" font-size="16" fill="#234b45">→</text><text x="180" y="220" font-size="12" fill="#234b45" text-anchor="middle">火箭、喷气飞机</text><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">防止反冲</text><rect x="470" y="150" width="60" height="40" fill="#4fb3a5"/><text x="430" y="170" font-size="16" fill="#234b45">←</text><text x="500" y="220" font-size="12" fill="#234b45" text-anchor="middle">炮身加止退装置</text></svg>', caption: '图3　反冲可以被利用（火箭），也需要被防止（大炮后坐加止退装置）。' }
    ],
    exercises: [
      { type: 'choice', question: '关于反冲运动，下列说法正确的是？', options: ['反冲是因为受到外力推动', '反冲是系统内力使两部分朝相反方向运动', '反冲时总动量不再守恒', '反冲只能发生在空气中'], answer: '反冲是系统内力使两部分朝相反方向运动', explanation: '反冲运动的本质是一个系统在内力作用下分成两部分，两部分朝相反方向运动的现象。它并不靠外力推动，相反正是动量守恒的体现：系统原来静止则总动量为零，分开后两部分动量等大反向。反冲不限于空气环境，火箭在真空中也能反冲飞行。' },
      { type: 'choice', question: '火箭能够在太空真空环境中飞行，主要原因是？', options: ['太空没有重力', '火箭自带氧化剂，靠喷燃气反冲推进', '太空空气推动火箭', '火箭不受任何力'], answer: '火箭自带氧化剂，靠喷燃气反冲推进', explanation: '火箭与普通飞机不同，它自身携带燃料和氧化剂，燃烧后从尾部高速向后喷出燃气，箭体因反冲获得向前的推力。因为不依赖外界空气提供氧化剂，所以即使在真空的太空里也能工作。真空中仍有重力（如地球引力），火箭并非"没有重力"。' },
      { type: 'choice', question: '枪炮发射时产生"后坐力"，这是因为？', options: ['子弹比枪轻', '反冲使枪身向后运动', '火药向后喷', '枪身受地面推力'], answer: '反冲使枪身向后运动', explanation: '发射时子弹向前飞出，根据动量守恒，枪身会获得向后的动量，于是向后运动，这就是我们感受到的"后坐力"。它是反冲运动的典型表现。为了安全和精度，火炮会加装止退装置来抵消这种向后的运动。火药燃气是向后喷的，但直接原因是枪身整体的反冲。' },
      { type: 'fill', question: '系统原来静止，反冲时两部分动量大小相等、方向___（填"相同"或"相反"）。', answer: '相反', explanation: '反冲前系统总动量为零。分开后两部分动量之和仍应为零，因此一部分的动量必然与另一部分大小相等、方向相反。比如气球向下喷气、球向上飞，正是这两部分动量等大反向，使总动量保持为零。' },
      { type: 'fill', question: '由反冲公式 v₂ = −(m₁×v₁)/m₂ 可知，喷气速度 v₁ 越大，火箭获得的反冲速度越___（填"大"或"小"）。', answer: '大', explanation: '在系统原静止的反冲公式中，剩余部分的速度大小 |v₂| = (m₁×v₁)/m₂。当喷出物质量 m₁ 和剩余质量 m₂ 一定时，喷出速度 v₁ 越大，|v₂| 就越大。所以提高燃气喷射速度是提升火箭推力和速度的关键途径之一。' }
    ]
  });
})();
