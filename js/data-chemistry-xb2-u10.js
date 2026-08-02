/* ============================================================
 * 化学 · 选择性必修2 物质结构与性质 · 第二章 分子结构与性质
 * 课时10：配合物理论简介
 * 数据注入：chemistry.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u10',
    name: '配合物理论简介',
    chapter: '选择性必修2 物质结构与性质 · 第二章 分子结构与性质',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是配合物：一个“中心”带着一圈“配角”' },
      { type: 'paragraph', text: '有些化合物里，一个金属离子（或原子）坐镇中心，周围一圈小分子或离子通过配位键“抱”住它，形成一个稳定的复杂离子，再和外界离子组合成化合物，这类物质就叫配合物（也叫络合物）。例如 [Cu(NH₃)₄]SO₄ 里，Cu²⁺ 是中心，4 个 NH₃ 抱住它形成 [Cu(NH₃)₄]²⁺，再和外界的 SO₄²⁻ 组合。把 NH₃ 换成别的，又得到 [Ag(NH₃)₂]OH 等不同配合物。' },
      { type: 'keypoint', label: '重点·配合物的组成', text: '<strong>配合物 = 内界（中心离子/原子 + 配体）+ 外界。中心离子提供空轨道，配体提供孤电子对，通过配位键结合；直接与中心结合的配体个数叫配位数。</strong>' },
      { type: 'list', items: ['中心离子/原子：通常是金属离子（如 Cu²⁺、Ag⁺、Fe³⁺）', '配体：提供孤电子对的小分子或离子（如 NH₃、H₂O、OH⁻、SCN⁻、Cl⁻）', '配位数：直接与中心结合的配体个数（如 [Cu(NH₃)₄]²⁺ 配位数 4）'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">配合物 [Cu(NH₃)₄]SO₄ 的组成</text><rect x="120" y="90" width="320" height="130" rx="10" fill="none" stroke="#b5651d" stroke-width="2"/><text x="130" y="110" font-size="12" fill="#d98e3a" text-anchor="middle">内界 [ ]</text><circle cx="280" cy="155" r="28" fill="#b5651d"/><text x="280" y="160" font-size="14" fill="#ffffff" text-anchor="middle">Cu²⁺</text><circle cx="200" cy="120" r="20" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="200" y="124" font-size="11" fill="#4a3724" text-anchor="middle">NH₃</text><circle cx="360" cy="120" r="20" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="360" y="124" font-size="11" fill="#4a3724" text-anchor="middle">NH₃</text><circle cx="200" cy="195" r="20" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="200" y="199" font-size="11" fill="#4a3724" text-anchor="middle">NH₃</text><circle cx="360" cy="195" r="20" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="360" y="199" font-size="11" fill="#4a3724" text-anchor="middle">NH₃</text><text x="500" y="155" font-size="14" fill="#4a3724" text-anchor="middle">SO₄²⁻</text><text x="500" y="180" font-size="12" fill="#d98e3a" text-anchor="middle">外界</text><text x="340" y="255" font-size="12" fill="#4a3724" text-anchor="middle">方括号内是内界，括号外是外界</text></svg>', caption: '图1　[Cu(NH₃)₄]SO₄ 中，Cu²⁺ 为中心、4 个 NH₃ 为配体（配位数 4）构成内界，SO₄²⁻ 为外界。' },
      { type: 'heading', text: '二、配位键是怎么“搭”起来的' },
      { type: 'paragraph', text: '配合物的核心是配位键。中心离子（或原子）有空的轨道，像个“空插座”；配体有孤电子对，像“插头”。配体把孤电子对“插”进中心的空轨道，两者共用这对电子，就形成配位键。一旦形成，配位键和普通共价键没两样——区别只在“这对电子原来全归配体所有”。以 Cu²⁺ 与 4 个 NH₃ 为例：Cu²⁺ 提供空轨道，每个 NH₃ 拿出孤电子对，形成 4 个配位键，得到深蓝色的 [Cu(NH₃)₄]²⁺。' },
      { type: 'keypoint', label: '重点·配位键的形成', text: '<strong>中心离子/原子提供空轨道，配体提供孤电子对，二者共用这对电子形成配位键。</strong>中心和配体通过配位键结合成内界配离子。' },
      { type: 'list', items: ['中心：有可接受电子的空轨道（如 Cu²⁺、Ag⁺）', '配体：有可给出的孤电子对（如 NH₃、H₂O、Cl⁻、SCN⁻）', '配位键一旦形成，性质同普通共价键'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">配位键：中心空轨道 ← 配体孤电子对</text><circle cx="200" cy="150" r="30" fill="#b5651d"/><text x="200" y="155" font-size="14" fill="#ffffff" text-anchor="middle">Cu²⁺</text><text x="200" y="105" font-size="12" fill="#d98e3a" text-anchor="middle">空轨道</text><circle cx="380" cy="110" r="24" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="380" y="114" font-size="12" fill="#4a3724" text-anchor="middle">NH₃</text><text x="380" y="80" font-size="12" fill="#d98e3a" text-anchor="middle">孤电子对</text><line x1="230" y1="140" x2="356" y2="118" stroke="#b5651d" stroke-width="3"/><polygon points="356,118 346,113 347,123" fill="#b5651d"/><circle cx="380" cy="190" r="24" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="380" y="194" font-size="12" fill="#4a3724" text-anchor="middle">NH₃</text><line x1="230" y1="160" x2="356" y2="182" stroke="#b5651d" stroke-width="3"/><polygon points="356,182 346,177 347,187" fill="#b5651d"/><text x="520" y="150" font-size="13" fill="#4a3724" text-anchor="middle">→ 4 个配位键</text><text x="520" y="172" font-size="13" fill="#4a3724" text-anchor="middle">形成 [Cu(NH₃)₄]²⁺</text></svg>', caption: '图2　中心 Cu²⁺ 提供空轨道，每个 NH₃ 提供孤电子对，二者共用电子形成配位键。' },
      { type: 'heading', text: '三、配合物的颜色与检验应用' },
      { type: 'paragraph', text: '很多配合物颜色鲜艳，因为中心离子与配体结合后，电子在不同能级间跃迁吸收了特定波长的光，于是显现颜色。化学上常利用这一点做离子检验：Fe³⁺ 遇到 SCN⁻ 生成血红色的硫氰合铁配合物，是检验 Fe³⁺ 的特征反应；Cu²⁺ 的稀溶液本是浅蓝，加入过量氨水后会生成深蓝色的 [Cu(NH₃)₄]²⁺，也可用于检验 Cu²⁺。此外，许多染料、颜料本身就是配合物（如叶绿素含镁配合物、血红素含铁配合物）。' },
      { type: 'keypoint', label: '重点·配合物的典型应用', text: '<strong>Fe³⁺ + SCN⁻ → 血红色配合物（检验 Fe³⁺）；Cu²⁺ + 过量 NH₃ → 深蓝色 [Cu(NH₃)₄]²⁺（检验 Cu²⁺）；叶绿素、血红素、许多染料都是配合物。</strong>' },
      { type: 'table', headers: ['配合物（配离子）', '中心', '配体', '配位数', '颜色/用途'], rows: [['[Cu(NH₃)₄]²⁺', 'Cu²⁺', 'NH₃', '4', '深蓝色 / 检验 Cu²⁺'], ['[Ag(NH₃)₂]⁺', 'Ag⁺', 'NH₃', '2', '用于银镜反应等'], ['[Fe(SCN)]²⁺', 'Fe³⁺', 'SCN⁻', '1', '血红色 / 检验 Fe³⁺'], ['叶绿素', 'Mg²⁺', '卟啉环', '—', '光合作用']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">配合物的显色检验应用</text><rect x="90" y="90" width="180" height="110" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="130" font-size="13" fill="#4a3724" text-anchor="middle">Fe³⁺ + SCN⁻</text><text x="180" y="160" font-size="14" fill="#b5651d" font-weight="bold" text-anchor="middle">血红色</text><rect x="410" y="90" width="180" height="110" rx="10" fill="#3a6ea5" stroke="#b5651d" stroke-width="2"/><text x="500" y="130" font-size="13" fill="#ffffff" text-anchor="middle">Cu²⁺ + NH₃</text><text x="500" y="160" font-size="14" fill="#ffffff" font-weight="bold" text-anchor="middle">深蓝色</text><text x="340" y="240" font-size="12" fill="#4a3724" text-anchor="middle">特征显色反应常用于检验金属离子</text></svg>', caption: '图3　Fe³⁺ 遇 SCN⁻ 显血红色、Cu²⁺ 遇过量 NH₃ 显深蓝色，都是配合物显色的典型检验。' },
      { type: 'heading', text: '四、配合物与生命活动' },
      { type: 'paragraph', text: '配合物并不只是试管里的“花花绿绿”，它们和生命息息相关。植物光合作用的叶绿素是含镁 Mg 的配合物；动物血液里搬运氧气的血红素是含铁的配合物；很多酶、维生素也以配合物形式存在。可以说，没有配合物，就没有地球上的生命。这也说明了“结构决定性质、性质服务生命”这条主线。' },
      { type: 'warn', label: '易错·内界与外界用方括号区分', text: '写配合物时，方括号 [ ] 内的是“内界”（配离子），括号外的是“外界”。内界的配位键很强、在水溶液里一般不易解离；而外界离子（如 [Cu(NH₃)₄]SO₄ 中的 SO₄²⁻）是普通离子键，溶于水就解离成 SO₄²⁻。所以往 [Cu(NH₃)₄]SO₄ 溶液里加 Ba²⁺ 会生成 BaSO₄ 沉淀（来自外界），但加稀酸才会破坏内界的 [Cu(NH₃)₄]²⁺（NH₃ 被 H⁺ 夺走）。别把内界和外界的解离混为一谈。' },
      { type: 'example', label: '例题·配合物组成', text: '题目：配合物 [Cu(NH₃)₄]SO₄ 中，下列说法正确的是？<br>A. 中心离子是 NH₃<br>B. 配体是 Cu²⁺，配位数 4<br>C. 外界是 SO₄²⁻<br>D. 配位数是 2<br><br><strong>解析</strong>：[Cu(NH₃)₄]SO₄ 中中心离子是 Cu²⁺，配体是 4 个 NH₃，配位数是 4，内界为 [Cu(NH₃)₄]²⁺，外界是 SO₄²⁻。所以 A、B、D 都错（把中心和配体说反、配位数错），只有 C“外界是 SO₄²⁻”正确。' },
      { type: 'tip', label: '提示·判断中心与配体', text: '拿到一个配合物，先找方括号里的金属离子——它就是中心；括号里跟在金属后面的小分子/离子就是配体；配体个数即配位数。例如 [Ag(NH₃)₂]OH：中心 Ag⁺、配体 2 个 NH₃、配位数 2、外界 OH⁻。多练几次这个“拆括号”动作，配合物组成就再也难不倒你了。' },
      { type: 'heading', text: '五、本章小结' },
      { type: 'paragraph', text: '第二章从共价键讲到分子空间结构，再讲到分子间作用力和配合物。贯穿始终的是“结构决定性质”：电子怎么共用决定键的类型，轨道怎么杂化决定分子形状，分子是否对称决定极性，分子间力与氢键决定熔沸点和溶解性，配位键则让金属离子“带领”配体形成多姿多彩的配合物。把这些“结构—性质”链条记牢，高中结构化学就通了。' }
    ],
    exercises: [
      { type: 'choice', question: '配合物 [Cu(NH₃)₄]SO₄ 的中心离子和配体分别是？', options: ['中心 NH₃，配体 Cu²⁺', '中心 Cu²⁺，配体 NH₃', '中心 SO₄²⁻，配体 NH₃', '中心 Cu²⁺，配体 SO₄²⁻'], answer: '中心 Cu²⁺，配体 NH₃', explanation: '[Cu(NH₃)₄]SO₄ 方括号内是内界 [Cu(NH₃)₄]²⁺，其中金属离子 Cu²⁺ 是中心离子，4 个 NH₃ 分子是配体（提供孤电子对），配位数 4；SO₄²⁻ 在括号外是外界。所以中心是 Cu²⁺、配体是 NH₃。' },
      { type: 'choice', question: '检验 Fe³⁺ 常用 SCN⁻，反应后溶液显什么颜色？', options: ['白色沉淀', '血红色', '深蓝色', '黄色'], answer: '血红色', explanation: 'Fe³⁺ 与 SCN⁻ 结合生成血红色的硫氰合铁配合物（如 [Fe(SCN)]²⁺），这是检验 Fe³⁺ 的特征显色反应；深蓝色是 Cu²⁺ 与过量 NH₃ 形成 [Cu(NH₃)₄]²⁺ 的颜色，白色沉淀和黄色均非该反应现象。' },
      { type: 'choice', question: '配合物中“配位数”指的是？', options: ['中心离子的电荷数', '直接与中心结合的配体个数', '外界离子个数', '配体的电荷数'], answer: '直接与中心结合的配体个数', explanation: '配位数是指直接与中心离子（或原子）以配位键结合的配体数目。例如 [Cu(NH₃)₄]²⁺ 有 4 个 NH₃ 配体，配位数为 4；[Ag(NH₃)₂]⁺ 配位数为 2。它与中心电荷、外界离子数、配体电荷都不同。' },
      { type: 'fill', question: '配合物 [Cu(NH₃)₄]SO₄ 中，方括号外的 SO₄²⁻ 属于___（填“内界”或“外界”）。', answer: '外界', explanation: '配合物中，方括号 [ ] 内的是内界（配离子 [Cu(NH₃)₄]²⁺），括号外的是外界。外界 SO₄²⁻ 与内界靠离子键结合，溶于水即解离成 SO₄²⁻；内界的配位键较强，一般不易解离。' },
      { type: 'fill', question: 'Cu²⁺ 与过量氨水反应，生成深蓝色的配离子___（写出该配离子的化学式）。', answer: '[Cu(NH₃)₄]²⁺', explanation: 'Cu²⁺ 有空轨道，NH₃ 有孤电子对，二者通过配位键结合。Cu²⁺ 与过量氨水反应生成深蓝色的四氨合铜(II)配离子，化学式为 [Cu(NH₃)₄]²⁺，配位数为 4，常用于检验 Cu²⁺。' }
    ]
  });
})();
