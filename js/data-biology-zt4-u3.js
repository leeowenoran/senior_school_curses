/* 生物学 · 高三复习 · 生物与环境 · 第1章 · 课时：种群密度的调查方法·标记重捕法 */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u3',
    name: '第1节 种群密度的调查方法·标记重捕法',
    chapter: '生物与环境 · 第1章 种群及其动态',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、标记重捕法的适用对象' },
      { type: 'paragraph', text: '标记重捕法适用于活动能力强、活动范围大的动物，例如鼠类、鸟类、鱼类等。这类动物难以用固定样方计数，因此采用“捕获、标记、放回、再捕”的估算思路。' },
      { type: 'list', items: [
        '调查对象活动能力强、活动范围大，无法用样方固定计数。',
        '标记物不能过于醒目，也不能影响动物正常活动和生存。',
        '标记后必须放回原环境，保证重捕时与未标记个体混合均匀。',
        '调查期间种群数量没有明显迁入、迁出、出生和死亡。'
      ] },
      { type: 'heading', text: '二、基本操作步骤' },
      { type: 'paragraph', text: '第一步：在被调查区域捕获一部分个体，数量为 M，进行标记后全部放回原环境；第二步：经过一段时间，待标记个体与未标记个体充分混合，再捕获一部分个体，数量为 n，其中带有标记的个体数为 m。' },
      { type: 'keypoint', text: '核心计算公式：N = M × n / m。其中 N 为种群总数，M 为初次标记数，n 为再次捕获数，m 为再次捕获中带标记数。种群密度等于 N 除以调查区域面积。' },
      { type: 'heading', text: '三、公式的推导原理' },
      { type: 'paragraph', text: '假设标记个体在种群中均匀分布，则重捕样本中带标记个体的比例（m / n）应约等于整个种群中标记个体的比例（M / N）。由 m / n = M / N 变形即得 N = M × n / m。这是比例估算的思想。' },
      { type: 'table', caption: '标记重捕法各符号的含义', headers: ['符号', '含义', '说明'], rows: [
        ['N', '种群总个体数', '待求的真实数量'],
        ['M', '初次捕获并标记数', '已知，标记后放回'],
        ['n', '再次捕获的个体数', '已知，第二次捕获总量'],
        ['m', '再次捕获中带标记数', '已知，第二次捕获里的标记个体']
      ] },
      { type: 'heading', text: '四、误差分析' },
      { type: 'list', items: [
        '标记物脱落：导致 m 偏小，算得 N 偏大。',
        '标记个体更易被捕获：再捕概率升高，m 偏大，N 偏小。',
        '标记个体更难被捕获（如受伤）：再捕概率降低，m 偏小，N 偏大。',
        '调查期间有迁入或出生：实际 N 增大，估算值偏离真实值。'
      ] },
      { type: 'paragraph', text: '综上，标记重捕法的结果受标记质量和环境变化影响。实际调查中应尽量使用不易脱落、不影响行为的标记，并在较短时间内完成重捕，以减少误差。' },
      { type: 'warn', text: '易错辨析：公式不能写反为 N = M × m / n。m 是“再捕中的标记数”，位于分母；分子是 M 与 n 的乘积。记错分子分母是最常见的计算错误。' },
      { type: 'example', text: '例题：某湖泊第一次捕获并标记鲫鱼30尾，放回后充分混合；第二次捕获30尾，其中带标记的有15尾。代入公式 N = M × n / m = 30 × 30 / 15 = 60，估算该湖泊鲫鱼种群总数约为60尾。' },
      { type: 'svg', caption: '标记重捕法流程：初次捕获 M 个并标记放回，充分混合后再次捕获 n 个，其中带标记 m 个，比例相等即可估算 N。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">标记重捕法流程图</text><rect x="40" y="120" width="160" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="120" y="154" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">捕获M并标记</text><rect x="260" y="120" width="160" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="154" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">放回充分混合</text><rect x="480" y="120" width="160" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="560" y="154" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">再捕n含m</text><line x1="200" y1="148" x2="258" y2="148" stroke="#3f7d1e" stroke-width="2"/><polygon points="258,148 242,143 246,159" fill="#3f7d1e"/><line x1="420" y1="148" x2="478" y2="148" stroke="#3f7d1e" stroke-width="2"/><polygon points="478,148 462,143 466,159" fill="#3f7d1e"/><text x="340" y="230" font-size="16" text-anchor="middle" fill="#5aa832" font-family="sans-serif">N = M × n / m</text><text x="340" y="270" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">m / n = M / N  →  比例估算</text></svg>' },
      { type: 'svg', caption: '公式推导示意：重捕样本中带标记比例（m/n）应等于种群中标记比例（M/N），由此推出 N = M × n / m。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">公式推导示意</text><rect x="60" y="100" width="240" height="120" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="150" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">总体 N 中标记 M</text><text x="180" y="185" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">标记比例 M / N</text><rect x="380" y="100" width="240" height="120" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="150" font-size="16" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">样本 n 中标记 m</text><text x="500" y="185" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">标记比例 m / n</text><line x1="300" y1="160" x2="378" y2="160" stroke="#3f7d1e" stroke-width="2"/><polygon points="378,160 362,155 366,171" fill="#3f7d1e"/><text x="340" y="270" font-size="16" text-anchor="middle" fill="#5aa832" font-family="sans-serif">M / N = m / n</text><text x="340" y="305" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">整理得  N = M × n / m</text></svg>' },
      { type: 'svg', caption: '误差方向示意：标记物脱落或再捕概率降低都会使 m 偏小，导致估算 N 偏大；再捕概率升高则 m 偏大、N 偏小。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">常见误差方向</text><rect x="40" y="90" width="280" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="126" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">标记脱落/再捕难 → m偏小</text><rect x="40" y="170" width="280" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="206" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">再捕易/标记醒目 → m偏大</text><rect x="380" y="90" width="260" height="60" rx="8" fill="#5aa832" stroke="#3f7d1e"/><text x="510" y="126" font-size="14" text-anchor="middle" fill="#ffffff" font-family="sans-serif">m偏小 → 估算N偏大</text><rect x="380" y="170" width="260" height="60" rx="8" fill="#5aa832" stroke="#3f7d1e"/><text x="510" y="206" font-size="14" text-anchor="middle" fill="#ffffff" font-family="sans-serif">m偏大 → 估算N偏小</text><line x1="320" y1="120" x2="378" y2="120" stroke="#3f7d1e" stroke-width="2"/><polygon points="378,120 362,115 366,131" fill="#3f7d1e"/><line x1="320" y1="200" x2="378" y2="200" stroke="#3f7d1e" stroke-width="2"/><polygon points="378,200 362,195 366,211" fill="#3f7d1e"/></svg>' },
      { type: 'tip', text: '高频考点：①识别公式 N = M × n / m 并会代值计算；②判断误差方向（m 与 N 成反比，m 偏小则 N 偏大）；③区分标记重捕法与样方法的适用对象。' }
    ],
    exercises: [
      { type: 'choice', question: '标记重捕法最适用于调查下列哪类生物的种群密度', options: ['草地上的蒲公英', '活动能力强的鸟类', '静止的蜗牛', '固着生长的珊瑚虫'], answer: '活动能力强的鸟类', explanation: '标记重捕法适用于活动能力强、活动范围大的动物。鸟类活动能力强且范围大，难以用样方固定计数，适合标记重捕法；其余对象活动能力弱，宜用样方法。' },
      { type: 'choice', question: '标记重捕法的计算公式是', options: ['N = M × m / n', 'N = M × n / m', 'N = m × n / M', 'N = M + n − m'], answer: 'N = M × n / m', explanation: '根据 m / n = M / N 变形得到 N = M × n / m，其中 M 为标记数，n 为再捕总数，m 为再捕中标记数。m 位于分母，不能写反。' },
      { type: 'choice', question: '若标记物容易脱落，则估算的种群数量会', options: ['偏大', '偏小', '无影响', '先偏大后偏小'], answer: '偏大', explanation: '标记物脱落使重捕中带标记的个体数 m 偏小，而 N 与 m 成反比，因此算得的 N 会偏大，这是典型的正向误差。' },
      { type: 'fill', question: '标记重捕法中，若初次标记 M=40，再捕 n=50，其中带标记 m=10，则种群总数 N = ________。', answer: '200', explanation: '代入公式 N = M × n / m = 40 × 50 / 10 = 200，因此该种群总数约为200个个体，再除以面积可得种群密度。' },
      { type: 'fill', question: '标记重捕法要求调查期间种群没有明显的迁入、迁出、出生和________。', answer: '死亡', explanation: '为保证标记比例稳定，调查应在短时间内完成，且期间种群不能有显著的迁入、迁出、出生和死亡，否则比例假设不成立，估算值会有偏差。' }
    ]
  });
})();
