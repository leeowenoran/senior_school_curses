/* 生物学 · 高三复习 · 生物与环境 · 第1章 · 课时：种群的数量特征 */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u1',
    name: '第1节 种群的数量特征',
    chapter: '生物与环境 · 第1章 种群及其动态',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是种群' },
      { type: 'paragraph', text: '种群是指在一定自然区域内，同种生物的所有个体组成的集合。例如一片草原上所有的蒲公英、一个池塘里所有的鲤鱼，各自构成一个种群。种群是生物繁殖和进化的基本单位。' },
      { type: 'keypoint', text: '种群概念三要素：同一自然区域、同一物种、该空间内的全部个体（不论大小老幼）。判断种群必须同时满足这三点。' },
      { type: 'paragraph', text: '需要区分种群与物种：物种是分类学概念，可在不同地区分布；种群是同一区域内的实际群体。比如中国东北虎和华南虎属于同一物种，但分处不同区域，是不同的种群。' },
      { type: 'heading', text: '二、种群密度——最基本的数量特征' },
      { type: 'paragraph', text: '种群密度是指种群在单位面积或单位体积中的个体数，常用公式表示为：种群密度 = 个体总数 ÷ 分布面积（或体积）。它是描述种群大小最基本、最常用的指标。' },
      { type: 'list', items: [
        '样方法：适用于植物和活动能力弱、活动范围小的动物，如蚜虫、跳蝻。',
        '标记重捕法：适用于活动能力强、活动范围大的动物，如鼠类、鸟类。'
      ] },
      { type: 'tip', text: '考点提醒：种群密度是“单位空间内的个体数”，不是个体总数。同一物种在不同区域的种群密度可以差别很大。' },
      { type: 'paragraph', text: '种群密度反映了种群在一定时期的生存状态，农业上可据此估算害虫发生量，渔业上可据此制定捕捞强度，是生态学研究的基础数据。' },
      { type: 'heading', text: '三、出生率和死亡率' },
      { type: 'paragraph', text: '出生率是指单位时间内新产生的个体数目占该种群个体总数的比例；死亡率是指单位时间内死亡的个体数目占该种群个体总数的比例。两者直接决定种群密度的大小：出生率大于死亡率时种群密度上升，反之下降。' },
      { type: 'heading', text: '四、迁入率和迁出率' },
      { type: 'paragraph', text: '迁入率是指单位时间内迁入的个体数占该种群个体总数的比例；迁出率是指单位时间内迁出的个体数占该种群个体总数的比例。在城市人口研究中，迁入和迁出对种群数量变化影响显著。' },
      { type: 'warn', text: '易错辨析：种群密度不等于种群数量（前者是单位空间密度，后者是总数）；出生率不等于增长率（增长率还要扣除死亡率）。混淆这两个概念是高频失分点。' },
      { type: 'heading', text: '五、年龄结构' },
      { type: 'paragraph', text: '年龄结构是指一个种群中各年龄期个体数目的比例关系。根据各年龄段比例，可分为三种类型，年龄结构可以预测种群未来数量的变化趋势，是种群的重要特征。' },
      { type: 'list', items: [
        '增长型：幼年个体多、老年个体少，种群密度将增大。',
        '稳定型：各年龄期个体比例均衡，种群密度在一段时间内保持稳定。',
        '衰退型：老年个体多、幼年个体少，种群密度将减小。'
      ] },
      { type: 'heading', text: '六、性别比例' },
      { type: 'paragraph', text: '性别比例是指种群中雌雄个体数目的比例。合理的性别比例有利于种群繁殖，它通过影响出生率间接影响种群密度。例如利用性引诱剂诱杀雄性害虫，可破坏性别比例从而降低出生率。' },
      { type: 'heading', text: '七、数量特征汇总' },
      { type: 'table', caption: '种群的七个数量特征及其与种群密度的关系', headers: ['数量特征', '定义', '与种群密度的关系'], rows: [
        ['种群密度', '单位面积或体积中的个体数', '最基本特征，反映种群大小'],
        ['出生率', '单位时间新产生个体数占总数比例', '直接决定，出生率大于死亡率则种群增长'],
        ['死亡率', '单位时间死亡个体数占总数比例', '直接决定，死亡率大于出生率则种群下降'],
        ['迁入率', '单位时间迁入个体数占总数比例', '直接决定，迁入大于迁出则种群增大'],
        ['迁出率', '单位时间迁出个体数占总数比例', '直接决定，迁出大于迁入则种群减小'],
        ['年龄结构', '各年龄期个体数目的比例', '可预测未来数量变化趋势（间接影响）'],
        ['性别比例', '雌雄个体数目的比例', '影响出生率，间接影响种群密度']
      ] },
      { type: 'example', text: '例题：某村庄人口中幼年个体比例明显高于老年个体，且近期大量青壮年迁入。该村庄人口年龄结构属于增长型，迁入率上升会直接提高当地人口密度，可预测未来一段时间内总人口将呈上升趋势。' },
      { type: 'svg', caption: '种群数量特征与种群密度的关系：出生率、死亡率、迁入率、迁出率直接决定种群密度；年龄结构和性别比例通过影响出生率间接影响种群密度。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">种群数量特征与种群密度的关系</text><rect x="280" y="155" width="120" height="52" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="187" font-size="18" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">种群密度</text><rect x="40" y="60" width="160" height="46" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="120" y="88" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">出生率、死亡率</text><rect x="480" y="60" width="160" height="46" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="560" y="88" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">迁入率、迁出率</text><rect x="40" y="262" width="160" height="46" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="120" y="290" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">年龄结构</text><rect x="480" y="262" width="160" height="46" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="560" y="290" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">性别比例</text><line x1="200" y1="83" x2="278" y2="170" stroke="#3f7d1e" stroke-width="2"/><polygon points="278,170 262,166 266,182" fill="#3f7d1e"/><line x1="480" y1="83" x2="402" y2="170" stroke="#3f7d1e" stroke-width="2"/><polygon points="402,170 418,166 414,182" fill="#3f7d1e"/><line x1="200" y1="285" x2="278" y2="190" stroke="#3f7d1e" stroke-width="2"/><polygon points="278,190 262,194 266,178" fill="#3f7d1e"/><line x1="480" y1="285" x2="402" y2="190" stroke="#3f7d1e" stroke-width="2"/><polygon points="402,190 418,194 414,178" fill="#3f7d1e"/><text x="120" y="128" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">直接决定</text><text x="560" y="128" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">直接决定</text><text x="120" y="252" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">间接影响</text><text x="560" y="252" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">间接影响</text></svg>' },
      { type: 'svg', caption: '三种年龄结构金字塔：增长型幼年个体多、老年个体少；稳定型各年龄比例均衡；衰退型老年个体多、幼年个体少。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">三种年龄结构金字塔</text><polygon points="85,320 195,320 140,90" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="140" y="350" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">增长型</text><polygon points="300,320 380,320 340,90" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="350" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">稳定型</text><polygon points="515,320 565,320 540,90" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="540" y="350" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">衰退型</text><text x="140" y="200" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">幼年多</text><text x="340" y="200" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">各年龄均衡</text><text x="540" y="200" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">老年多</text></svg>' },
      { type: 'svg', caption: '种群的七个数量特征，其中种群密度是最基本的数量特征，其余六个特征围绕它发挥作用。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">种群的七个数量特征</text><rect x="270" y="150" width="140" height="54" rx="8" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="183" font-size="16" text-anchor="middle" fill="#ffffff" font-family="sans-serif">种群密度(基本)</text><rect x="30" y="70" width="120" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="90" y="95" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">出生率</text><rect x="30" y="150" width="120" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="90" y="175" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">年龄结构</text><rect x="30" y="230" width="120" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="90" y="255" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">迁入率</text><rect x="530" y="70" width="120" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="590" y="95" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">死亡率</text><rect x="530" y="150" width="120" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="590" y="175" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">性别比例</text><rect x="530" y="230" width="120" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="590" y="255" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">迁出率</text><line x1="150" y1="90" x2="268" y2="165" stroke="#3f7d1e" stroke-width="2"/><polygon points="268,165 252,162 256,178" fill="#3f7d1e"/><line x1="150" y1="170" x2="268" y2="175" stroke="#3f7d1e" stroke-width="2"/><polygon points="268,175 252,170 254,184" fill="#3f7d1e"/><line x1="150" y1="250" x2="268" y2="185" stroke="#3f7d1e" stroke-width="2"/><polygon points="268,185 252,182 256,198" fill="#3f7d1e"/><line x1="530" y1="90" x2="272" y2="165" stroke="#3f7d1e" stroke-width="2"/><polygon points="272,165 288,162 284,178" fill="#3f7d1e"/><line x1="530" y1="170" x2="272" y2="175" stroke="#3f7d1e" stroke-width="2"/><polygon points="272,175 288,170 286,184" fill="#3f7d1e"/><line x1="530" y1="250" x2="272" y2="185" stroke="#3f7d1e" stroke-width="2"/><polygon points="272,185 288,182 284,198" fill="#3f7d1e"/></svg>' },
      { type: 'tip', text: '高频考点：①种群密度是最基本数量特征；②年龄结构可预测数量变化趋势；③性别比例通过影响出生率间接起作用。复习时把“直接决定”和“间接影响”两条路径记牢。' }
    ],
    exercises: [
      { type: 'choice', question: '下列属于一个种群的是', options: ['一片草原上所有的蒲公英', '一片草原上所有的植物', '一个池塘里所有的鱼', '一块农田里所有的昆虫'], answer: '一片草原上所有的蒲公英', explanation: '种群要求同一自然区域内、同一物种的全部个体。蒲公英是同一物种，满足三要素；植物、鱼、昆虫都包含多个物种，不是单一物种的种群。' },
      { type: 'choice', question: '种群密度是指', options: ['单位面积中的物种数目', '单位面积或体积中的个体数', '一个区域内的全部个体总数', '种群中各年龄期的比例'], answer: '单位面积或体积中的个体数', explanation: '种群密度是种群最基本的数量特征，定义为单位面积或单位体积中的个体数目，用来反映种群在一定空间内的密集程度。' },
      { type: 'choice', question: '增长型年龄结构的特点是', options: ['幼年个体少、老年个体多', '各年龄期个体比例均衡', '幼年个体多、老年个体少', '全部由老年个体组成'], answer: '幼年个体多、老年个体少', explanation: '增长型年龄结构中幼年个体比例高、老年个体比例低，出生率大于死亡率，可预测种群密度未来将增大。' },
      { type: 'fill', question: '种群最基本的数量特征是________。', answer: '种群密度', explanation: '种群密度是单位面积或体积中的个体数，是描述种群大小最基本、最常用的数量特征，其余特征都围绕它发挥作用。' },
      { type: 'fill', question: '能够预测种群未来数量变化趋势的数量特征是________。', answer: '年龄结构', explanation: '年龄结构反映各年龄期个体比例，增长型、稳定型、衰退型分别对应种群未来的上升、稳定与下降，因此可用于预测数量变化。' }
    ]
  });
})();
