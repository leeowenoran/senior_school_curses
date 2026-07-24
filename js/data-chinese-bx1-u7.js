/* ============================================================
 * 高一语文 · 必修 上册 · 第七单元 自然情怀（散文）
 * 5 课时：故都的秋 / 荷塘月色 / 我与地坛（节选）/ 赤壁赋 / 登泰山记
 * 数据注入：chinese.bx1.points
 * 质量标准：每课 ≥22 内容块 / 3 SVG / 含 example+table+tip+warn+list(≥2)+keypoint+poem(古文)+小结
 * 古文原文（赤壁赋、登泰山记）已准确保留
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx1');
  if (!v) return;

  v.points.push(
    /* ==================== 第1课 故都的秋 ==================== */
    {
      id: 'bx1-u7-l1',
      name: '故都的秋',
      author: '郁达夫',
      chapter: '第七单元 自然情怀（散文）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '郁达夫（1896—1945），原名郁文，字达夫，浙江富阳人。现代著名小说家、散文家，创造社重要成员。代表作有小说《沉沦》《春风沉醉的晚上》，散文《故都的秋》《北平的四季》等。其散文风格恣肆真率、感伤清丽，善于在寻常风物中寄寓深沉情思。' },
        { type: 'paragraph', text: '本文写于 1934 年 8 月。当时郁达夫辗转于北平、青岛、福州等地，北平（旧称故都）的秋色触发了他对这座城市的深情眷恋。彼时国事蜩螗、时局动荡，文人多怀无可奈何的落寞，这种心境投射于秋景，便凝成独特的「清、静、悲凉」之味。' },
        { type: 'keypoint', label: '文体常识', text: '本文是一篇<strong>写景抒情散文</strong>。散文的特点是<strong>形散神聚</strong>：选材看似散漫（秋晨小院、落蕊、残蝉、秋雨、奇果），实则皆围绕「清、静、悲凉」的<strong>文眼</strong>展开，情感一以贯之，散而不乱。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3ecdf"/><rect x="90" y="150" width="140" height="100" rx="4" fill="#e8dcc2" stroke="#a98b5c" stroke-width="2"/><path d="M90 150 l70 -28 70 28 z" fill="#8a5a2e"/><path d="M160 165 q-5 30 0 50" stroke="#7a5a2e" stroke-width="3" fill="none"/><ellipse cx="190" cy="225" rx="42" ry="12" fill="#caa46a"/><circle cx="300" cy="120" r="14" fill="#c0392b"/><circle cx="330" cy="110" r="11" fill="#c0392b"/><g fill="#5b7a3e"><path d="M440 250 q-14 -50 0 -86 q14 36 0 86 z"/><path d="M470 250 q-10 -40 0 -70 q10 30 0 70 z"/></g><g fill="#d98a3a"><circle cx="455" cy="160" r="5"/><circle cx="460" cy="180" r="4"/><circle cx="465" cy="200" r="4"/></g><text x="340" y="285" font-size="14" fill="#5b4636" text-anchor="middle">一椽破屋、一碗浓茶、槐叶落蕊，最见故都秋味</text></svg>', caption: '破屋、浓茶、槐树、蓝朵：寻常事物中藏着清、静、悲凉。' },
        { type: 'heading', text: '二、文本研读·五幅秋景图' },
        { type: 'keypoint', label: '重点·文眼', text: '开篇即点题：「北国的秋，却特别地来得清，来得静，来得悲凉。」全文围绕<strong>清、静、悲凉</strong>三味布景：清者，明净疏朗；静者，幽寂无声；悲凉者，萧索落寞。三味互为表里，是解读全篇的钥匙。' },
        { type: 'list', items: ['秋晨小院：破屋、浓茶、鸽声、碧绿天色、蓝朵，于清闲中见静', '秋槐落蕊：无声无味的细微清扫，写静到极处', '秋蝉残声：处处啼唱的衰弱蝉鸣，以声写寂', '秋雨闲人：一层秋雨一层凉的都市闲笔，凉中见闲', '秋日奇果：枣子、柿子挂满枝头，淡而有味'] },
        { type: 'paragraph', text: '先写秋晨小院：作者要写「清、静」，却不直说，而写「很高很高的碧绿的天色」「驯鸽的飞声」「像喇叭似的牵牛花（朝荣）的蓝朵」。以冷色调与细微声息，把「静」写得可感可触，于极寻常处见功力。' },
        { type: 'keypoint', label: '意象', text: '小院中的<strong>破屋、浓茶、蓝朵、鸽声</strong>构成淡雅而略带衰飒的画面；「槐树叶底漏下来的日光」「扫街的落蕊」以冷寂的笔调写秋的清幽，景物虽小，却浓缩了故都独有的秋之神韵。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「早晨起来，泡一碗浓茶，向院子里一坐，你也能看得到很高很高的碧绿的天色，听得到青天下驯鸽的飞声」的妙处。<br><br><strong>解析</strong>：此句以<strong>寻常动作起笔</strong>（泡茶、静坐），营造闲适从容的观秋姿态。写天色用「很高很高」「碧绿」，以叠词与冷色调渲染明净辽远之「清」；写声音用「驯鸽的飞声」，以<strong>细微的声息反衬环境的幽寂</strong>，正所谓「鸟鸣山更幽」。视听结合，于平淡中见深情，是「清、静」二味的传神写照。' },
        { type: 'keypoint', label: '语言特色', text: '郁达夫善用<strong>细腻的感官描写</strong>：视觉（蓝朵、落蕊）、听觉（驯鸽飞声、残蝉啼唱）、触觉（凉风）、甚至嗅觉（落蕊微香），把个人心境与自然之秋融为一体，语言<strong>淡而腴、浅而深</strong>，在平淡中寄寓悠长情思。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><g font-size="13" fill="#7a5a1e" text-anchor="middle"><rect x="20" y="50" width="115" height="120" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="77" y="100">小院</text><text x="77" y="122">清闲</text><rect x="150" y="50" width="115" height="120" rx="8" fill="#eef0d8" stroke="#7a9b3e" stroke-width="2"/><text x="207" y="100">落蕊</text><text x="207" y="122">无声</text><rect x="280" y="50" width="115" height="120" rx="8" fill="#e8d5c8" stroke="#b06a3e" stroke-width="2"/><text x="337" y="100">残蝉</text><text x="337" y="122">以声写寂</text><rect x="410" y="50" width="115" height="120" rx="8" fill="#d9e8ef" stroke="#5b7a8a" stroke-width="2"/><text x="467" y="100">秋雨</text><text x="467" y="122">一层凉</text><rect x="540" y="50" width="115" height="120" rx="8" fill="#e8d6a0" stroke="#a9711a" stroke-width="2"/><text x="597" y="100">奇果</text><text x="597" y="122">淡而有味</text></g><text x="340" y="210" font-size="14" fill="#3e5b6b" text-anchor="middle">五幅画面，统一于「清、静、悲凉」的秋味</text></svg>', caption: '五幅图景如五帧淡彩，共同渲染一种秋的况味。' },
        { type: 'heading', text: '三、秋槐落蕊与秋蝉残声' },
        { type: 'paragraph', text: '秋槐落蕊一段最见功力：扫街的在树影下一阵扫后，灰土上留下来的一条条扫帚的丝纹，看似无声无味，却写出秋的静到极处与一丝萧索。这种「于无声处听秋声」的笔法，是郁达夫独有的细腻。' },
        { type: 'keypoint', label: '细微处', text: '「<strong>脚踏上去，声音也没有，气味也没有</strong>」以「无」写秋，反衬静谧至极；这无声的落蕊，正是「悲凉」味的细腻注脚。作者写「微细柔软的触觉」，把秋的质感写到了肌肤可感的程度。' },
        { type: 'warn', label: '易错·「悲凉」', text: '「悲凉」不是消极颓废，而是一种<strong>审美化的生命况味</strong>。作者以悲凉为美，体现乱世文人特有的文人情怀与家国之思，不宜简单判为「消极厌世」。理解时应从审美与时代双重维度着眼。' },
        { type: 'table', headers: ['描写角度', '典型意象', '传达的秋味'], rows: [['视觉', '碧绿天色、蓝朵、落蕊、奇果', '清（明净疏朗）'], ['听觉', '驯鸽飞声、衰弱蝉鸣、雨声', '静（幽寂无声）'], ['触觉', '凉风、落蕊柔软', '悲凉（萧索落寞）'], ['心绪', '闲坐、慢品、淡愁', '清静中的淡淡落寞']] },
        { type: 'list', items: ['形散神聚：选材散漫，皆围绕「清静悲凉」文眼', '感官描写：视、听、触、嗅并用，细腻入微', '以小见大：破屋、落蕊等寻常事物寄寓深情', '情景交融：个人心境与自然之秋浑然一体', '语言淡腴：平淡中见深味，不事雕琢而余韵悠长'] },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '文章通过<strong>对北平秋景的细腻描摹</strong>，抒发对故都之秋的<strong>深沉眷恋</strong>，也流露出乱世文人<strong>清静悲凉</strong>的淡淡落寞与家国之思，是一篇借秋写心、情景交融的抒情佳作。' },
        { type: 'tip', label: '拓展·悲秋传统', text: '中国文学素有「<strong>悲秋</strong>」传统，自宋玉《九辩》「悲哉秋之为气也」起，秋多象征衰飒与愁思。郁达夫承此传统，却不对秋作痛哭流涕的哀号，而以一种从容审美的姿态品味秋之悲凉，显现现代散文「以闲笔写沉愁」的新质。可对比刘禹锡「我言秋日胜春朝」的<strong>颂秋</strong>一脉，体会不同心境下秋的多元面相。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="14" fill="#5b4636" text-anchor="middle"><circle cx="130" cy="100" r="46" fill="#cfe0f0" stroke="#5b7a8a" stroke-width="2"/><text x="130" y="96">清</text><text x="130" y="118">明净疏朗</text><circle cx="340" cy="100" r="46" fill="#d8e8cf" stroke="#7a9b3e" stroke-width="2"/><text x="340" y="96">静</text><text x="340" y="118">幽寂无声</text><circle cx="550" cy="100" r="46" fill="#e8d0c8" stroke="#b06a3e" stroke-width="2"/><text x="550" y="96">悲凉</text><text x="550" y="118">萧索落寞</text></g><g stroke="#8a6a3e" stroke-width="2" fill="none"><line x1="176" y1="100" x2="294" y2="100" marker-end="url(#u7a1)"/><line x1="386" y1="100" x2="504" y2="100" marker-end="url(#u7a1)"/></g><defs><marker id="u7a1" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#8a6a3e"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">文眼三味：清 → 静 → 悲凉，层层递进展秋之神</text></svg>', caption: '全文情感围绕「清、静、悲凉」三味展开，形散而神聚。' },
        { type: 'list', items: ['郁达夫《故都的秋》，写景抒情散文，形散神聚', '文眼「清、静、悲凉」统摄五幅秋景图', '感官描写细腻：视、听、触、嗅并用，于平淡见深情', '「悲凉」是审美化的生命况味，非消极厌世', '艺术：以小见大、情景交融、语言淡而腴', '主旨：眷恋故都秋味，暗含乱世文人的落寞与家国之思'] }
      ],
      exercises: [
        { type: 'choice', question: '《故都的秋》的文眼（核心句）是？', options: ['秋天来了，天气凉了', '北国的秋，却特别地来得清，来得静，来得悲凉', '我爱秋天的一切', '北平的冬天更冷'], answer: '北国的秋，却特别地来得清，来得静，来得悲凉', explanation: '开篇这句统摄全篇，点出故都秋味「清、静、悲凉」三特质，后文所有景物描写都围绕这三字展开，是理解全文情感基调、选材意图与结构的钥匙，故称之为「文眼」。' },
        { type: 'choice', question: '文中写「槐树叶底漏下的日光」「扫街的落蕊」等，主要运用的描写角度是？', options: ['宏大叙事与激烈冲突', '细腻的感官（视、听、嗅、触）细节', '抽象议论与说理', '夸张变形与荒诞'], answer: '细腻的感官（视、听、嗅、触）细节', explanation: '作者刻意捕捉破屋、蓝朵、落蕊、残蝉等细微寻常之物，从视觉、听觉乃至嗅觉、触觉着笔，于平淡细节中寄托深情。这种「以小见大、平淡见情」正是郁达夫散文的妙处，而非宏大叙事或抽象说理。' },
        { type: 'fill', question: '文章从秋晨小院、秋槐落蕊、秋蝉残声、______、秋日奇果五个方面写故都的秋。', answer: '秋雨闲人', explanation: '郁达夫选取五幅典型画面状写故都秋味：小院的清闲、落蕊的无声、残蝉的衰弱、秋雨的闲适（「一层秋雨一层凉」）、奇果的成熟，由景及情，层层渲染「清静悲凉」的秋之神韵。' },
        { type: 'choice', question: '对文中「悲凉」基调理解恰当的是？', options: ['纯粹的消极厌世与绝望', '一种审美化的生命况味，含家国之思', '单纯描写天气寒冷', '意在讽刺社会黑暗'], answer: '一种审美化的生命况味，含家国之思', explanation: '「悲凉」在本文是一种被审美化的情感格调，而非简单的消沉。它既是个人的生活况味，也暗含 1930 年代乱世文人对时局的隐忧，宜从审美与时代双重维度理解，不可轻易判为消极。' },
        { type: 'choice', question: '《故都的秋》与《荷塘月色》的共性（作者心境）是？', options: ['都充满激昂斗志与战斗激情', '都借自然景物抒发内心的淡淡喜悦与苦闷', '都着力描写战争场面', '都讽刺都市文明的虚伪'], answer: '都借自然景物抒发内心的淡淡喜悦与苦闷', explanation: '郁达夫与朱自清都以细腻笔触写自然（秋、月色），在景中寄寓个人心境的波澜——既有片刻的静谧欢愉，也有挥之不去的淡淡苦闷，体现散文「情景交融」的共性，开现代抒情散文之先声。' }
      ]
    },

    /* ==================== 第2课 荷塘月色 ==================== */
    {
      id: 'bx1-u7-l2',
      name: '荷塘月色',
      author: '朱自清',
      chapter: '第七单元 自然情怀（散文）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '朱自清（1898—1948），字佩弦，江苏扬州人，现代著名散文家、诗人、学者。早年参加文学研究会，一生著述丰赡，散文风格素朴缜密、清隽沉郁，代表作有《背影》《春》《桨声灯影里的秦淮河》及《荷塘月色》。' },
        { type: 'paragraph', text: '本文写于 1927 年 7 月。时值大革命失败，白色恐怖笼罩，知识分子普遍陷入苦闷彷徨。朱自清任教于清华，夜里独步校园荷塘，借月色荷景排遣心绪。文末所引《采莲赋》《西洲曲》，正透露出对自由热闹的向往与现实的孤寂。' },
        { type: 'keypoint', label: '重点·情感线索', text: '文章以<strong>「这几天心里颇不宁静」</strong>起笔，以<strong>荷塘—月色</strong>为描写核心，在美景中暂得宁静，终又回到现实。情感呈<strong>「不宁静 → 淡淡的喜 → 淡淡的哀 → 回归不宁静」</strong>的波动曲线。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e9eef5"/><rect x="0" y="210" width="680" height="90" fill="#9bbfcf"/><g fill="#7a9b3e"><path d="M150 210 q-12 -34 0 -56 q12 22 0 56 z"/><path d="M500 210 q-12 -34 0 -56 q12 22 0 56 z"/></g><g fill="#e88aa8"><circle cx="200" cy="178" r="11"/><circle cx="232" cy="183" r="9"/><circle cx="460" cy="178" r="11"/><circle cx="492" cy="183" r="9"/></g><circle cx="340" cy="78" r="34" fill="#f4e6b0" opacity="0.85"/><path d="M326 78 q14 -10 28 0 q-14 10 -28 0" fill="#f7efc8"/><text x="340" y="285" font-size="14" fill="#33485a" text-anchor="middle">月色下的荷塘：田田叶子、点缀荷花、如流水般的月光</text></svg>', caption: '「曲曲折折的荷塘上面，弥望的是田田的叶子」是传神起笔。' },
        { type: 'heading', text: '二、文本研读·月下荷塘' },
        { type: 'keypoint', label: '顺序', text: '写荷塘之景，作者依<strong>由叶及花、由形及香、由静及动</strong>的次第展开：先写荷叶（田田、亭亭），再写荷花（点缀、如明珠），继写荷香（通感），终写荷波（颤动），层次井然而工细。' },
        { type: 'list', items: ['荷叶：田田、亭亭、如舞女的裙（舒展挺拔）', '荷花：零星点缀、如明珠、如星星、如出浴美人', '荷香：仿佛远处高楼上渺茫的歌声（通感）', '荷波：颤动、如闪电、凝碧的波痕', '流水：脉脉无声，遮住底下脉脉的流水'] },
        { type: 'paragraph', text: '「叶子出水很高，像亭亭的舞女的裙」，以裙喻叶，写荷叶的圆润舒展；「正如一粒粒的明珠，又如碧天里的星星，又如刚出浴的美人」，连用三个比喻，从光、色、神三个层面写荷花之洁之美，想象新奇而不失雅致。' },
        { type: 'keypoint', label: '通感', text: '「微风过处，送来缕缕清香，仿佛远处高楼上渺茫的歌声似的」是<strong>通感</strong>（移觉）：把<strong>嗅觉（清香）</strong>写成<strong>听觉（渺茫的歌声）</strong>，将无形之香写得若有若无、可「听」可感，新颖细腻。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「塘中的月色并不均匀；但光与影有着和谐的旋律，如梵婀玲上奏着的名曲」一句。<br><br><strong>解析</strong>：此句再次运用<strong>通感</strong>，把视觉的「光与影」写成听觉的「梵婀玲（小提琴）上奏着的名曲」。月色下树影斑驳，光暗交错，本属视觉，作者却以音乐的「和谐的旋律」形容其节奏之美，打通视听，写出月色<strong>轻柔、匀净、如乐如画</strong>的韵致，足见其语言之精妙。' },
        { type: 'keypoint', label: '语言特色', text: '朱自清善用<strong>叠词与比喻</strong>：「田田」「亭亭」「层层」「脉脉」等叠字舒缓节奏、增添韵律；比喻新颖贴切，使寻常荷塘呈现出诗一般的朦胧之美，语言<strong>清丽缜密</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="50" y="45" width="260" height="150" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="180" y="105" font-size="14" fill="#3e6b2e" text-anchor="middle">月下荷塘</text><text x="180" y="130" font-size="12" fill="#3e6b2e" text-anchor="middle">叶·花·香·波</text><text x="180" y="155" font-size="12" fill="#3e6b2e" text-anchor="middle">由实到虚</text><rect x="370" y="45" width="260" height="150" rx="8" fill="#e7eef7" stroke="#5b7a8a" stroke-width="2"/><text x="500" y="105" font-size="14" fill="#33485a" text-anchor="middle">塘上月色</text><text x="500" y="130" font-size="12" fill="#33485a" text-anchor="middle">如流水·如轻纱</text><text x="500" y="155" font-size="12" fill="#33485a" text-anchor="middle">光与影如乐</text><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">两段工笔：先写荷塘之景，再写月色之辉</text></svg>', caption: '写景有次序：由荷叶而花而香而波，由实到虚、由景到光。' },
        { type: 'heading', text: '三、塘上月色与情感波澜' },
        { type: 'keypoint', label: '月色写法', text: '写月色，作者说「如流水」「如牛乳」「如轻纱」：以流水喻其<strong>流动匀净</strong>，以牛乳喻其<strong>温润乳白</strong>，以轻纱喻其<strong>朦胧轻柔</strong>。月光本不可触，却写得可掬可感，足见工笔之细。' },
        { type: 'warn', label: '易错·结尾引用', text: '篇末引用《采莲赋》《西洲曲》写热闹风流，是<strong>以乐衬哀、反衬现实孤寂</strong>，并非真能回到那种热闹。「那是一个热闹的季节……可惜我们现在早已无福消受了」，正见出向往与失落的反差，须读出反差中的落寞。' },
        { type: 'table', headers: ['描写对象', '主要比喻/手法', '传达意味'], rows: [['荷叶', '如亭亭的舞女的裙', '舒展挺拔、圆润轻盈'], ['荷花', '如明珠、如星星、如出浴美人', '洁白、明亮、娇美'], ['荷香', '通感·如渺茫的歌声', '幽微、飘忽、可感'], ['月色', '如流水、如牛乳、如轻纱', '流动、温润、朦胧'], ['光与影', '通感·如梵婀玲名曲', '和谐、如乐如画']] },
        { type: 'list', items: ['情景交融：以荷塘月色之美写心境之暂宁', '工笔细描：由叶及花及香及波及月，层次井然', '通感妙用：将香、光、影化为可「听」之音', '叠词增韵：田田、亭亭、脉脉，舒缓而雅', '以乐衬哀：结尾引采莲热闹，反写现实孤寂'] },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '借<strong>荷塘月色的静谧之美</strong>，寄托作者在动荡时世中对<strong>片刻宁静与自由的向往</strong>，也流露难以排遣的淡淡苦闷。景愈美，愈显现实之忧；静愈深，愈衬内心之不宁。' },
        { type: 'tip', label: '拓展·五四散文', text: '朱自清与俞平伯同题写过《桨声灯影里的秦淮河》，并称现代散文双璧。其散文承文言文之雅驯，又融白话之清新，开创了「<strong>白话美文</strong>」的范式。阅读《荷塘月色》，可体会现代散文如何以细腻工笔与诗化语言，将一己心绪写得幽深动人，是「写景—抒情—言志」传统的现代延续。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0f6"/><g font-size="13" fill="#33485a" text-anchor="middle"><rect x="30" y="55" width="130" height="70" rx="8" fill="#e8d5e0" stroke="#9c5a8a" stroke-width="2"/><text x="95" y="82">颇不宁静</text><text x="95" y="104">（起）</text><rect x="190" y="55" width="130" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="255" y="82">暂得宁静</text><text x="255" y="104">（赏景·喜）</text><rect x="350" y="55" width="130" height="70" rx="8" fill="#d8cfe8" stroke="#7b5aa0" stroke-width="2"/><text x="415" y="82">淡淡哀愁</text><text x="415" y="104">（联想·哀）</text><rect x="510" y="55" width="140" height="70" rx="8" fill="#e8c8c8" stroke="#b06a5a" stroke-width="2"/><text x="580" y="82">回归不宁</text><text x="580" y="104">（合·现实）</text></g><g stroke="#9c5a8a" stroke-width="2" fill="none"><line x1="160" y1="90" x2="188" y2="90" marker-end="url(#u7a2)"/><line x1="320" y1="90" x2="348" y2="90" marker-end="url(#u7a2)"/><line x1="480" y1="90" x2="508" y2="90" marker-end="url(#u7a2)"/></g><defs><marker id="u7a2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#9c5a8a"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">情感曲线：不宁 → 喜 → 哀 → 复归不宁</text></svg>', caption: '情感呈波动曲线，景愈静而心愈不宁，余味悠长。' },
        { type: 'list', items: ['朱自清《荷塘月色》，借月下荷塘写「颇不宁静」的心境', '文眼「颇不宁静」统领全篇情感', '写景次序：叶→花→香→波→月，工笔细描', '通感妙用：清香如歌声、光影如名曲', '结尾引《采莲赋》以乐衬哀，反写现实孤寂', '主旨：向往片刻宁静自由，难排淡淡苦闷'] }
      ],
      exercises: [
        { type: 'choice', question: '《荷塘月色》开篇的情感基调是？', options: ['十分喜悦、无忧无虑', '这几天心里颇不宁静', '愤怒激动、拍案而起', '昏昏欲睡、慵懒倦怠'], answer: '这几天心里颇不宁静', explanation: '文章第一句「这几天心里颇不宁静」定下全文情感底色。作者夜游荷塘正是为了排遣这份不宁，写景的「静」恰恰反衬内心的「不静」，是解读心境与结构的入口。' },
        { type: 'choice', question: '「清香仿佛远处高楼上渺茫的歌声似的」运用的修辞手法是？', options: ['明喻（甲像乙）', '通感（把嗅觉写成听觉）', '拟人', '夸张'], answer: '通感（把嗅觉写成听觉）', explanation: '通感是把一种感官的感受移到另一种感官。此处将嗅觉的「清香」比作听觉的「渺茫歌声」，使无形的香气变得可「听」可感，新颖细腻，是朱自清散文融视、听、嗅于一体的名句。' },
        { type: 'fill', question: '「叶子出水很高，像亭亭的舞女的裙」描写的是______（荷叶 / 荷花）的形态。', answer: '荷叶', explanation: '作者以「亭亭的舞女的裙」比喻出水很高的荷叶，写出荷叶舒展、挺拔、圆润的形态之美；随后才写点缀其间的荷花（如明珠、如星星、如出浴美人），描写由叶及花、由实到虚，井然有序。' },
        { type: 'choice', question: '文章结尾引用《采莲赋》《西洲曲》的作用是？', options: ['真的回到古代热闹中', '以昔日采莲的热闹风流反衬现实的孤寂落寞', '批评古人的风流', '单纯介绍两篇民歌'], answer: '以昔日采莲的热闹风流反衬现实的孤寂落寞', explanation: '文末宕开一笔，写江南采莲「妖童媛女，荡舟心许」的热闹风流，与眼前荷塘的孤清形成反差，以乐景反衬哀情，更显作者现实中「无福消受」的落寞与对自由的向往终难实现。' },
        { type: 'choice', question: '《荷塘月色》与《故都的秋》在写法上的共性是？', options: ['都以宏大叙事与激烈冲突取胜', '都以细腻工笔写景、情景交融', '都通篇议论、少有描写', '都集中描写战争场面'], answer: '都以细腻工笔写景、情景交融', explanation: '两文都善用细腻的景物描写（朱写月下荷塘、郁写故都秋景），在精微的画面中融入个人心境，体现中国现代散文「写景—抒情—言志」交融的传统，故能产生深远共鸣。' }
      ]
    },

    /* ==================== 第3课 我与地坛（节选） ==================== */
    {
      id: 'bx1-u7-l3',
      name: '我与地坛（节选）',
      author: '史铁生',
      chapter: '第七单元 自然情怀（散文）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '史铁生（1951—2010），北京人，当代作家。1969 年赴陕北插队，21 岁因病双腿瘫痪，后又患尿毒症。他于苦难中沉思生命，作品深沉哲思、文字洁净，代表作有《我的遥远的清平湾》《命若琴弦》《我与地坛》《病隙碎笔》等。' },
        { type: 'paragraph', text: '《我与地坛》写于 1989 年，记述作者残障后长期徘徊于地坛，在古园的静默中思索生死、命运与母爱的过程。全文分三部分，课文节选前两部分，一是地坛与「我」的相遇，二是追怀母亲。' },
        { type: 'keypoint', label: '重点·地坛意义', text: '地坛是作者的<strong>精神避难所与思考场</strong>：他在荒芜而不衰败的园子中，逐渐领悟<strong>「死是一件不必急于求成的事」</strong>，并在对母亲的追怀中读懂了无声之爱。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef1ea"/><circle cx="340" cy="155" r="115" fill="#dfe6cf" stroke="#9bbf6a" stroke-width="3"/><circle cx="340" cy="155" r="62" fill="#cfe0b0" stroke="#7a9b3e" stroke-width="3"/><g stroke="#7a9b3e" stroke-width="3" fill="none"><path d="M340 155 l0 -56"/><path d="M340 155 l40 40"/><path d="M340 155 l-40 40"/><path d="M340 155 l56 0"/><path d="M340 155 l-56 0"/></g><g fill="#7a9b3e"><circle cx="340" cy="99" r="7"/><circle cx="380" cy="195" r="7"/><circle cx="300" cy="195" r="7"/><circle cx="396" cy="155" r="7"/><circle cx="284" cy="155" r="7"/></g><text x="340" y="285" font-size="14" fill="#3e6b2e" text-anchor="middle">地坛：荒芜但并不衰败的园子，容纳一个沉思的灵魂</text></svg>', caption: '「园子荒芜但并不衰败」——自然以生生不息回应人的绝望。' },
        { type: 'heading', text: '二、文本研读·生死之思' },
        { type: 'keypoint', label: '相遇', text: '作者写自己「<strong>活到最狂妄的年龄上忽地残废了双腿</strong>」，在找不到出路时走进地坛。古园「历尽沧桑」却依旧沉静，像一个宽容的长者，接纳了这个绝望的青年，成为他精神的栖息地。' },
        { type: 'paragraph', text: '地坛的景物充满辩证：蜂儿、蚂蚁、瓢虫、露水，一切微小的生命都在按自己的方式存活。作者从「满园子都是草木竞相生长弄出的响动」中，读出生命不屈的韧性——这正是「荒芜但并不衰败」的真意。' },
        { type: 'keypoint', label: '名句', text: '「<strong>死是一件不必急于求成的事，死是一个必然会降临的节日。</strong>」以平静从容的语调化解对死亡的恐惧，标志作者从绝望中走出，转向对「<strong>怎样活</strong>」的郑重思考。' },
        { type: 'example', label: '鉴赏示范', text: '请结合文本，分析「园子荒芜但并不衰败」的深层意蕴。<br><br><strong>解析</strong>：「荒芜」写地坛的残破表象——断壁残垣、野草丛生，恰似作者伤残的躯体；「不衰败」写草木虫鱼的<strong>生生不息</strong>，暗喻精神可在沉思中焕发生机。这句话是作者自身的隐喻：外在或可残缺，内在却仍丰盈。自然以其韧性回应人的绝望，引导他从「要不要死」转向「怎样活」，是全篇哲思的支点。' },
        { type: 'keypoint', label: '生命观', text: '史铁生由个人的残缺，推及<strong>「苦难是常态」</strong>的领悟：既然差别与残缺自古皆然，便不必因自身的不幸而怨天尤人。他以「过程」论取代「结果」论——<strong>生命的价值不在终点，而在经历的过程本身</strong>。' },
        { type: 'heading', text: '三、文本研读·母爱之痛' },
        { type: 'list', items: ['母亲隐忍：儿子瘫痪后独自承受痛苦，从不张扬', '母亲远望：总在园子外悄悄守候，怕打扰又放心不下', '母亲早逝：积劳成疾，「心里太苦」而离去', '子欲养而亲不待：作者多年后才读懂这份无声之爱', '追悔与感恩：以平实文字写尽人间至痛至爱'] },
        { type: 'keypoint', label: '母亲形象', text: '文中的母亲是<strong>「隐形」的守护者</strong>：她不张扬、不干预，只在远处静望。她懂得儿子的倔强与痛苦，却不敢多问，生怕触动创伤。这份<strong>无声之爱</strong>，恰是苦难中最深的暖意。' },
        { type: 'warn', label: '易错·母爱读法', text: '读懂母亲，不能只看「她送我出门」的动作，更要体会她<strong>「送儿出门，自己心里却悬着」</strong>的煎熬。作者事后的追悔（「我已不懂，曾以为那不过是寻常」）才是全文最沉痛处，切勿轻描淡写。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3f8fb"/><rect x="50" y="40" width="260" height="140" rx="8" fill="#fdeaf0" stroke="#c0392b" stroke-width="2"/><text x="180" y="100" font-size="14" fill="#9c1a2e" text-anchor="middle">生死之思</text><text x="180" y="125" font-size="12" fill="#9c1a2e" text-anchor="middle">接纳残缺·过程论</text><rect x="370" y="40" width="260" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#3e6b2e" text-anchor="middle">母爱之痛</text><text x="500" y="125" font-size="12" fill="#3e6b2e" text-anchor="middle">追悔与感恩</text><text x="340" y="205" font-size="13" fill="#3e5b6b" text-anchor="middle">双线交织：对命运的认知 + 对母亲的理解</text></svg>', caption: '地坛里想通了生死，也读懂了母亲；双线在「爱」处汇合。' },
        { type: 'heading', text: '四、艺术特色与主旨' },
        { type: 'keypoint', label: '艺术', text: '本文以<strong>哲理与抒情交融</strong>见长：写景极简而含理，叙事平实而蕴痛。作者将个人的残缺体验升华为对人类普遍处境的叩问，文字<strong>洁净、克制、深沉</strong>，悲而不绝望。' },
        { type: 'list', items: ['情景交融：古园景物与心绪互为映照', '双线结构：生死哲思 + 母爱追怀，最终汇于「爱」', '以小见大：蜂蚁露水写尽生命韧性', '哲理抒情：于个人苦难中见人类普遍处境', '语言洁净克制：悲而不号，余味深长'] },
        { type: 'table', headers: ['线索', '核心追问', '最终领悟'], rows: [['生死之思', '死，要不要急于求成？', '死是必降临的节日，转而思「怎样活」'], ['母爱之痛', '母亲为何默默远望？', '无声之爱最深沉，子欲养而亲不待'], ['交汇点', '残疾与苦难的意义', '珍视过程、亲情与当下，悲而不绝望']] },
        { type: 'keypoint', label: '主旨', text: '文章借<strong>地坛这座精神家园</strong>，书写一个残疾青年对<strong>生命意义、苦难与母爱的深沉领悟</strong>，悲而不绝望，给人以直面残缺、珍视过程与亲情的力量。' },
        { type: 'tip', label: '拓展·史铁生精神', text: '史铁生被称为「<strong>坐在轮椅上的哲人</strong>」。他拒绝将苦难写成控诉，而将其化为对生命本质的沉思。《病隙碎笔》中说「生命的意义就在于你能够创造这一过程」，与《我与地坛》的「过程论」一脉相承。其文字超越个人残疾，抵达对人类共同命运的关怀，是当代散文最具哲思深度的篇章之一。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0ef"/><g font-size="13" fill="#3e6b2e" text-anchor="middle"><rect x="30" y="55" width="140" height="70" rx="8" fill="#e8d5c8" stroke="#b06a3e" stroke-width="2"/><text x="100" y="82">绝望</text><text x="100" y="104">残废·无路</text><rect x="195" y="55" width="140" height="70" rx="8" fill="#dfe6cf" stroke="#9bbf6a" stroke-width="2"/><text x="265" y="82">沉思</text><text x="265" y="104">地坛·接纳</text><rect x="360" y="55" width="140" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="430" y="82">彻悟</text><text x="430" y="104">过程论</text><rect x="525" y="55" width="140" height="70" rx="8" fill="#fdeaf0" stroke="#c0392b" stroke-width="2"/><text x="595" y="82">感恩</text><text x="595" y="104">母爱·珍惜</text></g><g stroke="#7a6a3e" stroke-width="2" fill="none"><line x1="170" y1="90" x2="193" y2="90" marker-end="url(#u7a3)"/><line x1="335" y1="90" x2="358" y2="90" marker-end="url(#u7a3)"/><line x1="500" y1="90" x2="523" y2="90" marker-end="url(#u7a3)"/></g><defs><marker id="u7a3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7a6a3e"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">心灵历程：绝望 → 沉思 → 彻悟 → 感恩</text></svg>', caption: '作者借地坛完成心灵跋涉：由绝望走向对生命与爱的彻悟。' },
        { type: 'list', items: ['史铁生《我与地坛》，于苦难中写生命哲思', '地坛＝精神避难所，荒芜并不衰败', '名句：死是必降临的节日，故不必急于求成', '生命观：价值在过程，不在终点', '母爱双线：隐忍远望的无声之爱，追悔与感恩', '主旨：直面残缺、珍视过程与亲情，悲而不绝望'] }
      ],
      exercises: [
        { type: 'choice', question: '《我与地坛》中「地坛」对作者的意义是？', options: ['一处旅游景点', '精神避难所与思考生死的场域', '工作的场所', '求学的学校'], answer: '精神避难所与思考生死的场域', explanation: '双腿瘫痪后，史铁生常在荒芜的地坛独坐沉思。这座古园以「荒芜但并不衰败」的生机，陪他度过最绝望的岁月，成为他参透生死、安放灵魂的精神家园，而非普通景点。' },
        { type: 'choice', question: '「死是一件不必急于求成的事」表达的态度是？', options: ['急于赴死以求解脱', '历经绝望后的平静接纳，不再恐惧死亡', '歌颂死亡之美', '否定生命价值'], answer: '历经绝望后的平静接纳，不再恐惧死亡', explanation: '这句话以从容语调消解了对死亡的焦虑：既然死必然降临，便不必仓促求取。它标志作者从自杀念头中走出，转向对「怎样活」的郑重思考，是其生命观的转折与升华。' },
        { type: 'fill', question: '作者在文中深切追怀______（母亲 / 父亲）无声的、远处的守护，饱含愧悔与感恩。', answer: '母亲', explanation: '史铁生的母亲在他瘫痪后默默承受痛苦，不放心却又不敢过多干预，总在园子外远远守候。作者多年后才读懂这份隐忍深沉的爱，文中充满「子欲养而亲不待」的追悔，是最沉痛处。' },
        { type: 'choice', question: '文中「园子荒芜但并不衰败」的深层含义是？', options: ['园子破败无用，应拆除', '外在荒芜中仍有生机，隐喻人在苦难中仍可精神丰盈', '鼓励人们拆掉古园', '纯粹描写杂草丛生'], answer: '外在荒芜中仍有生机，隐喻人在苦难中仍可精神丰盈', explanation: '「荒芜」写地坛残破表象，「不衰败」写草木虫鱼的生生不息。这恰是作者自身的隐喻：躯体或可残缺，精神却能在沉思中焕发生机，自然以其韧性回应人的绝望，引导他由「死」转向「活」。' },
        { type: 'choice', question: '《我与地坛》与《荷塘月色》借自然抒发的心境差异是？', options: ['都只写欢乐', '史铁生写苦难中的生命哲思，朱自清写不宁静中的片刻宁静', '都集中描写战争', '都意在讽刺社会'], answer: '史铁生写苦难中的生命哲思，朱自清写不宁静中的片刻宁静', explanation: '朱自清在月色荷塘中暂得「片刻宁静」以慰不宁；史铁生在地坛中直面残缺、参透生死，笔触更沉重也更哲思。二者都借自然安顿心灵，但一轻愁一重思，深度与基调有别而同臻上乘。' }
      ]
    },

    /* ==================== 第4课 赤壁赋 ==================== */
    {
      id: 'bx1-u7-l4',
      name: '赤壁赋',
      author: '苏轼',
      chapter: '第七单元 自然情怀（散文）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '苏轼（1037—1101），字子瞻，号东坡居士，北宋文学家、书画家，「唐宋八大家」之一。其文汪洋恣肆，诗开豪放一派，词与辛弃疾并称「苏辛」。《赤壁赋》写于他被贬黄州期间（1082），是北宋散文的代表作。' },
        { type: 'paragraph', text: '元丰三年（1080），苏轼因「乌台诗案」被贬黄州团练副使，形同囚徒。1082 年七月与十月，他两游赤壁，写下前、后《赤壁赋》。本文即《前赤壁赋》，借月夜泛舟，探讨人生与宇宙的哲理，是逆境中旷达胸襟的写照。' },
        { type: 'keypoint', label: '文体常识', text: '「赋」是介于诗与文之间的文体，讲究<strong>铺陈、押韵、骈散结合</strong>，常以<strong>主客问答</strong>结构展开思辨。本文即借苏子与客的对话，将哲理思考写得生动可感，是宋代文赋的典范。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e9f1f6"/><rect x="0" y="230" width="680" height="70" fill="#9bbfcf"/><path d="M0 230 q170 -16 340 0 t340 0" stroke="#5b7a8a" stroke-width="2" fill="none" opacity="0.6"/><g fill="#caa46a"><path d="M300 230 l42 -64 42 64 z"/><rect x="318" y="150" width="5" height="22" fill="#7a5a2e"/><path d="M338 150 q12 8 24 0" stroke="#7a5a2e" stroke-width="2" fill="none"/></g><circle cx="500" cy="80" r="30" fill="#f4e6b0" opacity="0.85"/><path d="M488 84 q12 8 24 0" stroke="#e8a83a" stroke-width="2" fill="none"/><text x="340" y="285" font-size="14" fill="#33485a" text-anchor="middle">清风徐来，水波不兴：月夜泛舟的澄明之乐</text></svg>', caption: '「举酒属客，诵明月之诗，歌窈窕之章」起笔即乐。' },
        { type: 'heading', text: '二、原文通读（前赤壁赋）' },
        { type: 'poem', text: '壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙。\n于是饮酒乐甚，扣舷而歌之。歌曰：「桂棹兮兰桨，击空明兮溯流光。渺渺兮予怀，望美人兮天一方。」客有吹洞箫者，倚歌而和之。其声呜呜然，如怨如慕，如泣如诉；余音袅袅，不绝如缕。舞幽壑之潜蛟，泣孤舟之嫠妇。\n苏子愀然，正襟危坐而问客曰：「何为其然也？」客曰：「『月明星稀，乌鹊南飞』，此非曹孟德之诗乎？西望夏口，东望武昌，山川相缪，郁乎苍苍，此非孟德之困于周郎者乎？方其破荆州，下江陵，顺流而东也，舳舻千里，旌旗蔽空，酾酒临江，横槊赋诗，固一世之雄也，而今安在哉？况吾与子渔樵于江渚之上，侣鱼虾而友麋鹿，驾一叶之扁舟，举匏樽以相属。寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷。挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风。」\n苏子曰：「客亦知夫水与月乎？逝者如斯，而未尝往也；盈虚者如彼，而卒莫消长也。盖将自其变者而观之，则天地曾不能以一瞬；自其不变者而观之，则物与我皆无尽也，而又何羡乎！且夫天地之间，物各有主，苟非吾之所有，虽一毫而莫取。惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色，取之无禁，用之不竭。是造物者之无尽藏也，而吾与子之所共适。」\n客喜而笑，洗盏更酌。肴核既尽，杯盘狼籍。相与枕藉乎舟中，不知东方之既白。' },
        { type: 'keypoint', label: '题解', text: '本文题为「赋」，实为<strong>文赋</strong>：不尚骈俪堆砌，而以清畅散文笔调说理抒情。全篇以<strong>「乐—悲—喜」</strong>的情感跌宕为脉，借主客问答把人生宇宙的哲理写得圆融通透，是苏轼黄州时期精神境界的集中呈现。' },
        { type: 'heading', text: '三、逐段研读·写景与乐' },
        { type: 'keypoint', label: '起笔之乐', text: '开篇写泛舟之乐：清风、明月、白露、水光，意境澄明空阔。「<strong>纵一苇之所如，凌万顷之茫然</strong>」写泛舟江上、身心俱忘的自由；「冯虚御风」「羽化登仙」更将这种逍遥推向极处，乐由此生。' },
        { type: 'example', label: '名句赏析', text: '请赏析「白露横江，水光接天。纵一苇之所如，凌万顷之茫然」的意境。<br><br><strong>解析</strong>：前两句写<strong>视觉之阔</strong>——白茫茫的露气横铺江面，水光与天光相接，天地一片澄澈空明；后两句写<strong>身心之自由</strong>——任凭小舟随波漂荡，凌越万顷茫然的江面。景之浩渺与心之逍遥相生，营造出「遗世独立」的仙境，为后文由乐转悲蓄势，是情景交融的佳句。' },
        { type: 'keypoint', label: '箫声之悲', text: '客吹洞箫，「其声呜呜然，如怨如慕，如泣如诉」，以<strong>排比兼比喻</strong>写箫声的哀婉；「舞幽壑之潜蛟，泣孤舟之嫠妇」以<strong>夸张</strong>极写其感染力，由乐骤转悲，引出下文主客之辩。' },
        { type: 'warn', label: '易错·文言字词', text: '「七月<strong>既望</strong>」指农历<strong>十六</strong>（望为十五）；「举酒<strong>属</strong>客」的「属」通「嘱」，意为<strong>劝酒</strong>，不是「属于」；「冯虚御风」的「冯」通「凭」，意为「乘」。这些字词关乎文意，须准确掌握。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="50" y="45" width="160" height="120" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="130" y="100" font-size="14" fill="#3e6b2e" text-anchor="middle">乐</text><text x="130" y="125" font-size="12" fill="#3e6b2e" text-anchor="middle">泛舟·登仙</text><rect x="240" y="45" width="160" height="120" rx="8" fill="#e8c8c8" stroke="#b06a5a" stroke-width="2"/><text x="320" y="100" font-size="14" fill="#5b1a12" text-anchor="middle">悲</text><text x="320" y="125" font-size="12" fill="#5b1a12" text-anchor="middle">须臾·羡长江</text><rect x="430" y="45" width="160" height="120" rx="8" fill="#cfe3f0" stroke="#5b7a8a" stroke-width="2"/><text x="510" y="100" font-size="14" fill="#33485a" text-anchor="middle">喜</text><text x="510" y="125" font-size="12" fill="#33485a" text-anchor="middle">达观·共适</text><g stroke="#7a6a3e" stroke-width="2" fill="none"><line x1="210" y1="105" x2="238" y2="105" marker-end="url(#u7a4)"/><line x1="400" y1="105" x2="428" y2="105" marker-end="url(#u7a4)"/></g><defs><marker id="u7a4" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7a6a3e"/></marker></defs><text x="340" y="200" font-size="13" fill="#3e5b6b" text-anchor="middle">情感弧线：乐 → 悲 → 喜，靠「水月之辩」完成转折</text></svg>', caption: '乐—悲—喜的情感弧线，靠「水月之辩」完成转折与升华。' },
        { type: 'heading', text: '四、逐段研读·主客之辩' },
        { type: 'keypoint', label: '客之悲', text: '客借曹操「月明星稀」之诗，叹英雄亦成陈迹，进而哀自身<strong>「寄蜉蝣于天地，渺沧海之一粟」「哀吾生之须臾，羡长江之无穷」</strong>。想「挟飞仙」「抱明月」而「知不可乎骤得」，代表悲观一面的生命思索。' },
        { type: 'keypoint', label: '水月之辩', text: '苏轼以<strong>变与不变</strong>的相对视角看水月：水逝去却未尝真去，月圆缺却终无消长。从「变」看天地一瞬，从「不变」看<strong>物我无尽</strong>。换个视角便无须羡慕，从而超脱得失、旷达自适。' },
        { type: 'table', headers: ['维度', '客（悲）', '苏子（达）'], rows: [['看水月', '哀须臾、羡长江无穷', '逝者如斯而未尝往，物我无尽'], ['人生观', '人生短暂、渺小无助', '变则一瞬，不变则无尽，何羡之有'], ['对待外物', '追慕飞仙明月而不得', '清风明月取之无禁、用之不竭，可共适'], ['结局', '托遗响于悲风', '喜而笑，相与枕藉，不知东方之既白']] },
        { type: 'list', items: ['情感跌宕：乐—悲—喜，结构完整圆融', '主客问答：以对话承载哲理，化抽象为生动', '水月之辩：变与不变的相对观，旷达自适', '比喻排比：写箫声、写江水，形象酣畅', '化用典故：曹操诗、达观语，显学识与胸襟'] },
        { type: 'heading', text: '五、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '文章借月夜泛舟与主客辩论，表达<strong>对人生须臾的感慨</strong>与<strong>超然物外、旷达自适</strong>的胸襟，体现苏轼在逆境中<strong>随遇而安、与造物者游</strong>的精神境界，给人以旷达处世的启示。' },
        { type: 'tip', label: '拓展·黄州与苏词', text: '黄州是苏轼人生的转折点，也是其文学创作的高峰。《念奴娇·赤壁怀古》「大江东去」、《前赤壁赋》皆成于此期。一词一赋，一豪放一旷达，同写赤壁、同怀曹操，却都于贬谪中显<strong>超脱之怀</strong>。苏轼以儒释道兼济的胸襟化解政治失意，开宋人「以理入诗、以旷达为美」之风，影响深远。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0f0"/><g font-size="13" fill="#33485a" text-anchor="middle"><rect x="40" y="55" width="170" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="125" y="82">客之悲</text><text x="125" y="104">须臾羡长江</text><rect x="255" y="55" width="170" height="70" rx="8" fill="#e8c8c8" stroke="#b06a5a" stroke-width="2"/><text x="340" y="82">水月之辩</text><text x="340" y="104">变不变皆无尽</text><rect x="470" y="55" width="170" height="70" rx="8" fill="#cfe3f0" stroke="#5b7a8a" stroke-width="2"/><text x="555" y="82">苏子达</text><text x="555" y="104">共适清风明月</text></g><g stroke="#7a6a3e" stroke-width="2" fill="none"><line x1="210" y1="90" x2="253" y2="90" marker-end="url(#u7a5)"/><line x1="425" y1="90" x2="468" y2="90" marker-end="url(#u7a5)"/></g><defs><marker id="u7a5" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7a6a3e"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">由悲到达：以变与不变的哲思，化解人生须臾之叹</text></svg>', caption: '苏子以「变与不变」之辩化解客之悲，终归于共适万物的达观。' },
        { type: 'list', items: ['苏轼《赤壁赋》（文赋），黄州贬谪时期所作', '结构：乐—悲—喜，主客问答承载哲理', '客悲：人生须臾、渺小，羡长江而不得', '水月之辩：变则一瞬、不变则物我无尽', '主旨：超然物外、旷达自适，与造物者游', '文言要点：既望（十六）、属（劝酒）、冯（凭）'] }
      ],
      exercises: [
        { type: 'choice', question: '《赤壁赋》中「赋」这种文体的特点是？', options: ['只押韵而不铺陈', '讲究铺陈、押韵，常用主客问答', '纯用白话、毫无韵律', '只写诗歌不涉散文'], answer: '讲究铺陈、押韵，常用主客问答', explanation: '赋是介于诗、文之间的文体，特点是铺陈夸张、句式骈散结合、多押韵，并常以「主客问答」结构展开思辨（如本文苏子与客的对话），是汉魏以来常用的说理抒情体裁，本文即宋代文赋典范。' },
        { type: 'choice', question: '「客」悲叹的核心内容是？', options: ['天气太热难以入眠', '人生须臾、羡慕长江无穷而不得', '船只太小坐不下', '没有美酒助兴'], answer: '人生须臾、羡慕长江无穷而不得', explanation: '客借曹操「月明星稀」之诗，感慨英雄亦成陈迹，进而哀叹自身生命短暂（须臾）、不及长江无穷，想超脱而「知不可乎骤得」，故托悲风于遗响，代表悲观一面的生命思索。' },
        { type: 'fill', question: '「壬戌之秋，七月既望」中，「既望」指农历______（十六 / 十五）。', answer: '十六', explanation: '古人称农历初一为朔、十五为望、十六为既望、月末为晦。本文写「七月既望」即七月十六夜，苏轼与客泛舟赤壁，清风明月之下引出乐—悲—喜的议论，是理解时间背景的关键词。' },
        { type: 'choice', question: '苏轼「水月之辩」化解悲愁的关键在于？', options: ['逃避现实躲进山中', '以「变与不变」的相对视角看万物，物我无尽', '饮酒买醉忘忧', '指责客人才疏学浅'], answer: '以「变与不变」的相对视角看万物，物我无尽', explanation: '苏子指出：水逝去却未尝真去，月圆缺却终无消长。从「变」看天地一瞬，从「不变」看物我无尽。换个视角便无谓羡慕，从而超脱得失、旷达自适，这是全文的哲理高潮与精神归宿。' },
        { type: 'choice', question: '本文与《念奴娇·赤壁怀古》的共通精神是？', options: ['都消极避世、厌弃人间', '都于贬谪中显旷达超脱', '都写战争胜利、歌颂武功', '都愤怒控诉朝政'], answer: '都于贬谪中显旷达超脱', explanation: '词中「一尊还酹江月」、赋中「共食清风明月」，同为苏轼黄州时期作品，都在政治失意中以豁达化解悲愁，体现其「出入穷达、随遇而安」的一贯胸襟与超脱之怀。' }
      ]
    },

    /* ==================== 第5课 登泰山记 ==================== */
    {
      id: 'bx1-u7-l5',
      name: '登泰山记',
      author: '姚鼐',
      chapter: '第七单元 自然情怀（散文）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '姚鼐（1732—1815），字姬传，一字梦谷，安徽桐城人，清代散文家，「桐城派」集大成者。他主张文章须「义理、考据、辞章」三者合一，编有《古文辞类纂》，对清代及近代散文影响深远。' },
        { type: 'paragraph', text: '乾隆三十九年（1774）冬，姚鼐辞官南归，途经泰安，与好友朱孝纯（字子颍）一同登览泰山，写下这篇山水游记。时值岁末，风雪载途，却正成就了一番清绝的雪后山景。' },
        { type: 'keypoint', label: '文体常识', text: '桐城派主张<strong>「义理、考据、辞章」</strong>合一。本文<strong>语言简洁雅洁</strong>，记游中穿插<strong>地理考证</strong>（如泰山南北水系分属济水、汶水），体现「学者之文」的特色，与纯然抒情的游记不同。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2f5"/><path d="M0 260 L140 150 L280 220 L420 110 L560 200 L680 130 L680 300 L0 300 Z" fill="#9aa9b5"/><path d="M0 280 L200 210 L420 250 L680 180 L680 300 L0 300 Z" fill="#7a8a96"/><circle cx="560" cy="78" r="26" fill="#f4d35e" opacity="0.85"/><path d="M540 94 q20 14 40 0" stroke="#e88a3a" stroke-width="3" fill="none"/><g fill="#fff" opacity="0.85"><circle cx="300" cy="150" r="3"/><circle cx="330" cy="165" r="3"/><circle cx="360" cy="155" r="3"/></g><text x="340" y="285" font-size="14" fill="#33485a" text-anchor="middle">雪后泰山：苍山负雪，明烛天南</text></svg>', caption: '「苍山负雪，明烛天南」是姚鼐写泰山的神来之笔。' },
        { type: 'heading', text: '二、原文通读（登泰山记）' },
        { type: 'poem', text: '泰山之阳，汶水西流；其阴，济水东流。阳谷皆入汶，阴谷皆入济。当其南北分者，古长城也。最高日观峰，在长城南十五里。\n余以乾隆三十九年十二月，自京师乘风雪，历齐河、长清，穿泰山西北谷，越长城之限，至于泰安。是月丁未，与知府朱孝纯子颍由南麓登。四十五里，道皆砌石为磴，其级七千有余。\n泰山正南面有三谷。中谷绕泰安城下，郦道元所谓环水也。余始循以入，道少半，越中岭，复循西谷，遂至其巅。古时登山，循东谷入，道有天门。东谷者，古谓之天门溪水，余所不至也。今所经中岭及山巅，崖限当道者，世皆谓之天门云。道中迷雾冰滑，磴几不可登。及既上，苍山负雪，明烛天南；望晚日照城郭，汶水、徂徕如画，而半山居雾若带然。\n戊申晦，五鼓，与子颍坐日观亭，待日出。大风扬积雪击面。亭东自足下皆云漫。稍见云中白若樗蒱数十立者，山也。极天云一线异色，须臾成五采。日上，正赤如丹，下有红光，动摇承之。或曰，此东海也。回视日观以西峰，或得日，或否，绛皓驳色，而皆若偻。\n亭西有岱祠，又有碧霞元君祠；皇帝行宫在碧霞元君祠东。是日，观道中石刻，自唐显庆以来，其远古刻尽漫失。僻不当道者，皆不及往。\n山多石，少土；石苍黑色，多平方，少圜。少杂树，多松，生石罅，皆平顶。冰雪，无瀑水，无鸟兽音迹。至日观数里内无树，而雪与人膝齐。\n桐城姚鼐记。' },
        { type: 'keypoint', label: '题解', text: '本文是一篇<strong>山水游记</strong>，却独具「学者之文」气质：既按游踪记景（移步换景），又顺手作地理考证（泰山南北水系、天门旧址），记游与学问交融，语言<strong>简洁雅洁、惜墨如金</strong>。' },
        { type: 'heading', text: '三、文本研读·游踪与景物' },
        { type: 'list', items: ['交代地理：泰山阴阳水系分属汶、济，日观峰方位', '行程路线：自京师乘风雪，历齐河、长清至泰安', '登山经过：循中谷入，越中岭，复循西谷至巅', '山顶雪景：「苍山负雪，明烛天南」', '观日奇观：云海、五采、日出正赤如丹', '附带考证：泰山南北河流、古道石刻'] },
        { type: 'keypoint', label: '炼字', text: '「<strong>苍山负雪</strong>」的「负」字<strong>拟人</strong>，写雪山如背负白雪，静中见态；「<strong>明烛天南</strong>」以「烛」为动词，写雪光如烛照亮南天，新颖奇警。两字化静为动，是炼字典范。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「及既上，苍山负雪，明烛天南」的炼字之妙。<br><br><strong>解析</strong>：此句写登顶所见雪后山光。「<strong>负</strong>」本为人的动作，此处赋予雪山，仿佛大山<strong>背负着皑皑白雪</strong>，静默而庄重，是拟人；「<strong>烛</strong>」本为名词（蜡烛），这里作动词，意如烛照，写雪反射之光<strong>把南天照得通明</strong>。二字一写形一写光，化静为动、以简驭繁，仅八字便写尽雪后泰山的神韵，足见桐城派「辞章」功力。' },
        { type: 'keypoint', label: '观日描写', text: '写日出层次分明：先写「亭东自足下皆云漫」，再写「云中白若樗蒱数十立者，山也」，继而「极天云一线异色，须臾成五采」，终至「日上，正赤如丹，下有红光」。由云及山、由色及日，<strong>时空递进</strong>，状难写之景如在目前。' },
        { type: 'warn', label: '易错·时间词', text: '文中时间词须厘清：「<strong>丁未</strong>」是登山的日期（农历）；「<strong>戊申晦</strong>」指农历<strong>月末（二十九/三十）</strong>那天；「晦」是月末，与「既望」（十六）不同。游记阅读尤须把握时间线索，方知作者于岁末风雪中攀登。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="40" y="45" width="270" height="140" rx="8" fill="#cfd8e3" stroke="#5b7a8a" stroke-width="2"/><text x="175" y="100" font-size="14" fill="#33485a" text-anchor="middle">记游·路线</text><text x="175" y="125" font-size="12" fill="#33485a" text-anchor="middle">移步换景·登山观日</text><rect x="370" y="45" width="270" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="505" y="100" font-size="14" fill="#3e6b2e" text-anchor="middle">考证·地理</text><text x="505" y="125" font-size="12" fill="#3e6b2e" text-anchor="middle">义理考据·水系</text><text x="340" y="215" font-size="13" fill="#3e5b6b" text-anchor="middle">游记 + 考证：桐城派「辞章与考据合一」</text></svg>', caption: '姚鼐不只是写风景，也顺手做了地理考据，学者之文。' },
        { type: 'heading', text: '四、艺术特色与主旨' },
        { type: 'keypoint', label: '艺术', text: '本文艺术特色在「<strong>洁</strong>」：语言简洁雅洁、不事雕琢；写景<strong>移步换景、脉络清晰</strong>；记游中融<strong>考据</strong>，学者气度与诗人情致并存，是桐城派古文的范本。' },
        { type: 'table', headers: ['维度', '《登泰山记》（姚鼐）', '《赤壁赋》（苏轼）'], rows: [['文体', '山水游记（古文）', '文赋（主客问答）'], ['语言', '简洁雅洁、惜墨如金', '汪洋恣肆、骈散兼行'], ['重心', '记游 + 地理考据', '哲理抒情 + 宇宙之思'], ['景物', '雪后泰山、日出奇观', '月夜江景、清风明月'], ['精神', '学者之文的清雅', '文人之赋的旷达']] },
        { type: 'list', items: ['移步换景：循谷登山，脉络清晰', '炼字精警：「负」「烛」化静为动', '记游兼考据：水系、天门、石刻', '语言简洁雅洁：惜墨如金，不事铺排', '学者之文：义理、考据、辞章合一'] },
        { type: 'keypoint', label: '主旨', text: '文章以<strong>简洁雅洁的文字</strong>记冬日登泰山的经历，描绘<strong>雪后壮景与日出奇观</strong>，于记游中见学者功底，表达对<strong>山川之胜与自然之趣</strong>的倾心，也隐含辞官后寄情山水的恬淡。' },
        { type: 'tip', label: '拓展·桐城派', text: '桐城派是清代影响最大的散文流派，由方苞开创，刘大櫆承之，姚鼐集其大成。姚鼐明确提出「义理（思想）、考据（学问）、辞章（文采）」三者不可偏废，并以《古文辞类纂》确立范式。《登泰山记》正是这一主张的完美实践：既有山水之美（辞章），又有地理之考（考据），更见自然之趣（义理）。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0f0"/><g font-size="13" fill="#33485a" text-anchor="middle"><rect x="30" y="55" width="160" height="70" rx="8" fill="#cfd8e3" stroke="#5b7a8a" stroke-width="2"/><text x="110" y="82">登山</text><text x="110" y="104">乘风雪·循谷</text><rect x="220" y="55" width="160" height="70" rx="8" fill="#d8cfe8" stroke="#7b5aa0" stroke-width="2"/><text x="300" y="82">览胜</text><text x="300" y="104">负雪·明烛</text><rect x="410" y="55" width="160" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="490" y="82">观日</text><text x="490" y="104">五采·正赤</text><rect x="600" y="55" width="80" height="70" rx="8" fill="#e8d5c8" stroke="#b06a3e" stroke-width="2"/><text x="640" y="82">考证</text><text x="640" y="104">水系</text></g><g stroke="#7a6a3e" stroke-width="2" fill="none"><line x1="190" y1="90" x2="218" y2="90" marker-end="url(#u7a6)"/><line x1="380" y1="90" x2="408" y2="90" marker-end="url(#u7a6)"/><line x1="570" y1="90" x2="598" y2="90" marker-end="url(#u7a6)"/></g><defs><marker id="u7a6" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7a6a3e"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">游踪脉络：登山 → 览胜 → 观日 → 考证，移步换景</text></svg>', caption: '全文依游踪展开：登山、览胜、观日、考证，简洁而有序。' },
        { type: 'list', items: ['姚鼐《登泰山记》，桐城派古文，记游兼考据', '语言简洁雅洁、惜墨如金', '炼字：「苍山负雪」「明烛天南」化静为动', '观日：云漫→五采→正赤如丹，层次分明', '时间词：丁未（登山日）、戊申晦（月末）', '主旨：记雪后壮景与日出，倾心山川自然之趣'] }
      ],
      exercises: [
        { type: 'choice', question: '姚鼐所属文学流派主张「义理、考据、辞章」合一，这一流派是？', options: ['公安派', '桐城派', '竟陵派', '阳湖派'], answer: '桐城派', explanation: '姚鼐是清代「桐城派」集大成者。该派主张文章须「义理（思想）、考据（学问）、辞章（文采）」三者合一，本文记游兼及泰山地理考证，正是这一主张的生动体现。' },
        { type: 'choice', question: '「苍山负雪，明烛天南」中「负」「烛」的妙处是？', options: ['描写下雪的动作过程', '「负」拟人写雪山如背雪，「烛」动词写雪光照亮南天', '写蜡烛被风吹灭', '写大山的重量'], answer: '「负」拟人写雪山如背雪，「烛」动词写雪光照亮南天', explanation: '「负」赋予雪山以人的姿态，仿佛大山背负皑皑白雪；「烛」本为名词，这里作动词用，意如烛照，写雪反射之光把南天照得通明。两字化静为动、新颖奇警，是炼字典范。' },
        { type: 'fill', question: '「戊申晦，五鼓，与子颍坐日观亭」中，「晦」指农历______（月末 / 月初）。', answer: '月末', explanation: '农历月末（二十九或三十）称「晦」，与「朔」（初一）、「望」（十五）、「既望」（十六）相对。姚鼐于「戊申晦」五更与友坐日观亭观日出，时间线索须与岁末风雪的背景相参看。' },
        { type: 'choice', question: '《登泰山记》与《赤壁赋》同为记游，不同在于？', options: ['都写主客问答', '姚鼐重简洁考证（学者之文），苏轼重哲理抒情（文人之赋）', '都集中描写战争', '都写都市繁华'], answer: '姚鼐重简洁考证（学者之文），苏轼重哲理抒情（文人之赋）', explanation: '姚鼐游记语言雅洁、夹带地理考证，是典型的学者古文；苏轼以赋体主客问答阐发宇宙哲理，属文人抒情。二者皆写山水，但一重「学」一重「思」，风格迥异而各臻其美。' },
        { type: 'choice', question: '下列对本文语言特点概括准确的是？', options: ['华丽铺排、辞藻堆砌', '简洁雅洁、惜墨如金', '口语连篇、俚俗不堪', '诙谐滑稽、刻意逗趣'], answer: '简洁雅洁、惜墨如金', explanation: '桐城派反对冗滥，本文写登山、雪景、日出皆寥寥数笔而神形兼备（如「苍山负雪，明烛天南」八字写尽雪后山光），语言简洁雅洁、不事雕琢，是「辞章」上的自觉追求。' }
      ]
    }
  );
})();
