/* 生物学 · 高三复习 · 分子与细胞 · 第5章 · 课时：第4节 光合作用与能量转化（二） */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u17',
    name: '第4节 光合作用与能量转化（二）',
    chapter: '分子与细胞 · 第5章 细胞的能量供应和利用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、光合作用的探究历程与过程' },
      { type: 'paragraph', text: '科学家历经两百多年逐步揭示光合作用本质：普利斯特利证明植物能更新空气；萨克斯证明光合产生淀粉；鲁宾和卡门用同位素标记法证明光合作用释放的O₂来自水；卡尔文探明CO₂中的碳转移途径（卡尔文循环）。' },
      { type: 'table', headers: ['项目', '光反应', '暗反应'], rows: [
        ['场所', '类囊体薄膜', '叶绿体基质'],
        ['条件', '光、色素、酶', '不需光、需多种酶'],
        ['原料', 'H₂O、ADP、Pi', 'CO₂、ATP、[H]'],
        ['产物', 'O₂、ATP、[H]', '（CH₂O）、ADP、Pi'],
        ['能量变化', '光能→活跃化学能', '活跃化学能→稳定化学能']
      ] },
      { type: 'list', items: [
        '光反应：色素吸收光能使水光解，产生O₂和[H]，同时合成ATP。',
        '暗反应：CO₂与C₅结合生成C₃，C₃在ATP和[H]作用下被还原为糖类等有机物。',
        '光反应为暗反应提供ATP和[H]，暗反应为光反应提供ADP和Pi，二者相互依存。'
      ] },
      { type: 'keypoint', text: '光合作用总反应：6CO₂ + 12H₂O →（光照、叶绿体） C₆H₁₂O₆ + 6O₂ + 6H₂O。物质可逆、能量不可逆，光合把光能转化为有机物中的稳定化学能。' },
      { type: 'warn', text: '易错：光合作用释放的O₂全部来自水，不是来自CO₂（鲁宾卡门用¹⁸O标记验证）。暗反应虽不直接需光，但离不开光反应提供的ATP和[H]，所以整体上光合作用需要光。' },
      { type: 'tip', text: '高考高频考点：突然停止光照，ATP和[H]减少，C₃积累、C₅减少；突然降低CO₂浓度，C₃减少、C₅积累。抓住“来源与去路”即可快速判断物质含量变化。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 400" width="680" height="400"><rect x="0" y="0" width="680" height="400" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图1 光反应与暗反应联系</text><rect x="40" y="90" width="280" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="120" text-anchor="middle" font-size="16" fill="#3f7d1e">类囊体薄膜（光反应）</text><text x="180" y="155" font-size="14" fill="#2e3a22">H₂O → O₂ + [H]</text><text x="180" y="185" font-size="14" fill="#2e3a22">ADP + Pi → ATP</text><rect x="360" y="90" width="280" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="120" text-anchor="middle" font-size="16" fill="#3f7d1e">叶绿体基质（暗反应）</text><text x="500" y="155" font-size="13" fill="#2e3a22">CO₂ + C₅ → C₃</text><text x="500" y="185" font-size="13" fill="#2e3a22">C₃ →（ATP、[H]）糖类</text><polygon points="320,150 360,150 340,130" fill="#3f7d1e"/><polygon points="360,200 320,200 340,220" fill="#3f7d1e"/><text x="340" y="300" text-anchor="middle" font-size="14" fill="#2e3a22">光反应为暗反应提供ATP和[H]，暗反应为其提供ADP和Pi</text></svg>', caption: '光反应与暗反应在场所、物质与能量上紧密联系。' },
      { type: 'heading', text: '二、光合作用的影响因素' },
      { type: 'paragraph', text: '影响光合速率的环境因素主要有光照强度、CO₂浓度和温度。光照强度通过影响光反应起作用，CO₂浓度影响暗反应，温度通过影响酶活性影响全过程。农业生产中常通过合理密植、增施有机肥、补充光照等措施提高产量。' },
      { type: 'table', headers: ['影响因素', '变化', '对光合速率影响', '生产应用'], rows: [
        ['光照强度', '增强', '先增后稳（达光饱和点）', '间作套种、补充光照'],
        ['CO₂浓度', '提高', '先增后稳（达CO₂饱和点）', '增施有机肥'],
        ['温度', '过高或过低', '降低（酶活性受影响）', '温室调控温度']
      ] },
      { type: 'keypoint', text: '化能合成作用：少数生物（如硝化细菌）利用体外无机物氧化释放的化学能，把CO₂和水合成有机物。硝化细菌将氨氧化为亚硝酸、硝酸并释放能量，用于合成糖类。' },
      { type: 'warn', text: '易错：化能合成作用与光合作用本质相同（都是把无机物合成有机物、属自养生物），区别是能量来源不同——前者来自无机物氧化放能，后者来自光能。硝化细菌虽无叶绿体，却是自养生物。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图2 光照强度对光合速率的影响</text><line x1="80" y1="300" x2="620" y2="300" stroke="#3f7d1e" stroke-width="2"/><line x1="80" y1="80" x2="80" y2="300" stroke="#3f7d1e" stroke-width="2"/><polyline points="80,300 250,150 450,120 600,110" fill="none" stroke="#5aa832" stroke-width="3"/><text x="250" y="170" font-size="13" fill="#2e3a22">光补偿点</text><text x="450" y="100" font-size="13" fill="#2e3a22">光饱和点</text><text x="340" y="335" text-anchor="middle" font-size="14" fill="#2e3a22">超过饱和点后光合速率不再随光照增强而增加</text><polygon points="600,300 620,300 610,280" fill="#3f7d1e"/></svg>', caption: '光照强度存在补偿点与饱和点。' },
      { type: 'paragraph', text: '总反应式中生成6分子O₂对应12分子H₂O被分解，这其中体现了元素守恒。光合色素吸收的光能最终贮存在糖类等有机物中，供自身及整个生态系统利用，因此光合作用是一切生命乃至生态系统的能量源头。' },
      { type: 'example', text: '例题：在透光密闭小室中培养绿色植物，测定CO₂吸收速率。若突然降低光照强度，短时间内C₃和C₅的含量变化分别是（  ）\n思路：光照减弱使ATP和[H]减少，C₃还原变慢而CO₂固定仍进行，故C₃积累、C₅减少。答案要点：C₃增加、C₅减少。' },
      { type: 'list', items: [
        '延长光照时间或提高光照强度，可增加光反应产物供应。',
        '增施有机肥或通风补充CO₂，提高暗反应原料浓度。',
        '夜间适当降温，降低呼吸消耗，有利于有机物积累。'
      ] },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图3 硝化细菌的化能合成作用</text><rect x="60" y="120" width="180" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="150" y="160" text-anchor="middle" font-size="14" fill="#2e3a22">氨 → 亚硝酸</text><text x="150" y="190" text-anchor="middle" font-size="14" fill="#2e3a22">→ 硝酸（放能）</text><rect x="420" y="120" width="200" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="520" y="165" text-anchor="middle" font-size="14" fill="#2e3a22">CO₂ + H₂O → 糖类</text><polygon points="240,165 420,165 390,145" fill="#3f7d1e"/><text x="340" y="300" text-anchor="middle" font-size="14" fill="#2e3a22">利用无机物氧化释放的化学能合成有机物</text></svg>', caption: '硝化细菌通过化能合成作用制造有机物。' },
      { type: 'tip', text: '解题技巧：判断物质变化题先锁定“该物质来源是否减少、去路是否增加”。如光照停止则[H]、ATP来源断，C₃去路受阻而来源不断，必积累；C₅来源断而去路不断，必减少。' }
    ],
    exercises: [
      { type: 'choice', question: '光合作用中光反应的场所是（  ）', options: ['叶绿体基质', '类囊体薄膜', '线粒体内膜', '细胞质基质'], answer: '类囊体薄膜', explanation: '光反应需要色素吸收光能，色素分布在类囊体薄膜上，因此光反应在类囊体薄膜上进行，产生O₂、ATP和[H]；暗反应则在叶绿体基质中进行。本题选B。' },
      { type: 'choice', question: '鲁宾和卡门用同位素标记法证明光合作用释放的氧气来自（  ）', options: ['CO₂', '葡萄糖', '水', '叶绿素'], answer: '水', explanation: '鲁宾和卡门用¹⁸O分别标记H₂O和CO₂，发现只有标记H₂O时释放的O₂含¹⁸O，证明光合作用释放的O₂全部来自水，而不是来自CO₂。本题选C。' },
      { type: 'choice', question: '下列生物中，能通过化能合成作用制造有机物的是（  ）', options: ['酵母菌', '硝化细菌', '乳酸菌', '草履虫'], answer: '硝化细菌', explanation: '硝化细菌能将氨氧化为亚硝酸和硝酸，利用这一过程释放的化学能把CO₂和水合成有机物，属于化能自养生物；其余选项均为异养生物。本题选B。' },
      { type: 'fill', question: '光合作用释放的O₂来自反应物中的______。', answer: '水', explanation: '同位素标记实验表明，光合光反应中水分子被光解，产生O₂、[H]和ATP，所以释放的氧气全部来源于水，而不是来源于CO₂。这是光合作用过程的重要结论。' },
      { type: 'fill', question: '光反应为暗反应提供的物质是ATP和______。', answer: '[H]', explanation: '光反应阶段水光解产生[H]（还原型辅酶），同时合成ATP；二者被运往叶绿体基质，用于暗反应中C₃的还原，生成糖类等有机物。暗反应则为光反应提供ADP和Pi。' }
    ]
  });
})();
