/* ============================================================
 * 高一物理 · 必修 第三册 · 第十章 静电场中的能量
 * 课时9：电容器的电容
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u9',
    name: '电容器的电容',
    chapter: '必修第三册 · 第十章 静电场中的能量',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、电容器与电容' },
      { type: 'paragraph', text: '两块彼此靠近又互相绝缘的导体，就组成了一个电容器，最常见的是平行板电容器：两片平行金属板，中间隔着空气或介质。给两板分别带上等量异种电荷 +Q 和 −Q，两板之间就形成电场，有了电压 U。电容器就像个"电荷仓库"，能储存电荷和电场能。' },
      { type: 'keypoint', label: '重点·电容 C = Q / U', text: '<strong>电容器的电容 C = 电荷量 Q / 两板电压 U，即 C = Q / U。</strong>电容表示"每升高 1 伏特电压能多存多少电荷"，单位是法拉（F），常用微法 μF、皮法 pF。电容是电容器本身的属性，由结构决定。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">平行板电容器：C = Q / U</text><rect x="40" y="56" width="600" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="220" y="90" width="18" height="140" fill="#4fb3a5"/><text x="229" y="80" font-size="16" fill="#234b45" text-anchor="middle" font-weight="bold">+Q</text><rect x="442" y="90" width="18" height="140" fill="#4fb3a5"/><text x="451" y="80" font-size="16" fill="#234b45" text-anchor="middle" font-weight="bold">−Q</text><text x="340" y="120" font-size="22" fill="#234b45" text-anchor="middle">+</text><text x="340" y="165" font-size="22" fill="#234b45" text-anchor="middle">+</text><text x="340" y="210" font-size="22" fill="#234b45" text-anchor="middle">−</text><text x="340" y="250" font-size="22" fill="#234b45" text-anchor="middle">−</text><line x1="340" y1="90" x2="340" y2="230" stroke="#234b45" stroke-width="2" stroke-dasharray="5,4"/><text x="380" y="165" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">U</text><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">两板带电 ±Q，电压为 U</text></svg>', caption: '图1　平行板电容器两板带等量异种电荷 ±Q，板间电压为 U，电容 C = Q / U。' },
      { type: 'paragraph', text: '法拉这个单位非常大，实际电容器常用小得多的单位：1 F = 10⁶ μF = 10¹² pF。比如手机里用的电容多是皮法、微法量级。' },
      { type: 'list', items: ['电容器由两块彼此绝缘又相互靠近的导体组成', '充电后两板带等量异种电荷，板间形成电场', '电容 C = Q / U 描述其"存电荷能力"，是本身属性'] },
      { type: 'heading', text: '二、平行板电容器的电容' },
      { type: 'paragraph', text: '平行板电容器的电容大小，由它的"身材"和"中间填什么"决定：极板正对面积 S 越大，能存的电荷越多，C 越大；极板间距 d 越大，电荷间的"吸引力"越弱，C 越小；两板之间的电介质（如空气、陶瓷、云母）介电常数 ε 越大，C 也越大。定量关系是 C 正比于 ε 和 S，反比于 d。' },
      { type: 'keypoint', label: '重点·C 与结构的关系', text: '<strong>平行板电容器：电容 C 与极板正对面积 S、板间介电常数 ε 成正比，与板间距 d 成反比。</strong>板间为真空或空气时 C 较小，插入介电常数更大的介质（如云母、陶瓷）可显著增大电容。' },
      { type: 'table', headers: ['改变量', '对电容 C 的影响', '原因'], rows: [['增大正对面积 S', 'C 增大', '可存电荷的区域更大'], ['减小板间距 d', 'C 增大', '两板作用更强'], ['换用更大 ε 的介质', 'C 增大', '介质增强"存电"能力'], ['增大板间距 d', 'C 减小', '两板作用减弱']] },
      { type: 'example', label: '例题·判断电容变化', text: '一个平行板电容器，保持其他条件不变，只把两极板的正对面积增大为原来的 2 倍，电容怎样变化？<br><br><strong>解析</strong>：<br>由电容与正对面积 S 成正比可知，S 变为 2 倍，电容 C 也变为原来 2 倍。同理，若只把板间距 d 减半，C 也变为 2 倍。电容只由结构决定，与当前带了多少电荷无关。' },
      { type: 'warn', label: '易错', text: '<strong>电容 C = Q / U 是定义式，但 C 的大小不由 Q 或 U 决定，而由电容器本身结构（ε、S、d）决定。</strong>就像"密度 = 质量/体积"，密度不随质量体积变。增大 Q 时 U 也同比例增大，C 不变；说"Q 越大 C 越大"是典型错误。' },
      { type: 'list', items: ['C 由 ε、S、d 决定，是电容器本身的属性', '改变 S、d 或中间介质，才能改变 C', 'Q 或 U 单独变化不会改变 C 这个"容量"'] },
      { type: 'heading', text: '三、电容器的动态分析' },
      { type: 'paragraph', text: '实际问题中常问：改变某个条件（如板间距、电压），其他量怎么变？关键是先判断"什么量保持不变"。常见两类：一是电容器始终接在电源上，板间电压 U 不变；二是充电后断开电源，电荷量 Q 不变。锁定不变量后，再用 C = Q/U、E = U/d 逐一推导。' },
      { type: 'keypoint', label: '重点·两类动态情形', text: '<strong>动态分析先抓住不变量：接在电源上 → U 不变；断开电源 → Q 不变。</strong>再结合 C ∝ εS/d、C = Q/U、E = U/d 推导。U 不变时增 d 则 C 减、Q 减、E 减；Q 不变时增 d 则 C 减、U 增、E 不变。' },
      { type: 'example', label: '例题·接电源时增大板间距', text: '平行板电容器始终接在电源上（U 不变），将板间距 d 增大为原来 2 倍。分析 C、Q、E 如何变。<br><br><strong>解析</strong>：<br>d 变 2 倍 → C 减为 1/2。因 U 不变，由 Q = C × U 知 Q 也减为 1/2。板间场强 E = U / d，U 不变、d 变 2 倍，故 E 减为 1/2。结论：C 减、Q 减、E 减。' },
      { type: 'warn', label: '易错', text: '<strong>动态题最容易搞混"谁不变"。</strong>接电源时 U 不变，断开时 Q 不变，两者结论完全不同：同样是增大 d，接电源时 E 减小，断开电源（Q 不变）时由 E = U/d = (Q/C)/d，而 C ∝ 1/d，得 E 不变。看清电路状态再下手，结论才对。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动态分析：增大 d 时两种情形对比</text><rect x="40" y="56" width="290" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="84" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">接电源：U 不变</text><text x="185" y="120" font-size="13" fill="#234b45" text-anchor="middle">d 增大 → C 减小</text><text x="185" y="150" font-size="13" fill="#234b45" text-anchor="middle">Q = C×U 减小</text><text x="185" y="180" font-size="13" fill="#234b45" text-anchor="middle">E = U/d 减小</text><text x="185" y="225" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">C↓ Q↓ E↓</text><rect x="350" y="56" width="290" height="210" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="84" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">断开：Q 不变</text><text x="495" y="120" font-size="13" fill="#234b45" text-anchor="middle">d 增大 → C 减小</text><text x="495" y="150" font-size="13" fill="#234b45" text-anchor="middle">U = Q/C 增大</text><text x="495" y="180" font-size="13" fill="#234b45" text-anchor="middle">E = U/d 不变</text><text x="495" y="225" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">C↓ Q不变 U↑ E不变</text></svg>', caption: '图2　增大板间距 d：接电源（U 不变）时 E 减小；断开（Q 不变）时 E 不变。' },
      { type: 'tip', label: '提示·动态题记忆诀窍', text: '<strong>先圈"不变量"再推导：接电源 = U 钉死，断开 = Q 钉死。</strong>把 C = Q/U 和 E = U/d 两个式子写在旁边，由不变量出发一步步推，不要凭感觉直接猜。多练两道，就能形成"看到接电源就盯 U、看到断开就盯 Q"的条件反射。' },
      { type: 'paragraph', text: '电容器在生活中无处不在：相机闪光灯靠它瞬间放电、电脑电源靠它滤波稳流、触摸屏和麦克风里也有它的身影。理解了 C = Q/U 和动态变化，就能看懂这些器件的工作原理。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">让电容 C 变大的三种办法</text><rect x="40" y="60" width="180" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="130" y="110" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">增大 S</text><rect x="70" y="150" width="120" height="14" fill="#4fb3a5"/><text x="130" y="200" font-size="12" fill="#234b45" text-anchor="middle">面积大→C大</text><rect x="250" y="60" width="180" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="110" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">减小 d</text><rect x="330" y="150" width="20" height="60" fill="#4fb3a5"/><text x="340" y="230" font-size="12" fill="#234b45" text-anchor="middle">间距小→C大</text><rect x="460" y="60" width="180" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="550" y="110" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">增大 ε</text><rect x="510" y="150" width="80" height="40" fill="#4fb3a5"/><text x="550" y="215" font-size="12" fill="#234b45" text-anchor="middle">介质好→C大</text></svg>', caption: '图3　增大正对面积 S、减小板间距 d、换用更大介电常数 ε 的介质，都能让平行板电容器的电容 C 变大。' }
    ],
    exercises: [
      { type: 'choice', question: '关于电容 C = Q / U，下列说法正确的是？', options: ['C 与电荷量 Q 成正比', 'C 与电压 U 成反比', 'C 由电容器本身结构决定，与 Q、U 无关', 'Q 增大则 C 一定增大'], answer: 'C 由电容器本身结构决定，与 Q、U 无关', explanation: 'C = Q / U 是电容的定义式，但电容是电容器本身的属性，由极板面积、间距和中间介质等结构因素决定，不随所带电荷量 Q 或电压 U 变化。就像密度等于质量除以体积，但密度不由质量体积决定。增大 Q 时 U 同比例增大，C 保持不变。' },
      { type: 'choice', question: '对于平行板电容器，下列说法正确的是？', options: ['电容 C 与板间距 d 成正比', '电容 C 与正对面积 S 成正比，与板间距 d 成反比', '插入介电常数更大的介质会减小电容', '电容只与电压有关'], answer: '电容 C 与正对面积 S 成正比，与板间距 d 成反比', explanation: '平行板电容器的电容 C 与极板正对面积 S、板间介电常数 ε 成正比，与板间距 d 成反比。增大 S 或 ε、减小 d 都能使 C 增大；插入介电常数更大的介质会增大而非减小电容。电容与电压无关。' },
      { type: 'choice', question: '平行板电容器始终接在电源上（U 不变），将板间距 d 增大，则板间场强 E 如何变化？', options: ['E 不变', 'E 增大', 'E 减小', '先增大后减小'], answer: 'E 减小', explanation: '接在电源上时电压 U 保持不变。由 E = U / d，U 不变而 d 增大，场强 E 减小。同时 C 因 d 增大而减小，电荷量 Q = C × U 也随之减小。这类题的关键是先判断不变量是 U。' },
      { type: 'fill', question: '电容的定义式是 C = ___（用 Q 和 U 表示）。', answer: 'Q / U', explanation: '电容定义为电容器所带电荷量 Q 与两极板间电压 U 的比值，即 C = Q / U。它反映电容器"每升高 1 伏特能多存多少电荷"的能力，单位是法拉 F。注意这是定义式，C 本身由结构决定。' },
      { type: 'fill', question: '平行板电容器充电后断开电源，保持电荷量 Q 不变，将板间距 d 增大，则电容 C 将___（填"增大"或"减小"）。', answer: '减小', explanation: '断开电源后电荷量 Q 不变。平行板电容 C 与板间距 d 成反比，d 增大则 C 减小。此时电压 U = Q / C 会增大，而场强 E = U / d 经推导保持不变。这类动态题要先锁定不变量 Q，再结合公式推导。' }
    ]
  });
})();
