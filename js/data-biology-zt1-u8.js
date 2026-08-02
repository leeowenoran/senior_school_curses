/* 生物学 · 高三复习 · 分子与细胞 · 第3章 · 课时：第1节 细胞膜的结构和功能 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u8',
    name: '第1节 细胞膜的结构和功能',
    chapter: '分子与细胞 · 第3章 细胞的基本结构',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、细胞膜的功能' },
      { type: 'paragraph', text: '<strong>细胞膜</strong>是细胞的边界，就像小区门口的门卫，既把细胞和外界环境分隔开，又控制着物质进出和信息交流。没有细胞膜，细胞内的生命活动就会混乱。' },
      { type: 'list', items: [
        '将细胞与外界环境分隔开，保障细胞内部环境的相对稳定。',
        '控制物质进出细胞：营养进来、废物排出，但具有选择性和相对性。',
        '进行细胞间的信息交流：如激素传递、细胞识别、胞间连丝。'
      ] },
      { type: 'keypoint', label: '核心概念', text: '细胞膜的功能特点（功能特性）是选择透过性；而其结构特点（结构特性）是具有一定的流动性。两者不可混淆，前者强调功能，后者强调结构。' },
      { type: 'heading', text: '二、细胞膜的成分' },
      { type: 'paragraph', text: '细胞膜主要由脂质和蛋白质组成，此外还有少量糖类。其中脂质约占 50%，蛋白质约占 40%，糖类占 2%~10%。功能越复杂的细胞膜，蛋白质的种类和数量越多。' },
      { type: 'svg', caption: '细胞膜成分：脂质（约50%）、蛋白质（约40%）、糖类（少量）', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">细胞膜的成分</text><rect x="80" y="100" width="160" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="160" y="138" font-size="17" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">脂质 50%</text><rect x="260" y="100" width="160" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="138" font-size="17" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">蛋白质 40%</text><rect x="440" y="100" width="160" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="520" y="138" font-size="17" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">糖类 少量</text><line x1="160" y1="160" x2="340" y2="230" stroke="#3f7d1e" stroke-width="2"/><line x1="340" y1="160" x2="340" y2="230" stroke="#3f7d1e" stroke-width="2"/><line x1="520" y1="160" x2="340" y2="230" stroke="#3f7d1e" stroke-width="2"/><rect x="270" y="230" width="140" height="44" rx="10" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="258" font-size="16" text-anchor="middle" fill="#ffffff" font-family="sans-serif">细胞膜</text></svg>' },
      { type: 'warn', label: '易错辨析', text: '并非所有物质都能自由进出细胞膜，细胞膜的控制作用是相对的，某些病毒、病菌也能侵入细胞。另外，功能复杂程度取决于蛋白质的种类和数量，而非脂质含量。' },
      { type: 'heading', text: '三、流动镶嵌模型' },
      { type: 'paragraph', text: '1972 年桑格和尼克森提出<strong>流动镶嵌模型</strong>：磷脂双分子层构成膜的基本支架，蛋白质分子以镶、嵌、贯穿等方式存在于磷脂双分子层中，磷脂和蛋白质大多可以运动。' },
      { type: 'svg', caption: '流动镶嵌模型：磷脂双分子层为支架，蛋白质镶、嵌、贯穿其中', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">流动镶嵌模型</text><rect x="40" y="120" width="600" height="22" fill="#d6eac4" stroke="#3f7d1e" stroke-width="1.5"/><rect x="40" y="190" width="600" height="22" fill="#d6eac4" stroke="#3f7d1e" stroke-width="1.5"/><circle cx="120" cy="155" r="18" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><rect x="260" y="100" width="40" height="120" rx="6" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><circle cx="430" cy="155" r="18" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><rect x="540" y="100" width="40" height="120" rx="6" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="270" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">磷脂双分子层（支架）＋蛋白质（镶/嵌/贯穿）</text></svg>' },
      { type: 'tip', label: '高频考点', text: '细胞膜结构常考图解题：磷脂分子的头部亲水朝向膜内外两侧的水环境，尾部疏水朝向内侧。蛋白质贯穿膜时形成通道，这是协助扩散和主动运输的结构基础。' },
      { type: 'heading', text: '四、结构特点与功能特点' },
      { type: 'paragraph', text: '细胞膜的磷脂分子和大多数蛋白质可以运动，体现了结构上的流动性；同时细胞膜能让需要的物质进入、阻止有害物质进入，体现了功能上的选择透过性。' },
      { type: 'table', headers: ['比较项目', '结构特点', '功能特点'], rows: [
        ['名称', '一定的流动性', '选择透过性'],
        ['原因', '磷脂和蛋白质可运动', '膜上载体蛋白的种类和数量'],
        ['实例', '细胞融合、胞吞胞吐', '主动运输、质壁分离'],
        ['关系', '流动性是选择透过性的结构基础', '依赖流动性实现']
      ] },
      { type: 'list', items: [
        '结构特点：具有一定的流动性，原因主要是磷脂和蛋白质可运动。',
        '功能特点：具有选择透过性，主动运输最能体现这一特性。',
        '流动性是选择透过性的结构基础，两者密切相关。'
      ] },
      { type: 'svg', caption: '流动性（结构特性）是选择透过性（功能特性）的结构基础', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="280" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">两大特性关系</text><rect x="90" y="100" width="200" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="190" y="135" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">流动性（结构）</text><rect x="390" y="100" width="200" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="490" y="135" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">选择透过性（功能）</text><line x1="290" y1="128" x2="385" y2="128" stroke="#3f7d1e" stroke-width="3"/><polygon points="385,128 370,121 370,135" fill="#3f7d1e"/></svg>' },
      { type: 'example', label: '典型例题', text: '变形虫能伸出伪足、白细胞能吞噬病菌、细胞融合实验都依赖于细胞膜的流动性。若用荧光标记小鼠和人细胞膜蛋白并融合，一段时间后两种荧光均匀分布，直接证明了膜蛋白可以运动，即细胞膜具有流动性。' },
      { type: 'tip', label: '高频考点', text: '体现流动性的实例：细胞融合、胞吞胞吐、变形虫运动、精子与卵细胞结合。体现选择透过性的实例：主动运输、植物细胞发生质壁分离。做题时注意区分现象对应的是结构还是功能。' },
      { type: 'paragraph', text: '总结：细胞膜以磷脂双分子层为支架，蛋白质镶嵌其中，具有流动性和选择透过性。理解「结构决定功能」，就能把成分、模型、特性统一起来记忆。' }
    ],
    exercises: [
      { type: 'choice', question: '下列实例中，最能体现细胞膜结构特点（流动性）的是（ ）', options: ['葡萄糖进入红细胞', '细胞融合实验', '海带吸收碘', '神经元静息电位'], answer: '细胞融合实验', explanation: '细胞膜的结构特点是具有一定的流动性。细胞融合实验中两种细胞的膜蛋白最终混合均匀，直接证明了膜成分可以运动，最能体现流动性。葡萄糖进入红细胞体现选择透过性，海带吸收碘体现主动运输，静息电位与离子通道有关。' },
      { type: 'choice', question: '细胞膜的功能特性是（ ）', options: ['具有一定的流动性', '选择透过性', '全透性', '不对称性'], answer: '选择透过性', explanation: '细胞膜的结构特性是具有一定的流动性，这是由其成分可运动决定的；而功能特性是选择透过性，即允许需要的物质进入、阻止有害物质进入。注意区分结构与功能两个层面的特性。' },
      { type: 'choice', question: '下列关于细胞膜成分的叙述，错误的是（ ）', options: ['主要成分是脂质和蛋白质', '功能越复杂，蛋白质种类和数量越多', '糖类都位于膜外侧', '脂质中磷脂最丰富'], answer: '糖类都位于膜外侧', explanation: '细胞膜主要成分是脂质和蛋白质，功能越复杂蛋白质种类和数量越多，脂质以磷脂最丰富，这些均正确。但糖类并不全在膜外侧，部分糖蛋白、糖脂可分布在膜两侧不同位置，且题干表述过于绝对，故该说法错误。' },
      { type: 'fill', question: '1972 年桑格和尼克森提出的细胞膜结构模型称为______模型。', answer: '流动镶嵌', explanation: '1972 年桑格和尼克森提出流动镶嵌模型，认为磷脂双分子层构成膜的基本支架，蛋白质分子以镶、嵌、贯穿等方式存在于其中，该模型目前被广泛接受。' },
      { type: 'fill', question: '细胞膜的______是其结构特点，______是其功能特点。', answer: '流动性；选择透过性', explanation: '细胞膜的磷脂分子和大多数蛋白质可以运动，因此结构特点是具有一定的流动性；细胞膜能控制物质进出、有选择性，因此功能特点是选择透过性。流动性是选择透过性的结构基础。' }
    ]
  });
})();
