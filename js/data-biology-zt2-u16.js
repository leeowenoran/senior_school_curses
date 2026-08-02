/* 生物学 · 高三复习 · 遗传与进化 · 第5章 · 课时：第3节 人类遗传病 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u16',
    name: '第3节 人类遗传病',
    chapter: '遗传与进化 · 第5章 基因突变及其他变异',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、人类遗传病的类型' },
      { type: 'paragraph', text: '人类遗传病是指由于遗传物质改变而引起的人类疾病，主要分为三大类。单基因遗传病由一对等位基因控制，如红绿色盲、白化病、镰状细胞贫血；多基因遗传病由多对等位基因控制，并受环境的影响，如原发性高血压、冠心病；染色体异常遗传病则是染色体结构或数目异常所致，如唐氏综合征（21三体）。' },
      { type: 'list', items: ['单基因遗传病：受一对等位基因控制，如红绿色盲、白化病、镰状细胞贫血', '多基因遗传病：受多对等位基因控制，如原发性高血压、冠心病', '染色体异常遗传病：染色体结构或数目异常，如唐氏综合征'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 人类遗传病的三大类</text><rect x="40" y="80" width="180" height="110" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="130" y="110" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">单基因遗传病</text><text x="130" y="140" font-size="12" fill="#2e3a22" text-anchor="middle">一对等位基因控制</text><text x="130" y="166" font-size="12" fill="#5aa832" text-anchor="middle">红绿色盲白化病</text><rect x="250" y="80" width="180" height="110" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="110" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">多基因遗传病</text><text x="340" y="140" font-size="12" fill="#2e3a22" text-anchor="middle">多对等位基因控制</text><text x="340" y="166" font-size="12" fill="#5aa832" text-anchor="middle">原发性高血压</text><rect x="460" y="80" width="180" height="110" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="110" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">染色体异常</text><text x="550" y="140" font-size="12" fill="#2e3a22" text-anchor="middle">结构或数目异常</text><text x="550" y="166" font-size="12" fill="#5aa832" text-anchor="middle">唐氏综合征</text><text x="340" y="225" font-size="12" fill="#2e3a22" text-anchor="middle">三类遗传病的致病原因各不相同，判别首看遗传物质变化层面。</text></svg>', caption: '图1　人类遗传病分为单基因、多基因、染色体异常三大类。' },
      { type: 'table', headers: ['类型', '控制因素', '实例'], rows: [['单基因遗传病', '一对等位基因', '红绿色盲、白化病'], ['多基因遗传病', '多对等位基因', '原发性高血压、冠心病'], ['染色体异常遗传病', '染色体结构或数目', '唐氏综合征']] },
      { type: 'keypoint', label: '核心概念·系谱图分析原则', text: '<strong>系谱图分析的两句口诀：「无中生有为隐性，有中生无为显性」。</strong>即双亲都正常却生出患病孩子，该病为隐性遗传；双亲都患病却生出正常孩子，该病为显性遗传。这是判断显隐性的第一步，也是高考系谱题的破题关键。' },
      { type: 'heading', text: '二、系谱图分析' },
      { type: 'paragraph', text: '系谱图用符号记录家族中各成员的健康与患病情况，是推断遗传方式的工具。先判断显隐性：无中生有是隐性、有中生无是显性；再结合患者性别比例判断是否伴性。例如红绿色盲是伴 X 隐性，男性患者多于女性，且常出现隔代交叉遗传。' },
      { type: 'list', items: ['第一步：用「无中生有/有中生无」判断显隐性', '第二步：观察男女患病比例，判断是否伴性', '第三步：写出典型个体的基因型，验证是否符合', '第四步：推算后代患病概率'] },
      { type: 'warn', label: '易错辨析·三类遗传病易混点', text: '① 红绿色盲、白化病是单基因病，不是染色体病；② 唐氏综合征是染色体数目异常（21三体），不是由「致病基因」引起，所以患者父母多半正常；③ 多基因病有家族聚集倾向并受环境影响，不可当作单基因病简单推算；④ 系谱判断时，先定显隐性再定是否伴性，顺序别反。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 系谱图：无中生有是隐性</text><rect x="120" y="70" width="60" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="150" y="105" font-size="13" fill="#2e3a22" text-anchor="middle">父</text><rect x="240" y="70" width="60" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="270" y="105" font-size="13" fill="#2e3a22" text-anchor="middle">母</text><line x1="180" y1="100" x2="240" y2="100" stroke="#3f7d1e" stroke-width="2"/><line x1="210" y1="100" x2="210" y2="150" stroke="#3f7d1e" stroke-width="2"/><rect x="180" y="150" width="60" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="210" y="185" font-size="13" fill="#2e3a22" text-anchor="middle">正常子</text><rect x="270" y="150" width="60" height="60" rx="10" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><text x="300" y="185" font-size="13" fill="#ffffff" text-anchor="middle">患病子</text><text x="340" y="255" font-size="13" fill="#2e3a22" text-anchor="middle">父母正常却生患病孩子→无中生有→隐性遗传。</text></svg>', caption: '图2　系谱图中「无中生有」提示该遗传病为隐性。' },
      { type: 'tip', label: '高频考点·调查方法的选择', text: '高考常考「怎么调查遗传病」：要调查某病的发病率，必须在人群中随机抽样、样本足够大，不能只找患者；要分析遗传方式，则要在患者家系中调查并绘制系谱图。一句话记住：发病率查人群、遗传方式查家系，二者目的不同、方法不可互换。' },
      { type: 'heading', text: '三、遗传病的调查与预防' },
      { type: 'paragraph', text: '对遗传病既要能调查分析，也要知道预防手段。遗传咨询、产前诊断（如羊水检查、基因检测）可以在胎儿出生前降低遗传病患儿的出生率；禁止近亲结婚能减少隐性致病基因纯合的机会。这些属于优生优育的重要措施。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 遗传病调查的两类方法</text><rect x="50" y="80" width="270" height="110" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="185" y="110" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">人群中随机调查</text><text x="185" y="142" font-size="12" fill="#2e3a22" text-anchor="middle">调查发病率</text><text x="185" y="168" font-size="12" fill="#5aa832" text-anchor="middle">样本要大、随机</text><rect x="360" y="80" width="270" height="110" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="495" y="110" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">患者家系中调查</text><text x="495" y="142" font-size="12" fill="#2e3a22" text-anchor="middle">分析遗传方式</text><text x="495" y="168" font-size="12" fill="#5aa832" text-anchor="middle">绘制系谱图</text><text x="340" y="220" font-size="12" fill="#2e3a22" text-anchor="middle">发病率在人群中查，遗传方式在患者家系中查，二者不可混用。</text></svg>', caption: '图3　调查发病率用人群随机抽样，分析遗传方式用患者家系。' },
      { type: 'example', label: '例题·系谱显隐性判断', text: '某家族系谱中，一对表现型正常的夫妇生出了一个患病的儿子，且该病在男女中均有出现。<br>分析：双亲正常却生患病孩子，符合「无中生有」，可判断该病为隐性遗传。<br>由于男女都患病、无明显性别差异，初步判断为常染色体隐性遗传（而非伴 X 隐性）。据此可推测父母均为杂合携带者。' },
      { type: 'paragraph', text: '关注遗传病还要注意监测与筛查。产前诊断手段包括羊水穿刺、绒毛取样、B 超检查和基因诊断等，可在出生前发现某些遗传病或先天畸形；遗传咨询则帮助有家族史的夫妇评估风险、指导生育。这些措施与禁止近亲结婚一起，构成预防遗传病的重要防线。' },
      { type: 'table', headers: ['调查目的', '调查对象', '注意事项'], rows: [['发病率', '人群随机抽样', '样本大、随机'], ['遗传方式', '患者家系', '绘制系谱图'], ['预防手段', '育龄人群', '遗传咨询、产前诊断']] }
    ],
    exercises: [
      { type: 'choice', question: '红绿色盲和镰状细胞贫血属于哪一类人类遗传病？', options: ['单基因遗传病', '多基因遗传病', '染色体异常遗传病', '传染病'], answer: '单基因遗传病', explanation: '红绿色盲和镰状细胞贫血都是由一对等位基因控制的疾病，属于单基因遗传病。多基因遗传病由多对基因控制（如高血压），染色体异常病由染色体改变引起（如唐氏综合征），传染病由病原体引起而非遗传物质改变，因此正确选项为单基因遗传病。' },
      { type: 'choice', question: '在系谱图中，双亲都正常却生出一个患病孩子，说明该病的遗传方式是？', options: ['显性遗传', '隐性遗传', '伴Y遗传', '无法判断'], answer: '隐性遗传', explanation: '系谱分析口诀是「无中生有为隐性，有中生无为显性」。双亲均正常却生出患病后代，说明正常为显性、患病为隐性，即该病为隐性遗传。这是判断显隐性的第一步，由此可进一步结合性别比例判断是否伴性。' },
      { type: 'choice', question: '若要调查某种遗传病的发病率，应当采用的方法是？', options: ['在患者家系中调查', '在人群中随机抽样调查', '只在医院收集病例', '只在实验动物中研究'], answer: '在人群中随机抽样调查', explanation: '调查遗传病的发病率，必须在人群中进行随机抽样、并保证样本量足够大，这样算出的患病比例才接近真实发病率。在患者家系中调查适合分析遗传方式而非发病率，只在医院或动物中研究都不能代表人群总体。' },
      { type: 'fill', question: '唐氏综合征（21三体）是由于染色体数目异常引起的，属于___遗传病。', answer: '染色体异常', explanation: '唐氏综合征患者第 21 号染色体比正常人多了一条，属于染色体数目异常导致的疾病，因此归类为染色体异常遗传病。它与由单个或少数基因控制的单基因、多基因遗传病不同，患者父母通常染色体正常。' },
      { type: 'fill', question: '原发性高血压、冠心病等受多对基因和环境共同影响，属于___遗传病。', answer: '多基因', explanation: '原发性高血压、冠心病等由多对等位基因共同控制，并且容易受到环境因素的影响，具有明显的家族聚集倾向，这类疾病属于多基因遗传病。与单基因病不同，它们不能简单地用一对基因的分离定律去推算后代患病概率。' }
    ]
  });
})();
