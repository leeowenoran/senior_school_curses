/* ============================================================
 * 高二数学 · 选择性必修 第三册 · 第六章 计数原理
 * 第1课时：分类加法计数原理与分步乘法计数原理（人教A版 §6.1）
 * 第2课时：排列（人教A版 §6.2.1）
 * 数据注入：math.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'xb3');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 分类加法计数原理与分步乘法计数原理 ---------------- */
    {
      id: 'xb3-u1-l1',
      name: '分类加法计数原理与分步乘法计数原理',
      chapter: '第六章 计数原理 · 6.1',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、分类加法计数原理' },
        { type: 'paragraph', text: '在实际问题中，常常需要计算“完成一件事有多少种不同的方法”。例如从甲地到乙地可以坐飞机、火车或者汽车，每种交通工具的班次都能独立地把你送到目的地。这一类“任取一类即可成事”的问题，要用分类加法计数原理来解决。' },
        { type: 'keypoint', label: '重点·分类加法', text: '<strong>分类加法计数原理</strong>：完成一件事有 <strong>n 类不同的方案</strong>，在第 i 类方案中有 m_i 种不同的方法（i = 1, 2, …, n），并且<strong>各类方案相互独立、每一类都能独立完成这件事</strong>，那么完成这件事共有 <strong>N = m_1 + m_2 + … + m_n</strong> 种方法。简称为“<strong>分类用加</strong>”。' },
        { type: 'paragraph', text: '这里的“类”指的是完成这件事的若干种彼此独立的方式。只要选用其中任何一类中的某一种方法，这件事就算做完了。因此把各类的方法数直接相加，就得到总方法数。' },
        { type: 'example', label: '例题1', text: '从甲地到乙地，每天有飞机 2 班、火车 3 班、汽车 4 班。问：从甲地到乙地共有多少种不同的走法？<br><br><strong>解</strong>：坐飞机、坐火车、坐汽车是三类相互独立的走法，每一类都能单独到达乙地，适用<strong>分类加法计数原理</strong>。<br>飞机有 2 种、火车有 3 种、汽车有 4 种，故总走法数为 <strong>N = 2 + 3 + 4 = 9</strong>（种）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">分类加法计数原理：多条独立路径，方法数相加</text><circle cx="80" cy="150" r="26" fill="#4a7de0"/><text x="80" y="156" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">甲</text><circle cx="600" cy="150" r="26" fill="#4a7de0"/><text x="600" y="156" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">乙</text><g stroke="#2b5b9e" stroke-width="2.5" fill="none"><line x1="106" y1="110" x2="574" y2="110"/><line x1="106" y1="150" x2="574" y2="150"/><line x1="106" y1="190" x2="574" y2="190"/></g><g fill="#2b5b9e"><polygon points="574,110 560,104 560,116"/><polygon points="574,150 560,144 560,156"/><polygon points="574,190 560,184 560,196"/></g><g font-size="15" fill="#33536e" text-anchor="middle"><text x="340" y="102">第1类 飞机：m₁ = 2</text><text x="340" y="142">第2类 火车：m₂ = 3</text><text x="340" y="182">第3类 汽车：m₃ = 4</text></g><text x="340" y="240" font-size="17" fill="#c0392b" text-anchor="middle" font-weight="bold">N = m₁ + m₂ + m₃ = 2 + 3 + 4 = 9（种）</text><text x="340" y="266" font-size="14" fill="#33536e" text-anchor="middle">各类方案互相独立，每一类都能单独完成“从甲到乙”</text></svg>', caption: '图1　分类加法计数原理：飞机、火车、汽车三类独立路径都能直达乙，方法数相加。' },
        { type: 'heading', text: '二、分步乘法计数原理' },
        { type: 'paragraph', text: '另一类问题中，单靠一种方式无法完成这件事，必须分成几个依次进行的步骤，每一步都完成，整件事才算做完。例如从甲地经丙地再到乙地，必须先到丙、再到乙，这两步缺一不可。这一类“必须依次完成”的问题，要用分步乘法计数原理。' },
        { type: 'keypoint', label: '重点·分步乘法', text: '<strong>分步乘法计数原理</strong>：完成一件事需要 <strong>n 个步骤</strong>，在第 i 步中有 m_i 种不同的方法（i = 1, 2, …, n），并且<strong>各步骤相互依存、依次进行才能共同完成这件事</strong>，那么完成这件事共有 <strong>N = m_1 × m_2 × … × m_n</strong> 种方法。简称为“<strong>分步用乘</strong>”。' },
        { type: 'example', label: '例题2', text: '从甲地经过丙地到乙地。已知甲地到丙地有 3 条路，丙地到乙地有 2 条路。问：从甲地到乙地共有多少种不同的走法？<br><br><strong>解</strong>：这件事必须分两步完成——先从甲到丙，再从丙到乙，两步相互依存，适用<strong>分步乘法计数原理</strong>。<br>第1步有 3 种走法，第2步有 2 种走法，故总走法数为 <strong>N = 3 × 2 = 6</strong>（种）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">分步乘法计数原理：步骤串联，方法数相乘</text><circle cx="90" cy="150" r="26" fill="#4a7de0"/><text x="90" y="156" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">甲</text><circle cx="340" cy="150" r="26" fill="#7a5aa0"/><text x="340" y="156" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">丙</text><circle cx="590" cy="150" r="26" fill="#4a7de0"/><text x="590" y="156" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">乙</text><g stroke="#2b5b9e" stroke-width="2.5" fill="none"><line x1="116" y1="135" x2="314" y2="135"/><line x1="116" y1="150" x2="314" y2="150"/><line x1="116" y1="165" x2="314" y2="165"/></g><g stroke="#7a5aa0" stroke-width="2.5" fill="none"><line x1="366" y1="135" x2="564" y2="135"/><line x1="366" y1="165" x2="564" y2="165"/></g><g fill="#2b5b9e"><polygon points="314,135 300,129 300,141"/><polygon points="314,150 300,144 300,156"/><polygon points="314,165 300,159 300,171"/></g><g fill="#7a5aa0"><polygon points="564,135 550,129 550,141"/><polygon points="564,165 550,159 550,171"/></g><text x="215" y="118" font-size="15" fill="#33536e" text-anchor="middle">第1步 甲→丙：m₁ = 3</text><text x="465" y="118" font-size="15" fill="#33536e" text-anchor="middle">第2步 丙→乙：m₂ = 2</text><text x="340" y="240" font-size="17" fill="#c0392b" text-anchor="middle" font-weight="bold">N = m₁ × m₂ = 3 × 2 = 6（种）</text><text x="340" y="266" font-size="14" fill="#33536e" text-anchor="middle">各步相互依存，依次完成所有步骤才到达“乙”</text></svg>', caption: '图2　分步乘法计数原理：甲→丙→乙两步串联，方法数相乘。' },
        { type: 'heading', text: '三、两个原理的区别与联系' },
        { type: 'keypoint', label: '重点·核心区别', text: '<strong>核心区别</strong>：分类加法针对“<strong>相互独立</strong>”的若干类方案，每一类都能单独成事，用<strong>加法</strong>；分步乘法针对“<strong>相互依存</strong>”的若干步骤，必须依次完成才能成事，用<strong>乘法</strong>。<br>判断关键：看完成这件事是“<strong>分类</strong>”（任选一类即可）还是“<strong>分步</strong>”（必须步步到位）。' },
        { type: 'list', items: ['分类：各类方案互相独立，任取一类中的一种即可完成整件事，方法数相加', '分步：各步骤环环相扣，必须依次全部完成才能成事，方法数相乘', '判断口诀：能“单独完成”→分类用加；须“依次完成”→分步用乘'] },
        { type: 'warn', label: '易错', text: '最易混淆之处是分不清“分类”与“分步”。若本是相互独立的类别却误用乘法，会凭空放大方法数；若本是前后依存的步骤却误用加法，则会漏算大量组合。<strong>务必先想清楚：每一类能否单独把事做完？能→加；不能、必须连起来→乘。</strong>' },
        { type: 'example', label: '例题3', text: '一个书架有三层：上层 3 本、中层 4 本、下层 5 本。求：① 从中任取 1 本，有多少种取法？② 从上层、中层、下层各取 1 本，有多少种取法？<br><br><strong>解</strong>：① 任取 1 本，可从上层、中层或下层取，三类互相独立，用<strong>分类加法</strong>：N = 3 + 4 + 5 = <strong>12</strong>（种）。<br>② 各层各取 1 本，必须依次从三层分别取一本，三步相互依存，用<strong>分步乘法</strong>：N = 3 × 4 × 5 = <strong>60</strong>（种）。' },
        { type: 'table', headers: ['对比项', '分类加法计数原理', '分步乘法计数原理'], rows: [['完成方式', '分 n 类（相互独立）', '分 n 步（相互依存）'], ['能否单独完成', '每一类都能单独成事', '各步必须依次完成才成事'], ['运算', 'N = m₁ + m₂ + … + mₙ', 'N = m₁ × m₂ × … × mₙ'], ['关键字', '“或”（任取一类）', '“且”（步步到位）']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">分类加法 vs 分步乘法</text><rect x="40" y="60" width="280" height="210" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2"/><rect x="360" y="60" width="280" height="210" fill="#efe6f6" stroke="#7a5aa0" stroke-width="2"/><text x="180" y="88" font-size="16" fill="#2b5b9e" text-anchor="middle" font-weight="bold">分类加法（加）</text><text x="500" y="88" font-size="16" fill="#7a5aa0" text-anchor="middle" font-weight="bold">分步乘法（乘）</text><g stroke="#2b5b9e" stroke-width="2.5" fill="none"><line x1="80" y1="150" x2="280" y2="150"/><line x1="80" y1="185" x2="280" y2="185"/><line x1="80" y1="220" x2="280" y2="220"/></g><g fill="#2b5b9e"><polygon points="280,150 266,144 266,156"/><polygon points="280,185 266,179 266,191"/><polygon points="280,220 266,214 266,226"/></g><g font-size="13" fill="#33536e" text-anchor="middle"><text x="180" y="142">第1类 m₁</text><text x="180" y="177">第2类 m₂</text><text x="180" y="212">第3类 m₃</text><text x="180" y="252">N = m₁ + m₂ + m₃</text></g><g stroke="#7a5aa0" stroke-width="2.5" fill="none"><line x1="400" y1="140" x2="560" y2="140"/><line x1="560" y1="140" x2="560" y2="220"/><line x1="560" y1="220" x2="620" y2="220"/></g><g fill="#7a5aa0"><polygon points="560,220 546,214 546,226"/><polygon points="620,220 606,214 606,226"/></g><g font-size="13" fill="#33536e" text-anchor="middle"><text x="480" y="132">步骤①</text><text x="590" y="185">步骤②</text><text x="500" y="252">N = m₁ × m₂ × … × mₙ</text></g></svg>', caption: '图3　分类（左：平行独立）与分步（右：串联依存）的直观对比。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['分类加法：n 类独立方案，N = m₁ + m₂ + … + mₙ，用“加”', '分步乘法：n 步相互依存，N = m₁ × m₂ × … × mₙ，用“乘”', '判断关键：能单独完成→分类用加；须依次完成→分步用乘', '同一综合问题常需先分类、类内再分步，要灵活组合两个原理'] },
        { type: 'tip', label: '提示', text: '<strong>综合问题处理思路</strong>：很多实际问题既含分类又含分步。一般遵循“<strong>先分类，类内再分步</strong>”或“<strong>先分步，步内再分类</strong>”的原则，把复杂问题拆成若干简单的“加”与“乘”，再统一求和或求积。' },
        { type: 'paragraph', text: '两个计数原理是排列、组合与二项式定理的基础。下一节我们将学习如何用它们系统地解决“从若干元素中取出部分并按顺序排列”的问题，即排列。' }
      ],
      exercises: [
        { type: 'choice', question: '完成一件事有若干类相互独立的方案，且每一类都能单独完成这件事，应当使用哪个原理？', options: ['分类加法计数原理', '分步乘法计数原理', '既加又乘原理', '无法确定'], answer: '分类加法计数原理', explanation: '完成一件事若有若干类相互独立的方案，且每一类方案都能独立完成这件事，则总方法数等于各类方案数之和，应当使用分类加法计数原理。各类之间互不干扰，用“加法”求和；若混淆为乘法，则会错误地放大方法总数。' },
        { type: 'choice', question: '完成一件事需要依次进行若干相互依存的步骤，必须所有步骤全部完成才算做完，应当使用哪个原理？', options: ['分类加法计数原理', '分步乘法计数原理', '直接数数原理', '排除法'], answer: '分步乘法计数原理', explanation: '完成一件事若需要依次进行若干相互依存的步骤，且必须所有步骤全部完成才算做完这件事，则总方法数等于各步方法数之积，应当使用分步乘法计数原理。各步骤环环相扣，用“乘法”求积。' },
        { type: 'choice', question: '有 3 件上衣和 2 条裤子，每件上衣可与任一条裤子搭配，共有多少种不同穿法？', options: ['5', '6', '3', '2'], answer: '6', explanation: '选上衣有 3 种方法，选裤子有 2 种方法，先选上衣再选裤子两个步骤相互依存，必须依次完成才能确定一种穿法，故用分步乘法计数原理：3 × 2 = 6 种。若误用加法会得到 5，与实际情况不符。' },
        { type: 'fill', question: '从甲地到乙地有飞机 2 班、火车 3 班、汽车 4 班三类独立走法，共有 ____ 种走法。', answer: '9', explanation: '从甲地到乙地有飞机 2 班、火车 3 班、汽车 4 班三类相互独立的走法，每一类都能单独到达，故用分类加法：2 + 3 + 4 = 9 种走法。这里三类方案彼此独立，任取一类即可到达，应当相加而非相乘。' },
        { type: 'fill', question: '某书号由 3 个字母和 2 个数字依次组成，字母有 26 个、数字有 10 个，共有 ____ 种不同书号。', answer: '1757600', explanation: '书号由 3 个字母和 2 个数字依次排成，每一步相互独立。每个字母有 26 种选法，每个数字有 10 种选法，用分步乘法：26 × 26 × 26 × 10 × 10 = 1757600 种。注意这是分步而非分类，应当把各步方法数相乘。' }
      ]
    },

    /* ---------------- 第2课时 排列 ---------------- */
    {
      id: 'xb3-u1-l2',
      name: '排列',
      chapter: '第六章 计数原理 · 6.2.1',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、排列与排列数' },
        { type: 'paragraph', text: '在计数问题中，常常不仅要选出一些元素，还要关心它们的先后顺序。例如从 5 名同学中选出 2 人分别担任班长和学习委员，谁当班长、谁当委员是不同的结果。这种“取出并按顺序排列”的问题就是排列问题。' },
        { type: 'keypoint', label: '重点·排列定义', text: '<strong>排列的定义</strong>：一般地，从 <strong>n 个不同元素</strong>中取出 <strong>m（m ≤ n）</strong> 个元素，<strong>按照一定顺序排成一列</strong>，叫做从 n 个不同元素中取出 m 个元素的一个<strong>排列</strong>。两个排列相同，当且仅当元素相同且排列顺序也相同。' },
        { type: 'paragraph', text: '判断一个问题是排列问题，关键看“顺序”是否影响结果：若交换两个元素的位置会产生不同的结果，则顺序重要，属于排列；若顺序无关，则不是排列（属于后面要学的组合）。' },
        { type: 'keypoint', label: '重点·排列数', text: '<strong>排列数</strong>：从 n 个不同元素中取出 m（m ≤ n）个元素的所有<strong>不同排列的个数</strong>，叫做从 n 个不同元素中取出 m 个元素的<strong>排列数</strong>，记作 <strong>A_n^m</strong>（也常记作 P_n^m）。注意 A_n^m 是一个“数”，表示排列的方法总数。' },
        { type: 'list', items: ['特殊元素与特殊位置优先处理（先排受限的）', '相邻问题：捆绑法', '不相邻问题：插空法', '定序问题：除以元素的顺序数'] },
        { type: 'example', label: '例题1', text: '计算 A_5^2。<br><br><strong>解</strong>：从 5 个不同元素中取 2 个排成一列。第1个位置有 5 种选法，第2个位置有 4 种选法，由分步乘法：<strong>A_5^2 = 5 × 4 = 20</strong>。' },
        { type: 'heading', text: '二、排列数公式' },
        { type: 'keypoint', label: '重点·公式', text: '<strong>排列数公式</strong>：A_n^m = <strong>n(n-1)(n-2)…(n-m+1)</strong>，即<strong>从 n 开始连续递减相乘，共 m 个因子</strong>。用阶乘表示为 <strong>A_n^m = n! / (n-m)!</strong>。当 m = n 时，A_n^n = n!，称为 n 的<strong>阶乘</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">排列数公式：连乘 m 个递减因子</text><text x="340" y="92" font-size="22" fill="#2b5b9e" text-anchor="middle" font-weight="bold">A_n^m = n(n-1)(n-2)…(n-m+1)</text><g font-size="15" fill="#33536e" text-anchor="middle"><text x="120" y="135">第1个因子：n</text><text x="250" y="135">第2个：n-1</text><text x="370" y="135">…</text><text x="500" y="135">最后：n-m+1</text></g><text x="340" y="178" font-size="18" fill="#7a5aa0" text-anchor="middle" font-weight="bold">= n! / (n-m)!</text><text x="340" y="214" font-size="14" fill="#33536e" text-anchor="middle">共 m 个因子连续相乘；用阶乘表示时约去 (n-m)! 项</text></svg>', caption: '图1　排列数公式：从 n 连乘 m 个递减因子，等价于 n! 除以 (n-m)!。' },
        { type: 'paragraph', text: '阶乘 n! 表示从 1 到 n 的连乘积，即 n! = n × (n-1) × … × 2 × 1。当 n 较大时，用阶乘表示排列数能使书写更简洁，也便于约分化简。' },
        { type: 'keypoint', label: '重点·阶乘规定', text: '<strong>阶乘的规定</strong>：为了使公式在 m = n 以及许多恒等变形中保持成立，<strong>规定 0! = 1</strong>。于是 A_n^n = n! / 0! = n!，与直接定义一致。' },
        { type: 'example', label: '例题2', text: '5 名同学排成一排拍照，共有多少种排法？<br><br><strong>解</strong>：这是 5 个元素的全排列，即 A_5^5 = 5! = 5 × 4 × 3 × 2 × 1 = <strong>120</strong>（种）。每一位置上依次少一种选法，连乘即得。' },
        { type: 'heading', text: '三、相邻问题——捆绑法' },
        { type: 'keypoint', label: '重点·捆绑法', text: '<strong>捆绑法</strong>：若要求某些元素<strong>相邻</strong>，可先把这几个相邻元素“<strong>捆绑</strong>”成一个整体（一个大元素），与其余元素一起作全排列，再乘以这几个元素<strong>内部的排列数</strong>。口诀：“邻则捆之，内再排之”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">相邻问题：捆绑法</text><rect x="55" y="75" width="160" height="60" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5" rx="8"/><rect x="72" y="88" width="55" height="34" fill="#4a7de0" rx="4"/><text x="99" y="111" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">甲</text><rect x="148" y="88" width="55" height="34" fill="#4a7de0" rx="4"/><text x="175" y="111" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">乙</text><text x="135" y="158" font-size="13" fill="#33536e" text-anchor="middle">（甲乙捆绑为一个整体）</text><rect x="300" y="80" width="60" height="50" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2" rx="6"/><text x="330" y="112" font-size="18" fill="#2b5b9e" text-anchor="middle" font-weight="bold">丙</text><rect x="380" y="80" width="60" height="50" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2" rx="6"/><text x="410" y="112" font-size="18" fill="#2b5b9e" text-anchor="middle" font-weight="bold">丁</text><text x="305" y="180" font-size="15" fill="#33536e" text-anchor="middle">3 个元素全排列：3! = 6</text><text x="305" y="208" font-size="15" fill="#33536e" text-anchor="middle">甲乙内部排列：2! = 2</text><text x="305" y="232" font-size="16" fill="#c0392b" text-anchor="middle" font-weight="bold">共 3! × 2! = 12 种</text></svg>', caption: '图2　捆绑法：把甲乙绑成一个整体，与丙、丁共 3 个元素排列，再乘甲乙内部 2!。' },
        { type: 'example', label: '例题3', text: '甲、乙、丙、丁 4 人排成一排，要求甲、乙相邻，有多少种排法？<br><br><strong>解</strong>：用捆绑法。先把甲、乙看作一个整体，与丙、丁共 <strong>3 个元素</strong>全排列，有 3! = 6 种；甲、乙内部还有 2! = 2 种排法。<br>由分步乘法，总排法数 = 3! × 2! = 6 × 2 = <strong>12</strong>（种）。' },
        { type: 'heading', text: '四、不相邻问题——插空法' },
        { type: 'keypoint', label: '重点·插空法', text: '<strong>插空法</strong>：若要求某些元素<strong>不相邻</strong>，可先排好其余元素，这些元素之间及两端形成若干“<strong>空位</strong>”，再把要求不相邻的元素插入这些空位中。口诀：“先排其余，再插空位”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">不相邻问题：插空法</text><rect x="140" y="80" width="60" height="50" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2" rx="6"/><text x="170" y="112" font-size="18" fill="#2b5b9e" text-anchor="middle" font-weight="bold">丙</text><rect x="320" y="80" width="60" height="50" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2" rx="6"/><text x="350" y="112" font-size="18" fill="#2b5b9e" text-anchor="middle" font-weight="bold">丁</text><g fill="#e05d44" font-size="22" text-anchor="middle"><text x="80" y="112">∧</text><text x="260" y="112">∧</text><text x="440" y="112">∧</text></g><g font-size="13" fill="#33536e" text-anchor="middle"><text x="80" y="138">空1</text><text x="260" y="138">空2</text><text x="440" y="138">空3</text></g><text x="260" y="180" font-size="15" fill="#33536e" text-anchor="middle">先排其余 2 人：2! = 2，产生 3 个空位</text><text x="260" y="208" font-size="15" fill="#33536e" text-anchor="middle">从 3 个空位选 2 个插甲乙：A_3^2 = 6</text><text x="260" y="232" font-size="16" fill="#c0392b" text-anchor="middle" font-weight="bold">共 2! × 6 = 12 种</text></svg>', caption: '图3　插空法：先排丙、丁产生 3 个空位，再把甲、乙插入其中两个空位。' },
        { type: 'example', label: '例题4', text: '甲、乙、丙、丁 4 人排成一排，要求甲、乙不相邻，有多少种排法？<br><br><strong>解</strong>：用插空法。先排其余的丙、丁，有 2! = 2 种；丙、丁排好后连同两端共形成 <strong>3 个空位</strong>。从中选 2 个空位排甲、乙，有 A_3^2 = 3 × 2 = 6 种。<br>由分步乘法，总排法数 = 2! × A_3^2 = 2 × 6 = <strong>12</strong>（种）。' },
        { type: 'warn', label: '易错', text: '用捆绑法或插空法时，<strong>不要忘记元素内部的排列（捆绑法）和空位的选择顺序（插空法中的排列数）</strong>。另外，捆绑法得到的是“相邻”的方案，插空法得到的是“不相邻”的方案，二者方向相反，审题时必须看清“相邻”还是“不相邻”，切勿用反。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['排列：从 n 个不同元素取 m 个按顺序排列；排列数记作 A_n^m', '公式：A_n^m = n(n-1)…(n-m+1) = n!/(n-m)!，A_n^n = n!，0! = 1', '相邻问题：捆绑法（捆成整体再排，乘内部排列）', '不相邻问题：插空法（先排其余，再插空位）', '审题先判断“相邻”或“不相邻”，方向不可搞反'] },
        { type: 'tip', label: '记忆', text: '<strong>方法选择记忆</strong>：见到“相邻”“排在一起”就想到<strong>捆绑法</strong>；见到“不相邻”“互不相邻”就想到<strong>插空法</strong>。先处理受限条件，再处理普通元素，能显著降低计数难度。' },
        { type: 'table', headers: ['问题特征', '方法', '要点'], rows: [['某些元素必须相邻', '捆绑法', '绑成整体排列，再乘内部排列数'], ['某些元素互不相邻', '插空法', '先排其余元素，再向空位插入'], ['特殊元素或位置受限', '优先法', '先安排受限的元素或位置'], ['部分元素顺序固定', '除法', '除以这些元素的全排列数']] }
      ],
      exercises: [
        { type: 'choice', question: '计算排列数 A_5^2 的值。', options: ['10', '20', '25', '40'], answer: '20', explanation: '排列数 A_n^m 表示从 n 个不同元素中取 m 个排成一列的排列个数。公式 A_5^2 = 5 × 4 = 20，即第一个位置有 5 种选法，第二个位置有 4 种选法，依次相乘。也可写为 5!/(5-2)! = 120/6 = 20。' },
        { type: 'choice', question: '5 名同学排成一排拍照，共有多少种不同的排法？', options: ['24', '120', '60', '720'], answer: '120', explanation: '5 人排成一排是 5 个元素的全排列，记作 A_5^5 = 5! = 5 × 4 × 3 × 2 × 1 = 120 种。全排列 A_n^n 等于 n 的阶乘，计算时直接连乘到 1 即可。' },
        { type: 'choice', question: '处理“某些元素必须相邻”的排列问题时，通常采用哪种方法？', options: ['插空法', '捆绑法', '排除法', '分类法'], answer: '捆绑法', explanation: '要求某些元素相邻时，常采用捆绑法：先把相邻的元素看作一个整体（一个“大元素”），与其余元素一起排列，再考虑这些元素内部的顺序。例如甲乙相邻，就把甲乙绑成一块再与其余人排列。' },
        { type: 'fill', question: '为使排列数公式 A_n^n = n!/(n-n)! 仍成立，规定 0! = ____。', answer: '1', explanation: '阶乘规定 0! = 1，这是为了使排列数公式 A_n^n = n!/(n-n)! = n!/0! 在全排列时仍成立，避免出现无意义的分母。该规定是人为约定，须牢记。' },
        { type: 'fill', question: '从 4 个不同元素中取出 1 个排成一列，排列数 A_4^1 = ____。', answer: '4', explanation: 'A_4^1 表示从 4 个不同元素中取出 1 个排成一列。按公式 A_n^m = n(n-1)…(n-m+1)，当 m=1 时只有一个因子 n，故 A_4^1 = 4。也可理解为在 4 个元素中任选 1 个排好，共 4 种。' }
      ]
    }

  );
})();
