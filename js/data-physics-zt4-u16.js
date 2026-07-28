/* ============================================================
 * 高三复习 · 实验专题 · 专题三 热学、光学与其他实验
 * 课时16：测量玻璃的折射率（插针法）
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u16',
    name: '测量玻璃的折射率（插针法）',
    chapter: '实验专题 · 专题三 热学、光学与其他实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、折射率是什么' },
      { type: 'paragraph', text: '光从一种物质斜着进入另一种物质时，前进方向会发生偏折，这叫折射。不同物质对光的"弯折能力"不同，玻璃比水弯得厉害，水又比空气弯得厉害。为了定量描述这种能力，我们引入折射率 n。某种介质的折射率，等于光在真空中的速度 c 除以它在该介质中的速度 v，即 n = c / v。因为光在介质里变慢，所以任何介质的折射率都大于 1。' },
      { type: 'keypoint', label: '重点·折射率定义', text: '<strong>折射率 n = c / v（c 为真空中光速，v 为该介质中光速），任何介质 n > 1。</strong>测量时我们用光路中的入射角 θ₁ 和折射角 θ₂，通过 n = sinθ₁ / sinθ₂ 来算出玻璃的折射率。' },
      { type: 'list', items: ['学会用插针法确定光在玻璃中的传播路径', '会用量角器测入射角和折射角', '用 n = sinθ₁ / sinθ₂ 算出玻璃折射率'] },
      { type: 'heading', text: '二、插针法的原理' },
      { type: 'paragraph', text: '我们让一束光从空气斜射入玻璃砖，再从另一侧射出。只要在入射光路上插两枚大头针 P₁、P₂，在出射光路上插两枚大头针 P₃、P₄，使从玻璃砖另一侧看去，四枚针在同一直线上，那么 P₁P₂ 就代表入射光线，P₃P₄ 就代表出射光线。把光路描在白纸上，就能画出法线和入射角、折射角。' },
      { type: 'list', items: ['把白纸铺在绘图板上，放好玻璃砖并描出它的轮廓', '在玻璃砖一侧插 P₁、P₂，从另一侧透过玻璃看，使 P₁、P₂ 被挡住', '插 P₃、P₄，使 P₃ 挡住 P₂、P₁，P₄ 挡住 P₃ 及前面的针', '移去玻璃砖，连接 P₁P₂ 与 P₃P₄，得到入射与出射光线'] },
      { type: 'keypoint', label: '重点·插针法定光路', text: '<strong>插针法的关键：让 P₃、P₄ 挡住 P₁、P₂ 的像，四针共线，就确定了入射光线和出射光线。</strong>再由光线与玻璃砖界面的交点作垂线（法线），即可量出入射角 θ₁ 和折射角 θ₂。' },
      { type: 'example', label: '例题·算折射率', text: '例：用插针法测得光从空气射入玻璃，入射角 θ₁ = 60°，折射角 θ₂ = 35°。求这块玻璃的折射率（sin60°≈0.866，sin35°≈0.574）。<br><strong>解析</strong>：由 n = sinθ₁ / sinθ₂ = 0.866 / 0.574 ≈ 1.51。玻璃的折射率通常在 1.5 左右，结果合理。' },
      { type: 'warn', label: '易错', text: '<strong>大头针必须插得竖直，且玻璃砖在实验过程中绝对不能移动。</strong>若玻璃砖被碰动，描出的轮廓和真实光路错位，入射点、出射点都错了，算出的折射率会明显偏离 1.5。插针时眼睛要正对，确保四针真正共线。' },
      { type: 'heading', text: '三、数据处理与记录' },
      { type: 'paragraph', text: '为了提高准确度，通常改变入射角多做几次（比如 θ₁ 取 30°、45°、60°），分别测出对应的折射角 θ₂，算出每次的 n，再取平均值。也可以把每次的 sinθ₁ 和 sinθ₂ 列成表格，观察它们的比值是否接近常数。' },
      { type: 'table', headers: ['次数', '入射角 θ₁', '折射角 θ₂', 'sinθ₁ / sinθ₂'], rows: [['1', '30°', '19°', '1.51'], ['2', '45°', '28°', '1.50'], ['3', '60°', '35°', '1.51'], ['平均', '—', '—', '约 1.51']] },
      { type: 'list', items: ['作光路图时先在界面上入射点处画垂线作"法线"', '用量角器量角要读准，角度读到 1°', '入射角别太小（否则折射角更小、误差大）', '多次测量取平均，减小偶然误差'] },
      { type: 'tip', label: '提示', text: '<strong>入射角 θ₁ 是入射光线与"法线"的夹角，不是与玻璃表面的夹角。</strong>法线要垂直于界面（入射点处）。许多同学把光线与界面的夹角当成了入射角，导致 sinθ₁ 算错、折射率偏差很大。画图时先画准法线再量角。' },
      { type: 'heading', text: '四、误差来源与改进' },
      { type: 'paragraph', text: '插针法的主要误差来自：大头针不竖直、针距太近导致视线共线判断不准、玻璃砖轮廓描得不准、量角器读数误差。为减小误差，可以让 P₁、P₂ 和 P₃、P₄ 之间距离稍大些，针要插直，描轮廓要紧贴玻璃砖边。' },
      { type: 'warn', label: '易错·针距', text: '<strong>P₁ 与 P₂、P₃ 与 P₄ 之间距离太近，判断"共线"会不准，折射角误差变大。</strong>应让同侧两针离得远一些，这样视线方向的微小偏差反映到角度上更小，测得的 θ₁、θ₂ 更可靠，算出的 n 更接近真实值。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">折射光路：空气→玻璃</text><rect x="250" y="60" width="180" height="200" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="170" font-size="13" fill="#234b45" text-anchor="middle">玻璃砖</text><line x1="40" y1="120" x2="250" y2="160" stroke="#234b45" stroke-width="2"/><line x1="250" y1="160" x2="430" y2="220" stroke="#234b45" stroke-width="2"/><line x1="430" y1="220" x2="640" y2="260" stroke="#234b45" stroke-width="2"/><line x1="250" y1="80" x2="250" y2="260" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="4 4"/><line x1="430" y1="140" x2="430" y2="300" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="4 4"/><text x="120" y="135" font-size="12" fill="#234b45">入射角 θ₁</text><text x="330" y="200" font-size="12" fill="#234b45">折射角 θ₂</text></svg>', caption: '图1　光从空气斜射入玻璃：入射角 θ₁ 大于折射角 θ₂，n = sinθ₁ / sinθ₂。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">插针法确定光路</text><rect x="220" y="70" width="240" height="190" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="170" font-size="13" fill="#234b45" text-anchor="middle">玻璃砖</text><circle cx="120" cy="100" r="6" fill="#234b45"/><circle cx="160" cy="115" r="6" fill="#234b45"/><circle cx="500" cy="230" r="6" fill="#234b45"/><circle cx="540" cy="245" r="6" fill="#234b45"/><line x1="120" y1="100" x2="340" y2="160" stroke="#234b45" stroke-width="2"/><line x1="340" y1="160" x2="500" y2="230" stroke="#234b45" stroke-width="2"/><line x1="500" y1="230" x2="640" y2="278" stroke="#234b45" stroke-width="2"/><text x="120" y="88" font-size="12" fill="#234b45">P₁</text><text x="160" y="103" font-size="12" fill="#234b45">P₂</text><text x="500" y="218" font-size="12" fill="#234b45">P₃</text><text x="540" y="233" font-size="12" fill="#234b45">P₄</text><text x="340" y="300" font-size="12" fill="#234b45" text-anchor="middle">四针共线，P₁P₂ 入射、P₃P₄ 出射</text></svg>', caption: '图2　插针法：让 P₃ 挡住 P₁P₂ 的像，四针共线即确定入射与出射光线。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">折射率 n = sinθ₁ / sinθ₂</text><rect x="60" y="70" width="260" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="190" y="115" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">测出入射角 θ₁</text><text x="190" y="145" font-size="13" fill="#234b45" text-anchor="middle">测出折射角 θ₂</text><rect x="360" y="70" width="260" height="160" rx="10" fill="#4fb3a5"/><text x="490" y="120" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">n = sinθ₁ / sinθ₂</text><text x="490" y="150" font-size="13" fill="#234b45" text-anchor="middle">玻璃 n 约 1.5</text><line x1="320" y1="150" x2="358" y2="150" stroke="#2e9e8f" stroke-width="2"/><polygon points="358,146 358,154 369,150" fill="#2e9e8f"/><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">多次测量取平均，使 n 更接近真实值</text></svg>', caption: '图3　数据处理：由 θ₁、θ₂ 用 n = sinθ₁ / sinθ₂ 计算折射率，多次取平均。' }
    ],
    exercises: [
      { type: 'choice', question: '光从空气斜射入玻璃，关于入射角 θ₁ 和折射角 θ₂ 的大小关系，正确的是？', options: ['θ₁ = θ₂', 'θ₁ < θ₂', 'θ₁ > θ₂', '二者大小不确定'], answer: 'θ₁ > θ₂', explanation: '光从空气（折射率约 1）进入玻璃（折射率约 1.5）时，会向法线偏折，因此折射角 θ₂ 小于入射角 θ₁，即 θ₁ > θ₂。折射率 n = sinθ₁ / sinθ₂ 大于 1，这与玻璃对光的弯折能力相符。' },
      { type: 'choice', question: '用插针法测玻璃折射率时，确定入射光线的做法是？', options: ['只插一枚针', '插 P₁、P₂ 两枚针，其连线代表入射光线', '看玻璃颜色', '直接画一条线'], answer: '插 P₁、P₂ 两枚针，其连线代表入射光线', explanation: '插针法在入射光路上插 P₁、P₂，从玻璃砖另一侧透过玻璃观察，使 P₁ 被 P₂ 挡住，两针的连线就代表入射光线方向。同理在出射光路插 P₃、P₄ 确定出射光线，从而画出完整光路。' },
      { type: 'choice', question: '测量玻璃折射率时，为了提高准确度，下列做法合理的是？', options: ['只测一次就结束', '入射角尽量小', '改变入射角多次测量取平均', '玻璃砖可以随时移动'], answer: '改变入射角多次测量取平均', explanation: '单次测量随机误差大，应改变入射角（如 30°、45°、60°）多次测量，分别算出 n 再取平均。入射角太小会使折射角更小、相对误差变大；玻璃砖在实验中不能移动，否则光路错位。' },
      { type: 'fill', question: '用插针法测折射率时，折射率的计算公式为 n = sinθ₁ / ___（用折射角表示）。', answer: 'sinθ₂', explanation: '根据折射定律，光从空气射入介质时折射率 n = sinθ₁ / sinθ₂，其中 θ₁ 为入射角、θ₂ 为折射角，二者都是光线与法线的夹角。多次测量取平均可得玻璃折射率，玻璃的 n 通常约为 1.5。' },
      { type: 'fill', question: '插针法中，入射角是指入射光线与界面上入射点处所作的 ___ 的夹角（填"法线"或"界面"）。', answer: '法线', explanation: '入射角定义为入射光线与法线的夹角，法线是过入射点垂直于界面的直线；折射角同理是折射光线与法线的夹角。若误把光线与界面的夹角当作入射角，算出的 sinθ₁ 会出错，折射率偏差很大。' }
    ]
  });
})();
