/* 生物学 · 必修1 分子与细胞 · 第6章 · 课时：第4节 细胞的癌变 */
(function () {
  var v = gzGetVolume('biology', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u21',
    name: '第4节 细胞的癌变',
    chapter: '必修1 分子与细胞 · 第6章 细胞的生命历程',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是癌细胞' },
      { type: 'paragraph', text: '在个体发育中，有的细胞受到<strong>致癌因子</strong>的作用，细胞中遗传物质发生变化，变成了不受机体控制的、连续进行分裂的恶性增殖细胞，这种细胞就是癌细胞。由癌细胞大量增殖形成的恶性肿瘤，就是我们常说的癌症。' },
      { type: 'list', items: ['癌细胞能无限增殖，不受正常分裂次数的限制', '癌细胞的形态结构发生显著变化', '癌细胞表面糖蛋白减少，易分散和转移', '癌细胞代谢旺盛，消耗大量营养物质'] },
      { type: 'heading', text: '二、癌细胞的主要特征' },
      { type: 'paragraph', text: '与正常细胞相比，癌细胞有三大典型特征：一是<strong>无限增殖</strong>，在适宜条件下能一直分裂；二是<strong>形态结构改变</strong>，如成纤维细胞变成球形；三是<strong>易扩散转移</strong>，细胞膜上的糖蛋白减少，细胞间黏着性下降，容易从原发部位脱落并转移到其他组织器官。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">正常细胞与癌细胞的区别</text><rect x="40" y="70" width="270" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="175" y="105" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">正常细胞</text><text x="175" y="138" font-size="13" fill="#2e3a22" text-anchor="middle">分裂次数有限</text><text x="175" y="166" font-size="13" fill="#2e3a22" text-anchor="middle">形态规则、黏着强</text><text x="175" y="194" font-size="13" fill="#2e3a22" text-anchor="middle">不易转移</text><rect x="370" y="70" width="270" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="505" y="105" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">癌细胞</text><text x="505" y="138" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">无限增殖</text><text x="505" y="166" font-size="13" fill="#2e3a22" text-anchor="middle">形态变、黏着性弱</text><text x="505" y="194" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">易分散转移</text><text x="340" y="310" font-size="13" fill="#2e3a22" text-anchor="middle">癌细胞的无限增殖和易转移，是癌症难治、易复发的核心原因。</text></svg>', caption: '图1　癌细胞在增殖能力、形态和转移倾向三方面与正常细胞明显不同。' },
      { type: 'keypoint', label: '重点·癌细胞三大特征', text: '<strong>癌细胞的主要特征可记为三点：一无限增殖（不受接触抑制和分裂次数限制）；二形态结构显著改变；三表面糖蛋白减少、细胞间黏着性降低，容易在体内分散和转移。</strong>其中「易转移」使得癌症危害最大，也是临床治疗最难处理的一环。' },
      { type: 'heading', text: '三、致癌因子' },
      { type: 'paragraph', text: '能引起细胞癌变的因子叫做致癌因子，通常分为三大类：物理致癌因子（如紫外线、X 射线等辐射）、化学致癌因子（如亚硝酸盐、黄曲霉素、石棉等）、病毒致癌因子（如某些 DNA 病毒和 RNA 病毒）。' },
      { type: 'list', items: ['物理致癌因子：紫外线、X 射线、电离辐射等', '化学致癌因子：亚硝酸盐、黄曲霉毒素、苯并芘、石棉等', '病毒致癌因子：如人乳头状瘤病毒（HPV）、乙肝病毒等'] },
      { type: 'table', headers: ['类别', '举例', '作用特点'], rows: [['物理致癌因子', '紫外线、X 射线', '损伤 DNA 结构'], ['化学致癌因子', '亚硝酸盐、黄曲霉素', '诱发基因突变'], ['病毒致癌因子', 'HPV、乙肝病毒', '病毒基因整合进细胞 DNA']] },
      { type: 'heading', text: '四、细胞癌变的内部原因' },
      { type: 'paragraph', text: '正常情况下，细胞内的<strong>原癌基因</strong>负责调节细胞周期、促进生长，<strong>抑癌基因</strong>负责阻止细胞不正常增殖。二者共同维持细胞正常分裂。当它们受到致癌因子作用而发生突变（原癌基因被激活、抑癌基因失活），细胞就失去控制、癌变。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">原癌基因与抑癌基因的平衡被打破</text><rect x="40" y="80" width="270" height="170" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="175" y="115" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">正常状态</text><text x="175" y="148" font-size="13" fill="#2e3a22" text-anchor="middle">原癌基因：促生长</text><text x="175" y="176" font-size="13" fill="#2e3a22" text-anchor="middle">抑癌基因：抑增殖</text><text x="175" y="206" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">二者平衡 → 正常</text><rect x="370" y="80" width="270" height="170" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="505" y="115" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">突变后</text><text x="505" y="148" font-size="13" fill="#2e3a22" text-anchor="middle">原癌基因被激活</text><text x="505" y="176" font-size="13" fill="#2e3a22" text-anchor="middle">抑癌基因失活</text><text x="505" y="206" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">失衡 → 癌变</text><text x="340" y="310" font-size="13" fill="#2e3a22" text-anchor="middle">癌变的根本原因是原癌基因和抑癌基因发生突变，属于基因突变。</text></svg>', caption: '图2　原癌基因与抑癌基因失衡，细胞增殖失控而癌变。' },
      { type: 'warn', label: '易错·原癌基因并非坏基因', text: '很多同学误以为原癌基因是「坏基因」。其实<strong>原癌基因和抑癌基因都是正常细胞中本来就有的基因</strong>，分别负责促进生长和抑制增殖，维持平衡。只有当它们发生突变、失去正常功能时，才会导致细胞癌变。所以癌变是「正常基因出错」，不是「外来坏基因侵入」。' },
      { type: 'example', label: '例题·分析癌变原因', text: '某人长期吸烟，最终肺部细胞癌变。从基因角度分析癌变原因。<br>答：烟草中的化学物质属于化学致癌因子，可诱发肺部细胞的原癌基因和抑癌基因发生突变。原癌基因被异常激活、抑癌基因失活，使细胞增殖失控，最终发展为癌细胞。可见癌变的根本原因是基因突变。' },
      { type: 'heading', text: '五、癌症的预防与治疗' },
      { type: 'paragraph', text: '癌症的预防重在减少接触致癌因子：健康饮食、戒烟限酒、避免暴晒、接种疫苗（如乙肝疫苗、HPV 疫苗）、定期体检。治疗方面，常用手段有手术切除、放疗、化疗，以及针对特定分子的靶向治疗和免疫治疗。' },
      { type: 'tip', label: '提示·防癌口诀', text: '预防癌症可以记住：<strong>戒烟限酒、少吃腌制霉变食物、防晒少辐射、打疫苗、勤体检</strong>。其中黄曲霉素藏在发霉的花生玉米里，亚硝酸盐多见于腌制食品，紫外线来自暴晒，都要尽量避开。早发现、早诊断、早治疗最关键。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">远离致癌因子的健康生活方式</text><rect x="40" y="80" width="180" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="130" y="120" font-size="14" fill="#3f7d1e" text-anchor="middle" font-weight="bold">物理因素</text><text x="130" y="152" font-size="13" fill="#2e3a22" text-anchor="middle">防晒、少辐射</text><text x="130" y="182" font-size="13" fill="#2e3a22" text-anchor="middle">避免 X 射线滥用</text><rect x="250" y="80" width="180" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="120" font-size="14" fill="#3f7d1e" text-anchor="middle" font-weight="bold">化学因素</text><text x="340" y="152" font-size="13" fill="#2e3a22" text-anchor="middle">戒烟、少吃腌制</text><text x="340" y="182" font-size="13" fill="#2e3a22" text-anchor="middle">不吃霉变食物</text><rect x="460" y="80" width="180" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="120" font-size="14" fill="#3f7d1e" text-anchor="middle" font-weight="bold">病毒因素</text><text x="550" y="152" font-size="13" fill="#2e3a22" text-anchor="middle">接种疫苗</text><text x="550" y="182" font-size="13" fill="#2e3a22" text-anchor="middle">注意个人卫生</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">远离三类致癌因子，养成健康生活方式，是预防癌症最有效的方法。</text></svg>', caption: '图3　从物理、化学、病毒三方面远离致癌因子，可有效预防癌症。' }
    ],
    exercises: [
      { type: 'choice', question: '下列不属于癌细胞特征的是？', options: ['无限增殖', '形态结构改变', '易分散转移', '停止分裂'], answer: '停止分裂', explanation: '癌细胞的主要特征包括无限增殖、形态结构显著改变、表面糖蛋白减少而易分散转移。停止分裂是正常分化细胞或衰老细胞的表现，不是癌细胞的特征。因此不属于癌细胞特征的是停止分裂。' },
      { type: 'choice', question: '细胞癌变的内部根本原因是？', options: ['原癌基因和抑癌基因突变', '细胞膜糖蛋白增多', '细胞水分增加', '细胞核体积变小'], answer: '原癌基因和抑癌基因突变', explanation: '正常情况下原癌基因促生长、抑癌基因抑增殖，二者平衡维持细胞正常分裂。致癌因子使这两种基因发生突变，原癌基因被激活、抑癌基因失活，导致细胞增殖失控而癌变。因此根本原因是原癌基因和抑癌基因突变。' },
      { type: 'choice', question: '下列致癌因子中，属于病毒致癌因子的是？', options: ['紫外线', '亚硝酸盐', '人乳头状瘤病毒（HPV）', '黄曲霉素'], answer: '人乳头状瘤病毒（HPV）', explanation: '致癌因子分物理、化学、病毒三类。紫外线是物理致癌因子，亚硝酸盐和黄曲霉素是化学致癌因子，人乳头状瘤病毒（HPV）属于病毒致癌因子，其基因可整合进宿主细胞 DNA 诱发癌变。因此选 HPV。' },
      { type: 'fill', question: '正常细胞中，___基因负责调节细胞周期、促进细胞生长和增殖；___基因负责阻止细胞不正常的增殖。', answer: '原癌；抑癌', explanation: '细胞内的原癌基因主要负责调节细胞周期、控制细胞生长和分裂的进程，促进正常增殖；抑癌基因则负责阻止细胞不正常的增殖。二者共同维持细胞正常分裂，一旦突变就可能导致癌变。因此依次填原癌、抑癌。' },
      { type: 'fill', question: '癌细胞表面糖蛋白减少，使细胞之间___降低，因此癌细胞容易在体内分散和转移。', answer: '黏着性', explanation: '癌细胞细胞膜上的糖蛋白等物质减少，导致细胞之间的黏着性显著下降，使癌细胞容易从原发部位脱落，在体液中游走并侵入其他组织器官，形成转移灶。因此填黏着性。' }
    ]
  });
})();
