/* 生物学 · 高三复习 · 稳态与调节 · 第2章 · 课时：第1节 神经调节的结构基础 */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u3',
    name: '第1节 神经调节的结构基础',
    chapter: '稳态与调节 · 第2章 神经调节',
    difficulty: '基础',
    content: [
      { type:'heading', text:'一、神经系统的基本结构' },
      { type:'paragraph', text:'人的神经系统由脑、脊髓以及它们发出的神经组成，按位置可分为中枢神经系统和外周神经系统两大部分。可以把它想象成公司的指挥部（中枢）和各地分公司（外周），二者通过线路相连。' },
      { type:'list', items:['中枢神经系统：脑和脊髓','外周神经系统：脑神经和脊神经','脑包括大脑、小脑、脑干、下丘脑'] },
      { type:'paragraph', text:'中枢神经系统位于颅腔和椎管内，包括脑（大脑、小脑、脑干、下丘脑）和脊髓，是整个神经系统的指挥中心。外周神经系统则把中枢与全身各部分联系起来，负责信息的上传和下达。' },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">神经系统的基本结构</text>
  <rect x="70" y="90" width="260" height="210" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="200" y="130" text-anchor="middle" font-size="16" fill="#2e3a22">中枢神经系统</text>
  <text x="200" y="165" text-anchor="middle" font-size="14" fill="#2e3a22">脑（大脑/小脑/脑干/下丘脑）</text>
  <text x="200" y="200" text-anchor="middle" font-size="14" fill="#2e3a22">脊髓</text>
  <rect x="370" y="90" width="240" height="210" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="490" y="130" text-anchor="middle" font-size="16" fill="#2e3a22">外周神经系统</text>
  <text x="490" y="165" text-anchor="middle" font-size="14" fill="#2e3a22">脑神经</text>
  <text x="490" y="200" text-anchor="middle" font-size="14" fill="#2e3a22">脊神经</text>
  <line x1="330" y1="195" x2="370" y2="195" stroke="#3f7d1e" stroke-width="2"/>
  <polygon points="370,195 345,185 345,205" fill="#3f7d1e"/>
</svg>`, caption:'神经系统分为中枢神经系统（脑和脊髓）与外周神经系统（脑神经和脊神经）。' },
      { type:'list', items:['大脑：最高级中枢，有语言、记忆等功能','小脑：维持身体平衡、协调运动','脑干：有呼吸、心血管等基本中枢','下丘脑：调节体温、水盐、血糖'] },
      { type:'keypoint', text:'神经系统由中枢神经系统（脑和脊髓）与外周神经系统（脑神经和脊神经）组成，二者通过神经纤维相连。' },
      { type:'paragraph', text:'神经系统的结构和功能基本单位是神经元，也就是神经细胞。神经元受到刺激后能产生兴奋，并把兴奋传导出去，是神经系统信息传递的最小单元，相当于通信网络中的节点。' },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">神经元的结构</text>
  <circle cx="180" cy="180" r="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="180" y="185" text-anchor="middle" font-size="14" fill="#2e3a22">细胞体</text>
  <line x1="120" y1="150" x2="60" y2="110" stroke="#3f7d1e" stroke-width="2"/>
  <text x="55" y="100" text-anchor="middle" font-size="13" fill="#5aa832">树突</text>
  <line x1="230" y1="180" x2="560" y2="180" stroke="#3f7d1e" stroke-width="2"/>
  <text x="400" y="160" text-anchor="middle" font-size="13" fill="#5aa832">轴突</text>
  <circle cx="580" cy="180" r="14" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="580" y="215" text-anchor="middle" font-size="12" fill="#2e3a22">末梢</text>
</svg>`, caption:'神经元由细胞体、树突和轴突组成，树突接受兴奋，轴突传导兴奋。' },
      { type:'list', items:['细胞体：含细胞核，是代谢中心','树突：短而多，负责接受兴奋','轴突：较长，把兴奋传导到下一个神经元'] },
      { type:'warn', text:'易错辨析：神经胶质细胞不是神经元，不能直接接受刺激和传导兴奋；它起支持、保护、营养和修复的作用。考试中常把神经胶质细胞误当成神经元，需要注意区分。' },
      { type:'paragraph', text:'神经胶质细胞分布在神经元之间，数量比神经元还多，对神经元起支持、保护、营养和修复的作用，是神经系统不可或缺的后勤保障，但本身不参与兴奋的传导。' },
      { type:'keypoint', text:'神经元由细胞体、树突和轴突构成，功能是接受刺激、产生兴奋并传导兴奋；神经胶质细胞起辅助支持作用。' },
      { type:'table', headers:['项目','神经元','神经胶质细胞'], rows:[
        ['能否传导兴奋','能','不能'],
        ['结构','细胞体/树突/轴突','不分化的支持细胞'],
        ['作用','信息传递','支持保护营养修复']
      ] },
      { type:'example', text:'例题：下列有关神经元的叙述，正确的是（ ）。A 神经元只能接受兴奋不能传导兴奋 B 神经元由细胞体、树突和轴突组成 C 神经胶质细胞能传导兴奋 D 树突负责把兴奋传向其他细胞。思路：神经元能接受并传导兴奋，由细胞体、树突、轴突组成；神经胶质细胞不能传导兴奋；轴突才把兴奋传出。故选B。' },
      { type:'tip', text:'高频考点：神经元的结构与功能、神经胶质细胞的作用，以及中枢神经系统各部分的分工。选择题常考大脑、小脑、脑干、下丘脑的功能区分，建议列表对比记忆，避免张冠李戴。' },
      { type:'heading', text:'二、本节复习框架' },
      { type:'list', items:['神经系统=中枢+外周','中枢=脑（大脑/小脑/脑干/下丘脑）+脊髓','神经元=细胞体+树突+轴突','神经胶质细胞起支持保护作用'] },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">脑的主要组成部分</text>
  <rect x="120" y="90" width="120" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="180" y="130" text-anchor="middle" font-size="14" fill="#2e3a22">大脑</text>
  <rect x="280" y="90" width="120" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="340" y="130" text-anchor="middle" font-size="14" fill="#2e3a22">小脑</text>
  <rect x="440" y="90" width="120" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="500" y="130" text-anchor="middle" font-size="14" fill="#2e3a22">脑干</text>
  <rect x="280" y="200" width="120" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="340" y="240" text-anchor="middle" font-size="14" fill="#2e3a22">下丘脑</text>
  <text x="340" y="320" text-anchor="middle" font-size="13" fill="#5aa832">脑位于颅腔，由四部分构成</text>
