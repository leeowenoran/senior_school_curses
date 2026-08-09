(function () {
  var v = gzGetVolume('chinese', 'xb3');
  if (!v) return;
  v.points.push(

    /* ===================== 第一单元 诗的国度 ===================== */

    { id: 'xb3-u1-l1',    cover: 'assets/cover/chinese/xb3-u1-l1.svg',
    name: '《氓》', author: '《诗经·卫风》', chapter: '第一单元 诗的国度（中华传统文化经典研习）', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作品与时代背景' },
        { type: 'paragraph', text: '《氓》选自《诗经·卫风》，是《诗经》中著名的弃妇诗。诗以一位女子自述的口吻，叙述了她从恋爱、结婚到被抛弃、最终决绝的完整经历，塑造了中国文学史上最早的弃妇形象之一。' },
        { type: 'keypoint', label: '《诗经》常识', text: '《诗经》是我国<strong>最早的诗歌总集</strong>，收录西周初年至春秋中叶诗歌 305 篇，又称“诗三百”。按音乐分为<strong>风、雅、颂</strong>三类；表现手法为<strong>赋、比、兴</strong>，合称“六义”。<br>《卫风》属“十五国风”之一，多反映卫地民情。' },
        { type: 'list', items: ['风：各地民歌，共 160 篇，最具文学价值', '雅：朝廷正乐，分大雅、小雅，共 105 篇', '颂：宗庙祭祀乐歌，共 40 篇', '赋：直陈其事；比：比喻；兴：先言他物以引起所咏之词'] },
        { type: 'heading', text: '二、原诗（全文）' },
        { type: 'poem', text: '氓之蚩蚩，抱布贸丝。匪来贸丝，来即我谋。送子涉淇，至于顿丘。匪我愆期，子无良媒。将子无怒，秋以为期。\n乘彼垝垣，以望复关。不见复关，泣涕涟涟。既见复关，载笑载言。尔卜尔筮，体无咎言。以尔车来，以我贿迁。\n桑之未落，其叶沃若。于嗟鸠兮，无食桑葚！于嗟女兮，无与士耽！士之耽兮，犹可说也。女之耽兮，不可说也。\n桑之落矣，其黄而陨。自我徂尔，三岁食贫。淇水汤汤，渐车帷裳。女也不爽，士贰其行。士也罔极，二三其德。\n三岁为妇，靡室劳矣。夙兴夜寐，靡有朝矣。言既遂矣，至于暴矣。兄弟不知，咥其笑矣。静言思之，躬自悼矣。\n及尔偕老，老使我怨。淇则有岸，隰则有泮。总角之宴，言笑晏晏。信誓旦旦，不思其反。反是不思，亦已焉哉！' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="28" text-anchor="middle" font-size="18" font-weight="bold" fill="#9c4221">《诗经》六义</text><rect x="40" y="60" width="270" height="150" rx="10" fill="#fff" stroke="#cbb89d"/><text x="175" y="90" text-anchor="middle" font-size="15" font-weight="bold" fill="#9c4221">内容分类（音乐）</text><text x="60" y="120" font-size="14" fill="#333">风：各地民歌（160篇）</text><text x="60" y="148" font-size="14" fill="#333">雅：朝廷正乐（105篇）</text><text x="60" y="176" font-size="14" fill="#333">颂：宗庙祭祀（40篇）</text><rect x="370" y="60" width="270" height="150" rx="10" fill="#fff" stroke="#cbb89d"/><text x="505" y="90" text-anchor="middle" font-size="15" font-weight="bold" fill="#9c4221">表现手法</text><text x="390" y="120" font-size="14" fill="#333">赋：直陈其事</text><text x="390" y="148" font-size="14" fill="#333">比：比喻</text><text x="390" y="176" font-size="14" fill="#333">兴：起兴引情</text></svg>', caption: '《诗经》“六义”：风雅颂为音乐分类，赋比兴为表现手法。' },
        { type: 'heading', text: '三、人物形象与情感脉络' },
        { type: 'paragraph', text: '女主人公的情感经历可分为三个阶段，诗中通过“桑叶”的比兴意象对应其命运变化，结构清晰而富有感染力。' },
        { type: 'list', items: ['恋爱期：痴情、温柔，送氓涉淇、望复关泣涕', '婚后期：勤劳持家（“夙兴夜寐”），却遭“士贰其行”', '决绝期：清醒刚烈，以“亦已焉哉”收束，断然告别'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">女主人公情感三阶段</text><circle cx="120" cy="130" r="48" fill="#e8b4a0"/><text x="120" y="126" text-anchor="middle" font-size="14" fill="#5b2c16">恋爱</text><text x="120" y="146" text-anchor="middle" font-size="12" fill="#5b2c16">痴情温柔</text><circle cx="340" cy="130" r="48" fill="#d99a86"/><text x="340" y="126" text-anchor="middle" font-size="14" fill="#5b2c16">婚变</text><text x="340" y="146" text-anchor="middle" font-size="12" fill="#5b2c16">勤劳被弃</text><circle cx="560" cy="130" r="48" fill="#9c4221"/><text x="560" y="126" text-anchor="middle" font-size="14" fill="#fff">决绝</text><text x="560" y="146" text-anchor="middle" font-size="12" fill="#fff">清醒刚烈</text><path d="M168 130 L292 130" stroke="#9c4221" stroke-width="3" marker-end="url(#a)"/><path d="M388 130 L512 130" stroke="#9c4221" stroke-width="3" marker-end="url(#a)"/><defs><marker id="a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '情感脉络：恋爱—婚变—决绝，体现女主人公从柔弱到觉醒的成长。' },
        { type: 'keypoint', label: '比兴手法', text: '诗以“桑之未落，其叶沃若”起兴，比喻女子年轻美貌；以“桑之落矣，其黄而陨”比喻容颜衰老、命运凋零。这是<strong>《诗经》典型的“兴而比”</strong>手法，借自然物象暗示人事。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">比兴：桑叶喻女子命运</text><circle cx="180" cy="130" r="50" fill="#7aa05a"/><text x="180" y="126" text-anchor="middle" font-size="13" fill="#fff">沃若</text><text x="180" y="148" text-anchor="middle" font-size="12" fill="#fff">青春貌美</text><circle cx="500" cy="130" r="50" fill="#a8632e"/><text x="500" y="126" text-anchor="middle" font-size="13" fill="#fff">黄陨</text><text x="500" y="148" text-anchor="middle" font-size="12" fill="#fff">衰老被弃</text><path d="M230 130 L450 130" stroke="#9c4221" stroke-width="3" marker-end="url(#c)"/><text x="340" y="190" text-anchor="middle" font-size="13" fill="#555">以桑叶荣枯起兴兼比喻</text><defs><marker id="c" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '“桑之未落/其黄而陨”以桑叶荣枯起兴，兼喻女子容貌与命运的由盛转衰。' },
        { type: 'heading', text: '四、艺术特色与名句赏析' },
        { type: 'example', label: '名句赏析', text: '“淇则有岸，隰则有泮。”<br>运用<strong>反比</strong>：连淇水、洼地都有边际，而自己的愁苦与悔恨却无边无际。以景物的“有岸”反衬情感的“无涯”，将弃妇的悲愤推向高潮，也为后文“亦已焉哉”的决绝蓄势。' },
        { type: 'table', headers: ['手法', '例句', '表达效果'], rows: [['比兴', '桑之未落/其黄而陨', '以桑叶喻女子容貌与命运，自然贴切'], ['对比', '女也不爽 / 士贰其行', '突出男子负心，强化批判'], ['呼告', '及尔偕老，老使我怨', '直抒胸臆，情感强烈']] },
        { type: 'warn', label: '易错字', text: '“于嗟鸠兮”的“于”通“吁”，表叹息；“说”通“脱”（“犹可说也”意为可以解脱）；“泮”通“畔”（“隰则有泮”指低湿之地有边界）。这些<strong>通假字</strong>是文言考查重点。' },
        { type: 'tip', label: '学习提示', text: '背诵全诗是本课基本要求。可借助“恋爱—婚变—决绝”三阶段提纲记忆，重点把握“桑叶”比兴与“亦已焉哉”的决绝语气。' },
        { type: 'heading', text: '五、思想内涵' },
        { type: 'paragraph', text: '《氓》不仅是一首个人悲剧的挽歌，更反映了西周至春秋时期女性在社会与婚姻中的弱势地位。女主人公最终“反是不思，亦已焉哉”的果断，闪耀着古代女性自我觉醒的光芒。' },
        { type: 'reading', text: '延伸思考：诗中“士之耽兮，犹可说也；女之耽兮，不可说也”揭示了何种性别差异？这种差异在当下是否仍有回响？' }
      ],
      exercises: [
        { type: 'choice', question: '《氓》中“桑之未落，其叶沃若”运用的表现手法是？', options: ['赋', '比', '兴（兼比）', '对偶'], answer: '兴（兼比）', explanation: '这两句先用桑叶繁茂起兴，引出下文对女子青春貌美的描写，同时桑叶的“沃若”又比喻女子年轻美貌，属于“兴而比”的手法，是《诗经》典型的艺术特征，故应选“兴（兼比）”。' },
        { type: 'fill', question: '《诗经》按音乐内容分为风、雅、颂三类，其表现手法“六义”中“赋、比、__”三者合称。', answer: '兴', explanation: '《诗经》的“六义”包括按内容分类的风、雅、颂和按表现手法分类的赋、比、兴。题干已列出赋与比，所缺的第三种表现手法即为“兴”，指先言他物以引起所咏之词。' },
        { type: 'choice', question: '下列对“女也不爽，士贰其行”理解正确的一项是？', options: ['女子心情不舒畅', '女子没有过错，男子行为不专一', '女子做事不爽快', '女子与男子感情不和'], answer: '女子没有过错，男子行为不专一', explanation: '“爽”在这里是“差错、过失”的意思，“贰其行”指男子的行为前后不一、心怀二意。全句意为女子并没有过错，是男子变心负心，突出弃妇的无辜，故选此解。' },
        { type: 'fill', question: '“于嗟女兮，无与士耽”中“耽”意为__，即沉溺于爱情。', answer: '沉溺（迷恋）', explanation: '“耽”在句中意为沉溺、迷恋。“无与士耽”是女子以斑鸠贪食桑葚起兴，劝诫女子不要沉溺于男子的爱情，因为男子沉溺尚可解脱，女子沉溺则难以自拔。' },
        { type: 'choice', question: '《氓》结尾“反是不思，亦已焉哉”表现了女主人公怎样的态度？', options: ['犹豫不决', '对旧情依依不舍', '清醒决绝、果断告别', '向男子求和'], answer: '清醒决绝、果断告别', explanation: '“反是不思”指男子背弃誓言毫不思念，“亦已焉哉”意为“也就算了吧”。这两句表明女主人公认清现实后不再留恋，果断结束这段婚姻，体现了古代女性难得的觉醒与刚烈，故选清醒决绝。' }
      ]
    },

    { id: 'xb3-u1-l2',    cover: 'assets/cover/chinese/xb3-u1-l2.svg',
    name: '《离骚》（节选）', author: '屈原', chapter: '第一单元 诗的国度（中华传统文化经典研习）', difficulty: '较难',
      content: [
        { type: 'heading', text: '一、作者与文体' },
        { type: 'paragraph', text: '屈原（约前340—前278），名平，字原，战国末期楚国人，我国第一位伟大的浪漫主义爱国诗人。《离骚》是楚辞的代表作，开创“骚体”，对后世文学影响深远。' },
        { type: 'keypoint', label: '楚辞与骚体', text: '“楚辞”是产生于楚国的一种新诗体，句式长短参差，多用“兮”字，富有南方楚地巫风色彩。《离骚》是其典范，故后世称这种诗体为<strong>“骚体”</strong>，与《诗经》的“风”并称“风骚”。' },
        { type: 'list', items: ['句式：以六言为主，间以七言，常带“兮”字', '语言：瑰丽奇崛，大量神话意象', '精神：忠君爱国、追求理想、九死不悔'] },
        { type: 'heading', text: '二、原诗（节选）' },
        { type: 'poem', text: '长太息以掩涕兮，哀民生之多艰。余虽好修姱以鞿羁兮，謇朝谇而夕替。既替余以蕙纕兮，又申之以揽茝。亦余心之所善兮，虽九死其犹未悔。\n怨灵修之浩荡兮，终不察夫民心。众女嫉余之蛾眉兮，谣诼谓余以善淫。固时俗之工巧兮，偭规矩而改错。背绳墨以追曲兮，竞周容以为度。\n忳郁邑余侘傺兮，吾独穷困乎此时也。宁溘死以流亡兮，余不忍为此态也！鸷鸟之不群兮，自前世而固然。何方圜之能周兮，夫孰异道而相安？\n屈心而抑志兮，忍尤而攘诟。伏清白以死直兮，固前圣之所厚。\n悔相道之不察兮，延伫乎吾将反。回朕车以复路兮，及行迷之未远。步余马于兰皋兮，驰椒丘且焉止息。进不入以离尤兮，退将复修吾初服。\n制芰荷以为衣兮，集芙蓉以为裳。不吾知其亦已兮，苟余情其信芳。高余冠之岌岌兮，长余佩之陆离。芳与泽其杂糅兮，唯昭质其犹未亏。\n忽反顾以游目兮，将往观乎四荒。佩缤纷其繁饰兮，芳菲菲其弥章。民生各有所乐兮，余独好修以为常。虽体解吾犹未变兮，岂余心之可惩？' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">香草美人象征体系</text><circle cx="340" cy="120" r="46" fill="#9c4221"/><text x="340" y="116" text-anchor="middle" font-size="14" fill="#fff">诗人自我</text><text x="340" y="136" text-anchor="middle" font-size="12" fill="#fff">高洁人格</text><circle cx="120" cy="70" r="34" fill="#7aa05a"/><text x="120" y="74" text-anchor="middle" font-size="12" fill="#fff">兰芷</text><circle cx="120" cy="180" r="34" fill="#7aa05a"/><text x="120" y="184" text-anchor="middle" font-size="12" fill="#fff">芙蓉</text><circle cx="560" cy="70" r="34" fill="#c0473a"/><text x="560" y="74" text-anchor="middle" font-size="12" fill="#fff">谗佞</text><circle cx="560" cy="180" r="34" fill="#c0473a"/><text x="560" y="184" text-anchor="middle" font-size="12" fill="#fff">昏君</text><path d="M166 90 L294 108" stroke="#9c4221" stroke-width="2"/><path d="M166 160 L294 132" stroke="#9c4221" stroke-width="2"/><path d="M514 90 L386 108" stroke="#c0473a" stroke-width="2" stroke-dasharray="4"/><path d="M514 160 L386 132" stroke="#c0473a" stroke-width="2" stroke-dasharray="4"/></svg>', caption: '“香草”喻高洁品格，“美人”自喻，构成屈原独特的象征抒情系统。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '节选部分集中展现了屈原对内政腐败的痛心、对楚王不察的怨愤，以及“亦余心之所善兮，虽九死其犹未悔”的坚定操守。' },
        { type: 'keypoint', label: '核心精神', text: '“<strong>虽九死其犹未悔</strong>”“<strong>虽体解吾犹未变兮，岂余心之可惩</strong>”——无论遭遇多少挫折甚至死亡，诗人追求美政、坚守高洁的理想绝不动摇。这是《离骚》最动人的精神内核。' },
        { type: 'list', items: ['忠君爱国：哀民生之多艰，怨灵修之浩荡', '追求理想：好修以为常，九死而不悔', '独立不迁：鸷鸟不群，方圜不能周'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">骚体诗特征</text><rect x="60" y="60" width="160" height="55" rx="8" fill="#9c4221"/><text x="140" y="92" text-anchor="middle" font-size="13" fill="#fff">句式参差错落</text><rect x="260" y="60" width="160" height="55" rx="8" fill="#c08168"/><text x="340" y="92" text-anchor="middle" font-size="13" fill="#fff">多用“兮”字</text><rect x="460" y="60" width="160" height="55" rx="8" fill="#7aa05a"/><text x="540" y="92" text-anchor="middle" font-size="13" fill="#fff">神话想象</text><rect x="160" y="140" width="360" height="55" rx="8" fill="#e8d9b0"/><text x="340" y="172" text-anchor="middle" font-size="13" fill="#5b2c16">浪漫主义：忠君爱国、九死不悔</text></svg>', caption: '骚体诗在句式、语助词与想象方式上均不同于《诗经》，开浪漫主义先河。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '手法赏析', text: '“制芰荷以为衣兮，集芙蓉以为裳。”<br>诗人以荷叶、荷花为衣裳，是<strong>香草美人</strong>象征的典型：外在的“衣饰”实指内在的“修能”与高洁。明明“不吾知其亦已兮”，仍“苟余情其信芳”，将抽象操守化为可感意象。' },
        { type: 'table', headers: ['诗句', '手法', '意蕴'], rows: [['长太息以掩涕兮', '直抒胸臆', '忧国忧民之深'], ['众女嫉余之蛾眉', '比喻（美人自喻）', '遭谗被妒'], ['鸷鸟之不群', '比喻', '独立不迁之志']] },
        { type: 'warn', label: '通假与异义', text: '“鞿羁”指束缚、约束；“謇”是句首发语词；“偭规矩而改错”中“错”通“措”（措施）；“圜”通“圆”。阅读时需结合注释准确理解这些楚辞特有语汇。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">情感脉络</text><rect x="50" y="100" width="130" height="50" rx="8" fill="#7aa05a"/><text x="115" y="130" text-anchor="middle" font-size="12" fill="#fff">忧国遭谗</text><rect x="200" y="100" width="130" height="50" rx="8" fill="#c08168"/><text x="265" y="130" text-anchor="middle" font-size="12" fill="#fff">誓死守志</text><rect x="350" y="100" width="130" height="50" rx="8" fill="#a8632e"/><text x="415" y="130" text-anchor="middle" font-size="12" fill="#fff">悔返修服</text><rect x="500" y="100" width="130" height="50" rx="8" fill="#9c4221"/><text x="565" y="130" text-anchor="middle" font-size="12" fill="#fff">不渝初衷</text><path d="M180 125 L198 125" stroke="#9c4221" stroke-width="3"/><path d="M330 125 L348 125" stroke="#9c4221" stroke-width="3"/><path d="M480 125 L498 125" stroke="#9c4221" stroke-width="3"/></svg>', caption: '情感由忧国遭谗，经誓死、悔返，终归于“好修以为常”的坚定不渝。' },
        { type: 'tip', label: '背诵建议', text: '节选篇幅较长，可按“述志—遭谗—誓死—悔返—修服—不渝”六层逻辑分段记忆，重点背诵“虽九死其犹未悔”“虽体解吾犹未变兮”等名句。' },
        { type: 'heading', text: '五、文学地位' },
        { type: 'paragraph', text: '《离骚》开创了个人抒情长诗的先河，其浪漫主义精神和“香草美人”传统，深刻影响了李白、李商隐等后世诗人，是中国诗歌史上的一座丰碑。' },
        { type: 'reading', text: '延伸：将《离骚》与《诗经·氓》对读，一为集体歌唱中的弃妇自诉，一为士大夫个体的政治抒情，可见先秦诗歌从“群”到“我”的抒情主体演变。' }
      ],
      exercises: [
        { type: 'choice', question: '“亦余心之所善兮，虽九死其犹未悔”主要表现了屈原怎样的精神？', options: ['及时行乐', '追求理想、九死不悔', '消极避世', '儿女情长'], answer: '追求理想、九死不悔', explanation: '这句话意为只要是我心中所向往的善道，即使死上九次也绝不后悔，集中体现了屈原对美政理想执着追求、虽遭打击而矢志不渝的坚定操守，故选“追求理想、九死不悔”。' },
        { type: 'fill', question: '《楚辞》代表作《离骚》开创的诗体被称为“__体”，与《诗经》的“风”并称“风骚”。', answer: '骚', explanation: '《离骚》是楚辞的典范之作，因其深远影响，后世将这种产生于楚国、多用“兮”字、句式参差的诗体称为“骚体”，《诗经》之“风”与楚辞之“骚”合称“风骚”，代指文学传统。' },
        { type: 'choice', question: '下列对《离骚》艺术特色表述有误的一项是？', options: ['多用“兮”字', '香草美人象征手法', '现实主义写实风格', '神话想象丰富'], answer: '现实主义写实风格', explanation: '《离骚》以瑰丽的神话、奇崛的想象和香草美人的象征著称，属于浪漫主义而非现实主义。其余三项均为其正确艺术特征，故“现实主义写实风格”表述有误。' },
        { type: 'fill', question: '“偭规矩而改错”中“错”通“__”，意为措施、法度。', answer: '措', explanation: '在楚辞语汇中“错”是“措”的通假字，意为措施、安排。“偭规矩而改错”指违背准绳、改变法度，形容世俗之人投机取巧、不守正道。' },
        { type: 'choice', question: '“鸷鸟之不群兮，自前世而固然”运用的修辞手法是？', options: ['夸张', '比喻', '借代', '对偶'], answer: '比喻', explanation: '诗人以猛禽（“鸷鸟”）自比，说明自己如同猛禽不与凡鸟同群一样，与世俗小人志趣不合、绝不同流合污，是以物自喻的比喻手法，突出独立不迁的品格。' }
      ]
    },

    { id: 'xb3-u1-l3',    cover: 'assets/cover/chinese/xb3-u1-l3.svg',
    name: '《孔雀东南飞并序》', author: '汉乐府', chapter: '第一单元 诗的国度（中华传统文化经典研习）', difficulty: '较难',
      content: [
        { type: 'heading', text: '一、体裁与背景' },
        { type: 'paragraph', text: '《孔雀东南飞》是汉乐府民歌中最杰出的长篇叙事诗，与《木兰诗》并称“乐府双璧”。诗前有小序，交代了故事发生于“建安中”的庐江府，男女主角因封建家长干涉而双双殉情。' },
        { type: 'keypoint', label: '汉乐府常识', text: '“乐府”原指汉代掌管音乐的官署，后称其采集、配乐的诗歌为“乐府诗”。汉乐府多“<strong>感于哀乐，缘事而发</strong>”，叙事性强，语言质朴，代表作有《陌上桑》《孔雀东南飞》等。' },
        { type: 'list', items: ['叙事诗：有情节、人物、对话，宛如微型戏剧', '对话推动：大量人物对话刻画性格', '起兴开局：“孔雀东南飞，五里一徘徊”'] },
        { type: 'heading', text: '二、原诗（节选）' },
        { type: 'poem', text: '孔雀东南飞，五里一徘徊。\n“十三能织素，十四学裁衣，十五弹箜篌，十六诵诗书。十七为君妇，心中常苦悲。君既为府吏，守节情不移。贱妾留空房，相见常日稀。鸡鸣入机织，夜夜不得息。三日断五匹，大人故嫌迟。非为织作迟，君家妇难为！妾不堪驱使，徒留无所施。便可白公姥，及时相遣归。”\n府吏闻之，堂上启阿母：“儿已薄禄相，幸复得此妇。结发同枕席，黄泉共为友。共事二三年，始尔未为久。女行无偏斜，何意致不厚？”\n阿母谓府吏：“何乃太区区！此妇无礼节，举动自专由。吾意久怀忿，汝岂得自由！东家有贤女，自名秦罗敷。可怜体无比，阿母为汝求。便可速遣之，遣去慎莫留！”\n……（中略：夫妻誓别、兰芝抗婚、兄长逼嫁）……\n“君当作磐石，妾当作蒲苇。蒲苇纫如丝，磐石无转移。”\n……（府吏闻变，自挂东南枝）……\n两家求合葬，合葬华山傍。东西植松柏，左右种梧桐。枝枝相覆盖，叶叶相交通。中有双飞鸟，自名为鸳鸯。仰头相向鸣，夜夜达五更。行人驻足听，寡妇起彷徨。多谢后世人，戒之慎勿忘。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">情节结构</text><rect x="40" y="70" width="130" height="60" rx="8" fill="#e8b4a0"/><text x="105" y="96" text-anchor="middle" font-size="13" fill="#5b2c16">起：兰芝被遣</text><rect x="190" y="70" width="130" height="60" rx="8" fill="#d99a86"/><text x="255" y="96" text-anchor="middle" font-size="13" fill="#5b2c16">承：夫妻誓别</text><rect x="340" y="70" width="130" height="60" rx="8" fill="#c08168"/><text x="405" y="96" text-anchor="middle" font-size="13" fill="#fff">转：兄逼再嫁</text><rect x="490" y="70" width="130" height="60" rx="8" fill="#9c4221"/><text x="555" y="96" text-anchor="middle" font-size="13" fill="#fff">合：双双殉情</text><path d="M170 100 L188 100" stroke="#9c4221" stroke-width="3"/><path d="M320 100 L338 100" stroke="#9c4221" stroke-width="3"/><path d="M470 100 L488 100" stroke="#9c4221" stroke-width="3"/></svg>', caption: '全诗沿“起承转合”推进，悲剧冲突层层加码直至高潮。' },
        { type: 'heading', text: '三、人物形象' },
        { type: 'paragraph', text: '刘兰芝勤劳、美丽、刚强而有尊严；焦仲卿善良懦弱却在最后以死明志；焦母与刘兄则是封建家长制的代表，他们的专制直接制造了悲剧。' },
        { type: 'keypoint', label: '悲剧根源', text: '兰芝与仲卿的死，表面因“家长专制”，深层是<strong>封建礼教与宗法制度</strong>对个体幸福的压迫。结尾“多谢后世人，戒之慎勿忘”点明诗的劝诫主旨。' },
        { type: 'list', items: ['刘兰芝：外柔内刚，“蒲苇纫如丝”', '焦仲卿：从委曲到以死抗争', '焦母/刘兄：封建家长专制的化身'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">人物关系</text><circle cx="340" cy="80" r="34" fill="#9c4221"/><text x="340" y="84" text-anchor="middle" font-size="13" fill="#fff">刘兰芝</text><circle cx="340" cy="180" r="34" fill="#7aa05a"/><text x="340" y="184" text-anchor="middle" font-size="13" fill="#fff">焦仲卿</text><circle cx="120" cy="130" r="30" fill="#c0473a"/><text x="120" y="134" text-anchor="middle" font-size="12" fill="#fff">焦母</text><circle cx="560" cy="130" r="30" fill="#c0473a"/><text x="560" y="134" text-anchor="middle" font-size="12" fill="#fff">刘兄</text><path d="M340 114 L340 146" stroke="#9c4221" stroke-width="3"/><path d="M310 95 L150 120" stroke="#555" stroke-width="2" stroke-dasharray="4"/><path d="M370 95 L530 120" stroke="#555" stroke-width="2" stroke-dasharray="4"/></svg>', caption: '兰芝—仲卿的爱情被焦母、刘兄所代表的家长专制撕裂，悲剧由此而生。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '对话见人', text: '兰芝自陈：“十三能织素……十七为君妇，心中常苦悲。”<br>连用排比叙述自幼才艺与婚后辛劳，既见其能干，又暗含对“君家妇难为”的不满，<strong>以对话直接塑造人物</strong>，是汉乐府叙事的典型笔法。' },
        { type: 'table', headers: ['手法', '例句', '作用'], rows: [['起兴', '孔雀东南飞，五里一徘徊', '渲染悲剧氛围，暗喻夫妻离散'], ['比喻', '君当作磐石，妾当作蒲苇', '表忠贞不渝的爱情誓言'], ['对比', '东西植松柏，左右种梧桐', '以生机反衬人间悲剧']] },
        { type: 'warn', label: '字词提示', text: '“相”字在诗中用法灵活：“儿已薄禄相”指骨相；“及时相遣归”中“相”偏指“我”；“会不相从许”中“相”偏指“你”。同一字因语境不同指代有别，是阅读难点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">起兴与誓言</text><text x="120" y="90" font-size="14" fill="#9c4221">孔雀东南飞</text><text x="120" y="112" font-size="12" fill="#555">五里一徘徊（起兴）</text><circle cx="200" cy="170" r="40" fill="#a8632e"/><text x="200" y="174" text-anchor="middle" font-size="12" fill="#fff">磐石</text><circle cx="480" cy="170" r="40" fill="#7aa05a"/><text x="480" y="174" text-anchor="middle" font-size="12" fill="#fff">蒲苇</text><path d="M240 170 L440 170" stroke="#9c4221" stroke-width="3" marker-end="url(#d)"/><text x="340" y="205" text-anchor="middle" font-size="12" fill="#555">磐石无转移 / 蒲苇纫如丝</text><defs><marker id="d" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '开篇“孔雀徘徊”起兴定调，夫妻“磐石蒲苇”之喻成爱情誓言。' },
        { type: 'tip', label: '学习提示', text: '本诗篇幅长，预习可抓住“被遣—誓别—抗婚—殉情”四幕把握主线，重点体会对话描写对人物性格的揭示作用。' },
        { type: 'heading', text: '五、文学价值' },
        { type: 'paragraph', text: '作为最早的长篇叙事诗，《孔雀东南飞》以完整的情节、鲜明的人物和深刻的控诉，奠定了后世叙事诗与戏曲（如《娇红记》）的母题基础。' },
        { type: 'reading', text: '延伸思考：兰芝“举身赴清池”与仲卿“自挂东南枝”的殉情，在今天看来是反抗还是妥协？这种“以死明志”与《氓》的“亦已焉哉”有何不同的女性姿态？' }
      ],
      exercises: [
        { type: 'choice', question: '《孔雀东南飞》在文学史上与下列哪篇并称“乐府双璧”？', options: ['《陌上桑》', '《木兰诗》', '《长歌行》', '《敕勒歌》'], answer: '《木兰诗》', explanation: '《孔雀东南飞》是汉乐府最长的叙事诗，《木兰诗》是北朝乐府民歌，二者题材、成就都极为突出，被并称为“乐府双璧”，故选《木兰诗》。' },
        { type: 'fill', question: '诗前小序称故事发生于“建安中”的__府，男女主角因封建家长干涉而殉情。', answer: '庐江', explanation: '原序写道“汉末建安中，庐江府小吏仲卿妻刘氏，为仲卿母所遣，自誓不嫁，其家逼之，乃投水而死”，可知故事发生在庐江府，庐江即今安徽境内。' },
        { type: 'choice', question: '“君当作磐石，妾当作蒲苇。蒲苇纫如丝，磐石无转移”运用的修辞手法是？', options: ['夸张', '比喻', '借代', '反问'], answer: '比喻', explanation: '兰芝以“磐石”比喻丈夫的坚定，以“蒲苇”比喻自己的柔韧忠贞，用自然界事物寄托爱情誓言，是典型的比喻（兼对偶）手法，突出二人信守不移的情感。' },
        { type: 'fill', question: '“孔雀东南飞，五里一徘徊”在诗中的作用属于《诗经》六义中的“__”手法（先言他物以引起所咏）。', answer: '兴', explanation: '以孔雀向东南飞去、徘徊不前的形象起笔，渲染了依恋、哀伤的氛围，并暗喻主人公夫妻离散的悲剧，这种“先言他物以引起所咏之词”的手法即“兴”。' },
        { type: 'choice', question: '《孔雀东南飞》悲剧的根本原因是？', options: ['夫妻性格不合', '封建礼教与宗法家长制', '经济贫困', '战乱离散'], answer: '封建礼教与宗法家长制', explanation: '兰芝“勤心养公姥，好自相扶将”却仍被驱遣，焦母与刘兄的专制是直接的推力，其背后是封建宗法制度对个体幸福的压制，诗末“戒之慎勿忘”也点明此批判主旨，故选封建礼教与家长制。' }
      ]
    },

    { id: 'xb3-u1-l4',    cover: 'assets/cover/chinese/xb3-u1-l4.svg',
    name: '《蜀道难》', author: '李白', chapter: '第一单元 诗的国度（中华传统文化经典研习）', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与诗体' },
        { type: 'paragraph', text: '李白（701—762），字太白，号青莲居士，唐代伟大的浪漫主义诗人，被誉为“诗仙”。《蜀道难》是乐府旧题，李白借之抒写蜀地山川的奇险，并寄寓对时局的隐忧。' },
        { type: 'keypoint', label: '浪漫主义诗风', text: '李白诗风<strong>豪放飘逸、想象奇绝</strong>。他善用夸张、神话、奔放的语言与跌宕的节奏，营造震撼人心的意境，《蜀道难》正是这一风格的巅峰代表。' },
        { type: 'list', items: ['句式：以七言为主，杂以四、五、九言，参差错落', '手法：夸张、想象、神话、反复咏叹', '基调：惊叹蜀道之险，兼含忧世之意'] },
        { type: 'heading', text: '二、原诗（全文）' },
        { type: 'poem', text: '噫吁嚱，危乎高哉！蜀道之难，难于上青天！蚕丛及鱼凫，开国何茫然！尔来四万八千岁，不与秦塞通人烟。西当太白有鸟道，可以横绝峨眉巅。地崩山摧壮士死，然后天梯石栈相钩连。上有六龙回日之高标，下有冲波逆折之回川。黄鹤之飞尚不得过，猿猱欲度愁攀援。青泥何盘盘，百步九折萦岩峦。扪参历井仰胁息，以手抚膺坐长叹。\n问君西游何时还？畏途巉岩不可攀。但见悲鸟号古木，雄飞雌从绕林间。又闻子规啼夜月，愁空山。蜀道之难，难于上青天，使人听此凋朱颜！连峰去天不盈尺，枯松倒挂倚绝壁。飞湍瀑流争喧豗，砯崖转石万壑雷。其险也如此，嗟尔远道之人胡为乎来哉！\n剑阁峥嵘而崔嵬，一夫当关，万夫莫开。所守或匪亲，化为狼与豺。朝避猛虎，夕避长蛇；磨牙吮血，杀人如麻。锦城虽云乐，不如早还家。蜀道之难，难于上青天，侧身西望长咨嗟！' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">蜀道意象群</text><path d="M60 200 Q200 60 340 120 T620 60" stroke="#9c4221" stroke-width="4" fill="none"/><text x="90" y="190" font-size="13" fill="#9c4221">鸟道</text><text x="300" y="110" font-size="13" fill="#9c4221">石栈</text><circle cx="430" cy="90" r="20" fill="#e8b4a0"/><text x="430" y="94" text-anchor="middle" font-size="11" fill="#5b2c16">剑阁</text><text x="560" y="70" font-size="13" fill="#c0473a">危峰</text><text x="200" y="150" font-size="12" fill="#7aa05a">悲鸟号古木</text><text x="480" y="160" font-size="12" fill="#7aa05a">子规啼夜月</text></svg>', caption: '诗以山、栈、鸟、瀑等意象堆叠出蜀道“高危险绝”的立体画面。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '表面写蜀道之险，末段“所守或匪亲，化为狼与豺”暗含对藩镇割据、战乱频仍的忧虑，体现了李白“济苍生、安社稷”的入世情怀。' },
        { type: 'keypoint', label: '三叹蜀道', text: '全诗三处“<strong>蜀道之难，难于上青天</strong>”构成回环结构：开篇惊叹其高，中段渲染其险，结尾感叹其险中藏危，一唱三叹，气势奔涌。' },
        { type: 'list', items: ['惊叹：开国茫然、不与秦通', '渲染：黄鹤愁攀、扪参历井', '忧世：剑阁险要、所守匪亲'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">三叹蜀道（结构）</text><rect x="50" y="80" width="160" height="55" rx="8" fill="#7aa05a"/><text x="130" y="112" text-anchor="middle" font-size="13" fill="#fff">一叹：高</text><rect x="260" y="80" width="160" height="55" rx="8" fill="#c08168"/><text x="340" y="112" text-anchor="middle" font-size="13" fill="#fff">二叹：险</text><rect x="470" y="80" width="160" height="55" rx="8" fill="#9c4221"/><text x="550" y="112" text-anchor="middle" font-size="13" fill="#fff">三叹：危</text><text x="340" y="180" text-anchor="middle" font-size="13" fill="#555">“蜀道之难，难于上青天”三现，回环咏叹</text></svg>', caption: '三处“蜀道之难”分写高、险、危，构成回环复沓的抒情结构。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '夸张赏析', text: '“连峰去天不盈尺，枯松倒挂倚绝壁。”<br>以“不盈尺”极言山峰逼近天际，以“倒挂”写枯松悬壁之态，<strong>夸张</strong>中见奇险，画面极具张力，将蜀道之“高”推向视觉极限。' },
        { type: 'table', headers: ['手法', '例句', '效果'], rows: [['夸张', '难于上青天 / 四万八千岁', '极写高险，震撼人心'], ['神话', '地崩山摧壮士死', '增添传奇色彩'], ['反复', '三叹“蜀道之难”', '回环咏叹，气势奔涌']] },
        { type: 'warn', label: '字音字形', text: '“噫吁嚱（yī xū xī）”为惊叹词；“扪参历井”的“参（shēn）”“井”皆星宿名；“砯（pīng）崖”指水击岩石声；“峥嵘（zhēng róng）”“崔嵬（cuī wéi）”形容山势高峻。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">夸张造险</text><line x1="80" y1="200" x2="600" y2="60" stroke="#9c4221" stroke-width="4"/><circle cx="600" cy="60" r="22" fill="#e8b4a0"/><text x="600" y="64" text-anchor="middle" font-size="12" fill="#5b2c16">天</text><text x="300" y="120" font-size="13" fill="#555">“连峰去天不盈尺”</text><text x="120" y="180" font-size="13" fill="#555">“四万八千岁”</text><text x="380" y="180" font-size="13" fill="#555">“难于上青天”</text></svg>', caption: '以“不盈尺”“四万八千岁”等极度夸张，将蜀道之高危推向视觉与心理极限。' },
        { type: 'tip', label: '背诵策略', text: '按“高—险—危”三层次背诵，抓住三处“蜀道之难”作为记忆锚点，重点体会七言歌行参差错落的节奏。' },
        { type: 'heading', text: '五、文学地位' },
        { type: 'paragraph', text: '《蜀道难》是李白出蜀初到长安时所作，贺知章读后惊呼“谪仙人也”。它以雄奇的想象和磅礴的气势，树立了唐代七言歌行的艺术标杆。' },
        { type: 'reading', text: '延伸：将《蜀道难》的“险”与《望海潮》的“繁华”并读，可见唐诗宋词在题材与气象上的不同取向——一写山川之壮，一写都市之盛。' }
      ],
      exercises: [
        { type: 'choice', question: '“蜀道之难，难于上青天”在全诗中出现三次，这种手法叫？', options: ['排比', '反复（回环咏叹）', '对偶', '设问'], answer: '反复（回环咏叹）', explanation: '这句在诗的开篇、中段、结尾各出现一次，形成一唱三叹的回环结构，强化蜀道之险的主题，属于反复手法（亦称复沓），故选“反复（回环咏叹）”。' },
        { type: 'fill', question: '李白，字太白，号__居士，唐代伟大的浪漫主义诗人，被誉为“诗仙”。', answer: '青莲', explanation: '李白自号“青莲居士”，这一名号与其早年隐居读书的青莲乡有关。他凭借豪放飘逸、想象奇绝的诗风被后世尊为“诗仙”，与“诗圣”杜甫并称。' },
        { type: 'choice', question: '"连峰去天不盈尺"运用的修辞手法主要是？', options: ['比喻', '夸张', '借代', '拟人'], answer: '夸张', explanation: '“去天不盈尺”极言山峰离天不到一尺，明显是艺术上的夸大，意在凸显蜀道山势的高峻逼人，属于夸张手法，故选“夸张”。' },
        { type: 'fill', question: '“地崩山摧壮士死，然后天梯石栈相钩连”化用了__（部落名）开通蜀道、五丁力士牺牲的神话传说。', answer: '蚕丛（或鱼凫/五丁）', explanation: '诗上文提到“蚕丛及鱼凫，开国何茫然”，并言“地崩山摧壮士死”，指古蜀国五丁力士劈山开道、壮烈牺牲的传说，李白借此神话烘托蜀道开辟之艰难与神奇。' },
        { type: 'choice', question: '下列对《蜀道难》主旨理解最全面的是？', options: ['单纯描写山水之美', '惊叹蜀道奇险并暗含对时局之忧', '表达对友人的送别之情', '抒发隐逸之乐'], answer: '惊叹蜀道奇险并暗含对时局之忧', explanation: '诗借蜀道之险，既展现山川奇绝，又在结尾“所守或匪亲，化为狼与豺”中暗喻藩镇割据之患，寄寓对国事的忧虑，故最全面的理解是惊叹其险兼含忧世之意。' }
      ]
    },

    { id: 'xb3-u1-l5',    cover: 'assets/cover/chinese/xb3-u1-l5.svg',
    name: '《蜀相》', author: '杜甫', chapter: '第一单元 诗的国度（中华传统文化经典研习）', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与背景' },
        { type: 'paragraph', text: '杜甫（712—770），字子美，唐代现实主义诗人，被誉为“诗圣”，其诗称“诗史”。《蜀相》作于诗人流寓成都、访武侯祠时，借凭吊诸葛亮抒发感时忧国、壮志难酬之慨。' },
        { type: 'keypoint', label: '咏史怀古诗', text: '本诗属<strong>咏史怀古</strong>题材：由眼前景（祠堂、碧草、黄鹂）起兴，转入对历史人物的追怀，最终落脚于诗人自身的现实感慨，景、史、情三者交融。' },
        { type: 'list', items: ['结构：寻祠—写景—颂人—叹己', '手法：借景抒情、用典、衬托', '情感：崇敬、惋惜、自伤交织'] },
        { type: 'heading', text: '二、原诗（全文）' },
        { type: 'poem', text: '丞相祠堂何处寻，锦官城外柏森森。\n映阶碧草自春色，隔叶黄鹂空好音。\n三顾频烦天下计，两朝开济老臣心。\n出师未捷身先死，长使英雄泪满襟。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">借景抒情脉络</text><rect x="50" y="70" width="150" height="60" rx="8" fill="#7aa05a"/><text x="125" y="96" text-anchor="middle" font-size="13" fill="#fff">碧草黄鹂</text><rect x="265" y="70" width="150" height="60" rx="8" fill="#c08168"/><text x="340" y="96" text-anchor="middle" font-size="13" fill="#fff">三顾两朝</text><rect x="480" y="70" width="150" height="60" rx="8" fill="#9c4221"/><text x="555" y="96" text-anchor="middle" font-size="13" fill="#fff">泪满襟</text><text x="125" y="160" font-size="12" fill="#555">以乐景写哀（自/空）</text><text x="340" y="160" font-size="12" fill="#555">用典颂德业</text><text x="555" y="160" font-size="12" fill="#555">英雄同悲己</text></svg>', caption: '景（乐而哀）→史（颂功德）→情（伤己志），三层递转。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '“出师未捷身先死，长使英雄泪满襟”是千古名句：既痛惜诸葛亮鞠躬尽瘁却功业未成，也暗含诗人自身“致君尧舜”理想落空的深沉悲慨。' },
        { type: 'keypoint', label: '“自”与“空”', text: '“映阶碧草<strong>自</strong>春色，隔叶黄鹂<strong>空</strong>好音”——“自”“空”二字妙在：碧草、黄鹂虽美，却无人欣赏，以<strong>乐景写哀情</strong>，烘托诗人孤寂苍凉的心境。' },
        { type: 'list', items: ['崇敬：两朝开济老臣心', '惋惜：出师未捷身先死', '自伤：英雄泪满襟的共情'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">章法：寻—览—颂—叹</text><rect x="40" y="90" width="140" height="55" rx="8" fill="#7aa05a"/><text x="110" y="122" text-anchor="middle" font-size="13" fill="#fff">寻祠</text><rect x="200" y="90" width="140" height="55" rx="8" fill="#c08168"/><text x="270" y="122" text-anchor="middle" font-size="13" fill="#fff">览景</text><rect x="360" y="90" width="140" height="55" rx="8" fill="#a8632e"/><text x="430" y="122" text-anchor="middle" font-size="13" fill="#fff">颂人</text><rect x="520" y="90" width="140" height="55" rx="8" fill="#9c4221"/><text x="590" y="122" text-anchor="middle" font-size="13" fill="#fff">叹己</text><path d="M180 117 L198 117" stroke="#9c4221" stroke-width="3"/><path d="M340 117 L358 117" stroke="#9c4221" stroke-width="3"/><path d="M500 117 L518 117" stroke="#9c4221" stroke-width="3"/></svg>', caption: '八句四联沿“寻祠—览景—颂人—叹己”推进，章法井然而情致跌宕。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '用典赏析', text: '“三顾频烦天下计，两朝开济老臣心。”<br>上句用刘备“三顾茅庐”典，写诸葛亮得遇明主；下句写其辅佐两朝、开创济世的耿耿忠心。<strong>十四字概括一生功业</strong>，对仗精工，颂扬中含无限追慕。' },
        { type: 'table', headers: ['诗句', '手法', '意蕴'], rows: [['柏森森', '环境烘托', '庄严肃穆，仰慕之情'], ['自春色/空好音', '乐景写哀', '无人赏会的孤寂'], ['泪满襟', '直抒胸臆', '英雄同悲的慨叹']] },
        { type: 'warn', label: '字词辨析', text: '“频烦”同“频繁”，指多次；“开济”意为开创基业、匡济危时；“济”读 jì。注意“长使英雄泪满襟”的“长”是“永远”之意，不可误作“常”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">用典颂德业</text><circle cx="200" cy="130" r="44" fill="#9c4221"/><text x="200" y="126" text-anchor="middle" font-size="12" fill="#fff">三顾</text><text x="200" y="146" text-anchor="middle" font-size="11" fill="#fff">得遇明主</text><circle cx="480" cy="130" r="44" fill="#7aa05a"/><text x="480" y="126" text-anchor="middle" font-size="12" fill="#fff">两朝</text><text x="480" y="146" text-anchor="middle" font-size="11" fill="#fff">开济老臣</text><path d="M244 130 L436 130" stroke="#9c4221" stroke-width="3" marker-end="url(#e)"/><text x="340" y="200" text-anchor="middle" font-size="12" fill="#555">十四字概括诸葛亮一生功业</text><defs><marker id="e" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '“三顾”“两朝”两典浓缩孔明得君、辅国之忠，对仗精工而颂扬深至。' },
        { type: 'tip', label: '学习提示', text: '本诗仅八句却章法井然，预习可抓住“寻—览—颂—叹”四步；重点品味“自”“空”二字以乐写哀的妙处与尾联的跌宕收束。' },
        { type: 'heading', text: '五、拓展比较' },
        { type: 'paragraph', text: '同写诸葛亮，陆游《书愤》有“出师一表真名世”，与本诗“出师未捷”形成“成”与“未成”的互文，皆借孔明抒报国之志。' },
        { type: 'reading', text: '延伸：杜甫一生“每依南斗望京华”，其咏史怀古诗多将古人功业与自身流落对照，这种“以古证今”的写法在其《咏怀古迹》《阁夜》中亦可见。' }
      ],
      exercises: [
        { type: 'choice', question: '“映阶碧草自春色，隔叶黄鹂空好音”中“自”“空”二字的作用是？', options: ['突出春景热闹', '以乐景写哀情', '交代时间', '赞美自然'], answer: '以乐景写哀情', explanation: '碧草春色、黄鹂好音本是赏心乐景，但“自”“空”二字说明无人欣赏，以明媚景物反衬诗人凭吊时的孤寂凄凉，是以乐景写哀情的经典手法，故选此项。' },
        { type: 'fill', question: '“三顾频烦天下计”化用了刘备__（典故）的史实，写诸葛亮得遇明主。', answer: '三顾茅庐', explanation: '“三顾”指刘备三次到草庐拜访诸葛亮，即“三顾茅庐”的典故。诗人借此概括诸葛亮得遇明主、得以施展天下大计的际遇，高度凝练地颂扬其功业。' },
        { type: 'choice', question: '《蜀相》的题材类型是？', options: ['山水田园诗', '咏史怀古诗', '边塞诗', '送别诗'], answer: '咏史怀古诗', explanation: '诗人游览武侯祠，由祠堂景物起笔，追怀诸葛亮生平功业，最终落脚于自身壮志难酬的感慨，景、史、情交融，属于典型的咏史怀古诗，故选此项。' },
        { type: 'fill', question: '杜甫，字子美，被后世尊为“__”，其诗因多记时事被称为“诗史”。', answer: '诗圣', explanation: '杜甫以沉郁顿挫的诗风、忧国忧民的情怀被尊为“诗圣”，其作品广泛反映安史之乱前后的社会现实，因而其诗被称为“诗史”，与“诗仙”李白并称李杜。' },
        { type: 'choice', question: '“出师未捷身先死，长使英雄泪满襟”主要表达了诗人怎样的情感？', options: ['对诸葛亮的蔑视', '对功业未成的痛惜与自身壮志难酬的悲慨', '对战争的歌颂', '对归隐的向往'], answer: '对功业未成的痛惜与自身壮志难酬的悲慨', explanation: '诗人既痛惜诸葛亮北伐未成、死于五丈原，又由古人联想到自己报国无门、漂泊西南的处境，英雄相惜中生出同悲，深沉寄托了自身壮志难酬的悲慨，故选此项。' }
      ]
    },

    { id: 'xb3-u1-l6',    cover: 'assets/cover/chinese/xb3-u1-l6.svg',
    name: '《望海潮（东南形胜）》', author: '柳永', chapter: '第一单元 诗的国度（中华传统文化经典研习）', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与词体' },
        { type: 'paragraph', text: '柳永（约987—约1053），原名三变，字耆卿，北宋婉约派代表人物。他大量创制慢词，以市井语言写都市繁华与羁旅愁情。《望海潮》是其即席赠予两浙转运使孙何的投赠之作。' },
        { type: 'keypoint', label: '慢词与铺叙', text: '柳永大力创作<strong>慢词（长调）</strong>，突破小令篇幅限制。《望海潮》通篇<strong>铺叙</strong>，由城市到景物、由市井到长官，层层展开，尽显杭州的富庶与美丽。' },
        { type: 'list', items: ['上片：写杭州形胜、都会繁华、钱塘江潮', '下片：写西湖清嘉、游赏、归美长官', '手法：铺叙、点染、虚实相间'] },
        { type: 'heading', text: '二、原词（全文）' },
        { type: 'poem', text: '东南形胜，三吴都会，钱塘自古繁华。烟柳画桥，风帘翠幕，参差十万人家。云树绕堤沙，怒涛卷霜雪，天堑无涯。市列珠玑，户盈罗绮，竞豪奢。\n重湖叠巘清嘉，有三秋桂子，十里荷花。羌管弄晴，菱歌泛夜，嬉嬉钓叟莲娃。千骑拥高牙，乘醉听箫鼓，吟赏烟霞。异日图将好景，归去凤池夸。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">铺叙结构（点—染—结）</text><rect x="40" y="70" width="180" height="60" rx="8" fill="#9c4221"/><text x="130" y="96" text-anchor="middle" font-size="13" fill="#fff">点：东南形胜</text><rect x="250" y="70" width="180" height="60" rx="8" fill="#c08168"/><text x="340" y="96" text-anchor="middle" font-size="13" fill="#fff">染：烟柳/市列</text><rect x="460" y="70" width="180" height="60" rx="8" fill="#7aa05a"/><text x="550" y="96" text-anchor="middle" font-size="13" fill="#fff">结：归美长官</text><text x="130" y="160" font-size="12" fill="#555">总提繁华</text><text x="340" y="160" font-size="12" fill="#555">铺写景物市井</text><text x="550" y="160" font-size="12" fill="#555">投赠收束</text></svg>', caption: '“点—染—结”的铺叙章法：先总提，再铺染，末归美。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '词以浓墨重彩赞美杭州（钱塘）的形胜、繁华与湖山之美，末句“归去凤池夸”是对长官孙何的恭维，体现了投赠词“颂美”的功能。' },
        { type: 'keypoint', label: '点染法', text: '“<strong>点</strong>”是总提（如“东南形胜，三吴都会，钱塘自古繁华”），“<strong>染</strong>”是铺写具体景物人情（烟柳、市列、桂子、荷花）。点染结合，繁而不乱。' },
        { type: 'list', items: ['形胜：云树绕堤沙，天堑无涯', '繁华：市列珠玑，户盈罗绮', '清嘉：三秋桂子，十里荷花'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">杭州意象群</text><text x="120" y="90" font-size="13" fill="#9c4221">烟柳画桥</text><text x="300" y="90" font-size="13" fill="#9c4221">云树堤沙</text><text x="500" y="90" font-size="13" fill="#9c4221">怒涛霜雪</text><text x="120" y="150" font-size="13" fill="#7aa05a">市列珠玑</text><text x="320" y="150" font-size="13" fill="#7aa05a">三秋桂子</text><text x="520" y="150" font-size="13" fill="#7aa05a">十里荷花</text><text x="340" y="205" text-anchor="middle" font-size="13" fill="#555">形胜·繁华·清嘉 三重铺写</text></svg>', caption: '词以烟柳、江潮、市井、荷桂等意象，立体铺陈杭州形胜与富庶。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '炼句赏析', text: '“三秋桂子，十里荷花。”<br>以“三秋”写桂花花期之长，“十里”写荷花分布之广，<strong>数量词对举</strong>极尽西湖风物之盛，语言晓畅而画面开阔，是柳永铺叙中“以简驭繁”的妙笔。' },
        { type: 'table', headers: ['手法', '例句', '效果'], rows: [['铺叙', '烟柳画桥…市列珠玑', '层层展开都市繁华'], ['点染', '点：自古繁华；染：景物', '繁而不乱，主线清晰'], ['夸张', '十里荷花 / 天堑无涯', '极写壮阔，气势淋漓']] },
        { type: 'warn', label: '字词音义', text: '“参差（cēn cī）”形容房屋高低不齐；“天堑（qiàn）”指天然险阻，此处指钱塘江；“羌（qiāng）管”即羌笛；“凤池”指中书省，代指朝廷中枢，是恭维长官入朝之辞。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">点染法</text><rect x="60" y="80" width="220" height="55" rx="8" fill="#9c4221"/><text x="170" y="112" text-anchor="middle" font-size="13" fill="#fff">点：自古繁华（总提）</text><rect x="400" y="80" width="220" height="55" rx="8" fill="#c08168"/><text x="510" y="112" text-anchor="middle" font-size="13" fill="#fff">染：景物人事（铺写）</text><path d="M280 107 L398 107" stroke="#9c4221" stroke-width="3" marker-end="url(#f)"/><text x="340" y="180" text-anchor="middle" font-size="13" fill="#555">点明主旨，染以铺陈，繁而不乱</text><defs><marker id="f" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '先“点”出繁华主旨，再“染”开景物市井，点染相生，章法井然。' },
        { type: 'tip', label: '学习提示', text: '预习可抓住“上片写城市、下片写湖山”的二分结构，重点体会“点染”手法与柳永慢词铺排的语言节奏。' },
        { type: 'heading', text: '五、文学地位' },
        { type: 'paragraph', text: '相传此词传至金邦，完颜亮因“三秋桂子，十里荷花”而生南侵之志，足见其艺术感染力。它是宋词中写都市题材的空前之作。' },
        { type: 'reading', text: '延伸：将《望海潮》的“繁华”与《扬州慢》的“空城”对读，同为写城，一盛一衰，可见时代与词人心境的落差。' }
      ],
      exercises: [
        { type: 'choice', question: '《望海潮》在章法上最突出的特点是？', options: ['含蓄委婉', '铺叙（点染结合）', '借古讽今', '以禅入诗'], answer: '铺叙（点染结合）', explanation: '柳永在词中先以“东南形胜…自古繁华”点明总貌，再铺写烟柳、市井、湖山等具体景物人情加以渲染，是典型的铺叙与点染结合的手法，故选此项。' },
        { type: 'fill', question: '“云树绕堤沙，怒涛卷霜雪，__无涯”描写钱塘江潮的壮阔。', answer: '天堑', explanation: '原句为“云树绕堤沙，怒涛卷霜雪，天堑无涯”，“天堑”本指天然险阻，这里指钱塘江。全句以云树、怒涛、天堑极写杭州江岸的壮阔险要。' },
        { type: 'choice', question: '柳永在词史上的主要贡献是？', options: ['创制小令', '大力创作慢词（长调）', '开创豪放派', '专写田园'], answer: '大力创作慢词（长调）', explanation: '柳永打破唐五代小令为主的格局，大力创制并填写慢词长调，扩展了词的容量与表现力，并善用铺叙和白描，对宋词发展贡献巨大，故选“大力创作慢词”。' },
        { type: 'fill', question: '“异日图将好景，归去__夸”中空缺处指中书省，代指朝廷，是对长官的恭维。', answer: '凤池', explanation: '“凤池”即中书省，是魏晋至唐的中央决策机构，代指朝廷中枢。词人预祝长官孙何将此好景绘成图画、归朝时向同僚夸耀，是投赠词的颂美之笔。' },
        { type: 'choice', question: '下列对《望海潮》情感基调理解正确的是？', options: ['悲愤沉郁', '赞美繁华、投赠颂美', '闲适淡泊', '羁旅愁苦'], answer: '赞美繁华、投赠颂美', explanation: '全词以绚丽笔触铺陈杭州的形胜、繁华与湖山之美，末句“归去凤池夸”明确指向对长官的投赠恭维，基调是赞美与颂美，而非悲愤或闲适，故选此项。' }
      ]
    },

    { id: 'xb3-u1-l7',    cover: 'assets/cover/chinese/xb3-u1-l7.svg',
    name: '《扬州慢（淮左名都）》', author: '姜夔', chapter: '第一单元 诗的国度（中华传统文化经典研习）', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与词风' },
        { type: 'paragraph', text: '姜夔（约1155—约1221），字尧章，号白石道人，南宋格律派词人。《扬州慢》是其自度曲（自制新调），写于扬州陷落、满目疮痍之后，抒发深沉的黍离之悲。' },
        { type: 'keypoint', label: '清空词风', text: '张炎评姜词“<strong>清空</strong>”：语言瘦劲、意境空灵、音律严整，不事浓艳堆砌。《扬州慢》以冷寂之景写家国之痛，正是“清空”美学的典范。' },
        { type: 'list', items: ['序：点明写作缘起（过维扬、四顾萧条）', '上片：写劫后空城之景', '下片：化用杜牧诗句，今昔对比'] },
        { type: 'heading', text: '二、原词（全文）' },
        { type: 'poem', text: '淮左名都，竹西佳处，解鞍少驻初程。过春风十里，尽荠麦青青。自胡马窥江去后，废池乔木，犹厌言兵。渐黄昏，清角吹寒，都在空城。\n杜郎俊赏，算而今、重到须惊。纵豆蔻词工，青楼梦好，难赋深情。二十四桥仍在，波心荡、冷月无声。念桥边红药，年年知为谁生？' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">今昔对比</text><rect x="50" y="70" width="240" height="60" rx="8" fill="#e8d9b0"/><text x="170" y="96" text-anchor="middle" font-size="13" fill="#5b2c16">昔：春风十里 繁华</text><rect x="390" y="70" width="240" height="60" rx="8" fill="#9c4221"/><text x="510" y="96" text-anchor="middle" font-size="13" fill="#fff">今：荠麦青青 空城</text><path d="M290 100 L388 100" stroke="#9c4221" stroke-width="3" marker-end="url(#b)"/><text x="340" y="160" font-size="13" fill="#555">以乐景（杜牧诗）衬哀情</text><defs><marker id="b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '昔盛今衰的强烈反差，是词的核心张力。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '“自胡马窥江去后，废池乔木，犹厌言兵”写战乱创伤之深，连草木都仿佛厌恶战争。末句“念桥边红药，年年知为谁生”以无情之景写极痛之情，黍离之悲溢于言外。' },
        { type: 'keypoint', label: '化用杜牧', text: '下片连用杜牧诗句：“春风十里”（《赠别》）、“豆蔻词工”“青楼梦好”（《遣怀》）、“二十四桥”（《寄扬州韩绰判官》）。<strong>以昔日扬州之繁华反衬今日之荒凉</strong>，是“以乐衬哀”的妙笔。' },
        { type: 'list', items: ['空城之悲：废池乔木、清角吹寒', '今昔之痛：杜郎重到须惊', '无情之问：红药为谁生'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">清空词风意象</text><text x="130" y="100" font-size="13" fill="#9c4221">废池乔木</text><text x="330" y="100" font-size="13" fill="#9c4221">清角吹寒</text><text x="520" y="100" font-size="13" fill="#9c4221">冷月无声</text><text x="170" y="160" font-size="13" fill="#7aa05a">荠麦青青</text><text x="380" y="160" font-size="13" fill="#7aa05a">波心荡漾</text><text x="540" y="160" font-size="13" fill="#7aa05a">桥边红药</text><text x="340" y="210" text-anchor="middle" font-size="13" fill="#555">瘦劲空灵，以冷寂写家国之痛</text></svg>', caption: '“废池”“冷月”“红药”等意象清冷瘦劲，营造清空而哀深的美学意境。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '炼字赏析', text: '“二十四桥仍在，波心荡、冷月无声。”<br>桥“仍”在而人事全非，“冷月无声”以<strong>通感与拟人</strong>写尽凄凉——月本无声，着一“冷”字，便觉寒气逼人、万籁死寂，景中全是亡国之痛。' },
        { type: 'table', headers: ['手法', '例句', '效果'], rows: [['对比', '春风十里 / 荠麦青青', '昔盛今衰的沉痛'], ['化用', '杜郎俊赏…二十四桥', '以乐衬哀，深化悲情'], ['拟人', '废池乔木，犹厌言兵', '移情于物，痛切入骨']] },
        { type: 'warn', label: '字词音义', text: '“淮左”指淮水东岸（古人以东为左），扬州属之；“竹西”为扬州亭名；“窥江”指金兵南侵；“黍离之悲”典出《诗经·王风·黍离》，指故国残破之痛。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">化用杜牧以乐衬哀</text><rect x="60" y="80" width="260" height="55" rx="8" fill="#e8d9b0"/><text x="190" y="112" text-anchor="middle" font-size="13" fill="#5b2c16">杜牧笔下的扬州（繁华）</text><rect x="360" y="80" width="260" height="55" rx="8" fill="#9c4221"/><text x="490" y="112" text-anchor="middle" font-size="13" fill="#fff">姜夔眼中的扬州（空城）</text><path d="M320 107 L358 107" stroke="#9c4221" stroke-width="3" marker-end="url(#g)"/><text x="340" y="185" text-anchor="middle" font-size="13" fill="#555">春风十里→荠麦青青，昔盛今衰</text><defs><marker id="g" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '词下片化用杜牧“春风十里”“二十四桥”等句，以昔日繁华反衬今日荒凉。' },
        { type: 'tip', label: '学习提示', text: '预习可借助小序把握写作背景，重点体会“今昔对比”结构与“以乐衬哀”手法，并背诵全词。' },
        { type: 'heading', text: '五、写作任务衔接' },
        { type: 'paragraph', text: '本单元写作任务为“学写鉴赏文章”。可选取本词某一手法（如对比、化用）或某一名句，写成一篇 600 字左右的文学短评，做到观点明确、有据可依。' },
        { type: 'reading', text: '延伸：将《扬州慢》的“空城”与《望海潮》的“繁华”对读，同为宋词写城，一写战前都会之盛，一写劫后废墟之哀，时代落差尽在其中。' }
      ],
      exercises: [
        { type: 'choice', question: '《扬州慢》中“自胡马窥江去后，废池乔木，犹厌言兵”运用的特殊手法是？', options: ['夸张', '移情于物（拟人）', '排比', '借代'], answer: '移情于物（拟人）', explanation: '“废池乔木”本是无情之物，词人却说它们“犹厌言兵”，将人对战争的厌恶之情移到景物上，属于移情于物（拟人）的手法，极写战乱创伤之深，故选此项。' },
        { type: 'fill', question: '“杜郎俊赏，算而今、重到须惊”中“杜郎”指唐代诗人__，词中化用了他多篇写扬州的诗句。', answer: '杜牧', explanation: '“杜郎”即晚唐诗人杜牧，他曾任淮南节度府幕僚，写有多首咏扬州的名作（如“春风十里扬州路”“二十四桥明月夜”），姜夔正借这些诗句的繁华反衬今日扬州的荒凉。' },
        { type: 'choice', question: '姜夔词风被张炎评为“清空”，下列对“清空”理解正确的是？', options: ['语言浓艳堆砌', '意境空灵瘦劲、音律严整', '专写闺阁情思', '风格豪放粗犷'], answer: '意境空灵瘦劲、音律严整', explanation: '“清空”指姜词语言瘦劲而不浓艳、意境空灵含蓄、格律精严，与吴文英的“质实”相对。本词以冷寂空城写家国之痛，正是清空美学的体现，故选“意境空灵瘦劲、音律严整”。' },
        { type: 'fill', question: '《扬州慢》是姜夔的__（填创作方式），即自创的新曲调，并附小序点明写作缘起。', answer: '自度曲', explanation: '“自度曲”指词人自己谱制的新曲调。姜夔精通音律，《扬州慢》便是他自创的调子，并写有小序说明“过维扬、四顾萧条”的写作背景。' },
        { type: 'choice', question: '“念桥边红药，年年知为谁生”表达了词人怎样的情感？', options: ['对红药盛开的喜悦', '以无情之景写极痛的家国之悲', '游赏的闲适', '送别友人的依恋'], answer: '以无情之景写极痛的家国之悲', explanation: '红药年年自开，却已无人欣赏，词人借“为谁生”的反问，以自然之无情反衬人间之惨痛，将黍离之悲推向高潮，故选“以无情之景写极痛的家国之悲”。' }
      ]
    }

  );
})();
