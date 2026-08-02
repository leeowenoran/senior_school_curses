/* 生物学 · 高三复习 · 遗传与进化 · 第4章 · 课时：第2节 基因表达与性状的关系 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u13',
    name: '第2节 基因表达与性状的关系',
    chapter: '遗传与进化 · 第4章 基因的表达',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、基因控制性状的两条途径' },
      { type: 'paragraph', text: '基因怎样决定性状？主要有两条路。第一条是<strong>间接途径</strong>：基因先指导合成一种酶，酶再去催化代谢反应，代谢产物的有无或多少决定了性状。比如白化病，就是相关基因异常使酪氨酸酶缺乏，黑色素合成受阻，患者皮肤毛发发白。这条路可以记作「基因管酶、酶管代谢、代谢管性状」。' },
      { type: 'paragraph', text: '第二条是<strong>直接途径</strong>：基因直接指导合成结构蛋白，蛋白质结构一变，性状就跟着变。囊性纤维病就是患者体内调控氯离子通道蛋白的基因异常，使转运蛋白结构出错，导致呼吸道等处黏液异常。这条路是「基因管蛋白质结构、结构管性状」。' },
      { type: 'list', items: ['间接途径：基因 → 控制酶合成 → 控制代谢过程 → 控制性状（如白化病）', '直接途径：基因 → 控制蛋白质结构 → 直接控制性状（如囊性纤维病）'] },
      { type: 'table', headers: ['途径', '关键中介', '实例'], rows: [['间接途径', '酶（代谢）', '白化病'], ['直接途径', '结构蛋白', '囊性纤维病']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 间接途径：基因控酶控代谢控性状</text><rect x="40" y="110" width="120" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="100" y="135" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">基因</text><polygon points="160,140 205,130 205,160" fill="#3f7d1e"/><rect x="215" y="110" width="110" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="270" y="135" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">酶</text><polygon points="325,140 370,130 370,160" fill="#3f7d1e"/><rect x="380" y="110" width="120" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="440" y="135" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">代谢</text><polygon points="500,140 545,130 545,160" fill="#3f7d1e"/><rect x="555" y="110" width="100" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="605" y="135" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">性状</text><text x="340" y="220" font-size="12" fill="#2e3a22" text-anchor="middle">例如：基因异常→酪氨酸酶缺→黑色素合成障碍→白化病。</text></svg>', caption: '图1　间接途径：基因经酶和代谢间接决定性状（如白化病）。' },
      { type: 'keypoint', label: '核心概念·基因与性状', text: '<strong>基因通过控制蛋白质的合成来控制性状：</strong>要么通过控制酶的合成来控制代谢过程（间接），要么通过控制蛋白质的结构直接控制性状（直接）。蛋白质是生命活动的主要承担者，所以基因对性状的控制归根结底是对蛋白质的控制。' },
      { type: 'heading', text: '二、表观遗传' },
      { type: 'paragraph', text: '有时碱基序列明明没变，性状却出现了可遗传的差异，这叫<strong>表观遗传</strong>。最典型的机制是 DNA 甲基化和组蛋白修饰：给 DNA 或组蛋白加上化学小标记，基因就被「关掉」或「调低」，不再表达，但序列本身一字未改。这种改变能代代相传，又能被撤销，是可逆的。' },
      { type: 'list', items: ['定义：基因的碱基序列不变，但基因表达和表型发生可遗传的变化', '机制：DNA 甲基化、组蛋白修饰等化学修饰', '特点：变化可遗传、且通常是可逆的'] },
      { type: 'warn', label: '易错辨析·表观遗传≠基因突变', text: '① 表观遗传的 DNA 碱基序列不变，而基因突变的碱基序列变了，二者本质不同；② 表观遗传的性状改变能遗传给后代，别误以为只有序列改变才能遗传；③ 表观遗传是可逆的（如去甲基化可恢复表达），基因突变一般不可轻易逆转；④ 高考常把「序列不变却表型改变」作为判断表观遗传的标志。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 DNA甲基化抑制基因表达</text><rect x="120" y="80" width="440" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="110" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">DNA 序列（碱基序列不变）</text><rect x="150" y="160" width="40" height="40" rx="8" fill="#5aa832"/><text x="170" y="185" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">CH3</text><rect x="220" y="160" width="40" height="40" rx="8" fill="#5aa832"/><text x="240" y="185" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">CH3</text><text x="430" y="185" font-size="13" fill="#2e3a22" text-anchor="middle">甲基化标记使基因沉默</text><text x="340" y="235" font-size="12" fill="#2e3a22" text-anchor="middle">甲基化使基因不表达，但序列未变，属于表观遗传。</text></svg>', caption: '图2　DNA 甲基化在不改变序列的前提下使基因沉默（表观遗传）。' },
      { type: 'tip', label: '高频考点·表观遗传高考热点', text: '表观遗传是近年高考新热点，常从三个角度出题：一是判断「序列不变、表型可遗传改变」是否属表观遗传（是）；二是问机制（答 DNA 甲基化、组蛋白修饰）；三是联系环境（如营养、压力）如何影响甲基化进而影响性状。答题时强调「序列不变」四字。' },
      { type: 'heading', text: '三、实例与辨析' },
      { type: 'example', label: '例题·判断控制途径', text: '某家庭父母正常，孩子患白化病。已知白化病由酪氨酸酶基因异常引起。<br>分析：酪氨酸酶是一种酶，基因异常使酶缺乏，黑色素代谢受阻，属于「基因 → 酶 → 代谢 → 性状」的间接途径。<br>因此白化病是基因通过控制酶的合成来控制代谢，从而间接控制性状的典型例子，而不是蛋白质结构异常导致的直接途径。' },
      { type: 'paragraph', text: '囊性纤维病则相反：患者的 CFTR 基因异常，直接导致合成的氯离子通道蛋白结构有缺陷，属于直接途径。由此可见，同样是遗传病，控制方式可能走间接也可能走直接，判别的关键是「中间有没有酶和代谢这一步」。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 基因控制性状的两条途径</text><rect x="60" y="90" width="250" height="120" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="185" y="120" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">间接途径</text><text x="185" y="150" font-size="12" fill="#2e3a22" text-anchor="middle">基因→酶→代谢→性状</text><text x="185" y="178" font-size="12" fill="#5aa832" text-anchor="middle">例：白化病</text><rect x="380" y="90" width="250" height="120" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="505" y="120" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">直接途径</text><text x="505" y="150" font-size="12" fill="#2e3a22" text-anchor="middle">基因→蛋白质结构→性状</text><text x="505" y="178" font-size="12" fill="#5aa832" text-anchor="middle">例：囊性纤维病</text><text x="340" y="255" font-size="12" fill="#2e3a22" text-anchor="middle">无论哪条途径，都是基因通过控制蛋白质来影响性状。</text></svg>', caption: '图3　基因控制性状的两条途径对比（间接与直接）。' },
      { type: 'table', headers: ['特点', '表观遗传', '基因突变'], rows: [['碱基序列', '不变', '改变'], ['是否可遗传', '可遗传', '可遗传'], ['是否可逆', '通常可逆', '一般不可逆'], ['机制', '甲基化等修饰', '碱基替换增添缺失']] }
    ],
    exercises: [
      { type: 'choice', question: '白化病患者因缺乏黑色素而皮肤发白，其基因控制性状的途径是？', options: ['基因通过控制蛋白质结构直接控制性状', '基因通过控制酶合成来控制代谢，进而控制性状', '基因通过控制DNA结构控制性状', '基因不参与该性状的决定'], answer: '基因通过控制酶合成来控制代谢，进而控制性状', explanation: '白化病是由于控制酪氨酸酶的基因异常，导致酪氨酸酶缺乏，黑色素合成这一代谢过程受阻，从而出现白化症状。这属于「基因 → 酶 → 代谢 → 性状」的间接途径，即基因通过控制酶的合成来控制代谢，进而间接控制性状，而不是直接控制蛋白质结构。' },
      { type: 'choice', question: '下列关于表观遗传的叙述，正确的是？', options: ['基因的碱基序列发生改变导致性状改变', '基因的碱基序列不变，表达与表型发生可遗传改变', '表观遗传不能遗传给后代', '表观遗传只发生在原核生物中'], answer: '基因的碱基序列不变，表达与表型发生可遗传改变', explanation: '表观遗传是指基因的碱基序列不变，但由于 DNA 甲基化、组蛋白修饰等，基因的表达和表型发生可遗传改变的现象。它不同于基因突变（序列改变），且这种改变通常可遗传、并可逆。因此「序列不变而表型可遗传改变」是其核心特征。' },
      { type: 'choice', question: '囊性纤维病是由于基因异常导致细胞膜氯离子通道蛋白结构异常，这属于？', options: ['间接途径：控酶控代谢', '直接途径：控蛋白质结构', '表观遗传', '染色体结构变异'], answer: '直接途径：控蛋白质结构', explanation: '囊性纤维病是患者 CFTR 基因异常，直接造成合成的氯离子通道蛋白结构缺陷，属于「基因 → 蛋白质结构 → 性状」的直接途径。它不是通过酶和代谢间接起作用，也不是表观遗传或染色体变异，判别关键在于是否直接改变了结构蛋白。' },
      { type: 'fill', question: '表观遗传的常见机制包括 DNA 甲基化和___修饰。', answer: '组蛋白', explanation: '表观遗传是在碱基序列不变的情况下，通过化学修饰改变基因表达与表型的现象。最常见的两类机制是 DNA 甲基化和组蛋白修饰，这些修饰可以关闭或降低基因的表达，而且这种变化能够遗传、也可逆转。' },
      { type: 'fill', question: '白化病患者体内由于缺乏___酶，导致黑色素无法合成。', answer: '酪氨酸酶', explanation: '正常人体内酪氨酸酶能催化黑色素的合成。白化病患者相关基因异常，不能合成有功能的酪氨酸酶，黑色素代谢途径中断，因而皮肤、毛发等处缺乏黑色素，表现出白化症状。这正是基因通过控制酶来影响代谢的典型实例。' }
    ]
  });
})();
