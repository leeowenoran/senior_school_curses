/* ============================================================
 * 高一化学 · 必修 第一册 · 第二章 海水中的重要元素——钠和氯
 * 课时7：钠的重要化合物
 * 数据注入：chemistry.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u7',
    name: '钠的重要化合物',
    chapter: '必修 第一册 · 第二章 海水中的重要元素——钠和氯',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、氧化钠 Na₂O' },
      { type: 'paragraph', text: '氧化钠是钠在常温下与氧气反应的产物，是一种白色固体。它属于碱性氧化物，性质很"标准"：能和水化合生成碱，也能和酸性氧化物、酸反应。记住一句话——碱性氧化物绝大多数能与水生成对应的碱。' },
      { type: 'keypoint', label: '重点·Na₂O 的性质', text: '<strong>Na₂O 是碱性氧化物，主要反应：</strong><br>与水：Na₂O + H₂O → 2NaOH<br>与二氧化碳：Na₂O + CO₂ → Na₂CO₃<br>与酸：Na₂O + 2HCl → 2NaCl + H₂O<br>它相当于 NaOH 的"酸酐对应物"，遇水就变回碱。' },
      { type: 'list', items: ['颜色状态：白色固体', '类别：碱性氧化物', '溶于水生成 NaOH', '能与 CO₂、酸发生反应'] },
      { type: 'heading', text: '二、过氧化钠 Na₂O₂' },
      { type: 'paragraph', text: '过氧化钠是钠在加热条件下与氧气反应的产物，是淡黄色固体。它比 Na₂O 活泼得多，最特别的地方是：它和水的反应、和二氧化碳的反应都会放出氧气。正因为这一点，Na₂O₂ 被用在潜水艇、呼吸面具里当"制氧剂"。' },
      { type: 'keypoint', label: '重点·Na₂O₂ 的供氧反应', text: '<strong>与水：2Na₂O₂ + 2H₂O → 4NaOH + O₂↑</strong><br><strong>与二氧化碳：2Na₂O₂ + 2CO₂ → 2Na₂CO₃ + O₂↑</strong><br>两个反应都放出氧气，所以 Na₂O₂ 能在人呼吸产生的 CO₂ 环境中"变"出新鲜氧气，是理想的供氧剂。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="310" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">Na₂O₂ 与水反应放出氧气（带火星木条复燃）</text><rect x="60" y="70" width="240" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">Na₂O₂ + 水</text><rect x="90" y="130" width="180" height="60" rx="6" fill="#d98e3a"/><text x="180" y="167" font-size="14" fill="#ffffff" text-anchor="middle">放出 O₂</text><line x1="305" y1="155" x2="385" y2="155" stroke="#d98e3a" stroke-width="3"/><polygon points="385,149 398,155 385,161" fill="#d98e3a"/><rect x="400" y="70" width="240" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="520" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">带火星木条</text><rect x="430" y="130" width="180" height="60" rx="6" fill="#b5651d"/><text x="520" y="167" font-size="14" fill="#ffffff" text-anchor="middle">木条复燃</text><text x="340" y="280" font-size="13" fill="#d98e3a" text-anchor="middle">2Na₂O₂ + 2H₂O → 4NaOH + O₂↑</text></svg>', caption: '图1　过氧化钠与水反应放出氧气，把带火星的木条伸近会重新燃烧起来，说明有 O₂ 生成。' },
      { type: 'list', items: ['呼吸面具和潜水艇里的供氧剂', '强氧化性，可作漂白剂、消毒剂', '与水或 CO₂ 反应都放出 O₂', '保存时要密封防潮、避光'] },
      { type: 'heading', text: '三、氢氧化钠 NaOH（烧碱）' },
      { type: 'paragraph', text: '氢氧化钠俗称烧碱、火碱、苛性钠，是白色固体，极易溶于水且溶解放热。它的一个怪脾气是"潮解"：暴露在空气中会吸收水分和二氧化碳，表面慢慢变湿并最终变成碳酸钠。所以 NaOH 必须密封保存。' },
      { type: 'keypoint', label: '重点·NaOH 的性质', text: '<strong>NaOH 是强碱，主要表现：</strong><br>与酸中和：NaOH + HCl → NaCl + H₂O<br>与酸性氧化物 CO₂：2NaOH + CO₂ → Na₂CO₃ + H₂O（过量 CO₂ 则生成 NaHCO₃）<br>与盐反应：2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄。' },
      { type: 'example', label: '例题·NaOH 与 CO₂', text: '向 NaOH 溶液中持续通入 CO₂，最终可能得到的产物是？<br>A. 只生成 Na₂CO₃<br>B. 只生成 NaCl<br>C. 可能生成 NaHCO₃<br>D. 不反应<br><br><strong>解析</strong>：CO₂ 是酸性氧化物，能和碱 NaOH 反应。当 CO₂ 少量时生成 Na₂CO₃；当 CO₂ 持续过量时，Na₂CO₃ 会继续和 CO₂、水反应生成 NaHCO₃。所以持续通入 CO₂，最终可能得到 NaHCO₃，C 正确。B 的 NaCl 需要盐酸才生成，D 说"不反应"显然错误。' },
      { type: 'list', items: ['密封保存，防止潮解和变质', '不能用玻璃塞（会与 SiO₂ 反应生成黏性物质）', '强腐蚀性，沾到皮肤要大量水冲', '广泛用于造纸、肥皂、纺织等工业'] },
      { type: 'heading', text: '四、碳酸钠与碳酸氢钠' },
      { type: 'paragraph', text: '碳酸钠和碳酸氢钠是两种最常见的钠盐，名字只差一个字，性质和用途却有明显差别。碳酸钠俗称纯碱、苏打，碳酸氢钠俗称小苏打。它们在生活和生产中都很有用：纯碱用在玻璃、造纸，小苏打用在烘焙、胃药。' },
      { type: 'table', headers: ['对比项', '碳酸钠 Na₂CO₃', '碳酸氢钠 NaHCO₃'], rows: [['俗名', '纯碱、苏打', '小苏打'], ['水溶性', '易溶，溶液碱性较强', '能溶，溶液碱性较弱'], ['热稳定性', '受热不分解', '受热易分解：2NaHCO₃ → Na₂CO₃ + H₂O + CO₂↑'], ['与酸反应', '放出 CO₂，速率较慢', '放出 CO₂，速率较快'], ['与 CaCl₂ 溶液', '生成 CaCO₃ 沉淀', '一般不生成沉淀']] },
      { type: 'keypoint', label: '重点·热稳定性与鉴别', text: '<strong>Na₂CO₃ 很稳定，加热不分解；NaHCO₃ 不稳定，加热放出 CO₂。</strong>利用这一点可以鉴别二者：加热固体，若产生的气体能使澄清石灰水变浑浊，说明是 NaHCO₃。另外，分别加 CaCl₂ 溶液，产生白色沉淀的是 Na₂CO₃。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="310" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">NaHCO₃ 受热分解：放出的 CO₂ 使石灰水变浑浊</text><rect x="60" y="70" width="220" height="150" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="170" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">加热 NaHCO₃</text><rect x="90" y="125" width="160" height="55" rx="6" fill="#d98e3a"/><text x="170" y="158" font-size="13" fill="#ffffff" text-anchor="middle">放出 CO₂</text><line x1="285" y1="145" x2="375" y2="160" stroke="#d98e3a" stroke-width="3"/><polygon points="375,154 388,160 375,166" fill="#d98e3a"/><rect x="390" y="70" width="230" height="150" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="505" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">澄清石灰水</text><rect x="420" y="125" width="170" height="55" rx="6" fill="#b5651d"/><text x="505" y="158" font-size="13" fill="#ffffff" text-anchor="middle">变浑浊</text><text x="340" y="280" font-size="13" fill="#d98e3a" text-anchor="middle">2NaHCO₃ → Na₂CO₃ + H₂O + CO₂↑</text></svg>', caption: '图2　加热碳酸氢钠会分解放出二氧化碳，把气体通入澄清石灰水，石灰水变浑浊，这是检验 CO₂ 的经典现象。' },
      { type: 'warn', label: '易错·滴盐酸现象不同', text: '<strong>向两种盐的溶液里逐滴加入盐酸，现象不一样。</strong>Na₂CO₃ 溶液中逐滴加盐酸，先生成 NaHCO₃（无明显气泡），继续滴加才大量冒 CO₂；而 NaHCO₃ 溶液一遇盐酸立刻冒 CO₂。另外两者可相互转化：Na₂CO₃ 溶液中通入 CO₂ 可变成 NaHCO₃，NaHCO₃ 加热又变回 Na₂CO₃。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">滴加盐酸：Na₂CO₃ 与 NaHCO₃ 冒泡快慢不同</text><rect x="60" y="70" width="270" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="195" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">Na₂CO₃ 溶液</text><rect x="90" y="120" width="210" height="50" rx="6" fill="#d98e3a"/><text x="195" y="150" font-size="13" fill="#ffffff" text-anchor="middle">先无泡，后大量冒 CO₂</text><rect x="360" y="70" width="270" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="495" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">NaHCO₃ 溶液</text><rect x="390" y="120" width="210" height="50" rx="6" fill="#b5651d"/><text x="495" y="150" font-size="13" fill="#ffffff" text-anchor="middle">立即冒 CO₂ 气泡</text><text x="340" y="270" font-size="13" fill="#d98e3a" text-anchor="middle">滴入盐酸：NaHCO₃ 反应更剧烈</text></svg>', caption: '图3　同样滴加盐酸，碳酸氢钠溶液立刻冒出二氧化碳气泡，而碳酸钠溶液先无明显现象、继续滴加才大量冒气。' },
      { type: 'tip', label: '提示·三招鉴别二者', text: '鉴别 Na₂CO₃ 和 NaHCO₃ 有三条常用思路：<strong>第一，加热法</strong>，放 CO₂ 使石灰水变浑浊的是 NaHCO₃；<strong>第二，加 CaCl₂ 法</strong>，产生白色沉淀的是 Na₂CO₃；<strong>第三，滴加盐酸法</strong>，立刻冒泡的是 NaHCO₃。考试中最常考的是前两种。' },
      { type: 'example', label: '例题·相互转化', text: '下列转化中，能够实现的是？<br>A. Na₂CO₃ 加热 → NaHCO₃<br>B. NaHCO₃ 加热 → Na₂CO₃<br>C. Na₂CO₃ 加盐酸 → 不反应<br>D. NaHCO₃ 加 CaCl₂ → 白色沉淀<br><br><strong>解析</strong>：NaHCO₃ 受热分解 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂↑，所以加热可由 NaHCO₃ 得到 Na₂CO₃，B 正确。A 反了，Na₂CO₃ 加热不分解；C 错，Na₂CO₃ 与盐酸反应生成 CO₂；D 错，NaHCO₃ 与 CaCl₂ 一般不生成沉淀。故答案选 B。' }
    ],
    exercises: [
      { type: 'choice', question: '过氧化钠 Na₂O₂ 与水反应放出的气体是？', options: ['H₂', 'O₂', 'CO₂', 'Cl₂'], answer: 'O₂', explanation: '过氧化钠与水反应的化学方程式为 2Na₂O₂ + 2H₂O → 4NaOH + O₂↑，生成的气体是氧气 O₂。可用带火星的木条检验，木条会复燃。所以选 O₂。氢气是钠与水反应的产物，二氧化碳是 Na₂O₂ 与 CO₂ 反应的另一反应物而非放出的特征气体。' },
      { type: 'choice', question: '关于碳酸钠和碳酸氢钠，下列说法正确的是？', options: ['NaHCO₃ 受热不分解', 'Na₂CO₃ 受热易分解', 'NaHCO₃ 受热分解生成 CO₂', '二者都不与酸反应'], answer: 'NaHCO₃ 受热分解生成 CO₂', explanation: '碳酸氢钠 NaHCO₃ 热稳定性差，受热分解 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂↑，放出二氧化碳。而碳酸钠 Na₂CO₃ 加热很稳定、不易分解。两者都能与酸反应放出 CO₂。因此只有"NaHCO₃ 受热分解生成 CO₂"正确。' },
      { type: 'choice', question: '可用于潜水艇和呼吸面具中提供氧气的化合物是？', options: ['Na₂O', 'Na₂O₂', 'NaOH', 'Na₂CO₃'], answer: 'Na₂O₂', explanation: '过氧化钠 Na₂O₂ 能与人呼出的 CO₂ 反应：2Na₂O₂ + 2CO₂ → 2Na₂CO₃ + O₂↑，在消耗 CO₂ 的同时放出 O₂，因此被用作呼吸面具和潜水艇的供氧剂。Na₂O、NaOH、Na₂CO₃ 都没有这种供氧功能。故答案选 Na₂O₂。' },
      { type: 'fill', question: '过氧化钠与二氧化碳反应的化学方程式：2Na₂O₂ + 2CO₂ → ___ + O₂↑。', answer: '2Na₂CO₃', explanation: '过氧化钠与二氧化碳反应生成碳酸钠和氧气，配平后为 2Na₂O₂ + 2CO₂ → 2Na₂CO₃ + O₂↑。从钠原子守恒看，2 个 Na₂O₂ 含 4 个 Na，所以生成 2 个 Na₂CO₃；从氧和碳守恒也吻合，并放出 1 个 O₂。因此空格填 2Na₂CO₃。' },
      { type: 'fill', question: '加热下列固体，能使澄清石灰水变浑浊的是___（填 Na₂CO₃ 或 NaHCO₃）。', answer: 'NaHCO₃', explanation: '碳酸氢钠 NaHCO₃ 受热不稳定，分解放出二氧化碳：2Na₂CO₃ 不，应为 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂↑。生成的 CO₂ 通入澄清石灰水会使其变浑浊。而碳酸钠 Na₂CO₃ 加热不分解，不会产生这种气体。所以能使石灰水变浑浊的是 NaHCO₃。' }
    ]
  });
})();
