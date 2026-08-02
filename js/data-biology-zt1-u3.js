/* 生物学 · 高三复习 · 分子与细胞 · 第2章 · 课时：第1节 细胞中的元素和化合物 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u3',
    name: '第1节 细胞中的元素和化合物',
    chapter: '分子与细胞 · 第2章 组成细胞的分子',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、组成细胞的化学元素' },
      { type: 'paragraph', text: '细胞虽然千差万别，但都是由化学元素组成的。这些元素在无机自然界都能找到，说明生物界和非生物界具有统一性；但它们在细胞中的含量与无机环境差别很大，这又体现了差异性。' },
      { type: 'keypoint', text: '大量元素（含量占生物体总重量万分之一以上）：C、H、O、N、P、S、K、Ca、Mg。微量元素（含量极少但不可缺少）：Fe、Mn、Zn、Cu、B、Mo。含量最多的四种元素是C、O、H、N。' },
      { type: 'list', items: [
        '大量元素：C H O N P S K Ca Mg（可记作"碳氢氧氮磷硫钾钙镁"）。',
        '微量元素：Fe Mn Zn Cu B Mo（可记作"铁锰锌铜硼钼"）。',
        '基本元素：C（碳链构成有机物的骨架，是最基本的元素）。',
        '含量最多的四种元素：C、O、H、N。'
      ] },
      { type: 'paragraph', text: '鲜重与干重下元素含量排序不同：在鲜重中，含量由多到少为 O > C > H > N（因为水多，水中氧质量大）；在干重中（除去水分），含量由多到少为 C > O > N > H（因为有机物以碳为骨架）。' },
      { type: 'keypoint', text: '鲜重元素含量排序：O > C > H > N。干重元素含量排序：C > O > N > H。考试常考这两个排序，务必区分"鲜重"和"干重"。' },
      { type: 'warn', text: '易错辨析：① 微量元素含量少但作用重要，缺了会生病，不能说"可有可无"；② 鲜重最多是O（来自水），干重最多是C（来自有机物），两者易混；③ C是"最基本"元素，但不一定是含量最多的元素。' },
      { type: 'heading', text: '二、生物界与非生物界的统一性和差异性' },
      { type: 'list', items: [
        '统一性：组成细胞的化学元素，在无机自然界中都能找到，没有一种元素是生物特有的。',
        '差异性：细胞与非生物相比，各种元素的相对含量又大不相同，细胞有选择地从无机环境获取物质。'
      ] },
      { type: 'paragraph', text: '这说明生命起源于非生命的物质，但又不是简单地堆砌，而是经过长期进化形成了高度有序的结构。' },
      { type: 'heading', text: '三、细胞中的化合物' },
      { type: 'paragraph', text: '细胞中的化合物分为无机物（水、无机盐）和有机物（糖类、脂质、蛋白质、核酸）。其中蛋白质是含量最多的有机物，水是无机物中含量最多的。' },
      { type: 'heading', text: '四、有机物和无机物的检测（颜色反应）' },
      { type: 'table', headers: ['检测物质', '试剂', '条件', '现象'],
        rows: [
          ['还原糖', '斐林试剂', '水浴加热', '砖红色沉淀'],
          ['脂肪', '苏丹Ⅲ染液', '直接观察', '橘黄色'],
          ['蛋白质', '双缩脲试剂', '常温', '紫色'],
          ['淀粉', '碘液', '常温', '蓝色']
        ] },
      { type: 'paragraph', text: '斐林试剂由甲液（NaOH）和乙液（CuSO₄）组成，使用时需等量混合、现配现用，并水浴加热，才能与还原糖生成砖红色沉淀。双缩脲试剂则先加A液（NaOH）营造碱性环境，再加少量B液（CuSO₄），常温下出现紫色，用于检测肽键。' },
      { type: 'keypoint', text: '三大颜色反应：还原糖 + 斐林试剂 → 水浴加热 → 砖红色沉淀；脂肪 + 苏丹Ⅲ → 橘黄色；蛋白质 + 双缩脲试剂 → 紫色。注意斐林试剂要水浴加热，双缩脲试剂不需加热。' },
      { type: 'warn', text: '易错辨析：① 斐林试剂与双缩脲试剂成分相似但用法不同，斐林要混合加热，双缩脲先A后B不加热；② 蔗糖是非还原糖，不与斐林试剂反应；③ 还原糖包括葡萄糖、果糖、半乳糖、乳糖、麦芽糖，多糖和蔗糖不是还原糖。' },
      { type: 'example', text: '例题（高考风格）：下列物质中，能与斐林试剂在水浴加热条件下产生砖红色沉淀的是（ ）。A. 蔗糖 B. 淀粉 C. 葡萄糖 D. 蛋白质。思路：斐林试剂检测还原糖，葡萄糖属于还原糖，蔗糖和淀粉是非还原糖，蛋白质用双缩脲试剂检测，故选C。' },
      { type: 'tip', text: '高频考点：① 大量元素与微量元素的种类（常考填空或判断）；② 鲜重O最多、干重C最多；③ 三大颜色反应的现象与条件（斐林需水浴加热、苏丹Ⅲ橘黄、双缩脲紫）；④ 还原糖的范围。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">鲜重与干重元素含量排序</text><rect x="40" y="70" width="260" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="170" y="105" font-size="17" fill="#2e3a22" text-anchor="middle">鲜重（含水）</text><text x="170" y="145" font-size="16" fill="#2e3a22" text-anchor="middle">O &gt; C &gt; H &gt; N</text><text x="170" y="185" font-size="14" fill="#2e3a22" text-anchor="middle">氧最多（来自水）</text><rect x="380" y="70" width="260" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="510" y="105" font-size="17" fill="#2e3a22" text-anchor="middle">干重（去水）</text><text x="510" y="145" font-size="16" fill="#2e3a22" text-anchor="middle">C &gt; O &gt; N &gt; H</text><text x="510" y="185" font-size="14" fill="#2e3a22" text-anchor="middle">碳最多（来自有机物）</text><polygon points="300,165 370,165 355,155 370,165 355,175" fill="#3f7d1e"/><text x="335" y="200" font-size="13" fill="#3f7d1e" text-anchor="middle">去水</text></svg>', caption: '鲜重氧最多、干重碳最多，二者排序不同是因为水分被去除。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">物质检测颜色反应</text><rect x="40" y="80" width="160" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="120" y="115" font-size="15" fill="#2e3a22" text-anchor="middle">还原糖→砖红</text><rect x="260" y="80" width="160" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="115" font-size="15" fill="#2e3a22" text-anchor="middle">脂肪→橘黄</text><rect x="480" y="80" width="160" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="560" y="115" font-size="15" fill="#2e3a22" text-anchor="middle">蛋白质→紫</text><polygon points="200,115 250,115 240,108 250,115 240,122" fill="#3f7d1e"/><polygon points="420,115 470,115 460,108 470,115 460,122" fill="#3f7d1e"/><text x="340" y="200" font-size="14" fill="#2e3a22" text-anchor="middle">斐林试剂需水浴加热，双缩脲试剂常温即可</text><text x="340" y="230" font-size="14" fill="#3f7d1e" text-anchor="middle">三大颜色反应是实验与选择题高频考点</text></svg>', caption: '还原糖、脂肪、蛋白质分别与特定试剂产生特征颜色。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">生物界与非生物界的统一与差异</text><rect x="50" y="80" width="250" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="175" y="120" font-size="16" fill="#2e3a22" text-anchor="middle">无机自然界</text><text x="175" y="155" font-size="14" fill="#2e3a22" text-anchor="middle">含C H O N等元素</text><rect x="380" y="80" width="250" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="505" y="120" font-size="16" fill="#2e3a22" text-anchor="middle">细胞</text><text x="505" y="155" font-size="14" fill="#2e3a22" text-anchor="middle">同样含这些元素</text><polygon points="300,140 375,140 365,130 375,140 365,150" fill="#3f7d1e"/><polygon points="375,175 300,175 310,165 300,175 310,185" fill="#3f7d1e"/><text x="337" y="125" font-size="12" fill="#3f7d1e" text-anchor="middle">统一</text><text x="337" y="200" font-size="12" fill="#3f7d1e" text-anchor="middle">差异</text></svg>', caption: '元素种类相同体现统一，含量不同体现差异。' },
      { type: 'paragraph', text: '小结：本节重点是"元素分类与含量排序"加"三大颜色反应"。大量元素、微量元素要会列举；鲜重干重排序要分清；斐林、苏丹Ⅲ、双缩脲的现象和条件必须记牢，它们是实验探究题的常客。' }
    ],
    exercises: [
      { type: 'choice', question: '下列元素中，属于微量元素的是（ ）。', options: ['C', 'O', 'Fe', 'N'], answer: 'Fe', explanation: '微量元素包括Fe、Mn、Zn、Cu、B、Mo，虽然在细胞中含量极少但作用不可缺少；C、O、N都属于大量元素，是组成细胞的主要元素。' },
      { type: 'choice', question: '在细胞鲜重中，含量最多的元素是（ ）。', options: ['C', 'O', 'H', 'N'], answer: 'O', explanation: '鲜重中细胞含水多，水中氧的相对原子质量大，因此鲜重含量最多的元素是O，排序为O>C>H>N；干重中因去除了水，最多的则是C。' },
      { type: 'choice', question: '用双缩脲试剂检测蛋白质时，出现的颜色是（ ）。', options: ['砖红色', '橘黄色', '紫色', '蓝色'], answer: '紫色', explanation: '双缩脲试剂与蛋白质中的肽键在常温下反应呈现紫色；砖红色是斐林试剂检测还原糖的水浴加热结果，橘黄色是苏丹Ⅲ检测脂肪的结果。' },
      { type: 'fill', question: '组成细胞的最基本元素是______（填元素符号）。', answer: 'C', explanation: '碳链是构成所有有机物的基本骨架，碳原子之间可以形成长短不一的链和环，因此C是组成细胞的最基本元素，虽然鲜重中含量不及氧。' },
      { type: 'fill', question: '检测还原糖时，斐林试剂需______才能出现砖红色沉淀（填操作条件）。', answer: '水浴加热', explanation: '斐林试剂由NaOH和CuSO₄等量混合而成，必须在水浴加热的条件下才能与还原糖反应生成砖红色沉淀，这与双缩脲试剂常温反应不同。' }
    ]
  });
})();
