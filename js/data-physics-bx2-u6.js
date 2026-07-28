/* ============================================================
 * 高一物理 · 必修 第二册 · 第六章 圆周运动
 * 课时2：向心力
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u6',
    name: '向心力',
    chapter: '必修第二册 · 第六章 圆周运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是向心力' },
      { type: 'paragraph', text: '做圆周运动的物体，速度方向不断变化，说明它一定在做变速运动，因此必然受到合力。这个合力总是指向圆心，正是它不断改变物体的速度方向，让物体拐着弯走圆周。这个指向圆心的合力，就叫作向心力。' },
      { type: 'keypoint', label: '重点·向心力的方向与作用', text: '<strong>向心力是使物体做圆周运动的合力，方向始终指向圆心。</strong>它只改变物体速度的方向，不改变速度的大小，所以向心力不做功。' },
      { type: 'paragraph', text: '需要特别注意的是，向心力不是一种“新出现”的力。物体受到的力还是重力、弹力、摩擦力这些，向心力只是从“效果”上给这些力（或它们的合力）起的名字。' },
      { type: 'keypoint', label: '重点·向心力是效果力', text: '<strong>向心力是按效果命名的力，受力分析时不能凭空多写一个“向心力”。</strong>它可以是某一个力（如绳子的拉力），也可以是几个力的合力。' },
      { type: 'list', items: ['绳子拴着的小球在水平面内转动：向心力由绳子的拉力提供', '在光滑水平圆盘上随盘转动的物体：向心力由摩擦力提供', '人造地球卫星绕地球转：向心力由地球的引力提供', '汽车转弯：向心力由地面给车轮的摩擦力提供'] },
      { type: 'heading', text: '二、向心力的大小' },
      { type: 'paragraph', text: '向心力的大小不是随便的，它和物体的质量、运动快慢、圆周半径都有关系。实验表明，物体质量越大、线速度越大、半径越小，需要的向心力就越大。' },
      { type: 'keypoint', label: '重点·向心力公式', text: '<strong>向心力大小 F = m × v² / r = m × ω² × r。</strong>其中 m 是质量，v 是线速度，ω 是角速度，r 是圆周半径。' },
      { type: 'paragraph', text: '这两个式子其实是同一个意思，只是用线速度还是用角速度来表达。把 v = ω × r 代入第一个式子，就得到第二个式子；反过来也能推回去。' },
      { type: 'table', headers: ['表达式', '适用场景', '正比关系'], rows: [['F = m × v² / r', '已知线速度 v 时', 'F 与 m、v² 成正比，与 r 成反比'], ['F = m × ω² × r', '已知角速度 ω 时', 'F 与 m、ω²、r 都成正比']] },
      { type: 'example', label: '例题·求向心力', text: '一个质量 m = 2 千克的小球，用绳子拴着在半径 r = 1 米的水平圆周上以线速度 v = 4 米每秒匀速转动，求向心力大小。<br><br><strong>解析</strong>：由 F = m × v² / r，代入数据：F = 2 × 4² / 1 = 2 × 16 / 1 = 32 牛。所以向心力大小为 32 牛，方向始终指向圆心。' },
      { type: 'warn', label: '易错', text: '<strong>受力分析时不要再额外加一个“向心力”。</strong>向心力是现有力的合力或某个分力，若已经把重力、支持力、拉力等全都分析了一遍，就不能再凭空多写一项“向心力”，否则会把力算重。' },
      { type: 'tip', label: '提示', text: '<strong>匀速圆周运动的条件是合力恰好等于向心力。</strong>此时合力全部用来改变方向，物体速率不变；如果合力不等于所需向心力，物体就不能做匀速圆周运动。' },
      { type: 'heading', text: '三、匀速圆周运动的性质' },
      { type: 'paragraph', text: '匀速圆周运动里，物体的速率不变，但速度方向时刻在变，所以它仍是变速运动，加速度不为零。这个加速度也正指向圆心，下一节课我们会专门学习它。' },
      { type: 'list', items: ['匀速圆周运动是速率不变、方向变化的变速运动', '合力全部提供向心力，方向始终指向圆心', '向心力大小不变，但方向时刻改变，因此是变力', '向心力不改变速率，只改变速度方向'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">向心力始终指向圆心</text><circle cx="340" cy="170" r="100" fill="none" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="70" r="10" fill="#4fb3a5"/><line x1="340" y1="70" x2="340" y2="170" stroke="#234b45" stroke-width="3"/><text x="348" y="130" font-size="14" fill="#234b45">F(指向圆心)</text><text x="340" y="290" font-size="12" fill="#234b45" text-anchor="middle">向心力只改变速度方向，不改变速度大小</text></svg>', caption: '图1　圆周上物体的向心力 F 总是指向圆心，与其运动方向垂直。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">向心力可由重力与绳拉力的合力提供</text><circle cx="340" cy="170" r="90" fill="none" stroke="#2e9e8f" stroke-width="2"/><circle cx="430" cy="170" r="12" fill="#4fb3a5"/><line x1="430" y1="170" x2="430" y2="240" stroke="#234b45" stroke-width="3"/><text x="438" y="232" font-size="13" fill="#234b45">重力</text><line x1="430" y1="170" x2="395" y2="135" stroke="#4fb3a5" stroke-width="3"/><text x="356" y="128" font-size="13" fill="#234b45">拉力</text><line x1="430" y1="170" x2="395" y2="170" stroke="#234b45" stroke-width="2" stroke-dasharray="4,3"/><text x="404" y="190" font-size="12" fill="#234b45">合力→圆心</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">沿半径指向圆心的合力就是向心力</text></svg>', caption: '图2　在水平圆周中，绳的拉力与重力的合力指向圆心，充当向心力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">向心力大小 F = m × v² / r</text><rect x="90" y="90" width="150" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="165" y="140" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">质量 m</text><text x="165" y="172" font-size="13" fill="#234b45" text-anchor="middle">越大 F 越大</text><rect x="265" y="90" width="150" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="140" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">线速度 v</text><text x="340" y="172" font-size="13" fill="#234b45" text-anchor="middle">平方影响</text><rect x="440" y="90" width="150" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="515" y="140" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">半径 r</text><text x="515" y="172" font-size="13" fill="#234b45" text-anchor="middle">越大 F 越小</text><text x="340" y="260" font-size="14" fill="#234b45" text-anchor="middle">F 与 m、v² 成正比，与 r 成反比</text></svg>', caption: '图3　向心力与质量、线速度的平方成正比，与半径成反比。' }
    ],
    exercises: [
      { type: 'choice', question: '关于向心力，下列说法正确的是？', options: ['向心力是一种新的、独立的力', '向心力的方向始终指向圆心', '向心力会改变物体的速率', '受力分析时要单独画一个向心力'], answer: '向心力的方向始终指向圆心', explanation: '向心力是按效果命名的力，它可以是重力、弹力、摩擦力中的某一个或几个的合力，并不是一种独立的新力，所以受力分析时不能单独多写一个向心力。它的方向始终指向圆心，只改变速度方向、不改变速率。' },
      { type: 'choice', question: '用绳子拴着小球在光滑水平面内做匀速圆周运动，向心力由谁提供？', options: ['小球的重力', '绳子的拉力', '地面对小球的支持力', '小球受到的惯性力'], answer: '绳子的拉力', explanation: '在水平面内转动时，小球受到重力、水平面的支持力和绳子的拉力。重力和支持力都在竖直方向，互相抵消，只有绳子的拉力沿半径指向圆心，所以向心力由绳子的拉力提供。' },
      { type: 'choice', question: '对于做匀速圆周运动的物体，下列关系式正确的是？', options: ['F = m × v / r', 'F = m × v² / r', 'F = m × ω / r', 'F = m × r / v²'], answer: 'F = m × v² / r', explanation: '向心力大小的公式为 F = m × v² / r，也可写成 F = m × ω² × r。把 v = ω × r 代入第一个式子即可得到第二个式子。其余三个式子都不符合正确的比例关系。' },
      { type: 'fill', question: '向心力是按效果命名的力，它使物体做圆周运动，方向始终指向___。', answer: '圆心', explanation: '向心力的“向心”二字就是指它的方向始终指向圆心。正是这个指向圆心的合力不断改变物体的速度方向，使物体沿着圆周运动，它不改变速度的大小。' },
      { type: 'fill', question: '质量为 m 的物体以角速度 ω 在半径为 r 的圆周上运动，所需向心力 F = ___。', answer: 'm × ω² × r', explanation: '向心力公式用角速度表示时为 F = m × ω² × r，它与质量 m、角速度的平方 ω²、半径 r 都成正比。若已知的是线速度 v，则用 F = m × v² / r 计算，两个式子本质相同。' }
    ]
  });
})();
