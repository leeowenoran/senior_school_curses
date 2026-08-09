/* ============================================================
 * 高二语文 · 选择性必修中册 · 第三单元 历史的现场（中华传统文化经典研习）
 * 4 课时（均为文言文）：屈原列传 / 苏武传 / 过秦论 / 五代史伶官传序
 * 数据注入：chinese.xb2.points
 * 质量标准：每课 ≥20 内容块 / 3 SVG / 含 example+table+tip+warn+keypoint / ≥2 list / 5 练习
 * 文言原文用 poem 块，\n 换行
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'xb2');
  if (!v) return;

  v.points.push(

    /* ==================== 第1课 屈原列传 ==================== */
    {
      id: 'xb2-u3-l1',
      cover: 'assets/cover/chinese/xb2-u3-l1.svg',
      name: '《屈原列传》',
      author: '司马迁',
      chapter: '第三单元 历史的现场（中华传统文化经典研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与《史记》' },
        { type: 'paragraph', text: '司马迁（约前145—前90），字子长，西汉史学家、文学家、思想家。因李陵之祸受宫刑，忍辱负重，发愤著书，完成中国第一部纪传体通史《史记》。鲁迅誉之为「史家之绝唱，无韵之离骚」。本文节选自《史记·屈原贾生列传》。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>史传（列传）</strong>。作为《史记》列传之一，它不同于单纯记事的史书，而是<strong>在叙事中融入抒情与议论</strong>，既写屈原的生平遭际，又寄寓作者的景仰与悲慨，是史传文学的代表作。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf3e3"/><g font-size="13" text-anchor="middle"><rect x="20" y="60" width="140" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="90" y="88">出身楚宗</text><text x="90" y="108" fill="#555" font-size="12">左徒·见任</text><rect x="190" y="60" width="140" height="60" rx="8" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="260" y="88" fill="#a3331f">谗而见疏</text><text x="260" y="108" fill="#555" font-size="12">信而见疑</text><rect x="360" y="60" width="140" height="60" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="430" y="88">放逐著离骚</text><text x="430" y="108" fill="#555" font-size="12">正道直行</text><rect x="530" y="60" width="130" height="60" rx="8" fill="#fdecea" stroke="#c0392b" stroke-width="2"/><text x="595" y="88" fill="#a3331f">投汨罗</text><text x="595" y="108" fill="#555" font-size="12">以身殉国</text></g><g stroke="#7a5a2e" stroke-width="2" fill="none"><line x1="160" y1="90" x2="188" y2="90" marker-end="url(#q1a)"/><line x1="330" y1="90" x2="358" y2="90" marker-end="url(#q1a)"/><line x1="500" y1="90" x2="528" y2="90" marker-end="url(#q1a)"/></g><defs><marker id="q1a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7a5a2e"/></marker></defs><text x="340" y="190" font-size="14" fill="#8a6d3b" text-anchor="middle">屈原一生：从见任到见疏、见放，终以身殉国</text><text x="340" y="215" font-size="13" fill="#777" text-anchor="middle">「信而见疑，忠而被谤」是悲剧的根源</text></svg>', caption: '屈原生平脉络：从见任、见疏到见放、殉国，命运跌宕。' },
        { type: 'heading', text: '二、原文研读（核心段落）' },
        { type: 'poem', text: '屈平疾王听之不聪也，谗谄之蔽明也，邪曲之害公也，方正之不容也，故忧愁幽思而作《离骚》。\n「离骚」者，犹离忧也。夫天者，人之始也；父母者，人之本也。人穷则反本，故劳苦倦极，未尝不呼天也；疾痛惨怛，未尝不呼父母也。\n屈平正道直行，竭忠尽智以事其君，谗人间之，可谓穷矣。信而见疑，忠而被谤，能无怨乎？屈平之作《离骚》，盖自怨生也。\n其志洁，故其称物芳；其行廉，故死而不容。自疏濯淖污泥之中，蝉蜕于浊秽，以浮游尘埃之外，不获世之滋垢，皭然泥而不滓者也。推此志也，虽与日月争光可也。' },
        { type: 'keypoint', label: '人物形象', text: '屈原是一位<strong>忠贞爱国、正道直行</strong>的志士。他「竭忠尽智以事其君」，却因谗人离间而「信而见疑，忠而被谤」；即便遭放逐，仍「眷顾楚国，系心怀王」，志洁行廉，「皭然泥而不滓」。其精神可与日月争光。' },
        { type: 'example', label: '赏析示范', text: '怎样理解「推此志也，虽与日月争光可也」？<br><br><strong>解析</strong>：这是司马迁对屈原的<strong>最高赞颂</strong>。前文写屈原「志洁」「行廉」，出淤泥而不染；此句顺势收束，将其高洁之志推许到与日月同辉的高度。它既是<strong>对屈原人格的定评</strong>，也寄寓了作者自身遭谗受辱却忍辱著书的深沉共鸣，情辞恳切，力重千钧。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef3fb"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="260" height="120" rx="10" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="170" y="80" fill="#1a3c8a">叙事（序事）</text><text x="170" y="105" fill="#33536e" font-size="12">记叙屈原被谗、见疏、</text><text x="170" y="124" fill="#33536e" font-size="12">见放、著《离骚》的经过</text><rect x="380" y="50" width="260" height="120" rx="10" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="510" y="80" fill="#a3331f">议论（论断）</text><text x="510" y="105" fill="#a3331f" font-size="12">「推此志也，虽与</text><text x="510" y="124" fill="#a3331f" font-size="12">日月争光可也」</text></g><path d="M300 110 L380 110" stroke="#333" stroke-width="2" marker-end="url(#q1b)"/><defs><marker id="q1b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#333"/></marker></defs><text x="340" y="205" font-size="14" fill="#555" text-anchor="middle">寓论断于序事：在叙事中自然带出评价，不另发空论</text></svg>', caption: '《史记》「寓论断于序事」：叙事与议论交融，论断即寓于叙事之中。' },
        { type: 'heading', text: '三、艺术特色' },
        { type: 'paragraph', text: '本文最突出的艺术特色是「寓论断于序事」：作者不另发长篇空论，而是在记叙屈原生平的过程中，自然寄寓褒贬与评价。叙事冷静而饱含感情，议论简劲而分量极重，二者浑然一体。' },
        { type: 'list', items: [
          '属：连缀、写作（「屈平属草稿未定」），又通「嘱」',
          '夺：改变（「上官大夫见而欲夺之」），非「抢夺」',
          '谗：说坏话陷害（名词/动词），指谗佞之言',
          '迁：贬谪、放逐（「顷襄王怒而迁之」）'
        ] },
        { type: 'table', headers: ['实词', '文中义', '例句'], rows: [
          ['属', '连缀、写作', '屈平属草稿未定'],
          ['夺', '改变', '上官大夫见而欲夺之'],
          ['谗', '谗言、诽谤', '谗谄之蔽明也'],
          ['迁', '贬谪、放逐', '顷襄王怒而迁之']
        ] },
        { type: 'warn', label: '易错提醒', text: '「信而见疑，忠而被谤」是<strong>被动句</strong>：「见」「被」均表被动。又「方正之不容也」即「方正（端方正直之人）不被容纳」，是<strong>语义被动兼定语后置</strong>。此外「谗谄之蔽明也」中「谗谄」是形容词作名词，指谗佞小人，不可误读为动词。' },
        { type: 'tip', label: '阅读方法', text: '读史传要抓住「事—人—评」三线：先理清生平大事（事），再据事看性格命运（人），最后体会作者于叙事中暗含的论断（评）。《屈原列传》的「评」往往只用一两句点睛，却重逾千钧。' },
        { type: 'keypoint', label: '学习重点', text: '把握屈原<strong>忠贞爱国、正道直行</strong>的形象，领会《史记》<strong>「寓论断于序事」</strong>的写法，积累「属」「夺」「谗」「迁」等实词与被动、倒装等特殊句式。' },
        { type: 'list', items: [
          '被动句：信而见疑 / 忠而被谤 / 方正之不容',
          '主谓倒装（强调）：「屈平疾王听之不聪也」',
          '定语后置：「谗谄之蔽明也」中「谗谄」为名词性短语',
          '状语后置：「顷襄王怒而迁之」'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f5f0ff"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="280" height="120" rx="10" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="180" y="78" fill="#1a3c8a">重点实词</text><text x="180" y="102" fill="#33536e" font-size="12">属（写作）·夺（改变）</text><text x="180" y="122" fill="#33536e" font-size="12">谗（诽谤）·迁（贬谪）</text><rect x="360" y="50" width="280" height="120" rx="10" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="500" y="78" fill="#a3331f">特殊句式</text><text x="500" y="102" fill="#a3331f" font-size="12">被动句：信而见疑、忠而被谤</text><text x="500" y="122" fill="#a3331f" font-size="12">倒装句：方正之不容（语义被动）</text></g><text x="340" y="205" font-size="14" fill="#4a2b8a" text-anchor="middle">文言双翼：实词积累 + 句式辨识，是读懂《史记》的基础</text></svg>', caption: '文言知识归纳：实词与句式并重，方能通解史传文。' },
        { type: 'paragraph', text: '总之，《屈原列传》以简净的叙事承载着深沉的褒贬，既为我们塑立了一位志洁行廉、与日月争光的爱国者形象，也示范了《史记》「其文直，其事核，不虚美，不隐恶」的史家笔法。' },
        { type: 'list', items: ['文体：史传（列传），叙事中寓论断', '形象：忠贞爱国、正道直行而遭谗见疏', '艺术：寓论断于序事，情辞相生', '文言：属/夺/谗/迁 + 被动、倒装句式'] },
        { type: 'reading', text: '延伸：司马迁遭李陵之祸，与屈原「信而见疑」命运相通，故其为屈原作传，常借他人酒杯浇自己块垒。可联系《报任安书》理解这种「发愤著书」的精神。' }
      ],
      exercises: [
        { type: 'choice', question: '下列加点词解释，正确的一项是？', options: ['「屈平疾王听之不聪也」中「疾」意为疾病', '「谗谄之蔽明也」中「谗谄」指说坏话的小人', '「方正之不容也」意为端方正直的人不被容纳', '「虽与日月争光可也」是屈原自夸之语'], answer: '「方正之不容也」意为端方正直的人不被容纳', explanation: '文中「方正」指端方正直的人（形容词作名词），「不容」即不被世俗容纳，这是屈原遭谗见疏的根本原因。A项「疾」是痛心、怨恨，非疾病；B项「谗谄」指谗佞之言与谄媚之人，作主语；D项是司马迁对屈原的赞颂，并非屈原自夸。' },
        { type: 'choice', question: '《史记》「寓论断于序事」的写法，理解正确的是？', options: ['先大段议论再补叙事件', '在叙述史事中自然寄寓作者的评价判断', '只叙事不发表任何观点', '以虚构故事说明道理'], answer: '在叙述史事中自然寄寓作者的评价判断', explanation: '「寓论断于序事」是《史记》重要艺术特色：作者不另发空泛议论，而是在记叙屈原被谗、见疏、著《离骚》的经过中，自然带出「推此志也，虽与日月争光可也」的高度评价。叙事与论断融为一体，既客观又饱含感情。' },
        { type: 'fill', question: '「信而见疑，忠而被谤」中「见」和「被」都表示______句式，意为______。', answer: '被动|被', explanation: '这是两个被动句：「见疑」即被怀疑，「被谤」即被诽谤。司马迁用「信而见疑，忠而被谤」高度概括了屈原「竭忠尽智以事其君」却遭谗毁的悲剧命运，是全篇抒情议论的核心句，也是理解屈原形象的关键。' },
        { type: 'fill', question: '「推此志也，虽与日月争光可也」出自司马迁《史记·______》。', answer: '屈原贾生列传', explanation: '此句出自《史记·屈原贾生列传》，是司马迁对屈原高洁志向的由衷赞颂。本课所选《屈原列传》即节自该篇，学习时应联系司马迁自身遭际，体会其「同病相怜」的深沉情感与史家良知。' },
        { type: 'choice', question: '下列对屈原形象的理解，最准确的是？', options: ['贪图权位、趋炎附势', '忠贞爱国、正道直行而遭谗见疏', '消极避世、不问政事', '狡诈善变、明哲保身'], answer: '忠贞爱国、正道直行而遭谗见疏', explanation: '屈原「正道直行，竭忠尽智以事其君」，因谗人离间而信疑忠谤，终被放逐；即便如此仍眷顾楚国、系心怀王，其志洁行廉、与日月争光。他是一位忠贞爱国、守正不阿的悲剧志士，而非权佞或避世之人。' }
      ]
    },

    /* ==================== 第2课 苏武传 ==================== */
    {
      id: 'xb2-u3-l2',
      cover: 'assets/cover/chinese/xb2-u3-l2.svg',
      name: '《苏武传》',
      author: '班固',
      chapter: '第三单元 历史的现场（中华传统文化经典研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近班固与《汉书》' },
        { type: 'paragraph', text: '班固（32—92），字孟坚，东汉史学家、文学家。他继承父志，历时二十余年编撰《汉书》，记载西汉一代历史，是中国第一部纪传体断代史。其文谨严典雅，与《史记》《后汉书》《三国志》并称「前四史」。本文节选自《汉书·李广苏建传》。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>史传（《汉书》传记）</strong>。与《史记》相比，《汉书》「叙事详密、行文谨严」，更重典制与史实的清晰。苏武事迹附于其父苏建传后，却以浓墨重彩写尽十九年持节不屈的气节。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef6f0"/><g font-size="13" text-anchor="middle"><rect x="30" y="50" width="180" height="120" rx="10" fill="#fdecea" stroke="#e05d44" stroke-width="2"/><text x="120" y="80" fill="#a3331f">卫律</text><text x="120" y="104" fill="#a3331f" font-size="12">逼降·利诱</text><text x="120" y="124" fill="#a3331f" font-size="12">背汉求荣</text><rect x="250" y="50" width="180" height="120" rx="10" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="340" y="80" fill="#8a6d00">李陵</text><text x="340" y="104" fill="#8a6d00" font-size="12">劝降·同病</text><text x="340" y="124" fill="#8a6d00" font-size="12">无奈投降</text><rect x="470" y="50" width="180" height="120" rx="10" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="560" y="80" fill="#1e6b34">苏武</text><text x="560" y="104" fill="#1e6b34" font-size="12">持节不屈</text><text x="560" y="124" fill="#1e6b34" font-size="12">忠贞守节</text></g><path d="M210 110 L248 110 M430 110 L468 110" stroke="#333" stroke-width="2" marker-end="url(#q2a)"/><defs><marker id="q2a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#333"/></marker></defs><text x="340" y="205" font-size="14" fill="#555" text-anchor="middle">以卫律之降、李陵之劝，反衬苏武的持节不屈</text></svg>', caption: '人物对照：卫律、李陵的「降」衬托苏武的「守」，主从分明。' },
        { type: 'heading', text: '二、原文研读（核心段落）' },
        { type: 'poem', text: '武字子卿，少以父任，兄弟并为郎，稍迁至栘中厩监。\n时汉连伐胡，数通使相窥观。匈奴留汉使郭吉、路充国等前后十余辈，匈奴使来，汉亦留之以相当。\n天汉元年，且鞮侯单于初立，恐汉袭之，乃曰：「汉天子我丈人行也。」尽归汉使路充国等。\n武帝嘉其义，乃遣武以中郎将使持节送匈奴使留在汉者，因厚赂单于，答其善意。\n……\n律知武终不可胁，白单于。单于愈益欲降之，乃幽武置大窖中，绝不饮食。\n天雨雪，武卧啮雪，与旃毛并咽之，数日不死。匈奴以为神，乃徙武北海上无人处，使牧羝，羝乳乃得归。\n别其官属常惠等各置他所。武既至海上，廪食不至，掘野鼠去草实而食之。杖汉节牧羊，卧起操持，节旄尽落。' },
        { type: 'keypoint', label: '人物形象', text: '苏武是一位<strong>持节不屈、忠贞爱国</strong>的英雄。他出使被扣，面对幽禁、断食、流放北海的酷虐，始终「杖汉节牧羊，卧起操持」，节旄尽落而汉节不离手，十九年不改其志，彰显了中华民族宁折不弯的气节。' },
        { type: 'example', label: '细节赏析', text: '「杖汉节牧羊，卧起操持，节旄尽落」一句妙在何处？<br><br><strong>解析</strong>：这是全文最动人的<strong>细节特写</strong>。苏武被流放北海，以放公羊为折磨，却无论坐卧都拄着汉廷符节、紧紧握在手中，连睡觉都不放下，以致节杖上的牦牛尾毛全部脱落。一个「操持」、一个「尽落」，将<strong>身处绝境而忠心不改</strong>的铮铮铁骨写得力透纸背，无声胜有声。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf3e3"/><g font-size="13" text-anchor="middle"><rect x="20" y="60" width="140" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="90" y="88">出使匈奴</text><text x="90" y="108" fill="#555" font-size="12">持节送使</text><rect x="190" y="60" width="140" height="60" rx="8" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="260" y="88" fill="#a3331f">遭陷被扣</text><text x="260" y="108" fill="#555" font-size="12">幽窖啮雪</text><rect x="360" y="60" width="140" height="60" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="430" y="88">北海牧羊</text><text x="430" y="108" fill="#555" font-size="12">杖节操持</text><rect x="530" y="60" width="130" height="60" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="595" y="88" fill="#1e6b34">归汉完节</text><text x="595" y="108" fill="#555" font-size="12">须发尽白</text></g><g stroke="#7a5a2e" stroke-width="2" fill="none"><line x1="160" y1="90" x2="188" y2="90" marker-end="url(#q2b)"/><line x1="330" y1="90" x2="358" y2="90" marker-end="url(#q2b)"/><line x1="500" y1="90" x2="528" y2="90" marker-end="url(#q2b)"/></g><defs><marker id="q2b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7a5a2e"/></marker></defs><text x="340" y="190" font-size="14" fill="#8a6d3b" text-anchor="middle">十九年持节不屈，节旄尽落而忠心不改</text></svg>', caption: '苏武羁留历程：出使—被扣—牧羊—归汉，节杖始终在手。' },
        { type: 'heading', text: '三、艺术特色' },
        { type: 'paragraph', text: '本文最显著的写法是「对比衬托」：以卫律的逼降利诱、背汉求荣，李陵的因私情劝降、终亦投降，与苏武的持节不屈形成强烈反差，使苏武的民族气节更加突出，主次分明，形象鲜明。' },
        { type: 'list', items: [
          '稍：渐渐（「稍迁至栘中厩监」），非「稍微」',
          '秩：官俸、官吏品级（「武所得赏赐，尽以施予昆弟故人」相关）',
          '因：趁着、趁机（「因厚赂单于」）；又作「通过、经由」',
          '畔：通「叛」（「畔主背亲」）'
        ] },
        { type: 'table', headers: ['实词', '文中义', '例句'], rows: [
          ['稍', '渐渐', '稍迁至栘中厩监'],
          ['秩', '官俸、品级', '（汉官）以秩次排列'],
          ['因', '趁机、趁着', '因厚赂单于'],
          ['畔', '通「叛」', '畔主背亲']
        ] },
        { type: 'warn', label: '易错提醒', text: '「武既至海上，廪食不至，掘野鼠去草实而食之」中「<strong>去</strong>」通「<strong>弆</strong>」（jǔ），意为<strong>收藏</strong>，不是「离开」。又「<strong>旃</strong>」通「<strong>毡</strong>」（毛织品）。此外「见犯乃死」中「见」表被动（被侵犯），句式须辨明，不可望文生义。' },
        { type: 'tip', label: '阅读方法', text: '读史传写人，要特别留意「对比组」：作者往往安排一组反面或侧面人物来烘托主角。抓住卫律、李陵与苏武的言行对照，苏武的形象便立体可感；同时细品「杖汉节牧羊」这类细节，以小见大。' },
        { type: 'keypoint', label: '学习重点', text: '把握苏武<strong>持节不屈、忠贞爱国</strong>的民族气节，领会<strong>对比衬托</strong>的写人艺术，积累「稍」「秩」「因」等实词与词类活用、特殊句式。' },
        { type: 'list', items: [
          '名词作动词：杖汉节（拄着、拿着符节）',
          '宾语前置：何以汝为见（即「以何见汝为」）',
          '被动句：见犯乃死（被侵犯才死）',
          '通假字：去通弆（收藏）、旃通毡'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f5f0ff"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="280" height="120" rx="10" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="180" y="78" fill="#1a3c8a">重点实词</text><text x="180" y="102" fill="#33536e" font-size="12">稍（渐渐）·秩（官俸）</text><text x="180" y="122" fill="#33536e" font-size="12">因（趁机/通过）</text><rect x="360" y="50" width="280" height="120" rx="10" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="500" y="78" fill="#a3331f">词法句法</text><text x="500" y="102" fill="#a3331f" font-size="12">名词作动：杖汉节</text><text x="500" y="122" fill="#a3331f" font-size="12">宾语前置：何以汝为见</text></g><text x="340" y="205" font-size="14" fill="#4a2b8a" text-anchor="middle">《汉书》行文谨严，实词与句法均须细辨</text></svg>', caption: '文言知识归纳：实词、活用与特殊句式是读通《汉书》的钥匙。' },
        { type: 'paragraph', text: '苏武以十九年的坚守，将「使于四方，不辱君命」的使臣气节写成了千古丰碑。班固用笔谨严而深情，让这位持节牧羊的英雄，至今仍光照史册。' },
        { type: 'list', items: ['文体：史传（《汉书》传记），行文谨严', '形象：持节不屈、忠贞爱国的民族气节', '艺术：以卫律、李陵反衬苏武（对比衬托）', '文言：稍/秩/因 + 名词作动、宾语前置'] },
        { type: 'reading', text: '延伸：苏武「杖汉节牧羊」与张骞「凿空」西域、班超「投笔从戎」，同为汉代外交与边塞精神的象征。可联系《汉书》其他篇章，理解汉代士人的忠勇传统。' }
      ],
      exercises: [
        { type: 'choice', question: '苏武「杖汉节牧羊，卧起操持，节旄尽落」表现了什么？', options: ['苏武生活闲适', '苏武持节不屈、忠贞守节的坚定', '苏武思念家乡', '苏武已经投降匈奴'], answer: '苏武持节不屈、忠贞守节的坚定', explanation: '苏武被流放北海，以放牧公羊为折磨，却始终「杖汉节牧羊，卧起操持」，连睡觉都握着汉廷符节，以致节旄全部脱落。这一细节生动刻画了他虽身处绝境而汉节不离手、忠心不改的铮铮铁骨，是全文最感人的镜头。' },
        { type: 'choice', question: '文章以卫律、李陵衬托苏武，这种手法是？', options: ['对比衬托', '象征', '夸张', '借景抒情'], answer: '对比衬托', explanation: '卫律逼降利诱、背汉求荣，李陵因私情劝降、终亦投降，二人与苏武形成鲜明对照。作者以降者的懦弱反衬苏武的持节不屈，使主要人物的民族气节更加突出，这是《汉书》写人常用的对比衬托之法。' },
        { type: 'fill', question: '「武既至海上，廪食不至，掘野鼠去草实而食之」中「去」通「______」，意为______。', answer: '弆|收藏', explanation: '「去」通「弆」（jǔ），意为收藏。苏武在北海断粮，便挖掘野鼠、收藏草籽来充饥，可见其生存之艰难。这一细节与「杖汉节牧羊，节旄尽落」相映，凸显其忍辱负重、坚守十九年的非凡意志。' },
        { type: 'fill', question: '《苏武传》选自班固的《______》，它是我国第一部纪传体______史。', answer: '汉书|断代', explanation: '《苏武传》出自《汉书·李广苏建传》附传。《汉书》由东汉班固编撰，是中国第一部纪传体断代史，记载西汉一代历史，与《史记》《后汉书》《三国志》并称「前四史」，其行文谨严，写人叙事别有风神。' },
        { type: 'choice', question: '关于「因」字在文中的用法，下列正确的一项是？', options: ['「因厚赂单于」中「因」意为「因为」', '「因厚赂单于」中「因」意为「趁机、趁着」', '「因」在文中皆作连词「于是」', '「因」在文中皆指「依靠」'], answer: '「因厚赂单于」中「因」意为「趁机、趁着」', explanation: '「因厚赂单于」的「因」是介词，意为趁着（答其善意）之机，顺便厚赠单于，以表汉廷诚意。文言中「因」常作「趁着、趁机」或「通过、经由」解，须据语境辨析，不可一律译为「因为」或「于是」。' }
      ]
    },

    /* ==================== 第3课 过秦论 ==================== */
    {
      id: 'xb2-u3-l3',
      cover: 'assets/cover/chinese/xb2-u3-l3.svg',
      name: '《过秦论》',
      author: '贾谊',
      chapter: '第三单元 历史的现场（中华传统文化经典研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近贾谊与《过秦论》' },
        { type: 'paragraph', text: '贾谊（前200—前168），西汉初年著名政论家、文学家，世称贾生。他年少才高，针砭时弊，其文气势磅礴、逻辑严密。《过秦论》分上、中、下三篇，本文为「上篇」，总结秦速亡的教训，是汉初史论（政论文）的巅峰之作。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>史论（政论文）</strong>。它不同于史传的记事写人，而是<strong>借史立论、以古鉴今</strong>：先铺叙秦之强盛与速亡，再引出「仁义不施而攻守之势异也」的结论，旨在为汉文帝提供治国鉴戒。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef3fb"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="270" height="120" rx="10" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="175" y="80" fill="#5b3b12">秦之强</text><text x="175" y="104" fill="#5b4636" font-size="12">席卷天下·吞二周</text><text x="175" y="124" fill="#5b4636" font-size="12">序八州而朝同列</text><rect x="370" y="50" width="270" height="120" rx="10" fill="#fdecea" stroke="#e05d44" stroke-width="2"/><text x="505" y="80" fill="#a3331f">秦之亡</text><text x="505" y="104" fill="#a3331f" font-size="12">一夫作难·七庙隳</text><text x="505" y="124" fill="#a3331f" font-size="12">身死人手为天下笑</text></g><path d="M310 110 L370 110" stroke="#c0392b" stroke-width="3" marker-end="url(#q3a)"/><defs><marker id="q3a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="205" font-size="14" fill="#33536e" text-anchor="middle">强极而亡，反差巨大——引人探究「何也」</text></svg>', caption: '秦之强与秦之亡形成巨幅反差，为论断蓄势。' },
        { type: 'heading', text: '二、原文研读（核心段落）' },
        { type: 'poem', text: '秦孝公据崤函之固，拥雍州之地，君臣固守以窥周室，有席卷天下，包举宇内，囊括四海之意，并吞八荒之心。\n当是时也，商君佐之，内立法度，务耕织，修守战之具；外连衡而斗诸侯。于是秦人拱手而取西河之外。\n……\n及至始皇，奋六世之余烈，振长策而御宇内，吞二周而亡诸侯，履至尊而制六合，执敲扑而鞭笞天下，威振四海。\n……\n然秦以区区之地，致万乘之势，序八州而朝同列，百有余年矣；然后以六合为家，崤函为宫。\n一夫作难而七庙隳，身死人手，为天下笑者，何也？仁义不施而攻守之势异也。' },
        { type: 'keypoint', label: '思想内涵', text: '全文的<strong>核心论点</strong>是：「<strong>仁义不施而攻守之势异也</strong>」。秦在兼并六国（攻）时凭暴力可行，统一天下（守）后局势已变，却仍行暴政、不施仁义，攻守形势不同却沿用旧策，终致速亡。贾谊以此警醒汉廷须行仁政。' },
        { type: 'example', label: '论断赏析', text: '篇末「仁义不施而攻守之势异也」为何是全篇文眼？<br><br><strong>解析</strong>：前文用大量篇幅<strong>铺陈秦之强</strong>（孝公崛起、始皇统一）与<strong>陈涉之弱</strong>，造成「强秦竟亡于弱卒」的强烈反差，至此才陡然点出原因——统一前后「攻守之势」已变，秦却「仁义不施」、暴政依旧。这一句<strong>收束全篇、画龙点睛</strong>，将叙事水到渠成地升华为历史规律，极有力量。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f5f0ff"/><g font-size="13" text-anchor="middle"><rect x="20" y="60" width="180" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="110" y="88">叙秦之强</text><text x="110" y="108" fill="#555" font-size="12">铺陈排比</text><rect x="230" y="60" width="180" height="60" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="320" y="88">陈涉对比</text><text x="320" y="108" fill="#555" font-size="12">强秦 vs 弱卒</text><rect x="440" y="60" width="200" height="60" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="540" y="88">点明结论</text><text x="540" y="108" fill="#1e6b34" font-size="12">仁义不施</text></g><g stroke="#34a853" stroke-width="2" fill="none"><line x1="200" y1="90" x2="228" y2="90" marker-end="url(#q3b)"/><line x1="410" y1="90" x2="438" y2="90" marker-end="url(#q3b)"/></g><defs><marker id="q3b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#34a853"/></marker></defs><text x="340" y="190" font-size="14" fill="#4a2b8a" text-anchor="middle">层层蓄势，末段陡转，卒章显志</text></svg>', caption: '论证思路：铺叙蓄势—对比反差—卒章显志，逻辑严密。' },
        { type: 'heading', text: '三、艺术特色' },
        { type: 'paragraph', text: '文章善用「铺陈排比」极写秦之强盛（「席卷天下，包举宇内，囊括四海，并吞八荒」），又用陈涉与六国、强秦与弱卒的「层层对比」凸显反差，语言汪洋恣肆、气势磅礴，使「仁义不施」的结论极具说服力。' },
        { type: 'list', items: [
          '制：控制、统御（「履至尊而制六合」）；又指「规模」',
          '亡：灭亡（「吞二周而亡诸侯」）；又指「逃亡」',
          '利：锐利（「地利」）；又指「便利、有利」',
          '固：险固（「据崤函之固」，形容词作名词）'
        ] },
        { type: 'table', headers: ['多义词', '文中义', '例句'], rows: [
          ['制', '控制、统御', '履至尊而制六合'],
          ['亡', '使……灭亡', '吞二周而亡诸侯'],
          ['利', '便利、有利', '因利乘便'],
          ['固', '险固（名）', '据崤函之固']
        ] },
        { type: 'warn', label: '易错提醒', text: '「天下云集响应，赢粮而景从」中「云」「响」「景」是<strong>名词作状语</strong>（像云一样、像回声一样、像影子一样），不是主语。又「<strong>景</strong>」通「<strong>影</strong>」。这类「名词+动词」结构在文中极多（席卷、包举、囊拢），须辨明其修饰关系，否则易误读句意。' },
        { type: 'tip', label: '阅读方法', text: '读史论要抓「叙—比—论」三环节：先看作者的叙事铺排为论点作了什么铺垫，再看他设置了哪些对比，最后锁定篇末的那句结论。贾谊的论点往往藏在段尾，前面全是蓄势。' },
        { type: 'keypoint', label: '学习重点', text: '理解「<strong>仁义不施而攻守之势异也</strong>」的核心论点，领会<strong>铺陈排比、对比论证</strong>的论说技巧与磅礴气势，积累「制」「亡」「利」等多义词与名词作状语等词类活用。' },
        { type: 'list', items: [
          '名词作状语：席（像席子）、包（像包裹）、囊（像口袋）',
          '名词作状语：云、响、景（像云/回声/影子）',
          '使动用法：亡诸侯（使诸侯亡）、却匈奴',
          '被动句：为天下笑（被天下人耻笑）'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef6f0"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="280" height="120" rx="10" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="180" y="78" fill="#1a3c8a">一词多义</text><text x="180" y="102" fill="#33536e" font-size="12">制（控制/规模）·亡（灭/逃）</text><text x="180" y="122" fill="#33536e" font-size="12">利（锐利/便利）</text><rect x="360" y="50" width="280" height="120" rx="10" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="500" y="78" fill="#a3331f">词类活用</text><text x="500" y="102" fill="#a3331f" font-size="12">名词作状语：席卷、包举</text><text x="500" y="122" fill="#a3331f" font-size="12">天下云集响应</text></g><text x="340" y="205" font-size="14" fill="#1e6b34" text-anchor="middle">铺排中多见活用与多义，是研读政论文的钥匙</text></svg>', caption: '文言知识归纳：多义词与名词作状语是本文的研读重点。' },
        { type: 'paragraph', text: '《过秦论》以雄辩之势总结秦亡教训，既是一篇杰出的史论，也是汉初政论文的典范。其「借古讽今」的写法，深刻影响了后世的史论与奏议。' },
        { type: 'list', items: ['文体：史论（政论文），借史立论', '论点：仁义不施而攻守之势异也', '艺术：铺陈排比、对比论证、气势磅礴', '文言：制/亡/利多义 + 名词作状语'] },
        { type: 'reading', text: '延伸：贾谊另有《陈政事疏》《论积贮疏》等，皆忧国忧民、切中时弊。可联系《史记·秦始皇本纪》后附的太史公曰，看不同史家对秦亡原因的相近判断。' }
      ],
      exercises: [
        { type: 'choice', question: '贾谊《过秦论》的中心论点是？', options: ['秦因地势险要而强', '仁义不施而攻守之势异也', '陈涉起义势不可挡', '六国破灭弊在赂秦'], answer: '仁义不施而攻守之势异也', explanation: '文章铺陈秦之强盛与速亡的巨大反差后，于篇末点明主旨：「仁义不施而攻守之势异也」——秦统一前凭暴力攻取可行，统一后天下已定，却仍不施仁义、继续暴政，攻守形势已变而策略不变，终致灭亡。这是全文的画龙点睛之笔。' },
        { type: 'choice', question: '下列表述符合《过秦论》艺术特色的是？', options: ['语言平淡、少有修辞', '铺陈排比、对比论证、气势磅礴', '以对话体展开', '通篇记叙、不加论断'], answer: '铺陈排比、对比论证、气势磅礴', explanation: '贾谊善用铺陈排比极写秦之强盛（「席卷天下，包举宇内」），又用陈涉与六国、强秦与弱卒的层层对比凸显反差，语言汪洋恣肆、气势磅礴，使「仁义不施」的结论极具说服力，是汉初政论文的典范。' },
        { type: 'fill', question: '「天下云集响应，赢粮而景从」中「云」「响」「景」都是名词作______，意为______。', answer: '状语|像云一样/像回声一样/像影子一样', explanation: '这三个名词分别修饰动词「集」「应」「从」，作状语，表比喻：像云一样聚集，像回声一样应和，像影子一样跟从。这是文言名词作状语的典型现象，生动写出天下百姓归附陈涉的迅猛声势，反衬秦之失民心。' },
        { type: 'fill', question: '「秦孝公据崤函之固，拥雍州之地」一句，「崤函」指______与______的险要地势。', answer: '崤山|函谷关', explanation: '「崤函」是崤山与函谷关的合称，地势险要，是秦国的东面门户与天然屏障。秦孝公凭此固守，内立法度、外连衡斗诸侯，奠定了秦国强盛的基业。理解地理名词有助于把握秦「据险以窥周室」的战略意图。' },
        { type: 'choice', question: '关于「制」字在文中的多义，下列判断正确的是？', options: ['「制」在文中只有「制造」一义', '「履至尊而制六合」中「制」意为控制、统御', '「制」在文中指「制度」', '「制」在文中皆读 zhì 且同义'], answer: '「履至尊而制六合」中「制」意为控制、统御', explanation: '「履至尊而制六合」指秦始皇登帝位、控制天下，「制」意为统御、控制。文言中「制」又有「规模」（如「增其旧制」）、「制定」等义，属多义词。须结合「制六合」的语境判断为「统御」，而非制造或制度。' }
      ]
    },

    /* ==================== 第4课 五代史伶官传序 ==================== */
    {
      id: 'xb2-u3-l4',
      cover: 'assets/cover/chinese/xb2-u3-l4.svg',
      name: '《五代史伶官传序》',
      author: '欧阳修',
      chapter: '第三单元 历史的现场（中华传统文化经典研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近欧阳修与《新五代史》' },
        { type: 'paragraph', text: '欧阳修（1007—1072），字永叔，号醉翁、六一居士，北宋文学家、史学家，「唐宋八大家」之一。他主修《新唐书》，自撰《新五代史》。《伶官传序》是《新五代史·伶官传》的序言，借后唐庄宗兴亡以警世人。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>史论（序——书序的一种）</strong>。它虽为人物传记的「序言」，却是一篇独立的<strong>说理短文</strong>：借评述庄宗李存勖的盛衰，阐发「忧劳可以兴国，逸豫可以亡身」的治国之理，体现史家「以史为鉴」的良苦用心。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef3fb"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="270" height="120" rx="10" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="175" y="80" fill="#5b3b12">庄宗之盛</text><text x="175" y="104" fill="#5b4636" font-size="12">系燕父子以组</text><text x="175" y="124" fill="#5b4636" font-size="12">函梁君臣之首</text><rect x="370" y="50" width="270" height="120" rx="10" fill="#fdecea" stroke="#e05d44" stroke-width="2"/><text x="505" y="80" fill="#a3331f">庄宗之衰</text><text x="505" y="104" fill="#a3331f" font-size="12">数十伶人困之</text><text x="505" y="124" fill="#a3331f" font-size="12">身死国灭为天下笑</text></g><path d="M310 110 L370 110" stroke="#c0392b" stroke-width="3" marker-end="url(#q4a)"/><defs><marker id="q4a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="205" font-size="14" fill="#33536e" text-anchor="middle">盛衰相反，皆由「人事」——忧劳兴国，逸豫亡身</text></svg>', caption: '庄宗盛衰对照：得天下与失天下，皆系于一念之「人事」。' },
        { type: 'heading', text: '二、原文研读（核心段落）' },
        { type: 'poem', text: '呜呼！盛衰之理，虽曰天命，岂非人事哉！原庄宗之所以得天下，与其所以失之者，可以知之矣。\n世言晋王之将终也，以三矢赐庄宗而告之曰：「梁，吾仇也；燕王，吾所立；契丹与吾约为兄弟，而皆背晋以归梁。此三者，吾遗恨也。与尔三矢，尔其无忘乃父之志！」\n庄宗受而藏之于庙。其后用兵，则遣从事以一少牢告庙，请其矢，盛以锦囊，负而前驱，及凯旋而纳之。\n……\n《书》曰：「满招损，谦得益。」忧劳可以兴国，逸豫可以亡身，自然之理也。\n故方其盛也，举天下之豪杰，莫能与之争；及其衰也，数十伶人困之，而身死国灭，为天下笑。\n夫祸患常积于忽微，而智勇多困于所溺，岂独伶人也哉？' },
        { type: 'keypoint', label: '思想内涵', text: '文章的核心论点是：「<strong>忧劳可以兴国，逸豫可以亡身</strong>」。作者认为国家盛衰虽似有天命，实由「人事」：庄宗忧劳而兴、逸豫而亡便是明证。篇末推进一步——「祸患常积于忽微，而智勇多困于所溺」，警示世人须防微杜渐。' },
        { type: 'example', label: '句式赏析', text: '结尾「夫祸患常积于忽微，而智勇多困于所溺，岂独伶人也哉」妙在何处？<br><br><strong>解析</strong>：这一句由庄宗「溺信伶人而亡国」的个案，<strong>推而广之</strong>到普遍的人生哲理：祸患往往从细微处积累，即便是智勇之人也常困于自身的癖好。末句「<strong>岂独伶人也哉</strong>」以反诘收束，由具体到普遍、由史事到人生，深化了「戒逸豫、慎所溺」的主旨，余味悠长。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f5f0ff"/><g font-size="13" text-anchor="middle"><rect x="20" y="60" width="180" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="110" y="88">提出论点</text><text x="110" y="108" fill="#555" font-size="12">盛衰由人事</text><rect x="230" y="60" width="180" height="60" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="320" y="88">叙庄宗事</text><text x="320" y="108" fill="#555" font-size="12">得天下·失天下</text><rect x="440" y="60" width="200" height="60" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="540" y="88">议论升华</text><text x="540" y="108" fill="#1e6b34" font-size="12">忧劳·逸豫</text></g><g stroke="#34a853" stroke-width="2" fill="none"><line x1="200" y1="90" x2="228" y2="90" marker-end="url(#q4b)"/><line x1="410" y1="90" x2="438" y2="90" marker-end="url(#q4b)"/></g><defs><marker id="q4b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#34a853"/></marker></defs><text x="340" y="190" font-size="14" fill="#4a2b8a" text-anchor="middle">先叙后议：以史实证论点，以论断点醒世人</text></svg>', caption: '论证思路：先叙后议，由史事引出普遍哲理。' },
        { type: 'heading', text: '三、艺术特色' },
        { type: 'paragraph', text: '本文采用「先叙后议、对比论证」的写法：先提出「盛衰由人事」的论点，继而叙写庄宗承父志得天下、宠伶人失天下的盛衰对比，最后以「忧劳兴国、逸豫亡身」的论断收束，叙议结合，说服力极强。' },
        { type: 'list', items: [
          '原：推究、推求本源（「原庄宗之所以得天下」），作动词',
          '其：语气副词，表祈使期望（「尔其无忘乃父之志」）',
          '于：在（「积于忽微」）；表被动（「困于所溺」「为天下笑」）',
          '乃：你的（「乃父之志」）'
        ] },
        { type: 'table', headers: ['词语', '文中义', '例句'], rows: [
          ['原', '推究（动）', '原庄宗之所以得天下'],
          ['其', '表期望的语气副词', '尔其无忘乃父之志'],
          ['于', '在 / 被', '积于忽微 / 困于所溺'],
          ['乃', '你的', '乃父之志']
        ] },
        { type: 'warn', label: '易错提醒', text: '「此三者，吾遗恨也」是<strong>判断句</strong>（「……者，……也」表判断），不是疑问句。「身死国灭，为天下笑」中「<strong>为</strong>」表<strong>被动</strong>。又「原」在此是动词「推究」，不能误读为名词「原来」；「其」是语气副词而非代词「他的」。' },
        { type: 'tip', label: '写作任务链接', text: '本单元写作可尝试<strong>学写人物短评或驳论文</strong>：写短评要抓人物一事见其精神（如苏武持节、庄宗逸豫）；写驳论要先立靶子（如「盛衰全由天命」），再用史实层层反驳，最后亮明己见。本文先破「天命」、后立「人事」，正可作范本。' },
        { type: 'keypoint', label: '学习重点', text: '理解「<strong>忧劳可以兴国，逸豫可以亡身</strong>」的论点与「以史为鉴」的写作目的，领会<strong>先叙后议、对比论证</strong>的写法，积累「原」「其」「于」等词语与判断、被动句式。' },
        { type: 'list', items: [
          '判断句：此三者，吾遗恨也（……者，……也）',
          '被动句：为天下笑 / 困于所溺',
          '状语后置：盛以锦囊（以锦囊盛之）',
          '反问句：岂独伶人也哉（岂……哉）'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef6f0"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="280" height="120" rx="10" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="180" y="78" fill="#1a3c8a">重点词语</text><text x="180" y="102" fill="#33536e" font-size="12">原（推究）·其（语气副词）</text><text x="180" y="122" fill="#33536e" font-size="12">于（在/被）</text><rect x="360" y="50" width="280" height="120" rx="10" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="500" y="78" fill="#a3331f">特殊句式</text><text x="500" y="102" fill="#a3331f" font-size="12">判断句：此三者，吾遗恨也</text><text x="500" y="122" fill="#a3331f" font-size="12">被动句：为天下笑</text></g><text x="340" y="205" font-size="14" fill="#1e6b34" text-anchor="middle">史论须明虚词与句式，方能贯通文气</text></svg>', caption: '文言知识归纳：虚词、判断句与被动句是研读史论的要点。' },
        { type: 'paragraph', text: '《伶官传序》虽短，却以「呜呼」起、以「岂独伶人也哉」收，感慨深沉、警策动人。它告诉我们：国家的兴亡、个人的成败，终在人为——这正是史论「以史为鉴」的永恒价值。' },
        { type: 'list', items: ['文体：史论（序），借史立论', '论点：忧劳兴国，逸豫亡身', '艺术：先叙后议、盛衰对比', '文言：原/其/于 + 判断、被动句式'] },
        { type: 'reading', text: '延伸：欧阳修倡导古文运动，主张「文以载道」。可将其与韩愈《师说》、苏轼《留侯论》对读，体会唐宋古文「因文见道」的共同追求。' }
      ],
      exercises: [
        { type: 'choice', question: '欧阳修《伶官传序》的中心论点是？', options: ['盛衰全由天命注定', '忧劳可以兴国，逸豫可以亡身', '伶人误国不可信', '庄宗之败源于兵力不足'], answer: '忧劳可以兴国，逸豫可以亡身', explanation: '文章开篇即问「盛衰之理，虽曰天命，岂非人事哉」，再以庄宗得天下与失天下的盛衰对比，得出结论：「忧劳可以兴国，逸豫可以亡身」。作者强调人事（勤政或享乐）才是国家兴亡的关键，天命不足恃，这是全文的核心论点。' },
        { type: 'choice', question: '本文的论证结构是？', options: ['先议后叙', '先叙后议、对比论证', '通篇纯议论', '以寓言说理'], answer: '先叙后议、对比论证', explanation: '文章先提出「盛衰由人事」的论点，继而叙写庄宗秉承父志、系燕函梁终得天下，又写其宠信伶人、身死国灭，先叙后议；并将「其盛」与「其衰」对照，以史实印证「忧劳兴国、逸豫亡身」，结构清晰、说服力强的史论笔法。' },
        { type: 'fill', question: '「《书》曰：『满招损，谦得益。』忧劳可以兴国，逸豫可以亡身」中「逸豫」意为______。', answer: '安逸享乐', explanation: '「逸豫」指安逸享乐、放纵懈怠。欧阳修借《尚书》「满招损，谦得益」引出论断：忧虑劳苦能使国家兴盛，安逸享乐会导致自身灭亡。这正是庄宗由盛转衰的内在根源，也是作者「以史为鉴」的良苦用心所在。' },
        { type: 'fill', question: '文章结尾「夫祸患常积于忽微，而智勇多困于所溺，岂独伶人也哉」中「所溺」指______。', answer: '所溺爱（沉迷）的人或事物', explanation: '「所溺」即所沉溺、所偏爱的人或事物。作者由庄宗溺信伶人而亡国，推而广之：祸患常从细微处积累，即便智勇之人也常困于自身的癖好，岂止伶人误国而已！此句由具体到普遍，深化了「戒逸豫」的主旨。' },
        { type: 'choice', question: '下列对「原庄宗之所以得天下」中「原」字解释正确的是？', options: ['原来', '推究、推求本源', '原谅', '起源（名词）'], answer: '推究、推求本源', explanation: '「原」在此作动词，意为推究、推求本源，「原庄宗之所以得天下」即推究庄宗得天下的原因。这是文言中常见的名词动用。结合下句「与其所以失之者，可以知之矣」，可知作者意在探求盛衰之由，以警后人。' }
      ]
    }

  );
})();
