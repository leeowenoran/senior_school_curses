/* ============================================================
 * 高一化学 · 必修 第二册 · 第六章 化学反应与能量
 * 课时8：化学反应与热能
 * 数据注入：chemistry.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u8',
    name: '化学反应与热能',
    chapter: '必修 第二册 · 第六章 化学反应与能量',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、化学反应都伴随着能量变化' },
      { type: 'paragraph', text: '你一定见过这样的现象：木炭燃烧会发热，学校食堂的锅炉烧煤能把水烧开，冬天用的"暖宝宝"一撕开就慢慢变热。这些说明一个道理：化学反应在生成新物质的同时，往往还伴随着热量的放出或吸收。燃料能做饭、能取暖，靠的就是反应放出的热。' },
      { type: 'keypoint', label: '重点·放热与吸热', text: '<strong>放出热量的反应叫放热反应，吸收热量的反应叫吸热反应。</strong>放热反应像"向外吐热"，环境会变热；吸热反应像"从外界吸热"，环境可能变凉。判断时记住：大多数化合反应、燃烧、金属与酸的反应是放热的；大多数分解反应、碳和二氧化碳反应生成一氧化碳是吸热的。' },
      { type: 'paragraph', text: '生活中最典型的放热反应就是燃烧。木材、煤、天然气燃烧时把储存的化学能释放出来变成光和热。而像用到的"冷敷贴"、或者长期放在地里发酵的农家肥，有些过程会吸收周围热量，让人感到凉。' },
      { type: 'list', items: ['放热反应：燃烧（木柴、煤、天然气）、酸碱中和、金属与酸反应（如锌和稀硫酸）', '吸热反应：碳酸钙高温分解、碳和二氧化碳在加热下反应生成一氧化碳、多数分解反应', '判断口诀：化合多放热，分解多吸热，但都有例外，要记典型例子'] },
      { type: 'heading', text: '二、从微观看：断键要吸能，成键要放能' },
      { type: 'paragraph', text: '为什么有的反应放热、有的吸热？秘密在化学键里。反应物要变成生成物，先得把原来的旧键"拆开"，拆开化学键需要能量，这叫断键吸能；然后原子重新组合，形成新键，形成新键会放出能量，这叫成键放能。反应到底是放热还是吸热，就看这两笔账谁大谁小。' },
      { type: 'keypoint', label: '重点·能量账', text: '<strong>如果断键吸收的总能量小于成键放出的总能量，多余的能量就以热的形式放出，反应放热；反过来，断键吸能大于成键放能，反应就吸热。</strong>所以热量变化不是凭空来的，而是化学键重新组合时能量差的表现。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">断键吸能、成键放能决定反应是放热还是吸热</text><rect x="40" y="70" width="170" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="125" y="98" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">反应物（旧键）</text><rect x="470" y="70" width="170" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="555" y="98" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">生成物（新键）</text><rect x="255" y="160" width="170" height="56" rx="8" fill="#d98e3a"/><text x="340" y="185" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">中间状态</text><line x1="210" y1="100" x2="255" y2="160" stroke="#b5651d" stroke-width="2"/><line x1="470" y1="100" x2="425" y2="160" stroke="#b5651d" stroke-width="2"/><text x="125" y="150" font-size="12" fill="#4a3724" text-anchor="middle">①断键：吸收能量</text><text x="555" y="150" font-size="12" fill="#4a3724" text-anchor="middle">②成键：放出能量</text><text x="340" y="250" font-size="13" fill="#d98e3a" text-anchor="middle">成键放能 大于 断键吸能 → 反应放热</text></svg>', caption: '图1　反应先断旧键（吸能），再成新键（放能）；两笔能量之差就是反应放出或吸收的热。' },
      { type: 'table', headers: ['对比项', '放热反应', '吸热反应'], rows: [['能量变化', '反应放出热量', '反应吸收热量'], ['断键与成键', '成键放能 > 断键吸能', '断键吸能 > 成键放能'], ['典型例子', '燃烧、中和、金属与酸', '分解、碳与二氧化碳反应'], ['环境感觉', '容器变热', '容器可能变凉']] },
      { type: 'heading', text: '三、中和热：酸碱中和放出的热' },
      { type: 'paragraph', text: '把稀盐酸倒进稀氢氧化钠溶液里，摸一摸烧杯外壁，会发现发热。这是因为酸里的氢离子 H⁺ 和碱里的氢氧根 OH⁻ 结合生成了水：H⁺ + OH⁻ → H₂O。这种酸和碱发生中和反应生成水时放出的热量，就是中和热的概念来源。初中做过的"中和反应放热"实验就是这个道理。' },
      { type: 'example', label: '例题·中和反应', text: '下列反应属于放热反应的是？<br>A. 碳酸钙高温分解<br>B. 稀盐酸与氢氧化钠溶液混合<br>C. 碳与二氧化碳加热反应<br>D. 硫酸铜晶体加热失水<br><br><strong>解析</strong>：稀盐酸和氢氧化钠发生<strong>中和反应</strong>，生成水并放出热量，属于典型的放热反应，选 B。A、C、D 都是分解或需要持续加热吸收能量的反应，属于吸热一类。' },
      { type: 'warn', label: '易错·中和热的定义', text: '中和热特指<strong>强酸和强碱的稀溶液发生中和，生成 1 摩尔水时所放出的热量</strong>（约 57.3 kJ/mol）。注意两点：一是限定"生成 1 mol 水"，不是生成多少水都算；二是弱酸弱碱因为电离还要额外吸能，放出的热会比这个值少。考试常把"中和热"和"中和反应放的热"混着考，要分清。' },
      { type: 'list', items: ['中和反应本质：H⁺ + OH⁻ → H₂O', '强酸强碱稀溶液生成 1 mol 水，放热约 57.3 kJ', '中和反应都是放热反应，但放热反应不只有中和'] },
      { type: 'heading', text: '四、化石燃料：地球上的"能源仓库"' },
      { type: 'paragraph', text: '我们用的煤、石油、天然气，都是古代动植物埋在地下，经过漫长岁月变成的，统称化石燃料。它们燃烧时把远古储存的太阳能以热的形式释放出来，是现代社会最主要的能量来源。但化石燃料不可再生，用一点少一点，而且燃烧会产生二氧化碳等，所以节约和寻找新能源很重要。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">三大化石燃料：煤、石油、天然气</text><rect x="30" y="70" width="180" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="120" y="100" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">煤</text><text x="120" y="140" font-size="12" fill="#4a3724" text-anchor="middle">固体，主要含碳</text><text x="120" y="165" font-size="12" fill="#4a3724" text-anchor="middle">称"工业的粮食"</text><rect x="250" y="70" width="180" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="100" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">石油</text><text x="340" y="140" font-size="12" fill="#4a3724" text-anchor="middle">液体，多种烃混合</text><text x="340" y="165" font-size="12" fill="#4a3724" text-anchor="middle">称"工业的血液"</text><rect x="470" y="70" width="180" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="560" y="100" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">天然气</text><text x="560" y="140" font-size="12" fill="#4a3724" text-anchor="middle">气体，主要含甲烷 CH₄</text><text x="560" y="165" font-size="12" fill="#4a3724" text-anchor="middle">较清洁的燃料</text><text x="340" y="270" font-size="13" fill="#d98e3a" text-anchor="middle">三者燃烧都放热，且都属于不可再生能源</text></svg>', caption: '图2　煤、石油、天然气是三大化石燃料，燃烧放出大量热，但用一点少一点，需注意节约。' },
      { type: 'tip', label: '提示·节能与新能源', text: '既然化石能源有限，我们可以从两方面努力：一是提高燃烧效率、做好保温来"省着用"；二是开发太阳能、风能、水能、氢能等可再生、更清洁的新能源。氢能燃烧只生成水，是非常理想的绿色能源，未来潜力很大。' },
      { type: 'heading', text: '五、反应热与热化学常识' },
      { type: 'paragraph', text: '在化学里，化学反应放出或吸收的热量统称为反应热。我们常用一个数值加单位 kJ/mol 来表示某反应的热量变化，比如"每摩尔氢气燃烧放热约 286 kJ"。负号表示放热、正号表示吸热，这是高中以后写热化学方程式会用到的约定。现在你只要知道：反应热有大小、有正负、单位是 kJ/mol 即可。' },
      { type: 'warn', label: '易错·正负号含义', text: '在表示反应热时，<strong>放热写负值、吸热写正值</strong>。例如"氢气燃烧放热 286 kJ/mol"记为 −286 kJ/mol。很多同学一看到负号就以为"冷"，其实负号恰恰代表"放热"。读题时看清是"放出"还是"吸收"，再判断符号。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">能量变化图：反应物与生成物的能量高低</text><line x1="120" y1="60" x2="120" y2="250" stroke="#b5651d" stroke-width="2"/><line x1="120" y1="250" x2="600" y2="250" stroke="#b5651d" stroke-width="2"/><rect x="150" y="120" width="150" height="40" rx="6" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="225" y="146" font-size="13" fill="#4a3724" text-anchor="middle">反应物能量（高）</text><rect x="400" y="190" width="150" height="40" rx="6" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="475" y="216" font-size="13" fill="#4a3724" text-anchor="middle">生成物能量（低）</text><line x1="225" y1="120" x2="475" y2="190" stroke="#d98e3a" stroke-width="2"/><polygon points="475,190 465,184 465,196" fill="#d98e3a"/><text x="350" y="155" font-size="12" fill="#d98e3a" text-anchor="middle">放出热量</text><text x="120" y="275" font-size="12" fill="#4a3724" text-anchor="middle">能量</text></svg>', caption: '图3　放热反应中，反应物能量高于生成物能量，反应沿箭头方向放出热量（反应热为负值）。' },
      { type: 'example', label: '例题·能量高低判断', text: '某反应的反应物总能量高于生成物总能量，则该反应属于？<br>A. 吸热反应　B. 放热反应　C. 不吸热也不放热　D. 无法判断<br><br><strong>解析</strong>：反应物总能量比生成物高，说明多余的能量以热的形式放了出来，这样的反应就是<strong>放热反应</strong>，对应反应热为负值，选 B。反过来若生成物能量更高，才是吸热反应。' }
    ],
    exercises: [
      { type: 'choice', question: '下列化学反应中，属于吸热反应的是？', options: ['木柴燃烧', '稀盐酸与氢氧化钠中和', '碳酸钙高温分解', '锌与稀硫酸反应'], answer: '碳酸钙高温分解', explanation: '吸热反应在反应过程中吸收热量，常见的如分解反应、碳与二氧化碳加热反应。碳酸钙高温分解成氧化钙和二氧化碳需要持续加热，属于吸热反应。木柴燃烧、酸碱中和、金属与酸反应都属于放热反应。' },
      { type: 'choice', question: '关于中和热，下列说法正确的是？', options: ['中和热是指任何酸碱中和放出的热', '强酸强碱稀溶液生成 1 mol 水时放热约 57.3 kJ', '中和反应一定是吸热反应', '弱酸弱碱中和放热与强酸强碱相同'], answer: '强酸强碱稀溶液生成 1 mol 水时放热约 57.3 kJ', explanation: '中和热有严格定义：强酸和强碱的稀溶液发生中和，生成 1 摩尔水时所放出的热量约为 57.3 kJ/mol。不是任何酸碱中和都直接叫中和热；中和反应都是放热的；弱酸弱碱因电离还要吸能，放热比这个值少。因此只有第二项正确。' },
      { type: 'choice', question: '从微观角度看，化学反应放热的原因是？', options: ['断键吸收的能量大于成键放出的能量', '断键吸收的能量小于成键放出的能量', '反应没有断键', '生成物能量比反应物低但无关键能'], answer: '断键吸收的能量小于成键放出的能量', explanation: '化学反应先断旧键（吸能），再成新键（放能）。当断键吸收的总能量小于成键放出的总能量时，多余的能量以热放出，反应表现为放热。若反过来断键吸能更大，则反应吸热。所以放热的关键在于成键放能大于断键吸能。' },
      { type: 'fill', question: '煤、石油、天然气统称___，它们在燃烧时都会放出热量，且都属于不可再生能源。', answer: '化石燃料', explanation: '煤、石油、天然气是古代生物遗体经过漫长地质年代形成的燃料，统称化石燃料。它们燃烧时把储存的化学能转化为热能，是现代社会的主要能源，但形成极慢、用一点少一点，属于不可再生能源，因此需要节约并开发新能源。' },
      { type: 'fill', question: '在表示反应热时，放热反应对应的数值记为___（填"正值"或"负值"）。', answer: '负值', explanation: '反应热的规定是：放热写负值、吸热写正值。例如氢气燃烧放热约 286 kJ/mol，记作 −286 kJ/mol。负号代表"向外放出热量"，不要误以为负号表示变冷。读题时要注意区分"放出"与"吸收"来判断符号。' }
    ]
  });
})();
