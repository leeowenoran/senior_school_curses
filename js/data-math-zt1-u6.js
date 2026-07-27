/* ============================================================
 * 高中数学 · 高考复习专题 · 函数与导数
 * 第6单元（2 课时）：导数与函数的单调性 / 导数与极值、最值
 * 数据注入：math.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt1');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 导数与函数的单调性 ---------------- */
    {
      id: 'zt1-u6-l1',
      name: '导数与函数的单调性',
      chapter: '函数与导数复习 · 五 5.4 导数与单调性',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、导数判定单调性的基本定理' },
        { type: 'paragraph', text: '在必修与选择性必修中，我们已经用定义和图像研究过函数的单调性。进入导数复习后，导数成为判断函数单调性的最强工具：它把“图像上升或下降”转化为“导函数符号的正负”，从而可以用代数运算精确求出单调区间。' },
        { type: 'keypoint', label: '重点·判定定理', text: '<strong>设函数 y = f(x) 在区间 I 上可导</strong>：若对任意 x∈I 都有 <strong>f′(x) > 0</strong>，则 f(x) 在 I 上<strong>单调递增</strong>；若对任意 x∈I 都有 <strong>f′(x) < 0</strong>，则 f(x) 在 I 上<strong>单调递减</strong>。' },
        { type: 'paragraph', text: '需要特别说明：个别点的导数等于 0，并不破坏单调性。例如函数 f(x)=x³ 在 x=0 处 f′(0)=0，但它在整个 R 上仍是单调递增的。因此定理中只要求“恒大于 0”或“恒小于 0”，允许在孤立点处导数为 0。' },
        { type: 'keypoint', label: '重点·求解步骤', text: '用导数求单调区间的通用四步：<br>① <strong>求定义域</strong>：先确定函数有意义的范围；<br>② <strong>求导函数</strong>：计算 f′(x)；<br>③ <strong>解不等式</strong>：分别解 f′(x) > 0 与 f′(x) < 0；<br>④ <strong>得区间</strong>：结合定义域写出单调递增、递减区间。' },
        { type: 'list', items: ['第一步永远先求定义域，单调区间必须是定义域的子集', '解 f′(x) > 0 得到递增区间，解 f′(x) < 0 得到递减区间', '结果区间用开区间或闭区间均可，但端点必须在定义域内', '导数不存在的点也要单独考察，它可能是单调性转折点'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">导数符号与函数增减的对应关系</text><line x1="60" y1="210" x2="620" y2="210" stroke="#33536e" stroke-width="2"/><line x1="340" y1="190" x2="340" y2="230" stroke="#33536e" stroke-width="2"/><text x="340" y="258" font-size="15" fill="#33536e" text-anchor="middle">x = c（驻点）</text><text x="180" y="175" font-size="16" fill="#c0392b" text-anchor="middle">f′(x) &lt; 0</text><text x="180" y="150" font-size="34" fill="#c0392b" text-anchor="middle">↓</text><text x="180" y="290" font-size="15" fill="#c0392b" text-anchor="middle">f 单调递减</text><text x="500" y="175" font-size="16" fill="#5a7a2a" text-anchor="middle">f′(x) &gt; 0</text><text x="500" y="150" font-size="34" fill="#5a7a2a" text-anchor="middle">↑</text><text x="500" y="290" font-size="15" fill="#5a7a2a" text-anchor="middle">f 单调递增</text><path d="M 70 150 Q 190 250 340 210 Q 470 170 600 90" fill="none" stroke="#4a7de0" stroke-width="2.5"/><text x="430" y="135" font-size="14" fill="#2b5b9e">f(x) 图像：左侧下降、右侧上升</text></svg>', caption: '图1　导数符号决定单调性：f′(x) 小于 0 的区间函数递减，大于 0 的区间函数递增。' },
        { type: 'heading', text: '二、无参函数求单调区间' },
        { type: 'example', label: '例题1', text: '求函数 f(x) = x³ - 3x 的单调区间。<br><br><strong>解</strong>：定义域为 R。求导得 f′(x) = 3x² - 3 = 3(x - 1)(x + 1)。<br>令 f′(x) > 0，即 (x - 1)(x + 1) > 0，解得 x < -1 或 x > 1，故递增区间为 (-∞, -1) 和 (1, +∞)。<br>令 f′(x) < 0，即 (x - 1)(x + 1) < 0，解得 -1 < x < 1，故递减区间为 (-1, 1)。' },
        { type: 'warn', label: '易错', text: '写单调区间时，<strong>区间端点能否取到并不影响单调性</strong>，可写开区间也可写闭区间，但端点必须落在定义域内。多个不相连的单调增区间之间<strong>不能用并集符号 “∪” 连接成一体</strong>，应分别列出，例如写成 “(-∞, -1) 与 (1, +∞)”。' },
        { type: 'tip', label: '提示', text: '对于较复杂的 f′(x)，<strong>用表格列出各区间上 f′(x) 的符号</strong>能避免出错：先找出 f′(x) = 0 的根和无定义点，把定义域分成若干段，逐段判断符号，再对应写出增减区间。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">f(x) = x³ - 3x 的单调区间标注</text><line x1="60" y1="200" x2="620" y2="200" stroke="#33536e" stroke-width="2"/><line x1="340" y1="40" x2="340" y2="280" stroke="#33536e" stroke-width="2"/><path d="M 70 120 Q 200 60 280 200 Q 360 330 400 200 Q 450 80 600 260" fill="none" stroke="#4a7de0" stroke-width="2.5"/><circle cx="280" cy="200" r="5" fill="#e05d44"/><circle cx="400" cy="200" r="5" fill="#e05d44"/><text x="280" y="225" font-size="14" fill="#c0392b" text-anchor="middle">x = -1（极大）</text><text x="400" y="225" font-size="14" fill="#c0392b" text-anchor="middle">x = 1（极小）</text><text x="150" y="80" font-size="14" fill="#5a7a2a">递增</text><text x="330" y="300" font-size="14" fill="#c0392b">递减</text><text x="500" y="150" font-size="14" fill="#5a7a2a">递增</text><text x="340" y="308" font-size="15" fill="#33536e" text-anchor="middle">递增区间：(-∞, -1) 与 (1, +∞)；递减区间：(-1, 1)</text></svg>', caption: '图2　三次函数 x³-3x 的单调区间：在驻点 -1、1 处分界，左增、中减、右增。' },
        { type: 'heading', text: '三、含参函数的单调性讨论' },
        { type: 'paragraph', text: '当函数解析式中含有参数（如 a）时，f′(x) 的符号分界点往往依赖于参数。此时不能一概而论，必须根据参数对 f′(x) 符号的影响进行分类讨论，核心在于找出“使 f′(x) 变号的分界点”。' },
        { type: 'keypoint', label: '重点·含参讨论关键', text: '含参单调性讨论的核心是<strong>确定 f′(x) 符号的分界点</strong>：先写出 f′(x) 并化简（通常因式分解），找出使 f′(x) = 0 的根；这些根的位置可能随参数变化，从而把定义域划分出不同的符号区间，按参数取不同范围分别写出单调区间。' },
        { type: 'example', label: '例题2', text: '已知 a > 0，求函数 f(x) = x² - 2a ln x（x > 0）的单调区间。<br><br><strong>解</strong>：定义域为 (0, +∞)。求导得 f′(x) = 2x - 2a/x = 2(x² - a)/x。<br>因为 x > 0，所以 f′(x) 的符号由 (x² - a) 决定。<br>① 当 a ≤ 0 时，x² - a > 0 恒成立，f′(x) > 0，f(x) 在 (0, +∞) 单调递增；<br>② 当 a > 0 时，令 x² - a = 0 得 x = √a（舍去负根）。当 0 < x < √a 时 f′(x) < 0，当 x > √a 时 f′(x) > 0，故 f(x) 在 (0, √a) 递减、在 (√a, +∞) 递增。' },
        { type: 'list', items: ['含参讨论先确定定义域，本题 x > 0 直接排除了负根 -√a', '分界点来自 f′(x)=0 的根，根随参数变化就要对参数分类', '每一类参数下都要重新判断 f′(x) 在各段的符号', '最后按类汇总单调区间，不能把不同参数范围的结果混写'] },
        { type: 'warn', label: '易错', text: '含参讨论最容易漏掉“参数使分界点不存在”的情形。例如上题中若 a ≤ 0，则方程 x² - a = 0 在定义域内无解，f′(x) 恒正，函数没有递减区间。<strong>讨论要从“能否解出分界点”出发，而不是默认分界点一定存在</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">含参 a 对 f′(x) = 2(x² - a)/x 符号的影响</text><text x="340" y="62" font-size="14" fill="#33536e" text-anchor="middle">定义域 x &gt; 0，f′ 的符号由 (x² - a) 决定</text><text x="170" y="100" font-size="15" fill="#2b5b9e" text-anchor="middle" font-weight="bold">情形一：a ≤ 0</text><line x1="60" y1="150" x2="300" y2="150" stroke="#5a7a2a" stroke-width="2"/><text x="180" y="140" font-size="14" fill="#5a7a2a" text-anchor="middle">f′(x) &gt; 0 恒成立</text><text x="180" y="185" font-size="14" fill="#5a7a2a" text-anchor="middle">f 在 (0, +∞) 单调递增</text><text x="500" y="100" font-size="15" fill="#2b5b9e" text-anchor="middle" font-weight="bold">情形二：a &gt; 0</text><line x1="360" y1="150" x2="620" y2="150" stroke="#33536e" stroke-width="2"/><line x1="490" y1="135" x2="490" y2="165" stroke="#33536e" stroke-width="2"/><text x="490" y="192" font-size="14" fill="#33536e" text-anchor="middle">x = √a</text><text x="425" y="140" font-size="14" fill="#c0392b" text-anchor="middle">f′ &lt; 0</text><text x="555" y="140" font-size="14" fill="#5a7a2a" text-anchor="middle">f′ &gt; 0</text><text x="490" y="245" font-size="14" fill="#33536e" text-anchor="middle">递减 (0, √a)，递增 (√a, +∞)</text></svg>', caption: '图3　含参 a 的单调性分界：a ≤ 0 时无分界点恒增；a > 0 时以 √a 为界先减后增。' },
        { type: 'heading', text: '四、方法对比' },
        { type: 'table', headers: ['步骤', '操作', '目的'], rows: [['求定义域', '明确 x 的取值范围', '保证后续区间合法'], ['求导 f′(x)', '化简并尽量因式分解', '得到符号分析的基础'], ['解 f′(x) > 0', '求导数恒正的区间', '得单调递增区间'], ['解 f′(x) < 0', '求导数恒负的区间', '得单调递减区间']] },
        { type: 'tip', label: '提示', text: '无参函数直接解不等式即可；含参函数要<strong>把“参数分类”放在解不等式之前</strong>：先判断分界点是否存在、有几个，再逐类解符号。养成“先定义域、后求导、再分类、最后写区间”的固定流程，考场上不易乱。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['判定定理：f′(x) > 0 增，f′(x) < 0 减，孤立点 f′=0 不影响', '四步流程：定义域 → 求导 → 解 f′ 正负 → 写单调区间', '多个不相连单调增区间要分别列出，不能用 ∪ 连成一体', '含参讨论核心是找 f′ 符号分界点，先判断分界点是否存在', '每一类参数下都要重新判断符号并汇总区间'] }
      ],
      exercises: [
        { type: 'choice', question: '若函数 f(x) 在区间 (a, b) 上恒有 f′(x) > 0，则 f(x) 在该区间上？', options: ['单调递增', '单调递减', '先增后减', '为常数函数'], answer: '单调递增', explanation: '由导数与单调性的关系可知，若函数在某区间上导数恒为正，即 f′(x) 大于 0，则该函数在该区间上严格单调递增。反之导数恒为负时函数单调递减。因此本题应判定为单调递增。' },
        { type: 'choice', question: '下列函数中，在 (0, +∞) 上单调递减的是？', options: ['f(x) = x²', 'f(x) = e^x', 'f(x) = ln x', 'f(x) = 1/x'], answer: 'f(x) = 1/x', explanation: '逐项求导判断：f(x)=x² 的导数 2x 在 x 大于 0 时为正，函数递增；e^x 导数 e^x 恒正，递增；ln x 导数 1/x 恒正，递增；而 f(x)=1/x 的导数为 -1/x²，在 x 大于 0 时恒为负，函数单调递减。故单调递减的是 1/x。' },
        { type: 'choice', question: '函数 f(x) = x³ - 3x 的单调递增区间是？', options: ['(-∞, -1)', '(-1, 1)', '(1, +∞)', '(-∞, -1) 和 (1, +∞)'], answer: '(-∞, -1) 和 (1, +∞)', explanation: '对 f(x)=x³-3x 求导得 f′(x)=3x²-3=3(x-1)(x+1)。令 f′(x) 大于 0，即 (x-1)(x+1) 大于 0，解得 x 小于 -1 或 x 大于 1。所以函数的单调递增区间为 (-∞, -1) 和 (1, +∞)。' },
        { type: 'fill', question: '函数 f(x) = x - ln x 的单调递减区间是 ____。', answer: '(0, 1)', explanation: '函数定义域为 x 大于 0。求导得 f′(x)=1-1/x=(x-1)/x。当 0 小于 x 小于 1 时，分子 x-1 小于 0、分母 x 大于 0，故 f′(x) 小于 0，函数单调递减；当 x 大于 1 时 f′(x) 大于 0，单调递增。因此递减区间是 (0,1)。' },
        { type: 'fill', question: '若 f(x) 在 R 上可导且 f′(x) ≥ 0 恒成立，则 f(x) 在 R 上 ____（填“单调不减”或“单调递减”）。', answer: '单调不减', explanation: '若 f′(x) 大于等于 0 恒成立，说明函数处处不减：当导数严格为正时函数递增，在个别导数为 0 的点函数不改变增减趋势。因此函数在 R 上单调不减（可能含有平缓段），而非严格单调递增。' }
      ]
    },

    /* ---------------- 第2课时 导数与极值、最值（含分类讨论） ---------------- */
    {
      id: 'zt1-u6-l2',
      name: '导数与极值、最值（含分类讨论）',
      chapter: '函数与导数复习 · 五 极值与最值',
      difficulty: '进阶',
      content: [
        { type: 'heading', text: '一、极值的概念与必要条件' },
        { type: 'paragraph', text: '单调性描述函数在一段区间上的整体升降，而极值描述函数在某一点附近的“局部最高”或“局部最低”。极值点关心的是邻域内的相对比较，最值关心的才是整个区间上的绝对大小，两者务必区分。' },
        { type: 'keypoint', label: '重点·极值定义', text: '若存在 x0 的某邻域，使对该邻域内任意 x ≠ x0 都有 <strong>f(x) < f(x0)</strong>，则称 f(x0) 为<strong>极大值</strong>，x0 为极大值点；都有 <strong>f(x) > f(x0)</strong> 则为<strong>极小值</strong>。极大值与极小值统称<strong>极值</strong>，是局部概念。' },
        { type: 'keypoint', label: '重点·必要条件', text: '若函数 f(x) 在 x0 处可导且取得极值，则必有 <strong>f′(x0) = 0</strong>。这样的点称为<strong>驻点（稳定点）</strong>。因此可导函数的极值点一定是驻点，但驻点未必是极值点（如 x³ 在 x=0 处）。' },
        { type: 'list', items: ['极值是局部概念，最值是全局概念', '极大值未必大于极小值（不同峰谷不可比）', '可导函数的极值点必为驻点，但驻点不一定是极值点', '端点处也可能取得最值，但端点一般不作为极值点讨论'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">极值点处 f′ 变号（第一充分条件）</text><line x1="60" y1="200" x2="620" y2="200" stroke="#33536e" stroke-width="2"/><path d="M 70 200 Q 160 80 250 200 Q 340 320 430 200 Q 520 90 610 200" fill="none" stroke="#4a7de0" stroke-width="2.5"/><circle cx="160" cy="140" r="5" fill="#e05d44"/><circle cx="340" cy="260" r="5" fill="#e05d44"/><circle cx="520" cy="145" r="5" fill="#e05d44"/><text x="160" y="126" font-size="14" fill="#c0392b" text-anchor="middle">f′: + → -（极大）</text><text x="340" y="285" font-size="14" fill="#5a7a2a" text-anchor="middle">f′: - → +（极小）</text><text x="520" y="130" font-size="14" fill="#c0392b" text-anchor="middle">f′: + → -（极大）</text><text x="340" y="312" font-size="15" fill="#33536e" text-anchor="middle">驻点（f′=0）两侧导数变号，才取得极值</text></svg>', caption: '图1　极值判别：驻点两侧 f′ 由正变负得极大值，由负变正得极小值。' },
        { type: 'heading', text: '二、极值判别法' },
        { type: 'keypoint', label: '重点·第一充分条件', text: '设 f(x) 在 x0 附近可导且 f′(x0) = 0：若 <strong>f′ 在 x0 左侧为正、右侧为负</strong>，则 x0 为<strong>极大值点</strong>；若 <strong>f′ 在 x0 左侧为负、右侧为正</strong>，则 x0 为<strong>极小值点</strong>；若两侧同号，则 x0 不是极值点。' },
        { type: 'example', label: '例题1', text: '求函数 f(x) = x³ - 3x 的极值。<br><br><strong>解</strong>：f′(x) = 3x² - 3 = 3(x - 1)(x + 1)，令 f′ = 0 得驻点 x = -1、x = 1。<br>列表判断符号：在 x = -1 左侧 f′ > 0、右侧 f′ < 0，故 x = -1 为极大值点，极大值 f(-1) = 2；在 x = 1 左侧 f′ < 0、右侧 f′ > 0，故 x = 1 为极小值点，极小值 f(1) = -2。' },
        { type: 'tip', label: '提示', text: '判别极值点最稳妥的做法是<strong>列表法</strong>：把驻点和导数不存在的点按从小到大排列，划分区间，逐段填写 f′(x) 的符号与 f(x) 的增减，再读出极值。表格能直观呈现“变号”过程，避免凭感觉判断。' },
        { type: 'warn', label: '易错', text: '“f′(x0) = 0”只是极值的<strong>必要条件而非充分条件</strong>。例如 f(x) = x³ 在 x = 0 处 f′ = 0，但 f′ 在 0 两侧同为正，0 不是极值点。必须检验 f′ 在 x0 两侧是否变号，或用二阶导判别，不能见到 f′=0 就下结论。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">二阶导数判别法示意</text><text x="190" y="90" font-size="15" fill="#2b5b9e" text-anchor="middle" font-weight="bold">f′(x0) = 0 且 f′′(x0) &gt; 0</text><path d="M 70 180 Q 190 60 310 180" fill="none" stroke="#5a7a2a" stroke-width="2.5"/><text x="190" y="215" font-size="15" fill="#5a7a2a" text-anchor="middle">曲线上凹 → 极小值</text><text x="490" y="90" font-size="15" fill="#2b5b9e" text-anchor="middle" font-weight="bold">f′(x0) = 0 且 f′′(x0) &lt; 0</text><path d="M 370 180 Q 490 300 610 180" fill="none" stroke="#c0392b" stroke-width="2.5"/><text x="490" y="215" font-size="15" fill="#c0392b" text-anchor="middle">曲线下凹 → 极大值</text></svg>', caption: '图2　二阶导判别：f′′(x0) 大于 0 对应极小值，小于 0 对应极大值。' },
        { type: 'keypoint', label: '重点·第二充分条件', text: '若 f′(x0) = 0 且 <strong>f′′(x0) ≠ 0</strong>：当 <strong>f′′(x0) > 0</strong> 时，x0 为<strong>极小值点</strong>；当 <strong>f′′(x0) < 0</strong> 时，x0 为<strong>极大值点</strong>。该法计算更快，但 f′′(x0) = 0 时失效，须退回第一充分条件。' },
        { type: 'heading', text: '三、闭区间上的最值' },
        { type: 'paragraph', text: '与极值不同，最值是函数在整个考察范围上的绝对最大或最小。闭区间上的连续函数一定有最大值和最小值，求解时要把“内部极值”与“端点值”放在一起比较。' },
        { type: 'list', items: ['求区间内所有驻点（及不可导点）处的函数值', '求区间两个端点处的函数值', '比较上述各值，最大者为最大值，最小者为最小值', '开区间上函数可能不存在最值（如单调函数趋于边界）'] },
        { type: 'example', label: '例题2', text: '求 f(x) = x³ - 3x 在 [-2, 2] 上的最大值与最小值。<br><br><strong>解</strong>：由 f′(x) = 3(x² - 1)，驻点为 x = -1、x = 1，均在 [-2, 2] 内。<br>计算：f(-2) = -2，f(2) = 2，f(-1) = 2，f(1) = -2。<br>比较得<strong>最大值为 2</strong>（在 x = -1 与 x = 2 处），<strong>最小值为 -2</strong>（在 x = 1 与 x = -2 处）。' },
        { type: 'warn', label: '易错', text: '在<strong>开区间</strong>上函数未必有最大值或最小值。例如 f(x) = x 在 (0, 1) 内既取不到 0 也取不到 1，没有最值；又如 f(x) = x³ - 3x 在 R 上无界，也不存在全局最值。<strong>只有闭区间上的连续函数才保证最值存在</strong>，这是解题前提。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">闭区间 [a, b] 上最值的比较</text><line x1="80" y1="210" x2="600" y2="210" stroke="#33536e" stroke-width="2"/><line x1="80" y1="40" x2="80" y2="280" stroke="#33536e" stroke-width="2"/><line x1="600" y1="40" x2="600" y2="280" stroke="#33536e" stroke-width="2"/><path d="M 80 150 Q 200 90 280 210 Q 360 330 400 210 Q 450 110 600 170" fill="none" stroke="#4a7de0" stroke-width="2.5"/><circle cx="80" cy="150" r="5" fill="#7a5aa0"/><circle cx="280" cy="210" r="5" fill="#e05d44"/><circle cx="400" cy="210" r="5" fill="#e05d44"/><circle cx="600" cy="170" r="5" fill="#7a5aa0"/><text x="80" y="135" font-size="13" fill="#7a5aa0" text-anchor="middle">端点 f(a)</text><text x="600" y="155" font-size="13" fill="#7a5aa0" text-anchor="middle">端点 f(b)</text><text x="340" y="300" font-size="15" fill="#33536e" text-anchor="middle">最大值 = max{端点值, 各极值}；最小值 = min{端点值, 各极值}</text></svg>', caption: '图3　闭区间最值：把端点值与内部极值一起比较，最大最小即最值。' },
        { type: 'heading', text: '四、含参极值与最值分类讨论' },
        { type: 'paragraph', text: '当解析式含参数时，驻点是否落在定义域内、极值之间的大小关系都可能随参数改变，求最值必须分类讨论。下面以含参三次函数为例，体会“参数影响驻点位置与极值大小”的讨论逻辑。' },
        { type: 'keypoint', label: '重点·含参讨论关键', text: '含参求最值要盯住两点：<strong>① 驻点是否在定义域内</strong>（定义域随参数变化时要单独判断）；<strong>② 各驻点极值与端点值的大小关系</strong>。当参数使最大、最小值的“归属”发生改变时，就要对参数分范围写出不同的最值结果。' },
        { type: 'example', label: '例题3', text: '已知 f(x) = x³ - 3a x（a 为实数），讨论其极值，并说明在 R 上是否存在最值。<br><br><strong>解</strong>：f′(x) = 3x² - 3a = 3(x² - a)。<br>① 当 a ≤ 0 时，x² - a ≥ 0 恒成立且只在 x = 0（a=0）时取等号，f′(x) ≥ 0，函数在 R 单调递增，<strong>无极值</strong>；<br>② 当 a > 0 时，令 f′ = 0 得 x = ±√a。x = -√a 左侧 f′ > 0、右侧 f′ < 0，为极大值点；x = √a 左侧 f′ < 0、右侧 f′ > 0，为极小值点。<br>因在 R 上函数无界（x→+∞ 时 f→+∞，x→-∞ 时 f→-∞），故<strong>不存在全局最大值与最小值</strong>。若限定闭区间，则需再与端点值比较。' },
        { type: 'table', headers: ['参数范围', '驻点', '单调性与极值'], rows: [['a ≤ 0', '无（f′ 恒 ≥ 0）', '在 R 上单调递增，无极值'], ['a > 0', 'x = ±√a', '增(-∞,-√a)、减(-√a,√a)、增(√a,+∞)；极大 f(-√a)，极小 f(√a)']] },
        { type: 'tip', label: '提示', text: '含参最值题的答题格式建议：先求导找驻点 → 按参数范围写出单调性与极值 → 若给闭区间，再把端点值纳入比较。每一步都要明确“当前参数范围内”的结论，避免把不同参数情形的结果混在一起。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['极值必要条件：可导极值点必为驻点（f′=0），反之不成立', '第一充分：f′ 左正右负得极大，左负右正得极小', '第二充分：f′′>0 极小，f′′<0 极大，f′′=0 时改用第一充分', '闭区间最值 = max/min{端点值, 各驻点极值}', '含参最值须讨论驻点是否在定义域及极值的相对大小'] }
      ],
      exercises: [
        { type: 'choice', question: '函数 f(x) 在 x0 处取得极大值，则必有？', options: ['f′(x0) 大于 0', 'f′(x0) = 0 且 f′ 在 x0 左侧为正、右侧为负', 'f′′(x0) 大于 0', 'f(x0) 是定义域内的最大函数值'], answer: 'f′(x0) = 0 且 f′ 在 x0 左侧为正、右侧为负', explanation: '函数在 x0 处取得极大值的充分条件为：f′(x0)=0 且导数在 x0 左侧为正、右侧为负，即函数先增后减。仅 f′(x0) 大于 0 说明仍在上升；f′′(x0) 大于 0 对应极小值；f(x0) 为全局最大是最大值而非极大值的定义。因此正确描述是左侧为正、右侧为负。' },
        { type: 'choice', question: '下列命题中，正确的是？', options: ['f′(x0) = 0 则 x0 必为极值点', '极值点处导数一定为 0', '可导函数的极值点必为驻点', '最值点必为极值点'], answer: '可导函数的极值点必为驻点', explanation: '根据费马定理，若函数在 x0 处可导且在 x0 取得极值，则必有 f′(x0)=0，即极值点为驻点，故该说法正确。反例说明其余均错：f′(x0)=0 未必是极值点（如 x³ 在 0 处）；端点也能取极值但导数未必为 0；最值点可能是端点而不一定是极值点。' },
        { type: 'choice', question: '函数 f(x) 在闭区间 [a, b] 上的最大值应等于？', options: ['区间内的极大值', '端点函数值', '极大值与端点值中的最大者', 'f′(x) = 0 处的值'], answer: '极大值与端点值中的最大者', explanation: '闭区间上的连续函数一定存在最大值和最小值。最大值可能在内部极值点取得，也可能在端点取得，因此必须比较所有驻点（及不可导点）处的极值与两个端点的函数值，其中最大的即为最大值。仅看极大值或端点值都不全面。' },
        { type: 'fill', question: '函数 f(x) = x³ - 3x 在闭区间 [-2, 2] 上的最大值为 ____。', answer: '2', explanation: '在 [-2,2] 上，f′(x)=3x²-3，令 f′=0 得驻点 x=±1。计算函数值：f(-2)=-2，f(2)=2，f(-1)=2，f(1)=-2。比较端点与驻点值，最大者为 2，故最大值为 2。' },
        { type: 'fill', question: '用二阶导数判别：若 f′(x0) = 0 且 f′′(x0) 大于 0，则 x0 是 ____ 值点（填“极大”或“极小”）。', answer: '极小', explanation: '当 f′(x0)=0 且 f′′(x0) 大于 0 时，说明 f′ 在 x0 附近单调递增且穿过 0，于是 f′ 在 x0 左侧为负、右侧为正，函数在 x0 左侧递减、右侧递增，因此 x0 为极小值点。若 f′′(x0) 小于 0 则为极大值点。' }
      ]
    }

  );
})();
