(function () {
  var v = gzGetVolume('chinese', 'zt2');
  if (!v) return;
  v.points.push(

    /* ===================== 第二部分 · 古代诗歌鉴赏（一）：形象与语言 ===================== */

    { id: 'zt2-u2-l1', name: '古代诗歌鉴赏（一）：鉴赏诗歌形象与语言', author: '高考复习', chapter: '古代诗歌鉴赏（一）· 形象与语言', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、鉴赏诗歌形象（考点一，约4-5分）' },
        { type: 'paragraph', text: '诗歌形象是诗人主观情感与客观物象交融的产物，是理解诗歌的“门”。高考形象题要求概括诗中形象的特点，并分析其承载的思想情感。形象可分为人物、景物、事物三大类。' },
        { type: 'keypoint', label: '形象三类型', text: '<strong>人物形象</strong>（抒情主人公与诗中人）；<strong>景物形象</strong>（意象与由意象构成的意境）；<strong>事物形象</strong>（咏物诗所咏之物的外在特征与内在品格）。答题的总纲是：<strong>抓特点 + 析情感</strong>。' },
        { type: 'heading', text: '（一）人物形象' },
        { type: 'paragraph', text: '人物形象分两类：一是抒情主人公形象（即诗人自我，如陆游的报国无门、苏轼的豁达）；二是诗中刻画的人物形象（如《琵琶行》的琵琶女、《赤壁怀古》的周瑜）。' },
        { type: 'list', items: ['定位身份：是诗人自我，还是作品中的人物', '概括性格特征：结合动作、神态、处境等词语', '挖掘思想情感：形象寄托了诗人怎样的志趣与感慨', '规范表述：身份 + 性格特征 + 思想情感'] },
        { type: 'example', label: '人物示范', text: '苏轼《念奴娇·赤壁怀古》：“羽扇纶巾，谈笑间，樯橹灰飞烟灭。”<br>刻画了周瑜<strong>从容儒雅、年轻有为、指挥若定</strong>的儒将形象；而篇末“早生华发”的“我”则是<strong>壮志未酬、自嘲老大</strong>的抒情主人公，二者对照寄寓怀才不遇之慨。' },
        { type: 'heading', text: '（二）景物形象（意象与意境）' },
        { type: 'paragraph', text: '景物形象由“意象”（饱含情感的单个物象，如月、柳、雁）组合成“意境”（整体画面与氛围）。鉴赏时要先看意象的特点与组合方式，再概括意境氛围，最后点明情感。' },
        { type: 'list', items: ['描绘画面：用散文化语言再现诗中图景', '概括氛围：用术语点出意境特点（如凄清、雄浑）', '分析情感：景与情如何交融，托何情', '规范表述：描绘画面 + 概括氛围 + 分析情感'] },
        { type: 'table', headers: ['意境术语', '特征与示例'], rows: [['雄浑壮阔', '气象宏大、气势磅礴，如“大漠孤烟直，长河落日圆”'], ['高远辽阔', '天地开阔、意境辽远，如“念天地之悠悠”'], ['宁静恬淡', '平和闲适、淡泊悠远，如“采菊东篱下”'], ['清幽明净', '清冷幽静、明净爽洁，如“明月松间照”'], ['凄清冷寂', '清冷孤寂、萧瑟幽寒，如“孤舟蓑笠翁”'], ['萧瑟凄凉', '衰败荒凉、悲凉伤感，如“无边落木萧萧下”'], ['孤寂悲凉', '孤独落寞、悲凉无依，如“寻寻觅觅，冷冷清清”'], ['华美绮丽', '辞藻华丽、色彩绚烂，如“云树绕堤沙”']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">诗歌形象三类型</text><rect x="270" y="48" width="140" height="46" rx="8" fill="#9c4221"/><text x="340" y="76" text-anchor="middle" font-size="14" fill="#fff">诗歌形象</text><path d="M340 94 L150 130" stroke="#9c4221" stroke-width="2.5"/><path d="M340 94 L340 130" stroke="#9c4221" stroke-width="2.5"/><path d="M340 94 L530 130" stroke="#9c4221" stroke-width="2.5"/><rect x="60" y="130" width="180" height="50" rx="8" fill="#7aa05a"/><text x="150" y="160" text-anchor="middle" font-size="13" fill="#fff">人物形象</text><rect x="250" y="130" width="180" height="50" rx="8" fill="#c08168"/><text x="340" y="160" text-anchor="middle" font-size="13" fill="#fff">景物形象</text><rect x="440" y="130" width="180" height="50" rx="8" fill="#a8632e"/><text x="530" y="160" text-anchor="middle" font-size="13" fill="#fff">事物形象</text><text x="150" y="205" font-size="12" fill="#555">抒情主人公与诗中人</text><text x="340" y="205" font-size="12" fill="#555">意象与意境</text><text x="530" y="205" font-size="12" fill="#555">咏物言之志</text></svg>', caption: '诗歌形象分人物、景物、事物三类，鉴赏统一遵循“抓特点+析情感”的总纲。' },
        { type: 'heading', text: '（三）事物形象（咏物诗）' },
        { type: 'paragraph', text: '咏物诗借物抒怀，所咏之物既是客观的（外在形色习性），又是象征的（内在品格、君子之德）。答题须由物及人、由表及里。' },
        { type: 'list', items: ['写物之外在特点：形态、色泽、习性、处境', '挖物之内在精神：象征的高洁、坚贞、孤傲等品格', '明寄托情感：诗人借物自况或讽世的态度', '规范表述：外在特点 + 内在精神（象征义）+ 寄托情感'] },
        { type: 'example', label: '事物示范', text: '于谦《石灰吟》：“粉骨碎身浑不怕，要留清白在人间。”<br>物之特点是<strong>经千锤万凿、烈火焚烧而不改</strong>；内在精神象征<strong>坚贞不屈、清白磊落</strong>的品格；寄托诗人<strong>坚守节操、不惜牺牲</strong>的报国之志。' },
        { type: 'warn', label: '易错提醒', text: '“意象”与“意境”不可混为一谈：<strong>意象是单个物象</strong>（如“月”“柳”），<strong>意境是由多个意象营造的整体氛围</strong>。答题若被问“意境”，须概括整体画面与情绪，不能只罗列意象。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">常见意境氛围术语图谱</text><rect x="40" y="55" width="145" height="44" rx="6" fill="#9c4221"/><text x="112" y="82" text-anchor="middle" font-size="13" fill="#fff">雄浑壮阔</text><rect x="195" y="55" width="145" height="44" rx="6" fill="#c08168"/><text x="267" y="82" text-anchor="middle" font-size="13" fill="#fff">高远辽阔</text><rect x="350" y="55" width="145" height="44" rx="6" fill="#a8632e"/><text x="422" y="82" text-anchor="middle" font-size="13" fill="#fff">宁静恬淡</text><rect x="505" y="55" width="145" height="44" rx="6" fill="#7aa05a"/><text x="577" y="82" text-anchor="middle" font-size="13" fill="#fff">清幽明净</text><rect x="40" y="115" width="145" height="44" rx="6" fill="#7a6fae"/><text x="112" y="142" text-anchor="middle" font-size="13" fill="#fff">凄清冷寂</text><rect x="195" y="115" width="145" height="44" rx="6" fill="#c0473a"/><text x="267" y="142" text-anchor="middle" font-size="13" fill="#fff">萧瑟凄凉</text><rect x="350" y="115" width="145" height="44" rx="6" fill="#9c4221"/><text x="422" y="142" text-anchor="middle" font-size="13" fill="#fff">孤寂悲凉</text><rect x="505" y="115" width="145" height="44" rx="6" fill="#c08168"/><text x="577" y="142" text-anchor="middle" font-size="13" fill="#fff">华美绮丽</text><text x="340" y="200" text-anchor="middle" font-size="13" fill="#555">答题时先描画面，再就近选用术语定调</text><text x="340" y="235" text-anchor="middle" font-size="12" fill="#9c4221">术语须与诗中景象匹配，切忌贴错标签</text></svg>', caption: '八类常见意境术语，答题时据画面就近选用，并简要阐释为何匹配。' },
        { type: 'heading', text: '二、鉴赏诗歌语言（考点二，约4-5分）' },
        { type: 'keypoint', label: '语言鉴赏三层面', text: '<strong>炼字</strong>（赏一字之妙）；<strong>炼句</strong>（赏一句之工）；<strong>语言风格</strong>（评全篇特色）。三者由点到句再到篇，构成语言鉴赏的完整链条。' },
        { type: 'heading', text: '（一）炼字' },
        { type: 'paragraph', text: '炼字多考动词、形容词、数词、副词等“诗眼”“词眼”。赏析某字的妙处，要由字义到景象再到情感层层推进。' },
        { type: 'list', items: ['释含义：解释该字在句中的意思（含活用、修辞）', '描景象：展开想象，描摹该字带来的画面', '点情境表情感：烘托了什么氛围，传达何种情感', '规范表述：释含义 + 描景象 + 表情感'] },
        { type: 'example', label: '炼字示范', text: '王安石《泊船瓜洲》：“春风又绿江南岸。”<br>“绿”本为形容词，此处<strong>活用作使动动词</strong>；含义是“吹绿”；描绘出春风拂过、草木转青的生机画面；传达诗人<strong>喜悦与思归</strong>交织的复杂心绪，被誉为炼字典范。' },
        { type: 'heading', text: '（二）炼句' },
        { type: 'paragraph', text: '炼句多考千古名句，要求赏析其表达效果。要从内容、手法、情感、结构多角度作答。' },
        { type: 'list', items: ['内容理解：该句写了什么，在篇中位置', '手法分析：用了何种修辞或表现手法', '情感表达：抒发了什么思想感情', '结构作用：统领、过渡、照应或收束全篇'] },
        { type: 'heading', text: '（三）语言风格' },
        { type: 'paragraph', text: '语言风格指全诗的语言特色。答题先用术语定位，再结合具体诗句佐证，最后说表达效果。' },
        { type: 'table', headers: ['语言风格', '代表诗人'], rows: [['豪放雄奇', '李白'], ['沉郁顿挫', '杜甫'], ['平淡自然', '陶渊明'], ['婉约缠绵', '柳永、李清照'], ['含蓄蕴藉', '李商隐'], ['清新明快', '王维'], ['幽默讽刺', '讽喻诗（如白居易新乐府）'], ['慷慨悲壮', '辛弃疾词、边塞诗']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">炼字三步法</text><rect x="40" y="65" width="180" height="55" rx="8" fill="#7aa05a"/><text x="130" y="92" text-anchor="middle" font-size="13" fill="#fff">释含义</text><text x="130" y="112" text-anchor="middle" font-size="11" fill="#fff">解字义</text><rect x="250" y="65" width="180" height="55" rx="8" fill="#c08168"/><text x="340" y="92" text-anchor="middle" font-size="13" fill="#fff">描景象</text><text x="340" y="112" text-anchor="middle" font-size="11" fill="#fff">想画面</text><rect x="460" y="65" width="180" height="55" rx="8" fill="#9c4221"/><text x="550" y="92" text-anchor="middle" font-size="13" fill="#fff">表情感</text><text x="550" y="112" text-anchor="middle" font-size="11" fill="#fff">点情境</text><path d="M220 92 L248 92" stroke="#9c4221" stroke-width="3"/><path d="M430 92 L458 92" stroke="#9c4221" stroke-width="3"/><text x="340" y="165" text-anchor="middle" font-size="13" fill="#555">字义→画面→情感，三步环环相扣</text></svg>', caption: '炼字三步：释含义、描景象、表情感，由字义递进到情感，缺一不可。' },
        { type: 'tip', label: '学习提示', text: '语言鉴赏要建立“术语库”：把意境术语与语言风格术语分类记牢，考场上先判断题型（炼字/炼句/风格），再套用对应答题角度，避免答非所问。' },
        { type: 'reading', text: '延伸思考：同写“月”，李白“举杯邀明月”与苏轼“千里共婵娟”所造意境与寄情有何不同？请结合形象与语言两层，各用一组术语说明。' }
      ],
      exercises: [
        { type: 'choice', question: '下列关于诗歌“形象”类型的说法，正确的是？', options: ['诗歌形象仅指自然景物', '人物形象包括抒情主人公与诗中人', '事物形象只出现在山水诗', '意象与意境是同一概念'], answer: '人物形象包括抒情主人公与诗中人', explanation: '诗歌形象分人物、景物、事物三类。人物形象又包括抒情主人公形象（诗人自我）与诗中刻画的人物形象（如周瑜、琵琶女），故选项正确。诗歌形象不止自然景物，事物形象多见于咏物诗而非山水诗，意象是单个物象、意境是整体氛围，二者并非同一概念，故其余选项错误。' },
        { type: 'fill', question: '“大漠孤烟直，长河落日圆”所营造的意境，可用术语“__”概括（气象宏大、气势磅礴一类）。', answer: '雄浑壮阔', explanation: '题干考查常见意境氛围术语。该联写边塞大漠中孤烟直上、长河映落日的宏大景象，气象磅礴、开阔雄健，正属“雄浑壮阔”一类。同类术语还有高远辽阔、清幽明净等，据画面就近选用并简要阐释即可，故填“雄浑壮阔”。' },
        { type: 'choice', question: '赏析炼字“春风又绿江南岸”的“绿”字，第一步应当？', options: ['直接说表达思乡之情', '释含义（解释字义与活用）', '先评价全诗风格', '只描摹江南春景'], answer: '释含义（解释字义与活用）', explanation: '炼字答题三步为“释含义—描景象—表情感”。第一步须解释该字在句中的意思，此处“绿”本为形容词，活用为使动动词，意为“吹绿”。先释义再描景、最后点情，顺序不可颠倒。直接说情感或只描景都跳过了关键的第一步，故正确做法是先“释含义”。' },
        { type: 'fill', question: '陶渊明诗风“平淡自然”，杜甫诗风“沉郁顿挫”，李白诗风则被称为“__”。', answer: '豪放雄奇', explanation: '题干考查常见语言风格术语与代表诗人的对应。李白诗歌想象奇特、气势奔放，风格被称为“豪放雄奇”；杜甫为“沉郁顿挫”，陶渊明为“平淡自然”，王维为“清新明快”，李商隐为“含蓄蕴藉”。故填“豪放雄奇”。' },
        { type: 'choice', question: '下列对“意境”与“意象”关系的表述，正确的是？', options: ['意象是整体氛围，意境是单个物象', '意境由多个意象组合营造而成', '意象与意境毫无关联', '一首诗只能有一个意象'], answer: '意境由多个意象组合营造而成', explanation: '意象是饱含情感的单个物象（如月、柳、雁），意境则是由多个意象组合而成的整体画面与氛围。二者是点与面的关系，并非孤立无涉。说“意象是整体氛围”颠倒了二者，说“只能有一个意象”也不符实际，故正确表述为“意境由多个意象组合营造而成”。' }
      ]
    },

    /* ===================== 第二部分 · 古代诗歌鉴赏（二）：技巧与情感 ===================== */

    { id: 'zt2-u2-l2', name: '古代诗歌鉴赏（二）：表达技巧与思想内容评价', author: '高考复习', chapter: '古代诗歌鉴赏（二）· 技巧与情感', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、鉴赏诗歌表达技巧（考点三，约5分）' },
        { type: 'paragraph', text: '表达技巧是诗人表情达意的手段。高考要求辨识并分析技巧，常考修辞、表现手法、表达方式与结构技巧四大层面。答题核心是先“指名手法”，再“结合诗句分析”，最后“说效果情感”。' },
        { type: 'keypoint', label: '表达技巧四层面', text: '<strong>修辞手法</strong>（比喻、拟人等）；<strong>表现手法</strong>（对比、衬托、象征等）；<strong>表达方式</strong>（描写、抒情、议论）；<strong>结构技巧</strong>（开篇、过渡、结尾的章法）。四者常综合使用，须逐层拆解。' },
        { type: 'heading', text: '（一）修辞手法' },
        { type: 'list', items: ['比喻、拟人、夸张、借代', '对偶、双关、用典、设问、反问', '互文、通感、反复、顶真', '识别方法：看词语是否“以此物写彼物”或“反常搭配”'] },
        { type: 'table', headers: ['修辞手法', '示例'], rows: [['比喻', '“恰似一江春水向东流”'], ['拟人', '“感时花溅泪，恨别鸟惊心”'], ['夸张', '“白发三千丈，缘愁似个长”'], ['借代', '“朱门酒肉臭，路有冻死骨”'], ['对偶', '“无边落木萧萧下，不尽长江滚滚来”'], ['双关', '“东边日出西边雨，道是无晴却有晴”'], ['用典', '“东风不与周郎便，铜雀春深锁二乔”'], ['设问/反问', '“问君能有几多愁？恰似一江春水向东流”']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">表达技巧四层面</text><rect x="30" y="55" width="290" height="50" rx="8" fill="#9c4221"/><text x="175" y="85" text-anchor="middle" font-size="14" fill="#fff">修辞手法</text><rect x="360" y="55" width="290" height="50" rx="8" fill="#c08168"/><text x="505" y="85" text-anchor="middle" font-size="14" fill="#fff">表现手法</text><rect x="30" y="125" width="290" height="50" rx="8" fill="#7aa05a"/><text x="175" y="155" text-anchor="middle" font-size="14" fill="#fff">表达方式</text><rect x="360" y="125" width="290" height="50" rx="8" fill="#a8632e"/><text x="505" y="155" text-anchor="middle" font-size="14" fill="#fff">结构技巧</text><text x="30" y="205" font-size="12" fill="#555">比喻拟人夸张借代对偶用典…</text><text x="360" y="205" font-size="12" fill="#555">对比衬托渲染象征托物言志…</text><text x="30" y="230" font-size="12" fill="#555">描写、抒情（直接/间接）、议论</text><text x="360" y="230" font-size="12" fill="#555">起兴点题、承上启下、以景结情…</text><text x="340" y="268" text-anchor="middle" font-size="12" fill="#9c4221">四层常综合，逐层拆解方见全貌</text></svg>', caption: '表达技巧分修辞、表现、表达、结构四层面，鉴赏时逐层指名，避免笼统。' },
        { type: 'heading', text: '（二）表现手法' },
        { type: 'paragraph', text: '表现手法侧重艺术构思：对比、衬托（正衬/反衬）、渲染、烘托、象征、联想、想象、虚实结合、动静结合、点面结合、托物言志、借古讽今、以小见大、抑扬结合等。' },
        { type: 'list', items: ['对比：正反事物并列突出反差', '衬托：以旁物陪衬主物（正衬同调、反衬反调）', '渲染烘托：浓墨铺陈氛围，侧面托出主体', '托物言志、借古讽今、虚实动静结合'] },
        { type: 'example', label: '表现手法示范', text: '《诗经·采薇》：“昔我往矣，杨柳依依；今我来思，雨雪霏霏。”<br>以<strong>乐景（杨柳）写哀、以哀景（雨雪）写哀</strong>，运用<strong>反衬与对比</strong>，把戍卒去时青春、归时憔悴的悲苦反差推向极致，情景反差愈显其哀。' },
        { type: 'heading', text: '（三）表达方式' },
        { type: 'paragraph', text: '诗歌以抒情为主，亦兼描写与议论。描写分正面/侧面、白描/细描、感官角度；抒情分直接抒情与间接抒情（借景抒情、寓情于景、借物抒情、用典抒情）；议论则点明主旨。' },
        { type: 'list', items: ['直接抒情：直抒胸臆（“安能摧眉折腰事权贵”）', '借景抒情：情寓景中，情景交融', '寓情于景：将情完全融入景物描写', '借物抒情与用典抒情：托物、借古以寄怀'] },
        { type: 'heading', text: '（四）结构技巧' },
        { type: 'paragraph', text: '结构技巧关乎章法：开篇有起兴、点题、设问；中间有承上启下；结尾有以景结情、升华主旨、卒章显志、照应开头。' },
        { type: 'list', items: ['开篇：起兴引出、开门点题、设问领起', '过渡：承上启下，使脉络连贯', '结尾：以景结情、卒章显志、照应开头', '识别方法：看句在篇中的位置与作用'] },
        { type: 'keypoint', label: '答题格式', text: '鉴赏表达技巧的<strong>黄金三步</strong>：①<strong>点明手法名称</strong>（含小类）；②<strong>结合诗句具体分析</strong>（指出哪句用了何法）；③<strong>说明表达效果与思想情感</strong>。三者顺序固定，缺一不可。' },
        { type: 'example', label: '答题示范', text: '问：怎样写“愁”？<br>答：运用<strong>比喻</strong>（手法），将愁绪比作“一江春水”（分析），化抽象为具体，极写愁之绵长无尽（效果），抒亡国之痛（情感）。此即“手法+分析+效果情感”的规范作答。' },
        { type: 'table', headers: ['结构技巧', '作用'], rows: [['起兴', '借物起头，引出所咏之辞'], ['承上启下', '过渡衔接，使文脉贯通'], ['以景结情', '篇末写景，余味悠长'], ['卒章显志', '结尾点明中心主旨'], ['照应开头', '首尾呼应，结构严谨']] },
        { type: 'warn', label: '易错提醒', text: '手法名须<strong>具体到小类</strong>。只答“用了修辞手法”不得分，要答清是“比喻”还是“拟人”；衬托要分清“正衬”还是“反衬”；抒情要分清“借景抒情”还是“托物言志”。笼统作答是失分主因。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">表达技巧答题格式框</text><rect x="30" y="60" width="190" height="55" rx="8" fill="#9c4221"/><text x="125" y="88" text-anchor="middle" font-size="13" fill="#fff">点明手法名称</text><rect x="245" y="60" width="190" height="55" rx="8" fill="#c08168"/><text x="340" y="88" text-anchor="middle" font-size="13" fill="#fff">结合诗句分析</text><rect x="460" y="60" width="190" height="55" rx="8" fill="#7aa05a"/><text x="555" y="88" text-anchor="middle" font-size="13" fill="#fff">效果与情感</text><path d="M220 87 L243 87" stroke="#9c4221" stroke-width="3"/><path d="M435 87 L458 87" stroke="#9c4221" stroke-width="3"/><text x="340" y="155" text-anchor="middle" font-size="13" fill="#555">手法要具体到小类，分析要落到实处</text></svg>', caption: '技巧鉴赏三步走：点名手法→结合诗句→说效果情感，手法须具体到小类。' },
        { type: 'heading', text: '二、评价诗歌思想内容与观点态度（考点四，约4分）' },
        { type: 'paragraph', text: '本考点要求概括诗歌的情感类型，评价作者的观点态度。诗歌情感虽千变万化，却可归为若干常见类型，须结合文本精准定位。' },
        { type: 'keypoint', label: '情感七大类', text: '<strong>忧国伤时、建功报国、人生感慨、思乡怀人、离别之情、爱情婚姻、咏史怀古</strong>。一首诗常兼多类（如杜甫既忧国又伤己），须<strong>多角度概括</strong>，不可只答一点。' },
        { type: 'table', headers: ['情感类型', '简要表现'], rows: [['忧国伤时', '揭露腐败、同情疾苦、忧心国运、讽刺时政'], ['建功报国', '渴望建功、怀才不遇、年华老去壮志难酬'], ['人生感慨', '人生短暂、仕途失意、坚守节操、归隐闲适'], ['思乡怀人', '羁旅孤寂、思亲念友、眷恋故乡'], ['离别之情', '离愁别绪、劝勉宽慰、豁达坦荡'], ['爱情婚姻', '相思、爱恋、失恋、闺怨'], ['咏史怀古', '借古讽今、怀古伤己']] },
        { type: 'list', items: ['忧国伤时：山河破碎、民生疾苦之痛', '建功报国：请缨无路、壮志难酬之愤', '思乡怀人：羁旅漂泊、望月怀远之愁', '咏史怀古：借古事浇心中之块垒'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">诗歌情感类型思维导图</text><rect x="280" y="48" width="120" height="44" rx="8" fill="#9c4221"/><text x="340" y="75" text-anchor="middle" font-size="13" fill="#fff">诗歌情感</text><path d="M340 92 L90 135" stroke="#9c4221" stroke-width="2"/><path d="M340 92 L230 135" stroke="#9c4221" stroke-width="2"/><path d="M340 92 L370 135" stroke="#9c4221" stroke-width="2"/><path d="M340 92 L510 135" stroke="#9c4221" stroke-width="2"/><rect x="20" y="135" width="140" height="40" rx="6" fill="#7aa05a"/><text x="90" y="160" text-anchor="middle" font-size="12" fill="#fff">忧国伤时</text><rect x="165" y="135" width="140" height="40" rx="6" fill="#c08168"/><text x="235" y="160" text-anchor="middle" font-size="12" fill="#fff">建功报国</text><rect x="305" y="135" width="140" height="40" rx="6" fill="#a8632e"/><text x="375" y="160" text-anchor="middle" font-size="12" fill="#fff">人生感慨</text><rect x="445" y="135" width="140" height="40" rx="6" fill="#7a6fae"/><text x="515" y="160" text-anchor="middle" font-size="12" fill="#fff">思乡怀人</text><rect x="90" y="200" width="140" height="40" rx="6" fill="#c0473a"/><text x="160" y="225" text-anchor="middle" font-size="12" fill="#fff">离别之情</text><rect x="245" y="200" width="140" height="40" rx="6" fill="#9c4221"/><text x="315" y="225" text-anchor="middle" font-size="12" fill="#fff">爱情婚姻</text><rect x="400" y="200" width="140" height="40" rx="6" fill="#7aa05a"/><text x="470" y="225" text-anchor="middle" font-size="12" fill="#fff">咏史怀古</text><text x="340" y="280" text-anchor="middle" font-size="12" fill="#9c4221">一首诗常兼多类，须多角度概括</text></svg>', caption: '七类常见情感可据诗句关键词定位，注意一首诗情感常交叉并存。' },
        { type: 'heading', text: '三、思想内容评价答题要点' },
        { type: 'list', items: ['知人论世：联系诗人身世遭遇与创作背景', '结合文本：从意象、意境、关键词句、注释挖掘', '多角度概括：兼顾情感的复杂性（如杜甫兼忧国忧民伤己）', '规范表述：先总括情感，再逐条结合诗句佐证'] },
        { type: 'example', label: '情感评价示范', text: '杜甫《春望》：“国破山河在，城春草木深。”<br>联系“安史之乱”背景（知人论世），由“破”“深”见<strong>忧国伤时</strong>之痛；后联“家书抵万金”又见<strong>思乡怀人</strong>之愁，情感复杂交织，须多角度概括方全面。' },
        { type: 'tip', label: '学习提示', text: '评价情感要“抓注释、抓关键词、抓典型意象”：注释常暗示背景，动词形容词常露情感倾向，雁月柳菊等意象各有固定情调。三者印证，情感类型自然浮现。' },
        { type: 'reading', text: '延伸思考：同是“怀才不遇”，李白“天生我材必有用”与辛弃疾“凭谁问：廉颇老矣”的抒情方式与情感基调有何不同？请从表达技巧与情感类型两角度比较。' }
      ],
      exercises: [
        { type: 'choice', question: '“托物言志”在表达技巧分类中属于哪一层？', options: ['修辞手法', '表现手法', '表达方式', '结构技巧'], answer: '表现手法', explanation: '表达技巧分修辞、表现、表达、结构四层。“托物言志”借描写事物的品格来寄托作者志向，属于艺术构思层面的表现手法，而非修辞（比喻拟人等）、表达方式（描写抒情议论）或结构技巧（起兴照应等），故选“表现手法”。' },
        { type: 'fill', question: '杜甫《春望》“感时花溅泪，恨别鸟惊心”借花开鸟鸣之景抒亡国之痛，这种抒情方式属于__（间接抒情之一种）。', answer: '借景抒情', explanation: '题干考查抒情方式分类。诗句表面写花溅泪、鸟惊心，实则将忧国伤时、恨别思家之情融入景物描写之中，景中寓情，属间接抒情里的“借景抒情”（亦含寓情于景）。区别于直抒胸臆与托物言志，故填“借景抒情”。' },
        { type: 'choice', question: '下列情感中，“怀才不遇、壮志难酬、年华老去”应归为哪一类？', options: ['忧国伤时', '建功报国', '人生感慨', '思乡怀人'], answer: '建功报国', explanation: '常见情感七大类里，“建功报国”类包含渴望建功立业、怀才不遇、年华老去而壮志难酬等表现，与题干完全对应。忧国伤时侧重忧心国运民生，人生感慨侧重仕途失意与归隐，思乡怀人侧重羁旅望月，均不符，故选“建功报国”。' },
        { type: 'fill', question: '评价诗歌思想内容的三个要点：知人论世、结合文本、__概括（如杜甫诗常兼忧国忧民与伤己）。', answer: '多角度', explanation: '题干考查思想内容评价的答题要点。评价须做到：一知人论世（联系身世与背景），二结合文本（从意象、关键词、注释挖掘），三多角度概括（注意情感复杂性，如杜甫既忧国忧民又伤己）。故填“多角度”。' },
        { type: 'choice', question: '“东风不与周郎便，铜雀春深锁二乔”运用的表达技巧，正确的是？', options: ['仅用比喻', '只用夸张', '用典（咏史怀古）', '纯属白描'], answer: '用典（咏史怀古）', explanation: '该句借“东风”“周郎”“铜雀”“二乔”等三国典故，设想若东风不助周瑜则胜负逆转，属修辞手法中的“用典”，又服务于“咏史怀古”的情感类型（借古抒怀）。并非比喻、夸张或白描，故选“用典（咏史怀古）”。' }
      ]
    }

  );
})();
