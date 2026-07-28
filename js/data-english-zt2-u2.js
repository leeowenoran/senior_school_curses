(function () {
  var v = gzGetVolume('english', 'zt2');
  if (!v) return;
  v.points.push(
    {
      id: `zt2-u2-l1`,
      name: `完形填空题型特征与设空层次`,
      chapter: `完形与阅读 · 第2单元 完形填空（上）`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、完形填空到底长什么样' },
        { type: 'paragraph', text: '完形填空是高考英语里一道"看着文章选词"的题。它会给一篇被挖掉一些词的短文，让你从四个选项里挑出最合适的一个填回去。整道题一共 15 个空，每空 1 分，总共 15 分，文章大约 250 个词。' },
        { type: 'list', items: ['题量：一共 15 个空，不多不少。', '分值：每空 1 分，合起来 15 分。', '篇幅：文章大约 250 个词，比阅读短文短。', '形式：每个空给四个选项，只选一个。'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图1 完形填空的"分量"信息卡</text><rect x="50" y="130" width="115" height="130" rx="10" fill="#9c56d4"/><text x="107" y="195" font-size="30" fill="#ffffff" text-anchor="middle">15</text><text x="107" y="230" font-size="13" fill="#ffffff" text-anchor="middle">题（空）</text><rect x="205" y="130" width="115" height="130" rx="10" fill="#b87fd8"/><text x="262" y="195" font-size="30" fill="#3a2a4a" text-anchor="middle">1</text><text x="262" y="230" font-size="13" fill="#3a2a4a" text-anchor="middle">每空得分</text><rect x="360" y="130" width="115" height="130" rx="10" fill="#9c56d4"/><text x="417" y="195" font-size="30" fill="#ffffff" text-anchor="middle">15</text><text x="417" y="230" font-size="13" fill="#ffffff" text-anchor="middle">总分</text><rect x="515" y="130" width="115" height="130" rx="10" fill="#b87fd8"/><text x="572" y="195" font-size="26" fill="#3a2a4a" text-anchor="middle">约250</text><text x="572" y="230" font-size="13" fill="#3a2a4a" text-anchor="middle">文章词数</text><text x="340" y="312" font-size="14" fill="#3a2a4a" text-anchor="middle">四个数字，记住就懂完形填空的"分量"</text></svg>', caption: '图1 完形填空 15 题、每题 1 分、共 15 分、约 250 词' },
        { type: 'keypoint', label: '重点·本质', text: '完形填空的核心不是考"认不认得单词"，而是考 <strong>在语境中找最恰当的词</strong>。<br>四个选项可能你都认识，但只有贴着上下文的那一个才得分。' },
        { type: 'paragraph', text: '很多同学以为完形就是考词汇量，其实它考的是"语境中的词汇与逻辑"。也就是说，光背单词不够，你得看这个词放在这句话、这段故事里合不合身。' },
        { type: 'heading', text: '二、文章爱选什么样的材料' },
        { type: 'list', items: ['爱写人物内心活动，比如紧张、感动、后悔。', '故事性强，常常是夹叙夹议的小故事。', '行文会"跳"，时间跨度大，前面写小时候后面写长大。', '长句和复合句多，一句话里套好几层意思。'] },
        { type: 'paragraph', text: '这类文章读起来像在听人讲一段经历，然后顺便说点人生道理。因为句子长、情节跳跃，所以做题时不能只看半句就下结论。' },
        { type: 'example', label: '例题', text: '比如有一篇讲"我"小时候不敢上台演讲，后来在老师鼓励下战胜胆怯。<br>前面写害怕，中间写挣扎，结尾写感悟——这就是典型的夹叙夹议。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图2 设空三层次：点、线、面</text><polygon points="340,70 250,160 430,160" fill="#9c56d4"/><text x="340" y="140" font-size="15" fill="#ffffff" text-anchor="middle">面 · 通观全文（较难）</text><polygon points="225,175 455,175 425,245 255,245" fill="#b87fd8"/><text x="340" y="218" font-size="15" fill="#3a2a4a" text-anchor="middle">线 · 联系前后（中等）</text><polygon points="205,260 475,260 455,330 225,330" fill="#9c56d4"/><text x="340" y="303" font-size="15" fill="#ffffff" text-anchor="middle">点 · 只看本句（易）</text><text x="340" y="352" font-size="13" fill="#3a2a4a" text-anchor="middle">从"点"到"面"，思考范围越来越大</text></svg>', caption: '图2 设空三层次从易到难：点、线、面' },
        { type: 'heading', text: '三、设空的三层境界：点、线、面' },
        { type: 'table', headers: ['层次', '特点', '难度'], rows: [['点', '只看设空所在的这一句话就能定答案', '易'], ['线', '要联系前后几句或前后几段去找答案', '中等'], ['面', '必须通读全文，从整体角度考虑', '较难']] },
        { type: 'paragraph', text: '"点"层面的空最友好，答案就藏在它自己那句话里，比如并列结构、就近搭配，扫一眼就能定。' },
        { type: 'example', label: '例题', text: '句子："He felt ___ and left the room." 选项有 happy、sad、tall、red。<br>前面说"离开房间"，结合常理选 sad 最顺——这就是"点"层面。' },
        { type: 'paragraph', text: '"线"层面的空要往前看或往后看几句话。比如前一句说天阴了，后一句的空就该往"下雨、带伞"方向想。' },
        { type: 'example', label: '例题', text: '前句："It began to rain." 后句空："She ___ her umbrella." 选项 opened、cooked、sang、ate。<br>顺着"下雨"这条线，选 opened 才连得上。' },
        { type: 'warn', label: '易错', text: '最容易丢分的是 <strong>只盯本句</strong>：觉得某个词单独读通顺就选了，<br>结果和前后文对不上。记住，完形很少只考孤零零的一句。' },
        { type: 'paragraph', text: '"面"层面的空最难，要站在全文高度想。比如文章主题是"善良"，那么结尾总结处的空多半选带善意的词。' },
        { type: 'example', label: '例题', text: '全文讲一个人处处助人，最后空："His ___ moved everyone." 选项 kindness、height、speed、age。<br>从"面"上想，贴合主题的是 kindness。' },
        { type: 'tip', label: '方法', text: '做题顺序小窍门：<strong>先通读一遍</strong>抓大意，再逐空选；<br>拿不准的空先跳过，读完后面往往答案自己冒出来。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图3 一篇约250词夹叙夹议文章结构</text><rect x="40" y="120" width="160" height="80" rx="8" fill="#b87fd8"/><text x="120" y="152" font-size="14" fill="#3a2a4a" text-anchor="middle">开头·叙述</text><text x="120" y="176" font-size="13" fill="#3a2a4a" text-anchor="middle">约80词</text><rect x="250" y="120" width="180" height="80" rx="8" fill="#9c56d4"/><text x="340" y="152" font-size="14" fill="#ffffff" text-anchor="middle">中间·夹叙夹议</text><text x="340" y="176" font-size="13" fill="#ffffff" text-anchor="middle">约120词</text><rect x="470" y="120" width="160" height="80" rx="8" fill="#b87fd8"/><text x="550" y="152" font-size="14" fill="#3a2a4a" text-anchor="middle">结尾·升华点题</text><text x="550" y="176" font-size="13" fill="#3a2a4a" text-anchor="middle">约50词</text><line x1="200" y1="160" x2="248" y2="160" stroke="#7a3fb0" stroke-width="2"/><line x1="430" y1="160" x2="468" y2="160" stroke="#7a3fb0" stroke-width="2"/><rect x="190" y="250" width="300" height="42" rx="8" fill="#9c56d4"/><text x="340" y="277" font-size="14" fill="#ffffff" text-anchor="middle">全文约 250 词</text></svg>', caption: '图3 夹叙夹议文章由叙述、夹叙夹议、升华三部分约 250 词组成' },
        { type: 'keypoint', label: '重点·三层', text: '三层境界一句话记：<strong>点看句、线看段、面看篇</strong>。<br>越往"面"走越要全局思考。' },
        { type: 'tip', label: '方法', text: '平时练完形，每错一题就在旁边标它是"点/线/面"哪一层，<br>错得多的那层就是你的薄弱点。' },
        { type: 'paragraph', text: '把题型特征和设空层次摸熟，你再拿到完形填空就不会发懵：知道它考语境、知道答案藏在句子还是段落还是全文，方向就清楚了。' }
      ],
      exercises: [
        { type: 'choice', question: '完形填空的题目数量和总分分别是多少？', options: ['A. 10题共10分', 'B. 15题共15分', 'C. 20题共20分', 'D. 30题共30分'], answer: 'B. 15题共15分', explanation: '完形填空一共设置 15 个空，每个空 1 分，加起来就是 15 分，文章大约 250 个词。选项 A 题量偏少，C 和 D 的题量与分值都超出高考实际安排，所以正确选项是 B，15题共15分。' },
        { type: 'choice', question: '完形填空最核心的考查本质是什么？', options: ['A. 比谁背的单词多', 'B. 语境中的词汇与逻辑', 'C. 语法填空的规矩', 'D. 作文写得好不好看'], answer: 'B. 语境中的词汇与逻辑', explanation: '完形填空考的不是单纯背诵词汇量，而是在上下文里挑出最恰当的词，也就是"语境中的词汇与逻辑"。选项 A 只强调记忆，C 是另一类题型，D 属于写作，都不符合完形的本质，所以选 B。' },
        { type: 'choice', question: '设空层次里的"面"层面，应该怎么做？', options: ['A. 只看设空那一句话', 'B. 看前后相邻几句', 'C. 通观全文整体考虑', 'D. 随便蒙一个'], answer: 'C. 通观全文整体考虑', explanation: '设空分点、线、面三层。"点"只看本句，"线"看前后几句或几段，而"面"最难，必须通读全文、从整体角度思考才能定答案。所以"面"层面要通观全文，选 C；A 是点层面，B 是线层面。' },
        { type: 'fill', question: '完形填空的文章篇幅大约是_____个词。', answer: '250', explanation: '高考完形填空的文章一般控制在 250 个词左右，比阅读理解的文章短，但信息密度高、情节跳跃。记住这个篇幅有助于分配做题时间，所以填 250。' },
        { type: 'fill', question: '设空三层次中，只要看清设空所在的句子就能作答的是"___"层面。', answer: '点', explanation: '完形的设空分点、线、面三层。其中"点"层面最简单，答案就藏在设空所在的这一句话里，比如并列结构或就近搭配，扫一眼就能确定。所以填"点"。' }
      ]
    },
    {
      id: `zt2-u2-l2`,
      name: `完形填空核心考点：词汇运用`,
      chapter: `完形与阅读 · 第2单元 完形填空（上）`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、为什么词汇运用是完形第一考点' },
        { type: 'paragraph', text: '在完形填空的考点里，"词汇运用"占的比例最高。说白了，完形绝大多数空都是在考你这个词用得对不对、贴不贴语境。所以这一块必须拿下。' },
        { type: 'keypoint', label: '重点·词汇运用', text: '词汇运用 = 在 <strong>具体语境</strong> 里选对词。<br>它不考你背了多少词，而考你会不会用。' },
        { type: 'table', headers: ['考点', '在语境中考什么', '例子'], rows: [['词义辨析', '近义词、形近词精准选择', 'tell a story 用 told'], ['固定搭配', '动词/介词习惯组合', 'take care of'], ['情感色彩', '按文章情绪选褒贬', 'kind 夸人']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图1 词汇运用三大考点</text><rect x="250" y="60" width="180" height="46" rx="8" fill="#9c56d4"/><text x="340" y="89" font-size="15" fill="#ffffff" text-anchor="middle">词汇运用（占比最高）</text><line x1="340" y1="106" x2="130" y2="178" stroke="#7a3fb0" stroke-width="2"/><line x1="340" y1="106" x2="340" y2="178" stroke="#7a3fb0" stroke-width="2"/><line x1="340" y1="106" x2="550" y2="178" stroke="#7a3fb0" stroke-width="2"/><rect x="40" y="180" width="180" height="55" rx="8" fill="#b87fd8"/><text x="130" y="213" font-size="14" fill="#3a2a4a" text-anchor="middle">词义辨析</text><rect x="250" y="180" width="180" height="55" rx="8" fill="#b87fd8"/><text x="340" y="213" font-size="14" fill="#3a2a4a" text-anchor="middle">固定搭配</text><rect x="460" y="180" width="180" height="55" rx="8" fill="#b87fd8"/><text x="550" y="213" font-size="14" fill="#3a2a4a" text-anchor="middle">情感色彩</text><text x="340" y="290" font-size="13" fill="#3a2a4a" text-anchor="middle">三大考点都围绕"在语境中选对词"</text></svg>', caption: '图1 词汇运用占比最高，含词义辨析、固定搭配、情感色彩三大考点' },
        { type: 'heading', text: '二、考点一：词义辨析' },
        { type: 'list', items: ['近义词辨析：意思很接近，但细处有差别。', '形近词辨析：长得像，意思却不同。', '关键看语境：同一个意思在不同场景选不同词。'] },
        { type: 'paragraph', text: '词义辨析就是几个词意思差不多，你得分清谁更适合这句话。比如"说"可以用 speak、say、talk、tell，但搭配和语境不同，选错就丢分。' },
        { type: 'example', label: '例题', text: '语境："The teacher ___ us a story." 选项 told、said、spoke、talked。<br>和 story 搭配、且接双宾语的是 told，所以选 told。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图2 词义辨析：近义词二选一</text><rect x="60" y="90" width="560" height="60" rx="8" fill="#b87fd8"/><text x="340" y="126" font-size="15" fill="#3a2a4a" text-anchor="middle">The teacher ____ us a story.</text><rect x="150" y="200" width="160" height="60" rx="8" fill="#5a7a2a"/><text x="230" y="236" font-size="15" fill="#ffffff" text-anchor="middle">told（对·搭story）</text><rect x="370" y="200" width="160" height="60" rx="8" fill="#c0392b"/><text x="450" y="236" font-size="15" fill="#ffffff" text-anchor="middle">said（错·不接双宾）</text><text x="340" y="305" font-size="13" fill="#3a2a4a" text-anchor="middle">近义词放进原句比一比，搭配顺的才对</text></svg>', caption: '图2 近义词 told 与 said 放入语境，只有 told 搭配 story' },
        { type: 'tip', label: '方法', text: '辨析小技巧：把四个选项 <strong>逐个放进原句读</strong>，<br>谁读着最顺、最合情节，谁就大概率对。' },
        { type: 'heading', text: '三、考点二：固定搭配' },
        { type: 'list', items: ['动词短语：如 look after（照顾）、give up（放弃）。', '介词短语：如 in front of（在前面）、by chance（偶然）。', '固定句型：如 so...that、it takes...to do。'] },
        { type: 'paragraph', text: '固定搭配是英语里"约定俗成"的组合，不能自己瞎改。完形常把搭配拆开考，比如给一个动词，让你选后面的介词。' },
        { type: 'example', label: '例题', text: '句子："Please ___ care of the dog." 选项 take、make、do、get。<br>固定搭配是 take care of，所以选 take。' },
        { type: 'warn', label: '易错', text: '搭配最怕 <strong>记混</strong>：比如把 listen 配 with 当成 listen to，<br>或把 depend 配 in 当成 depend on，一混就选错。' },
        { type: 'heading', text: '四、考点三：情感色彩' },
        { type: 'list', items: ['褒义词：表达正面、好的感受，如 brave、kind。', '贬义词：表达负面、坏的感受，如 lazy、rude。', '中性词：不褒不贬，如 big、run。'] },
        { type: 'paragraph', text: '情感色彩指词的"感情偏向"。一篇温暖的文里不会突然冒出贬义词；一段难过的故事里也该选带愁味的词。跟着文章情绪走，就不会错。' },
        { type: 'example', label: '例题', text: '语境：文章夸一位乐于助人的老人。空："What a ___ man!" 选项 kind、cruel、stupid、lazy。<br>夸人要用褒义，选 kind。' },
        { type: 'tip', label: '方法', text: '读文时先给文章"定情绪"：是高兴、感动，还是批评、惋惜，<br>再按情绪挑带对应色彩的词。' },
        { type: 'heading', text: '五、核心原则：谁更贴合语篇谁就赢' },
        { type: 'paragraph', text: '完形里有个铁律：选项里好几个词单独看都通顺、本身都没错，但只有最契合这篇文章特定情境的那个才得分。换句话说，不是"哪个词对"，而是"哪个词最贴这篇文"。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图3 核心原则：都通顺，只契合语篇的得分</text><rect x="40" y="130" width="140" height="70" rx="8" fill="#c0392b"/><text x="110" y="170" font-size="16" fill="#ffffff" text-anchor="middle">bought</text><rect x="190" y="130" width="140" height="70" rx="8" fill="#c0392b"/><text x="260" y="170" font-size="16" fill="#ffffff" text-anchor="middle">broke</text><rect x="340" y="130" width="140" height="70" rx="8" fill="#5a7a2a"/><text x="410" y="170" font-size="16" fill="#ffffff" text-anchor="middle">repaired</text><rect x="490" y="130" width="140" height="70" rx="8" fill="#c0392b"/><text x="560" y="170" font-size="16" fill="#ffffff" text-anchor="middle">threw</text><text x="410" y="225" font-size="13" fill="#5a7a2a" text-anchor="middle">贴合情节·正解</text><text x="340" y="290" font-size="13" fill="#3a2a4a" text-anchor="middle">选项都通顺，只有最契合语篇的那个得分</text></svg>', caption: '图3 四个选项单独都通顺，只有 repaired 贴合"道歉修补"情节而得分' },
        { type: 'example', label: '例题', text: '故事讲男孩弄坏同学文具后主动道歉、修补。空："He ___ the toy." 选项 bought、broke、repaired、threw。<br>四个词单独都通，但贴"道歉修补"情节的是 repaired，所以选 repaired。' },
        { type: 'warn', label: '易错', text: '别被"语感"带偏：有时你觉得某个词读着顺，<br>却和文章情感、情节不合，那它就不是答案。' },
        { type: 'keypoint', label: '重点·核心原则', text: '核心原则一句话：<strong>选项无绝对对错，只有贴不贴语篇</strong>。<br>贴情节、贴情绪、贴主题的那个，才是正解。' },
        { type: 'tip', label: '口诀', text: '实战口诀：<strong>词都认识别急着选，放进故事比一比；<br>谁最合情又合景，谁就拿下这一题。</strong>' },
        { type: 'paragraph', text: '词汇运用三大考点加上"贴合语篇"这个总原则，就是完形拿分的主心骨。练的时候多问自己：这个词放这篇文里到底合不合适？' }
      ],
      exercises: [
        { type: 'choice', question: '在完形填空的考点中，词汇运用的占比如何？', options: ['A. 占比最低', 'B. 占比最高', 'C. 根本不考', 'D. 只考一次'], answer: 'B. 占比最高', explanation: '完形填空绝大多数空都是在考词汇运用，也就是在具体语境里选对词，因此它在各个考点中占比最高。选项 A 和 C 与事实相反，D 也不对，所以正确选项是 B，占比最高。' },
        { type: 'choice', question: '下面哪一组属于英语的固定搭配？', options: ['A. take care of', 'B. red apple', 'C. big book', 'D. good boy'], answer: 'A. take care of', explanation: '固定搭配是英语里约定俗成的组合，take care of 意思是"照顾"，属于固定短语。选项 B、C、D 只是形容词加名词的普通组合，不是固定搭配，所以选 A。' },
        { type: 'choice', question: '文章在夸一位乐于助人的老人，空" What a ___ man!" 应该选哪个词？', options: ['A. kind', 'B. cruel', 'C. stupid', 'D. lazy'], answer: 'A. kind', explanation: '文章在夸奖老人，语境是正面、赞美的，所以要选褒义词。kind 意为"善良的"，是褒义；cruel 残忍、stupid 愚蠢、lazy 懒惰都是贬义，不符合夸人语境，所以选 A，kind。' },
        { type: 'fill', question: '词义辨析里，意思很接近但细处有差别的一组词叫_____词。', answer: '近义|近义词', explanation: '词义辨析常考近义词，也就是意思很接近、但用法或语气有细微差别的词，比如 speak 和 talk。完形里要在语境中分辨谁更合适，所以填"近义"或"近义词"。' },
        { type: 'fill', question: '完形核心原则：选项本身不一定错，只有最贴合_____（文章情境）的那个才得分。', answer: '语篇|文章|语境', explanation: '完形常出现多个选项单独读都通顺、本身都没错的情况，但只有最契合这篇文章特定情境的那个才是答案。所以判断标准是"贴不贴语篇"，可填语篇、文章或语境。' }
      ]
    }
  );
})();
