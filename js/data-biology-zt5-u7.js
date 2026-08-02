/* 生物学 · 高三复习 · 实验与探究 · 第3章 · 课时：显微观察·细胞结构与核酸分布 */
(function () {
  var v = gzGetVolume('biology', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u7',
    name: '第2节 显微观察·细胞结构与核酸分布',
    chapter: '实验与探究 · 第3章 显微镜观察类实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '第2节 显微观察·细胞结构与核酸分布' },
      { type: 'paragraph', text: '本节包含两个经典显微观察实验：一是用高倍镜观察细胞中的叶绿体和线粒体，二是用染色法观察 DNA 和 RNA 在细胞中的分布。复习重点是记住材料选择、染色试剂、条件和最终现象。' },
      { type: 'keypoint', text: '叶绿体观察选用藓类小叶或黑藻叶片，材料本身含叶绿素呈绿色，属于活体观察，不需要染色，直接用高倍镜即可看到绿色椭球形颗粒。' },
      { type: 'list', items: ['制作叶片临时装片：在载玻片滴一滴清水。', '放入黑藻小叶，加盖玻片，避免产生气泡。', '先用低倍镜找到叶肉细胞，再换高倍镜观察。', '可观察到叶绿体随细胞质流动而移动。'] },
      { type: 'paragraph', text: '线粒体观察需用健那绿染液。健那绿是一种活体染色剂，能将活细胞中的线粒体染成蓝绿色，而细胞质接近无色，从而在高倍镜下清楚看到线粒体形态。' },
      { type: 'svg', caption: '叶绿体与线粒体观察对比', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="20" font-weight="bold" fill="#3f7d1e">叶绿体与线粒体观察对比</text><rect x="40" y="70" width="260" height="240" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="170" y="100" text-anchor="middle" font-size="15" font-weight="bold" fill="#2e3a22">叶绿体</text><text x="170" y="140" text-anchor="middle" font-size="12" fill="#2e3a22">材料：黑藻、藓类小叶</text><text x="170" y="164" text-anchor="middle" font-size="12" fill="#2e3a22">无需染色，本身绿色</text><text x="170" y="196" text-anchor="middle" font-size="12" fill="#5aa832">活体观察，高倍镜可见</text><rect x="380" y="70" width="260" height="240" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="510" y="100" text-anchor="middle" font-size="15" font-weight="bold" fill="#2e3a22">线粒体</text><text x="510" y="140" text-anchor="middle" font-size="12" fill="#2e3a22">材料：口腔上皮细胞</text><text x="510" y="164" text-anchor="middle" font-size="12" fill="#2e3a22">健那绿染液活体染色</text><text x="510" y="196" text-anchor="middle" font-size="12" fill="#5aa832">染成蓝绿色</text><polygon points="320,180 320,196 338,188" fill="#3f7d1e"/><text x="340" y="300" text-anchor="middle" font-size="13" fill="#2e3a22">二者都用高倍镜，健那绿为活体染色剂</text></svg>' },
      { type: 'tip', text: '健那绿是活体染色剂，染色过程中细胞仍然存活，因此染色后细胞结构保持正常；这与多数需要杀死细胞的染色剂不同，是高考常考的易混点。' },
      { type: 'table', caption: '叶绿体与线粒体观察实验对比', headers: ['项目', '叶绿体观察', '线粒体观察'], rows: [['材料', '黑藻叶片、藓类小叶', '人的口腔上皮细胞'], ['试剂', '无需染色', '健那绿染液'], ['条件', '活体、高倍镜', '活体、高倍镜'], ['现象', '绿色椭球形随细胞质流动', '线粒体呈蓝绿色，质近无色']] },
      { type: 'warn', text: '易错：健那绿把线粒体染成蓝绿色，不是绿色；叶绿体本身绿色无需染色。两者都呈绿系颜色但来源不同，不能混淆试剂与现象。' },
      { type: 'example', text: '例题：下列试剂中，能将活细胞中线粒体染成蓝绿色的是？解析：健那绿是专一性活体染色剂，可使线粒体呈蓝绿色；甲基绿染 DNA，吡罗红染 RNA，苏丹Ⅲ染脂肪。答案为健那绿染液。' },
      { type: 'paragraph', text: '观察 DNA 和 RNA 在细胞中的分布，使用甲基绿和吡罗红混合染色剂。甲基绿使 DNA 呈绿色，吡罗红使 RNA 呈红色，二者混合使用可同时显示两类核酸的位置。' },
      { type: 'list', items: ['制片：在载玻片上涂口腔上皮细胞，烘干固定。', '水解：用质量分数 8% 的盐酸处理，改变膜透性并使 DNA 与蛋白质分离。', '冲洗：用蒸馏水的缓水流冲洗，洗去多余盐酸。', '染色：滴加甲基绿吡罗红混合染液，吸去多余染液。', '观察：先低倍后高倍，对比核与质的颜色。'] },
      { type: 'keypoint', text: '甲基绿使 DNA 呈绿色，吡罗红使 RNA 呈红色；盐酸的作用是改变细胞膜通透性，同时使染色质中的 DNA 与蛋白质分离，利于 DNA 着色。' },
      { type: 'svg', caption: 'DNA与RNA分布观察流程', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="19" font-weight="bold" fill="#3f7d1e">DNA与RNA分布观察流程</text><rect x="14" y="150" width="110" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="69" y="183" text-anchor="middle" font-size="13" fill="#2e3a22">制片</text><polygon points="128,170 128,186 144,178" fill="#3f7d1e"/><rect x="146" y="150" width="110" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="201" y="183" text-anchor="middle" font-size="13" fill="#2e3a22">盐酸水解</text><polygon points="260,170 260,186 276,178" fill="#3f7d1e"/><rect x="278" y="150" width="110" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="333" y="183" text-anchor="middle" font-size="13" fill="#2e3a22">缓水冲洗</text><polygon points="392,170 392,186 408,178" fill="#3f7d1e"/><rect x="410" y="150" width="110" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="465" y="183" text-anchor="middle" font-size="13" fill="#2e3a22">染色</text><polygon points="524,170 524,186 540,178" fill="#3f7d1e"/><rect x="542" y="150" width="110" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="597" y="183" text-anchor="middle" font-size="13" fill="#2e3a22">观察</text><text x="340" y="250" text-anchor="middle" font-size="13" fill="#5aa832">盐酸质量分数 8%，冲洗用蒸馏水的缓流</text></svg>' },
      { type: 'tip', text: '冲洗时一定要用缓水流，避免把细胞冲走；水解用的盐酸质量分数为 8%，温度过高或时间过长都会破坏细胞结构，影响观察效果。' },
      { type: 'warn', text: '易错：水解用的是盐酸而不是胰蛋白酶；冲洗用蒸馏水的缓流而不是氢氧化钠。盐酸作用是改变膜透性并分离 DNA 与蛋白质，不是消化蛋白质。' },
      { type: 'example', text: '例题：用甲基绿吡罗红混合染色剂处理口腔上皮细胞，结果细胞核呈绿色、细胞质呈红色，说明？解析：甲基绿使 DNA 呈绿色，吡罗红使 RNA 呈红色，现象表明 DNA 主要分布在细胞核，RNA 主要分布在细胞质。' },
      { type: 'paragraph', text: '实验结论：DNA 主要分布在细胞核中，线粒体和叶绿体中也有少量 DNA；RNA 主要分布在细胞质中。这一结论体现了核酸在细胞中的空间分布规律。' },
      { type: 'tip', text: '选材宜用无色或浅色材料，如口腔上皮细胞、洋葱鳞片叶内表皮，避免材料本身颜色干扰染色结果的观察。' },
      { type: 'svg', caption: '甲基绿吡罗红染色结果示意', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="19" font-weight="bold" fill="#3f7d1e">甲基绿吡罗红染色结果</text><circle cx="340" cy="190" r="120" fill="#d6eac4" stroke="#3f7d1e"/><circle cx="340" cy="190" r="60" fill="#3f7d1e"/><text x="340" y="196" text-anchor="middle" font-size="14" fill="#eef6e4">细胞核</text><text x="340" y="300" text-anchor="middle" font-size="14" fill="#2e3a22">核被甲基绿染成绿色，质被吡罗红染成红色</text></svg>' }
    ],
    exercises: [
      { type: 'choice', question: '能将活细胞中的线粒体染成蓝绿色的试剂是', options: ['A. 甲基绿', 'B. 健那绿', 'C. 吡罗红', 'D. 苏丹Ⅲ'], answer: 'B. 健那绿', explanation: '健那绿是专一性活体染色剂，可将活细胞中的线粒体染成蓝绿色；甲基绿染 DNA，吡罗红染 RNA，苏丹Ⅲ染脂肪，均不符合题干要求。' },
      { type: 'choice', question: '用甲基绿和吡罗红混合染色剂处理细胞，细胞核被染成', options: ['A. 红色', 'B. 绿色', 'C. 蓝绿色', 'D. 紫色'], answer: 'B. 绿色', explanation: '甲基绿对 DNA 亲和力强，使 DNA 呈绿色；DNA 主要分布在细胞核，因此细胞核被染成绿色，而 RNA 主要分布在细胞质被吡罗红染成红色。' },
      { type: 'choice', question: '下列可直接用高倍镜观察叶绿体且无需染色的是', options: ['A. 口腔上皮细胞', 'B. 黑藻叶片', 'C. 根尖分生区', 'D. 血液涂片'], answer: 'B. 黑藻叶片', explanation: '黑藻叶片和藓类小叶含叶绿体本身呈绿色，属活体观察不需染色；口腔上皮细胞无线粒体外无明显绿色结构，根尖与血液均不含明显叶绿体，故只有黑藻叶片符合。' },
      { type: 'fill', question: '观察 DNA 和 RNA 分布实验中，质量分数 8% 的盐酸能改变细胞膜的通透性，并促使 DNA 与____分离。', answer: '蛋白质', explanation: '盐酸能增大细胞膜通透性，并使染色质中的 DNA 与蛋白质分离，有利于 DNA 与甲基绿结合而着色，这是该实验的关键原理之一。' },
      { type: 'fill', question: '观察 DNA 和 RNA 在细胞中分布所用的混合染色剂是甲基绿和____（填试剂名）。', answer: '吡罗红', explanation: '甲基绿和吡罗红混合染色剂同时使用，甲基绿使 DNA 呈绿色、吡罗红使 RNA 呈红色，从而在同一细胞中显示两类核酸的分布位置。' }
    ]
  });
})();
