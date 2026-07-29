/* 生物学 · 必修1 分子与细胞 · 第3章 · 课时：第3节 细胞核——系统的控制中心 */
(function () {
  var v = gzGetVolume('biology', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u10',
    name: '第3节 细胞核——系统的控制中心',
    chapter: '必修1 分子与细胞 · 第3章 细胞的基本结构',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、细胞核的功能' },
      { type: 'paragraph', text: '细胞核是细胞中最大、最重要的结构之一。大量实验证明，<strong>细胞核是遗传信息库，是细胞代谢和遗传的控制中心</strong>。没有细胞核的细胞（如成熟的红细胞、植物的筛管细胞）往往寿命较短、功能受限，可见细胞核对细胞生命活动至关重要。' },
      { type: 'keypoint', label: '重点·细胞核的地位', text: '<strong>细胞核是遗传信息库，是细胞代谢和遗传的控制中心。</strong>细胞核储存着几乎全部遗传物质DNA，通过指导蛋白质合成来控制细胞的代谢和遗传。绝大多数真核细胞都有细胞核，少数细胞在成熟后失去细胞核。' },
      { type: 'list', items: ['细胞核储存遗传物质DNA，是遗传信息库', '细胞核控制细胞的代谢活动', '细胞核控制细胞的遗传特性', '失去细胞核的细胞通常不能正常完成生命活动'] },
      { type: 'heading', text: '二、细胞核的结构' },
      { type: 'paragraph', text: '细胞核由多层结构组成：<strong>核膜</strong>是双层膜，把核内物质与细胞质分开；核膜上有<strong>核孔</strong>，是大分子物质进出细胞核的通道；核内有一种易被碱性染料染成深色的物质叫<strong>染色质</strong>，它由DNA和蛋白质组成；核内还有一个球形结构叫<strong>核仁</strong>，与核糖体形成有关。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 细胞核的结构</text><circle cx="340" cy="190" r="120" fill="#d6eac4" stroke="#3f7d1e" stroke-width="3"/><text x="340" y="100" font-size="14" fill="#2e3a22" text-anchor="middle">核膜（双层膜）</text><circle cx="340" cy="150" r="28" fill="#eef6e4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="155" font-size="13" fill="#2e3a22" text-anchor="middle">核仁</text><text x="430" y="240" font-size="13" fill="#2e3a22" text-anchor="middle">染色质（DNA+蛋白质）</text><circle cx="450" cy="190" r="8" fill="#5aa832"/><circle cx="470" cy="210" r="8" fill="#5aa832"/><circle cx="455" cy="225" r="8" fill="#5aa832"/><rect x="300" y="60" width="24" height="18" fill="#5aa832"/><text x="312" y="55" font-size="12" fill="#2e3a22" text-anchor="middle">核孔</text><text x="340" y="340" font-size="13" fill="#2e3a22" text-anchor="middle">核膜上有核孔，是大分子进出细胞核的通道。</text></svg>', caption: '图1 细胞核包括核膜、核孔、染色质和核仁。' },
      { type: 'table', headers: ['结构', '特点', '功能'], rows: [['核膜', '双层膜', '分隔核质，上有核孔'], ['核孔', '膜上的孔道', '大分子物质进出通道'], ['染色质', 'DNA+蛋白质', '遗传信息的载体'], ['核仁', '球形结构', '与核糖体形成有关']] },
      { type: 'list', items: ['染色质：细胞分裂间期的细长丝状形态', '染色体：细胞分裂期高度螺旋、缩短变粗的形态', '染色质和染色体是同一物质在细胞不同时期的两种存在状态'] },
      { type: 'example', label: '例题·染色质与染色体', text: '染色质和染色体是两种不同的物质吗？<br>解：染色质和染色体的主要成分都是DNA和蛋白质。在细胞分裂间期，它以细长丝状的染色质形式存在；进入分裂期，它高度螺旋化、缩短变粗成为染色体。二者是同一种物质在不同时期的两种形态。<br>答：不是不同物质，而是同一物质两种存在状态。' },
      { type: 'warn', label: '易错·两个注意', text: '① 核孔虽然能让大分子通过，但并不是全透的，它对物质进出有选择性，比如DNA一般不通过核孔出细胞核；② 染色质和染色体不是两种物质，而是同一种物质在细胞不同时期的两种形态，不能写成完全不同的结构。' },
      { type: 'tip', label: '提示·一句话记忆', text: '把细胞核想成公司的<strong>档案室兼决策中心</strong>：核膜是围墙（带门=核孔），染色质是存档的蓝图（DNA），核仁负责培训新员工（核糖体）。这样既记结构又记功能。' },
      { type: 'heading', text: '三、伞藻嫁接与核移植实验' },
      { type: 'paragraph', text: '伞藻是一种长得很像小伞的单细胞藻类，伞帽形状有细长和杯状之分。科学家做了嫁接实验：把细长的伞藻的柄嫁接到杯状伞藻的假根上，长出的伞帽由假根（含细胞核）决定；进一步做核移植实验，把一种伞藻的细胞核移入另一种去核的细胞中，伞帽形状仍由提供细胞核的一方决定。这两个实验都证明<strong>细胞核控制着细胞的遗传性状</strong>。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 伞藻嫁接与核移植实验</text><rect x="60" y="80" width="60" height="120" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><path d="M90 80 q-30 -40 0 -70 q30 30 0 70" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="90" y="240" font-size="13" fill="#2e3a22" text-anchor="middle">甲（细伞）</text><rect x="200" y="80" width="60" height="120" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><path d="M230 90 q-40 -30 -40 -60 q40 0 40 60" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="230" y="240" font-size="13" fill="#2e3a22" text-anchor="middle">乙（杯状）</text><polygon points="270,140 320,128 320,152" fill="#3f7d1e"/><rect x="330" y="100" width="60" height="100" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="360" y="155" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">核在乙</text><path d="M360 90 q-30 -40 0 -70 q30 30 0 70" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="360" y="300" font-size="13" fill="#2e3a22" text-anchor="middle">嫁接后伞帽像乙</text><text x="560" y="150" font-size="14" fill="#2e3a22" text-anchor="middle">结论：</text><text x="560" y="180" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">核决定性状</text></svg>', caption: '图2 伞藻实验表明细胞核控制细胞的遗传性状。' },
      { type: 'example', label: '例题·实验结论', text: '将甲种伞藻的细胞核移入去核的乙种伞藻细胞中，一段时间后长出的伞帽像甲还是像乙？<br>解：核移植实验中，伞帽形状由提供细胞核的细胞决定。甲种伞藻提供的细胞核进入乙种去核细胞，新个体的遗传物质主要来自甲。<br>答：长出的伞帽像甲，证明细胞核控制遗传性状。' },
      { type: 'heading', text: '四、模型建构' },
      { type: 'paragraph', text: '为了认识复杂的细胞结构，科学家常用模型来帮助理解。<strong>模型</strong>是对认识对象所作的简化的概括性描述。生物学中常见的模型有：物理模型（如真核细胞的三维结构模型、DNA双螺旋模型）、概念模型（如概念图、流程图）、数学模型（如种群增长曲线、公式Nₜ=N₀λᵗ）。模型建构是科学研究的重要方法。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 生物学中的三类模型</text><rect x="50" y="80" width="170" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="135" y="140" font-size="15" fill="#2e3a22" text-anchor="middle">物理模型</text><text x="135" y="170" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">三维结构模型</text><rect x="255" y="80" width="170" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="140" font-size="15" fill="#2e3a22" text-anchor="middle">概念模型</text><text x="340" y="170" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">概念图、流程图</text><rect x="460" y="80" width="170" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="545" y="140" font-size="15" fill="#2e3a22" text-anchor="middle">数学模型</text><text x="545" y="170" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">曲线、公式</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">建构模型是对对象所作的简化、概括性描述。</text></svg>', caption: '图3 模型分为物理模型、概念模型和数学模型。' },
      { type: 'keypoint', label: '重点·模型建构的意义', text: '<strong>模型是人们为了某种特定目的而对认识对象所作的简化的概括性描述，可借助实物、图画、文字或数学形式表达。</strong>建构模型能帮助我们在无法直接观察或过于复杂时，抓住对象的关键特征。学习细胞核时制作真核细胞三维结构模型，就是典型的物理模型建构活动。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于细胞核功能的叙述，最准确的是？', options: ['细胞核是能量代谢的主要场所', '细胞核是遗传信息库，是细胞代谢和遗传的控制中心', '细胞核负责全部蛋白质合成', '细胞核是光合作用场所'], answer: '细胞核是遗传信息库，是细胞代谢和遗传的控制中心', explanation: '细胞核内储存着几乎全部遗传物质DNA，通过控制蛋白质合成来调控细胞的代谢和遗传，因此它是遗传信息库，也是细胞代谢和遗传的控制中心。能量代谢主要在线粒体，蛋白质合成在核糖体，光合作用在叶绿体。所以最准确的说法是细胞核是遗传信息库和控制中心。' },
      { type: 'choice', question: '染色质和染色体的关系是？', options: ['是两种完全不同的物质', '成分不同，形态相同', '是同一物质在细胞不同时期的两种存在状态', '染色体存在于细胞核外'], answer: '是同一物质在细胞不同时期的两种存在状态', explanation: '染色质和染色体的主要成分都是DNA和蛋白质。在细胞分裂间期，遗传物质以细长丝状的染色质存在；进入分裂期后，染色质高度螺旋化、缩短变粗成为染色体。二者是同一种物质在细胞不同时期的两种形态，并非不同物质。因此选同一物质的两种存在状态。' },
      { type: 'choice', question: '伞藻嫁接和核移植实验说明？', options: ['细胞质控制遗传性状', '细胞核控制细胞的遗传性状', '细胞壁决定伞帽形状', '细胞膜控制遗传'], answer: '细胞核控制细胞的遗传性状', explanation: '伞藻嫁接实验中，把一种伞藻的柄嫁接到另一种含细胞核的假根上，长出的伞帽由提供细胞核的一方决定；核移植实验进一步证明，伞帽形状由提供细胞核的细胞决定。这两个实验共同说明细胞核控制着细胞的遗传性状。因此选细胞核控制遗传性状。' },
      { type: 'fill', question: '染色质的主要成分是DNA和___。', answer: '蛋白质', explanation: '染色质是细胞核内能被碱性染料染成深色的物质，它的主要成分就是DNA和蛋白质。其中DNA携带遗传信息，蛋白质包括组蛋白等，协助DNA包装和调控。细胞分裂期染色质高度螺旋化成为染色体，二者成分相同。' },
      { type: 'fill', question: '核膜上的___是大分子物质（如mRNA、蛋白质）进出细胞核的通道。', answer: '核孔', explanation: '核膜是双层膜，把核内物质与细胞质分开。核膜上分布着核孔，它是蛋白质、mRNA等大分子物质进出细胞核的通道，但对物质进出具有选择性，DNA通常不会通过核孔进入细胞质。核孔实现了核质之间频繁的物质交换和信息交流。' }
    ]
  });
})();
