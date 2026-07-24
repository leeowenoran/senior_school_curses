/* ============================================================
 * 高一语文 · 选择性必修 上册 · 第一单元 伟大的复兴（中国革命传统作品研习）
 * 6 课时：中国人民站起来了 / 长征胜利万岁 / 大战中的插曲 / 别了不列颠尼亚 / 焦裕禄 / 抗疫记
 * 数据注入：chinese.xb1.points
 * 质量标准：每课 ≥22 内容块 / 3 SVG / 含 example+table+tip+list(≥2)+warn+keypoint
 * 现代文（非文言）课文：用 heading/paragraph/keypoint 等呈现，重点 <strong> 加粗
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'xb1');
  if (!v) return;

  v.points.push(

    /* ==================== 第1课 中国人民站起来了 ==================== */
    {
      id: 'xb1-u1-l1',
      name: '《中国人民站起来了》',
      author: '毛泽东',
      chapter: '第一单元 伟大的复兴（中国革命传统作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体知识：开幕词、演讲稿与政论文' },
        { type: 'keypoint', label: '开幕词', text: '开幕词是在<strong>重要会议或重大活动开始时</strong>，由主持人或主要领导人发表的讲话文稿，具有<strong>宣告性</strong>（宣布会议宗旨、任务）与<strong>引导性</strong>（引导与会者明确方向）。本文是1949年9月21日毛泽东在中国人民政治协商会议第一届全体会议上所致的开幕词。' },
        { type: 'keypoint', label: '演讲稿', text: '演讲稿一般由<strong>称谓语、问候语、正文、结束语</strong>等部分组成。本文开头「诸位代表先生们，全国人民所渴望的政治协商会议现在开幕了」即为称谓语与宣告，结尾发出号召，结构完整，富有感染力。' },
        { type: 'keypoint', label: '政论文', text: '政论文以<strong>议论</strong>为主，特点是<strong>主旨突出、结构简明、行文流畅</strong>。本文围绕「中国人民站起来了」这一核心论断展开，逻辑清晰、气势磅礴。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf3e3"/><g font-size="13" text-anchor="middle"><rect x="30" y="50" width="180" height="70" rx="8" fill="#e9d9b8" stroke="#b08d4f" stroke-width="2"/><text x="120" y="78" fill="#7a5a2e">开幕词</text><text x="120" y="100" fill="#5b4636">宣告·引导</text><rect x="250" y="50" width="180" height="70" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="340" y="78" fill="#0f3b5e">演讲稿</text><text x="340" y="100" fill="#33536e">称谓·正文·结尾</text><rect x="470" y="50" width="180" height="70" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="560" y="78" fill="#fff">政论文</text><text x="560" y="100" fill="#e8d5f7">议论·主旨突出</text></g><path d="M120 130 V175 H340 V130" stroke="#8a6d3b" stroke-width="2" fill="none" stroke-dasharray="5 4"/><path d="M340 130 V175 H560" stroke="#8a6d3b" stroke-width="2" fill="none" stroke-dasharray="5 4"/><text x="340" y="210" font-size="14" fill="#5a6b3e" text-anchor="middle">三种文体在本文中交融：以开幕词之「宣告」起，以演讲稿之「感染」承，以政论文之「立论」成</text></svg>', caption: '本文兼具开幕词、演讲稿、政论文三重文体特征，三者在文中自然交融。' },

        { type: 'heading', text: '二、写作背景与作者' },
        { type: 'paragraph', text: '1949年9月，中国人民政治协商会议第一届全体会议在北平召开，会议肩负着<strong>筹建新中国</strong>的历史使命：制定《共同纲领》、选举中央人民政府、确定国旗国歌国都。毛泽东以开幕词宣告一个旧时代的结束与人民政权的诞生。' },
        { type: 'keypoint', label: '作者', text: '毛泽东（1893—1976），伟大的<strong>无产阶级革命家、战略家、理论家</strong>，中国共产党、中国人民解放军、中华人民共和国的主要缔造者。其文章气势恢宏、逻辑严密，兼具理论高度与宣传鼓动力量。' },
        { type: 'keypoint', label: '题解', text: '「中国人民站起来了」是全文的<strong>核心论断</strong>与文眼，意指中国人民<strong>推翻了三座大山（帝国主义、封建主义、官僚资本主义）的压迫，成为国家的主人</strong>，从此结束任人宰割的历史，以独立自立的姿态立于世界民族之林。' },

        { type: 'heading', text: '三、内容层次梳理' },
        { type: 'list', items: ['第一层（回顾）：指出会议的任务——总结革命经验，指明「我们的会议是一个全国人民大团结的会议」', '第二层（宣告）：宣布中国人民「站起来了」，推翻了国民党反动统治与帝国主义压迫', '第三层（胜利）：用「长征」「孙中山」等历史参照，说明革命胜利的必然与伟大', '第四层（展望）：提出经济建设、文化建设、巩固国防等任务，号召「全国人民大团结」'] },
        { type: 'example', label: '分析示范', text: '如何理解「中国人从此站立起来了」中的「站」字？<br><br><strong>解析</strong>：这里的「站」是<strong>拟人与象征</strong>手法，与「跪」「趴」（被压迫、被奴役）相对。它形象地表明中国人民从<strong>被动挨打、任人欺凌</strong>的屈辱状态，转变为<strong>独立自主、当家作主</strong>的新状态。「站起来」三字凝练有力，既是政治论断，也是民族精神的觉醒宣言，成为后世反复引用的经典表述。' },
        { type: 'table', headers: ['层次', '主要内容', '作用'], rows: [['回顾历史', '大革命、长征、抗日战争、解放战争的经验', '揭示胜利来之不易'], ['宣告胜利', '中国人民站起来了，推翻三座大山', '点明文眼，提振信心'], ['缅怀先烈', '纪念孙中山与革命牺牲者', '承前启后，凝聚共识'], ['展望未来', '经济、文化、国防建设任务', '指明方向，发出号召']] },

        { type: 'heading', text: '四、思想内涵与语言特色' },
        { type: 'keypoint', label: '思想内涵', text: '文章深刻阐释了「中国人民从此站起来了」的<strong>历史意义</strong>：它标志着中国半殖民地半封建社会的终结，标志着<strong>人民成为国家主人</strong>，标志着中华民族以崭新面貌自立于世界。这一论断凝聚了百年来民族复兴的梦想。' },
        { type: 'warn', label: '重点·语言气势', text: '本文语言<strong>短句为主、排比铺陈、反复咏叹</strong>，如「我们的民族将……我们的人民将……」的段落，形成<strong>磅礴的排比气势</strong>。阅读时要体会这种「宣告体」语言的煽动性与说服力，注意「将」「一定」「必然」等词语所传达的坚定信念。' },
        { type: 'list', items: ['宣告性：开宗明义宣布会议开幕与历史结论', '引导性：明确今后任务，引导代表统一认识', '鼓动性：排比、反复增强感染力与号召力', '逻辑性：回顾—宣告—展望，层层推进'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef6f0"/><g font-size="13" text-anchor="middle"><circle cx="110" cy="110" r="48" fill="#e9d9b8" stroke="#b08d4f" stroke-width="2"/><text x="110" y="106">回顾</text><text x="110" y="128">革命历程</text><circle cx="290" cy="110" r="48" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="290" y="106">宣告</text><text x="290" y="128">站起来了</text><circle cx="470" cy="110" r="48" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="470" y="106">缅怀</text><text x="470" y="128">先烈先辈</text><circle cx="600" cy="110" r="48" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="600" y="106">展望</text><text x="600" y="128">建设任务</text></g><g stroke="#7b4fe0" stroke-width="2" fill="none"><line x1="158" y1="110" x2="242" y2="110" marker-end="url(#u1l1a)"/><line x1="338" y1="110" x2="422" y2="110" marker-end="url(#u1l1a)"/><line x1="518" y1="110" x2="552" y2="110" marker-end="url(#u1l1a)"/></g><defs><marker id="u1l1a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7b4fe0"/></marker></defs><text x="340" y="208" font-size="13" fill="#4a2b8a" text-anchor="middle">行文脉络：以「回顾—宣告—缅怀—展望」层层推进，凸显「站起来」的历史必然</text></svg>', caption: '全文以回顾、宣告、缅怀、展望四个层次展开，逻辑清晰、气势贯通。' },

        { type: 'heading', text: '五、本课小结' },
        { type: 'tip', label: '拓展', text: '「中国人民站起来了」后来发展为「站起来、富起来、强起来」的「三次伟大飞跃」叙事：毛泽东时代「站起来」（民族独立），改革开放「富起来」（经济发展），新时代「强起来」（民族复兴）。阅读本文时可结合这一宏大历史脉络，理解其作为「起点性宣言」的意义。' },
        { type: 'list', items: ['文体：开幕词＋演讲稿＋政论文三重特征交融', '文眼：「中国人民站起来了」＝人民成为国家主人', '结构：回顾—宣告—缅怀—展望，层层推进', '语言：短句、排比、反复，气势磅礴富有鼓动性', '意义：标志半殖民地半封建社会终结、民族复兴起点'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="170" fill="#f5f0ff"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="170" height="70" rx="8" fill="#e05d44" stroke="#a83c2c" stroke-width="2"/><text x="125" y="80" fill="#fff">站起来</text><text x="125" y="102" fill="#ffe">民族独立·人民当家作主</text><rect x="255" y="50" width="170" height="70" rx="8" fill="#4a7de0" stroke="#2f57a8" stroke-width="2"/><text x="340" y="80" fill="#fff">富起来</text><text x="340" y="102" fill="#dff">改革开放·经济发展</text><rect x="470" y="50" width="170" height="70" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="555" y="80" fill="#fff">强起来</text><text x="555" y="102" fill="#dff0c8">民族复兴·强国建设</text></g><text x="340" y="150" font-size="13" fill="#4a2b8a" text-anchor="middle">本文是「站起来」的宣言，开启民族复兴「三次飞跃」的历史起点</text></svg>', caption: '本文「站起来」的论断，是民族复兴「三次伟大飞跃」叙事的逻辑起点。' }
      ],
      exercises: [
        { type: 'choice', question: '下列对本文文体特征的表述，正确的一项是？', options: ['本文只是单纯的开幕词，与演讲稿、政论文无关', '本文兼具开幕词的宣告性、演讲稿的感染力与政论文的议论性', '本文是一篇小说，描写了虚构的人物', '本文是新闻报道，强调时效性'], answer: '本文兼具开幕词的宣告性、演讲稿的感染力与政论文的议论性', explanation: '本文是中国人民政治协商会议第一届全体会议的开幕词，具有宣告会议宗旨的「宣告性」；同时它具备演讲稿「称谓语—正文—结束语」的格式与感染力量；内容上围绕「中国人民站起来了」展开议论，体现政论文「主旨突出、结构简明」的特点。三者交融，并非单一文体。' },
        { type: 'choice', question: '「中国人民站起来了」中「站」字的表达效果，理解恰当的是？', options: ['只是指身体直立的动作', '以拟人与象征手法，形象表明人民由被压迫变为独立自主的主人', '表示参加会议的代表站起身', '是一个错别字，应为「战」'], answer: '以拟人与象征手法，形象表明人民由被压迫变为独立自主的主人', explanation: '「站」与「跪」「趴」相对，是拟人与象征用法，形象地写出中国人民从被动挨打、任人欺凌的屈辱状态，转变为独立自主、当家作主的新状态。它是全文文眼与核心论断，凝练有力，并非字面动作或错字。' },
        { type: 'fill', question: '本文的行文脉络可概括为四个层次：回顾革命历程→______→缅怀先烈先辈→______。', answer: '宣告中国人民站起来了|展望未来建设任务', explanation: '文章先回顾大革命、长征、抗战、解放战争的历史经验，再宣告「中国人民站起来了」这一核心结论，接着缅怀孙中山与革命牺牲者以凝聚共识，最后提出经济、文化、国防建设任务并号召团结。四层层层推进，凸显「站起来」的历史必然。' },
        { type: 'choice', question: '关于本文语言特色，下列说法正确的一项是？', options: ['语言晦涩难懂，多用生僻文言', '以短句为主，善用排比、反复，气势磅礴富有鼓动性', '通篇平淡叙述，毫无感情色彩', '大量使用方言口语，不适合正式场合'], answer: '以短句为主，善用排比、反复，气势磅礴富有鼓动性', explanation: '本文作为宣告体与鼓动性政论，多用短句，并以「我们的民族将……我们的人民将……」等排比、反复句式增强气势与说服力。这种语言风格服务于「宣告胜利、号召团结」的目的，而非晦涩或平淡。' },
        { type: 'choice', question: '「中国人民站起来了」的历史意义，理解最准确的是？', options: ['只是说明会议顺利召开', '标志着中国半殖民地半封建社会终结，人民成为国家主人', '表示中国成为世界最强国家', '指代表们站了起来鼓掌'], answer: '标志着中国半殖民地半封建社会终结，人民成为国家主人', explanation: '这一论断的核心意义在于：它宣告中国人民推翻了帝国主义、封建主义、官僚资本主义三座大山的压迫，结束了半殖民地半封建社会的历史，人民真正成为国家的主人，中华民族以独立自立姿态立于世界。它是民族复兴的逻辑起点。' }
      ]
    },

    /* ==================== 第2课 长征胜利万岁 ==================== */
    {
      id: 'xb1-u1-l2',
      name: '《长征胜利万岁》',
      author: '杨成武',
      chapter: '第一单元 伟大的复兴（中国革命传统作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体知识：回忆录' },
        { type: 'keypoint', label: '回忆录', text: '回忆录是<strong>追记本人或他人过去生活经历和社会活动</strong>的一种文体，基本特点是<strong>客观、公正、不虚饰</strong>。它既可写自己亲历，也可记他人往事，常以第一人称叙述，带有真实的历史现场感。' },
        { type: 'paragraph', text: '本文节选自杨成武的回忆录《忆长征》，记述了红军长征途中<strong>到达吴起镇、与陕北红军会师、打退敌军骑兵</strong>等激动人心的历史片段，真实再现了长征胜利时刻的欢腾景象。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#fbf3e3"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="150" height="60" rx="8" fill="#e9d9b8" stroke="#b08d4f" stroke-width="2"/><text x="115" y="78" fill="#7a5a2e">客观</text><rect x="220" y="50" width="150" height="60" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="295" y="78" fill="#0f3b5e">公正</text><rect x="400" y="50" width="150" height="60" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="475" y="78" fill="#fff">不虚饰</text><rect x="560" y="50" width="110" height="60" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="615" y="78" fill="#fff">亲历</text></g><text x="340" y="150" font-size="13" fill="#5a6b3e" text-anchor="middle">回忆录三特征：以亲历者视角，客观公正地记录真实历史</text><path d="M115 130 V160 H615" stroke="#8a6d3b" stroke-width="2" fill="none" stroke-dasharray="5 4"/><text x="365" y="185" font-size="12" fill="#8a6d3b" text-anchor="middle">第一人称叙述 → 真实的历史现场感</text></svg>', caption: '回忆录以亲历者视角客观、公正、不虚饰地记录历史，具有真实现场感。' },

        { type: 'heading', text: '二、历史背景：红军长征' },
        { type: 'keypoint', label: '长征背景', text: '1934年，由于<strong>第五次反「围剿」失败</strong>，中央红军被迫实行战略转移，开始长征。途经<strong>十一省、翻雪山过草地、行程二万五千里</strong>，于1935年10月到达陕北吴起镇，与陕北红军胜利会师。' },
        { type: 'keypoint', label: '长征意义', text: '长征是<strong>宣言书、宣传队、播种机</strong>（毛泽东语），它保存了党和红军的基干力量，播下了革命种子，铸就了<strong>不怕牺牲、前赴后继，勇往直前、坚韧不拔，众志成城、团结互助，百折不挠、克服困难</strong>的长征精神。' },
        { type: 'example', label: '分析示范', text: '文中写「吴起镇披着灿烂的阳光」与红军「欢腾」的场面，有何作用？<br><br><strong>解析</strong>：这是<strong>情景交融</strong>的写法。明媚的阳光既点明会师时令，又<strong>象征革命前途的光明</strong>；「欢腾」的场面描写则直接抒发红军<strong>历经艰难终获胜利的无比喜悦</strong>。景物之「暖」与人物之「欢」相互烘托，强化了长征胜利来之不易、值得珍视的情感基调。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef6f0"/><g font-size="12" text-anchor="middle" fill="#5b4636"><text x="70" y="40">瑞金</text><text x="200" y="60">湘江</text><text x="320" y="40">遵义</text><text x="440" y="70">雪山草地</text><text x="560" y="50">吴起镇</text><text x="630" y="40">会师</text></g><path d="M70 50 Q200 70 320 50 T560 60 Q600 50 630 55" fill="none" stroke="#c0392b" stroke-width="3"/><g fill="#c0392b"><circle cx="70" cy="50" r="5"/><circle cx="320" cy="50" r="5"/><circle cx="560" cy="60" r="6"/><circle cx="630" cy="55" r="6"/></g><text x="340" y="170" font-size="13" fill="#4a2b8a" text-anchor="middle">长征路线图（示意）：从瑞金出发，历千难万险，终抵吴起镇胜利会师</text></svg>', caption: '长征从瑞金出发，跨十一省、行程二万五千里，终抵吴起镇会师。' },

        { type: 'heading', text: '三、内容把握与人物形象' },
        { type: 'list', items: ['会师之喜：吴起镇会师，红军与陕北根据地连成一片，欢腾鼓舞', '胜利之战：打退敌军骑兵追击，以实际行动庆祝长征胜利', '历史之感：回顾长征艰辛，认识胜利的伟大意义', '精神之扬：抒发对革命前途的坚定信念与豪迈情怀'] },
        { type: 'keypoint', label: '情感基调', text: '全文贯穿着<strong>胜利的喜悦、豪迈的激情与对革命前途的坚定信念</strong>。作者以亲历者口吻，将宏大历史浓缩于会师前后几个真实片段，朴实真挚，感人至深。' },
        { type: 'table', headers: ['方面', '具体表现', '阅读要点'], rows: [['叙事视角', '第一人称亲历者', '真实可信，有现场感'], ['情感表达', '欢腾、喜悦、豪迈', '情景交融，直抒胸臆'], ['选材特点', '会师、作战等典型片段', '以小见大，以点带面'], ['语言风格', '朴实明快、带口语色彩', '符合回忆录「不虚饰」']] },

        { type: 'heading', text: '四、重点与拓展' },
        { type: 'warn', label: '易混·文体', text: '回忆录与<strong>新闻、小说</strong>易混：回忆录<strong>必须真实</strong>（客观公正不虚饰），小说可虚构，新闻重时效。本文虽也描写生动场面，但其<strong>人物、事件均真实可考</strong>，属回忆录而非小说。' },
        { type: 'list', items: ['长征精神：不怕牺牲、勇往直前、坚韧不拔、团结互助、百折不挠', '长征意义：宣言书、宣传队、播种机', '回忆录特点：客观、公正、不虚饰、第一人称', '阅读方法：结合历史背景，体会真实场景中的革命豪情'] },
        { type: 'tip', label: '拓展', text: '毛泽东《七律·长征》「红军不怕远征难，万水千山只等闲」与本文精神相通。可结合诗句体会长征的壮阔与红军的乐观。今日「长征」一词更常比喻<strong>长期艰巨的事业</strong>（如「新长征」「科技长征」），这种借用体现了长征精神在当代的延续。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="170" fill="#f5f0ff"/><g font-size="13" text-anchor="middle"><circle cx="120" cy="85" r="44" fill="#e05d44" stroke="#a83c2c" stroke-width="2"/><text x="120" y="82">不怕牺牲</text><text x="120" y="102">前赴后继</text><circle cx="300" cy="85" r="44" fill="#4a7de0" stroke="#2f57a8" stroke-width="2"/><text x="300" y="82">勇往直前</text><text x="300" y="102">坚韧不拔</text><circle cx="480" cy="85" r="44" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="480" y="82">众志成城</text><text x="480" y="102">团结互助</text><circle cx="610" cy="85" r="44" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="610" y="82">百折不挠</text><text x="610" y="102">克服困难</text></g><text x="340" y="158" font-size="13" fill="#4a2b8a" text-anchor="middle">长征精神：四组核心内涵，铸就中华民族不屈的脊梁</text></svg>', caption: '长征精神包含不怕牺牲、勇往直前、团结互助、百折不挠等核心内涵。' },

        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['文体：回忆录——客观、公正、不虚饰，第一人称亲历', '背景：第五次反围剿失败，战略转移，二万五千里长征', '内容：吴起镇会师、击退追兵、回顾艰辛、抒发豪情', '精神：长征精神是不怕牺牲、百折不挠的民族魂', '特色：情景交融、朴实真挚、以小见大'] }
      ],
      exercises: [
        { type: 'choice', question: '下列对「回忆录」文体特点的表述，正确的一项是？', options: ['可以随意虚构人物和情节', '以客观、公正、不虚饰为特点，常据亲历记录', '必须采用第三人称全知视角', '属于新闻报道，讲究时效'], answer: '以客观、公正、不虚饰为特点，常据亲历记录', explanation: '回忆录是追记本人或他人过去生活经历和社会活动的文体，核心特点是客观、公正、不虚饰，常以第一人称亲历视角叙述，具有真实的历史现场感。它不同于可虚构的小说，也不同于重时效的新闻。' },
        { type: 'choice', question: '红军长征胜利的历史意义，理解正确的是？', options: ['长征只是一次普通行军', '长征是宣言书、宣传队、播种机，保存了革命力量', '长征导致革命失败', '长征仅具有军事意义'], answer: '长征是宣言书、宣传队、播种机，保存了革命力量', explanation: '毛泽东形象地说长征是「宣言书、宣传队、播种机」。长征保存了党和红军的基干力量，向全国宣传了革命主张，在沿途播下革命种子，并铸就了伟大的长征精神，具有深远的政治、军事与精神意义。' },
        { type: 'fill', question: '本文以______人称亲历者视角，写了红军到达______与陕北红军会师、打退敌军______等片段，抒发长征胜利的喜悦。', answer: '第一|吴起镇|骑兵', explanation: '本文是杨成武的回忆录，用第一人称亲历视角，记述了中央红军到达吴起镇与陕北红军胜利会师、并打退敌军骑兵追击的真实片段，真实再现了长征胜利时刻的欢腾，体现了回忆录「客观、公正、不虚饰」的特点。' },
        { type: 'choice', question: '文中「吴起镇披着灿烂的阳光」属于什么写法？其作用是？', options: ['夸张，为了搞笑', '情景交融，以明丽景物象征革命前途光明并烘托喜悦', '对比，突出黑暗', '白描，毫无情感'], answer: '情景交融，以明丽景物象征革命前途光明并烘托喜悦', explanation: '这是情景交融的写法。明媚的阳光既点明会师时令，又象征革命前途的光明；与红军「欢腾」的场面相互烘托，强化长征胜利来之不易、值得珍视的情感基调，并非夸张搞笑或纯白描。' },
        { type: 'choice', question: '关于本文与小说、新闻的区别，说法正确的是？', options: ['三者都没区别', '回忆录人物事件必须真实，小说可虚构，新闻重时效', '新闻也可以随意虚构', '小说必须完全真实'], answer: '回忆录人物事件必须真实，小说可虚构，新闻重时效', explanation: '回忆录要求客观公正不虚饰，人物事件真实可考；小说以虚构塑造典型形象；新闻强调新近发生事实的报道，讲究真实与时效。本文人物事件均真实，属回忆录而非小说或新闻。' }
      ]
    },

    /* ==================== 第3课 大战中的插曲 ==================== */
    {
      id: 'xb1-u1-l3',
      name: '《大战中的插曲》',
      author: '聂荣臻',
      chapter: '第一单元 伟大的复兴（中国革命传统作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体知识与背景' },
        { type: 'keypoint', label: '回忆录', text: '本文是聂荣臻元帅的<strong>回忆录</strong>，记述了抗日战争时期（百团大战期间）<strong>八路军救助两名日本孤女</strong>的真实故事，体现革命家<strong>博大胸怀与人道主义精神</strong>。' },
        { type: 'keypoint', label: '历史背景', text: '1940年，八路军发动<strong>百团大战</strong>重创华北日军。在战火中，日军遗弃了两名小女孩，聂荣臻指示<strong>全力救护</strong>，并设法将她们送还日方。这一「大战中的插曲」成为战争与人性交织的佳话。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#fbf3e3"/><g font-size="13" text-anchor="middle"><rect x="40" y="55" width="180" height="70" rx="8" fill="#e05d44" stroke="#a83c2c" stroke-width="2"/><text x="130" y="83" fill="#fff">战争（百团大战）</text><text x="130" y="105" fill="#ffe">残酷·烽火</text><rect x="250" y="55" width="180" height="70" rx="8" fill="#4a7de0" stroke="#2f57a8" stroke-width="2"/><text x="340" y="83" fill="#fff">救助孤女</text><text x="340" y="105" fill="#dff">仁爱·救护</text><rect x="460" y="55" width="180" height="70" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="550" y="83" fill="#fff">送还日方</text><text x="550" y="105" fill="#dff0c8">人道·和平</text></g><path d="M130 140 V175 H550" stroke="#8a6d3b" stroke-width="2" fill="none" stroke-dasharray="5 4"/><text x="340" y="200" font-size="13" fill="#5a6b3e" text-anchor="middle">以战争之「残酷」反衬人道主义之「温暖」，构成「插曲」的张力</text></svg>', caption: '战火中救助日本孤女，以战争残酷反衬革命家的人道主义胸怀。' },

        { type: 'heading', text: '二、内容把握' },
        { type: 'list', items: ['缘起：百团大战中日军炮火下，两名日本女孩被遗弃', '救护：聂荣臻指示找来乳娘、安排就医，视如己出悉心照料', '送还：写信给日军官兵，设法将女孩安全送回日方', '感怀：多年后感慨这一插曲体现的人道主义与国际主义精神'] },
        { type: 'keypoint', label: '人物形象·聂荣臻', text: '聂荣臻在文中展现出<strong>博大胸怀、英勇奋斗、百折不挠</strong>的革命家品质，更难得的是在民族敌对的战争中仍葆有<strong>对无辜生命的人道关怀</strong>——敌人是孩子，孩子无罪，体现的是超越国界的人性之善。' },
        { type: 'example', label: '分析示范', text: '聂荣臻给日军官兵的信中写道「吾人对此孤儿，一视同仁」，体现了什么？<br><br><strong>解析</strong>：这体现了<strong>人道主义与国际主义精神</strong>。在惨烈的抗日战争中，八路军将领没有将仇恨迁怒于敌国儿童，而是「一视同仁」地施行救护。这一做法超越了狭隘的民族复仇，彰显<strong>革命人道主义</strong>——尊重生命、关爱弱者，即便对象是敌国遗孤。信既是事实陈述，也是一次道义上的舆论争取。' },
        { type: 'table', headers: ['环节', '做法', '精神内涵'], rows: [['发现孤女', '战火中寻得两名日本女孩', '对生命的珍视'], ['悉心救护', '找乳娘、就医、善待', '人道主义关怀'], ['致信送还', '写信日军、安全送回', '国际主义与和平诉求'], ['战后感怀', '忆及插曲，重申人道', '胸怀博大、反战爱民']] },

        { type: 'keypoint', label: '人道主义价值', text: '救助敌国孤女超越了<strong>狭隘的民族复仇</strong>，体现了<strong>革命人道主义</strong>——即在战争中仍坚守对生命的尊重。这种情怀与法西斯滥杀无辜形成鲜明对照，也说明中国共产党领导的抗战是<strong>正义的、人道的</strong>战争。' },
        { type: 'paragraph', text: '这一「插曲」虽小，却折射出战争的残酷与人性的光辉并存的复杂图景。它提醒我们：战争的敌对双方是军国主义势力，而非普通的平民与儿童；以仁爱对待敌国无辜者，恰恰是对战争本身最有力的反讽与超越。' },
        { type: 'heading', text: '三、思想内涵与写作特色' },
        { type: 'keypoint', label: '主旨', text: '文章通过救助日本孤女这一「插曲」，歌颂了<strong>无产阶级革命家博大的胸怀与人道主义精神</strong>，表明中国人民的抗战是<strong>反侵略、爱和平</strong>的正义之战，即使对敌国无辜者也施以仁爱，与法西斯暴行形成鲜明对照。' },
        { type: 'warn', label: '重点·「插曲」之妙', text: '标题「大战中的插曲」中「插曲」是<strong>比喻</strong>，指<strong>战争主旋律中一段温馨感人的小插曲</strong>。它反衬大战的残酷，凸显人性的温暖。阅读时须注意：这不是「闲笔」，而是<strong>以小事见大精神</strong>的精心选材。' },
        { type: 'list', items: ['选材：以小见大，以「救助孤女」见革命人道主义', '手法：在残酷战争背景中突出温暖人性（反衬）', '语言：平实真诚，回忆录式的不虚饰', '立意：超越民族仇恨，彰显和平与人道'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef6f0"/><g font-size="13" text-anchor="middle"><circle cx="130" cy="100" r="46" fill="#e05d44" stroke="#a83c2c" stroke-width="2"/><text x="130" y="96">残酷大战</text><text x="130" y="118">烽火连天</text><circle cx="340" cy="100" r="46" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="340" y="96">仁爱插曲</text><text x="340" y="118">救护孤女</text><circle cx="550" cy="100" r="46" fill="#4a7de0" stroke="#2f57a8" stroke-width="2"/><text x="550" y="96">和平精神</text><text x="550" y="118">人道之光</text></g><g stroke="#7b4fe0" stroke-width="2" fill="none"><line x1="176" y1="100" x2="294" y2="100" marker-end="url(#u1l3a)"/><line x1="386" y1="100" x2="504" y2="100" marker-end="url(#u1l3a)"/></g><defs><marker id="u1l3a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7b4fe0"/></marker></defs><text x="340" y="180" font-size="13" fill="#4a2b8a" text-anchor="middle">由「残酷」到「仁爱」再到「和平」：插曲折射出的人道主义升华</text></svg>', caption: '救助孤女的「插曲」，由战争残酷升华至人道主义与和平精神。' },

        { type: 'heading', text: '四、本课小结' },
        { type: 'tip', label: '拓展', text: '多年后，被救助的日本女孩美穗子专程来华感谢聂荣臻，成就一段中日民间友好的佳话。这一真实故事说明：<strong>战争敌对的是军国主义，而非普通民众与儿童</strong>。革命人道主义在今天仍具价值——它提醒我们区分侵略者与被裹挟的平民。' },
        { type: 'list', items: ['文体：回忆录，真实记录百团大战中的救助故事', '事件：聂荣臻救护并送还两名日本孤女', '精神：博大胸怀、人道主义、国际主义', '手法：以战争残酷反衬人性温暖（插曲之妙）', '立意：反侵略、爱和平，超越民族仇恨'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="160" fill="#f5f0ff"/><g font-size="13" text-anchor="middle"><rect x="60" y="45" width="180" height="60" rx="8" fill="#e05d44" stroke="#a83c2c" stroke-width="2"/><text x="150" y="82" fill="#fff">百团大战·烽火</text><rect x="250" y="45" width="180" height="60" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="340" y="82" fill="#fff">救护孤女·仁爱</text><rect x="440" y="45" width="180" height="60" rx="8" fill="#4a7de0" stroke="#2f57a8" stroke-width="2"/><text x="530" y="82" fill="#fff">送还日方·和平</text></g><text x="340" y="140" font-size="13" fill="#4a2b8a" text-anchor="middle">「插曲」串起：烽火→仁爱→和平，彰显革命人道主义</text></svg>', caption: '全文以救助孤女为线索，串起战争、仁爱、和平三重意蕴。' }
      ],
      exercises: [
        { type: 'choice', question: '本文标题「大战中的插曲」中「插曲」的含义是？', options: ['指一首歌曲', '比喻战争主旋律中一段温馨感人的小事件，以小见大', '指战斗的号角', '指一篇新闻报道'], answer: '比喻战争主旋律中一段温馨感人的小事件，以小见大', explanation: '「插曲」本指穿插于大型乐曲间的小曲，文中比喻百团大战这一残酷「主旋律」中，救助日本孤女这段温馨感人的「小事件」。它不是闲笔，而是精心选材，以小事见革命人道主义之大精神，用战争残酷反衬人性温暖。' },
        { type: 'choice', question: '聂荣臻救助日本孤女这一行为，主要体现了？', options: ['对敌人的妥协退让', '革命家博大胸怀与人道主义、国际主义精神', '单纯的军事策略', '个人喜好'], answer: '革命家博大胸怀与人道主义、国际主义精神', explanation: '在民族敌对的战争中，聂荣臻没有将仇恨迁怒于敌国儿童，而是悉心救护并安全送还，体现了超越国界的人性之善、革命人道主义与国际主义精神，表明中国人民的抗战是反侵略、爱和平的正义之战。' },
        { type: 'fill', question: '本文是______的回忆录，记述了______大战期间八路军救助两名日本______并送还日方的真实故事。', answer: '聂荣臻|百团|孤女', explanation: '《大战中的插曲》是聂荣臻元帅的回忆录，记述了1940年百团大战期间，八路军在战火中发现并悉心救护两名被日军遗弃的日本女孩，后设法将她们安全送还日方的真实故事，体现革命人道主义精神。' },
        { type: 'choice', question: '关于本文写作特色，下列说法正确的是？', options: ['以虚构情节吸引读者', '以战争残酷背景反衬人性温暖，选材以小见大', '通篇议论，没有叙事', '语言华丽堆砌辞藻'], answer: '以战争残酷背景反衬人性温暖，选材以小见大', explanation: '本文在百团大战的残酷背景下，突出救助孤女这一温暖片段，形成强烈反衬；以「小插曲」见「大精神」，选材以小见大；语言平实真诚，符合回忆录「不虚饰」的特点，并非虚构或华丽堆砌。' },
        { type: 'choice', question: '「吾人对此孤儿，一视同仁」一句传达的态度是？', options: ['区别对待敌国儿童', '不分敌我、平等施以人道救护', '准备将女孩留作人质', '漠不关心'], answer: '不分敌我、平等施以人道救护', explanation: '「一视同仁」表明八路军将领没有因民族敌对而迁怒于敌国无辜儿童，而是平等地施行救护。这超越了狭隘的民族复仇，彰显了革命人道主义——尊重生命、关爱弱者，即便对象是敌国遗孤，也施以仁爱。' }
      ]
    },

    /* ==================== 第4课 别了，不列颠尼亚 ==================== */
    {
      id: 'xb1-u1-l4',
      name: '《别了，"不列颠尼亚"》',
      author: '周婷、杨兴',
      chapter: '第一单元 伟大的复兴（中国革命传统作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体知识：新闻' },
        { type: 'keypoint', label: '新闻', text: '新闻是<strong>新近发生的事实的报道</strong>，其基本结构由<strong>标题、导语、主体、背景、结尾</strong>五部分组成，具有<strong>真实性、时效性、简洁性</strong>的特征。本文是一篇<strong>新闻特写（事件通讯式消息）</strong>，报道1997年7月1日香港回归。' },
        { type: 'keypoint', label: '标题之妙', text: '标题「别了，『不列颠尼亚』」运用<strong>主谓倒装</strong>（常规为「『不列颠尼亚』别了」），突出「别了」的宣告意味；用<strong>借代</strong>以「不列颠尼亚」指代英国；并有<strong>双关</strong>——既指末代港督乘「不列颠尼亚」号离港，也象征英国殖民统治的终结。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#fbf3e3"/><g font-size="13" text-anchor="middle" fill="#5b4636"><rect x="30" y="40" width="110" height="50" rx="6" fill="#e9d9b8" stroke="#b08d4f" stroke-width="2"/><text x="85" y="70">标题</text><rect x="155" y="40" width="110" height="50" rx="6" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="210" y="70">导语</text><rect x="280" y="40" width="110" height="50" rx="6" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="335" y="70">主体</text><rect x="405" y="40" width="110" height="50" rx="6" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="460" y="70">背景</text><rect x="530" y="40" width="120" height="50" rx="6" fill="#e05d44" stroke="#a83c2c" stroke-width="2"/><text x="590" y="70" fill="#fff">结尾</text></g><text x="340" y="125" font-size="13" fill="#5a6b3e" text-anchor="middle">新闻「倒金字塔」：标题→导语（最重要）→主体（展开）→背景→结尾</text><g font-size="12" fill="#8a6d3b" text-anchor="middle"><text x="85" y="170">「别了」主谓倒装</text><text x="210" y="170">一句话点明事件</text><text x="335" y="170">回归场景叙述</text><text x="460" y="170">历史比照</text><text x="590" y="170">殖民落幕</text></g></svg>', caption: '新闻由标题、导语、主体、背景、结尾五部分构成，本文是典范的新闻特写。' },

        { type: 'heading', text: '二、内容把握' },
        { type: 'keypoint', label: '事件', text: '本文报道<strong>1997年7月1日香港政权交接</strong>：末代港督彭定康乘「不列颠尼亚」号游轮离港，英国国旗降下，中国国旗升起，<strong>香港结束155年英国殖民统治，回归祖国</strong>。' },
        { type: 'list', items: ['导语：以「别了，不列颠尼亚」起笔，宣告殖民时代落幕', '主体：按时间顺序描写降旗、告别、交接等场景', '背景：穿插香港被占与殖民统治的历史回顾', '结尾：以游轮消失海面收束，意味深长'] },
        { type: 'example', label: '分析示范', text: '文中多次将「现实场景」与「历史事实」交织（如写降旗时回溯156年前英国升起米字旗），这样写有何效果？<br><br><strong>解析</strong>：这是<strong>现实与历史交织</strong>的写法。在描写1997年降旗的「现实」时，回溯156年前英国强占香港的「历史」，形成<strong>今昔对比</strong>：昔日殖民者升旗，今朝主权收回。这种交织既增强了<strong>历史纵深感</strong>，又凸显了回归的<strong>沧桑与正义</strong>，让读者在对比中体会百年国耻得雪的振奋。' },
        { type: 'table', headers: ['写作特色', '具体表现', '效果'], rows: [['独特角度', '聚焦末代港督离港这一「告别」瞬间', '新颖别致，以小见大'], ['现实·历史交织', '降旗场景回溯殖民历史', '增强纵深，凸显正义'], ['细节描写', '「面色凝重」「缓缓降下」等', '真实可感，含蓄有力'], ['对比手法', '昔升旗／今降旗、殖民／回归', '突出沧桑与胜利']] },

        { type: 'keypoint', label: '情感基调', text: '本文表面<strong>冷静客观</strong>（新闻笔法），内里<strong>自豪昂扬</strong>。作者以「不列颠尼亚号消失在南海的夜幕中」收束，于含蓄中流露<strong>扬眉吐气</strong>之情，体现了「哀而不伤、喜而不露」的大家笔法。' },
        { type: 'paragraph', text: '香港回归是「一国两制」构想的成功实践，洗雪了自鸦片战争以来的民族屈辱。本文以一艘游轮的离去为意象，象征一个时代的终结，具有很高的历史与文学价值，是新闻写作的典范之作。' },
        { type: 'heading', text: '三、写作特色与思想内涵' },
        { type: 'keypoint', label: '思想内涵', text: '本文以客观冷静的新闻笔法，记录了<strong>香港回归这一民族盛事</strong>，字里行间洋溢着<strong>祖国强大的自豪感与百年屈辱得以洗雪的扬眉吐气</strong>，彰显「一国两制」下国家统一的历史必然。' },
        { type: 'warn', label: '重点·借代与双关', text: '「不列颠尼亚」一词有<strong>三层指涉</strong>：①<strong>借代</strong>英国（政府/殖民统治）；②实指末代港督离港所乘的<strong>「不列颠尼亚」号游轮</strong>；③<strong>双关</strong>象征英国殖民统治的终结。阅读时勿仅作字面理解，要体会其多重意蕴。' },
        { type: 'list', items: ['新闻五部分：标题、导语、主体、背景、结尾', '标题三妙：主谓倒装、借代、双关', '四大特色：独特角度、现实历史交织、细节描写、对比', '情感基调：自豪、振奋、含蓄庄重'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#eef6f0"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="180" height="70" rx="8" fill="#e05d44" stroke="#a83c2c" stroke-width="2"/><text x="130" y="78" fill="#fff">156年前</text><text x="130" y="100" fill="#ffe">英升旗·殖民始</text><rect x="250" y="50" width="180" height="70" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="340" y="78" fill="#fff">现实场景</text><text x="340" y="100" fill="#e8d5f7">降旗·交接</text><rect x="460" y="50" width="180" height="70" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="550" y="78" fill="#fff">1997回归</text><text x="550" y="100" fill="#dff0c8">主权收回</text></g><path d="M130 135 V170 H550" stroke="#8a6d3b" stroke-width="2" fill="none" stroke-dasharray="5 4"/><text x="340" y="195" font-size="13" fill="#4a2b8a" text-anchor="middle">现实与历史交织：昔升旗／今降旗，对比中凸显百年屈辱得雪</text></svg>', caption: '今昔对比（昔升旗／今降旗）是本文核心张力，凸显回归的正义与沧桑。' },

        { type: 'heading', text: '四、本课小结' },
        { type: 'tip', label: '拓展', text: '香港问题是<strong>殖民主义的历史遗留</strong>。1842年《南京条约》割香港岛，后经1860年、1898年两次拓展，共租借99年。1997年回归是「一国两制」伟大构想的成功实践。阅读本文可联系「弱国无外交」与「国强方能雪耻」的历史启示。' },
        { type: 'list', items: ['文体：新闻（特写），五部分结构齐全', '标题三妙：主谓倒装＋借代＋双关', '特色：独特角度、现实历史交织、细节、对比', '内涵：香港回归，民族自豪，百年屈辱得雪', '「不列颠尼亚」三层指涉：借代英国／实指游轮／双关殖民终结'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="160" fill="#f5f0ff"/><g font-size="13" text-anchor="middle"><circle cx="120" cy="80" r="44" fill="#e05d44" stroke="#a83c2c" stroke-width="2"/><text x="120" y="77">殖民始</text><text x="120" y="98">1842</text><circle cx="340" cy="80" r="44" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="340" y="77">沧桑史</text><text x="340" y="98">155年</text><circle cx="560" cy="80" r="44" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="560" y="77">回归日</text><text x="560" y="98">1997</text></g><g stroke="#7b4fe0" stroke-width="2" fill="none"><line x1="164" y1="80" x2="296" y2="80" marker-end="url(#u1l4a)"/><line x1="384" y1="80" x2="516" y2="80" marker-end="url(#u1l4a)"/></g><defs><marker id="u1l4a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7b4fe0"/></marker></defs><text x="340" y="150" font-size="13" fill="#4a2b8a" text-anchor="middle">从1842被占到1997回归：一个半世纪的民族屈辱终得洗雪</text></svg>', caption: '从1842年被占到1997年回归，香港走过一个半世纪的沧桑。' }
      ],
      exercises: [
        { type: 'choice', question: '下列对新闻基本结构的表述，正确的是？', options: ['只有标题和正文', '由标题、导语、主体、背景、结尾五部分组成', '由开头、发展、高潮、结局组成', '新闻没有固定结构'], answer: '由标题、导语、主体、背景、结尾五部分组成', explanation: '新闻的基本结构通常包括标题、导语、主体、背景、结尾五个部分，具有真实性、时效性、简洁性的特征。本文即是结构完整的新闻特写，导语以「别了，不列颠尼亚」起笔，主体按时间描写回归场景，穿插历史背景。' },
        { type: 'choice', question: '标题「别了，『不列颠尼亚』」运用的修辞手法，分析正确的是？', options: ['仅用了比喻', '运用主谓倒装、借代（指代英国）、双关三种手法', '只用了夸张', '没有修辞'], answer: '运用主谓倒装、借代（指代英国）、双关三种手法', explanation: '标题将常规「『不列颠尼亚』别了」主谓倒装，突出「别了」的宣告意味；以「不列颠尼亚」借代英国；并双关——既指末代港督所乘「不列颠尼亚」号游轮离港，也象征英国殖民统治终结。三种手法叠加，意味深长。' },
        { type: 'fill', question: '本文报道了______年7月1日______政权交接，末代港督乘「______」号游轮离港，标志英国______年殖民统治终结。', answer: '1997|香港|不列颠尼亚|155', explanation: '本文报道1997年7月1日香港政权交接：末代港督彭定康乘「不列颠尼亚」号游轮离港，英国国旗降下，中国国旗升起，香港结束自1842年起约155年的英国殖民统治，回归祖国，是「一国两制」的成功实践。' },
        { type: 'choice', question: '文中「现实场景」与「历史事实」交织的写法，作用是？', options: ['使文章杂乱无章', '增强历史纵深感，通过今昔对比凸显回归的正义与沧桑', '为了凑字数', '与主题无关'], answer: '增强历史纵深感，通过今昔对比凸显回归的正义与沧桑', explanation: '在描写1997年降旗的「现实」时回溯156年前英国强占香港的「历史」，形成今昔对比：昔日殖民者升旗，今朝主权收回。这种交织增强了历史纵深感，凸显回归的沧桑与正义，让读者体会百年国耻得雪的振奋，并非杂乱或无关。' },
        { type: 'choice', question: '「不列颠尼亚」在文中的多重意蕴，理解不正确的是？', options: ['借代英国（殖民统治）', '实指末代港督离港所乘游轮', '双关象征英国殖民统治终结', '只是指一种植物'], answer: '只是指一种植物', explanation: '「不列颠尼亚」在文中有三层指涉：借代英国、实指「不列颠尼亚」号游轮、双关象征殖民统治终结。它绝非指植物，属明显错误项。理解其多重意蕴是把握标题之妙的关键。' }
      ]
    },

    /* ==================== 第5课 县委书记的榜样——焦裕禄 ==================== */
    {
      id: 'xb1-u1-l5',
      name: '《县委书记的榜样——焦裕禄》',
      author: '穆青、冯健、周原',
      chapter: '第一单元 伟大的复兴（中国革命传统作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体知识：人物通讯' },
        { type: 'keypoint', label: '人物通讯', text: '人物通讯是<strong>通讯</strong>的一种，运用<strong>记叙、描写、抒情、议论</strong>等多种手法，<strong>具体、生动、形象地反映典型人物</strong>。本文是新华社记者穆青等采写的<strong>典型人物通讯</strong>，报道县委书记焦裕禄的感人事迹。' },
        { type: 'keypoint', label: '焦裕禄精神', text: '焦裕禄精神的核心是：<strong>亲民爱民、艰苦奋斗、科学求实、迎难而上、无私奉献</strong>。他在兰考任县委书记时，带病治理风沙、盐碱、内涝「三害」，直至生命最后一刻，是县委书记的榜样、共产党员的楷模。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#fbf3e3"/><g font-size="13" text-anchor="middle" fill="#5b4636"><rect x="20" y="45" width="115" height="55" rx="6" fill="#e05d44" stroke="#a83c2c" stroke-width="2"/><text x="77" y="72">亲民爱民</text><rect x="150" y="45" width="115" height="55" rx="6" fill="#4a7de0" stroke="#2f57a8" stroke-width="2"/><text x="207" y="72" fill="#fff">艰苦奋斗</text><rect x="280" y="45" width="115" height="55" rx="6" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="337" y="72" fill="#fff">科学求实</text><rect x="410" y="45" width="115" height="55" rx="6" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="467" y="72" fill="#fff">迎难而上</text><rect x="540" y="45" width="120" height="55" rx="6" fill="#e0862e" stroke="#b5651d" stroke-width="2"/><text x="600" y="72" fill="#fff">无私奉献</text></g><text x="340" y="140" font-size="13" fill="#5a6b3e" text-anchor="middle">焦裕禄精神「五维一体」：以亲民为根、奉献为魂</text><path d="M77 115 V150 H600" stroke="#8a6d3b" stroke-width="2" fill="none" stroke-dasharray="5 4"/><circle cx="340" cy="195" r="22" fill="#a83c2c"/><text x="340" y="200" font-size="13" fill="#fff" text-anchor="middle">榜样</text></svg>', caption: '焦裕禄精神由亲民爱民、艰苦奋斗、科学求实、迎难而上、无私奉献五维构成。' },

        { type: 'heading', text: '二、内容把握' },
        { type: 'list', items: ['受命：临危受命赴兰考，面对风沙、盐碱、内涝「三害」', '查灾：深入基层调查研究，摸清灾害底数（科学求实）', '抗灾：带病带领群众封沙、治水、改地（迎难而上）', '奉献：肝病剧痛仍坚持工作，生命献给兰考（无私奉献）', '缅怀：人民永远怀念「县委书记的榜样」'] },
        { type: 'keypoint', label: '典型细节', text: '文中多处<strong>细节描写</strong>动人至深：焦裕禄用<strong>藤椅顶住肝部</strong>坚持办公，藤椅被顶出大窟窿；他临终仍惦念「沙丘什么时候能治好」。这些细节以<strong>以小见大</strong>之法，将崇高精神化为可感画面。' },
        { type: 'example', label: '分析示范', text: '文中写焦裕禄「肝疼起来，就用钢笔帽顶着肝脾部位」的细节，有何表达效果？<br><br><strong>解析</strong>：这是<strong>典型细节描写</strong>。一个「顶」字，把剧痛之下仍强忍工作的状态写得<strong>真切可感</strong>；藤椅被顶出窟窿的细节更将抽象的「奉献」化为<strong>具象的画面</strong>。这种以小见大的手法，比直接议论「他很伟大」更有感染力，让读者从细节中自然体会到他<strong>迎难而上、无私奉献</strong>的精神。' },
        { type: 'table', headers: ['精神维度', '文中表现', '关键词'], rows: [['亲民爱民', '访贫问苦，与群众同甘共苦', '人民公仆'], ['艰苦奋斗', '吃苦在前，住陋室吃粗粮', '吃苦'], ['科学求实', '实地调研，摸清三害底数', '调研'], ['迎难而上', '带病抗灾，不向困难低头', '攻坚'], ['无私奉献', '生命献给兰考', '献身']] },

        { type: 'keypoint', label: '时代价值', text: '焦裕禄精神跨越时代而<strong>历久弥新</strong>：在脱贫攻坚、抗灾救灾、基层治理中，无数党员干部以他为榜样。它昭示——<strong>无论何时，公仆情怀与求实作风都是为政者的立身之本</strong>。' },
        { type: 'paragraph', text: '通讯以「榜样」二字立题，既是对一位县委书记的礼赞，也是对千千万万扎根基层、无私奉献的共产党人的写照。读来令人动容，正是典型人物通讯「以情动人、以事感人」的魅力所在。' },
        { type: 'heading', text: '三、写作技巧与思想内涵' },
        { type: 'keypoint', label: '写作技巧', text: '本文通过<strong>细节描写与情感表达传递人物精神</strong>：以典型事例（查三害、顶藤椅）立形象，以抒情议论（「他心里装着全体人民」）点精神，以群众反响（人民怀念）衬影响，<strong>叙、描、抒、议融合</strong>，塑造出真实可信、崇高可敬的榜样。' },
        { type: 'warn', label: '易混·通讯与消息', text: '人物通讯与<strong>消息（新闻）</strong>不同：消息<strong>简明扼要、重事实速报</strong>；通讯<strong>篇幅较长、重形象生动地刻画人物与场景</strong>，可含描写抒情。本文属通讯，故能细腻呈现焦裕禄的内心与细节，而非仅「何时何地发生何事」。' },
        { type: 'list', items: ['文体：人物通讯，叙描抒议融合', '精神：亲民爱民、艰苦奋斗、科学求实、迎难而上、无私奉献', '手法：典型细节以小见大、抒情议论点题', '主旨：树立县委书记榜样，弘扬公仆情怀'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#eef6f0"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="160" height="60" rx="8" fill="#e05d44" stroke="#a83c2c" stroke-width="2"/><text x="120" y="86" fill="#fff">受命兰考</text><rect x="240" y="50" width="160" height="60" rx="8" fill="#4a7de0" stroke="#2f57a8" stroke-width="2"/><text x="320" y="86" fill="#fff">查灾调研</text><rect x="440" y="50" width="200" height="60" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="540" y="86" fill="#fff">带病抗灾·奉献终生</text></g><path d="M120 130 V160 H540" stroke="#8a6d3b" stroke-width="2" fill="none" stroke-dasharray="5 4"/><text x="340" y="190" font-size="13" fill="#4a2b8a" text-anchor="middle">从「受命」到「奉献」：焦裕禄以一生践行县委书记的榜样</text></svg>', caption: '焦裕禄从受命兰考、查灾调研到带病抗灾奉献终生，一生践行使命。' },

        { type: 'heading', text: '四、本课小结' },
        { type: 'tip', label: '拓展', text: '习近平总书记多次强调要「<strong>焦裕禄精神</strong>」。今天学习本文，既要铭记一位县委书记的榜样，也要思考：<strong>公仆情怀、求实作风、奋斗精神</strong>在任何时代都是为政者的宝贵品质。焦裕禄「心里装着全体人民，唯独没有他自己」的情怀，具有永恒价值。' },
        { type: 'list', items: ['文体：人物通讯，叙描抒议融合', '事迹：赴兰考治三害，带病奉献终生', '精神：亲民爱民、艰苦奋斗、科学求实、迎难而上、无私奉献', '手法：典型细节以小见大、抒情议论点睛', '价值：县委书记的榜样，公仆情怀的丰碑'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="160" fill="#f5f0ff"/><g font-size="13" text-anchor="middle"><circle cx="120" cy="80" r="44" fill="#e05d44" stroke="#a83c2c" stroke-width="2"/><text x="120" y="77">亲民</text><text x="120" y="98">爱民</text><circle cx="300" cy="80" r="44" fill="#4a7de0" stroke="#2f57a8" stroke-width="2"/><text x="300" y="77">科学</text><text x="300" y="98">求实</text><circle cx="480" cy="80" r="44" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="480" y="77">迎难</text><text x="480" y="98">而上</text><circle cx="610" cy="80" r="44" fill="#e0862e" stroke="#b5651d" stroke-width="2"/><text x="610" y="77">无私</text><text x="610" y="98">奉献</text></g><text x="340" y="150" font-size="13" fill="#4a2b8a" text-anchor="middle">「五维精神」铸就县委书记的榜样，公仆情怀永放光芒</text></svg>', caption: '焦裕禄精神五维合一，是县委书记与共产党员的永恒榜样。' }
      ],
      exercises: [
        { type: 'choice', question: '下列对「人物通讯」特点的表述，正确的一项是？', options: ['只重事实速报，篇幅短小', '运用记叙、描写、抒情、议论等手法生动反映典型人物', '与消息完全相同', '不能描写细节'], answer: '运用记叙、描写、抒情、议论等手法生动反映典型人物', explanation: '人物通讯是通讯的一种，综合运用记叙、描写、抒情、议论等多种手法，具体、生动、形象地反映典型人物。它比消息篇幅长、更重形象刻画，可通过细节与抒情传递精神，本文即典型的人物通讯。' },
        { type: 'choice', question: '「焦裕禄精神」的核心内涵不包括下列哪一项？', options: ['亲民爱民、艰苦奋斗', '科学求实、迎难而上', '无私奉献', '贪图享乐、明哲保身'], answer: '贪图享乐、明哲保身', explanation: '焦裕禄精神的核心是亲民爱民、艰苦奋斗、科学求实、迎难而上、无私奉献。他带病治「三害」、生命献给兰考，是奉献的楷模。「贪图享乐、明哲保身」与其精神完全相反，属错误项。' },
        { type: 'fill', question: '焦裕禄在兰考带领群众治理风沙、______、______「三害」，用______顶住肝部坚持办公的细节感人至深。', answer: '盐碱|内涝|藤椅', explanation: '兰考面临风沙、盐碱、内涝「三害」，焦裕禄深入调研、带病带领群众封沙治水改地。文中写他肝疼时用藤椅顶住肝部坚持工作，藤椅被顶出大窟窿，这一典型细节以小见大，生动彰显其迎难而上、无私奉献的精神。' },
        { type: 'choice', question: '文中「用藤椅顶住肝部办公」的细节描写，作用是？', options: ['为了搞笑', '以小见大，将抽象奉献化为可感画面，增强感染力', '说明他不爱惜家具', '与主题无关'], answer: '以小见大，将抽象奉献化为可感画面，增强感染力', explanation: '这是典型细节描写。一个「顶」字把剧痛下仍强忍工作的状态写得真切可感，藤椅顶出窟窿更将抽象的「奉献」化为具象画面。这种以小见大的手法比直接议论更有感染力，让读者自然体会到他迎难而上、无私奉献的精神。' },
        { type: 'choice', question: '人物通讯与消息（新闻）的主要区别是？', options: ['二者没区别', '消息简明速报重事实，通讯篇幅较长重形象刻画可含描写抒情', '通讯比消息更短', '消息可以虚构'], answer: '消息简明速报重事实，通讯篇幅较长重形象刻画可含描写抒情', explanation: '消息简明扼要、重事实速报；通讯篇幅较长、重形象生动地刻画人物与场景，可含描写与抒情。本文属人物通讯，故能细腻呈现焦裕禄的内心与细节，而非仅交代「何时何地发生何事」。通讯同样要求真实，不可虚构。' }
      ]
    },

    /* ==================== 第6课 在民族复兴的历史丰碑上——2020中国抗疫记 ==================== */
    {
      id: 'xb1-u1-l6',
      name: '《在民族复兴的历史丰碑上——2020中国抗疫记》',
      author: '（集体采写）',
      chapter: '第一单元 伟大的复兴（中国革命传统作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体知识：事件通讯' },
        { type: 'keypoint', label: '事件通讯', text: '本文是<strong>通讯</strong>中的<strong>事件通讯</strong>，以2020年新冠肺炎疫情防控这一重大事件为报道对象，<strong>全景式、多角度</strong>地记录中国人民众志成城抗击疫情的斗争，并从中提炼<strong>抗疫精神</strong>与时代启示。' },
        { type: 'keypoint', label: '抗疫精神', text: '抗疫精神的内涵是：<strong>自强不息、百折不挠的坚强意志，万众一心、众志成城的团结精神，顾全大局、甘于奉献的担当意识，一方有难、八方支援的仁爱之心，命运与共、天下一家的社会理想</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf3e3"/><g font-size="12" text-anchor="middle" fill="#5b4636"><rect x="15" y="45" width="120" height="52" rx="6" fill="#e05d44" stroke="#a83c2c" stroke-width="2"/><text x="75" y="72">自强不息</text><rect x="150" y="45" width="120" height="52" rx="6" fill="#4a7de0" stroke="#2f57a8" stroke-width="2"/><text x="210" y="72" fill="#fff">万众一心</text><rect x="285" y="45" width="120" height="52" rx="6" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="345" y="72" fill="#fff">顾全大局</text><rect x="420" y="45" width="120" height="52" rx="6" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="480" y="72" fill="#fff">一方有难</text><rect x="555" y="45" width="115" height="52" rx="6" fill="#e0862e" stroke="#b5651d" stroke-width="2"/><text x="612" y="72" fill="#fff">命运与共</text></g><text x="340" y="140" font-size="13" fill="#5a6b3e" text-anchor="middle">抗疫精神「五柱擎天」：意志·团结·担当·仁爱·理想</text><path d="M75 110 V150 H612" stroke="#8a6d3b" stroke-width="2" fill="none" stroke-dasharray="5 4"/><text x="343" y="180" font-size="12" fill="#8a6d3b" text-anchor="middle">五重精神汇聚成民族危难时刻的精神丰碑</text><text x="343" y="215" font-size="12" fill="#8a6d3b" text-anchor="middle">阅读连接：参考「钟南山」「逆行者」「武汉封城」等真实素材理解</text></svg>', caption: '抗疫精神由自强不息、万众一心、顾全大局、一方有难、命运与共五重内涵构成。' },

        { type: 'heading', text: '二、内容把握' },
        { type: 'list', items: ['疫情突袭：2020年新冠疫情暴发，人民生命面临威胁', '举国应对：党中央坚强领导，全民动员联防联控', '逆行出征：医护人员、志愿者等「逆行者」冲锋在前', '八方支援：对口驰援、物资汇聚，彰显仁爱担当', '精神升华：从抗疫斗争中提炼民族精神与时代启示'] },
        { type: 'keypoint', label: '写作特点', text: '本文是<strong>全景式事件通讯</strong>：既写<strong>决策层面的举国体制</strong>，也写<strong>个体的逆行身影</strong>；既叙<strong>事实经过</strong>，也议<strong>精神价值</strong>。这种「大视野＋小切面」的写法，使宏大的抗疫斗争既有高度又有温度。' },
        { type: 'example', label: '分析示范', text: '文章将「武汉封城」这一决策放在「人民至上、生命至上」的立场下评述，体现了怎样的写作取向？<br><br><strong>解析</strong>：这体现了<strong>以人民为中心</strong>的价值立场与<strong>叙议结合</strong>的写法。作者没有孤立地写「封城」的代价，而是将其置于「保护人民生命」的根本目的之下评述，凸显决策背后的<strong>担当意识与仁爱之心</strong>。这种将「事件」上升为「精神」的写法，正是事件通讯提炼主旨的典型手法。' },
        { type: 'table', headers: ['精神维度', '抗疫中的体现', '关键词'], rows: [['坚强意志', '百折不挠、连续作战', '自强不息'], ['团结精神', '万众一心、联防联控', '众志成城'], ['担当意识', '顾全大局、牺牲小我', '甘于奉献'], ['仁爱之心', '一方有难、八方支援', '守望相助'], ['社会理想', '命运与共、天下一家', '人类命运共同体']] },

        { type: 'keypoint', label: '时代启示', text: '抗疫斗争昭示：<strong>中国共产党具有无比坚强的领导力</strong>，中国人民具有<strong>不屈不挠的意志</strong>。将这场斗争立为「复兴丰碑」，意在激励后人在新征程上继续弘扬伟大精神、夺取新的胜利。' },
        { type: 'paragraph', text: '从「伟大的复兴」单元整体看，本课与前面的革命传统作品一脉相承：从站起来的宣告、长征的坚韧、战地的仁爱，到抗疫的众志成城，<strong>革命精神在新时代迸发出新的光芒</strong>，共同铸就民族复兴的精神谱系。' },
        { type: 'heading', text: '三、思想内涵与写作任务' },
        { type: 'keypoint', label: '思想内涵', text: '本文将2020年抗疫斗争立为「民族复兴历史丰碑」上的一页，意在表明：<strong>伟大斗争锤炼伟大精神</strong>，中国人民在疫情中迸发的<strong>抗疫精神</strong>，是民族精神的时代表达，也为民族复兴注入精神动力。' },
        { type: 'warn', label: '重点·通讯的「材料运用」', text: '本单元<strong>写作任务为「材料的积累与运用」</strong>。写通讯（或议论文）时，<strong>材料要真实、典型、有代表性</strong>，并围绕中心<strong>合理剪裁、有机组织</strong>。本文正是范例：大量真实素材（逆行者、援鄂医疗队、社区防控）被有序编排，服务于「抗疫精神」这一主旨，而非堆砌罗列。' },
        { type: 'list', items: ['文体：事件通讯，全景式、多角度', '精神：抗疫精神五重内涵', '写法：大视野＋小切面，叙议结合', '写作任务：材料的积累与运用（真实·典型·有机）'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#eef6f0"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="160" height="60" rx="8" fill="#e05d44" stroke="#a83c2c" stroke-width="2"/><text x="120" y="86" fill="#fff">疫情突袭</text><rect x="240" y="50" width="160" height="60" rx="8" fill="#4a7de0" stroke="#2f57a8" stroke-width="2"/><text x="320" y="86" fill="#fff">举国应对</text><rect x="440" y="50" width="200" height="60" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="540" y="86" fill="#fff">逆行·支援·精神丰碑</text></g><path d="M120 130 V160 H540" stroke="#8a6d3b" stroke-width="2" fill="none" stroke-dasharray="5 4"/><text x="340" y="190" font-size="13" fill="#4a2b8a" text-anchor="middle">从「突袭」到「丰碑」：抗疫斗争锤炼出民族复兴的精神动力</text></svg>', caption: '抗疫斗争从疫情突袭走向精神丰碑，锤炼出民族复兴的精神动力。' },

        { type: 'heading', text: '四、本课小结' },
        { type: 'tip', label: '拓展', text: '「命运与共、天下一家」指向<strong>人类命运共同体</strong>理念——中国抗疫既保护本国人民，也向各国伸出援手。这一精神与单元「伟大的复兴」主题相呼应：民族复兴不是孤立的，而是在<strong>对人类共同命运的担当中</strong>彰显大国情怀。' },
        { type: 'list', items: ['文体：事件通讯，全景式记录抗疫斗争', '精神：抗疫精神五重内涵（意志·团结·担当·仁爱·理想）', '写法：大视野＋小切面，叙议结合提炼主旨', '写作：材料的积累与运用——真实、典型、有机组织', '立意：伟大斗争锤炼伟大精神，立为复兴丰碑'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="160" fill="#f5f0ff"/><g font-size="13" text-anchor="middle"><circle cx="130" cy="80" r="42" fill="#e05d44" stroke="#a83c2c" stroke-width="2"/><text x="130" y="78">坚强意志</text><text x="130" y="98">自强不息</text><circle cx="340" cy="80" r="42" fill="#4a7de0" stroke="#2f57a8" stroke-width="2"/><text x="340" y="78">团结仁爱</text><text x="340" y="98">众志成城</text><circle cx="550" cy="80" r="42" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="550" y="78">命运与共</text><text x="550" y="98">天下一家</text></g><text x="340" y="150" font-size="13" fill="#4a2b8a" text-anchor="middle">抗疫精神三重辉映，立为民族复兴历史丰碑</text></svg>', caption: '抗疫精神的三重核心辉映，成为民族复兴的精神丰碑。' }
      ],
      exercises: [
        { type: 'choice', question: '下列对本文文体的判断，正确的是？', options: ['这是一篇小说', '这是事件通讯，全景式记录抗疫斗争并提炼精神', '这是一则简短消息', '这是一首诗歌'], answer: '这是事件通讯，全景式记录抗疫斗争并提炼精神', explanation: '本文是通讯中的事件通讯，以2020年新冠肺炎疫情防控这一重大事件为对象，全景式、多角度记录中国人民众志成城的抗疫斗争，并从中提炼抗疫精神与时代启示，区别于虚构小说与简短消息。' },
        { type: 'choice', question: '「抗疫精神」的内涵不包括？', options: ['自强不息、百折不挠的坚强意志', '万众一心、众志成城的团结精神', '顾全大局、甘于奉献的担当意识', '自私自利、各行其是'], answer: '自私自利、各行其是', explanation: '抗疫精神包括自强不息百折不挠的坚强意志、万众一心众志成城的团结精神、顾全大局甘于奉献的担当意识、一方有难八方支援的仁爱之心、命运与共天下一家的社会理想。「自私自利、各行其是」与其完全相反，属错误项。' },
        { type: 'fill', question: '本单元写作任务是「______的积累与运用」，要求材料______、典型、有代表性，并围绕中心合理剪裁、有机组织。', answer: '材料|真实', explanation: '本单元写作任务为「材料的积累与运用」。写通讯或议论文时，材料必须真实、典型、有代表性，并围绕中心主旨合理剪裁、有机组织，而非堆砌罗列。本文正是范例：大量真实素材被有序编排，服务于「抗疫精神」主旨。' },
        { type: 'choice', question: '本文「大视野＋小切面」的写法，理解正确的是？', options: ['只写宏观决策，不写个体', '既写举国体制的宏观决策，也写逆行者等个体切面', '只写个人故事', '毫无重点地罗列'], answer: '既写举国体制的宏观决策，也写逆行者等个体切面', explanation: '本文作为全景式事件通讯，既写决策层面的举国体制（大视野），也写医护人员、志愿者等「逆行者」的个体身影（小切面），使宏大的抗疫斗争既有高度又有温度。这种写法避免了只写宏观或只写个人的偏颇。' },
        { type: 'choice', question: '「命运与共、天下一家」在本文中指向的理念是？', options: ['孤立主义', '人类命运共同体', '霸权主义', '闭关锁国'], answer: '人类命运共同体', explanation: '「命运与共、天下一家」指向人类命运共同体理念——中国抗疫既保护本国人民，也向各国伸出援手。这一精神表明民族复兴不是孤立的，而是在对人类共同命运的担当中彰显大国情怀，与单元「伟大的复兴」主题相呼应。' }
      ]
    }

  );
})();
