/* ============================================================
 * 高一英语 · 必修 第三册 · Unit 4 Space Exploration 太空探索
 * 第1课时：核心词汇与常用短语
 * 第2课时：重点句型与核心语法（动词-ing形式作宾补与状语）
 * 数据注入：english.bx3.points
 * 学科配色（紫色系）：主色 #9c56d4 / #7a3fb0，背景 #f3edfa
 * ============================================================ */
(function () {
  var v = gzGetVolume('english', 'bx3');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 核心词汇与常用短语 ---------------- */
    {
      id: `bx3-u4-l1`,
      name: `核心词汇与常用短语`,
      chapter: `Unit 4 Space Exploration`,
      difficulty: `基础`,
      content: [
        { type: `heading`, text: `一、Unit 4 核心词汇概览` },
        { type: `paragraph`, text: `Unit 4 Space Exploration 围绕人类探索太空的历程、成就与意义展开。课文包含大量与宇航、飞行、信号、引力相关的核心词汇。掌握这些词的音、形、义及词性变化，是读懂课文、写好相关话题作文的前提。` },
        { type: `keypoint`, label: `重点·学法`, text: `学习 Unit 4 核心词汇建议三步走：① <strong>记词性与搭配</strong>，如 explore 是动词，其名词为 exploration；② <strong>在例句中理解</strong>，把单词放进课文语境；③ <strong>分类归纳</strong>，把“探索类、飞行类、信号类”词汇归为一组，便于记忆与写作迁移。` },
        { type: `paragraph`, text: `下表汇总本单元最常考的十个核心词汇，建议结合课文句子记忆，并注意动词与名词词性之间的转换（如 explore → exploration）。` },
        { type: `table`, headers: [`单词`, `词性`, `释义`], rows: [
          [`explore`, `v.`, `探索；探测`],
          [`exploration`, `n.`, `探索；勘探`],
          [`astronaut`, `n.`, `宇航员`],
          [`orbit`, `n./v.`, `轨道；绕……运行`],
          [`spacecraft`, `n.`, `宇宙飞船`],
          [`satellite`, `n.`, `卫星`],
          [`launch`, `v.`, `发射；发起`],
          [`data`, `n.`, `数据`],
          [`signal`, `n.`, `信号`],
          [`gravity`, `n.`, `重力；引力`]
        ] },
        { type: `heading`, text: `二、核心词汇详解与搭配` },
        { type: `paragraph`, text: `除单词外，还要注意它们的常见搭配与派生。例如 explore 表示“探索”，其名词 exploration 常与 of 连用；astronaut（宇航员）是太空话题的核心词；orbit 既可作名词“轨道”，也可作动词“绕……运行”。` },
        { type: `list`, items: [
          `explore（v.探索）→ exploration（n.探索）：explore space 探索太空`,
          `astronaut（n.宇航员）：a Chinese astronaut 一名中国宇航员`,
          `orbit（n./v.轨道；绕行）：in orbit 在轨道上；orbit the earth 绕地球运行`,
          `spacecraft（n.宇宙飞船）：a manned spacecraft 载人宇宙飞船`,
          `satellite（n.卫星）：launch a satellite 发射卫星`,
          `launch（v.发射；发起）：launch a rocket 发射火箭`
        ] },
        { type: `table`, headers: [`短语`, `汉语释义`], rows: [
          [`in the hope of`, `怀着……的希望`],
          [`carry on`, `继续进行`],
          [`figure out`, `弄清；弄明白`],
          [`make a difference`, `有影响；起作用`],
          [`so as to`, `为了（表目的）`]
        ] },
        { type: `keypoint`, label: `重点·explore / exploration`, text: `动词 <strong>explore</strong> 意为“探索；探测”，如 explore the moon（探测月球）；其名词形式 <strong>exploration</strong> 意为“探索；勘探”，如 space exploration（太空探索）。在写作中若需名词，要用 exploration，<strong>不可</strong>漏掉后缀 -ation。` },
        { type: `example`, label: `例句·explore`, text: `Scientists want to <strong>explore</strong> the unknown planet.<br><br>句中 explore 是及物动词，后接宾语 the unknown planet，意为“科学家想要探索那颗未知的行星”。` },
        { type: `warn`, label: `易错`, text: `注意 <strong>launch</strong> 作动词时意为“发射；发起”，宾语常为火箭、卫星、飞船；而 <strong>gravity</strong> 是不可数名词，意为“重力；引力”，没有复数形式。另外 <strong>data</strong> 在教材中常作复数名词（意为“数据”），谓语动词多用复数，但口语中也可见单数用法，考试以复数为主。` },
        { type: `heading`, text: `三、常用短语精讲` },
        { type: `paragraph`, text: `本单元短语多与“目的、坚持、理解、作用”相关，在完形填空与语法填空里出现频率很高。下面逐一讲解并配例句。` },
        { type: `list`, items: [
          `in the hope of：怀着……的希望（of 为介词，后接名词或 v-ing）`,
          `carry on：继续进行（可单独使用，也可 carry on with sth.）`,
          `figure out：弄清；弄明白（宾语常为 problem、answer、reason）`,
          `make a difference：有影响；起作用（常用于鼓励或说明意义）`,
          `so as to：为了（表目的，后接动词原形，否定 so as not to）`
        ] },
        { type: `example`, label: `例句·in the hope of`, text: `They went there <strong>in the hope of</strong> finding new life.<br><br>in the hope of 表示“怀着……的希望”，of 是介词，后接 finding（动名词）。整句意为“他们去那里，怀着发现新生命的希望”。` },
        { type: `example`, label: `例句·carry on`, text: `Even when it was hard, they <strong>carried on</strong> with the experiment.<br><br>carry on 意为“继续进行”，with the experiment 说明继续进行的具体内容，体现面对困难不放弃的探索精神。` },
        { type: `keypoint`, label: `重点·so as to（目的）`, text: `短语 <strong>so as to</strong> 意为“为了”，在句中作<strong>目的状语</strong>，后接<strong>动词原形</strong>。其否定式为 so as not to（为了不……）。它与 in order to 意思相近，但 so as to 不能放在句首。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">太空探索核心词汇导图</text><circle cx="340" cy="120" r="55" fill="#9c56d4"/><text x="340" y="116" font-size="17" fill="#ffffff" text-anchor="middle">探索</text><text x="340" y="138" font-size="13" fill="#ffffff" text-anchor="middle">explore</text><rect x="60" y="210" width="160" height="44" rx="8" fill="#b87fd8"/><text x="140" y="238" font-size="15" fill="#ffffff" text-anchor="middle">astronaut 宇航员</text><rect x="260" y="210" width="160" height="44" rx="8" fill="#b87fd8"/><text x="340" y="238" font-size="15" fill="#ffffff" text-anchor="middle">spacecraft 飞船</text><rect x="460" y="210" width="160" height="44" rx="8" fill="#b87fd8"/><text x="540" y="238" font-size="15" fill="#ffffff" text-anchor="middle">satellite 卫星</text><line x1="340" y1="175" x2="140" y2="210" stroke="#7a3fb0" stroke-width="2"/><line x1="340" y1="175" x2="340" y2="210" stroke="#7a3fb0" stroke-width="2"/><line x1="340" y1="175" x2="540" y2="210" stroke="#7a3fb0" stroke-width="2"/><text x="340" y="300" font-size="14" fill="#3a2a4a" text-anchor="middle">探索目的：launch 发射 → orbit 入轨 → 收集 data 信号 signal</text></svg>`, caption: `图1　太空探索词汇导图：以 explore 为核心，串联宇航员、飞船、卫星等词汇。` },
        { type: `tip`, label: `记忆`, text: `记忆口诀：<strong>探（explore）空用飞船（spacecraft），载（carry on）人宇航员（astronaut）</strong>。把“探索—飞行—信号—引力”串成一条故事线：发射（launch）飞船上轨道（orbit），靠信号（signal）传数据（data），受引力（gravity）控制。多读例句，培养语感最有效。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">探索—飞行—信号 词汇链</text><rect x="40" y="80" width="170" height="100" rx="8" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="125" y="112" font-size="16" fill="#9c56d4" text-anchor="middle" font-weight="bold">探索</text><text x="125" y="142" font-size="14" fill="#3a2a4a" text-anchor="middle">explore</text><text x="125" y="166" font-size="13" fill="#5a7a2a" text-anchor="middle">exploration (n.)</text><rect x="255" y="80" width="170" height="100" rx="8" fill="#ffffff" stroke="#b87fd8" stroke-width="2"/><text x="340" y="112" font-size="16" fill="#7a3fb0" text-anchor="middle" font-weight="bold">飞行</text><text x="340" y="142" font-size="14" fill="#3a2a4a" text-anchor="middle">launch/orbit</text><text x="340" y="166" font-size="13" fill="#5a7a2a" text-anchor="middle">spacecraft</text><rect x="470" y="80" width="170" height="100" rx="8" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="555" y="112" font-size="16" fill="#9c56d4" text-anchor="middle" font-weight="bold">信号</text><text x="555" y="142" font-size="14" fill="#3a2a4a" text-anchor="middle">signal/data</text><text x="555" y="166" font-size="13" fill="#5a7a2a" text-anchor="middle">gravity</text><line x1="210" y1="130" x2="255" y2="130" stroke="#3a2a4a" stroke-width="3"/><line x1="425" y1="130" x2="470" y2="130" stroke="#3a2a4a" stroke-width="3"/><polygon points="255,130 243,124 243,136" fill="#3a2a4a"/><polygon points="470,130 458,124 458,136" fill="#3a2a4a"/><text x="340" y="240" font-size="14" fill="#3a2a4a" text-anchor="middle">从探索到飞行再到接收信号，理解词汇间的逻辑关系更好记</text></svg>`, caption: `图2　探索—飞行—信号词汇链：三类词汇按探索流程依次关联。` },
        { type: `paragraph`, text: `下面用一张表小结本课时五个常用短语的考查重点，便于在语法填空与写作中准确使用。` },
        { type: `table`, headers: [`短语`, `是否接 to/of`, `考点提示`], rows: [
          [`in the hope of`, `of 是介词`, `后接名词或 v-ing`],
          [`carry on`, `可接 with`, `表示继续进行`],
          [`figure out`, `直接接宾语`, `宾语多为问题、答案`],
          [`make a difference`, `不接 to`, `常用于说明意义`],
          [`so as to`, `后接动词原形`, `表目的，不可置句首`]
        ] },
        { type: `heading`, text: `四、本课小结` },
        { type: `list`, items: [
          `核心词汇：explore / exploration / astronaut / orbit / spacecraft / satellite / launch / data / signal / gravity`,
          `常用短语：in the hope of、carry on、figure out、make a difference、so as to`,
          `explore 是动词，exploration 是名词，注意词性转换`,
          `so as to 表目的，后接动词原形，不可放在句首`,
          `gravity 不可数，data 常用复数概念`,
          `记忆方法：把词汇串成“发射—入轨—传信号”的故事线`
        ] },
        { type: `svg`, svg: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3edfa"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">五大短语结构一览</text><rect x="40" y="60" width="290" height="50" rx="6" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="185" y="90" font-size="15" fill="#3a2a4a" text-anchor="middle">in the hope of + v-ing</text><text x="185" y="135" font-size="14" fill="#9c56d4" text-anchor="middle">↑ of 是介词</text><rect x="360" y="60" width="280" height="50" rx="6" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="500" y="90" font-size="15" fill="#3a2a4a" text-anchor="middle">so as to + 动词原形</text><text x="500" y="135" font-size="14" fill="#9c56d4" text-anchor="middle">↑ 表目的状语</text><line x1="185" y1="110" x2="185" y2="120" stroke="#9c56d4" stroke-width="2"/><line x1="500" y1="110" x2="500" y2="120" stroke="#9c56d4" stroke-width="2"/><text x="340" y="210" font-size="14" fill="#3a2a4a" text-anchor="middle">figure out / carry on / make a difference 各自搭配要记牢</text></svg>`, caption: `图3　五大短语结构：of 接动名词、to 接动词原形，搭配不可混淆。` }
      ],
      exercises: [
        { type: `choice`, question: `动词 explore 对应的名词形式（意为“探索”）是？`, options: [`exploration`, `explorer`, `exploring`, `explored`], answer: `exploration`, explanation: `explore 是动词“探索”，其名词形式是在词尾加 -ation，即 exploration，意为“探索；勘探”。explorer 意为“探索者；探险家”，exploring 是现在分词，explored 是过去式，均不是名词“探索”，故选 exploration。` },
        { type: `choice`, question: `下列词汇中表示“发射；发起”的动词是？`, options: [`launch`, `orbit`, `signal`, `gravity`], answer: `launch`, explanation: `launch 作动词意为“发射；发起”，常见搭配如 launch a rocket（发射火箭）、launch a satellite（发射卫星）。orbit 意为轨道或绕行，signal 意为信号，gravity 意为重力，三者都不表示“发射”，故选 launch。` },
        { type: `choice`, question: `短语 in the hope of 的汉语意思是？`, options: [`怀着……的希望`, `继续进行`, `弄清；弄明白`, `有影响；起作用`], answer: `怀着……的希望`, explanation: `in the hope of 意为“怀着……的希望”，其中 of 是介词，后接名词或动名词。继续进行是 carry on，弄清弄明白是 figure out，有影响起作用的是 make a difference，三者意思均不同，故选“怀着……的希望”。` },
        { type: `fill`, question: `Scientists are trying to ___ ___ how the black hole works.（用 Unit 4 短语“弄清；弄明白”填空）`, answer: `figure out`, explanation: `句意为“科学家正试图弄清黑洞是如何运作的”，表示“弄清；弄明白”且能接 how 引导从句的 Unit 4 短语是 figure out。carry on 意为继续，make a difference 意为起作用，均不符合句意，故填 figure out。` },
        { type: `fill`, question: `They trained hard ___ ___ ___ (为了) reach the space station on time.（用 Unit 4 表目的的短语填空）`, answer: `so as to`, explanation: `句意为“他们刻苦训练，为了按时抵达空间站”，表示目的、后接动词原形的 Unit 4 短语是 so as to（为了）。其否定式为 so as not to。in the hope of 后接 of 不能接动词原形，故填 so as to。` }
      ]
    },

    /* ---------------- 第2课时 重点句型与核心语法 ---------------- */
    {
      id: `bx3-u4-l2`,
      name: `重点句型与核心语法`,
      chapter: `Unit 4 Space Exploration`,
      difficulty: `基础`,
      content: [
        { type: `heading`, text: `一、Unit 4 重点句型` },
        { type: `paragraph`, text: `本单元课文包含几个非常实用且常考的重点句型。掌握它们的结构与用法，既能帮助理解长难句，也能在写作中提升表达层次，让太空话题的作文更有条理。` },
        { type: `keypoint`, label: `重点·句型1 目的状语 so as to`, text: `结构 <strong>so as to + 动词原形</strong> 表示“为了……”，在句中作<strong>目的状语</strong>。它和 in order to 意思相近，但 <strong>so as to 不能放在句首</strong>。否定式为 so as not to（为了不……）。` },
        { type: `example`, label: `例句1·so as to`, text: `They worked day and night <strong>so as to</strong> finish the project.<br><br>句中 so as to finish the project 作目的状语，说明“日夜工作”的目的，意为“他们日夜工作，为了完成这个项目”。注意 to 后必须用动词原形 finish。` },
        { type: `keypoint`, label: `重点·句型2 强调句 It is/was...that...`, text: `强调句基本结构为 <strong>It is/was + 被强调部分 + that/who + 其余部分</strong>，用来突出句子中的某一成分（主语、宾语或状语）。若被强调部分是“人”，可用 who 也可 that；其余一律用 that。判断方法：去掉 It is/was 和 that/who，句子仍完整，则是强调句。` },
        { type: `example`, label: `例句2·强调句`, text: `It was Yang Liwei <strong>who</strong> first went into space for China.<br><br>本句强调主语 Yang Liwei（人），用 who（也可用 that）。去掉 It was 和 who 后得到 Yang Liwei first went into space for China，句意完整，故为强调句，意为“正是杨利伟首次代表中国进入太空”。` },
        { type: `keypoint`, label: `重点·句型3 感叹句 How...`, text: `由 <strong>How + 形容词/副词 + 主语 + 谓语！</strong> 构成感叹句，表示“多么……啊！”。How 后接形容词或副词；若感叹名词用 What。例如 How amazing space is!（太空多么神奇啊！）。` },
        { type: `example`, label: `例句3·感叹句`, text: `<strong>How amazing</strong> space is!<br><br>how 后接形容词 amazing，再接主语 space 和谓语 is，构成感叹句，表达对太空的赞叹，意为“太空多么神奇啊！”。注意句末用感叹号。` },
        { type: `list`, items: [
          `so as to + 动词原形：表目的，不可置于句首`,
          `It is/was ... that/who ...：强调句，强调主、宾、状语`,
          `强调“人”可用 who，其余一律用 that`,
          `How + 形容词/副词 + 主 + 谓！构成感叹句`,
          `判断强调句：去掉 It is/was 与 that/who 后句意仍完整`
        ] },
        { type: `warn`, label: `易错`, text: `不要把<strong>强调句</strong>和<strong>定语从句</strong>混淆。强调句去掉 It is/was ... that/who 后句子结构完整；定语从句去掉后不完整。比较：It was in 2003 that Yang Liwei flew（强调句）与 The year when he flew was 2003（定语从句，when 不可省）。另外感叹句用 How 还是 What，取决于后面紧跟的是形容词/副词还是名词。` },
        { type: `heading`, text: `二、核心语法：动词-ing形式作宾语补足语和状语` },
        { type: `paragraph`, text: `动词的 -ing 形式（动名词/现在分词）在本单元语法中承担两个重要角色：作<strong>宾语补足语</strong>和作<strong>状语</strong>。二者最大的区别在于它与句中哪个成分发生关系，以及是否表达“动作正在进行”。` },
        { type: `keypoint`, label: `重点·作宾语补足语`, text: `动词 -ing 形式作<strong>宾语补足语</strong>时，用来<strong>补充说明宾语</strong>的动作或状态，强调动作正在进行或反复发生。常见带此类宾补的动词有 see、hear、find、notice、watch 等。逻辑主语是前面的<strong>宾语</strong>。` },
        { type: `example`, label: `例句·作宾补`, text: `I saw him <strong>crossing</strong> the street.<br><br>crossing 是 -ing 形式，作宾语 him 的补足语，说明“我看见他时，他正在过马路”（动作进行中）。逻辑主语是 him，crossing 与 him 是主动且进行的关系。` },
        { type: `keypoint`, label: `重点·作状语`, text: `动词 -ing 形式作<strong>状语</strong>时，用来修饰整个句子，表示<strong>时间、原因、条件或方式</strong>等。它的<strong>逻辑主语必须是句子的主语</strong>，两者须保持一致；若主语不能发出该动作，则不能这样用。` },
        { type: `example`, label: `例句·作状语`, text: `<strong>Walking</strong> in the street, I met an old friend.<br><br>Walking 是 -ing 形式作时间状语，相当于 When I was walking...。其逻辑主语是句子主语 I，I 与 walk 是主动关系，意为“当我在街上走时，我遇见了一位老朋友”。` },
        { type: `table`, headers: [`比较项`, `作宾语补足语`, `作状语`], rows: [
          [`修饰对象`, `补充说明宾语`, `修饰整个句子`],
          [`逻辑主语`, `句子的宾语`, `句子的主语`],
          [`常表含义`, `动作正在进行/反复`, `时间/原因/条件/方式`],
          [`常见位置`, `紧接宾语之后`, `常在句首或句末`]
        ] },
        { type: `list`, items: [
          `第一步：找 -ing 形式在句中的位置与所依附的词`,
          `第二步：若紧跟在 see/hear/find 等动词的宾语后，多为宾补`,
          `第三步：若在句首修饰全句，多为状语，逻辑主语是主语`,
          `第四步：检查逻辑主语能否发出该 -ing 动作，保证一致`,
          `第五步：与 -ed 宾补对比，主动进行用 -ing，被动完成用 -ed`
        ] },
        { type: `warn`, label: `易错`, text: `区分 <strong>-ing 作宾补</strong>与 <strong>-ed 作宾补</strong>：当宾语是动作的<strong>发出者</strong>且动作进行中，用 -ing，如 I saw him crossing（他正在过）；当宾语是动作的<strong>承受者</strong>，用 -ed，如 I saw the window broken（窗户被打破）。逻辑主语的主动/被动关系决定用 -ing 还是 -ed。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">动词-ing 作宾补 与 作状语 对比</text><rect x="50" y="60" width="270" height="130" rx="8" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="185" y="90" font-size="16" fill="#9c56d4" text-anchor="middle" font-weight="bold">作宾语补足语</text><text x="185" y="118" font-size="14" fill="#3a2a4a" text-anchor="middle">I saw him crossing...</text><text x="185" y="146" font-size="14" fill="#5a7a2a" text-anchor="middle">逻辑主语=宾语 him</text><text x="185" y="172" font-size="13" fill="#3a2a4a" text-anchor="middle">补充说明宾语的动作</text><rect x="360" y="60" width="270" height="130" rx="8" fill="#ffffff" stroke="#b87fd8" stroke-width="2"/><text x="495" y="90" font-size="16" fill="#7a3fb0" text-anchor="middle" font-weight="bold">作状语</text><text x="495" y="118" font-size="14" fill="#3a2a4a" text-anchor="middle">Walking..., I met...</text><text x="495" y="146" font-size="14" fill="#5a7a2a" text-anchor="middle">逻辑主语=主语 I</text><text x="495" y="172" font-size="13" fill="#3a2a4a" text-anchor="middle">修饰整个句子（时间等）</text><text x="340" y="245" font-size="14" fill="#3a2a4a" text-anchor="middle">核心区别：宾补依附宾语，状语依附主语</text><text x="340" y="288" font-size="14" fill="#c0392b" text-anchor="middle">主动进行用 -ing，被动完成用 -ed（宾补对比）</text></svg>`, caption: `图1　-ing 作宾补与作状语对比：逻辑主语分别是宾语和主语，性质完全不同。` },
        { type: `tip`, label: `口诀`, text: `记忆口诀：<strong>宾补跟宾语，状语跟主语；主动进行 -ing，被动完成 -ed</strong>。看到 see/hear/find + 宾语 + -ing，想“宾语正在做”；看到句首 -ing + 逗号 + 主句，想“主语在做……时”。多对比例句，语感自然形成。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">逻辑主语一致性检查</text><circle cx="120" cy="130" r="50" fill="#9c56d4"/><text x="120" y="126" font-size="16" fill="#ffffff" text-anchor="middle">主语 I</text><text x="120" y="148" font-size="13" fill="#ffffff" text-anchor="middle">能 walk</text><circle cx="560" cy="130" r="50" fill="#b87fd8"/><text x="560" y="126" font-size="16" fill="#ffffff" text-anchor="middle">宾语 him</text><text x="560" y="148" font-size="13" fill="#ffffff" text-anchor="middle">能 cross</text><line x1="170" y1="130" x2="510" y2="130" stroke="#7a3fb0" stroke-width="3"/><text x="340" y="118" font-size="14" fill="#3a2a4a" text-anchor="middle">Walking..., I...  ✓</text><text x="340" y="200" font-size="14" fill="#3a2a4a" text-anchor="middle">逻辑主语必须能发出 -ing 动作，否则用被动 -ed</text></svg>`, caption: `图2　逻辑主语一致性：主语/宾语须能发出 -ing 动作，否则改用 -ed。` },
        { type: `heading`, text: `三、知识小结` },
        { type: `list`, items: [
          `重点句型：so as to 表目的；It is...that... 强调句；How... 感叹句`,
          `强调句判断：去掉 It is/was 与 that/who 后句意仍完整`,
          `动词 -ing 作宾补：补充宾语，逻辑主语是宾语，表进行`,
          `动词 -ing 作状语：修饰全句，逻辑主语是主语，表时间/原因等`,
          `与 -ed 宾补对比：主动进行用 -ing，被动完成用 -ed`,
          `使用 -ing 前先确认逻辑主语能否发出该动作`
        ] },
        { type: `svg`, svg: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3edfa"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">本课时句型与语法结构</text><rect x="40" y="60" width="190" height="110" rx="8" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="135" y="92" font-size="15" fill="#9c56d4" text-anchor="middle" font-weight="bold">重点句型</text><text x="135" y="120" font-size="13" fill="#3a2a4a" text-anchor="middle">so as to 目的</text><text x="135" y="142" font-size="13" fill="#3a2a4a" text-anchor="middle">It is...that 强调</text><text x="135" y="164" font-size="13" fill="#3a2a4a" text-anchor="middle">How... 感叹</text><rect x="450" y="60" width="190" height="110" rx="8" fill="#ffffff" stroke="#b87fd8" stroke-width="2"/><text x="545" y="92" font-size="15" fill="#7a3fb0" text-anchor="middle" font-weight="bold">核心语法</text><text x="545" y="120" font-size="13" fill="#3a2a4a" text-anchor="middle">-ing 作宾补</text><text x="545" y="142" font-size="13" fill="#3a2a4a" text-anchor="middle">-ing 作状语</text><text x="545" y="164" font-size="13" fill="#3a2a4a" text-anchor="middle">对比 -ed 宾补</text><line x1="230" y1="115" x2="450" y2="115" stroke="#7a3fb0" stroke-width="3"/><text x="340" y="210" font-size="14" fill="#3a2a4a" text-anchor="middle">句型表达目的与强调，语法讲清 -ing 的双重角色</text></svg>`, caption: `图3　本课时结构总览：三大句型与 -ing 双重语法角色并列呈现。` }
      ],
      exercises: [
        { type: `choice`, question: `动词 -ing 形式作宾语补足语时，它用来补充说明句中的哪一部分？`, options: [`主语`, `宾语`, `状语`, `定语`], answer: `宾语`, explanation: `作宾语补足语的 -ing 形式紧跟在 see、hear、find 等动词的宾语之后，用来补充说明该宾语的动作或状态（如 I saw him crossing）。它依附于宾语，逻辑主语是宾语，而非主语或状语，故选宾语。` },
        { type: `choice`, question: `关于强调句 It is/was ... that/who ...，下列说法正确的是？`, options: [`只能强调主语`, `主语、宾语或状语等都可被强调`, `只能强调状语`, `只能强调谓语`], answer: `主语、宾语或状语等都可被强调`, explanation: `强调句 It is/was + 被强调部分 + that/who + 其余，被强调的可以是主语、宾语或状语等成分；若被强调部分是人可用 who，其余用 that。强调句不能强调谓语，且去掉 It is/was 与 that/who 后句意仍完整，故选“主语、宾语或状语等都可被强调”。` },
        { type: `choice`, question: `在句子 Walking in the park, I saw a shooting star. 中，Walking 在句中充当什么成分？`, options: [`宾语补足语`, `状语`, `定语`, `谓语`], answer: `状语`, explanation: `Walking in the park 位于句首，修饰整个主句，表示时间（相当于 When I was walking...），其逻辑主语是句子主语 I，I 与 walk 是主动关系，因此 Walking 在此作状语。它不是宾补（宾补须紧跟宾语），也不是定语或谓语，故选状语。` },
        { type: `fill`, question: `I heard him ___ (sing) a song in the next room.（用动词-ing形式作宾语补足语填空）`, answer: `singing`, explanation: `hear 后接宾语 him，再用 -ing 作宾补，表示“听见他正在唱歌”，强调动作正在进行，逻辑主语是 him 且为主动关系，故用 singing。若用 sing 则为省略 to 的不定式，表“听见唱了全过程”，此处强调进行，填 singing。` },
        { type: `fill`, question: `___ (Walk) along the river, we saw a beautiful bridge.（用动词-ing形式作状语填空）`, answer: `Walking`, explanation: `句首 -ing 作时间状语，逻辑主语是句子主语 we，we 与 walk 是主动关系，相当于 When we walked along the river，故用 Walking。注意首字母大写。若主语不能发出该动作则要用被动形式，此处为主动，填 Walking。` }
      ]
    }

  );
})();
