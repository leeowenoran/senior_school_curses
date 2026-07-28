/* ============================================================
 * 高三复习 · 实验专题 · 专题一 力学实验
 * 课时8：探究向心力大小与半径、角速度、质量的关系
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u8',
    name: '探究向心力大小与半径、角速度、质量的关系',
    chapter: '实验专题 · 专题一 力学实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是向心力' },
      { type: 'paragraph', text: '物体做圆周运动时，需要一个始终指向圆心的力来维持转弯，这个力叫向心力。比如用绳子拴着小球转圈，绳子的拉力就是向心力；汽车转弯时地面给的摩擦力也是向心力。这一课用向心力演示器，研究它和半径 r、角速度 ω、质量 m 的关系。' },
      { type: 'list', items: ['向心力演示器（带两个可变速转动的相同小球槽）', '控制转速的电机或手柄、标尺（读半径）', '已知质量的小球、转速显示（或周期计时）'] },
      { type: 'heading', text: '二、控制变量法再出场' },
      { type: 'paragraph', text: '向心力 F 同时和 m、r、ω 三个量有关，还是用控制变量法：保持两个不变，只让一个量变。比如固定 m 和 r，看 F 怎么随 ω 变；再固定 m 和 ω，看 F 怎么随 r 变；最后固定 r 和 ω，看 F 怎么随 m 变。' },
      { type: 'keypoint', label: '重点·控制变量', text: '<strong>三个影响因素 m、r、ω 一起变会乱，必须控制变量逐个研究。</strong>每次只改变一个量，观察向心力如何变化，最后归纳出 F 与三者的关系。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">小球做圆周运动，绳子拉力即向心力</text><circle cx="340" cy="170" r="6" fill="#234b45"/><circle cx="470" cy="170" r="14" fill="#4fb3a5"/><line x1="340" y1="170" x2="470" y2="170" stroke="#2e9e8f" stroke-width="3"/><text x="405" y="160" font-size="13" fill="#234b45">半径 r</text><path d="M 470 156 A 14 14 0 0 1 484 170" fill="none" stroke="#234b45" stroke-width="2"/><text x="500" y="150" font-size="13" fill="#234b45">ω</text><line x1="470" y1="184" x2="470" y2="210" stroke="#234b45" stroke-width="2"/><polygon points="466,210 474,210 470,220" fill="#234b45"/><text x="500" y="210" font-size="13" fill="#234b45">向心力 F</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">向心力总指向圆心，大小与 m、r、ω 有关</text></svg>', caption: '图1　小球绕圆心做圆周运动，绳子拉力提供指向圆心的向心力 F。' },
      { type: 'heading', text: '三、保持 m、r 不变，看 F 与 ω 的关系' },
      { type: 'paragraph', text: '把两个质量相同、半径相同的小球放在演示器里，让它们以不同角速度转动。观察指向力的大小，会发现角速度越大，向心力越大，而且 F 与 ω 的平方成正比，即 F ∝ ω²。' },
      { type: 'list', items: ['固定两球质量 m 和转动半径 r', '改变转速，使角速度成 1、2、3 倍', '读对应向心力（演示器有标尺或测力显示）', '发现 F 随 ω² 增大，即 F ∝ ω²'] },
      { type: 'example', label: '例题·F 与 ω² 成正比', text: '例：半径、质量不变，角速度由 ω 变为 2 ω，向心力如何变？<br><strong>解析</strong>：因为 F ∝ ω²，角速度变成 2 倍，向心力变成 2² = 4 倍，即 F 变为原来的 4 倍。可见角速度对向心力影响很剧烈。' },
      { type: 'warn', label: '易错', text: '<strong>向心力与角速度是平方关系，不是正比。</strong>很多同学误以为 ω 变 2 倍 F 也变 2 倍，实际变 4 倍。若用转速 n（转/秒）表达，因 ω = 2π n，F 同样与 n² 成正比。' },
      { type: 'heading', text: '四、保持 m、ω 不变，看 F 与 r 的关系' },
      { type: 'paragraph', text: '固定质量和角速度，改变小球到圆心的距离 r（转动半径）。会发现半径越大，需要的向心力越大，且 F 与 r 成正比，即 F ∝ r。半径拉长，转弯更"费劲"。' },
      { type: 'table', headers: ['转动半径 r', '角速度 ω', '质量 m', '向心力 F 变化趋势'], rows: [['增大', '不变', '不变', 'F 成正比增大'], ['不变', '增大', '不变', 'F 随 ω² 增大'], ['不变', '不变', '增大', 'F 成正比增大']] },
      { type: 'keypoint', label: '重点·F 与 r、m 成正比', text: '<strong>在 m、ω 固定时 F ∝ r；在 r、ω 固定时 F ∝ m。</strong>即半径越大、质量越大，所需向心力越大，二者都是一次方正比关系。' },
      { type: 'heading', text: '五、综合公式与单位' },
      { type: 'paragraph', text: '把三条结论合起来，向心力公式为 F = m r ω²。也可以用线速度 v 表示：因 v = r ω，代入得 F = m v² / r。注意 ω 单位是 rad/s（弧度每秒），r 单位 m，m 单位 kg，F 单位 N。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">F = m r ω²：三个因素共同决定</text><rect x="90" y="90" width="150" height="120" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="165" y="130" font-size="13" fill="#234b45" text-anchor="middle">质量 m ↑</text><text x="165" y="158" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">F ↑（正比）</text><rect x="265" y="90" width="150" height="120" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="130" font-size="13" fill="#234b45" text-anchor="middle">半径 r ↑</text><text x="340" y="158" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">F ↑（正比）</text><rect x="440" y="90" width="150" height="120" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="515" y="130" font-size="13" fill="#234b45" text-anchor="middle">ω ↑</text><text x="515" y="158" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">F ↑（平方）</text><text x="340" y="250" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">F = m × r × ω²</text></svg>', caption: '图2　向心力 F 与质量 m、半径 r 成正比，与角速度 ω 的平方成正比。' },
      { type: 'tip', label: '提示', text: '<strong>向心力不是一种新的力，而是"效果力"。</strong>它可由拉力、摩擦力、重力或它们的合力来提供。分析圆周运动时，先找是哪个（些）力在指向圆心方向提供 F，再列 F = m r ω²。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">匀速圆周运动：合力即向心力</text><rect x="110" y="110" width="220" height="90" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="220" y="145" font-size="13" fill="#234b45" text-anchor="middle">谁提供向心力？</text><text x="220" y="172" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">拉力/摩擦力/重力</text><rect x="370" y="110" width="220" height="90" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="480" y="145" font-size="13" fill="#234b45" text-anchor="middle">关系</text><text x="480" y="172" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">F = m r ω²</text><text x="340" y="230" font-size="12" fill="#234b45" text-anchor="middle">向心力由现有力的合力提供，不是额外的新力</text></svg>', caption: '图3　向心力是效果力，由拉力、摩擦力或重力等合力提供。' },
      { type: 'paragraph', text: '小结：通过控制变量法得到 F ∝ m、F ∝ r、F ∝ ω²，综合为 F = m r ω² = m v² / r。向心力指向圆心，是维持圆周运动的效果力，并非独立于重力、弹力、摩擦力之外的新力。' },
      { type: 'warn', label: '易错', text: '<strong>不要凭空给物体加一个"向心力"。</strong>受力分析时只画真实的力（重力、支持力、拉力、摩擦力等），其中指向圆心方向的合力才是向心力。常说"物体需要向心力"是指需要有一个指向圆心的合力来提供，并非多出一个力。' }
    ],
    exercises: [
      { type: 'choice', question: '探究向心力与 m、r、ω 的关系时，应采用的方法是？', options: ['等效替代法', '控制变量法', '放大法', '图像法'], answer: '控制变量法', explanation: '向心力同时受质量 m、半径 r、角速度 ω 三个因素影响，实验固定其中两个、只改变一个来观察，这正是控制变量法，与前面研究 a 与 F、m 的思路一致。' },
      { type: 'choice', question: '保持质量和半径不变，角速度变为原来的 2 倍，向心力变为？', options: ['2 倍', '4 倍', '不变', '1/2 倍'], answer: '4 倍', explanation: '向心力 F = m r ω²，在 m、r 不变时 F 与 ω² 成正比。ω 变 2 倍，F 变 2² = 4 倍。注意是平方关系，不是 2 倍。' },
      { type: 'choice', question: '关于向心力，正确的说法是？', options: ['向心力是一种新的、独立的力', '向心力是效果力，由拉力、摩擦力、重力等提供', '向心力总背离圆心', '只有匀速圆周运动才需要向心力'], answer: '向心力是效果力，由拉力、摩擦力、重力等提供', explanation: '向心力不是独立于重力、弹力、摩擦力之外的新力，而是按效果命名：指向圆心的合力就是向心力，可由拉力、摩擦力、重力或它们的合力提供。它总指向圆心。' },
      { type: 'fill', question: '向心力的综合表达式（用 m、r、ω 表示）为 F = ___；若用线速度 v 表示则为 F = ___。', answer: 'm r ω²', explanation: '由控制变量结论 F ∝ m、F ∝ r、F ∝ ω² 综合得 F = m r ω²。又因 v = r ω，代入得 F = m v² / r。两式等价，按已知条件选用。' },
      { type: 'fill', question: '在质量 m 和角速度 ω 不变时，向心力 F 与转动半径 r 成___比；在 m 和 r 不变时，F 与 ω 成___关系。', answer: '正', explanation: '控制变量下：m、ω 不变时 F ∝ r（正比）；m、r 不变时 F ∝ ω²（与角速度平方成正比）。半径或质量越大 F 越大，角速度影响更剧烈（平方）。' }
    ]
  });
})();
