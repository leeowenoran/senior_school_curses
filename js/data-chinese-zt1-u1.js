(function () {
  var v = gzGetVolume('chinese', 'zt1');
  if (!v) return;
  v.points.push(

    /* ===================== 现代文阅读Ⅰ · 论述类文本阅读（一） ===================== */

    { id: 'zt1-u1-l1', name: '论述类文本阅读（一）：文本类型、核心能力与信息筛选', author: '高考复习', chapter: '现代文阅读Ⅰ · 论述类文本（一）', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、论述类文本的类型' },
        { type: 'paragraph', text: '论述类文本以说理、阐释观点为目的，讲究逻辑性与思辨性。高考现代文阅读Ⅰ（信息类文本）中的论述类文本，主要承担考查“分析论点、论据和论证方法”的任务。' },
        { type: 'keypoint', label: '常见文本类型', text: '高考常考的论述类文本包括<strong>政论文</strong>、<strong>学术论文</strong>、<strong>时评</strong>、<strong>书评</strong>等。它们共同特点是观点鲜明、论证严密、语言准确。' },
        { type: 'list', items: ['政论文：就政治或社会议题发表主张，立场鲜明', '学术论文：就专业问题展开研究论证，概念严谨', '时评：针对时事热点评说，现实性强', '书评：评介著作内容、价值与不足，重在评判'] },
        { type: 'heading', text: '二、核心能力要求' },
        { type: 'paragraph', text: '论述类文本阅读注重文本的说理性和逻辑性，要求读者能够穿透文字，把握作者的论证脉络与真实意图。' },
        { type: 'keypoint', label: '三大核心能力', text: '一是<strong>筛选并整合信息</strong>；二是<strong>分析论点、论据与论证方法</strong>；三是<strong>归纳概括与逻辑推理</strong>。这三项能力贯穿所有客观题与主观题。' },
        { type: 'heading', text: '三、高频考点：筛选并整合文中信息' },
        { type: 'paragraph', text: '筛选是指从文中准确找出重要概念、观点、事实等信息；整合是指将这些分散的信息按题干要求归类、归纳，形成完整答案。' },
        { type: 'example', label: '解题示范', text: '题干要求“概括某现象的三点原因”。<br>正确做法是：先回文定位相关段落，圈出“因为”“由于”“源于”等标志词，再将分散的表述<strong>归纳为三条要点</strong>，而非照抄长句。' },
        { type: 'table', headers: ['步骤', '操作要点'], rows: [['读题', '明确筛选对象与限制条件'], ['定位', '回文找到对应区间，不凭印象'], ['筛选', '提取关键句、关键词'], ['整合', '归类合并，分条表述']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">信息筛选整合流程</text><rect x="30" y="70" width="130" height="50" rx="8" fill="#7aa05a"/><text x="95" y="100" text-anchor="middle" font-size="13" fill="#fff">读题明要求</text><rect x="185" y="70" width="130" height="50" rx="8" fill="#c08168"/><text x="250" y="100" text-anchor="middle" font-size="13" fill="#fff">回文定位区间</text><rect x="340" y="70" width="130" height="50" rx="8" fill="#a8632e"/><text x="405" y="100" text-anchor="middle" font-size="13" fill="#fff">筛选关键信息</text><rect x="495" y="70" width="150" height="50" rx="8" fill="#9c4221"/><text x="570" y="100" text-anchor="middle" font-size="13" fill="#fff">整合归纳表述</text><path d="M160 95 L183 95" stroke="#9c4221" stroke-width="3"/><path d="M315 95 L338 95" stroke="#9c4221" stroke-width="3"/><path d="M470 95 L493 95" stroke="#9c4221" stroke-width="3"/><text x="340" y="160" text-anchor="middle" font-size="13" fill="#555">“答案就在原文中”：定位→提取→归纳</text></svg>', caption: '筛选整合四步法：读题—定位—筛选—整合，核心是把原文信息转化为有条理的答案。' },
        { type: 'heading', text: '四、高频考点：理解文中重要概念的含义' },
        { type: 'paragraph', text: '重要概念往往是文章论证的支点。理解概念，既要把握其内涵（本质属性），也要明确其外延（所指对象的范围）。' },
        { type: 'keypoint', label: '内涵与外延', text: '<strong>内涵</strong>回答“概念是什么”（本质属性），<strong>外延</strong>回答“概念包括哪些对象”（适用范围）。理解概念须结合语境，不能脱离文本下定义。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">概念：内涵与外延</text><circle cx="200" cy="130" r="80" fill="#e8d9b0" stroke="#9c4221"/><text x="200" y="120" text-anchor="middle" font-size="14" fill="#5b2c16">内涵</text><text x="200" y="142" text-anchor="middle" font-size="12" fill="#5b2c16">概念的本质属性</text><text x="200" y="160" text-anchor="middle" font-size="12" fill="#5b2c16">（“是什么”）</text><circle cx="480" cy="130" r="80" fill="#cfe0c0" stroke="#7aa05a"/><text x="480" y="120" text-anchor="middle" font-size="14" fill="#3d5a2a">外延</text><text x="480" y="142" text-anchor="middle" font-size="12" fill="#3d5a2a">概念所指对象的范围</text><text x="480" y="160" text-anchor="middle" font-size="12" fill="#3d5a2a">（“有哪些”）</text></svg>', caption: '理解重要概念须同时看清其内涵（本质）与外延（范围），避免以偏概全。' },
        { type: 'heading', text: '五、高频考点：理解文中重要句子的含义' },
        { type: 'list', items: ['结构复杂的长句：须拆解层次、理清主干与修饰', '内涵丰富的句子：须结合上下文揣摩深层意蕴', '与中心密切相关的句子：须联系全文主旨理解'] },
        { type: 'warn', label: '易错提醒', text: '理解句子最忌<strong>脱离语境、望文生义</strong>。看似熟悉的成语或熟语，在文中可能有特定指向，须回到原句与段落中求解。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">重要句子含义理解三步</text><rect x="30" y="70" width="170" height="50" rx="8" fill="#7aa05a"/><text x="115" y="100" text-anchor="middle" font-size="13" fill="#fff">语境定位</text><rect x="255" y="70" width="170" height="50" rx="8" fill="#c08168"/><text x="340" y="100" text-anchor="middle" font-size="13" fill="#fff">拆解结构</text><rect x="480" y="70" width="170" height="50" rx="8" fill="#9c4221"/><text x="565" y="100" text-anchor="middle" font-size="13" fill="#fff">结合主旨</text><path d="M200 95 L253 95" stroke="#9c4221" stroke-width="3"/><path d="M425 95 L478 95" stroke="#9c4221" stroke-width="3"/><text x="340" y="160" text-anchor="middle" font-size="13" fill="#555">切忌脱离语境、望文生义</text></svg>', caption: '句子含义三步：先定位语境，再拆解结构，最后结合主旨作答。' },
        { type: 'tip', label: '学习提示', text: '论述类文本阅读的第一要务是“回到原文”。养成边读边圈画论点句、标志词、逻辑关联词的习惯，能大幅提升筛选与推断的准确率。' },
        { type: 'reading', text: '延伸思考：为什么高考把“筛选整合信息”放在论述类文本考查的首位？它与写作中的“引证”能力有何内在联系？' }
      ],
      exercises: [
        { type: 'choice', question: '下列属于论述类文本的一项是？', options: ['一篇新闻报道', '一篇学术论文', '一部长篇小说', '一首抒情诗歌'], answer: '一篇学术论文', explanation: '论述类文本以说理、阐释观点为目的，讲究逻辑性与思辨性，常见类型有政论文、学术论文、时评、书评等。新闻报道属实用类，小说与诗歌属文学类，只有学术论文符合论述类文本“论证观点”的本质特征，故选“一篇学术论文”。' },
        { type: 'fill', question: '论述类文本阅读的核心能力注重文本的__性与逻辑性，要求分析论点、论据和论证方法。', answer: '说理', explanation: '题干考查论述类文本的核心能力要求。原文明确指出“注重文本的说理性和逻辑性”，因此所缺词语为“说理”。把握说理性是读懂论证、分析论证方法的前提。' },
        { type: 'choice', question: '下列关于“筛选并整合文中信息”的做法，正确的一项是？', options: ['凭平时印象直接作答', '通读后凭语感概括', '回文定位区间，提取关键句再归类整合', '只抄录文中最长的一句话'], answer: '回文定位区间，提取关键句再归类整合', explanation: '筛选整合信息必须“答案在原文中”：先读题明确对象，再回文找到对应区间，提取关键句与关键词，最后归类合并、分条表述。凭印象、凭语感或照抄长句都违背了这一原则，故正确做法是回文定位后提取整合。' },
        { type: 'fill', question: '理解文中重要概念，既要把握其“内涵”（本质属性），也要明确其“__”（所指对象的范围）。', answer: '外延', explanation: '概念由内涵与外延两方面构成：内涵是概念的本质属性，回答“是什么”；外延是概念所指对象的范围，回答“有哪些”。理解重要概念须二者兼顾，避免以偏概全。' },
        { type: 'choice', question: '理解文中“结构复杂、内涵丰富”的重要句子，最恰当的做法是？', options: ['照搬字典释义', '结合语境与文章主旨揣摩', '只看本句字面意思', '用近义词简单替换'], answer: '结合语境与文章主旨揣摩', explanation: '重要句子往往结构复杂或意蕴深厚，脱离语境容易望文生义。正确理解须先定位该句所处语境，拆解句子结构，再联系全文主旨与作者观点综合揣摩，故选“结合语境与文章主旨揣摩”。' }
      ]
    },

    /* ===================== 现代文阅读Ⅰ · 论述类文本阅读（二） ===================== */

    { id: 'zt1-u1-l2', name: '论述类文本阅读（二）：论点、论据、论证与结构', author: '高考复习', chapter: '现代文阅读Ⅰ · 论述类文本（二）', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、分析论点（中心论点与分论点）' },
        { type: 'paragraph', text: '论点是作者对所论述问题的见解和主张，是全文的灵魂。一篇规范的论述文通常有一个中心论点，并由若干分论点支撑。' },
        { type: 'keypoint', label: '论点的特征', text: '中心论点一般是<strong>明确的判断句</strong>，旗帜鲜明，不模棱两可；常出现在标题、开头、结尾或段落首尾。分论点是中心论点的展开与支撑。' },
        { type: 'list', items: ['标题即论点：如“持之以恒方能致远”', '开头亮明：开门见山提出中心论点', '结尾归结：前文铺陈后卒章显志', '段首撮要：每段首句凝练分论点'] },
        { type: 'example', label: '识别示范', text: '某文首段末句：“由此可见，<strong>守正创新是文化传承的根本路径</strong>。”<br>该句为判断句且统摄全文，即为本文中心论点；其后各段分别从“守正”“创新”两方面展开，是为分论点。' },
        { type: 'heading', text: '二、分析论据（事实论据与道理论据）' },
        { type: 'paragraph', text: '论据是用来证明论点的材料。按性质可分为事实论据和道理论据，二者一实一虚，共同支撑观点。' },
        { type: 'table', headers: ['类型', '内容', '特点'], rows: [['事实论据', '事例、数据、史实', '具体可感，说服力来自真实'], ['道理论据', '名言、定理、公理', '权威性强，说服力来自共识']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">论点与论据的支撑关系</text><rect x="220" y="50" width="240" height="44" rx="8" fill="#9c4221"/><text x="340" y="78" text-anchor="middle" font-size="14" fill="#fff">中心论点</text><rect x="60" y="140" width="160" height="44" rx="8" fill="#c08168"/><text x="140" y="168" text-anchor="middle" font-size="13" fill="#fff">分论点一+论据</text><rect x="260" y="140" width="160" height="44" rx="8" fill="#c08168"/><text x="340" y="168" text-anchor="middle" font-size="13" fill="#fff">分论点二+论据</text><rect x="460" y="140" width="160" height="44" rx="8" fill="#c08168"/><text x="540" y="168" text-anchor="middle" font-size="13" fill="#fff">分论点三+论据</text><path d="M340 94 L140 138" stroke="#9c4221" stroke-width="2"/><path d="M340 94 L340 138" stroke="#9c4221" stroke-width="2"/><path d="M340 94 L540 138" stroke="#9c4221" stroke-width="2"/></svg>', caption: '中心论点统摄分论点，分论点各配论据，形成“论点—论据”的支撑结构。' },
        { type: 'heading', text: '三、分析论证方法' },
        { type: 'list', items: ['举例论证：用典型事例证明观点', '道理论证：引用名言、原理增强权威', '对比论证：正反对照，突出观点', '比喻论证：用比喻说理，深入浅出', '因果论证：由因推果或由果溯因'] },
        { type: 'keypoint', label: '方法的作用', text: '辨析论证方法不能停留在“叫出名字”，更要答出<strong>它证明了什么、有何效果</strong>。如比喻论证使抽象道理形象易懂，对比论证使是非分明。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">常见论证方法</text><rect x="30" y="70" width="115" height="46" rx="8" fill="#7aa05a"/><text x="87" y="98" text-anchor="middle" font-size="13" fill="#fff">举例论证</text><rect x="160" y="70" width="115" height="46" rx="8" fill="#c08168"/><text x="217" y="98" text-anchor="middle" font-size="13" fill="#fff">道理论证</text><rect x="290" y="70" width="115" height="46" rx="8" fill="#a8632e"/><text x="347" y="98" text-anchor="middle" font-size="13" fill="#fff">对比论证</text><rect x="420" y="70" width="115" height="46" rx="8" fill="#9c4221"/><text x="477" y="98" text-anchor="middle" font-size="13" fill="#fff">比喻论证</text><rect x="550" y="70" width="115" height="46" rx="8" fill="#7a6fae"/><text x="607" y="98" text-anchor="middle" font-size="13" fill="#fff">因果论证</text><text x="340" y="160" text-anchor="middle" font-size="13" fill="#555">方法服务于论点，辨析其作用须结合语境</text></svg>', caption: '五种常见论证方法各有侧重，分析时须点明其服务的论点与表达效果。' },
        { type: 'heading', text: '四、分析论证结构' },
        { type: 'paragraph', text: '论证结构是文章思路的外在体现。把握结构有助于快速理清作者“先说什么、后说什么”，从而准确归纳段落大意。' },
        { type: 'table', headers: ['结构', '特征'], rows: [['总分式', '先总提，后分述（总分、分总、总分总）'], ['并列式', '各层次平行展开，无主次先后'], ['对比式', '正反对照，在比较中显立场'], ['层进式', '由浅入深、由表及里层层推进']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">论证结构类型</text><text x="115" y="60" text-anchor="middle" font-size="13" fill="#9c4221">总分式</text><rect x="40" y="72" width="150" height="34" rx="6" fill="#9c4221"/><text x="115" y="94" text-anchor="middle" font-size="12" fill="#fff">总</text><rect x="40" y="116" width="46" height="30" rx="6" fill="#c08168"/><rect x="92" y="116" width="46" height="30" rx="6" fill="#c08168"/><rect x="144" y="116" width="46" height="30" rx="6" fill="#c08168"/><text x="275" y="60" text-anchor="middle" font-size="13" fill="#9c4221">并列式</text><rect x="210" y="116" width="46" height="30" rx="6" fill="#c08168"/><rect x="262" y="116" width="46" height="30" rx="6" fill="#c08168"/><rect x="314" y="116" width="46" height="30" rx="6" fill="#c08168"/><text x="435" y="60" text-anchor="middle" font-size="13" fill="#9c4221">对比式</text><rect x="370" y="116" width="64" height="30" rx="6" fill="#7aa05a"/><rect x="440" y="116" width="64" height="30" rx="6" fill="#c0473a"/><text x="585" y="60" text-anchor="middle" font-size="13" fill="#9c4221">层进式</text><rect x="520" y="72" width="130" height="28" rx="6" fill="#9c4221"/><rect x="520" y="106" width="130" height="28" rx="6" fill="#c08168"/><rect x="520" y="140" width="130" height="28" rx="6" fill="#a8632e"/><text x="340" y="210" text-anchor="middle" font-size="12" fill="#555">把握结构有助于快速理清文章思路</text></svg>', caption: '四种基本论证结构：总分式、并列式、对比式、层进式，须结合文本辨识。' },
        { type: 'warn', label: '易混淆点', text: '<strong>并列式与对比式</strong>容易混淆：并列式的各层地位平等、无对立；对比式则刻意将正反两面对照以凸显立场。辨清结构类型，才能准确概括段落关系。' },
        { type: 'tip', label: '学习提示', text: '画“论证结构图”是高效复习法：用“中心论点—分论点—论据—方法”四层把文章骨架画出来，论证思路一目了然。' },
        { type: 'reading', text: '延伸思考：同一则论据，能否同时支撑“举例论证”和“对比论证”？请结合具体文段说明论证方法的综合运用。' }
      ],
      exercises: [
        { type: 'choice', question: '下列关于中心论点的表述，正确的一项是？', options: ['中心论点多是疑问句', '中心论点一般是明确的判断句，旗帜鲜明', '中心论点只能出现在文章结尾', '分论点与中心论点无关'], answer: '中心论点一般是明确的判断句，旗帜鲜明', explanation: '中心论点是作者对所论述问题的最核心见解与主张，通常是一个明确的判断句，立场鲜明，常出现在标题、开头、结尾或段首。它不可能是疑问句，也不只限于结尾，且分论点正是为支撑中心论点而设，故选“明确的判断句”这一表述。' },
        { type: 'fill', question: '论据按性质可分为__论据（事例、数据、史实）和道理论据（名言、定理）。', answer: '事实', explanation: '论据是证明论点的材料，分为事实论据与道理论据两类。事实论据以具体事例、数据、史实说话，道理论据则引用名言、原理、公理。题干括号中“事例、数据、史实”对应事实论据，故填“事实”。' },
        { type: 'choice', question: '“将两种相反的观点并列对照，以突出作者立场”，这属于哪种论证方法？', options: ['举例论证', '对比论证', '比喻论证', '因果论证'], answer: '对比论证', explanation: '对比论证是把两种对立的事物或观点并列对照，在比较中辨明是非、凸显作者立场。题干“相反的观点并列对照”正是其典型特征；举例用事例，比喻用喻体，因果讲推演，均不符，故选对比论证。' },
        { type: 'fill', question: '文章先提出总观点，再从几个方面分别论述，这种论证结构属于__式。', answer: '总分', explanation: '论证结构主要有总分式、并列式、对比式、层进式。题干“先总提、后分述”符合总分式（具体可为总分、分总或总分总）的特征，故填“总分”。' },
        { type: 'choice', question: '下列关于论证方法作用的分析，最恰当的是？', options: ['只需叫出方法名称即可', '比喻论证使道理抽象难懂', '应点明它证明了什么及表达效果', '对比论证削弱观点'], answer: '应点明它证明了什么及表达效果', explanation: '分析论证方法不能只贴标签，必须结合语境说明该方法证明了哪个分论点、产生了什么表达效果。例如比喻论证使抽象道理形象易懂，对比论证使立场更鲜明。选项“叫出名称即可”“比喻使道理难懂”“对比削弱观点”均有误，故选“点明证明内容与效果”。' }
      ]
    },

    /* ===================== 现代文阅读Ⅰ · 论述类文本阅读（三） ===================== */

    { id: 'zt1-u1-l3', name: '论述类文本阅读（三）：观点概括、合理推断与客观题设误', author: '高考复习', chapter: '现代文阅读Ⅰ · 论述类文本（三）', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、分析概括作者观点态度' },
        { type: 'paragraph', text: '作者观点态度散见于议论、评价与抒情之中。概括时要区分“作者自己的看法”与“他人引述的看法”，避免张冠李戴。' },
        { type: 'keypoint', label: '观点态度标志', text: '关注<strong>“认为”“可见”“由此可见”“应当”“必须”</strong>等标志词，以及文末的总结句，它们往往直接承载作者立场。' },
        { type: 'list', items: ['抓标志词：认为、可见、表明、主张', '抓评价句：对人物、现象的褒贬评判', '抓总结句：段末、篇末的归结性话语', '辨引述：区分作者观点与被引者观点'] },
        { type: 'heading', text: '二、根据文本内容合理推断' },
        { type: 'paragraph', text: '推断题要求依据文中已有信息，合乎逻辑地推导出原文未直接说出但必然成立的结论。推断必须“有据可依”，不能凭空臆测或过度引申。' },
        { type: 'example', label: '推断示范', text: '原文：“该市连续三年人口净流入，且新兴产业占比逐年提升。”<br>可推断：“该市经济活力 likely 持续增强。”——这是基于原文信息的<strong>合理顺推</strong>；但若推出“该市房价必然翻倍”则属过度引申。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">合理推断的逻辑链</text><rect x="40" y="80" width="170" height="50" rx="8" fill="#7aa05a"/><text x="125" y="110" text-anchor="middle" font-size="13" fill="#fff">原文信息</text><rect x="255" y="80" width="170" height="50" rx="8" fill="#c08168"/><text x="340" y="110" text-anchor="middle" font-size="13" fill="#fff">逻辑推导</text><rect x="470" y="80" width="170" height="50" rx="8" fill="#9c4221"/><text x="555" y="110" text-anchor="middle" font-size="13" fill="#fff">合理结论</text><path d="M210 105 L253 105" stroke="#9c4221" stroke-width="3"/><path d="M425 105 L468 105" stroke="#9c4221" stroke-width="3"/><text x="340" y="170" text-anchor="middle" font-size="13" fill="#555">推断须有据可依，忌无中生有、过度引申</text></svg>', caption: '合理推断三环节：立足原文信息→合乎逻辑推导→得出必然结论，缺一不可。' },
        { type: 'heading', text: '三、常见客观题设误类型' },
        { type: 'paragraph', text: '论述类文本客观题常在选项上“做手脚”。熟悉六大设误类型，能帮你在比读原文与选项时迅速识破陷阱。' },
        { type: 'table', headers: ['设误方式', '具体表现'], rows: [['偷换概念', '将原文概念替换为相近但不同的概念'], ['曲解文意', '对原文语句进行歪曲理解'], ['强加因果', '把无因果关系的内容强行挂钩'], ['以偏概全', '用局部信息替代整体结论'], ['混淆时态', '“已然”与“未然”、“或然”与“必然”混谈'], ['无中生有', '选项内容在原文中毫无依据']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">客观题六大设误类型</text><rect x="40" y="50" width="290" height="40" rx="6" fill="#7aa05a"/><text x="185" y="75" text-anchor="middle" font-size="13" fill="#fff">原文（正确信息）</text><rect x="350" y="50" width="290" height="40" rx="6" fill="#c0473a"/><text x="495" y="75" text-anchor="middle" font-size="13" fill="#fff">选项（设误表现）</text><text x="40" y="130" font-size="13" fill="#555">偷换概念·曲解文意·强加因果</text><text x="40" y="160" font-size="13" fill="#555">以偏概全·混淆时态·无中生有</text><text x="350" y="130" font-size="13" fill="#555">概念被替换 / 文意被歪曲</text><text x="350" y="160" font-size="13" fill="#555">硬加因果 / 局部代整体 / 时态乱</text><text x="340" y="220" text-anchor="middle" font-size="13" fill="#9c4221">比读原文与选项，识破“偷梁换柱”</text></svg>', caption: '六大设误本质都是“篡改原文信息”：或换概念，或乱因果，或夸范围，须逐字比对。' },
        { type: 'keypoint', label: '解题要诀', text: '比读时坚持<strong>“字字落实”</strong>：选项的每一个限定词都要在原文找到对应依据，凡找不到依据的，多半是“无中生有”或“偷换概念”。' },
        { type: 'heading', text: '四、解题要点' },
        { type: 'list', items: ['树立“答案就在原文中”的意识，不主观臆断', '重点关注修饰限制性词语：范围词、程度词、时间词、判断词', '关注逻辑关联词：因果、转折、条件、假设'] },
        { type: 'warn', label: '易错提醒', text: '范围词（如“都”“全部”“一概”）与程度词（如“最”“主要”“一定程度”）最易被偷偷改动。<strong>漏看一个“都”字，就可能从“部分”变成“全部”</strong>，落入以偏概全陷阱。' },
        { type: 'example', label: '设误识别示范', text: '原文：“部分传统工艺面临失传风险。”<br>选项：“传统工艺均已失传。”——将“部分”篡为“均已”，属<strong>以偏概全+混淆时态</strong>，明显错误。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">论述类文本解题三要点</text><rect x="40" y="70" width="180" height="60" rx="8" fill="#9c4221"/><text x="130" y="100" text-anchor="middle" font-size="13" fill="#fff">① 答案在原文</text><text x="130" y="118" text-anchor="middle" font-size="11" fill="#fff">定位比对</text><rect x="250" y="70" width="180" height="60" rx="8" fill="#c08168"/><text x="340" y="100" text-anchor="middle" font-size="13" fill="#fff">② 盯修饰限制</text><text x="340" y="118" text-anchor="middle" font-size="11" fill="#fff">范围·程度·时间</text><rect x="460" y="70" width="180" height="60" rx="8" fill="#7aa05a"/><text x="550" y="100" text-anchor="middle" font-size="13" fill="#fff">③ 看逻辑关联</text><text x="550" y="118" text-anchor="middle" font-size="11" fill="#fff">因果·转折·条件</text></svg>', caption: '解题三要点：答案回原文、盯修饰限制词、看逻辑关联词，三者结合方保无误。' },
        { type: 'tip', label: '学习提示', text: '做客观题时，把选项拆成“限定词+主干”两部分，再逐项回文比对。养成这种“逐词比对”的习惯，设误类型基本无所遁形。' },
        { type: 'reading', text: '延伸思考：当原文使用“或然”（可能、也许）表述，而选项改为“必然”（一定、必将）时，除了“混淆时态”，能否同时视为“曲解文意”？请结合实例辨析。' }
      ],
      exercises: [
        { type: 'choice', question: '选项将原文“可能实现”表述为“必然实现”，这种设误类型属于？', options: ['偷换概念', '混淆时态', '以偏概全', '无中生有'], answer: '混淆时态', explanation: '原文用“可能”表示或然，选项改为“必然”表示确定，是把“或然”与“必然”混淆，属于“混淆时态”（也可归为混淆模态）。偷换概念换的是概念本身，以偏概全是用局部代整体，无中生有是毫无依据，均不符，故选“混淆时态”。' },
        { type: 'fill', question: '根据文本内容进行合理推断，必须立足于__信息，不能凭空臆测或过度引申。', answer: '原文', explanation: '推断题的核心要求是“有据可依”：所有合理结论都必须从原文已有信息出发，经合乎逻辑的导出，绝不能脱离文本主观臆断或过度引申。故填“原文”。' },
        { type: 'choice', question: '原文说“部分古籍存在讹误”，选项说“古籍普遍存在讹误”，这一设误属于？', options: ['偷换概念', '以偏概全', '强加因果', '曲解文意'], answer: '以偏概全', explanation: '原文限定为“部分”，选项扩大为“普遍（全部）”，是用局部信息替代整体结论，属于典型的“以偏概全”。它并未更换概念、硬加因果或歪曲单句文意，故选“以偏概全”。' },
        { type: 'fill', question: '解题时要重点关注修饰限制性词语，如范围词、__词、时间词、判断词等。', answer: '程度', explanation: '题干考查解题要点中的“修饰限制性词语”。这类词语包括范围词（都、全部）、程度词（最、主要、一定）、时间词（已、将、曾）、判断词（是、非）等，它们是客观题设误的高频改动点，故填“程度”。' },
        { type: 'choice', question: '选项内容在原文中完全找不到任何依据，这种设误方式是？', options: ['无中生有', '强加因果', '偷换概念', '混淆时态'], answer: '无中生有', explanation: '“无中生有”指选项表述的内容在原文中根本没有对应信息，是命题者凭空捏造的。强加因果是硬设因果，偷换概念是替换概念，混淆时态是乱用时态，均与“毫无依据”不符，故选“无中生有”。' }
      ]
    }

  );
})();
