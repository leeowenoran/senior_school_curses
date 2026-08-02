/* 生物学 · 高三复习 · 稳态与调节 · 第4章 · 课时：第2节 特异性免疫（一）体液免疫 */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u15',
    name: '第2节 特异性免疫（一）体液免疫',
    chapter: '稳态与调节 · 第4章 免疫调节',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、基本概念的建立' },
      { type: 'paragraph', text: '体液免疫是特异性免疫的一种，靠<strong>抗体</strong>在体液中作战，主要针对细胞外液中的病原体和毒素。要搞懂它，先分清几个主角：<strong>抗原</strong>是外来「通缉犯」（如细菌、病毒表面蛋白），<strong>抗体</strong>是浆细胞分泌的「专用通缉令」（一种蛋白质），能跟特定抗原精准结合。' },
      { type: 'list', items: [
        '抗原：能引起免疫反应的物质，多为病原体表面的蛋白质，具有特异性。',
        '抗体：浆细胞分泌的免疫球蛋白，能与相应抗原特异性结合。',
        '浆细胞：由B细胞分化来的「抗体工厂」，自己不能识别抗原。',
        '记忆细胞：由B细胞分化来的「存档细胞」，长期保留抗原信息。'
      ] },
      { type: 'keypoint', text: '核心概念：体液免疫。病原体侵入体液后，经抗原呈递细胞处理并呈递给T细胞，T细胞辅助B细胞增殖分化成浆细胞和记忆细胞；浆细胞分泌抗体与抗原结合清除病原。抗体存在于体液中，故称重体液免疫。' },
      { type: 'heading', text: '二、体液免疫的核心过程' },
      { type: 'paragraph', text: '完整链条是：<strong>抗原 → 抗原呈递细胞处理 → T细胞呈递 → B细胞增殖分化</strong>。抗原呈递细胞先把病原「切片」并展示给辅助性T细胞，活化的T细胞再给B细胞「发令」，B细胞才被激活、分裂分化。注意大多数B细胞需要T细胞辅助才能充分活化。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="24" y="40" fill="#3f7d1e" font-size="20" font-family="sans-serif">图1 体液免疫过程</text><rect x="30" y="100" width="130" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="55" y="132" fill="#2e3a22" font-size="15" font-family="sans-serif">抗原</text><rect x="180" y="100" width="150" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="190" y="132" fill="#2e3a22" font-size="14" font-family="sans-serif">抗原呈递细胞</text><rect x="350" y="100" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="375" y="132" fill="#2e3a22" font-size="15" font-family="sans-serif">T细胞</text><rect x="500" y="100" width="130" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="525" y="132" fill="#2e3a22" font-size="15" font-family="sans-serif">B细胞</text><line x1="160" y1="127" x2="176" y2="127" stroke="#3f7d1e" stroke-width="3"/><polygon points="168,119 188,127 168,135" fill="#3f7d1e"/><line x1="330" y1="127" x2="346" y2="127" stroke="#3f7d1e" stroke-width="3"/><polygon points="338,119 358,127 338,135" fill="#3f7d1e"/><line x1="470" y1="127" x2="496" y2="127" stroke="#3f7d1e" stroke-width="3"/><polygon points="488,119 508,127 488,135" fill="#3f7d1e"/><rect x="350" y="190" width="290" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="360" y="222" fill="#2e3a22" font-size="14" font-family="sans-serif">B细胞分化：浆细胞＋记忆细胞</text><line x1="565" y1="154" x2="495" y2="188" stroke="#3f7d1e" stroke-width="2"/></svg>', caption: '抗原经抗原呈递细胞处理并呈递给T细胞，进而激活B细胞增殖分化为浆细胞和记忆细胞。' },
      { type: 'list', items: [
        '第一步：抗原被抗原呈递细胞摄取、处理并呈递。',
        '第二步：辅助性T细胞接受信息并激活B细胞。',
        '第三步：B细胞增殖分化，形成浆细胞和记忆细胞。',
        '第四步：浆细胞分泌抗体，抗体与抗原特异性结合清除之。'
      ] },
      { type: 'warn', text: '易错辨析：浆细胞 ≠ 细胞毒性T细胞。浆细胞来自B细胞，专职分泌抗体，参与体液免疫；细胞毒性T细胞来自T细胞，直接裂解被感染的靶细胞，参与细胞免疫。二者来源、形态、功能都不同，且浆细胞没有识别抗原的能力，是靠B细胞阶段「记下来」的。' },
      { type: 'heading', text: '三、B细胞的两种分化去向' },
      { type: 'paragraph', text: 'B细胞被激活后主要变成两类细胞：<strong>浆细胞</strong>和<strong>记忆细胞</strong>。浆细胞是短寿的「生产兵」，大量分泌抗体，抗体与抗原特异性结合后，使病原凝聚、被吞噬细胞清除；记忆细胞是长寿的「档案员」，把这次抗原的特征长期保存。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="24" y="44" fill="#3f7d1e" font-size="20" font-family="sans-serif">图2 浆细胞与记忆细胞</text><rect x="60" y="110" width="250" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="80" y="152" fill="#2e3a22" font-size="16" font-family="sans-serif">浆细胞：分泌抗体</text><rect x="380" y="110" width="250" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="400" y="152" fill="#2e3a22" font-size="16" font-family="sans-serif">记忆细胞：长期保留</text><text x="60" y="230" fill="#2e3a22" font-size="15" font-family="sans-serif">抗体与抗原结合→病原被清除；记忆细胞使再次相遇反应更快更强</text></svg>', caption: '浆细胞分泌抗体清除当前抗原，记忆细胞保留信息以备二次免疫。' },
      { type: 'table', headers: ['细胞', '寿命', '功能'], rows: [
        ['浆细胞', '较短', '分泌抗体，与抗原特异性结合'],
        ['记忆细胞', '很长', '记住抗原，使二次免疫更快更强']
      ] },
      { type: 'tip', text: '高频考点：二次免疫更快更强。当相同抗原再次入侵，记忆细胞能迅速增殖分化成大量浆细胞，抗体产生又快又多，所以病程短、症状轻。疫苗就是利用这个原理——先让机体产生记忆细胞，真正病原来时一举歼灭。' },
      { type: 'example', text: '例题（高考风格）：给机体再次注射相同疫苗后，血液中抗体浓度比第一次注射后上升更快更高，原因是？思路：第一次接种已使B细胞分化出记忆细胞；再次接种时，记忆细胞迅速增殖分化为浆细胞，快速大量产生抗体，因此曲线更高更陡。本题考查二次免疫的机制。' },
      { type: 'heading', text: '四、关键概念辨析' },
      { type: 'list', items: [
        '抗原：引发免疫的「目标」，有特异性，不是所有外来物都是抗原。',
        '抗体：浆细胞分泌的蛋白质，只认特定抗原，具特异性。',
        '浆细胞：由B细胞分化，不能识别抗原，只负责产抗体。',
        '记忆细胞：由B细胞分化，能识别原抗原并快速响应二次入侵。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="24" y="44" fill="#3f7d1e" font-size="20" font-family="sans-serif">图3 初次免疫与二次免疫曲线</text><rect x="80" y="90" width="520" height="180" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><line x1="100" y1="250" x2="580" y2="250" stroke="#3f7d1e" stroke-width="2"/><line x1="100" y1="100" x2="100" y2="250" stroke="#3f7d1e" stroke-width="2"/><path d="M120 250 Q 200 248 260 200 Q 300 160 340 150" fill="none" stroke="#3f7d1e" stroke-width="3"/><path d="M360 250 Q 420 200 460 130 Q 500 90 540 80" fill="none" stroke="#5aa832" stroke-width="3"/><text x="200" y="185" fill="#2e3a22" font-size="14" font-family="sans-serif">初次</text><text x="470" y="110" fill="#5aa832" font-size="14" font-family="sans-serif">二次更快更高</text></svg>', caption: '二次免疫因记忆细胞存在，抗体上升更快更高，对应疫苗预防的原理。' },
      { type: 'warn', text: '易错：抗体由浆细胞分泌，但「产生抗体的细胞」在分化前是B细胞；考题问「抗体由何种细胞产生」答浆细胞，问「再次免疫主力」答记忆细胞。另外抗体不能直接杀死病原，只是「标记」使其被吞噬，别把结合当成杀灭。' },
      { type: 'paragraph', text: '小结：体液免疫的核心是B细胞在T细胞辅助下增殖分化为浆细胞和记忆细胞。浆细胞产抗体清除抗原，记忆细胞留存信息实现二次免疫更快更强。抗原、抗体、浆细胞、记忆细胞四个概念是后续学习细胞免疫和免疫失调的基石。' }
    ],
    exercises: [
      { type: 'choice', question: '在体液免疫中，最终分泌抗体的是哪类细胞？', options: ['浆细胞', 'T细胞', 'B细胞', '抗原呈递细胞'], answer: '浆细胞', explanation: 'B细胞受抗原和T细胞辅助后增殖分化，其中浆细胞专门合成并分泌抗体；B细胞本身不直接分泌抗体，T细胞和抗原呈递细胞也不分泌抗体。因此分泌抗体的细胞是浆细胞。' },
      { type: 'choice', question: '二次免疫比初次免疫反应更快、更强，主要原因是体内存在？', options: ['记忆细胞', '浆细胞', '红细胞', '抗体'], answer: '记忆细胞', explanation: '初次免疫后B细胞分化出记忆细胞并长期留存；相同抗原再次入侵时，记忆细胞迅速增殖分化为浆细胞，快速大量产生抗体，所以二次免疫反应更快更强。' },
      { type: 'choice', question: '体液免疫中，抗原呈递细胞将处理后的抗原主要呈递给？', options: ['T细胞', 'B细胞', '浆细胞', '红细胞'], answer: 'T细胞', explanation: '抗原呈递细胞摄取并处理抗原后，将抗原信息呈递给辅助性T细胞，活化的T细胞再辅助B细胞活化。因此其直接呈递对象是T细胞，而非B细胞或浆细胞。' },
      { type: 'fill', question: '抗体能与相应抗原发生______结合，这种特性称为特异性。', answer: '特异性', explanation: '一种抗体通常只与一种特定抗原结合，这种专一性叫作特异性。正是依赖特异性，体液免疫才能精准识别并标记特定病原体，而不误伤自身细胞。' },
      { type: 'fill', question: '体液免疫中，能长期保留抗原信息、使二次免疫更快更强的是______细胞。', answer: '记忆', explanation: 'B细胞分化形成的记忆细胞寿命长，能把抗原特征长期存档；当相同抗原再次入侵时可迅速反应。填空应填「记忆」，完整的名称是记忆细胞。' }
    ]
  });
})();
