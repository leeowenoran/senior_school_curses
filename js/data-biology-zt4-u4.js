/* 生物学 · 高三复习 · 生物与环境 · 第1章 · 课时：种群数量的变化 */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u4',
    name: '第2节 种群数量的变化',
    chapter: '生物与环境 · 第1章 种群及其动态',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、种群数量增长的两种数学模型' },
      { type: 'paragraph', text: '研究种群数量变化常用数学模型描述，主要分为两种理想化的增长曲线：J 形增长和 S 形增长。两者成立的前提条件不同，反映种群在理想或有限环境下的数量动态。' },
      { type: 'list', items: [
        'J 形增长：理想条件，资源无限、无天敌、无疾病、无竞争。',
        'S 形增长：自然条件，资源和空间有限，存在环境阻力。',
        '两种模型都关注“数量随时间如何变化”这一核心问题。'
      ] },
      { type: 'heading', text: '二、J 形增长' },
      { type: 'paragraph', text: 'J 形增长发生在食物和空间条件充裕、气候适宜、没有天敌的理想环境中。种群数量以恒定倍数连续增长，在坐标图上呈“J”字形。' },
      { type: 'keypoint', text: 'J 形增长公式：Nₜ = N₀ × λᵗ。Nₜ 为 t 年后种群数量，N₀ 为起始数量，λ 为年增长倍数，t 为时间。该公式表示种群数量呈指数式增长。' },
      { type: 'paragraph', text: 'λ 称为周限增长率，含义是：λ = 该年种群数量 ÷ 上一年种群数量。当 λ > 1 时种群增长，λ = 1 时种群稳定，0 < λ < 1 时种群下降。λ 越大于1，增长越快。' },
      { type: 'tip', text: '重要辨析：λ 不是增长率。λ 是“当年数量与上一年数量的比值”，而增长率 =（当年数量 − 上一年数量）÷ 上一年数量 = λ − 1。J 形增长中 λ 恒定，增长率也恒定。' },
      { type: 'heading', text: '三、S 形增长' },
      { type: 'paragraph', text: 'S 形增长发生在自然条件中，由于资源和空间有限，种群密度增大时种内竞争加剧，增长率逐渐下降，数量最终趋于稳定。曲线呈“S”字形。' },
      { type: 'keypoint', text: 'K 值即环境容纳量：在环境条件不受破坏的情况下，一定空间中所能维持的种群最大数量。K 值不是固定不变的，会随环境条件的改善或恶化而升降。' },
      { type: 'paragraph', text: 'K/2 是种群数量达到 K 值一半时的点。在 K/2 处种群增长速率最大，是种群增长最快的阶段。超过 K/2 后增长速率逐渐减小，接近 K 值时增长速率趋于 0。' },
      { type: 'list', items: [
        '潜伏期（开始期）：种群数量少，增长缓慢。',
        '加速期：数量增多，增长速率上升。',
        '减速期：接近 K/2 后资源受限，增长速率下降。',
        '稳定期：数量在 K 值附近波动，增长速率接近 0。'
      ] },
      { type: 'heading', text: '四、K 值与 K/2 的实际应用' },
      { type: 'table', caption: 'J 形增长与 S 形增长的对比', headers: ['比较项目', 'J 形增长', 'S 形增长'], rows: [
        ['前提条件', '理想环境、资源无限', '自然条件、资源有限'],
        ['增长曲线', 'J 字形', 'S 字形'],
        ['有无 K 值', '无 K 值', '有 K 值（环境容纳量）'],
        ['增长速率', '保持不变', '先升后降，K/2 最大'],
        ['典型公式', 'Nₜ = N₀ × λᵗ', '无单一公式，受 K 限制']
      ] },
      { type: 'example', text: '例题：渔业捕捞中，为获得持续最大产量，应使捕捞后的剩余量维持在 K/2 附近，因为此处增长速率最大，种群恢复最快；而对害虫防治，则应在数量达到 K/2 之前进行，防止其进入快速增长期。' },
      { type: 'warn', text: '易错辨析：K 值不是种群数量的绝对上限，环境改变时 K 值会变化；也不能把 K 值等同于“种群数量达到过的最大值”。K/2 是增长速率最大的点，不是数量最大的点。' },
      { type: 'svg', caption: 'J 形增长曲线：在理想条件下 Nₜ = N₀ × λᵗ，种群数量呈指数式上升，无环境阻力，曲线形如字母 J。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">J 形增长曲线</text><line x1="80" y1="300" x2="620" y2="300" stroke="#3f7d1e" stroke-width="2"/><line x1="80" y1="300" x2="80" y2="60" stroke="#3f7d1e" stroke-width="2"/><text x="60" y="320" font-size="13" fill="#2e3a22" font-family="sans-serif">时间</text><text x="40" y="70" font-size="13" fill="#2e3a22" font-family="sans-serif">数量</text><path d="M80,295 C180,290 240,250 320,180 C400,110 520,80 600,70" fill="none" stroke="#5aa832" stroke-width="3"/><text x="430" y="120" font-size="14" fill="#5aa832" font-family="sans-serif">Nₜ = N₀ × λᵗ</text></svg>' },
      { type: 'svg', caption: 'S 形增长曲线：受 K 值限制，数量先慢后快再慢，在 K/2 处增长速率最大，最终稳定在 K 值附近。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">S 形增长曲线</text><line x1="80" y1="300" x2="620" y2="300" stroke="#3f7d1e" stroke-width="2"/><line x1="80" y1="300" x2="80" y2="60" stroke="#3f7d1e" stroke-width="2"/><path d="M80,295 C180,295 250,280 320,200 C390,120 470,100 600,95" fill="none" stroke="#5aa832" stroke-width="3"/><line x1="80" y1="160" x2="600" y2="160" stroke="#d6eac4" stroke-width="2" stroke-dasharray="6,4"/><line x1="320" y1="300" x2="320" y2="160" stroke="#d6eac4" stroke-width="2" stroke-dasharray="6,4"/><text x="600" y="155" font-size="13" fill="#2e3a22" font-family="sans-serif">K 值</text><text x="330" y="320" font-size="13" fill="#2e3a22" font-family="sans-serif">K/2</text></svg>' },
      { type: 'svg', caption: 'K/2 应用示意：渔业捕捞后剩余量维持在 K/2（增长最快）；害虫防治应在 K/2 之前进行，避免进入快速增长期。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">K/2 的实际应用</text><rect x="60" y="90" width="260" height="80" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="190" y="125" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">渔业：捕捞后维持在K/2</text><text x="190" y="150" font-size="12" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">增长最快，产量持续最大</text><rect x="360" y="90" width="260" height="80" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="490" y="125" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">害虫：K/2前防治</text><text x="490" y="150" font-size="12" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">阻断快速增长期</text><line x1="190" y1="190" x2="190" y2="240" stroke="#3f7d1e" stroke-width="2"/><line x1="490" y1="190" x2="490" y2="240" stroke="#3f7d1e" stroke-width="2"/><circle cx="190" cy="260" r="20" fill="#5aa832"/><circle cx="490" cy="260" r="20" fill="#5aa832"/><text x="190" y="265" font-size="14" text-anchor="middle" fill="#ffffff" font-family="sans-serif">渔</text><text x="490" y="265" font-size="14" text-anchor="middle" fill="#ffffff" font-family="sans-serif">防</text></svg>' },
      { type: 'tip', text: '高考必背：①J 形无 K 值、λ 恒定；②S 形有 K 值，K/2 增长速率最大；③渔业捕捞维持 K/2，害虫防治在 K/2 前；④λ 与增长率不同（增长率 = λ − 1）。' }
    ],
    exercises: [
      { type: 'choice', question: '在食物和空间充裕、无天敌的理想条件下，种群数量增长曲线呈', options: ['J 形', 'S 形', '直线形', '波浪形'], answer: 'J 形', explanation: '理想条件下资源无限、无环境阻力，种群以恒定倍数增长，数量呈指数式上升，在坐标图上表现为 J 形曲线，对应公式 Nₜ = N₀ × λᵗ。' },
      { type: 'choice', question: '下列关于 S 形增长中 K/2 的说法正确的是', options: ['K/2 处种群数量最大', 'K/2 处增长速率最大', 'K/2 处增长率为零', 'K/2 等于环境容纳量'], answer: 'K/2 处增长速率最大', explanation: '在 S 形曲线中，种群数量达到 K/2 时增长速率最大，之后因资源受限而下降；K 值才是环境容纳量，此时增长速率才接近零。' },
      { type: 'choice', question: 'λ 表示该年种群数量与上一年数量的比值，当 λ = 1 时种群', options: ['快速增长', '数量保持稳定', '数量下降', '立即灭绝'], answer: '数量保持稳定', explanation: 'λ = 该年数量 ÷ 上一年数量。λ = 1 表示两年数量相等，种群稳定；λ > 1 增长，0 < λ < 1 下降。注意 λ 本身不是增长率。' },
      { type: 'fill', question: '在 S 形增长中，环境条件不受破坏时所能维持的种群最大数量称为________（用字母表示）。', answer: 'K 值', explanation: 'K 值即环境容纳量，是在环境条件不被破坏的前提下，一定空间所能维持的种群最大数量，S 形曲线最终在此值附近波动。' },
      { type: 'fill', question: '为实现渔业持续最大产量，捕捞后剩余种群数量应维持在________附近。', answer: 'K/2', explanation: 'K/2 处种群增长速率最大，捕捞后维持在该水平可使种群恢复最快，从而获得持续而最大的捕捞产量。' }
    ]
  });
})();
