/* 通用技术 · 高三复习 · 技术与设计理论 · 第三节 技术与设计的关系 */
(function () {
  var v = gzGetVolume('tech', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u6',
    name: '技术与设计的关系',
    chapter: '二、技术与设计1核心理论 · 技术与设计的关系',
    difficulty: '重点',
    content: [
      { type: 'heading', text: '一、本课时复习定位' },
      { type: 'paragraph', text: '“技术与设计的关系”是《技术与设计1》全书的总纲，也是高考的常驻考点。前面我们学的技术性质、知识产权，最后都要落到“设计”上——因为技术成果大多是通过设计变成产品的。这一节要搞清两句话：第一，设计是技术发展的重要驱动力；第二，技术对设计有重要影响。两者是双向的关系，不是单向的。' },
      { type: 'paragraph', text: '打个比方：技术是“能做什么”的本领，设计是“怎么把本领用好、做出好东西”的规划。没有技术，设计是空想；没有设计，技术只是零散的本领。' },
      { type: 'heading', text: '二、设计是技术发展的重要驱动力' },
      { type: 'paragraph', text: '这句话的意思是：很多技术之所以进步，是因为先有了设计的需求和设想，然后才去发展相应的技术。设计像一根鞭子，赶着技术往前跑。' },
      { type: 'list', items: [
        '设计促使技术诞生：为了实现“飞上天空”的设计构想，人类才去发展航空技术。',
        '设计改进技术：为了让手机更轻薄好用，推动了芯片、电池、屏幕技术不断迭代。',
        '设计拓展技术应用：把传感技术和网络技术“设计”进智能家居，技术就被用到了新场景。',
        '设计是技术成果转化的桥梁：再先进的技术，也要靠设计变成人们用得上的产品。'
      ] },
      { type: 'keypoint', label: '重点·驱动力的含义', text: '<strong>设计是技术发展的重要驱动力：设计产生需求、提出目标，从而牵引技术不断进步，并帮助技术成果转化为实际产品。</strong>答题时，凡是“因为想做出某种东西，才推动了某项技术发展”的情境，都归到“设计驱动技术”。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#e8f3ee"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">设计驱动技术发展</text><rect x="120" y="64" width="160" height="80" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="200" y="104" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">设计构想</text><rect x="400" y="64" width="160" height="80" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="480" y="104" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">技术发展</text><line x1="280" y1="104" x2="400" y2="104" stroke="#2f9e6b" stroke-width="2.5" marker-end="url(#ar1)"/><text x="340" y="92" font-size="12" fill="#1e3a2b" text-anchor="middle">牵引、驱动</text><defs><marker id="ar1" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2f9e6b"/></marker></defs><text x="340" y="190" font-size="12" fill="#1e3a2b" text-anchor="middle">例：想“飞上天”的设计 → 推动航空技术诞生</text></svg>', caption: '图1　设计提出构想与目标，牵引并驱动技术不断发展。' },
      { type: 'heading', text: '三、技术对设计的影响' },
      { type: 'paragraph', text: '反过来，技术也深刻影响着设计。设计不是凭空画的，它受到现有技术水平、材料、工具的限制，也因新技术而获得更多可能。' },
      { type: 'list', items: [
        '技术限定设计的可能：没有高性能电池，就设计不出续航长的电动车。',
        '技术提供设计手段：CAD、3D打印让设计从纸上草图变成可快速验证的模型。',
        '技术丰富设计对象：新材料、新工艺让以前做不出的产品成为可能。',
        '技术进步推动设计思维和评价标准更新：更环保的技术引导“绿色设计”理念。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#e8f3ee"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">技术影响设计</text><rect x="120" y="64" width="160" height="80" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="200" y="104" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">技术水平</text><rect x="400" y="64" width="160" height="80" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="480" y="104" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">设计能力</text><line x1="280" y1="104" x2="400" y2="104" stroke="#2f9e6b" stroke-width="2.5" marker-end="url(#ar2)"/><text x="340" y="92" font-size="12" fill="#1e3a2b" text-anchor="middle">限制 / 赋能</text><defs><marker id="ar2" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2f9e6b"/></marker></defs><text x="340" y="190" font-size="12" fill="#1e3a2b" text-anchor="middle">例：没有好电池 → 设计不出长续航电动车</text></svg>', caption: '图2　技术既限定设计的上限，也通过新手段赋能设计。' },
      { type: 'tip', label: '提示·双向关系别只答一面', text: '遇到“技术与设计的关系”大题，<strong>一定要两面都写</strong>：先写“设计是技术发展的重要驱动力”，再写“技术对设计有重要影响（提供手段、限定可能、丰富对象）”。只答一面会丢一半分。' },
      { type: 'warn', label: '易错·设计不是技术的全部', text: '有同学认为“技术发展全靠设计”，这是片面的。设计是驱动力之一，但技术也会在科学发现、材料突破等推动下独立发展。准确的说法是“设计是重要驱动力”，加“重要”二字才严谨。' },
      { type: 'example', label: '例题·判断关系方向', text: '题目：3D打印技术出现后，设计师可以快速把草图打成实物模型来验证想法。这主要说明什么？<br>解析：题干说“3D打印技术出现，让设计更方便验证”，是新技术为设计提供了新的手段和工具，体现的是“技术对设计的影响”（技术赋能设计）。若题目反过来，说“为了能快速验证，人们发展了3D打印技术”，那就是“设计驱动技术发展”。本题方向是技术影响设计。' }
    ],
    exercises: [
      { type: 'choice', question: '“为了实现飞上天空的构想，人类才不断发展航空技术。”这最能体现下列哪句话？', options: ['技术对设计有重要影响', '设计是技术发展的重要驱动力', '科学与技术互不相干', '设计依附于技术而存在'], answer: '设计是技术发展的重要驱动力', explanation: '题干强调“先有飞的构想（设计），才推动航空技术发展”，正是设计提出目标、牵引技术进步的体现，对应“设计是技术发展的重要驱动力”。技术对设计的影响则是反方向，说技术为设计提供手段或限定可能。' },
      { type: 'choice', question: '下列关于技术与设计关系的说法，正确的是？', options: ['设计完全决定技术，技术无关紧要', '技术只限制设计，不会帮助设计', '两者是双向关系：设计驱动技术，技术也影响设计', '技术与设计互不相关'], answer: '两者是双向关系：设计驱动技术，技术也影响设计', explanation: '标准关系是双向的：一方面设计是技术发展的重要驱动力，另一方面技术对设计有重要影响（提供手段、限定可能、丰富对象）。其他三项把关系说成单向或无关，都是错误的。' },
      { type: 'choice', question: '“没有高性能电池，就设计不出续航长的电动车。”这主要说明？', options: ['设计驱动技术发展', '技术限定了设计的可能', '设计比技术更重要', '电池不属于技术'], answer: '技术限定了设计的可能', explanation: '题干表达的是“现有技术水平上不去，设计就受限制”，体现的是技术对设计的影响——技术限定了设计能够达到的上限。这不是设计驱动技术，也没有比较谁更重要。' },
      { type: 'fill', question: '技术与设计的关系是双向的：一方面，___是技术发展的重要驱动力；另一方面，___对设计有重要影响。', answer: '设计；技术', explanation: '标准表述：设计是技术发展的重要驱动力，同时技术对设计有重要影响（提供设计手段、限定设计可能、丰富设计对象）。两空顺序为“设计”“技术”。' },
      { type: 'fill', question: '设计把先进技术转化为人们用得上的产品，起到了技术成果___的桥梁作用；而CAD、3D打印等新手段，体现了技术为设计提供了___。', answer: '转化；设计手段（或工具/方法）', explanation: '设计是技术成果转化的桥梁，帮助技术从“本领”变成“产品”；CAD、3D打印等属于新技术手段，说明技术为设计提供了新的设计手段（也可写工具、方法）。两空分别填“转化”和“设计手段（或工具/方法）”。' }
    ]
  });
})();
