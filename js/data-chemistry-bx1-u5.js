/* ============================================================
 * 高一化学 · 必修 第一册 · 第一章 物质及其变化
 * 课时5：氧化还原反应（规律与配平）
 * 数据注入：chemistry.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u5',
    name: '氧化还原反应（规律与配平）',
    chapter: '必修 第一册 · 第一章 物质及其变化',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、常见的氧化剂与还原剂' },
      { type: 'paragraph', text: '上节课我们知道，氧化剂是化合价降低、得电子的物质，还原剂是化合价升高、失电子的物质。在真实反应里，哪些物质常当氧化剂，哪些常当还原剂，其实有"老面孔"。记住它们，配平和判断就快多了。' },
      { type: 'keypoint', label: '重点·常见氧化剂', text: '<strong>常见氧化剂</strong>：活泼非金属单质（O₂、Cl₂）、含高价元素的含氧酸（HNO₃、浓 H₂SO₄）、高锰酸钾 KMnO₄、重铬酸钾 K₂Cr₂O₇、Fe³⁺ 等。它们化合价容易降低，抢电子能力强。' },
      { type: 'list', items: ['常见氧化剂：O₂、Cl₂、HNO₃、KMnO₄、K₂Cr₂O₇、FeCl₃（Fe³⁺）', '常见还原剂：金属单质（Zn、Fe、Cu）、H₂、C、CO、Fe²⁺、I⁻（如 KI）', '同一物质在不同反应中可当氧化剂也可当还原剂，看对手强弱'] },
      { type: 'table', headers: ['类别', '常见氧化剂 → 还原产物', '常见还原剂 → 氧化产物'], rows: [['非金属单质', 'O₂ → O²⁻(或 H₂O/氧化物)', 'H₂ → H⁺(或 H₂O)'], ['含氧酸', 'HNO₃ → NO、NO₂ 等', 'C → CO、CO₂'], ['高价金属盐', 'Fe³⁺ → Fe²⁺', 'Fe²⁺ → Fe³⁺'], ['其他', 'KMnO₄ → Mn²⁺（酸性）', 'CO → CO₂、I⁻ → I₂']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">常见氧化剂与还原剂清单</text><rect x="30" y="60" width="300" height="210" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">常见氧化剂（得电子）</text><text x="180" y="122" font-size="13" fill="#4a3724" text-anchor="middle">O₂、Cl₂</text><text x="180" y="150" font-size="13" fill="#4a3724" text-anchor="middle">HNO₃、浓 H₂SO₄</text><text x="180" y="178" font-size="13" fill="#4a3724" text-anchor="middle">KMnO₄、K₂Cr₂O₇</text><text x="180" y="206" font-size="13" fill="#4a3724" text-anchor="middle">Fe³⁺（如 FeCl₃）</text><rect x="350" y="60" width="300" height="210" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">常见还原剂（失电子）</text><text x="500" y="122" font-size="13" fill="#4a3724" text-anchor="middle">金属单质 Zn、Fe、Cu</text><text x="500" y="150" font-size="13" fill="#4a3724" text-anchor="middle">H₂、C、CO</text><text x="500" y="178" font-size="13" fill="#4a3724" text-anchor="middle">Fe²⁺（如 FeSO₄）</text><text x="500" y="206" font-size="13" fill="#4a3724" text-anchor="middle">I⁻（如 KI）</text></svg>', caption: '图1　常见氧化剂多含易降价的高价元素或活泼非金属；常见还原剂多为金属单质、低价离子或含碳、氢的还原物。' },
      { type: 'heading', text: '二、强弱规律：强制弱' },
      { type: 'paragraph', text: '氧化还原也讲"谁更强"。在一个已经发生的反应里，氧化剂的氧化性一定强于它生成的氧化产物；还原剂的还原性也一定强于它生成的还原产物。一句话："强制弱"——强的把弱的"逼"出来。用这个规律可以比较物质氧化性或还原性的相对强弱。' },
      { type: 'keypoint', label: '重点·强弱规律', text: '<strong>氧化性：氧化剂 > 氧化产物；还原性：还原剂 > 还原产物。</strong><br>即"强制弱"。例如 Fe 能把 Cu²⁺ 还原成 Cu，说明还原性 Fe > Cu；同时氧化性 Cu²⁺ > Fe²⁺。借此可判断反应能否自发发生：强氧化剂能氧化弱还原剂。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">强制弱规律示意</text><rect x="60" y="80" width="240" height="130" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="108" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">强氧化剂 + 强还原剂</text><text x="180" y="140" font-size="13" fill="#4a3724" text-anchor="middle">发生反应</text><text x="180" y="178" font-size="13" fill="#d98e3a" text-anchor="middle">如 Cu²⁺ + Fe → Fe²⁺ + Cu</text><rect x="380" y="80" width="240" height="130" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="500" y="108" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">弱还原产物 + 弱氧化产物</text><text x="500" y="140" font-size="13" fill="#4a3724" text-anchor="middle">不能倒推</text><text x="500" y="178" font-size="13" fill="#d98e3a" text-anchor="middle">氧化性 Cu²⁺ > Fe²⁺</text><line x1="300" y1="145" x2="380" y2="145" stroke="#d98e3a" stroke-width="3"/><polygon points="380,139 392,145 380,151" fill="#d98e3a"/><text x="340" y="132" font-size="12" fill="#d98e3a" text-anchor="middle">强制弱</text></svg>', caption: '图2　强制弱：强氧化剂与强还原剂反应生成弱的还原产物与氧化产物，逆向不能自发进行。' },
      { type: 'heading', text: '三、先后规律：强者优先' },
      { type: 'paragraph', text: '如果一种还原剂遇到了几种都能和它反应的氧化剂，会先和谁反应？答案是：先和"氧化性最强"的那个反应，等它消耗完了，才轮到次强的。同样，一种氧化剂遇到几种还原剂，先和"还原性最强"的反应。这就是强者优先的先后规律。' },
      { type: 'keypoint', label: '重点·先后规律', text: '<strong>强者优先反应。</strong>把 Zn、Fe 同时投入含 Cu²⁺、Ag⁺ 的溶液，因氧化性 Ag⁺ > Cu²⁺，Ag⁺ 先被置换出来，耗尽后才轮到 Cu²⁺。同理，还原性强的还原剂先被氧化。' },
      { type: 'list', items: ['氧化性 Ag⁺ > Cu²⁺，故 Ag⁺ 先被还原析出', '还原性 Zn > Fe，故 Zn 先被氧化', '应用：电镀、金属回收时按强弱顺序判断谁先反应'] },
      { type: 'example', label: '例题·先后规律', text: '向含有 AgNO₃ 和 Cu(NO₃)₂ 的混合溶液中加入足量铁粉，最先析出的金属是？<br><br><strong>解析</strong>：溶液里两种氧化剂是 Ag⁺ 和 Cu²⁺。氧化性 Ag⁺ 比 Cu²⁺ 强（Ag⁺ 更容易得电子）。根据"强者优先"，加入的铁粉先和 Ag⁺ 反应：Fe + 2Ag⁺ → Fe²⁺ + 2Ag，把银先置换出来；等 Ag⁺ 被消耗完，铁才继续和 Cu²⁺ 反应生成铜。所以最先析出的金属是银 Ag。' },
      { type: 'heading', text: '四、配平：化合价升降法' },
      { type: 'paragraph', text: '氧化还原反应方程式往往不容易一眼配平，因为同一元素在两边系数不同。常用方法是"化合价升降法"，本质就是得失电子守恒：先找出变价元素，算每个原子升、降多少价，再求最小公倍数让总升价等于总降价，最后配平其他原子。' },
      { type: 'keypoint', label: '重点·配平四步', text: '<strong>第一步</strong>标出变价元素的化合价；<strong>第二步</strong>算出一个原子升、降的价数；<strong>第三步</strong>求最小公倍数使升总价 = 降总价，确定氧化剂、还原剂系数；<strong>第四步</strong>用原子守恒配平其余物质，最后查氧、查氢。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">得失电子守恒配平示例</text><text x="340" y="74" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">Cu + HNO₃(稀) → Cu(NO₃)₂ + NO + H₂O</text><text x="160" y="116" font-size="13" fill="#4a3724" text-anchor="middle">Cu: 0 → +2，升 2</text><text x="160" y="140" font-size="13" fill="#d98e3a" text-anchor="middle">每原子失 2e⁻</text><text x="500" y="116" font-size="13" fill="#4a3724" text-anchor="middle">N: +5 → +2，降 3</text><text x="500" y="140" font-size="13" fill="#d98e3a" text-anchor="middle">每原子得 3e⁻</text><text x="340" y="180" font-size="13" fill="#4a3724" text-anchor="middle">升降价最小公倍数 = 6</text><text x="340" y="208" font-size="13" fill="#d98e3a" text-anchor="middle">Cu 系数 3（失 6e⁻），NO 系数 2（得 6e⁻）</text><rect x="120" y="240" width="440" height="50" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="270" font-size="13" fill="#4a3724" text-anchor="middle">3Cu + 8HNO₃(稀) → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O</text></svg>', caption: '图3　配平关键：使升总价等于降总价（此处同为 6），据此定 Cu 与 NO 系数，再用原子守恒配其余。' },
      { type: 'heading', text: '五、实例演练' },
      { type: 'example', label: '例题·配平演练', text: '配平：Fe₂O₃ + CO → Fe + CO₂（炼铁主反应）。<br><br><strong>解析</strong>：标变价，Fe 从 +3 降到 0，每个 Fe 降 3，一个 Fe₂O₃ 含 2 个 Fe，共降 6；C 从 +2（CO）升到 +4（CO₂），每个 C 升 2。升降价最小公倍数 6，所以 CO 与 CO₂ 系数为 3（升 6），Fe₂O₃ 系数为 1（降 6），Fe 系数为 2。得 <strong>Fe₂O₃ + 3CO → 2Fe + 3CO₂</strong>。检查氧原子：左边 3+3=6，右边 3×2=6，配平正确。' },
      { type: 'warn', label: '易错·别漏掉"未变价"的酸根', text: '用 HNO₃ 作氧化剂配平时，<strong>只有被还原的那部分 HNO₃ 出现在变价里</strong>，其余 HNO₃ 只是提供 NO₃⁻ 留在盐中（如 Cu(NO₃)₂）。所以稀硝酸与铜反应，系数不是简单的 1:1，而是 Cu 与"被还原的 NO"按电子守恒，多余 NO₃⁻ 要靠增加 HNO₃ 总量来满足。配平时先管电子守恒，再用原子守恒补足。' },
      { type: 'tip', label: '提示·配平自查三看', text: '配完一遍后自查：一看电子是否守恒（升总价 = 降总价）；二看各元素原子个数左右是否相等；三看条件和符号（气体↑、沉淀↓、加热）是否标对。先定变价物质系数，再补旁观离子，顺序别乱。' }
    ],
    exercises: [
      { type: 'choice', question: '根据强弱规律"强制弱"，下列能自发发生的是？', options: ['Cu 与 Fe²⁺ 反应', 'Fe 与 Cu²⁺ 反应生成 Cu', 'Ag 与 Fe²⁺ 反应', 'Cu 与 Zn²⁺ 反应'], answer: 'Fe 与 Cu²⁺ 反应生成 Cu', explanation: '强制弱规律说：强还原剂能把弱氧化剂对应的弱还原剂置换出来。还原性 Fe 强于 Cu，所以 Fe 能把 Cu²⁺ 还原成 Cu，反应 Fe + Cu²⁺ → Fe²⁺ + Cu 能自发发生。反之 Cu 不能置换 Fe²⁺、Ag 不能置换 Fe²⁺、Cu 不能置换 Zn²⁺，因为后面这些还原剂更弱，不符合强制弱方向。所以选 Fe 与 Cu²⁺ 反应。' },
      { type: 'choice', question: '向含 Ag⁺ 和 Cu²⁺ 的混合溶液中加入足量铁粉，最先析出的金属是？', options: ['铜 Cu', '银 Ag', '铁 Fe', '同时析出铜和银'], answer: '银 Ag', explanation: '氧化剂 Ag⁺ 的氧化性强于 Cu²⁺。根据"强者优先"规律，加入的铁粉先和氧化性更强的 Ag⁺ 反应，把银先置换出来：Fe + 2Ag⁺ → Fe²⁺ + 2Ag。只有当 Ag⁺ 被消耗完后，铁才继续与 Cu²⁺ 反应生成铜。因此最先析出的是银 Ag，而不是铜。' },
      { type: 'choice', question: '氧化还原方程式配平所依据的核心守恒是？', options: ['质量守恒', '得失电子守恒（电子守恒）', '体积守恒', '颜色守恒'], answer: '得失电子守恒（电子守恒）', explanation: '氧化还原反应配平的根本依据是得失电子守恒：还原剂失去电子的总数必须等于氧化剂得到电子的总数，也就是化合价升高的总价数等于降低的总价数。在此基础上再用原子守恒配平其他物质。质量守恒是结果而非配平的核心切入点，体积、颜色与配平无关。所以核心是得失电子守恒。' },
      { type: 'fill', question: '用化合价升降法配平：Fe₂O₃ + ___ CO → 2Fe + ___ CO₂（填入 CO 与 CO₂ 的系数，如 3 与 3）。', answer: '3 与 3|3 和 3', explanation: 'F e 从 +3 降到 0，每个 Fe 降 3，一个 Fe₂O₃ 含 2 个 Fe 共降 6；C 从 CO 的 +2 升到 CO₂ 的 +4，每个升 2。升降价最小公倍数 6，故 CO 与 CO₂ 系数都为 3，Fe₂O₃ 系数 1、Fe 系数 2。方程式为 Fe₂O₃ + 3CO → 2Fe + 3CO₂，查氧：左 3+3=6，右 3×2=6，配平正确。' },
      { type: 'fill', question: '氧化性比较：在反应 Cu²⁺ + Fe → Fe²⁺ + Cu 中，氧化剂的氧化性 ___ 氧化产物的氧化性（填"大于"或"小于"）。', answer: '大于', explanation: '根据强制弱规律，氧化剂的氧化性强于氧化产物。该反应中 Cu²⁺ 是氧化剂（化合价降低、得电子），Fe²⁺ 是氧化产物（Fe 被氧化得到）。因此氧化性 Cu²⁺ 大于 Fe²⁺。同理还原性 Fe 大于 Cu，即"强制弱"在氧化性和还原性两个方向都成立。这里应填"大于"。' }
    ]
  });
})();
