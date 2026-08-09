(function () {
  var v = gzGetVolume('chinese', 'zt1');
  if (!v) return;
  v.points.push(

    /* ===================== 现代文阅读Ⅱ · 散文阅读 ===================== */

    { id: 'zt1-u4-l1',    cover: 'assets/cover/chinese/zt1-u4-l1.svg',
    name: '《散文阅读：结构思路、内容形象、语言技巧与深层意蕴》', author: '高考复习', chapter: '现代文阅读Ⅱ · 散文阅读', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、抓住散文线索，理清作者思路' },
        { type: 'paragraph', text: '散文讲究“形散神聚”，材料看似自由散落，却始终被一条红线串联。这条红线就是线索。抓住线索，才能理清作者的行文思路，进而把握全文主旨。' },
        { type: 'keypoint', label: '线索的作用', text: '线索是散文的“经脉”：它把零散的人、事、景、情<strong>串联成有机整体</strong>，既体现作者思路，又指向中心主旨。读散文先找线索，等于拿到了进入文本的钥匙。' },
        { type: 'list', items: ['人物线索：以某个人物的行踪或遭遇贯穿全文', '事件线索：以一个核心事件的起因、经过、结果串连', '物品线索：以某一具体物件（如灯、信、老屋）为寄托', '情感线索：以作者情感的变化起伏为脉络', '时间线索：按时间推移或季节流转展开', '空间线索：以游踪、地点转换为顺序'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">散文线索的六种类型</text><rect x="40" y="60" width="180" height="46" rx="8" fill="#7aa05a"/><text x="130" y="88" text-anchor="middle" font-size="13" fill="#fff">人物线索</text><rect x="250" y="60" width="180" height="46" rx="8" fill="#c08168"/><text x="340" y="88" text-anchor="middle" font-size="13" fill="#fff">事件线索</text><rect x="460" y="60" width="180" height="46" rx="8" fill="#a8632e"/><text x="550" y="88" text-anchor="middle" font-size="13" fill="#fff">物品线索</text><rect x="40" y="130" width="180" height="46" rx="8" fill="#9c4221"/><text x="130" y="158" text-anchor="middle" font-size="13" fill="#fff">情感线索</text><rect x="250" y="130" width="180" height="46" rx="8" fill="#7a6fae"/><text x="340" y="158" text-anchor="middle" font-size="13" fill="#fff">时间线索</text><rect x="460" y="130" width="180" height="46" rx="8" fill="#c0473a"/><text x="550" y="158" text-anchor="middle" font-size="13" fill="#fff">空间线索</text><text x="340" y="210" text-anchor="middle" font-size="13" fill="#555">线索是串联“形散”材料的红线，指向中心主旨</text></svg>', caption: '散文线索常见六类：人物、事件、物品、情感、时间、空间，各自串起不同的材料。' },
        { type: 'heading', text: '二、概括内容与形象，紧扣主旨分析' },
        { type: 'paragraph', text: '散文的内容与形象分析，须建立在把握文体特点的基础上。散文多写真人真事、真情真景，概括时不能脱离文本，更须紧扣中心主旨。' },
        { type: 'example', label: '解题示范', text: '题干要求“概括文中母亲的形象”。<br>正确做法：回文圈画描写母亲的言行细节与作者评价，<strong>提炼为“勤劳坚韧、隐忍慈爱”等要点</strong>，每点附原文依据，而非笼统说“很好”。' },
        { type: 'list', items: ['定位相关段落，区分叙述与描写', '提取刻画人物、景物的关键词句', '由表及里，归纳形象特征与情感', '每个要点回扣主旨，避免游离'] },
        { type: 'table', headers: ['分析对象', '关注要点'], rows: [['写人散文', '言行细节、他人评价、作者态度'], ['写景散文', '景物特征、情感投射、象征意义'], ['状物散文', '对象特点、借物抒怀、托物言志']] },
        { type: 'heading', text: '三、形散神聚：散文的核心文体特征' },
        { type: 'paragraph', text: '“形散”指取材广泛自由、表达方式灵活；“神聚”指无论材料如何铺展，都围绕一个中心主旨凝聚。理解这一点，是读懂散文的关键。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">形散与神聚的关系</text><text x="340" y="55" text-anchor="middle" font-size="13" fill="#555">“形散”——材料自由多样</text><rect x="40" y="70" width="100" height="40" rx="6" fill="#7aa05a"/><text x="90" y="95" text-anchor="middle" font-size="12" fill="#fff">叙事</text><rect x="155" y="70" width="100" height="40" rx="6" fill="#7aa05a"/><text x="205" y="95" text-anchor="middle" font-size="12" fill="#fff">写景</text><rect x="270" y="70" width="100" height="40" rx="6" fill="#7aa05a"/><text x="320" y="95" text-anchor="middle" font-size="12" fill="#fff">抒情</text><rect x="385" y="70" width="100" height="40" rx="6" fill="#7aa05a"/><text x="435" y="95" text-anchor="middle" font-size="12" fill="#fff">议论</text><rect x="500" y="70" width="100" height="40" rx="6" fill="#7aa05a"/><text x="550" y="95" text-anchor="middle" font-size="12" fill="#fff">描写</text><path d="M90 110 L340 175" stroke="#9c4221" stroke-width="2"/><path d="M205 110 L340 175" stroke="#9c4221" stroke-width="2"/><path d="M320 110 L340 175" stroke="#9c4221" stroke-width="2"/><path d="M435 110 L340 175" stroke="#9c4221" stroke-width="2"/><path d="M550 110 L340 175" stroke="#9c4221" stroke-width="2"/><rect x="240" y="175" width="200" height="50" rx="8" fill="#9c4221"/><text x="340" y="205" text-anchor="middle" font-size="14" fill="#fff">神聚：中心主旨</text><text x="340" y="245" text-anchor="middle" font-size="12" fill="#555">多种材料都向中心主旨凝聚</text></svg>', caption: '“形散”是材料的自由多样，“神聚”是主旨的集中统一，二者以线索相连。' },
        { type: 'keypoint', label: '形散与神聚', text: '“形散”表现为<strong>题材广、手法活、结构松</strong>；“神聚”表现为<strong>中心明确、情感统一、线索清晰</strong>。判断一篇散文，看它是否“散得开、收得拢”。' },
        { type: 'warn', label: '易错提醒', text: '概括内容最忌<strong>脱离主旨、就事论事</strong>。散文的每个片段都服务于中心，答题时须点明该内容如何呼应主旨，否则只是“复述原文”而非“分析”。' },
        { type: 'heading', text: '四、品味语言与技巧，披文入境' },
        { type: 'paragraph', text: '散文语言讲究炼字炼句，富有文采与意境。品味语言与技巧，要“披文以入情”，从字句入手，多维解读其表达效果。' },
        { type: 'list', items: ['炼字：关注动词、形容词的准确与生动', '修辞：比喻、拟人、排比等增强感染力', '句式：长短句、整散句营造节奏', '表现手法：象征、虚实、衬托、以小见大'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">散文语言特色四维度</text><rect x="40" y="60" width="140" height="50" rx="8" fill="#7aa05a"/><text x="110" y="90" text-anchor="middle" font-size="13" fill="#fff">炼字</text><rect x="195" y="60" width="140" height="50" rx="8" fill="#c08168"/><text x="265" y="90" text-anchor="middle" font-size="13" fill="#fff">修辞</text><rect x="350" y="60" width="140" height="50" rx="8" fill="#a8632e"/><text x="420" y="90" text-anchor="middle" font-size="13" fill="#fff">句式</text><rect x="505" y="60" width="140" height="50" rx="8" fill="#9c4221"/><text x="575" y="90" text-anchor="middle" font-size="13" fill="#fff">意境</text><text x="110" y="135" text-anchor="middle" font-size="11" fill="#555">动词形容词的准确生动</text><text x="265" y="135" text-anchor="middle" font-size="11" fill="#555">比喻拟人排比等</text><text x="420" y="135" text-anchor="middle" font-size="11" fill="#555">长短整散的节奏</text><text x="575" y="135" text-anchor="middle" font-size="11" fill="#555">情景交融的画面感</text><rect x="180" y="170" width="320" height="44" rx="8" fill="#7a6fae"/><text x="340" y="197" text-anchor="middle" font-size="13" fill="#fff">核心：炼字炼句，文采与意境统一</text></svg>', caption: '语言特色可从炼字、修辞、句式、意境四个维度赏析。' },
        { type: 'keypoint', label: '语言特色', text: '散文语言注重<strong>炼字炼句</strong>，追求<strong>文采与意境</strong>的统一。赏析时要指出“用什么手法、写什么内容、达什么效果、蕴什么情感”。' },
        { type: 'example', label: '品味示范', text: '“月光如流水一般，静静地泻在这一片叶子和花上。”<br>“泻”字化静为动，<strong>写出月光的流动感与柔美</strong>，比“照”“洒”更具意境，体现作者淡淡的喜悦。' },
        { type: 'heading', text: '五、分析深层意蕴，把握内涵' },
        { type: 'paragraph', text: '深层意蕴是散文的“言外之意”。分析时要由表层情节深入到民族心理、人生哲理、文化传统等层面，把握作品的精神内涵。' },
        { type: 'list', items: ['由物及理：从具体意象通向普遍哲理', '由情及思：从个人情感上升到人生感悟', '由文及世：联系时代背景理解社会意蕴'] },
        { type: 'keypoint', label: '意蕴层面', text: '意蕴可从<strong>表层（写了什么）、深层（为何写）、哲学层（普遍启示）</strong>三层掘进。探究题常要求“从不同角度和层面发掘”。' },
        { type: 'tip', label: '学习提示', text: '赏析散文建议“三步读”：初读抓线索与主旨，再读品语言与形象，三读挖意蕴与情感。层层深入，方能披文入境、融会贯通。' },
        { type: 'reading', text: '延伸思考：一篇散文的“神”（主旨）是否只能有一个？当作者情感复杂矛盾时，如何理解“形散神聚”中的“神聚”？' }
      ],
      exercises: [
        { type: 'choice', question: '下列关于散文“形散神聚”的表述，正确的一项是？', options: ['形散指中心分散', '神聚指材料自由散落', '形散指取材广泛自由，神聚指围绕中心主旨', '散文没有线索'], answer: '形散指取材广泛自由，神聚指围绕中心主旨', explanation: '散文“形散”指取材广泛自由、表达方式灵活；“神聚”指无论材料如何铺展，都始终围绕一个中心主旨凝聚。线索正是串起散落材料、指向主旨的红线。其余三项或颠倒概念、或否定线索，均错误，故选“形散指取材广泛自由，神聚指围绕中心主旨”。' },
        { type: 'fill', question: '散文的线索可分为人物、事件、物品、情感、时间、__等六种类型。', answer: '空间', explanation: '散文线索是串联材料的红线，常见六类：人物线索（行踪遭遇）、事件线索（核心事件）、物品线索（具体物件）、情感线索（情感起伏）、时间线索（时间推移）、空间线索（游踪地点）。题干已列前五类，所缺为“空间”，故填“空间”。' },
        { type: 'choice', question: '下列哪一特征最能体现散文的语言特色？', options: ['大量使用文言虚词', '注重炼字炼句，讲究文采与意境', '句式单一呆板', '不用任何修辞'], answer: '注重炼字炼句，讲究文采与意境', explanation: '散文语言注重炼字炼句，追求文采与意境的统一，常借助准确生动的动词形容词、比喻拟人等修辞、灵活多变的句式营造画面与情感。其余三项或不符散文语体，或与“讲究文采”背道而驰，故选“注重炼字炼句，讲究文采与意境”。' },
        { type: 'fill', question: '分析散文深层意蕴，应从表层（写了什么）、深层（为何写）和__层（普遍启示）三层掘进。', answer: '哲学', explanation: '散文深层意蕴具有层次性：表层写“是什么内容”，深层写“为何而写、寄托何种情感”，哲学层则通向普遍的人生哲理与民族心理启示。探究题常要求“从不同角度和层面发掘作品的意蕴”，正对应这三层。题干所缺为“哲学”层，故填“哲学”。' },
        { type: 'choice', question: '概括散文中的人物形象，最恰当的做法是？', options: ['凭印象笼统评价', '直接抄录最长段落', '回文提取细节，归纳特征并回扣主旨', '只答作者姓名'], answer: '回文提取细节，归纳特征并回扣主旨', explanation: '概括散文形象须先回文定位相关描写，圈画刻画人物言行的关键词句与作者评价，再提炼为“勤劳坚韧”等特征要点，且每点都应回扣文章主旨，避免游离。凭印象、照抄、答非所问均不得要领，故选“回文提取细节，归纳特征并回扣主旨”。' }
      ]
    },

    /* ===================== 现代文阅读 · 能力层级与备考 ===================== */

    { id: 'zt1-u4-l2',    cover: 'assets/cover/chinese/zt1-u4-l2.svg',
    name: '《现代文阅读能力层级总览与分值备考》', author: '高考复习', chapter: '现代文阅读 · 能力层级与备考', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、高考语文的六种能力层级' },
        { type: 'paragraph', text: '高考语文以能力立意命题，将考核目标由低到高分为六级。层级越高，对思维深度和综合运用能力的要求也越高。' },
        { type: 'list', items: ['A 识记：识别和记忆，是最基础的能力', 'B 理解：领会词句含义与文本意思', 'C 分析综合：分解、筛选并整合信息', 'D 表达应用：运用语文知识进行表达', 'E 鉴赏评价：审美鉴赏与价值评价', 'F 探究：多层次、有创见地发掘'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">高考语文能力层级（金字塔）</text><polygon points="340,50 250,92 430,92" fill="#9c4221"/><text x="340" y="82" text-anchor="middle" font-size="12" fill="#fff">F 探究</text><polygon points="340,97 225,139 455,139" fill="#7a6fae"/><text x="340" y="129" text-anchor="middle" font-size="12" fill="#fff">E 鉴赏评价</text><polygon points="340,144 200,186 480,186" fill="#c08168"/><text x="340" y="176" text-anchor="middle" font-size="12" fill="#fff">D 表达应用</text><polygon points="340,191 175,233 505,233" fill="#a8632e"/><text x="340" y="223" text-anchor="middle" font-size="12" fill="#fff">C 分析综合</text><polygon points="340,238 150,280 530,280" fill="#7aa05a"/><text x="340" y="270" text-anchor="middle" font-size="12" fill="#fff">B 理解　·　A 识记</text></svg>', caption: '能力层级由低到高：A识记、B理解、C分析综合、D表达应用、E鉴赏评价、F探究。' },
        { type: 'heading', text: '二、现代文阅读对应的能力层级' },
        { type: 'paragraph', text: '现代文阅读（含信息类与文学类）主要考查理解、分析综合、鉴赏评价、探究四个层级，各层级对应不同的试题类型与思维要求。' },
        { type: 'table', headers: ['层级', '考查内容'], rows: [['理解（B）', '理解文中重要概念的含义；理解文中重要句子的含义'], ['分析综合（C）', '筛选并整合文中的信息；分析文章结构，把握文章思路；归纳内容要点，概括中心意思；分析概括作者在文中的观点态度'], ['鉴赏评价（E）', '鉴赏文学作品的形象、语言和表达技巧；评价文章的思想内容和作者的观点态度'], ['探究（F）', '从不同角度和层面发掘作品的意蕴；探讨作品的创作背景和作者的创作意图；对作品进行个性化阅读和有创意的解读']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">现代文阅读四大能力层级</text><rect x="40" y="55" width="145" height="60" rx="8" fill="#7aa05a"/><text x="112" y="82" text-anchor="middle" font-size="14" fill="#fff">B 理解</text><text x="112" y="102" text-anchor="middle" font-size="11" fill="#fff">概念·句意</text><rect x="195" y="55" width="145" height="60" rx="8" fill="#c08168"/><text x="267" y="82" text-anchor="middle" font-size="14" fill="#fff">C 分析综合</text><text x="267" y="102" text-anchor="middle" font-size="11" fill="#fff">信息·结构</text><rect x="350" y="55" width="145" height="60" rx="8" fill="#a8632e"/><text x="422" y="82" text-anchor="middle" font-size="14" fill="#fff">E 鉴赏评价</text><text x="422" y="102" text-anchor="middle" font-size="11" fill="#fff">形象·技巧</text><rect x="505" y="55" width="145" height="60" rx="8" fill="#9c4221"/><text x="577" y="82" text-anchor="middle" font-size="14" fill="#fff">F 探究</text><text x="577" y="102" text-anchor="middle" font-size="11" fill="#fff">意蕴·创见</text><text x="340" y="155" text-anchor="middle" font-size="13" fill="#555">信息类文本偏重 B、C</text><text x="340" y="180" text-anchor="middle" font-size="13" fill="#555">文学类文本（散文/小说）偏重 E、F</text><text x="340" y="215" text-anchor="middle" font-size="12" fill="#9c4221">四级由低到高，探究为最高层级</text></svg>', caption: '现代文阅读聚焦 B、C、E、F 四级，信息类偏重理解与分析，文学类偏重鉴赏与探究。' },
        { type: 'keypoint', label: '层级与文本对应', text: '现代文阅读Ⅰ（信息类）以<strong>理解（B）和分析综合（C）</strong>为主；现代文阅读Ⅱ（文学类）以<strong>鉴赏评价（E）和探究（F）</strong>为主。但同一文本也可能跨层级设题。' },
        { type: 'heading', text: '三、各能力层级在试题中的体现' },
        { type: 'list', items: ['理解（B）：解释词语语境义、句子含义', '分析综合（C）：梳理结构思路、概括要点', '鉴赏评价（E）：赏析形象语言技巧、评价主旨', '探究（F）：发掘意蕴、探讨意图、个性化解读'] },
        { type: 'example', label: '层级识别示范', text: '题目：“请分析文中画线句子运用了何种修辞手法及其表达效果。”<br>该题要求<strong>辨识技巧并评价其效果</strong>，属于<strong>鉴赏评价（E）</strong>层级，作答须点明手法、内容、情感三层。' },
        { type: 'warn', label: '易错提醒', text: '最易混淆的是<strong>分析综合（C）与探究（F）</strong>：概括文章要点属 C，而从不同角度发掘意蕴、提出个人见解属 F。答探究题若只“复述原文”而未“延展阐发”，便降格为 C 层，难以得分。' },
        { type: 'heading', text: '四、附录·现代文阅读分值参考' },
        { type: 'paragraph', text: '了解分值分布，有助于合理分配答题时间与精力。新高考现代文阅读整体约占 36 分，分为信息类与文学类两大板块。' },
        { type: 'table', headers: ['板块', '分值与题量'], rows: [['现代文阅读（合计）', '约 36 分'], ['现代文阅读Ⅰ（信息类）', '约 19 分（3—4 题，含选择+简答）'], ['现代文阅读Ⅱ（文学类）', '约 17 分（3—4 题，含选择+简答）']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">新高考现代文阅读分值结构</text><text x="50" y="72" font-size="13" fill="#555">阅读总板块</text><rect x="200" y="56" width="360" height="30" rx="6" fill="#9c4221"/><text x="568" y="76" font-size="13" fill="#9c4221">约36分</text><text x="50" y="122" font-size="13" fill="#555">阅读Ⅰ 信息类</text><rect x="200" y="106" width="190" height="30" rx="6" fill="#7aa05a"/><text x="398" y="126" font-size="13" fill="#3d5a2a">约19分</text><text x="50" y="172" font-size="13" fill="#555">阅读Ⅱ 文学类</text><rect x="200" y="156" width="170" height="30" rx="6" fill="#c08168"/><text x="378" y="176" font-size="13" fill="#a8632e">约17分</text><text x="340" y="225" text-anchor="middle" font-size="12" fill="#555">文学类（散文/小说）与信息类分值大体相当</text></svg>', caption: '新高考现代文阅读约 36 分，信息类约 19 分、文学类约 17 分，均含选择与简答。' },
        { type: 'heading', text: '五、备考策略建议' },
        { type: 'list', items: ['辨层级：先判断每题所属能力层级，再按层级要求作答', '分板块练：信息类重速读与比对，文学类重品读与阐发', '建模板：归纳各题型答题角度，形成规范表述', '重真题：以高考真题为蓝本，体会设题逻辑', '控时间：选择题求稳、简答题分条、探究题留足篇幅'] },
        { type: 'keypoint', label: '备考要诀', text: '现代文阅读的提分关键在<strong>“分层训练、规范表达”</strong>：把 B、C、E、F 各层级的答题套路练熟，考场上才能快速定位、准确落笔。' },
        { type: 'tip', label: '学习提示', text: '建议用“错题—层级”对照表：每道错题标出它对应的能力层级，统计薄弱层级，再针对性集中突破，比盲目刷题更高效。' },
        { type: 'reading', text: '延伸思考：当一道文学类简答题同时要求“概括形象”与“谈你的理解”，它跨了哪几个能力层级？答题时该如何分配概括与分析的比重？' }
      ],
      exercises: [
        { type: 'choice', question: '下列关于高考语文能力层级的表述，正确的一项是？', options: ['A 识记是最高层级', 'F 探究是最高层级', 'D 表达应用低于 B 理解', 'E 鉴赏评价低于 C 分析综合'], answer: 'F 探究是最高层级', explanation: '高考语文能力层级由低到高为 A识记、B理解、C分析综合、D表达应用、E鉴赏评价、F探究，层级越高对思维要求越高。探究（F）位于金字塔顶端，是最高层级，要求多角度有创见地发掘作品意蕴。其他三项表述层级关系颠倒，故选“F 探究是最高层级”。' },
        { type: 'fill', question: '现代文阅读Ⅱ（文学类文本）主要考查鉴赏评价（E）与__（F）两个层级。', answer: '探究', explanation: '文学类文本（散文、小说）以形象、语言、技巧和意蕴取胜，对应高考能力层级中的鉴赏评价（E）与探究（F）。E侧重审美鉴赏与价值评价，F侧重从不同角度发掘意蕴、进行个性化解读，二者构成文学类阅读的高阶考查。故填“探究”。' },
        { type: 'choice', question: '下列内容属于“理解（B）”层级考查的是？', options: ['筛选并整合文中信息', '鉴赏文学作品语言技巧', '理解文中重要句子的含义', '探讨作者创作意图'], answer: '理解文中重要句子的含义', explanation: '理解（B）层级包括“理解文中重要概念的含义”和“理解文中重要句子的含义”。筛选整合信息属分析综合（C），鉴赏语言技巧属鉴赏评价（E），探讨创作意图属探究（F）。题干问“理解（B）”，只有“理解文中重要句子的含义”契合，故选该项。' },
        { type: 'fill', question: '新高考现代文阅读总分约__分，其中信息类（阅读Ⅰ）约19分，文学类（阅读Ⅱ）约17分。', answer: '36', explanation: '新高考语文现代文阅读板块总分约36分，由现代文阅读Ⅰ（信息类文本，约19分，3—4题）与现代文阅读Ⅱ（文学类文本，约17分，3—4题）两部分构成，题型均含选择题与简答题。题干已给出19与17，二者相加为36，故填“36”。' },
        { type: 'choice', question: '下列关于现代文阅读备考的说法，最恰当的是？', options: ['信息类只需死记硬背', '文学类不必关注主旨', '应区分层级要求，针对性训练', '探究题有唯一标准答案'], answer: '应区分层级要求，针对性训练', explanation: '现代文阅读不同题型对应不同能力层级：信息类重理解与分析综合，文学类重鉴赏评价与探究。备考须先辨清每题所属层级，再针对性训练相应能力，方能高效提分。死记硬背、忽略主旨、追求唯一答案均违背文学类阅读规律，故选“应区分层级要求，针对性训练”。' }
      ]
    }

  );
})();
