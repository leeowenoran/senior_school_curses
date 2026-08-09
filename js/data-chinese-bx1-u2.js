/* ============================================================
 * 高一语文 · 必修 上册 · 第二单元 劳动光荣（实用性阅读与交流）
 * 5 课时：喜看稻菽千重浪 / 心有一团火 / 探界者钟扬 / 芣苢 / 插秧歌
 * 数据注入：chinese.bx1.points
 * 质量标准：每课 ≥22 内容块 / 3 SVG / 含 example+table+tip+warn+list+keypoint
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx1');
  if (!v) return;

  v.points.push(
    /* ==================== 第1课 喜看稻菽千重浪 ==================== */
    {
      id: 'bx1-u2-l1',
      cover: 'assets/cover/chinese/bx1-u2-l1.svg',
      name: '喜看稻菽千重浪——记首届国家最高科技奖获得者袁隆平',
      author: '沈英甲',
      chapter: '第二单元 劳动光荣（实用性阅读与交流）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体与写作对象' },
        { type: 'paragraph', text: '本文是一篇人物通讯，作者沈英甲。通讯是新闻报道的一种，用叙述、描写等手法及时、真实地报道新闻人物或新闻事件，要求真实、典型、形象。本文记述了被誉为「杂交水稻之父」的袁隆平发现、研究杂交水稻的历程，展现其严谨求实的科学精神与心系天下的家国情怀。' },
        { type: 'paragraph', text: '袁隆平（1930—2021），江西德安人，中国工程院院士，毕生致力于杂交水稻研究。他于二十世纪七十年代成功培育籼型杂交水稻，使我国水稻产量大幅提高，为维护世界粮食安全作出巨大贡献，2000 年获首届国家最高科学技术奖。' },
        { type: 'keypoint', label: '重点·文体', text: '人物通讯的<strong>三个要点</strong>：<strong>真实性</strong>（人物、事实必须准确，不可虚构）、<strong>典型性</strong>（选取最具代表性的细节与片段）、<strong>形象性</strong>（借助描写让人物可感可亲）。三者统一，才能使报道既可信又动人。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fff8e8"/><rect x="0" y="215" width="680" height="85" fill="#e9c46a"/><g fill="#caa83a"><path d="M70 215 l8 -70 8 70 z"/><path d="M130 215 l8 -80 8 80 z"/><path d="M190 215 l8 -64 8 64 z"/><path d="M260 215 l8 -76 8 76 z"/><path d="M520 215 l8 -70 8 70 z"/><path d="M580 215 l8 -82 8 82 z"/><path d="M630 215 l8 -60 8 60 z"/></g><circle cx="400" cy="120" r="44" fill="#f0b97d"/><path d="M356 122 a44 44 0 0 1 88 0 z" fill="#5b3b12"/><circle cx="386" cy="116" r="4" fill="#333"/><circle cx="414" cy="116" r="4" fill="#333"/><path d="M388 134 q12 8 24 0" stroke="#a9711a" stroke-width="2" fill="none"/><text x="400" y="288" font-size="15" fill="#7a5a1e" text-anchor="middle">稻浪千重：以丰收之景隐喻科学家的卓越贡献</text></svg>', caption: '标题化用毛泽东诗句「喜看稻菽千重浪」，以丰收稻浪隐喻袁隆平的巨大贡献。' },
        { type: 'heading', text: '二、标题的化用与巧思' },
        { type: 'paragraph', text: '「喜看稻菽千重浪」出自毛泽东《七律·到韶山》：「喜看稻菽千重浪，遍地英雄下夕烟。」原诗写翻身农民迎来丰收的喜悦。本文借这一诗句作题，由领袖笔下「革命的丰收」转为科学家手中「科技的丰收」，含蓄贴切，意味深长。' },
        { type: 'keypoint', label: '重点·标题', text: '标题的妙处有三：一<strong>点明对象</strong>（稻菽暗指袁隆平的杂交水稻事业）；二<strong>定下基调</strong>（喜悦、赞美）；三<strong>巧用典故</strong>，以经典诗句拉近与读者的距离，使科技报道也具有了诗的韵味。' },
        { type: 'example', label: '鉴赏示范', text: '本文以诗句「喜看稻菽千重浪」为标题，有什么表达效果？<br><br><strong>解析</strong>：标题化用毛泽东诗句，首先<strong>制造熟悉感与文学美</strong>，让科技报道不枯燥；其次「稻菽千重浪」以<strong>意象代指杂交水稻的大面积丰收</strong>，把抽象的科研成就化为可见的丰收画面；最后「喜看」二字奠定<strong>赞美与自豪</strong>的情感基调，统领全篇对袁隆平奉献精神的歌颂。可谓言简意丰、一举多得。' },
        { type: 'keypoint', label: '重点·结构', text: '全文以「<strong>实践—发现—突破—情怀</strong>」为线索展开：先写袁隆平在田间发现天然不育株（实践），再到提出假说、攻克难关（发现与突破），最后写其心系苍生、推广杂交稻（情怀），层层递进，脉络清晰。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8ee"/><g font-size="14" text-anchor="middle"><rect x="40" y="60" width="150" height="110" rx="8" fill="#e9c46a" stroke="#caa83a" stroke-width="2"/><text x="115" y="105" fill="#5b3b12">实践求真</text><text x="115" y="130" fill="#7a5a1e" font-size="12">下田观察</text><rect x="265" y="60" width="150" height="110" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="340" y="105" fill="#0f3b5e">敢于创新</text><text x="340" y="130" fill="#0f3b5e" font-size="12">挑战权威</text><rect x="490" y="60" width="150" height="110" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="565" y="105" fill="#fff">心怀天下</text><text x="565" y="130" fill="#fff" font-size="12">兼济众生</text></g><g stroke="#555" stroke-width="3" fill="none"><line x1="190" y1="115" x2="263" y2="115" marker-end="url(#l1a)"/><line x1="415" y1="115" x2="488" y2="115" marker-end="url(#l1b)"/></g><defs><marker id="l1a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker><marker id="l1b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker></defs><text x="340" y="215" font-size="13" fill="#3e6b4e" text-anchor="middle">科学家精神三层：实践 → 创新 → 情怀</text></svg>', caption: '袁隆平的精神可概括为「实践求真、敢于创新、心怀天下」三层。' },
        { type: 'heading', text: '三、袁隆平的科学精神' },
        { type: 'list', items: ['挑战权威：敢于质疑「水稻无杂种优势」的权威定论，提出新假说', '实践求真：长年扎根稻田，从万千稻穗中观察筛选天然不育株', '执着创新：提出三系法、两系法等育种路线，不断突破难关', '心怀天下：让杂交水稻走向世界，致力于消除饥饿、造福人类'] },
        { type: 'keypoint', label: '重点·细节', text: '文中写袁隆平「<strong>眯起双眼，出神地打量着这片成熟的稻浪</strong>」「把衣服挂在点得着的草上」等细节，将科学家的专注、质朴与对土地的深情写得真切可感，正是通讯<strong>形象性</strong>的体现——用细小而真实的画面，立起一个大写的人。' },
        { type: 'warn', label: '易错·文体', text: '通讯虽允许描写与抒情，但<strong>人物与事实必须真实</strong>，绝不能像小说那样虚构情节。文中的细节（如对话、动作）须有采访依据。阅读时若把通讯当小说读，就会误判其价值——通讯的力量正在于「真」。' },
        { type: 'table', headers: ['文中片段', '展现的精神'], rows: [['在稻田中多年寻找天然不育株', '严谨求实、执着实践'], ['顶烈日冒风雨坚持下田观察', '吃苦耐劳、不畏艰辛'], ['提出三系法、两系法育种路线', '敢于质疑、勇于创新'], ['让杂交水稻走向世界、帮扶农民', '心怀天下、兼济众生']] },
        { type: 'heading', text: '四、艺术特色与主旨' },
        { type: 'list', items: ['选取典型细节，以小见大，使科学家形象可亲可感', '片段式结构，条理清楚、重点突出', '叙议结合：在叙事中穿插评点，深化主题', '语言准确平实又饱含感情，兼具新闻性与文学性', '以「稻浪」意象贯穿，首尾呼应，意境优美'] },
        { type: 'keypoint', label: '重点·主旨', text: '本文通过展现袁隆平发现、研究杂交水稻的艰辛历程，讴歌了<strong>科学家严谨求实、勇于创新、胸怀天下的精神</strong>，也呼应本单元「劳动光荣」的主题——<strong>创造性劳动推动社会进步，平凡耕耘也能铸就伟大</strong>。' },
        { type: 'tip', label: '拓展·时代价值', text: '袁隆平曾说「人就像种子，要做一粒好种子」。他的事迹超越了农业本身，成为一种<strong>精神符号</strong>：专注、淡泊、创新、奉献。今天倡导「科学家精神」「工匠精神」，与袁隆平身上这种<strong>把论文写在祖国大地上</strong>的品格一脉相承，值得青年代代相传。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" text-anchor="middle"><rect x="30" y="55" width="140" height="70" rx="8" fill="#e9c46a" stroke="#caa83a" stroke-width="2"/><text x="100" y="95" fill="#5b3b12">发现</text><rect x="200" y="55" width="140" height="70" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="270" y="95" fill="#0f3b5e">突破</text><rect x="370" y="55" width="140" height="70" rx="8" fill="#9bbf5a" stroke="#5a8f3c" stroke-width="2"/><text x="440" y="95" fill="#3e6b2e">推广</text><rect x="540" y="55" width="140" height="70" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="610" y="95" fill="#fff">精神</text></g><g stroke="#555" stroke-width="3" fill="none"><line x1="170" y1="90" x2="198" y2="90" marker-end="url(#l1c)"/><line x1="340" y1="90" x2="368" y2="90" marker-end="url(#l1d)"/><line x1="510" y1="90" x2="538" y2="90" marker-end="url(#l1e)"/></g><defs><marker id="l1c" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker><marker id="l1d" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker><marker id="l1e" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker></defs><text x="340" y="170" font-size="13" fill="#5b4636" text-anchor="middle">行文脉络：发现 → 突破 → 推广 → 精神升华</text></svg>', caption: '全文以「发现—突破—推广—精神升华」为脉，层层递进。' },
        { type: 'list', items: ['沈英甲的人物通讯，记袁隆平研究杂交水稻的历程', '文体三要点：真实性、典型性、形象性', '标题化用毛泽东诗句，以稻浪隐喻科技丰收', '科学精神：挑战权威、实践求真、执着创新、心怀天下', '细节描写使人物可感；通讯事实必须真实不可虚构', '主旨：讴歌科学家精神，呼应「劳动光荣」单元主题'] }
      ],
      exercises: [
        { type: 'choice', question: '《喜看稻菽千重浪》一文最主要的文体是？', options: ['小说', '人物通讯', '议论文', '诗歌'], answer: '人物通讯', explanation: '本文记述袁隆平的真实事迹，运用叙述与描写手法及时报道新闻人物，具备真实、典型、形象的特征，属于人物通讯。它不是虚构的小说，也不是重在说理的议论文或抒情为主的诗歌。' },
        { type: 'choice', question: '人物通讯写作的三个基本要求是？', options: ['虚构、夸张、抒情', '真实性、典型性、形象性', '押韵、对仗、用典', '讽刺、荒诞、变形'], answer: '真实性、典型性、形象性', explanation: '人物通讯属新闻文体，首先要求事实真实准确；其次要选取代表性的人物与细节（典型性）；还要借助描写使人物生动可感（形象性）。虚构、押韵、荒诞等均不符合通讯的基本要求。' },
        { type: 'fill', question: '本文标题「喜看稻菽千重浪」化用了______（人名）的诗句，原句出自《七律·到韶山》。', answer: '毛泽东', explanation: '「喜看稻菽千重浪」出自毛泽东《七律·到韶山》：「喜看稻菽千重浪，遍地英雄下夕烟。」本文借这一诗句作题，以丰收的稻浪隐喻袁隆平杂交水稻事业造福天下的巨大贡献，含蓄而贴切。' },
        { type: 'choice', question: '文中写袁隆平在稻田中长时间观察、筛选天然不育株，主要表现了他的什么精神？', options: ['贪图安逸', '严谨求实、执着实践的科学精神', '投机取巧', '漠视土地'], answer: '严谨求实、执着实践的科学精神', explanation: '袁隆平不迷信「水稻无杂种优势」的成说，而是年复一年下田观察、从万千稻穗中筛选不育株，这一细节体现他尊重事实、严谨求是的科学态度与不畏艰辛的执着实践精神。' },
        { type: 'choice', question: '下列对「通讯可以描写但不能虚构」理解正确的是？', options: ['通讯人物可随意编造以吸引读者', '通讯的事实与人物必须真实，描写只是增强形象', '通讯与小说写法完全相同', '通讯不需要任何细节'], answer: '通讯的事实与人物必须真实，描写只是增强形象', explanation: '通讯是新闻文体，核心要求是真实，人物、事件、数据都须有据；适当的描写与典型细节是为了让报道更生动形象，但绝不能脱离事实虚构。这是通讯与小说的根本区别。' }
      ]
    },

    /* ==================== 第2课 心有一团火 ==================== */
    {
      id: 'bx1-u2-l2',
      cover: 'assets/cover/chinese/bx1-u2-l2.svg',
      name: '心有一团火，温暖众人心',
      author: '林为民',
      chapter: '第二单元 劳动光荣（实用性阅读与交流）',
      difficulty: '简单',
      content: [
        { type: 'heading', text: '一、人物与文体' },
        { type: 'paragraph', text: '本文是人物通讯，作者林为民，记述北京百货大楼售货员张秉贵的事迹。张秉贵以「一团火」般的热忱对待每一位顾客，在平凡的售货岗位上作出了不平凡的成绩，体现出普通劳动者的光彩。' },
        { type: 'paragraph', text: '张秉贵（1918—1987），北京百货大楼糖果柜台售货员，全国劳动模范。他从事商业工作数十载，练就「一抓准」「一口清」的硬本领，把三尺柜台变成传播温暖的窗口，被群众誉为「一团火」式的售货员。' },
        { type: 'keypoint', label: '重点·题意', text: '「一团火」是<strong>比喻</strong>：喻指张秉贵<strong>满腔热忱、真诚服务</strong>的精神，也象征<strong>普通劳动的光荣与温暖</strong>。火能驱寒照明，正如他的微笑与服务温暖了无数顾客的心。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fff3e6"/><rect x="250" y="130" width="180" height="110" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="340" y="190" font-size="15" fill="#5b3b12" text-anchor="middle">柜台</text><circle cx="340" cy="95" r="30" fill="#e85d3d"/><path d="M310 95 a30 30 0 0 1 60 0 z" fill="#a9711a"/><path d="M323 92 q17 12 34 0" stroke="#fff" stroke-width="2" fill="none"/><g fill="#e85d3d"><path d="M340 65 q-10 -14 0 -26 q10 12 0 26 z"/><path d="M340 65 q10 -14 0 -26 q-10 12 0 26 z"/></g><g fill="#c0392b"><path d="M260 150 q-12 -10 -4 -26 q14 6 4 26 z"/><path d="M420 150 q12 -10 4 -26 q-14 6 -4 26 z"/></g><text x="340" y="285" font-size="15" fill="#9c4a2e" text-anchor="middle">张秉贵：在柜台前燃烧自己、温暖顾客</text></svg>', caption: '「一团火」精神：把对工作的热爱化作对每一位顾客的真诚。' },
        { type: 'heading', text: '二、语言的锤炼与细节描写' },
        { type: 'paragraph', text: '本文善于用动作、语言、细节描写刻画人物。作者没有空喊口号，而是让一个个真实画面自己说话——货架前的身影、称糖的手、含笑的脸，共同熔铸成「一团火」的生动意象。' },
        { type: 'keypoint', label: '重点·笔法', text: '文中运用<strong>细节描写</strong>：如写张秉贵「从货架上取糖，<strong>一抓就准</strong>」「算账报价<strong>一口清</strong>」，又写他「见顾客主动招呼、笑脸相迎」。动作见本领，神态见真诚，细节使人物跃然纸上。' },
        { type: 'example', label: '鉴赏示范', text: '文中写张秉贵「一抓就准」「一口清」，这些细节有什么表达作用？<br><br><strong>解析</strong>：这两处细节从<strong>动作</strong>与<strong>语言</strong>两个角度刻画人物。「一抓就准」写他抓糖分量分毫不差，显<strong>业务精湛</strong>；「一口清」写他报价算账脱口而出，显<strong>脑子灵、反应快</strong>。过硬本领来自长年苦练，细节以小见大，让读者看到一个<strong>精益求精、对岗位充满热爱</strong>的劳动者形象，远比空泛的赞美更有力量。' },
        { type: 'warn', label: '易错·词义', text: '「一团火」是<strong>比喻义</strong>，指精神的热忱，<strong>不是实指柜台上的火焰或夏天的炎热</strong>。阅读时若望文生义，把标题理解为真的火，就错失了本文歌颂普通劳动者精神光彩的用心。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f7fb"/><g font-size="14" text-anchor="middle"><rect x="50" y="50" width="160" height="120" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="130" y="105" fill="#5b3b12">一抓准</text><text x="130" y="130" fill="#7a5a1e" font-size="12">分量毫厘不差</text><rect x="260" y="50" width="160" height="120" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="340" y="105" fill="#0f3b5e">一口清</text><text x="340" y="130" fill="#0f3b5e" font-size="12">报价脱口而出</text><rect x="470" y="50" width="160" height="120" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="550" y="105" fill="#fff">热心肠</text><text x="550" y="130" fill="#fff" font-size="12">温暖众顾客</text></g><text x="340" y="215" font-size="13" fill="#3e5b6b" text-anchor="middle">真功夫 + 真性情 = 一团火</text></svg>', caption: '过硬本领与真诚态度结合，平凡的售货员也能发光发热。' },
        { type: 'heading', text: '三、张秉贵的「一团火」精神' },
        { type: 'list', items: ['主动热情：见到顾客主动招呼，笑脸相迎、言语亲切', '精益求精：苦练「一抓准」「一口清」，业务本领过硬', '换位思考：体谅顾客难处，耐心周到、不厌其烦', '敬业奉献：把平凡岗位当作为人民服务的舞台，数十年如一日'] },
        { type: 'keypoint', label: '重点·本领', text: '「一团火」不仅靠态度，也靠<strong>过硬本领</strong>支撑。张秉贵常说「<strong>胸中有一团火，才能温暖顾客</strong>」，而这团火里既有对工作的爱，也有多年练就的真功夫——没有本领的「热情」难以持久，本领与态度从来相辅相成。' },
        { type: 'table', headers: ['典型细节', '体现的品质'], rows: [['一抓准、一口清的硬本领', '业务精湛、精益求精'], ['见顾客主动招呼、笑脸相迎', '热情真诚、主动服务'], ['体谅顾客难处、耐心周到', '换位思考、善良体贴'], ['在平凡岗位默默奉献数十年', '敬业爱岗、平凡伟大']] },
        { type: 'heading', text: '四、艺术特色与主旨' },
        { type: 'list', items: ['以小见大：借柜台小事写普通劳动者的精神光彩', '细节传神：动作、语言、神态描写使人物可感', '对比衬托：以个别怠慢的顾客反衬其始终如一', '语言朴实：不事雕琢却饱含温度，契合人物身份', '标题点睛：「一团火」贯穿全篇，意象鲜明'] },
        { type: 'keypoint', label: '重点·主旨', text: '本文以张秉贵为例告诉读者：<strong>劳动无贵贱，岗位无大小</strong>。只要精益求精、真诚奉献，普通劳动者同样能赢得尊重、发光发热，「一团火」虽小，却能照亮和温暖许许多多的人。' },
        { type: 'tip', label: '拓展·劳模精神', text: '张秉贵是新中国第一代全国劳模的代表。「劳模精神」的核心是<strong>爱岗敬业、争创一流、艰苦奋斗、勇于创新、淡泊名利、甘于奉献</strong>。它与今天的「工匠精神」「敬业精神」一脉相承，都是「劳动光荣」这一价值最朴素的注脚。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fdf3e8"/><g font-size="13" text-anchor="middle"><rect x="30" y="50" width="140" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="100" y="90" fill="#5b3b12">热情</text><rect x="200" y="50" width="140" height="70" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="270" y="90" fill="#0f3b5e">本领</text><rect x="370" y="50" width="140" height="70" rx="8" fill="#9bbf5a" stroke="#5a8f3c" stroke-width="2"/><text x="440" y="90" fill="#3e6b2e">换位</text><rect x="540" y="50" width="140" height="70" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="610" y="90" fill="#fff">奉献</text></g><g stroke="#555" stroke-width="3" fill="none"><line x1="170" y1="85" x2="198" y2="85" marker-end="url(#l2c)"/><line x1="340" y1="85" x2="368" y2="85" marker-end="url(#l2d)"/><line x1="510" y1="85" x2="538" y2="85" marker-end="url(#l2e)"/></g><defs><marker id="l2c" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker><marker id="l2d" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker><marker id="l2e" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker></defs><text x="340" y="160" font-size="13" fill="#9c4a2e" text-anchor="middle">精神四要素：热情 → 本领 → 换位 → 奉献</text></svg>', caption: '张秉贵的「一团火」由热情、本领、换位、奉献四要素汇聚而成。' },
        { type: 'list', items: ['林为民的人物通讯，记售货员张秉贵的事迹', '「一团火」是比喻，指满腔热忱、真诚服务的精神', '细节传神：一抓准、一口清显业务精湛', '精神四要素：热情、本领、换位思考、敬业奉献', '劳动无贵贱、岗位无大小，平凡亦能发光', '主旨呼应「劳动光荣」，讴歌普通劳动者'] }
      ],
      exercises: [
        { type: 'choice', question: '「心有一团火，温暖众人心」中「一团火」指的是？', options: ['柜台上的实际火焰', '张秉贵满腔热忱、真诚服务的精神', '夏天的炎热天气', '燃烧的煤炉'], answer: '张秉贵满腔热忱、真诚服务的精神', explanation: '「一团火」是比喻，指张秉贵对工作和顾客的一腔热忱与真诚。他身在平凡售货岗位却以火热之心服务众人，标题以此象征普通劳动者精神的明亮与温暖，并非实指火焰。' },
        { type: 'choice', question: '张秉贵练就的「一抓准」「一口清」说明他？', options: ['投机取巧', '业务精湛、对工作精益求精', '不求甚解', '厌恶工作'], answer: '业务精湛、对工作精益求精', explanation: '「一抓准」指抓糖分量分毫不差，「一口清」指报价算账脱口而出。这些过硬本领来自长期坚持与刻苦练习，体现他在平凡岗位上精益求精、钻研业务的敬业态度。' },
        { type: 'fill', question: '张秉贵是______（城市名）百货大楼的售货员，被誉为「一团火」式的劳动模范。', answer: '北京', explanation: '张秉贵是新中国成立初期的全国劳动模范，长期在北京百货大楼糖果柜台工作。他以真诚热情的服务态度和精湛的业务本领成为商业战线的楷模，「一团火」精神影响深远。' },
        { type: 'choice', question: '本文与《喜看稻菽千重浪》的共通点是？', options: ['都写虚构故事', '都是人物通讯，讴歌劳动者的奉献精神', '都写古代人物', '都批判劳动'], answer: '都是人物通讯，讴歌劳动者的奉献精神', explanation: '两文同为人物通讯，分别写科学家袁隆平与服务员张秉贵，虽岗位不同，却都真实记录了劳动者以执着与热忱创造价值、服务社会的奉献精神，共同呼应「劳动光荣」的单元主题。' },
        { type: 'choice', question: '下列对「劳动无贵贱，岗位无大小」理解正确的是？', options: ['只有科学家才算劳动', '任何诚实劳动都值得尊重，平凡岗位也能创造价值', '售货员不如科学家', '劳动分三六九等'], answer: '任何诚实劳动都值得尊重，平凡岗位也能创造价值', explanation: '这句话是单元核心立意：社会分工不同，但只要是诚实、敬业的劳动都创造价值、值得尊重。张秉贵在售货员岗位上同样作出不凡业绩，正说明平凡岗位亦能发光。' }
      ]
    },

    /* ==================== 第3课 探界者钟扬 ==================== */
    {
      id: 'bx1-u2-l3',
      cover: 'assets/cover/chinese/bx1-u2-l3.svg',
      name: '探界者钟扬',
      author: '叶雨婷',
      chapter: '第二单元 劳动光荣（实用性阅读与交流）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、人物与标题' },
        { type: 'paragraph', text: '本文是人物通讯，作者叶雨婷，记述复旦大学教授、植物学家钟扬的事迹。钟扬长期在青藏高原采集种子、投身科普与民族教育，直至 2017 年因公殉职。「探界者」既指他探索生物分布的边界，也指他不断突破人生边界。' },
        { type: 'paragraph', text: '钟扬（1964—2017），湖南邵阳人，复旦大学生命科学学院教授。他十六年扎根青藏高原，为国家种质库保存上千种植物的种子；又倾心民族教育，为西藏大学培养科研人才，把生命献给了科学与教育。' },
        { type: 'keypoint', label: '重点·题意', text: '「探界者」有<strong>双重含义</strong>：一是<strong>探索植物分布的自然边界</strong>（在高原为国家种子库采样）；二是<strong>突破自我、勇于挑战的人生境界</strong>（跨界科研、科普、教育，永不止步）。一个「界」字，写尽他的一生。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef5ee"/><path d="M0 230 L120 180 L240 212 L360 150 L480 200 L600 138 L680 188 L680 300 L0 300 Z" fill="#9bbf7a"/><path d="M0 262 L160 222 L320 252 L480 212 L680 252 L680 300 L0 300 Z" fill="#6f9b4a"/><circle cx="360" cy="95" r="30" fill="#f4c430" opacity="0.85"/><g stroke="#5b7a3e" stroke-width="3" fill="none"><path d="M360 150 l0 -42 M345 132 l15 -22 15 22"/></g><g fill="#e85d8a"><circle cx="200" cy="200" r="6"/><circle cx="500" cy="195" r="6"/></g><text x="340" y="286" font-size="15" fill="#3e6b2e" text-anchor="middle">青藏高原：钟扬采集种子的「生命边界」</text></svg>', caption: '钟扬十六年跋涉高原，为国家种质库保存上千种植物的种子。' },
        { type: 'heading', text: '二、文章结构与选材' },
        { type: 'paragraph', text: '本文用多个小标题组织材料，如「种子达人」「科学队长」「接盘的校长」「生命延续」等。每个小标题聚焦钟扬的一段经历，像一组特写镜头，拼出一位立体、真实的科学家形象。' },
        { type: 'keypoint', label: '重点·结构', text: '小标题结构的好处是<strong>化整为零、分类呈现</strong>：读者能快速把握人物在不同领域的贡献；同时各片段独立又互文，使形象<strong>丰满而不杂乱</strong>。这是长篇人物通讯常用的结构方法。' },
        { type: 'example', label: '鉴赏示范', text: '本文用小标题（如「种子达人」「科学队长」）组织材料，有什么表达效果？<br><br><strong>解析</strong>：小标题把钟扬在<strong>种子研究、科普传播、民族教育</strong>等不同领域的典型事迹分类呈现，结构清晰、重点突出；每个标题又带有形象色彩（「达人」「队长」），亲切生动。多个片段组合，避免了平铺直叙，使人物<strong>立体、真实、可感</strong>，也便于读者分层理解其精神世界。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><g font-size="14" text-anchor="middle"><rect x="30" y="50" width="180" height="130" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="120" y="105" fill="#0f3b5e">探索自然</text><text x="120" y="132" fill="#0f3b5e" font-size="12">高原种子边界</text><rect x="250" y="50" width="180" height="130" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="340" y="105" fill="#5b3b12">突破自我</text><text x="340" y="132" fill="#5b3b12" font-size="12">人生不断跨界</text><rect x="470" y="50" width="180" height="130" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="560" y="105" fill="#fff">奉献育人</text><text x="560" y="132" fill="#fff" font-size="12">播种未来希望</text></g><text x="340" y="215" font-size="13" fill="#3e5b6b" text-anchor="middle">「探界」= 探索 + 突破 + 传承</text></svg>', caption: '从自然到人生再到教育，「探界」层层递进、三位一体。' },
        { type: 'heading', text: '三、钟扬的精神品格' },
        { type: 'list', items: ['执着探索：十六年扎根青藏高原，建起种子「宝藏库」', '无私奉献：把论文写在祖国大地上，不图个人名利', '因材施教：为少数民族地区培养科研人才', '乐观坚韧：面对高原反应与艰险从不退缩'] },
        { type: 'keypoint', label: '重点·情怀', text: '钟扬说「<strong>一个基因可以拯救一个国家，一粒种子可以造福万千苍生</strong>」。他不是为发论文而科研，而是为<strong>国家的生态安全与未来</strong>而采集。这种把个人奋斗融入国家需要的胸怀，正是新时代劳动者最珍贵的品质。' },
        { type: 'warn', label: '易错·区分', text: '三篇人物通讯同写劳动，但<strong>侧重点各不相同</strong>：袁隆平写<strong>科学创新</strong>、张秉贵写<strong>服务热情</strong>、钟扬写<strong>跨界探索与薪火相传</strong>。阅读时要抓住各自主线，避免把三个人物混为一谈。' },
        { type: 'table', headers: ['人物', '岗位', '侧重精神'], rows: [['袁隆平', '科学家', '科学创新、胸怀天下'], ['张秉贵', '售货员', '服务热情、精益求精'], ['钟扬', '植物学家', '跨界探索、薪火相传']] },
        { type: 'heading', text: '四、艺术特色与主旨' },
        { type: 'list', items: ['小标题结构：化整为零，使长文条理清晰', '典型片段：每节选一个动人场景，以一斑窥全豹', '叙议结合：在叙事中自然升华，突出精神', '语言饱含深情：于平实中见崇敬与痛惜', '多重身份写照：科研者、教育者、科普者合一'] },
        { type: 'keypoint', label: '重点·主旨', text: '本文通过钟扬在<strong>科研、教育、科普</strong>多领域的奔走与奉献，赞颂了新时代劳动者<strong>勇于探索、无私坚守、薪火相传</strong>的精神品格，也启示青年：人生的价值，在于不断「探界」、把光热传给后来人。' },
        { type: 'tip', label: '拓展·种子方舟', text: '钟扬在青藏高原采集的种子，被送往<strong>国家种质资源库</strong>——堪称植物的「诺亚方舟」。种质资源关乎粮食安全与生物多样性，是关乎民族未来的战略储备。理解这一点，便能读懂钟扬「透支生命采种子」的悲壮与崇高。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef5ee"/><g font-size="13" text-anchor="middle"><rect x="25" y="50" width="145" height="70" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="97" y="90" fill="#0f3b5e">科研</text><rect x="190" y="50" width="145" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="262" y="90" fill="#5b3b12">教育</text><rect x="355" y="50" width="145" height="70" rx="8" fill="#9bbf5a" stroke="#5a8f3c" stroke-width="2"/><text x="427" y="90" fill="#3e6b2e">科普</text><rect x="520" y="50" width="145" height="70" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="592" y="90" fill="#fff">坚守</text></g><g stroke="#555" stroke-width="3" fill="none"><line x1="170" y1="85" x2="188" y2="85" marker-end="url(#l3d)"/><line x1="335" y1="85" x2="353" y2="85" marker-end="url(#l3e)"/><line x1="500" y1="85" x2="518" y2="85" marker-end="url(#l3f)"/></g><defs><marker id="l3d" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker><marker id="l3e" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker><marker id="l3f" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker></defs><text x="340" y="155" font-size="13" fill="#3e6b2e" text-anchor="middle">四线交织：科研 → 教育 → 科普 → 坚守</text></svg>', caption: '钟扬在科研、教育、科普、坚守四条线上同时「探界」。' },
        { type: 'list', items: ['叶雨婷的人物通讯，记植物学家钟扬', '「探界者」双重含义：探索自然边界 + 突破人生边界', '小标题结构，化整为零、立体呈现人物', '精神：执着探索、无私奉献、因材施教、坚韧乐观', '三篇通讯侧重点不同：创新 / 服务 / 探索传承', '主旨：赞颂勇于探索、薪火相传的新时代劳动者'] }
      ],
      exercises: [
        { type: 'choice', question: '标题「探界者」的含义不包括？', options: ['探索植物分布的自然边界', '突破自我、勇于挑战的人生境界', '在商场柜台服务顾客', '在科研与教育间跨界奔走'], answer: '在商场柜台服务顾客', explanation: '「探界者」指钟扬探索植物自然边界、突破人生边界、跨界科研与教育的精神；「在商场柜台服务顾客」是张秉贵的事迹，不属于钟扬，故为不包含项。' },
        { type: 'choice', question: '钟扬长期扎根哪一地区采集种子、开展科研？', options: ['黄土高原', '青藏高原', '东北平原', '长江三角洲'], answer: '青藏高原', explanation: '钟扬十六年坚持在青藏高原考察，克服高寒缺氧，为国家种质资源库采集保存了上千种植物的种子，体现了扎根艰苦地区、无私奉献的科学精神。' },
        { type: 'fill', question: '钟扬是______大学（高校名）教授，植物学家、科普工作者，2017 年在内蒙古出差途中遭遇车祸殉职。', answer: '复旦|复旦大学', explanation: '钟扬生前任复旦大学生命科学学院教授，同时投身西藏大学等少数民族地区的高校建设与人才培养。他将一生献给植物学研究与科学普及，2017 年不幸因公殉职，被誉为「探界者」。' },
        { type: 'choice', question: '本文用小标题（如「种子达人」「科学队长」）组织材料，作用是？', options: ['使文章结构松散', '以典型片段分类呈现，使人物形象立体真实', '为了凑字数', '掩盖事实不足'], answer: '以典型片段分类呈现，使人物形象立体真实', explanation: '多个小标题把钟扬在不同领域（种子研究、科普、育人等）的典型事迹分类呈现，既清晰有条理，又通过一个个具体片段让人物真实可感、形象丰满，是人物通讯常见的结构手法。' },
        { type: 'choice', question: '三篇人物通讯（袁隆平、张秉贵、钟扬）的共同精神内核是？', options: ['追名逐利', '在各自岗位上执着奉献、创造价值', '安于现状', '脱离群众'], answer: '在各自岗位上执着奉献、创造价值', explanation: '三位主人公岗位迥异——科学家、售货员、植物学家，但都怀着对事业的热爱与对社会的责任，在各自领域执着耕耘、无私奉献，共同诠释了「劳动光荣、创造伟大」的时代主题。' }
      ]
    },

    /* ==================== 第4课 芣苢 ==================== */
    {
      id: 'bx1-u2-l4',
      cover: 'assets/cover/chinese/bx1-u2-l4.svg',
      name: '芣苢',
      author: '《诗经·周南》',
      chapter: '第二单元 劳动光荣（实用性阅读与交流）',
      difficulty: '简单',
      content: [
        { type: 'heading', text: '一、出处与体裁' },
        { type: 'paragraph', text: '《芣苢》（fú yǐ）出自《诗经·周南》，是一首古老的民间歌谣。「芣苢」即车前草，古人认为其籽实可治妇女不孕，故采之以求子。全诗描写妇女们集体采摘车前草的劳动场景，节奏轻快、欢趣盎然。' },
        { type: 'paragraph', text: '《诗经》是我国最早的诗歌总集，收录西周初年至春秋中叶的诗歌 305 篇，又称「诗三百」。它按音乐性质分为「风」「雅」「颂」三类，常用「赋」「比」「兴」三种表现手法，合称「六义」。本诗属「风」，即各地民歌。' },
        { type: 'keypoint', label: '重点·六义', text: '《诗经》「六义」：<strong>风</strong>（各地民歌）、<strong>雅</strong>（朝廷正乐）、<strong>颂</strong>（宗庙祭歌）为<strong>体裁</strong>分类；<strong>赋</strong>（直陈其事）、<strong>比</strong>（比喻）、<strong>兴</strong>（先言他物以引所咏之词）为<strong>手法</strong>分类。本诗以「赋」为主，直叙采摘全过程。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f1f8ee"/><rect x="0" y="225" width="680" height="75" fill="#cfe3a8"/><g fill="#5a8f3c"><path d="M340 225 q-14 -72 0 -124 q14 52 0 124 z"/></g><g stroke="#5a8f3c" stroke-width="2" fill="none"><path d="M340 152 q-32 -12 -54 -34"/><path d="M340 162 q32 -12 54 -34"/></g><g fill="#9bbf5a"><circle cx="286" cy="118" r="9"/><circle cx="394" cy="118" r="9"/><circle cx="318" cy="98" r="8"/><circle cx="362" cy="98" r="8"/></g><g fill="#e85d8a"><circle cx="340" cy="180" r="7"/><circle cx="320" cy="192" r="6"/><circle cx="360" cy="192" r="6"/></g><text x="340" y="288" font-size="15" fill="#3e6b2e" text-anchor="middle">车前草（芣苢）：古代妇女采摘的植物</text></svg>', caption: '诗中反复吟咏的「采、有、掇、捋、袺、襭」是一连串采撷动作。' },
        { type: 'heading', text: '二、原诗与字词疏通' },
        { type: 'poem', text: '采采芣苢，薄言采之。采采芣苢，薄言有之。\n采采芣苢，薄言掇之。采采芣苢，薄言捋之。\n采采芣苢，薄言袺之。采采芣苢，薄言襭之。' },
        { type: 'paragraph', text: '「采采」形容车前草茂盛的样子；「薄言」是《诗经》中常见的助词，无实在意义，起调节音节的作用。「采、有、掇、捋、袺、襭」六个动词，写尽从开始采摘到满载而归的完整过程。' },
        { type: 'keypoint', label: '重点·动词', text: '全诗仅换<strong>六个动词</strong>——采（采摘）、有（取得）、掇（拾取）、捋（成把抹取）、袺（用衣襟兜）、襭（把衣襟掖腰收盛）——由少到多、由慢到快，<strong>递进式</strong>写出劳动过程与欢快情绪，无一字写「乐」而乐在其中。' },
        { type: 'example', label: '鉴赏示范', text: '《芣苢》全诗仅变换六个动词，却百读不厌，请分析这样写的妙处。<br><br><strong>解析</strong>：六个动词「采、有、掇、捋、袺、襭」构成一条<strong>由起始到满载</strong>的劳动线索：先「采」后「有」，再「掇」而「捋」，最后「袺」且「襭」，动作由简到繁、数量由少到多。配合重章叠句，读来如<strong>劳动号子般层层推进</strong>，既写出采摘的欢快节奏，又暗含丰收的喜悦，达到「不写乐而乐自见」的艺术效果。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fef9f0"/><g font-size="15" fill="#5b4636" text-anchor="middle"><text x="70" y="45">采</text><text x="190" y="45">有</text><text x="310" y="45">掇</text><text x="430" y="45">捋</text><text x="550" y="45">袺</text><text x="630" y="45">襭</text></g><g fill="#7ec8e3"><rect x="40" y="70" width="60" height="60" rx="6"/><rect x="160" y="70" width="60" height="60" rx="6"/><rect x="280" y="70" width="60" height="60" rx="6"/><rect x="400" y="70" width="60" height="60" rx="6"/><rect x="520" y="70" width="60" height="60" rx="6"/><rect x="600" y="70" width="60" height="60" rx="6"/></g><g stroke="#c0392b" stroke-width="3" fill="none"><line x1="100" y1="100" x2="158" y2="100" marker-end="url(#l4a)"/><line x1="220" y1="100" x2="278" y2="100" marker-end="url(#l4b)"/><line x1="340" y1="100" x2="398" y2="100" marker-end="url(#l4c)"/><line x1="460" y1="100" x2="518" y2="100" marker-end="url(#l4d)"/><line x1="580" y1="100" x2="598" y2="100" marker-end="url(#l4e)"/></g><defs><marker id="l4a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker><marker id="l4b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker><marker id="l4c" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker><marker id="l4d" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker><marker id="l4e" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="170" font-size="13" fill="#9c4a2e" text-anchor="middle">由少到多、由慢到快：劳动的节奏与欢欣</text></svg>', caption: '六个动词如电影镜头，串联起一幅流动的采撷图。' },
        { type: 'heading', text: '三、章法艺术' },
        { type: 'keypoint', label: '重点·章法', text: '本诗是<strong>重章叠句</strong>的典范：三章结构相同，仅替换少数动词，回环往复、一唱三叹。这种手法把简单的采摘动作写得<strong>波澜起伏、余味悠长</strong>，也开了后世民歌复沓之风。' },
        { type: 'list', items: ['重章叠句：章节反复，仅易数字，回环咏叹', '动词精当：六字写尽劳动全过程，由少到多', '节奏轻快：短句促节，如劳动号子般明快', '风格清新：民歌本色，无雕琢、无说教', '以赋为主：直陈其事，于平实中见欢趣'] },
        { type: 'warn', label: '易错·词义', text: '「薄言」是<strong>助词，无实义</strong>（一说「薄」表急迫、「言」为语气词），<strong>不要误释为「薄情地说话」或「简短地说」</strong>。这是《诗经》中固定的语助词，望文生义是阅读古诗文最常见的错误之一。' },
        { type: 'table', headers: ['动词', '释义', '动作阶段'], rows: [['采', '采摘，开始采撷', '起始'], ['有', '取得、采得', '获得'], ['掇', '拾取，从地上捡起', '收集'], ['捋', '用手成把抹取', '收取'], ['袺', '用衣襟兜住', '盛装'], ['襭', '把衣襟掖腰间收盛', '满载']] },
        { type: 'heading', text: '四、情感主旨与文化意蕴' },
        { type: 'paragraph', text: '《芣苢》表面写采草，背后却藏着先民的生活与期盼：车前子「宜子」的民俗，使采摘多了层祈求生育、繁衍兴旺的意味；而集体劳动的欢快，则折射出上古农耕社会中人与人之间朴素和睦的关系。' },
        { type: 'keypoint', label: '重点·主旨', text: '诗歌以<strong>重章叠句</strong>再现妇女集体采摘的欢乐场景，表现了劳动的<strong>轻快、和谐与生机</strong>，也传递出先民对丰收与人丁兴旺的朴素愿望，是《诗经》「饥者歌其食，劳者歌其事」的生动写照。' },
        { type: 'tip', label: '拓展·风诗特色', text: '《诗经》的「风」多采自民间，真实记录底层百姓的劳动、爱情与疾苦，具有<strong>质朴、鲜活、乐天</strong>的特质。《芣苢》与《关雎》《蒹葭》同属十五国风，是了解周代社会风貌最珍贵的活化石。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f1f8ee"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="160" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="120" y="90" fill="#3e6b2e">重章叠句</text><rect x="260" y="50" width="160" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="340" y="90" fill="#5b3b12">六动词</text><rect x="480" y="50" width="160" height="70" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="560" y="90" fill="#fff">欢乐劳动</text></g><g stroke="#555" stroke-width="3" fill="none"><line x1="200" y1="85" x2="258" y2="85" marker-end="url(#l4f)"/><line x1="420" y1="85" x2="478" y2="85" marker-end="url(#l4g)"/></g><defs><marker id="l4f" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker><marker id="l4g" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker></defs><text x="340" y="155" font-size="13" fill="#3e6b2e" text-anchor="middle">艺术三件套：章法 → 动词 → 情感</text></svg>', caption: '重章叠句 + 六个动词，成就一首欢快的劳动歌谣。' },
        { type: 'list', items: ['《芣苢》出自《诗经·周南》，属各国风（民歌）', '《诗经》六义：风雅颂（体裁）+ 赋比兴（手法）', '六个动词递进：采、有、掇、捋、袺、襭', '章法重章叠句，回环往复；「薄言」为助词无实义', '主旨：表现集体劳动的轻快欢欣与繁衍祈愿', '与《插秧歌》对比：一乐一苦，同歌劳动而异其调'] }
      ],
      exercises: [
        { type: 'choice', question: '《芣苢》出自下列哪部典籍？', options: ['《楚辞》', '《诗经·周南》', '《乐府诗集》', '《唐诗三百首》'], answer: '《诗经·周南》', explanation: '《芣苢》是《诗经·国风·周南》中的一篇，属西周至春秋时期的民间歌谣。「风」多为各地民歌，本诗正是一首反映妇女采车前草劳动生活的古老民歌。' },
        { type: 'choice', question: '诗中「采、有、掇、捋、袺、襭」这组动词的作用是？', options: ['形容战争场面', '由少到多递进写出采撷过程与欢快节奏', '描写山水风景', '表达思乡之情'], answer: '由少到多递进写出采撷过程与欢快节奏', explanation: '六个动词分别写采摘、拾取、成把抹取、用衣襟兜、掖衣收盛，动作由简到繁、数量由少到多，层层递进展现劳动全过程，并在复沓中传达出轻快喜悦的情绪。' },
        { type: 'fill', question: '《诗经》共收录诗歌______篇（通常称「诗三百」），按音乐分为风、雅、颂三类。', answer: '305|三百零五', explanation: '《诗经》是我国最早的诗歌总集，共 305 篇（另有笙诗 6 篇有目无辞，通常不计），按音乐性质分为「风」（各地民歌）、「雅」（朝廷正乐）、「颂」（宗庙祭祀乐歌）三类。' },
        { type: 'choice', question: '对「薄言采之」中「薄言」一词解释正确的是？', options: ['薄情地说话', '助词，无实义（或表语气）', '言语简短', '轻视地言说'], answer: '助词，无实义（或表语气）', explanation: '「薄言」在《诗经》中多为助词，起调节音节、舒缓语气的作用，无实在词义。把它误解为「薄情地说话」是典型的望文生义，阅读古诗文须警惕此类误读。' },
        { type: 'choice', question: '《芣苢》在章法上的突出特点是？', options: ['一韵到底不换字', '重章叠句，回环往复', '通篇用典', '句式长短错落如词'], answer: '重章叠句，回环往复', explanation: '全诗三章结构相同，仅替换少数动词，这种「重章叠句」手法在《诗经》中极为常见。它使诗歌节奏鲜明、回环咏叹，强化了劳动的欢快氛围，也体现了早期民歌的艺术特征。' }
      ]
    },

    /* ==================== 第5课 插秧歌 ==================== */
    {
      id: 'bx1-u2-l5',
      cover: 'assets/cover/chinese/bx1-u2-l5.svg',
      name: '插秧歌',
      author: '杨万里',
      chapter: '第二单元 劳动光荣（实用性阅读与交流）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与诗体' },
        { type: 'paragraph', text: '杨万里（1127—1206），字廷秀，号诚斋，南宋诗人，与陆游、范成大、尤袤并称「中兴四大诗人」。他创立活泼自然、幽默风趣的「诚斋体」，善于从日常琐碎中捕捉意趣。《插秧歌》却一反闲适，以白描写一家老小冒雨插秧的紧张劳动。' },
        { type: 'paragraph', text: '《插秧歌》是一首七言古诗（乐府体民歌风），写农家在雨天抢插秧苗的繁忙景象。全诗如同一组电影镜头，把抛秧、接秧、拔秧、插秧的动作，以及农人顾不上吃饭的专注，定格得真切动人。' },
        { type: 'keypoint', label: '重点·诚斋体', text: '「诚斋体」的特点是<strong>语言通俗自然、幽默活泼、善于捕捉生活瞬间</strong>。本诗虽写劳动艰辛，却仍见其「活法」：用语俚俗如话、画面感极强，于质朴中见生机，是诚斋体另一面向的代表。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4f8"/><rect x="0" y="225" width="680" height="75" fill="#9bbfcf"/><g fill="#5b7a8a"><path d="M120 225 q-10 -32 0 -52 q10 22 0 52 z"/><path d="M300 225 q-10 -36 0 -56 q10 22 0 56 z"/><path d="M480 225 q-10 -30 0 -50 q10 20 0 50 z"/></g><g fill="#c0392b"><path d="M250 150 l0 -28 M240 138 l10 -13 10 13"/></g><g fill="#3e6b8a"><rect x="430" y="150" width="64" height="14" rx="4"/></g><g fill="#5b7a8a" opacity="0.6"><path d="M60 90 q10 8 0 20 q-10 -12 0 -20 z"/><path d="M600 110 q10 8 0 20 q-10 -12 0 -20 z"/></g><text x="340" y="288" font-size="15" fill="#2e5b6b" text-anchor="middle">雨中水田：田夫抛秧、田妇接、儿女插</text></svg>', caption: '「笠是兜鍪蓑是甲」把雨具比作铠甲，写出抢插的紧张。' },
        { type: 'heading', text: '二、原诗与农家协作' },
        { type: 'poem', text: '田夫抛秧田妇接，小儿拔秧大儿插。\n笠是兜鍪蓑是甲，雨从头上湿到胛。\n唤渠朝餐歇半霎，低头折腰只不答。\n秧根未牢莳未匝，照管鹅儿与雏鸭。' },
        { type: 'paragraph', text: '字词疏通：「兜鍪（móu）」是古代头盔，「蓑」是蓑衣，「甲」是铠甲；「胛（jiǎ）」指肩胛；「渠」在诗词中常作第三人称代词，意为「他」；「莳（shì）」指移栽（插秧），「匝（zā）」意为周遍、满；「朝餐」即早饭。' },
        { type: 'keypoint', label: '重点·首联', text: '首联写<strong>全家分工协作</strong>：「田夫抛秧田妇接，小儿拔秧大儿插」，四个动作「抛、接、拔、插」由远及近、由老及幼，一家四口各司其职、配合默契，劳动的紧张与家庭的温情交织在一起。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「笠是兜鍪蓑是甲，雨从头上湿到胛」两句。<br><br><strong>解析</strong>：这两句以<strong>比喻</strong>见奇：诗人把斗笠比作头盔（兜鍪），把蓑衣比作铠甲（甲），仿佛农人不是耕作而是<strong>临阵作战</strong>，凸显抢农时、斗风雨的紧张；后句「雨从头上湿到胛」以<strong>白描</strong>写雨水湿透全身，不言苦而苦自见。比喻加白描，把农家冒雨抢插的艰辛写得既生动又厚重。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#fef9f0"/><g font-size="14" text-anchor="middle"><rect x="40" y="50" width="140" height="110" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="110" y="100" fill="#5b3b12">抛·接</text><text x="110" y="125" fill="#7a5a1e" font-size="12">首联分工</text><rect x="210" y="50" width="140" height="110" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="280" y="100" fill="#0f3b5e">拔·插</text><text x="280" y="125" fill="#0f3b5e" font-size="12">协作默契</text><rect x="380" y="50" width="140" height="110" rx="8" fill="#cfd8e3" stroke="#5b7a8a" stroke-width="2"/><text x="450" y="100" fill="#33485a">笠·蓑</text><text x="450" y="125" fill="#33485a" font-size="12">如甲冑</text><rect x="550" y="50" width="130" height="110" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="615" y="100" fill="#fff">不答</text><text x="615" y="125" fill="#fff" font-size="12">照管鹅鸭</text></g><text x="340" y="200" font-size="13" fill="#9c4a6e" text-anchor="middle">四联如四格镜头：分工 → 备战 → 忘食 → 尽责</text></svg>', caption: '四联串联：分工—备战—忘食—尽责，勾勒鲜活的抢插图。' },
        { type: 'heading', text: '三、细节与情感' },
        { type: 'keypoint', label: '重点·尾联', text: '尾联「唤渠朝餐歇半霎，低头折腰只不答。秧根未牢莳未匝，照管鹅儿与雏鸭」写农人顾不上吃饭，还惦记家禽糟蹋嫩秧。一个「只不答」写尽<strong>专注忘我</strong>，末句叮嘱更见<strong>认真负责</strong>——辛苦之中，是对土地与收成的深沉牵挂。' },
        { type: 'list', items: ['白描传神：不加渲染，动作、对话直录如见', '比喻新奇：笠蓑比甲冑，化农耕为战阵', '全家协作：抛接拔插，分工中见温情', '生活气息浓：语言俚俗如话，充满烟火气', '细节动人：不答、照管鹅鸭，以小见大'] },
        { type: 'warn', label: '易错·词义', text: '「唤渠朝餐歇半霎」中「渠」是<strong>第三人称代词「他」</strong>（指农人），<strong>不是「水渠」</strong>。古汉语及诗词中「渠」常作「他」解。把「渠」误读为水渠，整句意思便完全走样，这是最常见的字词误读。' },
        { type: 'table', headers: ['诗句联次', '内容', '手法与作用'], rows: [['首联', '田夫抛秧田妇接，小儿拔秧大儿插', '白描分工，全家协作'], ['颔联', '笠是兜鍪蓑是甲，雨从头上湿到胛', '比喻，如临战阵'], ['颈联', '唤渠朝餐歇半霎，低头折腰只不答', '细节，专注忘食'], ['尾联', '秧根未牢莳未匝，照管鹅儿与雏鸭', '叮嘱，认真负责']] },
        { type: 'heading', text: '四、主旨与比较' },
        { type: 'paragraph', text: '同写劳动，《芣苢》是一首欢快轻灵的采撷谣，《插秧歌》则是一幅紧张艰辛的抢插图。一乐一苦，恰恰说明劳动有不同面相：有丰收在望的欣然，也有抢抓农时的劳碌。二者并读，方能得「劳动光荣」之全貌。' },
        { type: 'keypoint', label: '重点·主旨', text: '诗歌以<strong>白描</strong>再现农家<strong>冒雨抢插秧苗</strong>的繁忙景象，赞美了农民<strong>吃苦耐劳、抓紧农时、认真负责</strong>的劳动品格，于艰辛中见坚毅，是宋代田园诗中「重实况、写民生」一脉的代表，与本单元「劳动光荣」主题相契。' },
        { type: 'tip', label: '拓展·宋代田园诗', text: '杨万里之外，范成大《四时田园杂兴》、陆游的农事诗也都关注农家甘苦。与陶渊明「悠然见南山」的隐逸闲适不同，宋人田园诗更<strong>贴近现实、直面辛劳</strong>，《插秧歌》正以「如甲冑」的奇喻，把农事的紧张写得惊心动魄。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4f8"/><g font-size="13" text-anchor="middle"><rect x="30" y="50" width="150" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="105" y="90" fill="#5b3b12">田夫</text><rect x="200" y="50" width="150" height="70" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="275" y="90" fill="#0f3b5e">田妇</text><rect x="370" y="50" width="150" height="70" rx="8" fill="#9bbf5a" stroke="#5a8f3c" stroke-width="2"/><text x="445" y="90" fill="#3e6b2e">儿女</text><rect x="540" y="50" width="150" height="70" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="615" y="90" fill="#fff">鹅鸭</text></g><g stroke="#555" stroke-width="3" fill="none"><line x1="180" y1="85" x2="198" y2="85" marker-end="url(#l5d)"/><line x1="350" y1="85" x2="368" y2="85" marker-end="url(#l5e)"/><line x1="520" y1="85" x2="538" y2="85" marker-end="url(#l5f)"/></g><defs><marker id="l5d" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker><marker id="l5e" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker><marker id="l5f" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker></defs><text x="340" y="155" font-size="13" fill="#2e5b6b" text-anchor="middle">全家总动员：夫·妇·儿女·鹅鸭各在其位</text></svg>', caption: '一首诗写尽一家老小与家禽的抢插协作图。' },
        { type: 'list', items: ['杨万里，南宋「中兴四大诗人」，创立「诚斋体」', '《插秧歌》以白描写冒雨抢插秧苗的紧张劳动', '字词：兜鍪=头盔，渠=他，莳=移栽，匝=周遍', '首联分工、颔联比喻、颈联细节、尾联叮嘱', '「渠」是「他」非水渠；与《芣苢》一苦一乐', '主旨：赞美吃苦耐劳、抓紧农时、认真负责的品格'] }
      ],
      exercises: [
        { type: 'choice', question: '《插秧歌》的作者杨万里，其诗风被称为？', options: ['诚斋体', '花间体', '西昆体', '台阁体'], answer: '诚斋体', explanation: '杨万里号诚斋，其诗善于从日常生活中捕捉意趣，语言通俗活泼、自然幽默，世称「诚斋体」。不过本诗写农家艰辛劳动，风格偏于质朴白描，是其诗风的另一种面向。' },
        { type: 'choice', question: '「笠是兜鍪蓑是甲」运用的修辞手法是？', options: ['夸张', '比喻（把斗笠蓑衣比作头盔铠甲）', '拟人', '对偶中的借代'], answer: '比喻（把斗笠蓑衣比作头盔铠甲）', explanation: '「兜鍪」是古代头盔，「甲」是铠甲。诗人把农人的斗笠、蓑衣比作战士的头盔与铠甲，生动写出全家冒雨抢插、如临战场的紧张状态，凸显农事的辛苦与紧迫。' },
        { type: 'fill', question: '「唤渠朝餐歇半霎」中「渠」的意思是______（他 / 水渠）。', answer: '他', explanation: '在古汉语及诗词中，「渠」常作第三人称代词，意为「他」（此处指农人）。诗句写有人呼唤农人停下来吃早饭歇一会儿，他却只顾低头插秧不作回答，凸显其专注忘我。' },
        { type: 'choice', question: '对尾联「秧根未牢莳未匝，照管鹅儿与雏鸭」理解正确的是？', options: ['写农人顾不得吃饭还惦记家禽糟蹋秧苗', '写农人想去游山玩水', '写农人抱怨天气太热', '写农人已经收工休息'], answer: '写农人顾不得吃饭还惦记家禽糟蹋秧苗', explanation: '「莳未匝」指秧还没插满整块田，「照管鹅儿与雏鸭」是提醒家人看住家禽别踩坏嫩秧。这两句写农人连吃饭都顾不上，心里全是农事，尽显认真负责、吃苦耐劳。' },
        { type: 'choice', question: '《插秧歌》与《芣苢》在情感基调上的不同是？', options: ['都悲伤凄凉', '《芣苢》欢快轻灵，《插秧歌》紧张艰辛', '都写战争', '都悠闲恬淡'], answer: '《芣苢》欢快轻灵，《插秧歌》紧张艰辛', explanation: '《芣苢》以重章叠句表现集体采撷的欢快；《插秧歌》写冒雨抢插、顾不上吃饭，基调紧张艰辛。二者虽都歌咏劳动，但一乐一苦、时代与体裁各异，阅读须细辨。' }
      ]
    }
  );
})();
