/* ============================================================
 * 高二化学 · 选择性必修1 化学反应原理 · 第一章 化学反应的热效应
 * 课时2：热化学方程式、燃烧热与中和热
 * 数据注入：chemistry.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u2',
    name: '热化学方程式、燃烧热与中和热',
    chapter: '选择性必修1 化学反应原理 · 第一章 化学反应的热效应',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、热化学方程式是什么' },
      { type: 'paragraph', text: '普通化学方程式只告诉我们"什么变成了什么"，比如 H₂ + O₂ → H₂O，但没说这个反应是放热还是吸热、放了多少。热化学方程式在普通方程式基础上，把每种物质的状态标出来，并在右边写上这次反应的焓变 ΔH，于是"物质变化"和"热量变化"一次全看清楚了。' },
      { type: 'keypoint', label: '重点·热化学方程式四要素', text: '<strong>① 注明物质聚集状态（g 气态、l 液态、s 固态）；② 写出 ΔH 及其正负与单位；③ 化学计量数可以是分数，因为它表示物质的量；④ 反应条件（如点燃、温度压强）要写清。</strong>少任何一个都可能让 ΔH 出错。' },
      { type: 'example', label: '例题·写出一个热化学方程式', text: '写出氢气燃烧生成液态水的热化学方程式（已知 1 摩尔 H₂ 完全燃烧放热 285.8 千焦）。<br><br><strong>解析</strong>：先配平 H₂ + ½O₂ → H₂O，因产物是液态水，标状态为 H₂(g) + ½O₂(g) → H₂O(l)，再在右边写 ΔH = −285.8 千焦每摩尔。注意系数是 ½ 而非整数 2，因为定义里"1 摩尔可燃物"对应 1 摩尔 H₂。' },
      { type: 'list', items: ['热化学方程式必须标物质状态，普通方程式一般不标', '热化学方程式的计量数表示物质的量，可写分数', '热化学方程式右边带 ΔH，普通方程式不带', '同一反应正着写和倒着写，ΔH 数值相等、符号相反'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">热化学方程式：把物质状态和反应热一起写出</text><rect x="40" y="70" width="280" height="46" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="99" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">H₂(g) + ½O₂(g)</text><rect x="400" y="70" width="240" height="46" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="520" y="99" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">H₂O(l)</text><line x1="320" y1="93" x2="400" y2="93" stroke="#d98e3a" stroke-width="2"/><text x="360" y="130" font-size="13" fill="#d98e3a" text-anchor="middle">→</text><rect x="200" y="170" width="280" height="46" rx="8" fill="#d98e3a" stroke="#b5651d" stroke-width="2"/><text x="340" y="199" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">ΔH = −285.8 千焦每摩尔</text><text x="340" y="248" font-size="12" fill="#4a3724" text-anchor="middle">状态 g / l 必须写；ΔH 负号表示放热</text></svg>', caption: '图1　热化学方程式把反应物、生成物的聚集状态和焓变 ΔH 一并标出，信息比普通方程式更完整。' },
      { type: 'heading', text: '二、书写热化学方程式的注意点' },
      { type: 'paragraph', text: '写热化学方程式最容易出错的地方，是忘了 ΔH 会随着方程式"放大缩小、正倒反转"而一起变。比如把方程式所有系数乘 2，ΔH 也要乘 2；如果把反应倒过来写，ΔH 要改成相反数。因为 ΔH 描述的是"按这个方程式进行 1 摩尔反应"的热效应。' },
      { type: 'warn', label: '易错·ΔH 与方程式的联动', text: '三点最易错：<strong>① 物质状态不同，ΔH 不同</strong>（同是水，气态和液态能量不同）；<strong>② 方程式系数加倍，ΔH 同倍加倍</strong>；<strong>③ 正反应与逆反应的 ΔH 数值相等、符号相反</strong>。写之前先把状态、系数、方向三件事确认好，再落笔。' },
      { type: 'list', items: ['系数 ×2，则 ΔH 也 ×2（如 −285.8 变成 −571.6）', '反应逆向书写，ΔH 变号（放热变吸热）', '状态由 l 改成 g，ΔH 会变大（气态能量更高）', 'ΔH 的单位 kJ·mol⁻¹ 中的 mol 指"按此计量数进行 1 摩尔反应"'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">正反应与逆反应的 ΔH 大小相等、符号相反</text><rect x="60" y="80" width="240" height="46" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="109" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">正反应 ΔH 负</text><rect x="380" y="80" width="240" height="46" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="109" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">逆反应 ΔH 正</text><line x1="300" y1="103" x2="380" y2="103" stroke="#d98e3a" stroke-width="2"/><text x="340" y="135" font-size="13" fill="#d98e3a" text-anchor="middle">⇌ 反向</text><text x="180" y="180" font-size="13" fill="#4a3724" text-anchor="middle">如 H₂O 分解吸热</text><text x="500" y="180" font-size="13" fill="#4a3724" text-anchor="middle">如 H₂ 燃烧放热</text><text x="340" y="235" font-size="12" fill="#4a3724" text-anchor="middle">两者焓变数值相同，仅正负相反</text></svg>', caption: '图2　同一个化学平衡，正向进行放热，逆向进行就吸热，且 ΔH 的绝对值相等。' },
      { type: 'heading', text: '三、燃烧热' },
      { type: 'paragraph', text: '燃烧热是一个专门概念：在 101 千帕的压强下，1 摩尔纯物质完全燃烧，生成稳定的氧化物时放出的热量，叫作该物质的燃烧热。这里的"稳定产物"有约定，比如碳烧成 CO₂(g) 而非 CO，氢烧成 H₂O(l) 而非 H₂O(g)，硫烧成 SO₂(g)。' },
      { type: 'keypoint', label: '重点·燃烧热的定义要点', text: '<strong>燃烧热必须满足四个条件：标准压强 101 kPa、可燃物 1 摩尔、完全燃烧、生成稳定氧化物。</strong>只要有一个不满足，就不能叫"燃烧热"。例如"2 摩尔甲烷燃烧放热"算的是反应热，不是燃烧热，燃烧热特指每 1 摩尔可燃物。' },
      { type: 'table', headers: ['概念', '燃烧热', '普通反应热'], rows: [['可燃物量', '严格 1 摩尔', '任意计量数'], ['产物要求', '稳定氧化物', '不限'], ['压强条件', '101 kPa 标准', '可不限'], ['用途', '比较物质供能能力', '描述具体反应']] },
      { type: 'heading', text: '四、中和热' },
      { type: 'paragraph', text: '中和热是另一个常用概念：在稀溶液中，强酸和强碱发生中和反应生成 1 摩尔水时放出的热量。实验测得，在稀溶液中强酸强碱的中和热约为 57.3 千焦每摩尔。注意它限定"生成 1 摩尔水"，如果生成 2 摩尔水，放热就是约 114.6 千焦，但中和热数值仍取每生成 1 摩尔水对应的那一份。' },
      { type: 'keypoint', label: '重点·中和热的关键限制', text: '<strong>中和热 = 稀溶液中、强酸强碱、生成 1 摩尔 H₂O 所放出的热，约 57.3 千焦每摩尔。</strong>"稀溶液""强酸强碱""1 摩尔水"三个条件缺一不可，这是中和热区别于一般酸碱反应热的标志。' },
      { type: 'example', label: '例题·区分燃烧热与中和热', text: '下列说法正确的是？<br>A. 1 摩尔甲烷燃烧生成 CO₂ 和液态水放出的热就是甲烷的燃烧热<br>B. 任何酸碱中和生成 1 摩尔水都是 57.3 千焦<br>C. 中和热与酸碱性强弱无关<br>D. 燃烧热不必限定压强<br><br><strong>解析</strong>：A 符合燃烧热定义（1 mol、完全燃烧、稳定液态水），正确。B 错，弱酸弱碱中和时电离还要吸热，放热少于 57.3；C 错，弱酸弱碱会偏小；D 错，燃烧热必须 101 kPa。所以选 A。' },
      { type: 'warn', label: '易错·弱酸弱碱的中和热', text: '中和热 57.3 千焦每摩尔只适用于<strong>强酸强碱的稀溶液</strong>。若用醋酸等弱酸或氨水等弱碱，它们电离成离子时要额外吸收热量，所以实际放出的热少于 57.3，测出来的"中和热"会偏小。做题看到"醋酸""氨水"要立刻警觉。' },
      { type: 'tip', label: '提示', text: '记两个常用数值：氢气燃烧生成液态水的燃烧热约 285.8 千焦每摩尔，中和热约 57.3 千焦每摩尔。考试常让你判断"这个说法是不是燃烧热/中和热"，抓住"1 摩尔可燃物""稳定产物""稀溶液+强酸强碱+1 摩尔水"这些硬条件，一眼就能排除错误选项。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">中和热：稀溶液中强酸强碱生成 1 摩尔水放热</text><rect x="50" y="80" width="180" height="46" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="140" y="109" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">强酸 H⁺</text><rect x="250" y="80" width="180" height="46" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="109" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">强碱 OH⁻</text><rect x="450" y="80" width="180" height="46" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="540" y="109" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">H₂O + 热</text><line x1="230" y1="103" x2="250" y2="103" stroke="#d98e3a" stroke-width="2"/><line x1="430" y1="103" x2="450" y2="103" stroke="#d98e3a" stroke-width="2"/><text x="340" y="170" font-size="13" fill="#d98e3a" text-anchor="middle">H⁺ + OH⁻ → H₂O</text><text x="340" y="215" font-size="13" fill="#4a3724" text-anchor="middle">每生成 1 摩尔水约放热 57.3 千焦</text><text x="340" y="245" font-size="12" fill="#4a3724" text-anchor="middle">弱酸弱碱因电离吸热，实测值偏小</text></svg>', caption: '图3　中和热的本质是 H⁺ 与 OH⁻ 结合成水，在稀溶液、强酸强碱条件下每生成 1 摩尔水约放热 57.3 千焦。' }
    ],
    exercises: [
      { type: 'choice', question: '与普通化学方程式相比，热化学方程式最必须注明的是？', options: ['反应条件', '物质的聚集状态', '反应类型', '催化剂'], answer: '物质的聚集状态', explanation: '热化学方程式要同时表示热量变化，而同一反应在不同聚集状态下能量不同、ΔH 不同，所以必须标出每种物质是气态、液态还是固态。虽然反应条件也应写清，但"必须注明状态"是热化学方程式区别于普通方程式最关键的标志。' },
      { type: 'choice', question: '关于燃烧热，下列说法正确的是？', options: ['2 摩尔甲烷燃烧放热就是燃烧热', '燃烧热指 1 摩尔可燃物完全燃烧生成稳定氧化物', '燃烧热不必限定压强', '生成气态水也算稳定产物'], answer: '燃烧热指 1 摩尔可燃物完全燃烧生成稳定氧化物', explanation: '燃烧热严格定义为 101 kPa 下 1 摩尔纯物质完全燃烧生成稳定氧化物时的放热。A 错在是 2 摩尔；C 错在必须限定 101 kPa；D 错在稳定产物中氢应生成液态水而非气态水。只有"1 摩尔可燃物完全燃烧生成稳定氧化物"表述正确。' },
      { type: 'choice', question: '稀溶液中强酸强碱中和生成 1 摩尔水，测得中和热约为？', options: ['57.3 千焦每摩尔', '285.8 千焦每摩尔', '0', '114.6 千焦每摩尔'], answer: '57.3 千焦每摩尔', explanation: '在稀溶液中，强酸强碱中和生成 1 摩尔 H₂O 放出的热量约为 57.3 千焦每摩尔，这是教材标准值。285.8 是氢气燃烧热，114.6 是生成 2 摩尔水时的总放热，不是中和热数值本身。' },
      { type: 'fill', question: '已知 H₂(g) + ½O₂(g) → H₂O(l) 的 ΔH = −285.8 千焦每摩尔。若将方程式所有系数乘以 2，则新方程式的 ΔH = ___。', answer: '−571.6 千焦每摩尔', explanation: '热化学方程式中 ΔH 与化学计量数成正比。原系数对应 ΔH 为 −285.8，所有系数乘 2 后反应热也乘 2，即 −285.8 × 2 = −571.6 千焦每摩尔。注意负号保留，因为仍是放热反应，只是进行的"规模"翻倍。' },
      { type: 'fill', question: '中和热是指稀溶液中，强酸与强碱发生中和反应生成 1 摩尔 ___ 时所放出的热量。', answer: 'H₂O', explanation: '中和热的本质是 H⁺ 与 OH⁻ 结合生成水：H⁺ + OH⁻ → H₂O。定义明确要求"生成 1 摩尔水"，所以空白处填水的化学式 H₂O。若生成 2 摩尔水，总放热约 114.6 千焦，但中和热作为每摩尔水的单值仍是 57.3 千焦每摩尔。' }
    ]
  });
})();
