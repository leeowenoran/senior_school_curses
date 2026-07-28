/* ============================================================
 * 高一物理 · 必修 第三册 · 第十章 静电场中的能量
 * 课时6：电势能和电势
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u6',
    name: '电势能和电势',
    chapter: '必修第三册 · 第十章 静电场中的能量',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、静电力做功与路径无关' },
      { type: 'paragraph', text: '把一个小电荷从电场里的一点 A 搬到另一点 B，静电力会对它做功。奇妙的是，无论你让电荷走直线、走曲线，还是绕一大圈，只要起点 A 和终点 B 不变，静电力做的总功都是一样的。这说明静电力做功只和初末位置有关，和中间走的路线没有关系。这一点和重力做功非常像：物体从高处落到低处，重力做功只取决于高度差，与路径无关。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">从A到B，走不同路线静电力做功相同</text><rect x="40" y="56" width="600" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="130" cy="170" r="14" fill="#4fb3a5"/><text x="130" y="200" font-size="13" fill="#234b45" text-anchor="middle">A</text><circle cx="550" cy="170" r="14" fill="#4fb3a5"/><text x="550" y="200" font-size="13" fill="#234b45" text-anchor="middle">B</text><path d="M 144 170 L 536 170" fill="none" stroke="#234b45" stroke-width="3"/><text x="340" y="162" font-size="13" fill="#234b45" text-anchor="middle">路径①（直线）</text><path d="M 144 158 Q 340 40 536 158" fill="none" stroke="#2e9e8f" stroke-width="3" stroke-dasharray="6,4"/><text x="340" y="78" font-size="13" fill="#234b45" text-anchor="middle">路径②（绕弧）</text><polygon points="536,170 522,164 522,176" fill="#234b45"/><text x="340" y="252" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">W₁ = W₂（做功只与A、B位置有关）</text></svg>', caption: '图1　把电荷从 A 搬到 B，走直线或绕弧，静电力做的总功都一样。' },
      { type: 'keypoint', label: '重点·静电力做功的特点', text: '<strong>静电力做功与路径无关，只与电荷的初位置和末位置有关。</strong>在静电场中，从 A 到 B 移动电荷，静电力做的功 W 由起点和终点唯一决定，与中间经过哪条路线没有关系。' },
      { type: 'paragraph', text: '既然做功只和位置有关，我们就可以像"重力势能"那样，给电场中的每一点定义一个能量——这就是电势能。类比很自然：重力做功会改变重力势能，静电力做功也会改变电势能。' },
      { type: 'list', items: ['静电力做功与电荷经过的具体路径无关，只由初末位置决定', '这个性质和重力做功一致，因此可以引入"势能"类概念', '正因为与路径无关，电场中每一点才能对应一个确定的电势能值'] },
      { type: 'heading', text: '二、电势能' },
      { type: 'paragraph', text: '电荷在电场中由于受电场作用而具有的能量，叫做电势能，常用 E_p 表示。可以这样理解：你把电荷从某个参考点搬到当前位置，静电力（或你克服静电力）做的功，就"存"进了这个位置的电势能里。电势能和重力势能一样，是一个相对量，必须先选一个"零势能点"才有确定的数值。' },
      { type: 'keypoint', label: '重点·电势能 E_p', text: '<strong>电荷在电场中某点的电势能 E_p，等于把它从这点移到零势能点时静电力所做的功。</strong>静电力做正功，电势能减少；静电力做负功（外力克服静电力做功），电势能增加。' },
      { type: 'table', headers: ['对比项', '重力势能', '电势能'], rows: [['对应的力', '重力（保守力）', '静电力（保守力）'], ['做功特点', '与路径无关，只与高度差有关', '与路径无关，只与初末位置有关'], ['变化规律', '重力做正功，势能减少', '静电力做正功，电势能减少'], ['参考点', '常取地面为零势能面', '常取无穷远处或接地点为零势能点']] },
      { type: 'example', label: '例题·电势能的变化', text: '在匀强电场中把正电荷 q 从 A 点移到 B 点，静电力对它做正功 W = 6.0×10⁻⁴ J。问电势能怎么变？变化了多少？<br><br><strong>解析</strong>：<br>静电力做正功，电荷的电势能减少。电势能的减少量就等于静电力做的功，所以电势能减少了 6.0×10⁻⁴ J。若以某点为零势能点，则 E_pA − E_pB = 6.0×10⁻⁴ J。' },
      { type: 'warn', label: '易错', text: '<strong>电势能是电荷和电场共同具有的，不是电荷"单独"的能量，而且它的大小与零势能点的选择有关。</strong>选不同的零势能点，同一点的电势能数值会不同。做题时务必先看清题目把哪里当作零势能点，不要默认某点就是零。' },
      { type: 'list', items: ['电势能是相对量，必须先规定零势能点才能谈具体数值', '正电荷在正的电场中，离正源电荷越远电势能越小', '计算电势能变化只看静电力做功，与路径无关'] },
      { type: 'heading', text: '三、电势' },
      { type: 'paragraph', text: '电势能和放在那点的电荷 q 的大小有关：同一个位置，放 2 倍电荷，电势能也大约变成 2 倍。为了描述电场"本身"的性质，我们消去电荷的影响，把电势能除以电荷量，得到电势。电势只由电场和位置决定，和放不放试探电荷、放多大电荷都没有关系。' },
      { type: 'keypoint', label: '重点·电势 φ', text: '<strong>电场中某点的电势 φ = 电势能 E_p / 电荷量 q，即 φ = E_p / q。</strong>电势是标量，单位是伏特（V），1 V = 1 J/C。电势反映电场本身"能"的本领，由位置和电场共同决定，与试探电荷无关。' },
      { type: 'tip', label: '提示·零电势点', text: '<strong>电势也是相对量，必须先规定零电势点。</strong>理论计算中常取无穷远处为零电势点；实际电路里常取大地（接地点）为零电势点。规定了零电势点后，某点电势就是该点与零电势点之间的电势差。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">正点电荷周围：离得越远电势越低</text><rect x="40" y="56" width="600" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="200" cy="160" r="16" fill="#4fb3a5"/><text x="200" y="190" font-size="13" fill="#234b45" text-anchor="middle">+Q</text><circle cx="340" cy="160" r="50" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="340" y="100" font-size="13" fill="#234b45" text-anchor="middle">φ₁</text><circle cx="500" cy="160" r="90" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="500" y="60" font-size="13" fill="#234b45" text-anchor="middle">φ₂</text><circle cx="600" cy="160" r="120" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="600" y="34" font-size="13" fill="#234b45" text-anchor="middle">φ₃</text><text x="340" y="252" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">φ₁ &gt; φ₂ &gt; φ₃（越往外电势越低）</text></svg>', caption: '图2　正点电荷周围，离电荷越远电势越低，同一圈上各点电势相等。' },
      { type: 'paragraph', text: '注意：电势是标量，但有正负。正负表示比零电势点高还是低，不表示方向。正电荷产生的电场中，各点电势为正；负电荷产生的电场中，各点电势为负。' },
      { type: 'example', label: '例题·用电势定义求电势能', text: '已知电场中某点电势 φ = 5 V，把一个 q = 2 C 的正电荷放在该点，求它的电势能。<br><br><strong>解析</strong>：<br>由 φ = E_p / q 得 E_p = q × φ = 2 C × 5 V = 10 J。所以该电荷在该点具有 10 J 的电势能。若换成 q = −2 C 的电荷，则 E_p = −2 C × 5 V = −10 J，电势能变为负值。' },
      { type: 'warn', label: '易错', text: '<strong>电势有正负，是标量不是矢量；正负只表示比零电势点高或低。</strong>另外 φ = E_p / q 里的 q 带符号代入：正电荷在电势为正处电势能为正，负电荷在同一点电势能则为负。很多同学忘记把 q 的符号带进去，导致电势能正负判断错误。' },
      { type: 'heading', text: '四、电势与电势能的关系' },
      { type: 'paragraph', text: '电势 φ 描述"电场每单位电荷能提供的势能"，电势能 E_p 则是"具体这个电荷实际拥有"的势能。两者通过 E_p = q × φ 联系。沿电场线方向，电势逐渐降低；正电荷在电势高处电势能大，负电荷则相反。' },
      { type: 'tip', label: '提示·快速判断电势能变化', text: '<strong>记住一句口诀：正电荷顺着电场线走，电势能减小；负电荷顺着电场线走，电势能增大。</strong>更通用的办法是直接用 E_p = q × φ 比较两点电势高低，再结合 q 的正负判断电势能如何变化。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">沿电场线方向，电势越来越低</text><rect x="40" y="56" width="600" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="120" y="110" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">A</text><text x="120" y="135" font-size="13" fill="#234b45" text-anchor="middle">φ高</text><text x="560" y="110" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">B</text><text x="560" y="135" font-size="13" fill="#234b45" text-anchor="middle">φ低</text><line x1="160" y1="120" x2="520" y2="120" stroke="#234b45" stroke-width="3"/><polygon points="520,120 504,113 504,127" fill="#234b45"/><line x1="200" y1="160" x2="480" y2="160" stroke="#2e9e8f" stroke-width="3"/><polygon points="480,160 464,153 464,167" fill="#2e9e8f"/><line x1="240" y1="200" x2="440" y2="200" stroke="#2e9e8f" stroke-width="3"/><polygon points="440,200 424,193 424,207" fill="#2e9e8f"/><text x="340" y="252" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">电场线指向电势降低的方向</text></svg>', caption: '图3　电场线从电势高的 A 指向电势低的 B，沿电场线方向电势不断降低。' }
    ],
    exercises: [
      { type: 'choice', question: '关于静电力做功，下列说法正确的是？', options: ['静电力做功与电荷经过的路径有关', '静电力做功只与电荷的初末位置有关', '静电力做功总是正的', '静电力做功与电场强弱无关'], answer: '静电力做功只与电荷的初末位置有关', explanation: '在静电场中，静电力是保守力，它所做的功只取决于电荷的初位置和末位置，与电荷具体经过哪条路径无关。这一点和重力做功类似。虽然电场强弱会影响做功大小，但做功仍只由位置决定。静电力可以做正功也可以做负功，取决于电荷移动方向与电场方向的关系。' },
      { type: 'choice', question: '关于电势能，下列说法正确的是？', options: ['电势能是电荷单独具有的能量', '电势能的大小与零势能点的选择无关', '电势能是电荷和电场共同具有的，其数值与零势能点选择有关', '电势能永远是正值'], answer: '电势能是电荷和电场共同具有的，其数值与零势能点选择有关', explanation: '电势能是电荷与电场这个系统共同具有的能量，不是电荷单独拥有的。它和重力势能一样是相对量，必须先规定零势能点才有确定数值，选不同的零势能点，同一位置的电势能数值会不同。电势能可正可负，正负表示比零势能点高或低。' },
      { type: 'choice', question: '电场中某点电势 φ = E_p / q，下列说法正确的是？', options: ['电势 φ 与试探电荷 q 成正比', '电势 φ 由电场和位置决定，与试探电荷无关', '电势 φ 越大说明电场越强', '电势一定是正值'], answer: '电势 φ 由电场和位置决定，与试探电荷无关', explanation: '电势是描述电场本身性质的物理量，定义为 φ = E_p / q，但它是电场和该点位置共同决定的，与是否放入试探电荷、放入多大电荷无关。公式只是定义和测量方法，不能说 φ 与 q 成正比。电势必与场强无直接正比关系，且电势可正可负。' },
      { type: 'fill', question: '电荷在电场中某点的电势能 E_p 等于把它从该点移到零势能点时___所做的功。', answer: '静电力', explanation: '电势能的定义为：电荷在电场中某点的电势能，等于把它从该点移到零势能点时静电力所做的功。若静电力做正功，说明电势能减少，移到零势能点时电势能变小；反之则电势能增加。这是类比重力势能得出的定义。' },
      { type: 'fill', question: '沿电场线的方向，电势逐渐___（填"升高"或"降低"）。', answer: '降低', explanation: '电场线总是指向电势降低的方向。从正电荷出发指向负电荷（或无穷远），沿着电场线前进，电势不断减小。因此判断两点电势高低时，可以看电场线的指向：顺着电场线方向电势越来越低。' }
    ]
  });
})();
