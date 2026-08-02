/* 化学 · 高三复习 · 化学实验 · 专题四 · 课时：物质的检验、分离与提纯 */
(function () {
  var v = gzGetVolume('chemistry', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u3',
    name: '物质的检验、分离与提纯',
    chapter: '化学实验 · 专题四 物质的检验、分离与提纯',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、常见离子的检验' },
      { type: 'paragraph', text: '离子检验是高考实验题的<strong>必考内容</strong>。检验离子时,要根据离子的特性选择合适的试剂,观察特征现象。' },
      { type: 'subheading', text: '1. 阳离子的检验' },
      { type: 'table', headers: ['离子', '检验试剂', '现象'], rows: [
        ['NH₄⁺', '浓NaOH溶液,加热', '产生<strong>有刺激性气味</strong>的气体,湿润红色石蕊试纸<strong>变蓝</strong>'],
        ['Fe³⁺', 'KSCN溶液', '溶液变<strong>血红色</strong>'],
        ['Fe²⁺', 'KSCN+氯水', '先无明显变化,加氯水后<strong>变红</strong>'],
        ['Al³⁺', 'NaOH溶液(逐滴加入)', '先产生<strong>白色沉淀</strong>,NaOH过量沉淀<strong>溶解</strong>'],
        ['Na⁺', '焰色试验', '<strong>黄色</strong>火焰'],
        ['K⁺', '焰色试验', '<strong>紫色</strong>火焰(需透过蓝色钴玻璃观察)']
      ]},
      { type: 'keypoint', label: '重点·Fe²⁺和Fe³⁺的检验', text: '<strong>Fe²⁺和Fe³⁺的检验</strong>：Fe³⁺遇KSCN立即变血红色;Fe²⁺遇KSCN不变色,加氯水后变血红色(因为Fe²⁺被氧化为Fe³⁺)。如果只加KSCN不变色,不能说明没有Fe²⁺,必须再加氯水才能检验Fe²⁺。' },
      { type: 'svg', svg: '<svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="350" fill="#f0f8ff"/><text x="400" y="30" font-size="20" font-weight="bold" fill="#2c3e50" text-anchor="middle">Fe²⁺和Fe³⁺的检验</text><g transform="translate(50,60)"><rect x="0" y="0" width="320" height="240" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="160" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">Fe³⁺的检验</text><circle cx="80" cy="80" r="30" fill="#fff3e0" stroke="#e74c3c" stroke-width="2"/><text x="80" y="85" font-size="12" fill="#2c3e50" text-anchor="middle">FeCl₃</text><text x="160" y="85" font-size="14" fill="#e74c3c" text-anchor="middle">+</text><circle cx="240" cy="80" r="30" fill="#e3f2fd" stroke="#3498db" stroke-width="2"/><text x="240" y="85" font-size="12" fill="#2c3e50" text-anchor="middle">KSCN</text><polygon points="160,130 150,150 170,150" fill="#e74c3c"/><rect x="100" y="160" width="120" height="60" fill="#ffebee" stroke="#e74c3c" stroke-width="2"/><text x="160" y="195" font-size="13" fill="#e74c3c" text-anchor="middle" font-weight="bold">血红色溶液</text></g><g transform="translate(430,60)"><rect x="0" y="0" width="320" height="240" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="160" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">Fe²⁺的检验</text><circle cx="80" cy="80" r="30" fill="#e8f5e9" stroke="#4caf50" stroke-width="2"/><text x="80" y="85" font-size="12" fill="#2c3e50" text-anchor="middle">FeSO₄</text><text x="160" y="85" font-size="14" fill="#e74c3c" text-anchor="middle">+</text><circle cx="240" cy="80" r="30" fill="#e3f2fd" stroke="#3498db" stroke-width="2"/><text x="240" y="85" font-size="12" fill="#2c3e50" text-anchor="middle">KSCN</text><polygon points="160,130 150,150 170,150" fill="#e74c3c"/><rect x="100" y="160" width="120" height="60" fill="#fff" stroke="#4caf50" stroke-width="2"/><text x="160" y="185" font-size="12" fill="#4caf50" text-anchor="middle">无明显变化</text><text x="160" y="205" font-size="11" fill="#7f8c8d" text-anchor="middle">再加氯水后变红</text></g></svg>', caption: '图1 Fe²⁺和Fe³⁺的检验现象对比' },
      { type: 'subheading', text: '2. 阴离子的检验' },
      { type: 'table', headers: ['离子', '检验试剂', '现象'], rows: [
        ['Cl⁻', 'AgNO₃ + 稀HNO₃', '<strong>白色</strong>沉淀(不溶于稀硝酸)'],
        ['Br⁻', 'AgNO₃ + 稀HNO₃', '<strong>浅黄色</strong>沉淀'],
        ['I⁻', 'AgNO₃ + 稀HNO₃', '<strong>黄色</strong>沉淀'],
        ['SO₄²⁻', 'BaCl₂ + 稀HCl', '<strong>白色</strong>沉淀(不溶于稀盐酸)'],
        ['CO₃²⁻', '稀盐酸 + 澄清石灰水', '产生气体使石灰水<strong>变浑浊</strong>']
      ]},
      { type: 'keypoint', label: '重点·卤素离子的检验', text: '<strong>卤素离子的检验</strong>：Cl⁻、Br⁻、I⁻与AgNO₃反应生成不同颜色的沉淀：AgCl白色、AgBr浅黄色、AgI黄色。加入稀HNO₃是为了排除CO₃²⁻等离子的干扰(因为Ag₂CO₃溶于稀HNO₃)。' },
      { type: 'heading', text: '二、物质的分离与提纯' },
      { type: 'paragraph', text: '混合物的分离和提纯是化学实验的重要技能。根据混合物中各成分的性质差异,选择合适的分离方法。' },
      { type: 'subheading', text: '1. 物理方法' },
      { type: 'table', headers: ['方法', '原理', '适用'], rows: [
        ['过滤', '溶解度不同', '分离<strong>不溶固体</strong>和液体'],
        ['蒸发', '溶剂挥发', '从溶液中分离<strong>可溶性固体</strong>'],
        ['蒸馏', '沸点不同', '分离<strong>互溶</strong>的液体混合物'],
        ['分液', '互不相溶', '分离<strong>互不相溶</strong>的液体混合物'],
        ['萃取', '溶解度不同', '从溶液中提取溶质'],
        ['重结晶', '溶解度随温度变化不同', '提纯固体有机物'],
        ['渗析', '半透膜', '分离胶体中的离子或小分子']
      ]},
      { type: 'svg', svg: '<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="300" fill="#f0f8ff"/><text x="400" y="30" font-size="20" font-weight="bold" fill="#2c3e50" text-anchor="middle">常见分离方法</text><g transform="translate(50,60)"><rect x="0" y="0" width="150" height="200" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="75" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">过滤</text><polygon points="75,50 50,120 100,120" fill="none" stroke="#3498db" stroke-width="2"/><line x1="50" y1="80" x2="100" y2="80" stroke="#3498db" stroke-width="1" stroke-dasharray="3,3"/><text x="75" y="150" font-size="11" fill="#7f8c8d" text-anchor="middle">分离固体和液体</text><text x="75" y="170" font-size="10" fill="#e74c3c" text-anchor="middle">一贴二低三靠</text></g><g transform="translate(230,60)"><rect x="0" y="0" width="150" height="200" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="75" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">蒸馏</text><rect x="30" y="50" width="90" height="60" fill="none" stroke="#3498db" stroke-width="2"/><line x1="120" y1="70" x2="140" y2="70" stroke="#3498db" stroke-width="2"/><text x="75" y="150" font-size="11" fill="#7f8c8d" text-anchor="middle">分离互溶液体</text><text x="75" y="170" font-size="10" fill="#e74c3c" text-anchor="middle">沸点不同</text></g><g transform="translate(410,60)"><rect x="0" y="0" width="150" height="200" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="75" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">分液</text><rect x="40" y="50" width="70" height="80" fill="none" stroke="#3498db" stroke-width="2"/><line x1="40" y1="90" x2="110" y2="90" stroke="#e74c3c" stroke-width="2"/><text x="75" y="150" font-size="11" fill="#7f8c8d" text-anchor="middle">分离互不相溶液体</text><text x="75" y="170" font-size="10" fill="#e74c3c" text-anchor="middle">下层下口出</text></g><g transform="translate(590,60)"><rect x="0" y="0" width="150" height="200" fill="#fff" stroke="#3498db" stroke-width="2" rx="5"/><text x="75" y="25" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">萃取</text><rect x="40" y="50" width="70" height="80" fill="none" stroke="#3498db" stroke-width="2"/><circle cx="60" cy="80" r="5" fill="#e74c3c"/><circle cx="80" cy="90" r="5" fill="#e74c3c"/><circle cx="90" cy="70" r="5" fill="#e74c3c"/><text x="75" y="150" font-size="11" fill="#7f8c8d" text-anchor="middle">提取溶质</text><text x="75" y="170" font-size="10" fill="#e74c3c" text-anchor="middle">溶解度不同</text></g></svg>', caption: '图2 常见分离方法示意图' },
      { type: 'subheading', text: '2. 化学方法' },
      { type: 'table', headers: ['方法', '适用'], rows: [
        ['沉淀法', '将杂质离子转化为沉淀除去'],
        ['气化法', '将杂质转化为气体逸出'],
        ['转化法', '将杂质转化为被提纯物质'],
        ['加热法', '利用热稳定性差异除去杂质']
      ]},
      { type: 'subheading', text: '3. 分离提纯的基本原则' },
      { type: 'list', items: [
        '① <strong>除杂不能加杂</strong>：加入的试剂不能引入新的杂质',
        '② <strong>操作简单可行</strong>：实验操作不能过于复杂',
        '③ <strong>分离恢复原态</strong>：被提纯物质要能恢复原来的状态',
        '④ <strong>物理与化学方法并用</strong>：优先使用物理方法,必要时结合化学方法'
      ]},
      { type: 'keypoint', label: '重点·除杂原则', text: '<strong>除杂原则</strong>：不增(不增加新杂质)、不减(不减少被提纯物质)、易分(杂质与被提纯物质容易分离)、复原(被提纯物质恢复原状态)。' }
    ],
    exercises: [
      { type: 'choice', question: '检验溶液中是否含有Fe³⁺,最好选用的试剂是(  )', options: ['NaOH溶液', 'KSCN溶液', '石蕊试液', '酚酞试液'], answer: 'KSCN溶液', explanation: 'Fe³⁺遇KSCN溶液立即变血红色,现象明显,是检验Fe³⁺的最好方法。NaOH溶液虽然也能与Fe³⁺反应生成红褐色沉淀,但不如KSCN溶液灵敏;石蕊试液和酚酞试液不能检验Fe³⁺。' },
      { type: 'choice', question: '下列离子检验方法正确的是(  )', options: ['检验Cl⁻：加AgNO₃溶液,产生白色沉淀', '检验SO₄²⁻：加BaCl₂溶液,产生白色沉淀', '检验CO₃²⁻：加稀盐酸,产生气体通入澄清石灰水变浑浊', '检验Fe²⁺：加KSCN溶液,变血红色'], answer: '检验CO₃²⁻：加稀盐酸,产生气体通入澄清石灰水变浑浊', explanation: 'A错误,Cl⁻检验应加AgNO₃和稀HNO₃,白色沉淀不溶于稀HNO₃才能证明是Cl⁻(排除CO₃²⁻干扰);B错误,SO₄²⁻检验应加BaCl₂和稀HCl,白色沉淀不溶于稀HCl才能证明是SO₄²⁻(排除SO₃²⁻、CO₃²⁻干扰);C正确,CO₃²⁻与稀盐酸反应生成CO₂,CO₂使澄清石灰水变浑浊;D错误,Fe²⁺加KSCN不变色,需要再加氯水才变血红色。' },
      { type: 'choice', question: '分离水和乙醇的混合物,应采用的方法是(  )', options: ['过滤', '蒸馏', '分液', '萃取'], answer: '蒸馏', explanation: '水和乙醇互溶,但沸点不同(水100℃,乙醇78.5℃),可以用蒸馏方法分离。过滤用于分离不溶固体和液体;分液用于分离互不相溶的液体;萃取是利用溶质在不同溶剂中溶解度的差异来提取溶质。' },
      { type: 'choice', question: '除去NaCl溶液中混有的CaCl₂,应选用的试剂是(  )', options: ['稀盐酸', 'Na₂CO₃溶液', 'NaOH溶液', 'AgNO₃溶液'], answer: 'Na₂CO₃溶液', explanation: 'CaCl₂与Na₂CO₃反应生成CaCO₃沉淀和NaCl(CaCl₂+Na₂CO₃=CaCO₃↓+2NaCl),过滤除去CaCO₃沉淀即可。稀盐酸不能除去Ca²⁺;NaOH溶液不能除去Ca²⁺;AgNO₃溶液会同时与NaCl和CaCl₂反应,不能选用。' },
      { type: 'choice', question: '下列关于物质分离提纯的说法,错误的是(  )', options: ['过滤时漏斗下端要紧靠烧杯内壁', '蒸馏时温度计水银球应放在支管口处', '分液时下层液体从下口放出,上层液体从上口倒出', '萃取时萃取剂必须与水互溶'], answer: '萃取时萃取剂必须与水互溶', explanation: '萃取时萃取剂必须与水<strong>互不相溶</strong>,这样才能形成两层液体,便于分液。A正确,过滤时漏斗下端紧靠烧杯内壁可以防止液体溅出;B正确,蒸馏时温度计水银球放在支管口处测量蒸气温度;C正确,分液时下层液体从下口放出,上层液体从上口倒出,避免上下层液体混合。' }
    ]
  });
})();
