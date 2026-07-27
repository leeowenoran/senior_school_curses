/* ============================================================
 * 高三数学 · 高考复习专题 · 概率统计
 * 第1课时：考试要求、命题趋势与两个基本计数原理
 * 第2课时：排列与组合
 * 数据注入：math.zt6.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt6');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 考试要求、命题趋势与两个基本计数原理 ---------------- */
    {
      id: 'zt6-u1-l1',
      name: '考试要求、命题趋势与两个基本计数原理',
      chapter: '概率统计复习 · 一、考试要求、命题趋势与两个基本计数原理',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、高考定位与分值分布' },
        { type: 'paragraph', text: '概率统计是高考数学中相对独立、规律性强的板块。整体来看，该板块难度适中，计算量不大，是整套试卷里较容易拿满分的区域之一。复习时应以稳为主，把基础分和解答题的分值牢牢抓住。' },
        { type: 'keypoint', label: '重点·高考定位', text: '概率统计板块在高考中约占 <strong>17—22 分</strong>，通常由 <strong>1—2 道小题</strong>（选择或填空）和 <strong>1 道解答题</strong>构成。解答题常出现在第 18 或 19 题的位置，分值约 12—15 分，应力争稳拿，不丢基础分。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">高考概率统计分值分布（约 17—22 分）</text><line x1="80" y1="260" x2="620" y2="260" stroke="#33536e" stroke-width="2"/><rect x="140" y="180" width="110" height="80" fill="#4a7de0" stroke="#2b5b9e" stroke-width="1.5"/><text x="195" y="172" font-size="15" fill="#33536e" text-anchor="middle">小题 约 8 分</text><rect x="310" y="130" width="110" height="130" fill="#7a5aa0" stroke="#4a7de0" stroke-width="1.5"/><text x="365" y="122" font-size="15" fill="#33536e" text-anchor="middle">解答题 约 13 分</text><rect x="480" y="60" width="110" height="200" fill="#e05d44" stroke="#c0392b" stroke-width="1.5"/><text x="535" y="52" font-size="15" fill="#c0392b" text-anchor="middle">合计 约 20 分</text><g font-size="14" fill="#33536e" text-anchor="middle"><text x="195" y="285">1—2 小题</text><text x="365" y="285">第 18/19 题</text><text x="535" y="285">稳拿满分板块</text></g></svg>', caption: '图1　概率统计板块分值构成：小题与解答题合计约 17—22 分，是较易拿满分的板块。' },
        { type: 'heading', text: '二、课标要求概述与命题趋势' },
        { type: 'paragraph', text: '依据课标，本板块要求学生理解随机现象、掌握概率与统计的基本思想和计算方法，能够读取并分析统计图表，会求常见数字特征，并能在真实情境中建立概率模型。' },
        { type: 'list', items: ['小题：侧重概率计算、统计图表识读、均值方差等数字特征', '解答题：常考离散型随机变量的分布列与数字特征、独立性检验或线性回归', '2026 年新增全概率公式的考查，需掌握由因求果的分层概率方法', '题目情境贴近社会热点，强调用数学解决真实问题'] },
        { type: 'table', headers: ['题型', '常见考点', '分值特点'], rows: [['选择题/填空题', '古典概型、几何概型、统计图表、数字特征', '每题 5 分，共约 5—10 分'], ['解答题（第18/19题）', '分布列与数字特征、独立性检验、回归分析', '约 12—15 分'], ['新增方向', '全概率公式、条件概率的综合应用', '融入各题型中']] },
        { type: 'tip', label: '新增·2026', text: '2026 年高考新增<strong>全概率公式</strong>的考查：当事件可依据若干互斥原因分层时，可用全概率公式把复杂事件的概率拆成各层条件概率的加权和。复习时要补上这一题型，避免考场上措手不及。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">命题趋势：题型与考点分布</text><rect x="60" y="70" width="270" height="180" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="195" y="98" font-size="16" font-weight="bold" fill="#2b5b9e" text-anchor="middle">小题（1—2 道）</text><g font-size="14" fill="#33536e"><text x="80" y="130">· 概率计算</text><text x="80" y="158">· 统计图表识读</text><text x="80" y="186">· 数字特征</text><text x="80" y="214">· 抽样与茎叶图</text></g><rect x="350" y="70" width="270" height="180" fill="#f3e6f7" stroke="#7a5aa0" stroke-width="2"/><text x="485" y="98" font-size="16" font-weight="bold" fill="#7a5aa0" text-anchor="middle">解答题（1 道）</text><g font-size="14" fill="#33536e"><text x="370" y="130">· 分布列与数字特征</text><text x="370" y="158">· 独立性检验</text><text x="370" y="186">· 线性回归</text><text x="370" y="214">· 2026 新增全概率</text></g><text x="340" y="285" font-size="14" fill="#c0392b" text-anchor="middle">情境贴近社会热点，注重实际应用</text></svg>', caption: '图2　命题趋势：小题重基础计算与图表，解答题重综合应用，2026 新增全概率公式考查。' },
        { type: 'warn', label: '易错·情境', text: '概率统计解答题常以<strong>社会热点情境</strong>为背景（如疫苗接种、产品质量、运动健康）。读题时要先抽象出数学模型，再套用公式；切勿被冗长文字干扰，<strong>找准样本空间与事件</strong>是关键。' },
        { type: 'heading', text: '三、分类加法计数原理' },
        { type: 'paragraph', text: '计数是概率与排列组合的基础。面对“有多少种不同的方法”这类问题，第一步是判断该用加法还是乘法，核心在于区分“分类”与“分步”。' },
        { type: 'keypoint', label: '重点·分类加法', text: '完成一件事有 <strong>n 类不同方案</strong>，且<strong>每一类方案都能独立完成这件事</strong>（各类彼此独立），那么完成这件事的总方法数等于各类方法数<strong>相加</strong>，即 N = n₁ + n₂ + … + nₙ。' },
        { type: 'example', label: '例题1', text: '从甲地到乙地，陆路有 3 种走法，水路有 2 种走法。问共有多少种不同走法？<br><br><strong>解</strong>：无论走陆路还是走水路，任选一类都能独立到达乙地，属于“分类”问题，适用分类加法计数原理。<br>总走法 = 3 + 2 = <strong>5 种</strong>。' },
        { type: 'heading', text: '四、分步乘法计数原理' },
        { type: 'paragraph', text: '与“分类”相对的是“分步”。当一件事必须依次经历若干步骤、缺少任何一步都无法完成时，就要把各步的方法数相乘。' },
        { type: 'keypoint', label: '重点·分步乘法', text: '完成一件事需要 <strong>n 个步骤</strong>，且<strong>各步骤相互依存</strong>，必须依次完成所有步骤才算完成这件事，那么总方法数等于各步方法数<strong>相乘</strong>，即 N = m₁ × m₂ × … × mₙ。' },
        { type: 'example', label: '例题2', text: '从甲地到乙地需分两段行程，第一段有 3 种走法，第二段有 2 种走法，每段都必须选定一种。问共有多少种走法？<br><br><strong>解</strong>：两段行程相互依存，必须先后完成两段才能到达，属于“分步”问题，适用分步乘法计数原理。<br>总走法 = 3 × 2 = <strong>6 种</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">分类加法 与 分步乘法 思维对比</text><rect x="60" y="70" width="250" height="150" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="185" y="98" font-size="15" font-weight="bold" fill="#2b5b9e" text-anchor="middle">分类加法</text><text x="185" y="128" font-size="14" fill="#33536e" text-anchor="middle">各类方案独立</text><text x="185" y="156" font-size="14" fill="#33536e" text-anchor="middle">任选一类即可完成</text><text x="185" y="190" font-size="15" fill="#c0392b" text-anchor="middle">方法数 相加：3 + 2 = 5</text><rect x="370" y="70" width="250" height="150" fill="#f3e6f7" stroke="#7a5aa0" stroke-width="2"/><text x="495" y="98" font-size="15" font-weight="bold" fill="#7a5aa0" text-anchor="middle">分步乘法</text><text x="495" y="128" font-size="14" fill="#33536e" text-anchor="middle">各步相互依存</text><text x="495" y="156" font-size="14" fill="#33536e" text-anchor="middle">须依次完成各步</text><text x="495" y="190" font-size="15" fill="#c0392b" text-anchor="middle">方法数 相乘：3 × 2 = 6</text><text x="340" y="258" font-size="14" fill="#33536e" text-anchor="middle">口诀：分类用加法，分步用乘法</text></svg>', caption: '图3　分类加法（独立相加）与分步乘法（依存相乘）的思维流程对比。' },
        { type: 'heading', text: '五、口诀与易错提醒' },
        { type: 'keypoint', label: '口诀', text: '<strong>分类用加法，分步用乘法。</strong>判断依据：各类方案能否独立完成这件事（能→加法）；各步是否必须依次完成、缺一不可（是→乘法）。' },
        { type: 'warn', label: '易错', text: '使用分类加法时，要注意<strong>不重不漏</strong>：各类之间不能有重叠（否则重复计数），也不能遗漏某一类（否则少算）。使用分步乘法时，要确保每个步骤<strong>完整</strong>且各步相互独立衔接，漏掉一步就会导致整件事无法完成。' },
        { type: 'tip', label: '判断技巧', text: '拿到计数题先自问：选其中一类方案能不能直接完成目标？<strong>能</strong>就用加法；<strong>不能</strong>、必须连走几步才行，就用乘法。把“完成一件事”的标准想清楚，加法与乘法自然分清。' },
        { type: 'list', items: ['高考定位：概率统计约 17—22 分，含 1—2 小题与 1 解答题，力争拿满分', '命题趋势：小题重计算与图表，解答题重分布列、独立性检验或回归，2026 新增全概率', '分类加法：各类独立、任选一类即可完成，方法数相加', '分步乘法：各步依存、须依次完成，方法数相乘', '口诀：分类用加法，分步用乘法；分类要不重不漏，分步要各步完整'] }
      ],
      exercises: [
        { type: 'choice', question: '关于高考概率统计板块的分值，下列说法正确的是？', options: ['约 5—8 分', '约 17—22 分', '约 30—35 分', '约 40 分以上'], answer: '约 17—22 分', explanation: '概率统计板块在高考中通常占 17 至 22 分，包含 1 到 2 道小题和 1 道解答题。该板块计算量不大、规律性强，属于较易拿满分的题目，解答题常位于第 18 或 19 题，应力争稳拿 12 至 15 分。' },
        { type: 'choice', question: '完成一件事有若干类互相独立的方案，每类都能独立完成，应使用的计数原理是？', options: ['分类加法计数原理', '分步乘法计数原理', '排列数公式', '组合数公式'], answer: '分类加法计数原理', explanation: '分类加法计数原理适用于完成一件事有若干类彼此独立的方案，每一类都能独立完成这件事，总方法数等于各类方法数相加。分步乘法用于依次完成多个相互依存的步骤，二者适用条件不同，必须先判断再选用。' },
        { type: 'fill', question: '从甲地到乙地，陆路有 3 种走法，水路有 2 种走法，任选一类即可到达，共有 ____ 种不同走法。', answer: '5', explanation: '从甲地到乙地有陆路和水路两类互相独立的走法，任选其中一类都能独立到达，适用分类加法计数原理，总走法为 3 加 2 等于 5 种。分类时要做到不重不漏，不能把同一走法重复计入。' },
        { type: 'choice', question: '若行程分为两段，第一段有 3 种走法，第二段有 2 种走法，必须依次完成两段才能到达，共有多少种走法？', options: ['5', '6', '9', '12'], answer: '6', explanation: '将行程分为两段，两段相互依存，必须先后完成两段才能到达目的地，适用分步乘法计数原理。总走法等于各步方法数相乘，即 3 乘 2 等于 6 种。分步要求每一步都完整进行，缺一不可。' },
        { type: 'fill', question: '记忆口诀：分类用 ____，分步用 ____。（两空用逗号隔开）', answer: '加法，乘法', explanation: '解题时先判断是分类还是分步：若各类方案彼此独立、任选一类即可完成，则用加法；若需依次经历多个步骤、各步依存，则用乘法。口诀“分类用加法，分步用乘法”能帮助快速判断题型并选用正确原理。' }
      ]
    },

    /* ---------------- 第2课时 排列与组合 ---------------- */
    {
      id: 'zt6-u1-l2',
      name: '排列与组合',
      chapter: '概率统计复习 · 二、排列与组合',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、排列与组合的概念' },
        { type: 'paragraph', text: '排列与组合研究“从若干元素中取出一部分”的计数问题，二者最根本的区别在于是否与顺序有关。判断清楚这一点，是正确选用公式的前提。' },
        { type: 'keypoint', label: '重点·排列数', text: '从 n 个不同元素中取出 m 个（m ≤ n）并<strong>按照一定顺序排成一列</strong>，叫做排列；所有排列的个数叫<strong>排列数</strong>，记作 <strong>A_n^m</strong>，公式为 A_n^m = n! / (n-m)! 。排列<strong>与顺序有关</strong>。' },
        { type: 'keypoint', label: '重点·组合数', text: '从 n 个不同元素中取出 m 个并<strong>组成一组</strong>（不计顺序），叫做组合；所有组合的个数叫<strong>组合数</strong>，记作 <strong>C_n^m</strong>，公式为 C_n^m = n! / (m! (n-m)!) 。组合<strong>与顺序无关</strong>。' },
        { type: 'table', headers: ['对比', '排列 A_n^m', '组合 C_n^m'], rows: [['是否计顺序', '与顺序有关', '与顺序无关'], ['含义', '取出并排定顺序', '只取出组成一组'], ['公式', 'n! / (n-m)!', 'n! / (m! (n-m)!)'], ['关系', 'A_n^m = C_n^m × m!', 'C_n^m = A_n^m / m!']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">排列（有序） vs 组合（无序）</text><rect x="60" y="70" width="270" height="170" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="195" y="98" font-size="15" font-weight="bold" fill="#2b5b9e" text-anchor="middle">排列 A_n^m（有序）</text><g font-size="22" fill="#2b5b9e" text-anchor="middle"><text x="120" y="150">甲</text><text x="160" y="150">→</text><text x="205" y="150">乙</text><text x="120" y="200">乙</text><text x="160" y="200">→</text><text x="205" y="200">甲</text></g><text x="195" y="232" font-size="13" fill="#33536e" text-anchor="middle">顺序不同算不同结果</text><rect x="370" y="70" width="270" height="170" fill="#f3e6f7" stroke="#7a5aa0" stroke-width="2"/><text x="495" y="98" font-size="15" font-weight="bold" fill="#7a5aa0" text-anchor="middle">组合 C_n^m（无序）</text><g font-size="22" fill="#7a5aa0" text-anchor="middle"><text x="495" y="160">｛甲，乙｝</text></g><text x="495" y="232" font-size="13" fill="#33536e" text-anchor="middle">只关心选中哪些元素</text></svg>', caption: '图1　排列与顺序有关（甲乙与乙甲不同），组合与顺序无关（只关心分组）。' },
        { type: 'example', label: '例题1', text: '从 5 名候选人中选出 2 人作代表，有多少种不同的选法？<br><br><strong>解</strong>：选代表只关心“选出了哪两个人”，两人之间不分先后，属于组合问题。<br>方法数 = C_5^2 = 5! / (2! 3!) = (5×4)/(2×1) = <strong>10 种</strong>。' },
        { type: 'heading', text: '二、组合数性质' },
        { type: 'keypoint', label: '重点·对称性', text: '<strong>C_n^m = C_n^{n-m}</strong>。从 n 个元素中取 m 个，等价于“留下 n-m 个”，二者一一对应。利用对称性可把较大的上标转化为较小的上标，简化计算。' },
        { type: 'keypoint', label: '重点·递推公式', text: '<strong>C_n^m + C_n^{m-1} = C_{n+1}^m</strong>（杨辉三角的递推关系）。它说明从 n+1 个元素中取 m 个，可按“是否取某个特定元素”分成两类：不取其有 C_n^m 种，取之有 C_n^{m-1} 种，相加即得。' },
        { type: 'tip', label: '应用', text: '计算组合数时，若 m 大于 n/2，先用对称性换成 C_n^{n-m} 再算更省力；遇到“从 n+1 个中取 m 个”且已知相邻组合数的题目，可直接用递推公式合并，不必展开阶乘。' },
        { type: 'heading', text: '三、解题技巧概览' },
        { type: 'list', items: ['特殊元素优先法：先把受限的“特殊元素”安排好，再排其余', '相邻捆绑法：要求某些元素相邻时，先捆成整体再排列', '不相邻插空法：要求某些元素不相邻时，先排其他元素再插空', '定序问题：若干元素顺序固定时，用除法消去重复计数'] },
        { type: 'keypoint', label: '技巧·优先法', text: '<strong>特殊元素优先安排</strong>：题目中若有“某元素必须在某位置”“某元素不能在某位置”等限制，先把受限制的元素排好，再排列剩余元素，可避免分类讨论的混乱。' },
        { type: 'keypoint', label: '技巧·捆绑法', text: '<strong>相邻用捆绑</strong>：若要求某些元素必须相邻，可把它们<strong>捆成一个整体</strong>，与其余元素一起排列，最后再乘以捆绑内部的排列数。例：k 个相邻元素捆成 1 体，排列数为 (n-k+1)! × k! 。' },
        { type: 'example', label: '例题2', text: '6 人排成一排，要求甲、乙必须相邻，共有多少种排法？<br><br><strong>解</strong>：用捆绑法，把甲、乙看作一个整体，与其余 4 人共 5 个元素全排列，有 5! = 120 种；甲、乙内部可交换顺序，有 2! = 2 种。<br>由分步乘法，总排法 = 120 × 2 = <strong>240 种</strong>。' },
        { type: 'keypoint', label: '技巧·插空法', text: '<strong>不相邻用插空</strong>：若要求某些元素互不相邻，先排好其余元素，再把这些元素<strong>插入形成的空位</strong>中。若有 t 个其余元素排好形成 t+1 个空位，则从空位中选位置插入即可。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">捆绑法：相邻元素先捆后排</text><g font-size="15" fill="#33536e" text-anchor="middle"><text x="120" y="62">原 6 人：甲 乙 丙 丁 戊 己</text></g><rect x="60" y="100" width="60" height="50" fill="#e05d44" stroke="#c0392b"/><rect x="120" y="100" width="60" height="50" fill="#e05d44" stroke="#c0392b"/><rect x="180" y="100" width="60" height="50" fill="#cfe0f7" stroke="#4a7de0"/><rect x="300" y="100" width="60" height="50" fill="#cfe0f7" stroke="#4a7de0"/><rect x="420" y="100" width="60" height="50" fill="#cfe0f7" stroke="#4a7de0"/><rect x="540" y="100" width="60" height="50" fill="#cfe0f7" stroke="#4a7de0"/><text x="90" y="132" font-size="16" fill="#fff" text-anchor="middle">甲</text><text x="150" y="132" font-size="16" fill="#fff" text-anchor="middle">乙</text><text x="210" y="132" font-size="16" fill="#2b5b9e" text-anchor="middle">丙</text><text x="330" y="132" font-size="16" fill="#2b5b9e" text-anchor="middle">丁</text><text x="450" y="132" font-size="16" fill="#2b5b9e" text-anchor="middle">戊</text><text x="570" y="132" font-size="16" fill="#2b5b9e" text-anchor="middle">己</text><text x="90" y="180" font-size="13" fill="#c0392b" text-anchor="middle">捆成整体</text><text x="380" y="180" font-size="13" fill="#33536e" text-anchor="middle">整体与其余 4 人共 5 个元素排列：5! = 120</text><text x="340" y="218" font-size="14" fill="#33536e" text-anchor="middle">再乘内部 2!：120 × 2 = 240 种</text></svg>', caption: '图2　捆绑法：将甲、乙捆为一个整体，与其余 4 人共 5 个元素全排列，再乘内部顺序。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">插空法：不相邻元素先排后插</text><rect x="80" y="90" width="50" height="46" fill="#cfe0f7" stroke="#4a7de0"/><rect x="180" y="90" width="50" height="46" fill="#cfe0f7" stroke="#4a7de0"/><rect x="280" y="90" width="50" height="46" fill="#cfe0f7" stroke="#4a7de0"/><rect x="380" y="90" width="50" height="46" fill="#cfe0f7" stroke="#4a7de0"/><text x="105" y="120" font-size="15" fill="#2b5b9e" text-anchor="middle">丙</text><text x="205" y="120" font-size="15" fill="#2b5b9e" text-anchor="middle">丁</text><text x="305" y="120" font-size="15" fill="#2b5b9e" text-anchor="middle">戊</text><text x="405" y="120" font-size="15" fill="#2b5b9e" text-anchor="middle">己</text><g font-size="22" fill="#e05d44" text-anchor="middle"><text x="50" y="122">▲</text><text x="150" y="122">▲</text><text x="250" y="122">▲</text><text x="350" y="122">▲</text><text x="450" y="122">▲</text></g><text x="250" y="70" font-size="13" fill="#33536e" text-anchor="middle">先排其余 4 人（4! = 24）</text><text x="250" y="178" font-size="14" fill="#c0392b" text-anchor="middle">形成 5 个空位，甲、乙插入其中 2 个：A_5^2 = 20</text><text x="340" y="215" font-size="14" fill="#33536e" text-anchor="middle">总排法：24 × 20 = 480 种</text></svg>', caption: '图3　插空法：先排其余 4 人形成空位，再把不相邻的甲、乙插入空位中。' },
        { type: 'keypoint', label: '技巧·定序问题', text: '若 n 个元素中有 m 个元素的<strong>先后顺序已经固定</strong>（如身高由高到矮），则排列数为 <strong>n! / m!</strong>：先按全排列排好，再除以这 m 个元素自身的 m! 种顺序（它们被视为同一种）。' },
        { type: 'warn', label: '易错', text: '最容易出错的是<strong>排列与组合不分</strong>：只要是“排座位、排名次、排顺序”等顺序会改变结果的情形，就用排列；只是“分组、选人、抽样”等不计顺序的情形，就用组合。看清“顺序是否产生新结果”再下笔。' },
        { type: 'tip', label: '解题步骤', text: '解排列组合题建议四步：① 判断是与顺序有关（排列）还是无关（组合）；② 有无特殊元素或相邻/不相邻限制，选用优先、捆绑或插空；③ 是否需要分步用乘法、分类用加法；④ 算完回看是否重复或遗漏。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['排列 A_n^m 与顺序有关，组合 C_n^m 与顺序无关', '公式：A_n^m = n!/(n-m)!，C_n^m = n!/(m!(n-m)!)', '性质：C_n^m = C_n^{n-m}（对称），C_n^m + C_n^{m-1} = C_{n+1}^m（递推）', '技巧：特殊优先、相邻捆绑、不相邻插空、定序用除法', '判断根本：交换所选元素顺序是否产生新的结果'] },
        { type: 'paragraph', text: '排列与组合是概率统计的计数基础，也是解答题中分布列、期望计算的铺垫。熟练掌握两类计数原理与四大技巧，才能在复杂情境中准确、快速地得出方法数。' }
      ],
      exercises: [
        { type: 'choice', question: '排列与组合最根本的区别在于？', options: ['是否与顺序有关', '是否含有数字', '是否使用阶乘', '是否大于零'], answer: '是否与顺序有关', explanation: '排列是从 n 个不同元素中取出 m 个并按照一定顺序排成一列，结果与顺序有关；组合只取出 m 个元素组成一组，不计顺序。判断一道题是排列还是组合，关键看所选元素交换顺序后是否产生新的结果。' },
        { type: 'choice', question: '组合数 C_5^2 的值为？', options: ['10', '20', '60', '120'], answer: '10', explanation: '组合数 C_5^2 表示从 5 个不同元素中不计顺序地选取 2 个，计算公式为 5! 除以 (2! 乘 3!)，即 (5×4)/(2×1) = 10。也可利用对称性 C_5^2 = C_5^3，同样得到 10，二者结果一致。' },
        { type: 'fill', question: '排列数 A_4^2 = ____。', answer: '12', explanation: '排列数 A_4^2 表示从 4 个不同元素中取出 2 个并排定顺序，计算公式为 4! 除以 (4-2)!，即 4×3 = 12。与组合不同，排列的结果与两个元素的先后顺序有关，交换顺序算作不同的排法。' },
        { type: 'choice', question: '6 人排成一排，甲、乙必须相邻，共有多少种排法？', options: ['120', '240', '360', '720'], answer: '240', explanation: '采用捆绑法，把甲、乙看作一个整体，与其余 4 人共 5 个元素全排列，有 5! = 120 种；甲、乙内部可交换位置，有 2! = 2 种。由分步乘法，总排法为 120 乘 2 等于 240 种。' },
        { type: 'fill', question: '从 5 人中选 2 人作代表，有 ____ 种不同选法。', answer: '10', explanation: '选代表只关心选出了哪两个人，与两人的顺序无关，属于组合问题，方法数为 C_5^2 = 5!/(2!3!) = 10 种。若改为安排两个不同的职务，则顺序会产生新结果，应使用排列数计算。' }
      ]
    }

  );
})();
