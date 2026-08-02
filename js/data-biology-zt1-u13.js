/* 生物学 · 高三复习 · 分子与细胞 · 第5章 · 课时：第1节 降低化学反应活化能的酶 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u13',
    name: '第1节 降低化学反应活化能的酶',
    chapter: '分子与细胞 · 第5章 细胞的能量供应和利用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '第1节 降低化学反应活化能的酶' },
      { type: 'paragraph', text: '细胞里每时每刻都在发生成千上万种化学反应。酶就像一把神奇的钥匙，能帮反应轻松跨过能量门槛，让反应在温和条件下快速进行。没有酶，生命活动就无法维持。' },
      { type: 'keypoint', text: '酶的作用：降低化学反应所需的活化能，从而加快反应速率。注意酶本身在反应前后性质和数量不变，它只是催化剂，不为反应提供能量。' },
      { type: 'svg', caption: '与无机催化剂相比，酶能更显著降低反应活化能，使反应更容易发生。', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="320" fill="#eef6e4"/>\n<text x="340" y="32" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图1：酶降低活化能</text>\n<polyline points="80,260 250,120 430,260" fill="none" stroke="#2e3a22" stroke-width="3"/>\n<polyline points="80,260 250,180 430,260" fill="none" stroke="#5aa832" stroke-width="3"/>\n<text x="250" y="110" text-anchor="middle" font-size="12" fill="#2e3a22">无酶（高活化能）</text>\n<text x="250" y="205" text-anchor="middle" font-size="12" fill="#5aa832">有酶（低活化能）</text>\n<line x1="80" y1="260" x2="600" y2="260" stroke="#3f7d1e" stroke-width="2"/>\n<polygon points="600,260 588,254 588,266" fill="#3f7d1e"/>\n<text x="340" y="295" text-anchor="middle" font-size="12" fill="#2e3a22">反应进程</text>\n</svg>' },
      { type: 'list', items: [
        '来源：活细胞产生的（哺乳动物的成熟红细胞等极少数例外，因无细胞核和细胞器）。',
        '功能：具有催化作用，加快化学反应速率。',
        '化学本质：绝大多数是蛋白质，少数是 RNA。'
      ] },
      { type: 'paragraph', text: '酶的本质是有机物：绝大多数酶是蛋白质，由氨基酸组成，如胃蛋白酶、唾液淀粉酶；少数酶是 RNA，称为核酶。由于绝大多数酶是蛋白质，所以高温、强酸、强碱都会使酶的空间结构破坏而失活。' },
      { type: 'list', items: [
        '高效性：酶的催化效率约为无机催化剂的 10⁷～10¹³ 倍。',
        '专一性：一种酶只能催化一种或一类化学反应，如同钥匙只开一把锁。',
        '作用条件较温和：需要适宜的温度和 pH，过酸过碱或高温都会使酶失活。'
      ] },
      { type: 'table', headers: ['特性', '含义', '实例'], rows: [
        ['高效性', '催化效率远高于无机催化剂', '等量过氧化氢，加酶比加 Fe³⁺ 产氧快得多'],
        ['专一性', '一种酶催化一种或一类反应', '淀粉酶只催化淀粉水解，不催化蛋白质'],
        ['作用条件温和', '需适宜温度和 pH', '唾液淀粉酶最适约 37℃，最适 pH 近中性']
      ] },
      { type: 'warn', text: '易错辨析：酶是催化剂，只能降低活化能、加快反应速率，不能提供能量，也不能改变反应的平衡点（不改变产物最终产量）。另外，酶并非都是蛋白质，少数是 RNA；并非只在细胞内起作用，只要条件适宜，在细胞外也能催化。' },
      { type: 'example', text: '典型例题：下列有关酶的表述，正确的是（ ）。A 酶都能为反应提供能量 B 酶都是蛋白质 C 酶降低活化能从而加快反应 D 酶在体外失活。思路点拨：酶不提供能量、不改平衡点，且少数酶是 RNA，在适宜体外条件下仍有活性，因此选 C。' },
      { type: 'heading', text: '影响酶活性的因素' },
      { type: 'paragraph', text: '温度：每种酶都有最适温度，人体内大多数酶最适温度约 37℃。在最适温度前，温度升高酶活性增强；超过最适温度，高温使酶的空间结构破坏而永久失活。' },
      { type: 'paragraph', text: 'pH：每种酶也有最适 pH，如胃蛋白酶最适 pH 约 1.5，唾液淀粉酶最适 pH 约 7。过酸或过碱都会使酶的空间结构破坏而失活。低温和高温的影响性质不同，这一点常考。' },
      { type: 'list', items: [
        '高温：破坏空间结构，酶永久失活，不可逆。',
        '低温：抑制酶活性，空间结构基本不变，温度回升活性可恢复，可逆。',
        '过酸过碱：同高温，使酶变性失活且不可逆。'
      ] },
      { type: 'svg', caption: '酶活性随温度升高先升后降，在最适温度达到峰值，高温使酶失活。', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="300" fill="#eef6e4"/>\n<text x="340" y="30" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图2：温度对酶活性的影响</text>\n<polyline points="80,250 300,80 560,250" fill="none" stroke="#5aa832" stroke-width="3"/>\n<line x1="80" y1="250" x2="600" y2="250" stroke="#3f7d1e" stroke-width="2"/>\n<line x1="300" y1="80" x2="300" y2="250" stroke="#3f7d1e" stroke-dasharray="4"/>\n<text x="300" y="70" text-anchor="middle" font-size="12" fill="#2e3a22">最适温度</text>\n<polygon points="600,250 588,244 588,256" fill="#3f7d1e"/>\n<text x="340" y="285" text-anchor="middle" font-size="12" fill="#2e3a22">温度</text>\n</svg>' },
      { type: 'tip', text: '高频考点：常考曲线题——低温保存酶（如酶制剂冷藏）是因为低温只抑制活性、不破坏结构；高温、过酸过碱才使酶不可逆失活。探究温度影响时不能用过氧化氢为底物（受热易分解），探究 pH 影响时不宜用斐林试剂检测（需加热，干扰变量）。' },
      { type: 'heading', text: '酶相关探究实验' },
      { type: 'list', items: [
        '自变量：人为控制并改变的因素，如温度、pH、酶的种类。',
        '因变量：随自变量变化而变化的观测指标，如反应速率、产物生成量。',
        '无关变量：除自变量外可能影响结果的其他因素，需保持一致，如底物浓度、反应时间。',
        '对照：设置对照组与实验组比较，常用空白对照或相互对照，保证结论可靠。'
      ] },
      { type: 'svg', caption: '对照实验设计：控制自变量、观测因变量、无关变量保持一致。', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="280" fill="#eef6e4"/>\n<text x="340" y="30" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图3：对照实验设计思路</text>\n<rect x="80" y="80" width="200" height="120" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="400" y="80" width="200" height="120" fill="#d6eac4" stroke="#3f7d1e"/>\n<text x="180" y="120" text-anchor="middle" font-size="13" fill="#2e3a22">对照组</text>\n<text x="180" y="145" text-anchor="middle" font-size="12" fill="#2e3a22">不处理自变量</text>\n<text x="500" y="120" text-anchor="middle" font-size="13" fill="#2e3a22">实验组</text>\n<text x="500" y="145" text-anchor="middle" font-size="12" fill="#2e3a22">处理自变量</text>\n<polygon points="280,140 398,130 398,150" fill="#3f7d1e"/>\n<text x="340" y="200" text-anchor="middle" font-size="12" fill="#2e3a22">比较因变量</text>\n</svg>' },
      { type: 'keypoint', text: '本节核心：酶是活细胞产生的具有催化作用的有机物，多为蛋白质少为 RNA；特性为高效性、专一性、作用条件温和；高温强酸强碱使酶不可逆失活，低温只抑制；实验要控制自变量、观测因变量、保持无关变量一致。' },
      { type: 'paragraph', text: '小结：酶是细胞代谢的调速器。理解酶的作用机制、本质、特性及影响因素，既能解释生命活动的高效有序，也是解答实验探究题的基础。' }
    ],
    exercises: [
      { type: 'choice', question: '下列有关酶本质的表述，正确的是（ ）。', options: ['酶都是蛋白质', '酶是活细胞产生的具有催化作用的有机物，多数是蛋白质，少数是 RNA', '酶都是 RNA', '酶只能在细胞内发挥作用'], answer: '酶是活细胞产生的具有催化作用的有机物，多数是蛋白质，少数是 RNA', explanation: '酶是活细胞产生的具有催化作用的有机物，其中绝大多数酶是蛋白质，少数酶是 RNA（核酶）。酶在适宜的细胞外条件下也能发挥催化作用，因此只有该项表述完整正确。' },
      { type: 'choice', question: '下列哪项不属于酶的特性（ ）。', options: ['高效性', '专一性', '作用条件较温和', '为化学反应提供能量'], answer: '为化学反应提供能量', explanation: '酶作为催化剂，只能降低化学反应的活化能、加快反应速率，不能也不为反应提供能量，也不改变反应的平衡点。高效性、专一性、作用条件较温和才是酶的三大特性，所以选为化学反应提供能量。' },
      { type: 'choice', question: '高温处理会使酶（ ）。', options: ['失活且不可逆', '活性暂时降低并可恢复', '空间结构保持不变', '转变为 RNA'], answer: '失活且不可逆', explanation: '高温会破坏酶的空间结构，导致酶永久性失活，这种失活是不可逆的。与之不同，低温只是抑制酶活性、不破坏结构，温度回升后活性可恢复。因此高温使酶失活且不可逆。' },
      { type: 'fill', question: '低温条件下，酶的活性______，但其空间结构未被破坏，温度恢复后活性可以恢复。', answer: '受到抑制', explanation: '低温使分子运动减慢，酶与底物结合效率下降，表现为活性被抑制；但低温不破坏酶的空间结构，属于可逆的抑制作用。因此温度回升后酶活性能够恢复，这就是酶制剂可冷藏保存的原因。' },
      { type: 'fill', question: '在探究酶活性的实验中，由实验者人为控制并改变的因素称为______。', answer: '自变量', explanation: '实验设计中，自变量是研究者人为控制并主动改变的因素（如温度、pH）；因变量是随自变量变化而被观测的指标（如反应速率）；无关变量需保持一致。明确变量的角色是对照实验分析的关键。' }
    ]
  });
})();
