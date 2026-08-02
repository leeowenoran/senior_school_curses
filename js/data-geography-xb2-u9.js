/* 地理 · 选择性必修2 · 第4章 · 课时：流域内部的协调发展 */
(function () {
  var v = gzGetVolume('geography', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u9',
    name: '流域内部的协调发展',
    chapter: '选择性必修2 · 第4章 区际联系与区域协调发展',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、流域是一个特殊区域' },
      { type: 'paragraph', text: '流域是以河流的干流和支流集水区域为单元的自然区域，它从河源到河口、从上游到下游连成一体。由于水沙流动，流域内上下游、左右岸、干支流之间天然关联，一处开发或污染会影响全流域，因此流域必须作为整体来规划和管理。' },
      { type: 'list', items: ['流域以分水岭为界，集水成河', '上下游、干支流天然连通', '水资源、水沙在流域内统一流动', '必须整体规划，不能各自为政'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">流域：从源头到河口的统一整体</text><path d="M60,70 C200,120 240,200 620,260" fill="none" stroke="#2a6fa8" stroke-width="4"/><circle cx="60" cy="70" r="8" fill="#2a6fa8"/><text x="60" y="55" font-size="12" fill="#1f3a4d" text-anchor="middle">河源</text><circle cx="300" cy="155" r="8" fill="#2a6fa8"/><text x="300" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">中游</text><circle cx="620" cy="260" r="8" fill="#2a6fa8"/><text x="620" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">河口</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">水沙从源头流向河口，上下游命运相连。</text></svg>', caption: '图1　流域从源头经中游到河口连为一体，上下游水沙关联。' },
      { type: 'keypoint', label: '重点·流域的整体性', text: '<strong>流域最本质的特征是整体性：</strong>① 自然上，降水—径流—泥沙—地貌在流域内统一循环，上游来水来沙决定下游河势；② 人文上，上游水库蓄水影响下游供水防洪，下游排污影响河口生态。因此治理必须「上下游统筹、左右岸协同、干支流兼顾」，用系统思维代替分段治理。' },
      { type: 'heading', text: '二、流域内的利益冲突' },
      { type: 'paragraph', text: '流域各部分发展目标常不一致：上游想多发电、中游要灌溉、下游重防洪与航运，加上不同行政区各管一段，容易出现争水、污染转嫁、湖泊萎缩等矛盾。比如上游过度用水会使下游断流，上游排污会让下游受害。这些冲突说明单靠局部难以解决流域问题。' },
      { type: 'list', items: ['上游：发电、供水、水土保持', '中游：灌溉、航运、防洪', '下游：防洪、供水、河口生态', '矛盾：争水、污染转嫁、河湖萎缩'] },
      { type: 'table', headers: ['河段', '主要诉求', '潜在冲突'], rows: [['上游', '发电、蓄水', '拦水影响下游'], ['中游', '灌溉、航运', '取水加剧缺水'], ['下游', '防洪、生态', '受上游污染转嫁'], ['全流域', '协调发展', '行政区各自为政']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">流域上中下游的诉求冲突</text><rect x="40" y="60" width="180" height="190" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="130" y="110" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">上游</text><text x="130" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">发电蓄水</text><rect x="250" y="60" width="180" height="190" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="110" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">中游</text><text x="340" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">灌溉航运</text><rect x="460" y="60" width="180" height="190" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="550" y="110" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">下游</text><text x="550" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">防洪生态</text><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">各段诉求不同，需全流域统筹兼顾。</text></svg>', caption: '图2　上中下游诉求不同，易产生争水与污染转嫁等冲突。' },
      { type: 'example', label: '例题·冲突分析', text: '题目：某河流域上游建库截流、污水直排，对下游可能造成什么影响？<br>解析：上游建库截流会减少下泄水量，下游可能出现径流减少甚至断流，影响灌溉、航运和河口淡水补给；上游污水直排则随水流带到下游，造成下游水质恶化、生态受损。这正是流域整体性下的负面关联——上游行为外溢为下游代价。所以必须以全流域统一治理来化解此类冲突。' },
      { type: 'heading', text: '三、协调发展的原则与措施' },
      { type: 'paragraph', text: '流域协调发展要坚持「统一规划、统筹兼顾、标本兼治、综合防治」。措施上包括：建立跨行政区管理机构统一调度水资源；上中游植树造林、修建水库以调洪补枯；下游加固堤防、治理污染；通过生态补偿让上游保护者受益，实现利益共享。' },
      { type: 'warn', label: '易错·不能分段治理', text: '① 流域问题具有整体性，只治一段往往「按下葫芦浮起瓢」——下游防洪若不留出上游泄洪通道就无效；② 生态补偿很关键，若不让上游从保护中获益，上游就没动力限污退耕，协调难持久。考题常把「上游工程」和「下游效益」割裂考查，要想到二者的关联。' },
      { type: 'tip', label: '提示·答题关键词', text: '流域协调题抓住几个关键词：统一规划、水资源统一调度、上中游涵养水源、下游防洪治污、生态补偿、利益共享。答题按「问题（冲突）—整体治理—利益协调」展开，基本不会偏题。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">流域协调发展的治理框架</text><rect x="40" y="60" width="180" height="190" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="130" y="105" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">统一规划</text><text x="130" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">跨区机构</text><rect x="250" y="60" width="180" height="190" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="105" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">上中游</text><text x="340" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">涵养调蓄</text><rect x="460" y="60" width="180" height="190" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="550" y="105" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">下游+补偿</text><text x="550" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">防洪治污</text><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">统一调度加生态补偿，实现全流域共赢。</text></svg>', caption: '图3　统一规划、上中游调蓄、下游治理与生态补偿共同促成流域协调。' },
      { type: 'heading', text: '四、案例：长江与黄河流域治理' },
      { type: 'paragraph', text: '长江实行「共抓大保护、不搞大开发」，建立全流域河湖长制与生态补偿；黄河强调「共同抓好大保护，协同推进大治理」，通过调水调沙、退耕还林还草缓解断流与泥沙。二者都体现上下游统筹、部门协同的流域综合管理思路。' },
      { type: 'list', items: ['长江：大保护优先，河湖长制全覆盖', '黄河：调水调沙，遏制断流与淤积', '均建立跨区协调机制与生态补偿', '目标都是防洪、供水、生态共赢'] },
      { type: 'example', label: '例题·案例启示', text: '题目：黄河一度频繁断流，后来通过全流域水量统一调度得以缓解，这说明了什么？<br>解析：这说明流域问题必须整体解决。断流根源在于上中游用水失控、缺乏统一调配，仅靠下游节水无效。实行水量统一调度、明确各省用水指标、配套节水与生态补水后，上下游用水得到平衡，断流才被遏制。它印证了「统一规划、统筹兼顾」的流域协调原则，也说明生态补偿与协同治理不可或缺。' }
    ],
    exercises: [
      { type: 'choice', question: '流域最本质的特征是？', options: ['边界绝对明确', '整体性，上下游水沙关联', '各段互不影响', '只涉及单一行政区'], answer: '整体性，上下游水沙关联', explanation: '流域是以河流集水区为单元的自然区域，降水、径流、泥沙在流域内统一循环，上游来水来沙直接决定下游河势，上下游、干支流天然关联，因此最本质特征是整体性。流域边界由分水岭决定、并非绝对人为明确，各段相互影响而非互不影响，且常跨多个行政区。故正确选项是整体性。' },
      { type: 'choice', question: '上游建库截流、污水直排，对下游的主要影响是？', options: ['下游水量更丰、水质更好', '下游可能断流且水质恶化', '对下游毫无影响', '下游航运自动改善'], answer: '下游可能断流且水质恶化', explanation: '流域具有整体性，上游截流会减少下泄水量，下游可能出现径流减少甚至断流，影响灌溉、航运与河口生态；上游直排的污水随水流下泄，会造成下游水质恶化、生态受损。这正是上游行为外溢为下游代价的表现，所以正确影响是下游可能断流且水质恶化。' },
      { type: 'choice', question: '实现流域协调发展最关键的制度安排是？', options: ['各行政区各自治理', '建立跨行政区统一管理机构与生态补偿', '只治理下游河段', '取消上游所有水库'], answer: '建立跨行政区统一管理机构与生态补偿', explanation: '流域问题跨行政区且上下游关联，必须由跨行政区机构统一规划、统一调度水资源，并通过生态补偿让上游保护者受益，才能化解争水与污染转嫁等冲突。各自为政会加剧矛盾，只治下游治标不治本，取消上游水库也不现实。因此最关键的是跨区统一管理与生态补偿。' },
      { type: 'fill', question: '流域治理要坚持统一规划、统筹兼顾、标本兼治和___的方针。', answer: '综合防治', explanation: '流域因整体性而必须系统治理，方针是「统一规划、统筹兼顾、标本兼治、综合防治」。具体要统一调度水资源、上中游涵养水源与调蓄、下游防洪治污，并用生态补偿协调利益。只有把上中下游作为整体来管理，才能既防洪供水又保护生态，实现全流域协调发展。' },
      { type: 'fill', question: '黄河通过全流域水量___统一调度，配合节水与生态补水，有效缓解了历史上的频繁___问题。', answer: '统一；断流', explanation: '黄河断流的根源在于上中游用水失控、缺乏统一调配。实行全流域水量统一调度、明确各省用水指标，并配套节水与生态补水后，上下游用水恢复平衡，断流才被遏制。这一案例印证了流域必须整体治理、协同推进大保护大治理的原则，也为其他流域协调提供了范本。' }
    ]
  });
})();
