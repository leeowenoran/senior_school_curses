/* 生物学 · 高三复习 · 分子与细胞 · 第5章 · 课时：第4节 光合作用与能量转化（一） */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u16',
    name: '第4节 光合作用与能量转化（一）',
    chapter: '分子与细胞 · 第5章 细胞的能量供应和利用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、捕获光能的色素' },
      { type: 'paragraph', text: '绿色植物通过叶绿体中的色素捕获太阳光能。叶片中的色素分为两大类：叶绿素（包括叶绿素a和叶绿素b）和类胡萝卜素（包括胡萝卜素和叶黄素）。叶绿素占绝对多数，所以正常叶片呈现绿色。' },
      { type: 'table', headers: ['色素种类', '颜色', '主要吸收光', '在层析液中溶解度'], rows: [
        ['叶绿素a', '蓝绿色', '红光、蓝紫光', '较低'],
        ['叶绿素b', '黄绿色', '红光、蓝紫光', '最低'],
        ['胡萝卜素', '橙黄色', '蓝紫光', '最高'],
        ['叶黄素', '黄色', '蓝紫光', '较高']
      ] },
      { type: 'list', items: [
        '提取：用无水乙醇（或丙酮）溶解色素，加少许二氧化硅助研磨，加碳酸钙防止色素被破坏。',
        '分离（纸层析法）：用毛细吸管在滤纸条上画细线，放入层析液，色素随层析液在滤纸上扩散。',
        '溶解度高的色素随层析液在滤纸上扩散得快，反之则慢，从而将四种色素分离开。'
      ] },
      { type: 'keypoint', text: '叶绿素主要吸收红光和蓝紫光，类胡萝卜素主要吸收蓝紫光；色素对绿光吸收最少，绿光被反射，所以叶片呈绿色。' },
      { type: 'warn', text: '易错：叶片变黄不是因为缺少叶绿素a，而是叶绿素（a和b）在低温或衰老时分解，类胡萝卜素较稳定得以显现。镁是叶绿素的重要组成元素，缺镁叶片发黄。' },
      { type: 'tip', text: '高考高频考点：纸层析法四条色素带从上到下依次是胡萝卜素、叶黄素、叶绿素a、叶绿素b，位置越靠上说明溶解度越大、扩散越快。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 380" width="680" height="380"><rect x="0" y="0" width="680" height="380" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图1 叶绿体结构模式图</text><ellipse cx="340" cy="220" rx="290" ry="120" fill="#d6eac4" stroke="#3f7d1e" stroke-width="3"/><rect x="120" y="165" width="55" height="110" rx="8" fill="#5aa832"/><rect x="195" y="165" width="55" height="110" rx="8" fill="#5aa832"/><rect x="270" y="165" width="55" height="110" rx="8" fill="#5aa832"/><rect x="345" y="165" width="55" height="110" rx="8" fill="#5aa832"/><rect x="420" y="165" width="55" height="110" rx="8" fill="#5aa832"/><text x="340" y="310" text-anchor="middle" font-size="15" fill="#2e3a22">基粒由类囊体堆叠而成，膜上分布色素与光反应酶</text><text x="610" y="140" font-size="14" fill="#2e3a22">基质</text><polygon points="90,100 130,100 110,70" fill="#3f7d1e"/></svg>', caption: '叶绿体由双层膜、基粒（类囊体）和基质组成。' },
      { type: 'heading', text: '二、叶绿体的结构和功能' },
      { type: 'paragraph', text: '叶绿体是进行光合作用的细胞器，外被双层膜，内部有许多基粒。每个基粒由一个个类囊体堆叠而成，类囊体薄膜上分布着进行光反应所需的色素和酶，叶绿体基质中含有进行暗反应所需的酶，还含少量DNA和核糖体。' },
      { type: 'list', items: [
        '色素和光反应酶：分布在类囊体薄膜上。',
        '暗反应酶：分布在叶绿体基质中。',
        '叶绿体是半自主性细胞器，含有自己的DNA和核糖体，能合成部分蛋白质。'
      ] },
      { type: 'paragraph', text: '恩格尔曼用水绵和好氧细菌做实验：把载有水绵和好氧细菌的临时装片放在没有空气的小室内，用极细光束照射水绵，发现好氧细菌集中分布在被光束照射的叶绿体部位，证明氧气是叶绿体释放出来的，叶绿体是光合作用的场所。' },
      { type: 'keypoint', text: '叶绿体是光合作用的场所；色素和光反应所需的酶在类囊体薄膜上，暗反应所需的酶在叶绿体基质中。' },
      { type: 'warn', text: '易错：基粒类囊体薄膜上含色素和光反应酶，叶绿体基质中含暗反应酶；不要误以为所有与光合作用有关的酶都在类囊体上。液泡中的色素（如花青素）不参与光合作用。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图2 叶绿体色素的吸收光谱</text><line x1="80" y1="300" x2="620" y2="300" stroke="#3f7d1e" stroke-width="2"/><line x1="80" y1="80" x2="80" y2="300" stroke="#3f7d1e" stroke-width="2"/><polyline points="100,290 160,200 220,160 300,150 380,150 460,160 540,200 580,290" fill="none" stroke="#5aa832" stroke-width="3"/><polyline points="100,290 160,260 220,240 300,235 380,235 460,240 540,260 580,290" fill="none" stroke="#2e3a22" stroke-width="3"/><text x="340" y="330" text-anchor="middle" font-size="14" fill="#2e3a22">横轴为波长，叶绿素吸收红光和蓝紫光，类胡萝卜素吸收蓝紫光</text><polygon points="600,300 620,300 610,280" fill="#3f7d1e"/></svg>', caption: '叶绿素与类胡萝卜素的吸收光谱不同。' },
      { type: 'paragraph', text: '叶绿素的合成需要光照、适宜温度和镁等条件。叶绿体中色素能够吸收、传递和转化光能，其中少数处于特殊状态的叶绿素a能够把光能转化为电能，绝大多数色素只起吸收和传递光能的作用。' },
      { type: 'example', text: '例题：将正常绿叶置于特定红光和蓝紫光条件下测得光合作用较强，置于绿光条件下光合作用很弱。下列解释最合理的是（  ）\n思路：叶绿素主要吸收红光和蓝紫光，类胡萝卜素主要吸收蓝紫光，二者对绿光吸收都很少，绿光被反射，所以绿光下光合弱。答案要点：色素对绿光吸收最少。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图3 纸层析法分离色素结果</text><rect x="320" y="70" width="40" height="250" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><rect x="320" y="70" width="40" height="18" fill="#ff9a00"/><rect x="320" y="92" width="40" height="22" fill="#ffd400"/><rect x="320" y="118" width="40" height="30" fill="#1f7a3d"/><rect x="320" y="152" width="40" height="34" fill="#6fae4f"/><text x="380" y="84" font-size="13" fill="#2e3a22">胡萝卜素</text><text x="380" y="108" font-size="13" fill="#2e3a22">叶黄素</text><text x="380" y="138" font-size="13" fill="#2e3a22">叶绿素a</text><text x="380" y="172" font-size="13" fill="#2e3a22">叶绿素b</text><text x="340" y="350" text-anchor="middle" font-size="14" fill="#2e3a22">由上到下溶解度递减、扩散速度递减</text><polygon points="340,55 330,75 350,75" fill="#3f7d1e"/></svg>', caption: '纸层析法分离出的四条色素带自上而下排列。' },
      { type: 'tip', text: '解题技巧：判断色素带位置可记口诀“胡黄ab”，即胡萝卜素、叶黄素、叶绿素a、叶绿素b从上到下；叶绿素a含量最多、色素带最宽。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于叶绿体中色素的叙述，正确的是（  ）', options: ['叶绿素主要吸收绿光', '类胡萝卜素主要吸收红光和蓝紫光', '叶绿素a和叶绿素b都含镁元素', '叶片呈绿色是因为色素吸收绿光最多'], answer: '叶绿素a和叶绿素b都含镁元素', explanation: '叶绿素a和叶绿素b都含有镁，是叶绿素的重要组成元素；叶绿素和类胡萝卜素主要吸收红光和蓝紫光，对绿光吸收最少，绿光被反射所以叶片呈绿色。本题选C。' },
      { type: 'choice', question: '用纸层析法分离叶绿体色素时，在滤纸条上扩散速度最快、位于最上方的色素带是（  ）', options: ['叶绿素a', '叶绿素b', '叶黄素', '胡萝卜素'], answer: '胡萝卜素', explanation: '在层析液中溶解度越高的色素，随层析液在滤纸上扩散得越快，位置越靠上。胡萝卜素在层析液中溶解度最高，因此扩散最快，位于色素带最上方。本题选D。' },
      { type: 'choice', question: '恩格尔曼把载有水绵和好氧细菌的装片放在无空气小室中，用极细光束照射，发现好氧细菌集中分布在被照射的叶绿体部位。该实验证明（  ）', options: ['叶绿体基质是光合场所', '氧气由叶绿体释放、叶绿体是光合场所', '叶绿素吸收绿光', '类囊体薄膜不含酶'], answer: '氧气由叶绿体释放、叶绿体是光合场所', explanation: '好氧细菌需要氧气，它们集中分布在被光束照射的叶绿体部位，说明这些部位释放了氧气，从而证明氧气是由叶绿体释放的，叶绿体是光合作用的场所。本题选B。' },
      { type: 'fill', question: '叶绿素主要吸收的光是______和______。', answer: '红光和蓝紫光', explanation: '叶绿素包括叶绿素a和叶绿素b，二者都主要吸收红光和蓝紫光，对绿光吸收最少。类胡萝卜素主要吸收蓝紫光。这是光合作用色素吸收光谱的核心结论。' },
      { type: 'fill', question: '恩格尔曼实验证明光合作用的场所是______。', answer: '叶绿体', explanation: '恩格尔曼用水绵和好氧细菌实验表明，释放氧气、进行光合作用的部位是叶绿体，因此叶绿体是光合作用的场所。叶绿体含色素和相应酶，是光合作用的细胞器。' }
    ]
  });
})();
