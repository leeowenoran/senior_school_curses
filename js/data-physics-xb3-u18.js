/* 物理 · 选择性必修 第三册 · 第五章 原子核 · 课时：核反应与核能 */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u18',
    name: '核反应与核能',
    chapter: '选择性必修 第三册 · 第五章 原子核',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是核反应' },
      { type: 'paragraph', text: '让一个原子核和另一个粒子（比如中子、α 粒子）相撞，撞出新的原子核，这个过程就叫作<strong>核反应</strong>。它和前面说的衰变不同：衰变是原子核"自己"变，核反应是"被撞"才变。我们写核反应的时候，用一个"核反应方程"来表示，左边写反应前的粒子，右边写反应后的粒子，中间用箭头连接。' },
      { type: 'keypoint', label: '重点·核反应方程的两大守恒', text: '<strong>写任何核反应方程，都必须满足电荷数守恒和质量数守恒。</strong>也就是说：反应前后所有粒子的电荷数（Z）之和相等，质量数（A）之和也相等。这是检查方程对不对的两条铁律。' },
      { type: 'paragraph', text: '用守恒来配平：如果方程里缺一个粒子，我们只要看左右两边 Z 和 A 差多少，就能推出缺的粒子是什么。例如左边 Z 总和比右边多 2、A 多 4，那缺的就是一个 α 粒子（Z=2，A=4）。' },
      { type: 'list', items: ['电荷数守恒：反应前后 Z 的总和相等', '质量数守恒：反应前后 A 的总和相等', '靠这两条守恒，可以推出方程中未知粒子是什么'] },
      { type: 'example', label: '例题·用守恒配平方程', text: '已知某核反应：氮14 被一个 α 粒子轰击，生成氧17，并放出一个未知粒子 x。<br>写成：氮14 ＋ α → 氧17 ＋ x。<br>求 x 的电荷数和质量数。<br><br><strong>解析</strong>：<br>左边 A 总和 ＝ 14 ＋ 4 ＝ 18，右边已知 17 ＋ A(x)，所以 A(x) ＝ 1。<br>左边 Z 总和 ＝ 7 ＋ 2 ＝ 9，右边已知 8 ＋ Z(x)，所以 Z(x) ＝ 1。<br>质量数1、电荷数1 的粒子是质子（氢核）。所以 x 是质子。' },
      { type: 'warn', label: '易错', text: '核反应里<strong>质量数守恒，但不代表"质量"一点不损失</strong>。质量数 A 只是核子个数，而真实质量在反应后会略微减少（见下文质量亏损），这部分质量变成了能量。不要因为"质量数守恒"就误以为"总质量完全不变"。另外，配平时只能用 Z 和 A 守恒，不能用质量数去凑真实质量。' },
      { type: 'heading', text: '二、质量亏损：反应后质量略减' },
      { type: 'paragraph', text: '科学家发现一个奇怪又重要的现象：几个粒子结合成原子核之后，总质量会比它们各自分开时略微小一点点。这点"消失的质量"就叫作<strong>质量亏损</strong>。例如把 1 个质子和 1 个中子合成 1 个氘核，总质量会少大约 0.0024 个原子质量单位——数字很小，但对应的能量一点也不小。质量并没有真的消失，而是按质能方程转变成了能量。' },
      { type: 'keypoint', label: '重点·质量亏损', text: '<strong>质量亏损是组成原子核后，总质量比各核子单独质量之和略小的那部分质量。</strong>亏损的质量 Δm 不是没了，而是以能量的形式释放出来。' },
      { type: 'heading', text: '三、质能方程 E ＝ m c²' },
      { type: 'paragraph', text: '爱因斯坦告诉我们：质量和能量其实是同一回事的两种表现，它们可以互相换算。换算关系就是著名的质能方程：<strong>E ＝ m × c²</strong>。其中 E 是能量，m 是质量，c 是光在真空中的速度（约 3.0×10⁸ 米/秒）。因为 c 的平方是个极大的数，所以哪怕只亏损一丁点质量，算出来的能量也非常巨大。' },
      { type: 'keypoint', label: '重点·质能方程', text: '<strong>E ＝ m × c²</strong>。质量 m 和能量 E 可以互相转化，比例系数是 c²（光速的平方）。质量亏损 Δm 对应的释放能量为 Δ E ＝ Δm × c²。' },
      { type: 'tip', label: '提示·怎么用质能方程算能量', text: '实际计算时，常把质量亏损 Δm 代入 Δ E ＝ Δm × c²。注意单位要配套：若 Δm 用"千克(kg)"，c 用"米/秒"，得到的 E 就是"焦耳(J)"；若 Δm 用"原子质量单位(u)"，可记住 1 u 对应约 931 兆电子伏(MeV) 的能量，算起来更方便。' },
      { type: 'example', label: '例题·质量亏损换能量', text: '某核反应中质量亏损 Δm ＝ 0.0024 u（原子质量单位），已知 1 u 对应约 931 MeV。<br>问：这次反应大约释放多少能量？<br><br><strong>解析</strong>：<br>由 Δ E ＝ Δm × 931 MeV/u，得<br>Δ E ＝ 0.0024 × 931 ≈ 2.23 MeV。<br>所以这次反应大约释放 2.23 兆电子伏的能量。质量虽只少了一点点，能量却相当可观。' },
      { type: 'heading', text: '四、结合能与比结合能' },
      { type: 'paragraph', text: '把核子（质子和中子）分开需要外界提供能量，这个能量叫<strong>结合能</strong>；反过来，自由核子结合成原子核时会放出同样多的能量。为了更好地比较不同原子核的"结实程度"，我们用"每个核子平均分到的结合能"，也就是<strong>比结合能</strong>＝结合能 ÷ 核子数。比结合能越大，说明每个核子被"绑"得越紧，原子核越稳定。' },
      { type: 'keypoint', label: '重点·比结合能与稳定性', text: '<strong>比结合能＝结合能÷核子数。</strong>比结合能越大，原子核越稳定。<strong>中等质量（中等大小）的原子核比结合能最大、最稳定</strong>，很轻和很重的核都比它"松"一些。' },
      { type: 'table', headers: ['原子核类型', '比结合能大小', '稳定性', '说明'], rows: [['很轻的核（如氢、氦）', '较小', '相对不稳', '核子少，结合不紧'], ['中等质量核（如铁附近）', '最大', '最稳定', '每个核子绑得最紧'], ['很重的核（如铀）', '较小', '相对不稳', '核子多，内部易裂开']] },
      { type: 'warn', label: '易错', text: '不要混淆"结合能"和"比结合能"。<strong>重核（如铀）的总结合能很大，但它的比结合能却比中等核小。</strong>判断"稳不稳定、放不放能"要看比结合能，不是看总结合能的大小。重核裂变、轻核聚变都趋向"比结合能变大"的方向，所以都释放能量。' },
      { type: 'heading', text: '五、重核裂变与轻核聚变都放能' },
      { type: 'paragraph', text: '既然中等核最稳定，那么：把很重的核（比如铀）<strong>裂</strong>成两个中等核，产物比结合能变大，多余的能量就放出来，这叫<strong>重核裂变</strong>；把很轻的核（比如氢的同位素）<strong>聚</strong>到一起合成稍重一点的核，产物比结合能也变大，这叫<strong>轻核聚变</strong>。两者都会释放巨大能量，只是实现的方式不同。下一课会详细讲。' },
      { type: 'tip', label: '提示·一句话记住放能方向', text: '<strong>无论是裂变还是聚变，反应都朝着"比结合能变大、核子结合更紧"的方向走，因此都释放核能。</strong>可以想象成：散架的或太松的东西，变成"中等结实"的东西时会放出能量。' },
      { type: 'list', items: ['重核裂变：很重的核裂成中等核，比结合能变大，放出能量', '轻核聚变：很轻的核聚成稍重的核，比结合能也变大，放出能量', '两者放能的共同原因都是产物比结合能更大、更稳'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">核反应方程：电荷数、质量数都要守恒</text><rect x="40" y="110" width="160" height="80" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="120" y="150" font-size="14" fill="#234b45" text-anchor="middle">氮14</text><text x="120" y="172" font-size="12" fill="#234b45" text-anchor="middle">Z=7,A=14</text><rect x="220" y="110" width="120" height="80" rx="10" fill="#4fb3a5"/><text x="280" y="150" font-size="14" fill="#234b45" text-anchor="middle">α粒子</text><text x="280" y="172" font-size="12" fill="#234b45" text-anchor="middle">Z=2,A=4</text><text x="360" y="155" font-size="24" fill="#234b45">→</text><rect x="410" y="110" width="120" height="80" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="470" y="150" font-size="14" fill="#234b45" text-anchor="middle">氧17</text><text x="470" y="172" font-size="12" fill="#234b45" text-anchor="middle">Z=8,A=17</text><rect x="560" y="110" width="90" height="80" rx="10" fill="#4fb3a5"/><text x="605" y="150" font-size="14" fill="#234b45" text-anchor="middle">质子</text><text x="605" y="172" font-size="12" fill="#234b45" text-anchor="middle">Z=1,A=1</text><text x="340" y="240" font-size="13" fill="#234b45" text-anchor="middle">左右两边 Z 总和=9、A 总和=18，全部对上</text><text x="340" y="262" font-size="13" fill="#234b45" text-anchor="middle">这就是电荷数守恒与质量数守恒</text></svg>', caption: '图1　核反应方程必须满足电荷数守恒（Z 总和相等）和质量数守恒（A 总和相等），据此可推出未知粒子。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">质量亏损：Δm 变成能量 Δ E ＝ Δm c²</text><circle cx="170" cy="160" r="40" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="170" y="150" font-size="12" fill="#234b45" text-anchor="middle">分开的</text><text x="170" y="168" font-size="12" fill="#234b45" text-anchor="middle">质子+中子</text><text x="170" y="192" font-size="12" fill="#234b45" text-anchor="middle">质量较大</text><polygon points="220,160 270,148 270,172" fill="#234b45"/><circle cx="380" cy="160" r="40" fill="#4fb3a5"/><text x="380" y="155" font-size="12" fill="#234b45" text-anchor="middle">结合成</text><text x="380" y="173" font-size="12" fill="#234b45" text-anchor="middle">原子核</text><text x="380" y="196" font-size="12" fill="#234b45" text-anchor="middle">质量略小</text><text x="520" y="150" font-size="15" fill="#234b45" font-weight="bold">Δ E</text><text x="520" y="172" font-size="13" fill="#234b45" text-anchor="middle">＝Δm c²</text><text x="520" y="196" font-size="12" fill="#234b45" text-anchor="middle">释放的能量</text><text x="340" y="258" font-size="12" fill="#234b45" text-anchor="middle">少掉的那点质量 Δm，按质能方程变成了能量</text></svg>', caption: '图2　核子结合成原子核时总质量略减（质量亏损 Δm），这部分质量按 E＝m c² 转化为释放的能量。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">比结合能曲线：中等核最稳、最结实</text><polyline points="80,250 170,170 300,90 430,160 560,230" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="300" cy="90" r="7" fill="#4fb3a5"/><text x="300" y="74" font-size="12" fill="#234b45" text-anchor="middle">峰顶=中等核</text><text x="130" y="265" font-size="12" fill="#234b45" text-anchor="middle">轻核</text><text x="470" y="265" font-size="12" fill="#234b45" text-anchor="middle">重核</text><text x="80" y="270" font-size="11" fill="#234b45">比结合能</text><text x="560" y="200" font-size="11" fill="#234b45">核子数→</text><text x="340" y="288" font-size="12" fill="#234b45" text-anchor="middle">比结合能越大越稳定；轻核、重核都想往峰顶靠，于是放能</text></svg>', caption: '图3　比结合能随核子数变化的曲线在中等质量核处最高，因此中等核最稳定；轻核聚变、重核裂变都趋向更高比结合能而放能。' }
    ],
    exercises: [
      { type: 'choice', question: '书写核反应方程时，必须满足哪两条守恒？', options: ['电荷数守恒、质量数守恒', '电荷数守恒、质量守恒', '质量数守恒、体积守恒', '电荷数守恒、能量守恒'], answer: '电荷数守恒、质量数守恒', explanation: '核反应方程的基本规则是电荷数守恒和质量数守恒：反应前后所有粒子的电荷数 Z 之和相等，质量数 A 之和也相等。注意是"质量数"守恒，不是真实质量的绝对守恒（反应会有质量亏损）。体积守恒和单纯的质量绝对守恒都不是配平核反应方程的依据。' },
      { type: 'choice', question: '关于质量亏损，下列说法正确的是？', options: ['质量亏损说明质量凭空消失了', '质量亏损是指组成原子核后总质量比各核子质量之和略小', '质量亏损只在衰变中出现，核反应中没有', '质量亏损意味着质量数不守恒'], answer: '质量亏损是指组成原子核后总质量比各核子质量之和略小', explanation: '质量亏损是指自由核子结合成原子核后，总质量比各核子单独质量之和略小。这部分"少掉"的质量并没有消失，而是按质能方程 E＝m c² 转化为能量释放了。质量数（核子个数）仍然守恒，质量亏损与质量数守恒并不矛盾，它也不代表质量凭空消失。' },
      { type: 'choice', question: '关于比结合能，下列说法正确的是？', options: ['比结合能越大的原子核越不稳定', '重核的比结合能比中等核大', '中等质量的原子核比结合能最大、最稳定', '比结合能就是原子核的总结合能'], answer: '中等质量的原子核比结合能最大、最稳定', explanation: '比结合能等于结合能除以核子数，它反映每个核子被绑得紧不紧。比结合能越大，原子核越稳定；在中等质量的原子核（大约铁附近）处比结合能最大、最稳定。重核的总结合能虽大，但比结合能反而比中等核小；比结合能也不是总结合能本身。' },
      { type: 'fill', question: '质能方程的表达式是 E ＝ ___，其中 c 表示光在真空中的速度。', answer: 'm c²', explanation: '爱因斯坦的质能方程为 E ＝ m × c²，它说明质量 m 和能量 E 可以互相换算，比例系数是光速 c 的平方。质量亏损 Δm 对应的释放能量为 ΔE ＝ Δm × c²。因为 c² 极大，微小质量亏损也会对应巨大能量。' },
      { type: 'fill', question: '某核反应质量亏损 Δm ＝ 0.0024 u，已知 1 u 对应约 931 MeV，则释放的能量约为___ MeV。', answer: '2.23', explanation: '由 ΔE ＝ Δm × 931 MeV/u 计算，ΔE ＝ 0.0024 × 931 ≈ 2.2344 MeV，约为 2.23 MeV。这说明即使质量只亏损一点点（约千分之二原子质量单位），释放的能量也达到兆电子伏量级，充分体现了质能方程的威力。' }
    ]
  });
})();
