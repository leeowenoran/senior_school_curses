/* 生物学 · 高三复习 · 实验与探究 · 第8章 · 课时：实验设计一般步骤与答题模板 */
(function () {
  var v = gzGetVolume('biology', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u21',
    name: '第2节 实验设计一般步骤与答题模板',
    chapter: '实验与探究 · 第8章 高频考点与实验设计步骤',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验设计的六个步骤' },
      { type: 'paragraph', text: '完整的实验设计遵循六步：明确实验目的与原理 → 提出假设 → 设计实验思路 → 控制变量 → 预期结果 → 得出结论。六步环环相扣，从「想清楚要证明什么」到「写出可检验的方案」再到「描述可能看到的现象」。' },
      { type: 'list', items: ['第一步：明确目的与原理，弄清要研究什么、依据什么知识。', '第二步：提出假设，对结果作出可检验的推测。', '第三步：设计思路，确定用什么装置、材料和操作。', '第四步：控制变量，设置对照、保证单一变量。', '第五步：预期结果，写出若成立会看到的现象。', '第六步：得出结论，把结果与假设对照下判断。'] },
      { type: 'svg', caption: '实验设计六步依次是明确目的、提出假设、设计思路、控制变量、预期结果、得出结论，首尾呼应形成完整研究链条。', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="22" font-weight="bold" fill="#3f7d1e">实验设计六步</text><rect x="30" y="120" width="100" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="80" y="150" text-anchor="middle" font-size="13" fill="#2e3a22">明确目的</text><rect x="150" y="120" width="100" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="200" y="150" text-anchor="middle" font-size="13" fill="#2e3a22">提出假设</text><rect x="270" y="120" width="100" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="320" y="150" text-anchor="middle" font-size="13" fill="#2e3a22">设计思路</text><rect x="390" y="120" width="100" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="440" y="150" text-anchor="middle" font-size="13" fill="#2e3a22">控制变量</text><rect x="510" y="120" width="100" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="560" y="150" text-anchor="middle" font-size="13" fill="#2e3a22">预期结果</text><rect x="270" y="230" width="140" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="260" text-anchor="middle" font-size="14" fill="#2e3a22">得出结论</text><polygon points="135,150 148,138 148,162" fill="#3f7d1e"/><polygon points="255,150 268,138 268,162" fill="#3f7d1e"/><polygon points="375,150 388,138 388,162" fill="#3f7d1e"/><polygon points="495,150 508,138 508,162" fill="#3f7d1e"/><polygon points="540,180 540,228 528,228 528,175" fill="#3f7d1e"/><text x="340" y="330" text-anchor="middle" font-size="14" fill="#5aa832">六步闭环：从目的出发，以结论收尾</text></svg>' },
      { type: 'keypoint', text: '六步中「控制变量」是核心：必须保证除了自变量以外，其他无关变量都相同且适宜，才能把因变量的变化归因于自变量。' },
      { type: 'heading', text: '二、明确目的与提出假设' },
      { type: 'paragraph', text: '实验目的要写成规范句式：验证/探究 + 自变量 + 因变量 + 对象；若是寻找最佳水平，则写「探究某因素的最适浓度或最适温度」。假设是对结果的预测，如「适宜浓度的生长素类似物能促进扦插枝条生根」。' },
      { type: 'keypoint', text: '假设必须可检验：它要么被实验结果支持，要么被推翻，不能是「也许会怎样」这类无法判断的话。' },
      { type: 'heading', text: '三、控制变量与设计思路' },
      { type: 'paragraph', text: '变量分三类：自变量是唯一人为改变的因素，因变量是被观测的指标，无关变量是可能影响结果但需保持一致的其它条件。设计思路要明确如何操纵自变量、如何测量因变量、如何排除无关变量干扰。' },
      { type: 'list', items: ['自变量：人为改变，如不同浓度、不同温度。', '因变量：观测记录，如生根数、反应速率。', '无关变量：保持一致，如材料大小、培养时间、温度。'] },
      { type: 'table', caption: '实验中的三类变量', headers: ['变量类型', '含义', '控制方法'], rows: [['自变量', '人为改变的因素', '设置不同水平（如浓度梯度）'], ['因变量', '被观测的指标', '准确测量、记录数据'], ['无关变量', '可能影响结果的其他因素', '各组保持一致且适宜']] },
      { type: 'warn', text: '易错：自变量是被主动改变的因素，无关变量不是「不重要」而是「必须控制相同」；平行重复（多设几组取平均）是减小误差，不等于设置了对照。' },
      { type: 'heading', text: '四、预期结果与结论表述' },
      { type: 'paragraph', text: '预期结果常用「若……则……」句式，把假设翻译成可观测的现象。例如预期「若添加催化剂的组产生气泡更快，则说明酶具有高效性」。结论则直接回应目的：验证类写「证实了……」，探究类写「当……时效果最佳」或「……与……有关」。' },
      { type: 'svg', caption: '预期结果用「若（现象）则（推断）」表述，把假设翻译为可观测的指标变化，结论再回扣实验目的。', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="22" font-weight="bold" fill="#3f7d1e">预期结果「若…则…」模板</text><rect x="60" y="100" width="240" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="135" text-anchor="middle" font-size="16" font-weight="bold" fill="#2e3a22">若（条件/现象）</text><text x="180" y="165" text-anchor="middle" font-size="13" fill="#2e3a22">自变量处于某水平</text><rect x="380" y="100" width="240" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="135" text-anchor="middle" font-size="16" font-weight="bold" fill="#2e3a22">则（推断）</text><text x="500" y="165" text-anchor="middle" font-size="13" fill="#2e3a22">因变量出现预期变化</text><polygon points="305,145 375,135 375,155" fill="#3f7d1e"/><text x="340" y="240" text-anchor="middle" font-size="13" fill="#2e3a22">例：若实验组气泡更快产生，</text><text x="340" y="262" text-anchor="middle" font-size="13" fill="#2e3a22">则说明该酶比无机催化剂更高效</text><text x="340" y="320" text-anchor="middle" font-size="14" fill="#5aa832">结论必须扣回实验目的</text></svg>' },
      { type: 'example', text: '例题：设计实验探究温度对淀粉酶活性的影响，请写出预期结果。答：若 37℃ 组遇碘液不变蓝、0℃ 与 100℃ 组变蓝，则说明适宜温度下方能发挥活性，高温与低温均抑制。' },
      { type: 'tip', text: '高频考点：结果表述一定用「若……则……」模板，分情况写清；结论要扣回实验目的，验证实验答「支持/不支持假设」，探究实验答「最适条件或因果关系」。' },
      { type: 'heading', text: '五、答题模板速记' },
      { type: 'list', items: ['目的句式：验证/探究 + 自变量 + 因变量 + 对象。', '变量处理：单一变量、设置对照、平行重复。', '预期模板：若……（现象），则……（结论）。', '结论呼应：验证写支持与否，探究写最适或因果。'] },
      { type: 'svg', caption: '实验设计答题可浓缩为「定目的、控变量、出结论」三大块，配合规范句式与若则模板即可完整作答。', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="22" font-weight="bold" fill="#3f7d1e">实验设计答题总览</text><rect x="50" y="80" width="170" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="135" y="120" text-anchor="middle" font-size="16" font-weight="bold" fill="#2e3a22">定目的</text><text x="135" y="155" text-anchor="middle" font-size="13" fill="#2e3a22">写规范句式</text><text x="135" y="185" text-anchor="middle" font-size="13" fill="#2e3a22">提可检假设</text><rect x="255" y="80" width="170" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="120" text-anchor="middle" font-size="16" font-weight="bold" fill="#2e3a22">控变量</text><text x="340" y="155" text-anchor="middle" font-size="13" fill="#2e3a22">单一变量</text><text x="340" y="185" text-anchor="middle" font-size="13" fill="#2e3a22">设对照重复</text><rect x="460" y="80" width="170" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="545" y="120" text-anchor="middle" font-size="16" font-weight="bold" fill="#2e3a22">出结论</text><text x="545" y="155" text-anchor="middle" font-size="13" fill="#2e3a22">若则表述</text><text x="545" y="185" text-anchor="middle" font-size="13" fill="#2e3a22">扣回目的</text><text x="340" y="320" text-anchor="middle" font-size="14" fill="#5aa832">定目的→控变量→出结论，三步成题</text></svg>' },
      { type: 'paragraph', text: '综上，实验设计六步是一套可迁移的答题框架：先定目的与假设，再控变量、设对照，最后用「若……则……」表述预期并得出结论。熟练这套模板，几乎可应对所有实验设计类高考题。' }
    ],
    exercises: [
      { type: 'choice', question: '在实验设计中，下列做法符合单一变量原则的是', options: ['A. 两组使用不同浓度试剂且温度也不同', 'B. 除自变量外其余条件均相同且适宜', 'C. 只设置一个实验组不另设对照', 'D. 因变量由实验者随意选择'], answer: 'B. 除自变量外其余条件均相同且适宜', explanation: '单一变量原则要求两组之间只有自变量不同，其他无关变量（如温度、材料、时间）必须保持一致且适宜，这样才能把因变量的变化归因于自变量，避免干扰。' },
      { type: 'choice', question: '规范的实验目的表述应为', options: ['A. 观察一下会发生什么', 'B. 验证/探究 + 自变量 + 因变量 + 对象', 'C. 随便改变某个条件', 'D. 记录所有看到的现象'], answer: 'B. 验证/探究 + 自变量 + 因变量 + 对象', explanation: '实验目的应写清行为（验证或探究）、被改变的自变量、被观测的因变量以及实验对象；探究最适条件时则表述为「探究某因素的最适浓度或温度」，结构清晰、指向明确。' },
      { type: 'choice', question: '关于平行重复原则，下列说法正确的是', options: ['A. 平行重复就是设置对照组', 'B. 平行重复是为减小偶然误差、取平均值', 'C. 平行重复会引入新变量', 'D. 平行重复只适用于调查实验'], answer: 'B. 平行重复是为减小偶然误差、取平均值', explanation: '平行重复是指同种处理设置多个重复组，通过取平均值来减小随机误差，提高结果可靠性；它是与设置对照不同的概念，二者都不能少，并非只在调查实验中适用。' },
      { type: 'fill', question: '预期结果常用「______……则……」的句式，把假设翻译为可观测的现象变化。', answer: '若', explanation: '预期结果标准表述为「若（出现某种现象），则（推出相应结论）」，例如若实验组反应更快，则说明该因素起促进作用，这种句式逻辑清晰、便于阅卷给分。' },
      { type: 'fill', question: '探究生长素类似物促进扦插枝条生根的最适浓度时，实验目的应写为「探究生长素类似物促进生根的______」。', answer: '最适浓度', explanation: '当研究目标是寻找某因素的最佳水平而非验证有无作用时，实验目的应写成「探究……的最适浓度（或最适温度）」，明确这是探究型而非验证型实验。' }
    ]
  });
})();
