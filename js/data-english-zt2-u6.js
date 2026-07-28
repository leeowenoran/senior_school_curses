(function () {
  var v = gzGetVolume('english', 'zt2');
  if (!v) return;
  v.points.push(
    {
      id: `zt2-u6-l1`,
      name: `七选五`,
      chapter: `完形与阅读 · 第6单元 七选五与备考策略`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、七选五考什么' },
        { type: 'paragraph', text: '七选五就是在一篇短文里挖出五个空，旁边给出七个候选句子，你要从中挑出五个最合适的填回原文。它不考孤立的单词，而是考你能不能看懂文章里句子之间、段落之间的关系。' },
        { type: 'list', items: ['一共 5 个空，每空 2.5 分，合起来 12.5 分', '核心考查语篇逻辑结构意识，也就是句子和段落怎么连起来', '选材以说明文为主，主题多聚焦人与社会', '剩下的两个选项是干扰项，专门用来迷惑你'] },
        { type: 'keypoint', label: '重点·核心', text: '七选五的灵魂是<strong>语篇逻辑结构意识</strong>：理解句子之间、段落之间的逻辑关系，而不是只看单个句子的意思。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">七选五考什么：5题 12.5分</text><rect x="40" y="70" width="280" height="100" rx="12" fill="#9c56d4"/><text x="180" y="112" font-size="30" fill="#ffffff" text-anchor="middle">5 题</text><text x="180" y="146" font-size="14" fill="#ffffff" text-anchor="middle">一共五个空要填</text><rect x="360" y="70" width="280" height="100" rx="12" fill="#b87fd8"/><text x="500" y="112" font-size="30" fill="#3a2a4a" text-anchor="middle">12.5 分</text><text x="500" y="146" font-size="14" fill="#3a2a4a" text-anchor="middle">占分不少，要拿稳</text><rect x="40" y="200" width="600" height="50" rx="10" fill="#ffffff" stroke="#7a3fb0"/><text x="340" y="231" font-size="14" fill="#3a2a4a" text-anchor="middle">核心：考查语篇逻辑结构意识</text><text x="340" y="300" font-size="14" fill="#3a2a4a" text-anchor="middle">选材以说明文为主，聚焦人与社会主题</text></svg>`, caption: '图1 七选五信息卡：5题共12.5分，重在语篇逻辑' },
        { type: 'heading', text: '二、命题趋势怎么变' },
        { type: 'paragraph', text: '近年七选五的题目在悄悄变化：文章结构越来越清楚，空的位置越来越偏向段落的主旨，而不是细枝末节。' },
        { type: 'list', items: ['语篇结构：从隐性到显性，文章骨架更清楚', '设空侧重：从细节衔接，转向段落主旨统领', '干扰项更会伪装，常和原文某个词长得像但放进去不通'] },
        { type: 'warn', label: '易错', text: '别只盯着空格那一句。现在考题常让你选<strong>段落主题句</strong>，必须读完整个段落才能判断，单看前后一句容易掉坑。' },
        { type: 'heading', text: '三、设空位置与解题要点' },
        { type: 'paragraph', text: '空格在文章里的位置，决定了它的功能。看清位置，就知道该用什么办法去解。下面这张表把三种位置说清楚。' },
        { type: 'table', headers: ['设空位置', '功能', '解题要点'], rows: [['段首', '段落主题句', '浏览后文内容，抓关键词和核心话题'], ['段中', '瞻前顾后句', '分析前后句的逻辑衔接'], ['段尾', '总结句或过渡句', '总结上文，或引出下文内容']] },
        { type: 'example', label: '例题', text: '某段开头是空：______. 后面几句都在讲如何制定学习计划。<br>这时段首空要填主题句，应围绕<strong>制定学习计划</strong>来选，比如“下面是一个简单可行的学习计划”。' },
        { type: 'paragraph', text: '段中设空最常见，它前后都有句子，你要找前后句之间的连接点；段尾设空往往要收个尾，或者把话题引到下段。' },
        { type: 'tip', label: '记忆', text: '拿到题先<strong>扫一遍空的位置</strong>：段首想主题，段中想衔接，段尾想总结，位置一判断，方向就清楚了。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">设空位置三段图</text><rect x="30" y="70" width="190" height="220" rx="10" fill="#9c56d4"/><text x="125" y="100" font-size="15" fill="#ffffff" text-anchor="middle">段首</text><text x="125" y="135" font-size="13" fill="#ffffff" text-anchor="middle">段落主题句</text><text x="125" y="170" font-size="12" fill="#ffffff" text-anchor="middle">浏览后文抓</text><text x="125" y="192" font-size="12" fill="#ffffff" text-anchor="middle">关键词话题</text><rect x="245" y="70" width="190" height="220" rx="10" fill="#b87fd8"/><text x="340" y="100" font-size="15" fill="#3a2a4a" text-anchor="middle">段中</text><text x="340" y="135" font-size="13" fill="#3a2a4a" text-anchor="middle">瞻前顾后句</text><text x="340" y="170" font-size="12" fill="#3a2a4a" text-anchor="middle">分析前后句</text><text x="340" y="192" font-size="12" fill="#3a2a4a" text-anchor="middle">逻辑衔接</text><rect x="460" y="70" width="190" height="220" rx="10" fill="#9c56d4"/><text x="555" y="100" font-size="15" fill="#ffffff" text-anchor="middle">段尾</text><text x="555" y="135" font-size="13" fill="#ffffff" text-anchor="middle">总结或过渡</text><text x="555" y="170" font-size="12" fill="#ffffff" text-anchor="middle">总结上文</text><text x="555" y="192" font-size="12" fill="#ffffff" text-anchor="middle">或引下文</text><text x="340" y="330" font-size="13" fill="#3a2a4a" text-anchor="middle">看空格在段中位置，判断它要做什么</text></svg>`, caption: '图2 设空位置三段图：段首主题、段中衔接、段尾总结' },
        { type: 'heading', text: '四、解题线索有哪些' },
        { type: 'paragraph', text: '句子之间总有“线”连着。七选五的线索主要分显性和隐性两类，显性线索就是明摆着的连接词。' },
        { type: 'list', items: ['however：表示转折，前后意思相反', 'moreover / and：表示递进或并列，意思相近', 'therefore / so：表示因果，前面是原因后面是结果', 'but / though：表示让步或对比'] },
        { type: 'keypoint', label: '重点·隐性衔接', text: '除了连接词，还有<strong>指代关系</strong>和<strong>关键词复现</strong>：代词指前面提过的事物，同义词或原词在前后反复出现，都是接句子的信号。' },
        { type: 'example', label: '例题', text: '前一句：Many students feel tired. 候选句开头：<strong>They</strong> need more sleep.<br>这里的 They 指代前面的 students，指代一致，这句就能接上。' },
        { type: 'paragraph', text: '关键词复现也很常见：前面讲 “healthy diet（健康饮食）”，后面选项里出现 “eating well（吃得好）” 或再次提到 “diet”，话题一致就很可能正确。' },
        { type: 'warn', label: '易错', text: '看见选项里有个词和原文长得像就急着选，最容易上当。<strong>干扰项常常偷换概念</strong>，要确认整句逻辑真的接得上，而不是只靠一个词像。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">三条解题线索</text><rect x="30" y="70" width="190" height="200" rx="10" fill="#9c56d4"/><text x="125" y="105" font-size="15" fill="#ffffff" text-anchor="middle">显性连接词</text><text x="125" y="140" font-size="12" fill="#ffffff" text-anchor="middle">however 但是</text><text x="125" y="165" font-size="12" fill="#ffffff" text-anchor="middle">moreover 而且</text><text x="125" y="190" font-size="12" fill="#ffffff" text-anchor="middle">therefore 所以</text><text x="125" y="215" font-size="12" fill="#ffffff" text-anchor="middle">and / but</text><rect x="245" y="70" width="190" height="200" rx="10" fill="#b87fd8"/><text x="340" y="105" font-size="15" fill="#3a2a4a" text-anchor="middle">代词指代</text><text x="340" y="140" font-size="12" fill="#3a2a4a" text-anchor="middle">it 指代单数</text><text x="340" y="165" font-size="12" fill="#3a2a4a" text-anchor="middle">they 指代复数</text><text x="340" y="190" font-size="12" fill="#3a2a4a" text-anchor="middle">this / these</text><text x="340" y="215" font-size="12" fill="#3a2a4a" text-anchor="middle">看指什么</text><rect x="460" y="70" width="190" height="200" rx="10" fill="#9c56d4"/><text x="555" y="105" font-size="15" fill="#ffffff" text-anchor="middle">关键词复现</text><text x="555" y="140" font-size="12" fill="#ffffff" text-anchor="middle">同义词出现</text><text x="555" y="165" font-size="12" fill="#ffffff" text-anchor="middle">原词重复</text><text x="555" y="190" font-size="12" fill="#ffffff" text-anchor="middle">话题一致</text><text x="555" y="215" font-size="12" fill="#ffffff" text-anchor="middle">前后呼应</text><text x="340" y="330" font-size="13" fill="#3a2a4a" text-anchor="middle">三条线索一起用，句子怎么接就清楚了</text></svg>`, caption: '图3 解题线索图：连接词、代词指代、关键词复现' },
        { type: 'heading', text: '五、四步走的解题策略' },
        { type: 'list', items: ['第一步：明确每个选项含义，圈出关键词', '第二步：根据文章整体结构和内容，初步判断填入哪', '第三步：重点关注衔接标志词和衔接手段', '第四步：培养结构化阅读习惯，优化对干扰项的分析'] },
        { type: 'tip', label: '提醒', text: '平时练习时，填完不要急着对答案，<strong>把整篇文章连起来朗读一遍</strong>，看通不通顺。读着顺，往往就是对的。' }
      ],
      exercises: [
        { type: 'choice', question: '七选五一题多少分？五个空总分又是多少？', options: ['1 分，共 5 分', '2 分，共 10 分', '2.5 分，共 12.5 分', '3 分，共 15 分'], answer: '2.5 分，共 12.5 分', explanation: '七选五一共五个空，每个空 2.5 分，五空合起来是 12.5 分。这道题直接考查对题量和分值的记忆，2.5 乘以 5 等于 12.5，所以正确选项是 2.5 分、共 12.5 分，其他分值都不对。' },
        { type: 'choice', question: '七选五的空格设在一段的开头（段首），它通常起什么作用？', options: ['段落主题句', '段中衔接句', '文末总结句', '书的标题'], answer: '段落主题句', explanation: '段首的空一般要填这一段的中心意思，也就是段落主题句，用来统领后面的内容。段中衔接句放在句子中间，文末总结句放在段尾，书的标题和七选五设空无关。因此段首空最符合“段落主题句”这一功能。' },
        { type: 'choice', question: '下面哪个词是表示转折的显性连接词，提示前后意思相反？', options: ['moreover', 'however', 'therefore', 'and'], answer: 'however', explanation: 'however 意思是“然而、但是”，是典型的转折连接词，提示它前后两句意思相反或相对。moreover 表示递进，therefore 表示因果，and 表示并列，都不表示转折。所以表示转折的显性连接词是 however。' },
        { type: 'fill', question: '七选五一共设几个空？请从七个候选句中选出多少个填回原文？（填数字）', answer: '5|五', explanation: '七选五的题型设置是：一篇短文挖出五个空，旁边给出七个候选句子，要求从中选出五个最合适的填回去，剩下两个是干扰项。所以一共设 5 个空，要选 5 个句子，填数字 5 或汉字“五”都可以。' },
        { type: 'fill', question: '在七选五解题中，代词 they 通常用来指代前面提到的______事物（填“单数”或“复数”）。', answer: '复数', explanation: '英语里 it 通常指代单数的人或物，而 they 是复数代词，用来指代前面提到的复数名词或多人多物。在七选五里，看到选项以 They 开头，就要去前文找对应的复数对象，确认指代一致才算接得上。因此这里应填“复数”。' }
      ]
    },
    {
      id: `zt2-u6-l2`,
      name: `备考策略与核心思想方法`,
      chapter: `完形与阅读 · 第6单元 七选五与备考策略`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、完形填空备考三轮' },
        { type: 'list', items: ['一轮：系统梳理高频词汇与固定搭配，培养语篇意识', '二轮：专项训练逻辑衔接与词汇辨析，总结错题类型', '三轮：限时训练（每篇 8 到 10 分钟），朗读全文培养语感'] },
        { type: 'paragraph', text: '完形填空最怕脱离文章瞎猜。一轮把词汇和搭配打牢，二轮专攻逻辑和近义词，三轮用限时逼自己进入考试状态。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">备考三轮时间轴</text><line x1="60" y1="180" x2="620" y2="180" stroke="#7a3fb0" stroke-width="4"/><circle cx="140" cy="180" r="40" fill="#9c56d4"/><text x="140" y="185" font-size="16" fill="#ffffff" text-anchor="middle">一轮</text><text x="140" y="250" font-size="13" fill="#3a2a4a" text-anchor="middle">系统梳理</text><text x="140" y="272" font-size="13" fill="#3a2a4a" text-anchor="middle">打基础</text><circle cx="340" cy="180" r="40" fill="#b87fd8"/><text x="340" y="185" font-size="16" fill="#3a2a4a" text-anchor="middle">二轮</text><text x="340" y="250" font-size="13" fill="#3a2a4a" text-anchor="middle">专项突破</text><text x="340" y="272" font-size="13" fill="#3a2a4a" text-anchor="middle">攻弱项</text><circle cx="540" cy="180" r="40" fill="#7a3fb0"/><text x="540" y="185" font-size="16" fill="#ffffff" text-anchor="middle">三轮</text><text x="540" y="250" font-size="13" fill="#3a2a4a" text-anchor="middle">限时训练</text><text x="540" y="272" font-size="13" fill="#3a2a4a" text-anchor="middle">冲节奏</text></svg>`, caption: '图1 备考三轮时间轴：一轮打底、二轮攻弱、三轮冲刺' },
        { type: 'heading', text: '二、阅读理解备考三轮' },
        { type: 'list', items: ['一轮：掌握四大题型解题方法，积累高频阅读词汇', '二轮：分体裁突破（应用文、记叙文、议论文、说明文），强化推理判断', '三轮：限时训练（每篇 6 到 8 分钟），引入外刊素材拓展阅读'] },
        { type: 'keypoint', label: '重点·阅读核心', text: '阅读的本质是<strong>用信息回答问题</strong>：所有答案都必须能在原文找到依据，不可凭感觉主观臆断。' },
        { type: 'heading', text: '三、七选五备考要点' },
        { type: 'list', items: ['强化逻辑衔接训练，熟悉连接词和指代', '分类突破不同语篇结构，如总分、并列、递进', '培养结构化阅读习惯，先搭框架再看细节', '优化干扰项分析能力，能说清为什么某项不对'] },
        { type: 'tip', label: '提醒', text: '七选五不用背单词表，要<strong>练“接句子”的眼力</strong>：每天做一篇，专门找前后句的连接点，练多了就有感觉。' },
        { type: 'table', headers: ['题型', '一轮做法', '二轮做法', '三轮做法'], rows: [['完形填空', '梳理高频词汇与搭配，培养语篇意识', '专训逻辑衔接与词汇辨析，总结错题', '限时每篇 8 到 10 分钟，朗读培养语感'], ['阅读理解', '掌握四大题型方法，积累阅读词汇', '分体裁突破，强化推理判断', '限时每篇 6 到 8 分钟，引外刊拓展'], ['七选五', '强化逻辑衔接训练', '分类突破不同语篇', '培养结构化阅读，优化干扰项分析']] },
        { type: 'heading', text: '四、核心思想方法' },
        { type: 'paragraph', text: '完形、阅读、七选五看着是三道题，背后用的是同一套思想方法。下面这张表把四种方法说清楚。' },
        { type: 'table', headers: ['思想方法', '在完形与阅读中的体现'], rows: [['语篇意识', '从整体把握文章主旨，而非孤立理解句子'], ['语境思维', '在上下文中理解词义、判断选项'], ['逻辑推理', '根据因果、转折、递进等关系推断信息'], ['信息定位', '快速在长文中找到关键信息']] },
        { type: 'example', label: '例题', text: '完形里有个空：He felt ___ because he failed the test. 选项有 happy / sad。<br>结合“考试没过”这个语境，整体把握语篇就能选出 sad，这就是<strong>语篇意识加语境思维</strong>一起用。' },
        { type: 'keypoint', label: '重点·语境思维', text: '一个词单独看可能有好几个意思，只有在<strong>具体上下文</strong>里才只有一个最恰当的答案，这就是语境思维。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">核心思想方法四象限</text><rect x="40" y="70" width="290" height="110" rx="10" fill="#9c56d4"/><text x="185" y="110" font-size="15" fill="#ffffff" text-anchor="middle">语篇意识</text><text x="185" y="140" font-size="12" fill="#ffffff" text-anchor="middle">整体把握主旨</text><rect x="350" y="70" width="290" height="110" rx="10" fill="#b87fd8"/><text x="495" y="110" font-size="15" fill="#3a2a4a" text-anchor="middle">语境思维</text><text x="495" y="140" font-size="12" fill="#3a2a4a" text-anchor="middle">上下文选词</text><rect x="40" y="200" width="290" height="110" rx="10" fill="#b87fd8"/><text x="185" y="240" font-size="15" fill="#3a2a4a" text-anchor="middle">逻辑推理</text><text x="185" y="270" font-size="12" fill="#3a2a4a" text-anchor="middle">因果转折推断</text><rect x="350" y="200" width="290" height="110" rx="10" fill="#9c56d4"/><text x="495" y="240" font-size="15" fill="#ffffff" text-anchor="middle">信息定位</text><text x="495" y="270" font-size="12" fill="#ffffff" text-anchor="middle">快速找关键</text></svg>`, caption: '图2 核心思想方法四象限：语篇、语境、推理、定位' },
        { type: 'heading', text: '五、三大题型核心对比' },
        { type: 'list', items: ['完形填空核心：在语境中选词', '阅读理解核心：用信息回答问题', '七选五核心：读懂句子怎么接'] },
        { type: 'paragraph', text: '三道题共同指向同一个能力：语篇理解能力。离开完整的文章，任何技巧都使不上劲。' },
        { type: 'warn', label: '易错', text: '复习时千万别把三道题割裂开练。<strong>完形脱离语境、阅读凭空臆断、七选五不看连接</strong>，都是最常见的丢分原因。' },
        { type: 'example', label: '对比', text: '同一篇文章：完形要你在空处挑最贴语境的词；阅读要你按原文找答案；七选五要你把句子正确接回去。三件事，根子上都靠读懂整篇。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">三大题型核心对比</text><rect x="30" y="70" width="190" height="220" rx="10" fill="#9c56d4"/><text x="125" y="105" font-size="15" fill="#ffffff" text-anchor="middle">完形填空</text><text x="125" y="145" font-size="13" fill="#ffffff" text-anchor="middle">在语境中选词</text><text x="125" y="175" font-size="12" fill="#ffffff" text-anchor="middle">回到语境</text><text x="125" y="197" font-size="12" fill="#ffffff" text-anchor="middle">只有一个最恰当</text><rect x="245" y="70" width="190" height="220" rx="10" fill="#b87fd8"/><text x="340" y="105" font-size="15" fill="#3a2a4a" text-anchor="middle">阅读理解</text><text x="340" y="145" font-size="13" fill="#3a2a4a" text-anchor="middle">用信息回答问题</text><text x="340" y="175" font-size="12" fill="#3a2a4a" text-anchor="middle">答案在原文</text><text x="340" y="197" font-size="12" fill="#3a2a4a" text-anchor="middle">不主观臆断</text><rect x="460" y="70" width="190" height="220" rx="10" fill="#9c56d4"/><text x="555" y="105" font-size="15" fill="#ffffff" text-anchor="middle">七选五</text><text x="555" y="145" font-size="13" fill="#ffffff" text-anchor="middle">读懂句子怎么接</text><text x="555" y="175" font-size="12" fill="#ffffff" text-anchor="middle">连接词加指代</text><text x="555" y="197" font-size="12" fill="#ffffff" text-anchor="middle">关键词复现</text><text x="340" y="330" font-size="13" fill="#3a2a4a" text-anchor="middle">三大题型共同指向：语篇理解能力</text></svg>`, caption: '图3 三题型对比图：选词、找依据、接句子' },
        { type: 'tip', label: '总提醒', text: '复习务必坚持<strong>在完整语篇中训练</strong>的原则：每做一篇，都把文章读完整、读通顺，能力自然就上来了。' }
      ],
      exercises: [
        { type: 'choice', question: '备考“一轮”阶段，主要应该做什么？', options: ['直接做整套限时卷冲刺', '系统梳理基础，过一遍知识点', '只背单词不做题', '什么都不做等二轮'], answer: '系统梳理基础，过一遍知识点', explanation: '三轮复习里，一轮是打基础的阶段，要把高频词汇、固定搭配、各题型基本方法系统梳理一遍，培养语篇意识。二轮才是专项突破弱项，三轮才做限时套题冲刺。所以一轮的主要任务是系统梳理基础，过一遍知识点。' },
        { type: 'choice', question: '阅读理解备考“二轮”重点突破什么？', options: ['只朗读全文不做题', '分体裁突破并强化推理判断', '完全不碰说明文', '只背语法规则'], answer: '分体裁突破并强化推理判断', explanation: '阅读二轮的做法是分体裁突破，把应用文、记叙文、议论文、说明文分开练，同时强化推理判断题。朗读只是辅助，背语法规则对阅读帮助有限。因此二轮重点是分体裁突破并强化推理判断。' },
        { type: 'choice', question: '完形填空的核心思想是什么？', options: ['在语境中选词', '随便选一个就行', '完全不读文章', '只背孤立单词表'], answer: '在语境中选词', explanation: '完形填空的核心是“在语境中选词”：一个词脱离语境可能有多个意思都讲得通，但放回上下文只有一个最恰当。不读文章、随便选、只背单词都违背这个核心。所以正确选项是“在语境中选词”。' },
        { type: 'fill', question: '阅读理解的答案必须来自哪里？所有答案都要在______找到依据，不可主观臆断。', answer: '原文|文章原文', explanation: '阅读理解的核心原则是用信息回答问题，也就是说，无论什么题型，正确答案都必须能在原文中找到对应的依据，不能凭自己的感觉去猜或主观臆断。因此空格填“原文”或“文章原文”，强调答案的来源是文章本身。' },
        { type: 'fill', question: '七选五解题要关注逻辑连接词、代词指代，还要关注什么线索？（提示：同义词或原词在前后反复出现）', answer: '关键词复现|同义词复现', explanation: '七选五的三条主要线索是：显性连接词（如 however、therefore）、代词指代（it、they 指前面提到的事物），以及关键词复现，也就是同义词或原词在前后文反复出现、话题保持一致。所以这里填“关键词复现”或“同义词复现”，都是指同一类衔接信号。' }
      ]
    }
  );
})();
