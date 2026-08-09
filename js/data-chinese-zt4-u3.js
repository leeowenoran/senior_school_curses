(function () {
  var v = gzGetVolume('chinese', 'zt4');
  if (!v) return;
  v.points.push(

    /* ===================== 第五部分 · 常见文体与题型专项 ===================== */

    { id: 'zt4-u3-l1',    cover: 'assets/cover/chinese/zt4-u3-l1.svg',
    name: '写作专题（五）：常见文体与题型专项', author: '高考复习', chapter: '第五部分 · 常见文体与题型专项', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体图谱总览' },
        { type: 'paragraph', text: '高考作文虽以议论文为主流，但任务驱动型常指定书信、演讲稿、倡议书等实用文体，也可能要求写记叙文或驳论文。动笔前先判定文体，再对号入座用对应写法，是拿稳基础分的前提。' },
        { type: 'table', headers: ['文体/题型', '核心特征与写作要点'], rows: [['议论文（主流）', '三要素：论点鲜明、论据有力、论证严谨；论证方法含举例、道理、对比、比喻、因果'], ['记叙文', '六要素：时间、地点、人物、起因、经过、结果；技巧：以小见大、细节描写、情感真挚'], ['书信/演讲稿/倡议书', '格式规范（称呼、问候、正文、祝颂、署名、日期）；语气须符合受众身份'], ['驳论文', '树靶子→打靶子→立观点；逻辑方法：归谬法、以子之矛攻子之盾'], ['材料作文（思辨型）', '核心在“辩证统一”：A是什么→B是什么→辩证关系→现实启示']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">常见文体与题型五型</text><rect x="40" y="55" width="190" height="42" rx="6" fill="#1f5f8b"/><text x="135" y="81" text-anchor="middle" font-size="12" fill="#fff">议论文</text><rect x="245" y="55" width="190" height="42" rx="6" fill="#4a8fa8"/><text x="340" y="81" text-anchor="middle" font-size="12" fill="#fff">记叙文</text><rect x="450" y="55" width="190" height="42" rx="6" fill="#c07f4e"/><text x="545" y="81" text-anchor="middle" font-size="12" fill="#fff">书信演讲</text><rect x="40" y="115" width="190" height="42" rx="6" fill="#7aa05a"/><text x="135" y="141" text-anchor="middle" font-size="12" fill="#fff">驳论文</text><rect x="245" y="115" width="190" height="42" rx="6" fill="#7a6fae"/><text x="340" y="141" text-anchor="middle" font-size="12" fill="#fff">思辨型材料</text><rect x="450" y="115" width="190" height="42" rx="6" fill="#b04a4a"/><text x="545" y="141" text-anchor="middle" font-size="12" fill="#fff">倡议书</text><text x="340" y="195" text-anchor="middle" font-size="13" fill="#555">先判文体，再对号入座用对应写法</text></svg>', caption: '常见文体与题型五型：议论文、记叙文、书信/演讲稿/倡议书、驳论文、思辨型材料作文。' },
        { type: 'heading', text: '二、议论文（主流文体）' },
        { type: 'paragraph', text: '议论文以说理为主，是高考最常见的要求。三要素必须齐备：论点要鲜明、论据要有力、论证要严谨。' },
        { type: 'keypoint', label: '五种论证方法', text: '<strong>举例论证</strong>（用事实说话）、<strong>道理论证</strong>（引名言原理）、<strong>对比论证</strong>（正反对照）、<strong>比喻论证</strong>（取喻明理）、<strong>因果论证</strong>（析因明果）。五种方法宜交错使用，避免通篇只举例。' },
        { type: 'list', items: ['论点：须是一句明确的判断，置于段首或篇首醒目处', '论据：事实论据要典型真实，理论论据要权威准确', '论证：用上述五法把论据与论点焊接，杜绝“例子堆砌”', '一篇好议论文 = 鲜明论点 + 有力论据 + 严谨论证'] },
        { type: 'heading', text: '三、记叙文' },
        { type: 'paragraph', text: '记叙文以叙事抒情为主，在“文体不限”或明确要求记叙时适用。打动阅卷者的不是辞藻，而是真情与细节。' },
        { type: 'list', items: ['六要素：时间、地点、人物、起因、经过、结果，缺一不可骨架', '以小见大：借一件小事折射大主题，避免空泛抒情', '细节描写：一个动作、一句台词、一处环境，胜过千言议论', '情感真挚：写自己真有触动的事，伪情最易被识破'] },
        { type: 'example', label: '记叙文示范', text: '写“家风”：不空谈“我家很温暖”，而写“奶奶每餐必等齐人才动筷，那双抚过碗沿的手，教会我‘等人’二字的分量”。<br>——一个细节（等齐人动筷）承载主题（家风中的尊重），以小见大、情感真挚，远胜口号式抒情。' },
        { type: 'heading', text: '四、书信 / 演讲稿 / 倡议书' },
        { type: 'paragraph', text: '这三类属实用文体，任务驱动型作文最常指定。它们既有内容要求，更有严格的格式与对象意识。' },
        { type: 'list', items: ['书信格式：称呼、问候语、正文、祝颂语、署名、日期，六者俱全', '演讲稿：标题+称呼+开场白+正文+结语，多用呼告“同学们”拉近距离', '倡议书：向特定群体发出号召，语气恳切、措施具体可行', '对象意识：语气措辞必须符合受众身份（对长辈谦、对同辈亲、对公众庄）'] },
        { type: 'warn', label: '易错提醒', text: '实用文体最易<strong>“格式缺项”与“语气错位”</strong>：书信漏了祝颂语与署名，或演讲稿通篇书面腔毫无互动感，都会被扣格式分。动笔前列出格式清单逐条打钩，并锁定“写给谁、用什么口气”。' },
        { type: 'heading', text: '五、驳论文' },
        { type: 'paragraph', text: '驳论文以“破”为手段、“立”为目的，适用于争议性话题或需要辨析正误的题目。' },
        { type: 'list', items: ['树靶子：准确引出对方错误观点，不曲解、不夸大', '打靶子：用归谬法（推到荒谬）、以子之矛攻子之盾等方法分析其谬误', '立观点：在破的基础上建立正确主张，使文章破立相生', '忌“为驳而驳”：破是手段，最终要落到“立”的正论上'] },
        { type: 'example', label: '驳论示范', text: '错误观点：“分数至上，快乐教育误国。”<br>树靶：引出该观点；打靶（归谬）：“若分数至上，则衡水模式即最优，然其压抑个性之弊已成共识，可见分数非唯一尺度”；立论：“真正的教育应在成绩与成长间求平衡。”——破立清晰，逻辑自洽。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">驳论文：树→打→立</text><rect x="40" y="70" width="180" height="50" rx="8" fill="#b04a4a"/><text x="130" y="100" text-anchor="middle" font-size="13" fill="#fff">树靶子</text><rect x="250" y="70" width="180" height="50" rx="8" fill="#c07f4e"/><text x="340" y="100" text-anchor="middle" font-size="13" fill="#fff">打靶子</text><rect x="460" y="70" width="180" height="50" rx="8" fill="#7aa05a"/><text x="550" y="100" text-anchor="middle" font-size="13" fill="#fff">立观点</text><path d="M220 95 L248 95" stroke="#1f5f8b" stroke-width="3"/><path d="M430 95 L458 95" stroke="#1f5f8b" stroke-width="3"/><text x="340" y="165" text-anchor="middle" font-size="13" fill="#555">先破后立：引出错论→分析谬误→建立正论</text></svg>', caption: '驳论文三步：树靶子（引错论）、打靶子（析谬误）、立观点（建正论）。' },
        { type: 'heading', text: '六、材料作文（思辨型）' },
        { type: 'paragraph', text: '思辨型材料作文给出一对看似对立的概念（如快与慢、危与机、变与不变），核心是写出“辩证统一”，而非片面站队。' },
        { type: 'keypoint', label: '辩证统一四步', text: '①<strong>A 是什么</strong>（指出其合理处与价值）；②<strong>B 是什么</strong>（指出其对立面的价值）；③<strong>二者辩证关系</strong>（如何平衡、转化、统一）；④<strong>现实启示</strong>（对当下有何指导）。四步写完，思辨深度自然呈现。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">思辨型：辩证统一</text><rect x="40" y="70" width="180" height="50" rx="8" fill="#4a8fa8"/><text x="130" y="100" text-anchor="middle" font-size="13" fill="#fff">A是什么</text><rect x="250" y="70" width="180" height="50" rx="8" fill="#c07f4e"/><text x="340" y="100" text-anchor="middle" font-size="13" fill="#fff">B是什么</text><rect x="460" y="70" width="180" height="50" rx="8" fill="#1f5f8b"/><text x="550" y="100" text-anchor="middle" font-size="13" fill="#fff">辩证关系</text><path d="M220 95 L248 95" stroke="#1f5f8b" stroke-width="3"/><path d="M430 95 L458 95" stroke="#1f5f8b" stroke-width="3"/><text x="340" y="165" text-anchor="middle" font-size="13" fill="#555">A→B→二者如何平衡转化统一→现实启示</text></svg>', caption: '思辨型材料作文四步：A是什么→B是什么→辩证关系→现实启示，核心是辩证统一。' },
        { type: 'tip', label: '学习提示', text: '文体训练可用“格式清单法”：为书信、演讲稿、倡议书各列一张格式清单（称呼/问候/正文/祝颂/署名/日期），每次写完对照打钩。思辨型作文则固定用“A-B-关系-启示”四步提纲，考场上套用即可避免偏面。' },
        { type: 'reading', text: '延伸思考：任务驱动型作文常同时指定“文体（如书信）”与“内容（如劝导同学）”。当“文体格式要求”与“个人真实表达欲”冲突时（比如你更想写议论文），应优先服从任务还是坚持自我？请结合评分中“符合文体”的要求谈取舍。' }
      ],
      exercises: [
        { type: 'choice', question: '驳论文的标准写作顺序是？', options: ['立→破→结', '树靶子→打靶子→立观点', '引→议→联→结', '起→承→转→合'], answer: '树靶子→打靶子→立观点', explanation: '驳论文以破为手段、立为目的，标准流程是：先“树靶子”准确引出错误观点，再“打靶子”用归谬法等分析其谬误，最后“立观点”建立正确主张。其余选项为一般议论文或记叙文的思路，故选“树靶子→打靶子→立观点”。' },
        { type: 'fill', question: '材料作文（思辨型）的核心是__统一，即先分析A、再分析B，再谈二者如何平衡、转化。', answer: '辩证', explanation: '思辨型材料作文给出看似对立的概念，写作核心不是片面站队，而是“辩证统一”：先析A的合理、再析B的价值、再谈二者如何平衡转化。这是思辨深度的来源，故填“辩证”。' },
        { type: 'choice', question: '下列书信必备格式项中，完整的一组是？', options: ['标题+副标题', '称呼、问候、正文、祝颂、署名、日期', '只要正文', '开场白+结语即可'], answer: '称呼、问候、正文、祝颂、署名、日期', explanation: '书信格式须六者俱全：称呼、问候语、正文、祝颂语、署名、日期。缺任一项都可能被扣格式分。标题副标题并非书信必需，仅正文或仅开场白结语都不完整，故选“称呼、问候、正文、祝颂、署名、日期”。' },
        { type: 'fill', question: '议论文三要素为：论点、论据、__。', answer: '论证', explanation: '议论文三要素是论点（鲜明的观点）、论据（有力的材料）、论证（严谨的分析方法，如举例、对比、因果等）。三者缺一不可，论证负责把论据与论点焊接，故填“论证”。' },
        { type: 'choice', question: '下列关于记叙文的说法，错误的是？', options: ['六要素含时间、地点、人物', '讲究以小见大、细节描写', '情感要真挚', '无需叙事只要抒情'], answer: '无需叙事只要抒情', explanation: '记叙文以叙事为基础，六要素（时间地点人物起因经过结果）须齐备，并靠以小见大、细节描写、真挚情感打动人。“无需叙事只要抒情”是错误的——脱离叙事的抒情易空洞虚假，故选该项。' }
      ]
    },

    /* ===================== 第六部分 · 高考作文评分标准解读 ===================== */

    { id: 'zt4-u3-l2',    cover: 'assets/cover/chinese/zt4-u3-l2.svg',
    name: '写作专题（六）：高考作文评分标准解读', author: '高考复习', chapter: '第六部分 · 高考作文评分标准解读', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、评分两大等级' },
        { type: 'paragraph', text: '高考作文满分 60 分，由“基础等级 40 分”与“发展等级 20 分”构成。基础等级是准入门槛，决定文章能否及格；发展等级是高分突破口，决定能否冲入一类卷。' },
        { type: 'table', headers: ['等级', '基础等级（40分）', '发展等级（20分）'], rows: [['内容（20分）', '切题、中心突出、内容充实、思想健康、感情真挚', '深刻：透过现象看本质，观点有启发性'], ['表达（20分）', '符合文体、结构严谨、语言流畅、字迹工整', '丰富：材料丰富、形象丰满、意境深远'], ['', '', '有文采：用词贴切、句式灵活、善于修辞'], ['', '', '有创意：见解新颖、构思新巧、想象独到']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">高考作文评分双等级（满分60）</text><rect x="40" y="55" width="290" height="56" rx="8" fill="#1f5f8b"/><text x="185" y="79" text-anchor="middle" font-size="13" fill="#fff">基础等级 40分</text><text x="185" y="100" text-anchor="middle" font-size="11" fill="#fff">内容20+表达20</text><rect x="350" y="55" width="290" height="56" rx="8" fill="#c07f4e"/><text x="495" y="79" text-anchor="middle" font-size="13" fill="#fff">发展等级 20分</text><text x="495" y="100" text-anchor="middle" font-size="11" fill="#fff">深刻·丰富·文采·创意</text><text x="340" y="165" text-anchor="middle" font-size="13" fill="#555">基础是门槛，发展是高分突破口</text></svg>', caption: '评分双等级：基础等级 40 分（内容+表达）保及格，发展等级 20 分（深刻/丰富/文采/创意）冲高分。' },
        { type: 'heading', text: '二、基础等级（40分）' },
        { type: 'paragraph', text: '基础等级分“内容（20分）”与“表达（20分）”两项，各按档给分。它是阅卷的第一道筛子，任一硬伤都会直接拉低总分。' },
        { type: 'list', items: ['内容20分：切题、中心突出、内容充实、思想健康、感情真挚（五维）', '表达20分：符合文体、结构严谨、语言流畅、字迹工整（四维）', '“切题”是内容第一维——跑题则内容项直接掉档', '“字迹工整”属表达——卷面是第一印象，潦草必吃亏'] },
        { type: 'keypoint', label: '基础等级是门槛', text: '基础等级不过关，发展等级再好也<strong>无法单独撑起高分</strong>。许多二类卷并非写得差，而是“内容不够充实”或“结构不够严谨”被卡在基础档。先把基础四平八稳拿下，再图发展。' },
        { type: 'heading', text: '三、发展等级（20分）' },
        { type: 'paragraph', text: '发展等级不按项均分，而是“一点突出即可加分，多点突出加倍”。它是拉开差距的关键，对应深刻、丰富、有文采、有创意四个维度。' },
        { type: 'list', items: ['深刻：透过现象看本质，观点具有启发，不人云亦云', '丰富：材料丰富、形象丰满、意境深远', '有文采：用词贴切、句式灵活、善于修辞', '有创意：见解新颖、构思新巧、想象独到'] },
        { type: 'example', label: '发展等级撬动点', text: '同一题“谈遗憾”：普通写法“遗憾让人成长”；发展级写法“遗憾是未完成的留白，它让生命保有向前的引力，正如断臂维纳斯因残缺而永恒”——以“留白”“残缺美”切入，显深刻与文采，更易在发展等级得分。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">发展等级四维度</text><rect x="40" y="65" width="150" height="50" rx="8" fill="#1f5f8b"/><text x="115" y="95" text-anchor="middle" font-size="13" fill="#fff">深刻</text><rect x="200" y="65" width="150" height="50" rx="8" fill="#4a8fa8"/><text x="275" y="95" text-anchor="middle" font-size="13" fill="#fff">丰富</text><rect x="360" y="65" width="150" height="50" rx="8" fill="#c07f4e"/><text x="435" y="95" text-anchor="middle" font-size="13" fill="#fff">有文采</text><rect x="520" y="65" width="140" height="50" rx="8" fill="#7aa05a"/><text x="590" y="95" text-anchor="middle" font-size="13" fill="#fff">有创意</text><text x="340" y="160" text-anchor="middle" font-size="13" fill="#555">四者居其一即可加分，多者叠加更上层楼</text></svg>', caption: '发展等级四维度：深刻、丰富、有文采、有创意，一点突出即加分。' },
        { type: 'heading', text: '四、关键失分点提醒' },
        { type: 'paragraph', text: '下列“硬伤”会直接触发扣分规则，甚至让基础等级跌入四等、发展等级归零，务必规避。' },
        { type: 'table', headers: ['失分点', '扣分规则'], rows: [['缺标题', '扣 2 分'], ['字数不足', '每少 50 字扣 1 分'], ['错别字', '每 1 个扣 1 分（重复不计）'], ['套作 / 抄袭', '基础等级在四等内评分，发展等级不给分'], ['偏离题意', '基础等级在四等内评分，发展等级不给分']] },
        { type: 'warn', label: '易错提醒', text: '三大高频失分：①<strong>字数不足</strong>——少于 800 字每 50 字扣 1 分，写完务必数够；②<strong>卷面潦草</strong>——字迹难辨直接拉低表达档；③<strong>套作</strong>——背一篇万能文硬套，一旦被判定套作，基础四等、发展归零。宁可朴实，不可套作。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">关键失分雷区</text><rect x="40" y="55" width="190" height="46" rx="8" fill="#b04a4a"/><text x="135" y="83" text-anchor="middle" font-size="12" fill="#fff">缺标题 -2</text><rect x="245" y="55" width="190" height="46" rx="8" fill="#c07f4e"/><text x="340" y="83" text-anchor="middle" font-size="12" fill="#fff">字数不足 -1/50</text><rect x="450" y="55" width="190" height="46" rx="8" fill="#7a6fae"/><text x="545" y="83" text-anchor="middle" font-size="12" fill="#fff">错别字 -1/个</text><rect x="40" y="115" width="290" height="46" rx="8" fill="#7aa05a"/><text x="185" y="143" text-anchor="middle" font-size="12" fill="#fff">套作抄袭：基础四等内</text><rect x="350" y="115" width="290" height="46" rx="8" fill="#1f5f8b"/><text x="495" y="143" text-anchor="middle" font-size="12" fill="#fff">偏离题意：基础四等内</text><text x="340" y="195" text-anchor="middle" font-size="13" fill="#555">踩中雷区，发展等级往往直接归零</text></svg>', caption: '失分雷区：缺标题、字数不足、错别字、套作抄袭、偏离题意，后两者直接四等且发展归零。' },
        { type: 'heading', text: '五、临场对标建议' },
        { type: 'paragraph', text: '动笔前用 30 秒“对标评分表”：我的立意是否“深刻”？素材是否“丰富”？语言是否“有文采”？结构是否“严谨”？四项自评若有两项达标，已稳居一类卷区间。' },
        { type: 'tip', label: '学习提示', text: '每次写完作文，用评分表做“自评互评”：先按基础等级五维（切题/中心/内容/思想/感情）打内容分，再按表达四维（文体/结构/语言/卷面）打表达分，最后在发展四维度中圈出自己最突出的 1-2 项。哪里分低，下次就集中突破哪里。' },
        { type: 'reading', text: '延伸思考：评分标准强调“发展等级一点突出即可加分”，这是否意味着可以牺牲基础等级（如故意写得晦涩以求“深刻”、写得花哨以求“文采”）？请结合“基础是门槛”的原则，谈谈你对“基础”与“发展”权重关系的理解。' }
      ],
      exercises: [
        { type: 'choice', question: '高考作文满分 60 分中，基础等级占多少分？', options: ['20分', '40分', '50分', '60分'], answer: '40分', explanation: '高考作文满分 60 分，由基础等级 40 分（内容 20 + 表达 20）与发展等级 20 分构成。基础等级是准入门槛，发展等级是高分突破，故选“40分”。' },
        { type: 'fill', question: '关键失分点：缺标题扣__分；字数不足每少 50 字扣 1 分；错别字每 1 个扣 1 分。', answer: '2', explanation: '评分规则明确：缺标题扣 2 分；字数不足每少 50 字扣 1 分；错别字每 1 个扣 1 分（重复不计）。这三条是最高频的硬伤扣分，写完务必检查标题、字数、错字，故填“2”。' },
        { type: 'choice', question: '下列项目中，不属于“发展等级”四项的是？', options: ['深刻', '丰富', '有文采', '卷面工整'], answer: '卷面工整', explanation: '发展等级四维度为深刻、丰富、有文采、有创意。“卷面工整”属基础等级“表达（20分）”中的要求，而非发展等级，故选“卷面工整”。' },
        { type: 'fill', question: '套作或抄袭的作文，基础等级在__内评分，发展等级不给分。', answer: '四等', explanation: '评分规定：套作、抄袭的作文，基础等级在“四等”之内评分，发展等级不给分。这是最严厉的惩罚之一，故宁可朴实原创也不可套作，故填“四等”。' },
        { type: 'choice', question: '作文“偏离题意”时，正确的评分处理是？', options: ['正常评发展等级', '基础等级在四等内评分、发展等级不给分', '直接判零分', '只扣内容分'], answer: '基础等级在四等内评分、发展等级不给分', explanation: '偏离题意属于严重失分，评分规则与套作并列：基础等级在四等内评分，发展等级不给分。它并非直接零分，但已跌入最低档且发展归零，故选“基础等级在四等内评分、发展等级不给分”。' }
      ]
    }

  );
})();
