/* ============================================================
 * 高二语文 · 选择性必修 下册 · 第二单元 时代镜像
 * （中国现当代作家作品研习）
 * 7 课时：阿Q正传 / 边城 / 大堰河 / 再别康桥 / 一个消逝了的山村 / 秦腔 / 茶馆
 * 数据注入：chinese.xb3.points
 * 质量标准：每课 ≥21 内容块 / 3 SVG / 含 example+table+tip+warn+list+keypoint+heading+paragraph
 * 第3、4课为诗歌，用 poem 块呈现原诗
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'xb3');
  if (!v) return;

  v.points.push(

    /* ==================== 第1课 《阿Q正传（节选）》 ==================== */
    {
      id: 'xb3-u2-l1',
      cover: 'assets/cover/chinese/xb3-u2-l1.svg',
      name: '《阿Q正传（节选）》',
      author: '鲁迅',
      chapter: '第二单元 时代镜像（中国现当代作家作品研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、鲁迅与《呐喊》' },
        { type: 'paragraph', text: '鲁迅（1881—1936），原名周树人，字豫才，浙江绍兴人，中国现代文学的奠基人。《阿Q正传》最初发表于1921年，后收入小说集《呐喊》。小说以未庄为舞台，塑造了阿Q这一不朽的艺术典型，被誉为“画出沉默国民的灵魂”的杰作。' },
        { type: 'keypoint', label: '《呐喊》的地位', text: '《呐喊》是鲁迅的第一部<strong>小说集</strong>，收《狂人日记》《孔乙己》《药》《阿Q正传》等十四篇。它<strong>直面国民性</strong>，以清醒的现实主义揭开封建社会的病苦，是中国现代小说的开山之作。' },
        { type: 'list', items: ['作者：鲁迅，中国现代文学奠基人', '出处：《呐喊》小说集，1921年连载于《晨报副刊》', '背景：辛亥革命前后，未庄的闭塞与蒙昧', '体裁：中篇小说（节选）'] },
        { type: 'heading', text: '二、阿Q的形象与精神胜利法' },
        { type: 'paragraph', text: '阿Q是一个靠打短工为生的赤贫农民，地位低下却又妄自尊大。他屡遭挫败，却总能以一套自欺欺人的逻辑求得心理上的“胜利”，这便是著名的“精神胜利法”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">阿Q的“精神胜利法”</text><circle cx="340" cy="130" r="46" fill="#9c4221"/><text x="340" y="126" text-anchor="middle" font-size="14" fill="#fff">阿Q</text><text x="340" y="148" text-anchor="middle" font-size="12" fill="#fff">受挫</text><rect x="60" y="100" width="150" height="55" rx="8" fill="#e8b4a0"/><text x="135" y="132" text-anchor="middle" font-size="13" fill="#5b2c16">儿子打老子</text><rect x="470" y="100" width="150" height="55" rx="8" fill="#d99a86"/><text x="545" y="132" text-anchor="middle" font-size="13" fill="#5b2c16">欺小尼姑</text><path d="M210 127 L294 130" stroke="#9c4221" stroke-width="2"/><path d="M386 130 L470 127" stroke="#9c4221" stroke-width="2"/><text x="340" y="212" text-anchor="middle" font-size="13" fill="#555">现实中失败，却以虚幻胜利自我欺骗</text></svg>', caption: '阿Q在受挫后用“儿子打老子”“欺小尼姑”等逻辑转败为胜。' },
        { type: 'heading', text: '三、精神胜利法的典型表现' },
        { type: 'keypoint', label: '精神胜利法', text: '阿Q的<strong>精神胜利法</strong>表现为：被人打后想“我总算被儿子打了”；赌钱输光便自打耳光“转败为胜”；欺侮小尼姑以显威风。他<strong>妄自尊大、自欺欺人、欺软怕硬</strong>，用虚幻的胜利掩盖现实的屈辱。' },
        { type: 'list', items: ['妄自尊大：以“我们先前——比你阔得多啦”自我安慰', '自欺欺人：挨打后以“儿子打老子”转败为胜', '欺软怕硬：怕强权而转欺弱小的小尼姑、小D', '麻木健忘：吃亏后不久便“得意地笑了”'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">阿Q的周边关系</text><circle cx="340" cy="120" r="40" fill="#9c4221"/><text x="340" y="124" text-anchor="middle" font-size="13" fill="#fff">阿Q</text><circle cx="110" cy="80" r="32" fill="#c0473a"/><text x="110" y="84" text-anchor="middle" font-size="12" fill="#fff">赵太爷</text><circle cx="110" cy="170" r="32" fill="#a8632e"/><text x="110" y="174" text-anchor="middle" font-size="12" fill="#fff">假洋鬼子</text><circle cx="570" cy="80" r="32" fill="#7aa05a"/><text x="570" y="84" text-anchor="middle" font-size="12" fill="#fff">小D</text><circle cx="570" cy="170" r="32" fill="#c08168"/><text x="570" y="174" text-anchor="middle" font-size="12" fill="#fff">吴妈</text><path d="M148 95 L300 115" stroke="#555" stroke-width="2"/><path d="M148 155 L300 125" stroke="#555" stroke-width="2"/><path d="M532 95 L380 115" stroke="#555" stroke-width="2"/><path d="M532 155 L380 125" stroke="#555" stroke-width="2"/><text x="340" y="215" text-anchor="middle" font-size="12" fill="#555">被强者欺凌，又转欺弱者——欺软怕硬</text></svg>', caption: '阿Q在强者面前卑怯，在弱者面前逞凶，凸显双面性。' },
        { type: 'heading', text: '四、思想内涵：国民性批判' },
        { type: 'paragraph', text: '阿Q的悲剧不仅是个人的，更是民族的。鲁迅借阿Q揭示了中国国民性中麻木、愚昧、健忘与奴性的一面，发出“改造国民性”的启蒙呐喊，期望以文学疗救民族精神。' },
        { type: 'keypoint', label: '国民性批判', text: '鲁迅曾说“<strong>凡是愚弱的国民，即使体格如何健全，如何茁壮，也只能做毫无意义的示众的材料和看客</strong>”。阿Q最终被当作替罪羊枪毙，临刑前还想着“圆圈画得不圆”，其麻木令人痛心，这正是国民性批判的重心。' },
        { type: 'heading', text: '五、艺术特色：讽刺与白描' },
        { type: 'example', label: '手法赏析', text: '“阿Q不开口，想往后退了……”<br>鲁迅以<strong>白描</strong>手法，用最简省的笔墨勾勒动作与神态，不加形容却神情毕现；又借<strong>讽刺</strong>笔调写阿Q向吴妈求爱出丑、临刑画圆圈不圆，于滑稽中见悲凉，使批判锋利而深沉。' },
        { type: 'table', headers: ['手法', '例句/情节', '效果'], rows: [['白描', '“阿Q不开口，想往后退了”', '简笔传神，不加渲染而性格自见'], ['讽刺', '精神胜利法的种种闹剧', '于可笑中见可悲，批判锋利'], ['对比', '阿Q对强者卑怯、对弱者凶狠', '揭露欺软怕硬的双面性']] },
        { type: 'warn', label: '易错点', text: '不要把“精神胜利法”简单理解为“乐观”。它是<strong>在现实中失败却用虚假胜利自我欺骗</strong>，本质是自欺与麻木，恰恰是需要被批判的国民劣根性，而非值得肯定的心理调节。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">艺术特色：白描与讽刺</text><rect x="60" y="70" width="250" height="60" rx="8" fill="#9c4221"/><text x="185" y="102" text-anchor="middle" font-size="14" fill="#fff">白描：简笔传神</text><rect x="370" y="70" width="250" height="60" rx="8" fill="#c0473a"/><text x="495" y="102" text-anchor="middle" font-size="14" fill="#fff">讽刺：于可笑见可悲</text><text x="185" y="170" font-size="13" fill="#555">如“阿Q不开口，想往后退”</text><text x="495" y="170" font-size="13" fill="#555">如画圆圈不圆的荒诞</text><text x="340" y="215" text-anchor="middle" font-size="13" fill="#555">两相结合，服务国民性批判</text></svg>', caption: '白描传神与讽刺笔调相济，使阿Q形象入木三分。' },
        { type: 'tip', label: '学习提示', text: '预习可抓住“精神胜利法”这一核心，梳理阿Q从妄自尊大到被枪毙的命运线；重点体会白描与讽刺如何服务于国民性批判，并尝试联系当下思考其现实余音。' },
        { type: 'reading', text: '延伸思考：阿Q的“精神胜利法”在今天的网络生活、职场心态中是否仍有影子？鲁迅的国民性批判对当代青年有何启示？' }
      ],
      exercises: [
        { type: 'choice', question: '《阿Q正传》后来被收入鲁迅的哪部小说集？', options: ['《彷徨》', '《呐喊》', '《故事新编》', '《朝花夕拾》'], answer: '《呐喊》', explanation: '《阿Q正传》写于一九二一年，最初在《晨报副刊》连载，后收入鲁迅的第一部小说集《呐喊》。该集还收有《狂人日记》《孔乙己》等名篇，是中国现代小说的开山之作，因此正确选项是《呐喊》。' },
        { type: 'fill', question: '阿Q在现实中失败后求得心理安慰的一套自欺欺人逻辑，被称为“__胜利法”。', answer: '精神', explanation: '阿Q在现实中屡遭挫败，却总能通过自欺欺人的方式在心理上获得“胜利”，如被打了想“儿子打老子”、赌钱输光便自打耳光。鲁迅把这套逻辑称为“精神胜利法”，它是阿Q性格的核心，也是国民劣根性的集中体现。' },
        { type: 'choice', question: '下列对“精神胜利法”理解正确的一项是？', options: ['积极进取的心理调节', '现实中失败却以虚幻胜利自欺欺人', '科学理性的思维方式', '勇敢面对挫折的态度'], answer: '现实中失败却以虚幻胜利自欺欺人', explanation: '精神胜利法的本质是在实际失败后用虚幻的胜利来安慰自己，是一种自欺与麻木，而非积极的心理调节。阿Q正是靠它掩盖屈辱，恰恰是需要被批判的国民性弱点，故“现实中失败却以虚幻胜利自欺欺人”理解正确。' },
        { type: 'fill', question: '阿Q被当作替罪羊枪毙，临刑前还遗憾自己画的__不圆，凸显其至死麻木。', answer: '圆圈', explanation: '小说结尾，阿Q被当作替罪羊送上刑场，画供时竟因圆圈画得不圆而羞愧遗憾。这一细节极具讽刺：直到生命终结，他仍浑然不觉自身的悲剧，其麻木令人痛心，凸显了国民性批判的深刻。' },
        { type: 'choice', question: '鲁迅创作《阿Q正传》的核心意图是？', options: ['歌颂农民起义', '批判国民性、唤醒启蒙', '描写爱情故事', '记录辛亥革命全过程'], answer: '批判国民性、唤醒启蒙', explanation: '鲁迅借阿Q这一典型，揭示中国国民性中麻木、愚昧、健忘与奴性的一面，并发出改造国民性、唤醒启蒙的呐喊。小说并非歌颂起义或记录革命史实，其核心在于以文学疗救民族精神，故选批判国民性、唤醒启蒙。' }
      ]
    },

    /* ==================== 第2课 《边城（节选）》 ==================== */
    {
      id: 'xb3-u2-l2',
      cover: 'assets/cover/chinese/xb3-u2-l2.svg',
      name: '《边城（节选）》',
      author: '沈从文',
      chapter: '第二单元 时代镜像（中国现当代作家作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、沈从文与“边城”世界' },
        { type: 'paragraph', text: '沈从文（1902—1988），原名沈岳焕，湖南凤凰人，京派小说的代表人物。《边城》写于1934年，以湘西茶峒为背景，讲述撑渡船的老人与孙女翠翠之间温柔而哀婉的故事。' },
        { type: 'keypoint', label: '边城世界', text: '《边城》构建了一个<strong>未被现代文明浸染的湘西世界</strong>：山水清丽、民风淳朴、人情温暖。沈从文借此寄托对<strong>人性之美</strong>的向往，与都市文明的虚伪形成对照。' },
        { type: 'list', items: ['作者：沈从文，京派小说代表', '背景：湘西茶峒，风土人情浓郁', '情节：翠翠与傩送、天保的朦胧情愫', '主题：讴歌淳朴人性，哀婉命运无常'] },
        { type: 'heading', text: '二、翠翠等人物的形象' },
        { type: 'paragraph', text: '翠翠是老船夫的孙女，在渡船上长大，纯真、温柔而含蓄；爷爷忠厚慈爱；天保、傩送兄弟诚挚热情；顺顺慷慨豪爽。人物皆不带杂质，宛若山水间自然生长的人。' },
        { type: 'keypoint', label: '翠翠的少女情态', text: '翠翠听到傩送的歌声会<strong>脸红心跳</strong>，却只以轻轻的呼唤回应；爷爷试探婚事，她便<strong>娇嗔跑开</strong>。沈从文以极淡的笔墨写极深的情，少女的羞涩与期待跃然纸上。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">边城人物关系</text><circle cx="340" cy="120" r="38" fill="#9c4221"/><text x="340" y="124" text-anchor="middle" font-size="13" fill="#fff">翠翠</text><circle cx="130" cy="80" r="32" fill="#7aa05a"/><text x="130" y="84" text-anchor="middle" font-size="12" fill="#fff">爷爷</text><circle cx="130" cy="170" r="32" fill="#c08168"/><text x="130" y="174" text-anchor="middle" font-size="12" fill="#fff">天保</text><circle cx="550" cy="80" r="32" fill="#c08168"/><text x="550" y="84" text-anchor="middle" font-size="12" fill="#fff">傩送</text><circle cx="550" cy="170" r="32" fill="#a8632e"/><text x="550" y="174" text-anchor="middle" font-size="12" fill="#fff">顺顺</text><path d="M168 95 L302 115" stroke="#9c4221" stroke-width="2"/><path d="M168 155 L302 125" stroke="#9c4221" stroke-width="2"/><path d="M512 95 L380 115" stroke="#9c4221" stroke-width="2"/><path d="M512 155 L380 125" stroke="#9c4221" stroke-width="2"/><text x="340" y="215" text-anchor="middle" font-size="12" fill="#555">翠翠居于情感中心，两兄弟之情暗生波折</text></svg>', caption: '翠翠与爷爷、天保、傩送、顺顺织成温情的人物之网。' },
        { type: 'heading', text: '三、湘西的人性之美与诗意' },
        { type: 'keypoint', label: '人性之美', text: '翠翠的<strong>纯真含蓄</strong>：她与傩送两心相悦却从不直说，只在端午龙舟、月下歌声中暗生情愫。这种<strong>哀而不伤、含而不露</strong>的情感，正是沈从文心中理想的“优美、健康、自然”的人性。' },
        { type: 'list', items: ['翠翠：纯真温柔、含蓄深情', '爷爷：忠厚慈爱、担忧孙女', '傩送：热诚真挚、托人送情', '天保：磊落坦荡、成人之美', '顺顺：慷慨豪爽、重义轻利'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">象征：渡船与白塔</text><rect x="80" y="150" width="160" height="40" rx="6" fill="#7aa05a"/><text x="160" y="176" text-anchor="middle" font-size="13" fill="#fff">渡船</text><rect x="430" y="60" width="60" height="130" fill="#e8d9b0" stroke="#cbb89d"/><polygon points="420,60 500,60 460,25" fill="#cbb89d"/><text x="460" y="210" text-anchor="middle" font-size="13" fill="#5b2c16">白塔</text><path d="M240 170 L420 130" stroke="#9c4221" stroke-width="2" stroke-dasharray="4"/><text x="340" y="215" text-anchor="middle" font-size="12" fill="#555">渡船摆渡人心，白塔象征古老宁静的秩序</text></svg>', caption: '渡船与白塔是湘西世界的两大象征物，白塔坍倒暗喻秩序飘摇。' },
        { type: 'heading', text: '四、艺术特色：诗化与象征' },
        { type: 'example', label: '手法赏析', text: '“黄昏照样的温柔、美丽和平静……”<br>小说<strong>散文化、诗化</strong>：不重情节冲突，而以风景、民俗、歌咏烘托情绪；<strong>象征</strong>手法贯穿——“渡船”象征坚守与摆渡人心，“白塔”象征古老宁静的秩序，白塔坍倒暗喻美好传统的飘摇。' },
        { type: 'table', headers: ['手法', '表现', '效果'], rows: [['诗化语言', '以景写情，节奏舒缓', '营造牧歌般的意境'], ['象征', '渡船、白塔', '寄托对人性之美的珍视'], ['散文化', '淡化情节冲突', '重情绪流与风俗画']] },
        { type: 'warn', label: '易错点', text: '《边城》的悲剧不是<strong>恶人作祟</strong>，而是<strong>命运无常与误会</strong>：天保溺水、傩送远走、爷爷离世，皆非谁之罪过。阅读时勿以“坏人制造冲突”的旧式小说逻辑衡量，其美正在“无恶之悲剧”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">诗化·散文化小说</text><rect x="60" y="70" width="170" height="55" rx="8" fill="#7aa05a"/><text x="145" y="102" text-anchor="middle" font-size="13" fill="#fff">以景写情</text><rect x="255" y="70" width="170" height="55" rx="8" fill="#c08168"/><text x="340" y="102" text-anchor="middle" font-size="13" fill="#fff">淡化冲突</text><rect x="450" y="70" width="170" height="55" rx="8" fill="#9c4221"/><text x="535" y="102" text-anchor="middle" font-size="13" fill="#fff">牧歌意境</text><text x="340" y="172" text-anchor="middle" font-size="13" fill="#555">不重情节而重情绪流与风俗画</text><text x="340" y="202" text-anchor="middle" font-size="12" fill="#555">沈从文以“静美”笔调写人性之美</text></svg>', caption: '《边城》以诗化、散文化的抒情笔调营造牧歌意境。' },
        { type: 'tip', label: '学习提示', text: '预习可聚焦翠翠与傩送的“误会—等待”线索，体会沈从文“静美”的笔调；背诵文中写景片段，感受诗化小说的语言节奏，并与鲁迅的批判风格对读。' },
        { type: 'heading', text: '五、文学意义' },
        { type: 'paragraph', text: '《边城》被誉为“一颗千古不磨的珠玉”，它为中国现代小说提供了与鲁迅式批判、茅盾式写实不同的“抒情乡土”一脉，深深影响了汪曾祺等后世作家。' },
        { type: 'reading', text: '延伸思考：沈从文笔下“边城”的人性之美，与鲁迅笔下的国民性批判看似相反，二者是否共同指向对“人”的深切关怀？' }
      ],
      exercises: [
        { type: 'choice', question: '《边城》的作者沈从文属于下列哪一文学流派？', options: ['京派', '海派', '山药蛋派', '荷花淀派'], answer: '京派', explanation: '沈从文长期居于北平，与废名、汪曾祺等共同形成京派作家群，其作品疏离政治、钟情乡土，风格冲淡抒情。《边城》正是京派小说的代表作，故正确选项为京派，而非海派或解放区的山药蛋派、荷花淀派。' },
        { type: 'fill', question: '小说中“渡船”与“__”是重要象征物，后者坍倒暗喻古老宁静秩序的飘摇。', answer: '白塔', explanation: '小说中“渡船”与“白塔”是贯穿全篇的象征物：渡船象征老船夫对渡客的坚守与摆渡人心，白塔象征湘西古老宁静的生活秩序。结尾白塔坍倒，暗喻美好传统在时代风雨中的飘摇，是理解主题的关键意象。' },
        { type: 'choice', question: '下列对翠翠形象概括最准确的是？', options: ['泼辣大胆、主动追求', '纯真温柔、含蓄深情', '阴险狡诈', '冷漠孤僻'], answer: '纯真温柔、含蓄深情', explanation: '翠翠在渡船上长大，纯真、温柔而含蓄：与傩送两心相悦却从不直说，只在月下歌声与端午龙舟中暗生情愫。她既不泼辣也不冷漠，而是一种哀而不伤、含而不露的少女之美，故选纯真温柔、含蓄深情。' },
        { type: 'fill', question: '《边城》的悲剧被称为“无恶之悲剧”，其根源不是恶人作祟，而是__与命运的无常。', answer: '误会', explanation: '《边城》的悲剧没有恶人：天保意外溺水、傩送负气远走、爷爷忧急离世，皆由命运无常与一连串误会所致。这种“无恶之悲剧”更显哀婉，也正切合沈从文对人性之美的珍视与对无常的怅惘。' },
        { type: 'choice', question: '《边城》的艺术特色突出表现为？', options: ['尖锐的社会批判与讽刺', '诗化、散文化的抒情语言', '冗长的心理独白', '荒诞的魔幻叙事'], answer: '诗化、散文化的抒情语言', explanation: '《边城》不重尖锐的讽刺与社会批判，而以诗化、散文化的抒情笔调营造牧歌意境，情节舒缓、风景如画、人情温暖。这正是沈从文有别于鲁迅式写实的另一路文学传统，故选诗化、散文化的抒情语言。' }
      ]
    },

    /* ==================== 第3课 《大堰河——我的保姆》 ==================== */
    {
      id: 'xb3-u2-l3',
      cover: 'assets/cover/chinese/xb3-u2-l3.svg',
      name: '《大堰河——我的保姆》',
      author: '艾青',
      chapter: '第二单元 时代镜像（中国现当代作家作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、艾青与他的诗' },
        { type: 'paragraph', text: '艾青（1910—1996），原名蒋海澄，浙江金华人，中国现代诗歌的巨匠。早年赴法国留学，受凡尔哈伦、波特莱尔影响；1933年于狱中写下《大堰河——我的保姆》，一举成名，由此登上诗坛。' },
        { type: 'keypoint', label: '艾青的诗风', text: '艾青诗歌两大核心<strong>意象</strong>是<strong>“土地”与“太阳”</strong>：土地寄托对祖国与人民的深沉挚爱，太阳象征光明与希望。他提倡<strong>自由诗</strong>，打破格律，以散文美入诗。' },
        { type: 'list', items: ['作者：艾青，现代诗代表', '体裁：自由诗（不押韵、不整齐）', '意象：土地、太阳、乳母', '情感：对大堰河的深切怀念与感恩'] },
        { type: 'heading', text: '二、原诗（节选）' },
        { type: 'poem', text: '大堰河，是我的保姆。\n她的名字就是生她的村庄的名字，\n她是童养媳，\n大堰河，是我的保姆。\n我是地主的儿子；\n也是吃了大堰河的奶而长大了的\n大堰河的儿子。\n\n大堰河，今天我看到雪使我想起了你：\n你的被雪压着的草盖的坟墓，\n你的关闭了的故居檐头的枯死的瓦菲，\n你的被典押了的一丈平方的园地，\n你的门前的长了青苔的石椅，\n大堰河，今天我看到雪使我想起了你。\n\n大堰河，\n我是吃了你的奶而长大了的\n你的儿子，\n我敬你\n爱你！' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">大堰河：核心意象</text><circle cx="160" cy="120" r="40" fill="#9c4221"/><text x="160" y="116" text-anchor="middle" font-size="13" fill="#fff">乳母</text><text x="160" y="138" text-anchor="middle" font-size="12" fill="#fff">大堰河</text><circle cx="360" cy="120" r="40" fill="#7aa05a"/><text x="360" y="124" text-anchor="middle" font-size="13" fill="#fff">土地</text><circle cx="560" cy="120" r="40" fill="#a8cdf0"/><text x="560" y="124" text-anchor="middle" font-size="13" fill="#33536e">雪·坟</text><path d="M200 120 L318 120" stroke="#9c4221" stroke-width="2"/><path d="M400 120 L518 120" stroke="#9c4221" stroke-width="2"/><text x="340" y="212" text-anchor="middle" font-size="12" fill="#555">乳母与土地、雪交织成对底层母亲的深情怀念</text></svg>', caption: '乳母、土地、雪与坟构成全诗抒情的核心意象群。' },
        { type: 'heading', text: '三、思想内涵：感恩与怀念' },
        { type: 'paragraph', text: '诗人以赤子之心追忆大堰河：她虽贫贱、劳作一生，却以乳汁与温情养育了“我”。诗中满溢对乳母的感恩与同情，以及对不公道社会的隐隐不平。' },
        { type: 'keypoint', label: '情感内核', text: '“<strong>我是吃了你的奶而长大了的你的儿子</strong>”——诗人不以出身地主家庭为荣，而以<strong>劳动人民的养育之恩</strong>为根。这种跨越阶级的认同，使诗情格外真挚动人。' },
        { type: 'list', items: ['怀念：忆乳母劳作与慈爱', '感恩：以“儿子”自许，认乳母为母', '悲悯：同情底层妇女的悲苦命运', '批判：对不公社会的无声质询'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">修辞手法</text><rect x="60" y="70" width="250" height="60" rx="8" fill="#9c4221"/><text x="185" y="106" text-anchor="middle" font-size="14" fill="#fff">排比：铺叙劳作</text><rect x="370" y="70" width="250" height="60" rx="8" fill="#c08168"/><text x="495" y="106" text-anchor="middle" font-size="14" fill="#fff">反复：回环咏叹</text><text x="185" y="172" font-size="12" fill="#555">“在你……之后，你用……”</text><text x="495" y="172" font-size="12" fill="#555">“大堰河，是我的保姆”</text><text x="340" y="215" text-anchor="middle" font-size="13" fill="#555">自由诗中以句式奔涌情感</text></svg>', caption: '排比铺陈乳母劳作，反复咏叹“大堰河，是我的保姆”。' },
        { type: 'heading', text: '四、艺术特色：排比与自由诗' },
        { type: 'example', label: '手法赏析', text: '“你用你厚大的手掌把我抱在怀里，抚摸我……”<br>诗人连用<strong>排比</strong>铺叙大堰河洗衣、做饭、喂猪等日常劳作，以<strong>反复</strong>咏叹“大堰河，是我的保姆”，句式自由却情感奔涌，典型体现艾青自由诗的散文美。' },
        { type: 'table', headers: ['手法', '例句', '效果'], rows: [['排比', '“在你……之后，你用……”', '铺陈劳作，增强语势与深情'], ['反复', '“大堰河，是我的保姆”', '回环咏叹，强化眷恋'], ['对比', '“我”的地主家与乳母的贫寒', '凸显阶级落差与感恩']] },
        { type: 'warn', label: '易错点', text: '诗中“大堰河”是<strong>人名（乳母的本名）</strong>，而非河流；“堰”读作 yàn。朗诵时注意自由诗<strong>不押固定韵脚</strong>，应依情感自然断句，切忌套用古诗平仄与格律。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">自由诗的形式</text><text x="90" y="92" font-size="13" fill="#9c4221">不押固定韵</text><text x="90" y="122" font-size="13" fill="#9c4221">句式长短自由</text><text x="90" y="152" font-size="13" fill="#9c4221">以散文美入诗</text><line x1="320" y1="70" x2="320" y2="180" stroke="#cbb89d" stroke-width="2"/><text x="400" y="102" font-size="13" fill="#7aa05a">情感决定节奏</text><text x="400" y="132" font-size="13" fill="#7aa05a">口语般自然</text><text x="340" y="215" text-anchor="middle" font-size="12" fill="#555">打破格律，让赤子之情自由奔涌</text></svg>', caption: '自由诗不受格律束缚，以情感驱动节奏，呈现散文美。' },
        { type: 'tip', label: '学习提示', text: '预习可圈画诗中反复出现的“大堰河，是我的保姆”与排比句群，体会自由诗“形式自由、情感奔放”的特质；尝试有感情朗诵结尾直抒胸臆的段落。' },
        { type: 'heading', text: '五、文学史意义' },
        { type: 'paragraph', text: '《大堰河——我的保姆》标志着艾青诗歌创作的起点，也奠定了其“土地—太阳”的意象体系，是中国现代自由诗的典范之作，影响了后世众多抒情诗人。' },
        { type: 'reading', text: '延伸思考：艾青以“乳母—土地”寄托对人民的爱，这与杜甫“安得广厦千万间”的民胞物与之情有何相通之处？' }
      ],
      exercises: [
        { type: 'choice', question: '艾青诗歌中反复出现的两大核心意象是？', options: ['月亮与流水', '土地与太阳', '高山与大海', '春风与杨柳'], answer: '土地与太阳', explanation: '艾青诗歌中最稳定、最核心的两大意象是“土地”与“太阳”：土地寄托对祖国与劳动人民的深沉挚爱，太阳象征光明、希望与新生。二者贯穿其一生创作，是他抒情体系的支柱，故正确选项为土地与太阳。' },
        { type: 'fill', question: '《大堰河——我的保姆》采用__诗体，打破格律、不押固定韵脚，以散文美入诗。', answer: '自由', explanation: '《大堰河——我的保姆》采用自由诗体，不押固定韵脚、句式长短自由、不受格律束缚，而以散文美入诗。这种形式使情感得以奔放自然地倾泻，成为艾青也是中国现代自由诗的典范之作。' },
        { type: 'choice', question: '下列对“大堰河”理解正确的是？', options: ['一条河流的名称', '诗人的乳母（人名）', '诗人的故乡', '一种植物'], answer: '诗人的乳母（人名）', explanation: '“大堰河”是诗人的乳母的本名，取自她出生村庄的名字，并非河流或植物。诗人以乳母的遭遇寄托对底层劳动妇女的感恩与同情，阅读时须先弄清这一基本指代，故选诗人的乳母（人名）。' },
        { type: 'fill', question: '诗中“我是吃了你的奶而长大了的你的__”直抒对乳母的感恩与认同。', answer: '儿子', explanation: '诗的结尾诗人直抒胸臆：“我是吃了你的奶而长大了的你的儿子，我敬你爱你！”他以“儿子”自许，表明自己虽出身地主家庭，却认劳动人民为母、以养育之恩为根，情感真挚而超越阶级。' },
        { type: 'choice', question: '诗中“你用你厚大的手掌把我抱在怀里……”主要运用的修辞手法是？', options: ['排比', '夸张', '对偶', '设问'], answer: '排比', explanation: '诗人连用“在你……之后，你用你厚大的手掌……”的相同句式，铺叙大堰河洗衣、做饭、喂猪等日常劳作，这是典型的排比手法，既增强语势，又把感激与眷恋层层推向高潮，故选排比。' }
      ]
    },

    /* ==================== 第4课 《再别康桥》 ==================== */
    {
      id: 'xb3-u2-l4',
      cover: 'assets/cover/chinese/xb3-u2-l4.svg',
      name: '《再别康桥》',
      author: '徐志摩',
      chapter: '第二单元 时代镜像（中国现当代作家作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、徐志摩与新月派' },
        { type: 'paragraph', text: '徐志摩（1897—1931），浙江海宁人，新月派的代表诗人。他留学英美，深受欧美浪漫诗风熏陶；《再别康桥》写于1928年重访剑桥（康桥）后归国途中，是其最负盛名的抒情诗。' },
        { type: 'keypoint', label: '新月派与三美', text: '新月派提倡<strong>“三美”</strong>主张：<strong>音乐美</strong>（韵律和谐）、<strong>绘画美</strong>（辞藻绚丽、意象如画）、<strong>建筑美</strong>（节式匀称、句式整齐）。《再别康桥》是“三美”的典范之作。' },
        { type: 'list', items: ['作者：徐志摩，新月派代表', '体裁：现代抒情诗', '地点：剑桥（康桥）', '情感：对康桥的眷恋与离愁'] },
        { type: 'heading', text: '二、原诗（全文）' },
        { type: 'poem', text: '轻轻的我走了，\n正如我轻轻的来；\n我轻轻的招手，\n作别西天的云彩。\n\n那河畔的金柳，\n是夕阳中的新娘；\n波光里的艳影，\n在我的心头荡漾。\n\n软泥上的青荇，\n油油的在水底招摇；\n在康河的柔波里，\n我甘心做一条水草！\n\n那榆荫下的一潭，\n不是清泉，是天上虹；\n揉碎在浮藻间，\n沉淀着彩虹似的梦。\n\n寻梦？撑一支长篙，\n向青草更青处漫溯；\n满载一船星辉，\n在星辉斑斓里放歌。\n\n但我不能放歌，\n悄悄是别离的笙箫；\n夏虫也为我沉默，\n沉默是今晚的康桥！\n\n悄悄的我走了，\n正如我悄悄的来；\n我挥一挥衣袖，\n不带走一片云彩。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">康桥意象群</text><text x="120" y="100" font-size="13" fill="#9c4221">金柳（新娘）</text><text x="330" y="100" font-size="13" fill="#9c4221">青荇</text><text x="520" y="100" font-size="13" fill="#9c4221">潭（虹）</text><text x="150" y="150" font-size="13" fill="#7aa05a">星辉</text><text x="360" y="150" font-size="13" fill="#7aa05a">波光艳影</text><text x="540" y="150" font-size="13" fill="#7aa05a">云彩</text><text x="340" y="212" text-anchor="middle" font-size="12" fill="#555">诸意象如画，构筑空灵唯美的离别意境</text></svg>', caption: '金柳、青荇、清潭、星辉、云彩织成康桥的唯美画卷。' },
        { type: 'heading', text: '三、思想内涵：眷恋与离愁' },
        { type: 'paragraph', text: '诗人以“轻轻的”“悄悄的”起结，写别康桥而不写送别之人，只与自然景物倾诉。字里行间是对母校、对青春岁月的无限眷恋，以及“不带走一片云彩”的洒脱离愁。' },
        { type: 'keypoint', label: '情感基调', text: '全诗<strong>哀而不伤</strong>：离愁是轻柔的、诗意的，而非撕心裂肺。诗人把深沉的眷恋化作“波光里的艳影”“彩虹似的梦”，于美丽中透出淡淡惆怅。' },
        { type: 'list', items: ['眷恋：对康桥风光与求学岁月的深情', '离愁：轻轻来去，不惊扰旧梦', '洒脱：“不带走一片云彩”的释然', '沉静：以自然之物为倾诉对象'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">新月派“三美”</text><rect x="60" y="70" width="165" height="60" rx="8" fill="#9c4221"/><text x="142" y="106" text-anchor="middle" font-size="14" fill="#fff">音乐美</text><rect x="257" y="70" width="165" height="60" rx="8" fill="#c08168"/><text x="340" y="106" text-anchor="middle" font-size="14" fill="#fff">绘画美</text><rect x="455" y="70" width="165" height="60" rx="8" fill="#7aa05a"/><text x="537" y="106" text-anchor="middle" font-size="14" fill="#fff">建筑美</text><text x="142" y="172" font-size="12" fill="#555">韵律和谐</text><text x="340" y="172" font-size="12" fill="#555">辞藻如画</text><text x="537" y="172" font-size="12" fill="#555">节式整齐</text><text x="340" y="212" text-anchor="middle" font-size="12" fill="#555">《再别康桥》是“三美”的典范</text></svg>', caption: '音乐美、绘画美、建筑美在诗中浑然一体。' },
        { type: 'heading', text: '四、艺术特色：意象与意境' },
        { type: 'example', label: '手法赏析', text: '“那河畔的金柳，是夕阳中的新娘”<br>诗人以<strong>“金柳”喻“新娘”</strong>，将无生命的柳枝写得娇美动人，是<strong>绘画美</strong>的极致；又借“波光里的艳影”“彩虹似的梦”营造空灵意境，情景交融。' },
        { type: 'table', headers: ['手法/美', '表现', '效果'], rows: [['绘画美', '金柳如新娘、星辉斑斓', '意象如画，色彩绚丽'], ['音乐美', '“轻轻”“悄悄”复沓', '节奏舒缓，韵律和谐'], ['建筑美', '七节匀称、句式整齐', '外形规整，章法谨严']] },
        { type: 'warn', label: '易错点', text: '“康桥”即英国<strong>剑桥（Cambridge）</strong>的音译，非南京“康桥”；诗中“青荇（xìng）”是水草，“笙箫”代指离别的乐曲。赏析时勿把“三美”与古诗格律混为一谈——新月派的“建筑美”指节式整齐，而非押韵。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">情感脉络</text><rect x="50" y="100" width="130" height="50" rx="8" fill="#7aa05a"/><text x="115" y="130" text-anchor="middle" font-size="12" fill="#fff">眷恋</text><rect x="200" y="100" width="130" height="50" rx="8" fill="#c08168"/><text x="265" y="130" text-anchor="middle" font-size="12" fill="#fff">沉醉</text><rect x="350" y="100" width="130" height="50" rx="8" fill="#a8632e"/><text x="415" y="130" text-anchor="middle" font-size="12" fill="#fff">离愁</text><rect x="500" y="100" width="130" height="50" rx="8" fill="#9c4221"/><text x="565" y="130" text-anchor="middle" font-size="12" fill="#fff">洒脱</text><path d="M180 125 L198 125" stroke="#9c4221" stroke-width="3"/><path d="M330 125 L348 125" stroke="#9c4221" stroke-width="3"/><path d="M480 125 L498 125" stroke="#9c4221" stroke-width="3"/><text x="340" y="200" text-anchor="middle" font-size="12" fill="#555">轻轻来去，哀而不伤</text></svg>', caption: '从眷恋、沉醉到离愁、洒脱，情感轻柔而完整。' },
        { type: 'tip', label: '学习提示', text: '预习可朗读全诗，体会“轻轻”“悄悄”复沓带来的音乐美；重点赏“金柳”“彩虹似的梦”等意象，并尝试用“三美”分析任意一节。' },
        { type: 'heading', text: '五、文学史地位' },
        { type: 'paragraph', text: '《再别康桥》是新诗史上抒情短章的巅峰之一，其唯美、空灵的格调影响了后世众多抒情诗人，也是语文教材中“新月派”诗风的代表选篇。' },
        { type: 'reading', text: '延伸思考：徐志摩“轻轻的我走了”与李白“挥手自兹去”都写离别，一为现代新诗、一为古典律诗，二者在情感与形式上各有何妙处？' }
      ],
      exercises: [
        { type: 'choice', question: '《再别康桥》中的“康桥”指英国的哪所大学？', options: ['牛津大学', '剑桥大学', '伦敦大学', '爱丁堡大学'], answer: '剑桥大学', explanation: '“康桥”是 Cambridge 的汉语音译，即英国剑桥大学所在地。徐志摩曾在此留学，留下美好记忆，一九二八年重访后写下此诗。它并非南京等地地名，故正确选项为剑桥大学。' },
        { type: 'fill', question: '新月派诗歌主张“三美”，即音乐美、绘画美与__美（指节式匀称、句式整齐）。', answer: '建筑', explanation: '新月派主张新诗须具“三美”：音乐美（音节和谐）、绘画美（辞藻绚丽如画）、建筑美（节式匀称、句式整齐）。《再别康桥》七节大体均齐，正体现建筑美，故所缺为建筑。' },
        { type: 'choice', question: '对“那河畔的金柳，是夕阳中的新娘”理解正确的是？', options: ['实写柳树结婚', '以金柳喻新娘，营造绘画美', '批评新娘', '写夕阳太热'], answer: '以金柳喻新娘，营造绘画美', explanation: '诗人将河畔的垂柳比作“夕阳中的新娘”，赋予无生命之物以娇美与娇羞，是绘画美的极致，也融情于景。此句并非实写结婚，而是以比喻写康桥景物的迷人，故选以金柳喻新娘，营造绘画美。' },
        { type: 'fill', question: '诗末“悄悄的我走了，正如我悄悄的来；我挥一挥衣袖，不带走一片__”以洒脱之笔收束离愁。', answer: '云彩', explanation: '诗末“悄悄的我走了，正如我悄悄的来；我挥一挥衣袖，不带走一片云彩”以洒脱之笔收束，表明诗人不愿惊扰旧梦、不与康桥带走任何牵绊的超然离愁，是全书最脍炙人口的结尾。' },
        { type: 'choice', question: '全诗的情感基调可概括为？', options: ['哀号痛哭、撕心裂肺', '哀而不伤、诗意眷恋', '愤怒控诉', '冷漠无情'], answer: '哀而不伤、诗意眷恋', explanation: '全诗以“轻轻”“悄悄”起结，写别康桥而不写送别之人，离愁轻柔诗意而非撕心裂肺，于美丽中透出淡淡惆怅，整体哀而不伤，故选哀而不伤、诗意眷恋。' }
      ]
    },

    /* ==================== 第5课 《一个消逝了的山村》 ==================== */
    {
      id: 'xb3-u2-l5',
      cover: 'assets/cover/chinese/xb3-u2-l5.svg',
      name: '《一个消逝了的山村》',
      author: '冯至',
      chapter: '第二单元 时代镜像（中国现当代作家作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、冯至与他的散文' },
        { type: 'paragraph', text: '冯至（1905—1993），河北涿州人，诗人、学者，被鲁迅誉为“中国最优秀的抒情诗人”。他深受里尔克影响，散文集《山水》以哲思见长；《一个消逝了的山村》即其中名篇。' },
        { type: 'keypoint', label: '里尔克式哲思', text: '冯至的散文带着<strong>里尔克式的沉静哲思</strong>：从寻常风物中体悟生命与永恒。他不直接说理，而<strong>借物抒情、托物悟理</strong>，于平淡中见深意。' },
        { type: 'list', items: ['作者：冯至，诗人、学者', '风格：沉静哲思、借物抒情', '缘起：行经山村废墟而生遐想', '主题：自然、生命与人类命运的关联'] },
        { type: 'heading', text: '二、文中的意象世界' },
        { type: 'paragraph', text: '作者由眼前的小溪、鼠曲草、彩菌、麂子、村女等风物写起，追想数百年前曾在此生息的村庄，将今与昔、人与自然悄然勾连。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">山村风物意象</text><text x="110" y="100" font-size="13" fill="#9c4221">小溪</text><text x="300" y="100" font-size="13" fill="#9c4221">鼠曲草</text><text x="500" y="100" font-size="13" fill="#9c4221">彩菌</text><text x="150" y="150" font-size="13" fill="#7aa05a">麂子</text><text x="360" y="150" font-size="13" fill="#7aa05a">村女</text><text x="540" y="150" font-size="13" fill="#7aa05a">废墟</text><text x="340" y="212" text-anchor="middle" font-size="12" fill="#555">寻常风物勾连往昔村庄与自然永恒</text></svg>', caption: '小溪、野草、彩菌、麂子、村女，皆是引发哲思的触点。' },
        { type: 'heading', text: '三、思想内涵：自然与生命的哲思' },
        { type: 'paragraph', text: '山村虽已消逝，但它曾依赖的自然（水、草、菌、兽）依旧延续。作者由此感悟：个体的生命短暂，却与亘古的自然、与昔日的村人血脉相连，生死流转而万物归一。' },
        { type: 'keypoint', label: '哲思内核', text: '“<strong>人的生命在自然中不过一瞬，却以某种形式参与了永恒的循环</strong>。”冯至在废墟前想到的不是哀伤，而是<strong>人与自然、与历史无声的共鸣</strong>——这是一种温柔而深沉的生命观。' },
        { type: 'list', items: ['小溪：连接往昔与今日的生命之水', '鼠曲草：卑微却坚韧的生存', '彩菌：短暂而易逝的美', '麂子与村女：人与自然曾有的和谐'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">哲思脉络</text><rect x="50" y="100" width="150" height="55" rx="8" fill="#e8d9b0"/><text x="125" y="132" text-anchor="middle" font-size="13" fill="#5b2c16">山村废墟</text><rect x="265" y="100" width="150" height="55" rx="8" fill="#7aa05a"/><text x="340" y="132" text-anchor="middle" font-size="13" fill="#fff">自然延续</text><rect x="480" y="100" width="150" height="55" rx="8" fill="#9c4221"/><text x="555" y="132" text-anchor="middle" font-size="13" fill="#fff">人类命运</text><path d="M200 127 L263 127" stroke="#9c4221" stroke-width="3"/><path d="M415 127 L478 127" stroke="#9c4221" stroke-width="3"/><text x="340" y="200" text-anchor="middle" font-size="12" fill="#555">由物及理：个体短暂，自然与人类命运相连</text></svg>', caption: '由山村废墟想到自然延续，再及人类命运的关联。' },
        { type: 'heading', text: '四、艺术特色：含蓄深沉' },
        { type: 'example', label: '手法赏析', text: '“在风雨的夜里，我们看那山下的小溪……”<br>作者以<strong>细腻的景物描写</strong>承载哲思，语言<strong>含蓄深沉、不事张扬</strong>：不喊口号，只让小溪、野草自己说话，读者于静观中自得理趣，正是冯至散文独到之处。' },
        { type: 'table', headers: ['手法', '表现', '效果'], rows: [['借物抒情', '由溪草菌兽引发遐想', '情理交融，自然无痕'], ['对比', '繁华山村之逝 vs 自然之恒', '凸显生命短暂、自然永恒'], ['象征', '小溪连通古今', '暗示万物血脉相连']] },
        { type: 'warn', label: '易错点', text: '本文<strong>不是游记，也不是小说</strong>，而是<strong>哲理散文（随笔）</strong>。阅读时勿执着于“情节”，而应抓住作者由物及理的思维线索；文中的“山村”是真实旧址，更是引发哲思的<strong>触点</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">艺术特色</text><rect x="60" y="70" width="170" height="55" rx="8" fill="#7aa05a"/><text x="145" y="102" text-anchor="middle" font-size="13" fill="#fff">借物抒情</text><rect x="255" y="70" width="170" height="55" rx="8" fill="#c08168"/><text x="340" y="102" text-anchor="middle" font-size="13" fill="#fff">含蓄深沉</text><rect x="450" y="70" width="170" height="55" rx="8" fill="#9c4221"/><text x="535" y="102" text-anchor="middle" font-size="13" fill="#fff">托物悟理</text><text x="340" y="172" text-anchor="middle" font-size="13" fill="#555">静观风物，于无声处得理趣</text><text x="340" y="202" text-anchor="middle" font-size="12" fill="#555">里尔克式沉静哲思</text></svg>', caption: '借物抒情、托物悟理，语言含蓄深沉而富理趣。' },
        { type: 'tip', label: '学习提示', text: '预习可按“见物—忆昔—悟理”三步走，梳理作者由眼前风物想到山村历史的思维过程；品味其克制、宁静的语言，体会“于无声处听惊雷”的哲思。' },
        { type: 'heading', text: '五、延伸意蕴' },
        { type: 'paragraph', text: '冯至在《山水》中反复书写人与自然的相互照亮。这种“万物皆有情、古今本一体”的胸怀，对当下的生态意识与生命教育仍有深刻的启发。' },
        { type: 'reading', text: '延伸思考：当我们在废墟、古迹前“思接千载”，是否也像冯至一样，与自然和先人产生了某种无声的共鸣？这种共鸣对理解历史有何帮助？' }
      ],
      exercises: [
        { type: 'choice', question: '《一个消逝了的山村》的作者冯至，其散文风格受哪位外国诗人影响最深？', options: ['里尔克', '莎士比亚', '普希金', '泰戈尔'], answer: '里尔克', explanation: '冯至青年时即译介里尔克，受其《给青年诗人的十封信》影响极深，散文与诗歌都带里尔克式的沉静、克制与哲思。《一个消逝了的山村》正是这种“于平淡风物中悟理”风格的体现，故选里尔克。' },
        { type: 'fill', question: '冯至在文中由小溪、鼠曲草等风物引发对生命与历史的遐想，这种写法被称为__抒情（托物悟理）。', answer: '借物', explanation: '作者不直接说理，而由眼前的小溪、鼠曲草、彩菌等风物引发对山村历史与生命永恒的遐想，这种托物悟理的写法即“借物抒情”。它使哲理自然流露，是本文最鲜明的艺术特征。' },
        { type: 'choice', question: '下列对本文文体判断正确的是？', options: ['游记', '小说', '哲理散文（随笔）', '戏剧'], answer: '哲理散文（随笔）', explanation: '本文既非记游的游记，也非虚构的小说，而是冯至散文集《山水》中的哲理随笔。阅读重点在作者由物及理的思维线索，而非情节，故正确选项为哲理散文（随笔）。' },
        { type: 'fill', question: '作者感悟：个体的生命虽短暂，却以某种形式参与了__（自然/历史）的永恒循环。', answer: '自然', explanation: '山村虽已消逝，但它曾依赖的小溪、野草、菌子、走兽依旧延续。作者由此感悟：个体生命短暂，却以某种形式参与了自然永恒的循环，万物血脉相连，这是冯至温柔而深沉的生命观。' },
        { type: 'choice', question: '本文的思想主旨是？', options: ['控诉战争摧毁村庄', '体悟自然、生命与人类命运的关联', '歌颂英雄人物', '批判都市文明'], answer: '体悟自然、生命与人类命运的关联', explanation: '文章由山村废墟想到昔日生息其间的村人，进而体悟自然、生命与人类命运的关联，表达对永恒循环的哲思与对历史的温情。它不控诉战争、不歌颂英雄，故选体悟自然、生命与人类命运的关联。' }
      ]
    },

    /* ==================== 第6课 《秦腔》 ==================== */
    {
      id: 'xb3-u2-l6',
      cover: 'assets/cover/chinese/xb3-u2-l6.svg',
      name: '《秦腔》',
      author: '贾平凹',
      chapter: '第二单元 时代镜像（中国现当代作家作品研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、贾平凹与《秦腔》' },
        { type: 'paragraph', text: '贾平凹（1952— ），陕西丹凤人，当代著名作家。他以陕北、关中乡土为书写对象，代表作有《浮躁》《废都》《秦腔》《古炉》等。《秦腔》获第七届茅盾文学奖，以清风街为缩影写乡土中国的变迁。' },
        { type: 'keypoint', label: '地域文化书写', text: '贾平凹被誉为<strong>“用方块字深刻表达了中国传统乡土”</strong>的作家。他常年书写<strong>陕西地域文化</strong>：秦腔、社火、窑洞、方言，字里行间是对故土民间生命力的眷恋与忧思。' },
        { type: 'list', items: ['作者：贾平凹，当代乡土作家', '题材：陕西地域文化', '获奖：《秦腔》获茅盾文学奖', '特质：质朴而有张力的语言'] },
        { type: 'heading', text: '二、秦腔与民间生命力' },
        { type: 'paragraph', text: '选文浓墨重彩地写秦腔的演唱与看戏场面：演员吼唱、观众痴迷，台上台下浑然一体。秦腔之于三秦百姓，不只是娱乐，更是宣泄情感、凝聚乡邻的精神纽带。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">秦腔演唱场面</text><rect x="220" y="70" width="120" height="50" rx="8" fill="#9c4221"/><text x="280" y="100" text-anchor="middle" font-size="13" fill="#fff">演员吼唱</text><rect x="60" y="150" width="120" height="45" rx="8" fill="#7aa05a"/><text x="120" y="178" text-anchor="middle" font-size="12" fill="#fff">老观众</text><rect x="250" y="150" width="120" height="45" rx="8" fill="#c08168"/><text x="310" y="178" text-anchor="middle" font-size="12" fill="#fff">青年</text><rect x="440" y="150" width="120" height="45" rx="8" fill="#a8632e"/><text x="500" y="178" text-anchor="middle" font-size="12" fill="#fff">孩童</text><text x="340" y="215" text-anchor="middle" font-size="12" fill="#555">台上台下浑然一体，民间生命力奔涌</text></svg>', caption: '演员吼唱、老幼齐聚，秦腔场是乡土生命的狂欢。' },
        { type: 'heading', text: '三、思想内涵：地域文化与乡愁' },
        { type: 'paragraph', text: '作者借秦腔写一方水土一方人。在现代化冲击下，传统乡土日渐式微，秦腔成为农耕文明最后的“活化石”。字里行间既有对民间生命力的礼赞，也有对文化消逝的隐忧。' },
        { type: 'keypoint', label: '文化内涵', text: '秦腔是<strong>黄土高原的精神符号</strong>：它粗犷、高亢、直抒胸臆，正契合秦人<strong>刚烈憨直</strong>的脾性。贾平凹写秦腔，实则写<strong>民族民间文化的根脉与尊严</strong>。' },
        { type: 'list', items: ['秦腔：三秦百姓的情感纽带', '演员：土生土长的民间艺人', '观众：痴迷投入的乡邻', '社火：节庆中的集体狂欢', '忧思：现代化下传统渐逝'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">秦腔：黄土文明符号</text><circle cx="340" cy="120" r="44" fill="#9c4221"/><text x="340" y="116" text-anchor="middle" font-size="13" fill="#fff">秦腔</text><text x="340" y="138" text-anchor="middle" font-size="12" fill="#fff">高亢</text><circle cx="140" cy="120" r="34" fill="#a8632e"/><text x="140" y="124" text-anchor="middle" font-size="12" fill="#fff">黄土</text><circle cx="540" cy="120" r="34" fill="#7aa05a"/><text x="540" y="124" text-anchor="middle" font-size="12" fill="#fff">乡亲</text><path d="M174 120 L296 120" stroke="#9c4221" stroke-width="2"/><path d="M386 120 L506 120" stroke="#9c4221" stroke-width="2"/><text x="340" y="212" text-anchor="middle" font-size="12" fill="#555">秦腔连起土地与人民，是民间文化的根脉</text></svg>', caption: '秦腔一端连黄土，一端连乡亲，是民间文化的根脉。' },
        { type: 'heading', text: '四、艺术特色：质朴与张力' },
        { type: 'example', label: '手法赏析', text: '“广漠旷远的八百里秦川，只有这秦腔，如猎猎狂风……”<br>作者以<strong>质朴酣畅</strong>的笔墨写秦腔之“吼”，场面描写<strong>铺排繁复、细节逼真</strong>：从演员的表情到观众的呼应，巨细靡遗，语言如黄土般厚重而有张力。' },
        { type: 'table', headers: ['手法', '表现', '效果'], rows: [['场面描写', '写演唱与看戏的全景', '气氛热烈，如在眼前'], ['细节刻画', '演员神态、观众反应', '人物鲜活，真实可感'], ['方言入文', '秦地风物、口语', '质朴厚重，地域味浓']] },
        { type: 'warn', label: '易错点', text: '秦腔是<strong>戏曲剧种（梆子腔）</strong>，发源于陕西，非“秦代的音乐”。阅读选文要抓住“场面—细节—文化”三层，勿把描写误读为单纯的故事叙述；文中大量方言土语正是其语言魅力的来源。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">语言特色</text><rect x="60" y="70" width="170" height="55" rx="8" fill="#9c4221"/><text x="145" y="102" text-anchor="middle" font-size="13" fill="#fff">质朴厚重</text><rect x="255" y="70" width="170" height="55" rx="8" fill="#c08168"/><text x="340" y="102" text-anchor="middle" font-size="13" fill="#fff">铺排张力</text><rect x="450" y="70" width="170" height="55" rx="8" fill="#7aa05a"/><text x="535" y="102" text-anchor="middle" font-size="13" fill="#fff">方言入文</text><text x="340" y="172" text-anchor="middle" font-size="13" fill="#555">土而不陋，拙而有力</text><text x="340" y="202" text-anchor="middle" font-size="12" fill="#555">细节逼真，场面酣畅</text></svg>', caption: '语言质朴厚重而极富张力，方言土语见地域魂。' },
        { type: 'tip', label: '学习提示', text: '预习可重点读“唱戏”与“看戏”的场面段，圈画传神的细节与动词；体会贾平凹“土而不陋、拙而有力”的语言风格，并与沈从文《边城》的“诗化”语言对读。' },
        { type: 'heading', text: '五、文学价值' },
        { type: 'paragraph', text: '《秦腔》以“密实的流年式的书写”为渐逝的乡土立传，被认为是一部“当代乡土的史诗”。它让我们看见：真正伟大的文学，往往扎根于最朴素的土地与最鲜活的民间。' },
        { type: 'reading', text: '延伸思考：贾平凹写秦腔的“热闹”里藏着对乡土消逝的“冷清”，这种喜忧交织，与冯至《一个消逝了的山村》的哲思是否异曲同工？' }
      ],
      exercises: [
        { type: 'choice', question: '《秦腔》的作者贾平凹主要书写哪一地域的文化？', options: ['江南水乡', '陕西（三秦）', '东北平原', '岭南'], answer: '陕西（三秦）', explanation: '贾平凹是陕西丹凤人，其创作深植于三秦大地，书写秦腔、社火、方言与黄土人情，是地域文化书写的代表。故《秦腔》所写的地域文化是陕西（三秦），而非江南、东北或岭南。' },
        { type: 'fill', question: '贾平凹的长篇小说《秦腔》荣获第__届茅盾文学奖。', answer: '七', explanation: '《秦腔》以清风街的变迁为缩影，为渐逝的乡土立传，荣获第七届茅盾文学奖。它被誉为“当代乡土的史诗”，足见其在书写中国传统乡村方面的分量与成就。' },
        { type: 'choice', question: '下列关于“秦腔”的说法正确的是？', options: ['秦代宫廷音乐', '发源于陕西的戏曲剧种（梆子腔）', '一种江南小调', '西方歌剧'], answer: '发源于陕西的戏曲剧种（梆子腔）', explanation: '秦腔是发源于陕西的古老戏曲剧种，属梆子腔系统，高亢粗犷，而非秦代宫廷音乐或江南小调，更非西方歌剧。它是三秦百姓精神生活的重要载体，故选发源于陕西的戏曲剧种（梆子腔）。' },
        { type: 'fill', question: '贾平凹写秦腔的语言风格可概括为“土而不陋、拙而有__”，质朴厚重而极具张力。', answer: '力', explanation: '贾平凹写秦腔的语言质朴厚重、如黄土般沉实，却又极有张力与力量，可概括为“土而不陋、拙而有力”。大量方言土语与逼真细节，使其文字鲜活的民间气息扑面而来。' },
        { type: 'choice', question: '《秦腔》的思想内涵主要是？', options: ['单纯描写戏曲技巧', '礼赞民间生命力并忧思乡土消逝', '讽刺农民愚昧', '宣扬城市文明'], answer: '礼赞民间生命力并忧思乡土消逝', explanation: '作者借秦腔写一方水土一方人，既礼赞三秦百姓质朴刚烈的民间生命力，又在现代化冲击下对传统乡土的消逝隐含忧思。小说并非单纯写技巧或讽农民，故选礼赞民间生命力并忧思乡土消逝。' }
      ]
    },

    /* ==================== 第7课 《茶馆（节选）》 ==================== */
    {
      id: 'xb3-u2-l7',
      cover: 'assets/cover/chinese/xb3-u2-l7.svg',
      name: '《茶馆（节选）》',
      author: '老舍',
      chapter: '第二单元 时代镜像（中国现当代作家作品研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、老舍与“京味话剧”' },
        { type: 'paragraph', text: '老舍（1899—1966），原名舒庆春，字舍予，北京人，杰出的小说家、剧作家。代表作有《骆驼祥子》《四世同堂》《茶馆》《龙须沟》。他是“京味文学”的代表，语言地道、幽默而沉痛。' },
        { type: 'keypoint', label: '京味话剧', text: '《茶馆》是<strong>三幕话剧</strong>，以裕泰茶馆为窗口，展现从<strong>清末戊戌变法</strong>到<strong>抗战胜利</strong>近五十年的社会变迁。其“京味”体现在<strong>纯正的北京方言</strong>、市井气息与含泪的幽默。' },
        { type: 'list', items: ['作者：老舍，京味文学代表', '体裁：三幕话剧', '舞台：裕泰茶馆', '主题：葬送三个时代', '特色：人像展览式结构'] },
        { type: 'heading', text: '二、“葬送三个时代”' },
        { type: 'paragraph', text: '第一幕清末，太监买妾、洋货涌入；第二幕民初军阀混战，茶馆改良；第三幕抗战后国民党时期，权贵横行、民不聊生。三幕连看，正是旧中国由腐朽走向崩溃的缩影。' },
        { type: 'keypoint', label: '“葬送”之旨', text: '老舍自陈写《茶馆》是要<strong>“葬送三个时代”</strong>：清末、民初、抗战后的国民党统治。三幕一年不如一年，裕泰茶馆由兴旺到歇业，正是一个王朝、一种旧秩序<strong>无可挽回地走向终结</strong>的寓言。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">葬送三个时代</text><rect x="50" y="80" width="170" height="60" rx="8" fill="#e8b4a0"/><text x="135" y="112" text-anchor="middle" font-size="13" fill="#5b2c16">清末戊戌</text><rect x="255" y="80" width="170" height="60" rx="8" fill="#c08168"/><text x="340" y="112" text-anchor="middle" font-size="13" fill="#fff">民初军阀</text><rect x="460" y="80" width="170" height="60" rx="8" fill="#9c4221"/><text x="545" y="112" text-anchor="middle" font-size="13" fill="#fff">抗战胜利后</text><path d="M220 110 L253 110" stroke="#9c4221" stroke-width="3"/><path d="M425 110 L458 110" stroke="#9c4221" stroke-width="3"/><text x="340" y="185" text-anchor="middle" font-size="13" fill="#555">三幕一年不如一年，旧秩序走向终结</text></svg>', caption: '从清末到抗战胜利，三幕写尽旧中国由腐而溃。' },
        { type: 'heading', text: '三、人物形象：人像展览' },
        { type: 'paragraph', text: '全剧人物七十有余而主线松散：王利发精明圆滑、常四爷正直刚烈、秦仲义实业救国、松二爷软弱怀旧、庞太监阴狠……他们各自登台，拼出一幅世态画卷。' },
        { type: 'keypoint', label: '人物群像', text: '王利发<strong>世故求全</strong>却终被时代吞噬；常四爷<strong>“我爱咱们的国呀，可是谁爱我呢”</strong>道尽爱国者的悲凉；秦仲义<strong>实业救国</strong>终成泡影。老舍以个体命运写尽时代之痛。' },
        { type: 'list', items: ['王利发：裕泰掌柜，圆滑求生', '常四爷：旗人，正直爱国', '秦仲义：实业家，理想破灭', '松二爷：软弱怀旧的遗老', '庞太监：清末腐朽势力的符号'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">人像展览式人物</text><circle cx="340" cy="120" r="38" fill="#9c4221"/><text x="340" y="124" text-anchor="middle" font-size="13" fill="#fff">王利发</text><circle cx="130" cy="80" r="30" fill="#7aa05a"/><text x="130" y="84" text-anchor="middle" font-size="12" fill="#fff">常四爷</text><circle cx="130" cy="170" r="30" fill="#a8632e"/><text x="130" y="174" text-anchor="middle" font-size="12" fill="#fff">秦仲义</text><circle cx="550" cy="80" r="30" fill="#c08168"/><text x="550" y="84" text-anchor="middle" font-size="12" fill="#fff">松二爷</text><circle cx="550" cy="170" r="30" fill="#c0473a"/><text x="550" y="174" text-anchor="middle" font-size="12" fill="#fff">庞太监</text><path d="M168 95 L302 115" stroke="#555" stroke-width="2"/><path d="M168 155 L302 125" stroke="#555" stroke-width="2"/><path d="M512 95 L380 115" stroke="#555" stroke-width="2"/><path d="M512 155 L380 125" stroke="#555" stroke-width="2"/><text x="340" y="215" text-anchor="middle" font-size="12" fill="#555">众人生动登场，拼出时代世态画卷</text></svg>', caption: '以王利发为中心，众多人物环绕，构成人像展览。' },
        { type: 'heading', text: '四、艺术特色：人像展览式结构' },
        { type: 'example', label: '结构赏析', text: '“幕启时裕泰茶馆里三教九流各据一桌……”<br>《茶馆》不靠单一主线，而用<strong>“人像展览式”</strong>结构：人物如走马灯般登场退场，以<strong>碎片拼出时代</strong>。这种“没有主角的主角戏”，正是老舍对戏剧结构的独创。' },
        { type: 'table', headers: ['特色', '表现', '效果'], rows: [['人像展览', '众多人物各自登场', '以群像折射时代全景'], ['语言个性化', '王利发圆滑、常四爷刚直', '闻其声如见其人'], ['口语化', '纯正京白、市井俚语', '京味浓郁，鲜活生动']] },
        { type: 'warn', label: '易错点', text: '《茶馆》是<strong>话剧（戏剧）</strong>，节选常取第一幕；其结构<strong>没有贯穿全剧的单一主人公</strong>，勿用“主角冒险”的小说逻辑去读。另外，“京味”指北京风情与方言，不等于“北京人写的都算京味”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">戏剧语言：锤炼</text><rect x="60" y="70" width="170" height="55" rx="8" fill="#9c4221"/><text x="145" y="102" text-anchor="middle" font-size="13" fill="#fff">个性化</text><rect x="255" y="70" width="170" height="55" rx="8" fill="#c08168"/><text x="340" y="102" text-anchor="middle" font-size="13" fill="#fff">口语化</text><rect x="450" y="70" width="170" height="55" rx="8" fill="#7aa05a"/><text x="535" y="102" text-anchor="middle" font-size="13" fill="#fff">炼字炼句</text><text x="340" y="172" text-anchor="middle" font-size="13" fill="#555">闻其声如见其人，京味浓郁</text><text x="340" y="202" text-anchor="middle" font-size="12" fill="#555">每词贴合身份，于数语见性格</text></svg>', caption: '个性化、口语化的语言，是《茶馆》炼字炼句的典范。' },
        { type: 'tip', label: '学习提示·语言锤炼', text: '从课文中找炼字范例：王利发一句“<strong>咱们的祖辈传下来的老字号</strong>”连用“咱”“老”显亲近与坚守；常四爷“<strong>大清国要完</strong>”五字干脆利落、掷地有声。写作时要讲究<strong>炼字炼句</strong>——让每个词都贴合人物身份与情绪。' },
        { type: 'heading', text: '五、写作任务衔接' },
        { type: 'paragraph', text: '本单元写作聚焦“语言的锤炼”。可模仿老舍，从生活中撷取一段对话，力求用词准确、口语自然、符合人物身份，在短短数语中见出性格与态度。' },
        { type: 'reading', text: '延伸思考：比较《茶馆》的“人像展览”与《雷雨》的“集中冲突”，一中一西两种戏剧结构，各擅何长？' }
      ],
      exercises: [
        { type: 'choice', question: '《茶馆》的“京味”主要体现在？', options: ['吴侬软语', '纯正北京方言与市井气息', '粤语对白', '文言诗词'], answer: '纯正北京方言与市井气息', explanation: '《茶馆》的“京味”指纯正的北京方言、浓郁的市井气息与含泪的幽默，人物开口便是地道京白。它并非吴侬软语、粤语或文言，故选纯正北京方言与市井气息。' },
        { type: 'fill', question: '《茶馆》以裕泰茶馆为窗口，展现从清末到抗战胜利近五十年变迁，被誉为“葬送__个时代”的社会画卷。', answer: '三', explanation: '老舍自陈写《茶馆》是要“葬送三个时代”：清末戊戌变法后、民国初年军阀混战、抗战胜利后的国民党统治。三幕一年不如一年，正是旧中国由腐朽走向崩溃的缩影，故填三。' },
        { type: 'choice', question: '下列对王利发形象概括最准确的是？', options: ['刚烈爱国的旗人', '圆滑世故、求全自保的掌柜', '实业救国的资本家', '阴狠的太监'], answer: '圆滑世故、求全自保的掌柜', explanation: '王利发是裕泰茶馆掌柜，为人圆滑世故、委曲求全，只求在乱世中保住祖传老字号，却终被时代吞没。他既非刚烈的常四爷，也非实业家秦仲义，故选圆滑世故、求全自保的掌柜。' },
        { type: 'fill', question: '《茶馆》不靠单一主线，而用“__式”结构，让众多人物如走马灯般登场，以群像折射时代。', answer: '人像展览', explanation: '《茶馆》不靠贯穿全剧的单一主人公，而用“人像展览式”结构，让王利发、常四爷、秦仲义等众多人物如走马灯般登场退场，以群像拼出时代全景，是老舍对戏剧结构的独创。' },
        { type: 'choice', question: '常四爷的名言“我爱咱们的国呀，可是谁爱我呢”表达了？', options: ['对侵略者的崇敬', '爱国者不被时代接纳的悲凉', '对茶馆的厌恶', '对金钱的渴望'], answer: '爱国者不被时代接纳的悲凉', explanation: '常四爷正直爱国却落得贫苦，他慨叹“我爱咱们的国呀，可是谁爱我呢”，道尽爱国者不被时代接纳的悲凉。这句话浓缩了剧中正直者在乱世中的无力与苍凉，故选此项。' }
      ]
    }

  );
})();
