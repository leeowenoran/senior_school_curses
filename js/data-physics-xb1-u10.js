/* ============================================================
 * 高二物理 · 选择性必修第一册 · 第二章 机械振动
 * 课时10：单摆
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u10',
    name: '单摆',
    chapter: '选择性必修第一册 · 第二章 机械振动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是单摆模型' },
      { type: 'paragraph', text: '把一根又轻又软、不会伸长的细线，上端固定，下端挂一个小小的重物（比如一个小钢球），就组成了一个单摆。它看起来简单，却是研究振动最经典、最好用的模型。生活中挂钟下面的摆、秋千（近似）、树枝上吊着的小球，都和单摆很像。' },
      { type: 'keypoint', label: '重点·单摆模型', text: '<strong>单摆由一根不可伸长、质量可忽略的轻绳，和一个可看作质点的摆球组成。</strong>轻绳上端固定（叫悬点），摆球在竖直平面内摆动。只要满足这两个条件，就可以当成理想单摆来研究。' },
      { type: 'paragraph', text: '为什么强调"轻绳"和"小摆球"？因为真实绳子有重量、摆球有大小，会让问题变复杂。我们故意把绳子质量忽略、把摆球缩小成一个点，就是为了让规律更纯粹、更容易用数学描述。这是物理学"抓主要因素、忽略次要因素"的老办法。' },
      { type: 'list', items: ['摆线：不可伸长、质量可忽略的轻绳，提供拉住摆球的力', '摆球：质量集中、大小可忽略的小球，可看作质点', '悬点：摆线上端固定的点，摆动时悬点不动', '摆长 l：从悬点到摆球中心的距离，是单摆的"长度"'] },
      { type: 'heading', text: '二、单摆为什么会来回摆——回复力' },
      { type: 'paragraph', text: '把摆球拉到一边松手，它会摆回来，越过最低点又摆到另一边，如此往复。能来回摆，是因为它受到一个总想把摆球拉回平衡位置（最低点）的力，这个力叫回复力。在单摆里，回复力是重力沿着圆弧切线方向的分量，不是绳子的拉力。' },
      { type: 'keypoint', label: '重点·小角度下是简谐运动', text: '当摆角很小（通常小于约 5 度）时，单摆的回复力大小与偏离平衡位置的位移近似成正比、方向总是指向平衡位置，<strong>这时单摆做简谐运动</strong>。角度一大，这个近似就不准了。' },
      { type: 'example', label: '例题·判断单摆运动', text: '下列说法正确的是？<br>A. 单摆偏离平衡位置后，是绳子的拉力把它拉回去的<br>B. 偏角很小时，单摆近似做简谐运动<br><br><strong>解析</strong>：<br>A 错。把摆球拉回平衡位置的是<strong>重力沿切线方向的分力（回复力）</strong>，绳子的拉力沿着摆线方向，并不沿切线，不能直接充当回复力。<br>B 对。偏角很小时，回复力与位移近似成正比且方向指向平衡位置，符合简谐运动的特征。' },
      { type: 'warn', label: '易错', text: '不要把"回复力"说成绳子的拉力。<strong>单摆的回复力是重力沿圆弧切线方向的分力，绳子的拉力只在摆线方向上，并不沿切线，所以不能充当回复力。</strong>另外，单摆只有在偏角很小时才近似是简谐运动，偏角太大就不准了。' },
      { type: 'heading', text: '三、单摆的周期公式' },
      { type: 'paragraph', text: '周期 T 是摆球完成一次全振动（从一边出发，摆到另一边再回到原处）所用的时间。经过实验和理论推导，单摆的周期公式是：T = 2π × √(l / g)。其中 l 是摆长，g 是当地的重力加速度。这个公式告诉我们，单摆的周期只由两个量决定。' },
      { type: 'keypoint', label: '重点·周期与振幅、质量无关', text: '<strong>在偏角很小的情况下，单摆的周期只与摆长 l 和当地重力加速度 g 有关，与振幅大小、摆球质量都无关。</strong>摆得高一点或低一点、换个轻点或重点的球，只要摆长不变，周期就不变。' },
      { type: 'table', headers: ['因素', '是否影响周期', '说明'], rows: [['摆长 l', '有关', 'l 越大，周期越长，T 与 √l 成正比'], ['重力加速度 g', '有关', 'g 越大，周期越短，T 与 1/√g 成正比'], ['振幅（摆角）', '无关', '小角度下振幅改变，周期几乎不变'], ['摆球质量', '无关', '换轻点或重点的摆球，周期不变']] },
      { type: 'tip', label: '提示', text: '<strong>记住"摆长"是从悬点到摆球中心的距离，不是绳子本身的长度。</strong>如果只量绳子长，会少算了摆球半径那一段，算出来的周期就会偏错。测量时最好用米尺量悬点到摆球中心的总长。' },
      { type: 'list', items: ['想测当地 g：固定摆长 l，测出周期 T，再用 g = 4π² × l / T² 反推', '想让钟摆走得准：调节摆长 l 就能调节周期，老式摆钟靠这个计时', '比较不同地点：同一单摆拿到 g 更大的地方（如低纬度 vs 高纬度），周期会变小', '小角度要求：做实验或计算时，偏角一般控制在约 5 度以内'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">单摆模型：悬点、轻绳与摆球</text><circle cx="340" cy="70" r="6" fill="#234b45"/><text x="340" y="60" font-size="13" fill="#234b45" text-anchor="middle">悬点（固定不动）</text><line x1="340" y1="70" x2="340" y2="210" stroke="#2e9e8f" stroke-width="3"/><text x="356" y="145" font-size="13" fill="#234b45">摆线（不可伸长轻绳）</text><line x1="300" y1="70" x2="300" y2="210" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="4,3"/><text x="288" y="145" font-size="13" fill="#234b45" text-anchor="end">摆长 l</text><circle cx="340" cy="210" r="20" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="252" font-size="13" fill="#234b45" text-anchor="middle">摆球（可看作质点）</text></svg>', caption: '图1　单摆由悬点、不可伸长的轻绳和摆球组成，摆长 l 指悬点到摆球中心的距离。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">单摆偏离平衡位置时的回复力</text><line x1="160" y1="70" x2="160" y2="250" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="5,4"/><text x="160" y="270" font-size="13" fill="#234b45" text-anchor="middle">平衡位置</text><circle cx="160" cy="70" r="6" fill="#234b45"/><line x1="160" y1="70" x2="300" y2="205" stroke="#2e9e8f" stroke-width="3"/><circle cx="300" cy="205" r="18" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><line x1="300" y1="205" x2="300" y2="262" stroke="#234b45" stroke-width="3"/><polygon points="300,270 293,256 307,256" fill="#234b45"/><text x="312" y="248" font-size="13" fill="#234b45">重力 mg</text><line x1="300" y1="205" x2="178" y2="92" stroke="#2e9e8f" stroke-width="3"/><polygon points="170,84 184,90 180,104" fill="#2e9e8f"/><text x="200" y="150" font-size="13" fill="#234b45">拉力 T</text><line x1="300" y1="205" x2="243" y2="240" stroke="#1f7a6e" stroke-width="3"/><polygon points="236,246 250,236 252,250" fill="#1f7a6e"/><text x="120" y="232" font-size="13" fill="#1f7a6e">回复力 F</text></svg>', caption: '图2　单摆的回复力是重力沿圆弧切线方向的分力，方向总指向平衡位置；绳子的拉力沿摆线，不是回复力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">摆长相同，周期就相同（与振幅、质量无关）</text><circle cx="120" cy="70" r="6" fill="#234b45"/><line x1="120" y1="70" x2="148" y2="195" stroke="#2e9e8f" stroke-width="3"/><circle cx="148" cy="195" r="14" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="120" y="235" font-size="13" fill="#234b45" text-anchor="middle">振幅小</text><circle cx="340" cy="70" r="6" fill="#234b45"/><line x1="340" y1="70" x2="392" y2="205" stroke="#2e9e8f" stroke-width="3"/><circle cx="392" cy="205" r="14" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="245" font-size="13" fill="#234b45" text-anchor="middle">振幅大</text><circle cx="560" cy="70" r="6" fill="#234b45"/><line x1="560" y1="70" x2="588" y2="195" stroke="#2e9e8f" stroke-width="3"/><circle cx="588" cy="195" r="24" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="560" y="235" font-size="13" fill="#234b45" text-anchor="middle">摆球质量大</text><text x="340" y="280" font-size="14" fill="#1f7a6e" text-anchor="middle">三者摆长相同 → 周期 T 都相同</text></svg>', caption: '图3　只要摆长相同，无论振幅大小、摆球轻重，单摆的周期都几乎一样。' }
    ],
    exercises: [
      { type: 'choice', question: '关于单摆模型的条件，下列说法正确的是？', options: ['摆线的质量不能忽略', '摆球的大小不能忽略', '摆线不可伸长且质量可忽略、摆球可看作质点', '摆球必须很重'], answer: '摆线不可伸长且质量可忽略、摆球可看作质点', explanation: '理想单摆要求摆线不可伸长、质量可忽略（轻绳），摆球质量集中、大小可忽略因而可看作质点，上端悬点固定。摆线质量、摆球大小都应忽略，摆球也不一定很重。只有满足这些条件，才能当作理想单摆用简谐运动规律研究。' },
      { type: 'choice', question: '关于单摆的周期，下列说法正确的是？', options: ['振幅越大，周期越大', '摆球质量越大，周期越大', '周期只与摆长和当地重力加速度有关', '周期与摆长无关'], answer: '周期只与摆长和当地重力加速度有关', explanation: '在偏角很小的情况下，单摆周期公式为 T = 2π × √(l / g)，周期只由摆长 l 和当地重力加速度 g 决定。它与振幅大小无关，也与摆球质量无关，所以"振幅越大周期越大""质量越大周期越大"都是错的，周期当然与摆长有关。' },
      { type: 'choice', question: '单摆做简谐运动的条件是？', options: ['任意偏角都可以', '偏角很小（约小于5度）时近似为简谐运动', '偏角越大越接近简谐运动', '必须有外力持续驱动'], answer: '偏角很小（约小于5度）时近似为简谐运动', explanation: '单摆只有在偏角很小时，回复力才近似与偏离平衡位置的位移成正比、方向指向平衡位置，从而近似满足简谐运动的特征。偏角越大，这个近似越差，不能说是简谐运动；而且单摆自由摆动无需外力持续驱动。' },
      { type: 'fill', question: '单摆的周期公式为 T = ___（用摆长 l、重力加速度 g 表示，乘号用 ×，根号用 √）。', answer: '2π×√(l/g)', explanation: '单摆在小角度下的周期公式是 T = 2π × √(l / g)，其中 l 是摆长，g 是当地重力加速度。这个公式说明周期与摆长的平方根成正比、与重力加速度的平方根成反比，与振幅和摆球质量都无关。' },
      { type: 'fill', question: '单摆的周期与摆球的质量和振幅___（填"有关"或"无关"）。', answer: '无关', explanation: '在偏角很小的条件下，单摆的周期只取决于摆长 l 和当地重力加速度 g，与摆球质量大小、振幅大小都没有关系。所以换一个轻一点或重一点的摆球、或者让它摆得高一点低一点，只要摆长不变，周期就基本不变。' }
    ]
  });
})();
