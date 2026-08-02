/* 生物学 · 高三复习 · 实验与探究 · 第3章 · 课时：显微观察·分裂与质壁分离 */
(function () {
  var v = gzGetVolume('biology', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u8',
    name: '第3节 显微观察·分裂与质壁分离',
    chapter: '实验与探究 · 第3章 显微镜观察类实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '第3节 显微观察·分裂与质壁分离' },
      { type: 'paragraph', text: '本节包含四个重要显微实验：植物细胞质壁分离与复原、根尖有丝分裂观察、减数分裂观察、低温诱导染色体数目加倍。它们都依赖显微镜，但材料、试剂和关键操作各不相同。' },
      { type: 'keypoint', text: '质壁分离的条件：必须是活的、成熟的（有中央大液泡）的植物细胞；前提是被外界溶液浓度大于细胞液浓度，细胞失水导致原生质层收缩。' },
      { type: 'list', items: ['制片：撕取洋葱鳞片叶外表皮，制成临时装片。', '滴加 0.3 g/mL 蔗糖溶液：一侧滴、另一侧吸水纸吸引。', '观察质壁分离：液泡变小、原生质层与细胞壁分离。', '滴加清水：重复引流，观察质壁分离复原。'] },
      { type: 'svg', caption: '质壁分离与复原流程', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="19" font-weight="bold" fill="#3f7d1e">质壁分离与复原流程</text><rect x="14" y="150" width="115" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="71" y="183" text-anchor="middle" font-size="13" fill="#2e3a22">制片观察</text><polygon points="133,170 133,186 149,178" fill="#3f7d1e"/><rect x="151" y="150" width="115" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="208" y="178" text-anchor="middle" font-size="12" fill="#2e3a22">滴0.3g/mL蔗糖</text><polygon points="270,170 270,186 286,178" fill="#3f7d1e"/><rect x="288" y="150" width="115" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="345" y="183" text-anchor="middle" font-size="13" fill="#2e3a22">质壁分离</text><polygon points="407,170 407,186 423,178" fill="#3f7d1e"/><rect x="425" y="150" width="115" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="482" y="178" text-anchor="middle" font-size="12" fill="#2e3a22">滴清水</text><polygon points="544,170 544,186 560,178" fill="#3f7d1e"/><rect x="562" y="150" width="100" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="612" y="183" text-anchor="middle" font-size="13" fill="#2e3a22">复原</text><text x="340" y="250" text-anchor="middle" font-size="13" fill="#5aa832">蔗糖浓度过高会毒害细胞，清水使其复原</text></svg>' },
      { type: 'tip', text: '0.3 g/mL 蔗糖溶液是经典浓度：浓度过高会使细胞过度失水死亡，无法复原；浓度过低则不出现明显质壁分离。复原步骤一定要用清清水，不能用蔗糖溶液。' },
      { type: 'paragraph', text: '当外界为 0.3 g/mL 蔗糖溶液时，细胞液浓度低于外界，细胞失水发生质壁分离；再滴加清水，外界浓度低于细胞液，细胞吸水使原生质层恢复原状，即质壁分离复原。' },
      { type: 'table', caption: '四个显微实验的材料与关键操作', headers: ['实验', '材料', '关键试剂', '现象'], rows: [['质壁分离', '洋葱鳞片叶外表皮', '0.3 g/mL 蔗糖、清水', '分离后复原'], ['根尖有丝分裂', '洋葱根尖分生区', '盐酸加酒精、龙胆紫', '染色体被染色'], ['减数分裂', '蝗虫精巢', '固定液、染色剂', '染色体行为变化'], ['低温诱导', '洋葱根尖', '卡诺氏液、95%酒精', '染色体数目加倍']] },
      { type: 'warn', text: '易错：质壁分离用蔗糖溶液而不是氯化钠；复原用清水而不是蔗糖。氯化钠会使细胞失水更严重且可能造成伤害，清水才能使细胞吸水复原。' },
      { type: 'example', text: '例题：能否用较高浓度的葡萄糖溶液代替蔗糖观察质壁分离？解析：可以，只要外界溶液浓度大于细胞液且物质不被过快吸收即可，但若葡萄糖被细胞吸收，可能发生自动复原，需控制浓度与观察时机。' },
      { type: 'keypoint', text: '根尖有丝分裂装片制作流程为：解离、漂洗、染色、制片。四步顺序不能颠倒，尤其解离后必须漂洗再染色。' },
      { type: 'list', items: ['解离：用质量分数 15% 盐酸加体积分数 95% 酒精混合液，使组织酥软并杀死细胞。', '漂洗：用清水洗去盐酸，防止盐酸影响后续染色。', '染色：用龙胆紫溶液或醋酸洋红液使染色体着色。', '制片：轻轻压片使细胞分散成单层，便于观察。'] },
      { type: 'svg', caption: '根尖有丝分裂装片制作流程', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="19" font-weight="bold" fill="#3f7d1e">根尖有丝分裂装片制作</text><rect x="40" y="150" width="130" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="105" y="183" text-anchor="middle" font-size="13" fill="#2e3a22">解离</text><polygon points="174,170 174,186 190,178" fill="#3f7d1e"/><rect x="192" y="150" width="130" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="257" y="183" text-anchor="middle" font-size="13" fill="#2e3a22">漂洗</text><polygon points="326,170 326,186 342,178" fill="#3f7d1e"/><rect x="344" y="150" width="130" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="409" y="183" text-anchor="middle" font-size="13" fill="#2e3a22">染色</text><polygon points="478,170 478,186 494,178" fill="#3f7d1e"/><rect x="496" y="150" width="130" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="561" y="183" text-anchor="middle" font-size="13" fill="#2e3a22">制片</text><text x="340" y="250" text-anchor="middle" font-size="13" fill="#5aa832">解离用盐酸加酒精，漂洗后再染色，观察分生区</text></svg>' },
      { type: 'tip', text: '解离后必须用清水漂洗，否则残留盐酸会干扰碱性染料着色；观察时应寻找分生区细胞，其特点为正方形、排列紧密、有的正在分裂。' },
      { type: 'paragraph', text: '低温诱导染色体数目加倍：用卡诺氏液固定细胞形态，再用体积分数 95% 酒精冲洗，用改良苯酚品红染液染色后制片。原理是低温抑制纺锤体形成，使染色体不能移向两极。' },
      { type: 'warn', text: '易错：低温诱导与秋水仙素作用原理相同，都是抑制纺锤体形成，不是促进；观察对象仍是根尖分生区细胞，不是任意部位，且需先固定后染色。' },
      { type: 'example', text: '例题：低温诱导染色体数目加倍的实验中，卡诺氏液的作用是什么？解析：卡诺氏液用于固定细胞形态，使分裂相细胞停留在特定时期，便于后续染色与观察，固定后需用体积分数 95% 酒精冲洗。' },
      { type: 'keypoint', text: '减数分裂观察常用蝗虫精巢，因为精母细胞连续进行减数分裂，容易找到处于不同分裂时期的细胞；雌性动物卵巢中卵原细胞分裂不连续，材料较难获取。' },
      { type: 'svg', caption: '四大显微实验要点对照', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="19" font-weight="bold" fill="#3f7d1e">四大显微实验要点</text><rect x="30" y="70" width="300" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="100" text-anchor="middle" font-size="13" fill="#2e3a22">质壁分离：0.3g/mL蔗糖，活细胞</text><text x="180" y="124" text-anchor="middle" font-size="12" fill="#5aa832">外界浓度大于细胞液</text><rect x="350" y="70" width="300" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="100" text-anchor="middle" font-size="13" fill="#2e3a22">有丝分裂：解离漂洗染色制片</text><text x="500" y="124" text-anchor="middle" font-size="12" fill="#5aa832">碱性染料染染色体</text><rect x="30" y="160" width="300" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="190" text-anchor="middle" font-size="13" fill="#2e3a22">减数分裂：蝗虫精巢观察</text><text x="180" y="214" text-anchor="middle" font-size="12" fill="#5aa832">精母细胞连续分裂</text><rect x="350" y="160" width="300" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="190" text-anchor="middle" font-size="13" fill="#2e3a22">低温诱导：卡诺氏液固定</text><text x="500" y="214" text-anchor="middle" font-size="12" fill="#5aa832">抑制纺锤体形成</text><polygon points="180,250 180,266 198,258" fill="#3f7d1e"/><text x="220" y="262" font-size="13" fill="#2e3a22">均为活体或固定后的显微观察</text></svg>' },
      { type: 'tip', text: '观察染色体都要用碱性染料，如龙胆紫溶液、醋酸洋红液、改良苯酚品红染液，它们能使染色体着色加深，便于在显微镜下区分各个时期。' }
    ],
    exercises: [
      { type: 'choice', question: '观察植物细胞质壁分离常用外界溶液是', options: ['A. 0.3 g/mL 蔗糖溶液', 'B. 0.9% NaCl 溶液', 'C. 清水', 'D. 体积分数 50% 酒精'], answer: 'A. 0.3 g/mL 蔗糖溶液', explanation: '经典质壁分离实验用 0.3 g/mL 蔗糖溶液，其浓度大于细胞液使细胞失水；0.9% NaCl 为生理盐水，清水使细胞吸水，50% 酒精用于洗浮色，均不能引发质壁分离。' },
      { type: 'choice', question: '制作洋葱根尖有丝分裂临时装片的正确顺序是', options: ['A. 解离-染色-漂洗-制片', 'B. 解离-漂洗-染色-制片', 'C. 漂洗-解离-染色-制片', 'D. 染色-解离-漂洗-制片'], answer: 'B. 解离-漂洗-染色-制片', explanation: '正确顺序为解离使组织酥软杀死细胞，漂洗洗去盐酸防止影响染色，再用碱性染料染色使染色体着色，最后制片压片；顺序颠倒会导致染色失败。' },
      { type: 'choice', question: '低温诱导染色体数目加倍的原理是', options: ['A. 促进纺锤体形成', 'B. 抑制纺锤体形成', 'C. 促进 DNA 复制', 'D. 抑制 DNA 复制'], answer: 'B. 抑制纺锤体形成', explanation: '低温与秋水仙素原理相同，都是抑制纺锤体形成，使复制后的染色体不能移向细胞两极，从而导致细胞内染色体数目加倍。' },
      { type: 'fill', question: '观察根尖细胞有丝分裂时，使染色体着色的碱性染料可用龙胆紫溶液或____（举一例）。', answer: '醋酸洋红', explanation: '染色体易被碱性染料着色，常用龙胆紫溶液或醋酸洋红液；低温诱导实验还可用改良苯酚品红染液，它们都能使染色体显色便于观察。' },
      { type: 'fill', question: '根尖解离后要用清水漂洗，目的是洗去多余的盐酸，防止盐酸影响后续的____步骤。', answer: '染色', explanation: '解离用的盐酸若残留会破坏碱性染料与染色体的结合，使染色变浅或失败，因此必须用清水充分漂洗后再进行染色步骤。' }
    ]
  });
})();
