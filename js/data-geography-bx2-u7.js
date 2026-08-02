/* 地理 · 必修 第二册 · 第3章 · 课时：农业区位因素及其变化 */
(function () {
  var v = gzGetVolume('geography', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u7',
    name: '农业区位因素及其变化',
    chapter: '必修 第二册 · 第3章 产业区位因素',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是农业区位' },
      { type: 'paragraph', text: '农业区位，简单说就是「农业活动为什么分布在这个地方」。种水稻要选水源充足、气温适宜的地方，养牛羊要找草场广阔的草原。地理学把决定农业生产地点和类型的各种条件，统称为农业区位因素。同样的种子，放在不同地方收成天差地别，关键就在区位。' },
      { type: 'list', items: ['区位包含两层意思：一是农业生产所在的位置，二是这一位置背后的各种条件', '农业区位的学问，就是分析「为什么这里种这个、那里养那个」', '理解区位，能帮我们解释世界各地的农田、牧场和渔场为什么这样分布'] },
      { type: 'keypoint', label: '重点·农业区位因素两大方面', text: '<strong>农业区位因素分为自然因素和人文因素两大类。</strong>自然因素包括气候、地形、土壤、水源，是农业生产的先天基础；人文因素包括市场、交通、劳动力、技术、政策，是人类可以调整的力量。分析一个地方适合发展什么农业，就是看这两类因素如何组合。' },
      { type: 'heading', text: '二、自然条件：农业的先天基础' },
      { type: 'paragraph', text: '自然条件是农业的「地基」。光照、热量和降水决定一个地方能种什么作物：热带种橡胶、香蕉，温带种小麦、玉米，寒带主要发展林业和牧业。地形平坦、土壤肥沃、靠近河流有灌溉水源的地方，最容易成为高产农田。像我国东北平原、长江中下游平原都是著名的粮仓。' },
      { type: 'list', items: ['气候：热量和降水决定作物种类与熟制，如一年几熟', '地形：平原便于耕作，山区适合林业和牧业', '土壤：肥沃的土壤产量高，如黑土、水稻土', '水源：干旱区有灌溉才能发展农业，如河西走廊的绿洲农业'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">自然因素对农业区位的影响（气候·地形·土壤·水源）</text><rect x="40" y="70" width="140" height="80" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="110" y="115" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">气候</text><rect x="200" y="70" width="140" height="80" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="270" y="115" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地形</text><rect x="360" y="70" width="140" height="80" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="430" y="115" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">土壤</text><rect x="520" y="70" width="120" height="80" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="580" y="115" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">水源</text><polygon points="340,160 325,200 355,200" fill="#3389c4"/><text x="340" y="232" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">决定能种什么</text><text x="340" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">自然条件是农业的先天基础，气候热量与降水尤其关键。</text></svg>', caption: '图1　自然因素决定一个地区能发展什么农业、能种什么作物。' },
      { type: 'heading', text: '三、人文条件：人类可以调整的力量' },
      { type: 'paragraph', text: '光有自然条件还不够，农产品最终要被人消费。城市附近种蔬菜、花卉，是因为市场近、卖得快；偏远地区种粮食，是因为耐储存、能远运。交通越方便，农业越能远离市场。劳动力、种植技术、机械化和政府补贴，也深刻改变着农业生产。同样的气候下，人文因素决定种出来的东西卖给谁、怎么卖。' },
      { type: 'list', items: ['市场：需求决定生产类型，城郊多蔬果肉蛋，远方多粮食', '交通：铁路、公路、港口让农产品走得更远，冷藏车拓展了市场半径', '劳动力与技术：劳动力丰富处精耕细作，技术高处方能高产', '政策：补贴、粮价保护直接引导农民种什么'] },
      { type: 'table', headers: ['因素类别', '具体因素', '对农业的影响'], rows: [['自然因素', '气候 地形 土壤 水源', '决定能不能种、种什么、产量高低'], ['人文因素', '市场 交通 劳动力 技术 政策', '决定种出来卖给谁、怎么运、效益如何']] },
      { type: 'heading', text: '四、农业区位因素的变化' },
      { type: 'paragraph', text: '随着时代发展，农业区位因素的重要性在变化。过去自然条件说了算，如今市场和技术的影响越来越大。温室大棚让寒冷地区也能种热带蔬菜，灌溉技术让荒漠变良田，互联网让山里的果子直接卖到全国。自然条件的限制被人类技术一点点打破，人文因素成了现代农业生产的主导。' },
      { type: 'warn', label: '易错·自然因素并非不可改变', text: '① 很多同学以为自然条件固定不变，其实通过大棚、灌溉、改良土壤，人类能在一定程度上克服自然限制；② 市场因素会随时间变化，今年热销的作物明年可能跌价，农业区位要动态调整；③ 交通改善会重新定义「偏远」，修通公路的山区也能发展商品农业，不能只凭老印象判断。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">农业区位因素的变化（技术·市场作用增强）</text><rect x="60" y="80" width="150" height="70" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="135" y="120" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">传统：靠天吃饭</text><text x="135" y="160" font-size="11" fill="#1f3a4d" text-anchor="middle">自然条件主导</text><line x1="210" y1="115" x2="300" y2="115" stroke="#2a6fa8" stroke-width="2"/><polygon points="305,115 295,108 295,122" fill="#2a6fa8"/><rect x="310" y="80" width="150" height="70" rx="10" fill="#3389c4" stroke="#2a6fa8" stroke-width="2"/><text x="385" y="120" font-size="13" fill="#e8f2fb" text-anchor="middle" font-weight="bold">现代：技术市场</text><text x="385" y="160" font-size="11" fill="#1f3a4d" text-anchor="middle">人文因素增强</text><circle cx="540" cy="115" r="34" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="540" y="112" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">温室</text><text x="540" y="130" font-size="11" fill="#1f3a4d" text-anchor="middle">大棚</text><text x="340" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">技术突破自然限制，市场引导生产方向，区位因素随时代变化。</text></svg>', caption: '图2　现代社会中技术、市场对农业区位的影响越来越大。' },
      { type: 'heading', text: '五、身边的案例：从南蔗北菜说起' },
      { type: 'paragraph', text: '我国南方气候湿热、降水丰沛，自古是甘蔗主产区，糖分积累好；北方光照强、昼夜温差大，苹果、葡萄更甜。近年来城郊出现大片大棚草莓、花卉基地，正是因为靠近城市市场、交通便捷。再看新疆，光照足、温差大，棉花和瓜果品质优良，靠铁路和公路把产品运往全国，是区位因素组合的生动教材。' },
      { type: 'example', label: '例题·分析农业区位', text: '题目：新疆吐鲁番种植哈密瓜品质极佳，同时当地建起大量温室大棚，把瓜果卖到全国各大城市。请分析吐鲁番发展瓜类生产的区位优势，并说明温室大棚的作用。<br>解析：区位优势有光照充足、昼夜温差大利于糖分积累，以及沙漠边缘土地广、铁路公路便于外运。温室大棚的作用是克服冬季寒冷、延长生长期，使瓜果能错峰上市、远销城市，体现了技术对市场区位的改变。' },
      { type: 'tip', label: '提示·答题三步法', text: '遇到农业区位分析题，按<strong>「自然条件打基础、人文条件定方向、变化看技术与市场」</strong>三步走：先列气候地形土壤水源，再说市场交通劳动力政策，最后点出技术如何改造自然限制。这样作答条理清楚，不容易漏采分点。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">新疆瓜果产区区位示意（光热足·温差大·可外运）</text><circle cx="150" cy="160" r="40" fill="#3389c4" stroke="#2a6fa8" stroke-width="2"/><text x="150" y="156" font-size="12" fill="#e8f2fb" text-anchor="middle" font-weight="bold">光照足</text><text x="150" y="174" font-size="11" fill="#e8f2fb" text-anchor="middle">温差大</text><rect x="300" y="120" width="160" height="80" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="380" y="150" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">哈密瓜田</text><text x="380" y="172" font-size="11" fill="#1f3a4d" text-anchor="middle">沙壤土 广土地</text><line x1="460" y1="160" x2="580" y2="160" stroke="#2a6fa8" stroke-width="3"/><text x="600" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">铁路</text><text x="600" y="172" font-size="11" fill="#1f3a4d" text-anchor="middle">公路外运</text><text x="340" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">光热与温差成就品质，交通把产品送到远方市场。</text></svg>', caption: '图3　新疆瓜果产区依靠光热、温差与交通条件形成特色农业。' }
    ],
    exercises: [
      { type: 'choice', question: '下列属于影响农业区位的自然因素的是？', options: ['市场', '交通', '气候', '政策'], answer: '气候', explanation: '农业区位因素分为自然和人文两类。气候、地形、土壤、水源属于自然因素，是农业生产的先天基础；市场、交通、政策属于人文因素，由人类活动决定。因此四个选项中只有气候是自然因素，其余三项都是人文因素。' },
      { type: 'choice', question: '城市郊区多发展蔬菜、花卉和乳畜业，主要考虑的区位因素是？', options: ['土壤更肥沃', '市场就近、运输快', '气候更温暖', '劳动力更少'], answer: '市场就近、运输快', explanation: '蔬菜、花卉、鲜奶这类产品易腐烂、不耐长途运输，必须靠近消费它们的城市市场，才能快速送达、减少损耗。郊区土地虽不一定最肥沃，但离市场近、交通便捷，这是城郊农业类型选择的主导因素。' },
      { type: 'choice', question: '关于农业区位因素的变化，下列说法正确的是？', options: ['自然条件永远不可改变', '市场和技术的影响越来越小', '温室大棚可突破部分自然限制', '交通改善对农业没有影响'], answer: '温室大棚可突破部分自然限制', explanation: '随着技术进步，温室大棚、灌溉工程和土壤改良让人类能在一定程度上克服寒冷、干旱等自然限制，使寒冷地区也能种菜、荒漠也能产粮。同时市场和技术的影响在增强，交通改善更拓宽了农产品销售半径，因此只有该项表述正确。' },
      { type: 'fill', question: '分析农业区位时，自然条件决定能不能种、种什么，其中热量和___决定作物种类与熟制；而产品最终卖给谁，主要由___因素决定。', answer: '降水；市场', explanation: '气候中的热量和降水共同决定一个地区能种什么作物以及一年几熟，是自然基础；农产品生产出来要被消费，城市需求、价格等市场因素则决定种出来的东西卖给谁、效益如何。掌握自然打基础、市场定方向，是区位分析的核心思路。' },
      { type: 'fill', question: '我国南方气候湿热、降水丰沛，是___（填作物）的主产区；新疆光照足、昼夜温差大，利于糖分积累，盛产优质的___和棉花。', answer: '甘蔗；哈密瓜', explanation: '南方高温多雨的气候适合甘蔗等喜湿作物生长，自古就是甘蔗主产区；新疆深居内陆、晴天多、昼夜温差大，有利于瓜果糖分积累，哈密瓜等品质优良，同时光照充足也利于棉花生长。这正是自然条件决定作物类型的典型体现。' }
    ]
  });
})();
