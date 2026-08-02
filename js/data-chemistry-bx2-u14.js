/* ============================================================
 * 高一化学 · 必修 第二册 · 第七章 有机化合物
 * 课时14：乙醇
 * 数据注入：chemistry.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u14',
    name: '乙醇',
    chapter: '必修 第二册 · 第七章 有机化合物',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、乙醇就在我们身边' },
      { type: 'paragraph', text: '乙醇就是我们常说的酒精。啤酒、白酒里含有它，医院里的消毒酒精是 75% 的乙醇水溶液，做菜用的料酒也含乙醇。它无色、有特殊香味、易挥发、能和水以任意比例互溶，还能溶解很多物质，是常见的有机溶剂。' },
      { type: 'keypoint', label: '重点·乙醇的组成', text: '<strong>乙醇的化学式是 C₂H₅OH（也可写成 CH₃CH₂OH），结构中的特征基团是羟基 —OH。</strong>记住"乙"字头的有机物通常有 2 个碳原子，乙醇就是含一个羟基的乙烷衍生物。' },
      { type: 'paragraph', text: '乙醇的沸点比水低，所以容易挥发成气体；它也能燃烧，燃烧时放出大量热，因此曾经被掺在汽油里做车用燃料（乙醇汽油）。' },
      { type: 'list', items: ['乙醇是酒类、消毒酒精、料酒的主要成分', '乙醇是常用的有机溶剂，能溶解碘、油脂等', '乙醇可以燃烧，属于可再生能源'] },
      { type: 'heading', text: '二、羟基——乙醇的"特征小尾巴"' },
      { type: 'paragraph', text: '如果把乙烷 C₂H₆ 分子里一个氢换成 —OH，就得到了乙醇 C₂H₅OH。正是这个多出来的羟基，让乙醇有了和水亲近、能发生氧化反应等"个性"。在有机化学里，像羟基这样决定有机物主要化学性质的原子或原子团，叫做官能团。' },
      { type: 'warn', label: '易错·羟基不是氢氧根', text: '羟基写成 <strong>—OH</strong>，它不带电子、不显电性；而氢氧根离子是 <strong>OH⁻</strong>，带一个负电荷，存在于碱（如 NaOH）中。两者不能画等号：乙醇里的 —OH 不是 OH⁻，不能使溶液显碱性。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙醇结构：CH₃—CH₂—OH，特征基团是羟基 —OH</text><rect x="60" y="100" width="170" height="70" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="145" y="140" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">CH₃—</text><rect x="250" y="100" width="170" height="70" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="335" y="140" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">—CH₂—</text><rect x="440" y="100" width="170" height="70" rx="10" fill="#d98e3a" stroke="#b5651d" stroke-width="2"/><text x="525" y="140" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="bold">—OH</text><text x="340" y="225" font-size="13" fill="#4a3724" text-anchor="middle">橙色方框就是羟基，乙醇的官能团，决定乙醇的主要性质</text></svg>', caption: '图1　乙醇 CH₃—CH₂—OH 的结构简式，末端的 —OH 是羟基，也是它的官能团。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙烷与乙醇：只差一个羟基 —OH</text><rect x="50" y="80" width="260" height="100" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="120" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">乙烷 C₂H₆</text><text x="180" y="150" font-size="13" fill="#d98e3a" text-anchor="middle">CH₃—CH₃，没有官能团</text><rect x="370" y="80" width="260" height="100" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="120" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">乙醇 C₂H₅OH</text><text x="500" y="150" font-size="13" fill="#d98e3a" text-anchor="middle">CH₃—CH₂—OH，含羟基</text><text x="340" y="230" font-size="13" fill="#4a3724" text-anchor="middle">把乙烷的一个 H 换成 —OH，就得到乙醇</text></svg>', caption: '图2　乙醇可以看作乙烷分子中的一个氢原子被羟基 —OH 取代后的产物。' },
      { type: 'table', headers: ['对比项', '乙烷 C₂H₆', '乙醇 C₂H₅OH'], rows: [['官能团', '无', '羟基 —OH'], ['能否溶于水', '难溶', '易溶（任意比互溶）'], ['能否与钠反应', '不反应', '缓慢放出氢气'], ['是否可燃', '可燃', '可燃']] },
      { type: 'heading', text: '三、官能团决定性质' },
      { type: 'paragraph', text: '有机化学有一条重要规律：什么官能团，就有什么样的典型性质。羟基 —OH 让乙醇能和水混溶、能跟金属钠反应放出氢气、能被氧化。后面学到的羧基 —COOH、醛基 —CHO，也各自带着鲜明的"脾气"。所以学有机物，先认官能团，再记性质，能省很多力气。' },
      { type: 'keypoint', label: '重点·官能团', text: '<strong>官能团是决定有机物化学特性的原子或原子团。</strong>乙醇的官能团是羟基 —OH；后面还会遇到羧基 —COOH（乙酸）、醛基 —CHO（乙醛）、碳碳双键 C=C（乙烯）等。认官能团是推断有机物性质的关键。' },
      { type: 'example', label: '例题·认官能团', text: '乙醇 C₂H₅OH 的官能团是下列哪一个？<br>A. 羧基 —COOH<br>B. 羟基 —OH<br>C. 醛基 —CHO<br>D. 碳碳双键 C=C<br><br><strong>解析</strong>：乙醇的结构简式是 CH₃—CH₂—OH，分子末端的 —OH 就是它的官能团，叫<strong>羟基</strong>。羧基在乙酸里、醛基在乙醛里、碳碳双键在乙烯里，都不属于乙醇。因此选 B。' },
      { type: 'heading', text: '四、乙醇的氧化反应' },
      { type: 'paragraph', text: '乙醇最熟悉的变化就是燃烧：在空气中点燃，它被彻底氧化，生成二氧化碳和水，放出大量热。反应可写成 C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O（条件：点燃）。这也是酒精灯、酒精火锅能发热的原因。' },
      { type: 'paragraph', text: '乙醇还能发生"不完全"的氧化。在铜或银做催化剂、加热的条件下，乙醇会被空气中的氧气氧化成乙醛 CH₃CHO——分子里脱掉两个氢（一个来自与氧相连的碳，一个来自羟基氧）。这个过程在实验室里能看到黑色的铜丝变红又变黑，很有意思。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙醇的催化氧化：脱去两个氢变成乙醛</text><rect x="40" y="90" width="250" height="100" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="165" y="135" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">CH₃—CH₂—OH</text><text x="165" y="168" font-size="12" fill="#d98e3a" text-anchor="middle">乙醇（铜催化、加热）</text><text x="340" y="145" font-size="24" fill="#b5651d" text-anchor="middle" font-weight="bold">→</text><rect x="390" y="90" width="250" height="100" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="515" y="135" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">CH₃—CHO</text><text x="515" y="168" font-size="12" fill="#d98e3a" text-anchor="middle">乙醛（含醛基 —CHO）</text><text x="340" y="245" font-size="13" fill="#4a3724" text-anchor="middle">脱去 2 个 H：C—H 和 O—H 各失一个氢，碳氧之间长出双键</text></svg>', caption: '图3　乙醇在铜催化、加热下被氧化为乙醛：失去两个氢原子，羟基所在的碳与氧之间形成 C=O 双键。' },
      { type: 'tip', label: '提示', text: '交警查酒驾用的"吹气检测"，原理就是乙醇的氧化性变化：呼出的乙醇把橙红色的重铬酸钾还原，溶液变成绿色，颜色越深说明酒精越多。所以<strong>喝酒不开车</strong>，既是安全也是法规，更是化学知识在保命。' },
      { type: 'list', items: ['完全氧化（燃烧）：C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O', '催化氧化：2 CH₃CH₂OH + O₂ → 2 CH₃CHO + 2 H₂O（铜或银催化）', '与钠反应：2 CH₃CH₂OH + 2 Na → 2 CH₃CH₂ONa + H₂↑，缓慢放出氢气'] },
      { type: 'example', label: '例题·燃烧产物', text: '乙醇在空气中完全燃烧，生成的物质是？<br>A. 一氧化碳和水<br>B. 二氧化碳和水<br>C. 乙醛和水<br>D. 碳和氢气<br><br><strong>解析</strong>：乙醇含碳、氢、氧三种元素，在充足空气中完全燃烧时，碳变成二氧化碳、氢变成水，反应为 C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O。只有在氧气不足时才会产生一氧化碳。因此选 B。' },
      { type: 'warn', label: '易错·乙醛与乙酸别混淆', text: '乙醇催化氧化先得到<strong>乙醛 CH₃CHO</strong>（官能团醛基 —CHO），若继续深度氧化才会变成乙酸 CH₃COOH（官能团羧基 —COOH）。乙醛还能被继续氧化，但乙醛本身含的是醛基不是羧基，做题时别把 CH₃CHO 和 CH₃COOH 写反。' }
    ],
    exercises: [
      { type: 'choice', question: '乙醇的官能团是下列哪一个？', options: ['羧基 —COOH', '羟基 —OH', '醛基 —CHO', '碳碳双键 C=C'], answer: '羟基 —OH', explanation: '乙醇的结构简式是 CH₃—CH₂—OH，分子里决定其特性的原子团是羟基 —OH，这就是乙醇的官能团。羧基在乙酸中、醛基在乙醛中、碳碳双键在乙烯中，都不属于乙醇。' },
      { type: 'choice', question: '下列各组写法中，表示"羟基"的是？', options: ['OH⁻', '—OH', 'OH', 'O₂H'], answer: '—OH', explanation: '羟基是有机物中常见的官能团，写法为 —OH，它不带净电荷。OH⁻ 是氢氧根离子，带一个负电荷，存在于碱中；OH 没有这种标准含义；O₂H 更不是羟基。所以表示羟基的只能是 —OH。' },
      { type: 'choice', question: '乙醇在空气中完全燃烧，生成的物质是？', options: ['一氧化碳和水', '二氧化碳和水', '乙醛和水', '碳和氢气'], answer: '二氧化碳和水', explanation: '乙醇 C₂H₅OH 完全燃烧时，其中的碳全部转化为二氧化碳、氢全部转化为水，反应方程式为 C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O。只有在氧气不足时才会生成一氧化碳。因此选二氧化碳和水。' },
      { type: 'fill', question: '决定有机物化学特性的原子或原子团叫___，乙醇的该基团是羟基 —OH。', answer: '官能团', explanation: '官能团是有机化学里决定化合物主要化学性质的原子或原子团。乙醇因为含有羟基 —OH，才表现出能溶于水、与钠反应、可被氧化等特性。认官能团是推断有机物性质的关键方法。' },
      { type: 'fill', question: '在铜或银催化、加热条件下，乙醇被空气中的氧气氧化，先生成含有醛基 —CHO 的___（写化学式）。', answer: 'CH₃CHO', explanation: '乙醇 CH₃CH₂OH 在铜或银催化并加热时，脱去两个氢原子（一个来自与氧相连的碳、一个来自羟基氧），生成乙醛 CH₃CHO，分子中带有醛基 —CHO。若继续深度氧化，乙醛才会变成乙酸 CH₃COOH。' }
    ]
  });
})();
