(function () {
  var v = gzGetVolume('english', 'zt4');
  if (!v) return;
  v.points.push(
    {
      id: `zt4-u2-l1`,
      name: `评分原则与评分维度`,
      chapter: `书面表达 · 第2单元 评分标准`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、整体评分法：阅卷老师怎么给你打分' },
        { type: 'paragraph', text: '高考英语书面表达（也就是作文）采用的是"整体评分法"。直白地说，阅卷老师不会像改数学题那样逐条算分，而是读完你的整篇文章，凭整体印象给你一个分数档次。这就好比看一部电影，你记住的是整体好不好看，而不是数它有几处穿帮。' },
        { type: 'list', items: ['看整体：读完整篇作文，从大面上判断好坏，而不是逐句挑错。', '先定档：根据整体印象，先把作文归到某一分数档次（比如第五档、第四档）。', '再微调：在同一个档次里，根据细节好坏稍微上下浮动几分。', '重综合：把内容、语言、结构放在一起看，不孤立地盯某一个点。'] },
        { type: 'keypoint', label: '重点·评分方法', text: '核心：书面表达用<strong>整体评分法</strong>，<br>先给整体印象定档次，再在档次内微调，不是逐条扣分。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图1 整体评分法流程：整体印象→定档→微调</text><rect x="40" y="90" width="160" height="150" rx="12" fill="#9c56d4"/><text x="120" y="150" font-size="17" fill="#ffffff" text-anchor="middle">整体印象</text><text x="120" y="185" font-size="13" fill="#ffffff" text-anchor="middle">读完整篇</text><text x="120" y="208" font-size="13" fill="#ffffff" text-anchor="middle">形成总感</text><line x1="205" y1="165" x2="245" y2="165" stroke="#7a3fb0" stroke-width="3"/><polygon points="245,158 262,165 245,172" fill="#7a3fb0"/><rect x="260" y="90" width="160" height="150" rx="12" fill="#b87fd8"/><text x="340" y="150" font-size="17" fill="#3a2a4a" text-anchor="middle">定档</text><text x="340" y="185" font-size="13" fill="#3a2a4a" text-anchor="middle">归入某档</text><text x="340" y="208" font-size="13" fill="#3a2a4a" text-anchor="middle">如第五档</text><line x1="425" y1="165" x2="465" y2="165" stroke="#7a3fb0" stroke-width="3"/><polygon points="465,158 482,165 465,172" fill="#7a3fb0"/><rect x="480" y="90" width="160" height="150" rx="12" fill="#9c56d4"/><text x="560" y="150" font-size="17" fill="#ffffff" text-anchor="middle">微调</text><text x="560" y="185" font-size="13" fill="#ffffff" text-anchor="middle">档内浮动</text><text x="560" y="208" font-size="13" fill="#ffffff" text-anchor="middle">上下几分</text><text x="340" y="300" font-size="13" fill="#5a7a2a" text-anchor="middle">不是逐条扣分，而是先看整体再精修</text></svg>', caption: '图1 整体评分法三步走：先整体印象，再定档次，最后在档内微调' },
        { type: 'heading', text: '二、评分看哪四个方面（评分维度）' },
        { type: 'paragraph', text: '虽然说是整体打分，但老师心里有一把尺子，尺子上刻着四个维度。一篇好作文要在四个方面都站得住：内容完整、语言质量、篇章结构、交际效果。下面这张表把每个维度老师最看重的点列出来。' },
        { type: 'table', headers: ['评分维度', '关键要求'], rows: [['内容完整', '涵盖题目所有要点，不遗漏重要内容'], ['语言质量', '词汇、语法准确，适当使用高级词汇和复杂句式'], ['篇章结构', '结构清晰、逻辑连贯，开头—主体—结尾层次分明'], ['交际效果', '清晰、准确、有条理地完成沟通任务']] },
        { type: 'list', items: ['内容完整：题目让你写三件事，你就得把三件都写上，少一件就掉档。', '语言质量：单词拼对、时态用对，再点缀几个漂亮句式，分数更稳。', '篇章结构：有开头有结尾，中间分段清楚，读着不晕。', '交际效果：说白了就是"对方看得懂、愿意看、被说动"。'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图2 四维评分雷达图：内容·语言·结构·交际</text><line x1="340" y1="80" x2="340" y2="320" stroke="#b87fd8" stroke-width="2"/><line x1="120" y1="200" x2="560" y2="200" stroke="#b87fd8" stroke-width="2"/><polygon points="340,120 480,200 340,280 200,200" fill="#9c56d4" fill-opacity="0.35" stroke="#7a3fb0" stroke-width="2"/><text x="340" y="70" font-size="15" fill="#3a2a4a" text-anchor="middle">内容完整</text><text x="572" y="205" font-size="15" fill="#3a2a4a" text-anchor="middle">语言质量</text><text x="340" y="345" font-size="15" fill="#3a2a4a" text-anchor="middle">篇章结构</text><text x="108" y="205" font-size="15" fill="#3a2a4a" text-anchor="middle">交际效果</text><text x="340" y="300" font-size="13" fill="#5a7a2a" text-anchor="middle">四维度综合达标，才能拿高分</text></svg>', caption: '图2 四个评分维度像雷达四角，缺一不可，要综合看' },
        { type: 'example', label: '例题', text: '比如题目要求"写一封信邀请外教参加中文角"。内容维度要求你写清活动时间、地点、邀请原因；语言维度要求用词准确、句式多样；结构维度要求问候开头、主体说明、结尾致谢；交际维度要求对方读完真想来。四个维度一起达标，才能拿高分。' },
        { type: 'heading', text: '三、重要提醒：老师不只看语法错误' },
        { type: 'paragraph', text: '很多同学以为作文就是"语法越少错越好"，于是一写作文就紧张，生怕用错一个时态。其实整体评分法更看重你"说清楚了没有、说完整了没有、说通顺了没有"。语法当然重要，但它只是语言质量这个维度里的一部分，不是全部。' },
        { type: 'warn', label: '易错', text: '易错：别以为<strong>零语法错误就一定高分</strong>，<br>如果要点漏了、逻辑乱了，照样掉档；也别因为怕错就不敢写，把意思说清楚更关键。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图3 提醒：老师看综合效果，不只盯语法错误</text><rect x="40" y="80" width="280" height="200" rx="12" fill="#9c56d4"/><text x="180" y="130" font-size="17" fill="#ffffff" text-anchor="middle">老师综合看</text><text x="180" y="170" font-size="14" fill="#ffffff" text-anchor="middle">内容全不全</text><text x="180" y="198" font-size="14" fill="#ffffff" text-anchor="middle">逻辑顺不顺</text><text x="180" y="226" font-size="14" fill="#ffffff" text-anchor="middle">对方懂没懂</text><rect x="360" y="80" width="280" height="200" rx="12" fill="#c0392b"/><text x="500" y="130" font-size="17" fill="#ffffff" text-anchor="middle">不只盯语法</text><text x="500" y="172" font-size="14" fill="#ffffff" text-anchor="middle">漏要点照样掉档</text><text x="500" y="200" font-size="14" fill="#ffffff" text-anchor="middle">逻辑乱照样低分</text><text x="500" y="228" font-size="14" fill="#ffffff" text-anchor="middle">别因怕错不敢写</text><text x="340" y="320" font-size="13" fill="#5a7a2a" text-anchor="middle">把意思说清楚，比零语法错误更关键</text></svg>', caption: '图3 阅卷看综合效果，语法只是其中一角，别只盯它' },
        { type: 'tip', label: '技巧', text: '小技巧：写完先问自己三句话——<strong>要点全了吗？读得通顺吗？对方看懂了吗？</strong><br>三句都答"是"，这篇作文就基本站住了。' },
        { type: 'list', items: ['把题目要求逐条列出来，写到一条划掉一条，保证内容完整。', '每段开头用连接词，让结构一眼能看清。', '用对基础语法是底线，在稳妥的前提下再升级词汇句式。', '永远把"把事说清楚"放在"秀高级词"前面。'] },
        { type: 'keypoint', label: '重点·记牢', text: '一句话记住评分：<strong>内容、语言、结构、交际</strong>四维度综合看，<br>整体印象定档，再微调。' },
        { type: 'example', label: '生动对比', text: '同样写"我喜欢读书"，你说 "I like reading books because it makes me happy." 简单但清楚、完整，老师会判为达标；另一个同学硬写 "I am enamored of perusing literature." 词很"高级"却生硬别扭，效果反而不如前者。这正说明整体评分看的是综合效果。' },
        { type: 'paragraph', text: '小结：书面表达不是语法填空题，它是一次真实的沟通。阅卷老师用整体评分法，从内容、语言、结构、交际四个维度综合判断。下节课我们讲一个贯穿始终的核心原则——语言要服务于内容。' }
      ],
      exercises: [
        { type: 'choice', question: '高考英语书面表达主要采用的是下列哪种评分方法？', options: ['A. 逐题扣分法', 'B. 整体评分法', 'C. 机器阅卷法', 'D. 只看字数法'], answer: 'B. 整体评分法', explanation: '书面表达采用整体评分法，阅卷老师读完整篇作文后凭整体印象定档次，再在档内微调，而不是逐条扣分或用机器阅卷，所以正确选项是B。' },
        { type: 'choice', question: '整体评分法的正确步骤顺序是下列哪一种？', options: ['A. 定档→微调→看整体印象', 'B. 看整体印象→定档→微调', 'C. 微调→看整体→定档', 'D. 只看语法→定档'], answer: 'B. 看整体印象→定档→微调', explanation: '整体评分法先读完整篇形成整体印象，再据此把作文归入某一分数档次，最后在该档次内根据细节上下微调，所以顺序为B。' },
        { type: 'choice', question: '下列哪项不属于书面表达的四个评分维度？', options: ['A. 内容完整', 'B. 语言质量', 'C. 篇章结构', 'D. 汉字书写'], answer: 'D. 汉字书写', explanation: '四个评分维度是内容完整、语言质量、篇章结构和交际效果。汉字书写不是英语作文的评分维度，所以选D。' },
        { type: 'fill', question: '四个评分维度中，要求"涵盖题目所有要点，不遗漏重要内容"的是____。', answer: '内容完整', explanation: '内容完整是四个评分维度之首，核心要求就是写全题目给定的所有要点，不遗漏重要内容。所以这里填"内容完整"。' },
        { type: 'fill', question: '整体评分法先根据整体印象把作文归入某一分数____，再在该范围内微调。', answer: '档次|档', explanation: '整体评分法的流程是：先形成整体印象，把作文归入某一分数档次（如第五档），然后在档次内做几分的上下微调。所以这里填"档次"。' }
      ]
    },
    {
      id: `zt4-u2-l2`,
      name: `核心原则：语言服务于内容`,
      chapter: `书面表达 · 第2单元 评分标准`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、核心原则一句话：语言服务于内容' },
        { type: 'paragraph', text: '书面表达最核心的一条原则只有八个字：语言服务于内容。翻译过来就是——你用的单词和句子，是为了把事情说清楚而存在的工具，不是用来炫技的装饰品。阅卷老师最想看到的，是你"清晰、准确、有条理地完成了沟通任务"，而不是你背了多少生僻词。' },
        { type: 'keypoint', label: '重点·核心原则', text: '核心原则：<strong>语言是工具，内容是目的</strong>，<br>用对、用顺的语言把意思送达，比堆砌华丽词藻更重要。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图1 核心原则：语言（工具）服务于内容（目的）</text><rect x="60" y="110" width="200" height="140" rx="12" fill="#b87fd8"/><text x="160" y="170" font-size="18" fill="#3a2a4a" text-anchor="middle">语言</text><text x="160" y="200" font-size="14" fill="#3a2a4a" text-anchor="middle">工具·手段</text><text x="160" y="226" font-size="13" fill="#3a2a4a" text-anchor="middle">词语句式</text><line x1="265" y1="180" x2="330" y2="180" stroke="#7a3fb0" stroke-width="3"/><polygon points="330,173 347,180 330,187" fill="#7a3fb0"/><text x="305" y="165" font-size="14" fill="#7a3fb0" text-anchor="middle">服务</text><rect x="350" y="110" width="270" height="140" rx="12" fill="#9c56d4"/><text x="485" y="170" font-size="18" fill="#ffffff" text-anchor="middle">内容</text><text x="485" y="200" font-size="14" fill="#ffffff" text-anchor="middle">目的·核心</text><text x="485" y="226" font-size="13" fill="#ffffff" text-anchor="middle">把事说清说全</text><text x="340" y="310" font-size="13" fill="#5a7a2a" text-anchor="middle">好作文 = 用顺的语言，把内容稳稳送达</text></svg>', caption: '图1 语言是工具，内容是目的，好作文让语言为内容服务' },
        { type: 'list', items: ['先把"我要说什么"想明白，再想"我怎么用英语说"。', '能用简单词把事说清，就别硬换一个自己都拿不准的"高级词"。', '衡量一句写得好不好的标准，是"对方懂没懂"，不是"词够不够长"。'] },
        { type: 'heading', text: '二、两个同学的信：谁得分高' },
        { type: 'paragraph', text: '我们用一封邀请信来对比。题目要求写一封短信，邀请朋友周末来家里吃饭。下面两位同学写法不同，结果很能说明问题。' },
        { type: 'example', label: '同学A', text: '同学A（用词简单但通顺）："Hi Tom, I want to invite you to my home this Saturday. We will eat delicious food and play games. I hope you can come." 全是初中词汇，但要点齐、逻辑顺，老师一读就懂。' },
        { type: 'example', label: '同学B', text: '同学B（硬塞生僻词却读不懂）："Hi Tom, I cordially extend an invitation for you to partake in a gastronomic symposium at my domicile this weekend." 词很"高级"，但 domicile（住所）、gastronomic（美食的）用得生硬，句子绕口，反而没把"吃饭、玩耍"这个核心意思说利索。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图2 对比：简单词但通顺 vs 生僻词却读不懂</text><rect x="40" y="80" width="280" height="210" rx="12" fill="#5a7a2a"/><text x="180" y="125" font-size="16" fill="#ffffff" text-anchor="middle">同学A：简单词</text><text x="180" y="160" font-size="14" fill="#ffffff" text-anchor="middle">要点全·逻辑顺</text><text x="180" y="190" font-size="14" fill="#ffffff" text-anchor="middle">老师一读就懂</text><text x="180" y="232" font-size="15" fill="#ffffff" text-anchor="middle">得分高</text><rect x="360" y="80" width="280" height="210" rx="12" fill="#c0392b"/><text x="500" y="125" font-size="16" fill="#ffffff" text-anchor="middle">同学B：生僻词</text><text x="500" y="160" font-size="14" fill="#ffffff" text-anchor="middle">硬凑词·绕口</text><text x="500" y="190" font-size="14" fill="#ffffff" text-anchor="middle">关键意思糊了</text><text x="500" y="232" font-size="15" fill="#ffffff" text-anchor="middle">得分低</text><text x="340" y="325" font-size="13" fill="#5a7a2a" text-anchor="middle">把事说清楚，比堆难词更重要</text></svg>', caption: '图2 简单词但通顺的信，通常比生僻词却读不懂的信得分高' },
        { type: 'list', items: ['同学A胜在"内容到位、语言顺"：邀请、时间、活动、期待，一条不少。', '同学B败在"词压住了意"：忙着秀词，结果关键信息反而糊了。', '分数上，A往往高于B，因为整体评分看综合沟通效果。'] },
        { type: 'warn', label: '易错', text: '易错：别陷入<strong>"越难的词越好"</strong>的误区，<br>用错或硬凑的生僻词会拖累表达，还不如稳妥的常用词。' },
        { type: 'heading', text: '三、清楚传达意思，大于堆砌高级表达' },
        { type: 'paragraph', text: '把上面道理再推一步：衡量作文的第一标准，永远是"意思传没传达到位"。高级词汇和复杂句式是加分项，但前提是它们帮你把意思说得更准、更活；如果它们让你说不清，那就是减分项。' },
        { type: 'tip', label: '技巧', text: '小技巧：每写完一句，<strong>试着用大白话说一遍</strong>——<br>"这句到底想告诉对方什么？" 答得出来，这句就合格。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图3 清楚传达意思 大于 堆砌高级表达</text><rect x="40" y="100" width="300" height="160" rx="12" fill="#9c56d4"/><text x="190" y="160" font-size="18" fill="#ffffff" text-anchor="middle">清楚传达意思</text><text x="190" y="195" font-size="14" fill="#ffffff" text-anchor="middle">第一标准·必达</text><text x="380" y="178" font-size="44" fill="#7a3fb0" text-anchor="middle">></text><rect x="410" y="100" width="230" height="160" rx="12" fill="#b87fd8"/><text x="525" y="160" font-size="16" fill="#3a2a4a" text-anchor="middle">堆砌高级表达</text><text x="525" y="195" font-size="13" fill="#3a2a4a" text-anchor="middle">加分项·非前提</text><text x="340" y="320" font-size="13" fill="#5a7a2a" text-anchor="middle">意思先送到，再去升级语言质感</text></svg>', caption: '图3 清楚传达意思是第一标准，堆砌高级表达只是加分项' },
        { type: 'table', headers: ['写法', '效果'], rows: [['简单词 + 要点全 + 逻辑顺', '清楚易懂，得分稳'], ['生僻词 + 漏要点 + 读不通', '炫技却失分']] },
        { type: 'list', items: ['动笔前列提纲，把要写的要点一条条写下来。', '先用最熟的句式把要点写全，确保通顺。', '在通顺的基础上，挑一两处换成更贴切的高级表达。', '最后通读一遍，确认对方能毫无障碍地看懂。'] },
        { type: 'example', label: '再举一例', text: '表达"这本书很有用"，写 "This book is very useful to me." 清楚准确，完全达标；若非要写 "This book is exceedingly utilitarian." 反而拗口，而且 utilitarian 容易拼错。前者更聪明。' },
        { type: 'keypoint', label: '重点·收尾', text: '记住：<strong>语言是船，内容是岸</strong>；<br>船再漂亮，到不了岸也没用。把意思送达，才是好作文。' },
        { type: 'paragraph', text: '小结：语言服务于内容，是一条贯穿书面表达始终的原则。下笔前想清要说什么，写的时候把意思说清说顺，在此之上再去提升语言质感。带着这个原则，我们后面再学具体的写作套路。' }
      ],
      exercises: [
        { type: 'choice', question: '书面表达的核心原则可以概括为下列哪一句？', options: ['A. 语言服务于内容', 'B. 词汇越难越好', 'C. 句子越长越好', 'D. 只求语法零错误'], answer: 'A. 语言服务于内容', explanation: '书面表达的核心原则是"语言服务于内容"，即用词造句是为了把事情说清楚，而不是炫技。选项B、C、D都是常见误区，所以正确选项是A。' },
        { type: 'choice', question: '一篇用词简单但要点齐全、逻辑通顺的信，与一篇塞满生僻词却读不懂、漏要点的信相比，通常怎样？', options: ['A. 后者得分高', 'B. 前者得分高', 'C. 两者一样', 'D. 都无法得分'], answer: 'B. 前者得分高', explanation: '整体评分看综合沟通效果：前者要点全、逻辑顺、对方看得懂，后者虽然词"高级"却漏要点、读不通，所以前者通常得分更高，选B。' },
        { type: 'choice', question: '衡量一句英语写得好不好的根本标准是下列哪一个？', options: ['A. 词够不够长', 'B. 对方懂没懂', 'C. 句式够不够怪', 'D. 有没有用成语'], answer: 'B. 对方懂没懂', explanation: '语言服务于内容，判断一句写得好坏的根本标准是"对方有没有看懂、意思有没有传达到"。词长、句式怪、用成语都不是标准，所以选B。' },
        { type: 'fill', question: '语言是工具，____是目的，用对、用顺的语言把意思送达更重要。', answer: '内容', explanation: '核心原则强调语言服务于内容：语言只是工具，内容才是写作的目的。只要把意思清楚送达，就是好作文，所以这里填"内容"。' },
        { type: 'fill', question: '在____的基础上（意思说清说顺），再去提升语言质感、使用高级表达。', answer: '通顺|把意思说清|通顺的基础', explanation: '练习时先保证意思说清、语言通顺，把要点写全，之后再升级词汇和句式。高级表达是加分项而非前提，所以这里填"通顺"。' }
      ]
    }
  );
})();
