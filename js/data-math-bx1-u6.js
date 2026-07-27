/* ============================================================
 * 高一数学 · 必修 第一册 · 第三章 函数的概念与性质
 * 第9课时：函数的概念及其表示（人教A版 §3.1）
 * 第10课时：函数的基本性质（人教A版 §3.2）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;
  v.points.push(

    /* ---------------- 第9课时 函数的概念及其表示 ---------------- */
    {
      id: 'bx1-u6-l1',
      name: '函数的概念及其表示',
      chapter: '第三章 函数的概念与性质 · 3.1',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、函数的概念' },
        { type: 'paragraph', text: '函数是高中数学的核心主线。通俗地说，函数是描述“一个量随另一个量变化”的规则：对于每一个输入，都有唯一确定的输出与之对应。' },
        { type: 'keypoint', label: '重点·函数定义', text: '设 A、B 是<strong>非空数集</strong>，如果对于集合 A 中的<strong>任意一个数 x</strong>，按照某种确定的对应关系 f，在集合 B 中都有<strong>唯一确定的数 f(x)</strong> 与之对应，那么就称 f：A → B 为从 A 到 B 的一个<strong>函数</strong>。其中 x 叫自变量，A 叫<strong>定义域</strong>，f(x) 值的集合叫<strong>值域</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><ellipse cx="180" cy="110" rx="90" ry="70" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><ellipse cx="500" cy="110" rx="90" ry="70" fill="#eef4fc" stroke="#4a7de0" stroke-width="2.5"/><text x="180" y="60" font-size="15" fill="#2b5b9e" font-weight="bold" text-anchor="middle">A（定义域）</text><text x="500" y="60" font-size="15" fill="#4a7de0" font-weight="bold" text-anchor="middle">B（值域所在）</text><text x="180" y="116" font-size="14" fill="#1a3a5c" text-anchor="middle">x₁</text><text x="180" y="150" font-size="14" fill="#1a3a5c" text-anchor="middle">x₂</text><text x="500" y="110" font-size="14" fill="#c0392b" text-anchor="middle">f(x)</text><path d="M250 105 L430 105" stroke="#2b5b9e" stroke-width="2.5"/><path d="M250 145 L430 115" stroke="#4a7de0" stroke-width="2.5"/><polygon points="430,105 415,98 415,112" fill="#2b5b9e"/><text x="340" y="200" font-size="14" fill="#33536e" text-anchor="middle">每个 x 都有唯一 f(x) 对应</text></svg>', caption: '图1　函数是一种“单值对应”：A 中每个 x 都射向 B 中唯一确定的 f(x)。' },
        { type: 'list', items: ['定义域 A：自变量的允许取值范围', '值域：所有 f(x) 构成的集合（是 B 的子集）', '对应关系 f：把 x 变成 f(x) 的规则', '三者确定，函数就唯一确定'] },
        { type: 'heading', text: '二、函数三要素' },
        { type: 'keypoint', label: '重点·三要素', text: '判断两个函数是否“相同”，要看<strong>定义域、值域、对应关系</strong>是否一致（核心是定义域与对应关系）。仅表达式相同但定义域不同，就是<strong>不同的函数</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="170" fill="#eef4fc"/><rect x="60" y="60" width="160" height="52" rx="8" fill="#2b5b9e"/><text x="140" y="93" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">定义域</text><rect x="260" y="60" width="160" height="52" rx="8" fill="#4a7de0"/><text x="340" y="93" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">对应关系</text><rect x="460" y="60" width="160" height="52" rx="8" fill="#5a7a2a"/><text x="540" y="93" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">值域</text><text x="340" y="145" font-size="14" fill="#33536e" text-anchor="middle">三要素共同确定一个函数</text></svg>', caption: '图2　函数三要素：定义域、对应关系、值域。' },
        { type: 'example', label: '例题1', text: '判断 y² = x（x ≥ 0）是否为函数。<br><br><strong>解</strong>：对同一个 x &gt; 0（如 x = 4），y 可以取 2 或 −2 两个值，不满足“<strong>唯一确定</strong>”的要求，故 y² = x 不是函数（它表达的是两个函数 y = √x 与 y = −√x 的合并）。' },
        { type: 'heading', text: '三、区间表示法' },
        { type: 'keypoint', label: '重点·区间', text: '常用区间表示数集：<br><strong>闭区间</strong> [a, b] = {x | a ≤ x ≤ b}；<br><strong>开区间</strong> (a, b) = {x | a &lt; x &lt; b}；<br><strong>半开半闭</strong> [a, b)、 (a, b]；<br>含无穷时用 (a, +∞)、 (−∞, b] 等（∞ 永远搭配小括号）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="160" fill="#eef4fc"/><line x1="80" y1="90" x2="600" y2="90" stroke="#888" stroke-width="2.5"/><circle cx="200" cy="90" r="7" fill="#1a3a5c"/><circle cx="400" cy="90" r="7" fill="#1a3a5c"/><line x1="200" y1="83" x2="400" y2="83" stroke="#2b5b9e" stroke-width="5"/><text x="200" y="125" font-size="15" fill="#1a3a5c" text-anchor="middle">a</text><text x="400" y="125" font-size="15" fill="#1a3a5c" text-anchor="middle">b</text><text x="300" y="60" font-size="15" fill="#2b5b9e" font-weight="bold" text-anchor="middle">[a, b]：实心端=包含</text></svg>', caption: '图3　闭区间 [a, b]：两端实心点表示 a、b 都包含在内。' },
        { type: 'example', label: '例题2', text: '用区间表示不等式 1 ≤ x &lt; 5 的解集。<br><br><strong>解</strong>：左端含等号用闭括号，右端不含用开括号，故解集为 <strong>[1, 5)</strong>。' },
        { type: 'heading', text: '四、函数的表示法' },
        { type: 'table', headers: ['表示法', '形式', '优点', '适用'], rows: [['解析法', 'y = f(x) 表达式', '便于计算、推理', '规律明确时'], ['列表法', '表格列 x 与 f(x)', '直观查值', '离散数据'], ['图象法', '坐标平面曲线', '形象看趋势', '分析性质']] },
        { type: 'warn', label: '易错', text: '三大失误：①<strong>忽略定义域</strong>，如写 f(x) = 1/x 却不注明 x ≠ 0；②<strong>对应关系不唯一</strong>，误把 y² = x 当作函数；③<strong>分段函数漏写各段定义域</strong>，每段解析式必须配“适用范围”，且各段定义域不能重叠、合起来要覆盖全集。' },
        { type: 'tip', label: '记忆', text: '判断两个函数相同，只看<strong>定义域 + 对应关系</strong>（值域由前两者决定）。遇到实际问题时，<strong>定义域优先</strong>——先确定自变量能取哪些值，再谈表达式。分段函数要把“每一段的表达式和它的适用范围”当成整体来记。' },
        { type: 'heading', text: '五、分段函数' },
        { type: 'list', items: ['分段函数：不同区间用不同解析式', '每段必须写明适用范围（定义域）', '求值时先看 x 落在哪一段', '各段定义域并集为整个定义域', '画图象时逐段绘制再拼接'] },
        { type: 'reading', text: '分段函数不是“多个函数”，而是<strong>一个函数</strong>在不同区间上用不同式子表达。解题关键是“对号入座”：给定 x 后，先判断它属于哪一段的定义域，再代入对应解析式。各段定义域彼此不重叠且并集等于总定义域，才能保证每个 x 有唯一确定的函数值。' }
      ],
      exercises: [
        { type: 'choice', question: '下列各式中，y 是 x 的函数的是？', options: ['y² = x', 'x² + y² = 1', 'y = x² + 1', 'x = 2'], answer: 'y = x² + 1', explanation: '函数的核心是“对任意 x 有唯一 y”。y = x²+1 中每个 x 对应唯一 y，是函数。y²=x 与 x²+y²=1 中同一个 x 可对应两个 y，不满足唯一性；x=2 表示常数，不以 x 为自变量建立映射关系。故选 y = x²+1。' },
        { type: 'fill', question: '函数 f(x) = 1/x 的定义域用区间表示为 ____。', answer: '(−∞,0)∪(0,+∞)|(−∞, 0)∪(0, +∞)', explanation: '分母不能为 0，故 x ≠ 0。用区间表示为 (−∞,0)∪(0,+∞)。注意 ∞ 永远配小括号。' },
        { type: 'choice', question: '不等式 2 < x ≤ 6 用区间表示为？', options: ['(2,6)', '[2,6]', '(2,6]', '[2,6)'], answer: '(2,6]', explanation: '左端 2 < x 不含 2，用开括号 (；右端 x ≤ 6 含 6，用闭括号 ]。故为 (2,6]。' },
        { type: 'fill', question: '判断两个函数是否相同，核心是看 ____ 与对应关系是否一致。', answer: '定义域', explanation: '两个函数相同当且仅当定义域和对应关系都相同（值域由二者决定）。仅凭表达式相同不足以判定相同，还必须定义域一致。故填“定义域”。' },
        { type: 'choice', question: '关于分段函数，说法正确的是？', options: ['它是多个函数', '各段定义域可以重叠', '求值时先看 x 所在区间', '每段不必写适用范围'], answer: '求值时先看 x 所在区间', explanation: '分段函数是一个函数在不同区间用不同式子表达；求值时先判断 x 属于哪一段再代入，C 正确。A 错（是同一函数）；B 错（各段定义域不应重叠）；D 错（每段必须写明适用范围）。故选 C。' }
      ]
    },

    /* ---------------- 第10课时 函数的基本性质 ---------------- */
    {
      id: 'bx1-u6-l2',
      name: '函数的基本性质',
      chapter: '第三章 函数的概念与性质 · 3.2',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、单调性' },
        { type: 'paragraph', text: '单调性描述函数值随自变量增大而“整体上升”或“整体下降”的趋势，是考试最高频的性质之一。' },
        { type: 'keypoint', label: '重点·单调性', text: '设函数 f(x) 定义域为 I，对 I 内某区间 D 上任意 x₁ &lt; x₂：<br>若 <strong>f(x₁) &lt; f(x₂)</strong>，则 f(x) 在 D 上<strong>单调递增</strong>；<br>若 <strong>f(x₁) &gt; f(x₂)</strong>，则 f(x) 在 D 上<strong>单调递减</strong>。<br>判断常用<strong>定义法（作差判号）</strong>与<strong>图象法</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><path d="M100 160 Q280 40 560 90" fill="none" stroke="#2b5b9e" stroke-width="3"/><path d="M100 100 Q300 180 560 150" fill="none" stroke="#e05d44" stroke-width="3"/><text x="180" y="50" font-size="15" fill="#2b5b9e" font-weight="bold">上升＝递增</text><text x="400" y="185" font-size="15" fill="#c0392b" font-weight="bold">下降＝递减</text></svg>', caption: '图1　图象从左向右上升为递增，下降为递减。' },
        { type: 'list', items: ['定义法：任取 x₁&lt;x₂，作差 f(x₁)−f(x₂) 判号', '图象法：看曲线上升还是下降', '复合单调性：“同增异减”', '单调区间必须写在定义域内'] },
        { type: 'heading', text: '二、最大（小）值' },
        { type: 'keypoint', label: '重点·最值', text: '若存在 x₀ 使对定义域内任意 x 都有 <strong>f(x) ≤ f(x₀)</strong>，则 f(x₀) 是<strong>最大值</strong>；都有 <strong>f(x) ≥ f(x₀)</strong> 则是<strong>最小值</strong>。二次函数在闭区间上的最值，要比较<strong>顶点与两端点</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><path d="M120 180 Q340 60 560 180" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="340" cy="120" r="6" fill="#e05d44"/><circle cx="120" cy="180" r="6" fill="#5a7a2a"/><circle cx="560" cy="180" r="6" fill="#5a7a2a"/><text x="340" y="110" font-size="14" fill="#c0392b" text-anchor="middle">顶点(最小)</text><text x="340" y="205" font-size="14" fill="#33536e" text-anchor="middle">闭区间最值：比顶点与端点</text></svg>', caption: '图2　开口向上时顶点为最小值，闭区间最值还要比较两端点。' },
        { type: 'example', label: '例题1', text: '求 f(x) = x² − 2x 在 [0, 3] 上的最值。<br><br><strong>解</strong>：f(x) = (x−1)² − 1，对称轴 x = 1 在区间内。最小值在顶点 f(1) = −1；端点 f(0) = 0，f(3) = 3，故<strong>最大值为 3，最小值为 −1</strong>。' },
        { type: 'heading', text: '三、奇偶性' },
        { type: 'keypoint', label: '重点·奇偶性', text: '函数定义域须关于<strong>原点对称</strong>。若对定义域内任意 x：<br><strong>f(−x) = f(x)</strong>，则 f(x) 为<strong>偶函数</strong>，图象关于 <strong>y 轴对称</strong>；<br><strong>f(−x) = −f(x)</strong>，则 f(x) 为<strong>奇函数</strong>，图象关于 <strong>原点对称</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><line x1="340" y1="20" x2="340" y2="180" stroke="#999" stroke-dasharray="5,4"/><path d="M220 150 Q340 60 460 150" fill="none" stroke="#2b5b9e" stroke-width="3"/><path d="M220 60 Q340 150 460 60" fill="none" stroke="#e05d44" stroke-width="3"/><text x="150" y="105" font-size="14" fill="#2b5b9e" text-anchor="middle">y轴对称(偶)</text><text x="540" y="105" font-size="14" fill="#c0392b" text-anchor="middle">原点对称(奇)</text></svg>', caption: '图3　偶函数图象关于 y 轴对称，奇函数图象关于原点对称。' },
        { type: 'example', label: '例题2', text: '判断 f(x) = x³ 的奇偶性。<br><br><strong>解</strong>：定义域为 R，关于原点对称。f(−x) = (−x)³ = −x³ = −f(x)，故 f(x) = x³ 是<strong>奇函数</strong>。' },
        { type: 'heading', text: '四、奇偶与单调对照' },
        { type: 'table', headers: ['性质', '代数特征', '图象特征', '典型例子'], rows: [['偶函数', 'f(−x)=f(x)', '关于 y 轴对称', 'f(x)=x²'], ['奇函数', 'f(−x)=−f(x)', '关于原点对称', 'f(x)=x³'], ['非奇非偶', '两者都不满足', '无上述对称', 'f(x)=x+1']] },
        { type: 'warn', label: '易错', text: '两大高频失分：①<strong>忘记检验定义域对称性</strong>，直接算 f(−x) 就下结论（如 f(x)=x², x∈[−1,2] 因定义域不对称而<strong>非奇非偶</strong>）；②<strong>单调性与奇偶性综合</strong>时乱用，例如奇函数在对称区间上单调性<strong>相同</strong>，偶函数在对称区间上单调性<strong>相反</strong>，需结合图象记忆。' },
        { type: 'tip', label: '记忆', text: '判奇偶：<strong>一查定义域对称，二代 −x 看关系</strong>。记牢“奇×奇=偶、偶×偶=偶、奇×偶=奇”的运算规律，对复合与乘积函数很有用。单调性与奇偶性综合题，<strong>先定奇偶性、再画图、最后看区间</strong>，往往比纯代数快。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['增函数 f(x₁)&lt;f(x₂)；减函数反之', '最值：比顶点与闭区间端点', '偶 f(−x)=f(x) 关于 y 轴对称', '奇 f(−x)=−f(x) 关于原点对称', '判奇偶先查定义域是否关于原点对称'] },
        { type: 'reading', text: '奇偶性与单调性常综合考查：奇函数在关于原点对称的区间上<strong>单调性一致</strong>（如 y=x³ 在 R 上始终递增）；偶函数在对称区间上<strong>单调性相反</strong>（如 y=x² 在 (−∞,0] 递减、[0,+∞) 递增）。解题时先利用奇偶性把待求区间“翻译”到已知单调区间，再下结论。' }
      ],
      exercises: [
        { type: 'choice', question: '函数 f(x) = x² 在 (−∞, 0] 上的单调性是？', options: ['单调递增', '单调递减', '先增后减', '常函数'], answer: '单调递减', explanation: 'f(x)=x² 是开口向上的抛物线，对称轴 x=0。在 (−∞,0] 上图象从左向右下降，故单调递减。' },
        { type: 'fill', question: '若 f(x) 是偶函数，且 f(3) = 5，则 f(−3) = ____。', answer: '5', explanation: '偶函数满足 f(−x) = f(x)，所以 f(−3) = f(3) = 5。故填 5。' },
        { type: 'choice', question: '下列函数中为奇函数的是？', options: ['f(x) = x²', 'f(x) = x³', 'f(x) = x² + 1', 'f(x) = |x|'], answer: 'f(x) = x³', explanation: '奇函数满足 f(−x)=−f(x)。x³：f(−x)=(−x)³=−x³=−f(x)，是奇函数。x²、x²+1、|x| 均满足 f(−x)=f(x)，是偶函数。故选 x³。' },
        { type: 'fill', question: '判断函数奇偶性时，第一步必须检查 ____ 是否关于原点对称。', answer: '定义域', explanation: '若函数定义域不关于原点对称（如 [−1,2]），则它既不奇也不偶。因此判奇偶前必须先确认定义域关于原点对称，再代 −x 检验。故填“定义域”。' },
        { type: 'choice', question: 'f(x) = x² − 2x 在 [0,3] 上的最大值为？', options: ['−1', '0', '3', '不存在'], answer: '3', explanation: '配方 f(x)=(x−1)²−1，顶点 x=1 处取最小值 −1；端点 f(0)=0，f(3)=3。闭区间上比较顶点与端点，最大值为 3。' }
      ]
    }

  );
})();
