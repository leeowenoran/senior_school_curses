/* ============================================================
 * 高一语文 · 必修 上册 · 第五单元 乡土中国（整本书阅读）
 * 2 课时：《乡土中国》导读 / 核心概念研读：差序格局
 * 数据注入：chinese.bx1.points
 * 质量标准：每课 ≥22 内容块 / 3 SVG / 含 example+table+tip+warn+list+keypoint
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx1');
  if (!v) return;

  v.points.push(
    /* ==================== 第1课 《乡土中国》导读 ==================== */
    {
      id: 'bx1-u5-l1',
      name: '《乡土中国》导读',
      author: '费孝通',
      chapter: '第五单元 乡土中国（整本书阅读）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与成书' },
        { type: 'paragraph', text: '费孝通（1910—2005），著名社会学家、人类学家，被誉为「中国社会学和人类学的奠基人」之一。他青年时求学清华、留学英国，获伦敦经济学院博士学位，一生致力于中国社会结构研究。' },
        { type: 'paragraph', text: '1940 年代，费孝通在西南联大、云南大学讲授「乡村社会学」。他将课堂讲义整理、扩充为 14 篇文章，1948 年结集出版，取名《乡土中国》。这本书不是调查报告，而是对调查报告的理论提升。' },
        { type: 'keypoint', label: '重点·性质', text: '《乡土中国》不是小说，而是<strong>社会学著作</strong>：它用<strong>概念分析</strong>的方式，揭示中国基层社会的<strong>结构与文化特征</strong>，而非讲述某个村庄的具体故事。读它，读的是「解释社会的工具」。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f5f0e6"/><rect x="230" y="80" width="220" height="150" rx="6" fill="#fff" stroke="#caa83a" stroke-width="2"/><line x1="250" y1="110" x2="430" y2="110" stroke="#caa83a" stroke-width="2"/><line x1="250" y1="140" x2="430" y2="140" stroke="#caa83a" stroke-width="2"/><line x1="250" y1="170" x2="380" y2="170" stroke="#caa83a" stroke-width="2"/><text x="340" y="205" font-size="14" fill="#7a5a1e" text-anchor="middle">《乡土中国》14 篇</text><g fill="#7a9b3e"><circle cx="120" cy="155" r="22"/><circle cx="560" cy="155" r="22"/></g><text x="120" y="200" font-size="13" fill="#3e6b2e" text-anchor="middle">田野</text><text x="560" y="200" font-size="13" fill="#3e6b2e" text-anchor="middle">概念</text><text x="340" y="288" font-size="13" fill="#5b4636" text-anchor="middle">从实地调查（田野）到理论概念（著述）</text></svg>', caption: '费孝通以田野调查为基础，提炼出解释中国乡村的概念体系。' },
        { type: 'heading', text: '二、读整本书的方法' },
        { type: 'list', items: ['先读序言与目录，把握全书框架与问题意识', '抓核心概念：如「差序格局」「礼治秩序」「乡土本色」', '做概念卡片：一词一卡，记定义、例子与出处', '联系实际：用概念观察身边的乡土与人际现象', '圈画批注：标记论点、疑点与自己的启发'] },
        { type: 'paragraph', text: '与读小说不同，读学术书要主动与作者对话：每读一章，先问「这一章要解释什么现象」「提出了什么概念」「用了什么证据」。带着问题读，概念才不会糊成一片。' },
        { type: 'keypoint', label: '重点·读法', text: '本书是<strong>学术随笔</strong>，语言通俗但概念密集。阅读宜<strong>慢读、批注、建概念网</strong>，切忌只看故事、不看论证。把零散篇章用核心概念串起来，整本书就读「通」了。' },
        { type: 'example', label: '示范·概念卡片', text: '以「乡土本色」为例，示范怎样做一张概念卡片。<br><br><strong>卡片</strong>：概念：乡土本色。定义：中国基层社会是<strong>土生土长、不流动的</strong> agrarian（农业）社会，人与土地绑定。证据：书中说「靠种地谋生的人才明白泥土的可贵」。我的例子：老家祠堂旁那块年年耕种的田，几代人不离村。<br><strong>评析</strong>：一张好卡片含<strong>定义 + 原文证据 + 自家例子</strong>，既巩固理解，又便于日后复习与迁移。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3f8fb"/><rect x="50" y="40" width="160" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="130" y="100" font-size="14" fill="#3e6b2e" text-anchor="middle">读目录</text><text x="130" y="125" font-size="12" fill="#3e6b2e" text-anchor="middle">知框架</text><rect x="250" y="40" width="160" height="140" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="330" y="100" font-size="14" fill="#5b3b12" text-anchor="middle">抓概念</text><text x="330" y="125" font-size="12" fill="#5b3b12" text-anchor="middle">建卡片</text><rect x="450" y="40" width="180" height="140" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="540" y="100" font-size="14" fill="#fff" text-anchor="middle">联实际</text><text x="540" y="125" font-size="12" fill="#fff" text-anchor="middle">做批注</text><text x="340" y="205" font-size="13" fill="#3e5b6b" text-anchor="middle">整本书阅读四步：框架 → 概念 → 批注 → 迁移</text></svg>', caption: '把「读完整」升级为「读透彻」：用概念串联全书。' },
        { type: 'heading', text: '三、全书核心议题' },
        { type: 'list', items: ['乡土本色：中国基层为何「土」与「静」', '差序格局：以己为中心的人际关系网', '礼治秩序：靠传统礼俗维持的社会秩序', '长老权力：年长者凭经验权威维系社会', '血缘与地缘：从血缘社会到地缘社会的变迁'] },
        { type: 'keypoint', label: '重点·问题', text: '全书围绕一个核心问题展开：<strong>中国基层社会究竟是怎样运转的</strong>？费孝通不罗列现象，而是提炼出一组概念，像解剖图一样把社会结构「画」给读者看。' },
        { type: 'warn', label: '易错·概念', text: '这些概念是<strong>分析工具</strong>，不是道德评判。读时勿急于说「好」或「坏」，而要先<strong>理解它解释的是什么现象</strong>。把学术概念当情感口号，是整本书阅读最常见的偏差。' },
        { type: 'table', headers: ['篇目（示例）', '核心概念', '关注问题'], rows: [['乡土本色', '土气、不流动性', '为何中国基层安土重迁'], ['差序格局', '以己为中心的水波纹', '人际关系如何展开'], ['礼治秩序', '礼俗而非法律', '秩序靠什么维持'], ['长老权力', '经验权威', '谁来说了算'], ['血缘和地缘', '血缘到地缘', '社会如何变迁']] },
        { type: 'heading', text: '四、为何读《乡土中国》' },
        { type: 'paragraph', text: '今天的中国正快速城镇化，乡村面貌巨变。但许多文化基因——重人情、讲面子、恋故土——仍在潜移默化地影响我们。理解「乡土」，才能理解今日中国的来路与许多现实问题的根由。' },
        { type: 'keypoint', label: '重点·意义', text: '本书提供一组<strong>观察社会的透镜</strong>：用「差序格局」看人情往来，用「礼治秩序」看规则意识，用「乡土本色」看城乡差异。对高中生而言，它是培养<strong>社会洞察力与思辨力</strong>的优质读本。' },
        { type: 'tip', label: '拓展·费孝通其他著作', text: '想进一步了解，可延伸读费孝通的《江村经济》（其博士论文，对一个村庄的实地研究）与《生育制度》。一「微观深描」、一「宏观概念」，与《乡土中国》互为表里，能帮你看见学者如何从实地走向理论。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f5f0e6"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="170" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="125" y="90" fill="#3e6b2e">田野调查</text><rect x="255" y="50" width="170" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="340" y="90" fill="#5b3b12">概念提炼</text><rect x="470" y="50" width="170" height="70" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="555" y="90" fill="#fff">解释社会</text></g><g stroke="#555" stroke-width="3" fill="none"><line x1="210" y1="85" x2="253" y2="85" marker-end="url(#b1)"/><line x1="425" y1="85" x2="468" y2="85" marker-end="url(#b1)"/></g><defs><marker id="b1" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker></defs><text x="340" y="155" font-size="13" fill="#5b4636" text-anchor="middle">从实求知：田野 → 概念 → 解释</text></svg>', caption: '费孝通「从实求知」：从实地走到理论。' },
        { type: 'list', items: ['费孝通的社会学著作，1948 年出版，共 14 篇', '非小说，而是用概念分析中国基层社会结构', '读法：读目录、抓概念、做卡片、联实际、勤批注', '核心概念群：乡土本色、差序格局、礼治秩序等', '概念是分析工具，先理解再评价，勿当口号', '价值：获得观察家庭、人情、城乡的分析透镜'] }
      ],
      exercises: [
        { type: 'choice', question: '《乡土中国》的作者是谁，属于哪类著作？', options: ['鲁迅的小说集', '费孝通的社会学著作', '沈从文的散文', '费孝通的诗歌集'], answer: '费孝通的社会学著作', explanation: '《乡土中国》是费孝通在 1940 年代乡村社会学讲义基础上写成的社会学著作，由 14 篇论文组成，以概念分析揭示中国基层社会结构，并非小说、散文或诗歌。' },
        { type: 'choice', question: '阅读《乡土中国》最关键的策略是？', options: ['只关注故事情节', '抓住核心概念并建概念网', '跳过序言目录', '每天随意翻几页'], answer: '抓住核心概念并建概念网', explanation: '本书是学术随笔，概念密集而故事少。有效读法是从目录把握框架，重点吃透「差序格局」「礼治秩序」等核心概念，做卡片、画联系，把零散篇章织成网络，而非浮光掠影。' },
        { type: 'fill', question: '费孝通研究中国乡村，以______（田野调查 / 网络问卷）为基础，再提炼为理论概念。', answer: '田野调查', explanation: '费孝通是社会人类学家，其理论建立在对中国农村长期的实地调查（田野工作）之上，如《江村经济》即对开弦弓村的深入考察。由实证的「田野」上升到抽象的「概念」，是本书方法论底色。' },
        { type: 'choice', question: '下列对「乡土」的理解正确的是？', options: ['指现代大都市', '指传统农业社会的基层结构', '仅指泥土的颜色', '指外国农村'], answer: '指传统农业社会的基层结构', explanation: '书中「乡土」特指中国传统农业文明的基层社会形态。今天城镇化虽改变表象，但人情、家庭、治理等文化基因仍有遗存，故应历史地、发展地理解这一概念，而非望文生义。' },
        { type: 'choice', question: '为何高中生要读《乡土中国》？', options: ['为了应付考试背概念', '获得观察家庭、人情、城乡关系的分析透镜', '因为它是一本小说', '因为作者写了很多笑话'], answer: '获得观察家庭、人情、城乡关系的分析透镜', explanation: '本书提供一套理解中国社会结构的概念工具，能帮助学生更清醒地观察家庭伦理、人情往来、城乡差异等现象，理解「今日中国从何而来」，是提升社会认知与思辨力的优质读物。' }
      ]
    },

    /* ==================== 第2课 核心概念研读：差序格局 ==================== */
    {
      id: 'bx1-u5-l2',
      name: '核心概念研读：差序格局',
      author: '费孝通',
      chapter: '第五单元 乡土中国（整本书阅读）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、什么是「差序格局」' },
        { type: 'paragraph', text: '费孝通用「差序格局」概括中国乡土社会的结构：每个人的社会关系像把石头丢进水面激起的波纹，以「己」为中心，一圈圈推出去，愈推愈远、愈推愈薄。' },
        { type: 'paragraph', text: '与之相对，西方社会被比作「捆柴」——一根根柴界限分明地束在一起，每个人属于某个界限清晰的团体。理解这对比喻，就抓住了中西社会结构差异的钥匙。' },
        { type: 'keypoint', label: '重点·定义', text: '「差序格局」是<strong>以「己」为中心、亲疏有别、弹性伸缩</strong>的关系网络：关系随血缘、地缘、交情向外推展，远近不同则责任与义务不同。它相对西方的<strong>「团体格局」</strong>（界限分明、平等属于团体）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4f8"/><circle cx="340" cy="150" r="10" fill="#c0392b"/><g fill="none" stroke="#5b9bd0" stroke-width="2"><circle cx="340" cy="150" r="40"/><circle cx="340" cy="150" r="80"/><circle cx="340" cy="150" r="120"/><circle cx="340" cy="150" r="160"/></g><circle cx="340" cy="150" r="3" fill="#333"/><text x="340" y="278" font-size="15" fill="#33485a" text-anchor="middle">以「己」为中心的水波纹：亲疏远近，一圈圈推出</text></svg>', caption: '「差序格局」如水波：中心是自我，关系随距离递减。' },
        { type: 'heading', text: '二、相关概念群' },
        { type: 'list', items: ['差序格局：以己为中心、亲疏有别的关系网', '团体格局：界限分明、人人平等地属于团体（西方）', '礼治秩序：靠传统礼俗而非法律维持秩序', '长老权力：年长者凭经验权威维系社会', '熟人社会：信任建立在面对面的人情之上'] },
        { type: 'paragraph', text: '在差序格局下，公私、群己的界限是相对的：站在不同圈层，「公」与「私」会随之移动——「为自己可以牺牲家，为家可以牺牲族」。这与团体格局中固定的公私边界截然不同。' },
        { type: 'keypoint', label: '重点·对比', text: '「水波纹」与「捆柴」是费孝通最著名的中西社会比喻：<strong>差序格局</strong>重亲疏弹性，<strong>团体格局</strong>重界限平等。前者解释中国的人情社会，后者解释西方的契约与公民社会。' },
        { type: 'example', label: '示范·现象分析', text: '用「差序格局」分析俗语「各人自扫门前雪，莫管他人瓦上霜」。<br><br><strong>解析</strong>：这话常被批评为自私，但用差序格局看，它其实反映<strong>关系圈层的差序</strong>——人们对「门前雪」（自己圈内）尽责，对「他人瓦上霜」（圈外）疏离。这种<strong>由内向外递减的关切</strong>，正是以水波为中心的社会关系的自然表现，不宜简单贬为「恶」，而应先理解其结构根源。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><rect x="40" y="50" width="240" height="140" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="160" y="110" font-size="14" fill="#3e6b2e" text-anchor="middle">差序格局</text><text x="160" y="135" font-size="12" fill="#3e6b2e" text-anchor="middle">水波·亲疏有别</text><rect x="400" y="50" width="240" height="140" rx="8" fill="#cfd8e3" stroke="#5b7a8a" stroke-width="2"/><text x="520" y="110" font-size="14" fill="#33485a" text-anchor="middle">团体格局</text><text x="520" y="135" font-size="12" fill="#33485a" text-anchor="middle">捆柴·界限分明</text><text x="340" y="220" font-size="13" fill="#3e5b6b" text-anchor="middle">一对核心对照：理解中西方社会结构差异</text></svg>', caption: '「水波」与「捆柴」是费孝通最著名的中西社会比喻。' },
        { type: 'heading', text: '三、概念的现实关照' },
        { type: 'list', items: ['人情：办事讲关系、看交情，而非只看规则', '面子：在圈层中的评价与体面，影响行为', '关系网：资源沿亲疏差序流动', '差序化资源：近者多得、远者少得', '现代转型：从人情走向法治与规则意识'] },
        { type: 'keypoint', label: '重点·迁移', text: '用「差序格局」可解释<strong>人情、面子、关系网、差序化资源分配</strong>等现象；它也提醒我们：走向现代法治社会，需要补上<strong>团体意识与规则意识</strong>——在「私圈」之外，还要有对公共规则的普遍尊重。' },
        { type: 'warn', label: '易错·态度', text: '「差序格局」是<strong>描述性概念</strong>，并非全盘肯定或否定；阅读时要客观理解其解释力，<strong>避免简单褒贬</strong>。把它当「批判靶子」或当「文化优越证明」，都失之偏颇。' },
        { type: 'table', headers: ['维度', '差序格局', '团体格局'], rows: [['结构意象', '水波纹（以己为中心）', '捆柴（界限分明）'], ['公私界限', '相对、可伸缩', '固定、普遍平等'], ['维系纽带', '血缘、人情、伦常', '契约、法律、成员资格'], ['典型社会', '中国乡土（传统）', '西方工业社会']] },
        { type: 'heading', text: '四、从乡土到现代' },
        { type: 'paragraph', text: '城镇化与市场化正在改变中国的社会结构：邻里陌生了，契约多了，法律意识强了。但差序格局的惯性仍在——我们在公共场合讲规则，回到家族仍讲人情。传统与现代并非截然断裂，而是交织共存。' },
        { type: 'keypoint', label: '重点·辩证', text: '对待差序格局应<strong>历史地、辩证地看</strong>：它曾维系农耕社会的温情与秩序，也有碍公共精神；现代法治需要规则平等，但也不必全然否定人情的温度。关键是<strong>在私人领域讲情、公共领域讲法</strong>。' },
        { type: 'tip', label: '拓展·当代治理', text: '理解差序格局，对今天的<strong>社会治理与法治建设</strong>很有启发：既要推动规则面前人人平等，也要重视熟人社会的信任资源。许多基层治理的智慧，正在于把「情、理、法」妥善结合，而非简单地用法律取代一切。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4f8"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="170" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="125" y="90" fill="#3e6b2e">自我</text><rect x="255" y="50" width="170" height="70" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="340" y="90" fill="#0f3b5e">圈子</text><rect x="470" y="50" width="170" height="70" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="555" y="90" fill="#fff">社会</text></g><g stroke="#555" stroke-width="3" fill="none"><line x1="210" y1="85" x2="253" y2="85" marker-end="url(#b2)"/><line x1="425" y1="85" x2="468" y2="85" marker-end="url(#b2)"/></g><defs><marker id="b2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker></defs><text x="340" y="155" font-size="13" fill="#3e5b6b" text-anchor="middle">由己推人：自我 → 圈子 → 社会（差序展开）</text></svg>', caption: '差序格局：从自我一圈圈推出，构成整个关系社会。' },
        { type: 'list', items: ['差序格局：以己为中心、亲疏有别的水波纹关系网', '对应西方「团体格局」（捆柴，界限分明）', '公私群己界限相对，随圈层伸缩', '可解释人情、面子、关系网等现象', '是描述性概念，宜客观理解、辩证看待', '现代启示：私人讲情、公共讲法，补上规则意识'] }
      ],
      exercises: [
        { type: 'choice', question: '「差序格局」最形象的比喻是？', options: ['捆柴', '水波纹（以己为中心一圈圈推出）', '金字塔', '棋盘'], answer: '水波纹（以己为中心一圈圈推出）', explanation: '费孝通以石子入水激起波纹比喻社会关系：每个人是中心，亲属、朋友如一圈圈波纹向外推展，愈远愈薄。这生动说明了中国乡土「以己为中心、亲疏有别」的关系结构。' },
        { type: 'choice', question: '「差序格局」对应的西方社会结构是？', options: ['团体格局', '网状格局', '星状格局', '蜂窝格局'], answer: '团体格局', explanation: '费孝通把西方社会比作「捆柴」——个体界限分明、平等地属于不同团体，称为「团体格局」。它与以水波为喻、强调亲疏弹性的「差序格局」形成核心对照。' },
        { type: 'fill', question: '在差序格局下，公私与群己的界限是______（相对 / 绝对）的，一切以与「己」的亲疏为转移。', answer: '相对', explanation: '费孝通指出，差序格局中没有固定不变的公私边界：站在不同圈层，什么算「公」什么算「私」会变化（为家可牺牲个人、为族可牺牲家）。这种相对性正是它与界限分明的团体格局的根本差异。' },
        { type: 'choice', question: '用「差序格局」可以解释下列哪一现象？', options: ['严格的分数排名', '讲人情、看关系、重面子', '抽签分配', '匿名投票'], answer: '讲人情、看关系、重面子', explanation: '人情、关系、面子都是依亲疏远近而伸缩运作的，恰是差序格局在日常生活中的表现。而分数排名、匿名投票、抽签等强调普遍规则与平等，更接近团体格局的逻辑。' },
        { type: 'choice', question: '学习「差序格局」等概念，正确的态度是？', options: ['全盘否定传统', '作为描述性分析工具客观理解，并思考现代转型', '只背诵定义应付考试', '认为西方一定优于中国'], answer: '作为描述性分析工具客观理解，并思考现代转型', explanation: '这些概念是解释社会的分析工具，本身不预设褒贬。我们应在理解其解释力的同时，思考从人情社会走向现代法治所需的规则意识与团体精神，做到历史地、辩证地看待传统。' }
      ]
    }
  );
})();
