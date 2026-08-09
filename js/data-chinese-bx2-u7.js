/* ============================================================
 * 高一语文 · 必修 下册 · 第七单元 整本书阅读《红楼梦》
 * 1 课时：红楼梦整本书阅读
 * 数据注入：chinese.bx2.points
 * 质量标准：本课 ≥26 内容块 / 3 SVG / 类型齐全（含 poem 判词·葬花吟）
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx2');
  if (!v) return;

  v.points.push(
    /* ==================== 红楼梦整本书阅读 ==================== */
    {
      id: 'bx2-u7-l1',
      cover: 'assets/cover/chinese/bx2-u7-l1.svg',
      name: '《红楼梦》整本书阅读',
      author: '曹雪芹',
      chapter: '第七单元 整本书阅读《红楼梦》',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与成书' },
        { type: 'paragraph', text: '曹雪芹（约 1715—约 1763），名霑，字梦阮，号雪芹，又号芹圃、芹溪，清代小说家。他出身于江宁织造的显赫世家，后家道中落、穷困潦倒，饱尝世态炎凉。这种由锦衣玉食到绳床瓦灶的经历，成为《红楼梦》创作的深厚土壤。' },
        { type: 'paragraph', text: '《红楼梦》是曹雪芹「<strong>披阅十载，增删五次</strong>」的心血之作。他生前只基本完成前八十回，未及润饰全书便贫病而逝。小说以作者自家兴衰为影子，写尽封建家族的悲欢离合，被誉为中国古典小说的巅峰。' },
        { type: 'keypoint', label: '版本与红学', text: '《红楼梦》行世主要有两大系统：<strong>脂评本</strong>（带脂砚斋等人批语的八十回抄本，更近原貌）与<strong>程高本</strong>（乾隆年间程伟元、高鹗整理补缀的一百二十回印本，后四十回一般认为是高鹗所续）。研究《红楼梦》的专门学问称为<strong>「红学」</strong>，与甲骨学、敦煌学并称。' },
        { type: 'paragraph', text: '本书又名《石头记》《情僧录》《风月宝鉴》《金陵十二钗》。它以贾、史、王、薛四大家族的兴衰为骨架，以宝、黛、钗的爱情婚姻悲剧为主线，是一部「<strong>百科全书</strong>」式的宏篇巨制，涵盖诗词、饮食、礼仪、建筑、医药等诸多文化领域。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3eee2"/><rect x="40" y="70" width="280" height="170" rx="8" fill="#e8c9b0" stroke="#9c5a3a" stroke-width="2"/><text x="180" y="110" font-size="15" fill="#5b2e1a" text-anchor="middle">宁国府</text><text x="180" y="140" font-size="13" fill="#7a4a2e" text-anchor="middle">宁荣街东</text><text x="180" y="170" font-size="13" fill="#7a4a2e" text-anchor="middle">贾珍·贾蓉一脉</text><rect x="360" y="70" width="280" height="170" rx="8" fill="#cfd6da" stroke="#5b7a8a" stroke-width="2"/><text x="520" y="110" font-size="15" fill="#33485a" text-anchor="middle">荣国府</text><text x="520" y="140" font-size="13" fill="#33485a" text-anchor="middle">宁荣街西</text><text x="520" y="170" font-size="13" fill="#33485a" text-anchor="middle">贾母·贾政·宝玉一脉</text><path d="M320 150 L360 150" stroke="#c0392b" stroke-width="3" marker-end="url(#hxa)"/><text x="340" y="285" font-size="13" fill="#9c5a3a" text-anchor="middle">宁荣二府同源，构成一个庞大而等级森严的贵族世家</text><defs><marker id="hxa" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '贾府分宁、荣二府，是四大家族权力与荣华的中心。' },
        { type: 'heading', text: '二、人物关系网络' },
        { type: 'keypoint', label: '四大家族', text: '小说以「<strong>贾、史、王、薛</strong>」四大家族为骨干，彼此联姻、一损俱损。护官符云：「贾不假，白玉为堂金作马；阿房宫，三百里，住不下金陵一个史；东海缺少白玉床，龙王来请金陵王；丰年好大雪（薛），珍珠如土金如铁。」四族权势熏天，却终在内外交困中走向败亡。' },
        { type: 'paragraph', text: '贾府的核心人物有：最高长辈<strong>贾母</strong>（史太君）；掌权媳妇<strong>王熙凤</strong>（贾琏之妻，精明泼辣）；<strong>贾政</strong>与王夫人夫妇，其子即男主角<strong>贾宝玉</strong>。围绕宝玉，形成两组情感对照：与<strong>林黛玉</strong>的「木石前盟」（自由相知），与<strong>薛宝钗</strong>的「金玉良缘」（世故团圆）。' },
        { type: 'table', headers: ['人物', '身份', '与宝玉关系', '性格关键词'], rows: [['贾宝玉', '荣国府公子', '男主角', '钟情女儿、叛逆世俗'], ['林黛玉', '贾母外孙女', '木石前盟（知己）', '聪慧敏感、孤高多愁'], ['薛宝钗', '王夫人之侄女', '金玉良缘（配偶）', '端雅稳重、世故周全'], ['王熙凤', '贾琏之妻、管家', '嫂嫂、实际掌权者', '精明泼辣、机变狠辣'], ['贾母', '府中最高长辈', '祖母，溺爱宝玉', '慈爱威重、维系家族'], ['史湘云', '贾母侄孙女', '表妹，率真好友', '豪爽率真、豁达可爱']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#fbf3ec"/><g font-size="13" text-anchor="middle"><circle cx="340" cy="130" r="34" fill="#e85d8d" stroke="#c0392b" stroke-width="2"/><text x="340" y="135" fill="#fff">宝玉</text><circle cx="160" cy="80" r="28" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="160" y="85" fill="#0f3b5e">黛玉</text><circle cx="520" cy="80" r="28" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="520" y="85" fill="#5b3b12">宝钗</text><circle cx="160" cy="200" r="26" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="160" y="205" fill="#fff">贾母</text><circle cx="520" cy="200" r="26" fill="#7a9b3e" stroke="#3e6b2e" stroke-width="2"/><text x="520" y="205" fill="#fff">凤姐</text></g><path d="M188 100 Q270 110 308 122" stroke="#c0392b" stroke-width="2" fill="none" marker-end="url(#hxb)"/><path d="M492 100 Q410 110 372 122" stroke="#d9a441" stroke-width="2" fill="none" marker-end="url(#hxc)"/><path d="M186 185 L316 150" stroke="#7b4fe0" stroke-width="2" fill="none" stroke-dasharray="5 4"/><path d="M494 185 L364 150" stroke="#3e6b2e" stroke-width="2" fill="none" stroke-dasharray="5 4"/><text x="250" y="100" font-size="12" fill="#c0392b">木石前盟</text><text x="430" y="100" font-size="12" fill="#a9711a">金玉良缘</text><text x="340" y="245" font-size="13" fill="#9c5a3a" text-anchor="middle">宝玉居中，牵起两组情感与家族关系</text><defs><marker id="hxb" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker><marker id="hxc" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#d9a441"/></marker></defs></svg>', caption: '宝玉为枢纽：木石前盟与金玉良缘，交织成家族情感网。' },
        { type: 'heading', text: '三、情节结构与艺术成就' },
        { type: 'paragraph', text: '《红楼梦》采用<strong>网状结构</strong>：以宝黛钗爱情为主线，旁逸出数百个人物的命运支线，彼此勾连、互为因果，如百川归海又各成流域。这种结构打破了传统小说单线推进的模式，气象宏大而脉络分明。' },
        { type: 'keypoint', label: '草蛇灰线，伏脉千里', text: '脂砚斋评其结构为「<strong>草蛇灰线，伏脉千里</strong>」：前文看似不经意的一笔，往往是后文巨变的伏笔。如<strong>判词</strong>与<strong>《红楼梦》十二支仙曲</strong>早已预示众女儿的结局；<strong>「元春省亲」的繁华</strong>中已暗藏「盛极必衰」的叹息。读时需前后互证，方见匠心。' },
        { type: 'example', label: '鉴赏示范', text: '试以「玉带林中挂，金簪雪里埋」的判词为例，分析其伏笔艺术。<br><br><strong>解析</strong>：这两句判词分别以<strong>拆字与隐喻</strong>预示黛玉、宝钗的命运：「玉带林中挂」倒读为「林带玉」，暗指林黛玉泪尽而亡、孤洁悬空；「金簪雪里埋」谐音「薛」，写宝钗虽嫁宝玉却独守空闺、被「雪」（冷）埋没。判词置于第五回，早于故事主体数十回，却已定下二人悲剧结局，正是「<strong>草蛇灰线，伏脉千里</strong>」的绝佳范例，体现曹雪芹「未写其果、先示其因」的叙事天才。' },
        { type: 'keypoint', label: '诗词穿插', text: '小说<strong>诗化特征鲜明</strong>：人物判词、红楼梦十二支、黛玉《葬花吟》、宝玉《芙蓉女儿诔》等诗词，既是情节组成部分，又是人物命运的谶语与性格的写照。诗词与叙事交融，使全书兼具小说之形与诗赋之美。' },
        { type: 'warn', label: '易错·前后作者', text: '须明确：<strong>前八十回为曹雪芹原著</strong>，<strong>后四十回一般认定为高鹗续补</strong>。二者在思想深度、人物结局（如黛玉之死、贾府之败、宝玉出家）的处理上存在落差，续书虽使故事完整，却减弱了原作的悲剧力量。阅读时应有「原续之分」的清醒认识。' },
        { type: 'list', items: ['网状结构：主线（宝黛钗）与数百支线交织', '草蛇灰线：判词、仙曲预示人物结局', '诗词穿插：判词、葬花吟即命运谶语', '人物塑造：「正邪两赋」，打破好人坏人二分', '语言艺术：白描传神、对话各如其人', '悲剧意蕴：爱情、青春、家族三重悲剧叠加'] },
        { type: 'heading', text: '四、思想内涵与阅读方法' },
        { type: 'keypoint', label: '悲剧意蕴', text: '《红楼梦》的悲剧是<strong>多层次的</strong>：表层是<strong>宝黛爱情悲剧</strong>，深层是<strong>「千红一哭、万艳同悲」的女儿悲剧</strong>，更深层是<strong>封建家族与制度必然衰亡</strong>的历史悲剧。曹雪芹在「忽喇喇似大厦倾」的挽歌中，寄寓了对美好生命被毁灭的深沉悲悯。' },
        { type: 'keypoint', label: '社会批判', text: '小说对<strong>封建社会作了全面批判</strong>：揭露贵族阶级的<strong>奢侈腐朽与内部倾轧</strong>，抨击<strong>男尊女卑、科举仕途、礼教虚伪</strong>，也写出底层丫鬟的惨淡命运。它以「补天无力」的苍凉，暗示那一套制度已无可救药。' },
        { type: 'tip', label: '整本书阅读方法', text: '阅读这部巨著，可尝试：①<strong>批注法</strong>——在疑处、妙处圈点勾画，与作者对话；②<strong>专题研读</strong>——围绕「宝黛爱情」「金陵十二钗」「饮食器物」等小专题深读；③<strong>画关系图</strong>——理清人物与情节网络；④<strong>前后勾连</strong>——以判词、伏笔为线索回看前文。整本书阅读贵在「慢」与「通」。' },
        { type: 'poem', text: '花谢花飞花满天，红消香断有谁怜？\n游丝软系飘春榭，落絮轻沾扑绣帘。\n闺中女儿惜春暮，愁绪满怀无释处。\n手把花锄出绣帘，忍踏落花来复去。\n……\n一年三百六十日，风刀霜剑严相逼。\n明媚鲜妍能几时，一朝飘泊难寻觅。\n……\n一朝春尽红颜老，花落人亡两不知！' },
        { type: 'warn', label: '易错·阅读定位', text: '《红楼梦》<strong>绝非单纯的「才子佳人」或「爱情小说」</strong>。宝黛之情只是透视封建家族的一面镜子；若只读「三角恋」便失其本。同时它<strong>也不是影射某朝某代的政治谜语</strong>，而应置于普遍的人性、命运与盛衰规律中理解，方能得其三昧。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#f3eee2"/><g font-size="13" text-anchor="middle"><rect x="30" y="50" width="150" height="120" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="105" y="95" fill="#5b3b12">元春省亲</text><text x="105" y="122" fill="#5b4636" font-size="12">鲜花着锦</text><text x="105" y="146" fill="#5b4636" font-size="12">烈火烹油（盛）</text><rect x="210" y="50" width="150" height="120" rx="8" fill="#e8893b" stroke="#c0392b" stroke-width="2"/><text x="285" y="95" fill="#fff">内忧外患</text><text x="285" y="122" fill="#fff" font-size="12">子孙不肖</text><text x="285" y="146" fill="#fff" font-size="12">财政亏空</text><rect x="390" y="50" width="150" height="120" rx="8" fill="#9c1a2e" stroke="#7a0f1a" stroke-width="2"/><text x="465" y="95" fill="#fff">抄家败落</text><text x="465" y="122" fill="#fff" font-size="12">树倒猢狲散</text><text x="465" y="146" fill="#fff" font-size="12">白茫茫大地</text><rect x="570" y="45" width="100" height="130" rx="8" fill="#33485a" stroke="#1f3348" stroke-width="2"/><text x="620" y="95" fill="#fff">宝玉出家</text><text x="620" y="122" fill="#fff" font-size="12">悬崖撒手</text><text x="620" y="146" fill="#fff" font-size="12">归于空</text></g><path d="M180 110 h30 M360 110 h30 M540 110 h30" stroke="#c0392b" stroke-width="2.5" marker-end="url(#hxd)"/><text x="340" y="210" font-size="13" fill="#9c5a3a" text-anchor="middle">结构脉络：盛 → 衰 → 散 → 空，一部家族史的挽歌</text><defs><marker id="hxd" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '贾府由「烈火烹油」的极盛，终归于「白茫茫大地真干净」。' },
        { type: 'list', items: ['曹雪芹，「披阅十载，增删五次」；又名《石头记》', '版本：脂评本（八十回）与程高本（一百二十回）', '四大家族：贾史王薛，一损俱损', '结构：网状叙事，「草蛇灰线，伏脉千里」', '三重悲剧：爱情、女儿、家族衰亡', '阅读法：批注、专题研读、画关系图、前后勾连'] },
        { type: 'keypoint', label: '整本书阅读的价值', text: '《红楼梦》是一座<strong>常读常新的文化富矿</strong>。整本书阅读的意义，不只在于「读完一个故事」，更在于训练<strong>宏观把握结构、细处体贴人物、跨章回勾连伏笔</strong>的阅读能力。这种能力，会让你终身受用于一切厚重的书。' }
      ],
      exercises: [
        { type: 'choice', question: '《红楼梦》前八十回的作者是？', options: ['高鹗', '曹雪芹', '罗贯中', '吴敬梓'], answer: '曹雪芹', explanation: '《红楼梦》前八十回为清代作家曹雪芹所著，他「披阅十载，增删五次」，生前基本完成前八十回便贫病而逝。后四十回一般认定为高鹗续补，二人不可混为一谈，阅读时须有原续之分。' },
        { type: 'choice', question: '脂砚斋评语所称「草蛇灰线，伏脉千里」是指？', options: ['写景手法', '前文细微伏笔呼应后文结局的叙事结构', '诗词格律', '人物外貌描写'], answer: '前文细微伏笔呼应后文结局的叙事结构', explanation: '「草蛇灰线，伏脉千里」形容曹雪芹在前面看似不经意的一笔（如判词、仙曲、省亲细节），实为后文巨变的伏笔，前后遥相呼应。这种绵密的结构使全书浑然一体，是《红楼梦》叙事艺术的最高成就之一。' },
        { type: 'fill', question: '小说中「______」（木石前盟 / 金玉良缘）指宝玉与黛玉的前世姻缘，「金玉良缘」则指宝玉与宝钗的婚姻。', answer: '木石前盟', explanation: '「木石前盟」源于宝玉前身是赤瑕宫神瑛侍者、黛玉前身是绛珠仙草的神话，指二人前世注定的知己之恋；「金玉良缘」则指宝玉的通灵玉与宝钗的金锁相配。两组情感对照构成全书主线，最终以悲剧收场。' },
        { type: 'choice', question: '关于《红楼梦》后四十回，正确的认识是？', options: ['也是曹雪芹亲笔', '一般认定为高鹗续补，与原著存在落差', '比前八十回更好', '与前面毫无关联'], answer: '一般认定为高鹗续补，与原著存在落差', explanation: '后四十回由程伟元、高鹗整理补缀，使故事完整，但在思想深度与人物结局处理上常被认为逊于曹雪芹原意，削弱了原有悲剧力量。阅读时应区分原续，既肯定续书之功，也认识其局限。' },
        { type: 'choice', question: '《红楼梦》整本书阅读最推荐的方法是？', options: ['只看电视剧', '批注、专题研读、画人物关系图、前后勾连伏笔', '只读爱情片段', '跳读略过诗词'], answer: '批注、专题研读、画人物关系图、前后勾连伏笔', explanation: '面对这部网状结构的巨著，批注可深化理解，专题研读能化繁为简，画关系图可理清人物网络，前后勾连伏笔（如以判词印证结局）则能体会「草蛇灰线」之妙。整本书阅读贵在慢与通，而非碎片化略读。' }
      ]
    }
  );
})();
