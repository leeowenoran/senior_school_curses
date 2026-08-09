(function () {
  var v = gzGetVolume('chinese', 'zt3');
  if (!v) return;
  v.points.push(

    /* ===================== 考点五 · 正确使用标点符号 ===================== */

    { id: 'zt3-u3-l1',    cover: 'assets/cover/chinese/zt3-u3-l1.svg',
    name: '语言文字运用（五）：正确使用标点符号', author: '高考复习', chapter: '考点五 · 正确使用标点符号', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、标点符号体系总览' },
        { type: 'paragraph', text: '标点符号是书面语言的有机组成部分，能帮助读者分清句子结构、辨明语气、准确理解语意。高考语言文字运用题对标点的考查，既有传统的正误辨析，也有新高考在语段中考查某一标点的表达效果。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">标点符号两大体系</text><rect x="40" y="50" width="290" height="170" rx="8" fill="#1f5f8b"/><text x="185" y="78" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">点号</text><text x="185" y="100" text-anchor="middle" font-size="11" fill="#fff">表示停顿和语气</text><rect x="60" y="115" width="250" height="40" rx="6" fill="#4a8fa8"/><text x="185" y="140" text-anchor="middle" font-size="12" fill="#fff">句末点号：句号 问号 叹号</text><rect x="60" y="165" width="250" height="40" rx="6" fill="#7aa05a"/><text x="185" y="190" text-anchor="middle" font-size="12" fill="#fff">句内点号：逗号 顿号 分号 冒号</text><rect x="350" y="50" width="290" height="170" rx="8" fill="#c07f4e"/><text x="495" y="78" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">标号</text><text x="495" y="100" text-anchor="middle" font-size="11" fill="#fff">标明词语性质与作用</text><rect x="370" y="115" width="250" height="40" rx="6" fill="#7a6fae"/><text x="495" y="140" text-anchor="middle" font-size="12" fill="#fff">引号 括号 破折号 省略号</text><rect x="370" y="165" width="250" height="40" rx="6" fill="#b04a4a"/><text x="495" y="190" text-anchor="middle" font-size="12" fill="#fff">书名号 着重号 连接号 间隔号</text></svg>', caption: '标点分点号与标号两大类：点号表情态停顿，标号标明词语性质与作用。' },
        { type: 'list', items: ['句末点号：句号（。）、问号（？）、叹号（！），表示一句话结束的语气', '句内点号：逗号（，）表示句子内部的一般停顿', '顿号（、）表示并列词语之间的停顿', '分号（；）表示复句内部并列分句之间的停顿', '冒号（：）表示提示下文或总结上文'] },
        { type: 'list', items: ['引号（""）：标明引用、强调、反语等', '括号（（））：标明注释或补充说明', '破折号（——）：标明解释说明、话题转换、声音延长', '省略号（……）：标明内容省略或说话断断续续', '书名号（《》）：标明书籍、报刊、文章等名称'] },
        { type: 'heading', text: '二、问号的高频易错点' },
        { type: 'keypoint', label: '问号使用三规则', text: '问号使用记住三条：<strong>选择问句</strong>只在全句末尾用一个问号，各项之间用逗号；<strong>非疑问句</strong>虽有疑问词（谁、什么、怎么）但全句不是疑问语气，句末不用问号；<strong>倒装问句</strong>全句末尾用问号，主谓倒装的部分之后用逗号。' },
        { type: 'example', label: '问号示例', text: '选择问："去图书馆，还是去操场？"（只在句末用问号）<br>非疑问："我不知道他来不来。"（"来不来"作宾语，全句陈述，不用问号）<br>倒装问："怎么了，你？"（全句末尾用问号，谓语"你"后用逗号）' },
        { type: 'warn', label: '易错提醒', text: '最易混淆的是<strong>连续问与选择问</strong>：连续问是每个分句都独立发问，各用一个问号，如"是谁？为什么？怎么办？"；选择问是几个选项择一，全句只用一个问号，选项间用逗号。凡见"是……还是……""或者……或者……"句式，基本都是选择问，中间绝不加问号。' },
        { type: 'heading', text: '三、顿号与分号' },
        { type: 'list', items: ['并列词语之间用顿号，如"柴、米、油、盐"', '约数之间不用顿号，如"三四十人"不能写作"三、四十人"', '并列词语带语气词"啊、呀、啦"时改用逗号', '集合词语内部不用顿号，如"男女老少""工农兵"', '并列各项最后两项之间用"和、与"等连词时，连词前一般不用顿号'] },
        { type: 'example', label: '顿号示例', text: '正确："桌、椅、床等家具都摆好了。"（并列词语用顿号）<br>错误："三、四十人参加。"（"三四十"是约数，顿号多余）<br>错误："今天天气真好啊、我们一起去吧。"（带语气词"啊"，应改逗号）' },
        { type: 'keypoint', label: '分号使用规则', text: '<strong>分号用于复句内部并列分句之间</strong>：当分句内部已经用了逗号，分句之间就用分号，以分清层次；若分句内部没有逗号，分句间直接用逗号即可，不必升级为分号。即"逗号管句内，分号管并列分句"。' },
        { type: 'table', headers: ['使用情形', '标点', '示例'], rows: [['并列词语之间', '顿号', '"桌、椅、床"'], ['约数之间', '不用顿号', '"三四十人"不能写"三、四十人"'], ['带语气词"啊、啦"', '逗号', '"水果呀，蔬菜呀，都买了"'], ['分句内已有逗号', '分号', '"门外有人；屋里却没人"']] },
        { type: 'heading', text: '四、冒号的管辖范围' },
        { type: 'paragraph', text: '冒号的基本用法是提示下文和总结上文。"某某说"后接引语时，冒号的使用随"说"的位置变化；冒号还有明确的管辖范围，一般管到一句话的末尾。' },
        { type: 'keypoint', label: '冒号三注意', text: '<strong>第一</strong>，"某某说"在引语前用冒号，在引语后用一个句号，在引语中间用逗号；<strong>第二</strong>，冒号的管辖范围一般到句末，管不到句末就不要用冒号；<strong>第三</strong>，同一句话内不套用两个冒号，避免"冒号中包含冒号"的混乱。' },
        { type: 'example', label: '冒号示例', text: '提示下文："他十分坚定地说：‘我们一定能赢。’"<br>总结上文："有功则赏，有过则罚：这就是我们的原则。"<br>中间插入："‘快跑，’他喊道，‘洪水来了！’"（"喊道"后用逗号，不用冒号）' },
        { type: 'heading', text: '五、引号、破折号、省略号、书名号' },
        { type: 'example', label: '引号与点号位置', text: '引文独立成句，点号在引号内："老师说：‘明天考试。’"（句号在引号内）<br>引文作句子成分，点号在引号外：他说的"明天考试"让我紧张。（全句句号在引号外）<br>关键看引文能否独立成句：能，则点号在内；不能，则点号在外。' },
        { type: 'warn', label: '易错提醒', text: '<strong>引号易错</strong>：转述别人的话（间接引用）不用引号；引文末尾的点号位置要看引文是否独立成句。<strong>破折号易错</strong>：破折号与"即""就是"等解释性词语不能并用。<strong>省略号易错</strong>：省略号与"等""等等"不能并用，二者语义重复。' },
        { type: 'list', items: ['破折号表解释说明，如"这就是中国——文明古国"', '破折号表话题突然转换，如"今天好热——你作业写完了吗？"', '破折号表声音延长或话语中断，如"呜——火车开了"', '省略号表内容省略，如"春花、秋月、冬雪……"', '省略号表说话断断续续，如"我……我错了"', '省略号与"等""等等"不能并用'] },
        { type: 'table', headers: ['名称类型', '是否用书名号', '示例'], rows: [['书籍、报刊', '用', '《红楼梦》《人民日报》'], ['文章、篇名', '用', '《背影》《荷塘月色》'], ['电视节目、栏目', '不用（用引号）', '"焦点访谈"'], ['活动、主题', '不用（用引号）', '"读书月"活动'], ['课程、机构名', '不用', '语文课、学生会']] },
        { type: 'heading', text: '六、考查新趋势：语段中的表达效果' },
        { type: 'paragraph', text: '新高考常在语段阅读中要求分析某一标点的"表达效果"，这类题不是考正误，而是考"为什么这里用这个标点更好"，需要结合语境说清其在语气、情感、逻辑层次上的作用。' },
        { type: 'keypoint', label: '表达效果分析角度', text: '分析标点表达效果从三个角度入手：<strong>语法功能</strong>（它本来的停顿或语气作用）、<strong>情感语气</strong>（强调、迟疑、惊喜、反讽等）、<strong>逻辑层次</strong>（突出并列、转折、解释关系）。例如破折号可表示突然停顿与强调，引号可表反语或特殊含义，分号可显并列层次。' },
        { type: 'tip', label: '学习提示', text: '标点复习要建立"正误清单加效果语料"两座台账：正误清单记牢七大易错点（问号、顿号、分号、冒号、引号、破折号、省略号）的规则；效果语料则积累高考语段中破折号强调、引号反语、分号分层等典型例句，应对新趋势题。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">引号与点号的位置关系</text><rect x="40" y="50" width="290" height="150" rx="8" fill="#1f5f8b"/><text x="185" y="78" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">引文独立成句</text><text x="185" y="110" text-anchor="middle" font-size="12" fill="#fff">点号放在引号之内</text><text x="185" y="140" text-anchor="middle" font-size="12" fill="#fff">例：他说："今天不下雨。"</text><text x="185" y="170" text-anchor="middle" font-size="12" fill="#fff">句号在引号里面</text><rect x="350" y="50" width="290" height="150" rx="8" fill="#4a8fa8"/><text x="495" y="78" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">引文作句子成分</text><text x="495" y="110" text-anchor="middle" font-size="12" fill="#fff">点号放在引号之外</text><text x="495" y="140" text-anchor="middle" font-size="12" fill="#fff">例：他说的"今天不下雨"是错的。</text><text x="495" y="170" text-anchor="middle" font-size="12" fill="#fff">句号在引号外面</text><text x="340" y="225" text-anchor="middle" font-size="13" fill="#555">判断标准：引文能否独立成句，是则点号在内，否在成分外</text></svg>', caption: '引号内点号位置取决于引文是否独立成句：独立成句点号在内，作成分点号在外。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">点号停顿层级（由短到长）</text><rect x="40" y="60" width="140" height="46" rx="6" fill="#7aa05a"/><text x="110" y="88" text-anchor="middle" font-size="13" fill="#fff">顿号、</text><rect x="195" y="60" width="140" height="46" rx="6" fill="#4a8fa8"/><text x="265" y="88" text-anchor="middle" font-size="13" fill="#fff">逗号，</text><rect x="350" y="60" width="140" height="46" rx="6" fill="#7a6fae"/><text x="420" y="88" text-anchor="middle" font-size="13" fill="#fff">分号；</text><rect x="505" y="60" width="140" height="46" rx="6" fill="#1f5f8b"/><text x="575" y="88" text-anchor="middle" font-size="13" fill="#fff">句号。</text><path d="M180 83 L193 83" stroke="#1f5f8b" stroke-width="3"/><path d="M335 83 L348 83" stroke="#1f5f8b" stroke-width="3"/><path d="M490 83 L503 83" stroke="#1f5f8b" stroke-width="3"/><text x="340" y="150" text-anchor="middle" font-size="13" fill="#555">并列词语用顿号，句内停顿用逗号</text><text x="340" y="175" text-anchor="middle" font-size="13" fill="#555">分句内已有逗号用分号，一句话结束用句号</text></svg>', caption: '点号按停顿长短呈层级：顿号小于逗号小于分号小于句号，使用时要逐级对应。' },
        { type: 'reading', text: '延伸思考：新高考越来越爱问"作者为什么在这里用破折号而不用逗号"。请找一段你喜欢的文学作品，挑出一个标点，试着从语气、情感、逻辑三个层面写一段"表达效果"分析，体会标点作为"无声的语言"如何参与叙事。' }
      ],
      exercises: [
        { type: 'choice', question: '下列各句中，顿号使用正确的一项是？', options: ['这次会议有三、四十人参加。', '他买了苹果、香蕉、和梨。', '房间里摆放着桌、椅、床等家具。', '今天天气真好啊、我们一起去玩吧。'], answer: '房间里摆放着桌、椅、床等家具。', explanation: '顿号用于并列词语之间。A项"三四十人"是约数，约数之间不用顿号；B项"苹果、香蕉、和梨"中"和"前的顿号多余，并列最后两项用"和"连接时顿号应去掉；D项"真好啊"后带语气词"啊"，停顿应用逗号而非顿号。C项"桌、椅、床"为并列词语，顿号使用正确，故选此项。' },
        { type: 'fill', question: '选择问句中，中间的停顿用逗号，全句只在__用一个问号。', answer: '句末', explanation: '选择问句无论包含几个选择项，全句只在句末用一个问号，各项之间用逗号隔开，不能在每个分句后都用问号。如"是去图书馆，还是去操场？"中间用逗号、句末用问号，故填"句末"。' },
        { type: 'choice', question: '引文作为句子的一个成分（如宾语）时，句末点号应放在？', options: ['引号之内', '引号之外', '引号之内或之外均可', '不用任何点号'], answer: '引号之外', explanation: '当引文不独立成句、只是作为句子的一个组成成分（如宾语、定语）时，句末点号应放在引号外面，因为全句的语气由整个句子决定。只有当引文独立成句时，点号才放在引号之内。故选"引号之外"。' },
        { type: 'fill', question: '提示语"某某说"放在引语中间时，其后用__，不用冒号，因为前后引语同属一句话。', answer: '逗号', explanation: '"某某说"所在位置决定标点：在引语前用冒号（"XX说："），在引语后用一个句号（"……。"XX说。），在引语中间用逗号（"……，"XX说，"……"）。因为前后引语同属一句话，中间只能用逗号连接，故填"逗号"。' },
        { type: 'choice', question: '省略号不能与下列哪组词语并用，否则语义重复？', options: ['等等', '以及', '并且', '还有'], answer: '等等', explanation: '省略号本身就表示内容的省略和列举的未尽，与"等""等等"语义重复，二者不能并用，如不能说"苹果、香蕉……等"。而"以及""并且""还有"是并列或递进连词，与省略号功能不同，可以配合使用。故选"等等"。' }
      ]
    },

    /* ===================== 考点六 · 正确使用修辞手法 ===================== */

    { id: 'zt3-u3-l2',    cover: 'assets/cover/chinese/zt3-u3-l2.svg',
    name: '语言文字运用（六）：正确使用常见的修辞手法', author: '高考复习', chapter: '考点六 · 正确使用修辞手法', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、考纲九种修辞手法总览' },
        { type: 'paragraph', text: '《考试大纲》规定考生应掌握九种常见修辞手法：比喻、比拟、借代、夸张、对偶、排比、反复、设问、反问。高考既考查辨识修辞类型，也常考查分析其表达效果，后者为主观题的重头戏。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">考纲九种修辞手法</text><rect x="35" y="50" width="190" height="46" rx="6" fill="#1f5f8b"/><text x="130" y="78" text-anchor="middle" font-size="13" fill="#fff">比喻</text><rect x="245" y="50" width="190" height="46" rx="6" fill="#4a8fa8"/><text x="340" y="78" text-anchor="middle" font-size="13" fill="#fff">比拟</text><rect x="455" y="50" width="190" height="46" rx="6" fill="#c07f4e"/><text x="550" y="78" text-anchor="middle" font-size="13" fill="#fff">借代</text><rect x="35" y="112" width="190" height="46" rx="6" fill="#7aa05a"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="#fff">夸张</text><rect x="245" y="112" width="190" height="46" rx="6" fill="#7a6fae"/><text x="340" y="140" text-anchor="middle" font-size="13" fill="#fff">对偶</text><rect x="455" y="112" width="190" height="46" rx="6" fill="#b04a4a"/><text x="550" y="140" text-anchor="middle" font-size="13" fill="#fff">排比</text><rect x="35" y="174" width="190" height="46" rx="6" fill="#4a8fa8"/><text x="130" y="202" text-anchor="middle" font-size="13" fill="#fff">反复</text><rect x="245" y="174" width="190" height="46" rx="6" fill="#1f5f8b"/><text x="340" y="202" text-anchor="middle" font-size="13" fill="#fff">设问</text><rect x="455" y="174" width="190" height="46" rx="6" fill="#7aa05a"/><text x="550" y="202" text-anchor="middle" font-size="13" fill="#fff">反问</text></svg>', caption: '考纲九种修辞：比喻、比拟、借代、夸张、对偶、排比、反复、设问、反问，需会辨识也会析效果。' },
        { type: 'heading', text: '二、比喻与比拟' },
        { type: 'paragraph', text: '比喻是用跟甲事物有相似点的乙事物来描写甲事物，使表达生动形象；比拟是把物当人写（拟人）或把人当物写（拟物），直接赋予对象人的或物的动作情态。' },
        { type: 'keypoint', label: '比喻构成要件', text: '比喻成立须具备三要素：<strong>本体</strong>（被比喻的事物）、<strong>喻体</strong>（作比的事物）、<strong>相似点</strong>（二者共有的特征）。三者缺一不可；若缺少喻体则是比拟而非比喻。' },
        { type: 'list', items: ['明喻：本体、喻体都出现，用"像、如、似"等比喻词，如"月光照得像水银"', '暗喻：用"是、成为、变成"等判断词连接，如"孩子是祖国的花朵"', '借喻：不出现本体和比喻词，直接用喻体代替本体，如"射出千万道金箭"（金箭喻阳光）'] },
        { type: 'example', label: '比喻示例', text: '明喻："春风像母亲的手抚摸着你。"（本体春风，喻体母亲的手，相似点温柔）<br>借喻："我们应砸碎精神枷锁。""枷锁"直接代指束缚，不出现本体"束缚"和比喻词。<br>比喻与比拟区别：比喻有喻体作比，比拟直接把物写成人（"春风抚摸着你"是拟人，无喻体）。' },
        { type: 'warn', label: '易错提醒', text: '最大的误区是把<strong>拟人当成比喻</strong>。比喻必须出现喻体（另一个事物）和相似点；拟人只是把物直接当人写，不出现喻体。如"鸟儿在歌唱"是拟人（无喻体），"鸟儿像歌手一样歌唱"才是比喻（喻体是歌手）。' },
        { type: 'heading', text: '三、借代与借喻' },
        { type: 'paragraph', text: '借代是不直接说出本体，而用与本体相关的事物来代替；借喻是比喻的一种（不出现本体和比喻词）。二者外形相似，都"以乙代甲"，但本质不同。' },
        { type: 'example', label: '借代示例', text: '"红领巾参加植树。""红领巾"代指少先队员（特征代本体）。<br>"他端起一江春水。""一江春水"代指满杯酒（以具体代抽象）。<br>"枪杆子里面出政权。""枪杆子"代指武装力量。' },
        { type: 'keypoint', label: '借代与借喻区别', text: '<strong>借代重在相关性</strong>：借体与本体的关系是"有关联"，可还原为"甲是乙"（红领巾是少先队员的特征）；<strong>借喻重在相似性</strong>：喻体与本体"相像"，可还原为"甲像乙"（枷锁像束缚）。能否用"是"还原是区分关键。' },
        { type: 'table', headers: ['借代类型', '说明', '示例'], rows: [['特征代本体', '用事物的显著特征代本体', '"红领巾"代少先队员'], ['部分代整体', '用部分代指全体', '"手脚"代指兵力人马'], ['具体代抽象', '用具体事物代抽象概念', '"笔墨"代指文章写作'], ['专名代泛称', '用专有名称代一类事物', '"雷锋"代指好人好事']] },
        { type: 'heading', text: '四、夸张、对偶、排比、反复' },
        { type: 'list', items: ['扩大夸张：把事物往大、多、高、强处放大，如"白发三千丈"', '缩小夸张：把事物往小、少、低、弱处缩小，如"芝麻大的小事"', '超前夸张：把后出现的事说成先出现，如"酒未沾唇人先醉"'] },
        { type: 'keypoint', label: '对偶的类型', text: '对偶要求<strong>上下两句字数相等、结构相同、意义对称</strong>。按内容分：<strong>正对</strong>（上下句意思相近互补，如"绿树村边合，青山郭外斜"）、<strong>反对</strong>（上下句意思相反相成，如"横眉冷对千夫指，俯首甘为孺子牛"）、<strong>串对</strong>（上下句意思承接递进，如"野火烧不尽，春风吹又生"）。' },
        { type: 'example', label: '排比与反复', text: '排比："山朗润起来了，水涨起来了，太阳的脸红起来了。"（三项结构相似，增强语势）<br>反复："沉默呵，沉默呵！不在沉默中爆发，就在沉默中灭亡。"（"沉默呵"间隔反复，强调愤慨）<br>排比与反复区别：排比要求三项以上且结构相似，反复是同一词语或句子重复，可只出现两次。' },
        { type: 'heading', text: '五、设问与反问' },
        { type: 'paragraph', text: '设问是先提出问题，然后自己回答，以引起读者注意和思考；反问是用疑问的形式表达确定的意思，只问不答，答案暗含在问句之中，语气比陈述更强烈。' },
        { type: 'warn', label: '易错提醒', text: '<strong>设问是自问自答</strong>，必有问有答，作用是提请注意、引发思考；<strong>反问是只问不答</strong>，答案在问中，作用是加强语气、增强说服力。识别要点：见"难道……吗""怎么能……"多为反问；见先问后答的清晰回答结构则为设问。' },
        { type: 'heading', text: '六、修辞表达效果分析与答题模板' },
        { type: 'paragraph', text: '高考修辞主观题常要求"指出使用的修辞手法，并分析其表达效果"。答题不是只写修辞名称，而要结合具体语句，说明其构成与在语境中的作用。' },
        { type: 'keypoint', label: '答题模板', text: '修辞表达效果题按三步作答：<strong>第一步指出手法</strong>（准确写出修辞名称）；<strong>第二步分析构成</strong>（点明本体喻体或特征，说明如何运用）；<strong>第三步说明效果</strong>（从生动形象、突出强调、增强语势、抒发情感等角度说清作用）。三者环环相扣，缺一不可。' },
        { type: 'table', headers: ['修辞手法', '常见表达效果'], rows: [['比喻、拟人', '生动形象，具体可感，引发联想'], ['夸张', '突出特征，强化情感，富有感染力'], ['排比', '增强语势，条理分明，节奏鲜明'], ['对偶', '句式整齐，音韵和谐，表意凝练'], ['反问、设问', '加强语气，引发思考，突出重点']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">借代 与 借喻 的区别</text><rect x="40" y="50" width="290" height="150" rx="8" fill="#1f5f8b"/><text x="185" y="78" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">借代</text><text x="185" y="108" text-anchor="middle" font-size="12" fill="#fff">重在相关性</text><text x="185" y="135" text-anchor="middle" font-size="12" fill="#fff">可还原为"甲是乙"</text><text x="185" y="165" text-anchor="middle" font-size="12" fill="#fff">如"红领巾"代少先队员</text><rect x="350" y="50" width="290" height="150" rx="8" fill="#c07f4e"/><text x="495" y="78" text-anchor="middle" font-size="13" font-weight="bold" fill="#fff">借喻</text><text x="495" y="108" text-anchor="middle" font-size="12" fill="#fff">重在相似性</text><text x="495" y="135" text-anchor="middle" font-size="12" fill="#fff">可还原为"甲像乙"</text><text x="495" y="165" text-anchor="middle" font-size="12" fill="#fff">如"祖国的花朵"喻儿童</text><text x="340" y="222" text-anchor="middle" font-size="12" fill="#555">外形都"代"，区别在相关性还是相似性</text></svg>', caption: '借代与借喻外形相似：借代重相关性可还原"是"，借喻重相似性可还原"像"。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">修辞表达效果答题三步</text><rect x="30" y="70" width="180" height="50" rx="8" fill="#7aa05a"/><text x="120" y="94" text-anchor="middle" font-size="13" fill="#fff">指出手法</text><text x="120" y="112" text-anchor="middle" font-size="11" fill="#fff">判定修辞名称</text><rect x="250" y="70" width="180" height="50" rx="8" fill="#4a8fa8"/><text x="340" y="94" text-anchor="middle" font-size="13" fill="#fff">分析构成</text><text x="340" y="112" text-anchor="middle" font-size="11" fill="#fff">本喻体／特征</text><rect x="470" y="70" width="180" height="50" rx="8" fill="#1f5f8b"/><text x="560" y="94" text-anchor="middle" font-size="13" fill="#fff">说明效果</text><text x="560" y="112" text-anchor="middle" font-size="11" fill="#fff">情感与表达作用</text><path d="M210 95 L248 95" stroke="#1f5f8b" stroke-width="3"/><path d="M430 95 L468 95" stroke="#1f5f8b" stroke-width="3"/><text x="340" y="165" text-anchor="middle" font-size="13" fill="#555">三步环环相扣：手法要准，构成要清，效果要实</text></svg>', caption: '修辞表达效果题三步：指出手法→分析构成→说明效果，结合原句把效果落地。' },
        { type: 'tip', label: '学习提示', text: '修辞效果答题要"因辞而定"：先锁定手法，再想该手法的"通用效果词"（如比喻→生动形象），最后务必结合原句内容把效果"落地"，不能只堆术语。平时可分类整理每种修辞的二至三个效果词，考场上直接调用。' },
        { type: 'reading', text: '延伸思考："谎言重复一千遍就成了真理"这句话，若从修辞角度看，它利用了夸张与反复的何种心理机制？而作为读者，我们又该如何用"辨识修辞"的清醒，去对抗这种被修辞操纵的"真实感"？' }
      ],
      exercises: [
        { type: 'choice', question: '下列句子"春天像小姑娘，花枝招展的"使用的修辞手法是？', options: ['比喻', '拟人', '借代', '夸张'], answer: '比喻', explanation: '该句出现比喻词"像"，把"春天"比作"小姑娘"，有本体（春天）、喻体（小姑娘）和相似点（花枝招展、美丽），符合比喻中明喻的特征。拟人是将物直接当人写，不出现比喻词和喻体；本句明显是打比方，故选"比喻"。' },
        { type: 'fill', question: '借代重在事物间的__关系（可还原为"甲是乙"），借喻重在相似性（可还原为"甲像乙"）。', answer: '相关性', explanation: '借代与借喻外形相似，但本质不同：借代是"代"，依靠本体与借体之间的相关性（如用"红领巾"代指少先队员），可以还原成"甲是乙"；借喻是"喻"，依靠相似性，可还原成"甲像乙"。故此处填"相关性"。' },
        { type: 'choice', question: '下列句子"难道这不是你的责任吗？"使用的修辞手法是？', options: ['设问', '反问', '疑问', '借代'], answer: '反问', explanation: '反问是用疑问形式表达确定的意思，只问不答，答案暗含在问句之中，本句"难道这不是……吗"实际表达"这是你的责任"，语气强烈。设问是自问自答，会先提出问题再自己给出答案，本句并无回答，故选"反问"。' },
        { type: 'fill', question: '__指三项或三项以上结构相似、意义相关、语气一致的短语或句子排列在一起，作用是增强语势。', answer: '排比', explanation: '排比由三个或以上结构相同或相似、语气一致、意思密切相关的短语或句子构成，作用是增强语势、条理分明。它与反复不同：反复是同一词语或句子重复出现，不要求三项以上。此处描述的正是排比的特征，故填"排比"。' },
        { type: 'choice', question: '句子"他饿得可以吃下一头大象"使用的夸张类型是？', options: ['扩大夸张', '缩小夸张', '超前夸张', '对比夸张'], answer: '扩大夸张', explanation: '夸张按表现方式分为扩大、缩小、超前三类。本句把食量极力放大到"吃下一头大象"，属于故意把事物性状向大、多、高、强方向放大的"扩大夸张"。缩小夸张是往小处说（如"针眼大的地方"），超前夸张是把后出现的事说成先出现（如"酒未沾唇人先醉"），故选"扩大夸张"。' }
      ]
    }

  );
})();
