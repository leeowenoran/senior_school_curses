/* ============================================================
 * 高一化学 · 必修 第一册 · 第二章 海水中的重要元素——钠和氯
 * 课时6：钠单质
 * 数据注入：chemistry.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u6',
    name: '钠单质',
    chapter: '必修 第一册 · 第二章 海水中的重要元素——钠和氯',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、金属钠长什么样' },
      { type: 'paragraph', text: '钠是一种非常活泼的金属，在自然界里从来不以单质形式存在，总是藏在化合物中。我们见到的金属钠通常是保存在煤油里的小块固体。它刚切开时闪着银白色的光泽，质地很软，用小刀就能轻松切开，就像切一块软肥皂。' },
      { type: 'keypoint', label: '重点·钠的物理性质', text: '<strong>钠是银白色、有金属光泽的固体，质地软，密度比水小（能浮在水上），熔点比较低（不到 100℃），是热和电的良导体。</strong>记住"软、轻、低熔点"三个字，就能把钠的物理性质串起来。' },
      { type: 'list', items: ['颜色与光泽：新切面银白色、有金属光泽', '硬度小：能用小刀切开', '密度比水小：会浮在水面上', '熔点低：与水反应放出的热就足以让它熔化'] },
      { type: 'heading', text: '二、钠和空气里的氧气反应' },
      { type: 'paragraph', text: '钠虽然"怕"氧气，但和氧气的反应却随温度不同而产生完全不同的产物。在常温下，钠表面慢慢被氧化，失去光泽变暗；如果加热，反应剧烈得多，会生成另一种物质。' },
      { type: 'keypoint', label: '重点·与 O₂ 的两种产物', text: '<strong>常温：4Na + O₂ → 2Na₂O（氧化钠，白色固体）。</strong><br><strong>加热：2Na + O₂ → Na₂O₂（过氧化钠，淡黄色固体）。</strong><br>同样都是钠和氧气，温度不同，生成的化合物就不同，所以书写方程式时条件一定要写清楚。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">钠的切面在空气中慢慢变暗（被氧化成 Na₂O）</text><rect x="60" y="80" width="230" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="175" y="120" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">新切的钠</text><rect x="90" y="140" width="170" height="60" rx="6" fill="#d98e3a"/><text x="175" y="177" font-size="14" fill="#ffffff" text-anchor="middle">银白色有光泽</text><text x="175" y="260" font-size="12" fill="#d98e3a" text-anchor="middle">4Na + O₂ → 2Na₂O</text><line x1="295" y1="160" x2="385" y2="160" stroke="#d98e3a" stroke-width="3"/><polygon points="385,154 398,160 385,166" fill="#d98e3a"/><text x="340" y="148" font-size="12" fill="#4a3724" text-anchor="middle">暴露空气</text><rect x="400" y="80" width="230" height="160" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="515" y="120" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">一段时间后</text><rect x="430" y="140" width="170" height="60" rx="6" fill="#b5651d"/><text x="515" y="177" font-size="14" fill="#ffffff" text-anchor="middle">表面变暗发灰</text><text x="515" y="260" font-size="12" fill="#d98e3a" text-anchor="middle">生成白色的 Na₂O</text></svg>', caption: '图1　钠在常温下被空气中的氧气缓慢氧化，切面从银白色逐渐变暗，生成白色的氧化钠 Na₂O。' },
      { type: 'table', headers: ['反应条件', '化学方程式', '生成物', '颜色与状态'], rows: [['常温', '4Na + O₂ → 2Na₂O', '氧化钠 Na₂O', '白色固体'], ['加热', '2Na + O₂ → Na₂O₂', '过氧化钠 Na₂O₂', '淡黄色固体']] },
      { type: 'heading', text: '三、钠和水反应——浮熔游响红' },
      { type: 'paragraph', text: '把一小块钠丢进水里，会发生一连串非常戏剧性的现象。化学上用五个字概括：浮、熔、游、响、红。每一个字都对应一个道理，理解了这五个字，就等于掌握了钠与水反应的全部关键。' },
      { type: 'keypoint', label: '重点·与水反应方程式', text: '<strong>2Na + 2H₂O → 2NaOH + H₂↑</strong><br>反应生成氢氧化钠和氢气。因为生成了碱（NaOH），所以反应后的溶液能让酚酞变红；因为生成了氢气，所以会听到响声并看到气体推动钠块游动。' },
      { type: 'list', items: ['浮：钠密度比水小，所以浮在水面上', '熔：反应放热，使熔点低的钠熔成闪亮的小球', '游：生成的氢气推动钠球在水面四处游动', '响：氢气燃烧或逸出时发出嘶嘶声或爆鸣声', '红：生成的 NaOH 使酚酞溶液变红'] },
      { type: 'example', label: '例题·现象解释', text: '将一小块钠投入滴有酚酞的水中，能观察到钠熔成小球并在水面游动，溶液变红。下列说法正确的是？<br>A. 溶液变红说明生成了酸<br>B. 钠熔成小球说明钠的熔点高<br>C. 溶液变红是因为生成了 NaOH<br>D. 钠浮在水面说明钠密度比水大<br><br><strong>解析</strong>：钠与水反应 2Na + 2H₂O → 2NaOH + H₂↑，生成的 NaOH 是碱，能使酚酞变红，所以 C 正确。A 错，变红说明生成的是碱不是酸；B 错，能熔成小球恰恰说明钠熔点低、反应放热；D 错，钠浮在水面恰恰说明它的密度比水小。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">钠与水反应：浮、熔、游、响、红</text><rect x="90" y="70" width="500" height="180" rx="12" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="100" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">水（滴有酚酞）</text><circle cx="340" cy="160" r="26" fill="#d98e3a"/><text x="340" y="165" font-size="13" fill="#ffffff" text-anchor="middle">Na</text><text x="340" y="210" font-size="13" fill="#d98e3a" text-anchor="middle">熔成小球、四处游动</text><text x="180" y="285" font-size="13" fill="#4a3724" text-anchor="middle">现象：浮熔游响</text><text x="500" y="285" font-size="13" fill="#4a3724" text-anchor="middle">溶液变红（生成 NaOH）</text><text x="340" y="308" font-size="12" fill="#d98e3a" text-anchor="middle">2Na + 2H₂O → 2NaOH + H₂↑</text></svg>', caption: '图2　钠投入水中后浮在液面、熔成小球、四处游动并发出响声，生成的 NaOH 使含酚酞的水变红。' },
      { type: 'heading', text: '四、钠怎么保存' },
      { type: 'paragraph', text: '钠既会和空气中的氧气反应，又会和水剧烈反应，所以不能敞口放在空气里，更不能沾水。实验室里通常把它浸在煤油或者石蜡油中，让钠与空气、水分隔开。取用钠时要用镊子夹，用滤纸吸干表面的煤油后再切。' },
      { type: 'list', items: ['保存在煤油或石蜡油中，隔绝空气和水分', '取用时用镊子夹取，滤纸吸干表面油再切', '切下的碎钠不能乱扔，要放回原瓶', '剩余钠块必须及时放回煤油，不能暴露在空气中'] },
      { type: 'warn', label: '易错·露置与着火', text: '<strong>第一，钠露置在空气中会逐步变质</strong>：银白色 Na → 变暗生成 Na₂O → 吸水生成 NaOH → 潮解 → 吸收 CO₂ 变成 Na₂CO₃，最终不再是金属钠。<strong>第二，钠着火绝对不能用水或二氧化碳灭火器</strong>，因为钠会与水剧烈反应放出氢气、能在二氧化碳中继续燃烧，正确做法是盖干沙土或专用干粉灭火。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">加热时钠在氧气中燃烧生成淡黄色 Na₂O₂</text><rect x="60" y="80" width="240" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="180" y="120" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">坩埚中的钠</text><rect x="90" y="145" width="180" height="60" rx="6" fill="#d98e3a"/><text x="180" y="182" font-size="14" fill="#ffffff" text-anchor="middle">受热熔化成小球</text><line x1="305" y1="165" x2="385" y2="165" stroke="#d98e3a" stroke-width="3"/><polygon points="385,159 398,165 385,171" fill="#d98e3a"/><text x="345" y="153" font-size="12" fill="#4a3724" text-anchor="middle">加热</text><rect x="400" y="80" width="240" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="520" y="120" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">燃烧产物</text><rect x="430" y="145" width="180" height="60" rx="6" fill="#b5651d"/><text x="520" y="182" font-size="14" fill="#ffffff" text-anchor="middle">淡黄色固体 Na₂O₂</text><text x="340" y="290" font-size="13" fill="#d98e3a" text-anchor="middle">2Na + O₂ → Na₂O₂（加热）</text></svg>', caption: '图3　钠在加热条件下与氧气剧烈反应，火焰呈黄色，生成淡黄色的过氧化钠 Na₂O₂。' },
      { type: 'tip', label: '提示·钠着火怎么办', text: '记住一个口诀：<strong>钠火不用水，也不靠二氧化碳，盖沙最稳妥。</strong>因为钠遇水会放出易燃易爆的氢气，而钠在二氧化碳里仍能燃烧。所以实验室常备干燥沙土或专用干粉，着火时直接覆盖隔绝空气即可。' },
      { type: 'example', label: '例题·保存选择', text: '实验室中金属钠应当怎样保存？<br>A. 保存在水中　B. 保存在煤油中　C. 敞口放在空气中　D. 保存在酒精中<br><br><strong>解析</strong>：钠会与水剧烈反应，所以不能放水里，A 错；钠还会被空气中的氧气氧化，不能敞口放置，C 错；酒精含水且也能与钠反应，D 不合适。正确做法是把钠浸在<strong>煤油</strong>里，利用煤油隔绝空气和水分，所以选 B。' }
    ],
    exercises: [
      { type: 'choice', question: '金属钠通常保存在下列哪种物质中？', options: ['水', '煤油', '酒精', '盐酸'], answer: '煤油', explanation: '钠的化学性质非常活泼，会与水剧烈反应生成 NaOH 和 H₂，也会和空气中的氧气反应而变质。实验室把它浸在煤油中，利用煤油把钠与空气和水分隔开。水、盐酸都不能保存钠，酒精含水且也能反应，因此选煤油。' },
      { type: 'choice', question: '把一小块钠投入水中，下列现象中不会出现的是？', options: ['钠浮在水面上', '钠熔成闪亮小球', '溶液变红', '钠沉入水底'], answer: '钠沉入水底', explanation: '钠的密度比水小，所以会浮在水面上而不是沉底，因此"钠沉入水底"不会出现。钠与水反应放热使其熔点低而熔成小球，生成 H₂ 推动它游动并发出响声，生成的 NaOH 使酚酞变红。综上只有"沉入水底"是错误描述。' },
      { type: 'choice', question: '钠在空气中加热，主要生成的产物是？', options: ['Na₂O（白色）', 'Na₂O₂（淡黄色）', 'NaOH', 'NaCl'], answer: 'Na₂O₂（淡黄色）', explanation: '钠与氧气的反应产物取决于条件：常温时生成白色的氧化钠 Na₂O；加热（或点燃）时生成淡黄色的过氧化钠 Na₂O₂。题目明确说"加热"，所以主要产物是 Na₂O₂。NaOH 和 NaCl 都不是钠与氧气直接反应的产物。' },
      { type: 'fill', question: '钠与水反应的化学方程式为：2Na + 2H₂O → 2NaOH + ___↑。', answer: 'H₂', explanation: '钠与水反应生成氢氧化钠和氢气，配平后为 2Na + 2H₂O → 2NaOH + H₂↑。氢原子守恒：左边 4 个 H，右边 2 个 NaOH 含 2 个 H，剩余 2 个 H 组成 1 个 H₂ 分子，以气体形式放出，所以空格填 H₂。' },
      { type: 'fill', question: '钠着火时不能用___灭火（填一种常见灭火剂），因为钠会与之反应或继续燃烧，应使用干沙土覆盖。', answer: '水|二氧化碳|CO₂', explanation: '钠着火时不能用水，因为钠与水剧烈反应放出易燃易爆的氢气；也不能用二氧化碳灭火器，因为钠在二氧化碳中仍能继续燃烧。正确的灭火方法是用干燥沙土覆盖，隔绝空气使火熄灭。因此这里可填水或二氧化碳（CO₂）。' }
    ]
  });
})();
