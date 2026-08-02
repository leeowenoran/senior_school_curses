/* 生物学 · 高三复习 · 生物与环境 · 第3章 · 课时：生态系统的结构 */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u10',
    name: '第1节 生态系统的结构',
    chapter: '生物与环境 · 第3章 生态系统及其稳定性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是生态系统' },
      { type: 'paragraph', text: '生态系统是指在一定的空间范围内，生物群落与非生物环境相互作用而形成的统一整体。一片森林、一个池塘、一块农田，甚至一滴小水潭，都可以是一个生态系统。理解时要把生物和环境当作一个整体，而不是分开的两部分。' },
      { type: 'keypoint', text: '生态系统概念核心：生物群落 + 非生物环境，二者相互作用形成统一整体。判断是否为生态系统，要看是否同时具备生物部分和非生物部分，并构成一个功能整体。' },
      { type: 'paragraph', text: '生态系统有大有小。地球上最大的生态系统是生物圈，它包括所有海洋、陆地和大气中的生物及其环境。日常学习的森林、草原、农田等，都是生物圈中的具体小生态系统。' },
      { type: 'tip', text: '高三复习提醒：种群和群落只涉及生物部分；生态系统才把非生物环境也包括进来。考试常考“下列属于生态系统的是”，只要选项里只有生物就排除。' },
      { type: 'heading', text: '二、生态系统的组成成分' },
      { type: 'paragraph', text: '生态系统包含四大组成成分：非生物的物质和能量、生产者、消费者和分解者。它们各司其职，缺一不可，共同维持生态系统的物质循环和能量流动。' },
      { type: 'table', caption: '生态系统的四大组成成分及其地位与作用', headers: ['组成成分', '举例', '作用地位'], rows: [
        ['非生物的物质和能量', '阳光、水、空气、无机盐', '提供物质和能量，是生态系统存在的基础'],
        ['生产者', '绿色植物、蓝藻、硝化细菌等自养生物', '把无机物合成有机物，是生态系统的基石'],
        ['消费者', '绝大多数是动物，异养', '加快物质循环，帮助传粉和种子传播，最活跃'],
        ['分解者', '细菌、真菌等异养微生物', '把有机物分解为无机物归还环境，是关键成分']
      ] },
      { type: 'paragraph', text: '生产者主要是绿色植物，也包括进行化能合成作用的硝化细菌。它们能够利用光能或化学能，把二氧化碳和水等无机物制造成有机物，为自身和其他生物提供食物和氧气。' },
      { type: 'paragraph', text: '消费者主要是动物，它们不能自己制造有机物，必须直接或间接以植物为食。消费者虽然不直接制造有机物，但能加快物质循环，还能帮助植物传粉、传播种子，是生态系统中最活跃的成分。' },
      { type: 'paragraph', text: '分解者主要是细菌和真菌，也包括腐生动物如蚯蚓、蜣螂。它们把动植物的遗体、排泄物中的有机物分解成二氧化碳、水和无机盐，重新回到非生物环境中，供生产者再次利用。' },
      { type: 'warn', text: '易错辨析：生产者不等于植物（硝化细菌是生产者但不是植物）；分解者不等于微生物（蚯蚓是动物但属分解者）；消费者不一定是动物（有些寄生植物也属消费者）。以营养方式而非形态来判定。' },
      { type: 'tip', text: '高频考点：生产者是基石，决定生态系统的存在；分解者是连接生物群落与非生物环境的关键环节。缺少分解者，有机物无法归还无机环境，物质循环会中断。' },
      { type: 'heading', text: '三、营养结构——食物链和食物网' },
      { type: 'paragraph', text: '生态系统中，各种生物之间由于食物关系而形成联系，这种联系就是营养结构，包括食物链和食物网。食物链和食物网是物质循环和能量流动的渠道。' },
      { type: 'list', items: [
        '食物链：从生产者开始，依次为初级消费者、次级消费者、三级消费者，环节间用箭头连接，箭头指向捕食者。',
        '食物网：许多食物链彼此交错连接，形成复杂的网状结构，反映自然界真实的营养关系。',
        '营养级：生产者为第一营养级，初级消费者为第二营养级，依此类推，消费者所处营养级不固定。'
      ] },
      { type: 'paragraph', text: '写食物链时，起点一定是生产者，箭头方向表示能量和物质的流动方向，即被吃指向吃者。例如：草 → 虫 → 蛙 → 蛇 → 鹰。注意分解者不进入食物链。' },
      { type: 'list', items: [
        '食物网越复杂，生态系统抵抗外界干扰的能力越强，稳定性越高。',
        '食物网中某种生物减少，会沿多条食物链产生不同影响，需具体分析。',
        '食物链和食物网是生态系统能量流动和物质循环的渠道。'
      ] },
      { type: 'example', text: '例题：在“草 → 兔 → 狐”这条食物链中，草属于生产者、第一营养级；兔以草为食，是初级消费者、第二营养级；狐捕食兔，是次级消费者、第三营养级。若该食物链中草固定的太阳能为 1000，按传递效率 10%～20% 估算，狐最多可获得 1000 × 20% × 20% = 40 的能量。' },
      { type: 'svg', caption: '生态系统的四大组成成分及其关系：生产者、消费者、分解者都依赖非生物的物质和能量，三者通过物质循环紧密联系。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">生态系统的组成成分</text><rect x="240" y="70" width="200" height="48" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="99" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">非生物的物质和能量</text><rect x="50" y="170" width="160" height="48" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="130" y="199" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">生产者</text><rect x="260" y="170" width="160" height="48" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="199" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">消费者</text><rect x="470" y="170" width="160" height="48" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="550" y="199" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">分解者</text><line x1="340" y1="118" x2="210" y2="168" stroke="#3f7d1e" stroke-width="2"/><polygon points="210,168 226,164 222,180" fill="#3f7d1e"/><line x1="340" y1="118" x2="340" y2="168" stroke="#3f7d1e" stroke-width="2"/><polygon points="340,168 332,154 348,154" fill="#3f7d1e"/><line x1="340" y1="118" x2="470" y2="168" stroke="#3f7d1e" stroke-width="2"/><polygon points="470,168 454,164 458,180" fill="#3f7d1e"/><text x="130" y="245" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">基石</text><text x="550" y="245" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">关键成分</text><text x="340" y="320" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">四种成分紧密联系，缺一不可</text></svg>' },
      { type: 'svg', caption: '一条简单的食物链：生产者被初级消费者取食，初级消费者又被次级消费者取食，箭头表示能量和物质的流动方向。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">食物链示例</text><rect x="40" y="160" width="140" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="110" y="190" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">生产者</text><rect x="270" y="160" width="140" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="190" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">初级消费者</text><rect x="500" y="160" width="140" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="570" y="190" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">次级消费者</text><line x1="180" y1="185" x2="266" y2="185" stroke="#3f7d1e" stroke-width="2"/><polygon points="266,185 250,179 250,191" fill="#3f7d1e"/><line x1="410" y1="185" x2="496" y2="185" stroke="#3f7d1e" stroke-width="2"/><polygon points="496,185 480,179 480,191" fill="#3f7d1e"/><text x="223" y="150" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">被捕食</text><text x="453" y="150" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">被捕食</text><text x="340" y="300" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">箭头由被吃者指向捕食者</text></svg>' },
      { type: 'svg', caption: '食物网由多条食物链交错形成：一种生物可能处于多个营养级，食物网越复杂生态系统越稳定。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">食物网示例</text><rect x="300" y="70" width="80" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="95" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">草</text><rect x="130" y="170" width="80" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="170" y="195" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">虫</text><rect x="460" y="170" width="80" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="195" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">鼠</text><rect x="250" y="270" width="80" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="290" y="295" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">蛙</text><rect x="500" y="270" width="80" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="540" y="295" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">蛇</text><line x1="320" y1="75" x2="170" y2="168" stroke="#3f7d1e" stroke-width="2"/><polygon points="170,168 186,164 182,180" fill="#3f7d1e"/><line x1="360" y1="75" x2="500" y2="168" stroke="#3f7d1e" stroke-width="2"/><polygon points="500,168 484,164 488,180" fill="#3f7d1e"/><line x1="170" y1="210" x2="290" y2="268" stroke="#3f7d1e" stroke-width="2"/><polygon points="290,268 274,264 278,280" fill="#3f7d1e"/><line x1="500" y1="210" x2="540" y2="268" stroke="#3f7d1e" stroke-width="2"/><polygon points="540,268 524,264 528,280" fill="#3f7d1e"/><line x1="290" y1="310" x2="500" y2="270" stroke="#3f7d1e" stroke-width="2"/><polygon points="500,270 484,272 492,284" fill="#3f7d1e"/></svg>' }
    ],
    exercises: [
      { type: 'choice', question: '下列各项中，属于生态系统的是', options: ['一片森林里的所有树木', '一个池塘里的全部鱼', '一块农田里的全部害虫', '一片草原（含生物和环境）'], answer: '一片草原（含生物和环境）', explanation: '生态系统必须同时包含生物群落和非生物环境，并构成统一整体。仅含生物的选项只有生物部分，缺少非生物环境，不能算生态系统。' },
      { type: 'choice', question: '在生态系统中，被称为基石的组成成分是', options: ['非生物的物质和能量', '生产者', '消费者', '分解者'], answer: '生产者', explanation: '生产者能把无机物合成有机物，为整个生态系统提供物质和能量来源，是生态系统存在的基石，因此被称为基石成分。' },
      { type: 'choice', question: '关于食物链的叙述，正确的是', options: ['分解者可以出现在食物链中', '食物链的起点是生产者', '箭头由捕食者指向被吃者', '消费者都是动物'], answer: '食物链的起点是生产者', explanation: '食物链从生产者开始，沿捕食关系指向更高营养级；分解者不参与食物链，箭头方向由被吃者指向捕食者，消费者也存在寄生植物等非动物类型。' },
      { type: 'fill', question: '细菌、真菌等把有机物分解为无机物，在生态系统中属于________。', answer: '分解者', explanation: '分解者主要是细菌和真菌，能将动植物遗体和排泄物中的有机物分解为无机物，归还非生物环境，是连接生物群落与非生物环境的关键成分。' },
      { type: 'fill', question: '生态系统中物质循环和能量流动的渠道是________和食物网。', answer: '食物链', explanation: '食物链和食物网是生态系统中各种生物因食物关系形成的营养结构，是物质循环和能量流动的主要渠道，两者共同构成营养结构。' }
    ]
  });
})();
