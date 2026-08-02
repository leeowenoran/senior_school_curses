/* 生物学 · 高三复习 · 实验与探究 · 第4章 · 课时：物质鉴定 */
(function () {
  var v = gzGetVolume('biology', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u9',
    name: '第1节 物质鉴定',
    chapter: '实验与探究 · 第4章 鉴定与提取类实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '第1节 物质鉴定' },
      { type: 'paragraph', text: '物质鉴定类实验利用特定试剂与待测成分发生显色反应，从而判断有机物种类。本节掌握还原糖、脂肪、蛋白质、淀粉、DNA 五类物质的鉴定试剂、条件和现象。' },
      { type: 'keypoint', text: '还原糖与斐林试剂在水浴加热（约 50 至 65℃）条件下生成砖红色沉淀；蔗糖不是还原糖，不能与斐林试剂发生该反应。' },
      { type: 'list', items: ['制备样液：取苹果或梨研磨过滤得到浅色样液。', '加入斐林试剂：甲液和乙液等量混合均匀后加入样液。', '水浴加热：50 至 65℃ 温水浴约 2 分钟。', '观察：出现砖红色沉淀说明含还原糖。'] },
      { type: 'table', caption: '五大物质鉴定试剂与现象', headers: ['物质', '试剂', '条件', '现象'], rows: [['还原糖', '斐林试剂', '水浴加热', '砖红色沉淀'], ['脂肪', '苏丹Ⅲ', '显微镜观察', '橘黄色'], ['蛋白质', '双缩脲试剂', '不需加热', '紫色'], ['淀粉', '碘液', '直接滴加', '蓝色'], ['DNA', '二苯胺', '沸水浴', '蓝色']] },
      { type: 'svg', caption: '五大物质鉴定颜色反应一览', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="19" font-weight="bold" fill="#3f7d1e">五大物质鉴定颜色反应</text><rect x="20" y="90" width="120" height="200" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="80" y="120" text-anchor="middle" font-size="13" fill="#2e3a22">还原糖</text><text x="80" y="160" text-anchor="middle" font-size="12" fill="#2e3a22">斐林试剂</text><text x="80" y="200" text-anchor="middle" font-size="13" fill="#3f7d1e">砖红色</text><rect x="150" y="90" width="120" height="200" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="210" y="120" text-anchor="middle" font-size="13" fill="#2e3a22">脂肪</text><text x="210" y="160" text-anchor="middle" font-size="12" fill="#2e3a22">苏丹III</text><text x="210" y="200" text-anchor="middle" font-size="13" fill="#3f7d1e">橘黄色</text><rect x="280" y="90" width="120" height="200" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="120" text-anchor="middle" font-size="13" fill="#2e3a22">蛋白质</text><text x="340" y="160" text-anchor="middle" font-size="12" fill="#2e3a22">双缩脲</text><text x="340" y="200" text-anchor="middle" font-size="13" fill="#3f7d1e">紫色</text><rect x="410" y="90" width="120" height="200" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="470" y="120" text-anchor="middle" font-size="13" fill="#2e3a22">淀粉</text><text x="470" y="160" text-anchor="middle" font-size="12" fill="#2e3a22">碘液</text><text x="470" y="200" text-anchor="middle" font-size="13" fill="#3f7d1e">蓝色</text><rect x="540" y="90" width="120" height="200" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="600" y="120" text-anchor="middle" font-size="13" fill="#2e3a22">DNA</text><text x="600" y="160" text-anchor="middle" font-size="12" fill="#2e3a22">二苯胺</text><text x="600" y="200" text-anchor="middle" font-size="13" fill="#3f7d1e">蓝色</text><polygon points="340,300 340,316 358,308" fill="#3f7d1e"/><text x="340" y="340" text-anchor="middle" font-size="12" fill="#2e3a22">显色反应需对应试剂与条件</text></svg>' },
      { type: 'tip', text: '斐林试剂甲液和乙液需等量混合、现配现用，再与样液混合水浴加热；双缩脲试剂则先加 A 液造成碱性环境，再加 B 液，二者用法不同不能混用。' },
      { type: 'paragraph', text: '脂肪鉴定用苏丹Ⅲ染液，脂肪被染成橘黄色（苏丹Ⅳ染成红色）。制作花生子叶切片后染色，需用体积分数 50% 的酒精洗去浮色，再在显微镜下看到橘黄色颗粒。' },
      { type: 'warn', text: '易错：斐林试剂与双缩脲试剂成分相似但浓度与用法不同；苏丹Ⅲ染脂肪呈橘黄色而不是红色，苏丹Ⅳ才呈红色，二者不可混淆。' },
      { type: 'example', text: '例题：用苏丹Ⅲ检测花生子叶切片，应观察到什么颜色？解析：苏丹Ⅲ能将脂肪染成橘黄色，染色后需用体积分数 50% 酒精洗去浮色，在显微镜下可见橘黄色脂肪颗粒。' },
      { type: 'keypoint', text: '蛋白质与双缩脲试剂反应呈紫色：先加 A 液（NaOH）创造碱性环境，再加 B 液（CuSO₄），Cu²⁺ 在碱性条件下与肽键形成紫色络合物。' },
      { type: 'list', items: ['加入双缩脲试剂 A 液：营造碱性环境。', '摇匀后再滴加 B 液：提供 Cu²⁺。', '观察：溶液变为紫色说明含蛋白质。', '注意：不需水浴加热，与斐林试剂不同。'] },
      { type: 'svg', caption: '斐林与双缩脲用法对比', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="19" font-weight="bold" fill="#3f7d1e">斐林与双缩脲用法对比</text><rect x="40" y="80" width="280" height="220" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="110" text-anchor="middle" font-size="15" font-weight="bold" fill="#2e3a22">斐林试剂</text><text x="180" y="150" text-anchor="middle" font-size="12" fill="#2e3a22">甲乙液等量混合</text><text x="180" y="174" text-anchor="middle" font-size="12" fill="#2e3a22">现配现用</text><text x="180" y="206" text-anchor="middle" font-size="12" fill="#5aa832">水浴加热砖红色</text><rect x="360" y="80" width="280" height="220" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="110" text-anchor="middle" font-size="15" font-weight="bold" fill="#2e3a22">双缩脲试剂</text><text x="500" y="150" text-anchor="middle" font-size="12" fill="#2e3a22">先加A液后加B液</text><text x="500" y="174" text-anchor="middle" font-size="12" fill="#2e3a22">不需加热</text><text x="500" y="206" text-anchor="middle" font-size="12" fill="#5aa832">碱性环境紫色</text><polygon points="320,190 320,206 338,198" fill="#3f7d1e"/><text x="340" y="300" text-anchor="middle" font-size="13" fill="#2e3a22">成分相似但浓度与用法不同</text></svg>' },
      { type: 'tip', text: '淀粉遇碘液变蓝，这是最简便的鉴定；DNA 鉴定用二苯胺试剂，需在沸水浴条件下加热冷却后溶液呈蓝色，二者都显蓝色但试剂和条件不同。' },
      { type: 'paragraph', text: 'DNA 鉴定用二苯胺试剂，将提取的 DNA 溶于适当浓度的 NaCl 溶液后加入二苯胺，在沸水浴中加热，冷却后溶液显蓝色，这是定性判断 DNA 存在的方法。' },
      { type: 'warn', text: '易错：淀粉遇碘变蓝，DNA 遇二苯胺沸水浴变蓝，两者都呈蓝色但试剂和条件不同，不能把碘液当成 DNA 的鉴定试剂。' },
      { type: 'example', text: '例题：某样液加入双缩脲试剂后呈紫色，说明样液中含有？解析：双缩脲试剂与蛋白质在碱性条件下反应生成紫色络合物，出现紫色说明样液含蛋白质，这是蛋白质鉴定的特征现象。' },
      { type: 'keypoint', text: '选材原则：鉴定还原糖宜选白色或近白色材料（苹果、梨），避免材料本身颜色干扰砖红色观察；脂肪选花生子叶，蛋白质选豆浆或蛋清稀释液。' },
      { type: 'svg', caption: '选材与试剂对应', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="19" font-weight="bold" fill="#3f7d1e">选材与试剂对应</text><rect x="60" y="90" width="240" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="126" text-anchor="middle" font-size="13" fill="#2e3a22">苹果、梨：还原糖</text><rect x="380" y="90" width="240" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="126" text-anchor="middle" font-size="13" fill="#2e3a22">花生子叶：脂肪</text><rect x="60" y="180" width="240" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="216" text-anchor="middle" font-size="13" fill="#2e3a22">豆浆、蛋清：蛋白质</text><rect x="380" y="180" width="240" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="216" text-anchor="middle" font-size="13" fill="#2e3a22">马铃薯：淀粉</text><polygon points="340,260 340,276 358,268" fill="#3f7d1e"/><text x="340" y="308" text-anchor="middle" font-size="13" fill="#2e3a22">选近白色材料避免本身颜色干扰</text></svg>' },
      { type: 'tip', text: '脂肪鉴定可制作花生子叶徒手切片，苏丹Ⅲ染色后体积分数 50% 酒精洗浮色，显微镜高倍镜观察橘黄色脂肪颗粒，是显微与鉴定结合的典型实验。' }
    ],
    exercises: [
      { type: 'choice', question: '鉴定还原糖所用的试剂及出现的颜色反应是', options: ['A. 斐林试剂，砖红色沉淀', 'B. 双缩脲试剂，紫色', 'C. 苏丹Ⅲ，橘黄色', 'D. 碘液，蓝色'], answer: 'A. 斐林试剂，砖红色沉淀', explanation: '还原糖与斐林试剂在水浴加热条件下生成砖红色沉淀；双缩脲试剂用于蛋白质呈紫色，苏丹Ⅲ用于脂肪呈橘黄色，碘液用于淀粉呈蓝色，均不符合题意。' },
      { type: 'choice', question: '用苏丹Ⅲ染液鉴定脂肪时，脂肪被染成的颜色是', options: ['A. 红色', 'B. 橘黄色', 'C. 紫色', 'D. 蓝色'], answer: 'B. 橘黄色', explanation: '苏丹Ⅲ将脂肪染成橘黄色，苏丹Ⅳ才将脂肪染成红色；紫色是蛋白质与双缩脲反应，蓝色是淀粉遇碘或 DNA 遇二苯胺，均不选。' },
      { type: 'choice', question: '鉴定蛋白质使用的试剂及现象是', options: ['A. 斐林试剂，砖红色', 'B. 碘液，蓝色', 'C. 双缩脲试剂，紫色', 'D. 苏丹Ⅲ，橘黄色'], answer: 'C. 双缩脲试剂，紫色', explanation: '蛋白质在碱性条件下与 Cu²⁺ 反应生成紫色络合物，用双缩脲试剂检测；斐林用于还原糖，碘液用于淀粉，苏丹Ⅲ用于脂肪，均不对。' },
      { type: 'fill', question: '用苏丹Ⅲ染色脂肪后，常用体积分数____的酒精洗去浮色。', answer: '50%', explanation: '脂肪鉴定中染色后需用体积分数 50% 的酒精洗去多余的苏丹Ⅲ染液，即洗去浮色，便于在显微镜下清晰观察橘黄色脂肪颗粒。' },
      { type: 'fill', question: '鉴定 DNA 可用二苯胺试剂，在____条件下加热冷却后溶液呈蓝色。', answer: '沸水浴', explanation: 'DNA 与二苯胺试剂在沸水浴条件下加热，冷却后溶液显蓝色，这是 DNA 定性鉴定的特征反应，与淀粉遇碘变蓝的试剂和条件都不同。' }
    ]
  });
})();
