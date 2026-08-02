/* 生物学 · 高三复习 · 生物与环境 · 第1章 · 课时：种群密度的调查方法·样方法 */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u2',
    name: '第1节 种群密度的调查方法·样方法',
    chapter: '生物与环境 · 第1章 种群及其动态',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、调查种群密度的方法概览' },
      { type: 'paragraph', text: '在自然界中多数种群个体数量庞大且活动隐蔽，难以逐一计数，因此常采用抽样估算的方法获得种群密度。常用方法包括样方法、标记重捕法等，方法的选择取决于调查对象的生物学特点。' },
      { type: 'list', items: [
        '样方法：适用于植物和活动能力弱、活动范围小的动物。',
        '标记重捕法：适用于活动能力强、活动范围大的动物。',
        '其他方法：如黑光灯诱捕、血板计数等用于特殊类群。'
      ] },
      { type: 'list', items: [
        '双子叶植物：如蒲公英、车前草等常用样方法。',
        '活动能力弱的动物：如蚜虫、植物上的跳蝻、昆虫卵。',
        '不要求逐个计数，通过样本平均值推算总体密度。'
      ] },
      { type: 'heading', text: '二、样方法的基本原理' },
      { type: 'paragraph', text: '样方法是在被调查种群的分布范围内，随机选取若干个样方，计数每个样方内的个体数，以所有样方种群密度的平均值作为该种群的估计密度。核心思想是“以样本推断总体”。' },
      { type: 'keypoint', text: '样方大小有常规标准：草本植物样方一般为1平方米，灌木一般为16平方米，乔木一般为100平方米。样方过大或过小都会影响估算准确度。' },
      { type: 'heading', text: '三、随机取样原则' },
      { type: 'paragraph', text: '随机取样是保证估算结果可靠的关键。取样时不能凭主观挑选个体密集或稀疏的区域，而应使每个个体被抽中的机会相等，这样才能避免系统偏差，使样本具有代表性。' },
      { type: 'tip', text: '考点提醒：随机取样不等于“随便取”，而是指按照统计学规则使每个位置被抽到的概率相同。常用的随机取样法有五点取样法和等距取样法。' },
      { type: 'heading', text: '四、五点取样法' },
      { type: 'paragraph', text: '五点取样法适用于方形或近似方形的调查区域：在对角连线的交点（中心）和四个角附近各取一个样方，共五个样方。这种方法操作简便，适合分布较均匀的种群。' },
      { type: 'heading', text: '五、等距取样法' },
      { type: 'paragraph', text: '等距取样法适用于长条形或不规则但可设定间隔的调查区域：先确定样方大小和行进路线，按相等距离依次设置样方。例如沿河流、公路两侧每隔固定距离布设一个样方。' },
      { type: 'warn', text: '易错辨析：样方边缘个体如何计数容易出错。统一规则为“计上不计下、计左不计右”，即位于样方上边和左边的个体计入，下边和右边的个体不计入，避免重复或遗漏。' },
      { type: 'example', text: '例题：在某草地上用1平方米样方调查蒲公英，随机取5个样方，个体数分别为3、5、4、6、2，则平均每个样方4株，估算该草地蒲公英种群密度约为每平方米4株。' },
      { type: 'table', caption: '样方法与标记重捕法的适用对比', headers: ['项目', '样方法', '标记重捕法'], rows: [
        ['适用对象', '植物、活动能力弱的动物', '活动能力强、范围大的动物'],
        ['取样方式', '随机设置样方', '捕获标记后重捕'],
        ['核心公式', '各样方平均值', 'N = M × n / m'],
        ['是否需标记', '不需要', '需要标记后放回']
      ] },
      { type: 'svg', caption: '随机取样示意：在调查区域内随机布设多个样方（绿色方框），每个个体被抽中的机会相等，以样本平均值估计总体密度。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">随机取样示意图</text><rect x="60" y="70" width="560" height="240" rx="6" fill="#ffffff" stroke="#3f7d1e" stroke-width="2"/><circle cx="140" cy="130" r="4" fill="#2e3a22"/><circle cx="200" cy="180" r="4" fill="#2e3a22"/><circle cx="260" cy="120" r="4" fill="#2e3a22"/><circle cx="320" cy="220" r="4" fill="#2e3a22"/><circle cx="380" cy="150" r="4" fill="#2e3a22"/><circle cx="440" cy="200" r="4" fill="#2e3a22"/><circle cx="500" cy="120" r="4" fill="#2e3a22"/><circle cx="560" cy="240" r="4" fill="#2e3a22"/><rect x="120" y="110" width="70" height="70" fill="none" stroke="#5aa832" stroke-width="3"/><rect x="350" y="130" width="70" height="70" fill="none" stroke="#5aa832" stroke-width="3"/><rect x="470" y="180" width="70" height="70" fill="none" stroke="#5aa832" stroke-width="3"/><text x="340" y="340" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">随机布点，避免主观选择</text></svg>' },
      { type: 'svg', caption: '五点取样法：在方形区域的四条对角线交点（中心）和四个角附近各布一个样方，共五点。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">五点取样法</text><rect x="140" y="90" width="400" height="220" rx="6" fill="#ffffff" stroke="#3f7d1e" stroke-width="2"/><line x1="140" y1="90" x2="540" y2="310" stroke="#d6eac4" stroke-width="2"/><line x1="540" y1="90" x2="140" y2="310" stroke="#d6eac4" stroke-width="2"/><rect x="160" y="110" width="60" height="60" fill="none" stroke="#5aa832" stroke-width="3"/><rect x="460" y="110" width="60" height="60" fill="none" stroke="#5aa832" stroke-width="3"/><rect x="160" y="230" width="60" height="60" fill="none" stroke="#5aa832" stroke-width="3"/><rect x="460" y="230" width="60" height="60" fill="none" stroke="#5aa832" stroke-width="3"/><rect x="310" y="170" width="60" height="60" fill="none" stroke="#5aa832" stroke-width="3"/><text x="340" y="340" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">四角加中心点，共五点</text></svg>' },
      { type: 'svg', caption: '等距取样法：沿调查路线按相等距离依次布设样方，适用于长条形或不规则区域。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">等距取样法</text><rect x="60" y="110" width="560" height="140" rx="6" fill="#ffffff" stroke="#3f7d1e" stroke-width="2"/><rect x="90" y="140" width="70" height="80" fill="none" stroke="#5aa832" stroke-width="3"/><rect x="220" y="140" width="70" height="80" fill="none" stroke="#5aa832" stroke-width="3"/><rect x="350" y="140" width="70" height="80" fill="none" stroke="#5aa832" stroke-width="3"/><rect x="480" y="140" width="70" height="80" fill="none" stroke="#5aa832" stroke-width="3"/><line x1="125" y1="110" x2="125" y2="250" stroke="#d6eac4" stroke-width="2"/><line x1="255" y1="110" x2="255" y2="250" stroke="#d6eac4" stroke-width="2"/><line x1="385" y1="110" x2="385" y2="250" stroke="#d6eac4" stroke-width="2"/><line x1="515" y1="110" x2="515" y2="250" stroke="#d6eac4" stroke-width="2"/><text x="340" y="300" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">等间距布点，适合长条形区域</text></svg>' },
      { type: 'tip', text: '高考常见考法：①判断某对象应选样方法还是标记重捕法；②识图区分五点取样与等距取样；③样方边缘计数规则（计上不计下、计左不计右）。样方数量越多，估算越接近真实值。' }
    ],
    exercises: [
      { type: 'choice', question: '下列对象中最适合用样方法调查种群密度的是', options: ['草地上的蒲公英', '森林中的野兔', '天空中的候鸟', '河流里的鲤鱼'], answer: '草地上的蒲公英', explanation: '样方法适用于植物和活动能力弱、活动范围小的动物。蒲公英是固定生长的植物，适合样方法；野兔、候鸟、鲤鱼活动能力强，宜用标记重捕法。' },
      { type: 'choice', question: '样方法中的随机取样是指', options: ['调查者随便选样方', '每个个体被抽中机会相等', '只选个体密集处', '只选边缘区域'], answer: '每个个体被抽中机会相等', explanation: '随机取样是统计学原则，要求调查区域内每个个体被抽中的概率相同，不能凭主观挑选密集或稀疏处，这样才能保证样本具有代表性。' },
      { type: 'choice', question: '用五点取样法调查时，样方一般布设在', options: ['仅四个角', '中心的对角线上', '四角和中心点共五处', '沿一条边等距排列'], answer: '四角和中心点共五处', explanation: '五点取样法在方形区域的四个角和对角线交点（中心）各设一个样方，共计五个样方，适合分布较均匀的种群。' },
      { type: 'fill', question: '调查草本植物种群密度时，常用样方面积一般为________平方米。', answer: '1', explanation: '样方大小依调查对象而定，草本植物样方通常为1平方米，灌木约16平方米，乔木约100平方米，这是长期形成的常规标准。' },
      { type: 'fill', question: '样方边缘个体计数统一规则为：计上不计下、计左不计________。', answer: '右', explanation: '为避免重复或遗漏，样方边缘个体采用“计上不计下、计左不计右”的规则，即只计入上边和左边的个体，下边和右边的不计入。' }
    ]
  });
})();
