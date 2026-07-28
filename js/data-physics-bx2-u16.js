/* ============================================================
 * 高一物理 · 必修 第二册 · 第八章 机械能守恒定律
 * 课时16：动能和动能定理
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u16',
    name: '动能和动能定理',
    chapter: '必修第二册 · 第八章 机械能守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、运动的物体具有"动能"' },
      { type: 'paragraph', text: '奔跑的足球能撞倒人，流动的水能推动水车，疾驰的锤头能轻易钉进木头。这些因为运动而具有的能量，叫做动能。一切运动的物体都有动能，速度越快、质量越大，动能越多，破坏力或做功本领也越强。' },
      { type: 'keypoint', label: '重点·动能', text: '<strong>物体的动能 E_k = ½ × m × v²。</strong>其中 m 是物体质量，v 是物体的速率。动能是标量，单位焦耳。注意是速率的平方，速度翻倍，动能变成原来的 4 倍。' },
      { type: 'paragraph', text: '动能和前面学的重力势能不同：重力势能藏在"位置高低"里，动能藏在"运动快慢"里。一个是位置能量，一个是运动能量。两者都是机械能的成员，也都能通过做功来相互转化。' },
      { type: 'list', items: ['动能由质量和速率决定，E_k = ½ m v²', '动能是标量，只有大小没有方向', '速率变为 2 倍，动能变为 4 倍', '动能和重力势能都属于机械能，可相互转化'] },
      { type: 'heading', text: '二、动能定理：合外力做功等于动能变化' },
      { type: 'paragraph', text: '对一个物体，所有外力对它做的总功（合外力做的功），会带来什么结果？答案是：总功等于物体动能的变化量。物体受的力做正功多，动能增加；阻力做负功多，动能减少。这个规律叫做动能定理，它把"做功"和"动能变化"直接连了起来。' },
      { type: 'keypoint', label: '重点·动能定理', text: '<strong>合外力对物体做的总功 W_合 = E_k2 − E_k1 = ½ m v₂² − ½ m v₁²。</strong>即合外力做的功等于物体动能的变化量。W_合 > 0 动能增加，W_合 < 0 动能减少。' },
      { type: 'example', label: '例题·用动能定理求末速度', text: '质量 2 千克的物体，初速度为 0，在水平方向受 10 牛的恒定合外力作用，前进 9 米。g 取 10，求末速度。<br><br><strong>解析</strong>：<br>合外力做功 W_合 = F × s = 10 × 9 = 90（焦耳）。<br>由动能定理 W_合 = ½ m v² − 0，得 90 = ½ × 2 × v² = v²。<br>所以 v = √90 ≈ 9.5（米/秒）。' },
      { type: 'warn', label: '易错', text: '动能定理里的 W_合 是"所有力做功的代数和"，不是合外力大小乘以位移那么简单（除非合外力恒定且与位移同向）。有同学直接写 W = F_合 × s 却忽略了某个力做负功。正确做法是把每个力做的功（带正负号）加起来，再等于动能变化。另外 E_k = ½ m v² 中的 v 一定是相对于同一参考系的速度。' },
      { type: 'table', headers: ['情况', 'W_合 的正负', '动能变化', '物体运动状态'], rows: [['合外力做正功', '正', '动能增加', '速度变大（加速）'], ['合外力做负功', '负', '动能减少', '速度变小（减速）'], ['合外力做功为零', '零', '动能不变', '速率不变（如匀速圆周）']] },
      { type: 'heading', text: '三、动能定理好用在哪' },
      { type: 'paragraph', text: '动能定理最大的优点是"不管过程曲折，只看初末状态"。物体走的路径是直是弯、受力是否恒定，都不影响结论——只要算出总功和初末动能，就能直接得到结果。这让它特别适合处理变力做功、曲线运动这类用牛顿定律很麻烦的问题。' },
      { type: 'keypoint', label: '重点·解题套路', text: '<strong>用动能定理解题：①明确研究对象和过程；②分析受力，算出每个力做功的代数和 W_合；③写出初、末动能 E_k1、E_k2；④列方程 W_合 = E_k2 − E_k1 求解。</strong>不必追究中间细节，只盯住首尾。' },
      { type: 'list', items: ['适用于恒力也适用于变力做功', '适用于直线也适用于曲线运动', '只需初末速度，不必管加速度和具体路径', '多个力时把各力做功（带正负）相加得总功'] },
      { type: 'tip', label: '提示', text: '<strong>遇到"求变力做功""求某段路程后的速度"又不想列繁琐的牛顿方程时，先想动能定理。</strong>它常常比牛顿第二定律加运动学公式更省事，尤其是阻力、摩擦力参与且路径不规则的情况。' },
      { type: 'paragraph', text: '汽车刹车时，摩擦力做负功，动能减少直到为零，车停下；子弹穿过木板，木板阻力做负功，子弹动能减少、速度下降。这些"运动物体因阻力而慢下来"的现象，用动能定理一句话就能说清：阻力做的负功等于动能的减少量。' },
      { type: 'keypoint', label: '重点·与功的联系', text: '<strong>动能的变化量就是合外力做功的多少。</strong>做了多少功，动能就变化多少——这正是"功是能量转化的量度"在动能上的体现。' },
      { type: 'heading', text: '四、动能与生活的联系' },
      { type: 'paragraph', text: '限速为什么重要？因为车祸撞击时车辆的动能随速度平方增长，60 公里/小时撞墙的动能是 30 公里/小时时的 4 倍，破坏力剧增。风能、水能发电也是把流动空气的动能、水流的动能，通过涡轮变成电能。理解动能，就理解了"运动即能量"。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动能 E_k = ½ × m × v² 由质量和速率决定</text><rect x="40" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">慢速小球</text><circle cx="180" cy="160" r="22" fill="#4fb3a5"/><text x="180" y="220" font-size="12" fill="#234b45" text-anchor="middle">v 小，动能小</text><rect x="360" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">快速小球</text><circle cx="500" cy="160" r="34" fill="#4fb3a5"/><text x="500" y="220" font-size="12" fill="#234b45" text-anchor="middle">v 大，动能大(平方增长)</text></svg>', caption: '图1　两球质量相同，速率大的球动能更大，且动能随速率平方增长。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">动能定理：合外力做功 = 动能变化</text><rect x="40" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">初状态</text><circle cx="180" cy="155" r="16" fill="#4fb3a5"/><text x="180" y="210" font-size="12" fill="#234b45" text-anchor="middle">动能 E_k1</text><rect x="360" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">末状态</text><circle cx="500" cy="155" r="28" fill="#4fb3a5"/><text x="500" y="210" font-size="12" fill="#234b45" text-anchor="middle">动能 E_k2 更大</text><text x="340" y="282" font-size="12" fill="#234b45" text-anchor="middle">W_合 = E_k2 − E_k1</text></svg>', caption: '图2　合外力做正功使物体动能从 E_k1 增加到 E_k2，增加量等于总功。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">阻力做负功，动能减少速度变慢</text><rect x="40" y="70" width="600" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="110" cy="160" r="26" fill="#4fb3a5"/><text x="110" y="210" font-size="12" fill="#234b45" text-anchor="middle">初速大</text><line x1="170" y1="160" x2="430" y2="160" stroke="#234b45" stroke-width="3"/><text x="300" y="150" font-size="13" fill="#234b45" text-anchor="middle">摩擦力做负功</text><circle cx="490" cy="160" r="15" fill="#4fb3a5"/><text x="490" y="210" font-size="12" fill="#234b45" text-anchor="middle">末速小</text><text x="340" y="250" font-size="12" fill="#234b45" text-anchor="middle">动能减少，速度降低直至停下</text></svg>', caption: '图3　运动的物体受阻力做负功，动能减少、速度变慢，最后停下。' }
    ],
    exercises: [
      { type: 'choice', question: '关于动能，下列说法正确的是？', options: ['动能是矢量，有方向', '动能 E_k = ½ × m × v²，与速率平方成正比', '速度方向改变时动能一定改变', '质量大的物体动能一定大'], answer: '动能 E_k = ½ × m × v²，与速率平方成正比', explanation: '动能是标量，只有大小没有方向，公式为 E_k = ½ m v²，与速率的平方成正比，所以速率变为 2 倍时动能变为 4 倍。速度方向改变但速率不变（如匀速圆周运动）时动能不变；仅质量大也不能说明动能大，还要看速率。因此只有第二个选项正确。' },
      { type: 'choice', question: '根据动能定理，物体受合外力做正功时，会怎样？', options: ['动能减少，速度变小', '动能增加，速度变大', '动能不变，速率不变', '动能变为零'], answer: '动能增加，速度变大', explanation: '动能定理指出合外力做的总功等于动能的变化量，即 W_合 = E_k2 − E_k1。当 W_合 > 0（合外力做正功）时，末动能大于初动能，动能增加，物体速率变大（加速）。所以正确选项是"动能增加，速度变大"。' },
      { type: 'choice', question: '动能定理的主要优点是？', options: ['只能用于恒力直线运动', '必须知道加速度才能用', '不需分析中间过程，只看初末动能和总功', '只能求位移不能求速度'], answer: '不需分析中间过程，只看初末动能和总功', explanation: '动能定理 W_合 = E_k2 − E_k1 把合外力做功与初末动能直接联系起来，不要求力恒定、也不要求直线路径，不必追究中间加速度和具体轨迹，只要算清总功和首尾动能即可。这使它特别适合变力做功和曲线运动，因此第三个选项正确。' },
      { type: 'fill', question: '动能定理的表达式为 W_合 = ___（用初末动能 E_k1、E_k2 表示）。', answer: 'E_k2 − E_k1', explanation: '动能定理表明合外力对物体做的总功等于物体动能的变化量，表达式为 W_合 = E_k2 − E_k1 = ½ m v₂² − ½ m v₁²。当总功为正时动能增加，总功为负时动能减少。这是联系"做功"与"动能变化"的核心公式，解题时常比牛顿定律更方便。' },
      { type: 'fill', question: '质量 4 千克的物体，速度从 2 米/秒增加到 6 米/秒，动能增加了___焦耳。', answer: '64', explanation: '初动能 E_k1 = ½ × 4 × 2² = 8 焦耳，末动能 E_k2 = ½ × 4 × 6² = 72 焦耳。动能增加量 = 72 − 8 = 64 焦耳。也可直接用变化量：ΔE_k = ½ × 4 × (6² − 2²) = 2 × 32 = 64 焦耳。' }
    ]
  });
})();
