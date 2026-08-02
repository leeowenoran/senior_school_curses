/* ============================================================
 * 高一化学 · 必修 第二册 · 第六章 化学反应与能量
 * 课时11：化学反应的限度
 * 数据注入：chemistry.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u11',
    name: '化学反应的限度',
    chapter: '必修 第二册 · 第六章 化学反应与能量',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、反应能"进行到底"吗' },
      { type: 'paragraph', text: '初中我们写反应常常画一个箭头"→"，好像反应物全部变成生成物。但真实世界里，很多反应并不能完全进行。比如把氢气和碘蒸气混在一起，它们会生成碘化氢，但碘化氢同时也会分解回氢气和碘。这种"既能正向进行、又能逆向进行"的反应，叫可逆反应。' },
      { type: 'keypoint', label: '重点·可逆反应', text: '<strong>在同一条件下，既能向正方向进行、又能向逆方向进行的反应叫可逆反应，用符号 ⇌ 表示。</strong>例如 H₂ + I₂ ⇌ 2HI。可逆反应不能进行到底，无论等多久，反应物都不会百分之百变成生成物，反应物和生成物会同时存在。' },
      { type: 'paragraph', text: '要注意：只有"同一条件、正逆同时"才叫可逆反应。像 electrolysis 水生成氢气和氧气（要通电），而氢气氧气点燃生成水（要点火），条件不同，就不算可逆反应。可逆反应的标志就是那个双向的 ⇌ 符号。' },
      { type: 'list', items: ['可逆反应用 ⇌ 表示，正逆反应在同一条件下同时进行', '可逆反应不能进行到底，反应物与生成物长期共存', '电解水与燃烧水方向相反但条件不同，不属于可逆反应'] },
      { type: 'heading', text: '二、什么是化学平衡状态' },
      { type: 'paragraph', text: '随着可逆反应进行，反应物不断消耗、浓度下降，正反应速率变慢；生成物不断积累、浓度上升，逆反应速率变快。当某一刻正反应速率和逆反应速率相等时，看起来各物质的浓度就不再变化了——这时反应达到了"化学平衡状态"，简称平衡。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">可逆反应：浓度随时间变化的曲线</text><line x1="90" y1="60" x2="90" y2="250" stroke="#b5651d" stroke-width="2"/><line x1="90" y1="250" x2="620" y2="250" stroke="#b5651d" stroke-width="2"/><path d="M90,90 Q250,90 400,150 T620,195" fill="none" stroke="#d98e3a" stroke-width="3"/><path d="M90,250 Q250,250 400,200 T620,195" fill="none" stroke="#b5651d" stroke-width="3"/><text x="200" y="80" font-size="12" fill="#d98e3a" text-anchor="middle">反应物浓度下降</text><text x="200" y="245" font-size="12" fill="#b5651d" text-anchor="middle">生成物浓度上升</text><line x1="400" y1="60" x2="400" y2="250" stroke="#4a3724" stroke-width="1" stroke-dasharray="5,4"/><text x="410" y="72" font-size="12" fill="#4a3724" text-anchor="middle">两线汇合 → 达到平衡</text><text x="90" y="275" font-size="12" fill="#4a3724" text-anchor="middle">时间</text></svg>', caption: '图1　可逆反应中，反应物浓度下降、生成物浓度上升，最终两线趋于水平且重合，表示达到平衡状态。' },
      { type: 'keypoint', label: '重点·平衡特征', text: '<strong>化学平衡的本质特征是 v正 = v逆（正逆反应速率相等）。</strong>达到平衡时：①各物质的浓度不再随时间变化；②反应并没有停止，正逆反应仍在进行，只是"进多少出多少"，所以是<strong>动态平衡</strong>；③平衡是在一定条件下的，条件变了平衡可能移动。' },
      { type: 'table', headers: ['特征', '含义', '说明'], rows: [['逆', '研究的是可逆反应', '不可逆反应谈不上平衡'], ['等', 'v正 = v逆', '这是平衡的根本标志'], ['定', '各组分浓度不变', '宏观看起来"静止"'], ['动', '反应仍在进行', '是动态平衡，不是停止'], ['变', '条件改变平衡移动', '平衡是相对的、可变的']] },
      { type: 'heading', text: '三、怎样判断反应达到了平衡' },
      { type: 'paragraph', text: '做题时常要判断一个可逆反应"是否达到平衡"。最可靠的两类标志：一是速率标志，v正 = v逆（或某物质消耗速率等于生成速率）；二是浓度标志，各组分的浓度（或含量）不再改变。若题干中各组分的"量"还随时间变化，就说明没平衡。' },
      { type: 'example', label: '例题·平衡判断', text: '对于可逆反应 N₂ + 3H₂ ⇌ 2NH₃，下列能说明达到平衡的是？<br>A. 正反应停止了<br>B. N₂ 的消耗速率等于 N₂ 的生成速率<br>C. 反应容器内分子总数一直不变<br>D. 各物质浓度相等<br><br><strong>解析</strong>：平衡是动态平衡，正反应并未停止，A 错。<strong>N₂ 的消耗速率（正）等于生成速率（逆），即 v正 = v逆</strong>，这是平衡的根本标志，B 对。该反应前后气体分子数不等，但分子总数不变可能出现在任意时刻并不专属平衡，C 不准确。浓度"相等"不是平衡条件，平衡只要求"不再变化"，D 错。故选 B。' },
      { type: 'warn', label: '易错·平衡不是停止', text: '很多同学以为"平衡了就是反应停了"，这是错的。<strong>化学平衡是动态平衡：正反应和逆反应都还在进行，只是速率相等，所以各物质浓度不变。</strong>就像进电影院的人数和出场人数相等时，场内人数不变，但进出动作从未停止。用"v正 = v逆"而非"反应停止"来判断平衡。' },
      { type: 'list', items: ['速率标志：v正 = v逆，或某物质消耗速率等于其生成速率', '浓度标志：各组分浓度（或质量分数）不再随时间变化', '注意"相等"和"不变"不同：平衡要求浓度不变，不要求浓度相等', '反应仍在进行，属于动态平衡'] },
      { type: 'heading', text: '四、转化率：反应进行到什么程度' },
      { type: 'paragraph', text: '既然反应不能进行到底，我们就用"转化率"来衡量它到底进行得有多彻底。转化率表示：开始放进来的反应物里，有多少比例真正变成了生成物。转化率越高，说明反应越完全、原料利用越充分。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">转化率：已反应的部分占起始总量的比例</text><rect x="60" y="110" width="240" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="140" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">起始总量 100%</text><text x="180" y="172" font-size="12" fill="#4a3724" text-anchor="middle">放进反应物的全部</text><rect x="380" y="110" width="240" height="90" rx="10" fill="#d98e3a"/><text x="500" y="140" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">已转化部分</text><text x="500" y="172" font-size="12" fill="#ffffff" text-anchor="middle">转化率 = 这部分 ÷ 总量</text><line x1="300" y1="155" x2="380" y2="155" stroke="#b5651d" stroke-width="3"/><polygon points="380,155 370,149 370,161" fill="#b5651d"/><text x="340" y="250" font-size="13" fill="#d98e3a" text-anchor="middle">剩下的未反应部分，就是反应限度所在</text></svg>', caption: '图2　转化率 = 已转化的反应物量 ÷ 起始反应物总量 × 100%，表示反应进行到什么程度。' },
      { type: 'keypoint', label: '重点·转化率公式', text: '<strong>转化率 = (已转化的反应物量 ÷ 起始的反应物量) × 100%。</strong>可以用物质的量、浓度或质量来计算，只要"同一物理量、同一种物质"前后对应即可。例如起始加 2 mol A，平衡时剩 0.5 mol A，则转化了 1.5 mol，转化率 = 1.5 ÷ 2 × 100% = 75%。转化率越高，原料利用越充分。' },
      { type: 'heading', text: '五、条件改变，平衡会移动' },
      { type: 'paragraph', text: '平衡不是死板的，条件一变它就会"搬家"，这叫平衡移动。勒夏特列原理告诉我们：如果改变影响平衡的一个条件（如浓度、温度、压强），平衡就向着能够减弱这种改变的方向移动。比如增大反应物浓度，平衡就向右（生成物方向）移动，多消耗一点反应物。' },
      { type: 'tip', label: '提示·勒夏特列原理', text: '勒夏特列原理可以记成"哪里受压往哪躲"：升温，平衡向吸热方向移动；增大某反应物浓度，平衡向消耗它的方向移动；增大气体压强，平衡向气体分子数少的方向移动。它只告诉我们移动方向，不告诉我们快慢——快慢由上一节讲的速率因素决定。' },
      { type: 'warn', label: '易错·催化剂不改变平衡', text: '<strong>催化剂只能同等加快正、逆反应速率，使平衡更快到达，但不能改变平衡的位置，也就是不能提高转化率。</strong>想提高转化率要靠改变浓度、温度或压强等条件让平衡移动，而不是加催化剂。这是考试高频易错点，务必分清"速率"和"限度"是两个不同的概念。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">平衡移动：条件改变后平衡"搬家"</text><rect x="50" y="90" width="160" height="130" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="130" y="125" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">原平衡</text><text x="130" y="155" font-size="12" fill="#4a3724" text-anchor="middle">v正 = v逆</text><rect x="260" y="90" width="160" height="130" rx="10" fill="#d98e3a"/><text x="340" y="125" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">改变条件</text><text x="340" y="155" font-size="12" fill="#ffffff" text-anchor="middle">如升温/加料</text><rect x="470" y="90" width="160" height="130" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="550" y="125" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">新平衡</text><text x="550" y="155" font-size="11" fill="#4a3724" text-anchor="middle">v正新 = v逆新</text><line x1="210" y1="155" x2="260" y2="155" stroke="#b5651d" stroke-width="3"/><line x1="420" y1="155" x2="470" y2="155" stroke="#b5651d" stroke-width="3"/><text x="340" y="260" font-size="12" fill="#d98e3a" text-anchor="middle">平衡向减弱改变的方向移动，但催化剂只提速不改变位置</text></svg>', caption: '图3　改变条件后，原平衡被打破并向减弱该改变的方向移动，最终建立新的平衡。' },
      { type: 'example', label: '例题·转化率计算', text: '反应开始时加入 A 物质 2.0 mol，达到平衡时剩余 A 0.4 mol，则 A 的转化率为？<br>A. 20%　B. 40%　C. 80%　D. 100%<br><br><strong>解析</strong>：已转化的 A = 起始 2.0 mol − 剩余 0.4 mol = 1.6 mol。转化率 = (1.6 ÷ 2.0) × 100% = <strong>80%</strong>。所以选 C。注意转化率是"已反应的量除以起始量"，不是除以剩余量；剩余越少说明转化越彻底、转化率越高。' }
    ],
    exercises: [
      { type: 'choice', question: '关于可逆反应，下列说法正确的是？', options: ['可逆反应能进行到底', '可逆反应的正逆反应在不同条件下进行', '可逆反应不能进行到底，反应物与生成物共存', '只有用 → 表示的反应才是可逆反应'], answer: '可逆反应不能进行到底，反应物与生成物共存', explanation: '可逆反应在同一条件下既能正向又能逆向进行，用 ⇌ 表示，它不能进行到底，无论多长时间反应物都不会完全转化为生成物，反应物和生成物会长期共存。第一项错误；正逆反应必须在同一条件下才是可逆反应，第二项错；可逆反应用 ⇌ 而非 →，第四项错。因此只有第三项正确。' },
      { type: 'choice', question: '化学平衡的根本特征是？', options: ['反应停止了', 'v正 = v逆', '各物质浓度相等', '反应物全部耗尽'], answer: 'v正 = v逆', explanation: '化学平衡的本质标志是正反应速率等于逆反应速率（v正 = v逆），此时各组分浓度不再变化。但平衡是动态平衡，反应并未停止，所以"反应停止"错；平衡只要求浓度"不变"，不要求"相等"，所以浓度相等错；可逆反应不能把反应物耗尽，第四项也错。故根本特征是 v正 = v逆。' },
      { type: 'choice', question: '下列条件改变时，不能提高反应物转化率的是？', options: ['增大反应物浓度使平衡右移', '升高温度使平衡向吸热方向移动', '增大气体压强使平衡向分子数少方向移动', '加入催化剂'], answer: '加入催化剂', explanation: '转化率属于"反应限度"问题，由平衡位置决定。增大反应物浓度、升温使平衡向吸热方向移动、增压使平衡向气体分子数少方向移动，都可能让平衡移动从而提高转化率。但催化剂同等加快正逆反应速率，只能让平衡更快到达，不改变平衡位置，因此不能提高转化率。这是速率与限度两个概念的关键区别。' },
      { type: 'fill', question: '对于可逆反应，当达到化学平衡时，正反应速率与逆反应速率___（填"相等"或"不相等"），但反应仍在进行。', answer: '相等', explanation: '化学平衡的根本标志是正反应速率等于逆反应速率，即 v正 = v逆。此时各物质的浓度不再随时间变化，但正、逆反应仍在进行，属于动态平衡。所以达到平衡时两者相等，而不是停止或不再变化速率本身。填空应填"相等"。' },
      { type: 'fill', question: '某反应起始加入反应物 4.0 mol，平衡时剩余 1.0 mol，则该反应物的转化率为___%。', answer: '75', explanation: '转化率 = (已转化的量 ÷ 起始量) × 100%。已转化量 = 4.0 − 1.0 = 3.0 mol，转化率 = (3.0 ÷ 4.0) × 100% = 75%。所以答案为 75。注意用"已反应量"除以"起始量"，不是除以剩余量，也不是用生成物量直接算。' }
    ]
  });
})();
