/* 生物学 · 高三复习 · 实验与探究 · 第5章 · 课时：探究植物细胞吸水与失水、探究光照强度对光合的影响 */
(function () {
  var v = gzGetVolume('biology', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u13',
    name: '第3节 探究植物细胞吸水与失水、探究光照强度对光合的影响',
    chapter: '实验与探究 · 第5章 探究类实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、探究植物细胞的吸水与失水' },
      { type: 'paragraph', text: '成熟植物细胞有一个大液泡，液泡内的细胞液具有一定浓度。细胞膜和液泡膜以及两层膜之间的细胞质合称“原生质层”，它相当于一层半透膜。当外界溶液浓度大于细胞液浓度时，细胞失水，原生质层收缩并与细胞壁分离，叫做质壁分离；当外界溶液浓度小于细胞液浓度时，细胞吸水，发生质壁分离复原。' },
      { type: 'keypoint', text: '质壁分离发生的两个必备条件：①细胞必须是活的有大液泡的成熟植物细胞；②原生质层相当于半透膜，且外界溶液浓度大于（或小于）细胞液浓度。动物细胞没有细胞壁，不会发生质壁分离。' },
      { type: 'list', items: [
        '材料选择：常用紫色洋葱鳞片叶外表皮，因其液泡呈紫色，便于观察。',
        '试剂选择：常用质量浓度 0.3 g/mL 的蔗糖溶液，浓度过高会使细胞过度失水死亡而不能复原。',
        '自变量：外界溶液的浓度；因变量：细胞是否发生质壁分离及液泡体积变化。'
      ] },
      { type: 'svg', caption: '质壁分离与复原示意：正常细胞液泡充满、原生质层贴壁；当外界浓度大于细胞液时失水，液泡缩小、原生质层脱离细胞壁。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">质壁分离与复原</text><rect x="60" y="80" width="240" height="170" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="120" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">正常细胞</text><text x="180" y="150" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">液泡充满</text><text x="180" y="178" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">原生质层贴壁</text><rect x="380" y="80" width="240" height="170" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="120" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">质壁分离</text><text x="500" y="150" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">液泡缩小</text><text x="500" y="178" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">原生质层脱离壁</text><polygon points="300,165 340,155 340,175" fill="#3f7d1e"/><text x="340" y="310" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">外界浓度大于细胞液则失水质壁分离</text></svg>' },
      { type: 'paragraph', text: '基本操作步骤：①制作紫色洋葱鳞片叶外表皮的临时装片，先放在低倍镜下观察正常细胞形态；②在盖玻片一侧滴加质量浓度 0.3 g/mL 的蔗糖溶液，另一侧用吸水纸吸引，使细胞浸润在蔗糖溶液中；③观察液泡体积缩小、原生质层与细胞壁分离的现象；④在盖玻片一侧滴加清水，另一侧吸引，观察质壁分离复原。' },
      { type: 'warn', text: '易错辨析：①不能选用质量浓度过高的蔗糖溶液（如 0.5 g/mL 以上），否则细胞会因过度失水而死亡，无法复原；②不能用绿色叶肉细胞直接观察，因为叶绿体颜色会干扰对紫色液泡的观察；③只有活细胞才能发生质壁分离，死细胞原生质层失去选择性，不出现分离。' },
      { type: 'paragraph', text: '本实验的自变量是外界溶液的浓度，通过设置不同浓度的外界溶液（如清水、0.3 g/mL 蔗糖、0.5 g/mL 蔗糖），可观察细胞吸水或失水的程度差异。实验常把细胞置于蔗糖溶液（失水）与清水（吸水复原）两种条件下来形成自身对照。' },
      { type: 'table', caption: '质壁分离与质壁分离复原的现象对照', headers: ['处理', '外界与细胞液浓度关系', '细胞变化', '现象'], rows: [
        ['滴加蔗糖溶液', '外界浓度大于细胞液', '细胞失水', '液泡缩小、质壁分离'],
        ['滴加清水', '外界浓度小于细胞液', '细胞吸水', '液泡胀大、复原'],
        ['高浓度蔗糖', '外界浓度远大于细胞液', '细胞过度失水', '死亡，不能复原']
      ] },
      { type: 'svg', caption: '小叶片浮起法装置：烧杯中盛 NaHCO₃ 溶液使小叶片沉底，上方用灯光照射，光合作用产生 O₂ 使叶片上浮，上浮越快说明光合越强。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">小叶片浮起法装置</text><rect x="200" y="80" width="280" height="170" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="120" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">烧杯+NaHCO₃ 溶液</text><text x="340" y="150" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">小叶片沉底</text><text x="340" y="178" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">上方用灯光照射</text><polygon points="340,250 330,270 350,270" fill="#3f7d1e"/><text x="340" y="310" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">光合产 O₂ 使叶片浮起，越快说明光合越强</text></svg>' },
      { type: 'example', text: '例题：将紫色洋葱鳞片叶外表皮细胞分别置于清水和 0.3 g/mL 蔗糖溶液中。置于蔗糖溶液中的细胞出现质壁分离，置于清水中的细胞形态基本不变，说明细胞液浓度介于两者之间，且活细胞具有选择透过性。' },
      { type: 'tip', text: '高频考点：①质量浓度 0.3 g/mL 的蔗糖溶液是教材标准浓度；②观察指标是“原生质层与细胞壁是否分离”及“液泡大小与颜色深浅”；③本实验可证明原生质层相当于半透膜，也可用于判断细胞死活。' },
      { type: 'paragraph', text: '“探究光照强度对光合作用的影响”常用小叶片浮起法。选取生长旺盛的绿叶，用打孔器取小圆形叶片若干，先放入注射器抽真空排出叶肉细胞间隙的空气，使叶片沉入水底；再将叶片放入盛有 NaHCO₃ 溶液的烧杯中，用不同距离的灯光照射，光合作用产生的 O₂ 在细胞间隙积累，使叶片上浮。' },
      { type: 'svg', caption: '光照强度梯度设置：将光源放在离烧杯不同距离处，距离越近光照越强；通过比较叶片上浮所需时间来判断光合速率大小。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">光照强度梯度设置</text><circle cx="120" cy="200" r="20" fill="#5aa832"/><text x="120" y="244" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">近(强)</text><circle cx="340" cy="200" r="20" fill="#5aa832"/><text x="340" y="244" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">中</text><circle cx="560" cy="200" r="20" fill="#5aa832"/><text x="560" y="244" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">远(弱)</text><polygon points="160,200 200,190 200,210" fill="#3f7d1e"/><polygon points="380,200 420,190 420,210" fill="#3f7d1e"/><text x="340" y="310" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">光源距离越远，光照强度越小</text></svg>' },
      { type: 'list', items: [
        '自变量：光照强度，常通过“光源与烧杯的距离”或“LED 灯亮度”来控制。',
        '因变量：小叶片上浮所需的时间（或单位时间上浮的叶片数），时间越短光合越强。',
        '无关变量：NaHCO₃ 浓度、温度、叶片大小、光照时间等应保持一致。'
      ] },
      { type: 'keypoint', text: '真空抽气是本实验的关键预处理：用注射器抽出叶片细胞间隙的空气，使叶片密度变大而沉入水底，这样光照后光合产生的 O₂ 才能把叶片“顶”起来浮出水面，上浮现象才明显可观察。' },
      { type: 'paragraph', text: 'NaHCO₃ 溶液的作用是为光合作用提供 CO₂ 原料。因为本实验要单独研究光照强度的影响，所以必须保证 CO₂ 供应充足且各组相同，否则 CO₂ 不足会成为限制因素，干扰对光照强度作用的判断。' },
      { type: 'example', text: '例题：三组烧杯与光源距离分别为 10 厘米、20 厘米、30 厘米，其余条件相同。结果 10 厘米组叶片最先上浮。这说明光照强度越大，光合作用越强，产生 O₂ 越快，叶片上浮所需时间越短。' },
      { type: 'tip', text: '答题模板：预期结果用“若……则……”表述，例如“若距离光源越近的组叶片上浮越快，则说明光照强度越大光合作用越强”。注意自变量只能改变光照，其他条件必须相同且适宜。' }
    ],
    exercises: [
      { type: 'choice', question: '探究植物细胞吸水和失水的实验中，常用的实验材料是', options: ['A. 紫色洋葱鳞片叶外表皮', 'B. 绿色菠菜叶肉细胞', 'C. 哺乳动物成熟红细胞', 'D. 根尖分生区细胞'], answer: 'A. 紫色洋葱鳞片叶外表皮', explanation: '紫色洋葱鳞片叶外表皮细胞液泡呈紫色，发生质壁分离时紫色液泡缩小、颜色加深，便于在显微镜下直接观察；其他材料或无色或结构不适合，观察效果差。' },
      { type: 'choice', question: '小叶片浮起法探究光照强度对光合的影响时，下列应作为因变量的是', options: ['A. 小叶片上浮所需时间', 'B. 光源与烧杯的距离', 'C. NaHCO₃ 溶液的浓度', 'D. 实验温度'], answer: 'A. 小叶片上浮所需时间', explanation: '小叶片浮起法通过统计叶片上浮所需时间来衡量光合作用强弱，时间越短说明光合产 O₂ 越快、光合越强，因此上浮时间是因变量；光源距离和 NaHCO₃ 浓度是自变量或无关变量。' },
      { type: 'choice', question: '为使小叶片沉入水底以便观察上浮，实验前应进行的处理是', options: ['A. 加热煮沸', 'B. 真空抽气', 'C. 滴加蔗糖', 'D. 光照培养'], answer: 'B. 真空抽气', explanation: '实验前要把小叶片放入注射器抽真空，排出叶片细胞间隙的空气使叶片沉入水底，这样光照后光合产生的 O₂ 才能在细胞间隙积累、推叶片上浮，真空抽气是关键的预处理。' },
      { type: 'fill', question: '探究植物细胞吸水和失水时，本实验人为改变的因素（自变量）是____。', answer: '外界溶液的浓度', explanation: '外界溶液的浓度是人为改变、引发细胞吸水或失水的因素，因此是自变量；因变量是细胞是否发生质壁分离以及液泡体积的变化。' },
      { type: 'fill', question: '小叶片浮起法中使用 NaHCO₃ 溶液，目的是为光合作用提供原料____。', answer: 'CO₂', explanation: 'NaHCO₃ 在水中分解可释放 CO₂，为叶片光合作用提供碳源，保证在改变光照强度时其他条件不变，使光照强度成为唯一的自变量。' }
    ]
  });
})();
