/* ============================================================
 * 高一物理 · 必修 第二册 · 第六章 圆周运动
 * 课时3：向心加速度
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u7',
    name: '向心加速度',
    chapter: '必修第二册 · 第六章 圆周运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、为什么会有加速度' },
      { type: 'paragraph', text: '做圆周运动的物体速度方向时刻在变，所以速度这个矢量是变化的，物体一定具有加速度。根据牛顿第二定律，有合力就一定有加速度，而这里的合力就是向心力，于是对应的加速度也指向圆心。' },
      { type: 'keypoint', label: '重点·向心加速度', text: '<strong>向心加速度 a 的方向始终指向圆心，大小 a = v² / r = ω² × r。</strong>它由向心力产生，描述速度方向变化得有多快。' },
      { type: 'paragraph', text: '要注意，向心加速度虽然名字里有“向心”，但它和向心力是“因果”关系：向心力是原因，产生向心加速度这个结果。知道了向心力，除以质量就得到向心加速度。' },
      { type: 'keypoint', label: '重点·与向心力的关系', text: '<strong>向心加速度与向心力方向相同，都满足 a = F / m。</strong>把 F = m × v² / r 两边除以 m，就得到 a = v² / r。' },
      { type: 'heading', text: '二、向心加速度的大小' },
      { type: 'paragraph', text: '向心加速度的大小同样可以从线速度或角速度两个角度看。用线速度时是 v 的平方除以半径，用角速度时是角速度的平方乘以半径，二者完全等价。' },
      { type: 'list', items: ['由线速度：a = v² / r，a 与 v² 成正比、与 r 成反比', '由角速度：a = ω² × r，a 与 ω²、r 都成正比', '把 v = ω × r 代入，两个式子可以互相推导', 'a 越大，说明速度方向变化得越快'] },
      { type: 'table', headers: ['表达式', '适用场景', '依赖量'], rows: [['a = v² / r', '已知线速度 v 时', '与 v² 成正比，与 r 成反比'], ['a = ω² × r', '已知角速度 ω 时', '与 ω²、r 都成正比']] },
      { type: 'example', label: '例题·求向心加速度', text: '地球可近似看作绕太阳做匀速圆周运动，轨道半径很大，线速度约为 v = 3.0 × 10⁴ 米每秒，半径 r = 1.5 × 10¹¹ 米，估算其向心加速度大小。<br><br><strong>解析</strong>：由 a = v² / r，代入：a = (3.0 × 10⁴)² / (1.5 × 10¹¹) = 9.0 × 10⁸ / 1.5 × 10¹¹ = 6.0 × 10⁻³ 米每二次方秒。可见地球公转的向心加速度很小。' },
      { type: 'warn', label: '易错', text: '<strong>不要以为 a 指向圆心就“没有加速度”。</strong>匀速圆周运动速率不变，但速度方向在变，加速度不为零，且始终指向圆心。说“匀速圆周运动没有加速度”是常见的错误。' },
      { type: 'tip', label: '提示', text: '<strong>先判断用哪个公式更方便。</strong>题目给的是线速度 v 和半径 r，就用 a = v² / r；给的是角速度 ω 和半径 r，就用 a = ω² × r。两者本质一样，选好代入即可。' },
      { type: 'heading', text: '三、向心加速度的物理意义' },
      { type: 'paragraph', text: '向心加速度专门描述“速度方向”变化快慢，而不是速度大小变化快慢。在匀速圆周运动里，速率始终不变，变化的只是方向，所以这个加速度全部用来改变方向。' },
      { type: 'list', items: ['向心加速度对应速度方向的变化，不对应速率变化', '它的大小反映方向转得有多快', '半径越小、速率越大，方向变化越快，a 越大', '方向与向心力一致，始终指向圆心'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">向心加速度 a 始终指向圆心</text><circle cx="340" cy="170" r="100" fill="none" stroke="#2e9e8f" stroke-width="2"/><circle cx="430" cy="170" r="10" fill="#4fb3a5"/><line x1="430" y1="170" x2="340" y2="170" stroke="#234b45" stroke-width="3"/><text x="360" y="160" font-size="14" fill="#234b45">a(指向圆心)</text><text x="340" y="290" font-size="12" fill="#234b45" text-anchor="middle">a 描述速度方向变化快慢，方向沿半径指向圆心</text></svg>', caption: '图1　圆周上物体的向心加速度 a 指向圆心，与向心力同向。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">向心加速度大小 a = v² / r</text><rect x="120" y="90" width="160" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="200" y="140" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">线速度 v</text><text x="200" y="172" font-size="13" fill="#234b45" text-anchor="middle">平方成正比</text><rect x="400" y="90" width="160" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="480" y="140" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">半径 r</text><text x="480" y="172" font-size="13" fill="#234b45" text-anchor="middle">成反比</text><text x="340" y="260" font-size="14" fill="#234b45" text-anchor="middle">a 与 v² 成正比，与 r 成反比</text></svg>', caption: '图2　由线速度表达时，向心加速度与线速度的平方成正比、与半径成反比。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">由 F = m × a 得 a = F / m</text><rect x="160" y="90" width="150" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="235" y="140" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">向心力 F</text><text x="235" y="172" font-size="13" fill="#234b45" text-anchor="middle">÷ 质量 m</text><rect x="370" y="90" width="150" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="445" y="140" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">a = F / m</text><text x="445" y="172" font-size="13" fill="#234b45" text-anchor="middle">a 与 F 同向</text><text x="340" y="260" font-size="14" fill="#234b45" text-anchor="middle">向心加速度由向心力产生，方向相同</text></svg>', caption: '图3　由牛顿第二定律，向心加速度等于向心力除以质量。' }
    ],
    exercises: [
      { type: 'choice', question: '关于匀速圆周运动的向心加速度，下列说法正确的是？', options: ['向心加速度为零', '向心加速度方向指向圆心', '向心加速度改变速度的大小', '向心加速度方向不变'], answer: '向心加速度方向指向圆心', explanation: '匀速圆周运动速率不变但方向时刻在变，因此具有不为零的加速度，这个加速度就是向心加速度，方向始终指向圆心。它只改变速度方向、不改变速度大小，并且方向随位置变化而时刻改变。' },
      { type: 'choice', question: '对于做匀速圆周运动的物体，下列向心加速度表达式正确的是？', options: ['a = v / r', 'a = v² / r', 'a = v × r', 'a = ω / r'], answer: 'a = v² / r', explanation: '向心加速度由 a = F / m 推出，把 F = m × v² / r 代入即得 a = v² / r；用角速度表示则为 a = ω² × r。其余三个式子都不符合正确的比例关系。' },
      { type: 'choice', question: '下列说法正确的是？', options: ['半径越大，向心加速度一定越大', '线速度越大，向心加速度一定越大', '由 a = v² / r，a 与 v² 成正比、与 r 成反比', '向心加速度与向心力无关'], answer: '由 a = v² / r，a 与 v² 成正比、与 r 成反比', explanation: '由 a = v² / r 可知，向心加速度由线速度和半径共同决定，单独说半径越大或线速度越大都不一定使 a 变大。向心加速度由向心力产生，满足 a = F / m，二者密切相关。' },
      { type: 'fill', question: '向心加速度描述速度___变化的快慢（填“大小”或“方向”）。', answer: '方向', explanation: '匀速圆周运动中速率不变，变化的只是速度的方向，所以向心加速度专门描述速度方向变化得有多快，并不描述速率的变化。它的大小越大，说明方向转得越快。' },
      { type: 'fill', question: '已知向心力 F = m × v² / r，根据牛顿第二定律可得向心加速度 a = ___。', answer: 'v² / r', explanation: '由牛顿第二定律 F = m × a，可得 a = F / m。把 F = m × v² / r 代入，两边约去质量 m，就得到 a = v² / r。同理也可得 a = ω² × r，两个式子等价。' }
    ]
  });
})();
