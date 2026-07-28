/* ============================================================
 * 高三复习 · 实验专题 · 专题四 实验基础知识与技能
 * 课时20：实验设计与数据处理（控制变量法、替代法、伏伏法/安安法、图像法求斜率截距）
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u20',
    name: '实验设计与数据处理（控制变量法、替代法、伏伏法/安安法、图像法求斜率截距）',
    chapter: '实验专题 · 专题四 实验基础知识与技能',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、设计实验的基本思路' },
      { type: 'paragraph', text: '拿到一个测量任务，先想清楚四件事：要测什么量（目的）、依据哪条物理规律（原理）、需要哪些器材、最后数据怎么处理。一个好的实验设计，要让待测的量能被算出来，同时误差尽量小。高三复习里，控制变量法、替代法、伏伏法/安安法都是最常被考到的设计套路。' },
      { type: 'keypoint', label: '重点·设计四步', text: '<strong>实验设计先定目的与原理，再选器材，最后想好数据处理与误差分析。</strong>没有清晰原理就动手，测出来的数往往算不出想要的量，这是设计题的大忌。' },
      { type: 'list', items: ['明确目的：到底要测哪个物理量', '选定原理：写出能算出该量的公式', '挑选器材：量程合适、精度够用', '规划处理：用图像法还是公式法，误差怎么估'] },
      { type: 'heading', text: '二、控制变量法' },
      { type: 'paragraph', text: '当一个结果同时受好几个因素影响时，我们一次只让其中一个因素变化，其余全部保持不变，看看这个因素单独起什么作用——这就是控制变量法。比如研究加速度 a 与力 F、质量 m 的关系：先保持 m 不变，看 a 怎样随 F 变；再保持 F 不变，看 a 怎样随 m 变。' },
      { type: 'list', items: ['每次只改变一个自变量，其余变量固定', '分别研究每个变量与结果的单独关系', '最后再把各因素综合起来得出结论', '常见于：a−F−m、电阻与材料长度截面积、热量与多因素'] },
      { type: 'example', label: '例题·控制变量', text: '例：探究导体电阻 R 与长度 L、横截面积 S 的关系，应怎样设计？<br><strong>解析</strong>：用控制变量法。第一组：取同种材料、相同 S 的几根导线，只改变 L，测 R，得 R 与 L 成正比；第二组：同种材料、相同 L，只改变 S，得 R 与 S 成反比。综合得到 R = ρ L / S。' },
      { type: 'heading', text: '三、替代法' },
      { type: 'paragraph', text: '替代法的妙处是不用算出具体公式，而是用已知量"顶替"未知量。最典型的是用电阻箱替代被测电阻：先把待测电阻 R_x 接入电路，记下某个标志（如电流表示数 I）；再把电阻箱 R 接进去，调节 R 使电流表的示数重新变回 I，说明此时电阻箱的作用和 R_x 完全一样，于是 R_x = R。这种方法巧妙避开了电表内阻带来的系统误差。' },
      { type: 'keypoint', label: '重点·替代法', text: '<strong>替代法：让已知标准量（电阻箱）产生与原待测电阻完全相同的电路效果，从而直接读出 R_x = R。</strong>因为比较的是"同一示数"，电表内阻的影响在两次中几乎相同，被抵消掉，精度高。' },
      { type: 'list', items: ['第一步：接入 R_x，记录标志示数（如电流 I）', '第二步：用电阻箱替换 R_x，调电阻箱使示数回到 I', '第三步：读取电阻箱阻值，即 R_x', '注意替换时电源、滑动变阻器位置都不要动'] },
      { type: 'heading', text: '四、伏伏法与安安法' },
      { type: 'paragraph', text: '普通伏安法测电阻时，电表内阻会引入误差。伏伏法和安安法借"一个电表内阻已知"来化解。伏伏法适合测大电阻：把已知内阻 R_V 的电压表与被测 R_x 串联，两个电压表分别读 U₁（已知表）、U₂（R_x 两端），串联电流相等，得 R_x = R_V × U₂ / U₁。安安法适合测小电阻：把已知内阻 R_A 的电流表与被测 R_x 并联，两表读 I₂（已知表）、I₁（总电流），并联电压相等，得 R_x = R_A × I₂ / (I₁ − I₂)。' },
      { type: 'table', headers: ['方法', '适用', '关键条件', '计算公式'], rows: [['伏伏法', '大电阻', '一只电压表内阻 R_V 已知', 'R_x = R_V × U₂ / U₁'], ['安安法', '小电阻', '一只电流表内阻 R_A 已知', 'R_x = R_A × I₂ / (I₁−I₂)'], ['替代法', '任意', '电阻箱可读、示数可复现', 'R_x = R（电阻箱读数)']] },
      { type: 'warn', label: '易错', text: '<strong>伏伏法测大电阻、安安法测小电阻，选反了误差会很大。</strong>伏伏法中已知表与被测电阻串联，若 R_x 很小，串联电流主要由它决定，分压比例不准；安安法两表并联，若 R_x 很大则几乎不分流，I₂ 极小读不准。记住口诀："大电阻用伏伏、小电阻用安安"。' },
      { type: 'heading', text: '五、图像法求斜率与截距' },
      { type: 'paragraph', text: '很多实验的最终目的，是从图线里抠出斜率 k 和纵截距 b。例如测电源电动势 E 和内阻 r，由 U = E − I r 知：以 I 为横轴、U 为纵轴，图线是一条向下斜的直线，它的纵截距就是电动势 E，斜率的绝对值就是内阻 r。再比如测动能定理、胡克定律，斜率往往就对应某个物理量。' },
      { type: 'list', items: ['先把实验公式化成 y = k x + b 的直线形式', '横轴、纵轴选好代表的量，写清单位', '在直线上取相距远的两点求 k = (y₂−y₁)/(x₂−x₁)', '纵截距 b：把直线延长交纵轴，读数即为 b'] },
      { type: 'tip', label: '提示', text: '<strong>求截距时先把直线延长到与纵轴相交，交点的纵坐标就是 b；斜率绝对值常对应内阻、劲度系数等。</strong>务必先确认公式里谁是 y 谁是 x，不要把横纵轴搞反，否则斜率含义全变。' },
      { type: 'example', label: '例题·图像求 E 和 r', text: '例：测电源得 U−I 图线，直线上两点为 (0.20 A, 1.40 V) 和 (0.60 A, 1.00 V)。求电动势 E 和内阻 r。<br><strong>解析</strong>：由 U = E − I r，纵截距即 E，斜率绝对值即 r。k = (1.00−1.40)/(0.60−0.20) = (−0.40)/0.40 = −1.0 V/A，故 r = 1.0 Ω；代入点：E = 1.40 + 0.20×1.0 = 1.60 V。所以 E = 1.60 V、r = 1.0 Ω。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">控制变量法：一次只变一个因素</text><rect x="50" y="70" width="180" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="140" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">保持 m 不变</text><text x="140" y="132" font-size="12" fill="#234b45" text-anchor="middle">改变 F</text><text x="140" y="160" font-size="12" fill="#234b45" text-anchor="middle">看 a 随 F 变</text><text x="140" y="200" font-size="12" fill="#4fb3a5" text-anchor="middle">得 a ∝ F</text><rect x="250" y="70" width="180" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">保持 F 不变</text><text x="340" y="132" font-size="12" fill="#234b45" text-anchor="middle">改变 m</text><text x="340" y="160" font-size="12" fill="#234b45" text-anchor="middle">看 a 随 m 变</text><text x="340" y="200" font-size="12" fill="#4fb3a5" text-anchor="middle">得 a ∝ 1/m</text><rect x="450" y="70" width="180" height="180" rx="10" fill="#4fb3a5"/><text x="540" y="110" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">综合</text><text x="540" y="148" font-size="12" fill="#234b45" text-anchor="middle">a = F / m</text><text x="540" y="178" font-size="12" fill="#234b45" text-anchor="middle">得出结论</text></svg>', caption: '图1　控制变量法：分别固定其他量，单独研究每个因素对结果的影响，再综合。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">替代法：用电阻箱顶替待测电阻</text><rect x="60" y="80" width="250" height="90" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="112" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">接 R_x</text><text x="185" y="140" font-size="12" fill="#234b45" text-anchor="middle">记电流 I</text><rect x="370" y="80" width="250" height="90" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="112" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">换电阻箱 R</text><text x="495" y="140" font-size="12" fill="#234b45" text-anchor="middle">调 R 使 I 复原</text><rect x="60" y="200" width="560" height="70" rx="10" fill="#4fb3a5"/><text x="340" y="232" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">同一示数 I ⇒ 作用相同 ⇒ R_x = R</text><text x="340" y="258" font-size="12" fill="#234b45" text-anchor="middle">电表内阻影响被抵消，精度高</text></svg>', caption: '图2　替代法：调电阻箱使电路示数与原待测电阻时相同，直接得 R_x = R，抵消内阻误差。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图像法：纵截距=电动势，斜率=内阻</text><rect x="90" y="70" width="500" height="200" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="110" y1="250" x2="560" y2="250" stroke="#234b45" stroke-width="2"/><line x1="110" y1="250" x2="110" y2="90" stroke="#234b45" stroke-width="2"/><line x1="500" y1="90" x2="120" y2="250" stroke="#4fb3a5" stroke-width="3"/><polygon points="120,250 132,247 128,237" fill="#4fb3a5"/><circle cx="500" cy="90" r="5" fill="#2e9e8f"/><text x="500" y="78" font-size="11" fill="#234b45" text-anchor="middle">纵截距 E</text><text x="300" y="200" font-size="12" fill="#234b45" text-anchor="middle">|斜率| = r</text><text x="340" y="300" font-size="12" fill="#234b45" text-anchor="middle">U = E − I r：延长交纵轴得 E，斜率绝对值是内阻 r</text></svg>', caption: '图3　U−I 图线：纵截距即电源电动势 E，直线斜率的绝对值即内阻 r。' }
    ],
    exercises: [
      { type: 'choice', question: '研究加速度 a 与力 F、质量 m 的关系时，应采用的方法是？', options: ['先同时改变 F 和 m 看 a', '控制变量法：每次只改变一个量，其余保持不变', '只用一组数据分析即可', '把 F 和 m 相乘再比较'], answer: '控制变量法：每次只改变一个量，其余保持不变', explanation: '当结果同时受多个因素影响时，要用控制变量法：先固定 m 不变，研究 a 与 F 的关系；再固定 F 不变，研究 a 与 m 的关系，最后综合。若一次同时改变多个量，就无法判断是哪个因素在起作用，结论不可靠。' },
      { type: 'choice', question: '用替代法测电阻时，关键操作是？', options: ['直接用公式计算不必调电阻箱', '接入电阻箱后调其阻值，使电路某示数恢复到接 R_x 时的数值', '把电阻箱调到任意值读取', '两次测量时换用不同电源'], answer: '接入电阻箱后调其阻值，使电路某示数恢复到接 R_x 时的数值', explanation: '替代法的核心是"等效"：先接入 R_x 记录标志示数（如电流 I），再用电阻箱替换，调节电阻箱使同一示数重新出现，说明两者对电路的作用完全相同，于是 R_x = R。这样电表内阻的影响在两次中相同而被抵消，精度高。' },
      { type: 'choice', question: '已知一只电压表内阻 R_V，用它和被测大电阻 R_x 串联做伏伏法，两表读数分别为 U₁（已知表）、U₂（R_x 两端），则 R_x 等于？', options: ['R_V × U₁ / U₂', 'R_V × U₂ / U₁', 'U₁ / U₂', 'R_V × (U₁ + U₂) / U₁'], answer: 'R_V × U₂ / U₁', explanation: '伏伏法中已知内阻的电压表与被测电阻串联，串联电流处处相等：U₁ / R_V = U₂ / R_x，整理得 R_x = R_V × U₂ / U₁。该方法适合测大电阻，因为大电阻与电压表串联时电流很小、分压明显，比例较准。' },
      { type: 'fill', question: '用图像法处理测电源电动势和内阻的数据，由 U = E − I r 知：以 I 为横轴、U 为纵轴，图线纵截距等于 ___，斜率的绝对值等于 ___。', answer: '电动势 E|内阻 r', explanation: '把 U = E − I r 与直线方程 y = b − k x 对比，纵轴 U 的截距 b 就是电动势 E；斜率 k = −r，所以斜率的绝对值就是电源内阻 r。从图上延长直线交纵轴读 E，再取两点算斜率绝对值即得 r。两空分别为"电动势 E"和"内阻 r"。' },
      { type: 'fill', question: '安安法测小电阻，已知内阻 R_A 的电流表与被测 R_x 并联，总电流 I₁、已知表读数 I₂，则 R_x = ___（用 R_A、I₁、I₂ 表示）。', answer: 'R_A × I₂ / (I₁ − I₂)', explanation: '安安法中两支路并联，电压相等：已知表支路电压 = I₂ × R_A，被测支路电压 = (I₁ − I₂) × R_x，二者相等，故 I₂ × R_A = (I₁ − I₂) × R_x，得 R_x = R_A × I₂ / (I₁ − I₂)。该方法适合小电阻，分流明显、读数较准。' }
    ]
  });
})();
