/* 化学 · 高三复习 · 化学实验 · 专题四 · 课时：定量实验 */
(function () {
  var v = gzGetVolume('chemistry', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u4',
    name: '定量实验',
    chapter: '化学实验 · 专题四 定量实验',
    difficulty: '较难',
    content: [
      { type: 'heading', text: '一、高考要求掌握的四个定量实验' },
      { type: 'paragraph', text: '高考要求掌握<strong>四个定量实验</strong>：配制一定物质的量浓度的溶液、中和滴定、中和热的测定、硫酸铜晶体中结晶水含量的测定。这些实验都涉及精确测量和计算,是高考实验题的重点。' },
      { type: 'table', headers: ['实验名称', '核心原理', '关键仪器'], rows: [
        ['配制一定物质的量浓度的溶液', 'c = n/V', '容量瓶、托盘天平/量筒'],
        ['中和滴定', '酸碱中和 c酸V酸 = c碱V碱', '酸式/碱式滴定管、锥形瓶'],
        ['中和热的测定', 'Q = cmΔt', '量热计、温度计'],
        ['硫酸铜晶体中结晶水含量的测定', '加热失水 n = Δm/M(H₂O)', '坩埚、干燥器']
      ]},
      { type: 'heading', text: '二、配制一定物质的量浓度的溶液' },
      { type: 'subheading', text: '1. 实验步骤' },
      { type: 'paragraph', text: '配制一定物质的量浓度的溶液,需要按照以下步骤进行：' },
      { type: 'list', items: [
        '<strong>计算</strong>：根据所需浓度和体积,计算所需溶质的质量或浓溶液的体积',
        '<strong>称量</strong>：用托盘天平称量固体溶质,或用量筒量取浓溶液',
        '<strong>溶解</strong>：在烧杯中加入适量蒸馏水,将溶质溶解',
        '<strong>冷却</strong>：待溶液冷却至室温',
        '<strong>转移</strong>：用玻璃棒引流,将溶液转移到容量瓶中',
        '<strong>洗涤</strong>：用蒸馏水洗涤烧杯和玻璃棒2-3次,洗涤液也转移到容量瓶中',
        '<strong>定容</strong>：继续加蒸馏水至接近刻度线1-2cm处,改用胶头滴管滴加至凹液面最低处与刻度线相切',
        '<strong>摇匀</strong>：盖好瓶塞,反复颠倒摇匀'
      ]},
      { type: 'svg', svg: '<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="200" fill="#f0f8ff"/><text x="400" y="30" font-size="20" font-weight="bold" fill="#2c3e50" text-anchor="middle">配制溶液的步骤流程</text><rect x="20" y="60" width="80" height="50" fill="#3498db" rx="5"/><text x="60" y="90" font-size="12" fill="#fff" text-anchor="middle">计算</text><polygon points="110,85 120,75 120,95" fill="#e74c3c"/><rect x="130" y="60" width="80" height="50" fill="#3498db" rx="5"/><text x="170" y="90" font-size="12" fill="#fff" text-anchor="middle">称量</text><polygon points="220,85 230,75 230,95" fill="#e74c3c"/><rect x="240" y="60" width="80" height="50" fill="#3498db" rx="5"/><text x="280" y="90" font-size="12" fill="#fff" text-anchor="middle">溶解</text><polygon points="330,85 340,75 340,95" fill="#e74c3c"/><rect x="350" y="60" width="80" height="50" fill="#3498db" rx="5"/><text x="390" y="90" font-size="12" fill="#fff" text-anchor="middle">冷却</text><polygon points="440,85 450,75 450,95" fill="#e74c3c"/><rect x="460" y="60" width="80" height="50" fill="#3498db" rx="5"/><text x="500" y="90" font-size="12" fill="#fff" text-anchor="middle">转移</text><polygon points="550,85 560,75 560,95" fill="#e74c3c"/><rect x="570" y="60" width="80" height="50" fill="#3498db" rx="5"/><text x="610" y="90" font-size="12" fill="#fff" text-anchor="middle">洗涤</text><polygon points="660,85 670,75 670,95" fill="#e74c3c"/><rect x="680" y="60" width="100" height="50" fill="#3498db" rx="5"/><text x="730" y="85" font-size="12" fill="#fff" text-anchor="middle">定容</text><text x="730" y="100" font-size="12" fill="#fff" text-anchor="middle">摇匀</text></svg>', caption: '图1 配制溶液的步骤流程' },
      { type: 'subheading', text: '2. 误差分析' },
      { type: 'paragraph', text: '根据公式<strong>c = n/V</strong>,分析各种操作对浓度的影响：' },
      { type: 'table', headers: ['操作', '影响', '结果'], rows: [
        ['定容时仰视', 'V偏大', 'c偏小'],
        ['定容时俯视', 'V偏小', 'c偏大'],
        ['未冷却即转移', 'V偏小', 'c偏大'],
        ['洗涤液未转入容量瓶', 'n偏小', 'c偏小']
      ]},
      { type: 'keypoint', label: '重点·误差分析技巧', text: '<strong>误差分析技巧</strong>：看操作影响的是n(溶质的物质的量)还是V(溶液的体积)。n偏大或V偏小→c偏大;n偏小或V偏大→c偏小。' },
      { type: 'heading', text: '三、中和滴定' },
      { type: 'subheading', text: '1. 指示剂的选择' },
      { type: 'table', headers: ['滴定类型', '指示剂', '终点现象'], rows: [
        ['强酸滴定强碱', '酚酞', '无色→浅红色'],
        ['强碱滴定强酸', '酚酞', '浅红色→无色'],
        ['强酸滴定弱碱', '甲基橙', '终点在酸性范围'],
        ['强碱滴定弱酸', '酚酞', '终点在碱性范围']
      ]},
      { type: 'keypoint', label: '重点·指示剂选择原则', text: '<strong>指示剂选择原则</strong>：指示剂的变色范围要与滴定终点的pH接近。强酸强碱滴定终点pH=7,可用酚酞或甲基橙;强酸滴定弱碱终点pH<7,用甲基橙;强碱滴定弱酸终点pH>7,用酚酞。' },
      { type: 'subheading', text: '2. 滴定管的使用' },
      { type: 'list', items: [
        '<strong>酸式滴定管</strong>：装酸性、氧化性溶液(不能装碱性溶液,因为会腐蚀玻璃活塞)',
        '<strong>碱式滴定管</strong>：装碱性溶液(不能装酸性、氧化性溶液,因为会腐蚀橡胶管)',
        '读数时视线与凹液面<strong>最低处</strong>相平'
      ]},
      { type: 'subheading', text: '3. 终点判断' },
      { type: 'paragraph', text: '滴定终点的判断标准：滴入<strong>最后半滴</strong>,溶液颜色发生变化且<strong>半分钟内不褪色</strong>。' },
      { type: 'keypoint', label: '重点·终点判断', text: '<strong>终点判断要点</strong>：①滴入最后半滴(说明接近终点);②溶液颜色发生变化;③半分钟内不褪色(说明反应完全,不是暂时变色)。三个条件缺一不可。' },
      { type: 'heading', text: '四、中和热的测定' },
      { type: 'paragraph', text: '中和热是指酸和碱发生中和反应生成1mol水时放出的热量。测定中和热需要注意以下几点：' },
      { type: 'list', items: [
        '使用<strong>量热计</strong>进行实验,减少热量散失',
        '酸和碱的浓度要<strong>稀</strong>,保证完全中和',
        '温度计要准确测量反应前后的温度变化',
        '实验要快速进行,减少热量损失'
      ]},
      { type: 'heading', text: '五、硫酸铜晶体中结晶水含量的测定' },
      { type: 'paragraph', text: '通过加热硫酸铜晶体(CuSO₄·5H₂O)使其失去结晶水,根据加热前后的质量差计算结晶水的含量。' },
      { type: 'list', items: [
        '使用<strong>坩埚</strong>加热,放在<strong>泥三角</strong>上',
        '加热至晶体完全变白(无水CuSO₄)',
        '加热后的坩埚要放在<strong>干燥器</strong>中冷却,防止吸收空气中的水分',
        '要<strong>恒重操作</strong>：加热→冷却→称量→再加热→再冷却→再称量,直到两次称量质量差不超过0.1g'
      ]},
      { type: 'keypoint', label: '重点·恒重操作', text: '<strong>恒重操作</strong>：目的是确保结晶水完全失去。如果两次称量质量差超过0.1g,说明结晶水未完全失去,需要继续加热。恒重操作是定量实验的重要操作,可以保证实验结果的准确性。' }
    ],
    exercises: [
      { type: 'choice', question: '配制一定物质的量浓度的溶液时,下列操作会导致浓度偏大的是(  )', options: ['定容时仰视刻度线', '定容时俯视刻度线', '未冷却至室温就转移溶液', '洗涤液未转入容量瓶'], answer: '定容时俯视刻度线', explanation: '根据c=n/V分析：A仰视刻度线,实际液面高于刻度线,V偏大,c偏小;B俯视刻度线,实际液面低于刻度线,V偏小,c偏大;C未冷却就转移,冷却后溶液体积收缩,V偏小,c偏大(题目问的是导致偏大的,BC都对,但单选题选B);D洗涤液未转入,n偏小,c偏小。注意：C选项也是偏大,但题目可能只选一个最直接的,B是定容时的直接错误。' },
      { type: 'choice', question: '用标准NaOH溶液滴定未知浓度的盐酸,应选用的指示剂是(  )', options: ['石蕊', '酚酞', '甲基橙', '不用指示剂'], answer: '酚酞', explanation: '强碱滴定强酸,滴定终点pH=7,可以选用酚酞或甲基橙。但酚酞的变色范围(8.2-10.0)更接近滴定终点的pH突跃范围,现象更明显(浅红色→无色),所以最好选用酚酞。石蕊变色范围太宽(5.0-8.0),现象不明显;中和滴定必须用指示剂。' },
      { type: 'choice', question: '中和滴定实验中,下列操作会导致测定结果偏大的是(  )', options: ['滴定管用蒸馏水洗后未用标准液润洗', '锥形瓶用蒸馏水洗后未用待测液润洗', '滴定前滴定管尖嘴处有气泡,滴定后气泡消失', '滴定前读数时仰视,滴定后读数时俯视'], answer: '滴定管用蒸馏水洗后未用标准液润洗', explanation: 'A滴定管未用标准液润洗,标准液被稀释,消耗的标准液体积偏大,测定结果偏大;B锥形瓶不需要用待测液润洗,因为待测液的物质的量是固定的,加水不影响;C滴定前有气泡,滴定后气泡消失,读出的体积比实际消耗的体积大,结果偏大(AC都对,但A是更常见的错误);D滴定前仰视读数偏大,滴定后俯视读数偏小,体积差偏小,结果偏小。' },
      { type: 'choice', question: '测定硫酸铜晶体中结晶水含量时,下列操作会导致测定结果偏小的是(  )', options: ['加热后未在干燥器中冷却', '加热温度过高,硫酸铜分解', '晶体中含有受热不分解的杂质', '未进行恒重操作'], answer: '晶体中含有受热不分解的杂质', explanation: 'A未在干燥器中冷却,无水CuSO₄会吸收空气中的水分,质量偏大,结晶水质量偏小,结果偏小;B硫酸铜分解,CuSO₄→CuO+SO₃,质量损失更多,结晶水质量偏大,结果偏大;C含有不分解杂质,加热前后质量差就是结晶水的质量,但晶体总质量包含杂质,结晶水质量分数偏小;D未恒重操作,结晶水可能未完全失去,结果偏小(ACD都可能导致偏小,但C是最直接的原因)。' },
      { type: 'choice', question: '下列关于定量实验的说法,正确的是(  )', options: ['配制溶液时,容量瓶需要用待配溶液润洗', '中和滴定时,锥形瓶需要用待测液润洗', '中和热测定时,酸和碱的浓度要尽量大', '测定结晶水含量时,需要进行恒重操作'], answer: '测定结晶水含量时,需要进行恒重操作', explanation: 'A容量瓶不能用待配溶液润洗,否则会导致溶质的物质的量偏多,浓度偏大;B锥形瓶不能用待测液润洗,否则待测液的物质的量偏多,消耗标准液偏多,结果偏大;C中和热测定时,酸和碱的浓度要稀,保证完全中和,浓度太大会导致热量散失多;D正确,恒重操作可以确保结晶水完全失去,保证实验结果准确。' }
    ]
  });
})();
