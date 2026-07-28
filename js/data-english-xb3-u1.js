/* ============================================================
 * 高二英语 · 选择性必修 第三册 · Unit 1 Art 艺术
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
      id: `xb3-u1-l1`,
      name: `核心词汇与常用短语`,
      chapter: `Unit 1 Art`,
      difficulty: `基础`,
      content: [
        { type: `heading`, text: `一、Unit 1 Art 单元导览` },
        { type: `paragraph`, text: `Unit 1 Art 围绕“艺术”这一主题展开，课文会带我们走进美术馆、认识不同艺术流派、学会用英语介绍一幅画或一尊雕塑。本课时先把本单元最核心的词汇和短语整理出来，帮你在读课文明白意思、写作文时有词可用。` },
        { type: `keypoint`, label: `重点·学法`, text: `学习 Unit 1 核心词汇建议三步走：① <strong>记词性与搭配</strong>，如 be known for 后接名词；② <strong>在例句中理解</strong>，把单词放进“介绍艺术品”的语境；③ <strong>分类归纳</strong>，把绘画类、雕塑类、评价类词汇归成一组，方便记忆也方便写作迁移。` },
        { type: `heading`, text: `二、本单元核心词汇速记` },
        { type: `paragraph`, text: `下表汇总本单元最常考的十五个核心词汇。它们大多与“艺术形式、艺术评价、艺术影响”相关，建议结合课文句子一起记，并注意形容词与名词、动词之间的词性转换。` },
        { type: `table`, headers: [`单词`, `词性`, `汉语释义`], rows: [
          [`abstract`, `adj.`, `抽象的`],
          [`realistic`, `adj.`, `现实的；逼真的`],
          [`sculpture`, `n.`, `雕塑`],
          [`gallery`, `n.`, `美术馆；画廊`],
          [`exhibition`, `n.`, `展览`],
          [`masterpiece`, `n.`, `杰作`],
          [`impressionism`, `n.`, `印象派`],
          [`renaissance`, `n.`, `文艺复兴`],
          [`contemporary`, `adj.`, `当代的`],
          [`appreciate`, `v.`, `欣赏；感激`],
          [`critic`, `n.`, `评论家`],
          [`technique`, `n.`, `技巧；手法`],
          [`influence`, `n./v.`, `影响`],
          [`display`, `n./v.`, `展示；陈列`],
          [`range`, `n.`, `范围`]
        ] },
        { type: `list`, items: [
          `绘画评论类：abstract（抽象的）、realistic（逼真的）、masterpiece（杰作）、technique（手法）`,
          `场所与活动类：gallery（美术馆）、exhibition（展览）、display（陈列）`,
          `流派与时期类：impressionism（印象派）、renaissance（文艺复兴）、contemporary（当代的）`,
          `人与动作类：critic（评论家）、appreciate（欣赏）、sculpture（雕塑）、influence（影响）`
        ] },
        { type: `paragraph`, text: `除单词外，本单元还要求学生掌握若干固定短语与搭配。这些短语在完形填空与语法填空里出现频率很高，尤其是 range from...to... 与 on display，是考试中的高频考点。` },
        { type: `table`, headers: [`短语`, `汉语释义`], rows: [
          [`in particular`, `尤其；特别`],
          [`be known for`, `因……而闻名`],
          [`range from...to...`, `范围从……到……`],
          [`on display`, `展出`],
          [`appeal to`, `吸引；呼吁`],
          [`be regarded as`, `被视为`]
        ] },
        { type: `list`, items: [
          `in particular：常放句末或名词后，表示“尤其”，如 This painting in particular is my favourite`,
          `be known for：因某个特点或作品闻名，for 后接闻名的原因`,
          `range from...to...：描述范围跨度，主语常为 collection、works 等复数或集体名词`,
          `on display：作表语或后置定语，表示“正在展出”`,
          `appeal to：宾语是人时表示“吸引某人”，宾语是 cause 时表示“呼吁”`,
          `be regarded as：as 后接身份或性质，表示“被看作……”`
        ] },
        { type: `keypoint`, label: `重点·abstract 与 realistic`, text: `形容词 <strong>abstract</strong> 意为“抽象的”，常用来形容不追求形似、强调意念的现代作品；<strong>realistic</strong> 意为“现实的；逼真的”，形容画得像真的一样。两者意思相对，描述一幅画时可形成对比：an abstract painting（抽象画）与 a realistic painting（写实画）。` },
        { type: `warn`, label: `易错`, text: `动词 <strong>appreciate</strong> 意为“欣赏；感激”，后面若接“事/物”要用名词或动名词（v-ing），<strong>不能直接接人</strong>，不能说 appreciate you，应说 appreciate your help。另外 <strong>influence</strong> 既可作名词也可作动词，作动词时是及物的，如 The style influenced him（这种风格影响了他）。` },
        { type: `heading`, text: `三、词汇在真实语境中的运用` },
        { type: `paragraph`, text: `把单词放进“逛美术馆、聊一幅画”的语境里，记忆会更牢固。下面三句都来自本单元常见表达，注意加粗词的用法。` },
        { type: `example`, label: `例句1·介绍画作`, text: `The <strong>abstract</strong> painting is <strong>known for</strong> its use of light and colour.<br><br>句意：这幅抽象画以它对光与色彩的运用而闻名。known for 后接闻名的原因，abstract 修饰 painting 说明画的类型。` },
        { type: `example`, label: `例句2·美术馆场景`, text: `Many works are <strong>on display</strong> in the <strong>gallery</strong> and the <strong>exhibition</strong> <strong>appeals to</strong> visitors.<br><br>句意：许多作品在美术馆展出，这场展览吸引着游客。on display 表示“正在展出”，appeal to 此处意为“吸引”。` },
        { type: `keypoint`, label: `重点·range from...to...`, text: `短语 <strong>range from...to...</strong> 表示“范围从……到……”，用来说明一组事物的跨度。主语常为复数名词或集体名词，如 The exhibits range from paintings to sculptures（展品从绘画到雕塑都有）。注意 from 与 to 后接并列的同类词。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">艺术作品相关词汇图</text><rect x="60" y="70" width="170" height="70" rx="10" fill="#9c56d4"/><text x="145" y="100" font-size="17" fill="#ffffff" text-anchor="middle">painting</text><text x="145" y="124" font-size="13" fill="#ffffff" text-anchor="middle">绘画 / abstract</text><rect x="255" y="70" width="170" height="70" rx="10" fill="#b87fd8"/><text x="340" y="100" font-size="17" fill="#ffffff" text-anchor="middle">sculpture</text><text x="340" y="124" font-size="13" fill="#ffffff" text-anchor="middle">雕塑 / realistic</text><rect x="450" y="70" width="170" height="70" rx="10" fill="#7a3fb0"/><text x="535" y="100" font-size="17" fill="#ffffff" text-anchor="middle">gallery</text><text x="535" y="124" font-size="13" fill="#ffffff" text-anchor="middle">美术馆 / exhibition</text><line x1="145" y1="140" x2="145" y2="175" stroke="#3a2a4a" stroke-width="2"/><line x1="340" y1="140" x2="340" y2="175" stroke="#3a2a4a" stroke-width="2"/><line x1="535" y1="140" x2="535" y2="175" stroke="#3a2a4a" stroke-width="2"/><rect x="120" y="175" width="440" height="55" rx="10" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="340" y="200" font-size="15" fill="#3a2a4a" text-anchor="middle">works on display → masterpiece / technique</text><text x="340" y="225" font-size="14" fill="#5a7a2a" text-anchor="middle">作品在美术馆展出，评价其手法与是否为杰作</text><text x="340" y="280" font-size="14" fill="#3a2a4a" text-anchor="middle">art 主题词串：作品类型 → 展出场所 → 评价用语</text></svg>`, caption: `图1　艺术作品相关词汇图：从绘画、雕塑到美术馆与展览的词汇链条。` },
        { type: `heading`, text: `四、近义词与易混词辨析` },
        { type: `table`, headers: [`易混点`, `区别说明`], rows: [
          [`be known for / be known as`, `for 后接闻名原因；as 后接身份或类别`],
          [`appreciate / enjoy`, `appreciate 含“鉴赏、感激”之意，enjoy 偏“享受”`],
          [`influence / affect`, `两者皆表“影响”，influence 更常用于艺术、思想层面`],
          [`contemporary / modern`, `contemporary 指“当代的”，modern 指“现代的、新式的”`]
        ] },
        { type: `warn`, label: `易错`, text: `<strong>be known for</strong> 与 <strong>be known as</strong> 极易混：for 后面是“因什么而闻名”（原因），as 后面是“作为什么而著名”（身份/类别）。比较：The town is known for its art（因艺术闻名）与 The town is known as an art centre（作为艺术中心闻名）。填介词时一定先看后面接的是原因还是身份。` },
        { type: `tip`, label: `记忆口诀`, text: `记忆口诀：<strong>for 因特点，as 作身份；on display 是展出，range from 到 to 跨范围</strong>。把短语放进“介绍一幅画”的句子里反复读，比孤立背中文释义更有效。` },
        { type: `example`, label: `例句3·当代艺术`, text: `This <strong>contemporary</strong> artist is <strong>regarded as</strong> a master, and his <strong>technique</strong> <strong>influences</strong> many young painters.<br><br>句意：这位当代艺术家被视为大师，他的技法影响着许多年轻画家。regarded as 后接身份 master，influences 作及物动词用第三人称单数。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">abstract 与 realistic 对比网络</text><circle cx="170" cy="140" r="60" fill="#9c56d4"/><text x="170" y="136" font-size="17" fill="#ffffff" text-anchor="middle">abstract</text><text x="170" y="160" font-size="13" fill="#ffffff" text-anchor="middle">抽象的</text><circle cx="510" cy="140" r="60" fill="#b87fd8"/><text x="510" y="136" font-size="17" fill="#ffffff" text-anchor="middle">realistic</text><text x="510" y="160" font-size="13" fill="#ffffff" text-anchor="middle">逼真的</text><line x1="230" y1="140" x2="450" y2="140" stroke="#3a2a4a" stroke-width="3"/><polygon points="450,140 438,134 438,146" fill="#3a2a4a"/><text x="340" y="120" font-size="14" fill="#c0392b" text-anchor="middle">意思相对</text><text x="170" y="225" font-size="13" fill="#5a7a2a" text-anchor="middle">强调意念、不追求形似</text><text x="510" y="225" font-size="13" fill="#5a7a2a" text-anchor="middle">画得像真的一样</text><text x="340" y="265" font-size="14" fill="#3a2a4a" text-anchor="middle">描述一幅画时，二者常形成风格对比</text></svg>`, caption: `图2　abstract 与 realistic 对比网络：一对意思相对的绘画风格形容词。` },
        { type: `list`, items: [
          `核心词汇：abstract、realistic、sculpture、gallery、exhibition、masterpiece`,
          `流派与时期：impressionism、renaissance、contemporary`,
          `人物与动作：critic、appreciate、technique、influence、display、range`,
          `常用短语：in particular、be known for、range from...to...、on display、appeal to、be regarded as`,
          `易错点：appreciate 不接人；be known for 接原因，be known as 接身份`
        ] },
        { type: `svg`, svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">美术馆参观词汇链</text><rect x="40" y="90" width="150" height="60" rx="10" fill="#9c56d4"/><text x="115" y="118" font-size="16" fill="#ffffff" text-anchor="middle">enter gallery</text><text x="115" y="138" font-size="12" fill="#ffffff" text-anchor="middle">进入美术馆</text><rect x="265" y="90" width="150" height="60" rx="10" fill="#b87fd8"/><text x="340" y="118" font-size="16" fill="#ffffff" text-anchor="middle">see exhibition</text><text x="340" y="138" font-size="12" fill="#ffffff" text-anchor="middle">看展览</text><rect x="490" y="90" width="150" height="60" rx="10" fill="#7a3fb0"/><text x="565" y="118" font-size="16" fill="#ffffff" text-anchor="middle">appreciate</text><text x="565" y="138" font-size="12" fill="#ffffff" text-anchor="middle">欣赏杰作</text><line x1="190" y1="120" x2="265" y2="120" stroke="#3a2a4a" stroke-width="3"/><line x1="415" y1="120" x2="490" y2="120" stroke="#3a2a4a" stroke-width="3"/><text x="340" y="200" font-size="14" fill="#3a2a4a" text-anchor="middle">works on display → masterpiece / critic / technique</text><text x="340" y="235" font-size="14" fill="#5a7a2a" text-anchor="middle">逛馆流程：进馆 → 观展（作品展出）→ 欣赏并评价</text></svg>`, caption: `图3　美术馆参观词汇链：从进入美术馆、观看展览到欣赏杰作的词汇顺序。` }
      ],
      exercises: [
        { type: `choice`, question: `在句子 The painting is known for its use of light 中，短语 be known for 的汉语意思是？`, options: [`因……而闻名`, `作为……而闻名`, `被视为`, `吸引`], answer: `因……而闻名`, explanation: `be known for 是固定搭配，意为“因……而闻名”，for 后面接的是闻名的原因（its use of light 用光的特点）。be known as 才是“作为……而闻名”，be regarded as 是“被视为”，appeal to 是“吸引”，因此本题选“因……而闻名”。` },
        { type: `choice`, question: `We can see many great works ___ display in the gallery. 空格处应填的介词是？`, options: [`in`, `on`, `at`, `for`], answer: `on`, explanation: `on display 是固定短语，意为“展出、陈列”，常作表语或后置定语，如 works on display（展出的作品）。in、at、for 都不能与 display 构成这个固定搭配，因此空格应填 on。` },
        { type: `choice`, question: `The exhibition ___ from paintings to sculptures. 空格处应填的动词形式是？`, options: [`ranges`, `range`, `is ranging`, `ranged`], answer: `ranges`, explanation: `range from...to... 表示“范围从……到……”，主语 the exhibition 是单数，谓语动词用第三人称单数 ranges。该短语通常描述客观存在的跨度，不用进行时态，也不需用被动，因此选 ranges。` },
        { type: `fill`, question: `The museum is ___ (以……而闻名) its collection of masterpieces.（用 Unit 1 短语填空，known 已给出则填 known for）`, answer: `known for`, explanation: `句意为“这家博物馆以其杰作收藏而闻名”，表示“因……而闻名”且主语是物，应用 be known for，for 后接闻名的原因（its collection）。注意与 be known as（作为……闻名）区分，此处接的是原因而非身份，故填 known for。` },
        { type: `fill`, question: `Art forms of different periods ___ (范围) from ancient painting to contemporary sculpture.（用 range 的正确形式填空）`, answer: `range`, explanation: `主语 art forms of different periods 的中心词是 art forms，为复数，谓语动词用原形 range；range from...to... 表示“范围从古代绘画到当代雕塑”。若误把 periods 当主语则会错用 ranges，但 periods 是 of 的宾语，真正主语是复数 art forms，故填 range。` }
      ]
    },

    /* ---------------- 第2课时 重点句型与核心语法 ---------------- */
    {
      id: `xb3-u1-l2`,
      name: `重点句型与核心语法`,
      chapter: `Unit 1 Art`,
      difficulty: `基础`,
      content: [
        { type: `heading`, text: `一、Unit 1 重点句型` },
        { type: `paragraph`, text: `本单元课文包含几个介绍艺术作品和流派时非常实用的重点句型。掌握它们的结构，既能帮你读懂长难句，也能在口语和写作里更地道地“聊艺术”。下面三句都简单口语化，初中基础就能看懂。` },
        { type: `keypoint`, label: `重点·句型1`, text: `句型 <strong>The painting is known for its use of light.</strong> 用来介绍一幅画的特点，意为“这幅画以它对光的运用而闻名”。结构为 <strong>主语 + be known for + 特点</strong>，for 后接闻名的原因，是描述艺术作品的万能句。` },
        { type: `example`, label: `例句1·介绍画作`, text: `<strong>The painting is known for its use of light.</strong><br><br>这是介绍画作的常用句，主语 the painting，谓语 is known for，后面 its use of light 说明它因什么出名。换成雕塑可说 The sculpture is known for its shape。` },
        { type: `keypoint`, label: `重点·句型2`, text: `句型 <strong>I find this sculpture really impressive.</strong> 意为“我觉得这尊雕塑令人震撼”。结构为 <strong>I find + 名词 + 形容词</strong>，find 在这里是“觉得、认为”，后面直接跟宾语和补充说明的形容词，口语里极常用。` },
        { type: `example`, label: `例句2·表达感受`, text: `<strong>I find this sculpture really impressive.</strong><br><br>find 后接 this sculpture 作宾语，再接 impressive（令人印象深刻的）作宾语补足语。你也可以说 I find the exhibition attractive（我觉得这场展览很有吸引力）。` },
        { type: `keypoint`, label: `重点·句型3`, text: `句型 <strong>As is shown in the exhibition, art brings people together.</strong> 意为“正如展览所展示的，艺术把人们聚在一起”。<strong>As</strong> 引导一个非限制性从句，意思是“正如”，放在句首引出众所周知或前文提到的事实。` },
        { type: `example`, label: `例句3·As 引导`, text: `<strong>As is shown in the exhibition, art brings people together.</strong><br><br>As is shown in... 是固定表达，意为“正如……所展示的”，as 指代后面主句整个意思。类似还有 As we know（正如我们所知）。` },
        { type: `list`, items: [
          `句型1：The painting is known for...（这幅画以……闻名）— 介绍作品特点`,
          `句型2：I find this sculpture impressive（我觉得这雕塑令人震撼）— 表达感受`,
          `句型3：As is shown in..., ...（正如……所展示的）— 引出公认事实`
        ] },
        { type: `heading`, text: `二、核心语法①：不定式作表语` },
        { type: `paragraph`, text: `本册语法综合性变强，但道理不复杂。先看第一个：不定式（to do）放在系动词后面作表语，用来说明主语的内容或目的。` },
        { type: `keypoint`, label: `重点·不定式作表语`, text: `<strong>不定式作表语</strong>位于 <strong>系动词（be 等）之后</strong>，用来说明主语是什么内容或目的。主语常是 goal、dream、plan、task 这类抽象名词。形式：<strong>主语 + be + to do</strong>。例：Her goal is to become an artist（她的目标是成为艺术家）。` },
        { type: `example`, label: `例句·不定式作表语`, text: `Her goal is <strong>to become</strong> an artist.<br><br>主语 goal（目标）是抽象名词，系动词 is 后面用 to become an artist 这个不定式短语作表语，说明 goal 的具体内容是什么。若换主语 dream，可说 My dream is to paint a masterpiece。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">不定式作表语结构</text><rect x="60" y="80" width="160" height="55" rx="10" fill="#9c56d4"/><text x="140" y="105" font-size="16" fill="#ffffff" text-anchor="middle">主语(goal)</text><text x="140" y="127" font-size="12" fill="#ffffff" text-anchor="middle">抽象名词</text><rect x="260" y="80" width="120" height="55" rx="10" fill="#b87fd8"/><text x="320" y="112" font-size="16" fill="#ffffff" text-anchor="middle">系动词 is</text><rect x="420" y="80" width="200" height="55" rx="10" fill="#7a3fb0"/><text x="520" y="105" font-size="16" fill="#ffffff" text-anchor="middle">to become artist</text><text x="520" y="127" font-size="12" fill="#ffffff" text-anchor="middle">不定式作表语</text><line x1="220" y1="107" x2="260" y2="107" stroke="#3a2a4a" stroke-width="2"/><line x1="380" y1="107" x2="420" y2="107" stroke="#3a2a4a" stroke-width="2"/><text x="340" y="190" font-size="14" fill="#3a2a4a" text-anchor="middle">结构：主语 + 系动词 + to do（说明主语的内容/目的）</text><text x="340" y="225" font-size="14" fill="#5a7a2a" text-anchor="middle">例：Her goal is to become an artist.</text><text x="340" y="260" font-size="14" fill="#c0392b" text-anchor="middle">主语多为 goal / dream / plan 等抽象名词</text></svg>`, caption: `图1　不定式作表语结构：系动词之后用 to do 说明主语的内容或目的。` },
        { type: `warn`, label: `易错`, text: `不定式作表语时，主语通常是 <strong>goal、dream、plan、task</strong> 等表示“内容、目的”的抽象名词；若主语是 <strong>thing、question</strong> 等，后面更常用 <strong>to do 或不定式短语作主语补足</strong> 要分清。不要误把位于句首的 to do（作主语）当成表语：To learn art is fun 中 to learn 是主语，不是表语。` },
        { type: `heading`, text: `三、核心语法②：过去分词作状语` },
        { type: `paragraph`, text: `第二个语法点：过去分词（动词加 -ed 的形式）放在句首或句中作状语，常表示时间、原因或条件。它的关键特征是“被动、已完成”。` },
        { type: `keypoint`, label: `重点·过去分词作状语`, text: `<strong>过去分词作状语</strong>常置于句首，表示<b>时间、原因或条件</b>。由于过去分词本身有“<strong>被动、已完成</strong>”的含义，它逻辑上的主语就是主句主语，且主句主语承受了这个动作。例：Influenced by Impressionism, he changed his style（受印象派影响，他改变了风格）。` },
        { type: `example`, label: `例句·过去分词作状语`, text: `<strong>Influenced</strong> by Impressionism, he changed his style.<br><br>Influenced 是 influence 的过去分词，逻辑主语是 he，he 是“被影响”的，所以是被动；影响发生在 changed 之前，是已完成。整句相当于 Because he was influenced by Impressionism, he changed his style。` },
        { type: `svg`, svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">过去分词作状语示意</text><rect x="60" y="80" width="220" height="60" rx="10" fill="#9c56d4"/><text x="170" y="108" font-size="16" fill="#ffffff" text-anchor="middle">Influenced by ...</text><text x="170" y="130" font-size="12" fill="#ffffff" text-anchor="middle">过去分词(被动+已完成)</text><rect x="400" y="80" width="220" height="60" rx="10" fill="#7a3fb0"/><text x="510" y="108" font-size="16" fill="#ffffff" text-anchor="middle">he changed style</text><text x="510" y="130" font-size="12" fill="#ffffff" text-anchor="middle">主句(主语承受动作)</text><line x1="280" y1="110" x2="400" y2="110" stroke="#3a2a4a" stroke-width="3"/><polygon points="400,110 388,104 388,116" fill="#3a2a4a"/><text x="340" y="190" font-size="14" fill="#3a2a4a" text-anchor="middle">逻辑：主句主语 he 被 Impressionism 影响(被动)</text><text x="340" y="225" font-size="14" fill="#5a7a2a" text-anchor="middle">影响在先、改变在后 → 已完成</text><text x="340" y="260" font-size="14" fill="#c0392b" text-anchor="middle">等于 Because he was influenced..., he changed...</text></svg>`, caption: `图2　过去分词作状语示意：过去分词表被动、已完成，逻辑主语即主句主语。` },
        { type: `tip`, label: `记忆口诀`, text: `判断口诀：<strong>句首看见 -ed 分词，先想“谁被怎样了”</strong>。若主句主语是动作的承受者（被动）且动作已发生（已完成），那就是过去分词作状语。如果是“主动、进行”要用现在分词 -ing，不要混。` },
        { type: `warn`, label: `易错`, text: `过去分词作状语与主句主语必须存在<strong>逻辑上的被动关系</strong>。若主句主语是动作发出者，则要用<strong>现在分词（-ing）</strong>。比较：Influenced by art, he smiled（他被艺术打动，被动）与 Influencing others, the painting succeeded（画打动别人，主动用 -ing）。看错主被动是考试高频失分点。` },
        { type: `heading`, text: `四、核心语法③：定语从句（介词+关系代词）` },
        { type: `paragraph`, text: `第三个语法点：定语从句里，介词可以提到关系代词前面，形成“介词 + 关系代词（which / whom）”的结构。这在介绍地点、对象时特别常见。` },
        { type: `keypoint`, label: `重点·介词+关系代词`, text: `在定语从句中，<strong>介词可置于关系代词之前</strong>，构成 <strong>介词 + which / whom</strong>。which 指物，whom 指人，<strong>不能用 that</strong>。介词的选择取决于它与前面名词或后面动词的搭配。例：This is the gallery in which his works are displayed（这就是展出他作品的美术馆）。` },
        { type: `example`, label: `例句·in which`, text: `This is the gallery <strong>in which</strong> his works are displayed.<br><br>先行词 the gallery 指地点，从句 his works are displayed 缺地点状语，用 in which（相当于 where）。注意介词 in 来自 display ... in the gallery 的搭配，which 不能换成 that。` },
        { type: `table`, headers: [`结构`, `相当于`, `说明`], rows: [
          [`in which`, `where`, `先行词表地点，介词 in 来自搭配`],
          [`to whom`, `—`, `先行词指人，介词 to 来自动词/搭配`],
          [`for which`, `why(限 reason)`, `表示原因，介词 for 来自搭配`],
          [`on which`, `when(限日期)`, `表示时间，介词 on 来自搭配`]
        ] },
        { type: `svg`, svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">艺术流派对比（定语从句语境）</text><rect x="50" y="70" width="180" height="80" rx="10" fill="#9c56d4"/><text x="140" y="100" font-size="16" fill="#ffffff" text-anchor="middle">Renaissance</text><text x="140" y="124" font-size="13" fill="#ffffff" text-anchor="middle">文艺复兴·写实</text><rect x="250" y="70" width="180" height="80" rx="10" fill="#b87fd8"/><text x="340" y="100" font-size="16" fill="#ffffff" text-anchor="middle">Impressionism</text><text x="340" y="124" font-size="13" fill="#ffffff" text-anchor="middle">印象派·光色</text><rect x="450" y="70" width="180" height="80" rx="10" fill="#7a3fb0"/><text x="540" y="100" font-size="16" fill="#ffffff" text-anchor="middle">Contemporary</text><text x="540" y="124" font-size="13" fill="#ffffff" text-anchor="middle">当代·多元</text><line x1="140" y1="150" x2="140" y2="180" stroke="#3a2a4a" stroke-width="2"/><line x1="340" y1="150" x2="340" y2="180" stroke="#3a2a4a" stroke-width="2"/><line x1="540" y1="150" x2="540" y2="180" stroke="#3a2a4a" stroke-width="2"/><rect x="120" y="180" width="440" height="55" rx="10" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/><text x="340" y="205" font-size="15" fill="#3a2a4a" text-anchor="middle">the gallery in which they are shown</text><text x="340" y="240" font-size="14" fill="#5a7a2a" text-anchor="middle">介词+关系代词 in which 引出展出的场所</text><text x="340" y="280" font-size="14" fill="#3a2a4a" text-anchor="middle">三大流派可用定语从句串成“作品在美术馆展出”的语境</text></svg>`, caption: `图3　艺术流派对比：文艺复兴、印象派、当代艺术，可用 in which 引导的定语从句串联。` },
        { type: `list`, items: [
          `不定式作表语：主语 + be + to do，主语多为 goal/dream 等抽象名词`,
          `过去分词作状语：表被动、已完成，逻辑主语是主句主语`,
          `介词+关系代词：in which / to whom，不能用 that`,
          `介词选择看搭配：display in the gallery → in which`,
          `三大语法都常见于“介绍艺术作品/流派”的语境中`
        ] }
      ],
      exercises: [
        { type: `choice`, question: `不定式作表语在句子中的位置是？`, options: [`句首`, `系动词之后`, `宾语位置`, `定语位置`], answer: `系动词之后`, explanation: `不定式作表语位于系动词（如 be）之后，用来说明主语的内容或目的，结构为“主语 + be + to do”。它不在句首（句首 to do 多作主语），也不作宾语或定语，因此本题选“系动词之后”。` },
        { type: `choice`, question: `在 Influenced by Impressionism, he changed his style 中，Influenced 在句中充当什么成分？`, options: [`现在分词作状语`, `过去分词作状语`, `不定式`, `谓语动词`], answer: `过去分词作状语`, explanation: `Influenced 是 influence 的过去分词，放在句首作状语，表示原因“受印象派影响”。过去分词有被动、已完成的含义，逻辑主语 he 是“被影响”的。它不是现在分词（无主动含义），也不是不定式或谓语动词，因此选过去分词作状语。` },
        { type: `choice`, question: `This is the gallery ___ his works are displayed. 空格处应填？`, options: [`which`, `in which`, `that`, `where`], answer: `in which`, explanation: `先行词 the gallery 指地点，从句 his works are displayed 缺地点状语，来自搭配 display ... in the gallery，故用 in which（相当于 where）。介词+关系代词结构中不能用 that，which 单独缺介词也不对，where 虽可替换但不属于“介词+关系代词”形式，因此选 in which。` },
        { type: `fill`, question: `Her dream is ___ (成为) an artist.（用不定式作表语填空）`, answer: `to become`, explanation: `主语 dream 是抽象名词，系动词 is 之后应用不定式作表语来说明梦想的内容，become 的不定式形式为 to become。结构即 Her dream is to become an artist（她的梦想是成为艺术家），故填 to become。` },
        { type: `fill`, question: `___ (受印象派影响) by Impressionism, he developed a new style.（用过去分词作状语填空）`, answer: `Influenced`, explanation: `主句主语 he 是“被印象派影响”的，存在被动且影响已完成，故句首用过去分词 Influenced 作原因状语，相当于 Because he was influenced by Impressionism。若误用现在分词 Influencing 则变成主动“他影响印象派”，逻辑不通，因此填 Influenced。` }
      ]
    }

  );
})();
