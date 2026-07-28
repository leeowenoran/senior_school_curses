/* ============================================================
 * 高一化学 · 必修 第一册 · 第三章 铁 金属材料
 * 课时13：铁的重要化合物
 * 数据注入：chemistry.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u13',
    name: '铁的重要化合物',
    chapter: '必修 第一册 · 第三章 铁 金属材料',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、铁的三种氧化物' },
      { type: 'paragraph', text: '铁常见的氧化物有三种，它们颜色不同、铁的价态也不同，用途也各有侧重。氧化亚铁是黑色粉末；氧化铁是红棕色粉末，俗称"铁红"，常用作红色颜料和涂料；四氧化三铁也是黑色固体，因为有磁性又叫"磁性氧化铁"。' },
      { type: 'keypoint', label: '重点·三种铁的氧化物', text: '<strong>FeO：黑色，铁为 +2 价；Fe₂O₃：红棕色（铁红），铁为 +3 价，可作颜料；Fe₃O₄：黑色，铁同时有 +2 和 +3 两种价态，又称磁性氧化铁。</strong>记忆时抓"颜色 + 价态"两个关键词。' },
      { type: 'list', items: ['FeO：黑色固体，铁为 +2 价，碱性氧化物', 'Fe₂O₃：红棕色固体，俗称铁红，铁为 +3 价，可作红色颜料', 'Fe₃O₄：黑色固体，有磁性，铁含 +2 和 +3 两种价态'] },
      { type: 'table', headers: ['氧化物', '颜色', '铁价态', '水溶性', '与酸反应'], rows: [['FeO', '黑色', '+2', '不溶于水', '与酸反应生成 Fe²⁺ 盐'], ['Fe₂O₃', '红棕色（铁红）', '+3', '不溶于水', '与酸反应生成 Fe³⁺ 盐'], ['Fe₃O₄', '黑色（有磁性）', '+2 和 +3', '不溶于水', '与酸反应生成含 Fe²⁺、Fe³⁺ 的混合盐']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">三种铁的氧化物：颜色与铁价态对比</text><rect x="50" y="70" width="170" height="150" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="135" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">FeO</text><rect x="80" y="125" width="110" height="60" rx="6" fill="#4a3724"/><text x="135" y="161" font-size="13" fill="#ffffff" text-anchor="middle">黑色</text><text x="135" y="212" font-size="12" fill="#d98e3a" text-anchor="middle">铁 +2 价</text><rect x="255" y="70" width="170" height="150" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">Fe₂O₃</text><rect x="285" y="125" width="110" height="60" rx="6" fill="#b5651d"/><text x="340" y="161" font-size="13" fill="#ffffff" text-anchor="middle">红棕色</text><text x="340" y="212" font-size="12" fill="#d98e3a" text-anchor="middle">铁 +3 价</text><rect x="460" y="70" width="170" height="150" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="545" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">Fe₃O₄</text><rect x="490" y="125" width="110" height="60" rx="6" fill="#4a3724"/><text x="545" y="161" font-size="13" fill="#ffffff" text-anchor="middle">黑色有磁性</text><text x="545" y="212" font-size="12" fill="#d98e3a" text-anchor="middle">铁 +2、+3 价</text></svg>', caption: '图1　三种铁的氧化物颜色与铁的价态对比：FeO 黑（+2），Fe₂O₃ 红棕（+3，铁红），Fe₃O₄ 黑有磁性（+2、+3）。' },
      { type: 'heading', text: '二、氢氧化亚铁 Fe(OH)₂——极易被空气氧化' },
      { type: 'paragraph', text: '向含 Fe²⁺ 的溶液中滴加碱液，会立刻生成白色沉淀，这就是氢氧化亚铁。但它非常"娇气"，一接触到空气里的氧气，就会被慢慢氧化，颜色发生奇妙的变化：先变灰绿色，最后变成红褐色，那就是氢氧化铁了。' },
      { type: 'keypoint', label: '重点·Fe(OH)₂ 的变色与氧化', text: '<strong>制备：Fe²⁺ + 2OH⁻ → Fe(OH)₂↓（白色沉淀）。</strong><br><strong>氧化变色：4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃，现象为"白色 → 灰绿色 → 红褐色"。</strong>这正是检验 Fe²⁺ 的重要现象。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">Fe(OH)₂ 被空气氧化：白色 → 灰绿色 → 红褐色</text><rect x="50" y="70" width="170" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="135" y="100" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">刚生成</text><circle cx="135" cy="170" r="40" fill="#ffffff" stroke="#b5651d" stroke-width="2"/><text x="135" y="236" font-size="13" fill="#4a3724" text-anchor="middle">白色沉淀</text><rect x="255" y="70" width="170" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="100" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">接触空气</text><circle cx="340" cy="170" r="40" fill="#b5651d" opacity="0.55"/><text x="340" y="236" font-size="13" fill="#4a3724" text-anchor="middle">灰绿色</text><rect x="460" y="70" width="170" height="170" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="545" y="100" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">完全氧化</text><circle cx="545" cy="170" r="40" fill="#b5651d"/><text x="545" y="236" font-size="13" fill="#4a3724" text-anchor="middle">红褐色</text></svg>', caption: '图2　氢氧化亚铁白色沉淀被空气中氧气氧化，颜色由白变灰绿，最终变成红褐色的氢氧化铁。' },
      { type: 'heading', text: '三、氢氧化铁 Fe(OH)₃——红褐色沉淀' },
      { type: 'paragraph', text: '向含 Fe³⁺ 的溶液中滴加碱液，立刻生成红褐色沉淀，这就是氢氧化铁。它受热不稳定，加热会分解，变成红棕色的氧化铁，同时放出水蒸气。' },
      { type: 'list', items: ['制备：Fe³⁺ + 3OH⁻ → Fe(OH)₃↓，红褐色沉淀', '受热分解：2Fe(OH)₃ → Fe₂O₃ + 3H₂O（加热）', '氢氧化铁不溶于水，是红褐色絮状沉淀', '与酸反应：Fe(OH)₃ + 3H⁺ → Fe³⁺ + 3H₂O'] },
      { type: 'example', label: '例题·沉淀颜色判断', text: '向氯化亚铁 FeCl₂ 溶液中滴入氢氧化钠溶液，振荡后静置一段时间，能观察到的现象是？<br>A. 立即出现红褐色沉淀<br>B. 出现白色沉淀，并逐渐变成灰绿色，最后变为红褐色<br>C. 无明显现象<br>D. 出现蓝色沉淀<br><br><strong>解析</strong>：FeCl₂ 含 Fe²⁺，加 NaOH 先生成白色 Fe(OH)₂ 沉淀：Fe²⁺ + 2OH⁻ → Fe(OH)₂↓。该沉淀极易被空气氧化，颜色发生"白色 → 灰绿色 → 红褐色"的变化，最终变为红褐色的 Fe(OH)₃。所以 B 正确，A 是 Fe³⁺ 直接加碱的现象，C、D 都不符合。' },
      { type: 'warn', label: '易错·Fe(OH)₂ 的制备', text: '<strong>第一，Fe(OH)₂ 极易被空气中的氧气氧化，制备时必须隔绝空气。</strong>常用办法：用煮沸过并冷却的蒸馏水配制溶液（除去溶解氧），把滴管尖端插到液面以下再挤出碱液，减少与空气接触。<strong>第二，Fe₃O₄ 中的铁同时有 +2 和 +3 两种价态</strong>，可看作 FeO·Fe₂O₃，不要误以为只有一种价态。' },
      { type: 'heading', text: '四、两种氢氧化铁的制备对比' },
      { type: 'paragraph', text: '制取氢氧化亚铁和氢氧化铁，都是向对应的亚铁盐或铁盐溶液中加入碱（如 NaOH）。区别在于 Fe²⁺ 生成的是白色沉淀且极易氧化，Fe³⁺ 生成的是红褐色沉淀一步到位。掌握加碱这条通用路线，就能写出两类沉淀的制备方程式。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">加碱制备两种铁的氢氧化物</text><rect x="50" y="70" width="270" height="200" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="185" y="100" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">Fe²⁺ 溶液 + 碱</text><circle cx="185" cy="170" r="38" fill="#ffffff" stroke="#b5651d" stroke-width="2"/><text x="185" y="175" font-size="12" fill="#4a3724" text-anchor="middle">白色</text><text x="185" y="250" font-size="12" fill="#d98e3a" text-anchor="middle">Fe²⁺ + 2OH⁻ → Fe(OH)₂↓</text><rect x="360" y="70" width="270" height="200" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="495" y="100" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">Fe³⁺ 溶液 + 碱</text><circle cx="495" cy="170" r="38" fill="#b5651d"/><text x="495" y="175" font-size="12" fill="#ffffff" text-anchor="middle">红褐</text><text x="495" y="250" font-size="12" fill="#d98e3a" text-anchor="middle">Fe³⁺ + 3OH⁻ → Fe(OH)₃↓</text></svg>', caption: '图3　向 Fe²⁺ 溶液加碱得白色 Fe(OH)₂ 沉淀，向 Fe³⁺ 溶液加碱得红褐色 Fe(OH)₃ 沉淀。' },
      { type: 'tip', label: '提示·怎样保住白色沉淀', text: '想观察纯净的白色 Fe(OH)₂，关键在"隔氧"：<strong>把配制溶液的蒸馏水先煮沸再冷却，赶走溶解的氧气；碱液用滴管伸到液面以下再挤出；反应容器尽量装满、少留空气。</strong>做到这些，白色沉淀能保持得久一些，方便看清楚它的真实颜色。' }
    ],
    exercises: [
      { type: 'choice', question: '下列铁的氧化物中，呈红棕色且俗称"铁红"、可用作颜料的是？', options: ['FeO', 'Fe₂O₃', 'Fe₃O₄', 'Fe(OH)₃'], answer: 'Fe₂O₃', explanation: '三种铁的氧化物里，FeO 是黑色、铁为 +2 价；Fe₂O₃ 是红棕色固体，俗称"铁红"，常作红色颜料和涂料，铁为 +3 价；Fe₃O₄ 是黑色且有磁性，铁含 +2 和 +3 两种价态。Fe(OH)₃ 是红褐色沉淀但不是氧化物。因此"红棕色、铁红、颜料"对应 Fe₂O₃。' },
      { type: 'choice', question: '向 FeCl₂ 溶液中滴加 NaOH 溶液，观察到的现象是？', options: ['立即生成红褐色沉淀', '生成白色沉淀，逐渐变灰绿色最后变红褐色', '生成蓝色沉淀', '无明显变化'], answer: '生成白色沉淀，逐渐变灰绿色最后变红褐色', explanation: 'FeCl₂ 提供 Fe²⁺，加 NaOH 先生成白色 Fe(OH)₂ 沉淀；但 Fe(OH)₂ 极易被空气氧化，颜色由白变灰绿，最终变成红褐色的 Fe(OH)₃。所以正确现象是"白色→灰绿色→红褐色"。立即红褐色是 Fe³⁺ 直接加碱的情况，蓝色沉淀和无明显变化都不对。' },
      { type: 'choice', question: '关于 Fe₃O₄ 的说法，正确的是？', options: ['其中铁只有 +2 价', '其中铁只有 +3 价', '其中铁同时有 +2 和 +3 两种价态', '它不溶于酸'], answer: '其中铁同时有 +2 和 +3 两种价态', explanation: 'Fe₃O₄ 可以看作 FeO·Fe₂O₃，其中的铁同时含有 +2 价和 +3 价两种价态，因此 C 正确。A、B 都只说了一半，是错误的；Fe₃O₄ 是碱性氧化物类，能与酸反应生成含 Fe²⁺、Fe³⁺ 的混合盐，并非不溶于酸。' },
      { type: 'fill', question: '氢氧化铁受热分解的化学方程式为：2Fe(OH)₃ → ___ + 3H₂O。', answer: 'Fe₂O₃', explanation: '氢氧化铁受热不稳定，会分解生成红棕色的氧化铁和水，配平后为 2Fe(OH)₃ → Fe₂O₃ + 3H₂O。按铁原子守恒：左边 2 个 Fe，右边也应为 1 个 Fe₂O₃；按氧和氢可验证生成 3 个 H₂O，所以空格填 Fe₂O₃。' },
      { type: 'fill', question: '制备 Fe(OH)₂ 时，为减缓其被空气氧化，常在___（填一种操作）条件下进行，例如将滴管尖端插入液面以下再挤出碱液。', answer: '隔绝空气|除氧', explanation: 'Fe(OH)₂ 极易被空气中的氧气氧化而变色的，所以制备时要尽量隔绝空气：用煮沸并冷却的蒸馏水配制溶液以除去溶解氧，把滴管尖端插到液面以下再挤出碱液，减少与空气接触。这样可以较长时间观察到白色沉淀。填"隔绝空气"或"除氧"均可。' }
    ]
  });
})();
