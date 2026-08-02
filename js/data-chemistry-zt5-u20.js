/* 化学 · 高三复习 · 化学计算 · 专题八 · 课时：极端假设法 */
(function () {
  var v = gzGetVolume('chemistry', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u20',
    name: '极端假设法',
    chapter: '化学计算 · 专题八 常用计算技巧',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、极端假设法：混合物求范围' },
      { type: 'paragraph', text: '遇到混合物、不确定组成或不确定反应，常常求不出唯一值，只能求<strong>范围</strong>。极端假设法就是假设混合物全部是组分 A，算出一个边界；再假设全部是组分 B，算出另一个边界。真实值一定落在两个极值之间。' },
      { type: 'list', items: ['极端一：假设混合物全是组分 A，算出一个边界值', '极端二：假设混合物全是组分 B，算出另一边界值', '真实值必落在两极值之间'] },
      { type: 'heading', text: '二、平均值法' },
      { type: 'paragraph', text: '如果混合物只由 A、B 两组分构成，那么混合后的平均相对分子质量、平均组成，一定介于两组分各自的值之间。这个性质常用来判断“可能的组成”。' },
      { type: 'keypoint', label: '重点·平均值介于两者之间', text: '<strong>若混合物由 A、B 组成，则平均相对分子质量 M(平) 满足 M(A) 与 M(B) 之间。</strong>平均组成（如平均碳原子数、平均氢原子数）同样介于两者之间。这是判断可能组成、排除不可能的利器。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">极端假设：两端求范围</text><rect x="60" y="90" width="240" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="125" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">极端全为 A</text><text x="180" y="152" font-size="13" fill="#4a3724" text-anchor="middle">得边界值 1</text><text x="340" y="140" font-size="26" fill="#b5651d" text-anchor="middle" font-weight="bold">⇌</text><rect x="380" y="90" width="240" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="125" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">极端全为 B</text><text x="500" y="152" font-size="13" fill="#4a3724" text-anchor="middle">得边界值 2</text><text x="340" y="225" font-size="15" fill="#d98e3a" text-anchor="middle" font-weight="bold">真实值落在两极值之间</text><text x="340" y="262" font-size="13" fill="#4a3724" text-anchor="middle">先求两端边界，再判断真实范围</text></svg>', caption: '图1　假设全为 A 与全为 B，得到真实值的两个边界。' },
      { type: 'heading', text: '三、混合烃燃烧范围' },
      { type: 'paragraph', text: '混合烃的耗氧量、生成 CO₂ 或 H₂O 的量，也一定介于两个纯组分对应值之间。先算出两种纯组分的极值，范围就出来了。' },
      { type: 'example', label: '例题·混合烃耗氧范围', text: '某混合烃由 CH₄ 和 C₂H₆ 组成，平均 1 mol 耗氧量介于多少？<br>解：CH₄ 耗氧 1 + 4/4 = 2 mol；C₂H₆ 耗氧 2 + 6/4 = 3.5 mol。<br>故混合烃 1 mol 耗氧介于 2 与 3.5 mol 之间。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">平均值介于两极值之间</text><line x1="80" y1="180" x2="600" y2="180" stroke="#b5651d" stroke-width="2"/><circle cx="140" cy="180" r="9" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="140" y="215" font-size="14" fill="#4a3724" text-anchor="middle">M(A)</text><circle cx="540" cy="180" r="9" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="540" y="215" font-size="14" fill="#4a3724" text-anchor="middle">M(B)</text><circle cx="340" cy="180" r="11" fill="#d98e3a" stroke="#b5651d" stroke-width="2"/><text x="340" y="215" font-size="14" fill="#4a3724" text-anchor="middle">M(平)</text><text x="340" y="110" font-size="14" fill="#d98e3a" text-anchor="middle" font-weight="bold">M(A) &lt; M(平) &lt; M(B)</text><text x="340" y="250" font-size="13" fill="#4a3724" text-anchor="middle">平均相对分子质量或平均组成必介于两组分之间</text></svg>', caption: '图2　平均值 M(平) 必介于两组分 M(A) 与 M(B) 之间。' },
      { type: 'heading', text: '四、金属混合物与酸反应' },
      { type: 'paragraph', text: '两种金属与酸反应产生 H₂，真实产量同样介于两种纯金属的产量极值之间。先分别算全为单一金属时的 H₂ 量，再确定范围。' },
      { type: 'example', label: '例题·Zn 与 Al 混合产 H₂ 范围', text: '13 g 混合物由 Zn（65）和 Al（27）组成，与足量酸反应，生成 H₂ 范围？<br>解：极端全为 Zn：n = 13/65 = 0.2 mol，H₂ = 0.2 mol。<br>极端全为 Al：n = 13/27 ≈ 0.481 mol，Al 每 mol 失 3e 得 1.5 mol H₂，故 H₂ = 0.481 × 1.5 ≈ 0.722 mol。<br>真实 H₂ 介于 0.2 与 0.722 mol。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">混合烃 1 mol 耗氧范围</text><rect x="60" y="90" width="240" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="125" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">CH₄ 耗氧</text><text x="180" y="152" font-size="13" fill="#4a3724" text-anchor="middle">2 mol O₂</text><text x="340" y="140" font-size="26" fill="#b5651d" text-anchor="middle" font-weight="bold">⇌</text><rect x="380" y="90" width="240" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="125" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">C₂H₆ 耗氧</text><text x="500" y="152" font-size="13" fill="#4a3724" text-anchor="middle">3.5 mol O₂</text><text x="340" y="225" font-size="15" fill="#d98e3a" text-anchor="middle" font-weight="bold">混合烃耗氧介于 2 与 3.5 之间</text><text x="340" y="262" font-size="13" fill="#4a3724" text-anchor="middle">两组分耗氧极值限定了混合后的范围</text></svg>', caption: '图3　混合烃 1 mol 耗氧介于 CH₄ 与 C₂H₆ 的耗氧极值之间。' },
      { type: 'warn', label: '易错·确认组分都参与反应', text: '极端假设法默认两组分都参与该反应。若某组分不与酸或氧气反应，则不能算进该极端；另外混合气体燃烧要确认是否完全燃烧。把不反应的物质也算进极端，会得到错误的边界。' },
      { type: 'list', items: ['第一步：判断混合物由哪两种组分构成', '第二步：分别假设全为单一组分，算两个边界', '第三步：真实值或范围落在两极值之间'] },
      { type: 'heading', text: '五、综合例题' },
      { type: 'example', label: '例题·CO 与 H₂ 混合气耗氧', text: '由 CO 和 H₂ 组成的混合气 10 L，完全燃烧耗 O₂ 多少？<br>解：2CO + O₂ → 2CO₂，1 L CO 耗 0.5 L O₂；2H₂ + O₂ → 2H₂O，1 L H₂ 耗 0.5 L O₂。<br>两者每升都耗 0.5 L O₂，故无论比例，10 L 混合气恒耗 5 L O₂。极端法也给出两极值均为 5 L，重合。' },
      { type: 'table', headers: ['题型', '两端极端', '结论'], rows: [['混合烃耗氧', '全 CH₄ / 全 C₂H₆', '范围介于两极值'], ['金属与酸产 H₂', '全轻金属 / 全重金属', '范围介于两极值'], ['平均相对分子质量', '两纯组分 M', 'M(平) 居中']] },
      { type: 'tip', label: '提示·极端与平均值配合', text: '极端假设法和平均值法常配合使用：先用极端求范围，再用平均值判断能否成立。遇到“可能组成”“范围”字眼，立刻想到这两个法。' },
      { type: 'paragraph', text: '小结：极端假设法就是<strong>把不确定变成两个确定的边界</strong>。先算“全是一边”和“全是另一边”，真实答案就被夹在中间了。配合平均值法，能快速排除不可能的选项。' }
    ],
    exercises: [
      { type: 'choice', question: '极端假设法用于？', options: ['求精确值', '求混合物取值范围', '计算反应速率', '配平方程式'], answer: '求混合物取值范围', explanation: '极端假设法先假设混合物全部由某一组分构成，算出两个边界值，真实值一定落在这两个极值之间，因此主要用于求混合物组成或性质的取值范围，而不是求精确值。' },
      { type: 'choice', question: '平均相对分子质量 M(平) 与两组分 M(A)、M(B) 的关系？', options: ['M(平) 必大于两者', 'M(平) 介于 M(A) 与 M(B) 之间', 'M(平) 必小于两者', '三者无关'], answer: 'M(平) 介于 M(A) 与 M(B) 之间', explanation: '若混合物仅由 A、B 两组分构成，则其平均相对分子质量必介于两组分相对分子质量之间，即 M(A) 与 M(B) 中较小者小于 M(平) 小于较大者。这是平均值法判断可能组成的基础。' },
      { type: 'choice', question: 'CH₄ 和 C₂H₆ 混合，1 mol 平均耗氧量范围？', options: ['2 到 3.5 mol', '1 到 2 mol', '3 到 4 mol', '0 到 2 mol'], answer: '2 到 3.5 mol', explanation: 'CH₄ 燃烧耗氧为 1 + 4/4 = 2 mol O₂，C₂H₆ 燃烧耗氧为 2 + 6/4 = 3.5 mol O₂。混合烃 1 mol 的耗氧量介于两个纯组分之间，即 2 到 3.5 mol。' },
      { type: 'fill', question: '13 g 全为 Zn（65 g/mol）与酸反应，生成 H₂ ___ mol。', answer: '0.2', explanation: 'Zn 摩尔质量 65 g/mol。n(Zn) = 13 g / 65 g·mol⁻¹ = 0.2 mol。Zn 与酸反应 Zn → Zn²⁺ + H₂，每 mol Zn 生成 1 mol H₂，故生成 H₂ = 0.2 mol。答案为 0.2。' },
      { type: 'fill', question: 'CO 与 H₂ 各 1 L 完全燃烧均耗 O₂ 0.5 L，故 10 L 该混合气耗 O₂ ___ L。', answer: '5', explanation: 'CO 燃烧 2CO + O₂ → 2CO₂，每 1 L CO 耗 0.5 L O₂；H₂ 燃烧 2H₂ + O₂ → 2H₂O，每 1 L H₂ 也耗 0.5 L O₂。两者每升耗氧相同，10 L 混合气无论比例如何均耗 O₂ = 10 × 0.5 = 5 L。答案为 5。' }
    ]
  });
})();
