/* ============================================================
 * 高一语文 · 必修 下册 · 古诗词诵读 + 附录（重点积累板块）
 * 5 课时：登岳阳楼 / 桂枝香·金陵怀古 / 鹊桥仙 / 念奴娇·过洞庭（古诗词诵读）
 *       + 重点积累板块（附录：字词/文学/文化/文言/写作）
 * 数据注入：chinese.bx2.points
 * 质量标准：每课 ≥22 内容块 / 3 SVG / 含 example+table+tip+warn+list(≥2)+keypoint+poem+小结
 * 诗词原文须准确，poem 块用 \n 换行
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx2');
  if (!v) return;

  v.points.push(
    /* ==================== 第1课 登岳阳楼（杜甫） ==================== */
    {
      id: 'bx2-u9-l1',
      cover: 'assets/cover/chinese/bx2-u9-l1.svg',
      name: '《登岳阳楼》',
      author: '杜甫',
      chapter: '古诗词诵读',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '杜甫（712—770），字子美，自号少陵野老，唐代伟大的现实主义诗人，被尊为「诗圣」，其诗因反映社会离乱称为「诗史」。他一生忧国忧民，漂泊西南，诗风沉郁顿挫，与李白并称「李杜」。' },
        { type: 'paragraph', text: '《登岳阳楼》作于大历三年（768）冬。时杜甫年近花甲，饱经战乱流离，虽得亲朋音书断绝、老病孤舟，仍登楼远望，将身世之悲与家国之忧融为一体，是杜甫晚年五律的压卷之作。' },
        { type: 'keypoint', label: '文体常识', text: '本诗是一首<strong>五言律诗</strong>（五律）。律诗讲究<strong>颔联、颈联对仗工整，平仄押韵严谨</strong>。杜甫以雄阔之景写沉郁之情，景愈壮而情愈悲，是「沉郁顿挫」风格的典范。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e9f1f6"/><rect x="0" y="220" width="680" height="80" fill="#9bbfcf"/><path d="M0 220 q170 -14 340 0 t340 0" stroke="#5b7a8a" stroke-width="2" fill="none" opacity="0.5"/><rect x="290" y="120" width="100" height="100" rx="4" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><path d="M290 120 l50 -30 50 30 z" fill="#8a5a2e"/><g fill="#7ec8e3"><circle cx="180" cy="120" r="20"/><circle cx="500" cy="120" r="20"/></g><text x="340" y="285" font-size="13" fill="#33485a" text-anchor="middle">吴楚东南坼，乾坤日夜浮：洞庭吞吐天地之壮景</text></svg>', caption: '登楼远眺，洞庭湖分隔吴楚、浮载乾坤，气象宏阔。' },
        { type: 'heading', text: '二、原诗通读' },
        { type: 'poem', text: '昔闻洞庭水，今上岳阳楼。\n吴楚东南坼，乾坤日夜浮。\n亲朋无一字，老病有孤舟。\n戎马关山北，凭轩涕泗流。' },
        { type: 'keypoint', label: '题解', text: '诗以「<strong>昔闻—今上</strong>」起笔，写夙愿得偿的登临；中二联一写<strong>洞庭之壮</strong>（吴楚坼、乾坤浮），一写<strong>身世之悲</strong>（无一字、有孤舟）；尾联由个人推及「戎马关山」的家国之忧，景壮情悲，沉郁深厚。' },
        { type: 'heading', text: '三、意象与手法' },
        { type: 'keypoint', label: '炼字', text: '「<strong>坼</strong>」字写洞庭<strong>劈裂</strong>吴楚大地，显其广阔；「<strong>浮</strong>」字写天地<strong>浮动</strong>于湖面，显其浩渺。二字<strong>化静为动、气吞宇宙</strong>，与孟浩然「气蒸云梦泽，波撼岳阳城」并擅写洞庭之胜。' },
        { type: 'keypoint', label: '情景关系', text: '全诗<strong>以乐景写哀情、以壮景衬悲情</strong>：洞庭之雄阔愈显诗人「老病孤舟」之渺小飘零；个人的涕泗又因「戎马关山」的家国之乱而愈显深重，形成<strong>景与情、小与大的强烈反差</strong>。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「吴楚东南坼，乾坤日夜浮」的意境与炼字。<br><br><strong>解析</strong>：洞庭湖在地理上分割吴楚（东南坼），在天地间浮载日月星辰（乾坤浮），诗人以<strong>「坼」「浮」两个动词</strong>赋予湖水以劈裂大地、托举乾坤的磅礴力量，视野由地及天、由空间到时间，气象雄阔。此联与诗人「老病孤舟」的渺小形成巨大反差，<strong>以壮景衬悲情</strong>，更显身世飘零、忧国伤时之沉痛，是唐人写洞庭的绝唱。' },
        { type: 'keypoint', label: '对仗', text: '本诗<strong>颔联「吴楚东南坼，乾坤日夜浮」与颈联「亲朋无一字，老病有孤舟」皆对仗工整</strong>：地名对地名、天地对身世，一动一静、一阔一狭，于严整中见沉郁，体现杜律「法度森严而情韵悠长」的造诣。' },
        { type: 'warn', label: '易错·词义', text: '「<strong>坼</strong>」读 chè，是<strong>裂开、分开</strong>之意（吴楚东南坼＝洞庭湖向东南裂开吴楚大地），不可误读为「拆」或解作「坍塌」；「<strong>字</strong>」在此指<strong>书信</strong>（亲朋无一字＝音书断绝），非「文字」；「<strong>涕泗</strong>」指<strong>眼泪鼻涕</strong>，此处泛指流泪。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="40" y="50" width="280" height="140" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="180" y="100" font-size="14" fill="#0f3b5e" text-anchor="middle">洞庭之壮</text><text x="180" y="125" font-size="12" fill="#0f3b5e" text-anchor="middle">吴楚坼·乾坤浮</text><rect x="360" y="50" width="280" height="140" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#5b1a12" text-anchor="middle">身世之悲</text><text x="500" y="125" font-size="12" fill="#5b1a12" text-anchor="middle">孤舟·涕泗流</text><path d="M320 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#u9l1b)"/><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">以壮景衬悲情：景愈阔，身世愈显飘零</text></svg>', caption: '洞庭之壮与身世之悲形成强烈反差，景愈阔而情愈沉。' },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '诗人登楼远望，由洞庭<strong>雄阔之景</strong>联想到自身<strong>老病孤舟</strong>的漂泊，更推及「<strong>戎马关山</strong>」的战乱未平，将<strong>个人身世之悲与家国兴亡之痛</strong>融为一体，展现杜甫「穷年忧黎元」的博大襟怀。' },
        { type: 'table', headers: ['联', '内容', '情感/手法'], rows: [['首联', '昔闻洞庭水，今上岳阳楼', '夙愿得偿，起笔平缓'], ['颔联', '吴楚东南坼，乾坤日夜浮', '壮阔洞庭，以壮衬悲'], ['颈联', '亲朋无一字，老病有孤舟', '身世飘零，对仗工整'], ['尾联', '戎马关山北，凭轩涕泗流', '由己及国，沉郁收束']] },
        { type: 'list', items: ['体裁：五言律诗，颔联颈联对仗', '炼字：「坼」「浮」化静为动，气吞宇宙', '手法：以壮景衬悲情，情景反差强烈', '结构：昔闻—今上—壮景—孤舟—家国', '风格：沉郁顿挫，景阔情深', '主旨：身世之悲与家国之忧交融'] },
        { type: 'tip', label: '拓展·登楼传统', text: '「登高望远」是中国诗歌的古老母题，自王粲《登楼赋》起，登楼多寄家国之思。杜甫另有《登高》《登楼》诸作，皆将个人飘零与社稷危难相系。范仲淹《岳阳楼记》「先天下之忧而忧」正承此精神——<strong>楼台虽小，忧乐关天下</strong>，是士大夫情怀的文学凝结。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0ef"/><g font-size="13" fill="#33485a" text-anchor="middle"><rect x="30" y="55" width="150" height="70" rx="8" fill="#cfe3f0" stroke="#5b7a8a" stroke-width="2"/><text x="105" y="82">洞庭壮景</text><text x="105" y="104">（阔）</text><rect x="220" y="55" width="150" height="70" rx="8" fill="#e8d5c8" stroke="#b06a3e" stroke-width="2"/><text x="295" y="82">孤舟身世</text><text x="295" y="104">（悲）</text><rect x="410" y="55" width="150" height="70" rx="8" fill="#e8c8c8" stroke="#b06a5a" stroke-width="2"/><text x="485" y="82">戎马关山</text><text x="485" y="104">（忧）</text><rect x="590" y="55" width="90" height="70" rx="8" fill="#e85d8d" stroke="#c0392b" stroke-width="2"/><text x="635" y="82">涕泗</text><text x="635" y="104">（泪）</text></g><g stroke="#9c5a8a" stroke-width="2" fill="none"><line x1="180" y1="90" x2="218" y2="90" marker-end="url(#u9l1c)"/><line x1="370" y1="90" x2="408" y2="90" marker-end="url(#u9l1c)"/><line x1="560" y1="90" x2="588" y2="90" marker-end="url(#u9l1c)"/></g><defs><marker id="u9l1c" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#9c5a8a"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">情感脉络：壮景 → 孤身 → 国忧 → 涕泪，由景及情、由己及国</text></svg>', caption: '由洞庭壮景写到孤舟身世，终以「戎马关山」的家国之泪收束。' },
        { type: 'list', items: ['杜甫《登岳阳楼》，五律，沉郁顿挫之代表', '炼字：「坼」「浮」化静为动，写尽洞庭雄阔', '手法：以壮景衬悲情，景愈阔而身世愈悲', '对仗：颔联颈联工整，法度森严', '尾联：戎马关山北，凭轩涕泗流，由己及国', '主旨：身世飘零与家国之忧交融，见诗圣襟怀'] }
      ],
      exercises: [
        { type: 'choice', question: '《登岳阳楼》的体裁是？', options: ['七言绝句', '五言律诗', '词', '散曲'], answer: '五言律诗', explanation: '全诗八句、每句五字，颔联（吴楚东南坼，乾坤日夜浮）与颈联（亲朋无一字，老病有孤舟）对仗工整，符合五言律诗的格律特征，属杜诗五律的压卷之作，而非绝句、词或散曲。' },
        { type: 'choice', question: '「吴楚东南坼，乾坤日夜浮」中「坼」「浮」的妙处是？', options: ['描写楼高', '化静为动，写洞庭劈裂吴楚、浮载天地之磅礴', '写雨雪天气', '形容游人众多'], answer: '化静为动，写洞庭劈裂吴楚、浮载天地之磅礴', explanation: '「坼」是裂开，「浮」是浮动。诗人以两动词赋予洞庭湖水劈裂大地、托举天地的力量，视野由地及天，气象雄阔，既写尽洞庭之胜，又以壮景反衬后文身世之悲，炼字典范。' },
        { type: 'fill', question: '「亲朋无一字」中，「字」指的是______（书信 / 文字），意为音书断绝。', answer: '书信', explanation: '古汉语中「字」常指书信（如「家书」「金字」）。「亲朋无一字」即亲朋好友杳无音信，与下句「老病有孤舟」共同写尽诗人漂泊西南、孤苦无依的晚境，是理解其身世之悲的关键。' },
        { type: 'choice', question: '尾联「戎马关山北，凭轩涕泗流」表达的情怀是？', options: ['只叹个人穷困', '由个人身世推及战乱未平的家国之忧', '歌颂战争胜利', '思念故乡风景'], answer: '由个人身世推及战乱未平的家国之忧', explanation: '诗人在孤舟老病中凭栏北望，想到关山以北战事未息（时吐蕃侵扰），不禁泪下。这泪既是身世之悲，更是忧国之痛，由己及国，体现杜甫「穷年忧黎元」的博大襟怀，将全诗推向沉郁高峰。' },
        { type: 'choice', question: '本诗主要的抒情手法是？', options: ['以壮景衬悲情', '直抒胸臆、毫无景语', '幽默讽刺', '虚构神话'], answer: '以壮景衬悲情', explanation: '诗人先以「吴楚坼、乾坤浮」写洞庭之雄阔，再陡转「亲朋无一字、老病有孤舟」写自身之渺小飘零，以辽阔壮景反衬深重悲情，景与情形成强烈反差，是杜诗「沉郁顿挫」的典型笔法。' }
      ]
    },

    /* ==================== 第2课 桂枝香·金陵怀古（王安石） ==================== */
    {
      id: 'bx2-u9-l2',
      cover: 'assets/cover/chinese/bx2-u9-l2.svg',
      name: '《桂枝香·金陵怀古》',
      author: '王安石',
      chapter: '古诗词诵读',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '王安石（1021—1086），字介甫，号半山，北宋政治家、文学家，「唐宋八大家」之一。他不仅是改革家，词亦峭拔遒劲、意境高远。其词一扫晚唐五代绮靡，开豪放一派之先声。' },
        { type: 'paragraph', text: '《桂枝香·金陵怀古》约作于王安石出知江宁（今南京）期间。金陵为六朝古都，词人登临送目，面对晚秋澄江，缅怀六朝兴废，寄寓对历史沧桑与北宋现实的深沉感慨，是宋词怀古名篇。' },
        { type: 'keypoint', label: '文体常识', text: '本篇是<strong>词</strong>，词牌「桂枝香」，双调一百零一字。怀古词多<strong>「即景—怀古—抒情」</strong>结构：先写眼前壮景，再追忆前朝旧事，终以议论感慨收束，将<strong>江山之永恒与人事之无常</strong>对举。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2f6"/><path d="M0 220 Q340 180 680 220 L680 300 L0 300 Z" fill="#9bbfcf"/><path d="M0 220 Q170 198 340 210 T680 220" stroke="#5b7a8a" stroke-width="2" fill="none" opacity="0.5"/><g fill="#7a9b3e"><path d="M120 220 l-10 -34 20 0 z"/><path d="M560 220 l-10 -34 20 0 z"/></g><circle cx="500" cy="80" r="26" fill="#f4d35e" opacity="0.8"/><g fill="#e85d3d"><path d="M300 200 l16 -10 16 10 z"/><path d="M340 200 l16 -10 16 10 z"/></g><text x="340" y="285" font-size="13" fill="#33485a" text-anchor="middle">千里澄江似练，翠峰如簇：晚秋金陵的壮美图卷</text></svg>', caption: '「登临送目」起笔，写尽金陵晚秋澄江翠峰的宏阔。' },
        { type: 'heading', text: '二、原词通读' },
        { type: 'poem', text: '登临送目，正故国晚秋，天气初肃。\n千里澄江似练，翠峰如簇。归帆去棹残阳里，背西风，酒旗斜矗。\n彩舟云淡，星河鹭起，画图难足。\n念往昔，繁华竞逐，叹门外楼头，悲恨相续。\n千古凭高对此，谩嗟荣辱。\n六朝旧事随流水，但寒烟衰草凝绿。\n至今商女，时时犹唱，后庭遗曲。' },
        { type: 'keypoint', label: '题解', text: '上片写<strong>金陵晚秋壮景</strong>（澄江、翠峰、归帆、酒旗、彩舟、鹭起），下片转入<strong>怀古抒情</strong>：由六朝「繁华竞逐」的覆灭，到「寒烟衰草」的荒凉，终以「商女犹唱后庭遗曲」收束，借古伤今、寄意遥深。' },
        { type: 'heading', text: '三、意象与手法' },
        { type: 'keypoint', label: '写景炼字', text: '「<strong>似练</strong>」以白练喻澄江之静净；「<strong>如簇</strong>」以箭簇喻翠峰之峭聚；「<strong>斜矗</strong>」写酒旗在西风中的孤直。设喻精切、炼字峻洁，尽显金陵江山之壮与晚秋之肃。' },
        { type: 'keypoint', label: '用典', text: '「<strong>门外楼头</strong>」化用杜牧「门外韩擒虎，楼头张丽华」诗意，写陈后主荒淫亡国；「<strong>后庭遗曲</strong>」指陈后主所作《玉树后庭花》，向来被视为「亡国之音」。以典写史，含蓄而沉痛。' },
        { type: 'example', label: '鉴赏示范', text: '赏析「千里澄江似练，翠峰如簇」的写景艺术。<br><br><strong>解析</strong>：词人登临送目，以「<strong>似练</strong>」喻澄澈的长江如一条白练舒展千里，以「<strong>如簇</strong>」喻青翠山峰如箭簇般峭拔攒聚。两个比喻一写水之悠长静美、一写山之峻峭峥嵘，<strong>视角由远及近、由水及山</strong>，色彩清丽而气象宏阔。「千里」「翠峰」以大笔勾勒，尽显金陵形胜，为下片怀古铺垫雄阔的背景。' },
        { type: 'keypoint', label: '虚实结合', text: '上片写<strong>眼前实景</strong>（澄江、归帆、彩舟、鹭起），下片写<strong>历史虚境</strong>（繁华竞逐、门外楼头），再由虚返实（寒烟衰草、商女遗曲）。<strong>虚实相生</strong>，使江山永恒与人事倏忽形成对照，怀古之思愈显苍凉。' },
        { type: 'warn', label: '易错·词义', text: '「<strong>肃</strong>」在此指<strong>肃杀、萧瑟</strong>（天气初肃＝晚秋天气刚显肃杀），非「严肃」；「<strong>谩嗟</strong>」的「谩」读 màn，是<strong>空自、徒然</strong>之意（谩嗟荣辱＝空叹兴亡）；「<strong>簇</strong>」指<strong>聚拢、攒聚</strong>（如箭簇），非「一簇花」之量词。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="40" y="50" width="280" height="140" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="180" y="100" font-size="14" fill="#0f3b5e" text-anchor="middle">上片·江山实景</text><text x="180" y="125" font-size="12" fill="#0f3b5e" text-anchor="middle">澄江翠峰·画图难足</text><rect x="360" y="50" width="280" height="140" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#5b1a12" text-anchor="middle">下片·六朝虚境</text><text x="500" y="125" font-size="12" fill="#5b1a12" text-anchor="middle">繁华竞逐·后庭遗曲</text><path d="M320 120 h40" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#u9l2b)"/><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">结构：即景 → 怀古 → 抒情，虚实相生</text></svg>', caption: '上片写江山实景之壮，下片叹六朝虚境之亡，虚实对照。' },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '词借金陵怀古，感慨<strong>六朝繁华转头成空</strong>，警示当朝勿重蹈覆辙。结尾「<strong>至今商女，时时犹唱，后庭遗曲</strong>」暗含对北宋朝政的隐忧，体现王安石作为政治家的<strong>历史眼光与忧患意识</strong>。' },
        { type: 'table', headers: ['层次', '内容', '情感'], rows: [['上片写景', '澄江似练、翠峰如簇、彩舟鹭起', '江山壮美、晚秋澄肃'], ['下片怀古', '繁华竞逐、门外楼头', '叹六朝覆灭之速'], ['下片抒情', '寒烟衰草、商女遗曲', '借古伤今、忧患遥深']] },
        { type: 'list', items: ['体裁：词，词牌「桂枝香」，怀古词', '结构：即景→怀古→抒情，虚实相生', '炼字：似练、如簇、斜矗，设喻精切', '用典：门外楼头、后庭遗曲，写尽亡国之恨', '意象：澄江、翠峰、归帆、寒烟、衰草', '主旨：叹六朝兴废，寄北宋现实之忧'] },
        { type: 'tip', label: '拓展·怀古词脉', text: '怀古词至北宋渐成大宗。王安石此词「一洗五代旧习」（梁启超评），以壮阔之景、沉著之论开苏轼、辛弃疾豪放怀古之先声。此后苏轼《念奴娇·赤壁怀古》、辛弃疾《永遇乐·京口北固亭怀古》皆承其「江山—历史—我」的三重结构，成为中国词史的一道壮脉。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0ef"/><g font-size="13" fill="#33485a" text-anchor="middle"><rect x="30" y="55" width="160" height="70" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="110" y="82">澄江翠峰</text><text x="110" y="104">（景）</text><rect x="240" y="55" width="160" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="320" y="82">繁华竞逐</text><text x="320" y="104">（古）</text><rect x="450" y="55" width="200" height="70" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="550" y="82">后庭遗曲</text><text x="550" y="104">（讽）</text></g><g stroke="#9c5a8a" stroke-width="2" fill="none"><line x1="190" y1="90" x2="238" y2="90" marker-end="url(#u9l2c)"/><line x1="400" y1="90" x2="448" y2="90" marker-end="url(#u9l2c)"/></g><defs><marker id="u9l2c" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#9c5a8a"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">行文脉络：写景气势 → 怀古伤逝 → 遗曲寄讽</text></svg>', caption: '由晚秋壮景写到六朝兴废，终以「后庭遗曲」寄寓现实之忧。' },
        { type: 'list', items: ['王安石《桂枝香·金陵怀古》，怀古词名篇', '结构：即景（上片）→怀古抒情（下片）', '炼字：似练、如簇、斜矗，设喻峻洁', '用典：门外楼头、后庭遗曲，暗写亡国', '虚实：江山实景与六朝虚境相生对照', '主旨：叹六朝兴废，寄北宋朝政之忧患'] }
      ],
      exercises: [
        { type: 'choice', question: '《桂枝香·金陵怀古》的体裁与词牌是？', options: ['诗·浣溪沙', '词·桂枝香', '散曲·山坡羊', '赋·阿房宫'], answer: '词·桂枝香', explanation: '本文是一首词，「桂枝香」为词牌名（双调一百零一字）。全篇依词牌格律填写，属怀古词，借金陵形胜缅怀六朝兴废，而非诗、散曲或赋。' },
        { type: 'choice', question: '「千里澄江似练，翠峰如簇」运用的手法是？', options: ['以白练喻江、以箭簇喻峰，设喻精切', '夸张到失实', '纯白描无比喻', '拟人写山'], answer: '以白练喻江、以箭簇喻峰，设喻精切', explanation: '「似练」以白色绸练比喻澄澈悠长的长江，「如簇」以箭矢攒聚比喻峭拔青翠的山峰。两喻一写水之静美、一写山之峥嵘，视角由远及近，气象宏阔，是王安石炼字峻洁的范例。' },
        { type: 'fill', question: '「千古凭高对此，谩嗟荣辱」中，「谩」读 màn，意思是______（空自、徒然 / 谩骂），「谩嗟」即空叹兴亡。', answer: '空自、徒然', explanation: '「谩」在此读 màn，意为空自、徒然。「谩嗟荣辱」即徒然感叹历代兴亡荣辱。词人以此过渡到「六朝旧事随流水」，含「空叹无益、当以史为鉴」的深层寄意，并非「谩骂」之意。' },
        { type: 'choice', question: '「至今商女，时时犹唱，后庭遗曲」的用意是？', options: ['描写歌女动听', '借陈后主亡国之音，暗讽当朝不知鉴戒', '赞美音乐', '追忆盛唐'], answer: '借陈后主亡国之音，暗讽当朝不知鉴戒', explanation: '「后庭遗曲」指陈后主《玉树后庭花》，向称亡国之音。词人写至今仍有歌女唱此曲，意在警示北宋朝政：若一味宴乐不知以史为鉴，便可能重蹈六朝覆辙，寄寓深沉的现实忧患。' },
        { type: 'choice', question: '本词在词史上的地位是？', options: ['承袭晚唐绮靡', '一洗五代旧习，开豪放怀古之先声', '专写闺情', '属婉约艳科'], answer: '一洗五代旧习，开豪放怀古之先声', explanation: '此词以壮阔之景、沉著之论写怀古，一扫晚唐五代绮靡纤柔的词风，被推为宋词怀古的压卷，直接影响了苏轼《念奴娇·赤壁怀古》等豪放怀古之作，在词史上有开风之气。' }
      ]
    },

    /* ==================== 第3课 鹊桥仙（秦观） ==================== */
    {
      id: 'bx2-u9-l3',
      cover: 'assets/cover/chinese/bx2-u9-l3.svg',
      name: '《鹊桥仙》',
      author: '秦观',
      chapter: '古诗词诵读',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '秦观（1049—1100），字少游，一字太虚，号淮海居士，北宋婉约派代表词人，「苏门四学士」之一。其词清丽婉约、情韵兼胜，善于以景写情、含蓄深永，在北宋词坛独树一帜。' },
        { type: 'paragraph', text: '《鹊桥仙》是一首咏七夕的词。七夕为牛郎织女一年一度鹊桥相会的传说，历来多写离愁别恨。秦观却翻出新意，由相会之短反衬情爱之永，赋予爱情词以哲理的深度，是七夕题材的千古绝唱。' },
        { type: 'keypoint', label: '文体常识', text: '本篇是<strong>词</strong>，词牌「鹊桥仙」（双调五十六字）。它属<strong>婉约词</strong>，却于婉约中见<strong>议论风神</strong>：上片写相逢，下片写离别，结句「<strong>两情若是久长时，又岂在朝朝暮暮</strong>」以理胜情，别开生面。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#1f2233"/><g fill="#fff" opacity="0.85"><circle cx="80" cy="60" r="2"/><circle cx="200" cy="40" r="2"/><circle cx="340" cy="70" r="2"/><circle cx="480" cy="50" r="2"/><circle cx="600" cy="80" r="2"/><circle cx="150" cy="120" r="1.6"/><circle cx="420" cy="120" r="1.6"/></g><g stroke="#7fd4ff" stroke-width="2" opacity="0.7"><path d="M280 150 q60 -30 120 0" fill="none"/><path d="M280 165 q60 -30 120 0" fill="none"/></g><g fill="#e85d8d"><circle cx="270" cy="158" r="14"/></g><g fill="#7ec8e3"><circle cx="410" cy="158" r="14"/></g><text x="340" y="250" font-size="14" fill="#cfe0ff" text-anchor="middle">纤云弄巧，飞星传恨：银河迢迢上的鹊桥相会</text></svg>', caption: '「金风玉露一相逢，便胜却人间无数」写尽久别重逢之珍贵。' },
        { type: 'heading', text: '二、原词通读' },
        { type: 'poem', text: '纤云弄巧，飞星传恨，银汉迢迢暗度。\n金风玉露一相逢，便胜却人间无数。\n柔情似水，佳期如梦，忍顾鹊桥归路。\n两情若是久长时，又岂在朝朝暮暮。' },
        { type: 'keypoint', label: '题解', text: '上片写<strong>七夕相会</strong>：纤云、飞星、银汉烘托相逢之浪漫，「金风玉露一相逢，便胜却人间无数」极写重逢之珍贵；下片写<strong>依依惜别</strong>，终以「两情若是久长时，又岂在朝朝暮暮」翻案，化离愁为旷达。' },
        { type: 'heading', text: '三、意象与手法' },
        { type: 'keypoint', label: '意象', text: '词中意象清丽而富神话色彩：<strong>纤云、飞星、银汉</strong>写天上之境；<strong>金风（秋风）、玉露</strong>写相逢之时令；<strong>鹊桥、归路</strong>写聚散之场。意象皆淡雅高洁，烘托出爱情之纯美，不染尘俗。' },
        { type: 'keypoint', label: '对比与翻案', text: '「<strong>金风玉露一相逢</strong>」的短暂，反衬「<strong>胜却人间无数</strong>」的价值；下片由「佳期如梦」的怅惘，陡转结句「<strong>又岂在朝朝暮暮</strong>」的旷达。以<strong>短衬永、以离写聚</strong>，翻尽古人七夕悲叹之案。' },
        { type: 'example', label: '鉴赏示范', text: '赏析结句「两情若是久长时，又岂在朝朝暮暮」的妙处。<br><br><strong>解析</strong>：这两句是全词的<strong>「词眼」与议论高潮</strong>。词人一反历来七夕词「伤别恨久」的套路，提出：只要两情真诚长久，又何必在乎是否日日相守？它将缠绵的儿女之情升华为<strong>对爱情本质的哲思</strong>——重精神之契合，轻形迹之聚散。以理驭情、境界高远，使全词由婉约之悲转而为旷达之悟，余味无穷。' },
        { type: 'keypoint', label: '化用典故', text: '词融<strong>牛郎织女</strong>神话：「纤云弄巧」暗指织女以云锦示巧，「飞星传恨」写流星传递相思，「银汉迢迢暗度」写二人暗渡银河相会。典故化为眼前之景，自然而富诗意，不着痕迹。' },
        { type: 'warn', label: '易错·词义', text: '「<strong>暗度</strong>」是<strong>悄悄渡过</strong>（银汉迢迢暗度＝于漫长银河上悄然相会），非「暗中度日」；「<strong>忍顾</strong>」的「忍」是<strong>怎忍、不忍</strong>（忍顾鹊桥归路＝怎忍回头看那归去之路）；「<strong>金风</strong>」指<strong>秋风</strong>（秋属金），非「金色的风」。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="40" y="50" width="280" height="140" rx="8" fill="#e8c8e0" stroke="#9c5a8a" stroke-width="2"/><text x="180" y="100" font-size="14" fill="#5b1a52" text-anchor="middle">上片·相逢之珍</text><text x="180" y="125" font-size="12" fill="#5b1a52" text-anchor="middle">金风玉露胜人间</text><rect x="360" y="50" width="280" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#3e6b2e" text-anchor="middle">下片·旷达之悟</text><text x="500" y="125" font-size="12" fill="#3e6b2e" text-anchor="middle">久长岂在朝暮</text><path d="M320 120 h40" stroke="#9c5a8a" stroke-width="3" fill="none" marker-end="url(#u9l3b)"/><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">由相逢之喜到离别之悟：以短衬永、翻案生新</text></svg>', caption: '上片写相逢之珍贵，下片翻出「久长岂在朝暮」的旷达之悟。' },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '词借牛郎织女传说，歌咏<strong>纯真而久长的爱情</strong>：相聚虽短，情意却胜人间无数；只要两情不渝，便不必执着于朝朝暮暮的形聚。它将儿女之情升华为<strong>对爱情本质的旷达哲思</strong>，境界高远。' },
        { type: 'table', headers: ['句子', '手法', '意蕴'], rows: [['纤云弄巧，飞星传恨', '拟人、融神话入景', '烘托相思之浪漫'], ['金风玉露一相逢，胜却人间无数', '对比、以短衬永', '重逢之珍贵无价'], ['柔情似水，佳期如梦', '比喻', '情之绵柔、会之虚幻'], ['两情若是久长时，又岂在朝朝暮暮', '议论翻案', '爱情贵久长而非形聚']] },
        { type: 'list', items: ['体裁：词，词牌「鹊桥仙」，婉约而含理趣', '题材：牛郎织女七夕相会的爱情词', '意象：纤云、飞星、银汉、金风、玉露、鹊桥', '手法：对比翻案、以短衬永、化神话为景', '结构：上片相逢之珍 → 下片旷达之悟', '主旨：爱情贵在久长，岂在朝朝暮暮'] },
        { type: 'tip', label: '拓展·七夕诗词', text: '古来写七夕多伤离恨别（如「天阶夜色凉如水，卧看牵牛织女星」）。秦观却能「化悲为旷」，以理趣胜情，与苏轼「千里共婵娟」异曲同工——皆言<strong>心意相通、虽隔亦聚</strong>。这种由「怨」到「悟」的升华，正是宋词「以理入情」审美趋向的体现，对后世爱情诗词影响深远。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0ef"/><g font-size="13" fill="#5b1a52" text-anchor="middle"><rect x="30" y="55" width="160" height="70" rx="8" fill="#e8c8e0" stroke="#9c5a8a" stroke-width="2"/><text x="110" y="82">纤云飞星</text><text x="110" y="104">（景·会）</text><rect x="240" y="55" width="160" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="320" y="82">金风玉露</text><text x="320" y="104">（珍·聚）</text><rect x="450" y="55" width="200" height="70" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="550" y="82">久长岂在朝暮</text><text x="550" y="104">（悟·旷）</text></g><g stroke="#9c5a8a" stroke-width="2" fill="none"><line x1="190" y1="90" x2="238" y2="90" marker-end="url(#u9l3c)"/><line x1="400" y1="90" x2="448" y2="90" marker-end="url(#u9l3c)"/></g><defs><marker id="u9l3c" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#9c5a8a"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">行文脉络：写景气韵 → 相逢之珍 → 旷达之悟</text></svg>', caption: '由牛郎织女的浪漫相会，终归于「久长岂在朝暮」的旷达哲思。' },
        { type: 'list', items: ['秦观《鹊桥仙》，婉约词而含理趣', '题材：牛郎织女七夕传说', '意象：纤云、飞星、银汉、金风、玉露', '手法：对比翻案、以短衬永、化神话入景', '结句：两情若是久长时，又岂在朝朝暮暮', '主旨：爱情贵在精神久长，非形迹之聚散'] }
      ],
      exercises: [
        { type: 'choice', question: '《鹊桥仙》一词的题材与情感基调是？', options: ['咏史怀古', '咏七夕爱情，由离愁翻为旷达', '边塞征战', '田园闲适'], answer: '咏七夕爱情，由离愁翻为旷达', explanation: '本词借牛郎织女七夕相会传说写爱情。上片写相逢之珍贵，下片写惜别，结句却以「两情若是久长时，又岂在朝朝暮暮」翻案，由离愁升华为对爱情本质的旷达哲思，而非单纯的悲怨。' },
        { type: 'choice', question: '「金风玉露一相逢，便胜却人间无数」的妙处是？', options: ['写秋风寒冷', '以短暂相逢反衬其价值胜过人间无数相聚', '描写宴饮', '感叹时光飞逝'], answer: '以短暂相逢反衬其价值胜过人间无数相聚', explanation: '「金风玉露」点明秋日相逢，词人认为这于清凉秋光中一年一度的高质量相聚，胜过人间无数平庸的朝夕相伴。以「短」衬「永」、以「少」胜「多」，凸显爱情的纯美与珍贵，是全词警策。' },
        { type: 'fill', question: '「忍顾鹊桥归路」中，「忍」的意思是______（不忍、怎忍 / 忍耐），写牛郎织女不忍回望归去之途。', answer: '不忍、怎忍', explanation: '「忍」此处为「怎忍、不忍」之意。「忍顾鹊桥归路」即（离别时）怎忍回头去看那鹊桥归去之路，极写依依不舍、步步回首之态，与后文「又岂在朝朝暮暮」的旷达形成情致上的跌宕。' },
        { type: 'choice', question: '结句「两情若是久长时，又岂在朝朝暮暮」表达的是？', options: ['怨恨离别', '只要两情真诚久长，不必执着于日日相守', '要求天天见面', '否定爱情'], answer: '只要两情真诚久长，不必执着于日日相守', explanation: '这是全词词眼。词人翻弃古人七夕伤离的套路，提出爱情贵在精神契合与久长不渝，不必拘泥于形迹上的朝暮相伴。以理胜情、境界高远，将儿女之情升华为哲理，是宋词理趣的佳例。' },
        { type: 'choice', question: '本词与一般七夕诗词的不同在于？', options: ['同样只写悲怨', '化悲怨为旷达，以理趣胜情', '专写战争', '毫无情感'], answer: '化悲怨为旷达，以理趣胜情', explanation: '古来七夕诗词多写「伤别恨久」之悲，秦观却由相会之短反衬情爱之永，结于旷达之悟，与苏轼「千里共婵娟」同具「虽隔亦聚」的理趣，体现宋词「以理入情」的审美转向，故能别开生面、传诵千古。' }
      ]
    },

    /* ==================== 第4课 念奴娇·过洞庭（张孝祥） ==================== */
    {
      id: 'bx2-u9-l4',
      cover: 'assets/cover/chinese/bx2-u9-l4.svg',
      name: '《念奴娇·过洞庭》',
      author: '张孝祥',
      chapter: '古诗词诵读',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '张孝祥（1132—1169），字安国，号于湖居士，南宋爱国词人。他主张抗金、收复中原，词风近苏轼，雄健清旷而又襟怀洒脱。因触犯权奸，曾遭贬谪，却始终守正不阿，其词多写襟怀与节操。' },
        { type: 'paragraph', text: '《念奴娇·过洞庭》作于乾道二年（1166）被谗落职、北归途经洞庭之时。时近中秋，湖光澄澈，词人面对清风明月，以「孤光自照、肝肺皆冰雪」自明高洁，于旷达中见孤介之节。' },
        { type: 'keypoint', label: '文体常识', text: '本篇是<strong>词</strong>，词牌「念奴娇」（双调一百字，又名「酹江月」）。属<strong>豪放清旷</strong>一脉：上片写<strong>洞庭夜景之澄澈</strong>，下片写<strong>肝胆冰雪之孤高</strong>，景与情浑融，气格遒上。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e9f1f6"/><rect x="0" y="200" width="680" height="100" fill="#9bbfcf"/><path d="M0 200 q170 -12 340 0 t340 0" stroke="#5b7a8a" stroke-width="2" fill="none" opacity="0.5"/><g fill="#f4d35e" opacity="0.85"><circle cx="340" cy="90" r="30"/></g><path d="M326 92 q14 10 28 0" stroke="#e8a83a" stroke-width="2" fill="none"/><g fill="#fff" opacity="0.7"><path d="M300 120 q40 14 80 0" fill="none" stroke="#fff" stroke-width="2"/></g><text x="340" y="285" font-size="13" fill="#33485a" text-anchor="middle">玉鉴琼田三万顷：中秋洞庭表里澄澈的空明之境</text></svg>', caption: '「素月分辉，明河共影，表里俱澄澈」写尽水天一色的空明。' },
        { type: 'heading', text: '二、原词通读' },
        { type: 'poem', text: '洞庭青草，近中秋、更无一点风色。\n玉鉴琼田三万顷，着我扁舟一叶。\n素月分辉，明河共影，表里俱澄澈。\n悠然心会，妙处难与君说。\n应念岭海经年，孤光自照，肝肺皆冰雪。\n短发萧骚襟袖冷，稳泛沧浪空阔。\n尽挹西江，细斟北斗，万象为宾客。\n扣舷独啸，不知今夕何夕。' },
        { type: 'keypoint', label: '题解', text: '上片写<strong>洞庭空明之景</strong>：无风、玉鉴、素月、明河，天地「表里俱澄澈」；下片写<strong>自我孤高之怀</strong>：「肝肺皆冰雪」明高洁，「万象为宾客」显豪旷。景之澄澈与人之澄澈互为映照，物我两忘。' },
        { type: 'heading', text: '三、意象与手法' },
        { type: 'keypoint', label: '炼字', text: '「<strong>更无一点风色</strong>」写湖面之静绝；「<strong>玉鉴琼田</strong>」以玉镜美玉喻湖面之晶莹；「<strong>着我扁舟一叶</strong>」以「着」字将人安放于万顷澄波之上，<strong>大景衬小舟、显人之自在</strong>。' },
        { type: 'keypoint', label: '双关象征', text: '「<strong>表里俱澄澈</strong>」既写水天一色之<strong>景</strong>澄，又双关人品<strong>心地光明</strong>之「澄」；「<strong>肝肺皆冰雪</strong>」以冰雪喻<strong>高洁坦荡的襟怀</strong>。景与情、物与我在此合一，是意境构造的妙笔。' },
        { type: 'example', label: '鉴赏示范', text: '赏析「素月分辉，明河共影，表里俱澄澈」的意境。<br><br><strong>解析</strong>：这三句写洞庭夜景：明月将清辉洒满湖面，银河倒映水中与月辉共影，上下天光<strong>一片澄澈透明</strong>。「表里俱澄澈」既是写水天一色的<strong>视觉之纯净</strong>，又暗喻诗人<strong>心地光明的磊落襟怀</strong>，景与情双关。如此空明之境，正与词人「孤光自照、肝肺冰雪」的内在高洁互为表里，物我交融，意境旷达而清绝。' },
        { type: 'keypoint', label: '豪放笔力', text: '下片「<strong>尽挹西江，细斟北斗，万象为宾客</strong>」想象奇绝：舀尽西江之水、以北斗为勺斟酒，邀天地万物为宾客。气魄宏大、想象瑰丽，显<strong>苏轼式豪放旷达</strong>，而孤高自守之意亦在其中。' },
        { type: 'warn', label: '易错·词义', text: '「<strong>玉鉴琼田</strong>」中「鉴」是<strong>镜子</strong>（玉鉴＝玉镜，喻湖面），非「鉴赏」；「<strong>萧骚</strong>」指<strong>稀疏萧瑟</strong>（短发萧骚＝头发稀疏）；「<strong>挹</strong>」读 yì，是<strong>舀、汲取</strong>（尽挹西江＝舀尽西江之水）。这些字词关乎意境，须准确理解。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="40" y="50" width="280" height="140" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="180" y="100" font-size="14" fill="#0f3b5e" text-anchor="middle">上片·湖天澄澈</text><text x="180" y="125" font-size="12" fill="#0f3b5e" text-anchor="middle">表里俱澄澈（景）</text><rect x="360" y="50" width="280" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#3e6b2e" text-anchor="middle">下片·肝肺冰雪</text><text x="500" y="125" font-size="12" fill="#3e6b2e" text-anchor="middle">万象为宾客（怀）</text><path d="M320 120 h40" stroke="#9c5a8a" stroke-width="3" fill="none" marker-end="url(#u9l4b)"/><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">景与情互映：湖天澄澈 ↔ 襟怀冰雪，物我两忘</text></svg>', caption: '上片写湖天之澄澈，下片写肝胆之冰雪，景情互映。' },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '词借中秋洞庭的空明之景，抒写词人<strong>虽遭贬谪而襟怀高洁、孤介自守</strong>的傲岸气节。「肝肺皆冰雪」明其清白，「万象为宾客」显其豪旷，于澄澈之境中见<strong>光明坦荡、不以迁谪为意</strong>的胸襟。' },
        { type: 'table', headers: ['句子', '手法', '意蕴'], rows: [['玉鉴琼田三万顷', '比喻', '湖面晶莹如玉镜美田'], ['表里俱澄澈', '双关', '景澄且喻心地光明'], ['肝肺皆冰雪', '比喻', '襟怀高洁坦荡'], ['尽挹西江，细斟北斗，万象为宾客', '夸张想象', '豪旷孤高、物我两忘']] },
        { type: 'list', items: ['体裁：词，词牌「念奴娇」，清旷豪放', '结构：上片写景（澄澈）→ 下片写怀（冰雪）', '炼字：着、澄澈、冰雪，景情双关', '意象：玉鉴、素月、明河、扁舟、冰雪', '笔力：尽挹西江、万象为宾客，想象奇绝', '主旨：遭贬而襟怀高洁、孤介自守'] },
        { type: 'tip', label: '拓展·贬谪文学', text: '中国文人遭贬常借山水自遣：苏轼黄州作赋、张孝祥洞庭啸歌，皆于澄明之境中安顿失意之心。张孝祥「肝肺皆冰雪」与屈原「皭然泥而不滓」、周敦颐「出淤泥而不染」同脉——<strong>以自然之清，养人格之洁</strong>。这种「贬而不变其守」的气节，正是中国士大夫精神的闪光处。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0ef"/><g font-size="13" fill="#33485a" text-anchor="middle"><rect x="30" y="55" width="160" height="70" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="110" y="82">玉鉴琼田</text><text x="110" y="104">（景·澄）</text><rect x="240" y="55" width="160" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="320" y="82">肝肺冰雪</text><text x="320" y="104">（怀·洁）</text><rect x="450" y="55" width="200" height="70" rx="8" fill="#e8c8e0" stroke="#9c5a8a" stroke-width="2"/><text x="550" y="82">万象为宾客</text><text x="550" y="104">（境·旷）</text></g><g stroke="#9c5a8a" stroke-width="2" fill="none"><line x1="190" y1="90" x2="238" y2="90" marker-end="url(#u9l4c)"/><line x1="400" y1="90" x2="448" y2="90" marker-end="url(#u9l4c)"/></g><defs><marker id="u9l4c" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#9c5a8a"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">行文脉络：写景气韵 → 孤高写怀 → 豪旷忘物</text></svg>', caption: '由洞庭澄澈之景，写到肝肺冰雪之怀，终以万象为宾客的豪旷收束。' },
        { type: 'list', items: ['张孝祥《念奴娇·过洞庭》，清旷豪放词', '结构：上片洞庭澄澈之景 → 下片孤高之怀', '双关：表里俱澄澈，景澄兼喻心地光明', '名句：肝肺皆冰雪，明高洁坦荡之节', '想象：尽挹西江、万象为宾客，苏轼式豪旷', '主旨：遭贬而襟怀冰雪、孤介自守'] }
      ],
      exercises: [
        { type: 'choice', question: '《念奴娇·过洞庭》的写作背景是？', options: ['金榜题名宴饮', '被谗落职北归、中秋过洞庭', '出征边塞', '隐居山林'], answer: '被谗落职北归、中秋过洞庭', explanation: '此词作于乾道二年张孝祥被谗罢官、北归途经洞庭时，时近中秋。他面对澄澈湖光，以「肝肺皆冰雪」自明高洁，于旷达中见孤介守正之节，并非喜庆、征战或隐居之作。' },
        { type: 'choice', question: '「玉鉴琼田三万顷」中「鉴」的意思是？', options: ['鉴赏', '镜子（玉鉴喻湖面）', '鉴别', '见证'], answer: '镜子（玉鉴喻湖面）', explanation: '「鉴」本义为镜子。「玉鉴琼田」以玉镜、美玉比喻中秋洞庭湖面晶莹澄澈、广阔无垠。这里是比喻湖光，而非「鉴赏、鉴别」等动词义，理解偏差会扭曲意境。' },
        { type: 'fill', question: '「尽挹西江，细斟北斗，万象为宾客」中，「挹」读 yì，意思是______（舀、汲取 / 抑制）。', answer: '舀、汲取', explanation: '「挹」读 yì，意为舀取、汲取。「尽挹西江」即舀尽西江之水，「细斟北斗」以北斗星为勺斟酒，邀天地万物为宾客。想象奇绝、气魄宏大，显苏轼式豪放旷达，又含孤高自守之意。' },
        { type: 'choice', question: '「肝肺皆冰雪」比喻的是？', options: ['身体寒冷生病', '襟怀高洁坦荡、清白无瑕', '冰雪天气', '心情凄凉'], answer: '襟怀高洁坦荡、清白无瑕', explanation: '词人回想岭海为官一年，唯孤月光辉自照，肝胆如冰雪般澄澈洁白。以「冰雪」喻品格之高洁坦荡，既回应上片「表里俱澄澈」的景，又明其虽遭贬谪而守正不阿的孤介之节，是词眼所在。' },
        { type: 'choice', question: '本词上片「表里俱澄澈」的妙处在于？', options: ['仅写水清', '景（水天澄澈）与情（心地光明）双关交融', '写风浪很大', '纯写月色'], answer: '景（水天澄澈）与情（心地光明）双关交融', explanation: '「表里俱澄澈」写洞庭水天一色、上下透明的视觉之境，又暗喻诗人心地光明磊落的品格，景与情双关。这种物我交融的写法，使自然之清与人格之洁互为表里，意境旷达而清绝，是构造的高妙处。' }
      ]
    },

    /* ==================== 第5课 附录：重点积累板块 ==================== */
    {
      id: 'bx2-u9-l5',
      cover: 'assets/cover/chinese/bx2-u9-l5.svg',
      name: '重点积累板块',
      author: '附录',
      chapter: '附录：重点积累板块',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、本册重点积累概说' },
        { type: 'paragraph', text: '必修下册的文言文与古诗词，涉及丰富的语言、文学与文化知识。本附录将全书重点梳理为五个板块——<strong>字词梳理、文学常识、文化常识、文言知识、写作</strong>，帮助同学们系统积累、温故知新，为阅读与表达打下扎实基础。' },
        { type: 'paragraph', text: '积累贵在<strong>归类、对比、勤用</strong>：把散见各课的字词、典故、句式分门别类，在比较中辨异同，在写作与表达中反复运用，才能真正内化为语文素养。以下分板块说明。' },
        { type: 'keypoint', label: '积累总纲', text: '五个板块构成<strong>「字—篇—典—法—写」</strong>的完整链条：从字词基础，到文学文化常识，再到文言规律，最后落到写作运用。这是文言文学习与备考的<strong>主干知识树</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f5f0e6"/><g font-size="14" text-anchor="middle"><rect x="30" y="60" width="115" height="80" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="87" y="95">字词梳理</text><text x="87" y="118" fill="#7a6b5e" font-size="12">基础</text><rect x="165" y="60" width="115" height="80" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="222" y="95">文学常识</text><text x="222" y="118" fill="#33536e" font-size="12">篇</text><rect x="300" y="60" width="115" height="80" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="357" y="95" fill="#fff">文化常识</text><text x="357" y="118" fill="#fff" font-size="12">典</text><rect x="435" y="60" width="115" height="80" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="492" y="95" fill="#fff">文言知识</text><text x="492" y="118" fill="#dff0c8" font-size="12">法</text><rect x="570" y="60" width="95" height="80" rx="8" fill="#e85d3d" stroke="#c0392b" stroke-width="2"/><text x="617" y="95" fill="#fff">写作</text><text x="617" y="118" fill="#fff" font-size="12">用</text></g><path d="M145 100 h20 M280 100 h20 M415 100 h20 M550 100 h20" stroke="#7a6a3e" stroke-width="2.5" marker-end="url(#u9l5a)"/><defs><marker id="u9l5a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7a6a3e"/></marker></defs><text x="340" y="200" font-size="13" fill="#5b4636" text-anchor="middle">知识链：字 → 篇 → 典 → 法 → 写，环环相扣</text><text x="340" y="250" font-size="13" fill="#8a6d3b" text-anchor="middle">积累方法：归类 · 对比 · 勤用，三法并进</text></svg>', caption: '五个板块构成「字—篇—典—法—写」的知识树，环环相扣。' },
        { type: 'heading', text: '二、字词梳理与文言知识' },
        { type: 'keypoint', label: '重点词语', text: '本册需掌握的<strong>重点实词</strong>如：克（能够）、诚（如果/确实）、一（统一）、爱（贪图/吝惜）、族（灭族）、兵（兵器）、暴（通曝）、与（亲附/赞同）。<strong>重点虚词</strong>如：虽、故、于、见（偏指我）、其、之。须结合语境辨多义。' },
        { type: 'example', label: '实例辨析', text: '试辨「爱」字在不同课文中的含义。<br><br><strong>解析</strong>：「秦爱纷奢」（《阿房宫赋》）的「爱」是<strong>贪图、喜爱</strong>；「不爱珍器重宝肥饶之地」（《过秦论》）的「爱」是<strong>吝惜</strong>；「吴广素爱人」的「爱」是<strong>爱护</strong>。同一字在语境中义项各异，这正是文言一词多义的典型，积累时须以句为单位归类记忆，不可孤立背诵。' },
        { type: 'keypoint', label: '文言知识要点', text: '本册文言知识集中在五类：<strong>通假字</strong>（暴—曝、受—授、生—性）、<strong>一词多义</strong>（诚、一、爱、族）、<strong>古今异义</strong>（其实、祖父、不行）、<strong>词类活用</strong>（军：名作动；翼：名作状；族：使动）、<strong>特殊句式</strong>（宾语前置、判断句、被动句、状语后置）。' },
        { type: 'list', items: ['通假字：暴—曝、受—授、生—性、有—又', '一词多义：克/诚/一/爱/族/兵/与，须辨语境', '古今异义：其实（它的实际）、祖父（祖辈父辈）、不行（不能行走）', '词类活用：军（驻扎）、翼（像翼）、族（使灭族）', '特殊句式：不吾知（宾前）、者……也（判断）、见……（被动）', '积累法：以句为单位，归类对比，勤查勤用'] },
        { type: 'warn', label: '易错·混淆', text: '最易混淆的是<strong>「于」与「见」</strong>：①「受命于人主」的「于」表<strong>从/被</strong>；②「冀君实或见恕也」的「见」是<strong>偏指我方</strong>的副词。二者都涉「被动」却词性不同，且「见」绝不可解作「看见」。备考时务必单独立卡、对比例句。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="40" y="45" width="280" height="150" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="180" y="95" font-size="14" fill="#5b3b12" text-anchor="middle">实词·虚词</text><text x="180" y="122" font-size="12" fill="#5b3b12" text-anchor="middle">克/诚/一/爱/族</text><text x="180" y="146" font-size="12" fill="#5b3b12" text-anchor="middle">虽/故/于/见</text><rect x="360" y="45" width="280" height="150" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="500" y="95" font-size="14" fill="#3e6b2e" text-anchor="middle">五类文言现象</text><text x="500" y="122" font-size="12" fill="#3e6b2e" text-anchor="middle">通假·多义·活用</text><text x="500" y="146" font-size="12" fill="#3e6b2e" text-anchor="middle">异义·特殊句式</text><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">文言积累：字词为基础，五类现象为方法</text></svg>', caption: '文言积累以字词为基础，以「通假/多义/活用/异义/句式」五类为方法。' },
        { type: 'heading', text: '三、文学常识与文化常识' },
        { type: 'keypoint', label: '文学常识', text: '本册涉及多种文体源流：<strong>诸子散文</strong>（论语、孟子、庄子）、<strong>史传散文</strong>（左传、史记）、<strong>奏疏</strong>（谏太宗十思疏）、<strong>辞赋</strong>（阿房宫赋）、<strong>史论</strong>（六国论）、<strong>书信体议论文</strong>（答司马谏议书），以及<strong>唐诗、宋词</strong>（杜甫、王安石、秦观、张孝祥）。' },
        { type: 'table', headers: ['文体', '代表篇目', '核心特征'], rows: [['奏疏', '谏太宗十思疏', '臣向君陈事，委婉而切至'], ['辞赋', '阿房宫赋', '铺陈排比、借古讽今'], ['史论', '六国论', '开门见山、以史论政'], ['书信议论文', '答司马谏议书', '立尺驳敌、理足气盛'], ['诗词', '杜甫、王安石等', '即景抒情、意象意境']] },
        { type: 'keypoint', label: '文化常识', text: '需留意的文化知识：<strong>干支纪年</strong>（壬戌、乾隆三十九年）、<strong>朔望晦</strong>（初一/十五/月末）、<strong>千乘之国</strong>（诸侯大国，乘指兵车）、<strong>参乘</strong>（陪乘护卫）、<strong>九宾</strong>（朝会大典之礼）等，皆关乎读懂古文语境。' },
        { type: 'list', items: ['诸子散文：语录体、对话体，重义理', '史传散文：纪传、编年，重叙事写人', '奏疏/辞赋/史论/书议：古代议论文四大支', '唐诗：古体近体，重格律意境', '宋词：词牌定格，婉约豪放并峙', '文化：干支、朔望晦、千乘、参乘等'] },
        { type: 'tip', label: '拓展', text: '文体演变是一条长河：从先秦诸子之「立言」、两汉辞赋之「铺陈」、唐宋古文之「载道」，到明清议论文之「经世」，议论性文章始终是中国文章的脊梁。读本册四篇议论文，正可顺着这条脉络，理解<strong>「文以载道、文以经世」</strong>的传统，对今天的议论文写作大有裨益。' },
        { type: 'heading', text: '四、写作板块与方法小结' },
        { type: 'keypoint', label: '写作指向', text: '本册写作训练覆盖：<strong>议论性文章</strong>（论点鲜明、论证严密）、<strong>事理说明文</strong>（条理清晰、准确平实）、<strong>调查报告</strong>（基于事实、数据分析）、<strong>演讲稿</strong>（有的放矢、感染听众）、<strong>文学鉴赏类文章</strong>（析意象、品语言、悟主旨）。' },
        { type: 'example', label: '方法实例', text: '如何写好一篇文学鉴赏短文？<br><br><strong>解析</strong>：可遵循「<strong>定角度—引文本—作分析—点主旨</strong>」四步：先确定鉴赏角度（如炼字、意象、手法），再引用原句为据，继而结合语境具体分析其妙处，最后点明表情达意之效。如赏「吴楚东南坼」，先定「炼字」，引原句，析「坼」「浮」化静为动，终归于沉郁顿挫之境。有例有据，方不空泛。' },
        { type: 'table', headers: ['写作类型', '关键要求', '本册范例'], rows: [['议论性文章', '论点突出、论证严密', '谏、答、赋、论四篇'], ['事理说明文', '条理清晰、准确平实', '科普、事理说明'], ['调查报告', '事实为基、数据支撑', '社会/校园调查'], ['演讲稿', '对象明确、富有感染力', '反对党八股精神'], ['文学鉴赏', '析意象、品语言、悟主旨', '本册诗词诵读']] },
        { type: 'list', items: ['议论文章：亮明论点，分层论证（立—破—立）', '说明文章：抓住特征，条理与准确并重', '调查报告：用事实说话，忌主观臆断', '演讲稿：看对象、有共鸣、语言有势', '文学鉴赏：定角度、引文本、细分析、点主旨', '总法：多读多写多改，以读促写'] },
        { type: 'tip', label: '拓展', text: '叶圣陶说「<strong>写作是极平常的事，也是极要紧的事</strong>」。本册从古代议论文到现代演讲稿，都在示范「如何把道理说清、把主张立住」。建议同学们建立「素材本」：日常积累名言、事例、好词好句，并定期练笔——先模仿名家结构，再逐步形成个人风格，写作自能渐入佳境。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#5b3b12" text-anchor="middle"><rect x="30" y="55" width="120" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="90" y="82">字词</text><text x="90" y="104">（基）</text><rect x="180" y="55" width="120" height="70" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="240" y="82">文学</text><text x="240" y="104">（篇）</text><rect x="330" y="55" width="120" height="70" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="390" y="82" fill="#fff">文化</text><text x="390" y="104" fill="#fff">（典）</text><rect x="480" y="55" width="90" height="70" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="525" y="82" fill="#fff">文言</text><text x="525" y="104" fill="#fff">（法）</text><rect x="590" y="55" width="90" height="70" rx="8" fill="#e85d3d" stroke="#c0392b" stroke-width="2"/><text x="635" y="82" fill="#fff">写作</text><text x="635" y="104" fill="#fff">（用）</text></g><path d="M150 90 h30 M300 90 h30 M450 90 h30 M570 90 h20" stroke="#7a6a3e" stroke-width="2.5" marker-end="url(#u9l5b)"/><defs><marker id="u9l5b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7a6a3e"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">积累闭环：字词→文学→文化→文言→写作，以用为归</text></svg>', caption: '五个板块构成积累闭环，最终落到「写作运用」这一归宿。' },
        { type: 'list', items: ['附录五大板块：字词/文学/文化/文言/写作', '字词：重点实词虚词，结合语境辨多义', '文言五类：通假、多义、异义、活用、特殊句式', '文学：诸子、史传、奏疏、辞赋、史论、诗词', '文化：干支、朔望晦、千乘、参乘等常识', '写作：议论/说明/调查/演讲/鉴赏，以读促写'] }
      ],
      exercises: [
        { type: 'choice', question: '本册「重点积累板块」的五个板块是？', options: ['字词句、阅读、作文、修辞、标点', '字词梳理、文学常识、文化常识、文言知识、写作', '拼音、书法、绘画、音乐、舞蹈', '算术、几何、物理、化学、生物'], answer: '字词梳理、文学常识、文化常识、文言知识、写作', explanation: '附录将全书重点归为五个板块：字词梳理（基础）、文学常识（篇）、文化常识（典）、文言知识（法）、写作（用），构成「字—篇—典—法—写」的知识树，系统帮助同学积累与运用，而非其他无关科目。' },
        { type: 'choice', question: '「秦爱纷奢」与「不爱珍器重宝」中「爱」的含义分别是？', options: ['都指爱护', '贪图/吝惜（一词多义）', '都指喜爱', '都指厌恶'], answer: '贪图/吝惜（一词多义）', explanation: '文言一词多义现象普遍：「秦爱纷奢」的「爱」是贪图、喜爱；「不爱珍器重宝肥饶之地」的「爱」是吝惜。积累实词须以句为单位、结合语境辨义，孤立背诵易错，这正是附录强调的对比积累法。' },
        { type: 'fill', question: '「翼」在「常以身翼蔽沛公」中是名词作______（状语 / 动词），意为「像鸟翼一样」。', answer: '状语', explanation: '名词用在动词前若不作主语，常作状语，表示动作的状态或方式。「翼蔽」即「像鸟张开翅膀一样遮挡」，「翼」名作状。这是本册「词类活用」板块的重点现象之一，须与名词作动词区分。' },
        { type: 'choice', question: '下列文化常识对应正确的是？', options: ['朔＝月末', '朔＝农历初一，望＝十五，晦＝月末', '望＝初一', '晦＝十五'], answer: '朔＝农历初一，望＝十五，晦＝月末', explanation: '古以朔（初一）、望（十五）、既望（十六）、晦（月末/二十九三十）记日。如《登泰山记》「戊申晦」即月末登山观日。掌握朔望晦有助于读懂古文时间线索，是文化常识板块的基本要求。' },
        { type: 'choice', question: '文学鉴赏短文的基本写法是？', options: ['堆砌形容词、空发感慨', '定角度—引文本—作分析—点主旨', '只抄原文不分析', '通篇记叙不议论'], answer: '定角度—引文本—作分析—点主旨', explanation: '附录「写作」板块指出，鉴赏文应四步：先定角度（炼字/意象/手法），再引原句为据，继而结合语境具体分析其妙，最后点明表情达意之效。有例有据、析理结合，方能避免空泛，这是本册诗词诵读的方法落点。' }
      ]
    }
  );
})();
