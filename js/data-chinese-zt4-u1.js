(function () {
  var v = gzGetVolume('chinese', 'zt4');
  if (!v) return;
  v.points.push(

    /* ===================== 第一部分 · 审题与立意 ===================== */

    { id: 'zt4-u1-l1', name: '写作专题（一）：审题与立意——方向比速度更重要', author: '高考复习', chapter: '第一部分 · 审题与立意', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、新材料作文审题四法' },
        { type: 'paragraph', text: '新材料作文（含寓言、故事、名言、漫画等）不给标题、不限定文体，只提供材料，要求自主立意。审题的核心是先“读准材料”，再“定准方向”，跑题是最大失分项。' },
        { type: 'keypoint', label: '四步审题法', text: '<strong>抓关键词句法</strong>：圈出材料中反复出现的高频词、总结句、议论句与带情感倾向的词；<strong>因果分析法</strong>：由结果溯原因，找出材料核心事件的根本动因；<strong>辩证分析法</strong>：对看似对立的概念（如快与慢、强与弱）做辩证统一；<strong>归纳概括法</strong>：多则材料找交集，提炼共同主旨。' },
        { type: 'table', headers: ['审题方法', '操作要点与示例'], rows: [['抓关键词句法', '圈高频词、总结句；如材料反复出现“慢”，主旨往往与“慢的价值”相关'], ['因果分析法', '由果溯因：“为何失败？”——根本原因在于急功近利'], ['辩证分析法', '对“快/慢”“强/弱”等对立概念统一，避免片面'], ['归纳概括法', '多则材料找交集，提炼共同主旨，防止偏废其一']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">新材料作文审题四法</text><rect x="40" y="55" width="290" height="46" rx="8" fill="#1f5f8b"/><text x="185" y="83" text-anchor="middle" font-size="12" fill="#fff">抓关键词句法</text><rect x="350" y="55" width="290" height="46" rx="8" fill="#4a8fa8"/><text x="495" y="83" text-anchor="middle" font-size="12" fill="#fff">因果分析法</text><rect x="40" y="115" width="290" height="46" rx="8" fill="#c07f4e"/><text x="185" y="143" text-anchor="middle" font-size="12" fill="#fff">辩证分析法</text><rect x="350" y="115" width="290" height="46" rx="8" fill="#7aa05a"/><text x="495" y="143" text-anchor="middle" font-size="12" fill="#fff">归纳概括法</text><text x="340" y="195" text-anchor="middle" font-size="13" fill="#555">由表及里、由果溯因、辩证统一、多材取交集</text></svg>', caption: '新材料作文审题四法：抓关键词句、因果分析、辩证分析、归纳概括。' },
        { type: 'heading', text: '二、任务驱动型作文审题' },
        { type: 'paragraph', text: '任务驱动型作文在材料中明确给出“任务指令”，要求就特定对象、以特定身份、用特定文体谈论特定内容。审题的第一要务是把任务指令逐条拆解并落实。' },
        { type: 'list', items: ['明确任务指令四项：身份、对象、文体、内容范围，缺一不可', '就事论事：紧扣材料中的具体事件展开，切忌“借题发挥”离题万里', '针对性解决：提出切实可行的建议或看法，避免空谈理论', '文体意识：书信要有称呼落款，演讲稿要有开场白与呼告'] },
        { type: 'example', label: '就事论事示范', text: '材料写“某同学因沉迷手机成绩下滑，家长怒砸手机”。任务要求“以同学身份写一封信劝导”。<br>正确写法：<strong>紧扣该同学的具体情境</strong>（时间被短视频挤占、与父母冲突），提出可操作的建议（制定使用契约、用番茄钟管理时间）；若大谈“科技发展史”或“中外教育制度”，则犯了“借题发挥”、未落实“对象与内容范围”的任务。' },
        { type: 'warn', label: '易错提醒', text: '任务驱动型作文最常见的失分是<strong>“任务缺项”</strong>：漏了身份（该以晚辈口吻却用说教腔）、漏了对象（对全班讲而非对当事人讲）、漏了文体（写成议论文而非书信）。动笔前务必在草稿上列出四项任务并逐条打钩。' },
        { type: 'heading', text: '三、命题作文与半命题作文审题' },
        { type: 'paragraph', text: '命题作文给出完整标题，半命题留出空白由考生补全。二者审题重点在“题眼”——即标题中最关键、决定文章走向的那个词。' },
        { type: 'keypoint', label: '两大审题抓手', text: '<strong>语法分析抓题眼</strong>：偏正短语抓修饰语（如“难忘的__”题眼在“难忘”而非补什么）；动宾短语抓动词（如“见证”题眼在“证”）。<strong>虚实转化</strong>：把抽象概念（韧性、温度、底色）转化为具体可写的人、事、物、景，避免空对空。' },
        { type: 'list', items: ['“谈韧性”：虚→实，可写苏轼屡遭贬谪而豁达、华为十年备胎芯片', '“__的温度”：虚→实，可写一碗粥里母爱的温度、一句问候里城市的温度', '“底气”：虚→实，可写文化底气（敦煌守护）、科技底气（北斗导航）', '“这，才是成熟的模样”：题眼在“才”与“成熟”，须写出认知转变'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">作文审题三大类型</text><rect x="40" y="60" width="190" height="56" rx="8" fill="#1f5f8b"/><text x="135" y="84" text-anchor="middle" font-size="12" fill="#fff">新材料作文</text><text x="135" y="104" text-anchor="middle" font-size="10" fill="#fff">抓词·因果·辩证</text><rect x="245" y="60" width="190" height="56" rx="8" fill="#4a8fa8"/><text x="340" y="84" text-anchor="middle" font-size="12" fill="#fff">任务驱动型</text><text x="340" y="104" text-anchor="middle" font-size="10" fill="#fff">身份·对象·文体</text><rect x="450" y="60" width="190" height="56" rx="8" fill="#7aa05a"/><text x="545" y="84" text-anchor="middle" font-size="12" fill="#fff">命题/半命题</text><text x="545" y="104" text-anchor="middle" font-size="10" fill="#fff">抓题眼·虚实化</text><text x="340" y="170" text-anchor="middle" font-size="13" fill="#555">先判定类型，再调用对应审题方法，方能不跑题</text></svg>', caption: '审题先分型：新材料作文、任务驱动型、命题/半命题各有对应方法。' },
        { type: 'heading', text: '四、立意三原则与五大角度' },
        { type: 'paragraph', text: '立意是文章的灵魂。同样的材料，立意的高下直接决定得分档次。好立意既要“站得住”，又要“立得高”。' },
        { type: 'keypoint', label: '立意三原则', text: '<strong>准确</strong>：切合材料核心，不偏不倚；<strong>深刻</strong>：透过现象看本质，不停留于表面；<strong>新颖</strong>：独到见解不落俗套，但新颖须以准确为前提，不能为了求新而曲解材料。' },
        { type: 'list', items: ['由小到大：从个人小事上升到时代、家国之思', '由个体到社会：从“我”的经历延展到群体命运', '由现象到文化：从具体事件深挖背后的文化心理', '由当下到未来：立足现实，展望趋势与隐忧', '由浅层到哲理：由一事一议升华为普遍规律'] },
        { type: 'table', headers: ['立意角度', '示例（以“工匠精神”为题）'], rows: [['由小到大', '从一位老匠人写起，上升到民族制造精神'], ['由个体到社会', '从个人敬业，谈行业风气与社会信任'], ['由现象到文化', '从“慢工”现象，谈浮躁文化之反思'], ['由当下到未来', '立足今日智造，展望匠魂代际传承'], ['由浅层到哲理', '由“技”入“道”，谈专注与自由的辩证']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">立意五大角度（由浅入深）</text><rect x="20" y="70" width="115" height="48" rx="8" fill="#7aa05a"/><text x="77" y="98" text-anchor="middle" font-size="11" fill="#fff">由小到大</text><rect x="150" y="70" width="115" height="48" rx="8" fill="#4a8fa8"/><text x="207" y="98" text-anchor="middle" font-size="11" fill="#fff">个体到社会</text><rect x="280" y="70" width="115" height="48" rx="8" fill="#c07f4e"/><text x="337" y="98" text-anchor="middle" font-size="11" fill="#fff">现象到文化</text><rect x="410" y="70" width="115" height="48" rx="8" fill="#7a6fae"/><text x="467" y="98" text-anchor="middle" font-size="11" fill="#fff">当下到未来</text><rect x="540" y="70" width="120" height="48" rx="8" fill="#1f5f8b"/><text x="600" y="98" text-anchor="middle" font-size="11" fill="#fff">浅层到哲理</text><path d="M135 94 L148 94" stroke="#1f5f8b" stroke-width="3"/><path d="M265 94 L278 94" stroke="#1f5f8b" stroke-width="3"/><path d="M395 94 L408 94" stroke="#1f5f8b" stroke-width="3"/><path d="M525 94 L538 94" stroke="#1f5f8b" stroke-width="3"/><text x="340" y="165" text-anchor="middle" font-size="13" fill="#555">角度越往后越深刻新颖，但须以准确为前提</text></svg>', caption: '立意五大角度由浅入深，越往后越显深刻，但准确是第一底线。' },
        { type: 'tip', label: '学习提示', text: '审题立意可练“三分钟提纲法”：拿到题先花三分钟，在草稿纸中央写材料关键词，向左列“可写角度”，向右列“最佳立意”，再画箭头标出由小到大的升维路径。每周练五道题的提纲，不写全文也能快速提升立意能力。' },
        { type: 'reading', text: '延伸思考：当“新颖”与“稳妥”冲突时（比如绝大多数考生都写“慢的价值”，而你想到“有准备的快”），是冒险求新还是求稳保准？请结合评分标准中“深刻”“新颖”的赋分逻辑，谈谈你的取舍原则。' }
      ],
      exercises: [
        { type: 'choice', question: '新材料作文审题中，“抓关键词句法”最适用的材料特征是？', options: ['材料含多个毫无关联的故事', '材料有总结句、高频词或情感倾向词', '材料为纯数据图表', '材料为单一人物对话'], answer: '材料有总结句、高频词或情感倾向词', explanation: '“抓关键词句法”的核心是圈出材料中反复出现的高频词、总结句、议论句及带情感倾向的词，据此锁定主旨。若材料有总结句或高频词（如反复出现“慢”），主旨往往与之相关，故该项最适用。其余选项的材料特征更适合因果分析或归纳概括，故选“材料有总结句、高频词或情感倾向词”。' },
        { type: 'fill', question: '任务驱动型作文必须逐一落实四项任务指令：身份、对象、文体、__。', answer: '内容范围', explanation: '任务驱动型作文在材料中给出明确任务，审题时须把四项指令逐条拆解：身份（以谁口吻）、对象（写给谁）、文体（书信/演讲稿/议论文等）、内容范围（谈论什么、不跑题）。四项缺一不可，漏任何一项都会被判“任务缺项”而降档，故填“内容范围”。' },
        { type: 'choice', question: '下列对“立意三原则”表述正确的一项是？', options: ['准确、华丽、简短', '准确、深刻、新颖', '深刻、晦涩、独特', '准确、平淡、全面'], answer: '准确、深刻、新颖', explanation: '立意三原则为“准确、深刻、新颖”：准确指切合材料核心不偏题；深刻指透过现象看本质；新颖指独到见解不落俗套。三者中准确是底线，新颖须以准确为前提。“华丽”“晦涩”“平淡”均非原则表述，故选“准确、深刻、新颖”。' },
        { type: 'fill', question: '半命题作文“___的温度”审题时，可用“虚实转化”法把抽象词“温度”具体化为可写的__与角度。', answer: '事例', explanation: '“温度”是抽象概念，半命题审题的“虚实转化”要求把虚词落实为具体可写的人、事、物、景。例如可写“一碗粥里母爱的温度”“一句问候里城市的温度”，即用真实事例承载抽象情感。这样写才不会空对空，故填“事例”。' },
        { type: 'choice', question: '写作中“由个体到社会”属于立意的哪一维度？', options: ['三原则之一', '五大角度之一', '三大结构之一', '审题四法之一'], answer: '五大角度之一', explanation: '立意五大角度为：由小到大、由个体到社会、由现象到文化、由当下到未来、由浅层到哲理。“由个体到社会”即从“我”的经历延展到群体命运，是五大角度中的第二维，而非原则、结构或审题法，故选“五大角度之一”。' }
      ]
    },

    /* ===================== 第二部分 · 构思与结构 ===================== */

    { id: 'zt4-u1-l2', name: '写作专题（二）：构思与结构——框架稳则文章立', author: '高考复习', chapter: '第二部分 · 构思与结构', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、三大经典结构总览' },
        { type: 'paragraph', text: '好的结构让文章层次分明、逻辑清晰。高考议论文推荐三大经典结构：层进式、并列式、对照式。三者可单独使用，也可在一篇文章中组合。' },
        { type: 'table', headers: ['结构类型', '具体模式', '适用场景'], rows: [['层进式（递进式）', '是什么→为什么→怎么办；由表及里、由浅入深', '哲理思辨类、社会现象类'], ['并列式', '中心论点拆2-3个并列分论点，角度不重叠', '素材丰富、角度多元的题目'], ['对照式（对比式）', '正面+反面论证，或先破后立', '争议性话题、需辨析的题目']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">议论文三大经典结构</text><rect x="40" y="55" width="190" height="56" rx="8" fill="#1f5f8b"/><text x="135" y="79" text-anchor="middle" font-size="12" fill="#fff">层进式</text><text x="135" y="99" text-anchor="middle" font-size="10" fill="#fff">是什么到怎么办</text><rect x="245" y="55" width="190" height="56" rx="8" fill="#4a8fa8"/><text x="340" y="79" text-anchor="middle" font-size="12" fill="#fff">并列式</text><text x="340" y="99" text-anchor="middle" font-size="10" fill="#fff">分论点平行</text><rect x="450" y="55" width="190" height="56" rx="8" fill="#c07f4e"/><text x="545" y="79" text-anchor="middle" font-size="12" fill="#fff">对照式</text><text x="545" y="99" text-anchor="middle" font-size="10" fill="#fff">正反·破立</text><text x="340" y="170" text-anchor="middle" font-size="13" fill="#555">按题目素材与角度特点选结构，框架稳则文章立</text></svg>', caption: '三大结构：层进式（递进）、并列式（平行）、对照式（对比/破立）。' },
        { type: 'heading', text: '二、层进式（递进式）' },
        { type: 'paragraph', text: '层进式按“引论→本论→结论”展开，本论部分层层深入。它最能体现思维的深度，是哲理思辨类与社会现象类作文的首选。' },
        { type: 'keypoint', label: '层进式标杆模式', text: '五步法：①<strong>提出观点</strong>（亮明中心论点）；②<strong>阐释内涵</strong>（是什么）；③<strong>分析原因/意义</strong>（为什么）；④<strong>指出做法</strong>（怎么办）；⑤<strong>总结升华</strong>（回扣并拔高）。五步环环相扣，由浅入深。' },
        { type: 'example', label: '层进式提纲示范', text: '以《论坚持》为例：①提出观点“坚持是成就事业的基石”；②阐释内涵“坚持是久久为功的恒心”；③分析原因“为何坚持能成事——量变到质变、逆境中蓄力”；④指出做法“如何坚持——目标拆解、抗干扰、复盘”；⑤总结升华“个人坚持汇成民族前行的力量”。五步层层递进，逻辑严整。' },
        { type: 'heading', text: '三、并列式' },
        { type: 'paragraph', text: '并列式把中心论点拆成2-3个互不重叠的分论点，每个分论点独立成段展开。适用于素材丰富、角度多元的题目。' },
        { type: 'list', items: ['个人→集体→国家（由己及人及天下）', '历史→现实→未来（纵向时间轴）', '思想→行动→制度（由内而外）', '内因→外因（主客观统一）'] },
        { type: 'example', label: '并列分论点示范', text: '以《谈合作》为例，三个并列分论点：①合作是个人突破瓶颈的阶梯（个人）；②合作是团队攻克难题的引擎（集体）；③合作是人类文明续写的密码（人类）。三者角度平行、互不重叠，构成清晰骨架。' },
        { type: 'warn', label: '易错提醒', text: '并列式最忌<strong>分论点重叠或交叉</strong>：例如“勤奋使人进步”“努力使人成功”本质同一，不能并列。拟写后须用“互换检验法”——若两个分论点互换位置文章仍通顺，说明它们并非真正并列，须重新拆分角度。' },
        { type: 'heading', text: '四、对照式（对比式）' },
        { type: 'paragraph', text: '对照式通过正反对比或破立结合突出中心论点，适用于争议性话题、需要辨析正误的题目。' },
        { type: 'list', items: ['正反对比：正面论证+反面论证，两相对照显优劣', '破立结合：先“破”错误观点（树靶子、打靶子），再“立”正确主张', '对比须聚焦同一标准，避免偷换概念'] },
        { type: 'example', label: '破立结合示范', text: '写《拒绝盲从》：先“破”——树靶子“有人认为随大流最安全”，打靶子“盲从使人丧失独立判断，如股市跟风被套”；后“立”——建立正确主张“保持清醒、独立思考才是正道”，再辅以理性思考的方法。破立之间逻辑自洽，说服力陡增。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">对照式：先破后立</text><rect x="60" y="70" width="230" height="56" rx="8" fill="#b04a4a"/><text x="175" y="94" text-anchor="middle" font-size="13" fill="#fff">破：树靶·打靶（驳错误）</text><rect x="390" y="70" width="230" height="56" rx="8" fill="#7aa05a"/><text x="505" y="94" text-anchor="middle" font-size="13" fill="#fff">立：建正确主张</text><path d="M290 98 L388 98" stroke="#1f5f8b" stroke-width="3"/><path d="M380 92 L392 98 L380 104 Z" fill="#1f5f8b"/><text x="340" y="165" text-anchor="middle" font-size="13" fill="#555">正反对比突出中心，破立结合增强说服力</text></svg>', caption: '对照式先“破”错误观点（树靶、打靶），再“立”正确主张，正反相映。' },
        { type: 'heading', text: '五、开头与结尾核心要求' },
        { type: 'keypoint', label: '开头凤头', text: '开头要写成“凤头”：<strong>引材料（简）→析材料（精）→亮观点（明）</strong>。要求三个字——<strong>短</strong>（百字左右）、<strong>快</strong>（迅速入题）、<strong>亮</strong>（观点鲜明）。切忌长篇复述材料或绕圈子。' },
        { type: 'keypoint', label: '结尾豹尾', text: '结尾要写成“豹尾”：<strong>总结升华、照应开头、发出号召</strong>。要求回扣中心、语言有力、引人深思，切忌另起新话题或草草收场。' },
        { type: 'table', headers: ['部位', '核心动作', '三字/三词要求'], rows: [['开头（凤头）', '引材料→析材料→亮观点', '短、快、亮'], ['结尾（豹尾）', '总结升华→照应开头→发号召', '回扣、有力、深思']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">开头凤头·结尾豹尾</text><rect x="60" y="65" width="250" height="60" rx="8" fill="#1f5f8b"/><text x="185" y="90" text-anchor="middle" font-size="13" fill="#fff">凤头：引·析·亮</text><text x="185" y="110" text-anchor="middle" font-size="11" fill="#fff">短·快·亮，百字入题</text><rect x="370" y="65" width="250" height="60" rx="8" fill="#c07f4e"/><text x="495" y="90" text-anchor="middle" font-size="13" fill="#fff">豹尾：收·升·召</text><text x="495" y="110" text-anchor="middle" font-size="11" fill="#fff">回扣中心·有力·深思</text><text x="340" y="170" text-anchor="middle" font-size="13" fill="#555">首尾呼应成闭环，是阅卷第一印象的关键</text></svg>', caption: '开头“凤头”要求短快亮，结尾“豹尾”要求回扣、有力、深思，首尾成环。' },
        { type: 'tip', label: '学习提示', text: '结构训练可用“骨架填充法”：先写一句话中心论点，再写2-3句分论点（标“并列/层进/对照”），最后写开头结尾各一句。全文骨架百字即可成型，再往里填素材。每周用此法搭三篇骨架，结构感会迅速稳固。' },
        { type: 'reading', text: '延伸思考：考场作文常要求“结构清晰”，但过分模板化（如每段千篇一律“分论点+事例+结论”）又会被判“套路化”失分。请结合发展等级“有创意”的要求，谈谈如何在“结构清晰”与“构思新巧”之间取得平衡。' }
      ],
      exercises: [
        { type: 'choice', question: '层进式（递进式）议论文标杆模式的第一步是？', options: ['提出观点', '分析原因', '指出做法', '总结升华'], answer: '提出观点', explanation: '层进式五步法为：①提出观点（亮明中心论点）；②阐释内涵（是什么）；③分析原因/意义（为什么）；④指出做法（怎么办）；⑤总结升华。第一步是“提出观点”，先亮明立场才能展开后续论证，故选“提出观点”。' },
        { type: 'fill', question: '高考议论文开头要写成“凤头”，核心要求是三个字：__、快、亮。', answer: '短', explanation: '开头“凤头”三要求为“短、快、亮”：短指篇幅短（百字左右，不啰嗦）；快指迅速入题（不绕圈子）；亮指观点鲜明（一眼见主旨）。三者中“短”是首要，篇幅过长会冲淡重点，故填“短”。' },
        { type: 'choice', question: '并列式结构拆分分论点的常见角度不包括？', options: ['个人→集体→国家', '历史→现实→未来', '思想→行动→制度', '主语→谓语→宾语'], answer: '主语→谓语→宾语', explanation: '并列式分论点常见拆分角度有：个人→集体→国家、历史→现实→未来、思想→行动→制度、内因→外因等，均为有意义的语义维度。“主语→谓语→宾语”是句子语法成分，不是立意角度，且分论点互换位置应不通顺才是真并列，故选“主语→谓语→宾语”。' },
        { type: 'fill', question: '对照式中的“破立结合”是指先__（驳斥错误观点），后__（建立正确观点）。', answer: '破', explanation: '对照式的“破立结合”写作顺序为先“破”后“立”：“破”是树靶子、打靶子，驳斥材料或社会中的错误观点；“立”是在破的基础上建立正确主张。先破后立方显逻辑力量，故前半空填“破”（后半空对应“立”）。' },
        { type: 'choice', question: '下列对“豹尾”（结尾）要求表述正确的是？', options: ['越长越好，尽情发挥', '须回扣中心、语言有力、引人深思', '可以另起新话题', '不必照应开头'], answer: '须回扣中心、语言有力、引人深思', explanation: '结尾“豹尾”要求总结升华、照应开头、发出号召，具体为回扣中心、语言有力、引人深思。它忌讳另起新话题（偏离主旨）、忌讳不照应开头（首尾断裂）、也非越长越好。故选“须回扣中心、语言有力、引人深思”。' }
      ]
    }

  );
})();
