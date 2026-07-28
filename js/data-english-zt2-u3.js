(function () {
  var v = gzGetVolume('english', 'zt2');
  if (!v) return;
  v.points.push(
    {
      id: `zt2-u3-l1`,
      name: `完形填空核心考点：逻辑关系与语法结构`,
      chapter: `完形与阅读 · 第3单元 完形填空（下）`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、什么是完形填空的逻辑关系' },
        { type: 'paragraph', text: '完形填空不是盯着一句话死看，而是要看句与句之间怎么连起来。前一句和后一句之间，往往藏着"因果、转折、并列"等关系，这种连接就叫逻辑关系。抓住关系，空就好填了。' },
        { type: 'table', headers: ['逻辑类型', '常见标志词'], rows: [
          ['因果关系', 'because, so, therefore, thus, as a result'],
          ['转折关系', 'but, however, though, yet'],
          ['并列关系', 'and, or, as well as'],
          ['递进关系', 'besides, furthermore, moreover'],
          ['对比关系', 'while, whereas, on the contrary']
        ] },
        { type: 'keypoint', label: '重点·标志词', text: '看到 <strong>because、but、and</strong> 这类词，就要立刻想到它后面的句子和前面是<strong>什么逻辑关系</strong>，这是做完形的第一把钥匙。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图1 五大逻辑关系分类（含常见标志词）</text><rect x="40" y="70" width="190" height="78" rx="8" fill="#9c56d4"/><text x="135" y="98" font-size="14" fill="#ffffff" text-anchor="middle">因果关系</text><text x="135" y="122" font-size="11" fill="#ffffff" text-anchor="middle">because so therefore</text><rect x="245" y="70" width="190" height="78" rx="8" fill="#b87fd8"/><text x="340" y="98" font-size="14" fill="#3a2a4a" text-anchor="middle">转折关系</text><text x="340" y="122" font-size="11" fill="#3a2a4a" text-anchor="middle">but however though</text><rect x="450" y="70" width="190" height="78" rx="8" fill="#9c56d4"/><text x="545" y="98" font-size="14" fill="#ffffff" text-anchor="middle">并列关系</text><text x="545" y="122" font-size="11" fill="#ffffff" text-anchor="middle">and or as well as</text><rect x="140" y="170" width="190" height="78" rx="8" fill="#b87fd8"/><text x="235" y="198" font-size="14" fill="#3a2a4a" text-anchor="middle">递进关系</text><text x="235" y="222" font-size="11" fill="#3a2a4a" text-anchor="middle">besides furthermore</text><rect x="350" y="170" width="190" height="78" rx="8" fill="#9c56d4"/><text x="445" y="198" font-size="14" fill="#ffffff" text-anchor="middle">对比关系</text><text x="445" y="222" font-size="11" fill="#ffffff" text-anchor="middle">while whereas</text><text x="340" y="290" font-size="13" fill="#3a2a4a" text-anchor="middle">看到标志词，就能判断空处前后是什么逻辑关系</text></svg>`, caption: '图1 完形填空五大逻辑关系及常见标志词分类' },
        { type: 'heading', text: '二、五种逻辑关系逐个讲' },
        { type: 'list', items: ['因果关系：前一句是原因，后一句是结果，常用 because、so、therefore。', '转折关系：前后意思相反或让步，常用 but、however、though。', '并列关系：前后地位相当、平起平坐，常用 and、or、as well as。', '递进关系：后一句比前一句更进一层，常用 besides、furthermore、moreover。', '对比关系：把两件事摆在一起比较不同，常用 while、whereas。'] },
        { type: 'paragraph', text: '这五种关系就像五把不同的锁，而标志词就是开锁的钥匙。平时多记这些词，考试时看到它们就能立刻判断方向。' },
        { type: 'example', label: '例句/例题', text: '前句：It rained heavily. 后句：<strong>Therefore</strong>, the match was put off. 这里 therefore 表示"因此"，是<strong>因果</strong>关系，空处自然填表示结果的词。' },
        { type: 'warn', label: '易错', text: '很多同学把 <strong>but</strong> 当成并列词，其实 but 表示<strong>转折</strong>，前后意思要相反。若前后是顺承，就不能选带 but 逻辑的词。' },
        { type: 'heading', text: '三、语法结构也是硬考点' },
        { type: 'paragraph', text: '除了逻辑关系，完形还考语法结构。说白了，就是填进去的词要让句子在语法上站得住脚，不能出现明显的语法错误。' },
        { type: 'list', items: ['时态与语态的一致性：全文时态要协调，主动被动要看主语。', '非谓语动词的句法功能：to do、doing、done 各有不同用法。', '各类从句的引导词选择：名词性、定语、状语从句该用哪个词。'] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图2 语法结构三大考点</text><rect x="40" y="60" width="190" height="240" rx="8" fill="#b87fd8"/><text x="135" y="90" font-size="14" fill="#3a2a4a" text-anchor="middle">时态与语态</text><text x="135" y="115" font-size="12" fill="#3a2a4a" text-anchor="middle">前后时态要一致</text><text x="135" y="138" font-size="12" fill="#3a2a4a" text-anchor="middle">主动被动看主语</text><text x="135" y="161" font-size="12" fill="#3a2a4a" text-anchor="middle">不突然换时态</text><rect x="245" y="60" width="190" height="240" rx="8" fill="#9c56d4"/><text x="340" y="90" font-size="14" fill="#ffffff" text-anchor="middle">非谓语动词</text><text x="340" y="115" font-size="12" fill="#ffffff" text-anchor="middle">to do 表目的</text><text x="340" y="138" font-size="12" fill="#ffffff" text-anchor="middle">doing 表主动进行</text><text x="340" y="161" font-size="12" fill="#ffffff" text-anchor="middle">done 表被动完成</text><rect x="450" y="60" width="190" height="240" rx="8" fill="#b87fd8"/><text x="545" y="90" font-size="14" fill="#3a2a4a" text-anchor="middle">从句引导词</text><text x="545" y="115" font-size="12" fill="#3a2a4a" text-anchor="middle">名词性从句</text><text x="545" y="138" font-size="12" fill="#3a2a4a" text-anchor="middle">定语从句</text><text x="545" y="161" font-size="12" fill="#3a2a4a" text-anchor="middle">状语从句</text><text x="340" y="330" font-size="13" fill="#3a2a4a" text-anchor="middle">三大语法考点是做完形填空的硬功夫</text></svg>`, caption: '图2 完形填空语法结构三大考点：时态语态、非谓语、从句引导词' },
        { type: 'keypoint', label: '重点·时态一致', text: '全文若用<strong>过去时</strong>，空处动词一般也用过去时；主语是动作承受者时，要用<strong>被动语态</strong>，这是最常扣分的地方。' },
        { type: 'example', label: '例句/例题', text: 'The book <strong>was written</strong> by a teacher. 主语 book 不能写，是被写，所以用被动 was written，这就是时态与语态一致。' },
        { type: 'tip', label: '技巧', text: '填动词前先默念两句话：<strong>这句话啥时态？主语是做还是被做？</strong>两个问题想清，语态和时态就稳了。' },
        { type: 'heading', text: '四、用上下文逻辑推出答案' },
        { type: 'paragraph', text: '空从来不是孤立的。它前面有一句"前句"，后面有一句"后句"，前后句靠 but、so 等逻辑词连起来。答案往往就藏在这条逻辑链里。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图3 上下文逻辑衔接：前句 空 后句</text><rect x="40" y="150" width="170" height="80" rx="8" fill="#b87fd8"/><text x="125" y="185" font-size="13" fill="#3a2a4a" text-anchor="middle">前句</text><text x="125" y="208" font-size="11" fill="#3a2a4a" text-anchor="middle">给出已知信息</text><rect x="255" y="150" width="170" height="80" rx="8" fill="#9c56d4"/><text x="340" y="185" font-size="13" fill="#ffffff" text-anchor="middle">空（待填）</text><text x="340" y="208" font-size="11" fill="#ffffff" text-anchor="middle">靠逻辑连接</text><rect x="470" y="150" width="170" height="80" rx="8" fill="#b87fd8"/><text x="555" y="185" font-size="13" fill="#3a2a4a" text-anchor="middle">后句</text><text x="555" y="208" font-size="11" fill="#3a2a4a" text-anchor="middle">给出另一信息</text><line x1="210" y1="190" x2="250" y2="190" stroke="#7a3fb0" stroke-width="2"/><text x="230" y="178" font-size="11" fill="#c0392b" text-anchor="middle">but/so</text><line x1="425" y1="190" x2="465" y2="190" stroke="#7a3fb0" stroke-width="2"/><text x="445" y="178" font-size="11" fill="#c0392b" text-anchor="middle">and/thus</text><text x="340" y="300" font-size="13" fill="#3a2a4a" text-anchor="middle">前句和后句靠 but、so 等逻辑词连起来，空就藏在中间</text></svg>`, caption: '图3 完形填空靠前句与后句的逻辑关系推出空处答案' },
        { type: 'example', label: '例句/例题', text: '前句：He was tired. 空：_____, he kept working. 后句有 kept working（继续工作），和累相反，所以用 <strong>however</strong>（然而），这是转折关系。' },
        { type: 'warn', label: '易错', text: '只盯着<strong>单句</strong>觉得通顺就选，是最大误区。单句可能对，但放到整段逻辑里就不对，一定要看前后句。' },
        { type: 'tip', label: '技巧', text: '读文章时，用手圈出 <strong>but、so、because</strong> 这些逻辑词，它们后面往往就是出题点，答案藏在附近。' },
        { type: 'paragraph', text: '逻辑关系和语法结构，一个管"意思通不通"，一个管"语法对不对"。两把钥匙一起用，完形填空的正确率就会明显上来。' },
        { type: 'list', items: ['先记熟五大逻辑关系和它们的标志词。', '填词前检查时态、语态、非谓语是否站得住。', '永远把空放进前后句的逻辑链里验证一遍。'] }
      ],
      exercises: [
        { type: 'choice', question: '在完形填空中，下面哪一组词常用来表示"因果关系"？', options: ['A. but, however', 'B. because, so, therefore', 'C. and, or', 'D. while, whereas'], answer: 'B. because, so, therefore', explanation: '因果关系说明一件事导致另一件事，常见标志词有 because、so、therefore、thus、as a result。选项A是转折、D是对比、C是并列，都不是因果，所以只有B全是因果标志词，选B。' },
        { type: 'choice', question: '下面哪个词用来表示"转折关系"，表示前后意思相反或让步？', options: ['A. and', 'B. besides', 'C. but', 'D. as well as'], answer: 'C. but', explanation: '转折关系表示前后意思发生转变或相反，常见标志词有 but、however、though、yet。and 和 as well as 是并列，besides 是递进，只有 but 表示转折，所以选C。' },
        { type: 'choice', question: '完形填空中关于"语法结构"，下面哪一项不属于三大常考点？', options: ['A. 时态与语态的一致性', 'B. 非谓语动词的句法功能', 'C. 各类从句的引导词选择', 'D. 单词的拼写比赛'], answer: 'D. 单词的拼写比赛', explanation: '完形填空的语法结构主要考查三点：时态与语态一致、非谓语动词的句法功能、从句引导词选择。单词拼写比赛既不是语法考点，也不是完形考查内容，所以选D。' },
        { type: 'fill', question: '完形填空中，表示"并列关系"的常见标志词有 and、or 和 _____。', answer: 'as well as', explanation: '并列关系表示前后内容地位相当、并列在一起，常见标志词包括 and、or 以及 as well as。as well as 意思是"也、和"，用来表示并列，所以填 as well as。' },
        { type: 'fill', question: '在完形填空中，如果空处主语是动作的承受者，动词就要用被动 _____。', answer: '语态|被动语态', explanation: '时态与语态一致是语法结构考点之一。当主语是动作承受者时要用被动语态，即 be 加过去分词。所以空处若主语与动作是被动关系，应填被动语态，写"语态"或"被动语态"均可。' }
      ]
    },
    {
      id: `zt2-u3-l2`,
      name: `完形填空干扰项规律与解题策略`,
      chapter: `完形与阅读 · 第3单元 完形填空（下）`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、干扰项是怎么"骗"你的' },
        { type: 'paragraph', text: '完形每个空有四个选项，只有一个最对，另外三个叫干扰项。出题人故意把干扰项做得很像正确答案，目的就是让你犹豫、选错。先看穿它的套路，就不容易被骗。' },
        { type: 'list', items: ['规律一：干扰项能与空前空后的文字形成某种搭配，看起来挺顺。', '规律二：干扰项从不同角度、不同层次设置，让你顾此失彼。', '规律三：干扰项遵循"语法合规、语境合理"两大铁律。', '规律四：常见干扰类型有形近词干扰、近义词干扰、逻辑误导。'] },
        { type: 'keypoint', label: '重点·双铁律', text: '所有干扰项都同时满足 <strong>语法合规</strong> 和 <strong>语境合理</strong>：单独看没错，放进文章也讲得通，但就是不如正确答案贴切。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图1 干扰项两大铁律</text><rect x="60" y="80" width="250" height="180" rx="10" fill="#9c56d4"/><text x="185" y="120" font-size="15" fill="#ffffff" text-anchor="middle">铁律一 语法合规</text><text x="185" y="150" font-size="12" fill="#ffffff" text-anchor="middle">单独看语法没错</text><text x="185" y="173" font-size="12" fill="#ffffff" text-anchor="middle">时态搭配都成立</text><text x="185" y="196" font-size="12" fill="#ffffff" text-anchor="middle">不是明显错误项</text><rect x="370" y="80" width="250" height="180" rx="10" fill="#b87fd8"/><text x="495" y="120" font-size="15" fill="#3a2a4a" text-anchor="middle">铁律二 语境合理</text><text x="495" y="150" font-size="12" fill="#3a2a4a" text-anchor="middle">放进文章讲得通</text><text x="495" y="173" font-size="12" fill="#3a2a4a" text-anchor="middle">符合上下文意思</text><text x="495" y="196" font-size="12" fill="#3a2a4a" text-anchor="middle">但未必是最佳</text><text x="340" y="310" font-size="13" fill="#3a2a4a" text-anchor="middle">错误选项同时满足两铁律，却不是最贴切的那一个</text></svg>`, caption: '图1 干扰项必须同时满足语法合规与语境合理两大铁律' },
        { type: 'heading', text: '二、四大设题规律细说' },
        { type: 'example', label: '形近词干扰', text: '选项出现 quite（相当）和 quiet（安静），长得像、拼得近，但意思不同。空处要"安静"，就选 quiet，别被形近词带偏。' },
        { type: 'example', label: '近义词干扰', text: 'say、speak、talk 都和"说"有关，但搭配不同：say a word、speak English、talk to sb。光看中文意思选会掉坑，要看搭配。' },
        { type: 'warn', label: '易错·逻辑误导', text: '有些干扰项逻辑上"说得通"，却和<strong>全文主旨</strong>相反。比如文章在讲坚持，干扰项却填"放弃"，单句顺但整篇违，这种最容易被骗。' },
        { type: 'tip', label: '识别', text: '排除干扰项时问自己：<strong>它是不是只顺了半句？</strong>如果只和前句顺、和主旨拧，多半是干扰项。' },
        { type: 'heading', text: '三、解题三步法' },
        { type: 'table', headers: ['步骤', '主要做法', '要留意'], rows: [
          ['第一步 宏观理解', '精读首句、速读全文、看末段', '先抓主题再选'],
          ['第二步 微观分析', '先易后难、用逻辑关系、词汇复现', '单句都对时选语篇最佳'],
          ['第三步 整体检查', '通读全文、代入细读复查', '不看已选重新做']
        ] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图2 解题三步流程图</text><rect x="30" y="130" width="180" height="90" rx="8" fill="#9c56d4"/><text x="120" y="165" font-size="14" fill="#ffffff" text-anchor="middle">第一步</text><text x="120" y="190" font-size="13" fill="#ffffff" text-anchor="middle">宏观理解</text><rect x="250" y="130" width="180" height="90" rx="8" fill="#b87fd8"/><text x="340" y="165" font-size="14" fill="#3a2a4a" text-anchor="middle">第二步</text><text x="340" y="190" font-size="13" fill="#3a2a4a" text-anchor="middle">微观分析</text><rect x="470" y="130" width="180" height="90" rx="8" fill="#9c56d4"/><text x="560" y="165" font-size="14" fill="#ffffff" text-anchor="middle">第三步</text><text x="560" y="190" font-size="13" fill="#ffffff" text-anchor="middle">整体检查</text><line x1="210" y1="175" x2="245" y2="175" stroke="#7a3fb0" stroke-width="2"/><line x1="430" y1="175" x2="465" y2="175" stroke="#7a3fb0" stroke-width="2"/><text x="340" y="280" font-size="13" fill="#3a2a4a" text-anchor="middle">宏观把握主题 → 逐空突破 → 通读验证</text></svg>`, caption: '图2 完形填空解题三步走：宏观理解、微观分析、整体检查' },
        { type: 'list', items: ['精读首句：首句一般不出空，是点明主题的主题句，也叫题眼。', '速读全文：不急着填空，先大致知道文章讲什么、什么态度。', '关注末段：末段常和首段呼应，帮你确认主旨方向。'] },
        { type: 'keypoint', label: '重点·首句是题眼', text: '原则永远是：<strong>先浏览大意，再选，最后通读</strong>。首句看懂了，整篇的方向就抓住了，后面填空才有准星。' },
        { type: 'paragraph', text: '宏观理解之后，再进入微观分析。这一步要沉到每个空里，用具体办法把答案"抠"出来。' },
        { type: 'list', items: ['先易后难：把有把握的空先填上，再回头攻难的。', '利用逻辑关系：看到 but、so 等词，判断前后是转折还是因果。', '词汇复现：前文出现过的词，后文常以同义或反义再次出现。', '语境推断：单句可能都对，语篇中只有一个最佳。'] },
        { type: 'example', label: '词汇复现', text: '前文写 "He was very happy." 后文空处 "_ was glad to help." 这里 happy 和后文的 glad 是同义复现，提示空处应填和 happy 一致的人或情绪，据此选对。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图3 词汇复现：前词与后空呼应</text><rect x="50" y="140" width="180" height="80" rx="8" fill="#b87fd8"/><text x="140" y="175" font-size="14" fill="#3a2a4a" text-anchor="middle">前文词 happy</text><text x="140" y="200" font-size="11" fill="#3a2a4a" text-anchor="middle">第一次出现</text><rect x="250" y="140" width="180" height="80" rx="8" fill="#9c56d4"/><text x="340" y="175" font-size="14" fill="#ffffff" text-anchor="middle">后文空 ____</text><text x="340" y="200" font-size="11" fill="#ffffff" text-anchor="middle">待填</text><rect x="450" y="140" width="180" height="80" rx="8" fill="#b87fd8"/><text x="540" y="175" font-size="14" fill="#3a2a4a" text-anchor="middle">同义 glad</text><text x="540" y="200" font-size="11" fill="#3a2a4a" text-anchor="middle">复现提示</text><line x1="230" y1="180" x2="245" y2="180" stroke="#7a3fb0" stroke-width="2"/><line x1="430" y1="180" x2="445" y2="180" stroke="#7a3fb0" stroke-width="2"/><text x="340" y="290" font-size="13" fill="#3a2a4a" text-anchor="middle">前文 happy，后文同义复现 glad，据此填出空处</text></svg>`, caption: '图3 利用前文的词在后文同义复现，推出空处应填的词' },
        { type: 'warn', label: '易错', text: '有人一上来就<strong>直接填空再通读</strong>，结果被局部顺眼带偏。正确顺序是先宏观、再微观、最后整体检查，顺序别乱。' },
        { type: 'heading', text: '四、第三步 整体检查' },
        { type: 'paragraph', text: '全部填完后，一定要从头到尾通读一遍。检查主旨是否鲜明、逻辑是否严密，不只看单句，要看整段整篇是否连贯。' },
        { type: 'tip', label: '复查', text: '两种好用的复查法：一是 <strong>代入短文细读</strong>，看是否顺口；二是 <strong>不看已选重新做</strong>，凭语感再选一次，两次一致就更稳。' },
        { type: 'keypoint', label: '重点·总策略', text: '宏观理解定方向，微观分析抠答案，整体检查保无误。三步循环用，<strong>先易后难、相信语篇</strong>，完形就不可怕。' },
        { type: 'list', items: ['考试时先花几十秒速读首句和末段，定调。', '遇到拿不准的空先跳过，做完有把握的再回头。', '最后必须通读一遍，用"重新做"或"代入读"复查。'] }
      ],
      exercises: [
        { type: 'choice', question: '完形填空干扰项的设置必须同时满足两大铁律，它们是？', options: ['A. 语法合规、语境合理', 'B. 越长越好、越难越好', 'C. 只考拼写、不考意思', 'D. 随机设置、没有规律'], answer: 'A. 语法合规、语境合理', explanation: '干扰项的设置遵循两大铁律：语法合规和语境合理。也就是说，错误选项单独看语法没错，放进上下文也似乎讲得通，但只有一个是最佳。选项B、C、D都不是规律，所以选A。' },
        { type: 'choice', question: '解题"第一步 宏观理解"中，我们最应该先精读的是？', options: ['A. 文章最后一个词', 'B. 首句（常常是主题句）', 'C. 直接去填每一个空', 'D. 只看图片'], answer: 'B. 首句（常常是主题句）', explanation: '第一步宏观理解要求把握文章主题，方法是精读首句。完形填空的首句一般不出空，往往是点明主题的主题句，读懂它就能抓住全文方向。其余做法都偏离了宏观理解，所以选B。' },
        { type: 'choice', question: '"词汇复现"是指文章中前面出现过的词，在后文以什么形式再次出现，帮助我们填出答案？', options: ['A. 原词、同义词或反义词', 'B. 完全不相干的词', 'C. 只会出现一次', 'D. 必须是拼音'], answer: 'A. 原词、同义词或反义词', explanation: '词汇复现指前面出现过的词在后文以原词、同义词或反义词形式再次出现，利用这种呼应就能确定空处答案。B、C、D都不符合复现规律，所以选A。' },
        { type: 'fill', question: '解题"第二步 微观分析"中，我们要做到先_____后难，从容易的空入手。', answer: '易', explanation: '第二步微观分析要求逐空突破，策略是先易后难。先把有把握、能快速确定的空填上，再回过头处理较难的空，这样能减少干扰、提高正确率。所以填"易"。' },
        { type: 'fill', question: '第三步整体检查建议用"_____已选重新做"或"代入短文细读"的方法复查答案。', answer: '不看', explanation: '第三步整体检查要求在填完后通读全文验证。常用的复查方法是"不看已选重新做"，即暂时忘记已选答案凭语感再选一次，或把答案代入短文细读看是否通顺。所以填"不看"。' }
      ]
    }
  );
})();
