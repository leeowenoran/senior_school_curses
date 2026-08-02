/* 生物学 · 高三复习 · 稳态与调节 · 第5章 · 课时：第3节 环境因素参与调节植物的生命活动 */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u21',
    name: '第3节 环境因素参与调节植物的生命活动',
    chapter: '稳态与调节 · 第5章 植物生命活动的调节',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、光参与调节植物的生命活动' },
      { type: 'paragraph', text: '我们最熟悉的光的作用是<strong>光合作用</strong>——光提供能量，把二氧化碳和水变成有机物。但光对植物远不止「供能」这么简单。科学研究发现，光还是一种<strong>信号分子</strong>，植物通过光敏色素等受体「感受」光的强弱、方向和昼夜长短，从而调节发芽、生长、开花、衰老等过程。可以说，光既是能量来源，也是调节生长发育的信息。' },
      { type: 'list', items: ['光是光合作用的能量来源，制造有机物', '光作为信号调节萌发、向光性、开花等', '植物靠光敏色素等受体感知光质、光强、光照时间', '光的方向影响生长方向（向光性）'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 光既是能量来源也是调节信号</text><rect x="40" y="70" width="260" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="170" y="104" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">光 → 光合作用</text><text x="170" y="130" font-size="12" fill="#5aa832" text-anchor="middle">供能制造有机物</text><polygon points="301,115 338,103 338,127" fill="#3f7d1e"/><rect x="340" y="70" width="260" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="470" y="104" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">光 → 信号调节</text><text x="470" y="130" font-size="12" fill="#5aa832" text-anchor="middle">调控开花与生长</text><text x="340" y="300" font-size="13" fill="#2e3a22" text-anchor="middle">植物通过光敏色素感受光信号，把光能转化为生长发育的指令。</text></svg>', caption: '图1　光既为光合作用供能，又作为信号分子调节植物开花与生长。' },
      { type: 'keypoint', label: '重点·光是信号分子', text: '<strong>光作为信号：</strong>植物体内有光敏色素、隐花色素等光受体，能感知红光、远红光、蓝光等不同的光。光信号被接收后经过一系列信息传递，调控基因表达，从而影响种子萌发、幼苗生长方向、开花时间等。例如莴苣种子需红光照射才易萌发，远红光则抑制，就是光敏色素在起作用。' },
      { type: 'paragraph', text: '最典型的光信号调节现象是<strong>光周期现象</strong>：许多植物的开花受昼夜长短（即光照时间长短）控制。科学家据此把植物分成不同类群——只要日照足够长才开花的叫长日照植物，而要在日照变短时开花的叫短日照植物。农民正是利用这点，通过控制光照时间来让菊花、大豆在需要的时候开花。' },
      { type: 'table', headers: ['类型', '开花所需日照', '举例', '常见季节'], rows: [['长日照植物', '日照长于临界值才开花', '小麦、萝卜、天仙子', '春夏季长日照'], ['短日照植物', '日照短于临界值才开花', '菊花、大豆、水稻', '秋冬季短日照'], ['日中性植物', '与日照长短无关', '番茄、黄瓜、月季', '四季均可']] },
      { type: 'keypoint', label: '重点·光周期现象', text: '<strong>光周期现象：</strong>植物开花等生理过程受昼夜长短（日照长度）规律性变化调节的现象。长日照植物需日照时长超过某个临界值才开花，短日照植物需日照短于临界值才开花。生产中用人工延长或缩短光照，可让花卉在节日准时开放，也能调控作物播种与收获期。' },
      { type: 'warn', label: '易错·决定开花的关键是暗期', text: '很多人以为光周期由「日照长度」直接决定，其实对短日照植物来说，真正关键的是连续黑暗（暗期）的长度：暗期足够长才开花，哪怕白天很短，只要暗期被闪光打断就不开花。所以准确说，是暗期长度起决定作用，而不是白天的长短本身。考题常在此设陷阱。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 长日照植物与短日照植物的光周期</text><rect x="40" y="70" width="280" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="100" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">长日照植物</text><text x="180" y="124" font-size="12" fill="#5aa832" text-anchor="middle">长日照才开花</text><text x="180" y="146" font-size="12" fill="#2e3a22" text-anchor="middle">如小麦</text><polygon points="321,115 358,103 358,127" fill="#3f7d1e"/><rect x="360" y="70" width="280" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">短日照植物</text><text x="500" y="124" font-size="12" fill="#5aa832" text-anchor="middle">短日照才开花</text><text x="500" y="146" font-size="12" fill="#2e3a22" text-anchor="middle">如菊花</text><text x="340" y="300" font-size="13" fill="#2e3a22" text-anchor="middle">临界日长是开关：超过或低于它，植物才启动开花程序。</text></svg>', caption: '图2　长日照植物与短日照植物对日照长度的响应不同，临界日长是关键。' },
      { type: 'heading', text: '二、温度参与调节植物的生命活动' },
      { type: 'paragraph', text: '除了光，<strong>温度</strong>也深刻影响植物生长、发育和开花。种子萌发、茎叶生长、开花结果都要求合适的温度范围，低温或高温会延缓甚至停止某些过程。其中最著名的是<strong>春化作用</strong>：某些植物必须经历一段持续低温，才能由营养生长转入开花，否则只长叶不开花。' },
      { type: 'list', items: ['春化作用：低温诱导植物开花（如冬小麦、萝卜）', '年温周期：有些植物需越冬低温才次年开花', '温度影响酶活性，进而影响代谢与生长速度', '低温还可提高抗逆性，与脱落酸协同'] },
      { type: 'example', label: '例题·春化作用', text: '题目：冬小麦在秋季播种，若把它一直放在温暖室内不经历低温，结果是？<br>A. 照常开花　B. 只长苗不开花　C. 立即死亡　D. 提前结果<br>解析：冬小麦需要经历冬天的低温（春化作用）才能诱导开花。若始终处于温暖环境、没经过低温，它便不能完成开花转变，只会进行营养生长、只长苗而不开花。这说明春化（低温）是它开花的必要前提。答案选只长苗不开花。' },
      { type: 'tip', label: '提示·春化与光周期配合', text: '很多植物要「先冷后长再开花」：先经低温春化解除开花障碍，再在合适光周期下开花。例如冬小麦秋天发芽、越冬经受低温、来年春天长日照下抽穗。记住春化是「低温诱导开花」，不是「低温促进生长」，二者含义不同。' },
      { type: 'heading', text: '三、重力等环境因素的参与调节' },
      { type: 'paragraph', text: '把一颗种子横着埋进土里，无论它怎么躺，根总会向下扎、茎总会向上长，这就是<strong>重力</strong>在调节。根对重力敏感，表现为向地性（朝重力方向生长）；茎表现背地性（背离重力生长）。重力通过影响生长素的横向分布来起作用：横放时生长素在近地侧积累，而根对生长素敏感，近地侧高浓度反而抑制，于是根向下弯。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 重力引起生长素横向分布（根向地性）</text><rect x="300" y="60" width="80" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="87" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">横放根尖</text><path d="M340 104 L270 180" stroke="#3f7d1e" stroke-width="4" fill="none"/><path d="M340 104 L410 180" stroke="#3f7d1e" stroke-width="4" fill="none"/><text x="250" y="210" font-size="13" fill="#5aa832" text-anchor="middle">根向下（近地侧受抑）</text><text x="430" y="210" font-size="13" fill="#5aa832" text-anchor="middle">茎向上（远地侧慢）</text><polygon points="300,250 340,238 340,262" fill="#3f7d1e"/><text x="430" y="260" font-size="13" fill="#2e3a22" text-anchor="middle">重力</text><text x="340" y="310" font-size="13" fill="#2e3a22" text-anchor="middle">重力使生长素横向分布不均，根近地侧浓度高被抑制而向地生长。</text></svg>', caption: '图3　横放时重力导致生长素横向分布不均，根表现向地性、茎表现背地性。' },
      { type: 'keypoint', label: '重点·重力调节生长方向', text: '<strong>重力通过生长素分布调节生长方向：</strong>植物横放后，受重力影响生长素向下（近地侧）运输积累。根对生长素敏感，近地侧高浓度抑制生长，远地侧低浓度促进，于是根弯向地心（向地性）；茎对生长素较不敏感，近地侧高浓度仍促进且更快，于是茎背离地心（背地性）。这把前两节的生长素两重性和本节环境因素连起来了。' },
      { type: 'example', label: '例题·根的向地性', text: '题目：将植物横放，根向地生长的主要原因是？<br>A. 近地侧生长素少促进慢　B. 近地侧生长素多被抑制<br>C. 远地侧生长素多被抑制　D. 生长素均匀不运输<br>解析：横放时重力使生长素向近地侧积累，根对生长素敏感，近地侧浓度偏高反而抑制生长；远地侧浓度低促进生长，两侧长势不同使根向下弯，即向地性。所以是近地侧生长素多被抑制，答案选近地侧生长素多被抑制。' },
      { type: 'warn', label: '易错·根与茎对重力反应相反', text: '根和茎都受重力影响，但反应相反：根向地、茎背地。原因是两者对生长素敏感度不同——根更敏感，高浓度即抑制；茎较迟钝，高浓度仍促进。不要一看到「生长素多」就都答「长得快」，在根上「多」可能是「被抑制」。这是两重性在重力环境下的直接体现，考试高频。' },
      { type: 'tip', label: '提示·三大环境因素一句话', text: '把本节三大因素浓缩成一句话：光管「何时开花与向哪边长」，温度管「能否启动开花（春化）」，重力管「根向下茎向上」。它们都通过影响植物激素（尤其生长素）的分布或含量来发挥作用，环境因素和激素调节是密不可分的。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于光对植物调节的叙述，正确的是？', options: ['光只用于光合作用供能', '光可作为信号分子调节开花', '光对种子萌发没有影响', '植物没有感受光的受体'], answer: '光可作为信号分子调节开花', explanation: '光对植物有两方面作用：一是作为光合作用能量来源制造有机物，二是作为信号分子通过光敏色素等受体调节萌发、向光性、开花等过程。例如光周期现象中，日照长短直接决定长日照或短日照植物开花。因此说光只供能、不影响萌发、植物无光受体都是错误的，正确说法是光可作为信号分子调节开花。' },
      { type: 'choice', question: '冬小麦需要经历低温才能开花，这种现象称为？', options: ['光周期现象', '春化作用', '顶端优势', '向地性'], answer: '春化作用', explanation: '春化作用是指某些植物必须经历一段持续低温，才能由营养生长转入生殖生长、诱导开花的现象，冬小麦、萝卜等都需要越冬低温。光周期现象是日照长短调节开花，顶端优势是顶芽抑制侧芽，向地性是重力调节，均与低温诱导开花不同。因此答案是春化作用。' },
      { type: 'choice', question: '植物横放后根向地生长，主要原因是？', options: ['近地侧生长素浓度高被抑制', '远地侧生长素浓度高被抑制', '生长素均匀不分布', '重力直接拉长细胞'], answer: '近地侧生长素浓度高被抑制', explanation: '横放时重力使生长素向近地侧积累，根对生长素敏感，近地侧高浓度反而抑制生长；远地侧浓度低、促进生长，两侧生长速度不同，根便弯向地心表现为向地性。茎则因较不敏感而背地生长。故根向地是近地侧生长素多被抑制所致，不是均匀或不分布。' },
      { type: 'fill', question: '需要日照长度超过临界值才开花的植物叫___植物；需要日照短于临界值才开花的叫___植物。', answer: '长日照；短日照', explanation: '根据光周期现象，植物按开花对日照长度的要求分为长日照植物和短日照植物。长日照植物在日照长于其临界日长时才开花，如小麦；短日照植物在日照短于临界日长时才开花，如菊花、大豆。生产中可通过人工控制光照长短来调节它们开花的时间。' },
      { type: 'fill', question: '决定短日照植物开花的关键实际上是连续___（光照/黑暗）的长度；温度中诱导植物开花的低温过程叫___。', answer: '黑暗；春化作用', explanation: '对短日照植物而言，真正起决定作用的是连续黑暗期的长短，暗期足够长才开花，若暗期被中途闪光打断就不开花，所以不能只看白天的长短。温度方面，某些植物必须经一段持续低温才能开花，这种低温诱导开花的过程称为春化作用，如冬小麦需越冬低温。' }
    ]
  });
})();
