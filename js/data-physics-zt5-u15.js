/* ============================================================
 * 高三复习 · 计算压轴 · 专题三 热学与近代物理计算
 * 课时15：原子物理与光电效应计算
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u15',
    name: '原子物理与光电效应计算（光子能量 ε=h×ν、光电效应方程、能级跃迁、质能方程 ΔE=Δm×c²）',
    chapter: '计算压轴 · 专题三 热学与近代物理计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、光子能量：ε = h × ν' },
      { type: 'paragraph', text: '光既有波动性又有粒子性。一束光可以看成由许多"光子"组成，每个光子的能量只跟它的频率 ν 有关：ε = h × ν，其中 h 是普朗克常量。频率越高（比如紫光比红光频率高），光子能量越大。光子能量也常用波长表示：因为 c = λ × ν，所以 ε = h × c / λ，波长越短能量越大。' },
      { type: 'keypoint', label: '重点·光子能量', text: '<strong>ε = h × ν = h × c / λ。</strong><br>频率 ν 越高、波长 λ 越短，光子能量越大。普朗克常量 h = 6.63×10⁻³⁴ J·s，也可取 h = 4.14×10⁻¹⁵ eV·s（算 eV 更方便）。' },
      { type: 'list', items: ['真空中光速 c = 3.0×10⁸ m/s', '普朗克常量 h = 6.63×10⁻³⁴ J·s = 4.14×10⁻¹⁵ eV·s', '1 eV = 1.6×10⁻¹⁹ J（电子伏特与焦耳换算）', '频率 ν 与波长 λ 关系：c = λ × ν'] },
      { type: 'heading', text: '二、光电效应与光电效应方程' },
      { type: 'paragraph', text: '用光照射金属表面，会有电子从金属里"跳"出来，这种现象叫光电效应，跳出来的电子叫光电子。但有个门槛：只有光的频率超过某个最小值（截止频率 ν₀），才能打出电子；低于这个频率，再亮的光也打不出电子。打出的光电子最大初动能 Eₖ 满足爱因斯坦光电效应方程。' },
      { type: 'keypoint', label: '重点·光电效应方程', text: '<strong>Eₖ = h × ν − W₀。</strong><br>Eₖ 是光电子最大初动能，h×ν 是入射光子能量，W₀ 是金属的逸出功（把电子"拉"出金属所需的最小能量）。只有当 h×ν > W₀（即 ν > ν₀ = W₀/h）时才有光电子。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">光电效应方程：Eₖ = hν − W₀</text><rect x="80" y="90" width="180" height="70" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="170" y="120" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">光子能量 hν</text><text x="170" y="142" font-size="12" fill="#234b45" text-anchor="middle">照到金属上</text><rect x="420" y="90" width="180" height="70" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="510" y="120" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">逸出功 W₀</text><text x="510" y="142" font-size="12" fill="#234b45" text-anchor="middle">被金属"扣留"</text><rect x="250" y="220" width="180" height="70" rx="10" fill="#4fb3a5"/><text x="340" y="250" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">初动能 Eₖ</text><text x="340" y="272" font-size="12" fill="#234b45" text-anchor="middle">= hν − W₀</text><line x1="260" y1="160" x2="320" y2="220" stroke="#2e9e8f" stroke-width="2"/><polygon points="320,214 320,226 332,220" fill="#2e9e8f"/><line x1="420" y1="160" x2="360" y2="220" stroke="#2e9e8f" stroke-width="2"/><polygon points="360,214 360,226 372,220" fill="#2e9e8f"/></svg>', caption: '图1　光电效应方程：光子能量减去逸出功，剩下的就是光电子的最大初动能。' },
      { type: 'list', items: ['截止频率 ν₀ = W₀ / h，低于它打不出光电子', '光强只影响光电子数目，不影响最大初动能', '最大初动能只由入射光频率决定，与光强无关', '光电子动能 Eₖ = (1/2) m vₘₐₓ²'] },
      { type: 'warn', label: '易错', text: '<strong>光电效应里"光强再大也没用"——若频率低于截止频率 ν₀，光再强也打不出电子；而频率够高时，光越强只是打出更多电子，不改变最大初动能。</strong><br>另外 Eₖ = hν − W₀ 中 W₀ 是逸出功（常数），常有人误写成与光强有关。' },
      { type: 'example', label: '例题·光电效应', text: '例：某金属逸出功 W₀ = 3.3 eV，用波长 λ = 300 nm 的光照射。已知 h = 4.14×10⁻¹⁵ eV·s，c = 3.0×10⁸ m/s。求光电子最大初动能。<br><strong>解析</strong>：光子频率 ν = c / λ = 3.0×10⁸ / (300×10⁻⁹) = 1.0×10¹⁵ Hz。光子能量 hν = 4.14×10⁻¹⁵ × 1.0×10¹⁵ = 4.14 eV。Eₖ = hν − W₀ = 4.14 − 3.3 = 0.84 eV。因为 Eₖ>0，能打出光电子。' },
      { type: 'heading', text: '三、原子能级与跃迁' },
      { type: 'paragraph', text: '氢原子里的电子只能待在一系列固定的"能级"上，能级用 n = 1,2,3… 标记，n 越小能量越低。基态 n=1 能量最低，E₁ = −13.6 eV；激发态能量 Eₙ = E₁ / n²。电子从高能级跳到低能级，会放出一个光子，光子能量等于两能级之差；从低能级"吸收"能量也能跳到高能级。' },
      { type: 'keypoint', label: '重点·能级公式', text: '<strong>Eₙ = E₁ / n²（氢原子），E₁ = −13.6 eV。</strong><br>跃迁时吸收或放出的光子能量 hν = |Eₘ − Eₙ|；从高能级 Eₘ 到低能级 Eₙ 发光，hν = Eₘ − Eₙ。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">氢原子能级与跃迁</text><line x1="120" y1="80" x2="560" y2="80" stroke="#2e9e8f" stroke-width="2"/><text x="95" y="84" font-size="13" fill="#234b45">n=1</text><text x="575" y="84" font-size="12" fill="#234b45">−13.6 eV</text><line x1="120" y1="140" x2="560" y2="140" stroke="#2e9e8f" stroke-width="2"/><text x="95" y="144" font-size="13" fill="#234b45">n=2</text><text x="575" y="144" font-size="12" fill="#234b45">−3.4 eV</text><line x1="120" y1="200" x2="560" y2="200" stroke="#2e9e8f" stroke-width="2"/><text x="95" y="204" font-size="13" fill="#234b45">n=3</text><text x="575" y="204" font-size="12" fill="#234b45">−1.51 eV</text><line x1="120" y1="260" x2="560" y2="260" stroke="#2e9e8f" stroke-width="2"/><text x="95" y="264" font-size="13" fill="#234b45">n=4</text><text x="575" y="264" font-size="12" fill="#234b45">−0.85 eV</text><path d="M 460 80 Q 360 200 200 200" stroke="#4fb3a5" stroke-width="2.5" fill="none"/><polygon points="200,194 200,206 188,200" fill="#4fb3a5"/><text x="350" y="150" font-size="12" fill="#234b45">发光 hν = E₂−E₄</text></svg>', caption: '图2　氢原子能级：电子从高能级跳向低能级时放出光子，光子能量等于两能级之差。' },
      { type: 'list', items: ['一群氢原子从 n 能级向下跃迁，最多发出 C(n,2) = n(n−1)/2 种频率的光', '从 n 到基态 n=1 的跃迁属于莱曼系（紫外）', '从 n 到 n=2 属于巴耳末系（可见光）', '吸收光子时只能吸收等于两能级之差的能量，不能"凑整"'] },
      { type: 'example', label: '例题·跃迁波长', text: '例：氢原子从 n=3 跃迁到 n=2，求放出光子的频率（已知 E₂ = −3.4 eV，E₃ = −1.51 eV，h = 4.14×10⁻¹⁵ eV·s）。<br><strong>解析</strong>：光子能量 hν = E₃ − E₂ = (−1.51) − (−3.4) = 1.89 eV。频率 ν = 1.89 / (4.14×10⁻¹⁵) ≈ 4.57×10¹⁴ Hz。这就是巴耳末系中一条可见光谱线。' },
      { type: 'heading', text: '四、质能方程：ΔE = Δm × c²' },
      { type: 'paragraph', text: '原子核发生变化时，会伴随质量的变化，同时释放或吸收巨大的能量。质量亏损 Δm（反应前后质量之差）和释放的能量 ΔE 由爱因斯坦质能方程联系：ΔE = Δm × c²。因为 c² = 9×10¹⁶ (m/s)²，很小一点质量亏损就能放出很大的能量，这正是核能与核武器的来源。' },
      { type: 'keypoint', label: '重点·质能方程', text: '<strong>ΔE = Δm × c²。</strong><br>Δm 是质量亏损（反应后比反应前少的质量），c = 3.0×10⁸ m/s，c² = 9×10¹⁶。1 u（原子质量单位）≈ 931.5 MeV。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">质能方程：质量亏损转化为能量</text><rect x="100" y="90" width="160" height="70" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="120" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">质量亏损 Δm</text><text x="180" y="142" font-size="12" fill="#234b45" text-anchor="middle">核反应前后差值</text><rect x="420" y="90" width="160" height="70" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="120" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">光速平方 c²</text><text x="500" y="142" font-size="12" fill="#234b45" text-anchor="middle">9×10¹⁶</text><rect x="260" y="220" width="160" height="70" rx="10" fill="#4fb3a5"/><text x="340" y="250" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">释放能量 ΔE</text><text x="340" y="272" font-size="12" fill="#234b45" text-anchor="middle">= Δm × c²</text><line x1="260" y1="160" x2="320" y2="220" stroke="#2e9e8f" stroke-width="2"/><polygon points="320,214 320,226 332,220" fill="#2e9e8f"/><line x1="420" y1="160" x2="360" y2="220" stroke="#2e9e8f" stroke-width="2"/><polygon points="360,214 360,226 372,220" fill="#2e9e8f"/></svg>', caption: '图3　质能方程：核反应中微小的质量亏损 Δm，乘以巨大的 c² 就转化为大量能量。' },
      { type: 'table', headers: ['物理量', '符号', '常用取值'], rows: [['普朗克常量', 'h', '6.63×10⁻³⁴ J·s = 4.14×10⁻¹⁵ eV·s'], ['真空中光速', 'c', '3.0×10⁸ m/s'], ['基态能量', 'E₁', '−13.6 eV'], ['电子伏特', '1 eV', '1.6×10⁻¹⁹ J'], ['质量单位', '1 u', '≈ 931.5 MeV']] },
      { type: 'warn', label: '易错', text: '<strong>单位要统一！用 eV 算就用 h=4.14×10⁻¹⁵ eV·s；用 J 算就用 h=6.63×10⁻³⁴ J·s，且 ν 必须用 Hz、λ 用 m。</strong><br>能级 Eₙ 是负值（束缚态），跃迁光子能量取"绝对值之差"，别把负号带进去减错。' },
      { type: 'tip', label: '提示', text: '<strong>三大计算的"钥匙"：光电用 Eₖ = hν − W₀；跃迁用 hν = |Eₘ − Eₙ|；核能用 ΔE = Δm c²。</strong><br>先判断考哪一块，再选公式、统一单位，基本都能一步到位。' },
      { type: 'example', label: '例题·质能方程', text: '例：某核反应质量亏损 Δm = 0.002 u，1 u 对应 931.5 MeV。求释放能量。<br><strong>解析</strong>：用 ΔE = Δm × c²，但直接用 1 u ↔ 931.5 MeV 更方便：ΔE = 0.002 × 931.5 ≈ 1.86 MeV。若用 J，1 MeV = 1.6×10⁻¹³ J，则 ΔE ≈ 1.86 × 1.6×10⁻¹³ ≈ 2.98×10⁻¹³ J。' }
    ],
    exercises: [
      { type: 'choice', question: '根据光电效应方程 Eₖ = hν − W₀，下列说法正确的是？', options: ['光强越大，光电子最大初动能越大', '只有 hν > W₀ 时才能打出光电子', 'ν₀ = h / W₀ 是截止频率', 'Eₖ 与入射光频率无关'], answer: '只有 hν > W₀ 时才能打出光电子', explanation: '光电效应方程 Eₖ = hν − W₀ 表明，光电子最大初动能随入射光频率 ν 增大而增大，与光强无关；只有当 hν > W₀（频率高于截止频率 ν₀ = W₀/h）时才有光电子射出。因此"只有 hν > W₀ 时才能打出光电子"正确。' },
      { type: 'choice', question: '氢原子从 n=2 跃迁到 n=1，已知 E₁ = −13.6 eV、E₂ = −3.4 eV，放出光子的能量约为？', options: ['10.2 eV', '17.0 eV', '3.4 eV', '13.6 eV'], answer: '10.2 eV', explanation: '跃迁放出的光子能量等于两能级之差：hν = E₂ − E₁ = (−3.4) − (−13.6) = 10.2 eV。注意能级是负值，相减时负负得正，结果是正数 10.2 eV，这正是莱曼系的一条谱线能量。' },
      { type: 'choice', question: '关于质能方程 ΔE = Δm × c²，下列说法正确的是？', options: ['质量可以消失变成能量', '质量亏损 Δm 越大，释放能量越大', 'c 是声速', '核反应前后总质量不变'], answer: '质量亏损 Δm 越大，释放能量越大', explanation: '质能方程说明质量与能量是等价的，核反应中"质量亏损"对应的能量被释放。ΔE = Δm × c² 表明 Δm 越大释放能量越多；c 是真空中光速 3.0×10⁸ m/s 而非声速；核反应前后质量数守恒但静止质量有亏损。' },
      { type: 'fill', question: '某种金属截止频率 ν₀ = 5.0×10¹⁴ Hz，普朗克常量 h = 6.63×10⁻³⁴ J·s，则其逸出功 W₀ = ___ J（用科学计数法，保留两位有效数字）。', answer: '3.3×10⁻¹⁹', explanation: '截止频率对应 hν₀ = W₀，所以 W₀ = h × ν₀ = 6.63×10⁻³⁴ × 5.0×10¹⁴ = 3.315×10⁻¹⁹ J，保留两位有效数字为 3.3×10⁻¹⁹ J。这就是把电子拉出该金属所需的最小能量。' },
      { type: 'fill', question: '一束波长 λ = 600 nm 的光，光子能量 ε = hc/λ。若 h = 6.63×10⁻³⁴ J·s、c = 3.0×10⁸ m/s，则 ε ≈ ___ ×10⁻¹⁹ J（保留两位有效数字）。', answer: '3.3', explanation: '先算频率 ν = c/λ = 3.0×10⁸ / (600×10⁻⁹) = 5.0×10¹⁴ Hz。光子能量 ε = hν = 6.63×10⁻³⁴ × 5.0×10¹⁴ = 3.315×10⁻¹⁹ J ≈ 3.3×10⁻¹⁹ J。波长越长能量越小，600 nm 属可见光红光范围。' }
    ]
  });
})();
