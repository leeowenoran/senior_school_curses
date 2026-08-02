/* 生物学 · 高三复习 · 遗传与进化 · 第6章 · 课时：第1节 生物有共同祖先的证据 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u17',
    name: '第1节 生物有共同祖先的证据',
    chapter: '遗传与进化 · 第6章 生物的进化',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、新课导入：地球上的生物都来自同一祖先吗' },
      { type: 'paragraph', text: '今天的地球上生活着数以百万计的不同物种，它们形态习性千差万别。但科学家发现，这些生物在很多方面惊人地相似。这种相似不是巧合，而是因为它们曾经拥有共同的祖先。寻找共同祖先的证据，就是本章打开进化之门的第一把钥匙。' },
      { type: 'keypoint', text: '核心概念：生物是不断进化的，现存各种生物都有共同的原始祖先。支持这一观点的证据主要来自四个方面——化石、比较解剖学、胚胎学、细胞与分子水平。' },
      { type: 'list', items: [
        '化石证据：保存在地层中的古代生物遗体、遗物或生活痕迹，是最直接的证据。',
        '比较解剖学证据：同源器官的存在说明不同生物来自共同祖先。',
        '胚胎学证据：脊椎动物早期胚胎高度相似，暗示共同起源。',
        '细胞与分子水平证据：DNA、蛋白质等层面的相似度反映亲缘远近。'
      ]},
      { type: 'heading', text: '二、化石——最直接的证据' },
      { type: 'paragraph', text: '化石是埋藏在地层里的古代生物遗迹。地壳像一本厚厚的书，越往下地层越古老。研究化石在地层中的顺序，可以直接看到生物从简单到复杂、从低等到高等的演变过程。始祖鸟化石既有爬行动物的牙齿和尾椎，又有鸟类的羽毛和翅膀，正好站在爬行类向鸟类进化的中间站。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="300" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">化石记录：地层中的时间档案</text>'
        + '<rect x="40" y="70" width="130" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="105" y="106" text-anchor="middle" font-size="15" fill="#2e3a22">古老地层</text>'
        + '<rect x="275" y="70" width="130" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="340" y="106" text-anchor="middle" font-size="15" fill="#2e3a22">中间地层</text>'
        + '<rect x="510" y="70" width="130" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="575" y="106" text-anchor="middle" font-size="15" fill="#2e3a22">新生地层</text>'
        + '<polygon points="170,100 210,90 210,110" fill="#3f7d1e"/>'
        + '<polygon points="405,100 445,90 445,110" fill="#3f7d1e"/>'
        + '<text x="340" y="180" text-anchor="middle" font-size="14" fill="#2e3a22">越古老——生物越简单、越低等</text>'
        + '<text x="340" y="210" text-anchor="middle" font-size="14" fill="#2e3a22">越新近——生物越复杂、越高等</text>'
        + '<text x="340" y="258" text-anchor="middle" font-size="14" fill="#5aa832">化石在地层中的顺序揭示进化历程</text>'
        + '</svg>', caption: '化石在地层中按时间顺序出现，是生物进化最直接的证据。' },
      { type: 'heading', text: '三、比较解剖学——同源器官' },
      { type: 'paragraph', text: '比较解剖学把不同生物的器官拿来对比。蝙蝠的翼、鲸的鳍、猫的前肢、人的手臂，外形和功能差别很大，但内部骨骼的排列模式几乎一致：都有上臂骨、前臂骨、腕骨和指骨。这种结构来源相同、功能却不同的器官叫同源器官，说明这些动物是从同一个祖先那里继承来的，后来为适应不同环境才发生改变。' },
      { type: 'table', headers: ['器官', '外形功能', '内部结构', '结论'], rows: [
        ['蝙蝠的翼', '飞行', '与四肢同源骨骼', '共同祖先'],
        ['鲸的鳍', '游泳', '与四肢同源骨骼', '共同祖先'],
        ['猫的前肢', '行走捕食', '与四肢同源骨骼', '共同祖先'],
        ['人的手臂', '抓握操作', '与四肢同源骨骼', '共同祖先']
      ]},
      { type: 'example', text: '典型例题：比较蝙蝠的翼、鲸的鳍、猫的前肢和人的上肢，发现它们骨骼排列模式相似。这说明（ ）。A. 它们没有亲缘关系；B. 它们由不同祖先独立产生；C. 它们具有共同的原始祖先；D. 相似只是巧合。思路：结构来源相同而功能不同，正是同源器官的特征，指向共同祖先。答案：C。' },
      { type: 'heading', text: '四、胚胎学——早期胚胎的相似性' },
      { type: 'paragraph', text: '鱼类、两栖类、爬行类、鸟类、哺乳类这五类脊椎动物，在胚胎发育早期都有鳃裂和尾，外形非常相像，几乎分不清谁是谁。随着发育进行才逐渐出现各自特征。这种早期相似说明它们在发育蓝图上有共同的源头，也就是共同祖先留下的印记。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="300" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">脊椎动物早期胚胎的相似性</text>'
        + '<rect x="40" y="70" width="110" height="70" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="95" y="112" text-anchor="middle" font-size="14" fill="#2e3a22">鱼胚胎</text>'
        + '<rect x="185" y="70" width="110" height="70" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="240" y="112" text-anchor="middle" font-size="14" fill="#2e3a22">鸡胚胎</text>'
        + '<rect x="330" y="70" width="110" height="70" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="385" y="112" text-anchor="middle" font-size="14" fill="#2e3a22">猪胚胎</text>'
        + '<rect x="475" y="70" width="110" height="70" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="530" y="112" text-anchor="middle" font-size="14" fill="#2e3a22">人胚胎</text>'
        + '<polygon points="150,105 175,95 175,115" fill="#3f7d1e"/>'
        + '<polygon points="295,105 320,95 320,115" fill="#3f7d1e"/>'
        + '<polygon points="440,105 465,95 465,115" fill="#3f7d1e"/>'
        + '<text x="340" y="185" text-anchor="middle" font-size="14" fill="#2e3a22">早期都有鳃裂和尾，外形高度相似</text>'
        + '<text x="340" y="215" text-anchor="middle" font-size="14" fill="#2e3a22">后期才分化出各自特征</text>'
        + '<text x="340" y="258" text-anchor="middle" font-size="14" fill="#5aa832">胚胎相似指向共同起源</text>'
        + '</svg>', caption: '多种脊椎动物早期胚胎外形相似，是共同祖先的胚胎学证据。' },
      { type: 'heading', text: '五、细胞与分子水平证据' },
      { type: 'paragraph', text: '在所有生物中，细胞都用相同的密码子编码氨基酸，都用ATP供能，都以DNA为遗传物质（少数病毒除外）。更精细地看，不同生物体内有一种叫细胞色素c的蛋白质，它由104个氨基酸组成。亲缘关系越近的物种，细胞色素c的氨基酸序列差异越小；亲缘关系越远，差异越大。这就像比较两个人的家谱，共同点越多说明祖先越近。' },
      { type: 'tip', text: '高频考点：分子水平证据常以细胞色素c的氨基酸差异、DNA碱基序列相似度来考查亲缘关系。记住一条规律——序列差异越小，亲缘关系越近，在进化树上分支越晚。选择题常把这一规律反过来设错，审题要盯紧方向。' },
      { type: 'warn', text: '易错辨析：化石是最直接的证据，但不等于最重要的证据。四方面证据互相印证，共同支持进化观点。另外，同源器官（结构同源、功能不同）容易被误认成同功器官（功能相同、结构不同，如鸟翼和昆虫翅），二者含义不同，考试常就此设陷阱。' },
      { type: 'list', items: [
        '所有生物共用一套遗传密码，说明起源统一。',
        '细胞色素c氨基酸差异越小，亲缘关系越近。',
        'DNA碱基序列相似度越高，亲缘关系越近。',
        '生物大分子进化速率相对恒定，可用来估算分歧时间。'
      ]},
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">'
        + '<rect x="0" y="0" width="680" height="300" fill="#eef6e4"/>'
        + '<text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">DNA 与蛋白质相似度反映亲缘关系</text>'
        + '<rect x="40" y="80" width="150" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="115" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">亲缘近</text>'
        + '<rect x="265" y="80" width="150" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="340" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">序列相似高</text>'
        + '<rect x="490" y="80" width="150" height="60" fill="#d6eac4" stroke="#3f7d1e"/>'
        + '<text x="565" y="116" text-anchor="middle" font-size="14" fill="#2e3a22">分歧晚</text>'
        + '<polygon points="190,110 230,100 230,120" fill="#3f7d1e"/>'
        + '<polygon points="415,110 455,100 455,120" fill="#3f7d1e"/>'
        + '<text x="340" y="195" text-anchor="middle" font-size="14" fill="#2e3a22">亲缘远 ⇄ 序列差异大 ⇄ 分歧早</text>'
        + '<text x="340" y="235" text-anchor="middle" font-size="14" fill="#5aa832">分子证据把进化量化到序列层面</text>'
        + '</svg>', caption: 'DNA 和蛋白质序列的相似度越高，说明物种间亲缘关系越近。' },
      { type: 'paragraph', text: '小结：四方面证据从宏观到微观，从形态到分子，像四束光从不同角度照亮同一个结论——现存的各类生物都有共同的原始祖先，并经历过漫长的进化历程。下一节我们将探讨进化的动力究竟来自哪里。' }
    ],
    exercises: [
      { type: 'choice', question: '下列证据中，生物有共同祖先最直接的证据是（ ）。', options: ['化石', '比较解剖学中的同源器官', '胚胎学证据', '细胞与分子水平证据'], answer: '化石', explanation: '化石保存在地层中，按时间顺序记录了生物由简单到复杂、由低等到高等的演变，能直接观察进化历程，因此是最直接的证据。比较解剖学、胚胎学和分子水平证据是从不同角度提供的佐证，重要性都很高但并非最直接。' },
      { type: 'choice', question: '蝙蝠的翼、鲸的鳍、猫的前肢、人的上肢骨骼排列相似，这属于（ ）。', options: ['同源器官，支持共同祖先说', '同功器官，说明没有亲缘关系', '痕迹器官', '退化器官'], answer: '同源器官，支持共同祖先说', explanation: '这些器官外形和功能不同，但内部骨骼来源与排列模式一致，属于同源器官。同源器官的存在说明不同生物由共同的原始祖先进化而来，后来为适应不同环境而发生分化，是共同祖先的有力证据。' },
      { type: 'choice', question: '不同生物细胞色素c的氨基酸序列差异越小，说明它们（ ）。', options: ['亲缘关系越近', '亲缘关系越远', '个体大小越接近', '生活习性越相似'], answer: '亲缘关系越近', explanation: '细胞色素c是广泛存在于生物体内的蛋白质。亲缘关系近的物种分歧时间短，氨基酸序列保留的相同位点多，差异自然小；亲缘远的物种分歧时间长，积累的差异大。因此序列差异越小，亲缘关系越近。' },
      { type: 'fill', question: '研究地层中化石的分布，越古老的地层中化石生物越______、越______。', answer: '简单低等', explanation: '地层形成有先后，越往下越古老。化石记录显示，古老地层中的生物结构较简单、等级较低等，新近地层中的生物较复杂、较高等，这种顺序是生物进化的直接体现。' },
      { type: 'fill', question: '比较解剖学上，脊椎动物前肢结构相似称为______器官，是共同祖先的重要证据。', answer: '同源', explanation: '同源器官指来源相同、结构和部位相似，但功能不同的器官，如多种脊椎动物的前肢。它们的相似蓝图来自共同祖先，是研究生物进化的重要形态学证据。' }
    ]
  });
})();
