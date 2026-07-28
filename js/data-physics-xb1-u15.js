/* ============================================================
 * 高二物理 · 选择性必修第一册 · 第三章 机械波
 * 课时15：波的反射、折射和衍射
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u15',
    name: '波的反射、折射和衍射',
    chapter: '选择性必修第一册 · 第三章 机械波',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、波的反射：碰到障碍原路折回' },
      { type: 'paragraph', text: '水波碰到池壁会反弹回来，声音碰到山崖会折回来形成回声，这都是波的反射。反射就是波在遇到障碍物或两种介质的分界面时，一部分能量按一定规律返回原来介质的现象。' },
      { type: 'keypoint', label: '重点·波的反射', text: '<strong>当波碰到障碍物或界面时，会按"反射角等于入射角"的规律返回原介质，这种现象叫波的反射。</strong>回声、水面波撞墙反弹、超声波探鱼，背后都是反射。反射时波的频率、波速、波长都不变，因为它还在原来的介质里。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">波的反射：碰到界面后按原介质折回</text><line x1="40" y1="220" x2="640" y2="220" stroke="#2e9e8f" stroke-width="2"/><text x="610" y="240" font-size="12" fill="#234b45" text-anchor="middle">界面</text><line x1="90" y1="70" x2="200" y2="215" stroke="#234b45" stroke-width="3"/><polygon points="200,215 184,213 192,199" fill="#234b45"/><line x1="200" y1="215" x2="330" y2="80" stroke="#4fb3a5" stroke-width="3"/><polygon points="330,80 320,94 334,92" fill="#4fb3a5"/><text x="120" y="60" font-size="13" fill="#234b45" text-anchor="middle">入射波</text><text x="300" y="60" font-size="13" fill="#4fb3a5" text-anchor="middle">反射波</text><text x="200" y="240" font-size="12" fill="#234b45" text-anchor="middle">反射点</text><text x="340" y="278" font-size="12" fill="#234b45" text-anchor="middle">反射角等于入射角，波碰到障碍后返回原介质</text></svg>', caption: '图1　波射到界面上，按"反射角等于入射角"的规律反射回原来的介质。' },
      { type: 'heading', text: '二、波的折射：穿过去后"拐了弯"' },
      { type: 'paragraph', text: '如果波不是被挡回来，而是穿过界面进入另一种介质，它的传播方向常常会发生偏折，这就是波的折射。比如声音从空气斜着钻进水里，前进方向就会拐弯。' },
      { type: 'keypoint', label: '重点·波的折射', text: '<strong>波从一种介质斜着进入另一种介质时，传播方向发生偏折的现象叫波的折射。</strong>折射发生的根本原因是：同一种波在不同介质里波速不同。波速一变，波前进的"朝向"就跟着歪了，于是出现了折射。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><rect x="0" y="180" width="680" height="120" fill="#d6ece8"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">波的折射：穿过界面进入另一介质，方向偏折</text><line x1="40" y1="180" x2="640" y2="180" stroke="#2e9e8f" stroke-width="2"/><text x="610" y="172" font-size="12" fill="#234b45" text-anchor="middle">界面</text><text x="120" y="160" font-size="12" fill="#234b45" text-anchor="middle">介质1</text><text x="120" y="270" font-size="12" fill="#234b45" text-anchor="middle">介质2</text><line x1="120" y1="60" x2="300" y2="180" stroke="#234b45" stroke-width="3"/><polygon points="300,180 286,178 292,164" fill="#234b45"/><line x1="300" y1="180" x2="470" y2="280" stroke="#4fb3a5" stroke-width="3"/><polygon points="470,280 458,272 460,286" fill="#4fb3a5"/><text x="150" y="50" font-size="13" fill="#234b45" text-anchor="middle">入射波</text><text x="430" y="250" font-size="13" fill="#4fb3a5" text-anchor="middle">折射波</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">因两介质中波速不同，穿过界面后方向发生偏折</text></svg>', caption: '图2　波斜着穿过界面进入另一介质，因波速变化而"拐弯"，这就是折射。' },
      { type: 'warn', label: '易错·折射时什么变什么不变', text: '波折射进入新介质时，<strong>频率不变（波源没换），但波速和波长都变</strong>。很多同学记成"折射后波长不变"，是错的。因为 v = λ × f，频率 f 不变而波速 v 变了，波长 λ 必然跟着变。' },
      { type: 'heading', text: '三、波的衍射：波能"绕弯"的本领' },
      { type: 'paragraph', text: '你站在墙后面，虽然看不见墙那边说话的人，却仍能听到他的声音——这是因为声波"绕"过了墙角传过来。这种波能绕过障碍物边缘、继续向前传播的现象，就叫波的衍射，也可以理解为波会"拐弯"。' },
      { type: 'keypoint', label: '重点·什么是衍射', text: '<strong>波在传播中遇到障碍物或小孔时，能绕过障碍物边缘继续传播，这种现象叫波的衍射。</strong>衍射是波特有的性质，所有波（水波、声波、光波）都会衍射，只是明显不明显的问题。' },
      { type: 'example', label: '例题·为什么能听到"墙后"的声音', text: '人站在高大墙壁后面，看不见墙另一侧的人，却能听到对方说话的声音。请解释原因。<br><br><strong>解析</strong>：<br>声波在传播时遇到墙壁这个障碍物，并没有被完全挡住，而是能绕过墙壁的边缘继续向前传，这就是波的衍射。声音"绕"过墙角传到了人耳，所以虽然看不见对方，却仍听得到他说话。光波波长短、衍射不明显，所以人才看不见墙后的人。' },
      { type: 'heading', text: '四、衍射明显的条件' },
      { type: 'keypoint', label: '重点·衍射明显的条件', text: '<strong>当障碍物或缝的尺寸与波长差不多，甚至比波长还小时，衍射现象最明显。</strong>反过来，若障碍物或缝比波长大得多，波就基本沿直线走、绕不过去，衍射就不明显。一句话：障碍物/缝越接近波长，波越能"绕弯"。' },
      { type: 'list', items: ['障碍物或缝的尺寸 ≈ 波长：衍射非常明显，波大范围绕弯', '障碍物或缝的尺寸 远大于 波长：波近似沿直线传播，衍射不明显', '波长越长（如低频声波），越容易满足"尺寸≈波长"，所以更容易绕弯'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="380" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">衍射明显程度：缝宽越接近波长，越容易绕弯</text><text x="175" y="68" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">缝很宽（远大于波长）</text><rect x="300" y="50" width="14" height="70" fill="#2e9e8f"/><rect x="300" y="130" width="14" height="70" fill="#2e9e8f"/><g stroke="#4fb3a5" stroke-width="2"><line x1="80" y1="100" x2="300" y2="100"/><line x1="80" y1="120" x2="300" y2="120"/><line x1="80" y1="140" x2="300" y2="140"/></g><g stroke="#234b45" stroke-width="2"><line x1="314" y1="100" x2="630" y2="100"/><line x1="314" y1="120" x2="630" y2="120"/><line x1="314" y1="140" x2="630" y2="140"/></g><text x="500" y="172" font-size="12" fill="#234b45" text-anchor="middle">几乎沿直线通过，衍射不明显</text><text x="175" y="240" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">缝很窄（接近波长）</text><rect x="300" y="220" width="14" height="50" fill="#2e9e8f"/><rect x="300" y="280" width="14" height="50" fill="#2e9e8f"/><g stroke="#4fb3a5" stroke-width="2"><line x1="80" y1="250" x2="300" y2="250"/><line x1="80" y1="262" x2="300" y2="262"/><line x1="80" y1="274" x2="300" y2="274"/></g><g stroke="#234b45" stroke-width="2" fill="none"><path d="M 314 262 A 55 55 0 0 1 369 207"/><path d="M 314 262 A 55 55 0 0 1 369 317"/><path d="M 314 262 A 110 110 0 0 1 424 152"/><path d="M 314 262 A 110 110 0 0 1 424 372"/></g><text x="500" y="362" font-size="12" fill="#234b45" text-anchor="middle">波绕过缝隙向两侧散开，衍射明显</text></svg>', caption: '图3　上：缝很宽时波基本直走；下：缝窄到接近波长时，波明显向两侧绕弯（衍射）。' },
      { type: 'warn', label: '易错·衍射不是"没有障碍"', text: '衍射<strong>并不是波能穿透障碍物，而是波能"绕"过障碍物的边缘</strong>。即使有墙挡着，波也会从边缘"拐"过去一点。另外，衍射一直存在，只是"明显不明显"的差别；只要障碍物的尺寸和波长差不多，绕弯就特别显著。' },
      { type: 'table', headers: ['现象', '发生条件', '波是否换介质', '典型例子'], rows: [['反射', '碰到障碍物或界面返回', '不换（回原介质）', '回声、水波撞岸反弹'], ['折射', '斜着穿过不同介质的界面', '换介质', '声音斜入射水面拐弯'], ['衍射', '遇到障碍物或小孔', '可换可不换', '隔墙听声、水波绕石']] },
      { type: 'tip', label: '提示·三者常一起出现', text: '<strong>真实场景里三者常常同时发生。</strong>比如声音碰到山崖：一部分被反射成回声，一部分穿过空气和岩石界面发生折射，还有一部分绕过山崖边缘发生衍射。学会分辨"返回、穿过去拐弯、绕过去"这三种不同表现，就不容易混。' },
      { type: 'list', items: ['反射：波返回原介质，频率波速波长都不变', '折射：波进入新介质后方向偏折，频率不变但波速波长变', '衍射：波绕过障碍物的边缘继续传播，条件是障碍/缝尺寸接近波长'] }
    ],
    exercises: [
      { type: 'choice', question: '关于波的反射，下列说法正确的是？', options: ['反射后波进入另一种介质', '反射发生在波穿过界面进入新介质时', '反射时波返回原介质，且反射角等于入射角', '反射时波的频率会发生改变'], answer: '反射时波返回原介质，且反射角等于入射角', explanation: '波的反射是波在遇到障碍物或界面时按"反射角等于入射角"的规律返回原来介质的现象。反射过程中波仍在原介质中，因此频率、波速、波长都保持不变。穿过界面进入新介质并发生方向偏折的是折射，不是反射。' },
      { type: 'choice', question: '关于波的折射，下列说法正确的是？', options: ['折射时频率改变', '折射的根本原因是不同介质中波速不同', '折射时波返回原介质', '折射时波长不变'], answer: '折射的根本原因是不同介质中波速不同', explanation: '波从一种介质斜着进入另一种介质发生折射，根本原因是同一种波在不同介质中的波速不同，导致传播方向偏折。折射时波源没变，所以频率不变；由 v = λ × f 可知，频率不变而波速改变，波长必然跟着改变，因此"波长不变"是错的。' },
      { type: 'choice', question: '关于波的衍射，下列说法正确的是？', options: ['只有声波会衍射', '障碍物尺寸远大于波长时衍射最明显', '障碍物或缝的尺寸与波长差不多时衍射最明显', '波不能绕过障碍物'], answer: '障碍物或缝的尺寸与波长差不多时衍射最明显', explanation: '衍射是波特有的现象，所有波都会衍射。当障碍物或缝的尺寸与波长相差不多、甚至比波长还小时，波能明显绕过边缘继续传播，衍射最显著；若障碍物远大于波长，波近似沿直线走，衍射就不明显。所以"尺寸接近波长时最明显"正确。' },
      { type: 'fill', question: '声音碰到山崖反射回来形成回声，这说明波遇到障碍物时会发生___现象。', answer: '反射', explanation: '波在遇到障碍物或两种介质的分界面时，会按反射角等于入射角的规律返回原介质，这就是波的反射。声音碰到山崖被挡回形成回声，正是声波发生反射的结果，反射过程中频率、波速、波长都不变。' },
      { type: 'fill', question: '隔墙能听到墙另一侧人说话的声音，是因为声波能绕过墙的边缘继续传播，这种现象叫作波的___。', answer: '衍射', explanation: '波在传播中遇到障碍物时，能绕过障碍物边缘继续向前传播，这种现象叫波的衍射。声波波长较长，容易满足"障碍物尺寸与波长接近"的条件，所以能明显绕墙传到另一侧；而光波波长短、衍射不明显，因此人看不见墙后的人。' }
    ]
  });
})();
