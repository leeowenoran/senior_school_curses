/* 生物学 · 高三复习 · 分子与细胞 · 第2章 · 课时：第4节 蛋白质是生命活动的主要承担者 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u6',
    name: '第4节 蛋白质是生命活动的主要承担者',
    chapter: '分子与细胞 · 第2章 组成细胞的分子',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、蛋白质的功能——生命活动的主要承担者' },
      { type: 'paragraph', text: '<strong>蛋白质</strong>是细胞中含量最多的有机物，也是生命活动的主要承担者。无论是肌肉收缩、消化吸收，还是免疫防御、信息传递，都离不开蛋白质。可以说，没有蛋白质就没有生命。' },
      { type: 'list', items: [
        '结构蛋白：构成细胞和生物体的重要物质，如肌肉中的肌动蛋白、毛发中的角蛋白。',
        '催化作用：绝大多数酶的本质是蛋白质，如唾液淀粉酶催化淀粉水解。',
        '运输作用：如血红蛋白运输氧气，载体蛋白协助物质跨膜。',
        '调节作用：如胰岛素调节血糖，生长激素促进生长。',
        '免疫作用：如抗体与抗原特异性结合，消灭病原体。'
      ] },
      { type: 'keypoint', label: '核心概念', text: '蛋白质是生命活动的主要承担者，其功能多样性取决于结构多样性。一切生命活动都离不开蛋白质。' },
      { type: 'heading', text: '二、氨基酸——蛋白质的基本组成单位' },
      { type: 'paragraph', text: '组成蛋白质的氨基酸约 <strong>21 种</strong>，其中人体细胞不能合成、必须从食物中获取的称为必需氨基酸，成人体内约 <strong>8 种</strong>。所有氨基酸都至少含有一个氨基（—NH₂）和一个羧基（—COOH），并且都连接在同一个中心碳原子上。' },
      { type: 'svg', caption: '氨基酸结构通式：中心碳原子连接氨基、羧基、氢原子和 R 基', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">氨基酸结构通式</text><circle cx="340" cy="160" r="42" fill="#d6eac4" stroke="#3f7d1e" stroke-width="3"/><text x="340" y="168" font-size="20" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">C</text><rect x="150" y="140" width="90" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="195" y="166" font-size="18" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">—NH₂</text><rect x="440" y="140" width="100" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="490" y="166" font-size="18" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">—COOH</text><rect x="300" y="40" width="80" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="66" font-size="18" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">—R</text><rect x="300" y="240" width="80" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="266" font-size="18" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">—H</text><line x1="195" y1="160" x2="298" y2="160" stroke="#3f7d1e" stroke-width="3"/><line x1="382" y1="160" x2="440" y2="160" stroke="#3f7d1e" stroke-width="3"/><line x1="340" y1="118" x2="340" y2="80" stroke="#3f7d1e" stroke-width="3"/><line x1="340" y1="202" x2="340" y2="240" stroke="#3f7d1e" stroke-width="3"/></svg>' },
      { type: 'paragraph', text: '判断一种分子是否为组成蛋白质的氨基酸，关键看两点：一是否有氨基和羧基；二氨基和羧基是否连在同一个碳原子上。R 基不同决定了氨基酸的种类不同，R 基中也可能含有氨基或羧基。' },
      { type: 'tip', label: '高频考点', text: '高考常考「某分子是否为氨基酸」的判定。记住口诀：一个中心碳，连着氢、氨、羧、R 四样；氨羧同碳是关键，R 基可变定种类。' },
      { type: 'heading', text: '三、脱水缩合——氨基酸形成多肽' },
      { type: 'paragraph', text: '<strong>脱水缩合</strong>是指一个氨基酸的羧基（—COOH）与另一个氨基酸的氨基（—NH₂）脱去一分子水，形成连接两个氨基酸的化学键——<strong>肽键（—CO—NH—）</strong>。多个氨基酸依次相连形成肽链。' },
      { type: 'svg', caption: '脱水缩合：两个氨基酸脱去一分子 H₂O，形成肽键（—CO—NH—）', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">脱水缩合过程</text><rect x="60" y="130" width="150" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="135" y="161" font-size="17" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">氨基酸①</text><rect x="320" y="130" width="150" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="395" y="161" font-size="17" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">氨基酸②</text><line x1="210" y1="155" x2="315" y2="155" stroke="#3f7d1e" stroke-width="3"/><polygon points="315,155 300,148 300,162" fill="#3f7d1e"/><text x="262" y="145" font-size="15" text-anchor="middle" fill="#5aa832" font-family="sans-serif">—CO—NH—</text><text x="135" y="210" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">—COOH</text><text x="395" y="210" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">—NH₂</text><text x="395" y="250" font-size="16" text-anchor="middle" fill="#5aa832" font-family="sans-serif">脱去 H₂O</text></svg>' },
      { type: 'warn', label: '易错辨析', text: '肽键数 = 氨基酸数 − 肽链条数，脱去水分子数 = 肽键数。很多同学误以为脱去的水分子数 = 氨基酸数。注意环状肽时肽键数才等于氨基酸数。' },
      { type: 'heading', text: '四、蛋白质结构的多样性' },
      { type: 'paragraph', text: '蛋白质结构的多样性决定了其功能的多样性。如同一种零件，数量、种类和排列顺序不同，搭出来的机器就千差万别。' },
      { type: 'list', items: [
        '氨基酸的<strong>种类</strong>不同：组成蛋白质的氨基酸种类越多，可能形成的蛋白质越多样。',
        '氨基酸的<strong>数目</strong>不同：相同种类不同数目也能形成不同蛋白质。',
        '氨基酸的<strong>排列顺序</strong>不同：这是决定蛋白质特异性的关键。',
        '多肽链的<strong>空间结构</strong>不同：盘曲折叠方式不同形成不同的蛋白质。'
      ] },
      { type: 'svg', caption: '蛋白质结构多样性：由氨基酸种类、数目、排列顺序和空间结构共同决定', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">蛋白质多样性的来源</text><rect x="40" y="80" width="150" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="115" y="108" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">种类不同</text><rect x="230" y="80" width="150" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="305" y="108" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">数目不同</text><rect x="420" y="80" width="150" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="495" y="108" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">顺序不同</text><rect x="235" y="170" width="210" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="198" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">空间结构不同</text><line x1="115" y1="124" x2="340" y2="165" stroke="#3f7d1e" stroke-width="2"/><line x1="305" y1="124" x2="340" y2="165" stroke="#3f7d1e" stroke-width="2"/><line x1="495" y1="124" x2="340" y2="165" stroke="#3f7d1e" stroke-width="2"/><rect x="255" y="240" width="170" height="44" rx="10" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="268" font-size="17" text-anchor="middle" fill="#ffffff" font-family="sans-serif">蛋白质多样</text></svg>' },
      { type: 'example', label: '典型例题', text: '某蛋白质由 100 个氨基酸形成 2 条肽链，则肽键数为 98，脱去水分子数 98。相对分子质量 = 100 × 氨基酸平均分子量 − 98 × 18。计算时先减水再考虑二硫键等修饰。' },
      { type: 'table', headers: ['项目', '计算公式', '说明'], rows: [
        ['肽键数', '氨基酸数 − 肽链条数', '直链肽'],
        ['脱去水分子数', '= 肽键数', '每形成一个肽键脱一分子水'],
        ['蛋白质相对分子质量', '氨基酸数 × 平均分子量 − 脱去水分子数 × 18', '18 为水的相对分子质量'],
        ['至少含氨基/羧基数', '= 肽链条数', 'R 基中还可能含有']
      ] },
      { type: 'tip', label: '高频考点', text: '蛋白质计算是高考必考题。牢记三句话：肽键数等于氨基酸数减肽链数；脱去的水分子数等于肽键数；相对分子质量要减去脱去水的总质量。' },
      { type: 'paragraph', text: '综上所述，蛋白质结构层次的口诀为：氨基酸 → 二肽、多肽（肽链）→ 蛋白质（空间结构）。氨基酸是原材料，脱水缩合是加工方式，空间折叠是成品塑形。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于蛋白质功能的叙述，错误的是（ ）', options: ['蛋白质是生命活动的主要承担者', '抗体具有免疫作用', '血红蛋白具有运输氧气的作用', '所有激素的化学本质都是蛋白质'], answer: '所有激素的化学本质都是蛋白质', explanation: '蛋白质功能多样，包括结构、催化、运输、调节、免疫等，是生命活动的主要承担者；抗体属于免疫蛋白，血红蛋白运输氧气。但激素并非都是蛋白质，如性激素属于脂质中的固醇，甲状腺激素是氨基酸衍生物，故该说法错误。' },
      { type: 'choice', question: '组成人体蛋白质的必需氨基酸约有多少种？', options: ['8 种', '12 种', '21 种', '20 种'], answer: '8 种', explanation: '自然界组成蛋白质的氨基酸约 21 种，其中人体细胞不能合成、必须从食物中获取的必需氨基酸，成人体内约 8 种，婴幼儿为 9 种。其余氨基酸人体可自身合成，称为非必需氨基酸。' },
      { type: 'choice', question: '一条由 100 个氨基酸组成的肽链，其肽键数为（ ）', options: ['99', '100', '101', '98'], answer: '99', explanation: '根据公式肽键数 = 氨基酸数 − 肽链条数，一条肽链即肽链条数为 1，所以肽键数 = 100 − 1 = 99。同时脱去的水分子数也为 99，两者始终相等。' },
      { type: 'fill', question: '连接两个氨基酸分子的化学键名称是______，其结构简式为______。', answer: '肽键；—CO—NH—', explanation: '一个氨基酸的羧基与另一个氨基酸的氨基脱水缩合，形成的化学键叫肽键，结构简式为 —CO—NH—。该键是蛋白质一级结构的主链连接方式，高考常要求准确书写其结构式。' },
      { type: 'fill', question: '蛋白质结构多样性取决于氨基酸的______、______、排列顺序以及多肽链的空间结构不同。', answer: '种类；数目', explanation: '蛋白质结构多样性有四大原因：组成氨基酸的种类不同、数目不同、排列顺序不同，以及多肽链盘曲折叠形成的空间结构不同。其中排列顺序的千变万化是蛋白质种类繁多的根本原因。' }
    ]
  });
})();
