/* ============================================================
 * 高一英语 · 必修 第三册 · Unit 3 Diverse Cultures 多元文化
 * 第1课时：核心词汇与常用短语
 * 第2课时：重点句型与核心语法（动词-ing 作表语和定语）
 * 数据注入：english.bx3.points
 * 学科配色（紫色系）：主色 #9c56d4 / #7a3fb0，背景 #f3edfa
 * ============================================================ */
(function () {
  var v = gzGetVolume('english', 'bx3');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 核心词汇与常用短语 ---------------- */
    {
      id: `bx3-u3-l1`,
      name: `核心词汇与常用短语`,
      chapter: `Unit 3 Diverse Cultures`,
      difficulty: `基础`,
      content: [
        { type: `heading`, text: `一、Unit 3 核心词汇概览` },
        { type: `paragraph`, text: `Unit 3 Diverse Cultures 围绕世界多元文化、移民社群与民族文化传统展开。课文与词汇中反复出现一批与“多样性、民族、风俗、融合”相关的核心词。掌握这些词汇的<strong>词性、词义与搭配</strong>，是读懂课文、写好相关话题作文的前提。` },
        { type: `keypoint`, label: `重点·学法`, text: `学习 Unit 3 核心词汇建议三步走：① <strong>记词性与搭配</strong>，如 influence 既可作名词也可作动词；② <strong>在例句中理解</strong>，把单词放入课文语境；③ <strong>分类归纳</strong>，把“多样性类、民族类、文化类、互动类”词汇分组，便于记忆与写作迁移。` },
        { type: `paragraph`, text: `下表汇总本单元最常考的十三个核心词汇，建议结合课文句子记忆，并注意名词与形容词、动词之间的转换关系。` },
        { type: `table`, headers: [`单词`, `词性`, `释义`], rows: [
          [`diverse`, `adj.`, `不同的；多种多样的`],
          [`diversity`, `n.`, `多样性`],
          [`immigrant`, `n.`, `移民`],
          [`ethnic`, `adj.`, `民族的；种族的`],
          [`minority`, `n.`, `少数民族；少数派`],
          [`custom`, `n.`, `风俗；习俗`],
          [`unique`, `adj.`, `独特的`],
          [`identity`, `n.`, `身份；特性`],
          [`influence`, `n./v.`, `影响`],
          [`blend`, `n./v.`, `融合；混合`],
          [`heritage`, `n.`, `遗产`],
          [`tolerance`, `n.`, `容忍；宽容`],
          [`cuisine`, `n.`, `烹饪；菜肴`]
        ] },
        { type: `heading`, text: `二、常用短语与搭配` },
        { type: `paragraph`, text: `除单词外，本单元还要求学生掌握若干固定短语与搭配。这些短语在完形填空与语法填空里出现频率很高，尤其 contribute to 中的 to 是介词，是考试中的高频考点。` },
        { type: `list`, items: [
          `be made up of：由……组成`,
          `contribute to：贡献于；导致`,
          `be known for：以……而闻名`,
          `a melting pot：大熔炉（指多民族融合之地）`,
          `bring together：使团结；使联合`,
          `adapt to：适应`,
          `as well as：也；和`
        ] },
        { type: `table`, headers: [`短语`, `汉语释义`], rows: [
          [`be made up of`, `由……组成`],
          [`contribute to`, `贡献于；导致`],
          [`be known for`, `以……而闻名`],
          [`a melting pot`, `大熔炉`],
          [`bring together`, `使团结；使联合`],
          [`adapt to`, `适应`],
          [`as well as`, `也；和`]
        ] },
        { type: `keypoint`, label: `重点·be made up of`, text: `短语 <strong>be made up of</strong> 意为“由……组成”，主语通常是<strong>整体</strong>，of 后接<strong>组成部分</strong>。例如：The team is made up of students from different schools（这支队伍由来自不同学校的学生组成）。注意它强调“构成”，与 consist of 意思相近。` },
        { type: `warn`, label: `易错`, text: `注意 <strong>contribute to</strong> 中的 to 是<strong>介词</strong>，后接名词、代词或动名词（v-ing），<strong>不可接动词原形</strong>。另外 <strong>as well as</strong> 连接两个主语时，谓语动词要<strong>与前面主语保持一致</strong>（就远原则），如 The teacher as well as the students is here。` },
        { type: `heading`, text: `三、重点词汇用法与辨析` },
        { type: `paragraph`, text: `diverse 与 diversity 是同源词：diverse 是形容词，用来修饰名词；diversity 是名词，在句中常作主语或宾语。二者常一起出现在“文化多样性”相关话题中。` },
        { type: `example`, label: `例句·diverse 与 diversity`, text: `Our school has a <strong>diverse</strong> student body, and this <strong>diversity</strong> makes our campus lively.<br><br>第一句 diverse 是形容词，修饰 student body（学生群体），意为“多元的”；第二句 diversity 是名词，作主语，意为“多样性”。一句话里形容词与名词搭配使用，是写作中的常见写法。` },
        { type: `paragraph`, text: `influence 是一个既可作名词又可作动词的词，意思是“影响”。作名词时常与 on 搭配（influence on...），作动词时直接接宾语。` },
        { type: `example`, label: `例句·influence`, text: `Music has a strong <strong>influence</strong> on young people, and it can <strong>influence</strong> their feelings.<br><br>前半句 influence 是名词，作 has 的宾语，后接 on young people；后半句 influence 是动词，直接接宾语 their feelings，意为“影响他们的感受”。` },
        { type: `keypoint`, label: `重点·immigrant 与 ethnic`, text: `<strong>immigrant</strong> 是名词，指“移民”（从外地迁入的人）；<strong>ethnic</strong> 是形容词，指“民族的；种族的”，常用来修饰 group、culture、minority 等。例如：ethnic minorities（少数民族）。两者都与“人群来源”相关，但词性不同。` },
        { type: `paragraph`, text: `blend 与 tolerance 描述文化之间的互动：blend 表示不同事物“融合、混合”，tolerance 表示对差异的“宽容、容忍”。多元社会既需要融合，也需要彼此包容。` },
        { type: `tip`, label: `记忆口诀`, text: `记忆口诀：<strong>diverse 是形 diversity 是名，influence 名动都能行；immigrant 指人 ethnic 修物，blend 融合 tolerance 宽容</strong>。把同源词和易混词成对记，考试时就不容易用错词性。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">核心词汇分类图</text><rect x="40" y="60" width="150" height="80" rx="8" fill="#9c56d4"/><text x="115" y="92" font-size="15" fill="#ffffff" text-anchor="middle">多样性与身份</text><text x="115" y="114" font-size="12" fill="#ffffff" text-anchor="middle">diverse</text><text x="115" y="130" font-size="12" fill="#ffffff" text-anchor="middle">diversity identity</text><rect x="210" y="60" width="150" height="80" rx="8" fill="#b87fd8"/><text x="285" y="92" font-size="15" fill="#ffffff" text-anchor="middle">人群与民族</text><text x="285" y="114" font-size="12" fill="#ffffff" text-anchor="middle">immigrant</text><text x="285" y="130" font-size="12" fill="#ffffff" text-anchor="middle">ethnic minority</text><rect x="380" y="60" width="150" height="80" rx="8" fill="#7a3fb0"/><text x="455" y="92" font-size="15" fill="#ffffff" text-anchor="middle">文化传统</text><text x="455" y="114" font-size="12" fill="#ffffff" text-anchor="middle">custom cuisine</text><text x="455" y="130" font-size="12" fill="#ffffff" text-anchor="middle">heritage unique</text><rect x="550" y="60" width="150" height="80" rx="8" fill="#9c56d4"/><text x="625" y="92" font-size="15" fill="#ffffff" text-anchor="middle">文化互动</text><text x="625" y="114" font-size="12" fill="#ffffff" text-anchor="middle">influence blend</text><text x="625" y="130" font-size="12" fill="#ffffff" text-anchor="middle">tolerance</text><line x1="190" y1="100" x2="210" y2="100" stroke="#3a2a4a" stroke-width="2"/><line x1="360" y1="100" x2="380" y2="100" stroke="#3a2a4a" stroke-width="2"/><line x1="530" y1="100" x2="550" y2="100" stroke="#3a2a4a" stroke-width="2"/><text x="340" y="200" font-size="14" fill="#3a2a4a" text-anchor="middle">四大类词汇围绕“多元文化”主题，建议分组记忆</text><rect x="150" y="225" width="380" height="56" rx="8" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="340" y="250" font-size="15" fill="#9c56d4" text-anchor="middle">Diverse Cultures 多元文化</text><text x="340" y="272" font-size="13" fill="#3a2a4a" text-anchor="middle">词汇围绕主题分类，便于写作时归类调用</text></svg>`, caption: `图1　核心词汇分类图：把十三词按“多样性、民族、传统、互动”四组归类记忆。` },
        { type: `heading`, text: `四、本课小结` },
        { type: `list`, items: [
          `核心词汇：diverse、diversity、immigrant、ethnic、minority、custom、unique、identity、influence、blend、heritage、tolerance、cuisine`,
          `常用短语：be made up of、contribute to、be known for、a melting pot、bring together、adapt to、as well as`,
          `contribute to 中的 to 是介词，后接名词或 v-ing`,
          `as well as 连接主语时谓语与前面主语一致（就远原则）`,
          `diverse 为形容词，diversity 为名词，注意词性转换`,
          `immigrant 指人，ethnic 为形容词修饰名词`
        ] },
        { type: `svg`, svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">常用短语搭配图</text><circle cx="120" cy="150" r="46" fill="#9c56d4"/><text x="120" y="146" font-size="14" fill="#ffffff" text-anchor="middle">be made</text><text x="120" y="164" font-size="14" fill="#ffffff" text-anchor="middle">up of</text><circle cx="260" cy="150" r="46" fill="#b87fd8"/><text x="260" y="146" font-size="14" fill="#ffffff" text-anchor="middle">contribute</text><text x="260" y="164" font-size="14" fill="#ffffff" text-anchor="middle">to</text><circle cx="400" cy="150" r="46" fill="#7a3fb0"/><text x="400" y="146" font-size="14" fill="#ffffff" text-anchor="middle">be known</text><text x="400" y="164" font-size="14" fill="#ffffff" text-anchor="middle">for</text><circle cx="540" cy="150" r="46" fill="#9c56d4"/><text x="540" y="146" font-size="14" fill="#ffffff" text-anchor="middle">adapt</text><text x="540" y="164" font-size="14" fill="#ffffff" text-anchor="middle">to</text><line x1="166" y1="150" x2="214" y2="150" stroke="#3a2a4a" stroke-width="2"/><line x1="306" y1="150" x2="354" y2="150" stroke="#3a2a4a" stroke-width="2"/><line x1="446" y1="150" x2="494" y2="150" stroke="#3a2a4a" stroke-width="2"/><rect x="120" y="220" width="150" height="44" rx="8" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="195" y="247" font-size="14" fill="#3a2a4a" text-anchor="middle">a melting pot</text><rect x="300" y="220" width="150" height="44" rx="8" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="375" y="247" font-size="14" fill="#3a2a4a" text-anchor="middle">bring together</text><rect x="480" y="220" width="150" height="44" rx="8" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="555" y="247" font-size="14" fill="#3a2a4a" text-anchor="middle">as well as</text></svg>`, caption: `图2　常用短语搭配图：七个高频短语按“组成、贡献、闻名、适应”等语义归组。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">词汇记忆关联图</text><circle cx="340" cy="150" r="60" fill="#7a3fb0"/><text x="340" y="146" font-size="16" fill="#ffffff" text-anchor="middle">Diverse</text><text x="340" y="168" font-size="16" fill="#ffffff" text-anchor="middle">Cultures</text><line x1="285" y1="130" x2="150" y2="90" stroke="#9c56d4" stroke-width="2"/><line x1="395" y1="130" x2="530" y2="90" stroke="#9c56d4" stroke-width="2"/><line x1="285" y1="170" x2="150" y2="210" stroke="#b87fd8" stroke-width="2"/><line x1="395" y1="170" x2="530" y2="210" stroke="#b87fd8" stroke-width="2"/><rect x="60" y="70" width="160" height="40" rx="8" fill="#9c56d4"/><text x="140" y="96" font-size="14" fill="#ffffff" text-anchor="middle">diversity identity</text><rect x="460" y="70" width="160" height="40" rx="8" fill="#9c56d4"/><text x="540" y="96" font-size="14" fill="#ffffff" text-anchor="middle">ethnic minority</text><rect x="60" y="195" width="160" height="40" rx="8" fill="#b87fd8"/><text x="140" y="221" font-size="14" fill="#ffffff" text-anchor="middle">custom cuisine</text><rect x="460" y="195" width="160" height="40" rx="8" fill="#b87fd8"/><text x="540" y="221" font-size="14" fill="#ffffff" text-anchor="middle">heritage blend</text><text x="340" y="280" font-size="14" fill="#3a2a4a" text-anchor="middle">以主题词为中心向外发散，联想记忆更高效</text></svg>`, caption: `图3　词汇记忆关联图：以 Diverse Cultures 为中心，向外联想相关词汇群。` }
      ],
      exercises: [
        { type: `choice`, question: `下列单词中表示“移民”的是？`, options: [`diverse`, `immigrant`, `custom`, `cuisine`], answer: `immigrant`, explanation: `immigrant 是名词，意思是“移民”，指从外地迁入的人。diverse 是形容词“不同的、多种多样的”；custom 是名词“风俗、习俗”；cuisine 是名词“烹饪、菜肴”。三者词义均与“移民”无关，因此选 immigrant。` },
        { type: `choice`, question: `短语 be made up of 的汉语意思是？`, options: [`由……组成`, `以……而闻名`, `适应`, `也；和`], answer: `由……组成`, explanation: `be made up of 是固定短语，意为“由……组成”，主语是整体、of 后接组成部分。be known for 意为“以……而闻名”；adapt to 意为“适应”；as well as 意为“也、和”。只有“由……组成”与 be made up of 对应，故选该项。` },
        { type: `choice`, question: `下列短语中表示“大熔炉”（多民族融合之地）的是？`, options: [`a melting pot`, `bring together`, `adapt to`, `as well as`], answer: `a melting pot`, explanation: `a melting pot 字面是“大熔炉”，常比喻多种民族、文化融合的地方。bring together 意为“使团结、使联合”；adapt to 意为“适应”；as well as 意为“也、和”。只有 a melting pot 表示“大熔炉”，故选该项。` },
        { type: `fill`, question: `This country is a "melting pot" because it is ___ ___ ___ people from all over the world.（用本单元短语填空，表示“由……组成”）`, answer: `made up of`, explanation: `句意为“这个国家是个大熔炉，因为它由来自世界各地的人组成”。表示“由……组成”的单元短语是 be made up of，句中有 is，因此空格填 made up of（三个词）。consist of 虽意思相近但不在本单元短语范围内，故填 made up of。` },
        { type: `fill`, question: `Many ___ (immigrant) live in this city and keep their own customs.（用 immigrant 的适当形式填空）`, answer: `immigrants|immigrant`, explanation: `空前有 Many（许多），修饰可数名词复数，因此 immigrant 应变为复数 immigrants，表示“许多移民”。在口语或特定语境中 immigrant 也可直接作集合名词，故 immigrant 也可接受，但标准答案为 immigrants。注意与 ethnic（形容词）区分词性。` }
      ]
    },

    /* ---------------- 第2课时 重点句型与核心语法 ---------------- */
    {
      id: `bx3-u3-l2`,
      name: `重点句型与核心语法`,
      chapter: `Unit 3 Diverse Cultures`,
      difficulty: `基础`,
      content: [
        { type: `heading`, text: `一、Unit 3 重点句型` },
        { type: `paragraph`, text: `本单元课文包含几个非常实用且常考的重点句型。掌握它们的结构和用法，既能帮助理解长难句，也能在写作中提升表达层次，尤其适合用于“多元文化”话题的书面表达。` },
        { type: `keypoint`, label: `重点·句型1`, text: `句型 <strong>not only... but also...</strong> 表示“不但……而且……”，用来连接两个<strong>并列</strong>的成分（词、短语或句子）。两个 part 结构要对称，not only 和 but also 后接的成分词性应一致。` },
        { type: `example`, label: `例句1·not only... but also...`, text: `The city is <strong>not only</strong> a business center <strong>but also</strong> a cultural hub.<br><br>句中 not only 后接 a business center（名词短语），but also 后接 a cultural hub（名词短语），结构对称，意为“这座城市不仅是个商业中心，还是个文化枢纽”。` },
        { type: `keypoint`, label: `重点·就近原则`, text: `当 <strong>not only... but also...</strong> 连接两个<strong>主语</strong>时，谓语动词要遵循<strong>就近原则</strong>，即与<strong>靠近谓语的那个主语</strong>保持一致。例如：Not only the teacher but also the students are happy（谓语 are 与 students 一致）。` },
        { type: `example`, label: `例句2·表达组成部分`, text: `America is <strong>made up of</strong> people from all over the world.<br><br>此句用 be made up of 表达“由……组成”，主语 America 是整体，of 后 people from all over the world 是组成部分，说明美国由世界各地的人构成，呼应多元文化主题。` },
        { type: `warn`, label: `易错`, text: `使用 not only... but also... 连接主语时，容易误把谓语写成复数。务必记住<strong>就近原则</strong>：谓语由 but also 后的主语决定。比较 Not only he but also I am...（谓语与 I 一致）与 Not only I but also he is...（谓语与 he 一致）。` },
        { type: `heading`, text: `二、动词-ing 形式作表语` },
        { type: `paragraph`, text: `动词的 -ing 形式（叫动名词或现在分词）可以放在系动词（be、look、seem 等）之后作<strong>表语</strong>，用来说明主语的<strong>特征或状态</strong>，常带有“令人……”的意味。` },
        { type: `example`, label: `例句·-ing 作表语`, text: `The story is <strong>moving</strong>.<br><br>系动词 is 后的 moving 是动词-ing 形式作表语，说明主语 the story 的特征，意为“这个故事令人感动”。此处 moving 描述事物本身具有“令人感动”的性质。` },
        { type: `keypoint`, label: `重点·-ing 作表语`, text: `动词-ing 作表语时，主语多为<strong>事物</strong>，表示“某物令人……”。常见此类词有 moving（令人感动的）、interesting（令人感兴趣的）、exciting（令人兴奋的）、surprising（令人惊讶的）等，强调事物给人的客观感受。` },
        { type: `list`, items: [
          `moving：令人感动的（The story is moving.）`,
          `interesting：令人感兴趣的（The book is interesting.）`,
          `exciting：令人兴奋的（The news is exciting.）`,
          `surprising：令人惊讶的（The result is surprising.）`,
          `boring：令人厌烦的（The lesson is boring.）`
        ] },
        { type: `paragraph`, text: `要特别注意 -ing 与 -ed 作表语的区别：以 -ed 结尾的形容词（如 moved、interested）通常说明“人感到……”，主语多是人；以 -ing 结尾的说明“事物令人……”，主语多是物。` },
        { type: `warn`, label: `易错`, text: `不要把 <strong>The story is moving</strong>（故事令人感动，主语是物，用 -ing）与 <strong>I am moved</strong>（我被感动了，主语是人，用 -ed）混淆。判断关键看主语：物作主语多用 -ing，人作主语多用 -ed。这是考试高频易错点。` },
        { type: `heading`, text: `三、动词-ing 形式作定语` },
        { type: `paragraph`, text: `动词-ing 形式还可以作<strong>定语</strong>，修饰名词。规则是：<strong>单个 -ing 分词前置</strong>（放在名词前面），<strong>-ing 短语后置</strong>（放在名词后面）。作定语的 -ing 表示被修饰名词“正在进行的主动动作”。` },
        { type: `example`, label: `例句·单个 -ing 前置作定语`, text: `a <strong>sleeping</strong> baby<br><br>sleeping 是单个 -ing 分词，放在名词 baby 前面作定语，意为“一个正在睡觉的婴儿”。sleeping 表示 baby 主动发出的动作（婴儿在睡觉）。` },
        { type: `example`, label: `例句·-ing 短语后置作定语`, text: `the man <strong>standing</strong> there<br><br>standing there 是 -ing 短语，放在名词 man 后面作定语（后置），意为“站在那里的那个男人”。standing 表示 man 主动发出的动作（男人在站立）。` },
        { type: `keypoint`, label: `重点·前置与后置`, text: `动词-ing 作定语的位置规律：<strong>单个分词前置</strong>（如 a sleeping baby、a running boy）；<strong>分词短语必须后置</strong>（如 the man standing there、the girl singing in the room）。后置是因为短语较长，放前面会显得头重脚轻。` },
        { type: `paragraph`, text: `下面用表格对比 -ing 与 -ed 作表语和定语的核心区别，帮助大家在写作与阅读中准确选用。` },
        { type: `table`, headers: [`比较项`, `-ing 形式`, `-ed 形式`], rows: [
          [`含义倾向`, `主动、进行、事物令人……`, `被动、完成、人感到……`],
          [`作表语主语`, `多为事物（The story is moving）`, `多为人（I am moved）`],
          [`作定语位置`, `单个前置 / 短语后置`, `单个前置 / 短语后置`],
          [`记忆关键`, `令人……`, `感到……`]
        ] },
        { type: `tip`, label: `口诀`, text: `记忆口诀：<strong>-ing 表主动、进行、事物令人……；-ed 表被动、完成、人感到……</strong>。看见物作主语、表示“令人……”用 -ing；看见人作主语、表示“感到……”用 -ed。多读例句培养语感最有效。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">not only... but also... 结构图</text><rect x="40" y="70" width="260" height="60" rx="8" fill="#9c56d4"/><text x="170" y="98" font-size="16" fill="#ffffff" text-anchor="middle">not only + 部分A</text><rect x="380" y="70" width="260" height="60" rx="8" fill="#b87fd8"/><text x="510" y="98" font-size="16" fill="#ffffff" text-anchor="middle">but also + 部分B</text><line x1="300" y1="100" x2="380" y2="100" stroke="#3a2a4a" stroke-width="2"/><text x="340" y="135" font-size="13" fill="#3a2a4a" text-anchor="middle">两部分结构要对称</text><rect x="120" y="160" width="440" height="50" rx="8" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="340" y="190" font-size="15" fill="#3a2a4a" text-anchor="middle">The city is not only a business center but also a cultural hub.</text><rect x="120" y="230" width="440" height="56" rx="8" fill="#f3edfa" stroke="#c0392b" stroke-width="2"/><text x="340" y="255" font-size="14" fill="#c0392b" text-anchor="middle">就近原则：连接主语时谓语与 but also 后主语一致</text><text x="340" y="277" font-size="13" fill="#3a2a4a" text-anchor="middle">Not only the teacher but also the students are happy.</text></svg>`, caption: `图1　not only... but also... 结构图：前后对称，连接主语时谓语就近一致。` },
        { type: `list`, items: [
          `not only... but also... 连接对称成分，表“不但……而且……”`,
          `连接主语时谓语遵循就近原则，与 but also 后主语一致`,
          `be made up of 表达“由……组成”，用于说明构成`,
          `动词-ing 作表语放系动词后，说明主语特征或状态`,
          `动词-ing 作定语：单个前置、短语后置`,
          `-ing 令人……（物）；-ed 感到……（人）`
        ] },
        { type: `warn`, label: `易错提醒`, text: `把 -ing 与 -ed 用反是常见失分点：写作想说“令人感动的故事”要用 <strong>moving story</strong>，不是 moved story；想说“感到感动的观众”要用 <strong>moved audience</strong>，不是 moving audience。再看定语位置：短语必须后置，不能说 a there standing man，而要说 the man standing there。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">动词-ing 作表语与定语示意</text><rect x="60" y="70" width="270" height="80" rx="8" fill="#9c56d4"/><text x="195" y="100" font-size="15" fill="#ffffff" text-anchor="middle">表语：The story is moving.</text><text x="195" y="124" font-size="13" fill="#ffffff" text-anchor="middle">-ing 在系动词后，表主语特征</text><rect x="360" y="70" width="270" height="80" rx="8" fill="#b87fd8"/><text x="495" y="100" font-size="15" fill="#ffffff" text-anchor="middle">定语：a sleeping baby</text><text x="495" y="124" font-size="13" fill="#ffffff" text-anchor="middle">-ing 前置，修饰名词表主动</text><line x1="195" y1="150" x2="195" y2="180" stroke="#3a2a4a" stroke-width="2"/><line x1="495" y1="150" x2="495" y2="180" stroke="#3a2a4a" stroke-width="2"/><text x="195" y="205" font-size="13" fill="#5a7a2a" text-anchor="middle">系动词（is）之后</text><text x="495" y="205" font-size="13" fill="#5a7a2a" text-anchor="middle">名词（baby）之前</text><rect x="150" y="225" width="380" height="50" rx="8" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="340" y="255" font-size="14" fill="#3a2a4a" text-anchor="middle">-ing 作表语讲“状态”，作定语讲“动作”</text></svg>`, caption: `图2　动词-ing 作表语与定语示意：表语位于系动词后，定语位于名词前（短语后置）。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">-ing 与 -ed 对比图</text><rect x="60" y="70" width="270" height="120" rx="8" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="195" y="100" font-size="16" fill="#9c56d4" text-anchor="middle" font-weight="bold">-ing 形式</text><text x="195" y="128" font-size="14" fill="#3a2a4a" text-anchor="middle">主动、进行</text><text x="195" y="152" font-size="14" fill="#5a7a2a" text-anchor="middle">事物令人……</text><text x="195" y="176" font-size="13" fill="#3a2a4a" text-anchor="middle">The story is moving.</text><rect x="350" y="70" width="270" height="120" rx="8" fill="#ffffff" stroke="#b87fd8" stroke-width="2"/><text x="485" y="100" font-size="16" fill="#7a3fb0" text-anchor="middle" font-weight="bold">-ed 形式</text><text x="485" y="128" font-size="14" fill="#3a2a4a" text-anchor="middle">被动、完成</text><text x="485" y="152" font-size="14" fill="#5a7a2a" text-anchor="middle">人感到……</text><text x="485" y="176" font-size="13" fill="#3a2a4a" text-anchor="middle">I am moved.</text><line x1="330" y1="130" x2="350" y2="130" stroke="#3a2a4a" stroke-width="2"/><text x="340" y="245" font-size="14" fill="#3a2a4a" text-anchor="middle">判断口诀：物+令人…用 -ing；人+感到…用 -ed</text><text x="340" y="285" font-size="13" fill="#c0392b" text-anchor="middle">易错：moving story（令人感动）≠ moved story</text></svg>`, caption: `图3　-ing 与 -ed 对比图：前者表主动/令人，后者表被动/感到，主语人称是关键。` }
      ],
      exercises: [
        { type: `choice`, question: `当 not only... but also... 连接两个主语时，谓语动词应遵循什么原则？`, options: [`就近原则`, `就远原则`, `必须用复数`, `必须用单数`], answer: `就近原则`, explanation: `not only... but also... 连接两个主语时，谓语动词遵循就近原则，即与靠近谓语的 but also 后的主语保持一致。例如 Not only the teacher but also the students are happy，谓语 are 与 students 一致。就远原则适用于 with、as well as 等，故不选该项。` },
        { type: `choice`, question: `动词-ing 形式作表语时，通常用来表示什么？`, options: [`主语的特征或状态`, `过去的动作`, `被动含义`, `完成含义`], answer: `主语的特征或状态`, explanation: `动词-ing 作表语放在系动词（如 is）之后，用来说明主语的特征或状态，常带有“令人……”的意味，如 The story is moving（这个故事令人感动）。它不表示过去动作、被动或完成，因此选“主语的特征或状态”。` },
        { type: `choice`, question: `在 a sleeping baby 中，sleeping 的作用是？`, options: [`-ing 作定语`, `-ed 作定语`, `谓语`, `状语`], answer: `-ing 作定语`, explanation: `sleeping 是动词-ing 形式，放在名词 baby 前面作定语，表示“正在睡觉的”，修饰 baby 并说明其主动进行的动作。它不是谓语（句中有系动词或主动词才构成谓语），也不是状语，故选“-ing 作定语”。` },
        { type: `fill`, question: `The movie is ___ (move). 用动词的 -ing 或 -ed 形式填空，表示“这部电影令人感动的”。`, answer: `moving`, explanation: `主语 the movie 是事物，描述“令人感动的”应用动词-ing 形式 moving，构成 The movie is moving。若用 moved 则表示“（人）感到感动”，主语应是人，不符合本句事物主语，因此填 moving。` },
        { type: `fill`, question: `The man ___ (stand) there is my teacher. 用动词-ing 形式填空作定语（短语后置）。`, answer: `standing`, explanation: `此处需用动词-ing 形式作后置定语修饰 the man，表示“站在那里的”，即 the man standing there。stand 的 -ing 形式是 standing，短语必须放在名词后面（后置），不能用 stood（过去式不作定语），因此填 standing。` }
      ]
    }

  );
})();
