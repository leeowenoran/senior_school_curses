/* ============================================================
 * 高一语文 · 必修 下册 · 第三单元 探索与发现（知识性读物）
 * 4 课时：青蒿素（屠呦呦）/ 一名物理学家的教育历程（加来道雄）/
 *        中国建筑的特征（梁思成）/ 说"木叶"（林庚）
 * 数据注入：chinese.bx2.points
 * 质量标准：每课 ≥22 内容块 / 3 SVG / 含 example+table+tip+warn+list+keypoint+heading+paragraph
 * 知识性读物重说明方法、概念梳理与学术思维
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx2');
  if (!v) return;

  v.points.push(
    /* ==================== 第1课 青蒿素：人类征服疾病的一小步 ==================== */
    {
      id: 'bx2-u3-l1',
      name: '《青蒿素：人类征服疾病的一小步》',
      author: '屠呦呦',
      chapter: '第三单元 探索与发现（知识性读物）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '屠呦呦（1930— ），浙江宁波人，药学家，中国中医科学院终身研究员。她带领团队从中国传统医药中发掘抗疟良药，于 1972 年成功提取青蒿素，2015 年荣获诺贝尔生理学或医学奖，是首位获诺贝尔科学奖项的中国本土科学家。' },
        { type: 'paragraph', text: '本文是屠呦呦在获诺贝尔奖期间的演讲（及自述整理）。文章以第一人称回顾青蒿素从中医药典籍的灵感，到实验室提取、临床验证、走向世界的历程，既是一篇科学发现史，也是一封写给传统医学与团队精神的致敬信。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>知识性读物（科学说明文/自述）</strong>，兼具<strong>说明性</strong>与<strong>记叙性</strong>：以时间顺序说明青蒿素的发现过程，又穿插科研故事。语言<strong>准确、平实、严谨</strong>，常用<strong>列数字、举例子、引资料</strong>等说明方法，是学习科普阅读的典型文本。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6f0"/><rect x="290" y="70" width="100" height="160" rx="10" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><line x1="340" y1="70" x2="340" y2="230" stroke="#3e6b2a" stroke-width="3"/><g stroke="#3e6b2a" stroke-width="3"><line x1="310" y1="110" x2="370" y2="110"/><line x1="310" y1="150" x2="370" y2="150"/><line x1="310" y1="190" x2="370" y2="190"/></g><text x="340" y="262" font-size="13" fill="#3e6b2e" text-anchor="middle">青蒿（植物）</text><g fill="#e85d8d"><circle cx="130" cy="150" r="28"/><text x="130" y="155" font-size="13" fill="#fff" text-anchor="middle">疟疾</text></g><g fill="#4a7de0"><circle cx="550" cy="150" r="28"/><text x="550" y="155" font-size="13" fill="#fff" text-anchor="middle">良药</text></g><path d="M158 150 h120 M422 150 h108" stroke="#c0392b" stroke-width="2" marker-end="url(#q1a)"/><text x="340" y="288" font-size="13" fill="#3e6b2e" text-anchor="middle">从一株青蒿到抗疟良药：传统医药启发现代科学</text><defs><marker id="q1a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '青蒿素的研究，是一场从本草古籍到现代实验室的接力。' },
        { type: 'heading', text: '二、内容研读：青蒿素的发现历程' },
        { type: 'keypoint', label: '重点·灵感来源', text: '屠呦呦团队在筛选抗疟药物时大量查阅中医药文献，从东晋葛洪《肘后备急方》「<strong>青蒿一握，以水二升渍，绞取汁，尽服之</strong>」获得关键启示——<strong>高温会破坏青蒿有效成分</strong>。她由此改用<strong>低温乙醚提取</strong>，终于在 1972 年分离出抗疟有效的青蒿素。' },
        { type: 'keypoint', label: '重点·科学历程', text: '发现历程可概括为：①<strong>搜集线索</strong>（系统整理抗疟方药）；②<strong>获得灵感</strong>（古籍低温提取的提示）；③<strong>提取突破</strong>（乙醚低温萃取青蒿素）；④<strong>临床验证</strong>（亲自试药、赴海南临床）；⑤<strong>走向世界</strong>（推广救治亿万疟疾病人）。这是一条从古籍到临床的求实之路。' },
        { type: 'example', label: '思路梳理示范', text: '文章是如何把「青蒿素的发现」讲清楚、令人信服的？<br><br><strong>解析</strong>：屠呦呦采用<strong>时间顺序 + 关键转折</strong>的写法：先交代研究背景（疟疾肆虐、西药失效），再点出决定性转折——从《肘后备急方》悟出「低温提取」，随后依次说明提取、验证、推广各环节。其间穿插<strong>具体数字与亲手试药</strong>的细节，使说明既条理清晰又真实可感，体现了科普文「准确 + 可信」的表达智慧。' },
        { type: 'keypoint', label: '重点·精神', text: '青蒿素的成功，靠的是<strong>「胸怀祖国、敢于担当」</strong>的家国情怀，<strong>「潜心钻研、团队协作」</strong>的科学作风，以及<strong>「古为今用、中西结合」</strong>的创新路径。屠呦呦常说这是「中医药献给世界的礼物」，谦逊中见格局。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><g font-size="12" text-anchor="middle"><rect x="20" y="55" width="115" height="60" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="77" y="90">搜集线索</text><rect x="155" y="55" width="115" height="60" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="212" y="90">获得灵感</text><rect x="290" y="55" width="115" height="60" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="347" y="90">提取突破</text><rect x="425" y="55" width="115" height="60" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="482" y="90" fill="#fff">临床验证</text><rect x="560" y="55" width="115" height="60" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="617" y="90" fill="#fff">走向世界</text></g><g stroke="#c0392b" stroke-width="2.5" fill="none"><line x1="135" y1="85" x2="153" y2="85" marker-end="url(#q1b)"/><line x1="270" y1="85" x2="288" y2="85" marker-end="url(#q1b)"/><line x1="405" y1="85" x2="423" y2="85" marker-end="url(#q1b)"/><line x1="540" y1="85" x2="558" y2="85" marker-end="url(#q1b)"/></g><defs><marker id="q1b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="160" font-size="14" fill="#3e5b6b" text-anchor="middle">发现五步：从古籍线索到全球抗疟的求实之路</text><text x="340" y="200" font-size="13" fill="#5b7a8a" text-anchor="middle">每一步都依靠「低温提取」等关键转折，体现科学思维</text></svg>', caption: '青蒿素发现五步推进，关键在「低温提取」这一灵感突破。' },
        { type: 'heading', text: '三、说明方法与语言分析' },
        { type: 'keypoint', label: '说明方法', text: '本文主要运用：①<strong>引资料</strong>（引《肘后备急方》原文，增强权威与趣味）；②<strong>列数字</strong>（年份、剂量、病例数，体现准确）；③<strong>举例子</strong>（亲身试药、海南临床，使抽象过程具体）；④<strong>下定义/作诠释</strong>（解释青蒿素抗疟机理）。多种方法并用，使说明科学而好读。' },
        { type: 'warn', label: '易错·概念', text: '青蒿素与「青蒿」并非等同：<strong>青蒿</strong>是植物名，<strong>青蒿素</strong>是从其（及黄花蒿）中提取的<strong>化学有效成分（萜类化合物）</strong>。此外，灵感来自「<strong>低温</strong>提取」而非「高温煎熬」——恰恰是因为古法「绞汁」不经火，才提示屠呦呦避开高温破坏。读文时勿把「古籍记载」与「现代提取工艺」混为一谈。' },
        { type: 'table', headers: ['说明方法', '文中例证', '表达效果'], rows: [['引资料', '引《肘后备急方》「青蒿一握……绞取汁」', '增强说服力与文献依据'], ['列数字', '1972 年、乙醚低温等具体数据', '体现科学准确严谨'], ['举例子', '亲自试药、海南临床验证', '使过程具体可感'], ['作诠释', '解释青蒿素抗疟的作用', '概念清晰、便于理解']] },
        { type: 'list', items: ['文体：知识性读物（自述式科普），准确平实严谨', '线索：时间顺序，从古籍到临床再到世界', '关键转折：由古法「绞汁」悟出低温提取', '说明方法：引资料、列数字、举例子、作诠释', '科态精神：潜心钻研、团队协作、古为今用', '语言：科学术语准确，叙述中见人文温度'] },
        { type: 'heading', text: '四、价值与拓展' },
        { type: 'keypoint', label: '意义价值', text: '青蒿素的发现<strong>挽救了全球特别是发展中国家数百万疟疾病人的生命</strong>，是中医药宝库与现代科技结合的光辉范例，也昭示：<strong>传统智慧经过科学提炼，仍能解决人类共同的健康难题</strong>，是中国对世界的重要贡献。' },
        { type: 'tip', label: '拓展', text: '屠呦呦的获奖，让「<strong>中医药</strong>」受到世界瞩目。其实中医的「辨证论治」「天然药物」思想，正与当代「回归自然、精准医疗」的趋势呼应。阅读此类科普文，既要学其<strong>说明方法</strong>，也要学科学家<strong>从传统中找答案、用现代手段验真知</strong>的思维——这正是「探索与发现」单元的精髓。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#eef6f0"/><g font-size="13" text-anchor="middle"><rect x="30" y="55" width="180" height="80" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="120" y="85">古籍灵感</text><text x="120" y="107" fill="#7a6b5e" font-size="12">肘后·绞汁</text><rect x="250" y="55" width="180" height="80" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="340" y="85">科学提取</text><text x="340" y="107" fill="#33536e" font-size="12">低温·乙醚</text><rect x="470" y="55" width="180" height="80" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="560" y="85" fill="#fff">惠及人类</text><text x="560" y="107" fill="#dff0c8" font-size="12">抗疟·全球</text></g><g stroke="#3e6b2a" stroke-width="2" fill="none"><line x1="210" y1="95" x2="248" y2="95" marker-end="url(#q1c)"/><line x1="430" y1="95" x2="468" y2="95" marker-end="url(#q1c)"/></g><defs><marker id="q1c" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#3e6b2a"/></marker></defs><text x="340" y="185" font-size="13" fill="#3e6b2e" text-anchor="middle">古为今用：传统医药智慧经科学验证，造福世界</text></svg>', caption: '从古籍灵感到全球抗疟，青蒿素是「古为今用」的典范。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['屠呦呦，2015 诺贝尔生理学或医学奖，青蒿素发现者', '灵感：《肘后备急方》「绞汁」提示低温提取', '历程：搜集→灵感→提取→验证→推广五步', '说明方法：引资料、列数字、举例子、作诠释', '精神：潜心钻研、团队协作、古为今用', '价值：中医药结合现代科技，造福全球抗疟'] }
      ],
      exercises: [
        { type: 'choice', question: '屠呦呦团队从哪部古籍获得「低温提取」的关键启示？', options: ['《本草纲目》', '《肘后备急方》', '《伤寒论》', '《黄帝内经》'], answer: '《肘后备急方》', explanation: '文中明确写到，团队从东晋葛洪《肘后备急方》「青蒿一握，以水二升渍，绞取汁，尽服之」悟出：高温煎熬会破坏有效成分，故改用低温乙醚提取，终获青蒿素。其他三部虽为中医名著，却非本文所指的灵感来源。' },
        { type: 'choice', question: '青蒿素研究历程中的「关键转折」是？', options: ['用高温长时间煎煮', '由古法「绞汁」悟出低温提取', '完全抛弃中医药文献', '只靠西药合成'], answer: '由古法「绞汁」悟出低温提取', explanation: '屠呦呦从古籍「绞取汁」（不经火）意识到青蒿有效成分怕热，遂改用低温乙醚提取，这一思路转折是青蒿素得以成功分离的决定性一步，体现了「从传统中找答案、用现代手段验证」的科学思维。' },
        { type: 'fill', question: '屠呦呦于______年成功提取青蒿素，并于 2015 年获诺贝尔生理学或医学奖。', answer: '1972', explanation: '据文中自述，屠呦呦团队于 1972 年成功分离出抗疟有效的青蒿素；四十余年后，她因这一发现荣获 2015 年诺贝尔生理学或医学奖，成为首位获诺贝尔科学奖项的中国本土科学家。填空应填 1972。' },
        { type: 'choice', question: '本文作为知识性读物，主要运用了哪些说明方法？', options: ['只靠抒情议论', '引资料、列数字、举例子、作诠释', '纯虚构故事', '仅用比喻修辞'], answer: '引资料、列数字、举例子、作诠释', explanation: '文章引《肘后备急方》原文（引资料）、用年份剂量等（列数字）、写亲身试药与临床（举例子）、解释青蒿素机理（作诠释），多种说明方法并用，既科学准确又通俗可读，是科普说明的范例。' },
        { type: 'choice', question: '青蒿素发现的意义，最准确的表述是？', options: ['仅在中国国内使用', '挽救全球数百万疟疾病人，是中医药结合现代科技造福人类的典范', '只是一种普通植物汁液', '与中医药无关'], answer: '挽救全球数百万疟疾病人，是中医药结合现代科技造福人类的典范', explanation: '青蒿素推广后救治了全球特别是发展中国家无数疟疾病人，是传统中医药宝库经现代科学提炼解决人类健康难题的光辉范例，彰显中国对世界的重要贡献，绝非局限于国内或无关中医药。' }
      ]
    },

    /* ==================== 第2课 一名物理学家的教育历程 ==================== */
    {
      id: 'bx2-u3-l2',
      name: '《一名物理学家的教育历程》',
      author: '加来道雄',
      chapter: '第三单元 探索与发现（知识性读物）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '加来道雄（1947— ），日裔美国理论物理学家，纽约市立大学研究生院物理学教授，弦理论与超弦理论研究的代表人物之一。他同时也是著名的科普作家，著有《超越时空》《平行宇宙》等，擅长把高深的物理前沿讲给大众听。' },
        { type: 'paragraph', text: '本文是一篇<strong>科普自传</strong>，作者以「教育历程」为线索，回忆自己从童年的好奇（想了解鲤鱼如何看待世界），到少年研读爱因斯坦、自建原子撞机，再到确立理论物理志向的成长之路，现身说法地告诉青年：科学家的养成始于想象与执着。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>科普自传（知识性读物）</strong>，以<strong>第一人称、时间顺序</strong>展开，兼具<strong>叙事性</strong>与<strong>说理（科学方法论）</strong>。它不同于纯说明文，重在以<strong>亲身经历阐释科学思维</strong>：想象、质疑、实证、坚持，是阅读时应抓住的「隐性知识」。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3eee8"/><ellipse cx="340" cy="170" rx="200" ry="90" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><ellipse cx="340" cy="170" rx="200" ry="90" fill="none" stroke="#4a7de0" stroke-width="1" stroke-dasharray="3 3"/><g fill="#c0392b"><path d="M300 165 q40 -10 80 0 q-40 12 -80 0 z"/></g><text x="340" y="100" font-size="13" fill="#0f3b5e" text-anchor="middle">「水池中的鲤鱼」如何看世界？</text><g fill="#e85d8d"><circle cx="340" cy="170" r="28"/></g><text x="340" y="250" font-size="13" fill="#33536e" text-anchor="middle">童年的好奇：以鲤鱼之眼反思人类认知的局限</text><text x="340" y="275" font-size="12" fill="#7a6b5e" text-anchor="middle">从「他者视角」起步的科学想象力</text></svg>', caption: '作者由「鲤鱼如何看世界」的童问，开启了反思认知的科学想象。' },
        { type: 'heading', text: '二、内容研读：三段成长经历' },
        { type: 'keypoint', label: '重点·童年之问', text: '作者童年在日本茶园的水池边，思考「<strong>鲤鱼科学家</strong>」会如何认识世界——它们只能看见二维的水中景象，无法理解岸上的三维人类。这一童稚之问，实则蕴含<strong>深刻的认知哲学</strong>：我们是否也像鲤鱼，被自身感官局限而不自知？科学想象由此发端。' },
        { type: 'keypoint', label: '重点·少年求索', text: '少年时，作者被爱因斯坦的<strong>统一场论</strong>震撼，立志要做「了解爱因斯坦未完成事业的人」；他大量阅读、自学微积分，甚至<strong>在车库自建粒子加速器（原子撞机）</strong>做实验。这种<strong>自驱式学习 + 动手实证</strong>，是科学家养成的关键。' },
        { type: 'example', label: '思路梳理示范', text: '文章以「教育历程」为线索，是怎样串起三个阶段的？<br><br><strong>解析</strong>：作者用<strong>时间顺序 + 中心问题</strong>组织全文：先写<strong>童年</strong>的「鲤鱼之问」——种下想象与怀疑的种子；再写<strong>少年</strong>读爱因斯坦、建撞机——以兴趣驱动自学与实证；最后写<strong>青年</strong>确立理论物理志向。三段看似跳跃，却都被「<strong>好奇心→探究欲→科学志</strong>」的内在逻辑贯串，脉络清晰、主旨鲜明。' },
        { type: 'keypoint', label: '重点·科学思维', text: '作者借自身经历传递的科学方法：①<strong>保持好奇与想象</strong>（敢问「鲤鱼怎么想」）；②<strong>敢于怀疑常识</strong>（反思认知边界）；③<strong>以实证检验</strong>（亲手建撞机）；④<strong>长期专注坚持</strong>（终身追随统一场论）。这四点，正是「教育历程」真正想教给读者的。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><g font-size="13" text-anchor="middle"><rect x="30" y="55" width="180" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="120" y="83">童年·想象</text><text x="120" y="106" fill="#5b4636" font-size="12">鲤鱼之问</text><rect x="250" y="55" width="180" height="70" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="340" y="83">少年·实证</text><text x="340" y="106" fill="#33536e" font-size="12">读爱因斯坦·建撞机</text><rect x="470" y="55" width="180" height="70" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="560" y="83" fill="#fff">青年·立志</text><text x="560" y="106" fill="#e8d5f7" font-size="12">理论物理</text></g><g stroke="#c0392b" stroke-width="2.5" fill="none"><line x1="210" y1="90" x2="248" y2="90" marker-end="url(#p2a)"/><line x1="430" y1="90" x2="468" y2="90" marker-end="url(#p2a)"/></g><defs><marker id="p2a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="160" font-size="14" fill="#3e5b6b" text-anchor="middle">成长三阶：好奇想象 → 自学实证 → 科学立志</text><text x="340" y="200" font-size="13" fill="#5b7a8a" text-anchor="middle">一条主线：好奇心驱动，实证精神护航</text></svg>', caption: '从童年的「问」到青年的「志」，教育历程由好奇心一以贯之。' },
        { type: 'heading', text: '三、方法分析与语言特色' },
        { type: 'keypoint', label: '写法·以小见大', text: '文章<strong>不罗列物理公式</strong>，而用一个「童年的水池之问」撬动宏大主题：<strong>科学的起点是想象与怀疑</strong>。这种<strong>以小见大、由事及理</strong>的写法，把抽象的科学方法论融化在故事里，既亲切又深刻，是科普自传的高明之处。' },
        { type: 'warn', label: '易错·概念', text: '文中的「<strong>鲤鱼科学家</strong>」是<strong>比喻/思想实验</strong>，并非真有会做研究的鱼；它用来说明「认知受感官局限」。另外，作者少年建的「<strong>原子撞机</strong>」是简化模型，旨在体现<strong>动手实证精神</strong>，不应误解为已造出真正的高能加速器。读科普文须分清「文学性比喻」与「科学事实」。' },
        { type: 'table', headers: ['成长阶段', '关键事件', '蕴含的科学素养'], rows: [['童年', '思考鲤鱼如何看世界', '好奇、想象、反思认知边界'], ['少年', '读爱因斯坦、自建撞机', '自驱学习、动手实证'], ['青年', '确立理论物理志向', '长期专注、追求统一场论'], ['贯穿', '「教育历程」主线', '好奇心驱动科学志']] },
        { type: 'list', items: ['文体：科普自传，第一人称、时间顺序', '线索：教育历程（童年→少年→青年）', '核心：想象、怀疑、实证、坚持的科学思维', '写法：以小见大（水池之问撬动科学方法论）', '语言：通俗亲切，把前沿物理讲给大众', '启示：科学家的养成始于童年的好奇与执着'] },
        { type: 'heading', text: '四、价值与拓展' },
        { type: 'keypoint', label: '现实意义', text: '本文对青年的最大启示是：<strong>科学不是死记公式，而是保持提问的勇气与求证的耐心</strong>。无论将来是否做科研，「像物理学家一样思考」——好奇、质疑、实证、坚持——都是受用终身的学习素养，呼应单元「探索与发现」的主题。' },
        { type: 'tip', label: '拓展', text: '加来道雄研究的<strong>弦理论（超弦理论）</strong>试图统一引力与量子力学，是当代物理的「终极理论」之一。它与爱因斯坦晚年追求的「统一场论」一脉相承。本文结尾提及的志向，正源于这种宏大追问。读科普文，不妨顺藤摸瓜，去认识相对论、量子力学等更广阔的图景。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#f3eee8"/><g font-size="13" text-anchor="middle"><rect x="30" y="55" width="160" height="80" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="110" y="85">好奇提问</text><text x="110" y="107" fill="#5b4636" font-size="12">敢想敢疑</text><rect x="250" y="55" width="160" height="80" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="330" y="85">动手求证</text><text x="330" y="107" fill="#33536e" font-size="12">实证精神</text><rect x="470" y="55" width="180" height="80" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="560" y="85" fill="#fff">终身求索</text><text x="560" y="107" fill="#e8d5f7" font-size="12">统一场论之志</text></g><g stroke="#7b4fe0" stroke-width="2" fill="none"><line x1="190" y1="95" x2="248" y2="95" marker-end="url(#p2b)"/><line x1="410" y1="95" x2="468" y2="95" marker-end="url(#p2b)"/></g><defs><marker id="p2b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#7b4fe0"/></marker></defs><text x="340" y="185" font-size="13" fill="#4a2b8a" text-anchor="middle">科学素养养成：从敢问到求证，再到终身求索</text></svg>', caption: '科学家的教育，本质是「好奇心 + 实证 + 坚持」的养成。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['加来道雄，日裔美国理论物理学家，科普自传', '线索：教育历程（童年→少年→青年）', '童年之问：「鲤鱼科学家」揭示认知的局限', '科学思维：好奇、怀疑、实证、坚持', '写法：以小见大，把方法论融化在故事里', '启示：保持提问的勇气与求证的耐心'] }
      ],
      exercises: [
        { type: 'choice', question: '作者童年「鲤鱼科学家」的想象，主要想说明？', options: ['鱼真的会做科学研究', '我们的认知也可能受感官局限而不自知', '池塘里必须养鱼', '物理只研究水生生物'], answer: '我们的认知也可能受感官局限而不自知', explanation: '「鲤鱼科学家」是思想实验：鲤鱼只能看见二维水中景象，无从理解岸上三维人类。作者借以隐喻——人类也可能像鲤鱼一样被自身感官与经验局限，从而强调科学需要想象与怀疑。它不是事实陈述，而是认知哲学的启发。' },
        { type: 'choice', question: '作者少年时受哪位科学家感召而立志理论物理？', options: ['牛顿', '爱因斯坦', '霍金', '达尔文'], answer: '爱因斯坦', explanation: '文中写到，少年加来道雄被爱因斯坦的「统一场论」震撼，立志成为「了解爱因斯坦未完成事业的人」，并自学微积分、在车库自建粒子加速器。统一场论正是爱因斯坦晚年追求的目标，也是作者终身追随的方向。' },
        { type: 'fill', question: '作者童年在日本茶园的水池边，思考「______科学家」如何认识世界，由此萌发科学想象。', answer: '鲤鱼', explanation: '加来道雄回忆童年于日本茶园水池旁，设想「鲤鱼科学家」只能感知水中的二维世界，无法理解岸上的三维人类。这一「鲤鱼之问」是他科学想象与反思认知边界的起点，也是全文最具代表性的意象。' },
        { type: 'choice', question: '本文作为科普自传，最突出的写法是？', options: ['堆砌公式定理', '以小见大，用亲身故事阐释科学思维', '纯虚构小说', '只做学术论证'], answer: '以小见大，用亲身故事阐释科学思维', explanation: '文章不罗列物理公式，而用一个童年水池之问撬动「科学始于想象与怀疑」的宏大主题，把抽象的科学方法论融化在自传故事里。这种以小见大、由事及理的写法，是科普自传亲切而深刻的原因。' },
        { type: 'choice', question: '下列对「原子撞机」的理解，正确的是？', options: ['作者造出了真正的高能加速器', '少年自制的简化模型，体现动手实证精神', '与科学无关的游戏', '学校统一配发的实验设备'], answer: '少年自制的简化模型，体现动手实证精神', explanation: '文中「原子撞机」是作者少年时在车库自制的简化装置模型，意在体现他自驱学习、动手求证的科学态度，并非真正的高能加速器。读科普文须区分「文学性叙事」与「科学事实」，避免夸大误解。' }
      ]
    },

    /* ==================== 第3课 中国建筑的特征 ==================== */
    {
      id: 'bx2-u3-l3',
      name: '《中国建筑的特征》',
      author: '梁思成',
      chapter: '第三单元 探索与发现（知识性读物）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '梁思成（1901—1972），广东新会人，建筑学家、建筑教育家，中国近代建筑教育的奠基人之一。他毕生致力于中国古建筑的研究与保护，与夫人林徽因等营造学社同仁实地测绘了大量唐、宋、元、明、清建筑，著述宏富。' },
        { type: 'paragraph', text: '本文是梁思成写给大众的科普名篇。他以高度概括的「九点特征」系统总结中国建筑在结构、布局、装饰上的独特体系，既是中国建筑学的入门纲领，也洋溢着对民族文化的自豪与守护之心。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>知识性读物（建筑科普说明文）</strong>，采用<strong>「总—分—总」</strong>结构与<strong>下定义、作诠释、举例子、作比较</strong>等说明方法。作者既是学者又是建筑师，故语言<strong>准确专业又通俗好懂</strong>，把复杂的营造法式讲得条理分明。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fdf3e6"/><rect x="300" y="180" width="80" height="60" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><polygon points="280,180 400,180 340,120" fill="#c0392b"/><polygon points="280,180 400,180 340,120" fill="none" stroke="#7a5a2e" stroke-width="2"/><g stroke="#7a5a2e" stroke-width="2"><line x1="300" y1="180" x2="280" y2="120"/><line x1="380" y1="180" x2="400" y2="120"/></g><rect x="318" y="155" width="44" height="25" fill="#7a5a2e"/><text x="340" y="100" font-size="13" fill="#7a5a2e" text-anchor="middle">屋顶·飞檐</text><text x="340" y="265" font-size="13" fill="#5b3b12" text-anchor="middle">木构架·斗拱·台基</text><text x="340" y="285" font-size="12" fill="#8a6d3b" text-anchor="middle">中国建筑三要素：台基、屋身、屋顶</text></svg>', caption: '中国建筑以木构架为主体，屋顶飞檐、斗拱层叠，形制独具。' },
        { type: 'heading', text: '二、内容研读：中国建筑的九大特征' },
        { type: 'keypoint', label: '重点·总体特征', text: '梁思成把中国建筑的特征概括为九点，核心可归为：①<strong>以木材为主的结构体系</strong>（梁柱承重，墙不承重）；②<strong>斗拱</strong>层叠托起出檐；③<strong>屋顶</strong>硕大、反宇向阳（飞檐）；④<strong>院落式布局</strong>（多进四合院）；⑤<strong>中轴对称、色彩规制</strong>等。这是一套独立成系的「建筑文法」。' },
        { type: 'keypoint', label: '重点·斗拱', text: '<strong>斗拱</strong>是中国建筑最富特色的构件：由方形「斗」与弓形「拱」层层叠架，位于柱顶与屋顶之间，既<strong>分散屋顶重量</strong>，又<strong>支撑深远的出檐</strong>。它兼具结构与装饰之美，是中国木构建筑的「语法标志」。' },
        { type: 'example', label: '思路梳理示范', text: '作者为什么把中国建筑比作「文法」与「词汇」？<br><br><strong>解析</strong>：梁思成用<strong>比喻（打比方）</strong>说明：中国建筑像一种「语言」——<strong>「文法」</strong>指通用的结构规则（如梁柱体系、斗拱做法），<strong>「词汇」</strong>指具体的构件与手法（如斗拱、鸱吻、彩画）。各民族建筑各有「文法」，故千变万化而体系不乱。这一比方把抽象的营造法式讲得形象易懂，是科普说明的妙笔。' },
        { type: 'keypoint', label: '重点·文法比喻', text: '作者提出著名比喻：建筑如<strong>语言</strong>，有<strong>「文法」（普遍规则）</strong>与<strong>「词汇」（具体构件）</strong>。中国建筑因共享一套「文法」，才能使宫殿、庙宇、民居虽大小迥异却「同出一源」。这一比喻揭示了建筑传统的<strong>传承性与规范性</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><g font-size="13" text-anchor="middle"><rect x="40" y="60" width="170" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="125" y="88">木构架</text><text x="125" y="110" fill="#5b4636" font-size="12">墙不承重</text><rect x="245" y="60" width="170" height="70" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="340" y="88">斗拱</text><text x="340" y="110" fill="#33536e" font-size="12">托檐·分散</text><rect x="450" y="60" width="190" height="70" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="545" y="88" fill="#fff">飞檐屋顶</text><text x="545" y="110" fill="#e8d5f7" font-size="12">反宇向阳</text></g><g stroke="#c0392b" stroke-width="2.5" fill="none"><line x1="210" y1="95" x2="243" y2="95" marker-end="url(#b3a)"/><line x1="415" y1="95" x2="448" y2="95" marker-end="url(#b3a)"/></g><defs><marker id="b3a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="160" font-size="14" fill="#3e5b6b" text-anchor="middle">结构三要素：木构架为骨，斗拱为结，飞檐为冠</text><text x="340" y="200" font-size="13" fill="#5b7a8a" text-anchor="middle">共享一套「文法」，故万变不离其宗</text></svg>', caption: '木构架、斗拱、飞檐，构成中国建筑的「文法」主体。' },
        { type: 'heading', text: '三、说明方法与建筑美学' },
        { type: 'keypoint', label: '说明方法', text: '本文综合运用：①<strong>下定义</strong>（界定「斗拱」「举架」等术语）；②<strong>作诠释</strong>（解释构件功能）；③<strong>举例子</strong>（以故宫、庙宇、民居为例）；④<strong>作比较</strong>（与西方砖石建筑对比，凸显木构特色）；⑤<strong>打比方</strong>（文法/词汇）。方法得当，使专业内容通俗化。' },
        { type: 'warn', label: '易错·术语', text: '「<strong>斗拱</strong>」是木构件（斗+拱），不是「斗争」；「<strong>举架</strong>」指屋面由下而上逐层加高形成的坡度，不是「举起架子」。此外，中国建筑以<strong>木构</strong>为主，与西方<strong>砖石</strong>拱券体系不同——切勿把「墙体承重」套用于中国建筑（此处墙仅分隔，不承重）。这些是阅读时最易望文生义处。' },
        { type: 'table', headers: ['中国建筑特征', '具体表现', '与西方建筑对比'], rows: [['结构体系', '木构架（梁柱承重）', '西方多为砖石拱券'], ['关键构件', '斗拱托檐、分散荷载', '西方用柱式、拱顶'], ['屋顶造型', '硕大飞檐、反宇向阳', '西方坡顶较陡直'], ['布局方式', '院落式、中轴对称', '西方多独立体块'], ['装饰色彩', '彩画、等级用色', '西方多石材原色']] },
        { type: 'list', items: ['文体：建筑科普说明文，总—分—总结构', '九大特征可归为木构架、斗拱、飞檐、院落、中轴', '核心构件：斗拱（结构与装饰兼具）', '妙喻：建筑如语言，有「文法」与「词汇」', '说明方法：下定义、作诠释、举例子、作比较、打比方', '美学：体系独立、传承有序的民族建筑文化'] },
        { type: 'heading', text: '四、价值与拓展' },
        { type: 'keypoint', label: '文化价值', text: '中国建筑是一套<strong>独立成体系、传承数千年的「营造传统」</strong>，凝结着民族的审美与智慧。梁思成在战火与变革中记录它，既是<strong>学术奠基</strong>，也是<strong>文化守护</strong>——让我们懂得：建筑是「石头的史书」，读懂它，就读懂了一个文明的肌理。' },
        { type: 'tip', label: '拓展', text: '梁思成与林徽因还发现了山西<strong>佛光寺东大殿</strong>（唐代木构，打破「中国无唐构」之说），并参与<strong>人民英雄纪念碑、国徽</strong>设计。2000 年后，他提出的「<strong>梁陈方案</strong>」（新旧城分开）虽未被采纳，却彰显前瞻性。读本文，可与《中国建筑史》及世界建筑（如哥特式、希腊柱式）对照，体会文明的多元。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#fdf3e6"/><g font-size="13" text-anchor="middle"><rect x="30" y="55" width="170" height="80" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="115" y="85">结构体系</text><text x="115" y="107" fill="#5b4636" font-size="12">木构·斗拱</text><rect x="245" y="55" width="170" height="80" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="330" y="85">美学特征</text><text x="330" y="107" fill="#33536e" font-size="12">飞檐·对称</text><rect x="460" y="55" width="190" height="80" rx="8" fill="#c0392b" stroke="#9c2a1e" stroke-width="2"/><text x="555" y="85" fill="#fff">文化守护</text><text x="555" y="107" fill="#fff" font-size="12">民族智慧</text></g><g stroke="#9c2a1e" stroke-width="2" fill="none"><line x1="200" y1="95" x2="243" y2="95" marker-end="url(#b3b)"/><line x1="415" y1="95" x2="458" y2="95" marker-end="url(#b3b)"/></g><defs><marker id="b3b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#9c2a1e"/></marker></defs><text x="340" y="185" font-size="13" fill="#5b3b12" text-anchor="middle">由结构到美学，再到文化：中国建筑是文明的肌理</text></svg>', caption: '从木构法式到文化守护，梁思成让民族建筑被世界读懂。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['梁思成，中国现代建筑教育奠基人，建筑科普名篇', '九大特征：木构架、斗拱、飞檐、院落、中轴', '斗拱：结构与装饰兼具的中国建筑标志', '妙喻：建筑如语言，有「文法」与「词汇」', '说明方法：下定义、作诠释、举例子、作比较、打比方', '价值：守护民族营造传统，建筑是石头的史书'] }
      ],
      exercises: [
        { type: 'choice', question: '《中国建筑的特征》的作者梁思成，其主要身份是？', options: ['小说家', '建筑学家、建筑教育家', '画家', '音乐家'], answer: '建筑学家、建筑教育家', explanation: '梁思成是中国近代建筑教育的奠基人，毕生研究并保护中国古建筑，与林徽因等实测大量唐至清建筑。本文是他写给大众的建筑科普名篇，以学者兼实践者的身份，把营造法式讲得准确又通俗。' },
        { type: 'choice', question: '中国建筑最具特色的构件「斗拱」的主要作用是？', options: ['纯装饰、毫无用处', '位于柱顶与屋顶间，分散荷载并支撑深远出檐', '用来承重整面墙', '西方建筑独有'], answer: '位于柱顶与屋顶间，分散荷载并支撑深远出檐', explanation: '斗拱由方形「斗」与弓形「拱」层叠而成，处于柱顶与屋顶之间，既把屋顶重量分散到柱上，又支撑起深远的屋檐，兼具结构与装饰之美，是中国木构建筑的标志，并非西方所有。' },
        { type: 'fill', question: '梁思成把中国建筑比作一种「语言」，其中有通用的规则「______」（文法），也有具体的构件「词汇」。', answer: '文法', explanation: '作者以语言作比：中国建筑共享一套「文法」（普遍的结构规则，如梁柱体系、斗拱做法），「词汇」则是具体构件与手法（斗拱、鸱吻、彩画等）。因同用一套文法，各类建筑才万变不离其宗，体系井然。' },
        { type: 'choice', question: '中国建筑与西方建筑在结构体系上的主要区别是？', options: ['中国以木构架为主，西方多为砖石拱券', '二者完全相同', '中国用砖石、西方用木材', '都不用墙体'], answer: '中国以木构架为主，西方多为砖石拱券', explanation: '中国建筑以木材梁柱为承重骨架，墙体仅起分隔作用、不承重；西方古典建筑多以砖石砌筑、用拱券承重。这一根本差异决定了二者在构件（斗拱 vs 柱式）、屋顶（飞檐 vs 陡直）等方面的不同面貌。' },
        { type: 'choice', question: '下列对文中术语的理解，正确的一项是？', options: ['「斗拱」即「斗争」', '「举架」指屋面逐层加高形成的坡度', '中国建筑墙体承重', '飞檐是西方建筑特征'], answer: '「举架」指屋面逐层加高形成的坡度', explanation: '「举架」是中国建筑术语，指屋面由下而上逐层加高、形成柔和坡度的做法；「斗拱」是木构件而非「斗争」；中国建筑墙不承重（由木构架承重）；飞檐是中国特征而非西方。只有「举架」的解释正确。' }
      ]
    },

    /* ==================== 第4课 说"木叶" ==================== */
    {
      id: 'bx2-u3-l4',
      name: '《说"木叶"》',
      author: '林庚',
      chapter: '第三单元 探索与发现（知识性读物）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、走近作者与写作背景' },
        { type: 'paragraph', text: '林庚（1910—2006），福建福州人，诗人、古典文学研究家，长期任教于北京大学。他早年写新诗（有「北京神童」之誉），后转向古典诗词研究，提出「盛唐气象」「少年精神」等著名诗学命题，诗风与学养相互滋养。' },
        { type: 'paragraph', text: '《说「木叶」》是一篇<strong>学术论文式的文化随笔</strong>。作者从一个极小的诗学现象——为何诗人爱用「木叶」而非「树叶」——出发，层层剥笋，揭示汉字意象背后的艺术密码，是「于细微处见深意」的典范。' },
        { type: 'keypoint', label: '文体常识', text: '本文是<strong>文艺随笔（学术小品）</strong>，兼具<strong>学术性</strong>与<strong>可读性</strong>。它采用<strong>「由现象到本质、由浅入深」</strong>的论证思路，大量<strong>引证诗句</strong>作为论据，在梳理中得出结论。阅读时既要赏其文采，也要学其<strong>层层深入的分析方法</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6f0"/><rect x="120" y="80" width="60" height="140" rx="6" fill="#7a9b3e" stroke="#3e6b2e" stroke-width="2"/><circle cx="150" cy="70" r="28" fill="#5aa832"/><text x="150" y="200" font-size="13" fill="#3e6b2e" text-anchor="middle">树（叶）</text><text x="150" y="220" font-size="12" fill="#5b7a5e" text-anchor="middle">繁茂·绿意</text><rect x="500" y="80" width="60" height="140" rx="6" fill="#a9711a" stroke="#6b4f10" stroke-width="2"/><circle cx="530" cy="70" r="28" fill="#9c6b2e"/><text x="530" y="200" font-size="13" fill="#6b4f10" text-anchor="middle">木（叶）</text><text x="530" y="220" font-size="12" fill="#7a5a2e" text-anchor="middle">疏朗·秋意</text><path d="M210 150 h280" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#m4a)"/><text x="350" y="135" font-size="13" fill="#c0392b" text-anchor="middle">一字之别·意境迥异</text><defs><marker id="m4a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="285" font-size="13" fill="#3e6b4e" text-anchor="middle">「木」与「树」：同样的叶，不同的艺术暗示</text></svg>', caption: '「木叶」与「树叶」一字之差，却带来疏朗与繁茂的意境分野。' },
        { type: 'heading', text: '二、内容研读：由「木叶」说起' },
        { type: 'keypoint', label: '重点·现象', text: '作者发现：古典诗词中诗人极少言「树叶」，而偏爱「<strong>木叶</strong>」（如「袅袅兮秋风，洞庭波兮木叶下」），更常用「<strong>木</strong>」字（如「秋月照层岭，寒风扫故木」）。同指植物的叶，为何偏取「木」？这是全文探究的起点。' },
        { type: 'keypoint', label: '重点·辨析', text: '关键在<strong>「木」的艺术暗示</strong>：①<strong>颜色</strong>——「木」令人联想到树干褐黄，洗去「叶」的绿意；②<strong>质感</strong>——「木」含「木头、木板」的干枯感，比「树」更<strong>疏朗、空阔</strong>；③<strong>季节</strong>——「木」自带<strong>秋风落叶的萧瑟</strong>。故「木叶」比「树叶」更富<strong>清秋的飘零之美</strong>。' },
        { type: 'example', label: '分析示范', text: '为何「木叶」比「树叶」更具诗意？请结合文中分析作答。<br><br><strong>解析</strong>：林庚指出，「树」字带来<strong>枝叶繁茂的绿色联想</strong>，偏饱满；而「木」字因含「木材、木料」之意，自然<strong>洗去叶的绿、添上干的褐</strong>，并唤起「落叶萧萧」的秋意。于是「木叶」不再是普通的叶，而成为<strong>疏朗、空阔、饱含离愁与清秋之美</strong>的意象。一字之差，意境全变，正显汉字意象的微妙张力。' },
        { type: 'keypoint', label: '重点·由浅入深', text: '文章论证层层递进：先提<strong>现象</strong>（爱用木叶）→再<strong>比较</strong>（木叶 vs 树叶）→析<strong>原因</strong>（木的艺术暗示）→再<strong>深化</strong>（木与树在诗歌传统中的稳定区别）→终<strong>点题</strong>（诗歌语言富于暗示性）。这种「剥笋式」分析，是学术论文的范例。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3f8fb"/><g font-size="12" text-anchor="middle"><rect x="20" y="55" width="115" height="60" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="77" y="90">提出现象</text><rect x="155" y="55" width="115" height="60" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="212" y="90">比较辨析</text><rect x="290" y="55" width="115" height="60" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="347" y="90">析其原因</text><rect x="425" y="55" width="115" height="60" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="482" y="90" fill="#fff">深化区别</text><rect x="560" y="55" width="115" height="60" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="617" y="90" fill="#fff">点明暗示</text></g><g stroke="#c0392b" stroke-width="2.5" fill="none"><line x1="135" y1="85" x2="153" y2="85" marker-end="url(#m4b)"/><line x1="270" y1="85" x2="288" y2="85" marker-end="url(#m4b)"/><line x1="405" y1="85" x2="423" y2="85" marker-end="url(#m4b)"/><line x1="540" y1="85" x2="558" y2="85" marker-end="url(#m4b)"/></g><defs><marker id="m4b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="160" font-size="14" fill="#3e5b6b" text-anchor="middle">论证五步：现象→比较→原因→深化→暗示，剥笋式深入</text><text x="340" y="200" font-size="13" fill="#5b7a8a" text-anchor="middle">于细微处见深意：一个字里藏着整个诗歌传统</text></svg>', caption: '从「木叶」现象到「暗示性」本质，论证层层深入。' },
        { type: 'heading', text: '三、艺术分析与语言品味' },
        { type: 'keypoint', label: '分析方法', text: '本文最值得学习的是<strong>「于细微处做大学问」</strong>：从一个常被忽略的字眼切入，广征博引（屈原、谢庄、陆厥、杜甫等诗句），在比较中抽绎规律。它告诉我们：<strong>读诗要细，论理要透</strong>，好文章可以从小切口抵达大命题。' },
        { type: 'warn', label: '易错·概念', text: '「木叶」之「木」并非指「树木」这个植物整体，而是指<strong>「木」字所携带的艺术暗示（褐干、疏朗、秋意）</strong>。此外，文中说诗歌语言「<strong>富于暗示性</strong>」——指字词能引发联想、不把意思说尽，<strong>不同于「含混不清」</strong>。读文时勿把「暗示性」误解为表达模糊，它是古典诗歌含蓄美的根基。' },
        { type: 'table', headers: ['比较项', '树叶 / 树', '木叶 / 木'], rows: [['颜色联想', '绿叶繁茂、生机饱满', '洗去绿意、褐黄干枯'], ['空间质感', '绵密、充实', '疏朗、空阔'], ['季节意味', '偏春夏', '自带秋风落叶之萧瑟'], ['诗歌效果', '平直、少余味', '含蓄、富清秋飘零之美']] },
        { type: 'list', items: ['文体：文艺随笔（学术小品），由现象到本质', '起点：诗人偏爱「木叶」而非「树叶」', '核心：木的艺术暗示（色褐、质疏、秋意）', '方法：广征诗句、比较辨析、剥笋深入', '结论：诗歌语言富于「暗示性」', '读法：于细微处见深意，细读方能透理'] },
        { type: 'heading', text: '四、价值与拓展' },
        { type: 'keypoint', label: '美学意义', text: '「木叶」之辨让我们看见：<strong>汉字不只是表意符号，更是携带文化记忆与审美暗示的艺术载体</strong>。中国古典诗歌的妙处，常在一字一词的锤炼与联想。读懂「木」的秋意，便读懂了诗人如何让最简的字，承载最深的情。' },
        { type: 'tip', label: '拓展', text: '类似的「一字见境」在诗词中比比皆是：<strong>「月」</strong>常伴思乡，<strong>「柳」</strong>谐音「留」而送别，<strong>「红豆」</strong>寄相思，<strong>「雁」</strong>传书信与秋愁。林庚另提出「<strong>盛唐气象</strong>」「<strong>少年精神</strong>」等命题，皆主张从语言与意象入手把握时代诗风。读诗，不妨也学他「咬文嚼字」地品味。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#eef6f0"/><g font-size="13" text-anchor="middle"><rect x="30" y="55" width="160" height="80" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="110" y="85">木叶现象</text><text x="110" y="107" fill="#5b4636" font-size="12">一字之别</text><rect x="250" y="55" width="160" height="80" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="330" y="85">暗示性</text><text x="330" y="107" fill="#33536e" font-size="12">色·质·季</text><rect x="470" y="55" width="180" height="80" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="560" y="85" fill="#fff">诗歌美学</text><text x="560" y="107" fill="#dff0c8" font-size="12">含蓄·文化记忆</text></g><g stroke="#3e6b2a" stroke-width="2" fill="none"><line x1="190" y1="95" x2="248" y2="95" marker-end="url(#m4c)"/><line x1="410" y1="95" x2="468" y2="95" marker-end="url(#m4c)"/></g><defs><marker id="m4c" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#3e6b2a"/></marker></defs><text x="340" y="185" font-size="13" fill="#3e6b2e" text-anchor="middle">由一字到一境：汉字是携带审美暗示的艺术载体</text></svg>', caption: '从「木叶」一字，抵达中国诗歌含蓄蕴藉的美学深处。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['林庚，诗人、古典文学研究家，《说"木叶"》为文艺随笔', '起点：诗人偏爱「木叶」甚于「树叶」', '核心：木的艺术暗示——褐干、疏朗、秋意', '方法：广征诗句、比较辨析、层层深入', '结论：诗歌语言富于「暗示性」，含蓄见美', '读法：于细微处见深意，细读品味意象'] }
      ],
      exercises: [
        { type: 'choice', question: '《说「木叶」》的作者林庚，其主要研究领域是？', options: ['物理学', '古典诗词与诗学（文艺研究）', '建筑设计', '外国文学'], answer: '古典诗词与诗学（文艺研究）', explanation: '林庚是诗人兼古典文学研究家，提出「盛唐气象」「少年精神」等著名诗学命题。《说「木叶」》从「木叶」这一诗学小现象切入，揭示汉字意象的艺术暗示，是一篇兼具学术性与可读性的文艺随笔。' },
        { type: 'choice', question: '文中认为「木叶」比「树叶」更具诗意，关键原因在于？', options: ['「木」字笔画更少', '「木」字带来褐干、疏朗、秋意的艺术暗示', '「树」字不能入诗', '诗人都不认识「树」字'], answer: '「木」字带来褐干、疏朗、秋意的艺术暗示', explanation: '林庚指出，「木」含木材、木料的干枯感，洗去「叶」的绿意，并唤起秋风落叶的萧瑟，因而「木叶」比「树叶」更疏朗空阔、富清秋飘零之美。这正是「木」字的艺术暗示在起作用，而非字形繁简问题。' },
        { type: 'fill', question: '林庚认为中国诗歌语言富于「______性」——字词能引发联想、不把意思说尽，是含蓄美的根基。', answer: '暗示', explanation: '文中结论是：诗歌语言富于「暗示性」，即一个字（如「木」）能携带颜色、质感、季节等多重联想，言有尽而意无穷。这不同于「含混不清」，而是古典诗歌含蓄蕴藉之美的根源，也是本文的核心概念。' },
        { type: 'choice', question: '《说「木叶」》在论证方法上的突出特点是？', options: ['堆砌术语、故作高深', '由现象到本质、广征诗句、层层深入（剥笋式）', '只讲故事、不加分析', '通篇抒情、不论证'], answer: '由现象到本质、广征诗句、层层深入（剥笋式）', explanation: '文章从「诗人爱用木叶」这一小现象起笔，引屈原、谢庄、杜甫等大量诗句作比较，依次分析现象、比较、原因、深化，最终点明「暗示性」本质。这种由浅入深、层层剥笋的论证，是学术随笔的典范。' },
        { type: 'choice', question: '下列对「木」的艺术暗示理解有误的一项是？', options: ['「木」令人联想到树干褐黄', '「木」带来疏朗空阔之感', '「木」自带秋风落叶的萧瑟', '「木」与「树」在诗中是毫无区别的同义词'], answer: '「木」与「树」在诗中是毫无区别的同义词', explanation: '林庚恰恰论证二者在诗歌中区别显著：「木」洗绿添褐、疏朗含秋，而「树」偏繁茂绿意。二者在科学上同指植物，在诗歌艺术中却暗示迥异，绝非同义词。前三项均符合文意，唯此项有误。' }
      ]
    }
  );
})();
