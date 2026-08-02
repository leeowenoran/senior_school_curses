/* ============================================================
 * 高二化学 · 选择性必修1 化学反应原理 · 第二章 化学反应速率与化学平衡
 * 课时6：化学平衡状态
 * 数据注入：chemistry.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u6',
    name: '化学平衡状态',
    chapter: '选择性必修1 化学反应原理 · 第二章 化学反应速率与化学平衡',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、可逆反应' },
      { type: 'paragraph', text: '很多反应在同样条件下既能向正方向走、又能向反方向走，比如氮气和氢气合成氨的同时，氨也在分解成氮气和氢气。这种在同一条件下既向正反应方向又向逆反应方向进行的反应，叫可逆反应，书写时用双向箭头 ⇌ 表示。可逆反应的最大特点是：它永远不能"进行到底"，反应物总会有剩余。' },
      { type: 'keypoint', label: '重点·可逆反应的特点', text: '<strong>可逆反应在同一条件下正逆反应同时进行，不能进行到底，反应物与生成物长期共存。</strong>用 ⇌ 而非 → 表示。理解可逆反应是理解"化学平衡"的前提，因为平衡只出现在可逆反应里。' },
      { type: 'list', items: ['正反应和逆反应在同一条件下同时进行', '反应不能进行到底，反应物总有剩余', '用双向箭头 ⇌ 表示', '反应物与生成物在体系中长期共存'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">可逆反应：正逆两个方向同时进行</text><rect x="70" y="90" width="200" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="170" y="120" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">反应物</text><rect x="410" y="90" width="200" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="510" y="120" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">生成物</text><line x1="270" y1="105" x2="410" y2="105" stroke="#d98e3a" stroke-width="2"/><line x1="410" y1="125" x2="270" y2="125" stroke="#b5651d" stroke-width="2"/><text x="340" y="98" font-size="12" fill="#d98e3a" text-anchor="middle">正反应 v正</text><text x="340" y="142" font-size="12" fill="#b5651d" text-anchor="middle">逆反应 v逆</text><text x="340" y="210" font-size="12" fill="#4a3724" text-anchor="middle">双向箭头 ⇌ 表示同一条件下两方向并存</text></svg>', caption: '图1　可逆反应里反应物变生成物的同时，生成物也在变回反应物，两方向用双向箭头 ⇌ 表示。' },
      { type: 'heading', text: '二、可逆反应为什么会"停"下来' },
      { type: 'paragraph', text: '反应刚开始时，反应物浓度最大，正反应速率 v正 很大，而生成物很少，逆反应速率 v逆 几乎为零。随着反应进行，反应物被消耗、v正 慢慢减小，生成物增多、v逆 慢慢变大。当某一时刻 v正 恰好等于 v逆，表面上各物质浓度不再变化，我们就说反应"达到平衡"了。' },
      { type: 'keypoint', label: '重点·平衡的根本标志', text: '<strong>化学平衡的根本标志是 v正 = v逆 ≠ 0。</strong>注意等号右边不是 0：正逆反应都还在进行，只是快慢一样，进多少出多少，浓度才显得不变。这正是平衡"看起来停了其实没停"的原因。' },
      { type: 'example', label: '例题·判断平衡', text: '对于可逆反应 N₂ + 3H₂ ⇌ 2NH₃，下列说法能说明达到平衡的是？<br>A. 正反应停止<br>B. N₂ 的消耗速率等于 NH₃ 的生成速率<br>C. N₂ 的消耗速率等于 N₂ 的生成速率<br>D. 反应完全停止<br><br><strong>解析</strong>：平衡时 v正 = v逆 ≠ 0，反应并未停止。对 N₂ 而言，"消耗速率"是正反应、"生成速率"是逆反应，二者相等即 v正(N₂)=v逆(N₂)，正是平衡标志，选 C。A、D 错在"停止"，B 错在把不同物质速率直接等同（应换算成同一物质）。' },
      { type: 'warn', label: '易错·平衡是动态的不是死的', text: '最常犯的错误是以为平衡时"反应停了"。<strong>平衡是动态平衡：正逆反应都在进行，只是速率相等，所以各物质浓度不变。</strong>若真把速率想成 0 就错了，那是反应"结束"而不是"平衡"。记住口诀："动了才平衡，等了就不现（浓度不变）。"' },
      { type: 'list', items: ['逆：只有可逆反应才存在平衡', '等：v正 = v逆 ≠ 0', '动：动态平衡，反应仍在进行', '定：平衡时各组分浓度保持一定', '变：条件改变，平衡会移动'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">速率-时间图：v正 与 v逆 逐渐相等</text><line x1="70" y1="50" x2="70" y2="240" stroke="#b5651d" stroke-width="2"/><line x1="70" y1="240" x2="620" y2="240" stroke="#b5651d" stroke-width="2"/><text x="350" y="262" font-size="13" fill="#4a3724" text-anchor="middle">时间 t</text><line x1="70" y1="90" x2="400" y2="170" stroke="#d98e3a" stroke-width="3"/><line x1="70" y1="240" x2="400" y2="170" stroke="#b5651d" stroke-width="3"/><line x1="400" y1="170" x2="600" y2="170" stroke="#4a3724" stroke-width="2" stroke-dasharray="6 4"/><text x="200" y="120" font-size="12" fill="#d98e3a" text-anchor="middle">v正 下降</text><text x="200" y="225" font-size="12" fill="#b5651d" text-anchor="middle">v逆 上升</text><text x="500" y="160" font-size="12" fill="#4a3724" text-anchor="middle">交点=平衡</text></svg>', caption: '图2　反应开始后 v正 不断减小、v逆 不断增大，两者相等那一刻起体系进入平衡状态，此后平行前进。' },
      { type: 'heading', text: '三、化学平衡的五大特征' },
      { type: 'paragraph', text: '把平衡的特点浓缩成五个字最好记：逆、等、动、定、变。"逆"指对象是可逆反应；"等"指 v正=v逆；"动"指动态平衡；"定"指平衡时各组分浓度（或质量分数）保持不变；"变"指一旦外界条件改变，原有的平衡就被打破、会建立新平衡。' },
      { type: 'keypoint', label: '重点·五字诀', text: '<strong>逆、等、动、定、变</strong>：逆（可逆反应）、等（v正=v逆）、动（动态平衡）、定（组分浓度一定）、变（条件变则平衡移）。这五字把"什么是平衡、平衡长什么样、会不会变"全概括了，是判断和描述平衡的总纲。' },
      { type: 'table', headers: ['特征字', '含义', '说明'], rows: [['逆', '可逆反应', '不可逆反应无平衡可言'], ['等', 'v正 = v逆 ≠ 0', '速率相等且不为零'], ['动', '动态平衡', '正逆反应仍在进行'], ['定', '浓度保持不变', '各组分的量、分数一定'], ['变', '条件改变则移动', '平衡是相对的、可移动的']] },
      { type: 'heading', text: '四、怎样判断达到平衡' },
      { type: 'paragraph', text: '最直接的判据就是"v正 = v逆"，比如同一物质消耗速率等于生成速率，或不同物质速率之比等于计量数比且方向相反。间接判据是"变量不变"：一个本来会变化的量（如某组分浓度、气体总压强、混合气体平均相对分子质量、颜色深浅）若不再随时间变了，就说明到达平衡。' },
      { type: 'example', label: '例题·间接标志判断', text: '恒温恒容下反应 2NO₂ ⇌ N₂O₄，混合气体颜色不再变化时，能否说明平衡？<br><br><strong>解析</strong>：NO₂ 是红棕色气体，N₂O₄ 无色。颜色深浅由 c(NO₂) 决定。颜色不再变化，说明 c(NO₂) 不再变，符合"变量不变"的间接标志，可判定达到平衡。这类"颜色不变""压强不变"等，关键看它是否本来就是变量。' },
      { type: 'warn', label: '易错·压强密度不一定能用', text: '<strong>不是所有"不变"都算平衡标志。</strong>若反应前后气体分子总数不变（如 H₂ + I₂ ⇌ 2HI），恒温恒容下总压强本来就始终不变，压强不变不能说明平衡；只有那些"本来会变、现在不变"的量才能作判据。密度、平均相对分子质量也要先看反应前后是否变化再判断。' },
      { type: 'tip', label: '提示', text: '判断平衡两步法：先看是不是可逆反应（前提）；再找"变量"——这个量在平衡前随时间变、平衡后不变，它就可靠。浓度、分数、颜色这类几乎总是变量；而总压强、总体积、总质量要看反应前后计量数、状态是否变化，变化的才可用。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">浓度-时间图：平衡后各物质浓度不再变化</text><line x1="70" y1="50" x2="70" y2="240" stroke="#b5651d" stroke-width="2"/><line x1="70" y1="240" x2="620" y2="240" stroke="#b5651d" stroke-width="2"/><text x="350" y="262" font-size="13" fill="#4a3724" text-anchor="middle">时间 t</text><line x1="70" y1="80" x2="380" y2="160" stroke="#d98e3a" stroke-width="3"/><line x1="380" y1="160" x2="600" y2="160" stroke="#d98e3a" stroke-width="3"/><line x1="70" y1="220" x2="380" y2="120" stroke="#b5651d" stroke-width="3"/><line x1="380" y1="120" x2="600" y2="120" stroke="#b5651d" stroke-width="3"/><text x="200" y="130" font-size="12" fill="#d98e3a" text-anchor="middle">反应物下降</text><text x="200" y="180" font-size="12" fill="#b5651d" text-anchor="middle">生成物上升</text><text x="500" y="100" font-size="12" fill="#4a3724" text-anchor="middle">平台=浓度恒定</text></svg>', caption: '图3　达到平衡后，反应物浓度曲线与生成物浓度曲线都变成水平线，说明各物质浓度不再随时间改变。' }
    ],
    exercises: [
      { type: 'choice', question: '化学平衡状态的本质是？', options: ['反应完全停止', '正逆反应速率相等且不为零的动态平衡', '只有正反应在进行', '只有逆反应在进行'], answer: '正逆反应速率相等且不为零的动态平衡', explanation: '化学平衡只出现在可逆反应中，其本质是 v正 = v逆 ≠ 0。此时正逆反应都仍在进行（动态），只是消耗的速率等于生成的速率，各物质浓度不再变化。它不是反应停止，也不是只进行单一方向，所以"正逆反应速率相等且不为零的动态平衡"才准确。' },
      { type: 'choice', question: '可逆反应达到化学平衡时，混合物中各物质的浓度？', options: ['都变为零', '不再随时间变化', '彼此完全相等', '持续不断增大'], answer: '不再随时间变化', explanation: '平衡时 v正=v逆，进和出一样快，所以每种物质的浓度都保持恒定，不再随时间改变。但恒定不等于"都为零"或"彼此相等"，各物质仍有各自确定的浓度值；也不是一直在增大。看清"不变"二字是平衡的关键特征。' },
      { type: 'choice', question: '达到化学平衡后，反应是否停止？', options: ['完全停止', '正逆反应仍在进行，速率相等', '只进行正反应', '只进行逆反应'], answer: '正逆反应仍在进行，速率相等', explanation: '平衡是动态平衡，正反应和逆反应都没有停止，只是两者的速率相等，导致宏观上各物质浓度不变。说"完全停止"是最大误区，平衡时分子层面的反应一刻未停，因此选"正逆反应仍在进行，速率相等"。' },
      { type: 'fill', question: '化学平衡的根本标志是：正反应速率___逆反应速率（填"等于""大于"或"小于"），且两者都不为零。', answer: '等于', explanation: '化学平衡的根本判据就是 v正 = v逆 ≠ 0，即正逆反应速率相等且都不为零。这是动态平衡的核心：速率相等所以浓度不变，不为零所以反应仍在进行。填空应填"等于"，并牢记"≠0"这个常被忽略的条件。' },
      { type: 'fill', question: '化学平衡是一种___平衡（填"动态"或"静态"），因为达到平衡时正逆反应仍在进行。', answer: '动态', explanation: '由于平衡时 v正=v逆≠0，正反应和逆反应都在持续发生，只是相互抵消，宏观上浓度不变，所以称为动态平衡而非静态平衡。这是化学平衡最重要的属性，"动了才平衡"是理解后续平衡移动的基础。' }
    ]
  });
})();
