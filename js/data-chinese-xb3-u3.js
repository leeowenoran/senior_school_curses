/* ============================================================
 * 高二语文 · 选择性必修 下册 · 第三单元 至情至性（中华传统文化经典研习）
 * 6 课时：陈情表 / 项脊轩志 / 兰亭集序 / 归去来兮辞并序 /
 *        种树郭橐驼传 / 石钟山记（均为文言文）
 * 数据注入：chinese.xb3.points
 * 质量标准：每课 ≥20 内容块 / 3 SVG / 含 example+table+tip+warn+list+keypoint+heading+paragraph+poem
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'xb3');
  if (!v) return;
  v.points.push(

    /* ==================== 第1课 《陈情表》 ==================== */
    {
      id: 'xb3-u3-l1',
      cover: 'assets/cover/chinese/xb3-u3-l1.svg',
      name: '《陈情表》',
      author: '李密',
      chapter: '第三单元 至情至性（中华传统文化经典研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、作者与文体' },
        { type: 'paragraph', text: '李密（224—287），名虔，字令伯，西晋犍为武阳人。少时师事谯周，以文学见称。蜀汉亡后，晋武帝征召他为太子洗马，他因祖母刘氏年高无人奉养，上《陈情表》辞不赴命。此表情辞恳切，终获武帝谅解，成为千古至孝名文。' },
        { type: 'keypoint', label: '文体常识·表', text: '“<strong>表</strong>”是古代臣子向君主<strong>陈述意见、请求陈情</strong>的一种上行公文，多用于谢恩、劝谏、辞官、陈情等。它讲究<strong>以情动人、以理服人</strong>，语言讲究骈散结合、节奏铿锵，是魏晋公文中最具抒情性的一种。' },
        { type: 'list', items: ['“表”为上行文，对象为君主', '用途：陈情、谢恩、辞官、劝谏', '风格：情理交融，骈散间行', '名篇：《出师表》《陈情表》并称“二表”'] },
        { type: 'heading', text: '二、原文核心段（节选）' },
        { type: 'poem', text: '臣以险衅，夙遭闵凶。生孩六月，慈父见背；行年四岁，舅夺母志。祖母刘愍臣孤弱，躬亲抚养。臣少多疾病，九岁不行，零丁孤苦，至于成立。既无伯叔，终鲜兄弟，门衰祚薄，晚有儿息。外无期功强近之亲，内无应门五尺之僮，茕茕孑立，形影相吊。\n臣欲奉诏奔驰，则刘病日笃；欲苟顺私情，则告诉不许：臣之进退，实为狼狈。\n伏惟圣朝以孝治天下，凡在故老，犹蒙矜育，况臣孤苦，特为尤甚。且臣少仕伪朝，历职郎署，本图宦达，不矜名节。今臣亡国贱俘，至微至陋，过蒙拔擢，宠命优渥，岂敢盘桓，有所希冀。但以刘日薄西山，气息奄奄，人命危浅，朝不虑夕。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">忠孝两难·情感结构</text><circle cx="170" cy="130" r="50" fill="#c0473a"/><text x="170" y="126" text-anchor="middle" font-size="14" fill="#fff">孝</text><text x="170" y="148" text-anchor="middle" font-size="12" fill="#fff">祖母病笃</text><circle cx="510" cy="130" r="50" fill="#4a7de0"/><text x="510" y="126" text-anchor="middle" font-size="14" fill="#fff">忠</text><text x="510" y="148" text-anchor="middle" font-size="12" fill="#fff">诏书催逼</text><path d="M220 130 L460 130" stroke="#9c4221" stroke-width="3" marker-end="url(#c1a)"/><text x="340" y="115" text-anchor="middle" font-size="13" fill="#5b2c16">进退狼狈</text><text x="340" y="200" text-anchor="middle" font-size="13" fill="#555">以孝为先，先尽孝后尽忠</text><defs><marker id="c1a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '李密夹在“孝养祖母”与“赴命尽忠”之间，进退狼狈，是其陈情的根本矛盾。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '文章表面是辞官，内核却是“孝”与“忠”的深刻抉择。李密以“圣朝以孝治天下”为立论依据，把自己“愿乞终养”的请求纳入晋武帝提倡的孝道框架，既尽人子之情，又不忤君命，体现出极其高超的生存智慧。' },
        { type: 'keypoint', label: '核心·孝与忠', text: '李密的处理之道：先<strong>陈孝情</strong>（祖母病危、无人奉养），再<strong>表忠心</strong>（少仕伪朝、本图宦达，今蒙拔擢岂敢盘桓），最后<strong>立期限</strong>（先尽孝、后尽忠）。把“不赴命”转化为“更忠君”，使武帝无从苛责。' },
        { type: 'list', items: ['孤苦身世：夙遭闵凶、茕茕孑立', '现实困境：刘病日笃、诏书切峻', '立论依据：圣朝以孝治天下', '解决策略：先尽孝、后尽忠'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">论证层次（情理交融）</text><rect x="40" y="70" width="170" height="60" rx="8" fill="#e8b4a0"/><text x="125" y="96" text-anchor="middle" font-size="13" fill="#5b2c16">陈身世之苦</text><rect x="255" y="70" width="170" height="60" rx="8" fill="#d99a86"/><text x="340" y="96" text-anchor="middle" font-size="13" fill="#5b2c16">诉进退狼狈</text><rect x="470" y="70" width="170" height="60" rx="8" fill="#c08168"/><text x="555" y="96" text-anchor="middle" font-size="13" fill="#fff">立先孝后忠</text><path d="M210 100 L253 100" stroke="#9c4221" stroke-width="3" marker-end="url(#c1b)"/><path d="M425 100 L468 100" stroke="#9c4221" stroke-width="3" marker-end="url(#c1b)"/><text x="340" y="175" text-anchor="middle" font-size="13" fill="#555">由情入理，以理护情，层层推进</text><defs><marker id="c1b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '陈情逻辑：先动之以情（身世苦），再晓之以理（先孝后忠），情理交织。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '名句赏析', text: '“茕茕孑立，形影相吊。”<br>八个字写尽孤苦无依：<strong>“茕茕”</strong>状孤独之貌，<strong>“孑立”</strong>言孤立无伴，唯有身影与己相互安慰。四字骈句短促有力，以形写神，将丧亲失恃的悲凉凝练到极致，是全文情感基调的缩影。' },
        { type: 'table', headers: ['艺术特色', '表现', '效果'], rows: [['以情动人', '泣诉孤苦、祖孙相依', '令人不忍驳回'], ['情理交融', '孝道立论＋忠心表白', '既动情又合规'], ['四字骈句', '茕茕孑立、形影相吊', '节奏顿挫、音情并茂'], ['委婉措辞', '愿乞终养、报养日至', '措辞谦卑、留有余地']] },
        { type: 'warn', label: '通假与异义', text: '“闵”通“<strong>悯</strong>”（忧伤）；“零丁”通“<strong>伶仃</strong>”；“祚”指福分，易误作“座位”；“见背”指<strong>死去</strong>（婉辞），“见”偏指“我”；“夺”指强行改变（舅夺母志）。这些实词与委婉说法均为考查重点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">文言知识归纳</text><rect x="40" y="60" width="180" height="150" rx="8" fill="#fff" stroke="#cbb89d"/><text x="130" y="86" text-anchor="middle" font-size="14" font-weight="bold" fill="#9c4221">实词</text><text x="60" y="114" font-size="13" fill="#333">险衅：艰难祸患</text><text x="60" y="140" font-size="13" fill="#333">夙：早</text><text x="60" y="166" font-size="13" fill="#333">闵：通悯</text><text x="60" y="192" font-size="13" fill="#333">祚：福分</text><rect x="250" y="60" width="180" height="150" rx="8" fill="#fff" stroke="#cbb89d"/><text x="340" y="86" text-anchor="middle" font-size="14" font-weight="bold" fill="#9c4221">虚词</text><text x="270" y="114" font-size="13" fill="#333">以：因为</text><text x="270" y="140" font-size="13" fill="#333">之：取独</text><text x="270" y="166" font-size="13" fill="#333">于：对、向</text><text x="270" y="192" font-size="13" fill="#333">且：况且</text><rect x="460" y="60" width="180" height="150" rx="8" fill="#fff" stroke="#cbb89d"/><text x="550" y="86" text-anchor="middle" font-size="14" font-weight="bold" fill="#9c4221">句式</text><text x="480" y="114" font-size="13" fill="#333">被动：见背</text><text x="480" y="140" font-size="13" fill="#333">倒装：慈父见背</text><text x="480" y="166" font-size="13" fill="#333">判断：臣之进退</text><text x="480" y="192" font-size="13" fill="#333">省略：告诉不许</text></svg>', caption: '本课文言知识涵盖实词（险衅、夙、闵、祚）、虚词（以、之、于）与被动、倒装句式。' },
        { type: 'heading', text: '五、文言知识积累' },
        { type: 'paragraph', text: '本课文言知识点密集：实词如“险衅（艰难祸患）”“夙（早）”“闵（通悯，忧伤）”“夺（强行改变）”“祚（福分）”；虚词“以”多表“因为”，“之”常用于主谓之间取消句子独立性，“于”表“对、向”。句式上要注意被动（见背）、宾语前置与省略句。' },
        { type: 'list', items: ['实词：险衅、夙、闵、夺、祚、笃、薄', '虚词：以（因）、之（取独）、于（对）', '句式：被动句（见背）、省略句（告诉不许）', '修辞：四字骈句、对偶、用典'] },
        { type: 'tip', label: '学习提示', text: '背诵可抓住“身世之苦—进退之难—陈孝表忠—立愿终养”四层脉络。重点把握“茕茕孑立，形影相吊”“日薄西山，气息奄奄”等名句，体会四字句铺排的抒情力量。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['李密，西晋人，《陈情表》辞太子洗马之命', '文体：表，臣对君陈述意见的上行文', '主旨：孝养祖母与赴命尽忠的两难与抉择', '艺术：以情动人、情理交融、四字骈句', '文言：实词险衅夙闵祚、虚词以之於、被动倒装', '价值：千古至孝名文，生存智慧的典范'] },
        { type: 'reading', text: '延伸思考：李密以“孝”为理由拒绝帝王征召，在今天看来，忠与孝是否仍有冲突？当个人情感与社会责任抵牾时，我们该如何表达与取舍？' }
      ],
      exercises: [
        { type: 'choice', question: '古代文体中“表”的主要作用是？', options: ['古代臣子向君主任意抒情的诗', '古代臣子向君主陈述意见的一种公文', '朋友之间的往来书信', '祭祀宗庙所用的乐歌'], answer: '古代臣子向君主陈述意见的一种公文', explanation: '“表”是古代臣子呈给君主的上行公文，多用于陈情、谢恩、辞官、劝谏等，讲究以情动人、以理服人。诸葛亮《出师表》与李密《陈情表》并称“二表”，其余三项均不符合“表”的文体定义。' },
        { type: 'fill', question: '“臣以险衅，夙遭闵凶”中“夙”意为______，指早年、幼时。', answer: '早（早年）', explanation: '“夙”在句中意为“早、早年”。“夙遭闵凶”即自小就遭遇忧患不幸，与后文“生孩六月，慈父见背”相接，交代李密幼年丧父、命运多舛的孤苦身世，是全文悲情的总起。' },
        { type: 'choice', question: '《陈情表》的核心矛盾是？', options: ['忠君与思乡的冲突', '孝养祖母与赴任尽忠的两难', '贫穷与富贵的矛盾', '功名与隐逸的取舍'], answer: '孝养祖母与赴任尽忠的两难', explanation: '李密一面是病危无人奉养的祖母（孝），一面是晋武帝催逼的诏书（忠），陷入“臣之进退，实为狼狈”的两难。他最终以“先尽孝、后尽忠”化解矛盾，这正是文章情感与说理的核心。' },
        { type: 'fill', question: '“慈父见背”中“见”是助词，在这里偏指______，意为父亲离我而去（死）。', answer: '我（一方）', explanation: '“见”在“见背”中作助词，偏指动作涉及的一方“我”，不译作“看见”。“慈父见背”即“父亲背弃我而去”，是父亲去世的委婉说法，属文言中常见的偏义表达。' },
        { type: 'choice', question: '《陈情表》最突出的艺术特色是？', options: ['以理服人、冷峻议论', '以情动人、情理交融', '重在铺陈辞藻', '全用四言、毫无变化'], answer: '以情动人、情理交融', explanation: '文章先泣诉孤苦身世以动情，再引入“圣朝以孝治天下”以说理，把辞官请求纳入孝道框架，情理交织、委婉得体。四字骈句与散句交错，并非全用四言，故选“以情动人、情理交融”。' }
      ]
    },

    /* ==================== 第2课 《项脊轩志》 ==================== */
    {
      id: 'xb3-u3-l2',
      cover: 'assets/cover/chinese/xb3-u3-l2.svg',
      name: '《项脊轩志》',
      author: '归有光',
      chapter: '第三单元 至情至性（中华传统文化经典研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、作者与流派' },
        { type: 'paragraph', text: '归有光（1507—1571），字熙甫，号震川，明代昆山（今属江苏）人。他推崇唐宋古文，反对前后七子的复古模拟，与王慎中、唐顺之等并称“唐宋派”，其散文即事抒情、本色自然，对清代桐城派影响深远。' },
        { type: 'keypoint', label: '文体·唐宋派', text: '归有光属<strong>“唐宋派”</strong>：主张学习韩愈、欧阳修等唐宋古文，强调<strong>文以载道、抒情本色</strong>，反对雕琢堆砌。其文多写家常琐事，于平淡中见深情，《项脊轩志》正是这种“<strong>即事抒情</strong>”风格的代表。' },
        { type: 'list', items: ['唐宋派：归有光、王慎中、唐顺之', '主张：学唐宋古文、抒情本色', '题材：家常琐事、家族往事', '风格：平淡自然、以小见大'] },
        { type: 'heading', text: '二、原文核心段（节选）' },
        { type: 'poem', text: '项脊轩，旧南阁子也。室仅方丈，可容一人居。百年老屋，尘泥渗漉，雨泽下注；每移案，顾视无可置者。又北向，不能得日，日过午已昏。余稍为修葺，使不上漏。前辟四窗，垣墙周庭，以当南日，日影反照，室始洞然。\n先是，庭中通南北为一。迨诸父异爨，内外多置小门墙，往往而是。东犬西吠，客逾庖而宴，鸡栖于厅。庭中始为篱，已为墙，凡再变矣。\n庭有枇杷树，吾妻死之年所手植也，今已亭亭如盖矣。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">书屋·家族叙事空间</text><rect x="280" y="70" width="120" height="90" rx="6" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><text x="340" y="120" text-anchor="middle" font-size="14" fill="#5b3b12">项脊轩</text><circle cx="120" cy="120" r="34" fill="#c0473a"/><text x="120" y="124" text-anchor="middle" font-size="12" fill="#fff">诸父</text><circle cx="560" cy="120" r="34" fill="#4a7de0"/><text x="560" y="124" text-anchor="middle" font-size="12" fill="#fff">吾妻</text><path d="M154 120 L278 110" stroke="#9c4221" stroke-width="2" stroke-dasharray="4"/><path d="M406 110 L526 120" stroke="#9c4221" stroke-width="2" stroke-dasharray="4"/><text x="340" y="200" text-anchor="middle" font-size="13" fill="#555">一间书屋串起家族变迁与至亲离合</text></svg>', caption: '项脊轩是叙事的“支点”：家族分崩、妻离子散的悲欢皆由此展开。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '文章借一间百年老屋的修葺与周遭变化，写尽归氏家族由合到分、由盛转衰的沧桑，以及作者对母亲、祖母、亡妻的深切怀念。全文无一“悲”字却悲从中来，是中国散文“以淡写浓”的极致。' },
        { type: 'keypoint', label: '核心·家族之悲', text: '归有光之悲有三层：一悲<strong>家族分崩</strong>（诸父异爨、“庭中始为篱，已为墙”）；二悲<strong>亲长凋零</strong>（母、祖母已逝）；三悲<strong>爱妻早亡</strong>。枇杷树“亭亭如盖”的物是人非，将哀伤凝定于无声之中。' },
        { type: 'list', items: ['家族之悲：诸父异爨、内外多置小门墙', '亲人之悲：怀念母、祖母的教诲温情', '夫妻之悲：亡妻手植枇杷、今已亭亭如盖', '手法之妙：以乐景旧物反衬今日之哀'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">情感脉络</text><rect x="40" y="80" width="170" height="60" rx="8" fill="#7aa05a"/><text x="125" y="116" text-anchor="middle" font-size="13" fill="#fff">修轩之乐</text><rect x="255" y="80" width="170" height="60" rx="8" fill="#c08168"/><text x="340" y="116" text-anchor="middle" font-size="13" fill="#fff">家族之散</text><rect x="470" y="80" width="170" height="60" rx="8" fill="#9c4221"/><text x="555" y="116" text-anchor="middle" font-size="13" fill="#fff">妻亡之恸</text><path d="M210 110 L253 110" stroke="#9c4221" stroke-width="3" marker-end="url(#c2a)"/><path d="M425 110 L468 110" stroke="#9c4221" stroke-width="3" marker-end="url(#c2a)"/><text x="340" y="185" text-anchor="middle" font-size="13" fill="#555">由喜转悲，以书屋见证人事代谢</text><defs><marker id="c2a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '情感由修轩的喜悦，经家族离散，终归于亡妻之恸，层层转深。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '细节赏析', text: '“庭有枇杷树，吾妻死之年所手植也，今已亭亭如盖矣。”<br>全句<strong>无一字写悲</strong>，只记一棵树的生长：妻亡之年手植，今已亭亭如盖。树愈繁茂，人愈杳然，<strong>以乐景（生机）写哀情（永隔）</strong>，于平淡叙述中蓄积巨大哀恸，是“即事抒情”的巅峰之笔。' },
        { type: 'table', headers: ['艺术手法', '例句', '效果'], rows: [['细节描写', '东犬西吠、客逾庖而宴', '白描家族分崩之状'], ['以小见大', '一间书屋串家族往事', '于琐事见沧桑'], ['以景写哀', '枇杷亭亭如盖', '物是人非、哀而不言'], ['白描语言', '室仅方丈、日过午已昏', '朴素本色、平淡深情']] },
        { type: 'warn', label: '字词辨析', text: '“垣墙周庭”的“垣”读 yuán，指围墙，作动词“砌围墙”；“顾视”的“顾”是<strong>回头看</strong>，非“照顾”；“扃（jiōng）”指门窗；“牖（yǒu）”指窗户。另“异爨（cuàn）”指分家做饭，是家族分裂的关键词。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">文言知识（实词·虚词）</text><rect x="40" y="60" width="270" height="150" rx="8" fill="#fff" stroke="#cbb89d"/><text x="175" y="86" text-anchor="middle" font-size="14" font-weight="bold" fill="#9c4221">实词</text><text x="60" y="114" font-size="13" fill="#333">垣：围墙（动）</text><text x="60" y="140" font-size="13" fill="#333">顾：回头看</text><text x="60" y="166" font-size="13" fill="#333">爨：烧饭、分家</text><text x="60" y="192" font-size="13" fill="#333">葺：修补</text><rect x="370" y="60" width="270" height="150" rx="8" fill="#fff" stroke="#cbb89d"/><text x="505" y="86" text-anchor="middle" font-size="14" font-weight="bold" fill="#9c4221">虚词</text><text x="390" y="114" font-size="13" fill="#333">而：表转折/顺承</text><text x="390" y="140" font-size="13" fill="#333">于：在、向</text><text x="390" y="166" font-size="13" fill="#333">之：助词、取消独立</text><text x="390" y="192" font-size="13" fill="#333">以：用来、把</text></svg>', caption: '本课重点实词（垣、顾、爨、葺）与虚词（而、于、之、以）须结合语境理解。' },
        { type: 'heading', text: '五、文言知识积累' },
        { type: 'paragraph', text: '本文实词精炼：“垣”作动词砌墙，“顾”为回头，“爨”指烧饭分家，“葺”为修补；虚词“而”可表转折或顺承，“于”多在、向，“之”常作结构助词或取消句子独立性。这些词语是阅读归氏散文的基础。' },
        { type: 'list', items: ['实词：垣、顾、扃、牖、爨、葺、盖', '虚词：而（转/承）、于（在）、之（助）', '句式：判断句（旧南阁子也）、省略', '风格：唐宋派白描、即事抒情'] },
        { type: 'tip', label: '学习提示', text: '读此文宜慢，重点品“庭中始为篱，已为墙”与“枇杷树”两段：前者以空间变化写家族离散，后者以物之荣枯写人之永隔。背诵结尾段，体会“不言悲而悲愈深”的笔力。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['归有光，明代唐宋派代表，散文即事抒情', '书屋：项脊轩串起家族往事', '情感：家族分崩、亲长凋零、亡妻之恸', '艺术：细节白描、以小见大、以景写哀', '文言：实词垣顾爨葺、虚词而于之', '价值：平淡中见至情，明清小品典范'] },
        { type: 'reading', text: '延伸思考：归有光写家族之悲多用空间变化（篱—墙），而非直接抒情。这种“以物写情”的技法，与《陈情表》的直抒胸臆有何不同？你更被哪一种打动？' }
      ],
      exercises: [
        { type: 'choice', question: '归有光所属文学流派是？', options: ['前后七子', '唐宋派', '桐城派', '公安派'], answer: '唐宋派', explanation: '归有光与王慎中、唐顺之等并称“唐宋派”，主张学习韩愈、欧阳修等唐宋古文，强调抒情本色、反对复古模拟。桐城派是清代流派，前后七子恰是唐宋派反对的对象，故选唐宋派。' },
        { type: 'fill', question: '“垣墙周庭”中“垣”本指围墙，在此活用为动词，意为______（砌围墙）。', answer: '砌（围墙）', explanation: '“垣墙周庭”即“在庭院四周砌上围墙”。“垣”本是名词围墙，这里带宾语“周庭”，活用为动词，意为砌围墙、筑墙，体现归文用词精炼、多实词活用的特点。' },
        { type: 'choice', question: '“庭有枇杷树，吾妻死之年所手植也，今已亭亭如盖矣”运用的抒情手法是？', options: ['直抒胸臆、痛哭流涕', '以乐景（生机）写哀情（永隔）', '借古讽今', '铺陈排比'], answer: '以乐景（生机）写哀情（永隔）', explanation: '全句只记树的生长，无一字写悲。枇杷“亭亭如盖”的生机反衬妻子亡故的永隔，以物的繁茂写人的杳然，是以乐景写哀情、不言悲而悲更深的典型手法，故选此项。' },
        { type: 'fill', question: '“迨诸父异爨”中“爨”意为烧饭，这里“异爨”指______（分家各起炉灶）。', answer: '分家（各起炉灶）', explanation: '“异爨”即分开烧饭，指家族内部各立门户、分家而居。文中“庭中始为篱，已为墙”正是诸父异爨后血缘疏远、亲情离散的空间写照，是全文家族之悲的枢纽。' },
        { type: 'choice', question: '下列对《项脊轩志》艺术特色理解正确的是？', options: ['雕琢堆砌、辞藻华丽', '即事抒情、以小见大、平淡见深', '全为议论、少有叙事', '借神话寓言说理'], answer: '即事抒情、以小见大、平淡见深', explanation: '归有光以一间书屋、几件琐事写尽家族沧桑与至亲之恸，语言朴素白描，于平淡中蓄积深情，正是唐宋派“即事抒情、以小见大”的风格，而非雕琢华丽或纯议论。' }
      ]
    },

    /* ==================== 第3课 《兰亭集序》 ==================== */
    {
      id: 'xb3-u3-l3',
      cover: 'assets/cover/chinese/xb3-u3-l3.svg',
      name: '《兰亭集序》',
      author: '王羲之',
      chapter: '第三单元 至情至性（中华传统文化经典研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与文体' },
        { type: 'paragraph', text: '王羲之（303—361），字逸少，东晋琅琊临沂人，官至右军将军，世称“王右军”，被尊为“书圣”。《兰亭集序》作于永和九年（353）暮春，是他为兰亭雅集所作的诗集序文，其书法真迹被誉为“天下第一行书”。' },
        { type: 'keypoint', label: '文体·序', text: '“<strong>序</strong>”是放在著作或诗文集前的说明性文字。本书序多交代写作缘起、内容主旨；本文属<strong>书序</strong>，却融叙事、写景、抒情、说理于一炉，由乐转悲再归理，是魏晋抒情小品的杰作。' },
        { type: 'list', items: ['序：诗文集前的说明文字', '本文为书序，兼叙事写景说理', '背景：永和九年兰亭修禊', '价值：文与书双绝，“天下第一行书”'] },
        { type: 'heading', text: '二、原文核心段（节选）' },
        { type: 'poem', text: '永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。\n是日也，天朗气清，惠风和畅。仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也。\n夫人之相与，俯仰一世。或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外。虽趣舍万殊，静躁不同，当其欣于所遇，暂得于己，快然自足，不知老之将至。\n每览昔人兴感之由，若合一契，未尝不临文嗟悼，不能喻之于怀。固知一死生为虚诞，齐彭殇为妄作。后之视今，亦犹今之视昔。悲夫！' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">兰亭雅集·游赏空间</text><path d="M60 180 Q200 100 340 150 T620 90" stroke="#4a7de0" stroke-width="4" fill="none"/><text x="120" y="160" font-size="13" fill="#4a7de0">清流激湍</text><circle cx="340" cy="150" r="22" fill="#7aa05a"/><text x="340" y="154" text-anchor="middle" font-size="12" fill="#fff">曲水</text><text x="500" y="110" font-size="13" fill="#9c4221">崇山峻岭</text><text x="200" y="100" font-size="13" fill="#7aa05a">茂林修竹</text><text x="340" y="210" text-anchor="middle" font-size="13" fill="#555">一觞一咏，畅叙幽情于山水之间</text></svg>', caption: '兰亭之“乐”来自良辰、美景、贤友与畅饮赋诗，天人合一。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '文章由聚会之“乐”，转入对人生“俯仰一世”的感慨，最终落脚于对生死的哲思：“固知一死生为虚诞，齐彭殇为妄作。”王羲之反对庄子“齐物”式的生死等观，主张正视生命有限、珍惜当下。' },
        { type: 'keypoint', label: '核心·死生亦大', text: '王羲之的生死观：他承认<strong>“死生亦大矣”</strong>，认为庄周“一生死、齐彭殇”是<strong>虚诞妄作</strong>。人应正视寿夭之别、珍视有限生命，而非以“齐物”自我安慰。这是东晋玄谈风气中难得的清醒理性。' },
        { type: 'list', items: ['乐：良辰美景、贤集畅饮', '悲：俯仰一世、老之将至', '理：一死生为虚诞、齐彭殇为妄作', '志：后之视今，亦犹今之视昔'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">章法：由乐转悲归理</text><rect x="40" y="80" width="170" height="60" rx="8" fill="#7aa05a"/><text x="125" y="116" text-anchor="middle" font-size="13" fill="#fff">乐（游赏）</text><rect x="255" y="80" width="170" height="60" rx="8" fill="#c08168"/><text x="340" y="116" text-anchor="middle" font-size="13" fill="#fff">悲（人生）</text><rect x="470" y="80" width="170" height="60" rx="8" fill="#9c4221"/><text x="555" y="116" text-anchor="middle" font-size="13" fill="#fff">理（生死）</text><path d="M210 110 L253 110" stroke="#9c4221" stroke-width="3" marker-end="url(#c3a)"/><path d="M425 110 L468 110" stroke="#9c4221" stroke-width="3" marker-end="url(#c3a)"/><text x="340" y="185" text-anchor="middle" font-size="13" fill="#555">乐极生悲，悲而明理，情理交融</text><defs><marker id="c3a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '文章沿“乐—悲—理”三层推进，由景入情、由情及理，章法圆融。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '炼句赏析', text: '“仰观宇宙之大，俯察品类之盛。”<br>一“仰”一“俯”、一“大”一“盛”，<strong>对仗工整而视野开阔</strong>：上穷苍穹、下尽万物，将游目骋怀的畅达写得极具张力。八字之中，既有空间之广，又有生命之盛，是“信可乐也”的注脚。' },
        { type: 'table', headers: ['艺术特色', '例句', '效果'], rows: [['情景交融', '崇山峻岭、清流激湍', '以乐景写雅集之乐'], ['对仗骈散', '仰观宇宙之大…', '句式整饬、气韵流转'], ['由叙入理', '夫人之相与…', '由乐转悲、深化主题'], ['用典明理', '齐彭殇为妄作', '批庄周、立己见']] },
        { type: 'warn', label: '字词·活用', text: '“<strong>一</strong>死生为虚诞，<strong>齐</strong>彭殇为妄作”中“一”“齐”均为<strong>意动用法</strong>：以……为一致、以……为等同。另“修”指长（茂林修竹），“期”指至、约定，“信”指确实（信可乐也），“致”指情趣（所以兴怀，其致一也）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">文言知识（实词·活用）</text><rect x="40" y="60" width="270" height="150" rx="8" fill="#fff" stroke="#cbb89d"/><text x="175" y="86" text-anchor="middle" font-size="14" font-weight="bold" fill="#9c4221">实词</text><text x="60" y="114" font-size="13" fill="#333">修：长</text><text x="60" y="140" font-size="13" fill="#333">期：至、约定</text><text x="60" y="166" font-size="13" fill="#333">信：确实</text><text x="60" y="192" font-size="13" fill="#333">致：情趣</text><rect x="370" y="60" width="270" height="150" rx="8" fill="#fff" stroke="#cbb89d"/><text x="505" y="86" text-anchor="middle" font-size="14" font-weight="bold" fill="#9c4221">词类活用</text><text x="390" y="114" font-size="13" fill="#333">一：以…为一致（意动）</text><text x="390" y="140" font-size="13" fill="#333">齐：以…为等同（意动）</text><text x="390" y="166" font-size="13" fill="#333">流觞：使酒流转（使动）</text><text x="390" y="192" font-size="13" fill="#333">所：所字结构</text></svg>', caption: '重点掌握“一、齐”的意动用法，及“修、期、信、致”等实词。' },
        { type: 'heading', text: '五、文言知识积累' },
        { type: 'paragraph', text: '本文实词须留心：“修”为长，“期”为至、约定，“信”为确实，“致”为情趣；虚词“之”常用于主谓之间取消独立性，“所”构成所字结构。词类活用是难点，尤其“一”“齐”的意动用法，须结合“固知一死生为虚诞”准确理解。' },
        { type: 'list', items: ['实词：修、期、信、致、咸、毕', '虚词：之（取独）、所（所字结构）', '活用：一、齐（意动）；流觞（使动）', '句式：判断、省略、定语后置'] },
        { type: 'tip', label: '学习提示', text: '背诵宜按“叙集会—写乐景—发悲慨—明死生理”四段推进。重点体会“仰观宇宙之大，俯察品类之盛”的开阔，与“一死生为虚诞，齐彭殇为妄作”的理性锋芒。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['王羲之，东晋书圣，《兰亭集序》文墨双绝', '文体：书序，融叙事写景说理', '主旨：死生亦大，批齐物、贵生命', '章法：由乐转悲、由情归理', '文言：实词修期信致、意动一齐全', '价值：魏晋抒情小品、生死哲思典范'] },
        { type: 'reading', text: '延伸思考：王羲之批评庄子“一生死、齐彭殇”是虚诞，主张正视死亡。今天面对“内卷”与虚无，我们应如何像他一样，在认清生命有限后仍热烈地“游目骋怀”？' }
      ],
      exercises: [
        { type: 'choice', question: '《兰亭集序》属于哪一类“序”？', options: ['赠序（送别）', '书序（诗文集前说明）', '宴集序（仅记宴饮）', '战序（军事）'], answer: '书序（诗文集前说明）', explanation: '本文是王羲之在兰亭雅集后为众人所赋诗篇所作的“书序”，旨在说明集会缘起与诗集主旨。它虽兼写宴游，本质仍是书序，不同于专写送别的赠序，故选书序。' },
        { type: 'fill', question: '“仰观宇宙之大，俯察品类之盛”中“盛”意为______，与“大”相对，指万物的繁富。', answer: '繁盛（多）', explanation: '“盛”在此指繁多、繁盛。“俯察品类之盛”即低头看万物的繁富多样。一仰一俯、一大一盛，写出游目骋怀的开阔，是全篇“信可乐也”的写景支点。' },
        { type: 'choice', question: '“固知一死生为虚诞，齐彭殇为妄作”中“一”“齐”的用法是？', options: ['名词作状语', '意动用法（以……为一致/等同）', '使动用法', '普通动词'], answer: '意动用法（以……为一致/等同）', explanation: '“一死生”即“以死生为一致”，“齐彭殇”即“以彭祖与夭折孩童为等同”，均属意动用法。王羲之借此批评庄周齐物论，认为生死寿夭不可混同，故选意动用法。' },
        { type: 'fill', question: '“所以游目骋怀，足以极视听之娱，信可乐也”中“信”意为______（确实、实在）。', answer: '确实（实在）', explanation: '“信”在句中作副词，意为“确实、实在”。“信可乐也”即“实在是快乐啊”，与前面“仰观”“俯察”的开阔游赏相接，收束兰亭雅集之“乐”的描写。' },
        { type: 'choice', question: '下列对《兰亭集序》情感脉络理解正确的是？', options: ['始终欢乐、毫无感慨', '由乐转悲、由情归理', '通篇悲苦、厌弃人生', '只议论生死、不写景物'], answer: '由乐转悲、由情归理', explanation: '文章先写兰亭雅集之乐，再由“俯仰一世”转入人生苦短之悲，最后以“一死生为虚诞”的生死之理作结。乐—悲—理三层递转，情理交融，故选“由乐转悲、由情归理”。' }
      ]
    },

    /* ==================== 第4课 《归去来兮辞并序》 ==================== */
    {
      id: 'xb3-u3-l4',
      cover: 'assets/cover/chinese/xb3-u3-l4.svg',
      name: '《归去来兮辞并序》',
      author: '陶渊明',
      chapter: '第三单元 至情至性（中华传统文化经典研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与文体' },
        { type: 'paragraph', text: '陶渊明（约365—427），名潜，字元亮，东晋浔阳柴桑人，我国第一位田园诗人。他曾任彭泽令，在官八十余日即“不为五斗米折腰”弃官归隐，写下《归去来兮辞》，标志其彻底走向田园。' },
        { type: 'keypoint', label: '文体·辞', text: '“<strong>辞</strong>”是介于<strong>诗与文之间</strong>的一种文体，源于楚辞，多用“兮”字，讲究<strong>铺排、抒情、押韵</strong>，宜于铺写归隐的欣喜与田园的闲适。《归去来兮辞》是辞体抒情赋的代表，骈散结合、音韵流美。' },
        { type: 'list', items: ['辞：诗文言间、多“兮”字', '特点：铺排抒情、宜歌宜诵', '背景：陶渊明辞彭泽令归隐', '精神：不为五斗米折腰'] },
        { type: 'heading', text: '二、原文核心段（节选）' },
        { type: 'poem', text: '归去来兮，田园将芜胡不归？既自以心为形役，奚惆怅而独悲？悟已往之不谏，知来者之可追。实迷途其未远，觉今是而昨非。舟遥遥以轻飏，风飘飘而吹衣。问征夫以前路，恨晨光之熹微。\n乃瞻衡宇，载欣载奔。僮仆欢迎，稚子候门。三径就荒，松菊犹存。携幼入室，有酒盈樽。\n已矣乎！寓形宇内复几时？曷不委心任去留？胡为乎遑遑欲何之？富贵非吾愿，帝乡不可期。怀良辰以孤往，或植杖而耘耔。登东皋以舒啸，临清流而赋诗。聊乘化以归尽，乐夫天命复奚疑！' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">归隐心路：今是昨非</text><circle cx="170" cy="130" r="50" fill="#9c6b2e"/><text x="170" y="126" text-anchor="middle" font-size="13" fill="#fff">昨非</text><text x="170" y="148" text-anchor="middle" font-size="12" fill="#fff">官场羁绊</text><circle cx="510" cy="130" r="50" fill="#7aa05a"/><text x="510" y="126" text-anchor="middle" font-size="13" fill="#fff">今是</text><text x="510" y="148" text-anchor="middle" font-size="12" fill="#fff">田园自由</text><path d="M220 130 L460 130" stroke="#9c4221" stroke-width="3" marker-end="url(#c4a)"/><text x="340" y="115" text-anchor="middle" font-size="13" fill="#5b2c16">觉今是而昨非</text><defs><marker id="c4a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '从“心为形役”的悔，到“今是昨非”的悟，是辞官归隐的内在转折。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '文章抒发了陶渊明对官场的厌恶与对田园的向往。“悟已往之不谏，知来者之可追”“觉今是而昨非”道出他挣脱束缚、回归本真的决绝；“富贵非吾愿，帝乡不可期”更显其安贫乐道、委运乘化的旷达。' },
        { type: 'keypoint', label: '核心·回归本真', text: '陶渊明的归隐不是消极退避，而是<strong>对本真生命的坚守</strong>：他拒绝“心为形役”，选择“<strong>聊乘化以归尽，乐夫天命</strong>”。在功名与自由之间，他宁可清贫也要保全人格独立，这种选择影响了中国文人的精神史。' },
        { type: 'list', items: ['弃官因：不为五斗米折腰', '归隐乐：松菊犹存、稚子候门', '人生观：富贵非愿、乐天知命', '境界：委心任去留、乘化归尽'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">章法：辞归·田园·达观</text><rect x="40" y="80" width="170" height="60" rx="8" fill="#c08168"/><text x="125" y="116" text-anchor="middle" font-size="13" fill="#fff">辞归之决</text><rect x="255" y="80" width="170" height="60" rx="8" fill="#7aa05a"/><text x="340" y="116" text-anchor="middle" font-size="13" fill="#fff">田园之趣</text><rect x="470" y="80" width="170" height="60" rx="8" fill="#9c4221"/><text x="555" y="116" text-anchor="middle" font-size="13" fill="#fff">达观之怀</text><path d="M210 110 L253 110" stroke="#9c4221" stroke-width="3" marker-end="url(#c4b)"/><path d="M425 110 L468 110" stroke="#9c4221" stroke-width="3" marker-end="url(#c4b)"/><text x="340" y="185" text-anchor="middle" font-size="13" fill="#555">由“归”到“居”到“悟”，层层舒展</text><defs><marker id="c4b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '全辞由决意辞归，到田园闲居之趣，终归于乐天知命的旷达。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '名句意境', text: '“舟遥遥以轻飏，风飘飘而吹衣。”<br>“遥遥”“飘飘”叠字<strong>状舟行之轻、衣风之柔</strong>，“以”“而”两个虚词舒缓节奏，写尽弃官上路时如释重负的轻快感。景与心合，归意之喜溢于言外，是辞体“音情相生”的佳句。' },
        { type: 'table', headers: ['艺术特色', '例句', '效果'], rows: [['骈散结合', '归去来兮…觉今是而昨非', '句式错落、抒情流畅'], ['叠字炼句', '遥遥、飘飘、欣欣', '音韵流转、情状如画'], ['借景写心', '风飘飘而吹衣', '以景之轻写心之悦'], ['多用“兮”', '归去来兮', '楚辞遗韵、宜诵宜歌']] },
        { type: 'warn', label: '字词辨析', text: '“悟已往之不<strong>谏</strong>”的“谏”指<strong>挽回、规劝补救</strong>（非进谏）；“知来者之可<strong>追</strong>”的“追”指<strong>补救、追及</strong>；“<strong>征</strong>夫”指行人；“<strong>委</strong>心”指随顺本心。另“奚”“曷”“胡”皆为疑问代词“何”，阅读时需辨明。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">文言知识（实词·虚词）</text><rect x="40" y="60" width="270" height="150" rx="8" fill="#fff" stroke="#cbb89d"/><text x="175" y="86" text-anchor="middle" font-size="14" font-weight="bold" fill="#9c4221">实词</text><text x="60" y="114" font-size="13" fill="#333">谏：挽回</text><text x="60" y="140" font-size="13" fill="#333">追：补救</text><text x="60" y="166" font-size="13" fill="#333">征：行人</text><text x="60" y="192" font-size="13" fill="#333">委：随顺</text><rect x="370" y="60" width="270" height="150" rx="8" fill="#fff" stroke="#cbb89d"/><text x="505" y="86" text-anchor="middle" font-size="14" font-weight="bold" fill="#9c4221">虚词</text><text x="390" y="114" font-size="13" fill="#333">之：取独</text><text x="390" y="140" font-size="13" fill="#333">以：而（连词）</text><text x="390" y="166" font-size="13" fill="#333">而：表修饰</text><text x="390" y="192" font-size="13" fill="#333">奚/曷/胡：何</text></svg>', caption: '重点实词（谏、追、征、委）与虚词（之、以、而）须结合语境掌握。' },
        { type: 'heading', text: '五、文言知识积累' },
        { type: 'paragraph', text: '本文实词：“谏”为挽回，“追”为补救，“征夫”指行人，“委心”指随顺本心；虚词“之”常取消句子独立性，“以”“而”多表修饰或并列。疑问代词“奚、曷、胡”均可译作“何”，是辞体常见的感叹发语方式。' },
        { type: 'list', items: ['实词：谏、追、征、委、芜、熹', '虚词：之（取独）、以/而（修饰）', '疑问词：奚、曷、胡（皆“何”）', '句式：宾语前置（胡为乎遑遑欲何之）'] },
        { type: 'tip', label: '学习提示', text: '背诵可抓住“辞归之喜—居家之乐—田耕之趣—乐天之达”四段。重点品味“舟遥遥以轻飏，风飘飘而吹衣”的轻快，与“聊乘化以归尽，乐夫天命复奚疑”的旷达。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['陶渊明，东晋田园诗鼻祖，不为五斗米折腰', '文体：辞，诗文言间、多“兮”字', '主旨：厌弃官场、回归田园本真', '章法：辞归—居家—达观三层舒展', '文言：实词谏追征委、虚词之以而', '价值：中国隐逸精神与田园美学源头'] },
        { type: 'reading', text: '延伸思考：陶渊明的“归隐”在当代还有意义吗？当“内卷”让人身心俱疲，我们能否像他那样，在责任与自我之间找到一条“觉今是而昨非”的出路？' }
      ],
      exercises: [
        { type: 'choice', question: '“辞”这一文体的特点是？', options: ['纯议论的政论文', '介于诗与文之间、多用兮字、宜于抒情铺排', '只用于皇帝诏令', '现代汉语的散文'], answer: '介于诗与文之间、多用兮字、宜于抒情铺排', explanation: '“辞”源于楚辞，是一种介于诗歌与散文之间的抒情文体，多用“兮”字，讲究铺排、押韵与抒情，宜于表达回归田园的欣喜。其余三项均不符合辞体的定义与用途。' },
        { type: 'fill', question: '“悟已往之不谏，知来者之可追”中“谏”意为______（挽回、补救）。', answer: '挽回（补救）', explanation: '此“谏”不作“进谏”解，而是指“挽回、补救”。“悟已往之不谏”即明白过去的错误已无法挽回，与下句“知来者之可追”（未来尚可补救）相对，表达弃官归隐的醒悟。' },
        { type: 'choice', question: '“舟遥遥以轻飏，风飘飘而吹衣”主要营造了怎样的意境？', options: ['沉重压抑的离愁', '如释重负、轻快欣喜的归意', '战乱流离的惊恐', '寂寞无聊的等待'], answer: '如释重负、轻快欣喜的归意', explanation: '“遥遥”“飘飘”叠字写出舟轻风柔，“以”“而”舒缓节奏，全句状弃官上路时轻松如飞的状态，景与心合一，洋溢挣脱官场束缚后的欣喜，故选轻快欣喜的归意。' },
        { type: 'fill', question: '“聊乘化以归尽，乐夫天命复奚疑”中“乘化”指______（顺随自然变化），“奚”是疑问代词“何”。', answer: '顺随自然（变化）', explanation: '“乘化”即顺应自然的造化与变化，“归尽”指走向生命的终结。全句意为姑且顺其自然了此一生，乐天知命再无疑惑，是陶渊明委运乘化、旷达自适人生态度的总收。' },
        { type: 'choice', question: '《归去来兮辞》的思想核心可概括为？', options: ['积极入世、追求功名', '厌弃官场束缚、坚守本真、乐天知命', '愤世嫉俗、主张复仇', '及时行乐、纵情声色'], answer: '厌弃官场束缚、坚守本真、乐天知命', explanation: '文章以“心为形役”为悔，以“今是昨非”为悟，终以“富贵非吾愿”“乐夫天命”收束，核心是挣脱官场、回归田园本真并安于天命。既非追逐功名，也非纵情声色，故选此项。' }
      ]
    },

    /* ==================== 第5课 《种树郭橐驼传》 ==================== */
    {
      id: 'xb3-u3-l5',
      cover: 'assets/cover/chinese/xb3-u3-l5.svg',
      name: '《种树郭橐驼传》',
      author: '柳宗元',
      chapter: '第三单元 至情至性（中华传统文化经典研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、作者与文体' },
        { type: 'paragraph', text: '柳宗元（773—819），字子厚，唐代河东（今山西永济）人，世称“柳河东”“柳柳州”，与韩愈并称“韩柳”，同为古文运动倡导者。本文是一篇寓言式传记，借种树人之口阐发治民之理。' },
        { type: 'keypoint', label: '文体·寓言式传记', text: '本文名为“传”，实则<strong>寓言之体</strong>：借郭橐驼这一人物<strong>借事说理</strong>，由种树之道引出“<strong>养民如养树</strong>”的为政之理。人物或许虚构，主旨却在针砭中唐官吏“好烦其令”的扰民之弊。' },
        { type: 'list', items: ['传记外壳，寓言内核', '手法：借事说理、托物讽政', '对象：种树者郭橐驼', '主旨：顺民之性、戒繁政扰民'] },
        { type: 'heading', text: '二、原文核心段（节选）' },
        { type: 'poem', text: '郭橐驼，不知始何名。病偻，隆然伏行，有类橐驼者，故乡人号之“驼”。驼闻之曰：“甚善。名我固当。”因舍其名，亦自谓“橐驼”云。\n橐驼非能使木寿且孳也，能顺木之天以致其性焉尔。凡植木之性，其本欲舒，其培欲平，其土欲故，其筑欲密。既然已，勿动勿虑，去不复顾。其莳也若子，其置也若弃，则其天者全而其性得矣。\n他植者则不然，根拳而土易，其培之也，若不过焉则不及。苟有能反是者，则又爱之太恩，忧之太勤，旦视而暮抚，已去而复顾，甚者爪其肤以验其生枯，摇其本以观其疏密，而木之性日以离矣。\n吾问养树，得养人术。然吾居乡，见长人者好烦其令，若甚怜焉，而卒以祸。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">两种种树法·对比</text><rect x="40" y="70" width="270" height="120" rx="8" fill="#7aa05a"/><text x="175" y="100" text-anchor="middle" font-size="14" fill="#fff">郭橐驼·顺天</text><text x="175" y="128" font-size="13" fill="#fff">本舒培平、勿动勿虑</text><text x="175" y="152" font-size="13" fill="#fff">全其天、得其性</text><rect x="370" y="70" width="270" height="120" rx="8" fill="#c0473a"/><text x="505" y="100" text-anchor="middle" font-size="14" fill="#fff">他植者·逆性</text><text x="505" y="128" font-size="13" fill="#fff">根拳土易、爱太恩</text><text x="505" y="152" font-size="13" fill="#fff">旦视暮抚、性日离</text></svg>', caption: '顺木之天者木茂，逆性扰之者木枯——对比即全文说理的支点。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '文章借种树阐明“顺木之天以致其性”的哲理，并由此引申到治民：“吾问养树，得养人术。”柳宗元主张为政应顺应百姓天性、与民休息，反对官吏“好烦其令”、表面爱民实则祸民。' },
        { type: 'keypoint', label: '核心·养民如养树', text: '郭橐驼之道可移于官理：<strong>“顺木之天”即“顺民之性”</strong>。好官应如善种树者，不妄加干扰、不繁令扰民；而“长人者好烦其令”看似“甚怜”，实则“卒以祸”——这是柳宗元对中世纪政令繁苛的尖锐批判。' },
        { type: 'list', items: ['种树理：顺天致性、勿动勿虑', '为官戒：不可好烦其令', '他植者弊：爱太恩、忧太勤', '引申：养民如养树、与民休息'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">由树及人·说理路径</text><rect x="40" y="80" width="170" height="60" rx="8" fill="#7aa05a"/><text x="125" y="116" text-anchor="middle" font-size="13" fill="#fff">种树之道</text><rect x="255" y="80" width="170" height="60" rx="8" fill="#c08168"/><text x="340" y="116" text-anchor="middle" font-size="13" fill="#fff">对比映衬</text><rect x="470" y="80" width="170" height="60" rx="8" fill="#9c4221"/><text x="555" y="116" text-anchor="middle" font-size="13" fill="#fff">养人之术</text><path d="M210 110 L253 110" stroke="#9c4221" stroke-width="3" marker-end="url(#c5a)"/><path d="M425 110 L468 110" stroke="#9c4221" stroke-width="3" marker-end="url(#c5a)"/><text x="340" y="185" text-anchor="middle" font-size="13" fill="#555">托物讽政，由具体到抽象</text><defs><marker id="c5a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '文章以种树为喻体，经对比映衬，最终落脚于“养人术”的治政之谏。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '对比赏析', text: '“他植者则不然……爱之太恩，忧之太勤，旦视而暮抚。”<br>作者以<strong>对比映衬</strong>突现郭橐驼的“顺天”与他植者的“逆性”：前者“其置也若弃”而木茂，后者“旦视暮抚”却“木之性日以离”。<strong>过犹不及</strong>，越“爱”越害，反讽之力尽在其中。' },
        { type: 'table', headers: ['手法', '内容', '作用'], rows: [['借事说理', '以种树喻治民', '深入浅出、讽喻时政'], ['对比映衬', '顺天者茂 vs 爱太恩枯', '突出主旨、强化反讽'], ['人物设置', '畸形驼背的“智者”', '以丑衬智、寓庄于谐'], ['寓言笔法', '传记其名、哲理其实', '亦谐亦严、耐人寻味']] },
        { type: 'warn', label: '字词·活用', text: '“<strong>病</strong>偻”的“病”是<strong>动词，患……病</strong>（驼背）；“<strong>名</strong>我固当”的“名”是<strong>名词作动词，命名</strong>；“<strong>实</strong>”在“不抑耗其实”中指<strong>果实</strong>。另“爪其肤”的“爪”名词作动词“用指甲掐”，是词类活用的典型。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">文言知识（实词·活用·句式）</text><rect x="40" y="60" width="260" height="150" rx="8" fill="#fff" stroke="#cbb89d"/><text x="170" y="86" text-anchor="middle" font-size="14" font-weight="bold" fill="#9c4221">实词·活用</text><text x="60" y="114" font-size="13" fill="#333">病：患（动）</text><text x="60" y="140" font-size="13" fill="#333">名：命名（动）</text><text x="60" y="166" font-size="13" fill="#333">实：果实</text><text x="60" y="192" font-size="13" fill="#333">爪：用指甲掐（动）</text><rect x="360" y="60" width="280" height="150" rx="8" fill="#fff" stroke="#cbb89d"/><text x="500" y="86" text-anchor="middle" font-size="14" font-weight="bold" fill="#9c4221">句式</text><text x="380" y="114" font-size="13" fill="#333">判断：官理非吾业也</text><text x="380" y="140" font-size="13" fill="#333">宾语前置：不知其种</text><text x="380" y="166" font-size="13" fill="#333">被动：卒以祸</text><text x="380" y="192" font-size="13" fill="#333">省略：若甚怜焉</text></svg>', caption: '重点实词（病、名、实、偻）与词类活用（名、爪）、判断被动句式须掌握。' },
        { type: 'heading', text: '五、文言知识积累' },
        { type: 'paragraph', text: '本文实词与活用密集：“病偻”之“病”为动词患（驼背），“名我固当”之“名”作动词命名，“实”指果实，“爪其肤”之“爪”作动词掐。句式上要注意判断句、被动句（卒以祸）与省略句，这些是传记散文的常见考点。' },
        { type: 'list', items: ['实词：病、偻、名、实、蕃、孳', '活用：名（命名）、爪（掐）、忧（形作动）', '句式：判断、被动（卒以祸）、省略', '风格：寓言传记、借事说理'] },
        { type: 'tip', label: '学习提示', text: '读本文要抓“树—人”的类比主线：先懂种树之理（顺天），再移之于官理（养民）。重点背诵“顺木之天以致其性”与“吾问养树，得养人术”两句，体会托物讽政的妙处。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['柳宗元，唐代古文运动主将，寓言式传记', '文体：传其名而寓其理', '主旨：顺木之天、养民如养树', '艺术：借事说理、对比映衬、托物讽政', '文言：实词病名实、活用爪名、判断被动', '价值：中唐政论寓言，戒繁政扰民'] },
        { type: 'reading', text: '延伸思考：柳宗元说“长人者好烦其令，若甚怜焉，而卒以祸”。今天的教育、管理中，是否也有“爱之太恩、忧之太勤”却适得其反的现象？怎样才算“顺其性”？' }
      ],
      exercises: [
        { type: 'choice', question: '《种树郭橐驼传》的文体实质是？', options: ['真实的人物史传', '寓言式传记（借事说理）', '山水游记', '宫廷辞赋'], answer: '寓言式传记（借事说理）', explanation: '本文虽以“传”为名，记述郭橐驼其人，实为寓言：借种树之道阐发“养民如养树”的为政之理，人物多属虚构，主旨在于针砭繁政扰民，故选寓言式传记。' },
        { type: 'fill', question: '“橐驼非能使木寿且孳也，能顺木之天以致其性焉尔”中“致”意为______，指使木性得以充分实现。', answer: '使……达到（实现）', explanation: '“致其性”即“使它的本性得以充分实现、伸展”。“顺木之天以致其性”是全文核心：顺应树木自然生长的规律，不妄加干预，木才能繁茂。这是后文“养人术”的喻体根基。' },
        { type: 'choice', question: '文中“他植者”种树失败的根本原因是？', options: ['肥料不足', '逆木之性、爱之太恩忧之太勤', '气候不适宜', '郭橐驼暗中破坏'], answer: '逆木之性、爱之太恩忧之太勤', explanation: '他植者或“根拳土易”，或“爱之太恩，忧之太勤，旦视而暮抚”，表面呵护实则违背树木天性，致使“木之性日以离矣”。过犹不及，越干预越枯萎，这正是对比要突出的反讽。' },
        { type: 'fill', question: '“吾问养树，得养人术”一句，将种树之理引申到______（填治民/为官之理），主张顺民之性。', answer: '养人（治民/为官）', explanation: '柳宗元由种树悟出“养人术”，即治理百姓也应如善种树般顺应民性、与民休息，不可“好烦其令”。这句是由树及人、托物讽政的枢纽，点明文章的政治寄托。' },
        { type: 'choice', question: '下列对本文主旨理解最准确的是？', options: ['传授种树技术', '借种树讽喻为政应顺民之性、戒繁令扰民', '赞美郭橐驼的驼背', '歌颂唐朝的繁荣'], answer: '借种树讽喻为政应顺民之性、戒繁令扰民', explanation: '文章表面写种树，实则借“顺木之天”类比“顺民之性”，批判官吏“好烦其令”表面爱民、实则祸民。其核心是托物讽政、主张与民休息，而非真的传授农技或歌颂时政。' }
      ]
    },

    /* ==================== 第6课 《石钟山记》 ==================== */
    {
      id: 'xb3-u3-l6',
      cover: 'assets/cover/chinese/xb3-u3-l6.svg',
      name: '《石钟山记》',
      author: '苏轼',
      chapter: '第三单元 至情至性（中华传统文化经典研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、作者与文体' },
        { type: 'paragraph', text: '苏轼（1037—1101），字子瞻，号东坡居士，北宋眉州人，唐宋八大家之一。本文写于元丰七年（1084）他赴任汝州途中，夜泊石钟山实地考察，是一篇融叙事、写景、说理于一体的考辨性游记。' },
        { type: 'keypoint', label: '文体·考辨游记', text: '本文是<strong>游记</strong>，却突出<strong>“考辨”</strong>色彩：不只记游赏，更以实地探查<strong>求证山名由来</strong>。它体现了苏轼<strong>不轻信旧说、重目见耳闻</strong>的求实精神，是宋人“以理入文”的代表作。' },
        { type: 'list', items: ['游记外壳，考辨内核', '精神：重实证、不轻信', '线索：疑—察—断', '风格：叙议结合、由事入理'] },
        { type: 'heading', text: '二、原文核心段（节选）' },
        { type: 'poem', text: '《水经》云：“彭蠡之口有石钟山焉。”郦元以为下临深潭，微风鼓浪，水石相搏，声如洪钟。是说也，人常疑之。今以钟磬置水中，虽大风浪不能鸣也，而况石乎！\n元丰七年六月丁丑，余自齐安舟行适临汝，而长子迈将赴饶之德兴尉，送之至湖口，因得观所谓石钟者。寺僧使小童持斧，于乱石间择其一二扣之，硿硿焉。余固笑而不信也。\n至暮夜月明，独与迈乘小舟，至绝壁下。大石侧立千尺，如猛兽奇鬼，森然欲搏人；而山上栖鹘，闻人声亦惊起，磔磔云霄间；又有若老人咳且笑于山谷中者，或曰此鹳鹤也。\n余方心动欲还，而大声发于水上，噌吰如钟鼓不绝。舟人大恐。徐而察之，则山下皆石穴罅，不知其浅深，微波入焉，涵淡澎湃而为此也。\n事不目见耳闻，而臆断其有无，可乎？郦元之所见闻，殆与余同，而言之不详；士大夫终不肯以小舟夜泊绝壁之下，故莫能知；而渔工水师虽知而不能言。此世所以不传也。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">三种说法·考辨对比</text><rect x="30" y="70" width="190" height="110" rx="8" fill="#e8d9b0"/><text x="125" y="100" text-anchor="middle" font-size="13" fill="#5b2c16">郦道元</text><text x="125" y="128" font-size="12" fill="#5b2c16">水石相搏</text><text x="125" y="150" font-size="12" fill="#5b2c16">言之不详</text><rect x="245" y="70" width="190" height="110" rx="8" fill="#c08168"/><text x="340" y="100" text-anchor="middle" font-size="13" fill="#fff">寺僧/李渤</text><text x="340" y="128" font-size="12" fill="#fff">扣石发声</text><text x="340" y="150" font-size="12" fill="#fff">浅陋可笑</text><rect x="460" y="70" width="190" height="110" rx="8" fill="#7aa05a"/><text x="555" y="100" text-anchor="middle" font-size="13" fill="#fff">苏轼亲察</text><text x="555" y="128" font-size="12" fill="#fff">石穴涵淡</text><text x="555" y="150" font-size="12" fill="#fff">得其真</text></svg>', caption: '郦说、僧说皆未的，唯苏轼夜泊亲察，方得山名之实。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '文章借考察石钟山命名之由，阐发“事不目见耳闻，而臆断其有无，可乎”的求实主张。苏轼以自身探查证明：真相须靠亲历实证，不可盲从旧说或囿于士大夫的疏懒。' },
        { type: 'keypoint', label: '核心·实践精神', text: '“<strong>事不目见耳闻，而臆断其有无，可乎？</strong>”是全文的<strong>文眼</strong>。郦元“言之不详”、士大夫“不肯夜泊”、渔工“虽知不能言”，皆使真相不传；唯作者亲乘小舟、实地考察，方得其真。这是<strong>重实证、破臆断</strong>的科学态度。' },
        { type: 'list', items: ['疑：旧说（郦、僧）皆不可信', '察：夜泊绝壁、亲闻其声', '断：石穴涵淡澎湃成声', '理：目见耳闻，勿臆断'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">行文脉络：疑—察—断</text><rect x="40" y="80" width="170" height="60" rx="8" fill="#e8d9b0"/><text x="125" y="116" text-anchor="middle" font-size="13" fill="#5b2c16">疑（旧说）</text><rect x="255" y="80" width="170" height="60" rx="8" fill="#c08168"/><text x="340" y="116" text-anchor="middle" font-size="13" fill="#fff">察（亲历）</text><rect x="470" y="80" width="170" height="60" rx="8" fill="#9c4221"/><text x="555" y="116" text-anchor="middle" font-size="13" fill="#fff">断（得理）</text><path d="M210 110 L253 110" stroke="#9c4221" stroke-width="3" marker-end="url(#c6a)"/><path d="M425 110 L468 110" stroke="#9c4221" stroke-width="3" marker-end="url(#c6a)"/><text x="340" y="185" text-anchor="middle" font-size="13" fill="#555">由叙事之疑，到亲察之实，终入说理之断</text><defs><marker id="c6a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '文章沿“疑—察—断”推进，叙议结合，由事入理，结构缜密。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '夜察写景', text: '“大石侧立千尺，如猛兽奇鬼，森然欲搏人。”<br>作者以<strong>比喻与夸张</strong>写绝壁阴森：月下巨石如猛兽奇鬼扑面，鹘鸣磔磔、鹳鹤如老人咳笑，营造出惊悚幽怪之境。写景越恐怖，越衬其<strong>亲历求证的勇气</strong>，叙事与说理在此交融。' },
        { type: 'table', headers: ['艺术手法', '内容', '效果'], rows: [['叙议结合', '记游中穿插议论', '由事入理、自然有力'], ['比喻夸张', '大石如猛兽奇鬼', '烘托夜察之险与勇'], ['对比映衬', '郦、僧、士夫 vs 苏轼', '突出亲历实证之贵'], ['反问点睛', '事不目见耳闻…可乎', '文眼振起、发人深省']] },
        { type: 'warn', label: '字词辨析', text: '“微风<strong>鼓</strong>浪”的“鼓”是<strong>动词，振动、鼓动</strong>（非名词）；“<strong>是</strong>说也”的“是”为<strong>指示代词“这”</strong>；“<strong>固</strong>笑而不信”的“固”是<strong>副词“本来、仍”</strong>；“<strong>考</strong>”指考察。另“罅（xià）”指裂缝，易误读。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">文言知识（实词·虚词）</text><rect x="40" y="60" width="270" height="150" rx="8" fill="#fff" stroke="#cbb89d"/><text x="175" y="86" text-anchor="middle" font-size="14" font-weight="bold" fill="#9c4221">实词</text><text x="60" y="114" font-size="13" fill="#333">鼓：振动</text><text x="60" y="140" font-size="13" fill="#333">是：这（代）</text><text x="60" y="166" font-size="13" fill="#333">固：本来</text><text x="60" y="192" font-size="13" fill="#333">考：考察</text><rect x="370" y="60" width="270" height="150" rx="8" fill="#fff" stroke="#cbb89d"/><text x="505" y="86" text-anchor="middle" font-size="14" font-weight="bold" fill="#9c4221">虚词</text><text x="390" y="114" font-size="13" fill="#333">于：在、向</text><text x="390" y="140" font-size="13" fill="#333">而：表转折/顺承</text><text x="390" y="166" font-size="13" fill="#333">之：助词、取独</text><text x="390" y="192" font-size="13" fill="#333">以：把、因</text></svg>', caption: '重点实词（鼓、是、固、考）与虚词（于、而、之、以）须结合语境理解。' },
        { type: 'heading', text: '五、写作任务衔接' },
        { type: 'keypoint', label: '说真话·抒真情', text: '本单元写作任务为“<strong>说真话，抒真情</strong>”。苏轼此文正是一例：他不盲从权威、不臆断有无，以<strong>亲历实证</strong>求得真相，又以<strong>真诚负责</strong>的笔触记录与议论。写作亦当如此——真诚地观察、负责任地表达，方能动人。' },
        { type: 'paragraph', text: '由《石钟山记》可见：好的文章既要有“求实”的态度（不臆断），也要有“真情”的底色（不虚伪）。将亲身所见所闻化为文字，比拾人牙慧的空论更有力量，这正是“说真话，抒真情”的题中应有之义。' },
        { type: 'list', items: ['实词：鼓、是、固、考、适、诣', '虚词：于（在）、而（转/承）、以（把）', '句式：判断、反问、省略', '写法：叙议结合、由事入理、亲历实证', '写作：说真话、抒真情、负责任表达'] },
        { type: 'tip', label: '学习提示', text: '读本文可按“疑旧说—夜亲察—得结论”三步。重点背诵“事不目见耳闻，而臆断其有无，可乎”，并体会苏轼将求实精神化为优美游记的功力；写作时可学其“以亲历代空谈”。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['苏轼，北宋大家，《石钟山记》为考辨游记', '线索：疑旧说—夜亲察—断其理', '主旨：事不目见耳闻不可臆断', '艺术：叙议结合、由事入理、比喻夸张', '文言：实词鼓是固考、虚词于而以', '写作：说真话抒真情、亲历方得真'] },
        { type: 'reading', text: '延伸思考：苏轼强调“目见耳闻”的实证，而今天信息爆炸，我们更易被“据说”“网传”带偏。在自媒体时代，如何像苏轼夜泊绝壁那样，亲自去求证一条信息的真伪？' }
      ],
      exercises: [
        { type: 'choice', question: '《石钟山记》最突出的文体特征是？', options: ['纯写景的山水游记', '考辨性游记（叙议结合、重实证）', '抒情小赋', '政论奏疏'], answer: '考辨性游记（叙议结合、重实证）', explanation: '本文虽为游记，却以考察山名由来为主线，融叙事、写景、说理于一炉，突出“不轻信旧说、重目见耳闻”的考辨精神，是宋人游记“以理入文”的代表，故选考辨性游记。' },
        { type: 'fill', question: '“微风鼓浪，水石相搏”中“鼓”用作动词，意为______（振动、鼓动）。', answer: '振动（鼓动）', explanation: '“鼓”本为名词鼓，此处带宾语“浪”，作动词“振动、鼓动”解。“微风鼓浪”即微风鼓动波浪，写水石相击成声的情态，是郦道元对石钟山命名由来的解释，也是苏轼考辨的对象。' },
        { type: 'choice', question: '“事不目见耳闻，而臆断其有无，可乎”表达的核心理念是？', options: ['凡事应凭想象推测', '重实证、不臆断的求实精神', '服从权威旧说', '写作可以虚构事实'], answer: '重实证、不臆断的求实精神', explanation: '这句话是全文文眼，意为凡事不亲自看、亲耳听就主观推断其有无，怎么可以？苏轼借此强调真相须靠亲历实证，反对盲从与臆测，体现的是严谨求实的治学态度。' },
        { type: 'fill', question: '“是说也，人常疑之”中“是”是指示代词，意为______（这），指代郦道元的说法。', answer: '这（此）', explanation: '“是”在文言中常作指示代词“这、此”。“是说也”即“这种说法（郦道元水石相搏声如洪钟之说）”，下文“人常疑之”点出旧说可疑，引出作者亲赴石钟山考察的行动。' },
        { type: 'choice', question: '本文对“士大夫”与“渔工水师”的态度暗含了什么批评？', options: ['称赞士大夫博学', '指士大夫不肯亲察、渔工虽知不能言，皆致真相不传', '认为渔工全错', '主张废除考察'], answer: '指士大夫不肯亲察、渔工虽知不能言，皆致真相不传', explanation: '作者指出：士大夫“终不肯以小舟夜泊绝壁之下”故莫能知，渔工水师“虽知而不能言”亦使真相失传。两者一懒一拙，皆令实理不彰，唯有亲历且能言者（如苏轼）方得其真，暗含对疏懒与失语的双重批评。' }
      ]
    }

  );
})();
