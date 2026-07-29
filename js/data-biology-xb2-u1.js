/* 生物学 · 选择性必修2 生物与环境 · 第1章 · 课时：第1节 种群的数量特征 */
(function () {
  var v = gzGetVolume('biology', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u1',
    name: '第1节 种群的数量特征',
    chapter: '选择性必修2 生物与环境 · 第1章 种群及其动态',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是种群' },
      { type: 'paragraph', text: '在一定的自然区域内，<strong>同种生物</strong>的所有个体组成一个种群。种群是生物繁殖和进化的基本单位。判断种群必须同时满足两个条件：第一，它们生活在同一自然区域；第二，它们属于同一个物种，也就是彼此之间能够互相交配并产生可育后代。例如，一片草原上所有的蒲公英是一个种群，而草原上所有的植物整体则不是种群，因为其中包含了多个物种。' },
      { type: 'paragraph', text: '种群和物种这两个概念容易混淆。<strong>物种</strong>是分类学单位，分布在不同区域的同一种生物仍然属于同一物种；而种群强调同一区域、同一物种、所有个体的集合。一个物种可以包含多个种群，例如长江流域和珠江流域的鲤鱼分别属于两个种群，但它们同属一个物种。' },
      { type: 'list', items: ['同一区域：个体必须生活在同一自然空间内', '同一物种：个体之间能够交配并产生可育后代', '所有个体：包含该区域内该物种的幼年、成年、老年全部个体'] },
      { type: 'heading', text: '二、种群密度' },
      { type: 'paragraph', text: '<strong>种群密度</strong>是种群在单位面积或单位体积中的个体数，公式为：种群密度 = 个体数 ÷ 面积（或体积）。它是种群最基本的数量特征，反映了种群在一定时期的数量规模。例如，某草地上每平方米有 15 株蒲公英，那么蒲公英的种群密度就是 15 株/平方米。' },
      { type: 'keypoint', label: '重点·最基本的数量特征', text: '种群密度是种群<strong>最基本的数量特征</strong>。种群的其他数量特征（出生率、死亡率、迁入率、迁出率、年龄结构、性别比例）都会直接或间接地影响种群密度。调查种群密度是进一步研究种群动态变化的基础。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">种群密度的含义：单位面积或体积内的个体数</text><rect x="60" y="90" width="200" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="160" y="128" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">一定区域</text><text x="160" y="156" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">同一物种</text><text x="160" y="182" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">全部个体</text><polygon points="261,150 298,138 298,162" fill="#3f7d1e"/><rect x="320" y="90" width="240" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="440" y="125" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">单位面积 / 体积内</text><text x="440" y="153" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">个体数目</text><text x="440" y="182" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">即种群密度</text><text x="340" y="270" font-size="13" fill="#2e3a22" text-anchor="middle">种群密度 = 个体数 ÷ 面积（或体积），是种群最基本的数量特征。</text></svg>', caption: '图1　种群密度指单位面积或单位体积中个体的数目。' },
      { type: 'heading', text: '三、出生率和死亡率' },
      { type: 'paragraph', text: '<strong>出生率</strong>是指在单位时间内新产生的个体数目占该种群个体总数的比例；<strong>死亡率</strong>是指在单位时间内死亡的个体数目占该种群个体总数的比例。出生率和死亡率是决定种群大小和种群密度的直接因素。当出生率大于死亡率时，种群密度上升；反之则下降。' },
      { type: 'example', label: '例题·出生率与死亡率', text: '题目：某种群年初个体数为 1000，一年内出生 200 个个体、死亡 100 个个体，则该年种群数量变化趋势是？<br>解析：出生个体多于死亡个体，说明出生率大于死亡率。在不考虑迁入和迁出的情况下，年末个体数将增加到 1100，种群密度呈现上升趋势。因此该种群数量将增大。' },
      { type: 'heading', text: '四、迁入率和迁出率' },
      { type: 'paragraph', text: '<strong>迁入率</strong>是指单位时间内迁入的个体数占该种群个体总数的比例；<strong>迁出率</strong>是指单位时间内迁出的个体数占该种群个体总数的比例。在城市人口研究中，迁入率和迁出率往往对种群密度有重要影响。迁入率大于迁出率时，种群密度增大。' },
      { type: 'warn', label: '易错·出生率与迁入率', text: '易错点：出生率和迁入率都能使种群数量增加，但二者来源不同。出生率来自种群内部新个体的产生，迁入率来自其他区域个体的进入。考试常把二者混为一谈，答题时要看清楚是「出生」还是「迁入」，二者作用途径并不相同。' },
      { type: 'heading', text: '五、年龄结构' },
      { type: 'paragraph', text: '<strong>年龄结构</strong>是指一个种群中各年龄期个体数目的比例。按照幼年、成年、老年个体的多少，年龄结构可以分为三种类型。年龄结构能够预测种群数量的变化趋势，是种群的重要数量特征之一。' },
      { type: 'list', items: ['增长型：幼年个体多、老年个体少，种群密度将增大', '稳定型：各年龄期个体比例适中，种群密度保持相对稳定', '衰退型：老年个体多、幼年个体少，种群密度将减小'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">年龄结构的三种类型及其对种群数量的影响</text><rect x="40" y="70" width="180" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="130" y="105" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">增长型</text><text x="130" y="132" font-size="12" fill="#2e3a22" text-anchor="middle">幼年个体多</text><text x="130" y="156" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">密度将增大</text><rect x="250" y="70" width="180" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="105" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">稳定型</text><text x="340" y="132" font-size="12" fill="#2e3a22" text-anchor="middle">各年龄相当</text><text x="340" y="156" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">密度稳定</text><rect x="460" y="70" width="180" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="105" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">衰退型</text><text x="550" y="132" font-size="12" fill="#2e3a22" text-anchor="middle">老年个体多</text><text x="550" y="156" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">密度将减小</text><polygon points="220,232 257,220 257,244" fill="#3f7d1e"/><text x="340" y="280" font-size="13" fill="#2e3a22" text-anchor="middle">年龄结构可预测种群数量变化：增长型→增大，稳定型→稳定，衰退型→减小。</text></svg>', caption: '图2　年龄结构分为增长型、稳定型、衰退型，可预测种群数量变化趋势。' },
      { type: 'heading', text: '六、性别比例' },
      { type: 'paragraph', text: '<strong>性别比例</strong>是指种群中雌雄个体数目的比例。性别比例主要通过影响出生率来间接影响种群密度。例如，利用性引诱剂诱杀雄性害虫，可以破坏害虫种群的性别比例，使许多雌性个体无法交配，从而降低出生率，达到控制害虫数量的目的。' },
      { type: 'tip', label: '提示·记忆数量特征', text: '记忆小窍门：种群的数量特征可以记成「密、率、构」三个字。密指种群密度（最基本的特征）；率指出生率、死亡率、迁入率、迁出率；构指年龄结构和性别比例。其他特征都围绕种群密度发挥作用。' },
      { type: 'heading', text: '七、种群密度的调查方法' },
      { type: 'paragraph', text: '直接逐个计数种群中所有个体往往很困难，因此常用取样调查的方法估算种群密度。<strong>样方法</strong>适用于植物以及活动能力弱、活动范围小的动物（如昆虫卵、蚜虫）。它是在被调查种群的分布范围内随机选取若干样方，计数样方内的个体数并求平均值。' },
      { type: 'paragraph', text: '<strong>标志重捕法</strong>适用于活动能力强、活动范围大的动物。其原理是：先捕获一部分个体做标记后放回，一段时间后进行重捕，根据重捕中标记个体占总捕获数的比例来估算种群总数。设种群总数为 N、标记数为 M、重捕数为 n、重捕中标记数为 m，则 N = M · n ÷ m。' },
      { type: 'table', headers: ['方法', '适用对象', '关键操作'], rows: [['样方法', '植物、活动能力弱的动物', '随机设样方、计数求平均'], ['标志重捕法', '活动能力强、范围大的动物', '标记放回、按重捕比例估算']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">种群密度调查的两种常用方法</text><rect x="60" y="80" width="250" height="140" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="185" y="115" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">样方法</text><text x="185" y="143" font-size="12" fill="#2e3a22" text-anchor="middle">适合植物、活动能力弱</text><text x="185" y="166" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">的昆虫卵、蚜虫等</text><polygon points="311,150 348,138 348,162" fill="#3f7d1e"/><rect x="370" y="80" width="250" height="140" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="495" y="115" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">标志重捕法</text><text x="495" y="143" font-size="12" fill="#2e3a22" text-anchor="middle">适合活动能力强、</text><text x="495" y="166" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">活动范围大的动物</text><text x="340" y="270" font-size="13" fill="#2e3a22" text-anchor="middle">样方法计数样方内个体；标志重捕法按重捕中标记比例估算总数。</text></svg>', caption: '图3　植物用样方法，活动能力强的动物用标志重捕法调查种群密度。' }
    ],
    exercises: [
      { type: 'choice', question: '下列选项中，能够构成一个种群的是？', options: ['一片森林里的所有树木', '一个池塘里的所有鲫鱼', '一块农田里的所有昆虫', '一座山上所有的蛇'], answer: '一个池塘里的所有鲫鱼', explanation: '种群是指一定自然区域内同种生物的所有个体。一片森林里的所有树木包含多种树，不是同一物种；一块农田里的所有昆虫也包含许多物种；一座山上所有的蛇同样包含多个物种；只有池塘里的所有鲫鱼属于同一物种且在同一区域，构成一个种群。因此正确选项是一个池塘里的所有鲫鱼。' },
      { type: 'choice', question: '下列叙述中，属于种群密度的是？', options: ['一个池塘中鲫鱼的个体总数', '每平方米草地中蒲公英的株数', '一个蜂群中工蜂的数量', '一片森林中鸟类的种类数'], answer: '每平方米草地中蒲公英的株数', explanation: '种群密度强调单位面积或单位体积中的个体数目。一个池塘中鲫鱼的个体总数只是总数，没有体现单位面积或体积；一个蜂群中工蜂的数量也不是密度；一片森林中鸟类的种类数反映的是物种丰富度而非密度。每平方米草地中蒲公英的株数，体现了单位面积内的个体数，属于种群密度。因此选每平方米草地中蒲公英的株数。' },
      { type: 'choice', question: '某地区人口中幼年个体比例明显高于老年个体，预测该地区人口数量将？', options: ['保持稳定', '逐渐减小', '逐渐增大', '先增后减'], answer: '逐渐增大', explanation: '年龄结构可预测种群数量变化。幼年个体比例明显高于老年个体，说明未来进入繁殖期的个体多，出生率将高于死亡率，种群数量会逐渐增大，这属于增长型年龄结构。因此预测该地区人口数量将逐渐增大。' },
      { type: 'fill', question: '种群密度是指单位面积或单位体积中___的数目，是种群最基本的数量特征。', answer: '个体数', explanation: '种群密度反映种群的数量规模，其定义为单位面积或单位体积中个体数目的多少。它是最基本的数量特征，其他数量特征如出生率、死亡率、年龄结构等都通过影响它来改变种群数量。因此填空应为个体数。' },
      { type: 'fill', question: '调查植物或活动能力弱的动物种群密度，常用___法。', answer: '样方', explanation: '样方法是在被调查范围内随机选取若干个样方，计数每个样方内的个体数并求平均值来估算种群密度。它适用于植物以及昆虫卵、蚜虫等活动能力弱、活动范围小的生物，是种群密度调查的常用方法。因此填样方。' }
    ]
  });
})();
