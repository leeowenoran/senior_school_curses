/* 地理 · 高三总复习 · 专题二 人文地理 · 第2章 城镇与乡村 · 第2节 城市内部空间结构 */
(function () {
  var v = gzGetVolume('geography', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u6',
    name: '第2节 城市内部空间结构',
    chapter: '高三地理复习 · 专题二 人文地理 · 第2章 城镇与乡村',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、城市土地利用与功能分区' },
      { type: 'paragraph', text: '城市内部按用途划分出不同功能区：商业区、住宅区、工业区是三大基本功能区。商业区在交通最便捷的中心（CBD）；住宅区占城市面积最大，是城市最基本功能区；工业区多沿交通线布置在城市外缘。各功能区在空间上组合形成城市内部结构。' },
      { type: 'list', items: ['商业区：位于市中心或交通干道旁，CBD 为核心', '住宅区：面积最大、最基本的功能区', '工业区：多在城市外缘、沿交通线分布', '功能区之间无明显界线，常呈过渡'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">城市三大基本功能区</text><rect x="270" y="70" width="140" height="55" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="103" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">商业区(CBD)</text><rect x="120" y="150" width="180" height="55" rx="8" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="210" y="183" font-size="14" fill="#1f3a4d" text-anchor="middle">住宅区</text><rect x="380" y="150" width="180" height="55" rx="8" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="470" y="183" font-size="14" fill="#1f3a4d" text-anchor="middle">住宅区</text><rect x="120" y="235" width="440" height="50" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="266" font-size="14" fill="#1f3a4d" text-anchor="middle">工业区（城市外缘，沿交通线）</text><text x="340" y="300" font-size="13" fill="#1f3a4d" text-anchor="middle">功能区之间呈过渡，无明显界线</text></svg>', caption: '图1　城市由商业、住宅、工业三大功能区组成，商业居中、工业在外缘。' },
      { type: 'keypoint', label: '重点·CBD 的特征', text: '<strong>中心商务区（CBD）是城市商业、金融、贸易活动最集中的核心，特征为建筑物高大密集、人流车流昼夜差异大、内部垂直分工明显。</strong>CBD 多在市中心交通便利处，地价最高。它集中了公司总部、商场、银行，是城市经济活动的心脏，也是地价峰值区。' },
      { type: 'heading', text: '二、城市地域结构模式' },
      { type: 'paragraph', text: '城市功能区的空间组合有多种理论模式：同心圆模式（城市由中心向外呈圈层扩展）、扇形模式（功能区沿交通线呈扇形延伸）、多核心模式（城市有多个中心，如CBD加副中心）。这些模式帮助理解不同城市的空间形态，现实中常是几种混合。' },
      { type: 'list', items: ['同心圆模式：中心向外圈层扩展', '扇形模式：沿交通线呈扇形延伸', '多核心模式：多个中心共同发展', '现实多为多种模式混合'] },
      { type: 'table', headers: ['模式', '核心特征', '典型表现'], rows: [['同心圆', '圈层扩展', '中心商务区居中向外'], ['扇形', '交通导向延伸', '工业区沿铁路扇形'], ['多核心', '多个中心', '主中心加副中心']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">城市地域结构三种模式</text><rect x="60" y="70" width="180" height="70" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="150" y="105" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">同心圆</text><text x="150" y="128" font-size="12" fill="#1f3a4d" text-anchor="middle">圈层扩展</text><rect x="250" y="70" width="180" height="70" rx="8" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="105" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">扇形</text><text x="340" y="128" font-size="12" fill="#1f3a4d" text-anchor="middle">沿交通延伸</text><rect x="440" y="70" width="180" height="70" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="530" y="105" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">多核心</text><text x="530" y="128" font-size="12" fill="#1f3a4d" text-anchor="middle">多个中心</text><text x="340" y="190" font-size="13" fill="#1f3a4d" text-anchor="middle">同一城市常是多种模式混合</text><rect x="140" y="215" width="400" height="55" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="240" font-size="13" fill="#1f3a4d" text-anchor="middle">模式帮助理解功能区如何组合成空间形态</text><text x="340" y="262" font-size="13" fill="#1f3a4d" text-anchor="middle">现实城市很少是单一模式</text></svg>', caption: '图2　同心圆、扇形、多核心三种模式解释城市功能区组合方式。' },
      { type: 'warn', label: '易错·功能区的误区', text: '① 住宅区虽面积最大，但商业区地价最高，不能混淆「面积最大」与「地价最高」；② 工业区并非都在市中心，恰恰在外缘以避污染；③ 各功能区之间没有绝对界线，是逐渐过渡的；④ CBD 不一定在几何中心，而在交通最便利处。' },
      { type: 'heading', text: '三、影响内部结构的因素' },
      { type: 'paragraph', text: '地租（地价）是核心因素：城市中心地租最高，形成商业区；向外地租降低，依次为住宅、工业。交通通达度也影响地租，十字路口、干道旁地租峰值更高。此外，历史、行政规划、环境、种族宗教也会塑造结构，比如政府规划新区、环保要求工业企业外迁。' },
      { type: 'example', label: '例题·地租与功能区', text: '题目：为什么市中心往往是商业区而不是工业区？<br>解析：市中心交通最便利、人流最大，地租最高；商业活动能承担高地租并从中获利，所以占据市中心。工业付租能力低且产生污染，只能布局在地租较低的城市外缘。用地租「付租能力」由高到低（商业大于住宅大于工业）即可解释功能区环形分布。' },
      { type: 'tip', label: '提示·地租曲线法', text: '画「地租—距离」曲线：商业付租能力随距离下降最快（陡），住宅次之，工业最缓（平）。三条曲线与地租线的交点决定各功能区位置——市中心商业、中间住宅、外围工业。用地租曲线分析功能区布局，高考综合题很常用。' },
      { type: 'heading', text: '四、城市内部空间结构的变化' },
      { type: 'paragraph', text: '随着城市发展，内部结构不断变化：旧城中心商业强化成 CBD，工厂外迁腾出空间改造，城市出现副中心和新城以疏解中心压力。交通线延伸带动新区开发，城市由单中心走向多中心。理解变化有助于解释城市蔓延和新区建设。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">地租随距离变化与功能区布局</text><line x1="80" y1="60" x2="80" y2="270" stroke="#1f3a4d" stroke-width="2"/><line x1="80" y1="270" x2="620" y2="270" stroke="#1f3a4d" stroke-width="2"/><text x="50" y="170" font-size="12" fill="#1f3a4d" transform="rotate(-90 50 170)">地租</text><text x="350" y="290" font-size="12" fill="#1f3a4d" text-anchor="middle">距市中心距离→</text><path d="M80 80 Q200 80 620 250" fill="none" stroke="#c1583b" stroke-width="3"/><text x="180" y="95" font-size="12" fill="#c1583b">商业（陡）</text><path d="M80 140 Q300 140 620 255" fill="none" stroke="#2a6fa8" stroke-width="3"/><text x="170" y="130" font-size="12" fill="#2a6fa8">住宅（中）</text><path d="M80 200 Q350 205 620 260" fill="none" stroke="#1f7a4d" stroke-width="3"/><text x="165" y="195" font-size="12" fill="#1f7a4d">工业（缓）</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">付租能力：商业大于住宅大于工业，决定功能区环形分布</text></svg>', caption: '图3　地租随距市中心距离下降，商业、住宅、工业因付租能力不同依次布局。' },
      { type: 'heading', text: '五、合理规划城市空间' },
      { type: 'paragraph', text: '合理的空间结构要兼顾效率与宜居：商业居中便利、住宅成片舒适、工业外缘并设绿化隔离带、交通成网。规划还要保护历史街区、预留生态空间。良好的结构能减少通勤、降低污染，提升城市运行效率。' },
      { type: 'list', items: ['商业居中、住宅成片、工业外缘', '设绿化隔离带减少污染', '交通成网、多中心疏解压力', '保护历史街区与生态空间'] }
    ],
    exercises: [
      { type: 'choice', question: '城市中最基本、面积最大的功能区通常是？', options: ['商业区', '工业区', '住宅区', '文教区'], answer: '住宅区', explanation: '住宅区是城市中最广泛分布、占面积最大的功能区，为市民提供居住场所，是城市存在的基础。商业区地价最高但面积小，工业区在外缘，文教区只是辅助。因此面积最大且最基本的是住宅区。' },
      { type: 'choice', question: '关于中心商务区（CBD）的描述，错误的是？', options: ['建筑物高大密集', '地价最高', '昼夜人口差异大', '位于城市外缘'], answer: '位于城市外缘', explanation: 'CBD 位于城市中心交通便利处，地价最高、建筑密集、白天人流大夜晚较少，昼夜差异明显。它绝不在城市外缘，外缘是工业区所在地。把 CBD 位置说成外缘是错误的，其余描述均正确。' },
      { type: 'choice', question: '用地租理论解释，付租能力由高到低的顺序是？', options: ['工业>住宅>商业', '住宅>商业>工业', '商业>住宅>工业', '商业>工业>住宅'], answer: '商业>住宅>工业', explanation: '商业活动位于市中心能获最大客流与利润，付租能力最强；住宅次之；工业付租能力最低且需大面积、怕污染，布局在外缘。因此付租能力顺序为商业大于住宅大于工业，这解释了城市功能区的环形分布。' },
      { type: 'fill', question: '城市三大基本功能区中，___区地价最高、建筑物最密集，集中了商业金融贸易活动；___区占城市面积最大。', answer: '商业（CBD）；住宅', explanation: '中心商务区（CBD）位于市中心，交通便捷、地价最高、高楼密集，集中商业金融贸易；住宅区为市民居住，分布最广、面积最大，是城市最基本功能区。两者区别在「地价最高」与「面积最大」，答题时别混淆。' },
      { type: 'fill', question: '城市地域结构常见模式有同心圆模式、___模式和___模式，现实中常混合出现。', answer: '扇形；多核心', explanation: '城市功能区空间组合的经典模式有同心圆（中心向外圈层）、扇形（沿交通线延伸）、多核心（多个中心）三种。实际城市往往是几种模式的混合，并非纯哪一种。掌握这些模式有助于描述和解释城市空间形态。' }
    ]
  });
})();
