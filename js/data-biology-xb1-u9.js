/* 生物学 · 选择性必修1 稳态与调节 · 第4章 · 课时：第1节 免疫系统的组成和功能 */
(function () {
  var v = gzGetVolume('biology', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u9',
    name: '第1节 免疫系统的组成和功能',
    chapter: '选择性必修1 稳态与调节 · 第4章 免疫调节',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、免疫系统由哪三个部分构成' },
      { type: 'paragraph', text: '我们的身体每天都会面对许多病原体，比如细菌、病毒。为了抵御它们的入侵，人体内有一套专门的防御系统，这就是<strong>免疫系统</strong>。免疫系统就像一支训练有素的军队，由多个部分分工合作，共同保护我们的健康。' },
      { type: 'list', items: ['免疫器官：免疫细胞生成、成熟或集中分布的场所', '免疫细胞：发挥免疫作用的细胞，包括吞噬细胞和淋巴细胞等', '免疫活性物质：由免疫细胞或其他细胞产生的、发挥免疫作用的物质'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">免疫系统的三大组成部分</text><rect x="40" y="70" width="180" height="130" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="130" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">免疫器官</text><text x="130" y="138" font-size="12" fill="#2e3a22" text-anchor="middle">骨髓 胸腺 脾</text><text x="130" y="162" font-size="12" fill="#2e3a22" text-anchor="middle">淋巴结 扁桃体</text><polygon points="221,135 258,123 258,147" fill="#3f7d1e"/><rect x="270" y="70" width="180" height="130" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="360" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">免疫细胞</text><text x="360" y="138" font-size="12" fill="#2e3a22" text-anchor="middle">吞噬细胞</text><text x="360" y="162" font-size="12" fill="#2e3a22" text-anchor="middle">T细胞 B细胞</text><polygon points="451,135 488,123 488,147" fill="#3f7d1e"/><rect x="500" y="70" width="180" height="130" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="590" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">免疫活性物质</text><text x="590" y="138" font-size="12" fill="#2e3a22" text-anchor="middle">抗体 淋巴因子</text><text x="590" y="162" font-size="12" fill="#2e3a22" text-anchor="middle">溶菌酶</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">三者协同，构成完整的免疫系统。</text></svg>', caption: '图1　免疫系统由免疫器官、免疫细胞和免疫活性物质三部分组成。' },
      { type: 'keypoint', label: '重点·免疫系统的组成', text: '<strong>免疫系统的组成可以概括为：</strong>免疫器官是「军营」，免疫细胞是「士兵」，免疫活性物质是「武器」。三者缺一不可，共同完成免疫功能。' },
      { type: 'heading', text: '二、免疫器官有哪些' },
      { type: 'paragraph', text: '免疫器官是免疫细胞生成、成熟或集中分布的场所。初中我们学过，血液里的血细胞都是在骨里产生的，免疫相关的细胞也和这些器官密不可分。常见的免疫器官包括骨髓、胸腺、脾、淋巴结和扁桃体等。' },
      { type: 'list', items: ['骨髓：造血干细胞诞生的地方，也是B细胞成熟的场所', '胸腺：T细胞成熟和分化的场所', '脾：血液滤过和免疫细胞聚集的部位', '淋巴结：淋巴细胞集中分布，过滤淋巴液', '扁桃体：呼吸道和消化道入口处的淋巴组织'] },
      { type: 'table', headers: ['免疫器官', '主要功能'], rows: [['骨髓', '造血，B细胞成熟'], ['胸腺', 'T细胞成熟'], ['脾', '滤过血液、储存免疫细胞'], ['淋巴结', '过滤淋巴、聚集淋巴细胞'], ['扁桃体', '咽喉部位的第一道防线']] },
      { type: 'warn', label: '易错·骨髓与胸腺', text: '易混淆「骨髓」和「胸腺」：骨髓既是造血场所，也是<strong>B细胞</strong>成熟的场所；而<strong>T细胞</strong>是在胸腺里成熟分化的。记住口诀「B在骨髓，T在胸腺」，考试常让判断某个细胞成熟的器官。' },
      { type: 'heading', text: '三、免疫细胞' },
      { type: 'paragraph', text: '免疫细胞是免疫系统的「作战主力」。其中一类叫<strong>吞噬细胞</strong>，能够把病原体直接吞进去消化掉；另一类叫<strong>淋巴细胞</strong>，主要包括T细胞和B细胞，它们能识别特定的「敌人」并展开精准打击。' },
      { type: 'list', items: ['吞噬细胞：非特异性地吞噬和消灭多种病原体', 'T细胞：在胸腺成熟，参与细胞免疫并辅助体液免疫', 'B细胞：在骨髓成熟，受刺激后分化为浆细胞分泌抗体'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">免疫细胞的分类</text><rect x="60" y="70" width="200" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="160" y="110" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">吞噬细胞</text><text x="160" y="140" font-size="12" fill="#2e3a22" text-anchor="middle">非特异性吞噬</text><rect x="300" y="70" width="200" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="400" y="110" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">淋巴细胞</text><text x="400" y="140" font-size="12" fill="#2e3a22" text-anchor="middle">特异性免疫主力</text><polygon points="501,130 538,118 538,142" fill="#3f7d1e"/><rect x="540" y="60" width="120" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="600" y="92" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">T细胞</text><rect x="540" y="140" width="120" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="600" y="172" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">B细胞</text><text x="160" y="240" font-size="12" fill="#5aa832" text-anchor="middle">吞噬细胞直接吞掉多种病原体</text><text x="600" y="240" font-size="12" fill="#5aa832" text-anchor="middle">T、B细胞在胸腺、骨髓成熟</text><text x="340" y="310" font-size="13" fill="#2e3a22" text-anchor="middle">淋巴细胞分为T细胞和B细胞，是特异性免疫的核心。</text></svg>', caption: '图2　免疫细胞包括吞噬细胞和淋巴细胞，淋巴细胞又分为T细胞与B细胞。' },
      { type: 'tip', label: '提示·成熟场所', text: '判断T细胞和B细胞的成熟场所：T细胞来自骨髓的造血干细胞，但必须迁移到胸腺才能成熟，所以叫T细胞（T来自胸腺 thymus）；B细胞在骨髓就地成熟，所以叫B细胞（B来自骨髓 bone marrow）。' },
      { type: 'heading', text: '四、免疫活性物质' },
      { type: 'paragraph', text: '<strong>免疫活性物质</strong>是由免疫细胞或其他细胞产生的、能发挥免疫作用的物质。常见的有抗体、淋巴因子和溶菌酶。抗体能专门对付某种抗原；淋巴因子帮助免疫细胞之间传递信号；溶菌酶可以破坏细菌的细胞壁。' },
      { type: 'example', label: '例题·判断免疫活性物质', text: '题目：下列属于免疫活性物质的是？<br>A. 吞噬细胞　B. 抗体　C. T细胞　D. 淋巴结<br>解析：免疫活性物质是发挥免疫作用的物质，包括抗体、淋巴因子、溶菌酶等。吞噬细胞、T细胞属于免疫细胞，淋巴结属于免疫器官，只有抗体是物质，因此选抗体。' },
      { type: 'heading', text: '五、免疫系统的三大功能' },
      { type: 'paragraph', text: '免疫系统不只是「打仗」，它有三重职责，合称<strong>免疫的三大功能</strong>：免疫防御、免疫自稳和免疫监视。这三项功能分别对应抵御外来入侵、清理内部垃圾、监视癌变细胞。' },
      { type: 'table', headers: ['功能', '作用', '异常后果'], rows: [['免疫防御', '抵御病原体的攻击', '过弱易感染，过强易过敏'], ['免疫自稳', '清除衰老或损伤的细胞', '异常可引发自身免疫病'], ['免疫监视', '识别清除突变的癌细胞', '异常易生肿瘤']] },
      { type: 'keypoint', label: '重点·三大功能', text: '<strong>免疫防御是最基本的功能</strong>：它帮我们抵御外来病原体的攻击，是人和动物与生俱来的保护屏障。免疫自稳负责「大扫除」，清除体内衰老、损伤的细胞；免疫监视则像「巡逻兵」，随时发现并清除发生癌变的细胞。' },
      { type: 'warn', label: '易错·三大功能对象', text: '不要把三大功能记混：免疫防御针对「外来的病原体」，免疫自稳针对「自身的衰老损伤细胞」，免疫监视针对「自身突变的癌细胞」。三者对象不同，考题常让区分「该功能异常会导致什么病」。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">免疫系统的三大功能</text><rect x="40" y="70" width="190" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="135" y="108" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">免疫防御</text><text x="135" y="140" font-size="12" fill="#2e3a22" text-anchor="middle">抵御病原体攻击</text><text x="135" y="164" font-size="12" fill="#2e3a22" text-anchor="middle">最基本的功能</text><rect x="245" y="70" width="190" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="108" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">免疫自稳</text><text x="340" y="140" font-size="12" fill="#2e3a22" text-anchor="middle">清除衰老损伤细胞</text><text x="340" y="164" font-size="12" fill="#2e3a22" text-anchor="middle">体内大扫除</text><rect x="450" y="70" width="190" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="545" y="108" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">免疫监视</text><text x="545" y="140" font-size="12" fill="#2e3a22" text-anchor="middle">识别清除癌细胞</text><text x="545" y="164" font-size="12" fill="#2e3a22" text-anchor="middle">抓叛徒</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">防御防外敌，自稳清内乱，监视抓癌变，三者缺一不可。</text></svg>', caption: '图3　免疫系统的三大功能分别是防御、自稳和监视。' },
      { type: 'tip', label: '提示·记忆口诀', text: '记忆小技巧：防御＝防外敌，自稳＝清内乱（打扫卫生），监视＝抓叛徒（癌变细胞）。用生活化的比喻帮助记忆，考试时能快速对应。' }
    ],
    exercises: [
      { type: 'choice', question: '下列不属于免疫系统组成的是？', options: ['免疫器官', '免疫细胞', '免疫活性物质', '神经纤维'], answer: '神经纤维', explanation: '免疫系统由免疫器官、免疫细胞和免疫活性物质三部分组成。免疫器官如骨髓、胸腺，免疫细胞如T细胞、B细胞，免疫活性物质如抗体、溶菌酶。神经纤维属于神经系统的组成部分，不属于免疫系统，因此选神经纤维。' },
      { type: 'choice', question: 'T细胞成熟的场所是？', options: ['骨髓', '胸腺', '脾', '淋巴结'], answer: '胸腺', explanation: 'T细胞来源于骨髓中的造血干细胞，但必须迁移到胸腺中才能发育成熟，因此称为T细胞。骨髓是B细胞成熟的场所，脾和淋巴结是免疫细胞集中分布的部位，但不是T细胞成熟的地方，所以选胸腺。' },
      { type: 'choice', question: '免疫系统最基本的功能是？', options: ['免疫防御', '免疫自稳', '免疫监视', '免疫调节'], answer: '免疫防御', explanation: '免疫防御、免疫自稳、免疫监视是免疫的三大功能。其中免疫防御是抵御外来病原体攻击的功能，是最基本、最古老的一道防线；免疫自稳负责清理衰老损伤细胞，免疫监视负责发现癌细胞。因此最基本的是免疫防御。' },
      { type: 'fill', question: '免疫细胞主要包括吞噬细胞和___（如T细胞、B细胞）。', answer: '淋巴细胞', explanation: '免疫细胞是发挥免疫作用的细胞，主要分为两大类：一类是吞噬细胞，能够非特异性地吞噬多种病原体；另一类是淋巴细胞，包括T细胞和B细胞，它们参与特异性免疫。因此空白处应填淋巴细胞。' },
      { type: 'fill', question: '免疫系统的三大功能包括免疫防御、免疫自稳和___。', answer: '免疫监视', explanation: '免疫系统具有三大功能：免疫防御抵御外来病原体，免疫自稳清除体内衰老或损伤的细胞，免疫监视识别并清除发生癌变的细胞。三者分工不同，共同维持机体健康，所以第三项是免疫监视。' }
    ]
  });
})();
