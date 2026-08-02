/* 生物学 · 高三复习 · 分子与细胞 · 第2章 · 课时：第2节 细胞中的无机物 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u4',
    name: '第2节 细胞中的无机物',
    chapter: '分子与细胞 · 第2章 组成细胞的分子',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、细胞中的无机物——水与无机盐' },
      { type: 'paragraph', text: '水在活细胞中含量最多，是生命之源；无机盐含量虽少，却参与构成重要化合物并维持生命活动。两者共同构成细胞的无机物环境。' },
      { type: 'keypoint', text: '水是活细胞中含量最多的化合物，占细胞鲜重的60%～95%。水在细胞中以两种形式存在：自由水和结合水。' },
      { type: 'paragraph', text: '自由水是可以自由流动的水，像河流一样在细胞内外运输物质；结合水是与细胞内其他物质（如蛋白质、多糖）紧密结合的水，失去流动能力，成为细胞结构的组成成分。' },
      { type: 'list', items: [
        '自由水是良好的溶剂，许多物质溶解在其中。',
        '自由水参与细胞内的许多生化反应（如光合作用、呼吸作用）。',
        '自由水负责运输营养物质和代谢废物。',
        '自由水含量越高，细胞代谢越旺盛。'
      ] },
      { type: 'list', items: [
        '结合水是细胞结构的重要组成成分，与蛋白质、多糖等结合。',
        '结合水比例越高，植物和动物的抗逆性（抗旱、抗寒）越强。'
      ] },
      { type: 'keypoint', text: '自由水与结合水的比值：比值大，细胞代谢旺盛、生长快，但抗逆性弱；比值小，代谢减慢，但抗寒、抗旱等抗逆性强。种子晒干失去自由水、代谢降低便于储存，炒熟则失去结合水而死亡。' },
      { type: 'warn', text: '易错辨析：① 自由水和结合水可以相互转化，不是固定不变；② 代谢旺盛时自由水多，但抗逆性弱，二者呈负相关；③ 烘干、炒熟失去的是结合水，细胞已死亡；晒干失去的主要是自由水，细胞仍存活。' },
      { type: 'heading', text: '二、细胞中的无机盐' },
      { type: 'paragraph', text: '无机盐在细胞中含量很少，大多以离子形式存在，如Na⁺、K⁺、Ca²⁺、Mg²⁺、Fe²⁺、Cl⁻、I⁻等。别看它们少，缺了就会出大问题。' },
      { type: 'list', items: [
        '构成复杂化合物：Mg²⁺是叶绿素的组成成分，Fe²⁺是血红蛋白的组成成分，I⁻参与合成甲状腺激素。',
        '维持细胞和生物体的生命活动：哺乳动物血液中Ca²⁺过低会抽搐，过高会肌无力。',
        '维持细胞的酸碱平衡和渗透压平衡。'
      ] },
      { type: 'table', headers: ['无机盐离子', '参与构成的化合物或作用', '缺乏后果'],
        rows: [
          ['Mg²⁺', '叶绿素', '影响光合作用'],
          ['Fe²⁺', '血红蛋白', '缺铁性贫血'],
          ['I⁻', '甲状腺激素', '地方性甲状腺肿'],
          ['Ca²⁺', '骨骼、牙齿；调节肌肉', '过低抽搐，过高肌无力'],
          ['Na⁺、K⁺', '维持渗透压、神经兴奋', '神经肌肉功能异常']
        ] },
      { type: 'warn', text: '易错辨析：① 血钙过低是"抽搐"而非"肌无力"，过高才肌无力，方向相反易混；② 缺铁导致贫血是因为血红蛋白合成受阻，不是缺氧；③ Mg²⁺缺影响光合作用，Fe²⁺缺影响呼吸作用相关的血红蛋白/细胞色素；④ 无机盐主要以离子形式存在，不是全部。' },
      { type: 'example', text: '例题（高考风格）：下列有关水的叙述，错误的是（ ）。A. 活细胞中水含量最多 B. 自由水参与生化反应 C. 结合水是细胞结构成分 D. 自由水比值越大抗逆性越强。思路：自由水比值大时代谢旺盛但抗逆性弱，故D说反了，错误。' },
      { type: 'tip', text: '高频考点：① 水占60%～95%、含量最多的化合物；② 自由水/结合水比值与代谢、抗逆的关系；③ Mg²⁺、Fe²⁺、I⁻、Ca²⁺的功能与缺乏症（几乎年年考填空）；④ Ca²⁺过低抽搐易错方向。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">自由水与结合水</text><rect x="50" y="80" width="250" height="160" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="175" y="120" font-size="16" fill="#2e3a22" text-anchor="middle">自由水</text><text x="175" y="155" font-size="14" fill="#2e3a22" text-anchor="middle">可流动、作溶剂</text><text x="175" y="185" font-size="14" fill="#2e3a22" text-anchor="middle">参与反应、运输</text><rect x="380" y="80" width="250" height="160" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="505" y="120" font-size="16" fill="#2e3a22" text-anchor="middle">结合水</text><text x="505" y="155" font-size="14" fill="#2e3a22" text-anchor="middle">与物质结合</text><text x="505" y="185" font-size="14" fill="#2e3a22" text-anchor="middle">细胞结构成分</text><polygon points="300,150 375,150 365,140 375,150 365,160" fill="#3f7d1e"/><text x="337" y="200" font-size="13" fill="#3f7d1e" text-anchor="middle">可相互转化</text></svg>', caption: '水以自由水和结合水两种形式存在，二者可相互转化。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">自由水/结合水比值的影响</text><rect x="50" y="80" width="250" height="150" rx="10" fill="#5aa832" stroke="#3f7d1e"/><text x="175" y="125" font-size="16" fill="#2e3a22" text-anchor="middle">比值大</text><text x="175" y="160" font-size="14" fill="#2e3a22" text-anchor="middle">代谢旺盛</text><text x="175" y="188" font-size="14" fill="#2e3a22" text-anchor="middle">抗逆性弱</text><rect x="380" y="80" width="250" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="505" y="125" font-size="16" fill="#2e3a22" text-anchor="middle">比值小</text><text x="505" y="160" font-size="14" fill="#2e3a22" text-anchor="middle">代谢减慢</text><text x="505" y="188" font-size="14" fill="#2e3a22" text-anchor="middle">抗逆性强</text><polygon points="300,155 375,155 365,145 375,155 365,165" fill="#3f7d1e"/></svg>', caption: '自由水比值大时代谢旺但抗逆弱，比值小时相反。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">重要无机盐离子功能</text><rect x="40" y="70" width="150" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="115" y="107" font-size="15" fill="#2e3a22" text-anchor="middle">Mg²⁺→叶绿素</text><rect x="230" y="70" width="150" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="305" y="107" font-size="15" fill="#2e3a22" text-anchor="middle">Fe²⁺→血红蛋白</text><rect x="420" y="70" width="160" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="107" font-size="15" fill="#2e3a22" text-anchor="middle">I⁻→甲状腺激素</text><rect x="40" y="160" width="160" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="120" y="197" font-size="15" fill="#2e3a22" text-anchor="middle">Ca²⁺过低→抽搐</text><rect x="240" y="160" width="160" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="320" y="197" font-size="15" fill="#2e3a22" text-anchor="middle">维持酸碱平衡</text><polygon points="190,100 225,100 215,92 225,100 215,108" fill="#3f7d1e"/><polygon points="380,100 415,100 405,92 415,100 405,108" fill="#3f7d1e"/><polygon points="200,190 235,190 225,182 235,190 225,198" fill="#3f7d1e"/></svg>', caption: '不同无机盐离子参与构成化合物或维持生命活动。' },
      { type: 'paragraph', text: '小结：水重点抓"含量最多"和"自由水/结合水比值"；无机盐重点抓四种离子的功能与缺乏症。这部分常以选择题和填空题考查，Mg²⁺、Fe²⁺、I⁻、Ca²⁺是经久不衰的考点。' }
    ],
    exercises: [
      { type: 'choice', question: '在活细胞中，含量最多的化合物是（ ）。', options: ['蛋白质', '水', '脂质', '糖类'], answer: '水', explanation: '水是活细胞中含量最多的化合物，一般占细胞鲜重的60%～95%；蛋白质是含量最多的有机物，但总体含量仍低于水。' },
      { type: 'choice', question: '细胞中自由水与结合水的比值增大时，细胞的代谢活动会（ ）。', options: ['减弱', '旺盛', '不变', '停止'], answer: '旺盛', explanation: '自由水比值越大，细胞代谢越旺盛、生长越快，但抗逆性越弱；比值越小则代谢减慢而抗逆性增强，二者呈负相关。' },
      { type: 'choice', question: '哺乳动物血液中Ca²⁺含量过低时，会出现（ ）。', options: ['抽搐', '贫血', '甲状腺肿', '肌无力'], answer: '抽搐', explanation: '血液中Ca²⁺过低会引起肌肉抽搐，过高则导致肌无力；贫血与Fe²⁺缺乏有关，甲状腺肿与I⁻缺乏有关，方向不要混淆。' },
      { type: 'fill', question: '合成叶绿素必不可少的无机盐离子是______（填离子符号）。', answer: 'Mg²⁺', explanation: '镁离子Mg²⁺是叶绿素分子的中心元素，缺镁时叶绿素合成受阻，叶片发黄，直接影响光合作用，因此Mg²⁺属于大量元素中的必需元素。' },
      { type: 'fill', question: '人体长期缺碘会患______（填疾病名）。', answer: '地方性甲状腺肿', explanation: '碘离子I⁻是合成甲状腺激素的原料，缺碘会导致甲状腺激素分泌不足，引起甲状腺代偿性肿大，即地方性甲状腺肿（俗称大脖子病）。' }
    ]
  });
})();
