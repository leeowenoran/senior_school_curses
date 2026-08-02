/* 地理 · 选择性必修2 · 第4章 · 课时：产业转移 */
(function () {
  var v = gzGetVolume('geography', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u11',
    name: '产业转移',
    chapter: '选择性必修2 · 第4章 区际联系与区域协调发展',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是产业转移' },
      { type: 'paragraph', text: '产业转移是指某些产业从经济较发达、成本上升的地区，转移到成本更低或条件更合适的地区的现象。它可以是国际间的（如制造业从发达国家转向发展中国家），也可以是一国内部区域间的（如我国沿海产业向中西部转移）。转移的不只是工厂，还有资本、技术与就业。' },
      { type: 'list', items: ['产业由高成本区迁往低成本区', '可发生在国际之间或一国内部区域间', '转移伴随资本、技术、就业流动', '本质是要素寻求更高性价比的空间再配置'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">产业转移：由高成本区流向低成本区</text><rect x="40" y="80" width="280" height="180" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="120" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">转出地（发达/沿海）</text><text x="180" y="160" font-size="13" fill="#1f3a4d" text-anchor="middle">成本升、升级产业</text><rect x="360" y="80" width="280" height="180" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="500" y="120" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">承接地（欠发达/内陆）</text><text x="500" y="160" font-size="13" fill="#1f3a4d" text-anchor="middle">成本低、承接产业</text><line x1="320" y1="170" x2="360" y2="170" stroke="#2a6fa8" stroke-width="3"/><text x="340" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">资本、技术、就业随产业一起流动。</text></svg>', caption: '图1　产业从成本上升的转出地迁往条件更优的承接地。' },
      { type: 'keypoint', label: '重点·产业转移的驱动力', text: '<strong>产业转移的核心驱动力是「成本与市场的再平衡」：</strong>① 转出地劳动力、土地、环保成本上升，原有产业利润变薄；② 承接地有更便宜的要素、优惠政策、广阔市场；③ 企业为了降本增效主动布局。此外，产业结构调整（转出地腾笼换鸟）和政策引导也起推动作用。记住「成本推、条件拉」六个字。' },
      { type: 'heading', text: '二、影响产业转移的因素' },
      { type: 'paragraph', text: '推动产业转出的因素叫「推力」：工资上涨、地价高、环保严、资源紧。吸引产业转入的因素叫「拉力」：廉价劳动力、低价土地、税收优惠、市场近、基础设施改善。企业会在综合比较后选择最有利的落点。' },
      { type: 'list', items: ['推力：成本升、管制严、资源紧', '拉力：要素廉、政策优、市场近', '劳动力与地价往往是最直接诱因', '市场与产业链配套也越来越关键'] },
      { type: 'table', headers: ['因素类型', '具体表现', '例子'], rows: [['推力', '工资地价上涨', '沿海工厂外迁'], ['推力', '环保标准提高', '高污染企业迁出'], ['拉力', '廉价劳动力', '中西部承接代工'], ['拉力', '政策优惠', '开发区税收减免']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">产业转移的推力与拉力</text><rect x="40" y="60" width="290" height="190" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="185" y="95" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">推力（转出地）</text><text x="185" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">成本升、管制严</text><text x="185" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">资源环境紧约束</text><rect x="350" y="60" width="290" height="190" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="495" y="95" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">拉力（承接地）</text><text x="495" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">要素廉、政策优</text><text x="495" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">市场近、配套好</text><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">推力把产业推出，拉力把产业引入，双向合力。</text></svg>', caption: '图2　转出地的推力与承接地的拉力共同促成产业转移。' },
      { type: 'example', label: '例题·因素判断', text: '题目：改革开放后，大量劳动密集型工厂从香港、台湾迁到珠三角，主要因为珠三角什么优势？<br>解析：珠三角当时拥有大量廉价劳动力、低廉地价，又紧邻港澳便于出口，政策上设特区给予优惠，这些「拉力」显著低于港台高企的成本。企业迁来后既降成本又近市场，所以劳动密集型产业大规模转入珠三角。本题关键在识别承接地的低成本与市场优势这一拉力。' },
      { type: 'heading', text: '三、转移的影响' },
      { type: 'paragraph', text: '对转出地：腾出空间发展高端产业，促进产业升级，但也可能造成阶段性失业和产业空心化。对承接地：增加就业、加快工业化与城镇化、提升产业水平，但若承接的是高污染产业，也会带来环境压力。总体上有利于区域分工与协调。' },
      { type: 'warn', label: '易错·影响要分两端', text: '① 分析影响必须区分转出地与承接地，两端作用相反又互补，只写一端会丢分；② 承接地并非「来者不拒」——若盲目承接淘汰的高污染产业，会牺牲环境，所以现在强调「择优承接、绿色承接」。考题常把转移单纯写成「双赢」，要注意转出地的失业与承接地的污染风险。' },
      { type: 'tip', label: '提示·影响双栏法', text: '产业转移影响用双栏：转出地写「腾空间、促升级、防空心」；承接地写「增就业、快工业化、提水平、防污染」。再加一句「优化全国分工」，答案就稳。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">产业转移的双向影响</text><rect x="40" y="60" width="290" height="190" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="185" y="95" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">转出地</text><text x="185" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">腾空间促升级</text><text x="185" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">防产业空心化</text><rect x="350" y="60" width="290" height="190" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="495" y="95" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">承接地</text><text x="495" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">增就业快工业化</text><text x="495" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">择优防污染</text><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">两端互补，整体上优化区域分工与协调。</text></svg>', caption: '图3　转出地升级、承接地发展，双向影响互补。' },
      { type: 'heading', text: '四、我国产业转移的实践' },
      { type: 'paragraph', text: '我国呈现「沿海→内陆」「东→中→西」的国内转移趋势，同时部分产业向东南亚等海外转移。国家通过中西部承接产业转移示范区、共建园区等引导有序转移，既帮转出地升级，又带承接地发展，是促进区域协调的重要手段。' },
      { type: 'list', items: ['趋势：沿海向中西部梯度转移', '方式：共建产业园、飞地经济', '导向：择优承接、绿色承接', '目标：缩小区域差距、协调发展'] },
      { type: 'example', label: '例题·综合应用', text: '题目：中西部在承接东部产业转移时应注意什么？<br>解析：中西部应抓住机遇，但要坚持择优和绿色承接：优先引入技术较先进、带动性强的产业，避免照单全收被淘汰的高污染项目；同时完善交通、用工、配套等营商环境，与东部共建园区实现互利。对东部而言则趁机腾笼换鸟、发展高端制造与服务业。这样转移才能既缩小区域差距，又不付出过重环境代价。' }
    ],
    exercises: [
      { type: 'choice', question: '推动产业从发达地区转出的主要「推力」是？', options: ['劳动力与地价上涨、环保变严', '市场突然消失', '政策强制全部关停', '交通完全中断'], answer: '劳动力与地价上涨、环保变严', explanation: '产业转出的推力来自转出地自身条件变化：经济发展后工资、地价上涨，环保标准提高，资源环境约束趋紧，使原有劳动密集或高耗能产业利润下降，企业被迫外迁。市场消失、政策全关、交通中断都不是普遍情况，且不符合产业梯度转移的实际逻辑。因此主要推力是成本上升与管制变严。' },
      { type: 'choice', question: '劳动密集型产业从港台迁往珠三角，关键「拉力」是？', options: ['珠三角成本更低、政策优惠且近市场', '珠三角工资比港台高', '珠三角拒绝外资', '珠三角资源已枯竭'], answer: '珠三角成本更低、政策优惠且近市场', explanation: '改革开放初期珠三角拥有大量廉价劳动力、低廉地价，又紧邻港澳便于出口，并设特区给予税收等优惠，这些拉力远低于港台高企的成本，企业迁入既降本又近市场。工资比港台高、拒绝外资、资源枯竭都与事实相反，也不构成吸引产业转入的条件。所以关键拉力是低成本加优惠政策加近市场。' },
      { type: 'choice', question: '关于产业转移的影响，下列说法合理的是？', options: ['只利好承接地', '只利好转出地', '两端影响不同且需防风险', '对区域协调毫无作用'], answer: '两端影响不同且需防风险', explanation: '产业转移对转出地是腾空间促升级但需防空心化与失业，对承接地是增就业快工业化但需防污染，两端影响不同且各有风险，并非只利好一方，也不是毫无协调作用。正确看法是两端影响不同且都需防范风险，总体上利于优化区域分工。因此选该项。' },
      { type: 'fill', question: '产业转移中，转出地的「推力」包括成本上升、管制变严，承接地的「___」包括要素廉价、政策优惠、市场就近。', answer: '拉力', explanation: '产业转移由两端力量共同驱动：转出地因工资地价上涨、环保变严形成把产业「推出去」的推力；承接地因劳动力便宜、土地低价、税收优惠、靠近市场形成把产业「拉进来」的拉力。企业综合比较成本与市场后选址，推力与拉力合力促成转移。答题时要把两端因素区分清楚。' },
      { type: 'fill', question: '我国产业转移呈现「沿海向___」「东向中西部地区」的梯度转移趋势，有利于促进区域协调发展。', answer: '内陆（或中西部）', explanation: '受成本与政策引导，我国产业从沿海向内陆、从东部向中西部梯度转移：东部腾出空间发展高端产业，中西部获得就业与工业化机遇。国家还通过承接产业转移示范区、共建园区引导有序转移，既帮转出地升级又带承接地发展，是缩小区域差距、促进协调的重要手段。' }
    ]
  });
})();
