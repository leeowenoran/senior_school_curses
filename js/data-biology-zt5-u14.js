/* 生物学 · 高三复习 · 实验与探究 · 第5章 · 课时：探究生长素类似物促进生根的最适浓度、探究酵母菌种群数量变化、探究土壤微生物分解作用 */
(function () {
  var v = gzGetVolume('biology', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u14',
    name: '第4节 探究生长素类似物促进生根的最适浓度、探究酵母菌种群数量变化、探究土壤微生物分解作用',
    chapter: '实验与探究 · 第5章 探究类实验',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、探究生长素类似物促进插条生根的最适浓度' },
      { type: 'paragraph', text: '生长素类似物（如 2,4-D、NAA）在低浓度时能促进植物插条生根，浓度过高反而抑制生根。本实验通过设置一系列浓度梯度，比较不同浓度下插条生根的数目或长度，找出促进生根效果最好的“最适浓度”。实验前要先用少量浓度做预实验，摸索合适的浓度范围。' },
      { type: 'keypoint', text: '预实验不是正式实验的重复，而是在正式实验前先小规模尝试，目的是为正式实验摸索较合适的浓度范围、检验实验设计的可行性与科学性，避免直接开展大规模实验造成试剂和材料的浪费。' },
      { type: 'list', items: [
        '配制梯度浓度：在预实验确定的范围内，设置一系列等差或等比浓度，如 10⁻¹²、10⁻¹⁰、10⁻⁸ mol/L 等。',
        '设置对照：用蒸馏水处理的插条作为空白对照，确认生长素类似物的作用。',
        '观察指标：统计每组插条生根的数目或测量根的总长度，取平均值比较。'
      ] },
      { type: 'svg', caption: '生长素类似物浓度梯度设置：从蒸馏水对照到由低到高的若干浓度，通过对比生根情况找出促进生根最适浓度。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">生长素类似物浓度梯度</text><rect x="40" y="90" width="90" height="60" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="85" y="126" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">蒸馏水</text><rect x="150" y="90" width="90" height="60" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="195" y="126" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">低浓度</text><rect x="260" y="90" width="90" height="60" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="305" y="126" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">中浓度</text><rect x="370" y="90" width="90" height="60" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="415" y="126" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">高浓度</text><rect x="480" y="90" width="90" height="60" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="525" y="126" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">更高</text><polygon points="130,120 150,110 150,130" fill="#3f7d1e"/><polygon points="240,120 260,110 260,130" fill="#3f7d1e"/><polygon points="350,120 370,110 370,130" fill="#3f7d1e"/><polygon points="460,120 480,110 480,130" fill="#3f7d1e"/><text x="340" y="220" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">设置梯度浓度，找出促进生根最适浓度</text><text x="85" y="180" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">对照</text></svg>' },
      { type: 'paragraph', text: '处理方法有两种：①浸泡法，把插条基部浸泡在较低浓度药液中几小时到一天，这种方法溶液浓度低、时间长；②沾蘸法，把插条基部在较高浓度药液中蘸一下（约 5 秒），这种方法浓度高、时间短。两种方法都能让生长素类似物进入插条促进生根。' },
      { type: 'warn', text: '易错辨析：①浓度过低促进作用不明显，浓度过高会抑制甚至杀死植物，因此必须设置适当梯度和空白对照；②最适浓度不是“越高越好”，生根数随浓度呈“低促高抑”的曲线；③对照组要用蒸馏水而非清水随意代之，保证单一变量。' },
      { type: 'paragraph', text: '本实验的自变量是生长素类似物的浓度，因变量是插条生根的数目或长度。无关变量如插条种类、粗细、带叶情况、处理时间、温度等各组必须一致。统计时应多根插条取平均值，以减小偶然误差。' },
      { type: 'table', caption: '两种处理方法的对比', headers: ['方法', '药液浓度', '处理时间', '适用情况'], rows: [
        ['浸泡法', '较低', '几小时到一天', '溶液量多、浓度低时'],
        ['沾蘸法', '较高', '约 5 秒', '溶液量少、浓度高时']
      ] },
      { type: 'svg', caption: '酵母菌种群数量的 S 形增长曲线：在有限资源下数量先快速增加，随后增速减慢，最终稳定在环境容纳量 K 附近。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">酵母菌种群数量的 S 形增长</text><polyline points="60,300 150,260 240,200 330,150 420,130 510,125 600,124" fill="none" stroke="#3f7d1e" stroke-width="3"/><line x1="60" y1="320" x2="620" y2="320" stroke="#2e3a22" stroke-width="2"/><line x1="60" y1="320" x2="60" y2="80" stroke="#2e3a22" stroke-width="2"/><text x="300" y="112" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">K 环境容纳量</text><polygon points="330,150 346,146 342,162" fill="#3f7d1e"/><text x="340" y="350" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">数量先增后稳，接近 K 值</text></svg>' },
      { type: 'example', text: '例题：某同学用 2,4-D 处理插条，浓度从低到高，发现生根数先增多后减少，其中某一浓度生根最多。该浓度即促进生根的最适浓度附近，应在其两侧缩小浓度梯度再做实验以更精确定位。' },
      { type: 'tip', text: '高频考点：①预实验的作用常考；②生长素作用具有“两重性”（低浓度促进、高浓度抑制）；③最适浓度两侧存在“效果相同但浓度不同”的两个点，这是双子叶杂草除草剂的理论依据。' },
      { type: 'heading', text: '二、探究酵母菌种群数量的变化' },
      { type: 'paragraph', text: '酵母菌在液体培养基中可不断繁殖，其种群数量随时间呈 S 形增长（在有限资源下先增后稳）。本实验采用抽样检测法：定期从培养液中取出少量样液，用血细胞计数板在显微镜下计数，推算出总数量，再绘制种群数量变化曲线。' },
      { type: 'keypoint', text: 'S 形增长的核心概念是环境容纳量 K：在环境条件不受破坏的情况下，一定空间中所能维持的种群最大数量。当种群数量接近 K 时，增长速率趋于 0，数量在 K 值上下波动。' },
      { type: 'list', items: [
        '培养：将酵母菌接种到无菌葡萄糖培养液中，置于适宜温度培养。',
        '取样：每天同一时间从试管中吸取少量培养液，取样前需振荡摇匀。',
        '计数：用血细胞计数板在显微镜下统计小方格内酵母菌数，换算总数。',
        '绘图：以时间为横轴、数量为纵轴，绘出种群数量变化曲线。'
      ] },
      { type: 'svg', caption: '土壤微生物分解作用设计：普通土壤保留微生物使落叶被分解，灭菌土壤无微生物使落叶难分解，二者对照证明微生物的分解作用。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">土壤微生物分解作用</text><rect x="60" y="90" width="240" height="150" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="130" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">普通土壤</text><text x="180" y="160" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">有微生物</text><text x="180" y="188" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">落叶被分解</text><rect x="380" y="90" width="240" height="150" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="130" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">灭菌土壤</text><text x="500" y="160" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">无微生物</text><text x="500" y="188" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">落叶难分解</text><polygon points="300,165 340,155 340,175" fill="#3f7d1e"/><text x="340" y="290" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">设对照，证明微生物具分解作用</text></svg>' },
      { type: 'warn', text: '易错辨析：用血细胞计数板计数压在方格边界上的细胞时，应执行“计上不计下、计左不计右”的原则，避免重复或漏计；另外样液若浓度过高需先稀释再计数，否则格子内细胞重叠无法数清。' },
      { type: 'heading', text: '三、探究土壤微生物的分解作用' },
      { type: 'paragraph', text: '土壤中有大量微生物，能分解落叶、枯枝等有机物。本实验用对照法证明微生物的分解作用：实验组使用经灭菌处理（杀死微生物）的土壤，对照组使用自然状态的普通土壤，分别放入相同落叶或淀粉布条，一段时间后观察分解情况。' },
      { type: 'example', text: '例题：两组土壤分别放入等量同种落叶，普通土壤组落叶明显腐烂，灭菌土壤组落叶基本完好。结论是土壤微生物能将落叶中的有机物分解，说明微生物在物质循环中扮演分解者角色。' },
      { type: 'tip', text: '变量控制要点：自变量是土壤微生物的有无（通过灭菌实现），因变量是落叶或淀粉的分解程度，温度、湿度、落叶种类质量等无关变量必须相同，且对照组不能用加热过度破坏结构的死土代替自然土。' }
    ],
    exercises: [
      { type: 'choice', question: '在进行生长素类似物促进生根实验前先做预实验，主要目的是', options: ['A. 直接得出最终结论', 'B. 为正式实验摸索条件、检验可行性', 'C. 减少实验组数量', 'D. 代替正式实验'], answer: 'B. 为正式实验摸索条件、检验可行性', explanation: '预实验是在正式实验前先做一次较小规模的尝试，目的是摸索较合适的浓度范围、检验实验设计的可行性与科学性，避免盲目开展正式实验造成浪费，不能代替正式实验。' },
      { type: 'choice', question: '用血细胞计数板对酵母菌计数时，对压线细胞通常采用的原则是', options: ['A. 计上不计下、计左不计右', 'B. 全部计入', 'C. 全部不计', 'D. 随机计数'], answer: 'A. 计上不计下、计左不计右', explanation: '用血细胞计数板对酵母菌计数时，对压在计数室小方格边界上的细胞采用“计上不计下、计左不计右”的原则，避免重复或遗漏，使计数结果更接近真实值。' },
      { type: 'choice', question: '探究土壤微生物分解作用时，对照组与实验组的关键区别在于', options: ['A. 有氧组与无氧组', 'B. 普通土壤与灭菌土壤', 'C. 高温与低温', 'D. 干燥与湿润'], answer: 'B. 普通土壤与灭菌土壤', explanation: '探究土壤微生物分解作用时，自变量是土壤微生物的有无，对照组用自然状态的普通土壤，实验组用灭菌处理杀死微生物的土壤，通过比较落叶或淀粉的分解程度得出结论。' },
      { type: 'fill', question: '探究生长素类似物促进插条生根的最适浓度时，本实验人为改变的因素（自变量）是____。', answer: '生长素类似物的浓度', explanation: '探究生长素类似物促进插条生根的最适浓度时，人为设置并改变的是生长素类似物的浓度梯度，它是自变量；因变量是生根的数目或长度。' },
      { type: 'fill', question: '在有限环境下，酵母菌种群数量增长到环境所能维持的最大值，该最大值称为环境容纳量，常用字母____表示。', answer: 'K', explanation: '在有限的环境资源条件下，种群数量增长到环境条件所能维持的最大值后趋于稳定，这个最大值称为环境容纳量，在生态学上用大写字母 K 表示。' }
    ]
  });
})();
