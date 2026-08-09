(function () {
  var v = gzGetVolume('chinese', 'xb3');
  if (!v) return;
  v.points.push(

    /* ===================== 第五单元 古诗词诵读 ===================== */

    { id: 'xb3-u5-l1',    cover: 'assets/cover/chinese/xb3-u5-l1.svg',
    name: '《拟行路难（其四）》', author: '鲍照', chapter: '古诗词诵读', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与创作背景' },
        { type: 'paragraph', text: '鲍照（约414—466），字明远，南朝宋文学家，出身寒微，曾任临海王刘子顼前军参军。其诗继承建安风骨，抒发寒士怀才不遇的愤懑。《拟行路难》为拟乐府组诗，共十八首，本篇为其四，集中抒写门阀制度下有志难伸的愁苦。' },
        { type: 'keypoint', label: '鲍照与寒士诗风', text: '鲍照是南朝<strong>寒士文学</strong>的代表，其诗以<strong>俊逸豪放、情辞刚健</strong>著称，善用七言与杂言，打破吴歌西曲的柔靡，对李白、杜甫均有深远影响。' },
        { type: 'list', items: ['门阀背景：东晋南朝“上品无寒门”，出身决定仕途', '组诗性质：《拟行路难》拟汉乐府《行路难》，多写人生感慨', '本篇定位：组诗其四，抒怀才不遇、行叹坐愁之悲'] },
        { type: 'heading', text: '二、原诗（全文）' },
        { type: 'poem', text: '泻水置平地，各自东西南北流。\n人生亦有命，安能行叹复坐愁！\n酌酒以自宽，举杯断绝歌路难。\n心非木石岂无感？吞声踯躅不敢言。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">泻水喻命运</text><path d="M120 70 L120 190" stroke="#9c4221" stroke-width="3"/><text x="100" y="200" font-size="13" fill="#555">平地</text><path d="M120 110 L240 80" stroke="#7aa05a" stroke-width="3"/><path d="M120 110 L240 140" stroke="#c08168" stroke-width="3"/><path d="M120 110 L240 170" stroke="#a8632e" stroke-width="3"/><path d="M120 110 L200 200" stroke="#c0473a" stroke-width="3"/><text x="260" y="80" font-size="13" fill="#7aa05a">东流</text><text x="260" y="116" font-size="13" fill="#c08168">西流</text><text x="260" y="152" font-size="13" fill="#a8632e">南流</text><text x="260" y="188" font-size="13" fill="#c0473a">北流</text><text x="430" y="130" font-size="14" fill="#9c4221">命由门第</text><text x="430" y="156" font-size="13" fill="#555">如水流四方</text></svg>', caption: '泻水于地、分流四方，比喻人之遭际因门第不同而各奔东西。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '诗以“泻水”起兴，比喻人之遭际如平地之水，流向东西南北各由地势（门第）决定，暗指命运受制于出身。诗人表面认命，实则满腔不平。' },
        { type: 'keypoint', label: '核心矛盾', text: '“人生亦有命”是<strong>反语式的愤慨</strong>，看似劝慰自己认命，实则以“安能行叹复坐愁”的诘问，写出寒士在门阀压制下的无奈与抗争。' },
        { type: 'list', items: ['认命与不平：泻水东西，命由门第', '借酒消愁：酌酒自宽，歌断路难', '吞声不敢：心非木石，却踯躅不言'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">情感四步</text><rect x="40" y="80" width="140" height="55" rx="8" fill="#7aa05a"/><text x="110" y="112" text-anchor="middle" font-size="13" fill="#fff">泻水起兴</text><rect x="200" y="80" width="140" height="55" rx="8" fill="#c08168"/><text x="270" y="112" text-anchor="middle" font-size="13" fill="#fff">行叹坐愁</text><rect x="360" y="80" width="140" height="55" rx="8" fill="#a8632e"/><text x="430" y="112" text-anchor="middle" font-size="13" fill="#fff">酌酒自宽</text><rect x="520" y="80" width="140" height="55" rx="8" fill="#9c4221"/><text x="590" y="112" text-anchor="middle" font-size="13" fill="#fff">吞声踯躅</text><path d="M180 107 L198 107" stroke="#9c4221" stroke-width="3"/><path d="M340 107 L358 107" stroke="#9c4221" stroke-width="3"/><path d="M500 107 L518 107" stroke="#9c4221" stroke-width="3"/></svg>', caption: '情感由“认命”起，经愁叹、借酒，终归于吞声不敢言的压抑。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '名句赏析', text: '“泻水置平地，各自东西南北流。”<br>以<strong>泻水于地、分流四方的日常景象</strong>起兴，比喻人之命运因门第不同而各奔东西，平中见奇，将抽象的出身之悲化为可感画面，奠定全诗“认命—不平”的张力。' },
        { type: 'table', headers: ['手法', '例句', '表达效果'], rows: [['起兴', '泻水置平地', '以水流喻命运，自然贴切'], ['反问', '安能行叹复坐愁', '强化不甘与无奈'], ['直抒', '吞声踯躅不敢言', '写尽压抑之痛']] },
        { type: 'warn', label: '易错字', text: '“踯躅（zhí zhú）”指徘徊不前；“吞声”指不敢出声、强忍悲泣。注意“泻”不写作“泄”；“行叹复坐愁”的“坐”是“徒然、空自”之意，与“行”（行走间）相对。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">比兴手法</text><text x="120" y="100" font-size="14" fill="#9c4221">泻水置平地</text><text x="120" y="124" font-size="12" fill="#555">（起兴）</text><circle cx="230" cy="160" r="40" fill="#a8632e"/><text x="230" y="164" text-anchor="middle" font-size="12" fill="#fff">门第</text><circle cx="470" cy="160" r="40" fill="#7aa05a"/><text x="470" y="164" text-anchor="middle" font-size="12" fill="#fff">命运</text><path d="M270 160 L430 160" stroke="#9c4221" stroke-width="3" marker-end="url(#u5a)"/><text x="340" y="210" text-anchor="middle" font-size="12" fill="#555">以水流四方喻命运各殊</text><defs><marker id="u5a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '以“泻水”起兴兼比喻，将门第决定命运之悲化为可感画面。' },
        { type: 'tip', label: '学习提示', text: '本诗虽短，宜抓住“泻水—行叹—酌酒—吞声”四步情感曲线背诵，重点体会“心非木石岂无感”的欲说还休之痛。' },
        { type: 'heading', text: '五、文学地位' },
        { type: 'paragraph', text: '鲍照此诗开了以七言抒写人生感慨的先河，其慷慨任气、俊逸洒脱的格调，直接影响了唐代李白的《行路难》等作，是寒士文学的重要里程碑。' },
        { type: 'reading', text: '延伸思考：同写“行路难”，鲍照的“吞声踯躅”与李白“长风破浪会有时”的精神姿态有何不同？时代与个性如何塑造了诗人的表达？' }
      ],
      exercises: [
        { type: 'choice', question: '下列对“泻水置平地，各自东西南北流”所用手法判断正确的是？', options: ['比喻（兼起兴）', '夸张', '借代', '对偶'], answer: '比喻（兼起兴）', explanation: '诗人将“泻水于地、分流四方”的日常景象用作起兴，同时以水流方向喻人之命运因门第不同而各奔东西，是“兴而比”的手法，故应选“比喻（兼起兴）”。' },
        { type: 'fill', question: '“人生亦有命，安能行叹复坐愁”中“坐”意为__，与“行”（行走间）相对，指徒然、空自。', answer: '徒然（空自）', explanation: '“坐”在古汉语中常作副词，表示“徒然、空自”之意。“行叹复坐愁”意为走着叹息、坐着发愁，形容无时无刻不在忧愁，突出寒士面对门阀压制的无奈。' },
        { type: 'choice', question: '“心非木石岂无感？吞声踯躅不敢言”表现了诗人怎样的心理？', options: ['坦然认命', '内心不平却压抑不敢言', '欣喜若狂', '漠不关心'], answer: '内心不平却压抑不敢言', explanation: '诗人说自己并非木石岂能无动于衷，却只能“吞声踯躅不敢言”，可见其心中充满愤懑不平，但因门阀压制而不得不强忍压抑，故选“内心不平却压抑不敢言”。' },
        { type: 'fill', question: '鲍照所属的文学群体是南朝的__文学，其诗俊逸豪放，对李白、杜甫影响深远。', answer: '寒士', explanation: '鲍照出身寒微，是南朝寒士文学的代表。他突破门阀贵族柔靡诗风，以刚健俊逸之作抒写怀才不遇，开寒士诗风一脉，对唐代李白、杜甫的七言歌行均有深刻影响。' },
        { type: 'choice', question: '《拟行路难》从题材来源看，属于对哪种诗歌传统的拟作？', options: ['汉乐府《行路难》', '诗经', '楚辞', '唐诗'], answer: '汉乐府《行路难》', explanation: '题名“拟行路难”之“拟”即模拟、仿作之意，所拟对象为汉乐府旧题《行路难》。鲍照以此古题抒写六朝寒士的人生感慨，属拟乐府组诗，故选汉乐府《行路难》。' }
      ]
    },

    { id: 'xb3-u5-l2',    cover: 'assets/cover/chinese/xb3-u5-l2.svg',
    name: '《客至》', author: '杜甫', chapter: '古诗词诵读', difficulty: '简单',
      content: [
        { type: 'heading', text: '一、作者与写作背景' },
        { type: 'paragraph', text: '《客至》作于唐肃宗上元二年（761）成都草堂初成时。经安史之乱流离，杜甫在友朋资助下于浣花溪畔筑成草堂，生活暂得安定，此诗即记崔明府来访的欣喜，展现诗人质朴真诚的待客之情。' },
        { type: 'keypoint', label: '草堂时期心境', text: '此时杜甫虽生活清贫，但<strong>心境闲适恬淡</strong>。与夔州、剑外时期的沉郁顿挫不同，草堂诸作多写村居闲趣与邻里真情，《客至》《江村》皆其代表。' },
        { type: 'list', items: ['时间：上元二年，草堂初成', '来客：崔明府（县令，姓崔）', '基调：闲适、真诚、有人间烟火气'] },
        { type: 'heading', text: '二、原诗（全文）' },
        { type: 'poem', text: '舍南舍北皆春水，但见群鸥日日来。\n花径不曾缘客扫，蓬门今始为君开。\n盘飧市远无兼味，樽酒家贫只旧醅。\n肯与邻翁相对饮，隔篱呼取尽余杯。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">草堂迎客图</text><circle cx="120" cy="120" r="46" fill="#7aa05a"/><text x="120" y="116" text-anchor="middle" font-size="13" fill="#fff">春水</text><text x="120" y="136" text-anchor="middle" font-size="12" fill="#fff">群鸥</text><rect x="280" y="95" width="120" height="70" rx="8" fill="#e8d9b0" stroke="#cbb89d"/><text x="340" y="134" text-anchor="middle" font-size="13" fill="#5b2c16">蓬门</text><circle cx="490" cy="110" r="36" fill="#c08168"/><text x="490" y="114" text-anchor="middle" font-size="12" fill="#fff">旧醅</text><circle cx="560" cy="170" r="30" fill="#a8632e"/><text x="560" y="174" text-anchor="middle" font-size="12" fill="#fff">邻翁</text></svg>', caption: '春水群鸥、蓬门初开、旧醅待客、呼取邻翁，构成草堂迎客的温馨画面。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '前两句写草堂环境之幽静与平日少客，三四句“花径不曾扫”“蓬门今始开”以铺垫之笔突出对客之重视与喜悦，五六句坦言家贫无好菜，却见待客的坦白与热忱。' },
        { type: 'keypoint', label: '待客之“真”', text: '“盘飧市远无兼味，樽酒家贫只旧醅”<strong>直言家贫、不事修饰</strong>，反显待客之诚。末句“隔篱呼取”邀邻翁共饮，更见村居率真、不分宾主之趣。' },
        { type: 'list', items: ['幽静：舍南舍北皆春水，群鸥日日来', '欣喜：蓬门今始为君开', '率真：呼取邻翁尽余杯'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">情感层次</text><rect x="40" y="80" width="140" height="55" rx="8" fill="#7aa05a"/><text x="110" y="112" text-anchor="middle" font-size="13" fill="#fff">铺垫幽静</text><rect x="200" y="80" width="140" height="55" rx="8" fill="#c08168"/><text x="270" y="112" text-anchor="middle" font-size="13" fill="#fff">欣喜迎客</text><rect x="360" y="80" width="140" height="55" rx="8" fill="#a8632e"/><text x="430" y="112" text-anchor="middle" font-size="13" fill="#fff">坦率待客</text><rect x="520" y="80" width="140" height="55" rx="8" fill="#9c4221"/><text x="590" y="112" text-anchor="middle" font-size="13" fill="#fff">呼邻共饮</text><path d="M180 107 L198 107" stroke="#9c4221" stroke-width="3"/><path d="M340 107 L358 107" stroke="#9c4221" stroke-width="3"/><path d="M500 107 L518 107" stroke="#9c4221" stroke-width="3"/></svg>', caption: '情感由铺垫幽静，经欣喜、坦率，终至呼邻共饮的热烈率真。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '名句赏析', text: '“花径不曾缘客扫，蓬门今始为君开。”<br>上句言平日不轻易扫径迎客，下句“今始”二字<strong>点出对崔明府的格外敬重</strong>。一“不曾”一“今始”相映，于平淡中见深情，白描中见波澜。' },
        { type: 'table', headers: ['手法', '例句', '效果'], rows: [['铺垫', '舍南舍北皆春水', '以幽静衬客来可贵'], ['白描', '盘飧市远无兼味', '直言家贫，待客以诚'], ['细节', '隔篱呼取尽余杯', '呼邻共饮，率真动人']] },
        { type: 'warn', label: '易错字', text: '“飧（sūn）”指熟食、饭菜，不读 cān；“醅（pēi）”指未滤的浊酒；“蓬门”指草编的门，代指贫寒之家。注意“缘”是“因为”之意（不曾缘客扫＝不曾因客来而扫）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">对仗结构</text><rect x="60" y="70" width="260" height="55" rx="8" fill="#9c4221"/><text x="190" y="102" text-anchor="middle" font-size="13" fill="#fff">颔联：花径/蓬门（迎客）</text><rect x="360" y="70" width="260" height="55" rx="8" fill="#c08168"/><text x="490" y="102" text-anchor="middle" font-size="13" fill="#fff">颈联：盘飧/樽酒（待客）</text><text x="190" y="160" font-size="12" fill="#555">不曾—今始（对比见情）</text><text x="490" y="160" font-size="12" fill="#555">无兼味—只旧醅（坦白）</text><text x="340" y="210" text-anchor="middle" font-size="12" fill="#555">工稳对仗中见家常真情</text></svg>', caption: '颔联写迎客、颈联写待客，对仗工稳而语近家常，于平淡见深情。' },
        { type: 'tip', label: '学习提示', text: '本诗对仗工稳而语近家常，宜背诵全诗，重点体会“不曾—今始”“无兼味—只旧醅”的对比中流露的真情。' },
        { type: 'heading', text: '五、拓展比较' },
        { type: 'paragraph', text: '同写待客，杜甫《宾至》“百年粗粝腐儒餐”更显拘谨客套，而《客至》“呼取邻翁”则亲密无间，可见诗人对不同来客的不同姿态与真性情。' },
        { type: 'reading', text: '延伸思考：在“市远无兼味”的清贫中，诗人仍能“肯与邻翁相对饮”，这种待客之道对今天的人际关系有何启示？' }
      ],
      exercises: [
        { type: 'choice', question: '“花径不曾缘客扫，蓬门今始为君开”中“缘”的意思是？', options: ['沿着', '因为', '缘分', '攀附'], answer: '因为', explanation: '“缘”在此作介词，意为“因为、由于”。“花径不曾缘客扫”即花间小径不曾因为客来而打扫，反衬平日少客，更显今日迎客之郑重，故选“因为”。' },
        { type: 'fill', question: '“盘飧市远无兼味，樽酒家贫只旧__”中空缺处指未过滤的浊酒。', answer: '醅', explanation: '“醅”读 pēi，指未经过滤的浊酒。诗人坦言因居处偏远、家境贫寒，只能用自酿的浊酒待客，于坦白中见待客之诚，是草堂诗“语近家常”的典型笔法。' },
        { type: 'choice', question: '下列对《客至》情感基调理解正确的是？', options: ['悲愤沉郁', '闲适真诚、有人间烟火气', '羁旅愁苦', '闲适淡泊且疏离'], answer: '闲适真诚、有人间烟火气', explanation: '全诗写草堂迎客，由幽静铺垫到欣喜迎客、坦率待客，末句“呼取邻翁”更显亲密率真，充满生活温情，属于闲适真诚、有人间烟火气的基调，故选此项。' },
        { type: 'fill', question: '《客至》作于杜甫成都__初成时，是其闲适恬淡心境的代表作之一。', answer: '草堂', explanation: '此诗写于唐肃宗上元二年成都浣花溪草堂建成之初。经安史之乱流离后暂得安居，诗人心境闲适，草堂诸作多写村居闲趣与邻里真情，《客至》即其中名篇。' },
        { type: 'choice', question: '“肯与邻翁相对饮，隔篱呼取尽余杯”表现了诗人怎样的待客态度？', options: ['拘谨客套', '率真亲密、不分宾主', '冷漠敷衍', '嫌弃邻翁'], answer: '率真亲密、不分宾主', explanation: '诗人不仅热情待客，还隔着篱笆呼唤邻家老翁一同对饮、喝尽余杯，毫无主客隔阂，展现村居生活的率真亲密，故选“率真亲密、不分宾主”。' }
      ]
    },

    { id: 'xb3-u5-l3',    cover: 'assets/cover/chinese/xb3-u5-l3.svg',
    name: '《登快阁》', author: '黄庭坚', chapter: '古诗词诵读', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与背景' },
        { type: 'paragraph', text: '黄庭坚（1045—1105），字鲁直，号山谷道人，北宋诗人、书法家，“苏门四学士”之首，江西诗派开山祖。《登快阁》作于元丰五年（1082）知吉州泰和县令时，写公事之余登阁所见与胸中块垒。' },
        { type: 'keypoint', label: '江西诗派', text: '黄庭坚开创<strong>江西诗派</strong>，主张“点铁成金”“夺胎换骨”，强调诗意瘦硬、用典精切、以学问为诗。本诗“朱弦已为佳人绝，青眼聊因美酒横”即用典见性情。' },
        { type: 'list', items: ['官职：泰和县令，公事繁冗', '登阁：了却公家事后倚阁晚晴', '主旨：卸任之闲与归隐之思'] },
        { type: 'heading', text: '二、原诗（全文）' },
        { type: 'poem', text: '痴儿了却公家事，快阁东西倚晚晴。\n落木千山天远大，澄江一道月分明。\n朱弦已为佳人绝，青眼聊因美酒横。\n万里归船弄长笛，此心吾与白鸥盟。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">登快阁意象</text><rect x="120" y="70" width="120" height="70" rx="8" fill="#e8d9b0" stroke="#cbb89d"/><text x="180" y="110" text-anchor="middle" font-size="13" fill="#5b2c16">快阁</text><path d="M60 180 L260 150" stroke="#7aa05a" stroke-width="3"/><text x="90" y="200" font-size="12" fill="#7aa05a">落木千山</text><path d="M300 180 L500 150" stroke="#9c4221" stroke-width="3"/><text x="330" y="200" font-size="12" fill="#9c4221">澄江月明</text><circle cx="560" cy="120" r="30" fill="#a8632e"/><text x="560" y="124" text-anchor="middle" font-size="12" fill="#fff">白鸥</text></svg>', caption: '快阁、落木千山、澄江明月、白鸥，构成登览与归隐的双重意象。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '首句以“痴儿”自嘲，暗用夏侯湛“痴叔”典，写尽公事缠身之倦；三四句写登阁所见壮阔之景，景阔心开；后四句由景入情，写知己难觅、唯借酒与归隐自遣。' },
        { type: 'keypoint', label: '旷达与孤寂', text: '“落木千山天远大，澄江一道月分明”<strong>以壮阔澄明之景</strong>反衬诗人内心的孤高；“青眼聊因美酒横”写知音寥落，唯酒与白鸥可盟，旷达中藏寂寞。' },
        { type: 'list', items: ['公事之倦：痴儿了却公家事', '登览之阔：落木千山、澄江月明', '归隐之思：归船弄笛、与鸥同盟'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">情感脉络</text><rect x="40" y="80" width="140" height="55" rx="8" fill="#7aa05a"/><text x="110" y="112" text-anchor="middle" font-size="13" fill="#fff">公事之倦</text><rect x="200" y="80" width="140" height="55" rx="8" fill="#c08168"/><text x="270" y="112" text-anchor="middle" font-size="13" fill="#fff">登览之阔</text><rect x="360" y="80" width="140" height="55" rx="8" fill="#a8632e"/><text x="430" y="112" text-anchor="middle" font-size="13" fill="#fff">知音之孤</text><rect x="520" y="80" width="140" height="55" rx="8" fill="#9c4221"/><text x="590" y="112" text-anchor="middle" font-size="13" fill="#fff">归隐之盟</text><path d="M180 107 L198 107" stroke="#9c4221" stroke-width="3"/><path d="M340 107 L358 107" stroke="#9c4221" stroke-width="3"/><path d="M500 107 L518 107" stroke="#9c4221" stroke-width="3"/></svg>', caption: '情感由公事之倦，经登览之阔、知音之孤，终归于归隐之盟。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '名句赏析', text: '“落木千山天远大，澄江一道月分明。”<br>上句写千山落叶、天宇旷远，下句写一江澄澈、月影分明，<strong>对仗精工、意境开阔</strong>，以景语写胸襟，是宋诗“以理入景”的典范，气象不输唐人。' },
        { type: 'table', headers: ['手法', '例句', '效果'], rows: [['用典', '痴儿了却公家事', '自嘲公忙，幽默隽永'], ['对仗', '落木千山/澄江一道', '开阔精工，宋调唐风'], ['用典', '青眼聊因美酒横', '化嵇康典，写知音稀']] },
        { type: 'warn', label: '易错字', text: '“澄（chéng）江”指清澈的江水；“青眼”典出阮籍，对喜者露黑睛正视（青眼），对恶者露白眼；“盟”在此为动词“结盟、相约”。注意“了却”意为完成、了结。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">用典见性情</text><circle cx="140" cy="130" r="40" fill="#9c4221"/><text x="140" y="126" text-anchor="middle" font-size="12" fill="#fff">痴儿</text><text x="140" y="146" text-anchor="middle" font-size="11" fill="#fff">夏侯湛典</text><circle cx="340" cy="130" r="40" fill="#7aa05a"/><text x="340" y="126" text-anchor="middle" font-size="12" fill="#fff">青眼</text><text x="340" y="146" text-anchor="middle" font-size="11" fill="#fff">阮籍典</text><circle cx="540" cy="130" r="40" fill="#a8632e"/><text x="540" y="126" text-anchor="middle" font-size="12" fill="#fff">白鸥</text><text x="540" y="146" text-anchor="middle" font-size="11" fill="#fff">盟鸥归隐</text><path d="M180 130 L300 130" stroke="#9c4221" stroke-width="2"/><path d="M380 130 L500 130" stroke="#9c4221" stroke-width="2"/></svg>', caption: '“痴儿”“青眼”“白鸥”三典串联，自嘲、写孤、盟归，见山谷性情。' },
        { type: 'tip', label: '学习提示', text: '本诗宜先抓“了却公事—登阁览景—借酒抒怀—盟鸥归隐”四层，重点背诵颔联，体会宋诗“瘦硬通神”的理趣。' },
        { type: 'heading', text: '五、文学地位' },
        { type: 'paragraph', text: '《登快阁》是黄庭坚七律代表作，严羽《沧浪诗话》推为“山谷第一”。其以景写理、用典自然，标志着江西诗派“化俗为雅”的成熟境界。' },
        { type: 'reading', text: '延伸思考：黄庭坚“与白鸥盟”的归隐之思，与陶渊明“久在樊笼里，复得返自然”有何异同？宋人的“理”如何融于唐人的“情”？' }
      ],
      exercises: [
        { type: 'choice', question: '“朱弦已为佳人绝，青眼聊因美酒横”中“青眼”典故出自哪位古人？', options: ['嵇康', '阮籍', '陶渊明', '谢灵运'], answer: '阮籍', explanation: '“青眼”典出《晋书·阮籍传》：阮籍能作青白眼，对器重、友善之人露黑睛正视曰“青眼”，对厌恶者露白眼。诗人以“青眼”写唯有美酒可投契，反衬知音寥落，故选阮籍。' },
        { type: 'fill', question: '“落木千山天远大，__一道月分明”是《登快阁》的千古名句，写登阁所见壮阔澄明之景。', answer: '澄江', explanation: '原句为“落木千山天远大，澄江一道月分明”。上句写千山落叶、天宇旷远，下句写一江澄澈、月影分明，对仗精工、意境开阔，是宋诗以景写理的典范。' },
        { type: 'choice', question: '黄庭坚在诗史上开创的流派是？', options: ['花间派', '江西诗派', '公安派', '桐城派'], answer: '江西诗派', explanation: '黄庭坚是北宋诗人，被尊为江西诗派开山祖。该派主张“点铁成金”“夺胎换骨”，强调用典精切、诗意瘦硬、以学问为诗，对南宋诗坛影响深远，故选江西诗派。' },
        { type: 'fill', question: '“痴儿了却公家事”中“了却”意为__，暗用夏侯湛“痴叔”之典自嘲公事缠身。', answer: '完成（了结）', explanation: '“了却”即完成、了结。“痴儿”是诗人自嘲之语，化用晋人夏侯湛被称为“痴叔”的典故，意为办完公事方能偷闲登阁，幽默中见公忙之倦。' },
        { type: 'choice', question: '“此心吾与白鸥盟”化用的意象，在传统诗词中通常象征？', options: ['征战杀伐', '归隐闲适、淡泊无机心', '离别相思', '功名富贵'], answer: '归隐闲适、淡泊无机心', explanation: '“盟鸥”典出《列子》与隐逸诗词，以与白鸥结盟比喻弃绝机心、归隐江湖。诗人言此心唯与白鸥相盟，表达的是卸任归隐、淡泊自适的意愿，故选归隐闲适。' }
      ]
    },

    { id: 'xb3-u5-l4',    cover: 'assets/cover/chinese/xb3-u5-l4.svg',
    name: '《临安春雨初霁》', author: '陆游', chapter: '古诗词诵读', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与背景' },
        { type: 'paragraph', text: '陆游（1125—1210），字务观，号放翁，南宋伟大爱国诗人。《临安春雨初霁》作于淳熙十三年（1186）奉召入京、客居临安时。表面写江南春景与闲适，实则隐含壮志未酬的惆怅。' },
        { type: 'keypoint', label: '表面闲适，内藏悲愤', text: '此诗写于陆游罢官六年后重被起用，却未被委以军国重任。诗中“闲作草”“戏分茶”的<strong>闲适背后，是英雄无路的自嘲与无奈</strong>，是放翁特有的“哀而不伤”。' },
        { type: 'list', items: ['背景：淳熙十三年奉召入临安', '处境：闲居客舍，未被重用', '基调：明写春景闲情，暗含壮志难伸'] },
        { type: 'heading', text: '二、原诗（全文）' },
        { type: 'poem', text: '世味年来薄似纱，谁令骑马客京华。\n小楼一夜听春雨，深巷明朝卖杏花。\n矮纸斜行闲作草，晴窗细乳戏分茶。\n素衣莫起风尘叹，犹及清明可到家。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">临安春雨意象</text><rect x="110" y="70" width="110" height="70" rx="8" fill="#e8d9b0" stroke="#cbb89d"/><text x="165" y="110" text-anchor="middle" font-size="12" fill="#5b2c16">小楼春雨</text><text x="270" y="120" font-size="12" fill="#7aa05a">深巷杏花</text><rect x="350" y="70" width="110" height="70" rx="8" fill="#c08168"/><text x="405" y="108" text-anchor="middle" font-size="12" fill="#fff">矮纸作草</text><rect x="500" y="70" width="110" height="70" rx="8" fill="#a8632e"/><text x="555" y="108" text-anchor="middle" font-size="12" fill="#fff">晴窗分茶</text></svg>', caption: '小楼春雨、深巷杏花、矮纸作草、晴窗分茶，组成本诗明丽而闲愁的画面。' },
        { type: 'heading', text: '三、思想内涵' },
        { type: 'paragraph', text: '首联叹世态炎凉、身不由己；颔联“小楼一夜听春雨，深巷明朝卖杏花”以清丽之景写彻夜不眠的孤寂；颈联写白日闲极无聊的雅事；尾联以“素衣”自喻，盼早日归家，暗讽临安风尘。' },
        { type: 'keypoint', label: '名句之妙', text: '“小楼一夜听春雨，深巷明朝卖杏花”<strong>视听结合、以动衬静</strong>，“一夜”暗示诗人彻夜未眠、忧思难遣，明媚春景反衬漂泊孤寂，是放翁七律最负盛名之句。' },
        { type: 'list', items: ['世味薄纱：对人情冷暖的感叹', '一夜听雨：不眠之忧思', '闲作草/戏分茶：英雄无聊的自遣'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">情感脉络</text><rect x="40" y="80" width="140" height="55" rx="8" fill="#7aa05a"/><text x="110" y="112" text-anchor="middle" font-size="13" fill="#fff">叹世炎凉</text><rect x="200" y="80" width="140" height="55" rx="8" fill="#c08168"/><text x="270" y="112" text-anchor="middle" font-size="13" fill="#fff">孤寂不眠</text><rect x="360" y="80" width="140" height="55" rx="8" fill="#a8632e"/><text x="430" y="112" text-anchor="middle" font-size="13" fill="#fff">闲极无聊</text><rect x="520" y="80" width="140" height="55" rx="8" fill="#9c4221"/><text x="590" y="112" text-anchor="middle" font-size="13" fill="#fff">盼归自洁</text><path d="M180 107 L198 107" stroke="#9c4221" stroke-width="3"/><path d="M340 107 L358 107" stroke="#9c4221" stroke-width="3"/><path d="M500 107 L518 107" stroke="#9c4221" stroke-width="3"/></svg>', caption: '情感由叹世炎凉，经孤寂、闲极，终归于盼归自洁的暗讽。' },
        { type: 'heading', text: '四、艺术特色' },
        { type: 'example', label: '炼字赏析', text: '“矮纸斜行闲作草，晴窗细乳戏分茶。”<br>“闲”“戏”二字<strong>点出百无聊赖</strong>：铺开短纸随手写草、对着晴窗细品分茶，看似雅致，实则是志士投闲置散、英雄无路的自嘲，以闲笔写沉痛。' },
        { type: 'table', headers: ['手法', '例句', '效果'], rows: [['反衬', '小楼听雨/卖杏花', '以明丽春景衬孤寂'], ['细节', '闲作草、戏分茶', '写投闲置散之无聊'], ['用典', '素衣莫起风尘叹', '化陆机典，盼归自洁']] },
        { type: 'warn', label: '易错字', text: '“霁（jì）”指雨雪停、天放晴；“矮纸”指短幅纸笺；“细乳”指沏茶时浮起的白色细沫（分茶为宋代茶艺）；“素衣”典出陆机“京洛多风尘，素衣化为缁”，喻操守不改。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">以乐写哀</text><rect x="60" y="80" width="260" height="55" rx="8" fill="#e8d9b0"/><text x="190" y="112" text-anchor="middle" font-size="13" fill="#5b2c16">表层：春雨杏花 闲雅</text><rect x="360" y="80" width="260" height="55" rx="8" fill="#9c4221"/><text x="490" y="112" text-anchor="middle" font-size="13" fill="#fff">内里：英雄无聊 悲愤</text><path d="M320 107 L358 107" stroke="#9c4221" stroke-width="3" marker-end="url(#u5b)"/><text x="340" y="180" text-anchor="middle" font-size="12" fill="#555">闲笔写沉痛，哀而不伤</text><defs><marker id="u5b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '表层明丽闲雅，内里英雄无聊，以乐景写哀情、哀而不伤。' },
        { type: 'tip', label: '学习提示', text: '本诗宜抓住“景美而情郁”的反差，重点背诵颔联。注意“闲”“戏”二字透露的英雄无聊，是读懂全诗情感的关键。' },
        { type: 'heading', text: '五、拓展比较' },
        { type: 'paragraph', text: '同写临安，林升“山外青山楼外楼”直斥偏安，陆游此诗则以婉曲之笔写闲愁，一显一隐，皆见南宋志士对国事的深沉关怀。' },
        { type: 'reading', text: '延伸思考：陆游一生“王师北定中原日”的执念，与“闲作草、戏分茶”的表层闲适形成强烈反差，这种“以乐写哀”对理解南宋士大夫心境有何帮助？' }
      ],
      exercises: [
        { type: 'choice', question: '“小楼一夜听春雨，深巷明朝卖杏花”主要运用的手法是？', options: ['夸张', '视听结合、以动衬静（反衬）', '借代', '排比'], answer: '视听结合、以动衬静（反衬）', explanation: '上句写夜间听雨为听觉，下句写清晨卖花为视觉，“一夜”暗示彻夜未眠；明丽春景反衬诗人漂泊孤寂与忧思难遣，是以乐景写哀情，故选“视听结合、以动衬静（反衬）”。' },
        { type: 'fill', question: '“素衣莫起风尘叹”化用西晋__“京洛多风尘，素衣化为缁”之典，喻操守不改、盼归自洁。', answer: '陆机', explanation: '“素衣”典出陆机《为顾彦先赠妇》：“京洛多风尘，素衣化为缁。”诗人反用其意，说不必感叹京华风尘染白衣，还来得及清明前归家，表达不随波逐流、保持清白的心志。' },
        { type: 'choice', question: '下列对“矮纸斜行闲作草，晴窗细乳戏分茶”中“闲”“戏”理解正确的是？', options: ['表现诗人悠然自得', '以闲笔写英雄投闲置散的自嘲', '赞美临安茶艺', '抒发游山玩水之乐'], answer: '以闲笔写英雄投闲置散的自嘲', explanation: '陆游素怀北伐之志，此时却被闲置临安、百无聊赖。“闲作草”“戏分茶”看似风雅，实则是志士不被重用、徒耗岁月的自嘲，以闲适之笔写沉痛之情，故选此项。' },
        { type: 'fill', question: '“世味年来薄似纱，谁令骑马客__”中空缺处是南宋都城，即今杭州。', answer: '京华', explanation: '“京华”指京城临安（今杭州）。诗人叹近年世态人情淡薄如纱，自问是谁让自己骑马客居京城，暗含身不由己、未被重用的落寞，点出写作背景。' },
        { type: 'choice', question: '《临安春雨初霁》的整体情感特征是？', options: ['直斥偏安、激愤淋漓', '明写闲适、内藏壮志难伸的悲愤（哀而不伤）', '欢快愉悦', '超脱物外的禅意'], answer: '明写闲适、内藏壮志难伸的悲愤（哀而不伤）', explanation: '此诗表面写春雨杏花、作草分茶的闲适，骨子里却是英雄无路的自嘲与不被重用的悲愤，怨而不怒、哀而不伤，与林升直斥偏安的直露不同，故选此项。' }
      ]
    }

  );
})();
