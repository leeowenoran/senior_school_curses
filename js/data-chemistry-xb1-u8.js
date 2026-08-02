/* ============================================================
 * 高二化学 · 选择性必修1 化学反应原理 · 第二章 化学反应速率与化学平衡
 * 课时8：平衡移动原理与反应方向调控
 * 数据注入：chemistry.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u8',
    name: '平衡移动原理与反应方向调控',
    chapter: '选择性必修1 化学反应原理 · 第二章 化学反应速率与化学平衡',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是平衡移动' },
      { type: 'paragraph', text: '处于平衡的可逆反应，一旦外界条件（浓度、温度、压强等）变了，原来的 v正 = v逆 就被打破，体系会重新调整，直到建立一个新的平衡。这种"从旧平衡变到新平衡"的过程，就叫平衡移动。移动方向由谁来决定？看条件改变后，正、逆反应速率谁更大，速率大的那个方向就是平衡移动的方向。' },
      { type: 'keypoint', label: '重点·平衡移动的方向', text: '<strong>条件改变使 v正 ≠ v逆 后，平衡向速率较大的那个反应方向移动。</strong>例如增大反应物浓度瞬间 v正 变大、v逆 暂未变，v正 > v逆，平衡就正向移动，直到重新相等。移动的结果是建立新平衡，不是回到旧平衡。' },
      { type: 'list', items: ['平衡移动的前提：可逆反应已达平衡', '触发因素：浓度、温度、压强等条件改变', '方向判据：条件变后 v正 与 v逆 谁大就向谁移', '结果：旧平衡被破坏，建立新平衡'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">条件改变打破相等，速率大者决定移动方向</text><line x1="70" y1="50" x2="70" y2="240" stroke="#b5651d" stroke-width="2"/><line x1="70" y1="240" x2="620" y2="240" stroke="#b5651d" stroke-width="2"/><text x="350" y="262" font-size="13" fill="#4a3724" text-anchor="middle">时间 t</text><line x1="70" y1="100" x2="250" y2="160" stroke="#d98e3a" stroke-width="3"/><line x1="70" y1="240" x2="250" y2="160" stroke="#b5651d" stroke-width="3"/><line x1="250" y1="160" x2="350" y2="160" stroke="#4a3724" stroke-width="2" stroke-dasharray="5 4"/><line x1="350" y1="200" x2="600" y2="130" stroke="#d98e3a" stroke-width="3"/><line x1="350" y1="120" x2="600" y2="130" stroke="#b5651d" stroke-width="3"/><text x="160" y="200" font-size="12" fill="#4a3724" text-anchor="middle">旧平衡</text><text x="450" y="170" font-size="12" fill="#d98e3a" text-anchor="middle">新平衡 v正再次相等</text><text x="300" y="150" font-size="12" fill="#b5651d" text-anchor="middle">扰动</text></svg>', caption: '图1　条件改变瞬间 v正 与 v逆 不再相等，体系沿速率较大一方移动，直至在新位置重新相等。' },
      { type: 'heading', text: '二、勒夏特列原理（平衡移动原理）' },
      { type: 'paragraph', text: '法国化学家勒夏特列把平衡移动的规律总结成一句话：如果改变影响平衡的一个条件（浓度、温度、压强），平衡就向能够减弱这种改变的方向移动。比如升温，平衡就向"吸热"那一侧移，用吸热来"抵消"一点升温；增大反应物浓度，平衡就向消耗反应物的方向（正向）移。' },
      { type: 'keypoint', label: '重点·勒夏特列原理', text: '<strong>改变影响平衡的一个条件，平衡向减弱这种改变的方向移动。</strong>注意是"减弱"而不是"消除"：它只能抵消一部分改变，不能把改变完全抵掉。这条原理是预测所有平衡移动方向的万能钥匙。' },
      { type: 'example', label: '例题·用勒夏特列判断', text: '反应 2NO₂(g) ⇌ N₂O₄(g) 放热（正反应放热）。升高温度，平衡怎么移？<br><br><strong>解析</strong>：升温对体系是"加热"，平衡要向能减弱升温的方向移动，即向吸热方向。正反应放热、逆反应吸热，所以平衡向逆反应方向（向左）移动，NO₂ 增多、颜色加深。这正是勒夏特列原理的直接应用。' },
      { type: 'warn', label: '易错·减弱不等于消除', text: '勒夏特列说的是"减弱"改变，<strong>不是"消除"改变</strong>。例如把容器体积压缩为原来一半（压强增大一倍），平衡向气体分子数减小的方向移动来降低压强，但新平衡的总压强仍比原来高，只是比"不移动时"低一些。不要以为移动后条件就完全恢复原样。' },
      { type: 'list', items: ['增反应物浓度 → 平衡正向，消耗多余反应物', '升温 → 平衡向吸热方向，抵消升温', '增压（气体分子数减小方向）→ 平衡正向，抵消增压', '加催化剂 → 不移动平衡，只加快到达平衡'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">勒夏特列原理：平衡总朝"对抗改变"的一侧移</text><rect x="60" y="80" width="200" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="160" y="110" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">升温</text><rect x="420" y="80" width="200" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="520" y="110" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">向吸热侧移</text><line x1="260" y1="105" x2="420" y2="105" stroke="#d98e3a" stroke-width="2"/><text x="340" y="130" font-size="13" fill="#d98e3a" text-anchor="middle">减弱升温</text><rect x="60" y="160" width="200" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="160" y="190" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">增压</text><rect x="420" y="160" width="200" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="520" y="190" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">向气体少侧移</text><line x1="260" y1="185" x2="420" y2="185" stroke="#d98e3a" stroke-width="2"/><text x="340" y="210" font-size="13" fill="#d98e3a" text-anchor="middle">减弱增压</text></svg>', caption: '图2　勒夏特列原理：升温平衡向吸热侧移以减弱升温，增压向气体分子数少的一侧移以减弱增压。' },
      { type: 'heading', text: '三、浓度、压强、温度各怎样影响平衡' },
      { type: 'paragraph', text: '把三类因素的规律记牢：浓度上，增大反应物或减小生成物，平衡正向移；压强上（有气体且前后分子数不等时），增大压强平衡向气体分子数减少的方向移；温度上，升高温度平衡向吸热方向移，降低温度向放热方向移。这三条都能用勒夏特列原理一句话说清。' },
      { type: 'keypoint', label: '重点·三因素移动规律', text: '<strong>浓度：增反应物/减生成物→正向；压强：增压→向气体分子数少的一侧；温度：升温→向吸热侧，降温→向放热侧。</strong>若反应前后气体分子数相等，改变压强不引起平衡移动；催化剂则无论如何不移动平衡。' },
      { type: 'table', headers: ['改变条件', '平衡移动方向', '依据'], rows: [['增大反应物浓度', '正向（右）', '消耗多余反应物'], ['升高温度', '向吸热方向', '减弱升温'], ['增大压强（分子数减少侧）', '向气体少的一侧', '减弱增压'], ['使用催化剂', '不移动', '同等加速正逆反应']] },
      { type: 'heading', text: '四、反应方向的调控与综合考虑' },
      { type: 'paragraph', text: '实际生产中，不能只盯平衡，还得看速率。比如合成氨 N₂ + 3H₂ ⇌ 2NH₃ 是气体分子数减小且放热的反应：从平衡看，低温高压有利；但从速率看，低温太慢。工业上于是用适中的温度、较高的压强，再配合铁催化剂折中，既保证一定速率又保证不错产率。调控就是"平衡"和"速率"两头兼顾。' },
      { type: 'example', label: '例题·实际调控判断', text: '对放热且气体分子数减小的反应，下列说法合理的是？<br>A. 升温有利于提高平衡产率<br>B. 增压既加快速率又有利于平衡正向<br>C. 催化剂能提高平衡产率<br>D. 降温一定最好<br><br><strong>解析</strong>：该反应正向放热、气体减少。增压既能加快分子碰撞（速率↑），又使平衡向气体少的一侧即正向移动（产率↑），所以 B 合理。A 错，升温使平衡逆向；C 错，催化剂不移动平衡；D 错，过低温度速率太慢不现实。' },
      { type: 'warn', label: '易错·催化剂与惰气的影响', text: '<strong>催化剂不改变平衡位置，只缩短到达平衡的时间；</strong>恒温恒容下充入与反应无关的气体（惰气），反应物和生成物浓度都没变，平衡不移动。只有在恒温恒压下充惰气使体积膨胀、各浓度下降时，才可能像减压一样影响平衡。这两点常在选择题里设陷阱。' },
      { type: 'tip', label: '提示', text: '做平衡移动题的标准动作：① 先确认是不是可逆反应、反应前后气体分子数差多少；② 逐条套勒夏特列——升温想吸热侧、增压想气体少侧、增浓度想消耗侧；③ 遇到催化剂、恒容加惰气，立刻反应"不移动"。记住"减弱不消除"，就不会被"完全抵消"的陷阱骗到。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">调控要兼顾速率与平衡：以合成氨为例</text><rect x="60" y="80" width="180" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="150" y="110" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">低温高压利平衡</text><rect x="270" y="80" width="180" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="360" y="110" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">高温利速率</text><rect x="480" y="80" width="180" height="50" rx="8" fill="#d98e3a" stroke="#b5651d" stroke-width="2"/><text x="570" y="110" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">折中+催化剂</text><line x1="240" y1="105" x2="270" y2="105" stroke="#b5651d" stroke-width="2"/><line x1="450" y1="105" x2="480" y2="105" stroke="#b5651d" stroke-width="2"/><text x="340" y="180" font-size="13" fill="#4a3724" text-anchor="middle">实际：适中温度 + 较高压强 + 铁催化剂</text><text x="340" y="220" font-size="12" fill="#4a3724" text-anchor="middle">既保证速率，又保住不错的平衡产率</text></svg>', caption: '图3　实际生产要在"速率快"与"平衡产率高"之间折中，合成氨用适中温度、较高压强并配合催化剂来兼顾两者。' }
    ],
    exercises: [
      { type: 'choice', question: '勒夏特列原理认为，改变影响平衡的一个条件时，平衡将？', options: ['向加强这种改变的方向移动', '向减弱这种改变的方向移动', '完全消除这种改变', '不发生任何移动'], answer: '向减弱这种改变的方向移动', explanation: '勒夏特列原理指出：如果改变影响平衡的一个条件（浓度、温度、压强），平衡就向能够减弱这种改变的方向移动。注意是"减弱"而非"消除"，它只能抵消一部分改变，不能把条件完全恢复原样。因此"向减弱这种改变的方向移动"是正确表述。' },
      { type: 'choice', question: '某可逆反应的正反应是放热反应，升高温度后化学平衡将？', options: ['向正反应方向移动', '向逆反应方向（吸热方向）移动', '不移动', '先正向后逆向'], answer: '向逆反应方向（吸热方向）移动', explanation: '升温时平衡向能减弱升温的方向移动，即向吸热方向。该反应正反应放热，则逆反应吸热，所以升温使平衡向逆反应方向（向左）移动，生成物减少。这与勒夏特列原理完全一致，也符合"升温利于吸热侧"的规律。' },
      { type: 'choice', question: '对于已达平衡的可逆反应，使用正催化剂会使化学平衡？', options: ['正向移动', '逆向移动', '不能使平衡发生移动', '移动得更彻底'], answer: '不能使平衡发生移动', explanation: '催化剂同等程度地加快正反应和逆反应速率，v正 与 v逆 仍然相等，所以平衡位置不移动，只是缩短到达平衡所需的时间、提高生产效率。想改变平衡产率要靠改变温度、浓度、压强，催化剂做不到。' },
      { type: 'fill', question: '在其他条件不变时，增大反应物的浓度，化学平衡向___移动。', answer: '正反应方向', explanation: '增大反应物浓度相当于在平衡体系中多加入反应物，根据勒夏特列原理，平衡会向消耗这部分多余反应物的方向移动，也就是正向（向右）移动，直到重新建立平衡。同理减小生成物浓度也会使平衡正向移动。' },
      { type: 'fill', question: '勒夏特列原理指出，平衡移动只能___（填"减弱"或"消除"）外界条件的改变，而不能完全抵消它。', answer: '减弱', explanation: '勒夏特列原理用"减弱"而非"消除"来描述平衡移动的效果：平衡确实会朝对抗改变的方向移动，但只能抵消一部分，无法把外界条件的改变完全消除。例如增压后平衡向气体分子数少侧移以降低压强，但新平衡的压强仍高于原平衡。' }
    ]
  });
})();
