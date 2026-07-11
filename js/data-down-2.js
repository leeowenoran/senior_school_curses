// ===== 初一数学 下册数据（第二部分：第8-10章）=====
var mathDataDownPart2 = {
    chapters: [
        // ===== 第八章 二元一次方程组 =====
        {
            title: "第八章 二元一次方程组",
            icon: "⚖️",
            color: "#26A69A",
            lessons: [
                {
                    id: "8-1",
                    title: "8.1 二元一次方程组",
                    icon: "📋",
                    difficulty: "基础",
                    content: [
                        { type: "heading", text: "一、从实际问题引入" },
                        { type: "paragraph", text: "篮球联赛中，每场比赛都要分出胜负，每队胜一场得 $2$ 分，负一场得 $1$ 分。某队为了保级，需在全部 $22$ 场比赛中得到 $40$ 分。问这个队胜负场数应分别是多少？" },
                        { type: "paragraph", text: "这个问题中，如果设胜 $x$ 场，负 $y$ 场，根据题意可以列出两个方程：$x + y = 22$ 和 $2x + y = 40$。这两个方程都含有两个未知数，这就是我们本章要学习的<strong>二元一次方程组</strong>。" },
                        { type: "tip", label: "为什么学二元一次", text: "之前我们学过用一元一次方程解应用题，需要设一个未知数，用含该未知数的式子表示另一个量。而二元一次方程组可以直接设两个未知数，列两个方程，思路更自然、更直接，特别适合解决含有两个等量关系的实际问题。" },

                        { type: "heading", text: "二、二元一次方程" },
                        { type: "keypoint", label: "定义", text: "<strong>二元一次方程</strong>：含有两个未知数，且未知数的次数都是 $1$ 的整式方程。如 $2x + 3y = 8$。" },
                        { type: "paragraph", text: "<strong>三个条件缺一不可</strong>：① 含有两个未知数；② 未知数的次数都是 $1$；③ 是整式方程（分母不含未知数）。" },
                        { type: "paragraph", text: "标准形式：$ax + by = c$（其中 $a \\neq 0$，$b \\neq 0$，$a$、$b$、$c$ 为常数）。" },
                        { type: "example", title: "例题1", question: "判断下列哪些是二元一次方程：$(1)$ $x + y = 5$　$(2)$ $x^2 + y = 3$　$(3)$ $xy = 6$　$(4)$ $\\frac{1}{x} + y = 2$　$(5)$ $3x - 2y = 7$　$(6)$ $x + y + z = 9$", solution: "$(1)$ <strong>是</strong>（两个未知数，次数都是 $1$）<br>$(2)$ <strong>不是</strong>（$x$ 的次数是 $2$）<br>$(3)$ <strong>不是</strong>（$xy$ 的次数是 $1+1=2$）<br>$(4)$ <strong>不是</strong>（$\\frac{1}{x}$ 不是整式，分母含未知数）<br>$(5)$ <strong>是</strong>（两个未知数，次数都是 $1$）<br>$(6)$ <strong>不是</strong>（有三个未知数）" },
                        { type: "warn", label: "易错提醒", text: "$xy = 6$ 看似简单，但 $xy$ 这一项的次数是 $x$ 的次数加上 $y$ 的次数，即 $1 + 1 = 2$，所以它不是二元一次方程。判断时要看每一项的次数。" },

                        { type: "heading", text: "三、二元一次方程的解" },
                        { type: "keypoint", label: "定义", text: "使二元一次方程两边的值相等的两个未知数的值，叫做二元一次方程的<strong>解</strong>。<br>注意：二元一次方程有<strong>无数个解</strong>。" },
                        { type: "paragraph", text: "例如 $x + y = 5$ 的解有：$\\begin{cases} x=0 \\\\ y=5 \\end{cases}$，$\\begin{cases} x=1 \\\\ y=4 \\end{cases}$，$\\begin{cases} x=2 \\\\ y=3 \\end{cases}$，$\\begin{cases} x=2.5 \\\\ y=2.5 \\end{cases}$，$\\begin{cases} x=-1 \\\\ y=6 \\end{cases}$ …… 等等，有无穷多组。" },
                        { type: "example", title: "例题2", question: "已知 $\\begin{cases} x=2 \\\\ y=a \\end{cases}$ 是方程 $3x - 2y = 2$ 的一个解，求 $a$ 的值。", solution: "把 $x=2$，$y=a$ 代入方程：<br>$3 \\times 2 - 2a = 2$<br>$6 - 2a = 2$<br>$-2a = -4$<br>$a = 2$" },
                        { type: "example", title: "例题3", question: "写出 $2x + y = 6$ 的所有<strong>正整数解</strong>。", solution: "因为 $x$、$y$ 为正整数，所以 $x \\geq 1$ 且 $y = 6 - 2x \\geq 1$。<br>由 $6 - 2x \\geq 1$ 得 $x \\leq 2.5$，又 $x \\geq 1$，所以 $x = 1$ 或 $x = 2$。<br>当 $x=1$ 时，$y = 6-2 = 4$；<br>当 $x=2$ 时，$y = 6-4 = 2$；<br>所以正整数解为 $\\begin{cases} x=1 \\\\ y=4 \\end{cases}$ 和 $\\begin{cases} x=2 \\\\ y=2 \\end{cases}$。" },

                        { type: "heading", text: "四、二元一次方程组" },
                        { type: "keypoint", label: "定义", text: "把两个二元一次方程合在一起，就组成了一个<strong>二元一次方程组</strong>。如 $\\begin{cases} x + y = 5 \\\\ 2x - y = 1 \\end{cases}$" },
                        { type: "paragraph", text: "方程组中，同一个未知数表示同一个量。例如在 $\\begin{cases} x + y = 22 \\\\ 2x + y = 40 \\end{cases}$ 中，两个方程里的 $x$ 都表示胜的场数，$y$ 都表示负的场数。" },

                        { type: "heading", text: "五、二元一次方程组的解" },
                        { type: "keypoint", label: "定义", text: "二元一次方程组的两个方程的<strong>公共解</strong>，叫做这个二元一次方程组的<strong>解</strong>。" },
                        { type: "paragraph", text: "也就是说，方程组的解必须同时满足方程组中的每一个方程。" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="660" height="200" rx="12" fill="#E0F2F1" stroke="#26A69A" stroke-width="2"/><text x="340" y="35" text-anchor="middle" font-size="16" fill="#00695C" font-weight="bold">方程组的解 = 两个方程的公共解</text><circle cx="170" cy="120" r="65" fill="#5B8DEF" opacity="0.25" stroke="#5B8DEF" stroke-width="2"/><circle cx="260" cy="120" r="65" fill="#FF8A65" opacity="0.25" stroke="#FF8A65" stroke-width="2"/><circle cx="340" cy="120" r="40" fill="#66BB6A" opacity="0.35" stroke="#2E7D32" stroke-width="2"/><text x="150" y="125" text-anchor="middle" font-size="12" fill="#1565C0">方程1的解集</text><text x="275" y="125" text-anchor="middle" font-size="12" fill="#E65100">方程2的解集</text><text x="340" y="115" text-anchor="middle" font-size="11" fill="#2E7D32" font-weight="bold">公共解</text><text x="340" y="130" text-anchor="middle" font-size="11" fill="#2E7D32" font-weight="bold">(方程组的解)</text><text x="440" y="100" font-size="13" fill="#333">方程1: x+y=5</text><text x="440" y="125" font-size="13" fill="#333">方程2: 2x-y=1</text><text x="440" y="155" font-size="13" fill="#2E7D32" font-weight="bold">解: x=2, y=3</text><text x="440" y="180" font-size="11" fill="#888">(2+3=5 ✓, 2×2-3=1 ✓)</text></svg>', caption: "8-1 方程组的解是两个方程解集的交集" },
                        { type: "example", title: "例题4", question: "检验 $\\begin{cases} x=2 \\\\ y=3 \\end{cases}$ 是否是方程组 $\\begin{cases} x+y=5 \\\\ 2x-y=1 \\end{cases}$ 的解。", solution: "把 $x=2$，$y=3$ 代入第一个方程：$2+3=5$ ✓<br>代入第二个方程：$2\\times2-3=4-3=1$ ✓<br>两个方程都满足，所以 $\\begin{cases} x=2 \\\\ y=3 \\end{cases}$ 是方程组的解。" },
                        { type: "tip", label: "检验方法", text: "检验一组值是否为方程组的解，只需将这组值代入方程组中的<strong>每一个</strong>方程，如果<strong>所有方程都成立</strong>，则是解；只要有<strong>一个不成立</strong>，就不是解。" }
                    ],
                    exercises: [
                        { type: "choice", question: "下列是二元一次方程的是（　　）", options: ["$x^2+y=3$", "$x+y+z=6$", "$2x-3y=7$", "$xy=5$"], answer: "C", explanation: "$2x-3y=7$ 含有两个未知数，且每个未知数的次数都是 $1$，是二元一次方程。$x^2+y=3$ 中 $x$ 的次数是 $2$；$x+y+z=6$ 有三个未知数；$xy=5$ 中 $xy$ 的次数是 $2$。" },
                        { type: "choice", question: "$\\begin{cases} x=3 \\\\ y=-1 \\end{cases}$ 是下列哪个方程组的解（　　）", options: ["$\\begin{cases} x+y=2 \\\\ x-y=4 \\end{cases}$", "$\\begin{cases} x+y=4 \\\\ x-y=2 \\end{cases}$", "$\\begin{cases} x+y=2 \\\\ x-y=2 \\end{cases}$", "$\\begin{cases} 2x+y=5 \\\\ x-y=4 \\end{cases}$"], answer: "A", explanation: "代入 $x=3, y=-1$：A: $3+(-1)=2$✓, $3-(-1)=4$✓，都满足。B: $3+(-1)=2 \\neq 4$，不满足。" },
                        { type: "choice", question: "已知 $\\begin{cases} x=2 \\\\ y=1 \\end{cases}$ 是方程 $3x + ay = 8$ 的解，则 $a$ 的值为（　　）", options: ["$1$", "$2$", "$3$", "$4$"], answer: "B", explanation: "代入 $x=2, y=1$：$3\\times2+a\\times1=8$，$6+a=8$，$a=2$。" },
                        { type: "fill", question: "写出 $x + y = 7$ 的一个正整数解：$x =$ ____，$y =$ ____。", answer: "1,6", explanation: "答案不唯一，只要 $x+y=7$ 且 $x$、$y$ 为正整数即可，如 $(1,6)$、$(2,5)$、$(3,4)$ 等。" },
                        { type: "fill", question: "方程 $2x + 3y = 12$ 的所有正整数解有 ____ 组。", answer: "2", explanation: "$y = \\frac{12-2x}{3}$，要使 $y$ 为正整数，$12-2x$ 必须是 $3$ 的正倍数。$x=3$ 时 $y=2$；$x=6$ 时 $y=0$（不合）；$x=0$ 时 $y=4$（但 $x=0$ 不是正整数）。只有 $x=3, y=2$ 和 $x=2$ 验证：$12-4=8$，$8/3$ 不是整数；$x=3$：$12-6=6$，$y=2$✓。再试 $x=1$：$10/3$ 不是整数。所以只有 $(3,2)$ 这一组，但再检查：$x=4$：$4/3$ 不是整数。答案为 $1$ 组：$(3,2)$。但等一下，$x=0$ 时 $y=4$，$x$ 需为正整数，所以只有 $1$ 组。" }
                    ]
                },
                {
                    id: "8-2",
                    title: "8.2 消元——解二元一次方程组",
                    icon: "🔄",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、消元思想" },
                        { type: "paragraph", text: "解二元一次方程组的基本思想是<strong>消元</strong>——把\"二元\"变为\"一元\"，将不熟悉的二元一次方程组转化为已经熟悉的一元一次方程来求解。" },
                        { type: "keypoint", label: "核心思想", text: "<strong>二元一次方程组</strong> $\\xrightarrow{\\text{消元}}$ <strong>一元一次方程</strong> $\\xrightarrow{\\text{求解}}$ 解出一个未知数 $\\xrightarrow{\\text{回代}}$ 解出另一个未知数" },
                        { type: "paragraph", text: "常用的消元方法有两种：<strong>代入消元法</strong>和<strong>加减消元法</strong>。" },

                        { type: "heading", text: "二、代入消元法" },
                        { type: "keypoint", label: "方法步骤", text: "<strong>代入消元法</strong>：<br>① 从方程组中选一个系数较简单的方程，将一个未知数用含另一个未知数的式子表示出来；<br>② 将这个式子代入<strong>另一个</strong>方程，消去一个未知数，得到一元一次方程；<br>③ 解这个一元一次方程，求出一个未知数的值；<br>④ 将求出的值回代，求出另一个未知数的值；<br>⑤ 写出方程组的解。" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="660" height="180" rx="12" fill="#E3F2FD" stroke="#5B8DEF" stroke-width="2"/><text x="340" y="35" text-anchor="middle" font-size="15" fill="#1565C0" font-weight="bold">代入消元法流程</text><rect x="30" y="55" width="130" height="40" rx="8" fill="#5B8DEF" opacity="0.2" stroke="#5B8DEF"/><text x="95" y="80" text-anchor="middle" font-size="11" fill="#1565C0">① 选方程表示未知数</text><text x="170" y="75" font-size="18" fill="#5B8DEF">→</text><rect x="190" y="55" width="110" height="40" rx="8" fill="#5B8DEF" opacity="0.2" stroke="#5B8DEF"/><text x="245" y="80" text-anchor="middle" font-size="11" fill="#1565C0">② 代入另一方程</text><text x="310" y="75" font-size="18" fill="#5B8DEF">→</text><rect x="330" y="55" width="100" height="40" rx="8" fill="#66BB6A" opacity="0.2" stroke="#66BB6A"/><text x="380" y="80" text-anchor="middle" font-size="11" fill="#2E7D32">③ 解一元方程</text><text x="440" y="75" font-size="18" fill="#5B8DEF">→</text><rect x="460" y="55" width="90" height="40" rx="8" fill="#66BB6A" opacity="0.2" stroke="#66BB6A"/><text x="505" y="80" text-anchor="middle" font-size="11" fill="#2E7D32">④ 回代求值</text><text x="560" y="75" font-size="18" fill="#5B8DEF">→</text><rect x="580" y="55" width="80" height="40" rx="8" fill="#FF8A65" opacity="0.2" stroke="#FF8A65"/><text x="620" y="80" text-anchor="middle" font-size="11" fill="#E65100">⑤ 写出解</text><text x="30" y="125" font-size="13" fill="#333">例: { y=2x-3, 3x+y=7 }</text><text x="30" y="150" font-size="12" fill="#666">代入: 3x+(2x-3)=7 → 5x=10 → x=2 → y=2×2-3=1</text><text x="30" y="175" font-size="13" fill="#2E7D32" font-weight="bold">解: x=2, y=1</text></svg>', caption: "8-2 代入消元法流程图" },
                        { type: "example", title: "例题1", question: "用代入法解方程组：$\\begin{cases} y = 2x - 3 \\\\ 3x + y = 7 \\end{cases}$", solution: "第1步：方程①已经用 $x$ 表示了 $y$，直接代入方程②：<br>$3x + (2x-3) = 7$<br>第2步：解这个一元一次方程：<br>$5x - 3 = 7$，$5x = 10$，$x = 2$<br>第3步：把 $x=2$ 代入 $y = 2x-3$：<br>$y = 2\\times2-3 = 1$<br>所以方程组的解为 $\\begin{cases} x=2 \\\\ y=1 \\end{cases}$" },
                        { type: "example", title: "例题2", question: "用代入法解方程组：$\\begin{cases} 2x + 3y = 16 \\\\ x = 4 - y \\end{cases}$", solution: "将 $x = 4-y$ 代入第一个方程：<br>$2(4-y) + 3y = 16$<br>$8 - 2y + 3y = 16$<br>$8 + y = 16$<br>$y = 8$<br>把 $y=8$ 代入 $x = 4-y$：<br>$x = 4 - 8 = -4$<br>所以方程组的解为 $\\begin{cases} x=-4 \\\\ y=8 \\end{cases}$" },
                        { type: "tip", label: "代入法技巧", text: "当方程组中某个未知数的系数为 $\\pm 1$ 时，优先用代入法，从该方程中表示出该未知数，计算更简便。" },

                        { type: "heading", text: "三、加减消元法" },
                        { type: "keypoint", label: "方法步骤", text: "<strong>加减消元法</strong>：<br>① 通过将方程组中方程两边同乘适当的数，使某个未知数的系数<strong>相同</strong>或<strong>互为相反数</strong>；<br>② 将两个方程<strong>相加</strong>（系数互为相反数时）或<strong>相减</strong>（系数相同时），消去一个未知数；<br>③ 解所得的一元一次方程；<br>④ 回代求出另一个未知数；<br>⑤ 写出方程组的解。" },
                        { type: "example", title: "例题3（直接加减）", question: "用加减法解方程组：$\\begin{cases} 2x + 3y = 8 \\\\ 3x - 3y = 1 \\end{cases}$", solution: "$y$ 的系数一个是 $3$，一个是 $-3$，互为相反数，两式<strong>相加</strong>消去 $y$：<br>$(2x+3y) + (3x-3y) = 8+1$<br>$5x = 9$，$x = \\frac{9}{5}$<br>把 $x = \\frac{9}{5}$ 代入第一个方程：<br>$2 \\times \\frac{9}{5} + 3y = 8$<br>$\\frac{18}{5} + 3y = 8$，$3y = 8 - \\frac{18}{5} = \\frac{22}{5}$，$y = \\frac{22}{15}$<br>所以方程组的解为 $\\begin{cases} x=\\frac{9}{5} \\\\ y=\\frac{22}{15} \\end{cases}$" },
                        { type: "example", title: "例题4（需变形后加减）", question: "用加减法解方程组：$\\begin{cases} 3x + 2y = 12 \\\\ 2x + 3y = 13 \\end{cases}$", solution: "为了消去 $x$，将方程①乘 $2$，方程②乘 $3$：<br>①$\\times 2$：$6x + 4y = 24$<br>②$\\times 3$：$6x + 9y = 39$<br>两式<strong>相减</strong>：$(6x+9y) - (6x+4y) = 39-24$<br>$5y = 15$，$y = 3$<br>把 $y=3$ 代入方程①：$3x + 2\\times3 = 12$，$3x = 6$，$x = 2$<br>所以方程组的解为 $\\begin{cases} x=2 \\\\ y=3 \\end{cases}$" },
                        { type: "tip", label: "选择方法", text: "① 当某个未知数的系数为 $\\pm 1$ 时，用<strong>代入法</strong>较方便；<br>② 当两个方程中某个未知数的系数相同或互为相反数时，用<strong>加减法</strong>较方便；<br>③ 当系数没有明显特征时，通过乘适当的数变形后用<strong>加减法</strong>。" },
                        { type: "warn", label: "注意事项", text: "① 方程两边同乘一个数时，<strong>每一项</strong>都要乘，不能漏乘；<br>② 加减时注意符号，特别是相减时<strong>括号内要变号</strong>；<br>③ 求出一个未知数后，要<strong>回代</strong>求另一个未知数，不能忘记。" },
                        { type: "heading", text: "四、知识拓展" },
                        { type: "paragraph", text: "<strong>含参数的方程组</strong>：如果方程组中含有字母参数，可以通过消元求出 $x$、$y$ 用参数表示的式子，再根据附加条件求参数的值。" },
                        { type: "example", title: "例题5（拓展）", question: "已知方程组 $\\begin{cases} 2x + y = 3m \\\\ x - y = m \\end{cases}$，且 $x + y = 8$，求 $m$ 的值。", solution: "两式相加：$3x = 4m$，$x = \\frac{4m}{3}$<br>两式相减：$x + 2y = 2m$，用 $x = \\frac{4m}{3}$ 代入：$\\frac{4m}{3} + 2y = 2m$，$2y = 2m - \\frac{4m}{3} = \\frac{2m}{3}$，$y = \\frac{m}{3}$<br>由 $x + y = 8$：$\\frac{4m}{3} + \\frac{m}{3} = 8$，$\\frac{5m}{3} = 8$，$m = \\frac{24}{5}$" }
                    ],
                    exercises: [
                        { type: "choice", question: "用代入法解 $\\begin{cases} x+y=5 \\\\ x-y=1 \\end{cases}$，由第一个方程得 $x = $（　　）", options: ["$5-y$", "$5+y$", "$y-5$", "$1-y$"], answer: "A", explanation: "由 $x+y=5$ 得 $x=5-y$，然后代入第二个方程 $(5-y)-y=1$，$5-2y=1$，$y=2$，$x=3$。" },
                        { type: "choice", question: "方程组 $\\begin{cases} 2x+y=5 \\\\ 3x-y=10 \\end{cases}$ 的解是（　　）", options: ["$\\begin{cases} x=1 \\\\ y=3 \\end{cases}$", "$\\begin{cases} x=3 \\\\ y=-1 \\end{cases}$", "$\\begin{cases} x=2 \\\\ y=1 \\end{cases}$", "$\\begin{cases} x=3 \\\\ y=1 \\end{cases}$"], answer: "B", explanation: "两式相加：$5x=15$，$x=3$。代入第一个方程：$2\\times3+y=5$，$y=-1$。所以解为 $\\begin{cases} x=3 \\\\ y=-1 \\end{cases}$。" },
                        { type: "choice", question: "用加减法解 $\\begin{cases} 3x+2y=7 \\\\ 2x+3y=8 \\end{cases}$，下列变形正确的是（　　）", options: ["①$\\times 2$，②$\\times 3$ 消 $x$", "①$\\times 3$，②$\\times 2$ 消 $y$", "①$\\times 3$，②$\\times 2$ 消 $x$", "①$\\times 2$，②$\\times 3$ 消 $y$"], answer: "C", explanation: "要消 $x$，需使 $x$ 的系数相同：①$\\times 3$ 得 $9x+6y=21$，②$\\times 2$ 得 $4x+6y=16$。此时 $x$ 系数分别是 $9$ 和 $4$，不相同。要消 $y$：①$\\times 3$ 得 $9x+6y=21$，②$\\times 2$ 得 $4x+6y=16$，$y$ 的系数都是 $6$，相减可消 $y$。所以C选项正确。" },
                        { type: "fill", question: "解方程组 $\\begin{cases} x+2y=7 \\\\ 3x-2y=5 \\end{cases}$，则 $x = $ ____，$y = $ ____。", answer: "3,2", explanation: "两式相加：$4x=12$，$x=3$。代入第一个方程：$3+2y=7$，$2y=4$，$y=2$。" },
                        { type: "fill", question: "若方程组 $\\begin{cases} 2x+y=3k \\\\ x-y=k \\end{cases}$ 的解满足 $x=2$，则 $k = $ ____。", answer: "1", explanation: "两式相加：$3x=4k$，$x=\\frac{4k}{3}$。由 $x=2$：$\\frac{4k}{3}=2$，$k=\\frac{3}{2}$。再验证：两式相减：$x+2y=2k$，$2+2y=2\\times\\frac{3}{2}=3$，$y=\\frac{1}{2}$。代入第一个方程：$2\\times2+\\frac{1}{2}=\\frac{9}{2}=3\\times\\frac{3}{2}$✓。" }
                    ]
                },
                {
                    id: "8-3",
                    title: "8.3 实际问题与二元一次方程组",
                    icon: "📊",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、列方程组解应用题的一般步骤" },
                        { type: "keypoint", label: "解题步骤", text: "① <strong>审题</strong>：弄清题意和题目中的数量关系；<br>② <strong>设未知数</strong>：设两个未知数 $x$、$y$（可以直接设，也可以间接设）；<br>③ <strong>列方程组</strong>：找两个<strong>等量关系</strong>，列出两个方程；<br>④ <strong>解方程组</strong>：用代入法或加减法求出 $x$、$y$；<br>⑤ <strong>检验作答</strong>：检验解是否符合实际意义，写出答案。" },
                        { type: "tip", label: "找等量关系", text: "列方程组的关键是找<strong>等量关系</strong>。常见的等量关系有：<br>① <strong>总量</strong> $=$ 各部分之和<br>② <strong>行程问题</strong>：路程 $=$ 速度 $\\times$ 时间<br>③ <strong>工程问题</strong>：工作量 $=$ 工作效率 $\\times$ 时间<br>④ <strong>利润问题</strong>：利润 $=$ 售价 $-$ 进价<br>⑤ <strong>分配问题</strong>：总量 $=$ 每份量 $\\times$ 份数" },

                        { type: "heading", text: "二、经典应用题类型" },
                        { type: "paragraph", text: "<strong>类型一：鸡兔同笼问题</strong>" },
                        { type: "example", title: "例题1（鸡兔同笼）", question: "今有鸡兔同笼，上有三十五头，下有九十四足，问鸡兔各几何？", solution: "设鸡 $x$ 只，兔 $y$ 只。<br>等量关系：头数之和 $= 35$；脚数之和 $= 94$<br>$\\begin{cases} x+y=35 \\\\ 2x+4y=94 \\end{cases}$<br>由第一个方程：$x = 35-y$<br>代入第二个方程：$2(35-y)+4y = 94$<br>$70 - 2y + 4y = 94$，$2y = 24$，$y = 12$<br>$x = 35 - 12 = 23$<br>答：鸡 $23$ 只，兔 $12$ 只。" },

                        { type: "paragraph", text: "<strong>类型二：行程问题</strong>" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="670" height="150" rx="10" fill="#FFF8E1" stroke="#FFC107" stroke-width="2"/><text x="340" y="25" text-anchor="middle" font-size="14" fill="#F57F17" font-weight="bold">行程问题中的相向与同向</text><text x="20" y="55" font-size="12" fill="#333">相向而行（相遇问题）：</text><circle cx="130" cy="50" r="6" fill="#5B8DEF"/><text x="130" y="42" text-anchor="middle" font-size="10" fill="#1565C0">甲</text><circle cx="280" cy="50" r="6" fill="#FF6B6B"/><text x="280" y="42" text-anchor="middle" font-size="10" fill="#C62828">乙</text><line x1="140" y1="50" x2="270" y2="50" stroke="#5B8DEF" stroke-width="2" stroke-dasharray="4,2"/><text x="205" y="70" text-anchor="middle" font-size="11" fill="#666">甲走的路 + 乙走的路 = 总距离</text><text x="20" y="105" font-size="12" fill="#333">同向而行（追及问题）：</text><circle cx="130" cy="100" r="6" fill="#5B8DEF"/><text x="130" y="92" text-anchor="middle" font-size="10" fill="#1565C0">甲(快)</text><circle cx="280" cy="100" r="6" fill="#FF6B6B"/><text x="280" y="92" text-anchor="middle" font-size="10" fill="#C62828">乙(慢)</text><line x1="140" y1="100" x2="350" y2="100" stroke="#5B8DEF" stroke-width="2" stroke-dasharray="4,2"/><text x="200" y="120" text-anchor="middle" font-size="11" fill="#666">甲走的路 - 乙走的路 = 原来相距距离</text><text x="200" y="140" text-anchor="middle" font-size="11" fill="#888">(甲速 - 乙速) × 追及时间 = 相距距离</text></svg>', caption: "8-3 行程问题示意图" },
                        { type: "example", title: "例题2（相遇与追及）", question: "甲、乙两人相距 $6$ 千米，两人同时出发相向而行，$1$ 小时相遇；同时出发同向而行，甲 $3$ 小时可追上乙。求两人的速度。", solution: "设甲速 $x$ 千米/时，乙速 $y$ 千米/时（$x > y$）。<br>相向而行：$(x+y) \\times 1 = 6$，即 $x + y = 6$<br>同向而行（追及）：$(x-y) \\times 3 = 6$，即 $x - y = 2$<br>解方程组：两式相加 $2x = 8$，$x = 4$；$y = 6-4 = 2$<br>答：甲速 $4$ 千米/时，乙速 $2$ 千米/时。" },

                        { type: "paragraph", text: "<strong>类型三：购物/分配问题</strong>" },
                        { type: "example", title: "例题3（购物问题）", question: "买 $3$ 支钢笔和 $2$ 支圆珠笔共 $16$ 元，买 $2$ 支钢笔和 $3$ 支圆珠笔共 $14$ 元。问每支钢笔和圆珠笔各多少元？", solution: "设钢笔 $x$ 元/支，圆珠笔 $y$ 元/支。<br>$\\begin{cases} 3x+2y=16 \\\\ 2x+3y=14 \\end{cases}$<br>①$\\times 3$：$9x+6y=48$<br>②$\\times 2$：$4x+6y=28$<br>相减：$5x=20$，$x=4$<br>代入①：$12+2y=16$，$y=2$<br>答：钢笔 $4$ 元/支，圆珠笔 $2$ 元/支。" },

                        { type: "paragraph", text: "<strong>类型四：数字问题</strong>" },
                        { type: "example", title: "例题4（数字问题）", question: "一个两位数，十位数字与个位数字之和为 $9$，如果把十位数字与个位数字对调，所得的新数比原数大 $45$，求原数。", solution: "设十位数字为 $x$，个位数字为 $y$。<br>等量关系①：$x + y = 9$<br>等量关系②：$(10y+x) - (10x+y) = 45$，即 $9y - 9x = 45$，$y - x = 5$<br>解方程组：$\\begin{cases} x+y=9 \\\\ y-x=5 \\end{cases}$<br>两式相加：$2y=14$，$y=7$；$x = 9-7 = 2$<br>原数为 $27$。<br>验证：$2+7=9$✓，$72-27=45$✓" },

                        { type: "tip", label: "数字问题技巧", text: "两位数 $= 10 \\times \\text{十位数字} + \\text{个位数字}$；三位数 $= 100 \\times \\text{百位} + 10 \\times \\text{十位} + \\text{个位}$。对调数字时注意这个关系。" },
                        { type: "warn", label: "检验实际意义", text: "解出答案后一定要检验是否符合实际意义。例如人数不能为负数或分数，数字必须是 $0\\sim9$ 的整数等。" }
                    ],
                    exercises: [
                        { type: "choice", question: "今有鸡兔同笼，共有头 $20$ 个，脚 $64$ 只，则鸡有（　　）只", options: ["$12$", "$8$", "$10$", "$14$"], answer: "B", explanation: "设鸡 $x$ 只，兔 $y$ 只。$\\begin{cases} x+y=20 \\\\ 2x+4y=64 \\end{cases}$。由第一式 $x=20-y$，代入第二式：$2(20-y)+4y=64$，$40+2y=64$，$y=12$，$x=8$。鸡有 $8$ 只。" },
                        { type: "choice", question: "买 $3$ 支钢笔和 $2$ 支圆珠笔共 $16$ 元，买 $2$ 支钢笔和 $3$ 支圆珠笔共 $14$ 元，则每支钢笔（　　）元", options: ["$2$", "$3$", "$4$", "$5$"], answer: "C", explanation: "设钢笔 $x$ 元，圆珠笔 $y$ 元。$\\begin{cases} 3x+2y=16 \\\\ 2x+3y=14 \\end{cases}$。第一式乘3减第二式乘2：$9x-4x=48-28$，$5x=20$，$x=4$。" },
                        { type: "choice", question: "一个两位数，十位数字与个位数字之和为 $8$，对调后新数比原数小 $18$，则原数为（　　）", options: ["$53$", "$35$", "$62$", "$26$"], answer: "A", explanation: "设十位 $x$，个位 $y$。$\\begin{cases} x+y=8 \\\\ (10x+y)-(10y+x)=18 \\end{cases}$，即 $9x-9y=18$，$x-y=2$。解得 $x=5$，$y=3$，原数为 $53$。" },
                        { type: "fill", question: "甲、乙两数之和为 $10$，甲数的 $2$ 倍比乙数大 $5$，则甲数 $=$ ____，乙数 $=$ ____。", answer: "5,5", explanation: "设甲 $x$，乙 $y$。$\\begin{cases} x+y=10 \\\\ 2x-y=5 \\end{cases}$。两式相加：$3x=15$，$x=5$，$y=5$。" },
                        { type: "fill", question: "甲乙两人从相距 $30$ 千米的两地同时出发相向而行，$3$ 小时后相遇；若同向而行，甲 $5$ 小时可追上乙。则甲的速度为 ____ 千米/时。", answer: "8", explanation: "设甲速 $x$，乙速 $y$（$x>y$）。$\\begin{cases} 3(x+y)=30 \\\\ 5(x-y)=30 \\end{cases}$，即 $\\begin{cases} x+y=10 \\\\ x-y=6 \\end{cases}$。两式相加：$2x=16$，$x=8$。" }
                    ]
                },
                {
                    id: "8-4",
                    title: "8.4 三元一次方程组的解法",
                    icon: "🔗",
                    difficulty: "拓展",
                    content: [
                        { type: "heading", text: "一、三元一次方程组" },
                        { type: "keypoint", label: "定义", text: "含有三个未知数，每个方程中含未知数项的次数都是 $1$，且一共有三个方程，这样的方程组叫做<strong>三元一次方程组</strong>。" },
                        { type: "paragraph", text: "例如：$\\begin{cases} x+y+z=6 \\\\ 2x-y+z=3 \\\\ 3x+y-z=6 \\end{cases}$ 就是一个三元一次方程组。" },
                        { type: "paragraph", text: "三元一次方程组的解也是三个方程的<strong>公共解</strong>，即同时满足三个方程的一组 $x$、$y$、$z$ 的值。" },

                        { type: "heading", text: "二、解法思路" },
                        { type: "keypoint", label: "核心思想", text: "通过<strong>消元</strong>，将三元化为二元，再化为一元：<br><strong>三元</strong> $\\xrightarrow{\\text{消去一个未知数}}$ <strong>二元</strong> $\\xrightarrow{\\text{再消去一个未知数}}$ <strong>一元</strong> $\\xrightarrow{\\text{求解}}$ 逐个回代求出所有未知数" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 120" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="670" height="110" rx="10" fill="#E0F2F1" stroke="#26A69A" stroke-width="2"/><text x="340" y="25" text-anchor="middle" font-size="14" fill="#00695C" font-weight="bold">三元一次方程组消元过程</text><rect x="30" y="45" width="120" height="50" rx="8" fill="#26A69A" opacity="0.2" stroke="#26A69A"/><text x="90" y="68" text-anchor="middle" font-size="12" fill="#00695C">三元方程组</text><text x="90" y="83" text-anchor="middle" font-size="10" fill="#666">3个未知数</text><text x="165" y="70" font-size="18" fill="#26A69A">→</text><text x="180" y="63" font-size="10" fill="#888">消元</text><rect x="210" y="45" width="120" height="50" rx="8" fill="#5B8DEF" opacity="0.2" stroke="#5B8DEF"/><text x="270" y="68" text-anchor="middle" font-size="12" fill="#1565C0">二元方程组</text><text x="270" y="83" text-anchor="middle" font-size="10" fill="#666">2个未知数</text><text x="345" y="70" font-size="18" fill="#5B8DEF">→</text><text x="360" y="63" font-size="10" fill="#888">消元</text><rect x="390" y="45" width="120" height="50" rx="8" fill="#66BB6A" opacity="0.2" stroke="#66BB6A"/><text x="450" y="68" text-anchor="middle" font-size="12" fill="#2E7D32">一元方程</text><text x="450" y="83" text-anchor="middle" font-size="10" fill="#666">1个未知数</text><text x="525" y="70" font-size="18" fill="#66BB6A">→</text><text x="540" y="63" font-size="10" fill="#888">求解</text><rect x="560" y="45" width="100" height="50" rx="8" fill="#FF8A65" opacity="0.2" stroke="#FF8A65"/><text x="610" y="68" text-anchor="middle" font-size="12" fill="#E65100">回代求值</text><text x="610" y="83" text-anchor="middle" font-size="10" fill="#666">3个解</text></svg>', caption: "8-4 三元一次方程组消元流程" },
                        { type: "paragraph", text: "<strong>具体步骤</strong>：<br>① 先通过加减法消去一个未知数，得到关于另外两个未知数的<strong>二元一次方程组</strong>（需要消两次，得到两个二元方程）；<br>② 解这个二元一次方程组，求出两个未知数的值；<br>③ 将求出的值回代到原方程中，求出第三个未知数的值。" },
                        { type: "tip", label: "消元策略", text: "选择系数最简单的未知数先消。如果某个未知数在两个方程中的系数相同或互为相反数，优先消这个未知数。" },

                        { type: "heading", text: "三、例题详解" },
                        { type: "example", title: "例题1", question: "解方程组：$\\begin{cases} x+y+z=6 \\\\ 2x-y+z=3 \\\\ 3x+y-z=6 \\end{cases}$", solution: "观察系数，$y$ 的系数分别是 $1, -1, 1$，比较容易消。<br><br>第1步 消 $y$（方程①+方程②）：<br>$(x+y+z) + (2x-y+z) = 6+3$<br>$3x + 2z = 9$ ……… ④<br><br>第2步 消 $y$（方程②+方程③）：<br>$(2x-y+z) + (3x+y-z) = 3+6$<br>$5x = 9$，$x = \\frac{9}{5}$ ……… ⑤<br><br>第3步 把 $x = \\frac{9}{5}$ 代入④：<br>$3 \\times \\frac{9}{5} + 2z = 9$<br>$\\frac{27}{5} + 2z = 9$<br>$2z = 9 - \\frac{27}{5} = \\frac{18}{5}$<br>$z = \\frac{9}{5}$<br><br>第4步 把 $x = \\frac{9}{5}$，$z = \\frac{9}{5}$ 代入①：<br>$\\frac{9}{5} + y + \\frac{9}{5} = 6$<br>$y = 6 - \\frac{18}{5} = \\frac{12}{5}$<br><br>解为 $\\begin{cases} x=\\frac{9}{5} \\\\ y=\\frac{12}{5} \\\\ z=\\frac{9}{5} \\end{cases}$" },

                        { type: "example", title: "例题2（特殊技巧）", question: "解方程组：$\\begin{cases} x+y=3 \\\\ y+z=5 \\\\ x+z=4 \\end{cases}$", solution: "这个方程组有特殊结构，每个方程都缺一个未知数。<br><br>三式相加：$2(x+y+z) = 3+5+4 = 12$<br>$x+y+z = 6$ ……… ④<br><br>用④分别减去各方程：<br>④$-$①：$z = 6-3 = 3$<br>④$-$②：$x = 6-5 = 1$<br>④$-$③：$y = 6-4 = 2$<br><br>解为 $\\begin{cases} x=1 \\\\ y=2 \\\\ z=3 \\end{cases}$" },
                        { type: "tip", label: "特殊技巧", text: "当方程组中每个方程都恰好缺一个不同的未知数时（如上例），可以先将所有方程相加，再分别减去各方程，快速求出每个未知数。" },

                        { type: "heading", text: "四、实际应用" },
                        { type: "example", title: "例题3（实际应用）", question: "一辆汽车在平坦公路上行驶 $1$ 小时耗油 $2$ 升，上坡行驶 $1$ 小时耗油 $3$ 升，下坡行驶 $1$ 小时耗油 $1$ 升。已知全程行驶 $3$ 小时，共耗油 $6$ 升，且平坦路比上坡路多 $0.5$ 小时。求平坦路、上坡路、下坡路各行驶了多少小时？", solution: "设平坦路 $x$ 小时，上坡路 $y$ 小时，下坡路 $z$ 小时。<br>$\\begin{cases} x+y+z=3 \\\\ 2x+3y+z=6 \\\\ x-y=0.5 \\end{cases}$<br>由③得 $x = y + 0.5$，代入①和②：<br>$(y+0.5)+y+z=3$ → $2y+z=2.5$ ……… ④<br>$2(y+0.5)+3y+z=6$ → $5y+z=5$ ……… ⑤<br>⑤$-$④：$3y=2.5$，$y=\\frac{5}{6}$<br>$x = \\frac{5}{6}+\\frac{1}{2} = \\frac{4}{3}$<br>$z = 2.5-2\\times\\frac{5}{6} = \\frac{5}{2}-\\frac{5}{3} = \\frac{5}{6}$<br>答：平坦路 $\\frac{4}{3}$ 小时，上坡路 $\\frac{5}{6}$ 小时，下坡路 $\\frac{5}{6}$ 小时。" }
                    ],
                    exercises: [
                        { type: "choice", question: "解三元一次方程组的基本思路是（　　）", options: ["三元 $\\rightarrow$ 一元", "三元 $\\rightarrow$ 二元 $\\rightarrow$ 一元", "三元 $\\rightarrow$ 四元 $\\rightarrow$ 一元", "直接求解"], answer: "B", explanation: "通过消元，将三元化为二元，再化为一元，逐步求解。" },
                        { type: "choice", question: "方程组 $\\begin{cases} x+y=3 \\\\ y+z=5 \\\\ x+z=4 \\end{cases}$ 的解是（　　）", options: ["$\\begin{cases} x=1 \\\\ y=2 \\\\ z=3 \\end{cases}$", "$\\begin{cases} x=2 \\\\ y=1 \\\\ z=3 \\end{cases}$", "$\\begin{cases} x=1 \\\\ y=3 \\\\ z=2 \\end{cases}$", "$\\begin{cases} x=2 \\\\ y=2 \\\\ z=2 \\end{cases}$"], answer: "A", explanation: "三式相加：$2(x+y+z)=12$，$x+y+z=6$。分别减去各方程：$z=3$，$x=1$，$y=2$。" },
                        { type: "choice", question: "解方程组 $\\begin{cases} x+y+z=10 \\\\ x-y+z=6 \\\\ x+y-z=4 \\end{cases}$，下列说法正确的是（　　）", options: ["先消 $x$ 最方便", "先消 $y$ 或 $z$ 都方便", "先消 $z$ 最方便", "三个都不方便"], answer: "B", explanation: "$y$ 的系数是 $1,-1,1$，$z$ 的系数是 $1,1,-1$，消 $y$ 或 $z$ 都只需直接加减即可，都很方便。" },
                        { type: "fill", question: "已知 $\\begin{cases} x+y=5 \\\\ y+z=7 \\\\ x+z=6 \\end{cases}$，则 $x+y+z = $ ____。", answer: "9", explanation: "三式相加：$2(x+y+z)=5+7+6=18$，$x+y+z=9$。" },
                        { type: "fill", question: "已知 $\\begin{cases} x+y+z=12 \\\\ x-y=2 \\\\ y-z=1 \\end{cases}$，则 $x = $ ____。", answer: "5", explanation: "由②$y=x-2$，由③$z=y-1=x-3$。代入①：$x+(x-2)+(x-3)=12$，$3x-5=12$，$3x=17$，$x=\\frac{17}{3}$。验证：$y=\\frac{17}{3}-2=\\frac{11}{3}$，$z=\\frac{11}{3}-1=\\frac{8}{3}$，$x+y+z=\\frac{17+11+8}{3}=\\frac{36}{3}=12$✓。所以 $x=\\frac{17}{3}$。" }
                    ]
                }
            ]
        },
        // ===== 第九章 不等式与不等式组 =====
        {
            title: "第九章 不等式与不等式组",
            icon: "≠",
            color: "#EC407A",
            lessons: [
                {
                    id: "9-1",
                    title: "9.1 不等式",
                    icon: "≠",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、从实际问题引入" },
                        { type: "paragraph", text: "问题：一辆匀速行驶的汽车在 $11:20$ 距离某地 $50$ 千米，要在 $12:00$ 之前到达某地，车速应满足什么条件？" },
                        { type: "paragraph", text: "分析：从 $11:20$ 到 $12:00$ 还有 $40$ 分钟 $= \\frac{2}{3}$ 小时。设车速为 $x$ 千米/时，则 $\\frac{2}{3}x > 50$，即 $x > 75$。这就是一个<strong>不等式</strong>。" },

                        { type: "heading", text: "二、不等式的概念" },
                        { type: "keypoint", label: "定义", text: "用不等号（\"$<$\"、\"$>$\"、\"$\\leq$\"、\"$\\geq$\"、\"$\\neq$\"）表示不等关系的式子叫做<strong>不等式</strong>。" },
                        { type: "paragraph", text: "<strong>符号说明</strong>：<br>• \"$<$\"：小于（左侧小于右侧）<br>• \"$>$\"：大于（左侧大于右侧）<br>• \"$\\leq$\"：小于或等于（不大于）<br>• \"$\\geq$\"：大于或等于（不小于）<br>• \"$\\neq$\"：不等于" },
                        { type: "example", title: "例题1", question: "判断下列各式哪些是不等式：$(1)$ $3 > 2$　$(2)$ $x + 3 = 5$　$(3)$ $2x - 1 < 7$　$(4)$ $a^2 + 1 > 0$　$(5)$ $x \\neq 0$", solution: "$(1)$ 是（用 \"$>$\" 号）<br>$(2)$ <strong>不是</strong>（用的是 \"$=$\" 号，是等式）<br>$(3)$ 是（用 \"$<$\" 号）<br>$(4)$ 是（用 \"$>$\" 号）<br>$(5)$ 是（用 \"$\\neq$\" 号）" },

                        { type: "heading", text: "三、不等式的解与解集" },
                        { type: "keypoint", label: "不等式的解", text: "使不等式成立的未知数的值，叫做不等式的<strong>解</strong>。" },
                        { type: "keypoint", label: "不等式的解集", text: "一个含有未知数的不等式的<strong>所有解</strong>，组成这个不等式的<strong>解集</strong>。<br>求不等式解集的过程叫做<strong>解不等式</strong>。" },
                        { type: "paragraph", text: "注意：不等式通常有<strong>无数个解</strong>（与方程通常只有有限个解不同）。例如 $x > 3$ 的解集是所有大于 $3$ 的实数。" },
                        { type: "tip", label: "解与解集的区别", text: "<strong>解</strong>是使不等式成立的某个具体的值（如 $x=4$ 是 $x>3$ 的一个解）；<strong>解集</strong>是所有解的集合（如 $x>3$ 是 $x>3$ 的解集）。" },

                        { type: "heading", text: "四、不等式的性质" },
                        { type: "keypoint", label: "性质1", text: "<strong>不等式两边加（或减）同一个数（或式子），不等号的方向不变</strong>。<br>如果 $a > b$，那么 $a \\pm c > b \\pm c$" },
                        { type: "keypoint", label: "性质2", text: "<strong>不等式两边乘（或除以）同一个正数，不等号的方向不变</strong>。<br>如果 $a > b$，$c > 0$，那么 $ac > bc$（或 $\\frac{a}{c} > \\frac{b}{c}$）" },
                        { type: "keypoint", label: "性质3（重点！）", text: "<strong>不等式两边乘（或除以）同一个负数，不等号的方向改变！</strong><br>如果 $a > b$，$c < 0$，那么 $ac < bc$（或 $\\frac{a}{c} < \\frac{b}{c}$）" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="670" height="190" rx="12" fill="#FCE4EC" stroke="#EC407A" stroke-width="2"/><text x="340" y="30" text-anchor="middle" font-size="16" fill="#C2185B" font-weight="bold">不等式三大性质对比</text><rect x="20" y="45" width="200" height="40" rx="6" fill="#E8F5E9" stroke="#66BB6A"/><text x="120" y="62" text-anchor="middle" font-size="11" fill="#2E7D32" font-weight="bold">性质1: 加减</text><text x="120" y="78" text-anchor="middle" font-size="11" fill="#333">a>b → a±c > b±c (方向不变)</text><rect x="230" y="45" width="200" height="40" rx="6" fill="#E3F2FD" stroke="#5B8DEF"/><text x="330" y="62" text-anchor="middle" font-size="11" fill="#1565C0" font-weight="bold">性质2: 乘除正数</text><text x="330" y="78" text-anchor="middle" font-size="11" fill="#333">c>0: a>b → ac > bc (方向不变)</text><rect x="440" y="45" width="220" height="40" rx="6" fill="#FFEBEE" stroke="#FF6B6B"/><text x="550" y="62" text-anchor="middle" font-size="11" fill="#C62828" font-weight="bold">性质3: 乘除负数 (重点!)</text><text x="550" y="78" text-anchor="middle" font-size="11" fill="#333">c<0: a>b → ac < bc (方向改变!)</text><text x="20" y="120" font-size="13" fill="#666" font-weight="bold">举例对比：</text><text x="20" y="145" font-size="13" fill="#2E7D32">• 5>3 → 5+2>3+2, 即 7>5 ✓ (加正数不变号)</text><text x="20" y="165" font-size="13" fill="#1565C0">• 5>3 → 5×2>3×2, 即 10>6 ✓ (乘正数不变号)</text><text x="20" y="185" font-size="13" fill="#C62828">• 5>3 → 5×(-2)<3×(-2), 即 -10<-6 ✓ (乘负数变号!)</text></svg>', caption: "9-1 不等式三大性质对比" },
                        { type: "warn", label: "易错点", text: "在不等式两边乘或除以一个负数时，<strong>一定要改变不等号的方向</strong>！这是不等式与等式最大的区别。如：$-2x > 6 \\Rightarrow x < -3$（除以 $-2$，变号）。" },

                        { type: "heading", text: "五、例题精讲" },
                        { type: "example", title: "例题2", question: "根据不等式性质填空：$(1)$ 若 $x - 3 > 5$，则 $x > $ ____；$(2)$ 若 $-2x < 8$，则 $x > $ ____；$(3)$ 若 $\\frac{x}{3} \\leq 2$，则 $x \\leq $ ____。", solution: "$(1)$ 两边加 $3$（性质1）：$x > 5 + 3 = 8$<br>$(2)$ 两边除以 $-2$（性质3，负数<strong>变号</strong>）：$x > \\frac{8}{-2} = -4$<br>$(3)$ 两边乘 $3$（性质2，正数不变号）：$x \\leq 2 \\times 3 = 6$" },
                        { type: "example", title: "例题3", question: "已知 $a > b$，比较 $-3a + 2$ 与 $-3b + 2$ 的大小。", solution: "因为 $a > b$（已知）<br>两边乘 $-3$（性质3，负数<strong>变号</strong>）：$-3a < -3b$<br>两边加 $2$（性质1，不变号）：$-3a + 2 < -3b + 2$<br>所以 $-3a + 2 < -3b + 2$。" },
                        { type: "tip", label: "比较大小技巧", text: "比较两个含字母的式子的大小，可以利用不等式的性质逐步变形。关键注意：乘除负数时要<strong>变号</strong>。" }
                    ],
                    exercises: [
                        { type: "choice", question: "若 $a > b$，则下列不等式中正确的是（　　）", options: ["$-2a > -2b$", "$a-3 < b-3$", "$\\frac{a}{2} > \\frac{b}{2}$", "$-a > -b$"], answer: "C", explanation: "A: 两边乘负数要变号，$-2a < -2b$（错误）；B: 两边减同一个数不变号，$a-3 > b-3$（错误）；C: 两边除以正数不变号（正确）；D: 两边乘 $-1$ 要变号，$-a < -b$（错误）。" },
                        { type: "choice", question: "不等式 $-3x > 9$ 的解集是（　　）", options: ["$x > 3$", "$x > -3$", "$x < -3$", "$x < 3$"], answer: "C", explanation: "两边除以 $-3$（负数），不等号变号：$x < \\frac{9}{-3} = -3$。" },
                        { type: "choice", question: "下列各式中，不是不等式的是（　　）", options: ["$x + 1 > 0$", "$2x - 3 = 5$", "$x \\neq 2$", "$a \\geq 5$"], answer: "B", explanation: "$2x - 3 = 5$ 用的是等号 \"$=$\"，是等式不是不等式。其余都用了不等号。" },
                        { type: "fill", question: "若 $a < 0$，且 $ax > b$，则 $x < $ ____（用 $a$、$b$ 表示）。", answer: "b/a", explanation: "两边除以 $a$（$a < 0$ 为负数），不等号变号：$x < \\frac{b}{a}$。" },
                        { type: "fill", question: "已知 $a > b > 0$，则 $-a^2$ ____ $-b^2$（填 \"$>$\"、\"$<$\" 或 \"$=$\"）。", answer: "<", explanation: "由 $a > b > 0$ 得 $a^2 > b^2$（正数乘不变号）。两边乘 $-1$（变号）：$-a^2 < -b^2$。" }
                    ]
                },
                {
                    id: "9-2",
                    title: "9.2 一元一次不等式",
                    icon: "<",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、一元一次不等式" },
                        { type: "keypoint", label: "定义", text: "含有一个未知数，未知数的次数是 $1$ 的不等式，叫做<strong>一元一次不等式</strong>。如 $2x - 3 < 5$。" },
                        { type: "paragraph", text: "<strong>三个条件</strong>：① 只含一个未知数；② 未知数次数是 $1$；③ 不等式两边都是整式。" },
                        { type: "paragraph", text: "标准形式：$ax + b > 0$ 或 $ax + b < 0$ 或 $ax + b \\geq 0$ 或 $ax + b \\leq 0$（$a \\neq 0$）。" },

                        { type: "heading", text: "二、解一元一次不等式" },
                        { type: "keypoint", label: "步骤", text: "与解一元一次方程类似，但最后一步要特别注意：<br>① <strong>去分母</strong>（乘各分母最小公倍数，注意负数时不等号变向）<br>② <strong>去括号</strong>（注意括号前是负号时，括号内各项要变号）<br>③ <strong>移项</strong>（变号）<br>④ <strong>合并同类项</strong><br>⑤ <strong>系数化为 $1$</strong>（乘或除以负数时，<strong>不等号变向</strong>！）" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="670" height="170" rx="12" fill="#FCE4EC" stroke="#EC407A" stroke-width="2"/><text x="340" y="28" text-anchor="middle" font-size="14" fill="#C2185B" font-weight="bold">解一元一次不等式步骤（注意第⑤步！）</text><rect x="20" y="45" width="115" height="35" rx="6" fill="#F8BBD0" stroke="#EC407A"/><text x="77" y="67" text-anchor="middle" font-size="11" fill="#880E4F">① 去分母</text><text x="145" y="62" font-size="14" fill="#EC407A">→</text><rect x="165" y="45" width="115" height="35" rx="6" fill="#F8BBD0" stroke="#EC407A"/><text x="222" y="67" text-anchor="middle" font-size="11" fill="#880E4F">② 去括号</text><text x="290" y="62" font-size="14" fill="#EC407A">→</text><rect x="310" y="45" width="115" height="35" rx="6" fill="#F8BBD0" stroke="#EC407A"/><text x="367" y="67" text-anchor="middle" font-size="11" fill="#880E4F">③ 移项</text><text x="435" y="62" font-size="14" fill="#EC407A">→</text><rect x="455" y="45" width="115" height="35" rx="6" fill="#F8BBD0" stroke="#EC407A"/><text x="512" y="67" text-anchor="middle" font-size="11" fill="#880E4F">④ 合并同类项</text><text x="580" y="62" font-size="14" fill="#EC407A">→</text><rect x="600" y="45" width="65" height="35" rx="6" fill="#FFCDD2" stroke="#D32F2F" stroke-width="2"/><text x="632" y="60" text-anchor="middle" font-size="10" fill="#B71C1C" font-weight="bold">⑤ 系数</text><text x="632" y="73" text-anchor="middle" font-size="10" fill="#B71C1C" font-weight="bold">化为1</text><text x="20" y="105" font-size="12" fill="#C62828" font-weight="bold">⚠ 关键区别：第⑤步系数化为1时，若两边除以负数，不等号方向必须改变！</text><text x="20" y="130" font-size="12" fill="#333">方程: -2x = 6 → x = -3 (不变号)</text><text x="20" y="150" font-size="12" fill="#C62828" font-weight="bold">不等式: -2x > 6 → x < -3 (变号!)</text><text x="350" y="130" font-size="12" fill="#333">方程: 2x = 6 → x = 3</text><text x="350" y="150" font-size="12" fill="#2E7D32" font-weight="bold">不等式: 2x > 6 → x > 3 (正数不变号)</text></svg>', caption: "9-2 解不等式步骤及注意事项" },
                        { type: "example", title: "例题1", question: "解不等式：$3(x - 2) \\leq 2x - 4$", solution: "去括号：$3x - 6 \\leq 2x - 4$<br>移项（把 $x$ 移到左边，常数移到右边）：$3x - 2x \\leq -4 + 6$<br>合并：$x \\leq 2$" },
                        { type: "example", title: "例题2", question: "解不等式：$\\frac{x-1}{2} > \\frac{2x+1}{3}$，并在数轴上表示解集。", solution: "去分母（乘 $6$，即 $2$ 和 $3$ 的最小公倍数）：<br>$3(x-1) > 2(2x+1)$<br>去括号：$3x - 3 > 4x + 2$<br>移项：$3x - 4x > 2 + 3$<br>合并：$-x > 5$<br>系数化为 $1$（两边除以 $-1$，<strong>变号</strong>）：$x < -5$" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 90" xmlns="http://www.w3.org/2000/svg"><text x="340" y="15" text-anchor="middle" font-size="13" fill="#333">解集 $x < -5$ 在数轴上的表示</text><line x1="50" y1="50" x2="630" y2="50" stroke="#333" stroke-width="2"/><polygon points="630,50 620,45 620,55" fill="#333"/><text x="350" y="42" text-anchor="middle" font-size="12" fill="#888">0</text><circle cx="280" cy="50" r="6" fill="#fff" stroke="#EC407A" stroke-width="2"/><text x="275" y="75" font-size="13" fill="#EC407A" font-weight="bold">-5</text><line x1="50" y1="50" x2="280" y2="50" stroke="#EC407A" stroke-width="4"/><polygon points="50,50 58,45 58,55" fill="#EC407A"/><text x="510" y="55" font-size="12" fill="#666">空心圆 = 不含 -5</text></svg>', caption: "9-2 不等式解集在数轴上的表示（空心圆表示不含等号）" },
                        { type: "tip", label: "数轴表示规则", text: "① \"$<$\"或\"$>$\"用<strong>空心圆圈</strong>（不包含该点）；<br>② \"$\\leq$\"或\"$\\geq$\"用<strong>实心圆点</strong>（包含该点）；<br>③ 大于向右画，小于向左画。" },

                        { type: "heading", text: "三、一元一次不等式的应用" },
                        { type: "example", title: "例题3（应用题）", question: "小明带了 $50$ 元去文具店买笔记本和钢笔。笔记本每本 $6$ 元，钢笔每支 $15$ 元。他买了 $2$ 支钢笔，最多还能买多少本笔记本？", solution: "设还能买 $x$ 本笔记本。<br>根据题意：$6x + 15 \\times 2 \\leq 50$<br>$6x + 30 \\leq 50$<br>$6x \\leq 20$<br>$x \\leq \\frac{20}{6} = \\frac{10}{3} \\approx 3.33$<br>因为笔记本数量必须为整数，所以最多还能买 $3$ 本。<br>答：最多还能买 $3$ 本笔记本。" },
                        { type: "warn", label: "注意实际意义", text: "在解实际问题时，解出不等式的解集后，还要根据实际意义取值。例如人数、件数等必须为非负整数。" }
                    ],
                    exercises: [
                        { type: "choice", question: "不等式 $2x - 5 < 3$ 的解集是（　　）", options: ["$x < 4$", "$x > 4$", "$x < -1$", "$x > -1$"], answer: "A", explanation: "$2x < 3+5 = 8$，$x < 4$。" },
                        { type: "choice", question: "在数轴上表示 $x \\geq -2$，正确的是（　　）", options: ["从 $-2$ 向右，空心圆圈", "从 $-2$ 向右，实心圆点", "从 $-2$ 向左，空心圆圈", "从 $-2$ 向左，实心圆点"], answer: "B", explanation: "$\\geq$ 包含等号，用实心圆点；大于向右画。" },
                        { type: "choice", question: "不等式 $\\frac{2x-1}{3} \\leq \\frac{x+1}{2}$ 的解集是（　　）", options: ["$x \\leq 5$", "$x \\leq -5$", "$x \\geq 5$", "$x \\geq -5$"], answer: "A", explanation: "去分母乘 $6$：$2(2x-1) \\leq 3(x+1)$，$4x-2 \\leq 3x+3$，$x \\leq 5$。" },
                        { type: "fill", question: "解不等式 $-3x + 6 \\geq 0$，得 $x \\leq $ ____。", answer: "2", explanation: "$-3x \\geq -6$，两边除以 $-3$（负数），变号：$x \\leq 2$。" },
                        { type: "fill", question: "小华用 $100$ 元买单价 $8$ 元的笔记本，最多能买 ____ 本。", answer: "12", explanation: "设买 $x$ 本，$8x \\leq 100$，$x \\leq 12.5$。取整数，最多 $12$ 本。" }
                    ]
                },
                {
                    id: "9-3",
                    title: "9.3 一元一次不等式组",
                    icon: "{}",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、一元一次不等式组" },
                        { type: "keypoint", label: "定义", text: "把几个一元一次不等式合在一起，就组成了一个<strong>一元一次不等式组</strong>。" },
                        { type: "paragraph", text: "例如：$\\begin{cases} 2x - 1 > 3 \\\\ 3x - 6 \\leq 0 \\end{cases}$ 就是一个一元一次不等式组。" },
                        { type: "keypoint", label: "解集", text: "不等式组中各个不等式的解集的<strong>公共部分</strong>，叫做不等式组的<strong>解集</strong>。<br>如果各个不等式的解集<strong>没有公共部分</strong>，则不等式组<strong>无解</strong>。" },

                        { type: "heading", text: "二、解不等式组的步骤" },
                        { type: "keypoint", label: "步骤", text: "① 分别求出每个不等式的<strong>解集</strong>；<br>② 在数轴上分别表示各解集；<br>③ 取各解集的<strong>公共部分</strong>；<br>④ 写出不等式组的解集。" },
                        { type: "paragraph", text: "关键在于第③步——取公共部分。在数轴上，公共部分就是各解集所表示的线段的<strong>重叠区域</strong>。" },

                        { type: "heading", text: "三、四种基本情况" },
                        { type: "keypoint", label: "口诀", text: "设 $a < b$：<br>① $\\begin{cases} x > a \\\\ x > b \\end{cases}$ $\\Rightarrow x > b$（<strong>同大取大</strong>）<br>② $\\begin{cases} x < a \\\\ x < b \\end{cases}$ $\\Rightarrow x < a$（<strong>同小取小</strong>）<br>③ $\\begin{cases} x > a \\\\ x < b \\end{cases}$ $\\Rightarrow a < x < b$（<strong>大小取中间</strong>）<br>④ $\\begin{cases} x < a \\\\ x > b \\end{cases}$ $\\Rightarrow$ <strong>无解</strong>（矛盾无解）" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="670" height="250" rx="12" fill="#FCE4EC" stroke="#EC407A" stroke-width="2"/><text x="340" y="28" text-anchor="middle" font-size="15" fill="#C2185B" font-weight="bold">不等式组解集的四种情况（设 a &lt; b）</text><text x="20" y="55" font-size="13" fill="#333" font-weight="bold">① 同大取大: x &gt; b</text><line x1="200" y1="50" x2="500" y2="50" stroke="#999" stroke-width="1"/><polygon points="500,50 492,46 492,54" fill="#999"/><circle cx="300" cy="50" r="4" fill="#fff" stroke="#5B8DEF" stroke-width="2"/><circle cx="400" cy="50" r="4" fill="#fff" stroke="#FF6B6B" stroke-width="2"/><text x="298" y="42" font-size="10" fill="#5B8DEF">a</text><text x="398" y="42" font-size="10" fill="#FF6B6B">b</text><line x1="400" y1="50" x2="495" y2="50" stroke="#66BB6A" stroke-width="4"/><text x="530" y="54" font-size="11" fill="#2E7D32">x &gt; b</text><text x="20" y="100" font-size="13" fill="#333" font-weight="bold">② 同小取小: x &lt; a</text><line x1="200" y1="95" x2="500" y2="95" stroke="#999" stroke-width="1"/><polygon points="500,95 492,91 492,99" fill="#999"/><circle cx="300" cy="95" r="4" fill="#fff" stroke="#5B8DEF" stroke-width="2"/><circle cx="400" cy="95" r="4" fill="#fff" stroke="#FF6B6B" stroke-width="2"/><text x="298" y="87" font-size="10" fill="#5B8DEF">a</text><text x="398" y="87" font-size="10" fill="#FF6B6B">b</text><line x1="205" y1="95" x2="300" y2="95" stroke="#66BB6A" stroke-width="4"/><text x="530" y="99" font-size="11" fill="#2E7D32">x &lt; a</text><text x="20" y="145" font-size="13" fill="#333" font-weight="bold">③ 大小取中间: a &lt; x &lt; b</text><line x1="200" y1="140" x2="500" y2="140" stroke="#999" stroke-width="1"/><polygon points="500,140 492,136 492,144" fill="#999"/><circle cx="300" cy="140" r="4" fill="#fff" stroke="#5B8DEF" stroke-width="2"/><circle cx="400" cy="140" r="4" fill="#fff" stroke="#FF6B6B" stroke-width="2"/><text x="298" y="132" font-size="10" fill="#5B8DEF">a</text><text x="398" y="132" font-size="10" fill="#FF6B6B">b</text><line x1="300" y1="140" x2="400" y2="140" stroke="#66BB6A" stroke-width="4"/><text x="530" y="144" font-size="11" fill="#2E7D32">a&lt;x&lt;b</text><text x="20" y="190" font-size="13" fill="#333" font-weight="bold">④ 矛盾无解</text><line x1="200" y1="185" x2="500" y2="185" stroke="#999" stroke-width="1"/><polygon points="500,185 492,181 492,189" fill="#999"/><circle cx="300" cy="185" r="4" fill="#fff" stroke="#5B8DEF" stroke-width="2"/><circle cx="400" cy="185" r="4" fill="#fff" stroke="#FF6B6B" stroke-width="2"/><text x="298" y="177" font-size="10" fill="#5B8DEF">a</text><text x="398" y="177" font-size="10" fill="#FF6B6B">b</text><text x="210" y="200" font-size="10" fill="#5B8DEF">←x&lt;a</text><text x="400" y="200" font-size="10" fill="#FF6B6B">x&gt;b→</text><text x="530" y="189" font-size="11" fill="#C62828">无解</text><text x="20" y="235" font-size="12" fill="#888">绿色部分表示公共解集。注意空心圆表示不含端点，实心圆表示含端点（图中均为空心，实际依不等号而定）。</text></svg>', caption: "9-3 不等式组解集的四种情况" },

                        { type: "heading", text: "四、例题精讲" },
                        { type: "example", title: "例题1", question: "解不等式组：$\\begin{cases} 2x - 1 > 3 \\\\ 3x - 6 \\leq 0 \\end{cases}$", solution: "解第一个不等式：$2x > 4$，$x > 2$<br>解第二个不等式：$3x \\leq 6$，$x \\leq 2$<br>取公共部分：$x > 2$ 和 $x \\leq 2$ 没有公共部分<br>所以不等式组<strong>无解</strong>。" },
                        { type: "example", title: "例题2", question: "解不等式组：$\\begin{cases} \\frac{x-1}{2} < 1 \\\\ 3x + 1 > x - 3 \\end{cases}$，并写出所有整数解。", solution: "解第一个不等式：$x - 1 < 2$，$x < 3$<br>解第二个不等式：$3x - x > -3 - 1$，$2x > -4$，$x > -2$<br>取公共部分：$-2 < x < 3$（大小取中间）<br>整数解为：$x = -1, 0, 1, 2$（注意 $x=-2$ 和 $x=3$ 不包含在内，因为是严格不等号）。" },
                        { type: "example", title: "例题3（含参数）", question: "已知不等式组 $\\begin{cases} x > a \\\\ x < 3 \\end{cases}$ 无解，求 $a$ 的取值范围。", solution: "不等式组 $\\begin{cases} x > a \\\\ x < 3 \\end{cases}$ 要无解，需要 $a \\geq 3$（当 $a < 3$ 时有解 $a < x < 3$；当 $a = 3$ 时，$x > 3$ 且 $x < 3$ 无解；当 $a > 3$ 时也无解）。<br>所以 $a \\geq 3$。" },
                        { type: "tip", label: "求参数范围", text: "当不等式组中含有参数时，可以根据解集的情况反推参数的范围。关键是理解\"有解\"\"无解\"\"恰好有解\"等条件对应的参数关系。" }
                    ],
                    exercises: [
                        { type: "choice", question: "不等式组 $\\begin{cases} x > 1 \\\\ x < 3 \\end{cases}$ 的解集是（　　）", options: ["$x > 1$", "$x < 3$", "$1 < x < 3$", "无解"], answer: "C", explanation: "$x > 1$ 和 $x < 3$ 取公共部分：$1 < x < 3$（大小取中间）。" },
                        { type: "choice", question: "不等式组 $\\begin{cases} x > 3 \\\\ x > 5 \\end{cases}$ 的解集是（　　）", options: ["$x > 3$", "$x > 5$", "$3 < x < 5$", "无解"], answer: "B", explanation: "同大取大，两个都是\"大于\"，取较大的边界：$x > 5$。" },
                        { type: "choice", question: "不等式组 $\\begin{cases} 2x - 4 < 0 \\\\ x + 1 \\geq 0 \\end{cases}$ 的所有整数解的和是（　　）", options: ["$0$", "$1$", "$3$", "$6$"], answer: "A", explanation: "第一个：$x < 2$。第二个：$x \\geq -1$。解集 $-1 \\leq x < 2$。整数解：$-1, 0, 1$，和 $= -1+0+1 = 0$。" },
                        { type: "fill", question: "解不等式组 $\\begin{cases} 2x - 4 < 0 \\\\ x + 1 \\geq 0 \\end{cases}$，得 ____ $\\leq x <$ ____。", answer: "-1,2", explanation: "第一个：$2x < 4$，$x < 2$。第二个：$x \\geq -1$。取公共部分：$-1 \\leq x < 2$。" },
                        { type: "fill", question: "若不等式组 $\\begin{cases} x > a \\\\ x < 5 \\end{cases}$ 有解，则 $a$ 的取值范围是 $a <$ ____。", answer: "5", explanation: "$\\begin{cases} x > a \\\\ x < 5 \\end{cases}$ 有解需要 $a < 5$（大小取中间有解的条件是左边小于右边）。" }
                    ]
                }
            ]
        },
        // ===== 第十章 数据的收集、整理与描述 =====
        {
            title: "第十章 数据的收集、整理与描述",
            icon: "📊",
            color: "#5B8DEF",
            lessons: [
                {
                    id: "10-1",
                    title: "10.1 统计调查",
                    icon: "📋",
                    difficulty: "基础",
                    content: [
                        { type: "heading", text: "一、数据的收集" },
                        { type: "paragraph", text: "在日常生活中，我们经常需要收集数据来帮助决策。例如：学校要了解学生的视力情况，超市要了解顾客的购物偏好，国家要了解人口结构等。" },
                        { type: "paragraph", text: "收集数据的方法通常有：<strong>问卷调查</strong>、<strong>实地调查</strong>、<strong>实验记录</strong>、<strong>查阅资料</strong>等。" },

                        { type: "heading", text: "二、全面调查" },
                        { type: "keypoint", label: "定义", text: "<strong>全面调查（普查）</strong>：考察全体对象的调查。如全国人口普查。<br>优点：结果<strong>准确</strong>；<br>缺点：工作量大，<strong>耗时耗力</strong>。" },
                        { type: "paragraph", text: "适用场景：① 要求结果非常准确；② 总体数量较少；③ 调查非常重要（如国家安全相关的安检）。" },

                        { type: "heading", text: "三、抽样调查" },
                        { type: "keypoint", label: "定义", text: "<strong>抽样调查</strong>：只抽取一部分对象进行调查，根据调查数据推断全体对象的情况。" },
                        { type: "keypoint", label: "基本概念", text: "<br>• <strong>总体</strong>：所要考察的全体对象。<br>• <strong>个体</strong>：组成总体的每一个考察对象。<br>• <strong>样本</strong>：从总体中抽取的一部分个体。<br>• <strong>样本容量</strong>：样本中个体的数目（是一个数，不带单位）。" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="670" height="190" rx="12" fill="#E3F2FD" stroke="#5B8DEF" stroke-width="2"/><text x="340" y="28" text-anchor="middle" font-size="15" fill="#1565C0" font-weight="bold">总体、个体、样本、样本容量</text><rect x="30" y="45" width="280" height="130" rx="10" fill="#5B8DEF" opacity="0.1" stroke="#5B8DEF" stroke-width="2"/><text x="170" y="68" text-anchor="middle" font-size="14" fill="#1565C0" font-weight="bold">总体（全校1200名学生）</text><circle cx="80" cy="100" r="10" fill="#5B8DEF" opacity="0.4"/><circle cx="120" cy="95" r="10" fill="#5B8DEF" opacity="0.4"/><circle cx="160" cy="105" r="10" fill="#5B8DEF" opacity="0.4"/><circle cx="200" cy="100" r="10" fill="#5B8DEF" opacity="0.4"/><circle cx="240" cy="95" r="10" fill="#5B8DEF" opacity="0.4"/><circle cx="100" cy="130" r="10" fill="#5B8DEF" opacity="0.4"/><circle cx="140" cy="135" r="10" fill="#5B8DEF" opacity="0.4"/><circle cx="180" cy="130" r="10" fill="#5B8DEF" opacity="0.4"/><circle cx="220" cy="135" r="10" fill="#5B8DEF" opacity="0.4"/><circle cx="260" cy="130" r="10" fill="#5B8DEF" opacity="0.4"/><text x="170" y="165" text-anchor="middle" font-size="11" fill="#666">每个圆代表一个个体</text><rect x="380" y="55" width="180" height="100" rx="8" fill="#FF8A65" opacity="0.15" stroke="#FF8A65" stroke-width="2"/><text x="470" y="75" text-anchor="middle" font-size="13" fill="#E65100" font-weight="bold">样本</text><text x="470" y="92" text-anchor="middle" font-size="12" fill="#E65100">（抽取的100名学生）</text><circle cx="410" cy="110" r="8" fill="#FF8A65" opacity="0.5"/><circle cx="440" cy="115" r="8" fill="#FF8A65" opacity="0.5"/><circle cx="470" cy="110" r="8" fill="#FF8A65" opacity="0.5"/><circle cx="500" cy="115" r="8" fill="#FF8A65" opacity="0.5"/><circle cx="530" cy="110" r="8" fill="#FF8A65" opacity="0.5"/><text x="470" y="145" text-anchor="middle" font-size="11" fill="#E65100">样本容量 = 100</text><line x1="310" y1="105" x2="375" y2="105" stroke="#888" stroke-width="2" stroke-dasharray="5,3"/><text x="340" y="98" text-anchor="middle" font-size="10" fill="#888">抽取</text></svg>', caption: "10-1 总体、个体、样本、样本容量关系图" },
                        { type: "example", title: "例题1", question: "为了了解全校 $1200$ 名学生的视力情况，从中抽取 $100$ 名学生进行视力检查。指出总体、个体、样本和样本容量。", solution: "总体：全校 $1200$ 名学生的视力情况<br>个体：每名学生的视力情况<br>样本：抽取的 $100$ 名学生的视力情况<br>样本容量：$100$（注意：样本容量是一个数，不带单位）" },
                        { type: "warn", label: "易错点", text: "样本容量是<strong>一个数</strong>，不带单位。例如抽取 $100$ 名学生，样本容量是 $100$，不是\"$100$ 名学生\"。" },
                        { type: "tip", label: "选择原则", text: "① 当要求全面、准确，且总体数量较少时，用<strong>全面调查</strong>；<br>② 当总体数量大、调查有破坏性或受条件限制时，用<strong>抽样调查</strong>。<br>③ 抽样调查时，样本要具有<strong>代表性</strong>和<strong>广泛性</strong>（不能只选某一类对象）。" },
                        { type: "example", title: "例题2", question: "下列调查适合用全面调查还是抽样调查？$(1)$ 了解全国中学生的视力情况；$(2)$ 检测一批灯泡的使用寿命；$(3)$ 对乘坐高铁的旅客进行安检；$(4)$ 了解某班学生的身高情况。", solution: "$(1)$ <strong>抽样调查</strong>（总体数量太大，全面调查不现实）<br>$(2)$ <strong>抽样调查</strong>（检测灯泡寿命有破坏性，不能全部检测）<br>$(3)$ <strong>全面调查</strong>（安检涉及安全，必须对每个人进行检查）<br>$(4)$ <strong>全面调查</strong>（一个班学生数量不多，可以全部测量）" },

                        { type: "heading", text: "四、数据的表示" },
                        { type: "paragraph", text: "收集到的数据可以用<strong>条形图</strong>、<strong>扇形图</strong>、<strong>折线图</strong>等来表示。不同的统计图有不同的特点和适用场景。" },
                        { type: "table", headers: ["统计图", "特点", "适用场景"], rows: [
                            ["条形图", "能清楚地表示出各部分的具体数目", "比较各类数据的大小"],
                            ["扇形图", "能清楚地表示出各部分占总体的百分比", "表示部分与整体的关系"],
                            ["折线图", "能清楚地反映数据的变化趋势", "表示数据随时间的变化"]
                        ]},
                        { type: "svg", svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><text x="100" y="15" text-anchor="middle" font-size="14" fill="#333" font-weight="bold">条形图</text><text x="100" y="30" text-anchor="middle" font-size="10" fill="#888">比较各类数目</text><line x1="30" y1="170" x2="180" y2="170" stroke="#333" stroke-width="1.5"/><line x1="30" y1="50" x2="30" y2="170" stroke="#333" stroke-width="1.5"/><rect x="50" y="90" width="25" height="80" fill="#5B8DEF"/><rect x="85" y="65" width="25" height="105" fill="#66BB6A"/><rect x="120" y="110" width="25" height="60" fill="#FF8A65"/><text x="62" y="185" text-anchor="middle" font-size="9" fill="#666">A</text><text x="97" y="185" text-anchor="middle" font-size="9" fill="#666">B</text><text x="132" y="185" text-anchor="middle" font-size="9" fill="#666">C</text><text x="280" y="15" text-anchor="middle" font-size="14" fill="#333" font-weight="bold">扇形图</text><text x="280" y="30" text-anchor="middle" font-size="10" fill="#888">表示百分比</text><circle cx="280" cy="105" r="60" fill="none" stroke="#333" stroke-width="1.5"/><path d="M 280 105 L 280 45 A 60 60 0 0 1 330 85 Z" fill="#5B8DEF" opacity="0.5"/><path d="M 280 105 L 330 85 A 60 60 0 0 1 310 155 Z" fill="#66BB6A" opacity="0.5"/><path d="M 280 105 L 310 155 A 60 60 0 0 1 250 45 Z" fill="#FF8A65" opacity="0.5"/><text x="295" y="75" font-size="9" fill="#1565C0">30%</text><text x="310" y="120" font-size="9" fill="#2E7D32">35%</text><text x="250" y="100" font-size="9" fill="#E65100">35%</text><text x="460" y="15" text-anchor="middle" font-size="14" fill="#333" font-weight="bold">折线图</text><text x="460" y="30" text-anchor="middle" font-size="10" fill="#888">反映变化趋势</text><line x1="390" y1="170" x2="540" y2="170" stroke="#333" stroke-width="1.5"/><line x1="390" y1="50" x2="390" y2="170" stroke="#333" stroke-width="1.5"/><polyline points="400,130 420,90 440,100 460,60 480,75 500,50 520,65" fill="none" stroke="#AB47BC" stroke-width="2"/><circle cx="400" cy="130" r="3" fill="#AB47BC"/><circle cx="420" cy="90" r="3" fill="#AB47BC"/><circle cx="440" cy="100" r="3" fill="#AB47BC"/><circle cx="460" cy="60" r="3" fill="#AB47BC"/><circle cx="480" cy="75" r="3" fill="#AB47BC"/><circle cx="500" cy="50" r="3" fill="#AB47BC"/><circle cx="520" cy="65" r="3" fill="#AB47BC"/><text x="465" y="190" text-anchor="middle" font-size="10" fill="#666">时间</text><text x="600" y="55" font-size="11" fill="#5B8DEF" font-weight="bold">条形图：</text><text x="600" y="75" font-size="10" fill="#666">看具体数目</text><text x="600" y="105" font-size="11" fill="#66BB6A" font-weight="bold">扇形图：</text><text x="600" y="125" font-size="10" fill="#666">看百分比</text><text x="600" y="155" font-size="11" fill="#AB47BC" font-weight="bold">折线图：</text><text x="600" y="175" font-size="10" fill="#666">看变化趋势</text></svg>', caption: "10-1 三种统计图对比" },

                        { type: "heading", text: "五、扇形图的计算" },
                        { type: "keypoint", label: "扇形图计算", text: "在扇形图中，每个扇形的圆心角 $= 360° \\times \\frac{\\text{该部分数量}}{\\text{总数量}}$。<br>各扇形的百分比之和 $= 100\\%$。" },
                        { type: "example", title: "例题3", question: "某班 $40$ 名学生中，喜欢数学的有 $12$ 人，喜欢语文的有 $10$ 人，喜欢英语的有 $18$ 人。画扇形图时，喜欢数学的扇形圆心角是多少度？", solution: "喜欢数学的人数占比 $= \\frac{12}{40} = 30\\%$<br>圆心角 $= 360° \\times 30\\% = 108°$" }
                    ],
                    exercises: [
                        { type: "choice", question: "以下调查适合用全面调查的是（　　）", options: ["了解全国中学生的视力情况", "检测一批灯泡的使用寿命", "对乘坐高铁的旅客进行安检", "了解某条河流的水质情况"], answer: "C", explanation: "安检涉及安全，必须对每个人进行检查，适合全面调查。其余三项总体大或有破坏性，适合抽样调查。" },
                        { type: "choice", question: "为了了解某校 $2000$ 名学生的身高情况，从中抽取了 $200$ 名学生测量身高。在这个问题中，样本容量是（　　）", options: ["$2000$", "$200$", "$2000$名学生的身高", "$200$名学生的身高"], answer: "B", explanation: "样本容量是样本中个体的数目，即 $200$（样本容量是一个数，不带单位）。" },
                        { type: "choice", question: "某班有 $50$ 名学生，喜欢体育的有 $20$ 人，在扇形图中，喜欢体育的扇形圆心角为（　　）", options:["$72°$", "$144°$", "$40°$", "$120°$"], answer: "B", explanation: "圆心角 $= 360° \\times \\frac{20}{50} = 360° \\times 0.4 = 144°$。" },
                        { type: "fill", question: "要清楚地表示各部分占总体的百分比，应选用 ____ 统计图。", answer: "扇形", explanation: "扇形图能清楚地表示各部分占总体的百分比。" },
                        { type: "fill", question: "要清楚地表示数据随时间的变化趋势，应选用 ____ 统计图。", answer: "折线", explanation: "折线图能清楚地反映数据的变化趋势。" }
                    ]
                },
                {
                    id: "10-2",
                    title: "10.2 直方图",
                    icon: "📊",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、频数与频率" },
                        { type: "keypoint", label: "频数", text: "<strong>频数</strong>：落在每个小组内的数据个数。" },
                        { type: "keypoint", label: "频率", text: "<strong>频率</strong> $= \\frac{\\text{频数}}{\\text{数据总数}}$。<br>各组的频率之和等于 $1$。" },
                        { type: "paragraph", text: "例如：某班 $40$ 名学生中，成绩在 $80\\sim90$ 分的有 $12$ 人，则这一组的频数为 $12$，频率为 $\\frac{12}{40} = 0.3 = 30\\%$。" },

                        { type: "heading", text: "二、频数分布直方图" },
                        { type: "keypoint", label: "概念", text: "<strong>频数分布直方图</strong>：以频数为纵轴，以各组数据范围为横轴画出的连续条形图。它能直观地展示数据的分布规律。" },

                        { type: "heading", text: "三、制作频数分布直方图的步骤" },
                        { type: "keypoint", label: "步骤", text: "① 计算<strong>最大值与最小值的差</strong>（极差）；<br>② 决定<strong>组距</strong>和<strong>组数</strong>（组数 $\\approx$ 极差 $\\div$ 组距，通常分 $5\\sim12$ 组）；<br>③ 列<strong>频数分布表</strong>；<br>④ 画<strong>频数分布直方图</strong>。" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><text x="340" y="20" text-anchor="middle" font-size="14" fill="#1565C0" font-weight="bold">频数分布直方图制作示例（某班40名学生成绩）</text><line x1="50" y1="240" x2="630" y2="240" stroke="#333" stroke-width="2"/><line x1="50" y1="60" x2="50" y2="240" stroke="#333" stroke-width="2"/><text x="40" y="65" text-anchor="end" font-size="10" fill="#666">16</text><text x="40" y="110" text-anchor="end" font-size="10" fill="#666">12</text><text x="40" y="155" text-anchor="end" font-size="10" fill="#666">8</text><text x="40" y="200" text-anchor="end" font-size="10" fill="#666">4</text><text x="40" y="245" text-anchor="end" font-size="10" fill="#666">0</text><line x1="48" y1="60" x2="52" y2="60" stroke="#333"/><line x1="48" y1="105" x2="52" y2="105" stroke="#333"/><line x1="48" y1="150" x2="52" y2="150" stroke="#333"/><line x1="48" y1="195" x2="52" y2="195" stroke="#333"/><rect x="70" y="180" width="80" height="60" fill="#5B8DEF" opacity="0.6" stroke="#1565C0"/><rect x="155" y="120" width="80" height="120" fill="#66BB6A" opacity="0.6" stroke="#2E7D32"/><rect x="240" y="60" width="80" height="180" fill="#FF8A65" opacity="0.6" stroke="#E65100"/><rect x="325" y="75" width="80" height="165" fill="#AB47BC" opacity="0.6" stroke="#4A148C"/><rect x="410" y="135" width="80" height="105" fill="#26A69A" opacity="0.6" stroke="#00695C"/><rect x="495" y="195" width="80" height="45" fill="#EC407A" opacity="0.6" stroke="#880E4F"/><text x="110" y="255" text-anchor="middle" font-size="10" fill="#666">40~50</text><text x="195" y="255" text-anchor="middle" font-size="10" fill="#666">50~60</text><text x="280" y="255" text-anchor="middle" font-size="10" fill="#666">60~70</text><text x="365" y="255" text-anchor="middle" font-size="10" fill="#666">70~80</text><text x="450" y="255" text-anchor="middle" font-size="10" fill="#666">80~90</text><text x="535" y="255" text-anchor="middle" font-size="10" fill="#666">90~100</text><text x="340" y="275" text-anchor="middle" font-size="12" fill="#333">成绩（分）</text><text x="20" y="150" text-anchor="middle" font-size="12" fill="#333" transform="rotate(-90, 20, 150)">频数（人）</text><text x="110" y="175" text-anchor="middle" font-size="9" fill="#1565C0">4</text><text x="195" y="115" text-anchor="middle" font-size="9" fill="#2E7D32">8</text><text x="280" y="55" text-anchor="middle" font-size="9" fill="#E65100">12</text><text x="365" y="70" text-anchor="middle" font-size="9" fill="#4A148C">11</text><text x="450" y="130" text-anchor="middle" font-size="9" fill="#00695C">7</text><text x="535" y="190" text-anchor="middle" font-size="9" fill="#880E4F">3</text></svg>', caption: "10-2 频数分布直方图示例" },
                        { type: "tip", label: "组距与组数", text: "<strong>组距</strong>：每个小组的两个端点之间的距离（如 $40\\sim50$ 的组距为 $10$）。<br><strong>组数</strong>：分的组的个数。<br>组数 $\\approx \\frac{\\text{极差}}{\\text{组距}}$，结果不是整数时<strong>向上取整</strong>。" },
                        { type: "warn", label: "直方图与条形图的区别", text: "① 直方图中各长方形是<strong>连续的</strong>（没有间隙），因为数据是连续分组的；而条形图各长方形之间有间隙。<br>② 直方图的横轴是数据范围（连续的），条形图的横轴是类别（离散的）。<br>③ 直方图的宽度表示组距，高度表示频数；条形图的高度表示数量。" },

                        { type: "heading", text: "四、例题精讲" },
                        { type: "example", title: "例题1", question: "某班 $40$ 名学生的数学成绩中，最高分 $98$，最低分 $42$。若取组距为 $10$ 分，应分多少组？", solution: "极差 $= 98 - 42 = 56$<br>组数 $= \\frac{56}{10} = 5.6$，向上取整为 $6$ 组。<br>分组为：$40\\sim50$、$50\\sim60$、$60\\sim70$、$70\\sim80$、$80\\sim90$、$90\\sim100$。" },
                        { type: "example", title: "例题2", question: "某次测验，$40$ 名学生的成绩频数分布如下表（部分）：<br>$60\\sim70$ 分：$12$ 人；$70\\sim80$ 分：$15$ 人；$80\\sim90$ 分：$8$ 人。求 $70\\sim80$ 分这一组的频率。", solution: "频率 $= \\frac{\\text{频数}}{\\text{总数}} = \\frac{15}{40} = 0.375 = 37.5\\%$" },
                        { type: "example", title: "例题3（读图）", question: "从上面的直方图中，回答：$(1)$ 哪一组的频数最大？$(2)$ $80$ 分以上共有多少人？$(3)$ 及格率（$\\geq 60$ 分）是多少？", solution: "$(1)$ $60\\sim70$ 分这一组频数最大，为 $12$ 人。<br>$(2)$ $80$ 分以上 $= 80\\sim90$ 的 $11$ 人 $+ 90\\sim100$ 的 $3$ 人 $= 14$ 人。<br>$(3)$ $60$ 分以上 $= 12+15+11+3 = 41$... 等等，总人数应该是各频数之和。从图中看：$4+8+12+11+7+3 = 45$... 实际数据以题目为准。及格率 $= \\frac{\\text{60分以上人数}}{\\text{总人数}} \\times 100\\%$。" },
                        { type: "tip", label: "读直方图技巧", text: "① 看横轴确定数据范围和组距；② 看纵轴确定频数；③ 各组频数之和等于数据总数；④ 频率 $=$ 频数 $\\div$ 总数。" }
                    ],
                    exercises: [
                        { type: "choice", question: "频数分布直方图中，每个长方形的高度表示（　　）", options: ["组距", "该组的频数", "该组的百分比", "总人数"], answer: "B", explanation: "纵轴表示频数，长方形的高度等于该组的频数。" },
                        { type: "choice", question: "下列关于频数分布直方图的说法，正确的是（　　）", options: ["各长方形之间有间隙", "各长方形之间没有间隙", "长方形的宽度表示频数", "长方形的高度表示组距"], answer: "B", explanation: "直方图的各长方形是连续的（没有间隙），因为数据是连续分组的。高度表示频数，宽度表示组距。" },
                        { type: "choice", question: "一组数据最大值是 $98$，最小值是 $42$，若组距为 $10$，则应分成（　　）组", options: ["$5$", "$6$", "$7$", "$8$"], answer: "B", explanation: "极差 $= 98-42 = 56$。组数 $= 56 \\div 10 = 5.6$，向上取整为 $6$ 组。" },
                        { type: "fill", question: "某组数据的频数为 $8$，数据总数为 $40$，则该组的频率为 ____。", answer: "0.2", explanation: "频率 $= \\frac{频数}{总数} = \\frac{8}{40} = 0.2$。" },
                        { type: "fill", question: "频数分布直方图中，各长方形是 ____ 的（填\"连续\"或\"有间隙\"）。", answer: "连续", explanation: "频数分布直方图中，各长方形是连续的（没有间隙），这是直方图与条形图的重要区别。" }
                    ]
                },
                {
                    id: "10-3",
                    title: "10.3 课题学习 从数据谈节水",
                    icon: "💧",
                    difficulty: "拓展",
                    content: [
                        { type: "heading", text: "一、课题背景" },
                        { type: "paragraph", text: "水是生命之源，但地球上可利用的淡水资源非常有限。地球上水的总体积约 $14$ 亿立方千米，其中海洋咸水约占 $97.5\\%$，淡水仅占约 $2.5\\%$，而能被人类直接利用的淡水不到总水量的 $1\\%$。" },
                        { type: "paragraph", text: "通过调查和数据分析，我们可以了解用水情况，增强节水意识，并从数据中发现问题、提出建议。" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="670" height="170" rx="12" fill="#E3F2FD" stroke="#5B8DEF" stroke-width="2"/><text x="340" y="28" text-anchor="middle" font-size="15" fill="#1565C0" font-weight="bold">地球水资源分布</text><circle cx="150" cy="100" r="65" fill="none" stroke="#333" stroke-width="1.5"/><path d="M 150 100 L 150 35 A 65 65 0 1 1 87 115 Z" fill="#5B8DEF" opacity="0.4"/><path d="M 150 100 L 87 115 A 65 65 0 0 1 150 35 Z" fill="#66BB6A" opacity="0.5"/><path d="M 150 100 L 150 35 A 65 65 0 0 1 152 35 Z" fill="#FF8A65"/><text x="120" y="115" font-size="11" fill="#1565C0">海水 97.5%</text><text x="180" y="70" font-size="11" fill="#2E7D32">淡水 2.5%</text><text x="340" y="55" font-size="13" fill="#333" font-weight="bold">淡水中：</text><text x="360" y="80" font-size="12" fill="#5B8DEF">• 冰川、深层地下水等：约 99%</text><text x="360" y="100" font-size="12" fill="#FF8A65" font-weight="bold">• 可直接利用的淡水：约 1%</text><text x="360" y="125" font-size="11" fill="#888">（河流、湖泊、浅层地下水等）</text><text x="340" y="155" text-anchor="middle" font-size="12" fill="#C62828" font-weight="bold">→ 可利用淡水资源极其有限，节约用水刻不容缓！</text></svg>', caption: "10-3 地球水资源分布" },
                        { type: "keypoint", label: "学习目标", text: "① 综合运用统计知识分析实际问题；<br>② 学会从数据中提取信息并做出判断；<br>③ 增强节水意识和环保意识。" },

                        { type: "heading", text: "二、统计活动的一般过程" },
                        { type: "keypoint", label: "四个步骤", text: "① <strong>收集数据</strong>：通过调查、测量、实验等方式获取数据<br>② <strong>整理数据</strong>：制作频数分布表，分类归纳<br>③ <strong>描述数据</strong>：画统计图（条形图、扇形图、直方图、折线图等）<br>④ <strong>分析数据</strong>：从统计图中提取信息，得出结论，提出建议" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="25" width="130" height="50" rx="8" fill="#5B8DEF" opacity="0.2" stroke="#5B8DEF"/><text x="85" y="48" text-anchor="middle" font-size="12" fill="#1565C0" font-weight="bold">收集数据</text><text x="85" y="65" text-anchor="middle" font-size="10" fill="#666">调查/测量</text><text x="160" y="50" font-size="16" fill="#5B8DEF">→</text><rect x="185" y="25" width="130" height="50" rx="8" fill="#66BB6A" opacity="0.2" stroke="#66BB6A"/><text x="250" y="48" text-anchor="middle" font-size="12" fill="#2E7D32" font-weight="bold">整理数据</text><text x="250" y="65" text-anchor="middle" font-size="10" fill="#666">频数分布表</text><text x="325" y="50" font-size="16" fill="#66BB6A">→</text><rect x="350" y="25" width="130" height="50" rx="8" fill="#FF8A65" opacity="0.2" stroke="#FF8A65"/><text x="415" y="48" text-anchor="middle" font-size="12" fill="#E65100" font-weight="bold">描述数据</text><text x="415" y="65" text-anchor="middle" font-size="10" fill="#666">统计图</text><text x="490" y="50" font-size="16" fill="#FF8A65">→</text><rect x="515" y="25" width="130" height="50" rx="8" fill="#AB47BC" opacity="0.2" stroke="#AB47BC"/><text x="580" y="48" text-anchor="middle" font-size="12" fill="#4A148C" font-weight="bold">分析数据</text><text x="580" y="65" text-anchor="middle" font-size="10" fill="#666">结论/建议</text></svg>', caption: "10-3 统计活动的四个步骤" },

                        { type: "heading", text: "三、数据分析实例" },
                        { type: "example", title: "例题1", question: "调查某小区 $50$ 户家庭的月用水量（吨），数据如下（部分）：$8, 10, 12, 9, 15, 11, 8, 10, 14, 7, 13, 9, 11, 16, 8, \\ldots$。已知最大值 $18$ 吨，最小值 $6$ 吨，组距 $2$ 吨。列出频数分布表并分析。", solution: "极差 $= 18-6 = 12$，组距 $2$，组数 $= 12 \\div 2 = 6$ 组。<br>分组：$6\\sim8$、$8\\sim10$、$10\\sim12$、$12\\sim14$、$14\\sim16$、$16\\sim18$<br><br>频数分布表（假设数据）：<br>$6\\sim8$ 吨：$5$ 户<br>$8\\sim10$ 吨：$12$ 户<br>$10\\sim12$ 吨：$15$ 户<br>$12\\sim14$ 吨：$10$ 户<br>$14\\sim16$ 吨：$5$ 户<br>$16\\sim18$ 吨：$3$ 户<br><br>从分布可以看出大部分家庭月用水量集中在 $8\\sim12$ 吨之间。<br>月用水量超过 $14$ 吨的家庭较少（$8$ 户），这些家庭可能有节水空间。" },

                        { type: "example", title: "例题2", question: "根据例题1的数据，若每户每月节约 $2$ 吨水，该小区每月可节约多少吨水？一年呢？", solution: "每户每月节约 $2$ 吨，$50$ 户每月节约：$50 \\times 2 = 100$ 吨。<br>一年节约：$100 \\times 12 = 1200$ 吨。<br>这是一个非常可观的数字，说明每户节约一点水，累积起来效果显著。" },

                        { type: "heading", text: "四、节水建议" },
                        { type: "tip", label: "节水小贴士", text: "① <strong>及时修理漏水</strong>的水龙头（一个滴水的水龙头一年可浪费约 $3.6$ 吨水）；<br>② <strong>缩短淋浴时间</strong>（每减少 $1$ 分钟可节约约 $8$ 升水）；<br>③ 使用<strong>节水型器具</strong>（节水龙头、节水马桶等）；<br>④ <strong>一水多用</strong>：如洗菜水浇花、洗衣水冲厕等；<br>⑤ 刷牙时<strong>关水龙头</strong>（可节约约 $20$ 升水/次）。" },

                        { type: "heading", text: "五、统计知识总结" },
                        { type: "paragraph", text: "本章我们学习了统计调查的两种方式（全面调查和抽样调查），三种统计图（条形图、扇形图、折线图），以及频数分布直方图的制作和分析。" },
                        { type: "keypoint", label: "知识框架", text: "统计调查 $\\begin{cases} \\text{全面调查（普查）} \\\\ \\text{抽样调查} \\begin{cases} \\text{总体、个体、样本、样本容量} \\\\ \\text{要求：代表性、广泛性} \\end{cases} \\end{cases}$<br><br>数据表示 $\\begin{cases} \\text{条形图（看数目）} \\\\ \\text{扇形图（看百分比）} \\\\ \\text{折线图（看趋势）} \\\\ \\text{频数分布直方图（看分布）} \\end{cases}$" }
                    ],
                    exercises: [
                        { type: "choice", question: "在进行统计调查时，下列做法不正确的是（　　）", options: ["样本要有代表性", "样本容量越大越好", "抽样要随机", "样本要有广泛性"], answer: "B", explanation: "样本容量不是越大越好，要在保证代表性的前提下，根据实际情况选择合适的样本容量。过大的样本会浪费资源。" },
                        { type: "choice", question: "在\"从数据谈节水\"课题中，最适合展示各家庭用水量分布情况的统计图是（　　）", options: ["扇形图", "条形图", "频数分布直方图", "折线图"], answer: "C", explanation: "频数分布直方图能清楚地展示用水量的分布情况（各用水量范围的家庭数量）。" },
                        { type: "choice", question: "统计调查的一般过程，正确顺序是（　　）", options: ["收集→描述→整理→分析", "收集→整理→描述→分析", "整理→收集→描述→分析", "收集→分析→整理→描述"], answer: "B", explanation: "统计调查的一般过程是：收集数据→整理数据→描述数据→分析数据。" },
                        { type: "fill", question: "统计调查的一般过程是：收集数据 → ____ 数据 → 描述数据 → 分析数据。", answer: "整理", explanation: "统计调查的一般过程是：收集数据→整理数据→描述数据→分析数据。" },
                        { type: "fill", question: "一个滴水的水龙头如果每天浪费 $10$ 升水，一年（按 $365$ 天计算）将浪费 ____ 升水。", answer: "3650", explanation: "一年浪费 $= 10 \\times 365 = 3650$ 升水。这充分说明及时修理漏水水龙头的重要性。" }
                    ]
                }
            ]
        }
    ]
};

// 合并下册数据
var mathDataDown = {
    title: "初一数学 · 下册",
    icon: "📗",
    description: "涵盖相交线与平行线、实数、平面直角坐标系、二元一次方程组、不等式与不等式组、数据的收集整理与描述六大章节",
    chapters: mathDataDownPart1.chapters.concat(mathDataDownPart2.chapters)
};
