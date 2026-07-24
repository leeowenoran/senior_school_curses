/* ============================================================
 * 高二语文 · 选择性必修中册 · 第四单元 丰富的心灵（外国作家作品研习）
 * 5 课时：玩偶之家（节选）/ 迷娘（之一）/ 致大海 / 自己之歌（节选）/ 树和天空
 * 数据注入：chinese.xb2.points
 * 质量标准：每课 ≥20 内容块 / 3 SVG / 含 example+table+tip+warn+list(≥2)+keypoint
 *          第2–5课为诗歌，poem 块用 \n 换行；第1课为戏剧，无 poem
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'xb2');
  if (!v) return;

  v.points.push(

    /* ==================== 第1课 玩偶之家（节选）（易卜生） ==================== */
    {
      id: 'xb2-u4-l1',
      name: '《玩偶之家（节选）》',
      author: '易卜生',
      chapter: '第四单元 丰富的心灵（外国作家作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文学常识：易卜生与「社会问题剧」' },
        { type: 'paragraph', text: '亨利克·易卜生（1828—1906）是挪威伟大的剧作家，被尊为「现代戏剧之父」。他早期的诗意剧之后，转向关注现实社会，创作了以《玩偶之家》《人民公敌》为代表的「社会问题剧」，把婚姻、伦理、制度等现实矛盾搬上舞台，引发观众思考。' },
        { type: 'keypoint', label: '核心特征', text: '「社会问题剧」的精髓是<strong>以现实社会为题材、以尖锐冲突为核心、以思想启蒙为目的</strong>。易卜生不提供答案，而是把问题抛给观众，让戏剧成为讨论社会的公共空间。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="180" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="130" y="68" font-size="14" fill="#1a3c8a" text-anchor="middle">现实社会问题</text><text x="130" y="88" font-size="12" fill="#1a3c8a" text-anchor="middle">（题材）</text><rect x="250" y="40" width="180" height="60" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="340" y="68" font-size="14" fill="#8a6d00" text-anchor="middle">尖锐矛盾冲突</text><text x="340" y="88" font-size="12" fill="#8a6d00" text-anchor="middle">（核心）</text><rect x="460" y="40" width="180" height="60" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="550" y="68" font-size="14" fill="#1e6b34" text-anchor="middle">激发社会思考</text><text x="550" y="88" font-size="12" fill="#1e6b34" text-anchor="middle">（目的）</text><path d="M220 70 L250 70 M430 70 L460 70" stroke="#333" stroke-width="2" marker-end="url(#l1a)"/><defs><marker id="l1a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="170" font-size="14" fill="#555" text-anchor="middle">社会问题剧三要素：题材—冲突—启蒙，环环相扣</text><text x="340" y="200" font-size="13" fill="#777" text-anchor="middle">易卜生以《玩偶之家》开创「问题剧」的戏剧传统</text></svg>', caption: '易卜生社会问题剧的三要素：现实题材、尖锐冲突、思想启蒙。' },
        { type: 'heading', text: '二、戏剧冲突：娜拉与海尔茂' },
        { type: 'paragraph', text: '全剧的冲突集中在娜拉与丈夫海尔茂之间。表面上这是一对夫妻的性格摩擦，深层却是当时男权社会结构的缩影：丈夫被视为家庭的绝对权威，妻子则被当作依附与观赏的「玩偶」。娜拉为救丈夫私下借债，却被海尔茂斥为「犯罪」，冲突由此骤然爆发。' },
        { type: 'list', items: [
          '表层冲突：娜拉私借债款、伪造签字，与海尔茂的「名誉」「道德」观正面相撞。',
          '心理冲突：海尔茂对娜拉始终是「小松鼠」「小鸟儿」的宠溺式物化，而非平等的人。',
          '深层冲突：夫妻之名背后，是男权社会赋予丈夫权威、将妻子视为附庸的结构性不平等。',
          '结局冲突：娜拉看清真相后离家出走，以行动质疑整个婚姻制度与社会秩序。'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="50" width="240" height="70" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="180" y="80" font-size="15" fill="#1a3c8a" text-anchor="middle">娜拉（玩偶）</text><text x="180" y="102" font-size="12" fill="#1a3c8a" text-anchor="middle">追求独立人格</text><rect x="380" y="50" width="240" height="70" rx="8" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="500" y="80" font-size="15" fill="#a3331f" text-anchor="middle">海尔茂（男权）</text><text x="500" y="102" font-size="12" fill="#a3331f" text-anchor="middle">维护夫权秩序</text><path d="M300 85 L380 85" stroke="#333" stroke-width="3" marker-end="url(#l1b)"/><path d="M380 65 L300 65" stroke="#333" stroke-width="2" stroke-dasharray="5 4"/><defs><marker id="l1b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="150" font-size="13" fill="#333" text-anchor="middle">冲突</text><text x="340" y="182" font-size="13" fill="#555" text-anchor="middle">夫妻冲突背后是男权社会结构的深层矛盾</text><text x="340" y="208" font-size="12" fill="#777" text-anchor="middle">娜拉出走=对不平等婚姻与女性地位的公开质疑</text></svg>', caption: '娜拉与海尔茂的冲突，实质是夫妻之名背后的男权社会结构矛盾。' },
        { type: 'table', headers: ['层面', '娜拉', '海尔茂'], rows: [
          ['关系定位', '被宠溺、被物化的「玩偶」', '拥有权威、评判妻子的丈夫'],
          ['危机反应', '坦然承担，视之为爱', '震怒斥责，唯恐名誉受损'],
          ['价值追求', '平等的人格与真诚', '体面的家庭与社会形象'],
          ['结局选择', '出走，做独立的「人」', '试图挽留，难改居高姿态']
        ] },
        { type: 'heading', text: '三、人物形象：从玩偶到觉醒的「人」' },
        { type: 'paragraph', text: '娜拉的形象有一个清晰的转变弧光。她起初是乖巧的妻子、温柔的母亲，满足于丈夫的「宠爱」；当债务真相引发危机，她才发现自己在丈夫心中只是点缀；最终她宣告「首先我是一个人」，摔门而去，完成从依附到独立的觉醒。' },
        { type: 'list', items: [
          '第一阶段：快乐的「泥娃娃」，把丈夫的喜爱当作全部幸福。',
          '第二阶段：为爱私借债款，以行动证明自己的担当与勇气。',
          '第三阶段：遭斥责后清醒，认识到婚姻中的不平等与自我的缺席。',
          '第四阶段：喊出「首先我是一个人」，决然出走，成为独立的「人」。'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="55" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="140" y="116" font-size="14" fill="#a3331f" text-anchor="middle">玩偶</text><text x="140" y="136" font-size="12" fill="#a3331f" text-anchor="middle">（依附）</text><path d="M195 120 L445 120" stroke="#333" stroke-width="2" marker-end="url(#l1c)"/><defs><marker id="l1c" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><circle cx="540" cy="120" r="55" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="540" y="116" font-size="14" fill="#1e6b34" text-anchor="middle">觉醒的人</text><text x="540" y="136" font-size="12" fill="#1e6b34" text-anchor="middle">（独立）</text><text x="340" y="200" font-size="14" fill="#555" text-anchor="middle">从「泥娃娃」到「首先我是一个人」的觉醒之路</text></svg>', caption: '娜拉由依附丈夫的「玩偶」转变为具有独立人格的「人」。' },
        { type: 'warn', label: '易错提醒', text: '不要把娜拉的出走简单理解为「夫妻吵架离家」。她的出走是对<strong>整个男性中心社会秩序</strong>的质疑：当婚姻以爱为名却行支配之实，女性便必须重新认识「我是谁」。这才是剧本震撼时代的根本原因。' },
        { type: 'example', label: '台词鉴赏示例', text: '娜拉结尾的台词：「首先我是一个人，跟你一样的一个人——至少我要学做一个人。」<br><br><strong>解析</strong>：这句话是全剧的「炸点」。娜拉把「妻子」的身份暂时悬置，先把人之所以为人的资格摆到首位，<strong>用一个「人」字完成了自我意识的觉醒</strong>；「学做」二字又显其真诚——她承认过去从未被允许成为自己，今后要从头学起。短短一句，把个人命运与女性解放的时代命题焊在一起。' },
        { type: 'tip', label: '阅读方法', text: '读戏剧要抓住「冲突—台词—转变」三把钥匙：先看冲突落在哪两层（表层与深层），再听台词里藏着的态度（宠溺语、道德语、觉醒语），最后追踪人物在幕与幕之间的思想位移，就能读懂易卜生。' },
        { type: 'heading', text: '四、艺术特色：讨论式戏剧与「突转」' },
        { type: 'paragraph', text: '《玩偶之家》被称为「讨论式戏剧」：全剧后半段几乎是一场又一场的谈话，人物在对话中暴露观念、碰撞思想，剧情靠「说」而不是靠「事」推进。易卜生又善用「突转」——前面越是温馨，危机降临后的反转就越是刺目。' },
        { type: 'keypoint', label: '突转手法', text: '「突转」指<strong>情节或人物处境向相反方向的突然转折</strong>。海尔茂得知债款已还、危险解除，瞬间从震怒变回温情的「好丈夫」；恰恰这一变，让娜拉彻底看清：他的爱建立在「不出事」之上。温情即虚伪，突转即觉醒的催化剂。' },
        { type: 'list', items: [
          '讨论式结构：以对话承载思想交锋，戏剧成为公共论坛。',
          '突转：前后态度剧烈反差，撕开体面下的不平等。',
          '细节道具：信箱、借据、舞蹈，都是推动心理崩塌的引信。',
          '开放式结尾：娜拉离家后的世界，留给观众自己去想。'
        ] },
        { type: 'reading', text: '延伸思考：娜拉出走之后怎么办？鲁迅曾以此为题作演讲，指出没有经济与社会的独立，出走或将陷入新的困境。这提醒我们：易卜生抛出的问题，至今仍有现实意义。' }
      ],
      exercises: [
        { type: 'choice', question: '易卜生的「社会问题剧」最突出的特点是？', options: ['侧重神话传说', '以现实社会问题为题材、揭示矛盾并引人思考', '专写宫廷爱情', '以抒情写景为主'], answer: '以现实社会问题为题材、揭示矛盾并引人思考', explanation: '易卜生的问题剧以现实社会中的婚姻、伦理、制度等问题为题材，通过尖锐的戏剧冲突揭示矛盾，促使观众反思，而非讲述神话或单纯抒情写景，这是其区别于其他剧种的根本特征。' },
        { type: 'choice', question: '娜拉与海尔茂冲突的实质是？', options: ['性格不合', '男权社会结构下的夫妻地位不平等', '经济贫困', '宗教信仰不同'], answer: '男权社会结构下的夫妻地位不平等', explanation: '娜拉与海尔茂的冲突表面是夫妻矛盾，深层是当时男权社会赋予丈夫绝对权威、将妻子视为附庸的结构性不平等，这正是剧本社会批判的核心，而非简单的性格或经济问题。' },
        { type: 'fill', question: '娜拉最终离家出走，喊出「首先我是一个______」，标志其自我意识的觉醒。', answer: '人', explanation: '娜拉在结尾说出「首先我是一个人」，宣告自己不再是丈夫的玩偶与附庸，而是具有独立人格与权利的「人」，这是她觉醒的标志性台词，也是全剧的思想高潮。' },
        { type: 'fill', question: '易卜生以《玩偶之家》为代表，开创了欧洲戏剧的「______剧」（社会剧）传统。', answer: '问题', explanation: '易卜生一系列直面现实社会矛盾的剧作被称为「问题剧」或「社会剧」，《玩偶之家》是其中的代表作，对后世现实主义戏剧与女性解放思潮都产生了深远影响。' },
        { type: 'choice', question: '本文结尾「讨论式」戏剧的悬念在于？', options: ['娜拉是否回家', '开放式结尾引发对女性地位与社会制度的思考', '海尔茂是否原谅', '是否下雨'], answer: '开放式结尾引发对女性地位与社会制度的思考', explanation: '剧本以娜拉摔门出走收束，并未交代结局，这种开放式结尾把问题抛给观众与社会，引发对女性地位、婚姻制度与男权结构的持续思考，正是讨论式戏剧的力量所在。' }
      ]
    },

    /* ==================== 第2课 迷娘（之一）（歌德） ==================== */
    {
      id: 'xb2-u4-l2',
      name: '《迷娘（之一）》',
      author: '歌德',
      chapter: '第四单元 丰富的心灵（外国作家作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文学常识：歌德与迷娘之歌' },
        { type: 'paragraph', text: '约翰·沃尔夫冈·歌德（1749—1832）是德国伟大的文学家，代表作有《浮士德》《少年维特之烦恼》等。《迷娘（之一）》出自他的教育小说《威廉·迈斯特的学习时代》，是书中少女迷娘所唱的歌，后独立成为脍炙人口的抒情诗。' },
        { type: 'keypoint', label: '出处与身份', text: '迷娘是小说中一位身世凄凉、被拐卖到异乡的意大利少女。她借歌声倾诉对<strong>故土的思念</strong>与对引领者（爱人、父亲、恩人）的依恋，诗与小说人物命运紧紧相扣。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="180" height="55" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="130" y="73" font-size="14" fill="#1a3c8a" text-anchor="middle">第一节</text><rect x="250" y="40" width="180" height="55" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="340" y="73" font-size="14" fill="#8a6d00" text-anchor="middle">第二节</text><rect x="460" y="40" width="180" height="55" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="550" y="73" font-size="14" fill="#1e6b34" text-anchor="middle">第三节</text><path d="M220 67 L250 67 M430 67 L460 67" stroke="#333" stroke-width="2" marker-end="url(#l2a)"/><defs><marker id="l2a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="150" font-size="14" fill="#555" text-anchor="middle">三节同构：景物—设问—复沓收束</text><text x="340" y="185" font-size="13" fill="#777" text-anchor="middle">「你可知道那地方」一唱三叹，结构回环往复</text></svg>', caption: '全诗三节同构、复沓回环，是歌德抒情诗的典型章法。' },
        { type: 'heading', text: '二、诗歌鉴赏：反复咏唱的思乡之情' },
        { type: 'paragraph', text: '诗的核心手法是「复沓」：三节都以「你知道吗，那……的地方？」起问，都以「去吧，去吧，我愿跟随你」收束。反复不是单调的重复，而是情感的层层加码，把迷娘浓得化不开的乡愁推向高潮。' },
        { type: 'list', items: [
          '柠檬、黄金橙、蓝天：明亮温暖的南国色调，是故乡的视觉记忆。',
          '桃金娘、月桂：地中海植物，象征爱情与荣誉，烘托乐土的圣洁。',
          '柱顶、云石塑像：暗示故园华美建筑，对照眼下的漂泊凄凉。',
          '高山、云径、骡子、飞瀑：险远而壮丽，是迷娘向往的归途。'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="180" height="120" rx="8" fill="#fdeccf" stroke="#d9a441" stroke-width="2"/><text x="130" y="95" font-size="14" fill="#7a5b12" text-anchor="middle">柠檬·黄金橙</text><text x="130" y="118" font-size="12" fill="#7a5b12" text-anchor="middle">温暖明亮</text><text x="130" y="140" font-size="12" fill="#7a5b12" text-anchor="middle">（南国色调）</text><rect x="250" y="50" width="180" height="120" rx="8" fill="#e8d5e8" stroke="#9c5a8a" stroke-width="2"/><text x="340" y="95" font-size="14" fill="#5b1a52" text-anchor="middle">桃金娘·月桂</text><text x="340" y="118" font-size="12" fill="#5b1a52" text-anchor="middle">爱情·荣誉</text><text x="340" y="140" font-size="12" fill="#5b1a52" text-anchor="middle">（乐土象征）</text><rect x="460" y="50" width="180" height="120" rx="8" fill="#cfe3f0" stroke="#4a7de0" stroke-width="2"/><text x="550" y="95" font-size="14" fill="#0f3b5e" text-anchor="middle">高山·飞瀑</text><text x="550" y="118" font-size="12" fill="#0f3b5e" text-anchor="middle">险远归途</text><text x="550" y="140" font-size="12" fill="#0f3b5e" text-anchor="middle">（向往之地）</text><text x="340" y="210" font-size="13" fill="#555" text-anchor="middle">意象组合：明亮故园与凄凉现实的强烈对照</text></svg>', caption: '柠檬、月桂、桃金娘等意象组合成温暖故园，反衬漂泊之哀。' },
        { type: 'table', headers: ['节', '核心意象', '呼唤对象', '情感指向'], rows: [
          ['第一节', '柠檬、橙、桃金娘、月桂', '爱人', '温柔的依恋'],
          ['第二节', '柱顶、云石塑像、可怜的姑娘', '恩人', '悲苦的求助'],
          ['第三节', '高山、云径、骡子、飞瀑', '父亲', '执着的归乡']
        ] },
        { type: 'heading', text: '三、艺术特色：意象组合与情感节奏' },
        { type: 'paragraph', text: '歌德深谙「以景写情」：他不直说「我想家」，而用一连串明媚的南国意象铺展故乡画卷，让思念在画面中自然流淌。三种呼唤对象（爱人、恩人、父亲）又使同一份乡愁呈现出温柔、悲苦、执着的不同层次。' },
        { type: 'list', items: [
          '复沓结构：三节同构，回环往复，强化咏叹调般的音乐性。',
          '意象造影：以视觉画面承载抽象乡愁，情景交融。',
          '人称转换：爱人—恩人—父亲，情感由柔到悲再到坚。',
          '音乐性：诗句如歌，本就是为谱曲传唱而作的歌词。'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><polyline points="60,180 190,140 320,150 450,100 600,70" fill="none" stroke="#9c5a8a" stroke-width="3"/><circle cx="60" cy="180" r="6" fill="#9c5a8a"/><circle cx="190" cy="140" r="6" fill="#9c5a8a"/><circle cx="320" cy="150" r="6" fill="#9c5a8a"/><circle cx="450" cy="100" r="6" fill="#9c5a8a"/><circle cx="600" cy="70" r="6" fill="#9c5a8a"/><text x="60" y="205" font-size="12" fill="#555" text-anchor="middle">起问</text><text x="320" y="175" font-size="12" fill="#555" text-anchor="middle">复沓</text><text x="600" y="55" font-size="12" fill="#555" text-anchor="middle">高潮</text><text x="340" y="225" font-size="13" fill="#777" text-anchor="middle">情感节奏：随反复咏唱逐节上扬，乡愁愈浓</text></svg>', caption: '情感随三节复沓逐节攀升，思乡之痛在反复中达到高潮。' },
        { type: 'warn', label: '易错提醒', text: '不要把三节里的「爱人」「恩人」「父亲」理解为三个人。他们都是<strong>同一个人（引领迷娘归乡者）的不同侧面</strong>，对应迷娘对之既爱且依赖、既悲且敬的复杂情感，是同一依恋的三种表达。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「你可知道那地方？去吧，去吧，我愿跟随你」的妙处。<br><br><strong>解析</strong>：先以设问「你可知道那地方」撩起读者对乐土的想象，再以「去吧，去吧」的叠词急促呼唤，把<strong>归乡的渴望与追随的决绝</strong>推向极致。一问一呼之间，迷娘不写「我想你」却句句都是相思，不写「我苦」却字字皆是飘零，含蓄而浓烈，正是歌德抒情诗的动人处。' },
        { type: 'tip', label: '阅读方法', text: '读外国抒情诗，先抓「复沓」与「意象」两根线：哪几句在反复？反复里情感有何变化？诗中用了哪些画面代情？把这两条线捋顺，异域诗歌也能读得亲切。' },
        { type: 'poem', text: '你知道吗，那柠檬花开的地方？\n黄金橙在绿叶丛中晃漾，\n和风吹拂，蓝天明朗，\n桃金娘静立，月桂高昂——\n你可知道那地方？\n去吧，去吧，\n我愿跟随你，爱人啊，随你前往！\n\n你知道吗，那柱顶，那高房？\n那云石塑像，在朦胧中游荡？\n可怜的姑娘，任人拷打，\n终日辛劳，面色惨白——\n你可知道那地方？\n去吧，去吧，\n我愿跟随你，恩人啊，随你前往！\n\n你知道吗，那高山，那云径？\n骡子结伴，在雾中行进，\n幽深的洞穴藏着古龙的子孙，\n悬崖欲坠，飞瀑直泻奔腾——\n你可知道那地方？\n去吧，去吧，\n我愿跟随你，父亲啊，随你前往！' },
        { type: 'keypoint', label: '主旨', text: '诗歌通过<strong>明媚故园与凄凉现实的反差</strong>，抒发了迷娘对故乡的深切思念，以及对引领她归乡者的浓烈依恋，是一首情景交融、回环动人的思乡绝唱。' },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'paragraph', text: '《迷娘（之一）》虽短，却把「故乡」写成了精神原乡：那里不仅是地理上的意大利，更是漂泊者灵魂得以安放的去处。后世无数思乡诗，都可见这种以乐景写哀、以复沓写情的回响。' },
        { type: 'reading', text: '延伸：可将本诗与李白《静夜思》、席慕蓉《乡愁》对读，体会不同文化如何用各自意象书写同一种「回不去的故乡」，理解乡愁是人类共通的情感母题。' }
      ],
      exercises: [
        { type: 'choice', question: '《迷娘（之一）》出自歌德的哪部作品？', options: ['《浮士德》', '《威廉·迈斯特的学习时代》', '《少年维特之烦恼》', '《普罗米修斯》'], answer: '《威廉·迈斯特的学习时代》', explanation: '《迷娘（之一）》是歌德长篇小说《威廉·迈斯特的学习时代》中少女迷娘所唱的歌，后独立成为抒情名篇，并非出自《浮士德》或《少年维特之烦恼》等其它作品。' },
        { type: 'choice', question: '诗中反复出现的「去吧，去吧，我愿跟随你」的作用是？', options: ['削弱情感', '以复沓咏唱强化浓烈的思乡与依恋', '交代情节', '描写风景'], answer: '以复沓咏唱强化浓烈的思乡与依恋', explanation: '全诗三节均以「去吧，去吧，我愿跟随你」作结，这种复沓（反复）手法一唱三叹，层层递进地强化了迷娘对故土的眷恋与对引领者的依恋，使情感随反复而愈浓。' },
        { type: 'fill', question: '诗中「柠檬花开」「月桂」「______」等意象共同营造出南国故园的温暖记忆。', answer: '桃金娘', explanation: '诗中用柠檬、黄金橙、月桂、桃金娘等南国植物意象组合成温暖明亮的故乡画卷，与迷娘现实的漂泊处境形成对照，烘托出思乡之切，桃金娘是其中代表意象之一。' },
        { type: 'fill', question: '迷娘反复咏唱「你可知道那地方」，那「地方」象征她魂牵梦萦的______。', answer: '故乡（家园）', explanation: '那片有柠檬、月桂、桃金娘的乐土，是迷娘被掳离故乡后魂牵梦萦的家园象征，寄托着她回归故土、安放灵魂的渴望，是整首诗的情感归宿。' },
        { type: 'choice', question: '下列对《迷娘（之一）》艺术特色概括最准确的是？', options: ['直白叙事、少有抒情', '意象鲜明、复沓咏唱、情感浓烈', '以议论为主', '语言艰涩难懂'], answer: '意象鲜明、复沓咏唱、情感浓烈', explanation: '诗歌以柠檬、月桂等鲜明意象营造意境，以三节复沓结构反复咏唱，情思浓烈缠绵，是歌德抒情诗的代表，而非直白叙事或以议论为主，语言也并不艰涩。' }
      ]
    },

    /* ==================== 第3课 致大海（普希金） ==================== */
    {
      id: 'xb2-u4-l3',
      name: '《致大海》',
      author: '普希金',
      chapter: '第四单元 丰富的心灵（外国作家作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文学常识：普希金与浪漫主义' },
        { type: 'paragraph', text: '亚历山大·普希金（1799—1837）是俄国文学的奠基人，被誉为「俄国文学之父」。他早年受十二月党人影响，诗风奔放自由，是俄国浪漫主义文学的旗手，《致大海》正是其浪漫主义抒情诗的杰作。' },
        { type: 'keypoint', label: '风格定位', text: '《致大海》抒写诗人与大海的告别，通篇<strong>以澎湃的激情、自由的精神与对理想的讴歌</strong>，典型体现浪漫主义特征：重主观情感、重自然象征、重对专制与束缚的反抗。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="180" height="70" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="130" y="80" font-size="14" fill="#0f3b5e" text-anchor="middle">大海</text><text x="130" y="102" font-size="12" fill="#0f3b5e" text-anchor="middle">自由象征</text><rect x="250" y="50" width="180" height="70" rx="8" fill="#e8b0a0" stroke="#c0392b" stroke-width="2"/><text x="340" y="80" font-size="14" fill="#5b1a12" text-anchor="middle">峭壁·坟墓</text><text x="340" y="102" font-size="12" fill="#5b1a12" text-anchor="middle">拿破仑长眠</text><rect x="460" y="50" width="180" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="550" y="80" font-size="14" fill="#3e6b2e" text-anchor="middle">拜伦</text><text x="550" y="102" font-size="12" fill="#3e6b2e" text-anchor="middle">自由歌者</text><path d="M220 85 L250 85 M430 85 L460 85" stroke="#333" stroke-width="2" marker-end="url(#l3a)"/><defs><marker id="l3a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="170" font-size="14" fill="#555" text-anchor="middle">大海串起拿破仑与拜伦，共写自由主题</text><text x="340" y="200" font-size="13" fill="#777" text-anchor="middle">借伟人追怀，把个人情志升华为时代理想</text></svg>', caption: '大海作为自由象征，串起对拿破仑与拜伦两位自由斗士的追怀。' },
        { type: 'heading', text: '二、诗歌鉴赏：借大海抒发的自由精神' },
        { type: 'paragraph', text: '诗人把大海称作「自由的元素」，向它倾诉眷恋。大海的辽阔不羁，正是诗人向往的自由人格的投影。当诗人由大海联想到长眠于此的拿破仑、飞逝的拜伦，个人的离愁便升华为对自由与理想的普遍追寻。' },
        { type: 'list', items: [
          '眷恋与告别：反复「再见吧，大海」，是与自由之境的不舍。',
          '自由的礼赞：称大海为「自由的元素」，以海写心。',
          '伟人的追怀：拿破仑、拜伦，皆为反抗专制、追求自由之象征。',
          '现实的怅惘：世界空虚，何处是「无忧无虑的路径」？'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><polyline points="60,170 190,130 320,140 450,90 600,60" fill="none" stroke="#2e6fae" stroke-width="3"/><circle cx="60" cy="170" r="6" fill="#2e6fae"/><circle cx="190" cy="130" r="6" fill="#2e6fae"/><circle cx="320" cy="140" r="6" fill="#2e6fae"/><circle cx="450" cy="90" r="6" fill="#2e6fae"/><circle cx="600" cy="60" r="6" fill="#2e6fae"/><text x="60" y="195" font-size="12" fill="#555" text-anchor="middle">眷恋</text><text x="320" y="165" font-size="12" fill="#555" text-anchor="middle">召唤</text><text x="600" y="45" font-size="12" fill="#555" text-anchor="middle">自由</text><text x="340" y="225" font-size="13" fill="#777" text-anchor="middle">情感节奏：由眷恋起伏，终归于对自由的执着向往</text></svg>', caption: '情感随海浪由眷恋转向召唤，最终落于对自由的向往。' },
        { type: 'table', headers: ['意象', '象征意义', '情感作用'], rows: [
          ['大海', '自由、不羁、永恒', '诗人精神的投射与对话者'],
          ['峭壁·坟墓', '拿破仑长眠之所', '追怀自由英雄，寄托敬意'],
          ['拜伦', '反抗专制、歌唱自由的歌者', '思想上的另一位君王'],
          ['荒漠·暴君', '现实的束缚与压抑', '反衬对自由的渴求']
        ] },
        { type: 'heading', text: '三、艺术特色：借景抒情与象征' },
        { type: 'paragraph', text: '全诗最显著的手法是借景抒情与象征。大海不是单纯的风景，而是「自由」的化身；诗人对海的告别，实是对自由之境的眷恋。景物、人事、哲理在象征的链条上融为一体，情、景、理浑然天成。' },
        { type: 'list', items: [
          '拟人化：大海会「呼唤」「吐诉」，与诗人对语。',
          '象征：海＝自由，峭壁坟墓＝英雄归宿，拜伦＝精神君王。',
          '抒情结构：告别—回忆—凭吊—升华，大开大合。',
          '浪漫主义气质：想象奔放，情感炽烈，不事雕琢。'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="50" width="180" height="60" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="150" y="88" font-size="14" fill="#0f3b5e" text-anchor="middle">自然·大海</text><path d="M240 80 L300 80" stroke="#333" stroke-width="2" marker-end="url(#l3c)"/><defs><marker id="l3c" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><rect x="300" y="50" width="180" height="60" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="390" y="88" font-size="14" fill="#8a6d00" text-anchor="middle">象征·自由</text><path d="M480 80 L540 80" stroke="#333" stroke-width="2" marker-end="url(#l3c)"/><rect x="540" y="50" width="140" height="60" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="610" y="88" font-size="14" fill="#1e6b34" text-anchor="middle">情志·理想</text><text x="340" y="170" font-size="14" fill="#555" text-anchor="middle">「自然景象 → 象征寓意 → 诗人情志」的升华链</text><text x="340" y="200" font-size="13" fill="#777" text-anchor="middle">借景抒情与象征，使全诗情、景、理融为一体</text></svg>', caption: '从大海的自然景象，经象征抵达诗人的自由情志，层层升华。' },
        { type: 'warn', label: '易错提醒', text: '诗中的「自由」不是无拘无束的任性，而是<strong>对专制束缚的反抗、对人格独立的追求</strong>。拿破仑、拜伦被追怀，正因他们挑战过旧秩序；不可把大海简单读成「风景描写」而忽略其象征内核。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「你是我心灵的愿望之所在呀！……我时常沿着你的岸旁，一个人静悄悄地、茫然地徘徊」。<br><br><strong>解析</strong>：诗人直呼大海为「心灵的愿望之所在」，把海升格为精神归宿；「静悄悄」「茫然」二词，写出人面对浩瀚自由时的谦卑与怅惘。景是人化的海，情是海化的心，<strong>物我相融</strong>，恰是浪漫主义「自然即心灵」的写照，也为后文凭吊英雄、追寻自由蓄满情感。' },
        { type: 'tip', label: '阅读方法', text: '读浪漫主义诗歌，要追问「景物背后站着的什么」：海为何能听、能呼？因为它已被诗人赋格为自由的精灵。抓住「自然—象征—情志」的对应，就能读懂景语皆情语。' },
        { type: 'poem', text: '再见吧，自由的元素！\n最后一次了，在我眼前\n你的蓝色的浪头翻滚起伏，\n你的骄傲的美闪烁壮观。\n\n仿佛友人的忧郁的絮语，\n仿佛他别离一刻的招呼，\n最后一次了，我听着你的\n喧声呼唤，你的沉郁的吐诉。\n\n你是我心灵的愿望之所在呀！\n我时常沿着你的岸旁，\n一个人静悄悄的，茫然的\n徘徊，还因为那个隐秘的想望\n而苦恼心伤。\n\n我多么热爱你的回音，\n热爱你阴沉的声调，你的深渊的音响，\n还有那黄昏时分的寂静，\n和那反复无常的激情！\n\n渔夫们的温顺的风帆，\n靠了你的任性的保护，\n在波涛之间勇敢地飞航；\n但当你汹涌起来而无法控制时，\n大群地船只就会覆亡。\n\n我曾想永远地离开\n你这寂寞和静止不动的海岸，\n怀着狂欢之情庆祝你，\n并任我的诗歌顺着你的波涛奔向远方，\n但是你期待，你召唤——我却被束缚；\n我的心灵在你的面前\n昏昏欲睡了：被一种强烈的热情所迷惑，\n使我留在你的岸旁……\n\n还有什么好怜惜呢？现在哪儿\n才是我要奔向的无忧无虑的路径？\n在你的荒漠之中，只有一样东西\n也许还激动我的心灵。\n\n一面峭壁，一座光荣的坟墓……\n在那儿，多少珍贵的思念\n躺在你的怀抱里，像在睡梦中一样；\n拿破仑就在那儿消亡。\n在那儿，他长眠在苦难之中。\n而紧跟他之后，正像风暴之声一样，\n另一个天才飞越我们而去，\n他是我们思想上的另一个君王。\n\n为自由之神所悲泣着的歌者\n消失了，他把自己的桂冠留在世上。\n阴恶的天气喧腾起来吧，激荡起来吧：\n哦，大海呀，是他曾经将你歌唱。\n\n你的形象反映在他的身上，\n他是用你的精神塑成：\n像你一样，他倔强，他深沉，\n他像你一样，什么都不能使他屈服投降。\n\n世界空虚了……哦，海洋，\n现在你还能把我带到哪儿？\n到处，人们的命运都是一样：\n哪里有幸福，必有教育\n或暴君看守得非常严密。\n\n再见吧，大海！\n我永不会忘记你庄严的容光，\n我将继续观望你单调的潮汐，\n带着你的岩石、你的海湾、你的灯塔，\n和你的浪头的泡沫……\n\n心里充满了你，我将要把\n你的山岩，你的海湾，\n你的光和影，你的浪花的喋喋，\n带到森林，带到寂静的荒原——\n然后我将长久地，长久地\n倾听你在黄昏时分的轰响。\n\n我永不再见你，我的自由的元素，\n我将怀着骄傲的怀念，\n长久，长久地，倾听你的轰响。' },
        { type: 'keypoint', label: '主旨', text: '诗歌借与大海的告别，抒发了诗人对<strong>自由精神的炽热礼赞</strong>与对理想的不懈追寻，并借拿破仑、拜伦寄托对反抗专制、坚守尊严的英雄的敬意，是一曲浪漫主义的自由之歌。' },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'paragraph', text: '《致大海》写于普希金将被流放南方之际，大海成了他短暂自由岁月的见证。诗的结尾，他把海的身影带向森林与荒原，意味着自由精神已内化为自己的一部分，永不消逝。' },
        { type: 'reading', text: '延伸：可与舒婷《致大海》对读，看不同时代、不同国度的诗人如何借同一意象寄托情怀；亦可联系普希金其它抒情诗，理解其「自由歌手」的精神底色。' }
      ],
      exercises: [
        { type: 'choice', question: '普希金的《致大海》属于什么风格的诗歌？', options: ['现实主义', '浪漫主义', '古典主义', '现代主义'], answer: '浪漫主义', explanation: '普希金是俄国浪漫主义文学的代表，《致大海》以奔放的情感、对自由与理想的讴歌、对大海的人格化抒写，典型体现了浪漫主义重主观、重自然、重反抗的特征。' },
        { type: 'choice', question: '诗中写到拿破仑与拜伦，其作用是？', options: ['描写战争', '借伟人抒写对自由与理想的追寻', '介绍历史', '讽刺帝王'], answer: '借伟人抒写对自由与理想的追寻', explanation: '诗人由大海联想到长眠于此的拿破仑与飞逝的拜伦，借这两位追求自由、反抗专制的伟人，抒写自己对自由精神的仰慕与对理想的执着追寻，而非单纯描写战争或讽刺。' },
        { type: 'fill', question: '诗人称大海为「自由的元素」，借大海抒发对______精神的礼赞。', answer: '自由', explanation: '诗人把大海称作「自由的元素」，反复倾诉对它的热爱，实质是以大海象征永不屈服的自由精神，借景抒情，表达自己对自由的礼赞与向往，这是全诗的核心情感。' },
        { type: 'fill', question: '诗中「一面峭壁，一座光荣的坟墓」纪念的是长眠于此的______。', answer: '拿破仑', explanation: '诗中「一面峭壁，一座光荣的坟墓」指拿破仑长眠于圣赫勒拿岛的葬身之所，普希金在此凭吊这位曾震撼欧洲的巨人，寄托对自由英雄的追怀与敬意。' },
        { type: 'choice', question: '本诗最主要的艺术手法是？', options: ['白描叙事', '借景抒情、象征', '荒诞夸张', '纯议论'], answer: '借景抒情、象征', explanation: '全诗借告别大海抒发胸臆，以大海象征自由，以峭壁、坟墓等意象承载思想，是借景抒情与象征手法结合的浪漫主义名篇，而非白描、荒诞或纯议论。' }
      ]
    },

    /* ==================== 第4课 自己之歌（节选）（惠特曼） ==================== */
    {
      id: 'xb2-u4-l4',
      name: '《自己之歌（节选）》',
      author: '惠特曼',
      chapter: '第四单元 丰富的心灵（外国作家作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文学常识：惠特曼与《草叶集》' },
        { type: 'paragraph', text: '沃尔特·惠特曼（1819—1892）是美国伟大的诗人，代表作《草叶集》被誉为美国诗歌的里程碑。他以奔放的自由诗体打破传统格律，开创了美国民族诗歌的新声，《自己之歌》是其中最长、最负盛名的篇章。' },
        { type: 'keypoint', label: '自由诗体', text: '惠特曼创造的是<strong>不拘格律、长短随意的自由诗</strong>：不押韵、不讲究平仄，句式随情感起伏自由舒展，以内在的节奏代替外在的韵脚，释放出磅礴的气势。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="280" height="60" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="180" y="78" font-size="14" fill="#5b3b12" text-anchor="middle">传统格律诗</text><text x="180" y="100" font-size="12" fill="#5b3b12" text-anchor="middle">韵脚·平仄·齐整</text><path d="M320 80 L360 80" stroke="#333" stroke-width="2" marker-end="url(#l4a)"/><defs><marker id="l4a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><rect x="360" y="50" width="280" height="60" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="500" y="78" font-size="14" fill="#1e6b34" text-anchor="middle">自由诗体</text><text x="500" y="100" font-size="12" fill="#1e6b34" text-anchor="middle">长短随意·内在节奏</text><text x="340" y="160" font-size="14" fill="#555" text-anchor="middle">惠特曼以自由诗冲破格律束缚</text><text x="340" y="195" font-size="13" fill="#777" text-anchor="middle">长句与排比构成排山倒海的内在节奏</text></svg>', caption: '惠特曼以自由诗体冲破传统格律，靠长句排比形成内在节奏。' },
        { type: 'heading', text: '二、诗歌鉴赏：自我、自然与生命' },
        { type: 'paragraph', text: '诗人以「我」的口吻，坦然宣告对自我的赞美：「属于我的每一个原子，也同样属于你。」他把个人与宇宙万物打通，歌颂自然的壮美、生命的平凡与尊贵，展现一种平等、开阔、生机勃勃的生命观。' },
        { type: 'list', items: [
          '自我的尊严：坦然说「我赞美我自己，歌唱我自己」。',
          '自然的壮美：草叶、泥土、空气、星辰，皆为我所由生。',
          '生命的平等：草叶不逊于星辰，平凡者亦有神圣价值。',
          '宇宙的融通：「我」的原子与万物相通，个体即全体。'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><circle cx="340" cy="120" r="60" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="340" y="116" font-size="15" fill="#1e6b34" text-anchor="middle">我（自我）</text><text x="340" y="138" font-size="12" fill="#1e6b34" text-anchor="middle">每一个原子</text><g fill="#7a9b3e"><circle cx="120" cy="60" r="22"/><circle cx="560" cy="60" r="22"/><circle cx="120" cy="190" r="22"/><circle cx="560" cy="190" r="22"/></g><text x="120" y="64" font-size="11" fill="#3e6b2e" text-anchor="middle">草叶</text><text x="560" y="64" font-size="11" fill="#3e6b2e" text-anchor="middle">泥土</text><text x="120" y="194" font-size="11" fill="#3e6b2e" text-anchor="middle">空气</text><text x="560" y="194" font-size="11" fill="#3e6b2e" text-anchor="middle">星辰</text><g stroke="#999" stroke-width="1.5"><line x1="270" y1="95" x2="142" y2="78"/><line x1="410" y1="95" x2="538" y2="78"/><line x1="270" y1="145" x2="142" y2="168"/><line x1="410" y1="145" x2="538" y2="168"/></g><text x="340" y="225" font-size="13" fill="#777" text-anchor="middle">「我」的原子与草叶、泥土、星辰相通，个体即全体</text></svg>', caption: '自我的每个原子与草叶、泥土、星辰相通，个体与万物一体。' },
        { type: 'table', headers: ['层面', '诗句表现', '思想内涵'], rows: [
          ['自我', '我赞美我自己，歌唱我自己', '肯定个体尊严与价值'],
          ['自然', '由这泥土、这空气构成', '人来源于自然、归于自然'],
          ['生命', '每一个原子也同样属于你', '万物平等、彼此连通'],
          ['宇宙', '顺乎自然，保持原始活力', '个体与全体融通为一']
        ] },
        { type: 'heading', text: '三、艺术特色：自由诗体的磅礴气势' },
        { type: 'paragraph', text: '惠特曼不靠韵脚取胜，而靠绵长的句子、密集的排比与铺陈的列举形成气势。他像清点世界一样罗列万物，在看似随意的铺排中，奔涌出对生命与宇宙的礼赞，读来如海潮般一浪接一浪。' },
        { type: 'list', items: [
          '自由诗体：无韵脚、无定式，句式长短随情。',
          '长句排比：一口气铺开，形成内在节奏与气势。',
          '密集列举：以万物罗列展现世界的丰饶。',
          '第一人称：以「我」直抒，坦诚、自信、开阔。'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="160" height="55" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="120" y="73" font-size="14" fill="#1a3c8a" text-anchor="middle">长句</text><rect x="220" y="40" width="160" height="55" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="300" y="73" font-size="14" fill="#8a6d00" text-anchor="middle">排比</text><rect x="400" y="40" width="160" height="55" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="480" y="73" font-size="14" fill="#1e6b34" text-anchor="middle">列举</text><rect x="580" y="40" width="100" height="55" rx="8" fill="#e8c8e0" stroke="#9c5a8a" stroke-width="2"/><text x="630" y="73" font-size="14" fill="#5b1a52" text-anchor="middle">气势</text><path d="M200 67 L220 67 M380 67 L400 67 M560 67 L580 67" stroke="#333" stroke-width="2" marker-end="url(#l4c)"/><defs><marker id="l4c" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="150" font-size="14" fill="#555" text-anchor="middle">长句—排比—列举，汇成排山倒海的气势</text><text x="340" y="185" font-size="13" fill="#777" text-anchor="middle">内在节奏代替外在韵脚，自由而磅礴</text></svg>', caption: '长句、排比、列举三者叠加，形成惠特曼式的磅礴气势。' },
        { type: 'warn', label: '易错提醒', text: '自由诗「自由」不等于「随便」。惠特曼的诗句看似无拘，实则<strong>有严密的内在节奏与情感逻辑</strong>：句子随呼吸与情绪起伏，排比层层推进。读时不可只盯韵脚缺失，而要感受其内在气势。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「我的舌，我的血液中的每个原子，都是由这泥土，这空气构成」。<br><br><strong>解析</strong>：诗人把抽象的「自我」拆解为「舌」「血液」乃至「每一个原子」，再溯源到「泥土」「空气」，<strong>用具体的物质链条证明人与自然的同源</strong>。这不只是一句科学式的坦白，更是生命观的宣告：我本是大地的孩子，因而平凡亦神圣。语言平白却底气磅礴，正是自由诗「以质胜文」的范例。' },
        { type: 'tip', label: '阅读方法', text: '读自由诗，要把「目光放长」：别逐句求韵，而顺着长句一口气读到逗号、句号处，体会句子的呼吸与排比的推进，就能抓住那股奔涌的内在节奏。' },
        { type: 'poem', text: '我赞美我自己，歌唱我自己，\n我所讲的一切，将对你们也一样适合，\n因为属于我的每一个原子，也同样属于你。\n\n我邀了我的灵魂同我一道闲游，\n我俯首下视，悠闲地观察一片夏天的草叶。\n我的舌，我的血液中的每个原子，都是由这泥土，这空气构成，\n我在这里生长，我的父母在这里生长，他们的父母也同样在这里生长，\n我现在是三十七岁了，身体完全健康，\n希望继续不停地唱下去直到死亡。\n\n信条和学派暂时不论，\n且后退一步，明了当前的情况已足够，\n不论我从善从恶，我允许随意发表意见，\n顺乎自然，保持原始的活力。' },
        { type: 'keypoint', label: '主旨', text: '诗歌以开阔坦荡的「自我」为轴心，歌颂<strong>人的尊严、自然的壮美与生命的平等</strong>，把个体与宇宙万物融通为一，展现了惠特曼自由、自信、生机勃勃的生命哲学。' },
        { type: 'heading', text: '四、主旨与拓展' },
        { type: 'paragraph', text: '《自己之歌》的「自己」，不是狭隘的自私，而是包容万物的「大我」。惠特曼用草叶这一最平凡的事物象征平凡美国人的坚韧，使诗歌既个人又普遍，既自由又庄严。' },
        { type: 'reading', text: '延伸：可将本诗与《致大海》并读，看浪漫主义如何在异国开出不同的花——普希金向自然借自由，惠特曼向自我要尊严，二者都张扬主体精神，可互为映照。' }
      ],
      exercises: [
        { type: 'choice', question: '惠特曼《自己之歌》出自哪部诗集？', options: ['《草叶集》', '《恶之花》', '《飞鸟集》', '《新月集》'], answer: '《草叶集》', explanation: '《自己之歌》是惠特曼代表作《草叶集》中的长篇抒情诗，《草叶集》以「草叶」象征平凡而坚韧的生命，奠定了惠特曼自由诗体的地位，并非其它诗集。' },
        { type: 'choice', question: '诗中歌颂的核心内容是？', options: ['宫廷贵族', '自我、自然与生命', '战争胜利', '宗教信仰'], answer: '自我、自然与生命', explanation: '诗歌以「我」的口吻，歌颂自我的尊严、自然的壮美与生命的可贵，把个人体验与宇宙万物融为一体，是对自我、自然与生命的深情礼赞，而非歌颂贵族或战争。' },
        { type: 'fill', question: '惠特曼创造的是不拘格律、长短句自由的______诗体。', answer: '自由', explanation: '惠特曼打破传统格律，创造不受韵脚束缚、长短随意的自由诗体，《自己之歌》正是这一诗体的典范，以奔放的句式释放磅礴的情感，是美国诗歌的里程碑。' },
        { type: 'fill', question: '诗中写道「我现在是______岁了，身体完全健康」，以坦率口吻宣告自我的存在。', answer: '三十七', explanation: '原句「我现在是三十七岁了，身体完全健康」以平直坦诚的口吻宣告自我的真实状态，体现惠特曼自由诗率真、自信、不事雕琢的诉说风格。' },
        { type: 'choice', question: '本诗艺术上最突出的特点是？', options: ['严整格律、对仗工整', '自由诗体、长句排比、气势磅礴', '十四行结构', '婉约含蓄'], answer: '自由诗体、长句排比、气势磅礴', explanation: '全诗采用自由诗体，以绵长的句子、密集的排比与事物的列举形成排山倒海的气势，奔放豪迈，与严整格律、十四行或婉约含蓄的风格截然不同。' }
      ]
    },

    /* ==================== 第5课 树和天空（特朗斯特罗姆） ==================== */
    {
      id: 'xb2-u4-l5',
      name: '《树和天空》',
      author: '特朗斯特罗姆',
      chapter: '第四单元 丰富的心灵（外国作家作品研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、文学常识：特朗斯特罗姆与意象派' },
        { type: 'paragraph', text: '托马斯·特朗斯特罗姆（1931—2015）是瑞典著名诗人，2011 年诺贝尔文学奖得主。他的诗以凝练的意象、奇崛的比喻与深远的哲思著称，被称为「深度意象」诗，在当代世界诗坛影响深远。' },
        { type: 'keypoint', label: '深度意象', text: '「深度意象」指<strong>用极简的物象承载极深的哲思</strong>：诗句不铺陈、少议论，只把几个意象并置，让读者在空白与跳跃中自行体悟存在的真相。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="50" width="140" height="90" rx="8" fill="#cfe3c8" stroke="#4f7a3e" stroke-width="2"/><text x="130" y="90" font-size="14" fill="#2e5b1e" text-anchor="middle">树</text><text x="130" y="112" font-size="12" fill="#2e5b1e" text-anchor="middle">汲取·等待</text><rect x="270" y="50" width="140" height="90" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="340" y="90" font-size="14" fill="#0f3b5e" text-anchor="middle">雨</text><text x="340" y="112" font-size="12" fill="#0f3b5e" text-anchor="middle">生命之源</text><rect x="480" y="50" width="140" height="90" rx="8" fill="#9b8fd0" stroke="#6a4fc0" stroke-width="2"/><text x="550" y="90" font-size="14" fill="#3a2a7a" text-anchor="middle">天空·雪</text><text x="550" y="112" font-size="12" fill="#3a2a7a" text-anchor="middle">永恒之境</text><path d="M200 95 L270 95 M410 95 L480 95" stroke="#333" stroke-width="2" marker-end="url(#l5a)"/><defs><marker id="l5a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="185" font-size="14" fill="#555" text-anchor="middle">树—雨—天空，意象并置而成意境</text><text x="340" y="212" font-size="13" fill="#777" text-anchor="middle">寥寥数象，凝练中蕴含对存在与时间的冥想</text></svg>', caption: '树、雨、天空等意象并置，凝练中浮现对存在与时间的冥想。' },
        { type: 'heading', text: '二、诗歌鉴赏：树与天空的象征' },
        { type: 'paragraph', text: '诗中的树在雨中「汲取生命」，又久久站在等待中，等待雪花降临。树既是自然物象，也隐喻人：向自然敞开、在瞬间中体悟永恒。天空则是更高处、更恒久的维度，雪则是连接人与自然、瞬间与永恒的神圣时刻。' },
        { type: 'list', items: [
          '树：在雨中汲取生命，象征向自然敞开、不断生长的主体。',
          '雨：生命的源泉，也是转瞬即逝的当下。',
          '天空：更高远、更恒久的维度，容纳瞬间与永恒。',
          '雪：降临的神圣时刻，象征静默中的期待与升华。'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="120" r="60" fill="#cfe3c8" stroke="#4f7a3e" stroke-width="2"/><text x="200" y="116" font-size="14" fill="#2e5b1e" text-anchor="middle">树（人）</text><text x="200" y="138" font-size="12" fill="#2e5b1e" text-anchor="middle">汲雨·待雪</text><path d="M260 120 L420 120" stroke="#333" stroke-width="2" marker-end="url(#l5b)"/><defs><marker id="l5b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><circle cx="480" cy="120" r="60" fill="#9b8fd0" stroke="#6a4fc0" stroke-width="2"/><text x="480" y="116" font-size="14" fill="#3a2a7a" text-anchor="middle">天空（永恒）</text><text x="480" y="138" font-size="12" fill="#3a2a7a" text-anchor="middle">雪·瞬间</text><text x="340" y="210" font-size="13" fill="#777" text-anchor="middle">树在雨中汲取、在雪中等待：人与自然、瞬间与永恒的隐喻</text></svg>', caption: '树在雨中汲取生命、在雪中静静等待，隐喻人与自然及永恒的关系。' },
        { type: 'table', headers: ['意象', '表层物象', '深层象征'], rows: [
          ['树', '雨中走动的植物', '向自然敞开的人、生长的主体'],
          ['雨', '倾洒的灰雨', '生命之源、易逝的当下'],
          ['天空', '灰云与黑夜', '高远恒久的维度'],
          ['雪', '落下的雪花', '降临的神圣瞬间、静默的升华']
        ] },
        { type: 'heading', text: '三、艺术特色：意象派的凝练与跳跃' },
        { type: 'paragraph', text: '全诗仅以树、雨、天空、雪等寥寥意象构成，语句跳跃、不事铺陈，却在凝练中蕴含对存在与时间的深层思考。意象之间留下大片空白，迫使读者参与意义的生成——这正是深度意象诗的力量。' },
        { type: 'list', items: [
          '凝练：全诗短小，无一句多余。',
          '跳跃：意象并置，省去逻辑连接，留白生义。',
          '奇喻：树根「像闪电一样闪烁」，陌生而精准。',
          '哲思：于平凡物象中写出存在与永恒。'
        ] },
        { type: 'heading', text: '四、写作任务：文化走出去' },
        { type: 'tip', label: '申论指要', text: '本单元写作以「文化走出去」为话题，要求学写申论：先明确观点（如「以意象之美讲中国故事」），再分层论证（内容、渠道、受众），最后提出可操作建议。<strong>借鉴本诗「以小见大、以象载道」</strong>的思维，用具体意象承载文化主张，文章自能既有诗意又有说服力。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="50" width="180" height="60" rx="8" fill="#e8c8e0" stroke="#9c5a8a" stroke-width="2"/><text x="150" y="88" font-size="14" fill="#5b1a52" text-anchor="middle">中国文化</text><path d="M240 80 L300 80" stroke="#333" stroke-width="2" marker-end="url(#l5c)"/><defs><marker id="l5c" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><rect x="300" y="50" width="180" height="60" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="390" y="88" font-size="14" fill="#8a6d00" text-anchor="middle">意象载道</text><path d="M480 80 L540 80" stroke="#333" stroke-width="2" marker-end="url(#l5c)"/><rect x="540" y="50" width="140" height="60" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="610" y="88" font-size="14" fill="#1e6b34" text-anchor="middle">走向世界</text><text x="340" y="170" font-size="14" fill="#555" text-anchor="middle">「文化走出去」申论链：内容—载体—传播</text><text x="340" y="200" font-size="13" fill="#777" text-anchor="middle">以意象之美讲中国故事，让文化真正落地生根</text></svg>', caption: '「文化走出去」申论思路：以意象载道，让中国文化真正走向世界。' },
        { type: 'warn', label: '易错提醒', text: '读意象派诗歌最易「读得太实」或「读得太空」：把树只当树，则失其象征；脱离文本随意附会，则失其依据。<strong>应在意象与文本细节之间往返</strong>，让象征有所依附，又不拘于一解。' },
        { type: 'example', label: '鉴赏示范', text: '请赏析「一棵树在雨中走动……它有急事。它从雨中汲取生命」。<br><br><strong>解析</strong>：诗人赋予树以人的动作与紧迫感——「走动」「有急事」「汲取生命」，使静物刹那活转。<strong>树在雨中汲取，实是生命在瞬间里饱满</strong>；「急事」二字更点出存在对当下的珍视。物我之间界限消融，平凡一幕遂成关于生长与永恒的隐喻，凝练而余味悠长。' },
        { type: 'keypoint', label: '主旨', text: '诗歌以树在雨中汲取、在雪中等待的意象，隐喻<strong>人向自然敞开、在瞬间中体悟永恒</strong>的生命姿态，于凝练跳跃中写出存在与时间的深层诗意，是深度意象诗的典范。' },
        { type: 'poem', text: '一棵树在雨中走动\n在倾洒的灰色中匆匆走过我们身旁\n它有急事。它从雨中汲取生命\n就像果园里的黑鹂\n\n一棵树在雨中走动\n漏洞百出。树根像闪电一样在雨中闪烁\n在正在长出的叶子里面，它们看不见自己\n有急事。它们点亮自己然后熄灭，颤抖\n\n我们仔细地听：树在雨中\n以多变的姿态四处张望\n但只有一部分呈现给众人\n在接连而至的谶言般的汽车灯光中\n\n一棵树在雨中走动\n在灰色中匆匆走过我们身旁\n它有急事。它从雨中汲取生命\n就像果园里的黑鹂\n\n灰色的云层在工厂上空\n在逼近的黑夜上面悬浮了片刻\n那就意味着黑夜已来临\n\n雪落到我们身上，落到树木上\n雪落在即将动身出发的人身上\n这儿，那树久久地站在等待中\n当雪落到树木和我们的时刻' },
        { type: 'paragraph', text: '诗的结尾，树「久久地站在等待中」，等待雪落到自己与「我们」身上。这一刻，自然与人共同置身于神圣的降临里——等待本身，成了存在最庄重的姿态。' },
        { type: 'reading', text: '延伸：可将本诗与王维「木末芙蓉花，山中发红萼。涧户寂无人，纷纷开且落」对读，看中西诗人如何用极简意象写「物自生灭、人静观之」的禅意，体会意象思维的相通。' }
      ],
      exercises: [
        { type: 'choice', question: '特朗斯特罗姆诗歌的风格属于？', options: ['意象派（深度意象）', '豪放派', '婉约派', '现实主义'], answer: '意象派（深度意象）', explanation: '特朗斯特罗姆是瑞典意象派诗人，其诗以凝练的意象、奇崛的比喻与深远的哲思著称，被称为「深度意象」诗，与豪放、婉约或写实风格明显不同。' },
        { type: 'choice', question: '诗中「树」在雨中「汲取生命」、等待雪花，象征？', options: ['树木生长知识', '人与自然的交融及瞬间与永恒的冥想', '天气预报', '砍伐森林'], answer: '人与自然的交融及瞬间与永恒的冥想', explanation: '诗中的树在雨中汲取生命、在雪中静静等待，既是自然物象，也隐喻人向自然敞开、在瞬间中体悟永恒，体现人与世界的深层交融与冥想，而非字面意义上的生长或天气。' },
        { type: 'fill', question: '诗中「树」在雨中汲取生命，又久久站在等待中，等待______降临。', answer: '雪（雪花）', explanation: '诗歌结尾写树「久久地站在等待中」，等待「雪落到树木和我们的时刻」，雪成为连接自然与人的神圣瞬间，象征静默中的期待与升华，是理解全诗的关键意象。' },
        { type: 'fill', question: '本单元写作任务引导我们思考「______走出去」的话题并学写申论。', answer: '文化', explanation: '本单元写作任务以「文化走出去」为话题，要求借鉴诗歌的意象思维，就中华文化的国际传播学写申论，做到观点明确、论据充分、逻辑清晰。' },
        { type: 'choice', question: '下列对《树和天空》艺术特色概括最准确的是？', options: ['铺陈冗长、直白说教', '意象凝练、跳跃性强、意蕴深远', '格律严整', '以叙事为主'], answer: '意象凝练、跳跃性强、意蕴深远', explanation: '全诗仅以树、雨、天空、雪等寥寥意象构成，语句跳跃、不事铺陈，却在凝练中蕴含对存在与时间的深层思考，是意象派诗歌的典范，而非铺陈、格律或叙事为主。' }
      ]
    }

  );
})();
