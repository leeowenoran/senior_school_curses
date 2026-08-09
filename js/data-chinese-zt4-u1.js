/* 语文 · 高考复习 · 四、写作（zt4）：材料作文、命题/半命题、话题作文、任务驱动型作文 */
(function () {
  var v = gzGetVolume('chinese', 'zt4');
  if (!v) return;

  /* —— 子板块 1：材料作文 —— */
  v.points.push({
    id: 'zt4-cailiao',
    cover: 'assets/cover/chinese/zt4-cailiao.svg',
    name: '材料作文',
    chapter: '四、写作',
    difficulty: '较难',
    content: [
      { type: 'heading', text: '一、题型概览' },
      { type: 'paragraph', text: '材料作文提供一段文字、图画或组合材料，要求据此立意写作。它重在对材料的整体把握与个性化解读，是高考最常见的作文题型。' },
      { type: 'list', items: ['通读材料，分清主次与关系', '提炼核心立意（最佳角度）', '拟写明确而有文采的标题', '安排"引—议—联—结"结构', '用论据与思辨支撑观点'] },
      { type: 'keypoint', text: '<strong>立意三步</strong>：抓关键词句（反复出现、议论句）、看材料关系（对立统一、因果）、定最佳角度（贴合主旨且能写出深度）。切忌脱离材料另起炉灶。' },
      { type: 'table', headers: ['环节', '要点', '常见失误'], rows: [
        ['审题', '整体把握不偏题', '抓枝节弃主流'],
        ['立意', '集中鲜明有深度', '多中心散乱'],
        ['结构', '引议联结清晰', '堆砌材料无分析']
      ] },
      { type: 'tip', text: '<strong>开篇技巧</strong>：以"引述材料+亮明观点"破题，避免照抄全文；主体段采用"观点句+阐释句+事例句+分析句+结论句"五步法，每段都有思辨。' },
      { type: 'warn', text: '易错点：立意偏离材料主旨；通篇不提材料"裸写"；论据与观点"两张皮"只摆不析；结构松散无中心。' },
      { type: 'example', text: '示例（高考风格）：阅读下面的材料，自选角度写一篇不少于800字的文章。思路：先概括材料核心矛盾，提炼"坚守与变通"等立意，再拟题、列提纲、展开论述。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f3f7fc"/><text x="20" y="32" font-size="18" fill="#2f5d9e" font-weight="bold">材料作文 · 写作流程</text><rect x="30" y="70" width="130" height="56" rx="8" fill="#dce8f7" stroke="#2f5d9e"/><text x="95" y="103" font-size="13" fill="#1f3a5f" text-anchor="middle">审题</text><rect x="185" y="70" width="130" height="56" rx="8" fill="#dce8f7" stroke="#2f5d9e"/><text x="250" y="103" font-size="13" fill="#1f3a5f" text-anchor="middle">立意</text><rect x="340" y="70" width="130" height="56" rx="8" fill="#dce8f7" stroke="#2f5d9e"/><text x="405" y="103" font-size="13" fill="#1f3a5f" text-anchor="middle">拟题</text><rect x="495" y="70" width="155" height="56" rx="8" fill="#e9f3e3" stroke="#3f7d1e"/><text x="572" y="103" font-size="13" fill="#2e3a22" text-anchor="middle">引议联结</text></svg>', caption: '材料作文按审题、立意、拟题到引议联结展开。' }
    ],
    exercises: [
      { type: 'choice', question: '材料作文立意的首要原则是（ ）。', options: ['越新奇越好', '贴合材料主旨', '完全脱离材料', '只写自己想写的'], answer: '贴合材料主旨', explanation: '立意必须从材料整体出发提炼核心，贴合主旨方能不偏题；刻意求新而脱离材料、另起炉灶都会被判离题。' },
      { type: 'choice', question: '下列开篇做法恰当的是（ ）。', options: ['照抄整段材料', '引述材料并亮明观点', '通篇不提材料', '先写 unrelated 故事'], answer: '引述材料并亮明观点', explanation: '材料作文开篇宜简引材料、迅速亮明中心论点，既回应题目要求又开宗明义；照抄或完全不提材料均不当。' },
      { type: 'fill', question: '主体段可采用"观点句、阐释句、事例句、______句、结论句"五步法。', answer: '分析', explanation: '段落五步法中"分析句"最关键，须把事例与观点勾连起来说理，避免只摆论据不分析的"两张皮"现象。' },
      { type: 'choice', question: '下列属于材料作文常见失误的是（ ）。', options: ['中心鲜明', '论据服务观点', '堆砌材料无分析', '结构清晰'], answer: '堆砌材料无分析', explanation: '只罗列事例而不做分析，导致论据与观点脱节，是材料作文典型失分点；其余三项均为正向做法。' },
      { type: 'fill', question: '审题时可优先关注材料中反复出现的______与议论句。', answer: '关键词', explanation: '关键词句往往提示命题意图与核心矛盾，是提炼立意的最佳切入点，能避免抓枝节弃主流。' }
    ]
  });

  /* —— 子板块 2：命题/半命题作文 —— */
  v.points.push({
    id: 'zt4-mingti',
    cover: 'assets/cover/chinese/zt4-mingti.svg',
    name: '命题/半命题作文',
    chapter: '四、写作',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、题型概览' },
      { type: 'paragraph', text: '命题作文给出完整题目，半命题给出带空缺的题目（如"____之美"），要求补全后写作。二者都限定了写作方向与范围，重在审题精准与化虚为实。' },
      { type: 'list', items: ['审清题目关键词的义涵与限制', '半命题选择熟悉而有素材的角度补全', '将抽象题目落为具体的人事物', '在限定范围内写出个性与深度'] },
      { type: 'keypoint', text: '<strong>半命题补题策略</strong>：选自己有真材料、能写出彩的角度（如"细节之美"优于空泛"生活之美"）；避免与多数考生雷同，也要避免过于生僻。' },
      { type: 'tip', text: '命题作文勿擅自改题；对"见证""留痕"等词要先界定再展开。可运用"以小见大"，用具体小事承载大主题，避免空喊口号。' },
      { type: 'warn', text: '易错点：半命题补题过大过空导致无物可写；命题作文偷换概念（把"底线"写成"规则"）；审题忽略修饰语（"这也是一种____"的"也"）。' },
      { type: 'example', text: '示例（高考风格）：请以"带着______出发"为题写一篇文章。思路：补全为"带着热爱出发"，用亲身经历化虚为实，以小见大展开论述。' }
    ],
    exercises: [
      { type: 'choice', question: '半命题作文补题时应优先选择（ ）。', options: ['越大越好', '自己有素材能写深的角度', '最生僻的词', '随大流的热词'], answer: '自己有素材能写深的角度', explanation: '补题要结合自身积累，选能写出具体内容与思考的角度，才能避免空泛；过大过空或过于生僻都难以驾驭。' },
      { type: 'choice', question: '命题作文《这也是一种幸福》中，"也"字提示作者应（ ）。', options: ['忽略它', '写出被忽视却确属幸福的视角', '改写题目', '只写常规幸福'], answer: '写出被忽视却确属幸福的视角', explanation: '"也"强调"同样、另类"，要求从易被忽略处发掘幸福，审题须抓住修饰限制词，否则易偏题。' },
      { type: 'fill', question: '化虚为实是指把抽象题目落到具体的人、事、______上。', answer: '物（或景）', explanation: '抽象题目（如"美""温暖"）须借助具体人事景物承载，文章才有血有肉，避免空泛议论。' },
      { type: 'choice', question: '下列说法错误的是（ ）。', options: ['命题不可擅自改题', '可小中见大', '审题要抓修饰语', '可把"底线"随意写成"规则"'], answer: '可把"底线"随意写成"规则"', explanation: '命题作文须紧扣题目概念，"底线"与"规则"义涵不同，偷换概念即离题；其余三项均为正确审题写作原则。' },
      { type: 'fill', question: '半命题补题既要避免雷同，也要避免过于______难以下笔。', answer: '生僻', explanation: '补题走极端（过于生僻）会使自己也无材料可写，应在"有料"与"有新意"之间取平衡。' }
    ]
  });

  /* —— 子板块 3：话题作文 —— */
  v.points.push({
    id: 'zt4-huati',
    cover: 'assets/cover/chinese/zt4-huati.svg',
    name: '话题作文',
    chapter: '四、写作',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、题型概览' },
      { type: 'paragraph', text: '话题作文围绕一个指定"话题"（如"包容""行走"）自由命题写作，限制比命题、材料作文宽松，但更易写得空泛发散，对聚敛立意要求更高。' },
      { type: 'list', items: ['将宽泛话题收缩为具体角度', '自拟一个贴切而有文采的标题', '用一条主线统摄全篇', '以小切口写出深思考'] },
      { type: 'keypoint', text: '<strong>话题作文易犯的错</strong>：把"话题"当"标题"直接使用（应自拟题）、立意四面开花无中心。对策是"大话题、小切口、深开掘"。' },
      { type: 'tip', text: '面对宽泛话题，可用"提问法"收敛：是什么、为什么、怎么样、对谁而言。从中选定一个可驾驭的侧面，再拟题展开，避免泛泛而谈。' },
      { type: 'warn', text: '易错点：直接用话题词作标题显得敷衍；多个中心齐头并进；例子与话题仅"擦边"未真正扣合。' },
      { type: 'example', text: '示例（高考风格）：请以"行走"为话题写一篇文章。思路：不自拟"行走"为题，而是收敛为"在经典中行走"，以读书感悟为线展开。' }
    ],
    exercises: [
      { type: 'choice', question: '话题作文处理宽泛话题的最佳策略是（ ）。', options: ['直接使用话题作标题', '大话题小切口深开掘', '写多个中心', '回避话题'], answer: '大话题小切口深开掘', explanation: '话题宽松易空泛，须把大话题收敛到具体可写的小角度并深入挖掘，才能写出深度，而非直接使用话题词或泛泛而谈。' },
      { type: 'choice', question: '关于话题作文拟题，正确的是（ ）。', options: ['直接用话题词当标题', '另拟贴切有文采的标题', '不写标题', '用拼音作标题'], answer: '另拟贴切有文采的标题', explanation: '话题作文要求自拟标题，直接用话题词显得敷衍且不利立意聚焦，应另拟能体现角度与文采的标题。' },
      { type: 'fill', question: '可用"提问法"（是什么、为什么、______）收敛宽泛话题。', answer: '怎么样（或对谁）', explanation: '对话题连续发问能快速找到可驾驭的侧面，从而确立具体立意，是防止空泛的有效方法。' },
      { type: 'choice', question: '话题作文最应避免的是（ ）。', options: ['一线串珠', '多中心齐头并进', '以小见大', '紧扣话题'], answer: '多中心齐头并进', explanation: '多中心会使文章散乱无主脑，是话题作文典型失误；一线串珠、小中见大、紧扣话题均为正确做法。' },
      { type: 'fill', question: '话题作文须用一条______统摄全篇，防止发散失焦。', answer: '主线（或中心）', explanation: '即便话题开放，全文也须有统一主线与中心思想，所有材料围绕它展开，方能结构紧凑、立意鲜明。' }
    ]
  });

  /* —— 子板块 4：任务驱动型作文 —— */
  v.points.push({
    id: 'zt4-renwu',
    cover: 'assets/cover/chinese/zt4-renwu.svg',
    name: '任务驱动型作文',
    chapter: '四、写作',
    difficulty: '较难',
    content: [
      { type: 'heading', text: '一、题型概览' },
      { type: 'paragraph', text: '任务驱动型作文在材料基础上设置具体写作任务：限定写作身份、对象、文体与目的（如"以青年身份给某某写一封信"）。强调针对性、对象感与现实关切。' },
      { type: 'list', items: ['明确任务中的身份、对象、文体', '回应材料中的具体争议或情境', '文体特征鲜明（书信、发言稿等）', '有针对性地说理而非空论'] },
      { type: 'keypoint', text: '<strong>任务四要素</strong>：我是谁（身份）、对谁说（对象）、说什么（针对材料争议）、怎么写（文体格式）。漏掉任一要素都会被判未完成指令。' },
      { type: 'table', headers: ['文体', '格式要点', '语体'], rows: [
        ['书信', '称呼、落款、此致', '亲切有交流感'],
        ['发言稿', '开场白、称呼', '庄重有感染力'],
        ['倡议书', '标题、倡议语', '号召性强']
      ] },
      { type: 'tip', text: '务必在文中"亮明身份与对象"，如"作为一名高三学生，我想对同为青年的你说"；就材料中的对立观点作出取舍与权衡，体现思辨，而非各打五十大板。' },
      { type: 'warn', text: '易错点：忽略任务指令写成普通材料作文；文体格式缺失（无称呼落款）；只复述材料不表态；对象感缺失像在自言自语。' },
      { type: 'example', text: '示例（高考风格）：请结合材料，以"当代青年"的身份写一封信，谈你对边疆支教的态度。思路：先亮身份对象，再就"值不值"作出权衡表态，最后以书信格式收束。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fbf3f7"/><text x="20" y="32" font-size="18" fill="#9e2f6f" font-weight="bold">任务驱动型作文 · 任务四要素</text><rect x="30" y="70" width="150" height="56" rx="8" fill="#f3dce9" stroke="#9e2f6f"/><text x="105" y="103" font-size="13" fill="#5f1f46" text-anchor="middle">我是谁</text><rect x="200" y="70" width="150" height="56" rx="8" fill="#f3dce9" stroke="#9e2f6f"/><text x="275" y="103" font-size="13" fill="#5f1f46" text-anchor="middle">对谁说</text><rect x="370" y="70" width="150" height="56" rx="8" fill="#f3dce9" stroke="#9e2f6f"/><text x="445" y="103" font-size="13" fill="#5f1f46" text-anchor="middle">说什么</text><rect x="540" y="70" width="150" height="56" rx="8" fill="#e9f3e3" stroke="#3f7d1e"/><text x="615" y="103" font-size="13" fill="#2e3a22" text-anchor="middle">怎么写</text></svg>', caption: '任务驱动型作文须同时满足身份、对象、内容与文体的指令。' }
    ],
    exercises: [
      { type: 'choice', question: '任务驱动型作文区别于普通材料作文的关键是（ ）。', options: ['不用材料', '必须完成具体写作任务指令', '字数更少', '不需立意'], answer: '必须完成具体写作任务指令', explanation: '任务驱动型作文在材料外附加身份、对象、文体等指令，写作须回应这些任务，忽略指令即未完成题目要求。' },
      { type: 'choice', question: '以"青年身份给同龄人写一封信"须具备的要素是（ ）。', options: ['无称呼', '亮明身份对象加书信格式', '用文言文', '不表态'], answer: '亮明身份对象加书信格式', explanation: '书信须有称呼、落款等格式，并明确"我是青年、对同龄人说"，对象感与格式缺一不可。' },
      { type: 'fill', question: '任务四要素：我是谁、对谁说、说什么、______。', answer: '怎么写（文体）', explanation: '除身份、对象、内容外，还须明确文体与写法（书信、发言稿等），四要素共同构成任务指令。' },
      { type: 'choice', question: '下列对材料争议最恰当的表态是（ ）。', options: ['各打五十大板', '作出取舍与权衡', '全盘否定', '回避不谈'], answer: '作出取舍与权衡', explanation: '任务驱动型作文鼓励思辨，应就对立观点作出明确权衡而非和稀泥，方能体现深度与针对性。' },
      { type: 'fill', question: '发言稿须有开场白与______，语体庄重有感染力。', answer: '称呼', explanation: '发言稿面向听众，需有称呼与开场白以建立现场感，这是其文体格式的基本要求。' }
    ]
  });
})();
