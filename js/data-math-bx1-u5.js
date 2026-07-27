/* ============================================================
 * 高一数学 · 必修 第一册 · 第二章 一元二次函数、方程和不等式
 * 第8课时：二次函数与一元二次方程、不等式（人教A版 §2.3）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;
  v.points.push(

    /* ---------------- 第8课时 二次函数与一元二次方程、不等式 ---------------- */
    {
      id: 'bx1-u5-l1',
      name: '二次函数与一元二次方程、不等式',
      chapter: '第二章 一元二次函数、方程和不等式 · 2.3',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、二次函数 y = ax² + bx + c（a ≠ 0）' },
        { type: 'paragraph', text: '二次函数是最基本的非线性函数，它的图象是抛物线。本章“三个二次”（二次函数、二次方程、二次不等式）紧密关联，图象是把它们串起来的主线。' },
        { type: 'keypoint', label: '重点·二次函数要素', text: '一般式 <strong>y = ax² + bx + c（a ≠ 0）</strong>：<br>① <strong>a</strong> 决定开口方向：a &gt; 0 开口向上，a &lt; 0 开口向下；<br>② <strong>对称轴</strong>：直线 <strong>x = −b/(2a)</strong>；<br>③ <strong>顶点坐标</strong>：(−b/(2a), (4ac − b²)/(4a))；<br>④ 与 y 轴交点为 (0, c)。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><path d="M120 200 Q340 40 560 200" fill="none" stroke="#2b5b9e" stroke-width="3"/><line x1="340" y1="30" x2="340" y2="210" stroke="#999" stroke-dasharray="5,4"/><circle cx="340" cy="120" r="6" fill="#e05d44"/><text x="340" y="110" font-size="14" fill="#c0392b" text-anchor="middle">顶点</text><text x="350" y="215" font-size="14" fill="#33536e">对称轴 x=−b/2a</text><text x="340" y="40" font-size="16" fill="#2b5b9e" font-weight="bold" text-anchor="middle">a &gt; 0：开口向上，顶点为最低点</text></svg>', caption: '图1　二次函数抛物线：a 决定开口，顶点与对称轴由 −b/2a 确定（图中为 a&gt;0）。' },
        { type: 'list', items: ['a &gt; 0：开口向上，有最小值（顶点）', 'a &lt; 0：开口向下，有最大值（顶点）', '对称轴 x = −b/(2a)，图象关于它对称', 'c 是函数与 y 轴交点的纵坐标'] },
        { type: 'heading', text: '二、一元二次方程 ax² + bx + c = 0' },
        { type: 'keypoint', label: '重点·求根公式与判别式', text: '方程 <strong>ax² + bx + c = 0（a ≠ 0）</strong> 的根可由<strong>求根公式</strong>给出：<br>x = (−b ± √(b² − 4ac)) / (2a)。<br>其中 <strong>Δ = b² − 4ac</strong> 叫<strong>判别式</strong>，决定根的情况：<br>Δ &gt; 0 有两个不等实根；Δ = 0 有两个相等实根；Δ &lt; 0 无实根（有共轭虚根，高中暂不深入）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 190" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="190" fill="#eef4fc"/><rect x="60" y="60" width="160" height="60" rx="8" fill="#2b5b9e"/><text x="140" y="92" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">Δ &gt; 0：两不等根</text><rect x="260" y="60" width="160" height="60" rx="8" fill="#4a7de0"/><text x="340" y="92" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">Δ = 0：一重根</text><rect x="460" y="60" width="160" height="60" rx="8" fill="#e05d44"/><text x="540" y="92" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">Δ &lt; 0：无实根</text><text x="340" y="160" font-size="14" fill="#33536e" text-anchor="middle">Δ 的符号决定根的个数</text></svg>', caption: '图2　判别式 Δ 与方程实根个数的对应关系。' },
        { type: 'example', label: '例题1', text: '判断方程 2x² − 4x + 1 = 0 根的情况并求根。<br><br><strong>解</strong>：a = 2，b = −4，c = 1，Δ = (−4)² − 4×2×1 = 16 − 8 = 8 &gt; 0，故有两个不等实根。由求根公式：x = (4 ± √8)/4 = (4 ± 2√2)/4 = (2 ± √2)/2。' },
        { type: 'heading', text: '三、一元二次不等式的解法' },
        { type: 'keypoint', label: '重点·数形结合', text: '解不等式 ax² + bx + c &gt; 0（或 &lt; 0），核心口诀是<strong>“先化正、再求根、看图象、定区间”</strong>：<br>① 若 a &lt; 0，两边同乘 −1 化为 a &gt; 0（记得变号）；<br>② 求对应方程的两根 x₁、x₂（x₁ ≤ x₂）；<br>③ 结合开口向上的抛物线，<strong>&gt; 0 取两根之外（x &lt; x₁ 或 x &gt; x₂），&lt; 0 取两根之间（x₁ &lt; x &lt; x₂）</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><path d="M120 190 Q340 30 560 190" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="240" cy="135" r="6" fill="#e05d44"/><circle cx="440" cy="135" r="6" fill="#e05d44"/><text x="240" y="170" font-size="14" fill="#c0392b" text-anchor="middle">x₁</text><text x="440" y="170" font-size="14" fill="#c0392b" text-anchor="middle">x₂</text><text x="160" y="60" font-size="14" fill="#5a7a2a" text-anchor="middle">&gt;0：取两侧</text><text x="340" y="90" font-size="14" fill="#5a7a2a" text-anchor="middle">&lt;0：取中间</text><text x="340" y="210" font-size="14" fill="#33536e" text-anchor="middle">a&gt;0 时：大于取两边，小于取中间</text></svg>', caption: '图3　a &gt; 0 时一元二次不等式解集：“大于取两根之外，小于取两根之间”。' },
        { type: 'example', label: '例题2', text: '解不等式 x² − 3x + 2 &lt; 0。<br><br><strong>解</strong>：a = 1 &gt; 0，对应方程 x² − 3x + 2 = 0 的两根为 x₁ = 1，x₂ = 2。开口向上，&lt; 0 取两根之间，故解集为 <strong>{x | 1 &lt; x &lt; 2}</strong>（或写作区间 (1, 2)）。' },
        { type: 'heading', text: '四、三个“二次”的关系' },
        { type: 'table', headers: ['对象', '表达', '关键信息', '相互对应'], rows: [['二次函数', 'y = ax²+bx+c', '抛物线图象', '与 x 轴交点'], ['二次方程', 'ax²+bx+c = 0', '根 x₁, x₂', '即交点横坐标'], ['二次不等式', 'ax²+bx+c &gt; 0 / &lt; 0', '解集区间', '由图象在 x 轴上/下方决定']] },
        { type: 'warn', label: '易错', text: '解不等式高频失误：①<strong>a &lt; 0 未先化正</strong>就照“大于取两边”，结果全反；②<strong>端点开闭搞错</strong>，含等号（≥、≤）取闭区间，严格不等号取开区间；③<strong>Δ &lt; 0 时仍写根</strong>，此时无实根，a&gt;0 时 &gt;0 解集为 R、&lt;0 解集为 ∅。务必先看 Δ。' },
        { type: 'tip', label: '记忆', text: '解二次不等式“三步走”：<strong>一化正、二求根、三看图象定区间</strong>。牢记口诀“<strong>大于取两边，小于取中间</strong>”（前提是 a &gt; 0）。Δ &lt; 0 则图象不与 x 轴相交，直接判断恒正或恒负。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['二次函数：a 定开口，对称轴 x=−b/2a', '判别式 Δ=b²−4ac 决定实根个数', '解集由抛物线在 x 轴上/下方决定', '大于取两边，小于取中间（a&gt;0）', '先化正、再求根、最后定区间'] },
        { type: 'reading', text: '“三个二次”的统一视角是<strong>数形结合</strong>：同一个二次函数 y = ax²+bx+c，令 y = 0 得到方程（求交点横坐标），令 y &gt; 0 或 y &lt; 0 得到不等式（看图象在 x 轴上方还是下方）。掌握了这条主线，二次方程与不等式就不再是孤立的两类题，而是同一幅图象上的不同提问。' }
      ],
      exercises: [
        { type: 'choice', question: '不等式 x² − 3x + 2 < 0 的解集为？', options: ['(−∞,1)∪(2,+∞)', '(1,2)', '(−∞,1]∪[2,+∞)', '[1,2]'], answer: '(1,2)', explanation: '对应方程 x²−3x+2=0 的根为 x=1、x=2，a=1>0 开口向上，<0 取两根之间，故解集为 (1,2)。严格小于不含端点，用开区间。' },
        { type: 'fill', question: '一元二次方程 ax²+bx+c=0 的判别式 Δ = ____，当 Δ ____ 0 时无实根。', answer: 'b²−4ac|4ac', explanation: '判别式 Δ = b² − 4ac；当 Δ < 0 时方程无实根（图象与 x 轴无交点）。故第一空填 b²−4ac，第二空填“<”。' },
        { type: 'choice', question: '二次不等式 −x² + 4 > 0 的解集，正确解法是？', options: ['直接得 (−∞,−2)∪(2,+∞)', '化正为 x²−4<0 得 (−2,2)', '无解', '(−2,2) 但端点取闭'], answer: '化正为 x²−4<0 得 (−2,2)', explanation: '原不等式 a=−1<0，先两边乘 −1 化为 x²−4<0（变号），根为 ±2，开口向上 <0 取中间得 (−2,2)。不化正直接套“大于取两边”会得错误结果。' },
        { type: 'fill', question: '二次函数 y = 2x² − 4x + 1 的对称轴方程为 x = ____。', answer: '1', explanation: '对称轴 x = −b/(2a) = −(−4)/(2×2) = 4/4 = 1。故填 1。' },
        { type: 'choice', question: '关于 x 的不等式 ax²+bx+c > 0（a>0）解集为 R，则必满足？', options: ['Δ > 0', 'Δ = 0', 'Δ < 0', '与 Δ 无关'], answer: 'Δ < 0', explanation: 'a>0 开口向上，要恒大于 0（解集为全体实数），图象必须始终在 x 轴上方、不与 x 轴相交，即对应方程无实根，故 Δ < 0。' }
      ]
    }

  );
})();
