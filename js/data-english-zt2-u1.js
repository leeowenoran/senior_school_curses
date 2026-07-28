(function () {
  var v = gzGetVolume('english', 'zt2');
  if (!v) return;
  v.points.push(
    {
      id: `zt2-u1-l1`,
      name: `课标要求的六项阅读能力`,
      chapter: `完形与阅读 · 第1单元 考试要求与命题趋势`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、课标为什么列出"六项阅读能力"' },
        { type: 'paragraph', text: '《普通高中英语课程标准》是高考英语命题的"说明书"。它告诉我们：学英语不只是背单词，更要会用英语去读、去想。其中对阅读和完形，课标明确提出了六项能力。这六项能力就像六把钥匙，能帮我们打开阅读题的大门。' },
        { type: 'list', items: ['理解主旨和主要意义：读完知道文章在讲什么。', '理解文中具体信息：能找到文章里的细节。', '根据上下文推断生词的意义：不查词典也能猜词。', '做出简单的判断和推理：从字里行间推出没明说的内容。', '理解文章的基本结构：看清文章是怎么组织起来的。', '理解作者的意图、观点和态度：知道作者赞成什么、反对什么。'] },
        { type: 'keypoint', label: '重点·六项是总指挥', text: '这<strong>六项能力</strong>是高考阅读与完形的"考试大纲"，<br>所有阅读题、完形题其实都在考查这六项中的某几项。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图1 课标要求的六项阅读能力一览</text><rect x="30" y="60" width="190" height="110" rx="10" fill="#9c56d4"/><text x="125" y="100" font-size="15" fill="#ffffff" text-anchor="middle">①理解主旨</text><text x="125" y="128" font-size="13" fill="#ffffff" text-anchor="middle">主要意义</text><rect x="245" y="60" width="190" height="110" rx="10" fill="#b87fd8"/><text x="340" y="100" font-size="15" fill="#3a2a4a" text-anchor="middle">②具体信息</text><text x="340" y="128" font-size="13" fill="#3a2a4a" text-anchor="middle">文中细节</text><rect x="460" y="60" width="190" height="110" rx="10" fill="#9c56d4"/><text x="555" y="100" font-size="15" fill="#ffffff" text-anchor="middle">③推断生词</text><text x="555" y="128" font-size="13" fill="#ffffff" text-anchor="middle">上下文猜义</text><rect x="30" y="200" width="190" height="110" rx="10" fill="#b87fd8"/><text x="125" y="240" font-size="15" fill="#3a2a4a" text-anchor="middle">④判断推理</text><text x="125" y="268" font-size="13" fill="#3a2a4a" text-anchor="middle">简单推断</text><rect x="245" y="200" width="190" height="110" rx="10" fill="#9c56d4"/><text x="340" y="240" font-size="15" fill="#ffffff" text-anchor="middle">⑤文章结构</text><text x="340" y="268" font-size="13" fill="#ffffff" text-anchor="middle">基本框架</text><rect x="460" y="200" width="190" height="110" rx="10" fill="#b87fd8"/><text x="555" y="240" font-size="15" fill="#3a2a4a" text-anchor="middle">⑥作者态度</text><text x="555" y="268" font-size="13" fill="#3a2a4a" text-anchor="middle">意图观点</text></svg>', caption: '图1 课标要求的六项阅读能力一览' },
        { type: 'heading', text: '二、逐项讲透：这六项能力到底是什么' },
        { type: 'paragraph', text: '下面用大白话一项一项说清楚。你也可以在平时做阅读时，对照这六项看看自己哪方面还比较弱，再补哪里。' },
        { type: 'list', items: ['理解主旨：考试常问"文章主要讲什么"，你要能用一个词或一句话概括。', '具体信息：考"某人在哪、做了什么"这类能在原文直接找到的细节。', '推断生词：文章里冒出一个生词，你能靠前后句猜出它大概什么意思。', '判断推理：文章没直说，但你根据线索能推出"接下来会怎样"或"为什么"。', '文章结构：知道第一段点题、中间举例、最后总结，这种框架感。', '作者态度：读出作者是在夸、在担心、还是在反对某件事。'] },
        { type: 'table', headers: ['能力', '考试怎么考'], rows: [['理解主旨和主要意义', '问文章主要讲什么，要能概括中心'], ['理解文中具体信息', '在原文直接找人名、时间、地点等细节'], ['根据上下文推断生词的意义', '给出生词，靠前后句线索猜出意思'], ['做出简单的判断和推理', '根据已知信息推出没明说的结论'], ['理解文章的基本结构', '看清段落顺序、首尾段的作用'], ['理解作者的意图、观点和态度', '读出作者赞成、担心还是反对']] },
        { type: 'heading', text: '三、能力一：理解主旨和主要意义' },
        { type: 'paragraph', text: '主旨就是"这篇文章到底想告诉我什么"。很多同学读了一大篇，却说不出中心，这就没抓住主旨。抓住主旨，做题才有方向，选项也更好判断。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图2 读完文章，抓出中心思想</text><rect x="50" y="70" width="250" height="190" rx="10" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="175" y="105" font-size="14" fill="#3a2a4a" text-anchor="middle">一篇讲环保的文章</text><line x1="65" y1="130" x2="285" y2="130" stroke="#b87fd8" stroke-width="3"/><line x1="65" y1="150" x2="285" y2="150" stroke="#b87fd8" stroke-width="3"/><line x1="65" y1="170" x2="240" y2="170" stroke="#b87fd8" stroke-width="3"/><line x1="65" y1="190" x2="285" y2="190" stroke="#b87fd8" stroke-width="3"/><line x1="65" y1="210" x2="200" y2="210" stroke="#b87fd8" stroke-width="3"/><line x1="305" y1="165" x2="368" y2="165" stroke="#7a3fb0" stroke-width="3"/><polygon points="368,158 386,165 368,172" fill="#7a3fb0"/><circle cx="470" cy="165" r="80" fill="#9c56d4"/><text x="470" y="158" font-size="14" fill="#ffffff" text-anchor="middle">中心思想</text><text x="470" y="182" font-size="14" fill="#ffffff" text-anchor="middle">要保护海洋</text></svg>', caption: '图2 读完文章，要能抓出中心思想（如：要保护海洋）' },
        { type: 'example', label: '例题', text: '读一篇讲海洋污染的文章，你能说出它的中心是"我们要保护海洋"，这就是抓住了主旨；<br>如果你只记住"海里有很多垃圾"这个细节，还不够，因为主旨是作者想让你明白的道理。' },
        { type: 'tip', label: '技巧', text: '找主旨的技巧：先看<strong>标题</strong>和<strong>首尾段</strong>，<br>再问自己"作者写这篇文章想让我知道什么"，用一句话概括出来。' },
        { type: 'heading', text: '四、能力三：根据上下文推断生词的意义' },
        { type: 'paragraph', text: '考试文章里一定会有你不认识的词。这时候不要慌，也不要马上跳过，而是看它前后的句子，找"线索词"来猜。这比硬背词典省事，也更像真实读英文的样子。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图3 用上下文线索猜出生词意思</text><rect x="40" y="60" width="600" height="70" rx="10" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="60" y="100" font-size="14" fill="#3a2a4a">句子：The baby was <tspan fill="#c0392b" font-weight="bold">famished</tspan>, so he ate three bowls of rice.</text><text x="60" y="165" font-size="13" fill="#5a7a2a">线索：ate three bowls（吃了三碗）说明他非常饿</text><line x1="340" y1="185" x2="340" y2="218" stroke="#7a3fb0" stroke-width="3"/><polygon points="333,212 347,212 340,224" fill="#7a3fb0"/><rect x="230" y="228" width="220" height="50" rx="10" fill="#9c56d4"/><text x="340" y="259" font-size="14" fill="#ffffff" text-anchor="middle">famished = 饿坏了</text></svg>', caption: '图3 用上下文线索（如"吃了三碗饭"）猜出 famished 是"饿坏了"' },
        { type: 'example', label: '例题', text: '句子：The baby was famished, so he ate three bowls of rice. 没学过 famished，但后面说"吃了三碗米饭"，说明他非常饿，所以 famished 大约就是"饿坏了"的意思。' },
        { type: 'warn', label: '易错', text: '易错：不要一遇到生词就<strong>停下来乱猜或想查词典</strong>，<br>高考不允许查词典，要学会用上下文这条"免费线索"。' },
        { type: 'keypoint', label: '重点·六者配合', text: '六类能力不是分开考的，<strong>常常一起出现</strong>：<br>一篇阅读可能同时考主旨、细节和作者态度。' },
        { type: 'list', items: ['做阅读时先读题，再带着问题找主旨和细节。', '遇到生词先划出来，读完一段再回头猜。', '做完题对照答案，想想它考的是六项里的哪一项。'] },
        { type: 'tip', label: '技巧', text: '做题顺序小技巧：<strong>先主旨、后细节、再推理</strong>，<br>这样不容易被干扰选项带偏。' },
        { type: 'paragraph', text: '把这六项能力记在心里，平时练习就有方向。下一节我们看看高考题目是怎么围绕这些能力来命题的。' }
      ],
      exercises: [
        { type: 'choice', question: '课标提出的六项阅读能力中，"读完一篇文章后能说出它主要讲什么"对应的是下面哪一项？', options: ['A. 理解文中具体信息', 'B. 理解主旨和主要意义', 'C. 根据上下文推断生词的意义', 'D. 理解文章的基本结构'], answer: 'B. 理解主旨和主要意义', explanation: '这项能力叫"理解主旨和主要意义"，就是读完后能用一句话概括文章中心。选项A是找细节，选项C是猜生词，选项D是看结构，都不等于概括中心意思，所以选B。' },
        { type: 'choice', question: '阅读中遇到不认识的单词，课标要求我们主要培养下面哪项能力？', options: ['A. 做出简单的判断和推理', 'B. 理解作者的意图、观点和态度', 'C. 根据上下文推断生词的意义', 'D. 理解文章的基本结构'], answer: 'C. 根据上下文推断生词的意义', explanation: '课标明确把"根据上下文推断生词的意义"列为六项能力之一，强调不靠词典、靠前后文线索猜词。选项A是推理，B是作者态度，D是结构，都不是猜词，所以选C。' },
        { type: 'choice', question: '哪一项能力要求我们读出作者是在赞成、担心还是反对某件事？', options: ['A. 理解作者的意图、观点和态度', 'B. 理解文中具体信息', 'C. 理解主旨和主要意义', 'D. 做出简单的判断和推理'], answer: 'A. 理解作者的意图、观点和态度', explanation: '作者赞成什么、担心什么、反对什么，属于"理解作者的意图、观点和态度"这一项。选项B是找细节，C是抓主旨，D是自己推理，都不直接对应作者态度，所以选A。' },
        { type: 'fill', question: '六项能力里，能说出文章中心意思的是"理解____和主要意义"。', answer: '主旨', explanation: '六项能力的第一项是"理解主旨和主要意义"，主旨就是文章的中心意思。读完文章能用一句话说出它主要讲什么，就是抓住了主旨，所以这里填"主旨"。' },
        { type: 'fill', question: '考试时遇到不认识的词，可以通过____里的线索来猜出它的意思。', answer: '上下文', explanation: '课标要求"根据上下文推断生词的意义"。上下文就是生词前后出现的句子，里面常有解释、举例或反义等线索，帮我们猜出词义，所以填"上下文"。' }
      ]
    },
    {
      id: `zt2-u1-l2`,
      name: `命题趋势`,
      chapter: `完形与阅读 · 第1单元 考试要求与命题趋势`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、高考命题在悄悄变化' },
        { type: 'paragraph', text: '高考英语的完形和阅读题，每年都在变"聪明"。它不再只考你认不认得单词，而是考你用英语思考、看世界的能力。下面用一张表告诉你最近的五大命题趋势。' },
        { type: 'list', items: ['核心素养导向：不只考语言，还考思维和品格。', '真实情境创设：文章聊的都是真事儿、热点事儿。', '高阶思维考查：要你推断作者没明说的态度。', '语篇结构深化：从隐蔽到明显，重视整体结构。', '思维品质聚焦：看重逻辑、批判和创新。'] },
        { type: 'table', headers: ['趋势维度', '具体表现'], rows: [['核心素养导向', '强化对语言能力、文化意识、思维品质和学习能力的综合考查'], ['真实情境创设', '完形填空选用生态保护、文化遗产保护等热点话题，强调真实语境中的运用'], ['高阶思维考查', '阅读理解增设观点态度推断题，考查对作者隐含意图的解读能力'], ['语篇结构深化', '语篇结构从"隐性"到"显性"，设空侧重从"细节衔接"到"主旨统领"'], ['思维品质聚焦', '强调对学生逻辑性、批判性、创新性思维的考查']] },
        { type: 'keypoint', label: '重点·核心变化', text: '命题的<strong>核心变化</strong>：从"考知识"走向"考能力"，<br>从"死记硬背"走向"真实运用"。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图1 高考完形与阅读五大命题趋势</text><rect x="40" y="60" width="520" height="36" rx="8" fill="#9c56d4"/><text x="55" y="84" font-size="14" fill="#ffffff">核心素养导向</text><rect x="40" y="110" width="600" height="36" rx="8" fill="#b87fd8"/><text x="55" y="134" font-size="14" fill="#3a2a4a">真实情境创设</text><rect x="40" y="160" width="470" height="36" rx="8" fill="#9c56d4"/><text x="55" y="184" font-size="14" fill="#ffffff">高阶思维考查</text><rect x="40" y="210" width="560" height="36" rx="8" fill="#b87fd8"/><text x="55" y="234" font-size="14" fill="#3a2a4a">语篇结构深化</text><rect x="40" y="260" width="500" height="36" rx="8" fill="#9c56d4"/><text x="55" y="284" font-size="14" fill="#ffffff">思维品质聚焦</text></svg>', caption: '图1 高考完形与阅读五大命题趋势' },
        { type: 'heading', text: '二、趋势一：真实情境创设' },
        { type: 'paragraph', text: '现在的完形填空特别喜欢用真实世界里发生的事当素材，比如生态保护、文化遗产保护。题目不是凭空编的，而是让你在真实语境里选词，看你会不会用。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图2 真实情境：生态保护短文变完形题</text><rect x="40" y="60" width="280" height="200" rx="10" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="55" y="95" font-size="13" fill="#3a2a4a">生态保护短文</text><line x1="55" y1="115" x2="300" y2="115" stroke="#b87fd8" stroke-width="3"/><line x1="55" y1="135" x2="300" y2="135" stroke="#b87fd8" stroke-width="3"/><text x="55" y="165" font-size="13" fill="#3a2a4a">保护海洋生物……</text><line x1="55" y1="190" x2="300" y2="190" stroke="#b87fd8" stroke-width="3"/><line x1="55" y1="210" x2="260" y2="210" stroke="#b87fd8" stroke-width="3"/><line x1="350" y1="160" x2="414" y2="160" stroke="#7a3fb0" stroke-width="3"/><polygon points="414,153 430,160 414,167" fill="#7a3fb0"/><rect x="430" y="75" width="210" height="170" rx="10" fill="#9c56d4"/><text x="535" y="115" font-size="13" fill="#ffffff" text-anchor="middle">完形填空题</text><text x="535" y="145" font-size="13" fill="#ffffff" text-anchor="middle">挖空：选一个动词</text><text x="535" y="175" font-size="13" fill="#ffffff" text-anchor="middle">A.保护 B.破坏</text><text x="535" y="205" font-size="13" fill="#ffffff" text-anchor="middle">C.忘记 D.害怕</text><text x="535" y="230" font-size="12" fill="#ffffff" text-anchor="middle">结合情境选A</text></svg>', caption: '图2 真实情境：一篇生态保护短文被改成完形填空题' },
        { type: 'example', label: '例题', text: '一篇讲"保护海洋生物"的短文，完形里挖了一个空："我们要____海洋动物"，选项是保护、破坏、忘记、害怕。结合"保护海洋"的真实情境，显然选"保护"。这就是情境题。' },
        { type: 'tip', label: '技巧', text: '应对情境题：先<strong>读懂这段在讲什么真实场景</strong>，<br>再想"在这个场景里人通常会怎么做"，答案往往就出来了。' },
        { type: 'heading', text: '三、趋势二：高阶思维与观点态度题' },
        { type: 'paragraph', text: '阅读理解里多了一种题：问作者是什么态度。作者不会直接写"我反对"，而是藏在字里行间，你要推理出来，这就是高阶思维的考查。' },
        { type: 'warn', label: '易错', text: '易错：不要用<strong>你自己的看法</strong>去答题，<br>一定要回到文章找作者留下的态度线索，比如用词是夸还是批评。' },
        { type: 'list', items: ['找态度词：看用的是褒义词还是贬义词。', '看作者举的例子是支持还是反对。', '别把"文中人物的观点"错当成"作者的观点"。'] },
        { type: 'heading', text: '四、趋势三：语篇结构从隐性到显性' },
        { type: 'paragraph', text: '过去完形填空的空多设在句子之间的细节衔接处，现在更看重"主旨统领"——也就是考你懂不懂整篇文章的结构和大意。结构从藏起来，变成摆明了考你。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图3 语篇结构：从隐性到显性</text><rect x="40" y="60" width="280" height="200" rx="10" fill="#b87fd8"/><text x="180" y="100" font-size="15" fill="#3a2a4a" text-anchor="middle">过去：隐性</text><text x="180" y="135" font-size="13" fill="#3a2a4a" text-anchor="middle">设空偏细节衔接</text><text x="180" y="165" font-size="13" fill="#3a2a4a" text-anchor="middle">结构藏在文字里</text><text x="180" y="195" font-size="13" fill="#3a2a4a" text-anchor="middle">要靠自己体会</text><line x1="340" y1="160" x2="404" y2="160" stroke="#7a3fb0" stroke-width="3"/><polygon points="404,153 420,160 404,167" fill="#7a3fb0"/><rect x="420" y="60" width="220" height="200" rx="10" fill="#9c56d4"/><text x="530" y="100" font-size="15" fill="#ffffff" text-anchor="middle">现在：显性</text><text x="530" y="135" font-size="13" fill="#ffffff" text-anchor="middle">设空偏主旨统领</text><text x="530" y="165" font-size="13" fill="#ffffff" text-anchor="middle">结构清楚标出来</text><text x="530" y="195" font-size="13" fill="#ffffff" text-anchor="middle">考查整体把握</text></svg>', caption: '图3 语篇结构：过去偏细节衔接，现在偏主旨统领' },
        { type: 'example', label: '例题', text: '旧题可能只问"横线处填哪个连词连上下句"；新题会让你选一个能概括全段的小标题，或者判断某段在全文起什么作用。这就是从隐性到显性。' },
        { type: 'keypoint', label: '重点·先搭框架', text: '结构显性化提醒我们：<strong>读完要先搭框架</strong>，<br>知道每段干什么，再去做空，才不会迷路。' },
        { type: 'tip', label: '技巧', text: '读结构技巧：给每段<strong>标一个小标题</strong>，<br>全文脉络一眼就清楚，主旨题和结构题都不怕。' },
        { type: 'warn', label: '误区', text: '常见误区：只盯着单个空所在的句子，<br>不看前后段，容易掉进"局部对、整体错"的陷阱。' },
        { type: 'list', items: ['复习时多读时事类、科普类真实文章。', '练态度题先划出褒贬词。', '做完形先通读全文再下笔。'] },
        { type: 'paragraph', text: '看清这五大趋势，复习就有了靶心：少背死知识，多练真本事。' }
      ],
      exercises: [
        { type: 'choice', question: '命题趋势中"真实情境创设"常选用下面哪类话题来命制完形填空？', options: ['A. 个人随便编的小故事', 'B. 生态保护、文化遗产保护等热点', 'C. 完全虚构的童话', 'D. 只有字母没有意义的短文'], answer: 'B. 生态保护、文化遗产保护等热点', explanation: '"真实情境创设"强调在真实语境中运用语言，完形常选用生态保护、文化遗产保护等现实热点话题。选项A、C是虚构内容，D无意义，都不符合"真实情境"要求，所以选B。' },
        { type: 'choice', question: '阅读理解中增设"观点态度推断题"，主要是为了考查什么？', options: ['A. 学生会不会写汉字', 'B. 学生对作者隐含意图的解读能力', 'C. 学生跑得快不快', 'D. 学生会不会画画'], answer: 'B. 学生对作者隐含意图的解读能力', explanation: '观点态度推断题考查的是从字里行间读出作者没明说的态度，也就是解读隐含意图的能力。选项A、C、D都与英语阅读考查无关，所以正确选项是B。' },
        { type: 'choice', question: '语篇结构"从隐性到显性"的变化，意味着设空侧重从什么转向什么？', options: ['A. 从"细节衔接"到"主旨统领"', 'B. 从"主旨统领"到"细节衔接"', 'C. 从"中文"到"英文"', 'D. 从"长篇"到"短篇"'], answer: 'A. 从"细节衔接"到"主旨统领"', explanation: '命题趋势指出，语篇结构从隐性走向显性，设空重点由考句子间的细节衔接，转向考能统领全文的主旨。选项B说反了，C、D与结构无关，所以选A。' },
        { type: 'fill', question: '命题强调对语言能力、文化意识、思维品质和____这四大学科核心素养的综合考查。', answer: '学习能力', explanation: '英语学科核心素养包括语言能力、文化意识、思维品质和学习能力四个方面。高考命题强调这四者的综合考查，所以这里填"学习能力"。' },
        { type: 'fill', question: '阅读理解中增设____题，用来考查学生对作者隐含意图的解读能力。', answer: '观点态度推断|观点态度', explanation: '为考查高阶思维，阅读理解增设了观点态度推断题，要求学生推断作者字里行间的态度和意图。填"观点态度推断"或"观点态度"都符合课标表述。' }
      ]
    }
  );
})();
