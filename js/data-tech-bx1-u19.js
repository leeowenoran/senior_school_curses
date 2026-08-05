/* 通用技术 · 必修 技术与设计1 · 第六章 技术交流与评价 · 第三节 设计的评价 */
(function () {
  var v = gzGetVolume('tech', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u19',
    name: '第三节 设计的评价',
    chapter: '第六章 技术交流与评价',
    difficulty: '重点',
    content: [
      { type: 'heading', text: '一、好设计是评出来、改出来的' },
      { type: 'paragraph', text: '科技节上，两个小组都做了台灯。甲组的灯又亮又稳，但用了一大块钢板，沉得搬不动；乙组的灯轻巧好看，可开关按两下就松了。你觉得哪个更好？其实两个都还有毛病，而毛病是怎么发现的？靠评价。' },
      { type: 'paragraph', text: '设计的评价，就是按照一定的标准，对设计方案或设计成果作出判断，指出优点和不足，为改进提供依据。没有评价，设计就止步于“做出来了”；有了评价，设计才能走向“做得更好”。这一节要掌握三块内容：评价的维度、评价的方式、设计的优化。' },
      { type: 'heading', text: '二、设计评价的三组维度' },
      { type: 'paragraph', text: '课本把评价维度成对地组织起来，一共三组六个方面：功用性与可靠性、创新性与文化性、经济性与环保性。' },
      { type: 'heading', text: '（一）功用性与可靠性' },
      { type: 'paragraph', text: '功用性问的是：这个设计有没有实现它该有的功能。台灯能不能照亮，浇花装置能不能浇上水，这是底线。可靠性问的是：功能实现得稳不稳、久不久。今天能亮明天就坏，或者十次有三次打不开，那就是可靠性不过关。' },
      { type: 'heading', text: '（二）创新性与文化性' },
      { type: 'paragraph', text: '创新性问的是：有没有新想法，是不是跟别人做的一模一样。可以是结构上的新、用法上的新，也可以是解决问题思路上的新。文化性问的是：符不符合人们的文化习惯和审美，看着舒不舒服、用着顺不顺心。给幼儿园设计的小凳子做成尖角冷色的工业风，就是文化性上没考虑周全。' },
      { type: 'heading', text: '（三）经济性与环保性' },
      { type: 'paragraph', text: '经济性问的是：花的钱值不值，成本合不合理。同样的功能，用更省的材料、更简单的工艺做出来，经济性就更好。环保性问的是：材料好不好回收，生产和使用中会不会污染，废弃后怎么处理。现在的设计评价越来越看重这一项。' },
      { type: 'table', headers: ['评价维度', '核心问题', '判断的例子'], rows: [['功用性', '有没有实现预定的功能', '自动浇花装置到点能不能真的出水'], ['可靠性', '功能实现得稳不稳定、耐不耐用', '开关反复使用一学期是否仍然灵敏'], ['创新性', '有没有与众不同的新构思', '在灯杆上加了可折叠关节，别人没做过'], ['文化性', '是否符合文化习惯与审美要求', '给幼儿园做的凳子用圆角和明快色彩'], ['经济性', '成本是否合理，花的钱值不值', '同样的强度，用木条代替钢板更省钱'], ['环保性', '材料能否回收，是否造成污染', '选用可回收纸板，不用一次性泡沫']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e8f3ee"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">设计评价的三组维度</text><text x="340" y="56" font-size="12" fill="#1e3a2b" text-anchor="middle">成对记忆：能用又耐用 · 有新意又合审美 · 省钱又环保</text><rect x="24" y="76" width="200" height="150" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="124" y="106" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">功用性与可靠性</text><text x="124" y="134" font-size="11" fill="#1e3a2b" text-anchor="middle">功用性：能否实现功能</text><text x="124" y="158" font-size="11" fill="#1e3a2b" text-anchor="middle">可靠性：是否稳定耐用</text><text x="124" y="186" font-size="11" fill="#1e3a2b" text-anchor="middle">例：台灯亮不亮</text><text x="124" y="208" font-size="11" fill="#1e3a2b" text-anchor="middle">开关会不会失灵</text><rect x="240" y="76" width="200" height="150" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="340" y="106" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">创新性与文化性</text><text x="340" y="134" font-size="11" fill="#1e3a2b" text-anchor="middle">创新性：有无新构思</text><text x="340" y="158" font-size="11" fill="#1e3a2b" text-anchor="middle">文化性：合不合审美习惯</text><text x="340" y="186" font-size="11" fill="#1e3a2b" text-anchor="middle">例：加可折叠关节</text><text x="340" y="208" font-size="11" fill="#1e3a2b" text-anchor="middle">幼儿凳用圆角暖色</text><rect x="456" y="76" width="200" height="150" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="556" y="106" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">经济性与环保性</text><text x="556" y="134" font-size="11" fill="#1e3a2b" text-anchor="middle">经济性：成本是否合理</text><text x="556" y="158" font-size="11" fill="#1e3a2b" text-anchor="middle">环保性：能否回收无污染</text><text x="556" y="186" font-size="11" fill="#1e3a2b" text-anchor="middle">例：木条代替钢板</text><text x="556" y="208" font-size="11" fill="#1e3a2b" text-anchor="middle">选可回收纸板</text></svg>', caption: '图1　设计评价的三组六个维度及其核心问题。' },
      { type: 'keypoint', label: '重点·六个维度成对记', text: '把六个维度<strong>两两配对</strong>来记最省力：<strong>功用性与可靠性</strong>管“能不能用、稳不稳”，<strong>创新性与文化性</strong>管“新不新、美不美”，<strong>经济性与环保性</strong>管“省不省、绿不绿”。答综合题时按这三组逐条对照着写，既全面又不会漏项。' },
      { type: 'heading', text: '三、设计评价的两种方式' },
      { type: 'paragraph', text: '按评价者是谁，评价分为自我评价和他人评价两种。' },
      { type: 'list', items: ['自我评价：设计者对自身设计的反思。好处是最了解设计意图和取舍过程，能随时进行；不足是容易“自己看自己怎么看都好”，发现不了盲点', '他人评价：由别人来评，主要包括专家评价和用户评价。专家评价专业、深入，能指出技术上的隐患；用户评价来自真实使用者，最能反映好不好用', '两者要结合：先自我评价查一遍，再请同学、老师、真实用户来评，最后综合两方面的意见'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#e8f3ee"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">评价方式：自我评价 + 他人评价</text><rect x="24" y="62" width="290" height="140" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="169" y="92" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">自我评价</text><text x="169" y="120" font-size="12" fill="#1e3a2b" text-anchor="middle">设计者对自身设计的反思</text><text x="169" y="146" font-size="12" fill="#1e3a2b" text-anchor="middle">优点：最懂设计意图，随时可做</text><text x="169" y="172" font-size="12" fill="#1e3a2b" text-anchor="middle">不足：容易看不到自己的盲点</text><rect x="366" y="62" width="290" height="140" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="511" y="92" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">他人评价</text><text x="511" y="120" font-size="12" fill="#1e3a2b" text-anchor="middle">专家评价：专业深入，看得出隐患</text><text x="511" y="146" font-size="12" fill="#1e3a2b" text-anchor="middle">用户评价：来自真实使用者</text><text x="511" y="172" font-size="12" fill="#1e3a2b" text-anchor="middle">最能反映好不好用、方不方便</text><text x="340" y="220" font-size="12" fill="#1e3a2b" text-anchor="middle">两者结合，评价才全面客观</text></svg>', caption: '图2　自我评价与他人评价的特点与互补关系。' },
      { type: 'warn', label: '易错·评价不是只挑毛病，也不是只说好话', text: '两个常见误区。一是把评价理解成<strong>挑刺</strong>，通篇否定，看不到方案的价值；二是碍于面子<strong>只说好话</strong>，评价变成表扬。正确的做法是<strong>依据标准，既讲优点也讲不足，并给出可操作的改进建议</strong>。还要注意：<strong>评价必须有依据</strong>，最好用技术试验测出的数据说话，不能凭“我觉得”。' },
      { type: 'heading', text: '四、设计的优化' },
      { type: 'paragraph', text: '评价的落脚点是优化。所谓优化，就是根据评价结果对方案进行改进，让它变得更好。改进可以从功能、结构、材料、工艺、外观等多方面入手。' },
      { type: 'table', headers: ['优化方向', '常见做法', '举例'], rows: [['功能', '增加、合并或删减功能，抓住主要需求', '给台灯增加调光档位，去掉用不上的时钟'], ['结构', '调整形状、增加支撑或连接方式', '在桥面中部加一道横梁，防止中间下塌'], ['材料', '换用更合适、更省或更环保的材料', '把厚钢板换成铝合金型材，减轻重量'], ['工艺', '简化加工步骤，采用更合适的加工方法', '把多个零件焊接改为一体激光切割成型'], ['外观', '改进造型、色彩和表面处理', '把尖角改成圆角，配色改为柔和的暖色']] },
      { type: 'tip', label: '提示·优化要抓主要矛盾', text: '优化不是把所有维度都拉满——那既不可能也不经济。<strong>要先看评价中暴露的最突出问题是什么，优先解决它</strong>。比如台灯又重又贵但很亮，突出问题是重量和成本，就该从材料和结构下手；如果改完发现亮度略降但仍够用，这个取舍是划算的。<strong>优化往往伴随取舍，关键看是否更好地满足了主要需求</strong>。' },
      { type: 'example', label: '例题·评价并提出优化建议', text: '题目：某小组设计了一款校园共享雨伞架，用整块不锈钢板焊接而成，能放20把伞，造价380元，重18千克，外形是灰色方盒。使用一学期后同学反映：搬动困难，雨天伞架底部积水生锈，外形与教学楼环境不搭。请从评价维度分析问题并提出优化建议。<br>解析：先按维度评价。<strong>功用性</strong>：能放20把伞，基本功能实现；<strong>可靠性</strong>：底部积水导致生锈，耐久性不足；<strong>经济性</strong>：整块不锈钢板造价偏高；<strong>文化性</strong>：灰色方盒与教学楼环境不协调；此外18千克过重，搬动不便，属于使用便利性问题。再提优化：<strong>材料</strong>上把整块不锈钢板改为更轻的铝合金型材，减重并降低成本；<strong>结构</strong>上在底部开排水孔并加高底座，解决积水生锈；<strong>外观</strong>上改用与教学楼相配的颜色、把方角改为圆角；<strong>功能</strong>上可增加简易滚轮，方便移动。' }
    ],
    exercises: [
      { type: 'choice', question: '评价一款学生台灯时，“连续使用一学期后开关是否仍然灵敏、灯管是否仍能正常点亮”主要考查的是设计的？', options: ['功用性', '可靠性', '创新性', '经济性'], answer: '可靠性', explanation: '功用性关注的是设计有没有实现预定功能，也就是灯能不能亮；而题干强调的是长期使用后功能是否仍然稳定、耐不耐用，这属于可靠性。创新性看有没有新构思，经济性看成本是否合理，都与题干描述不符。' },
      { type: 'choice', question: '下列各项中，属于从环保性角度评价一件设计作品的是？', options: ['这款书架的造型别致，同类产品中没有见过', '这款书架用可回收的再生木板制作，废弃后便于处理', '这款书架能放下80本教材，容量足够', '这款书架的售价只有同类产品的一半'], answer: '这款书架用可回收的再生木板制作，废弃后便于处理', explanation: '环保性关注材料能否回收、生产和使用中是否污染、废弃后如何处理，选项B正是从这个角度评价的。造型别致属于创新性，容量足够属于功用性，售价便宜属于经济性。' },
      { type: 'choice', question: '关于设计的评价，下列说法正确的是？', options: ['设计者自己最了解方案，只做自我评价就够了', '评价就是尽量找出方案的缺点，优点不必提及', '自我评价与他人评价应当结合，评价要以事实和数据为依据', '用户不懂技术，他们的评价没有参考价值'], answer: '自我评价与他人评价应当结合，评价要以事实和数据为依据', explanation: '自我评价便于随时进行且最了解设计意图，但容易存在盲点；他人评价中的专家评价专业深入，用户评价最能反映实际使用感受，两者应当结合。评价要有依据，最好用技术试验得到的数据说话，并且优点和不足都要指出，还应提出可操作的改进建议。' },
      { type: 'fill', question: '设计评价的三组维度是：功用性与___、创新性与文化性、___与环保性。', answer: '可靠性；经济性', explanation: '课本把设计评价的维度成对给出：功用性与可靠性（能不能实现功能、稳不稳定耐不耐用）、创新性与文化性（有没有新构思、合不合审美习惯）、经济性与环保性（成本是否合理、能否回收无污染）。成对记忆不易漏项。' },
      { type: 'fill', question: '按评价者的不同，设计评价可分为___评价和他人评价，其中他人评价主要包括专家评价和___评价。', answer: '自我；用户', explanation: '按评价者划分，设计评价分为自我评价和他人评价。自我评价是设计者对自身设计的反思；他人评价主要包括专家评价和用户评价，前者专业深入，后者来自真实使用者，最能反映产品好不好用。' }
    ]
  });
})();
