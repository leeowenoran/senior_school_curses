/* 生物学 · 高三复习 · 遗传与进化 · 第6章 · 课时：第3节 物种的形成（二）隔离与平衡 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u20',
    name: '第3节 物种的形成（二）隔离与平衡',
    chapter: '遗传与进化 · 第6章 生物的进化',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、新课导入：理想种群的基因频率会怎样' },
      { type: 'paragraph', text: '上一节我们算出基因频率会随自然选择改变。那如果一个种群没有选择、没有突变、无限大，基因频率会怎样？科学家哈代和温伯格各自独立得出同一个结论：这样的种群基因频率世代不变。这就是遗传平衡定律，也叫哈代—温伯格定律，它是分析真实种群的基准线。' },
      { type: 'keypoint', text: '核心概念：遗传平衡定律（哈代—温伯格）指出，在满足五个条件时，种群基因频率和基因型频率世代保持不变。公式是（p + q）² = p² + 2pq + q² = 1，其中 p 为 A 频率、q 为 a 频率，p² 为 AA 频率、2pq 为 Aa 频率、q² 为 aa 频率。' },
      { type: 'heading', text: '二、遗传平衡的条件' },
      { type: 'list', items: [
        '种群足够大：避免小群体随机抽样导致基因频率波动（遗传漂变）。',
        '随机交配：个体间交配机会均等，无选型偏好。',
        '无突变：不产生新等位基因。',
        '无自然选择：所有基因型生存繁殖机会相等。',
        '无迁入迁出：没有个体移入或移出带来基因流动。'
      ]},
      { type: 'paragraph', text: '把 A 频率记作 p，a 频率记作 q，显然 p + q = 1。随机交配时，雌雄配子随机结合，子代基因型频率正好是（p + q）² 展开：' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="300" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">遗传平衡公式（哈代—温伯格）</text>'
        + '<rect x="40" y="80" width="190" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="135" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">p = A 频率</text>'
        + '<rect x="270" y="80" width="190" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="365" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">q = a 频率</text>'
        + '<rect x="500" y="80" width="140" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="570" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">p+q=1</text>'
        + '<polygon points="230,110 260,100 260,120" fill="#3f7d1e"/>'
        + '<polygon points="460,110 490,100 490,120" fill="#3f7d1e"/>'
        + '<text x="340" y="190" text-anchor="middle" font-size="15" fill="#2e3a22">（p + q）² = p² + 2pq + q² = 1</text>'
        + '<text x="340" y="228" text-anchor="middle" font-size="14" fill="#2e3a22">AA = p²，Aa = 2pq，aa = q²</text>'
        + '<text x="340" y="268" text-anchor="middle" font-size="14" fill="#5aa832">满足五条件则频率世代不变</text>'
        + '</svg>', caption: '遗传平衡公式（p + q）² = p² + 2pq + q² = 1 把基因频率与基因型频率联系起来。' },
      { type: 'table', headers: ['符号', '含义', '符号', '含义'], rows: [
        ['p', 'A 基因频率', 'p²', 'AA 基因型频率'],
        ['q', 'a 基因频率', '2pq', 'Aa 基因型频率'],
        ['p + q = 1', '等位基因频率之和', 'q²', 'aa 基因型频率']
      ]},
      { type: 'heading', text: '三、遗传平衡定律的应用' },
      { type: 'example', text: '典型例题：某常染色体隐性遗传病在人群中 aa 频率为 0.01。假设人群满足遗传平衡，求 a 频率 q、A 频率 p 以及携带者 Aa 频率。思路：由 q² = 0.01 得 q = 0.1；则 p = 1 − 0.1 = 0.9；Aa 频率 = 2pq = 2 × 0.9 × 0.1 = 0.18。即约 18% 的人为携带者。' },
      { type: 'tip', text: '高频考点：遗传平衡计算是高考计算大题常客。解题钥匙是先求 q：若已知隐性纯合 aa 频率 q²，开方得 q，再用 p = 1 − q，最后算 2pq。注意隐性遗传病的患者频率是 q²，而携带者频率是 2pq，二者差近一倍，别把患者频率当成携带者频率。' },
      { type: 'warn', text: '易错辨析：满足遗传平衡时，基因频率不变，但基因型频率（AA、Aa、aa）本身由 p、q 决定，并不要求它们相等。另一个常见误区是：真实自然界几乎永远不满足五个条件，所以遗传平衡是理想模型，用来做基准——一旦实测频率偏离平衡，就说明该种群正在进化或存在选择、迁移等因素。' },
      { type: 'heading', text: '四、隔离——物种形成的屏障' },
      { type: 'paragraph', text: '物种是指能够在自然状态下相互交配并且产生可育后代的一群生物。隔离是指不同种群间的个体在自然条件下不能自由交流基因。隔离分两类：地理隔离和生殖隔离。地理隔离是地理障碍把种群隔开，使彼此无法相遇交配；生殖隔离则是即使相遇也不能交配，或交配后不能产生可育后代，它是物种形成的标志。' },
      { type: 'list', items: [
        '地理隔离：山脉、河流、海峡等把种群隔开，阻断基因交流。',
        '生殖隔离：包括不能交配、配子不亲和、杂种不育等。',
        '生殖隔离一旦形成，就标志着新物种产生。'
      ]},
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="300" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">地理隔离与新物种的形成</text>'
        + '<rect x="40" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="120" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">原种群</text>'
        + '<rect x="255" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="335" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">地理障碍</text>'
        + '<rect x="470" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="550" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">两新种</text>'
        + '<polygon points="200,110 240,100 240,120" fill="#3f7d1e"/>'
        + '<polygon points="415,110 455,100 455,120" fill="#3f7d1e"/>'
        + '<text x="340" y="195" text-anchor="middle" font-size="14" fill="#2e3a22">被隔开→各自积累不同变异</text>'
        + '<text x="340" y="230" text-anchor="middle" font-size="14" fill="#5aa832">生殖隔离形成即新物种诞生</text>'
        + '</svg>', caption: '地理隔离阻断基因交流，长期积累可发展为生殖隔离并形成新物种。' },
      { type: 'heading', text: '五、生殖隔离' },
      { type: 'paragraph', text: '生殖隔离是新物种形成的标志，比地理隔离更根本。它可以是受精前的隔离，比如季节不同、行为不同、生殖器不匹配；也可以是受精后的隔离，比如杂种胚胎早期死亡、杂种不育（如马和驴生的骡子不育）。只要出现生殖隔离，两个群体就被认定为不同物种。' },
      { type: 'table', headers: ['对比项', '地理隔离', '生殖隔离'], rows: [
        ['本质', '空间障碍阻断相遇', '遗传机制阻止基因交流'],
        ['能否交配', '能，只是遇不到', '遇得到也常不能成功'],
        ['物种标志', '不是', '是（新物种标志）'],
        ['常见例子', '海峡分隔鼠群', '马与驴生骡不育']
      ]},
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="300" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">生殖隔离切断基因交流</text>'
        + '<rect x="60" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="140" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">物种甲</text>'
        + '<rect x="260" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="340" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">生殖屏障</text>'
        + '<rect x="460" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="540" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">物种乙</text>'
        + '<polygon points="220,110 245,100 245,120" fill="#3f7d1e"/>'
        + '<polygon points="420,110 445,100 445,120" fill="#3f7d1e"/>'
        + '<text x="340" y="195" text-anchor="middle" font-size="14" fill="#2e3a22">相遇也不能产生可育后代</text>'
        + '<text x="340" y="230" text-anchor="middle" font-size="14" fill="#5aa832">生殖隔离 = 新物种形成标志</text>'
        + '</svg>', caption: '生殖隔离阻止基因交流，是判定新物种形成的根本标志。' },
      { type: 'heading', text: '六、物种形成的三个基本环节' },
      { type: 'paragraph', text: '现代生物进化理论把物种形成概括为三个基本环节：突变和基因重组提供原材料，自然选择决定进化方向并积累有利变异，隔离阻断基因交流并最终导致生殖隔离、形成新物种。三者环环相扣，缺一不可。' },
      { type: 'paragraph', text: '小结：遗传平衡定律给出理想种群的基因频率基准，公式（p + q）² = p² + 2pq + q² = 1 是计算的利器；真实种群偏离平衡即说明在进化。隔离，尤其是生殖隔离，是物种形成的标志，三环节共同完成从旧种到新种的跨越。' }
    ],
    exercises: [
      { type: 'choice', question: '遗传平衡定律成立的条件不包括下列哪一项（ ）。', options: ['个体间存在生存斗争', '种群足够大', '随机交配', '无突变'], answer: '个体间存在生存斗争', explanation: '遗传平衡要求五个条件：种群足够大、随机交配、无突变、无自然选择、无迁入迁出。生存斗争意味着存在自然选择压力，会打破平衡，因此不属于遗传平衡的条件。满足全部条件时基因频率才世代不变。' },
      { type: 'choice', question: '某常染色体隐性遗传病在人群中 aa 频率为 0.01，则在遗传平衡下 a 基因频率 q 约为（ ）。', options: ['0.1', '0.01', '0.2', '0.9'], answer: '0.1', explanation: '遗传平衡下隐性纯合 aa 频率等于 q²，所以 q = √0.01 = 0.1。进而 A 频率 p = 1 − 0.1 = 0.9，携带者 Aa 频率 = 2pq = 2 × 0.9 × 0.1 = 0.18。' },
      { type: 'choice', question: '新物种形成的标志是（ ）。', options: ['生殖隔离', '地理隔离', '基因频率改变', '变异产生'], answer: '生殖隔离', explanation: '生殖隔离指不同种群间不能交配或交配后不能产生可育后代，一旦形成就说明两个群体已成为不同物种，因此生殖隔离是新物种形成的标志。地理隔离只是空间分隔，不一定形成新物种；基因频率改变只表明发生进化。' },
      { type: 'fill', question: '遗传平衡下，若 A 频率为 p、a 频率为 q，则 Aa 基因型频率为______。', answer: '2pq', explanation: '遗传平衡公式（p + q）² = p² + 2pq + q² = 1 中，p² 对应 AA 频率，2pq 对应 Aa 频率，q² 对应 aa 频率。因此杂合子 Aa 的基因型频率等于 2pq。' },
      { type: 'fill', question: '物种形成三个基本环节是突变和基因重组、自然选择和______。', answer: '隔离', explanation: '现代生物进化理论认为，突变和基因重组提供原材料，自然选择决定进化方向，隔离阻断基因交流并最终导致生殖隔离，三者共同构成物种形成的三个基本环节。' }
    ]
  });
})();
