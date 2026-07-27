/* ============================================================
 * 高三数学 · 高考复习专题 · 概率统计
 * 第7单元：核心思想方法与常见题型、备考策略
 * 第1课时：核心思想方法
 * 第2课时：常见题型与备考策略（含答题规范）
 * 数据注入：math.zt6.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt6');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 核心思想方法 ---------------- */
    {
      id: 'zt6-u7-l1',
      name: '核心思想方法',
      chapter: '概率统计复习 · 十三、核心思想方法',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、分类讨论思想' },
        { type: 'paragraph', text: '概率问题中，许多复杂事件并不是“一步到位”可以求概率的。当事件的发生可能经由若干种不同情形时，应当按情形分类，逐类计算后再合并，这就是分类讨论思想在概率中的体现。' },
        { type: 'keypoint', label: '重点·全概率分类', text: '当事件可由若干<strong>互斥的“原因”</strong>引发时，用<strong>全概率公式</strong>分原因讨论：先把样本空间划分为若干互斥事件 B₁、B₂、…、Bₙ（划分样本空间），再按 P(A) = Σ P(Bₖ)P(A|Bₖ) 加权求和。本质上是“由因求果”的分层讨论。' },
        { type: 'list', items: ['划分样本空间：把前提分成若干个两两互斥且并集为全集的原因', '分别求各层条件概率 P(A|Bₖ) 与层概率 P(Bₖ)', '加权相加：P(A) = Σ P(Bₖ)P(A|Bₖ)', '分类要不重不漏，每一类都可独立算出概率后再合并'] },
        { type: 'example', label: '例题1', text: '某工厂有两台机床，甲机床产量占 60%，次品率 3%；乙机床产量占 40%，次品率 5%。任取一件产品为次品的概率是多少？<br><br><strong>解</strong>：设 A 为“取到次品”，B₁、B₂ 分别表示“来自甲、乙机床”。<br>由全概率公式：<br>P(A) = P(B₁)P(A|B₁) + P(B₂)P(A|B₂)<br>= 0.6 × 0.03 + 0.4 × 0.05 = 0.018 + 0.020 = <strong>0.038</strong>。<br>即任取一件为次品的概率为 0.038。' },
        { type: 'heading', text: '二、模型识别思想' },
        { type: 'paragraph', text: '拿到一道概率应用题，第一步不是急着套公式，而是判断它属于哪种概率模型。模型判断错了，后续计算全盘皆错。最常考查的识别有两对：二项分布与超几何分布、古典概型与几何概型。' },
        { type: 'keypoint', label: '重点·二项 vs 超几何', text: '<strong>二项分布 X~B(n,p)</strong> 对应<strong>有放回</strong>抽样（或每次试验独立、成功概率 p 不变）；<strong>超几何分布</strong>对应<strong>无放回</strong>抽样（总体 N 个，其中 M 个“成功”，抽 n 个，抽到成功个数）。一句话：放回看独立用二项，无放回看组合用超几何。' },
        { type: 'keypoint', label: '重点·古典 vs 几何', text: '<strong>古典概型</strong>：有限个等可能基本事件，P(A) = 有利数 / 总数，结果是离散比值。<strong>几何概型</strong>：基本事件有无限多个且均匀分布在某个区域，概率与<strong>区域长度、面积或体积</strong>成正比，P(A) = 子区域测度 / 总区域测度。' },
        { type: 'table', headers: ['模型', '抽样/试验特征', '关键识别点'], rows: [['二项分布 X~B(n,p)', '有放回、各次独立', '成功概率 p 恒定，计“成功次数”'], ['超几何分布', '无放回抽取', '总体有限，按组合数求概率'], ['古典概型', '有限等可能基本事件', 'P = 有利数 / 总数'], ['几何概型', '无限、均匀分布', 'P = 子区域测度 / 总测度']] },
        { type: 'warn', label: '易错·模型识别', text: '最易混淆的是<strong>二项分布与超几何分布</strong>：题目说“有放回”或“每次试验独立”才用二项；若明确“无放回”且总体有限，则必须用超几何。看清“放回与否”四个字，再决定公式，千万别张口就用 C 或张口就用 p^k。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">概率统计核心思想方法（四分支）</text><circle cx="340" cy="170" r="58" fill="#4a7de0" stroke="#2b5b9e" stroke-width="2.5"/><text x="340" y="166" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">核心</text><text x="340" y="186" font-size="14" fill="#fff" text-anchor="middle">思想方法</text><g stroke="#2b5b9e" stroke-width="2"><line x1="282" y1="170" x2="160" y2="100"/><line x1="282" y1="170" x2="160" y2="240"/><line x1="398" y1="170" x2="520" y2="100"/><line x1="398" y1="170" x2="520" y2="240"/></g><g font-size="15" font-weight="bold" text-anchor="middle"><rect x="70" y="78" width="150" height="44" rx="8" fill="#cfe0f7" stroke="#4a7de0"/><text x="145" y="105" fill="#2b5b9e">分类讨论</text><rect x="70" y="218" width="150" height="44" rx="8" fill="#cfe0f7" stroke="#4a7de0"/><text x="145" y="245" fill="#2b5b9e">模型识别</text><rect x="460" y="78" width="150" height="44" rx="8" fill="#f3e6f7" stroke="#7a5aa0"/><text x="535" y="105" fill="#7a5aa0">用样本估计总体</text><rect x="460" y="218" width="150" height="44" rx="8" fill="#f3e6f7" stroke="#7a5aa0"/><text x="535" y="245" fill="#7a5aa0">随机思想</text></g><g font-size="12" fill="#33536e" text-anchor="middle"><text x="145" y="148">全概率分原因</text><text x="145" y="287">二项/超几何</text><text x="535" y="148">样本推总体</text><text x="535" y="287">期望方差刻画</text></g></svg>', caption: '图1　四大核心思想：分类讨论、模型识别、用样本估计总体、随机思想，是贯穿概率统计复习的主线。' },
        { type: 'heading', text: '三、用样本估计总体思想' },
        { type: 'paragraph', text: '统计推断的根本思想，是用从总体中抽取的样本所呈现的特征，去推断总体的相应特征。样本是“窗口”，总体是“真相”，估计的可靠性取决于抽样的随机性与样本量。' },
        { type: 'keypoint', label: '重点·统计推断', text: '用样本的<strong>频率</strong>估计总体的<strong>概率</strong>，用样本<strong>均值 x̄</strong> 估计总体均值，用样本<strong>方差</strong>估计总体波动。直方图、茎叶图、扇形图等图表是展示样本分布的工具，读图后提取数字特征再下结论，是统计题的标准套路。' },
        { type: 'list', items: ['频率估计概率：当试验次数大时，事件频率趋近其概率', '样本均值 x̄ 估计总体平均水平', '样本方差估计总体波动大小', '抽样必须随机，避免人为偏好影响估计准确度'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">抽样方式决定分布类型</text><rect x="60" y="70" width="260" height="150" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="190" y="98" font-size="15" font-weight="bold" fill="#2b5b9e" text-anchor="middle">有放回抽样</text><text x="190" y="130" font-size="14" fill="#33536e" text-anchor="middle">每次独立</text><text x="190" y="158" font-size="14" fill="#33536e" text-anchor="middle">成功概率 p 不变</text><text x="190" y="190" font-size="15" fill="#c0392b" text-anchor="middle">→ 二项分布 X~B(n,p)</text><rect x="360" y="70" width="260" height="150" fill="#f3e6f7" stroke="#7a5aa0" stroke-width="2"/><text x="490" y="98" font-size="15" font-weight="bold" fill="#7a5aa0" text-anchor="middle">无放回抽样</text><text x="490" y="130" font-size="14" fill="#33536e" text-anchor="middle">总体有限</text><text x="490" y="158" font-size="14" fill="#33536e" text-anchor="middle">按组合数求概率</text><text x="490" y="190" font-size="15" fill="#c0392b" text-anchor="middle">→ 超几何分布</text><text x="340" y="245" font-size="14" fill="#33536e" text-anchor="middle">看清“放回与否”，再选模型</text></svg>', caption: '图2　抽样方式直接决定模型：有放回→二项分布，无放回→超几何分布，模型识别是解题第一步。' },
        { type: 'heading', text: '四、随机思想' },
        { type: 'paragraph', text: '概率统计研究的是不确定性。随机思想要求我们用概率描述不确定事件发生的可能性，用期望刻画平均水平，用方差刻画波动与风险，而非追求一个绝对确定的结果。' },
        { type: 'keypoint', label: '重点·随机刻画', text: '用<strong>概率</strong>描述不确定性（如正态分布中约 99.7% 的数据落在均值 ±3σ 内，即 3σ 原则）；用<strong>期望 E(X)</strong> 刻画平均水平与长期收益；用<strong>方差 D(X)</strong> 刻画波动风险——方差越大，结果越不稳定。决策时往往“期望看收益，方差看风险”。' },
        { type: 'tip', label: '提示·正态3σ', text: '<strong>正态分布 3σ 原则</strong>：若 X~N(μ, σ²)，则 P(μ-σ ≤ X ≤ μ+σ) ≈ 0.683，P(μ-2σ ≤ X ≤ μ+2σ) ≈ 0.954，P(μ-3σ ≤ X ≤ μ+3σ) ≈ 0.997。小题常直接考查这三个区间的概率。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">正态分布 3σ 原则</text><path d="M40 200 Q200 40 340 200 Q480 40 640 200" fill="none" stroke="#2b5b9e" stroke-width="3"/><g stroke="#4a7de0" stroke-width="1"><line x1="200" y1="60" x2="200" y2="200"/><line x1="480" y1="60" x2="480" y2="200"/></g><g stroke="#7a5aa0" stroke-width="1"><line x1="140" y1="105" x2="140" y2="200"/><line x1="540" y1="105" x2="540" y2="200"/></g><g stroke="#c0392b" stroke-width="1" stroke-dasharray="4 3"><line x1="80" y1="155" x2="80" y2="200"/><line x1="600" y1="155" x2="600" y2="200"/></g><text x="340" y="225" font-size="14" fill="#33536e" text-anchor="middle">μ-3σ　μ-2σ　μ-σ　μ　μ+σ　μ+2σ　μ+3σ</text><text x="340" y="245" font-size="13" fill="#c0392b" text-anchor="middle">±1σ≈68.3%　±2σ≈95.4%　±3σ≈99.7%</text></svg>', caption: '图3　正态曲线下，数据落在均值 ±1σ、±2σ、±3σ 区间的概率分别为约 68.3%、95.4%、99.7%。' },
        { type: 'example', label: '例题2', text: '某产品质量检测分“有放回”与“无放回”两种情境，分别如何建模？<br>（1）从一批 100 件（含 5 件次品）中，每次取 1 件检验后放回，共取 3 次，记抽到次品的次数为 X；<br>（2）从同一批中一次性抽取 3 件，记其中次品件数为 Y。<br><br><strong>解</strong>：（1）有放回，各次独立，每次抽到次品概率 p = 5/100 = 0.05，故 <strong>X~B(3, 0.05)</strong>；（2）无放回、总体有限，故 <strong>Y 服从超几何分布</strong>（N=100, M=5, n=3）。两问模型不同，不能用同一公式。' },
        { type: 'warn', label: '易错·随机思想', text: '用期望做决策时，不能只看 E(X) 而忽视 D(X)。两套方案期望相同，应选方差较小者（风险低）；期望高但方差极大，可能暗含较大亏损风险。把“期望看收益、方差看风险”作为随机思想的落脚点。' },
        { type: 'list', items: ['分类讨论：全概率分原因，先划分样本空间再加权求和', '模型识别：放回→二项，无放回→超几何；有限等可能→古典，无限均匀→几何', '用样本估计总体：频率估概率、样本均值与方差估总体', '随机思想：概率描不确定，E(X) 看平均，D(X) 看波动风险', '解题第一步永远是“判定模型”，再谈计算'] }
      ],
      exercises: [
        { type: 'choice', question: '全概率公式体现的核心思想是？', options: ['模型识别', '分类讨论', '用样本估计总体', '随机思想'], answer: '分类讨论', explanation: '全概率公式先把样本空间划分为若干互斥的原因事件，再逐类计算条件概率并加权求和，本质上是按原因分类讨论后合并结果，体现的是分类讨论思想。模型识别关注选用何种分布，用样本估计总体关注统计推断，随机思想关注用数字特征刻画不确定性。' },
        { type: 'choice', question: '从总体中“有放回”抽取 n 次，记成功次数为 X，则 X 服从？', options: ['超几何分布', '二项分布 X~B(n,p)', '正态分布', '几何概型'], answer: '二项分布 X~B(n,p)', explanation: '有放回抽样使各次试验相互独立，每次成功概率 p 保持不变，成功次数 X 服从二项分布 X~B(n,p)。超几何分布对应无放回抽取，正态分布描述连续型随机变量，几何概型处理无限均匀分布的区域测度问题，均不符合题意。' },
        { type: 'fill', question: '用样本的均值 x̄ 来估计总体的 ____，用样本的方差来估计总体的波动，这体现了“用样本估计总体”的思想。', answer: '平均水平', explanation: '统计推断的核心思想是用样本特征推断总体特征：样本的频率估计总体的概率，样本均值 x̄ 估计总体的平均水平，样本方差估计总体的波动大小。这一思想贯穿统计图表读取与数字特征计算，是高考统计小题的常考落脚点。' },
        { type: 'choice', question: '关于正态分布 3σ 原则，下列说法正确的是？', options: ['P(μ-σ≤X≤μ+σ)≈0.997', 'P(μ-2σ≤X≤μ+2σ)≈0.954', 'P(μ-3σ≤X≤μ+3σ)≈0.683', '数据几乎不落在 ±3σ 内'], answer: 'P(μ-2σ≤X≤μ+2σ)≈0.954', explanation: '正态分布 3σ 原则给出三档区间概率：±1σ 约 0.683，±2σ 约 0.954，±3σ 约 0.997。选项把三档数值错位，只有 ±2σ 约 0.954 正确；±3σ 才是约 0.997，且数据绝大部分落在 ±3σ 之内而非几乎不落。' },
        { type: 'fill', question: '从 100 件产品（含 5 件次品）中一次性无放回抽取 3 件，记次品件数为 Y，则 Y 服从 ____ 分布。', answer: '超几何', explanation: '无放回且总体有限，抽到次品的件数 Y 服从超几何分布，参数为总体容量 N=100、成功数 M=5、抽取数 n=3。若题目改为有放回抽取，则各次独立、成功概率恒定，才改为二项分布 X~B(3,0.05)。放回与否是二者区分的根本标志。' }
      ]
    },

    /* ---------------- 第2课时 常见题型与备考策略、答题规范 ---------------- */
    {
      id: 'zt6-u7-l2',
      name: '常见题型与备考策略（含答题规范）',
      chapter: '概率统计复习 · 十四、常见题型与备考策略（含答题规范）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、小题常考考点' },
        { type: 'list', items: ['古典概型的概率计算（列举或排列组合求比值）', '条件概率与乘法公式 P(AB)=P(A)P(B|A)', '正态分布 3σ 原则与区间概率', '统计图表读取与均值、方差等数字特征计算', '二项分布与超几何分布的识别与判断'] },
        { type: 'keypoint', label: '重点·小题', text: '小题重在<strong>快而准</strong>：古典概型先定基本事件总数与有利数；条件概率认准“在 A 发生条件下 B 的概率”即 P(B|A)；正态分布直接套 3σ 三档概率；统计题先读图再算 x̄、方差；分布识别抓住“放回与否”“有限与否”。' },
        { type: 'tip', label: '提示·小题', text: '小题也常出现“二项/超几何”与“独立/互斥”的识别坑。独立是概率上的乘积关系，互斥是不能同时发生；二者不是一回事。考前把易混概念列成对照表，可避免小题失分。' },
        { type: 'heading', text: '二、解答题三大方向及占比' },
        { type: 'paragraph', text: '概率统计解答题（约 12 分）的命制相对稳定，主要沿三个方向展开。把握各方向的分值与流程，复习才能有的放矢、作答才能踩准得分点。' },
        { type: 'table', headers: ['方向', '约占分', '标准流程'], rows: [['分布列 + 期望 + 方差', '50%', '确定取值 → 求概率 → 列表 → 算数字特征'], ['二项 / 超几何分布', '30%', '模型识别 → 代入公式计算'], ['独立性检验 或 回归分析', '20%', '列联表 → χ² → 结论 / 求回归方程 → 预测']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">解答题三大方向占比（约 12 分）</text><path d="M340 170 L440 170 A100 100 0 0 1 240 170 Z" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.5"/><path d="M340 170 L240 170 A100 100 0 0 1 370.9 54.9 Z" fill="#7a5aa0" stroke="#4a7de0" stroke-width="1.5"/><path d="M340 170 L370.9 54.9 A100 100 0 0 1 440 170 Z" fill="#e05d44" stroke="#c0392b" stroke-width="1.5"/><g font-size="14" fill="#33536e"><text x="470" y="120">■ 分布列+期望+方差 50%</text><text x="470" y="150">■ 二项/超几何 30%</text><text x="470" y="180">■ 独立性检验/回归 20%</text></g><text x="340" y="300" font-size="13" fill="#c0392b" text-anchor="middle">分布列+期望+方差是解答题核心，务必熟练掌握</text></svg>', caption: '图1　解答题三大方向占比：分布列与数字特征约占一半，是得分主战场。' },
        { type: 'keypoint', label: '方向一·分布列', text: '<strong>分布列 + 期望 + 方差（约 50%）</strong>：步骤为①确定随机变量 X 的所有可能取值；②逐个求 P(X=k)；③列出分布列表格；④用公式 E(X)=Σ k·P(X=k)、D(X)=Σ (k-E(X))²·P(X=k) 计算数字特征。这是最经典、分值最高的方向。' },
        { type: 'keypoint', label: '方向二·分布模型', text: '<strong>二项 / 超几何分布（约 30%）</strong>：先判定模型——有放回、独立则 X~B(n,p)，套 P(X=k)=C_n^k p^k (1-p)^{n-k}；无放回、总体有限则套超几何概率公式。模型识别写清楚，公式代入即得分。' },
        { type: 'keypoint', label: '方向三·检验回归', text: '<strong>独立性检验 或 回归分析（约 20%）</strong>：独立性检验流程为列联表 → 计算 χ² = n(ad-bc)² / [(a+b)(c+d)(a+c)(b+d)] → 与临界值比较下结论；回归分析流程为求回归方程 ŷ=b̂x+â → 代入预测。注意公式中的 Σ 与样本均值 x̄ 的代入。' },
        { type: 'heading', text: '三、2026 新增重点：条件概率与全概率' },
        { type: 'paragraph', text: '2026 年高考明确加强对条件概率与全概率公式的考查。这类题常以分层情境出现，要求学生先对样本空间做划分，再用全概率公式“由因求果”，必要时用贝叶斯公式“由果溯因”。' },
        { type: 'keypoint', label: '重点·全概率流程', text: '<strong>标准流程</strong>：① 划分样本空间为互斥事件 B₁、B₂、…、Bₙ（Σ P(Bₖ)=1）；② 写全概率公式 P(A)=Σ P(Bₖ)P(A|Bₖ)；③ 若需反推某原因，用<strong>贝叶斯公式</strong> P(Bₖ|A)=P(Bₖ)P(A|Bₖ)/P(A)。把“划分—加权—反推”三步练成肌肉记忆。' },
        { type: 'tip', label: '新增·2026', text: '全概率题的得分关键在于<strong>先把样本空间正确划分</strong>。划分要做到“两两互斥、并为全集”。若题目给出多道工序、多台机器、多地区来源等，往往就是天然的划分依据，直接对应 B₁、B₂、…。' },
        { type: 'warn', label: '易错·贝叶斯', text: '使用贝叶斯公式时，分母 P(A) 必须用全概率公式算出，不能想当然取 1；分子是“该原因下的条件概率 × 该原因概率”。混淆 P(A|Bₖ) 与 P(Bₖ|A) 是常见错误，务必分清“由因求果”与“由果溯因”。' },
        { type: 'heading', text: '四、备考三阶段' },
        { type: 'list', items: ['一轮：全面掌握概念与基本运算，区分易混概念（互斥与独立、二项与超几何）', '一轮：熟记公式与 3σ 三档概率，做到见题能判定模型', '二轮：突破解答题格式规范，建立全概率标准流程，关注概率与数列/导数交汇'] },
        { type: 'list', items: ['二轮：整理“分布列+期望”与“独立性检验”的答题模板，限时套用', '三轮：限时训练，提高读图与计算速度，控制失误率', '三轮：回顾错题本，针对常错模型识别与公式代入查漏补缺'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">备考三阶段时间轴</text><line x1="80" y1="130" x2="620" y2="130" stroke="#33536e" stroke-width="2"/><g><circle cx="180" cy="130" r="12" fill="#4a7de0"/><circle cx="350" cy="130" r="12" fill="#7a5aa0"/><circle cx="520" cy="130" r="12" fill="#e05d44"/></g><g font-size="15" font-weight="bold" text-anchor="middle"><text x="180" y="100" fill="#2b5b9e">一轮</text><text x="350" y="100" fill="#7a5aa0">二轮</text><text x="520" y="100" fill="#c0392b">三轮</text></g><g font-size="12" fill="#33536e" text-anchor="middle"><text x="180" y="160">全面概念</text><text x="180" y="178">区分易混</text><text x="350" y="160">答题规范</text><text x="350" y="178">全概率流程</text><text x="520" y="160">限时训练</text><text x="520" y="178">回顾错题</text></g></svg>', caption: '图2　备考三阶段：一轮打基础、二轮练规范、三轮提速度与稳定性。' },
        { type: 'heading', text: '五、答题规范五步（核心得分点）' },
        { type: 'paragraph', text: '解答题按步骤给分，规范表达就是得分保障。以下五步覆盖了“分布列+期望”类题目的全部核心得分点，务必按序书写、缺一不可。' },
        { type: 'keypoint', label: '步骤①', text: '<strong>明确随机变量</strong>：设 X 为……（说明实际意义），并列出 X 的所有可能取值。这一步是后续一切的前提，漏写会丢掉“设元”分。' },
        { type: 'keypoint', label: '步骤②', text: '<strong>说明分布类型</strong>：明确写出“由题意 X~B(n,p)”或“X 服从超几何分布”，表明模型识别已完成，是判定能否代入对应公式的关键得分点。' },
        { type: 'keypoint', label: '步骤③', text: '<strong>写出分布列</strong>：以表格（X 取值一行、对应概率一行）或公式形式列出各 P(X=k)。表格要规范，概率之和为 1 是自检标准。' },
        { type: 'keypoint', label: '步骤④', text: '<strong>套公式求数字特征</strong>：代入 E(X)=Σ k·P(X=k)、D(X)=Σ (k-E(X))²·P(X=k) 计算期望与方差，写出主要过程而非只给结果。' },
        { type: 'keypoint', label: '步骤⑤', text: '<strong>结合实际问题下结论</strong>：用一句话把数字特征翻译回实际意义（如“该方案平均获利 E(X) 元”），回应题目所问，完成闭环。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">答题规范五步流程图</text><g font-size="13" font-weight="bold" fill="#fff" text-anchor="middle"><rect x="30" y="90" width="86" height="44" rx="6" fill="#4a7de0"/><text x="73" y="117">①设X</text><rect x="146" y="90" width="86" height="44" rx="6" fill="#4a7de0"/><text x="189" y="117">②取值</text><rect x="262" y="90" width="86" height="44" rx="6" fill="#7a5aa0"/><text x="305" y="117">③概率</text><rect x="378" y="90" width="86" height="44" rx="6" fill="#7a5aa0"/><text x="421" y="117">④分布列</text><rect x="494" y="90" width="86" height="44" rx="6" fill="#e05d44"/><text x="537" y="117">⑤E(X)作答</text></g><g stroke="#33536e" stroke-width="2"><line x1="116" y1="112" x2="146" y2="112"/><line x1="232" y1="112" x2="262" y2="112"/><line x1="348" y1="112" x2="378" y2="112"/><line x1="464" y1="112" x2="494" y2="112"/></g><text x="340" y="170" font-size="13" fill="#33536e" text-anchor="middle">五步环环相扣，每步都是得分点，缺一不可</text></svg>', caption: '图3　答题规范五步：设 X → 取值 → 概率 → 分布列 → E(X) → 作答，覆盖核心得分点。' },
        { type: 'example', label: '例题', text: '某游戏通关概率 0.6，独立挑战 3 次，记通关次数为 X，求 X 的分布列与 E(X)。<br><br><strong>解（五步规范）</strong>：<br>① 设 X 为 3 次中通关的次数，X 的可能取值为 0、1、2、3。<br>② 各次独立，每次成功概率 p=0.6，故 X~B(3, 0.6)。<br>③ 分布列：P(X=k)=C_3^k 0.6^k 0.4^{3-k}，得<br>P(X=0)=0.064，P(X=1)=0.288，P(X=2)=0.432，P(X=3)=0.216。<br>④ E(X)=Σ k·P(X=k)=0×0.064+1×0.288+2×0.432+3×0.216=1.8。<br>⑤ 答：X 的分布列如上，平均通关次数 E(X)=1.8 次。' },
        { type: 'warn', label: '易错·规范', text: '最可惜的失分是“算对但写不规范”：不写“X~B(n,p)”直接代公式、分布列表格概率和不为 1、E(X) 只给结果不写过程、最后不下结论。每一步都对应步骤分，按五步书写才能把该拿的分拿满。' },
        { type: 'tip', label: '核心提醒', text: '概率统计是高考最贴近现实、方法最规范的板块。复习总方针：<strong>概念清、公式熟、计算准、表达规范</strong>。把模型识别练成直觉，把五步书写练成习惯，把错题本当成提分本，这块分数就能稳稳到手。' },
        { type: 'list', items: ['小题：古典概型、条件概率、3σ、图表读取、分布识别', '解答题三方向：分布列+期望方差 50%、二项/超几何 30%、检验回归 20%', '2026 新增：条件概率与全概率（划分→全概率→贝叶斯）', '备考三阶段：一轮打基础、二轮练规范、三轮提速度', '答题五步：设X→取值→概率→分布列→E(X)→作答'] }
      ],
      exercises: [
        { type: 'choice', question: '在概率统计解答题（约 12 分）的三大方向中，占比最高的是？', options: ['独立性检验或回归分析', '二项/超几何分布', '分布列 + 期望 + 方差', '统计图表绘制'], answer: '分布列 + 期望 + 方差', explanation: '解答题三大方向分值约为：分布列与期望方差占 50%，二项或超几何分布占 30%，独立性检验或回归分析占 20%。分布列加数字特征是经典核心方向，分值最高、步骤最固定，是复习与作答的重中之重，必须熟练掌握取值、列表、算特征的全过程。' },
        { type: 'choice', question: '答题规范五步中，第一步应当是？', options: ['写出分布列', '套公式求 E(X)', '明确随机变量 X 及其取值', '结合问题下结论'], answer: '明确随机变量 X 及其取值', explanation: '五步规范依次为：①明确随机变量并列出取值，②说明分布类型，③写出分布列，④套公式求数字特征，⑤结合实际问题下结论。第一步是设元并说明取值，这是后续求概率与列分布列的前提，漏写会丢失“设元”步骤分，不可跳过。' },
        { type: 'fill', question: '2026 年高考新增重点为条件概率与全概率公式，其标准流程是：先划分样本空间，再用 ____ 公式由因求果，必要时用贝叶斯公式由果溯因。', answer: '全概率', explanation: '2026 年新增考查条件概率与全概率公式，标准流程为先把样本空间划分为若干互斥原因事件，再使用全概率公式 P(A)=Σ P(Bₖ)P(A|Bₖ) 由因求果；若需反推某原因，则用贝叶斯公式 P(Bₖ|A) 由果溯因。划分样本空间是第一步，也是得分关键。' },
        { type: 'choice', question: '用贝叶斯公式 P(Bₖ|A) 计算时，分母 P(A) 应当如何得到？', options: ['直接取 1', '用全概率公式算出', '等于 P(Bₖ)', '等于 P(A|Bₖ)'], answer: '用全概率公式算出', explanation: '贝叶斯公式 P(Bₖ|A)=P(Bₖ)P(A|Bₖ)/P(A) 中，分母 P(A) 是事件 A 的总概率，必须用全概率公式 P(A)=Σ P(Bₖ)P(A|Bₖ) 先算出，不能想当然取 1。分子为对应原因的概率与条件概率之积，混淆 P(A|Bₖ) 与 P(Bₖ|A) 是常见错误。' },
        { type: 'fill', question: '独立性检验的标准流程为：列联表 → 计算 ____ → 与临界值比较并下结论。', answer: 'χ²', explanation: '独立性检验三步走：先列出 2×2 列联表，再计算卡方统计量 χ²=n(ad-bc)²/[(a+b)(c+d)(a+c)(b+d)]，最后把 χ² 与临界值比较，若超过临界值则判断两变量有关。回归分析则是求回归方程 ŷ=b̂x+â 后代入预测，二者流程不同。' }
      ]
    }

  );
})();
