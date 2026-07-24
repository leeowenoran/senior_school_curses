(function () {
  var v = gzGetVolume('chinese', 'xb2');
  if (!v) return;
  v.points.push(

    /* ============ 第一单元 第1课 ============ */
    {
      id: 'xb2-u1-l1',
      name: '《社会历史的决定性基础》',
      author: '恩格斯',
      chapter: '第一单元 理论的价值（科学与文化论著研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、文体知识与写作背景' },
        { type: 'paragraph', text: '本文是恩格斯于 1894 年 1 月 25 日写给德国大学生瓦尔特·博尔吉乌斯的一封回信，属于书信体论说文。信中针对当时一些人歪曲历史唯物主义、夸大历史人物个人作用的错误观点，系统阐述了历史唯物主义的基本原理。' },
        { type: 'keypoint', label: '核心观点', text: '文章的灵魂可概括为一句：<strong>经济关系是社会历史的决定性基础</strong>。它决定着上层建筑，也从根本上制约着历史发展的总体方向。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="30" width="280" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="160" y="66" font-size="17" fill="#1a3c8a" text-anchor="middle">经济基础（生产方式）</text><rect x="380" y="30" width="280" height="60" rx="8" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="520" y="66" font-size="17" fill="#a3331f" text-anchor="middle">上层建筑（政治、法律、哲学、艺术等）</text><path d="M300 60 L380 60" stroke="#333" stroke-width="3" marker-end="url(#ar1)"/><path d="M380 90 L300 90" stroke="#333" stroke-width="2" stroke-dasharray="5 4"/><defs><marker id="ar1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="52" font-size="13" fill="#333" text-anchor="middle">决定</text><text x="340" y="108" font-size="13" fill="#777" text-anchor="middle">反作用</text><text x="340" y="160" font-size="15" fill="#1a3c8a" text-anchor="middle">经济基础是“决定性基础”，上层建筑对其有反作用但非决定作用</text><text x="340" y="200" font-size="13" fill="#555" text-anchor="middle">理解：经济状况的“必然”制约着上层建筑发展的“可能”</text></svg>', caption: '经济基础与上层建筑的辩证关系：经济关系具有决定性，上层建筑对经济基础有反作用。' },
        { type: 'heading', text: '二、核心概念辨析' },
        { type: 'list', items: [
          '经济基础：指一定社会中占统治地位的生产关系的总和，归根到底是物质生活的生产方式。',
          '上层建筑：建立在经济基础之上的政治、法律制度和设施，以及相应的意识形态（哲学、宗教、艺术等）。',
          '必然性：由经济关系决定的、历史发展的确定趋势，不以个人意志为转移。',
          '偶然性：具体历史事件发生的时间、人物等不确定因素，但不能改变历史总趋势。'
        ] },
        { type: 'paragraph', text: '恩格斯强调，经济状况是基础，但对历史斗争的进程发生影响并且在许多情况下主要是决定着这一斗争的形式的，还有上层建筑的各种因素。因此不能把历史唯物主义简单地理解成“经济决定一切”的庸俗公式。' },
        { type: 'table', headers: ['概念', '内涵', '二者的关系'], rows: [
          ['经济基础', '物质生活的生产方式（生产关系总和）', '具有决定性，是第一性的'],
          ['上层建筑', '政治法律制度与意识形态', '由经济基础决定，并对其有反作用'],
          ['必然与偶然', '趋势确定 vs 具体表现不确定', '必然性通过大量偶然性为自己开辟道路']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="200" height="70" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="140" y="72" font-size="15" fill="#1a3c8a" text-anchor="middle">历史发展的</text><text x="140" y="94" font-size="15" fill="#1a3c8a" text-anchor="middle">必然趋势</text><rect x="440" y="40" width="200" height="70" rx="8" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="540" y="72" font-size="15" fill="#a3331f" text-anchor="middle">伟大人物</text><text x="540" y="94" font-size="15" fill="#a3331f" text-anchor="middle">出现的偶然</text><path d="M240 75 L440 75" stroke="#333" stroke-width="2" marker-end="url(#a2)"/><defs><marker id="a2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="68" font-size="13" fill="#333" text-anchor="middle">偶然不能</text><text x="340" y="86" font-size="13" fill="#333" text-anchor="middle">改变必然</text><text x="340" y="160" font-size="14" fill="#555" text-anchor="middle">恰如：没有拿破仑，也会有另一个人扮演类似角色</text><text x="340" y="195" font-size="14" fill="#555" text-anchor="middle">某一人物出现是偶然，但“需要这样的人”是必然</text></svg>', caption: '必然性与偶然性的关系：伟人出现是偶然，历史需要这样的人则是必然。' },
        { type: 'warn', label: '易错提醒', text: '常见误区是把“经济关系是决定性基础”曲解为<strong>“经济因素唯一决定论”</strong>。恩格斯明确指出上层建筑诸因素也起重要作用，只是最终都要回到经济动因。' },
        { type: 'heading', text: '三、论证艺术与论述思路' },
        { type: 'paragraph', text: '全文采用书信问答形式，从对方的问题出发，先确立“经济关系决定性”这一前提，再依次澄清上层建筑的反作用、必然与偶然的关系，最后指出理论掌握群众的条件，层层深入、逻辑严密。' },
        { type: 'example', label: '论述思路示例', text: '恩格斯先说“政治、法、哲学等上层建筑由经济基础决定”，<strong>接着马上补充</strong>“但它们对历史进程有影响、甚至主要决定斗争形式”，这种“立论—补正”的写法避免了片面化，体现了辩证论述的力量。' },
        { type: 'tip', label: '阅读方法', text: '读社科论说文要<strong>抓住“主要概念”与“核心观点”</strong>：先勾画“经济关系”“上层建筑”“必然性”“偶然性”四个关键词，再梳理它们之间的逻辑链条，思路就清晰了。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="120" r="50" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="110" y="116" font-size="14" fill="#1a3c8a" text-anchor="middle">经济关系</text><text x="110" y="134" font-size="14" fill="#1a3c8a" text-anchor="middle">决定性</text><circle cx="300" cy="120" r="50" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="300" y="116" font-size="14" fill="#a3331f" text-anchor="middle">上层建</text><text x="300" y="134" font-size="14" fill="#a3331f" text-anchor="middle">筑反作用</text><circle cx="490" cy="120" r="50" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="490" y="116" font-size="14" fill="#1e6b34" text-anchor="middle">必然与</text><text x="490" y="134" font-size="14" fill="#1e6b34" text-anchor="middle">偶然</text><path d="M160 120 L250 120" stroke="#333" stroke-width="2" marker-end="url(#b1)"/><path d="M350 120 L440 120" stroke="#333" stroke-width="2" marker-end="url(#b1)"/><defs><marker id="b1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="210" font-size="14" fill="#555" text-anchor="middle">层层深入：前提 → 补正 → 升华，论证环环相扣</text></svg>', caption: '本文论述思路：从前提确立到辩证补正再到意义升华，逻辑环环相扣。' },
        { type: 'list', items: [
          '概念先行：先明确“经济关系”等核心概念的内涵与边界。',
          '辩证立论：在确立主论点的同时主动补正，防止绝对化。',
          '史论结合：以历史实例说明抽象原理，增强说服力。'
        ] },
        { type: 'keypoint', label: '学习重点', text: '把握<strong>“经济关系是决定性基础”</strong>这一核心命题，理解必然性与偶然性的辩证关系，体会恩格斯层层深入、辩证严谨的论述风格。' },
        { type: 'paragraph', text: '综上所述，本文以书信体论说文的形式，把历史唯物主义的核心原理讲得既深刻又通俗，是学习社科论著论证艺术的典范文本，也是我们把握“理论的价值”的入门钥匙。' },
        { type: 'list', items: ['抓概念：经济关系、上层建筑、必然、偶然', '理关系：经济决定、上层建筑反作用、必然通过偶然开辟道路', '学论证：立论—补正—升华，辩证严谨而层层深入'] },
        { type: 'reading', text: '延伸思考：今天我们谈论“经济决定论”时，应如何避免恩格斯所批评的“把一切都简单地归结为经济”的片面理解？' }
      ],
      exercises: [
        { type: 'choice', question: '下列对“经济关系是社会历史的决定性基础”理解正确的一项是？', options: ['经济因素决定一切，上层建筑不起作用', '经济关系具有决定性，但上层建筑对其有反作用', '上层建筑决定经济关系的性质', '偶然性可以完全改变历史发展的必然趋势'], answer: '经济关系具有决定性，但上层建筑对其有反作用', explanation: '恩格斯明确指出经济关系是决定性基础，但政治、法律、哲学等上层建筑因素对历史进程有重要影响甚至有反作用，只是不能改变经济关系的决定性地位。A、C、D 均曲解了原文辩证观点。' },
        { type: 'choice', question: '关于历史发展的“必然性”与“偶然性”，符合文意的是？', options: ['伟人出现是必然，具体历史进程是偶然', '历史总趋势是必然，伟人出现是偶然但改变不了趋势', '必然性与偶然性互不相干', '偶然性比必然性更重要'], answer: '历史总趋势是必然，伟人出现是偶然但改变不了趋势', explanation: '文章认为由经济关系决定的历史总趋势是必然的，而某个伟大人物何时何地出现则是偶然的，但偶然不能改变必然趋势，正如没有拿破仑也会有他人扮演类似角色。' },
        { type: 'fill', question: '本文的文体是写给瓦尔特·博尔吉乌斯的回信，属于______（限四字）。', answer: '书信体论说文', explanation: '本文是恩格斯的一封回信，采用书信体论说文的形式，针对对方疑问系统阐述历史唯物主义原理。答题须点明“书信体”与“论说文”两个特征。' },
        { type: 'fill', question: '恩格斯认为，上层建筑对经济基础具有______作用，但它不是决定性的。', answer: '反', explanation: '原文强调经济关系是决定性的，上层建筑由经济基础决定并反作用于经济基础。填“反”字即可，也可答“反作用”，核心是认识到上层建筑不具决定性。' },
        { type: 'choice', question: '下列对本文论证特点概括最准确的是？', options: ['层层深入、辩证严谨', '大量抒情、感染力强', '以故事情节取胜', '以寓言说理为主'], answer: '层层深入、辩证严谨', explanation: '全文从核心命题出发，先立论再补正，再谈必然与偶然，最后升华意义，逻辑严密、层层深入，体现了恩格斯论说文的辩证严谨风格，而非抒情或寓言说理。' }
      ]
    },

    /* ============ 第一单元 第2课 ============ */
    {
      id: 'xb2-u1-l2',
      name: '《改造我们的学习》',
      author: '毛泽东',
      chapter: '第一单元 理论的价值（科学与文化论著研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体与写作背景' },
        { type: 'paragraph', text: '本文是毛泽东 1941 年 5 月在延安干部会议上的报告，属于政论文。当时党内主观主义学风盛行，毛泽东号召全党树立马克思主义的学风，即“实事求是”的学风。' },
        { type: 'keypoint', label: '核心主张', text: '文章的中心是<strong>改造学风</strong>：将主观主义的态度改造为马克思列宁主义的态度，做到“有的放矢”和“实事求是”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="40" width="290" height="70" rx="8" fill="#fdecea" stroke="#e05d44" stroke-width="2"/><text x="175" y="70" font-size="16" fill="#a3331f" text-anchor="middle">主观主义学风</text><text x="175" y="92" font-size="13" fill="#a3331f" text-anchor="middle">无的放矢·无实事求是</text><rect x="360" y="40" width="290" height="70" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="505" y="70" font-size="16" fill="#1e6b34" text-anchor="middle">马列主义学风</text><text x="505" y="92" font-size="13" fill="#1e6b34" text-anchor="middle">有的放矢·实事求是</text><path d="M320 75 L360 75" stroke="#333" stroke-width="2" marker-end="url(#c1)"/><defs><marker id="c1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="130" font-size="14" fill="#333" text-anchor="middle">改造：从错误态度转向正确态度</text><text x="340" y="180" font-size="13" fill="#555" text-anchor="middle">主观主义：凭印象、凭教条 → 马列主义：调查研究、理论联系实际</text></svg>', caption: '两种学风的对比：主观主义与马克思列宁主义学风的鲜明对立。' },
        { type: 'heading', text: '二、文章结构与思路' },
        { type: 'list', items: [
          '第一部分：肯定成绩，指出党内还有缺点。',
          '第二部分：指出缺点（主观主义）的表现与危害。',
          '第三部分：对比两种对立的态度（主观主义 vs 马列主义）。',
          '第四部分：提出改造学习的具体建议（研究现状、历史、马列运用）。'
        ] },
        { type: 'paragraph', text: '文章采用“成绩—问题—对比—对策”的论证结构，层层推进，说理充分，体现了政论文逻辑清晰、针对性强的特点。' },
        { type: 'table', headers: ['方面', '主观主义态度', '马克思列宁主义态度'], rows: [
          ['对待马列', '抽象地无目的地研究', '有的放矢，为解决中国问题而学'],
          ['对待实际', '凭主观想象、凭教条', '实事求是，调查研究'],
          ['态度实质', '党性不纯', '党性的表现']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="30" width="120" height="50" rx="6" fill="#e8f0fe" stroke="#4285f4"/><text x="100" y="60" font-size="14" fill="#1a3c8a" text-anchor="middle">肯定成绩</text><rect x="200" y="30" width="120" height="50" rx="6" fill="#fef0e8" stroke="#e05d44"/><text x="260" y="60" font-size="14" fill="#a3331f" text-anchor="middle">指出缺点</text><rect x="360" y="30" width="120" height="50" rx="6" fill="#fef7e0" stroke="#f9ab00"/><text x="420" y="60" font-size="14" fill="#8a6d00" text-anchor="middle">对比态度</text><rect x="520" y="30" width="120" height="50" rx="6" fill="#e6f4ea" stroke="#34a853"/><text x="580" y="60" font-size="14" fill="#1e6b34" text-anchor="middle">提出对策</text><path d="M160 55 L200 55 M320 55 L360 55 M480 55 L520 55" stroke="#333" stroke-width="2" marker-end="url(#d1)"/><defs><marker id="d1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="150" font-size="14" fill="#555" text-anchor="middle">“成绩—问题—对比—对策”四段式结构</text><text x="340" y="185" font-size="13" fill="#777" text-anchor="middle">先立后破、以对比强化论点，是政论文常用章法</text></svg>', caption: '本文结构：成绩—问题—对比—对策，先立后破、对比鲜明。' },
        { type: 'warn', label: '易错提醒', text: '不要把“实事求是”简单理解为“说实话”。毛泽东在文中专门解释：<strong>“实事”就是客观存在着的一切事物，“是”就是客观事物的内部联系即规律性，“求”就是我们去研究</strong>。' },
        { type: 'heading', text: '三、论证艺术' },
        { type: 'paragraph', text: '最突出的论证方法是对比论证。文章将主观主义态度与马克思列宁主义态度在多个维度上对照，使正确与错误的界限一目了然，增强了说服力。' },
        { type: 'example', label: '对比论证示例', text: '文中用“有的放矢”作比喻：马列主义之箭必须射中国革命之“的”。<strong>主观主义却“无的放矢”</strong>，只空谈理论不解决实际问题。这一比喻让抽象学风问题形象可感。' },
        { type: 'tip', label: '积累卡片', text: '“实事求是”出自《汉书·河间献王传》“修学好古，实事求是”，毛泽东赋予其马克思主义的新内涵，成为党的思想路线的核心表述。' },
        { type: 'keypoint', label: '学习重点', text: '掌握<strong>对比论证</strong>的手法，理解“实事求是”的科学内涵，体会政论文逻辑严密、旗帜鲜明的特点。' },
        { type: 'list', items: [
          '“的”指中国革命实际，“矢”指马克思列宁主义理论。',
          '有的放矢＝理论联系实际，是马列主义学风的精髓。',
          '改造学习的根本在于树立实事求是的科学态度。'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="180" height="55" rx="8" fill="#e8f0fe" stroke="#4285f4"/><text x="130" y="73" font-size="14" fill="#1a3c8a" text-anchor="middle">改造学风</text><rect x="250" y="40" width="180" height="55" rx="8" fill="#fef7e0" stroke="#f9ab00"/><text x="340" y="73" font-size="14" fill="#8a6d00" text-anchor="middle">实事求是</text><rect x="460" y="40" width="180" height="55" rx="8" fill="#e6f4ea" stroke="#34a853"/><text x="550" y="73" font-size="14" fill="#1e6b34" text-anchor="middle">三项建议</text><path d="M220 67 L250 67 M430 67 L460 67" stroke="#333" stroke-width="2" marker-end="url(#m2)"/><defs><marker id="m2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="160" font-size="14" fill="#555" text-anchor="middle">“实事求是”为红线，贯通全篇</text><text x="340" y="195" font-size="13" fill="#777" text-anchor="middle">从树立态度到落实为研究现状、历史、运用三项建议</text></svg>', caption: '本文以“实事求是”为红线，将改造学风落到三项具体学习建议。' },
        { type: 'paragraph', text: '全篇以“实事求是”为红线贯穿始终，把改造学风这一抽象任务具体化为研究现状、研究历史、注重马列运用三项建议，结构完整、针对性强，是政论文的典范。' },
        { type: 'list', items: ['红线：坚持实事求是', '方法：对比论证最为突出', '落点：三项学习建议落到实处'] },
        { type: 'reading', text: '延伸：本文与《反对党八股》《整顿党的作风》同为延安整风的三大文献，可联系起来理解“反对主观主义以整顿学风”的历史意义。' }
      ],
      exercises: [
        { type: 'choice', question: '本文的写作背景与文体分别是？', options: ['延安干部会议报告、政论文', '重庆谈判演讲、开幕词', '党校开学典礼、书信', '政协会议发言、社论'], answer: '延安干部会议报告、政论文', explanation: '《改造我们的学习》是毛泽东 1941 年 5 月在延安干部会议上的报告，属于政论文，旨在反对主观主义、树立实事求是学风。其余选项均与史实不符。' },
        { type: 'choice', question: '文中“有的放矢”的比喻义是？', options: ['盲目学习理论', '理论联系实际，用理论解决中国实际问题', '只重实际不学理论', '对敌人展开攻击'], answer: '理论联系实际，用理论解决中国实际问题', explanation: '毛泽东以“有的放矢”比喻马克思列宁主义之箭要射中国革命之“的”，即理论必须同中国实际相结合。这是马列主义学风的精髓，也是对主观主义“无的放矢”的否定。' },
        { type: 'fill', question: '毛泽东对“实事求是”的解释中，“实事”指客观存在着的一切事物，“是”指事物的______，“求”指我们去研究。', answer: '内部联系（规律性）', explanation: '原文明确训释：“实事”就是客观存在着的一切事物，“是”就是客观事物的内部联系即规律性，“求”就是我们去研究。答题抓住“规律性”或“内部联系”即可。' },
        { type: 'fill', question: '本文最主要的论证方法是______论证，通过两种学风的多维对照强化论点。', answer: '对比', explanation: '文章通篇将主观主义态度与马克思列宁主义态度在对待马列、对待实际等方面对照，属于典型的对比论证，使正确与错误的界限一目了然。' },
        { type: 'choice', question: '下列对本文结构概括正确的是？', options: ['成绩—问题—对比—对策', '引论—本论—结论—附录', '提出问题—分析问题—解决问题—展望未来', '现象—原因—危害—歌颂'], answer: '成绩—问题—对比—对策', explanation: '文章先肯定成绩，再指出主观主义缺点，接着对比两种态度，最后提出改造学习的三条建议，即“成绩—问题—对比—对策”四部分，逻辑清晰。' }
      ]
    },

    /* ============ 第一单元 第3课 ============ */
    {
      id: 'xb2-u1-l3',
      name: '《人的正确思想是从哪里来的？》',
      author: '毛泽东',
      chapter: '第一单元 理论的价值（科学与文化论著研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、写作背景与文体' },
        { type: 'paragraph', text: '本文写于 1963 年，是毛泽东为《中共中央关于目前农村工作中若干问题的决定（草案）》所写的一段前言，属短小精悍的哲理性政论文，集中阐述马克思主义认识论的基本观点。' },
        { type: 'keypoint', label: '核心观点', text: '文章开宗明义回答标题之问：<strong>人的正确思想只能从社会实践中来</strong>，由物质到精神、再由精神到物质两个飞跃构成。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><ellipse cx="150" cy="120" rx="90" ry="45" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="150" y="116" font-size="15" fill="#1a3c8a" text-anchor="middle">物质（实践）</text><text x="150" y="136" font-size="14" fill="#1a3c8a" text-anchor="middle">第一飞跃</text><ellipse cx="530" cy="120" rx="90" ry="45" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="530" y="116" font-size="15" fill="#a3331f" text-anchor="middle">精神（认识）</text><text x="530" y="136" font-size="14" fill="#a3331f" text-anchor="middle">第二飞跃</text><path d="M240 110 C360 60 420 60 440 110" stroke="#333" stroke-width="2" fill="none" marker-end="url(#e1)"/><path d="M440 130 C420 180 360 180 240 130" stroke="#333" stroke-width="2" fill="none" marker-end="url(#e1)"/><defs><marker id="e1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="55" font-size="13" fill="#333" text-anchor="middle">物质→精神</text><text x="340" y="200" font-size="13" fill="#333" text-anchor="middle">精神→物质（回到实践）</text></svg>', caption: '认识的两个飞跃：由物质到精神、由精神到物质，循环往复。' },
        { type: 'heading', text: '二、认识的两个飞跃' },
        { type: 'list', items: [
          '第一飞跃：人们在实践中接触外界事物，通过感官获得感性认识，再经思考上升为理性认识（物质变精神）。',
          '第二飞跃：理性认识回到实践中去，指导实践并接受检验（精神变物质），这一飞跃意义更为伟大。',
          '正确认识往往需要经过由实践到认识、再由认识到实践的多次反复才能完成。'
        ] },
        { type: 'paragraph', text: '文章强调，代表先进阶级的正确思想一旦被群众掌握，就会变成改造社会、改造世界的物质力量。这就把认识论与群众史观、实践观统一起来。' },
        { type: 'table', headers: ['飞跃', '方向', '核心'], rows: [
          ['第一飞跃', '物质 → 精神', '感性认识上升为理性认识'],
          ['第二飞跃', '精神 → 物质', '认识回到实践，接受检验并指导实践']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="40" width="180" height="55" rx="8" fill="#e8f0fe" stroke="#4285f4"/><text x="150" y="73" font-size="15" fill="#1a3c8a" text-anchor="middle">提出设问</text><rect x="250" y="40" width="180" height="55" rx="8" fill="#fef7e0" stroke="#f9ab00"/><text x="340" y="73" font-size="15" fill="#8a6d00" text-anchor="middle">逐层推论</text><rect x="440" y="40" width="180" height="55" rx="8" fill="#e6f4ea" stroke="#34a853"/><text x="530" y="73" font-size="15" fill="#1e6b34" text-anchor="middle">得出结论</text><path d="M240 67 L250 67 M430 67 L440 67" stroke="#333" stroke-width="2" marker-end="url(#f1)"/><defs><marker id="f1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="150" font-size="14" fill="#555" text-anchor="middle">以标题设问领起，全篇围绕问题展开推论</text><text x="340" y="185" font-size="13" fill="#777" text-anchor="middle">由“从哪里来”到“如何检验”再到“变为物质力量”</text></svg>', caption: '论证思路：提出问题—逐层推论—得出结论，逻辑紧凑。' },
        { type: 'warn', label: '易错提醒', text: '注意区分“感性认识”和“理性认识”：感性认识是对事物现象的、表面的认识，理性认识是对事物本质和规律的认识，二者不能等同，但都来源于实践。' },
        { type: 'heading', text: '三、论证特点' },
        { type: 'paragraph', text: '文章以标题设问开篇，正文随即层层推论：先排除“天生”“人脑固有”，再正面阐明源于实践，最后说明认识需经实践检验。短小精悍而逻辑严密。' },
        { type: 'example', label: '设问推论示例', text: '“人的正确思想是从哪里来的？是从天上掉下来的吗？不是。是自己头脑里固有的吗？不是。人的正确思想，只能从社会实践中来。”<strong>连用设问与排除</strong>，先破后立，干净利落地确立论点。' },
        { type: 'tip', label: '阅读提示', text: '这类短论常采用“设问领起—逐层推论—收束点题”的章法，阅读时抓住设问句，就抓住了全文的逻辑骨架。' },
        { type: 'keypoint', label: '学习重点', text: '理解<strong>“人的正确思想只能从社会实践中来”</strong>的唯物认识论观点，掌握“物质—精神—物质”两个飞跃，体会从设问入手、层层推论的论证方式。' },
        { type: 'list', items: [
          '认识来源于实践，又要回到实践接受检验。',
          '第二个飞跃（精神变物质）比第一个更具伟大意义。',
          '正确思想被群众掌握，才能变成改造世界的物质力量。'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><circle cx="160" cy="120" r="55" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="160" y="116" font-size="14" fill="#1a3c8a" text-anchor="middle">实践</text><text x="160" y="136" font-size="13" fill="#1a3c8a" text-anchor="middle">（来源）</text><circle cx="520" cy="120" r="55" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="520" y="116" font-size="14" fill="#a3331f" text-anchor="middle">认识</text><text x="520" y="136" font-size="13" fill="#a3331f" text-anchor="middle">（结果）</text><path d="M215 120 L465 120" stroke="#333" stroke-width="2" marker-end="url(#m3)"/><defs><marker id="m3" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="185" font-size="14" fill="#555" text-anchor="middle">正确思想只能从社会实践中来，再回到实践</text></svg>', caption: '认识来源于实践、又回到实践的朴素图示，呼应两个飞跃。' },
        { type: 'paragraph', text: '文章用极简篇幅讲清了马克思主义认识论的精髓，是训练“理性思考”的绝佳范本，也为本单元写作任务“深化理性思考”提供了方法示范。' },
        { type: 'list', items: ['来源：社会实践是唯一来源', '过程：物质—精神—物质两个飞跃', '目的：变为改造世界的物质力量'] },
        { type: 'reading', text: '延伸：本文与马克思《关于费尔巴哈的提纲》、毛泽东《实践论》一脉相承，可互为参照理解辩证唯物论的认识论。' }
      ],
      exercises: [
        { type: 'choice', question: '“人的正确思想只能从社会实践中来”体现的认识论是？', options: ['唯心论的先验论', '唯物论的反映论（实践第一）', '不可知论', '宿命论'], answer: '唯物论的反映论（实践第一）', explanation: '文章明确否定“天生”“头脑固有”等唯心说法，主张认识来源于社会实践，属于辩证唯物论的反映论，强调实践是第一位的。其他三项均与文意相反。' },
        { type: 'choice', question: '关于认识的两个飞跃，说法正确的是？', options: ['只有物质到精神一个飞跃', '精神到物质的飞跃意义更伟大', '两个飞跃都发生在头脑中', '飞跃不需要实践'], answer: '精神到物质的飞跃意义更伟大', explanation: '文章指出第一飞跃是物质变精神，第二飞跃是精神变物质（回到实践），并强调第二个飞跃意义更加伟大，因为认识目的在于指导实践、改造世界。' },
        { type: 'fill', question: '文章以标题______开篇，随即排除错误说法，再正面阐明观点，属于“设问领起—逐层推论”的章法。', answer: '设问（提出疑问）', explanation: '本文开头即以“人的正确思想是从哪里来的？”设问，并以连续设问排除“天上掉下”“头脑固有”，再正面立论。填“设问”或“提出疑问”均可。' },
        { type: 'fill', question: '代表先进阶级的正确思想被群众掌握后，就会变成改造社会、改造世界的______力量。', answer: '物质', explanation: '原文结语指出，正确思想一旦被群众掌握，就会变成改造社会、改造世界的物质力量，体现了精神变物质的第二飞跃。答题抓住“物质力量”即可。' },
        { type: 'choice', question: '下列对本文特点概括最准确的是？', options: ['长篇铺陈、举例繁多', '短小精悍、设问推论、逻辑严密', '以抒情为主、感染力强', '用寓言故事说理'], answer: '短小精悍、设问推论、逻辑严密', explanation: '本文仅数百字却完整阐述了认识论原理，以设问领起、层层推论、先破后立，短小精悍而逻辑严密，并非铺陈、抒情或寓言说理。' }
      ]
    },

    /* ============ 第一单元 第4课 ============ */
    {
      id: 'xb2-u1-l4',
      name: '《实践是检验真理的唯一标准》',
      author: '《光明日报》特约评论员',
      chapter: '第一单元 理论的价值（科学与文化论著研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体与历史意义' },
        { type: 'paragraph', text: '本文是 1978 年 5 月 11 日《光明日报》刊发的特约评论员文章（署名“本报特约评论员”），属社论性质。它引发关于真理标准问题的大讨论，为改革开放作了重要思想准备。' },
        { type: 'keypoint', label: '核心命题', text: '文章的核心命题：<strong>实践是检验真理的唯一标准</strong>。任何理论都要不断接受实践的检验，实践是检验认识真理性的根本尺度。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="50" width="160" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4"/><text x="140" y="86" font-size="15" fill="#1a3c8a" text-anchor="middle">理论（真理）</text><rect x="460" y="50" width="160" height="60" rx="8" fill="#fef0e8" stroke="#e05d44"/><text x="540" y="86" font-size="15" fill="#a3331f" text-anchor="middle">客观实践</text><rect x="260" y="160" width="160" height="55" rx="8" fill="#e6f4ea" stroke="#34a853"/><text x="340" y="192" font-size="15" fill="#1e6b34" text-anchor="middle">检验（唯一）</text><path d="M220 80 L260 175" stroke="#333" stroke-width="2" marker-end="url(#g1)"/><path d="M460 80 L420 175" stroke="#333" stroke-width="2" marker-end="url(#g1)"/><defs><marker id="g1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="40" font-size="13" fill="#555" text-anchor="middle">理论必须回到实践中接受检验</text></svg>', caption: '实践作为检验真理的唯一标准：理论唯有通过实践才能判明真伪。' },
        { type: 'heading', text: '二、核心论点展开' },
        { type: 'list', items: [
          '检验真理的标准只能是社会实践，这是由真理的本性和实践的特点决定的。',
          '理论之所以是真理，不在于它被谁宣布，而在于它经得起实践检验。',
          '马克思主义本身也要在实践中不断接受检验、丰富发展，不能当作僵化教条。',
          '真理是在同谬误作斗争、并不断由实践检验中发展的。'
        ] },
        { type: 'paragraph', text: '文章区分了“真理的标准”与“真理的内容”：真理的内容是客观的，但检验它是否真理的标准只能是社会实践，二者不可混淆。' },
        { type: 'table', headers: ['维度', '观点'], rows: [
          ['检验标准', '社会实践是检验真理的唯一标准'],
          ['对待理论', '理论需经实践检验，不可奉为教条'],
          ['真理发展', '真理在实践检验与同谬误斗争中发展']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="180" height="55" rx="8" fill="#e8f0fe" stroke="#4285f4"/><text x="130" y="73" font-size="14" fill="#1a3c8a" text-anchor="middle">提出标准</text><rect x="250" y="40" width="180" height="55" rx="8" fill="#fef7e0" stroke="#f9ab00"/><text x="340" y="73" font-size="14" fill="#8a6d00" text-anchor="middle">理论论证</text><rect x="460" y="40" width="180" height="55" rx="8" fill="#e6f4ea" stroke="#34a853"/><text x="550" y="73" font-size="14" fill="#1e6b34" text-anchor="middle">事实印证</text><path d="M220 67 L250 67 M430 67 L460 67" stroke="#333" stroke-width="2" marker-end="url(#h1)"/><defs><marker id="h1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="150" font-size="14" fill="#555" text-anchor="middle">“标准—论证—印证”的论证结构</text><text x="340" y="185" font-size="13" fill="#777" text-anchor="middle">以事实为论据、理论联系实际，是本文鲜明特色</text></svg>', caption: '论证结构：阐明标准—理论论证—事实印证，以事实为论据。' },
        { type: 'warn', label: '易错提醒', text: '“唯一标准”不等于“唯一来源”。实践是检验标准，而认识的唯一来源也是实践；但检验标准之所以是实践，关键在于实践具有把主观与客观联系起来的特性。' },
        { type: 'heading', text: '三、论证艺术' },
        { type: 'paragraph', text: '文章大量引用马克思、恩格斯、毛泽东的论述作为理论依据，同时以自然科学和社会历史的事实作为论据，做到理论联系实际、以事实服人。' },
        { type: 'example', label: '事实论据示例', text: '文中以门捷列夫的元素周期律、哥白尼的太阳中心说等为例，说明<strong>科学理论最终都要由实践来确证</strong>。这些典型事实使抽象命题得到有力支撑。' },
        { type: 'tip', label: '历史链接', text: '本文引发的“真理标准大讨论”，冲破了“两个凡是”的思想束缚，是改革开放的思想先导，学习时应联系这一历史背景理解其意义。' },
        { type: 'keypoint', label: '学习重点', text: '把握<strong>“实践是检验真理的唯一标准”</strong>这一核心命题及其历史意义，学习理论联系实际、以事实为论据的论证方法。' },
        { type: 'list', items: [
          '检验标准只能是社会实践，由真理本性与实践特点决定。',
          '马克思主义也要在实践中接受检验、丰富发展。',
          '真理在同谬误斗争与不断实践中向前发展。'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><polygon points="340,40 540,160 140,160" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="340" y="80" font-size="14" fill="#1a3c8a" text-anchor="middle">提出标准</text><text x="470" y="170" font-size="14" fill="#a3331f" text-anchor="middle">事实印证</text><text x="210" y="170" font-size="14" fill="#1e6b34" text-anchor="middle">理论论证</text><path d="M340 95 L210 150 M340 95 L470 150" stroke="#333" stroke-width="1.5"/><text x="340" y="210" font-size="13" fill="#777" text-anchor="middle">“标准—论证—印证”三角互撑，论证稳固有力</text></svg>', caption: '本文论证三角：标准、论证、印证相互支撑，以事实为据。' },
        { type: 'paragraph', text: '本文以理论上对“唯一标准”的阐明、事实上对科学史与社会实践的指证，完成了一次思想解放的论证，其“以事实为论据”的写法尤具示范意义。' },
        { type: 'list', items: ['核心：实践是唯一标准', '方法：理论联系实际、以事实为据', '意义：冲破教条、解放思想'] },
        { type: 'reading', text: '延伸：可将本文与《人的正确思想是从哪里来的？》对读，二者都强调实践在认识中的决定性作用，互为补充。' }
      ],
      exercises: [
        { type: 'choice', question: '本文的文体性质是？', options: ['通讯报道', '社论（特约评论员文章）', '学术论文', '小说'], answer: '社论（特约评论员文章）', explanation: '本文是《光明日报》1978 年刊发的特约评论员文章，具有社论性质，旨在阐明“实践是检验真理的唯一标准”这一重大思想原则，引发全国大讨论。' },
        { type: 'choice', question: '文中说马克思主义也要在实践中不断检验、发展，这说明？', options: ['马克思主义不是真理', '真理不是僵化教条，要在实践中发展', '实践标准不适用于马克思主义', '理论可以脱离实践'], answer: '真理不是僵化教条，要在实践中发展', explanation: '文章强调任何理论包括马克思主义都要接受实践检验并不断发展，反对把理论当作僵化不变的教条。这恰恰说明真理是发展的，而非否定马克思主义的真理性。' },
        { type: 'fill', question: '检验真理的标准只能是______，这是由真理的本性和实践的特点决定的。', answer: '社会实践', explanation: '文章核心论点即“实践是检验真理的唯一标准”。社会实践之所以是唯一标准，在于它兼有普遍性与直接现实性，能把主观与客观联系起来加以对照。' },
        { type: 'fill', question: '本文与《人的正确思想是从哪里来的？》共同强调______在认识中的决定性作用。', answer: '实践', explanation: '两文都坚持辩证唯物论：前者主张实践是检验真理的唯一标准，后者主张正确思想只能从实践中来，核心都落在“实践第一”上。' },
        { type: 'choice', question: '下列对本文论证特点概括最准确的是？', options: ['以抒情渲染为主', '理论联系实际，以事实为论据', '通篇用寓言说理', '只引经典不举实例'], answer: '理论联系实际，以事实为论据', explanation: '文章既引马恩毛经典论述作理论支撑，又以科学史与社会事实为论据，理论联系实际、以事实服人，是其最鲜明的论证特色。' }
      ]
    },

    /* ============ 第一单元 第5课 ============ */
    {
      id: 'xb2-u1-l5',
      name: '《修辞立其诚》',
      author: '张岱年',
      chapter: '第一单元 理论的价值（科学与文化论著研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体与题目出处' },
        { type: 'paragraph', text: '本文是张岱年的学术论文。“修辞立其诚”语出《易传·文言》：“修辞立其诚，所以居业也。”原指撰文修辞要表现作者的真实心意，张岱年借以论述为学与做人的根本准则。' },
        { type: 'keypoint', label: '核心内涵', text: '“修辞立其诚”的当代阐释：<strong>发言著论写文章要坚持真实性，为人处世要表里如一</strong>。“诚”包括名实一致、言行一致、表里一致三层含义。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><circle cx="340" cy="60" r="46" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="340" y="56" font-size="17" fill="#1a3c8a" text-anchor="middle">诚</text><text x="340" y="78" font-size="13" fill="#1a3c8a" text-anchor="middle">修辞立其诚</text><circle cx="150" cy="170" r="44" fill="#fef0e8" stroke="#e05d44"/><text x="150" y="166" font-size="14" fill="#a3331f" text-anchor="middle">名实一致</text><text x="150" y="184" font-size="12" fill="#a3331f" text-anchor="middle">言辞符事实</text><circle cx="340" cy="170" r="44" fill="#fef7e0" stroke="#f9ab00"/><text x="340" y="166" font-size="14" fill="#8a6d00" text-anchor="middle">言行一致</text><text x="340" y="184" font-size="12" fill="#8a6d00" text-anchor="middle">说的做到</text><circle cx="530" cy="170" r="44" fill="#e6f4ea" stroke="#34a853"/><text x="530" y="166" font-size="14" fill="#1e6b34" text-anchor="middle">表里一致</text><text x="530" y="184" font-size="12" fill="#1e6b34" text-anchor="middle">内外相符</text><path d="M340 106 L150 130 M340 106 L340 126 M340 106 L530 130" stroke="#333" stroke-width="1.5"/></svg>', caption: '“诚”的三层含义：名实一致、言行一致、表里一致，构成有机整体。' },
        { type: 'heading', text: '二、论述层次' },
        { type: 'list', items: [
          '从“立其诚”的出处与古义说起，引出对“诚”的哲学阐释。',
          '分论“名实一致”（言辞符合事实）、“言行一致”（说的做到）、“表里一致”（内心与外在不悖）。',
          '由为学上的“真”上升到为人上的“诚”，指出这是端正学风、世风的根本。'
        ] },
        { type: 'paragraph', text: '文章将古老的修身格言转化为现代学术与人格建设的准则，强调追求真理、不说假话，在认识论与伦理学之间建立了联系。' },
        { type: 'table', headers: ['层次', '内涵', '要求'], rows: [
          ['名实一致', '言辞与事实相符', '不虚构、不夸大'],
          ['言行一致', '说的与做的一致', '言必信、行必果'],
          ['表里一致', '内心与外表统一', '不虚伪、不粉饰']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="170" height="55" rx="8" fill="#e8f0fe" stroke="#4285f4"/><text x="125" y="73" font-size="14" fill="#1a3c8a" text-anchor="middle">引经据典</text><rect x="255" y="40" width="170" height="55" rx="8" fill="#fef7e0" stroke="#f9ab00"/><text x="340" y="73" font-size="14" fill="#8a6d00" text-anchor="middle">逐层阐发</text><rect x="470" y="40" width="170" height="55" rx="8" fill="#e6f4ea" stroke="#34a853"/><text x="555" y="73" font-size="14" fill="#1e6b34" text-anchor="middle">升华立意</text><path d="M210 67 L255 67 M425 67 L470 67" stroke="#333" stroke-width="2" marker-end="url(#i1)"/><defs><marker id="i1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="150" font-size="14" fill="#555" text-anchor="middle">“据典—分论—升华”的学术论文常见写法</text><text x="340" y="185" font-size="13" fill="#777" text-anchor="middle">先引《易传》立据，再分三层展开，最后落到为学为人</text></svg>', caption: '论述层次：引经据典—逐层阐发—升华立意，层层递进。' },
        { type: 'warn', label: '易错提醒', text: '“修辞立其诚”的“修辞”不是今天狭义的“修饰文辞”，而是指<strong>撰述、立言</strong>；“立其诚”是确立真实性。不要把“修辞”误读为单纯讲究辞藻华丽。' },
        { type: 'heading', text: '三、论证艺术' },
        { type: 'paragraph', text: '文章主要采用引经据典、逐层阐发的方法。先立足经典原句，再结合现代意义分点阐释，逻辑清晰，学术性与思想性兼具。' },
        { type: 'example', label: '引经据典示例', text: '开头即引《易传》“修辞立其诚，所以居业也”，<strong>以此为根脉</strong>，再将“诚”拆为名实、言行、表里三层。这种“寻根—分解—落实”的写法，是学术论文常见的立论路径。' },
        { type: 'tip', label: '写作迁移', text: '写议论文也可借鉴此法：先确立一个权威或经典支点，再分维度展开，既显学养又结构分明。' },
        { type: 'keypoint', label: '学习重点', text: '理解<strong>“修辞立其诚”</strong>的哲学内涵及对为学为人的指导意义，学习引经据典、逐层阐发的论述方式。' },
        { type: 'list', items: [
          '“诚”包含名实、言行、表里三层一致性。',
          '为学求“真”，为人求“诚”，二者统一于真实性。',
          '反对虚假浮夸，是端正学风世风的根本。'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="50" width="240" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4"/><text x="180" y="86" font-size="15" fill="#1a3c8a" text-anchor="middle">为学求真</text><rect x="380" y="50" width="240" height="60" rx="8" fill="#fef0e8" stroke="#e05d44"/><text x="500" y="86" font-size="15" fill="#a3331f" text-anchor="middle">为人求诚</text><path d="M300 80 L380 80" stroke="#333" stroke-width="2" marker-end="url(#m5)"/><defs><marker id="m5" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="160" font-size="14" fill="#555" text-anchor="middle">“真”与“诚”统一于真实性</text><text x="340" y="195" font-size="13" fill="#777" text-anchor="middle">为学要真、为人要诚，二者不可分割</text></svg>', caption: '为学求真与为人求诚通过“真实性”统一，是本文主旨的凝练。' },
        { type: 'paragraph', text: '文章把古典格言转化为现代学术与人格建设的准则，短小精悍却意蕴深远，启示我们：做学问要追求真知，做人要坚守真诚。' },
        { type: 'list', items: ['三层“一致”共同构成“诚”', '为学求真、为人求诚统一于真实性', '反对虚假浮夸，端正学风世风'] },
        { type: 'reading', text: '延伸：张岱年将其置于“文化综合创新”的脉络中，可结合其哲学史著作理解“诚”在现代价值重建中的意义。' }
      ],
      exercises: [
        { type: 'choice', question: '“修辞立其诚”中“修辞”在文中的准确含义是？', options: ['修饰文辞使其华丽', '撰述、立言', '朗诵技巧', '修辞格运用'], answer: '撰述、立言', explanation: '文章指出“修辞”古义指撰述、立言，并非今天狭义的修饰辞藻；“立其诚”即确立真实性。A 项把“修辞”误读为讲究华丽，是常见误区。' },
        { type: 'choice', question: '文中“诚”的三层含义不包括？', options: ['名实一致', '言行一致', '表里一致', '内外矛盾'], answer: '内外矛盾', explanation: '文章明确把“诚”分为名实一致、言行一致、表里一致三层，三者都指向“一致、统一”，而“内外矛盾”恰与“表里一致”相反，不属于“诚”的内涵。' },
        { type: 'fill', question: '“修辞立其诚”语出《______·文言》：“修辞立其诚，所以居业也。”', answer: '易传', explanation: '原句出自《易传·文言》，张岱年据此展开论述。“易传”亦可答“周易（易传）”，关键指出其经典出处。' },
        { type: 'fill', question: '本文主要采用引经据典、______（四字）的论述方式，由为学之“真”上升到为人之“诚”。', answer: '逐层阐发', explanation: '文章先引《易传》立据，再将“诚”分三层逐点展开，最后升华，属于“引经据典、逐层阐发”的写法。填“逐层阐发”即可。' },
        { type: 'choice', question: '下列对本文主旨概括最准确的是？', options: ['讲究文章辞藻技巧', '为学为人都要坚持真实性、表里如一', '批判传统文化', '主张凡事不必认真'], answer: '为学为人都要坚持真实性、表里如一', explanation: '文章借古语阐释“诚”的三层含义，强调发言著论要坚持真实、为人要表里如一，主旨是为学求真、为人求诚，而非讲究辞藻或否定传统。' }
      ]
    },

    /* ============ 第一单元 第6课 ============ */
    {
      id: 'xb2-u1-l6',
      name: '《怜悯是人的天性》',
      author: '卢梭',
      chapter: '第一单元 理论的价值（科学与文化论著研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、文体与思想背景' },
        { type: 'paragraph', text: '本文节选自卢梭《论人类不平等的起源和基础》的序言。卢梭是法国启蒙思想家，文章以雄辩的推理批驳霍布斯“人天生是自私自利的”观点，论证怜悯心是人的天然禀赋。' },
        { type: 'keypoint', label: '核心观点', text: '卢梭主张：<strong>怜悯心是人的天性</strong>，它先于理性、先于自爱，使人见同类受苦而感同身受，从而抑制自私，是一切社会美德的源头。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="180" height="60" rx="8" fill="#fdecea" stroke="#e05d44"/><text x="130" y="70" font-size="14" fill="#a3331f" text-anchor="middle">霍布斯观点</text><text x="130" y="90" font-size="12" fill="#a3331f" text-anchor="middle">人天生自私好斗</text><rect x="460" y="40" width="180" height="60" rx="8" fill="#e6f4ea" stroke="#34a853"/><text x="550" y="70" font-size="14" fill="#1e6b34" text-anchor="middle">卢梭观点</text><text x="550" y="90" font-size="12" fill="#1e6b34" text-anchor="middle">怜悯是天性</text><path d="M220 70 L460 70" stroke="#333" stroke-width="2" marker-end="url(#j1)"/><defs><marker id="j1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="140" font-size="14" fill="#555" text-anchor="middle">卢梭以推理批驳霍布斯，立“怜悯天性”说</text><text x="340" y="180" font-size="13" fill="#777" text-anchor="middle">怜悯心先于理性与自爱，是美德第一源泉</text></svg>', caption: '卢梭与霍布斯的人性论对立：怜悯天性 vs 天生自私。' },
        { type: 'heading', text: '二、论证思路' },
        { type: 'list', items: [
          '先界定“怜悯心”：在不损害自身前提下，对同类苦难的天然同情。',
          '以动物、原始人为例，说明怜悯先于理性，是人类自然情感。',
          '批驳霍布斯：若无怜悯，人类早因相互残杀而灭绝。',
          '指出怜悯心催生仁爱、宽厚、人道等一切社会德性。'
        ] },
        { type: 'paragraph', text: '卢梭的推理带有鲜明的启蒙理性色彩：他不诉诸神学，而是从“自然状态”出发，用经验与逻辑说明怜悯心的普遍性与先在性。' },
        { type: 'table', headers: ['对比项', '霍布斯', '卢梭'], rows: [
          ['人性预设', '天生自私、争斗', '天生具有怜悯心'],
          ['理性地位', '理性主导人性', '怜悯先于理性'],
          ['社会前提', '需强力契约约束', '天然同情抑制自私']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><ellipse cx="150" cy="120" rx="95" ry="48" fill="#e8f0fe" stroke="#4285f4"/><text x="150" y="116" font-size="15" fill="#1a3c8a" text-anchor="middle">自然状态</text><text x="150" y="136" font-size="13" fill="#1a3c8a" text-anchor="middle">（前提）</text><ellipse cx="530" cy="120" rx="95" ry="48" fill="#fef0e8" stroke="#e05d44"/><text x="530" y="116" font-size="15" fill="#a3331f" text-anchor="middle">怜悯天性</text><text x="530" y="136" font-size="13" fill="#a3331f" text-anchor="middle">（结论）</text><path d="M245 110 C360 60 420 60 435 110" stroke="#333" stroke-width="2" fill="none" marker-end="url(#k1)"/><path d="M435 130 C420 180 360 180 245 130" stroke="#333" stroke-width="2" fill="none" marker-end="url(#k1)"/><defs><marker id="k1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="200" font-size="13" fill="#555" text-anchor="middle">从“自然状态”前提到“怜悯天性”结论的推理链条</text></svg>', caption: '卢梭的推理：由自然状态前提到怜悯天性的逻辑推演。' },
        { type: 'warn', label: '易错提醒', text: '卢梭所说的“怜悯心”不是软弱，而是<strong>抑制自私、通向仁爱的天然力量</strong>。它与“自爱”不同：自爱关注自我保全，怜悯则指向对他人的同情。' },
        { type: 'heading', text: '三、论证艺术' },
        { type: 'paragraph', text: '文章以雄辩的推理和鲜明的对比展开。先用定义与事例正面立论，再以“反证”（若无怜悯人类早已灭绝）强化，逻辑有力、气势充沛。' },
        { type: 'example', label: '雄辩推理示例', text: '卢梭写道：如果人天生只知自私自利，那彼此相残之下人类早已消亡；<strong>然而人类依然存在并相互同情</strong>，可见怜悯心先于自私。这是典型的“归谬—反证”式雄辩。' },
        { type: 'tip', label: '阅读提示', text: '读启蒙论著要抓住“人性预设—推理—结论”的骨架，并注意作者如何用对比与反证增强气势，这正是卢梭论说文“汪洋恣肆”的风格来源。' },
        { type: 'keypoint', label: '学习重点', text: '理解<strong>“怜悯是人的天性”</strong>这一核心命题，体会卢梭以雄辩推理和对比展开论述的启蒙风格。' },
        { type: 'list', items: [
          '怜悯心先于理性与自爱，是天然同情。',
          '怜悯心是一切社会美德的第一源泉。',
          '卢梭借此批判“人天生自私”的性恶预设。'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="120" r="55" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="150" y="116" font-size="14" fill="#1a3c8a" text-anchor="middle">怜悯天性</text><text x="150" y="136" font-size="13" fill="#1a3c8a" text-anchor="middle">（前提）</text><path d="M205 120 L415 120" stroke="#333" stroke-width="2" marker-end="url(#m6)"/><defs><marker id="m6" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><rect x="430" y="90" width="200" height="60" rx="8" fill="#e6f4ea" stroke="#34a853"/><text x="530" y="126" font-size="14" fill="#1e6b34" text-anchor="middle">一切美德源泉</text><text x="340" y="190" font-size="13" fill="#777" text-anchor="middle">由天然怜悯推及仁爱、宽厚、人道</text></svg>', caption: '卢梭逻辑：怜悯天性是一切社会美德的第一源泉。' },
        { type: 'paragraph', text: '卢梭以雄辩推理为“怜悯天性说”奠基，既批判了“人天生自私”的性恶预设，也对后世人道主义与启蒙思想影响深远。' },
        { type: 'list', items: ['怜悯先于理性与自爱', '是一切社会美德之源', '批判“天生自私”的人性预设'] },
        { type: 'reading', text: '延伸：可联系孟子“恻隐之心”与卢梭“怜悯心”的异同，理解中西启蒙对人性的不同预设与相似关怀。' }
      ],
      exercises: [
        { type: 'choice', question: '卢梭在本文中主要批驳的是谁的人性观点？', options: ['孟子', '霍布斯', '柏拉图', '孔子'], answer: '霍布斯', explanation: '文章明确批驳霍布斯“人天生是自私自利、相互争斗”的观点，提出怜悯心才是人的天性。孟子、孔子主性善或仁，与卢梭有相通处而非被批驳对象。' },
        { type: 'choice', question: '关于“怜悯心”，符合卢梭观点的是？', options: ['怜悯心源于后天教化', '怜悯心是人的天性，先于理性', '怜悯心等同于软弱', '怜悯心只属于强者'], answer: '怜悯心是人的天性，先于理性', explanation: '卢梭认为怜悯心是人天然具有、先于理性与自爱的情感，使人见同类受苦而同情，是一切美德源头。它并非后天教化，也非软弱，而是抑制自私的力量。' },
        { type: 'fill', question: '卢梭认为，怜悯心先于理性和______，是一切社会美德的第一源泉。', answer: '自爱', explanation: '文章指出怜悯心不仅先于理性，也先于“自爱”（对自身保全的关注），它天然指向对他人的同情。填“自爱”即可。' },
        { type: 'fill', question: '本文节选自卢梭的《论人类______的起源和基础》序言。', answer: '不平等', explanation: '原文出自《论人类不平等的起源和基础》序言。卢梭借怜悯天性说，为其关于人类不平等起源的论述提供人性论前提。' },
        { type: 'choice', question: '下列对本文论证特点概括最准确的是？', options: ['以寓言说理为主', '雄辩推理、对比鲜明、气势充沛', '平铺直叙、少有论证', '以抒情为主'], answer: '雄辩推理、对比鲜明、气势充沛', explanation: '文章以定义、事例正面立论，再以反证（若无怜悯人类早已灭绝）强化，并与霍布斯观点对比，体现卢梭雄辩推理、对比鲜明、气势充沛的启蒙论说风格。' }
      ]
    },

    /* ============ 第一单元 第7课 ============ */
    {
      id: 'xb2-u1-l7',
      name: '《人应当坚持正义》',
      author: '柏拉图',
      chapter: '第一单元 理论的价值（科学与文化论著研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、文体与文本来源' },
        { type: 'paragraph', text: '本文节选自柏拉图《理想国》第一卷，以对话体记录苏格拉底与友人克法洛斯、玻勒马霍斯、色拉叙马霍斯等人的辩论，探讨“什么是正义”。本课节选聚焦苏格拉底“人应当坚持正义”的立场。' },
        { type: 'keypoint', label: '核心主张', text: '苏格拉底借层层诘问表明：<strong>正义是灵魂的内在秩序与德性，人应当坚持正义</strong>，因为正义使人完善，不正义使人败坏，正义者比不正义者更幸福。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="40" width="180" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4"/><text x="150" y="66" font-size="14" fill="#1a3c8a" text-anchor="middle">对方提出</text><text x="150" y="86" font-size="12" fill="#1a3c8a" text-anchor="middle">定义/观点</text><rect x="250" y="40" width="180" height="60" rx="8" fill="#fef7e0" stroke="#f9ab00"/><text x="340" y="66" font-size="14" fill="#8a6d00" text-anchor="middle">苏格拉底诘问</text><text x="340" y="86" font-size="12" fill="#8a6d00" text-anchor="middle">（反例/矛盾）</text><rect x="440" y="40" width="180" height="60" rx="8" fill="#e6f4ea" stroke="#34a853"/><text x="530" y="66" font-size="14" fill="#1e6b34" text-anchor="middle">逼近真理</text><text x="530" y="86" font-size="12" fill="#1e6b34" text-anchor="middle">修正认识</text><path d="M240 70 L250 70 M430 70 L440 70" stroke="#333" stroke-width="2" marker-end="url(#l1)"/><defs><marker id="l1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="160" font-size="14" fill="#555" text-anchor="middle">“诘问—矛盾—修正”的苏格拉底式问答</text><text x="340" y="195" font-size="13" fill="#777" text-anchor="middle">不直授结论，而引导对话者自己抵达真理</text></svg>', caption: '苏格拉底式问答：以诘问揭示矛盾，引导对话者逼近真理。' },
        { type: 'heading', text: '二、论辩思路' },
        { type: 'list', items: [
          '先让对方给出“正义”的定义（如“欠债还债”“强者利益”）。',
          '再以反例或逻辑矛盾诘问，使原定义站不住脚。',
          '通过一步步厘清，逼近“正义是灵魂各部分的和谐秩序”这一立场。',
          '最终论证：正义者内心有序、完善幸福，不正义者紊乱败坏。'
        ] },
        { type: 'paragraph', text: '这种对话体不是单纯说教，而是通过问答“助产”出真理，体现了柏拉图笔下苏格拉底“精神助产术”的特点。' },
        { type: 'table', headers: ['环节', '作用'], rows: [
          ['提出定义', '让观点显明，便于检验'],
          ['诘问矛盾', '暴露定义漏洞，迫使反思'],
          ['引导修正', '逐步逼近更合理的认识']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><circle cx="340" cy="70" r="50" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="340" y="66" font-size="15" fill="#1a3c8a" text-anchor="middle">正义</text><text x="340" y="86" font-size="12" fill="#1a3c8a" text-anchor="middle">灵魂秩序</text><rect x="120" y="150" width="140" height="50" rx="8" fill="#e6f4ea" stroke="#34a853"/><text x="190" y="180" font-size="13" fill="#1e6b34" text-anchor="middle">正义者：完善幸福</text><rect x="420" y="150" width="140" height="50" rx="8" fill="#fdecea" stroke="#e05d44"/><text x="490" y="180" font-size="13" fill="#a3331f" text-anchor="middle">不正义者：紊乱败坏</text><path d="M300 110 L200 150 M380 110 L480 150" stroke="#333" stroke-width="1.5"/></svg>', caption: '正义与不正义的对照：灵魂有序则完善幸福，紊乱则败坏。' },
        { type: 'warn', label: '易错提醒', text: '本课节选讨论的是“人应当坚持正义”的伦理立场，不能把对话中他人（如色拉叙马霍斯）“正义是强者利益”的说法当成作者结论。作者借苏格拉底之口否定了它。' },
        { type: 'heading', text: '三、论证艺术' },
        { type: 'paragraph', text: '文章采用对话体，通篇由苏格拉底的连续诘问推动。他不正面布道，而是让对方在回答中暴露矛盾，从而“自己”走向真理，逻辑推进自然而有张力。' },
        { type: 'example', label: '逻辑推理示例', text: '当对方说“正义是强者利益”时，苏格拉底追问：强者会不会命令下属做对自己有害的事？若会，则“正义”反成损害强者，<strong>原定义自相矛盾</strong>。这种以子之矛攻子之盾，正是逻辑诘问的精髓。' },
        { type: 'tip', label: '写作任务链接', text: '本单元写作任务是“深化理性思考”。可借鉴苏格拉底式诘问：对自己想当然的观点多问几个“为什么”“有无反例”，思考便会更严密。' },
        { type: 'keypoint', label: '学习重点', text: '理解<strong>“人应当坚持正义”</strong>的哲学主张，学习苏格拉底式问答与逻辑推理，体会对话体论著的思辨魅力。' },
        { type: 'list', items: [
          '正义是灵魂的内在秩序与德性。',
          '正义者内心有序而幸福，不正义者紊乱而败坏。',
          '苏格拉底式诘问：以矛盾逼显真理，而非直授结论。'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="50" width="170" height="55" rx="8" fill="#e8f0fe" stroke="#4285f4"/><text x="145" y="83" font-size="14" fill="#1a3c8a" text-anchor="middle">提出定义</text><rect x="255" y="50" width="170" height="55" rx="8" fill="#fef7e0" stroke="#f9ab00"/><text x="340" y="83" font-size="14" fill="#8a6d00" text-anchor="middle">诘问矛盾</text><rect x="450" y="50" width="170" height="55" rx="8" fill="#e6f4ea" stroke="#34a853"/><text x="535" y="83" font-size="14" fill="#1e6b34" text-anchor="middle">逼近真理</text><path d="M230 77 L255 77 M425 77 L450 77" stroke="#333" stroke-width="2" marker-end="url(#m7)"/><defs><marker id="m7" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><path d="M535 105 L340 130 L145 105" stroke="#999" stroke-width="1.2" stroke-dasharray="4 3" fill="none"/><text x="340" y="180" font-size="14" fill="#555" text-anchor="middle">“定义—诘问—修正”循环，真理在交锋中显现</text></svg>', caption: '苏格拉底式问答的循环：定义被诘问修正，逐步逼近正义本质。' },
        { type: 'paragraph', text: '对话体让真理在交锋中显现，是训练逻辑思维与理性思考的独特体裁，也为本单元“深化理性思考”的写作任务提供了方法启迪。' },
        { type: 'list', items: ['方法：苏格拉底式诘问', '目标：逼近正义的本质', '立场：人应当坚持正义'] },
        { type: 'reading', text: '延伸：《理想国》后续各卷将正义从个人灵魂推广到城邦结构，可联系全书理解“个人—城邦”的同构隐喻。' }
      ],
      exercises: [
        { type: 'choice', question: '本文的文体是？', options: ['书信体', '对话体（记录苏格拉底辩论）', '政论文', '学术论文'], answer: '对话体（记录苏格拉底辩论）', explanation: '本文节选自《理想国》第一卷，以对话体记录苏格拉底与他人的论辩，通过问答探讨“什么是正义”，属于典型的对话体哲学文本。' },
        { type: 'choice', question: '苏格拉底“精神助产术”的特点是？', options: ['直接宣布结论', '以诘问揭示矛盾、引导对话者自己抵达真理', '用寓言讲故事', '以抒情感染人'], answer: '以诘问揭示矛盾、引导对话者自己抵达真理', explanation: '苏格拉底不正面灌输，而是连续诘问让对方暴露逻辑矛盾，从而“助产”出更合理的认识。这正是“精神助产术”的核心，而非直授结论或用寓言。' },
        { type: 'fill', question: '在对话中，色拉叙马霍斯提出“正义是______的利益”，被苏格拉底以逻辑矛盾驳倒。', answer: '强者', explanation: '色拉叙马霍斯主张“正义是强者的利益”，苏格拉底通过追问强者命令可能损己而使其自相矛盾，从而否定该说。填“强者”即可。' },
        { type: 'fill', question: '苏格拉底认为，正义是灵魂的______，正义者内心有序而幸福。', answer: '内在秩序（和谐）', explanation: '文中立场是：正义意味着灵魂各部分的和谐秩序，正义者因此完善幸福。可答“内在秩序”“和谐秩序”等，核心在“有序”。' },
        { type: 'choice', question: '下列对本文主旨概括最准确的是？', options: ['论证正义毫无价值', '人应当坚持正义，正义是灵魂德性', '鼓吹弱肉强食', '否定理性思考'], answer: '人应当坚持正义，正义是灵魂德性', explanation: '通过层层诘问，作者（借苏格拉底）阐明正义是灵魂的内在秩序与德性，人应当坚持正义，因为正义者完善幸福、不正义者败坏。其余选项均与文意相反。' }
      ]
    }

  );
})();
