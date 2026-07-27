/* ============================================================
 * 高三数学 · 高考复习专题 · 解析几何
 * 第6单元 综合复习（十一、中点弦与点差法；十二、综合问题中的条件转化）
 * 数据注入：math.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt5');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 中点弦与点差法 ---------------- */
    {
      id: 'zt5-u6-l1',
      name: '中点弦与点差法',
      chapter: '解析几何复习 · 十一、中点弦与点差法',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、点差法的原理' },
        { type: 'paragraph', text: '解析几何中，经常遇到“已知弦的中点，求弦所在直线”或“求弦中点的轨迹”这类问题。若逐一设出端点坐标再联立方程，运算量往往很大。点差法是一种专门针对“弦与中点”关系的解法，它利用曲线方程的整体相减，直接建立中点坐标与弦斜率之间的联系。' },
        { type: 'keypoint', label: '重点·原理', text: '设弦的两个端点为 <strong>P(x₁, y₁)、Q(x₂, y₂)</strong>，且 P、Q 都在同一曲线上。将两点坐标分别代入曲线方程后<strong>两式相减</strong>，利用 x₁ + x₂、y₁ + y₂（即中点坐标的 2 倍）与 (y₁ - y₂)/(x₁ - x₂)（即弦的斜率 k_PQ）建立关系。中点 M 的坐标为 ((x₁+x₂)/2, (y₁+y₂)/2)。' },
        { type: 'paragraph', text: '点差法的本质，是把“两个点在曲线上”这一条件，转化为“中点坐标”和“弦斜率”之间的约束。这样就把原本需要求两个端点的问题，降维成只关心中点和斜率的问题，计算量显著下降。' },
        { type: 'heading', text: '二、椭圆的中点弦斜率关系' },
        { type: 'keypoint', label: '重点·椭圆', text: '对于椭圆 <strong>x²/a² + y²/b² = 1</strong>，若弦 PQ 的中点为 M，O 为椭圆中心，则有 <strong>k_PQ · k_OM = -b²/a²</strong>。其中 k_OM 是直线 OM 的斜率，k_PQ 是弦 PQ 的斜率。' },
        { type: 'paragraph', text: '推导要点：将 P、Q 代入椭圆方程后相减，得到 (x₁² - x₂²)/a² + (y₁² - y₂²)/b² = 0，即 (x₁+x₂)(x₁-x₂)/a² + (y₁+y₂)(y₁-y₂)/b² = 0。两边同除以 (x₁-x₂)，并代入中点坐标与斜率，即得上述结论。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图1　椭圆的中点弦</text><ellipse cx="340" cy="160" rx="230" ry="110" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="340" cy="160" r="5" fill="#2b5b9e"/><text x="348" y="158" font-size="15" fill="#2b5b9e">O</text><line x1="114" y1="141" x2="516" y2="89" stroke="#e05d44" stroke-width="2.5"/><circle cx="114" cy="141" r="6" fill="#e05d44"/><text x="96" y="150" font-size="15" fill="#c0392b">P</text><circle cx="516" cy="89" r="6" fill="#e05d44"/><text x="526" y="93" font-size="15" fill="#c0392b">Q</text><circle cx="315" cy="115" r="6" fill="#5a7a2a"/><text x="296" y="110" font-size="15" fill="#5a7a2a">M</text><line x1="340" y1="160" x2="315" y2="115" stroke="#4a7de0" stroke-width="1.5" stroke-dasharray="5 4"/><text x="20" y="282" font-size="14" fill="#33536e">M 为弦 PQ 的中点，O 为椭圆中心，有 k_PQ · k_OM = -b²/a²</text></svg>', caption: '图1　椭圆中点弦：M 是弦 PQ 的中点，O 是椭圆中心，二者斜率之积为 -b²/a²。' },
        { type: 'list', items: ['点差法的第一步都是“代入方程、两式相减”', '相减后要把 x₁+x₂、y₁+y₂ 换成中点坐标的 2 倍', '椭圆情形得到 k_PQ·k_OM = -b²/a²，负号来自椭圆方程的加号', '得到斜率后，配合中点坐标即可写出弦所在直线方程'] },
        { type: 'example', label: '例题1', text: '已知椭圆 x²/9 + y²/4 = 1 内一点 M(1, 1) 是某弦的中点，求该弦所在直线方程。<br><br><strong>解</strong>：设弦端点为 P(x₁, y₁)、Q(x₂, y₂)。代入椭圆方程得 x₁²/9 + y₁²/4 = 1，x₂²/9 + y₂²/4 = 1，两式相减：<br>(x₁² - x₂²)/9 + (y₁² - y₂²)/4 = 0，即 (x₁+x₂)(x₁-x₂)/9 + (y₁+y₂)(y₁-y₂)/4 = 0。<br>由 M(1,1) 为中点，得 x₁+x₂ = 2，y₁+y₂ = 2，代入：2(x₁-x₂)/9 + 2(y₁-y₂)/4 = 0，整理得 (y₁-y₂)/(x₁-x₂) = -4/9，即 k_PQ = -4/9。<br>直线过 M(1,1)：y - 1 = -4/9 (x - 1)，化为 <strong>4x + 9y - 13 = 0</strong>。<br>检验：M 在椭圆内部（1/9 + 1/4 &lt; 1），弦确实存在，故所求直线为 4x + 9y - 13 = 0。' },
        { type: 'heading', text: '三、双曲线的中点弦' },
        { type: 'keypoint', label: '重点·双曲线', text: '对于双曲线 <strong>x²/a² - y²/b² = 1</strong>，若弦 PQ 的中点为 M，O 为中心，则有 <strong>k_PQ · k_OM = b²/a²</strong>。与椭圆相比，乘积由“负”变“正”，原因是双曲线方程中的减号。' },
        { type: 'paragraph', text: '推导同样用点差法：代入后相减得 (x₁+x₂)(x₁-x₂)/a² - (y₁+y₂)(y₁-y₂)/b² = 0，化为斜率形式即得 k_PQ·k_OM = b²/a²。双曲线中点弦还常联系“中点轨迹”问题，即所有以某方向弦的中点构成的曲线。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图2　双曲线的中点弦</text><path d="M220 150 C180 130 140 112 90 95" fill="none" stroke="#4a7de0" stroke-width="2.5"/><path d="M220 150 C180 170 140 188 90 205" fill="none" stroke="#4a7de0" stroke-width="2.5"/><path d="M460 150 C500 130 540 112 590 95" fill="none" stroke="#4a7de0" stroke-width="2.5"/><path d="M460 150 C500 170 540 188 590 205" fill="none" stroke="#4a7de0" stroke-width="2.5"/><circle cx="340" cy="150" r="5" fill="#2b5b9e"/><text x="348" y="148" font-size="15" fill="#2b5b9e">O</text><line x1="540" y1="115" x2="180" y2="165" stroke="#e05d44" stroke-width="2.5"/><circle cx="540" cy="115" r="6" fill="#e05d44"/><text x="550" y="110" font-size="15" fill="#c0392b">P</text><circle cx="180" cy="165" r="6" fill="#e05d44"/><text x="150" y="180" font-size="15" fill="#c0392b">Q</text><circle cx="360" cy="140" r="6" fill="#5a7a2a"/><text x="368" y="135" font-size="15" fill="#5a7a2a">M</text><line x1="340" y1="150" x2="360" y2="140" stroke="#4a7de0" stroke-width="1.5" stroke-dasharray="5 4"/><text x="20" y="282" font-size="14" fill="#33536e">双曲线 x²/a² - y²/b² = 1 的中点弦满足 k_PQ · k_OM = b²/a²</text></svg>', caption: '图2　双曲线中点弦：两支上的弦 PQ，其中点 M 与中心 O 满足斜率之积为正 b²/a²。' },
        { type: 'heading', text: '四、抛物线的中点弦' },
        { type: 'keypoint', label: '重点·抛物线', text: '对于抛物线 <strong>y² = 2px</strong>，若弦 PQ 的中点为 M(x₀, y₀)，则弦的斜率为 <strong>k_PQ = y₀/p</strong>。注意这里只与中点的纵坐标 y₀ 有关，形式比椭圆、双曲线更简洁。' },
        { type: 'paragraph', text: '推导：将 P、Q 代入 y² = 2px 得 y₁² = 2px₁，y₂² = 2px₂，相减得 (y₁-y₂)(y₁+y₂) = 2p(x₁-x₂)。由中点 y₀ = (y₁+y₂)/2 得 y₁+y₂ = 2y₀，故 (y₁-y₂)·2y₀ = 2p(x₁-x₂)，即 k_PQ = (y₁-y₂)/(x₁-x₂) = y₀/p。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图3　抛物线的中点弦</text><path d="M40 150 C90 130 160 110 260 90 C360 70 470 55 600 45" fill="none" stroke="#4a7de0" stroke-width="2.5"/><path d="M40 150 C90 170 160 190 260 210 C360 230 470 245 600 255" fill="none" stroke="#4a7de0" stroke-width="2.5"/><circle cx="40" cy="150" r="5" fill="#2b5b9e"/><text x="20" y="172" font-size="15" fill="#2b5b9e">O(顶点)</text><line x1="200" y1="110" x2="460" y2="190" stroke="#e05d44" stroke-width="2.5"/><circle cx="200" cy="110" r="6" fill="#e05d44"/><text x="182" y="104" font-size="15" fill="#c0392b">P</text><circle cx="460" cy="190" r="6" fill="#e05d44"/><text x="470" y="195" font-size="15" fill="#c0392b">Q</text><circle cx="330" cy="150" r="6" fill="#5a7a2a"/><text x="338" y="145" font-size="15" fill="#5a7a2a">M(x₀,y₀)</text><text x="20" y="282" font-size="14" fill="#33536e">抛物线 y² = 2px 的中点弦满足 k_PQ = y₀/p（M 为弦中点）</text></svg>', caption: '图3　抛物线中点弦：弦 PQ 的中点为 M(x₀, y₀)，弦斜率只与 y₀ 有关，k_PQ = y₀/p。' },
        { type: 'list', items: ['椭圆：k_PQ·k_OM = -b²/a²（负号）', '双曲线：k_PQ·k_OM = b²/a²（正号）', '抛物线 y²=2px：k_PQ = y₀/p（仅与中点纵坐标有关）', '三者都源于“代入方程、两式相减”的统一思路'] },
        { type: 'heading', text: '五、点差法的应用' },
        { type: 'paragraph', text: '点差法主要有三类应用：①已知弦的中点，求弦所在直线的方程（如例题1）；②求弦中点的轨迹方程（把斜率关系与中点坐标代入曲线，消去端点得到轨迹）；③已知弦所在直线，求弦中点的某种性质或求弦的斜率。无论哪类，核心都是“中点坐标 + 弦斜率”的桥梁公式。' },
        { type: 'table', headers: ['曲线', '方程', '中点弦斜率关系'], rows: [['椭圆', 'x²/a² + y²/b² = 1', 'k_PQ · k_OM = -b²/a²'], ['双曲线', 'x²/a² - y²/b² = 1', 'k_PQ · k_OM = b²/a²'], ['抛物线', 'y² = 2px', 'k_PQ = y₀/p']] },
        { type: 'warn', label: '易错', text: '点差法有两个必须检验的前提：①<strong>弦必须存在且中点必须落在曲线内部</strong>（椭圆、双曲线尤其如此），若中点在曲线外，则不存在以它为中点实弦；②<strong>当弦垂直于 x 轴时斜率不存在</strong>，此时不能用 k_PQ 表达，应单独讨论直线 x = x₀ 的情形，避免漏解或误用公式。' },
        { type: 'tip', label: '提示', text: '使用点差法求得直线方程后，建议把中点代回原曲线检验“中点是否在曲线内部”。这一步既是保证弦存在的必要检查，也是高考解答题中体现严谨性的得分点，不可省略。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['点差法：将两端点代入曲线方程后相减，利用中点与斜率建关系', '椭圆中点弦：k_PQ·k_OM = -b²/a²', '双曲线中点弦：k_PQ·k_OM = b²/a²', '抛物线中点弦：k_PQ = y₀/p', '应用：求弦方程、求中点轨迹、求斜率', '易错：检验中点是否在曲线内部、斜率不存在情形需单独讨论'] }
      ],
      exercises: [
        { type: 'choice', question: '对于椭圆 x²/a² + y²/b² = 1，弦 PQ 的中点为 M，O 为中心，则下列关系正确的是？', options: ['k_PQ·k_OM = b²/a²', 'k_PQ·k_OM = -b²/a²', 'k_PQ + k_OM = -b²/a²', 'k_PQ·k_OM = a²/b²'], answer: 'k_PQ·k_OM = -b²/a²', explanation: '由点差法：将 P、Q 代入椭圆方程相减，可得 (x₁+x₂)(x₁-x₂)/a² + (y₁+y₂)(y₁-y₂)/b² = 0，化为中点与斜率即得 k_PQ·k_OM = -b²/a²。椭圆方程中的加号对应乘积带负号，故正确选项为 k_PQ·k_OM = -b²/a²。' },
        { type: 'choice', question: '抛物线 y² = 2px 的弦 PQ 中点为 M(x₀, y₀)，则该弦的斜率为？', options: ['k_PQ = p/y₀', 'k_PQ = y₀/p', 'k_PQ = 2p/y₀', 'k_PQ = x₀/p'], answer: 'k_PQ = y₀/p', explanation: '将 P、Q 代入 y² = 2px 后相减得 (y₁-y₂)(y₁+y₂) = 2p(x₁-x₂)。由中点纵坐标 y₀ = (y₁+y₂)/2 得 y₁+y₂ = 2y₀，代入得 (y₁-y₂)·2y₀ = 2p(x₁-x₂)，故 k_PQ = (y₁-y₂)/(x₁-x₂) = y₀/p，正确选项为 k_PQ = y₀/p。' },
        { type: 'choice', question: '关于点差法的前提，下列说法错误的一项是？', options: ['需保证弦存在', '中点必须落在曲线内部', '可直接用于曲线外任意一点作弦', '需检验斜率不存在的情形'], answer: '可直接用于曲线外任意一点作弦', explanation: '点差法要求弦确实存在，而弦存在的必要条件是中点落在曲线内部（椭圆、双曲线情形）。若中点在曲线外，则不存在以它为中点实弦，不能滥用公式。此外当弦垂直于 x 轴时斜率不存在，需单独讨论。故“可直接用于曲线外任意一点作弦”是错误的。' },
        { type: 'fill', question: '双曲线 x²/a² - y²/b² = 1 的中点弦满足 k_PQ · k_OM = ____。', answer: 'b²/a²', explanation: '对双曲线用点差法：将端点代入 x²/a² - y²/b² = 1 后相减，得到 (x₁+x₂)(x₁-x₂)/a² - (y₁+y₂)(y₁-y₂)/b² = 0，化为中点与斜率形式即为 k_PQ·k_OM = b²/a²。与椭圆相比符号由负变正，源于双曲线方程中的减号。' },
        { type: 'fill', question: '椭圆 x²/9 + y²/4 = 1 内一点 M(1, 1) 为某弦中点，则该弦所在直线的斜率 k = ____。', answer: '-4/9', explanation: '椭圆中 a² = 9，b² = 4，由中点弦公式 k_PQ·k_OM = -b²/a² = -4/9。中心 O 到中点 M(1,1) 的斜率 k_OM = (1-0)/(1-0) = 1，故弦斜率 k_PQ = -4/9。且 M 在椭圆内（1/9+1/4<1），弦确实存在，结果有效。' }
      ]
    },

    /* ---------------- 第2课时 综合问题中的条件转化 ---------------- */
    {
      id: 'zt5-u6-l2',
      name: '综合问题中的条件转化',
      chapter: '解析几何复习 · 十二、综合问题中的条件转化',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、垂直条件的转化' },
        { type: 'paragraph', text: '解析几何综合题里，“垂直”是最常见的几何条件之一。把“OA ⊥ OB”这样的几何语言翻译成代数等式，是解题的第一步。核心工具是向量数量积与斜率两种表达方式。' },
        { type: 'keypoint', label: '重点·垂直', text: '若 A(x₁, y₁)、B(x₂, y₂)，则 <strong>向量OA ⊥ 向量OB ⇔ 向量OA·向量OB = 0</strong>，坐标形式为 <strong>x₁x₂ + y₁y₂ = 0</strong>。等价地，当两直线斜率都存在时，<strong>k₁·k₂ = -1</strong>；若其中一条斜率不存在（垂直于 x 轴），则另一条必须平行于 x 轴。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图1　向量垂直 OA ⊥ OB</text><polygon points="120,200 120,80 460,200" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="120" cy="200" r="5" fill="#2b5b9e"/><text x="100" y="222" font-size="15" fill="#2b5b9e">O</text><circle cx="120" cy="80" r="6" fill="#e05d44"/><text x="108" y="70" font-size="15" fill="#c0392b">A</text><circle cx="460" cy="200" r="6" fill="#e05d44"/><text x="470" y="205" font-size="15" fill="#c0392b">B</text><path d="M120 175 L145 175 L145 200" fill="none" stroke="#5a7a2a" stroke-width="2"/><text x="200" y="150" font-size="15" fill="#33536e">∠AOB = 90°</text><text x="20" y="262" font-size="14" fill="#33536e">OA⊥OB ⇔ 向量OA·向量OB = 0，即 x₁x₂ + y₁y₂ = 0</text></svg>', caption: '图1　直角三角形 OAB，直角在 O 处，对应向量数量积 x₁x₂ + y₁y₂ = 0。' },
        { type: 'paragraph', text: '用斜率表达时务必小心“斜率不存在”的特例：当一条直线垂直于 x 轴，其斜率无意义，此时不能用 k₁k₂ = -1，而应当直接用坐标判断（一条竖直、另一条水平）。向量数量积形式 x₁x₂ + y₁y₂ = 0 则无需分类，适用范围更广。' },
        { type: 'heading', text: '二、共线条件的转化' },
        { type: 'keypoint', label: '重点·共线', text: '三点 A、B、C 共线有几种等价表述：①<strong>向量共线</strong>，即 向量AB ∥ 向量AC；②<strong>斜率相等</strong>，k_AB = k_BC（斜率存在时）；③<strong>行列式为零</strong>，x₁y₂ - x₂y₁ 形式的等式（或写成 x_A(y_B - y_C) + x_B(y_C - y_A) + x_C(y_A - y_B) = 0）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图2　三点共线</text><line x1="80" y1="150" x2="600" y2="150" stroke="#4a7de0" stroke-width="2.5"/><circle cx="180" cy="150" r="6" fill="#e05d44"/><text x="160" y="140" font-size="15" fill="#c0392b">A</text><circle cx="340" cy="150" r="6" fill="#5a7a2a"/><text x="320" y="140" font-size="15" fill="#5a7a2a">B</text><circle cx="500" cy="150" r="6" fill="#7a5aa0"/><text x="480" y="140" font-size="15" fill="#7a5aa0">C</text><text x="20" y="200" font-size="14" fill="#33536e">A、B、C 共线 ⇔ 向量AB ∥ 向量AC，或斜率相等，或行列式 x₁y₂ - x₂y₁ = 0</text></svg>', caption: '图2　A、B、C 三点落在同一直线上，可用向量平行或斜率相等来刻画。' },
        { type: 'list', items: ['向量共线：存在实数 λ 使 向量AC = λ·向量AB', '斜率相等：k_AB = k_BC（前提是两直线斜率都存在）', '行列式法：x₁y₂ - x₂y₁ = 0 可避免斜率不存在的分类讨论', '共线常与“点在弦上”“定点共线”等综合条件结合出现'] },
        { type: 'heading', text: '三、面积的计算' },
        { type: 'keypoint', label: '重点·面积', text: '三角形 OAB 的面积有两种常用算法：①<strong>底乘高</strong>，S = (1/2)·|AB|·d，其中 d 是点 O 到直线 AB 的距离；②<strong>向量叉积</strong>，S = (1/2)|x₁y₂ - x₂y₁|。叉积公式无需先求直线方程与距离，在联立后直接代入根与系数关系即可。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="20" y="30" font-size="17" font-weight="bold" fill="#2b5b9e">图3　三角形面积与高</text><line x1="120" y1="210" x2="520" y2="120" stroke="#4a7de0" stroke-width="2.5"/><circle cx="120" cy="210" r="6" fill="#e05d44"/><text x="100" y="230" font-size="15" fill="#c0392b">A</text><circle cx="520" cy="120" r="6" fill="#e05d44"/><text x="530" y="125" font-size="15" fill="#c0392b">B</text><circle cx="320" cy="80" r="6" fill="#5a7a2a"/><text x="300" y="70" font-size="15" fill="#5a7a2a">O</text><line x1="320" y1="80" x2="330" y2="180" stroke="#c0392b" stroke-width="1.8" stroke-dasharray="5 4"/><text x="340" y="170" font-size="14" fill="#c0392b">d</text><text x="20" y="262" font-size="14" fill="#33536e">S = (1/2)·|AB|·d，也可用叉积 S = (1/2)|x₁y₂ - x₂y₁|</text></svg>', caption: '图3　以 AB 为底、O 到 AB 的距离 d 为高，面积 S = (1/2)·|AB|·d。' },
        { type: 'paragraph', text: '叉积公式的来历：把向量OA、向量OB 看作从原点出发的两个向量，它们张成的平行四边形面积为 |x₁y₂ - x₂y₁|，三角形面积取其一半。联立直线与曲线后，x₁、x₂、y₁、y₂ 都可由韦达定理表示，代入即可求面积。' },
        { type: 'example', label: '例题1', text: '直线 y = kx + 1 与椭圆 x²/4 + y² = 1 交于 A、B 两点，且 向量OA ⊥ 向量OB，求 k 的值。<br><br><strong>解</strong>：联立 y = kx + 1 与 x²/4 + y² = 1，得 x²/4 + (kx + 1)² = 1，整理为 (1/4 + k²)x² + 2kx = 0。<br>显然 x = 0 是一个根，对应点 (0, 1)；另一根 x₂ = -2k/(1/4 + k²)，对应 y₂ = kx₂ + 1 = (1/4 - k²)/(1/4 + k²)。<br>由 OA ⊥ OB 得 x₁x₂ + y₁y₂ = 0。其中 x₁ = 0，y₁ = 1，故 0 + 1·y₂ = 0，即 (1/4 - k²)/(1/4 + k²) = 0，解得 <strong>k² = 1/4，k = ±1/2</strong>。<br>经判别式检验两交点存在，故 k = ±1/2。' },
        { type: 'heading', text: '四、向量综合条件' },
        { type: 'keypoint', label: '重点·圆过原点', text: '“以 AB 为直径的圆过原点 O”这一条件，等价于 <strong>∠AOB = 90°</strong>，也就是 <strong>向量OA·向量OB = 0</strong>（即 x₁x₂ + y₁y₂ = 0）。这类向量条件与垂直条件本质相同，是综合题的高频考点。此外还有“向量OA + 向量OB 与某向量平行”等，都可翻译为坐标等式。' },
        { type: 'list', items: ['以 AB 为直径的圆过原点 ⇔ 向量OA·向量OB = 0', '向量OA + 向量OB 平行于某向量 ⇔ 坐标满足对应线性关系', '角平分线条件常转化为到角或距离关系', '所有向量条件最终都落成坐标的一次或二次等式'] },
        { type: 'heading', text: '五、范围与最值问题' },
        { type: 'paragraph', text: '综合题中常要求“求参数的取值范围”或“求某个量的最值”。处理思路是：先用韦达定理把目标式写成关于参数的函数，再借助基本不等式、判别式 Δ ≥ 0、或参数自身的取值限制来确定范围。' },
        { type: 'keypoint', label: '重点·方法', text: '范围最值的常用工具：①<strong>基本不等式</strong>（如 ab ≤ (a+b)²/4）；②<strong>判别式法</strong>，联立后由 Δ ≥ 0 得到参数范围；③把目标式转化为单变量函数后求最值。务必结合几何意义（如交点存在、点在曲线内）确定参数的实际取值范围。' },
        { type: 'tip', label: '提示', text: '处理“OA⊥OB”类综合题的标准流程：设直线方程 → 与曲线联立 → 写出韦达定理（x₁+x₂、x₁x₂）→ 把 x₁x₂ + y₁y₂ = 0 用 k、m 表示 → 解出参数关系。y₁y₂ 可通过直线方程写成关于 x₁、x₂ 的式子，从而全部化为根与系数关系。' },
        { type: 'warn', label: '易错', text: '综合题中最容易丢分的两处：①<strong>斜率不存在的情形</strong>要单独讨论，不能默认斜率总存在；②联立后的<strong>判别式 Δ ≥ 0 必须检验</strong>，否则求出的参数可能使直线与曲线并不相交，得出增根。此外用 k₁k₂ = -1 判断垂直时，也要先确认两条直线的斜率都存在。' },
        { type: 'table', headers: ['几何条件', '代数转化', '备注'], rows: [['OA ⊥ OB', 'x₁x₂ + y₁y₂ = 0', '或 k₁k₂ = -1（斜率存在时）'], ['A、B、C 共线', '向量AB ∥ 向量AC 或行列式=0', '斜率法需斜率存在'], ['S_OAB', '(1/2)|x₁y₂ - x₂y₁|', '亦可用 (1/2)·|AB|·d'], ['以 AB 为直径的圆过 O', '向量OA·向量OB = 0', '等价于 OA ⊥ OB']] },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['垂直：向量OA·向量OB = 0 ⇔ x₁x₂ + y₁y₂ = 0；或 k₁k₂ = -1', '共线：向量平行 / 斜率相等 / 行列式为零', '面积：S = (1/2)·|AB|·d 或 S = (1/2)|x₁y₂ - x₂y₁|', '以 AB 为直径的圆过原点 ⇔ 向量OA·向量OB = 0', '范围最值：韦达定理 + 基本不等式 / 判别式', '易错：斜率不存在要分类、Δ≥0 必检验'] },
        { type: 'example', label: '例题2', text: '直线 y = x - 1 与抛物线 y² = 4x 交于 A、B 两点，求 △OAB 的面积（用叉积公式）。<br><br><strong>解</strong>：联立得 (x - 1)² = 4x，即 x² - 6x + 1 = 0，解得 x₁ = 3 - 2√2，x₂ = 3 + 2√2。<br>由 y = x - 1 得 y₁ = x₁ - 1，y₂ = x₂ - 1。<br>叉积 x₁y₂ - x₂y₁ = x₁(x₂ - 1) - x₂(x₁ - 1) = x₂ - x₁。<br>故 S = (1/2)|x₂ - x₁| = (1/2)·|4√2| = <strong>2√2</strong>。' }
      ],
      exercises: [
        { type: 'choice', question: '直线 y = kx + m 与椭圆交于 A(x₁, y₁)、B(x₂, y₂)，若 向量OA ⊥ 向量OB，则等价于？', options: ['x₁x₂ + y₁y₂ = 0', 'x₁x₂ - y₁y₂ = 0', 'x₁y₂ + x₂y₁ = 0', 'k₁k₂ = 1'], answer: 'x₁x₂ + y₁y₂ = 0', explanation: '向量OA 的坐标为 (x₁, y₁)，向量OB 的坐标为 (x₂, y₂)。两向量垂直当且仅当它们的数量积为零，即 x₁x₂ + y₁y₂ = 0。这是垂直条件最直接的坐标表达，无需斜率存在的假设，适用范围最广，故正确选项为 x₁x₂ + y₁y₂ = 0。' },
        { type: 'choice', question: '关于三点 A、B、C 共线的判定，下列说法错误的一项是？', options: ['向量AB ∥ 向量AC', 'k_AB = k_BC', '可写成 x₁y₂ - x₂y₁ = 0 形式之一', '三角形面积最大'], answer: '三角形面积最大', explanation: '三点共线意味着它们落在同一直线上，可等价表述为向量AB 平行于 向量AC、斜率相等 k_AB = k_BC，或行列式 x₁y₂ - x₂y₁ = 0（及其变形）。三点共线时三角形 ABC 退化为线段，面积应为 0 而非最大，故“三角形面积最大”是错误的判定方法。' },
        { type: 'choice', question: '以 AB 为直径的圆过原点 O，这等价于下列哪一条件？', options: ['|OA| = |OB|', '向量OA·向量OB = 0', 'AB 的中点为 O', '向量OA ∥ 向量OB'], answer: '向量OA·向量OB = 0', explanation: '由圆周角定理，直径所对的圆周角为直角，故以 AB 为直径的圆过原点 O 等价于 ∠AOB = 90°，即 OA ⊥ OB，坐标形式为 向量OA·向量OB = 0（x₁x₂ + y₁y₂ = 0）。它与线段长度无关，也不要求 O 为中点或 OA 与 OB 平行，故正确选项为 向量OA·向量OB = 0。' },
        { type: 'fill', question: '三角形 OAB 的面积可用叉积表示为 S = (1/2)|x₁y₂ - ____|。', answer: 'x₂y₁', explanation: '由原点出发的向量OA=(x₁,y₁)、向量OB=(x₂,y₂) 所张成的三角形面积，等于两向量叉积绝对值的一半，即 S = (1/2)|x₁y₂ - x₂y₁|。因此括号内应填 x₂y₁。该公式避免了先求直线方程与点到直线距离，联立后直接代入根与系数关系即可。' },
        { type: 'fill', question: '已知 向量OA ⊥ 向量OB，则 向量OA·向量OB = x₁x₂ + y₁y₂ = ____。', answer: '0', explanation: '两向量垂直的充要条件是它们的数量积为零。向量OA 的坐标为 (x₁, y₁)，向量OB 的坐标为 (x₂, y₂)，数量积为 x₁x₂ + y₁y₂。由 OA ⊥ OB 直接得到 x₁x₂ + y₁y₂ = 0。这一等式是解析几何综合题中转化垂直条件的基础。' }
      ]
    }

  );
})();
