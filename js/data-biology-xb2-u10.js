/* 生物学 · 选择性必修2 生物与环境 · 第3章 · 课时：第4节 生态系统的信息传递 */
(function () {
  var v = gzGetVolume('biology', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u10',
    name: '第4节 生态系统的信息传递',
    chapter: '选择性必修2 生物与环境 · 第3章 生态系统及其稳定性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是生态系统中信息' },
      { type: 'paragraph', text: '在生态系统中，<strong>信息</strong>是指能够引起生物某种生理或行为反应的信号。和物质循环、能量流动一样，信息传递也是生态系统的重要功能之一。自然界中，阳光、声音、气味、动作等都可以成为信息的载体。理解信息传递，要先弄清楚信息由谁发出、通过什么渠道、被谁接收，并最终引起什么反应。' },
      { type: 'list', items: ['信息的发出者：可以是非生物环境，也可以是生物个体或群体', '信息的接收者：通常是生物（同种或异种）', '信息传递过程：信息源 → 信道（传播途径）→ 信息受体 → 产生反应'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 生态系统的信息传递过程</text><rect x="60" y="110" width="150" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="135" y="148" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">信息源</text><text x="135" y="172" font-size="12" fill="#2e3a22" text-anchor="middle">发出者</text><polygon points="211,155 248,143 248,167" fill="#3f7d1e"/><rect x="265" y="110" width="150" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="148" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">信道</text><text x="340" y="172" font-size="12" fill="#2e3a22" text-anchor="middle">传播途径</text><polygon points="416,155 453,143 453,167" fill="#3f7d1e"/><rect x="470" y="110" width="150" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="545" y="148" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">信息受体</text><text x="545" y="172" font-size="12" fill="#2e3a22" text-anchor="middle">产生反应</text><text x="340" y="280" font-size="13" fill="#2e3a22" text-anchor="middle">信息沿「源—信道—受体」传递，最终引起生物的反应。</text></svg>', caption: '图1 生态系统的信息传递包括信息源、信道和信息受体三个环节。' },
      { type: 'keypoint', label: '重点·信息传递要素', text: '生态系统的信息传递过程可概括为：<strong>信息源（发出者）→ 信道（传播途径）→ 信息受体（接收者）→ 产生相应反应</strong>。缺少任何一个环节，信息传递都无法完成。' },
      { type: 'heading', text: '二、生态系统中信息的种类' },
      { type: 'paragraph', text: '依据信息的<strong>性质和来源</strong>，生态系统中的信息通常分为三大类：物理信息、化学信息和行为信息。这三类信息在自然界中普遍存在，我们在生活中常见的一些现象，往往就是某类信息的典型例子。' },
      { type: 'list', items: ['物理信息：光、声、温度、湿度、磁力等，通过物理过程传递的信息', '化学信息：生物产生的化学物质，如性外激素、植物次生代谢物等', '行为信息：动物的特殊行为动作，如蜜蜂跳舞、孔雀开屏'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 生态系统中信息的三大类</text><rect x="40" y="80" width="190" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="135" y="112" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">物理信息</text><text x="135" y="142" font-size="12" fill="#2e3a22" text-anchor="middle">光、声、温度</text><text x="135" y="166" font-size="12" fill="#2e3a22" text-anchor="middle">湿度、磁力</text><rect x="245" y="80" width="190" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="112" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">化学信息</text><text x="340" y="142" font-size="12" fill="#2e3a22" text-anchor="middle">性外激素</text><text x="340" y="166" font-size="12" fill="#2e3a22" text-anchor="middle">植物次生代谢物</text><rect x="450" y="80" width="190" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="545" y="112" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">行为信息</text><text x="545" y="142" font-size="12" fill="#2e3a22" text-anchor="middle">蜜蜂跳舞</text><text x="545" y="166" font-size="12" fill="#2e3a22" text-anchor="middle">孔雀开屏</text><text x="340" y="310" font-size="13" fill="#2e3a22" text-anchor="middle">按性质和来源分为物理、化学、行为三类信息。</text></svg>', caption: '图2 生态系统中的信息分为物理信息、化学信息和行为信息。' },
      { type: 'keypoint', label: '重点·信息种类辨析', text: '<strong>物理信息</strong>来自光、声、温度、湿度、磁力等物理因素；<strong>化学信息</strong>来自生物代谢产生的化学物质，如昆虫的性外激素、植物的次生代谢物；<strong>行为信息</strong>来自动物的特殊行为，如蜜蜂的舞蹈、鸟类的求偶炫耀。判断时看「载体」：靠物理因素=物理信息，靠化学物质=化学信息，靠动作行为=行为信息。' },
      { type: 'paragraph', text: '举几个生活中的例子帮助理解：萤火虫通过闪光来寻找配偶，这是<strong>物理信息</strong>；雌蛾释放性外激素吸引雄蛾，这是<strong>化学信息</strong>；蜜蜂发现蜜源后回巢跳舞，用「舞蹈」告诉同伴方向和距离，这是<strong>行为信息</strong>。同一种现象有时可能涉及多类信息，关键看具体环节。' },
      { type: 'warn', label: '易错·三类信息混淆', text: '易错点：把行为信息和化学信息、物理信息弄混。注意——行为信息必须经过<strong>动物的特殊行为动作</strong>来传递，且接收方要能「看到或感知到」这个动作；如果靠的是分泌的化学物质，则是化学信息；如果靠的是声、光、温度等，则是物理信息。例如「孔雀开屏」是行为信息，「花朵的颜色招引昆虫」是物理信息（光）。' },
      { type: 'table', headers: ['信息种类', '来源/载体', '例子'], rows: [['物理信息', '光、声、温度、湿度、磁力', '萤火虫发光、鸟类鸣叫'], ['化学信息', '生物产生的化学物质', '性外激素、植物气味'], ['行为信息', '动物的特殊行为', '蜜蜂跳舞、孔雀开屏']] },
      { type: 'heading', text: '三、信息传递在生态系统中的作用' },
      { type: 'paragraph', text: '信息传递不是「装饰品」，它对生物的<strong>生存和繁衍</strong>以及生态系统的<strong>稳定</strong>都至关重要。首先，生命活动的正常进行离不开信息的作用，例如植物开花需要光照刺激，动物定向运动需要磁场信息。其次，生物种群的繁衍也依赖信息传递，如通过鸣叫、气味找到配偶。更重要的是，信息能<strong>调节生物的种间关系</strong>，进而维持生态系统的平衡与稳定。' },
      { type: 'list', items: ['生命活动的正常进行离不开信息的作用（如植物开花、动物迁徙）', '生物种群的繁衍离不开信息传递（如求偶、识别同类）', '信息能调节生物的种间关系，维持生态系统的平衡与稳定'] },
      { type: 'example', label: '例题·信息种类判断', text: '题目：蜜蜂发现蜜源后回巢跳舞，告知同伴蜜源方向和距离，这种信息属于？<br>A. 物理信息　B. 化学信息　C. 行为信息　D. 营养信息<br>解析：蜜蜂通过「跳舞」这一特殊行为动作把信息传递给同伴，接收方感知的是动作本身，这符合行为信息的定义。因此选 C（行为信息）。' },
      { type: 'keypoint', label: '重点·信息传递的作用', text: '信息传递在生态系统中的作用可记成三点：① 生命活动的正常进行离不开信息；② 生物种群的繁衍离不开信息传递；③ 信息能<strong>调节生物的种间关系</strong>，进而维持生态系统的<strong>平衡与稳定</strong>。第三点是生态系统层面最重要的作用。' },
      { type: 'tip', label: '提示·调节种间关系', text: '「调节种间关系」可以这样理解：比如食草动物闻到捕食者的气味（化学信息）会警觉逃跑，捕食者因此更难得手，双方的种群数量都被「信息」调节在合理范围，从而维持生态平衡。没有信息传递，生态系统很容易失衡。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 信息传递调节种间关系</text><rect x="80" y="110" width="200" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="148" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">食草动物</text><text x="180" y="172" font-size="12" fill="#2e3a22" text-anchor="middle">闻到气味</text><polygon points="281,155 318,143 318,167" fill="#3f7d1e"/><rect x="400" y="110" width="200" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="148" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">捕食者</text><text x="500" y="172" font-size="12" fill="#2e3a22" text-anchor="middle">释放气味</text><text x="340" y="270" font-size="13" fill="#2e3a22" text-anchor="middle">化学信息使食草动物警觉，调节二者数量，维持平衡。</text></svg>', caption: '图3 捕食者释放的化学信息能调节种间关系、维持生态平衡。' },
      { type: 'example', label: '例题·信息传递作用', text: '题目：信息传递在生态系统中不能起到下列哪项作用？<br>A. 保证生命活动正常进行　B. 利于生物种群繁衍<br>C. 调节种间关系维持稳定　D. 为生态系统提供能量来源<br>解析：信息传递有助于生命活动正常进行、种群繁衍，并能调节种间关系维持生态平衡；但能量的最终来源是太阳能，信息传递本身并不提供能量。因此选 D。' },
      { type: 'paragraph', text: '小结：本节学习了生态系统信息传递的概念、三大种类（物理信息、化学信息、行为信息）以及它在生态系统中的三大作用，其中「信息能调节生物的种间关系，维持生态系统的平衡与稳定」是生态系统层面最关键的考点。' }
    ],
    exercises: [
      { type: 'choice', question: '下列各项中，属于物理信息的是？', options: ['昆虫释放的性外激素', '蜜蜂的舞蹈', '鸟类的鸣叫声', '植物产生的生物碱'], answer: '鸟类的鸣叫声', explanation: '物理信息是指通过光、声、温度、湿度、磁力等物理过程传递的信息。鸟类的鸣叫声是通过「声」这种物理因素传递的，属于物理信息。性外激素和生物碱属于化学信息，蜜蜂跳舞属于行为信息。因此选鸟类的鸣叫声。' },
      { type: 'choice', question: '雌蛾释放性外激素吸引雄蛾前来交尾，这种信息属于？', options: ['物理信息', '化学信息', '行为信息', '营养信息'], answer: '化学信息', explanation: '性外激素是昆虫体内分泌的、能通过空气等媒介传播的化学物质，依靠化学物质来传递吸引异性的信号，属于化学信息。它既不是声光等物理因素，也不是动作行为，所以不是物理信息或行为信息。因此选化学信息。' },
      { type: 'choice', question: '下列关于生态系统信息传递作用的叙述，错误的是？', options: ['生命活动正常进行离不开信息', '信息传递利于生物种群繁衍', '信息能调节种间关系维持稳定', '信息传递能为生态系统提供能量'], answer: '信息传递能为生态系统提供能量', explanation: '信息传递的作用包括保证生命活动正常进行、利于种群繁衍、调节种间关系维持生态平衡。但能量的最终来源是太阳能，信息传递本身并不提供能量，能量由物质循环和光合作用等过程固定。因此错误叙述是信息传递能提供能量。' },
      { type: 'fill', question: '蜜蜂发现蜜源后回巢跳舞，以动作告知同伴蜜源方向和距离，这种信息属于___信息。', answer: '行为', explanation: '行为信息是指动物的特殊行为动作所传递的信息，接收方通过感知该动作来获取信号。蜜蜂跳舞正是用动作传递蜜源方向和距离，属于典型的行为信息，与化学信息、物理信息相区别。' },
      { type: 'fill', question: '生态系统中的信息能调节生物的___关系，进而维持生态系统的平衡与稳定。', answer: '种间', explanation: '信息传递在生态系统层面的重要作用之一，是能够调节不同物种之间的种间关系（如捕食、竞争关系），使各物种的种群数量保持相对平衡，从而避免某一物种过度繁殖或灭绝，维持生态系统的稳定。' }
    ]
  });
})();
