/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题四 原子结构和波粒二象性
 * 课时1：光电效应与光的粒子性（爱因斯坦光电效应方程）
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u11-l1',
    name: '光电效应与光的粒子性（爱因斯坦光电效应方程）',
    chapter: '热学与近代物理 · 专题四 原子结构和波粒二象性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是光电效应' },
      { type: 'paragraph', text: '用光（通常是紫外线或可见光）照射金属表面，会有电子从金属里跑出来，这种现象叫光电效应，跑出来的电子叫光电子。这就像光照在金属上，把金属里的电子"敲"了出来。光电效应是光具有粒子性的重要证据，也是理解原子结构的一扇门。' },
      { type: 'keypoint', label: '重点·光电效应', text: '<strong>光电效应是指光照射金属表面时，金属中有电子逸出的现象；逸出的电子叫光电子。</strong>注意光电子本质仍是普通电子，只是由光"打"出来的。' },
      { type: 'list', items: ['照射光能打出电子，前提是光的频率够高', '打出的光电子具有动能，可被电场减速或加速', '光电流的大小与入射光强（光的亮度）有关', '光电效应几乎在光照瞬间就发生，没有明显延迟'] },
      { type: 'heading', text: '二、光电效应的四条实验规律' },
      { type: 'keypoint', label: '重点·规律一 截止频率', text: '<strong>每种金属都有一个最低频率，叫截止频率（极限频率）ν0。只有入射光频率 ν > ν0 时才会发生光电效应；ν 低于 ν0，无论光多强、照多久都不行。</strong>这说明能否打出电子由频率决定，而不是光强。' },
      { type: 'keypoint', label: '重点·规律二 瞬时性', text: '<strong>光照到金属上，光电子几乎立刻（约 10⁻⁹ 秒以内）飞出，不存在明显的能量积累时间。</strong>这用"光是波动、要慢慢积累能量"的旧观点无法解释。' },
      { type: 'table', headers: ['实验事实', '经典波动说预测', '实际结果'], rows: [['能否发生由频率决定', '应由光强决定，与频率无关', '存在截止频率 ν0，低于则不发生'], ['光电子最大初动能', '应随光强增大而增大', '只随频率增大，与光强无关'], ['发生时间', '弱光需长时间积累', '瞬间发生，无延迟'], ['饱和光电流', '应与频率有关', '只与光强（光子数）有关']] },
      { type: 'warn', label: '易错', text: '<strong>光强和频率是两回事，别混为一谈。</strong>光强是"单位时间打到单位面积的光能量多少"，相当于光子数目多少；频率 ν 是单个光子的"颜色/能量高低"。能否打出电子看频率是否超过 ν0；打出的电流大小才看光强（光子数）。加大光强若频率不够，依旧一个电子也打不出。' },
      { type: 'heading', text: '三、爱因斯坦光子说与光电效应方程' },
      { type: 'paragraph', text: '爱因斯坦提出：光不是连续波浪，而是一份一份的"光子"（光量子）。每个光子的能量 ε = hν，其中 h 是普朗克常量（约 6.63×10⁻³⁴ J·s），ν 是光的频率。光子打到金属上，把能量交给一个电子；电子要先付出一份"逸出功" W0 才能脱离金属，剩下的就是它获得的动能。' },
      { type: 'list', items: ['光由一份份光子组成，每个光子能量 ε = hν', '金属中电子逸出需克服束缚，最少付出逸出功 W0', '一个光子把全部能量给一个电子，不存在多个光子凑一份', '剩余能量变成光电子的最大初动能'] },
      { type: 'keypoint', label: '重点·爱因斯坦光电效应方程', text: '<strong>光电子最大初动能 Ek = hν − W0。</strong>即单个光子的能量 hν，减去逸出金属所需的最小能量（逸出功 W0），剩下的就是电子获得的最大初动能。ν 越大，单个光子能量越高，光电子动能越大。' },
      { type: 'tip', label: '提示', text: '<strong>用"收支"记忆：收入 hν，支出 W0，结余 Ek。</strong>只有当收入 hν 大于支出 W0（即 ν > W0/h = ν0）时，才有结余、才有光电子飞出。这就是截止频率的来历。' },
      { type: 'heading', text: '四、遏止电压与截止频率' },
      { type: 'paragraph', text: '在光电管两端加反向电压，能把光电子"推"回去；当电压大到某一值 Uc 时，连动能最大的光电子也到不了对面，光电流刚好为零，这个电压叫遏止电压。它和最大初动能的关系是 eUc = Ek（e 是电子电荷量）。把 Ek = hν − W0 代入，可得 eUc = hν − W0，说明 Uc 与 ν 是一次函数关系，图像是一条直线。' },
      { type: 'keypoint', label: '重点·遏止电压与截止频率', text: '<strong>遏止电压 Uc 满足 eUc = Ek = hν − W0；截止频率 ν0 = W0 / h。</strong>Uc 随入射光频率 ν 线性增大，直线与横轴交点就是 ν0；纵轴截距相关于逸出功。' },
      { type: 'example', label: '例题·求最大初动能', text: '用频率 ν = 8.0×10¹⁴ Hz 的光照射某金属，其截止频率 ν0 = 5.0×10¹⁴ Hz，普朗克常量 h = 6.6×10⁻³⁴ J·s。求光电子最大初动能 Ek。<br><br><strong>解析</strong>：<br>逸出功 W0 = hν0 = 6.6×10⁻³⁴ × 5.0×10¹⁴ = 3.3×10⁻¹⁹ J。<br>由 Ek = hν − W0 = 6.6×10⁻³⁴ × 8.0×10¹⁴ − 3.3×10⁻¹⁹<br>= 5.28×10⁻¹⁹ − 3.3×10⁻¹⁹ = 1.98×10⁻¹⁹ J。<br>因 ν > ν0，确有光电子飞出。' },
      { type: 'warn', label: '易错', text: '<strong>Ek = hν − W0 给出的是"最大"初动能，不是每个电子的动能。</strong>金属内电子束缚能各不相同，有的电子付出比 W0 更多的能量才逸出，所以实际动能小于等于 Ek。另外，ν 必须严格大于 ν0 才行，等于 ν0 时 Ek = 0，刚好打不出电子。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">光电效应实验装置</text><circle cx="90" cy="150" r="26" fill="#4fb3a5"/><text x="90" y="155" font-size="12" fill="#234b45" text-anchor="middle" font-weight="bold">光源</text><line x1="116" y1="150" x2="240" y2="150" stroke="#2e9e8f" stroke-width="3"/><polygon points="240,150 226,144 226,156" fill="#2e9e8f"/><text x="178" y="138" font-size="12" fill="#234b45" text-anchor="middle">入射光</text><rect x="250" y="110" width="110" height="80" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="305" y="155" font-size="12" fill="#234b45" text-anchor="middle" font-weight="bold">金属板</text><line x1="360" y1="135" x2="470" y2="110" stroke="#234b45" stroke-width="2"/><circle cx="470" cy="108" r="5" fill="#234b45"/><text x="415" y="120" font-size="11" fill="#234b45" text-anchor="middle">光电子</text><rect x="490" y="110" width="100" height="80" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="540" y="155" font-size="12" fill="#234b45" text-anchor="middle" font-weight="bold">电流表</text><text x="340" y="265" font-size="13" fill="#234b45" text-anchor="middle">光照射金属打出电子，形成光电流</text></svg>', caption: '图1　光电效应实验：入射光照射金属板，打出光电子并被收集，形成可通过电流计检测的光电流。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">遏止电压 Uc 随频率 ν 线性增大</text><line x1="90" y1="250" x2="620" y2="250" stroke="#2e9e8f" stroke-width="3"/><line x1="120" y1="40" x2="120" y2="250" stroke="#2e9e8f" stroke-width="3"/><text x="80" y="150" font-size="13" fill="#234b45" text-anchor="middle" transform="rotate(-90 80 150)">Uc</text><text x="360" y="278" font-size="13" fill="#234b45" text-anchor="middle">入射光频率 ν</text><line x1="120" y1="120" x2="600" y2="40" stroke="#4fb3a5" stroke-width="3"/><circle cx="280" cy="251" r="5" fill="#234b45"/><text x="280" y="270" font-size="12" fill="#234b45" text-anchor="middle">ν0 截止频率</text><text x="470" y="120" font-size="13" fill="#234b45" text-anchor="middle">eUc = hν − W0</text></svg>', caption: '图2　遏止电压 Uc 与入射光频率 ν 成线性关系，直线在横轴交点即截止频率 ν0；ν 低于 ν0 时无光电子。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">一个光子能量的去向：hν = W0 + Ek</text><rect x="120" y="110" width="200" height="80" rx="8" fill="#4fb3a5"/><text x="220" y="155" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">光子能量 hν</text><rect x="340" y="110" width="130" height="80" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="405" y="145" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">逸出功 W0</text><rect x="480" y="110" width="130" height="80" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="545" y="145" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">动能 Ek</text><text x="220" y="230" font-size="13" fill="#234b45" text-anchor="middle">收入</text><text x="405" y="230" font-size="13" fill="#234b45" text-anchor="middle">支出</text><text x="545" y="230" font-size="13" fill="#234b45" text-anchor="middle">结余</text><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">只有 hν &gt; W0（ν &gt; ν0）时才有光电子飞出</text></svg>', caption: '图3　单个光子能量 hν 分为两部分：逸出功 W0 和电子获得的最大初动能 Ek，即 hν = W0 + Ek。' }
    ],
    exercises: [
      { type: 'choice', question: '关于光电效应，下列说法正确的是？', options: ['光强越大越容易发生光电效应', '只有入射光频率大于截止频率才会发生光电效应', '光电子的最大初动能随光强增大而增大', '光照后需要较长时间才能打出电子'], answer: '只有入射光频率大于截止频率才会发生光电效应', explanation: '光电效应能否发生取决于入射光频率是否大于该金属的截止频率 ν0，与光强无关；低于 ν0 时再强的光也打不出电子，A错。光电子最大初动能只随频率增大而增大，与光强无关，C错。光电效应是瞬时的，不存在长延迟，D错。' },
      { type: 'choice', question: '根据爱因斯坦光电效应方程 Ek = hν − W0，下列说法正确的是？', options: ['ν 越大，光电子最大初动能越小', 'ν 越大，光电子最大初动能越大', '光强越大，光电子最大初动能越大', 'W0 越大越容易发生光电效应'], answer: 'ν 越大，光电子最大初动能越大', explanation: '由 Ek = hν − W0 可知，对同一种金属（W0 固定），入射光频率 ν 越高，单个光子能量 hν 越大，光电子最大初动能 Ek 越大。光强只改变光子数目即光电流大小，不改变单个电子动能；逸出功 W0 越大的金属越难发生光电效应。' },
      { type: 'choice', question: '用波长更短（频率更高）的光照射同一金属，下列会增大的是？', options: ['截止频率 ν0', '遏止电压 Uc', '逸出功 W0', '饱和光电流一定增大'], answer: '遏止电压 Uc', explanation: '截止频率 ν0 = W0/h 和逸出功 W0 都只由金属本身决定，与入射光无关，不会因光改变。频率升高使光电子最大初动能 Ek 增大，由 eUc = Ek 知遏止电压 Uc 增大。饱和光电流取决于光强（光子数），频率升高不一定使其增大。' },
      { type: 'fill', question: '爱因斯坦光电效应方程为 Ek = ___（用 h、ν、W0 表示），其中 W0 是金属的逸出功，Ek 是光电子的最大初动能。', answer: 'hν−W0', explanation: '爱因斯坦提出光子能量 ε = hν，电子逸出金属最少要付出逸出功 W0，剩余能量成为光电子最大初动能，即 Ek = hν − W0。只有当 hν > W0（即 ν > W0/h = ν0）时，才有光电子逸出。' },
      { type: 'fill', question: '遏止电压 Uc 与光电子最大初动能的关系为 eUc = ___（填 Ek 或 W0），其中 e 为电子电荷量。', answer: 'Ek', explanation: '反向加电压把光电子推回，当电压达到遏止电压 Uc 时，动能最大的光电子也刚好到不了对面，电场做的负功 eUc 恰好抵消其最大初动能，故 eUc = Ek。再结合 Ek = hν − W0，可得 eUc = hν − W0，说明 Uc 与 ν 是一次函数关系。' }
    ]
  });
})();
