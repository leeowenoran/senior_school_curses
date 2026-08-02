/* 生物学 · 高三复习 · 实验与探究 · 第5章 · 课时：探究酶的高效性与专一性及影响条件 */
(function () {
  var v = gzGetVolume('biology', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u11',
    name: '第1节 探究酶的高效性与专一性及影响条件',
    chapter: '实验与探究 · 第5章 探究类实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '第1节 探究酶的高效性与专一性及影响条件' },
      { type: 'paragraph', text: '探究类实验围绕酶的三大特性展开：高效性、专一性，以及温度、pH 等条件对酶活性的影响。设计时要牢牢把握自变量、因变量和无关变量的控制。' },
      { type: 'keypoint', text: '高效性：与无机催化剂（如 Fe³⁺）相比，酶降低活化能的作用更显著，催化效率更高。常用 H₂O₂ 分解产生 O₂ 气泡的快慢来比较。' },
      { type: 'list', items: ['取两支试管加入等量 H₂O₂ 溶液。', '一支加少量过氧化氢酶，另一支加等量 Fe³⁺。', '观察气泡产生速度和带火星木条复燃情况。', '酶组气泡更多更快，说明催化效率更高。'] },
      { type: 'table', caption: '三组探究的自变量与因变量', headers: ['探究主题', '自变量', '因变量', '无关变量'], rows: [['高效性', '催化剂种类（酶/Fe³⁺）', '气泡产生速率', 'H₂O₂量、温度、pH'], ['专一性', '底物种类（淀粉/蔗糖）', '是否出现砖红色', '酶量、温度、pH'], ['温度影响', '温度', '反应速率', 'pH、底物量、酶量']] },
      { type: 'svg', caption: '酶与无机催化剂效率对比', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="19" font-weight="bold" fill="#3f7d1e">酶与无机催化剂效率对比</text><rect x="60" y="90" width="260" height="180" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="190" y="120" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e3a22">H2O2酶</text><text x="190" y="160" text-anchor="middle" font-size="12" fill="#2e3a22">等量H2O2加酶</text><text x="190" y="196" text-anchor="middle" font-size="13" fill="#5aa832">大量气泡</text><text x="190" y="230" text-anchor="middle" font-size="12" fill="#2e3a22">催化效率更高</text><rect x="360" y="90" width="260" height="180" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="490" y="120" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e3a22">Fe3+</text><text x="490" y="160" text-anchor="middle" font-size="12" fill="#2e3a22">等量H2O2加Fe3+</text><text x="490" y="196" text-anchor="middle" font-size="13" fill="#5aa832">少量气泡</text><text x="490" y="230" text-anchor="middle" font-size="12" fill="#2e3a22">催化效率较低</text><polygon points="320,180 320,196 338,188" fill="#3f7d1e"/><text x="340" y="300" text-anchor="middle" font-size="13" fill="#2e3a22">酶降低活化能作用更显著</text></svg>' },
      { type: 'tip', text: '自变量是唯一被改变的那个条件，就像唯一被拧动的旋钮；无关变量要相同且适宜，如底物量、温度、pH 都要一致，否则无法判断结果由谁引起。' },
      { type: 'paragraph', text: '专一性指一种酶只能催化一种或一类化学反应。验证淀粉酶的专一性：用淀粉酶分别作用于淀粉和蔗糖，再用斐林试剂检测，淀粉组出现砖红色而蔗糖组无，说明酶具专一性。' },
      { type: 'warn', text: '易错：专一性对照要用同种酶作用于不同底物，或不同酶作用于同种底物；斐林试剂检测需水浴加热，且蔗糖本身不是还原糖，若被水解才会出现砖红色。' },
      { type: 'example', text: '例题：设计实验验证淀粉酶具有专一性，最合理的做法？解析：应设两组，均加等量淀粉酶，分别加淀粉和蔗糖作为底物，保温后用斐林试剂检测，只有淀粉组出现砖红色，从而证明淀粉酶只催化淀粉水解。' },
      { type: 'keypoint', text: '温度影响：自变量是温度，因变量是酶促反应速率（可用产物生成量或气泡数表示），无关变量如 pH、底物浓度、酶量都要保持一致。' },
      { type: 'list', items: ['将底物与酶分别在设定温度预保温。', '混合后在该温度下水浴反应一段时间。', '用碘液检测淀粉剩余量，或测产物量。', '比较不同温度下的反应速率得出最适温度。'] },
      { type: 'svg', caption: '温度与pH对酶活性影响曲线', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="19" font-weight="bold" fill="#3f7d1e">温度与pH对酶活性影响</text><line x1="80" y1="300" x2="600" y2="300" stroke="#3f7d1e" stroke-width="2"/><line x1="80" y1="300" x2="80" y2="80" stroke="#3f7d1e" stroke-width="2"/><path d="M120,290 Q260,120 400,290" fill="none" stroke="#5aa832" stroke-width="3"/><polygon points="260,118 266,134 254,134" fill="#3f7d1e"/><text x="260" y="108" text-anchor="middle" font-size="12" fill="#2e3a22">最适点</text><text x="340" y="330" text-anchor="middle" font-size="13" fill="#2e3a22">过酸过碱或高温使酶失活</text></svg>' },
      { type: 'tip', text: '探究温度时底物与酶要先分别保温再混合，避免一混合就开始反应；检测淀粉剩余用碘液，检测产物用斐林试剂，注意斐林需水浴加热。' },
      { type: 'paragraph', text: 'pH 影响：过酸或过碱会破坏酶的空间结构使其永久失活；在最适 pH 附近活性最高，例如胃蛋白酶最适 pH 约为 2。偏离最适 pH 活性都会下降。' },
      { type: 'warn', text: '易错：高温使酶变性失活是不可逆的；低温只是抑制酶活性，温度回升后可恢复，二者本质不同，不能混为一谈。' },
      { type: 'example', text: '例题：将酶由高温处理后再降到最适温度，活性能否恢复？解析：高温破坏酶的空间结构导致不可逆失活，即使再降到最适温度也无法恢复活性；只有低温抑制是可逆的。' },
      { type: 'keypoint', text: '对照原则与单一变量原则贯穿始终：每组除自变量外其余条件相同，通常设最适条件组作为阳性对照，以凸显自变量带来的变化。' },
      { type: 'svg', caption: '实验变量控制示意图', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="34" text-anchor="middle" font-size="19" font-weight="bold" fill="#3f7d1e">实验变量控制</text><rect x="40" y="100" width="180" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="130" y="130" text-anchor="middle" font-size="13" fill="#2e3a22">自变量</text><text x="130" y="154" text-anchor="middle" font-size="12" fill="#5aa832">唯一被改变</text><rect x="250" y="100" width="180" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="130" text-anchor="middle" font-size="13" fill="#2e3a22">因变量</text><text x="340" y="154" text-anchor="middle" font-size="12" fill="#5aa832">观测结果</text><rect x="460" y="100" width="180" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="550" y="130" text-anchor="middle" font-size="13" fill="#2e3a22">无关变量</text><text x="550" y="154" text-anchor="middle" font-size="12" fill="#5aa832">相同且适宜</text><polygon points="220,135 220,151 238,143" fill="#3f7d1e"/><text x="250" y="210" text-anchor="middle" font-size="13" fill="#2e3a22">单一变量：除自变量外其余一致</text></svg>' },
      { type: 'tip', text: '反应速率 = 产物生成量 ÷ 反应时间；实验中可用单位时间内气泡数、或澄清石灰水浑浊程度等可观测指标来量化因变量，使结论更可靠。' }
    ],
    exercises: [
      { type: 'choice', question: '探究过氧化氢酶高效性时，与酶组对照的无机催化剂是', options: ['A. Cu²⁺', 'B. Fe³⁺', 'C. Mg²⁺', 'D. Zn²⁺'], answer: 'B. Fe³⁺', explanation: '教材用 Fe³⁺ 作为无机催化剂对照，与过氧化氢酶比较催化 H₂O₂ 分解产生 O₂ 的速率，酶组气泡明显更快更多，体现酶的高效性。' },
      { type: 'choice', question: '验证淀粉酶的专一性，合理的对照设置是', options: ['A. 淀粉酶分别作用于淀粉和蔗糖', 'B. 淀粉酶和蛋白酶都作用于淀粉', 'C. 不同温度下的淀粉', 'D. 不同 pH 下的淀粉'], answer: 'A. 淀粉酶分别作用于淀粉和蔗糖', explanation: '专一性应控制酶相同、改变底物，即用淀粉酶分别催化淀粉和蔗糖，再用斐林试剂检测，只有淀粉组出现砖红色，说明酶只作用于特定底物。' },
      { type: 'choice', question: '高温使酶失活的主要原因是', options: ['A. 酶被水解', 'B. 酶空间结构被破坏', 'C. 底物耗尽', 'D. 酶被氧化'], answer: 'B. 酶空间结构被破坏', explanation: '高温破坏酶蛋白的空间结构，导致不可逆变性失活；低温只抑制活性不破坏结构，适温可恢复，二者本质不同。' },
      { type: 'fill', question: '在探究温度对酶活性影响的实验中，人为改变的条件____是自变量。', answer: '温度', explanation: '自变量是实验中人为控制并改变的因素，在探究温度影响的实验中就是温度；因变量是反应速率，其余如 pH、酶量等为无关变量需保持一致。' },
      { type: 'fill', question: '探究淀粉酶专一性时，检测淀粉是否被水解可用____试剂水浴加热观察是否出现砖红色。', answer: '斐林', explanation: '淀粉被淀粉酶水解生成还原糖，用斐林试剂水浴加热会出现砖红色沉淀；蔗糖不被水解则无此现象，借此证明淀粉酶的专一性。' }
    ]
  });
})();
