/* 生物学 · 高三复习 · 分子与细胞 · 第3章 · 课时：第2节 细胞器之间的分工合作 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u9',
    name: '第2节 细胞器之间的分工合作',
    chapter: '分子与细胞 · 第3章 细胞的基本结构',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、细胞器概述' },
      { type: 'paragraph', text: '细胞器是细胞质中具有特定形态和功能的「小车间」。真核细胞拥有多种细胞器，它们分工明确又相互合作，共同完成细胞的生命活动。可按照有无膜结构对细胞器分类记忆。' },
      { type: 'list', items: [
        '双层膜细胞器：线粒体（有氧呼吸主要场所）、叶绿体（光合作用场所）。',
        '单层膜细胞器：内质网、高尔基体、溶酶体、液泡。',
        '无膜细胞器：核糖体（蛋白质合成）、中心体（与有丝分裂有关）。'
      ] },
      { type: 'keypoint', label: '核心概念', text: '八大细胞器按其膜结构可分为：双层膜（线粒体、叶绿体）、单层膜（内质网、高尔基体、溶酶体、液泡）、无膜（核糖体、中心体）。含 DNA 的细胞器是线粒体、叶绿体，含色素的是叶绿体、液泡。' },
      { type: 'table', headers: ['细胞器', '膜结构', '主要功能'], rows: [
        ['线粒体', '双层膜', '有氧呼吸主要场所'],
        ['叶绿体', '双层膜', '光合作用场所'],
        ['内质网', '单层膜', '蛋白质加工、脂质合成'],
        ['高尔基体', '单层膜', '加工、分类、包装'],
        ['核糖体', '无膜', '蛋白质合成场所'],
        ['中心体', '无膜', '与有丝分裂有关']
      ] },
      { type: 'heading', text: '二、主要细胞器的功能' },
      { type: 'paragraph', text: '线粒体是有氧呼吸的主要场所，被比喻为细胞的「发电厂」；核糖体是蛋白质合成的场所，被比喻为「生产车间」；内质网是蛋白质加工和脂质合成的「车间」；高尔基体负责加工、分类和包装。' },
      { type: 'svg', caption: '八大细胞器分类：双层膜、单层膜、无膜三类', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">细胞器的分类</text><rect x="40" y="80" width="190" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="135" y="116" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">双层膜</text><rect x="250" y="80" width="190" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="345" y="116" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">单层膜</text><rect x="460" y="80" width="190" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="555" y="116" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">无膜</text><text x="135" y="180" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">线粒体</text><text x="135" y="204" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">叶绿体</text><text x="345" y="180" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">内质网 高尔基体</text><text x="345" y="204" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">溶酶体 液泡</text><text x="555" y="180" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">核糖体</text><text x="555" y="204" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">中心体</text></svg>' },
      { type: 'warn', label: '易错辨析', text: '线粒体和叶绿体都含有少量 DNA 和 RNA，都能半自主复制，但线粒体在动植物细胞中都有，叶绿体只存在于植物细胞。核糖体无膜结构，中心体由两个垂直的中心粒组成，低等植物和动物细胞才有中心体。' },
      { type: 'heading', text: '三、分泌蛋白的合成与运输' },
      { type: 'paragraph', text: '分泌蛋白（如消化酶、抗体、部分激素）在核糖体上合成，经内质网加工运输，再由高尔基体进一步加工、分类和包装，最后通过细胞膜分泌到细胞外，全过程由线粒体供能。' },
      { type: 'svg', caption: '分泌蛋白合成运输途径：核糖体→内质网→高尔基体→细胞膜（线粒体供能）', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">分泌蛋白运输途径</text><rect x="40" y="130" width="110" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="95" y="161" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">核糖体</text><rect x="190" y="130" width="110" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="245" y="161" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">内质网</text><rect x="340" y="130" width="110" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="395" y="161" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">高尔基体</text><rect x="490" y="130" width="110" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="545" y="161" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">细胞膜</text><line x1="150" y1="155" x2="185" y2="155" stroke="#3f7d1e" stroke-width="3"/><polygon points="185,155 170,148 170,162" fill="#3f7d1e"/><line x1="300" y1="155" x2="335" y2="155" stroke="#3f7d1e" stroke-width="3"/><polygon points="335,155 320,148 320,162" fill="#3f7d1e"/><line x1="450" y1="155" x2="485" y2="155" stroke="#3f7d1e" stroke-width="3"/><polygon points="485,155 470,148 470,162" fill="#3f7d1e"/></svg>' },
      { type: 'tip', label: '高频考点', text: '研究分泌蛋白常用同位素标记法（如标记亮氨酸）。注意：核糖体无膜，不参与膜泡运输；囊泡来自内质网和高尔基体；分泌蛋白加工过程中自身空间结构会改变，但氨基酸数目可能减少。' },
      { type: 'heading', text: '四、生物膜系统' },
      { type: 'paragraph', text: '<strong>生物膜系统</strong>由细胞膜、核膜和细胞器膜共同构成。它们在结构和功能上紧密联系，不仅使细胞具有相对稳定的内部环境，还为多种酶提供附着位点，参与物质运输、能量转换和信息传递。' },
      { type: 'list', items: [
        '组成：细胞膜、核膜、细胞器膜（如内质网膜、高尔基体膜）。',
        '功能：分隔细胞区室、为酶提供附着位点、参与物质运输与信息交流。',
        '意义：使细胞内各种化学反应互不干扰、高效有序进行。'
      ] },
      { type: 'svg', caption: '生物膜系统：细胞膜、核膜与细胞器膜在结构和功能上相互联系', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="280" fill="#eef6e4"/><text x="340" y="36" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">生物膜系统</text><rect x="80" y="100" width="170" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="165" y="135" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">细胞膜</text><rect x="255" y="100" width="170" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="135" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">细胞器膜</text><rect x="430" y="100" width="170" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="515" y="135" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">核膜</text><line x1="250" y1="128" x2="255" y2="128" stroke="#3f7d1e" stroke-width="2"/><line x1="425" y1="128" x2="430" y2="128" stroke="#3f7d1e" stroke-width="2"/><rect x="255" y="200" width="170" height="44" rx="10" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="228" font-size="16" text-anchor="middle" fill="#ffffff" font-family="sans-serif">生物膜系统</text></svg>' },
      { type: 'example', label: '典型例题', text: '用同位素标记亮氨酸追踪分泌蛋白，放射性依次出现在核糖体、内质网、高尔基体、细胞膜外的分泌物中。这说明分泌蛋白合成场所是核糖体，加工场所是内质网和高尔基体，整个过程的动力由线粒体提供。' },
      { type: 'tip', label: '高频考点', text: '区分「细胞器」与「具膜细胞器」：中心体、核糖体无膜，不属于生物膜系统。原核细胞只有核糖体一种细胞器，没有生物膜系统。做题时看清问的是「细胞器」还是「含膜的细胞器」。' },
      { type: 'paragraph', text: '总结：细胞器分工合作，分泌蛋白的合成与运输是细胞器协调配合的经典案例。生物膜系统在结构和功能上的统一，保证了细胞生命活动的高效有序。' }
    ],
    exercises: [
      { type: 'choice', question: '下列细胞器中，无膜结构的是（ ）', options: ['线粒体', '内质网', '核糖体', '高尔基体'], answer: '核糖体', explanation: '细胞器按膜结构可分为双层膜（线粒体、叶绿体）、单层膜（内质网、高尔基体、溶酶体、液泡）和无膜（核糖体、中心体）。核糖体是蛋白质合成场所，没有膜结构，故符合题意。' },
      { type: 'choice', question: '分泌蛋白合成与运输过程中，不需要的细胞器是（ ）', options: ['核糖体', '内质网', '高尔基体', '中心体'], answer: '中心体', explanation: '分泌蛋白在核糖体合成，经内质网和高尔基体加工运输，由线粒体供能，最后通过细胞膜分泌出去。中心体与细胞有丝分裂有关，不参与分泌蛋白的合成与运输过程，故不需要。' },
      { type: 'choice', question: '下列结构中，不属于生物膜系统的是（ ）', options: ['细胞膜', '核膜', '核糖体', '内质网膜'], answer: '核糖体', explanation: '生物膜系统由细胞膜、核膜和细胞器膜构成。核糖体、中心体无膜结构，因此不属于生物膜系统。内质网膜属于细胞器膜，是生物膜系统的一部分。' },
      { type: 'fill', question: '分泌蛋白在______上合成，先后经过______和______的加工，最后由细胞膜分泌到细胞外。', answer: '核糖体；内质网；高尔基体', explanation: '分泌蛋白的合成与运输：核糖体是合成场所，内质网进行初步加工并运输，高尔基体做进一步加工、分类和包装，最终以囊泡形式经细胞膜分泌到细胞外，线粒体全程供能。' },
      { type: 'fill', question: '含有少量 DNA、能半自主复制的细胞器是______和______。', answer: '线粒体；叶绿体', explanation: '线粒体和叶绿体都含有少量的 DNA 和 RNA，能够进行半自主复制，属于半自主性细胞器。这与它们可能起源于原核生物的内共生学说相吻合，是高频考点。' }
    ]
  });
})();
