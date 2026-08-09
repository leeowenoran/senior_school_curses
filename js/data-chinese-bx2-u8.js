/* ============================================================
 * 高一语文 · 必修 下册 · 第八单元 责任与担当（古代议论散文）
 * 4 课时：谏太宗十思疏 / 答司马谏议书 / 阿房宫赋 / 六国论
 * 数据注入：chinese.bx2.points
 * 质量标准：每课 ≥22 内容块 / 3 SVG / 含 example+table+tip+warn+list(≥2)+keypoint+poem+小结
 * 文言原文须准确，poem 块用 \n 换行
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx2');
  if (!v) return;

  v.points.push(
    /* ==================== 第1课 谏太宗十思疏 ==================== */
    {
      id: 'bx2-u8-l1',
      cover: 'assets/cover/chinese/bx2-u8-l1.svg',
      name: '《谏太宗十思疏》',
      author: '魏征',
      chapter: '第八单元 责任与担当（古代议论散文）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '魏征（580—643），字玄成，唐朝著名政治家、史学家。他为人刚直敢谏，辅佐唐太宗李世民开创「贞观之治」，史称「诤臣」。一生陈谏数百事，所言多被采纳，其谏议之文情理兼备、剀切明白，是唐代奏疏的典范。' },
        { type: 'paragraph', text: '本文写于贞观十一年（637）。唐太宗即位初期励精图治，后期渐生骄奢，大兴土木、求仙问道。魏征以「居安思危」相劝，写此疏陈述「十思」，恳请太宗戒奢以俭、励精图治。题目「疏」即奏疏，是臣下向君王陈述意见的公文。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>奏疏</strong>（上行公文），属<strong>议论散文</strong>。其特色是：<strong>陈情恳切、说理晓畅</strong>，以「居安思危」为纲，用<strong>比喻、对比、排比</strong>层层递进，于委婉中见刚直，是古代谏议文的杰作。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbf3e6"/><rect x="280" y="120" width="120" height="70" rx="8" fill="#c0392b" stroke="#7a1a12" stroke-width="2"/><text x="340" y="162" font-size="16" fill="#fff" text-anchor="middle">唐太宗</text><g fill="#caa46a"><circle cx="150" cy="155" r="30"/></g><text x="150" y="200" font-size="13" fill="#5b3b12" text-anchor="middle">魏征进疏</text><path d="M180 150 Q250 140 278 145" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#u8l1a)"/><text x="230" y="128" font-size="12" fill="#9c1a2e" text-anchor="middle">十思·居安思危</text><text x="340" y="285" font-size="13" fill="#5b4636" text-anchor="middle">臣下以奏疏上书，劝君王戒奢以俭、永保无疆之休</text></svg>', caption: '魏征以奏疏进言，于贞观盛世提醒太宗「居安思危」。' },
        { type: 'heading', text: '二、原文通读（节选）' },
        { type: 'poem', text: '臣闻求木之长者，必固其根本；欲流之远者，必浚其泉源；思国之安者，必积其德义。源不深而望流之远，根不固而求木之长，德不厚而思国之理，臣虽下愚，知其不可，而况于明哲乎！\n人君当神器之重，居域中之大，将崇极天之峻，永保无疆之休。不念居安思危，戒奢以俭，斯亦伐根以求木茂，塞源而欲流长者也。\n凡百元首，承天景命，莫不殷忧而道著，功成而德衰。有善始者实繁，能克终者盖寡。\n君人者，诚能见可欲则思知足以自戒，将有作则思知止以安人，念高危则思谦冲而自牧，惧满溢则思江海下百川，乐盘游则思三驱以为度，忧懈怠则思慎始而敬终，虑壅蔽则思虚心以纳下，想谗邪则思正身以黜恶，恩所加则思无因喜以谬赏，罚所及则思无因怒而滥刑。\n总此十思，弘兹九德，简能而任之，择善而从之，则智者尽其谋，勇者竭其力，仁者播其惠，信者效其忠。文武争驰，在君无事，可以尽豫游之乐，可以养松乔之寿，鸣琴垂拱，不言而化。' },
        { type: 'keypoint', label: '题解', text: '文章以「<strong>求木之长—固根本、欲流之远—浚泉源</strong>」两组比喻开篇，引出「思国之安—积德义」的中心，再以「居安思危，戒奢以俭」收束立论。后半「十思」具体展开，由比喻到治国，逻辑严密、环环相扣。' },
        { type: 'heading', text: '三、内容研读·论证层次' },
        { type: 'keypoint', label: '论证思路', text: '全文分三层：①<strong>立论</strong>——以「固本、浚源」喻「积德义」，提出「居安思危」；②<strong>历史对照</strong>——「善始者繁，克终者寡」，指陈守成之难；③<strong>具体劝谏</strong>——列出「十思」，归于「垂拱而治」。先喻后理、由虚到实。' },
        { type: 'keypoint', label: '正反对比', text: '魏征善用<strong>正反对比</strong>：「殷忧竭诚」与「得志傲物」、「胡越一体」与「骨肉行路」、「载舟」与「覆舟」两两对举，凸显「竭诚待下」方能长治久安，对比鲜明、说服力强。' },
        { type: 'example', label: '分析示范', text: '赏析「求木之长者，必固其根本；欲流之远者，必浚其泉源；思国之安者，必积其德义」的论证艺术。<br><br><strong>解析</strong>：魏征连用两个生活比喻（固本使木长、浚源使流远）作<strong>类比</strong>，自然引出治国须「积其德义」的抽象道理。三个分句<strong>句式整饬、由浅入深</strong>，以常识之理喻治国之大道，使君王易于接受。这种「取譬就近、以事明理」的写法，正是奏疏「委婉而切至」的妙处。' },
        { type: 'warn', label: '易错·文言字词', text: '「克终」的「<strong>克</strong>」是<strong>能够</strong>（能克终者盖寡＝能坚持到底的很少），非「克服」；「虽」在「臣虽下愚」中是<strong>即使</strong>，表让步；「诚」在「君人者，诚能……」中是<strong>果真、如果</strong>，表假设。一词多义须据语境细辨，不可望文生义。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="40" y="50" width="170" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="125" y="110" font-size="14" fill="#3e6b2e" text-anchor="middle">固本浚源</text><text x="125" y="135" font-size="12" fill="#3e6b2e" text-anchor="middle">喻积德义</text><rect x="245" y="50" width="170" height="140" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="330" y="110" font-size="14" fill="#5b3b12" text-anchor="middle">居安思危</text><text x="330" y="135" font-size="12" fill="#5b3b12" text-anchor="middle">立论中心</text><rect x="450" y="50" width="190" height="140" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="545" y="110" font-size="14" fill="#0f3b5e" text-anchor="middle">十思垂拱</text><text x="545" y="135" font-size="12" fill="#0f3b5e" text-anchor="middle">具体劝谏</text><path d="M210 120 h35 M415 120 h35" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#u8l1b)"/><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">论证脉络：比喻立论 → 居安思危 → 十思落实</text></svg>', caption: '由「固本浚源」的比喻，层层推至「十思」的具体劝谏。' },
        { type: 'heading', text: '四、艺术特色与主旨' },
        { type: 'keypoint', label: '主旨', text: '文章劝谏太宗<strong>「居安思危，戒奢以俭」</strong>，通过「十思」具体规范君主的欲望与行为，期冀达到<strong>「鸣琴垂拱，不言而化」</strong>的至治之境，集中体现魏征「以民为本、长治久安」的政治理念与责任感。' },
        { type: 'keypoint', label: '论证方法', text: '①<strong>比喻论证</strong>：固本、浚源喻积德义；②<strong>对比论证</strong>：殷忧与得志、载舟与覆舟；③<strong>排比铺陈</strong>：「十思」十句一气呵成，句式工整，气势充沛，极具感染力。' },
        { type: 'table', headers: ['维度', '内容', '作用'], rows: [['立论', '固本浚源 → 积德义', '以喻明理，深入浅出'], ['历史', '善始繁、克终寡', '揭示守成之难'], ['对比', '竭诚一体 vs 傲物行路', '凸显待下之道'], ['落实', '总此十思，弘兹九德', '归于垂拱而治']] },
        { type: 'list', items: ['文体：奏疏（上行公文），议论散文', '中心：居安思危，戒奢以俭', '结构：比喻立论→历史对照→十思落实', '手法：比喻、正反对比、排比铺陈', '「十思」：戒骄奢、纳下言、慎赏罚', '主旨：劝君积德义，求长治久安'] },
        { type: 'tip', label: '拓展', text: '「<strong>载舟覆舟</strong>」之喻，语出《荀子·王制》「君者舟也，庶人者水也；水则载舟，水则覆舟」，魏征屡屡用之警示太宗。这一民本思想与太宗「水能载舟，亦能覆舟」的自觉互为表里，正是「贞观之治」得以出现的思想基础，也是古代士大夫「以道事君」责任感的体现。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#5b3b12" text-anchor="middle"><rect x="30" y="55" width="160" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="110" y="82">固本浚源</text><text x="110" y="104">（喻）</text><rect x="240" y="55" width="160" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="320" y="82">居安思危</text><text x="320" y="104">（纲）</text><rect x="450" y="55" width="200" height="70" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="550" y="82">十思垂拱</text><text x="550" y="104">（治）</text></g><g stroke="#c0392b" stroke-width="2" fill="none"><line x1="190" y1="90" x2="238" y2="90" marker-end="url(#u8l1c)"/><line x1="400" y1="90" x2="448" y2="90" marker-end="url(#u8l1c)"/></g><defs><marker id="u8l1c" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">行文脉络：喻理 → 立纲 → 落实，由虚到实、由警到劝</text></svg>', caption: '全文以「居安思危」为纲，由比喻立论到「十思」落实，旨在垂拱而治。' },
        { type: 'list', items: ['魏征，唐初诤臣，「谏太宗十思疏」为奏疏名篇', '中心论点：居安思危，戒奢以俭', '论证：比喻（固本浚源）+对比（载舟覆舟）+排比（十思）', '「克」＝能够、「虽」＝即使、「诚」＝如果，须辨多义', '主旨：劝君积德义、励精图治，求长治久安', '价值：古代谏议文典范，体现士大夫担当精神'] }
      ],
      exercises: [
        { type: 'choice', question: '《谏太宗十思疏》中「疏」指的是？', options: ['一种诗歌体裁', '臣下向君王陈述意见的上行公文（奏疏）', '书信', '史书体例'], answer: '臣下向君王陈述意见的上行公文（奏疏）', explanation: '「疏」是古代臣子向皇帝陈述意见、议论政事的上行公文，与「表」「奏」同类。魏征借此向唐太宗进言，故题称「谏……疏」。它属议论散文，并非诗歌、书信或史书体例。' },
        { type: 'choice', question: '文章的中心论点是？', options: ['大兴土木以显国威', '居安思危，戒奢以俭', '穷兵黩武开疆拓土', '无为而治不理朝政'], answer: '居安思危，戒奢以俭', explanation: '魏征在立论部分以「固本浚源」为喻，明确提出人君「不念居安思危，戒奢以俭，斯亦伐根以求木茂」，全文「十思」皆围绕这一中心展开，劝太宗于盛世中保持警醒、克制奢欲。' },
        { type: 'fill', question: '「有善始者实繁，能克终者盖寡」中，「克」的意思是______（能够 / 克服）。', answer: '能够', explanation: '「克」在此是「能够」之意，「能克终者盖寡」即能坚持到底（善终）的君主很少。魏征借此指陈历代帝王「始勤终怠」的通病，提醒太宗守成之难，不可误解为「克服」。' },
        { type: 'choice', question: '「载舟覆舟」之喻意在说明？', options: ['水火无情', '民众可拥戴也可推翻君主，须以民为本', '舟船制造工艺', '战争胜负'], answer: '民众可拥戴也可推翻君主，须以民为本', explanation: '语出荀子，魏征用以警示太宗：百姓如水深，君主如舟，水能浮舟亦能翻舟。意在强调「怨不在大，可畏惟人」，君主须竭诚待下、以民为本，方能长治久安，是全文民本思想的浓缩。' },
        { type: 'choice', question: '「十思」的落脚点（最终理想）是？', options: ['穷奢极欲', '鸣琴垂拱，不言而化（垂拱而治）', '严刑峻法', '对外征伐'], answer: '鸣琴垂拱，不言而化（垂拱而治）', explanation: '魏征希望太宗践行「十思」、弘扬「九德」、任贤纳谏，则「智者尽其谋……文武争驰」，最终达到「鸣琴垂拱，不言而化」的至治之境，即君主清静无事而天下自治，这是其政治理想。' }
      ]
    },

    /* ==================== 第2课 答司马谏议书 ==================== */
    {
      id: 'bx2-u8-l2',
      cover: 'assets/cover/chinese/bx2-u8-l2.svg',
      name: '《答司马谏议书》',
      author: '王安石',
      chapter: '第八单元 责任与担当（古代议论散文）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '王安石（1021—1086），字介甫，号半山，北宋政治家、文学家、思想家，「唐宋八大家」之一。他两任宰相，主持「熙宁变法」（新法），力图富国强兵，却因触动既得利益而争议不断。其文逻辑严密、刚健斩截，政论尤见锋芒。' },
        { type: 'paragraph', text: '本文写于宋神宗熙宁三年（1070）。司马光（字君实）时任右谏议大夫，以书信指责新法「侵官、生事、征利、拒谏」。王安石以此信作答，逐条驳斥，表明变法决心。题目「答……书」即回信，属书信体议论文。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>书信体议论文</strong>。其特色是<strong>驳论为主、立论结合</strong>：先立「名实相符」原则，再逐条批驳对方指责，<strong>短小精悍、言辞犀利、理足气盛</strong>，体现王安石「以理服人」的论辩风格。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2f6"/><g fill="#caa46a"><circle cx="200" cy="150" r="40"/></g><text x="200" y="155" font-size="15" fill="#5b3b12" text-anchor="middle">司马光</text><g fill="#4a7de0"><circle cx="480" cy="150" r="40"/></g><text x="480" y="155" font-size="15" fill="#fff" text-anchor="middle">王安石</text><path d="M240 135 H360" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#u8l2a)"/><text x="300" y="120" font-size="12" fill="#9c1a2e" text-anchor="middle">责四罪</text><path d="M440 165 H320" stroke="#4a7de0" stroke-width="3" fill="none" marker-end="url(#u8l2b)"/><text x="300" y="200" font-size="12" fill="#0f3b5e" text-anchor="middle">逐条驳</text><text x="340" y="285" font-size="13" fill="#33485a" text-anchor="middle">一封回信：以「名实」为尺，丈量新法之是非</text></svg>', caption: '司马光责以「四罪」，王安石以「名实相符」原则逐条驳斥。' },
        { type: 'heading', text: '二、原文通读（节选）' },
        { type: 'poem', text: '某启：昨日蒙教，窃以为与君实游处相好之日久，而议事每不合，所操之术多异故也。虽欲强聒，终必不蒙见察，故略上报，不复一一自辨。\n盖儒者所争，尤在于名实，名实已明，而天下之理得矣。今君实所以见教者，以为侵官、生事、征利、拒谏，以致天下怨谤也。\n某则以谓受命于人主，议法度而修之于朝廷，以授之于有司，不为侵官；举先王之政，以兴利除弊，不为生事；为天下理财，不为征利；辟邪说，难壬人，不为拒谏。\n至于怨诽之多，则固前知其如此也。人习于苟且非一日，士大夫多以不恤国事、同俗自媚于众为善，上乃欲变此，而某不量敌之众寡，欲出力助上以抗之，则众何为而不汹汹然？\n盘庚之迁，胥怨者民也，非特朝廷士大夫而已；盘庚不为怨者故改其度，度义而后动，是而不见可悔故也。\n无由会晤，不任区区向往之至。' },
        { type: 'keypoint', label: '题解', text: '文章先叙交情、点明「所操之术多异」，再立<strong>「名实相符」</strong>原则为标尺，逐条反驳「侵官、生事、征利、拒谏」四项指责，最后以「盘庚迁都」自况，表明不为怨诽所动的变法决心，刚柔相济。' },
        { type: 'heading', text: '三、内容研读·驳论层次' },
        { type: 'keypoint', label: '立尺', text: '王安石先立「<strong>名实已明，而天下之理得矣</strong>」的原则：评判事物须看名与实是否相符。以此为标准，对方所加罪名便不攻自破，这是全文驳论的<strong>逻辑前提与总纲</strong>。' },
        { type: 'example', label: '分析示范', text: '分析王安石如何驳「侵官、生事、征利、拒谏」四项指责。<br><br><strong>解析</strong>：他紧扣「名实相符」原则，每项皆以「不为……」四字句式<strong>排比反击</strong>：新法「受命于人主、议法度于朝廷、授之于有司」，程序合法，故「不为侵官」；「举先王之政、兴利除弊」，故「不为生事」；「为天下理财」，故「不为征利」；「辟邪说、难壬人」，故「不为拒谏」。四句句式整饬、逻辑斩截，可谓「理足气盛、寸铁杀人」。' },
        { type: 'keypoint', label: '类比自况', text: '文末以「<strong>盘庚之迁</strong>」类比变法：盘庚迁都遭民怨却不改其度，因「度义而后动」；自己推行新法亦「固前知其如此」，不为汹汹怨诽所动。以古证今，表明<strong>坚持道义、不计毁誉</strong>的决心。' },
        { type: 'warn', label: '易错·文言字词', text: '「<strong>见</strong>」在「冀君实或见恕也」「不蒙见察」中是<strong>偏指一方（指代「我」）的副词</strong>，表「对我」；「<strong>于</strong>」在「受命于人主」表<strong>从、被</strong>；「<strong>故</strong>」在「所操之术多异故也」表<strong>原因</strong>。这些虚词用法细微，最易误读，须结合句式辨析。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="40" y="50" width="290" height="140" rx="8" fill="#fdeaf0" stroke="#c0392b" stroke-width="2"/><text x="185" y="105" font-size="14" fill="#9c1a2e" text-anchor="middle">司马光所责四罪</text><text x="185" y="130" font-size="12" fill="#9c1a2e" text-anchor="middle">侵官·生事·征利·拒谏</text><rect x="350" y="50" width="290" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="495" y="105" font-size="14" fill="#3e6b2e" text-anchor="middle">王安石逐一驳斥</text><text x="495" y="130" font-size="12" fill="#3e6b2e" text-anchor="middle">名实相符·不为……</text><path d="M330 120 h20" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#u8l2c)"/><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">以「名实」为尺：先立原则，再逐条破敌</text></svg>', caption: '先立「名实相符」之尺，再对四项指责逐一拆驳。' },
        { type: 'heading', text: '四、艺术特色与主旨' },
        { type: 'keypoint', label: '主旨', text: '文章表明王安石<strong>推行新法、富国强兵</strong>的坚定立场，驳斥保守派的指责，彰显其<strong>「度义而后动、不为怨诽所夺」</strong>的改革家气魄与责任感，是北宋变法斗争的珍贵文献。' },
        { type: 'keypoint', label: '论证特色', text: '①<strong>确立原则、以尺量敌</strong>（名实相符）；②<strong>逐条批驳、排比反击</strong>；③<strong>刚柔相济</strong>——先叙交情示敬，后言辞斩截显刚；④<strong>引古证今</strong>（盘庚迁都），增强说服力。' },
        { type: 'table', headers: ['对方指责', '王安石辩驳', '依据'], rows: [['侵官', '受命人主、修于朝廷、授有司', '程序合法'], ['生事', '举先王之政、兴利除弊', '承古改制'], ['征利', '为天下理财', '非图私利'], ['拒谏', '辟邪说、难壬人', '拒奸非拒谏']] },
        { type: 'list', items: ['文体：书信体议论文，驳论为主', '总纲：名实相符，天下理得', '四驳：侵官、生事、征利、拒谏逐一破', '类比：盘庚迁都，度义而后动', '风格：理足气盛、刚柔相济、短小精悍', '主旨：坚持变法、不为怨诽所夺'] },
        { type: 'tip', label: '拓展', text: '「熙宁变法」触及土地、兵役、科举诸多领域，因执行偏差与利益之争终告失败，却深刻影响了此后中国的改革思想。司马光与王安石的政见之争，并非个人恩怨，而是<strong>「渐进守成」与「主动变革」</strong>两种治国思路的碰撞。读此信，可见古代士大夫「以道事君、各执其义」的政治风骨。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#5b3b12" text-anchor="middle"><rect x="30" y="55" width="160" height="70" rx="8" fill="#fdeaf0" stroke="#c0392b" stroke-width="2"/><text x="110" y="82">立尺·名实</text><text x="110" y="104">（纲）</text><rect x="240" y="55" width="160" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="320" y="82">四驳·排比</text><text x="320" y="104">（破）</text><rect x="450" y="55" width="200" height="70" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="550" y="82">盘庚·不变</text><text x="550" y="104">（守）</text></g><g stroke="#c0392b" stroke-width="2" fill="none"><line x1="190" y1="90" x2="238" y2="90" marker-end="url(#u8l2d)"/><line x1="400" y1="90" x2="448" y2="90" marker-end="url(#u8l2d)"/></g><defs><marker id="u8l2d" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">行文脉络：立尺 → 四驳 → 自况，理直气壮、步步紧逼</text></svg>', caption: '先立「名实」之尺，再四句排比破敌，终以盘庚自况明志。' },
        { type: 'list', items: ['王安石，北宋改革家，「答司马谏议书」为书信体议论文', '总纲：名实相符，天下理得', '四驳：侵官、生事、征利、拒谏，排比反击', '虚词：见＝对我、于＝从/被、故＝原因', '类比：盘庚迁都，度义而后动', '主旨：坚持新法、不为怨诽所夺的改革担当'] }
      ],
      exercises: [
        { type: 'choice', question: '《答司马谏议书》最主要的论证方法是？', options: ['抒情描写', '先立原则再逐条驳斥（驳论）', '虚构故事', '通篇写景'], answer: '先立原则再逐条驳斥（驳论）', explanation: '王安石先确立「名实相符」的原则作为标尺，再据此逐条反驳司马光所加「侵官、生事、征利、拒谏」四项罪名，属典型的驳论写法，逻辑严密、理足气盛，而非抒情、虚构或写景。' },
        { type: 'choice', question: '「名实已明，而天下之理得矣」在文中的作用？', options: ['单纯写景', '确立评判标准，作为全文驳论的总纲', '问候语', '结尾套话'], answer: '确立评判标准，作为全文驳论的总纲', explanation: '这句话提出「名与实是否相符」是评判事物的根本标准。王安石以它为尺，衡量新法是否真如对方所言「侵官生事」，从而不攻自破。它是全文的逻辑前提与总纲，统摄后文四驳。' },
        { type: 'fill', question: '「冀君实或见恕也」中，「见」是偏指一方的副词，指代______（我 / 你），意为「希望或许原谅我」。', answer: '我', explanation: '古汉语中「见」用于动词前常偏指动作涉及的「我」方（如「见教」「见察」「见恕」）。此处「见恕」即「原谅我」，并非「看见」。须据书信语境识别这一特殊用法，不可按常义理解。' },
        { type: 'choice', question: '文末以「盘庚之迁」类比，意在说明？', options: ['迁都容易', '变法虽遭怨诽，但度义而后动、不可更改', '盘庚是暴君', '应当放弃新法'], answer: '变法虽遭怨诽，但度义而后动、不可更改', explanation: '盘庚迁都引来众怨却不改其度，因其「度义而后动」。王安石以此自况：推行新法前已知会遭反对，但既然合乎道义便不应动摇。这有力表明他坚持变法的决心，而非退缩或放弃。' },
        { type: 'choice', question: '下列对王安石形象的理解，恰当的是？', options: ['怯懦退缩、随波逐流', '理足气盛、坚持变法、勇于担当的改革家', '只知空谈、毫无作为', '贪图私利、排除异己'], answer: '理足气盛、坚持变法、勇于担当的改革家', explanation: '此信措辞斩截、逻辑严密，对四项指责逐一反击，并以盘庚自况明志，充分展现王安石作为改革家「度义而后动、不为怨诽所夺」的锐气与担当，而非怯懦、空谈或谋私。' }
      ]
    },

    /* ==================== 第3课 阿房宫赋 ==================== */
    {
      id: 'bx2-u8-l3',
      cover: 'assets/cover/chinese/bx2-u8-l3.svg',
      name: '《阿房宫赋》',
      author: '杜牧',
      chapter: '第八单元 责任与担当（古代议论散文）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '杜牧（803—852），字牧之，号樊川居士，晚唐杰出诗人、散文家，与李商隐并称「小李杜」。其诗俊爽峭健，其赋与古文亦负盛名。《阿房宫赋》是他青年时期的代表作，借古讽今，寄寓深沉的忧国之心。' },
        { type: 'paragraph', text: '本文约作于唐敬宗宝历元年（825）。当时敬宗即位不久，大兴宫室、游宴无度，朝政昏暗。杜牧借秦始皇建阿房宫而速亡的史事，铺写其奢靡，警示当朝「<strong>戒奢以俭、爱民恤物</strong>」，是典型的借古讽今之作。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>辞赋</strong>（文赋）。赋体讲究<strong>铺陈排比、骈散结合、押韵协律</strong>，常以夸张铺写状物，末尾归于议论。杜牧以赋写史论，将<strong>铺陈之丽与讽谏之严</strong>融为一体，是唐代文赋的名篇。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3eee8"/><rect x="120" y="150" width="440" height="110" rx="4" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><path d="M120 150 l60 -40 60 40 z" fill="#8a5a2e"/><path d="M240 150 l60 -40 60 40 z" fill="#8a5a2e"/><path d="M360 150 l60 -40 60 40 z" fill="#8a5a2e"/><path d="M480 150 l60 -40 60 40 z" fill="#8a5a2e"/><g fill="#e85d3d"><circle cx="170" cy="200" r="8"/><circle cx="290" cy="200" r="8"/><circle cx="410" cy="200" r="8"/><circle cx="530" cy="200" r="8"/></g><text x="340" y="285" font-size="13" fill="#5b4636" text-anchor="middle">五步一楼、十步一阁：阿房宫的极尽铺陈与奢华</text></svg>', caption: '「覆压三百余里」的阿房宫，是秦皇穷奢极欲的象征。' },
        { type: 'heading', text: '二、原文通读（节选）' },
        { type: 'poem', text: '六王毕，四海一，蜀山兀，阿房出。覆压三百余里，隔离天日。骊山北构而西折，直走咸阳。二川溶溶，流入宫墙。五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角。\n长桥卧波，未云何龙？复道行空，不霁何虹？高低冥迷，不知西东。歌台暖响，春光融融；舞殿冷袖，风雨凄凄。一日之内，一宫之间，而气候不齐。\n妃嫔媵嫱，王子皇孙，辞楼下殿，辇来于秦。明星荧荧，开妆镜也；绿云扰扰，梳晓鬟也；渭流涨腻，弃脂水也；烟斜雾横，焚椒兰也。\n一肌一容，尽态极妍，缦立远视，而望幸焉。有不见者，三十六年。\n使负栋之柱，多于南亩之农夫；架梁之椽，多于机上之工女；钉头磷磷，多于在庾之粟粒；瓦缝参差，多于周身之帛缕；直栏横槛，多于九土之城郭；管弦呕哑，多于市人之言语。\n使天下之人，不敢言而敢怒。独夫之心，日益骄固。戍卒叫，函谷举，楚人一炬，可怜焦土！\n灭六国者六国也，非秦也；族秦者秦也，非天下也。秦人不暇自哀，而后人哀之；后人哀之而不鉴之，亦使后人而复哀后人也。' },
        { type: 'keypoint', label: '题解', text: '全赋前半极写阿房宫之<strong>宏伟与宫人之苦</strong>，后半陡转议论，由「<strong>秦爱纷奢，人亦念其家</strong>」引出「<strong>灭六国者六国也，非秦也；族秦者秦也，非天下也</strong>」的慨叹，最终落脚于「后人哀之而不鉴之」的警示，借古讽今、发人深省。' },
        { type: 'heading', text: '三、内容研读·铺陈与手法' },
        { type: 'keypoint', label: '铺陈排比', text: '写宫室用「五步一楼，十步一阁」「廊腰缦回，檐牙高啄」铺排其繁密；写宫人用「明星荧荧……焚椒兰也」六组<strong>排比兼比喻</strong>，以妆镜、绿云、脂水、椒兰极写秦之奢靡，铺陈酣畅、穷形尽相。' },
        { type: 'example', label: '分析示范', text: '赏析「使负栋之柱，多于南亩之农夫；架梁之椽，多于机上之工女……」的修辞与用意。<br><br><strong>解析</strong>：杜牧连用<strong>六个「多于」的排比句</strong>，将阿房宫的柱、椽、钉头、瓦缝、栏槛、管弦，分别与天下的农夫、工女、粟粒、帛缕、城郭、言语相较，以<strong>夸张的对比</strong>凸显秦宫耗费之巨、搜刮之酷。表面上写建筑之丽，实则写<strong>民力之竭、民怨之深</strong>，为后文「不敢言而敢怒」「楚人一炬」的覆灭蓄满张力。' },
        { type: 'keypoint', label: '借古讽今', text: '杜牧写秦之亡，意在警唐：结尾「<strong>秦人不暇自哀，而后人哀之；后人哀之而不鉴之，亦使后人而复哀后人也</strong>」是全文文眼，劝诫当朝以秦为鉴、戒奢恤民，否则将重蹈覆辙，借古讽今之意溢于言表。' },
        { type: 'warn', 'label': '易错·文言字词', text: '「<strong>一</strong>」在「四海一」中作动词，意为<strong>统一</strong>；「<strong>爱</strong>」在「秦爱纷奢」中是<strong>喜爱、贪图</strong>，非「爱护」；「<strong>族</strong>」在「族秦者秦也」中作动词，<strong>灭族、使……灭族</strong>。这些多义、活用最常见于考点，须据语境辨析。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="40" y="50" width="280" height="140" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="180" y="100" font-size="14" fill="#5b3b12" text-anchor="middle">铺陈·阿房之丽</text><text x="180" y="125" font-size="12" fill="#5b3b12" text-anchor="middle">柱椽多于农夫工女</text><rect x="360" y="50" width="280" height="140" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#5b1a12" text-anchor="middle">议论·秦亡之鉴</text><text x="500" y="125" font-size="12" fill="#5b1a12" text-anchor="middle">后人哀之而不鉴</text><path d="M320 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#u8l3b)"/><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">由铺陈到议论：丽极而亡，借古以讽今</text></svg>', caption: '前半铺写宫室之丽，后半转入兴亡之论，借古讽今。' },
        { type: 'heading', text: '四、艺术特色与主旨' },
        { type: 'keypoint', label: '主旨', text: '借阿房宫的兴建与焚毁，揭示<strong>秦因骄奢暴敛而速亡</strong>的历史教训，劝诫唐统治者<strong>以史为鉴、戒奢爱民</strong>，体现杜牧作为士大夫「<strong>关乎家国、敢于忧时</strong>」的责任担当。' },
        { type: 'keypoint', label: '艺术成就', text: '①<strong>铺陈夸张</strong>：穷写宫室宫人之盛；②<strong>排比比喻</strong>：六「多于」句气势如虹；③<strong>骈散结合</strong>：赋体韵律与散文流畅兼美；④<strong>叙议结合</strong>：由丽及亡，卒章显志。' },
        { type: 'table', headers: ['手法', '例句', '表达效果'], rows: [['铺陈', '五步一楼，十步一阁', '极写宫室繁密宏伟'], ['排比夸张', '使负栋之柱，多于南亩之农夫', '凸显奢靡、民力枯竭'], ['借古讽今', '后人哀之而不鉴之', '警示唐廷以秦为戒'], ['卒章显志', '族秦者秦也，非天下也', '归于兴亡在己的议论']] },
        { type: 'list', items: ['文体：辞赋（文赋），骈散结合、铺陈排比', '结构：铺写宫室之丽 → 议论兴亡之鉴', '名句：六王毕四海一、楚人一炬可怜焦土', '手法：夸张铺陈、六「多于」排比、借古讽今', '多义：一＝统一、爱＝贪图、族＝灭族', '主旨：戒奢爱民、以史为鉴的责任担当'] },
        { type: 'tip', label: '拓展', text: '杜牧出身名门（宰相杜佑之孙），怀「经邦济世」之志，却生当晚唐衰世，故其诗文多<strong>忧时念乱、借古抒怀</strong>。《阿房宫赋》与《泊秦淮》「商女不知亡国恨」同此怀抱。这种「以史为鉴」的自觉，正是中国古代士大夫「天下兴亡，匹夫有责」意识的文学呈现。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#5b3b12" text-anchor="middle"><rect x="30" y="55" width="180" height="70" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="120" y="82">六王毕·阿房出</text><text x="120" y="104">（起·铺）</text><rect x="240" y="55" width="180" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="330" y="82">极丽·极奢</text><text x="330" y="104">（承·写）</text><rect x="450" y="55" width="200" height="70" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="550" y="82">楚人一炬·可鉴</text><text x="550" y="104">（转合·讽）</text></g><g stroke="#c0392b" stroke-width="2" fill="none"><line x1="210" y1="90" x2="238" y2="90" marker-end="url(#u8l3c)"/><line x1="420" y1="90" x2="448" y2="90" marker-end="url(#u8l3c)"/></g><defs><marker id="u8l3c" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">行文脉络：铺丽 → 写奢 → 焚毁 → 鉴戒，丽极而亡</text></svg>', caption: '由阿房之丽写到楚人一炬，最终归于「后人哀之而不鉴」的警示。' },
        { type: 'list', items: ['杜牧，晚唐「小李杜」之一，《阿房宫赋》为文赋名篇', '结构：铺写宫室之丽 → 议论兴亡之鉴', '六「多于」排比：夸张对比，写尽奢靡与民怨', '借古讽今：以秦速亡警示唐廷戒奢爱民', '多义：一＝统一、爱＝贪图、族＝使灭族', '主旨：关乎家国、敢于忧时的士大夫担当'] }
      ],
      exercises: [
        { type: 'choice', question: '《阿房宫赋》的文体是？', options: ['近体诗', '辞赋（文赋），讲究铺陈排比', '现代小说', '新闻报道'], answer: '辞赋（文赋），讲究铺陈排比', explanation: '赋是介于诗、文之间的文体，讲究铺陈夸张、骈散结合、协律押韵。杜牧以赋写史论，前半铺写阿房宫之丽，后半转入兴亡议论，是唐代文赋典范，并非诗歌、小说或新闻。' },
        { type: 'choice', question: '「灭六国者六国也，非秦也；族秦者秦也，非天下也」意在说明？', options: ['六国兵力太弱', '灭亡的根源在自身（不恤其民），不在外部', '秦国有天命', '天下人太残忍'], answer: '灭亡的根源在自身（不恤其民），不在外部', explanation: '杜牧强调六国与秦皆因自身骄奢暴敛、不恤百姓而亡，而非被外力消灭。这把兴亡之责归于统治者自身，是借古讽今的核心论点，意在劝唐廷反求诸己、以史为鉴。' },
        { type: 'fill', question: '「六王毕，四海一，蜀山兀，阿房出」中，「一」的意思是______（统一 / 一个），此处作动词。', answer: '统一', explanation: '「一」在这里作动词，意为「统一」。四句以极简笔墨写秦灭六国、天下归一，蜀山砍伐一空而阿房宫拔地而起，起势雄健，既交代背景又暗含「竭民力以奉一人」的批判。' },
        { type: 'choice', question: '「秦人不暇自哀，而后人哀之；后人哀之而不鉴之，亦使后人而复哀后人也」的警示是？', options: ['悲哀无用', '应以历史为鉴、戒奢爱民，否则重蹈覆辙', '后人更愚蠢', '不必哀悼前朝'], answer: '应以历史为鉴、戒奢爱民，否则重蹈覆辙', explanation: '这是全文文眼。杜牧指出：秦人来不及哀叹自己，后人为之哀；但若后人不引为鉴戒，便会让更后的「后人」再来哀叹今人。意在警示唐敬宗以秦亡为戒、戒奢恤民，体现借古讽今的良苦用心。' },
        { type: 'choice', question: '文中「使负栋之柱，多于南亩之农夫」等六句运用的手法是？', options: ['平淡叙述', '排比兼夸张对比，凸显秦之奢靡', '设问自答', '白描写景'], answer: '排比兼夸张对比，凸显秦之奢靡', explanation: '六句以「多于」领起排比，将宫中柱椽钉瓦与田间农夫工女、仓中粟粒、身上帛缕对比，极度夸张地写出秦宫耗费民力之巨，表面写建筑之丽，实写搜刮之酷与民怨之深，为覆灭伏笔。' }
      ]
    },

    /* ==================== 第4课 六国论 ==================== */
    {
      id: 'bx2-u8-l4',
      cover: 'assets/cover/chinese/bx2-u8-l4.svg',
      name: '《六国论》',
      author: '苏洵',
      chapter: '第八单元 责任与担当（古代议论散文）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '苏洵（1009—1066），字明允，号老泉，北宋散文家，「唐宋八大家」之一，与子苏轼、苏辙并称「三苏」。他少年发奋，专攻古文，文章雄辩深沉、纵横开阖，尤擅史论。《六国论》是其史论代表作。' },
        { type: 'paragraph', text: '本文为《权书》十篇之一，约作于北宋中期。时辽、西夏屡犯边境，宋廷妥协纳币（岁币）以求苟安。苏洵借六国「赂秦而亡」的史事，暗讽宋廷「以地赂敌」之非，主张<strong>「以赂秦为戒、奋发图强」</strong>，是借古讽今的史论名篇。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>史论（议论文）</strong>。其特色是<strong>开门见山、中心突出</strong>：首段即亮明「<strong>弊在赂秦</strong>」，再分层论证、引古证今。结构清晰、逻辑严密，是「论点—论据—结论」典范。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2f6"/><g fill="#caa46a"><circle cx="180" cy="150" r="36"/></g><text x="180" y="155" font-size="14" fill="#5b3b12" text-anchor="middle">六国</text><g fill="#c0392b"><circle cx="500" cy="150" r="36"/></g><text x="500" y="155" font-size="14" fill="#fff" text-anchor="middle">秦</text><path d="M216 140 Q340 100 464 140" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#u8l4a)"/><text x="340" y="110" font-size="12" fill="#9c1a2e" text-anchor="middle">割地赂秦</text><path d="M464 165 Q340 205 216 168" stroke="#5b7a8a" stroke-width="3" fill="none" marker-end="url(#u8l4b)"/><text x="340" y="225" font-size="12" fill="#33485a" text-anchor="middle">地削力亏</text><text x="340" y="285" font-size="13" fill="#33485a" text-anchor="middle">六国以地事秦，如抱薪救火，终至灭亡</text></svg>', caption: '六国割地赂秦，地削力亏，恰似「抱薪救火」，终为秦并。' },
        { type: 'heading', text: '二、原文通读（节选）' },
        { type: 'poem', text: '六国破灭，非兵不利，战不善，弊在赂秦。赂秦而力亏，破灭之道也。或曰：六国互丧，率赂秦耶？曰：不赂者以赂者丧。盖失强援，不能独完。故曰：弊在赂秦也。\n秦以攻取之外，小则获邑，大则得城。诸侯之所亡，与战败而亡者，其实亦百倍。则秦之所大欲，诸侯之所大患，固不在战矣。思厥先祖父，暴霜露，斩荆棘，以有尺寸之地。子孙视之不甚惜，举以予人，如弃草芥。\n今日割五城，明日割十城，然后得一夕安寝。起视四境，而秦兵又至矣。然则诸侯之地有限，暴秦之欲无厌，奉之弥繁，侵之愈急。故不战而强弱胜负已判矣。至于颠覆，理固宜然。古人云：「以地事秦，犹抱薪救火，薪不尽，火不灭。」此言得之。\n齐人未尝赂秦，终继五国迁灭，何哉？与嬴而不助五国也。燕赵之君，始有远略，能守其土，义不赂秦。\n呜呼！以赂秦之地，封天下之谋臣，以事秦之心，礼天下之奇才，并力西向，则吾恐秦人食之不得下咽也。\n夫六国与秦皆诸侯，其势弱于秦，而犹有可以不赂而胜之之势。苟以天下之大，而从六国破亡之故事，是又在六国下矣。' },
        { type: 'keypoint', label: '题解', text: '文章开宗明义：「<strong>六国破灭，非兵不利，战不善，弊在赂秦</strong>。」随即以「赂者丧、不赂者以赂者丧」补证，再写割地之弊、齐燕赵之失，最后以「为国者无使为积威之所劫」收束，中心一贯、层层深入。' },
        { type: 'heading', text: '三、内容研读·论证层次' },
        { type: 'keypoint', label: '中心论点', text: '首段即定调：六国灭亡<strong>不是武器不锋利、仗打得不好，而是弊在「赂秦」</strong>。这是全文总论点。随后用「不赂者以赂者丧」（失去强援、不能独全）补证，使论点无懈可击。' },
        { type: 'keypoint', label: '对比论证', text: '苏洵以<strong>「先祖父暴霜露、斩荆棘」之艰</strong>对比<strong>「子孙举以予人、如弃草芥」之轻</strong>，以祖宗创业的艰难反衬后人割地的轻率，情感沉痛、对比强烈，极写「赂秦」之愚。' },
        { type: 'example', label: '分析示范', text: '分析「以地事秦，犹抱薪救火，薪不尽，火不灭」的论证作用。<br><br><strong>解析</strong>：苏洵引古语作<strong>比喻论证</strong>：以「抱薪救火」喻「以地事秦」——不断地割地，正像不断地添柴，非但不能平息秦之贪欲，反使其气焰更盛。这个比喻<strong>形象揭示了赂秦「地削力亏、愈赂愈急」的恶性循环</strong>，一针见血地说明赂秦必亡的道理，极具说服力与警策之力。' },
        { type: 'warn', label: '易错·文言字词', text: '「<strong>兵</strong>」在「非兵不利」中指<strong>兵器、武器</strong>，非「士兵」；「<strong>暴</strong>」在「暴霜露」中通「曝」，意为<strong>暴露、冒着</strong>（读 pù）；「<strong>与</strong>」在「与嬴而不助五国」中是<strong>亲附、结交</strong>。这些实词的多义与通假是高频考点，须细辨。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="40" y="50" width="280" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="180" y="100" font-size="14" fill="#3e6b2e" text-anchor="middle">弊在赂秦（论点）</text><text x="180" y="125" font-size="12" fill="#3e6b2e" text-anchor="middle">赂者丧·不赂者亦丧</text><rect x="360" y="50" width="280" height="140" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#5b1a12" text-anchor="middle">抱薪救火（喻）</text><text x="500" y="125" font-size="12" fill="#5b1a12" text-anchor="middle">地削力亏·愈赂愈急</text><path d="M320 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#u8l4c)"/><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">论证脉络：亮明论点 → 比喻论证 → 引古证今</text></svg>', caption: '先亮「弊在赂秦」之论，再以「抱薪救火」喻证其必亡。' },
        { type: 'heading', text: '四、艺术特色与主旨' },
        { type: 'keypoint', label: '主旨', text: '文章论六国<strong>因赂秦而亡</strong>的历史教训，暗讽北宋<strong>以岁币赂敌、苟安妥协</strong>之策，告诫统治者<strong>「无使为积威之所劫」</strong>、应奋发图强，体现苏洵心系国运、以史谏政的担当。' },
        { type: 'keypoint', label: '论证特色', text: '①<strong>开门见山</strong>：首句即中心论点；②<strong>分层补证</strong>：赂者与不赂者分说；③<strong>对比鲜明</strong>：创业之艰与割地之易；④<strong>引喻证史</strong>：抱薪救火、古人云，增强理据。' },
        { type: 'table', headers: ['论证环节', '内容', '作用'], rows: [['提出论点', '弊在赂秦', '开宗明义、旗帜鲜明'], ['补证', '不赂者以赂者丧', '使论点周全无漏'], ['对比', '先祖创业难 vs 子孙割地易', '凸显赂秦之愚'], ['比喻', '以地事秦犹抱薪救火', '形象揭示恶性循环'], ['结论', '无使为积威之所劫', '借古讽今、告诫北宋']] },
        { type: 'list', items: ['文体：史论（议论文），开门见山', '中心：六国破灭，弊在赂秦', '补证：不赂者以赂者丧，失强援', '对比：创业之艰 vs 割地之易', '比喻：以地事秦犹抱薪救火', '借古讽今：暗谏北宋勿以岁币赂敌'] },
        { type: 'tip', label: '拓展', text: '苏洵与苏轼、苏辙并称「三苏」，同列唐宋八大家。本文虽论战国史，实扣北宋现实——当时辽、西夏威逼，宋廷岁输银绢以求息事。苏洵以「积威之所劫」警醒朝廷：一旦习惯妥协，便如六国般一步步丧失主动。这种<strong>「以史论政」</strong>的史论传统，对后世（如辛弃疾、陆游的北伐之议）影响深远。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#5b3b12" text-anchor="middle"><rect x="30" y="55" width="160" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="110" y="82">弊在赂秦</text><text x="110" y="104">（论）</text><rect x="240" y="55" width="160" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="320" y="82">创业 vs 割地</text><text x="320" y="104">（比）</text><rect x="450" y="55" width="200" height="70" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="550" y="82">抱薪救火·鉴今</text><text x="550" y="104">（讽）</text></g><g stroke="#c0392b" stroke-width="2" fill="none"><line x1="190" y1="90" x2="238" y2="90" marker-end="url(#u8l4d)"/><line x1="400" y1="90" x2="448" y2="90" marker-end="url(#u8l4d)"/></g><defs><marker id="u8l4d" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">行文脉络：立论 → 对比 → 比喻 → 讽今，层层深入</text></svg>', caption: '由「弊在赂秦」立论，终以「积威之所劫」警醒北宋朝廷。' },
        { type: 'list', items: ['苏洵，北宋「三苏」之一，《六国论》为史论名篇', '中心论点：六国破灭，弊在赂秦', '补证：不赂者以赂者丧，失强援不能独完', '比喻：以地事秦犹抱薪救火，揭示恶性循环', '多义：兵＝兵器、暴通曝、与＝亲附', '借古讽今：暗谏北宋勿以岁币赂敌、当奋发图强'] }
      ],
      exercises: [
        { type: 'choice', question: '《六国论》的中心论点是？', options: ['六国兵力太弱', '六国破灭，非兵不利，战不善，弊在赂秦', '秦国天命所归', '六国君主昏庸'], answer: '六国破灭，非兵不利，战不善，弊在赂秦', explanation: '苏洵开宗明义，首段即点明：六国灭亡不是武器不锋利、仗打得不好，根本弊病在于「赂秦」（割地求和）。全文围绕此论点分层论证，是史论「开门见山」的典范。' },
        { type: 'choice', question: '「不赂者以赂者丧」在论证中的作用是？', options: ['自相矛盾', '补证论点，使「弊在赂秦」无懈可击', '转移话题', '否定前文'], answer: '补证论点，使「弊在赂秦」无懈可击', explanation: '针对「六国互丧，率赂秦耶」的疑问，苏洵指出不赂秦的齐燕赵也因失去强援、不能独存而亡。这一补证将「赂秦」的影响扩展到全体，使中心论点更加周全严密，无可反驳。' },
        { type: 'fill', question: '「思厥先祖父，暴霜露，斩荆棘」中，「暴」通______（曝），意为冒着、暴露。', answer: '曝', explanation: '「暴」此处通「曝」（pù），意为暴露、冒着。句意写六国祖先不畏寒霜雨露、披荆斩棘才挣得尺寸之地，与后文子孙「举以予人、如弃草芥」形成强烈对比，凸显割地赂秦的轻率与愚昧。' },
        { type: 'choice', question: '「以地事秦，犹抱薪救火，薪不尽，火不灭」的比喻义是？', options: ['割地能平息秦欲', '割地如同添柴，只会助长秦之贪欲，终致灭亡', '火能照明', '柴火很便宜'], answer: '割地如同添柴，只会助长秦之贪欲，终致灭亡', explanation: '苏洵以「抱薪救火」喻「以地事秦」：不断割地正如不断添柴，非但不能满足秦国贪欲，反使其气焰更盛、侵逼更急，陷入「地削力亏、愈赂愈急」的恶性循环，形象揭示赂秦必亡之理。' },
        { type: 'choice', question: '本文借古讽今，实际针对的是？', options: ['战国七雄混战', '北宋以岁币赂辽夏、苟安妥协', '秦朝暴政', '六国地理位置'], answer: '北宋以岁币赂辽夏、苟安妥协', explanation: '苏洵身处北宋，辽、西夏屡犯，宋廷岁输银绢求和。他以六国赂秦而亡警醒朝廷：若习惯妥协、被「积威之所劫」，便会步六国后尘。这是史论「以史论政」的现实指向，而非单纯谈古。' }
      ]
    }
  );
})();
