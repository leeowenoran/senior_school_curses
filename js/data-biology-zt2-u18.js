/* 生物学 · 高三复习 · 遗传与进化 · 第6章 · 课时：第2节 自然选择与适应的形成 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u18',
    name: '第2节 自然选择与适应的形成',
    chapter: '遗传与进化 · 第6章 生物的进化',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、新课导入：生物为什么这么适应 environment' },
      { type: 'paragraph', text: '骆驼的驼峰能储水、鱼的流线体型减少阻力、仙人掌的叶变成刺减少蒸发，生物对环境的适应随处可见。这种精妙的适应是怎么来的？历史上两位学者给出了不同答案：拉马克认为用进废退，达尔文认为是自然选择。本节我们逐一拆解。' },
      { type: 'keypoint', text: '核心概念：适应是生物长期进化的结果。达尔文的自然选择学说认为，适应和自然选择是同一过程的两个方面——自然选择保留了有利变异，淘汰不利变异，久而久之生物就与环境相适应了。' },
      { type: 'heading', text: '二、拉马克的进化学说' },
      { type: 'paragraph', text: '拉马克是较早系统提出进化理论的学者。他认为生物天生有向上发展的趋势，且环境变化会引起生物习性改变；经常使用的器官发达，不用的器官退化，这叫用进废退。而这种后天获得的性状可以传给后代，叫获得性遗传。例如他推测长颈鹿为了吃高处树叶，脖子越伸越长，并把长脖子传给后代。' },
      { type: 'list', items: [
        '用进废退：经常使用的器官逐渐发达，不使用的器官逐渐退化。',
        '获得性遗传：环境引起的后天性状可以遗传给后代。',
        '生物有向上发展的内在倾向，由低等向高等进化。'
      ]},
      { type: 'warn', text: '易错辨析：拉马克的用进废退和获得性遗传，本质上认为环境直接决定变异方向，并且后天获得的性状可遗传。但现代遗传学证明，环境引起的不可遗传变异（如肌肉锻炼）不会写入基因，无法传给后代。因此拉马克学说关于获得性遗传的观点已被否定，但他的进化思想启发了后人。' },
      { type: 'heading', text: '三、达尔文的自然选择学说' },
      { type: 'paragraph', text: '达尔文乘贝格尔号环球考察后，受马尔萨斯人口论启发，提出自然选择学说。他认为生物普遍具有过度繁殖的倾向，但资源有限，因此必然发生生存斗争。生物个体间普遍存在可遗传的变异，在斗争中那些具有有利变异的个体更容易存活并留下后代，即适者生存。有利变异逐代积累，就形成新的适应和物种。' },
      { type: 'list', items: [
        '过度繁殖：生物产生后代数量远超环境容纳量。',
        '生存斗争：资源有限导致个体间、物种间竞争。',
        '遗传变异：变异是不定向的，为选择提供原材料。',
        '适者生存：有利变异个体被保留，不利变异被淘汰。'
      ]},
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="320" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">自然选择学说的四个环节</text>'
        + '<rect x="30" y="80" width="130" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="95" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">过度繁殖</text>'
        + '<rect x="200" y="80" width="130" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="265" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">生存斗争</text>'
        + '<rect x="370" y="80" width="130" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="435" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">遗传变异</text>'
        + '<rect x="540" y="80" width="130" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="605" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">适者生存</text>'
        + '<polygon points="160,110 190,100 190,120" fill="#3f7d1e"/>'
        + '<polygon points="330,110 360,100 360,120" fill="#3f7d1e"/>'
        + '<polygon points="500,110 530,100 530,120" fill="#3f7d1e"/>'
        + '<text x="340" y="200" text-anchor="middle" font-size="14" fill="#2e3a22">变异不定向，选择定向</text>'
        + '<text x="340" y="235" text-anchor="middle" font-size="14" fill="#2e3a22">有利变异被保留并逐代积累</text>'
        + '<text x="340" y="282" text-anchor="middle" font-size="14" fill="#5aa832">自然选择塑造适应与物种</text>'
        + '</svg>', caption: '自然选择学说由过度繁殖、生存斗争、遗传变异、适者生存四个环节构成。' },
      { type: 'example', text: '典型例题：用达尔文自然选择学说解释长颈鹿脖子的形成。思路：古长颈鹿种群中存在脖子长短的变异（遗传变异，不定向）；环境变化使高处树叶成为主要食物，脖子长的个体在生存斗争中更容易吃到食物而存活繁殖（适者生存），脖子短的被淘汰；有利变异逐代积累，最终形成今天的长颈鹿。答案要点：变异不定向、选择定向、有利变异逐代积累。' },
      { type: 'tip', text: '高频考点：考试常要求用自然选择学说解释某一性状的形成，答题模板为——种群存在不定向变异；环境变化造成选择压力；有利变异个体生存并繁殖；不利变异被淘汰；有利变异逐代积累形成新性状。务必强调变异在前、选择在后，环境只是选择因素而非诱导因素。' },
      { type: 'heading', text: '四、适应的相对性' },
      { type: 'paragraph', text: '适应不是绝对的。当环境发生剧变，原本有利的性状可能变不利，比如北极熊的白色毛在融雪的岩石背景中反而显眼。这说明适应是相对于特定环境而言的，一旦环境改变，原来的适应可能失效。适应具有相对性，根源在于变异的不定向与环境变化的定向之间的矛盾。' },
      { type: 'table', headers: ['对比项', '拉马克学说', '达尔文自然选择学说'], rows: [
        ['变异方向', '认为环境决定变异方向', '变异不定向，环境只起选择作用'],
        ['进化动力', '用进废退、内在向上趋势', '生存斗争'],
        ['获得性遗传', '认可后天性状遗传', '不认可，只认可可遗传变异'],
        ['历史地位', '早期系统进化思想', '被后世发展完善的核心理论']
      ]},
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="300" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">长颈鹿脖子被自然选择拉长</text>'
        + '<rect x="40" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="120" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">短脖个体</text>'
        + '<rect x="260" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="340" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">环境变化</text>'
        + '<rect x="480" y="80" width="160" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="560" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">长脖存活</text>'
        + '<polygon points="200,110 240,100 240,120" fill="#3f7d1e"/>'
        + '<polygon points="420,110 460,100 460,120" fill="#3f7d1e"/>'
        + '<text x="340" y="195" text-anchor="middle" font-size="14" fill="#2e3a22">短脖吃不到高处叶→被淘汰</text>'
        + '<text x="340" y="225" text-anchor="middle" font-size="14" fill="#2e3a22">长脖吃到叶→存活繁殖</text>'
        + '<text x="340" y="268" text-anchor="middle" font-size="14" fill="#5aa832">逐代积累形成长颈鹿</text>'
        + '</svg>', caption: '长颈鹿长脖子的形成是自然选择保留有利变异的结果。' },
      { type: 'heading', text: '五、变异不定向，选择定向' },
      { type: 'paragraph', text: '这是高考反复考查的核心区分点。生物自发产生的变异本身是随机的、不定向的，可能有利也可能不利；但自然选择是定向的，它只把适应环境的变异保存下来。因此决定进化方向的是自然选择，而不是变异本身。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="300" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">生存斗争筛掉不利变异</text>'
        + '<rect x="40" y="80" width="140" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="110" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">多种变异</text>'
        + '<rect x="260" y="80" width="140" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="330" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">生存斗争</text>'
        + '<rect x="480" y="80" width="140" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="550" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">有利留存</text>'
        + '<polygon points="180,110 220,100 220,120" fill="#3f7d1e"/>'
        + '<polygon points="400,110 440,100 440,120" fill="#3f7d1e"/>'
        + '<text x="340" y="195" text-anchor="middle" font-size="14" fill="#2e3a22">不定向变异 + 定向选择</text>'
        + '<text x="340" y="230" text-anchor="middle" font-size="14" fill="#5aa832">选择决定进化方向</text>'
        + '</svg>', caption: '不定向的变异经过定向的自然选择，决定生物进化的方向。' },
      { type: 'list', items: [
        '变异在前、选择在后，环境只筛选不创造。',
        '有利变异个体繁殖成功率更高。',
        '逐代积累使种群基因频率定向改变。'
      ]},
      { type: 'paragraph', text: '小结：拉马克的用进废退与获得性遗传启发了进化思想，但已被现代遗传学否定；达尔文的自然选择学说用过度繁殖、生存斗争、遗传变异、适者生存四个环节，科学地解释了适应和物种形成，成为现代进化理论的基石。' }
    ],
    exercises: [
      { type: 'choice', question: '拉马克进化学说的核心内容是（ ）。', options: ['用进废退和获得性遗传', '自然选择', '遗传平衡', '突变积累'], answer: '用进废退和获得性遗传', explanation: '拉马克认为生物经常使用的器官发达、不用的退化（用进废退），并且后天获得的性状能遗传给后代（获得性遗传）。这两点构成其学说的核心。自然选择属于达尔文学说，遗传平衡和突变积累并非拉马克观点。' },
      { type: 'choice', question: '达尔文自然选择学说认为推动进化的动力是（ ）。', options: ['生存斗争', '过度繁殖', '遗传变异', '适者生存'], answer: '生存斗争', explanation: '生物的过度繁殖导致后代数量远超环境容量，有限的资源引发个体间激烈的生存斗争。正是在生存斗争中，有利变异个体被保留、不利变异被淘汰，因此生存斗争是自然选择的动力。过度繁殖是前提，遗传变异是原材料，适者生存是结果。' },
      { type: 'choice', question: '下列关于变异与自然选择关系的叙述，正确的是（ ）。', options: ['变异是不定向的，自然选择是定向的', '变异是定向的', '自然选择是不定向的', '环境决定变异方向'], answer: '变异是不定向的，自然选择是定向的', explanation: '生物自发产生的变异本身是随机、不定向的，可能有利也可能不利；而自然选择只保留适应环境的变异，因而是定向的。决定进化方向的是定向的自然选择，环境只是选择因素，并不决定变异的方向。' },
      { type: 'fill', question: '达尔文认为______是自然选择的结果，生物的多样性是长期自然选择形成的。', answer: '适应', explanation: '达尔文自然选择学说指出，在生存斗争中适者生存、不适者被淘汰，有利变异逐代积累，使生物表现出对环境的适应。因此适应是自然选择的结果，而多样的环境选择压力造就了生物的多样性。' },
      { type: 'fill', question: '自然选择学说的要点包括过度繁殖、生存斗争、遗传变异和______。', answer: '适者生存', explanation: '达尔文自然选择学说由四个环节构成：过度繁殖提供大量后代，生存斗争造成筛选压力，遗传变异提供不定向的原材料，适者生存使有利变异被保留并积累，最终形成适应和新物种。' }
    ]
  });
})();
