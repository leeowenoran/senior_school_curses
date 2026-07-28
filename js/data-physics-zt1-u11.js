/* ============================================================
 * 高三复习 · 力学综合 · 专题三 牛顿运动定律
 * 课时11：牛顿第三定律
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u11',
    name: '牛顿第三定律',
    chapter: '力学综合 · 专题三 牛顿运动定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、力总是成对出现' },
      { type: 'paragraph', text: '你用手拍桌子，手觉得疼，桌子也受到了拍击——其实桌子和手之间互相施加了力。一个物体对另一个物体施力时，也一定受到对方的反作用力。力从来不会单独存在，总是成双成对。' },
      { type: 'keypoint', label: '重点·牛顿第三定律', text: '<strong>作用力与反作用力：两个物体之间的作用力和反作用力，总是大小相等、方向相反、作用在同一条直线上。</strong>' },
      { type: 'list', items: ['等大：两个数相等，F = F′', '反向：两个力方向相反', '共线：作用在同一直线上', '异物：分别作用在这两个不同物体上', '同性：性质相同，都是弹力或都是摩擦力', '同时：同时产生、同时消失'] },
      { type: 'heading', text: '二、四大特点细说' },
      { type: 'paragraph', text: '① 作用在不同物体：手对桌的力作用在桌上，桌对手的力作用在手上，所以它们不会相互抵消，因为根本不在同一物体上。② 性质相同：若手对桌是弹力，桌对手也是弹力；若是摩擦力对摩擦力。③ 同时生灭：一方消失，另一方也立刻消失。④ 与参考系、物体运动状态无关，任何情况下都成立。' },
      { type: 'keypoint', label: '重点·关键区别', text: '<strong>作用力与反作用力最重要的区别——它们作用在不同物体上，因此永远不能求“合力”、不能互相平衡。</strong>' },
      { type: 'example', label: '例题·人推墙', text: '人用 100 N 的力推墙，墙对人的反作用力也是 100 N。人向后退，是因为墙对人的力作用在“人”身上，使人加速后退；墙没怎么动，是因为墙还受到地面很大的支持力和摩擦力。<br><br><strong>解析</strong>：两力等大反向，但作用在人和墙两个不同物体上，所以互不影响、不能抵消。' },
      { type: 'warn', label: '易错', text: '不要把作用力反作用力与平衡力搞混。平衡力作用在同一物体上、可以性质不同、一个消失另一个还可存在（如支持力和重力）。而作用力反作用力一定异物、同性、同时生灭，绝不能当作一对平衡力。' },
      { type: 'table', headers: ['比较', '作用力与反作用力', '一对平衡力'], rows: [['作用对象', '两个不同物体', '同一物体'], ['性质', '一定相同', '可以不同'], ['生灭', '同时产生同时消失', '不一定同时'], ['能否抵消', '不能（作用在不同物体）', '能（同体合力为零）']] },
      { type: 'heading', text: '三、生活与解题中的反作用力' },
      { type: 'paragraph', text: '火箭升空、划船、走路，都靠反作用力。人向后蹬地，地对人向前推，人就前进；游泳时手向后推水，水向前推人；火箭向下喷燃气，燃气给火箭向上的推力。' },
      { type: 'keypoint', label: '重点·大小与质量无关', text: '<strong>作用力与反作用力大小总是相等，与两个物体的质量、运动状态都无关。</strong>哪怕一边是大象、一边是蚂蚁，它们之间的相互作用力也始终等大。' },
      { type: 'tip', label: '提示', text: '分析“谁受力运动”时，要看反作用力作用在哪一个物体上。研究人走路，应分析地面对人的摩擦力（向前），而不是人对地的力（作用在地面，对人没有直接效果）。' },
      { type: 'list', items: ['作用力反作用力：等大、反向、共线、异物、同性、同时', '平衡力：等大、反向、共线、同体、性质可不同', '判断关键：看两个力作用在同一物体还是两个物体'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">手拍桌子：两力等大反向，作用在不同物体</text><circle cx="160" cy="160" r="30" fill="#4fb3a5"/><text x="160" y="164" font-size="13" fill="#234b45" text-anchor="middle">手</text><rect x="360" y="130" width="220" height="90" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="470" y="178" font-size="14" fill="#234b45" text-anchor="middle">桌子</text><line x1="190" y1="160" x2="360" y2="160" stroke="#234b45" stroke-width="3"/><polygon points="360,160 348,154 348,166" fill="#234b45"/><text x="275" y="148" font-size="12" fill="#234b45" text-anchor="middle">手对桌</text><line x1="360" y1="200" x2="190" y2="200" stroke="#4fb3a5" stroke-width="3"/><polygon points="190,200 202,194 202,206" fill="#4fb3a5"/><text x="275" y="220" font-size="12" fill="#234b45" text-anchor="middle">桌对手</text></svg>', caption: '图1　手对桌的力和桌对手的力等大反向，但分别作用在桌和手两个不同物体上。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">人推墙：反作用力使人后退</text><circle cx="170" cy="160" r="28" fill="#4fb3a5"/><text x="170" y="164" font-size="13" fill="#234b45" text-anchor="middle">人</text><rect x="380" y="110" width="160" height="140" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="460" y="186" font-size="14" fill="#234b45" text-anchor="middle">墙</text><line x1="198" y1="160" x2="380" y2="160" stroke="#234b45" stroke-width="3"/><polygon points="380,160 368,154 368,166" fill="#234b45"/><text x="289" y="148" font-size="12" fill="#234b45" text-anchor="middle">人对墙</text><line x1="380" y1="200" x2="198" y2="200" stroke="#4fb3a5" stroke-width="3"/><polygon points="198,200 210,194 210,206" fill="#4fb3a5"/><text x="289" y="220" font-size="12" fill="#234b45" text-anchor="middle">墙对人(后退)</text></svg>', caption: '图2　墙对人的反作用力作用在人身上，方向向左，使人向后退。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">火箭反冲：向下喷气，向上受推力</text><rect x="290" y="120" width="100" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="186" font-size="13" fill="#234b45" text-anchor="middle">火箭</text><line x1="340" y1="120" x2="340" y2="60" stroke="#4fb3a5" stroke-width="4"/><polygon points="340,60 333,74 347,74" fill="#4fb3a5"/><text x="340" y="50" font-size="12" fill="#234b45" text-anchor="middle">推力向上</text><line x1="320" y1="240" x2="320" y2="290" stroke="#234b45" stroke-width="3"/><polygon points="320,290 313,278 327,278" fill="#234b45"/><line x1="360" y1="240" x2="360" y2="290" stroke="#234b45" stroke-width="3"/><polygon points="360,290 353,278 367,278" fill="#234b45"/><text x="340" y="278" font-size="12" fill="#234b45" text-anchor="middle">喷气向下</text></svg>', caption: '图3　火箭向下喷出燃气，燃气给火箭向上的反作用力，这正是反冲现象。' }
    ],
    exercises: [
      { type: 'choice', question: '关于作用力与反作用力，下列说法正确的是？', options: ['大小相等方向相同', '大小相等反向共线', '大小不等反向', '作用在同一物体'], answer: '大小相等反向共线', explanation: '牛顿第三定律指出，两个物体间的作用力和反作用力总是大小相等、方向相反、作用在同一条直线上。它们作用在不同物体上，方向是相反的而不是相同，大小始终相等而非不等。' },
      { type: 'choice', question: '作用力与反作用力跟一对平衡力最关键的区别是？', options: ['作用在同一物体', '作用在不同物体', '性质一定不同', '可以相互抵消'], answer: '作用在不同物体', explanation: '作用力与反作用力分别作用在两个不同物体上，因此不能求合力、不能抵消；而一对平衡力作用在同一物体上，合力为零可以抵消。这是二者最本质、最关键的区别，也是解题时判断的根本依据。' },
      { type: 'choice', question: '人用 50 N 的力推墙，墙对人的反作用力大小是？', options: ['0 N', '25 N', '50 N', '100 N'], answer: '50 N', explanation: '根据牛顿第三定律，作用力与反作用力大小相等。人推墙的力是 50 N，墙对人的反作用力也一定是 50 N，与墙是否运动、质量多大都无关。' },
      { type: 'fill', question: '作用力与反作用力总是大小相等、方向相反，并且作用在___上（填“同一物体”或“两个不同物体”）。', answer: '两个不同物体', explanation: '牛顿第三定律中的作用力与反作用力分别作用在相互施力的两个物体上，这是它们与平衡力最本质的区别，也正因如此它们不能求合力、不能相互抵消。' },
      { type: 'fill', question: '作用力与反作用力___（填“能”或“不能”）相互抵消。', answer: '不能', explanation: '因为作用力与反作用力作用在两个不同物体上，每个力各自改变自己所作用物体的运动状态，不存在“合力为零”的说法，所以永远不能相互抵消。能抵消的只有作用在同一物体上的一对平衡力。' }
    ]
  });
})();
