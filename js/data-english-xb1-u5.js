/* ============================================================
 * 高二英语 · 选择性必修 第一册 · Unit 5 Working the Land
 * 第1课时：核心词汇与主语从句（上）（人教2019版 §U5）
 * 第2课时：重点句型与主语从句（下）
 * 数据注入：english.xb1.points
 * 学科配色（紫色系）：主色 #9c56d4 / #7a3fb0，背景 #f3edfa
 * ============================================================ */
(function () {
  var v = gzGetVolume('english', 'xb1');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 核心词汇与主语从句（上） ---------------- */
    {
      id: 'xb1-u5-l1',
      name: '核心词汇与主语从句（上）',
      chapter: 'Unit 5 Working the Land',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、Unit 5 核心词汇概览' },
        { type: 'paragraph', text: 'Unit 5 Working the Land（耕耘土地）围绕农业科技、粮食安全与袁隆平的杂交水稻展开。本课时先集中识记本单元的核心词汇与常用短语，为阅读课文与写作打好基础。记词时建议结合课文语境，在句子中体会词义，而非孤立背诵。' },
        { type: 'keypoint', label: '重点·词汇归类', text: '本单元核心名词多与"农业、粮食、危机"相关，如 <strong>consumption（消费/消耗）</strong>、<strong>yield（产量/出产）</strong>、<strong>shortage（不足/短缺）</strong>、<strong>crisis（危机）</strong>；形容词多描述性质，如 <strong>domestic（国内的/家用的）</strong>、<strong>conventional（传统的/常规的）</strong>、<strong>agricultural（农业的）</strong>。动词重点掌握 <strong>devote（把……奉献给）</strong> 与 <strong>comprise（包括/由……组成）</strong>。' },
        { type: 'table', headers: ['词汇', '词性', '汉语释义'], rows: [
          ['devote', 'vt.', '把……奉献给；把……专用于'],
          ['comprise', 'vt.', '包括；由……组成'],
          ['domestic', 'adj.', '国内的；家用的'],
          ['consumption', 'n.', '消费；消耗'],
          ['yield', 'n./v.', '产量；出产，产出'],
          ['shortage', 'n.', '不足；短缺'],
          ['conventional', 'adj.', '传统的；常规的'],
          ['agricultural', 'adj.', '农业的'],
          ['crisis', 'n.', '危机']
        ] },
        { type: 'paragraph', text: '记忆动词 devote 与 comprise 时，要特别注意它们的固定搭配和语态：devote 常用于 devote...to 结构，comprise 常用被动 be comprised of 表示"由……组成"。这两者也是完形填空与语法填空的高频考点。' },
        { type: 'heading', text: '二、常用短语与搭配' },
        { type: 'list', items: [
          'devote...to：把（时间、精力、生命等）奉献给……，to 为介词，后接名词或动名词',
          'be comprised of：由……组成（同义 be made up of / consist of）',
          'in turn：相应地；转而；轮流',
          'for instance：例如（同义 for example）',
          'at home and abroad：国内外',
          'deep down：在内心深处',
          'in spite of：尽管；不管（后接名词，不接句子）'
        ] },
        { type: 'table', headers: ['短语', '汉语', '用法提示'], rows: [
          ['devote...to', '把……奉献给', 'to 是介词，后接 v-ing 或名词'],
          ['be comprised of', '由……组成', '表被动，主语为整体'],
          ['in turn', '相应地；轮流', '多作状语'],
          ['for instance', '例如', '后可接句子或短语'],
          ['at home and abroad', '国内外', '作地点状语'],
          ['deep down', '在内心深处', '作状语修饰情感'],
          ['in spite of', '尽管；不管', '后接名词，不接句子']
        ] },
        { type: 'warn', label: '易错·短语搭配', text: '短语 <strong>devote...to</strong> 中的 to 是<strong>介词</strong>，后面必须接<strong>名词或动名词（v-ing）</strong>，不能接动词原形，如 devote his life to helping the poor。另一易错点是 <strong>in spite of</strong> 后接名词或名词短语，若想接句子要用 <strong>although / though</strong>。' },
        { type: 'example', label: '例句1·短语运用', text: '用本单元短语完成句子：<br>Yuan Longping <strong>devoted his life to</strong> the research of hybrid rice.<br><br>译文：袁隆平把他的一生奉献给了杂交水稻的研究。<br>要点：devote...to 中 to 为介词，故 research 用名词形式；若用动词则须写成 to researching。' },
        { type: 'heading', text: '三、主语从句基础' },
        { type: 'paragraph', text: '主语从句是名词性从句的一种，在复合句中充当主语。理解主语从句的关键，是先能识别"哪一部分是主语"，再看它由什么词引导。这是本单元语法重点，也是读懂课文长难句的基础。' },
        { type: 'keypoint', label: '重点·主语从句定义', text: '在一个复合句中，如果<strong>充当主语的是一个完整的从句</strong>，这个从句就叫做<strong>主语从句</strong>。主语从句通常放在主句谓语动词<strong>之前</strong>，使句子"头重脚轻"，因此英语也常用 <strong>it</strong> 作形式主语，把真正的主语从句移到句末。' },
        { type: 'list', items: [
          '连接词 that：只起连接作用，无词义，不作成分，主语从句句首时一般不省',
          '连接词 whether：意为"是否"，不作成分，但不可换用 if',
          '连接代词 what / who / which：在从句中充当主语、宾语或定语，what 意为"……的事物"',
          '连接副词 when / where / why / how：在从句中作状语，分别表示时间、地点、原因、方式'
        ] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图1　主语从句句子结构（主语是一个完整的从句）</text><rect x="40" y="90" width="240" height="60" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="160" y="116" font-size="16" fill="#3a2a4a" text-anchor="middle">主语从句</text><text x="160" y="138" font-size="13" fill="#7a3fb0" text-anchor="middle">What he said</text><rect x="320" y="90" width="120" height="60" rx="8" fill="#d8c2ec" stroke="#7a3fb0" stroke-width="2"/><text x="380" y="116" font-size="16" fill="#3a2a4a" text-anchor="middle">谓语</text><text x="380" y="138" font-size="13" fill="#7a3fb0" text-anchor="middle">is</text><rect x="480" y="90" width="160" height="60" rx="8" fill="#d8c2ec" stroke="#7a3fb0" stroke-width="2"/><text x="560" y="116" font-size="16" fill="#3a2a4a" text-anchor="middle">表语/其他</text><text x="560" y="138" font-size="13" fill="#7a3fb0" text-anchor="middle">important</text><line x1="280" y1="120" x2="318" y2="120" stroke="#7a3fb0" stroke-width="2"/><line x1="440" y1="120" x2="478" y2="120" stroke="#7a3fb0" stroke-width="2"/><text x="340" y="200" font-size="15" fill="#3a2a4a" text-anchor="middle">主语从句 + 谓语 + 其他成分，从句整体充当主语</text></svg>`, caption: '图1　主语从句结构：位于句首的整个从句（What he said）充当句子主语，后接谓语与表语。' },
        { type: 'example', label: '例句2·主语从句', text: '判断下列句子的主语：<br><strong>What Yuan Longping really cared about</strong> was not money or celebrity.<br><br>译文：袁隆平真正在乎的并不是金钱或名声。<br>分析：划线部分是由 what 引导的主语从句，在句中作主语；谓语是 was，表语是 not money or celebrity。' },
        { type: 'keypoint', label: '重点·what 与 that', text: '由 <strong>what</strong> 引导的主语从句表示"<strong>……的事物/人</strong>"，what 在从句中充当成分（主、宾、表）；而 <strong>that</strong> 引导时<strong>只起连接、无词义、不作成分</strong>。试比较：What we need is time.（我们需要的东西是时间）/ That he passed the exam is true.（他通过了考试，这是真的。）' },
        { type: 'warn', label: '易错·that 不可省', text: '主语从句置于句首时，<strong>引导词 that 一般不能省略</strong>；只有当使用 it 作形式主语（如 It is true that...）且 that 引导的从句在句末时，that 才常可省略。考试常在"句首主语从句"中设置漏写 that 的陷阱，务必留心。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图2　例句结构拆解：What 引导的主语从句</text><text x="40" y="80" font-size="15" fill="#3a2a4a">What Yuan Longping really cared about</text><line x1="40" y1="90" x2="360" y2="90" stroke="#c0392b" stroke-width="2"/><text x="40" y="112" font-size="13" fill="#c0392b">主语从句（what 在从句中作 about 的宾语）</text><text x="380" y="80" font-size="15" fill="#3a2a4a">was</text><text x="430" y="80" font-size="15" fill="#3a2a4a">not money or celebrity</text><line x1="380" y1="90" x2="620" y2="90" stroke="#5a7a2a" stroke-width="2"/><text x="430" y="112" font-size="13" fill="#5a7a2a">谓语 was + 表语</text><text x="340" y="170" font-size="15" fill="#3a2a4a" text-anchor="middle">译：袁隆平真正在乎的不是金钱或名声</text></svg>`, caption: '图2　例句拆解：What 引导的主语从句作主语，was 为谓语，not money or celebrity 为表语。' },
        { type: 'tip', label: '提示·识别主语从句', text: '快速识别主语从句的窍门：先找主句的<strong>谓语动词</strong>，它前面的整个"引导词 + 小句"往往就是主语从句；若句首是 what / whether / how 等引导词且后面跟着一个完整小句，基本可判定为主语从句。' },
        { type: 'paragraph', text: '本单元以袁隆平和杂交水稻为背景，许多例句都围绕"用科技解决粮食短缺（shortage）与危机（crisis）"展开。理解这些背景，有助于在语境中记住 agricultural、yield、consumption 等词，也能更好地体会主语从句在真实语篇中的运用。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图3　杂交水稻示意图：两系杂交提高 yield（产量）</text><rect x="90" y="80" width="120" height="50" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="150" y="110" font-size="14" fill="#3a2a4a" text-anchor="middle">父本 Line A</text><rect x="280" y="80" width="120" height="50" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="340" y="110" font-size="14" fill="#3a2a4a" text-anchor="middle">母本 Line B</text><line x1="210" y1="105" x2="278" y2="105" stroke="#7a3fb0" stroke-width="2"/><line x1="150" y1="130" x2="200" y2="170" stroke="#7a3fb0" stroke-width="2"/><line x1="340" y1="130" x2="260" y2="170" stroke="#7a3fb0" stroke-width="2"/><rect x="200" y="170" width="160" height="50" rx="8" fill="#d8c2ec" stroke="#7a3fb0" stroke-width="2"/><text x="280" y="200" font-size="14" fill="#3a2a4a" text-anchor="middle">杂交种 Hybrid</text><text x="280" y="234" font-size="14" fill="#5a7a2a" text-anchor="middle">更高 yield（产量）· 解决 shortage（短缺）</text></svg>`, caption: '图3　杂交水稻：通过父本与母本杂交获得高产杂交种，呼应 Unit 5 的粮食安全主题。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: [
          '核心词汇：devote, comprise, domestic, consumption, yield, shortage, conventional, agricultural, crisis',
          '常用短语：devote...to, be comprised of, in turn, for instance, at home and abroad, deep down, in spite of',
          '主语从句：在复合句中充当主语的从句，引导词分 that / whether / what 等',
          'what 表"……的事物"且作成分；that 无词义只起连接作用',
          '主语从句常放谓语前，也可用 it 作形式主语后置'
        ] }
      ],
      exercises: [
        { type: 'choice', question: 'The new policy aims to increase agricultural ______ in the countryside.', options: ['consumption', 'yield', 'crisis', 'shortage'], answer: 'yield', explanation: 'yield 作名词意为"产量"，句意为"新政策旨在提高农村农业产量"。consumption 意为消费/消耗，crisis 意为危机，shortage 意为短缺，均不符合"提高"的语境。此处 agricultural 修饰名词，故选 yield。' },
        { type: 'choice', question: 'We should ______ our time and energy to protecting the environment.', options: ['comprise', 'devote', 'consume', 'yield'], answer: 'devote', explanation: 'devote...to 是固定搭配，意为"把……奉献给……"，其中 to 为介词，后接名词或动名词 protecting。comprise 意为由……组成，consume 意为消耗，yield 意为出产，均不与 to doing 构成此义，故选 devote。' },
        { type: 'choice', question: '______ he will attend the meeting depends on the weather.', options: ['What', 'That', 'Whether', 'Which'], answer: 'Whether', explanation: '主语从句中 whether 意为"是否"，句意"他是否出席会议取决于天气"，depends on the weather 暗示两种可能性，故用 whether。what 表示"……的事物"，that 只表连接无"是否"义，which 表选择，均不恰当。' },
        { type: 'fill', question: 'The research team is ______ of ten scientists from different countries. (用 comprise 的适当形式填空)', answer: 'comprised', explanation: 'be comprised of 为固定短语，意为"由……组成"，主语 team 为整体，需用被动 be comprised of。此处 is 后接过去分词 comprised，构成 is comprised of。注意 comprise 本身含"包括"义，但本短语必须用被动形式。' },
        { type: 'fill', question: '______ the heavy rain, the farmers went on working in the fields. (填入本单元表示"尽管"的短语)', answer: 'In spite of', explanation: 'in spite of 意为"尽管、不管"，后接名词短语 the heavy rain，符合"尽管大雨，农民仍继续田间劳作"的语境。注意 in spite of 后须接名词，不能接句子；若接句子须用 although / though。' }
      ]
    },

    /* ---------------- 第2课时 重点句型与主语从句（下） ---------------- */
    {
      id: 'xb1-u5-l2',
      name: '重点句型与主语从句（下）',
      chapter: 'Unit 5 Working the Land',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、Unit 5 重点句型' },
        { type: 'paragraph', text: '本单元课文包含三类重点句型：Given that 引导的条件状语从句、Not only...but also... 并列结构，以及 It 作形式主语加主语从句。掌握它们的结构与语序，是分析长难句和完成语法填空的关键。' },
        { type: 'keypoint', label: '重点·Given that', text: '<strong>Given that + 从句</strong> 意为"<strong>鉴于、考虑到</strong>"，引导原因或条件状语从句，后面接一个完整的陈述句。它相当于 considering that，常用于引出已知事实作为前提，如 Given that it rained, we stayed home.' },
        { type: 'example', label: '例句1·Given that', text: 'Given that food security matters, we must raise grain yield.<br><br>译文：鉴于粮食安全至关重要，我们必须提高粮食产量。<br>分析：Given that 引导状语从句说明前提，主句 we must raise... 为结论。' },
        { type: 'keypoint', label: '重点·Not only...but also...', text: '<strong>Not only...but also...</strong> 意为"<strong>不仅……而且……</strong>"，连接两个<strong>对称</strong>的并列成分（词、短语或句子）。当 <strong>not only</strong> 置于句首时，其所在分句要<strong>部分倒装</strong>，但 but also 后的分句语序正常。' },
        { type: 'list', items: [
          '连接词性一致：not only 与 but also 后接相同语法成分（都接名词、都接动词等）',
          '句首倒装：Not only 在句首时，该分句助动词提前，如 Not only did he come',
          '就近原则：连接主语时，谓语与 but also 后的主语人称数一致',
          'but also 可省略为 but，语气减弱'
        ] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图1　Not only... but also... 连接并列成分</text><rect x="60" y="80" width="260" height="56" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="190" y="106" font-size="15" fill="#3a2a4a" text-anchor="middle">Not only + 成分 A</text><text x="190" y="140" font-size="13" fill="#7a3fb0" text-anchor="middle">（句首时 A 后部分倒装）</text><rect x="360" y="80" width="260" height="56" rx="8" fill="#d8c2ec" stroke="#7a3fb0" stroke-width="2"/><text x="490" y="106" font-size="15" fill="#3a2a4a" text-anchor="middle">but also + 成分 B</text><text x="490" y="140" font-size="13" fill="#7a3fb0" text-anchor="middle">（B 后语序正常）</text><text x="340" y="185" font-size="15" fill="#3a2a4a" text-anchor="middle">并列双方地位对称，强调"不仅……而且……"</text></svg>`, caption: '图1　Not only...but also... 并列结构：连接两个对称成分，句首时前半句需部分倒装。' },
        { type: 'example', label: '例句2·Not only', text: 'Not only <strong>does he speak</strong> English well, but he also speaks French fluently.<br><br>译文：他不仅英语说得好，而且法语也说得很流利。<br>分析：Not only 在句首，分句部分倒装（does he speak）；but also 后语序正常（he speaks）。' },
        { type: 'keypoint', label: '重点·It + 系动词 + 主语从句', text: '英语常用 <strong>It + be + 形容词/名词 + 主语从句</strong> 的结构，其中 <strong>it 是形式主语</strong>，真正的主语是从句，被移到句末，避免句子"头重脚轻"。如 It is important that we should ensure food security.' },
        { type: 'warn', label: '易错·主谓一致', text: '在 It is important / necessary / strange 等形容词后的主语从句中，谓语常用 <strong>(should) + 动词原形</strong> 的虚拟语气，should 可省略。初学者易误填 will / would 等。另外，主语从句作主语时，<strong>谓语动词一般用单数</strong>。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图2　It 作形式主语 + 真正主语从句后置</text><rect x="60" y="90" width="90" height="56" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="105" y="124" font-size="16" fill="#3a2a4a" text-anchor="middle">It</text><rect x="170" y="90" width="160" height="56" rx="8" fill="#d8c2ec" stroke="#7a3fb0" stroke-width="2"/><text x="250" y="116" font-size="15" fill="#3a2a4a" text-anchor="middle">is + adj./n.</text><text x="250" y="138" font-size="13" fill="#7a3fb0" text-anchor="middle">important</text><rect x="350" y="90" width="270" height="56" rx="8" fill="#cdb6e8" stroke="#7a3fb0" stroke-width="2"/><text x="485" y="116" font-size="15" fill="#3a2a4a" text-anchor="middle">真正主语从句</text><text x="485" y="138" font-size="13" fill="#7a3fb0" text-anchor="middle">that we ensure food security</text><line x1="150" y1="118" x2="168" y2="118" stroke="#7a3fb0" stroke-width="2"/><line x1="330" y1="118" x2="348" y2="118" stroke="#7a3fb0" stroke-width="2"/><text x="340" y="200" font-size="15" fill="#3a2a4a" text-anchor="middle">It 占位避免"头重脚轻"，真正主语移到句末</text></svg>`, caption: '图2　It 形式主语结构：It + be + 形容词/名词 + 真正的主语从句（置于句末）。' },
        { type: 'heading', text: '二、主语从句深化' },
        { type: 'paragraph', text: '主语从句的位置较灵活：通常放在主句谓语之前，也可借助 it 作形式主语把从句后置。引导词的选择取决于从句本身"缺不缺成分、表达什么意义"。' },
        { type: 'keypoint', label: '重点·位置与形式主语', text: '主语从句有两种语序：①<strong>从句前置</strong>（What he needs is time.）；②<strong>it 形式主语后置</strong>（It is time that he needs.）。二者意义一致，但后者更常用、句子更平衡。是否用 it 取决于表达习惯与避免头重脚轻的需要。' },
        { type: 'list', items: [
          'that：无词义只连接，不作成分，主语从句句首一般不省',
          'whether：表"是否"，不作成分，主语从句中不能用 if 替代',
          'what：表"……的事物/人"，在从句中充当主、宾、表语',
          'who / which / when / where / why / how：分别在从句中充当相应成分',
          '主语从句作主语，谓语通常用单数'
        ] },
        { type: 'table', headers: ['引导词', '意义', '在从句中成分', '示例'], rows: [
          ['that', '无词义，只连接', '不作成分', 'That he came is true.'],
          ['whether', '是否', '不作成分', 'Whether we go depends on weather.'],
          ['what', '……的事物/人', '作主/宾/表语', 'What we need is time.'],
          ['who / which', '谁 / 哪一个', '作主/宾/定语', 'Who will come is unknown.'],
          ['when / where / why / how', '时间/地点/原因/方式', '作状语', 'How he did it is a mystery.']
        ] },
        { type: 'example', label: '例句3·what 引导', text: '判断主语从句引导词：<br><strong>What we need most</strong> is more clean water in the village.<br><br>译文：我们最需要的，是村里更多洁净的水。<br>分析：what 在从句中作 need 的宾语，意为"……的事物"，引导主语从句作全句主语；谓语 is 后为表语。' },
        { type: 'keypoint', label: '重点·what/that/whether 区别', text: '三种高频引导词的区别：<strong>what</strong> 表示"……的人/事物"，在从句中充当主、宾、表语；<strong>that</strong> 只起连接作用、无词义、不作成分，但不可省略（主语从句句首时）；<strong>whether</strong> 表示"是否"，不作成分，主语从句中不能用 if 替代。' },
        { type: 'warn', label: '易错·谓语用单数', text: '主语从句作主语时，谓语动词一般用<strong>单数</strong>形式，因为整个从句被视作一个整体概念。例如 <strong>What we need is</strong> time（不是 are）。高考基础阶段统一按单数处理，切勿因从句内部名词而误用复数。' },
        { type: 'tip', label: '提示·形式主语框架', text: '使用 it 作形式主语时，真正的主语从句要放到句末，常见框架为 <strong>It + be + 形容词/名词 + that / whether / what 从句</strong>。这样能避免句子"头重脚轻"。记口诀："重要、必要、奇怪事，it 开头 that 收尾。"' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图3　主语从句两种语序对比</text><rect x="40" y="70" width="290" height="80" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="185" y="98" font-size="14" fill="#3a2a4a" text-anchor="middle">正常语序（从句在句首）</text><text x="185" y="124" font-size="13" fill="#7a3fb0" text-anchor="middle">What he needs is time.</text><rect x="350" y="70" width="290" height="80" rx="8" fill="#d8c2ec" stroke="#7a3fb0" stroke-width="2"/><text x="495" y="98" font-size="14" fill="#3a2a4a" text-anchor="middle">形式主语（It 占位）</text><text x="495" y="124" font-size="13" fill="#7a3fb0" text-anchor="middle">It is time that he needs.</text><text x="340" y="200" font-size="14" fill="#3a2a4a" text-anchor="middle">两种表达意义一致，后者更常用、更平衡</text><text x="340" y="230" font-size="13" fill="#5a7a2a" text-anchor="middle">what 表"……的事物"；that 无词义只连接</text></svg>`, caption: '图3　主语从句两种语序：从句前置与 it 形式主语后置，语义相同、结构不同。' },
        { type: 'paragraph', text: '本课时把 Unit 5 的三大重点句型（Given that 条件状语从句、Not only...but also... 并列、It 形式主语 + 主语从句）与主语从句的深化用法整合起来。掌握引导词的选择、形式主语的位置以及谓语用单数，是读懂课文长难句和写好书面表达的关键。' },
        { type: 'heading', text: '三、本课小结' },
        { type: 'list', items: [
          'Given that 引导条件/原因状语从句，意为"鉴于、考虑到"',
          'Not only...but also... 连接并列成分，句首时前半句部分倒装',
          'It + be + adj./n. + 主语从句：it 作形式主语，从句后置',
          '主语从句引导词：what 表"……的事物"，that 无词义，whether 表"是否"',
          '主语从句作主语时谓语一般用单数；if 不能引导主语从句'
        ] }
      ],
      exercises: [
        { type: 'choice', question: '______ that he was ill, we decided to visit him after class.', options: ['Given', 'Given that', 'Giving', 'To give'], answer: 'Given that', explanation: 'given that 是连词短语，意为"鉴于、考虑到"，引导原因或条件状语从句，后接完整句子 he was ill。given 单独作介词意为"考虑到"但后面通常接名词，giving 与 to give 不能引导从句，故选 Given that。' },
        { type: 'choice', question: 'Not only ______ English well, but he also speaks French fluently.', options: ['he speaks', 'does he speak', 'he spoke', 'speaks he'], answer: 'does he speak', explanation: 'not only 位于句首时，其所在分句须部分倒装：助动词 does 提前，主语 he 紧随，即 does he speak。but also 后的分句语序正常。若不倒装 he speaks 则违背"句首 not only 倒装"规则。' },
        { type: 'choice', question: 'It is important that we ______ ensure food security for all people.', options: ['will', 'would', 'should', 'shall'], answer: 'should', explanation: '在 It is important / necessary 等形容词后的主语从句中，谓语常用"(should) + 动词原形"的虚拟语气，should 可省略。此处 that 引导真正主语从句，用 should ensure 表示"应当确保"。will / would / shall 均不用于此虚拟结构。' },
        { type: 'fill', question: 'It is a pity ______ he missed such a good chance to learn. (用 that 或 whether 填空)', answer: 'that', explanation: '本句为 it 作形式主语的结构，真正主语是从句 he missed...。所述为既定事实（他错过了机会），并非"是否"的疑问，故用 that 引导。that 在从句中只起连接作用、无词义，口语中可省略，但不能用 whether。' },
        { type: 'fill', question: '______ we will hold the sports meeting depends on the weather. (用 whether 或 if 填空，注意主语从句中不可用 if)', answer: 'Whether', explanation: '主语从句表示"是否"时，只能用 whether，不能用 if。if 不能引导主语从句，也不能用于介词之后。句意"我们是否举行运动会取决于天气"，故填 Whether。注意句首主语从句必须用 whether。' }
      ]
    }

  );
})();
