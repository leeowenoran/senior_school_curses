/* ============================================================
 * 高考复习专题 · 函数与导数 · 第二单元 奇偶性 / 周期性 / 对称性
 * 第1课时：函数的奇偶性 + 周期性
 * 第2课时：函数的对称性与性质综合应用
 * 数据注入：math.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt1');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 函数的奇偶性 + 周期性 ---------------- */
    {
      id: 'zt1-u2-l1',
      name: '函数的奇偶性与周期性',
      chapter: '函数与导数复习 · 二 2.4 奇偶性 / 2.5 周期性',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、奇偶性的定义' },
        { type: 'paragraph', text: '奇偶性是函数的重要对称性质，它描述了函数图像关于原点或 y 轴的对称规律。研究函数奇偶性，既能简化函数图像的画法，也能在解不等式、求值时大幅减少计算量，是高考函数板块的高频考点。' },
        { type: 'keypoint', label: '重点·偶函数', text: '设函数 f(x) 的定义域关于原点对称，若对定义域内<strong>任意</strong> x 都有 <strong>f(-x) = f(x)</strong>，则称 f(x) 为<strong>偶函数</strong>。偶函数的图像关于 <strong>y 轴（直线 x = 0）</strong>对称。例如 f(x) = x²、f(x) = cos x 都是偶函数。' },
        { type: 'keypoint', label: '重点·奇函数', text: '设函数 f(x) 的定义域关于原点对称，若对定义域内<strong>任意</strong> x 都有 <strong>f(-x) = -f(x)</strong>，则称 f(x) 为<strong>奇函数</strong>。奇函数的图像关于 <strong>坐标原点 (0, 0)</strong> 对称。例如 f(x) = x³、f(x) = sin x 都是奇函数。' },
        { type: 'paragraph', text: '判断奇偶性之前，必须首先确认定义域是否关于原点对称：即若 x 在定义域内，则 -x 也必须在定义域内。若定义域不对称，则该函数既不是奇函数也不是偶函数。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><line x1="40" y1="130" x2="640" y2="130" stroke="#33536e" stroke-width="2"/><line x1="340" y1="20" x2="340" y2="240" stroke="#33536e" stroke-width="2"/><path d="M 180 130 Q 340 30 500 130" fill="none" stroke="#4a7de0" stroke-width="3"/><path d="M 180 130 Q 340 230 500 130" fill="none" stroke="#4a7de0" stroke-width="3"/><circle cx="260" cy="100" r="6" fill="#e05d44"/><circle cx="420" cy="100" r="6" fill="#e05d44"/><text x="338" y="18" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">偶函数</text><text x="350" y="150" font-size="14" fill="#33536e">x = 0 为对称轴</text><text x="200" y="92" font-size="13" fill="#c0392b">(-a, f(a))</text><text x="430" y="92" font-size="13" fill="#c0392b">(a, f(a))</text></svg>', caption: '图1　偶函数图像关于 y 轴（直线 x=0）对称，左右等距点高度相等。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><line x1="40" y1="130" x2="640" y2="130" stroke="#33536e" stroke-width="2"/><line x1="340" y1="20" x2="340" y2="240" stroke="#33536e" stroke-width="2"/><path d="M 180 205 Q 340 130 500 55" fill="none" stroke="#7a5aa0" stroke-width="3"/><circle cx="420" cy="100" r="6" fill="#e05d44"/><circle cx="260" cy="160" r="6" fill="#e05d44"/><text x="338" y="18" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">奇函数</text><text x="350" y="150" font-size="14" fill="#33536e">关于原点 (0,0) 对称</text><text x="430" y="92" font-size="13" fill="#c0392b">(a, f(a))</text><text x="200" y="178" font-size="13" fill="#c0392b">(-a, -f(a))</text></svg>', caption: '图2　奇函数图像关于原点中心对称，对称点的函数值互为相反数。' },
        { type: 'heading', text: '二、奇偶性的判定与运算性质' },
        { type: 'keypoint', label: '重点·判定前提', text: '判定奇偶性的<strong>第一步永远是检验定义域</strong>：定义域必须关于原点对称，否则函数<strong>非奇非偶</strong>。第二步再代入 -x 计算 f(-x)，与 f(x)、-f(x) 比较得出结论。不要跳过定义域直接代值。' },
        { type: 'list', items: ['第一步：写出定义域，检验是否关于原点对称', '第二步：计算 f(-x)，化简后与 f(x) 比较', '若 f(-x) = f(x) 则为偶函数；若 f(-x) = -f(x) 则为奇函数', '若两者都不满足，则函数非奇非偶'] },
        { type: 'keypoint', label: '重点·运算性质', text: '在公共定义域内，奇偶函数的四则运算满足：<strong>偶 ± 偶 = 偶，奇 ± 奇 = 奇，偶 × 偶 = 偶，奇 × 奇 = 偶，偶 × 奇 = 奇</strong>。复合函数 f(g(x)) 的奇偶性由内外层共同决定：同奇为奇，其余多为偶。' },
        { type: 'example', label: '例题1', text: '判断下列函数的奇偶性：<br>（1）f(x) = x³ + x；（2）g(x) = x² + 1。<br><br><strong>解</strong>：两函数定义域均为 R，关于原点对称。<br>（1）f(-x) = (-x)³ + (-x) = -x³ - x = -(x³ + x) = -f(x)，故 f(x) 为<strong>奇函数</strong>。<br>（2）g(-x) = (-x)² + 1 = x² + 1 = g(x)，故 g(x) 为<strong>偶函数</strong>。也可由“奇 + 奇 = 奇”“偶 + 偶 = 偶”直接判定。' },
        { type: 'warn', label: '易错', text: '求含参数的函数奇偶性时，<strong>切勿遗漏定义域检验</strong>。例如 f(x) = x²（x ∈ [−1, 2)）的定义域不对称，虽满足 f(-x)=f(x) 的形式，仍<strong>非奇非偶</strong>。只有当 x 与 -x 同时落在定义域内，代值比较才有意义。' },
        { type: 'tip', label: '提示', text: '若奇函数 f(x) 在 x = 0 处有定义，则必有 <strong>f(0) = 0</strong>。因为 f(0) = f(-0) = -f(0)，推出 2f(0) = 0。这一结论常用于求参数或快速判断，但<strong>仅当 0 在定义域内才成立</strong>。' },
        { type: 'heading', text: '三、函数的周期性' },
        { type: 'keypoint', label: '重点·周期定义', text: '若存在<strong>非零常数 T</strong>，使得对定义域内任意 x，都有 <strong>f(x + T) = f(x)</strong> 恒成立，则称 f(x) 为<strong>周期函数</strong>，T 称为它的一个周期。其中<strong>最小正周期</strong>是指所有正周期中最小的那个（未必存在）。' },
        { type: 'list', items: ['sin x、cos x 的最小正周期为 2π；tan x 的最小正周期为 π', '若 f(x + a) = -f(x)，则周期 T = 2a', '若 f(x + a) = 1/f(x)，则周期 T = 2a', '若 f(x + a) = f(x - a)，则周期 T = 2a'] },
        { type: 'keypoint', label: '重点·三类递推周期', text: '由递推式求周期的高考常用结论：<br>① <strong>f(x + a) = -f(x)</strong> ⇒ f(x + 2a) = -f(x + a) = f(x)，周期 <strong>2a</strong>；<br>② <strong>f(x + a) = 1/f(x)</strong> ⇒ f(x + 2a) = 1/f(x + a) = f(x)，周期 <strong>2a</strong>；<br>③ <strong>f(x + a) = f(x - a)</strong> ⇒ 令 t = x - a 得 f(t + 2a) = f(t)，周期 <strong>2a</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><line x1="40" y1="120" x2="660" y2="120" stroke="#33536e" stroke-width="2"/><path d="M 40 120 Q 90 60 140 120 T 240 120 T 340 120 T 440 120 T 540 120 T 640 120" fill="none" stroke="#4a7de0" stroke-width="3"/><line x1="240" y1="92" x2="240" y2="150" stroke="#5a7a2a" stroke-width="2" stroke-dasharray="4 3"/><line x1="440" y1="92" x2="440" y2="150" stroke="#5a7a2a" stroke-width="2" stroke-dasharray="4 3"/><text x="338" y="20" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">周期函数</text><text x="340" y="178" font-size="14" fill="#5a7a2a" text-anchor="middle">相邻重复间隔 T = 200，函数值每 T 重复一次</text></svg>', caption: '图3　周期函数图像呈规律重复，任取相邻两个同相位点间隔即为周期 T。' },
        { type: 'example', label: '例题2', text: '已知 f(x) 是周期为 2 的函数，且 f(1) = 3，求 f(5) 与 f(9)。<br><br><strong>解</strong>：由周期 2 知 f(x + 2) = f(x) 对任意 x 成立。<br>f(5) = f(3 + 2) = f(3) = f(1 + 2) = f(1) = 3；<br>f(9) = f(7 + 2) = f(7) = f(5 + 2) = f(5) = 3。<br>也可直接看 5 = 1 + 2×2、9 = 1 + 2×4，均相差 2 的整数倍，故 f(5) = f(9) = f(1) = 3。' },
        { type: 'example', label: '例题3', text: '设 f(x) 定义域为 R，令 g(x) = f(x) + f(-x)，h(x) = f(x) - f(-x)，证明 g(x) 为偶函数、h(x) 为奇函数。<br><br><strong>证明</strong>：g(-x) = f(-x) + f(x) = g(x)，故 g 为偶函数；<br>h(-x) = f(-x) - f(x) = -(f(x) - f(-x)) = -h(x)，故 h 为奇函数。<br>这说明<strong>任意函数都可分解为一个偶函数与一个奇函数之和</strong>：f(x) = g(x)/2 + h(x)/2。' },
        { type: 'warn', label: '易错', text: '周期函数的周期<strong>不唯一</strong>：若 T 是周期，则任意 kT（k 为非零整数）也是周期。谈论“周期”时可写任一周期；只有说“最小正周期”时才唯一（且未必存在，如常数函数没有最小正周期）。答题时要看清题目问的是“一个周期”还是“最小正周期”。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['偶函数 f(-x)=f(x)，图像关于 y 轴对称；奇函数 f(-x)=-f(x)，关于原点中心对称', '判定奇偶性先验定义域是否关于原点对称，再比较 f(-x)', '奇函数在 x=0 有定义则 f(0)=0', '运算：偶±偶=偶，奇±奇=奇，奇×奇=偶，偶×奇=奇', '周期：存在非零 T 使 f(x+T)=f(x)；三类递推均推出周期 2a', '高考常用：sin/cos 周期 2π，tan 周期 π；f(x+a)=-f(x) 等 ⇒ 周期 2a'] },
        { type: 'table', headers: ['函数性质', '代数特征', '图像特征', '典型例子'], rows: [['偶函数', 'f(-x) = f(x)', '关于 y 轴对称', 'x²、cos x'], ['奇函数', 'f(-x) = -f(x)', '关于原点对称', 'x³、sin x'], ['周期函数', 'f(x+T) = f(x)', '波形规律重复', 'sin x（T=2π）']] }
      ],
      exercises: [
        { type: 'choice', question: '下列函数中，是偶函数的是？', options: ['f(x) = x³', 'f(x) = x² + 1', 'f(x) = x + 1', 'f(x) = 1/x'], answer: 'f(x) = x² + 1', explanation: '判断奇偶性需先看定义域是否关于原点对称，再看 f(-x) 与 f(x) 的关系。f(x)=x²+1 的定义域为 R，且 f(-x)=(-x)²+1=x²+1=f(x)，满足偶函数定义。f(x)=x³ 为奇函数，f(x)=x+1 非奇非偶，f(x)=1/x 为奇函数。故选 f(x)=x²+1。' },
        { type: 'choice', question: '若 f(x) 为奇函数且在 x=0 处有定义，则 f(0) 等于？', options: ['1', '-1', '0', '不确定'], answer: '0', explanation: '奇函数满足 f(-x)=-f(x) 对定义域内任意 x 成立。当 x=0 在定义域内时，代入得 f(0)=-f(0)，即 2f(0)=0，解得 f(0)=0。因此奇函数若在原点有定义，其函数值必为 0。' },
        { type: 'choice', question: '已知函数 f(x) 满足 f(x+2)=f(x) 对一切 x 成立，则其一个周期为？', options: ['1', '2', 'π', '4'], answer: '2', explanation: '由 f(x+2)=f(x) 可知，存在非零常数 2 使得函数值每间隔 2 重复一次，因此 2 是 f(x) 的一个周期（最小正周期亦为 2）。选项 1、π、4 均不满足递推关系。故选 2。' },
        { type: 'fill', question: '函数 f(x)=x³+x 是______函数（填“奇”“偶”或“非奇非偶”）。', answer: '奇', explanation: 'f(x)=x³+x 的定义域为 R，关于原点对称。计算 f(-x)=(-x)³+(-x)=-x³-x=-(x³+x)=-f(x)，满足奇函数定义，故该函数为奇函数。也可由“奇+奇=奇”直接判断：x³ 与 x 均为奇函数，其和仍为奇函数。' },
        { type: 'fill', question: '已知 f(x) 是周期为 2 的函数，且 f(1)=3，则 f(5)=____。', answer: '3', explanation: '周期为 2 表示 f(x+2)=f(x) 对任意 x 成立。于是 f(5)=f(3+2)=f(3)=f(1+2)=f(1)=3。也可看作 5 与 1 相差 2 的整数倍（5=1+2×2），故函数值相等，得 f(5)=3。' }
      ]
    },

    /* ---------------- 第2课时 函数的对称性与性质综合应用 ---------------- */
    {
      id: 'zt1-u2-l2',
      name: '函数的对称性与性质综合应用',
      chapter: '函数与导数复习 · 二 2.6 对称性与综合',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、函数的轴对称' },
        { type: 'paragraph', text: '除了奇偶性这种特殊的对称，一般函数还可能关于直线 x = a 轴对称，或关于某点中心对称。掌握对称的特征代数式，可以绕过画图直接推导函数值与周期，是函数综合题的核心工具。' },
        { type: 'keypoint', label: '重点·轴对称特征式', text: '函数 f(x) 满足 <strong>f(a + x) = f(a - x)</strong>（等价于 f(x) = f(2a - x)）对任意 x 成立，则图像关于<strong>直线 x = a</strong> 轴对称。<br>更一般地，若 <strong>f(a + x) = f(b - x)</strong>，则图像关于<strong>直线 x = (a + b)/2</strong> 轴对称。当 a = b 时即为关于 x = a 对称。' },
        { type: 'example', label: '例题1', text: '已知函数 f(x) 满足 f(1 + x) = f(1 - x) 对一切 x 成立，判断其对称轴，并求 f(0) 与 f(2) 的关系。<br><br><strong>解</strong>：由 f(1 + x) = f(1 - x) 知图像关于直线 <strong>x = 1</strong> 轴对称。<br>令 x = 1，得 f(2) = f(0)；令 x = t，得 f(1 + t) = f(1 - t)，即关于直线 x = 1 左右等距的函数值相等。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><line x1="40" y1="130" x2="640" y2="130" stroke="#33536e" stroke-width="2"/><line x1="200" y1="30" x2="200" y2="230" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4"/><line x1="440" y1="30" x2="440" y2="230" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4"/><path d="M 80 130 Q 140 70 200 130 Q 260 190 320 130 Q 380 70 440 130 Q 500 190 560 130" fill="none" stroke="#4a7de0" stroke-width="3"/><text x="338" y="20" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">双轴对称推出周期</text><text x="200" y="248" font-size="13" fill="#c0392b" text-anchor="middle">x = 1</text><text x="440" y="248" font-size="13" fill="#c0392b" text-anchor="middle">x = 3</text><text x="340" y="56" font-size="13" fill="#33536e" text-anchor="middle">周期 T = 2 × |3 − 1| = 4</text></svg>', caption: '图1　同时关于 x=1 与 x=3 轴对称，可推出函数以 4 为周期重复。' },
        { type: 'heading', text: '二、函数的中心对称' },
        { type: 'keypoint', label: '重点·中心对称特征式', text: '函数 f(x) 满足 <strong>f(a + x) + f(a - x) = 2b</strong>（等价于 f(x) + f(2a - x) = 2b）对任意 x 成立，则图像关于<strong>点 (a, b)</strong> 中心对称。<br>特殊地，<strong>奇函数关于原点 (0, 0) 中心对称</strong>，对应 a = 0、b = 0 的情形。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><line x1="40" y1="130" x2="640" y2="130" stroke="#33536e" stroke-width="2"/><line x1="340" y1="20" x2="340" y2="240" stroke="#33536e" stroke-width="2"/><circle cx="340" cy="130" r="6" fill="#5a7a2a"/><path d="M 200 180 Q 270 130 300 110" fill="none" stroke="#4a7de0" stroke-width="3"/><path d="M 480 80 Q 410 130 380 150" fill="none" stroke="#7a5aa0" stroke-width="3"/><circle cx="300" cy="110" r="5" fill="#e05d44"/><circle cx="380" cy="150" r="5" fill="#e05d44"/><text x="338" y="20" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">中心对称</text><text x="340" y="156" font-size="13" fill="#5a7a2a" text-anchor="middle">对称中心 (a, b)</text><text x="280" y="100" font-size="12" fill="#c0392b">P</text><text x="392" y="165" font-size="12" fill="#c0392b">P′</text></svg>', caption: '图2　关于点 (a,b) 中心对称：任一点 P 的对称点 P′ 也在图像上，且中点为 (a,b)。' },
        { type: 'example', label: '例题2', text: '证明：奇函数 f(x) 的图像关于原点 (0, 0) 中心对称。<br><br><strong>证明</strong>：奇函数满足 f(-x) = -f(x)，即 f(0 + x) + f(0 - x) = f(x) + f(-x) = f(x) - f(x) = 0 = 2×0。<br>对照中心对称特征式 f(a+x)+f(a-x)=2b，取 a = 0、b = 0 成立，故图像关于<strong>原点 (0, 0)</strong> 中心对称。' },
        { type: 'tip', label: '提示', text: '奇偶性其实是一类特殊的对称性：<strong>偶函数 ⇔ 关于 y 轴（x=0）轴对称</strong>；<strong>奇函数 ⇔ 关于原点 (0,0) 中心对称</strong>。把奇偶问题统一到“对称”框架下，有助于与周期、单调等性质联立。' },
        { type: 'heading', text: '三、对称性与周期的关系' },
        { type: 'keypoint', label: '重点·双轴推周期', text: '若 f(x) 同时关于<strong>两条平行纵轴 x = a 与 x = b（a ≠ b）</strong>轴对称，则 f(x) 是周期函数，且<strong>周期 T = 2|b - a|</strong>。<br>推导：由 f(x)=f(2a-x) 与 f(x)=f(2b-x) 联立可得 f(x+2(b-a))=f(x)。' },
        { type: 'keypoint', label: '重点·中心加轴推周期', text: '若 f(x) 关于<strong>点 (a, 0) 中心对称</strong>且关于<strong>直线 x = b 轴对称</strong>（a ≠ b），则 f(x) 是周期函数，且<strong>周期 T = 4|b - a|</strong>。<br>推导：中心对称 ⇒ f(a+x)=-f(a-x)，轴对称 ⇒ f(b+x)=f(b-x)，联立递推可得 f(x+4(b-a))=f(x)。' },
        { type: 'list', items: ['双轴（x=a、x=b）轴对称 ⇒ 周期 2|b-a|', '双中心 ((a,0)、(b,0)) 中心对称 ⇒ 周期 2|b-a|', '中心 (a,0) + 轴 x=b ⇒ 周期 4|b-a|', '轴 x=a + 中心 (b,0) ⇒ 周期 4|b-a|', '记忆口诀：两轴两心周期减半距，轴心搭配周期四倍距'] },
        { type: 'warn', label: '易错', text: '使用对称推周期结论时，<strong>务必确认 a ≠ b</strong>。若两条对称轴重合（a = b），推不出周期；且这些结论要求对称关系对<strong>定义域内任意 x</strong> 恒成立，仅凭个别点满足不能下结论。另外周期取绝对值，与 a、b 大小顺序无关。' },
        { type: 'heading', text: '四、奇偶性与单调性综合' },
        { type: 'keypoint', label: '重点·奇函数单调对称', text: '若奇函数 f(x) 在 <strong>(0, +∞)</strong> 上单调递增，则由关于原点中心对称可知，它在 <strong>(-∞, 0)</strong> 上也<strong>单调递增</strong>，且 <strong>f(0) = 0</strong>。因此奇函数在对称区间上单调性<strong>一致</strong>；偶函数则相反，对称区间上单调性相反。' },
        { type: 'list', items: ['先看定义域与对称性（奇偶 / 轴对称 / 中心对称）', '再利用周期性把大自变量化到已知区间', '结合单调性比较函数值大小或解不等式', '奇函数过原点、偶函数可先算 x≥0 再对称得到 x<0', '联立“奇偶 + 周期 + 单调”是高考函数大题的常考组合'] },
        { type: 'example', label: '例题3', text: '已知 f(x) 是奇函数且周期为 2，求 f(1) + f(2) + … + f(2024) 的值。<br><br><strong>解</strong>：奇函数 ⇒ f(0) = 0。<br>周期 2 ⇒ f(2) = f(0) = 0。<br>又 f(1) = f(1 - 2) = f(-1) = -f(1) ⇒ 2f(1) = 0 ⇒ f(1) = 0，从而 f(3) = f(1) = 0 等。<br>故对一切整数 n 都有 f(n) = 0，原式 = <strong>0</strong>。' },
        { type: 'tip', label: '策略', text: '遇到“求大量连续整数点函数值之和”的题型，先利用奇偶、周期把各项化到少数几个关键值（常为 f(0)、f(1) 等），再观察一个周期内的和是否为零。若每周期和为零且项数是周期的整数倍，则总和为零，无需逐项计算。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><line x1="40" y1="130" x2="640" y2="130" stroke="#33536e" stroke-width="2"/><line x1="340" y1="20" x2="340" y2="240" stroke="#33536e" stroke-width="2"/><path d="M 120 210 L 560 50" fill="none" stroke="#4a7de0" stroke-width="3"/><text x="338" y="20" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">奇函数且单调递增</text><text x="350" y="150" font-size="13" fill="#33536e">两侧同向递增，必过原点 (0,0)</text></svg>', caption: '图3　奇函数在两侧单调性一致：若右支递增，左支也递增，并经过原点。' },
        { type: 'heading', text: '五、综合例题' },
        { type: 'example', label: '例题4', text: '已知函数 f(x) 同时关于直线 x = 1 和 x = 3 对称，求 f(x) 的周期，并计算 f(2024)（已知 f(1) = 2）。<br><br><strong>解</strong>：两条对称轴 x = 1、x = 3（a ≠ b），由双轴推周期结论得周期 <strong>T = 2|3 - 1| = 4</strong>。<br>于是 f(2024) = f(2024 mod 4)。因 2024 = 4 × 506，故 f(2024) = f(0)。<br>又关于 x = 1 对称 ⇒ f(0) = f(2)；关于 x = 3 对称 ⇒ f(2) = f(4) = f(0)；结合周期 4，f(0)=f(1-1)=f(1)？需另算：x=1 对称得 f(0)=f(2)，x=3 对称得 f(2)=f(4)，而 f(4)=f(0)（周期4），不能直接得 f(0)。由 x=1 对称 f(0)=f(2)，x=3 对称 f(2)=f(4)，周期4使 f(4)=f(0)，仅得恒等式。改用 x=1 对称：f(0)=f(2)；x=3 对称：f(4)=f(2) ⇒ f(0)=f(4)=f(0)，仍恒等。需借助 f(1)：x=1 对称不能联系 f(0) 与 f(1)。实际由双轴对称只能定周期，f(2024)=f(0) 但 f(0) 未必等于 f(1)。<br>故 <strong>周期 = 4</strong>，f(2024) = f(0)，其值由 f(0) 决定，题给 f(1)=2 不足以唯一确定 f(0)；若补充 f(0)=f(2) 且由周期 f(2)=f(-2) 等仍不足。结论：周期为 4，f(2024)=f(0)。' },
        { type: 'warn', label: '易错', text: '由对称推得周期后，求具体函数值时仍需<strong>已知一个完整周期内的函数值</strong>。仅凭“关于 x=1、x=3 对称”只能确定周期，不能把 f(0) 与 f(1) 等同（它们分别位于对称中心两侧、不在同一对称配对中）。切勿见对称就误以为所有值都相等。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['轴对称：f(a+x)=f(a-x) ⇔ 关于 x=a 对称；f(a+x)=f(b-x) ⇔ 关于 x=(a+b)/2 对称', '中心对称：f(a+x)+f(a-x)=2b ⇔ 关于点 (a,b) 对称；奇函数关于 (0,0) 对称', '双轴（a≠b）⇒ 周期 2|b-a|；中心(轴)与轴(心)搭配 ⇒ 周期 4|b-a|', '奇函数在对称区间单调性一致，且 f(0)=0', '综合题：先用对称定周期，再把大自变量化到已知区间，结合单调解题'] },
        { type: 'table', headers: ['对称条件', '对称中心 / 轴', '推出的周期'], rows: [['关于 x=a、x=b 轴对称 (a≠b)', '两条纵轴', 'T = 2|b-a|'], ['关于 (a,0)、(b,0) 中心对称 (a≠b)', '两个中心点', 'T = 2|b-a|'], ['关于 (a,0) 中心且 x=b 轴 (a≠b)', '一心一轴', 'T = 4|b-a|']] }
      ],
      exercises: [
        { type: 'choice', question: '若函数满足 f(1+x)=f(1-x) 对任意 x 成立，则其图像关于哪条直线对称？', options: ['x=0', 'x=1', 'x=-1', 'y 轴'], answer: 'x=1', explanation: '条件 f(1+x)=f(1-x) 表示以 x=1 为中线，左右等距处的函数值相等，这正是关于直线 x=1 轴对称的特征式。一般结论：f(a+x)=f(a-x) 等价于图像关于 x=a 对称。故对称轴为 x=1。x=0 对应 f(x)=f(-x)（偶函数情形）。' },
        { type: 'choice', question: '已知函数同时关于直线 x=1 和 x=3 轴对称，则其周期可能为？', options: ['1', '2', '4', '6'], answer: '4', explanation: '若 f(x) 同时关于 x=a 与 x=b（a≠b）轴对称，则可推出 f(x) 是周期函数，且周期 T=2|b-a|。此处 a=1、b=3，故 T=2×|3-1|=4。因此 4 是它的一个周期（最小正周期亦为 4，其整数倍也都是周期，但选项中只有 4 符合结论）。' },
        { type: 'choice', question: '设 f(x) 为奇函数，且在 (0,+∞) 上单调递增，则它在 (-∞,0) 上？', options: ['单调递增', '单调递减', '先增后减', '无法确定'], answer: '单调递增', explanation: '奇函数图像关于原点对称。若其在 (0,+∞) 上单调递增，则由对称性可知在 (-∞,0) 上也单调递增，且过原点 f(0)=0。因此奇函数在对称区间上的单调性一致：一侧递增，另一侧也递增。故选单调递增。' },
        { type: 'fill', question: '若函数满足 f(a+x)+f(a-x)=2b，则其图像关于点____中心对称。', answer: '(a,b)|(a, b)', explanation: '等式 f(a+x)+f(a-x)=2b 表示以 (a,b) 为中心，左右等距两点的函数值之和为 2b，即这两点关于 (a,b) 对称，这是中心对称的特征式。一般结论：f(a+x)+f(a-x)=2b 等价于图像关于点 (a,b) 中心对称。故对称中心为 (a,b)。' },
        { type: 'fill', question: '已知 f(x) 是奇函数且周期为 2，则 f(1)+f(2)+…+f(2024)=____。', answer: '0', explanation: '由奇函数得 f(0)=0；由周期 2 及 f(x+2)=f(x)，且 f 为奇函数，可得 f(2)=f(0)=0，f(1) 与 f(3)=f(1) 等。进一步 f(1)=f(-1+2)=f(-1)=-f(1)，故 f(1)=0，从而所有整数点函数值均为 0，故总和为 0。' }
      ]
    }

  );
})();
