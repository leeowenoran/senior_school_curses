/* 化学 · 高三复习 · 化学实验 · 专题四 · 课时：实验设计与评价 */
(function () {
  var v = gzGetVolume('chemistry', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u5',
    name: '实验设计与评价',
    chapter: '化学实验 · 专题四 实验设计与评价',
    difficulty: '较难',
    content: [
      { type: 'heading', text: '一、实验方案设计的基本原则' },
      { type: 'paragraph', text: '实验方案设计是高考实验题的<strong>压轴内容</strong>,要求综合运用化学知识和实验技能。设计实验方案时要遵循以下基本原则：' },
      { type: 'table', headers: ['原则', '要求'], rows: [
        ['科学性', '实验原理正确,符合化学规律'],
        ['安全性', '操作安全,无危险隐患'],
        ['可行性', '实验条件易于实现'],
        ['简约性', '步骤简单,药品节约']
      ]},
      { type: 'keypoint', label: '重点·四原则的关系', text: '<strong>四原则的关系</strong>：科学性是前提,安全性是保障,可行性是基础,简约性是优化。设计实验时首先要保证原理正确,然后考虑安全,再考虑能否实现,最后追求简单节约。' },
      { type: 'heading', text: '二、物质制备实验的装置连接' },
      { type: 'paragraph', text: '以<strong>气体制备为主线</strong>的物质制备实验,需要完成以下装置的正确连接：' },
      { type: 'svg', svg: '<svg viewBox="0 0 800 150" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="150" fill="#f0f8ff"/><rect x="20" y="50" width="100" height="50" fill="#3498db" rx="5"/><text x="70" y="80" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">发生</text><polygon points="130,75 145,65 145,85" fill="#e74c3c"/><rect x="155" y="50" width="100" height="50" fill="#3498db" rx="5"/><text x="205" y="80" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">除杂</text><polygon points="265,75 280,65 280,85" fill="#e74c3c"/><rect x="290" y="50" width="100" height="50" fill="#3498db" rx="5"/><text x="340" y="80" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">干燥</text><polygon points="400,75 415,65 415,85" fill="#e74c3c"/><rect x="425" y="50" width="100" height="50" fill="#3498db" rx="5"/><text x="475" y="80" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">主反应</text><polygon points="535,75 550,65 550,85" fill="#e74c3c"/><rect x="560" y="50" width="120" height="50" fill="#3498db" rx="5"/><text x="620" y="75" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">收集/性质</text><text x="620" y="90" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">验证</text><polygon points="690,75 705,65 705,85" fill="#e74c3c"/><rect x="715" y="50" width="70" height="50" fill="#e74c3c" rx="5"/><text x="750" y="80" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">尾气</text></svg>', caption: '图1 物质制备实验的装置连接顺序' },
      { type: 'keypoint', label: '重点·装置连接顺序', text: '<strong>装置连接顺序</strong>：发生→除杂→干燥→主反应→收集/性质验证→尾气处理。注意：除杂要在干燥之前,因为除杂可能引入水蒸气;尾气处理必须在最后,防止有毒气体逸出。' },
      { type: 'heading', text: '三、实验评价的常见角度' },
      { type: 'paragraph', text: '评价实验方案时,要从多个角度进行分析：' },
      { type: 'table', headers: ['评价角度', '具体内容'], rows: [
        ['原理评价', '反应原理是否正确、是否可行'],
        ['装置评价', '装置是否合理、有无缺陷'],
        ['操作评价', '操作步骤是否正确、顺序是否合理'],
        ['环保评价', '有无污染、有无尾气处理'],
        ['经济评价', '原料是否易得、产率是否合理']
      ]},
      { type: 'keypoint', label: '重点·实验评价思路', text: '<strong>实验评价思路</strong>：一看原理(反应能否发生、产物是否正确);二看装置(仪器选择是否恰当、连接是否合理);三看操作(步骤是否完整、顺序是否正确);四看环保(有无污染、尾气处理);五看经济(成本、产率)。' },
      { type: 'heading', text: '四、综合实验题的解题思路' },
      { type: 'paragraph', text: '综合实验题通常涉及物质制备、性质验证、定量测定等多个方面。解题时要按照以下思路进行：' },
      { type: 'list', items: [
        '<strong>明确实验目的</strong>：制备物质还是探究性质?',
        '<strong>分析反应原理</strong>：核心化学反应是什么?',
        '<strong>选择仪器装置</strong>：需要哪些仪器?如何连接?',
        '<strong>关注关键操作</strong>：有哪些特殊的操作要点?',
        '<strong>注意安全问题</strong>：有无有毒气体?如何防护?'
      ]},
      { type: 'svg', svg: '<svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="350" fill="#f0f8ff"/><text x="400" y="30" font-size="20" font-weight="bold" fill="#2c3e50" text-anchor="middle">综合实验题解题思路</text><g transform="translate(50,60)"><rect x="0" y="0" width="140" height="80" fill="#3498db" rx="5"/><text x="70" y="30" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">1.明确目的</text><text x="70" y="55" font-size="11" fill="#fff" text-anchor="middle">制备or探究?</text></g><g transform="translate(220,60)"><rect x="0" y="0" width="140" height="80" fill="#3498db" rx="5"/><text x="70" y="30" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">2.分析原理</text><text x="70" y="55" font-size="11" fill="#fff" text-anchor="middle">核心反应</text></g><g transform="translate(390,60)"><rect x="0" y="0" width="140" height="80" fill="#3498db" rx="5"/><text x="70" y="30" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">3.选择装置</text><text x="70" y="55" font-size="11" fill="#fff" text-anchor="middle">仪器+连接</text></g><g transform="translate(560,60)"><rect x="0" y="0" width="140" height="80" fill="#3498db" rx="5"/><text x="70" y="30" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">4.关键操作</text><text x="70" y="55" font-size="11" fill="#fff" text-anchor="middle">特殊要点</text></g><g transform="translate(305,180)"><rect x="0" y="0" width="140" height="80" fill="#e74c3c" rx="5"/><text x="70" y="30" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">5.安全注意</text><text x="70" y="55" font-size="11" fill="#fff" text-anchor="middle">防护+尾气</text></g><polygon points="400,140 390,160 410,160" fill="#e74c3c"/></svg>', caption: '图2 综合实验题解题思路' },
      { type: 'heading', text: '五、常见易错点与答题规范' },
      { type: 'subheading', text: '1. 常见易错点' },
      { type: 'table', headers: ['易错点', '正确理解'], rows: [
        ['加热方式混淆', '试管、蒸发皿、坩埚<strong>直接加热</strong>;烧杯、烧瓶<strong>垫石棉网加热</strong>'],
        ['冷凝管水流方向', '<strong>下口进、上口出</strong>(逆流冷却效果好)'],
        ['分液时上下层处理', '下层液体<strong>从下口放出</strong>,上层液体<strong>从上口倒出</strong>'],
        ['气体收集方法', '密度大于空气→<strong>向上</strong>排空气法;密度小于空气→<strong>向下</strong>排空气法'],
        ['干燥剂选择', '浓硫酸<strong>不能</strong>干燥NH₃;碱石灰<strong>不能</strong>干燥Cl₂、CO₂'],
        ['pH试纸使用', '<strong>不能</strong>润湿'],
        ['滴定管读数', '酸式滴定管"0"刻度在<strong>上部</strong>']
      ]},
      { type: 'subheading', text: '2. 实验题的答题规范' },
      { type: 'list', items: [
        '<strong>描述现象</strong>：要具体、准确,包括"<strong>什么物质</strong>""<strong>什么颜色</strong>""<strong>什么变化</strong>"',
        '<strong>书写操作</strong>：要完整,包括"<strong>如何操作</strong>""<strong>达到什么程度</strong>"',
        '<strong>解释原因</strong>：要从<strong>原理</strong>出发,结合<strong>化学方程式</strong>说明'
      ]},
      { type: 'keypoint', label: '重点·答题规范示例', text: '<strong>答题规范示例</strong>：描述现象时不能只说"变红",要说"溶液由无色变为血红色";描述操作时不能只说"加热",要说"用酒精灯加热至溶液沸腾";解释原因时要写出化学方程式,如"Fe³⁺+3SCN⁻=Fe(SCN)₃,溶液变血红色"。' },
      { type: 'heading', text: '六、高考命题趋势与备考策略' },
      { type: 'subheading', text: '1. 命题趋势' },
      { type: 'list', items: [
        '<strong>情境真实化</strong>：试题背景更加贴近生产、生活实际',
        '<strong>模块融合化</strong>：实验与反应原理、元素化合物、有机化学等模块融合考查',
        '<strong>能力综合化</strong>：从单一操作考查转向<strong>方案设计、装置评价、数据处理</strong>的综合考查',
        '<strong>开放性增强</strong>：实验方案设计、装置改进等开放性设问增多'
      ]},
      { type: 'subheading', text: '2. 备考策略' },
      { type: 'table', headers: ['阶段', '任务'], rows: [
        ['一轮复习', '逐个突破各实验的基础知识(仪器、操作、原理);熟记常见离子的检验方法、气体的制备与收集'],
        ['二轮复习', '专项训练<strong>综合实验题</strong>;构建"<strong>气体制备主线</strong>"的知识网络;训练实验方案的设计与评价'],
        ['三轮复习', '回归教材实验;限时训练综合实验大题;关注STSE情境实验题']
      ]},
      { type: 'keypoint', label: '重点·核心提醒', text: '<strong>核心提醒</strong>：化学实验复习的核心是"<strong>以原理为基础,以操作为关键,以评价为提升</strong>"。高考实验题虽千变万化,但万变不离其宗——<strong>掌握教材经典实验的原理和操作</strong>是应对一切实验题的根本。复习时要做到：<strong>仪器清</strong>(能识别并说出用途)、<strong>操作熟</strong>(掌握先后顺序和规范要点)、<strong>原理明</strong>(理解每个实验的化学原理)、<strong>评价准</strong>(能从多角度评价实验方案)。将五大专题形成有机整体,方能从容应对高考实验题。' }
    ],
    exercises: [
      { type: 'choice', question: '设计实验方案时,首先要考虑的原则是(  )', options: ['安全性', '科学性', '可行性', '简约性'], answer: '科学性', explanation: '设计实验方案时,首先要保证实验原理正确,符合化学规律,这是科学性原则。如果原理错误,实验再安全、再简单也没有意义。安全性是保障,可行性是基础,简约性是优化,但都必须建立在科学性的基础上。' },
      { type: 'choice', question: '实验室制取纯净的Cl₂,装置连接顺序正确的是(  )', options: ['发生→干燥→除杂→收集→尾气处理', '发生→除杂→干燥→收集→尾气处理', '发生→收集→除杂→干燥→尾气处理', '发生→尾气处理→除杂→干燥→收集'], answer: '发生→除杂→干燥→收集→尾气处理', explanation: '制取纯净的Cl₂,首先要发生反应生成Cl₂,然后除去混有的HCl气体(除杂),再干燥除去水蒸气(干燥),最后收集Cl₂并处理尾气。除杂必须在干燥之前,因为除杂过程可能引入水蒸气;尾气处理必须在最后,防止有毒的Cl₂逸出污染环境。' },
      { type: 'choice', question: '评价实验方案时,下列角度不需要考虑的是(  )', options: ['反应原理是否正确', '装置是否合理', '操作是否简便', '实验是否有趣'], answer: '实验是否有趣', explanation: '评价实验方案要从科学性(原理正确)、装置评价(仪器合理)、操作评价(步骤正确)、环保评价(无污染)、经济评价(成本低)等角度进行。实验是否有趣不是评价标准,有些实验虽然有趣但不科学或不安全,不能使用。' },
      { type: 'choice', question: '下列关于实验操作的说法,正确的是(  )', options: ['加热烧杯时可以直接加热', '分液时上层液体从下口放出', '蒸馏时冷凝管下口进水、上口出水', '用pH试纸测溶液pH时,先将试纸润湿'], answer: '蒸馏时冷凝管下口进水、上口出水', explanation: 'A错误,烧杯加热时必须垫石棉网,不能直接加热;B错误,分液时下层液体从下口放出,上层液体从上口倒出;C正确,冷凝水下口进、上口出,形成逆流,冷却效果好;D错误,pH试纸不能润湿,否则待测液被稀释,测得的pH不准确。' },
      { type: 'choice', question: '综合实验题解题时,首先要做的是(  )', options: ['选择仪器装置', '明确实验目的', '书写化学方程式', '计算产物质量'], answer: '明确实验目的', explanation: '解综合实验题时,首先要明确实验目的：是制备物质还是探究性质?只有明确了目的,才能分析反应原理、选择仪器装置、设计操作步骤。如果目的不明确,后续的操作都可能偏离方向。明确目的后再分析原理、选择装置、关注操作、注意安全。' }
    ]
  });
})();
