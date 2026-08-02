/* 化学 · 高三复习 · 化学计算 · 专题八 · 课时：守恒法 */
(function () {
  var v = gzGetVolume('chemistry', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u17',
    name: '守恒法',
    chapter: '化学计算 · 专题八 常用计算技巧',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、守恒法：化学计算的省力法宝' },
      { type: 'paragraph', text: '很多化学计算如果硬写方程式、一步步代入，又慢又容易错。守恒法抓住<strong>反应前后某些量不变</strong>这一事实，直接列式求解。高三常用的有三种守恒：质量守恒、电荷守恒、得失电子守恒。' },
      { type: 'list', items: ['质量守恒：反应前后物质总质量不变，m(反应物总) = m(生成物总)', '电荷守恒：离子反应前后正负电荷代数和相等', '得失电子守恒：氧化还原中氧化剂得电子总数等于还原剂失电子总数'] },
      { type: 'heading', text: '二、质量守恒' },
      { type: 'paragraph', text: '质量守恒的根源是化学反应前后原子的种类和数目不变，所以把所有反应物加起来的总质量，一定等于所有生成物加起来的总质量。遇到有气体参加或生成、有沉淀、或整体质量变化的题目，优先想质量守恒。' },
      { type: 'keypoint', label: '重点·质量守恒抓总重', text: '<strong>质量守恒常用于有气体、沉淀或明显质量变化的题目。</strong>直接抓总质量相等列式即可，常常不必写出全部产物。比如固体加热失重、金属溶于酸后溶液增重，都可以用总质量相等来解。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">质量守恒示意图</text><rect x="50" y="80" width="240" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="170" y="115" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">反应物总质量</text><text x="170" y="145" font-size="14" fill="#4a3724" text-anchor="middle">m(反应物总)</text><text x="340" y="135" font-size="30" fill="#b5651d" text-anchor="middle" font-weight="bold">=</text><rect x="390" y="80" width="240" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="510" y="115" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">生成物总质量</text><text x="510" y="145" font-size="14" fill="#4a3724" text-anchor="middle">m(生成物总)</text><text x="340" y="225" font-size="14" fill="#d98e3a" text-anchor="middle" font-weight="bold">反应前后原子种类数目不变，总质量相等</text><text x="340" y="258" font-size="13" fill="#4a3724" text-anchor="middle">抓住总质量相等列式，可跳过写全方程式的麻烦</text></svg>', caption: '图1　反应前后总质量相等，质量守恒可直接列式。' },
      { type: 'heading', text: '三、电荷守恒' },
      { type: 'paragraph', text: '在离子方程式或溶液中，反应前各离子所带正电荷总数，一定等于反应后各离子所带负电荷总数（代数和相等）。常用来<strong>求未知离子的浓度</strong>。列式子时，每种离子的电荷贡献 = 离子价数 × 它的浓度。' },
      { type: 'example', label: '例题·用电荷守恒求未知离子浓度', text: '某溶液中有 Fe³⁺、Cu²⁺、Cl⁻、SO₄²⁻，已知 c(Fe³⁺)=0.1 mol/L、c(Cu²⁺)=0.1 mol/L、c(Cl⁻)=0.3 mol/L，求 c(SO₄²⁻)。<br>解：正电荷浓度 = 3×0.1 + 2×0.1 = 0.5 mol/L。<br>负电荷浓度 = 1×0.3 + 2×c(SO₄²⁻)。<br>令相等：0.3 + 2c = 0.5，得 c(SO₄²⁻) = 0.1 mol/L。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">电荷守恒列式示意</text><rect x="120" y="70" width="440" height="70" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="105" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">左边总电荷代数和 = 右边总电荷代数和</text><rect x="60" y="170" width="250" height="80" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="185" y="200" font-size="14" fill="#4a3724" text-anchor="middle">阳离子带正电</text><text x="185" y="228" font-size="14" fill="#d98e3a" text-anchor="middle" font-weight="bold">正电荷 = 价数×浓度之和</text><rect x="370" y="170" width="250" height="80" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="495" y="200" font-size="14" fill="#4a3724" text-anchor="middle">阴离子带负电</text><text x="495" y="228" font-size="14" fill="#d98e3a" text-anchor="middle" font-weight="bold">负电荷 = 价数×浓度之和</text><polygon points="310,210 360,195 360,225" fill="#b5651d"/><text x="340" y="280" font-size="13" fill="#4a3724" text-anchor="middle">正负电荷代数和相等，常用求未知离子浓度</text></svg>', caption: '图2　离子反应前后正负电荷代数和相等，可求未知离子浓度。' },
      { type: 'heading', text: '四、得失电子守恒' },
      { type: 'paragraph', text: '氧化还原反应中，化合价降低的氧化剂得到电子，化合价升高的还原剂失去电子，但<strong>电子总数一定相等</strong>。这是氧化还原计算的灵魂，用它能直接求出未知价态、未知量，而不必先写出完整方程式。' },
      { type: 'warn', label: '易错·别先写完整方程式', text: '用电子守恒解题时，千万不要先写完整方程式！只盯住化合价发生变化的元素，算清起点和终点的化合价，乘上原子个数和系数，让两边电子得失相等即可。多写一步完整方程式反而容易出错。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">得失电子守恒天平图</text><rect x="50" y="80" width="250" height="80" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="175" y="115" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">氧化剂得电子</text><text x="175" y="145" font-size="14" fill="#4a3724" text-anchor="middle">化合价降低</text><rect x="380" y="80" width="250" height="80" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="505" y="115" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">还原剂失电子</text><text x="505" y="145" font-size="14" fill="#4a3724" text-anchor="middle">化合价升高</text><text x="340" y="200" font-size="30" fill="#b5651d" text-anchor="middle" font-weight="bold">⇌</text><text x="340" y="240" font-size="15" fill="#d98e3a" text-anchor="middle" font-weight="bold">得电子总数 = 失电子总数</text><text x="340" y="285" font-size="13" fill="#4a3724" text-anchor="middle">氧化还原计算灵魂：只盯变价元素，价变×个数相等</text></svg>', caption: '图3　天平两端得失电子相等，是氧化还原计算的核心。' },
      { type: 'example', label: '例题·用电子守恒建关系式', text: 'Cu 与稀硝酸反应，已知部分产物为 NO，求被还原的硝酸与 Cu 的关系（用电子守恒）。<br>解：Cu → Cu²⁺ 失 2e⁻；N(+5) → N(+2) 得 3e⁻。<br>电子守恒要求 2×n(Cu) = 3×n(NO)，即 3 Cu — 2 NO。' },
      { type: 'list', items: ['第一步：标出变价元素的起止化合价', '第二步：算每个原子得失电子数 = 价态变化 × 原子个数', '第三步：令两边总得失相等，建立 A — B 关系式'] },
      { type: 'table', headers: ['守恒类型', '守恒的物理量', '常见用途'], rows: [['质量守恒', '反应前后总质量', '有气体、沉淀、质量变化的题目'], ['电荷守恒', '正负电荷代数和', '求未知离子浓度、写离子方程式'], ['得失电子守恒', '电子得失总数', '氧化还原反应求未知量或关系式']] },
      { type: 'tip', label: '提示·一句话记牢三种守恒', text: '质量看总重，电荷看代数和，电子看得失相等。遇到氧化还原求未知量，先想电子守恒，往往比写方程式快得多。三种守恒还可以联合使用。' },
      { type: 'heading', text: '五、综合例题' },
      { type: 'example', label: '例题·Cu 溶于稀硝酸求 NO 体积', text: '将 3.2 g Cu 完全溶于足量稀硝酸，生成的 NO 在标准状况下体积多少？<br>解：n(Cu) = 3.2 / 64 = 0.05 mol，失电子 0.05×2 = 0.1 mol e⁻。<br>N(+5)→N(+2) 每 mol NO 得 3 mol e⁻，故 n(NO) = 0.1 / 3 mol。<br>标况体积 V = (0.1/3) × 22.4 ≈ 0.747 L。' },
      { type: 'paragraph', text: '小结：守恒法的精髓是<strong>不绕路</strong>。看清题目给的是什么、求的是什么，选对一种守恒直接列式，能省下大量写方程式和代入的时间，也减少出错机会。' }
    ],
    exercises: [
      { type: 'choice', question: '关于守恒法，下列说法正确的是？', options: ['质量守恒指反应前后原子种类数目不变，总质量相等', '电荷守恒只适用于氧化还原反应', '得失电子守恒只适用于中和反应', '三种守恒彼此独立，不能联用'], answer: '质量守恒指反应前后原子种类数目不变，总质量相等', explanation: '质量守恒的本质是化学反应前后原子种类与数目不变，因此参与反应的物质总质量必然等于生成物的总质量。电荷守恒适用于所有离子反应而不仅仅是氧化还原，得失电子守恒只用于氧化还原反应而非中和反应，三种守恒常常可以联合使用快速解题。所以正确项是质量守恒的描述。' },
      { type: 'choice', question: 'Cu 与稀硝酸反应生成 NO，用电子守恒可得 Cu 与 NO 的关系是？', options: ['1 Cu — 1 NO', '3 Cu — 2 NO', '2 Cu — 3 NO', '1 Cu — 3 NO'], answer: '3 Cu — 2 NO', explanation: 'Cu 转化为 Cu²⁺ 失去 2 个电子，N 从 +5 价降为 +2 价得到 3 个电子。根据得失电子守恒，氧化剂得电子总数等于还原剂失电子总数，即 n(Cu)×2 = n(NO)×3，整理为 3 n(Cu) = 2 n(NO)，故关系式为 3 Cu — 2 NO。' },
      { type: 'choice', question: '某溶液含 Fe³⁺、Cu²⁺、Cl⁻、SO₄²⁻，电荷守恒式为？', options: ['3c(Fe³⁺)+2c(Cu²⁺)=c(Cl⁻)+2c(SO₄²⁻)', 'c(Fe³⁺)+c(Cu²⁺)=c(Cl⁻)+c(SO₄²⁻)', '3c(Fe³⁺)+c(Cu²⁺)=2c(Cl⁻)+c(SO₄²⁻)', 'c(Fe³⁺)+2c(Cu²⁺)=c(Cl⁻)+2c(SO₄²⁻)'], answer: '3c(Fe³⁺)+2c(Cu²⁺)=c(Cl⁻)+2c(SO₄²⁻)', explanation: '溶液呈电中性，阳离子所带正电荷总数等于阴离子所带负电荷总数。Fe³⁺ 带 3 个正电荷，Cu²⁺ 带 2 个正电荷，Cl⁻ 带 1 个负电荷，SO₄²⁻ 带 2 个负电荷，故电荷守恒式为 3c(Fe³⁺)+2c(Cu²⁺) = c(Cl⁻)+2c(SO₄²⁻)。' },
      { type: 'fill', question: 'Cu 与稀硝酸反应，电子守恒可得关系式___（填比例）。', answer: '3 Cu — 2 NO', explanation: '根据得失电子守恒，Cu 失电子总数等于 N 得电子总数。Cu→Cu²⁺ 每 mol 失 2 mol e⁻，N(+5)→N(+2) 每 mol NO 得 3 mol e⁻，令两边相等得 n(Cu)×2 = n(NO)×3，即 3 mol Cu 对应 2 mol NO，关系式写作 3 Cu — 2 NO。' },
      { type: 'fill', question: '3.2 g Cu（M=64 g/mol）完全溶于稀硝酸，失电子物质的量为___ mol。', answer: '0.1', explanation: 'Cu 的摩尔质量 M = 64 g/mol。n(Cu) = m/M = 3.2 g / 64 g·mol⁻¹ = 0.05 mol。每个 Cu 原子失 2 个电子变为 Cu²⁺，故失电子物质的量 = 0.05 mol × 2 = 0.1 mol。答案为 0.1。' }
    ]
  });
})();