</svg>`, caption:'脑包括大脑、小脑、脑干和下丘脑，其中下丘脑调节体温、水盐和血糖。' }
    ],
    exercises: [
      { type:'choice', question:'下列关于神经系统组成的叙述，正确的是（ ）。', options:['中枢神经系统包括脑和脊髓，外周神经系统包括脑神经和脊神经','中枢神经系统包括脑神经和脊神经','外周神经系统只包括脊神经','脑和脊髓属于外周神经系统'], answer:'中枢神经系统包括脑和脊髓，外周神经系统包括脑神经和脊神经', explanation:'神经系统按位置分为中枢神经系统和外周神经系统，中枢包括脑和脊髓，外周包括脑神经和脊神经，二者通过神经纤维相连。B、C、D都把中枢和外周混淆，故选A。' },
      { type:'choice', question:'神经元的主要功能是（ ）。', options:['支持和保护其他细胞','接受刺激、产生并传导兴奋','分泌激素调节代谢','运输氧气到全身'], answer:'接受刺激、产生并传导兴奋', explanation:'神经元是神经系统结构和功能的基本单位，功能是接受刺激、产生兴奋并把兴奋传导出去。支持和保护是神经胶质细胞的作用，分泌激素是内分泌细胞的功能，运输氧气是红细胞的功能，故B正确。' },
      { type:'choice', question:'下列关于神经胶质细胞的叙述，正确的是（ ）。', options:['能接受刺激并传导兴奋','数量少于神经元','对神经元起支持、保护、营养和修复作用','构成反射弧的感受器'], answer:'对神经元起支持、保护、营养和修复作用', explanation:'神经胶质细胞数量多，对神经元起支持、保护、营养和修复作用，但不能接受刺激也不能传导兴奋，它不是神经元。A、B、D都把它误当成神经元，正确选项是C。' },
      { type:'fill', question:'神经元由细胞体、树突和______组成。', answer:'轴突', explanation:'神经元由细胞体、树突和轴突三部分构成，细胞体含细胞核，树突接受兴奋，轴突把兴奋传导到下一个细胞，三者共同完成信息传递。' },
      { type:'fill', question:'调节体温、水盐和血糖的中枢位于______。', answer:'下丘脑', explanation:'下丘脑是调节内脏活动的较高级中枢，负责调节体温、水盐平衡和血糖等，常被称为稳态调节的总枢纽，记忆时可联系体温和水盐调节过程。' }
    ]
  });
})();
