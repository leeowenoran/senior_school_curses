/* 生物学 · 必修1 分子与细胞 · 第4章 · 课时：第3节 物质跨膜运输的方式 */
(function () {
  var v = gzGetVolume('biology', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u13',
    name: '第3节 物质跨膜运输的方式',
    chapter: '必修1 分子与细胞 · 第4章 细胞的物质输入和输出',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、被动运输：顺浓度梯度，不消耗能量' },
      { type: 'paragraph', text: '物质顺浓度梯度（从高浓度一侧向低浓度一侧）跨膜运输、不需要消耗细胞代谢能量的方式，统称为<strong>被动运输</strong>。它又分自由扩散和协助扩散两类。' },
      { type: 'list', items: ['自由扩散：物质直接穿过磷脂双分子层，不需载体、不耗能（如 O₂、CO₂、甘油、乙醇、水）', '协助扩散：物质借助膜上载体蛋白顺浓度通过，需载体、不耗能（如葡萄糖进入红细胞）'] },
      { type: 'paragraph', text: '自由扩散的物质通常小且脂溶性强，能直接溶解在磷脂双分子层里穿过；协助扩散的物质较大或带电，需要载体蛋白帮忙才能通过，但都不消耗 ATP。' },
      { type: 'keypoint', label: '重点·被动运输共同点', text: '<strong>自由扩散和协助扩散都顺浓度梯度进行，都不消耗细胞代谢产生的能量（ATP）。</strong>二者的唯一区别是是否需要载体蛋白协助。浓度差越大，被动运输速率越快；协助扩散还受载体数量限制，达到饱和后速率不再增加。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 自由扩散与协助扩散</text><rect x="80" y="70" width="200" height="20" fill="#3f7d1e"/><text x="180" y="60" font-size="13" fill="#2e3a22" text-anchor="middle">自由扩散</text><text x="40" y="120" font-size="13" fill="#2e3a22" text-anchor="middle">高浓度</text><circle cx="120" cy="125" r="10" fill="#5aa832"/><circle cx="150" cy="155" r="10" fill="#5aa832"/><polygon points="220,130 260,118 260,142" fill="#3f7d1e"/><text x="300" y="120" font-size="13" fill="#2e3a22" text-anchor="middle">低浓度</text><text x="180" y="205" font-size="12" fill="#2e3a22" text-anchor="middle">不需载体、不耗能</text><rect x="400" y="70" width="200" height="20" fill="#3f7d1e"/><rect x="490" y="60" width="20" height="60" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="55" font-size="13" fill="#2e3a22" text-anchor="middle">协助扩散</text><text x="420" y="120" font-size="13" fill="#2e3a22" text-anchor="middle">高浓度</text><circle cx="450" cy="125" r="10" fill="#5aa832"/><polygon points="520,130 560,118 560,142" fill="#3f7d1e"/><text x="600" y="120" font-size="13" fill="#2e3a22" text-anchor="middle">低浓度</text><text x="500" y="205" font-size="12" fill="#2e3a22" text-anchor="middle">需载体、不耗能</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">两者都顺浓度梯度进行，区别在是否需要载体蛋白协助。</text></svg>', caption: '图1　自由扩散不需载体，协助扩散需载体，二者都不消耗能量。' },
      { type: 'heading', text: '二、主动运输：逆浓度梯度，消耗能量' },
      { type: 'paragraph', text: '有些物质（如小肠吸收葡萄糖和氨基酸、根细胞吸收矿质离子）是从低浓度一侧运到高浓度一侧，这种方式叫<strong>主动运输</strong>。它能逆浓度梯度进行，必须消耗能量并借助载体蛋白。' },
      { type: 'list', items: ['方向：从低浓度一侧运输到高浓度一侧（逆浓度梯度）', '条件：需要载体蛋白协助，需要消耗能量（主要来自 ATP）', '意义：保证活细胞按需要选择性吸收营养、排出废物'] },
      { type: 'warn', label: '易错·主动运输也需载体', text: '主动运输<strong>既需要载体蛋白，又消耗能量</strong>。很多同学只记得它耗能、逆浓度，却忘了它同样依赖载体，因此也受载体数量限制。与协助扩散相比，二者都需载体，区别在于主动运输逆浓度且耗能。' },
      { type: 'example', label: '例题·运输方式判断', text: '海带细胞中的碘浓度比海水高很多，却仍能源源不断吸收碘，这说明碘进入海带细胞的方式是？<br>答：碘从低浓度海水进入高浓度的海带细胞，是逆浓度梯度运输，需要载体蛋白并消耗能量，属于主动运输。这也体现了细胞按自身需要选择性吸收物质的特点。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 主动运输（逆浓度梯度）</text><rect x="310" y="60" width="20" height="160" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="55" font-size="13" fill="#2e3a22" text-anchor="middle">载体蛋白</text><text x="160" y="145" font-size="13" fill="#2e3a22" text-anchor="middle">低浓度侧</text><text x="520" y="145" font-size="13" fill="#2e3a22" text-anchor="middle">高浓度侧</text><circle cx="170" cy="150" r="12" fill="#5aa832"/><circle cx="200" cy="150" r="12" fill="#5aa832"/><polygon points="330,155 370,143 370,167" fill="#3f7d1e"/><circle cx="500" cy="150" r="12" fill="#5aa832"/><text x="430" y="200" font-size="12" fill="#5aa832" font-weight="bold" text-anchor="middle">耗能 逆梯度</text><text x="340" y="265" font-size="13" fill="#2e3a22" text-anchor="middle">主动运输需载体蛋白协助并消耗能量，将物质从低浓度一侧运到高浓度一侧。</text></svg>', caption: '图2　主动运输逆浓度梯度，需载体并消耗能量（ATP）。' },
      { type: 'heading', text: '三、胞吞与胞吐：大分子物质的运输' },
      { type: 'paragraph', text: '蛋白质、多糖等大分子物质无法直接穿过磷脂双分子层，细胞通过<strong>囊泡</strong>来运输它们。大分子附着在膜表面，膜内陷形成小囊将其包裹进入细胞，叫<strong>胞吞</strong>（如白细胞吞噬病菌、变形虫取食）。' },
      { type: 'paragraph', text: '细胞需要向外分泌大分子时，先在细胞内形成囊泡，囊泡移动到细胞膜并与之融合，把内容物排到细胞外，叫<strong>胞吐</strong>（如分泌蛋白、神经递质的释放）。胞吞胞吐都依赖膜的流动性，消耗能量，但不属于跨膜运输。' },
      { type: 'table', headers: ['方式', '方向', '是否需载体', '是否耗能', '实例'], rows: [['自由扩散', '顺浓度', '不需', '不耗能', 'O₂、CO₂、水'], ['协助扩散', '顺浓度', '需', '不耗能', '葡萄糖进红细胞'], ['主动运输', '逆浓度', '需', '耗能', '根吸收矿质离子'], ['胞吞/胞吐', '大分子', '囊泡', '耗能', '吞噬病菌、分泌蛋白']] },
      { type: 'tip', label: '提示·如何判断运输方式', text: '先看物质大小：大分子一般走胞吞胞吐。小分子再看方向：顺浓度且不耗能，是被动运输；顺浓度但需载体是协助扩散，连载体都不要是自由扩散；逆浓度又耗能，一定是主动运输。抓住方向和是否耗能两个关键即可快速判断。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 胞吞与胞吐（依赖膜流动性）</text><rect x="90" y="100" width="140" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="160" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">细胞</text><circle cx="270" cy="145" r="18" fill="#5aa832"/><text x="270" y="195" font-size="12" fill="#2e3a22" text-anchor="middle">大分子</text><text x="175" y="235" font-size="13" fill="#2e3a22" text-anchor="middle">胞吞：膜内陷包入</text><rect x="450" y="100" width="140" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><circle cx="450" cy="145" r="14" fill="#5aa832"/><text x="520" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">细胞</text><text x="520" y="235" font-size="13" fill="#2e3a22" text-anchor="middle">胞吐：囊泡与膜融合</text><text x="340" y="295" font-size="13" fill="#2e3a22" text-anchor="middle">大分子物质通过囊泡运输，依赖生物膜的流动性，不属跨膜运输。</text></svg>', caption: '图3　胞吞和胞吐借助囊泡，依赖膜流动性，用于大分子运输。' },
      { type: 'heading', text: '四、小结：三种跨膜运输的比较' },
      { type: 'paragraph', text: '被动运输（自由扩散、协助扩散）与主动运输都属于跨膜运输，区别在是否逆浓度、是否耗能、是否需载体。胞吞胞吐则通过囊泡完成，体现了膜的流动性。理解这些方式，才能解释细胞如何与外界进行物质交换。' }
    ],
    exercises: [
      { type: 'choice', question: '自由扩散的特点是？', options: ['逆浓度梯度、耗能', '顺浓度梯度、不需载体不耗能', '需载体、耗能', '顺浓度、需载体不耗能'], answer: '顺浓度梯度、不需载体不耗能', explanation: '自由扩散是被动运输的一种，物质从高浓度一侧直接穿过磷脂双分子层向低浓度一侧扩散，既不需要载体蛋白协助，也不消耗细胞代谢产生的能量。O₂、CO₂、甘油、乙醇、水等都以自由扩散方式跨膜。因此正确描述是顺浓度梯度、不需载体也不耗能。' },
      { type: 'choice', question: '葡萄糖进入哺乳动物成熟红细胞的方式是？', options: ['自由扩散', '协助扩散', '主动运输', '胞吞'], answer: '协助扩散', explanation: '葡萄糖分子较大，不能自由穿过磷脂双分子层，但红细胞内葡萄糖浓度通常低于血液，葡萄糖顺浓度梯度进入红细胞，需细胞膜上载体蛋白协助而不消耗能量，属于协助扩散。注意葡萄糖进入小肠上皮细胞则是主动运输，本题特指成熟红细胞，故选协助扩散。' },
      { type: 'choice', question: '主动运输最重要的意义是？', options: ['让物质只能顺浓度移动', '保证活细胞按需要选择性吸收或排出物质', '不需要能量', '只发生在死细胞'], answer: '保证活细胞按需要选择性吸收或排出物质', explanation: '主动运输能逆浓度梯度运输物质，使细胞能根据自身需要，从外界选择性吸收所需养分，并把代谢废物或对细胞有害的物质排出，维持细胞内环境的稳定。它既需要载体蛋白又消耗能量（主要来自 ATP），是活细胞的重要特征。因此选保证细胞按需要选择性吸收或排出物质。' },
      { type: 'fill', question: '细胞摄取大分子物质（如白细胞吞噬病菌）时，细胞膜内陷形成囊泡将其纳入细胞，这种方式称为___。', answer: '胞吞', explanation: '胞吞是细胞摄取大分子物质的方式：大分子附着在细胞膜表面，细胞膜内陷形成小囊，包裹大分子后从膜上分离进入细胞内部，形成囊泡。这一过程依赖于生物膜的流动性，不属于跨膜运输。白细胞吞噬病菌、变形虫取食都属于胞吞。所以填胞吞。' },
      { type: 'fill', question: '主动运输需要载体蛋白协助，并且需要消耗细胞生命活动所需的能量，该能量主要由___直接提供。', answer: 'ATP', explanation: '主动运输是逆浓度梯度运输物质的过程，既需要细胞膜上载体蛋白的协助，又需要消耗能量。对绝大多数细胞而言，主动运输所需的能量直接来自 ATP 的水解：ATP 水解为 ADP 和磷酸并释放能量，驱动物质逆浓度梯度跨膜。因此填 ATP。' }
    ]
  });
})();
