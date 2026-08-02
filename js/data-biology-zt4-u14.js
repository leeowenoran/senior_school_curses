/* 生物学 · 高三复习 · 生物与环境 · 第3章 · 课时：生态系统的信息传递 */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u14',
    name: '第4节 生态系统的信息传递',
    chapter: '生物与环境 · 第3章 生态系统及其稳定性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、生态系统中信息的种类' },
      { type: 'paragraph', text: '生态系统中的信息包括物理信息、化学信息和行为信息三大类。这些信息在个体、种群和群落等不同层次上发挥着重要作用，是生态系统自我调节不可或缺的条件。' },
      { type: 'table', caption: '生态系统中的三种信息及其举例', headers: ['信息种类', '概念', '举例'], rows: [
        ['物理信息', '通过物理过程（光、声、温度、磁力等）传递的信息', '萤火虫发光、鸟鸣、植物开花需光照、候鸟靠磁场定向'],
        ['化学信息', '生物代谢产生的化学物质传递的信息', '昆虫性外激素、植物释放的告警激素、尿液气味'],
        ['行为信息', '动物特殊行为动作传递的信息', '蜜蜂跳舞、孔雀开屏、雄鸟求偶炫耀']
      ] },
      { type: 'keypoint', text: '三类信息判定关键：物理信息来自光声热电磁等物理因素；化学信息靠化学物质（如性外激素）；行为信息靠动物特殊行为动作。注意区分“化学物质”与“行为动作”两类。' },
      { type: 'paragraph', text: '物理信息的来源既可以是无机环境（如光照、温度、磁场），也可以是生物（如声、颜色）。许多植物的开花需要特定光周期，就是典型的物理信息调控生命活动的例子。' },
      { type: 'warn', text: '易错辨析：蜜蜂跳舞是行为信息，不是物理信息；性外激素是化学信息，不是行为信息。判定顺序先看是不是特殊行为动作，再看是不是化学物质，最后才是声光电磁等物理因素。' },
      { type: 'heading', text: '二、信息传递的作用' },
      { type: 'paragraph', text: '信息传递在生态系统的各个层次上都起着重要作用，可归纳为三个水平：对个体、对种群、对群落和生态系统。' },
      { type: 'list', items: [
        '个体水平：生命活动的正常进行离不开信息的作用，如蝙蝠靠超声波定位、植物种子萌发生长需光信号。',
        '种群水平：生物种群的繁衍离不开信息的传递，如昆虫靠性外激素吸引异性完成交配。',
        '群落与生态系统水平：信息能调节生物的种间关系，维持生态系统的平衡与稳定。'
      ] },
      { type: 'keypoint', text: '信息传递三大作用：个体——生命活动正常进行；种群——繁衍；群落/生态系统——调节种间关系、维持平衡稳定。三句话对应三个层次，是必背结论。' },
      { type: 'paragraph', text: '在农业生产中，信息传递也有广泛应用。例如利用昆虫的性外激素制成诱捕器，干扰害虫交配，从而降低害虫种群密度；利用模拟鸟鸣驱赶鸟类保护作物，都是对信息传递原理的利用。' },
      { type: 'tip', text: '高频考点：① 作用三层次对应三句话；② 应用常考性外激素诱捕、灯诱、声诱等。复习时把“个体—种群—群落”三个层次和对应作用一一对应记牢。' },
      { type: 'heading', text: '三、典型例题' },
      { type: 'example', text: '例题：下列属于行为信息的是蜜蜂跳舞传递蜜源位置；属于化学信息的是雌蛾释放性外激素吸引雄蛾；属于物理信息的是萤火虫发光。三者分别通过动作、化学物质、光这三种不同方式完成信息传递，体现了信息种类的多样性。' },
      { type: 'list', items: [
        '判定信息种类先看行为动作，再看化学物质，最后看物理因素。',
        '作用层次：个体管生命活动，种群管繁衍，群落管种间关系。',
        '农业生产可人为利用信息传递控制有害生物。'
      ] },
      { type: 'svg', caption: '三种信息种类：物理信息（光声磁）、化学信息（性外激素）、行为信息（蜜蜂跳舞），来源与形式各有不同。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">生态信息的三种种类</text><rect x="40" y="90" width="180" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="130" y="115" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">物理信息</text><text x="130" y="136" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">光声温度磁场</text><rect x="250" y="90" width="180" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="115" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">化学信息</text><text x="340" y="136" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">性外激素等</text><rect x="460" y="90" width="180" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="550" y="115" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">行为信息</text><text x="550" y="136" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">蜜蜂跳舞</text><line x1="130" y1="146" x2="340" y2="190" stroke="#3f7d1e" stroke-width="2"/><polygon points="340,190 324,186 328,202" fill="#3f7d1e"/><line x1="340" y1="146" x2="550" y2="190" stroke="#3f7d1e" stroke-width="2"/><polygon points="550,190 534,186 538,202" fill="#3f7d1e"/><text x="340" y="320" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">共同构成生态系统的信息传递</text></svg>' },
      { type: 'svg', caption: '信息传递的三大作用：个体维持生命活动、种群完成繁衍、群落调节种间关系维持稳定。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">信息传递的三大作用</text><rect x="50" y="100" width="180" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="140" y="125" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">个体层次</text><text x="140" y="147" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">生命活动正常进行</text><rect x="250" y="100" width="180" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="125" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">种群层次</text><text x="340" y="147" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">繁衍离不开</text><rect x="450" y="100" width="180" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="540" y="125" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">群落层次</text><text x="540" y="147" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">调节种间关系</text><line x1="140" y1="210" x2="540" y2="250" stroke="#3f7d1e" stroke-width="2"/><polygon points="540,250 524,246 528,262" fill="#3f7d1e"/><text x="340" y="320" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">三个层次共同维持生态系统稳定</text></svg>' },
      { type: 'svg', caption: '农业应用：利用性外激素诱捕雄虫，打断害虫交配信息传递，从而降低种群密度。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">信息传递的农业应用</text><rect x="120" y="120" width="160" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="200" y="150" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">雌虫释放激素</text><rect x="400" y="120" width="160" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="480" y="150" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">诱捕器拦截雄虫</text><rect x="260" y="240" width="160" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="270" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">种群密度下降</text><line x1="280" y1="145" x2="398" y2="145" stroke="#3f7d1e" stroke-width="2"/><polygon points="398,145 382,139 382,151" fill="#3f7d1e"/><line x1="340" y1="170" x2="340" y2="238" stroke="#3f7d1e" stroke-width="2"/><polygon points="340,238 332,224 348,224" fill="#3f7d1e"/></svg>' }
    ],
    exercises: [
      { type: 'choice', question: '蜜蜂通过跳舞告知同伴蜜源位置，这种信息属于', options: ['物理信息', '化学信息', '行为信息', '营养信息'], answer: '行为信息', explanation: '蜜蜂跳舞是通过特殊行为动作传递信息，属于行为信息；物理信息靠光声电磁，化学信息靠化学物质，均不符合。' },
      { type: 'choice', question: '雌蛾释放性外激素吸引雄蛾，该信息属于', options: ['物理信息', '化学信息', '行为信息', '机械信息'], answer: '化学信息', explanation: '性外激素是生物代谢产生的化学物质，通过它在个体间传递信息，因此属于化学信息，不是行为或物理信息。' },
      { type: 'choice', question: '信息传递在生态系统中的作用不包括', options: ['维持个体生命活动', '保障种群繁衍', '调节种间关系', '为生产者提供能量'], answer: '为生产者提供能量', explanation: '信息传递在个体、种群、群落三个层次发挥作用，但能量来自太阳能而非信息，信息本身不为生产者提供能量。' },
      { type: 'fill', question: '在种群水平，生物种群的________离不开信息的传递。', answer: '繁衍', explanation: '信息传递在种群层次的作用，是生物种群的繁衍离不开信息的传递，如昆虫依靠性外激素吸引异性完成交配繁衍。' },
      { type: 'fill', question: '利用性外激素制成的诱捕器，可用于________（填“诱杀”或“促进”）害虫交配以控制其数量。', answer: '诱杀', explanation: '人们利用性外激素诱捕雄虫，干扰雌雄交配的信息传递，使害虫无法正常繁衍，从而降低种群密度，这种方法用于诱杀害虫。' }
    ]
  });
})();
