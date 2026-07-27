/* ============================================================
 * 高三数学 · 高考复习专题 · 数列专题 · 第2单元 等差数列（2课时）
 * 数据注入：math.zt3.points
 * 由 js/data-gz.js 末尾 GZ_REVIEW.math 遍历自动注册（grade 高三）
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt3');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 等差数列（定义、通项、等差中项） ---------------- */
    {
      id: 'zt3-u2-l1',
      name: '等差数列（定义、通项、等差中项）',
      chapter: '数列专题复习 · 三 等差数列（定义与通项）',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、等差数列的定义' },
        { type: 'paragraph', text: '等差数列是研究按一定次序排列的一列数的规律中最基本、高考最常考的一类。从函数观点看，数列可看作定义域为正整数集（或其有限子集）的函数，当自变量从小到大依次取值时得到的一列函数值。等差数列描述的是相邻两项之差保持恒定的数列。' },
        { type: 'keypoint', label: '重点·定义', text: '<strong>等差数列</strong>：如果一个数列从第 2 项起，每一项与它的前一项之差都等于<strong>同一个常数</strong>，那么这个数列叫做等差数列，这个常数叫做公差，记作 d。即 <strong>a_{n+1} − a_n = d</strong>（d 为常数，n∈N*）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">等差数列：各项在数轴上的等间隔点列</text><line x1="70" y1="130" x2="630" y2="130" stroke="#33536e" stroke-width="2"/><g fill="#4a7de0"><circle cx="110" cy="130" r="7"/><circle cx="230" cy="130" r="7"/><circle cx="350" cy="130" r="7"/><circle cx="470" cy="130" r="7"/><circle cx="590" cy="130" r="7"/></g><g font-size="15" fill="#2b5b9e" text-anchor="middle"><text x="110" y="162">a_1</text><text x="230" y="162">a_2</text><text x="350" y="162">a_3</text><text x="470" y="162">a_4</text><text x="590" y="162">a_5</text></g><g stroke="#e05d44" stroke-width="2"><line x1="117" y1="112" x2="223" y2="112"/><line x1="357" y1="112" x2="463" y2="112"/></g><g fill="#c0392b" font-size="14" text-anchor="middle"><text x="170" y="106">d</text><text x="410" y="106">d</text></g><text x="340" y="200" font-size="14" fill="#33536e" text-anchor="middle">相邻两项之差 a_{n+1} − a_n = d（常数），在图上表现为间距相等的点</text></svg>', caption: '图1　等差数列各项落在数轴上等间隔的位置，相邻间隔都等于公差 d。' },
        { type: 'paragraph', text: '公差 d 可以为正数、负数或零。当 d>0 时数列递增；d<0 时数列递减；d=0 时为常数列。公差刻画了相邻两项变化的均匀步长，是等差数列的核心参数，决定了数列的增减趋势与变化快慢。' },
        { type: 'heading', text: '二、通项公式' },
        { type: 'keypoint', label: '重点·基本通项', text: '基本通项：<strong>a_n = a_1 + (n−1)d</strong>。它表明任一项可由首项与公差线性表示，n 每增加 1，项值就增加 d，体现了等差数列均匀的递推规律。' },
        { type: 'keypoint', label: '重点·推广式', text: '推广式（重点）：<strong>a_n = a_m + (n−m)d</strong>（其中 m、n∈N*）。这是基本式的等价变形，说明<strong>任取两项即可确定整列</strong>，在已知两项求通项时比基本式更直接、更方便。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">通项 a_n = a_1 + (n−1)d：各项分布在一条直线上</text><line x1="90" y1="200" x2="620" y2="200" stroke="#33536e" stroke-width="2"/><line x1="90" y1="40" x2="90" y2="200" stroke="#33536e" stroke-width="2"/><polyline points="130,188 210,160 290,132 370,104 450,76 530,48" fill="none" stroke="#7a5aa0" stroke-width="2" stroke-dasharray="5 4"/><g fill="#4a7de0"><circle cx="130" cy="188" r="6"/><circle cx="210" cy="160" r="6"/><circle cx="290" cy="132" r="6"/><circle cx="370" cy="104" r="6"/><circle cx="450" cy="76" r="6"/><circle cx="530" cy="48" r="6"/></g><g font-size="13" fill="#2b5b9e" text-anchor="middle"><text x="130" y="220">n=1</text><text x="210" y="220">n=2</text><text x="290" y="220">n=3</text><text x="370" y="220">n=4</text><text x="450" y="220">n=5</text><text x="530" y="220">n=6</text></g><text x="600" y="224" font-size="13" fill="#33536e">n</text><text x="70" y="50" font-size="13" fill="#33536e">a_n</text><text x="340" y="248" font-size="14" fill="#33536e" text-anchor="middle">例：a_1=2, d=3，则 a_n=3n−1，各项恰好落在斜率 d 的直线上</text></svg>', caption: '图2　以 n 为横坐标、a_n 为纵坐标，等差数列的通项是斜率为 d 的一次函数图像上的整点。' },
        { type: 'paragraph', text: '通项推广式可由基本式导出：a_n = a_1 + (n−1)d，而 a_m = a_1 + (m−1)d，两式相减消去 a_1 得 a_n − a_m = (n−m)d，即 a_n = a_m + (n−m)d。该式说明不必回到首项，任取两项即可确定整列，常用于已知两项求通项。' },
        { type: 'list', items: ['已知 a_1、d，可直接写通项 a_n = a_1 + (n−1)d', '已知任意两项，用推广式 a_n = a_m + (n−m)d 先求 d 再写通项', '通项 a_n 是 n 的一次函数（d≠0 时），其斜率即为公差 d'] },
        { type: 'heading', text: '三、等差中项' },
        { type: 'keypoint', label: '重点·等差中项', text: '<strong>等差中项</strong>：若 a、b、c 成等差数列，则 b 叫做 a 与 c 的等差中项，满足 <strong>2b = a + c</strong>（即 b = (a+c)/2）。等差中项把三项成等差转化为一个简洁等式。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">等差中项：a, b, c 成等差 ⇔ 2b = a + c</text><line x1="120" y1="110" x2="560" y2="110" stroke="#33536e" stroke-width="2"/><circle cx="180" cy="110" r="8" fill="#4a7de0"/><circle cx="340" cy="110" r="8" fill="#e05d44"/><circle cx="500" cy="110" r="8" fill="#4a7de0"/><g font-size="16" text-anchor="middle"><text x="180" y="145" fill="#2b5b9e">a</text><text x="340" y="145" fill="#c0392b">b</text><text x="500" y="145" fill="#2b5b9e">c</text></g><g stroke="#5a7a2a" stroke-width="2"><line x1="188" y1="92" x2="332" y2="92"/><line x1="348" y1="92" x2="492" y2="92"/></g><g fill="#5a7a2a" font-size="14" text-anchor="middle"><text x="260" y="86">b−a</text><text x="420" y="86">c−b</text></g><text x="340" y="180" font-size="14" fill="#33536e" text-anchor="middle">中间项 b 到两侧距离相等：b−a = c−b ⇒ 2b = a + c</text></svg>', caption: '图3　三项成等差时，中间项到两侧的距离相等，即 2b = a + c。' },
        { type: 'paragraph', text: '等差中项把三项成等差转化为一个简洁等式。在实际问题中，常设三数为 a−d、a、a+d（对称设法），这样它们的和直接为 3a，能大幅简化计算，是处理三项等差问题的首选技巧，也常用于证明或构造等差关系。' },
        { type: 'example', label: '例题1', text: '已知等差数列 {a_n} 中 a_1=2，d=3。<br><br><strong>求</strong>：a_10 与通项公式 a_n。<br><br><strong>解</strong>：由通项 a_n = a_1 + (n−1)d，得 a_10 = 2 + (10−1)×3 = 2 + 27 = 29。<br>通项 a_n = 2 + (n−1)×3 = 3n − 1。<br><strong>答</strong>：a_10 = 29，a_n = 3n − 1。' },
        { type: 'example', label: '例题2', text: '在等差数列 {a_n} 中，已知 a_3=7，a_7=19。<br><br><strong>求</strong>：通项公式 a_n。<br><br><strong>解</strong>：用推广式 a_n = a_m + (n−m)d。先求 d：a_7 = a_3 + (7−3)d ⇒ 19 = 7 + 4d ⇒ d = 3。<br>再写通项：a_n = a_3 + (n−3)d = 7 + 3(n−3) = 3n − 2。<br>检验：a_3=7、a_7=19，符合。<strong>答</strong>：a_n = 3n − 2。' },
        { type: 'example', label: '例题3', text: '三个数成等差数列，且它们的和为 12。<br><br><strong>求</strong>：这三个数。<br><br><strong>解</strong>：设三数为 a−d、a、a+d，则 (a−d) + a + (a+d) = 3a = 12，得 a = 4。<br>公差 d 未知，故三数可表示为 4−d、4、4+d（d 可取任意实数）。若要求三数为具体值，需再补充一个条件。<br><strong>答</strong>：中间数为 4，三数形如 4−d、4、4+d。' },
        { type: 'heading', text: '四、等差数列的判定方法' },
        { type: 'table', headers: ['判定方法', '等价条件'], rows: [['定义法', 'a_{n+1} − a_n = d（常数）对任意 n∈N* 成立'], ['通项法', 'a_n = k n + b（关于 n 的一次函数形式）'], ['前n项和法', 'S_n = A n² + B n（无常数项的二次式）'], ['等差中项法', '2 a_{n+1} = a_n + a_{n+2} 对任意 n∈N* 成立']] },
        { type: 'warn', label: '易错', text: '判定等差数列时易错点：① 定义要求<strong>对一切 n∈N* 都有 a_{n+1}−a_n = d 为常数</strong>，仅靠前几项差为常数是不够的；② 用 S_n = A n² + B n 判定时，<strong>必须没有常数项</strong>，若有非零常数项则不是等差数列；③ 等差中项法需 2 a_{n+1} = a_n + a_{n+2} 对所有 n 成立。' },
        { type: 'tip', label: '提示', text: '设三项成等差时，优先采用<strong>对称设法</strong>：设为 a−d、a、a+d。这样三数之和直接等于 3a，能迅速求出中间项 a，再结合其他条件确定 d，比设 a、b、c 联立方程更简洁、更不易出错。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['定义：a_{n+1} − a_n = d（常数），d 为公差', '通项：a_n = a_1 + (n−1)d = a_m + (n−m)d（推广式）', '等差中项：a、b、c 成等差 ⇔ 2b = a + c', '判定四法：定义法、通项法、前n项和法、等差中项法'] }
      ],
      exercises: [
        { type: 'choice', question: '数列 {a_n} 是等差数列的充要条件是下列哪一项？', options: ['a_{n+1} − a_n 为常数', 'a_{n+1} − a_n 随 n 变化', 'a_n 为常数数列', 'a_1 + a_n 为常数'], answer: 'a_{n+1} − a_n 为常数', explanation: '等差数列的核心特征是相邻两项之差恒定，即 a_{n+1} − a_n 对任意 n 都等于同一个常数 d。若该差随 n 变化、或 a_n 本身为常数、或首尾和为常数，都不能保证整体成等差，故只有相邻差为常数是充要条件。' },
        { type: 'choice', question: '在等差数列 {a_n} 中，a_1=2，公差 d=3，则 a_5 = ？', options: ['11', '12', '14', '17'], answer: '14', explanation: '由通项公式 a_n = a_1 + (n−1)d，代入 n=5 得 a_5 = 2 + 4×3 = 14。也可逐次相加：a_2=5, a_3=8, a_4=11, a_5=14，结果一致，故选 14。' },
        { type: 'fill', question: '若 a、b、c 成等差数列，则 2b = ____。', answer: 'a+c', explanation: '三数 a、b、c 成等差，说明中间项 b 是 a 与 c 的等差中项，满足 b−a = c−b，移项得 2b = a + c。这是等差中项的核心等式，常用于求中间项或证明三项成等差。' },
        { type: 'choice', question: '等差数列 {a_n} 中，已知 a_3=7，a_7=19，则公差 d = ？', options: ['2', '3', '4', '6'], answer: '3', explanation: '由推广式 a_n = a_m + (n−m)d，取 m=3、n=7 得 a_7 = a_3 + 4d，即 19 = 7 + 4d，解得 d = 3。也可列方程 (7−3)d = 19−7 直接求得公差。' },
        { type: 'fill', question: '三个数成等差数列且和为 12，则中间的数 = ____。', answer: '4', explanation: '设三数为 a−d, a, a+d，其和为 (a−d)+a+(a+d)=3a=12，解得中间数 a=4。也可直接利用等差中项：三数成等差时中间项就是平均数，12÷3=4。' }
      ]
    },

    /* ---------------- 第2课时 等差数列前n项和 + 重要性质 ---------------- */
    {
      id: 'zt3-u2-l2',
      name: '等差数列前n项和与重要性质',
      chapter: '数列专题复习 · 三 等差数列（前n项和与性质）',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、前n项和公式' },
        { type: 'paragraph', text: '求等差数列前 n 项的和，经典方法是高斯式的倒序相加。把 S_n 正着写一遍、再倒着写一遍，对应项相加都等于 a_1 + a_n，共有 n 对，从而自然导出求和公式。这是处理一切数列求和问题的重要思想。' },
        { type: 'keypoint', label: '重点·公式一', text: '前 n 项和公式一：<strong>S_n = n(a_1 + a_n)/2</strong>。由倒序相加法得到，形式对称、便于记忆，适用于已知首项与末项（或末项易求）的情形。' },
        { type: 'keypoint', label: '重点·公式二', text: '前 n 项和公式二：<strong>S_n = n a_1 + n(n−1)d/2</strong>。将通项代入第一式得到，直接含 a_1 与 d，是已知首项和公差时求和的首选公式，也方便分析 S_n 的函数特征。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">前n项和 S_n 是关于 n 的二次函数且过原点</text><line x1="100" y1="210" x2="620" y2="210" stroke="#33536e" stroke-width="2"/><line x1="120" y1="200" x2="120" y2="50" stroke="#33536e" stroke-width="2"/><path d="M120,210 Q300,60 600,40" fill="none" stroke="#4a7de0" stroke-width="2.5"/><circle cx="120" cy="210" r="6" fill="#e05d44"/><g fill="#4a7de0"><circle cx="200" cy="180" r="5"/><circle cx="300" cy="140" r="5"/><circle cx="420" cy="92" r="5"/><circle cx="540" cy="60" r="5"/></g><g font-size="13" fill="#2b5b9e" text-anchor="middle"><text x="200" y="200">n=1</text><text x="300" y="200">n=2</text><text x="420" y="200">n=3</text><text x="540" y="200">n=4</text></g><text x="120" y="232" font-size="13" fill="#c0392b" text-anchor="middle">原点</text><text x="600" y="226" font-size="13" fill="#33536e">n</text><text x="340" y="250" font-size="14" fill="#33536e" text-anchor="middle">S_n = d/2·n² + (a_1 − d/2)·n，无常数项故图像过 (0,0)</text></svg>', caption: '图1　S_n 关于 n 的图像是一条过原点的抛物线（d≠0 时开口向上）。' },
        { type: 'paragraph', text: '倒序相加的思想：S_n = a_1 + a_2 + ··· + a_n，反向写 S_n = a_n + a_{n−1} + ··· + a_1，两式相加得 2S_n = n(a_1 + a_n)，故 S_n = n(a_1 + a_n)/2。再代入通项 a_n = a_1 + (n−1)d，即得关于 n 与 d 的第二公式。' },
        { type: 'warn', label: '易错', text: '关于 S_n 必须注意：S_n 是关于 n 的<strong>二次函数且没有常数项</strong>，即 S_n = d/2·n² + (a_1 − d/2)·n。若题目给出 S_n 的表达式含有非零常数项，则它<strong>不是等差数列</strong>的前 n 项和；反过来，由 S_n 求 a_n 时，n=1 须单独用 a_1 = S_1 验证是否吻合通式。' },
        { type: 'table', headers: ['公式', '形式', '适用情形'], rows: [['S_n = n(a_1 + a_n)/2', '含首项与末项', '已知 a_1、a_n 或末项易求时'], ['S_n = n a_1 + n(n−1)d/2', '含首项与公差', '已知 a_1、d 时最直接']] },
        { type: 'heading', text: '二、下标和的性质' },
        { type: 'list', items: ['下标和性质是等差数列特有的对称性质，省去求具体项的麻烦', '性质成立的条件是下标均为正整数且两对下标之和相等', '该性质与公差 d 无关，直接由通项的一次结构推出'] },
        { type: 'keypoint', label: '重点·下标和', text: '下标和性质：在等差数列中，若 <strong>m + n = p + q</strong>（m、n、p、q∈N*），则 <strong>a_m + a_n = a_p + a_q</strong>。特别地，a_1 + a_n = a_2 + a_{n−1} = ···，首尾等距两项和相等。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">下标和性质：m+n = p+q ⇒ a_m + a_n = a_p + a_q</text><line x1="90" y1="120" x2="600" y2="120" stroke="#33536e" stroke-width="2"/><g font-size="14" fill="#2b5b9e" text-anchor="middle"><text x="140" y="100">a_1</text><text x="230" y="100">a_2</text><text x="320" y="100">a_3</text><text x="410" y="100">a_4</text><text x="500" y="100">a_5</text></g><g fill="#4a7de0"><circle cx="140" cy="120" r="7"/><circle cx="230" cy="120" r="7"/><circle cx="320" cy="120" r="7"/><circle cx="410" cy="120" r="7"/><circle cx="500" cy="120" r="7"/></g><g stroke="#e05d44" stroke-width="2.5"><line x1="140" y1="150" x2="500" y2="150"/><line x1="230" y1="172" x2="410" y2="172"/></g><g fill="#c0392b" font-size="14" text-anchor="middle"><text x="320" y="145">1+5 = 6</text><text x="320" y="192">a_1 + a_5</text><text x="320" y="167">2+4 = 6</text><text x="320" y="188">a_2 + a_4</text></g><text x="340" y="210" font-size="14" fill="#33536e" text-anchor="middle">只要两下标之和相等，对应项之和就相等</text></svg>', caption: '图2　下标 1+5 与 2+4 之和相等，对应项之和 a_1+a_5 与 a_2+a_4 相等。' },
        { type: 'example', label: '例题1', text: '在等差数列 {a_n} 中，已知 a_3 + a_8 = 11。<br><br><strong>求</strong>：a_1 + a_10 的值。<br><br><strong>解</strong>：因为下标 1 + 10 = 3 + 8 = 11，即两对下标之和相等，由性质 a_m + a_n = a_p + a_q 可得 a_1 + a_10 = a_3 + a_8 = 11。<br><strong>答</strong>：a_1 + a_10 = 11。' },
        { type: 'heading', text: '三、连续片段与奇偶项和' },
        { type: 'keypoint', label: '重点·连续片段', text: '连续等长片段和：S_k、S_{2k}−S_k、S_{3k}−S_{2k}、… 仍构成等差数列，其公差为 <strong>k² d</strong>。该性质常用于整体处理分段和，避免逐项计算。' },
        { type: 'keypoint', label: '重点·2n项', text: '项数为 2n 时：<strong>S_偶 − S_奇 = n d</strong>，且 <strong>S_偶 / S_奇 = a_{n+1} / a_n</strong>。即偶数项和比奇数项和多 n 个公差，比值等于中间相邻两项之比。' },
        { type: 'keypoint', label: '重点·2n−1项', text: '项数为 2n−1 时：<strong>S_奇 − S_偶 = a_n</strong>，<strong>S_奇 / S_偶 = n/(n−1)</strong>，且 <strong>S_{2n−1} = (2n−1) a_n</strong>。中间项 a_n 是奇数项的平均值，也是整个数列的中间项。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">2n 项等差数列的奇偶项和关系</text><g font-size="14" fill="#2b5b9e" text-anchor="middle"><text x="90" y="90">a_1</text><text x="170" y="90">a_2</text><text x="250" y="90">a_3</text><text x="330" y="90">a_4</text><text x="410" y="90">a_5</text><text x="490" y="90">a_6</text><text x="570" y="90">a_7···a_2n</text></g><g><circle cx="90" cy="110" r="7" fill="#4a7de0"/><circle cx="170" cy="110" r="7" fill="#e05d44"/><circle cx="250" cy="110" r="7" fill="#4a7de0"/><circle cx="330" cy="110" r="7" fill="#e05d44"/><circle cx="410" cy="110" r="7" fill="#4a7de0"/><circle cx="490" cy="110" r="7" fill="#e05d44"/><circle cx="570" cy="110" r="7" fill="#5a7a2a"/></g><rect x="60" y="140" width="160" height="40" fill="#cfe0f7"/><rect x="160" y="140" width="160" height="40" fill="#f7d6cd"/><text x="140" y="166" font-size="14" fill="#2b5b9e" text-anchor="middle">S_奇</text><text x="240" y="166" font-size="14" fill="#c0392b" text-anchor="middle">S_偶</text><text x="340" y="80" font-size="14" fill="#33536e" text-anchor="middle">蓝=奇数项，红=偶数项</text><text x="340" y="210" font-size="14" fill="#33536e" text-anchor="middle">S_偶 − S_奇 = n d；S_偶 / S_奇 = a_{n+1} / a_n</text></svg>', caption: '图3　2n 项中奇偶项交错排列，偶数项和比奇数项和多 n 个公差 d。' },
        { type: 'table', headers: ['项数情形', '核心结论'], rows: [['共 2n 项', 'S_偶 − S_奇 = n d；S_偶 / S_奇 = a_{n+1} / a_n'], ['共 2n−1 项', 'S_奇 − S_偶 = a_n；S_奇 / S_偶 = n/(n−1)；S_{2n−1} = (2n−1)a_n'], ['连续 k 段', 'S_k, S_{2k}−S_k, S_{3k}−S_{2k}… 仍成等差，公差 k² d']] },
        { type: 'example', label: '例题2', text: '等差数列 {a_n} 中 a_1=1，d=2。<br><br><strong>求</strong>：S_10。<br><br><strong>解</strong>：由 S_n = n a_1 + n(n−1)d/2，代入 n=10 得 S_10 = 10×1 + 10×9×2/2 = 10 + 90 = 100。<br>亦可先求 a_10 = 1 + 9×2 = 19，再用 S_10 = 10×(1+19)/2 = 100 验证。<br><strong>答</strong>：S_10 = 100。' },
        { type: 'example', label: '例题3', text: '已知等差数列 {a_n} 的前 n 项和 S_n = n²。<br><br><strong>求</strong>：通项 a_n 与公差 d。<br><br><strong>解</strong>：当 n≥2 时，a_n = S_n − S_{n−1} = n² − (n−1)² = 2n − 1。<br>当 n=1 时，a_1 = S_1 = 1，也满足 2×1−1=1，故 a_n = 2n − 1。<br>这是公差为 2 的等差数列（由 a_n 是 n 的一次函数可知 d=2）。<br><strong>答</strong>：a_n = 2n − 1，d = 2。' },
        { type: 'tip', label: '提示', text: '记忆奇偶项和性质的小技巧：2n 项时奇偶各 n 项，把第 1 项与第 2 项、第 3 项与第 4 项……配对，每对偶数项比奇数项多一个 d，共 n 对，故 S_偶 − S_奇 = n d；2n−1 项时奇数项比偶数项多一项（中间项 a_n），故 S_奇 − S_偶 = a_n。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['求和：S_n = n(a_1+a_n)/2 = n a_1 + n(n−1)d/2（二次函数且无常数项）', '下标和：m+n=p+q ⇒ a_m+a_n = a_p+a_q', '2n项：S_偶−S_奇=nd，S_偶/S_奇=a_{n+1}/a_n', '2n−1项：S_奇−S_偶=a_n，S_奇/S_偶=n/(n−1)，S_{2n−1}=(2n−1)a_n'] }
      ],
      exercises: [
        { type: 'choice', question: '等差数列 {a_n} 中 a_1=1，d=2，则 S_10 = ？', options: ['90', '100', '110', '120'], answer: '100', explanation: '由前 n 项和公式 S_n = n a_1 + n(n−1)d/2，代入 n=10、a_1=1、d=2 得 S_10 = 10×1 + 10×9×2/2 = 10 + 90 = 100。也可先求 a_10=19，再用 S_10=10×(1+19)/2=100 验证。' },
        { type: 'choice', question: '若等差数列前 n 项和 S_n = n²，则 a_1 = ？', options: ['0', '1', '2', '4'], answer: '1', explanation: '数列首项等于前 1 项和，即 a_1 = S_1。代入 S_n = n² 得 a_1 = S_1 = 1² = 1。注意区分 a_n = S_n − S_{n−1}（n≥2），而 a_1 只能由 S_1 直接得到，不能套用差分公式。' },
        { type: 'fill', question: '等差数列 {a_n} 中，若 m+n = p+q，则 a_m + a_n = ____。', answer: 'a_p+a_q', explanation: '这是等差数列下标和的基本性质：当下标之和相等时，对应项之和相等，即 m+n=p+q 可推出 a_m+a_n = a_p+a_q。该性质在求项和、化简表达式中非常常用，且不需要知道具体公差。' },
        { type: 'choice', question: '等差数列 {a_n} 中，a_3 + a_8 = 11，则 a_1 + a_10 = ？', options: ['9', '11', '13', '22'], answer: '11', explanation: '因为 1+10 = 3+8 = 11，两对下标之和相等，由性质 a_m+a_n = a_p+a_q 可得 a_1+a_10 = a_3+a_8 = 11。无需单独求各项，直接利用下标和相等即可快速得出结果。' },
        { type: 'fill', question: '等差数列共 2n 项，则偶数项和与奇数项和之差 S_偶 − S_奇 = ____。', answer: 'nd', explanation: '设偶数项有 n 项，奇数项也有 n 项，相邻奇偶项可配成 n 对，每对中偶数项减奇数项均为公差 d，故 S_偶 − S_奇 = n×d。这是 2n 项等差数列奇偶项和关系的基础结论。' }
      ]
    }
  );
})();
