/* 生物学 · 选择性必修3 生物技术与工程 · 第4章 · 课时：第3节 禁止生物武器 */
(function () {
  var v = gzGetVolume('biology', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u14',
    name: '第3节 禁止生物武器',
    chapter: '选择性必修3 生物技术与工程 · 第4章 生物技术的安全性与伦理问题',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是生物武器' },
      { type: 'paragraph', text: '生物武器是利用生物体的致病性来杀伤人、畜或农作物的武器。它的核心不是火药和炸弹，而是看不见的微生物和毒素。一旦释放，病原体就会在人群或环境中悄悄扩散，造成大规模伤亡和恐慌。' },
      { type: 'keypoint', text: '生物武器是由<strong>致病微生物</strong>（如病菌、病毒、立克次氏体等）及其<strong>毒素</strong>，或经<strong>基因重组</strong>改造的致病菌制成的武器。它靠生物体的传染性和毒性发挥作用。' },
      { type: 'list', items: [
        '致病菌：如炭疽杆菌、鼠疫杆菌。',
        '病毒：如天花病毒。',
        '生化毒剂：如肉毒杆菌毒素、蓖麻毒素。',
        '重组致病菌：用基因技术制造的新致病菌。'
      ] },
      { type: 'table', headers: ['种类', '代表例子', '特点'], rows: [
        ['致病菌', '炭疽杆菌、鼠疫杆菌', '可致病、能传播'],
        ['病毒', '天花病毒', '传染性强、危害大'],
        ['生化毒剂', '肉毒杆菌毒素、蓖麻毒素', '毒性极强、少量可致死'],
        ['重组致病菌', '基因改造的致病菌', '可增强致病力和抗药性']
      ] },
      { type: 'example', text: '炭疽杆菌有个厉害之处：在不良环境下能变成“芽孢”，像穿上硬壳睡大觉，可在土壤里存活几十年。一旦条件合适又复活成病菌，所以被用作生物武器时极难彻底清除。' },
      { type: 'warn', text: '生物武器具有传染性强、污染面广、难以防治、有潜伏期、造价低等特点。它不像常规武器那样立刻爆炸，而是悄悄蔓延，等发现时往往已经扩散，后果极难控制。' },
      { type: 'list', items: [
        '传染性强：病原体可在人传人、动物间扩散。',
        '污染面广：空气、水源、食物都能被污染。',
        '难以防治：潜伏期长，发现晚、控制难。',
        '造价低：相比核武器，研发和制造门槛低。'
      ] },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 300" font-family="sans-serif"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="340" y="30" text-anchor="middle" font-size="20" font-weight="bold" fill="#3f7d1e">生物武器的主要种类</text><rect x="40" y="70" width="150" height="90" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="115" y="100" text-anchor="middle" font-size="15" font-weight="bold" fill="#2e3a22">致病菌</text><text x="115" y="124" text-anchor="middle" font-size="12" fill="#2e3a22">炭疽、鼠疫</text><rect x="200" y="70" width="150" height="90" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="275" y="100" text-anchor="middle" font-size="15" font-weight="bold" fill="#2e3a22">病毒</text><text x="275" y="124" text-anchor="middle" font-size="12" fill="#2e3a22">天花病毒</text><rect x="360" y="70" width="150" height="90" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="435" y="100" text-anchor="middle" font-size="15" font-weight="bold" fill="#2e3a22">毒素</text><text x="435" y="124" text-anchor="middle" font-size="12" fill="#2e3a22">肉毒、蓖麻</text><rect x="520" y="70" width="130" height="90" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="585" y="100" text-anchor="middle" font-size="15" font-weight="bold" fill="#2e3a22">重组菌</text><text x="585" y="124" text-anchor="middle" font-size="12" fill="#2e3a22">基因改造</text><polygon points="190,115 200,107 200,123" fill="#3f7d1e"/><polygon points="350,115 360,107 360,123" fill="#3f7d1e"/><polygon points="510,115 520,107 520,123" fill="#3f7d1e"/><text x="340" y="210" text-anchor="middle" font-size="14" fill="#5aa832">都由致病微生物或其毒素构成</text><rect x="180" y="225" width="320" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="255" text-anchor="middle" font-size="14" fill="#2e3a22">生物武器 = 病原体 + 传播 + 伤害</text></svg>', caption: '生物武器主要包括致病菌、病毒、生化毒素和经基因重组的致病菌四类。' },
      { type: 'heading', text: '二、生物武器的特点与危害' },
      { type: 'paragraph', text: '生物武器最可怕的地方在于“无声无息”。它可以通过飞机喷洒、污染水源或信件夹带等方式释放，人们感染后往往要几天才发病，这段时间病原体已经悄悄传给更多人，等疫情被发现时防控难度极大。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" font-family="sans-serif"><rect x="0" y="0" width="680" height="280" fill="#eef6e4"/><text x="340" y="30" text-anchor="middle" font-size="20" font-weight="bold" fill="#3f7d1e">生物武器的特点与危害</text><rect x="40" y="70" width="150" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="115" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e3a22">传染性强</text><text x="115" y="122" text-anchor="middle" font-size="12" fill="#2e3a22">人传人扩散</text><rect x="205" y="70" width="150" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="280" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e3a22">污染面广</text><text x="280" y="122" text-anchor="middle" font-size="12" fill="#2e3a22">空气水源食物</text><rect x="370" y="70" width="150" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="445" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e3a22">难以防治</text><text x="445" y="122" text-anchor="middle" font-size="12" fill="#2e3a22">潜伏、发现晚</text><rect x="535" y="70" width="120" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="595" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e3a22">造价低</text><text x="595" y="122" text-anchor="middle" font-size="12" fill="#2e3a22">门槛低</text><polygon points="190,105 200,97 200,113" fill="#3f7d1e"/><polygon points="355,105 365,97 365,113" fill="#3f7d1e"/><polygon points="520,105 530,97 530,113" fill="#3f7d1e"/><rect x="200" y="180" width="280" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="210" text-anchor="middle" font-size="14" fill="#2e3a22">危害：大规模伤亡、社会恐慌</text><text x="340" y="234" text-anchor="middle" font-size="13" fill="#2e3a22">和生态环境长期破坏</text></svg>', caption: '生物武器具有传染性强、污染面广、难以防治、造价低等特征，危害巨大。' },
      { type: 'example', text: '肉毒杆菌毒素是目前已知毒性最强的物质之一，极少量就能阻断神经传导致人呼吸麻痹死亡。它属于生化毒剂，被严禁用于武器用途。' },
      { type: 'heading', text: '三、《禁止生物武器公约》与我国立场' },
      { type: 'paragraph', text: '为了全人类的安全，国际社会在1972年达成了《禁止细菌（生物）及毒素武器的发展、生产及储存以及销毁这类武器的公约》，俗称《禁止生物武器公约》。它要求各国不发展、不生产、不储存生物武器，并销毁已有的库存。' },
      { type: 'keypoint', text: '《禁止生物武器公约》全称：禁止细菌（生物）及毒素武器的发展、生产及储存以及销毁这类武器的公约，1972年达成，是生物领域最重要的军控条约。' },
      { type: 'list', items: [
        '中国一贯反对任何形式的生物武器。',
        '中国支持《禁止生物武器公约》并严格履行缔约国义务。',
        '中国主张全面加强公约的核查与履约机制。',
        '中国坚决反对任何形式的生物恐怖主义。'
      ] },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" font-family="sans-serif"><rect x="0" y="0" width="680" height="280" fill="#eef6e4"/><text x="340" y="30" text-anchor="middle" font-size="20" font-weight="bold" fill="#3f7d1e">公约与我国立场</text><rect x="60" y="70" width="240" height="120" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="100" text-anchor="middle" font-size="15" font-weight="bold" fill="#3f7d1e">《禁止生物武器公约》</text><text x="180" y="128" text-anchor="middle" font-size="13" fill="#2e3a22">1972年达成</text><text x="180" y="152" text-anchor="middle" font-size="13" fill="#2e3a22">禁止发展生产储存</text><text x="180" y="174" text-anchor="middle" font-size="13" fill="#2e3a22">要求销毁库存</text><rect x="380" y="70" width="240" height="120" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="100" text-anchor="middle" font-size="15" font-weight="bold" fill="#3f7d1e">我国立场</text><text x="500" y="128" text-anchor="middle" font-size="13" fill="#2e3a22">反对生物武器</text><text x="500" y="152" text-anchor="middle" font-size="13" fill="#2e3a22">支持并履约公约</text><text x="500" y="174" text-anchor="middle" font-size="13" fill="#2e3a22">反生物恐怖主义</text><polygon points="300,130 375,120 375,140" fill="#3f7d1e"/><text x="338" y="115" text-anchor="middle" font-size="12" fill="#5aa832">我国支持</text></svg>', caption: '我国支持《禁止生物武器公约》并履行缔约国义务，坚决反对生物武器与生物恐怖主义。' },
      { type: 'tip', text: '对待生物武器，唯一正确的态度是坚决禁止。任何国家、组织或个人都不应以任何理由研制、使用生物武器，这是全人类的共同底线。' },
      { type: 'warn', text: '现代基因重组技术可能被滥用：有人把一种菌的有害基因转入另一种菌，使其致病力更强、更难被药物消灭。这种“重组致病菌”危害更大，因此必须严加防范。' },
      { type: 'example', text: '教材提到，科学家曾把蜡状芽孢杆菌中与致病有关的基因转入炭疽杆菌，使重组后的炭疽杆菌致病力增强。这提醒我们：基因工程既可用于造福人类，也可能被制成更危险的生物武器。' },
      { type: 'paragraph', text: '作为中学生，我们要认清生物武器的危害，树立“科学向善”的观念：生物技术应当用来治病、增产、保护环境，而不是制造伤害。同时支持国家与国际合作，共同筑牢防范生物武器的防线。' }
    ],
    exercises: [
      { type: 'choice', question: '下列属于生物武器中“致病菌”的是哪一项？', options: ['炭疽杆菌', '天花病毒', '肉毒杆菌毒素', '蓖麻毒素'], answer: '炭疽杆菌', explanation: '炭疽杆菌是能致病的细菌，属于生物武器中的致病菌类；天花病毒属于病毒类，肉毒杆菌毒素和蓖麻毒素属于生化毒剂类。' },
      { type: 'choice', question: '《禁止生物武器公约》是在哪一年达成的？', options: ['1972年', '1945年', '1997年', '2001年'], answer: '1972年', explanation: '《禁止细菌（生物）及毒素武器的发展、生产及储存以及销毁这类武器的公约》于1972年达成，俗称《禁止生物武器公约》，是生物领域最重要的军控条约。' },
      { type: 'choice', question: '关于生物武器的特点，下列说法错误的一项是？', options: ['造价高、难以制造', '传染性强', '污染面广', '有潜伏期'], answer: '造价高、难以制造', explanation: '生物武器的特点恰恰包括造价低、研发制造门槛相对不高，同时具有传染性强、污染面广、有潜伏期、难以防治等特征，因此更需严加防范。' },
      { type: 'fill', question: '炭疽杆菌在不良环境下能形成______（填：芽孢或孢子），可在土壤中长期存活。', answer: '芽孢', explanation: '炭疽杆菌能形成抵抗力极强的芽孢，在土壤等环境中可存活数十年，这也是它易被用作生物武器且难以清除的重要原因。' },
      { type: 'fill', question: '利用基因重组技术把一种菌的有害基因转入另一种菌，可______（填：增强或减弱）其致病力。', answer: '增强', explanation: '基因重组技术可能制造出致病力更强、更难被药物消灭的重组致病菌，例如把蜡状芽孢杆菌的致病基因转入炭疽杆菌以增强其危害，因此必须严格管控。' }
    ]
  });
})();
