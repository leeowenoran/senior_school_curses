/* 语文 · 高考复习 · 二、古诗文阅读（zt2）：文言文阅读、古代诗歌阅读、名篇名句默写 */
(function () {
  var v = gzGetVolume('chinese', 'zt2');
  if (!v) return;

  /* —— 子板块 1：文言文阅读 —— */
  v.points.push({
    id: 'zt2-classical',
    name: '文言文阅读',
    chapter: '二、古诗文阅读',
    difficulty: '较难',
    content: [
      { type: 'heading', text: '一、题型概览' },
      { type: 'paragraph', text: '文言文阅读多选人物传记、议论性散文、游记等。考查在语境中理解文言的能力，兼顾字词积累与整体把握，是传统文化素养的重要体现。' },
      { type: 'list', items: [
        '断句题：为文言语句划分停顿',
        '实词题：辨析一词多义、古今异义、词类活用',
        '虚词题：理解之乎者也等常见虚词的用法',
        '文意概括题：筛选并归纳文中信息',
        '翻译题：直译为主，落实关键实词与句式'
      ] },
      { type: 'keypoint', text: '<strong>翻译六字诀</strong>：留（专有名词保留）、补（省略成分补全）、删（无义虚词略去）、换（古今异义替换）、调（倒装句式调整）、变（活用词义变通）。以直译为主、意译为辅。' },
      { type: 'table', headers: ['考点', '常见陷阱', '应对'], rows: [
        ['实词', '以今律古、忽略活用', '回归语境，联系课内迁移'],
        ['断句', '割裂语意、误断虚词', '抓对话标志与句式对称'],
        ['翻译', '漏译关键词、句式错乱', '落实得分点逐字对应']
      ] },
      { type: 'tip', text: '<strong>断句技巧</strong>：先看名词代词定主语，再找对话词"曰""云"，利用对偶排比找节奏，虚词"夫盖故则"常领起句首。多在课内文言中培养语感。' },
      { type: 'warn', text: '易错点：把现代汉语义强加给文言词（如"妻子"古指妻与子）；翻译时漏掉活用与特殊句式；概括题张冠李戴人物事件。' },
      { type: 'example', text: '示例（高考风格）：下列文句断句正确的一项是（ ）。思路：先找主语与动词，再看"曰"后断句、对偶句对称停顿，排除割裂语意的选项，最后代入通读检验。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f1e8"/><text x="20" y="32" font-size="18" fill="#8a6d3b" font-weight="bold">文言文阅读 · 五大考点</text><rect x="30" y="70" width="110" height="56" rx="8" fill="#e9dcc0" stroke="#8a6d3b"/><text x="85" y="103" font-size="13" fill="#5a4724" text-anchor="middle">断句</text><rect x="160" y="70" width="110" height="56" rx="8" fill="#e9dcc0" stroke="#8a6d3b"/><text x="215" y="103" font-size="13" fill="#5a4724" text-anchor="middle">实词</text><rect x="290" y="70" width="110" height="56" rx="8" fill="#e9dcc0" stroke="#8a6d3b"/><text x="345" y="103" font-size="13" fill="#5a4724" text-anchor="middle">虚词</text><rect x="420" y="70" width="110" height="56" rx="8" fill="#e9dcc0" stroke="#8a6d3b"/><text x="475" y="103" font-size="13" fill="#5a4724" text-anchor="middle">概括</text><rect x="550" y="70" width="110" height="56" rx="8" fill="#e9dcc0" stroke="#8a6d3b"/><text x="605" y="103" font-size="13" fill="#5a4724" text-anchor="middle">翻译</text></svg>', caption: '文言文阅读围绕断句、实词、虚词、文意概括、翻译五个考点展开。' }
    ],
    exercises: [
      { type: 'choice', question: '下列加点词古今意义不同的一项是（ ）。', options: ['山川', '妻子', '风雨', '日月'], answer: '妻子', explanation: '文言中"妻子"指妻与子女，现代汉语仅指配偶，属古今异义；其余词语古今基本同义，是文言文实词题常挖的古今异义陷阱。' },
      { type: 'choice', question: '文言翻译应坚持的原则是（ ）。', options: ['意译为主', '直译为主、意译为辅', '随意增删', '只译虚词'], answer: '直译为主、意译为辅', explanation: '文言翻译以直译为主，尽量逐字对应落实得分点；只有在直译不通顺时才用意译调整，不能随意增删或只译虚词。' },
      { type: 'fill', question: '断句时可利用对偶与______句式寻找节奏。', answer: '排比', explanation: '文言多对偶、排比，句式整齐对称，可作为断句的重要依据；此外对话词"曰""云"、发语词"夫""盖"也常提示句读位置。' },
      { type: 'choice', question: '下列对文言句式判断正确的是（ ）。', options: ['"蚓无爪牙之利"是判断句', '"沛公军霸上"是省略句', '"甚矣汝之不惠"是常序句', '"吾谁与归"是常序句'], answer: '"沛公军霸上"是省略句', explanation: '"沛公军霸上"省略介词"于"，意为驻军于霸上，是省略句；其余分别属定语后置、主谓倒装、宾语前置，均非正常语序。' },
      { type: 'fill', question: '文意概括题作答时须注意避免______人物与事件。', answer: '张冠李戴', explanation: '文言传记人物众多、事件交错，概括题常把甲的事安到乙身上设误，答题须回到原文核对人物与事件的对应关系，防止张冠李戴。' }
    ]
  });

  /* —— 子板块 2：古代诗歌阅读 —— */
  v.points.push({
    id: 'zt2-poem',
    name: '古代诗歌阅读',
    chapter: '二、古诗文阅读',
    difficulty: '较难',
    content: [
      { type: 'heading', text: '一、题型概览' },
      { type: 'paragraph', text: '古代诗歌阅读考查对诗词的鉴赏能力，材料多为唐诗宋词及少数元曲、诗经楚辞。重点在形象、语言、表达技巧与思想情感的综合把握。' },
      { type: 'list', items: [
        '分析诗歌意境与画面',
        '概括思想情感与主旨',
        '赏析关键句子（炼字、炼句）',
        '辨别修辞与表现手法',
        '比较阅读与综合评价'
      ] },
      { type: 'keypoint', text: '<strong>赏句三步</strong>：先释句意（表层写了什么），再析手法（修辞、动静、虚实、衬托等），后点情感（传达了何种心境与主旨）。炼字题还要说出"换不得"的理由。' },
      { type: 'table', headers: ['手法', '示例', '效果'], rows: [
        ['借景抒情', '孤帆远影碧空尽', '寓情于景，含蓄深远'],
        ['对比衬托', '朱门酒肉臭', '突出社会矛盾'],
        ['虚实结合', '恍惊起而长嗟', '拓展想象空间']
      ] },
      { type: 'tip', text: '<strong>情感词库</strong>：忧国忧民、怀才不遇、思乡念亲、离愁别绪、归隐闲适、物是人非、壮志难酬。先判题材（咏史、边塞、田园、闺怨），再对应典型情感。' },
      { type: 'warn', text: '易错点：把"作者身份"等同于"诗歌情感"（如误以为所有贬谪诗都只写悲）；赏析只答术语不结合诗句；把景物特点答成情感。' },
      { type: 'example', text: '示例（高考风格）：请简要赏析"春风又绿江南岸"中"绿"字的妙处。思路：先说"绿"由形容词变作动词，再析其化静为动、写出春回大地的生机，最后点出寄托的思乡之情。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef6f4"/><text x="20" y="32" font-size="18" fill="#2f7d6f" font-weight="bold">古代诗歌阅读 · 鉴赏四步</text><rect x="30" y="70" width="140" height="56" rx="8" fill="#d4ece6" stroke="#2f7d6f"/><text x="100" y="103" font-size="13" fill="#1f4f47" text-anchor="middle">明题材</text><rect x="200" y="70" width="140" height="56" rx="8" fill="#d4ece6" stroke="#2f7d6f"/><text x="270" y="103" font-size="13" fill="#1f4f47" text-anchor="middle">析意境</text><rect x="370" y="70" width="140" height="56" rx="8" fill="#d4ece6" stroke="#2f7d6f"/><text x="440" y="103" font-size="13" fill="#1f4f47" text-anchor="middle">赏手法</text><rect x="540" y="70" width="140" height="56" rx="8" fill="#e9f3e3" stroke="#3f7d1e"/><text x="610" y="103" font-size="13" fill="#2e3a22" text-anchor="middle">悟情感</text></svg>', caption: '诗歌鉴赏按"明题材—析意境—赏手法—悟情感"四步推进。' }
    ],
    exercises: [
      { type: 'choice', question: '赏析诗句表达效果的正确顺序是（ ）。', options: ['只答情感', '释句意加析手法加点情感', '只抄原句', '只说修辞名称'], answer: '释句意加析手法加点情感', explanation: '赏句题应三步走：先解释诗句表层写了什么，再分析所用手法，最后点明传达的情感与主旨，缺一不可，不能只答术语或只写情感。' },
      { type: 'choice', question: '下列诗句主要运用借景抒情的是（ ）。', options: ['床前明月光', '孤帆远影碧空尽，唯见长江天际流', '白发三千丈', '两个黄鹂鸣翠柳'], answer: '孤帆远影碧空尽，唯见长江天际流', explanation: '该句借孤帆远去、江水悠悠之景，含蓄传达送别友人的怅惘，是寓情于景的典型；其余或写物象、或用夸张、或写初春，抒情意味较弱。' },
      { type: 'fill', question: '炼字题除说妙处外，还要说明该字"______不得"的理由。', answer: '换', explanation: '炼字鉴赏须指出这个字为什么精准传神、若换成别的字就失去了何种意味，即说明"换不得"，才能体现对语言的深入品味。' },
      { type: 'choice', question: '边塞诗常见的思想情感是（ ）。', options: ['闲适恬淡', '忧国建功与思乡', '爱情甜蜜', '田园之乐'], answer: '忧国建功与思乡', explanation: '边塞诗多写将士报国壮志、戍边艰苦与对家乡亲人的思念，兼具豪情与乡愁；闲适恬淡、田园之乐属山水田园诗典型情感。' },
      { type: 'fill', question: '赏析意境时，应先概括画面特点，再分析其营造的______氛围。', answer: '情感或意境', explanation: '意境赏析须先描摹画面、概括特点（如萧瑟、空灵、雄浑），再说明这些意象共同营造的情感氛围，从而通向诗歌主旨。' }
    ]
  });

  /* —— 子板块 3：名篇名句默写 —— */
  v.points.push({
    id: 'zt2-recite',
    name: '名篇名句默写',
    chapter: '二、古诗文阅读',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、题型概览' },
      { type: 'paragraph', text: '默写题考查古诗文的背诵与理解，近年来越多采用"理解性默写"：根据题干给出的语境提示填写对应句子，既考记忆也考对文意的理解。' },
      { type: 'list', items: [
        '直接默写：给出上句写下句或反之',
        '理解性默写：据语境提示定位句子',
        '意象型默写：围绕某一意象归集名句',
        '比较型默写：两篇中写法相似的句子'
      ] },
      { type: 'keypoint', text: '<strong>理解性默写三查</strong>：一查题干指向哪篇哪句，二查易错字是否写对（如"唯"与"惟"、"粟"与"栗"），三查通假字是否按原文书写。' },
      { type: 'table', headers: ['易错类型', '示例', '正字'], rows: [
        ['通假字', '匪来贸丝', '匪（非）'],
        ['同音混淆', '惟江上之清风', '惟'],
        ['形近混淆', '形单影只', '只（祇）']
      ] },
      { type: 'tip', text: '<strong>备考策略</strong>：按册目整理高频篇目，建立"语境—句子"对应关系表；重点攻克64篇（或新课标推荐篇目）中的借景抒情句、议论句、主旨句。' },
      { type: 'warn', text: '易错点：理解性默写张冠李戴（把甲篇句子填到乙篇语境）；写错别字尤其是通假字、形近字失分；只背不理解导致语境一对就懵。' },
      { type: 'example', text: '示例（高考风格）：杜甫《登高》中"______，______"两句，以落叶与江水写出韶光易逝、壮志难酬的悲凉。思路：锁定"落叶""江水""悲凉"三个提示，定位到"无边落木萧萧下，不尽长江滚滚来"。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f3f0fa"/><text x="20" y="32" font-size="18" fill="#5d3f9e" font-weight="bold">名篇名句默写 · 两类题型</text><rect x="60" y="70" width="240" height="80" rx="10" fill="#e2d9f3" stroke="#5d3f9e"/><text x="180" y="105" font-size="14" fill="#3a2563" text-anchor="middle">直接默写</text><text x="180" y="128" font-size="12" fill="#3a2563" text-anchor="middle">上下句对接</text><rect x="380" y="70" width="240" height="80" rx="10" fill="#e2d9f3" stroke="#5d3f9e"/><text x="500" y="105" font-size="14" fill="#3a2563" text-anchor="middle">理解性默写</text><text x="500" y="128" font-size="12" fill="#3a2563" text-anchor="middle">据语境定位</text></svg>', caption: '默写从直接对接走向理解性定位，更重语境理解。' }
    ],
    exercises: [
      { type: 'choice', question: '理解性默写最关键的审题步骤是（ ）。', options: ['直接背写', '先定位篇目与句子', '随意填写', '只看前句'], answer: '先定位篇目与句子', explanation: '理解性默写须先根据题干的语境提示（意象、情感、手法）锁定对应篇目与具体句子，再准确书写，避免张冠李戴。' },
      { type: 'fill', question: '《论语》中"______来贸丝"的"匪"是通假字，本字为"非"。', answer: '匪', explanation: '原文"匪来贸丝，来即我谋"，"匪"通"非"，意为"不是"。默写通假字须按教材原文书写，不能自作主张改成本字。' },
      { type: 'choice', question: '下列句子书写完全正确的一项是（ ）。', options: ['唯江上之清风', '惟江上之清风', '维江上之清风', '唯江上之清峰'], answer: '惟江上之清风', explanation: '苏轼《赤壁赋》原句为"惟江上之清风，与山间之明月"，"惟"表"只有"，易与"唯""维"混淆，默写须按原文用字。' },
      { type: 'fill', question: '意象型默写要求围绕同一______归集多篇名句。', answer: '意象', explanation: '意象型默写给出"月""柳""楼"等意象，要求写出不同篇目中相关名句，考查对意象文化内涵的横向积累与迁移能力。' },
      { type: 'choice', question: '避免默写错别字的根本方法是（ ）。', options: ['只背不写', '边背边写、建立正字表', '临场涂改', '依赖拼音'], answer: '边背边写、建立正字表', explanation: '默写失分多在形近字、通假字，最有效的方法是动笔书写、把易错字整理成正字表反复巩固，而非只动口背诵。' }
    ]
  });
})();
