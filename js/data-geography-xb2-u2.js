/* 地理 · 选择性必修2 · 第1章 · 课时：区域整体性与关联性 */
(function () {
  var v = gzGetVolume('geography', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u2',
    name: '区域整体性与关联性',
    chapter: '选择性必修2 · 第1章 区域与区域发展',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、区域的整体性' },
      { type: 'paragraph', text: '区域的整体性指区域内部各自然要素和人文要素之间相互联系、相互制约，构成一个不可分割的统一整体。在自然环境中，气候、地形、水文、植被、土壤等要素彼此影响；在人文方面，人口、产业、城市也相互关联。一个要素变化，往往会带动其他要素一起变化，这就是「牵一发而动全身」。' },
      { type: 'list', items: ['区域内各要素相互联系、相互制约，形成统一整体', '某一要素变化，会引起其他要素甚至整个环境变化', '整体性是人类活动必须尊重区域规律的原因', '自然要素与人文要素之间也存在整体关联'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">区域整体性：要素相互关联</text><circle cx="340" cy="180" r="120" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="120" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">气候</text><text x="340" y="250" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地形</text><text x="245" y="180" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">水文</text><text x="435" y="180" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">植被</text><text x="300" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">土壤</text><text x="380" y="205" font-size="12" fill="#1f3a4d" text-anchor="middle">土壤</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">任一要素变化，其余要素随之改变，体现整体性。</text></svg>', caption: '图1　区域内部气候、地形、水文、植被、土壤等要素相互联系，构成统一整体。' },
      { type: 'keypoint', label: '重点·整体性的核心表现', text: '<strong>整体性的核心有两层含义：</strong>① 区域内各要素不是孤立的，而是彼此联系、相互制约；② 某一要素的变化会「牵一发而动全身」，引发连锁反应。例如气候变干会减弱植被生长，植被减少又加剧水土流失，水土流失进一步恶化土壤，形成恶性循环。掌握「连锁反应」是理解整体性的关键。' },
      { type: 'heading', text: '二、区域的关联性' },
      { type: 'paragraph', text: '区域的关联性指区域之间并不是彼此孤立的，而是通过自然要素或人文要素发生联系。自然方面，河流把上下游连在一起；人文方面，人口迁移、物资流动、产业转移、交通线把不同区域连接起来。关联性说明区域发展不能只盯着自己，还要看它与外界的联系。' },
      { type: 'list', items: ['区域之间存在物质、能量、信息的流动', '自然要素联系：河流、大气环流连接不同区域', '人文要素联系：交通、贸易、人口迁移实现区际关联', '关联性越强，区域间的相互影响越明显'] },
      { type: 'table', headers: ['联系类型', '联系方式', '典型例子'], rows: [['自然联系', '河流、大气等自然过程', '长江把上游与下游连成一片'], ['经济联系', '商品、资金、产业流动', '东部向中西部产业转移'], ['社会联系', '人口迁移、文化交流', '劳务输出与返乡创业'], ['交通联系', '铁路、公路、航线', '中欧班列联通亚欧']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">区域的关联性：区域间相互连接</text><circle cx="130" cy="160" r="45" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="130" y="165" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">区域A</text><circle cx="550" cy="160" r="45" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="550" y="165" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">区域B</text><line x1="175" y1="160" x2="505" y2="160" stroke="#2a6fa8" stroke-width="3" stroke-dasharray="8,6"/><text x="340" y="140" font-size="13" fill="#1f3a4d" text-anchor="middle">物资、人口、信息</text><text x="340" y="185" font-size="13" fill="#1f3a4d" text-anchor="middle">流动</text><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">区域不是孤岛，通过多种要素相互关联、相互影响。</text></svg>', caption: '图2　不同区域之间通过物资、人口、信息流动形成关联性。' },
      { type: 'example', label: '例题·判断关联性表现', text: '题目：某河流上游修建水库后，下游的径流量和泥沙含量随之变化，这体现了区域的什么特征？<br>解析：上游和下游属于不同区段，通过河流这一自然要素连接在一起。上游水库蓄水改变了下游的水文状况，说明区域之间不是孤立的，而是相互关联、相互影响的，体现的是区域的关联性。若强调同一区域内部要素联动，则用整体性。本题是上、下游之间，答案为关联性。' },
      { type: 'heading', text: '三、整体性与关联性的意义' },
      { type: 'paragraph', text: '认识区域整体性和关联性，对区域发展有直接的指导作用。整体性提醒我们：在开发中要统筹兼顾，避免破坏某一要素而拖累全局；关联性提醒我们：区域发展要开放合作，通过区际联系实现优势互补。许多生态环境问题（如水土流失、荒漠化）正是忽视整体性造成的。' },
      { type: 'warn', label: '易错·整体性与关联性辨析', text: '① 整体性说的是「同一区域内部」要素间的联系；关联性说的是「不同区域之间」的联系，二者尺度不同，不要混淆；② 做题看到「上游影响下游」「甲地影响乙地」，优先考虑关联性；看到「气候影响植被、植被影响土壤」这种内部连锁，优先考虑整体性。分清尺度是得分关键。' },
      { type: 'tip', label: '提示·答题套路', text: '遇到「某一做法带来一连串后果」的材料，先判断是内部还是区际：内部用整体性（牵一发而动全身），区际用关联性（一地变、他地跟着变）。答题时最好写出「A变化→B变化→C变化」的链条，既体现逻辑又符合得分点。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">整体性与关联性的实践意义</text><rect x="40" y="55" width="290" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="185" y="90" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">整体性意义</text><text x="185" y="130" font-size="13" fill="#1f3a4d" text-anchor="middle">统筹开发</text><text x="185" y="165" font-size="13" fill="#1f3a4d" text-anchor="middle">防止生态破坏</text><text x="185" y="200" font-size="13" fill="#1f3a4d" text-anchor="middle">避免连锁恶化</text><rect x="350" y="55" width="290" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="495" y="90" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">关联性意义</text><text x="495" y="130" font-size="13" fill="#1f3a4d" text-anchor="middle">开放合作</text><text x="495" y="165" font-size="13" fill="#1f3a4d" text-anchor="middle">优势互补</text><text x="495" y="200" font-size="13" fill="#1f3a4d" text-anchor="middle">协调发展</text><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">整体重内部统筹，关联重区际协作，二者共同指导区域发展。</text></svg>', caption: '图3　整体性强调内部统筹，关联性强调区际协作，二者共同指导区域发展。' },
      { type: 'heading', text: '四、用整体性与关联性分析区域问题' },
      { type: 'paragraph', text: '用这两个原理分析真实区域问题时，可以分三步走：先辨明区域内部有哪些关键要素，它们怎样相互制约；再看该区域与哪些外部区域存在联系、联系靠什么实现；最后综合判断人类活动可能带来的内部连锁效应和区际影响，提出合理对策。' },
      { type: 'list', items: ['第一步：理清区域内部要素及其关系（整体性）', '第二步：找出该区域与外部的连接通道（关联性）', '第三步：预判人类活动的连锁与区际影响', '第四步：提出统筹开发与开放合作的对策'] },
      { type: 'example', label: '例题·综合分析', text: '题目：黄土高原治理水土流失，为什么要采取「植树造林+修建梯田+打坝淤地」的综合措施？<br>解析：这体现了整体性思想。黄土土质疏松、降水集中、植被稀少等要素共同导致水土流失，单治一项难以奏效；植树造林改善植被、修建梯田减缓坡面径流、打坝淤地拦蓄泥沙，三管齐下才能阻断「植被少—侵蚀强—土壤贫瘠」的连锁恶化。同时从关联性看，黄土高原的水沙还影响黄河下游，治理上游也是在保护下游区域。' }
    ],
    exercises: [
      { type: 'choice', question: '「气候干旱→植被稀少→土壤贫瘠→荒漠化加剧」的连锁反应，体现的区域发展原理是？', options: ['区域的差异性', '区域的整体性', '区域的开放性', '区域的层次性'], answer: '区域的整体性', explanation: '同一区域内部，气候、植被、土壤等要素相互联系、相互制约，一个要素变化会引发其他要素跟着变化，形成「牵一发而动全身」的连锁反应，这正是区域整体性的表现。差异性强调区域之间不同，开放性强调区域间交换，层次性强调区域大小等级，均不符合题干的连锁逻辑。' },
      { type: 'choice', question: '长江上游修建水库使下游径流量变化，这主要体现区域的哪一特征？', options: ['整体性', '关联性', '可变性', '差异性'], answer: '关联性', explanation: '上游和下游分属不同区段，通过河流这一自然要素连接起来。上游水库调节水量，使下游水文状况随之改变，说明不同区域之间不是孤立的，而是通过自然过程相互关联、相互影响，体现的是区域的关联性。若强调同一区域内部要素联动才用整体性，本题为上下游之间，故选关联性。' },
      { type: 'choice', question: '关于区域整体性与关联性，下列说法正确的是？', options: ['整体性描述区域之间联系', '关联性描述区域内部要素联系', '整体性强调内部统一，关联性强调区际联系', '二者没有实际指导意义'], answer: '整体性强调内部统一，关联性强调区际联系', explanation: '整体性是同一区域内部各要素相互联系、相互制约，构成统一整体；关联性是不同区域之间通过自然或人文要素发生联系。第一项和第二项把二者尺度说反了，第三项准确地表述了二者的区别。二者对统筹开发和开放合作都有重要指导意义，第四项错误。' },
      { type: 'fill', question: '区域的整体性核心含义是：区域内各要素相互联系、相互制约，某一要素变化会引起其他要素甚至整个环境变化，即所谓的「___」。', answer: '牵一发而动全身', explanation: '区域整体性的核心表现之一，就是区域内某一要素的变化会带动其他要素乃至整个环境发生变化，地理上常概括为「牵一发而动全身」。理解这一点，才能明白为什么治理生态问题必须采取综合措施，而不能只针对单一要素。' },
      { type: 'fill', question: '区域之间通过河流、大气等自然过程发生的联系属于___联系；通过商品、资金、产业流动发生的联系属于___联系。', answer: '自然；经济', explanation: '区域的关联性按联系方式可分为多种类型：依靠河流、大气环流等自然过程实现的叫自然联系，如长江连接上下游；依靠商品、资金、技术、产业流动实现的叫经济联系，如产业转移、区际贸易；此外还有人口迁移带来的社会联系和交通线带来的交通联系。明确联系方式有助于分析区际影响。' }
    ]
  });
})();
