(function () {
  var v = gzGetVolume('english', 'zt4');
  if (!v) return;
  v.points.push(
    {
      id: `zt4-u3-l1`,
      name: `应用文常见类型与命题特征`,
      chapter: `书面表达 · 第3单元 应用文写作（上）`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: `一、应用文是什么：写给真人看的英文信` },
        { type: 'paragraph', text: `应用文不是让你天马行空编故事，而是模拟真实生活场景，用英语完成一次有目的的交际。比如给外国笔友写封建议信、给学校写份活动通知、在班里做个英文发言。它的灵魂就一句话：说清楚你想让对方知道什么、做什么。` },
        { type: 'keypoint', label: '重点·应用文的本质', text: `应用文 = <strong>真实场景</strong> + <strong>明确目的</strong> + <strong>得体表达</strong>。<br>动笔前先问自己：我是谁？写给谁？想达到什么目的？` },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图1 应用文文体家族卡：书信 邮件 通知 发言稿</text><rect x="30" y="70" width="150" height="190" rx="12" fill="#9c56d4"/><text x="105" y="115" font-size="19" fill="#ffffff" text-anchor="middle">书信</text><text x="105" y="150" font-size="13" fill="#ffffff" text-anchor="middle">Letter</text><text x="105" y="185" font-size="13" fill="#ffffff" text-anchor="middle">有称呼落款</text><text x="105" y="215" font-size="12" fill="#ffffff" text-anchor="middle">建议 邀请</text><rect x="185" y="70" width="150" height="190" rx="12" fill="#b87fd8"/><text x="260" y="115" font-size="19" fill="#3a2a4a" text-anchor="middle">邮件</text><text x="260" y="150" font-size="13" fill="#3a2a4a" text-anchor="middle">Email</text><text x="260" y="185" font-size="13" fill="#3a2a4a" text-anchor="middle">更口语短小</text><text x="260" y="215" font-size="12" fill="#3a2a4a" text-anchor="middle">写给老师</text><rect x="340" y="70" width="150" height="190" rx="12" fill="#b87fd8"/><text x="415" y="115" font-size="19" fill="#3a2a4a" text-anchor="middle">通知</text><text x="415" y="150" font-size="13" fill="#3a2a4a" text-anchor="middle">Notice</text><text x="415" y="185" font-size="13" fill="#3a2a4a" text-anchor="middle">无称呼</text><text x="415" y="215" font-size="12" fill="#3a2a4a" text-anchor="middle">落款单位</text><rect x="495" y="70" width="150" height="190" rx="12" fill="#9c56d4"/><text x="570" y="115" font-size="19" fill="#ffffff" text-anchor="middle">发言稿</text><text x="570" y="150" font-size="13" fill="#ffffff" text-anchor="middle">Speech</text><text x="570" y="185" font-size="13" fill="#ffffff" text-anchor="middle">问候观众</text><text x="570" y="215" font-size="12" fill="#ffffff" text-anchor="middle">当众说</text><text x="340" y="300" font-size="14" fill="#5a7a2a" text-anchor="middle">先认文体，再定格式和语气</text><text x="340" y="328" font-size="13" fill="#3a2a4a" text-anchor="middle">还有征文稿、倡议书、投诉信等常见类型</text></svg>`, caption: `图1 应用文文体家族：书信、邮件、通知、发言稿各有不同格式与语气` },
        { type: 'heading', text: `二、常见文体逐个认：书信是老大哥` },
        { type: 'paragraph', text: `高考最常考的是书信类应用文。所谓书信，就是隔着纸和对方说话，语气要礼貌、自然。下面这些书信类型你一定要认得，题目换个说法你也认得出。` },
        { type: 'list', items: [
          `建议信（Letter of Suggestion）：朋友遇到烦恼，你写信给主意，如如何学好英语。`,
          `申请信（Letter of Application）：申请当志愿者、申请奖学金，介绍自己为何合格。`,
          `感谢信（Letter of Thanks）：别人帮了你，写信表达谢意。`,
          `邀请信（Letter of Invitation）：邀请外教参加 Chinese Festival，说清时间地点。`,
          `投诉信（Letter of Complaint）：网购商品坏了，写信要求退换。`,
          `告知信（Letter of Information）：通知朋友活动改期、航班变动。`,
          `咨询信（Letter of Inquiry）：向博物馆咨询开放时间和门票。`
        ] },
        { type: 'list', items: [
          `邮件（Email）：和书信类似，但更口语、更短，常写给自己老师或笔友。`,
          `通知（Notice）：贴在布告栏，告诉大家一件事，不用称呼，落款是单位。`,
          `征文稿（Essay for a Contest）：给校刊写稿，主题给定，要有观点和理由。`,
          `发言稿（Speech）：在班会或典礼上对着大家说，开头有 Ladies and gentlemen。`,
          `倡议书（Proposal）：号召大家做环保、读书等，语气有号召力。`
        ] },
        { type: 'table', headers: ['文体', '交际目的', '典型开头'], rows: [
          ['建议信', '帮对方出主意、解决问题', 'I am writing to give you some advice on...'],
          ['申请信', '争取一个机会或名额', 'I am writing to apply for...'],
          ['感谢信', '表达谢意与感激', 'I am writing to express my thanks for...'],
          ['邀请信', '请对方来参加活动', 'I would like to invite you to...'],
          ['投诉信', '反映问题、要求处理', 'I am writing to complain about...'],
          ['发言稿', '当众陈述观点', 'Ladies and gentlemen, good morning!']
        ] },
        { type: 'example', label: '例题·辨认文体', text: `题目：你的英国朋友 Chris 想了解如何学中文，请你写信告诉他方法。这封信的交际目的是给主意、帮朋友解决问题，所以是<strong>建议信</strong>，开头可用 I am writing to give you some advice on learning Chinese.` },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图2 全国一卷“二选一”命题形式：两个任务选一个写</text><rect x="60" y="80" width="250" height="180" rx="14" fill="#9c56d4"/><text x="185" y="120" font-size="18" fill="#ffffff" text-anchor="middle">任务A</text><text x="185" y="155" font-size="14" fill="#ffffff" text-anchor="middle">写感谢信</text><text x="185" y="190" font-size="13" fill="#ffffff" text-anchor="middle">感谢志愿者</text><text x="185" y="225" font-size="13" fill="#ffffff" text-anchor="middle">突出个性感受</text><rect x="370" y="80" width="250" height="180" rx="14" fill="#b87fd8"/><text x="495" y="120" font-size="18" fill="#3a2a4a" text-anchor="middle">任务B</text><text x="495" y="155" font-size="14" fill="#3a2a4a" text-anchor="middle">写征文稿</text><text x="495" y="190" font-size="13" fill="#3a2a4a" text-anchor="middle">谈活动收获</text><text x="495" y="225" font-size="13" fill="#3a2a4a" text-anchor="middle">强调逻辑观点</text><text x="340" y="295" font-size="40" fill="#c0392b" text-anchor="middle">or</text><text x="340" y="330" font-size="14" fill="#5a7a2a" text-anchor="middle">二选一，挑擅长的写，重在观点与逻辑</text></svg>`, caption: `图2 全国一卷提供两个任务，考生二选一，重在个性观点与逻辑` },
        { type: 'heading', text: `三、2025年高考命题特征：稳中求进、素养导向` },
        { type: 'paragraph', text: `2025年的应用文命题延续稳中求进、素养导向的大方向，但悄悄变了味：不再只考你能不能把信息翻译过去，而是越来越看重你有没有自己的观点、能不能把道理讲清楚。简单说，从传话筒变成了说理小作文。` },
        { type: 'keypoint', label: '重点·命题三大转向', text: `① 由<strong>单纯信息传递</strong> 转向 <strong>观点论证</strong>。<br>② 全国一卷采用 <strong>二选一</strong> 形式，强调逻辑与个性观点。<br>③ 全国二卷贴近<strong>学生生活</strong>，兼顾实用与创新。` },
        { type: 'list', items: [
          `全国一卷：同一情境给两个写作任务，你挑一个写，比如写封信感谢志愿者，或写篇稿子谈收获，二选一。`,
          `全国一卷看重个性：光说我很高兴不够，要说出为什么高兴、具体收获了什么。`,
          `全国二卷：题目常是你身边的事，如校园活动、志愿服务，既实用又留发挥空间。`
        ] },
        { type: 'warn', label: '易错', text: `易错：<strong>别把应用文写成要点清单</strong>。<br>只把题目要点一条条翻译出来，没有过渡、没有自己想法，得分上不去。要加连接词、加理由、加感受。` },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图3 贴近学生生活的题目示例卡：校园志愿者活动</text><rect x="80" y="70" width="520" height="210" rx="16" fill="#ffffff" stroke="#9c56d4" stroke-width="3"/><text x="340" y="110" font-size="16" fill="#7a3fb0" text-anchor="middle" font-weight="bold">题目示例</text><text x="340" y="150" font-size="15" fill="#3a2a4a" text-anchor="middle">假定你是李华，你校上周举办了</text><text x="340" y="180" font-size="15" fill="#3a2a4a" text-anchor="middle">校园环保志愿者活动。</text><text x="340" y="215" font-size="15" fill="#3a2a4a" text-anchor="middle">请给校报写篇稿，谈谈你的收获。</text><text x="340" y="255" font-size="13" fill="#c0392b" text-anchor="middle">贴近生活 + 实用 + 留发挥空间</text><text x="340" y="320" font-size="14" fill="#5a7a2a" text-anchor="middle">全国二卷风格：从身边事考表达与思考</text></svg>`, caption: `图3 全国二卷题目贴近学生生活，如校园志愿者活动征稿` },
        { type: 'tip', label: '技巧', text: `拿到题目先<strong>贴标签</strong>：<br>是书信还是通知？是建议还是邀请？<br>标签一贴，框架就有了，再往里填内容。` },
        { type: 'heading', text: `四、备考建议：把套路练成肌肉记忆` },
        { type: 'paragraph', text: `应用文篇幅短（通常 80 词左右），但最怕临场慌。平时把每种文体的开头句、结尾句背熟，考试时直接套，把精力放在把要点说圆上。` },
        { type: 'list', items: [
          `每天认一种文体，背它的功能句（开头、结尾各一句）。`,
          `写完后通读，检查有没有漏掉题目任意一个要点。`,
          `用 firstly、moreover、therefore 等连接词把段落串起来，显得有条理。`
        ] },
        { type: 'example', label: '例题·套框架', text: `题目：请你给校报写篇稿，谈谈一次志愿者活动的收获。这是征文稿，开头点题（I would like to share my experience as a volunteer），主体用 firstly、moreover 分点说收获，结尾用 therefore 总结感悟。` },
        { type: 'keypoint', label: '重点·本节一句话', text: `应用文先<strong>认文体</strong>，再<strong>贴目的</strong>，最后<strong>把要点说圆</strong>：信息传到位，观点说清楚。` }
      ],
      exercises: [
        { type: 'choice', question: '2025年高考全国一卷应用文采用什么命题形式？', options: ['A. 单一任务，照要点翻译', 'B. 二选一，强调逻辑与个性观点', 'C. 只写通知', 'D. 只考书信'], answer: 'B. 二选一，强调逻辑与个性观点', explanation: '2025年高考全国一卷应用文采用二选一命题形式，即在同一个情境下给出两个写作任务，考生任选其一完成，重点考查逻辑组织与个性观点表达。选项A照要点翻译是旧题型思路，C和D说法片面，全国一卷并不只考通知或书信。因此选B。' },
        { type: 'choice', question: '写一封建议信（Letter of Suggestion）时，主要的交际目的是什么？', options: ['A. 表达谢意', 'B. 帮对方出主意、解决问题', 'C. 投诉商品', 'D. 申请职位'], answer: 'B. 帮对方出主意、解决问题', explanation: '建议信的交际目的是帮助对方出主意、解决困扰，比如朋友问如何学好中文，你写信给方法。表达谢意是感谢信的功能，投诉商品是投诉信，申请职位是申请信。因此选B。' },
        { type: 'choice', question: '关于2025年高考应用文命题，下列说法正确的是？', options: ['A. 只考信息传递，不考观点', 'B. 全国二卷贴近学生生活，兼顾实用与创新', 'C. 全国一卷只考通知', 'D. 应用文可以天马行空编故事'], answer: 'B. 全国二卷贴近学生生活，兼顾实用与创新', explanation: '2025年应用文命题延续稳中求进、素养导向，全国二卷题目贴近学生生活，如校园活动、志愿服务，既实用又留出发挥空间。A错在仍只考信息传递，实际已转向观点论证；C说全国一卷只考通知不对；D错在应用文必须围绕真实目的，不能天马行空。因此选B。' },
        { type: 'fill', question: '应用文的本质可以用公式表示：应用文 = 真实场景 + ____ + 得体表达。（提示：写之前要清楚自己想达到什么）', answer: '明确目的', explanation: '应用文的公式可以记为：应用文 = 真实场景 + 明确目的 + 得体表达。动笔前先想清楚自己是谁、写给谁、想达到什么目的，这个目的就是公式中缺失的一环。因此填明确目的。' },
        { type: 'fill', question: '给校报写篇稿谈谈志愿者活动收获，这种文体是 ____。（提示：不是书信，是给刊物写的稿）', answer: '征文稿', explanation: '给校报写稿谈志愿者活动收获，属于征文稿，它面向刊物读者，要求有主题、有观点、有理由，格式上没有书信的称呼落款。因此填征文稿。' }
      ]
    },
    {
      id: `zt4-u3-l2`,
      name: `应用文写作策略：审题与结构`,
      chapter: `书面表达 · 第3单元 应用文写作（上）`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: `一、审题三步法：动笔前先想清楚` },
        { type: 'paragraph', text: `很多同学一拿到题就埋头写，结果跑题、漏点。正确做法是先花两分钟审题。这里教你审题三步法，按顺序走，保你不偏题。` },
        { type: 'keypoint', label: '重点·审题三步', text: `<strong>体裁</strong> → <strong>要点</strong> → <strong>人称时态</strong>，<br>三步按顺序，先不急着下笔。` },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图1 审题三步法流程图：体裁 → 要点 → 人称时态</text><rect x="40" y="130" width="160" height="100" rx="14" fill="#9c56d4"/><text x="120" y="175" font-size="18" fill="#ffffff" text-anchor="middle">第一步</text><text x="120" y="205" font-size="16" fill="#ffffff" text-anchor="middle">明体裁</text><text x="230" y="185" font-size="34" fill="#c0392b" text-anchor="middle">→</text><rect x="260" y="130" width="160" height="100" rx="14" fill="#b87fd8"/><text x="340" y="175" font-size="18" fill="#3a2a4a" text-anchor="middle">第二步</text><text x="340" y="205" font-size="16" fill="#3a2a4a" text-anchor="middle">定要点</text><text x="450" y="185" font-size="34" fill="#c0392b" text-anchor="middle">→</text><rect x="480" y="130" width="160" height="100" rx="14" fill="#9c56d4"/><text x="560" y="175" font-size="18" fill="#ffffff" text-anchor="middle">第三步</text><text x="560" y="205" font-size="16" fill="#ffffff" text-anchor="middle">人称时态</text><text x="340" y="290" font-size="14" fill="#5a7a2a" text-anchor="middle">按顺序走，先不急着下笔</text><text x="340" y="320" font-size="13" fill="#3a2a4a" text-anchor="middle">体裁定格式，要点定内容，人称时态定说法</text></svg>`, caption: `图1 审题三步法：先定体裁，再圈要点，最后定人称时态` },
        { type: 'heading', text: `二、第一步：明确体裁` },
        { type: 'paragraph', text: `先看题目要求写什么——是书信、通知、发言稿，还是征文稿？体裁决定格式和语气。书信要有称呼和落款，通知不用称呼，发言稿开头要问候观众。` },
        { type: 'list', items: [
          `书信 / 邮件：有 Dear..., 落款 Yours,...`,
          `通知（Notice）：无称呼，开头直接说事，落款写单位。`,
          `发言稿（Speech）：开头 Ladies and gentlemen, good morning!`,
          `征文稿：开头点题，不用客套称呼。`
        ] },
        { type: 'heading', text: `三、第二步：确定要点（圈出来）` },
        { type: 'paragraph', text: `题目里的每个内容要点都要写到，漏一个就扣分。拿笔把要点逐条圈出来，写的时候对着清单打勾，写完再数一遍。` },
        { type: 'example', label: '例题·圈要点', text: `题目：给外教写封建议信，①建议他学中文的方法 ②邀请他参加中文角 ③表达期待。三个要点全部圈出，写作时一段对应一个，缺一不可。` },
        { type: 'warn', label: '易错', text: `易错：<strong>用自己的话替换题目要点</strong>。<br>题目要表达期待，你就得写出 I am looking forward to...，不能换个意思糊弄过去，否则算漏点。` },
        { type: 'heading', text: `四、第三步：判断人称和时态` },
        { type: 'paragraph', text: `人称看我是谁、写给谁：以自己口吻用 I，写对方用 you，写第三人称用 he、she、they。时态看事情发生在什么时候：讲计划用将来时，讲经历用过去时，讲常态用现在时。` },
        { type: 'list', items: [
          `写建议、邀请（还没发生）：用一般现在时和一般将来时。`,
          `写感谢、投诉（已发生）：用一般过去时。`,
          `介绍自己、说明身份：用一般现在时。`
        ] },
        { type: 'list', items: [
          `第一人称 I / we：以我的视角叙述。`,
          `第二人称 you：直接对读者说话，邀请信常用。`,
          `第三人称 he / she / they：讲述别人的事。`
        ] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图2 三段式结构图：开头 主体 结尾</text><rect x="60" y="80" width="560" height="70" rx="12" fill="#9c56d4"/><text x="340" y="123" font-size="17" fill="#ffffff" text-anchor="middle">第一段 开头：开门见山，表明写作目的</text><rect x="60" y="170" width="560" height="70" rx="12" fill="#b87fd8"/><text x="340" y="213" font-size="17" fill="#3a2a4a" text-anchor="middle">第二段 主体：分点阐述要点，firstly / moreover 串理由</text><rect x="60" y="260" width="560" height="70" rx="12" fill="#9c56d4"/><text x="340" y="303" font-size="17" fill="#ffffff" text-anchor="middle">第三段 结尾：总结观点，表达期待或祝愿</text></svg>`, caption: `图2 应用文万能三段式：开头亮目的、主体讲内容、结尾来呼应` },
        { type: 'heading', text: `五、结构模板：三段式万能框架` },
        { type: 'paragraph', text: `无论什么体裁，应用文基本都能套三段式：开头亮目的、主体讲内容、结尾来呼应。下面这张表把每段干什么说清楚，你照着往里填就行。` },
        { type: 'table', headers: ['段落', '功能', '核心内容'], rows: [
          ['第一段 开头', '开门见山', '表明写作目的：建议 / 申请 / 邀请 / 感谢'],
          ['第二段 主体', '详细论述', '分点阐述要点，用 firstly / moreover 串理由'],
          ['第三段 结尾', '结尾呼应', '总结观点，表达期待或祝愿']
        ] },
        { type: 'keypoint', label: '重点·三段式口诀', text: `开头<strong>说目的</strong>，主体<strong>讲理由</strong>，结尾<strong>表期待</strong>。<br>三段齐全，文章就不会散。` },
        { type: 'example', label: '例题·填三段式', text: `建议信范文片段——开头：I am writing to give you some advice on learning Chinese. 主体：Firstly, watch Chinese movies; moreover, practice with friends. 结尾：I hope my advice helps and I am looking forward to your reply.` },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图3 小范文片段示意：建议信三段怎么填</text><rect x="50" y="70" width="580" height="60" rx="12" fill="#9c56d4"/><text x="70" y="108" font-size="14" fill="#ffffff">开头：I am writing to give you some advice on learning Chinese.</text><rect x="50" y="145" width="580" height="80" rx="12" fill="#b87fd8"/><text x="70" y="178" font-size="14" fill="#3a2a4a">主体：Firstly, watch Chinese movies; moreover, practice with friends.</text><text x="70" y="208" font-size="14" fill="#3a2a4a">       They help you learn faster.</text><rect x="50" y="240" width="580" height="60" rx="12" fill="#9c56d4"/><text x="70" y="278" font-size="14" fill="#ffffff">结尾：I hope my advice helps and I am looking forward to your reply.</text><text x="340" y="325" font-size="14" fill="#5a7a2a" text-anchor="middle">一段一功能，连接词让逻辑一眼看清</text></svg>`, caption: `图3 建议信三段式范文片段：开头说目的、主体给理由、结尾表期待` },
        { type: 'tip', label: '技巧', text: `写主体段时，<strong>一点一段</strong>或<strong>一理由一句</strong>，<br>用 Firstly、Secondly、Therefore 等连接词，<br>考官一眼就能看清你的逻辑。` },
        { type: 'heading', text: `六、动手前最后检查` },
        { type: 'paragraph', text: `列好提纲再动笔：体裁定了没、要点圈全没、人称时态对没、三段框架搭没。四件事都打勾，这篇文章已经成功一大半。` },
        { type: 'list', items: [
          `体例检查：称呼、落款是否齐全。`,
          `要点检查：题目每个点都覆盖了吗。`,
          `语言检查：连接词用了吗，时态一致吗。`
        ] }
      ],
      exercises: [
        { type: 'choice', question: '应用文审题三步法的正确顺序是？', options: ['A. 要点 → 体裁 → 人称时态', 'B. 体裁 → 要点 → 人称时态', 'C. 人称时态 → 体裁 → 要点', 'D. 体裁 → 人称时态 → 要点'], answer: 'B. 体裁 → 要点 → 人称时态', explanation: '应用文审题三步法按固定顺序进行：第一步明确体裁（书信、通知还是发言稿），第二步圈出题目所有内容要点，第三步根据交际对象和情境判断人称与时态。顺序不能颠倒，体裁不定就无从搭框架。因此选B。' },
        { type: 'choice', question: '应用文三段式中，第一段（开头）的主要功能是什么？', options: ['A. 详细分点阐述理由', 'B. 开门见山表明写作目的', 'C. 总结并表达祝愿', 'D. 列出所有要点清单'], answer: 'B. 开门见山表明写作目的', explanation: '三段式第一段（开头）的作用是开门见山，直接表明写作目的，如建议、申请、邀请或感谢，让读信人一眼明白你来意。详细分点阐述理由属于第二段主体，总结祝愿属于第三段结尾。因此选B。' },
        { type: 'choice', question: '写一封感谢信，感谢别人已经帮过你的事，主体部分一般用什么时态？', options: ['A. 一般过去时', 'B. 一般将来时', 'C. 现在完成时表将来', 'D. 一般现在时'], answer: 'A. 一般过去时', explanation: '感谢信用来感谢别人已经帮过你的事，事情发生在过去，主体叙述应当用一般过去时，如 Thank you for the help you gave me. 将来时用于建议、邀请等未发生的事，一般现在时用于介绍身份。因此选A。' },
        { type: 'fill', question: '应用文主体段常用 ____、moreover、therefore 等连接词把理由串起来，让逻辑更清楚。（提示：表第一）', answer: 'firstly', explanation: '应用文主体段需要把若干理由有条理地串起来，常用 firstly（第一）、moreover（而且）、therefore（因此）等连接词，让段落逻辑清晰、层次分明。因此填 firstly。' },
        { type: 'fill', question: '写通知（Notice）时，格式上 ____ 称呼，落款一般写发布单位。（填“有”或“没有”）', answer: '没有', explanation: '通知是张贴或广播给群体的告知性文字，格式上没有 Dear 之类的称呼，直接说事，落款写发布单位，如 Student Union。因此填没有。' }
      ]
    }
  );
})();
