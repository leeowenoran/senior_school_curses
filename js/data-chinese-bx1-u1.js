/* ============================================================
 * 高一语文 · 必修 上册 · 第一单元 青春激扬（诗歌与小说）
 * 5 课时：沁园春·长沙 / 立在地球边上放号 / 红烛 / 百合花 / 哦，香雪
 * 数据注入：chinese.bx1.points
 * 质量标准：每课 ≥24 内容块 / 3 SVG / 含 example+table+tip+小结
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx1');
  if (!v) return;

  v.points.push(
    /* ==================== 第1课 沁园春·长沙 ==================== */
    {
      id: 'bx1-u1-l1',
      name: '沁园春·长沙',
      author: '毛泽东',
      chapter: '第一单元 青春激扬（诗歌与小说）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '毛泽东（1893—1976），字润之，湖南湘潭人。伟大的无产阶级革命家、战略家和理论家，也是杰出的诗人。其诗词气势磅礴、意境宏阔，代表作有《沁园春·雪》《七律·长征》《水调歌头·游泳》等，在中国现代诗词史上占有重要地位。' },
        { type: 'paragraph', text: '本词作于 1925 年晚秋。当时毛泽东离开故乡韶山，取道长沙前往广州主持农民运动讲习所。途经长沙时重游橘子洲，面对湘江壮丽的秋景，回忆起青年时代在长沙求学和从事革命活动的峥嵘岁月，心潮澎湃，写下这首气壮山河的词作。' },
        { type: 'keypoint', label: '文体常识', text: '《沁园春》是<strong>词牌名</strong>，规定全词的字数、句式、平仄与押韵格式；「长沙」是<strong>题目</strong>，标明写作地点与内容。词兴起于唐，鼎盛于宋，是一种配乐歌唱、句式长短不齐的抒情诗体，又称「长短句」。一首词一般分上下两阕（片），上阕多写景叙事，下阕多抒情议论。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eaf3fb"/><circle cx="580" cy="55" r="30" fill="#f4c430"/><path d="M0 215 Q170 185 340 210 T680 205 L680 300 L0 300 Z" fill="#3f8fd0"/><path d="M0 240 Q200 220 400 240 T680 235 L680 300 L0 300 Z" fill="#2e6fae"/><g fill="#c0392b"><path d="M60 210 l18 -48 18 48 z"/><path d="M110 212 l15 -38 15 38 z"/><path d="M160 210 l20 -52 20 52 z"/></g><g fill="#5a8f3c"><path d="M210 208 l14 -36 14 36 z"/><path d="M250 210 l12 -30 12 30 z"/></g><g fill="#8b6914"><rect x="290" y="195" width="24" height="10" rx="2"/><rect x="330" y="193" width="24" height="10" rx="2"/><rect x="370" y="196" width="24" height="10" rx="2"/></g><g fill="#fff" stroke="#4a7de0" stroke-width="2"><path d="M300 195 l5 -12 l5 12 z" transform="translate(2,0)"/><path d="M340 193 l5 -12 l5 12 z" transform="translate(2,0)"/></g><path d="M460 80 q-8 -20 0 -34 q8 14 0 34" fill="#8b6914" stroke="#6b4f10" stroke-width="1.5"/><text x="445" y="52" font-size="14" fill="#6b4f10">鹰</text><path d="M500 250 q10 -6 20 0 q10 6 20 0" fill="none" stroke="#2e7d32" stroke-width="2.5"/><text x="530" y="270" font-size="13" fill="#2e7d32">鱼</text><g font-size="13" fill="#33536e"><text x="30" y="290">万山红遍 · 层林尽染 · 漫江碧透 · 百舸争流 · 鹰击长空 · 鱼翔浅底</text></g></svg>', caption: '上阕以「看」字领起七句，铺展一幅色彩斑斓、生机勃勃的湘江秋景图。' },
        { type: 'heading', text: '二、上阕研读：湘江秋景' },
        { type: 'poem', text: '独立寒秋，湘江北去，橘子洲头。\n看万山红遍，层林尽染；\n漫江碧透，百舸争流。\n鹰击长空，鱼翔浅底，万类霜天竞自由。\n怅寥廓，问苍茫大地，谁主沉浮？' },
        { type: 'keypoint', label: '重点·领字', text: '上阕以「<strong>看</strong>」字领起「万山红遍，层林尽染；漫江碧透，百舸争流；鹰击长空，鱼翔浅底」七句，一气呵成。一个「看」字将远山、近水、高空、深底尽收眼底，视野从<strong>远到近、从上到下</strong>，构成一幅立体的秋景图。' },
        { type: 'keypoint', label: '意象', text: '上阕选取六组核心意象：<strong>万山</strong>（红遍）、<strong>层林</strong>（尽染）、<strong>漫江</strong>（碧透）、<strong>百舸</strong>（争流）、<strong>雄鹰</strong>（击长空）、<strong>游鱼</strong>（翔浅底）。红绿相映、动静结合，远近交错、上下呼应，寄托了词人昂扬奋进的情怀。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「鹰击长空，鱼翔浅底」中「击」「翔」二字的妙处。<br><br><strong>解析</strong>：「击」字本指搏击、叩击，用在这里写雄鹰振翅高飞之态，比「飞」字更有力量感和动感，写出鹰的<strong>矫健迅猛</strong>；「翔」字本指飞翔，却用来写水中游鱼，化动为静、以天写水，写出鱼在清澈见底的江水中<strong>轻快自如、如飞鸟翱翔</strong>之态。二字一上一下，精准传神，充分体现了万类霜天「竞自由」的蓬勃生机。' },
        { type: 'keypoint', label: '炼字', text: '上阕的「<strong>竞</strong>」字尤为关键——「万类霜天竞自由」中，万物皆在竞相争取自由，一个「竞」字赋予整个秋景以昂扬进取的生命力，也为下阕「问苍茫大地，谁主沉浮」的豪情埋下伏笔。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#fff7e6"/><rect x="40" y="50" width="280" height="180" rx="10" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><rect x="360" y="50" width="280" height="180" rx="10" fill="#e7f0d8" stroke="#7a9b3e" stroke-width="2"/><text x="180" y="40" font-size="16" fill="#a9711a" text-anchor="middle" font-weight="bold">上阕 · 写景</text><text x="500" y="40" font-size="16" fill="#5a7a2a" text-anchor="middle" font-weight="bold">下阕 · 抒情</text><g font-size="13" fill="#5b4636"><text x="60" y="80">独立寒秋 → 橘子洲头</text><text x="60" y="108">看：万山红遍·层林尽染</text><text x="60" y="136">　　漫江碧透·百舸争流</text><text x="60" y="164">　　鹰击长空·鱼翔浅底</text><text x="60" y="192">怅寥廓 → 问：谁主沉浮</text><text x="60" y="218">（景中寓情）</text></g><g font-size="13" fill="#5b4636"><text x="380" y="80">携来百侣 → 忆往昔</text><text x="380" y="108">恰：同学少年·风华正茂</text><text x="380" y="136">　　书生意气·挥斥方遒</text><text x="380" y="164">　　指点江山·激扬文字</text><text x="380" y="192">曾记否 → 到中流击水</text><text x="380" y="218">（情中见志）</text></g><path d="M320 140 q20 -24 40 0" fill="none" stroke="#c0392b" stroke-width="2.5" marker-end="url(#u1a)"/><defs><marker id="u1a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '上阕以景寓情、下阕以情见志，「问」与「记」首尾呼应，上下阕浑然一体。' },
        { type: 'heading', text: '三、下阕研读：峥嵘岁月' },
        { type: 'poem', text: '携来百侣曾游。忆往昔峥嵘岁月稠。\n恰同学少年，风华正茂；\n书生意气，挥斥方遒。\n指点江山，激扬文字，粪土当年万户侯。\n曾记否，到中流击水，浪遏飞舟？' },
        { type: 'keypoint', label: '重点·领字', text: '下阕以「<strong>忆</strong>」字领起「恰同学少年，风华正茂；书生意气，挥斥方遒；指点江山，激扬文字」等句，回忆青年时代在长沙求学和革命活动的峥嵘岁月。「恰」字紧承「忆」，勾勒出一群意气风发的青年群像。' },
        { type: 'keypoint', label: '群像', text: '「同学少年，风华正茂；书生意气，挥斥方遒」描绘了青年时代的精神风貌：<strong>风华正茂</strong>写才华横溢、正值盛年，<strong>挥斥方遒</strong>写意气奔放、热情奔涌。「指点江山，激扬文字」写他们评论国事、抨击时弊的豪迈姿态。' },
        { type: 'warn', label: '易错·「怅」字', text: '「怅寥廓」的「怅」<strong>不是简单的惆怅伤感</strong>，而是面对广阔无垠的宇宙天地引发的深沉思索与豪迈感慨。「谁主沉浮」是<strong>设问</strong>，并非真正不知道答案，而是以此抒发改造旧世界、主宰中国命运的雄心壮志。切勿将「怅」理解为消极颓丧。' },
        { type: 'keypoint', label: '炼字·「遏」', text: '「浪遏飞舟」中「<strong>遏</strong>」意为阻挡。「浪遏飞舟」以夸张笔法，写青年们劈波斩浪、游速之快令飞舟都似被波浪阻挡，生动展现青年奋勇争先、不可阻挡的气概。「粪土当年万户侯」中「粪土」用作<strong>动词</strong>（意动用法），将反动军阀权贵视如粪土。' },
        { type: 'table', headers: ['维度', '上阕', '下阕'], rows: [['主要内容', '独立寒秋，描绘湘江秋景', '回忆峥嵘岁月，抒发豪情'], ['领字', '看（写景）', '忆（追怀）'], ['核心意象', '万山、层林、漫江、百舸、鹰、鱼', '同学少年、书生、江山、飞舟'], ['情感脉络', '由景生情→怅然发问', '由忆生志→豪迈作答'], ['关键问句', '问苍茫大地，谁主沉浮？', '曾记否，到中流击水，浪遏飞舟？']] },
        { type: 'heading', text: '四、艺术特色与主旨' },
        { type: 'list', items: ['意象密集，色彩鲜明：红、碧、苍等色调构成壮丽画面，视觉冲击力强', '景中寓情，情景交融：秋景的壮阔背后是昂扬的革命激情，不写悲秋而写颂秋', '炼字精当：「击」「翔」「竞」「遏」极富动感与力量，一字传神', '对比手法：上阕「独立」与「百舸争流」对比，下阕「粪土万户侯」与「指点江山」对比', '上下阕呼应：由「问」到「记」，由景到情，气脉贯通，浑然一体'] },
        { type: 'keypoint', label: '主旨', text: '本词通过对<strong>湘江秋景的壮丽描绘</strong>与<strong>青年时代革命斗争生活的深情回忆</strong>，抒发了词人<strong>以天下为己任、改造旧世界的远大抱负</strong>，以及蔑视权贵、积极进取的青春豪情，表现了一代革命青年的崇高理想与精神风貌。' },
        { type: 'tip', label: '拓展', text: '毛泽东诗词以<strong>豪放雄浑</strong>著称，与苏轼、辛弃疾的豪放词风一脉相承而境界更高。阅读时可对比《沁园春·雪》（「北国风光，千里冰封」），体会其共同特点：视野宏阔、气势磅礴、充满历史使命感。注意词中虽有秋景，却<strong>一反古人「悲秋」传统</strong>，写出秋的壮美与生机，这正是革命乐观主义精神的体现。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f0f4ff"/><g font-size="14" fill="#2b5b9e" text-anchor="middle"><circle cx="100" cy="100" r="42" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="100" y="96">独立寒秋</text><text x="100" y="114">（起）</text><circle cx="260" cy="100" r="42" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="260" y="96">看景生情</text><text x="260" y="114">（承）</text><circle cx="420" cy="100" r="42" fill="#7eb0e6" stroke="#4a7de0" stroke-width="2"/><text x="420" y="96">怅然发问</text><text x="420" y="114">（转）</text><circle cx="580" cy="100" r="42" fill="#5a9bd4" stroke="#4a7de0" stroke-width="2"/><text x="580" y="96">击水作答</text><text x="580" y="114">（合）</text></g><g stroke="#4a7de0" stroke-width="2" fill="none"><line x1="142" y1="100" x2="218" y2="100" marker-end="url(#u1b)"/><line x1="302" y1="100" x2="378" y2="100" marker-end="url(#u1b)"/><line x1="462" y1="100" x2="538" y2="100" marker-end="url(#u1b)"/></g><defs><marker id="u1b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#4a7de0"/></marker></defs><text x="340" y="180" font-size="13" fill="#33536e" text-anchor="middle">全词情感脉络：起→承→转→合，由景入情、由问及答</text></svg>', caption: '全词情感脉络：独立寒秋→看景生情→怅然发问→击水作答，一气贯通。' },
        { type: 'list', items: ['词牌「沁园春」规定格律，「长沙」是题目；词分上下阕', '上阕以「看」领起七句写景，意象密集、色彩鲜明、动静结合', '炼字精当：「击」「翔」「竞」「遏」富有动感与力量', '下阕以「忆」领起，回忆峥嵘岁月，展现青年群像', '「怅」非伤感而是深思；「谁主沉浮」是设问，抒发雄心', '主旨：以天下为己任、改造旧世界的远大抱负与青春豪情'] }
      ],
      exercises: [
        { type: 'choice', question: '对「独立寒秋，湘江北去，橘子洲头」中「独立」一词理解最恰当的一项是？', options: ['独自一人站在寒冷秋天，突出词人的孤独寂寞', '独自立于秋风寒江之上，暗含卓然孤立、思考宇宙人生的气概', '说明词人没有同伴，只能一个人旅行', '指词人身体单薄，在寒风中站立不稳'], answer: '独自立于秋风寒江之上，暗含卓然孤立、思考宇宙人生的气概', explanation: '「独立」既写词人独自伫立橘子洲头的实境，也暗含其卓然不群、俯仰天地的姿态。结合下阕「携来百侣」可知他并非没有同伴，故「孤独寂寞」「身体单薄」等理解均不准确，此处重在凸显雄健豪迈的气概与思考宇宙人生的深沉。' },
        { type: 'choice', question: '上阕「看万山红遍……万类霜天竞自由」一句，写景的主要特点是？', options: ['只写静景，色调灰暗', '远近、上下结合，动静相生，色彩鲜明', '全部使用拟人，没有实写', '仅描写天空中的飞鹰'], answer: '远近、上下结合，动静相生，色彩鲜明', explanation: '上阕以「看」领起，山（远）、林、江、舸（近）与鹰（上）、鱼（下）构成空间上的立体画面；「击」「翔」「争流」「竞」赋予景物动态，红、碧等色彩明丽，故「远近上下结合、动静相生、色彩鲜明」最准确，灰暗、纯拟人等均不符。' },
        { type: 'fill', question: '「到中流击水，浪遏飞舟」中「遏」的意思是______。', answer: '阻挡|阻止|遏止', explanation: '「遏」读作 è，意为阻挡、阻止。「浪遏飞舟」是说汹涌的波浪阻挡住飞快前行的船只，运用夸张手法，生动写出青年们劈波斩浪、奋发向上的英姿，表现了词人及其战友们勇往直前的斗争精神与豪迈气概。' },
        { type: 'choice', question: '关于词牌「沁园春」，下列说法正确的一项是？', options: ['「沁园春」是本词要表达的思想感情', '「沁园春」规定词的格律格式，「长沙」才是题目', '「沁园春」是词的题目，点明写作地点', '每首《沁园春》都必须写秋天的景色'], answer: '「沁园春」规定词的格律格式，「长沙」才是题目', explanation: '词牌是填词用的曲调名，决定字数、句式、押韵等格律；题目才标明内容或写作背景。本词词牌为「沁园春」，题目为「长沙」，二者不可混淆。词牌不限定题材，故「必须写秋天」说法错误。' },
        { type: 'choice', question: '下阕「粪土当年万户侯」运用了什么修辞或用法，表达了什么？', options: ['夸张，突出词人身体虚弱', '意动用法，将权贵视如粪土，蔑视反动统治者', '排比，增强语势', '对偶，描写自然景物'], answer: '意动用法，将权贵视如粪土，蔑视反动统治者', explanation: '「万户侯」本指汉代食邑万户的侯爵，此处代指当时的反动军阀与权贵；「粪土」用作意动用法（以……为粪土），意为视如粪土。它表现了青年毛泽东及其战友蔑视权贵、立志改造社会的豪迈气概，而非夸张或排比。' }
      ]
    },

    /* ==================== 第2课 立在地球边上放号 ==================== */
    {
      id: 'bx1-u1-l2',
      name: '立在地球边上放号',
      author: '郭沫若',
      chapter: '第一单元 青春激扬（诗歌与小说）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与时代背景' },
        { type: 'paragraph', text: '郭沫若（1892—1978），原名郭开贞，四川乐山人。诗人、历史学家、考古学家、社会活动家。1914 年赴日学医，后转向文学。1919 年五四运动前后，他创作了《凤凰涅槃》《天狗》《地球，我的母亲》等充满狂飙突进精神的诗篇，1921 年结集为《女神》出版，成为中国新诗的奠基之作。' },
        { type: 'paragraph', text: '《立在地球边上放号》写于 1919 年 9、10 月间，正值五四运动高潮。当时郭沫若在日本留学，听闻国内五四运动的消息，深受鼓舞。面对大海，他想象自己立于地球之边，放声高歌，以磅礴的想象歌颂摧毁旧世界、创造新世界的伟力。' },
        { type: 'keypoint', label: '文体常识', text: '《女神》是<strong>五四新文学</strong>中影响最大的诗集，开一代诗风。其风格以<strong>浪漫主义</strong>为主，想象奇崛、情感奔放、语言自由，体现了打破封建枷锁、追求个性解放的时代精神，是中国现代新诗的奠基之作。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#0f2540"/><circle cx="340" cy="320" r="240" fill="#1f5fa8"/><circle cx="340" cy="320" r="160" fill="#2e7fd0"/><path d="M0 110 q60 28 120 0 t120 0 t120 0 t120 0 t120 0" fill="none" stroke="#7fd4ff" stroke-width="3"/><path d="M0 150 q60 28 120 0 t120 0 t120 0 t120 0 t120 0" fill="none" stroke="#aef0ff" stroke-width="3"/><path d="M0 190 q60 28 120 0 t120 0 t120 0 t120 0 t120 0" fill="none" stroke="#7fd4ff" stroke-width="3"/><g fill="#e8f4ff" opacity="0.8"><ellipse cx="120" cy="60" rx="50" ry="20"/><ellipse cx="160" cy="50" rx="40" ry="16"/><ellipse cx="520" cy="55" rx="55" ry="22"/><ellipse cx="560" cy="65" rx="35" ry="14"/></g><text x="340" y="280" font-size="14" fill="#cfe8ff" text-anchor="middle">怒涌的白云 · 浩大的海洋 · 地球边上的宏大视角</text></svg>', caption: '诗以「地球边上」的宏大视角，写白云怒涌、海洋浩瀚，象征摧枯拉朽的时代洪流。' },
        { type: 'heading', text: '二、诵读全诗，把握意象' },
        { type: 'poem', text: '无数的白云正在空中怒涌，\n啊啊！好幅壮丽的北冰洋的情景哟！\n无限的太平洋提起他全身的力量来要把地球推倒。\n啊啊！我眼前来了的滚滚的洪涛哟！\n啊啊！不断的毁坏，不断的创造，不断的努力哟！\n啊啊！力哟！力哟！\n力的绘画，力的舞蹈，力的音乐，力的诗歌，力的律吕哟！' },
        { type: 'keypoint', label: '意象', text: '诗中的核心意象是<strong>白云</strong>（怒涌）、<strong>北冰洋</strong>（壮丽）、<strong>太平洋</strong>（提起全身力量）、<strong>洪涛</strong>（滚滚而来）。这些意象都宏大、奔涌、充满力量，共同汇成对「力」的赞歌，象征五四时期摧枯拉朽、破旧立新的时代洪流。' },
        { type: 'keypoint', label: '重点·「力」', text: '诗中反复歌颂的「<strong>力</strong>」有多重内涵：它既是自然界白云怒涌、太平洋推倒地球的<strong>自然伟力</strong>，也是五四时代打破旧世界、创造新世界的<strong>社会伟力</strong>，更是青年一代奔涌创造、改造中国的<strong>精神伟力</strong>。「力」是全诗的核心意象与灵魂。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「无限的太平洋提起他全身的力量来要把地球推倒」一句的妙处。<br><br><strong>解析</strong>：此句运用<strong>拟人</strong>手法，将太平洋赋予人的意志和动作——「提起他全身的力量」「要把地球推倒」，写出了海洋<strong>不可阻挡的磅礴气势</strong>。「推倒地球」是极度<strong>夸张</strong>，超越了物理现实，却准确传达了五四时代推翻旧秩序的巨大力量。意象之宏大、想象之奇崛，充分体现了浪漫主义诗歌的特色。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fef6e9"/><rect x="50" y="30" width="580" height="55" rx="8" fill="#f6c453"/><rect x="50" y="100" width="580" height="55" rx="8" fill="#e8893b"/><rect x="50" y="170" width="580" height="50" rx="8" fill="#c0392b"/><text x="60" y="65" font-size="15" fill="#5b3b12">毁坏：打破旧世界的枷锁与束缚</text><text x="60" y="135" font-size="15" fill="#fff">创造：建立光明的新世界</text><text x="60" y="200" font-size="15" fill="#fff">力：绘画·舞蹈·音乐·诗歌·律吕</text><g stroke="#c0392b" stroke-width="2.5" fill="none"><path d="M340 88 L340 96" marker-end="url(#u2a)"/><path d="M340 158 L340 166" marker-end="url(#u2a)"/></g><defs><marker id="u2a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '「毁坏—创造—力」三者层层递进，构成全诗的思想内核。' },
        { type: 'heading', text: '三、诗思结构与情感递进' },
        { type: 'keypoint', label: '重点·递进', text: '全诗情感层层递进：先写<strong>白云怒涌</strong>（起），再写<strong>太平洋推倒地球</strong>（承），接着写<strong>滚滚洪涛</strong>（转），最后以「不断的毁坏，不断的创造，不断的努力」与「力哟！力哟！」的排比<strong>推向高潮</strong>（合）。情感如火山喷发，一浪高过一浪。' },
        { type: 'warn', label: '易错·「毁坏」', text: '诗中「不断的毁坏」<strong>不是消极的破坏</strong>，而是破旧立新的辩证过程——只有打破旧的、腐朽的，才能创造新的、光明的。「毁坏」与「创造」相伴相生，统一于「不断的努力」之中。切勿将「毁坏」理解为单纯的摧毁或消极情绪。' },
        { type: 'table', headers: ['三个「不断的」', '含义', '象征'], rows: [['不断的毁坏', '打破旧世界的枷锁', '推翻封建旧秩序'], ['不断的创造', '建立光明的新世界', '建设民主科学的新文化'], ['不断的努力', '永不止息的奋斗', '五四青年进取不止的精神']] },
        { type: 'heading', text: '四、艺术特色与主旨' },
        { type: 'list', items: ['视角奇特：立于「地球边上」，俯瞰寰宇，气象恢宏，想象超越常人', '反复与排比：「啊啊！」反复咏叹，五个「力」的排比如鼓点般激越', '直抒胸臆：情感如火山喷发，毫无遮掩，淋漓痛快', '拟人与夸张：太平洋「提起全身力量」「推倒地球」，想象狂放', '浪漫主义：以奇崛想象和奔放情感歌颂「力」的伟力'] },
        { type: 'keypoint', label: '主旨', text: '诗歌借<strong>自然的伟力</strong>歌颂<strong>五四时代打破旧世界、创造新世界的巨大力量</strong>，呼唤一种奔放、创造、进取的青春精神，体现了五四时期知识分子挣脱束缚、追求解放的时代强音。' },
        { type: 'warn', label: '区分', text: '本诗与《沁园春·长沙》都写青春豪情，但毛泽东词<strong>借景抒情、含蓄蕴藉</strong>，以古典词体寄寓革命壮志；郭沫若诗<strong>直抒胸臆、想象狂放</strong>，以自由体新诗迸发时代激情。一为古典词体，一为自由新诗，风格迥异而精神相通。' },
        { type: 'tip', label: '拓展·浪漫主义', text: '浪漫主义是 18 世纪末至 19 世纪初欧洲重要的文学思潮，强调<strong>个人情感、丰富想象、自然崇拜</strong>和对现实的超越。郭沫若《女神》深受美国诗人惠特曼《草叶集》影响，其自由奔放的形式与热烈磅礴的情感，正是浪漫主义在新诗中的体现。阅读时可注意比较中外浪漫主义诗歌的异同。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0ff"/><g font-size="13" fill="#4a2b8a" text-anchor="middle"><rect x="30" y="60" width="120" height="60" rx="8" fill="#d4c5f9" stroke="#7b4fe0" stroke-width="2"/><text x="90" y="85">白云怒涌</text><text x="90" y="105">（起）</text><rect x="190" y="60" width="120" height="60" rx="8" fill="#b89df0" stroke="#7b4fe0" stroke-width="2"/><text x="250" y="85">太平洋推倒</text><text x="250" y="105">（承）</text><rect x="350" y="60" width="120" height="60" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="410" y="85">滚滚洪涛</text><text x="410" y="105">（转）</text><rect x="510" y="50" width="140" height="80" rx="8" fill="#7b4fe0" stroke="#5a2eb8" stroke-width="2"/><text x="580" y="78">力哟！力哟！</text><text x="580" y="100">力的绘画·舞蹈</text><text x="580" y="118">·音乐·诗歌·律吕</text><text x="580" y="138">（合·高潮）</text></g><g stroke="#7b4fe0" stroke-width="2" fill="none"><line x1="150" y1="90" x2="188" y2="90" marker-end="url(#u2b)"/><line x1="310" y1="90" x2="348" y2="90" marker-end="url(#u2b)"/><line x1="470" y1="90" x2="508" y2="90" marker-end="url(#u2b)"/></g><defs><marker id="u2b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7b4fe0"/></marker></defs><text x="340" y="180" font-size="13" fill="#4a2b8a" text-anchor="middle">情感脉络：怒涌→推倒→洪涛→力的赞歌，层层推向高潮</text></svg>', caption: '全诗情感由景入情、由弱到强，最终以「力」的排比推向高潮。' },
        { type: 'list', items: ['郭沫若，《女神》，五四新诗奠基之作，浪漫主义风格', '核心意象：白云、北冰洋、太平洋、洪涛，皆宏大奔涌', '「力」是全诗灵魂：自然伟力、社会伟力、精神伟力', '「毁坏—创造—努力」三位一体，破旧立新的辩证法', '艺术：视角奇特、反复排比、直抒胸臆、拟人夸张', '与《沁园春·长沙》对比：一直抒一含蓄，一新诗一古典'] }
      ],
      exercises: [
        { type: 'choice', question: '《立在地球边上放号》选自郭沫若的哪部诗集？', options: ['《红烛》', '《女神》', '《死水》', '《繁星》'], answer: '《女神》', explanation: '本诗选自郭沫若 1921 年出版的新诗集《女神》。《女神》以狂飙突进的浪漫主义风格著称，是五四新文学的代表作和中国新诗的奠基之作。其他选项中《红烛》《死水》为闻一多诗集，《繁星》为冰心诗集。' },
        { type: 'choice', question: '诗中反复出现的「啊啊！」和结尾五个「力的……」主要运用了什么手法？', options: ['对比与反语', '反复与排比', '借代与设问', '白描与对偶'], answer: '反复与排比', explanation: '「啊啊！」在诗中多次出现，属反复，强化咏叹的激情；结尾「力的绘画，力的舞蹈，力的音乐，力的诗歌，力的律吕」连用五个结构相似的短语，属排比，节奏如鼓点，层层推进地歌颂「力」，极具感染力。' },
        { type: 'fill', question: '诗中「无限的太平洋提起他全身的力量来要把地球推倒」一句，体现了______（破旧立新 / 安于现状）的时代精神。', answer: '破旧立新', explanation: '「把地球推倒」以夸张和拟人写太平洋的伟力，象征五四时期推翻旧秩序、建立新世界的巨大力量。全诗「不断的毁坏，不断的创造」正呼应这种破旧立新的时代精神，而非安于现状或消极保守。' },
        { type: 'choice', question: '对「不断的毁坏，不断的创造，不断的努力哟」理解正确的是？', options: ['强调停滞与保守', '认为毁坏比创造更重要', '揭示破与立相伴相生、不断奋进的辩证关系', '表达消极厌世的情绪'], answer: '揭示破与立相伴相生、不断奋进的辩证关系', explanation: '三个「不断的」将毁坏、创造、努力并置，说明旧世界的破坏与新世界的建设是连续不断、相伴而生的过程，体现了积极进取、永不止息的奋斗精神，并非保守、消极或偏废某一方。' },
        { type: 'choice', question: '与《沁园春·长沙》相比，本诗在抒情方式上的突出特点是？', options: ['借景抒情、含蓄蕴藉', '直抒胸臆、想象狂放', '叙事为主、不动声色', '通篇用典、典雅庄重'], answer: '直抒胸臆、想象狂放', explanation: '《立在地球边上放号》以「地球边上」的奇特大视角和「啊啊！力哟！」的直接呼告直抒胸臆，想象狂放浪漫；而《沁园春·长沙》借湘江秋景含蓄抒情。二者一显一隐，一为新诗一为古典词，风格迥异而青春豪情相通。' }
      ]
    },

    /* ==================== 第3课 红烛 ==================== */
    {
      id: 'bx1-u1-l3',
      name: '红烛',
      author: '闻一多',
      chapter: '第一单元 青春激扬（诗歌与小说）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与创作背景' },
        { type: 'paragraph', text: '闻一多（1899—1946），原名闻家骅，湖北浠水人。诗人、学者、民主战士。1922 年赴美留学，期间创作了大量爱国诗篇。1923 年出版第一部诗集《红烛》，书名即取自本诗。1946 年因怒斥国民党暗杀李公朴，遭特务暗杀，以身殉志。' },
        { type: 'paragraph', text: '《红烛》创作于 1923 年。当时闻一多正在美国留学，身处异邦，深感祖国积弱积贫、民族受歧视之痛。他借燃烧的红烛这一意象，抒发愿以热血和生命照亮黑暗、无私奉献的赤子之心，也寄托了对祖国光明未来的殷切期盼。' },
        { type: 'keypoint', label: '文体常识', text: '《红烛》采用<strong>咏物言志</strong>（托物言志）手法：以红烛的燃烧、流泪等自然属性为载体，寄托诗人<strong>牺牲自我、照亮他人</strong>的崇高理想。咏物言志是中国古典诗歌的传统手法，闻一多将其融入新诗，赋予新的时代内涵。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fff3e0"/><rect x="320" y="150" width="40" height="120" rx="6" fill="#e85d3d"/><ellipse cx="340" cy="150" rx="20" ry="8" fill="#f0a58c"/><path d="M340 150 q-14 -28 0 -50 q14 24 0 50 z" fill="#ffb43d"/><path d="M340 120 q-7 -16 0 -30 q7 14 0 30 z" fill="#ffe08a"/><path d="M335 100 q5 -8 5 -16" stroke="#fff" stroke-width="2" fill="none"/><path d="M325 200 q-18 24 -12 56" stroke="#7ec8e3" fill="none" stroke-width="3" opacity="0.7"/><path d="M355 200 q18 24 12 56" stroke="#7ec8e3" fill="none" stroke-width="3" opacity="0.7"/><path d="M330 210 q-10 16 -6 40" stroke="#5ab8d3" fill="none" stroke-width="2.5" opacity="0.5"/><path d="M350 210 q10 16 6 40" stroke="#5ab8d3" fill="none" stroke-width="2.5" opacity="0.5"/><text x="340" y="290" font-size="14" fill="#9c4a2e" text-anchor="middle">红烛：燃烧自己（光焰），流泪牺牲（蜡泪），照亮人间</text></svg>', caption: '红烛既放出光焰（奉献），又不停流泪（牺牲的痛楚），正是诗人矛盾而执着的写照。' },
        { type: 'heading', text: '二、诗中问答与情感波澜' },
        { type: 'poem', text: '蜡炬成灰泪始干——\n红烛啊！这样红的烛！\n诗人啊！吐出你的心来比比，\n可是一般颜色？\n……\n红烛啊！\n你流一滴泪，灰一分心。\n灰心流泪你的果，\n创造光明你的因。' },
        { type: 'keypoint', label: '重点·呼告', text: '诗中反复以「<strong>红烛啊！</strong>」呼告，一唱三叹。每一次呼告都伴随一个追问——「为何要烧？」「为何流泪？」「心与烛可是一般颜色？」——在追问中情感几经波澜，由困惑到矛盾，最终走向觉悟与坚定。' },
        { type: 'keypoint', label: '矛盾', text: '诗中核心矛盾在于：红烛<strong>燃烧自己</strong>才能放出光明，而燃烧必然带来<strong>流泪与灰心</strong>（牺牲的痛楚）。诗人正是在这一矛盾中反复追问、挣扎，最终悟出奉献与牺牲的统一，情感由迷茫走向坚定。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「灰心流泪你的果，创造光明你的因」的深刻含义。<br><br><strong>解析</strong>：这两句以<strong>因果倒置</strong>的方式点明红烛精神的本质。「因」指原因、初衷——<strong>创造光明</strong>是红烛存在的根本目的；「果」指结果——<strong>灰心流泪</strong>是创造光明必然付出的代价。诗人由此悟出：牺牲并非无谓的痛苦，而是奉献的必然组成部分，二者统一于崇高的理想之中。语言凝练而哲理深邃。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fdf0f3"/><circle cx="170" cy="120" r="62" fill="#f4c430"/><text x="170" y="116" font-size="16" fill="#5b3b12" text-anchor="middle" font-weight="bold">创造光明</text><text x="170" y="138" font-size="14" fill="#5b3b12" text-anchor="middle">（因·初衷）</text><path d="M245 120 h80" stroke="#c0392b" stroke-width="3" marker-end="url(#u3a)"/><text x="285" y="108" font-size="13" fill="#c0392b" text-anchor="middle">必然代价</text><circle cx="510" cy="120" r="62" fill="#e85d3d"/><text x="510" y="116" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">灰心流泪</text><text x="510" y="138" font-size="14" fill="#fff" text-anchor="middle">（果·牺牲）</text><defs><marker id="u3a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="210" font-size="14" fill="#9c4a2e" text-anchor="middle">因（奉献）→ 果（流泪牺牲）：二者统一于崇高理想</text></svg>', caption: '「创造光明你的因，灰心流泪你的果」点明红烛精神的因果逻辑。' },
        { type: 'heading', text: '三、情感逻辑与象征' },
        { type: 'keypoint', label: '重点·因果', text: '诗人最终悟出的道理是：<strong>创造光明是因，灰心流泪是果</strong>。即为了照亮人间（因/目的），红烛甘愿承受燃烧流泪的痛苦（果/代价）。因果统一于奉献，表现出执着无悔的献身精神。' },
        { type: 'warn', label: '易错·「泪」', text: '红烛的「泪」既是<strong>实写</strong>蜡烛燃烧时蜡油流淌的物理现象，更是<strong>象征</strong>奉献者的牺牲与痛楚。不要只理解为悲伤哭泣，应读出其中庄严的献身精神——「泪」是奉献的代价，而非哀伤的泪水。' },
        { type: 'table', headers: ['红烛属性', '实写', '象征'], rows: [['燃烧发光', '蜡烛点燃放出光焰', '奉献自我、照亮他人'], ['流泪成灰', '蜡油流淌、蜡烛燃尽', '牺牲的痛楚与代价'], ['红色', '蜡烛的颜色', '赤诚、热烈的心（赤子之心）'], ['「灰心」', '蜡烛化为灰烬', '意志的磨砺与考验']] },
        { type: 'heading', text: '四、艺术特色与主旨' },
        { type: 'list', items: ['托物言志：红烛即诗人人格的化身，以物喻人、借物寄志', '反复呼告：「红烛啊！」贯穿全篇，一唱三叹，情感层层推进', '化用古诗：脱胎于李商隐「蜡炬成灰泪始干」而赋予五四新意', '口语与诗语交织：语言真挚热烈，似与红烛对话', '因果倒置：「因」「果」倒说，以哲理收束情感，深化主旨'] },
        { type: 'keypoint', label: '主旨', text: '诗人借红烛<strong>燃烧自己、照亮人间</strong>的形象，表达了<strong>甘于牺牲、执着追求光明</strong>的赤子情怀，也折射出五四青年燃烧青春、改造社会的理想主义光芒，以及对祖国光明未来的殷切期盼。' },
        { type: 'tip', label: '拓展·三美主张', text: '闻一多后来提出新诗「<strong>三美</strong>」主张：<strong>音乐美</strong>（音节和谐、韵律整齐）、<strong>绘画美</strong>（词藻色彩鲜明、意境如画）、<strong>建筑美</strong>（节的匀称、句的均齐）。《红烛》虽为其早期自由体作品，但已显现出对色彩（「红」）和节奏（反复呼告）的追求，可视为三美主张的萌芽。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fff8f0"/><g font-size="13" fill="#9c4a2e" text-anchor="middle"><rect x="30" y="60" width="120" height="60" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="90" y="85">「红烛啊！」</text><text x="90" y="105">追问·困惑</text><rect x="190" y="60" width="120" height="60" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="250" y="85">为何烧？</text><text x="250" y="105">为何流泪？</text><text x="250" y="120">矛盾</text><rect x="350" y="60" width="120" height="60" rx="8" fill="#e8893b" stroke="#c0392b" stroke-width="2"/><text x="410" y="85">悟出因果</text><text x="410" y="105">因：创造光明</text><text x="410" y="120">果：灰心流泪</text><rect x="510" y="55" width="140" height="70" rx="8" fill="#e85d3d" stroke="#c0392b" stroke-width="2"/><text x="580" y="80">坚定奉献</text><text x="580" y="100">「烧破世人的梦，</text><text x="580" y="118">烧沸世人的血」</text></g><g stroke="#c0392b" stroke-width="2" fill="none"><line x1="150" y1="90" x2="188" y2="90" marker-end="url(#u3b)"/><line x1="310" y1="90" x2="348" y2="90" marker-end="url(#u3b)"/><line x1="470" y1="90" x2="508" y2="90" marker-end="url(#u3b)"/></g><defs><marker id="u3b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="180" font-size="13" fill="#9c4a2e" text-anchor="middle">情感波澜：追问→矛盾→觉悟→坚定，层层升华</text></svg>', caption: '全诗情感由追问到矛盾、由觉悟到坚定，最终升华为无悔的奉献。' },
        { type: 'list', items: ['闻一多，《红烛》诗集，托物言志手法', '核心矛盾：燃烧才能发光，发光必然流泪牺牲', '因果逻辑：创造光明是因，灰心流泪是果，二者统一', '「泪」象征奉献的代价，非悲伤哭泣', '化用李商隐「蜡炬成灰泪始干」而赋予五四新意', '主旨：甘于牺牲、追求光明的赤子情怀'] }
      ],
      exercises: [
        { type: 'choice', question: '《红烛》最主要的艺术手法是？', options: ['托物言志（咏物言志）', '借古讽今', '荒诞变形', '意识流'], answer: '托物言志（咏物言志）', explanation: '全诗以红烛为吟咏对象，借其燃烧发光、流泪成灰的自然属性，寄托诗人甘愿牺牲自我、照亮他人的崇高理想，属典型的托物言志（咏物言志）手法。诗人将自身人格投射于红烛，物我合一。' },
        { type: 'choice', question: '诗中「灰心流泪你的果，创造光明你的因」意在说明？', options: ['流泪比光明更重要', '牺牲（流泪）是奉献（创光明）的必然代价，二者统一', '红烛不会创造光明', '诗人反对奉献'], answer: '牺牲（流泪）是奉献（创光明）的必然代价，二者统一', explanation: '「因」指原因、初衷（创造光明），「果」指结果（灰心流泪）。诗句点明红烛为创造光明而甘受流泪牺牲，奉献与牺牲统一于同一崇高目标，凸显执着无悔的献身精神，而非偏废某一方。' },
        { type: 'fill', question: '《红烛》诗集的作者闻一多，化用了唐代诗人李商隐《无题》中「______，蜡炬成灰泪始干」的名句。', answer: '春蚕到死丝方尽', explanation: '李商隐《无题》名句为「春蚕到死丝方尽，蜡炬成灰泪始干」，以蚕丝、蜡泪喻指至死不渝的思念。闻一多在《红烛》中化用「蜡炬成灰泪始干」，却将缠绵之情转为献身光明的壮烈情怀，赋予古典意象以五四新意。' },
        { type: 'choice', question: '下列对「红烛啊！你流一滴泪，灰一分心」中「泪」的理解，最准确的是？', options: ['只是蜡烛受热熔化的物理现象，毫无深意', '既写烛泪，更象征奉献者的牺牲与痛楚', '指诗人个人的悲伤哭泣', '形容红烛被雨水打湿'], answer: '既写烛泪，更象征奉献者的牺牲与痛楚', explanation: '此处「泪」表层写蜡烛燃烧时蜡油流淌之状，深层则以物喻人，象征一切为光明与理想而牺牲奉献者所付出的代价与痛楚，是托物言志的关键意象，而非单纯的物理现象或个人悲伤情绪。' },
        { type: 'choice', question: '《红烛》与《立在地球边上放号》同属五四新诗，其共通的精神内核是？', options: ['消极避世', '歌颂青春、创造与献身的进取精神', '怀念古代田园生活', '讽刺社会黑暗而不寄托希望'], answer: '歌颂青春、创造与献身的进取精神', explanation: '《红烛》歌颂牺牲自我、创造光明的献身精神，《立在地球边上放号》歌颂打破旧世界、创造新世界的伟力，二者都洋溢着五四时期青春、创造、进取的时代强音，与消极避世、复古怀旧等截然不同。' }
      ]
    },

    /* ==================== 第4课 百合花 ==================== */
    {
      id: 'bx1-u1-l4',
      name: '百合花',
      author: '茹志鹃',
      chapter: '第一单元 青春激扬（诗歌与小说）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与创作背景' },
        { type: 'paragraph', text: '茹志鹃（1925—1998），当代女作家，曾用笔名阿如、初旭。1943 年参加新四军，长期在部队从事文艺工作。《百合花》是她的成名作和代表作，发表于 1958 年，以清新细腻的笔调描写战争年代的人性之美，风格独特。' },
        { type: 'paragraph', text: '小说以解放战争（1946 年中秋）时期一次总攻前夕为背景。作者当时在文工团工作，亲身经历了战争年代军民之间的真挚情谊。1958 年，面对文坛"百花齐放"的呼声，她回忆起那段岁月，写下了这篇不以炮火取胜、而以人情动人的小说。' },
        { type: 'keypoint', label: '重点·线索', text: '小说以<strong>「百合花」被子</strong>为线索物件贯穿全文：它先是新媳妇珍视的嫁妆，被借来给部队使用；最后盖在牺牲的小通讯员身上，成为送别年轻生命的圣洁之被。<strong>百合花</strong>象征<strong>纯洁、美好与哀悼</strong>，是全文的核心意象。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3f7ee"/><rect x="120" y="55" width="180" height="190" rx="8" fill="#fff" stroke="#c9b79c" stroke-width="2"/><g fill="#e85d8a" transform="translate(210,130)"><path d="M0 0 q-16 -20 0 -36 q16 16 0 36 z"/><path d="M0 0 q16 -20 0 -36 q-16 16 0 36 z"/><path d="M0 0 q-22 -6 -26 -24 q22 2 26 24 z"/><path d="M0 0 q22 -6 26 -24 q-22 2 -26 24 z"/><circle cx="0" cy="0" r="6" fill="#f4c430"/></g><text x="210" y="225" font-size="13" fill="#a9711a" text-anchor="middle">撒满百合花的被子</text><rect x="380" y="55" width="180" height="190" rx="8" fill="#eaf2ff" stroke="#9bbce0" stroke-width="2"/><line x1="470" y1="70" x2="470" y2="220" stroke="#7a9b3e" stroke-width="3"/><g fill="#e85d8a"><circle cx="470" cy="110" r="7"/><circle cx="470" cy="145" r="7"/></g><g fill="#5a8f3c"><path d="M460 125 l-10 -8 l6 12 z"/><path d="M480 160 l10 -8 l-6 12 z"/></g><text x="470" y="225" font-size="13" fill="#33536e" text-anchor="middle">枪筒插野花的小通讯员</text><text x="340" y="285" font-size="14" fill="#5a6b3e" text-anchor="middle">百合花被子与枪筒野花：一柔一刚，烘托战争中的青春与纯美</text></svg>', caption: '「百合花」被子与枪筒野花，一柔一刚，共同烘托出战争中的青春与纯美。' },
        { type: 'heading', text: '二、情节梳理与线索流转' },
        { type: 'list', items: ['开端（借被）：小通讯员受命向新媳妇借被子，羞涩尴尬，终于借到百合花被子', '发展（相处）：小通讯员与「我」同行，性格腼腆；新媳妇得知被子用途后态度转变', '高潮（牺牲）：总攻开始，小通讯员为掩护担架员英勇牺牲', '结局（献被）：新媳妇为牺牲的通讯员缝衣、献出百合花被子，情感升华'] },
        { type: 'keypoint', label: '重点·流转', text: '情节随「百合花」被子的流转推进：<strong>借被</strong>（开端）→ <strong>相处</strong>（发展）→ <strong>牺牲</strong>（高潮）→ <strong>献被</strong>（结局）。被子从"不舍得借"到"主动献出"，完成了情感的升华，也完成了百合花从嫁妆到殉葬之物的象征转换。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fff8f0"/><g font-size="14" text-anchor="middle"><rect x="30" y="55" width="130" height="70" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="95" y="82" fill="#a9711a">开端</text><text x="95" y="102" fill="#5b4636" font-size="13">借被</text><text x="95" y="118" fill="#5b4636" font-size="12">小通讯员→新媳妇</text><rect x="200" y="55" width="130" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="265" y="82" fill="#5b3b12">发展</text><text x="265" y="102" fill="#5b4636" font-size="13">相处</text><text x="265" y="118" fill="#5b4636" font-size="12">腼腆·真诚</text><rect x="370" y="45" width="130" height="80" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="435" y="72" fill="#fff">高潮</text><text x="435" y="92" fill="#fff" font-size="13">牺牲</text><text x="435" y="108" fill="#fff" font-size="12">掩护担架员</text><rect x="540" y="45" width="130" height="80" rx="8" fill="#c0392b" stroke="#9c2a1e" stroke-width="2"/><text x="605" y="72" fill="#fff">结局</text><text x="605" y="92" fill="#fff" font-size="13">献被</text><text x="605" y="108" fill="#fff" font-size="12">新媳妇→通讯员</text></g><g stroke="#c0392b" stroke-width="2.5" fill="none"><line x1="160" y1="90" x2="198" y2="90" marker-end="url(#u4a)"/><line x1="330" y1="90" x2="368" y2="90" marker-end="url(#u4a)"/><line x1="500" y1="90" x2="538" y2="90" marker-end="url(#u4a)"/></g><defs><marker id="u4a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="175" font-size="14" fill="#9c4a2e" text-anchor="middle">被子流转：借→用→盖，情感从腼腆到敬重再到哀悼</text><g font-size="12" fill="#7a6b5e" text-anchor="middle"><text x="95" y="210">不舍→借出</text><text x="265" y="210">了解→敬重</text><text x="435" y="210">震惊→悲痛</text><text x="605" y="210">缝衣→献被</text></g></svg>', caption: '情节随「被子」流转：借被—相处—牺牲—献被，情感层层递进至悲壮。' },
        { type: 'heading', text: '三、人物形象分析' },
        { type: 'keypoint', label: '小通讯员', text: '小通讯员是刚参军不久的农村青年：<strong>憨厚害羞</strong>（见女性脸红、不敢回新媳妇门）、<strong>认真负责</strong>（执行任务一丝不苟）、<strong>纯真质朴</strong>（枪筒里插着一枝野花，透着青春的稚气与对美的热爱）、<strong>勇敢无畏</strong>（为掩护担架员英勇牺牲）。是一个有血有肉、真实可感的青年战士形象。' },
        { type: 'keypoint', label: '新媳妇', text: '新媳妇是一个质朴善良的农村新婚妇女：起初<strong>舍不得借被</strong>（被子是新婚嫁妆，珍贵），得知用途后态度转变；小通讯员牺牲后，她<strong>主动缝衣、献被</strong>，以圣洁的百合花被为战士送行。情感从"不舍"到"敬重"再到"哀悼"，完成人物精神的升华。' },
        { type: 'example', label: '细节分析', text: '小说中哪些细节最能体现小通讯员的性格？请举例分析。<br><br><strong>解析</strong>：三处细节尤为传神：①<strong>枪筒里插着一枝野花</strong>——在紧张的战斗环境中仍爱美、爱花，写出青年的纯真与对生活的热爱；②<strong>衣肩上的破洞</strong>——借被时被门钩挂破，新媳妇后来为他缝补，这一细节前后呼应，成为情感纽带；③<strong>两个干硬的馒头</strong>——留给「我」的口粮，写出他的质朴善良与关心他人。这些细节以小见大，使人物真实可感、余味悠长。' },
        { type: 'table', headers: ['人物', '性格特征', '关键细节', '情感变化'], rows: [['小通讯员', '憨厚害羞、纯真勇敢', '枪筒野花、衣肩破洞、馒头', '腼腆→坚定→牺牲'], ['新媳妇', '质朴善良、情深义重', '借被→缝衣→献被', '不舍→敬重→哀悼'], ['「我」（叙述者）', '观察细腻、感受敏锐', '串联情节、烘托人物', '好奇→亲近→悲痛']] },
        { type: 'heading', text: '四、艺术特色与主旨' },
        { type: 'keypoint', label: '特色·以小见大', text: '小说不写宏大战斗场面，而以<strong>一床被子、一枝野花、一个破洞</strong>等细小事物切入，以小见大，在战争背景下写出人性的美好与青春的纯洁。这种"小中见大"的写法，使小说具有极强的感染力和诗意。' },
        { type: 'list', items: ['以小见大：以被子、野花、破洞等细节切入，小中见大', '线索分明：百合花被子贯穿全文，串联情节与情感', '细节传神：枪筒野花、衣肩破洞、馒头等细节使人物鲜活', '语言清新细腻：不以炮火取胜，而以人情动人', '女性视角：以「我」的女性视角观察，笔调温婉抒情'] },
        { type: 'warn', label: '风格', text: '《百合花》<strong>不写血腥厮杀</strong>，而以细腻、抒情的笔调写人情之美，与同单元的诗歌同样讴歌青春，只是以小说的形式、在战争的底色上绽放纯洁之花。切勿将其当作一般战争小说来读——它重在<strong>人性书写</strong>而非战斗叙事。' },
        { type: 'tip', label: '拓展', text: '茹志鹃的小说风格被称为「<strong>清新细腻的抒情风格</strong>」，善于从平凡生活中发掘诗意与美。她与同时代的峻青、王愿坚等战争题材作家不同——后者多写英雄壮举和激烈战斗，而茹志鹃更关注战争中普通人的情感世界和人性光辉，形成了独特的"抒情小说"一脉。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3f7ee"/><g transform="translate(340,110)"><g fill="#e85d8a"><path d="M0 -20 q-14 -16 0 -30 q14 14 0 30 z"/><path d="M0 -20 q14 -16 0 -30 q-14 14 0 30 z"/><path d="M0 -20 q-20 -4 -24 -20 q20 0 24 20 z"/><path d="M0 -20 q20 -4 24 -20 q-20 0 -24 20 z"/></g><circle cx="0" cy="-20" r="5" fill="#f4c430"/></g><g font-size="14" text-anchor="middle"><text x="150" y="70" fill="#c0392b">纯洁</text><text x="150" y="90" fill="#7a6b5e" font-size="12">青春的稚气与真诚</text><text x="340" y="60" fill="#e85d8a">美好</text><text x="340" y="80" fill="#7a6b5e" font-size="12">人与人之间的真情</text><text x="530" y="70" fill="#33536e">哀悼</text><text x="530" y="90" fill="#7a6b5e" font-size="12">对牺牲生命的礼赞</text></g><g stroke="#c9b79c" stroke-width="1.5" stroke-dasharray="4 4" fill="none"><line x1="180" y1="75" x2="300" y2="80"/><line x1="380" y1="75" x2="490" y2="75"/></g><text x="340" y="150" font-size="14" fill="#5a6b3e" text-anchor="middle">百合花的三重象征：纯洁 → 美好 → 哀悼</text><text x="340" y="180" font-size="13" fill="#7a6b5e" text-anchor="middle">从嫁妆到殉葬之物，被子完成了象征的升华</text></svg>', caption: '百合花三重象征：纯洁（青春）→ 美好（真情）→ 哀悼（牺牲）。' },
        { type: 'list', items: ['茹志鹃《百合花》，以细腻抒情笔调写战争年代人性之美', '线索物件：百合花被子，贯穿借被—相处—牺牲—献被', '小通讯员：憨厚害羞、纯真勇敢，细节传神', '新媳妇：质朴善良，从"不舍借被"到"主动献被"升华', '艺术特色：以小见大、细节传神、女性视角、抒情笔调', '主旨：平凡人物间真挚情谊，青春的纯洁与牺牲的哀悼'] }
      ],
      exercises: [
        { type: 'choice', question: '《百合花》中作为线索贯穿全文的物件是？', options: ['一支步枪', '一床撒满百合花的被子', '一封家书', '一顶军帽'], answer: '一床撒满百合花的被子', explanation: '小说以「百合花」被子为线索：它先是新媳妇珍贵的嫁妆、借给部队，最后盖在牺牲的小通讯员身上。被子的流转串起借被、相处、牺牲、献被等情节，并象征纯洁与哀悼，是全文的核心意象与情节支点。' },
        { type: 'choice', question: '关于小通讯员这一形象，分析正确的是？', options: ['老练世故、油嘴滑舌', '憨厚害羞、纯真负责，枪筒爱插野花', '胆小怕死、临阵脱逃', '冷漠自私、不顾他人'], answer: '憨厚害羞、纯真负责，枪筒爱插野花', explanation: '小通讯员是刚参军不久的青年人，见女性会脸红害羞，执行送「我」的任务认真负责，枪筒里还插着一枝野花，这些细节刻画出一个纯真、质朴、带着稚气与青春美的战士形象，后为掩护担架员英勇牺牲。' },
        { type: 'fill', question: '《百合花》的作者是当代女作家______（姓茹）。', answer: '茹志鹃', explanation: '《百合花》作者为茹志鹃（1925—1998），是当代著名女作家。她以细腻抒情的笔调描写战争年代普通人之间纯洁真挚的情感，风格独特，《百合花》是其代表作，被誉为"清新细腻的抒情小说"。' },
        { type: 'choice', question: '小说结尾新媳妇把百合花被子盖在牺牲的通讯员身上，作用是？', options: ['说明她后悔借出了被子', '以圣洁的被子为战士送行，升华纯洁与哀悼之情', '表现她不再善良', '仅为交代被子的去向'], answer: '以圣洁的被子为战士送行，升华纯洁与哀悼之情', explanation: '此前新媳妇舍不得借被，此时却主动把象征纯洁美好的百合花被盖在牺牲战士身上，这一举动完成人物情感升华：既是对年轻生命逝去的哀悼，也是对纯洁青春与牺牲精神的礼赞，极具感染力，绝非后悔或单纯交代。' },
        { type: 'choice', question: '《百合花》与单元中诗歌在主题上的共通点是？', options: ['都歌颂青春的纯美与奉献', '都描写自然山水', '都批判传统文化', '都写宫廷生活'], answer: '都歌颂青春的纯美与奉献', explanation: '单元主题为「青春激扬」：《百合花》以小说写战争年代青年战士的纯真、奉献与牺牲，《沁园春·长沙》等诗写青年改天换地的豪情，二者都讴歌青春之美与献身精神，只是体裁与角度不同。' }
      ]
    },

    /* ==================== 第5课 哦，香雪 ==================== */
    {
      id: 'bx1-u1-l5',
      name: '哦，香雪',
      author: '铁凝',
      chapter: '第一单元 青春激扬（诗歌与小说）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与小说概况' },
        { type: 'paragraph', text: '铁凝（1957— ），当代女作家，曾任中国作家协会主席。其作品善于以细腻温婉的笔触描写普通人的情感世界，代表作有《哦，香雪》《大浴女》《笨花》等。《哦，香雪》是她的成名作，发表于 1982 年，获全国优秀短篇小说奖。' },
        { type: 'paragraph', text: '小说以改革开放初期（20 世纪 80 年代初）为时代背景。北方深山中的小村庄「台儿沟」偏僻闭塞，直到一列火车开始每天在此停留一分钟，山外的文明消息随之涌入。小说通过山村少女香雪用一篮鸡蛋换回一个自动铅笔盒的故事，表现封闭山乡对外界文明的向往。' },
        { type: 'keypoint', label: '重点·核心物件', text: '小说核心物件是<strong>自动铅笔盒</strong>：它代表<strong>知识、文明与尊严</strong>。香雪不惜走夜路也要换回它，象征着山乡少女对现代文明的渴望、对知识尊严的维护以及自我意识的觉醒。铅笔盒虽小，却承载着深刻的精神内涵。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6f0"/><path d="M0 220 L680 220 L680 300 L0 300 Z" fill="#9b7a4a"/><rect x="30" y="205" width="620" height="20" fill="#7a5a2e"/><rect x="100" y="130" width="100" height="75" rx="4" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><g fill="#8b6914"><path d="M125 130 l5 -15 l10 15 z"/><path d="M155 130 l5 -15 l10 15 z"/><rect x="130" y="155" width="14" height="10"/><rect x="155" y="155" width="14" height="10"/></g><text x="150" y="175" font-size="12" fill="#5b3b12" text-anchor="middle">台儿沟</text><g fill="#fff" stroke="#c0392b" stroke-width="3"><rect x="420" y="155" width="170" height="50" rx="10"/><circle cx="445" cy="180" r="13" fill="#c0392b"/><circle cx="490" cy="180" r="13" fill="#c0392b"/><circle cx="535" cy="180" r="13" fill="#c0392b"/><rect x="555" y="170" width="20" height="20" rx="3" fill="#7fd4ff" stroke="#c0392b"/></g><text x="505" y="225" font-size="13" fill="#5b3b12" text-anchor="middle">火车（每日停留一分钟）</text><path d="M200 175 q110 -25 220 0" stroke="#888" stroke-width="2" fill="none" stroke-dasharray="6 6"/><g fill="#e85d8a"><circle cx="200" cy="175" r="6"/></g><text x="200" y="160" font-size="12" fill="#c0392b" text-anchor="middle">香雪</text><text x="340" y="280" font-size="14" fill="#3e6b4e" text-anchor="middle">火车开进深山，带来山外文明的消息，也唤醒了少女的向往</text></svg>', caption: '火车停靠一分钟，改变了台儿沟少女们的生活与眼界。' },
        { type: 'heading', text: '二、情节与核心意象' },
        { type: 'list', items: ['开端：火车开进台儿沟，少女们每日前往车站与旅客交换物品', '发展：香雪渴望得到自动铅笔盒，却只有鸡蛋可交换', '高潮：香雪终于登上火车，用一篮鸡蛋换回铅笔盒，却错过了下车', '结局：香雪怀抱铅笔盒，独自走三十里夜路回到台儿沟，完成蜕变'] },
        { type: 'keypoint', label: '重点·火车', text: '「<strong>火车</strong>」是小说中的重要意象：它每日在台儿沟停靠一分钟，带来山外的商品与消息，是<strong>现代文明的象征</strong>。火车的到来打破了山村千百年来的封闭与沉寂，唤醒了少女们对外部世界的向往，也推动了「换铅笔盒」这一核心情节的发生。' },
        { type: 'example', label: '心理分析', text: '请分析香雪走夜路回台儿沟时的心理变化及其意义。<br><br><strong>解析</strong>：香雪换到铅笔盒后错过了下车，不得不独自走三十里夜路。起初她害怕黑暗与孤独，但当她握紧怀中的铅笔盒时，恐惧逐渐被<strong>获得尊严的喜悦</strong>所取代。夜路象征着从蒙昧走向文明的艰难历程，而铅笔盒则是支撑她走过黑暗的精神力量。这段夜路不仅是<strong>空间的穿越</strong>，更是<strong>心灵的蜕变</strong>——香雪从一个自卑的山村少女，成长为勇敢追求知识与尊严的姑娘。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fef6fb"/><g font-size="14" text-anchor="middle"><rect x="60" y="55" width="160" height="110" rx="10" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="140" y="90" fill="#5b3b12">一篮鸡蛋</text><text x="140" y="115" fill="#7a6b5e" font-size="12">（山乡·物质）</text><text x="140" y="140" fill="#7a6b5e" font-size="12">朴素·贫穷</text><rect x="460" y="55" width="160" height="110" rx="10" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="540" y="90" fill="#0f3b5e">自动铅笔盒</text><text x="540" y="115" fill="#33536e" font-size="12">（文明·精神）</text><text x="540" y="140" fill="#33536e" font-size="12">知识·尊严</text></g><path d="M230 110 q50 -20 100 -10 q50 10 120 0" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#u5a)"/><text x="340" y="95" font-size="14" fill="#c0392b" text-anchor="middle">交换</text><text x="340" y="135" font-size="13" fill="#9c4a6e" text-anchor="middle">物质与精神、山乡与文明的碰撞</text><defs><marker id="u5a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="200" font-size="13" fill="#9c4a6e" text-anchor="middle">以一篮鸡蛋，换回对知识尊严的维护与对文明的向往</text></svg>', caption: '鸡蛋换铅笔盒，是物质与精神、山乡与文明的一次小小交换。' },
        { type: 'heading', text: '三、人物形象与心理' },
        { type: 'keypoint', label: '香雪形象', text: '香雪是台儿沟唯一考上初中的姑娘，形象鲜明：<strong>纯真质朴</strong>（仍带着山村的羞涩）、<strong>自尊要强</strong>（因同学的铅笔盒而自卑，决心换回自动铅笔盒）、<strong>勇敢执着</strong>（为换盒子独自踏上夜路，在黑暗中也不退缩）、<strong>向往文明</strong>（铅笔盒是她迈向现代文明的微小而坚定的脚步）。' },
        { type: 'keypoint', label: '心理', text: '香雪换铅笔盒，绝非贪图好玩，而是<strong>对知识尊严的维护</strong>——「谁叫我们是山里的孩子呢」，一句反问写出她既要自尊、又渴望融入文明的复杂心理。铅笔盒不是虚荣的标志，而是<strong>自我意识觉醒</strong>的象征。' },
        { type: 'table', headers: ['维度', '表现', '内涵'], rows: [['纯真质朴', '山村姑娘的羞涩与善良', '未被城市化的天然之美'], ['自尊要强', '因同学有铅笔盒而自卑', '对人格尊严的自觉维护'], ['勇敢执着', '独自走三十里夜路', '为理想不畏艰难的勇气'], ['向往文明', '换铅笔盒而非其他物品', '对知识与进步的渴求']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0ff"/><g font-size="13" text-anchor="middle"><rect x="20" y="60" width="130" height="60" rx="8" fill="#e8d5f7" stroke="#7b4fe0" stroke-width="2"/><text x="85" y="85" fill="#4a2b8a">自卑</text><text x="85" y="105" fill="#7a6b9e" font-size="12">同学有铅笔盒</text><rect x="180" y="60" width="130" height="60" rx="8" fill="#c4a0f0" stroke="#7b4fe0" stroke-width="2"/><text x="245" y="85" fill="#4a2b8a">决心</text><text x="245" y="105" fill="#7a6b9e" font-size="12">用鸡蛋换盒子</text><rect x="340" y="55" width="130" height="70" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="405" y="80" fill="#fff">夜路</text><text x="405" y="100" fill="#fff" font-size="12">恐惧→坚强</text><text x="405" y="118" fill="#fff" font-size="12">握紧铅笔盒</text><rect x="500" y="50" width="160" height="80" rx="8" fill="#7b4fe0" stroke="#5a2eb8" stroke-width="2"/><text x="580" y="78" fill="#fff">蜕变</text><text x="580" y="100" fill="#fff" font-size="12">回到台儿沟</text><text x="580" y="118" fill="#fff" font-size="12">获得尊严与自信</text></g><g stroke="#7b4fe0" stroke-width="2" fill="none"><line x1="150" y1="90" x2="178" y2="90" marker-end="url(#u5b)"/><line x1="310" y1="90" x2="338" y2="90" marker-end="url(#u5b)"/><line x1="470" y1="90" x2="498" y2="90" marker-end="url(#u5b)"/></g><defs><marker id="u5b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7b4fe0"/></marker></defs><text x="340" y="175" font-size="13" fill="#4a2b8a" text-anchor="middle">香雪的成长脉络：自卑→决心→夜路历练→精神蜕变</text></svg>', caption: '香雪的成长脉络：自卑→决心→夜路历练→精神蜕变。' },
        { type: 'heading', text: '四、艺术特色与主旨' },
        { type: 'keypoint', label: '特色·诗意小说', text: '《哦，香雪》被评论界誉为「<strong>诗意的小说</strong>」：不追求戏剧冲突的激烈，而以清新、抒情、温婉的笔调描写深山少女细微而动人的心理变化与成长，意境优美如诗。语言纯净，节奏舒缓，如一首散文诗。' },
        { type: 'list', items: ['诗意笔调：清新抒情，意境优美如散文诗', '心理描写细腻：香雪的内心变化丝丝入扣', '象征手法：火车=文明，铅笔盒=知识尊严，夜路=成长历程', '以小见大：一个铅笔盒折射改革开放初期山乡的巨变', '女性视角：以少女的成长书写时代的变迁'] },
        { type: 'warn', label: '区分', text: '《百合花》写战争年代的人情美，《哦，香雪》写和平年代山乡对文明的向往；二者都<strong>以女性视角、抒情笔调写青春纯美</strong>，但时代底色各异——一为战火中的纯洁与牺牲，一为改革春风中的觉醒与成长。' },
        { type: 'tip', label: '拓展', text: '20 世纪 80 年代初，中国刚步入改革开放，文学创作也迎来了新的繁荣。一批作家开始关注普通人的精神世界和日常生活中的诗意，形成了「<strong>抒情小说</strong>」潮流。铁凝的《哦，香雪》与汪曾祺、史铁生等人的作品一样，代表了这一时期文学从宏大叙事向个体心灵书写的转向。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'keypoint', label: '主旨', text: '小说借香雪换铅笔盒的微小事件，写出了<strong>改革开放初期山乡对现代文明的憧憬</strong>，以及<strong>少女纯真、自尊、勇敢的成长</strong>。铅笔盒虽小，却承载着知识、尊严与觉醒的深刻内涵，是时代变迁的缩影。' },
        { type: 'list', items: ['铁凝《哦，香雪》，"诗意小说"，改革开放初期背景', '核心物件：自动铅笔盒，象征知识、文明与尊严', '火车=现代文明象征，夜路=成长历程', '香雪形象：纯真、自尊、勇敢、向往文明', '艺术：诗意笔调、心理细腻、象征手法、以小见大', '主旨：山乡对文明的憧憬，少女的觉醒与成长'] }
      ],
      exercises: [
        { type: 'choice', question: '《哦，香雪》中香雪执意要换回的物件是？', options: ['一筐苹果', '一个自动铅笔盒', '一块手表', '一条纱巾'], answer: '一个自动铅笔盒', explanation: '香雪是台儿沟唯一上初中的姑娘，因同学有自动铅笔盒而自卑，遂用一篮鸡蛋从火车上换回一个自动铅笔盒。铅笔盒象征知识、文明与尊严，是全文的核心意象与情节支点，承载着深刻的精神内涵。' },
        { type: 'choice', question: '小说中「火车」这一物象的主要作用是？', options: ['仅仅作为交通工具出现', '象征外界文明进入封闭山乡，推动情节与主题', '代表战争威胁', '没有任何特殊含义'], answer: '象征外界文明进入封闭山乡，推动情节与主题', explanation: '火车每日在台儿沟停靠一分钟，带来了山外的消息与商品，也唤醒了少女们对外部世界的向往。它是现代文明的象征，既推动「换铅笔盒」情节，又承载「山乡走向文明」的主题，具有深刻的象征意义。' },
        { type: 'fill', question: '《哦，香雪》的作者铁凝，借「铅笔盒」表达了山乡少女对______与______的渴望。', answer: '知识|文明|尊严', explanation: '香雪换铅笔盒并非出于虚荣，而是出于对知识的尊重与自我尊严的维护——她不愿因「山里孩子」的身份被轻视。铅笔盒凝聚着她对知识、文明与人格尊严的渴望，是改革开放初期山乡向往现代文明的缩影。' },
        { type: 'choice', question: '对香雪这一人物形象概括最准确的是？', options: ['世故圆滑的生意人', '纯真、自尊、勇敢、向往文明的山乡少女', '冷漠的城市姑娘', '蛮横任性的孩子'], answer: '纯真、自尊、勇敢、向往文明的山乡少女', explanation: '香雪纯真羞涩、自尊要强，为换回铅笔盒不惜独自走夜路，显示出勇敢与执着；她的全部行动都指向对知识与文明的向往，是改革开放初期山乡少女觉醒与成长的典型形象。' },
        { type: 'choice', question: '《哦，香雪》的整体风格被评论界称为？', options: ['残酷血腥的现实主义', '「诗意的小说」', '荒诞派戏剧', '武侠传奇'], answer: '「诗意的小说」', explanation: '小说不追求戏剧冲突的激烈，而以清新、抒情、温婉的笔调，描写深山少女细微而动人的心理变化与成长，意境优美如诗，因此被誉为一部「诗意的小说」，代表了80年代抒情小说的潮流。' }
      ]
    }
  );
})();
