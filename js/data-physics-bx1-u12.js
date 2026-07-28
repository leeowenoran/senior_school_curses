/* ============================================================
 * 高一物理 · 必修 第一册 · 第三章 相互作用——力
 * 课时12：摩擦力
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u12',
    name: '摩擦力',
    chapter: '必修第一册 · 第三章 相互作用——力',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、摩擦力是什么' },
      { type: 'paragraph', text: '我们走路时脚底不会打滑，是因为地面给脚一个摩擦的力；推动箱子时感觉有阻力，那也是摩擦力。两个互相接触的物体，当它们发生相对运动，或者有相对运动的趋势时，在接触面上会产生一种阻碍相对运动的力，这种力就叫摩擦力。' },
      { type: 'keypoint', label: '重点·摩擦力产生条件', text: '<strong>摩擦力产生需要四个条件：两物体相互接触；接触面粗糙；彼此之间有挤压（即有弹力）；发生相对运动或具有相对运动趋势。</strong>四个条件同时满足，才有摩擦力。' },
      { type: 'list', items: ['两物体必须直接接触，且不光滑（接触面粗糙）', '接触处要有挤压，也就是存在弹力', '要有相对运动，或者有相对运动的趋势', '摩擦力的方向总是沿着接触面，阻碍相对运动或趋势'] },
      { type: 'paragraph', text: '根据物体之间是否发生相对运动，摩擦力分为静摩擦力和滑动摩擦力两大类。它们产生的原因相同，但在大小和方向上各有特点，下面分别学习。' },
      { type: 'heading', text: '二、静摩擦力' },
      { type: 'paragraph', text: '当你用不大的力推一个沉重的箱子却没推动时，箱子和地面之间没有相对滑动，但箱子有向前运动的趋势，这时接触面上产生的摩擦力叫作静摩擦力。静摩擦力的大小会随着你推力的增大而增大，始终与你施加的推力大小相等、方向相反，所以箱子保持静止。' },
      { type: 'keypoint', label: '重点·静摩擦力的特点', text: '<strong>静摩擦力的大小随外力变化，但有一个最大值，叫作最大静摩擦力。</strong>在达到最大静摩擦力之前，静摩擦力与外力平衡；一旦外力超过最大静摩擦力，物体就开始滑动。' },
      { type: 'example', label: '例题·静摩擦力的大小', text: '用 15 牛的水平力推一个静止在地面上的木箱，木箱没动。<br><br><strong>解析</strong>：<br>木箱静止，说明在水平方向上推力与静摩擦力是一对平衡力，二者大小相等、方向相反。因此木箱受到的静摩擦力大小等于 15 牛，方向水平向左，与推力相反。此时静摩擦力还没有达到最大静摩擦力。' },
      { type: 'warn', label: '易错', text: '<strong>静摩擦力的方向不一定与物体的运动方向相反，而是与"相对运动趋势"方向相反。</strong>比如人走路时，脚向后蹬地，脚相对地面有向后的运动趋势，地面对脚的静摩擦力却向前，正是这个向前的静摩擦力让人向前走。所以不能简单说"摩擦力总是阻力"。' },
      { type: 'heading', text: '三、滑动摩擦力' },
      { type: 'paragraph', text: '当一个物体在另一个物体表面滑动时，受到的摩擦力叫作滑动摩擦力。实验表明，滑动摩擦力的大小跟压力（垂直压在接触面上的力，记作 N）有关，也跟接触面的粗糙程度有关，可以用公式 f = μ × N 表示，其中 μ 是动摩擦因数，由接触面的材料与粗糙程度决定。' },
      { type: 'keypoint', label: '重点·滑动摩擦力公式', text: '滑动摩擦力的大小 <strong>f = μ × N</strong>。其中 N 是两物体间的压力，μ 是动摩擦因数。压力越大、接触面越粗糙，滑动摩擦力就越大。滑动摩擦力的方向总是与相对运动方向相反。' },
      { type: 'list', items: ['使接触面变得更光滑，可以减小摩擦', '用滚动代替滑动，比如给箱子装轮子', '加润滑油，使接触面不直接接触', '使两个接触面互相脱离，比如气垫船'] },
      { type: 'tip', label: '提示', text: '<strong>摩擦并不只是坏事。</strong>没有摩擦，我们无法走路、无法握笔、汽车也无法刹车。实际中常常一方面要增大有益摩擦（如轮胎花纹、鞋底纹路），另一方面要减小有害摩擦（如机械加润滑油）。' },
      { type: 'table', headers: ['对比项', '静摩擦力', '滑动摩擦力'], rows: [['产生条件', '有相对运动趋势但没滑动', '已经发生相对滑动'], ['大小特点', '随外力变化，有最大值', 'f = μ × N，基本恒定'], ['方向', '与相对运动趋势方向相反', '与相对运动方向相反'], ['例子', '推而不动的箱子', '滑冰时冰刀受的阻力']] },
      { type: 'heading', text: '四、摩擦力的方向怎么判断' },
      { type: 'paragraph', text: '判断摩擦力方向，关键是先弄清楚"谁相对谁"有运动或运动趋势。摩擦力总是沿着接触面，方向与相对运动（或相对运动趋势）方向相反。注意是"相对"，不是相对于地面。找一个合适的参照物（通常是施加摩擦力的那个接触面），看受力物体相对它是向哪边动的，摩擦就向反方向。' },
      { type: 'tip', label: '提示', text: '<strong>判断有无静摩擦，可假设接触面光滑。</strong>如果去掉摩擦后物体就会发生相对滑动，说明原来存在静摩擦，且方向就是阻碍这个"将要发生的滑动"的方向。这个方法在受力分析时很好用。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">摩擦力产生的四个条件</text><rect x="30" y="60" width="145" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="102" y="86" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">接触</text><text x="102" y="140" font-size="12" fill="#234b45" text-anchor="middle">两物体必须</text><text x="102" y="160" font-size="12" fill="#234b45" text-anchor="middle">直接接触</text><rect x="185" y="60" width="145" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="257" y="86" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">粗糙</text><text x="257" y="140" font-size="12" fill="#234b45" text-anchor="middle">接触面不能</text><text x="257" y="160" font-size="12" fill="#234b45" text-anchor="middle">绝对光滑</text><rect x="340" y="60" width="145" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="412" y="86" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">挤压</text><text x="412" y="140" font-size="12" fill="#234b45" text-anchor="middle">有压力</text><text x="412" y="160" font-size="12" fill="#234b45" text-anchor="middle">即存在弹力</text><rect x="495" y="60" width="155" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="572" y="86" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">相对运动</text><text x="572" y="140" font-size="12" fill="#234b45" text-anchor="middle">有运动或</text><text x="572" y="160" font-size="12" fill="#234b45" text-anchor="middle">运动趋势</text></svg>', caption: '图1　四个条件同时满足，接触面上才会产生摩擦力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">静摩擦力随外力增大而增大（有最大值）</text><rect x="40" y="60" width="600" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="80" y1="230" x2="600" y2="230" stroke="#234b45" stroke-width="2"/><line x1="80" y1="230" x2="80" y2="90" stroke="#234b45" stroke-width="2"/><polyline points="80,210 200,180 320,150 440,120 540,118" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="320" y="100" font-size="12" fill="#234b45" text-anchor="middle">达到最大静摩擦后开始滑动</text><text x="80" y="252" font-size="12" fill="#234b45" text-anchor="middle">外力</text><text x="540" y="252" font-size="12" fill="#234b45" text-anchor="middle">静摩擦力</text></svg>', caption: '图2　在最大静摩擦之前，静摩擦力随外力一起增大，二者始终大小相等。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">滑动摩擦力 f = μ × N</text><rect x="60" y="90" width="260" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="190" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">物体向右滑动</text><line x1="120" y1="150" x2="260" y2="150" stroke="#4fb3a5" stroke-width="3"/><text x="190" y="185" font-size="12" fill="#234b45" text-anchor="middle">f 向左，阻碍相对运动</text><rect x="360" y="90" width="260" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="490" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">公式关系</text><text x="490" y="160" font-size="13" fill="#234b45" text-anchor="middle">f = μ × N</text><text x="490" y="188" font-size="12" fill="#234b45" text-anchor="middle">N 越大，f 越大</text></svg>', caption: '图3　滑动摩擦力方向与相对运动方向相反，大小由压力 N 和动摩擦因数 μ 决定。' }
    ],
    exercises: [
      { type: 'choice', question: '关于摩擦力的产生条件，下列说法正确的是？', options: ['两个物体不接触也能产生摩擦力', '接触面光滑也能产生摩擦力', '摩擦力产生需要接触、挤压且接触面粗糙', '只有运动的物体才受摩擦力'], answer: '摩擦力产生需要接触、挤压且接触面粗糙', explanation: '摩擦力产生的四个条件必须同时满足：两物体相互接触、接触面粗糙、彼此有挤压（存在弹力）、有相对运动或相对运动趋势。不接触、接触面光滑、没有挤压都不会产生摩擦力；静止的物体若有相对运动趋势，同样可以受到静摩擦力。' },
      { type: 'choice', question: '关于静摩擦力，下列说法正确的是？', options: ['静止的物体一定不受摩擦力', '静摩擦力的大小始终等于最大静摩擦力', '静摩擦力随外力增大而增大，但有最大值', '静摩擦力方向一定与运动方向相反'], answer: '静摩擦力随外力增大而增大，但有最大值', explanation: '在达到最大静摩擦力之前，静摩擦力随外力增大而增大，并与外力平衡；超过最大静摩擦力物体才开始滑动。静止的物体也可能受静摩擦（如推而不动的箱子）；静摩擦方向与相对运动趋势方向相反，对人走路而言它反而是向前的动力。' },
      { type: 'choice', question: '一个物体在水平桌面上滑动，滑动摩擦力 f = μ × N。若增大物体对桌面的压力 N，则滑动摩擦力将？', options: ['不变', '增大', '减小', '变为零'], answer: '增大', explanation: '根据滑动摩擦力公式 f = μ × N，在动摩擦因数 μ 不变的情况下，压力 N 越大，滑动摩擦力 f 也越大。所以增大物体对桌面的压力，会使滑动摩擦力增大。' },
      { type: 'fill', question: '两个互相接触的物体，当它们发生相对运动或有相对运动趋势时，在接触面上会产生阻碍___的力，这种力叫作摩擦力。', answer: '相对运动', explanation: '摩擦力产生的条件是：两物体相互接触且接触面粗糙，彼此之间有挤压（存在弹力），并且发生相对运动或具有相对运动趋势。摩擦力的方向总是沿着接触面，阻碍物体间的相对运动或相对运动趋势，而不是简单地阻碍物体的运动。' },
      { type: 'fill', question: '用 10 牛的水平力推一个静止在地面上的箱子但没推动，此时箱子受到的静摩擦力大小是___牛。', answer: '10', explanation: '箱子没有被推动，处于静止状态，在水平方向上推力与静摩擦力是一对平衡力，二者大小相等、方向相反。推力为 10 牛，所以静摩擦力也为 10 牛。静摩擦力会随推力增大而增大，直到达到最大静摩擦力后物体才开始滑动。' }
    ]
  });
})();
