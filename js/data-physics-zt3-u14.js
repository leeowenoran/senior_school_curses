/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题四 原子结构和波粒二象性
 * 课时4：氢原子光谱与玻尔模型、能级跃迁问题
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u14-l1',
    name: '氢原子光谱与玻尔模型、能级跃迁问题',
    chapter: '热学与近代物理 · 专题四 原子结构和波粒二象性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、氢原子光谱是"线状谱"' },
      { type: 'paragraph', text: '让氢气放电发光，用分光镜把光分解，看到的不是连续的一片彩色，而是一条条彼此分开的亮线，这叫线状谱（明线光谱）。每种元素都有自己的特征亮线，相当于"元素指纹"。氢原子光谱的亮线还按一定规律排列（如巴耳末系在可见光区），这种规律用当时的经典物理完全无法解释，促使玻尔提出新模型。' },
      { type: 'keypoint', label: '重点·线状谱', text: '<strong>氢原子发光产生分立的亮线（线状谱），不是连续光谱。</strong>这说明原子的能量不是任意的，而是取一系列分立值；能级跃迁只能"跳"到某些特定的能量差，对应特定频率的光。' },
      { type: 'list', items: ['氢原子光谱由一条条分立的亮线组成，不是连续彩带', '不同系列（如巴耳末系）对应电子跃迁到不同末能级', '亮线位置（频率）由能级差决定，是原子的"指纹"', '经典物理预言原子应发出连续谱，与实际矛盾'] },
      { type: 'heading', text: '二、玻尔模型的三条假设' },
      { type: 'paragraph', text: '玻尔在卢瑟福核式模型基础上，引入量子思想，提出三条假设，成功解释了氢原子光谱。他保留了"电子绕核运动"的图像，但加上"能量量子化"的限制，从而化解了经典理论预言原子会塌缩的矛盾。' },
      { type: 'keypoint', label: '重点·假设一 定态', text: '<strong>定态假设：原子只能处于一系列能量分立的状态（定态），处于定态时电子虽绕核运动却不辐射能量。</strong>最低能量的定态叫基态，其余叫激发态。' },
      { type: 'keypoint', label: '重点·假设二 跃迁', text: '<strong>跃迁假设：原子在定态间跃迁时，吸收或放出能量，光子能量 hν = Em − En（m、n 为能级序号）。</strong>从高能级到低能级发射光子，从低能级到高能级吸收光子。' },
      { type: 'keypoint', label: '重点·假设三 轨道量子化', text: '<strong>轨道角动量量子化：电子轨道不是任意的，其角动量必须是 h/(2π) 的整数倍。</strong>由此推出能级分立，是玻尔模型的核心约束。' },
      { type: 'table', headers: ['玻尔假设', '核心内容', '作用'], rows: [['定态', '能量分立，定态不辐射', '解释原子稳定、不塌缩'], ['跃迁', 'hν = Em − En', '解释光谱亮线频率'], ['轨道量子化', '角动量为 h/2π 的整数倍', '推出能级公式']] },
      { type: 'warn', label: '易错', text: '<strong>玻尔模型不是完全经典的"行星轨道"。</strong>它只是半经典半量子理论：电子"轨道"是假说，真正精确描述要靠量子力学（电子是概率云）。另外，玻尔模型只成功解释了氢原子和类氢离子，对多电子原子效果不好，不能盲目推广。' },
      { type: 'heading', text: '三、能级公式与基态、激发态' },
      { type: 'paragraph', text: '由玻尔三条假设可推出氢原子的能级公式：第 n 级的能量 En = E1 / n²，其中 E1 = −13.6 eV 是基态能量（n = 1），负号表示电子被原子核束缚。n 越大，能级越高（负得越少），电子离核越远。n = 1 是基态，n ≥ 2 都是激发态；n 趋于无穷大时 En 趋于 0，表示电子刚好脱离原子（电离）。' },
      { type: 'keypoint', label: '重点·能级公式', text: '<strong>氢原子能级 En = E1 / n²，E1 = −13.6 eV（基态）。</strong>n = 1 为基态，n ≥ 2 为激发态；n 越大能量越高（越接近 0）。电离能是把电子打到 n→∞ 所需的能量。' },
      { type: 'tip', label: '提示', text: '<strong>算跃迁能量用差值：ΔE = Em − En = E1(1/m² − 1/n²)。</strong>若 E1 = −13.6 eV，则第一激发态（n = 2）能量为 −3.4 eV，与基态差 10.2 eV，对应巴耳末系之外的一条谱线。记住 E1 这个数值能快速估算跃迁光子能量。' },
      { type: 'heading', text: '四、能级跃迁与光谱线条数' },
      { type: 'paragraph', text: '当原子处于第 n 能级时，它可以跃迁到下面任意一个更低能级，每降一级就发出一种频率的光子。所有可能的"两两组合"对应不同的谱线。若从 n 能级向更低能级跃迁，最多可产生的不同谱线条数为 n(n−1)/2（即从 n 个能级中任选 2 个的组合数）。例如 n = 4 可发出 4×3/2 = 6 条；若是用电子轰击大量氢原子，则每种可能的跃迁都可能出现。' },
      { type: 'keypoint', label: '重点·谱线条数', text: '<strong>大量处于第 n 能级的原子向低能级跃迁，最多发出 n(n−1)/2 条不同谱线。</strong>吸收时只能吸特定频率；若用连续光照射，原子只吸收等于某两能级差的光子。' },
      { type: 'example', label: '例题·求跃迁光子频率', text: '氢原子从 n = 3 跃迁到 n = 1，求发出光子的能量（E1 = −13.6 eV）。<br><br><strong>解析</strong>：<br>E3 = E1 / 9 = −13.6 / 9 ≈ −1.51 eV；E1 = −13.6 eV。<br>光子能量 ΔE = E3 − E1 = (−1.51) − (−13.6) = 12.09 eV。<br>由 hν = ΔE 得 ν = 12.09 eV / h，这是一条紫外区的莱曼系谱线。' },
      { type: 'list', items: ['跃迁发光：从高能级到低能级，放出光子 hν = Em − En', '跃迁吸光：从低能级到高能级，吸收光子', '大量原子从 n 能级向下跃迁，最多产生 n(n−1)/2 条谱线', '电离：给基态电子至少 13.6 eV 即可脱离原子', '巴耳末系是跃迁到 n=2 的那组可见光谱线'] },
      { type: 'warn', label: '易错', text: '<strong>n(n−1)/2 是"最多条数"，前提是大量原子且可从任意高激发态往下跳。</strong>若只讨论"一个原子"从 n=4 出发，它一次只能走一条路径（如 4→2→1），但大量原子会各自走不同路径，所以统计上能看到全部 6 条。另外别把跃迁频率算成 En 本身，必须用两能级之差 hν = Em − En。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">氢原子光谱：分立的亮线（线状谱）</text><rect x="80" y="70" width="520" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="100" y1="100" x2="580" y2="100" stroke="#234b45" stroke-width="1" stroke-dasharray="3,3"/><rect x="150" y="92" width="6" height="16" fill="#4fb3a5"/><rect x="250" y="90" width="6" height="20" fill="#4fb3a5"/><rect x="360" y="88" width="6" height="24" fill="#4fb3a5"/><rect x="470" y="86" width="6" height="28" fill="#4fb3a5"/><rect x="540" y="84" width="6" height="32" fill="#4fb3a5"/><text x="340" y="170" font-size="13" fill="#234b45" text-anchor="middle">亮线位置由能级差决定，是原子的"指纹"</text><text x="340" y="210" font-size="12" fill="#4fb3a5" text-anchor="middle">不是连续彩带，而是一条条分开的线</text></svg>', caption: '图1　氢原子光谱是分立亮线组成的线状谱，每条线对应一次特定能级差的跃迁，是原子的特征"指纹"。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">玻尔能级图（En = E1 / n²）</text><line x1="120" y1="80" x2="600" y2="80" stroke="#2e9e8f" stroke-width="2"/><text x="90" y="84" font-size="12" fill="#234b45" text-anchor="middle">n=1</text><line x1="120" y1="120" x2="600" y2="120" stroke="#2e9e8f" stroke-width="2"/><text x="90" y="124" font-size="12" fill="#234b45" text-anchor="middle">n=2</text><line x1="120" y1="150" x2="600" y2="150" stroke="#2e9e8f" stroke-width="2"/><text x="90" y="154" font-size="12" fill="#234b45" text-anchor="middle">n=3</text><line x1="120" y1="172" x2="600" y2="172" stroke="#2e9e8f" stroke-width="2"/><text x="90" y="176" font-size="12" fill="#234b45" text-anchor="middle">n=4</text><line x1="120" y1="250" x2="600" y2="250" stroke="#234b45" stroke-width="2" stroke-dasharray="5,4"/><text x="360" y="270" font-size="12" fill="#234b45" text-anchor="middle">电离极限 E = 0（n→∞）</text><path d="M 360 120 L 360 82" stroke="#4fb3a5" stroke-width="3" fill="none"/><polygon points="360,80 354,92 366,92" fill="#4fb3a5"/><text x="400" y="100" font-size="11" fill="#234b45" text-anchor="middle">跃迁发光</text></svg>', caption: '图2　氢原子能级随 n 增大而升高（En = E1/n²），电子在不同能级间跃迁时发出或吸收特定能量的光子。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">n=4 的原子最多发出 6 条谱线</text><line x1="160" y1="80" x2="560" y2="80" stroke="#2e9e8f" stroke-width="2"/><text x="120" y="84" font-size="12" fill="#234b45" text-anchor="middle">n=4</text><line x1="160" y1="120" x2="560" y2="120" stroke="#2e9e8f" stroke-width="2"/><text x="120" y="124" font-size="12" fill="#234b45" text-anchor="middle">n=3</text><line x1="160" y1="160" x2="560" y2="160" stroke="#2e9e8f" stroke-width="2"/><text x="120" y="164" font-size="12" fill="#234b45" text-anchor="middle">n=2</text><line x1="160" y1="200" x2="560" y2="200" stroke="#2e9e8f" stroke-width="2"/><text x="120" y="204" font-size="12" fill="#234b45" text-anchor="middle">n=1</text><path d="M 360 80 L 360 200" stroke="#4fb3a5" stroke-width="2" fill="none"/><path d="M 360 120 L 360 200" stroke="#4fb3a5" stroke-width="2" fill="none"/><path d="M 360 160 L 360 200" stroke="#4fb3a5" stroke-width="2" fill="none"/><path d="M 360 80 L 360 160" stroke="#4fb3a5" stroke-width="2" fill="none"/><path d="M 360 80 L 360 120" stroke="#4fb3a5" stroke-width="2" fill="none"/><path d="M 360 120 L 360 160" stroke="#4fb3a5" stroke-width="2" fill="none"/><text x="380" y="250" font-size="13" fill="#234b45" text-anchor="middle">组合数 4×3/2 = 6 条</text></svg>', caption: '图3　大量处于 n=4 能级的氢原子向下跃迁，所有可能的两两组合共 6 条谱线（C(4,2)=4×3/2）。' }
    ],
    exercises: [
      { type: 'choice', question: '关于玻尔模型，下列说法正确的是？', options: ['电子绕核做任意轨道运动且不辐射能量', '原子只能处于一系列能量分立的定态', '氢原子光谱应是连续光谱', '玻尔模型完美解释了所有原子的光谱'], answer: '原子只能处于一系列能量分立的定态', explanation: '玻尔定态假设指出原子只能处于能量分立的状态，处于定态时电子虽绕核运动却不辐射能量，从而解释了原子的稳定性。轨道不是任意的（需满足角动量量子化），A错；正因能级分立，光谱才是线状谱而非连续谱，C错；玻尔模型只较好解释氢和类氢离子，对多电子原子不适用，D错。' },
      { type: 'choice', question: '氢原子从高能级 n = 3 跃迁到低能级 n = 1，放出光子的能量满足？', options: ['hν = E3 + E1', 'hν = E1 − E3', 'hν = E3 − E1', 'hν = E1 / E3'], answer: 'hν = E3 − E1', explanation: '跃迁假设规定，从高能级 Em 跳到低能级 En 时放出光子，光子能量等于两能级之差：hν = Em − En。这里 m = 3、n = 1，故 hν = E3 − E1。由于 E3 > E1（负得少），差值为正，对应发射一个光子。不能把 hν 误写成能级之和或比值。' },
      { type: 'choice', question: '大量处于 n = 4 能级的氢原子向低能级跃迁，最多可发出的不同谱线数为？', options: ['3 条', '4 条', '6 条', '10 条'], answer: '6 条', explanation: '从 n 个能级中任选两个进行跃迁，不同谱线数为组合数 C(n,2) = n(n−1)/2。n = 4 时，4×3/2 = 6 条。这是对大量原子的统计结果（每个原子一次只走一条路径，但众多原子覆盖所有路径），不要误算成 4 条或 n−1 条。' },
      { type: 'fill', question: '氢原子能级公式写作 En = ___ / n²，其中基态能量 E1 = −13.6 eV。', answer: 'E1', explanation: '玻尔推出氢原子第 n 能级能量 En = E1 / n²，其中 E1 = −13.6 eV 是基态（n=1）能量，负号表示电子受原子核束缚。n 越大能级越高（越接近0），n=1为基态，n≥2为激发态。该公式只适用于氢原子和类氢离子。' },
      { type: 'fill', question: '大量处于第 n 能级的氢原子向低能级跃迁，最多可发出的不同谱线数为 ___（用 n 表示）。', answer: 'n(n−1)/2', explanation: '每一条谱线对应一次从某一高能级到某一低能级的跃迁，从 n 个能级中任选两个的组合数为 C(n,2) = n(n−1)/2，这就是最多可能的不同谱线条数。前提是大量原子且可覆盖所有跃迁路径；若只讨论单个原子的连续下跳，一次过程看到的谱线要少得多。' }
    ]
  });
})();
