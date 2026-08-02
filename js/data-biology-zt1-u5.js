/* 生物学 · 高三复习 · 分子与细胞 · 第2章 · 课时：第3节 细胞中的糖类和脂质 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u5',
    name: '第3节 细胞中的糖类和脂质',
    chapter: '分子与细胞 · 第2章 组成细胞的分子',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、细胞中的糖类' },
      { type: 'paragraph', text: '糖类是生物体主要的能源物质，我们吃的米饭、馒头里的淀粉，喝奶茶里的蔗糖，都属于糖类。糖类由C、H、O三种元素组成，多数糖分子中氢原子和氧原子之比为2:1，类似水分子，所以俗称"碳水化合物"。' },
      { type: 'keypoint', text: '糖类由C、H、O组成，是主要的能源物质。根据能否水解及水解产物，分为单糖、二糖、多糖三大类。' },
      { type: 'list', items: [
        '单糖：不能水解的糖，可直接被细胞吸收。例：葡萄糖、果糖、半乳糖。葡萄糖是细胞生命活动所需的主要能源物质。',
        '二糖：由两分子单糖脱水缩合而成，需水解为单糖才能吸收。例：蔗糖（葡萄糖+果糖）、麦芽糖（葡萄糖+葡萄糖）、乳糖（葡萄糖+半乳糖）。',
        '多糖：由许多葡萄糖分子连接而成。例：植物淀粉（储能）、糖原（动物储能，在肝脏和肌肉）、纤维素（植物细胞壁成分，不可消化）。'
      ] },
      { type: 'table', headers: ['类别', '举例', '分布或功能'],
        rows: [
          ['单糖', '葡萄糖、果糖、半乳糖', '直接供能或参与合成'],
          ['二糖', '蔗糖、麦芽糖、乳糖', '需水解为单糖吸收'],
          ['多糖', '淀粉、糖原、纤维素', '储能或结构物质']
        ] },
      { type: 'keypoint', text: '还原糖与非还原糖：还原糖能与斐林试剂在水浴加热下产生砖红色沉淀，包括葡萄糖、果糖、半乳糖、乳糖、麦芽糖。非还原糖有蔗糖，以及所有多糖（淀粉、糖原、纤维素）。' },
      { type: 'warn', text: '易错辨析：① 蔗糖是二糖但属于非还原糖，不与斐林试剂反应；② 多糖都是非还原糖，即使由葡萄糖构成也不具还原性；③ 纤维素虽是多糖但不能作为人的能源物质；④ 单糖中核糖、脱氧核糖也是非还原糖。' },
      { type: 'heading', text: '二、细胞中的脂质' },
      { type: 'paragraph', text: '脂质和糖类一样主要由C、H、O组成，有些脂质还含有N、P。脂质分子通常含氢多、含氧少，氧化分解释放能量多，是高效的储能物质。' },
      { type: 'list', items: [
        '脂肪：细胞内良好的储能物质，还有保温、缓冲、减压的作用，分布在内脏器官周围保护器官。',
        '磷脂：构成细胞膜和多种细胞器膜的重要成分，是膜结构的"砖块"。',
        '固醇：包括胆固醇（构成动物细胞膜、参与血脂运输）、性激素（促进生殖器官发育和生殖细胞形成）、维生素D（促进钙和磷的吸收）。'
      ] },
      { type: 'table', headers: ['脂质分类', '常见种类', '主要功能'],
        rows: [
          ['脂肪', '甘油三酯', '储能、保温、缓冲减压'],
          ['磷脂', '磷脂', '构成生物膜基本支架'],
          ['固醇', '胆固醇、性激素、维生素D', '膜成分、调节、促吸收']
        ] },
      { type: 'warn', text: '易错辨析：① 脂质不等于脂肪，脂肪只是脂质的一种；② 固醇不是"脂肪"，而是一类独立脂质，包括胆固醇、性激素、维生素D；③ 脂肪含H多、O少，氧化时耗氧多、产水多、放能多；④ 磷脂双分子层才是膜的基本支架。' },
      { type: 'example', text: '例题（高考风格）：下列物质中属于还原糖的是（ ）。A. 蔗糖 B. 淀粉 C. 葡萄糖 D. 纤维素。思路：还原糖包括葡萄糖、果糖、半乳糖、乳糖、麦芽糖；蔗糖和淀粉、纤维素都属于非还原糖，故选C。' },
      { type: 'tip', text: '高频考点：① 糖类元素组成C、H、O及三大分类；② 还原糖的范围（葡萄糖、果糖、半乳糖、乳糖、麦芽糖）常考判断；③ 多糖的种类与功能（淀粉/糖原储能、纤维素结构）；④ 脂质三类及固醇的三种成员、脂肪与磷脂功能。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">糖类的三大分类</text><rect x="40" y="70" width="170" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="125" y="105" font-size="16" fill="#2e3a22" text-anchor="middle">单糖</text><text x="125" y="140" font-size="13" fill="#2e3a22" text-anchor="middle">葡萄糖</text><text x="125" y="165" font-size="13" fill="#2e3a22" text-anchor="middle">果糖</text><text x="125" y="190" font-size="13" fill="#2e3a22" text-anchor="middle">半乳糖</text><rect x="255" y="70" width="170" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="105" font-size="16" fill="#2e3a22" text-anchor="middle">二糖</text><text x="340" y="140" font-size="13" fill="#2e3a22" text-anchor="middle">蔗糖</text><text x="340" y="165" font-size="13" fill="#2e3a22" text-anchor="middle">麦芽糖</text><text x="340" y="190" font-size="13" fill="#2e3a22" text-anchor="middle">乳糖</text><rect x="470" y="70" width="170" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="555" y="105" font-size="16" fill="#2e3a22" text-anchor="middle">多糖</text><text x="555" y="140" font-size="13" fill="#2e3a22" text-anchor="middle">淀粉</text><text x="555" y="165" font-size="13" fill="#2e3a22" text-anchor="middle">糖原</text><text x="555" y="190" font-size="13" fill="#2e3a22" text-anchor="middle">纤维素</text><polygon points="210,150 250,150 240,140 250,150 240,160" fill="#3f7d1e"/><polygon points="425,150 465,150 455,140 465,150 455,160" fill="#3f7d1e"/></svg>', caption: '糖类按能否水解分为单糖、二糖、多糖三大类。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">还原糖与非还原糖</text><rect x="40" y="80" width="270" height="160" rx="10" fill="#5aa832" stroke="#3f7d1e"/><text x="175" y="115" font-size="16" fill="#2e3a22" text-anchor="middle">还原糖</text><text x="175" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">葡萄糖 果糖 半乳糖</text><text x="175" y="175" font-size="13" fill="#2e3a22" text-anchor="middle">乳糖 麦芽糖</text><text x="175" y="205" font-size="13" fill="#2e3a22" text-anchor="middle">+斐林试剂→砖红色</text><rect x="370" y="80" width="270" height="160" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="505" y="115" font-size="16" fill="#2e3a22" text-anchor="middle">非还原糖</text><text x="505" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">蔗糖</text><text x="505" y="175" font-size="13" fill="#2e3a22" text-anchor="middle">淀粉 糖原 纤维素</text><text x="505" y="205" font-size="13" fill="#2e3a22" text-anchor="middle">不与斐林试剂反应</text></svg>', caption: '还原糖与斐林试剂水浴加热呈砖红色，非还原糖不反应。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">脂质的分类与功能</text><rect x="40" y="70" width="180" height="170" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="130" y="105" font-size="16" fill="#2e3a22" text-anchor="middle">脂肪</text><text x="130" y="140" font-size="13" fill="#2e3a22" text-anchor="middle">储能</text><text x="130" y="165" font-size="13" fill="#2e3a22" text-anchor="middle">保温</text><text x="130" y="190" font-size="13" fill="#2e3a22" text-anchor="middle">缓冲减压</text><rect x="250" y="70" width="180" height="170" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="105" font-size="16" fill="#2e3a22" text-anchor="middle">磷脂</text><text x="340" y="145" font-size="13" fill="#2e3a22" text-anchor="middle">膜的基本支架</text><text x="340" y="175" font-size="13" fill="#2e3a22" text-anchor="middle">生物膜成分</text><rect x="460" y="70" width="180" height="170" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="550" y="105" font-size="16" fill="#2e3a22" text-anchor="middle">固醇</text><text x="550" y="140" font-size="13" fill="#2e3a22" text-anchor="middle">胆固醇</text><text x="550" y="165" font-size="13" fill="#2e3a22" text-anchor="middle">性激素</text><text x="550" y="190" font-size="13" fill="#2e3a22" text-anchor="middle">维生素D</text><polygon points="220,140 245,140 235,132 245,140 235,148" fill="#3f7d1e"/><polygon points="430,140 455,140 445,132 455,140 445,148" fill="#3f7d1e"/></svg>', caption: '脂质分为脂肪、磷脂、固醇，固醇含胆固醇等三种。' },
      { type: 'paragraph', text: '小结：糖类抓"三大分类"和"还原糖范围"，脂质抓"三类及固醇三成员"。糖类和脂质都是C、H、O组成，但脂肪含H多、储能效率高。这部分选择题常考还原糖判断和固醇成员，务必记准。' }
    ],
    exercises: [
      { type: 'choice', question: '下列糖类中，属于还原糖的是（ ）。', options: ['蔗糖', '淀粉', '葡萄糖', '纤维素'], answer: '葡萄糖', explanation: '还原糖包括葡萄糖、果糖、半乳糖、乳糖、麦芽糖；蔗糖是二糖但为非还原糖，淀粉、糖原、纤维素等所有多糖也都属于非还原糖，不与斐林试剂反应。' },
      { type: 'choice', question: '构成细胞膜基本支架的重要脂质是（ ）。', options: ['脂肪', '磷脂', '固醇', '维生素D'], answer: '磷脂', explanation: '磷脂双分子层是生物膜的基本支架，构成细胞膜和细胞器膜的主要成分；脂肪是储能物质，固醇中的胆固醇虽参与动物细胞膜构成，但基本支架由磷脂形成。' },
      { type: 'choice', question: '性激素属于下列哪类脂质（ ）。', options: ['脂肪', '磷脂', '固醇', '糖类'], answer: '固醇', explanation: '固醇是一类脂质，包括胆固醇、性激素和维生素D；性激素由性腺分泌，能促进生殖器官发育和生殖细胞形成，属于固醇而非脂肪或磷脂。' },
      { type: 'fill', question: '植物体内用于储存能量的多糖是______（填"淀粉""糖原"或"纤维素"）。', answer: '淀粉', explanation: '淀粉是植物细胞的储能多糖，储存在种子、块茎等器官中；糖原是动物细胞的储能多糖，纤维素是植物细胞壁的结构成分，不能用作储能。' },
      { type: 'fill', question: '糖类主要由______三种元素组成（按C、H、O顺序填写）。', answer: 'C、H、O', explanation: '糖类由C、H、O三种元素组成，多数糖分子中H与O原子数之比为2:1，类似水分子，因此过去被称为碳水化合物。' }
    ]
  });
})();
