/* ============================================================
 * 高一英语 · 必修 第二册 · Unit 1 Cultural Heritage 文化遗产
 * 第1课时：核心词汇与限制性定语从句关系代词
 * 第2课时：重点句型与关系副词
 * 数据注入：english.bx2.points
 * 学科配色（紫色系）：主色 #9c56d4 / #7a3fb0，背景 #f3edfa
 * ============================================================ */
(function () {
  var v = gzGetVolume('english', 'bx2');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 核心词汇与限制性定语从句关系代词 ---------------- */
    {
      id: `bx2-u1-l1`,
      name: `核心词汇与限制性定语从句关系代词`,
      chapter: `Unit 1 Cultural Heritage · 核心词汇与限制性定语从句关系代词`,
      difficulty: `基础`,
      content: [
        { type: `heading`, text: `一、Unit 1 核心词汇概览` },
        { type: `paragraph`, text: `Unit 1 Cultural Heritage 围绕文化遗产的保护与传承展开，课文与词汇中反复出现一批与“保护、促进、平衡、遗产”相关的核心词。掌握这些词汇的音、形、义及搭配，是读懂课文、写好相关话题作文的前提。` },
        { type: `keypoint`, label: `重点·学法`, text: `学习 Unit 1 核心词汇建议三步走：① <strong>记词性与搭配</strong>，如 contribute 后接 to；② <strong>在例句中理解</strong>，把单词放入课文语境；③ <strong>分类归纳</strong>，把保护、传承类词汇归为一组，便于记忆与写作迁移。` },
        { type: `paragraph`, text: `下表汇总本单元最常考的十个核心词汇，建议结合课文句子记忆，并注意名词与动词词性之间的转换。` },
        { type: `table`, headers: [`单词`, `词性`, `释义`], rows: [
          [`preserve`, `vt.`, `保存；保护`],
          [`promote`, `vt.`, `促进；提升；推动`],
          [`balance`, `n./v.`, `平衡；使平衡`],
          [`heritage`, `n.`, `遗产（统称）`],
          [`relic`, `n.`, `遗迹；遗物；文物`],
          [`monument`, `n.`, `纪念碑；历史遗迹`],
          [`proposal`, `n.`, `提议；建议`],
          [`establish`, `vt.`, `建立；设立；确立`],
          [`limit`, `n./vt.`, `限度；限制；限定`],
          [`contribute`, `vt./vi.`, `捐献；贡献；投稿`]
        ] },
        { type: `heading`, text: `二、核心词汇与常用短语` },
        { type: `paragraph`, text: `除单词外，本单元还要求学生掌握若干固定短语与搭配。这些短语在完形填空与语法填空里出现频率很高，尤其 contribute to 中的 to 是介词，是考试中的高频考点。` },
        { type: `list`, items: [
          `preserve ... from ...：保护某物免受（损害、破坏）`,
          `promote development：促进（文化、经济）发展`,
          `keep balance：保持平衡，常用于自然与开发之间`,
          `contribute to：为……做贡献，to 为介词后接名词或 v-ing`,
          `make a proposal：提出建议，proposal 为名词`,
          `in danger (of)：处于（……的）危险之中`
        ] },
        { type: `table`, headers: [`短语`, `汉语释义`], rows: [
          [`preserve ... from ...`, `保护……免受……`],
          [`promote development`, `促进发展`],
          [`keep balance`, `保持平衡`],
          [`contribute to`, `为……做贡献；有助于`],
          [`make a proposal`, `提出建议`],
          [`in danger (of)`, `处于（……的）危险中`]
        ] },
        { type: `keypoint`, label: `重点·contribute to`, text: `动词 <strong>contribute</strong> 意为“捐献；贡献；有助于”，其固定搭配 <strong>contribute to</strong> 中 to 是<strong>介词</strong>，后接名词、代词或动名词（v-ing），<strong>不可接动词原形</strong>。例如：Good habits contribute to our health（好习惯有助于健康）。` },
        { type: `warn`, label: `易错`, text: `注意 <strong>limit</strong> 既可作名词也可作动词。作名词时常用单数，如 There is a limit to...；作动词时及物，如 limit the number of visitors（限制游客数量）。另外 <strong>in danger (of)</strong> 中 of 后接危险的具体内容，如 in danger of disappearing（面临消失的危险）。` },
        { type: `heading`, text: `三、限制性定语从句与关系代词` },
        { type: `paragraph`, text: `定语从句（attributive clause）用来修饰名词或代词，被修饰的词叫先行词（antecedent）。紧跟先行词之后、由关系词引导的从句就是定语从句。本课时先学习由关系代词引导的限制性定语从句。` },
        { type: `keypoint`, label: `重点·关系代词`, text: `引导限制性定语从句的<strong>关系代词</strong>有 who、whom、whose、which、that。指人可用 who/whom/that，其中 who 作主语、whom 作宾语；指物可用 which/that；<strong>whose</strong> 表示“……的”，在从句中作定语，适用于人或物。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">关系代词选用树</text><rect x="240" y="48" width="200" height="40" rx="8" fill="#b87fd8"/><text x="340" y="74" font-size="16" fill="#ffffff" text-anchor="middle">先行词指人还是物？</text><line x1="290" y1="88" x2="160" y2="130" stroke="#7a3fb0" stroke-width="2"/><line x1="400" y1="88" x2="520" y2="130" stroke="#7a3fb0" stroke-width="2"/><rect x="80" y="130" width="160" height="40" rx="8" fill="#9c56d4"/><text x="160" y="156" font-size="15" fill="#ffffff" text-anchor="middle">指人：who/whom/that</text><rect x="440" y="130" width="160" height="40" rx="8" fill="#9c56d4"/><text x="520" y="156" font-size="15" fill="#ffffff" text-anchor="middle">指物：which/that</text><line x1="160" y1="170" x2="160" y2="210" stroke="#7a3fb0" stroke-width="2"/><line x1="520" y1="170" x2="520" y2="210" stroke="#7a3fb0" stroke-width="2"/><rect x="80" y="210" width="160" height="40" rx="8" fill="#b87fd8"/><text x="160" y="236" font-size="15" fill="#ffffff" text-anchor="middle">whose 作定语</text><rect x="440" y="210" width="160" height="40" rx="8" fill="#b87fd8"/><text x="520" y="236" font-size="15" fill="#ffffff" text-anchor="middle">whose 作定语</text><text x="340" y="288" font-size="14" fill="#3a2a4a" text-anchor="middle">指人作宾语可用 whom；作主语用 who/that；作定语一律用 whose</text></svg>`, caption: `图1　关系代词选用树：先看先行词指人还是物，再看在从句中所作成分。` },
        { type: `paragraph`, text: `当关系代词在从句中作主语时，关系代词不可省略，且谓语动词的人称和数要与先行词保持一致。` },
        { type: `example`, label: `例句1·作主语`, text: `The temple <strong>which</strong> was built 200 years ago is famous.<br><br>此句中先行词 the temple 指物，关系代词 <strong>which</strong> 在定语从句中作<strong>主语</strong>，不可省略。从句 which was built 200 years ago 修饰 the temple，说明是哪一座庙。` },
        { type: `paragraph`, text: `当关系代词在从句中作宾语时，指人或指物的关系代词都可以省略，这是与作主语时的重要区别。` },
        { type: `example`, label: `例句2·作宾语`, text: `The relic <strong>(which/that)</strong> we saw in the museum is 200 years old.<br><br>先行词 the relic 指物，关系代词在从句中作<strong>宾语</strong>，可用 which 或 that，且作宾语时<strong>可以省略</strong>，即也可写作 The relic we saw in the museum is 200 years old。` },
        { type: `paragraph`, text: `whose 是所有格关系代词，在从句中作定语，修饰其后的名词，适用于人或物，表示“某人的 / 某物的”。` },
        { type: `example`, label: `例句3·作定语`, text: `The girl <strong>whose</strong> father is a professor won the prize.<br><br>先行词 the girl 指人，关系代词 whose 在从句中作 father 的<strong>定语</strong>，表示“这个女孩的（父亲）”，修饰名词 father。whose 在从句中不可省略。` },
        { type: `warn`, label: `易错`, text: `只用 <strong>that</strong> 不用 which 的几种情况：① 先行词是不定代词 everything / anything / nothing 等；② 先行词被 the only / the very / 序数词或最高级修饰；③ 先行词既有人又有物。其余指物时 which 与 that 常可互换，但<strong>非限制性定语从句中只用 which</strong>，不可用 that。` },
        { type: `tip`, label: `记忆`, text: `记忆口诀：<strong>先行词定人还是物，从句成分定词性</strong>。指人作主语用 who/that，作宾语用 whom/that（可省），作定语用 whose；指物作主语或宾语用 which/that，作定语用 whose。多读例句，培养语感最有效。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">文化遗产保护：保护—传承—平衡</text><circle cx="170" cy="140" r="55" fill="#9c56d4"/><text x="170" y="136" font-size="17" fill="#ffffff" text-anchor="middle">保护</text><text x="170" y="158" font-size="13" fill="#ffffff" text-anchor="middle">preserve</text><circle cx="340" cy="140" r="55" fill="#b87fd8"/><text x="340" y="136" font-size="17" fill="#ffffff" text-anchor="middle">传承</text><text x="340" y="158" font-size="13" fill="#ffffff" text-anchor="middle">promote</text><circle cx="510" cy="140" r="55" fill="#7a3fb0"/><text x="510" y="136" font-size="17" fill="#ffffff" text-anchor="middle">平衡</text><text x="510" y="158" font-size="13" fill="#ffffff" text-anchor="middle">balance</text><line x1="225" y1="140" x2="285" y2="140" stroke="#3a2a4a" stroke-width="3"/><line x1="395" y1="140" x2="455" y2="140" stroke="#3a2a4a" stroke-width="3"/><polygon points="285,140 273,134 273,146" fill="#3a2a4a"/><polygon points="455,140 443,134 443,146" fill="#3a2a4a"/><text x="340" y="232" font-size="14" fill="#3a2a4a" text-anchor="middle">保护遗产、传承文化、保持发展平衡，三者缺一不可</text></svg>`, caption: `图2　文化遗产保护概念图：preserve 保护、promote 传承、balance 平衡三者协同。` },
        { type: `heading`, text: `四、本课小结` },
        { type: `list`, items: [
          `核心词汇：preserve、promote、balance、heritage、relic、monument、proposal、establish、limit、contribute`,
          `常用短语：preserve...from...、contribute to、make a proposal、in danger (of)`,
          `定语从句：修饰名词或代词的从句，紧跟先行词之后`,
          `关系代词：who/whom/whose/which/that，作主语、宾语、定语`,
          `选用关系代词看先行词指人/物及在从句中的成分`,
          `关系代词作宾语时可省略，作主语、定语时不可省略`
        ] },
        { type: `svg`, svg: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3edfa"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">关系代词在从句中的成分</text><rect x="40" y="60" width="300" height="50" rx="6" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="190" y="90" font-size="15" fill="#3a2a4a" text-anchor="middle">The temple which was built ... is famous.</text><text x="190" y="135" font-size="14" fill="#9c56d4" text-anchor="middle">↑ which 在从句中作主语</text><rect x="360" y="60" width="280" height="50" rx="6" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="500" y="90" font-size="15" fill="#3a2a4a" text-anchor="middle">The girl whose father is a professor.</text><text x="500" y="135" font-size="14" fill="#9c56d4" text-anchor="middle">↑ whose 在从句中作定语</text><line x1="190" y1="110" x2="190" y2="120" stroke="#9c56d4" stroke-width="2"/><line x1="500" y1="110" x2="500" y2="120" stroke="#9c56d4" stroke-width="2"/><text x="340" y="210" font-size="14" fill="#3a2a4a" text-anchor="middle">关系代词可作主语、宾语或定语；关系副词只作状语</text></svg>`, caption: `图3　关系代词成分示例：which 作主语、whose 作定语，替代并充当从句成分。` }
      ],
      exercises: [
        { type: `choice`, question: `在定语从句 The girl ___ father is a professor won the prize 中，空格处应填的关系代词是？`, options: [`which`, `who`, `whom`, `whose`], answer: `whose`, explanation: `先行词 the girl 指人，关系词在从句中作 father 的定语，表示“这个女孩的父亲”，修饰名词 father，必须用所有格关系代词 whose。which 指物，who 与 whom 在从句中作主语或宾语，不能作定语，因此选 whose。` },
        { type: `choice`, question: `The man ___ is standing there is our guide. 空格处应填？`, options: [`who`, `whom`, `which`, `whose`], answer: `who`, explanation: `先行词 the man 指人，关系代词在定语从句中作主语（is standing 的主语），指人作主语时用 who 或 that，不能用 whom（whom 只作宾语）。which 指物，whose 作定语，均不符合，故选 who。` },
        { type: `choice`, question: `下列短语中表示“为……做贡献”的是？`, options: [`preserve...from...`, `contribute to`, `keep balance`, `make a proposal`], answer: `contribute to`, explanation: `contribute to 是固定搭配，意为“为……做贡献；有助于”，其中 to 是介词，后接名词、代词或动名词。preserve...from... 意为保护免受，keep balance 意为保持平衡，make a proposal 意为提出建议，三者意思不同，故选 contribute to。` },
        { type: `fill`, question: `The temple ___ was built 200 years ago is famous.（用关系代词填空，指物作主语）`, answer: `which|that`, explanation: `先行词 the temple 指物，关系代词在从句中作主语（was built 的主语），指物作主语可用 which 或 that，二者均可，且作主语时不可省略。因此空格填 which 或 that 都正确。` },
        { type: `fill`, question: `We should ___ (保护) the cultural relics from being destroyed.（用 Unit 1 核心词汇填空）`, answer: `preserve`, explanation: `句意为“我们应当保护文物免遭破坏”，表示“保护”且能与 from 搭配的 Unit 1 词汇是 preserve，preserve...from... 意为保护某物免受损害。promote 意为促进，establish 意为建立，均不符合句意，故填 preserve。` }
      ]
    },

    /* ---------------- 第2课时 重点句型与关系副词 ---------------- */
    {
      id: `bx2-u1-l2`,
      name: `重点句型与关系副词`,
      chapter: `Unit 1 Cultural Heritage · 重点句型与关系副词`,
      difficulty: `基础`,
      content: [
        { type: `heading`, text: `一、Unit 1 重点句型` },
        { type: `paragraph`, text: `本单元课文包含几个非常实用且常考的重点句型。掌握它们的结构和用法，既能帮助理解长难句，也能在写作中提升表达层次。` },
        { type: `keypoint`, label: `重点·句型1`, text: `句型 <strong>It is + adj. + for sb. to do sth.</strong> 表示“对某人来说做某事是……的”。it 为<strong>形式主语</strong>，真正主语是后面的不定式短语；若形容词描述人的品质（如 kind、clever），介词常用 of 而非 for。` },
        { type: `example`, label: `例句1`, text: `<strong>It is important for us to protect</strong> cultural heritage.<br><br>此句使用 It is + adj. + for sb. to do 结构，it 是形式主语，真正主语是 to protect cultural heritage，意为“对我们来说保护文化遗产很重要”。` },
        { type: `keypoint`, label: `重点·句型2`, text: `句型 <strong>There is no doubt that...</strong> 意为“毫无疑问……”。that 引导<strong>同位语从句</strong>，说明 doubt 的具体内容，that 在从句中不充当成分，也<strong>不可省略</strong>。` },
        { type: `example`, label: `例句2`, text: `<strong>There is no doubt that</strong> cultural heritage needs our protection.<br><br>that 引导的从句 cultural heritage needs our protection 作 doubt 的同位语，解释“毫无疑问”的具体内容，that 不可省略。` },
        { type: `keypoint`, label: `重点·句型3`, text: `短语 <strong>be known/recognized as...</strong> 表示“作为……而著名 / 被认作……”。as 后通常接身份、职业或类别名词。类似表达还有 be known for...（因……而闻名）与 be known to...（为……所熟知），注意介词搭配不同。` },
        { type: `example`, label: `例句3`, text: `The old town <strong>is known as</strong> a heritage site.<br><br>句中 be known as 表示“作为……而著名”，as 后接类别名词 a heritage site（一处遗产地），说明这座古镇的身份。` },
        { type: `list`, items: [
          `It is + adj. + for sb. to do：it 是形式主语，真正主语是不定式`,
          `形容词表人的品质时用 of 不用 for，如 It is kind of you`,
          `There is no doubt that...：that 引导同位语从句，不可省略`,
          `be known as：作为……著名；be known for：因……著名`,
          `that 引导的从句可能是同位语从句，也可能是强调句，需辨别`
        ] },
        { type: `warn`, label: `易错`, text: `There is no doubt <strong>that</strong>... 中的 that 引导的是<strong>同位语从句</strong>，用来解释 doubt 的内容，that 不充当成分也不可省略；不要与定语从句混淆。另外 It is ... that... 可能是强调句，判断方法：去掉 It is 和 that 后句子仍完整，则为强调句而非定语从句。` },
        { type: `heading`, text: `二、关系副词引导的限制性定语从句` },
        { type: `paragraph`, text: `除了关系代词，定语从句还可以由关系副词 when、where、why 引导。它们分别在从句中充当时、地、因的状语，是连接主句与从句的重要纽带。` },
        { type: `keypoint`, label: `重点·关系副词`, text: `关系副词 <strong>when、where、why</strong> 分别引导表示时间、地点、原因的定语从句，在从句中均作<strong>状语</strong>。when 的先行词是时间名词，where 的先行词是地点名词，why 的先行词是 reason。三者都<strong>不可省略</strong>。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">关系副词 when / where / why 示例</text><rect x="60" y="70" width="160" height="60" rx="8" fill="#9c56d4"/><text x="140" y="100" font-size="17" fill="#ffffff" text-anchor="middle">when 时间</text><text x="140" y="122" font-size="12" fill="#ffffff" text-anchor="middle">the day when ...</text><rect x="260" y="70" width="160" height="60" rx="8" fill="#b87fd8"/><text x="340" y="100" font-size="17" fill="#ffffff" text-anchor="middle">where 地点</text><text x="340" y="122" font-size="12" fill="#ffffff" text-anchor="middle">the village where ...</text><rect x="460" y="70" width="160" height="60" rx="8" fill="#7a3fb0"/><text x="540" y="100" font-size="17" fill="#ffffff" text-anchor="middle">why 原因</text><text x="540" y="122" font-size="12" fill="#ffffff" text-anchor="middle">the reason why ...</text><text x="340" y="175" font-size="14" fill="#3a2a4a" text-anchor="middle">三者均在从句中作状语，修饰先行词表示的时间、地点、原因</text><text x="340" y="215" font-size="14" fill="#5a7a2a" text-anchor="middle">判断口诀：先行词是时间/地点/原因名词，且从句缺状语 则 用关系副词</text></svg>`, caption: `图1　关系副词示例：when 表时间、where 表地点、why 表原因，均在从句中作状语。` },
        { type: `example`, label: `例句·when`, text: `I will never forget the day <strong>when</strong> we met.<br><br>先行词 the day 表示时间，关系副词 <strong>when</strong> 在定语从句中作<strong>时间状语</strong>，相当于 on which，说明动作 met 发生的时间。` },
        { type: `paragraph`, text: `where 的先行词是表示地点的名词，在从句中作地点状语，相当于 in / at which。` },
        { type: `example`, label: `例句·where`, text: `This is the village <strong>where</strong> he was born.<br><br>先行词 the village 表示地点，关系副词 <strong>where</strong> 在从句中作<strong>地点状语</strong>，相当于 in which，说明 born 发生的地点。` },
        { type: `paragraph`, text: `why 的先行词通常是 reason，在从句中作原因状语，相当于 for which，说明主句动作发生的原因。` },
        { type: `example`, label: `例句·why`, text: `That is the reason <strong>why</strong> he was late.<br><br>先行词 the reason 表示原因，关系副词 <strong>why</strong> 在从句中作<strong>原因状语</strong>，相当于 for which，说明 late 的原因。` },
        { type: `warn`, label: `易错`, text: `不要把关系副词 <strong>where</strong> 与关系代词 <strong>which</strong> 混用。若从句缺主语或宾语，应用 which/that；若从句结构完整只缺地点状语，才用 where。比较：This is the factory which we visited（作宾语，用 which）与 This is the factory where he works（作状语，用 where）。` },
        { type: `heading`, text: `三、关系代词与关系副词的选用原则` },
        { type: `paragraph`, text: `很多同学选错关系词，根源在于只看先行词的词义，而忽略了它在从句中的成分。正确的思路是：先抽出从句，分析缺失什么成分，再据此选词。` },
        { type: `keypoint`, label: `重点·选用原则`, text: `选用关系词的根本原则是<strong>看先行词在定语从句中所作的句子成分</strong>：若作主语、宾语或定语，选用<strong>关系代词</strong>（who/which/whose 等）；若作状语（时间、地点、原因），选用<strong>关系副词</strong>（when/where/why）。成分决定选词，而非先行词的词义。` },
        { type: `table`, headers: [`比较项`, `关系代词`, `关系副词`], rows: [
          [`常见词`, `that/which/who/whom/whose`, `when/where/why`],
          [`在从句中成分`, `主语、宾语、定语`, `状语`],
          [`可否省略`, `作宾语时可省略`, `不可省略`],
          [`本质`, `替代先行词并充当成分`, `相当于介词+which`]
        ] },
        { type: `list`, items: [
          `第一步：找出先行词（被修饰的名词或代词）`,
          `第二步：把定语从句单独抽出，分析缺少什么成分`,
          `第三步：缺主语/宾语/定语 选关系代词；缺状语 选关系副词`,
          `第四步：指人作主语用 who/that，作宾语用 whom/that，作定语用 whose`,
          `第五步：指物用 which/that（定语用 whose）；时间/地点/原因状语用 when/where/why`
        ] },
        { type: `svg`, svg: `<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">关系词选用判断流程图</text><rect x="230" y="50" width="220" height="42" rx="8" fill="#b87fd8"/><text x="340" y="77" font-size="15" fill="#ffffff" text-anchor="middle">看先行词在从句中所作成分</text><line x1="340" y1="92" x2="340" y2="120" stroke="#7a3fb0" stroke-width="2"/><rect x="60" y="120" width="200" height="42" rx="8" fill="#9c56d4"/><text x="160" y="147" font-size="15" fill="#ffffff" text-anchor="middle">作主语/宾语/定语</text><rect x="420" y="120" width="200" height="42" rx="8" fill="#9c56d4"/><text x="520" y="147" font-size="15" fill="#ffffff" text-anchor="middle">作状语（时间/地点/原因）</text><line x1="160" y1="162" x2="160" y2="190" stroke="#7a3fb0" stroke-width="2"/><line x1="520" y1="162" x2="520" y2="190" stroke="#7a3fb0" stroke-width="2"/><rect x="60" y="190" width="200" height="42" rx="8" fill="#7a3fb0"/><text x="160" y="217" font-size="15" fill="#ffffff" text-anchor="middle">选关系代词 who/which/whose</text><rect x="420" y="190" width="200" height="42" rx="8" fill="#7a3fb0"/><text x="520" y="217" font-size="15" fill="#ffffff" text-anchor="middle">选关系副词 when/where/why</text><text x="340" y="288" font-size="14" fill="#3a2a4a" text-anchor="middle">核心原则：成分决定选词，不取决于先行词本身的词义</text></svg>`, caption: `图2　关系词选用判断流程图：先看从句成分，再决定用关系代词还是关系副词。` },
        { type: `tip`, label: `口诀`, text: `判断口诀：<strong>缺主、宾、定语 则 关系代词；缺时间/地点/原因状语 则 关系副词</strong>。若拿不准，可在从句前补“在……时/地/原因”读通，则用 when/where/why；若缺的是动作的主语或宾语，则必须用关系代词。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">关系代词与关系副词对比</text><rect x="60" y="60" width="250" height="120" rx="8" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="185" y="90" font-size="16" fill="#9c56d4" text-anchor="middle" font-weight="bold">关系代词</text><text x="185" y="118" font-size="14" fill="#3a2a4a" text-anchor="middle">that/which/who/whom/whose</text><text x="185" y="146" font-size="14" fill="#5a7a2a" text-anchor="middle">在从句中作主语、宾语、定语</text><text x="185" y="170" font-size="13" fill="#3a2a4a" text-anchor="middle">替代并充当成分，作宾时可省略</text><rect x="370" y="60" width="250" height="120" rx="8" fill="#ffffff" stroke="#b87fd8" stroke-width="2"/><text x="495" y="90" font-size="16" fill="#7a3fb0" text-anchor="middle" font-weight="bold">关系副词</text><text x="495" y="118" font-size="14" fill="#3a2a4a" text-anchor="middle">when/where/why</text><text x="495" y="146" font-size="14" fill="#5a7a2a" text-anchor="middle">在从句中只作状语</text><text x="495" y="170" font-size="13" fill="#3a2a4a" text-anchor="middle">相当于介词+which，不可省略</text><text x="340" y="222" font-size="14" fill="#3a2a4a" text-anchor="middle">试填：缺主宾定语 则 代词；缺状语 则 副词</text></svg>`, caption: `图3　关系代词与关系副词对比：前者充当主/宾/定语，后者只作状语。` },
        { type: `heading`, text: `四、本课小结` },
        { type: `list`, items: [
          `重点句型：It is + adj. + for sb. to do；There is no doubt that...；be known as...`,
          `关系副词：when（时间）、where（地点）、why（原因），在从句中作状语`,
          `关系代词与关系副词的根本区别：前者作主语/宾语/定语，后者只作状语`,
          `选用原则：看先行词在从句中所作成分，而非词义`,
          `关系副词不可省略；关系代词作宾语时可省略`
        ] }
      ],
      exercises: [
        { type: `choice`, question: `关系副词 when、where、why 在定语从句中充当什么成分？`, options: [`主语`, `宾语`, `状语`, `定语`], answer: `状语`, explanation: `when、where、why 都是关系副词，在定语从句中只作状语：when 作时间状语，where 作地点状语，why 作原因状语。它们不充当主语、宾语或定语，这一性质正是关系副词与关系代词的根本区别，故选状语。` },
        { type: `choice`, question: `This is the village ___ he was born. 空格处应填？`, options: [`when`, `where`, `why`, `which`], answer: `where`, explanation: `先行词 the village 是地点名词，从句 he was born 结构完整，只缺表示地点的状语（相当于 in which），故用关系副词 where。when 用于时间，why 用于原因，which 是关系代词须在从句中作主宾语，此处都不合适，故选 where。` },
        { type: `choice`, question: `下列句型中，表示“毫无疑问……”的是？`, options: [`It is + adj. + for sb. to do`, `There is no doubt that...`, `be known as...`, `keep balance`], answer: `There is no doubt that...`, explanation: `There is no doubt that... 意为“毫无疑问……”，that 引导同位语从句说明 doubt 的内容。It is + adj. + for sb. to do 是“对某人来说做某事是……的”；be known as 是“作为……著名”；keep balance 意为保持平衡，均不代表“毫无疑问”，故选 There is no doubt that...。` },
        { type: `fill`, question: `I will never forget the day ___ we first met.（用关系副词填空）`, answer: `when`, explanation: `先行词 the day 是时间名词，从句 we first met 结构完整，只缺表示时间的状语（相当于 on which），故用关系副词 when。若误用 which 则从句缺状语不成立，因此空格应填 when。` },
        { type: `fill`, question: `The reason ___ he was late is unknown to us.（用关系副词填空）`, answer: `why`, explanation: `先行词 the reason 是原因名词，从句 he was late 结构完整，只缺表示原因的状语（相当于 for which），故用关系副词 why。关系副词 why 不可省略，也不能用 which 替代，因此空格填 why。` }
      ]
    }

  );
})();
