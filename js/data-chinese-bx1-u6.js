/* ============================================================
 * 高一语文 · 必修 上册 · 第六单元 学习之道（思辨性阅读与表达）
 * 6 课时：劝学 / 师说 / 反对党八股 / 拿来主义 / 读书：目的和前提 / 上图书馆
 * 数据注入：chinese.bx1.points
 * 质量标准：每课 ≥22 内容块 / 3 SVG / 类型齐全（example+table+tip+warn+list+keypoint+poem+heading+paragraph）
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx1');
  if (!v) return;

  v.points.push(
    /* ==================== 第1课 劝学 ==================== */
    {
      id: 'bx1-u6-l1',
      name: '劝学',
      author: '荀子',
      chapter: '第六单元 学习之道（思辨性阅读与表达）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '荀子（约前 313—前 238），名况，战国末期赵国人，是儒家学派的重要代表人物。他曾在齐国稷下学宫讲学，后到楚国任兰陵令。荀子批判地吸收各家学说，建立了自己的思想体系，著有《荀子》一书，共三十二篇。' },
        { type: 'paragraph', text: '《劝学》是《荀子》的第一篇。「劝」是「勉励、鼓励」的意思，不是「劝阻」。文章借勉励人们学习，系统阐述荀子关于学习意义、作用与态度的主张，是先秦说理文中运用比喻论证的典范之作。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>议论性散文</strong>，通篇采用<strong>比喻论证（设喻）</strong>：用生活中常见的现象类比抽象的学习道理，深入浅出。这种「以喻代议、寓议于喻」的写法，是荀子说理文最鲜明的特色。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f5f0e6"/><rect x="300" y="80" width="80" height="160" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><text x="340" y="170" font-size="14" fill="#5b3b12" text-anchor="middle">学</text><g fill="#7a9b3e"><circle cx="120" cy="160" r="40"/><circle cx="560" cy="160" r="40"/></g><text x="120" y="205" font-size="13" fill="#3e6b2e" text-anchor="middle">青于蓝</text><text x="560" y="205" font-size="13" fill="#3e6b2e" text-anchor="middle">寒于水</text><path d="M160 160 h120 M400 160 h120" stroke="#c0392b" stroke-width="2" marker-end="url(#q1)"/><text x="340" y="285" font-size="13" fill="#5b4636" text-anchor="middle">「青出于蓝」：学习使人超越本初</text><defs><marker id="q1" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '「青，取之于蓝，而青于蓝」是全文设喻说理的起点。' },
        { type: 'heading', text: '二、原文通读（节选）' },
        { type: 'poem', text: '君子曰：学不可以已。\n青，取之于蓝，而青于蓝；冰，水为之，而寒于水。木直中绳，輮以为轮，其曲中规。虽有槁暴，不复挺者，輮使之然也。故木受绳则直，金就砺则利，君子博学而日参省乎己，则知明而行无过矣。\n吾尝终日而思矣，不如须臾之所学也；吾尝跂而望矣，不如登高之博见也。登高而招，臂非加长也，而见者远；顺风而呼，声非加疾也，而闻者彰。假舆马者，非利足也，而致千里；假舟楫者，非能水也，而绝江河。君子生非异也，善假于物也。\n积土成山，风雨兴焉；积水成渊，蛟龙生焉；积善成德，而神明自得，圣心备焉。故不积跬步，无以至千里；不积小流，无以成江海。骐骥一跃，不能十步；驽马十驾，功在不舍。锲而舍之，朽木不折；锲而不舍，金石可镂。蚓无爪牙之利，筋骨之强，上食埃土，下饮黄泉，用心一也。蟹六跪而二螯，非蛇鳝之穴无可寄托者，用心躁也。' },
        { type: 'keypoint', label: '重点·中心句', text: '开篇「<strong>学不可以已</strong>」（学习不可以停止）是全篇的<strong>中心论点</strong>。一个「已」字（停止）奠定全文「终身学习、不可须臾放弃」的基调，以下三段都围绕它展开。' },
        { type: 'heading', text: '三、逐段研读：学习的意义' },
        { type: 'keypoint', label: '第一段', text: '第一段论<strong>学习的意义</strong>：以「青—蓝」「冰—水」「木受绳则直」「金就砺则利」四个比喻，说明<strong>后天学习能改变人、提升人</strong>，使人「知明而行无过」（智慧明达、行为无过）。' },
        { type: 'example', label: '分析示范', text: '请分析「故木受绳则直，金就砺则利，君子博学而日参省乎己，则知明而行无过矣」的论证层次。<br><br><strong>解析</strong>：荀子先写<strong>物</strong>——木材经墨线量过就笔直，刀剑经磨石磨砺就锋利；再写<strong>人</strong>——君子广泛学习并每天反省自己，就能智慧明达、行为无过。这是由<strong>物及人、由浅入深</strong>的类比，把抽象的「学习能完善自我」讲得具体可感。其中「参省乎己」（检查反省自己）点出学习不仅是外求知识，更要内省修身。' },
        { type: 'warn', label: '易错·通假字', text: '本段通假字密集，务必识别：<strong>「有」通「又」</strong>（「虽有槁暴」）；<strong>「暴」通「曝」</strong>（日晒，读 pù）；<strong>「輮」通「煣」</strong>（用火烤使弯曲）；<strong>「知」通「智」</strong>（智慧）。读文言文时若不识通假，句意往往全错。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><g font-size="14" text-anchor="middle"><rect x="40" y="50" width="140" height="120" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="110" y="100" fill="#3e6b2e">青出于蓝</text><text x="110" y="125" fill="#3e6b2e" font-size="12">变优</text><rect x="200" y="50" width="140" height="120" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="270" y="100" fill="#0f3b5e">冰寒于水</text><text x="270" y="125" fill="#0f3b5e" font-size="12">变强</text><rect x="360" y="50" width="140" height="120" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="430" y="100" fill="#5b3b12">木受绳直</text><text x="430" y="125" fill="#5b3b12" font-size="12">规范</text><rect x="520" y="50" width="140" height="120" rx="8" fill="#e89a5a" stroke="#c0392b" stroke-width="2"/><text x="590" y="100" fill="#fff">金就砺利</text><text x="590" y="125" fill="#fff" font-size="12">磨砺</text></g><path d="M180 110 h20 M340 110 h20 M500 110 h20" stroke="#c0392b" stroke-width="2.5" marker-end="url(#q2)"/><text x="340" y="200" font-size="13" fill="#3e5b6b" text-anchor="middle">四个比喻→归结「博学参省，知明无过」</text><defs><marker id="q2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '第一段以四喻铺陈，共同指向「学习改变人」这一意义。' },
        { type: 'heading', text: '四、学习的作用与态度' },
        { type: 'keypoint', label: '第二段', text: '第二段论<strong>学习的作用</strong>：以「登高而招」「顺风而呼」「假舆马」「假舟楫」为喻，说明人并非生来特异，而是<strong>借助学习（外物）弥补自身不足</strong>——「君子生非异也，善假于物也」。' },
        { type: 'example', label: '分析示范', text: '「吾尝终日而思矣，不如须臾之所学也」运用了什么论证方法？有何效果？<br><br><strong>解析</strong>：荀子以「终日而思」与「须臾之所学」作<strong>对比</strong>，并以「跂而望」（踮脚远望）不如「登高之博见」（登高看得更广）设喻，说明<strong>单凭苦思冥想收效甚微，借助学习才能事半功倍</strong>。对比与比喻结合，有力地论证了「善假于物」的中心，凸显学习的实践价值。' },
        { type: 'warn', label: '易错·通假', text: '「君子生非异也」的「生」是<strong>通假字，通「性」（天性、本性）</strong>，读 xìng。句意是：君子并非天资异于常人，只是善于借助外物罢了。切勿误读为「生活」或「出生」。' },
        { type: 'keypoint', label: '第三段', text: '第三段论<strong>学习的态度与方法</strong>：以「积土成山」「积水成渊」「不积跬步无以至千里」强调<strong>积累</strong>；以「骐骥」与「驽马」、「朽木」与「金石」对比强调<strong>不舍（坚持）</strong>；以「蚓」与「蟹」对比强调<strong>专一</strong>。' },
        { type: 'table', headers: ['论证维度', '比喻（喻体）', '说明的道理'], rows: [['学习的意义', '青蓝、冰水、木直、金利', '后天学习使人完善，知明行无过'], ['学习的作用', '登高招、顺风呼、假舆马舟楫', '善假于物，弥补不足、提升自我'], ['积累', '积土成山、积水成渊、跬步千里', '学问须日积月累，持之以恒'], ['坚持', '骐骥十步 vs 驽马十驾、锲而不舍', '贵在持之以恒，不半途而废'], ['专一', '蚓用心一 vs 蟹用心躁', '专心致志方能有成']] },
        { type: 'list', items: ['设喻说理：通篇用生活现象设喻，把抽象道理形象化，深入浅出', '层层递进：意义→作用→态度，由「为何学」到「怎么学」，逻辑严密', '正反对比：骐骥与驽马、蚓与蟹，正反对举，说服力强', '整散结合：多用排比短句（如「积……成……」），节奏铿锵，富有气势', '语言凝练：留下「青出于蓝」「锲而不舍」「跬步千里」等成语典故'] },
        { type: 'tip', label: '拓展', text: '荀子主张<strong>「性恶论」</strong>：认为人的本性是恶的，善良是后天人为（「伪」）的结果。这正与《劝学》相呼应——既然本性非善，就更须通过<strong>后天学习</strong>来矫治、提升。这与孟子「性善论」恰好相对，是先秦人性论的两大对立学说。' },
        { type: 'heading', text: '五、主旨与小结' },
        { type: 'keypoint', label: '主旨', text: '文章以大量<strong>比喻</strong>阐明<strong>「学不可以已」</strong>的道理，从学习的意义、作用到态度方法层层展开，勉励君子<strong>终身努力学习、积累专一、修养品性</strong>，是儒家劝学思想的代表作。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#f5f0e6"/><g font-size="14" text-anchor="middle"><rect x="30" y="55" width="170" height="90" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="115" y="95" fill="#3e6b2e">意义</text><text x="115" y="120" fill="#3e6b2e" font-size="12">知明行无过</text><rect x="255" y="55" width="170" height="90" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="340" y="95" fill="#0f3b5e">作用</text><text x="340" y="120" fill="#0f3b5e" font-size="12">善假于物</text><rect x="480" y="55" width="170" height="90" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="565" y="95" fill="#5b3b12">态度</text><text x="565" y="120" fill="#5b3b12" font-size="12">积累·不舍·专一</text></g><path d="M200 100 h55 M425 100 h55" stroke="#c0392b" stroke-width="2.5" marker-end="url(#q3)"/><text x="340" y="185" font-size="13" fill="#5b4636" text-anchor="middle">论证三阶：意义 → 作用 → 态度，皆归于「学不可以已」</text><defs><marker id="q3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '全文以「学不可以已」为纲，意义—作用—态度层层推进。' },
        { type: 'list', items: ['荀子，战国末期儒家，《劝学》为《荀子》首篇，「劝」即勉励', '中心论点：「学不可以已」，强调终身学习', '论证特色：通篇设喻、以喻代议、正反对比', '第一段论意义（知明无过），第二段论作用（善假于物）', '第三段论态度：积累、不舍、专一三者缺一不可', '通假字：有—又、暴—曝、輮—煣、知—智、生—性'] }
      ],
      exercises: [
        { type: 'choice', question: '《劝学》中「劝」的意思是？', options: ['劝阻', '勉励、鼓励', '劝说', '勤奋'], answer: '勉励、鼓励', explanation: '「劝」在古汉语中常作「勉励」解（如「劝学」即勉励学习），而非现代汉语「劝阻、劝告」。标题点明文章主旨：鼓励人们坚持不懈地求学修身，故「勉励、鼓励」最准确。' },
        { type: 'choice', question: '本文最主要的论证方法是？', options: ['举例论证', '比喻论证（设喻说理）', '对比论证为主', '引用论证为主'], answer: '比喻论证（设喻说理）', explanation: '全文以青蓝、冰水、木轮、登高、积土、积水、锲镂等大量生活喻体类比学习道理，把抽象的学习意义与作用讲得形象可感，是先秦说理文中「设喻」的典范，比喻论证是贯穿全篇最主要的方法。' },
        { type: 'fill', question: '「故不积跬步，无以至千里；不积小流，无以成江海」强调学习要______（积累 / 投机取巧）。', answer: '积累', explanation: '跬步积累方至千里，小流汇聚方成江海，荀子以此比喻学问须日积月累、持之以恒。与之相对，「锲而不舍，金石可镂」亦强调坚持，全段都在阐明「积累」与「不舍」的学习态度。' },
        { type: 'choice', question: '「君子生非异也，善假于物也」中「生」意为？', options: ['生活', '通「性」，天性', '学生', '生命'], answer: '通「性」，天性', explanation: '这是通假字，「生」通「性」，指天性、本性。句意为君子并非天资异于常人，只是善于借助外物（学习、工具）罢了，进一步强调后天学习的作用而非先天差别，切勿误读为「生活」。' },
        { type: 'choice', question: '下列对「吾尝终日而思矣，不如须臾之所学也」理解正确的是？', options: ['空想胜过学习', '单纯苦思不如短暂实效的学习，强调学重于思', '学习无用', '思考有害'], answer: '单纯苦思不如短暂实效的学习，强调学重于思', explanation: '荀子以「终日思」对比「须臾学」，说明脱离学习的空想收效甚微，有效学习（借助外物、登高博见）远胜闭门苦思，凸显「学」的优先性与实践性，而非否定思考本身。' }
      ]
    },

    /* ==================== 第2课 师说 ==================== */
    {
      id: 'bx1-u6-l2',
      name: '师说',
      author: '韩愈',
      chapter: '第六单元 学习之道（思辨性阅读与表达）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '韩愈（768—824），字退之，自谓郡望昌黎，世称「韩昌黎」。唐代文学家、思想家，古文运动的倡导者，被苏轼誉为「文起八代之衰」，列为「唐宋八大家」之首。他主张恢复先秦两汉的散文传统，反对六朝以来浮华的骈文。' },
        { type: 'paragraph', text: '《师说》作于唐德宗贞元十八年（802 年）左右。当时士大夫阶层流行「耻学于师」的风气——以拜人为师为羞，年相若、道相似便「群聚而笑之」。韩愈针此陋习，写下此文，倡导师道尊严与从师之道。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>说理散文（议论文）</strong>，采用<strong>「立—破—立」</strong>结构：先正面立论「道之所存，师之所存」，再批判「耻学于师」时弊，最后以孔子事例再立。破立结合，论证有力。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2f6"/><circle cx="340" cy="150" r="46" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><text x="340" y="155" font-size="15" fill="#5b3b12" text-anchor="middle">道</text><g fill="#7ec8e3"><circle cx="180" cy="150" r="24"/><circle cx="500" cy="150" r="24"/><circle cx="340" cy="70" r="24"/><circle cx="340" cy="230" r="24"/></g><text x="180" y="195" font-size="12" fill="#0f3b5e" text-anchor="middle">贵</text><text x="500" y="195" font-size="12" fill="#0f3b5e" text-anchor="middle">贱</text><text x="340" y="55" font-size="12" fill="#0f3b5e" text-anchor="middle">长</text><text x="340" y="275" font-size="12" fill="#0f3b5e" text-anchor="middle">少</text><text x="340" y="288" font-size="13" fill="#33485a" text-anchor="middle">无贵无贱、无长无少：以「道」为中心择师</text></svg>', caption: '「道之所存，师之所存」打破身份界限，是全文文眼。' },
        { type: 'heading', text: '二、原文通读（节选）' },
        { type: 'poem', text: '古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从师，其为惑也，终不解矣。\n生乎吾前，其闻道也固先乎吾，吾从而师之；生乎吾后，其闻道也亦先乎吾，吾从而师之。吾师道也，夫庸知其年之先后生于吾乎？是故无贵无贱，无长无少，道之所存，师之所存也。\n嗟乎！师道之不传也久矣！欲人之无惑也难矣！古之圣人，其出人也远矣，犹且从师而问焉；今之众人，其下圣人也亦远矣，而耻学于师。是故圣益圣，愚益愚。\n爱其子，择师而教之；于其身也，则耻师焉，惑矣。彼童子之师，授之书而习其句读者，非吾所谓传其道解其惑者也。\n巫医乐师百工之人，不耻相师。士大夫之族，曰师曰弟子云者，则群聚而笑之。呜呼！师道之不复，可知矣。\n圣人无常师。孔子师郯子、苌弘、师襄、老聃。孔子曰：三人行，则必有我师焉。是故弟子不必不如师，师不必贤于弟子，闻道有先后，术业有专攻，如是而已。\n李氏子蟠，年十七，好古文，六艺经传皆通习之，不拘于时，学于余。余嘉其能行古道，作《师说》以贻之。' },
        { type: 'keypoint', label: '重点·题解', text: '「说」是古代<strong>议论文体</strong>的一种，多为陈述见闻、议论事理（如《爱莲说》《捕蛇者说》）。「师说」即「论从师之道」。首段即亮明教师职责与择师标准，开宗明义。' },
        { type: 'heading', text: '三、逐段研读' },
        { type: 'keypoint', label: '第一段', text: '第一段<strong>正面立论</strong>：①教师的职责是「<strong>传道受业解惑</strong>」；②人非生而知之，必有惑，故必有师；③择师标准唯「道」——「<strong>无贵无贱，无长无少，道之所存，师之所存</strong>」。' },
        { type: 'example', label: '分析示范', text: '分析「是故无贵无贱，无长无少，道之所存，师之所存也」的论证逻辑。<br><br><strong>解析</strong>：韩愈先设前提——「吾师道也」（我学的是道），既然学的是道，便<strong>不必管对方年龄身分先后</strong>。「夫庸知其年之先后生于吾乎」以反问加强语气，自然推出结论：谁掌握了道，谁就是老师。这一推理<strong>破除了以门第、年龄论师的偏见</strong>，是全文最犀利的理论支点。' },
        { type: 'warn', label: '易错·通假与古今异义', text: '「师者，所以传道受业解惑也」中<strong>「受」通「授」</strong>（传授）；「所以」是古义，表<strong>「用来……的（人）」</strong>，不同于今义「因此」。又「不齿」意为<strong>不屑与之同列</strong>，含鄙视意，不可望文生义为「不咬」。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#f3f8fb"/><rect x="40" y="40" width="180" height="150" rx="8" fill="#fdeaf0" stroke="#c0392b" stroke-width="2"/><text x="130" y="100" font-size="13" fill="#9c1a2e" text-anchor="middle">耻学于师</text><text x="130" y="125" font-size="11" fill="#9c1a2e" text-anchor="middle">（时弊·破）</text><text x="130" y="155" font-size="11" fill="#9c1a2e" text-anchor="middle">圣益圣·愚益愚</text><rect x="250" y="40" width="180" height="150" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="340" y="100" font-size="13" fill="#3e6b2e" text-anchor="middle">道存师存</text><text x="340" y="125" font-size="11" fill="#3e6b2e" text-anchor="middle">（正论·立）</text><text x="340" y="155" font-size="11" fill="#3e6b2e" text-anchor="middle">能者为师</text><rect x="460" y="40" width="180" height="150" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="550" y="100" font-size="13" fill="#0f3b5e" text-anchor="middle">孔子为证</text><text x="550" y="125" font-size="11" fill="#0f3b5e" text-anchor="middle">（再立·证）</text><text x="550" y="155" font-size="11" fill="#0f3b5e" text-anchor="middle">无常师</text><text x="340" y="215" font-size="13" fill="#3e5b6b" text-anchor="middle">破立结合：先破「耻师」时弊，再立从师之道，终以孔子印证</text></svg>', caption: '说理文常用「破立结合」：破错误风气，立正确主张，再举证。' },
        { type: 'keypoint', label: '第二段·对比', text: '第二段用<strong>三组对比</strong>批判「耻学于师」：①<strong>古之圣人</strong>（从师）与<strong>今之众人</strong>（耻师）→「圣益圣，愚益愚」；②<strong>爱其子</strong>（择师）与<strong>于其身</strong>（耻师）→「小学而大遗」；③<strong>百工之人</strong>（不耻相师）与<strong>士大夫</strong>（群聚而笑）→反差强烈，幽默而犀利。' },
        { type: 'keypoint', label: '第三段·典范', text: '第三段以<strong>孔子「无常师」</strong>为正面典范：孔子曾师郯子、苌弘、师襄、老聃，并说「三人行，则必有我师」。从而得出千古名句：<strong>「弟子不必不如师，师不必贤于弟子，闻道有先后，术业有专攻」</strong>。' },
        { type: 'table', headers: ['对比组', '行为', '结果/评价'], rows: [['古之圣人 vs 今之众人', '从师问焉 vs 耻学于师', '圣益圣，愚益愚'], ['爱其子 vs 于其身', '择师而教 vs 耻师焉', '小学而大遗，未见其明'], ['百工之人 vs 士大夫', '不耻相师 vs 群聚而笑', '智乃反不能及，可怪'], ['孔子（正面）', '圣人无常师', '弟子不必不如师']] },
        { type: 'list', items: ['体裁：古代议论文「说」，围绕「从师之道」展开', '中心论点：道之所存，师之所存（唯道是师）', '结构：立（正面）—破（耻师时弊）—立（孔子印证）', '手法：三组对比，层层剥笋，破立结合', '名句：「传道受业解惑」「弟子不必不如师」', '通假与古义：受—授；所以=用来……的'] },
        { type: 'tip', label: '拓展', text: '韩愈倡导的<strong>古文运动</strong>，主张「文以载道」「惟陈言之务去」，反对六朝骈文的形式主义。《师说》正是其主张的范本：语言长短错落、说理畅达。他与柳宗元并称「韩柳」，二人共同奠定了唐宋古文的基础，影响后世八大家。' },
        { type: 'heading', text: '四、主旨与小结' },
        { type: 'keypoint', label: '主旨', text: '文章批驳<strong>「耻学于师」</strong>的陋习，阐明<strong>从师学习的必要与标准</strong>，倡导<strong>能者为师、教学相长</strong>的平等求学精神，对扭转当时不良风气、确立师道尊严具有重大意义。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#eef2f6"/><g font-size="14" text-anchor="middle"><rect x="30" y="55" width="180" height="90" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="120" y="95" fill="#3e6b2e">立·正论</text><text x="120" y="118" fill="#3e6b2e" font-size="12">道存师存</text><rect x="250" y="55" width="180" height="90" rx="8" fill="#fdeaf0" stroke="#c0392b" stroke-width="2"/><text x="340" y="95" fill="#9c1a2e">破·时弊</text><text x="340" y="118" fill="#9c1a2e" font-size="12">耻学于师</text><rect x="470" y="55" width="180" height="90" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="560" y="95" fill="#0f3b5e">立·印证</text><text x="560" y="118" fill="#0f3b5e" font-size="12">孔子无常师</text></g><path d="M210 100 h40 M430 100 h40" stroke="#c0392b" stroke-width="2.5" marker-end="url(#q4)"/><text x="340" y="185" font-size="13" fill="#33485a" text-anchor="middle">行文脉络：立 → 破 → 立，论证环环相扣</text><defs><marker id="q4" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '「立—破—立」三步走，是议论文的经典结构。' },
        { type: 'list', items: ['韩愈，唐宋八大家之首，古文运动倡导者', '中心论点：道之所存，师之所存（能者为师）', '教师职责：传道、受业、解惑', '三组对比批判「耻学于师」，破立结合', '名句：弟子不必不如师，师不必贤于弟子', '现实意义：倡导平等求学、教学相长的精神'] }
      ],
      exercises: [
        { type: 'choice', question: '《师说》的中心论点是？', options: ['学者不必有师', '道之所存，师之所存', '贵贱决定师位', '少年不能为师'], answer: '道之所存，师之所存', explanation: '韩愈主张以「道」为择师标准：谁先闻道、掌握真理，谁就是老师，不论身份年龄。这一观点破除了当时以门第论师的偏见，是全篇立论的核心，故「道之所存，师之所存」为中心论点。' },
        { type: 'choice', question: '「师者，所以传道受业解惑也」中「所以」意为？', options: ['因此', '用来……的（人/凭借）', '之所以', '所以然'], answer: '用来……的（人/凭借）', explanation: '古汉语中「所以」常表凭借或原因。此句意为老师是「用来传授道理、教授学业、解答疑惑的人」，「所以」相当于「用来……的（人）」，不同于现代汉语表结果的「因此」，读时须还原古义。' },
        { type: 'fill', question: '「师者，所以传道受业解惑也」中，「受」通______（授），意为传授。', answer: '授', explanation: '「受」在此是通假字，通「授」（传授）。全句定义教师的职责为传道、授业、解惑三点，是后世理解教师角色的经典表述，阅读时须识破这一通假，不能按「接受」理解。' },
        { type: 'choice', question: '「弟子不必不如师，师不必贤于弟子」说明？', options: ['师生无需分别', '闻道有先后、术业有专攻，师生可互补', '老师一定不如学生', '不必尊重老师'], answer: '闻道有先后、术业有专攻，师生可互补', explanation: '韩愈指出师生并非固定高低：学生可能在某方面超越老师，老师也不必全胜弟子。因为「闻道有先后，术业有专攻」，故应平等求学、相互为师，体现教学相长，而非否定师道尊严。' },
        { type: 'choice', question: '本文针对的社会风气是？', options: ['崇尚从师', '耻学于师（以从师为耻）', '罢黜百家', '重武轻文'], answer: '耻学于师（以从师为耻）', explanation: '唐代士大夫阶层流行「耻学于师」，以拜人为师为羞。韩愈作《师说》正是为矫正这一陋习，倡导师道尊严与从师必要性，具有鲜明的现实批判色彩，全文三组对比即围绕此展开。' }
      ]
    },

    /* ==================== 第3课 反对党八股 ==================== */
    {
      id: 'bx1-u6-l3',
      name: '反对党八股',
      author: '毛泽东',
      chapter: '第六单元 学习之道（思辨性阅读与表达）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '毛泽东（1893—1976），伟大的无产阶级革命家、战略家、理论家，也是杰出的文章家。他的政论、演讲通俗生动、犀利有力，善于把深刻道理讲得明白晓畅。《反对党八股》是他在延安干部会上的演讲。' },
        { type: 'paragraph', text: '1942 年，延安开展整风运动，反对主观主义、宗派主义和党八股。党八股是当时党内一种空话连篇、言之无物的文风。本文即整风文献之一，以「列罪状」的方式辛辣批判坏文风，倡导生动、切实、有的放矢的马克思列宁主义文风。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>议论文（演讲稿）</strong>，采用<strong>「破」为主</strong>的写法：列出党八股的<strong>八条罪状</strong>，逐条批驳，条理清晰、犀利幽默，是「发现问题—分析问题—解决问题」思路的范例。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbf3e6"/><rect x="300" y="70" width="80" height="170" fill="#cdd6e0" stroke="#5b7a8a" stroke-width="2"/><text x="340" y="160" font-size="14" fill="#33485a" text-anchor="middle">八股</text><g fill="#c0392b"><circle cx="130" cy="100" r="14"/><circle cx="130" cy="150" r="14"/><circle cx="130" cy="200" r="14"/><circle cx="550" cy="100" r="14"/><circle cx="550" cy="150" r="14"/><circle cx="550" cy="200" r="14"/></g><text x="170" y="105" font-size="12" fill="#9c1a2e">空话连篇</text><text x="170" y="155" font-size="12" fill="#9c1a2e">言之无物</text><text x="170" y="205" font-size="12" fill="#9c1a2e">甲乙丙丁</text><text x="510" y="105" font-size="12" fill="#9c1a2e">语言无味</text><text x="510" y="155" font-size="12" fill="#9c1a2e">敷衍塞责</text><text x="510" y="205" font-size="12" fill="#9c1a2e">不负责任</text><text x="340" y="285" font-size="13" fill="#5b4636" text-anchor="middle">八条罪状：逐条点名，破中有立</text></svg>', caption: '「八大罪状」像八面镜子，照出坏文风的种种丑态。' },
        { type: 'heading', text: '二、原文选读与八条罪状' },
        { type: 'poem', text: '要使革命精神获得发展，必须抛弃党八股，采取生动活泼、新鲜有力的马克思列宁主义的文风。\n党八股的第一条罪状是：空话连篇，言之无物。\n第二条：装腔作势，借以吓人。\n第三条：无的放矢，不看对象。\n第四条：语言无味，像个瘪三。\n第五条：甲乙丙丁，开中药铺。\n第六条：不负责任，到处害人。\n第七条：流毒全党，妨害革命。\n第八条：传播出去，祸国殃民。' },
        { type: 'keypoint', label: '重点·罪状要点', text: '八条罪状可归为三类：<strong>内容空洞</strong>（空话连篇、无的放矢）、<strong>态度恶劣</strong>（装腔作势、敷衍塞责、不负责任）、<strong>危害严重</strong>（语言无味、甲乙丙丁、流毒妨害、祸国殃民）。由表及里、由轻到重。' },
        { type: 'list', items: ['空话连篇，言之无物', '装腔作势，借以吓人', '无的放矢，不看对象', '语言无味，像个瘪三', '甲乙丙丁，开中药铺（罗列现象）', '不负责任，到处害人', '流毒全党，妨害革命', '传播出去，祸国殃民'] },
        { type: 'example', label: '分析示范', text: '作者批判「甲乙丙丁，开中药铺」运用了什么手法？意在指出什么毛病？<br><br><strong>解析</strong>：毛泽东用<strong>比喻</strong>（「开中药铺」）讽刺写文章像摆药柜，甲乙丙丁一路罗列、堆砌条目却不分析主次、不触及本质。这一喻体生动可感，尖锐指出<strong>只摆现象、不动脑筋、缺乏逻辑</strong>的敷衍写法，让读者一读就懂、过目难忘，体现了演讲通俗犀利的风格。' },
        { type: 'keypoint', label: '写法·三段式', text: '每一条罪状都先<strong>摆现象</strong>、再<strong>揭危害</strong>、后<strong>指根源（提办法）</strong>，夹叙夹议，通俗生动，体现了「<strong>提出问题—分析问题—解决问题</strong>」的思路，条理分明。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3f8fb"/><rect x="50" y="40" width="170" height="140" rx="8" fill="#fdeaf0" stroke="#c0392b" stroke-width="2"/><text x="135" y="100" font-size="13" fill="#9c1a2e" text-anchor="middle">摆现象</text><text x="135" y="125" font-size="11" fill="#9c1a2e" text-anchor="middle">是什么</text><rect x="250" y="40" width="170" height="140" rx="8" fill="#fef3d8" stroke="#d9a441" stroke-width="2"/><text x="335" y="100" font-size="13" fill="#7a5a1e" text-anchor="middle">揭危害</text><text x="335" y="125" font-size="11" fill="#7a5a1e" text-anchor="middle">为什么坏</text><rect x="450" y="40" width="180" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="540" y="100" font-size="13" fill="#3e6b2e" text-anchor="middle">指根源</text><text x="540" y="125" font-size="11" fill="#3e6b2e" text-anchor="middle">怎么办</text><text x="340" y="205" font-size="13" fill="#3e5b6b" text-anchor="middle">批驳三段式：现象 → 危害 → 根源</text></svg>', caption: '好的议论文，往往「是什么—为什么—怎么办」层层推进。' },
        { type: 'heading', text: '三、论证特色' },
        { type: 'keypoint', label: '特色', text: '本文特色：①<strong>分项列举</strong>，条理清晰；②<strong>比喻讽刺</strong>（瘪三、中药铺、懒婆娘的裹脚）；③<strong>破立结合</strong>，在破中暗立正确文风；④<strong>语言口语化</strong>，深入浅出，富有演讲的现场感与战斗力。' },
        { type: 'warn', label: '易错·概念', text: '「党八股」是<strong>比喻</strong>（借明清科举八股文的僵化，指一种坏文风），并非说文章要写八股格式、也不是专指党内文件。读时要抓住「反对形式主义、倡导务实文风」的实质，切勿望文生义。' },
        { type: 'table', headers: ['罪状类型', '代表条目', '核心问题'], rows: [['内容空洞', '空话连篇、无的放矢', '没有实在内容、不看对象'], ['态度恶劣', '装腔作势、不负责任', '吓人、敷衍、不负责'], ['方法死板', '甲乙丙丁、开中药铺', '罗列现象、不分主次'], ['危害严重', '语言无味、流毒、祸国', '乏味、妨害革命与国运']] },
        { type: 'list', items: ['结构：总分思路，八条罪状逐条批驳', '手法：分项列举、比喻讽刺、破立结合', '语言：口语化、生动犀利，富有战斗力', '思路：提出问题—分析问题—解决问题', '实质：反对形式主义，倡导务实文风', '价值：对今天的写作与表达仍有指导意义'] },
        { type: 'tip', label: '拓展', text: '「党八股」与鲁迅所批判的「八股气」一脉相承。毛泽东善用<strong>群众语言</strong>说理，如「懒婆娘的裹脚，又长又臭」形容长而空的文风。这种「用自己的话、说大家的事」的文风，正是他反对党八股所提倡的——写文章要<strong>有的放矢、语言有味、为群众所喜闻乐见</strong>。' },
        { type: 'heading', text: '四、主旨与小结' },
        { type: 'keypoint', label: '主旨', text: '文章批判<strong>空泛、装腔、僵化的文风</strong>，倡导<strong>内容充实、有的放矢、生动活泼</strong>的文风，对今天写文章、做表达仍有根本指导意义：形式为内容服务，表达要对准问题、面向听众。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#fbf3e6"/><g font-size="14" text-anchor="middle"><rect x="40" y="55" width="260" height="90" rx="8" fill="#fde0d8" stroke="#c0392b" stroke-width="2"/><text x="170" y="95" fill="#9c1a2e">坏文风·党八股</text><text x="170" y="118" fill="#9c1a2e" font-size="12">空·装·僵</text><rect x="380" y="55" width="260" height="90" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="510" y="95" fill="#3e6b2e">好文风·马列风</text><text x="510" y="118" fill="#3e6b2e" font-size="12">实·活·新</text></g><path d="M300 100 h80" stroke="#c0392b" stroke-width="2.5" marker-end="url(#q5)"/><text x="340" y="185" font-size="13" fill="#5b4636" text-anchor="middle">破「党八股」→ 立「生动活泼新鲜有力」的文风</text><defs><marker id="q5" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '破中有立：破除坏文风，方显好文风应有的样子。' },
        { type: 'list', items: ['毛泽东，《反对党八股》，延安整风文献', '写法：列「八条罪状」逐条批驳（以破为主）', '罪状三类：内容空洞、态度恶劣、方法死板', '批驳三段式：摆现象—揭危害—指根源', '特色：比喻讽刺、口语化、破立结合', '主旨：反对形式主义，倡导务实生动文风'] }
      ],
      exercises: [
        { type: 'choice', question: '《反对党八股》最主要的写作特点是？', options: ['抒情为主', '列「八条罪状」逐条批驳（破立结合）', '虚构故事', '通篇古诗'], answer: '列「八条罪状」逐条批驳（破立结合）', explanation: '文章主体列出党八股的八条罪状（空话连篇、装腔作势等），每一条先摆现象、再揭危害、指根源，以「破」的方式鲜明立起正确文风主张，条理分明、犀利幽默，这是其最突出的写作特点。' },
        { type: 'choice', question: '「党八股」在文中指？', options: ['科举考试格式', '一种空话连篇、言之无物的坏文风', '党的文件', '八股文写作教程'], answer: '一种空话连篇、言之无物的坏文风', explanation: '「党八股」是比喻说法，借明清八股文的僵化刻板，指代党内存在的空泛、装腔、形式主义文风，并非真要大家写八股。核心是反对形式主义、倡导务实文风，读时须抓住实质。' },
        { type: 'fill', question: '八条罪状中，「甲乙丙丁，开中药铺」批评的是______（罗列现象、不分主次 / 语言优美）的毛病。', answer: '罗列现象、不分主次', explanation: '「开中药铺」比喻写文章像摆药柜，甲乙丙丁一路罗列、堆砌条目却不分析主次、不触及本质。它批评的是只摆现象、不动脑筋、缺乏逻辑的敷衍写法，是党八股的典型症状之一。' },
        { type: 'choice', question: '本文对今天写作的启示是？', options: ['越长越好', '内容充实、有的放矢、生动活泼', '多用空话套话', '只看格式不问内容'], answer: '内容充实、有的放矢、生动活泼', explanation: '文章反对言之无物与装腔作势，提倡写文章要针对对象、解决实际问题、语言有味。这对当下写作（无论是应试还是日常表达）都是根本性的提醒：形式为内容服务，表达要对准问题、面向听众。' },
        { type: 'choice', question: '对「无的放矢，不看对象」理解正确的是？', options: ['射箭没有靶子，比喻说话写文章不看对象、不切实际', '表扬读者', '研究弓箭制造', '强调随意发挥'], answer: '射箭没有靶子，比喻说话写文章不看对象、不切实际', explanation: '「的」是箭靶，「放矢」即放箭。「无的放矢」比喻发言作文没有明确目的与受众，脱离实际。文章主张表达要「有的放矢」——对准问题、面向听众，才有效，这是写好文章的前提。' }
      ]
    },

    /* ==================== 第4课 拿来主义 ==================== */
    {
      id: 'bx1-u6-l4',
      name: '拿来主义',
      author: '鲁迅',
      chapter: '第六单元 学习之道（思辨性阅读与表达）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '鲁迅（1881—1936），原名周树人，字豫才，浙江绍兴人，现代文学的奠基人。他的小说集有《呐喊》《彷徨》，散文集《朝花夕拾》，杂文集《坟》《华盖集》等。《拿来主义》是一篇锋利而幽默的杂文。' },
        { type: 'paragraph', text: '本文写于 1934 年。当时对待中外文化遗产存在两种错误态度：一是「闭关主义」（闭关锁国、拒绝交流），一是「送去主义」（只对外送出、仰人鼻息）。鲁迅针对这两种倾向，提出正确的「拿来」主张，倡导对文化遗产批判地继承。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>杂文</strong>，运用<strong>先破后立、比喻论证</strong>。先破「闭关主义」「送去主义」，再立「拿来主义」；以「大宅子」为核心比喻，把抽象的文化态度讲得形象深刻，是鲁迅杂文的典范。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3eee8"/><rect x="270" y="90" width="140" height="150" rx="6" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><path d="M270 90 l70 -36 70 36 z" fill="#8a5a2e"/><circle cx="200" cy="160" r="26" fill="#7ec8e3"/><circle cx="480" cy="160" r="26" fill="#e85d8d"/><path d="M226 160 h44 M410 160 h44" stroke="#c0392b" stroke-width="2" marker-end="url(#q6)"/><text x="200" y="205" font-size="12" fill="#0f3b5e" text-anchor="middle">闭关</text><text x="480" y="205" font-size="12" fill="#9c1a2e" text-anchor="middle">送去</text><text x="340" y="285" font-size="13" fill="#5b4636" text-anchor="middle">先破「闭关/送去」，再立「拿来」</text><defs><marker id="q6" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '「闭关主义」「送去主义」是铺垫，「拿来主义」才是正题。' },
        { type: 'heading', text: '二、原文选读：大宅子的比喻' },
        { type: 'poem', text: '所以我们要运用脑髓，放出眼光，自己来拿！\n譬如罢，我们之中的一个穷青年，因为祖上的阴功，得了一所大宅子……\n如果反对这宅子的旧主人，怕给他的东西染污了，徘徊不敢走进门，是孱头；\n勃然大怒，放一把火烧光，算是保存自己的清白，则是昏蛋；\n不过因为原是羡慕这宅子的旧主人的，而这回接受一切，欣欣然的蹩进卧室，大吸剩下的鸦片，那当然更是废物。\n总之，我们要拿来。我们要或使用，或存放，或毁灭。\n没有拿来的，人不能自成为新人，没有拿来的，文艺不能自成为新文艺。' },
        { type: 'keypoint', label: '重点·核心比喻', text: '「大宅子」喻<strong>文化遗产</strong>：<strong>孱头</strong>（不敢接受）、<strong>昏蛋</strong>（全盘否定）、<strong>废物</strong>（全盘接受）都是错误态度；正确做法是<strong>占有、挑选</strong>——或使用、或存放、或毁灭。' },
        { type: 'heading', text: '三、论证方法分析' },
        { type: 'keypoint', label: '破立结合', text: '文章先<strong>破</strong>「闭关主义」（怕给东西染污、不敢接触）与「送去主义」（只送不拿、丧失主动），再<strong>立</strong>「拿来主义」，形成鲜明对照，凸显主张的合理性。' },
        { type: 'example', label: '分析示范', text: '分析「大宅子」比喻中「孱头、昏蛋、废物」三种人的论证作用。<br><br><strong>解析</strong>：鲁迅借一个「穷青年得大宅子」的故事，虚构三种错误反应：<strong>孱头</strong>怕染污而不敢进门（对应闭关、逃避），<strong>昏蛋</strong>放火烧光（对应全盘否定、虚无主义），<strong>废物</strong>接受一切、大吸鸦片（对应全盘西化、盲目接受）。三个比喻<strong>形象穷尽对待遗产的三种偏颇态度</strong>，为下文「占有并挑选」的正确做法铺垫，寓庄于谐，犀利深刻。' },
        { type: 'warn', label: '易错·概念', text: '「拿来」不是<strong>全盘接收</strong>，而是「<strong>或使用，或存放，或毁灭</strong>」的筛选；「新人」「新文艺」强调在<strong>批判继承中创新</strong>。切勿把「拿来主义」误解为「照单全收」或「一概排斥」。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="40" y="50" width="170" height="140" rx="8" fill="#cfd8e3" stroke="#5b7a8a" stroke-width="2"/><text x="125" y="105" font-size="13" fill="#33485a" text-anchor="middle">孱头</text><text x="125" y="130" font-size="11" fill="#33485a" text-anchor="middle">不敢进·逃避</text><rect x="240" y="50" width="170" height="140" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="325" y="105" font-size="13" fill="#5b1a12" text-anchor="middle">昏蛋</text><text x="325" y="130" font-size="11" fill="#5b1a12" text-anchor="middle">全烧光·否定</text><rect x="440" y="50" width="200" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="540" y="105" font-size="13" fill="#3e6b2e" text-anchor="middle">拿来·挑选</text><text x="540" y="130" font-size="11" fill="#3e6b2e" text-anchor="middle">用/存/毁</text><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">三种错误态度对比一种正确态度</text></svg>', caption: '先否定「不敢/全毁/全收」，再肯定「占有并挑选」。' },
        { type: 'keypoint', label: '比喻论证', text: '本文以「大宅子」「鱼翅」「鸦片」「烟枪烟灯」等喻体，把<strong>对文化遗产的甄别取舍</strong>讲得通俗深刻：鱼翅（有益）吃掉，鸦片（有害有益）治病，烟枪烟灯（糟粕）毁掉。化抽象为具体，是杂文比喻的典范。' },
        { type: 'table', headers: ['比喻物', '对应态度/事物', '处理原则'], rows: [['大宅子', '文化遗产（整体）', '要先占有、再挑选'], ['孱头', '不敢接受（逃避）', '错误·应敢拿'], ['昏蛋', '全盘否定（烧光）', '错误·应甄别'], ['废物', '全盘接受（吸鸦片）', '错误·应筛选'], ['鱼翅/鸦片', '有益或利弊参半者', '使用、存放'], ['烟枪烟灯', '纯糟粕', '毁灭、抛弃']] },
        { type: 'list', items: ['结构：先破闭关、送去，后立拿来（破立结合）', '核心比喻：大宅子=文化遗产', '三种错误：孱头（逃避）、昏蛋（否定）、废物（照搬）', '正确做法：占有、挑选——或使用、或存放、或毁灭', '手法：比喻论证，化抽象为具体', '主旨：批判继承，在拿来中创新'] },
        { type: 'tip', label: '拓展', text: '「拿来主义」的<strong>批判性继承</strong>思维可迁移到诸多领域：读书要「取其精华去其糟粕」，学习外来文化要<b>为我所用</b>，对待传统要「守正创新」。它与本单元《劝学》「善假于物」、《师说》「能者为师」精神相通——都主张<strong>主动取舍、以我为主</strong>。' },
        { type: 'keypoint', label: '现实意义', text: '「<strong>运用脑髓，放出眼光，自己来拿</strong>」落脚于<strong>独立思考</strong>：面对海量信息与传统，既不盲从也不拒斥，而要主动判断、为我所用。这一精神在算法推荐、信息爆炸的今天，比以往更显珍贵，是「拿来主义」留给当代读者的箴言。' },
        { type: 'heading', text: '四、主旨与小结' },
        { type: 'keypoint', label: '主旨', text: '文章批判对待文化的盲目与偏激，提出<strong>「拿来主义」</strong>：<strong>独立自主地甄别、吸收优秀遗产，以创造新文化</strong>。其「批判地继承」思维，对今天的文化建设、学习创新仍具深刻启示。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#f3eee8"/><g font-size="14" text-anchor="middle"><rect x="30" y="55" width="180" height="90" rx="8" fill="#cdd6e0" stroke="#5b7a8a" stroke-width="2"/><text x="120" y="95" fill="#33485a">先占有</text><text x="120" y="118" fill="#33485a" font-size="12">敢拿来</text><rect x="250" y="55" width="180" height="90" rx="8" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><text x="340" y="95" fill="#5b3b12">再挑选</text><text x="340" y="118" fill="#5b3b12" font-size="12">辨利弊</text><rect x="470" y="55" width="180" height="90" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="560" y="95" fill="#3e6b2e">創新</text><text x="560" y="118" fill="#3e6b2e" font-size="12">成新人</text></g><path d="M210 100 h40 M430 100 h40" stroke="#c0392b" stroke-width="2.5" marker-end="url(#q7)"/><text x="340" y="185" font-size="13" fill="#5b4636" text-anchor="middle">占有 → 挑选 → 创新：拿来主义三步走</text><defs><marker id="q7" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '「拿来」的目的不是保存旧物，而是创造新我与新文化。' },
        { type: 'list', items: ['鲁迅，《拿来主义》，犀利幽默的杂文', '先破闭关、送去，后立「拿来」（破立结合）', '大宅子喻文化遗产；孱头、昏蛋、废物皆为错态', '正确态度：占有、挑选——用/存/毁', '手法：比喻论证，化抽象为具体', '主旨：批判继承，在拿来中创新'] }
      ],
      exercises: [
        { type: 'choice', question: '「拿来主义」的核心主张是？', options: ['闭关锁国', '运用脑髓、放出眼光、自己来拿（批判继承）', '全盘西化', '全盘否定传统'], answer: '运用脑髓、放出眼光、自己来拿（批判继承）', explanation: '鲁迅主张面对文化遗产要独立思考、主动甄别、为我所用，即「拿来」后「或使用，或存放，或毁灭」，既不盲目拒斥也不全盘照搬，本质是批判地继承与创新，故「批判继承」最准确。' },
        { type: 'choice', question: '文中「大宅子」比喻的是？', options: ['别人的房屋', '文化遗产（中外古今文化财富）', '官府衙门', '学校'], answer: '文化遗产（中外古今文化财富）', explanation: '鲁迅以「得了一所大宅子」比喻继承到一份文化遗产，由此引出对这份遗产该「不敢进、全烧掉、全接受」还是「占有挑选」的讨论，是全文核心比喻，承载「如何对待传统与外来文化」的主旨。' },
        { type: 'fill', question: '对待大宅子，『勃然大怒，放一把火烧光』的人是「______」（昏蛋 / 孱头），代表全盘否定的态度。', answer: '昏蛋', explanation: '「昏蛋」指因惧怕污染而把宅子一把火烧光的人，象征对传统文化与外来文化不分青红皂白、全盘否定的虚无主义态度，是鲁迅所批判的三种错误态度之一，须与「孱头（逃避）」「废物（照搬）」区分。' },
        { type: 'choice', question: '「没有拿来的，人不能自成为新人」强调？', options: ['拒绝外来一切', '在批判继承中创新、成就新我', '守住旧我即可', '文艺无需借鉴'], answer: '在批判继承中创新、成就新我', explanation: '鲁迅指出，「拿来」的目的不只是保存，更是通过甄别吸收优秀成分来创造「新人」「新文艺」。这揭示继承与创新的辩证关系：无批判继承则无真正的创造，创新必须以「拿来」为前提。' },
        { type: 'choice', question: '「或使用，或存放，或毁灭」体现的态度是？', options: ['盲目接收', '依据价值甄别取舍', '一律销毁', '一律供奉'], answer: '依据价值甄别取舍', explanation: '这九字是「拿来」的具体方法：对遗产中有益的「使用」、暂难定论的「存放」、有害的「毁灭」，按实际价值分别处理，体现理性、主动、有选择的继承观，正是「拿来主义」的精髓。' }
      ]
    },

    /* ==================== 第5课 读书：目的和前提 ==================== */
    {
      id: 'bx1-u6-l5',
      name: '读书：目的和前提',
      author: '黑塞',
      chapter: '第六单元 学习之道（思辨性阅读与表达）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '赫尔曼·黑塞（1877—1962），生于德国、后入瑞士籍的德语作家，1946 年诺贝尔文学奖得主。代表作有《悉达多》《荒原狼》等。他一生热爱读书与思考，作品常探讨人的精神成长与自我完善。' },
        { type: 'paragraph', text: '《读书：目的和前提》是一篇议论性随笔，由中文译者从黑塞的散文集中译出，编入教材作为「学习之道」的延伸阅读。文章从「目的」与「前提」两端，反省什么是真正有益的读书。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>议论性随笔</strong>：形式自由、语言亲切，却逻辑清晰。它不堆砌例证，而重在<strong>辨析概念</strong>（如「知识」与「修养」），属说理文中偏重「说理」的一类，与演讲式的《反对党八股》风格迥异。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2f0"/><rect x="280" y="90" width="120" height="150" rx="6" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><line x1="320" y1="90" x2="320" y2="240" stroke="#7a5a2e" stroke-width="3"/><line x1="360" y1="90" x2="360" y2="240" stroke="#7a5a2e" stroke-width="3"/><text x="340" y="170" font-size="14" fill="#5b3b12" text-anchor="middle">书</text><g fill="#e85d8d"><circle cx="150" cy="165" r="22"/></g><g fill="#7a9b3e"><circle cx="530" cy="165" r="22"/></g><text x="150" y="205" font-size="12" fill="#9c1a2e" text-anchor="middle">个性</text><text x="530" y="205" font-size="12" fill="#3e6b2e" text-anchor="middle">修养</text><path d="M172 165 h108 M508 165 h-108" stroke="#c0392b" stroke-width="2" marker-end="url(#q8)"/><text x="340" y="285" font-size="13" fill="#2e5b46" text-anchor="middle">以「个性」为前提，向「修养」而行</text><defs><marker id="q8" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '读书不是填满脑袋，而是滋养人格与精神。' },
        { type: 'heading', text: '二、原文选读与主要观点' },
        { type: 'poem', text: '真正的修养不追求任何具体的目的，一如所有为了自我完善而作出的努力，本身便有意义。\n读书绝不是要使我们「愉快」，而是要使我们更充实、更明智、更善良……\n读书的前提是个性化的、有追求的「人」，是健全的个性与人格。\n要读杰作：在杰作中我们认识世界，也认识自己。' },
        { type: 'keypoint', label: '重点·前提与目的', text: '黑塞认为读书的<strong>前提是个性与人格</strong>（先做一个真诚、有追求的人），<strong>目的在于追求真正的修养</strong>（人的精神成长），而非功利地获取知识、文凭或谈资。' },
        { type: 'list', items: ['读书的前提：健全的个性与人格，以及「爱」的阅读态度', '读书的目的：追求真正的修养，而非外在功利', '要读杰作：在杰作中认识世界、认识自己', '读书是「爱的死心塌地」的投入，贵在专注与恒心', '反对把读书当消遣或单纯的知识积累', '修养是一生的事，需慢养而非速成'] },
        { type: 'keypoint', label: '关键·辨析', text: '黑塞区分<strong>「获取知识」与「获得修养」</strong>：前者可速成、为用；后者需<strong>慢养、为人生</strong>，是贯穿一生的精神修炼。二者不矛盾，但读书更应有「修养」这一深层目的。' },
        { type: 'example', label: '分析示范', text: '如何理解黑塞所说的读书「前提在人格」？<br><br><strong>解析</strong>：黑塞强调，读书不是技术活，而是<strong>人与书的相遇</strong>。若没有独立的人格与真诚的态度，读书易流于功利（为分数、为炫耀）或盲从（人读亦读）。只有以真实、完整的「自我」去读，书籍才能<strong>反哺精神、完善人格</strong>。这与荀子「博学而日参省乎己」的内省精神遥相呼应——读书终要回到「人」的成长。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3f8fb"/><rect x="50" y="40" width="260" height="140" rx="8" fill="#cfd8e3" stroke="#5b7a8a" stroke-width="2"/><text x="180" y="100" font-size="13" fill="#33485a" text-anchor="middle">获取知识</text><text x="180" y="125" font-size="11" fill="#33485a" text-anchor="middle">为用·可速成</text><rect x="370" y="40" width="260" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="500" y="100" font-size="13" fill="#3e6b2e" text-anchor="middle">获得修养</text><text x="500" y="125" font-size="11" fill="#3e6b2e" text-anchor="middle">为人生·需慢养</text><text x="340" y="205" font-size="13" fill="#3e5b6b" text-anchor="middle">黑塞的区分：知识向外，修养向内</text></svg>', caption: '知识是「术」，修养是「道」——读书更要后者。' },
        { type: 'heading', text: '三、论证特色与启示' },
        { type: 'keypoint', label: '特色', text: '本文<strong>重概念辨析而非举例论证</strong>：以「知识/修养」「目的/前提」两组对立概念搭建框架，层层说理；语言如与人交谈，亲切而不失深刻，体现<strong>随笔</strong>「形散神聚」的特点。' },
        { type: 'warn', label: '易错·断章', text: '黑塞推崇读<strong>「杰作」</strong>并非排斥通俗读物，而是强调<strong>在杰作中建立精神高度</strong>；他说读书「不追求具体目的」，是指<strong>超越功利</strong>，而非「读了无用、不必读」。切勿把「非功利」误解为「无目的、无所谓」。' },
        { type: 'table', headers: ['维度', '获取知识', '获得修养'], rows: [['指向', '向外（掌握信息、技能）', '向内（完善人格、精神）'], ['速度', '可速成', '需一生慢养'], ['动力', '实用、应试', '热爱、自觉'], ['评价', '看得见（分数、证书）', '难量化（境界、胸襟）']] },
        { type: 'list', items: ['前提：健全的个性与人格（先立其「人」）', '目的：追求真正的修养，而非功利', '方法：读杰作，以爱与专注投入', '辨析：知识为用、修养为人生', '风格：随笔式概念辨析，亲切深刻', '呼应：与《劝学》皆重精神修养'] },
        { type: 'tip', label: '拓展', text: '黑塞的读书观与<strong>中国「为己之学」</strong>传统相通：孔子说「古之学者为己，今之学者为人」，正是强调学习是为完善自我，而非做给他人看。无论中西，「读书以修养人格」都是学习之道的深层共识，值得我们对照体会。' },
        { type: 'heading', text: '四、主旨与小结' },
        { type: 'keypoint', label: '主旨', text: '文章提醒我们：<strong>读书应先立其「人」</strong>，以真诚与热爱去读杰作，让书籍成为<strong>精神成长、自我完善的伙伴</strong>，而非应试的附庸、功利的工具。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#eef2f0"/><g font-size="14" text-anchor="middle"><rect x="40" y="55" width="170" height="90" rx="8" fill="#e8b0c8" stroke="#9c1a2e" stroke-width="2"/><text x="125" y="95" fill="#5b1a2e">前提·人格</text><text x="125" y="118" fill="#5b1a2e" font-size="12">真诚自我</text><rect x="255" y="55" width="170" height="90" rx="8" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><text x="340" y="95" fill="#5b3b12">途径·读杰作</text><text x="340" y="118" fill="#5b3b12" font-size="12">爱与专注</text><rect x="470" y="55" width="170" height="90" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="555" y="95" fill="#3e6b2e">归宿·修养</text><text x="555" y="118" fill="#3e6b2e" font-size="12">精神成长</text></g><path d="M210 100 h45 M425 100 h45" stroke="#c0392b" stroke-width="2.5" marker-end="url(#q9)"/><text x="340" y="185" font-size="13" fill="#2e5b46" text-anchor="middle">人格 → 读杰作 → 修养：读书的内在逻辑</text><defs><marker id="q9" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '从「人」出发，到「修养」落脚，是读书的真正道路。' },
        { type: 'list', items: ['黑塞，诺贝尔文学奖得主，议论性随笔', '前提：健全个性与人格；目的：追求真正修养', '知识为用可速成，修养为人生需慢养', '主张读杰作，以爱与专注投入', '风格：概念辨析、形散神聚', '主旨：读书以完善自我，而非功利工具'] }
      ],
      exercises: [
        { type: 'choice', question: '黑塞认为读书的真正「前提」是？', options: ['拥有大量藏书', '健全的个性与人格', '高智商', '充足的时间'], answer: '健全的个性与人格', explanation: '黑塞开宗明义：读书的前提是「个性和人格」。没有独立人格与真诚态度，读书易流于功利或盲从；只有以真实自我去读，书籍才能滋养精神而非充当装饰，故「个性与人格」是前提。' },
        { type: 'choice', question: '黑塞区分「获取知识」与「获得修养」，侧重主张？', options: ['知识比修养重要', '修养是为人生、需慢养的精神成长', '二者完全无关', '修养可以速成'], answer: '修养是为人生、需慢养的精神成长', explanation: '黑塞认为知识偏向外在功利、可速成；修养则指向人的整全发展，需要以爱与恒心慢慢涵养，是贯穿一生的修炼。他并非否定知识，而是强调读书更应有「修养」这一深层目的。' },
        { type: 'fill', question: '黑塞提倡读「______」（杰作 / 任何快餐书），因为在杰作中能认识世界与自我。', answer: '杰作', explanation: '黑塞强调要读「杰作」——经过时间检验、思想与艺术俱佳的作品。杰作承载着人类精神的高度，认真研读能帮助我们更深刻地认识世界、认识自我，实现精神成长，而非沉溺于快餐式阅读。' },
        { type: 'choice', question: '下列对「读书目的」理解符合黑塞的是？', options: ['为了文凭和分数', '为了追求真正的修养与精神成长', '为了炫耀藏书', '为了打发时间'], answer: '为了追求真正的修养与精神成长', explanation: '本文核心即辨析读书目的：黑塞反对把读书异化为获取文凭或消遣，主张以读书涵养人格、追求真正的修养，使书籍成为一生精神成长的凭借，而非应试与功利的附庸。' },
        { type: 'choice', question: '「读书：目的和前提」与《劝学》的相通点是？', options: ['都主张死记硬背', '都强调学习（读书）对人的精神修养的意义', '都反对读书', '都认为天赋决定一切'], answer: '都强调学习（读书）对人的精神修养的意义', explanation: '荀子《劝学》言「博学而日参省乎己，则知明而行无过」，重后天学习以修养品性；黑塞言读书以成就修养与人格。二者虽一中一西、一古一今，却都视读书学习为精神成长之道。' }
      ]
    },

    /* ==================== 第6课 上图书馆 ==================== */
    {
      id: 'bx1-u6-l6',
      name: '上图书馆',
      author: '王佐良',
      chapter: '第六单元 学习之道（思辨性阅读与表达）',
      difficulty: '简单',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '王佐良（1916—1995），浙江上虞人，翻译家、学者，曾任北京外国语学院（今北京外国语大学）院长。他精通英语，译有《彭斯诗选》等，著述涉及文学、语言学多个领域，文风平实而隽永。' },
        { type: 'paragraph', text: '《上图书馆》是一篇回忆性散文，以作者从清华到牛津的图书馆经历为线索，写不同时期读书环境对人的精神熏陶，呼应本单元「学习之道」的主题，是一则温润的「阅读自传」。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>回忆性散文</strong>：以第一人称、按<strong>时间顺序</strong>记事，重在抒发对阅读与学术环境的体会。与同单元的《反对党八股》《拿来主义》不同，它不以论证取胜，而以<strong>抒情与叙事</strong>见长，形散神聚。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3eee2"/><rect x="180" y="90" width="320" height="150" rx="6" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><line x1="220" y1="90" x2="220" y2="240" stroke="#7a5a2e" stroke-width="2"/><line x1="260" y1="90" x2="260" y2="240" stroke="#7a5a2e" stroke-width="2"/><line x1="300" y1="90" x2="300" y2="240" stroke="#7a5a2e" stroke-width="2"/><line x1="340" y1="90" x2="340" y2="240" stroke="#7a5a2e" stroke-width="2"/><line x1="380" y1="90" x2="380" y2="240" stroke="#7a5a2e" stroke-width="2"/><line x1="420" y1="90" x2="420" y2="240" stroke="#7a5a2e" stroke-width="2"/><g fill="#7ec8e3"><circle cx="340" cy="200" r="14"/></g><text x="340" y="285" font-size="13" fill="#5b4636" text-anchor="middle">书海中的一盏灯：图书馆里的专注阅读</text></svg>', caption: '图书馆的静谧，恰是深度阅读最好的土壤。' },
        { type: 'heading', text: '二、原文选读与内容脉络' },
        { type: 'poem', text: '我在清华做学生的时候，最有享受的，是上图书馆。\n后来到了牛津，也常去图书馆，在那一排排书架之间，感到一种宁静的幸福。\n图书馆不只是藏书的地方，它是一座殿堂，安放着人类世代累积的精神财富。' },
        { type: 'keypoint', label: '重点·线索', text: '文章以<strong>「图书馆」为线索</strong>，串联清华、牛津两地的读书体验，写作者从养成阅读习惯到开阔学术视野的过程，个人阅读史即一部<strong>精神成长史</strong>。' },
        { type: 'list', items: ['清华图书馆：青春求知的起点，养成阅读习惯', '牛津图书馆：西学浸润，视野大开', '由「上图书馆」到「爱上阅读」的情感递进', '结尾升华：图书馆象征人类精神财富的殿堂'] },
        { type: 'keypoint', label: '写法', text: '本文<strong>以时间顺序记事</strong>，语言<strong>平实深情</strong>，在个人回忆中寄寓对<strong>阅读价值与学术精神</strong>的礼赞；不刻意说理，却让人自然领会「良好环境助益求学」的道理。' },
        { type: 'example', label: '分析示范', text: '文章写「清华—牛津」两段图书馆经历，有何作用？<br><br><strong>解析</strong>：两段经历构成<strong>递进关系</strong>。清华图书馆是作者求知的「起点」，让他养成坐下来、读进去的习惯；牛津图书馆则带来「开阔」，使他接触更广阔的中外学术世界。两段以<strong>时间线</strong>串起，由近及远、由浅入深，既写出阅读环境的变迁，也写出<strong>精神视野的拓展</strong>，使「上图书馆」超越地点，成为成长隐喻。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3f8fb"/><rect x="50" y="40" width="240" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="170" y="100" font-size="13" fill="#3e6b2e" text-anchor="middle">清华·起点</text><text x="170" y="125" font-size="11" fill="#3e6b2e" text-anchor="middle">养成习惯</text><rect x="390" y="40" width="240" height="140" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="510" y="100" font-size="13" fill="#0f3b5e" text-anchor="middle">牛津·开阔</text><text x="510" y="125" font-size="11" fill="#0f3b5e" text-anchor="middle">视野升华</text><text x="340" y="205" font-size="13" fill="#3e5b6b" text-anchor="middle">时间线索：个人阅读史 = 精神成长史</text></svg>', caption: '从一座图书馆到另一座，读书人的世界逐渐打开。' },
        { type: 'heading', text: '三、主旨与单元呼应' },
        { type: 'keypoint', label: '主旨', text: '文章以亲身经历说明：<strong>良好的阅读环境与专注的阅读习惯</strong>，是求学之道的重要支撑；图书馆既是藏书之所，更是<strong>精神成长的殿堂</strong>。' },
        { type: 'warn', label: '区分·文体', text: '本单元《劝学》《师说》偏重「为何学、怎么学」的<strong>说理</strong>，《读书》《上图书馆》偏重「读书体验与修养」的<strong>随笔/散文</strong>。读法与写法当区别对待：前者抓论点与论证，后者品情感与意境，勿用议论文标准硬套散文。' },
        { type: 'table', headers: ['篇目', '文体', '侧重', '读法'], rows: [['劝学 / 师说', '议论性散文', '为何学、怎么学', '抓论点、理论证'], ['反对党八股 / 拿来主义', '演讲 / 杂文', '批判错误态度', '析破立、明比喻'], ['读书 / 上图书馆', '随笔 / 回忆散文', '读书体验与修养', '品情感、悟意境']] },
        { type: 'list', items: ['王佐良，翻译家、学者，回忆性散文', '线索：图书馆（清华→牛津）', '写法：时间顺序、平实深情、形散神聚', '情感：由养成习惯到视野开阔', '主旨：良好阅读环境滋养精神成长', '单元呼应：与《读书》同写阅读价值'] },
        { type: 'tip', label: '拓展', text: '古今中外许多学者都眷恋图书馆：马克思在大英博物馆留下「脚印」，博尔赫斯说「天堂应该是图书馆的模样」。<strong>图书馆之所以神圣，不在于建筑，而在于它保存并平等地向所有人敞开人类的精神财富</strong>。对我们而言，善用学校图书馆，就是为「学习之道」铺路。' },
        { type: 'keypoint', label: '现实启发', text: '今天我们身处<strong>数字阅读</strong>时代，图书馆的形式在变，但其精神未变：<strong>沉下心来、与好书深度对话</strong>仍是求学之道的根本。善用学校图书馆与正规数字资源，少刷碎片化信息，正是对「上图书馆」最好的当代继承。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#f3eee2"/><g font-size="14" text-anchor="middle"><rect x="40" y="55" width="180" height="90" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="130" y="95" fill="#3e6b2e">环境·图书馆</text><text x="130" y="118" fill="#3e6b2e" font-size="12">静谧土壤</text><rect x="250" y="55" width="180" height="90" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="340" y="95" fill="#0f3b5e">习惯·专注</text><text x="340" y="118" fill="#0f3b5e" font-size="12">读进去</text><rect x="460" y="55" width="180" height="90" rx="8" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><text x="550" y="95" fill="#5b3b12">成长·殿堂</text><text x="550" y="118" fill="#5b3b12" font-size="12">精神升华</text></g><path d="M220 100 h30 M430 100 h30" stroke="#c0392b" stroke-width="2.5" marker-end="url(#q10)"/><text x="340" y="185" font-size="13" fill="#5b4636" text-anchor="middle">环境 → 习惯 → 成长：图书馆里的求学之路</text><defs><marker id="q10" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '好环境与好习惯，是「学习之道」最朴素的支撑。' },
        { type: 'list', items: ['王佐良《上图书馆》，回忆性散文', '线索：图书馆（清华→牛津的读书体验）', '写法：时间顺序、平实深情', '主旨：良好阅读环境滋养精神成长', '单元呼应：与《读书》同写阅读价值', '读散文要品情感意境，勿用议论文标准硬套'] }
      ],
      exercises: [
        { type: 'choice', question: '《上图书馆》的文体是？', options: ['议论文', '回忆性散文', '小说', '说明文'], answer: '回忆性散文', explanation: '王佐良以第一人称回忆自己在不同时期图书馆的读书经历，语言平实含情，重在抒发对阅读与学术环境的体会，属回忆性散文，而非以论证为主的议论文或虚构的小说。' },
        { type: 'choice', question: '文章以什么为线索展开？', options: ['一次旅行', '图书馆（不同时期的读书体验）', '一场考试', '一位老师'], answer: '图书馆（不同时期的读书体验）', explanation: '全文以「上图书馆」为线索，串联清华、牛津等地的图书馆经历，借个人阅读史写出精神视野的拓展，线索清晰、形散神聚，是回忆性散文常见的结构方式。' },
        { type: 'fill', question: '作者回忆了在______（清华）与牛津的图书馆经历，呈现从求知起点到视野开阔的成长。', answer: '清华', explanation: '王佐良先后就读于清华、留学牛津，文中以这两处图书馆为节点，写自己从养成阅读习惯到接受西学浸润的过程，个人阅读史折射出精神成长史，故横线应填「清华」。' },
        { type: 'choice', question: '下列对图书馆的理解，符合文意的是？', options: ['只是借书的地方', '既是藏书之所，更是精神成长的殿堂', '不如手机方便', '与学习无关'], answer: '既是藏书之所，更是精神成长的殿堂', explanation: '文章结尾将图书馆升华为人类精神财富的殿堂，强调宁静专注的阅读环境对人的滋养。它不只是物理空间与借书处，更是求学与修养的重要支撑，承载着世代累积的精神财富。' },
        { type: 'choice', question: '《上图书馆》与《读书：目的和前提》的共通主题是？', options: ['都反对阅读', '都强调阅读对人精神成长的价值', '都写小说技法', '都批判图书馆'], answer: '都强调阅读对人精神成长的价值', explanation: '黑塞从「修养前提」论读书的意义，王佐良以亲身经历写图书馆如何滋养学者精神，二者角度不同却都指向同一主题：阅读（与良好阅读环境）是精神成长之道，呼应本单元「学习之道」。' }
      ]
    }
  );
})();
