/* ============================================================
 * 高二物理 · 选择性必修 第三册 · 第四章 原子结构和波粒二象性
 * 课时14：光的粒子性
 * 数据注入：physics.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u14',
    name: '光的粒子性',
    chapter: '选择性必修 第三册 · 第四章 原子结构和波粒二象性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、光电效应现象' },
      { type: 'paragraph', text: '把一块金属板连到灵敏电流计上，放在真空管里，用光去照它。奇怪的事情发生了：只要光的频率足够高，金属板就会"吐"出电子，这些电子在电场作用下形成电流，电流计指针偏转。这种光照使金属发射电子的现象，就叫光电效应，被照出来的电子叫光电子。' },
      { type: 'keypoint', label: '重点·光电效应', text: '<strong>光电效应是：光照到金属表面时，金属中的电子吸收光的能量后逸出金属、成为光电子的现象。</strong>光电子在电路中形成电流，就叫光电流。' },
      { type: 'paragraph', text: '这个现象里藏着几个让经典理论"翻车"的事实。按古老的波动说，光是一种波，波的能量应该均匀铺在波面上，光越强能量越大，那不管什么颜色的光，只要照得够亮够久，都应该能把电子"晃"出来。可实验偏偏不这么干。' },
      { type: 'list', items: ['存在截止频率：入射光频率低于某个值 ν₀ 时，无论光多强、照多久，都不出电子', '光电子的最大初动能只随入射光频率增大而增大，与光强无关', '光照几乎瞬间（约10⁻⁹秒）就打出电子，没有可察觉的延迟'] },
      { type: 'heading', text: '二、爱因斯坦的光子说' },
      { type: 'paragraph', text: '1905年，爱因斯坦大胆提出：光并不只是连续的波，光本身也是一颗一颗的"能量包"，每一包叫一个光子（也叫光量子）。每个光子的能量不是任意的，而是和它频率成正比：ε = hν，其中 h 是普朗克常量，ν 是光的频率。' },
      { type: 'keypoint', label: '重点·光子说', text: '<strong>光由一份一份的光子组成，每个光子的能量 ε = hν（h 为普朗克常量，ν 为光的频率）。</strong>频率越高的光，每个光子的能量越大；光强越大，只是光子数目更多，并不改变单个光子的能量。' },
      { type: 'paragraph', text: '用光子说一看就通：一个电子要逃出金属，得"付"一笔"出场费"——把电子绑在金属里的能量，叫逸出功 W₀。一个光子撞上一个电子，把能量 hν 交给它。如果这笔能量够付逸出功，电子就能跑出来；如果不够，再多光子也只是"人海"而已，因为每个电子一次只能"吃"一个光子。' },
      { type: 'warn', label: '易错', text: '<strong>别以为"光越亮（越强）电子就跑得越快"。</strong>光强只代表单位时间里撞上来的光子更多、光电流更大，但每个光子的能量 ε = hν 只由频率决定。所以光电子的最大初动能只跟频率有关，跟光强无关；光强只影响打出电子的"个数"。' },
      { type: 'heading', text: '三、光电效应方程与截止频率' },
      { type: 'paragraph', text: '一个光子把能量 hν 交给电子后，电子先要付掉逸出功 W₀ 才能离开金属，剩下的能量就变成它飞出来时的最大初动能 ½ m v²。于是得到爱因斯坦光电效应方程。' },
      { type: 'keypoint', label: '重点·光电效应方程', text: '<strong>爱因斯坦方程：hν = W₀ + ½ m v²。其中 hν 是入射光子能量，W₀ 是金属的逸出功，½ m v² 是光电子的最大初动能。</strong>可见最大初动能等于光子能量减去逸出功。' },
      { type: 'paragraph', text: '既然要打出电子，至少要 hν ≥ W₀。把等号成立时的频率叫截止频率（也叫极限频率、红限）ν₀，令 hν₀ = W₀，就得到 ν₀ = W₀ / h。每种金属有自己的逸出功，也就有自己的截止频率。' },
      { type: 'keypoint', label: '重点·截止频率', text: '<strong>截止频率 ν₀ = W₀ / h。只有当入射光频率 ν ≥ ν₀ 时，才能发生光电效应；ν < ν₀ 时，无论光多强都不出电子。</strong>这就是实验里"低于某频率再亮也不行"的原因。' },
      { type: 'example', label: '例题·算截止频率', text: '某金属逸出功 W₀ = 3.3 eV，普朗克常量 h = 4.14×10⁻¹⁵ eV·s，求该金属的截止频率 ν₀（结果保留两位有效数字）。<br><br><strong>解析</strong>：<br>由 ν₀ = W₀ / h 得：<br>ν₀ = 3.3 / (4.14×10⁻¹⁵) ≈ 7.97×10¹⁴ Hz，约 8.0×10¹⁴ Hz。<br>只有频率高于这个值的光照上去，才能打出光电子。' },
      { type: 'table', headers: ['入射光变化', '光电子最大初动能', '光电流（电子数目）'], rows: [['频率 ν 增大（光强不变）', '增大（½ m v² = hν − W₀）', '基本不变'], ['光强增大（频率不变）', '不变', '增大（光子更多）'], ['频率低于 ν₀', '没有（不出电子）', '为零']] },
      { type: 'list', items: ['最大初动能 ½ m v² = hν − W₀，随频率 ν 线性增大，与光强无关', '光强只改变单位时间打出的电子数，改变光电流大小', '能否发生光电效应，唯一门槛是频率是否达到截止频率 ν₀'] },
      { type: 'warn', label: '易错', text: '<strong>"最大初动能与入射光频率成正比"这句话要加"最大"二字且注意是线性关系而非过原点。</strong>准确的式子是 ½ m v² = hν − W₀，它随 ν 增大而线性增大，但截距在 ν₀ 处才为零，不是 ν = 0 就为零；而且一定要说"最大初动能"，因为实际逸出电子动能有大有小，最大的是这个。' },
      { type: 'tip', label: '提示', text: '<strong>记住"一只羊一份草"：一个电子一次只接收一个光子的能量。</strong>所以电子能不能出来，取决于单个光子能量 hν 够不够付逸出功 W₀，而不取决于同时有多少光子在排队。光强加倍只是光子数加倍，每个光子还是那么"瘦"，电子初动能不变。' },
      { type: 'example', label: '例题·初动能与频率', text: '用频率 ν = 1.0×10¹⁵ Hz 的光照某金属（W₀ = 3.3 eV，hν = 4.14 eV）。求光电子的最大初动能，并说明加大光强会不会让它变大。<br><br><strong>解析</strong>：<br>最大初动能 ½ m v² = hν − W₀ = 4.14 − 3.3 = 0.84 eV。<br>加大光强只会让打出的电子更多（光电流更大），每个光子的能量 hν 不变，所以最大初动能仍是 0.84 eV，不会变大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">光电效应实验：光照金属打出电子</text><circle cx="120" cy="150" r="26" fill="#4fb3a5"/><text x="120" y="155" font-size="12" fill="#234b45" text-anchor="middle">光源</text><line x1="150" y1="150" x2="290" y2="150" stroke="#234b45" stroke-width="2" stroke-dasharray="4,4"/><polygon points="290,150 278,144 278,156" fill="#234b45"/><rect x="300" y="120" width="60" height="60" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="330" y="155" font-size="11" fill="#234b45" text-anchor="middle">金属</text><circle cx="370" cy="150" r="8" fill="#234b45"/><line x1="378" y1="150" x2="520" y2="150" stroke="#234b45" stroke-width="2"/><polygon points="520,150 508,144 508,156" fill="#234b45"/><rect x="520" y="120" width="50" height="60" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="545" y="155" font-size="11" fill="#234b45" text-anchor="middle">电流表</text><text x="340" y="240" font-size="12" fill="#234b45" text-anchor="middle">光子击中金属 → 逸出电子（光电子）→ 形成光电流</text></svg>', caption: '图1　光电效应实验装置：光照射金属板，逸出的电子形成可测的光电流。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">光子说：光是一份一份的能量包</text><circle cx="130" cy="150" r="18" fill="#4fb3a5"/><text x="130" y="155" font-size="11" fill="#234b45" text-anchor="middle">hν₁</text><circle cx="220" cy="150" r="18" fill="#4fb3a5"/><text x="220" y="155" font-size="11" fill="#234b45" text-anchor="middle">hν₁</text><circle cx="310" cy="150" r="18" fill="#4fb3a5"/><text x="310" y="155" font-size="11" fill="#234b45" text-anchor="middle">hν₁</text><text x="220" y="200" font-size="12" fill="#234b45" text-anchor="middle">低频光：每个光子能量小</text><circle cx="470" cy="150" r="26" fill="#234b45"/><text x="470" y="155" font-size="11" fill="#e6f4f1" text-anchor="middle">hν₂</text><text x="470" y="200" font-size="12" fill="#234b45" text-anchor="middle">高频光：每个光子能量大</text><text x="340" y="250" font-size="12" fill="#234b45" text-anchor="middle">光强 = 光子数目；单光子能量 ε = hν 只由频率决定</text></svg>', caption: '图2　光子说：光由一份份光子组成，光子能量 ε = hν 由频率决定，光强只改变光子数目。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">最大初动能随频率增大而增大（直线）</text><line x1="120" y1="250" x2="600" y2="250" stroke="#234b45" stroke-width="2"/><polygon points="600,250 588,244 588,256" fill="#234b45"/><line x1="120" y1="250" x2="120" y2="70" stroke="#234b45" stroke-width="2"/><polygon points="120,70 116,82 124,82" fill="#234b45"/><line x1="260" y1="250" x2="560" y2="90" stroke="#2e9e8f" stroke-width="3"/><circle cx="260" cy="250" r="7" fill="#4fb3a5"/><text x="260" y="272" font-size="11" fill="#234b45" text-anchor="middle">ν₀ (截止频率)</text><text x="340" y="150" font-size="12" fill="#234b45" text-anchor="middle">½ m v² = hν − W₀</text><text x="350" y="265" font-size="11" fill="#234b45" text-anchor="middle">入射光频率 ν</text><text x="100" y="100" font-size="11" fill="#234b45" text-anchor="middle">最大初动能</text></svg>', caption: '图3　光电子最大初动能随频率线性增大，ν < ν₀ 时为零（不发生光电效应）。' }
    ],
    exercises: [
      { type: 'choice', question: '关于光电效应，下列说法正确的是？', options: ['任何频率的光照到金属都能打出电子', '光照到金属表面使金属发射电子的现象叫光电效应', '光电子的最大初动能随光强增大而增大', '光电效应需要很长时间才能发生'], answer: '光照到金属表面使金属发射电子的现象叫光电效应', explanation: '光电效应是指光照射金属表面时，金属中的电子吸收光能量后逸出成为光电子的现象。它存在截止频率，只有频率够高才发生；光电子最大初动能只随频率增大而增大、与光强无关；而且几乎是瞬时发生的，没有可察觉延迟。' },
      { type: 'choice', question: '爱因斯坦光子说认为，单个光子的能量 ε 等于？', options: ['ε = hν', 'ε = h / ν', 'ε = ν / h', 'ε 与频率无关，只由光强决定'], answer: 'ε = hν', explanation: '光子说指出光由一份一份的光子组成，每个光子的能量 ε = hν，其中 h 是普朗克常量、ν 是光的频率。频率越高，单个光子能量越大；光强只表示单位时间内的光子数目多，不改变单个光子的能量。' },
      { type: 'choice', question: '根据爱因斯坦光电效应方程 hν = W₀ + ½ m v²，下列说法正确的是？', options: ['光强越大，光电子最大初动能越大', '光电子最大初动能随入射光频率增大而增大', '只要光强够大，任何频率都能打出电子', '最大初动能与频率和光强都无关'], answer: '光电子最大初动能随入射光频率增大而增大', explanation: '由方程变形得 ½ m v² = hν − W₀，最大初动能随频率 ν 线性增大、与光强无关。能否发生光电效应只看频率是否达到截止频率 ν₀ = W₀ / h；光强只影响打出电子的数目（光电流大小），不影响单个电子的最大初动能。' },
      { type: 'fill', question: '某种金属发生光电效应的最低频率叫截止频率，满足 ν₀ = ___ / h，其中 W₀ 是该金属的逸出功。', answer: 'W₀', explanation: '截止频率是恰好能打出电子的频率，此时光子能量全部用于克服逸出功，即 hν₀ = W₀，所以 ν₀ = W₀ / h。只有当入射光频率 ν ≥ ν₀ 时才能发生光电效应，低于它再多光也不行。' },
      { type: 'fill', question: '光电效应中，加大入射光的光强只会让打出的电子数目变多、光电流变大，但光电子的___（填"最大初动能"或"逸出功"）不变，因为它只由入射光的频率决定。', answer: '最大初动能', explanation: '光强增大意味着单位时间到达的光子更多，所以逸出的电子数增多、光电流增大；但每个光子的能量 ε = hν 只由频率决定，电子付掉逸出功 W₀ 后剩下的最大初动能 ½ m v² = hν − W₀ 与光强无关，只随频率增大而增大。' }
    ]
  });
})();
