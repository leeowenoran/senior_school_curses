/* ============================================================
 * 高一英语 · 必修 第二册 · Unit 4 History and Traditions
 * 第1课时：核心词汇与过去分词作定语（人教版 2019 必修第二册）
 * 第2课时：重点句型与过去分词作宾补
 * 数据注入：english.bx2.points
 * 配色：紫色系（主色 #9c56d4 / #7a3fb0，背景 #f3edfa）
 * ============================================================ */
(function () {
  var v = gzGetVolume('english', 'bx2');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 核心词汇与过去分词作定语 ---------------- */
    {
      id: 'bx2-u4-l1',
      name: '核心词汇与过去分词作定语',
      chapter: 'Unit 4 History and Traditions',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、Unit 4 核心词汇概览' },
        { type: 'paragraph', text: 'Unit 4 History and Traditions 围绕英国的历史与传统展开，课文与阅读中会出现一批描述历史、文化、风景的常用词汇。掌握这些核心名词与动词，是读懂课文、完成词汇运用题的基础，也为后面学习过去分词作定语提供语言材料。' },
        { type: 'keypoint', label: '重点·核心名词', text: '本单元需要重点识记的名词有：<strong>tradition</strong>（传统；传统习俗）、<strong>custom</strong>（习俗；风俗）、<strong>ancestor</strong>（祖先；祖宗）、<strong>location</strong>（地点；位置）、<strong>landscape</strong>（风景；景色）、<strong>battle</strong>（战役；战斗）、<strong>achievement</strong>（成就；成绩），以及既可作名词又可作动词的 <strong>influence</strong>（影响；起作用）。' },
        { type: 'table', headers: ['单词', '词性', '汉语释义'], rows: [
          ['tradition', 'n.', '传统；传统习俗'],
          ['custom', 'n.', '习俗；风俗'],
          ['ancestor', 'n.', '祖先；祖宗'],
          ['location', 'n.', '地点；位置'],
          ['landscape', 'n.', '风景；景色'],
          ['battle', 'n.', '战役；战斗'],
          ['achievement', 'n.', '成就；成绩'],
          ['influence', 'n./vt.', '影响；起作用']
        ] },
        { type: 'heading', text: '二、常用短语与搭配' },
        { type: 'paragraph', text: '除单词外，Unit 4 还出现了一批高频短语，常用来描述某地的历史起源、文化特征和补充说明。这些短语在语法填空与完形填空中出现频率很高，需要结合例句理解并记忆。' },
        { type: 'keypoint', label: '重点·常用短语', text: '本单元核心短语：<strong>date back (to)</strong> 追溯（到）；始于；<strong>be based on</strong> 以……为基础；<strong>have a history of</strong> 有……的历史；<strong>be famous/known for</strong> 以……闻名/著称；<strong>break away (from)</strong> 脱离；摆脱；<strong>in addition (to)</strong> 除……之外（还）。' },
        { type: 'table', headers: ['短语', '汉语释义'], rows: [
          ['date back (to)', '追溯（到）；始于'],
          ['be based on', '以……为基础'],
          ['have a history of', '有……的历史'],
          ['be famous/known for', '以……闻名/著称'],
          ['break away (from)', '脱离；摆脱'],
          ['in addition (to)', '除……之外（还）']
        ] },
        { type: 'list', items: [
          '按主题分组记忆：历史类（date back, have a history of）、文化类（tradition, custom）',
          '注意短语中的小词：back、on、of、from、to 都不可漏写',
          '在阅读中遇到短语先整体识别，再拆解记忆，避免逐词翻译'
        ] },
        { type: 'heading', text: '三、过去分词作定语' },
        { type: 'paragraph', text: '过去分词（done 形式）可以像形容词一样修饰名词，在句中作定语。它通常表示“被动”或“完成”的意义，即被修饰的事物是动作的承受者，或动作已经发生。理解这一点，是区分它与现在分词作定语的关键。' },
        { type: 'keypoint', label: '重点·基本用法', text: '过去分词作定语时<strong>相当于形容词</strong>，用来修饰名词，表示<strong>被动或完成</strong>的含义。单个过去分词作定语时一般放在名词<strong>前面</strong>；过去分词短语作定语时则放在名词<strong>后面</strong>（后置）。' },
        { type: 'example', label: '例题1', text: '判断下列结构中过去分词的用法：<br><strong>a written report</strong><br>分析：written 是 write 的过去分词，修饰 report，表示“被写出来的”，意为<strong>一份书面报告</strong>。单个分词 written 放在名词 report 前面，作前置定语。<br><br><strong>The house built in 1990 is old.</strong><br>分析：built in 1990 是过去分词短语，修饰 the house，表示“建于1990年的（被建造的）”，放在名词后面作<strong>后置定语</strong>。' },
        { type: 'keypoint', label: '重点·前置与后置', text: '位置规则可总结为：<strong>单个分词前置，分词短语后置</strong>。例如 a broken cup（一只破了的杯子，前置）与 the cup broken by him（被他打碎的杯子，后置）。判断时先看是“一个词”还是“带修饰语的短语”。' },
        { type: 'example', label: '例题2', text: '将括号中的词变为适当形式填空：<br>The book ______ (write) by Lu Xun is very famous.<br><br><strong>解</strong>：book 与 write 之间是被动关系，且 write 的动作已完成，应使用过去分词 <strong>written</strong>。此处 written by Lu Xun 是分词短语，作后置定语修饰 the book，全句意为“鲁迅写的这本书很有名”。' },
        { type: 'warn', label: '易错', text: '不要把过去分词作定语与<strong>现在分词作定语</strong>混淆。过去分词（done）表示“被动/完成”，如 a broken window（被打破的窗）；现在分词（doing）表示“主动/进行”，如 a falling leaf（正在飘落的叶子）。判断核心是看被修饰名词与动作之间是被动还是主动关系。' },
        { type: 'tip', label: '提示', text: '记忆小窍门：看到“被……的”或“已经……的”优先考虑过去分词；看到“正在……的”优先考虑现在分词。做题时先把汉语意思翻译出来，再判断主动还是被动，就不容易选错形式。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">英国历史文化发展时间轴</text><line x1="80" y1="130" x2="620" y2="130" stroke="#9c56d4" stroke-width="3"/><g stroke="#b87fd8" stroke-width="2"><line x1="160" y1="115" x2="160" y2="145"/><line x1="340" y1="115" x2="340" y2="145"/><line x1="520" y1="115" x2="520" y2="145"/></g><g text-anchor="middle" font-size="15" fill="#3a2a4a"><text x="160" y="108" fill="#7a3fb0" font-weight="bold">罗马时期</text><text x="160" y="168">43–410 AD</text><text x="160" y="190">道路 城堡</text><text x="340" y="108" fill="#7a3fb0" font-weight="bold">中世纪</text><text x="340" y="168">1066–1485</text><text x="340" y="190">城堡 教堂</text><text x="520" y="108" fill="#7a3fb0" font-weight="bold">近代</text><text x="520" y="168">1485 以后</text><text x="520" y="190">帝国 工业</text></g><text x="350" y="224" font-size="14" fill="#3a2a4a" text-anchor="middle">时间轴从左到右表示历史由古至今的延续</text></svg>', caption: '图1　英国历史三阶段时间轴：罗马时期、中世纪、近代，是 Unit 4 课文的文化背景。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">过去分词作定语：前置与后置</text><rect x="70" y="70" width="250" height="70" rx="8" fill="#e4d4f5" stroke="#9c56d4" stroke-width="2"/><text x="195" y="100" font-size="15" fill="#3a2a4a" text-anchor="middle">单个分词 前置</text><text x="195" y="125" font-size="14" fill="#7a3fb0" text-anchor="middle">a written report</text><rect x="360" y="70" width="250" height="70" rx="8" fill="#e4d4f5" stroke="#9c56d4" stroke-width="2"/><text x="485" y="100" font-size="15" fill="#3a2a4a" text-anchor="middle">分词短语 后置</text><text x="485" y="125" font-size="14" fill="#7a3fb0" text-anchor="middle">the house built in 1990</text><g font-size="14" fill="#3a2a4a"><text x="70" y="182">规则：单个过去分词靠近名词，放在其前面；</text><text x="70" y="208">过去分词短语较长，放在被修饰名词的后面。</text></g></svg>', caption: '图2　过去分词作定语的位置：单分时前置，分词短语则后置修饰名词。' },
        { type: 'list', items: [
          '过去分词作定语 = 形容词性，表被动或完成',
          '单个分词前置（a written report），短语后置（the house built in 1990）',
          '与现在分词区分：done 被动完成，doing 主动进行'
        ] },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: [
          '核心词汇：tradition、custom、ancestor、location、landscape、battle、achievement、influence',
          '常用短语：date back (to)、be based on、have a history of、be famous/known for、break away (from)、in addition (to)',
          '过去分词作定语相当于形容词，表被动或完成',
          '位置口诀：单个分词前置，分词短语后置',
          '与现在分词作定语的区别在于主动还是被动'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">Unit 4 词汇主题归类</text><rect x="60" y="60" width="170" height="60" rx="8" fill="#e4d4f5" stroke="#9c56d4" stroke-width="2"/><text x="145" y="95" font-size="14" fill="#3a2a4a" text-anchor="middle">历史 heritage</text><rect x="255" y="60" width="170" height="60" rx="8" fill="#e4d4f5" stroke="#9c56d4" stroke-width="2"/><text x="340" y="95" font-size="14" fill="#3a2a4a" text-anchor="middle">传统 tradition</text><rect x="450" y="60" width="170" height="60" rx="8" fill="#e4d4f5" stroke="#9c56d4" stroke-width="2"/><text x="535" y="95" font-size="14" fill="#3a2a4a" text-anchor="middle">风景 landscape</text><text x="340" y="160" font-size="14" fill="#3a2a4a" text-anchor="middle">核心词汇围绕历史、传统与自然风光三大主题展开</text></svg>', caption: '图3　Unit 4 核心词汇可归为历史、传统、风景三类，便于联想记忆。' }
      ],
      exercises: [
        { type: 'choice', question: '下列单词中，表示“祖先”的是？', options: ['custom', 'ancestor', 'landscape', 'battle'], answer: 'ancestor', explanation: 'ancestor 是名词，意为“祖先；祖宗”，指一个家族或民族较早的先辈。custom 意为“习俗”，landscape 意为“风景”，battle 意为“战役”，均与“祖先”无关，故选 ancestor。' },
        { type: 'choice', question: '短语 date back (to) 的汉语意思是？', options: ['以……为基础', '追溯（到）；始于', '脱离；摆脱', '除……之外（还）'], answer: '追溯（到）；始于', explanation: 'date back (to) 表示某事物“追溯（到）……；始于……”，常用来说明历史或传统的起源。be based on 意为以……为基础，break away (from) 意为脱离，in addition (to) 意为除……之外，均不符合，故选“追溯（到）；始于”。' },
        { type: 'choice', question: '在 “The house ___ in 1990 is old.” 中，空格应填？', options: ['build', 'building', 'built', 'to build'], answer: 'built', explanation: '此处需要用过去分词 built 作后置定语，修饰 the house，表示“被建造于1990年的房子”，过去分词表被动和完成。build 是动词原形，building 是现在分词（表主动/进行），to build 是不定式，均不能表达被动完成的含义，故选 built。' },
        { type: 'fill', question: '过去分词作定语时，单个分词通常______被修饰的名词（填“前置”或“后置”）。', answer: '前置', explanation: '当单个过去分词作定语修饰名词时，通常放在名词的前面，如 a written report（一份书面报告）。只有过去分词短语（带有修饰成分）才放在名词后面作后置定语，故单分时填“前置”。' },
        { type: 'fill', question: '过去分词短语作定语时，通常______被修饰的名词（填“前置”或“后置”）。', answer: '后置', explanation: '过去分词短语由于包含修饰语、较长，按照英语语法习惯要放在被修饰名词的后面，作后置定语，如 the house built in 1990。单个分词才前置，故短语作定语时填“后置”。' }
      ]
    },

    /* ---------------- 第2课时 重点句型与过去分词作宾补 ---------------- */
    {
      id: 'bx2-u4-l2',
      name: '重点句型与过去分词作宾补',
      chapter: 'Unit 4 History and Traditions',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、Unit 4 重点句型' },
        { type: 'paragraph', text: 'Unit 4 课文中有几个高频且实用的句型，既能帮助准确表达观点，也常出现在写作与语法考查中。掌握它们的结构与汉语对应，可以显著提升语言输出的质量。' },
        { type: 'keypoint', label: '重点·句型1', text: '<strong>What impresses me most is ...</strong> 意为“最令我印象深刻的是……”。其中 what 引导主语从句，is 后面接表语（名词、动名词或从句），常用于读后感和介绍类表达的开场。' },
        { type: 'keypoint', label: '重点·句型2', text: '<strong>It is worth doing ...</strong> 意为“……值得做”。worth 后面必须接<strong>动名词（doing）</strong>形式，且用主动形式表达被动含义，不能说 It is worth to do。' },
        { type: 'example', label: '例题1', text: '用重点句型完成句子：<br>______ impresses me most is the old castle.<br><br><strong>解</strong>：空格处需要主语从句的引导词，表示“最令我印象深刻的事物”，应填 <strong>What</strong>，构成 What impresses me most is the old castle（最令我印象深刻的是那座古堡）。注意 what 位于句首要大写。' },
        { type: 'keypoint', label: '重点·句型3', text: '<strong>Not only ... but also ...</strong> 意为“不仅……而且……”，连接两个并列成分。当 <strong>Not only 置于句首</strong>引导前一分句时，该分句要<strong>部分倒装</strong>（助动词/be动词/情态动词提到主语前）；but also 之后用正常语序。' },
        { type: 'example', label: '例题2', text: '将下列句子改写为 Not only 倒装句：<br>He is not only a teacher but also a writer.<br><br><strong>解</strong>：把 Not only 置于句首，前一分句部分倒装，is 提前到主语 he 之前：<strong>Not only is he a teacher, but also he is a writer.</strong>（他不仅是一位老师，也是一位作家。）' },
        { type: 'table', headers: ['句型', '汉语意思', '用法注意'], rows: [
          ['What impresses me most is ...', '最令我印象深刻的是……', 'what 引导主语从句，is 后为表语'],
          ['It is worth doing ...', '……值得做', 'worth 后接动名词主动表被动'],
          ['Not only ... but also ...', '不仅……而且……', 'not only 置于句首时前句部分倒装']
        ] },
        { type: 'heading', text: '二、过去分词作宾语补足语' },
        { type: 'paragraph', text: '除了作定语，过去分词还可以放在宾语之后，作宾语补足语，用来补充说明宾语所处的状态或感受。常见的动词有 find、keep、make、have、leave 等。' },
        { type: 'keypoint', label: '重点·基本用法', text: '过去分词作<strong>宾语补足语</strong>时，位于宾语之后，补充说明宾语的<strong>状态或感受</strong>，宾语与过去分词之间通常是<strong>被动或已完成</strong>的关系。结构为：主语 + 谓语 + 宾语 + 过去分词。' },
        { type: 'example', label: '例题3', text: '分析下列句中过去分词作宾补的用法：<br><strong>I found the city greatly changed.</strong><br>分析：found 是谓语，the city 是宾语，changed 是过去分词作宾补，补充说明“城市”处于“被改变/已变化”的状态。宾语 city 与 changed 是被动关系。<br><br><strong>We should keep the room cleaned.</strong><br>分析：keep 的宾语 the room 后接 cleaned 作宾补，表示“保持房间被打扫干净的状态”。' },
        { type: 'warn', label: '易错', text: '区分“过去分词作<strong>定语</strong>”与“作<strong>宾补</strong>”：定语紧跟在名词后修饰它（the changed city 古老的/被改变的城市）；宾补在宾语之后、由谓语动词带出，说明宾语的状态（I found the city changed）。关键看前面有没有“谓语 + 宾语”的结构。' },
        { type: 'tip', label: '提示', text: '判断宾补位置的小技巧：先找句子的谓语动词和宾语，若宾语后面紧跟一个过去分词，且能翻译成“宾语被……”，那它多半是宾补。常见搭配：find ... changed、keep ... cleaned、make ... done、have ... repaired。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">过去分词作宾语补足语结构</text><rect x="80" y="80" width="90" height="45" rx="8" fill="#e4d4f5" stroke="#9c56d4" stroke-width="2"/><text x="125" y="108" font-size="15" fill="#3a2a4a" text-anchor="middle">主语</text><rect x="190" y="80" width="90" height="45" rx="8" fill="#e4d4f5" stroke="#9c56d4" stroke-width="2"/><text x="235" y="108" font-size="15" fill="#3a2a4a" text-anchor="middle">谓语</text><rect x="300" y="80" width="90" height="45" rx="8" fill="#e4d4f5" stroke="#9c56d4" stroke-width="2"/><text x="345" y="108" font-size="15" fill="#3a2a4a" text-anchor="middle">宾语</text><rect x="420" y="80" width="120" height="45" rx="8" fill="#f0d6e8" stroke="#c0392b" stroke-width="2"/><text x="480" y="108" font-size="14" fill="#3a2a4a" text-anchor="middle">宾补(过分)</text><g font-size="14" fill="#3a2a4a"><text x="80" y="162">例：I found the city greatly changed.</text><text x="80" y="190">宾语 city 被 changed 补充说明其状态</text></g></svg>', caption: '图1　过去分词作宾补：位于“谓语 + 宾语”之后，补充说明宾语所处的状态。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">Not only ... but also ... 倒装结构</text><rect x="70" y="80" width="280" height="60" rx="8" fill="#e4d4f5" stroke="#9c56d4" stroke-width="2"/><text x="210" y="105" font-size="15" fill="#3a2a4a" text-anchor="middle">Not only + 助动词 + 主语 ...</text><rect x="380" y="80" width="230" height="60" rx="8" fill="#e4d4f5" stroke="#9c56d4" stroke-width="2"/><text x="495" y="105" font-size="15" fill="#3a2a4a" text-anchor="middle">but also + 正常语序</text><g font-size="14" fill="#3a2a4a"><text x="70" y="178">前句部分倒装：助动词提前到主语之前；</text><text x="70" y="205">后句 but also 之后用正常陈述语序。</text></g></svg>', caption: '图2　Not only 置于句首时，前一分句部分倒装，but also 之后保持正常语序。' },
        { type: 'heading', text: '三、过去分词与现在分词的区分' },
        { type: 'paragraph', text: '过去分词（-ed）与现在分词（-ing）都可以作定语或宾语补足语，但表达的意义正好相反。准确区分“被动/完成”与“主动/进行”，是高中语法考查的高频考点。' },
        { type: 'keypoint', label: '重点·意义区分', text: '<strong>过去分词</strong>表示“<strong>被动 / 完成</strong>”，即动作由被修饰对象承受或已经发生；<strong>现在分词</strong>表示“<strong>主动 / 进行</strong>”，即动作由被修饰对象发出或正在进行。例如 a developing country（发展中国家，主动进行）与 a developed country（发达国家，被动完成）。' },
        { type: 'table', headers: ['形式', '含义', '例句'], rows: [
          ['过去分词 done', '被动 / 完成', 'a written report 书面报告'],
          ['现在分词 doing', '主动 / 进行', 'a developing country 发展中国家']
        ] },
        { type: 'list', items: [
          '看逻辑关系：宾语/中心词是动作的执行者还是承受者',
          '被动或已完成 → 过去分词（done）',
          '主动或进行 → 现在分词（doing）'
        ] },
        { type: 'example', label: '例题4', text: '选择正确形式填空：<br>The ______ (excite) children are watching the show.<br><br><strong>解</strong>：children 与 excite 之间是<strong>主动</strong>关系，且表示“感到兴奋的孩子们（正在）”，应使用现在分词 <strong>exciting</strong> 还是 excited？此处 children 是“被逗乐/感到兴奋”的承受者，习惯用 <strong>excited</strong>（过去分词表被动感受）修饰人；若修饰物（an exciting show）才用 exciting。故填 excited。' },
        { type: 'warn', label: '易错', text: '修饰“人”的感受常用过去分词（excited、interested、surprised），修饰“物”的特征常用现在分词（exciting、interesting、surprising）。不要因为看到“人”就一律用现在分词；此处过去分词表示“被……的”感受，属于被动含义。' },
        { type: 'list', items: [
          '句型：What impresses me most is ...；It is worth doing ...；Not only ... but also ...（前句倒装）',
          '过去分词作宾补：谓语 + 宾语 + 过分，说明宾语状态',
          '分词区分总则：done 被动完成，doing 主动进行'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">过去分词 与 现在分词 对比</text><rect x="70" y="70" width="260" height="80" rx="8" fill="#e4d4f5" stroke="#9c56d4" stroke-width="2"/><text x="200" y="100" font-size="15" fill="#3a2a4a" text-anchor="middle">过去分词 (-ed)</text><text x="200" y="128" font-size="14" fill="#7a3fb0" text-anchor="middle">被动 / 完成</text><rect x="350" y="70" width="260" height="80" rx="8" fill="#e4d4f5" stroke="#9c56d4" stroke-width="2"/><text x="480" y="100" font-size="15" fill="#3a2a4a" text-anchor="middle">现在分词 (-ing)</text><text x="480" y="128" font-size="14" fill="#7a3fb0" text-anchor="middle">主动 / 进行</text><text x="340" y="195" font-size="14" fill="#3a2a4a" text-anchor="middle">记忆：done 表被动完成，doing 表主动进行</text></svg>', caption: '图3　过去分词与现在分词意义相反：done 被动完成，doing 主动进行，据此判断作定语或宾补的形式。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: [
          '重点句型：What impresses me most is ...；It is worth doing ...；Not only ... but also ...（前句倒装）',
          '过去分词作宾补：位于宾语后，说明宾语被动或已完成的状态',
          '分词区分：done 表被动/完成，doing 表主动/进行',
          '修饰人的感受多用过去分词（excited 等），修饰物多用现在分词（exciting 等）'
        ] }
      ],
      exercises: [
        { type: 'choice', question: '“It is worth ___ the museum.” 空格应填？', options: ['to visit', 'visiting', 'visit', 'visited'], answer: 'visiting', explanation: '句型 It is worth doing 表示“……值得做”，worth 后必须接动名词（doing）形式，且主动形式表达被动含义，故用 visiting。to visit 是不定式，visit 是原形，visited 是过去分词，均不符合 worth 的用法。' },
        { type: 'choice', question: '“Not only ___ but also he is a writer.” 空格应填（倒装）？', options: ['she is a teacher', 'is she a teacher', 'she a teacher is', 'teacher she is'], answer: 'is she a teacher', explanation: '当 Not only 置于句首引导前一分句时，该分句要部分倒装，即把助动词/be动词/情态动词提到主语之前，构成“Not only + 助动词 + 主语 ...”。主语是 she，be 动词 is 提前，故为 is she a teacher。后一分句 but also 之后用正常语序。' },
        { type: 'choice', question: '“I found the city ___ .” 空格应填（宾补）？', options: ['change', 'changing', 'changed', 'to change'], answer: 'changed', explanation: '此处 city 与 change 之间是被动、完成的关系，用过去分词 changed 作宾语 the city 的补足语，表示“发现这座城市已发生变化”。changing 是现在分词（主动/进行），change 是原形，to change 是不定式，都不能表达被动完成，故选 changed。' },
        { type: 'fill', question: '过去分词作宾语补足语，通常表示宾语处于______的状态（填“被动”或“主动”）。', answer: '被动', explanation: '过去分词作宾语补足语时，宾语与补足语之间通常是被动或已完成的关系，即宾语“被……”怎样了，如 I found the city changed。现在分词作宾补才表示主动或进行的状态，故此处填“被动”。' },
        { type: 'fill', question: '现在分词作定语或宾补时，通常表示动作______（填“进行”或“完成”）。', answer: '进行', explanation: '现在分词（-ing）具有主动和进行的意味，作定语或宾补时表示宾语或中心词正在发出动作，如 a developing country（发展中国家）。过去分词才表示被动或完成，故现在分词这里填“进行”。' }
      ]
    }

  );
})();
