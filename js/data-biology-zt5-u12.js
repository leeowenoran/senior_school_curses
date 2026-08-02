/* 生物学 · 高三复习 · 实验与探究 · 第5章 · 课时：探究酵母菌细胞呼吸方式 */
(function () {
  var v = gzGetVolume('biology', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u12',
    name: '第2节 探究酵母菌细胞呼吸方式',
    chapter: '实验与探究 · 第5章 探究类实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验目的与原理' },
      { type: 'paragraph', text: '酵母菌是一种单细胞真菌，属于兼性厌氧生物：有氧时能进行有氧呼吸，把葡萄糖彻底分解成 CO₂ 和水并释放大量能量；无氧时能进行无氧呼吸，把葡萄糖分解成酒精和 CO₂ 并释放少量能量。本实验通过设置有氧和无氧两种条件，比较两种条件下 CO₂ 的产生量和是否产生酒精，从而探究酵母菌的呼吸方式。' },
      { type: 'keypoint', text: '本实验的核心思想是“对比实验”：有氧组和无氧组都是实验组，两组相互对照，不另设空白对照组。通过比较两组现象差异得出结论，这种对照方式也叫相互对照。' },
      { type: 'list', items: [
        '探究问题一：酵母菌在有氧和无氧条件下是否都产生 CO₂，产生量有何差异。',
        '探究问题二：酵母菌在无氧条件下是否产生酒精。',
        '实验变量：自变量是有无氧气，因变量是 CO₂ 产生量和酒精有无，温度、酵母菌数量等是无关变量。'
      ] },
      { type: 'svg', caption: '探究酵母菌细胞呼吸方式的两种装置：有氧组用 NaOH 吸收空气中 CO₂ 后通入空气，无氧组用石蜡油封口隔绝空气，两组都连接澄清石灰水。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">酵母菌呼吸方式探究装置</text><rect x="40" y="70" width="260" height="170" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="170" y="100" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">有氧组</text><text x="170" y="130" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">NaOH 吸收 CO₂</text><text x="170" y="158" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">酵母菌培养液</text><text x="170" y="186" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">接通空气泵</text><rect x="380" y="70" width="260" height="170" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="510" y="100" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">无氧组</text><text x="510" y="130" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">石蜡油封口</text><text x="510" y="158" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">酵母菌培养液</text><text x="510" y="186" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">隔绝空气</text><polygon points="300,155 340,145 340,165" fill="#3f7d1e"/><text x="340" y="320" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">两组均连澄清石灰水，比较 CO₂ 产生</text></svg>' },
      { type: 'paragraph', text: '有氧条件的设置：在酵母菌培养液前连接盛有 NaOH 溶液的锥形瓶，NaOH 能吸收通入空气中的 CO₂，再让空气通过酵母菌培养液。这样酵母菌在有氧环境下进行有氧呼吸，产生的 CO₂ 进入后续的检测试剂。' },
      { type: 'warn', text: '易错辨析：NaOH 的作用是吸收“空气中的”CO₂，不是吸收酵母菌产生的 CO₂。若忘记放 NaOH，空气中原有的 CO₂ 就会干扰结果，导致无法判断石灰水变浑浊到底来自哪里。无氧组则用石蜡油封口隔绝空气，而不是通入氮气。' },
      { type: 'paragraph', text: '无氧条件的设置：向酵母菌培养液中加入酵母菌，再加入液体石蜡或食用油在液面形成一层油膜，把培养液与空气隔开，创造无氧环境，使酵母菌只能进行无氧呼吸。装置同样连接澄清石灰水检测 CO₂，并保留样液用于酒精检测。' },
      { type: 'table', caption: '酵母菌呼吸产物的检测方法对比', headers: ['检测物质', '试剂', '条件', '现象'], rows: [
        ['CO₂', '澄清石灰水', '直接通入', '变浑浊，产生白色沉淀'],
        ['CO₂', '溴麝香草酚蓝水溶液', '直接通入', '由蓝变绿再变黄'],
        ['酒精', '酸性重铬酸钾溶液', '酸性条件、常温', '橙色变成灰绿色']
      ] },
      { type: 'svg', caption: 'CO₂ 的两种检测试剂：澄清石灰水遇 CO₂ 变浑浊出现白色沉淀；溴麝香草酚蓝水溶液由蓝变绿再变黄，且变色越快说明 CO₂ 越多。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">CO₂ 检测方法对比</text><rect x="40" y="70" width="280" height="180" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="100" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">澄清石灰水</text><text x="180" y="132" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">变浑浊(白色沉淀)</text><text x="180" y="162" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">越浑浊 CO₂ 越多</text><rect x="360" y="70" width="280" height="180" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="100" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">溴麝香草酚蓝</text><text x="500" y="132" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">蓝变绿再变黄</text><text x="500" y="162" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">变色快则 CO₂ 多</text><polygon points="320,160 360,150 360,170" fill="#3f7d1e"/><text x="340" y="320" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">两种试剂都能检测 CO₂，后者还可粗略比较速率</text></svg>' },
      { type: 'example', text: '例题：某同学做该实验时，发现有氧组和无氧组的澄清石灰水都变浑浊，而无氧组还能使酸性重铬酸钾变灰绿色。这说明酵母菌在有氧和无氧条件下都产生 CO₂，但只有无氧条件下产生酒精，由此证明酵母菌为兼性厌氧型。' },
      { type: 'tip', text: '高频考点：酒精检测必须用“酸性”重铬酸钾，要在检测前加浓硫酸创造酸性环境；重铬酸钾本身橙色，遇酒精变灰绿色。注意它和检测蛋白质的双缩脲试剂(紫色)、检测还原糖的斐林试剂(砖红色)完全不同，不可张冠李戴。' },
      { type: 'paragraph', text: '酒精的检测：从无氧组培养液中取少量样液，加入酸性重铬酸钾溶液，若溶液由橙色变为灰绿色，说明有酒精生成，即酵母菌进行了无氧呼吸。检测应在酸性条件下进行，通常在样液中滴加浓硫酸后再加重铬酸钾。' },
      { type: 'svg', caption: '酒精的检测原理：橙色的重铬酸钾在酸性条件下遇到酒精会变成灰绿色，颜色变化明显，是该实验判断无氧呼吸的关键依据。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">酒精的检测(酸性重铬酸钾)</text><rect x="60" y="80" width="240" height="150" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="120" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">重铬酸钾溶液</text><text x="180" y="150" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">橙色</text><rect x="380" y="80" width="240" height="150" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="120" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">遇酒精后</text><text x="500" y="150" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">变为灰绿色</text><polygon points="300,155 340,145 340,165" fill="#3f7d1e"/><text x="340" y="290" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">橙色的重铬酸钾遇酒精变灰绿色</text></svg>' },
      { type: 'list', items: [
        '结论一：酵母菌在有氧条件下产生 CO₂ 和水，进行有氧呼吸。',
        '结论二：酵母菌在无氧条件下产生 CO₂ 和酒精，进行无氧呼吸。',
        '结论三：酵母菌是兼性厌氧生物，有氧时 CO₂ 产生量更多，无氧时才产生酒精。'
      ] },
      { type: 'keypoint', text: '对比实验（相互对照）与空白对照不同：空白对照有专门的对照组（不处理），而对比实验的几组都是实验组、彼此对照。本实验有氧组和无氧组互相作为对方的对照，重点在于“比较”而非“有没有变化”。' },
      { type: 'paragraph', text: '无关变量的控制：两组应使用等量同种酵母菌、等量相同浓度的葡萄糖溶液，置于相同且适宜的温度（一般 25℃ 到 30℃）下培养相同时间，只有氧气条件不同，保证结果差异只来自自变量。' },
      { type: 'example', text: '例题：若某实验把有氧组和无氧组的温度分别设为 30℃ 和 20℃，最后发现两组 CO₂ 量不同。该设计能否说明是氧气导致的？不能，因为温度也不同，变量不唯一，违反了单一变量原则，应让两组温度保持一致。' },
      { type: 'tip', text: '答题模板：实验目的可写为“探究酵母菌在有氧和无氧条件下的细胞呼吸方式”；预期结果常用“若……则……”表述，例如“若无氧组使酸性重铬酸钾变灰绿色，则有氧组不变，则说明无氧呼吸产生酒精”。' }
    ],
    exercises: [
      { type: 'choice', question: '在有氧组装置中，NaOH 溶液的主要作用是', options: ['A. 提供有氧条件', 'B. 吸收空气中的 CO₂，排除干扰', 'C. 杀死酵母菌', 'D. 为酵母菌提供能量'], answer: 'B. 吸收空气中的 CO₂，排除干扰', explanation: 'NaOH 溶液放在酵母菌培养液之前，作用是吸收通入空气中的 CO₂，这样后续澄清石灰水变浑浊就只能来自酵母菌呼吸产生的 CO₂，从而排除空气中 CO₂ 对实验结果的干扰。' },
      { type: 'choice', question: '检测无氧呼吸产生的酒精，常用的试剂及颜色变化是', options: ['A. 斐林试剂，砖红色', 'B. 双缩脲试剂，紫色', 'C. 酸性重铬酸钾，灰绿色', 'D. 碘液，蓝色'], answer: 'C. 酸性重铬酸钾，灰绿色', explanation: '在酸性条件下，橙色的重铬酸钾溶液与酒精发生化学反应变成灰绿色，这是检测酒精的专一方法；斐林试剂检测还原糖、双缩脲试剂检测蛋白质、碘液检测淀粉，均与酒精无关。' },
      { type: 'choice', question: '本实验设置有氧组和无氧组，这两组之间的关系属于', options: ['A. 空白对照', 'B. 自身对照', 'C. 相互对照（对比实验）', 'D. 条件对照'], answer: 'C. 相互对照（对比实验）', explanation: '本实验设置有氧和无氧两组，两组都是实验组、彼此相互对照，通过比较 CO₂ 产生量和是否有酒精来判断呼吸方式，这种没有空白对照、两组互为对照的实验称为对比实验，也称相互对照。' },
      { type: 'fill', question: '用溴麝香草酚蓝水溶液检测 CO₂ 时，颜色变化是由蓝变绿再变____。', answer: '黄', explanation: '溴麝香草酚蓝水溶液遇 CO₂ 会由蓝色逐渐变成绿色，最终变成黄色；根据变色所需时间的长短，可以粗略比较不同条件下产生 CO₂ 的速率。' },
      { type: 'fill', question: '为创造无氧条件，常在酵母菌培养液表面覆盖一层____以隔绝空气。', answer: '石蜡油', explanation: '无氧组要在酵母菌培养液表面覆盖一层石蜡油，石蜡油不透水不透气，能把培养液与空气隔开，从而创造无氧环境，使酵母菌只能进行无氧呼吸。' }
    ]
  });
})();
