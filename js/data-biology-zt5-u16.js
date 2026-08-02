/* 生物学 · 高三复习 · 实验与探究 · 第6章 · 课时：调查类实验 */
(function () {
  var v = gzGetVolume('biology', 'zt5');
  if (!v) return;
  v.points.push({
    id: 'zt5-u16',
    name: '第2节 调查类实验',
    chapter: '实验与探究 · 第6章 模拟与调查类实验',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、调查类实验的分类' },
      { type: 'paragraph', text: '调查类实验是用科学方法到真实群体或环境中收集数据、得出结论的活动。高中生物常见的调查类实验主要有两类：一类是调查人类遗传病的发病情况或遗传方式，另一类是调查种群的密度。两类调查的目的不同，对象和方法也明显不同，复习时要成对记忆、避免混淆。' },
      { type: 'keypoint', text: '调查人类遗传病有“两种目的、两种方法”：①调查发病率——在随机人群中随机抽样、大样本统计，得到“患病人数÷总人数”；②调查遗传方式——在患者家系中绘制系谱图，分析亲子代传递规律。两者对象与方法不能互换。' },
      { type: 'list', items: [
        '人类遗传病调查：分“发病率调查”和“遗传方式调查”两条线。',
        '种群密度调查：植物和活动弱动物用样方法，活动强动物用标记重捕法。',
        '调查都要遵循随机、足够样本量原则，以减小误差、提高代表性。'
      ] },
      { type: 'svg', caption: '遗传病调查的两种思路：发病率调查在随机人群大样本中统计比例，遗传方式调查在患者家系中绘制系谱图分析传递规律。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">遗传病调查的两种思路</text><rect x="60" y="90" width="260" height="150" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="190" y="130" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">发病率调查</text><text x="190" y="162" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">随机人群大样本</text><rect x="360" y="90" width="260" height="150" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="490" y="130" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">遗传方式调查</text><text x="490" y="162" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">患者家系绘系谱</text><polygon points="320,165 360,155 360,175" fill="#3f7d1e"/><text x="340" y="290" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">两项调查目的不同，对象与方法不同</text></svg>' },
      { type: 'paragraph', text: '人类遗传病发病率的调查：在广大随机人群中随机抽样，样本量要足够大（如几千人），统计其中患某种遗传病的人数，用“患病人数÷被调查总人数×100%”得到发病率。随机和足够样本是为了让结果能代表整个人群，避免偏差。' },
      { type: 'warn', text: '易错辨析：①发病率调查必须在随机人群中进行，若只在患者家系中调查，得到的会是偏高的“家系患病率”而非群体发病率；②发病率和遗传方式是两个不同概念，前者回答“得多不多”，后者回答“怎么传”；③调查时还要注意保护被调查者隐私、取得同意。' },
      { type: 'paragraph', text: '遗传方式（遗传特点）的调查：对已经确诊的某种遗传病患者，追踪其家族各代成员的患病情况，绘制系谱图，观察是代代相传还是隔代相传、男女患病是否均等，从而判断是显性还是隐性、是否伴性遗传。这种方法依赖家系资料，不能在随机人群中完成。' },
      { type: 'table', caption: '发病率调查与遗传方式调查的对比', headers: ['比较项目', '发病率调查', '遗传方式调查'], rows: [
        ['调查对象', '随机人群（大样本）', '患者家系'],
        ['主要方法', '随机抽样调查、统计比例', '绘制系谱图、分析传递'],
        ['回答问题', '该病在群体中有多常见', '该病如何遗传（显隐性、伴性）'],
        ['样本要求', '样本量足够大、随机', '家系成员尽量完整']
      ] },
      { type: 'svg', caption: '种群密度调查方法选择：样方法适合植物和活动弱动物，标记重捕法适合活动强、范围大的动物，按对象特点选择。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">种群密度调查方法</text><rect x="60" y="90" width="260" height="150" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="190" y="130" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">样方法</text><text x="190" y="162" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">植物、活动弱动物</text><rect x="360" y="90" width="260" height="150" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="490" y="130" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">标记重捕法</text><text x="490" y="162" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">活动强、范围大动物</text><polygon points="320,165 360,155 360,175" fill="#3f7d1e"/><text x="340" y="290" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">按对象特点选择合适方法</text></svg>' },
      { type: 'example', text: '例题：某班同学调查红绿色盲的遗传特点，他们走访了多个患者家庭并画出系谱图，发现男性患者多于女性且常表现为交叉遗传。这种做法是调查遗传方式，而不是调查发病率，应使用患者家系资料而非随机抽样。' },
      { type: 'tip', text: '高频考点：①“随机人群、大样本”是发病率调查的招牌词；②“患者家系、系谱图”是遗传方式调查的招牌词；③常考判断：某做法对应哪种调查、能得出什么结论。答题时先分清目的再选方法。' },
      { type: 'heading', text: '二、种群密度调查——样方法' },
      { type: 'paragraph', text: '样方法适用于调查植物和活动能力弱、活动范围小的动物（如蚜虫、跳蝻）。做法是在调查范围内随机选取若干个样方（如 1 平方米的小方格），计数每个样方内的个体数，求各样方密度的平均值，作为该种群密度的估计值。' },
      { type: 'keypoint', text: '样方法的两个关键：①样方必须随机选取，不能挑密度高或低的地块，否则结果有偏；②对于边界上的个体，通常采用“计上不计下、计左不计右”或“样方内加相邻两边及夹角”的计数原则，保持统一。' },
      { type: 'list', items: [
        '确定样方大小：草本植物常用 1 平方米，灌木或乔木可适当增大。',
        '随机取样：常用五点取样法或等距取样法。',
        '计数：统计样方内及规定边界上的个体数。',
        '计算：取各样方种群密度的平均值作为估计值。'
      ] },
      { type: 'svg', caption: '标记重捕法流程：初次捕获并标记一部分个体后放回，隔一段时间再次捕获，根据重捕中标记个体比例估算种群总数 N=(M×n)÷m。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="38" font-size="20" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">标记重捕法流程</text><rect x="40" y="110" width="170" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="125" y="150" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">初次捕获标记</text><rect x="255" y="110" width="170" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="150" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">放回原地</text><rect x="470" y="110" width="170" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="555" y="150" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">再次捕获计数</text><polygon points="210,145 255,135 255,155" fill="#3f7d1e"/><polygon points="425,145 470,135 470,155" fill="#3f7d1e"/><text x="340" y="250" font-size="15" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">N=(M×n)÷m</text><text x="340" y="300" font-size="13" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">M初次标记 n再次捕获数 m重捕中标记数</text></svg>' },
      { type: 'warn', text: '易错辨析：①标记重捕法适用于活动能力强、范围大的动物，植物不能用（植物用样方法）；②标记的标记物不能脱落、不能影响动物生存和被捕概率，否则估算会偏差；③若两次捕获间隔内种群有大量出生死亡或迁入迁出，公式前提被破坏，结果不可靠。' },
      { type: 'heading', text: '三、种群密度调查——标记重捕法' },
      { type: 'paragraph', text: '标记重捕法用于活动能力强、活动范围大的动物（如鼠、鸟）。先捕获一部分个体，做上不影响生存的标记后放回原地；隔一段时间再捕获一批，记下其中带标记的个体数。假设标记个体在种群中均匀分布，则“标记比例≈重捕中标记比例”，从而估算总数。' },
      { type: 'example', text: '例题：初次捕获并标记了 30 只田鼠放回，一段时间后再次捕获 40 只，其中 10 只带标记。按 N=(M×n)÷m 计算，N=(30×40)÷10=120 只，即该区域田鼠种群数量约为 120 只。' },
      { type: 'tip', text: '答题模板：调查类实验结论常用“若……则……”表述，例如“若在随机人群中该病发病率约为 1%，则说明其在群体中较罕见”。注意先写清调查目的（发病率还是遗传方式、种群密度用何方法），再写操作与结论。' }
    ],
    exercises: [
      { type: 'choice', question: '调查某种遗传病的群体发病率时，正确的做法应是', options: ['A. 在患者家系中调查', 'B. 在随机人群中大样本调查', 'C. 只在医院调查', 'D. 只在学校调查'], answer: 'B. 在随机人群中大样本调查', explanation: '调查某种遗传病的发病率，要在广大随机人群中随机抽样、样本量足够大，统计患病人数占总人数比例；若只在患者家系调查会得到偏高的数据，不能代表群体发病率。' },
      { type: 'choice', question: '若要判断红绿色盲的遗传方式，应当采用的方法是', options: ['A. 随机人群大样本调查', 'B. 患者家系绘制系谱图', 'C. 仅用动物实验', 'D. 培养细胞观察'], answer: 'B. 患者家系绘制系谱图', explanation: '判断遗传病的遗传方式(如显隐性、是否伴性)必须分析患者家系中各代成员的患病情况，通过绘制系谱图、观察亲子代传递规律来确定，随机人群调查无法得到方式信息。' },
      { type: 'choice', question: '下列适合用标记重捕法调查种群密度的是', options: ['A. 草本植物', 'B. 活动能力强、范围大的动物', 'C. 蚜虫', 'D. 跳蝻'], answer: 'B. 活动能力强、范围大的动物', explanation: '标记重捕法先捕获部分个体标记后放回，隔一段时间再捕获，根据重捕中标记个体比例估算总数，适合活动能力强、活动范围大的动物；样方法适合植物和活动弱动物。' },
      { type: 'fill', question: '样方法调查种群密度时，样方的选取应做到____。', answer: '随机取样', explanation: '样方法要求随机选取若干样方，不能人为挑选密度高或低的地块，否则结果偏差；计数后取各样方密度的平均值作为该种群的种群密度估计值。' },
      { type: 'fill', question: '标记重捕法中，种群总数 N 等于(初次标记数 × 再次捕获数) ÷ ____。', answer: '重捕中的标记数', explanation: '标记重捕法公式为 N=(M×n)÷m，其中 N 为种群总数，M 是初次标记数，n 是再次捕获数，m 是再次捕获中带标记的个体数，三者已知即可估算 N。' }
    ]
  });
})();
