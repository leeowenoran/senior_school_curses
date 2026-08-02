/* 生物学 · 高三复习 · 实验与探究 · 第6章 · 课时：土壤中小动物类群丰富度的研究 */
(function () {
  var v = gzGetVolume('biology', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u17',
    name: '第3节 土壤中小动物类群丰富度的研究',
    chapter: '实验与探究 · 第6章 模拟与调查类实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验目的与原理' },
      { type: 'paragraph', text: '土壤中小动物（如蜘蛛、蜈蚣、蚯蚓、线虫等）活动能力强、身体微小，不适合用样方法或标记重捕法调查，而是用取样器取样后诱捕、再分类统计其类群丰富度。丰富度指群落中物种数目的多少，而不是某个物种的个体数。' },
      { type: 'list', items: ['调查对象：土壤中的小动物类群，关注物种数目（丰富度）而非个体总数。', '基本原理：利用小动物避光、趋湿的习性，用诱虫器或吸虫器将其捕捉。', '核心指标：丰富度 = 群落中物种数目的多少。'] },
      { type: 'keypoint', text: '取样器取样是本研究的标准方法：用一定规格的取样器（如直径为5厘米的金属罐）从土壤中取一定体积的土样。' },
      { type: 'heading', text: '二、诱捕装置：诱虫器与吸虫器' },
      { type: 'paragraph', text: '诱虫器由上方无底罐（放湿土、提供栖息环境）和下方试管（盛有体积分数70%的酒精，用于杀死并固定小动物）组成，侧壁开孔并罩上纱布透气，同时用光源照射制造明亮环境，迫使避光的小动物向下钻入试管。吸虫器则借助吸气装置把小动物从土壤中吸出，常用于体型更小的类群。' },
      { type: 'svg', caption: '诱虫器利用土壤小动物避光、趋湿的习性，将其诱入下方酒精试管中收集固定。', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="36" text-anchor="middle" font-size="22" font-weight="bold" fill="#3f7d1e">诱虫器（避光趋湿诱捕）</text><rect x="240" y="70" width="200" height="90" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="105" text-anchor="middle" font-size="17" fill="#2e3a22">上方：花盆/无底罐</text><text x="340" y="130" text-anchor="middle" font-size="15" fill="#2e3a22">放湿土，小动物栖息</text><rect x="260" y="200" width="160" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="235" text-anchor="middle" font-size="16" fill="#2e3a22">下方：盛有酒精</text><text x="340" y="258" text-anchor="middle" font-size="15" fill="#2e3a22">的试管（收集）</text><rect x="80" y="200" width="120" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="140" y="240" text-anchor="middle" font-size="15" fill="#2e3a22">灯（光源）</text><polygon points="200,235 255,225 255,245" fill="#3f7d1e"/><rect x="500" y="200" width="120" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="560" y="235" text-anchor="middle" font-size="15" fill="#2e3a22">纱布（透气）</text><text x="340" y="320" text-anchor="middle" font-size="15" fill="#5aa832">小动物避光向下钻入试管，被酒精固定</text></svg>' },
      { type: 'list', items: ['避光：用灯光照诱虫器外壁，小动物怕光而向下移动。', '趋湿：试管上方保持湿润环境，小动物趋向湿润处。', '固定：试管中的酒精既杀死又保存标本，便于后续分类。'] },
      { type: 'table', caption: '诱虫器与吸虫器对比', headers: ['装置', '原理', '适用对象', '收集方式'], rows: [['诱虫器', '利用避光趋湿习性诱其下钻', '中小型、怕光小动物', '酒精试管固定'], ['吸虫器', '吸气装置将动物吸出', '体型更小、更难诱捕者', '吸管/容器收集']] },
      { type: 'heading', text: '三、统计方法：记名计算法与目测估计法' },
      { type: 'paragraph', text: '采集到的小动物需借助放大镜或实体镜分类并统计。记名计算法是对逐个种群逐一计数并命名，适用于个体较大、数量有限的类群，结果精确但费时；目测估计法按多度等级（如极多、常见、少见）估计，适用于个体小、数量多的类群，快捷但有误差。' },
      { type: 'svg', caption: '记名计算法精确但费时，目测估计法快捷但有等级误差，二者都用于统计土壤小动物类群丰富度。', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="36" text-anchor="middle" font-size="22" font-weight="bold" fill="#3f7d1e">两种统计丰富度的方法</text><rect x="60" y="80" width="250" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="185" y="115" text-anchor="middle" font-size="18" font-weight="bold" fill="#2e3a22">记名计算法</text><text x="185" y="150" text-anchor="middle" font-size="14" fill="#2e3a22">逐一计数、命名</text><text x="185" y="178" text-anchor="middle" font-size="14" fill="#2e3a22">适用：个体较大</text><text x="185" y="206" text-anchor="middle" font-size="14" fill="#2e3a22">种群数量有限</text><text x="185" y="234" text-anchor="middle" font-size="14" fill="#2e3a22">结果：较精确</text><rect x="370" y="80" width="250" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="495" y="115" text-anchor="middle" font-size="18" font-weight="bold" fill="#2e3a22">目测估计法</text><text x="495" y="150" text-anchor="middle" font-size="14" fill="#2e3a22">按多度等级估计</text><text x="495" y="178" text-anchor="middle" font-size="14" fill="#2e3a22">适用：个体较小</text><text x="495" y="206" text-anchor="middle" font-size="14" fill="#2e3a22">数量繁多</text><text x="495" y="234" text-anchor="middle" font-size="14" fill="#2e3a22">结果：粗略等级</text><text x="340" y="320" text-anchor="middle" font-size="15" fill="#5aa832">丰富度 = 群落中物种数目的多少</text></svg>' },
      { type: 'keypoint', text: '丰富度只反映物种数目的多少，与每个物种的个体数量无关；个体很多但只有一种，丰富度仍然很低。' },
      { type: 'warn', text: '易错：调查土壤小动物丰富度不能用样方法或标记重捕法，因为小动物活动能力强且身体微小；也不能把丰富度误解为总个体数。' },
      { type: 'example', text: '例题：某同学用诱虫器采集土壤小动物，试管中装体积分数70%的酒精。问酒精的作用？答：杀死并固定小动物，防止其腐烂或逃逸，便于分类与计数。' },
      { type: 'tip', text: '高频考点：诱虫器与吸虫器的区别（诱捕原理 vs 吸气捕获）；酒精浓度（70%固定标本）易与脂肪鉴定中的50%洗浮色、解离中的95%或15%混淆，复习时要对比记忆。' },
      { type: 'heading', text: '四、操作注意事项' },
      { type: 'list', items: ['取样点要随机选取，避免主观挑选肥沃或特殊地块。', '取样深度与体积应一致，保证不同样本可比较。', '取土后及时用诱虫器诱捕，防止小动物逃散。', '标本及时用酒精固定，并标注地点、深度、日期。'] },
      { type: 'svg', caption: '从取样到诱捕再到分类统计，每一步都要控制随机性与一致性，才能得到可靠的丰富度数据。', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="36" text-anchor="middle" font-size="22" font-weight="bold" fill="#3f7d1e">土壤小动物丰富度研究流程</text><rect x="40" y="150" width="110" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="95" y="180" text-anchor="middle" font-size="14" fill="#2e3a22">准备取样器</text><rect x="190" y="150" width="110" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="245" y="180" text-anchor="middle" font-size="14" fill="#2e3a22">去表层落叶</text><rect x="340" y="150" width="110" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="395" y="180" text-anchor="middle" font-size="14" fill="#2e3a22">取样器取土</text><rect x="490" y="150" width="110" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="545" y="180" text-anchor="middle" font-size="14" fill="#2e3a22">诱捕收集</text><polygon points="155,180 183,168 183,192" fill="#3f7d1e"/><polygon points="305,180 333,168 333,192" fill="#3f7d1e"/><polygon points="455,180 483,168 483,192" fill="#3f7d1e"/><rect x="200" y="260" width="280" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="290" text-anchor="middle" font-size="14" fill="#2e3a22">分类统计 → 计算丰富度</text><text x="340" y="340" text-anchor="middle" font-size="14" fill="#5aa832">注意：取样地点随机、深度一致、及时固定</text></svg>' },
      { type: 'paragraph', text: '综上，土壤中小动物类群丰富度的研究以取样器取样为基础，用诱捕装置收集，再按记名计算法或目测估计法统计物种数目。掌握装置原理、统计方法与易错点是本实验的得分关键。' }
    ],
    exercises: [
      { type: 'choice', question: '研究土壤中小动物类群丰富度时，不适宜采用的调查方法是', options: ['A. 取样器取样', 'B. 诱虫器诱捕', 'C. 样方法', 'D. 吸虫器收集'], answer: 'C. 样方法', explanation: '土壤中小动物活动能力强、身体微小，无法用样方法（适用于植物或活动能力弱的动物）或标记重捕法调查；标准做法是用取样器取样，再用诱虫器或吸虫器收集。' },
      { type: 'choice', question: '诱虫器下方试管中盛有的体积分数70%的酒精，其主要作用是', options: ['A. 提供湿润环境', 'B. 杀死并固定小动物', 'C. 吸引小动物下钻', 'D. 为小动物提供食物'], answer: 'B. 杀死并固定小动物', explanation: '诱虫器利用小动物避光趋湿的习性使其向下移动，试管中的酒精用于杀死并固定标本，防止腐烂或逃逸，便于后续分类与计数。' },
      { type: 'choice', question: '下列关于丰富度的叙述，正确的是', options: ['A. 丰富度指某物种的个体总数', 'B. 丰富度指群落中物种数目的多少', 'C. 个体越多丰富度越高', 'D. 丰富度与物种数目无关'], answer: 'B. 丰富度指群落中物种数目的多少', explanation: '丰富度是群落水平上描述物种多样性的指标，表示群落中物种数目的多少，与单个物种的个体数量无关；个体再多但只有一种，丰富度仍很低。' },
      { type: 'fill', question: '统计土壤小动物类群丰富度常用两种方法：对个体较大、数量有限的类群用______法，对个体小、数量多的类群用目测估计法。', answer: '记名计算', explanation: '记名计算法逐个数出并命名各类群，结果精确但较费时，适合个体较大、种群数量有限的类群；目测估计法则按多度等级快速估计，适合微小繁多的类群。' },
      { type: 'fill', question: '诱虫器利用土壤小动物______和趋湿的习性，使其向下钻入装有酒精的试管中。', answer: '避光', explanation: '土壤小动物大多怕光且趋向湿润，诱虫器用灯光照射外壁制造明亮环境并上方保湿，迫使小动物向下钻入试管，被酒精杀死固定后收集。' }
    ]
  });
})();
