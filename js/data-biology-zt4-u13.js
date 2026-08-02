/* 生物学 · 高三复习 · 生物与环境 · 第3章 · 课时：生态系统的物质循环（碳循环） */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u13',
    name: '第3节 生态系统的物质循环（碳循环）',
    chapter: '生物与环境 · 第3章 生态系统及其稳定性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、物质循环的概念与特点' },
      { type: 'paragraph', text: '生态系统的物质循环是指组成生物体的 C、H、O、N、P、S 等元素，在不断进行着从非生物环境到生物群落，又从生物群落到非生物环境的循环过程。这些元素在生物体和无机环境之间反复出现、循环利用。' },
      { type: 'keypoint', text: '物质循环特点：全球性和循环性。全球性指物质循环在生物圈范围内进行，循环性指元素在生物群落和非生物环境之间反复利用、往复循环，与能量流动的单向递减形成鲜明对比。' },
      { type: 'paragraph', text: '物质循环和能量流动二者同时进行、相互依存。物质是能量的载体，使能量沿食物链流动；能量是物质循环的动力，使元素在环境与生物间移动。' },
      { type: 'tip', text: '高频考点：物质循环具全球性和循环性，能量流动具单向性和递减性。常考“物质可循环、能量不循环”，二者对比是必背点。' },
      { type: 'heading', text: '二、碳循环' },
      { type: 'paragraph', text: '碳是组成生物体的最基本元素。碳在无机环境与生物群落之间的循环主要以 CO₂ 的形式进行；在生物群落内部，碳则以含碳有机物的形式在食物链中传递。' },
      { type: 'list', items: [
        '非生物环境与生物群落之间：主要形式是 CO₂。',
        '生物群落内部：以含碳有机物的形式，沿食物链和食物网传递。',
        '碳进入生物群落：主要靠生产者的光合作用，少数靠化能合成作用。',
        '碳返回非生物环境：通过呼吸作用、分解者的分解作用，以及化石燃料的燃烧。'
      ] },
      { type: 'table', caption: '碳循环中碳的进入与返回途径', headers: ['方向', '主要途径', '具体过程'], rows: [
        ['进入生物群落', '光合作用、化能合成作用', '生产者把 CO₂ 合成含碳有机物'],
        ['返回非生物环境', '呼吸作用', '生物把有机物分解为 CO₂ 释放'],
        ['返回非生物环境', '分解作用', '分解者把遗体残骸分解为 CO₂ 等'],
        ['返回非生物环境', '燃烧', '化石燃料燃烧释放大量 CO₂']
      ] },
      { type: 'paragraph', text: '碳循环可比喻为“货币资金流转”：CO₂ 是无机环境的“现金”，生产者把现金变成商品（有机物）在生物间流通，呼吸和分解又把商品换回现金。人类大量燃烧煤、石油，使 CO₂ 释放速度远超过固定速度，导致大气中 CO₂ 增多，引发温室效应。' },
      { type: 'warn', text: '易错辨析：碳在生物群落与无机环境之间循环的主要形式是 CO₂，不是含碳有机物；含碳有机物只是生物群落内部传递的形式。两者形式不同，不可混淆。' },
      { type: 'heading', text: '三、生物富集' },
      { type: 'paragraph', text: '生物富集是指环境中的一些难以降解的有毒有害物质（如重金属、有机农药），被生物体吸收后不易排出，会在体内不断积累，使生物体内的浓度超过环境浓度的现象。' },
      { type: 'keypoint', text: '生物富集特点：营养级越高，富集的有害物质浓度越高。因为有毒物质沿食物链逐级传递时难以分解排出，在高营养级生物体内层层累积，故顶级消费者受害最重。' },
      { type: 'list', items: [
        '物质特点：难降解、不易排出、可在体内长期积蓄。',
        '积累规律：随食物链延长，高营养级浓度越来越高。',
        '实例：DDT、汞、铅等通过食物链在鹰、虎等顶级动物体内富集。'
      ] },
      { type: 'tip', text: '高三复习提醒：生物富集与能量逐级递减方向一致（沿食物链向上累积），但本质是“有害物质浓度升高”，不是能量。考试常把它和能量金字塔放一起考。' },
      { type: 'heading', text: '四、综合例题' },
      { type: 'example', text: '例题：在“草 → 虫 → 蛙 → 蛇”食物链中，若水体被汞污染，汞在生物体内难以分解排出，则会沿食物链富集。营养级最高的蛇体内汞浓度最大，草中浓度最小。治理应控制源头污染，而非仅捕杀顶级动物。' },
      { type: 'svg', caption: '碳循环示意图：CO₂ 经光合作用进入生物群落，以有机物形式传递，再经呼吸、分解、燃烧返回无机环境。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">碳循环示意图</text><rect x="40" y="270" width="600" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="300" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">非生物环境（CO₂）</text><rect x="250" y="120" width="180" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="150" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">生物群落（有机物）</text><line x1="340" y1="270" x2="340" y2="172" stroke="#3f7d1e" stroke-width="2"/><polygon points="340,172 332,186 348,186" fill="#3f7d1e"/><text x="430" y="200" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">光合进入</text><line x1="340" y1="120" x2="340" y2="268" stroke="#3f7d1e" stroke-width="2"/><polygon points="340,268 332,254 348,254" fill="#3f7d1e"/><text x="430" y="240" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">呼吸分解返回</text></svg>' },
      { type: 'svg', caption: '碳的两种形式：无机环境间为 CO₂，生物群落内为含碳有机物，二者通过生产者和分解者转换。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">碳的两种存在形式</text><rect x="60" y="110" width="240" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="135" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">环境间：CO₂</text><text x="180" y="156" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">光合、呼吸、燃烧</text><rect x="380" y="110" width="240" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="135" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">群落内：含碳有机物</text><text x="500" y="156" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">沿食物链传递</text><line x1="300" y1="138" x2="378" y2="138" stroke="#3f7d1e" stroke-width="2"/><polygon points="378,138 362,132 362,144" fill="#3f7d1e"/><line x1="380" y1="166" x2="302" y2="166" stroke="#3f7d1e" stroke-width="2"/><polygon points="302,166 318,160 318,172" fill="#3f7d1e"/></svg>' },
      { type: 'svg', caption: '生物富集：难以降解的有害物质沿食物链向上累积，营养级越高浓度越大，顶级消费者受害最重。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">生物富集</text><rect x="70" y="250" width="110" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="125" y="277" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">生产者</text><rect x="250" y="190" width="110" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="305" y="217" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">初级消费者</text><rect x="430" y="130" width="110" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="485" y="157" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">次级消费者</text><rect x="540" y="70" width="110" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="595" y="97" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">顶级消费者</text><line x1="180" y1="272" x2="250" y2="234" stroke="#3f7d1e" stroke-width="2"/><polygon points="250,234 234,236 242,248" fill="#3f7d1e"/><line x1="360" y1="212" x2="430" y2="174" stroke="#3f7d1e" stroke-width="2"/><polygon points="430,174 414,176 422,188" fill="#3f7d1e"/><line x1="540" y1="152" x2="540" y2="114" stroke="#3f7d1e" stroke-width="2"/><polygon points="540,114 532,128 548,128" fill="#3f7d1e"/><text x="340" y="330" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">浓度随营养级升高而增大</text></svg>' }
    ],
    exercises: [
      { type: 'choice', question: '生态系统物质循环的特点是', options: ['全球性和循环性', '单向性和递减性', '局部性和一次性', '只发生在生物群落内'], answer: '全球性和循环性', explanation: '物质循环指元素在生物群落和非生物环境间反复利用、全球范围进行，具全球性和循环性；单向递减是能量流动的特点。' },
      { type: 'choice', question: '碳在生物群落与非生物环境之间循环的主要形式是', options: ['含碳有机物', 'CO₂', '碳酸盐', '葡萄糖'], answer: 'CO₂', explanation: '碳在非生物环境与生物群落之间主要以 CO₂ 形式循环，经光合作用进入生物群落，经呼吸和分解作用返回；含碳有机物只用于群落内部传递。' },
      { type: 'choice', question: '关于生物富集，正确的是', options: ['营养级越低浓度越高', '有害物质易分解排出', '营养级越高浓度越高', '与食物链无关'], answer: '营养级越高浓度越高', explanation: '难降解物质沿食物链传递时不易排出，在高营养级生物体内层层累积，故营养级越高，体内有害物质浓度越大。' },
      { type: 'fill', question: '碳进入生物群落的主要途径是生产者的________作用。', answer: '光合', explanation: '生产者通过光合作用把 CO₂ 和水合成含碳有机物，使碳从无机环境进入生物群落；少数自养生物通过化能合成作用完成这一过程。' },
      { type: 'fill', question: '物质循环在生物群落与无机环境之间进行，而能量流动是________的、逐级递减的。', answer: '单向', explanation: '物质可循环往复，能量只能沿食物链由低营养级流向高营养级，是单向的、逐级递减的，二者特点正好相反，常作为对比考点。' }
    ]
  });
})();
