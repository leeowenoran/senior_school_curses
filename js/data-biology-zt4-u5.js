/* 生物学 · 高三复习 · 生物与环境 · 第1章 · 课时：影响种群数量变化的因素 */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u5',
    name: '第3节 影响种群数量变化的因素',
    chapter: '生物与环境 · 第1章 种群及其动态',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、影响种群数量变化的因素分类' },
      { type: 'paragraph', text: '种群数量并非只由自身特征决定，还会受到外部环境的强烈影响。这些因素总体上分为两大类：非生物因素和生物因素。两者共同作用，使种群数量在自然界中呈现波动甚至骤变。' },
      { type: 'list', items: [
        '非生物因素：温度、光照、水、气候、土壤等无机环境条件。',
        '生物因素：种内关系（如种内竞争）和种间关系（捕食、竞争、寄生、互利共生）。',
        '同一因素对不同物种、甚至同一物种的不同发育阶段，影响可能不同。'
      ] },
      { type: 'heading', text: '二、非生物因素' },
      { type: 'paragraph', text: '非生物因素通过影响出生率、死亡率和迁入迁出率来改变种群数量。例如温度和降水直接影响植物萌发与动物繁殖，极端气候可导致种群数量剧烈波动。' },
      { type: 'list', items: [
        '温度：影响代谢速率和繁殖周期，如越冬死亡率随低温升高。',
        '降水：干旱或洪涝会改变植被和栖息地，进而影响动物种群。',
        '光照：影响植物开花结实，间接影响以其为食的动物数量。'
      ] },
      { type: 'paragraph', text: '典型实例：东亚飞蝗的爆发常与干旱气候相关，干旱使水位下降、裸露滩地增多，利于蝗卵孵化和幼虫成活，从而导致种群剧增。这说明非生物因素可成为种群爆发的触发条件。' },
      { type: 'heading', text: '三、生物因素——种内关系' },
      { type: 'paragraph', text: '种内关系是指同种个体之间的关系，最主要的表现是种内竞争。当种群密度增大时，个体对食物、空间、配偶等资源的争夺加剧，从而抑制出生率或提高死亡率，使种群数量回落。' },
      { type: 'keypoint', text: '种内竞争特点：发生在同种生物个体之间，种群密度越大、资源越有限时竞争越激烈。它是密度制约因素，对种群数量起负反馈调节作用。' },
      { type: 'heading', text: '四、生物因素——种间关系' },
      { type: 'paragraph', text: '种间关系是指不同物种之间的相互作用，主要包括捕食、竞争、寄生和互利共生四类。它们通过影响彼此的出生率和死亡率，塑造种群数量的动态变化，是群落结构的重要基础。' },
      { type: 'table', caption: '四种种间关系的特点对比', headers: ['种间关系', '特点', '对数量的影响'], rows: [
        ['捕食', '一种生物以另一种为食', '被捕食者先增后减，捕食者随之波动'],
        ['竞争', '争夺同一资源，能力弱者受抑制', '一方被淘汰或数量受压制'],
        ['寄生', '寄生者受益、宿主受害', '宿主数量下降，寄生者受宿主限制'],
        ['互利共生', '双方互利、相互依存', '两者数量同步增长、共同繁荣']
      ] },
      { type: 'example', text: '例题：某草原上狼捕食羊，狼数量增加会使羊减少，羊减少后又导致狼因食物不足而下降，二者呈现交错波动，这是典型的捕食关系对种群数量的制约表现。' },
      { type: 'warn', text: '易错辨析：竞争是不同物种争夺资源（种间竞争），不要与种内竞争混淆；捕食不等于竞争，捕食是一方吃另一方，竞争是双方争夺同一有限资源而相互抑制。' },
      { type: 'svg', caption: '影响因素框图：非生物因素与生物因素共同作用于种群，通过影响出生率、死亡率、迁入率和迁出率改变种群数量。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">影响种群数量的因素</text><rect x="250" y="150" width="180" height="56" rx="8" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="184" font-size="16" text-anchor="middle" fill="#ffffff" font-family="sans-serif">种群数量变化</text><rect x="40" y="70" width="170" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="125" y="100" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">非生物因素</text><rect x="470" y="70" width="170" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="555" y="100" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">生物因素</text><rect x="40" y="250" width="170" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="125" y="280" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">温度光照水等</text><rect x="470" y="250" width="170" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="555" y="280" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">种内、种间关系</text><line x1="125" y1="120" x2="320" y2="150" stroke="#3f7d1e" stroke-width="2"/><polygon points="320,150 304,147 308,163" fill="#3f7d1e"/><line x1="555" y1="120" x2="360" y2="150" stroke="#3f7d1e" stroke-width="2"/><polygon points="360,150 376,147 372,163" fill="#3f7d1e"/><line x1="125" y1="300" x2="320" y2="206" stroke="#3f7d1e" stroke-width="2"/><polygon points="320,206 304,203 308,219" fill="#3f7d1e"/><line x1="555" y1="300" x2="360" y2="206" stroke="#3f7d1e" stroke-width="2"/><polygon points="360,206 376,203 372,219" fill="#3f7d1e"/></svg>' },
      { type: 'svg', caption: '种内竞争示意：同种个体争夺有限的食物和空间，密度越大竞争越激烈，对种群数量起负反馈调节作用。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">种内竞争示意</text><rect x="120" y="90" width="160" height="90" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="200" y="140" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">有限食物</text><circle cx="380" cy="120" r="14" fill="#5aa832"/><circle cx="430" cy="120" r="14" fill="#5aa832"/><circle cx="480" cy="120" r="14" fill="#5aa832"/><circle cx="405" cy="165" r="14" fill="#5aa832"/><circle cx="455" cy="165" r="14" fill="#5aa832"/><line x1="340" y1="135" x2="350" y2="135" stroke="#3f7d1e" stroke-width="2"/><polygon points="350,135 334,130 338,146" fill="#3f7d1e"/><text x="430" y="220" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">同种个体争夺资源</text><text x="340" y="280" font-size="14" text-anchor="middle" fill="#5aa832" font-family="sans-serif">密度越大 → 竞争越激烈</text><text x="340" y="310" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">抑制出生率、提高死亡率</text></svg>' },
      { type: 'svg', caption: '四种种间关系：捕食（一方吃另一方）、竞争（争夺资源）、寄生（一方受益一方受害）、互利共生（双方受益）。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">四种种间关系</text><rect x="40" y="90" width="140" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="110" y="124" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">捕食</text><rect x="210" y="90" width="140" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="280" y="124" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">竞争</text><rect x="380" y="90" width="140" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="450" y="124" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">寄生</text><rect x="550" y="90" width="140" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="620" y="124" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">互利共生</text><text x="110" y="190" font-size="12" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">A吃B</text><text x="280" y="190" font-size="12" text-anchor="middle" fill="#2b2b2b" font-family="sans-serif">争夺资源</text><text x="450" y="190" font-size="12" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">寄生者受益</text><text x="620" y="190" font-size="12" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">双方受益</text><text x="340" y="260" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">捕食：数量交错波动</text><text x="340" y="295" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">竞争：一方受抑制或淘汰</text><text x="340" y="330" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">互利共生：同步增长</text></svg>' },
      { type: 'tip', text: '高频考点：①区分非生物与生物因素；②种内竞争是密度制约因素；③四种种间关系的判断与数量动态；④捕食者与被捕食者数量呈交错波动。复习时结合实例（如狼与羊、蝗虫与气候）记忆。' }
    ],
    exercises: [
      { type: 'choice', question: '下列因素中属于影响种群数量的非生物因素的是', options: ['种内竞争', '捕食关系', '温度', '寄生'], answer: '温度', explanation: '非生物因素指温度、光照、水、气候等无机环境条件；种内竞争、捕食、寄生都属于生物因素，因此只有温度符合题意。' },
      { type: 'choice', question: '种群密度越大时越激烈的种内关系是', options: ['互利共生', '种内竞争', '捕食', '寄生'], answer: '种内竞争', explanation: '种内竞争发生在同种个体之间，资源有限时密度越大争夺越激烈，它属于密度制约因素，对种群数量起负反馈调节作用。' },
      { type: 'choice', question: '狼与羊之间的关系属于', options: ['竞争', '寄生', '捕食', '互利共生'], answer: '捕食', explanation: '狼以羊为食，一方受益、另一方受害，属于捕食关系。捕食关系中两者数量常呈交错波动：被捕食者先变化，捕食者随之变化。' },
      { type: 'fill', question: '东亚飞蝗爆发常与________（干旱/洪涝）气候有关，这种气候属于非生物因素。', answer: '干旱', explanation: '干旱使水位下降、滩地裸露，利于蝗卵孵化和幼虫成活，从而触发蝗虫种群爆发，说明非生物因素可成为种群数量骤变的诱因。' },
      { type: 'fill', question: '种内竞争属于________制约因素（填“密度”或“非密度”），密度越大作用越强。', answer: '密度', explanation: '种内竞争的作用强度随种群密度升高而增强，因而被归为密度制约因素，它能通过抑制出生率、提高死亡率来调节种群数量。' }
    ]
  });
})();
