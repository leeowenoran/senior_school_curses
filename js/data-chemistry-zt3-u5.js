/* 化学 · 高三复习 · 有机化学 · 专题二 · 课时：烯烃 */
(function () {
  var v = gzGetVolume('chemistry', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u5',
    name: '烯烃',
    chapter: '有机化学 · 专题二 烃',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、烯烃：含有碳碳双键的烃' },
      { type: 'paragraph', text: '烯烃是烃家族里含<strong>碳碳双键（C=C）</strong>的一类，因为双键比单键多出一个键，所以它不像烷烃那样"饱和"，而是<strong>不饱和烃</strong>。最简单的烯烃是乙烯 C₂H₄。烯烃的通式是 <strong>CₙH₂ₙ（n≥2）</strong>，比同碳数的烷烃少了两个氢——少掉的这两个氢，正是双键占用的位置。你可以把双键想象成两个碳原子之间多牵了一只手，这只多余的手让它能"加"进别的原子。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙烯 C2H4 的平面结构</text><line x1="220" y1="160" x2="300" y2="160" stroke="#b5651d" stroke-width="2"/><line x1="380" y1="160" x2="460" y2="160" stroke="#b5651d" stroke-width="2"/><line x1="300" y1="155" x2="380" y2="155" stroke="#b5651d" stroke-width="2"/><line x1="300" y1="165" x2="380" y2="165" stroke="#b5651d" stroke-width="2"/><circle cx="220" cy="160" r="16" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="220" y="165" font-size="13" fill="#4a3724" text-anchor="middle">H2C</text><circle cx="460" cy="160" r="16" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="460" y="165" font-size="13" fill="#4a3724" text-anchor="middle">CH2</text><text x="340" y="120" font-size="13" fill="#d98e3a" text-anchor="middle" font-weight="bold">C=C 双键</text><text x="340" y="240" font-size="13" fill="#4a3724" text-anchor="middle">六个原子共平面，键角约 120°</text><text x="340" y="268" font-size="13" fill="#4a3724" text-anchor="middle">双键不能旋转，因此分子呈平面形</text></svg>', caption: '图1　乙烯分子六个原子共平面，碳碳双键不能旋转，键角约为120度。' },
      { type: 'heading', text: '二、结构特点：平面结构与不可旋转' },
      { type: 'paragraph', text: '碳碳双键里包含一个σ键和一个π键。<strong>π键的存在让双键不能自由旋转</strong>，于是乙烯分子里和两个双键碳相连的所有原子，全都处在同一个平面上，呈平面形。乙烯中两个碳原子和四个氢原子共六个原子共面，键角大约是 <strong>120°</strong>。这和烷烃能扭来扭去的正四面体骨架很不一样，是判断分子空间构型的关键。' },
      { type: 'list', items: ['含 C=C 双键，属于不饱和烃，通式 CₙH₂ₙ（n≥2）', '双键不能旋转，含双键碳的六个原子共平面', '双键中有一个 π 键较易断裂，所以烯烃比烷烃活泼', '同系物相差 CH₂，如乙烯、丙烯、丁烯'] },
      { type: 'heading', text: '三、物理性质' },
      { type: 'paragraph', text: '烯烃的物理性质和烷烃很像：都<strong>难溶于水</strong>，易溶于有机溶剂；随着碳原子数增多，沸点和密度也逐渐升高。乙烯在常温常压下是无色、稍有气味的气体，能使水果加快成熟，所以常被用作水果的催熟剂。烯烃的状态递变同样遵循碳数越多越"重"的规律。' },
      { type: 'list', items: ['乙烯 C₂H₄：无色气体，微溶于水，可作催熟剂', '丙烯 C₃H₆：无色气体，是生产聚丙烯的原料', '碳数增多时沸点升高，密度增大，但仍小于水'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙烯的加成反应（使溴水褪色）</text><rect x="40" y="80" width="270" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="175" y="118" font-size="15" fill="#4a3724" text-anchor="middle">CH2=CH2 + Br2</text><text x="175" y="148" font-size="13" fill="#4a3724" text-anchor="middle">溴水（橙红色）</text><polygon points="330,125 318,137 342,137" fill="#b5651d"/><rect x="370" y="80" width="270" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="505" y="118" font-size="15" fill="#4a3724" text-anchor="middle">CH2Br—CH2Br</text><text x="505" y="148" font-size="13" fill="#4a3724" text-anchor="middle">1,2-二溴乙烷（无色）</text><text x="340" y="220" font-size="13" fill="#4a3724" text-anchor="middle">双键打开，两个溴原子加到两端</text><text x="340" y="250" font-size="13" fill="#d98e3a" text-anchor="middle" font-weight="bold">橙红色溴水褪色，是检验双键的常用方法</text></svg>', caption: '图2　乙烯与溴水发生加成，双键打开使溴原子加上去，溴水橙红色褪去。' },
      { type: 'heading', text: '四、化学性质：加成、氧化、加聚' },
      { type: 'paragraph', text: '烯烃因为双键里的 π 键容易断开，所以比烷烃活泼得多，主要有三类反应。①<strong>加成反应</strong>：双键打开，把原子直接加在两端，例如 <strong>CH₂=CH₂ + Br₂ → CH₂Br—CH₂Br</strong>（溴水褪色）；也能和 H₂、HCl、H₂O 加成。②<strong>氧化反应</strong>：能在空气中燃烧，还能被酸性高锰酸钾（KMnO₄）氧化，使紫色的 KMnO₄ 溶液褪色。③<strong>加聚反应</strong>：许多乙烯分子手拉手连成长链。' },
      { type: 'table', headers: ['反应类型', '代表方程式', '现象与产物'], rows: [['加成（与 Br₂）', 'CH₂=CH₂ + Br₂ → CH₂Br—CH₂Br', '溴水褪色，得 1,2-二溴乙烷'], ['加成（与水）', 'CH₂=CH₂ + H₂O →（催化剂）CH₃CH₂OH', '工业制乙醇'], ['氧化（燃烧）', 'C₂H₄ + 3O₂ →（点燃）2CO₂ + 2H₂O', '火焰明亮伴黑烟'], ['氧化（被 KMnO₄）', 'C₂H₄ 使酸性 KMnO₄ 褪色', '常用来检验双键']] },
      { type: 'keypoint', label: '重点·加聚反应', text: '<strong>加成聚合（加聚）是许多小分子通过打开不饱和键、手拉手连成大分子，且不生成小分子副产物。</strong>乙烯加聚写成：nCH₂=CH₂ →（催化剂）—[CH₂—CH₂]ₙ—，产物是聚乙烯，方括号里的 —[CH₂—CH₂]— 叫链节，外面的 n 表示重复次数。聚乙烯是常见的塑料，书包、水管里都有它。加聚没有小分子（如水）生成，这是和缩聚最大的区别。' },
      { type: 'heading', text: '五、加聚反应：小乙烯变成长链' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙烯的加聚反应（生成聚乙烯）</text><text x="120" y="150" font-size="14" fill="#4a3724" text-anchor="middle">n 个 CH2=CH2</text><polygon points="220,150 208,162 232,162" fill="#b5651d"/><text x="340" y="150" font-size="14" fill="#d98e3a" text-anchor="middle" font-weight="bold">（催化剂）</text><text x="500" y="150" font-size="14" fill="#4a3724" text-anchor="middle">—[CH2—CH2]n—</text><line x1="60" y1="220" x2="170" y2="220" stroke="#b5651d" stroke-width="6"/><line x1="200" y1="220" x2="310" y2="220" stroke="#b5651d" stroke-width="6"/><line x1="340" y1="220" x2="450" y2="220" stroke="#b5651d" stroke-width="6"/><line x1="480" y1="220" x2="590" y2="220" stroke="#b5651d" stroke-width="6"/><text x="340" y="270" font-size="13" fill="#4a3724" text-anchor="middle">双键打开，许多乙烯单元连成一条长链</text><text x="340" y="298" font-size="13" fill="#d98e3a" text-anchor="middle" font-weight="bold">产物是聚乙烯，无小分子副产物生成</text></svg>', caption: '图3　许多乙烯分子在催化剂作用下打开双键，连成长链聚乙烯。' },
      { type: 'warn', label: '易错·加成和取代别搞反', text: '烯烃和卤素（如 Br₂）反应是<strong>加成</strong>不是取代。加成时双键直接打开，把两个溴原子加在两端，没有小分子生成，溴水会褪色；而烷烃和卤素是光照下的取代，会放出卤化氢。考试常把"乙烯使溴水褪色"拿来考反应类型，记住：褪色且无小分子产物 → 加成。' },
      { type: 'example', label: '例题·鉴别甲烷和乙烯', text: '现有两瓶无色气体，分别是甲烷和乙烯，只用一种试剂如何区分它们？<br><br><strong>解析</strong>：可以分别通入溴水或酸性高锰酸钾溶液。乙烯含有碳碳双键，能和 Br₂ 发生加成使溴水橙红色褪去，也能被 KMnO₄ 氧化使其紫色褪去；而甲烷是饱和烷烃，和溴水、酸性 KMnO₄ 都不反应，溶液颜色不变。因此能使溴水或酸性 KMnO₄ 褪色的是乙烯，不褪色的是甲烷。这是检验不饱和键最常用的方法。' },
      { type: 'tip', label: '提示·检验双键三字诀', text: '看到烯烃只记三招：<strong>"溴水褪、高锰褪、能加聚"。</strong>溴水褪色和酸性高锰酸钾褪色都能证明有碳碳双键（或三键）这种不饱和键；能发生加聚说明有双键可打开连长链。做题时遇到"使溴水褪色"基本就可以往加成反应上靠。' }
    ],
    exercises: [
      { type: 'choice', question: '烯烃的通式是下列哪一个？', options: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₋₆'], answer: 'CₙH₂ₙ', explanation: '烯烃分子中含有碳碳双键，属于不饱和烃，比同碳数烷烃少两个氢，所以通式为 CₙH₂ₙ（n≥2）。CₙH₂ₙ₊₂ 是烷烃通式，CₙH₂ₙ₋₂ 是炔烃通式，CₙH₂ₙ₋₆ 是苯及其同系物通式。因此选 CₙH₂ₙ。' },
      { type: 'choice', question: '乙烯能使溴水褪色，是因为发生了什么反应？', options: ['取代反应', '加成反应', '加聚反应', '酯化反应'], answer: '加成反应', explanation: '乙烯含有碳碳双键，和溴水相遇时双键打开，两个溴原子分别加到两个碳原子上生成无色的 1,2-二溴乙烷，反应中没有小分子生成，属于加成反应。溴水因溴被消耗而褪色。取代会放出小分子、加聚生成高分子，都不符合这一过程的直接现象。所以选加成反应。' },
      { type: 'choice', question: '关于乙烯分子结构的说法，正确的是？', options: ['所有原子不在同一平面', '双键可以绕键轴自由旋转', '六个原子共平面，键角约120°', '与甲烷一样是正四面体'], answer: '六个原子共平面，键角约120°', explanation: '乙烯分子中两个碳原子和四个氢原子共六个原子处于同一平面，呈平面形，键角约为 120°，且碳碳双键不能自由旋转，因此分子是平面结构而非正四面体。甲烷才是正四面体且能旋转。所以正确的描述是六个原子共平面、键角约 120°。' },
      { type: 'fill', question: '乙烯燃烧的化学方程式为 C₂H₄ + 3O₂ →（点燃）___ + 2H₂O。', answer: '2CO₂', explanation: '乙烯 C₂H₄ 在空气中燃烧属于氧化反应，产物是二氧化碳和水。根据原子守恒，左边有 2 个碳原子和 4 个氢原子，右边已有 2 个 H₂O 提供 4 个氢，所以碳应生成 2 个 CO₂。完整方程式为 C₂H₄ + 3O₂ →（点燃）2CO₂ + 2H₂O。乙烯含碳量比烷烃高，燃烧时火焰明亮并伴有黑烟。' },
      { type: 'fill', question: '乙烯发生加聚反应生成聚乙烯，其链节（重复单元）写作 ___。', answer: '—[CH₂—CH₂]ₙ—', explanation: '乙烯加聚时双键打开，许多 CH₂=CH₂ 单元连成一条长链，产物写作 —[CH₂—CH₂]ₙ—，其中方括号内的 —CH₂—CH₂— 是链节，n 表示重复次数。加聚反应不生成小分子副产物，这是它和缩聚反应的根本区别。聚乙烯是重要的塑料，广泛用于包装和管道。' }
    ]
  });
})();
