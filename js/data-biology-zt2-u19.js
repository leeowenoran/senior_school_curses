/* 生物学 · 高三复习 · 遗传与进化 · 第6章 · 课时：第3节 种群基因组成的变化（一）基因频率 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u19',
    name: '第3节 种群基因组成的变化（一）基因频率',
    chapter: '遗传与进化 · 第6章 生物的进化',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、新课导入：进化在哪里发生' },
      { type: 'paragraph', text: '前面我们知道生物会进化，但进化的最小单位是什么？是个体吗？不是。因为个体的基因在它一生中基本不变，真正在代代相传中改变的是群体的基因组成。这个群体在生物学上叫种群，研究种群基因组成的改变，就从基因频率说起。' },
      { type: 'keypoint', text: '核心概念：种群是生物进化的基本单位。基因频率指在某个种群的基因库中，某特定等位基因占该基因座全部等位基因的比率。生物进化的实质是种群基因频率的定向改变。' },
      { type: 'heading', text: '二、种群' },
      { type: 'paragraph', text: '种群是指生活在一定区域的同种生物的全部个体。关键词是一定区域和同种全部个体。一片草地上的所有蒲公英是一个种群；但一片草地上的所有植物包含了许多物种，不是种群；一个池塘里的所有鱼也包含多种鱼，同样不是种群。种群中的个体彼此可以交配，通过繁殖把基因传给下一代。' },
      { type: 'list', items: [
        '一定区域：有地理空间的限定。',
        '同种：属于同一个物种。',
        '全部个体：包括各年龄、各性别的所有个体。',
        '个体间能相互交配并实现基因交流。'
      ]},
      { type: 'heading', text: '三、基因库' },
      { type: 'paragraph', text: '一个种群中全部个体所含有的全部基因，叫做这个种群的基因库。基因库像一个巨大的基因抽屉，装着这个群体所有的遗传信息。每个个体只是基因库的一部分，而种群繁衍让基因库在世代间传递。突变会往基因库里加入新基因，这就是进化的原材料来源。' },
      { type: 'heading', text: '四、基因频率' },
      { type: 'paragraph', text: '基因频率衡量某个等位基因在基因库里所占的比重。例如控制豌豆茎高的等位基因 A 和 a，A 的频率就是所有 A 基因数占 A 与 a 基因总数的比例。若已知各种基因型频率，可用下面两个公式直接换算：' },
      { type: 'list', items: [
        'A 的频率 = AA 基因型频率 + ½ × Aa 基因型频率',
        'a 的频率 = aa 基因型频率 + ½ × Aa 基因型频率',
        '两者之和恒等于 1，即 A 频率 + a 频率 = 1'
      ]},
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="300" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">种群基因库与基因频率</text>'
        + '<rect x="40" y="80" width="150" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="115" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">种群全部个体</text>'
        + '<rect x="260" y="80" width="150" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="335" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">全部基因</text>'
        + '<rect x="480" y="80" width="150" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="555" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">基因频率</text>'
        + '<polygon points="190,110 230,100 230,120" fill="#3f7d1e"/>'
        + '<polygon points="410,110 450,100 450,120" fill="#3f7d1e"/>'
        + '<text x="340" y="195" text-anchor="middle" font-size="14" fill="#2e3a22">A 频率 = AA + ½ × Aa</text>'
        + '<text x="340" y="225" text-anchor="middle" font-size="14" fill="#2e3a22">a 频率 = aa + ½ × Aa</text>'
        + '<text x="340" y="268" text-anchor="middle" font-size="14" fill="#5aa832">频率改变即发生进化</text>'
        + '</svg>', caption: '基因频率反映某等位基因在种群基因库中所占的比例。' },
      { type: 'table', headers: ['基因型', '基因型频率', '贡献给 A 频率', '贡献给 a 频率'], rows: [
        ['AA', '记为 P', 'P（两个 A）', '0'],
        ['Aa', '记为 H', '½ × H', '½ × H'],
        ['aa', '记为 Q', '0', 'Q（两个 a）']
      ]},
      { type: 'example', text: '典型例题：某豌豆种群中，AA 占 0.3、Aa 占 0.6、aa 占 0.1。求 A 与 a 的基因频率。思路：A 频率 = AA 频率 + ½ × Aa 频率 = 0.3 + ½ × 0.6 = 0.3 + 0.3 = 0.6；a 频率 = aa 频率 + ½ × Aa 频率 = 0.1 + ½ × 0.6 = 0.1 + 0.3 = 0.4，且 0.6 + 0.4 = 1，结果自洽。' },
      { type: 'tip', text: '高频考点：基因频率计算是高考计算题的常客。两个公式必须记牢：A 频率 = AA 频率 + ½ × Aa 频率；a 频率 = aa 频率 + ½ × Aa 频率。若题目给的是个体数，先除以总数得到基因型频率再代入。也可用基因个数法：A 频率 =（2×AA 个体数 + Aa 个体数）÷（2×总个体数），两种算法本质相同。' },
      { type: 'warn', text: '易错辨析：基因频率和基因型频率是两个不同概念。基因频率是某基因占全部等位基因的比；基因型频率是某基因型个体占全部个体的比。二者不可混用，公式里的系数 ½ 正是连接二者的桥梁。还要注意：种群基因频率改变就意味着进化，但若只是基因型频率改变而基因频率不变，则不算进化。' },
      { type: 'heading', text: '五、突变和基因重组提供原材料' },
      { type: 'paragraph', text: '可遗传变异包括突变和基因重组。这里的突变是广义的，等于基因突变加染色体变异。突变和基因重组都是随机的、不定向的，它们只是为进化提供原材料，本身不决定方向。真正决定方向的是下一节要讲的自然选择。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="300" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">自然选择使基因频率定向改变</text>'
        + '<rect x="40" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="120" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">突变重组</text>'
        + '<rect x="260" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="340" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">不定向变异</text>'
        + '<rect x="480" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="560" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">选择定向</text>'
        + '<polygon points="200,110 240,100 240,120" fill="#3f7d1e"/>'
        + '<polygon points="420,110 460,100 460,120" fill="#3f7d1e"/>'
        + '<text x="340" y="195" text-anchor="middle" font-size="14" fill="#2e3a22">原材料不定向，选择来定向</text>'
        + '<text x="340" y="230" text-anchor="middle" font-size="14" fill="#5aa832">基因频率定向改变 = 进化</text>'
        + '</svg>', caption: '突变和基因重组提供原材料，自然选择使基因频率定向改变。' },
      { type: 'heading', text: '六、自然选择决定进化方向' },
      { type: 'paragraph', text: '在生存斗争中，具有有利变异的个体留下更多后代，相应基因在基因库中的比例上升；不利变异个体被淘汰，相应基因比例下降。于是种群的基因频率发生定向改变，生物就朝着适应环境的方向进化。所以自然选择决定进化的方向，进化的实质就是种群基因频率的定向改变。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="300" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">选择前后基因频率的变化</text>'
        + '<rect x="40" y="80" width="170" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="125" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">选择前 A 低</text>'
        + '<rect x="255" y="80" width="170" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="340" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">有利变异</text>'
        + '<rect x="470" y="80" width="170" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="555" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">选择后 A 高</text>'
        + '<polygon points="210,110 250,100 250,120" fill="#3f7d1e"/>'
        + '<polygon points="425,110 465,100 465,120" fill="#3f7d1e"/>'
        + '<text x="340" y="195" text-anchor="middle" font-size="14" fill="#2e3a22">有利基因比例逐代上升</text>'
        + '<text x="340" y="230" text-anchor="middle" font-size="14" fill="#5aa832">频率定向改变即进化发生</text>'
        + '</svg>', caption: '自然选择使有利基因的频率逐代升高，推动定向进化。' },
      { type: 'paragraph', text: '小结：种群是进化的基本单位，基因库承载全部基因，基因频率的定向改变就是进化的实质。突变和基因重组提供不定向的原材料，自然选择从中筛选并决定方向。下一节我们用遗传平衡定律给基因频率做定量基准。' }
    ],
    exercises: [
      { type: 'choice', question: '下列一定属于一个种群的是（ ）。', options: ['一片草地上的所有蒲公英', '一片草地上的所有植物', '一个池塘里的所有鱼', '一座山上所有的蛇'], answer: '一片草地上的所有蒲公英', explanation: '种群要求一定区域内的同种生物全部个体。蒲公英是同一物种，一片草地上的所有蒲公英满足同种且全部个体，属于种群。所有植物、所有鱼、所有蛇都包含多个物种，不符合同种的要求，因此不是种群。' },
      { type: 'choice', question: '某种群中 AA 占 0.4、Aa 占 0.4、aa 占 0.2，则 A 的基因频率为（ ）。', options: ['0.6', '0.4', '0.5', '0.8'], answer: '0.6', explanation: '根据公式 A 的频率 = AA 基因型频率 + ½ × Aa 基因型频率 = 0.4 + ½ × 0.4 = 0.4 + 0.2 = 0.6。也可用基因个数法：（2×0.4 + 0.4）÷ 2 = 1.2 ÷ 2 = 0.6，结果一致。' },
      { type: 'choice', question: '现代生物进化理论认为生物进化的实质是（ ）。', options: ['种群基因频率的定向改变', '个体基因频率改变', '种群基因型频率改变', '突变的发生'], answer: '种群基因频率的定向改变', explanation: '进化的基本单位是种群，可遗传变异提供原材料，自然选择使基因频率发生定向改变，因此进化的实质是种群基因频率的定向改变。仅仅基因型频率改变而基因频率不变，不算发生进化。' },
      { type: 'fill', question: '基因频率指某个基因占全部______基因的比率。', answer: '等位', explanation: '基因频率是针对某一个基因座而言的，指该基因占同一基因座上全部等位基因总数的比例。例如 A 的频率就是 A 基因数占 A 和 a 全部等位基因数的比值。' },
      { type: 'fill', question: '可遗传变异为进化提供原材料，其中突变包括基因突变和______。', answer: '染色体变异', explanation: '广义的突变等于基因突变加染色体变异。突变和基因重组都属于可遗传变异，能为进化提供原材料，但它们是随机不定向的，只提供选择的对象，不决定进化的方向。' }
    ]
  });
})();
