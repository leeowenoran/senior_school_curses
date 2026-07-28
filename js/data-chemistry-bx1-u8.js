/* ============================================================
 * 高一化学 · 必修 第一册 · 第二章 海水中的重要元素——钠和氯
 * 课时8：氯气的性质
 * 数据注入：chemistry.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u8',
    name: '氯气的性质',
    chapter: '必修 第一册 · 第二章 海水中的重要元素——钠和氯',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、氯气的物理性质' },
      { type: 'paragraph', text: '氯气在常温常压下是黄绿色的气体，有强烈的刺激性气味，有毒，吸入会损伤呼吸道。它的密度比空气大，能溶于水（体积比大约 1 份氯气溶 2 份水），还容易液化成液氯。因为有毒又有颜色，氯气是高中最先认真学的"黄绿色危险品"。' },
      { type: 'keypoint', label: '重点·物理性质五要点', text: '<strong>氯气 Cl₂：黄绿色、有刺激性气味、有毒、密度比空气大、可溶于水且易液化。</strong>记忆口诀："黄绿刺毒重，能溶易液化"。实验室闻氯气要用扇闻法，绝不能猛吸。' },
      { type: 'list', items: ['颜色：黄绿色气体', '气味：刺激性气味，有毒', '密度：比空气大，可用向上排空气法收集', '溶解性：能溶于水，体积比约 1∶2', '状态：易液化，加压或降温可得液氯'] },
      { type: 'heading', text: '二、氯气与金属、非金属反应' },
      { type: 'paragraph', text: '氯气的化学性质很活泼，几乎能和所有金属反应，也能和一些非金属反应。它和金属相遇时常生成对应的氯化物，并伴随明显的"烟"（固体小颗粒分散在空气中）。不同金属反应，烟的颜色还不一样。' },
      { type: 'keypoint', label: '重点·与金属、氢气', text: '<strong>与钠：2Na + Cl₂ → 2NaCl（产生白色烟）。</strong><br><strong>与铜：Cu + Cl₂ → CuCl₂（产生棕黄色烟）。</strong><br><strong>与铁：2Fe + 3Cl₂ → 2FeCl₃（产生棕褐色烟）。</strong><br><strong>与氢：H₂ + Cl₂ → 2HCl（点燃苍白色火焰；光照会爆炸）。</strong>' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="310" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">氯气与金属反应产生不同颜色的烟</text><rect x="50" y="70" width="180" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="140" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">钠 + Cl₂</text><rect x="80" y="125" width="120" height="55" rx="6" fill="#ffffff" stroke="#b5651d" stroke-width="1"/><text x="140" y="158" font-size="13" fill="#4a3724" text-anchor="middle">白色烟 NaCl</text><rect x="250" y="70" width="180" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">铜 + Cl₂</text><rect x="280" y="125" width="120" height="55" rx="6" fill="#d98e3a"/><text x="340" y="158" font-size="13" fill="#ffffff" text-anchor="middle">棕黄烟 CuCl₂</text><rect x="450" y="70" width="180" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="540" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">铁 + Cl₂</text><rect x="480" y="125" width="120" height="55" rx="6" fill="#b5651d"/><text x="540" y="158" font-size="13" fill="#ffffff" text-anchor="middle">棕褐烟 FeCl₃</text><text x="340" y="285" font-size="13" fill="#d98e3a" text-anchor="middle">Cl₂ 把金属氧化成高价氯化物</text></svg>', caption: '图1　氯气与钠、铜、铁反应分别产生白、棕黄、棕褐色的烟，生成对应的氯化物。' },
      { type: 'table', headers: ['反应物', '化学方程式', '主要现象', '产物颜色'], rows: [['钠 Na', '2Na + Cl₂ → 2NaCl', '产生白烟', '白色 NaCl'], ['铜 Cu', 'Cu + Cl₂ → CuCl₂', '产生棕黄色烟', '棕黄 CuCl₂'], ['铁 Fe', '2Fe + 3Cl₂ → 2FeCl₃', '产生棕褐色烟', '棕褐 FeCl₃'], ['氢气 H₂', 'H₂ + Cl₂ → 2HCl', '苍白色火焰（光照爆炸）', '无色 HCl']] },
      { type: 'heading', text: '三、氯气与水反应——氯水与漂白' },
      { type: 'paragraph', text: '氯气溶于水得到的溶液叫氯水。氯水里并不是简单的"Cl₂ 加水"，而是发生了可逆反应：一部分氯气与水生成盐酸和次氯酸。次氯酸 HClO 才是真正的"漂白主角"，它能把有色物质氧化褪色，还能杀菌消毒。' },
      { type: 'keypoint', label: '重点·Cl₂ 与水', text: '<strong>Cl₂ + H₂O ⇌ HCl + HClO</strong><br>氯水中有多种成分：Cl₂、H₂O、HClO、H⁺、Cl⁻、ClO⁻、OH⁻（少量）。其中 <strong>HClO（次氯酸）具有强氧化性和漂白性</strong>，能使有色布条、品红等褪色，也能杀灭细菌。' },
      { type: 'list', items: ['HClO 有强氧化性，可作漂白剂和杀菌剂', 'HClO 是弱酸，酸性比碳酸还弱', 'HClO 不稳定，见光易分解：2HClO → 2HCl + O₂↑', '干燥氯气本身没有漂白性，漂白靠的是 HClO'] },
      { type: 'example', label: '例题·氯水漂白', text: '将干燥的氯气通入放有干燥有色布条的集气瓶，布条不褪色；再往瓶中加水，布条逐渐褪色。这说明？<br>A. 氯气本身有漂白性<br>B. 水有漂白性<br>C. 起漂白作用的是 HClO<br>D. 布条质量不好<br><br><strong>解析</strong>：干燥氯气不能使干燥布条褪色，说明氯气本身没有漂白性，A 错；加水后布条褪色，是因为 Cl₂ 与水反应生成了 HClO，真正起漂白作用的是 HClO，C 正确。水本身没有漂白性，B 错。因此选 C。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">氯水中的 HClO 使有色布条褪色</text><rect x="60" y="70" width="260" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="190" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">干燥 Cl₂</text><rect x="100" y="120" width="120" height="55" rx="6" fill="#d98e3a"/><text x="160" y="153" font-size="13" fill="#ffffff" text-anchor="middle">布条不褪色</text><rect x="360" y="70" width="260" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="490" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">Cl₂ + 水</text><rect x="400" y="120" width="180" height="55" rx="6" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="490" y="153" font-size="13" fill="#4a3724" text-anchor="middle">布条褪色（HClO）</text><text x="340" y="272" font-size="13" fill="#d98e3a" text-anchor="middle">Cl₂ + H₂O ⇌ HCl + HClO</text></svg>', caption: '图2　干燥的氯气不能漂白干燥布条；溶于水生成 HClO 后，HClO 才发挥漂白作用使布条褪色。' },
      { type: 'heading', text: '四、氯气与碱反应——消毒液与漂白粉' },
      { type: 'paragraph', text: '氯气虽有毒，但和碱反应后得到的产物却很有用。工业上让氯气通入氢氧化钠溶液，得到"84 消毒液"的有效成分；通入石灰乳，则制得常用的漂白粉。这类反应的本质都是氯气在碱性条件下发生歧化。' },
      { type: 'keypoint', label: '重点·与碱的方程式', text: '<strong>与 NaOH：Cl₂ + 2NaOH → NaCl + NaClO + H₂O（84 消毒液原理）。</strong><br><strong>与石灰乳：2Cl₂ + 2Ca(OH)₂ → CaCl₂ + Ca(ClO)₂ + 2H₂O（漂白粉原理）。</strong><br>漂白粉的有效成分是 Ca(ClO)₂，使用时遇酸或 CO₂ 放出 HClO 才发挥漂白作用。' },
      { type: 'list', items: ['84 消毒液有效成分：NaClO（次氯酸钠）', '漂白粉有效成分：Ca(ClO)₂（次氯酸钙）', '漂白粉使用时要加酸或接触空气中 CO₂ 才放出 HClO', '漂白粉久置会失效：Ca(ClO)₂ + CO₂ + H₂O → CaCO₃ + 2HClO'] },
      { type: 'warn', label: '易错·Cl₂ 有毒与干燥氯气不漂白', text: '<strong>第一，干燥氯气没有漂白性，只有溶于水生成的 HClO 才漂白</strong>，别把"氯水漂白"说成"氯气漂白"。<strong>第二，氯气有毒</strong>，泄漏时要用碱性物质（如石灰水、肥皂水）处理，因为 Cl₂ 能被碱吸收：Cl₂ + 2NaOH → NaCl + NaClO + H₂O。实验室多余氯气必须尾气吸收，不能直排空气。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">氯气与 NaOH 反应制得 84 消毒液（NaClO）</text><rect x="60" y="70" width="240" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">Cl₂ + NaOH 溶液</text><rect x="90" y="125" width="180" height="55" rx="6" fill="#d98e3a"/><text x="180" y="158" font-size="13" fill="#ffffff" text-anchor="middle">生成 NaClO</text><line x1="305" y1="150" x2="385" y2="150" stroke="#d98e3a" stroke-width="3"/><polygon points="385,144 398,150 385,156" fill="#d98e3a"/><rect x="400" y="70" width="240" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="520" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">84 消毒液</text><rect x="430" y="125" width="180" height="55" rx="6" fill="#b5651d"/><text x="520" y="158" font-size="13" fill="#ffffff" text-anchor="middle">有效成分 NaClO</text><text x="340" y="270" font-size="13" fill="#d98e3a" text-anchor="middle">Cl₂ + 2NaOH → NaCl + NaClO + H₂O</text></svg>', caption: '图3　氯气通入氢氧化钠溶液生成次氯酸钠 NaClO，这就是家用 84 消毒液的有效成分。' },
      { type: 'tip', label: '提示·Cl₂ 泄漏如何自救', text: '由于氯气密度比空气大且能被碱吸收，一旦发生泄漏：<strong>应逆风往高处撤离</strong>，并用蘸有肥皂水或石灰水的毛巾捂住口鼻；消防上常用大量稀 NaOH 溶液或石灰水喷雾吸收空气中的氯气。记住"往高处、用碱吸"六个字。' },
      { type: 'example', label: '例题·漂白粉', text: '关于漂白粉的说法，正确的是？<br>A. 漂白粉的有效成分是 CaCl₂<br>B. 漂白粉的有效成分是 Ca(ClO)₂<br>C. 漂白粉遇水立刻大量漂白，无需其他条件<br>D. 漂白粉不会失效<br><br><strong>解析</strong>：漂白粉由 Cl₂ 与石灰乳反应制得，主要含 CaCl₂ 和 Ca(ClO)₂，其中真正起漂白作用的有效成分是 Ca(ClO)₂，所以 B 正确、A 错。Ca(ClO)₂ 要遇酸或空气中的 CO₂ 放出 HClO 才发挥漂白作用，并非遇水立刻大量漂白，C 错。漂白粉久置会与 CO₂、水反应生成 HClO，HClO 分解而失效，D 错。故选 B。' }
    ],
    exercises: [
      { type: 'choice', question: '常温常压下，氯气的颜色是？', options: ['无色', '黄绿色', '红棕色', '淡蓝色'], answer: '黄绿色', explanation: '氯气 Cl₂ 在常温常压下是黄绿色气体，有刺激性气味且有毒，这是它的标志性外观。红棕色是二氧化氮 NO₂，淡蓝色常见于液态氧或臭氧，无色则不是氯气。因此选黄绿色。' },
      { type: 'choice', question: '下列物质中，真正具有漂白作用的是？', options: ['Cl₂', 'HCl', 'HClO', 'NaCl'], answer: 'HClO', explanation: '干燥的氯气本身没有漂白性；盐酸 HCl、氯化钠 NaCl 都没有漂白性。真正起漂白作用的是次氯酸 HClO，它有强氧化性，能把有色物质氧化成无色物质，也能杀菌消毒。氯水之所以能漂白，正是因为溶在水中的部分 Cl₂ 转化成了 HClO。故答案选 HClO。' },
      { type: 'choice', question: '氯气与氢氧化钠溶液反应的产物中，不含下列哪一种？', options: ['NaCl', 'NaClO', 'H₂O', 'Ca(ClO)₂'], answer: 'Ca(ClO)₂', explanation: '氯气与氢氧化钠反应：Cl₂ + 2NaOH → NaCl + NaClO + H₂O，产物是氯化钠、次氯酸钠和水，其中有效成分是 NaClO（84 消毒液）。Ca(ClO)₂ 是氯气与石灰乳反应制漂白粉时的产物，不是与 NaOH 反应的产物，因此答案选 Ca(ClO)₂。' },
      { type: 'fill', question: '氯气与铁反应的化学方程式：2Fe + 3Cl₂ → 2___。', answer: 'FeCl₃', explanation: '氯气氧化性强，能把铁氧化到 +3 价，生成棕褐色的三氯化铁，配平后为 2Fe + 3Cl₂ → 2FeCl₃。注意氯气和铁反应得到的是 FeCl₃ 而不是 FeCl₂，因为 Cl₂ 的氧化性足够把 Fe 氧化到最高价 +3。所以空格填 FeCl₃。' },
      { type: 'fill', question: '工业制漂白粉的反应：2Cl₂ + 2Ca(OH)₂ → CaCl₂ + ___ + 2H₂O。', answer: 'Ca(ClO)₂', explanation: '氯气与石灰乳发生歧化反应，生成氯化钙、次氯酸钙和水，配平后为 2Cl₂ + 2Ca(OH)₂ → CaCl₂ + Ca(ClO)₂ + 2H₂O。其中次氯酸钙 Ca(ClO)₂ 是漂白粉的有效成分，使用时遇酸或 CO₂ 放出 HClO 发挥漂白作用。故空格填 Ca(ClO)₂。' }
    ]
  });
})();
