/* 生物学 · 高三复习 · 生物与环境 · 第4章 · 课时：第3节 生态工程（二）原理应用与实例 */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u21',
    name: '第3节 生态工程（二）原理应用与实例',
    chapter: '生物与环境 · 第4章 人与环境',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '第3节 生态工程（二）原理应用与实例' },
      { type: 'paragraph', text: '上一节学了四大原理，本节把它们落到真实案例：沼气池、湿地生态修复、农村综合发展型生态工程。这些是高考常给材料让你判断用了哪条原理的典型情境。' },
      { type: 'keypoint', text: '原理应用思路：先识别系统里“谁在自净、物质怎么循环、是否匹配环境、效益是否统一”，再对应到自生、循环、协调、整体四大原理。' },
      { type: 'svg', caption: '沼气池把人畜粪便和秸秆转化为沼气和沼肥，是循环原理的典型代表。', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="20" font-family="sans-serif" text-anchor="middle" fill="#3f7d1e" font-weight="bold">沼气池 物质循环</text><rect x="70" y="80" width="160" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="150" y="113" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#2e3a22">粪便秸秆</text><rect x="290" y="80" width="160" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="370" y="113" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#2e3a22">沼气池发酵</text><rect x="510" y="80" width="150" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="585" y="113" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#2e3a22">沼气燃料</text><polygon points="230,108 288,108 259,96" fill="#3f7d1e"/><polygon points="450,108 508,108 479,96" fill="#3f7d1e"/><rect x="290" y="200" width="160" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="370" y="233" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#2e3a22">沼渣沼液肥田</text><polygon points="370,140 370,198 356,198" fill="#3f7d1e"/><polygon points="200,236 288,236 244,224" fill="#3f7d1e"/><text x="340" y="300" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#5aa832">废物变资源 多级利用</text></svg>' },
      { type: 'list', items: [
        '循环原理：粪便和秸秆作为原料进入沼气池，产出的沼渣沼液回田，实现物质闭环。',
        '自生原理：池中厌氧微生物群落自行分解有机物，无需人工持续供能。',
        '整体原理：既供能又肥田，兼顾农户经济收益与生态保护，农民乐意用。'
      ] },
      { type: 'warn', text: '易错：沼气池最核心考的是循环原理（废物资源化），不要一见“微生物”就答自生；若材料强调厌氧菌群自净才归自生，二者要分清。' },
      { type: 'keypoint', text: '湿地生态修复：通过恢复水生植物、营造浅滩和缓冲区，让湿地依靠自生能力净化水质、为鸟类提供栖息地，是协调与自生结合的典型。' },
      { type: 'svg', caption: '湿地修复依靠植物微生物自净并匹配水文条件，体现自生与协调原理。', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="20" font-family="sans-serif" text-anchor="middle" fill="#3f7d1e" font-weight="bold">湿地修复 自净</text><rect x="50" y="90" width="200" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="150" y="150" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#2e3a22">污水流入</text><rect x="430" y="90" width="200" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="530" y="150" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#2e3a22">清水流出</text><polygon points="250,150 428,150 389,138" fill="#3f7d1e"/><text x="340" y="210" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#2e3a22">植物微生物自净</text><text x="340" y="260" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#5aa832">自生加协调 恢复生态</text></svg>' },
      { type: 'example', text: '例题（高考风格）：某城市修复退化湿地，种植芦苇并控制进水污染物浓度使其逐步恢复自净能力，主要体现了？A. 自生与协调；B. 仅循环；C. 仅整体；D. 仅自生。解析：芦苇等生物自净体现自生，控制污染物浓度匹配环境承载力体现协调，应选A。' },
      { type: 'list', items: [
        '自生：恢复水生植物和微生物群落，使湿地获得自我净化与更新能力。',
        '协调：根据当地水文和污染负荷控制进水，使生物量与环境承载力平衡。',
        '整体：湿地恢复后兼顾水质净化、生物多样性与休闲景观等综合效益。'
      ] },
      { type: 'keypoint', text: '农村综合发展型生态工程：以沼气池为纽带，把种植业、养殖业、加工业连接成网络，实现物质多级利用和能量高效转化，是我国最典型的生态工程模式。' },
      { type: 'svg', caption: '农村综合生态工程以沼气为纽带串联种养殖，实现物质循环与效益统一。', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="20" font-family="sans-serif" text-anchor="middle" fill="#3f7d1e" font-weight="bold">农村综合发展型生态工程</text><rect x="60" y="90" width="150" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="135" y="123" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#2e3a22">种植业</text><rect x="265" y="90" width="150" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="123" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#2e3a22">养殖业</text><rect x="470" y="90" width="150" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="545" y="123" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#2e3a22">加工业</text><rect x="265" y="200" width="150" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="233" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#2e3a22">沼气池纽带</text><polygon points="210,118 263,118 236,106" fill="#3f7d1e"/><polygon points="415,118 468,118 441,106" fill="#3f7d1e"/><polygon points="340,146 340,198 326,198" fill="#3f7d1e"/><polygon points="340,198 135,148 135,168" fill="#3f7d1e"/><polygon points="340,198 545,148 545,168" fill="#3f7d1e"/></svg>' },
      { type: 'table', caption: '三大生态工程实例及其对应原理', headers: ['实例', '核心做法', '主要原理'], rows: [
        ['沼气池', '粪便秸秆发酵产气、沼渣肥田', '循环为主，兼自生整体'],
        ['湿地修复', '恢复植被让湿地自净', '自生加协调'],
        ['农村综合型', '沼气纽带串联种养殖加工', '四原理综合应用']
      ] },
      { type: 'tip', text: '高频考点：农村综合发展型生态工程常以材料题出现，答题模板——“以沼气为纽带，实现物质循环再生和能量多级利用，体现循环与整体原理”。' },
      { type: 'warn', text: '易错：农村综合发展型生态工程的核心是“物质循环再生和能量多级利用”，不是单纯提高能量传递效率；能量沿食物链传递效率仍约为10%至20%，工程只是减少浪费而非突破规律。' },
      { type: 'paragraph', text: '把三个案例串起来看：沼气池是循环的小闭环，湿地修复是自然的自生样板，农村综合工程则是四原理的综合舞台。高考材料往往融合考查，需要你逐项对应原理。' },
      { type: 'example', text: '例题（高考风格）：某村用沼气池连接猪舍与菜地，猪粪产沼肥田、菜叶喂猪，该村模式主要体现的生态工程原理是？A. 仅自生；B. 循环与整体；C. 仅协调；D. 仅整体。解析：废物多级利用体现循环，兼顾农户收益与生态体现整体，应选B。' },
      { type: 'tip', text: '复习提示：遇到实例先找“物质是否闭环”判定循环，再找“生物是否自净”判定自生，看“是否匹配环境”判定协调，看“效益是否统一”判定整体，逐项排查不漏项。' },
      { type: 'keypoint', text: '本章小结：生态工程通过自生、循环、协调、整体四大原理，把保护与发展统一起来；沼气池、湿地修复、农村综合工程是原理落地的重要范例。' },
      { type: 'paragraph', text: '至此第4章人与环境全部讲完：从生态足迹认识人类压力，到生物多样性保护守住价值源头，再到生态工程提供可持续方案。高三复习时建议把三节串成“问题—保护—建设”的逻辑链，便于综合大题作答。' }
    ],
    exercises: [
      { type: 'choice', question: '农村综合发展型生态工程的核心特点是？', options: ['A. 单纯提高能量传递效率', 'B. 物质循环再生和能量多级利用', 'C. 只发展种植业', 'D. 完全依靠外力供能'], answer: 'B. 物质循环再生和能量多级利用', explanation: '农村综合发展型生态工程以沼气池为纽带，把种植、养殖、加工连接成网络，核心是物质循环再生和能量多级利用，从而减少废弃物并兼顾经济效益。它并不能提高能量沿食物链传递的效率（仍为约10%至20%），只是减少浪费。该模式是多产业综合而非单一种植，也非完全依赖外部能源。' },
      { type: 'choice', question: '退化湿地通过种植芦苇恢复自净能力，主要体现？', options: ['A. 仅循环原理', 'B. 自生与协调原理', 'C. 仅整体原理', 'D. 仅协调原理'], answer: 'B. 自生与协调原理', explanation: '种植芦苇等水生植物后，湿地依靠植物和微生物群落自行净化污水、更新恢复，体现自生原理；同时要根据当地水文和污染负荷控制进水，使生物量与环境承载力平衡，体现协调原理。材料未强调物质闭环利用，故不构成循环原理为主，也不只是单一原理。' },
      { type: 'choice', question: '沼气池把人畜粪便和秸秆转化为沼气和肥料，主要体现？', options: ['A. 循环原理', 'B. 仅自生原理', 'C. 仅协调原理', 'D. 仅整体原理'], answer: 'A. 循环原理', explanation: '沼气池将前一环节的粪便、秸秆作为原料，经发酵产出沼气和沼渣沼液肥料回田，实现废物资源化和物质多级利用，是循环原理的典型代表。虽然池中微生物有自生作用、模式也有整体效益，但题干强调“转化利用”这一过程，最核心对应循环原理。' },
      { type: 'fill', question: '以沼气池为纽带，连接种植业、养殖业、加工业的生态工程模式称为______。', answer: '农村综合发展型生态工程', explanation: '农村综合发展型生态工程是我国最典型的生态工程模式，它以沼气池为纽带，把种植业、养殖业和加工业连接成网络，实现物质循环再生和能量多级利用，兼顾生态保护与农民增收，是四大原理的综合应用。' },
      { type: 'fill', question: '通过恢复水生植物和微生物群落，让湿地依靠自身能力净化水质，这体现了生态工程的______原理。', answer: '自生', explanation: '自生原理依靠生物组分自组织、自我优化、自我调节、自我更新来维持系统的结构和功能。湿地修复中种植水生植物、恢复微生物群落，使系统获得自行净化污水和恢复生态的能力，正是自生原理的体现，通常还需配合协调原理控制环境负荷。' }
    ]
  });
})();
