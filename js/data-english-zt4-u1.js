(function () {
  var v = gzGetVolume('english', 'zt4');
  if (!v) return;
  v.points.push(
    {
      id: `zt4-u1-l1`,
      name: `考查目标`,
      chapter: `书面表达 · 第1单元 考查要求与命题趋势`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、书面表达到底考什么' },
        { type: 'paragraph', text: '书面表达就是高考英语里的作文题，也叫写作题。它考查你能不能用学过的英语，把心里想说的话清楚、正确地写出来，完成一次真实的交流任务。比如写信、写通知、写演讲稿，都是常见的书面表达。' },
        { type: 'list', items: ['会不会把题目要求的内容写完整，不漏要点。', '会不会用对的单词、对的语法，把句子写通顺。', '会不会把段落安排好，让文章读起来有条理。', '能不能用英语完成一次真实的沟通，而不是只堆单词。'] },
        { type: 'keypoint', label: '重点·一句话', text: '书面表达考查的是<strong>用英语完成一次真实写作交流</strong>的能力，<br>而不是背多少单词、记多少语法条条。' },
        { type: 'table', headers: ['维度', '说明'], rows: [['内容维度', '是否完整涵盖题目要求的所有要点'], ['语言维度', '词汇、语法、句式的正确性与丰富性'], ['结构维度', '篇章结构是否清晰、逻辑是否连贯']] },
        { type: 'paragraph', text: '上面这张表是书面表达评分的三根支柱：内容、语言、结构。阅卷老师基本就是按这三方面给你打分。下面我们分别用生活里的例子讲明白，每一根支柱倒了会出什么问题。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图1 书面表达：区分度最高的题型</text><rect x="40" y="70" width="280" height="170" rx="12" fill="#9c56d4"/><text x="180" y="135" font-size="30" fill="#ffffff" text-anchor="middle">新高考</text><text x="180" y="180" font-size="34" fill="#ffffff" text-anchor="middle">40分</text><text x="180" y="215" font-size="14" fill="#ffffff" text-anchor="middle">分值最高的一块</text><rect x="360" y="70" width="280" height="170" rx="12" fill="#b87fd8"/><text x="500" y="135" font-size="30" fill="#3a2a4a" text-anchor="middle">全国卷</text><text x="500" y="180" font-size="34" fill="#3a2a4a" text-anchor="middle">25分</text><text x="500" y="215" font-size="14" fill="#3a2a4a" text-anchor="middle">占比约五分之一</text><text x="340" y="290" font-size="15" fill="#3a2a4a" text-anchor="middle">区分度最高：写得好与差，分差最明显</text><text x="340" y="320" font-size="13" fill="#5a7a2a" text-anchor="middle">所以这一块值得花精力练</text></svg>', caption: '图1 书面表达分值高、区分度大，是拉开差距的关键题型' },
        { type: 'heading', text: '二、内容维度：该写的都写了吗' },
        { type: 'paragraph', text: '内容维度看的是：题目让你写的要点，你是不是一个都没落下。题目一般会列出两三条要求，比如写清原因、给出建议、表达期待。只要漏掉一条，内容就不完整，这一项就会扣分。' },
        { type: 'example', label: '例子', text: '假设题目让你写一封建议信，要求写三点：先问候、再给具体建议、最后表达祝愿。如果你只写了问候和祝愿，却忘了写建议的具体内容，那内容维度就不完整，老师会扣内容分。' },
        { type: 'tip', label: '技巧', text: '动笔前先把题目要点<strong>逐条圈出来</strong>，<br>写完一段就划掉一条，保证一个都不漏。' },
        { type: 'heading', text: '三、语言维度：句子对不对、丰不丰富' },
        { type: 'paragraph', text: '语言维度看你的英语基本功：单词用得对不对、语法有没有错、句式是不是太单一。通篇都是 I think 和 I like 这种简单句，语言就不够丰富；同样的词翻来覆去用，也不够好。' },
        { type: 'example', label: '例子', text: '同样是表达我认为，初级写法只会写 I think we should read more。进阶写法可以用 In my opinion 或 From my point of view，再用上 Firstly、Moreover 连接，句子立刻丰富起来。' },
        { type: 'warn', label: '易错', text: '易错：为了显高级<strong>硬套长难句</strong>，<br>结果语法出错，反倒不如写对简单句。先求对，再求好。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图2 书面表达三维度：内容·语言·结构</text><rect x="30" y="70" width="190" height="200" rx="12" fill="#9c56d4"/><text x="125" y="130" font-size="18" fill="#ffffff" text-anchor="middle">内容维度</text><text x="125" y="165" font-size="13" fill="#ffffff" text-anchor="middle">要点全不全</text><text x="125" y="195" font-size="13" fill="#ffffff" text-anchor="middle">漏一条就扣分</text><rect x="245" y="70" width="190" height="200" rx="12" fill="#b87fd8"/><text x="340" y="130" font-size="18" fill="#3a2a4a" text-anchor="middle">语言维度</text><text x="340" y="165" font-size="13" fill="#3a2a4a" text-anchor="middle">对错与丰富</text><text x="340" y="195" font-size="13" fill="#3a2a4a" text-anchor="middle">句式要多变</text><rect x="460" y="70" width="190" height="200" rx="12" fill="#9c56d4"/><text x="555" y="130" font-size="18" fill="#ffffff" text-anchor="middle">结构维度</text><text x="555" y="165" font-size="13" fill="#ffffff" text-anchor="middle">条理与连贯</text><text x="555" y="195" font-size="13" fill="#ffffff" text-anchor="middle">有头有尾</text><text x="340" y="305" font-size="14" fill="#5a7a2a" text-anchor="middle">三根支柱都稳，文章才得高分</text></svg>', caption: '图2 书面表达评分三维度：内容、语言、结构' },
        { type: 'heading', text: '四、结构维度：文章有没有骨架' },
        { type: 'paragraph', text: '结构维度看文章整不整体：有没有开头、中间、结尾，段落之间连不连贯。一篇好文章像一栋房子，开头是门面，中间是房间，结尾是后院，缺一块都不完整。' },
        { type: 'example', label: '例子', text: '写建议信如果一上来就写你应该多读书，没有称呼和问候，也没有结尾的祝福，结构就不清。正确做法是开头问候、中间分段给建议、结尾表达祝愿，层次分明。' },
        { type: 'list', items: ['开头：礼貌问候，点明写信目的。', '中间：分段展开，每段一个要点，用 Firstly、Secondly、Moreover 连接。', '结尾：总结或表达祝愿，留下好印象。', '整体：句与句、段与段用连接词串起来，读着顺。'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图3 写一封信：要点完整 vs 漏要点</text><rect x="40" y="70" width="280" height="220" rx="12" fill="#5a7a2a"/><text x="180" y="110" font-size="17" fill="#ffffff" text-anchor="middle">要点完整</text><text x="180" y="150" font-size="13" fill="#ffffff" text-anchor="middle">问候</text><text x="180" y="180" font-size="13" fill="#ffffff" text-anchor="middle">具体建议</text><text x="180" y="210" font-size="13" fill="#ffffff" text-anchor="middle">表达祝愿</text><text x="180" y="250" font-size="15" fill="#ffffff" text-anchor="middle">内容分拿满</text><rect x="360" y="70" width="280" height="220" rx="12" fill="#c0392b"/><text x="500" y="110" font-size="17" fill="#ffffff" text-anchor="middle">漏了要点</text><text x="500" y="150" font-size="13" fill="#ffffff" text-anchor="middle">问候</text><text x="500" y="180" font-size="13" fill="#ffffff" text-anchor="middle">缺具体建议</text><text x="500" y="210" font-size="13" fill="#ffffff" text-anchor="middle">表达祝愿</text><text x="500" y="250" font-size="15" fill="#ffffff" text-anchor="middle">内容分被扣</text></svg>', caption: '图3 写一封信：要点完整能拿满内容分，漏要点会被扣分' },
        { type: 'keypoint', label: '重点·复习落点', text: '练书面表达要<strong>三维度一起抓</strong>：<br>先保内容不漏点，再练语言丰富，最后把结构搭稳。' },
        { type: 'paragraph', text: '一句话记住考查目标：书面表达考查你能不能用英语完成一次真实写作。内容要全、语言要对而丰富、结构要清。下一节我们看命题这几年在怎么变。' }
      ],
      exercises: [
        { type: 'choice', question: '书面表达（作文）主要考查的是以下哪一项？', options: ['A. 背诵单词的数量多少', 'B. 用英语完成真实写作交流的能力', 'C. 汉字书写是否工整', 'D. 听力速度与发音水平'], answer: 'B. 用英语完成真实写作交流的能力', explanation: '书面表达不是单纯考背单词或汉字书写，而是考查你能否运用英语知识，在真实情境里完成一次写作交流任务，比如写信、写通知、写演讲稿等。所以正确选项是B。' },
        { type: 'choice', question: '书面表达的"内容维度"最关注的是什么？', options: ['A. 字迹潦草与否', 'B. 是否完整涵盖题目要求的所有要点', 'C. 文章用了多少生僻词', 'D. 纸张是否整洁'], answer: 'B. 是否完整涵盖题目要求的所有要点', explanation: '内容维度关注的是文章是否把题目要求的所有要点都写出来了。字迹、纸张整洁不属于内容维度，生僻词多少也不是内容维度的核心，所以选B。' },
        { type: 'choice', question: '关于"语言维度"，下列哪种做法更稳妥？', options: ['A. 通篇只用 I think 简单句', 'B. 硬套复杂长句导致语法错误', 'C. 先保证语法正确，再丰富句式', 'D. 完全不写连接词'], answer: 'C. 先保证语法正确，再丰富句式', explanation: '语言维度要求语法正确且句式丰富。硬套长句导致出错不如先写对简单句，通篇简单句又不够丰富；正确做法是先保证正确，再逐步丰富句式，所以选C。' },
        { type: 'fill', question: '书面表达评分三维度是内容维度、语言维度和____维度。', answer: '结构', explanation: '书面表达评分通常从三个维度进行：内容维度看要点是否齐全，语言维度看词汇语法是否正确丰富，结构维度看篇章是否清晰连贯。所以第三个维度是结构。' },
        { type: 'fill', question: '在新高考省份，书面表达分值约为____分，是区分度最高的题型（全国卷约为25分）。', answer: '40|四十', explanation: '在新高考改革省份，书面表达（作文）分值达到40分，是整张试卷里分值最高、区分度最大的一块；全国卷中约为25分。所以这里填40（或四十）。' }
      ]
    },
    {
      id: `zt4-u1-l2`,
      name: `命题趋势`,
      chapter: `书面表达 · 第1单元 考查要求与命题趋势`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、命题趋势总览' },
        { type: 'paragraph', text: '近几年书面表达的命题一直在变：更看重你的真实语用能力，题目也更贴近生活。把握住五大趋势，复习才能对准方向，不白费力气。' },
        { type: 'list', items: ['从单纯传递信息，转向论证观点、考查综合素养。', '题目贴近学生生活，强调真实情境。', '开放性变强，鼓励创新表达，不再机械套作。', '重视逻辑、批判、创造等思维品质。', '主题凸显核心价值观与文化自信。'] },
        { type: 'table', headers: ['趋势维度', '具体表现'], rows: [['素养导向', '从单纯信息传递向观点论证与综合素养考查转变，注重语用能力与实际问题解决'], ['真实情境', '命题贴近学生生活，体现真实情境加多维思维加综合能力特征'], ['开放性增强', '从机械套作向创新表达转变，试题开放性、创新性增强'], ['思维品质', '强调对逻辑性、批判性、创造性思维的考查'], ['文化自信', '主题内容凸显核心价值观与文化自信']] },
        { type: 'keypoint', label: '重点·一句话', text: '命题大方向：<strong>更真实、更开放、更重思维与文化</strong>，<br>死记模板越来越不管用了。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图1 书面表达五大命题趋势</text><rect x="40" y="60" width="600" height="46" rx="10" fill="#9c56d4"/><text x="340" y="89" font-size="16" fill="#ffffff" text-anchor="middle">1 素养导向：从信息传递到观点论证</text><rect x="40" y="116" width="600" height="46" rx="10" fill="#b87fd8"/><text x="340" y="145" font-size="16" fill="#3a2a4a" text-anchor="middle">2 真实情境：贴近学生生活</text><rect x="40" y="172" width="600" height="46" rx="10" fill="#9c56d4"/><text x="340" y="201" font-size="16" fill="#ffffff" text-anchor="middle">3 开放性增强：鼓励创新表达</text><rect x="40" y="228" width="600" height="46" rx="10" fill="#b87fd8"/><text x="340" y="257" font-size="16" fill="#3a2a4a" text-anchor="middle">4 思维品质：逻辑、批判、创造</text><rect x="40" y="284" width="600" height="46" rx="10" fill="#9c56d4"/><text x="340" y="313" font-size="16" fill="#ffffff" text-anchor="middle">5 文化自信：凸显核心价值观</text></svg>', caption: '图1 书面表达五大命题趋势：素养、情境、开放、思维、文化' },
        { type: 'heading', text: '二、趋势一：素养导向' },
        { type: 'paragraph', text: '过去作文可能只要你把一件事说清楚；现在更希望你亮出观点、给出理由、论证清楚。它考的是你能不能真正用英语思考和表达，而不是搬运模板句。' },
        { type: 'example', label: '例子', text: '题目从描述一次志愿者活动变成谈谈志愿服务对你的成长有什么意义。后者要求你论证观点，体现综合素养，这就是素养导向。' },
        { type: 'tip', label: '技巧', text: '写观点类作文：<strong>先亮观点，再给两三个理由</strong>，<br>每个理由配一个例子，论证就扎实。' },
        { type: 'heading', text: '三、趋势二：真实情境' },
        { type: 'paragraph', text: '题目越来越像生活里真会遇到的事：给外国朋友写回信、给校刊写投稿、为活动做海报。情境真实，你写的英语才真正用得上。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图2 真实情境示例：贴近学生生活</text><rect x="50" y="70" width="580" height="220" rx="14" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="340" y="110" font-size="16" fill="#7a3fb0" text-anchor="middle">题目示例</text><text x="90" y="150" font-size="14" fill="#3a2a4a" text-anchor="start">你的英国笔友 Tom 要来中国过春节，</text><text x="90" y="180" font-size="14" fill="#3a2a4a" text-anchor="start">请你写一封信，介绍一个春节习俗，</text><text x="90" y="210" font-size="14" fill="#3a2a4a" text-anchor="start">并邀请他来体验。</text><text x="340" y="262" font-size="13" fill="#5a7a2a" text-anchor="middle">情境真实，像生活里真会遇到的任务</text></svg>', caption: '图2 真实情境示例：题目像生活里真实发生的写作任务' },
        { type: 'example', label: '例子', text: '真实情境题示例：你的英国笔友 Tom 要来中国过春节，请你写信介绍一个春节习俗并邀请他体验。这就是贴近生活的真实写作任务。' },
        { type: 'warn', label: '易错', text: '易错：只背<strong>万能模板</strong>不审题，<br>结果内容和给定情境对不上，写得再华丽也跑题。' },
        { type: 'heading', text: '四、趋势三：开放性增强' },
        { type: 'paragraph', text: '老题往往规定得很死，照模板填就行；新题留给你发挥的空间更大，允许不同角度、不同表达。这考查的是你的原创能力，而不是背功。' },
        { type: 'list', items: ['同一题目可以有不同的切入角度。', '鼓励用自己真实的经历和语言去写。', '不再有唯一标准答案，重在合理与连贯。', '套用千篇一律的范文反而容易低分。'] },
        { type: 'heading', text: '五、趋势四：思维品质' },
        { type: 'paragraph', text: '好作文要有逻辑：先说什么后说什么，层层推进；也要有批判和创造：能换个角度看问题，能想出新鲜的点子。思维品质成了隐形的加分项。' },
        { type: 'example', label: '例子', text: '写该不该减少作业时，不只说该减，还能想到适量作业有助于巩固，再提出折中方案，这就体现了批判性思维和创造性。' },
        { type: 'heading', text: '六、趋势五：文化自信' },
        { type: 'paragraph', text: '近年题目常围绕中国元素：传统节日、非遗、科技成就等。目的是让你用英语讲中国故事，既练语言，又增强文化自信。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图3 文化自信主题示例卡</text><rect x="60" y="70" width="560" height="220" rx="14" fill="#9c56d4"/><text x="340" y="115" font-size="18" fill="#ffffff" text-anchor="middle">用英语讲中国故事</text><text x="340" y="155" font-size="14" fill="#ffffff" text-anchor="middle">介绍中秋节、春节、非遗等中国元素</text><text x="340" y="195" font-size="14" fill="#ffffff" text-anchor="middle">既练语言，又增强文化自信</text><text x="340" y="245" font-size="14" fill="#ffffff" text-anchor="middle">示例：向外国友人介绍中秋节</text><text x="340" y="300" font-size="13" fill="#5a7a2a" text-anchor="middle">中国主题成为书面表达高频方向</text></svg>', caption: '图3 文化自信主题示例卡：用英语讲好中国故事' },
        { type: 'example', label: '例子', text: '文化自信题示例：请用英语向外国友人介绍中秋节，并说明它为什么是重要的家庭团聚节日。这就是在用英语传播中国文化。' },
        { type: 'keypoint', label: '重点·复习落点', text: '面对新趋势：<strong>多练真实情境写作</strong>，<br>积累中国主题词块，训练观点论证与逻辑思维。' },
        { type: 'tip', label: '技巧', text: '备考三件事：<strong>读真实语料、写真实任务、积文化词块</strong>，<br>比背模板管用得多。' },
        { type: 'paragraph', text: '总结五大趋势：素养导向、真实情境、开放性增强、思维品质、文化自信。看清风向，书面表达练习就有的放矢了。' }
      ],
      exercises: [
        { type: 'choice', question: '命题趋势中的"素养导向"主要指什么？', options: ['A. 只考单词拼写', 'B. 从信息传递转向观点论证与综合素养考查', 'C. 取消写作题', 'D. 只背万能模板'], answer: 'B. 从信息传递转向观点论证与综合素养考查', explanation: '素养导向指命题从过去单纯考查信息传递，转向考查观点论证与综合素养，更注重真实语用和实际问题解决能力，而不是只考拼写或背模板。所以选B。' },
        { type: 'choice', question: '"真实情境"命题最主要的特点是什么？', options: ['A. 题目脱离生活、抽象难懂', 'B. 贴近学生生活，强调真实语境下的语用', 'C. 只用文言文出题', 'D. 完全不考写作'], answer: 'B. 贴近学生生活，强调真实语境下的语用', explanation: '真实情境命题强调题目贴近学生日常生活，让学生在真实语境下运用英语完成交际任务，而不是脱离生活、抽象难懂。所以选B。' },
        { type: 'choice', question: '关于"开放性增强"，下列哪种说法正确？', options: ['A. 必须照固定模板写', 'B. 试题开放创新，鼓励个性化表达', 'C. 只有唯一标准答案', 'D. 不允许自己举例'], answer: 'B. 试题开放创新，鼓励个性化表达', explanation: '开放性增强意味着试题留给学生的发挥空间更大，鼓励个性化、创新性的表达，不再只有唯一标准答案，也允许用自己的经历举例。所以选B。' },
        { type: 'fill', question: '书面表达五大命题趋势分别是：素养导向、真实情境、开放性增强、思维品质和____。', answer: '文化自信', explanation: '近年书面表达五大命题趋势分别是：素养导向、真实情境、开放性增强、思维品质、文化自信。文化自信体现在题目多围绕中国元素与传统价值。所以填文化自信。' },
        { type: 'fill', question: '思维品质的考查包含逻辑性、批判性和____思维三个方面。', answer: '创造性|创造', explanation: '思维品质的考查包含三个方面：逻辑性（条理清楚）、批判性（能换角度思考）、创造性（能提出新点子）。所以第三个是创造性（或创造）。' }
      ]
    }
  );
})();
