/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题五 原子核
 * 课时2：放射性衰变规律与半衰期、核反应方程配平
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u16-l1',
    name: '放射性衰变规律与半衰期、核反应方程配平',
    chapter: '热学与近代物理 · 专题五 原子核',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是衰变' },
      { type: 'paragraph', text: '放射性元素的原子核放出 α 或 β 粒子后，自己就变成了另一种元素的原子核，这种自发变化叫衰变。放出 α 粒子的叫 α 衰变，放出 β 粒子的叫 β 衰变，常常还伴随放出 γ 射线。衰变前后，原子核的"身份"变了，但自然界总的质量数和电荷数保持不变。' },
      { type: 'keypoint', label: '重点·衰变', text: '放射性原子核自发放出 α 或 β 粒子而转变为新核的过程叫<strong>衰变</strong>。衰变遵循两条守恒：<strong>质量数守恒</strong>和<strong>电荷数（质子数）守恒</strong>。' },
      { type: 'heading', text: '二、α 衰变的规律' },
      { type: 'paragraph', text: '发生 α 衰变时，原子核放出一个 He-4（含2个质子、2个中子），所以新核的质量数比原来少4，电荷数比原来少2。例如铀-238 衰变生成钍-234，同时放出氦核：U-238 → Th-234 + He-4。' },
      { type: 'example', label: '例题·写一个 α 衰变方程', text: '写出镭-226 发生 α 衰变的方程（镭的质子数为88）。<br><strong>解析</strong>：<br>镭-226 质子数88，放出一个 He-4（质子数2、质量数4）后，新核质子数 = 88 − 2 = 86，质量数 = 226 − 4 = 222，质子数86对应氡元素，所以方程为：<strong>Ra-226 → Rn-222 + He-4</strong>。' },
      { type: 'heading', text: '三、β 衰变的规律' },
      { type: 'paragraph', text: 'β 衰变放出的电子来自原子核内部：一个中子变成了一个质子，同时放出一个电子（和一个几乎察觉不到的反中微子）。所以新核质量数不变，电荷数增加1。例如钍-234 变成镤-234：Th-234 → Pa-234 + e（电子）。' },
      { type: 'keypoint', label: '重点·β 衰变的本质', text: 'β 衰变的实质是核内一个<strong>中子变成质子并放出电子</strong>：质量数不变，电荷数加1。可以记作"β 衰变：质量数不变，电荷数 +1"。' },
      { type: 'list', items: [
        'α 衰变：质量数 −4，电荷数 −2',
        'β 衰变：质量数不变，电荷数 +1',
        '配平口诀："上下看质量数、左右看电荷数，两边各自相等"',
        '写方程时先根据守恒算出未知核的质子数和质量数，再查元素周期表写出元素符号'
      ] },
      { type: 'heading', text: '四、半衰期' },
      { type: 'paragraph', text: '放射性元素的原子核不是同时衰变的，有的先变、有的后变。我们把"一半原子核发生衰变所需要的时间"叫做半衰期，记做 T。半衰期是每种放射性元素特有的"身份证"，比如铀-238 的半衰期约为45亿年，而氡-222 只有约3.8天。' },
      { type: 'keypoint', label: '重点·半衰期', text: '<strong>半衰期是放射性元素的原子核有半数发生衰变所需的时间。</strong>经过时间 t 后，剩余原子核数 N = N₀ × (1/2)^(t/T)，其中 N₀ 是初始原子核数。' },
      { type: 'warn', label: '易错', text: '<strong>半衰期是大量原子核的统计规律，对单个原子核没有意义。</strong>不能问"某个原子核的半衰期是多少"，只能说"一群该种原子核的平均寿命"。另外，半衰期由<strong>原子核内部结构决定</strong>，与温度、压强、是单质还是化合物都无关。' },
      { type: 'paragraph', text: '用半衰期公式时，t 和 T 必须取相同单位。若经过了 n 个半衰期（即 t = nT），则剩余比例为 (1/2)ⁿ。例如经过两个半衰期，还剩四分之一；经过三个半衰期，还剩八分之一。' },
      { type: 'example', label: '例题·半衰期计算', text: '某种放射性元素半衰期为2天，现有64克该元素，问6天后还剩多少克？<br><strong>解析</strong>：<br>6天包含 6 / 2 = 3 个半衰期。剩余质量 = 64 × (1/2)³ = 64 × 1/8 = 8 克。所以6天后还剩8克。' },
      { type: 'tip', label: '提示', text: '<strong>做题小技巧：</strong>先算 t 是 T 的几倍（n = t/T），再用 (1/2)ⁿ 求剩余比例，比直接套公式更不容易出错。质量、原子核数、放射性强弱都按同一比例衰减。' },
      { type: 'table', headers: ['衰变类型', '放出粒子', '质量数变化', '电荷数变化', '新核位置'], rows: [
        ['α 衰变', 'He-4（氦核）', '减 4', '减 2', '周期表向左移2格'],
        ['β 衰变', '电子 e', '不变', '加 1', '周期表向右移1格'],
        ['γ 射线', '光子（常伴随）', '不变', '不变', '核内能级变化，元素不变']
      ] },
      { type: 'heading', text: '五、核反应方程配平方法归纳' },
      { type: 'list', items: [
        '第一步：看清反应类型（衰变、人工转变、裂变、聚变）',
        '第二步：列出已知核的质量数和电荷数',
        '第三步：用"质量数守恒、电荷数守恒"列方程，求未知核',
        '第四步：用求出的电荷数查元素周期表确定元素符号，写出完整方程',
        '注意：方程中的箭头"→"表示核反应方向，不是等号'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">α 衰变：质量数−4，电荷数−2</text><rect x="60" y="70" width="180" height="160" rx="12" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="150" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">母核 U-238</text><text x="150" y="150" font-size="13" fill="#234b45" text-anchor="middle">电荷数 92</text><text x="150" y="180" font-size="13" fill="#234b45" text-anchor="middle">质量数 238</text><polygon points="280,150 300,142 300,158" fill="#4fb3a5"/><line x1="240" y1="150" x2="290" y2="150" stroke="#4fb3a5" stroke-width="3"/><rect x="310" y="70" width="160" height="160" rx="12" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="390" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">子核 Th-234</text><text x="390" y="150" font-size="13" fill="#234b45" text-anchor="middle">电荷数 90 (−2)</text><text x="390" y="180" font-size="13" fill="#234b45" text-anchor="middle">质量数 234 (−4)</text><rect x="500" y="120" width="120" height="60" rx="10" fill="#4fb3a5"/><text x="560" y="148" font-size="13" fill="#234b45" text-anchor="middle">放出 He-4</text><text x="560" y="170" font-size="12" fill="#234b45" text-anchor="middle">(+2, 质量4)</text></svg>', caption: '图1　α 衰变：母核放出一个氦核，子核质量数减4、电荷数减2。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">β 衰变：中子变质子，电荷数+1</text><rect x="80" y="80" width="200" height="160" rx="12" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="110" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">核内一个中子 n</text><text x="180" y="160" font-size="40" fill="#234b45" text-anchor="middle">→</text><rect x="400" y="80" width="200" height="160" rx="12" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="110" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">变成质子 p+</text><text x="500" y="160" font-size="13" fill="#234b45" text-anchor="middle">并放出电子 e</text><circle cx="520" cy="200" r="8" fill="#4fb3a5"/><text x="520" y="222" font-size="12" fill="#234b45" text-anchor="middle">e(−)</text><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">质量数不变，电荷数 +1</text></svg>', caption: '图2　β 衰变实质是核内中子变成质子并放出电子，质量数不变、电荷数加1。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">半衰期：剩余量按 (1/2)^(t/T) 衰减</text><polyline points="80,260 180,200 280,150 380,110 480,80 580,60" fill="none" stroke="#2e9e8f" stroke-width="3"/><line x1="80" y1="260" x2="600" y2="260" stroke="#234b45" stroke-width="2"/><line x1="80" y1="260" x2="80" y2="50" stroke="#234b45" stroke-width="2"/><text x="180" y="285" font-size="12" fill="#234b45" text-anchor="middle">1T</text><text x="280" y="285" font-size="12" fill="#234b45" text-anchor="middle">2T</text><text x="380" y="285" font-size="12" fill="#234b45" text-anchor="middle">3T</text><text x="480" y="285" font-size="12" fill="#234b45" text-anchor="middle">4T</text><text x="80" y="45" font-size="12" fill="#234b45" text-anchor="middle">剩余量</text><text x="340" y="305" font-size="12" fill="#234b45" text-anchor="middle">每过一个半衰期，数量减半</text></svg>', caption: '图3　半衰期衰减曲线：每经过一个半衰期 T，剩余原子核数（或质量）减半。' }
    ],
    exercises: [
      { type: 'choice', question: '关于原子核衰变，下列说法正确的是？', options: ['衰变不遵守质量数守恒', 'α 衰变后新核质量数减4、电荷数减2', 'β 衰变后新核质量数减1', 'γ 射线衰变会改变元素种类'], answer: 'α 衰变后新核质量数减4、电荷数减2', explanation: '衰变严格遵守质量数守恒和电荷数守恒。α 衰变放出 He-4（质量数4、电荷数2），故新核质量数减4、电荷数减2；β 衰变质量数不变、电荷数加1；γ 射线只是能量释放，不改变元素种类。故只有"α 衰变后新核质量数减4、电荷数减2"正确。' },
      { type: 'choice', question: '关于半衰期，下列说法正确的是？', options: ['半衰期是单个原子核衰变所需时间', '半衰期由温度决定', '半衰期由原子核内部结构决定，与温度压强无关', '半衰期会随化合物状态改变'], answer: '半衰期由原子核内部结构决定，与温度压强无关', explanation: '半衰期是大量原子核的统计规律，对单个原子核无意义；它只由原子核内部结构决定，与外界的温度、压强、是单质还是化合物都无关。因此只有"半衰期由原子核内部结构决定，与温度压强无关"正确。' },
      { type: 'choice', question: '某放射性元素半衰期为3天，现有一定质量该元素，12天后剩余质量约为原来的？', options: ['1/2', '1/4', '1/8', '1/16'], answer: '1/16', explanation: '12天包含 12 / 3 = 4 个半衰期。每过一个半衰期剩余量减半，所以4个半衰期后剩余比例为 (1/2)⁴ = 1/16。故12天后剩余质量约为原来的十六分之一。' },
      { type: 'fill', question: '钍-234 发生 β 衰变生成镤-234，核反应方程可写为 Th-234 → Pa-234 + ___（填放出的粒子）。该过程质量数___（填"不变"或"减1"）。', answer: 'e（或电子） | 不变', explanation: 'β 衰变实质是核内一个中子变成质子并放出电子，质量数不变、电荷数加1。钍-234（质子数90）变成镤-234（质子数91）正好符合电荷数加1，所以放出的是电子 e，质量数保持不变。' },
      { type: 'fill', question: '配平核反应方程的根本依据是___守恒和___守恒两条规律。', answer: '质量数 | 电荷数', explanation: '任何核反应方程都必须满足质量数守恒和电荷数守恒。解题时先由这两条守恒求出未知核的电荷数和质量数，再查元素周期表写出元素符号。注意箭头表示反应方向，不是化学等号。' }
    ]
  });
})();
