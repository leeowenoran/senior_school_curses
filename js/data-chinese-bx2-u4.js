/* ============================================================
 * 高一语文 · 必修 下册 · 第四单元 信息时代的语文生活（跨媒介阅读与交流）
 * 3 课时：认识多媒介 / 善用多媒介 / 辨识媒介信息
 * 数据注入：chinese.bx2.points
 * 质量标准：每课 ≥22 内容块 / 3 SVG / 类型齐全（example+table+tip+warn+list+keypoint+heading+paragraph）
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx2');
  if (!v) return;

  v.points.push(
    /* ==================== 第1课 认识多媒介 ==================== */
    {
      id: 'bx2-u4-l1',
      cover: 'assets/cover/chinese/bx2-u4-l1.svg',
      name: '认识多媒介',
      author: '学习活动',
      chapter: '第四单元 信息时代的语文生活（跨媒介阅读与交流）',
      difficulty: '简单',
      content: [
        { type: 'heading', text: '一、走进媒介的世界' },
        { type: 'paragraph', text: '我们每天都被各种信息包围：清晨刷手机看新闻，上课听老师讲解，课间看电视节目，周末读报纸副刊。这些承载信息的载体，就是「媒介」。在信息时代，认识不同媒介的特点，是每一个现代公民必备的语文素养。' },
        { type: 'paragraph', text: '本单元属于「跨媒介阅读与交流」学习任务群，要求我们能够在不同媒介之间穿梭、比较、判断与表达。第一课我们先来认识：什么是媒介？常见的媒介有哪些？它们各有什么传播特点？' },
        { type: 'keypoint', label: '概念界定', text: '<strong>媒介</strong>是信息传播的中介物，是连接信息发出者与接收者的<strong>桥梁与载体</strong>。媒介本身不生产内容，却决定了内容的呈现方式与传播范围。从口耳相传到印刷术，从广播电视到互联网，媒介形态的演变深刻改变了人类的交流方式。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef3fb"/><circle cx="340" cy="150" r="42" fill="#e85d3d"/><text x="340" y="146" font-size="15" fill="#fff" text-anchor="middle">信息</text><text x="340" y="166" font-size="12" fill="#fff" text-anchor="middle">发出者</text><circle cx="340" cy="150" r="42" fill="#e85d3d" opacity="0.0"/><circle cx="340" cy="270" r="42" fill="#4a7de0"/><text x="340" y="266" font-size="15" fill="#fff" text-anchor="middle">信息</text><text x="340" y="286" font-size="12" fill="#fff" text-anchor="middle">接收者</text><rect x="250" y="135" width="180" height="30" rx="6" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="340" y="155" font-size="14" fill="#5b3b12" text-anchor="middle">媒介（桥梁）</text><path d="M340 192 V226" stroke="#c0392b" stroke-width="3" marker-end="url(#u4l1a)"/><defs><marker id="u4l1a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs><text x="340" y="40" font-size="14" fill="#33536e" text-anchor="middle">媒介处于信息传播链的中枢位置</text></svg>', caption: '媒介是信息发出者与接收者之间的桥梁，决定了内容的呈现与传播。' },
        { type: 'heading', text: '二、常见媒介及其特点' },
        { type: 'keypoint', label: '报纸', text: '<strong>报纸</strong>是传统纸质媒介的代表：以<strong>文字和图片</strong>为主，便于深度阅读与反复查阅；出版周期相对固定（日报、周报），时效性弱于电子媒介，但<strong>权威性与可信度较高</strong>，适合刊载需要沉下心来读的长篇报道与评论。' },
        { type: 'keypoint', label: '电视', text: '<strong>电视</strong>是视听综合媒介：融<strong>画面、声音、字幕</strong>于一体，直观生动、感染力强，能够现场直播重大事件；但其内容按固定时段线性播出，观众选择余地小，且信息转瞬即逝、难以回看检索。' },
        { type: 'keypoint', label: '网络', text: '<strong>网络（互联网）</strong>是新兴的数字媒介：以<strong>超链接、多媒体、即时性</strong>为特征，信息海量、检索便捷、互动性强，打破时空限制。但门槛低、信息芜杂，真伪难辨，对使用者的筛选能力要求较高。' },
        { type: 'keypoint', label: '社交媒体', text: '<strong>社交媒体</strong>（微博、微信、短视频平台等）是依托网络的<strong>人际互动媒介</strong>：以用户生产内容为主，传播呈网状裂变、速度快、参与感强；但也容易形成「信息茧房」，使观点同质化、情绪化，需警惕偏听偏信。' },
        { type: 'table', headers: ['媒介类型', '主要形式', '突出优势', '明显局限'], rows: [['报纸', '文字、图片', '权威可信、宜深读、可保存', '时效慢、互动弱'], ['电视', '画面、声音', '直观生动、感染力强', '线性播出、难回看'], ['网络', '图文音视频', '海量、即时、可检索', '信息芜杂、真伪难辨'], ['社交媒体', '用户原创内容', '互动强、传播快、参与度高', '易茧房化、情绪化']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#fdf1e6"/><g font-size="13" text-anchor="middle"><rect x="30" y="40" width="140" height="120" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="100" y="85" fill="#5b3b12">报纸</text><text x="100" y="110" fill="#7a6b5e" font-size="12">权威·宜深读</text><text x="100" y="130" fill="#7a6b5e" font-size="12">时效较慢</text><rect x="190" y="40" width="140" height="120" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="260" y="85" fill="#5b3b12">电视</text><text x="260" y="110" fill="#7a6b5e" font-size="12">直观·生动</text><text x="260" y="130" fill="#7a6b5e" font-size="12">线性难回看</text><rect x="350" y="40" width="140" height="120" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="420" y="85" fill="#0f3b5e">网络</text><text x="420" y="110" fill="#33536e" font-size="12">海量·即时</text><text x="420" y="130" fill="#33536e" font-size="12">真伪难辨</text><rect x="510" y="40" width="140" height="120" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="580" y="85" fill="#fff">社交媒体</text><text x="580" y="110" fill="#e8d5f7" font-size="12">互动·裂变</text><text x="580" y="130" fill="#e8d5f7" font-size="12">易茧房化</text></g><text x="340" y="210" font-size="14" fill="#8a6d3b" text-anchor="middle">四类媒介各有所长，也各有所短</text><text x="340" y="235" font-size="13" fill="#a9711a" text-anchor="middle">认识特点，方能扬长避短、为我所用</text></svg>', caption: '报纸、电视、网络、社交媒体各有优势与局限，认识特点是善用前提。' },
        { type: 'heading', text: '三、媒介的传播规律' },
        { type: 'keypoint', label: '核心规律', text: '媒介传播遵循几条基本规律：①<strong>渠道决定形态</strong>——不同媒介适合不同内容（深度评论宜见诸报纸，突发画面宜诉诸电视与网络）；②<strong>速度依技术</strong>——技术越先进，传播越快、覆盖越广；③<strong>互动改变关系</strong>——社交媒体让受众从被动接收变为主动参与者。' },
        { type: 'list', items: ['媒介是信息传播的载体与桥梁，不生产内容却塑造内容形态', '报纸权威宜深读，电视直观感染强，网络海量即时，社交媒体互动裂变', '媒介差异体现在时效性、互动性、可信度、保存性四个维度', '技术越先进，传播越快、覆盖越广', '社交媒体使受众成为参与者，但也带来茧房与情绪化风险', '认识媒介特点，是跨媒介阅读与交流的第一步'] },
        { type: 'example', label: '分析示范', text: '同一条「城市内涝」的消息，为什么报纸、电视、社交媒体呈现方式不同？<br><br><strong>解析</strong>：这正体现了<strong>渠道决定形态</strong>的规律。报纸会刊发深度调查，分析排水系统短板（适合文字长读）；电视播出现场画面与救援直播（适合视听直观）；社交媒体上则多为市民拍的短视频与实时吐槽（适合快速分享）。同一事件因<strong>媒介特性不同</strong>而呈现为不同样态，阅读时需根据渠道特点理解信息的侧重点与局限。' },
        { type: 'heading', text: '四、媒介素养与辨析意识' },
        { type: 'keypoint', label: '媒介素养', text: '<strong>媒介素养</strong>指人们正确、建设性地<strong>获取、分析、评价与创造</strong>媒介信息的能力。在信息洪流中，具备媒介素养的人不只是「接收者」，更是「把关人」——能分辨真伪、理解立场、抵制误导，并负责任地表达与传播。' },
        { type: 'warn', label: '易错·概念混淆', text: '不要把「<strong>媒介</strong>」与「<strong>媒体（媒介机构）</strong>」混为一谈：媒介是技术载体（如报纸这种形式），媒体是生产内容的机构（如某报社、某电视台）。也不要以为「新媒介一定优于旧媒介」——各类媒介<strong>互补而非替代</strong>，深度阅读仍离不开纸媒的沉静空间。' },
        { type: 'tip', label: '拓展', text: '加拿大学者麦克卢汉提出「<strong>媒介即讯息</strong>」的著名观点：一种新媒介的出现，其本身对社会的影响往往大于它所承载的具体内容。从印刷术到互联网，每一次媒介革命都重塑了人类的认知与交往方式。认识媒介，某种意义上就是认识我们所处的时代。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef6f0"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="150" height="110" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="115" y="90" fill="#5b3b12">获取信息</text><text x="115" y="115" fill="#7a6b5e" font-size="12">会找·会读</text><rect x="210" y="50" width="150" height="110" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="285" y="90" fill="#5b3b12">分析评价</text><text x="285" y="115" fill="#7a6b5e" font-size="12">辨真伪·明立场</text><rect x="380" y="50" width="150" height="110" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="455" y="90" fill="#0f3b5e">创造表达</text><text x="455" y="115" fill="#33536e" font-size="12">负责任地传</text><rect x="550" y="45" width="120" height="120" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="610" y="95" fill="#fff">媒介素养</text><text x="610" y="118" fill="#dff0c8" font-size="12">核心能力</text></g><g stroke="#5aa832" stroke-width="2.5" fill="none"><line x1="190" y1="105" x2="208" y2="105" marker-end="url(#u4l1b)"/><line x1="360" y1="105" x2="378" y2="105" marker-end="url(#u4l1b)"/><line x1="530" y1="105" x2="548" y2="105" marker-end="url(#u4l1b)"/></g><defs><marker id="u4l1b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#5aa832"/></marker></defs><text x="340" y="200" font-size="13" fill="#3e6b2e" text-anchor="middle">媒介素养三阶梯：获取 → 分析 → 创造，层层提升</text></svg>', caption: '媒介素养由「获取—分析—创造」三级能力构成，是信息时代的核心素养。' },
        { type: 'list', items: ['媒介即讯息：新媒介本身重塑认知与交往方式', '媒介素养＝获取＋分析＋评价＋创造信息的能力', '媒介与媒体不同：前者是载体，后者是机构', '新媒介不必然优于旧媒介，各类媒介互补', '社交媒体既是参与平台，也潜藏茧房风险', '认识多媒介，是跨媒介阅读与交流的起点'] }
      ],
      exercises: [
        { type: 'choice', question: '下列对「媒介」的理解，正确的一项是？', options: ['媒介就是报社、电视台这类机构', '媒介是信息传播的中介载体，处于发出者与接收者之间', '媒介只指互联网', '媒介本身生产新闻内容'], answer: '媒介是信息传播的中介载体，处于发出者与接收者之间', explanation: '媒介是连接信息发出者与接收者的桥梁与载体，它承载而非生产内容（内容由媒体机构生产）。从口耳到网络，媒介形态各异，但本质都是信息传播的中介。将媒介等同于媒体机构，或仅指互联网，都缩小了其内涵。' },
        { type: 'choice', question: '关于四类媒介特点的概括，符合文意的是？', options: ['报纸时效最强、网络最权威', '报纸权威宜深读、网络海量即时、社交媒体互动裂变', '电视最宜深度长读、报纸最直观', '社交媒体最可信、报纸最不可信'], answer: '报纸权威宜深读、网络海量即时、社交媒体互动裂变', explanation: '课文指出报纸权威可信、宜深读但时效较慢；网络海量、即时、可检索却真伪难辨；社交媒体互动强、传播快却易茧房化。各类媒介各有所长各有所短，并非谁绝对优于谁，需扬长避短。' },
        { type: 'fill', question: '「媒介素养」指人们正确、建设性地获取、______、评价与创造媒介信息的能力。', answer: '分析', explanation: '媒介素养包含获取、分析、评价、创造四个环节：会找会读（获取），能辨真伪明立场（分析评价），并负责任地表达传播（创造）。其中「分析」是连接接收与批判的关键一步，也是信息时代公民的基本功。' },
        { type: 'choice', question: '麦克卢汉「媒介即讯息」的观点强调的是？', options: ['媒介内容比媒介形式更重要', '新媒介本身对社会的影响往往大于其所载内容', '报纸优于电视', '受众完全被动'], answer: '新媒介本身对社会的影响往往大于其所载内容', explanation: '「媒介即讯息」认为一种新媒介的出现及其技术特性，对社会认知与交往方式的重塑，常常比它具体传播了什么内容更深远。这提示我们认识媒介本身，就是认识时代，而非只盯着内容看。' },
        { type: 'choice', question: '下列对媒介与媒体关系的表述，正确的是？', options: ['二者完全是一回事', '媒介是技术载体（如报纸这种形式），媒体是生产内容的机构（如报社）', '媒体指载体，媒介指机构', '二者毫无关联'], answer: '媒介是技术载体（如报纸这种形式），媒体是生产内容的机构（如报社）', explanation: '媒介指承载信息的技术形式（报纸、电视、网络等载体），媒体指从事内容生产的组织机构（某报社、某电视台）。二者相关但不等同，混淆概念会导致对传播链条理解混乱。' }
      ]
    },

    /* ==================== 第2课 善用多媒介 ==================== */
    {
      id: 'bx2-u4-l2',
      cover: 'assets/cover/chinese/bx2-u4-l2.svg',
      name: '善用多媒介',
      author: '学习活动',
      chapter: '第四单元 信息时代的语文生活（跨媒介阅读与交流）',
      difficulty: '简单',
      content: [
        { type: 'heading', text: '一、从「认识」到「善用」' },
        { type: 'paragraph', text: '认识了各类媒介的特点之后，关键是如何「善用」——综合运用多种媒介获取信息、表达交流，让不同媒介各展所长。在语文学习中，善用多媒介不仅能提高信息获取效率，更能丰富我们的表达与展示方式。' },
        { type: 'paragraph', text: '「善用」包含两层意思：一是<strong>获取时多渠道交叉验证</strong>，避免偏听；二是<strong>表达时因媒介制宜</strong>，用最适合的载体说最恰当的话。本课围绕这两点展开。' },
        { type: 'keypoint', label: '善用要义', text: '善用多媒介的核心在于<strong>「因媒制宜、综合运用」</strong>：需要深度理解时读报纸与书籍，需要现场感时看视频直播，需要快速交流时上社交媒体，需要沉淀表达时写图文长文。不同任务匹配不同媒介，才能事半功倍。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3f0e8"/><circle cx="340" cy="150" r="50" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="340" y="146" font-size="15" fill="#5b3b12" text-anchor="middle">同一主题</text><text x="340" y="168" font-size="13" fill="#5b3b12" text-anchor="middle">多媒介呈现</text><g font-size="13" text-anchor="middle"><rect x="60" y="60" width="110" height="50" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="115" y="90" fill="#5b3b12">报纸·深读</text><rect x="510" y="60" width="110" height="50" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="565" y="90" fill="#0f3b5e">视频·直观</text><rect x="60" y="200" width="110" height="50" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="115" y="230" fill="#fff">社交·互动</text><rect x="510" y="200" width="110" height="50" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="565" y="230" fill="#fff">图文·沉淀</text></g><path d="M115 110 L300 135 M565 110 L380 135 M115 200 L300 165 M565 200 L380 165" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="4 4"/><text x="340" y="285" font-size="13" fill="#8a6d3b" text-anchor="middle">同一信息，依媒介特性分化呈现，各取所长</text></svg>', caption: '同一主题可在不同媒介上以不同形态呈现，善用者懂得按需取用。' },
        { type: 'heading', text: '二、综合运用媒介获取信息' },
        { type: 'keypoint', label: '交叉验证', text: '面对重要信息，应当<strong>多渠道交叉验证</strong>：以权威纸媒或官方发布为基准，辅以网络检索与社交平台讨论，互相印证、互为补充。单一渠道（尤其情绪化自媒体）容易失真，唯有交叉比对才能逼近真相。' },
        { type: 'keypoint', label: '检索策略', text: '网络检索要讲究方法：用<strong>关键词组合、限定时间范围、优先权威站点</strong>提高命中率；善用专题数据库与图书馆电子资源，少依赖碎片化推送。会「搜」与会「筛」同样重要——从海量结果中甄别可信来源，是必备技能。' },
        { type: 'example', label: '分析示范', text: '想了解「某城市地铁新线路开通」的准确信息，应如何善用多媒介？<br><br><strong>解析</strong>：第一步，查<strong>官方发布</strong>（地铁公司公告、市政府网站）获取权威时刻表与票价，确保信息准确；第二步，看<strong>电视或网络新闻</strong>的现场画面，建立直观印象；第三步，浏览<strong>社交媒体</strong>上市民的实时体验，了解实际运营细节与问题；第四步，读<strong>报纸深度报道</strong>理解线路规划的城市意义。四源互证，既全且准，避免被单一渠道带偏。' },
        { type: 'list', items: ['获取信息要「多渠道交叉验证」，以权威源为基准', '善用检索：关键词组合、限定时间、优先权威站点', '重视图书馆与专题数据库等正规电子资源', '社交平台可作补充，但须警惕情绪化与片面', '对不同媒介的信息保持「信其所当信」的审慎', '获取只是起点，理解、整合、运用才是目的'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fdf1e6"/><g font-size="13" text-anchor="middle"><rect x="40" y="40" width="140" height="100" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="110" y="80" fill="#5b3b12">官方发布</text><text x="110" y="105" fill="#c0392b" font-size="12">权威·基准</text><rect x="200" y="40" width="140" height="100" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="270" y="80" fill="#5b3b12">新闻视听</text><text x="270" y="105" fill="#7a6b5e" font-size="12">现场·直观</text><rect x="360" y="40" width="140" height="100" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="430" y="80" fill="#0f3b5e">社交讨论</text><text x="430" y="105" fill="#33536e" font-size="12">多元·细节</text><rect x="520" y="40" width="140" height="100" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="590" y="80" fill="#fff">深度报道</text><text x="590" y="105" fill="#dff0c8" font-size="12">背景·意义</text></g><path d="M180 90 L200 90 M340 90 L360 90 M500 90 L520 90" stroke="#c0392b" stroke-width="2.5" marker-end="url(#u4l2a)"/><circle cx="340" cy="180" r="26" fill="#e85d3d"/><text x="340" y="186" font-size="14" fill="#fff" text-anchor="middle">真相</text><path d="M150 140 L320 165 M270 140 L325 165 M430 140 L355 165 M590 140 L360 165" stroke="#8a6d3b" stroke-width="1.5" stroke-dasharray="4 4"/><text x="340" y="225" font-size="13" fill="#8a6d3b" text-anchor="middle">多源汇聚于「真相」：交叉验证，逼近事实</text></svg>', caption: '四源互证、汇聚于真相，是综合运用媒介获取信息的核心方法。' },
        { type: 'heading', text: '三、因媒介制宜地表达交流' },
        { type: 'keypoint', label: '表达适配', text: '表达时要<strong>「看菜吃饭、量体裁衣」</strong>：正式倡议用图文长文（网站、公众号），紧急通知用即时消息，成果展示用短视频或图文海报，深度观点投书报刊。同一内容依媒介调整语态与篇幅，才能精准触达受众。' },
        { type: 'keypoint', label: '跨媒介叙事', text: '<strong>跨媒介叙事</strong>指围绕一个主题，在多种媒介上协同讲述：例如校园活动，可用海报预告（视觉）、推文详述（图文）、短视频回顾（视听）、留言区互动（社交）。各媒介各司其职，构成完整传播链，放大传播效果。' },
        { type: 'table', headers: ['表达任务', '适宜媒介', '呈现要点'], rows: [['正式倡议书', '网站、公众号图文', '结构完整、措辞严谨、可长期保存'], ['紧急通知', '即时通讯、短信', '简短明确、即时到达'], ['活动成果展示', '短视频、图文海报', '直观生动、感染力强'], ['深度观点', '报纸评论、长文', '论证充分、逻辑严密'], ['话题互动', '社交媒体', '开放讨论、激发参与']] },
        { type: 'warn', label: '易错·表达误区', text: '善用媒介不代表<strong>「全平台刷屏」</strong>：把同一段长文硬塞进字数受限的社交平台，或把严肃倡议做成轻浮表情包，都是<strong>媒介错配</strong>。表达前先想清楚「受众是谁、媒介何用、语态怎样」，切忌不问对象、不加区分地一键转发。' },
        { type: 'tip', label: '拓展', text: '「跨媒介阅读与交流」任务群强调<strong>语文能力与信息技术的融合</strong>。在数字化学习环境中，我们能借助思维导图整理多源信息、用演示文稿呈现研究成果、以短视频讲述家乡故事。善用多媒介，本质上是让语文走出纸面，在更广阔的舞台上表达与创造。' },
        { type: 'keypoint', label: '表达伦理', text: '善用媒介还意味着<strong>负责任的表达</strong>：不造谣、不传谣，尊重他人隐私与版权，主动注明信息来源。数字空间不是法外之地，每一次转发都是一次「发声」，<strong>审慎与善意</strong>应成为我们表达的底线与自觉。' },
        { type: 'list', items: ['表达前先三问：受众是谁、媒介何用、语态怎样', '依任务匹配媒介，避免媒介错配', '跨媒介叙事各平台协同、各司其职', '表达须注明来源、尊重版权与隐私', '不造谣不传谣，审慎与善意是表达底线'] },
        { type: 'heading', text: '四、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#f5f0ff"/><g font-size="14" text-anchor="middle"><rect x="30" y="55" width="170" height="90" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="115" y="95" fill="#5b3b12">获取</text><text x="115" y="118" fill="#7a6b5e" font-size="12">多渠道·交叉验</text><rect x="250" y="55" width="170" height="90" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="335" y="95" fill="#5b3b12">整合</text><text x="335" y="118" fill="#7a6b5e" font-size="12">甄别·理解</text><rect x="470" y="55" width="180" height="90" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="560" y="95" fill="#fff">表达</text><text x="560" y="118" fill="#dff0c8" font-size="12">因媒制宜·创造</text></g><g stroke="#5aa832" stroke-width="2.5" fill="none"><line x1="200" y1="100" x2="248" y2="100" marker-end="url(#u4l2b)"/><line x1="420" y1="100" x2="468" y2="100" marker-end="url(#u4l2b)"/></g><defs><marker id="u4l2b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#5aa832"/></marker></defs><text x="340" y="185" font-size="13" fill="#4a2b8a" text-anchor="middle">善用三阶：获取 → 整合 → 表达，让多媒介各展所长</text></svg>', caption: '善用多媒介的闭环：获取信息—整合理解—因媒表达，层层递进。' },
        { type: 'list', items: ['善用＝综合运用多种媒介获取与表达', '获取要交叉验证，以权威源为基准、社交源为补充', '检索讲策略：关键词、限时间、优先权威站点', '表达要因媒介制宜，避免媒介错配', '跨媒介叙事：多平台协同，各司其职放大效果', '本质是让语文能力在信息时代延展创造'] }
      ],
      exercises: [
        { type: 'choice', question: '「善用多媒介」的核心要义是？', options: ['在所有平台刷屏同一条内容', '因媒制宜、综合运用多种媒介获取与表达', '只用最先进的媒介', '拒绝一切传统媒介'], answer: '因媒制宜、综合运用多种媒介获取与表达', explanation: '善用多媒介强调根据不同任务匹配不同媒介：深读用纸媒、现场感用视听、交流用社交、沉淀用长文。核心是因媒制宜、综合运用，而非不分对象地全平台刷屏，也不是只认新媒介、弃用旧媒介。' },
        { type: 'choice', question: '面对重要信息，获取时应采取的正确做法是？', options: ['只看最吸引眼球的自媒体', '多渠道交叉验证，以权威源为基准', '轻信社交平台单条爆料', '完全不查，凭印象判断'], answer: '多渠道交叉验证，以权威源为基准', explanation: '单一渠道（尤其情绪化自媒体）容易失真。正确做法是以官方发布、权威纸媒为基准，辅以网络检索与社交讨论互相印证，多源互证才能逼近真相，避免被带偏。' },
        { type: 'fill', question: '围绕一个主题在多种媒介上协同讲述，这种表达策略称为______（跨媒介叙事 / 单一发布）。', answer: '跨媒介叙事', explanation: '跨媒介叙事指围绕同一主题在多种媒介上分工协作：海报预告、推文详述、短视频回顾、留言互动，各媒介各司其职，构成完整传播链。它能放大传播效果，是善用多媒介的高级形态。' },
        { type: 'choice', question: '下列做法属于「媒介错配」的是？', options: ['严肃倡议写成结构严谨的图文长文', '紧急通知用即时消息简短发布', '把同一段学术长文硬塞进字数受限的社交平台且不加调整', '活动回顾用短视频呈现'], answer: '把同一段学术长文硬塞进字数受限的社交平台且不加调整', explanation: '媒介错配指不顾媒介特性、把一种形态强行套用他处。学术长文需严谨完整，社交平台宜短平快，硬塞既损害可读性也浪费渠道。表达前应想清受众、媒介与语态，而非一键转发。' },
        { type: 'choice', question: '举办校园读书节，合理的跨媒介安排是？', options: ['只用黑板写通知', '海报预告＋推文详述＋短视频回顾＋留言互动协同', '只在电视投放广告', '完全不发任何信息'], answer: '海报预告＋推文详述＋短视频回顾＋留言互动协同', explanation: '校园活动宜跨媒介协同：视觉海报吸引注意（预告），图文推文说明细则（详述），短视频记录精彩（回顾），社交留言激发参与（互动）。四者各司其职，构成完整传播链，比单一渠道效果更好。' }
      ]
    },

    /* ==================== 第3课 辨识媒介信息 ==================== */
    {
      id: 'bx2-u4-l3',
      cover: 'assets/cover/chinese/bx2-u4-l3.svg',
      name: '辨识媒介信息',
      author: '学习活动',
      chapter: '第四单元 信息时代的语文生活（跨媒介阅读与交流）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、为什么需要辨识信息' },
        { type: 'paragraph', text: '信息时代既是「信息过剩」的时代，也是「真相稀缺」的时代。人人都有麦克风，海量信息泥沙俱下：有真知，也有谣言；有客观，也有立场；有善意，也有流量操纵。因此，<strong>辨识媒介信息</strong>成为现代公民不可或缺的核心能力。' },
        { type: 'paragraph', text: '本课聚焦三个问题：媒介信息可能「假」在何处？如何辨析其真伪与立场？又如何在复杂信息中形成自己独立而正确的判断？' },
        { type: 'keypoint', label: '辨识内涵', text: '辨识媒介信息，不只是「辨真假」，更包括<strong>辨立场、辨目的、辨价值</strong>：一条信息即便事实无误，也可能隐含特定的利益取向或情绪引导。真正的媒介素养，要求我们既看「说了什么」，更看「为什么这么说、对谁有利」。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef3fb"/><circle cx="340" cy="150" r="50" fill="#e85d3d"/><text x="340" y="146" font-size="15" fill="#fff" text-anchor="middle">一条</text><text x="340" y="168" font-size="13" fill="#fff" text-anchor="middle">信息</text><g font-size="13" text-anchor="middle"><rect x="60" y="50" width="120" height="50" rx="8" fill="#fde9c8" stroke="#d9a441" stroke-width="2"/><text x="120" y="80" fill="#5b3b12">辨真假</text><rect x="500" y="50" width="120" height="50" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="560" y="80" fill="#0f3b5e">辨立场</text><rect x="60" y="210" width="120" height="50" rx="8" fill="#9b7de0" stroke="#7b4fe0" stroke-width="2"/><text x="120" y="240" fill="#fff">辨目的</text><rect x="500" y="210" width="120" height="50" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="560" y="240" fill="#fff">辨价值</text></g><path d="M180 75 L290 130 M500 75 L390 130 M180 235 L290 170 M500 235 L390 170" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="4 4"/><text x="340" y="285" font-size="13" fill="#33536e" text-anchor="middle">辨识四维度：真不真、站何方、为哪般、值不值</text></svg>', caption: '面对一条信息，应从真假、立场、目的、价值四个维度层层辨识。' },
        { type: 'heading', text: '二、信息失真的主要情形' },
        { type: 'keypoint', label: '谣言与误传', text: '信息失真常见两类：一是<strong>谣言</strong>（明知为假仍传播，或未经核实便转发），二是<strong>误传</strong>（因记忆偏差、断章取义、标题党导致失真）。二者都可能在社交平台被算法放大，形成「三人成虎」的虚假共识。' },
        { type: 'keypoint', label: '立场与选择性呈现', text: '即便事实为真，也可能被<strong>选择性呈现</strong>：只亮有利于己方的数据、隐瞒反面证据、用情绪化标题引导。这种「框架效应」不改变事实，却悄然<strong>塑造受众的判断方向</strong>，是最隐蔽的信息操纵。' },
        { type: 'example', label: '分析示范', text: '某短视频称「吃某水果能治百病」，配着老人康复的画面，为什么不能轻信？<br><br><strong>解析</strong>：这条信息至少存在三重问题。一是<strong>夸大因果</strong>——水果与康复可能被强加因果，忽略正规治疗；二是<strong>选择性证据</strong>——只展示「有效」个例，隐瞒无效甚至有害的反例；三是<strong>情绪诱导</strong>——用温情画面与「治百病」承诺降低受众警惕。辨识时应追问：证据是否充分？有无利益关联？是否经过权威机构验证？三问之下，谣言现形。' },
        { type: 'table', headers: ['失真类型', '表现', '辨识要点'], rows: [['谣言', '虚构事实、恶意编造', '查权威源、看是否可验证'], ['误传', '记忆偏差、标题党', '读全文、勿断章取义'], ['选择性呈现', '只亮有利证据', '主动寻找反面信息'], ['框架操纵', '情绪化引导立场', '觉察标题与措辞的情绪指向']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fdf1e6"/><g font-size="13" text-anchor="middle"><rect x="40" y="40" width="150" height="100" rx="8" fill="#fde0d8" stroke="#c0392b" stroke-width="2"/><text x="115" y="80" fill="#9c1a2e">谣言</text><text x="115" y="105" fill="#9c1a2e" font-size="12">虚构·恶意</text><rect x="210" y="40" width="150" height="100" rx="8" fill="#fef3d8" stroke="#d9a441" stroke-width="2"/><text x="285" y="80" fill="#7a5a1e">误传</text><text x="285" y="105" fill="#7a5a1e" font-size="12">偏差·断章</text><rect x="380" y="40" width="150" height="100" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="455" y="80" fill="#3e6b2e">选择性</text><text x="455" y="105" fill="#3e6b2e" font-size="12">只亮有利</text><rect x="550" y="40" width="120" height="100" rx="8" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="610" y="80" fill="#0f3b5e">框架</text><text x="610" y="105" fill="#33536e" font-size="12">情绪引导</text></g><path d="M190 90 L208 90 M360 90 L378 90 M530 90 L548 90" stroke="#c0392b" stroke-width="2.5" marker-end="url(#u4l3a)"/><circle cx="340" cy="185" r="24" fill="#e85d3d"/><text x="340" y="191" font-size="13" fill="#fff" text-anchor="middle">存疑</text><path d="M115 140 L320 168 M285 140 L325 168 M455 140 L355 168 M610 140 L360 168" stroke="#8a6d3b" stroke-width="1.5" stroke-dasharray="4 4"/><text x="340" y="228" font-size="13" fill="#8a6d3b" text-anchor="middle">四类失真皆指向「存疑」：先疑后证，方不被惑</text></svg>', caption: '谣言、误传、选择性呈现、框架操纵四类失真，都提示我们要「先疑后证」。' },
        { type: 'heading', text: '三、辨析的方法与路径' },
        { type: 'keypoint', label: '核验路径', text: '辨识信息可遵循「<strong>溯源—交叉—查证—反思</strong>」四步：一溯信息源头是否权威，二看多源是否一致，三查事实是否经专业机构核实，四反思自身是否被情绪裹挟。四步下来，多数失真信息无所遁形。' },
        { type: 'list', items: ['溯源：看清信息来自谁、是否具备专业与公信', '交叉：比对多家独立信源，警惕单一来源', '查证：以权威机构、专业数据库核实关键事实', '反思：觉察自身情绪与立场，避免确认偏误', '警惕标题党：只读标题易误判，务必读全文', '对「转发即正义」「收费即真相」等话术保持警觉'] },
        { type: 'keypoint', label: '警惕茧房', text: '<strong>信息茧房</strong>指算法只推送我们「爱看」的内容，使我们被困于同质化信息中，渐失多元视角。破茧之法：主动关注不同立场的优质信源、定期跳出舒适区、与持异见者理性对话，让判断建立在更广阔的信息地基上。' },
        { type: 'warn', label: '易错·确认偏误', text: '人天生有<strong>确认偏误</strong>——倾向于相信符合自己既有观点的信息，忽略反面证据。辨识时要刻意「<strong>反向检验</strong>」：如果我反对这个结论，会找到哪些反证？若反证同样充分，则原判断需修正。切忌「我觉得对就是对」的主观臆断。' },
        { type: 'tip', label: '拓展', text: '辨识媒介信息，与语文学科的<strong>批判性阅读</strong>一脉相承。古人读书讲究「尽信书不如无书」，今天面对屏幕信息更当如此。把课内习得的质疑、求证、论证能力，迁移到日常信息消费中，正是「跨媒介阅读与交流」的深层价值——让语文素养成为抵御误导的铠甲。' },
        { type: 'keypoint', label: '日常训练', text: '辨识力非一日之功，要在<strong>日常中养成</strong>：关注权威媒体与专业信源、读原文而非只看二手解读、遇惊人结论先「让子弹飞一会儿」、与不同观点平和对话。把批判性思维变成<strong>肌肉记忆</strong>，方能在信息洪流中稳立不惑。' },
        { type: 'heading', text: '四、形成独立正确的判断' },
        { type: 'keypoint', label: '独立判断', text: '辨识的终点，是<strong>形成自己独立而正确的判断</strong>：既不盲从权威，也不轻信众声；既尊重事实，又理解多元立场；既快速反应，又审慎结论。独立判断不是固执己见，而是在充分辨识后的理性自主。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#f5f0ff"/><g font-size="14" text-anchor="middle"><rect x="30" y="55" width="140" height="90" rx="8" fill="#fde0d8" stroke="#c0392b" stroke-width="2"/><text x="100" y="95" fill="#9c1a2e">接收信息</text><text x="100" y="118" fill="#9c1a2e" font-size="12">先疑后证</text><rect x="200" y="55" width="140" height="90" rx="8" fill="#fef3d8" stroke="#d9a441" stroke-width="2"/><text x="270" y="95" fill="#7a5a1e">溯源交叉</text><text x="270" y="118" fill="#7a5a1e" font-size="12">多源核验</text><rect x="370" y="55" width="140" height="90" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="440" y="95" fill="#3e6b2e">反思偏误</text><text x="440" y="118" fill="#3e6b2e" font-size="12">跳出茧房</text><rect x="540" y="50" width="140" height="100" rx="8" fill="#5aa832" stroke="#3e6b2a" stroke-width="2"/><text x="610" y="90" fill="#fff">独立判断</text><text x="610" y="113" fill="#dff0c8" font-size="12">理性自主</text></g><g stroke="#5aa832" stroke-width="2.5" fill="none"><line x1="170" y1="100" x2="198" y2="100" marker-end="url(#u4l3b)"/><line x1="340" y1="100" x2="368" y2="100" marker-end="url(#u4l3b)"/><line x1="510" y1="100" x2="538" y2="100" marker-end="url(#u4l3b)"/></g><defs><marker id="u4l3b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#5aa832"/></marker></defs><text x="340" y="185" font-size="13" fill="#4a2b8a" text-anchor="middle">辨识闭环：接收 → 核验 → 反思 → 独立判断</text></svg>', caption: '从接收到独立判断，辨识信息是一条可训练的理性闭环。' },
        { type: 'list', items: ['辨识＝辨真假＋辨立场＋辨目的＋辨价值', '失真四类：谣言、误传、选择性呈现、框架操纵', '四步核验：溯源—交叉—查证—反思', '警惕确认偏误与信息茧房，主动破圈', '独立判断是理性自主，而非固执己见', '批判性阅读能力可迁移为信息辨识铠甲'] }
      ],
      exercises: [
        { type: 'choice', question: '「辨识媒介信息」最准确的理解是？', options: ['只要判断信息真假即可', '辨真假，还要辨立场、目的与价值', '只看信息来源是否官方', '相信大多数人的转发'], answer: '辨真假，还要辨立场、目的与价值', explanation: '辨识信息不只是辨真假，还包括辨立场（站何方）、辨目的（为哪般）、辨价值（值不值）。一条信息即便事实无误，也可能隐含特定取向或情绪引导，故须多维度审视，而非仅凭真假二元判断。' },
        { type: 'choice', question: '「某水果能治百病」这类说法最可能存在的失真问题是？', options: ['只是排版错误', '夸大因果、选择性证据与情绪诱导并存', '完全无害的科普', '已由权威机构认证'], answer: '夸大因果、选择性证据与情绪诱导并存', explanation: '此类说法常把相关性夸大为因果、只展示有利个例而隐瞒反例、用温情画面降低警惕。辨识时应追问证据是否充分、有无利益关联、是否经权威验证。三重破绽叠加，正属典型的信息误导。' },
        { type: 'fill', question: '辨识信息的四步路径是：溯源 — ______ — 查证 — 反思。', answer: '交叉', explanation: '「溯源—交叉—查证—反思」是辨识信息的四步法：先溯源头是否权威，再交叉比对多家独立信源，继而查证关键事实是否经专业核实，最后反思自身是否被情绪裹挟。其中「交叉」能及时发现单一来源的偏颇与失真。' },
        { type: 'choice', question: '关于「信息茧房」，下列说法正确的一项是？', options: ['茧房让人视野更广', '算法只推「爱看」的内容，使人困于同质信息、渐失多元视角', '茧房只存在于纸媒', '茧房对辨识信息没有危害'], answer: '算法只推「爱看」的内容，使人困于同质信息、渐失多元视角', explanation: '信息茧房指算法依偏好只推送同类内容，令人困于同质化信息中、渐失多元视角，反而加剧误判。破茧需主动关注不同立场的优质信源、跳出舒适区，而非任由算法投喂。' },
        { type: 'choice', question: '为避免「确认偏误」，最恰当的做法是？', options: ['只信符合自己观点的信息', '刻意反向检验，主动寻找反面证据', '完全不接触异见', '凭直觉下结论'], answer: '刻意反向检验，主动寻找反面证据', explanation: '确认偏误使人倾向相信符合既有观点的信息、忽略反证。正确做法是「反向检验」：假设我反对此结论，会找到哪些反证？若反证同样充分，原判断须修正。这能克服主观臆断，逼近客观。' }
      ]
    }
  );
})();
