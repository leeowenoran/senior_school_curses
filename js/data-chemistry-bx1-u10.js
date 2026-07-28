/* ============================================================
 * 高一化学 · 必修 第一册 · 第二章 海水中的重要元素——钠和氯
 * 课时10：物质的量
 * 数据注入：chemistry.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u10',
    name: '物质的量',
    chapter: '必修 第一册 · 第二章 海水中的重要元素——钠和氯',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、为什么要引入物质的量' },
      { type: 'paragraph', text: '化学是研究物质变化的科学，但真正参加反应的是肉眼看不见的原子、分子、离子。这些微粒实在太小太多：一杯水里大约有 10²⁴ 个水分子。一个个数、一个个称都不现实。于是化学家发明了一个"批发"单位——物质的量，专门用来数微粒的"堆数"，把微观粒子和宏观质量连起来。' },
      { type: 'keypoint', label: '重点·物质的量定义', text: '<strong>物质的量是一个物理量，表示含有一定数目粒子的集合体，符号是 n，单位是摩尔（mol）。</strong>它就像"打"表示 12 个、"双"表示 2 个一样，只不过"摩尔"这个"堆"特别大，1 摩尔含有约 6.02×10²³ 个粒子。' },
      { type: 'list', items: ['物质的量符号 n，单位摩尔，简称摩，符号 mol', '它是一个物理量，不是"物质的质量"，两者完全不同', '使用 mol 时必须指明是哪一种粒子（如 1 mol H₂O、2 mol Na⁺）', '它把微观粒子数目和宏观可称量的质量联系了起来'] },
      { type: 'heading', text: '二、阿伏伽德罗常数 N_A' },
      { type: 'paragraph', text: '1 摩尔到底包含多少个粒子？科学家把这个固定数目叫做阿伏伽德罗常数，记作 N_A，近似值为 6.02×10²³ mol⁻¹。也就是说，1 mol 任何微粒，所含的粒子数都约为 6.02×10²³ 个。粒子总数 N、物质的量 n 和 N_A 的关系是 N = n × N_A。' },
      { type: 'keypoint', label: '重点·粒子数与物质的量', text: '<strong>阿伏伽德罗常数 N_A ≈ 6.02×10²³ mol⁻¹。</strong><br><strong>公式：N = n × N_A，变形得 n = N / N_A。</strong><br>例如 2 mol 水分子含约 2 × 6.02×10²³ = 1.204×10²⁴ 个 H₂O 分子。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">1 mol 任何微粒都约含 6.02×10²³ 个粒子</text><rect x="60" y="70" width="200" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="160" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">1 mol H₂O</text><text x="160" y="140" font-size="13" fill="#4a3724" text-anchor="middle">≈ 6.02×10²³ 个</text><text x="160" y="170" font-size="13" fill="#d98e3a" text-anchor="middle">水分子</text><rect x="280" y="70" width="200" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="380" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">1 mol Na⁺</text><text x="380" y="140" font-size="13" fill="#4a3724" text-anchor="middle">≈ 6.02×10²³ 个</text><text x="380" y="170" font-size="13" fill="#d98e3a" text-anchor="middle">钠离子</text><rect x="500" y="70" width="140" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="570" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">1 mol Fe</text><text x="570" y="140" font-size="12" fill="#4a3724" text-anchor="middle">≈ 6.02×10²³</text><text x="570" y="170" font-size="13" fill="#d98e3a" text-anchor="middle">铁原子</text><text x="340" y="275" font-size="13" fill="#d98e3a" text-anchor="middle">粒子种类不同，但 1 mol 的"个数"相同</text></svg>', caption: '图1　无论微粒是分子、离子还是原子，只要都是 1 mol，所含粒子数都约为 6.02×10²³ 个。' },
      { type: 'table', headers: ['物质', '粒子符号', '1 mol 的粒子数', '1 mol 的质量'], rows: [['水', 'H₂O', '约 6.02×10²³ 个', '约 18 g'], ['钠', 'Na', '约 6.02×10²³ 个', '约 23 g'], ['铁', 'Fe', '约 6.02×10²³ 个', '约 56 g'], ['氯化钠', 'NaCl', '约 6.02×10²³ 个', '约 58.5 g']] },
      { type: 'heading', text: '三、摩尔质量 M' },
      { type: 'paragraph', text: '物质的量帮我们"数"粒子，但它本身没有质量。要把"mol"变成天平上能称的"克"，需要摩尔质量。1 mol 某物质的质量，在数值上正好等于它的相对原子质量或相对分子质量，单位则是 g/mol。' },
      { type: 'keypoint', label: '重点·摩尔质量', text: '<strong>摩尔质量 M：单位物质的量的物质所具有的质量，单位 g/mol。</strong><br><strong>规律：M 的数值等于该粒子的相对原子质量或相对分子质量。</strong><br><strong>公式：m = n × M，变形得 n = m / M。</strong><br>例如 M(H₂O) = 18 g/mol，所以 2 mol H₂O 质量 = 2 × 18 = 36 g。' },
      { type: 'list', items: ['M(H) = 1 g/mol，M(O) = 16 g/mol', 'M(H₂O) = 2×1 + 16 = 18 g/mol', 'M(NaCl) = 23 + 35.5 = 58.5 g/mol', '摩尔质量在数值上 = 相对分子（原子）质量，但多了单位 g/mol'] },
      { type: 'example', label: '例题·求质量', text: '计算 0.5 mol 水的质量是多少克？（已知 M(H₂O) = 18 g/mol）<br><br><strong>解析</strong>：根据公式 m = n × M，代入 n = 0.5 mol、M = 18 g/mol，得 m = 0.5 × 18 = 9 g。所以 0.5 mol 水的质量是 9 克。反过来，若称得 36 g 水，则物质的量 n = 36 / 18 = 2 mol。这样就把"能称的质量"和"看不见的粒子堆数"对应起来了。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">物质的量 n 是连接粒子数 N 与质量 m 的桥梁</text><circle cx="340" cy="150" r="60" fill="#ecd9bf" stroke="#b5651d" stroke-width="3"/><text x="340" y="146" font-size="18" fill="#4a3724" text-anchor="middle" font-weight="bold">n</text><text x="340" y="172" font-size="13" fill="#d98e3a" text-anchor="middle">物质的量</text><rect x="90" y="120" width="130" height="60" rx="8" fill="#d98e3a"/><text x="155" y="150" font-size="13" fill="#ffffff" text-anchor="middle">粒子数 N</text><rect x="460" y="120" width="130" height="60" rx="8" fill="#b5651d"/><text x="525" y="150" font-size="13" fill="#ffffff" text-anchor="middle">质量 m</text><line x1="150" y1="150" x2="280" y2="150" stroke="#b5651d" stroke-width="2"/><line x1="400" y1="150" x2="530" y2="150" stroke="#b5651d" stroke-width="2"/><text x="215" y="110" font-size="12" fill="#4a3724" text-anchor="middle">÷ N_A 或 ×N_A</text><text x="465" y="110" font-size="12" fill="#4a3724" text-anchor="middle">× M 或 ÷ M</text></svg>', caption: '图2　以物质的量 n 为中心，向左联系粒子数 N（用 N_A 换算），向右联系质量 m（用 M 换算），它是宏观与微观的桥梁。' },
      { type: 'heading', text: '四、三个量之间的换算' },
      { type: 'paragraph', text: '现在把前面学的串起来：已知粒子数能求物质的量，已知质量也能求物质的量，三者可以互相换算。任何一道"多少克等于多少个粒子"的题目，中间都要经过"物质的量"这个中转站，不能直接在质量和粒子数之间跳。' },
      { type: 'keypoint', label: '重点·核心换算公式', text: '<strong>n = N / N_A = m / M</strong><br>这是本章最常用的一组等式。看到粒子数先除以 N_A 得 n，看到质量先除以 M 得 n，统一到 n 之后再相互转换。熟练后，绝大多数计算题都能迎刃而解。' },
      { type: 'warn', label: '易错·用词与对象', text: '<strong>第一，"物质的量"是专有名词，不能省成"物质量"或"物质的质量"</strong>，它和"质量"是两个完全不同的概念。<strong>第二，使用 mol 必须指明粒子种类</strong>，说"1 mol 氢"是含糊的（是 H、H₂ 还是 H⁺？），应说"1 mol H₂"或"1 mol H"。<strong>第三，物质的量只用于微观粒子</strong>（分子、原子、离子、电子等），不能用于 macroscopic 宏观物体如"1 mol 苹果"。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">实例：1 mol 铁 Fe 含 6.02×10²³ 个原子，质量 56 g</text><rect x="60" y="70" width="200" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="160" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">1 mol Fe</text><text x="160" y="140" font-size="13" fill="#4a3724" text-anchor="middle">≈ 6.02×10²³ 个</text><text x="160" y="165" font-size="13" fill="#d98e3a" text-anchor="middle">铁原子</text><rect x="290" y="70" width="320" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="450" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">质量换算</text><text x="450" y="140" font-size="13" fill="#4a3724" text-anchor="middle">M(Fe) = 56 g/mol</text><text x="450" y="170" font-size="13" fill="#d98e3a" text-anchor="middle">m = 1 mol × 56 g/mol = 56 g</text><text x="340" y="272" font-size="13" fill="#d98e3a" text-anchor="middle">n 相同（都是 1 mol），粒子数相同，质量看 M</text></svg>', caption: '图3　同样是 1 mol，铁原子个数是约 6.02×10²³ 个，而对应的质量是 56 g，体现了"粒子数相同、质量因种类而异"。' },
      { type: 'tip', label: '提示·计算三步法', text: '遇到物质的量的计算，按这三步走最稳：<strong>第一步，看清已知什么（粒子数 N 还是质量 m）；第二步，都用 n 当中转，N÷N_A 或 m÷M 得到 n；第三步，再用 n 去乘目标量的系数</strong>。千万别试图"质量直接变粒子数"，中间一定过 n 这一关。' },
      { type: 'example', label: '例题·综合换算', text: '已知 M(NaCl) = 58.5 g/mol，问 117 g 氯化钠中含有多少个 NaCl "单元"？（N_A 取 6.02×10²³ mol⁻¹）<br><br><strong>解析</strong>：先由质量求 n：n = m / M = 117 / 58.5 = 2 mol。再由 n 求粒子数：N = n × N_A = 2 × 6.02×10²³ = 1.204×10²⁴ 个。所以 117 g 氯化钠约含 1.204×10²⁴ 个 NaCl 单元。这道题的关键就是先用 M 把质量转成 n，再用 N_A 把 n 转成 N。' }
    ],
    exercises: [
      { type: 'choice', question: '物质的量这一物理量的单位是？', options: ['克', '摩尔(mol)', '升', '个'], answer: '摩尔(mol)', explanation: '物质的量是一套专门用来计量微观粒子集合体的物理量，它的单位是摩尔，简称摩，符号为 mol。克是质量的单位，升是体积的单位，"个"不是标准物理量单位。因此本题选摩尔(mol)。' },
      { type: 'choice', question: '1 mol 任何微粒所含的粒子数约为多少？', options: ['6.02×10²³', '3.01×10²³', '1', '12'], answer: '6.02×10²³', explanation: '根据阿伏伽德罗常数的定义，1 mol 任何微粒所含的粒子数都约为 6.02×10²³ 个，这个常数记作 N_A，单位是 mol⁻¹。它与微粒的种类无关，无论是分子、原子还是原子团，只要凑够 1 mol，数量都约为 6.02×10²³。所以选 6.02×10²³。' },
      { type: 'choice', question: '水的摩尔质量约为多少？', options: ['18 g', '18 g/mol', '18', '9 g/mol'], answer: '18 g/mol', explanation: '摩尔质量的单位是 g/mol，数值上等于该物质的相对分子质量。水的化学式为 H₂O，相对分子质量 = 2×1 + 16 = 18，所以摩尔质量 M(H₂O) = 18 g/mol。选项"18 g"是质量不是摩尔质量，"18"缺单位，"9 g/mol"是半个水分子显然不对。故选 18 g/mol。' },
      { type: 'fill', question: '已知 M(H₂O) = 18 g/mol，则 0.5 mol H₂O 的质量为 ___ g。', answer: '9', explanation: '根据公式 m = n × M，代入 n = 0.5 mol、M = 18 g/mol，得到 m = 0.5 × 18 = 9 g。所以 0.5 mol 水的质量是 9 克。注意质量 = 物质的量 × 摩尔质量，三者单位要配套使用 mol 和 g/mol 才能得到 g。' },
      { type: 'fill', question: '粒子数 N 与物质的量 n 的关系是 N = n × N_A，其中阿伏伽德罗常数 N_A ≈ ___ mol⁻¹。', answer: '6.02×10²³', explanation: '阿伏伽德罗常数 N_A 定义为 1 mol 微粒所含的粒子数，实验测定其近似值为 6.02×10²³，单位是 mol⁻¹，故关系式写作 N = n × N_A。注意它既有数值 6.02×10²³，又有单位 mol⁻¹，不能漏掉单位。因此空格填 6.02×10²³。' }
    ]
  });
})();
