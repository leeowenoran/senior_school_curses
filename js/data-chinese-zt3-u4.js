(function () {
  var v = gzGetVolume('chinese', 'zt3');
  if (!v) return;
  v.points.push(

    /* ===================== 考点七 · 句式变换与选用 ===================== */

    { id: 'zt3-u4-l1',    cover: 'assets/cover/chinese/zt3-u4-l1.svg',
    name: '语言文字运用（七）：句式变换与选用', author: '高考复习', chapter: '考点七 · 句式变换与选用', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、常见句式类型总览' },
        { type: 'paragraph', text: '句式变换与选用是高考语言文字运用的常考考点，核心是在不改变句子原意的前提下，根据表达需要改变句子的形式，或在特定语境中选择最恰当的句式。备考要先熟悉常见句式类型，再掌握变换与选用的具体方法。' },
        { type: 'keypoint', label: '六组常见句式类型', text: '<strong>长句与短句</strong>（信息容量与节奏不同）；<strong>主动句与被动句</strong>（强调施事或受事）；<strong>肯定句与否定句</strong>（语气强弱不同）；<strong>常式句与变式句</strong>（语序是否倒装）；<strong>整句与散句</strong>（结构是否整齐）；<strong>口语句式与书面语句式</strong>（语体色彩不同）。熟悉分类是解题的前提。' },
        { type: 'list', items: ['长句与短句：长句信息密集、语气舒缓；短句简洁明快、节奏感强', '主动句与被动句：主动句强调动作发出者，被动句强调动作承受者', '肯定句与否定句：否定句语气较轻，双重否定语气反而加强', '常式句与变式句：变式句把修饰语后置，起突出强调作用', '整句与散句：整句句式整齐、富有节奏；散句自由灵活', '口语句式与书面语句式：口语通俗自然，书面语严谨规范'] },
        { type: 'table', headers: ['句式类型', '特点与表达效果'], rows: [['长句', '结构复杂、信息密集，适合严密论述'], ['短句', '结构简单、节奏明快，适合描写与抒情'], ['被动句', '强调受事，常含“被”“受”“遭”等标志'], ['整句', '排比、对偶等，句式整齐，增强语势'], ['变式句', '主谓倒装、定语后置，突出被提前的成分']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">常见句式六组类型</text><rect x="40" y="50" width="190" height="44" rx="6" fill="#1f5f8b"/><text x="135" y="77" text-anchor="middle" font-size="12" fill="#fff">长句与短句</text><rect x="245" y="50" width="190" height="44" rx="6" fill="#4a8fa8"/><text x="340" y="77" text-anchor="middle" font-size="12" fill="#fff">主动与被动</text><rect x="455" y="50" width="190" height="44" rx="6" fill="#c07f4e"/><text x="550" y="77" text-anchor="middle" font-size="12" fill="#fff">肯定与否定</text><rect x="40" y="108" width="190" height="44" rx="6" fill="#7aa05a"/><text x="135" y="135" text-anchor="middle" font-size="12" fill="#fff">常式与变式</text><rect x="245" y="108" width="190" height="44" rx="6" fill="#7a6fae"/><text x="340" y="135" text-anchor="middle" font-size="12" fill="#fff">整句与散句</text><rect x="455" y="108" width="190" height="44" rx="6" fill="#b04a4a"/><text x="550" y="135" text-anchor="middle" font-size="12" fill="#fff">口语与书面</text><text x="340" y="195" text-anchor="middle" font-size="13" fill="#555">先熟悉分类，再谈变换与选用，是解题的前提</text></svg>', caption: '常见句式分六组：长短、主动被动、肯定否定、常式变式、整散、口语书面，各有不同表达效果。' },
        { type: 'heading', text: '二、长句变短句' },
        { type: 'paragraph', text: '长句变短句，就是把一个结构复杂、修饰语多的长句，拆分成几个短句，使意思表达得更清晰。高考常给出长单句，要求改写为一组短句，步骤固定、可操作。' },
        { type: 'list', items: ['第一步：提取主干。找出句子的主谓宾核心，留下最基本的陈述', '第二步：修饰成分单独成句。把长定语、长状语、并列修饰语分别独立成句', '第三步：按逻辑排序。把拆出的短句按时间、因果或事理顺序排列'] },
        { type: 'example', label: '长句变短句示范', text: '长句：“他那件刚从衣柜里翻出来的沾满灰尘的蓝色旧外套被妈妈洗得干干净净。”<br>拆主干：外套被洗得干干净净。<br>拆修饰：那是他的外套；外套是蓝色的、旧的；外套刚从衣柜里翻出来；外套沾满了灰尘。<br>排序：他那件蓝色旧外套刚从衣柜里翻出来，沾满了灰尘，被妈妈洗得干干净净。' },
        { type: 'warn', label: '易错提醒', text: '长句变短句后，最容易犯两个错误：一是<strong>逻辑顺序混乱</strong>，拆出的短句未按时间或事理排列，读起来颠三倒四；二是<strong>遗漏修饰信息</strong>，把长定语中的某个要点丢掉，导致改后句子意思不完整。拆句后要逐条对照原句，确认信息无遗漏。' },
        { type: 'heading', text: '三、短句变长句' },
        { type: 'paragraph', text: '短句变长句与长句变短句方向相反：把一组围绕同一话题的短句，合并成一个结构复杂的长单句。关键是先定主干，再把其余内容转化为修饰成分嵌入。' },
        { type: 'example', label: '短句变长句示范', text: '短句组：“村子里有一座古庙。古庙始建于明代。古庙在山坡上。古庙香火很旺。”<br>定主干：村子里有一座古庙。<br>嵌修饰：村子里有一座始建于明代、坐落在山坡上、香火很旺的古庙。' },
        { type: 'keypoint', label: '长变短与短变长的关系', text: '两类题方向相反但<strong>互逆</strong>：长变短先提主干再拆修饰；短变长先定主干句，再把其余句子变为定语、状语嵌入主干。无论哪种，都以<strong>不遗漏信息、不改变原意</strong>为底线。' },
        { type: 'heading', text: '四、重组句子' },
        { type: 'list', items: ['审清要求：看清题目要求“以某词开头”还是“以某句话作结”', '锁定原意：重组只能调整语序，绝不能增减原句的意思', '理顺语序：按语法和逻辑把原句成分重新组织成通顺的新句', '回读检验：写完对照原句，确认意思一致、表达通顺'] },
        { type: 'example', label: '重组句子示范', text: '原句：“我们不应该因为失败而放弃努力。”<br>要求以“失败”开头重组：<br>“失败不应该成为我们放弃努力的理由。”（调整语序，意思不变）<br>若硬以“放弃努力”开头，易写成“放弃努力，我们不应该因为失败而”，明显不通，须另谋顺畅表达并保持原意。' },
        { type: 'heading', text: '五、句式选用的原则' },
        { type: 'list', items: ['依语境：根据上下文的语体、对象选用口语或书面语', '依表达重点：要强调受事就用被动句，要突出语气就用否定或双重否定', '依上下文连贯：句式要与相邻句子结构协调，保持整散一致'] },
        { type: 'warn', label: '易错提醒', text: '重组句子最常见的错误是<strong>改变原意</strong>。很多同学为了凑出“以某词开头”的形式，擅自添加或删减内容，结果句子意思走了样。记住：重组可以调整语序、可增删个别连接词，但原句的核心信息一个都不能少。' },
        { type: 'keypoint', label: '变换句式总原则', text: '变换句式的总原则是：<strong>可以增删个别词语，但不能改变原意</strong>。增删只限于使语句通顺的连接性词语，原句的全部信息和基本态度必须保留。这是所有句式题的“红线”，作答后务必回读验证。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">长句变短句三步</text><rect x="30" y="65" width="180" height="50" rx="8" fill="#7aa05a"/><text x="120" y="89" text-anchor="middle" font-size="13" fill="#fff">提取主干</text><text x="120" y="107" text-anchor="middle" font-size="11" fill="#fff">留主谓宾</text><rect x="250" y="65" width="180" height="50" rx="8" fill="#4a8fa8"/><text x="340" y="89" text-anchor="middle" font-size="13" fill="#fff">修饰成句</text><text x="340" y="107" text-anchor="middle" font-size="11" fill="#fff">拆定状补</text><rect x="470" y="65" width="180" height="50" rx="8" fill="#1f5f8b"/><text x="560" y="89" text-anchor="middle" font-size="13" fill="#fff">逻辑排序</text><text x="560" y="107" text-anchor="middle" font-size="11" fill="#fff">按时事理</text><path d="M210 90 L248 90" stroke="#1f5f8b" stroke-width="3"/><path d="M430 90 L468 90" stroke="#1f5f8b" stroke-width="3"/><text x="340" y="165" text-anchor="middle" font-size="13" fill="#555">拆句后逐条对照原句，确认信息无遗漏</text></svg>', caption: '长句变短句三步：提取主干→修饰成句→逻辑排序，拆后务必对照原句查漏。' },
        { type: 'tip', label: '学习提示', text: '句式题训练要建立“主干意识”——拿到任何长句先找主谓宾，拿到任何重组题先想“原意是什么”。平时可把同一段话分别写成整句和散句、主动和被动各一版，体会不同句式的语气差异，考场上才能快速选对句式。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">句式选用三原则</text><rect x="40" y="55" width="190" height="44" rx="6" fill="#1f5f8b"/><text x="135" y="82" text-anchor="middle" font-size="12" fill="#fff">依语境</text><rect x="245" y="55" width="190" height="44" rx="6" fill="#4a8fa8"/><text x="340" y="82" text-anchor="middle" font-size="12" fill="#fff">依表达重点</text><rect x="455" y="55" width="190" height="44" rx="6" fill="#c07f4e"/><text x="550" y="82" text-anchor="middle" font-size="12" fill="#fff">依上下文连贯</text><rect x="40" y="120" width="600" height="44" rx="6" fill="#7aa05a"/><text x="340" y="147" text-anchor="middle" font-size="12" fill="#fff">总原则：可增删个别词语，但绝不能改变原意</text><text x="340" y="200" text-anchor="middle" font-size="13" fill="#555">三原则服务于“语境贴切、重点突出、前后连贯”</text></svg>', caption: '句式选用三原则：依语境、依表达重点、依上下文连贯，总红线是不变原意。' },
        { type: 'reading', text: '延伸思考：鲁迅常把常式句写成变式句（如“大概，是终于没有赵庄了罢”），通过语序倒装传达犹疑、沉重的情绪。请找一段你喜欢的文学作品，分析作者为何“故意”打乱常式，这种句式选择背后的情感逻辑是什么。' }
      ],
      exercises: [
        { type: 'choice', question: '长句变短句的第一步应当先做什么？', options: ['提取主干，保留核心意思', '直接打乱原句语序', '全部改写为被动句', '删除所有修饰成分'], answer: '提取主干，保留核心意思', explanation: '长句变短句的标准步骤是先把长句的主谓宾主干提取出来，作为基础短句，再把长长的定语、状语等修饰成分分别独立成句，最后按逻辑排序。直接打乱语序或全改被动句都不符合规范，删光修饰又会丢失信息，故选“提取主干，保留核心意思”。' },
        { type: 'fill', question: '短句变长句时，要先确定__句，再把其余句子变为修饰成分嵌入其中。', answer: '主干', explanation: '本题考查短句变长句的操作起点。多个短句围绕同一话题时，要先挑出那个能容纳其他信息的主干句，再把其余短句转化为定语、状语等修饰成分嵌入其中，合并成结构复杂的长单句。主干句定错，整句就会逻辑混乱，故填“主干”。' },
        { type: 'choice', question: '要求“以某词开头重组句子”，其核心要求是？', options: ['改变原意以求通顺', '保持原意不变', '尽量缩写为最短', '改用文言句式'], answer: '保持原意不变', explanation: '重组句子只是调整语序、改变句子开头或结尾的形式，核心约束是“原意不变”。若为了凑形式而改变甚至添加意思，就违背了变换句式的总原则。因此重组题的第一铁律是保持原意不变，故选此项。' },
        { type: 'fill', question: '变换句式的总原则是：可以增删个别词语，但绝不能__原意。', answer: '改变', explanation: '变换句式允许在必要时增删个别连接性词语，使改后语句通顺，但绝不允许改变句子原本表达的意思，这是所有句式题的红线。原句的信息与态度必须完整保留，哪怕只是调换了语序，句意也须与原句一致，故填“改变”。' },
        { type: 'choice', question: '下列句式中，强调动作承受者、突出受事的是？', options: ['主动句', '被动句', '肯定句', '常式句'], answer: '被动句', explanation: '主动句的主语是动作发出者，强调“谁做的”；被动句用“被”“受”“遭”等引出，主语是动作承受者，强调“受到了什么”。肯定句与否定句区别在语气而非施受，常式句与变式句区别在语序。故选“被动句”。' }
      ]
    },

    /* ===================== 考点八 · 压缩语段与扩展语句 ===================== */

    { id: 'zt3-u4-l2',    cover: 'assets/cover/chinese/zt3-u4-l2.svg',
    name: '语言文字运用（八）：压缩语段与扩展语句', author: '高考复习', chapter: '考点八 · 压缩语段与扩展语句', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、压缩语段四大题型总览' },
        { type: 'paragraph', text: '压缩语段要求把一段或几段文字，按题目要求提炼成更简短的语言，考查信息筛选、整合与概括能力。高考主要有四大题型：新闻类、概括要点类、下定义类、提取关键词类，各自有明确套路。' },
        { type: 'keypoint', label: '四大题型', text: '<strong>新闻类</strong>（拟标题、一句话新闻、拟导语、概写主要内容）；<strong>概括要点类</strong>（分层提取每层关键词后整合）；<strong>下定义类</strong>（格式“被定义概念=种差+邻近属概念”，用单句表述）；<strong>提取关键词类</strong>（抓取能概括核心的词语）。题型不同，方法各异。' },
        { type: 'list', items: ['新闻类：抓导语，提取主谓宾，控制字数', '概括要点类：先分层，再逐层提炼关键词', '下定义类：找种差与邻近属概念，套用固定格式', '提取关键词类：筛选高频、核心词，一般三到四个'] },
        { type: 'table', headers: ['题型', '核心方法', '字数要求'], rows: [['拟标题', '抓导语主谓宾', '最简短'], ['一句话新闻', '人物+事件+结果', '一句话'], ['下定义', '种差+邻近属概念', '单句'], ['提取关键词', '抓核心高频词', '三至四个词']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">压缩语段四大题型</text><rect x="40" y="50" width="290" height="60" rx="8" fill="#1f5f8b"/><text x="185" y="78" text-anchor="middle" font-size="13" fill="#fff">新闻类</text><text x="185" y="98" text-anchor="middle" font-size="11" fill="#fff">标题·一句话新闻·导语</text><rect x="350" y="50" width="290" height="60" rx="8" fill="#4a8fa8"/><text x="495" y="78" text-anchor="middle" font-size="13" fill="#fff">概括要点类</text><text x="495" y="98" text-anchor="middle" font-size="11" fill="#fff">分层提关键词</text><rect x="40" y="125" width="290" height="60" rx="8" fill="#c07f4e"/><text x="185" y="153" text-anchor="middle" font-size="13" fill="#fff">下定义类</text><text x="185" y="173" text-anchor="middle" font-size="11" fill="#fff">种差+属概念</text><rect x="350" y="125" width="290" height="60" rx="8" fill="#7aa05a"/><text x="495" y="153" text-anchor="middle" font-size="13" fill="#fff">提取关键词类</text><text x="495" y="173" text-anchor="middle" font-size="11" fill="#fff">抓核心高频词</text><text x="340" y="225" text-anchor="middle" font-size="13" fill="#555">题型不同方法异，先判断题型再套对应套路</text></svg>', caption: '压缩语段四大题型：新闻类、概括要点类、下定义类、提取关键词类，各有套路。' },
        { type: 'heading', text: '二、新闻类压缩' },
        { type: 'paragraph', text: '新闻类压缩是最常见题型，包括拟标题、写一句话新闻、拟导语、概写主要内容四种。它们层层递进：标题最精，一句话新闻次之，导语与主要内容更完整。' },
        { type: 'list', items: ['拟标题：从导语中抓主谓宾，舍去修饰，力求醒目简洁', '写一句话新闻：必备“人物+事件+结果”，一句话说完', '拟导语：用一句话概括最核心事实，含时间地点事件', '概写主要内容：保留主要信息与必要背景，删去细节'] },
        { type: 'example', label: '新闻类压缩示范', text: '新闻：“市图书馆昨日宣布，自本月起延长开放时间至晚上十点，以方便上班族借阅。”<br>拟标题：市图书馆延长开放时间。<br>一句话新闻：市图书馆自本月起延长开放至晚十点，方便上班族。<br>导语：市图书馆昨日宣布延长开放时间至晚上十点。' },
        { type: 'warn', label: '易错提醒', text: '拟标题与写一句话新闻常被混淆。<strong>标题最精炼、可无动词或省略主语</strong>；<strong>一句话新闻必须主谓宾齐全、是一句完整的话</strong>。另外新闻类压缩要忠于原文，不能自己添油加醋编结果。' },
        { type: 'heading', text: '三、概括要点与下定义' },
        { type: 'paragraph', text: '概括要点类要求把一段说明或论述分成若干层，逐层提取关键词再整合；下定义类则要求用严密的单句给概念下定义，是压缩题中格式感最强的一题。' },
        { type: 'list', items: ['概括要点：通读分层，每层用动宾短语提炼一个要点', '下定义先找“邻近属概念”（如“货币”的属是“商品”）', '再找“种差”：被定义事物区别于同类的本质特征', '套格式：被定义概念=种差+邻近属概念，写成单句'] },
        { type: 'keypoint', label: '下定义格式', text: '下定义的标准格式是<strong>“被定义概念=种差+邻近属概念”</strong>，必须写成一个单句。例如：人类学是研究人类体质和文化起源与发展的科学。“人类学”是被定义概念，“科学”是邻近属概念，中间部分是种差。多句表述、漏掉属概念都算错误。' },
        { type: 'example', label: '下定义示范', text: '原句：“遗传是一种生物自身繁殖过程。这种繁殖按亲代所经历的同一途径和方式进行。在这一过程中，后代获得与亲代相似的复本。”<br>下定义：遗传是生物按亲代所经历的同一途径和方式，产生与亲代相似复本的自我繁殖过程。' },
        { type: 'heading', text: '四、提取关键词' },
        { type: 'paragraph', text: '提取关键词类要求从一段文字中挑出几个（一般三到四个）最能概括核心内容的词语，常用于检索、摘要场景，本质是“压缩的极限形态”。' },
        { type: 'example', label: '提取关键词示范', text: '语段讲“数字经济依托信息技术，推动传统产业转型升级，已成为增长新引擎”。<br>提取关键词：数字经济、信息技术、传统产业、新引擎。（抓住高频与核心概念，覆盖全文主话题）' },
        { type: 'warn', label: '易错提醒', text: '提取关键词最易犯<strong>以偏概全</strong>——只取了某一段的词，漏掉另一段的核心。合格的几个关键词合起来应能覆盖全文主话题，且尽量用原文中的词，不要自己生造。' },
        { type: 'heading', text: '五、扩展语句' },
        { type: 'list', items: ['情景演绎式：给定情境，据此展开具体描写', '话题拓展式：给定话题或词语，围绕它引申发挥', '补写续写式：在已有句段前或后补写、续写内容'] },
        { type: 'keypoint', label: '扩展方法', text: '扩展语句靠四种方法：<strong>添加修饰</strong>（加定语状语补语，使句子丰满）；<strong>运用修辞</strong>（比喻拟人排比，增强感染力）；<strong>合理想象</strong>（补充细节与画面）；<strong>扣住情景要求</strong>（如题目写“描写”“欢快氛围”，须严格符合，不能跑题）。' },
        { type: 'example', label: '扩展语句示范', text: '原句：“春雨来了。”（要求：描写，营造宁静氛围）<br>扩展：“细密的春雨悄悄洒落，滋润着沉睡的田野，远处村落笼罩在一片朦胧的静谧之中。”（添加修饰与修辞，紧扣“描写”“宁静”）' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">扩展语句四方法</text><rect x="40" y="55" width="140" height="44" rx="6" fill="#1f5f8b"/><text x="110" y="82" text-anchor="middle" font-size="12" fill="#fff">添加修饰</text><rect x="195" y="55" width="140" height="44" rx="6" fill="#4a8fa8"/><text x="265" y="82" text-anchor="middle" font-size="12" fill="#fff">运用修辞</text><rect x="350" y="55" width="140" height="44" rx="6" fill="#c07f4e"/><text x="420" y="82" text-anchor="middle" font-size="12" fill="#fff">合理想象</text><rect x="505" y="55" width="140" height="44" rx="6" fill="#7aa05a"/><text x="575" y="82" text-anchor="middle" font-size="12" fill="#fff">扣住情景</text><rect x="40" y="125" width="600" height="44" rx="6" fill="#7a6fae"/><text x="340" y="152" text-anchor="middle" font-size="12" fill="#fff">四者协同：让短句变丰满、平句变生动</text><text x="340" y="205" text-anchor="middle" font-size="13" fill="#555">情景要求（描写/某氛围）是扩展不可逾越的边界</text></svg>', caption: '扩展语句四方法：添加修饰、运用修辞、合理想象、扣住情景，四者协同。' },
        { type: 'heading', text: '六、评分要点与答题规范' },
        { type: 'list', items: ['压缩题：要点齐全、语言简洁、不超字数', '扩展题：紧扣情景、内容充实、有修辞或描写', '下定义：格式正确、单句、属概念与种差无误', '关键词：数量恰当、覆盖全文、用原文词'] },
        { type: 'tip', label: '学习提示', text: '压缩与扩展是“逆向”训练——压缩练“舍”，扩展练“得”。建议每天做一道压缩题保持信息敏感度，每周做一道扩展题锤炼描写能力，并把优秀扩展语段抄进积累本，体会“加修饰、用修辞、扣情景”三者如何协同。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">压缩与扩展：逆向训练</text><rect x="40" y="55" width="290" height="110" rx="8" fill="#1f5f8b"/><text x="185" y="85" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">压缩语段</text><text x="185" y="115" text-anchor="middle" font-size="12" fill="#fff">练“舍”：提炼要点</text><text x="185" y="140" text-anchor="middle" font-size="12" fill="#fff">信息筛选与概括</text><rect x="350" y="55" width="290" height="110" rx="8" fill="#c07f4e"/><text x="495" y="85" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">扩展语句</text><text x="495" y="115" text-anchor="middle" font-size="12" fill="#fff">练“得”：充实描写</text><text x="495" y="140" text-anchor="middle" font-size="12" fill="#fff">想象与修辞运用</text><text x="340" y="200" text-anchor="middle" font-size="13" fill="#555">一舍一得，共同提升语言驾驭力</text></svg>', caption: '压缩与扩展是逆向训练：压缩练“舍”、扩展练“得”，共同提升语言力。' },
        { type: 'reading', text: '延伸思考：在短视频与算法推荐时代，“压缩”能力（一句话说清重点）比以往更重要，而“扩展”能力（把要点展开成有感染力的表达）决定传播力。请思考：高考的压缩扩展题，其实在训练哪一种面向未来的核心素养？' }
      ],
      exercises: [
        { type: 'choice', question: '拟写新闻标题，最应抓住的是？', options: ['导语中的主谓宾', '全文的抒情句', '文末的评论', '所有修饰语'], answer: '导语中的主谓宾', explanation: '新闻标题要求最简明醒目，方法是从新闻导语中提取最关键的主谓宾（谁+做了什么），舍去次要修饰。抒情句、文末评论都不是核心事实，所有修饰语都保留则不够精简。因此拟标题应抓导语中的主谓宾，故选此项。' },
        { type: 'fill', question: '下定义的标准格式是：“被定义概念=__+邻近属概念”，须用单句表述。', answer: '种差', explanation: '下定义必须写成一个单句，固定格式为“被定义概念=种差+邻近属概念”。其中“邻近属概念”是被定义事物所属的大类，“种差”是它区别于同类的本质特征。漏掉属概念或写成多句都算错误，故填“种差”。' },
        { type: 'choice', question: '“提取关键词”类题目对所选词语的要求是？', options: ['能概括核心内容且覆盖全文', '越生僻越好', '全部是形容词', '只取一个词'], answer: '能概括核心内容且覆盖全文', explanation: '提取关键词要求所选词语能概括语段核心内容，并且合起来覆盖全文主话题，一般取三到四个原文中的高频核心词。生僻、纯形容词或只取一词都无法完整代表文意，故选“能概括核心内容且覆盖全文”。' },
        { type: 'fill', question: '扩展语句要紧扣情景要求，如题目写“描写”某种__，须严格符合。', answer: '氛围', explanation: '扩展语句常给出情景限制，如要求“描写”某个对象、营造“欢快”“宁静”等某种氛围。扩展内容必须严格符合这些情景要求，不能自行跑题。扣住“描写”与“氛围”等指令，是扩展不偏题的保证，故填“氛围”。' },
        { type: 'choice', question: '下列属于“情景演绎式”扩展的是？', options: ['按给定情境展开描写', '只写论点不加描写', '翻译文言文', '默写一首古诗'], answer: '按给定情境展开描写', explanation: '情景演绎式扩展是给定具体情境，要求据此展开具体描写，把情境画面化。只写论点属于话题拓展，翻译文言、默写古诗都不属于扩展语句题型。本题要求按情境描写，故选“按给定情境展开描写”。' }
      ]
    },

    /* ===================== 考点九 · 图文转换与表文转换 ===================== */

    { id: 'zt3-u4-l3',    cover: 'assets/cover/chinese/zt3-u4-l3.svg',
    name: '语言文字运用（九）：图文转换与表文转换', author: '高考复习', chapter: '考点九 · 图文转换与表文转换', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、题型分类' },
        { type: 'paragraph', text: '图文转换与表文转换，是把图表、徽标、漫画、流程图等非文字信息，转化为条理清晰的文字语言。它综合考查观察、提取、概括与表述能力，是高考语言文字运用中含“图”的一类重要题型。' },
        { type: 'keypoint', label: '四类题型', text: '<strong>数据类</strong>（表格图、柱状图、饼状图、折线图，读数据趋势）；<strong>徽标类</strong>（描述构图要素并阐释寓意）；<strong>漫画类</strong>（描述画面并揭示寓意）；<strong>流程图类</strong>（按箭头方向连贯表述环节）。先判断题型，再调用对应方法。' },
        { type: 'list', items: ['数据类：表格、柱状、饼状、折线，看标题看趋势看极值', '徽标类：逐一描述构成要素，再阐释设计寓意', '漫画类：客观描述画面，主观揭示讽刺寓意', '流程图类：沿箭头方向，用连贯语句写清各环节'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">图文转换四类题型</text><rect x="40" y="50" width="290" height="60" rx="8" fill="#1f5f8b"/><text x="185" y="78" text-anchor="middle" font-size="13" fill="#fff">数据类</text><text x="185" y="98" text-anchor="middle" font-size="11" fill="#fff">表·柱·饼·折线</text><rect x="350" y="50" width="290" height="60" rx="8" fill="#4a8fa8"/><text x="495" y="78" text-anchor="middle" font-size="13" fill="#fff">徽标类</text><text x="495" y="98" text-anchor="middle" font-size="11" fill="#fff">要素+寓意</text><rect x="40" y="125" width="290" height="60" rx="8" fill="#c07f4e"/><text x="185" y="153" text-anchor="middle" font-size="13" fill="#fff">漫画类</text><text x="185" y="173" text-anchor="middle" font-size="11" fill="#fff">画面+寓意</text><rect x="350" y="125" width="290" height="60" rx="8" fill="#7aa05a"/><text x="495" y="153" text-anchor="middle" font-size="13" fill="#fff">流程图类</text><text x="495" y="173" text-anchor="middle" font-size="11" fill="#fff">箭头连贯表述</text><text x="340" y="225" text-anchor="middle" font-size="13" fill="#555">先判题型，再调方法，客观描述与主观解读分开</text></svg>', caption: '图文转换四类题型：数据类、徽标类、漫画类、流程图类，先判题型再调用方法。' },
        { type: 'heading', text: '二、数据图表解读方法' },
        { type: 'paragraph', text: '数据类图表是出现频率最高的子类。解读的核心是“用数据说话”：所有结论都必须能从图表数据中找到依据，不能凭空臆断。' },
        { type: 'list', items: ['看标题：明确图表主题与比较对象', '看数据变化趋势与极值：上升下降、最大最小', '看比较对象：横向纵向比什么、谁和谁比', '结论须由数据支撑：每项结论都能在图中找到依据'] },
        { type: 'warn', label: '易错提醒', text: '数据图表最易犯<strong>照抄精确数字</strong>的错误。题目要求“约数表述”时，应把“68.3%”写成“约七成”或“超过三分之二”，直接照抄精确值会被扣分。另需注意坐标轴单位，防止把“万元”误读成“元”。' },
        { type: 'example', label: '数据图表解读示范', text: '图表：某省近五年新能源汽车销量（万辆）分别为12、25、41、67、95。<br>解读：近五年销量持续增长，由12万辆升至95万辆，年均增幅明显，2022年起增速加快，呈快速扩张趋势。（结论均由数据支撑，用约数概括）' },
        { type: 'table', headers: ['图表类型', '关注重点'], rows: [['表格', '行列数据对比，找极值与变化'], ['柱状图', '柱高对比，看数量差异'], ['饼状图', '占比结构，看份额大小'], ['折线图', '走势连线，看变化趋势']] },
        { type: 'heading', text: '三、徽标类转换' },
        { type: 'paragraph', text: '徽标类转换题常给出会徽、商标或活动标志，要求描述构图要素并阐释寓意。答题要“先形后意”，做到要素不漏、寓意有据。' },
        { type: 'list', items: ['观察整体外形与各部分构成（圆、星、手、纽带等）', '注意中英文字母的变形与组合（如字母隐含其中）', '逐一描述要素，不要遗漏任何组成部分', '阐释寓意：结合活动主题说明象征意义'] },
        { type: 'example', label: '徽标类转换示范', text: '“中国青年志愿者”标志，构图为一只手托起一颗心，心形中变形出鸽子与英文YV。<br>描述：标志由一只向上的手、心形及其中变形的鸽子与字母YV组成。<br>寓意：手托爱心象征奉献，鸽子象征和平，整体表达青年志愿者“奉献、友爱、互助、进步”的精神。' },
        { type: 'warn', label: '易错提醒', text: '徽标题最常见的失分是<strong>遗漏要素</strong>，尤其容易忽略中英文字母的变形（如把“隐含的字母”当成普通线条）。描述是客观工作，必须“看到什么写什么”，连底色、外圈、细小字母都不能漏。' },
        { type: 'heading', text: '四、漫画类转换' },
        { type: 'paragraph', text: '漫画类转换题以一幅讽刺或哲理漫画为材料，要求先用说明性文字描述画面，再揭示其讽刺或劝诫的寓意，寓意要联系社会现实。' },
        { type: 'list', items: ['描述画面：客观说明人、物、文字、夸张处，不评价', '揭示寓意：点明讽刺或歌颂的对象与主旨', '寓意联系社会现实：上升到普遍现象或问题', '注意漫画中的文字、标题，常是寓意钥匙'] },
        { type: 'example', label: '漫画类转换示范', text: '漫画：一人把“诚信”的树苗种下，却用“谎言”的水壶浇灌。<br>描述：画面中一个人种下一棵标着“诚信”的树苗，却提着写有“谎言”的水壶在浇水。<br>寓意：讽刺表面倡导诚信、实际行动却违背诚信的虚伪现象，警示言行不一终将毁掉信任根基。' },
        { type: 'heading', text: '五、流程图类转换' },
        { type: 'paragraph', text: '流程图（框架图）用箭头连接若干环节，表示某一过程或结构。转换时要沿箭头方向，把图形转化为连贯的文字说明，不能颠倒顺序、不能漏环节。' },
        { type: 'keypoint', label: '流程图表述要点', text: '流程图表述要<strong>顺着箭头方向</strong>，用“首先……接着……然后……最后”等关联词把各环节连成通顺语句；<strong>不遗漏任何环节</strong>，包括判断分支也要说清；用语客观准确，不必发挥。' },
        { type: 'example', label: '流程图表述示范', text: '流程：报名→资格审核（通过/不通过）→参加培训→考核（合格/不合格）→发证。<br>表述：先报名，再进行资格审核；审核不通过则终止，通过则参加培训；培训后考核，合格者发证，不合格者须重新培训。' },
        { type: 'heading', text: '六、答题规范' },
        { type: 'keypoint', label: '客观描述与主观解读分开', text: '所有图文转换题都遵循一条铁律：<strong>客观描述与主观解读必须分开</strong>。描述画面、要素、数据时只写“看到的事实”，不掺入评价；揭示寓意、阐释含义时再写“想到的观点”。两部分界限清晰，才能既全面又不偏题。' },
        { type: 'tip', label: '学习提示', text: '图文转换贵在“读图有序”。建议拿到图先问自己四句话：这是什么图（题型）？标题说什么（主题）？数据或要素有哪些（细节）？它想表达什么（寓意）？按此顺序作答，可避免遗漏，也便于分点给分。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">数据图表解读四步</text><rect x="30" y="65" width="150" height="50" rx="8" fill="#7aa05a"/><text x="105" y="89" text-anchor="middle" font-size="13" fill="#fff">看标题</text><text x="105" y="107" text-anchor="middle" font-size="11" fill="#fff">明主题</text><rect x="195" y="65" width="150" height="50" rx="8" fill="#4a8fa8"/><text x="270" y="89" text-anchor="middle" font-size="13" fill="#fff">看趋势极值</text><text x="270" y="107" text-anchor="middle" font-size="11" fill="#fff">升降大小</text><rect x="360" y="65" width="150" height="50" rx="8" fill="#c07f4e"/><text x="435" y="89" text-anchor="middle" font-size="13" fill="#fff">看比较对象</text><text x="435" y="107" text-anchor="middle" font-size="11" fill="#fff">谁比谁</text><rect x="525" y="65" width="150" height="50" rx="8" fill="#1f5f8b"/><text x="600" y="89" text-anchor="middle" font-size="13" fill="#fff">结论靠数据</text><text x="600" y="107" text-anchor="middle" font-size="11" fill="#fff">不臆断</text><path d="M180 90 L193 90" stroke="#1f5f8b" stroke-width="3"/><path d="M345 90 L358 90" stroke="#1f5f8b" stroke-width="3"/><path d="M510 90 L523 90" stroke="#1f5f8b" stroke-width="3"/><text x="340" y="165" text-anchor="middle" font-size="13" fill="#555">约数表述，不照抄精确数字；结论必由数据支撑</text></svg>', caption: '数据图表解读四步：看标题、看趋势极值、看比较对象、结论靠数据支撑。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">徽标与漫画：先形后意</text><rect x="40" y="50" width="290" height="150" rx="8" fill="#1f5f8b"/><text x="185" y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">徽标类</text><text x="185" y="110" text-anchor="middle" font-size="12" fill="#fff">①描述要素（不漏字母变形）</text><text x="185" y="138" text-anchor="middle" font-size="12" fill="#fff">②阐释寓意（结合主题）</text><text x="185" y="166" text-anchor="middle" font-size="12" fill="#fff">客观+主观，两步递进</text><rect x="350" y="50" width="290" height="150" rx="8" fill="#c07f4e"/><text x="495" y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">漫画类</text><text x="495" y="110" text-anchor="middle" font-size="12" fill="#fff">①描述画面（客观不评）</text><text x="495" y="138" text-anchor="middle" font-size="12" fill="#fff">②揭示寓意（联现实）</text><text x="495" y="166" text-anchor="middle" font-size="12" fill="#fff">客观+主观，两步递进</text><text x="340" y="225" text-anchor="middle" font-size="13" fill="#555">两类的共同铁律：客观描述与主观解读须分开</text></svg>', caption: '徽标与漫画都遵循“先形后意”：先客观描述，再主观阐释寓意。' },
        { type: 'reading', text: '延伸思考：如今“一图胜千言”，但图表也可能通过截断坐标轴、选择性呈现数据来误导读者。请找一张你怀疑“被操纵”的图表，用本课“看标题、看趋势、看极值、结论由数据支撑”的方法，写一段“反操纵”读图分析。' }
      ],
      exercises: [
        { type: 'choice', question: '解读数据图表时，得出的结论必须？', options: ['由数据支撑', '凭主观猜测', '照抄标题即可', '只用最大极值'], answer: '由数据支撑', explanation: '数据图表转换的核心原则是“用数据说话”，所有结论都必须能从图表的数据、趋势或占比中找到依据，不能凭主观臆断，也不能只照抄标题或用单一极值以偏概全。结论由数据支撑才是客观严谨的表述，故选此项。' },
        { type: 'fill', question: '当题目要求“约数表述”时，应把精确数字改写成__，不能照抄原值。', answer: '约数', explanation: '题目要求“约数表述”时，意在考查概括能力，应把精确数字转化为“约七成”“超过半数”等约数，直接照抄“68.3%”之类精确值会被扣分。这是数据图表题的高频易错点，故填“约数”。' },
        { type: 'choice', question: '徽标类转换题最容易遗漏的是？', options: ['构图要素与字母变形', '标题文字', '数据趋势', '表格行列'], answer: '构图要素与字母变形', explanation: '徽标类转换要求客观描述全部构图要素并阐释寓意，最容易失分处是遗漏细小要素，尤其容易忽略中英文字母的变形设计（如隐含在图形中的字母）。标题、数据趋势、表格行列都不是徽标题的关注对象，故选“构图要素与字母变形”。' },
        { type: 'fill', question: '流程图表述要顺着__方向，用连贯语句写清每个环节，不得遗漏。', answer: '箭头', explanation: '流程图由箭头连接若干环节，表示过程或结构。转换时要沿箭头指示的方向，用“首先、接着、然后、最后”等关联词把各环节连成通顺语句，判断分支也要说清，任何环节都不得遗漏。故填“箭头”。' },
        { type: 'choice', question: '漫画类转换题的正确步骤是？', options: ['先描述画面再揭示寓意', '只写寓意不描述画面', '只描述不谈寓意', '翻译画面中的文字'], answer: '先描述画面再揭示寓意', explanation: '漫画类转换分两步：先用说明性语言客观描述画面的人、物、文字与夸张处，不评价；再揭示其讽刺或劝诫的寓意，并联系社会现实。只写寓意不描述、或只描述不谈寓意都不完整，故选“先描述画面再揭示寓意”。' }
      ]
    },

    /* ===================== 附录 · 语言文字运用备考总策略 ===================== */

    { id: 'zt3-u4-l4',    cover: 'assets/cover/chinese/zt3-u4-l4.svg',
    name: '语言文字运用（十）：备考总策略', author: '高考复习', chapter: '附录 · 语言文字运用备考总策略', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、命题趋势' },
        { type: 'paragraph', text: '近年的高考语言文字运用题，已从“单点独立考查”转向“语段综合考查”，一个情境语段带多个小题，把词语、病句、标点、修辞、连贯等考点打通。同时主观表达题比重上升，对综合能力要求更高。' },
        { type: 'keypoint', label: '两大趋势', text: '<strong>趋势一：情境化语段综合考查</strong>——以一个真实情境语段为材料，连续命制词语、病句、标点、修辞、连贯等多个小题，考点相互打通；<strong>趋势二：主观题比重上升</strong>——单纯选择判断减少，要求分析效果、改写表达、写推荐语等。' },
        { type: 'list', items: ['一个语段带多题：考点融合，强调整体语感', '主观表达增多：分析效果、改写、写语段', '贴合真实语境：材料来自生活与时代语料', '重规范与得体：应用文、交际语考查频繁'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">语用命题两大趋势</text><rect x="40" y="50" width="290" height="130" rx="8" fill="#1f5f8b"/><text x="185" y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">情境化综合考查</text><text x="185" y="110" text-anchor="middle" font-size="12" fill="#fff">一语段带多题</text><text x="185" y="135" text-anchor="middle" font-size="12" fill="#fff">词语病句标点修辞</text><text x="185" y="160" text-anchor="middle" font-size="12" fill="#fff">连贯打通考</text><rect x="350" y="50" width="290" height="130" rx="8" fill="#c07f4e"/><text x="495" y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">主观题比重上升</text><text x="495" y="110" text-anchor="middle" font-size="12" fill="#fff">分析效果·改写</text><text x="495" y="135" text-anchor="middle" font-size="12" fill="#fff">写推荐语·写语段</text><text x="495" y="160" text-anchor="middle" font-size="12" fill="#fff">重规范与得体</text><text x="340" y="215" text-anchor="middle" font-size="13" fill="#555">备考要整体语感+规范表达双线并进</text></svg>', caption: '语用命题两大趋势：情境化语段综合考查、主观题比重上升。' },
        { type: 'heading', text: '二、分考点复习策略' },
        { type: 'paragraph', text: '语用板块考点多而杂，不能平均用力。应根据各考点的能力属性，采取差异化的复习策略：有的靠积累，有的靠方法，有的靠规范训练。' },
        { type: 'list', items: ['词语：靠积累滚动，建成语本反复记忆', '病句：靠标志词敏感，见标志先排查', '连贯：靠逻辑分析，抓话题与句间关系', '得体：靠谦敬积累，记清谦辞敬辞', '标点修辞：靠效果分析，结合语境说作用', '句式压缩扩展图文：靠规范训练，套用答题模板'] },
        { type: 'table', headers: ['考点', '复习抓手'], rows: [['词语', '滚动积累，错题归类'], ['病句', '标志词敏感训练'], ['连贯', '逻辑与话题分析'], ['得体', '谦敬辞积累'], ['标点修辞', '表达效果分析'], ['句式图文', '规范模板训练']] },
        { type: 'heading', text: '三、答题时间分配与顺序' },
        { type: 'paragraph', text: '语用题在试卷中位置靠前，节奏掌控直接影响全卷心态。合理的时间分配与答题顺序，能帮你在有限时间内拿到应得分数。' },
        { type: 'list', items: ['语用题建议控制在15至20分钟，不恋战', '先易后难：先做有把握的客观题，再攻主观题', '语段综合题通读全段后再逐题作答', '遇难题标记后跳，全卷做完再回头处理'] },
        { type: 'warn', label: '易错提醒', text: '最忌<strong>在某一道难题上纠缠过久</strong>，导致后面会做的题没时间做。语用题单题分值不高，一道卡住就跳，把时间留给作文和阅读这类“大头”，才是全局最优策略。' },
        { type: 'keypoint', label: '答题顺序建议', text: '语用板块建议<strong>先整体通读语段、把握语境</strong>，再按“客观题→主观题”“易→难”的顺序作答；做完一题立即填涂或书写，<strong>不把所有题留到最后一起赶</strong>，避免慌乱出错。' },
        { type: 'heading', text: '四、主观题规范作答' },
        { type: 'paragraph', text: '主观表达题是新的得分增长点，也是主要失分点。规范作答能让你“会做的拿满分，不会的也拿步骤分”。' },
        { type: 'list', items: ['看分值定要点数：两分一点，四分至少两点', '分条作答：用序号或分号隔开，条理清晰', '术语准确：用“生动形象”“强调突出”等规范词', '结合原文：效果分析必须扣住原句内容'] },
        { type: 'example', label: '分条作答示范', text: '题目要求分析某破折号的表达效果（4分）。<br>规范作答：①破折号表解释说明，点明前文“真相”的具体内容（1分）；②起到突出强调作用，引导读者注意（1分）；③语气上形成停顿，引发思考（1分）；④使上下文逻辑更紧密（1分）。（看分值定四点，分条作答）' },
        { type: 'warn', label: '易错提醒', text: '主观题最忌<strong>要点堆砌不成条</strong>。把三四个要点写成一段浑然不分的话，阅卷按“点”给分，混在一起容易漏判。务必用①②③或分号明确分开，让阅卷老师一眼看到你的得分点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">主观题规范作答三步</text><rect x="30" y="65" width="180" height="50" rx="8" fill="#7aa05a"/><text x="120" y="89" text-anchor="middle" font-size="13" fill="#fff">看分值定点</text><text x="120" y="107" text-anchor="middle" font-size="11" fill="#fff">两分一点</text><rect x="250" y="65" width="180" height="50" rx="8" fill="#4a8fa8"/><text x="340" y="89" text-anchor="middle" font-size="13" fill="#fff">分条作答</text><text x="340" y="107" text-anchor="middle" font-size="11" fill="#fff">序号隔开</text><rect x="470" y="65" width="180" height="50" rx="8" fill="#1f5f8b"/><text x="560" y="89" text-anchor="middle" font-size="13" fill="#fff">术语准确</text><text x="560" y="107" text-anchor="middle" font-size="11" fill="#fff">扣原句</text><path d="M210 90 L248 90" stroke="#1f5f8b" stroke-width="3"/><path d="M430 90 L468 90" stroke="#1f5f8b" stroke-width="3"/><text x="340" y="165" text-anchor="middle" font-size="13" fill="#555">要点成条、术语规范，方能拿全步骤分</text></svg>', caption: '主观题规范作答三步：看分值定点、分条作答、术语准确，扣住原句。' },
        { type: 'heading', text: '五、日常积累与考场检查' },
        { type: 'paragraph', text: '语用能力的提升，七分在平时的积累，三分在考场的冷静。建立适合自己的积累体系，比刷多少题都重要。' },
        { type: 'list', items: ['建错题本：分类登记误判的成语与病句', '建成语本：按六大误用类型滚动记忆', '积累时事语料：关注鲜活的新词新语', '每周做限时训练：保持语感与速度'] },
        { type: 'keypoint', label: '考场检查清单', text: '交卷前用一分钟核对：<strong>主观题是否分条、术语是否准确</strong>；语段综合题各小题答案是否相互矛盾；默写与填空有无错别字；选择题填涂是否对应题号。这一分钟常能救回三五分。' },
        { type: 'example', label: '检查清单实操', text: '检查清单实操：①翻到语用主观题，确认每题都分条、都用上了规范术语；②看流程图题有无漏掉某个环节；③核对选择题填涂序号；④快速重读压缩题，确认无照抄精确数字。四项全过再交卷。' },
        { type: 'tip', label: '学习提示', text: '语用备考不要“题海漂流”。建议以“一本错题本+一份分考点策略表”为核心，每周滚动复习，把每次练习的失误转化为积累。考场上的从容，来自平时对规范的反复打磨。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">备考总策略框架</text><rect x="40" y="50" width="190" height="44" rx="6" fill="#1f5f8b"/><text x="135" y="77" text-anchor="middle" font-size="12" fill="#fff">分考点策略</text><rect x="245" y="50" width="190" height="44" rx="6" fill="#4a8fa8"/><text x="340" y="77" text-anchor="middle" font-size="12" fill="#fff">时间分配</text><rect x="455" y="50" width="190" height="44" rx="6" fill="#7aa05a"/><text x="550" y="77" text-anchor="middle" font-size="12" fill="#fff">规范作答</text><rect x="40" y="115" width="190" height="44" rx="6" fill="#c07f4e"/><text x="135" y="142" text-anchor="middle" font-size="12" fill="#fff">日常积累</text><rect x="245" y="115" width="190" height="44" rx="6" fill="#7a6fae"/><text x="340" y="142" text-anchor="middle" font-size="12" fill="#fff">考场检查</text><rect x="455" y="115" width="190" height="44" rx="6" fill="#b04a4a"/><text x="550" y="142" text-anchor="middle" font-size="12" fill="#fff">限时训练</text><text x="340" y="200" text-anchor="middle" font-size="13" fill="#555">积累为基、规范为要、检查兜底，三位一体</text></svg>', caption: '备考总策略框架：分考点策略、时间分配、规范作答、积累、检查、限时训练。' },
        { type: 'reading', text: '延伸思考：当AI能瞬间完成“压缩、扩写、改写”时，高考为何仍考语言文字运用？请结合本课“情境化综合考查”“主观表达比重上升”的趋势，谈谈你认为语用题真正在筛选的是人的哪一种不可替代的能力。' }
      ],
      exercises: [
        { type: 'choice', question: '新高考语言文字运用的主要命题趋势是？', options: ['情境化语段综合考查', '单句独立考查', '只考客观选择题', '取消所有主观题'], answer: '情境化语段综合考查', explanation: '新高考语用题已从单点独立考查转向“情境化语段综合考查”：以一个真实语段为材料，连续命制词语、病句、标点、修辞、连贯等多道小题，考点打通；同时主观表达题比重上升。故选“情境化语段综合考查”。' },
        { type: 'fill', question: '病句复习应培养对__词的敏感，见到标志词先对号入座排查病因。', answer: '标志', explanation: '病句类型有标志可循，如句首介词、“能否”类两面词、否定词连用、并列短语等。复习时应培养对这些标志词的敏感，见到即先对号入座排查对应病因，可大幅提升辨析速度与准确率。故填“标志”。' },
        { type: 'choice', question: '“看分值定要点数”的含义是？', options: ['分值大则要点多', '分值与要点无关', '只写一个要点', '不必分条'], answer: '分值大则要点多', explanation: '主观题常按分值给分，一般两分对应一个要点，四分至少答两点，分值越大要求的要点越多。依据分值确定要点数，再分条书写，才能把该拿的分拿全。分值与要点显然相关，故选“分值大则要点多”。' },
        { type: 'fill', question: '日常积累建议建立__本，分类登记误判的成语与典型错题。', answer: '错题', explanation: '语用能力靠日常积累，建议建立错题本，把练习中误判的成语、病句、标点等按类型分类登记，并配成语本滚动记忆、积累时事语料。错题本是把失误转化为得分的有效工具，故填“错题”。' },
        { type: 'choice', question: '交卷前的考场检查清单应重点核对的是？', options: ['主观题是否分条、术语是否准确', '字迹是否最漂亮', '字数是否最多', '是否用了成语'], answer: '主观题是否分条、术语是否准确', explanation: '交卷前应用一分钟核对：主观题是否分条、术语是否准确，语段综合题各小题答案是否矛盾，选择题填涂是否对应题号等。字迹漂亮、字数最多、用了成语都不是检查重点，故选“主观题是否分条、术语是否准确”。' }
      ]
    }

  );
})();
