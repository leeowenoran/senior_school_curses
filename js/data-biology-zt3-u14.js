/* 生物学 · 高三复习 · 稳态与调节 · 第4章 · 课时：第1节 免疫系统的组成和功能 */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u14',
    name: '第1节 免疫系统的组成和功能',
    chapter: '稳态与调节 · 第4章 免疫调节',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、免疫系统的组成' },
      { type: 'paragraph', text: '免疫系统是机体执行免疫功能的物质基础，由三大部分组成：<strong>免疫器官、免疫细胞、免疫活性物质</strong>。可以把它想象成一支军队——免疫器官是军营和训练基地，免疫细胞是士兵，免疫活性物质是武器弹药。三者缺一不可。' },
      { type: 'table', headers: ['组成层次', '主要内容', '举例'], rows: [
        ['免疫器官', '免疫细胞生成、成熟或集中分布的场所', '骨髓、胸腺、脾、淋巴结、扁桃体'],
        ['免疫细胞', '发挥免疫作用的细胞', '吞噬细胞、淋巴细胞（T细胞、B细胞）'],
        ['免疫活性物质', '由免疫细胞或其他细胞产生的发挥免疫作用的物质', '抗体、细胞因子、溶菌酶']
      ] },
      { type: 'keypoint', text: '核心概念：免疫系统组成三层次。免疫器官（骨髓、胸腺、脾、淋巴结、扁桃体）→ 免疫细胞（吞噬细胞、T细胞、B细胞）→ 免疫活性物质（抗体、细胞因子、溶菌酶）。考题常考归类，要能判断某结构或物质属于哪一层。' },
      { type: 'list', items: [
        '免疫器官：骨髓（造血、B细胞成熟）、胸腺（T细胞成熟）、脾、淋巴结、扁桃体。',
        '免疫细胞：吞噬细胞（非特异性吞噬）、淋巴细胞（T细胞、B细胞，特异性免疫主力）。',
        '免疫活性物质：抗体、细胞因子、溶菌酶，不一定都由免疫细胞产生（如溶菌酶可由唾液腺等产生）。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="24" y="44" fill="#3f7d1e" font-size="20" font-family="sans-serif">图1 免疫系统的组成</text><rect x="40" y="100" width="180" height="170" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="68" y="130" fill="#3f7d1e" font-size="17" font-family="sans-serif">免疫器官</text><text x="58" y="162" fill="#2e3a22" font-size="14" font-family="sans-serif">骨髓 胸腺</text><text x="58" y="190" fill="#2e3a22" font-size="14" font-family="sans-serif">脾 淋巴结</text><text x="58" y="218" fill="#2e3a22" font-size="14" font-family="sans-serif">扁桃体</text><rect x="250" y="100" width="180" height="170" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="278" y="130" fill="#3f7d1e" font-size="17" font-family="sans-serif">免疫细胞</text><text x="268" y="162" fill="#2e3a22" font-size="14" font-family="sans-serif">吞噬细胞</text><text x="268" y="190" fill="#2e3a22" font-size="14" font-family="sans-serif">T细胞 B细胞</text><rect x="460" y="100" width="180" height="170" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="478" y="130" fill="#3f7d1e" font-size="17" font-family="sans-serif">免疫活性物质</text><text x="478" y="162" fill="#2e3a22" font-size="14" font-family="sans-serif">抗体</text><text x="478" y="190" fill="#2e3a22" font-size="14" font-family="sans-serif">细胞因子</text><text x="478" y="218" fill="#2e3a22" font-size="14" font-family="sans-serif">溶菌酶</text></svg>', caption: '免疫系统由免疫器官、免疫细胞、免疫活性物质三个层次构成，三者共同完成免疫功能。' },
      { type: 'heading', text: '二、免疫细胞的来源与成熟' },
      { type: 'paragraph', text: '所有血细胞（包括免疫细胞）都来自骨髓中的造血干细胞。区别在于成熟场所：<strong>B淋巴细胞在骨髓中成熟</strong>，而<strong>T淋巴细胞迁移到胸腺中成熟</strong>。记一个口诀「B在骨、T在胸」——B对应Bone marrow（骨髓），T对应Thymus（胸腺）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="24" y="44" fill="#3f7d1e" font-size="20" font-family="sans-serif">图2 T细胞与B细胞的成熟场所</text><rect x="60" y="110" width="240" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="80" y="152" fill="#2e3a22" font-size="16" font-family="sans-serif">骨髓：B细胞成熟</text><rect x="380" y="110" width="240" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="400" y="152" fill="#2e3a22" font-size="16" font-family="sans-serif">胸腺：T细胞成熟</text><text x="60" y="230" fill="#2e3a22" font-size="15" font-family="sans-serif">两者都源自骨髓造血干细胞，只是成熟地点不同</text></svg>', caption: 'B细胞在骨髓成熟，T细胞在胸腺成熟，二者均起源于骨髓造血干细胞。' },
      { type: 'list', items: [
        '共同点：T细胞和B细胞都来自骨髓造血干细胞。',
        '不同点：B细胞留在骨髓成熟；T细胞到胸腺成熟。',
        '意义：成熟后的淋巴细胞才能识别特定抗原，执行特异性免疫。'
      ] },
      { type: 'warn', text: '易错辨析：不要把T、B的成熟部位记反。简单地说——「T」和「胸（腺）」同音好记，T细胞在胸腺成熟；B细胞在骨髓成熟。考场上常把两者互换设错，看清「成熟」而非「起源」。' },
      { type: 'heading', text: '三、免疫系统的三大功能' },
      { type: 'paragraph', text: '免疫系统有三道防线之外的三大功能，分别对应不同的保护任务：<strong>免疫防御、免疫自稳、免疫监视</strong>。防御是对外抵御病原体，自稳是对内清理衰老损伤细胞，监视是时刻盯着突变细胞。功能过强或过弱都会生病。' },
      { type: 'table', headers: ['功能', '作用', '失调后果'], rows: [
        ['免疫防御', '抵御病原体的入侵（最基本）', '过强→过敏反应；过弱→免疫缺陷'],
        ['免疫自稳', '清除衰老、损伤的细胞', '过强→自身免疫病'],
        ['免疫监视', '识别和清除突变的细胞', '低下→易发生肿瘤']
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="24" y="44" fill="#3f7d1e" font-size="20" font-family="sans-serif">图3 免疫系统三大功能</text><rect x="40" y="100" width="190" height="170" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="70" y="135" fill="#3f7d1e" font-size="17" font-family="sans-serif">免疫防御</text><text x="58" y="170" fill="#2e3a22" font-size="14" font-family="sans-serif">抵御病原体</text><text x="58" y="200" fill="#2e3a22" font-size="14" font-family="sans-serif">过强→过敏</text><text x="58" y="228" fill="#2e3a22" font-size="14" font-family="sans-serif">过弱→缺陷</text><rect x="250" y="100" width="190" height="170" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="280" y="135" fill="#3f7d1e" font-size="17" font-family="sans-serif">免疫自稳</text><text x="268" y="170" fill="#2e3a22" font-size="14" font-family="sans-serif">清除衰老损伤</text><text x="268" y="200" fill="#2e3a22" font-size="14" font-family="sans-serif">过强→自身</text><text x="268" y="228" fill="#2e3a22" font-size="14" font-family="sans-serif">免疫病</text><rect x="460" y="100" width="180" height="170" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="488" y="135" fill="#3f7d1e" font-size="17" font-family="sans-serif">免疫监视</text><text x="478" y="170" fill="#2e3a22" font-size="14" font-family="sans-serif">清除突变细胞</text><text x="478" y="200" fill="#2e3a22" font-size="14" font-family="sans-serif">低下→肿瘤</text></svg>', caption: '免疫防御、免疫自稳、免疫监视三大功能，各自异常对应过敏、自身免疫病、肿瘤等疾病。' },
      { type: 'example', text: '例题（高考风格）：某人免疫系统把自身正常关节组织当外来物攻击，导致类风湿关节炎，这属于哪类功能失调？思路：把自身物质误当外来物攻击，是免疫系统敌我不分、攻击自身成分，属于免疫自稳功能过强引发的自身免疫病。本题考查三大功能与疾病的对应关系。' },
      { type: 'tip', text: '高频考点：三大功能与疾病的对应。防御—过敏／缺陷；自稳—自身免疫病（如类风湿、系统性红斑狼疮）；监视—肿瘤。给一句症状要能反推是哪项功能失调，这是选择题和填空题的高频素材。' },
      { type: 'warn', text: '易错：免疫防御是「最基本」的功能，但过强会变过敏、过弱会变免疫缺陷（如艾滋病）。不要把「防御过强」和「监视低下」的后果搞混——过敏归防御，肿瘤归监视，自身免疫病归自稳。' },
      { type: 'keypoint', text: '再巩固核心：免疫系统＝器官＋细胞＋物质；细胞记「B在骨、T在胸」；功能记「防御对外、自稳对内清垃圾、监视防癌变」。这三条是本章后续学习特异性免疫的根基。' },
      { type: 'paragraph', text: '小结：免疫系统由免疫器官、免疫细胞、免疫活性物质组成，其三大功能防御、自稳、监视分别对应抵御外来病原体、清除内部衰老损伤、监控突变细胞。功能平衡才健康，失衡则出现过敏、自身免疫病或肿瘤。' }
    ],
    exercises: [
      { type: 'choice', question: 'T淋巴细胞成熟的场所是？', options: ['胸腺', '骨髓', '脾', '淋巴结'], answer: '胸腺', explanation: 'T淋巴细胞起源于骨髓造血干细胞，但需迁移到胸腺中成熟，因此叫T细胞（T来自Thymus胸腺）。B细胞才在骨髓成熟。记住「T在胸、B在骨」即可避免混淆。' },
      { type: 'choice', question: '下列物质中，属于免疫活性物质的是？', options: ['抗体', '吞噬细胞', 'T细胞', '骨髓'], answer: '抗体', explanation: '免疫活性物质是由细胞产生的发挥免疫作用的物质，包括抗体、细胞因子、溶菌酶等。吞噬细胞和T细胞属于免疫细胞，骨髓属于免疫器官，均不是免疫活性物质。' },
      { type: 'choice', question: '免疫系统的免疫监视功能低下时，机体容易发生？', options: ['肿瘤', '过敏', '自身免疫病', '感染'], answer: '肿瘤', explanation: '免疫监视负责识别和清除体内突变的细胞，功能低下时突变细胞易逃避免疫清除而增殖成肿瘤。过敏对应防御过强，自身免疫病对应自稳过强，感染常对应防御过弱。' },
      { type: 'fill', question: '免疫细胞中，B淋巴细胞在______中成熟。', answer: '骨髓', explanation: 'B淋巴细胞在骨髓中成熟，与T细胞在胸腺成熟不同。二者都源自骨髓造血干细胞，区别仅在于成熟场所，B对应Bone marrow即骨髓。' },
      { type: 'fill', question: '免疫系统三大功能中，负责清除突变细胞、防止肿瘤发生的是______。', answer: '免疫监视', explanation: '免疫监视功能持续监控体内细胞，识别并清除发生突变的癌细胞等异常细胞；该功能低下时突变细胞容易增殖，导致肿瘤发生。这是三大功能之一。' }
    ]
  });
})();
