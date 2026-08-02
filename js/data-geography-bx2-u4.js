/* 地理 · 必修 第二册 · 第2章 · 课时：第1节 乡村和城镇空间结构 */
(function () {
  var v = gzGetVolume('geography', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u4',
    name: '第1节 乡村和城镇空间结构',
    chapter: '必修 第二册 · 第2章 乡村和城镇',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、聚落：人类聚居的场所' },
      { type: 'paragraph', text: '人类集中居住和生活的地方叫做聚落。根据规模和性质，聚落分成两大类：乡村和城镇。乡村以农业活动为主，房屋分散、人口较少；城镇以非农业活动为主，房屋密集、人口较多。我们学习空间结构，就是看这些房屋、田地、道路和工厂在一个地方是怎么摆布的。' },
      { type: 'list', items: ['乡村：以耕作、放牧、捕鱼等农业活动为主，规模小、建筑矮而分散', '城镇：以工业、商业、服务业等非农业活动为主，规模大、建筑高而密集', '从乡村到城镇是一个渐变的过程，中间还有许多小城镇和集镇'] },
      { type: 'keypoint', label: '重点·聚落与土地利用', text: '<strong>聚落是人类聚居和生活的场所，分为乡村和城镇两大类。</strong>研究空间结构，核心是看土地被用来做什么——是盖了住宅、种了庄稼，还是修了工厂和马路。土地利用的方式不同，就形成了不同的功能区域。' },
      { type: 'heading', text: '二、乡村内部的空间结构' },
      { type: 'paragraph', text: '乡村看起来零散，其实内部也有规律。住宅往往集中在村子中间或沿河、沿路分布，方便取水与出行；耕地、林地、鱼塘等农业生产用地环绕在住宅外围。村子里还有道路把各家各户连起来，有打谷场、水井、祠堂等公共用地。整体呈现「住宅居中、农业用地在外」的格局。' },
      { type: 'list', items: ['住宅用地：集中在村落中心或沿主要道路、河流排列', '农业用地：耕地、林地、草地环绕在村落外围', '公共用地：打谷场、水井、池塘、祠堂等服务于全村'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">乡村内部空间结构示意（住宅居中，农业用地环绕）</text><rect x="270" y="120" width="140" height="90" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="170" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">住宅区</text><circle cx="340" cy="210" r="6" fill="#3389c4"/><text x="340" y="232" font-size="11" fill="#1f3a4d" text-anchor="middle">水井</text><rect x="60" y="60" width="120" height="70" fill="#3389c4" stroke="#2a6fa8" stroke-width="1.5"/><text x="120" y="100" font-size="12" fill="#1f3a4d" text-anchor="middle">耕地</text><rect x="500" y="60" width="120" height="70" fill="#3389c4" stroke="#2a6fa8" stroke-width="1.5"/><text x="560" y="100" font-size="12" fill="#1f3a4d" text-anchor="middle">林地</text><rect x="60" y="230" width="120" height="60" fill="#3389c4" stroke="#2a6fa8" stroke-width="1.5"/><text x="120" y="265" font-size="12" fill="#1f3a4d" text-anchor="middle">鱼塘</text><rect x="500" y="230" width="120" height="60" fill="#3389c4" stroke="#2a6fa8" stroke-width="1.5"/><text x="560" y="265" font-size="12" fill="#1f3a4d" text-anchor="middle">草地</text><line x1="200" y1="165" x2="270" y2="165" stroke="#2a6fa8" stroke-width="2"/><line x1="410" y1="165" x2="480" y2="165" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="315" font-size="12" fill="#1f3a4d" text-anchor="middle">住宅居中、农业用地在外，由道路和水井串起整个村落。</text></svg>', caption: '图1　乡村内部多呈住宅居中、农业用地环绕的分布格局。' },
      { type: 'heading', text: '三、城镇内部的功能分区' },
      { type: 'paragraph', text: '城镇比乡村大得多，土地被划分成不同的功能区。最常见的三大功能区是商业区、住宅区和工业区。商业区店铺密集、人流量大；住宅区是居民睡觉生活的地方，面积最大；工业区厂房成群，多设在城郊、交通方便处。不同功能区组合在一起，就构成城镇的内部空间结构。' },
      { type: 'table', headers: ['功能区', '主要特点', '在城市中的分布'], rows: [['商业区', '店铺密集、人流量大、土地租金高', '城市中心、交通干道旁'], ['住宅区', '面积最大、昼夜人口差异小', '分布最广，环绕商业区'], ['工业区', '厂房成群、运输量大、有污染', '城市外缘、靠近铁路公路']] },
      { type: 'list', items: ['商业区：最繁华，多位于交通最方便的城市中心或十字路口', '住宅区：占城镇面积最大，是大多数市民日常生活的地方', '工业区：用地粗放、运输量大，常沿铁路和公路布置在城郊'] },
      { type: 'keypoint', label: '重点·三大功能区的辨识', text: '<strong>城镇最基本的功能区是商业区、住宅区和工业区。</strong>判断时可以看三个线索：看建筑——高楼密集、店铺连片的往往是商业区；看时间——白天人多晚上人也多的多为住宅区；看位置——厂房连片、靠近铁路公路又位于城郊的一定是工业区。' },
      { type: 'heading', text: '四、城镇内部的典型空间模式' },
      { type: 'paragraph', text: '城市里的功能区并不是乱摆的，很多城市呈现有规律的圈层。最典型的是同心圆模式：从市中心向外依次是商业区、住宅区、工业区，像树木年轮一样一圈圈展开。还有的城市由于交通线向外放射，功能区被拉成扇形。认识这些模式，能帮我们看懂城市地图。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">城镇同心圆空间结构示意（由内向外：商业—住宅—工业）</text><circle cx="340" cy="190" r="40" fill="#2a6fa8" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="195" font-size="12" fill="#e8f2fb" text-anchor="middle" font-weight="bold">商业区</text><circle cx="340" cy="190" r="100" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="105" font-size="12" fill="#1f3a4d" text-anchor="middle">住宅区</text><circle cx="340" cy="190" r="150" fill="#3389c4" stroke="#2a6fa8" stroke-width="2" opacity="0.5"/><text x="340" y="60" font-size="12" fill="#1f3a4d" text-anchor="middle">工业区</text><line x1="340" y1="190" x2="490" y2="190" stroke="#2a6fa8" stroke-width="1.5" stroke-dasharray="4 4"/><text x="500" y="194" font-size="11" fill="#1f3a4d">向外扩张</text><text x="340" y="320" font-size="12" fill="#1f3a4d" text-anchor="middle">由市中心向外，土地利用从商业逐步过渡到住宅、再到工业。</text></svg>', caption: '图2　许多城市呈现中心商业、外围住宅与工业的同心圆结构。' },
      { type: 'warn', label: '易错·功能区并非绝对分开', text: '① 城市里没有一条线能把商业区和住宅区完全切开，它们常常混在一起，所谓「区」是主体功能的差异，不是围墙隔开；② 工业区虽多在城郊，但轻工业也可能靠近住宅区；③ 同一个地块在不同时间功能会变，比如老厂房改成了商场，不能死记硬背。' },
      { type: 'heading', text: '五、影响城镇空间结构的主要因素' },
      { type: 'paragraph', text: '为什么商店挤在市中心、工厂搬到城外？最关键的力量是经济，也就是土地租金。市中心人多、生意好，商家愿意出高价租地，于是商业区占据中心；越往外租金越低，住宅和工业依次向外铺开。除此之外，交通线路、历史基础和政府规划也在塑造城市格局。' },
      { type: 'list', items: ['经济因素：地租高低决定谁占据好位置，是主要力量', '交通因素：铁路、公路、地铁线引导城市沿交通线伸展', '历史因素：老城格局、原有建筑影响新区的发展方向', '政策因素：政府规划新区、开发区直接改变空间结构'] },
      { type: 'tip', label: '提示·用地租理解城市', text: '把城市想成一块「贵不贵」的土地：越靠近市中心、越靠近大马路，地价越贵，只有赚钱快的商业才租得起；工厂和住宅对位置要求低一些，就住到便宜的外圈。用地租这把尺子，大部分城市布局都能讲通。' },
      { type: 'example', label: '例题·分析功能区分布', text: '题目：某城市市中心高楼林立、店铺密集，白天人来人往，夜晚却很安静；城市外缘厂房连片、靠近铁路。请判断市中心和外缘分别是什么功能区，并说明原因。<br>解析：市中心是商业区，因为建筑高密、店铺集中、人流量大，符合商业区特点；外缘是工业区，因为厂房连片、运输量大，靠近铁路便于货运，且地价较低。答题时抓住建筑形态、人流量和交通条件三个要点即可。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">交通线引导城市空间结构（沿公路与河流伸展）</text><rect x="300" y="150" width="80" height="50" rx="8" fill="#2a6fa8" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="180" font-size="12" fill="#e8f2fb" text-anchor="middle" font-weight="bold">市中心</text><line x1="340" y1="175" x2="120" y2="90" stroke="#2a6fa8" stroke-width="4"/><text x="120" y="80" font-size="12" fill="#1f3a4d" text-anchor="middle">公路</text><line x1="340" y1="175" x2="560" y2="270" stroke="#3389c4" stroke-width="4"/><text x="565" y="278" font-size="12" fill="#1f3a4d" text-anchor="middle">河流</text><circle cx="180" cy="120" r="14" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><circle cx="500" cy="235" r="14" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="180" y="155" font-size="11" fill="#1f3a4d" text-anchor="middle">新区</text><text x="500" y="270" font-size="11" fill="#1f3a4d" text-anchor="middle">新区</text><text x="340" y="318" font-size="12" fill="#1f3a4d" text-anchor="middle">城市常沿交通干线呈手指状向外延伸，交通节点兴起新城区。</text></svg>', caption: '图3　铁路、公路、河流等交通线常常引导城市向外伸展。' }
    ],
    exercises: [
      { type: 'choice', question: '人类集中居住和生活的场所统称为？', options: ['聚落', '工业区', '商业区', '耕地'], answer: '聚落', explanation: '地理上把人类集中居住和生活的地方叫做聚落，它分为乡村和城镇两大类。工业区和商业区只是城镇内部的功能分区，耕地是农业用地，都不能概括人类聚居场所的整体概念。因此正确答案是聚落。' },
      { type: 'choice', question: '下列关于城镇三大功能区的说法，正确的是？', options: ['商业区面积最大', '工业区多位于城市中心', '住宅区是大多数市民日常生活的地方', '工业区昼夜人口差异最小'], answer: '住宅区是大多数市民日常生活的地方', explanation: '城镇里面积最大的功能区是住宅区，它是市民居住生活的主要区域；商业区土地租金最高、多在城市中心；工业区运输量大、有污染，一般布置在城郊靠近交通线处。所以只有「住宅区是大多数市民日常生活的地方」这一说法正确。' },
      { type: 'choice', question: '影响城镇内部空间结构最主要的因素是？', options: ['气候因素', '经济（地租）因素', '语言因素', '人口肤色'], answer: '经济（地租）因素', explanation: '城镇里谁占据市中心、谁搬到外圈，主要由经济因素即土地租金决定。市中心地价高，只有盈利强的商业付得起，于是商业占据中心，住宅和工业依次向外。交通、历史、政策也有影响，但经济因素是主导力量。' },
      { type: 'fill', question: '城镇最基本的三大功能区是商业区、住宅区和___。', answer: '工业区', explanation: '城镇内部根据土地利用方式不同，形成最基本的三大功能区：商业区、住宅区和工业区。商业区繁华、住宅区最大、工业区多在城郊。掌握这三大功能区是学习城镇空间结构的基础，答题时按主体功能判断即可。' },
      { type: 'fill', question: '城市里由市中心向外，土地利用通常从商业区过渡到住宅区，再向外是___；这种由内向外圈层展开的模式称为___模式。', answer: '工业区；同心圆', explanation: '许多城市呈现同心圆式的空间结构：最中心是商业区，向外是面积最大的住宅区，最外圈是工业区，像年轮一样层层展开。此外还有沿交通线拉开的扇形模式。认识这些模式，有助于我们阅读和分析城市地图。' }
    ]
  });
})();
