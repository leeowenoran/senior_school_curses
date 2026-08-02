/* 生物学 · 高三复习 · 生物与环境 · 第2章 · 课时：群落的结构（一）物种组成与种间关系 */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u6',
    name: '第1节 群落的结构（一）物种组成与种间关系',
    chapter: '生物与环境 · 第2章 群落及其演替',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、群落的概念' },
      { type: 'paragraph', text: '群落是指在一定时空内，生活在同一地域的各种生物种群的集合。可以把它想象成一个小区里的所有居民：不光有人类，还有花草、昆虫、鸟类、微生物，大家共同生活在同一片区域里，就构成了这个小区的生物群落。' },
      { type: 'keypoint', text: '核心概念：群落强调的是一定区域内所有生物（植物、动物、微生物）的集合，而不是单一种群，也不是无机环境。判断时抓住两点：同一地域、所有生物。' },
      { type: 'heading', text: '二、群落的物种组成' },
      { type: 'paragraph', text: '物种组成是区别不同群落的重要特征。两个群落是不是同一个类型，首先看里面住着哪些物种。' },
      { type: 'list', items: ['物种丰富度：指群落中物种数目的多少，只数物种种类数，不看重每个物种有多少个体。', '优势种：在群落中数量较多、对生活环境影响较大的物种，往往决定群落的外貌和结构。'] },
      { type: 'paragraph', text: '丰富度只统计物种的个数。例如热带雨林里种类成千上万，丰富度很高；而荒漠里种类稀少，丰富度很低。注意丰富度与个体总数无关，一百只同种蚂蚁仍只算一个物种。' },
      { type: 'heading', text: '三、四种种间关系' },
      { type: 'table', caption: '四种种间关系对比表', headers: ['关系类型', '特点', '实例'], rows: [['捕食', '一种生物以另一种生物为食', '狼与兔'], ['竞争', '争夺资源与空间，结果常是一方占优或双方受抑', '水稻与稗草'], ['寄生', '寄居体内或体表，一方受益一方受害', '蛔虫与人'], ['互利共生', '相互依存、彼此有利，缺一不可', '豆科与根瘤菌']] },
      { type: 'paragraph', text: '捕食：捕食者吃被捕食者，两者数量常呈周期性波动，且捕食者数量峰值往往滞后于被捕食者。例如狼与兔，兔多则狼增，狼多则兔减。' },
      { type: 'paragraph', text: '竞争：两种或多种生物争夺同样的资源和空间。水稻和稗草都要阳光、养分和生存空间，稗草多了水稻就长不好。竞争结局常是一方占优势，另一方被淘汰或受抑制。' },
      { type: 'paragraph', text: '寄生：寄生生物（寄居者）生活在宿主的体内或体表，从宿主体内获取营养，宿主受害。蛔虫寄生在人的肠道里吸取养料，就是典型寄生。' },
      { type: 'paragraph', text: '互利共生：两种生物长期共同生活，彼此依赖、相互有利，分开后往往都不能很好生存。豆科植物给根瘤菌提供有机物和居所，根瘤菌帮植物固定空气中的氮，双方受益。' },
      { type: 'list', items: ['判断捕食：看是否存在明确的吃与被吃关系。', '判断竞争：看是否争夺同一有限资源或空间。', '判断寄生：看是否一方生活在另一方体内或体表并使其受害。', '判断互利共生：看是否彼此有利、缺少一方另一方难以存活。'] },
      { type: 'warn', text: '易错辨析：捕食不同于竞争。捕食一定有吃与被吃，两者是不同物种且一方消亡另一方仍存；竞争是双方争抢资源，没有吃与被吃。另外寄生与捕食也不同，寄生通常不立即杀死宿主。' },
      { type: 'tip', text: '高频考点：四种种间关系的曲线辨析是高考常考内容。捕食曲线中两曲线呈锯齿状上下波动且捕食者滞后；竞争曲线中一方上升另一方下降直至被淘汰；互利共生曲线中两曲线同步升降、同生共死。' },
      { type: 'example', text: '例题（高考风格）：下图表示甲、乙两种生物的种群数量变化。甲的数量先增先减，乙的数量后增后减且始终低于甲。据此判断甲、乙的关系最可能是：A. 竞争 B. 捕食 C. 寄生 D. 互利共生。答案：B。解析思路见练习。' },
      { type: 'svg', caption: '四种种间关系类型示意图', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-weight="bold">四种种间关系示意图</text><rect x="40" y="70" width="270" height="64" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="175" y="108" text-anchor="middle" fill="#2e3a22" font-size="18">捕食：狼吃兔</text><rect x="370" y="70" width="270" height="64" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="505" y="108" text-anchor="middle" fill="#2e3a22" font-size="18">竞争：水稻与稗草</text><rect x="40" y="170" width="270" height="64" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="175" y="208" text-anchor="middle" fill="#2e3a22" font-size="18">寄生：蛔虫与人</text><rect x="370" y="170" width="270" height="64" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="505" y="208" text-anchor="middle" fill="#2e3a22" font-size="18">互利共生：豆科与根瘤菌</text><polygon points="340,300 322,278 358,278" fill="#3f7d1e"/><text x="340" y="340" text-anchor="middle" fill="#5aa832" font-size="16">前三种一方或双方受害，互利共生双方受益</text></svg>' },
      { type: 'svg', caption: '捕食者与被捕食者数量波动曲线', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-weight="bold">捕食者与被捕食者数量曲线</text><rect x="80" y="60" width="520" height="240" fill="#ffffff" stroke="#3f7d1e" stroke-width="2"/><polyline points="100,260 160,200 220,230 280,150 340,210 400,140 460,200 520,150 560,200" fill="none" stroke="#3f7d1e" stroke-width="3"/><polyline points="100,230 160,170 220,200 280,120 340,180 400,110 460,170 520,120 560,170" fill="none" stroke="#5aa832" stroke-width="3"/><text x="100" y="320" fill="#2e3a22" font-size="14">时间轴</text><polygon points="160,170 148,176 158,184" fill="#3f7d1e"/><text x="600" y="80" fill="#3f7d1e" font-size="14">捕食者</text><text x="600" y="100" fill="#5aa832" font-size="14">被捕食者</text><text x="340" y="345" text-anchor="middle" fill="#5aa832" font-size="15">两者数量呈周期性波动，捕食者峰值滞后于被捕食者</text></svg>' },
      { type: 'svg', caption: '竞争与互利共生曲线对比', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-weight="bold">竞争与互利共生曲线对比</text><rect x="60" y="60" width="260" height="240" fill="#ffffff" stroke="#3f7d1e" stroke-width="2"/><rect x="360" y="60" width="260" height="240" fill="#ffffff" stroke="#3f7d1e" stroke-width="2"/><text x="190" y="84" text-anchor="middle" fill="#3f7d1e" font-size="15">竞争（一方被淘汰）</text><text x="490" y="84" text-anchor="middle" fill="#3f7d1e" font-size="15">互利共生（同步增长）</text><polyline points="80,260 140,200 200,150 260,120 300,110" fill="none" stroke="#3f7d1e" stroke-width="3"/><polyline points="80,260 140,240 200,210 260,200 300,196" fill="none" stroke="#5aa832" stroke-width="3"/><polyline points="380,260 440,210 500,160 560,120 600,100" fill="none" stroke="#3f7d1e" stroke-width="3"/><polyline points="380,250 440,205 500,158 560,118 600,98" fill="none" stroke="#5aa832" stroke-width="3"/><polygon points="300,110 286,112 294,124" fill="#3f7d1e"/><text x="340" y="335" text-anchor="middle" fill="#5aa832" font-size="15">竞争常导致一方数量下降，互利共生两者同时上升</text></svg>' }
    ],
    exercises: [
      { type: 'choice', question: '下列实例中，属于捕食关系的是', options: ['A. 水稻与稗草争夺阳光', 'B. 狼捕食兔子', 'C. 蛔虫生活在人体肠道', 'D. 豆科植物与根瘤菌'], answer: 'B. 狼捕食兔子', explanation: '捕食是一种生物以另一种生物为食的关系。狼以兔为食，符合捕食定义。水稻与稗草争夺阳光和养分属于竞争，蛔虫寄居人体肠道属于寄生，豆科植物与根瘤菌彼此有利属于互利共生。故正确选项为狼捕食兔子。' },
      { type: 'choice', question: '群落中物种丰富度是指', options: ['A. 群落中个体总数的多少', 'B. 群落中物种数目的多少', 'C. 优势种个体数量的多少', 'D. 群落中生物重量的总和'], answer: 'B. 群落中物种数目的多少', explanation: '物种丰富度指群落中物种数目的多少，只统计物种种类数，与个体数量多少无关。个体总数、优势种数量、生物重量均不能代表丰富度。故正确选项为群落中物种数目的多少。' },
      { type: 'choice', question: '豆科植物与根瘤菌之间的关系属于', options: ['A. 捕食', 'B. 竞争', 'C. 寄生', 'D. 互利共生'], answer: 'D. 互利共生', explanation: '豆科植物为根瘤菌提供有机物和栖息场所，根瘤菌能固定空气中的氮供植物利用，两者相互依存、彼此有利，属于互利共生。其余选项均不符合这种双方受益的关系。故正确选项为互利共生。' },
      { type: 'fill', question: '一定区域内所有生物种群的集合称为______。', answer: '群落', explanation: '群落是指在一定时空内生活在同一地域的各种生物种群的集合，强调同一区域、所有生物。这是区别于种群（单一种类）和生态系统（含无机环境）的核心概念。' },
      { type: 'fill', question: '群落中物种数目的多少称为______。', answer: '物种丰富度', explanation: '物种丰富度是衡量群落物种组成的重要指标，只统计物种的种类数目，不关注每个物种的个体数量，常用于比较不同群落的物种多寡。' }
    ]
  });
})();
