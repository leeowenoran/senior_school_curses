/* ============================================================
 * 高二英语 · 选择性必修 第三册 · Unit 5 Poems 诗歌
 * 第1课时：核心词汇与常用短语
 * 第2课时：重点句型与核心语法
 * 数据注入：english.xb3.points
 * 学科配色（紫色系）：主色 #9c56d4 / #7a3fb0，背景 #f3edfa
 * ============================================================ */
(function () {
  var v = gzGetVolume('english', 'xb3');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 核心词汇与常用短语 ---------------- */
    {
      id: `xb3-u5-l1`,
      name: `核心词汇与常用短语`,
      chapter: `Unit 5 Poems`,
      difficulty: `基础`,
      content: [
        { type: `heading`, text: `一、Unit 5 核心词汇概览` },
        { type: `paragraph`, text: `Unit 5 Poems 以“诗歌”为主题，课文与词汇都围绕读诗、赏诗、写诗展开。本课时先掌握一批与诗歌形式、修辞手法、情感表达相关的核心词，这是读懂诗歌、写好诗歌赏析的前提。` },
        { type: `keypoint`, label: `重点·学法`, text: `学习 Unit 5 核心词汇建议三步走：① <strong>记词性与搭配</strong>，如 convey 后接宾语、appreciate 后接名词或 v-ing；② <strong>在例句中理解</strong>，把单词放入诗歌语境；③ <strong>分类归纳</strong>，把“诗歌要素、修辞手法、情感动词”归为三组，便于记忆与写作迁移。` },
        { type: `paragraph`, text: `下表汇总本单元最常考的十五个核心词汇，建议结合课文句子记忆，并注意名词与动词、形容词之间的搭配关系。` },
        { type: `table`, headers: [`单词`, `词性`, `释义`], rows: [
          [`poem`, `n.`, `诗`],
          [`rhyme`, `n.`, `押韵；韵脚`],
          [`rhythm`, `n.`, `节奏`],
          [`metaphor`, `n.`, `隐喻`],
          [`simile`, `n.`, `明喻`],
          [`stanza`, `n.`, `诗节`],
          [`imagery`, `n.`, `意象`],
          [`emotion`, `n.`, `情感`],
          [`convey`, `vt.`, `传达`],
          [`appreciate`, `vt.`, `欣赏；感激`],
          [`interpret`, `vt.`, `解读；阐释`],
          [`literary`, `adj.`, `文学的`],
          [`form`, `n.`, `形式`],
          [`theme`, `n.`, `主题`],
          [`tone`, `n.`, `语气；基调`]
        ] },
        { type: `heading`, text: `二、核心词汇分类与常用短语` },
        { type: `paragraph`, text: `除单词外，本单元还要求学生掌握若干固定短语与搭配。这些短语在完形填空与语法填空里出现频率很高，尤其 consist of 中的 of 是介词，后面要接名词或动名词。` },
        { type: `list`, items: [
          `consist of：由……组成（无被动、无进行时）`,
          `in the form of：以……的形式`,
          `express one's feelings：表达（某人的）情感`,
          `relate to：与……相关；涉及`,
          `come across：偶然遇到；被理解`
        ] },
        { type: `table`, headers: [`短语`, `汉语释义`], rows: [
          [`consist of`, `由……组成`],
          [`in the form of`, `以……的形式`],
          [`express one's feelings`, `表达情感`],
          [`relate to`, `与……相关；涉及`],
          [`come across`, `偶然遇到；被理解`]
        ] },
        { type: `keypoint`, label: `重点·convey`, text: `动词 <strong>convey</strong> 意为“传达”，常接名词作宾语，如 convey emotion（传达情感）、convey a message（传达信息）。诗歌的功能往往就是 <strong>convey feelings</strong>（传达感受），这是 Unit 5 的高频搭配。` },
        { type: `paragraph`, text: `下面用 convey 造一个简单例句，体会它在诗歌语境中的用法。` },
        { type: `example`, label: `例句·convey`, text: `The poet uses simple words to <strong>convey</strong> his deep love for the sea.<br><br>句中 convey 是及物动词，后面直接接宾语 his deep love（他深沉的爱），意为“传达”。整句说：诗人用简单的词语来传达他对大海深沉的爱。` },
        { type: `warn`, label: `易错`, text: `注意 <strong>consist of</strong> 表示“由……组成”，它<strong>没有被动语态</strong>，也<strong>不用于进行时</strong>，不能说 is consisted of。另外 <strong>relate to</strong> 中 to 是介词，后接名词或代词；<strong>literary</strong> 是形容词（文学的），其名词形式是 literature（文学），二者词性不同，写作时不要混用。` },
        { type: `heading`, text: `三、诗歌的基本要素` },
        { type: `paragraph`, text: `读懂一首诗，先要认识它的“零件”。诗歌和散文不同，它讲究形式（form）、节奏（rhythm）、押韵（rhyme）和意象（imagery）。掌握这些要素对应的英文词，才能准确赏析。` },
        { type: `list`, items: [
          `poem 诗：文学作品的一种，语言凝练、富有节奏`,
          `stanza 诗节：诗歌中由若干诗行组成的一个段落`,
          `rhyme 押韵：诗行末尾发音相近，产生音乐感`,
          `rhythm 节奏：音节轻重长短有规律地交替`,
          `imagery 意象：用具体画面表达抽象感受`,
          `metaphor / simile：隐喻 / 明喻，两种比喻手法`
        ] },
        { type: `table`, headers: [`诗歌要素`, `英文`, `作用`], rows: [
          [`诗节`, `stanza`, `划分诗歌的结构层次`],
          [`押韵`, `rhyme`, `使诗句朗朗上口`],
          [`节奏`, `rhythm`, `形成音乐的韵律感`],
          [`意象`, `imagery`, `用画面传递情感`],
          [`隐喻`, `metaphor`, `把甲直接说成乙（暗比）`],
          [`明喻`, `simile`, `用 like / as 显式比较`]
        ] },
        { type: `keypoint`, label: `重点·rhyme 与 rhythm`, text: `<strong>rhyme</strong>（押韵）和 <strong>rhythm</strong>（节奏）只差一个字母，意思却不同：rhyme 指“尾音相像”（如 cat 与 hat），rhythm 指“轻重长短的规律”。记法：rhyme 中有字母 m，可联想“韵（yun）”；rhythm 中有 th，可联想“拍（pai）子”。` },
        { type: `example`, label: `例句·修辞手法`, text: `This poem is a <strong>metaphor</strong>: life is a journey.<br>That poem is a <strong>simile</strong>: life is like a journey.<br><br>隐喻 metaphor 直接把人生说成旅程（不用 like / as）；明喻 simile 则用 like / as 显式比较。两句都借助“旅程”这个意象 imagery 来表达对人生的理解。` },
        { type: `tip`, label: `记忆`, text: `记忆口诀：<strong>诗（poem）分节（stanza），尾押韵（rhyme），读有调（rhythm），画面成意象（imagery）</strong>。比喻分两种：暗比叫隐喻 metaphor，明比加 like / as 叫明喻 simile。多读短诗、建立画面感，词汇自然就记住了。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">诗歌结构示意图：诗节、诗行与尾韵</text><rect x="60" y="50" width="230" height="34" rx="6" fill="#9c56d4"/><text x="175" y="73" font-size="15" fill="#ffffff" text-anchor="middle">Stanza 1  第一诗节</text><text x="60" y="115" font-size="16" fill="#3a2a4a">The cat sat on the </text><text x="320" y="115" font-size="16" fill="#c0392b" font-weight="bold">mat,</text><text x="60" y="143" font-size="16" fill="#3a2a4a">A small and lazy </text><text x="300" y="143" font-size="16" fill="#c0392b" font-weight="bold">cat.</text><line x1="300" y1="119" x2="300" y2="147" stroke="#c0392b" stroke-width="1"/><text x="370" y="134" font-size="13" fill="#c0392b">尾韵 rhyme</text><rect x="60" y="175" width="230" height="34" rx="6" fill="#b87fd8"/><text x="175" y="198" font-size="15" fill="#ffffff" text-anchor="middle">Stanza 2  第二诗节</text><text x="60" y="240" font-size="16" fill="#3a2a4a">The dog ran to the </text><text x="320" y="240" font-size="16" fill="#c0392b" font-weight="bold">door,</text><text x="60" y="268" font-size="16" fill="#3a2a4a">And played upon the </text><text x="310" y="268" font-size="16" fill="#c0392b" font-weight="bold">floor.</text><line x1="310" y1="244" x2="310" y2="272" stroke="#c0392b" stroke-width="1"/><text x="380" y="259" font-size="13" fill="#c0392b">尾韵 rhyme</text><text x="340" y="320" font-size="14" fill="#3a2a4a" text-anchor="middle">诗（poem）由若干诗节（stanza）组成，每节含若干诗行，末尾词押韵即 rhyme</text></svg>`, caption: `图1　诗歌结构示意图：诗由诗节组成，每节有多行，尾词押韵形成 rhyme。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">核心词汇分类图：三组记忆更高效</text><rect x="40" y="55" width="180" height="60" rx="8" fill="#9c56d4"/><text x="130" y="82" font-size="15" fill="#ffffff" text-anchor="middle">诗歌要素</text><text x="130" y="103" font-size="12" fill="#ffffff" text-anchor="middle">poem/stanza/rhyme/rhythm/imagery</text><rect x="250" y="55" width="180" height="60" rx="8" fill="#b87fd8"/><text x="340" y="82" font-size="15" fill="#ffffff" text-anchor="middle">修辞手法</text><text x="340" y="103" font-size="12" fill="#ffffff" text-anchor="middle">metaphor/simile</text><rect x="460" y="55" width="180" height="60" rx="8" fill="#7a3fb0"/><text x="550" y="82" font-size="15" fill="#ffffff" text-anchor="middle">情感动词</text><text x="550" y="103" font-size="12" fill="#ffffff" text-anchor="middle">convey/appreciate/interpret</text><rect x="40" y="140" width="180" height="60" rx="8" fill="#b87fd8"/><text x="130" y="167" font-size="15" fill="#ffffff" text-anchor="middle">修饰词</text><text x="130" y="188" font-size="12" fill="#ffffff" text-anchor="middle">literary/emotional</text><rect x="250" y="140" width="180" height="60" rx="8" fill="#9c56d4"/><text x="340" y="167" font-size="15" fill="#ffffff" text-anchor="middle">内容与基调</text><text x="340" y="188" font-size="12" fill="#ffffff" text-anchor="middle">form/theme/tone</text><rect x="460" y="140" width="180" height="60" rx="8" fill="#b87fd8"/><text x="550" y="167" font-size="15" fill="#ffffff" text-anchor="middle">情感名词</text><text x="550" y="188" font-size="12" fill="#ffffff" text-anchor="middle">emotion/feelings</text><text x="340" y="250" font-size="14" fill="#3a2a4a" text-anchor="middle">把十五个核心词分成六类，结合例句逐个击破，记忆更牢固</text><text x="340" y="285" font-size="14" fill="#5a7a2a" text-anchor="middle">诗歌要素 + 修辞手法 + 情感表达，构成赏诗写诗的基本词汇网</text></svg>`, caption: `图2　核心词汇分类图：按“诗歌要素、修辞手法、情感表达”等分组记忆。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">常用短语搭配示意图</text><rect x="60" y="55" width="270" height="44" rx="8" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="195" y="83" font-size="15" fill="#3a2a4a" text-anchor="middle">consist of 由……组成</text><rect x="350" y="55" width="270" height="44" rx="8" fill="#ffffff" stroke="#b87fd8" stroke-width="2"/><text x="485" y="83" font-size="15" fill="#3a2a4a" text-anchor="middle">in the form of 以……形式</text><rect x="60" y="115" width="270" height="44" rx="8" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="195" y="143" font-size="15" fill="#3a2a4a" text-anchor="middle">express one's feelings 表达情感</text><rect x="350" y="115" width="270" height="44" rx="8" fill="#ffffff" stroke="#b87fd8" stroke-width="2"/><text x="485" y="143" font-size="15" fill="#3a2a4a" text-anchor="middle">relate to 与……相关</text><rect x="60" y="175" width="270" height="44" rx="8" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="195" y="203" font-size="15" fill="#3a2a4a" text-anchor="middle">come across 偶遇；被理解</text><rect x="350" y="175" width="270" height="44" rx="8" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="485" y="203" font-size="15" fill="#3a2a4a" text-anchor="middle">of / to 均为介词</text><text x="340" y="260" font-size="14" fill="#3a2a4a" text-anchor="middle">consist of 与 relate to 中的 of、to 都是介词，后接名词或 v-ing，不可接动词原形</text></svg>`, caption: `图3　常用短语搭配示意图：五个固定短语及其介词注意点。` },
        { type: `heading`, text: `四、本课小结` },
        { type: `list`, items: [
          `核心词汇：poem、stanza、rhyme、rhythm、imagery、metaphor、simile`,
          `情感类词：emotion、convey、appreciate、interpret、feelings`,
          `修饰与内容：literary、form、theme、tone`,
          `常用短语：consist of、in the form of、express one's feelings、relate to、come across`,
          `consist of 无被动无进行时；relate to 中 to 为介词`,
          `rhyme 押韵、rhythm 节奏，二者拼写相近但意思不同`
        ] }
      ],
      exercises: [
        { type: `choice`, question: `下列单词中表示“隐喻”的是？`, options: [`metaphor`, `simile`, `stanza`, `rhyme`], answer: `metaphor`, explanation: `metaphor 意为“隐喻”，是把甲事物直接说成乙事物、不用 like / as 的比喻手法。simile 是“明喻”，要用 like / as；stanza 是“诗节”；rhyme 是“押韵”。三者意思不同，故选 metaphor。` },
        { type: `choice`, question: `短语“由……组成”的英文是？`, options: [`consist of`, `in the form of`, `relate to`, `come across`], answer: `consist of`, explanation: `consist of 意为“由……组成”，注意它无被动语态、也不用于进行时。in the form of 意为“以……的形式”；relate to 意为“与……相关”；come across 意为“偶然遇到；被理解”。因此表示“由……组成”的是 consist of。` },
        { type: `choice`, question: `下列单词意为“形式”的是？`, options: [`theme`, `form`, `tone`, `emotion`], answer: `form`, explanation: `form 作名词时意为“形式”，如 in the form of（以……的形式）。theme 意为“主题”；tone 意为“语气、基调”；emotion 意为“情感”。三者均不表示“形式”，故选 form。` },
        { type: `fill`, question: `The poem ___ ___ (由……组成) three stanzas and a clear rhyme.（用本单元短语填空）`, answer: `consists of|consist of`, explanation: `句意为“这首诗由三个诗节和清晰的押韵组成”，表示“由……组成”的本单元短语是 consist of。主语 the poem 是单数，一般现在时谓语动词用 consists of；若不考虑三单也可写原形 consist of，故两解均可。` },
        { type: `fill`, question: `We can ___ (解读) the poem in different ways according to our own experience.（用本单元词汇填空）`, answer: `interpret`, explanation: `句意为“我们可以根据自己的经历以不同方式解读这首诗”，表示“解读、阐释”的本单元词汇是 interpret，它是及物动词，直接接宾语 the poem。convey 意为传达，appreciate 意为欣赏，均不符合“解读”的语境，故填 interpret。` }
      ]
    },

    /* ---------------- 第2课时 重点句型与核心语法 ---------------- */
    {
      id: `xb3-u5-l2`,
      name: `重点句型与核心语法`,
      chapter: `Unit 5 Poems`,
      difficulty: `基础`,
      content: [
        { type: `heading`, text: `一、Unit 5 重点句型` },
        { type: `paragraph`, text: `本单元课文包含几个非常实用且常考的重点句型。它们多用于诗歌赏析，语言简洁口语化。掌握结构和用法，既能帮助理解长难句，也能在写作中提升表达层次。` },
        { type: `keypoint`, label: `重点·句型1`, text: `句型 <strong>The poem consists of three stanzas.</strong> 表示“这首诗由三个诗节组成”。consist of 是<strong>不及物动词短语</strong>，无被动、无进行时，主语通常是整体，of 后接组成部分。` },
        { type: `example`, label: `例句1·组成`, text: `<strong>The poem consists of three stanzas.</strong><br><br>此句用 consist of 说明诗歌的构成，主语 the poem 是整体，three stanzas 是组成部分。注意不能说 is consisted of，因为 consist of 没有被动语态。` },
        { type: `keypoint`, label: `重点·句型2`, text: `句型 <strong>Written in simple language, the poem is easy to understand.</strong> 意为“这首诗用简单的语言写成，很容易理解”。过去分词短语 <strong>Written in simple language</strong> 作<strong>状语</strong>，表示被动且完成的动作，相当于 After it is written in simple language。` },
        { type: `example`, label: `例句2·分词作状语`, text: `<strong>Written in simple language, the poem is easy to understand.</strong><br><br>Written in simple language 是过去分词短语，修饰主句，说明“被用简单语言写成”。因诗是“被写”，故用过去分词 written，表示被动和完成。` },
        { type: `keypoint`, label: `重点·句型3`, text: `句型 <strong>We can relate to the emotion the poet conveys.</strong> 意为“我们能理解这位诗人传达的情感”。relate to 表示“与……产生共鸣、理解”，其中 to 是<strong>介词</strong>；the poet conveys 是省略 that 的定语从句，修饰 emotion。` },
        { type: `example`, label: `例句3·relate to`, text: `<strong>We can relate to the emotion the poet conveys.</strong><br><br>relate to 后接 the emotion（这种情感）作宾语；the poet conveys 是定语从句，修饰 emotion，意为“诗人所传达的”。整句说我们能共情诗人传达的情感。` },
        { type: `list`, items: [
          `The poem consists of ...：说明诗歌由几部分构成`,
          `Written in ... 过去分词作状语，表被动且完成`,
          `We can relate to ...：能理解、共情某事物`,
          `relate to 中 to 是介词，后接名词或代词`,
          `赏析诗歌常先说形式，再说语言特点，最后说情感`
        ] },
        { type: `heading`, text: `二、核心语法①：省略句` },
        { type: `paragraph`, text: `省略句是为了避免重复、让语言更简洁而省略某些成分的句子。在诗歌和口语里尤其常见。被省略的部分往往可以根据语境补出来，不影响理解。` },
        { type: `example`, label: `例句·省略句`, text: `<strong>If possible</strong>, I'd like to write a poem.<br><br>这句完整形式是 If <strong>it is</strong> possible, I'd like to write a poem.（如果可能的话，我想写一首诗）。这里省略了 it is，因为主句和从句主语都是“情况可能”，重复多余，于是省掉。` },
        { type: `keypoint`, label: `重点·省略句`, text: `省略句的要点：① 省略发生在<strong>主语和谓语重复</strong>时，如 If (it is) possible；② 常见结构还有 I'd like to (do it) 中重复动词的省略；③ 省略后句子成分仍完整可推，<strong>不能省略到影响理解</strong>。诗歌为押韵或节奏也会刻意省略。` },
        { type: `warn`, label: `易错`, text: `省略不等于乱删。只有<strong>上下文能明确补出</strong>的成分才可省略，比如 If (it is) possible 能补出 it is。若省略会造成歧义或成分残缺，则不可省。另外注意：被省略的多是主语+be 或重复动词，而不是随意丢掉关键名词或宾语。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">省略句示意：省略重复的主语与 be 动词</text><rect x="60" y="60" width="560" height="50" rx="8" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="340" y="91" font-size="16" fill="#3a2a4a" text-anchor="middle">完整：If it is possible, I'd like to write a poem.</text><rect x="60" y="135" width="560" height="50" rx="8" fill="#f3edfa" stroke="#b87fd8" stroke-width="2"/><text x="340" y="166" font-size="16" fill="#3a2a4a" text-anchor="middle">省略：If (it is) possible, I'd like to write a poem.</text><rect x="175" y="147" width="80" height="26" rx="4" fill="none" stroke="#c0392b" stroke-width="2" stroke-dasharray="4,3"/><text x="340" y="225" font-size="14" fill="#c0392b" text-anchor="middle">红色虚线框内 it is 被省略，因前文语境可推断出</text><text x="340" y="258" font-size="14" fill="#5a7a2a" text-anchor="middle">省略原则：重复的主语+be 可省，但不能省到让人看不懂</text></svg>`, caption: `图1　省略句示意：If possible 是 If it is possible 的省略，去掉重复的主语与 be 动词。` },
        { type: `heading`, text: `三、核心语法②：倒装句（表强调）` },
        { type: `paragraph`, text: `英语正常语序是“主语+谓语”。为了强调某一成分，可把它提到句首，同时将助动词或 be 动词移到主语之前，这叫倒装。诗歌常用倒装来突出意象或押韵。` },
        { type: `example`, label: `例句·倒装句`, text: `<strong>Beautiful are the poems</strong> he wrote.<br><br>正常语序是 The poems (he wrote) <strong>are beautiful</strong>. 这里把表语 beautiful 前置到句首加以强调，谓语动词 are 移到主语 the poems 之前，形成倒装。he wrote 是定语从句，修饰 poems。` },
        { type: `keypoint`, label: `重点·倒装句`, text: `倒装句的关键：① 多将<strong>表语或状语</strong>前置以示强调；② 结构变为“被强调成分 + 助动词/be + 主语”；③ 诗歌中倒装还能帮助<strong>押韵或调节节奏</strong>。识别时先把前置部分放回正常位置，句子意思就清楚了。` },
        { type: `warn`, label: `易错`, text: `倒装≠把整个谓语提前。常见错误是写成 Beautiful the poems are（没把 are 提前）。正确倒装须把 <strong>be 动词或助动词移到主语前</strong>，即 Beautiful are the poems。判断时先还原成“主语+be+表语”的正常语序即可验证。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">倒装句前后对比：强调表语前置</text><rect x="50" y="55" width="260" height="70" rx="8" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="180" y="85" font-size="15" fill="#3a2a4a" text-anchor="middle">正常语序</text><text x="180" y="110" font-size="14" fill="#5a7a2a" text-anchor="middle">The poems are beautiful.</text><rect x="370" y="55" width="260" height="70" rx="8" fill="#ffffff" stroke="#b87fd8" stroke-width="2"/><text x="500" y="85" font-size="15" fill="#3a2a4a" text-anchor="middle">倒装语序</text><text x="500" y="110" font-size="14" fill="#c0392b" text-anchor="middle">Beautiful are the poems.</text><line x1="180" y1="125" x2="500" y2="160" stroke="#7a3fb0" stroke-width="2"/><polygon points="500,160 492,152 492,168" fill="#7a3fb0"/><text x="340" y="180" font-size="13" fill="#3a2a4a" text-anchor="middle">表语 beautiful 被提到句首，be 动词 are 移到主语前</text><rect x="120" y="200" width="200" height="40" rx="6" fill="#9c56d4"/><text x="220" y="226" font-size="14" fill="#ffffff" text-anchor="middle">正常：主 + be + 表</text><rect x="360" y="200" width="200" height="40" rx="6" fill="#7a3fb0"/><text x="460" y="226" font-size="14" fill="#ffffff" text-anchor="middle">倒装：表 + be + 主</text><text x="340" y="285" font-size="14" fill="#3a2a4a" text-anchor="middle">还原口诀：把前置的表语放回主语后面，就能读懂倒装句</text></svg>`, caption: `图2　倒装句前后对比：正常“主+be+表”变为倒装“表+be+主”，突出被强调的表语。` },
        { type: `heading`, text: `四、核心语法③：非谓语动词作定语与状语` },
        { type: `paragraph`, text: `非谓语动词（动词的 -ing、过去分词、to do 形式）不能单独作谓语，但能像形容词、副词一样作定语或状语。诗歌里大量使用它们，让句子更紧凑、画面感更强。` },
        { type: `example`, label: `例句·作定语`, text: `a <strong>moving</strong> poem<br><br>moving 是 move 的现在分词，作<strong>定语</strong>修饰 poem，意为“一首感人的诗”。现在分词作定语通常表示<strong>主动且进行</strong>的含义，即“这首诗令人感动（主动使人感动）”。` },
        { type: `example`, label: `例句·作状语`, text: `<strong>Written</strong> in simple language, the poem is easy to understand.<br><br>Written 是 write 的过去分词，作<strong>状语</strong>修饰整个主句。过去分词作状语表示<strong>被动且完成</strong>，即“这首诗被用简单语言写成”，相当于 After it is written in simple language。` },
        { type: `keypoint`, label: `重点·非谓语动词`, text: `判断非谓语动词作定语还是状语，看它修饰谁：① 紧贴名词、修饰名词 → <strong>作定语</strong>（a moving poem）；② 修饰整个句子、表示时间/原因/条件 → <strong>作状语</strong>（Written..., the poem...）。现在分词表主动/进行，过去分词表被动/完成。` },
        { type: `tip`, label: `记忆`, text: `记忆口诀：<strong>挨着名词是定语，管整句是状语；现在分词主动进行，过去分词被动完成</strong>。看到 a moving poem 想“令人感动的（主动）”，看到 Written in... 想“被写成（被动完成）”。多对比这两个例句，就能分清。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">非谓语动词作定语与状语示意</text><rect x="50" y="55" width="270" height="90" rx="8" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="185" y="85" font-size="15" fill="#9c56d4" text-anchor="middle" font-weight="bold">作定语</text><text x="185" y="112" font-size="14" fill="#3a2a4a" text-anchor="middle">a moving poem</text><text x="185" y="135" font-size="13" fill="#5a7a2a" text-anchor="middle">moving 修饰 poem，主动/进行</text><rect x="360" y="55" width="270" height="90" rx="8" fill="#ffffff" stroke="#b87fd8" stroke-width="2"/><text x="495" y="85" font-size="15" fill="#7a3fb0" text-anchor="middle" font-weight="bold">作状语</text><text x="495" y="112" font-size="14" fill="#3a2a4a" text-anchor="middle">Written in simple language,</text><text x="495" y="135" font-size="13" fill="#c0392b" text-anchor="middle">Written 管整句，被动/完成</text><line x1="185" y1="160" x2="185" y2="195" stroke="#7a3fb0" stroke-width="2"/><line x1="495" y1="160" x2="495" y2="195" stroke="#7a3fb0" stroke-width="2"/><rect x="90" y="195" width="190" height="40" rx="6" fill="#9c56d4"/><text x="185" y="221" font-size="13" fill="#ffffff" text-anchor="middle">现在分词：主动/进行</text><rect x="400" y="195" width="190" height="40" rx="6" fill="#7a3fb0"/><text x="495" y="221" font-size="13" fill="#ffffff" text-anchor="middle">过去分词：被动/完成</text><text x="340" y="280" font-size="14" fill="#3a2a4a" text-anchor="middle">挨着名词 = 定语；管整句 = 状语，这是分辨的关键</text></svg>`, caption: `图3　非谓语动词作定语与状语示意：moving 作定语（主动），Written 作状语（被动完成）。` },
        { type: `heading`, text: `五、本课语法对比与小结` },
        { type: `table`, headers: [`语法点`, `作用`, `典型例句`], rows: [
          [`省略句`, `避免重复，使语言简洁`, `If (it is) possible, I'd write a poem.`],
          [`倒装句`, `强调表语/状语，调节节奏`, `Beautiful are the poems he wrote.`],
          [`非谓语作定语`, `修饰名词，紧凑表达`, `a moving poem（感人的诗）`],
          [`非谓语作状语`, `修饰全句，表时间/原因`, `Written in simple language, ...`]
        ] },
        { type: `list`, items: [
          `重点句型：consists of 表组成；Written in... 分词作状语；relate to 表共情`,
          `省略句：省掉重复的主语+be，如 If (it is) possible`,
          `倒装句：表语/状语前置，be 或助动词移到主语前`,
          `非谓语动词：作定语紧贴名词，作状语管整句`,
          `现在分词表主动/进行，过去分词表被动/完成`,
          `诗歌可打破常规语序，但规范语法仍需掌握`
        ] }
      ],
      exercises: [
        { type: `choice`, question: `在省略句 If possible, I'd like to write a poem. 中，被省略的部分是？`, options: [`If it is possible 中的 it is`, `主语 I`, `动词 write`, `宾语从句`], answer: `If it is possible 中的 it is`, explanation: `原句完整形式是 If it is possible, I'd like to write a poem. 因为主从句都表达“情况可能”，主语和 be 动词重复，于是省略了 it is，只留 possible。被省略的不是主语 I、动词 write 或宾语从句，而是条件从句里的 it is，故选 If it is possible 中的 it is。` },
        { type: `choice`, question: `倒装句 Beautiful are the poems he wrote. 还原成正常语序是？`, options: [`The poems he wrote are beautiful`, `Beautiful he wrote the poems`, `He wrote beautiful poems`, `Are the poems beautiful`], answer: `The poems he wrote are beautiful`, explanation: `倒装句把表语 beautiful 提到了句首，并把 be 动词 are 移到了主语 the poems 之前。还原时把 beautiful 放回主语之后、are 之后，即 The poems (he wrote) are beautiful。he wrote 是定语从句。其余选项结构都不对，故选 The poems he wrote are beautiful。` },
        { type: `choice`, question: `在非谓语动词短语 a moving poem 中，moving 的作用是？`, options: [`被动/完成`, `主动/进行`, `表将来`, `作谓语`], answer: `主动/进行`, explanation: `moving 是 move 的现在分词，在这里作定语修饰 poem，意为“令人感动的（诗）”，表示主动且进行的含义（诗使人感动）。过去分词才表被动/完成，to do 才表将来，且非谓语动词不能作谓语，故选主动/进行。` },
        { type: `fill`, question: `___ (write) in simple language, the poem is easy to understand.（用非谓语动词填空，表被动完成）`, answer: `Written`, explanation: `句意为“这首诗用简单的语言写成，很容易理解”。诗是“被写”，且“写成”发生在“容易理解”之前，故用过去分词 Written 作状语，表示被动且完成。不能填 Writing（主动）或 Wrote（过去式不能作非谓语状语），因此填 Written。` },
        { type: `fill`, question: `If ___ (possible), I'd like to write a poem about spring.（用省略句补全）`, answer: `possible`, explanation: `这是一个省略句，完整形式为 If it is possible。为避免重复主语和 be 动词，省略了 it is，只保留形容词 possible 作补语。因此不能填 it is 或 possible is，空格处只需填 possible 即可构成规范的省略结构。` }
      ]
    }

  );
})();
