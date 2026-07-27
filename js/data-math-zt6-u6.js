/* ============================================================
 * 高三数学 · 高考复习专题 · 概率统计
 * 第11课时：相关关系与一元线性回归
 * 第12课时：独立性检验（2×2列联表与卡方）
 * 数据注入：math.zt6.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt6');
  if (!v) return;

  v.points.push(

    /* ---------------- 第11课时 相关关系与一元线性回归 ---------------- */
    {
      id: 'zt6-u6-l1',
      name: '相关关系与一元线性回归',
      chapter: '概率统计复习 · 十一、相关关系与一元线性回归',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、相关关系与相关系数' },
        { type: 'paragraph', text: '生活中许多变量之间既不是严格的确定关系（如函数），也不是毫无关联。例如身高与体重、学习时间与成绩，往往呈现“一个量变化时另一个量也跟着变化”的趋势，这种关系叫做相关关系。研究相关关系，先要判断方向与强弱。' },
        { type: 'keypoint', label: '重点·正相关与负相关', text: '<strong>正相关</strong>：一个变量增大时，另一个变量也倾向于增大，此时相关系数 <strong>r ＞ 0</strong>；<strong>负相关</strong>：一个变量增大时，另一个变量反而倾向于减小，此时 <strong>r ＜ 0</strong>。若两变量变化无明显同向或反向趋势，则 r 接近 0。' },
        { type: 'paragraph', text: '相关系数 r 用来度量两个变量线性相关的方向与强弱。它的取值范围被限制在闭区间内，符号反映方向，绝对值大小反映线性相关的紧密程度。' },
        { type: 'list', items: ['正相关：r ＞ 0，两变量同向变化', '负相关：r ＜ 0，两变量反向变化', 'r 接近 0：几乎不存在线性相关', '|r| 越接近 1，线性相关越强'] },
        { type: 'table', headers: ['相关程度', '|r| 的范围', '含义'], rows: [['强相关', '|r| ≥ 0.75', '线性关系紧密'], ['中等相关', '0.3 ≤ |r| ＜ 0.75', '线性关系一般'], ['弱相关', '|r| ＜ 0.3', '线性关系很弱']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">正相关散点图与回归直线</text><line x1="80" y1="280" x2="640" y2="280" stroke="#33536e" stroke-width="2"/><line x1="80" y1="40" x2="80" y2="280" stroke="#33536e" stroke-width="2"/><line x1="80" y1="241" x2="640" y2="79" stroke="#e05d44" stroke-width="2.5"/><text x="648" y="84" font-size="14" fill="#c0392b">ŷ = 0.9x + 1.3</text><g fill="#2b5b9e"><circle cx="173" cy="220" r="6"/><circle cx="267" cy="190" r="6"/><circle cx="360" cy="130" r="6"/><circle cx="453" cy="160" r="6"/><circle cx="547" cy="100" r="6"/></g><circle cx="360" cy="160" r="9" fill="none" stroke="#5a7a2a" stroke-width="2.5"/><text x="360" y="196" font-size="13" fill="#5a7a2a" text-anchor="middle">样本中心 (x̄, ȳ)</text><text x="80" y="302" font-size="14" fill="#33536e">x</text><text x="56" y="60" font-size="14" fill="#33536e">y</text><text x="330" y="302" font-size="14" fill="#33536e" text-anchor="middle">散点沿回归直线向上，呈正相关（r &gt; 0）</text></svg>', caption: '图1　正相关散点图：样本点大致落在回归直线附近，且回归直线经过样本中心点。' },
        { type: 'heading', text: '二、一元线性回归方程' },
        { type: 'paragraph', text: '当两变量线性相关较强时，可用一条直线近似刻画它们之间的定量关系，这条直线就是回归直线，对应的方程叫一元线性回归方程。回归方程用于由一个变量的值预测另一个变量的值。' },
        { type: 'keypoint', label: '重点·回归方程与 b̂', text: '回归方程记作 <strong>ŷ = b̂·x + â</strong>，其中 â 是截距，b̂ 是回归系数（斜率）。b̂ 的计算公式为：<br>b̂ = Σ(x_i - x̄)(y_i - ȳ) / Σ(x_i - x̄)² = [Σx_i y_i - n·x̄·ȳ] / [Σx_i² - n·x̄²]。' },
        { type: 'keypoint', label: '重点·截距 â', text: '截距由样本均值确定：<strong>â = ȳ - b̂·x̄</strong>。先用 b̂ 的公式求出斜率，再代入上式即得截距，从而写出完整回归方程。' },
        { type: 'keypoint', label: '重点·核心性质', text: '回归直线<strong>必定经过样本中心点 (x̄, ȳ)</strong>。将 x = x̄ 代入方程得 ŷ = b̂·x̄ + â = b̂·x̄ + (ȳ - b̂·x̄) = ȳ，恰好等于 ȳ，因此 (x̄, ȳ) 一定在回归直线上。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">残差均匀带状分布 ⇒ 模型拟合良好</text><line x1="80" y1="150" x2="600" y2="150" stroke="#5a7a2a" stroke-width="2"/><text x="612" y="155" font-size="14" fill="#5a7a2a">残差 = 0</text><rect x="80" y="110" width="520" height="80" fill="#dff0d0" stroke="#5a7a2a" stroke-width="1.5" stroke-dasharray="5,4"/><g fill="#2b5b9e"><circle cx="150" cy="135" r="6"/><circle cx="240" cy="170" r="6"/><circle cx="330" cy="128" r="6"/><circle cx="420" cy="165" r="6"/><circle cx="510" cy="140" r="6"/></g><text x="340" y="235" font-size="14" fill="#33536e" text-anchor="middle">残差点均匀散布在水平带状区域，无明显趋势 ⇒ 拟合良好</text><text x="340" y="262" font-size="13" fill="#33536e" text-anchor="middle">若呈曲线趋势或喇叭形（方差增大），则模型需改进</text></svg>', caption: '图2　残差图：残差点均匀落在以 0 为中心的水平带状区域内，说明回归模型拟合较好。' },
        { type: 'heading', text: '三、残差分析' },
        { type: 'paragraph', text: '拟合出回归方程后，需要检验模型是否可靠。残差分析是最常用的诊断方法：它比较真实值与预测值的差距，看差距是否随机、是否过大。' },
        { type: 'keypoint', label: '重点·残差', text: '第 i 个样本点的残差为 <strong>e_i = y_i - ŷ_i</strong>，即真实值减去回归方程的预测值。把所有残差画成散点图（横轴为自变量或预测值，纵轴为残差），可直观判断模型优劣。' },
        { type: 'keypoint', label: '重点·残差判别', text: '若残差点<strong>均匀分布在以 0 为中心的水平带状区域</strong>内，不存在明显的弯曲趋势或越来越宽（喇叭形）的现象，则认为模型拟合良好；反之，说明线性模型可能不合适，需考虑非线性或改进模型。' },
        { type: 'warn', label: '易错', text: '回归方程<strong>只能用于预测，不能作因果推断</strong>：两变量相关并不代表一个导致另一个。此外，<strong>超出自变量样本范围的外推预测要谨慎</strong>，因为真实规律在样本区间之外可能已改变，外推结果偏差往往较大。' },
        { type: 'example', label: '例题', text: '某学习小组收集 5 组成对数据 (x, y)：(1, 2)、(2, 3)、(3, 5)、(4, 4)、(5, 6)。求回归方程 ŷ = b̂x + â，并预测 x = 6 时 y 的值。<br><br><strong>解</strong>：<br>第一步，求样本均值：x̄ = (1+2+3+4+5)/5 = 3，ȳ = (2+3+5+4+6)/5 = 4。<br>第二步，计算各项和：Σx_i y_i = 1×2 + 2×3 + 3×5 + 4×4 + 5×6 = 2+6+15+16+30 = 69；Σx_i² = 1²+2²+3²+4²+5² = 1+4+9+16+25 = 55；n·x̄·ȳ = 5×3×4 = 60；n·x̄² = 5×3² = 45。<br>第三步，求 b̂：b̂ = (Σx_i y_i - n·x̄·ȳ) / (Σx_i² - n·x̄²) = (69 - 60)/(55 - 45) = 9/10 = 0.9。<br>第四步，求 â：â = ȳ - b̂·x̄ = 4 - 0.9×3 = 4 - 2.7 = 1.3。<br>故回归方程为 <strong>ŷ = 0.9x + 1.3</strong>。<br>验证：x = x̄ = 3 时 ŷ = 0.9×3 + 1.3 = 4 = ȳ，直线过样本中心 (3, 4)。<br>预测：当 x = 6 时，ŷ = 0.9×6 + 1.3 = 5.4 + 1.3 = <strong>6.7</strong>。' },
        { type: 'tip', label: '提示·计算步骤', text: '求回归方程建议按固定顺序：① 算 x̄、ȳ；② 算 Σx_i y_i、Σx_i²；③ 套 b̂ 公式；④ 用 â = ȳ - b̂·x̄ 求截距。计算 Σx_i y_i、Σx_i² 时可列小表逐项相加，避免漏项或错位。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['相关关系：正相关 r ＞ 0，负相关 r ＜ 0；|r| 越接近 1 线性相关越强', '强弱分级：|r| ≥ 0.75 强相关，0.3 ≤ |r| ＜ 0.75 中等，＜ 0.3 弱相关', '回归方程 ŷ = b̂x + â，b̂ = [Σx_i y_i - n·x̄·ȳ]/[Σx_i² - n·x̄²]，â = ȳ - b̂·x̄', '核心性质：回归直线必过样本中心 (x̄, ȳ)', '残差 e_i = y_i - ŷ_i 均匀带状分布 ⇒ 拟合良好', '易错：只能预测不能因果推断；超出样本范围外推须谨慎'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">回归系数 b̂ 的计算流程</text><rect x="60" y="70" width="200" height="60" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="160" y="100" font-size="14" fill="#2b5b9e" text-anchor="middle">求 x̄、ȳ</text><text x="160" y="120" font-size="12" fill="#33536e" text-anchor="middle">样本均值</text><rect x="300" y="70" width="200" height="60" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="400" y="100" font-size="13" fill="#2b5b9e" text-anchor="middle">算 Σx_i y_i、Σx_i²</text><text x="400" y="120" font-size="12" fill="#33536e" text-anchor="middle">各项求和</text><rect x="540" y="70" width="120" height="60" fill="#f3e6f7" stroke="#7a5aa0" stroke-width="2"/><text x="600" y="100" font-size="14" fill="#7a5aa0" text-anchor="middle">得 b̂</text><text x="600" y="120" font-size="12" fill="#33536e" text-anchor="middle">斜率</text><line x1="260" y1="100" x2="300" y2="100" stroke="#33536e" stroke-width="2"/><line x1="500" y1="100" x2="540" y2="100" stroke="#33536e" stroke-width="2"/><rect x="200" y="180" width="280" height="60" fill="#dff0d0" stroke="#5a7a2a" stroke-width="2"/><text x="340" y="205" font-size="14" fill="#5a7a2a" text-anchor="middle">â = ȳ - b̂·x̄，直线过 (x̄, ȳ)</text><text x="340" y="228" font-size="12" fill="#33536e" text-anchor="middle">再由 â 写出 ŷ = b̂x + â</text></svg>', caption: '图3　计算流程：先求均值，再算各项和，套公式得 b̂，最后由 â = ȳ - b̂·x̄ 写出回归方程。' }
      ],
      exercises: [
        { type: 'choice', question: '相关系数 r 的取值范围（无单位限制）是？', options: ['[-1, 1]', '[0, 1]', '(-∞, +∞)', '[0, +∞)'], answer: '[-1, 1]', explanation: '相关系数 r 用来度量两个变量线性相关的方向与强弱，其取值范围被限制在闭区间 [-1, 1]。当 r 等于 1 或 -1 时所有样本点恰好落在一条直线上，为完全线性相关；r 等于 0 表示不存在线性相关。因此正确的取值范围是 [-1, 1]。' },
        { type: 'choice', question: '若 |r| ≥ 0.75，表示两个变量之间？', options: ['弱相关', '中等相关', '强相关', '无相关'], answer: '强相关', explanation: '一般把线性相关程度按 |r| 的大小分级：|r| ≥ 0.75 为强相关，0.3 ≤ |r| ＜ 0.75 为中等相关，|r| ＜ 0.3 为弱相关。所以当 |r| 达到 0.75 及以上时属于强相关，说明线性关系很紧密。' },
        { type: 'choice', question: '一元线性回归直线 ŷ = b̂x + â 一定经过的点的坐标是？', options: ['(0, â)', '(x̄, ȳ)', '(0, 0)', '(1, b̂)'], answer: '(x̄, ȳ)', explanation: '回归直线的一个核心性质是必定经过样本中心点 (x̄, ȳ)。把 x = x̄ 代入方程可得 ŷ = b̂·x̄ + â = b̂·x̄ + (ȳ - b̂·x̄) = ȳ，恰好等于 ȳ，因此直线一定过样本中心点 (x̄, ȳ)，而非原点或其他点。' },
        { type: 'fill', question: '在一元线性回归中，截距估计值 â = ____。（用 x̄、ȳ、b̂ 表示）', answer: 'ȳ - b̂·x̄|ȳ - b̂x̄|ȳ-b̂·x̄', explanation: '截距估计值 â 等于样本均值 ȳ 减去斜率 b̂ 与样本均值 x̄ 的乘积，即 â = ȳ - b̂·x̄。该式由回归直线必过样本中心点 (x̄, ȳ) 直接推出，是回归方程的两个关键参数之一，与 b̂ 配合即可写出完整的回归方程。' },
        { type: 'fill', question: '利用回归方程对超出样本自变量范围的值做外推预测时，应当 ____。（填二字）', answer: '谨慎|谨慎对待', explanation: '回归方程反映的是样本取值范围内的变量关系，当自变量取值超出样本范围时，真实规律可能已发生变化，外推预测的偏差往往较大。因此超出样本范围的外推预测应当谨慎，不宜盲目相信回归方程给出的结果。' }
      ]
    },

    /* ---------------- 第12课时 独立性检验（2×2列联表与卡方） ---------------- */
    {
      id: 'zt6-u6-l2',
      name: '独立性检验（2×2列联表与卡方）',
      chapter: '概率统计复习 · 十二、独立性检验（2×2列联表与卡方）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、2×2 列联表的结构' },
        { type: 'paragraph', text: '独立性检验用于判断两个分类变量是否有关联。最常见的情形是两个变量都只取两类（如“吸烟/不吸烟”“患病/未患病”），把频数整理成 2×2 列联表，再计算卡方统计量下结论。' },
        { type: 'keypoint', label: '重点·列联表结构', text: '设行变量 X 取 0 或 1，列变量 Y 取 0 或 1，四个单元格频数分别记为 <strong>a、b、c、d</strong>：左上为 a，右上为 b，左下为 c，右下为 d。行合计为 a+b 与 c+d，列合计为 a+c 与 b+d，总计 <strong>n = a + b + c + d</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">2×2 列联表结构（标 a,b,c,d）</text><g fill="#33536e" font-size="15"><text x="300" y="70" text-anchor="middle">Y = 1</text><text x="430" y="70" text-anchor="middle">Y = 0</text><text x="120" y="120">X = 1</text><text x="120" y="200">X = 0</text><text x="55" y="160" text-anchor="middle">X\\Y</text></g><rect x="250" y="85" width="100" height="60" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="300" y="122" font-size="22" fill="#2b5b9e" text-anchor="middle">a</text><rect x="380" y="85" width="100" height="60" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="430" y="122" font-size="22" fill="#2b5b9e" text-anchor="middle">b</text><rect x="250" y="165" width="100" height="60" fill="#f3e6f7" stroke="#7a5aa0" stroke-width="2"/><text x="300" y="202" font-size="22" fill="#7a5aa0" text-anchor="middle">c</text><rect x="380" y="165" width="100" height="60" fill="#f3e6f7" stroke="#7a5aa0" stroke-width="2"/><text x="430" y="202" font-size="22" fill="#7a5aa0" text-anchor="middle">d</text><text x="520" y="118" font-size="13" fill="#33536e">行合计 a+b</text><text x="520" y="198" font-size="13" fill="#33536e">行合计 c+d</text><text x="300" y="258" font-size="13" fill="#33536e" text-anchor="middle">列合计 a+c</text><text x="430" y="258" font-size="13" fill="#33536e" text-anchor="middle">列合计 b+d</text><text x="340" y="300" font-size="14" fill="#c0392b" text-anchor="middle">总计 n = a + b + c + d</text></svg>', caption: '图1　2×2 列联表结构：四个单元格 a、b、c、d 及其行列合计，总计为 n。' },
        { type: 'table', headers: ['', '患病 (Y=1)', '未患病 (Y=0)', '合计'], rows: [['吸烟 (X=1)', '30', '20', '50'], ['不吸烟 (X=0)', '10', '40', '50'], ['合计', '40', '60', '100']] },
        { type: 'paragraph', text: '列联表把两个分类变量的交叉频数一目了然地列出，便于比较各类别内部的分布差异。若两变量独立，则各类别的占比应大致相同；若差异明显，则提示可能有关联，需要用卡方统计量定量判断。' },
        { type: 'heading', text: '二、卡方统计量 χ²' },
        { type: 'keypoint', label: '重点·χ² 公式', text: '卡方统计量公式为：<br><strong>χ² = n·(ad - bc)² / [(a+b)(c+d)(a+c)(b+d)]</strong>。<br>其中 n 为样本总数，分子含 (ad - bc) 的平方，反映对角线频数乘积的差；分母由各行列合计相乘得到。' },
        { type: 'paragraph', text: '公式中的 (ad - bc) 衡量列联表“反对角”与“主对角”频数乘积的偏离：若两变量独立，ad 与 bc 应大致相等，(ad - bc) 接近 0，χ² 也接近 0；偏离越大，χ² 越大，越倾向于认为两变量有关。' },
        { type: 'warn', label: '易错', text: 'χ² 越大，越有把握<strong>拒绝零假设 H0</strong>（越可能认为两变量有关）；但 <strong>χ² 本身不是关联强度的度量</strong>，它只判断“是否有关”，并不说明“关系有多强”。此外 χ² 随样本量 n 增大而增大，大样本下即使微弱关联也可能得到较大的 χ²。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">χ² 与临界值对照：越大越有把握拒绝 H0</text><line x1="80" y1="250" x2="620" y2="250" stroke="#33536e" stroke-width="2"/><g fill="#33536e" font-size="13" text-anchor="middle"><text x="200" y="272">2.706</text><text x="340" y="272">3.841</text><text x="480" y="272">6.635</text></g><line x1="200" y1="250" x2="200" y2="80" stroke="#4a7de0" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="340" y1="250" x2="340" y2="80" stroke="#4a7de0" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="480" y1="250" x2="480" y2="80" stroke="#4a7de0" stroke-width="1.5" stroke-dasharray="4,3"/><rect x="80" y="200" width="120" height="50" fill="#dff0d0" stroke="#5a7a2a"/><text x="140" y="230" font-size="13" fill="#5a7a2a" text-anchor="middle">无充分证据</text><rect x="200" y="150" width="140" height="100" fill="#fdeccd" stroke="#e0a800"/><text x="270" y="205" font-size="13" fill="#a06b00" text-anchor="middle">95% 把握有关</text><rect x="340" y="100" width="140" height="150" fill="#f6cfc4" stroke="#c0392b"/><text x="410" y="180" font-size="13" fill="#c0392b" text-anchor="middle">99% 把握有关</text><text x="340" y="292" font-size="13" fill="#33536e" text-anchor="middle">χ² ≥ 6.635 ⇒ 99%；χ² ≥ 3.841 ⇒ 95%；χ² ＜ 2.706 ⇒ 无充分证据</text></svg>', caption: '图2　临界值对照：χ² 越大越有把握拒绝 H0；与 3.841、6.635 比较下结论。' },
        { type: 'heading', text: '三、独立性检验的步骤' },
        { type: 'list', items: ['第一步：提出零假设 H0，认为两个分类变量相互独立', '第二步：由列联表数据代入 χ² 公式，计算统计量的值', '第三步：将 χ² 与临界值比较，按规则下结论'] },
        { type: 'keypoint', label: '重点·临界值判断', text: '比较 χ² 与临界值：<strong>χ² ≥ 6.635</strong> 时有 99% 把握认为两变量有关；<strong>χ² ≥ 3.841</strong> 时有 95% 把握认为有关；<strong>χ² ＜ 2.706</strong> 时没有充分证据认为有关（不拒绝 H0）。' },
        { type: 'table', headers: ['χ² 与临界值关系', '结论'], rows: [['χ² ≥ 6.635', '有 99% 把握认为有关'], ['χ² ≥ 3.841', '有 95% 把握认为有关'], ['χ² ＜ 2.706', '无充分证据认为有关']] },
        { type: 'paragraph', text: '零假设 H0 的标准表述为“两个分类变量相互独立（无关）”。独立性检验的本质是看是否有足够强的证据拒绝 H0：χ² 越大，实际频数与“独立”期望频数的偏差越大，拒绝 H0 的把握越高。' },
        { type: 'example', label: '例题', text: '某医院研究吸烟与患呼吸道疾病是否有关，调查得如下 2×2 列联表：<br><br>吸烟组：患病 30 人，未患病 20 人，合计 50；不吸烟组：患病 10 人，未患病 40 人，合计 50；患病合计 40，未患病合计 60，总计 100。<br>试问：是否有充分证据认为吸烟与患病有关？<br><br><strong>解</strong>：<br>由表得 n = 100，a = 30，b = 20，c = 10，d = 40。<br>ad - bc = 30×40 - 20×10 = 1200 - 200 = 1000，(ad - bc)² = 1000² = 1 000 000。<br>分母 = (a+b)(c+d)(a+c)(b+d) = 50×50×40×60 = 6 000 000。<br>χ² = n·(ad - bc)² / 分母 = 100×1 000 000 / 6 000 000 = 100/6 ≈ <strong>16.667</strong>。<br>因为 16.667 ≥ 6.635，所以<strong>有 99% 的把握认为吸烟与患呼吸道疾病有关</strong>，即拒绝零假设 H0。' },
        { type: 'tip', label: '提示·计算技巧', text: '计算 χ² 时先用小表写清 a、b、c、d 与各行、列合计，再算 ad - bc 并平方，最后整体除以四组合计之积。注意分子要乘 n，且只取 (ad - bc) 的平方项，不要误写成 ad + bc。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['列联表：单元格 a、b、c、d，行合计 a+b、c+d，列合计 a+c、b+d，总计 n', '卡方公式 χ² = n(ad-bc)²/[(a+b)(c+d)(a+c)(b+d)]', '步骤：提 H0 → 算 χ² → 比临界值', 'χ² ≥ 6.635 有 99% 把握，≥ 3.841 有 95%，＜ 2.706 无充分证据', 'χ² 越大越有把握拒绝 H0，但 χ² 不度量关联强度', '结论只判断“是否有关”，不说明因果关系或关系强弱'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">独立性检验三步流程</text><rect x="60" y="80" width="180" height="70" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="150" y="112" font-size="14" fill="#2b5b9e" text-anchor="middle">① 提 H0：两变量独立</text><text x="150" y="136" font-size="12" fill="#33536e" text-anchor="middle">零假设</text><rect x="270" y="80" width="160" height="70" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="350" y="112" font-size="14" fill="#2b5b9e" text-anchor="middle">② 算 χ²</text><text x="350" y="136" font-size="12" fill="#33536e" text-anchor="middle">代入列联表</text><rect x="460" y="80" width="160" height="70" fill="#f3e6f7" stroke="#7a5aa0" stroke-width="2"/><text x="540" y="112" font-size="14" fill="#7a5aa0" text-anchor="middle">③ 比临界值</text><text x="540" y="136" font-size="12" fill="#33536e" text-anchor="middle">下结论</text><line x1="240" y1="115" x2="270" y2="115" stroke="#33536e" stroke-width="2"/><line x1="430" y1="115" x2="460" y2="115" stroke="#33536e" stroke-width="2"/><text x="340" y="200" font-size="14" fill="#c0392b" text-anchor="middle">χ² 越大 ⇒ 越有把握拒绝 H0（越可能有关）</text><text x="340" y="230" font-size="13" fill="#33536e" text-anchor="middle">注意：χ² 只判断“是否有关”，不度量“关系多强”</text></svg>', caption: '图3　独立性检验三步流程：提零假设、算 χ²、比临界值下结论。' },
        { type: 'keypoint', label: '重点·结论规范表述', text: '下结论时应写清把握程度与方向：当 χ² ≥ 6.635 时，表述为“有 99% 的把握认为两个分类变量有关”；当 χ² ＜ 2.706 时，表述为“没有充分证据认为两个分类变量有关”。注意要区分“有关”与“因果”，独立性检验只说明关联存在与否。' }
      ],
      exercises: [
        { type: 'choice', question: '2×2 列联表中，卡方统计量 χ² 的公式是？', options: ['n(ad-bc)² / ((a+b)(c+d)(a+c)(b+d))', 'n(ad+bc)² / ((a+b)(c+d)(a+c)(b+d))', '(ad-bc)² / n', 'n·(a+b)(c+d) / ((a+c)(b+d))'], answer: 'n(ad-bc)² / ((a+b)(c+d)(a+c)(b+d))', explanation: '2×2 列联表的卡方统计量公式为 χ² = n(ad-bc)² / [(a+b)(c+d)(a+c)(b+d)]，其中 n 为样本总数，a、b、c、d 为四个单元格的频数。分母由各行合计与列合计相乘得到，分子是 n 乘以 (ad-bc) 的平方，反映对角线频数乘积的偏离程度。' },
        { type: 'choice', question: '由列联表算得 χ² = 5.0，则恰当的结论是？', options: ['有 99% 把握认为有关', '有 95% 把握认为有关', '无充分证据认为有关', '两变量一定独立'], answer: '有 95% 把握认为有关', explanation: '临界值判定规则为：χ² ≥ 6.635 有 99% 把握认为有关；χ² ≥ 3.841 有 95% 把握认为有关；χ² ＜ 2.706 则无充分证据。本题 χ² = 5.0，介于 3.841 与 6.635 之间，故结论为有 95% 把握认为两个分类变量有关，而不是 99% 或独立。' },
        { type: 'choice', question: '关于卡方统计量 χ²，正确的说法是？', options: ['χ² 越大越有把握拒绝 H0', 'χ² 越小越有把握拒绝 H0', 'χ² 度量两个变量的关联强度', 'χ² 与样本量无关'], answer: 'χ² 越大越有把握拒绝 H0', explanation: 'χ² 越大，说明实际频数与“两变量独立”假设下的期望频数偏差越大，也就越有把握拒绝零假设 H0，认为两变量有关。但 χ² 只用于判断“是否有关”，并不度量关联的强弱程度，且它随样本量 n 增大而增大，并非与样本量无关。' },
        { type: 'fill', question: '独立性检验中，零假设 H0 通常表述为：两个分类变量 ____。（填四字）', answer: '独立|相互独立', explanation: '独立性检验的零假设 H0 一般设为两个分类变量相互独立，即变量之间无关联。检验的目的正是看是否有足够证据拒绝 H0；若 χ² 较大则拒绝 H0，认为有关；否则不拒绝，认为无充分证据。' },
        { type: 'fill', question: '当 χ² ≥ 6.635 时，我们有 ____ 的把握认为两个分类变量有关。（填百分比）', answer: '99%|99%', explanation: '临界值表中，χ² ≥ 6.635 对应显著性水平 0.01，即有 99% 的把握认为两个分类变量有关；χ² ≥ 3.841 对应 95% 的把握。因此 χ² 达到 6.635 及以上时，结论的把握程度为 99%。' }
      ]
    }

  );
})();
