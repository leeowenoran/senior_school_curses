/* 生物学 · 高三复习 · 分子与细胞 · 第6章 · 课时：第4节 细胞的癌变 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u21',
    name: '第4节 细胞的癌变',
    chapter: '分子与细胞 · 第6章 细胞的生命历程',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、癌细胞的主要特征' },
      { type: 'paragraph', text: '有的细胞受到致癌因子作用，细胞中遗传物质发生变化，变成不受机体控制的、连续进行分裂的恶性增殖细胞，即癌细胞。癌细胞仍保留遗传物质的改变，但生长和分裂失去正常调控。' },
      { type: 'list', items: [
        '在适宜条件下能无限增殖，不受分裂次数限制。',
        '形态结构发生显著变化，如成纤维细胞癌变后由扁平梭形变成球形。',
        '细胞膜上糖蛋白等物质减少，细胞间黏着性降低，易分散和转移。'
      ] },
      { type: 'keypoint', text: '癌细胞三大特征：无限增殖、形态结构改变、表面糖蛋白减少而易分散转移。其中糖蛋白减少是癌细胞易扩散转移的直接原因。' },
      { type: 'warn', text: '易错：癌细胞是基因突变累积的结果，不是“遗传物质全部改变”；正常细胞也有原癌基因和抑癌基因，癌变是这些基因发生突变，而非外来基因。不要把“有该基因”等同于“已癌变”。' },
      { type: 'tip', text: '高考高频考点：与细胞衰老对比记忆——癌变细胞代谢旺盛、无限增殖；衰老细胞代谢减慢、停止分裂。常考“糖蛋白减少→易转移”“无限增殖→可制成细胞系”等结论。' },
      { type: 'table', headers: ['特征', '正常细胞', '癌细胞'], rows: [
        ['增殖', '分裂次数有限', '无限增殖'],
        ['形态', '规则', '显著改变'],
        ['表面糖蛋白', '较多、黏着性强', '减少、易分散转移'],
        ['迁移', '不转移', '可转移']
      ] },
      { type: 'heading', text: '二、致癌因子与癌变机理' },
      { type: 'paragraph', text: '致癌因子大致分为三类：物理致癌因子（紫外线、X射线等）、化学致癌因子（石棉、黄曲霉毒素、亚硝胺等）、病毒致癌因子（如某些DNA病毒和RNA病毒）。日常生活中应尽量避免接触致癌因子。' },
      { type: 'table', headers: ['类别', '举例', '作用特点'], rows: [
        ['物理致癌因子', '紫外线、电离辐射', '损伤DNA'],
        ['化学致癌因子', '黄曲霉毒素、亚硝胺、石棉', '诱发基因突变'],
        ['病毒致癌因子', '某些疱疹病毒、逆转录病毒', '整合基因、干扰调控']
      ] },
      { type: 'keypoint', text: '原癌基因：主要负责调节细胞周期，控制细胞生长和分裂的进程；抑癌基因：主要阻止细胞不正常的增殖。二者发生突变且累积，正常细胞才可能变成癌细胞。' },
      { type: 'warn', text: '易错：原癌基因和抑癌基因在正常细胞中都存在并发挥作用，原癌基因并非“坏基因”。癌变往往不是单个基因突变，而是多个基因（原癌+抑癌）突变累积的结果。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图1 癌细胞的主要特征</text><circle cx="140" cy="170" r="46" fill="#d6eac4" stroke="#3f7d1e" stroke-width="3"/><text x="140" y="250" text-anchor="middle" font-size="13" fill="#2e3a22">正常细胞</text><circle cx="400" cy="150" r="34" fill="#5aa832"/><circle cx="450" cy="200" r="40" fill="#5aa832"/><circle cx="390" cy="210" r="28" fill="#5aa832"/><text x="430" y="280" text-anchor="middle" font-size="13" fill="#2e3a22">癌细胞（无限增殖、易扩散）</text><polygon points="200,180 330,180 300,160" fill="#3f7d1e"/></svg>', caption: '癌细胞无限增殖且易分散转移。' },
      { type: 'example', text: '例题：下列关于癌细胞的叙述，正确的是（  ）\n思路：癌细胞能无限增殖、糖蛋白减少易转移、是基因突变累积结果。错误项常把“原癌基因”说成只存在于癌细胞，或说癌变由单一基因决定。答案要点：糖蛋白减少导致易转移。' },
      { type: 'list', items: [
        '避免接触紫外线、电离辐射等物理致癌因子。',
        '不吃霉变食物，减少黄曲霉毒素等化学致癌物摄入。',
        '接种疫苗、洁身自好，预防病毒致癌因子感染。'
      ] },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图2 三类致癌因子</text><rect x="50" y="100" width="170" height="190" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="135" y="140" text-anchor="middle" font-size="14" fill="#3f7d1e">物理</text><text x="135" y="180" text-anchor="middle" font-size="13" fill="#2e3a22">紫外线</text><text x="135" y="205" text-anchor="middle" font-size="13" fill="#2e3a22">辐射</text><rect x="255" y="100" width="170" height="190" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="140" text-anchor="middle" font-size="14" fill="#3f7d1e">化学</text><text x="340" y="180" text-anchor="middle" font-size="13" fill="#2e3a22">亚硝胺</text><text x="340" y="205" text-anchor="middle" font-size="13" fill="#2e3a22">黄曲霉毒素</text><rect x="460" y="100" width="170" height="190" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="545" y="140" text-anchor="middle" font-size="14" fill="#3f7d1e">病毒</text><text x="545" y="185" text-anchor="middle" font-size="13" fill="#2e3a22">致癌病毒</text><polygon points="225,290 250,290 237,272" fill="#3f7d1e"/></svg>', caption: '致癌因子分为物理、化学、病毒三类。' },
      { type: 'paragraph', text: '预防癌症的主要措施：避免接触物理、化学和病毒致癌因子；保持健康的生活方式，如戒烟限酒、合理饮食、规律作息。由于癌变是基因突变累积的结果，早期诊断和规范治疗对提高治愈率十分重要。' },
      { type: 'tip', text: '解题技巧：判断“无限增殖、糖蛋白减少、形态改变”直接对应癌细胞；问“原癌/抑癌基因作用”答前者调节周期、后者阻止异常增殖；问预防答远离致癌因子、健康生活。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图3 原癌基因与抑癌基因</text><rect x="60" y="110" width="240" height="170" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="150" text-anchor="middle" font-size="15" fill="#3f7d1e">原癌基因</text><text x="180" y="195" text-anchor="middle" font-size="13" fill="#2e3a22">推动细胞周期</text><text x="180" y="225" text-anchor="middle" font-size="13" fill="#2e3a22">促进生长分裂</text><rect x="380" y="110" width="240" height="170" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="150" text-anchor="middle" font-size="15" fill="#3f7d1e">抑癌基因</text><text x="500" y="195" text-anchor="middle" font-size="13" fill="#2e3a22">阻止异常增殖</text><text x="500" y="225" text-anchor="middle" font-size="13" fill="#2e3a22">像刹车</text><text x="340" y="320" text-anchor="middle" font-size="14" fill="#2e3a22">二者突变累积，正常细胞→癌细胞</text><polygon points="300,200 380,200 350,180" fill="#3f7d1e"/></svg>', caption: '原癌基因推动、抑癌基因刹车。' },
      { type: 'paragraph', text: '细胞的癌变、衰老、凋亡和分化共同构成细胞的生命历程。理解这些过程的本质，有助于认识肿瘤发生机制并指导癌症的预防、诊断与治疗，也是高三复习中细胞生命历程一章的收尾重点。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于癌细胞特征的叙述，错误的是（  ）', options: ['能无限增殖', '形态结构发生显著变化', '细胞膜糖蛋白增多、易转移', '细胞间黏着性降低'], answer: '细胞膜糖蛋白增多、易转移', explanation: '癌细胞在适宜条件下能无限增殖，形态结构改变，且细胞膜上糖蛋白减少使细胞间黏着性降低，从而易分散和转移。糖蛋白是“减少”而非“增多”，故该项错误。本题选C。' },
      { type: 'choice', question: '下列致癌因子中，属于物理致癌因子的是（  ）', options: ['紫外线', '黄曲霉毒素', '亚硝胺', '致癌病毒'], answer: '紫外线', explanation: '物理致癌因子指辐射类因素，如紫外线、X射线等；黄曲霉毒素和亚硝胺属化学致癌因子，病毒属病毒致癌因子。本题选A。' },
      { type: 'choice', question: '下列关于原癌基因和抑癌基因的叙述，正确的是（  ）', options: ['只存在于癌细胞中', '原癌基因阻止异常增殖', '正常细胞中二者都存在并发挥作用', '抑癌基因促进细胞周期'], answer: '正常细胞中二者都存在并发挥作用', explanation: '原癌基因和抑癌基因是正常细胞中都存在的基因，原癌基因调节细胞周期、促进生长分裂，抑癌基因阻止细胞异常增殖；癌变是二者突变累积的结果。本题选C。' },
      { type: 'fill', question: '癌细胞细胞膜上______减少，使细胞间黏着性降低，易分散和转移。', answer: '糖蛋白', explanation: '癌细胞细胞膜表面的糖蛋白等物质减少，导致细胞之间黏着性下降，因此癌细胞容易从原发部位脱落、分散并在体内转移，这是癌细胞的典型特征之一。' },
      { type: 'fill', question: '抑癌基因的主要功能是从分子水平阻止细胞______的增殖。', answer: '不正常', explanation: '抑癌基因负责监控并阻止细胞不正常的增殖，相当于细胞周期的“刹车”；当其发生突变失活，细胞可能失控增殖。它和原癌基因共同维持细胞正常分裂。' }
    ]
  });
})();
