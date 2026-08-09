(function () {
  var v = gzGetVolume('chinese', 'zt3');
  if (!v) return;
  v.points.push(

    /* ===================== 考点三 · 语言表达连贯 ===================== */

    { id: 'zt3-u2-l1',    cover: 'assets/cover/chinese/zt3-u2-l1.svg',
    name: '语言文字运用（三）：语言表达连贯', author: '高考复习', chapter: '考点三 · 语言表达连贯', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、连贯的内涵' },
        { type: 'paragraph', text: '连贯是指语言单位（词、句、段）之间在内容与形式上前后衔接顺畅、语意贯通。高考“语言表达连贯”题考查的是把若干零散语句组织成一段通顺、合理、有逻辑的话，或在给定语境中填入最恰当的句子。' },
        { type: 'keypoint', label: '连贯三要素', text: '判断一段文字是否连贯，看三个维度：<strong>话题统一</strong>（围绕同一中心，不突然转换对象）；<strong>句序合理</strong>（按时间、空间、逻辑或认识顺序安排）；<strong>衔接呼应</strong>（借助词语、句式、指代前后勾连，语意不断裂）。' },
        { type: 'list', items: ['话题统一：全段围绕一个中心展开，主语或陈述对象尽量保持一致', '句序合理：或按时间先后，或按空间方位，或按逻辑因果递进', '衔接呼应：用代词、关联词、重复词语、同义替换把前后句拴紧'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">连贯三要素</text><rect x="40" y="55" width="190" height="60" rx="8" fill="#1f5f8b"/><text x="135" y="82" text-anchor="middle" font-size="13" fill="#fff">话题统一</text><text x="135" y="104" text-anchor="middle" font-size="11" fill="#fff">中心不跑偏</text><rect x="245" y="55" width="190" height="60" rx="8" fill="#4a8fa8"/><text x="340" y="82" text-anchor="middle" font-size="13" fill="#fff">句序合理</text><text x="340" y="104" text-anchor="middle" font-size="11" fill="#fff">顺序有章法</text><rect x="450" y="55" width="190" height="60" rx="8" fill="#c07f4e"/><text x="545" y="82" text-anchor="middle" font-size="13" fill="#fff">衔接呼应</text><text x="545" y="104" text-anchor="middle" font-size="11" fill="#fff">前后紧相扣</text><text x="340" y="180" text-anchor="middle" font-size="13" fill="#555">三要素同时满足，语段才叫“连贯”</text></svg>', caption: '连贯三要素：话题统一、句序合理、衔接呼应，三者缺一不可。' },
        { type: 'heading', text: '二、三大题型总览' },
        { type: 'paragraph', text: '语言表达连贯题主要有三种题型：排序题（将打乱的句子重新排列成段）、语句复位题（从选项中选出应填入某处的最佳句子）、情境补写题（根据上下文在空白处补写恰当语句）。三者都指向“衔接顺畅”。' },
        { type: 'keypoint', label: '题型与解法对应', text: '<strong>排序题</strong>重“找线索、定顺序”；<strong>语句复位题</strong>重“看上下文、比衔接”；<strong>情境补写题</strong>重“瞻前顾后、依境补写”。先判断题型，再调用对应策略。' },
        { type: 'table', headers: ['题型', '题干特点', '核心解法'], rows: [['排序题', '给出若干打乱的句子，要求排出正确顺序', '抓首尾句、关联词、代词、时空逻辑'], ['语句复位题', '文段留空，从四选项中选一句填入', '比对上下文话题、句式、逻辑衔接'], ['情境补写题', '语段留空，自行写出恰当语句', '瞻前顾后，看话题、指向、句式标志']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">语言表达连贯三大题型</text><rect x="40" y="60" width="190" height="60" rx="8" fill="#1f5f8b"/><text x="135" y="86" text-anchor="middle" font-size="13" fill="#fff">排序题</text><text x="135" y="108" text-anchor="middle" font-size="11" fill="#fff">重排顺序</text><rect x="245" y="60" width="190" height="60" rx="8" fill="#4a8fa8"/><text x="340" y="86" text-anchor="middle" font-size="13" fill="#fff">语句复位题</text><text x="340" y="108" text-anchor="middle" font-size="11" fill="#fff">选句入空</text><rect x="450" y="60" width="190" height="60" rx="8" fill="#7aa05a"/><text x="545" y="86" text-anchor="middle" font-size="13" fill="#fff">情境补写题</text><text x="545" y="108" text-anchor="middle" font-size="11" fill="#fff">自行补写</text><text x="340" y="180" text-anchor="middle" font-size="13" fill="#555">先辨题型，再调用对应解题策略</text></svg>', caption: '连贯三大题型：排序题、语句复位题、情境补写题，解法各有侧重。' },
        { type: 'heading', text: '三、排序题解题方法' },
        { type: 'paragraph', text: '排序题是高频题型，解题关键是“找线索、定顺序”。拿到句子先通读，再逐一排查标志性线索，往往能快速锁定首尾与相邻关系。' },
        { type: 'list', items: ['抓首尾句：总起句、下定义句、背景介绍句常作首句；总结句、结论句常作尾句', '抓关联词与代词：“因为…所以”“但是”“这”“其”“他”提示句间逻辑与指代', '抓时间、空间、逻辑顺序：时间词（先、再、然后）、空间词（上、下、内、外）、由因到果', '抓句间标点：分号、冒号、问号往往提示并列、解说或呼应关系'] },
        { type: 'example', label: '排序题示范', text: '句子组：①它昂首挺胸，充满活力　②校园里的白杨树真美　③春风吹过，叶片沙沙作响　④每天清晨，它迎接第一批同学。<br>分析：②是总起（首句），介绍对象“白杨树”；③承接“白杨树”写风吹叶响；①紧接③写其姿态；④写清晨情景收束。正确顺序为<strong>②③①④</strong>。抓“对象一致”与“由整体到细节”的顺序即可排定。' },
        { type: 'tip', label: '学习提示', text: '排序题可先用“铅笔分组法”：把明显能连成相邻对的句子用线连起来（如代词指前句、关联词成对），再排大组，最后用“通读检验”确认读起来顺口。多数排序题相邻线索不止一处，交叉验证更稳。' },
        { type: 'heading', text: '四、语句复位题解法' },
        { type: 'paragraph', text: '语句复位题给出带空位的文段和四个选项，要求选出最连贯的一句。解题核心是与上下文“严丝合缝”：话题衔接、句式一致、逻辑顺承。' },
        { type: 'keypoint', label: '复位题三看', text: '一看<strong>上文结尾</strong>的陈述对象与落脚词，确保填入句顺势承接；二看<strong>下文开头</strong>的提示，确保填入句与之呼应；三看<strong>句式与语气</strong>，使填入句与相邻句结构协调，不突兀。' },
        { type: 'example', label: '复位题示范', text: '文段：“读书使人充实，讨论使人机智，____。”选项：A.写作使人精确　B.跑步使人强壮　C.音乐使人愉悦　D.旅行使人开阔。<br>前文“读书…讨论…”均为“动词+使人+形容词”的并列结构，且同属“治学修养”范畴。A项“写作使人精确”句式一致、话题同类，衔接最紧；其余项或话题旁逸或结构不协调，故选A。' },
        { type: 'warn', label: '易错提醒', text: '复位题最易犯“只看上空不顾下空”的错误。有些选项接上句读着顺，却与下句<strong>顶针冲突</strong>或逻辑断裂。务必把选项代入后<strong>上下各读一句</strong>，确认前后都通顺才选定，不能只看邻近的一句。' },
        { type: 'heading', text: '五、补写题“瞻前顾后”法' },
        { type: 'paragraph', text: '情境补写题要求根据上下文空白写出恰当语句，常用于说明性、议论性语段。核心方法是“瞻前顾后”：向前看上文确定了什么，向后看下文需要什么来引出。' },
        { type: 'list', items: ['看上文话题：补写句的主语、中心词应承接上文，保持对象统一', '看下文指向：下文往往用“因此”“可见”总结，补写句须能自然引出后文', '看句式标志：上文有设问（问句），补写句常是答句；下文有“总之”“由此可见”等总结词，补写句多为分述或观点句'] },
        { type: 'keypoint', label: '瞻前顾后', text: '补写不是凭空造句，而是“上下求索”：<strong>上句给主语和限定，下句给方向和落点</strong>。字数、词性尽量与上下文协调，使补出的句子像原文“天生就该在这里”。' },
        { type: 'example', label: '补写题示范', text: '语段：“ Nutrients from soil feed plants. __。 Animals then eat the plants, completing the cycle.”（土壤养分滋养植物。____。动物再吃植物，完成循环。）<br>上文谈“土壤养分→植物”，下文谈“动物吃植物”，补写句应桥接“植物”与“动物”。可补：“These plants become food for many animals.”（这些植物成为许多动物的食物）。它承接“plants”话题，又引出下句“animals eat”，正是瞻前顾后所得。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">补写题“瞻前顾后”</text><rect x="40" y="60" width="190" height="55" rx="8" fill="#4a8fa8"/><text x="135" y="86" text-anchor="middle" font-size="13" fill="#fff">瞻前</text><text x="135" y="106" text-anchor="middle" font-size="11" fill="#fff">看上文话题</text><rect x="245" y="60" width="190" height="55" rx="8" fill="#7aa05a"/><text x="340" y="86" text-anchor="middle" font-size="13" fill="#fff">顾后</text><text x="340" y="106" text-anchor="middle" font-size="11" fill="#fff">看下文指向</text><rect x="450" y="60" width="190" height="55" rx="8" fill="#c07f4e"/><text x="545" y="86" text-anchor="middle" font-size="13" fill="#fff">看句式</text><text x="545" y="106" text-anchor="middle" font-size="11" fill="#fff">设问·总结标志</text><text x="340" y="158" text-anchor="middle" font-size="13" fill="#555">上承话题、下引落点，补句如原文固有</text></svg>', caption: '补写题“瞻前顾后”：上看话题、下看指向、旁看句式标志，使补句与上下文严丝合缝。' },
        { type: 'heading', text: '六、保持连贯的手段' },
        { type: 'paragraph', text: '无论哪种题型，保持语段连贯都有可操作的手段。掌握这些手段，既是解题的抓手，也是写作时让文字通顺的方法。' },
        { type: 'list', items: ['陈述对象一致：尽量让各句围绕同一主语，避免频繁偷换主语', '句式一致：并列、排比处保持相同结构，读来整齐顺畅', '音节和谐：注意长短句搭配与押韵节奏，使语流自然', '前后勾连：用代词、关联词、同义复现把句与句拴牢'] },
        { type: 'keypoint', label: '勾连的常用词', text: '前后勾连常用：<strong>代词</strong>（这、那、其、他）指代前句；<strong>关联词</strong>（因为、所以、然而、而且）明示逻辑；<strong>同义复现</strong>（前句“诚信”，后句用“这种品格”）避免话题漂移。标点如分号也提示并列衔接。' },
        { type: 'warn', label: '易错提醒', text: '“话题一致”不等于“主语字面上完全不变”。当主语确需转换时，要用<strong>过渡句或指代</strong>自然衔接，否则会造成“突然换话题”的断裂感。高考常设“主语看似连贯但逻辑跳跃”的干扰项，要同时检查逻辑是否顺承。' },
        { type: 'tip', label: '学习提示', text: '练习连贯题建议“三步自检”：排完或填完后再大声朗读一遍；圈出每句的主语看是否漂移；标出相邻句的衔接词看是否缺失。三项都过关，基本就是正确答案。平时多读报刊社论，培养语感最实惠。' },
        { type: 'reading', text: '延伸思考：在社交媒体碎片化表达中，“话题跳跃、省略主语”常被接受甚至成为风格。请思考：高考强调的“连贯”标准，与日常口语、网络语言的“不连贯”之间，是否存在合理的语境差异？书面表达何时可以“有意不连贯”？' }
      ],
      exercises: [
        { type: 'choice', question: '下列句子组合中，最适合作为首句的一项是？①“它被誉为植物界的大熊猫”　②“银杏是一种古老的珍稀树种”　③“许多游客专程前来观赏”', options: ['①', '②', '③', '都可以'], answer: '②', explanation: '首句通常用来引出说明对象、下定义或作背景介绍。②句“银杏是一种古老的珍稀树种”先交代说明对象“银杏”及其属性，适合总起；①句用代词“它”指代前文对象，不能作首句；③句“许多游客”也是承接前文的后续信息。故首句应为②，选“②”。' },
        { type: 'fill', question: '情境补写题的核心方法是“__前顾后”，即向前看上文话题、向后看下文指向。', answer: '瞻', explanation: '本题考查补写题基本方法。补写题不能凭空造句，必须“瞻前顾后”：向前看上文确定了什么话题与主语，向后看下文需要什么来引出与收束。上承话题、下引落点，补出的句子才能与上下文严丝合缝，故填“瞻”。' },
        { type: 'choice', question: '“读书使人充实，讨论使人机智，____。”填入横线处最恰当的一项是？', options: ['跑步使人强壮', '写作使人精确', '音乐使人愉悦', '旅行使人开阔'], answer: '写作使人精确', explanation: '前文“读书使人充实，讨论使人机智”是“动词+使人+形容词”的并列结构，且同属治学修养范畴。填入句须句式一致、话题同类。“写作使人精确”结构相同、内容相类，衔接最紧；其余各项或话题旁逸或结构不协调，故选“写作使人精确”。' },
        { type: 'fill', question: '排序题中，代词“这”“其”“他”以及关联词“因为…所以”等，提示句子之间的__关系与指代，是定位相邻句的重要线索。', answer: '逻辑', explanation: '本题考查排序题线索。代词提示句间指代关系（如“这”指代前句内容），关联词提示因果、转折、递进等逻辑顺序。借助这些标志能锁定相邻句与先后次序，是排序题“找线索、定顺序”的关键，故填“逻辑”。' },
        { type: 'choice', question: '下列关于保持连贯的说法，正确的一项是？', options: ['连贯要求每句主语字面完全相同', '频繁偷换主语也能保持连贯', '用代词、关联词、同义复现可前后勾连', '并列处句式不同更显活泼'], answer: '用代词、关联词、同义复现可前后勾连', explanation: '保持连贯的手段包括陈述对象一致、句式一致、音节和谐、前后勾连。其中“前后勾连”正靠代词、关联词、同义复现把句与句拴牢，说法正确。A错在“字面完全相同”并非必须；B频繁偷换主语会断裂话题；D并列处句式不一致会破坏整齐顺畅，故均错，选“用代词、关联词、同义复现可前后勾连”。' }
      ]
    },

    /* ===================== 考点四 · 语言表达得体 ===================== */

    { id: 'zt3-u2-l2',    cover: 'assets/cover/chinese/zt3-u2-l2.svg',
    name: '语言文字运用（四）：语言表达得体', author: '高考复习', chapter: '考点四 · 语言表达得体', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、得体的内涵' },
        { type: 'paragraph', text: '得体是指语言表达符合语境和交际需要，即说话写文章看对象、看场合、看目的、看语体，使语言收到预期的交际效果。高考“语言表达得体”题常在具体语境中判断用词是否恰当，或要求修改不得体的语句。' },
        { type: 'keypoint', label: '得体四维度', text: '要做到得体，须统筹四个维度：<strong>对象</strong>（身份、年龄、关系）、<strong>场合</strong>（庄重或随意）、<strong>目的</strong>（说服、请求、通知）、<strong>语体</strong>（口语或书面语）。四者任一错位都会失当。' },
        { type: 'list', items: ['对象：对长辈、平辈、晚辈，对熟人、陌生人，用语分寸不同', '场合：正式典礼用庄重语，私下闲聊可随意', '目的：劝说、致谢、道歉、通知，语气与措辞各异', '语体：口语通俗活泼，书面语规范典雅，不可混用'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">得体四维度</text><rect x="40" y="55" width="190" height="58" rx="8" fill="#1f5f8b"/><text x="135" y="80" text-anchor="middle" font-size="13" fill="#fff">对象</text><text x="135" y="101" text-anchor="middle" font-size="11" fill="#fff">身份年龄关系</text><rect x="245" y="55" width="190" height="58" rx="8" fill="#4a8fa8"/><text x="340" y="80" text-anchor="middle" font-size="13" fill="#fff">场合</text><text x="340" y="101" text-anchor="middle" font-size="11" fill="#fff">庄重或随意</text><rect x="450" y="55" width="190" height="58" rx="8" fill="#c07f4e"/><text x="545" y="80" text-anchor="middle" font-size="13" fill="#fff">目的</text><text x="545" y="101" text-anchor="middle" font-size="11" fill="#fff">说服请求通知</text><rect x="245" y="140" width="190" height="55" rx="8" fill="#7aa05a"/><text x="340" y="165" text-anchor="middle" font-size="13" fill="#fff">语体</text><text x="340" y="186" text-anchor="middle" font-size="11" fill="#fff">口语或书面语</text><text x="135" y="172" text-anchor="middle" font-size="11" fill="#555">四维度统一</text><text x="545" y="172" text-anchor="middle" font-size="11" fill="#555">方为得体</text></svg>', caption: '得体四维度：对象、场合、目的、语体，四者协调统一才算得体。' },
        { type: 'heading', text: '二、四大考虑因素' },
        { type: 'paragraph', text: '得体首先取决于表达时考虑的四个因素。同一句话，对专家说和对孩子说不同，在礼堂说和在饭桌说不同，求人办事和发号施令也不同，口语与书面语更不能乱用。' },
        { type: 'table', headers: ['考虑因素', '要点', '示例'], rows: [['对象', '身份、年龄、亲疏关系决定尊卑分寸', '对师长用“您”，对同窗可称名'], ['场合', '庄重场合用语规范，随意场合可活泼', '追悼会肃穆，聚会可玩笑'], ['目的', '劝说、致谢、道歉、通知语气不同', '请求用“能否”，命令用“必须”'], ['语体', '口语通俗，书面语典雅', '“咋办”口语，“如何处理”书面']] },
        { type: 'example', label: '场合与语体示范', text: '同一件事——请人修改文章：<br>书面语体（得体）：“拙作尚显粗浅，恳请先生<strong>斧正</strong>。”<br>口语随意（对好友）：“我这篇写得糙，你给瞅瞅、改改呗。”<br>若把“瞅瞅呗”用在向师长请教的正式信函中，便语体不合、场合失当；反之在微信闲聊中套“斧正”则显得做作。语体须与场合、对象匹配。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">语体对照：口语 vs 书面语</text><rect x="40" y="55" width="290" height="60" rx="8" fill="#4a8fa8"/><text x="185" y="82" text-anchor="middle" font-size="13" fill="#fff">口语语体</text><text x="185" y="104" text-anchor="middle" font-size="11" fill="#fff">通俗·活泼·短句多</text><rect x="350" y="55" width="290" height="60" rx="8" fill="#1f5f8b"/><text x="495" y="82" text-anchor="middle" font-size="13" fill="#fff">书面语体</text><text x="495" y="104" text-anchor="middle" font-size="11" fill="#fff">规范·典雅·结构整</text><text x="340" y="160" text-anchor="middle" font-size="13" fill="#555">依对象场合选语体，不可错配</text></svg>', caption: '语体对照：口语通俗活泼，书面语规范典雅，须依对象与场合选择，不可混用错配。' },
        { type: 'heading', text: '三、谦敬辞系统' },
        { type: 'paragraph', text: '谦敬辞是得体表达的“硬通货”。谦辞用于自称、表谦虚；敬辞用于称对方、表尊重。用错方向（把谦辞用在对方身上）是最典型的得体错误。' },
        { type: 'keypoint', label: '家大舍小令外人', text: '记谦称口诀“<strong>家大舍小令外人</strong>”：<strong>家</strong>称自家长辈（家父、家母）；<strong>舍</strong>称自家晚辈（舍弟、舍妹）；<strong>令</strong>称对方亲属（令尊、令堂、令郎、令爱）。方向绝不能反。' },
        { type: 'table', headers: ['类别', '代表词语', '使用方向'], rows: [['谦辞·家', '家父、家母、家兄', '称自己长辈'], ['谦辞·舍', '舍弟、舍妹', '称自己晚辈'], ['敬辞·令', '令尊、令堂、令郎、令爱', '称对方亲属'], ['敬辞·行为', '拜读、惠存、垂询、赐教、光临、斧正', '称对方行为'], ['谦辞·自谦', '拙作、寒舍、愚见、涂鸦', '称自己作品处所见解']] },
        { type: 'list', items: ['敬辞行为类：拜读（读对方文章）、惠存（请对方保存）、垂询（对方问询）、赐教（请对方指教）、光临（对方到来）、斧正（请对方改文）', '谦辞自谦类：拙作（自己作品）、寒舍（自己家）、愚见（自己见解）、涂鸦（自己字画）', '易混提醒：“鼎力”是敬辞（感谢对方大力相助），不能说自己“鼎力相助”', '易混提醒：“蓬荜生辉”是谦辞，只能说自己家因客来访而光彩，不能说对方家'] },
        { type: 'example', label: '谦敬辞示范', text: '请人指点文章：“敬请__教。”应填敬辞“赐教”（请对方赐予指教）。<br>自称文章：“这是我的__作。”应填谦辞“拙”（拙作，谦称自己作品）。<br>若写成“敬请拙教”“这是我的赐作”便谦敬错位——把谦辞用在对方、把敬辞用在自己，典型的得体错误。' },
        { type: 'warn', label: '易错提醒', text: '谦敬错位是最常见陷阱：把<strong>谦辞用于对方</strong>（如“您的拙作”“敬请拜读我的文章”），或把<strong>敬辞用于自己</strong>（如“我鼎力相助”“我府上”）。牢记“谦己敬人”四字——谦辞只往自己身上用，敬辞只往对方身上用。' },
        { type: 'heading', text: '四、常见得体错误类型' },
        { type: 'paragraph', text: '高考得体题常设置四类错误：谦敬错位、语体不合、称谓不当、轻重失度。识别这些“病灶”是改错题的突破口。' },
        { type: 'table', headers: ['错误类型', '表现', '典型示例'], rows: [['谦敬错位', '谦辞敬辞方向用反', '“您的拙作”（应为“大作”）'], ['语体不合', '口语书面混用错配', '讣告写“他嗝屁了”'], ['称谓不当', '称呼与关系身份不符', '对师长直呼其名无敬称'], ['轻重失度', '措辞分寸过或不及', '小事用“罪大恶极”形容']] },
        { type: 'list', items: ['谦敬错位：把谦辞用在对方，或敬辞用在自己', '语体不合：庄重场合夹口语，或随意场合硬用书面', '称谓不当：对上级称“你”，对陌生人称“哥们”', '轻重失度：夸大其词或轻描淡写，分寸失当'] },
        { type: 'keypoint', label: '改错三步', text: '修改不得体语句：<strong>一判类型</strong>（属四类中的哪一类）；<strong>二定方向</strong>（谦己敬人、口语还是书面）；<strong>三换词语</strong>（用方向正确、语体匹配的词语替换，尽量小改）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">四类得体错误</text><rect x="40" y="55" width="190" height="42" rx="6" fill="#b04a4a"/><text x="135" y="81" text-anchor="middle" font-size="12" fill="#fff">谦敬错位</text><rect x="250" y="55" width="190" height="42" rx="6" fill="#c07f4e"/><text x="345" y="81" text-anchor="middle" font-size="12" fill="#fff">语体不合</text><rect x="460" y="55" width="190" height="42" rx="6" fill="#7a6fae"/><text x="555" y="81" text-anchor="middle" font-size="12" fill="#fff">称谓不当</text><rect x="245" y="115" width="190" height="42" rx="6" fill="#7aa05a"/><text x="340" y="141" text-anchor="middle" font-size="12" fill="#fff">轻重失度</text><text x="340" y="195" text-anchor="middle" font-size="13" fill="#555">识别病灶类型，再换用方向正确、语体匹配的词语</text></svg>', caption: '四类得体错误：谦敬错位、语体不合、称谓不当、轻重失度，识别类型后对症修改。' },
        { type: 'heading', text: '五、应用文得体' },
        { type: 'paragraph', text: '书信、启事、通知等应用文有相对固定的用语规范。得体不仅体现在词语选择，也体现在格式与称谓的整体匹配。' },
        { type: 'list', items: ['书信：称对方用敬辞（如“尊敬的×先生”），自称用谦辞；结尾用“此致 敬礼”“顺颂 时祺”等敬语', '启事：语气客观平实，不用命令呵斥口吻；寻物、招领、招聘各有惯用句式', '通知：对象明确、事项清楚、用语正式；开头“现将有关事项通知如下”，结尾“特此通知”'] },
        { type: 'example', label: '书信得体示范', text: '得体的书信片段：“尊敬的王老师：<br>　　学生久仰先生学识，拙作一篇奉上，<strong>恳请斧正</strong>。若有不妥，望不吝<strong>赐教</strong>。专此，顺颂 教安。”<br>其中“拙作”谦称己文、“斧正”“赐教”敬称对方行为、“顺颂教安”为书信敬语，对象、语体、谦敬均得体。若把“拙作”改成“您的大作”便指错对象。' },
        { type: 'warn', label: '易错提醒', text: '应用文常见“敬语放错位置”：如通知本应客观正式，却滥用“恳请”“拜托”显得软弱；启事求人办事又用命令式“必须”“不得”，语气生硬。要依<strong>文体性质</strong>选语气——书信重敬谦、通知重明确、启事重平实。' },
        { type: 'tip', label: '学习提示', text: '备考得体题，建议整理“谦敬辞速查表”和“应用文模板”：把高频谦辞、敬辞分两栏抄录并背诵方向；背熟书信、通知、启事的惯用起首与结尾语。考场上先判文体与对象，再套用对应词语，几乎不会出错。' },
        { type: 'reading', text: '延伸思考：“家大舍小令外人”是传统书信的谦敬规则，但在人人平等的现代社交中，过度谦敬有时反显疏离。请思考：在当代语境下，得体表达的“尊重”应以何种形式体现？传统的谦敬辞系统哪些该保留、哪些可简化？' }
      ],
      exercises: [
        { type: 'choice', question: '下列句子中谦敬辞使用正确的一项是？', options: ['这是我的大作，请您指正', '您的拙作立意新颖，令人佩服', '拙作一篇奉上，恳请斧正', '我定当鼎力相助，略尽绵薄'], answer: '拙作一篇奉上，恳请斧正', explanation: '“拙作”是谦辞称自己作品，“斧正”是敬辞请对方改文，方向正确、搭配得体，故正确。A“大作”是敬辞不能称自己；B“拙作”是谦辞不能称对方；D“鼎力相助”是敬辞不能说自己，应为“全力相助”，且“鼎力”与“绵薄”矛盾。故选“拙作一篇奉上，恳请斧正”。' },
        { type: 'fill', question: '谦称口诀“家大舍小__外人”：称自家长辈用“家”（家父），称自家晚辈用“舍”（舍弟），称对方亲属用“令”（令尊）。', answer: '令', explanation: '本题考查谦称口诀。“家大舍小令外人”是记忆谦敬辞方向的口诀：家，称自己长辈；舍，称自己晚辈；令，称对方亲属。三者方向严格区分，令字用于对方亲属（令尊、令堂、令郎、令爱），故填“令”。' },
        { type: 'choice', question: '下列语境中用语得体的一项是？', options: ['在追悼会上说“他终于解脱了，咱哥们儿喝一杯”', '给校长发微信：“老头儿，明天球赛你来不”', '通知结尾写“特此通知”', '向长辈介绍自己父亲：“这是舍父”'], answer: '通知结尾写“特此通知”', explanation: '通知属正式应用文，结尾用“特此通知”规范得体。A追悼会场合庄重却用随意口语且称“哥们儿”，语体场合俱失；B对校长称“老头儿”称谓不当、不敬；D“舍父”错误，“舍”用于自家晚辈，称父亲应用谦辞“家父”。故选“通知结尾写‘特此通知’”。' },
        { type: 'fill', question: '应用文中，书信结尾常用“此致 敬礼”或“顺颂__安”等敬语，以体现对收信人的尊重。', answer: '教', explanation: '本题考查书信得体用语。传统书信结尾敬语依对象而异，对师长可用“顺颂教安”“即颂 教祺”，对平辈可用“顺颂 时祺”等。“教安”含尊敬对方教诲之意，是书信得体的惯用收束语，故填“教”。' },
        { type: 'choice', question: '下列关于得体错误类型的判断，正确的一项是？', options: ['“您的拙作写得好”属于语体不合', '“他嗝屁了”用于讣告属于轻重失度', '对陌生人称“哥们”属于称谓不当', '小事夸成“惊天动地”属于谦敬错位'], answer: '对陌生人称“哥们”属于称谓不当', explanation: '“哥们”是亲近随意的称呼，用于陌生人违背身份亲疏分寸，属于称谓不当，判断正确。A“您的拙作”把谦辞用在对方，是谦敬错位而非语体不合；B讣告用“嗝屁”是口语书面混用的语体不合，非轻重失度；D小事夸大属轻重失度，非谦敬错位。故选“对陌生人称‘哥们’属于称谓不当”。' }
      ]
    }

  );
})();
