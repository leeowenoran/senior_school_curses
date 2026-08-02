/* 生物学 · 高三复习 · 生物与环境 · 第3章 · 课时：能量流动（一）过程与特点 */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u11',
    name: '第2节 能量流动（一）过程与特点',
    chapter: '生物与环境 · 第3章 生态系统及其稳定性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、能量流动的概念' },
      { type: 'paragraph', text: '能量流动是指生态系统中能量的输入、传递、转化和散失的过程。太阳能是绝大多数生态系统能量的最终来源，能量沿着食物链和食物网在生物群落中流动，并逐步以热能形式散失到环境中。' },
      { type: 'keypoint', text: '能量流动概念四环节：输入（生产者固定太阳能）→ 传递（沿食物链和食物网逐级传递）→ 转化（光能以有机物形式转化）→ 散失（各营养级呼吸以热能散失）。' },
      { type: 'paragraph', text: '理解能量流动，关键是抓住“源头在太阳，起点在生产者的光合作用，终点在呼吸作用散失的热能”。能量不会循环，它只能单向流动、逐级减少，这与物质循环截然不同。' },
      { type: 'tip', text: '高频考点：能量流动的起点是生产者固定的太阳能，不是照射到地球的太阳能总量，而是被生产者真正固定的那一部分。' },
      { type: 'heading', text: '二、能量流动的过程' },
      { type: 'paragraph', text: '能量流动从生产者固定太阳能开始。生产者通过光合作用把光能转化为化学能，贮存在制造的有机物中，这部分能量就是输入生态系统的总能量。' },
      { type: 'list', items: [
        '输入：生产者的光合作用（或化能合成作用）固定太阳能，是流经生态系统的总能量。',
        '传递：能量沿食物链和食物网，从一个营养级流向下一个营养级。',
        '散失：每个营养级的生物都要进行呼吸作用，把一部分能量以热能形式散失到无机环境。'
      ] },
      { type: 'paragraph', text: '每一营养级同化的能量，一部分用于自身呼吸消耗，一部分被下一营养级同化，一部分流向分解者，还有一部分未被利用。可以在后续课时详细拆解每个去向。' },
      { type: 'warn', text: '易错辨析：能量传递效率不是能量利用率。传递效率指相邻营养级之间同化量的比值（10%～20%）；能量利用率指人类利用的能量占输入总能量的比例，可通过人类设计（如沼气池）提高，二者含义不同。' },
      { type: 'heading', text: '三、能量流动的特点' },
      { type: 'paragraph', text: '能量流动有两个显著特点：单向流动和逐级递减。单向流动是指能量只能从低营养级流向高营养级，不可逆转，也不能循环；逐级递减是指每一营养级都有大量能量以呼吸热散失，传递到下一营养级的只有一小部分。' },
      { type: 'keypoint', text: '能量传递效率一般只有 10%～20%，即相邻两个营养级之间，下一营养级同化量约为上一营养级同化量的 10%～20%。营养级越多，能量损耗越大，故食物链一般不超过 5 个营养级。' },
      { type: 'table', caption: '能量流动两大特点的比较', headers: ['特点', '含义', '原因'], rows: [
        ['单向流动', '能量只能由低营养级流向高营养级，不可逆转', '食物链方向不可逆，能量不循环'],
        ['逐级递减', '每一营养级都有大量能量以热能散失', '呼吸消耗使传递效率仅 10%～20%']
      ] },
      { type: 'paragraph', text: '传递效率可用公式计算：传递效率 = 某一营养级同化量 ÷ 上一营养级同化量 × 100%。例如上一营养级同化量为 1000，下一营养级同化量为 150，则传递效率为 150 ÷ 1000 × 100% = 15%。' },
      { type: 'list', items: [
        '单向流动：能量沿食物链由低营养级到高营养级，不能反向，也不能循环。',
        '逐级递减：每经过一个营养级，能量因呼吸散失而减少，传递效率仅 10%～20%。',
        '营养级越高，获得的能量越少，故高营养级生物数量一般较少。'
      ] },
      { type: 'tip', text: '高三复习提醒：由于逐级递减，食物链越长，顶级消费者获得的能量越少，因此自然界食物链通常只有 4～5 个营养级，极少更长。' },
      { type: 'heading', text: '四、典型计算' },
      { type: 'example', text: '例题：某生态系统第一营养级（生产者）同化能量为 2000，按传递效率 10%～20% 计算，第三营养级最多可获得多少能量？解：能量传递经两次（第一到第二、第二到第三），最多为 2000 × 20% × 20% = 80，最少为 2000 × 10% × 10% = 20，故第三营养级可获得 20～80 的能量。' },
      { type: 'svg', caption: '能量流动过程：太阳能经生产者光合作用输入，沿食物链逐级传递，各营养级通过呼吸作用以热能散失。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">能量流动过程</text><rect x="280" y="70" width="120" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="98" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">太阳能</text><rect x="270" y="150" width="140" height="46" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="179" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">生产者</text><rect x="270" y="240" width="140" height="46" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="269" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">初级消费者</text><line x1="340" y1="114" x2="340" y2="148" stroke="#3f7d1e" stroke-width="2"/><polygon points="340,148 332,134 348,134" fill="#3f7d1e"/><line x1="340" y1="196" x2="340" y2="238" stroke="#3f7d1e" stroke-width="2"/><polygon points="340,238 332,224 348,224" fill="#3f7d1e"/><text x="430" y="173" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">光合输入</text><line x1="410" y1="263" x2="560" y2="300" stroke="#3f7d1e" stroke-width="2"/><polygon points="560,300 544,298 552,310" fill="#3f7d1e"/><text x="500" y="330" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">呼吸散热</text></svg>' },
      { type: 'svg', caption: '逐级递减：每一营养级的能量只有约 10%～20% 传向下一营养级，其余在呼吸中散失，呈金字塔形减少。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">能量逐级递减</text><rect x="140" y="80" width="400" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="107" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">生产者 100%</text><rect x="190" y="160" width="300" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="187" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">初级消费者 10%～20%</text><rect x="240" y="240" width="200" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="267" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">次级消费者 更少</text><line x1="340" y1="124" x2="340" y2="158" stroke="#3f7d1e" stroke-width="2"/><polygon points="340,158 332,144 348,144" fill="#3f7d1e"/><line x1="340" y1="204" x2="340" y2="238" stroke="#3f7d1e" stroke-width="2"/><polygon points="340,238 332,224 348,224" fill="#3f7d1e"/></svg>' },
      { type: 'svg', caption: '能量流动两大特点：单向流动（只能由低营养级流向高营养级）与逐级递减（传递效率 10%～20%）。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">能量流动的特点</text><rect x="60" y="90" width="250" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="185" y="120" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">特点一：单向流动</text><text x="185" y="142" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">不可逆转、不循环</text><rect x="370" y="90" width="250" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="495" y="120" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">特点二：逐级递减</text><text x="495" y="142" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">传递效率 10%～20%</text><line x1="185" y1="200" x2="495" y2="250" stroke="#3f7d1e" stroke-width="2"/><polygon points="495,250 479,246 483,262" fill="#3f7d1e"/><text x="340" y="320" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">两个特点共同决定食物链不能太长</text></svg>' }
    ],
    exercises: [
      { type: 'choice', question: '生态系统能量流动的起点是', options: ['太阳能照射到地球', '生产者固定的太阳能', '消费者摄食的能量', '分解者释放的能量'], answer: '生产者固定的太阳能', explanation: '流经生态系统的总能量是生产者通过光合作用固定的太阳能，而不是全部照射到地球的太阳能，也不是消费者或分解者的能量。' },
      { type: 'choice', question: '能量流动两个主要特点是', options: ['循环流动、逐级递增', '单向流动、逐级递减', '双向流动、保持稳定', '单向流动、逐级递增'], answer: '单向流动、逐级递减', explanation: '能量只能沿食物链由低营养级流向高营养级，不可逆转也不循环；每一营养级都有能量以热能散失，故逐级递减。' },
      { type: 'choice', question: '相邻营养级之间的能量传递效率一般为', options: ['1%～5%', '10%～20%', '50%～60%', '80%～90%'], answer: '10%～20%', explanation: '由于每一营养级都有大量能量经呼吸作用散失，相邻营养级间同化量的传递效率通常只有 10%～20%。' },
      { type: 'fill', question: '计算相邻营养级传递效率的公式是：传递效率 = 某一营养级同化量 ÷ ________ × 100%。', answer: '上一营养级同化量', explanation: '能量传递效率等于某一营养级同化量除以其上一营养级同化量再乘以百分百，反映相邻营养级之间能量传递的比例。' },
      { type: 'fill', question: '各营养级的能量主要通过________作用以热能形式散失到环境中。', answer: '呼吸', explanation: '每个营养级的生物都要进行呼吸作用，把一部分能量以热能形式散失到无机环境，这是能量逐级递减的主要原因。' }
    ]
  });
})();
