/* 生物学 · 高三复习 · 实验与探究 · 第8章 · 课时：高频考点归纳 */
(function () {
  var v = gzGetVolume('biology', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u20',
    name: '第1节 高频考点归纳',
    chapter: '实验与探究 · 第8章 高频考点与实验设计步骤',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、酒精在不同实验中的浓度与作用' },
      { type: 'paragraph', text: '酒精是高中生物实验中最常见的试剂，但它在不同实验里浓度不同、作用也完全不同。把各种浓度的作用整理成一张表，是避免张冠李戴的最有效办法。' },
      { type: 'table', caption: '酒精在各实验中的浓度与作用', headers: ['酒精浓度', '实验/用途', '作用'], rows: [['体积分数50%', '脂肪鉴定', '洗去浮色（苏丹Ⅲ染液）'], ['体积分数70%', '消毒、固定标本', '杀菌、固定土壤小动物'], ['体积分数95%', '解离液、物质提取', '与15%盐酸配解离液；提取'], ['无水乙醇', '提取光合色素、提取 DNA', '溶解并提取色素或 DNA']] },
      { type: 'keypoint', text: '酒精是实验中的万能配角，浓度决定作用：低浓度洗浮色、中浓度消毒固定、高浓度参与解离、无水纯品负责提取，务必按浓度对号入座。' },
      { type: 'heading', text: '二、盐酸的作用' },
      { type: 'table', caption: '盐酸在不同实验中的作用', headers: ['盐酸浓度', '实验', '作用'], rows: [['质量分数8%', '观察 DNA 和 RNA 分布', '改变膜通透性，使 DNA 与蛋白质分离'], ['质量分数15%', '观察有丝分裂解离', '与95%酒精配成解离液，使组织酥软'], ['质量分数8%（约）', '影响酶活性', '提供酸性条件（如胃蛋白酶最适 pH）']] },
      { type: 'paragraph', text: '盐酸在实验中主要扮演两种角色：在 DNA 分布实验中以 8% 浓度改变膜通透并促进 DNA 与蛋白质分离；在观察有丝分裂时以 15% 浓度与 95% 酒精共同组成解离液。记住浓度与对应实验即可。' },
      { type: 'keypoint', text: '盐酸两浓度：质量分数8%用于水解（改膜通透、分离 DNA 与蛋白质），质量分数15%用于解离（与95%酒精配合使细胞分散）。' },
      { type: 'heading', text: '三、常见颜色反应' },
      { type: 'table', caption: '常见颜色反应归纳', headers: ['试剂/物质', '被测对象', '颜色'], rows: [['斐林试剂（水浴加热）', '还原糖', '砖红色沉淀'], ['双缩脲试剂', '蛋白质', '紫色'], ['苏丹Ⅲ染液', '脂肪', '橘黄色'], ['碘液', '淀粉', '蓝色'], ['甲基绿', 'DNA', '绿色'], ['吡罗红', 'RNA', '红色'], ['重铬酸钾（酸性）', '酒精', '灰绿色'], ['健那绿', '线粒体', '蓝绿色']] },
      { type: 'svg', caption: '不同试剂与对应物质反应呈现特征颜色，是鉴定类实验的直观证据，须将试剂、条件与颜色一并记忆。', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="22" font-weight="bold" fill="#3f7d1e">常见显色反应试管颜色</text><rect x="60" y="70" width="50" height="160" rx="6" fill="#b34a2a"/><text x="85" y="255" text-anchor="middle" font-size="13" fill="#2e3a22">斐林→砖红</text><rect x="150" y="70" width="50" height="160" rx="6" fill="#7a3f9e"/><text x="175" y="255" text-anchor="middle" font-size="13" fill="#2e3a22">双缩脲→紫</text><rect x="240" y="70" width="50" height="160" rx="6" fill="#e6902a"/><text x="265" y="255" text-anchor="middle" font-size="13" fill="#2e3a22">苏丹Ⅲ→橘黄</text><rect x="330" y="70" width="50" height="160" rx="6" fill="#2f6fd1"/><text x="355" y="255" text-anchor="middle" font-size="13" fill="#2e3a22">淀粉+碘→蓝</text><rect x="420" y="70" width="50" height="160" rx="6" fill="#2f8f3f"/><text x="445" y="255" text-anchor="middle" font-size="13" fill="#2e3a22">甲基绿→绿</text><rect x="510" y="70" width="50" height="160" rx="6" fill="#d12f4f"/><text x="535" y="255" text-anchor="middle" font-size="13" fill="#2e3a22">重铬酸钾→灰绿</text><text x="340" y="320" text-anchor="middle" font-size="14" fill="#5aa832">记住「试剂+条件+颜色」三位一体</text></svg>' },
      { type: 'warn', text: '易错：显色试剂与条件混淆——斐林试剂需水浴加热才出砖红色，双缩脲试剂不加热；苏丹Ⅲ染色后要用体积分数50%酒精洗浮色；甲基绿吡罗红要混合使用；重铬酸钾须在酸性条件下才变灰绿色。' },
      { type: 'example', text: '例题：用斐林试剂检测某尿液样品，水浴加热后出现砖红色沉淀，说明该样品中含有什么物质？答：含有还原糖（如葡萄糖），因为斐林试剂与还原糖在水浴加热条件下生成砖红色沉淀。' },
      { type: 'tip', text: '高频考点：记住「试剂 + 条件 + 颜色」三位一体。例如斐林试剂—水浴加热—砖红；双缩脲试剂—不加热—紫色；苏丹Ⅲ—50%酒精洗浮色—橘黄；酸性重铬酸钾—灰绿。' },
      { type: 'heading', text: '四、实验目的规范书写' },
      { type: 'list', items: ['验证类：写「验证 + 自变量 + 因变量 + 对象」。', '探究类：写「探究 + 自变量 + 因变量 + 对象」。', '探究最适条件：写「探究……的最适浓度或最适温度」。', '避免写口语化、无变量的模糊目的。'] },
      { type: 'svg', caption: '规范的实验目的应写成「验证/探究 + 自变量 + 因变量 + 实验对象」，探究最适条件时表述为探究某因素的最适浓度或温度。', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="22" font-weight="bold" fill="#3f7d1e">实验目的的规范结构</text><rect x="40" y="120" width="170" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="125" y="155" text-anchor="middle" font-size="16" fill="#2e3a22">验证 / 探究</text><text x="125" y="182" text-anchor="middle" font-size="13" fill="#2e3a22">行为动词</text><rect x="255" y="120" width="170" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="155" text-anchor="middle" font-size="16" fill="#2e3a22">自变量</text><text x="340" y="182" text-anchor="middle" font-size="13" fill="#2e3a22">被改变的因素</text><rect x="470" y="120" width="170" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="555" y="155" text-anchor="middle" font-size="16" fill="#2e3a22">因变量 + 对象</text><text x="555" y="182" text-anchor="middle" font-size="13" fill="#2e3a22">观测指标</text><text x="340" y="270" text-anchor="middle" font-size="14" fill="#5aa832">验证 + 自变量 + 因变量 + 对象</text><text x="340" y="300" text-anchor="middle" font-size="14" fill="#2e3a22">探究最适条件则写「探究……最适浓度/温度」</text></svg>' },
      { type: 'keypoint', text: '实验目的规范表述核心是「验证/探究 + 自变量 + 因变量 + 对象」；探究某因素最佳水平时，必须写成「探究……的最适浓度或最适温度」。' },
      { type: 'heading', text: '五、易混点再辨析' },
      { type: 'list', items: ['酒精：50%洗浮色、70%消毒、95%解离、无水提取，四者不可混淆。', '盐酸：8%水解改膜、15%解离分散，浓度对应实验要记牢。', '颜色反应：试剂、条件、颜色三者绑定，不能只见颜色不见条件。', '实验目的：验证是已知结论，探究是未知结论，最适条件属探究。'] },
      { type: 'svg', caption: '酒精浓度、盐酸作用、颜色反应是高考实验题三大高频归纳，集中记忆可大幅减少失分。', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="22" font-weight="bold" fill="#3f7d1e">高频考点三大归纳</text><rect x="50" y="80" width="170" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="135" y="120" text-anchor="middle" font-size="16" font-weight="bold" fill="#2e3a22">酒精浓度</text><text x="135" y="155" text-anchor="middle" font-size="13" fill="#2e3a22">50/70/95/</text><text x="135" y="178" text-anchor="middle" font-size="13" fill="#2e3a22">无水乙醇</text><text x="135" y="210" text-anchor="middle" font-size="13" fill="#2e3a22">作用各异</text><rect x="255" y="80" width="170" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="120" text-anchor="middle" font-size="16" font-weight="bold" fill="#2e3a22">盐酸作用</text><text x="340" y="155" text-anchor="middle" font-size="13" fill="#2e3a22">8% 水解</text><text x="340" y="178" text-anchor="middle" font-size="13" fill="#2e3a22">15% 解离</text><text x="340" y="210" text-anchor="middle" font-size="13" fill="#2e3a22">改膜通透</text><rect x="460" y="80" width="170" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="545" y="120" text-anchor="middle" font-size="16" font-weight="bold" fill="#2e3a22">颜色反应</text><text x="545" y="155" text-anchor="middle" font-size="13" fill="#2e3a22">砖红/紫/</text><text x="545" y="178" text-anchor="middle" font-size="13" fill="#2e3a22">橘黄/蓝/绿</text><text x="545" y="210" text-anchor="middle" font-size="13" fill="#2e3a22">灰绿等</text><text x="340" y="320" text-anchor="middle" font-size="14" fill="#5aa832">三者是实验题最常考、最易混的归纳点</text></svg>' },
      { type: 'paragraph', text: '综上，酒精浓度、盐酸作用、常见颜色反应三大归纳是高考实验题的高频考点，再配合实验目的的规范书写，就抓住了实验复习的得分要害。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于酒精在实验中作用的叙述，错误的是', options: ['A. 脂肪鉴定中用体积分数50%酒精洗浮色', 'B. 体积分数70%酒精用于消毒或固定', 'C. 体积分数95%酒精参与解离液', 'D. 无水乙醇用于洗去浮色'], answer: 'D. 无水乙醇用于洗去浮色', explanation: '无水乙醇的作用是提取光合色素或提取 DNA，而洗去浮色用的是体积分数50%的酒精；体积分数70%酒精用于消毒或固定标本，体积分数95%酒精与15%盐酸配成解离液，故 D 错误。' },
      { type: 'choice', question: '用甲基绿吡罗红混合染液处理细胞，结果显示细胞核呈绿色、细胞质呈红色，说明', options: ['A. DNA 主要分布在细胞核，RNA 主要在细胞质', 'B. DNA 全在细胞质', 'C. RNA 全在细胞核', 'D. 二者分布无差异'], answer: 'A. DNA 主要分布在细胞核，RNA 主要在细胞质', explanation: '甲基绿使 DNA 呈绿色，吡罗红使 RNA 呈红色；染色后细胞核绿、细胞质红，说明 DNA 主要分布在细胞核，RNA 主要分布在细胞质，体现了核酸在细胞中的分布特点。' },
      { type: 'choice', question: '观察 DNA 和 RNA 在细胞中分布的实验中，质量分数8%盐酸的作用不包括', options: ['A. 改变细胞膜通透性', 'B. 使 DNA 与蛋白质分离', 'C. 解离组织使细胞分散', 'D. 利于染色剂进入细胞'], answer: 'C. 解离组织使细胞分散', explanation: '该实验中8%盐酸的作用是改变膜通透性、促使染色质中 DNA 与蛋白质分离，便于染色剂进入并着色；使组织酥软、细胞分散的是观察有丝分裂时15%盐酸与95%酒精组成的解离液，不属于本实验。' },
      { type: 'fill', question: '酸性条件下，重铬酸钾与酒精反应会由橙色变成______色，这一显色反应常用于检测酵母菌无氧呼吸产生的酒精。', answer: '灰绿', explanation: '在酸性环境中，橙色的重铬酸钾溶液与酒精发生反应变成灰绿色，这是检测酒精的特征显色反应，应用于探究酵母菌细胞呼吸方式等实验中。' },
      { type: 'fill', question: '规范的实验目的常写成「验证/探究 + ______ + 因变量 + 实验对象」；若要找某因素最佳水平，则写「探究……的最适浓度或温度」。', answer: '自变量', explanation: '实验目的须明确研究的核心变量，标准结构为「验证/探究 + 自变量 + 因变量 + 实验对象」，其中自变量是唯一被人为改变的因素，因变量是被观测的指标。' }
    ]
  });
})();
