/* 通用技术 · 高三复习 · 技术与设计理论 · 第一节 科学与技术的区别与联系 */
(function () {
  var v = gzGetVolume('tech', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u4',
    name: '科学与技术的区别与联系',
    chapter: '二、技术与设计1核心理论 · 技术及其性质',
    difficulty: '重点',
    content: [
      { type: 'heading', text: '一、本课时复习定位' },
      { type: 'paragraph', text: '“科学”和“技术”是高考通用技术里最容易混的一组概念。高一刚学时，很多同学把两者当成一回事，考试时张冠李戴。高三复习要求我们能从“任务、回答的问题、成果形式、与生产的关系、验证方式”五个维度清楚地区分开来，同时也要记住二者不是对立的，而是相互依存、相互促进的。这一节课是“技术及其性质”这一章的收尾，也是后面“技术与设计的关系”的铺垫。' },
      { type: 'paragraph', text: '先给一个最通俗的比方：科学像是在研究“电为什么能让人触电”，而技术像是在造“防触电的漏电保护器”。一个在解释世界，一个在改造世界——这正是两者最根本的分野。' },
      { type: 'heading', text: '二、科学与技术的五维对照' },
      { type: 'paragraph', text: '下面这张表是本节课的核心，建议背熟。选择题经常把“科学”的描述安到“技术”头上作为错误选项，或者反过来，所以每一行都要能独立判断。' },
      { type: 'table', headers: ['比较维度', '科学', '技术'], rows: [
        ['任务', '认识世界', '改造世界'],
        ['回答的问题', '“是什么”“为什么”', '“怎么办”'],
        ['成果形式', '发现规律、理论', '发明产品、方法'],
        ['与生产的关系', '一般不直接联系生产', '直接服务于生产'],
        ['验证方式', '通过实验验证假设', '通过试验验证方案']
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f3ee"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">科学 vs 技术：五个维度对照</text><rect x="24" y="58" width="316" height="210" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="182" y="90" font-size="16" font-weight="bold" fill="#2f6b4f" text-anchor="middle">科学 · 认识世界</text><text x="48" y="124" font-size="13" fill="#1e3a2b">任务：认识世界</text><text x="48" y="152" font-size="13" fill="#1e3a2b">问题：是什么、为什么</text><text x="48" y="180" font-size="13" fill="#1e3a2b">成果：规律、理论</text><text x="48" y="208" font-size="13" fill="#1e3a2b">生产：一般不直接联系</text><text x="48" y="236" font-size="13" fill="#1e3a2b">验证：实验验证假设</text><rect x="340" y="58" width="316" height="210" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="498" y="90" font-size="16" font-weight="bold" fill="#2f6b4f" text-anchor="middle">技术 · 改造世界</text><text x="364" y="124" font-size="13" fill="#1e3a2b">任务：改造世界</text><text x="364" y="152" font-size="13" fill="#1e3a2b">问题：怎么办</text><text x="364" y="180" font-size="13" fill="#1e3a2b">成果：产品、方法</text><text x="364" y="208" font-size="13" fill="#1e3a2b">生产：直接服务生产</text><text x="364" y="236" font-size="13" fill="#1e3a2b">验证：试验验证方案</text></svg>', caption: '图1　科学和技术从五个维度对照：一个认识世界，一个改造世界。' },
      { type: 'keypoint', label: '重点·区别一句话记牢', text: '<strong>科学是“认识世界”——回答是什么、为什么，产出规律理论；技术是“改造世界”——回答怎么办，产出产品方法。</strong>判断一道题说的是科学还是技术，先看它是在“解释世界”还是在“做东西、想方法”。科学偏“知”，技术偏“做”。' },
      { type: 'heading', text: '三、最容易踩的四个坑' },
      { type: 'list', items: [
        '坑一：把“实验”和“试验”混用。科学用实验验证假设（比如验证“金属会热胀冷缩”这个猜想），技术用试验验证方案（比如试制一辆汽车看能不能跑、安不安全）。',
        '坑二：以为科学成果一定用到生产。科学重在发现规律，很多理论成果离实际生产还有距离；技术则直接服务于生产。',
        '坑三：把“发明产品”归给科学。产品、工艺、方法是技术成果；规律、定理、理论才是科学成果。',
        '坑四：看到“研究”二字就选科学。技术研究也会做大量研究，关键看研究对象是“规律本身”还是“怎么造出东西”。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#e8f3ee"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">实验与试验：两个易混词</text><rect x="40" y="60" width="260" height="150" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="170" y="96" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">实验（科学）</text><text x="170" y="128" font-size="13" fill="#1e3a2b" text-anchor="middle">验证假设</text><text x="170" y="156" font-size="13" fill="#1e3a2b" text-anchor="middle">例：验证“水加热到</text><text x="170" y="180" font-size="13" fill="#1e3a2b" text-anchor="middle">100℃会沸腾”</text><rect x="380" y="60" width="260" height="150" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="510" y="96" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">试验（技术）</text><text x="510" y="128" font-size="13" fill="#1e3a2b" text-anchor="middle">验证方案</text><text x="510" y="156" font-size="13" fill="#1e3a2b" text-anchor="middle">例：新飞机试飞看</text><text x="510" y="180" font-size="13" fill="#1e3a2b" text-anchor="middle">能否安全起飞降落</text></svg>', caption: '图2　科学用“实验”验证假设，技术用“试验”验证方案，词不同、含义也不同。' },
      { type: 'tip', label: '提示·题干关键词速判', text: '看到“发现、规律、理论、假设、为什么、是什么、实验”，多半在说<strong>科学</strong>；看到“发明、产品、工艺、方法、怎么办、试制、试验、生产”，多半在说<strong>技术</strong>。拿不准时，回头想“这是在解释世界，还是在造东西”。' },
      { type: 'warn', label: '易错·不是所有“研究”都是科学', text: '很多同学一看到“研究新技术”“研究新材料”就选“科学”，这是错的。技术研究同样需要研究，关键看产出是“规律理论”还是“产品方法”。只要最终是为了“怎么办”、为了做出东西，它就是技术。' },
      { type: 'heading', text: '四、科学和技术是相互促进的' },
      { type: 'paragraph', text: '区别讲完，一定要补上“联系”。科学和技术的正确关系是：科学促进技术的发展，技术推动科学的进步。两者不是你死我活，而是手拉手往前走。' },
      { type: 'list', items: [
        '科学促进技术：有了电磁感应理论（科学），才有了发电机、电动机（技术）。',
        '技术推动科学：有了高倍望远镜和卫星（技术），天文学（科学）才看得更远、研究得更深。'
      ] },
      { type: 'example', label: '例题·区分科学与技术', text: '题目：袁隆平团队通过杂交试验，培育出高产杂交水稻新品种。这件事主要体现的是科学还是技术？<br>解析：题干关键词是“培育出新品种”“杂交试验”。“培育新品种”是造出新的产品，“试验”是技术验证方案的方式，回答的是“怎么办”、直接服务粮食生产，完全符合技术的定义。它不属于科学，因为科学的成果是规律理论、验证方式是实验。这是一道典型的技术题。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于科学和技术任务的说法，正确的是？', options: ['科学的任务是改造世界，技术的任务是认识世界', '科学和技术的任务都是认识世界', '科学的任务是认识世界，技术的任务是改造世界', '科学和技术的任务都是改造世界'], answer: '科学的任务是认识世界，技术的任务是改造世界', explanation: '这是两者最根本的区别：科学以认识世界为目的，回答“是什么”“为什么”；技术以改造世界为目的，回答“怎么办”。选项把两者任务说反或说成一样，都是错的。' },
      { type: 'choice', question: '物理学中通过实验验证“万有引力定律”的正确性，这种验证方式属于？', options: ['技术试验', '科学实验', '生产试制', '产品设计'], answer: '科学实验', explanation: '验证“定律、假设”是否成立，是科学的验证方式，称为“实验”（实验验证假设）。注意与技术的“试验”区分：试验是用来验证一个设计方案行不行的，比如新机器试车。题干明确说“验证定律”，所以选科学实验。' },
      { type: 'choice', question: '下列成果中，属于技术成果的是？', options: ['发现了元素周期律', '提出了进化论', '发明了智能手机', '总结了相对论'], answer: '发明了智能手机', explanation: '技术的成果形式是“发明产品、方法”，智能手机是实实在在的产品；而“元素周期律、进化论、相对论”都是对自然规律的发现，属于科学成果（规律、理论）。' },
      { type: 'fill', question: '科学重在认识世界，回答“___”“___”的问题；技术重在改造世界，回答“___”的问题。', answer: '是什么；为什么；怎么办', explanation: '这是对照表的核心一行：科学回答“是什么”（描述现象）和“为什么”（解释原因），技术回答“怎么办”（解决怎么做、怎么造）。三空顺序不要乱填。' },
      { type: 'fill', question: '科学和技术的正确关系是：科学___技术的发展，技术___科学的进步。（两空均填“促进”或“推动”相关词，用“促进/推动”或“推动/促进”均可）', answer: '促进；推动', explanation: '标准表述为：科学促进技术的发展，技术推动科学的进步。两者相互依存、相互促进。填空题按“科学在前、技术在后”的顺序填即可，写“促进/推动”或“推动/促进”都算对。' }
    ]
  });
})();
