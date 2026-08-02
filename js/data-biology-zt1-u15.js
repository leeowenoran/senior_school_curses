/* 生物学 · 高三复习 · 分子与细胞 · 第5章 · 课时：第3节 细胞呼吸的原理和应用 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u15',
    name: '第3节 细胞呼吸的原理和应用',
    chapter: '分子与细胞 · 第5章 细胞的能量供应和利用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '第3节 细胞呼吸的原理和应用' },
      { type: 'paragraph', text: '细胞呼吸是细胞内有机物氧化分解释放能量的过程，就像细胞内部的小锅炉，把糖类等燃料烧掉，产生 ATP 供生命活动使用。它分为有氧呼吸和无氧呼吸两种类型。' },
      { type: 'keypoint', text: '有氧呼吸是指细胞在氧气参与下，通过多种酶催化，把葡萄糖等有机物彻底氧化分解，产生 CO₂ 和 H₂O，并释放大量能量、生成大量 ATP 的过程。' },
      { type: 'list', items: [
        '第一阶段：在细胞质基质，葡萄糖分解为丙酮酸和 [H]，释放少量能量。',
        '第二阶段：在线粒体基质，丙酮酸和水反应生成 CO₂ 和 [H]，释放少量能量。',
        '第三阶段：在线粒体内膜，[H] 和 O₂ 结合生成 H₂O，释放大量能量。'
      ] },
      { type: 'svg', caption: '有氧呼吸三阶段分别发生在细胞质基质、线粒体基质和线粒体内膜。', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="340" fill="#eef6e4"/>\n<text x="340" y="30" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图1：有氧呼吸三阶段</text>\n<rect x="80" y="70" width="200" height="70" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="240" y="170" width="200" height="70" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="400" y="270" width="200" height="70" fill="#d6eac4" stroke="#3f7d1e"/>\n<text x="180" y="100" text-anchor="middle" font-size="12" fill="#2e3a22">一 细胞质基质</text>\n<text x="180" y="120" text-anchor="middle" font-size="11" fill="#2e3a22">葡萄糖→丙酮酸+[H]</text>\n<text x="340" y="200" text-anchor="middle" font-size="12" fill="#2e3a22">二 线粒体基质</text>\n<text x="340" y="220" text-anchor="middle" font-size="11" fill="#2e3a22">丙酮酸+H₂O→CO₂+[H]</text>\n<text x="500" y="300" text-anchor="middle" font-size="12" fill="#2e3a22">三 线粒体内膜</text>\n<text x="500" y="320" text-anchor="middle" font-size="11" fill="#2e3a22">[H]+O₂→H₂O</text>\n<polygon points="280,140 238,168 252,168" fill="#3f7d1e"/>\n<polygon points="440,240 398,268 412,268" fill="#3f7d1e"/>\n</svg>' },
      { type: 'paragraph', text: '第一阶段（糖酵解）：在细胞质基质中，1 分子葡萄糖分解成 2 分子丙酮酸，产生少量 [H]（NADH），并释放少量能量，生成少量 ATP。此阶段不需要氧气参与。' },
      { type: 'paragraph', text: '第二阶段（柠檬酸循环）：在线粒体基质中，丙酮酸与水彻底分解，产生 CO₂ 和大量 [H]，并释放少量能量，生成少量 ATP。' },
      { type: 'paragraph', text: '第三阶段（电子传递链）：在线粒体内膜上，前两个阶段产生的 [H] 与 O₂ 结合生成 H₂O，同时释放大量能量，生成大量 ATP。这是有氧呼吸释放能量最多的阶段，必须有氧气参与。' },
      { type: 'svg', caption: '有氧呼吸总反应：葡萄糖在酶催化下彻底氧化为 CO₂ 和 H₂O，释放能量。', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="240" fill="#eef6e4"/>\n<text x="340" y="30" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图2：有氧呼吸总反应</text>\n<rect x="90" y="90" width="220" height="60" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="370" y="90" width="220" height="60" fill="#d6eac4" stroke="#3f7d1e"/>\n<text x="200" y="126" text-anchor="middle" font-size="13" fill="#2e3a22">C₆H₁₂O₆ + 6O₂ + 6H₂O</text>\n<text x="480" y="126" text-anchor="middle" font-size="13" fill="#2e3a22">6CO₂ + 12H₂O + 能量</text>\n<polygon points="310,120 368,112 368,128" fill="#3f7d1e"/>\n<text x="340" y="80" text-anchor="middle" font-size="12" fill="#5aa832">（酶）</text>\n</svg>' },
      { type: 'table', headers: ['阶段', '场所', '反应物', '产物', '能量'], rows: [
        ['一', '细胞质基质', '葡萄糖', '丙酮酸、[H]', '少量'],
        ['二', '线粒体基质', '丙酮酸、H₂O', 'CO₂、[H]', '少量'],
        ['三', '线粒体内膜', '[H]、O₂', 'H₂O', '大量']
      ] },
      { type: 'heading', text: '无氧呼吸' },
      { type: 'paragraph', text: '无氧呼吸是指细胞在无氧条件下，把葡萄糖等有机物不彻底氧化分解，产生酒精或乳酸，并释放少量能量的过程。它只在第一阶段释放少量能量，其余能量留在不彻底的氧化产物中。' },
      { type: 'paragraph', text: '酒精发酵（植物、酵母菌等）：C₆H₁₂O₆ →（酶） 2C₂H₅OH + 2CO₂ + 能量。例如酵母菌酿酒、水稻根在缺氧时产生酒精。' },
      { type: 'paragraph', text: '乳酸发酵（动物、乳酸菌、马铃薯块茎、甜菜块根等）：C₆H₁₂O₆ →（酶） 2C₃H₆O₃（乳酸） + 能量。例如剧烈运动时骨骼肌细胞无氧呼吸产生乳酸，会使肌肉发酸。' },
      { type: 'warn', text: '易错辨析：无氧呼吸产物因生物种类而异——酵母菌和大多数植物产生酒精和 CO₂，动物和乳酸菌产生乳酸，二者不会在同一生物中同时大量发生。不能说无氧呼吸没有线粒体就不能进行，原核生物没有线粒体也可进行有氧呼吸或无氧呼吸。有氧呼吸三个阶段场所要分清，尤其是第二阶段在线粒体基质而非内膜。' },
      { type: 'list', items: [
        '氧气（O₂）：O₂ 浓度影响呼吸类型，低氧时兼有无氧呼吸，高氧抑制无氧呼吸并促进有氧呼吸。',
        '温度：通过影响呼吸酶的活性来影响速率，存在最适温度。',
        '水分（H₂O）：自由水含量影响代谢强度，种子含水量高则呼吸旺盛。'
      ] },
      { type: 'example', text: '典型例题：水稻根被水长期淹没会发生烂根，主要原因是（ ）。A 有氧呼吸受抑、无氧呼吸产生酒精毒害 B 光照不足 C 缺矿质元素 D 温度过低。思路点拨：积水导致缺氧，根细胞进行无氧呼吸产生酒精，酒精积累使根细胞中毒腐烂，因此选 A。' },
      { type: 'tip', text: '高频考点：判断呼吸方式看产物——有 H₂O 生成一定是有氧呼吸，有酒精或乳酸生成说明存在无氧呼吸；CO₂ 可能来自两者，不能用 CO₂ 单独判断。实验题中，NaOH 吸收 CO₂ 以营造无氧或测定耗氧量，石灰水或溴麝香草酚蓝检测 CO₂，酸性重铬酸钾检测酒精（由橙色变灰绿色）。' },
      { type: 'heading', text: '探究酵母菌细胞呼吸的方式' },
      { type: 'list', items: [
        'NaOH 溶液：吸收空气中的 CO₂，排除干扰，用于测定 O₂ 消耗量。',
        'CO₂ 检测：澄清石灰水变浑浊，或溴麝香草酚蓝水溶液由蓝变绿再变黄。',
        '酒精检测：酸性重铬酸钾溶液，由橙色变成灰绿色。',
        '对比装置：有氧条件（持续通气）与无氧条件（密封、液封）对照。'
      ] },
      { type: 'svg', caption: '酵母菌呼吸方式探究：有氧组通空气，无氧组封口；分别检测 CO₂ 与酒精。', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="300" fill="#eef6e4"/>\n<text x="340" y="30" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图3：探究酵母菌呼吸方式</text>\n<rect x="80" y="80" width="200" height="120" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="400" y="80" width="200" height="120" fill="#d6eac4" stroke="#3f7d1e"/>\n<text x="180" y="120" text-anchor="middle" font-size="13" fill="#2e3a22">有氧组</text>\n<text x="180" y="145" text-anchor="middle" font-size="12" fill="#2e3a22">通空气+石灰水</text>\n<text x="500" y="120" text-anchor="middle" font-size="13" fill="#2e3a22">无氧组</text>\n<text x="500" y="145" text-anchor="middle" font-size="12" fill="#2e3a22">封口+重铬酸钾</text>\n<polygon points="290,140 398,130 398,150" fill="#3f7d1e"/>\n<polygon points="400,170 292,160 292,180" fill="#3f7d1e"/>\n<text x="345" y="260" text-anchor="middle" font-size="12" fill="#2e3a22">有氧产 CO₂多；无氧产酒精</text>\n</svg>' },
      { type: 'keypoint', text: '本节核心：有氧呼吸三阶段场所依次为细胞质基质、线粒体基质、线粒体内膜，总反应 C₆H₁₂O₆ + 6O₂ + 6H₂O →（酶） 6CO₂ + 12H₂O + 能量；无氧呼吸产物为酒精或乳酸；影响因素有 O₂、温度、H₂O；探究实验用 NaOH、石灰水（或溴麝香草酚蓝）、酸性重铬酸钾分别处理与检测。' },
      { type: 'paragraph', text: '小结：细胞呼吸把稳定的化学能转化为 ATP 中活跃的化学能。掌握有氧呼吸三阶段与无氧呼吸的异同，以及影响呼吸的因素，既能解释生活现象（如酿酒、伤口处理），也是高考实验题的高频考点。' }
    ],
    exercises: [
      { type: 'choice', question: '有氧呼吸释放能量最多的第三阶段发生的场所是（ ）。', options: ['线粒体内膜', '细胞质基质', '线粒体基质', '高尔基体'], answer: '线粒体内膜', explanation: '有氧呼吸第三阶段中，前两个阶段产生的 [H] 与 O₂ 结合生成 H₂O，并释放大量能量、生成大量 ATP。该阶段发生在线粒体内膜上，必须有氧气参与，因此选线粒体内膜。' },
      { type: 'choice', question: '酵母菌在无氧条件下呼吸的产物是（ ）。', options: ['酒精和 CO₂', '乳酸', 'CO₂ 和 H₂O', '丙酮酸'], answer: '酒精和 CO₂', explanation: '酵母菌是兼性厌氧生物，无氧时进行酒精发酵：C₆H₁₂O₆ 在酶催化下生成 2C₂H₅OH 和 2CO₂，并释放少量能量。乳酸发酵常见于动物和乳酸菌，不是酵母菌的产物，因此选酒精和 CO₂。' },
      { type: 'choice', question: '在探究酵母菌呼吸方式的实验中，常用来检测酒精的试剂是（ ）。', options: ['酸性重铬酸钾', '斐林试剂', '双缩脲试剂', '碘液'], answer: '酸性重铬酸钾', explanation: '酸性重铬酸钾溶液与酒精反应，由橙色变为灰绿色，是检测酒精的专门试剂。斐林试剂检测还原糖，双缩脲试剂检测蛋白质，碘液检测淀粉，均与酒精检测无关，因此选酸性重铬酸钾。' },
      { type: 'fill', question: '有氧呼吸总反应式为：C₆H₁₂O₆ + 6O₂ + 6H₂O →（酶） ______ + 12H₂O + 能量。', answer: '6CO₂', explanation: '有氧呼吸是葡萄糖的彻底氧化分解，1 分子葡萄糖与 6 分子 O₂、6 分子 H₂O 反应，生成 6 分子 CO₂ 和 12 分子 H₂O，并释放能量。因此空格处应填 6CO₂，注意反应产物中水有 12 分子。' },
      { type: 'fill', question: '动物细胞和乳酸菌在无氧条件下进行乳酸发酵，葡萄糖分解的最终产物是______。', answer: '乳酸（C₃H₆O₃）', explanation: '动物细胞、乳酸菌、马铃薯块茎、甜菜块根在无氧时进行乳酸发酵，葡萄糖分解为 2 分子乳酸（C₃H₆O₃）并释放少量能量，不产生 CO₂。这与酵母菌的酒精发酵产物不同，审题时要注意生物种类。' }
    ]
  });
})();
