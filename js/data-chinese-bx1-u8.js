/* ============================================================
 * 高一语文 · 必修 上册 · 古诗词诵读（教材独立诵读板块）
 * 4 课时：静女 / 涉江采芙蓉 / 虞美人 / 鹊桥仙
 * 数据注入：chinese.bx1.points
 * 质量标准：每课 ≥22 内容块 / 3 SVG / 含 example+table+tip+warn+list(≥2)+keypoint+poem+小结
 * 诗词原文（静女/涉江采芙蓉/虞美人/鹊桥仙）已准确保留
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx1');
  if (!v) return;

  v.points.push(
    /* ==================== 第1课 静女 ==================== */
    {
      id: 'bx1-u8-l1',
      name: '静女',
      author: '《诗经·邶风》',
      chapter: '古诗词诵读',
      difficulty: '简单',
      content: [
        { type: 'heading', text: '一、走近作者与出处' },
        { type: 'paragraph', text: '《静女》出自《诗经·国风·邶风》。《诗经》是我国最早的诗歌总集，收录西周初年至春秋中叶诗歌 305 篇，分「风、雅、颂」三类，运用「赋、比、兴」三法。本诗是反映民间青年爱情生活的民歌，活泼健康，情态动人。' },
        { type: 'paragraph', text: '邶风是「十五国风」之一，邶为周代诸侯国，地在今河南汤阴一带。「风」即各地土风民歌，多写普通人的喜怒哀乐。《静女》正是其中一首轻快俏皮的爱情小诗，不见礼教沉重，只有少年恋爱的纯真。' },
        { type: 'keypoint', label: '重点·六义', text: '《诗经》「六义」：<strong>风、雅、颂</strong>（按内容音乐分类）与<strong>赋、比、兴</strong>（表现手法）。本诗以<strong>赋</strong>（直陈其事）为主，兼用<strong>双关</strong>与<strong>细节描写</strong>，把一场城隅约会写得活灵活现。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3eee6"/><rect x="110" y="90" width="120" height="140" rx="6" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><path d="M110 90 l60 -30 60 30 z" fill="#8a5a2e"/><circle cx="190" cy="160" r="14" fill="#5b3b12"/><g fill="#e85d8d"><circle cx="470" cy="150" r="16"/><circle cx="500" cy="140" r="12"/><circle cx="490" cy="170" r="10"/></g><g fill="#7a9b3e"><path d="M470 166 q-10 20 -6 40" stroke="#7a9b3e" stroke-width="2" fill="none"/></g><text x="340" y="285" font-size="14" fill="#5b4636" text-anchor="middle">城隅约会：男子搔首踟蹰，女子馈赠彤管</text></svg>', caption: '「爱而不见，搔首踟蹰」把等待的焦灼写得俏皮可爱。' },
        { type: 'heading', text: '二、原诗通读' },
        { type: 'poem', text: '静女其姝，俟我于城隅。爱而不见，搔首踟蹰。\n静女其娈，贻我彤管。彤管有炜，说怿女美。\n自牧归荑，洵美且异。匪女之为美，美人之贻。' },
        { type: 'keypoint', label: '题解', text: '诗三章层层推进：首章写<strong>等待</strong>（女子藏匿、男子焦灼），次章写<strong>赠管</strong>（彤管有炜、双关「女美」），末章写<strong>赠荑</strong>（自牧归荑、爱屋及乌）。情节虽简，却把恋爱心理写得波澜起伏。' },
        { type: 'heading', text: '三、意象与手法' },
        { type: 'keypoint', label: '双关', text: '「说怿<strong>女</strong>美」的「女」<strong>双关</strong>：既指<strong>彤管（红管草）</strong>，又指<strong>女子（静女）</strong>；「匪女之为美」同理——并非草本身美，而是爱人相赠才觉美，爱屋及乌之情跃然纸上。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「爱而不见，搔首踟蹰」的人物描写之妙。<br><br><strong>解析</strong>：这两句写女子故意躲藏、男子焦急寻找的情态。「<strong>爱</strong>」通「薆」，意为隐蔽、躲藏；「<strong>见</strong>」通「现」，意为出现。男子等不到人，急得<strong>挠头徘徊</strong>——「搔首踟蹰」四个字，以极简的动作细节，把少年恋爱中那种焦灼、期盼又带点憨气的心理写活了，俏皮而不轻浮，是全诗最生动的镜头。' },
        { type: 'keypoint', label: '细节传神', text: '诗中三处信物（<strong>彤管、荑草</strong>）与一处动作（<strong>搔首踟蹰</strong>）构成叙事支点。信物虽小，却因「美人之贻」而价值连城，这种「以物写情」的手法，正是民歌善于捕捉生活细节的明证。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3f8fb"/><rect x="50" y="40" width="250" height="140" rx="8" fill="#fdeaf0" stroke="#c0392b" stroke-width="2"/><text x="175" y="100" font-size="14" fill="#9c1a2e" text-anchor="middle">彤管（物）</text><text x="175" y="125" font-size="12" fill="#9c1a2e" text-anchor="middle">「女」双关</text><rect x="380" y="40" width="250" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="505" y="100" font-size="14" fill="#3e6b2e" text-anchor="middle">静女（人）</text><text x="505" y="125" font-size="12" fill="#3e6b2e" text-anchor="middle">爱屋及乌</text><g stroke="#9c5a8a" stroke-width="2" fill="none"><line x1="300" y1="110" x2="378" y2="110" marker-end="url(#u8a1)"/></g><defs><marker id="u8a1" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#9c5a8a"/></marker></defs><text x="340" y="205" font-size="13" fill="#3e5b6b" text-anchor="middle">「女」一字双关：物之美 = 人之美</text></svg>', caption: '双关使短诗含蓄多味，是《诗经》常见手法。' },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '诗歌以<strong>轻松幽默的笔调</strong>写青年男女的<strong>纯真爱情</strong>与定情之乐，人物活泼、情感健康，是《诗经》爱情诗中别具一格的佳作，展现了先民对美好情爱的坦然歌唱。' },
        { type: 'warn', label: '易错·通假字', text: '「爱而不见」的「爱」是<strong>通假字，通「薆」（隐蔽、躲藏）</strong>，指女子故意藏起来，不是「喜爱」；「见」通「现」（出现）。二者皆须从通假角度理解，否则句意全乖。' },
        { type: 'table', headers: ['诗句', '关键词', '手法/意蕴'], rows: [['静女其姝，俟我于城隅', '姝、城隅', '起笔点明女子貌美与约会地点'], ['爱而不见，搔首踟蹰', '爱（薆）、踟蹰', '细节写焦灼，生动传神'], ['彤管有炜，说怿女美', '女（双关）', '物人双关，爱屋及乌'], ['自牧归荑，洵美且异', '荑、归（馈）', '赠草寄情，情谊深长']] },
        { type: 'list', items: ['情节：等待 → 赠管 → 赠荑，层层递进', '手法：以赋为主，兼用双关与细节描写', '双关：「女」既指彤管又指女子', '细节：「搔首踟蹰」写活少年焦灼憨态', '情感：健康纯真，爱屋及乌'] },
        { type: 'tip', label: '拓展·诗经爱情', text: '《诗经》中的爱情诗极为丰富：《周南·关雎》写君子对淑女的追求，《秦风·蒹葭》写追寻而不得的怅惘，而《静女》则写恋爱中俏皮的等待与馈赠。三诗或庄或怅或俏，共同构成先民情感世界的多彩画卷。值得注意的是，这些诗多出自「风」（民歌），说明爱情本是《诗经》最动人的底色之一。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#5b4636" text-anchor="middle"><rect x="30" y="55" width="170" height="70" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="115" y="82">等待</text><text x="115" y="104">藏匿·焦灼</text><rect x="240" y="55" width="170" height="70" rx="8" fill="#fdeaf0" stroke="#c0392b" stroke-width="2"/><text x="325" y="82">赠管</text><text x="325" y="104">双关·女美</text><rect x="450" y="55" width="170" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="535" y="82">赠荑</text><text x="535" y="104">爱屋及乌</text></g><g stroke="#8a6a3e" stroke-width="2" fill="none"><line x1="200" y1="90" x2="238" y2="90" marker-end="url(#u8a2)"/><line x1="410" y1="90" x2="448" y2="90" marker-end="url(#u8a2)"/></g><defs><marker id="u8a2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#8a6a3e"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">情节递进：等待 → 赠管 → 赠荑，情意渐深</text></svg>', caption: '全诗由等待到定情，情节虽简而情意层层加深。' },
        { type: 'list', items: ['《静女》出自《诗经·邶风》，民间爱情民歌', '六义：风雅颂（分类）+ 赋比兴（手法）', '以赋为主，兼用双关与细节描写', '通假：爱通薆（藏）、见通现（出现）', '双关：「女」既指彤管又指女子', '主旨：写青年纯真爱情与定情之乐'] }
      ],
      exercises: [
        { type: 'choice', question: '《静女》出自《诗经》的哪一部分？', options: ['《周南》', '《邶风》', '《小雅》', '《颂》'], answer: '《邶风》', explanation: '《静女》属《诗经·国风·邶风》。「风」是各地民歌，本诗正是反映民间青年爱情生活的民歌，与《芣苢》（周南）同属「风」而不同国别，是国风中轻快一路的代表。' },
        { type: 'choice', question: '「爱而不见，搔首踟蹰」中「爱」的意思是？', options: ['喜爱、疼爱', '通「薆」，隐蔽躲藏', '爱护、保全', '友爱、友善'], answer: '通「薆」，隐蔽躲藏', explanation: '这是通假字，「爱」通「薆」（ài），意为隐藏、躲藏；「见」通「现」。句意为女子故意躲起来不出现，男子急得挠头徘徊，把约会中的俏皮与焦灼写活，非「喜爱」之意。' },
        { type: 'fill', question: '「说怿女美」中「女」是双关，既指______（彤管 / 女子），又指静女本人。', answer: '彤管', explanation: '男子接到女子所赠红管草（彤管），说「你喜欢这草的美」——「女」既指彤管（草），又暗指赠草的女子，一语双关；后文「匪女之为美，美人之贻」点明是因爱人相赠才觉美好，爱屋及乌。' },
        { type: 'choice', question: '本诗主要运用的表现手法是？', options: ['以赋为主（直陈其事）', '通篇比兴、绝无直叙', '只写抽象议论', '纯对话体戏剧'], answer: '以赋为主（直陈其事）', explanation: '全诗依次直叙等待、赠管、赠荑的过程，属「赋」（敷陈其事而直言之）。其间「女」字双关增添含蓄之趣、细节增添生动，但整体是赋体，不同于《诗经》中以起兴为主的篇章。' },
        { type: 'choice', question: '「匪女之为美，美人之贻」表达的情感是？', options: ['嫌弃礼物粗糙', '爱屋及乌，因是爱人相赠而觉珍贵', '喜欢草更胜过人', '对馈赠无动于衷'], answer: '爱屋及乌，因是爱人相赠而觉珍贵', explanation: '并不是草本身多美，而是「美人之贻」——是心上人送的，所以倍觉美好。这写出热恋中「爱屋及乌」的心理，质朴而动人，是全诗情感的高点，凸显爱情超越物质的纯真。' }
      ]
    },

    /* ==================== 第2课 涉江采芙蓉 ==================== */
    {
      id: 'bx1-u8-l2',
      name: '涉江采芙蓉',
      author: '《古诗十九首》',
      chapter: '古诗词诵读',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与出处' },
        { type: 'paragraph', text: '《涉江采芙蓉》选自《古诗十九首》，是东汉末年文人五言诗的代表组作，作者多不可考。这些诗多写游子思妇的离愁别绪、仕途失意与人生无常，语言浅近自然而情韵深长，被萧统收入《文选》。' },
        { type: 'paragraph', text: '东汉末年，社会动荡、战乱频仍，士人漂泊他乡、亲人天各一方成为常态。本诗即写一位漂泊者采芳草欲赠远人而不得的怅惘，是那个离乱时代无数「同心离居」悲剧的缩影。' },
        { type: 'keypoint', label: '重点·地位', text: '《古诗十九首》被誉为<strong>「五言之冠冕」</strong>（刘勰《文心雕龙》评），标志着<strong>文人五言诗的成熟</strong>。其风格「<strong>浅近自然、深情款款</strong>」，对后世陶渊明、李白、苏轼等影响深远。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4ea"/><rect x="0" y="215" width="680" height="85" fill="#9bbf7a"/><g fill="#e88aa8"><circle cx="200" cy="185" r="14"/><circle cx="230" cy="190" r="12"/><circle cx="170" cy="190" r="10"/><circle cx="450" cy="185" r="14"/><circle cx="480" cy="190" r="12"/><circle cx="420" cy="190" r="10"/></g><path d="M340 250 q0 -120 0 -150" stroke="#5b7a3e" stroke-width="2" stroke-dasharray="5 5"/><g fill="#7a9b3e"><path d="M340 250 q-6 -30 0 -60" stroke="#5b7a3e" stroke-width="2" fill="none"/></g><text x="340" y="285" font-size="14" fill="#3e6b2e" text-anchor="middle">涉江采芙蓉，欲遗远道之人，却长路漫漫</text></svg>', caption: '「采之欲遗谁？所思在远道」——芳草寄情而人隔千里。' },
        { type: 'heading', text: '二、原诗通读' },
        { type: 'poem', text: '涉江采芙蓉，兰泽多芳草。采之欲遗谁？所思在远道。\n还顾望旧乡，长路漫浩浩。同心而离居，忧伤以终老。' },
        { type: 'keypoint', label: '题解', text: '诗仅八句，却完成了<strong>由乐转哀</strong>的情感跌宕：前四句写「涉江采芙蓉」「欲遗所思」，带行动与期待的轻快；后四句「还顾望旧乡」「同心离居」，陡转而为阻隔与忧伤，余味深长。' },
        { type: 'heading', text: '三、意象与手法' },
        { type: 'keypoint', label: '意象', text: '「<strong>芙蓉（荷花）、兰泽</strong>」是高洁美好的意象，古人有采香草赠所思以表相思的习俗；「<strong>长路漫浩浩</strong>」以空间的遥远写<strong>阻隔之深</strong>，路愈长，愁愈浓。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「还顾望旧乡，长路漫浩浩」的抒情艺术。<br><br><strong>解析</strong>：这两句由「采赠」的行动陡然转回现实。「<strong>还顾</strong>」写游子下意识回望故乡的动作，恋恋不舍之情溢于言表；「<strong>长路漫浩浩</strong>」则以空间的渺远写归途之难、阻隔之深。前句有情，后句写境，情与境相生，把「欲遗而不得」的怅惘推向高潮，为末句「忧伤以终老」蓄足了势。' },
        { type: 'keypoint', label: '对比与跌宕', text: '诗用<strong>乐哀对比</strong>结构：采芙蓉的清新欢快，与望旧乡的苍茫忧伤形成强烈反差。这种「<strong>以乐衬哀</strong>」的写法，使哀感更显深沉，是《古诗十九首》常用的抒情张力来源。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3f8fb"/><rect x="50" y="40" width="250" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="175" y="100" font-size="14" fill="#3e6b2e" text-anchor="middle">采芳赠远</text><text x="175" y="125" font-size="12" fill="#3e6b2e" text-anchor="middle">相思之切（乐）</text><rect x="380" y="40" width="250" height="140" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="505" y="100" font-size="14" fill="#5b1a12" text-anchor="middle">同心离居</text><text x="505" y="125" font-size="12" fill="#5b1a12" text-anchor="middle">忧伤终老（哀）</text><g stroke="#b06a5a" stroke-width="2" fill="none"><line x1="300" y1="110" x2="378" y2="110" marker-end="url(#u8a3)"/></g><defs><marker id="u8a3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b06a5a"/></marker></defs><text x="340" y="205" font-size="13" fill="#3e5b6b" text-anchor="middle">由乐（采赠）转哀（阻隔）：情感陡转，余味悠长</text></svg>', caption: '前四句写「欲遗」，后四句写「不得」，乐哀陡转。' },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '诗歌借<strong>采芙蓉赠远人而不得</strong>的情景，抒写<strong>游子思妇同心离居、忧伤终老</strong>的绵长愁绪，语言平淡而情韵悠远，是乱离时代无数离散家庭的深情叹息。' },
        { type: 'warn', label: '易错·「同心」', text: '「同心而离居」的「同心」指<strong>感情相通、心意相契</strong>，并非「在同一个地方」；愈是「同心」愈显「离居」之悲——两心相印却身隔天涯，才是全诗悲剧张力之所在。' },
        { type: 'table', headers: ['诗句', '内容', '情感/手法'], rows: [['涉江采芙蓉，兰泽多芳草', '采香草', '起兴，清新明丽'], ['采之欲遗谁？所思在远道', '欲赠远人', '设问，点出阻隔（乐）'], ['还顾望旧乡，长路漫浩浩', '回望故乡', '空间阻隔，苍茫忧伤（哀）'], ['同心而离居，忧伤以终老', '同心离居', '悲剧收束，余味深长']] },
        { type: 'list', items: ['意象：芙蓉、兰泽，高洁美好的相思象征', '结构：由乐（采赠）转哀（阻隔），对比跌宕', '手法：以乐衬哀，借景写情', '情感：同心离居的绵长愁绪', '语言：浅近自然，情韵悠远'] },
        { type: 'tip', label: '拓展·采赠传统', text: '折柳、采芙蓉、赠芍药，是古人寄寓相思的典型意象。屈原《离骚》以「扈江离与辟芷」自喻高洁，香草传统一脉相承；《诗经·郑风·溱洧》亦写「赠之以勺药」。采芳赠远，既是实写民俗，也寄托了「同心而离居」的人们对团聚的永恒渴望，是古典诗歌中绵长的母题。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" fill="#3e6b2e" text-anchor="middle"><rect x="30" y="55" width="160" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="110" y="82">采赠</text><text x="110" y="104">涉江·欲遗</text><rect x="225" y="55" width="160" height="70" rx="8" fill="#e8d5c8" stroke="#b06a3e" stroke-width="2"/><text x="305" y="82">回望</text><text x="305" y="104">旧乡·长路</text><rect x="420" y="55" width="160" height="70" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="500" y="82">离居</text><text x="500" y="104">同心·忧伤</text><rect x="605" y="55" width="60" height="70" rx="8" fill="#caa46a" stroke="#a9711a" stroke-width="2"/><text x="635" y="90">终老</text></g><g stroke="#7a6a3e" stroke-width="2" fill="none"><line x1="190" y1="90" x2="223" y2="90" marker-end="url(#u8a4)"/><line x1="385" y1="90" x2="418" y2="90" marker-end="url(#u8a4)"/><line x1="580" y1="90" x2="603" y2="90" marker-end="url(#u8a4)"/></g><defs><marker id="u8a4" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7a6a3e"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">情感脉络：采赠（乐）→ 回望（哀）→ 离居（悲）</text></svg>', caption: '全诗由采赠的轻快，跌入离居的绵长忧伤。' },
        { type: 'list', items: ['《涉江采芙蓉》选自《古诗十九首》', '「五言之冠冕」，标志文人五言诗成熟', '意象：芙蓉、兰泽，象征高洁相思', '结构：由乐（采赠）转哀（阻隔），对比跌宕', '「同心」指感情相通，愈显离居之悲', '主旨：同心离居、忧伤终老的绵长愁绪'] }
      ],
      exercises: [
        { type: 'choice', question: '《涉江采芙蓉》选自哪部诗集？', options: ['《诗经》', '《古诗十九首》', '《楚辞》', '《玉台新咏》'], answer: '《古诗十九首》', explanation: '本诗为《古诗十九首》之一，是东汉末年文人五言诗的代表组作，多抒游子思妇之愁。它被萧统收入《文选》，刘勰誉五言诗以这组为「冠冕」，标志五言诗的成熟。' },
        { type: 'choice', question: '「涉江采芙蓉，兰泽多芳草。采之欲遗谁？所思在远道」中采香草的目的是？', options: ['自己观赏把玩', '赠送给远方的所思之人', '贩卖获利谋生', '祭祀山川神灵'], answer: '赠送给远方的所思之人', explanation: '古人有采香草赠所爱以寄相思的习俗。「遗」读 wèi，意为赠送；诗人涉江采芙蓉，本想赠给思念的人，却得知「所思在远道」，由此生出阻隔之悲，全诗的乐哀跌宕由此发端。' },
        { type: 'fill', question: '「同心而离居」中，「同心」指两人______（感情相通 / 同住一处），愈显离别之痛。', answer: '感情相通', explanation: '「同心」指彼此心意相契、感情相通。正因两心相印却身隔天涯（离居），才格外痛苦，「忧伤以终老」的叹息才更沉重。理解「同心」是把握全诗悲剧张力之关键，切勿误解为「同住」。' },
        { type: 'choice', question: '本诗情感脉络是？', options: ['由哀到乐，渐入佳境', '由乐（采赠）转哀（阻隔忧伤）', '始终平淡无波', '由怒到喜，大起大落'], answer: '由乐（采赠）转哀（阻隔忧伤）', explanation: '前四句写采芳草、欲赠所思，带有行动与期待的轻快；后四句「还顾望旧乡，长路漫浩浩」陡转，写空间阻隔与「同心离居」的忧伤，乐哀对比，余味深长，是「以乐衬哀」的典范。' },
        { type: 'choice', question: '对《古诗十九首》地位的评价，正确的是？', options: ['七言诗之冠冕', '五言之冠冕', '楚辞之祖', '唐诗之冠'], answer: '五言之冠冕', explanation: '南朝文论家刘勰在《文心雕龙》中称《古诗十九首》为「五言之冠冕」，肯定其在五言诗发展成熟过程中的典范地位，其浅近自然、情深韵远的风格影响陶渊明、李白等后世大家。' }
      ]
    },

    /* ==================== 第3课 虞美人 ==================== */
    {
      id: 'bx1-u8-l3',
      name: '虞美人·春花秋月何时了',
      author: '李煜',
      chapter: '古诗词诵读',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与词牌' },
        { type: 'paragraph', text: '李煜（937—978），字重光，南唐后主，史称李后主。他通音律、善书画，前期词写宫廷享乐，风格绮丽；亡国被俘后囚居汴京，词风一变而为深哀，代表作《虞美人》《浪淘沙》等，以血泪写词，开北宋一代词风。' },
        { type: 'paragraph', text: '相传《虞美人·春花秋月何时了》写于李煜被囚的最后一个七夕（978），因句中「故国不堪回首」触怒宋太宗，遂被赐牵机药而死。此词遂成其绝命之作，后世以「国家不幸诗家幸」概括其以亡国换词史上的巅峰。' },
        { type: 'keypoint', label: '重点·词牌', text: '「虞美人」是<strong>词牌名</strong>（原为唐教坊曲，咏虞姬）。本词以<strong>问起问结</strong>（「何时了」「几多愁」），以乐景（春花秋月）写哀情，将<strong>亡国之痛</strong>写得惊心动魄、哀感顽艳。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#1f2740"/><circle cx="560" cy="68" r="30" fill="#f4d35e" opacity="0.8"/><path d="M0 240 q170 -20 340 0 t340 0" stroke="#7fd4ff" stroke-width="2" fill="none" opacity="0.5"/><g fill="#e88a8a"><circle cx="200" cy="170" r="12"/><circle cx="240" cy="175" r="10"/><circle cx="160" cy="175" r="9"/></g><g fill="#e8c8a0"><rect x="320" y="150" width="10" height="60" rx="2"/><rect x="300" y="150" width="10" height="60" rx="2"/></g><text x="340" y="285" font-size="14" fill="#cfe0ff" text-anchor="middle">春花秋月本是良辰，对亡国之君却是无尽煎熬</text></svg>', caption: '「春花秋月何时了」以永恒美景反衬无尽头之悲。' },
        { type: 'heading', text: '二、原词通读' },
        { type: 'poem', text: '春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。\n雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流。' },
        { type: 'keypoint', label: '题解', text: '全词以两组<strong>今昔对照</strong>展开：上阕由「春花秋月」的永恒，反衬「往事」之短暂与故国之不可回首；下阕由「雕栏玉砌」的犹在，反衬「朱颜改」的物是人非。结以「一江春水」，将愁写得奔流不息。' },
        { type: 'heading', text: '三、意象与手法' },
        { type: 'keypoint', label: '名句', text: '「<strong>问君能有几多愁？恰似一江春水向东流</strong>」以<strong>比喻兼夸张</strong>写愁：将抽象的愁绪化为<strong>奔流不息的江水</strong>，形象写出愁之深广无量、连绵不绝，是古典诗词「以水喻愁」的巅峰之句。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「问君能有几多愁？恰似一江春水向东流」。<br><br><strong>解析</strong>：词人把抽象的、难以捉摸的「愁」，化作<strong>一江向东奔流的春水</strong>。江水的特点是无休无止、汹涌连绵、浩荡无边，正契合亡国之愁的<strong>深、广、长、不可断绝</strong>。以有形写无形，以夸张状其量，不仅写出了愁的广度，更写出了愁的动势与压迫感，遂成千古写愁的范式，后之秦观、李清照皆受其沾溉。' },
        { type: 'keypoint', label: '乐景哀情', text: '「春花秋月」本是良辰美景，「东风」「明月」亦是赏心之物，对常人可喜；对沦为囚徒的李煜，却成触发痛苦的根源。以<strong>乐景写哀情</strong>，景愈美而哀愈深，倍增其哀。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3f8fb"/><rect x="50" y="40" width="250" height="140" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="175" y="100" font-size="14" fill="#5b1a12" text-anchor="middle">故国·朱颜改</text><text x="175" y="125" font-size="12" fill="#5b1a12" text-anchor="middle">亡国之痛（哀）</text><rect x="380" y="40" width="250" height="140" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="505" y="95" font-size="14" fill="#0f3b5e" text-anchor="middle">一江春水</text><text x="505" y="120" font-size="12" fill="#0f3b5e" text-anchor="middle">愁绪奔流（喻）</text><g stroke="#2e6fae" stroke-width="2" fill="none"><line x1="300" y1="110" x2="378" y2="110" marker-end="url(#u8a5)"/></g><defs><marker id="u8a5" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#2e6fae"/></marker></defs><text x="340" y="205" font-size="13" fill="#3e5b6b" text-anchor="middle">以景喻愁：把无形之愁写得有形有势</text></svg>', caption: '结尾以「水喻愁」，成为千古写愁的范式。' },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '词借<strong>春花秋月、雕栏玉砌</strong>的今昔对照，抒发<strong>亡国被囚的深哀巨痛</strong>与对故国的无尽追怀，是李煜「以血泪写词」的绝命之作，也是中国词史上抒写亡国之痛的绝唱。' },
        { type: 'warn', label: '易错·「朱颜」', text: '「只是朱颜改」的「朱颜」指<strong>红润的容颜（亦喻故国宫人）</strong>，代指青春与繁华的消逝，不是「红色的颜料」。理解此词须从「物是人非」的对比中体会亡国之悲，而非字面误读。' },
        { type: 'table', headers: ['维度', '昔（故国）', '今（囚居）'], rows: [['景物', '春花秋月、雕栏玉砌', '小楼东风、明月孤照'], ['容颜', '朱颜（红润青春）', '朱颜改（憔悴沦落）'], ['心境', '君王享乐', '不堪回首、深哀巨痛'], ['写法', '乐景', '以乐衬哀，倍增其哀']] },
        { type: 'list', items: ['结构：问起问结，今昔对照', '手法：乐景写哀情，以水喻愁', '名句：一江春水向东流，写愁范式', '情感：亡国深哀，追怀故国', '风格：哀感顽艳，以血泪写词'] },
        { type: 'tip', label: '拓展·李煜词史地位', text: '李煜被俘前的词多写宫廷宴乐（如《玉楼春》），被俘后一变而为血泪深哀，拓宽了词的题材与意境，使词由「伶工之词」转为「士大夫之词」。王国维《人间词话》称「词至李后主而眼界始大，感慨遂深」。其「以水喻愁」的手法，直接启发了秦观「飞红万点愁如海」、李清照「载不动许多愁」等后世名句。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0f6"/><g font-size="13" fill="#33485a" text-anchor="middle"><rect x="30" y="55" width="160" height="70" rx="8" fill="#e8d5e0" stroke="#9c5a8a" stroke-width="2"/><text x="110" y="82">乐景</text><text x="110" y="104">春花秋月</text><rect x="225" y="55" width="160" height="70" rx="8" fill="#e8c8c8" stroke="#b06a5a" stroke-width="2"/><text x="305" y="82">哀情</text><text x="305" y="104">故国不堪</text><rect x="420" y="55" width="160" height="70" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="500" y="82">物是人非</text><text x="500" y="104">朱颜改</text><rect x="605" y="55" width="60" height="70" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="635" y="90">愁·如水</text></g><g stroke="#7a6a3e" stroke-width="2" fill="none"><line x1="190" y1="90" x2="223" y2="90" marker-end="url(#u8a6)"/><line x1="385" y1="90" x2="418" y2="90" marker-end="url(#u8a6)"/><line x1="580" y1="90" x2="603" y2="90" marker-end="url(#u8a6)"/></g><defs><marker id="u8a6" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7a6a3e"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">脉络：乐景 → 哀情 → 物是人非 → 愁如春水</text></svg>', caption: '全词由乐景入哀情，终以江水喻愁，哀感顽艳。' },
        { type: 'list', items: ['李煜《虞美人》，亡国被囚的绝命词', '词牌「虞美人」，问起问结', '乐景写哀情：春花秋月反衬亡国之痛', '对比：雕栏玉砌犹在，朱颜已改', '名句：一江春水向东流，以水喻愁之范', '主旨：亡国深哀，追怀故国'] }
      ],
      exercises: [
        { type: 'choice', question: '《虞美人·春花秋月何时了》的作者是？', options: ['李白', '李煜（李后主）', '李清照', '李商隐'], answer: '李煜（李后主）', explanation: '此词为南唐后主李煜被俘入宋后所作。他以帝王之身经历亡国之痛，后期词作直抒胸臆、哀感顽艳，此首「一江春水」之喻更是其绝命词的代表，艺术成就极高，开北宋词风。' },
        { type: 'choice', question: '「春花秋月何时了」以美景起笔，作用是？', options: ['纯粹写景、赞美自然', '以乐景写哀情，反衬亡国愁恨之深', '写节日欢乐气氛', '与愁绪毫无关联'], answer: '以乐景写哀情，反衬亡国愁恨之深', explanation: '春花秋月本是良辰美景，对普通人可喜，对沦为囚徒的李煜却是无尽煎熬——美景越美，越显其失去自由与故国之痛。以乐衬哀，倍增其哀，是全词情感张力的起点。' },
        { type: 'fill', question: '「问君能有几多愁？恰似一江春水向东流」运用______（比喻 / 反问）兼夸张，将愁写得奔流不息。', answer: '比喻', explanation: '词人把抽象的「愁」比作「一江春水向东流」，化无形为有形，以江水之连绵不绝、浩荡东去喻愁绪的深广无穷。这是古典诗词「以水喻愁」的巅峰之句，影响秦观、李清照等后世名家极深。' },
        { type: 'choice', question: '「雕栏玉砌应犹在，只是朱颜改」的言外之意是？', options: ['宫殿焕然一新', '物是人非：故国宫苑犹在，而自己容颜老去、身份沦落', '描写房屋装修', '赞美工匠技艺'], answer: '物是人非：故国宫苑犹在，而自己容颜老去、身份沦落', explanation: '「雕栏玉砌」指南唐宫殿，想来应还在；「朱颜改」说自己红润容颜不再（亦暗指故国宫人老去、繁华消逝）。一句写尽物是人非、今昔巨变的亡国之悲，是乐景哀情对照的高潮。' },
        { type: 'choice', question: '李煜后期词风与前期的不同在于？', options: ['前期哀婉、后期欢乐', '后期由宫廷享乐转为深哀写亡国之痛', '前后风格完全一致', '后期专写山水田园'], answer: '后期由宫廷享乐转为深哀写亡国之痛', explanation: '李煜前期词多写宫廷宴乐、男女情思，风格绮丽；亡国被囚后，阅历剧变，词风一变而为血泪深哀，直抒家国之痛，艺术反而达到更高境界，正所谓「国家不幸诗家幸，赋到沧桑句便工」。' }
      ]
    },

    /* ==================== 第4课 鹊桥仙 ==================== */
    {
      id: 'bx1-u8-l4',
      name: '鹊桥仙·纤云弄巧',
      author: '秦观',
      chapter: '古诗词诵读',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与题材' },
        { type: 'paragraph', text: '秦观（1049—1100），字少游，一字太虚，号淮海居士，北宋著名词人，「苏门四学士」之一。其词柔婉深细、情韵兼胜，为婉约派代表。所作多写男女情思，然常于儿女情中寄哲理，自成高格。' },
        { type: 'paragraph', text: '《鹊桥仙》借<strong>牛郎织女</strong>七夕相会的神话抒怀。七夕相传牛郎织女被银河阻隔，唯每年七月初七喜鹊搭桥方得一聚。历来以此为题者多写离恨，秦观却翻出新意，于婉约中见旷达理趣。' },
        { type: 'keypoint', label: '重点·词牌', text: '词牌「鹊桥仙」即<strong>咏牛郎织女七夕鹊桥相会</strong>之事。本词虽写仙侣，却落脚于<strong>人间爱情哲理</strong>，以「久长胜朝暮」之论，超越一般离愁别恨的写法。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#0f1b3a"/><g fill="#fff"><circle cx="100" cy="80" r="2"/><circle cx="300" cy="60" r="2"/><circle cx="520" cy="90" r="2"/><circle cx="200" cy="200" r="2"/><circle cx="460" cy="220" r="2"/></g><path d="M0 150 Q340 90 680 150" stroke="#f4d35e" stroke-width="3" fill="none" stroke-dasharray="6 8"/><circle cx="300" cy="128" r="10" fill="#e88aa8"/><circle cx="380" cy="135" r="10" fill="#7ec8e3"/><g fill="#fff"><path d="M300 128 l-4 -6 M300 128 l4 -6 M300 128 l-6 2 M300 128 l6 2" stroke="#fff" stroke-width="1.5"/><path d="M380 135 l-4 -6 M380 135 l4 -6 M380 135 l-6 2 M380 135 l6 2" stroke="#fff" stroke-width="1.5"/></g><text x="340" y="285" font-size="14" fill="#cfe0ff" text-anchor="middle">银河鹊桥：一年一度，金风玉露一相逢</text></svg>', caption: '「金风玉露一相逢，便胜却人间无数」翻案出新。' },
        { type: 'heading', text: '二、原词通读' },
        { type: 'poem', text: '纤云弄巧，飞星传恨，银汉迢迢暗度。金风玉露一相逢，便胜却人间无数。\n柔情似水，佳期如梦，忍顾鹊桥归路。两情若是久长时，又岂在朝朝暮暮。' },
        { type: 'keypoint', label: '题解', text: '上阕写<strong>相逢</strong>：纤云、飞星、银汉，营造清雅神话之境；「金风玉露一相逢，便胜却人间无数」颂仙侣之纯美。下阕写<strong>离别</strong>：柔情似水、佳期如梦，终以「两情久长」的旷达之论收束。' },
        { type: 'heading', text: '三、意象与手法' },
        { type: 'keypoint', label: '炼字·用典', text: '「<strong>弄巧</strong>」写云之纤巧多姿，暗合织女「弄机杼」之巧；「<strong>传恨</strong>」写飞星似替牛女传递离恨；「<strong>暗度</strong>」写悄然渡河，含幽会之隐秘。字字精炼，神话意境全出。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「柔情似水，佳期如梦，忍顾鹊桥归路」。<br><br><strong>解析</strong>：这三句写聚后将别。「<strong>柔情似水</strong>」以流水喻情之温柔绵长；「<strong>佳期如梦</strong>」写相聚短暂、恍惚若梦，美好而虚幻；「<strong>忍顾鹊桥归路</strong>」的「忍」意为<strong>怎忍、不忍</strong>，写不忍回头看那归去的鹊桥路，极言眷恋不舍。由柔情到梦幻再到不忍，把「相聚苦短、离别在即」的缠绵推向深处，为末句翻案蓄势。' },
        { type: 'keypoint', label: '立意之眼', text: '「<strong>两情若是久长时，又岂在朝朝暮暮</strong>」是本词<strong>立意之眼</strong>：爱情贵在<strong>长久坚定</strong>，不必拘于朝夕相守。一反离愁别恨的传统写法，于婉约中见高远理趣，境界顿高。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3f8fb"/><rect x="50" y="40" width="250" height="140" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="175" y="100" font-size="14" fill="#5b1a12" text-anchor="middle">传统写离恨</text><text x="175" y="125" font-size="12" fill="#5b1a12" text-anchor="middle">悲悲切切（常格）</text><rect x="380" y="40" width="250" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="505" y="100" font-size="14" fill="#3e6b2e" text-anchor="middle">秦观翻案</text><text x="505" y="125" font-size="12" fill="#3e6b2e" text-anchor="middle">久长胜朝暮（新意）</text><g stroke="#7a9b3e" stroke-width="2" fill="none"><line x1="300" y1="110" x2="378" y2="110" marker-end="url(#u8a7)"/></g><defs><marker id="u8a7" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7a9b3e"/></marker></defs><text x="340" y="205" font-size="13" fill="#3e5b6b" text-anchor="middle">反套路：以哲理升华儿女情长</text></svg>', caption: '别人写「别易会难」，秦观写「情长胜聚」。' },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'keypoint', label: '主旨', text: '词借牛郎织女故事，歌颂<strong>纯洁坚贞、超越时空的爱情</strong>，提出「两情久长不在朝暮」的旷达见解，于婉约中见<strong>高远理趣</strong>，是对爱情本质的深刻升华。' },
        { type: 'warn', label: '易错·「忍」', text: '「忍顾鹊桥归路」的「忍」是<strong>「怎忍、不忍」</strong>（忍心），意为怎忍心回头看那归去的鹊桥路，写尽相聚苦短、离别在即的眷恋；不可误解为「忍耐、忍受」。' },
        { type: 'table', headers: ['维度', '传统七夕诗词', '秦观《鹊桥仙》'], rows: [['情感基调', '悲悲切切、别易会难', '旷达超脱、情长胜聚'], ['立意重心', '写离恨之深', '写爱情之坚贞久长'], ['结尾取向', '多以泪别、哀怨收束', '以哲理翻案，境界高远'], ['流派风格', '多婉约哀婉', '婉约中兼理趣']] },
        { type: 'list', items: ['题材：牛郎织女七夕神话', '意象：纤云、飞星、银汉、金风玉露', '手法：比喻（柔情似水）、用典、翻案', '炼字：弄巧、传恨、暗度、忍顾', '立意：两情久长不在朝暮，旷达理趣'] },
        { type: 'tip', label: '拓展·婉约与理趣', text: '婉约词多写儿女情长、哀婉含蓄，秦观为其代表；但本词于柔情中注入「久长胜朝暮」的理性思考，使词兼具<strong>理趣</strong>。这种「以理入情」的写法，上承苏轼「以诗为词」的旷达，下启南宋辛弃疾、陆游等「刚柔并济」之路。可对比苏轼「但愿人长久，千里共婵娟」，二者皆在离别中给出旷达的答案，异曲而同工。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0f6"/><g font-size="13" fill="#33485a" text-anchor="middle"><rect x="30" y="55" width="150" height="70" rx="8" fill="#e8d5e0" stroke="#9c5a8a" stroke-width="2"/><text x="105" y="82">相逢</text><text x="105" y="104">金风玉露</text><rect x="210" y="55" width="150" height="70" rx="8" fill="#e8c8c8" stroke="#b06a5a" stroke-width="2"/><text x="285" y="82">离别</text><text x="285" y="104">佳期如梦</text><rect x="390" y="55" width="150" height="70" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="465" y="82">眷恋</text><text x="465" y="104">忍顾归路</text><rect x="570" y="55" width="100" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="620" y="82">翻案</text><text x="620" y="104">久长胜聚</text></g><g stroke="#7a6a3e" stroke-width="2" fill="none"><line x1="180" y1="90" x2="208" y2="90" marker-end="url(#u8a8)"/><line x1="360" y1="90" x2="388" y2="90" marker-end="url(#u8a8)"/><line x1="540" y1="90" x2="568" y2="90" marker-end="url(#u8a8)"/></g><defs><marker id="u8a8" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7a6a3e"/></marker></defs><text x="340" y="180" font-size="13" fill="#5b4636" text-anchor="middle">脉络：相逢 → 离别 → 眷恋 → 翻案（久长胜朝暮）</text></svg>', caption: '全词由相会到离别，终以旷达翻案收束。' },
        { type: 'list', items: ['秦观《鹊桥仙》，借牛郎织女神话抒怀', '婉约派代表，苏门四学士之一', '意象：纤云、飞星、银汉、金风玉露', '炼字：弄巧、传恨、暗度、忍（怎忍）', '翻案：两情久长不在朝暮，旷达理趣', '主旨：歌颂坚贞超越时空的爱情'] }
      ],
      exercises: [
        { type: 'choice', question: '《鹊桥仙·纤云弄巧》的题材源自？', options: ['嫦娥奔月', '牛郎织女七夕相会', '白蛇传', '梁山伯与祝英台'], answer: '牛郎织女七夕相会', explanation: '「鹊桥仙」词牌本咏牛郎织女七夕鹊桥相会事。词中「银汉迢迢暗度」「忍顾鹊桥归路」均化用这一神话，写仙侣一年一度相聚又别离，借以抒发人间情思，典故与词牌完全吻合。' },
        { type: 'choice', question: '「两情若是久长时，又岂在朝朝暮暮」的独到之处是？', options: ['主张天天厮守不离', '翻案出新：爱情贵久长坚定，不必拘于朝夕相守', '劝人分手断情', '单纯写相聚欢乐'], answer: '翻案出新：爱情贵久长坚定，不必拘于朝夕相守', explanation: '传统七夕诗词多写离恨（如「别易会难」之悲），秦观却反其道：既已两心久长，又何须朝朝暮暮的形影不离？以旷达哲理升华儿女情，立意高出一筹，成为爱情词中的千古警句。' },
        { type: 'fill', question: '「忍顾鹊桥归路」中「忍」意为______（怎忍心 / 忍耐），写不忍回看离别之路。', answer: '怎忍心', explanation: '「忍」在古汉语中常作「忍心、怎忍」解（如「不忍」）。此处「忍顾」即「怎忍心回头去看」，极写相聚短暂、归期将至的眷恋与不舍，与「佳期如梦」的留恋前后呼应，是下阕情感的核心。' },
        { type: 'choice', question: '「金风玉露一相逢，便胜却人间无数」中「金风玉露」指？', options: ['秋天的风与露（指七夕时节）', '金银财宝', '春风与春雨', '刀剑兵器'], answer: '秋天的风与露（指七夕时节）', explanation: '「金风」即秋风（秋属金），「玉露」即白露，点明七夕所在的初秋时节。词人以此清雅意象写牛女一夕相逢，其情之纯美竟胜过人间无数平庸的相聚，措辞精警，以少胜多。' },
        { type: 'choice', question: '秦观在词史上的流派归属是？', options: ['豪放派', '婉约派', '花间派', '格律派'], answer: '婉约派', explanation: '秦观是北宋婉约词的代表人物，词风柔婉深细、情韵兼胜，为「苏门四学士」之一。本词虽含理趣，但意象清丽、情致婉转，仍属婉约一脉，只是于柔婉中别饶高远，自成一格。' }
      ]
    }
  );
})();
