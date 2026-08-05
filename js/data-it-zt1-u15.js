/* 信息技术 · 高三复习 · 数据与算法 · 第15节 复习提示与高频考点 */
(function () {
  var v = gzGetVolume('it', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u15',
    name: '第15节 复习提示与高频考点',
    chapter: '九、复习提示',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、核心知识体系' },
      { type: 'paragraph', text: '整个“数据与算法”专题，可以用一句话串起来：以数据为基础，以算法为核心，以程序设计为实现手段。数据是这个世界的原料，算法是把原料变成结果的加工方法，而程序把算法写成计算机能跑的指令。复习时脑子里要始终装着这条主线，新学的知识点都能挂到这条线上。' },
      { type: 'paragraph', text: '和数据相关的还有一条递进链：数据 → 信息 → 知识 → 智慧。原始数据是符号，加工后成为有意义的信息，归纳规律成为知识，再用来做判断决策就是智慧。理解这条链，选择题里常考“数据、信息、知识”的区别。' },
      { type: 'keypoint', label: '重点·核心知识体系', text: '<strong>以数据为基础，以算法为核心，以程序设计为实现手段。</strong>这是整个专题的总纲：数据是原料，算法是灵魂，程序是把算法落到实处的工具。复习任何一节，都要把它放回这个框架里理解。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">核心知识体系</text><rect x="40" y="70" width="180" height="64" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="130" y="100" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">数据（基础）</text><text x="130" y="122" font-size="11" fill="#2a3454" text-anchor="middle">原料</text><rect x="250" y="70" width="180" height="64" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="100" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">算法（核心）</text><text x="340" y="122" font-size="11" fill="#2a3454" text-anchor="middle">灵魂</text><rect x="460" y="70" width="180" height="64" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="550" y="100" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">程序设计（手段）</text><text x="550" y="122" font-size="11" fill="#2a3454" text-anchor="middle">工具</text><line x1="220" y1="102" x2="248" y2="102" stroke="#6266d9" stroke-width="1.5"/><line x1="430" y1="102" x2="458" y2="102" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="186" font-size="13" fill="#2a3454" text-anchor="middle">数据 → 信息 → 知识 → 智慧（层层递进）</text><rect x="120" y="206" width="440" height="50" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="234" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">以数据为基础 · 以算法为核心 · 以程序设计为实现手段</text></svg>', caption: '图1　专题总纲：数据是基础、算法是核心、程序设计是实现手段，并伴随数据到智慧的递进。' },
      { type: 'heading', text: '二、高频考点一览' },
      { type: 'paragraph', text: '把近几年常见题型整理成下表。选择题考概念辨析最多；填空题爱考定义和五大特征；程序分析题则重点考解析算法、枚举算法和 Python 程序阅读。复习时对着这张表逐个过关。' },
      { type: 'table', headers: ['考点', '考查形式'], rows: [['算法的概念与五大特征', '选择题'], ['算法的三种描述方式', '选择题+填空题'], ['流程图基本图形符号识别与功能', '选择题'], ['三种基本控制结构', '选择题+程序分析'], ['用计算机解决问题三阶段', '选择题'], ['解析算法思想与应用', '程序分析题'], ['枚举算法思想与应用', '程序分析题'], ['Python程序阅读与调试', '程序分析题']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">五大特征与三种描述方式</text><rect x="30" y="56" width="300" height="150" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="180" y="84" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">算法五大特征</text><text x="180" y="110" font-size="11" fill="#2a3454" text-anchor="middle">有穷性、确定性、可行性</text><text x="180" y="134" font-size="11" fill="#2a3454" text-anchor="middle">有0个或多个输入</text><text x="180" y="158" font-size="11" fill="#2a3454" text-anchor="middle">有一个或多个输出</text><text x="180" y="186" font-size="11" fill="#2a3454" text-anchor="middle">（选择题高频）</text><rect x="350" y="56" width="300" height="150" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="500" y="84" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">三种描述方式</text><text x="500" y="110" font-size="11" fill="#2a3454" text-anchor="middle">自然语言</text><text x="500" y="134" font-size="11" fill="#2a3454" text-anchor="middle">流程图</text><text x="500" y="158" font-size="11" fill="#2a3454" text-anchor="middle">伪代码</text><text x="500" y="186" font-size="11" fill="#2a3454" text-anchor="middle">（填空/选择高频）</text><text x="340" y="244" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">三种基本控制结构</text><text x="340" y="270" font-size="11" fill="#2a3454" text-anchor="middle">顺序结构 · 选择结构 · 循环结构</text></svg>', caption: '图2　高频考点浓缩：五大特征、三种描述方式、三种控制结构。' },
      { type: 'heading', text: '三、五条复习策略' },
      { type: 'list', items: ['抓概念重特征：把算法五大特征背到烂熟', '会读图能画图：熟记流程图各种图形符号', '明过程懂步骤：用计算机解决问题三阶段——抽象与建模→设计算法→描述算法', '练算法会编程：重点练解析算法与枚举算法', '理关系建体系：理顺数据→信息→知识→智慧递进，以及数据与算法的联系'] },
      { type: 'tip', label: '提示·策略1 抓概念重特征', text: '<strong>算法的五大特征必须一字不差记牢：有穷性、确定性、可行性、有0个或多个输入、有一个或多个输出。</strong>尤其“有输出”这一点，很多同学忘了——一个不产生任何结果的步骤序列不能叫算法。' },
      { type: 'tip', label: '提示·策略2 会读图能画图', text: '<strong>流程图的图形符号要认得：椭圆是起止框、平行四边形是输入输出框、矩形是处理框、菱形是判断框、箭头是流程线。</strong>选择题常拿“菱形表示什么”来考，答案是判断/分支。' },
      { type: 'tip', label: '提示·策略3 明过程懂步骤', text: '<strong>用计算机解决问题三阶段：抽象与建模 → 设计算法 → 描述算法。</strong>这和“程序设计四步”（分析、设计、编写、调试）要区分开：三阶段偏“想清楚”，四步把“写代码、调试”也包含进来了。' },
      { type: 'tip', label: '提示·策略4 练算法会编程', text: '<strong>解析算法和枚举算法是程序分析题的两大主角。</strong>解析算法靠数学公式直接算（如已知边长求面积）；枚举算法靠一一列举再检验（如找满足条件的解）。动手写几遍，比光看更有效。' },
      { type: 'tip', label: '提示·策略5 理关系建体系', text: '<strong>把零散知识挂到体系上：数据→信息→知识→智慧是递进链；数据与算法是“对象”与“加工方法”的关系。</strong>体系建好了，考到任何知识点都能迅速定位。' },
      { type: 'warn', label: '易错·三阶段 ≠ 四步', text: '最常混的是“用计算机解决问题三阶段”和“程序设计一般过程四步”。三阶段是抽象与建模、设计算法、描述算法；四步是分析问题、设计算法、编写程序、运行调试。三阶段不含“编写、调试”，别张冠李戴。' },
      { type: 'example', label: '例题·综合辨析', text: '题目：下列关于本专题的说法，正确的是？A. 算法可以没有输出；B. 程序设计只需设计算法一步；C. 以数据为基础、以算法为核心、以程序设计为实现手段；D. 数据与算法互不相干。<br>解析：A 错，算法必须至少有一个输出；B 错，程序设计有分析、设计、编写、调试四步；D 错，数据与算法紧密联系。C 正是本专题的核心知识体系总结，完全正确。' }
    ],
    exercises: [
      { type: 'choice', question: '本专题的核心知识体系可以概括为？', options: ['以算法为基础、以数据为核心', '以数据为基础、以算法为核心、以程序设计为实现手段', '以硬件为基础、以软件为核心', '以网络为基础、以数据为核心'], answer: '以数据为基础、以算法为核心、以程序设计为实现手段', explanation: '专题总纲是：以数据为基础（原料），以算法为核心（灵魂），以程序设计为实现手段（工具）。其他选项把基础与核心颠倒，或说成硬件/网络，都不正确。' },
      { type: 'choice', question: '算法的五大特征中，下列哪一项是必须的？', options: ['必须有图形界面', '至少有一个输出', '必须用到循环', '必须用 Python 实现'], answer: '至少有一个输出', explanation: '算法五大特征包括：有穷性、确定性、可行性、有0个或多个输入、有一个或多个输出。其中“有输出”是必须的，没有结果的步骤序列不能称为算法。' },
      { type: 'choice', question: '用计算机解决问题三阶段是？', options: ['分析问题→设计算法→编写程序', '抽象与建模→设计算法→描述算法', '编写程序→运行调试→交付', '数据→信息→知识'], answer: '抽象与建模→设计算法→描述算法', explanation: '用计算机解决问题三阶段为：抽象与建模、设计算法、描述算法。注意它和“程序设计四步”不同，三阶段不含编写程序和运行调试。' },
      { type: 'fill', question: '数据、信息、知识、智慧四者构成递进关系：___ → 信息 → ___ → 智慧。', answer: '数据；知识', explanation: '从原始到高级的递进链是：数据（符号记录）→ 信息（有意义的内容）→ 知识（归纳的规律）→ 智慧（用于决策判断）。' },
      { type: 'fill', question: '流程图四种常用图形：起止框用___形，输入输出框用___形，处理框用矩形，判断框用___形。', answer: '椭圆；平行四边形；菱形', explanation: '流程图图形符号：起止框为椭圆（或圆角矩形），输入输出框为平行四边形，处理框为矩形，判断/分支框为菱形，箭头为流程线。' }
    ]
  });
})();
