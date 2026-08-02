/* 地理 · 必修 第一册 · 第5章 · 课时：第2节 土壤 */
(function () {
  var v = gzGetVolume('geography', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u13',
    name: '第2节 土壤',
    chapter: '必修 第一册 · 第5章 植被与土壤',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是土壤' },
      { type: 'paragraph', text: '土壤是地球陆地表面能够生长植物的疏松表层，它介于岩石圈、水圈、大气圈和生物圈之间，是地理环境中非常关键的一环。我们脚下的泥土并不简单：它由上层的腐殖质、中层的矿物质和下层的风化岩石碎屑组成，是岩石碎屑在气候、生物、地形、时间共同作用下慢慢发育而成的。' },
      { type: 'list', items: ['土壤是疏松的、能长植物的表层', '它联系着岩石、水、大气、生物四大圈层', '土壤肥力来自养分、水分、空气和温度的协调'] },
      { type: 'keypoint', label: '重点·土壤的组成', text: '<strong>土壤由四部分物质组成：</strong>① 矿物质，来自岩石风化，占固体部分大部分；② 有机质（腐殖质），来自枯枝落叶和动物残体，使土壤变黑变肥；③ 水分，存在于空隙中；④ 空气，也充填在空隙里。矿物质和有机质是固体骨架，水与气充填其间，四者比例合适才肥沃。' },
      { type: 'heading', text: '二、土壤剖面分层' },
      { type: 'paragraph', text: '从地面垂直向下挖开，会看到土壤像蛋糕一样分成若干层，这叫土壤剖面。最上面是枯枝落叶堆积的有机层；往下是颜色较深、富含腐殖质的腐殖质层；再下是淋溶层，矿物质被雨水带走、颜色较浅；接着是淀积层，被冲下来的物质在这里沉淀；最底是风化岩石的母质层。各层特征不同，是判断土壤的重要依据。' },
      { type: 'list', items: ['有机层：地表枯枝落叶，尚未分解', '腐殖质层：颜色深、肥沃', '淋溶层：物质被雨水淋洗，颜色浅', '淀积层：上层冲下的物质在此堆积', '母质层：风化的岩石碎屑，是土壤原料'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">土壤剖面分层示意</text><rect x="220" y="60" width="240" height="36" fill="#9bcf8a" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="84" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">有机层（枯枝落叶）</text><rect x="220" y="100" width="240" height="40" fill="#5a3a24" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="125" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">腐殖质层（深色肥沃）</text><rect x="220" y="144" width="240" height="40" fill="#c9a06a" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="169" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">淋溶层（色浅）</text><rect x="220" y="188" width="240" height="40" fill="#b07d4a" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="213" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">淀积层（物质堆积）</text><rect x="220" y="232" width="240" height="40" fill="#8a8a8a" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="257" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">母质层（风化岩石）</text><text x="340" y="315" font-size="12" fill="#1f3a4d" text-anchor="middle">从地表向下，层次依次为有机层、腐殖质层、淋溶层、淀积层、母质层。</text></svg>', caption: '图1　土壤剖面自地表向下分为有机层、腐殖质层、淋溶层、淀积层和母质层。' },
      { type: 'heading', text: '三、土壤是怎样形成的' },
      { type: 'paragraph', text: '土壤不是天生就有的，而是岩石在多种因素长期作用下慢慢发育成的。最主要的因素有五个：成土母质（岩石风化提供矿物质）、气候（温度和降水影响风化和有机质分解）、生物（植物和微生物制造有机质，是最活跃的因素）、地形（影响水热再分配）、时间（发育需要漫长岁月）。其中生物因素最为关键。' },
      { type: 'list', items: ['成土母质：岩石风化，提供矿物质原料', '气候：热量降水影响风化和分解快慢', '生物：植物枯落、微生物分解，造就有机质（最活跃）', '地形：坡缓处易堆积、坡陡处易被侵蚀', '时间：土壤发育以千年万年计'] },
      { type: 'table', headers: ['形成因素', '在成土中的作用'], rows: [['成土母质', '提供矿物质，决定土壤底子'], ['气候', '控制风化和有机质分解速度'], ['生物', '制造有机质，最活跃的因素'], ['地形', '影响水分热量分布'], ['时间', '长期积累才有成熟土壤']] },
      { type: 'warn', label: '易错·成土因素', text: '① 母质不是土壤本身，只是原料，还需生物参与才变成土壤；② 生物（尤其植被和微生物）是最活跃因素，不是气候；③ 时间越长土壤不一定越肥，若植被破坏、侵蚀加剧，土壤反而会退化。答题分清「原料、动力、最活跃因素」就不容易错。' },
      { type: 'example', label: '例题·成土因素', text: '题目：在土壤形成过程中，最活跃的因素是？<br>A. 成土母质　B. 气候　C. 生物　D. 地形<br>解析：成土母质只是提供矿物质的原料，气候和地形影响风化的快慢与分布，而生物通过枯枝落叶和微生物分解不断制造有机质，使母质真正变成土壤，因此生物是最活跃的因素，选 C。' },
      { type: 'heading', text: '四、土壤的主要性质' },
      { type: 'paragraph', text: '衡量土壤好坏，常看几个性质。肥力是土壤能同时供应水、肥、气、热的能力；质地指砂粒、粉粒、黏粒的比例，砂土疏松透气但保水差，黏土保水好但透气差，壤土居中、最适农耕；酸碱度用 pH 表示，南方红壤偏酸，北方土壤偏中性或微碱。了解这些性质，才能合理利用土壤。' },
      { type: 'list', items: ['肥力：供水、肥、气、热的能力，越高越好', '质地：砂土、壤土、黏土，壤土最宜耕作', '酸碱度：用 pH 表示，红壤偏酸', '颜色：黑土肥沃，红壤含铁铝氧化物'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">土壤形成的五大因素</text><rect x="40" y="80" width="170" height="200" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="125" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">母质</text><text x="125" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">提供矿物质</text><rect x="225" y="80" width="170" height="200" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="310" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">气候</text><text x="310" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">控制风化快慢</text><rect x="410" y="80" width="170" height="200" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="495" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">生物</text><text x="495" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">最活跃因素</text><rect x="595" y="80" width="50" height="200" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="620" y="115" font-size="12" fill="#1f3a4d" text-anchor="middle">地形</text><text x="620" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">时间</text><text x="340" y="315" font-size="12" fill="#1f3a4d" text-anchor="middle">母质、气候、生物、地形、时间共同造就土壤。</text></svg>', caption: '图2　土壤由母质、气候、生物、地形、时间五大因素共同发育形成。' },
      { type: 'tip', label: '提示·土壤肥力记忆', text: '记土壤肥力，抓住<strong>「水、肥、气、热四字齐备」</strong>：好土壤既能保住水分，又含养分，还通气、温度适中。黏土壤易憋气，砂土易漏水和肥，所以农民常说壤土最好。看到「最肥沃」「最适农耕」先想壤土。' },
      { type: 'heading', text: '五、土壤与人类活动' },
      { type: 'paragraph', text: '土壤是人类生存的根基，我们吃的粮食、蔬菜都长在土壤上。不合理利用会伤害土壤：滥伐森林造成水土流失，过度放牧让草原退化成荒漠，大水漫灌使地下水位上升、盐分聚积形成盐碱化。保护土壤就是要退耕还林、合理施肥、防止侵蚀，让这层薄薄的生命之肤永续利用。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">合理利用与保护土壤</text><rect x="40" y="80" width="280" height="200" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">不合理利用</text><text x="180" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">滥伐→水土流失</text><text x="180" y="170" font-size="12" fill="#1f3a4d" text-anchor="middle">过牧→草原退化</text><text x="180" y="195" font-size="12" fill="#1f3a4d" text-anchor="middle">漫灌→土壤盐碱化</text><rect x="360" y="80" width="280" height="200" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="500" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">保护措施</text><text x="500" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">退耕还林</text><text x="500" y="170" font-size="12" fill="#1f3a4d" text-anchor="middle">合理施肥</text><text x="500" y="195" font-size="12" fill="#1f3a4d" text-anchor="middle">防止侵蚀</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">用养结合，才能守住这层生命之肤。</text></svg>', caption: '图3　不合理利用会破坏土壤，退耕还林、合理施肥等可保护土壤。' }
    ],
    exercises: [
      { type: 'choice', question: '土壤剖面中，位于最上部有机层之下的深色、肥沃的一层是？', options: ['淋溶层', '腐殖质层', '淀积层', '母质层'], answer: '腐殖质层', explanation: '土壤剖面自地表向下通常分为有机层、腐殖质层、淋溶层、淀积层和母质层。有机层是地表的枯枝落叶，其下方颜色深、富含腐殖质且最肥沃的是腐殖质层；淋溶层颜色较浅，淀积层堆积上层冲下的物质，母质层是风化的岩石碎屑，所以选腐殖质层。' },
      { type: 'choice', question: '在土壤形成过程中，最活跃的因素是？', options: ['成土母质', '气候', '生物', '地形'], answer: '生物', explanation: '成土母质只是提供矿物质的原料，气候和地形影响风化的快慢与分布，而生物通过植物枯落和微生物分解不断制造有机质，使母质真正发育成土壤，是最活跃的因素。因此土壤形成中最活跃的因素是生物，选 C。' },
      { type: 'choice', question: '下列质地中，最适宜农耕、通气保水都比较适中的是？', options: ['砂土', '黏土', '壤土', '砾石'], answer: '壤土', explanation: '土壤质地按砂粒、粉粒、黏粒比例不同分为砂土、壤土和黏土。砂土疏松透气但保水保肥差，黏土保水好但透气差、易憋气，壤土三者比例适中，既通气又保水保肥，最适宜耕作，所以选壤土。' },
      { type: 'fill', question: '土壤由矿物质、有机质、水分和___四部分物质组成。', answer: '空气', explanation: '土壤并非只有固体，它由矿物质、有机质、水分和空气四部分共同组成。矿物质和有机质构成固体骨架，水分和空气充填在土壤空隙之中。这四者比例协调，土壤才肥沃、才适合植物生长，因此第四部分是空气。' },
      { type: 'fill', question: '我国南方广泛分布、因含铁铝氧化物较多而呈酸性的土壤是___。', answer: '红壤', explanation: '我国秦岭淮河以南的南方地区，气候湿热，土壤中的矿物在强烈风化和淋溶作用下，硅被淋失，铁、铝氧化物相对富集，使土壤呈现红色，这就是红壤。红壤含铁铝氧化物较多，酸性较强，肥力一般不高，需要施用石灰和有机肥改良，所以填红壤。' }
    ]
  });
})();
