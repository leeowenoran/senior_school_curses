/* 物理 · 选择性必修 第三册 · 第五章 原子核 · 课时：放射性衰变 */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u17',
    name: '放射性衰变',
    chapter: '选择性必修 第三册 · 第五章 原子核',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是放射性衰变' },
      { type: 'paragraph', text: '有些原子核天生"不稳定"，会自己变成另一种原子核，同时放出一些看不见的射线。这种不稳定的原子核自发地放出射线、变成新核的过程，就叫作<strong>放射性衰变</strong>。能发生这种变化的物质，我们说它"有放射性"。放射性是原子核本身的性质，和它是不是被加热、是不是和其他物质发生化学反应都没有关系。' },
      { type: 'keypoint', label: '重点·衰变与放射性', text: '<strong>放射性衰变是原子核自发放出射线、变成另一种原子核的过程。</strong>常见的射线来自三种衰变：α 衰变、β 衰变、γ 衰变。射线带走的不仅是能量，有时还带走电荷和粒子。' },
      { type: 'paragraph', text: '衰变放出的射线主要有三种，物理学家按希腊字母分别叫做 α（阿尔法）、β（贝塔）、γ（伽马）。它们放出的东西不一样，对原子核的影响也不一样。下面一个一个看。' },
      { type: 'list', items: ['α 衰变：放出氦核（由2个质子、2个中子组成，带2份正电）', 'β 衰变：放出电子（带1份负电）', 'γ 衰变：放出高能光子（一种电磁波，不带电、质量为零）'] },
      { type: 'heading', text: '二、α 衰变：放出氦核' },
      { type: 'paragraph', text: 'α 粒子其实就是氦原子的原子核：2 个质子加 2 个中子，带着 2 份正电荷。当某个原子核发生 α 衰变时，它会"吐出"一个 α 粒子。结果就是：原来的核少掉 2 个质子和 2 个中子，所以新核的<strong>核电荷数 Z 减少 2</strong>，<strong>质量数 A 减少 4</strong>。比如铀238 放出一个 α 粒子后，变成钍234（Z 从 92 减到 90，A 从 238 减到 234）。' },
      { type: 'keypoint', label: '重点·α 衰变的规律', text: '<strong>α 衰变后：新核的电荷数 Z 减 2，质量数 A 减 4。</strong>因为放走的是 2 个质子（电荷少2）和 2 个中子（质量少4）。记法：减2减4。' },
      { type: 'example', label: '例题·α 衰变后变成什么', text: '镭226 发生一次 α 衰变。已知镭的核电荷数 Z＝88，质量数 A＝226。<br>问：衰变后得到的新核，Z 和 A 各是多少？<br><br><strong>解析</strong>：<br>α 衰变使 Z 减 2：新核 Z ＝ 88 − 2 ＝ 86。<br>α 衰变使 A 减 4：新核 A ＝ 226 − 4 ＝ 222。<br>所以新核是 Z＝86、A＝222 的原子核（它是氡222）。' },
      { type: 'heading', text: '三、β 衰变：放出电子' },
      { type: 'paragraph', text: 'β 衰变放出来的是电子（带 1 份负电）。原子核里本来没有电子，电子是衰变时由中子"变成"质子时顺带产生的（一个中子变成一个质子，并放出一个电子）。因为多出了 1 个质子、少掉了带走的 1 个负电荷，所以新核的<strong>核电荷数 Z 增加 1</strong>；而质量数 A 不变（质子和中子都是核子，一个中子变一个质子，核子总数没变）。比如碳14 发生 β 衰变后变成氮14（Z 从 6 加到 7，A 还是 14）。' },
      { type: 'keypoint', label: '重点·β 衰变的规律', text: '<strong>β 衰变后：新核的电荷数 Z 加 1，质量数 A 不变。</strong>原因是核内一个中子变成了质子并放出一个电子，核子总数没变，所以 A 不变；质子多了一个，所以 Z 加 1。记法：加1不变。' },
      { type: 'warn', label: '易错', text: 'β 衰变放出的电子<strong>不是原子核里原来就有的电子</strong>，而是衰变瞬间由中子变成质子时产生的。另外，常有人把"β 衰变质量数 A 不变"记错成"也减1"。记住：中子（质量数1）变成质子（质量数1），核子总数没变，所以 A 一点都不变。' },
      { type: 'heading', text: '四、γ 衰变：放出高能光子' },
      { type: 'paragraph', text: 'γ 射线本质上是一种波长极短、能量很高的电磁波（光子）。它不带电、质量为零。发生 γ 衰变时，原子核的<strong>电荷数 Z 和质量数 A 都不变</strong>——原子核只是从"能量较高"的状态跳回"能量较低"的状态，把多余的能量以光子的形式放出来。所以 γ 衰变常常跟在 α 或 β 衰变之后，像是原子核"抖掉"多余能量。' },
      { type: 'tip', label: '提示·三种衰变怎么记', text: '把三句话连起来记最省事：<strong>α 衰变减2减4（Z−2，A−4）；β 衰变加1不变（Z＋1，A不变）；γ 衰变都不变（Z、A 都不变）</strong>。做题时先看放出的是什么，再决定 Z 和 A 怎么变。' },
      { type: 'table', headers: ['衰变类型', '放出的东西', 'Z 的变化', 'A 的变化'], rows: [['α 衰变', '氦核（2质子2中子）', '减 2', '减 4'], ['β 衰变', '电子', '加 1', '不变'], ['γ 衰变', '高能光子（电磁波）', '不变', '不变']] },
      { type: 'heading', text: '五、半衰期：一半原子核衰变要多久' },
      { type: 'paragraph', text: '单个原子核什么时候衰变，完全是随机的、说不准的。但对一大堆同种放射性原子核来说，却有一个很稳定的统计规律：每隔一段固定的时间，就大约有一半的原子核发生了衰变。这段"让半数原子核衰变所需的时间"，叫作<strong>半衰期</strong>，用字母 τ（读作 tau）表示。比如某物质的半衰期是 1 天，那么 1 天后剩一半，2 天后剩四分之一，3 天后剩八分之一，依此类推。' },
      { type: 'keypoint', label: '重点·半衰期', text: '<strong>半衰期是半数原子核发生衰变所需的时间。</strong>它是大量原子核的统计规律，不是每个核都准时在半衰期那一刻衰变。半衰期由原子核种类决定。' },
      { type: 'list', items: ['半衰期只由原子核种类决定，是原子核的固有属性', '半衰期与外界温度、压强、化学状态等条件无关', '半衰期只对大量原子核的统计结果有意义，对单独一个核谈半衰期没意义'] },
      { type: 'warn', label: '易错', text: '半衰期<strong>与化学状态、温度、压强等外界条件无关</strong>。无论把放射性物质加热、冷却、压成粉末还是和其他元素化合，它的半衰期都不变——因为这是原子核内部的性质。不要误以为"加热能让它衰变得更快"。另外，半衰期只对大量原子核有意义，对单独一个核谈半衰期没有意义。' },
      { type: 'example', label: '例题·用半衰期算剩余量', text: '某种放射性物质原有 100 克，半衰期是 2 小时。<br>问：经过 6 小时后，还大约剩多少克没衰变？<br><br><strong>解析</strong>：<br>6 小时里包含的半衰期个数 ＝ 6 ÷ 2 ＝ 3 个。<br>每过一个半衰期剩一半：<br>1 个后剩 50 克，2 个后剩 25 克，3 个后剩 12.5 克。<br>所以经过 6 小时，大约还剩 12.5 克未衰变。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">α 衰变：放出氦核，Z减2、A减4</text><circle cx="180" cy="160" r="46" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="165" font-size="13" fill="#234b45" text-anchor="middle">母核</text><circle cx="320" cy="120" r="22" fill="#4fb3a5"/><text x="320" y="125" font-size="12" fill="#234b45" text-anchor="middle">α</text><text x="320" y="100" font-size="12" fill="#234b45" text-anchor="middle">氦核(2p+2n)</text><circle cx="470" cy="200" r="40" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="470" y="205" font-size="13" fill="#234b45" text-anchor="middle">子核</text><polygon points="206,150 250,138 250,162" fill="#234b45"/><polygon points="352,132 392,124 392,142" fill="#234b45"/><text x="180" y="232" font-size="13" fill="#234b45" text-anchor="middle">原核 Z、A</text><text x="470" y="262" font-size="13" fill="#234b45" text-anchor="middle">新核 Z-2、A-4</text><text x="340" y="288" font-size="12" fill="#234b45" text-anchor="middle">放走2个质子+2个中子，质量数与电荷数都减小</text></svg>', caption: '图1　α 衰变时原子核放出一个氦核（2个质子、2个中子），导致新核的 Z 减 2、A 减 4。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">β 衰变：中子变质子放电子，Z加1、A不变</text><circle cx="180" cy="160" r="46" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="165" font-size="13" fill="#234b45" text-anchor="middle">母核</text><text x="320" y="120" font-size="22" fill="#234b45" text-anchor="middle" font-weight="bold">e⁻</text><text x="320" y="100" font-size="12" fill="#234b45" text-anchor="middle">放出的电子</text><circle cx="470" cy="200" r="40" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="470" y="205" font-size="13" fill="#234b45" text-anchor="middle">子核</text><polygon points="206,150 250,138 250,162" fill="#234b45"/><polygon points="352,132 392,124 392,142" fill="#234b45"/><text x="180" y="232" font-size="13" fill="#234b45" text-anchor="middle">原核 Z、A</text><text x="470" y="262" font-size="13" fill="#234b45" text-anchor="middle">新核 Z+1、A不变</text><text x="340" y="288" font-size="12" fill="#234b45" text-anchor="middle">核内一个中子变成质子，核子总数没变</text></svg>', caption: '图2　β 衰变时核内一个中子变为质子并放出一个电子，新核的 Z 加 1，而质量数 A 不变。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">半衰期：每过一个τ，剩余量减半</text><rect x="70" y="80" width="120" height="160" rx="6" fill="#4fb3a5"/><text x="130" y="258" font-size="12" fill="#234b45" text-anchor="middle">初始 100%</text><rect x="230" y="120" width="120" height="120" rx="6" fill="#4fb3a5"/><text x="290" y="258" font-size="12" fill="#234b45" text-anchor="middle">1个τ 后 50%</text><rect x="390" y="160" width="120" height="80" rx="6" fill="#4fb3a5"/><text x="450" y="258" font-size="12" fill="#234b45" text-anchor="middle">2个τ 后 25%</text><rect x="550" y="200" width="100" height="40" rx="6" fill="#4fb3a5"/><text x="600" y="258" font-size="12" fill="#234b45" text-anchor="middle">3个τ 后 12.5%</text><text x="340" y="288" font-size="12" fill="#234b45" text-anchor="middle">每个τ（半衰期）后剩下的一半，与温度、化学状态无关</text></svg>', caption: '图3　半衰期 τ 是半数原子核衰变所需时间；每过一个 τ，未衰变的原子核数量大约减半。' }
    ],
    exercises: [
      { type: 'choice', question: '某原子核发生一次 α 衰变后，新核的电荷数 Z 和质量数 A 如何变化？', options: ['Z 减 2，A 减 4', 'Z 加 1，A 不变', 'Z 不变，A 不变', 'Z 减 1，A 减 4'], answer: 'Z 减 2，A 减 4', explanation: 'α 衰变放出一个 α 粒子，而 α 粒子就是由 2 个质子和 2 个中子组成的氦核。放走 2 个质子使新核电荷数 Z 减少 2；放走 2 个质子加 2 个中子共 4 个核子，使质量数 A 减少 4。所以正确变化是 Z 减 2、A 减 4。' },
      { type: 'choice', question: '关于 β 衰变，下列说法正确的是？', options: ['β 衰变放出的是原子核里原来就有的电子', 'β 衰变后新核的 Z 加 1、A 不变', 'β 衰变后新核的 A 减 1', 'β 衰变放出的是氦核'], answer: 'β 衰变后新核的 Z 加 1、A 不变', explanation: 'β 衰变时，原子核内的一个中子变成质子并放出一个电子，这个电子并非核里原本就有。质子多了一个，所以 Z 加 1；一个中子变一个质子，核子总数不变，所以 A 不变。因此"Z 加 1、A 不变"正确，其余说法均有错误。' },
      { type: 'choice', question: '半衰期是指？', options: ['原子核全部衰变所需的时间', '半数原子核发生衰变所需的时间', '原子核开始衰变所需的时间', '温度升高一半所需的时间'], answer: '半数原子核发生衰变所需的时间', explanation: '半衰期是放射性元素的原子核有半数发生衰变所需要的时间，它是大量原子核的统计规律。半衰期由原子核种类决定，与外界的温度、压强、化学状态等都无关，也不是全部衰变所需的时间（理论上全部衰变需要无穷长）。' },
      { type: 'fill', question: '某放射性物质半衰期为 3 天，原有 80 克。经过 9 天后，大约还剩___克未衰变。', answer: '10', explanation: '9 天包含的半衰期个数为 9 ÷ 3 ＝ 3 个。每过一个半衰期剩余量减半：80 克 → 40 克 → 20 克 → 10 克。所以经过 3 个半衰期后大约还剩 10 克未衰变（实际是统计意义上的平均值）。' },
      { type: 'fill', question: '把放射性物质加热到很高温度，它的半衰期会___（填"变长""变短"或"不变"）。', answer: '不变', explanation: '半衰期是原子核内部的性质，由原子核的种类决定，与外界条件如温度、压强、化学状态、是否加热等都无关。无论加热还是冷却，半衰期都保持不变，加热并不会让衰变变快或变慢。' }
    ]
  });
})();
