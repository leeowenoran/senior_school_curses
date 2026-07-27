/* ============================================================
 * 高二英语 · 选择性必修 第二册 · Unit 1 Science and Scientists
 * 第1课时：核心词汇与表语从句（上）
 * 第2课时：重点句型与表语从句（下）
 * 数据注入：english.xb2.points
 * 配色：紫色系（主色 #9c56d4 / #7a3fb0，背景 #f3edfa）
 * ============================================================ */
(function () {
  var v = gzGetVolume('english', 'xb2');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 核心词汇与表语从句（上） ---------------- */
    {
      id: 'xb2-u1-l1',
      name: 'Unit 1 核心词汇与表语从句（上）',
      chapter: 'Unit 1 Science and Scientists · 核心词汇与表语从句（上）',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、Unit 1 核心词汇（科学研究名词）' },
        { type: 'paragraph', text: '本单元围绕“科学与科学家”展开。我们先记住一批最常用的科学类单词，它们大多用来描述做实验、找规律的过程。下面用表格列出它们的中文意思，大家先混个脸熟。' },
        { type: 'table', headers: ['英文单词', '词性', '中文释义'], rows: [['hypothesis', '名词', '假设；假说'], ['theory', '名词', '理论；学说'], ['experiment', '名词/动词', '实验；做实验'], ['analysis', '名词', '分析；分析结果'], ['evidence', '名词', '证据；证明'], ['phenomenon', '名词', '现象（复数 phenomena）'], ['procedure', '名词', '步骤；程序；流程'], ['variable', '名词', '变量；可变因素'], ['conclusion', '名词', '结论']] },
        { type: 'keypoint', label: '重点·记词法', text: '这组词经常一起出现：先有 <strong>hypothesis（假设）</strong>，再做 <strong>experiment（实验）</strong>，接着做 <strong>analysis（分析）</strong>，最后得到 <strong>conclusion（结论）</strong>。可以把它想成一条流水线，顺序千万别记反。' },
        { type: 'paragraph', text: '下面再补充几个描述“人”和“思维”的单词。它们常用来评价一位科学家，或者说明研究带来的意义。' },
        { type: 'table', headers: ['英文单词', '词性', '中文释义'], rows: [['observe', '动词', '观察；注意到'], ['accurate', '形容词', '精确的；准确的'], ['precision', '名词', '精确性；精度'], ['investigation', '名词', '调查；调查研究'], ['opportunity', '名词', '机会；时机'], ['broaden', '动词', '开阔；拓宽'], ['perspective', '名词', '视角；观点；看法'], ['challenge', '名词/动词', '挑战；向……挑战'], ['misunderstanding', '名词', '误解；误会'], ['brilliant', '形容词', '杰出的；才华横溢的']] },
        { type: 'list', items: ['observe 是动词，它的名词形式是 observation（观察）', 'accurate 是形容词，名词形式 precision 表示“精确性”', 'broaden 由 broad（宽的）加上 en（使……）构成，意思是“使……变宽”，即开阔', 'brilliant 常用来形容一个人“特别聪明、杰出”'] },
        { type: 'heading', text: '二、Unit 1 常用短语' },
        { type: 'paragraph', text: '短语是英语的“积木”。下面这些短语在科学类文章里出现频率很高，建议整体背诵，不要拆开记。' },
        { type: 'table', headers: ['短语', '中文意思', '用法提示'], rows: [['come up with', '提出；想出', '主语通常是人，后接 idea、theory 等'], ['carry out', '执行；实施；进行', '后接 experiment、plan 等'], ['be based on', '基于；以……为基础', '主动被动均可'], ['lead to', '导致；通向', '后接结果'], ['as a result', '结果；因此', '常放句首，表因果'], ['draw a conclusion', '得出结论', '与 conclusion 搭配'], ['make a contribution to', '对……做出贡献', 'to 是介词，后接名词或 ing'], ['in detail', '详细地；细致地', '修饰动词，表程度']] },
        { type: 'keypoint', label: '重点·易混短语', text: '<strong>come up with</strong> 是“想出（办法、点子）”，主语是人；<strong>come up</strong> 是“被提到、走近”，意思完全不同。另外 <strong>lead to</strong> 里的 to 是介词，后面要接名词或动词 ing 形式，不能接动词原形。' },
        { type: 'list', items: ['carry out an experiment 做一项实验', 'be based on facts 基于事实', 'lead to a discovery 导致一项发现', 'make a contribution to science 为科学做贡献'] },
        { type: 'warn', label: '易错', text: '<strong>make a contribution to</strong> 和 <strong>look forward to</strong> 一样，后面的 to 都是<strong>介词</strong>，所以要接名词或动词 ing，比如 make a contribution to <strong>improving</strong> our life，不能写成 to improve。这是考试常考的坑。' },
        { type: 'heading', text: '三、表语从句基础（什么是表语从句）' },
        { type: 'paragraph', text: '从句就是“句子里套着一个句子”。表语从句是名词性从句的一种。我们先弄懂它的位置和作用，再看它怎么写。' },
        { type: 'keypoint', label: '重点·定义', text: '表语从句是放在<strong>系动词</strong>（比如 be“是”、seem“似乎”、remain“仍然是”）<strong>后面</strong>的一个从句，用来说明主语“是什么”或“怎么样”。简单说，它就是“主语 + 是 + 一个句子”的后半部分。' },
        { type: 'example', label: '例句1', text: 'My suggestion is <strong>that you should have patience</strong>.<br>翻译：我的建议是你要有耐心。<br>分析：主语是 my suggestion，系动词是 is，后面 that you should have patience 整句作表语，说明“建议”的内容是什么，这就是表语从句。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="200" fill="#f3edfa"/>
<text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">科学家做实验流程图</text>
<rect x="20" y="80" width="120" height="50" rx="8" fill="#b87fd8" stroke="#7a3fb0" stroke-width="2"/>
<text x="80" y="111" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">提出假设</text>
<rect x="190" y="80" width="120" height="50" rx="8" fill="#b87fd8" stroke="#7a3fb0" stroke-width="2"/>
<text x="250" y="111" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">做实验</text>
<rect x="360" y="80" width="120" height="50" rx="8" fill="#b87fd8" stroke="#7a3fb0" stroke-width="2"/>
<text x="420" y="111" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">观察现象</text>
<rect x="530" y="80" width="130" height="50" rx="8" fill="#9c56d4" stroke="#7a3fb0" stroke-width="2"/>
<text x="595" y="111" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">得出结论</text>
<line x1="145" y1="105" x2="182" y2="105" stroke="#7a3fb0" stroke-width="2.5"/>
<polygon points="182,105 170,99 170,111" fill="#7a3fb0"/>
<line x1="315" y1="105" x2="352" y2="105" stroke="#7a3fb0" stroke-width="2.5"/>
<polygon points="352,105 340,99 340,111" fill="#7a3fb0"/>
<line x1="485" y1="105" x2="522" y2="105" stroke="#7a3fb0" stroke-width="2.5"/>
<polygon points="522,105 510,99 510,111" fill="#7a3fb0"/>
<text x="340" y="172" font-size="14" fill="#3a2a4a" text-anchor="middle">科学研究的基本流程：一环扣一环</text>
</svg>`, caption: '图1　科学研究流程：提出假设、做实验、观察现象、得出结论，串成一条线。' },
        { type: 'keypoint', label: '重点·引导词 that', text: '表语从句最常用的引导词是 <strong>that</strong>。它有三个特点：①<strong>没有意思</strong>，翻译时不译出来；②<strong>不充当任何成分</strong>（不做主语、宾语等）；③在表语从句中<strong>不能省略</strong>。' },
        { type: 'warn', label: '易错', text: '宾语从句里的 that 常可省略，但<strong>表语从句里的 that 不能省</strong>。比如不能说 The fact is he is honest，必须说 The fact is <strong>that</strong> he is honest。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="220" fill="#f3edfa"/>
<text x="340" y="36" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">表语从句结构图</text>
<rect x="40" y="90" width="120" height="56" rx="8" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/>
<text x="100" y="124" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">主语</text>
<rect x="200" y="90" width="80" height="56" rx="8" fill="#b87fd8" stroke="#7a3fb0" stroke-width="2"/>
<text x="240" y="124" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">be</text>
<rect x="320" y="90" width="320" height="56" rx="8" fill="#ffffff" stroke="#9c56d4" stroke-width="2.5"/>
<text x="480" y="124" font-size="17" font-weight="bold" fill="#9c56d4" text-anchor="middle">that 引导的从句（表语）</text>
<line x1="160" y1="118" x2="195" y2="118" stroke="#7a3fb0" stroke-width="2.5"/>
<polygon points="195,118 183,112 183,124" fill="#7a3fb0"/>
<line x1="280" y1="118" x2="315" y2="118" stroke="#7a3fb0" stroke-width="2.5"/>
<polygon points="315,118 303,112 303,124" fill="#7a3fb0"/>
<text x="480" y="184" font-size="14" fill="#3a2a4a" text-anchor="middle">例：My suggestion is that you should have patience.</text>
</svg>`, caption: '图2　表语从句位置：主语 + be + that 引导的从句，从句说明主语是什么。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['核心名词：hypothesis 假设、experiment 实验、analysis 分析、conclusion 结论、evidence 证据', '常用短语：come up with 提出、carry out 执行、be based on 基于、lead to 导致', '表语从句位置：系动词（be、seem、remain）之后，说明主语是什么', '引导词 that：无意思、不充当成分、表语从句中不能省略'] },
        { type: 'tip', label: '记忆', text: '把“科学研究流程”和“表语从句”一起记：科学家先提出假设、做实验、观察现象、得出结论；而结论常写成 <strong>The conclusion is that ...</strong> 这样的表语从句，that 不能省。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="240" fill="#f3edfa"/>
<text x="340" y="36" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">核心词汇分类记忆</text>
<rect x="40" y="70" width="180" height="140" rx="10" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/>
<text x="130" y="100" font-size="16" font-weight="bold" fill="#7a3fb0" text-anchor="middle">名词</text>
<text x="130" y="130" font-size="14" fill="#3a2a4a" text-anchor="middle">hypothesis</text>
<text x="130" y="156" font-size="14" fill="#3a2a4a" text-anchor="middle">experiment</text>
<text x="130" y="182" font-size="14" fill="#3a2a4a" text-anchor="middle">conclusion</text>
<rect x="250" y="70" width="180" height="140" rx="10" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/>
<text x="340" y="100" font-size="16" font-weight="bold" fill="#9c56d4" text-anchor="middle">动词</text>
<text x="340" y="130" font-size="14" fill="#3a2a4a" text-anchor="middle">observe</text>
<text x="340" y="156" font-size="14" fill="#3a2a4a" text-anchor="middle">broaden</text>
<text x="340" y="182" font-size="14" fill="#3a2a4a" text-anchor="middle">conclude</text>
<rect x="460" y="70" width="180" height="140" rx="10" fill="#ffffff" stroke="#b87fd8" stroke-width="2"/>
<text x="550" y="100" font-size="16" font-weight="bold" fill="#7a3fb0" text-anchor="middle">形容词</text>
<text x="550" y="130" font-size="14" fill="#3a2a4a" text-anchor="middle">accurate</text>
<text x="550" y="156" font-size="14" fill="#3a2a4a" text-anchor="middle">brilliant</text>
<text x="550" y="182" font-size="14" fill="#3a2a4a" text-anchor="middle">precise</text>
<text x="340" y="232" font-size="14" fill="#3a2a4a" text-anchor="middle">按词性分组记忆，比一个一个硬背更牢</text>
</svg>`, caption: '图3　把核心词汇按名词、动词、形容词分组，方便整体记忆。' }
      ],
      exercises: [
        { type: 'choice', question: '单词 hypothesis 的中文意思是？', options: ['假设', '理论', '实验', '结论'], answer: '假设', explanation: 'hypothesis 是名词，意思是“假设、假说”，指科学研究开始前先提出的一个猜想。theory 是“理论”，experiment 是“实验”，conclusion 是“结论”，三者意思都不同，不能混淆。' },
        { type: 'choice', question: '短语 carry out 的意思是？', options: ['提出', '执行；实施', '基于', '导致'], answer: '执行；实施', explanation: 'carry out 是固定短语，意为“执行、实施、进行”，常后接 experiment（实验）、plan（计划）等。come up with 才是“提出、想出”，be based on 是“基于”，lead to 是“导致”，注意区分。' },
        { type: 'choice', question: '在表语从句中，引导词 that 应该？', options: ['可以省略', '不能省略', '通常省略', '必须去掉'], answer: '不能省略', explanation: '表语从句由 that 引导时，that 没有词义、不充当成分，而且在表语从句中不能省略。这一点和宾语从句不同：宾语从句里的 that 常可省略，但表语从句必须保留 that。' },
        { type: 'fill', question: 'The conclusion is ____ he is right. （填 that 或 which）', answer: 'that', explanation: '表语从句放在系动词 is 之后，用来说明主语 the conclusion（结论）的具体内容。引导词 that 无意思、不充当成分，且在表语从句中不能省略，所以横线处必须填 that。' },
        { type: 'fill', question: 'make a contribution to 中的 to 是____词（填“介”或“动”）。', answer: '介', explanation: 'make a contribution to 表示“对……做出贡献”，其中的 to 和 look forward to 一样都是介词，后面要接名词或动词的 ing 形式，例如 make a contribution to improving our life，而不能接动词原形。' }
      ]
    },

    /* ---------------- 第2课时 重点句型与表语从句（下） ---------------- */
    {
      id: 'xb2-u1-l2',
      name: 'Unit 1 重点句型与表语从句（下）',
      chapter: 'Unit 1 Science and Scientists · 重点句型与表语从句（下）',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、强调句 It is / was ... that ...' },
        { type: 'paragraph', text: '英语里想“特意突出”某一件事，比如突出“是谁”“是什么时候”，就用强调句。它的样子很像普通句子，但中间多了 It is / was ... that ... 这套框架。' },
        { type: 'keypoint', label: '重点·强调句结构', text: '强调句的基本结构是：<strong>It is / was + 被强调的部分 + that + 其余部分</strong>。被强调的部分可以是一个人、一件事、一个时间或地点，放在 It is / was 和 that 中间。去掉这套框架，剩下的仍是一个完整句子。' },
        { type: 'example', label: '例句1', text: 'It was through careful observation that he came up with his theory.<br>翻译：<strong>正是通过仔细观察</strong>，他才提出了自己的理论。<br>分析：被强调的是 through careful observation（通过仔细观察），用 that 连接其余部分 he came up with his theory。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="200" fill="#f3edfa"/>
<text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">强调句结构图</text>
<rect x="30" y="90" width="70" height="50" rx="8" fill="#b87fd8" stroke="#7a3fb0" stroke-width="2"/>
<text x="65" y="121" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">It is</text>
<rect x="120" y="90" width="200" height="50" rx="8" fill="#9c56d4" stroke="#7a3fb0" stroke-width="2.5"/>
<text x="220" y="121" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">被强调的部分</text>
<rect x="360" y="90" width="70" height="50" rx="8" fill="#b87fd8" stroke="#7a3fb0" stroke-width="2"/>
<text x="395" y="121" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">that</text>
<rect x="460" y="90" width="190" height="50" rx="8" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/>
<text x="555" y="121" font-size="16" fill="#3a2a4a" text-anchor="middle">其余部分</text>
<line x1="100" y1="115" x2="115" y2="115" stroke="#7a3fb0" stroke-width="2.5"/>
<polygon points="115,115 103,109 103,121" fill="#7a3fb0"/>
<line x1="320" y1="115" x2="355" y2="115" stroke="#7a3fb0" stroke-width="2.5"/>
<polygon points="355,115 343,109 343,121" fill="#7a3fb0"/>
<line x1="430" y1="115" x2="455" y2="115" stroke="#7a3fb0" stroke-width="2.5"/>
<polygon points="455,115 443,109 443,121" fill="#7a3fb0"/>
<text x="340" y="174" font-size="14" fill="#3a2a4a" text-anchor="middle">例：It was Tom that I met yesterday. 正是汤姆我昨天遇见的人。</text>
</svg>`, caption: '图1　强调句框架：把想突出的内容放在“被强调的部分”这一格。' },
        { type: 'list', items: ['被强调的部分可以是主语、宾语、状语，但不能是谓语动词', '强调人时 that 可换成 who，强调物或别的内容用 that', '把 It is / was ... that ... 去掉，剩下仍是完整句子，可用这个方法判断是不是强调句'] },
        { type: 'heading', text: '二、用英语表达科学过程' },
        { type: 'paragraph', text: '写科学类文章时，常要按顺序说清“第一步做什么、第二步做什么”。英语里有一个很顺手的句型：主语 + be + to do（不定式）。' },
        { type: 'keypoint', label: '重点·过程句型', text: '表示“第一步是……、下一步是……”，常用 <strong>The first step is to + 动词原形</strong> 这样的结构，其中 is 后面跟不定式（to do）作表语。例如 <strong>The first step is to form a hypothesis</strong>（第一步是形成一个假设）。' },
        { type: 'example', label: '例句2', text: 'The first step is to form a hypothesis.<br>翻译：第一步是形成一个假设。<br>分析：主语 the first step，系动词 is，后面 to form a hypothesis 是不定式短语，在句中作表语，说明“第一步”的内容。' },
        { type: 'list', items: ['The next step is to carry out the experiment. 下一步是做实验', 'The final step is to draw a conclusion. 最后一步是得出结论', 'form a hypothesis 形成一个假设，form 这里是“形成、建立”'] },
        { type: 'heading', text: '三、表语从句深化（whether 与 wh- 引导词）' },
        { type: 'paragraph', text: '表语从句除了用 that 引导，还可以用 whether 和 wh- 类词（who、what、where、why、how 等）引导。它们各有各的脾气，下面逐个说清。' },
        { type: 'keypoint', label: '重点·whether', text: '当从句表示“是否”时，用 <strong>whether</strong> 引导表语从句。要特别记住：这里的 whether <strong>不能用 if 代替</strong>。if 不能引导表语从句，这是一条硬规则。' },
        { type: 'warn', label: '易错', text: '<strong>if 不能引导表语从句</strong>。比如想说“问题是我们能否完成”，必须写 The question is <strong>whether</strong> we can finish it，绝不能写成 ... is if we can finish it。' },
        { type: 'example', label: '例句3', text: 'That is where he was born.<br>翻译：那就是他出生的地方。<br>分析：where 是 wh- 引导词，在从句中作地点状语，表示“……的地方”。<br><br>The question is whether we can finish it.<br>翻译：问题是我们能否完成它。<br>分析：whether 表示“是否”，在表语从句中不能用 if 替代。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="220" fill="#f3edfa"/>
<text x="340" y="36" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">表语从句结构图（深化）</text>
<rect x="40" y="90" width="120" height="56" rx="8" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/>
<text x="100" y="124" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">主语</text>
<rect x="200" y="90" width="120" height="56" rx="8" fill="#b87fd8" stroke="#7a3fb0" stroke-width="2"/>
<text x="260" y="124" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">系动词</text>
<rect x="360" y="90" width="280" height="56" rx="8" fill="#ffffff" stroke="#9c56d4" stroke-width="2.5"/>
<text x="500" y="124" font-size="16" font-weight="bold" fill="#9c56d4" text-anchor="middle">从句（that / whether / wh-）</text>
<line x1="160" y1="118" x2="195" y2="118" stroke="#7a3fb0" stroke-width="2.5"/>
<polygon points="195,118 183,112 183,124" fill="#7a3fb0"/>
<line x1="320" y1="118" x2="355" y2="118" stroke="#7a3fb0" stroke-width="2.5"/>
<polygon points="355,118 343,112 343,124" fill="#7a3fb0"/>
<text x="340" y="184" font-size="14" fill="#3a2a4a" text-anchor="middle">例：That is where he was born. 那就是他出生的地方。</text>
</svg>`, caption: '图2　表语从句位置：主语 + 系动词 + 从句，从句可由 that、whether 或 wh- 引导。' },
        { type: 'table', headers: ['引导词', '含义或作用', '是否充当成分', '能否省略'], rows: [['that', '无意思，只起连接作用', '不充当成分', '不能省略'], ['whether', '表示“是否”', '不充当成分', '不能省略'], ['wh- (who / what / where / why / how)', '在从句中作主语、宾语、状语等', '充当成分', '常可省略']] },
        { type: 'list', items: ['that：只连接，不翻译，不充当成分，不能省', 'whether：表“是否”，不能用 if 代替，也不充当成分', 'wh- 词：在从句里有具体职务，比如 where 作地点状语、what 作主语或宾语'] },
        { type: 'heading', text: '四、易混点提醒' },
        { type: 'warn', label: '易错', text: '看到“是否”就想填 if，是表语从句最常见的错误。<strong>表语从句里“是否”只能用 whether</strong>；只有当它是宾语从句（放在动词后面）时，if 和 whether 才可以互换。' },
        { type: 'tip', label: '提示', text: '判断引导词的小窍门：如果从句本身“缺成分”（少主语、宾语或状语），就用 wh- 词去补；如果从句成分完整只想表“是否”，就用 whether；如果从句既完整又无需“是否”，就用 that。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="240" fill="#f3edfa"/>
<text x="340" y="36" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">表语从句三类引导词</text>
<rect x="40" y="70" width="180" height="140" rx="10" fill="#ffffff" stroke="#7a3fb0" stroke-width="2"/>
<text x="130" y="100" font-size="16" font-weight="bold" fill="#7a3fb0" text-anchor="middle">that</text>
<text x="130" y="128" font-size="14" fill="#3a2a4a" text-anchor="middle">无意思</text>
<text x="130" y="150" font-size="14" fill="#3a2a4a" text-anchor="middle">不充当成分</text>
<text x="130" y="172" font-size="14" fill="#3a2a4a" text-anchor="middle">不能省略</text>
<rect x="250" y="70" width="180" height="140" rx="10" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/>
<text x="340" y="100" font-size="16" font-weight="bold" fill="#9c56d4" text-anchor="middle">whether</text>
<text x="340" y="128" font-size="14" fill="#3a2a4a" text-anchor="middle">表示“是否”</text>
<text x="340" y="150" font-size="14" fill="#3a2a4a" text-anchor="middle">不能用 if 代替</text>
<text x="340" y="172" font-size="14" fill="#3a2a4a" text-anchor="middle">不充当成分</text>
<rect x="460" y="70" width="180" height="140" rx="10" fill="#ffffff" stroke="#b87fd8" stroke-width="2"/>
<text x="550" y="100" font-size="16" font-weight="bold" fill="#7a3fb0" text-anchor="middle">wh-</text>
<text x="550" y="128" font-size="14" fill="#3a2a4a" text-anchor="middle">who / what / where</text>
<text x="550" y="150" font-size="14" fill="#3a2a4a" text-anchor="middle">在从句中</text>
<text x="550" y="172" font-size="14" fill="#3a2a4a" text-anchor="middle">充当成分</text>
<text x="340" y="232" font-size="14" fill="#3a2a4a" text-anchor="middle">按引导词的作用分组记忆，考试不迷路</text>
</svg>`, caption: '图3　三类引导词对比：that 只连接、whether 表是否、wh- 在从句里干活。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['强调句：It is / was + 被强调部分 + that + 其余部分，去掉框架仍是完整句', '过程句型：The first step is to do ... 表示“第一步是……”', 'whether 引导表语从句表“是否”，绝不能用 if 代替', 'wh- 引导词在从句中充当成分；that 不充当成分且不能省略'] }
      ],
      exercises: [
        { type: 'choice', question: '强调句 It was Tom that I met yesterday. 中，被强调的部分是？', options: ['Tom', 'I met yesterday', 'It was', 'that'], answer: 'Tom', explanation: '强调句的基本结构是“It is / was + 被强调部分 + that + 其余部分”，被强调的部分放在 It is / was 和 that 之间。本句中 Tom 位于被强调的位置，意思是“正是汤姆我昨天遇见的人”，所以被强调的部分是 Tom。' },
        { type: 'choice', question: '表语从句中表示“是否”应该用？', options: ['if', 'whether', 'that', 'what'], answer: 'whether', explanation: '在表语从句中，表示“是否”只能用 whether，不能用 if，因为 if 不能引导表语从句，这是英语语法的重要规则。that 引导表语从句时无任何意思，what 表示“……的东西”，均不符合“是否”的含义。' },
        { type: 'choice', question: 'That is ____ he was born. 横线处应填？', options: ['where', 'that', 'whether', 'if'], answer: 'where', explanation: '表语从句的引导词 where 在从句中作地点状语，表示“……的地方”。本句 That is where he was born 意为“那就是他出生的地方”。that 引导从句无意思，whether 表示是否，if 不能引导表语从句，故选 where。' },
        { type: 'fill', question: 'It was through hard work ____ he succeeded. （填 that 或 which）', answer: 'that', explanation: '这是一个强调句，结构为 It was + 被强调部分 + that + 其余部分。被强调部分是 through hard work（通过努力），后面用 that 连接其余部分 he succeeded，不能用 which。强调句里无论指人还是指物，通常都用 that（指人时偶尔可用 who）。' },
        { type: 'fill', question: 'The question is ____ we can finish it on time. （填 whether 或 if）', answer: 'whether', explanation: '表语从句表示“是否”必须用 whether，不能用 if，因为 if 不能引导表语从句。本句 The question is whether we can finish it on time 意为“问题是我们能否按时完成”，故填 whether。' }
      ]
    }

  );
})();
