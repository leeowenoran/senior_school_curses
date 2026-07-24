(function () {
  var v = gzGetVolume('chinese', 'zt2');
  if (!v) return;
  v.points.push(

    /* ===================== 第一部分 · 文言文阅读（一）：断句与实词 ===================== */

    { id: 'zt2-u1-l1', name: '文言文阅读（一）：文言断句与常见实词', author: '高考复习', chapter: '文言文阅读（一）· 断句与实词', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文言断句（考点一，约3分）' },
        { type: 'paragraph', text: '断句，即给文言文标出句读（句末停顿为“句”，句中停顿为“读”）。高考断句题要求在不标点的一段文言中选出正确断句的一项，考查的是对文意、语法与语气的理解。' },
        { type: 'keypoint', label: '断句的核心思路', text: '断句不是“凭语感瞎切”，而是<strong>语法+标志+语境</strong>三位一体：先抓主谓宾辨清句子成分，再借助虚词与对话标志定位停顿，最后通读检验语义是否通顺。' },
        { type: 'list', items: ['语法结构：抓主谓宾，辨清句子成分（“……者……也”判断句、“为……所”被动句等）', '对话标志：“曰”“云”“言”“谓”等后一般断开', '虚词标志：句首发语词（夫、盖、凡、且夫）前断；句尾语气词（也、矣、焉、乎、哉）后断；关联词（而、则、然则、是故）前往往可断', '固定句式：“如……何”“奈……何”“何……为”“不亦……乎”“无乃……乎”等', '修辞与对称：对偶、排比、顶真等结构常成为断句依据'] },
        { type: 'table', headers: ['断句依据', '具体方法'], rows: [['语法结构', '抓主谓宾，辨清句子成分与特殊句式'], ['对话标志', '“曰云言谓”后一般断开'], ['虚词标志', '发语词前断、句尾语气词后断、关联词前断'], ['固定句式', '识别“如……何”等凝固结构'], ['修辞对称', '借对偶、排比、顶真定位停顿']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">文言断句五类依据</text><rect x="40" y="55" width="180" height="50" rx="8" fill="#9c4221"/><text x="130" y="85" text-anchor="middle" font-size="13" fill="#fff">语法结构</text><rect x="250" y="55" width="180" height="50" rx="8" fill="#c08168"/><text x="340" y="85" text-anchor="middle" font-size="13" fill="#fff">对话标志</text><rect x="460" y="55" width="180" height="50" rx="8" fill="#a8632e"/><text x="550" y="85" text-anchor="middle" font-size="13" fill="#fff">虚词标志</text><rect x="145" y="130" width="180" height="50" rx="8" fill="#7aa05a"/><text x="235" y="160" text-anchor="middle" font-size="13" fill="#fff">固定句式</text><rect x="355" y="130" width="180" height="50" rx="8" fill="#7a6fae"/><text x="445" y="160" text-anchor="middle" font-size="13" fill="#fff">修辞对称</text><text x="340" y="220" text-anchor="middle" font-size="13" fill="#555">五法并用，再通读检验语义是否通顺</text></svg>', caption: '断句五大依据：语法、对话、虚词、固定句式、修辞对称，综合运用后务必通读检验。' },
        { type: 'heading', text: '二、断句解题要点' },
        { type: 'paragraph', text: '拿到断句题，先通读粗知大意，再逐层切分。最稳妥的做法是“先易后难”：先把明显的主谓、对话、语气词处断开，再处理中间模糊地带。' },
        { type: 'example', label: '断句示范', text: '原文片段：“沛公曰孰与君少长良曰长于臣。”<br>借助对话标志“曰”后断开，再按主谓切分：<strong>沛公曰／孰与君少长／良曰／长于臣。</strong> 通读后语义顺畅，断句成立。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">断句四步法</text><rect x="30" y="70" width="150" height="50" rx="8" fill="#7aa05a"/><text x="105" y="100" text-anchor="middle" font-size="13" fill="#fff">通读知大意</text><rect x="195" y="70" width="150" height="50" rx="8" fill="#c08168"/><text x="270" y="100" text-anchor="middle" font-size="13" fill="#fff">抓标志切分</text><rect x="360" y="70" width="150" height="50" rx="8" fill="#a8632e"/><text x="435" y="100" text-anchor="middle" font-size="13" fill="#fff">先易后难</text><rect x="525" y="70" width="150" height="50" rx="8" fill="#9c4221"/><text x="600" y="100" text-anchor="middle" font-size="13" fill="#fff">通读检验</text><path d="M180 95 L193 95" stroke="#9c4221" stroke-width="3"/><path d="M345 95 L358 95" stroke="#9c4221" stroke-width="3"/><path d="M510 95 L523 95" stroke="#9c4221" stroke-width="3"/></svg>', caption: '断句四步：通读大意→抓标志切分→先易后难→通读检验，核心是最后一步回头验证。' },
        { type: 'warn', label: '易错提醒', text: '断句后<strong>一定要通读一遍</strong>。只凭单个虚词（如见“也”就断）容易误断——有些“也”在句中表句中语气，并非句尾。语感须让位于语法与语义的双重验证。' },
        { type: 'heading', text: '三、理解常见文言实词（考点二，约3分）' },
        { type: 'paragraph', text: '文言实词指含有实际意义的词（名词、动词、形容词等）。高考考查“常见文言实词在文中的含义”，即要求结合语境推断某实词的具体意思，而非死记字典义。' },
        { type: 'keypoint', label: '实词四大考查类型', text: '<strong>一词多义</strong>（如“兵”：兵器→军队→军事→战争）；<strong>古今异义</strong>（如“妻子”古指妻与子，“山东”古指崤山以东）；<strong>通假字</strong>（如“暴”通“曝”、“倍”通“背”）；<strong>词类活用</strong>（名词作动词/状语、使动、意动等）。' },
        { type: 'table', headers: ['考查类型', '说明与示例'], rows: [['一词多义', '据语境定词义，如“兵”由兵器引申为军队、战争'], ['古今异义', '注意变化，如“妻子”古指妻子儿女'], ['通假字', '“暴”通“曝”、“属”通“嘱”'], ['词类活用', '名作动、名作状、使动、意动、动名等']] },
        { type: 'list', items: ['将选项释义代入原文，结合上下文检验是否通顺', '运用课内知识迁移（如《劝学》《师说》等经典篇目实词）', '利用汉字形旁推断本义，联系语境推断引申义'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">实词含义推断三法</text><rect x="50" y="60" width="170" height="60" rx="8" fill="#9c4221"/><text x="135" y="90" text-anchor="middle" font-size="13" fill="#fff">代入检验</text><text x="135" y="110" text-anchor="middle" font-size="11" fill="#fff">释义回文</text><rect x="255" y="60" width="170" height="60" rx="8" fill="#c08168"/><text x="340" y="90" text-anchor="middle" font-size="13" fill="#fff">课内迁移</text><text x="340" y="110" text-anchor="middle" font-size="11" fill="#fff">旧知带新知</text><rect x="460" y="60" width="170" height="60" rx="8" fill="#7aa05a"/><text x="545" y="90" text-anchor="middle" font-size="13" fill="#fff">形旁推断</text><text x="545" y="110" text-anchor="middle" font-size="11" fill="#fff">本义推引申</text><text x="340" y="170" text-anchor="middle" font-size="13" fill="#555">三法结合，以“代入上下文通顺”为准</text></svg>', caption: '实词推断三法：代入检验、课内迁移、形旁推断，最终以“代入原文是否通顺”定夺。' },
        { type: 'example', label: '实词示范', text: '《劝学》：“假舟楫者，非能水也，而绝江河。”<br>“水”本为名词，此处带宾语“江河”，活用为<strong>动词“游水、游泳”</strong>；“绝”意为“横渡”。结合语境可判定，不能按今义误解。' },
        { type: 'tip', label: '学习提示', text: '实词复习要“以本为纲”：把教材每篇的重点实词（一词多义、活用、通假）做成卡片，高考课外文本再难，考点也大多从这些课内实词中延伸而出。' },
        { type: 'reading', text: '延伸思考：“兵”在“兵刃既接”（兵器）、“沛公兵十万”（军队）、“纸上谈兵”（军事）中词义不同，这种“一词多义”现象对断句与翻译分别提出了什么要求？' }
      ],
      exercises: [
        { type: 'choice', question: '下列可作为文言断句“虚词标志”的一项是？', options: ['句首发语词“夫”前可断', '句中动词后必断', '形容词前必断', '数词后必断'], answer: '句首发语词“夫”前可断', explanation: '文言断句的虚词标志规律是：句首发语词（夫、盖、凡、且夫等）前可断，句尾语气词（也、矣、焉、乎、哉等）后可断，关联词（而、则、然则、是故等）前往往可断。选项中只有“句首发语词‘夫’前可断”符合这一规律，其余“必断”说法过于绝对且不符常规。' },
        { type: 'fill', question: '文言断句完成后，必须__一遍，检验语义是否通顺、逻辑是否合理。', answer: '通读', explanation: '题干考查断句的解题要点。原文明确指出“断句后要通读一遍，检验语义是否通顺、逻辑是否合理”。通读检验是避免误断的关键一步，许多只见虚词就断的错误正源于跳过此步，故填“通读”。' },
        { type: 'choice', question: '“将军身被坚执锐”中“被”的通假与词义，正确的是？', options: ['“被”通“披”，穿着', '“被”通“背”，违背', '“被”即“被动”', '“被”通“倍”，加倍'], answer: '“被”通“披”，穿着', explanation: '“被坚执锐”意为穿着坚固的铠甲、拿着锐利的武器，“被”在此通“披”，意为“穿着、披挂”。这是典型的通假字考查。选项“背”“倍”及“被动”均不符合语境，故选“‘被’通‘披’，穿着”。' },
        { type: 'fill', question: '“妻子”在古汉语中是一个__词，指妻子和儿女，与现代汉语仅指配偶不同。', answer: '古今异义', explanation: '题干考查文言实词中的古今异义现象。“妻子”古义为“妻与子（儿女）”，今义仅指配偶，属于词义缩小类的古今异义。类似还有“山东”（古指崤山以东）等，故填“古今异义”。' },
        { type: 'choice', question: '推断文言实词含义时，下列做法最恰当的是？', options: ['只看字典首个义项', '将释义代入原文检验是否通顺', '完全凭现代汉语猜测', '忽略词类活用'], answer: '将释义代入原文检验是否通顺', explanation: '文言实词考查“在文中的含义”，必须结合语境。最稳妥的做法是把选项的释义代入原文，看上下文是否通顺合理；同时可借助课内迁移与形旁推断辅助。仅看字典首义、凭今义猜测或忽略活用都易出错，故选“代入原文检验通顺”。' }
      ]
    },

    /* ===================== 第一部分 · 文言文阅读（二）：虚词与文化知识 ===================== */

    { id: 'zt2-u1-l2', name: '文言文阅读（二）：文言虚词与古代文化知识', author: '高考复习', chapter: '文言文阅读（二）· 虚词与文化', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、理解常见文言虚词（考点三，约3分）' },
        { type: 'paragraph', text: '文言虚词意义较虚，但用法固定，是理解句意的“关节”。高考要求掌握 18 个常见文言虚词：而、何、乎、乃、其、且、若、所、为、焉、也、以、因、于、与、则、者、之。' },
        { type: 'keypoint', label: '六大高频虚词', text: '<strong>而</strong>（并列/承接/递进/修饰/转折/因果）；<strong>其</strong>（代词或表推测、反问的语气词）；<strong>以</strong>（介词“用、凭、因、在”或连词“目的、因果”）；<strong>于</strong>（介词“在、到、从、比、对、被”）；<strong>之</strong>（代词、助词“的/取独/宾前标志/定后标志”）；<strong>乃</strong>（副词“于是、才、竟然、就是”）。' },
        { type: 'table', headers: ['虚词', '重点用法'], rows: [['而', '表并列、承接、递进、修饰、转折、因果等'], ['其', '代词（他/它/那/其中）；表推测、反问语气'], ['以', '介词（用、拿、凭借、因、在）；连词（目的、因果）'], ['于', '介词（在、到、从、比、对、被）'], ['之', '代词；助词（的/取独/宾前/定后标志）'], ['乃', '副词（于是、才、竟然、就是）']] },
        { type: 'list', items: ['而、何、乎、乃、其、且、若', '所、为、焉、也、以、因', '于、与、则、者、之（共18个）'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">高考18个常见文言虚词</text><rect x="30" y="55" width="620" height="40" rx="8" fill="#9c4221"/><text x="340" y="81" text-anchor="middle" font-size="14" fill="#fff">而 何 乎 乃 其 且 若 所 为 焉 也 以 因 于 与 则 者 之</text><rect x="40" y="115" width="180" height="46" rx="8" fill="#7aa05a"/><text x="130" y="143" text-anchor="middle" font-size="13" fill="#fff">而·其·以·于</text><rect x="250" y="115" width="180" height="46" rx="8" fill="#c08168"/><text x="340" y="143" text-anchor="middle" font-size="13" fill="#fff">之·乃·乎·焉</text><rect x="460" y="115" width="180" height="46" rx="8" fill="#a8632e"/><text x="550" y="143" text-anchor="middle" font-size="13" fill="#fff">余下高频虚词</text></svg>', caption: '18个虚词须逐一过关，其中“而、其、以、于、之、乃”出现频率最高，是复习重点。' },
        { type: 'heading', text: '二、虚词解题要点' },
        { type: 'paragraph', text: '虚词没有实在意义，但其语法功能决定句子结构。解题时先判断它在句中的位置与词性，再据上下文确定具体作用。' },
        { type: 'example', label: '虚词示范', text: '“青，取之于蓝，而青于蓝。”<br>前一个“于”引出动作对象，译“从”；后一个“于”表比较，译“比”；“而”连接前后，表<strong>转折</strong>“却”。同一虚词在不同位置功能迥异，须逐处辨析。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">虚词判断三步</text><rect x="40" y="70" width="180" height="50" rx="8" fill="#7aa05a"/><text x="130" y="100" text-anchor="middle" font-size="13" fill="#fff">定词性</text><rect x="255" y="70" width="180" height="50" rx="8" fill="#c08168"/><text x="345" y="100" text-anchor="middle" font-size="13" fill="#fff">定语法功能</text><rect x="470" y="70" width="180" height="50" rx="8" fill="#9c4221"/><text x="560" y="100" text-anchor="middle" font-size="13" fill="#fff">定意义</text><path d="M220 95 L253 95" stroke="#9c4221" stroke-width="3"/><path d="M435 95 L468 95" stroke="#9c4221" stroke-width="3"/><text x="340" y="165" text-anchor="middle" font-size="13" fill="#555">先定位词性，再据语境定功能与意义</text></svg>', caption: '虚词三步：定词性→定语法功能→定意义，位置与词性是解题钥匙。' },
        { type: 'warn', label: '易错提醒', text: '“之”的<strong>取消句子独立性</strong>最容易看漏：当“之”插在主谓之间使原句失去独立性、仅作句子成分时，不译。若误当成代词，整句结构就会理解错。' },
        { type: 'heading', text: '三、古代文化知识（考点四，约3分）' },
        { type: 'paragraph', text: '文化知识题考查对古代职官、科举、纪时、礼俗、地理、称谓等常识的了解，多结合传记类文本设题，是“常识+语境”的综合判断。' },
        { type: 'keypoint', label: '六大考查类别', text: '<strong>官职制度</strong>（三省六部、除拜擢迁谪黜）；<strong>科举制度</strong>（童试→乡试→会试→殿试；秀才、举人、进士）；<strong>纪年纪时</strong>（年号、干支；朔望晦；十二时辰）；<strong>宗法礼俗</strong>（谥号、庙号、五礼、避讳）；<strong>地理称谓</strong>（江指长江、河指黄河、山东指崤山以东）；<strong>称谓常识</strong>（名、字、号、官职称谓）。' },
        { type: 'table', headers: ['考查类别', '具体内容'], rows: [['官职制度', '中央/地方官制；除、拜、擢、迁、谪、黜等升降术语'], ['科举制度', '童试→乡试→会试→殿试；秀才→举人→进士'], ['纪年纪时', '年号、干支；朔、望、晦；子丑寅卯等时辰'], ['宗法礼俗', '宗法制、谥号、庙号、五礼、避讳'], ['地理称谓', '江（长江）、河（黄河）、山东（崤山以东）'], ['称谓常识', '名、字、号；谥号；籍贯与官职称谓']] },
        { type: 'list', items: ['立足课内文化知识，分类积累', '结合传记类文本高频词汇（如“迁”“徙”“拜”）', '注意古今同形异义（如“中国”古指中原）'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">古代文化知识六大类别</text><rect x="40" y="55" width="190" height="42" rx="6" fill="#9c4221"/><text x="135" y="81" text-anchor="middle" font-size="12" fill="#fff">官职制度</text><rect x="250" y="55" width="190" height="42" rx="6" fill="#c08168"/><text x="345" y="81" text-anchor="middle" font-size="12" fill="#fff">科举制度</text><rect x="460" y="55" width="190" height="42" rx="6" fill="#a8632e"/><text x="555" y="81" text-anchor="middle" font-size="12" fill="#fff">纪年纪时</text><rect x="40" y="115" width="190" height="42" rx="6" fill="#7aa05a"/><text x="135" y="141" text-anchor="middle" font-size="12" fill="#fff">宗法礼俗</text><rect x="250" y="115" width="190" height="42" rx="6" fill="#7a6fae"/><text x="345" y="141" text-anchor="middle" font-size="12" fill="#fff">地理称谓</text><rect x="460" y="115" width="190" height="42" rx="6" fill="#c0473a"/><text x="555" y="141" text-anchor="middle" font-size="12" fill="#fff">称谓常识</text><text x="340" y="200" text-anchor="middle" font-size="13" fill="#555">建议分类建卡，重点记传记高频词</text></svg>', caption: '文化知识分六类积累，其中官职升降术语与纪时称谓在史传文中出现最频繁。' },
        { type: 'example', label: '文化常识示范', text: '“永和九年，岁在癸丑”中，“永和”是<strong>年号纪年</strong>，“癸丑”是<strong>干支纪年</strong>；“迁客骚人”的“迁”指贬谪降职。这些都与传记类文本高频词汇对应。' },
        { type: 'tip', label: '学习提示', text: '文化常识不必死背全书，应“随文积累”：读一篇传记，就把其中的官职、纪时、称谓词摘出归类。高考真题的文化常识大多出自课内与常见传记词汇。' },
        { type: 'reading', text: '延伸思考：古代“谪”“黜”“迁”都涉及官职变动，但感情色彩与方向不同。请结合具体篇目（如《岳阳楼记》《琵琶行》）说明三者差异及其在传记阅读中的提示作用。' }
      ],
      exercises: [
        { type: 'choice', question: '下列全属于高考要求掌握的18个常见文言虚词的一项是？', options: ['而、其、以、于、之、乃', '也、矣、焉、乎、兮、辞', '曰、云、言、谓、呜、呼', '江、河、山、东、中、国'], answer: '而、其、以、于、之、乃', explanation: '高考要求的18个常见文言虚词为：而、何、乎、乃、其、且、若、所、为、焉、也、以、因、于、与、则、者、之。选项“而、其、以、于、之、乃”均在此列。其余选项混入实词（江、河）或句末语气叹词（兮、辞），不符虚词范畴，故选该组。' },
        { type: 'fill', question: '“青，取之于蓝，而青于蓝”中前一个“于”译“从”，后一个“于”表比较译“__”。', answer: '比', explanation: '题干考查虚词“于”的用法。原文“取之于蓝”的“于”引出动作来源，译“从（蓝草中）”；“青于蓝”的“于”引出比较对象，译“比（蓝草）”。同一虚词因位置不同功能迥异，故填“比”。' },
        { type: 'choice', question: '下列官职变动术语中表示“降职或流放”的是？', options: ['拜', '擢', '谪', '除'], answer: '谪', explanation: '古代官职升降术语中：“拜”“除”指授官任命，“擢”指提拔升职，“谪”指贬官降职或流放。题干问“降职或流放”，对应“谪”。其余均为升授或任命，故选“谪”。' },
        { type: 'fill', question: '古代“朔”指农历每月初一，“晦”指每月最后一天，而“__”指农历每月十五。', answer: '望', explanation: '题干考查纪年纪时中的月相称谓。古代以“朔”为初一、“望”为十五（有时指十六）、“既望”为十六、“晦”为月末最后一天。这是文化常识高频考点，故填“望”。' },
        { type: 'choice', question: '下列关于文言虚词“之”的用法，表述正确的是？', options: ['“之”只能作代词', '“之”插在主谓之间可取消句子独立性，不译', '“之”不能作助词', '“之”在所有位置都译作“的”'], answer: '“之”插在主谓之间可取消句子独立性，不译', explanation: '“之”用法丰富：可作代词，可作助词（“的”、宾语前置标志、定语后置标志），也可插在主谓之间取消句子独立性而不译。选项“只能作代词”“不能作助词”“所有位置都译‘的’”均错误；只有“取消句子独立性不译”正确，故选此项。' }
      ]
    },

    /* ===================== 第一部分 · 文言文阅读（三）：内容概括与翻译 ===================== */

    { id: 'zt2-u1-l3', name: '文言文阅读（三）：内容概括与文言翻译', author: '高考复习', chapter: '文言文阅读（三）· 概括与翻译', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、归纳概括内容要点（考点五，约3分）' },
        { type: 'paragraph', text: '本考点要求在读懂全文的基础上，筛选文中信息、归纳内容要点、概括中心意思。题型分客观选择题与主观简答题两类。' },
        { type: 'paragraph', text: '文言文阅读整体定位于“浅易”，文本多选自“二十四史”等史传类著作或先秦两汉唐宋名家散文，因此概括题常以传记人物的事迹、品格与作者态度为考查重心。' },
        { type: 'keypoint', label: '两类考查形式', text: '客观题常要求判断“对原文内容的理解与分析”，<strong>比对原文与选项</strong>，识破曲解文意、无中生有、时序颠倒、张冠李戴、强加因果、以偏概全等设误；简答题则须<strong>定位区间、提取关键信息、分条概括</strong>，做到“问什么答什么”。' },
        { type: 'table', headers: ['考查形式', '解题策略'], rows: [['选择题（理解分析）', '比对原文与选项，识破六大设误类型'], ['简答题（概括分析）', '定位区间→提取关键信息→分条概括']] },
        { type: 'list', items: ['曲解文意：歪曲原文语句意思', '无中生有：选项内容原文无据', '时序颠倒：把先后事件错位', '张冠李戴：把甲的事安到乙身上', '强加因果：硬设不存在的因果', '以偏概全：用局部替代整体'] },
        { type: 'example', label: '概括示范', text: '题目：“请概括李将军的性格特征。”<br>回文提取“善骑射”“宽缓不苛”“勇于当敌”等描述，<strong>分条归纳</strong>为：①武艺高强；②治军宽厚；③作战勇猛。做到“问什么答什么”，不堆砌原文。' },
        { type: 'keypoint', label: '简答题黄金法则', text: '作答概括简答题须<strong>先亮观点，再引原文佐证</strong>：如答“李将军性格宽厚”，须紧跟“文中称其‘宽缓不苛’”。只抄原文不归纳、或只下结论无依据，都是失分点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">内容概括题常见设误</text><rect x="40" y="55" width="290" height="40" rx="6" fill="#7aa05a"/><text x="185" y="80" text-anchor="middle" font-size="13" fill="#fff">原文（正确信息）</text><rect x="350" y="55" width="290" height="40" rx="6" fill="#c0473a"/><text x="495" y="80" text-anchor="middle" font-size="13" fill="#fff">选项（设误表现）</text><text x="40" y="135" font-size="13" fill="#555">曲解文意·无中生有·时序颠倒</text><text x="40" y="162" font-size="13" fill="#555">张冠李戴·强加因果·以偏概全</text><text x="350" y="135" font-size="13" fill="#555">文意被歪曲 / 毫无依据</text><text x="350" y="162" font-size="13" fill="#555">事件错位 / 硬加因果</text><text x="340" y="220" text-anchor="middle" font-size="13" fill="#9c4221">逐字比对原文，识破“偷梁换柱”</text></svg>', caption: '内容概括选择题六大设误与论述类文本相似，核心是“选项须在原文有确切依据”。' },
        { type: 'heading', text: '二、文言翻译（考点六，约8分，2小题）' },
        { type: 'paragraph', text: '翻译是文言文阅读分值最高的题（约8分）。翻译标准传统讲“信、达、雅”，高考以“信”（准确）与“达”（通顺）为主，不刻意求“雅”。' },
        { type: 'keypoint', label: '翻译标准', text: '<strong>信</strong>：译文准确，不歪曲原意；<strong>达</strong>：译文通顺，符合现代汉语习惯；<strong>雅</strong>：有文采（高考不作硬性要求）。高考评分“信达”为先，重点实词、虚词、特殊句式是给分点。' },
        { type: 'table', headers: ['翻译方法', '具体操作'], rows: [['留', '保留人名、地名、官名、年号等专有名词'], ['删', '删去无实义虚词（发语词、结构助词、句尾语气词）'], ['换', '将古汉语词语替换为现代汉语词语'], ['调', '调整特殊句式（倒装句）的语序'], ['补', '补出省略的成分（主、谓、宾、介词等）'], ['变', '变通处理，使译文符合现代表达习惯']] },
        { type: 'list', items: ['重点实词（尤其活用词、多义词）必须准确翻译', '关键虚词（尤其介词、连词）的语法功能要译出', '特殊句式（判断、被动、倒装、省略）必须按现代语序调整'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">文言翻译六字法</text><rect x="40" y="55" width="100" height="44" rx="6" fill="#9c4221"/><text x="90" y="82" text-anchor="middle" font-size="15" fill="#fff">留</text><rect x="150" y="55" width="100" height="44" rx="6" fill="#c08168"/><text x="200" y="82" text-anchor="middle" font-size="15" fill="#fff">删</text><rect x="260" y="55" width="100" height="44" rx="6" fill="#a8632e"/><text x="310" y="82" text-anchor="middle" font-size="15" fill="#fff">换</text><rect x="370" y="55" width="100" height="44" rx="6" fill="#7aa05a"/><text x="420" y="82" text-anchor="middle" font-size="15" fill="#fff">调</text><rect x="480" y="55" width="100" height="44" rx="6" fill="#7a6fae"/><text x="530" y="82" text-anchor="middle" font-size="15" fill="#fff">补</text><rect x="590" y="55" width="80" height="44" rx="6" fill="#c0473a"/><text x="630" y="82" text-anchor="middle" font-size="15" fill="#fff">变</text><text x="340" y="140" text-anchor="middle" font-size="13" fill="#555">留专有名词·删虚词·换今语</text><text x="340" y="170" text-anchor="middle" font-size="13" fill="#555">调语序·补省略·变通表达</text><text x="340" y="205" text-anchor="middle" font-size="12" fill="#9c4221">重点实词、虚词、特殊句式是得分关键</text></svg>', caption: '翻译六字诀“留删换调补变”：留人名地名、删虚词、换今语、调倒装、补省略、变通表达。' },
        { type: 'example', label: '翻译示范', text: '原句：“蚓无爪牙之利，筋骨之强。”（定语后置）<br>译：<strong>蚯蚓没有锋利的爪牙，强健的筋骨。</strong><br>要点：“之”为定语后置标志（删/调），“利”“强”译作“锋利”“强健”（换），句式按现代语序调整（调）。' },
        { type: 'warn', label: '易错提醒', text: '翻译最易丢分在<strong>特殊句式</strong>：判断句要译出“……是……”，被动句要译出“被”，倒装句（宾语前置、定语后置、状语后置）必须调回现代语序，省略句必须补出主语或介词。漏一处即失分。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">特殊句式调整示意</text><rect x="30" y="55" width="290" height="50" rx="8" fill="#c0473a"/><text x="175" y="76" text-anchor="middle" font-size="13" fill="#fff">原文（古汉语句式）</text><rect x="360" y="55" width="290" height="50" rx="8" fill="#7aa05a"/><text x="505" y="76" text-anchor="middle" font-size="13" fill="#fff">译文（现代语序）</text><text x="30" y="140" font-size="13" fill="#555">宾语前置：何厌之有→有何厌</text><text x="30" y="165" font-size="13" fill="#555">定语后置：爪牙之利→利之爪牙</text><text x="30" y="190" font-size="13" fill="#555">状语后置：青于蓝→于蓝青</text><text x="360" y="165" font-size="13" fill="#555">按主谓宾重排，补出省略</text></svg>', caption: '倒装句（宾前、定后、状后）翻译时务必调回现代汉语句序，否则句意错乱。' },
        { type: 'tip', label: '学习提示', text: '翻译得分=重点词（实词+虚词）+特殊句式。平时练翻译，先圈出“给分点”（活用词、多义词、句式标志），再动笔，养成“踩点翻译”的习惯。' },
        { type: 'reading', text: '延伸思考：“信”与“达”偶有冲突时（如直译生硬、意译失真），高考翻译应如何取舍？请结合一个定语后置或被动句的译例说明你的处理原则。' }
      ],
      exercises: [
        { type: 'choice', question: '文言翻译中“蚓无爪牙之利”的“之”属于哪种特殊句式标志，应如何处理？', options: ['宾语前置标志，调序', '定语后置标志，调序', '取消句子独立性，不译', '主谓之间，不译'], answer: '定语后置标志，调序', explanation: '“爪牙之利”即“锋利的爪牙”，“之”是定语后置的标志，翻译时应将定语“利”调回到中心语“爪牙”之前，译为“锋利的爪牙”。这属于倒装句中的定语后置，须调整语序。宾语前置、取独、主谓间均不符，故选“定语后置标志，调序”。' },
        { type: 'fill', question: '文言翻译标准传统讲“信、达、雅”，高考以“__”和“达”为主，不刻意求“雅”。', answer: '信', explanation: '题干考查翻译标准。传统翻译标准“信达雅”中，“信”指准确、“达”指通顺、“雅”指有文采。高考文言文翻译以“信”（准确不歪曲）与“达”（通顺合习惯）为评分重点，“雅”不作硬性要求，故填“信”。' },
        { type: 'choice', question: '内容概括选择题中，把甲人物的事件安到乙人物头上，这种设误是？', options: ['无中生有', '张冠李戴', '以偏概全', '强加因果'], answer: '张冠李戴', explanation: '内容概括选择题常见设误中，“张冠李戴”指把甲人说的事、甲的品格安到乙人头上，混淆了陈述对象。无中生有是毫无依据，以偏概全是局部代整体，强加因果是硬设因果，均不符，故选“张冠李戴”。' },
        { type: 'fill', question: '翻译六字法中，“保留人名、地名、官名、年号等专有名词”对应的是“__”字。', answer: '留', explanation: '题干考查翻译六字法（留、删、换、调、补、变）。“留”即保留不必翻译的专有名词，如人名、地名、官名、年号、帝号等，它们古今一致，直接保留。其余“删”去虚词、“换”作今语等不符，故填“留”。' },
        { type: 'choice', question: '关于文言翻译的得分关键点，下列表述正确的是？', options: ['特殊句式无需调整语序', '重点实词、虚词和特殊句式都是给分点', '虚词语法功能可不译出', '活用字词可忽略不译'], answer: '重点实词、虚词和特殊句式都是给分点', explanation: '文言翻译评分以“信达”为先，得分点包括：重点实词（尤其活用、多义）、关键虚词（尤其介词连词）的语法功能、以及特殊句式（判断、被动、倒装、省略）的语序调整。选项“无需调序”“虚词不译”“活用词忽略”均错误，只有“实词、虚词、特殊句式都是给分点”正确。' }
      ]
    }

  );
})();
