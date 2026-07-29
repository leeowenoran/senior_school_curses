/* 生物学 · 选择性必修2 生物与环境 · 第1章 · 课时：第2节 种群数量的变化 */
(function () {
  var v = gzGetVolume('biology', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u2',
    name: '第2节 种群数量的变化',
    chapter: '选择性必修2 生物与环境 · 第1章 种群及其动态',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、建构种群增长模型的方法' },
      { type: 'paragraph', text: '研究种群数量变化常借助<strong>数学模型</strong>，即用公式或曲线来描述、解释和预测种群数量的变化。建立模型的一般步骤是：观察现象并提出问题，提出合理的假设，用适当的数学形式表达，最后通过实验或观察检验修正。数学模型能帮助我们更直观地理解种群增长的规律。' },
      { type: 'list', items: ['观察现象、提出问题', '提出假设（如资源无限或资源有限）', '用数学形式表达（公式或曲线）', '检验和修正模型'] },
      { type: 'heading', text: '二、种群的「J」形增长' },
      { type: 'paragraph', text: '<strong>J 形增长</strong>发生在理想条件下：食物和空间充足、气候适宜、没有天敌和其他竞争。此时种群数量每年以一定的倍数增长。若初始数量为 N₀，第二年的数量是第一年的 λ 倍，则第 t 年的数量为 Nₜ = N₀ · λᵗ。因为 λ > 1，种群数量持续上升，画成曲线呈「J」字形。' },
      { type: 'keypoint', label: '重点·J 形增长公式', text: 'J 形增长的数学模型为 <strong>Nₜ = N₀ · λᵗ</strong>。其中 N₀ 是起始数量，λ 是每年（或单位时间）的增长倍数，t 是时间。当 λ > 1 时种群数量上升，λ = 1 时数量不变，0 < λ < 1 时数量下降。J 形增长的前提是环境资源无限、无环境阻力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">J 形增长曲线（理想条件下）</text><line x1="80" y1="280" x2="620" y2="280" stroke="#3f7d1e" stroke-width="2"/><line x1="80" y1="280" x2="80" y2="80" stroke="#3f7d1e" stroke-width="2"/><polyline points="80,275 160,250 240,210 320,160 400,120 480,100 560,92" fill="none" stroke="#5aa832" stroke-width="3"/><polygon points="540,98 575,92 560,110" fill="#3f7d1e"/><text x="620" y="300" font-size="12" fill="#2e3a22" text-anchor="end">时间</text><text x="70" y="90" font-size="12" fill="#2e3a22" text-anchor="end">数量</text><text x="340" y="320" font-size="13" fill="#2e3a22" text-anchor="middle">理想条件下无环境阻力，种群数量持续呈指数上升。</text></svg>', caption: '图1　J形增长在理想条件下呈指数上升，无环境容纳量限制。' },
      { type: 'example', label: '例题·J 形增长计算', text: '题目：某细菌初始数量为 100，在理想条件下每 20 分钟数量翻倍（λ = 2），经过 2 小时（即 6 个周期）后数量约为？<br>解析：按 Nₜ = N₀ · λᵗ，代入 N₀ = 100、λ = 2、t = 6，得 N = 100 × 2⁶ = 100 × 64 = 6400。说明在理想条件下细菌数量增长极快，呈 J 形上升。' },
      { type: 'heading', text: '三、种群的「S」形增长' },
      { type: 'paragraph', text: '在<strong>自然条件下</strong>，资源和空间都是有限的，种群增长会受到环境阻力。随着种群密度增大，种内斗争加剧，天敌增多，出生率下降、死亡率上升，种群数量趋于稳定。这种增长曲线呈「S」形，也叫逻辑斯谛增长。' },
      { type: 'paragraph', text: '当种群数量达到环境所能维持的<strong>最大数量</strong>时，这一数值称为<strong>环境容纳量</strong>，记作 K 值。种群数量在 K 值附近上下波动。在种群数量为 K/2 时，种群的增长速率最大；超过 K/2 后增长速率逐渐减小，接近 K 值时增长速率趋于 0。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">S 形增长曲线（自然条件下，受 K 值限制）</text><line x1="80" y1="280" x2="620" y2="280" stroke="#3f7d1e" stroke-width="2"/><line x1="80" y1="280" x2="80" y2="80" stroke="#3f7d1e" stroke-width="2"/><polyline points="80,275 150,250 230,200 310,150 390,125 470,118 550,116" fill="none" stroke="#5aa832" stroke-width="3"/><polygon points="530,116 565,115 550,128" fill="#3f7d1e"/><line x1="80" y1="116" x2="620" y2="116" stroke="#3f7d1e" stroke-width="1" stroke-dasharray="6,4"/><text x="560" y="108" font-size="13" fill="#3f7d1e" text-anchor="start">K 值</text><text x="310" y="138" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">K/2 增长最快</text><text x="340" y="320" font-size="13" fill="#2e3a22" text-anchor="middle">自然条件下种群数量趋于环境容纳量 K，并在其附近波动。</text></svg>', caption: '图2　S形增长受环境容纳量 K 限制，在 K/2 时增长速率最大。' },
      { type: 'warn', label: '易错·K 值与最大数量', text: '易错点：K 值是<strong>环境容纳量</strong>，即环境所能维持的种群最大数量，它不是固定不变的，会随环境变化而改变。当环境被破坏时 K 值下降，环境改善时 K 值上升。另外，种群实际数量可能在 K 值上下波动，并非永远恰好等于 K。不要把 K 值误认为种群数量的最大值上限。' },
      { type: 'heading', text: '四、K 值与环境的关系' },
      { type: 'paragraph', text: '同一种生物在不同环境条件下的 K 值往往不同。环境为种群提供的资源越丰富、生存条件越适宜，K 值就越大；反之则越小。人类活动（如植树造林、治理污染）能提高某些生物的 K 值，而过度开发会降低 K 值。' },
      { type: 'list', items: ['环境改善（如保护栖息地）会使 K 值增大', '环境破坏（如污染、砍伐）会使 K 值减小', 'K 值不是常数，会随环境动态调整'] },
      { type: 'tip', label: '提示·K/2 的实用意义', text: '记忆要点：K/2 是种群<strong>增长速率最大</strong>的点。对资源生物（鱼、畜），捕捞或出栏后让数量回到 K/2，种群恢复最快，可持续产量最高；对害虫，要尽量使其数量控制在 K/2 以下，使其增长缓慢、便于防治。' },
      { type: 'heading', text: '五、种群数量的波动' },
      { type: 'paragraph', text: '大多数种群的数量总是在波动中。自然界中，种群数量受气候、食物、天敌、传染病等因素影响，会在 K 值附近上下波动；在不利条件下种群数量可能急剧下降，甚至消亡。对于濒危物种，保护其栖息地、提高其 K 值，是保护工作的核心。' },
      { type: 'table', headers: ['比较项目', 'J 形增长', 'S 形增长'], rows: [['发生条件', '理想条件、资源无限', '自然条件、资源有限'], ['增长趋势', '持续指数上升', '趋于 K 值后波动'], ['有无 K 值', '无环境容纳量', '有环境容纳量 K'], ['曲线形状', 'J 字形', 'S 字形']] },
      { type: 'example', label: '例题·K 值与捕鱼', text: '题目：为持续获得最大鱼产量，每次捕捞后最应让池塘鱼群数量保持在？<br>解析：S 形增长中种群在 K/2 时增长速率最大。若捕捞后使鱼群数量维持在 K/2 左右，种群能以最快速度恢复，下次可再次获得高产。若留在接近 K 处则增长慢，若远低于 K/2 则恢复也慢。因此应维持在 K/2 左右。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">K 值与 K/2 在生产实际中的应用</text><rect x="60" y="80" width="260" height="140" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="190" y="118" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">资源利用</text><text x="190" y="146" font-size="12" fill="#2e3a22" text-anchor="middle">捕捞后使数量维持在 K/2</text><text x="190" y="170" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">种群增长最快</text><polygon points="321,150 358,138 358,162" fill="#3f7d1e"/><rect x="380" y="80" width="240" height="140" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="118" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">有害生物防治</text><text x="500" y="146" font-size="12" fill="#2e3a22" text-anchor="middle">尽量使其数量低于 K/2</text><text x="500" y="170" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">增长慢、易控制</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">合理利用 K/2 与 K 值，可实现资源的可持续利用与害虫的有效控制。</text></svg>', caption: '图3　捕捞后维持 K/2 可最快恢复，防治害虫应使其低于 K/2。' }
    ],
    exercises: [
      { type: 'choice', question: 'J 形增长曲线出现的前提条件是？', options: ['空间、食物充足且无敌害', '环境资源有限', '存在种内斗争', '种群数量已达 K 值'], answer: '空间、食物充足且无敌害', explanation: 'J 形增长发生在理想条件下，即食物和空间充足、气候适宜、没有天敌和其他竞争，此时环境阻力极小，种群数量每年以固定倍数增长。环境资源有限、存在种内斗争、数量达到 K 值都属于 S 形增长的条件或结果。因此选空间、食物充足且无敌害。' },
      { type: 'choice', question: '下列关于环境容纳量 K 的叙述，正确的是？', options: ['K 值随环境破坏而增大', 'K 值是种群的最大数量且固定不变', 'K 值是环境所能维持的种群最大数量', '种群数量永远达不到 K 值'], answer: 'K 值是环境所能维持的种群最大数量', explanation: '环境容纳量 K 是指在环境条件不受破坏的情况下，一定空间中所能维持的种群最大数量。K 值不是固定不变的，会随环境变化而调整，环境破坏时 K 值下降而非增大；种群数量通常在 K 值附近波动，并非永远达不到。因此正确选项是 K 值是环境所能维持的种群最大数量。' },
      { type: 'choice', question: '在渔业生产中，为持续获得最大产量，捕捞后最应使鱼群数量保持在？', options: ['接近 K 值', 'K/2 左右', '远低于 K/2', '略高于 K'], answer: 'K/2 左右', explanation: '在 S 形增长中，种群数量等于 K/2 时增长速率最大。捕捞后让鱼群数量回到 K/2 左右，种群能以最快速度恢复，从而在下一次捕捞时再次获得高产，实现可持续利用。留在接近 K 处或远低于 K/2 增长都较慢。因此选 K/2 左右。' },
      { type: 'fill', question: 'J 形增长的数学模型为 Nₜ = N₀ · ___ᵗ，其中 λ 为当年的增长倍数。', answer: 'λ', explanation: '在理想条件下种群数量按固定倍数增长，公式为 Nₜ = N₀ · λᵗ。N₀ 是起始数量，λ 是单位时间的增长倍数，t 是时间。当 λ 大于 1 时种群数量上升，等于 1 时不变，小于 1 时下降。因此空格应填 λ。' },
      { type: 'fill', question: '在 S 形增长中，种群增长速率在种群数量为___时达到最大。', answer: 'K/2', explanation: 'S 形增长受环境容纳量 K 限制。当种群数量较低时增长较慢，随着数量增加增长速率逐渐增大，在种群数量等于 K/2 时增长速率达到最大，之后又逐渐减小，接近 K 值时增长速率趋于 0。因此填空应为 K/2。' }
    ]
  });
})();
