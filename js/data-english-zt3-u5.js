/* ============================================================
 * 高三英语复习专题 · 语法填空（english.zt3）
 * 第5单元：无提示词类（下）· 并列连词与定语从句引导词 / 名词性从句与状语从句引导词
 * 数据注入：english.zt3.points
 * 学科配色（紫色系）：主色 #9c56d4 / 标题 #7a3fb0 / 背景 #f3edfa / 次 #b87fd8
 * 说明 #3a2a4a / 红 #c0392b / 绿 #5a7a2a
 * ============================================================ */
(function () {
  var v = gzGetVolume('english', 'zt3');
  if (!v) return;
  v.points.push(
    /* ---------------- 第1课时 并列连词与定语从句引导词 ---------------- */
    {
      id: `zt3-u5-l1`,
      name: `并列连词与定语从句引导词`,
      chapter: `语法填空 · 第5单元 无提示词类（下）`,
      difficulty: `基础`,
      content: [
        { type: `heading`, text: `一、并列连词：把平行的东西连起来` },
        { type: `paragraph`, text: `语法填空里有一类空“不给任何提示词”，要你凭语感自己填一个词。并列连词就是最常见的一种。它专门用来连接两个“地位平等”的结构——可以是两个单词、两个短语，也可以是两个分句（也就是两个小句子）。` },
        { type: `keypoint`, label: `重点·四大并列连词`, text: `最常考的四个并列连词要记牢：<strong>and</strong>（并列 / 顺承，相当于“和、并且”）；<strong>but</strong>（转折，相当于“但是”）；<strong>or</strong>（选择，相当于“或者、否则”）；<strong>so</strong>（因果，相当于“所以”）。判断空前后是不是平行结构，是的话就从这四个里挑。` },
        { type: `example`, label: `例句·and`, text: `<strong>He woke up early and rushed out of the door.</strong><br><br>and 连接的是两个并列的谓语 woke up（醒来）和 rushed out（冲出去），表示动作一个接一个发生，是顺承关系。整句译为：他早早醒来，然后冲出了门。` },
        { type: `list`, items: [
          `and：并列 / 顺承，如 He laughed and sang.（他又笑又唱）`,
          `but：转折，如 It is small but useful.（它小但有用）`,
          `or：选择 / 否则，如 Hurry up or you will be late.（快点，否则迟到）`,
          `so：因果，如 It rained so we stayed home.（下雨了所以我们待在家）`
        ] },
        { type: `paragraph`, text: `做这类题有个窍门：先看清空格前后是不是“同一级别”的成分。如果两个分句主语不同、但结构对称（都是“主谓”或都是“主谓宾”），基本就是并列连词。再读一遍，判断它们之间是顺承、转折、选择还是因果，答案就出来了。` },
        { type: `example`, label: `例句·but / or / so`, text: `<strong>She was tired but she kept working.</strong>（but 表转折：累却坚持）<br><br><strong>You can take the bus or you can walk.</strong>（or 表选择：坐公交或走路）<br><br><strong>He studied hard so he passed the exam.</strong>（so 表因果：努力所以通过）` },
        { type: `tip`, label: `记忆`, text: `记忆口诀：<strong>and 顺承 but 转，or 选择 so 因果；前后平行看关系，四词之中选一员</strong>。先把前后结构比一比，再看逻辑选词，基本不会错。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">并列连词四大将</text><rect x="30" y="70" width="150" height="100" rx="12" fill="#9c56d4"/><text x="105" y="110" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">and</text><text x="105" y="140" font-size="14" fill="#ffffff" text-anchor="middle">并列 / 顺承</text><rect x="190" y="70" width="150" height="100" rx="12" fill="#b87fd8"/><text x="265" y="110" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">but</text><text x="265" y="140" font-size="14" fill="#ffffff" text-anchor="middle">转折</text><rect x="350" y="70" width="150" height="100" rx="12" fill="#7a3fb0"/><text x="425" y="110" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">or</text><text x="425" y="140" font-size="14" fill="#ffffff" text-anchor="middle">选择 / 否则</text><rect x="510" y="70" width="150" height="100" rx="12" fill="#9c56d4"/><text x="585" y="110" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">so</text><text x="585" y="140" font-size="14" fill="#ffffff" text-anchor="middle">因果</text><text x="340" y="215" font-size="15" fill="#3a2a4a" text-anchor="middle">例：He woke up early and rushed out.（and 连接两个并列动作）</text><text x="340" y="248" font-size="15" fill="#3a2a4a" text-anchor="middle">例：It was raining but we went out.（but 表转折）</text><text x="340" y="281" font-size="15" fill="#3a2a4a" text-anchor="middle">例：Hurry up or you will be late.（or 表选择 / 否则）</text><text x="340" y="320" font-size="15" fill="#5a7a2a" text-anchor="middle">例：He was tired so he went to bed.（so 表因果）</text></svg>`, caption: `图1　并列连词四大将：and 顺承、but 转折、or 选择、so 因果，连接平行结构。` },
        { type: `heading`, text: `二、定语从句引导词：给“那个谁 / 那个东西”做标记` },
        { type: `paragraph`, text: `定语从句就是跟在一个名词后面、用来补充说明“这个名词是哪一个”的小句子。被修饰的那个名词叫“先行词”。引导词的作用，是把从句和先行词连起来，同时自己在从句里还要“干活”（作主语、宾语、状语等）。选哪个引导词，先看先行词是人、是物、还是地点时间原因，再看它在从句里干什么。` },
        { type: `table`, headers: [`引导词`, `指代`, `在从句中充当的成分`], rows: [
          [`who / that`, `人`, `主语 / 宾语`],
          [`whom`, `人`, `宾语`],
          [`which / that`, `物`, `主语 / 宾语`],
          [`whose`, `人 / 物`, `定语（……的）`],
          [`where`, `地点`, `地点状语`],
          [`when`, `时间`, `时间状语`],
          [`why`, `原因`, `原因状语`]
        ] },
        { type: `keypoint`, label: `重点·指人指物`, text: `指人时，从句缺主语或宾语用 <strong>who / that</strong>（作宾语时口语也用 whom）；指物时，从句缺主语或宾语用 <strong>which / that</strong>。关键一步是判断引导词在从句里“缺不缺主语 / 宾语”。` },
        { type: `example`, label: `例句·who`, text: `<strong>He met a man who later turned out to be his English teacher.</strong><br><br>先行词 a man 指人，引导词 who 在从句中作主语（who 后面直接跟 turned out）。整句译为：他遇到一个男人，后来发现那人竟是他的英语老师。` },
        { type: `warn`, label: `易错`, text: `注意 <strong>that</strong> 和 <strong>which</strong> 的分工：在限制性定语从句中，指物时二者常可互换；但在<strong>非限制性定语从句</strong>（有逗号隔开）里，指物只能用 <strong>which</strong>，不能用 that。另外指地点、时间要用 where / when，别误填 which。` },
        { type: `example`, label: `例句·where / when / why`, text: `<strong>This is the school where I studied for three years.</strong>（where 指地点，在从句作地点状语）<br><br><strong>I remember the day when we first met.</strong>（when 指时间，在从句作时间状语）<br><br><strong>That is the reason why he left.</strong>（why 指原因，在从句作原因状语）` },
        { type: `keypoint`, label: `重点·whose`, text: `whose 表示“……的”，指人或指物都可以，在从句中作<strong>定语</strong>，后面必须紧跟一个名词。例：The girl whose hair is long is my sister（头发长的那个女孩是我妹妹）。` },
        { type: `tip`, label: `记忆`, text: `选择引导词两步法：<strong>第一步看先行词（人 / 物 / 地点 / 时间 / 原因）；第二步看引导词在从句里作什么成分</strong>。作主语或宾语选 who/which/that，作状语选 where/when/why，作“……的”选 whose。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">定语从句引导词选择流程图</text><rect x="220" y="55" width="240" height="46" rx="10" fill="#7a3fb0"/><text x="340" y="83" font-size="15" fill="#ffffff" text-anchor="middle">先看先行词是人还是物？</text><line x1="300" y1="101" x2="115" y2="140" stroke="#7a3fb0" stroke-width="2"/><line x1="325" y1="101" x2="285" y2="140" stroke="#7a3fb0" stroke-width="2"/><line x1="355" y1="101" x2="455" y2="140" stroke="#7a3fb0" stroke-width="2"/><line x1="380" y1="101" x2="610" y2="140" stroke="#7a3fb0" stroke-width="2"/><rect x="40" y="140" width="150" height="46" rx="10" fill="#9c56d4"/><text x="115" y="168" font-size="15" fill="#ffffff" text-anchor="middle">人 → who / that</text><rect x="210" y="140" width="150" height="46" rx="10" fill="#b87fd8"/><text x="285" y="168" font-size="15" fill="#ffffff" text-anchor="middle">物 → which / that</text><rect x="380" y="140" width="150" height="46" rx="10" fill="#7a3fb0"/><text x="455" y="168" font-size="15" fill="#ffffff" text-anchor="middle">地点 → where</text><rect x="550" y="140" width="120" height="46" rx="10" fill="#9c56d4"/><text x="610" y="168" font-size="15" fill="#ffffff" text-anchor="middle">时间 → when</text><line x1="455" y1="186" x2="455" y2="220" stroke="#7a3fb0" stroke-width="2"/><rect x="380" y="220" width="150" height="46" rx="10" fill="#b87fd8"/><text x="455" y="248" font-size="15" fill="#ffffff" text-anchor="middle">原因 → why</text><text x="340" y="300" font-size="14" fill="#3a2a4a" text-anchor="middle">第一步找先行词（被修饰的名词）→ 第二步看它在从句中作什么成分</text><text x="340" y="330" font-size="14" fill="#5a7a2a" text-anchor="middle">作主语 / 宾语用 who / which / that；作状语用 where / when / why</text></svg>`, caption: `图2　定语从句引导词选择流程图：先看先行词，再看从句成分，对号入座。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">which 指代整个主句（非限制性定语）</text><rect x="40" y="70" width="360" height="70" rx="10" fill="#9c56d4"/><text x="220" y="100" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="bold">主句：He passed the exam</text><text x="220" y="124" font-size="13" fill="#ffffff" text-anchor="middle">他通过了考试</text><rect x="430" y="70" width="210" height="70" rx="10" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="535" y="100" font-size="15" fill="#7a3fb0" text-anchor="middle" font-weight="bold">, which made</text><text x="535" y="124" font-size="13" fill="#3a2a4a" text-anchor="middle">his parents happy</text><line x1="220" y1="140" x2="535" y2="140" stroke="#7a3fb0" stroke-width="2" stroke-dasharray="6,4"/><text x="340" y="172" font-size="13" fill="#c0392b" text-anchor="middle">↑ which 指代前面整句话，不是某个词</text><rect x="150" y="210" width="380" height="60" rx="10" fill="#f3edfa" stroke="#b87fd8" stroke-width="2"/><text x="340" y="238" font-size="14" fill="#3a2a4a" text-anchor="middle">全句：He passed the exam, which made</text><text x="340" y="258" font-size="14" fill="#3a2a4a" text-anchor="middle">his parents happy.（这让他父母很高兴）</text><text x="340" y="310" font-size="14" fill="#5a7a2a" text-anchor="middle">非限制性定语从句用逗号隔开，which 可指整句</text><text x="340" y="335" font-size="14" fill="#5a7a2a" text-anchor="middle">限制性定语（无逗号）中 which 只指前面的名词</text></svg>`, caption: `图3　非限制性定语中 which 可指代前面整个主句，而不是单个名词。` },
        { type: `heading`, text: `三、本课小结` },
        { type: `list`, items: [
          `并列连词连接平行结构：and 顺承、but 转折、or 选择、so 因果`,
          `定语从句引导词先看先行词（人 / 物 / 地点 / 时间 / 原因）`,
          `who / that 指人作主语或宾语；which / that 指物作主语或宾语`,
          `where / when / why 分别在从句中作地点、时间、原因状语`,
          `whose 表“……的”，指人或物，在从句作定语`,
          `非限制性定语（有逗号）中指物用 which，不用 that`
        ] }
      ],
      exercises: [
        { type: `choice`, question: `He woke up early ___ rushed out of the door. 空格前后是两个并列动作，应填哪个并列连词？`, options: [`and`, `but`, `or`, `so`], answer: `and`, explanation: `空格前后 woke up 与 rushed out 是两个平行的谓语，表示动作顺承发生，意为“他早早醒来并冲出门”，应用并列连词 and 连接。but 表转折、or 表选择、so 表因果，都不符合前后并列顺承的逻辑，故选 and。` },
        { type: `choice`, question: `He met a man ___ later turned out to be his English teacher. 引导词在从句中作主语且指人，应填？`, options: [`who`, `which`, `where`, `when`], answer: `who`, explanation: `空格后 later turned out to be his teacher 是定语从句，修饰前面的 a man（人），且引导词在从句中作主语（直接跟 turned out）。指人且在从句作主语要用 who（或 that）。which 指物，where 表地点，when 表时间，均不合适，故选 who。` },
        { type: `choice`, question: `This is the school ___ I studied for three years. 先行词是地点且引导词在从句作地点状语，应填？`, options: [`which`, `where`, `that`, `when`], answer: `where`, explanation: `先行词 the school 是地点名词，引导词在定语从句 I studied for three years 中作地点状语（相当于 in the school），应当用关系副词 where。which / that 在从句中作主语或宾语，when 表时间，都不符合“地点状语”这一成分，故选 where。` },
        { type: `fill`, question: `The book ___ I bought yesterday is very interesting. 先行词是物，引导词在从句中作宾语，请填引导词。`, answer: `that|which`, explanation: `句意为“我昨天买的那本书很有趣”。空格前 the book 是物，引导词在定语从句 I bought yesterday 中作 bought 的宾语，指物作宾语可用 that 或 which，两者皆可。因此填 that 或 which。` },
        { type: `fill`, question: `I still remember the day ___ we first met. 先行词是时间名词，引导词在从句中作时间状语，请填引导词。`, answer: `when`, explanation: `句意为“我仍然记得我们第一次相遇的那一天”。先行词 the day 是时间名词，引导词在定语从句 we first met 中作时间状语，应当用关系副词 when。因此填 when。` }
      ]
    },

    /* ---------------- 第2课时 名词性从句与状语从句引导词 ---------------- */
    {
      id: `zt3-u5-l2`,
      name: `名词性从句与状语从句引导词`,
      chapter: `语法填空 · 第5单元 无提示词类（下）`,
      difficulty: `基础`,
      content: [
        { type: `heading`, text: `一、名词性从句引导词：空格后是一句“能当名词用的话”` },
        { type: `paragraph`, text: `名词性从句，说白了就是“一句话”在句子里充当名词的角色——作主句的主语、宾语、表语或同位语。语法填空中，当你发现空格后面跟着一个完整（或可补全）的小句子，而且这个小句子在整句里顶的是“名词”的位子，就要填名词性从句的引导词。` },
        { type: `keypoint`, label: `重点·三类引导词`, text: `名词性从句引导词分两派：<strong>不充当成分、无意义</strong>的 <strong>that</strong>；表“是否”的 <strong>whether</strong>（主语从句置于句首时不可用 if）。另一派会在从句里<strong>充当成分</strong>：what / who / which / when / where / why / how，分别表示“……的东西 / 谁 / 哪一个 / 何时 / 何地 / 为何 / 怎样”。` },
        { type: `table`, headers: [`引导词`, `功能`, `举例`], rows: [
          [`that`, `不充当成分，无实义`, `That he came is true.（他来了是真的）`],
          [`whether`, `是否（句首不用 if）`, `Whether we go depends on weather.（我们去不去看天气）`],
          [`what`, `在从句中作主语 / 宾语`, `What he said is right.（他说的话是对的）`],
          [`who / which`, `在从句中作主语 / 宾语`, `Who will come is unknown.（谁会来还未知）`],
          [`when / where / why / how`, `在从句中作状语`, `I know where he lives.（我知道他住哪）`]
        ] },
        { type: `example`, label: `例句·that`, text: `<strong>That he finished the work on time surprised everyone.</strong><br><br>That 引导的是一个主语从句（他按时完成了工作），that 本身不充当成分、也没有词义，只起“把这句话变成名词、当作主语”的连接作用。整句译为：他按时完成工作，这让所有人都惊讶。` },
        { type: `warn`, label: `易错`, text: `whether 与 if 都表“是否”，但<strong>主语从句放在句首时，只能用 whether，不能用 if</strong>。例：Whether he will come is not sure（他会不会来还不确定）不能写成 If he will come is not sure。此外 if 还常表示“如果”（条件），容易和“是否”混淆，主语从句一律用 whether 最稳妥。` },
        { type: `example`, label: `例句·what`, text: `<strong>What we need is more time.</strong><br><br>what 引导主语从句，并在从句中作 need 的宾语（we need 后面缺宾语），相当于 the thing that。整句译为：我们需要的是更多的时间。注意 what 不能换成 that，因为 that 不充当成分。` },
        { type: `tip`, label: `记忆`, text: `判断名词性从句引导词：<strong>先看空格后的小句子缺不缺成分</strong>。不缺成分、只起连接用 that；表“是否”用 whether；缺主语 / 宾语用 what / who / which；缺状语用 when / where / why / how。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">名词性从句引导词卡片</text><rect x="30" y="70" width="150" height="80" rx="10" fill="#9c56d4"/><text x="105" y="105" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">that</text><text x="105" y="130" font-size="13" fill="#ffffff" text-anchor="middle">不充当成分</text><rect x="200" y="70" width="150" height="80" rx="10" fill="#b87fd8"/><text x="275" y="105" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">whether</text><text x="275" y="130" font-size="13" fill="#ffffff" text-anchor="middle">是否（不接 if）</text><rect x="370" y="70" width="150" height="80" rx="10" fill="#7a3fb0"/><text x="445" y="105" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">what</text><text x="445" y="130" font-size="13" fill="#ffffff" text-anchor="middle">充当成分</text><rect x="540" y="70" width="150" height="80" rx="10" fill="#9c56d4"/><text x="615" y="105" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">when / where</text><text x="615" y="130" font-size="13" fill="#ffffff" text-anchor="middle">表时间 / 地点</text><text x="340" y="200" font-size="15" fill="#3a2a4a" text-anchor="middle">that 无意义也不充当成分；whether 表“是否”</text><text x="340" y="232" font-size="15" fill="#3a2a4a" text-anchor="middle">what / who / which 等在从句中充当主语、宾语等成分</text><text x="340" y="270" font-size="15" fill="#c0392b" text-anchor="middle">注意：主语从句置于句首时，只能用 whether 不用 if</text><text x="340" y="312" font-size="15" fill="#5a7a2a" text-anchor="middle">引导词后接的是一个完整或可补全的句子（从句）</text></svg>`, caption: `图1　名词性从句引导词卡片：that 不充当成分，whether 表是否，what 等充当成分。` },
        { type: `heading`, text: `二、状语从句引导词：看前后两句的“逻辑关系”` },
        { type: `paragraph`, text: `状语从句是来“修饰整个主句”的，说明主句动作发生的时间、原因、条件、让步等。语法填空中，若空格后是一句“半句话”（一个从句），且它和主句之间是某种逻辑关系，就要选对应的状语从句引导词。常见逻辑有四种：时间、原因、条件、让步。` },
        { type: `keypoint`, label: `重点·四大逻辑关系`, text: `状语从句按逻辑分四类：<strong>时间</strong>用 when / while / after 等；<strong>原因</strong>用 because / since / as；<strong>条件</strong>用 if / unless（除非）；<strong>让步</strong>用 although / though（尽管）。选词关键是读懂前后两句到底是什么关系。` },
        { type: `table`, headers: [`连词`, `逻辑关系`, `例句`], rows: [
          [`when / while`, `时间`, `When it rained, we stayed home.（下雨时我们待在家）`],
          [`because / since`, `原因`, `Because he was ill, he didn't come.（因为他病了没来）`],
          [`if / unless`, `条件`, `If it is fine, we will go.（如果天晴我们就去）`],
          [`although / though`, `让步`, `Although young, he knows a lot.（尽管年轻他懂得多）`]
        ] },
        { type: `example`, label: `例句·when / because`, text: `<strong>When the bell rang, the students stood up.</strong>（when 引导时间状语：铃响时学生起立）<br><br><strong>Because it was late, we took a taxi.</strong>（because 引导原因状语：因为晚了所以我们打车）` },
        { type: `warn`, label: `易错`, text: `英文里 <strong>because 和 so 不能连用</strong>，<strong>although 和 but 也不能连用</strong>。只能保留一对：用 because 就不用 so，用 although 就不用 but。这是中式英语最常见错误，语法填空中若前后已是因果 / 转折，空处只填一个词即可。` },
        { type: `list`, items: [
          `时间关系：when / while / after / before（……的时候 / 之后 / 之前）`,
          `原因关系：because / since / as（因为）`,
          `条件关系：if（如果）/ unless（除非，= if not）`,
          `让步关系：although / though（尽管，不与 but 连用）`
        ] },
        { type: `tip`, label: `记忆`, text: `判断状语从句窍门：<strong>把空格后那半句话和主句连起来读，问自己“它说明了什么？”</strong>——何时发生就是时间，为何发生就是原因，是否如此就是条件，尽管怎样就是让步。逻辑一定，词就定了。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">状语从句四大逻辑关系</text><rect x="40" y="80" width="150" height="70" rx="12" fill="#9c56d4"/><text x="115" y="112" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">时间</text><text x="115" y="136" font-size="13" fill="#ffffff" text-anchor="middle">when / while</text><rect x="210" y="80" width="150" height="70" rx="12" fill="#b87fd8"/><text x="285" y="112" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">原因</text><text x="285" y="136" font-size="13" fill="#ffffff" text-anchor="middle">because</text><rect x="380" y="80" width="150" height="70" rx="12" fill="#7a3fb0"/><text x="455" y="112" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">条件</text><text x="455" y="136" font-size="13" fill="#ffffff" text-anchor="middle">if / unless</text><rect x="550" y="80" width="150" height="70" rx="12" fill="#9c56d4"/><text x="625" y="112" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">让步</text><text x="625" y="136" font-size="13" fill="#ffffff" text-anchor="middle">although</text><line x1="340" y1="160" x2="340" y2="200" stroke="#7a3fb0" stroke-width="2"/><rect x="170" y="205" width="340" height="50" rx="10" fill="#f3edfa" stroke="#b87fd8" stroke-width="2"/><text x="340" y="235" font-size="15" fill="#3a2a4a" text-anchor="middle">空格后是“半句话（从句）”，看它与主句的逻辑</text><text x="340" y="300" font-size="14" fill="#5a7a2a" text-anchor="middle">判断逻辑：何时发生→时间；为何→原因；是否如此→条件；尽管→让步</text></svg>`, caption: `图2　状语从句四大逻辑关系：时间、原因、条件、让步，按逻辑选引导词。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">判断空格后是什么从句（决策树）</text><rect x="210" y="55" width="260" height="46" rx="10" fill="#7a3fb0"/><text x="340" y="83" font-size="14" fill="#ffffff" text-anchor="middle">空格后是“半句话”（从句）吗？</text><line x1="340" y1="101" x2="130" y2="140" stroke="#7a3fb0" stroke-width="2"/><line x1="340" y1="101" x2="340" y2="140" stroke="#7a3fb0" stroke-width="2"/><line x1="340" y1="101" x2="550" y2="140" stroke="#7a3fb0" stroke-width="2"/><rect x="40" y="140" width="180" height="50" rx="10" fill="#9c56d4"/><text x="130" y="170" font-size="14" fill="#ffffff" text-anchor="middle">作主/宾/表/同位 → 名词性</text><rect x="250" y="140" width="180" height="50" rx="10" fill="#b87fd8"/><text x="340" y="170" font-size="14" fill="#ffffff" text-anchor="middle">修饰名词 → 定语</text><rect x="460" y="140" width="180" height="50" rx="10" fill="#7a3fb0"/><text x="550" y="170" font-size="14" fill="#ffffff" text-anchor="middle">表逻辑 → 状语</text><line x1="130" y1="190" x2="130" y2="230" stroke="#7a3fb0" stroke-width="2"/><line x1="340" y1="190" x2="340" y2="230" stroke="#7a3fb0" stroke-width="2"/><line x1="550" y1="190" x2="550" y2="230" stroke="#7a3fb0" stroke-width="2"/><rect x="40" y="230" width="180" height="50" rx="10" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="130" y="260" font-size="14" fill="#9c56d4" text-anchor="middle">填 that / what 等</text><rect x="250" y="230" width="180" height="50" rx="10" fill="#ffffff" stroke="#b87fd8" stroke-width="2"/><text x="340" y="260" font-size="14" fill="#7a3fb0" text-anchor="middle">填 who / which 等</text><rect x="460" y="230" width="180" height="50" rx="10" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="550" y="260" font-size="14" fill="#7a3fb0" text-anchor="middle">填 when / because 等</text><text x="340" y="320" font-size="14" fill="#5a7a2a" text-anchor="middle">先看空格后的结构，再看它在句中的作用，就能选对引导词</text></svg>`, caption: `图3　判断空格后是什么从句的决策树：先定从句类型，再选对应引导词。` },
        { type: `heading`, text: `三、本课小结` },
        { type: `list`, items: [
          `名词性从句：空格后是一句话顶名词用，引导词 that / whether / what 等`,
          `that 不充当成分；whether 表是否，句首不用 if`,
          `what / who / which 在从句中充当主语或宾语`,
          `状语从句：看前后逻辑，时间 when、原因 because、条件 if、让步 although`,
          `because 不与 so 连用，although 不与 but 连用`,
          `判断从句类型：先定它作主/宾/表/同位、修饰名词还是表逻辑`
        ]
      },
      ],
      exercises: [
        { type: `choice`, question: `___ he will come is not sure. 空格后是主语从句且表示“是否”，又置于句首，应填？`, options: [`Whether`, `If`, `That`, `What`], answer: `Whether`, explanation: `空格后是主语从句，且表达“他是否会来”这种“是否”的含义；又因为主语从句置于句首，引导词必须用 whether，不能用 if（if 不能引导句首的主语从句）。that 无意义、不表“是否”，what 要在从句中充当成分，都不合适，故选 Whether。` },
        { type: `choice`, question: `___ it was raining, we stayed at home. 前后是因果关系“因为下雨所以待在家”，应填？`, options: [`Because`, `Although`, `Unless`, `If`], answer: `Because`, explanation: `前一句 it was raining 与后一句 we stayed at home 之间是因果关系：因为下雨，所以我们待在家。表示原因应当用 because。although 表让步（尽管），unless / if 表条件（除非 / 如果），都不符合因果逻辑，故选 Because。` },
        { type: `choice`, question: `___ we need is more time. 引导词在主语从句中作 need 的宾语，应填？`, options: [`What`, `That`, `Whether`, `Which`], answer: `What`, explanation: `空格后是主语从句，且引导词在从句中作 need 的宾语（we need 后面缺宾语），表示“我们需要的东西”，应用 what（相当于 the thing that）。that 不充当成分，whether 表是否，which 表“哪一个”需有选择范围，均不符合“缺宾语”这一情况，故选 What。` },
        { type: `fill`, question: `___ he is young, he knows a lot. 前后是让步关系“尽管年轻却懂得多”，请填引导词。`, answer: `Although`, explanation: `句意为“尽管他年轻，他却懂得很多”。前后两句是让步关系，空格引导让步状语从句应当用 although（尽管）。注意 although 不能与 but 连用，一句里只保留一个。因此填 Although。` },
        { type: `fill`, question: `I will call you ___ I arrive home. 空格引导时间状语从句“当我到家时”，请填引导词。`, answer: `when`, explanation: `句意为“我一到家就给你打电话”。空格后是时间状语从句，表示“当……的时候”，应当用 when（也可理解为 as soon as 一……就）。此处填 when 最贴切，表示主句动作发生的时间点。因此填 when。` }
      ]
    }

  );
})();
