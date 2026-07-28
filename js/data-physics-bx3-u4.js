/* ============================================================
 * 高二物理 · 必修 第三册 · 第九章 静电场及其应用
 * 课时4：静电的防止与利用
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u4',
    name: '静电的防止与利用',
    chapter: '必修第三册 · 第九章 静电场及其应用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、静电平衡' },
      { type: 'paragraph', text: '把一块金属导体放进外电场中，导体里的自由电子在电场力作用下会重新移动，结果导体的一端聚起负电荷、另一端聚起正电荷，这叫静电感应。这些感应电荷自己也会产生一个反向的电场，当这个反向电场刚好把外电场抵消时，导体内部的总电场变为零，自由电子不再定向移动，这就达到了静电平衡状态。' },
      { type: 'keypoint', label: '重点·静电平衡的特征', text: '<strong>处于静电平衡的导体：① 内部电场强度处处为零；② 净电荷只分布在导体外表面；③ 导体表面任一点的电场方向垂直于表面。</strong>此时整个导体是一个等势体，表面是一个等势面。' },
      { type: 'paragraph', text: '因为导体内部电场为零，所以即使外面电场再强，导体内部的自由电子也不会再受到定向的电场力。这一性质非常有用：把重要东西放进金属壳里，就能让它"感觉不到"外面的电场。' },
      { type: 'list', items: ['导体放入外电场 → 自由电子重新分布（静电感应）', '感应电荷产生反向电场，最终抵消外电场', '平衡时导体内部总电场为零，自由电荷停止定向移动', '净电荷只留在导体表面，内部没有净电荷'] },
      { type: 'heading', text: '二、静电屏蔽' },
      { type: 'paragraph', text: '金属网罩或金属壳能把外电场"挡在门外"。外电场使金属壳表面感应出电荷，这些电荷在壳内产生的电场正好抵消外部电场，于是金属壳内部的电场为零。把精密仪器、电子设备套进金属网罩，外界的电场就干扰不到它，这就是静电屏蔽。' },
      { type: 'keypoint', label: '重点·静电屏蔽', text: '<strong>静电屏蔽：用金属网罩或金属壳把物体罩起来，使外部电场不影响内部（或使内部电荷不影响外部）的现象。</strong>空腔金属导体可屏蔽外电场；若把金属外壳接地，则内部带电体也不会影响外部。' },
      { type: 'example', label: '例题·静电屏蔽的应用', text: '为什么雷雨天气时，汽车里的人相对安全？<br><br><strong>解析</strong>：<br>汽车的金属车身相当于一个金属壳。闪电产生的强大外电场使车身表面感应出电荷，这些电荷在车内产生的电场抵消了外部电场，使<strong>车厢内部电场近似为零</strong>。人处在"金属壳"内部，受到静电屏蔽保护，所以相对安全。这就是"法拉第笼"效应。' },
      { type: 'warn', label: '易错', text: '<strong>① 金属网罩要真正起作用，必须是导电连通的整体，破了洞或没闭合会失效；② 空腔导体屏蔽"外部电场影响内部"不需要接地，但若想让"内部带电体不影响外部"，则必须把外壳接地。</strong>两者目的不同，别混为一谈。' },
      { type: 'tip', label: '提示', text: '<strong>静电屏蔽在生活中的例子随处可见：</strong>电梯里手机信号弱（金属厢屏蔽部分电磁波）、高压带电作业员穿金属丝编织的屏蔽服、精密电子元件用锡纸或金属壳包装。遇到"怎样保护设备不受电场干扰"，首选静电屏蔽。' },
      { type: 'list', items: ['外电场不影响空腔内部：金属壳即可，不必接地', '内部带电体不影响外部：需把金属外壳接地', '精密仪器、通信设备常用金属罩屏蔽干扰', '高压作业员的金属屏蔽服利用同一原理'] },
      { type: 'heading', text: '三、静电的利用' },
      { type: 'paragraph', text: '静电并非只有坏处。只要让物体带上电，它就会受电场力，人们就利用这一点做很多事。例如静电除尘器让烟尘颗粒带电后被极板吸走；静电复印让墨粉带电后吸附到纸上；静电喷涂让油漆雾滴带电，均匀地吸到接地工件表面，既省涂料又均匀。' },
      { type: 'keypoint', label: '重点·静电应用的原理', text: '<strong>静电应用的核心是：让微粒带电，再利用电场力把微粒吸引、移动到指定位置。</strong>常见应用有静电除尘、静电复印、静电喷涂、静电植绒等，本质都是"带电粒子在电场中受力"这一规律。' },
      { type: 'heading', text: '四、静电的危害与防止' },
      { type: 'paragraph', text: '静电也会惹麻烦：印刷时纸张因带电互相吸附、难以分开；电子元件可能被静电击穿；在加油站、化工厂房，静电火花可能引燃易燃易爆气体。防止办法主要有：把物体接地把电荷导走、增加空气湿度让电荷及时泄放、使用抗静电材料、加装避雷针和放电刷等。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">静电平衡：导体内部总电场变为零</text><line x1="60" y1="150" x2="150" y2="150" stroke="#2e9e8f" stroke-width="3"/><polygon points="150,150 128,140 128,160" fill="#2e9e8f"/><line x1="60" y1="200" x2="150" y2="200" stroke="#2e9e8f" stroke-width="3"/><polygon points="150,200 128,190 128,210" fill="#2e9e8f"/><text x="90" y="120" font-size="12" fill="#234b45" text-anchor="middle">外电场</text><rect x="250" y="90" width="180" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="120" font-size="13" fill="#234b45" text-anchor="middle">导体（金属）</text><text x="270" y="200" font-size="22" fill="#234b45" text-anchor="middle">−</text><text x="410" y="200" font-size="22" fill="#234b45" text-anchor="middle">+</text><text x="340" y="250" font-size="12" fill="#234b45" text-anchor="middle">感应电荷聚在表面</text><text x="340" y="295" font-size="12" fill="#234b45" text-anchor="middle">内部 E = 0，达到静电平衡</text></svg>', caption: '图1　导体放入外电场，表面感应出异号电荷，最终导体内部总电场为零，处于静电平衡。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">静电屏蔽：金属壳挡住外电场，保护内部</text><line x1="40" y1="160" x2="120" y2="160" stroke="#2e9e8f" stroke-width="3"/><polygon points="120,160 98,150 98,170" fill="#2e9e8f"/><line x1="40" y1="210" x2="120" y2="210" stroke="#2e9e8f" stroke-width="3"/><polygon points="120,210 98,200 98,220" fill="#2e9e8f"/><text x="70" y="135" font-size="12" fill="#234b45" text-anchor="middle">外电场</text><rect x="240" y="90" width="200" height="200" rx="14" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="190" r="22" fill="#4fb3a5"/><text x="340" y="196" font-size="13" fill="#234b45" text-anchor="middle">设备</text><text x="340" y="320" font-size="12" fill="#234b45" text-anchor="middle">金属壳内电场为零，设备受保护</text></svg>', caption: '图2　外部电场被金属壳表面感应电荷抵消，壳内设备处于零电场环境，这就是静电屏蔽。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">静电除尘：带电粉尘被极板吸引而除去</text><rect x="120" y="80" width="30" height="200" fill="#4fb3a5"/><text x="135" y="300" font-size="12" fill="#234b45" text-anchor="middle">放电极</text><rect x="530" y="80" width="30" height="200" fill="#4fb3a5"/><text x="545" y="300" font-size="12" fill="#234b45" text-anchor="middle">集尘极</text><circle cx="300" cy="140" r="8" fill="#234b45"/><circle cx="360" cy="180" r="8" fill="#234b45"/><circle cx="330" cy="230" r="8" fill="#234b45"/><polygon points="330,130 348,116 352,134" fill="#234b45"/><polygon points="390,170 408,156 412,174" fill="#234b45"/><polygon points="360,220 378,206 382,224" fill="#234b45"/><text x="340" y="320" font-size="12" fill="#234b45" text-anchor="middle">粉尘带电后被吸到集尘极上</text></svg>', caption: '图3　静电除尘设备中，烟尘颗粒带电后受电场力被吸到集尘极，从而净化空气。' },
      { type: 'table', headers: ['现象', '原理', '例子'], rows: [['静电平衡', '感应电荷抵消外电场，内部 E=0', '导体内部无电场'], ['静电屏蔽', '金属壳使内外电场互不干扰', '汽车防雷、屏蔽服'], ['静电应用', '带电微粒受电场力被收集', '静电除尘、复印、喷涂'], ['防静电', '接地、加湿泄放电荷', '避雷针、油罐车铁链']] },
      { type: 'tip', label: '提示', text: '<strong>记住一个判断口诀："导体进电场，电荷跑表面，内部场为零；金属把壳罩，内外两隔开。"</strong>看到"保护设备不受电场干扰""雷雨天车内安全""屏蔽信号"这类问题，基本都指向静电屏蔽或静电平衡。' }
    ],
    exercises: [
      { type: 'choice', question: '关于处于静电平衡的导体，下列说法正确的是？', options: ['导体内部电场强度不为零', '净电荷分布在导体内部', '导体内部电场强度处处为零', '导体表面电场方向平行于表面'], answer: '导体内部电场强度处处为零', explanation: '静电平衡时，导体内部的感应电荷产生的电场恰好抵消外部电场，使导体内部总电场强度处处为零。净电荷只分布在导体外表面，不会留在内部；导体表面电场方向垂直于表面，而不是平行。整个导体是等势体。' },
      { type: 'choice', question: '关于静电屏蔽，下列说法正确的是？', options: ['金属网罩必须接地才能屏蔽外电场', '空腔金属导体可屏蔽外部电场，不必接地', '静电屏蔽只能防止内部影响外部', '塑料壳也能起到同样的屏蔽效果'], answer: '空腔金属导体可屏蔽外部电场，不必接地', explanation: '空腔金属导体能够屏蔽外部电场对内部的影响，这一效果不需要接地就能实现。只有当需要让"内部带电体不影响外部"时，才要把金属外壳接地。静电屏蔽依赖导体的导电性，塑料等绝缘壳没有自由电子可重新分布，起不到屏蔽作用。' },
      { type: 'choice', question: '下列应用中，利用"带电微粒在电场中受力"原理的是？', options: ['避雷针', '静电除尘', '油罐车拖铁链', '增加空气湿度'], answer: '静电除尘', explanation: '静电除尘让烟尘颗粒先带上电，再在电场力作用下被吸到集尘极上，核心正是带电微粒受电场力。避雷针、油罐车铁链、增加湿度都是为了把静电导走或泄放，属于静电的"防止"，并非利用电场力搬运微粒。' },
      { type: 'fill', question: '在易燃易爆场所（如加油站），为防止静电火花引发危险，常采取的一种措施是把设备___，让电荷及时流走。', answer: '接地', explanation: '静电危害主要来自电荷积累产生火花。把设备、管道或车体接地，可以为静电荷提供泄放通道，使其及时导入大地，避免电荷积累到能打火的程度。油罐车拖铁链、加油站防静电接地都是这一思路。' },
      { type: 'fill', question: '处于静电平衡的导体，其内部电场强度为___，整个导体是一个___体（填"等势"或"非等势"）。', answer: '零|0|等势', explanation: '静电平衡时导体内部总电场强度处处为零，因此沿导体内部移动电荷电场力不做功，电势不变化，整个导体电势相等，是一个等势体，导体表面是等势面。这是静电平衡的重要推论。' }
    ]
  });
})();
