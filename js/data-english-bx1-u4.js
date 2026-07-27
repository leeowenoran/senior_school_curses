/* ============================================================
 * 高一英语 · 必修 第一册 · Unit 3 Sports and Fitness
 * 课时：核心词汇与常用短语 / 重点句型与附加疑问句
 * 数据注入：english.bx1.points
 * 配色：紫色系（主色 #9c56d4 / #7a3fb0）
 * ============================================================ */
(function () {
  var v = gzGetVolume('english', 'bx1');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 核心词汇与常用短语 ---------------- */
    {
      id: 'bx1-u4-l1',
      name: 'Unit 3 核心词汇与常用短语',
      chapter: 'Unit 3 Sports and Fitness · 核心词汇与常用短语',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、本单元词汇概览' },
        { type: 'paragraph', text: 'Unit 3 Sports and Fitness 围绕体育运动与健康展开。本课时集中学习单元核心词汇与常用短语，涵盖运动项目名称、动作类动词、人物品质类名词以及建议与锻炼相关的短语，是读懂课文、完成口语交流的基础。' },
        { type: 'keypoint', label: '重点·分类记忆', text: '本单元词汇可按<strong>运动项目、动作动词、人物品质、重点短语</strong>四个维度归类记忆。分类记忆能避免孤立背单词，帮助你在语境中快速提取与运用。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">常见体育运动分类</text><g font-size="14" fill="#3a2a4a"><rect x="30" y="60" width="145" height="225" rx="10" fill="#e9d9f5" stroke="#9c56d4" stroke-width="2"/><text x="102" y="86" font-size="16" font-weight="bold" fill="#7a3fb0" text-anchor="middle">球类运动</text><text x="102" y="116" text-anchor="middle">soccer 足球</text><text x="102" y="144" text-anchor="middle">badminton 羽毛球</text><text x="102" y="172" text-anchor="middle">basketball 篮球</text><text x="102" y="200" text-anchor="middle">tennis 网球</text><text x="102" y="228" text-anchor="middle">volleyball 排球</text><rect x="190" y="60" width="145" height="225" rx="10" fill="#e9d9f5" stroke="#9c56d4" stroke-width="2"/><text x="262" y="86" font-size="16" font-weight="bold" fill="#7a3fb0" text-anchor="middle">田径运动</text><text x="262" y="116" text-anchor="middle">marathon 马拉松</text><text x="262" y="144" text-anchor="middle">track 跑道</text><text x="262" y="172" text-anchor="middle">jog 慢跑</text><text x="262" y="200" text-anchor="middle">sprint 短跑</text><text x="262" y="228" text-anchor="middle">long jump 跳远</text><rect x="350" y="60" width="145" height="225" rx="10" fill="#e9d9f5" stroke="#9c56d4" stroke-width="2"/><text x="422" y="86" font-size="16" font-weight="bold" fill="#7a3fb0" text-anchor="middle">水上运动</text><text x="422" y="116" text-anchor="middle">swim 游泳</text><text x="422" y="144" text-anchor="middle">ski 滑雪</text><text x="422" y="172" text-anchor="middle">skate 滑冰</text><text x="422" y="200" text-anchor="middle">surf 冲浪</text><text x="422" y="228" text-anchor="middle">dive 跳水</text><rect x="510" y="60" width="145" height="225" rx="10" fill="#e9d9f5" stroke="#9c56d4" stroke-width="2"/><text x="582" y="86" font-size="16" font-weight="bold" fill="#7a3fb0" text-anchor="middle">体操与其他</text><text x="582" y="116" text-anchor="middle">gymnastics 体操</text><text x="582" y="144" text-anchor="middle">boxing 拳击</text><text x="582" y="172" text-anchor="middle">cycling 骑行</text><text x="582" y="200" text-anchor="middle">yoga 瑜伽</text><text x="582" y="228" text-anchor="middle">martial arts 武术</text></g></svg>', caption: '图1 常见体育运动分类：按球类、田径、水上、体操等大类记忆，便于归类掌握 Unit 3 词汇。' },
        { type: 'heading', text: '二、核心名词（运动项目与人物）' },
        { type: 'paragraph', text: '下列名词多出现在课文与运动场景对话中。注意 stadium（体育场）、event（比赛项目）、legend（传奇人物）等词的拼写与搭配，athlete 与 championship 常共同出现于赛事报道。' },
        { type: 'table', headers: ['单词', '词性', '释义'], rows: [['fitness', 'n.', '健康；健壮；适合'], ['soccer', 'n.', '足球'], ['stadium', 'n.', '体育场；运动场'], ['badminton', 'n.', '羽毛球运动'], ['marathon', 'n.', '马拉松赛跑'], ['athlete', 'n.', '运动员；运动健儿'], ['championship', 'n.', '锦标赛；冠军赛'], ['determination', 'n.', '决心；决定'], ['strength', 'n.', '力量；体力'], ['grace', 'n.', '优美；优雅']] },
        { type: 'example', label: '例句1', text: 'The <strong>athlete</strong> trained hard for the <strong>championship</strong> and won it with great <strong>determination</strong>.<br><br>译：这名运动员为锦标赛刻苦训练，并以极大的决心赢得了冠军。<br>句中 athlete、championship、determination 三个核心名词连用在赛事语境中十分典型。' },
        { type: 'heading', text: '三、核心动词与动作类词汇' },
        { type: 'paragraph', text: '本单元动作类词汇描述具体的运动方式，如 ski（滑雪）、jog（慢跑）、cycle（骑行）、host（主办）。这些词常以动词形式出现在建议与计划表达中。' },
        { type: 'list', items: ['ski 滑雪；常作不及物动词，如 ski in winter', 'jog 慢跑；可与 go jogging 搭配使用', 'cycle 骑自行车；名词形式为 cycling', 'host 主办、主持；也可作名词表示主人', 'work out 锻炼；还可表示算出、制定出'] },
        { type: 'keypoint', label: '重点·动作词汇', text: '<strong>work out</strong> 是多义短语动词：作「锻炼」讲时是不及物用法，如 I work out every morning；作「算出、解决」讲时可用于 work out the problem。语境不同含义不同，需结合上下文判断。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">一周健身计划示例（work out regularly）</text><line x1="50" y1="120" x2="630" y2="120" stroke="#9c56d4" stroke-width="3"/><g font-size="13" fill="#3a2a4a" text-anchor="middle"><circle cx="90" cy="120" r="20" fill="#b87fd8"/><text x="90" y="124">一 jog</text><circle cx="175" cy="120" r="20" fill="#b87fd8"/><text x="175" y="124">二 swim</text><circle cx="260" cy="120" r="20" fill="#b87fd8"/><text x="260" y="124">三 rest</text><circle cx="345" cy="120" r="20" fill="#b87fd8"/><text x="345" y="124">四 cycle</text><circle cx="430" cy="120" r="20" fill="#b87fd8"/><text x="430" y="124">五 gym</text><circle cx="515" cy="120" r="20" fill="#b87fd8"/><text x="515" y="124">六 run</text><circle cx="600" cy="120" r="20" fill="#b87fd8"/><text x="600" y="124">日 yoga</text></g><text x="340" y="200" font-size="14" fill="#5a7a2a" text-anchor="middle">坚持 work out，提升 strength 与 fitness</text></svg>', caption: '图2 一周健身计划：把 jog、swim、cycle 等动词类词汇放进日常安排，配合 work out 形成习惯。' },
        { type: 'heading', text: '四、重点短语（一）' },
        { type: 'paragraph', text: '短语是本课时的另一重点。come along 与 work out 在单元对话中反复出现，需掌握其多种含义与用法。' },
        { type: 'table', headers: ['短语', '汉语释义'], rows: [['come along', '跟随；到达；进步'], ['work out', '锻炼；算出；制定出'], ['set an example', '树立榜样'], ['fall apart', '破裂；破碎'], ['lose heart', '丧失信心'], ['give up', '放弃'], ['in honour of', '为向……表示敬意']] },
        { type: 'warn', label: '易错', text: 'work out 与 figure out 易混：<strong>work out</strong> 侧重「锻炼」或「通过努力算出/解决」，<strong>figure out</strong> 侧重「弄明白、搞清楚」。此外 in honour of 中 honour 为英式拼写，美式常写作 honor，但短语结构不变。' },
        { type: 'tip', label: '提示', text: '记忆短语时建议<strong>成对记忆</strong>：lose heart（丧失信心）与 lose one\'s heart to（爱上）形近义远；give up（放弃）后接动词时用 give up doing。把短语放回课文原句背诵，效果远胜孤立背诵。' },
        { type: 'heading', text: '五、重点短语（二）与辨析' },
        { type: 'paragraph', text: '下列短语常与人物品质、赛事精神相关。honour、glory、mastery 等名词常搭配动词 use、win、show 等，构成「获得荣誉、展现掌控力」等表达。' },
        { type: 'list', items: ['honour 可作动词「尊敬；给予荣誉」，也可作名词「荣誉」', 'glory 表示光荣，常与 win / bring 搭配', 'mastery 表示精通，常与 of 连用，如 mastery of skills', 'audience 集合名词，作主语时谓语按单数或复数视语境而定', 'failure 既可指失败，也可指失败的人或事'] },
        { type: 'keypoint', label: '重点·短语辨析', text: 'lose heart（丧失信心）与 lose one\'s heart to（爱上）只差一个 <strong>one\'s</strong>，含义却完全不同；<strong>give up</strong> 后接名词或代词放中间，如 give it up，接动词用 give up doing。辨析时务必看清结构与宾语。' },
        { type: 'example', label: '例句2', text: 'They <strong>set an example</strong> to us, and we should never <strong>lose heart</strong> even if we <strong>fall apart</strong>.<br><br>译：他们为我们树立了榜样，即便陷入崩溃我们也不应丧失信心。<br>本句串联 set an example、lose heart、fall apart 三个单元短语，体现人物品质主题。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">核心词汇记忆导图</text><circle cx="340" cy="150" r="48" fill="#9c56d4"/><text x="340" y="146" font-size="15" fill="#ffffff" text-anchor="middle">Unit 3</text><text x="340" y="166" font-size="15" fill="#ffffff" text-anchor="middle">词汇</text><g stroke="#b87fd8" stroke-width="2" fill="none"><line x1="340" y1="150" x2="120" y2="80"/><line x1="340" y1="150" x2="560" y2="80"/><line x1="340" y1="150" x2="120" y2="220"/><line x1="340" y1="150" x2="560" y2="220"/></g><g font-size="14" fill="#3a2a4a" text-anchor="middle"><rect x="60" y="62" width="120" height="34" rx="8" fill="#e9d9f5" stroke="#9c56d4" stroke-width="1.5"/><text x="120" y="84">运动项目</text><rect x="500" y="62" width="120" height="34" rx="8" fill="#e9d9f5" stroke="#9c56d4" stroke-width="1.5"/><text x="560" y="84">动作动词</text><rect x="60" y="204" width="120" height="34" rx="8" fill="#e9d9f5" stroke="#9c56d4" stroke-width="1.5"/><text x="120" y="226">人物品质</text><rect x="500" y="204" width="120" height="34" rx="8" fill="#e9d9f5" stroke="#9c56d4" stroke-width="1.5"/><text x="560" y="226">重点短语</text></g></svg>', caption: '图3 词汇记忆导图：将 Unit 3 词汇按运动项目、动作动词、人物品质、重点短语四个维度归类，便于整体记忆。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['运动项目名词：soccer、badminton、marathon、stadium、gymnastics、boxing', '动作动词：ski、jog、cycle、host、work out', '人物与品质：athlete、championship、determination、strength、grace、honour、glory', '重点短语：come along、work out、set an example、lose heart、give up、in honour of', '记忆策略：分类记忆 + 导图记忆 + 原句背诵', '易错点：work out 多义、lose heart 与 lose one\'s heart to 辨析'] }
      ],
      exercises: [
        { type: 'choice', question: 'Which word means a long-distance running race of about 42 kilometres?', options: ['soccer', 'marathon', 'boxing', 'badminton'], answer: 'marathon', explanation: 'marathon 意为马拉松赛跑，是一项约 42 公里的长跑赛事；soccer 是足球，boxing 是拳击，badminton 是羽毛球，均不符合题干中的长跑赛事描述，故选 marathon。' },
        { type: 'choice', question: 'The phrase "work out" can mean which of the following?', options: ['放弃', '锻炼；制定出', '赢得荣誉', '丧失信心'], answer: '锻炼；制定出', explanation: 'work out 是多义短语，可表示锻炼身体，也可表示算出、制定出计划等；放弃对应 give up，赢得荣誉对应 win honour，丧失信心对应 lose heart，均不是 work out 的含义，故选「锻炼；制定出」。' },
        { type: 'choice', question: 'One should never ______ when facing difficulties in training.', options: ['set an example', 'come along', 'lose heart', 'fall apart'], answer: 'lose heart', explanation: 'lose heart 意为丧失信心，句子表达面对训练困难不应丧失信心，语义通顺；set an example 是树立榜样，come along 是跟随或进步，fall apart 是破裂，放入句中均不合逻辑，故选 lose heart。' },
        { type: 'fill', question: 'The ______ (athlete) from our school won the championship with great determination.', answer: 'athlete', explanation: '句意为我校的那名运动员以极大的决心赢得了冠军。括号内提示词为 athlete（运动员），此处作主语且由 The 与 won 可知为单数名词，直接填 athlete 即可，注意拼写中含 th 与 le 两个易错字母组合。' },
        { type: 'fill', question: 'We should ______ ______ regularly to keep fit and improve our fitness.', answer: 'work out', explanation: '句意为我们应当定期锻炼以保持健康并提升体能。表示锻炼的固定短语是 work out，主语 we 后用动词原形，regularly 为频度副词置于句末；注意 work out 在此为不及物用法，不可加宾语。' }
      ]
    },

    /* ---------------- 第2课时 重点句型与附加疑问句 ---------------- */
    {
      id: 'bx1-u4-l2',
      name: 'Unit 3 重点句型与附加疑问句',
      chapter: 'Unit 3 Sports and Fitness · 重点句型与附加疑问句',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、建议表达的常用句型' },
        { type: 'paragraph', text: 'Unit 3 的听说活动大量使用建议句型。掌握 Let\'s、Why not、Shall we 等开头的句式，能让你在小组讨论运动计划时自然得体地表达想法。' },
        { type: 'keypoint', label: '重点·建议句型', text: '常见的建议表达有五种：<strong>Let\'s + 动词原形</strong>；<strong>Why not + 动词原形</strong>；<strong>Shall we + 动词原形</strong>；<strong>How about + 名词 / 动名词</strong>；<strong>You should + 动词原形</strong>。前三种更口语化，后两种语气稍正式。' },
        { type: 'list', items: ['Let\'s play basketball. 提议一起打篮球', 'Why not join us? 反问式建议，语气强烈', 'Shall we go running? 询问并提议去跑步', 'How about a game of badminton? 委婉建议打羽毛球', 'You should work out regularly. 给出健康建议'] },
        { type: 'table', headers: ['句型', '例句', '说明'], rows: [['Let\'s + 动原', 'Let\'s play basketball.', '用于提议一起做某事'], ['Why not + 动原', 'Why not join us?', '建议对方做某事'], ['Shall we + 动原', 'Shall we go running?', '提议或询问对方意愿'], ['How about + 名/动名', 'How about a game of badminton?', '委婉建议'], ['You should + 动原', 'You should work out regularly.', '给出建议']] },
        { type: 'example', label: '例句1', text: '— <strong>Shall we go running</strong> after school?<br>— Good idea! <strong>Let\'s meet</strong> at the stadium.<br><br>译：——放学后我们去跑步好吗？——好主意！我们在体育场碰面吧。<br>对话中 Shall we 与 Let\'s 连用，是提议与回应建议的典型搭配。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">建议表达句型结构</text><g font-size="14" fill="#3a2a4a"><rect x="40" y="60" width="600" height="36" rx="8" fill="#e9d9f5" stroke="#9c56d4" stroke-width="1.5"/><text x="60" y="84">Let us / Let\'s + 动词原形：Let\'s play basketball.</text><rect x="40" y="106" width="600" height="36" rx="8" fill="#e9d9f5" stroke="#9c56d4" stroke-width="1.5"/><text x="60" y="130">Why not + 动词原形：Why not join us?</text><rect x="40" y="152" width="600" height="36" rx="8" fill="#e9d9f5" stroke="#9c56d4" stroke-width="1.5"/><text x="60" y="176">Shall we + 动词原形：Shall we go running?</text></g><text x="340" y="206" font-size="13" fill="#5a7a2a" text-anchor="middle">How about + 名词/动名词；You should + 动词原形 也是常见建议表达</text></svg>', caption: '图1 建议表达句型：以 Let\'s、Why not、Shall we 开头给出建议，是 Unit 3 口语交流的常用结构。' },
        { type: 'heading', text: '二、附加疑问句概述' },
        { type: 'paragraph', text: '附加疑问句（tag questions）由「陈述句 + 简短疑问尾」构成，用于确认信息或寻求认同。掌握其基本结构与前后一致原则，是本课时的核心目标。' },
        { type: 'keypoint', label: '重点·基本结构', text: '附加疑问句的公式为：<strong>陈述句 + 疑问尾</strong>。疑问尾由「<strong>代词 + 助动词 / 情态动词 / be 动词</strong>」构成，其人称与动词必须与陈述句保持一致，且遵循「<strong>前肯后否、前否后肯</strong>」原则。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">附加疑问句基本结构</text><rect x="40" y="70" width="300" height="100" rx="10" fill="#e9d9f5" stroke="#9c56d4" stroke-width="2"/><text x="190" y="100" font-size="15" font-weight="bold" fill="#7a3fb0" text-anchor="middle">陈述句部分</text><text x="190" y="130" font-size="13" fill="#3a2a4a" text-anchor="middle">肯定 / 否定</text><text x="190" y="152" font-size="13" fill="#3a2a4a" text-anchor="middle">时态、主语确定</text><rect x="380" y="70" width="260" height="100" rx="10" fill="#f6e3c8" stroke="#c0392b" stroke-width="2"/><text x="510" y="100" font-size="15" font-weight="bold" fill="#c0392b" text-anchor="middle">疑问尾部分</text><text x="510" y="130" font-size="13" fill="#3a2a4a" text-anchor="middle">代词 + 助/情/be 动词</text><text x="510" y="152" font-size="13" fill="#3a2a4a" text-anchor="middle">前肯后否 / 前否后肯</text><line x1="340" y1="120" x2="378" y2="120" stroke="#7a3fb0" stroke-width="3"/><polygon points="378,120 366,114 366,126" fill="#7a3fb0"/></svg>', caption: '图2 附加疑问句结构：由陈述句部分加上简短的疑问尾构成，疑问尾的人称和动词须与陈述句保持一致。' },
        { type: 'heading', text: '三、规则一：前肯后否，前否后肯' },
        { type: 'paragraph', text: '当陈述句为肯定时，疑问尾用否定；当陈述句为否定时，疑问尾用肯定。这是附加疑问句最基础的对称规则。' },
        { type: 'example', label: '例句2', text: 'You like sports, <strong>don\'t you</strong>?<br>He can\'t swim, <strong>can he</strong>?<br><br>第一句陈述句肯定（like），疑问尾否定（don\'t you）；第二句陈述句含否定词 can\'t，疑问尾用肯定（can he）。前后人称与动词均保持一致。' },
        { type: 'warn', label: '易错', text: '疑问尾的动词必须与前句一致：前句用 do / does / did，疑问尾就用对应形式；前句用 can / will / be，疑问尾也用同样动词。常见错误是把 You like 配成 <strong>aren\'t you</strong>（误用 be 动词），正确应为 don\'t you。' },
        { type: 'heading', text: '四、规则二：含否定词的视为否定' },
        { type: 'paragraph', text: '若陈述句中含有 no、nothing、never、seldom、hardly 等否定词，整句视为否定，疑问尾须用肯定形式。' },
        { type: 'list', items: ['no / none 视为否定，如 There is no mistake, is there?', 'nothing 视为否定，如 Nothing wrong, is there?', 'never 视为否定，如 He never lies, does he?', 'seldom / hardly 视为否定，如 She seldom goes out, does she?'] },
        { type: 'example', label: '例句3', text: 'She <strong>seldom</strong> goes to the gym, <strong>does she</strong>?<br><br>seldom（很少）为否定意义副词，故陈述句视为否定，疑问尾用肯定 does she。若误写成 doesn\'t she 则违反「前否后肯」规则。' },
        { type: 'keypoint', label: '重点·否定词', text: '含有 <strong>no、nothing、never、seldom、hardly、few、little</strong> 等词的陈述句，整体按<strong>否定句</strong>处理，附加疑问尾必须用<strong>肯定</strong>形式。这是考试高频考点，务必先判断陈述句是否含隐藏否定词。' },
        { type: 'heading', text: '五、规则三：祈使句与 Let 句型' },
        { type: 'paragraph', text: '祈使句与 Let 句型的疑问尾有专门规则，不能套用普通的前肯后否，需要单独记忆。' },
        { type: 'table', headers: ['句型', '疑问尾', '例句'], rows: [['肯定祈使句', 'will you?', 'Open the window, will you?'], ['否定祈使句', 'won\'t you?', 'Don\'t be late, won\'t you?'], ['Let\'s + 动原', 'shall we?', 'Let\'s go, shall we?'], ['Let us + 动原', 'will you?', 'Let us help you, will you?']] },
        { type: 'tip', label: '提示', text: '记忆口诀：<strong>祈使句看语气，肯定 will you，否定 won\'t you</strong>；<strong>Let\'s 包含听话人用 shall we，Let us 不含听话人用 will you</strong>。区分 Let\'s 与 Let us 的关键在于是否把对方算进提议对象中。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">祈使句与 Let 句型的疑问尾</text><g font-size="14" fill="#3a2a4a"><rect x="40" y="60" width="285" height="40" rx="8" fill="#e9d9f5" stroke="#9c56d4" stroke-width="1.5"/><text x="60" y="85">肯定祈使句 → will you?</text><rect x="355" y="60" width="285" height="40" rx="8" fill="#e9d9f5" stroke="#9c56d4" stroke-width="1.5"/><text x="375" y="85">否定祈使句 → won\'t you?</text><rect x="40" y="115" width="285" height="40" rx="8" fill="#e9d9f5" stroke="#9c56d4" stroke-width="1.5"/><text x="60" y="140">Let\'s + 动原 → shall we?</text><rect x="355" y="115" width="285" height="40" rx="8" fill="#e9d9f5" stroke="#9c56d4" stroke-width="1.5"/><text x="375" y="140">Let us + 动原 → will you?</text></g><text x="340" y="200" font-size="13" fill="#5a7a2a" text-anchor="middle">注意：Let\'s 包含听话人，用 shall we；Let us 不含听话人，用 will you</text></svg>', caption: '图3 祈使句与 Let 句型的疑问尾：肯定祈使句用 will you，Let\'s 用 shall we，规则需准确区分。' },
        { type: 'example', label: '例句4', text: 'Let\'s go running, <strong>shall we</strong>?<br>Let us use your basketball, <strong>will you</strong>?<br><br>第一句 Let\'s 把对方纳入提议，疑问尾用 shall we；第二句 Let us 仅指说话者一方，疑问尾用 will you。二者不可混淆。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['建议句型：Let\'s / Why not / Shall we / How about / You should', '附加疑问句结构：陈述句 + 代词 + 助/情/be 动词', '规则一：前肯后否、前否后肯', '规则二：含 no/never/seldom 等视为否定，尾用肯定', '规则三：祈使句 will you / won\'t you；Let\'s 用 shall we，Let us 用 will you', '疑问尾人称与动词须与前句严格一致'] }
      ],
      exercises: [
        { type: 'choice', question: 'You like sports, ______?', options: ['do you', 'don\'t you', 'are you', 'aren\'t you'], answer: 'don\'t you', explanation: '陈述句 You like sports 为肯定句，按「前肯后否」原则，疑问尾应用否定形式；主语 you 对应助动词 do，故为 don\'t you。do you 为肯定尾不符合规则，are you / aren\'t you 误用了 be 动词，均错误。' },
        { type: 'choice', question: 'He can\'t swim, ______?', options: ['can he', 'can\'t he', 'does he', 'is he'], answer: 'can he', explanation: '陈述句 He can\'t swim 含否定词 can\'t，视为否定句，按「前否后肯」原则，疑问尾用肯定形式；情态动词 can 与主语 he 保持一致，故为 can he。can\'t he 为否定尾违反规则，does he / is he 动词不一致。' },
        { type: 'choice', question: 'Let\'s go running, ______?', options: ['will you', 'won\'t you', 'shall we', 'do we'], answer: 'shall we', explanation: 'Let\'s 开头的句子把听话人纳入提议对象，其疑问尾固定用 shall we，这是专门规则；will you / won\'t you 用于普通祈使句，do we 不符合任何规则，故选 shall we。' },
        { type: 'fill', question: 'There is nothing wrong with the plan, ______ ______?', answer: 'is there', explanation: 'nothing 为否定词，陈述句视为否定，按「前否后肯」原则疑问尾用肯定；陈述句为 There is 结构，疑问尾用 is there。注意 there 作形式主语时，疑问尾主语要用 there 而非 it 或 they。' },
        { type: 'fill', question: 'Don\'t make noise in the library, ______ ______?', answer: 'will you', explanation: 'Don\'t make noise 为否定祈使句，其疑问尾固定用 won\'t you 的对应肯定形式 will you（或口语中也用 won\'t you，但标准答案为 will you）。祈使句不论肯定否定，疑问尾主语都用 you，故填 will you。' }
      ]
    }

  );
})();
