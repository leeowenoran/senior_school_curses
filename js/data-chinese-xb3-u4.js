(function () {
  var v = gzGetVolume('chinese', 'xb3');
  if (!v) return;
  v.points.push(

    /* ===================== 第四单元 求真求实（科学与文化论著研习） ===================== */

    { id: 'xb3-u4-l1',    cover: 'assets/cover/chinese/xb3-u4-l1.svg',
    name: '《自然选择的证明》', author: '达尔文', chapter: '第四单元 求真求实（科学与文化论著研习）', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与论著背景' },
        { type: 'paragraph', text: '《自然选择的证明》节选自达尔文的巨著《物种起源》（1859）。达尔文随“贝格尔号”舰环球考察五年，搜集了大量生物分布、形态与化石证据，提出生物进化与自然选择学说，从根本上动摇了“神创论”与“物种不变论”。' },
        { type: 'keypoint', label: '达尔文与进化论', text: '查尔斯·达尔文（1809—1882）是英国博物学家，<strong>进化论</strong>的奠基人。他在《物种起源》中系统论证：物种不是神创的、永恒不变的，而是在漫长历史中通过<strong>自然选择</strong>逐渐演变而来。' },
        { type: 'list', items: ['考察：1831—1836 随贝格尔号环球航行', '证据：生物地理分布、同源器官、化石序列', '核心：《物种起源》提出自然选择学说', '影响：引发生物学与思想界的革命'] },
        { type: 'heading', text: '二、自然选择的核心机制' },
        { type: 'paragraph', text: '自然选择赖以发生，需具备四个相互关联的前提：生物普遍存在可遗传的变异；生物具有过度繁殖的倾向；资源有限导致生存斗争；在斗争中具有利变异的个体更易存活并繁衍，即“适者生存”，有利变异逐代积累。' },
        { type: 'list', items: ['变异：同种个体间存在可遗传的差异，是进化的原材料', '遗传：有利变异能够传递给后代', '生存斗争：过度繁殖与有限资源之间的矛盾', '适者生存：有利变异被保留，不利变异被淘汰'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">自然选择核心机制</text><rect x="30" y="90" width="120" height="60" rx="8" fill="#7aa05a"/><text x="90" y="126" text-anchor="middle" font-size="13" fill="#fff">变异</text><rect x="200" y="90" width="120" height="60" rx="8" fill="#c08168"/><text x="260" y="126" text-anchor="middle" font-size="13" fill="#fff">遗传</text><rect x="370" y="90" width="120" height="60" rx="8" fill="#a8632e"/><text x="430" y="126" text-anchor="middle" font-size="13" fill="#fff">生存斗争</text><rect x="540" y="90" width="120" height="60" rx="8" fill="#9c4221"/><text x="600" y="126" text-anchor="middle" font-size="13" fill="#fff">适者生存</text><path d="M150 120 L198 120" stroke="#9c4221" stroke-width="3" marker-end="url(#l1a)"/><path d="M320 120 L368 120" stroke="#9c4221" stroke-width="3" marker-end="url(#l1a)"/><path d="M490 120 L538 120" stroke="#9c4221" stroke-width="3" marker-end="url(#l1a)"/><text x="340" y="200" text-anchor="middle" font-size="13" fill="#555">有利变异被保留，不利变异被淘汰，种群渐变</text><defs><marker id="l1a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '变异、遗传、生存斗争、适者生存四环节环环相扣，构成自然选择的机制。' },
        { type: 'heading', text: '三、自然选择 vs 人工选择' },
        { type: 'paragraph', text: '达尔文常借人工选择（如家鸽、家畜育种）类比自然选择：人工选择由人挑选合意性状，自然选择则由环境“挑选”利于生存的性状。二者机制相似，但选择的主体与目的不同。' },
        { type: 'table', headers: ['比较项', '自然选择', '人工选择'], rows: [['选择主体', '自然环境', '人类育种者'], ['选择标准', '生存与繁衍优势', '人类所需性状'], ['结果', '物种适应环境的进化', '符合人类需求的品种'], ['速度', '极其缓慢、历时漫长', '相对较快']] },
        { type: 'keypoint', label: '核心区分', text: '人工选择是<strong>有意识</strong>的，自然选择是<strong>无意识</strong>的。自然选择没有预定目的，只是环境对已有变异的“筛子”，被保留的永远是更能适应环境的个体。' },
        { type: 'example', label: '实例解析', text: '以长颈鹿为例：<br>种群中本来存在颈长与颈短的<strong>变异</strong>；在食物短缺时，颈长者更易取食高处树叶而存活繁衍，颈短者逐渐被淘汰；经过漫长世代，有利变异累积，便形成今天长颈鹿的长颈。这正是自然选择“适者生存”的生动说明。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">自然选择 vs 人工选择</text><rect x="50" y="60" width="250" height="55" rx="8" fill="#9c4221"/><text x="175" y="92" text-anchor="middle" font-size="13" fill="#fff">自然选择：环境筛选</text><rect x="380" y="60" width="250" height="55" rx="8" fill="#c08168"/><text x="505" y="92" text-anchor="middle" font-size="13" fill="#fff">人工选择：人筛选</text><circle cx="120" cy="170" r="30" fill="#7aa05a"/><text x="120" y="174" text-anchor="middle" font-size="12" fill="#fff">变异</text><circle cx="260" cy="170" r="30" fill="#a8632e"/><text x="260" y="174" text-anchor="middle" font-size="12" fill="#fff">环境</text><circle cx="420" cy="170" r="30" fill="#7aa05a"/><text x="420" y="174" text-anchor="middle" font-size="12" fill="#fff">变异</text><circle cx="560" cy="170" r="30" fill="#9c4221"/><text x="560" y="174" text-anchor="middle" font-size="12" fill="#fff">人需</text><text x="340" y="222" text-anchor="middle" font-size="12" fill="#555">机制相似，主体与目的不同</text></svg>', caption: '二者都从变异中筛选，但自然选择由环境主导，人工选择由人类主导。' },
        { type: 'heading', text: '四、论证方法' },
        { type: 'paragraph', text: '作为科学论著，本文论证严谨而通俗：以大量生物事实为归纳基础，借助家养与野生的类比使抽象机制可感，并辅以前人观察与自身考察的丰富例证，层层推进，令人信服。' },
        { type: 'list', items: ['归纳：从无数生物现象概括出普遍规律', '类比：以人工选择类比自然选择', '例证：用具体物种与化石事实支撑论点', '因果：揭示变异—斗争—选择的因果链条'] },
        { type: 'warn', label: '易错辨析', text: '自然选择并不等于“优胜劣汰”的简单淘汰，更强调<strong>有利变异的保存与积累</strong>；它也不能“创造”变异，只是对已有变异进行筛选。此外，文中对“设计论”的反驳是科学论证，而非神学争论，阅读时需把握其论据逻辑。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">论证方法结构</text><rect x="60" y="80" width="160" height="55" rx="8" fill="#7aa05a"/><text x="140" y="112" text-anchor="middle" font-size="13" fill="#fff">归纳</text><rect x="260" y="80" width="160" height="55" rx="8" fill="#c08168"/><text x="340" y="112" text-anchor="middle" font-size="13" fill="#fff">类比</text><rect x="460" y="80" width="160" height="55" rx="8" fill="#a8632e"/><text x="540" y="112" text-anchor="middle" font-size="13" fill="#fff">例证</text><path d="M220 107 L258 107" stroke="#9c4221" stroke-width="3" marker-end="url(#l1b)"/><path d="M420 107 L458 107" stroke="#9c4221" stroke-width="3" marker-end="url(#l1b)"/><rect x="200" y="160" width="280" height="55" rx="8" fill="#9c4221"/><text x="340" y="192" text-anchor="middle" font-size="13" fill="#fff">结论：自然选择学说</text><path d="M340 135 L340 158" stroke="#9c4221" stroke-width="3" marker-end="url(#l1b)"/><defs><marker id="l1b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '本文以归纳、类比、例证为支柱，最终得出自然选择的总体结论。' },
        { type: 'heading', text: '五、与神创论的论辩' },
        { type: 'paragraph', text: '达尔文以生物分布的地理规律、同源器官的相似构造、退化器官的存在等证据，反驳了“器官为特定目的而被设计”的论点。他主张，复杂适应是漫长选择的结果，而非一次性智慧设计。这一论辩奠定了现代进化生物学的基础。' },
        { type: 'tip', label: '学习提示', text: '预习时可抓住“变异—遗传—斗争—适者生存”四环节理清机制，并重点体会科学论著“用事实说话”的论证风格，以及类比手法化深奥为通俗的妙处。' },
        { type: 'reading', text: '延伸思考：自然选择强调“无目的”的筛选，而人类活动（如抗生素滥用导致的耐药菌）是否正在成为一种新的“人工选择”？这给我们怎样的启示？' }
      ],
      exercises: [
        { type: 'choice', question: '达尔文的《物种起源》提出的核心学说是？', options: ['神创论', '自然选择（进化论）', '物种不变论', '地心说'], answer: '自然选择（进化论）', explanation: '达尔文在1859年出版的《物种起源》中系统提出自然选择学说，认为物种在漫长历史中通过自然选择逐渐演变，而非神创或永恒不变，这标志着进化生物学的诞生，故选自然选择（进化论）。' },
        { type: 'fill', question: '自然选择学说中，生物普遍存在的可遗传__为进化提供了原材料，再经环境筛选而积累。', answer: '变异', explanation: '变异指同种生物个体之间可遗传的差异。自然选择本身并不制造变异，而是从已有的变异中筛选有利者，因此变异是进化的原材料，遗传使其得以保存和传递。' },
        { type: 'choice', question: '下列对自然选择学说表述不正确的一项是？', options: ['生物具有过度繁殖的倾向', '生存斗争推动自然选择的进行', '有利变异被环境保留并积累', '物种由神一次性创造且永恒不变'], answer: '物种由神一次性创造且永恒不变', explanation: '自然选择学说主张物种是可变的、由共同祖先经漫长演变而来，直接否定了“神创且永恒不变”的观点。其余三项均为学说的正确内容，故该项表述错误。' },
        { type: 'fill', question: '达尔文在论证中，除大量例证外，还借助__与__的方法，使抽象的进化机制通俗可感。', answer: '归纳和类比', explanation: '本文以无数生物现象作归纳、以人工选择类比自然选择，并辅以丰富例证。归纳与类比是科学论著常用的论证方法，能帮助读者从已知推知未知、把深奥道理讲得明白。' },
        { type: 'choice', question: '《自然选择的证明》所属单元的主题是？', options: ['中华传统文化经典研习', '科学与文化论著研习', '中国革命传统作品研习', '整本书阅读'], answer: '科学与文化论著研习', explanation: '本课与《宇宙的边疆》《天文学上的旷世之争》同属选择性必修下册第四单元“求真求实（科学与文化论著研习）”，侧重研读科学与文化论著，学习其论证与说明方法，故选此项。' }
      ]
    },

    { id: 'xb3-u4-l2',    cover: 'assets/cover/chinese/xb3-u4-l2.svg',
    name: '《宇宙的边疆》', author: '卡尔·萨根', chapter: '第四单元 求真求实（科学与文化论著研习）', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体与作者' },
        { type: 'paragraph', text: '《宇宙的边疆》是电视系列片《宇宙》的解说词，作者卡尔·萨根（1934—1996）是美国天文学家、科普作家。作品以宏大而诗意的笔触，引导观众由远及近地认识宇宙的尺度与人类的位置。' },
        { type: 'keypoint', label: '解说词的特征', text: '解说词是配合图像、声音说明内容的文体，兼具<strong>科学性</strong>与<strong>文学性</strong>：既须准确传达知识，又常以抒情、比喻感染观众，使抽象的天文尺度变得可感可亲。' },
        { type: 'list', items: ['配合视听：与画面、音乐相互补充', '由远及近：常按空间或认知顺序展开', '情理交融：科学知识中融入人文情怀', '语言形象：多用比喻、设问引发遐想'] },
        { type: 'heading', text: '二、宇宙的宏大尺度' },
        { type: 'paragraph', text: '宇宙之辽阔远超日常经验：无数星系组成星系团，每个星系又包含上千亿颗恒星，恒星周围可能环绕行星。以光年计的距离提醒我们，人类所居的地球不过是沧海一粟。' },
        { type: 'list', items: ['星系：由恒星、气体与暗物质组成的巨大系统', '恒星：如太阳般发光发热的天体', '行星：环绕恒星运行、自身不发光的天体', '地球：目前已知唯一孕育生命的星球'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">宇宙层级尺度</text><circle cx="340" cy="130" r="90" fill="#9c4221"/><text x="340" y="126" text-anchor="middle" font-size="13" fill="#fff">星系团</text><circle cx="340" cy="130" r="55" fill="#c08168"/><text x="340" y="126" text-anchor="middle" font-size="12" fill="#fff">星系</text><circle cx="340" cy="130" r="28" fill="#a8632e"/><text x="340" y="134" text-anchor="middle" font-size="11" fill="#fff">恒星</text><circle cx="340" cy="130" r="10" fill="#7aa05a"/><text x="340" y="134" text-anchor="middle" font-size="9" fill="#fff">行星</text><text x="500" y="60" font-size="12" fill="#555">大尺度←小尺度</text></svg>', caption: '宇宙由星系团、星系、恒星到行星层层嵌套，尺度跨越极其悬殊。' },
        { type: 'heading', text: '三、说明顺序：由远及近' },
        { type: 'paragraph', text: '课文从宇宙整体落笔，逐步收束到星系、恒星、行星，最终回到地球与人类。这种“由宏观到微观、由远及近”的顺序，符合认知规律，也营造出从浩瀚到亲切的情感落差。' },
        { type: 'table', headers: ['层次', '说明对象', '表达作用'], rows: [['最外层', '宇宙整体与星系', '展现宏大背景'], ['中间层', '恒星与行星系统', '拉近具体尺度'], ['最近层', '地球与人类', '落脚人文关怀']] },
        { type: 'example', label: '写法赏析', text: '“我们探索宇宙的时候，既要勇于怀疑，又要富于想象。”<br>这句话将<strong>科学态度</strong>（怀疑）与<strong>诗意情怀</strong>（想象）并置，典型体现了解说词情理交融的特质：既要求证，又不忘对未知保持敬畏与好奇。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">由远及近的说明顺序</text><rect x="40" y="90" width="170" height="55" rx="8" fill="#9c4221"/><text x="125" y="122" text-anchor="middle" font-size="13" fill="#fff">宇宙整体</text><rect x="255" y="90" width="170" height="55" rx="8" fill="#c08168"/><text x="340" y="122" text-anchor="middle" font-size="13" fill="#fff">星系恒星</text><rect x="470" y="90" width="170" height="55" rx="8" fill="#7aa05a"/><text x="555" y="122" text-anchor="middle" font-size="13" fill="#fff">地球人类</text><path d="M210 117 L253 117" stroke="#9c4221" stroke-width="3" marker-end="url(#l2a)"/><path d="M425 117 L468 117" stroke="#9c4221" stroke-width="3" marker-end="url(#l2a)"/><text x="340" y="200" text-anchor="middle" font-size="13" fill="#555">由宏观到微观，由浩瀚到亲切</text><defs><marker id="l2a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '说明顺序由宇宙整体层层收束至地球与人类，符合认知并营造情感落差。' },
        { type: 'heading', text: '四、科学精神与人文情怀' },
        { type: 'paragraph', text: '萨根在介绍宇宙尺度时，始终回照人类自身：探索宇宙并非为了贬低人类，而是为了更清醒地认识我们唯一的家园。这种将科学理性与人文关怀结合的态度，是科普作品的灵魂。' },
        { type: 'keypoint', label: '科普的旨归', text: '优秀的科普作品不仅是<strong>知识传递</strong>，更是<strong>科学精神的播种</strong>：它培养读者用证据思考、对未知保持好奇，并在浩瀚宇宙中确认人类责任的自觉。' },
        { type: 'list', items: ['理性：以证据与逻辑认识世界', '好奇：对未知保持想象与敬畏', '责任：珍视地球这一独特家园', '沟通：用通俗语言表达专门知识'] },
        { type: 'warn', label: '易错提醒', text: '解说词不同于议论文：它不以论证某个观点为核心，而以<strong>说明与感染</strong>为目的；文中抒情、比喻是为了帮助理解而非替代证据。阅读时不可把文学渲染误当作科学结论。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">人类探索宇宙的意义</text><circle cx="170" cy="130" r="44" fill="#9c4221"/><text x="170" y="126" text-anchor="middle" font-size="12" fill="#fff">认识宇宙</text><circle cx="340" cy="130" r="44" fill="#c08168"/><text x="340" y="126" text-anchor="middle" font-size="12" fill="#fff">认识自我</text><circle cx="510" cy="130" r="44" fill="#7aa05a"/><text x="510" y="126" text-anchor="middle" font-size="12" fill="#fff">珍视家园</text><path d="M214 130 L296 130" stroke="#9c4221" stroke-width="3" marker-end="url(#l2b)"/><path d="M384 130 L466 130" stroke="#9c4221" stroke-width="3" marker-end="url(#l2b)"/><defs><marker id="l2b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '探索宇宙的最终落点，是从认识宇宙回到认识自我、珍视地球家园。' },
        { type: 'heading', text: '五、学习要点' },
        { type: 'paragraph', text: '学习本文，应把握解说词的文体特征，梳理“由远及近”的说明顺序，体会科学性与文学性交融的语言风格，并思考科普作品在当代科学传播中的价值。' },
        { type: 'tip', label: '学习提示', text: '预习时可画一张“宇宙层级—说明顺序”的示意图帮助理解；同时摘抄文中富有感染力的语句，体会解说词如何把冷峻的天文数字写得动人。' },
        { type: 'reading', text: '延伸：将《宇宙的边疆》与《自然选择的证明》对读，一则偏重科普解说，一则偏重科学论证，可见“科学与文化论著”单元的文体多样性。' }
      ],
      exercises: [
        { type: 'choice', question: '《宇宙的边疆》的文体属于？', options: ['电视片解说词（科普）', '议论文', '小说', '诗歌'], answer: '电视片解说词（科普）', explanation: '本文是电视系列片《宇宙》的解说词，由天文学家卡尔·萨根撰写，兼具科学性与文学性，目的是向大众介绍宇宙并感染观众，属于科普解说词，故选此项。' },
        { type: 'fill', question: '课文按由__及__（由宏观到微观）的顺序，从宇宙整体逐步收束到地球与人类。', answer: '远和近', explanation: '本文说明顺序是由远及近、由宏观到微观：先写宇宙整体与星系，再写恒星行星，最后回到地球与人类。这种顺序符合认知规律，也形成从浩瀚到亲切的情感落差。' },
        { type: 'choice', question: '下列对解说词特征表述正确的一项是？', options: ['只重科学不重抒情', '科学性与文学性交融', '完全不使用比喻', '以论证观点为核心'], answer: '科学性与文学性交融', explanation: '解说词既要准确传达科学知识，又常以抒情、比喻感染受众，是科学性与文学性的结合。它不以论证观点为核心，也广泛使用比喻，故选项“科学性与文学性交融”正确。' },
        { type: 'fill', question: '宇宙尺度从大到小大致为星系团、星系、恒星，以及环绕恒星运行的__（如地球）。', answer: '行星', explanation: '在宇宙层级中，行星是环绕恒星运行、自身不发光的天体，地球即太阳系中的一颗行星。课文由星系、恒星层层收束到行星与地球，正是这一尺度顺序的体现。' },
        { type: 'choice', question: '作者写宇宙探索，最终落脚于？', options: ['人类渺小无用', '人类探索的意义与自身定位', '否定科学价值', '宣扬宗教神学'], answer: '人类探索的意义与自身定位', explanation: '萨根在展现宇宙宏大后，总回照人类自身，强调探索是为了更清醒地认识我们唯一的家园，体现科学理性与人文关怀的结合，故选“人类探索的意义与自身定位”。' }
      ]
    },

    { id: 'xb3-u4-l3',    cover: 'assets/cover/chinese/xb3-u4-l3.svg',
    name: '《天文学上的旷世之争》', author: '关增建', chapter: '第四单元 求真求实（科学与文化论著研习）', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、作者与论著性质' },
        { type: 'paragraph', text: '《天文学上的旷世之争》是一篇科学史论文，作者关增建致力于中国计量科学与天文历史研究。文章梳理了中国古代关于宇宙结构的学说之争，并置于世界天文学发展的背景下加以评判。' },
        { type: 'keypoint', label: '科学史论文', text: '科学史论文以<strong>历史眼光</strong>审视科学观念的演进：它不仅记录“是什么”，更追问“为何如此变化”，借学说更迭揭示科学进步的内在逻辑与方法论。' },
        { type: 'list', items: ['盖天说：主张“天圆地方”的半球盖天模型', '浑天说：主张天地如蛋，天包地于内', '宣夜说：否认固体的天，主张日月浮于元气', '演化：由盖天到浑天，宣夜说影响思想'] },
        { type: 'heading', text: '二、盖天说、浑天说与宣夜说' },
        { type: 'paragraph', text: '中国古代对宇宙结构长期争论。盖天说以为天如张盖、地如棋盘；浑天说以蛋喻之，天体圆如弹丸、地居其中；宣夜说最为开放，认为天无定形，日月星辰依托元气飘浮，否定了实体的天壳。' },
        { type: 'table', headers: ['学说', '宇宙模型', '核心主张'], rows: [['盖天说', '天圆地方（半球盖）', '天如张盖，地如棋局'], ['浑天说', '天包地（蛋形）', '天地如鸡子，地如鸡中黄'], ['宣夜说', '无实体天壳', '日月浮于元气，天无定形']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">中国古代宇宙三说</text><path d="M120 190 A70 70 0 0 1 120 50" stroke="#9c4221" stroke-width="4" fill="none"/><line x1="50" y1="190" x2="190" y2="190" stroke="#7aa05a" stroke-width="4"/><text x="120" y="215" text-anchor="middle" font-size="12" fill="#555">盖天说</text><circle cx="360" cy="120" r="60" fill="#9c4221"/><circle cx="360" cy="120" r="22" fill="#a8632e"/><text x="360" y="215" text-anchor="middle" font-size="12" fill="#555">浑天说</text><circle cx="560" cy="120" r="60" fill="none" stroke="#c08168" stroke-width="2" stroke-dasharray="4"/><circle cx="560" cy="120" r="10" fill="#7aa05a"/><text x="560" y="215" text-anchor="middle" font-size="12" fill="#555">宣夜说</text></svg>', caption: '盖天、浑天、宣夜三说分别代表中国古代对宇宙结构的三种想象。' },
        { type: 'heading', text: '三、中西宇宙模型之争' },
        { type: 'paragraph', text: '在西方，托勒密提出地心说，以本轮—均轮解释行星视运动；哥白尼则倡日心说，将太阳置于中心。日心说因更简洁、预测更准而最终胜出，标志科学从权威走向证据。' },
        { type: 'list', items: ['托勒密地心说：地球居中，行星绕地运行', '哥白尼日心说：太阳居中，地球绕日运行', '胜负关键：解释力、预测力与简洁性', '意义：科学标准取代哲学与权威'] },
        { type: 'example', label: '古籍引文', text: '盖天说经典表述见于《周髀算经》：“天圆如张盖，地方如棋局。”<br>浑天说则以张衡《浑天仪注》为要：“浑天如鸡子，天体圆如弹丸，地如鸡子中黄，孤居于天内。”两则引文直观呈现了古人对天地的具象想象。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">地心说 vs 日心说</text><circle cx="170" cy="130" r="26" fill="#9c4221"/><text x="170" y="134" text-anchor="middle" font-size="12" fill="#fff">地</text><circle cx="170" cy="130" r="60" fill="none" stroke="#c08168" stroke-width="2" stroke-dasharray="4"/><circle cx="170" cy="130" r="95" fill="none" stroke="#c08168" stroke-width="2" stroke-dasharray="4"/><text x="170" y="40" font-size="12" fill="#555">托勒密地心说</text><circle cx="510" cy="130" r="26" fill="#9c4221"/><text x="510" y="134" text-anchor="middle" font-size="12" fill="#fff">日</text><circle cx="510" cy="130" r="70" fill="none" stroke="#7aa05a" stroke-width="2" stroke-dasharray="4"/><circle cx="510" cy="130" r="14" fill="#a8632e"/><text x="510" y="40" font-size="12" fill="#555">哥白尼日心说</text></svg>', caption: '地心说以地球为中心，日心说以太阳为中心，后者因解释更优而胜出。' },
        { type: 'heading', text: '四、科学理论更迭的标准' },
        { type: 'paragraph', text: '一种学说取代另一种，并非靠论辩气势或权威身份，而是看它能否更好地解释现象、更准确地预测未知、更简洁地组织知识。解释力、预测力与简洁性，是衡量理论优劣的客观标尺。' },
        { type: 'keypoint', label: '更迭的三条标准', text: '科学理论的优胜，取决于：<strong>解释力</strong>（涵盖已知现象）、<strong>预测力</strong>（预见新事实）、<strong>简洁性</strong>（以更少假设说明更多）。三者共同构成科学进步的可检验标准。' },
        { type: 'list', items: ['解释力：能否涵盖已有观测事实', '预测力：能否预言尚未发现的现象', '简洁性：假设是否经济、不繁复', '可证伪：能否被观测检验与修正'] },
        { type: 'warn', label: '易错提醒', text: '宣夜说虽思想开放，却因缺乏可计算的模型而难以指导实测，故未成主流；评价学说不能只看“想象大胆”，更要看<strong>能否解释与预测</strong>。此外，地心说长期居正统，说明科学接受还受社会与权威影响。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">理论更迭的评判标准</text><rect x="60" y="90" width="170" height="55" rx="8" fill="#7aa05a"/><text x="145" y="122" text-anchor="middle" font-size="13" fill="#fff">解释力</text><rect x="255" y="90" width="170" height="55" rx="8" fill="#c08168"/><text x="340" y="122" text-anchor="middle" font-size="13" fill="#fff">预测力</text><rect x="450" y="90" width="170" height="55" rx="8" fill="#a8632e"/><text x="535" y="122" text-anchor="middle" font-size="13" fill="#fff">简洁性</text><path d="M230 117 L253 117" stroke="#9c4221" stroke-width="3" marker-end="url(#l3a)"/><path d="M425 117 L448 117" stroke="#9c4221" stroke-width="3" marker-end="url(#l3a)"/><rect x="200" y="170" width="280" height="45" rx="8" fill="#9c4221"/><text x="340" y="198" text-anchor="middle" font-size="13" fill="#fff">更优理论胜出</text><defs><marker id="l3a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#9c4221"/></marker></defs></svg>', caption: '以解释力、预测力、简洁性为准绳，更能说明事实的理论终将取代旧说。' },
        { type: 'heading', text: '五、方法论启示' },
        { type: 'paragraph', text: '旷世之争留给我们的，不只是宇宙模型的知识，更是科学方法论的启示：真理不靠权威裁定，而靠证据与理性不断检验；开放包容、敢于修正，才是科学得以进步的根本品格。' },
        { type: 'tip', label: '学习提示', text: '预习时可制作一张“中外宇宙学说对比表”，重点理解“为何一种理论能取代另一种”，体会科学史论文以史为鉴、提炼方法论的写法。' },
        { type: 'reading', text: '延伸：从盖天说到日心说，人类对宇宙的认识一再被推翻与重建。今天“暗物质”“暗能量”仍是未解之谜——科学的边界，是否也意味着新的“旷世之争”正在酝酿？' }
      ],
      exercises: [
        { type: 'choice', question: '下列不属于中国古代宇宙结构学说的是？', options: ['盖天说', '浑天说', '宣夜说', '日心说'], answer: '日心说', explanation: '盖天说、浑天说、宣夜说均为中国古代关于宇宙结构的代表性学说，而日心说是西方哥白尼提出的宇宙模型，不属于中国古代学说，故选日心说。' },
        { type: 'fill', question: '张衡《浑天仪注》以“浑天如鸡子……地如鸡子中黄”来描述__说（盖天/浑天）。', answer: '浑天', explanation: '浑天说认为天地关系如同鸡蛋，天体圆如弹丸、大地如同蛋黄居于天内。张衡《浑天仪注》中“浑天如鸡子，地如鸡中黄”正是对浑天说的经典表述，与盖天说“天圆地方”迥异。' },
        { type: 'choice', question: '在西方宇宙模型中，托勒密主张的是？', options: ['日心说', '地心说', '宣夜说', '盖天说'], answer: '地心说', explanation: '托勒密在《天文学大成》中系统提出地心说，认为地球静止居于宇宙中心，日月行星绕地运行，并以本轮—均轮解释其视运动，长期作为西方正统宇宙模型，故选地心说。' },
        { type: 'fill', question: '科学理论更迭的评判标准包括解释力、预测力与__（如假设是否经济）。', answer: '简洁性', explanation: '一种理论能否取代旧说，要看它是否具备更强的解释力、预测力与简洁性。简洁性指以更少、更经济的假设说明更多现象，是科学理论优越性的重要标尺。' },
        { type: 'choice', question: '《天文学上的旷世之争》一文的文体性质是？', options: ['科普小说', '科学史论文', '诗歌', '剧本'], answer: '科学史论文', explanation: '本文梳理中国古代宇宙学说的演变并置于世界背景下评判，以历史眼光揭示科学进步的逻辑与方法论，属于科学史论文，而非虚构的科普小说或文学作品，故选科学史论文。' }
      ]
    }

  );
})();
