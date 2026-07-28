/* ============================================================
 * 高二物理 · 选择性必修第一册 · 第三章 机械波
 * 课时14：波的描述（波长 λ、波速 v、频率 f、v = λ × f）
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u14',
    name: '波的描述',
    chapter: '选择性必修第一册 · 第三章 机械波',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、波长 λ：两个相邻"相同花样"之间的距离' },
      { type: 'paragraph', text: '要想说清楚一个波"长什么样"，最直观的就是量一量它一个周期对应多长。想象把抖动绳子的波形画在纸上，相邻的两个"鼓起来"（波峰）之间，是一段完整重复的花样。这段花样在传播方向上占的长度，就是波长，用希腊字母 λ（lambda）表示，单位是米。' },
      { type: 'keypoint', label: '重点·什么是波长', text: '<strong>波长 λ 是波在一个周期内向前传播的距离，也就是相邻两个相同振动状态（如相邻两个波峰，或相邻两个波谷）之间的距离。</strong>只要两个点在波形上"长得一模一样"并且紧挨着，它们之间的间隔就是一个波长。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">波长 λ：相邻两个波峰之间的距离</text><path d="M 50 200 Q 100 110 150 200 T 250 200 T 350 200 T 450 200 T 550 200 T 630 200" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="100" cy="110" r="6" fill="#234b45"/><circle cx="300" cy="110" r="6" fill="#234b45"/><circle cx="500" cy="110" r="6" fill="#234b45"/><circle cx="200" cy="290" r="6" fill="#234b45"/><text x="100" y="98" font-size="12" fill="#234b45" text-anchor="middle">波峰</text><text x="300" y="98" font-size="12" fill="#234b45" text-anchor="middle">波峰</text><line x1="100" y1="150" x2="100" y2="250" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="4,3"/><line x1="300" y1="150" x2="300" y2="250" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="4,3"/><line x1="100" y1="160" x2="300" y2="160" stroke="#234b45" stroke-width="2"/><polygon points="100,160 113,154 113,166" fill="#234b45"/><polygon points="300,160 287,154 287,166" fill="#234b45"/><text x="200" y="152" font-size="14" fill="#234b45" text-anchor="middle">λ</text><line x1="60" y1="300" x2="620" y2="300" stroke="#234b45" stroke-width="2"/><polygon points="628,300 614,294 614,306" fill="#234b45"/><text x="340" y="318" font-size="12" fill="#234b45" text-anchor="middle">波长等于相邻波峰（或波谷）之间的距离</text></svg>', caption: '图1　横波里相邻两个波峰之间的水平距离，就是一个波长 λ。' },
      { type: 'paragraph', text: '在纵波（比如声音）里，没有"峰"和"谷"，但有一疏一密的"花样"。纵波的波长，就是相邻两个密部中心之间的距离，或者相邻两个疏部中心之间的距离。道理都一样：找相邻且相同的花样，量它占多长。' },
      { type: 'heading', text: '二、频率 f：每秒振动多少次' },
      { type: 'paragraph', text: '频率说的是"快慢"：波源每秒钟完成多少次完整的上下（或前后）振动，就叫频率，用 f 表示，单位是赫兹（Hz）。1 赫兹就是每秒振动 1 次。频率越高，说明振动越快、音调越尖（对声音而言）。' },
      { type: 'keypoint', label: '重点·频率与周期', text: '<strong>频率 f 是波源每秒振动的次数，单位赫兹。</strong>它和周期 T（振动一次要多少秒）互为倒数：f = 1 / T，T = 1 / f。比如频率 2 赫兹，就是每秒振动 2 次，每次用 0.5 秒。' },
      { type: 'warn', label: '易错·频率由谁决定', text: '波的频率<strong>只由波源决定，跟介质无关</strong>。把一根嗡嗡响的音叉从空气里放进水里，它每秒振动的次数不变，所以频率不变。很多同学误以为"换个介质频率就变"，其实是波速和波长变了，频率还是原来那个。' },
      { type: 'heading', text: '三、波速 v：波每秒走多远' },
      { type: 'paragraph', text: '波在介质里是"跑"的，它跑的快慢就是波速，用 v 表示，单位是米/秒。波速说的是"波形整体每秒向前挪了多远"。注意它和质点自己的振动速度不是一回事：波速是"花样往前传"的速度，质点自己只在原地附近晃。' },
      { type: 'keypoint', label: '重点·什么是波速', text: '<strong>波速 v 是波在介质中向前传播的速度，等于波在 1 秒内传过的距离，单位米/秒。</strong>波速由介质本身的性质（如绳子的松紧、空气的软硬）决定，同一种波在不同介质里波速往往不同。' },
      { type: 'tip', label: '提示·不同介质波速不同', text: '<strong>声音在固体里跑得比在空气里快。</strong>比如敲一根长铁管，贴在管口能先后听到"铁传过来"和"空气传过来"两声响，说明声音在铁里的波速比在空气中大得多。换介质，波速会变，这很常见。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">波速 v：波在 1 秒内向前传过的距离</text><path d="M 60 160 Q 100 100 140 160 T 220 160 T 300 160" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="100" cy="100" r="6" fill="#234b45"/><text x="100" y="90" font-size="12" fill="#234b45" text-anchor="middle">起始波峰</text><line x1="100" y1="120" x2="100" y2="250" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="4,3"/><path d="M 320 160 Q 360 100 400 160 T 480 160 T 560 160" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="360" cy="100" r="6" fill="#234b45"/><text x="360" y="90" font-size="12" fill="#234b45" text-anchor="middle">t 秒后的波峰</text><line x1="360" y1="120" x2="360" y2="250" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="4,3"/><line x1="100" y1="215" x2="360" y2="215" stroke="#234b45" stroke-width="2"/><polygon points="360,215 347,209 347,221" fill="#234b45"/><polygon points="100,215 113,209 113,221" fill="#234b45"/><text x="230" y="205" font-size="14" fill="#234b45" text-anchor="middle">v × t</text><line x1="60" y1="270" x2="620" y2="270" stroke="#234b45" stroke-width="2"/><polygon points="628,270 614,264 614,276" fill="#234b45"/><text x="340" y="290" font-size="12" fill="#234b45" text-anchor="middle">经过 t 秒，波峰从左边移到右边，移动距离 = 波速 × 时间</text></svg>', caption: '图2　经过 t 秒，波峰向前挪动了 v × t 的距离，这个"挪动快慢"就是波速。' },
      { type: 'heading', text: '四、三个量的关系：v = λ × f' },
      { type: 'keypoint', label: '重点·核心公式', text: '<strong>波速 = 波长 × 频率，写作 v = λ × f。</strong>想一想：每秒振动 f 次，每次向前推出一个波长 λ，那么 1 秒内波总共向前走了 f 个 λ，也就是 v = λ × f。这是描述波最重要的一个式子。' },
      { type: 'example', label: '例题·算波速', text: '一列波在绳上传播，相邻两个波峰相距 2 米，波源每秒振动 5 次。求这列波的波速和周期。<br><br><strong>解析</strong>：<br>相邻波峰间距就是波长，所以 λ = 2 米。每秒振动 5 次，频率 f = 5 赫兹。<br>代入公式 v = λ × f = 2 米 × 5 = 10 米/秒。<br>周期 T = 1 / f = 1 / 5 秒 = 0.2 秒。即波速 10 米/秒，周期 0.2 秒。' },
      { type: 'warn', label: '易错·v、λ、f 别混淆', text: '三个量里<strong>只有频率由波源决定，波速由介质决定，波长则随两者一起变</strong>。波从一种介质钻进另一种介质时，频率不变（波源没换），但波速变了，于是波长 λ = v / f 也跟着变。别把"波速变了"和"频率变了"搞混。' },
      { type: 'list', items: ['波长 λ：相邻相同花样的距离，单位米，反映"一个周期有多长"', '频率 f：波源每秒振动次数，单位赫兹，只由波源决定', '波速 v：波每秒前进的距离，单位米/秒，由介质决定'] },
      { type: 'table', headers: ['物理量', '符号', '由什么决定', '常见单位'], rows: [['波长', 'λ', '由波速和频率共同决定（λ = v / f）', '米'], ['频率', 'f', '只由波源决定，与介质无关', '赫兹'], ['波速', 'v', '只由介质决定（如绳子松紧、空气性质）', '米/秒'], ['关系', 'v = λ × f', '三者互相联系，换介质时频率不变', '—']] },
      { type: 'tip', label: '提示·记忆窍门', text: '<strong>把波想成"工厂出货"：波源每秒出货 f 件，每件长 λ 米，那么传送带每秒送走的长度就是 v = λ × f。</strong>这样记，三个量的关系就不容易乱。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">三个量手拉手：v = λ × f</text><line x1="340" y1="80" x2="200" y2="220" stroke="#2e9e8f" stroke-width="2"/><line x1="340" y1="80" x2="480" y2="220" stroke="#2e9e8f" stroke-width="2"/><line x1="200" y1="220" x2="480" y2="220" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="80" r="28" fill="#4fb3a5"/><text x="340" y="86" font-size="17" fill="#234b45" text-anchor="middle" font-weight="bold">v</text><circle cx="200" cy="220" r="28" fill="#4fb3a5"/><text x="200" y="226" font-size="17" fill="#234b45" text-anchor="middle" font-weight="bold">λ</text><circle cx="480" cy="220" r="28" fill="#4fb3a5"/><text x="480" y="226" font-size="17" fill="#234b45" text-anchor="middle" font-weight="bold">f</text><text x="300" y="150" font-size="14" fill="#234b45" text-anchor="middle">λ × f</text><text x="450" y="150" font-size="14" fill="#234b45" text-anchor="middle">= v</text><text x="340" y="270" font-size="14" fill="#234b45" text-anchor="middle">波速 = 波长 × 频率</text></svg>', caption: '图3　波速、波长、频率三者由 v = λ × f 紧紧连在一起。' },
      { type: 'list', items: ['已知 λ 和 f，求波速：直接 v = λ × f', '已知 v 和 f，求波长：λ = v / f', '已知 v 和 λ，求频率：f = v / λ'] }
    ],
    exercises: [
      { type: 'choice', question: '关于波长 λ，下列说法正确的是？', options: ['波长是两个相邻波谷之间的距离', '波长是相邻两个波峰之间的距离', '波长是波源每秒振动的次数', '波长是波在 1 秒内传过的距离'], answer: '波长是相邻两个波峰之间的距离', explanation: '波长 λ 是相邻两个相同振动状态之间的距离，例如相邻两个波峰（或相邻两个波谷）之间的距离。波源每秒振动的次数是频率而不是波长；波在 1 秒内传过的距离是波速。因此只有"相邻两个波峰之间的距离"正确描述了波长。' },
      { type: 'choice', question: '关于波的频率 f，下列说法正确的是？', options: ['频率由介质决定', '频率只由波源决定，与介质无关', '波从空气进入水中频率会改变', '频率的单位是米/秒'], answer: '频率只由波源决定，与介质无关', explanation: '波的频率等于波源每秒振动的次数，它只由波源本身决定，与传播介质无关。把发声体从空气放入水中，它每秒振动次数不变，频率就不变；此时变化的是波速和波长。频率的单位是赫兹，不是米/秒。' },
      { type: 'choice', question: '波长 λ、频率 f、波速 v 三者之间的关系是？', options: ['v = λ × f', 'v = λ / f', 'v = f / λ', 'v = λ + f'], answer: 'v = λ × f', explanation: '波每秒振动 f 次，每振动一次向前推出一个波长 λ，所以 1 秒内波向前传播的总距离就是 f 个波长，即波速 v = λ × f。这是描述波的核心公式，也可变形为 λ = v / f 和 f = v / λ。' },
      { type: 'fill', question: '波的频率 f 与周期 T 互为倒数，关系式写作 f = ___（用 T 表示）。', answer: '1 / T', explanation: '周期 T 是波源振动一次所需的时间，频率 f 是每秒振动的次数。若一次用 T 秒，则 1 秒内能振动 1 / T 次，所以 f = 1 / T，二者互为倒数。例如周期 0.2 秒，频率就是 5 赫兹。' },
      { type: 'fill', question: '一列波从空气进入水中，波源没变，所以它的___保持不变，但由于介质改变，波速变了，于是波长也跟着变。', answer: '频率', explanation: '波的频率只由波源决定，与传播介质无关。当波从一种介质进入另一种介质时，波源没有更换，因此频率保持不变；而波速由介质性质决定会发生变化，根据 λ = v / f，波长便会随之改变。' }
    ]
  });
})();
