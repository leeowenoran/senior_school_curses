/* 生物学 · 高三复习 · 实验与探究 · 第6章 · 课时：模拟实验 */
(function () {
  var v = gzGetVolume('biology', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u15',
    name: '第1节 模拟实验',
    chapter: '实验与探究 · 第6章 模拟与调查类实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、模拟实验的本质' },
      { type: 'paragraph', text: '有些生命过程在真实条件下很难直接观察或操作，例如配子的随机结合、减数分裂中染色体的行为、微观的激素调节等。模拟实验就是用容易操作的实物、模型或角色扮演，来代替那些难以直接研究的过程，通过对模型的操作和观察，来认识原型（真实对象）的规律。它不改变真实对象，只是“近似代替”。' },
      { type: 'keypoint', text: '模拟实验的核心是“用易操作的过程代替难直接观察的过程，用模型代替原型”。它的结论是对真实规律的模拟推测，常与真实实验配合，帮助理解微观、抽象或耗时的生物学过程。' },
      { type: 'list', items: [
        '性状分离比模拟：用两个小桶和两种小球模拟雌雄配子随机结合。',
        '减数分裂模拟：用染色体卡片模拟同源染色体的联会与分离。',
        '血糖调节模拟：用角色扮演模拟胰岛素和胰高血糖素的作用。',
        '构建 DNA 双螺旋结构模型：用材料拼出 DNA 的空间结构。'
      ] },
      { type: 'svg', caption: '性状分离比模拟：甲乙两桶代表雌雄生殖器官，桶内 D 与 d 小球代表两种配子，随机各取一球组合，模拟配子的随机结合。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">性状分离比模拟</text><rect x="60" y="90" width="220" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="170" y="130" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">甲桶(雌)</text><text x="170" y="165" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">D 与 d 小球</text><rect x="400" y="90" width="220" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="510" y="130" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">乙桶(雄)</text><text x="510" y="165" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">D 与 d 小球</text><polygon points="280,165 320,155 320,175" fill="#3f7d1e"/><text x="340" y="290" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">随机各取一球组合，模拟配子随机结合</text></svg>' },
      { type: 'paragraph', text: '性状分离比模拟的做法：准备甲、乙两个小桶，分别代表雌、雄生殖器官；每桶中放入等量的两种小球，一种标 D、一种标 d，且 D 与 d 的比例约 1 比 1，代表杂合子产生含 D 和含 d 两种配子且概率相等。每次从两桶各随机取一球组合，记录字母组合，再将小球放回原桶摇匀，重复多次。' },
      { type: 'warn', text: '易错辨析：①每次抓取后必须把小球放回原桶并摇匀，否则每桶内 D 与 d 的比例会改变，破坏随机性；②两桶小球总数可以不等（雌雄配子数量本就不同），但每桶内部 D 与 d 的比例都应约 1 比 1；③甲桶不代表“雌性基因”、乙桶不代表“雄性基因”，两桶都只代表配子来源。' },
      { type: 'paragraph', text: '减数分裂模拟：用硬纸板剪出代表染色体（含姐妹染色单体）的卡片，按同源染色体配对、四分体、同源染色体分离、姐妹染色单体分开的顺序摆放，直观呈现减数分裂中染色体的行为变化，尤其是染色体数目减半发生在减数第一次分裂。' },
      { type: 'table', caption: '几种常见模拟实验的对比', headers: ['模拟实验', '模拟对象', '主要材料', '可观察的规律'], rows: [
        ['性状分离比模拟', '配子随机结合', '两桶、两种小球', '后代性状分离比约 3 比 1'],
        ['减数分裂模拟', '染色体行为', '染色体卡片', '染色体减半、自由组合'],
        ['血糖调节模拟', '激素调节', '角色扮演', '胰岛素降血糖、胰高血糖素升血糖'],
        ['DNA 模型构建', 'DNA 空间结构', '支架与碱基', '双螺旋、碱基互补配对']
      ] },
      { type: 'svg', caption: '减数分裂与血糖调节模拟：前者用染色体卡片模拟同源染色体分离，后者用角色扮演模拟胰岛素与胰高血糖素对血糖的相反作用。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">减数分裂与血糖调节模拟</text><rect x="60" y="90" width="260" height="150" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="190" y="130" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">染色体卡片配对</text><text x="190" y="162" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">模拟同源染色体分离</text><rect x="360" y="90" width="260" height="150" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="490" y="130" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">角色扮演</text><text x="490" y="162" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">胰岛素与胰高血糖素</text><polygon points="320,165 360,155 360,175" fill="#3f7d1e"/><text x="340" y="290" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">用实物操作代替微观过程，便于理解</text></svg>' },
      { type: 'example', text: '例题：性状分离比模拟中，若甲桶放 10 个 D 和 10 个 d，乙桶放 20 个 D 和 20 个 d，重复抓取组合多次。因为两桶内 D 与 d 均为 1 比 1，组合出 DD、Dd、dd 的比例仍接近 1 比 2 比 1，说明桶间小球总数不等不影响分离比。' },
      { type: 'tip', text: '高频考点：①“放回并摇匀”是随机结合的关键，常作为填空考点；②模拟实验不能得出真实生理的精确数值，它只是帮助建立概念；③模拟结果与真实杂交比例接近，但次数越多越接近理论值，体现“重复取均值减小误差”。' },
      { type: 'heading', text: '二、血糖调节模拟' },
      { type: 'paragraph', text: '血糖平衡靠激素调节维持。胰岛素由胰岛 B 细胞分泌，能促进血糖进入组织细胞被利用和储存，使血糖降低；胰高血糖素由胰岛 A 细胞分泌，能促进肝糖原分解和非糖物质转化，使血糖升高。两者作用相反，共同维持血糖稳定。' },
      { type: 'keypoint', text: '血糖调节模拟中，胰岛素和胰高血糖素的作用方向必须记牢：胰岛素——降血糖；胰高血糖素——升血糖。两者是“拮抗”关系，而不是协同关系。' },
      { type: 'list', items: [
        '确定角色：一人扮胰岛素、一人扮胰高血糖素、一人扮血糖浓度。',
        '设定情境：进食后血糖升高，胰岛素“出场”使血糖下降。',
        '设定情境：饥饿时血糖降低，胰高血糖素“出场”使血糖上升。',
        '归纳：两种激素相反作用，使血糖在较小范围内波动。'
      ] },
      { type: 'svg', caption: 'DNA 双螺旋结构模型：两条脱氧核苷酸链反向平行，磷酸-脱氧核糖骨架在外侧，碱基在内侧互补配对（A 配 T，G 配 C）。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">DNA 双螺旋结构模型</text><path d="M180 90 Q340 140 180 190 Q340 240 180 290" fill="none" stroke="#3f7d1e" stroke-width="3"/><path d="M500 90 Q340 140 500 190 Q340 240 500 290" fill="none" stroke="#3f7d1e" stroke-width="3"/><line x1="190" y1="120" x2="490" y2="120" stroke="#5aa832" stroke-width="3"/><line x1="190" y1="200" x2="490" y2="200" stroke="#5aa832" stroke-width="3"/><line x1="190" y1="260" x2="490" y2="260" stroke="#5aa832" stroke-width="3"/><text x="340" y="330" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">两条链反向平行，碱基互补配对在内</text></svg>' },
      { type: 'warn', text: '易错辨析：构建 DNA 模型时要注意两条链“反向平行”（一条从 5′ 到 3′，另一条从 3′ 到 5′），且碱基严格互补：A 只与 T 配对，G 只与 C 配对，配对数 A=T、G=C。错配或同向平行都是常见建模错误。' },
      { type: 'heading', text: '三、构建 DNA 双螺旋结构模型' },
      { type: 'paragraph', text: '沃森和克里克在他人研究基础上，通过搭建物理模型提出了 DNA 双螺旋结构。模型要点：DNA 由两条脱氧核苷酸链组成，反向平行盘旋成双螺旋；外侧是交替排列的脱氧核糖和磷酸构成基本骨架，内侧是碱基通过氢键连接成碱基对，碱基互补配对。' },
      { type: 'example', text: '例题：在 DNA 模型构建活动中，若一条链某片段碱基顺序为 A—T—G—C，则互补链对应位置应为 T—A—C—G，且两条链方向相反。这一配对关系保证了 DNA 复制时两条链都能作模板，准确传递遗传信息。' },
      { type: 'tip', text: '模拟实验答题要点：说明“模拟的是什么、用什么代替、能推出什么结论”。例如性状分离比模拟——用小桶小球代替雌雄配子，用随机抓取组合代替受精作用，推出杂合子自交后代性状分离比约 3 比 1。' }
    ],
    exercises: [
      { type: 'choice', question: '在性状分离比模拟实验中，关于两桶内小球设置的正确说法是', options: ['A. 甲桶必须比乙桶多', 'B. 每桶中 D 与 d 比例应约 1 比 1', 'C. 抓取后不必放回', 'D. 两桶小球分别代表雌雄配子数量'], answer: 'B. 每桶中 D 与 d 比例应约 1 比 1', explanation: '性状分离比模拟中，甲、乙两桶分别代表雌、雄生殖器官，每桶内 D 与 d 小球比例应约 1 比 1，代表产生两种配子概率相等；每次抓取后必须放回并摇匀，保证每次抓取概率不变。' },
      { type: 'choice', question: '在 DNA 双螺旋结构模型中，碱基互补配对的关系是', options: ['A. A 配 G，T 配 C', 'B. A 配 T，G 配 C', 'C. A 配 C，T 配 G', 'D. A 配 A，T 配 T'], answer: 'B. A 配 T，G 配 C', explanation: '在 DNA 双螺旋结构模型中，碱基遵循互补配对原则：腺嘌呤 A 与胸腺嘧啶 T 配对，鸟嘌呤 G 与胞嘧啶 C 配对，这种配对方式决定了 DNA 复制时能准确传递遗传信息。' },
      { type: 'choice', question: '在血糖调节模拟中，使血糖浓度降低的激素是', options: ['A. 胰高血糖素', 'B. 胰岛素', 'C. 肾上腺素', 'D. 甲状腺激素'], answer: 'B. 胰岛素', explanation: '胰岛素由胰岛 B 细胞分泌，能促进组织细胞摄取、利用和储存葡萄糖，从而降低血糖浓度；胰高血糖素则升高血糖，两者共同维持血糖稳态。' },
      { type: 'fill', question: '性状分离比模拟实验中，每次抓取小球组合后，应将小球____原桶并摇匀，以保证每次抓取概率不变。', answer: '放回', explanation: '为保证每次抓取时桶内 D 与 d 的比例始终约 1 比 1、各次抓取相互独立，每次取出两球记录组合后必须把小球放回原桶并充分摇匀，这是模拟随机结合的关键操作。' },
      { type: 'fill', question: '模拟减数分裂时，同源染色体的分离发生在____。', answer: '减数第一次分裂后期', explanation: '模拟减数分裂时，同源染色体在减数第一次分裂后期彼此分离，分别进入两个子细胞，导致配子中染色体数目减半，这是模拟实验要直观呈现的核心过程。' }
    ]
  });
})();
