(function () {
  var v = gzGetVolume('chinese', 'zt1');
  if (!v) return;
  v.points.push(

    /* ===================== 现代文阅读Ⅱ · 小说阅读（一） ===================== */

    { id: 'zt1-u3-l1',    cover: 'assets/cover/chinese/zt1-u3-l1.svg',
    name: '《小说阅读（一）：思想内容、叙事艺术、情节、人物、环境、语言》', author: '高考复习', chapter: '现代文阅读Ⅱ · 小说阅读（一）', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、分析概括思想内容（主题思想与情感内涵）' },
        { type: 'paragraph', text: '小说是叙事性文学体裁，思想内容是阅读的核心。概括时要区分作者直接揭示的主题与通过形象暗示的主旨，避免贴标签式空泛概括。' },
        { type: 'keypoint', label: '思想内容的把握', text: '分析概括思想内容，要透过情节与人物，把握作者的<strong>主题思想</strong>与<strong>情感内涵</strong>。可抓住标题、关键句、人物命运与结尾点题句来归纳。' },
        { type: 'list', items: ['抓标题与开头结尾的点题句', '抓人物命运与关键抉择', '抓反复出现的意象与细节', '区分“直接揭示”与“形象暗示”'] },
        { type: 'heading', text: '二、理解鉴赏艺术特色（客观题形式）' },
        { type: 'paragraph', text: '高考常以客观题形式考查对小说艺术特色的理解与鉴赏，选项涉及叙述视角、表现手法、语言风格等，需在比读中辨明正误。' },
        { type: 'example', label: '客观题示范', text: '题干：下列对小说艺术特色的分析鉴赏，不正确的一项是？<br>选项设误常把<strong>“叙述视角”说错</strong>（如将第一人称说成全知），或把<strong>“手法”张冠李戴</strong>。正确解法是逐项回文，比对原文的叙述者身份与手法运用。' },
        { type: 'warn', label: '易错提醒', text: '客观题鉴赏艺术特色，最忌<strong>脱离文本凭印象</strong>。常见设误：弄错叙述视角、混淆表现手法、把“环境描写”的功效说错。务必<strong>逐项回文比对</strong>。' },
        { type: 'heading', text: '三、叙事艺术：叙述视角' },
        { type: 'paragraph', text: '叙述视角决定“谁在看、看到多少”，直接关系叙事的真实感与信息控制。' },
        { type: 'table', headers: ['视角类型', '叙述者', '特点与作用'], rows: [['第一人称（“我”）', '故事内人物', '限知视角，亲切真实，但受“我”视野限制'], ['第三人称有限', '跟随某人物', '客观克制，可制造悬念，信息受该人物限制'], ['第三人称全知', '隐身“上帝”', '自由切换时空与人物心理，交代全面']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">叙述视角对比</text><rect x="30" y="55" width="190" height="150" rx="8" fill="#7aa05a"/><text x="125" y="85" text-anchor="middle" font-size="14" fill="#fff">第一人称</text><text x="125" y="115" text-anchor="middle" font-size="12" fill="#fff">“我”限知</text><text x="125" y="137" text-anchor="middle" font-size="12" fill="#fff">亲切真实</text><text x="125" y="159" text-anchor="middle" font-size="12" fill="#fff">受限叙事</text><rect x="245" y="55" width="190" height="150" rx="8" fill="#c08168"/><text x="340" y="85" text-anchor="middle" font-size="14" fill="#fff">第三人称有限</text><text x="340" y="115" text-anchor="middle" font-size="12" fill="#fff">跟随一人物</text><text x="340" y="137" text-anchor="middle" font-size="12" fill="#fff">制造悬念</text><text x="340" y="159" text-anchor="middle" font-size="12" fill="#fff">客观克制</text><rect x="460" y="55" width="190" height="150" rx="8" fill="#9c4221"/><text x="555" y="85" text-anchor="middle" font-size="14" fill="#fff">第三人称全知</text><text x="555" y="115" text-anchor="middle" font-size="12" fill="#fff">上帝视角</text><text x="555" y="137" text-anchor="middle" font-size="12" fill="#fff">自由切换</text><text x="555" y="159" text-anchor="middle" font-size="12" fill="#fff">全面交代</text></svg>', caption: '三种叙述视角各有功能：第一人称限知显真实，第三人称有限制造悬念，全知视角全面自由。' },
        { type: 'heading', text: '四、叙事艺术：叙述技巧' },
        { type: 'paragraph', text: '叙述技巧指作者安排故事时序与呈现方式的方法，倒叙、插叙、补叙是常见类型。' },
        { type: 'list', items: ['倒叙：先写结局或关键片段，再回溯起因，制造悬念', '插叙：在主线中插入相关往事，补充背景', '补叙：篇末补充前文遗漏，使情节完整'] },
        { type: 'heading', text: '五、分析情节结构与技巧' },
        { type: 'paragraph', text: '情节是人物性格成长与矛盾展开的过程，分析须兼顾文本结构与技巧运用。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">情节结构：开端—发展—高潮—结局</text><rect x="30" y="70" width="130" height="50" rx="8" fill="#7aa05a"/><text x="95" y="100" text-anchor="middle" font-size="13" fill="#fff">开端</text><rect x="185" y="70" width="130" height="50" rx="8" fill="#c08168"/><text x="250" y="100" text-anchor="middle" font-size="13" fill="#fff">发展</text><rect x="340" y="70" width="130" height="50" rx="8" fill="#c0473a"/><text x="405" y="100" text-anchor="middle" font-size="13" fill="#fff">高潮</text><rect x="495" y="70" width="150" height="50" rx="8" fill="#9c4221"/><text x="570" y="100" text-anchor="middle" font-size="13" fill="#fff">结局</text><path d="M160 95 L183 95" stroke="#9c4221" stroke-width="3"/><path d="M315 95 L338 95" stroke="#9c4221" stroke-width="3"/><path d="M470 95 L493 95" stroke="#9c4221" stroke-width="3"/><text x="340" y="165" text-anchor="middle" font-size="13" fill="#555">矛盾逐步展开，高潮为冲突顶点</text></svg>', caption: '情节一般按开端、发展、高潮、结局推进，高潮是矛盾冲突最激烈之处。' },
        { type: 'table', headers: ['情节技巧', '作用'], rows: [['悬念', '设置疑问，激发阅读期待'], ['伏笔', '前文埋线索，使后文合理'], ['照应', '前后呼应，结构严密'], ['突转', '情节陡转，出人意料又合乎逻辑']] },
        { type: 'heading', text: '六、分析人物形象：性格、命运与典型意义' },
        { type: 'paragraph', text: '人物是小说的核心，分析应立足文本细节，避免概念化套用。' },
        { type: 'keypoint', label: '人物分析维度', text: '人物形象分析须从三方面入手：<strong>性格特征</strong>（人物是什么样的人）、<strong>命运轨迹</strong>（经历了什么）、<strong>典型意义</strong>（代表了哪类人、何种时代共性）。' },
        { type: 'list', items: ['性格特征：通过言行、心理、他人评价概括', '命运轨迹：人物经历与结局的走向', '典型意义：所代表的社会群体与时代共性'] },
        { type: 'heading', text: '七、分析环境描写：自然与社会' },
        { type: 'paragraph', text: '环境描写分为自然环境与社会环境，二者共同服务于人物与主题。' },
        { type: 'list', items: ['自然环境：烘托氛围、暗示人物命运', '社会环境：揭示时代背景、深化主题'] },
        { type: 'heading', text: '八、品味语言特色' },
        { type: 'paragraph', text: '小说语言兼具文学性与个性化，品味须从句段入手，细究遣词造句。' },
        { type: 'list', items: ['炼字：精准传神的动词、形容词', '句式：长短句、整散句的交错', '修辞：比喻、拟人、反复等', '语体：口语化或书面化风格'] },
        { type: 'tip', label: '学习提示', text: '复习小说阅读，建议动手画一张“要素关系图”：把人物、情节、环境、叙事、主题五者连起来，答题时按图索骥，不易漏点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">小说阅读要素关系</text><circle cx="340" cy="150" r="56" fill="#9c4221"/><text x="340" y="146" text-anchor="middle" font-size="14" fill="#fff">主题</text><text x="340" y="166" text-anchor="middle" font-size="12" fill="#fff">思想内容</text><rect x="40" y="135" width="120" height="44" rx="8" fill="#7aa05a"/><text x="100" y="162" text-anchor="middle" font-size="13" fill="#fff">人物形象</text><rect x="270" y="50" width="140" height="44" rx="8" fill="#c08168"/><text x="340" y="77" text-anchor="middle" font-size="13" fill="#fff">故事情节</text><rect x="520" y="135" width="120" height="44" rx="8" fill="#a8632e"/><text x="580" y="162" text-anchor="middle" font-size="13" fill="#fff">环境描写</text><rect x="270" y="200" width="140" height="40" rx="8" fill="#7a6fae"/><text x="340" y="225" text-anchor="middle" font-size="13" fill="#fff">叙事艺术</text><line x1="284" y1="150" x2="160" y2="157" stroke="#9c4221" stroke-width="2"/><line x1="340" y1="94" x2="340" y2="94" stroke="#9c4221" stroke-width="2"/><line x1="396" y1="150" x2="520" y2="157" stroke="#9c4221" stroke-width="2"/><line x1="340" y1="206" x2="340" y2="200" stroke="#9c4221" stroke-width="2"/></svg>', caption: '人物、情节、环境、叙事共同指向主题思想，四要素围绕中心交织成篇。' },
        { type: 'reading', text: '延伸思考：当小说采用第一人称“我”叙述时，作者为何有时又借“我”之口评论事件？这种“叙述者干预”对主题表达有何作用？' }
      ],
      exercises: [
        { type: 'choice', question: '小说采用“我”作为故事的讲述者，这种叙述视角属于？', options: ['第一人称限知视角', '第三人称全知视角', '第三人称有限视角', '客观旁观视角'], answer: '第一人称限知视角', explanation: '以“我”为讲述者的叙述即第一人称，叙述者所知限于自身见闻，属限知视角，给人亲切真实之感，但受“我”的视野限制。第三人称全知为上帝视角，有限则跟随某一人物，客观旁观并非标准术语。故选第一人称限知视角。' },
        { type: 'fill', question: '小说情节结构一般分为开端、__、高潮、结局四部分，矛盾在“高潮”处达到顶点。', answer: '发展', explanation: '情节结构通常分为开端、发展、高潮、结局四部分。开端介绍人物与背景，发展承接开端展开矛盾，高潮是冲突最激烈处，结局收束全文。题干所问第二阶段即“发展”，它承担推进矛盾、铺垫高潮的功能。' },
        { type: 'choice', question: '小说中反复描写“阴冷的秋风与枯叶”，其主要作用最可能是？', options: ['交代故事发生的精确时间', '烘托凄清氛围，暗示人物悲凉命运', '直接揭示文章中心论点', '说明当地的气候特征'], answer: '烘托凄清氛围，暗示人物悲凉命运', explanation: '自然环境描写常用于渲染氛围、烘托人物心情、暗示命运走向。阴冷秋风与枯叶营造凄清萧瑟之境，往往映射人物坎坷悲凉的处境，属烘托而非说明气候或交代精确时间，小说亦无“中心论点”。故选烘托氛围、暗示命运。' },
        { type: 'fill', question: '分析人物形象，既要概括其性格特征，也要把握其命运轨迹与__意义（典型性）。', answer: '典型', explanation: '小说人物分析包含三个维度：性格特征（人物怎样的人）、命运轨迹（经历与结局）、典型意义（所代表的群体或时代共性）。典型意义揭示人物为何“典型”，即能否概括一类人的共性，是人物形象题的高分要点。' },
        { type: 'choice', question: '下列说法属于“品味小说语言特色”范畴的是？', options: ['统计全文段落数量', '分析炼字、句式与修辞风格', '计算故事发生的总天数', '排列人物出场先后顺序'], answer: '分析炼字、句式与修辞风格', explanation: '语言特色题关注遣词造句，包括炼字（精准用字）、句式（长短整散）、修辞（比喻拟人等）与语体风格（口语书面）。统计段落、计算天数、排列出场顺序均属内容梳理，不属于语言品味范畴。故选炼字、句式与修辞风格。' }
      ]
    },

    /* ===================== 现代文阅读Ⅱ · 小说阅读（二） ===================== */

    { id: 'zt1-u3-l2',    cover: 'assets/cover/chinese/zt1-u3-l2.svg',
    name: '《小说阅读（二）：常见表现手法与意蕴探究》', author: '高考复习', chapter: '现代文阅读Ⅱ · 小说阅读（二）', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、常见表现手法概览' },
        { type: 'paragraph', text: '表现手法是作者为增强表达效果而运用的艺术技巧，熟练掌握常见手法及其作用，是小说阅读鉴赏的基础。' },
        { type: 'table', headers: ['表现手法', '解释'], rows: [['象征', '以具体意象寄寓抽象情感或理念'], ['对比', '正反对照，突出事物特征'], ['衬托', '以次要事物烘托主要事物'], ['伏笔与照应', '前文埋线索，后文呼应'], ['悬念', '设置疑问，吸引读者兴趣']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">表现手法图谱</text><circle cx="340" cy="130" r="52" fill="#9c4221"/><text x="340" y="126" text-anchor="middle" font-size="14" fill="#fff">表现手法</text><text x="340" y="146" text-anchor="middle" font-size="12" fill="#fff">五大类</text><rect x="40" y="55" width="150" height="44" rx="8" fill="#7aa05a"/><text x="115" y="82" text-anchor="middle" font-size="13" fill="#fff">象征</text><rect x="490" y="55" width="150" height="44" rx="8" fill="#c08168"/><text x="565" y="82" text-anchor="middle" font-size="13" fill="#fff">对比</text><rect x="40" y="150" width="150" height="44" rx="8" fill="#a8632e"/><text x="115" y="177" text-anchor="middle" font-size="13" fill="#fff">衬托</text><rect x="490" y="150" width="150" height="44" rx="8" fill="#7a6fae"/><text x="565" y="177" text-anchor="middle" font-size="13" fill="#fff">伏笔照应</text><rect x="265" y="200" width="150" height="44" rx="8" fill="#c0473a"/><text x="340" y="227" text-anchor="middle" font-size="13" fill="#fff">悬念</text><line x1="290" y1="110" x2="190" y2="80" stroke="#9c4221" stroke-width="2"/><line x1="390" y1="110" x2="490" y2="80" stroke="#9c4221" stroke-width="2"/><line x1="290" y1="150" x2="190" y2="170" stroke="#9c4221" stroke-width="2"/><line x1="390" y1="150" x2="490" y2="170" stroke="#9c4221" stroke-width="2"/><line x1="340" y1="182" x2="340" y2="200" stroke="#9c4221" stroke-width="2"/></svg>', caption: '五大常见表现手法各有侧重，鉴赏时须点明手法名称、运用方式与表达效果。' },
        { type: 'heading', text: '二、象征：以具体意象寄寓抽象情感' },
        { type: 'paragraph', text: '象征通过具体物象寄寓深层意涵，使作品含蓄蕴藉、耐人寻味。' },
        { type: 'keypoint', label: '象征的要点', text: '象征是用<strong>具体意象</strong>表现<strong>抽象情感或理念</strong>，使形象含蓄深远。须区分“意象本身”与“象征义”，作答时要点明“借何物象征何意”。' },
        { type: 'example', label: '象征示范', text: '《海燕》中以“海燕”象征<strong>勇敢无畏的革命先驱</strong>，以“暴风雨”象征<strong>即将到来的革命风暴</strong>。作答时应写清：借何物、象征何意、寄寓何种情感。' },
        { type: 'heading', text: '三、对比与衬托' },
        { type: 'paragraph', text: '对比与衬托都涉及事物并置，但逻辑关系不同，须细心辨析。' },
        { type: 'list', items: ['对比：两事物并列对立，地位相当，凸显差异', '衬托：以宾衬主，主次分明，突出主体', '对比重“辨异”，衬托重“显主”', '二者可综合运用，但逻辑起点不同'] },
        { type: 'warn', label: '易混淆点', text: '<strong>对比</strong>与<strong>衬托</strong>常被混用：对比是二者<strong>并列对立</strong>、地位相当；衬托是<strong>以宾衬主</strong>、主次分明。辨析时要看是否存在明确的“主”与“宾”。' },
        { type: 'heading', text: '四、伏笔与照应' },
        { type: 'paragraph', text: '伏笔与照应是结构技巧，保证情节的前后勾连与合理性。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">伏笔与照应</text><rect x="40" y="70" width="190" height="50" rx="8" fill="#c08168"/><text x="135" y="100" text-anchor="middle" font-size="13" fill="#fff">前文埋下伏笔</text><rect x="450" y="70" width="190" height="50" rx="8" fill="#7aa05a"/><text x="545" y="100" text-anchor="middle" font-size="13" fill="#fff">后文与之照应</text><path d="M230 95 L448 95" stroke="#9c4221" stroke-width="3"/><text x="340" y="90" text-anchor="middle" font-size="16" fill="#9c4221">→</text><text x="340" y="160" text-anchor="middle" font-size="13" fill="#555">前文设线索，后文呼应，使结构严密</text></svg>', caption: '伏笔在前文预设线索，照应在后文回应，二者配合令情节合理自然。' },
        { type: 'example', label: '伏笔照应示范', text: '前文写“他临行前反复擦拭那把旧钥匙”，后文“用旧钥匙打开密室”与之<strong>照应</strong>。这一伏笔使结局水到渠成，避免了突兀，体现了结构的前后勾连。' },
        { type: 'heading', text: '五、悬念：设置疑问，吸引读者' },
        { type: 'paragraph', text: '悬念通过延迟揭晓关键信息，维持读者的阅读张力。' },
        { type: 'list', items: ['开头设疑：开篇抛出问题，引发好奇', '中途延宕：暂时不揭晓，保持张力', '多层悬念：大小悬念交织，层层推进'] },
        { type: 'heading', text: '六、探究作品意蕴：主旨、人性、时代' },
        { type: 'paragraph', text: '意蕴探究是小说阅读的高阶能力，要求从文字表层走向精神深层。' },
        { type: 'keypoint', label: '意蕴探究维度', text: '意蕴探究要由表及里：<strong>表层</strong>抓主旨，<strong>中层</strong>析人性，<strong>深层</strong>联时代。须立足文本，不架空、不牵强。' },
        { type: 'list', items: ['主旨层：文本写了什么、表达什么情感', '人性层：人物命运折射的人性光辉或困境', '时代层：作品反映的社会背景与历史命题'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">意蕴探究的三个层次</text><rect x="180" y="50" width="320" height="46" rx="8" fill="#7aa05a"/><text x="340" y="78" text-anchor="middle" font-size="13" fill="#fff">表层：文本主旨（写了什么）</text><rect x="180" y="110" width="320" height="46" rx="8" fill="#c08168"/><text x="340" y="138" text-anchor="middle" font-size="13" fill="#fff">中层：人性与精神内核</text><rect x="180" y="170" width="320" height="46" rx="8" fill="#9c4221"/><text x="340" y="198" text-anchor="middle" font-size="13" fill="#fff">深层：时代背景与社会意义</text><path d="M340 96 L340 108" stroke="#9c4221" stroke-width="2"/><path d="M340 156 L340 168" stroke="#9c4221" stroke-width="2"/></svg>', caption: '意蕴探究由表及里：主旨—人性—时代，三层递进展现文本深层价值。' },
        { type: 'tip', label: '学习提示', text: '做表现手法题，先判定“用了什么手法”，再答“如何运用、有何效果、服务什么内容”，三步法最稳妥。' },
        { type: 'reading', text: '延伸思考：象征手法若用得过隐晦，是否会削弱主题表达？请结合具体作品谈谈“含蓄”与“明确”之间的平衡。' }
      ],
      exercises: [
        { type: 'choice', question: '小说以“暴风雨中的海燕”象征勇敢无畏的革命者，这种手法是？', options: ['对比', '象征', '衬托', '悬念'], answer: '象征', explanation: '象征是用具体可感的意象寄寓抽象的情感或理念，使形象含蓄深沉。“海燕”这一具体物象承载勇敢无畏的革命精神，正是以物喻理的象征手法。对比强调对照，衬托以宾衬主，悬念设置疑问，均不符，故选象征。' },
        { type: 'fill', question: '前文为后文埋下线索叫“伏笔”，后文与前文形成呼应叫“__”。', answer: '照应', explanation: '伏笔与照应是小说常用的结构技巧：前文预先埋设线索（伏笔），后文在适当处予以呼应（照应），二者配合使情节严密、合乎逻辑。题干所问“后文与前文呼应”即“照应”，它与伏笔共同构成完整的呼应关系。' },
        { type: 'choice', question: '“以巍峨高山烘托人物的渺小”，这属于？', options: ['对比', '衬托', '象征', '悬念'], answer: '衬托', explanation: '衬托是用次要事物烘托主要事物，使主体特征更鲜明。“高山”为宾，“人物渺小”为主，以山之高衬人之小，属以宾衬主的衬托。对比强调正反两事物并列对立，此处主宾分明并非对等对照，故为衬托而非对比。' },
        { type: 'fill', question: '探究作品意蕴应从主旨、人性与__三个层面逐层深入。', answer: '时代', explanation: '意蕴探究须由表及里：表层抓文本主旨（写了什么、表达什么情感），中层析人性与精神内核（人物命运折射的人性），深层联时代背景与社会意义（作品反映的时代命题）。题干所缺第三层面即“时代”。' },
        { type: 'choice', question: '小说开篇即写“那封信究竟写了什么，没人知晓”，其作用是？', options: ['交代结局', '设置悬念，吸引读者', '点明主题', '描写环境'], answer: '设置悬念，吸引读者', explanation: '悬念是故意留下疑问暂不解答，以激发读者阅读期待与探究兴趣。“那封信写了什么，没人知晓”刻意掩藏关键信息，制造未知，属典型悬念手法。它并不交代结局、点明主题或描写环境，故选设置悬念、吸引读者。' }
      ]
    }

  );
})();
