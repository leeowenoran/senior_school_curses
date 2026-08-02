/* 生物学 · 选择性必修3 生物技术与工程 · 第2章 细胞工程 · 课时：第2节 动物细胞工程 */
(function () {
  var v = gzGetVolume('biology', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u6',
    name: '第2节 动物细胞工程',
    chapter: '选择性必修3 生物技术与工程 · 第2章 细胞工程',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、动物细胞培养' },
      { type: 'paragraph', text: '动物细胞培养是把来自动物体的组织、细胞放在适宜的培养基中，让它们生长和增殖的技术，是其他动物细胞工程（如单克隆抗体、核移植）的基础。' },
      { type: 'list', items: [
        '取组织：从动物体内取出小块组织。',
        '剪碎：把组织剪切成小块，增大与酶的接触面积。',
        '分散：用胰蛋白酶或胶原蛋白酶把细胞间的蛋白质分解，使组织分散成单个细胞。',
        '制成细胞悬液：把单个细胞悬浮在培养液中。',
        '原代培养：细胞首次在培养瓶壁贴壁生长。',
        '传代培养：原代培养长满后，分瓶继续培养。'
      ] },
      { type: 'keypoint', text: '<strong>液体培养基的成分</strong>：动物细胞培养用的是液体培养基，含有葡萄糖、氨基酸、无机盐、维生素，还必须加入动物血清或血浆，血清能提供细胞生长所需的未知因子。' },
      { type: 'paragraph', text: '动物细胞培养需要严格的条件：无菌无毒的环境；适宜的温度（36.5℃±0.5）和pH（7.2～7.4）；气体环境为95%空气加5% CO₂，其中CO₂的作用是维持培养液的pH稳定。' },
      { type: 'table', headers: ['培养条件', '具体要求'], rows: [
        ['无菌无毒', '培养液和器械严格灭菌，定期更换培养液'],
        ['温度', '36.5℃ ± 0.5'],
        ['pH', '7.2 ～ 7.4'],
        ['气体环境', '95% 空气 + 5% CO₂，CO₂维持pH'],
        ['营养', '葡萄糖、氨基酸、无机盐、维生素、血清']
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="380" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">图（a）动物细胞培养流程</text><rect x="140" y="50" width="200" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="240" y="75" text-anchor="middle" font-size="15" fill="#2e3a22">取动物组织</text><rect x="140" y="103" width="200" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="240" y="128" text-anchor="middle" font-size="15" fill="#2e3a22">剪碎</text><rect x="140" y="156" width="200" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="240" y="181" text-anchor="middle" font-size="15" fill="#2e3a22">胰蛋白酶/胶原蛋白酶分散</text><rect x="140" y="209" width="200" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="240" y="234" text-anchor="middle" font-size="15" fill="#2e3a22">细胞悬液</text><rect x="140" y="262" width="200" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="240" y="287" text-anchor="middle" font-size="15" fill="#2e3a22">原代培养</text><rect x="140" y="315" width="200" height="40" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="240" y="340" text-anchor="middle" font-size="15" fill="#2e3a22">传代培养</text><line x1="240" y1="90" x2="240" y2="101" stroke="#3f7d1e" stroke-width="3"/><polygon points="240,105 233,93 247,93" fill="#3f7d1e"/><line x1="240" y1="143" x2="240" y2="154" stroke="#3f7d1e" stroke-width="3"/><polygon points="240,158 233,146 247,146" fill="#3f7d1e"/><line x1="240" y1="196" x2="240" y2="207" stroke="#3f7d1e" stroke-width="3"/><polygon points="240,211 233,199 247,199" fill="#3f7d1e"/><line x1="240" y1="249" x2="240" y2="260" stroke="#3f7d1e" stroke-width="3"/><polygon points="240,264 233,252 247,252" fill="#3f7d1e"/><line x1="240" y1="302" x2="240" y2="313" stroke="#3f7d1e" stroke-width="3"/><polygon points="240,317 233,305 247,305" fill="#3f7d1e"/></svg>', caption: '动物细胞培养：组织经酶处理分散成单个细胞，再进行原代和传代培养。' },
      { type: 'heading', text: '二、动物细胞融合' },
      { type: 'paragraph', text: '动物细胞融合是指两个或多个动物细胞结合成一个细胞的过程。融合后的细胞含有原来两个细胞的遗传物质，常用于制备杂交瘤细胞。' },
      { type: 'keypoint', text: '<strong>诱导融合的方法</strong>：常用PEG（聚乙二醇）、灭活的病毒（如仙台病毒，已丧失感染性但保留融合活性）、以及电刺激。其中灭活病毒诱导是动物细胞融合特有的方法，植物细胞不用。' },
      { type: 'heading', text: '三、单克隆抗体' },
      { type: 'paragraph', text: '单克隆抗体就像一支精准的导弹，能专门识别某一种抗原。制备时把能产生特异抗体但不能无限增殖的B淋巴细胞，与能无限增殖但不产抗体的骨髓瘤细胞融合，得到兼具两者优点的杂交瘤细胞。' },
      { type: 'list', items: [
        '细胞融合：B淋巴细胞 + 骨髓瘤细胞，诱导融合。',
        '筛选：从混合细胞中筛选出杂交瘤细胞。',
        '克隆化培养与抗体检测：对杂交瘤细胞克隆化，并检测其产生的抗体。',
        '获取阳性细胞：得到分泌专一抗体的阳性杂交瘤细胞。',
        '生产：体外培养或注入小鼠腹腔，提取单克隆抗体。'
      ] },
      { type: 'keypoint', text: '<strong>单克隆抗体的优点</strong>：特异性强、灵敏度高、可以大量制备，因此在疾病诊断、治疗和药物载体等方面应用广泛。' },
      { type: 'example', text: '<strong>杂交瘤细胞</strong>：B淋巴细胞提供生产某一种特异抗体的能力，骨髓瘤细胞提供在体外无限增殖的能力，两者融合形成的杂交瘤细胞既能无限增殖，又能持续分泌同一种抗体，这就是单克隆抗体的来源。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">图（b）动物细胞融合与单克隆抗体制备</text><rect x="40" y="70" width="150" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="115" y="97" text-anchor="middle" font-size="14" fill="#2e3a22">B淋巴细胞</text><rect x="40" y="180" width="150" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="115" y="207" text-anchor="middle" font-size="14" fill="#2e3a22">骨髓瘤细胞</text><rect x="250" y="125" width="130" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="315" y="152" text-anchor="middle" font-size="14" fill="#2e3a22">细胞融合</text><rect x="410" y="125" width="130" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="475" y="152" text-anchor="middle" font-size="14" fill="#2e3a22">筛选杂交瘤</text><rect x="560" y="60" width="110" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="615" y="87" text-anchor="middle" font-size="14" fill="#2e3a22">克隆化</text><rect x="560" y="190" width="110" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="615" y="217" text-anchor="middle" font-size="14" fill="#2e3a22">单克隆抗体</text><line x1="190" y1="92" x2="246" y2="135" stroke="#3f7d1e" stroke-width="3"/><polygon points="250,139 238,133 244,147" fill="#3f7d1e"/><line x1="190" y1="202" x2="246" y2="147" stroke="#3f7d1e" stroke-width="3"/><polygon points="250,143 238,137 244,151" fill="#3f7d1e"/><line x1="380" y1="147" x2="406" y2="147" stroke="#3f7d1e" stroke-width="3"/><polygon points="410,147 396,139 396,155" fill="#3f7d1e"/><line x1="540" y1="147" x2="556" y2="92" stroke="#3f7d1e" stroke-width="3"/><polygon points="560,88 546,90 552,102" fill="#3f7d1e"/><line x1="615" y1="104" x2="615" y2="186" stroke="#3f7d1e" stroke-width="3"/><polygon points="615,190 608,178 622,178" fill="#3f7d1e"/><text x="340" y="295" text-anchor="middle" font-size="14" fill="#2e3a22">杂交瘤细胞既能无限增殖，又能分泌专一抗体</text></svg>', caption: '动物细胞融合制备单克隆抗体：B淋巴细胞与骨髓瘤细胞融合，筛选并克隆化得到杂交瘤细胞。' },
      { type: 'heading', text: '四、动物体细胞核移植' },
      { type: 'paragraph', text: '体细胞核移植是把已经分化的动物体细胞的细胞核，移植到去除了细胞核的卵母细胞中，重组后发育成新个体。最著名的例子就是克隆羊多莉。' },
      { type: 'example', text: '<strong>克隆羊多莉</strong>：科学家取一只白面绵羊的乳腺细胞（体细胞）作为核供体，把它的细胞核移植到另一只羊的去核卵母细胞中，重组胚胎移植到代孕母羊体内，生下的多莉与提供细胞核的母羊几乎一模一样，证明分化的体细胞仍可用来克隆动物。' },
      { type: 'warn', text: '<strong>重要结论</strong>：克隆羊多莉的成功说明，已经分化的动物体细胞的细胞核仍然具有全能性（能发育成完整个体），但动物体细胞的全能性受到限制，只有细胞核在卵母细胞质的支持下才能完成。' },
      { type: 'tip', text: '记忆对比：植物细胞工程靠组织培养和体细胞杂交；动物细胞工程靠细胞培养、细胞融合（灭活病毒）和体细胞核移植。克隆羊多莉的遗传物质主要来自供体细胞核。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="20" fill="#3f7d1e" font-weight="bold">图（c）体细胞核移植（克隆羊多莉）</text><rect x="30" y="70" width="150" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="105" y="97" text-anchor="middle" font-size="14" fill="#2e3a22">体细胞（乳腺细胞）</text><rect x="30" y="180" width="150" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="105" y="207" text-anchor="middle" font-size="14" fill="#2e3a22">去核卵母细胞</text><rect x="270" y="140" width="140" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="167" text-anchor="middle" font-size="14" fill="#2e3a22">重组细胞</text><rect x="470" y="60" width="160" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="87" text-anchor="middle" font-size="14" fill="#2e3a22">早期胚胎</text><rect x="470" y="140" width="160" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="167" text-anchor="middle" font-size="14" fill="#2e3a22">代孕母体</text><rect x="470" y="220" width="160" height="44" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="247" text-anchor="middle" font-size="14" fill="#2e3a22">克隆个体（多莉）</text><line x1="180" y1="92" x2="266" y2="150" stroke="#3f7d1e" stroke-width="3"/><polygon points="270,154 258,148 264,162" fill="#3f7d1e"/><line x1="180" y1="202" x2="266" y2="162" stroke="#3f7d1e" stroke-width="3"/><polygon points="270,158 258,152 264,166" fill="#3f7d1e"/><line x1="410" y1="162" x2="466" y2="92" stroke="#3f7d1e" stroke-width="3"/><polygon points="470,88 456,90 462,102" fill="#3f7d1e"/><line x1="550" y1="104" x2="550" y2="138" stroke="#3f7d1e" stroke-width="3"/><polygon points="550,142 543,130 557,130" fill="#3f7d1e"/><line x1="550" y1="184" x2="550" y2="218" stroke="#3f7d1e" stroke-width="3"/><polygon points="550,222 543,210 557,210" fill="#3f7d1e"/><text x="340" y="298" text-anchor="middle" font-size="14" fill="#2e3a22">细胞核来自体细胞，说明分化体细胞的核仍具全能性</text></svg>', caption: '体细胞核移植：体细胞细胞核移入去核卵母细胞，重组后发育为克隆个体（如克隆羊多莉）。' }
    ],
    exercises: [
      { type: 'choice', question: '动物细胞培养中，把动物组织分散成单个细胞常用的酶是哪一项？', options: ['胰蛋白酶或胶原蛋白酶', '纤维素酶和果胶酶', '淀粉酶', '果胶酶'], answer: '胰蛋白酶或胶原蛋白酶', explanation: '动物细胞之间通过蛋白质（如胶原蛋白）相连，需要用胰蛋白酶或胶原蛋白酶分解这些蛋白质，才能把组织分散成单个细胞，便于培养；纤维素酶和果胶酶用于去除植物细胞壁。' },
      { type: 'choice', question: '动物细胞融合特有的诱导方法是下列哪一项？', options: ['灭活的病毒（如仙台病毒）', 'PEG（聚乙二醇）', '电刺激', '离心法'], answer: '灭活的病毒（如仙台病毒）', explanation: 'PEG、电刺激在植物和动物细胞融合中都能用，而灭活的病毒（如仙台病毒，已丧失感染性但保留诱导融合的能力）是动物细胞融合常用的特有方法，动物细胞有细胞膜无细胞壁，病毒可介导膜融合。' },
      { type: 'choice', question: '单克隆抗体与常规抗体相比，突出的优点是哪一项？', options: ['特异性强、灵敏度高、可大量制备', '制备简单且成本很低', '只能在动物体内制备', '容易引起严重排斥反应'], answer: '特异性强、灵敏度高、可大量制备', explanation: '单克隆抗体由杂交瘤细胞产生，针对单一抗原决定簇，因此特异性强、灵敏度高，并且杂交瘤细胞能无限增殖，可大规模制备，广泛应用于诊断、治疗和药物运载。' },
      { type: 'fill', question: '制备单克隆抗体时，与骨髓瘤细胞融合的淋巴细胞是________________细胞，它能产生特异抗体但不能无限增殖。', answer: 'B淋巴', explanation: 'B淋巴细胞受到抗原刺激后能分泌特异性抗体，但在体外不能无限增殖；骨髓瘤细胞能在体外无限增殖却不分泌抗体。两者融合形成的杂交瘤细胞兼具两种优点，可大量生产单克隆抗体。' },
      { type: 'fill', question: '克隆羊多莉的细胞核来自一只白面绵羊的________________细胞（填供体细胞的类型）。', answer: '乳腺细胞', explanation: '克隆羊多莉的核供体是乳腺细胞，属于已分化的体细胞。将乳腺细胞的细胞核移植到去核卵母细胞中并克隆出多莉，这说明已分化的动物体细胞的细胞核仍然具有全能性。' }
    ]
  });
})();
