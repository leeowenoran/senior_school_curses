/* ============================================================
 * 高一化学 · 必修 第一册 · 第三章 铁 金属材料
 * 课时14：Fe²⁺/Fe³⁺ 转化与检验
 * 数据注入：chemistry.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u14',
    name: 'Fe²⁺/Fe³⁺ 转化与检验',
    chapter: '必修 第一册 · 第三章 铁 金属材料',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、Fe³⁺ 的检验——血红色特征反应' },
      { type: 'paragraph', text: '检验 Fe³⁺ 有两个常用办法。最灵、最特征的是加硫氰化钾（KSCN）溶液：如果溶液立刻变成血红色，就说明有 Fe³⁺。另一个办法是加碱，会生成红褐色沉淀。血红色反应非常灵敏，是 Fe³⁺ 的"招牌"检测。' },
      { type: 'keypoint', label: '重点·Fe³⁺ 的检验', text: '<strong>加 KSCN 溶液：Fe³⁺ + 3SCN⁻ ⇌ Fe(SCN)₃，溶液变为血红色（特征反应）。</strong><br><strong>加 NaOH 溶液：Fe³⁺ + 3OH⁻ → Fe(OH)₃↓，生成红褐色沉淀。</strong>两者都能检验 Fe³⁺，其中血红色反应最灵敏、最常用。' },
      { type: 'list', items: ['方法一：滴入 KSCN 溶液，变血红色 → 含 Fe³⁺', '方法二：滴入 NaOH 溶液，生成红褐色沉淀 → 含 Fe³⁺', '血红色反应是 Fe³⁺ 区别于 Fe²⁺ 的最重要特征', '检验时可以两种方法配合使用，结果更可靠'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">Fe³⁺ 检验：加 KSCN 溶液变血红色</text><rect x="50" y="70" width="250" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="175" y="105" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">待测溶液</text><rect x="90" y="130" width="170" height="70" rx="6" fill="#d98e3a"/><text x="175" y="171" font-size="13" fill="#ffffff" text-anchor="middle">黄色（含 Fe³⁺）</text><text x="175" y="262" font-size="12" fill="#4a3724" text-anchor="middle">滴入 KSCN</text><line x1="305" y1="155" x2="385" y2="155" stroke="#d98e3a" stroke-width="3"/><polygon points="385,149 398,155 385,161" fill="#d98e3a"/><rect x="400" y="70" width="230" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="515" y="105" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">混合后</text><rect x="440" y="130" width="150" height="70" rx="6" fill="#b5651d"/><text x="515" y="171" font-size="13" fill="#ffffff" text-anchor="middle">血红色</text><text x="515" y="262" font-size="12" fill="#d98e3a" text-anchor="middle">Fe³⁺ + 3SCN⁻ ⇌ Fe(SCN)₃</text></svg>', caption: '图1　向含 Fe³⁺ 的溶液中滴加 KSCN，溶液立刻变为血红色，这是 Fe³⁺ 的特征检验反应。' },
      { type: 'heading', text: '二、Fe²⁺ 的检验——先不变红再变红' },
      { type: 'paragraph', text: '检验 Fe²⁺ 也有两套思路。直接加碱，会看到白色沉淀迅速变灰绿、最后变红褐，这是 Fe²⁺ 的典型现象。如果加 KSCN，溶液本来不变红（因为 Fe²⁺ 与 SCN⁻ 不显色）；但若先通入氯气把 Fe²⁺ 氧化成 Fe³⁺，再加 KSCN 就会变红，反过来证明原来含有 Fe²⁺。' },
      { type: 'keypoint', label: '重点·Fe²⁺ 的检验', text: '<strong>加 NaOH：先出现白色沉淀，迅速变灰绿色，最终变红褐色（Fe(OH)₂ → Fe(OH)₃）。</strong><br><strong>加 KSCN 不变红，再通入 Cl₂ 后变红：说明原溶液含 Fe²⁺（被氧化为 Fe³⁺ 才显色）。</strong>' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">加碱检验：Fe²⁺ 与 Fe³⁺ 的现象对比</text><rect x="50" y="70" width="270" height="210" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="185" y="100" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">Fe²⁺ + 碱</text><circle cx="185" cy="160" r="34" fill="#ffffff" stroke="#b5651d" stroke-width="2"/><text x="185" y="212" font-size="12" fill="#4a3724" text-anchor="middle">白→灰绿→红褐</text><text x="185" y="268" font-size="12" fill="#d98e3a" text-anchor="middle">Fe²⁺ 被氧化</text><rect x="360" y="70" width="270" height="210" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="495" y="100" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">Fe³⁺ + 碱</text><circle cx="495" cy="160" r="34" fill="#b5651d"/><text x="495" y="212" font-size="12" fill="#4a3724" text-anchor="middle">直接红褐色</text><text x="495" y="268" font-size="12" fill="#d98e3a" text-anchor="middle">Fe³⁺ 一步到位</text></svg>', caption: '图2　Fe²⁺ 加碱先白后变灰绿最后红褐；Fe³⁺ 加碱直接生成红褐色沉淀，两者现象明显不同。' },
      { type: 'table', headers: ['检验对象', '试剂', '现象', '结论'], rows: [['Fe³⁺', 'KSCN 溶液', '溶液变血红色', '含 Fe³⁺（特征反应）'], ['Fe³⁺', 'NaOH 溶液', '生成红褐色沉淀', '含 Fe³⁺'], ['Fe²⁺', 'NaOH 溶液', '白色→灰绿→红褐色', '含 Fe²⁺'], ['Fe²⁺', 'KSCN 后通 Cl₂', '先不变红，通 Cl₂ 后变红', '含 Fe²⁺（被氧化为 Fe³⁺）']] },
      { type: 'heading', text: '三、Fe²⁺ 与 Fe³⁺ 的相互转化' },
      { type: 'paragraph', text: 'Fe²⁺ 和 Fe³⁺ 不是固定不变的，在合适的条件下可以互相转变。Fe²⁺ 变成 Fe³⁺ 需要加氧化剂（把铁从 +2 价抬到 +3 价）；Fe³⁺ 变回 Fe²⁺ 需要加还原剂（把铁从 +3 价压回 +2 价）。掌握这条"升价加氧化、降价加还原"的规律，就能预测很多反应。' },
      { type: 'list', items: ['Fe²⁺ → Fe³⁺：加氧化剂，如 Cl₂、H₂O₂、O₂、HNO₃ 等', 'Fe³⁺ → Fe²⁺：加还原剂，如 Fe、Cu、I⁻、SO₂ 等', '典型氧化：2Fe²⁺ + Cl₂ → 2Fe³⁺ + 2Cl⁻', '典型还原：2Fe³⁺ + Fe → 3Fe²⁺；2Fe³⁺ + Cu → 2Fe²⁺ + Cu²⁺'] },
      { type: 'example', label: '例题·转化判断', text: '下列反应中，能实现 Fe³⁺ 转化为 Fe²⁺ 的是？<br>A. 向 FeCl₃ 溶液中通入 Cl₂<br>B. 向 FeCl₃ 溶液中加入铁粉<br>C. 向 FeCl₂ 溶液中滴加 H₂O₂<br>D. 向 FeCl₂ 溶液中通入 O₂<br><br><strong>解析</strong>：Fe³⁺ 变成 Fe²⁺ 是降价过程，需要加入还原剂。铁粉 Fe 是还原剂，能把 Fe³⁺ 还原：2Fe³⁺ + Fe → 3Fe²⁺，所以 B 正确。A 中 Cl₂ 是氧化剂，会把 Fe²⁺ 氧化成 Fe³⁺；C 中 H₂O₂、D 中 O₂ 都是氧化剂，也会把 Fe²⁺ 氧化成 Fe³⁺，均不能实现 Fe³⁺ → Fe²⁺。' },
      { type: 'warn', label: '易错·特征与氧化性', text: '<strong>第一，Fe³⁺ 与 SCN⁻ 显血红色是特征检验反应，而 Fe²⁺ 与 SCN⁻ 不显色</strong>，所以"加 KSCN 变红"只能说明有 Fe³⁺，不能说明有 Fe²⁺。<strong>第二，Fe³⁺ 氧化性较强，能氧化 I⁻、Fe、Cu 等</strong>，例如 2Fe³⁺ + Cu → 2Fe²⁺ + Cu²⁺，这也是印刷电路板的腐蚀原理，不要误以为 Fe³⁺ 只能被还原。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">Fe²⁺ 与 Fe³⁺ 的双向转化</text><rect x="230" y="120" width="220" height="60" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="157" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">Fe²⁺  ⇌  Fe³⁺</text><line x1="300" y1="118" x2="250" y2="78" stroke="#d98e3a" stroke-width="3"/><polygon points="250,78 262,82 256,92" fill="#d98e3a"/><text x="160" y="72" font-size="13" fill="#4a3724" text-anchor="middle">加氧化剂</text><text x="160" y="92" font-size="12" fill="#d98e3a" text-anchor="middle">Cl₂ H₂O₂ O₂</text><line x1="380" y1="118" x2="430" y2="78" stroke="#d98e3a" stroke-width="3"/><polygon points="430,78 424,88 434,82" fill="#d98e3a"/><text x="520" y="72" font-size="13" fill="#4a3724" text-anchor="middle">加还原剂</text><text x="520" y="92" font-size="12" fill="#d98e3a" text-anchor="middle">Fe Cu I⁻</text><text x="340" y="230" font-size="12" fill="#4a3724" text-anchor="middle">2Fe²⁺ + Cl₂ → 2Fe³⁺ + 2Cl⁻</text><text x="340" y="260" font-size="12" fill="#4a3724" text-anchor="middle">2Fe³⁺ + Fe → 3Fe²⁺；2Fe³⁺ + Cu → 2Fe²⁺ + Cu²⁺</text><text x="340" y="296" font-size="12" fill="#d98e3a" text-anchor="middle">升价加氧化，降价加还原</text></svg>', caption: '图3　Fe²⁺ 被氧化剂（Cl₂、H₂O₂、O₂）氧化为 Fe³⁺；Fe³⁺ 被还原剂（Fe、Cu、I⁻）还原为 Fe²⁺。' },
      { type: 'tip', label: '提示·记忆口诀', text: '记转化用一句口诀：<strong>"铁二升三靠氧化，铁三降二靠还原。"</strong>化合价升高（Fe²⁺→Fe³⁺）要加氧化剂，化合价降低（Fe³⁺→Fe²⁺）要加还原剂。检验则用"Fe³⁺ 见 KSCN 就血红，Fe²⁺ 见碱白变红褐（中间灰绿）"来区分，两者一配合基本不会错。' },
      { type: 'heading', text: '四、Fe³⁺ 的氧化性应用' },
      { type: 'paragraph', text: 'Fe³⁺ 的氧化性在实际中很有用。比如做印刷电路板时，用 FeCl₃ 溶液"腐蚀"覆铜板：Fe³⁺ 把铜氧化成 Cu²⁺，自己被还原成 Fe²⁺，反应为 2Fe³⁺ + Cu → 2Fe²⁺ + Cu²⁺，从而把不需要的铜溶解掉。这也说明 Fe³⁺ 氧化性比 Cu²⁺ 强。' },
      { type: 'keypoint', label: '重点·Fe³⁺ 能氧化 Cu 和 I⁻', text: '<strong>Fe³⁺ 氧化性较强，可氧化 Cu、Fe、I⁻ 等：2Fe³⁺ + Cu → 2Fe²⁺ + Cu²⁺；2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂。</strong>利用这一性质既能腐蚀电路板，也能在检验中用淀粉碘化钾试纸间接判断 Fe³⁺ 的存在。' }
    ],
    exercises: [
      { type: 'choice', question: '检验溶液中是否含有 Fe³⁺，最灵敏的特征反应是？', options: ['加 KSCN 溶液变血红色', '加酚酞变红', '加盐酸冒气泡', '加硝酸银生成白色沉淀'], answer: '加 KSCN 溶液变血红色', explanation: 'Fe³⁺ 与硫氰酸根 SCN⁻ 反应生成血红色的 Fe(SCN)₃，这是 Fe³⁺ 最灵敏、最有特征性的检验反应，溶液会立刻变红。酚酞遇碱变红，与 Fe³⁺ 无专属关系；盐酸、硝酸银都不是检验 Fe³⁺ 的专属试剂。因此选"加 KSCN 溶液变血红色"。' },
      { type: 'choice', question: '向某溶液中滴加 KSCN 溶液不变红，再通入氯气后变红，说明原溶液中含有？', options: ['Fe³⁺', 'Fe²⁺', 'Cu²⁺', '不含任何铁离子'], answer: 'Fe²⁺', explanation: 'Fe³⁺ 与 SCN⁻ 显血红色，而 Fe²⁺ 与 SCN⁻ 不显色。先加 KSCN 不变红，说明原溶液中没有 Fe³⁺；再通入 Cl₂ 后变红，是因为 Cl₂ 把 Fe²⁺ 氧化成了 Fe³⁺，新生成的 Fe³⁺ 与 SCN⁻ 显血红色。所以原溶液含 Fe²⁺ 而不含 Fe³⁺，选 Fe²⁺。' },
      { type: 'choice', question: '下列试剂中，能把 Fe³⁺ 还原为 Fe²⁺ 的是？', options: ['氯气 Cl₂', '铁粉 Fe', '双氧水 H₂O₂', '氧气 O₂'], answer: '铁粉 Fe', explanation: 'Fe³⁺ 变成 Fe²⁺ 是降价（被还原）过程，需要加入还原剂。铁粉 Fe 是还原剂，反应为 2Fe³⁺ + Fe → 3Fe²⁺，能把 Fe³⁺ 还原。而 Cl₂、H₂O₂、O₂ 都是氧化剂，会把 Fe²⁺ 氧化成 Fe³⁺，不能实现 Fe³⁺ → Fe²⁺。因此选铁粉。' },
      { type: 'fill', question: '印刷电路板用 FeCl₃ 溶液腐蚀铜箔，发生反应的离子方程式为：2Fe³⁺ + Cu → ___ + Cu²⁺。', answer: '2Fe²⁺', explanation: 'Fe³⁺ 具有氧化性，能把铜氧化成 Cu²⁺，自身被还原为 Fe²⁺。按铁原子守恒：左边 2 个 Fe³⁺，右边应生成 2 个 Fe²⁺；电荷也平衡：左边 2×(+3)=+6，右边 2×(+2)+ (+2)=+6。所以方程式为 2Fe³⁺ + Cu → 2Fe²⁺ + Cu²⁺，空格填 2Fe²⁺。' },
      { type: 'fill', question: 'Fe²⁺ 与 Fe³⁺ 之间可相互转化：Fe²⁺ 转化为 Fe³⁺ 需加入___（填"氧化剂"或"还原剂"），例如通入氯气。', answer: '氧化剂', explanation: 'Fe²⁺ 中铁为 +2 价，Fe³⁺ 中铁为 +3 价，从 +2 升到 +3 是化合价升高、被氧化，因此需要加入氧化剂。常见的氧化剂有 Cl₂、H₂O₂、O₂、HNO₃ 等，例如 2Fe²⁺ + Cl₂ → 2Fe³⁺ + 2Cl⁻。反过来 Fe³⁺ 降到 Fe²⁺ 才需要还原剂。所以空格填氧化剂。' }
    ]
  });
})();
