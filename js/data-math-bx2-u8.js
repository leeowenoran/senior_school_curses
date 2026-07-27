/* ============================================================
 * 高一数学 · 必修 第二册 · 第九章 统计
 * 第1课时：用样本估计总体（人教A版 §9.2）
 * 第2课时：统计案例（人教A版 §9.3）
 * 数据注入：math.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx2');
  if (!v) return;
  v.points.push(

    /* ---------------- 第1课时 用样本估计总体 ---------------- */
    {
      id: 'bx2-u8-l1',
      name: '用样本估计总体',
      chapter: '第九章 统计 · 9.2',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、频率分布表' },
        { type: 'paragraph', text: '面对大量数据，直接罗列既混乱又难发现规律。我们常把数据分组，统计每组出现的次数（频数）与比例（频率），列成频率分布表，从而一目了然地看出数据落在哪些区间更密集。' },
        { type: 'keypoint', label: '重点·频率', text: '<strong>频数</strong>是某组数据出现的次数；<strong>频率</strong>是该组频数与数据总数的比值，即 <strong>频率 = 频数 ÷ 总数</strong>。所有组的频率之和为 1。频率分布表按“分组区间—频数—频率”三列呈现，是描述数据分布的第一步。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图1　频率分布直方图</text><line x1="80" y1="60" x2="80" y2="250" stroke="#33536e" stroke-width="2"/><line x1="80" y1="250" x2="640" y2="250" stroke="#33536e" stroke-width="2"/><rect x="100" y="190" width="70" height="60" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.5"/><rect x="180" y="150" width="70" height="100" fill="#2b5b9e" stroke="#2b5b9e" stroke-width="1.5"/><rect x="260" y="110" width="70" height="140" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.5"/><rect x="340" y="130" width="70" height="120" fill="#2b5b9e" stroke="#2b5b9e" stroke-width="1.5"/><rect x="420" y="170" width="70" height="80" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.5"/><rect x="500" y="200" width="70" height="50" fill="#2b5b9e" stroke="#2b5b9e" stroke-width="1.5"/><text x="135" y="270" font-size="13" fill="#33536e" text-anchor="middle">组1</text><text x="215" y="270" font-size="13" fill="#33536e" text-anchor="middle">组2</text><text x="295" y="270" font-size="13" fill="#33536e" text-anchor="middle">组3</text><text x="375" y="270" font-size="13" fill="#33536e" text-anchor="middle">组4</text><text x="455" y="270" font-size="13" fill="#33536e" text-anchor="middle">组5</text><text x="535" y="270" font-size="13" fill="#33536e" text-anchor="middle">组6</text><text x="60" y="180" font-size="13" fill="#33536e" text-anchor="end">频率/组距</text><text x="360" y="292" font-size="14" fill="#33536e" text-anchor="middle">每个小长方形的面积等于该组的频率</text></svg>', caption: '图1　频率分布直方图：纵轴为“频率/组距”，长方形面积表示频率。' },
        { type: 'list', items: ['第一步：求极差（最大值减最小值），确定数据跨度', '第二步：决定组数与组距，使分组既不疏也不密', '第三步：确定各组的分点区间（注意端点归属，避免重复或遗漏）', '第四步：统计落在区间内的频数，计算频率', '第五步：绘制频率分布表，并据此作频率分布直方图'] },
        { type: 'heading', text: '二、频率分布直方图' },
        { type: 'keypoint', label: '重点·直方图', text: '直方图的<strong>纵轴是“频率/组距”</strong>，每个<strong>小长方形的面积 = 组距 ×（频率/组距）= 频率</strong>。因此各组面积之和为 1。直方图能直观反映分布的“形状”：是否对称、是否集中、有无“高峰”或“长尾”，比表格更形象。' },
        { type: 'warn', label: '易错', text: '①<strong>误把纵轴当“频数”</strong>：直方图纵轴是频率/组距，高度不代表频数，面积才代表频率；②<strong>把直方图与条形图混同</strong>：条形图各条分开、高度即数量，直方图各矩形相连、面积表频率；③<strong>组距不等时直接比高度</strong>会出错，必须比“频率/组距”或面积。' },
        { type: 'example', label: '例题1', text: '某班 50 人身高（cm）数据分组后，第 3 组区间为 [160,165)，频数 15。<br><br><strong>解</strong>：该组频率 = 15 ÷ 50 = <strong>0.30</strong>；若组距为 5，则该组对应的“频率/组距”= 0.30 ÷ 5 = <strong>0.06</strong>，即直方图中该矩形高为 0.06、面积 0.30。' },
        { type: 'list', items: ['从直方图可估读：分布中心大致在数据密集的组', '众数所在组对应面积最大（最高的矩形）', '中位数左右两侧面积各约为 0.5', '分布越“矮胖”说明数据越分散，越“瘦高”说明越集中'] },
        { type: 'heading', text: '三、集中趋势的估计' },
        { type: 'keypoint', label: '重点·众数', text: '<strong>众数</strong>是数据中出现<strong>次数最多</strong>的那个值（或那组）。众数反映数据最“常见”的水平，不受极端值影响，但可能不唯一，甚至不存在。' },
        { type: 'keypoint', label: '重点·中位数', text: '把数据按<strong>从小到大排列</strong>后，处于<strong>中间位置</strong>的数叫中位数。数据个数为奇数时取正中间那个；为偶数时取中间两个数的平均值。中位数把数据“对半平分”，对极端值不敏感。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图2　众数·中位数·平均数在分布中的位置</text><path d="M90 160 Q200 60 340 150 Q480 230 600 130" stroke="#4a7de0" stroke-width="3" fill="none"/><line x1="90" y1="160" x2="600" y2="160" stroke="#33536e" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="250" y1="80" x2="250" y2="200" stroke="#e05d44" stroke-width="2.5"/><line x1="340" y1="78" x2="340" y2="200" stroke="#5a7a2a" stroke-width="2.5"/><line x1="400" y1="120" x2="400" y2="200" stroke="#7a5aa0" stroke-width="2.5"/><text x="250" y="218" font-size="13" fill="#c0392b" text-anchor="middle">众数</text><text x="340" y="218" font-size="13" fill="#5a7a2a" text-anchor="middle">中位数</text><text x="400" y="218" font-size="13" fill="#7a5aa0" text-anchor="middle">平均数</text><text x="345" y="205" font-size="12" fill="#33536e" text-anchor="middle">（右偏时平均数被拉向长尾）</text></svg>', caption: '图2　在偏态分布中，众数、中位数、平均数位置依次错开，体现不同集中趋势。' },
        { type: 'keypoint', label: '重点·平均数', text: '<strong>平均数</strong>是所有数据的<strong>算术平均值</strong>，记作 x̄ = (x₁+x₂+…+xₙ) ÷ n。它利用全部信息，但<strong>容易受极端值影响</strong>：一个特大或特小的值会把平均数明显拉偏。' },
        { type: 'example', label: '例题2', text: '数据 2, 4, 4, 6, 9。<br><br><strong>解</strong>：<strong>众数</strong>为出现最多的 4；排序后中间位是第 3 个即 <strong>中位数 = 4</strong>；<strong>平均数</strong> x̄ = (2+4+4+6+9) ÷ 5 = 25 ÷ 5 = <strong>5</strong>。可见极端值 9 使平均数（5）大于中位数（4）。' },
        { type: 'list', items: ['众数：看“最常出现”，适合类别或峰值描述', '中位数：看“居中位置”，适合有极端值、偏态的数据', '平均数：看“整体水平”，适合近似对称、无异常的数据', '三者越接近，说明分布越对称集中'] },
        { type: 'heading', text: '四、离散程度的估计' },
        { type: 'keypoint', label: '重点·极差', text: '<strong>极差</strong> = 最大值 − 最小值，是最简单的离散度量，计算快捷，但只用了两个端点，容易受偶然极端值误导，不能反映中间数据的波动。' },
        { type: 'keypoint', label: '重点·方差', text: '方差衡量数据与平均数的<strong>平均偏离平方</strong>：<strong>s² = (1/n)·∑(xᵢ − x̄)²</strong>。方差越大，数据越分散、波动越剧烈；越小则越集中稳定。它用到了全部数据，是核心的离散指标。' },
        { type: 'keypoint', label: '重点·标准差', text: '<strong>标准差</strong>是方差的<strong>算术平方根</strong>：<strong>s = √(s²)</strong>。因为方差单位是原单位的平方，标准差恢复为原单位，更便于实际解释与比较。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图3　方差与标准差：数据离散程度示意</text><line x1="100" y1="120" x2="580" y2="120" stroke="#33536e" stroke-width="2"/><circle cx="180" cy="120" r="9" fill="#2b5b9e"/><circle cx="280" cy="120" r="9" fill="#2b5b9e"/><circle cx="340" cy="120" r="9" fill="#2b5b9e"/><circle cx="400" cy="120" r="9" fill="#2b5b9e"/><circle cx="500" cy="120" r="9" fill="#2b5b9e"/><text x="340" y="100" font-size="14" fill="#5a7a2a" text-anchor="middle">数据集A：紧贴平均数，方差小</text><circle cx="170" cy="70" r="9" fill="#e05d44"/><circle cx="260" cy="170" r="9" fill="#e05d44"/><circle cx="340" cy="60" r="9" fill="#e05d44"/><circle cx="420" cy="175" r="9" fill="#e05d44"/><circle cx="510" cy="80" r="9" fill="#e05d44"/><text x="340" y="200" font-size="14" fill="#c0392b" text-anchor="middle">数据集B：远离平均数，方差大、标准差大</text></svg>', caption: '图3　同样平均数的两组数据，B 组更分散，故方差与标准差更大。' },
        { type: 'example', label: '例题3', text: '两组各 5 个数：A = {10,11,12,13,14}，B = {8,10,12,14,16}，平均数均为 12。<br><br><strong>解</strong>：A 的方差 = [(4+1+0+1+4)/5] = <strong>2</strong>；B 的方差 = [(16+4+0+4+16)/5] = <strong>8</strong>。B 更分散，标准差 √8 ≈ 2.83 大于 A 的 √2 ≈ 1.41。' },
        { type: 'heading', text: '五、百分位数' },
        { type: 'keypoint', label: '重点·百分位数', text: '一组数据中，若某个值满足<strong>至少有 p% 的数据小于或等于它</strong>，且<strong>至少有 (100−p)% 的数据大于或等于它</strong>，则称该值为第 p 百分位数。常用第 25、50、75 百分位数（即下、中、上四分位数）刻画分布的位置与 spread。' },
        { type: 'example', label: '例题4', text: '数据 3, 7, 8, 12, 15, 18, 21（已排序，共 7 个），求第 50 百分位数。<br><br><strong>解</strong>：位置 i = 7 × 50% = 3.5，向上取整为第 4 个，即 <strong>12</strong>。验证：≤12 的有 4 个（约 57% ≥ 50%），≥12 的有 4 个（约 57% ≥ 50%），故第 50 百分位数为 12（也即中位数）。' },
        { type: 'table', headers: ['统计量', '含义', '优点', '缺点'], rows: [['众数', '出现最多的值', '不受极端值影响', '可能不唯一、信息少'], ['中位数', '排序后居中位置', '抗极端值、稳健', '未用全部数据'], ['平均数', '算术平均', '用全部信息', '易被极端值拉偏'], ['方差/标准差', '偏离平均的程度', '全面反映波动', '计算稍繁、单位需注意'], ['百分位数', 'p% 数据的分界', '刻画分布位置', '需先排序定位']] },
        { type: 'tip', label: '记忆', text: '描述一组样本，通常先画<strong>频率分布直方图</strong>看“形状”，再用<strong>平均数（或中位数）说中心、方差（或标准差）说波动</strong>，最后用<strong>百分位数</strong>补充位置。先整体形状、后数字特征，思路就不会乱。计算方差牢记公式 <strong>s² = (1/n)∑(xᵢ−x̄)²</strong>，先求平均再算偏差平方。' },
        { type: 'warn', label: '综合易错', text: '①<strong>用样本估计总体存在误差</strong>：样本统计量只是总体的近似，样本越有代表性、容量越大，估计越可靠；②<strong>平均数被极端值拉偏时改用中位数</strong>；③<strong>标准差与方差单位不同</strong>，比较离散程度二者结论一致，但报告数值要注意单位；④<strong>百分位数位置不是整数要向上取整</strong>，并回代验证“至少 p% / 至少 (100−p)%”两条。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['频率分布表与直方图直观展示数据分布', '集中趋势：众数、中位数、平均数各有适用场景', '离散程度：极差、方差 s²、标准差 s=√s²', '百分位数定位分布的分界点', '用样本的数字特征去估计总体的对应特征'] }
      ],
      exercises: [
        { type: 'choice', question: '在频率分布直方图中，每个小长方形的面积表示？', options: ['频数', '频率', '组距', '数据个数'], answer: '频率', explanation: '直方图纵轴为频率/组距，小长方形面积 = 组距 ×（频率/组距）= 频率，因此面积表示该组的频率，全部面积之和为 1。频数需用面积乘以总数得到，组距只是横轴宽度，数据个数是总数而非单组量。' },
        { type: 'fill', question: '样本方差的计算公式为 s² = ____（用 n、xᵢ、x̄ 表示）。', answer: '(1/n)∑(xi−x̄)²|(1/n)∑(xᵢ−x̄)²', explanation: '方差刻画数据与平均数的平均偏离平方，公式为 s² = (1/n)·∑(xᵢ − x̄)²，其中 n 为样本容量，x̄ 为样本平均数。先计算平均数，再求各数据与平均数偏差的平方和，最后除以 n。' },
        { type: 'choice', question: '数据 1, 2, 2, 3, 4 的众数是？', options: ['1', '2', '3', '4'], answer: '2', explanation: '众数是出现次数最多的数据。该组数据中 1、3、4 各出现 1 次，2 出现 2 次，出现次数最多，故众数为 2。其余数值均只出现一次，不符合众数定义。' },
        { type: 'fill', question: '第 p 百分位数的定义要求：至少有 ____% 的数据小于或等于该值，且至少有 (100−p)% 的数据大于或等于该值。', answer: 'p', explanation: '百分位数的定义包含两个方向：至少有 p% 的数据小于或等于这个分界值，同时至少有 (100−p)% 的数据大于或等于它。例如第 80 百分位数意味着约八成数据不高于它、约两成数据不低于它。' },
        { type: 'choice', question: '标准差与方差的关系是？', options: ['标准差是方差的平方', '标准差是方差的绝对值', '标准差是方差的算术平方根', '标准差与方差互为相反数'], answer: '标准差是方差的算术平方根', explanation: '标准差 s 定义为方差 s² 的算术平方根，即 s = √(s²)。引入标准差是为了把“平方单位”还原为原数据的单位，便于实际解释；两者反映的离散程度结论一致，但数值与量纲不同。' }
      ]
    },

    /* ---------------- 第2课时 统计案例 ---------------- */
    {
      id: 'bx2-u8-l2',
      name: '统计案例',
      chapter: '第九章 统计 · 9.3',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、统计的基本思想' },
        { type: 'paragraph', text: '实际问题中往往无法或不必调查全部对象，于是我们抽取样本、分析样本特征，再据此推断总体。统计案例就是把“抽样—整理—描述—推断”这一整套方法，灵活地运用到真实情境中去解决问题。' },
        { type: 'keypoint', label: '重点·核心思想', text: '统计案例的两条主线是 <strong>随机抽样</strong> 与 <strong>用样本估计总体</strong>。先通过科学抽样获得能代表总体的样本，再计算样本的数字特征、绘制图表，最后把结论谨慎地推广到总体。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="180" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图1　统计流程图</text><rect x="40" y="80" width="120" height="50" rx="8" fill="#2b5b9e"/><text x="100" y="112" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">随机抽样</text><rect x="200" y="80" width="120" height="50" rx="8" fill="#4a7de0"/><text x="260" y="112" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">整理数据</text><rect x="360" y="80" width="120" height="50" rx="8" fill="#2b5b9e"/><text x="420" y="112" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">图表描述</text><rect x="520" y="80" width="120" height="50" rx="8" fill="#4a7de0"/><text x="580" y="112" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">推断结论</text><path d="M160 105 L200 105" stroke="#33536e" stroke-width="2.5"/><path d="M320 105 L360 105" stroke="#33536e" stroke-width="2.5"/><path d="M480 105 L520 105" stroke="#33536e" stroke-width="2.5"/><polygon points="200,105 190,100 190,110" fill="#33536e"/><polygon points="360,105 350,100 350,110" fill="#33536e"/><polygon points="520,105 510,100 510,110" fill="#33536e"/></svg>', caption: '图1　统计案例流程：抽样 → 整理 → 描述 → 推断，四步形成闭环。' },
        { type: 'list', items: ['明确研究目的与总体范围', '设计抽样方案，保证样本代表性', '收集并记录原始数据，剔除明显错误', '用表格、直方图等描述分布', '计算统计量并作出总体推断与结论'] },
        { type: 'heading', text: '二、设计调查方案' },
        { type: 'keypoint', label: '重点·明确总体', text: '方案第一步是<strong>明确总体与抽样方法</strong>：界定调查对象是谁、考察什么变量，再选合适的抽样方式（简单随机抽样、分层抽样、系统抽样等）。总体界定不清，后续统计全部失去意义。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图2　数据采集与问卷设计</text><rect x="120" y="60" width="200" height="120" rx="10" fill="#fff" stroke="#2b5b9e" stroke-width="2"/><text x="220" y="90" font-size="14" fill="#33536e" text-anchor="middle">问卷示例</text><text x="220" y="115" font-size="12" fill="#33536e" text-anchor="middle">① 每日运动时长？</text><text x="220" y="140" font-size="12" fill="#33536e" text-anchor="middle">② 睡眠质量评分？</text><text x="220" y="165" font-size="12" fill="#33536e" text-anchor="middle">③ 是否近视？</text><rect x="380" y="60" width="180" height="120" rx="10" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="470" y="90" font-size="13" fill="#33536e" text-anchor="middle">录入数据表</text><text x="470" y="118" font-size="12" fill="#33536e" text-anchor="middle">编号 | 时长 | 评分</text><text x="470" y="142" font-size="12" fill="#33536e" text-anchor="middle">001 | 30 | 8</text><text x="470" y="166" font-size="12" fill="#33536e" text-anchor="middle">002 | 45 | 7</text><path d="M320 120 L380 120" stroke="#5a7a2a" stroke-width="2.5"/><polygon points="380,120 370,115 370,125" fill="#5a7a2a"/></svg>', caption: '图2　通过问卷采集信息并录入数据表，是统计案例的数据起点。' },
        { type: 'example', label: '例题1', text: '学校想了解全校 1200 名学生“每日体育锻炼时长”的分布。<br><br><strong>解</strong>：① 总体为 1200 名学生及其锻炼时长；② 因年级差异大，采用<strong>分层抽样</strong>按年级抽取共 120 人；③ 用问卷收集时长；④ 分组作频率分布直方图；⑤ 由样本均值与方差推断全校锻炼时长的集中与离散情况，并提示样本局限。' },
        { type: 'list', items: ['简单随机抽样：编号后抽签或随机数，适合均匀总体', '分层抽样：按差异明显的层分别抽，提高代表性', '系统抽样：等距抽取，操作简便', '问卷设计应避免诱导性措辞，保证数据可信'] },
        { type: 'heading', text: '三、数据整理与描述' },
        { type: 'keypoint', label: '重点·图表描述', text: '拿到数据先<strong>整理归类</strong>，再用<strong>频率分布表、频率分布直方图、扇形图、条形图</strong>等描述分布。图表能把“数字”转成“形状”，让总体分布特征（集中、分散、偏态）一眼可见。' },
        { type: 'keypoint', label: '重点·计算统计量', text: '在描述基础上计算<strong>平均数、中位数、众数、方差、标准差、百分位数</strong>等数字特征，作为估计总体的量化依据。这些特征共同回答“总体大概在什么水平、波动多大”。' },
        { type: 'warn', label: '易错', text: '①<strong>样本缺乏代表性</strong>：只在方便接触的人群中调查（如仅调查同班），结论不能推广到总体；②<strong>问卷措辞带倾向</strong>导致数据失真；③<strong>用样本结论当作总体真理</strong>，忽略抽样误差；④<strong>分层抽样不按层比例</strong>会使估计偏倚。' },
        { type: 'example', label: '例题2', text: '某样本 10 人每日阅读时长（分钟）：20, 30, 30, 40, 45, 50, 55, 60, 70, 90。<br><br><strong>解</strong>：排序后<strong>中位数</strong> = (45+50)/2 = 47.5；<strong>平均数</strong> = 490/10 = 49；因有极端值 90，平均数略高于中位数。可作直方图观察右偏，并用方差说明波动程度。' },
        { type: 'heading', text: '四、作出推断与结论' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图3　结论可视化：从图表到结论</text><rect x="70" y="70" width="70" height="110" fill="#4a7de0" stroke="#2b5b9e"/><rect x="160" y="110" width="70" height="70" fill="#2b5b9e" stroke="#2b5b9e"/><rect x="250" y="90" width="70" height="90" fill="#4a7de0" stroke="#2b5b9e"/><rect x="340" y="130" width="70" height="50" fill="#2b5b9e" stroke="#2b5b9e"/><text x="215" y="210" font-size="13" fill="#33536e" text-anchor="middle">直方图显示时长偏集中</text><circle cx="470" cy="120" r="42" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2"/><path d="M470 162 A42 42 0 0 1 470 78 L470 120 Z" fill="#5a7a2a"/><text x="470" y="205" font-size="13" fill="#33536e" text-anchor="middle">扇形图：达标占比约 65%</text><path d="M380 120 L428 120" stroke="#7a5aa0" stroke-width="2.5"/><polygon points="428,120 418,115 418,125" fill="#7a5aa0"/><text x="408" y="60" font-size="13" fill="#7a5aa0" text-anchor="middle">图表 → 结论</text></svg>', caption: '图3　把样本图表转化为总体推断：多数学生时长达标，但仍有提升空间。' },
        { type: 'keypoint', label: '重点·推断', text: '<strong>推断</strong>是把样本结论推广到总体的过程：用样本平均数估计总体平均数，用样本方差估计总体方差，用样本分布形态推测总体分布。表述时要说明<strong>估计的可靠程度与适用范围</strong>，不夸大。' },
        { type: 'example', label: '例题3', text: '根据例题2样本，推断全校学生阅读情况。<br><br><strong>解</strong>：样本平均约 49 分钟、中位数 47.5 分钟，说明全校学生日均阅读约 45–50 分钟；方差显示个体差异明显。结论：整体达标但存在少数阅读时间过短者，建议分层开展阅读推广，并说明此推断基于 10 人小样本、存在误差。' },
        { type: 'list', items: ['结论要回答最初的研究问题', '给出估计值的同时说明误差与可信度', '指出样本的代表性与局限性', '对异常发现提出进一步调查建议'] },
        { type: 'heading', text: '五、综合案例框架' },
        { type: 'table', headers: ['环节', '要做什么', '常用工具'], rows: [['明确问题', '界定总体、变量与目标', '研究假设'], ['抽样设计', '选方法、定容量', '简单/分层/系统抽样'], ['收集整理', '采集并清洗数据', '问卷、数据表'], ['描述分布', '展示数据形态', '频率表、直方图'], ['计算特征', '量化集中与离散', '均值、方差、百分位数'], ['推断结论', '推广到总体', '估计值+误差说明']] },
        { type: 'tip', label: '实践', text: '写统计案例报告时，按 <strong>“问题—抽样—数据—图表—统计量—结论”</strong> 的顺序成文，逻辑最清楚。每一步都问自己：样本能代表总体吗？图表说清分布了吗？结论有没有过度推断？把这三个问题答好，案例质量就有保障。' },
        { type: 'warn', label: '综合易错', text: '①<strong>把相关当因果</strong>：统计只能发现关联，不能直接断定因果；②<strong>小样本妄下结论</strong>：容量过小、波动大的样本不可靠；③<strong>忽略非响应偏差</strong>（不愿填问卷的人可能特征不同）；④<strong>结论超出总体范围</strong>，把某校结论套用到所有学校。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['统计案例 = 随机抽样 + 用样本估计总体', '方案四步：抽样→整理→描述→推断', '图表描述分布，统计量量化特征', '推断须说明代表性与误差，不可过度', '报告按“问题—数据—图表—结论”行文'] }
      ],
      exercises: [
        { type: 'choice', question: '统计案例的核心思想是哪个？', options: ['用样本估计总体', '普查全部数据', '只绘制图表', '忽略抽样误差'], answer: '用样本估计总体', explanation: '统计案例以随机抽样获取样本，再用样本的数字特征与分布去估计总体，核心思想是“用样本估计总体”。普查虽精确但常不可行；只画图或忽略误差都不是核心方法，且忽略误差会导致推断不可靠。' },
        { type: 'fill', question: '设计调查方案的第一步是明确____与抽样方法。', answer: '总体', explanation: '统计案例首先要界定研究的总体（调查对象是谁、考察什么变量）并选择抽样方法，总体不清则后续抽样与推断都失去意义。故填“总体”。' },
        { type: 'choice', question: '下列哪种抽样能保证每个个体等可能入样？', options: ['简单随机抽样', '方便抽样', '判断抽样', '自愿抽样'], answer: '简单随机抽样', explanation: '简单随机抽样（抽签法或随机数法）中每个个体被抽中的概率相等，代表性强。方便抽样、判断抽样、自愿抽样都带有主观或自选择偏差，不能保证等可能，结论易偏倚。' },
        { type: 'fill', question: '在统计案例中作出推断结论时，应说明样本的____与局限性。', answer: '代表性', explanation: '样本推断总体时，必须说明样本是否具有代表性以及抽样误差与适用范围；若样本不能代表总体，结论就不能可靠推广。故填“代表性”。' },
        { type: 'choice', question: '对样本数据描述其分布，通常首先绘制？', options: ['频率分布直方图', '函数图象', '几何图形', '地图'], answer: '频率分布直方图', explanation: '在统计案例中，描述数据分布最常用的是频率分布表与频率分布直方图，能直观展示数据集中在哪些区间、形态是否对称。函数图象用于函数研究，几何图形与地图不属于描述数据分布的工具。' }
      ]
    }

  );
})();
