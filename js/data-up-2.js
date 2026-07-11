// ===== 初一数学 上册数据（第二部分：第3-4章）=====
var mathDataUpPart2 = {
    chapters: [
        // ===== 第三章 一元一次方程 =====
        {
            title: "第三章 一元一次方程",
            icon: "⚖️",
            color: "#AB47BC",
            lessons: [
                {
                    id: "3-1",
                    title: "3.1 从算式到方程",
                    icon: "⚖️",
                    difficulty: "基础",
                    content: [
                        { type: "heading", text: "一、从算术到代数的飞跃" },
                        { type: "paragraph", text: "在小学阶段，我们解应用题主要用<strong>算术方法</strong>——直接用已知数列式子求未知数。但这种方法对于复杂问题往往很困难。到了初中，我们引入了<strong>方程</strong>这一强大的工具，让解题变得更加简洁和系统化。" },
                        { type: "paragraph", text: "方程的思想是：设未知数为一个字母（如 $x$），然后根据题意列出含有未知数的等式，再通过解方程求出未知数的值。这种方法比算术方法更直观、更通用。" },
                        { type: "example", title: "算术 vs 方程", question: "一个数加上5等于12，求这个数。", solution: "<strong>算术方法</strong>：$12 - 5 = 7$<br><strong>方程方法</strong>：设这个数为 $x$，列方程 $x + 5 = 12$，解得 $x = 7$<br>对于简单问题两种方法差不多，但问题越复杂，方程的优势越明显。" },
                        { type: "heading", text: "二、方程的概念" },
                        { type: "keypoint", label: "定义", text: "<strong>方程</strong>：含有未知数的等式。<br>判断条件（缺一不可）：① 是<strong>等式</strong>（有等号）；② 含有<strong>未知数</strong>。" },
                        { type: "svg", svg: '<svg viewBox="0 0 600 140" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="10" width="270" height="55" rx="10" fill="#E8F5E9" stroke="#66BB6A" stroke-width="2"/><text x="155" y="45" text-anchor="middle" font-size="16" fill="#2E7D32" font-weight="bold">2x + 3 = 7  ✓</text><text x="155" y="62" text-anchor="middle" font-size="11" fill="#666">等式 + 未知数 = 方程</text><rect x="310" y="10" width="270" height="55" rx="10" fill="#FFEBEE" stroke="#FF6B6B" stroke-width="2"/><text x="445" y="45" text-anchor="middle" font-size="16" fill="#C62828" font-weight="bold">2 + 3 = 5  ✗</text><text x="445" y="62" text-anchor="middle" font-size="11" fill="#666">等式但无未知数，不是方程</text><rect x="20" y="80" width="270" height="55" rx="10" fill="#FFEBEE" stroke="#FF6B6B" stroke-width="2"/><text x="155" y="115" text-anchor="middle" font-size="16" fill="#C62828" font-weight="bold">2x + 3  ✗</text><text x="155" y="132" text-anchor="middle" font-size="11" fill="#666">有未知数但无等号，不是方程</text><rect x="310" y="80" width="270" height="55" rx="10" fill="#E8F5E9" stroke="#66BB6A" stroke-width="2"/><text x="445" y="115" text-anchor="middle" font-size="16" fill="#2E7D32" font-weight="bold">x² - 4 = 0  ✓</text><text x="445" y="132" text-anchor="middle" font-size="11" fill="#666">等式 + 未知数 = 方程（但不是一元一次）</text></svg>', caption: "3-1 方程的判断" },
                        { type: "example", title: "例题1", question: "判断哪些是方程：$(1)$ $2+3=5$　$(2)$ $x+3=7$　$(3)$ $x+3$　$(4)$ $2x-1=3x+2$　$(5)$ $y^2=4$", solution: "$(1)$ 不是（无未知数）<br>$(2)$ 是（有等号有未知数）<br>$(3)$ 不是（无等号）<br>$(4)$ 是（有等号有未知数）<br>$(5)$ 是（有等号有未知数，但是二次方程）" },
                        { type: "heading", text: "三、一元一次方程" },
                        { type: "keypoint", label: "定义", text: "<strong>一元一次方程</strong>：只含有一个未知数，未知数的次数都是 $1$，且等号两边都是整式的方程。<br>标准形式：$ax + b = 0$（$a \\neq 0$）。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="25" width="380" height="70" rx="12" fill="#F3E5F5" stroke="#AB47BC" stroke-width="2"/><text x="250" y="65" text-anchor="middle" font-size="26" fill="#AB47BC" font-weight="bold">ax + b = 0</text><text x="250" y="88" text-anchor="middle" font-size="12" fill="#666">标准形式 (a ≠ 0)</text><text x="80" y="20" font-size="11" fill="#FF8A65">↑一次项系数</text><text x="175" y="20" font-size="11" fill="#5B8DEF">↑未知数</text><text x="245" y="20" font-size="11" fill="#66BB6A">↑常数项</text></svg>', caption: "3-2 一元一次方程标准形式" },
                        { type: "tip", label: "判断方法", text: "三个条件缺一不可：① 只含<strong>一个</strong>未知数（一元）；② 未知数的次数是<strong>1</strong>（一次）；③ 两边都是<strong>整式</strong>（分母不能含字母）。" },
                        { type: "example", title: "例题2", question: "哪些是一元一次方程？<br>$(1)$ $3x-5=7$　$(2)$ $x^2+2x=3$　$(3)$ $2x+y=5$　$(4)$ $\\frac{1}{x}=2$　$(5)$ $\\frac{x}{2}+3=5$", solution: "$(1)$ 是（一个未知数，次数1，整式）<br>$(2)$ 不是（未知数次数是2）<br>$(3)$ 不是（两个未知数）<br>$(4)$ 不是（分母含字母，不是整式）<br>$(5)$ 是（$\\frac{x}{2}=\\frac{1}{2}x$，是整式方程）" },
                        { type: "heading", text: "四、方程的解" },
                        { type: "keypoint", label: "定义", text: "使方程左右两边相等的未知数的值，叫做方程的<strong>解</strong>（一元一次方程的解也叫<strong>根</strong>）。" },
                        { type: "paragraph", text: "检验一个数是否是方程的解，只需将这个数代入方程，看左右两边是否相等。" },
                        { type: "example", title: "例题3", question: "检验 $x=3$ 和 $x=-1$ 是否是方程 $2x+1=7$ 的解。", solution: "当 $x=3$ 时：左边 $= 2\\times3+1=7$，右边 $= 7$，左边 $=$ 右边，所以 $x=3$ 是方程的解。<br>当 $x=-1$ 时：左边 $= 2\\times(-1)+1=-1$，右边 $=7$，左边 $\\neq$ 右边，所以 $x=-1$ 不是方程的解。" },
                        { type: "heading", text: "五、等式的性质" },
                        { type: "paragraph", text: "等式的性质是解方程的理论基础。我们可以把等式想象成一个<strong>天平</strong>——等号两边就是天平的两边，等号表示天平平衡。" },
                        { type: "keypoint", label: "等式性质1", text: "等式两边同时加（或减）同一个数或式子，结果仍相等。<br>$$\\text{若 } a = b, \\text{ 则 } a \\pm c = b \\pm c$$" },
                        { type: "keypoint", label: "等式性质2", text: "等式两边同时乘（或除以）同一个不为 $0$ 的数，结果仍相等。<br>$$\\text{若 } a = b, \\text{ 则 } a \\times c = b \\times c \\;\\; (c \\neq 0 \\text{ 时 } \\frac{a}{c} = \\frac{b}{c})$$" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg"><line x1="250" y1="15" x2="250" y2="45" stroke="#666" stroke-width="2"/><line x1="150" y1="45" x2="350" y2="45" stroke="#666" stroke-width="3"/><line x1="150" y1="45" x2="150" y2="70" stroke="#999" stroke-width="1.5"/><line x1="350" y1="45" x2="350" y2="70" stroke="#999" stroke-width="1.5"/><rect x="120" y="70" width="60" height="35" rx="6" fill="#5B8DEF"/><text x="150" y="93" text-anchor="middle" font-size="15" fill="#fff" font-weight="bold">a</text><rect x="320" y="70" width="60" height="35" rx="6" fill="#66BB6A"/><text x="350" y="93" text-anchor="middle" font-size="15" fill="#fff" font-weight="bold">b</text><text x="250" y="38" text-anchor="middle" font-size="12" fill="#666">a = b（天平平衡）</text><rect x="120" y="120" width="60" height="35" rx="6" fill="#5B8DEF"/><text x="150" y="143" text-anchor="middle" font-size="15" fill="#fff" font-weight="bold">a+c</text><rect x="320" y="120" width="60" height="35" rx="6" fill="#66BB6A"/><text x="350" y="143" text-anchor="middle" font-size="15" fill="#fff" font-weight="bold">b+c</text><text x="250" y="143" text-anchor="middle" font-size="12" fill="#FF8A65" font-weight="bold">两边同时加c → 仍平衡</text></svg>', caption: "3-3 等式性质的天平模型" },
                        { type: "warn", label: "注意", text: "等式性质2中，除以的数<strong>不能为0</strong>！因为0不能作除数。但加0、减0、乘0都是可以的（乘0后两边都变0，等式仍成立，但信息丢失了）。" },
                        { type: "example", title: "例题4", question: "利用等式的性质解方程：$(1)$ $x - 5 = 8$　$(2)$ $3x = 15$　$(3)$ $-2x + 7 = 1$", solution: "$(1)$ 两边同加5：$x = 8 + 5 = 13$<br>$(2)$ 两边同除以3：$x = 15 \\div 3 = 5$<br>$(3)$ 两边同减7：$-2x = -6$，两边同除以$-2$：$x = 3$" },
                        { type: "heading", text: "六、知识拓展" },
                        { type: "paragraph", text: "方程的思想是数学中最重要的思想之一。古代数学家花拉子米（Al-Khwarizmi，约公元780-850年）在著作中系统地研究了方程的解法，他的名字演变成了英文单词 \"algebra\"（代数）。中国古代的《九章算术》中也记载了大量方程问题。" },
                        { type: "paragraph", text: "现代数学中，方程的应用无处不在。物理学中的运动方程、化学中的配平方程式、经济学中的供需平衡方程，都是方程思想的体现。掌握好一元一次方程，是学习更复杂数学的基础。" }
                    ],
                    exercises: [
                        { type: "choice", question: "下列式子中是方程的是（　　）", options: ["$3+5=8$", "$2x-3$", "$x-4=6$", "$\\frac{1}{2}x+1$"], answer: "C", explanation: "方程需同时满足：含等号和含未知数。只有 $x-4=6$ 同时满足。" },
                        { type: "choice", question: "下列是一元一次方程的是（　　）", options: ["$x^2-1=0$", "$3x+2y=7$", "$\\frac{x}{2}+3=5$", "$\\frac{2}{x}=4$"], answer: "C", explanation: "$\\frac{x}{2}+3=5$ 可化为 $\\frac{1}{2}x+3=5$，一个未知数、次数1、整式方程。其余分别不符合条件。" },
                        { type: "choice", question: "已知 $x=3$ 是方程 $2x-a=5$ 的解，则 $a$ 的值是（　　）", options: ["$1$", "$2$", "$3$", "$11$"], answer: "A", explanation: "代入$x=3$：$2\\times3-a=5$，$6-a=5$，$a=1$。" },
                        { type: "fill", question: "已知 $x=2$ 是方程 $3x-k=5$ 的解，则 $k = $ ____。", answer: "1", explanation: "代入 $x=2$：$3\\times2-k=5$，$6-k=5$，$k=1$。" },
                        { type: "fill", question: "若 $2x+3=7$，则 $2x = $ ____，$x = $ ____。", answer: "4,2", explanation: "由等式性质1，两边同减3：$2x=7-3=4$。由等式性质2，两边同除以2：$x=2$。" }
                    ]
                },
                {
                    id: "3-2",
                    title: "3.2 解一元一次方程（一）—— 合并同类项与移项",
                    icon: "🔑",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、合并同类项解方程" },
                        { type: "paragraph", text: "当方程中含有未知数的项有多个时，需要先合并同类项，把方程化简为更简单的形式。这是解方程的第一步。" },
                        { type: "keypoint", label: "合并同类项", text: "把方程中含有未知数的同类项合并，常数项也合并，使方程变得更简洁。" },
                        { type: "example", title: "例题1", question: "解方程：$3x - 5x = -8$", solution: "合并同类项：$(3-5)x = -8$，即 $-2x = -8$<br>系数化为1（两边同除以$-2$）：$x = \\frac{-8}{-2} = 4$" },
                        { type: "example", title: "例题2", question: "解方程：$\\frac{1}{2}x + \\frac{1}{3}x = 5$", solution: "合并同类项：$\\frac{3}{6}x + \\frac{2}{6}x = 5$，即 $\\frac{5}{6}x = 5$<br>系数化为1：$x = 5 \\times \\frac{6}{5} = 6$" },
                        { type: "tip", label: "技巧", text: "合并同类项时，如果是分数系数，可以先通分再合并。合并后把未知数的系数化为1（两边同除以未知数的系数）。" },
                        { type: "heading", text: "二、移项" },
                        { type: "paragraph", text: "<strong>移项</strong>是解方程的核心技巧。当未知数和常数项混在等号两边时，我们需要把它们分别集中到等号的两边——这就是移项。" },
                        { type: "keypoint", label: "重点法则", text: "<strong>移项</strong>：把方程中的某一项改变符号后，从方程的一边移到另一边。<br><strong>移项要变号！</strong>（\"$+$\" 变 \"$-$\"，\"$-$\" 变 \"$+$\"）" },
                        { type: "svg", svg: '<svg viewBox="0 0 600 90" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="580" height="65" rx="10" fill="#E8F0FE" stroke="#5B8DEF" stroke-width="1.5"/><text x="30" y="50" font-size="17" fill="#333">3x</text><text x="75" y="50" font-size="17" fill="#FF6B6B" font-weight="bold">+ 5</text><text x="110" y="50" font-size="17" fill="#333">=</text><text x="140" y="50" font-size="17" fill="#333">2x</text><text x="185" y="50" font-size="17" fill="#66BB6A" font-weight="bold">- 3</text><path d="M 85 35 Q 200 8 330 35" fill="none" stroke="#FF6B6B" stroke-width="2" stroke-dasharray="3,2"/><text x="200" y="12" font-size="11" fill="#FF6B6B">+5 移到右边变 -5</text><path d="M 340 50 Q 280 78 165 50" fill="none" stroke="#66BB6A" stroke-width="2" stroke-dasharray="3,2"/><text x="210" y="72" font-size="11" fill="#66BB6A">-3 移到左边变 +3</text><text x="370" y="50" font-size="16" fill="#333">→ 3x - 2x = -3 - 5</text></svg>', caption: "3-4 移项规则示意" },
                        { type: "paragraph", text: "移项的本质是利用等式性质1：等式两边同时加（或减）同一个数，结果仍相等。比如 $3x + 5 = 2x - 3$，两边同减 $2x$、同减 $5$，就得到 $3x - 2x = -3 - 5$。" },
                        { type: "warn", label: "易错点", text: "移项必须<strong>变号</strong>！\"$+$\" 变 \"$-$\"，\"$-$\" 变 \"$+$\"。不变号是最常见错误。<br>注意：只有从等号一边移到另一边才需要变号，在<strong>同一边</strong>交换位置<strong>不需要</strong>变号。" },
                        { type: "example", title: "例题3", question: "解方程：$3x + 5 = 2x - 3$", solution: "移项（未知数移到左边，常数移到右边）：<br>$3x - 2x = -3 - 5$<br>合并：$x = -8$" },
                        { type: "example", title: "例题4", question: "解方程：$7x - 3 = 4x + 9$", solution: "移项：$7x - 4x = 9 + 3$<br>合并：$3x = 12$<br>系数化为1：$x = 4$<br>检验：左边 $= 7\\times4-3=25$，右边 $= 4\\times4+9=25$ ✓" },
                        { type: "heading", text: "三、解方程步骤（基础）" },
                        { type: "keypoint", label: "步骤", text: "① <strong>合并同类项</strong>（把同类的项先合并）；② <strong>移项</strong>（未知数移一边，常数移另一边）；③ <strong>再合并同类项</strong>；④ <strong>系数化为1</strong>（两边同除以未知数的系数）" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 80" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="15" width="140" height="50" rx="10" fill="#FF8A65"/><text x="80" y="45" text-anchor="middle" font-size="13" fill="#fff" font-weight="bold">合并同类项</text><text x="160" y="45" font-size="14" fill="#999">→</text><rect x="180" y="15" width="100" height="50" rx="10" fill="#5B8DEF"/><text x="230" y="45" text-anchor="middle" font-size="13" fill="#fff" font-weight="bold">移项</text><text x="290" y="45" font-size="14" fill="#999">→</text><rect x="310" y="15" width="140" height="50" rx="10" fill="#AB47BC"/><text x="380" y="45" text-anchor="middle" font-size="13" fill="#fff" font-weight="bold">再合并同类项</text><text x="460" y="45" font-size="14" fill="#999">→</text><rect x="480" y="15" width="180" height="50" rx="10" fill="#66BB6A"/><text x="570" y="45" text-anchor="middle" font-size="13" fill="#fff" font-weight="bold">系数化为1</text></svg>', caption: "3-5 解方程基础步骤" },
                        { type: "example", title: "例题5", question: "解方程：$5x - 3 + 2x = 4x + 9$", solution: "合并同类项：$7x - 3 = 4x + 9$<br>移项：$7x - 4x = 9 + 3$<br>合并：$3x = 12$<br>系数化为1：$x = 4$" },
                        { type: "example", title: "例题6", question: "解方程：$3(x-2) = x + 4$（先去括号再解）", solution: "去括号：$3x - 6 = x + 4$<br>移项：$3x - x = 4 + 6$<br>合并：$2x = 10$<br>系数化为1：$x = 5$" },
                        { type: "tip", label: "检验的习惯", text: "解完方程后，把求得的解代入原方程检验，看左右两边是否相等。这是一个好习惯，可以帮助你发现计算错误。" },
                        { type: "heading", text: "四、知识拓展" },
                        { type: "paragraph", text: "移项这个看似简单的操作，其实蕴含着深刻的数学原理。它基于等式的基本性质，是代数运算的基础。在后续学习中，你会遇到更复杂的方程（如二元一次方程组、一元二次方程等），但移项的思想始终贯穿其中。" },
                        { type: "paragraph", text: "在计算机科学中，解方程的算法也是自动推理和符号计算的基础。比如计算机代数系统可以自动求解各种复杂的方程，其核心步骤与我们这里学的移项、合并同类项等操作是一致的。" }
                    ],
                    exercises: [
                        { type: "choice", question: "方程 $2x-3=5$ 的解是（　　）", options: ["$x=1$", "$x=2$", "$x=3$", "$x=4$"], answer: "D", explanation: "移项：$2x=5+3=8$，$x=8\\div2=4$。验证：$2\\times4-3=5$ ✓" },
                        { type: "choice", question: "解方程 $3x+2=5x-6$，移项正确的是（　　）", options: ["$3x+5x=-6+2$", "$3x-5x=-6-2$", "$3x-5x=-6+2$", "$3x+5x=6-2$"], answer: "B", explanation: "移项要变号：$5x$移到左边变$-5x$，$+2$移到右边变$-2$。得 $3x-5x=-6-2$。" },
                        { type: "choice", question: "方程 $5x-2=3x+6$ 的解是（　　）", options: ["$x=2$", "$x=3$", "$x=4$", "$x=5$"], answer: "C", explanation: "移项：$5x-3x=6+2$，$2x=8$，$x=4$。验证：$5\\times4-2=18$，$3\\times4+6=18$ ✓" },
                        { type: "fill", question: "解方程：$4x-7+2x=3x+8$，则 $x = $ ____", answer: "5", explanation: "合并：$6x-7=3x+8$。移项：$6x-3x=8+7$。$3x=15$，$x=5$。" },
                        { type: "fill", question: "若 $3(x-2) = 2x+1$，则 $x = $ ____。", answer: "7", explanation: "去括号：$3x-6=2x+1$。移项：$3x-2x=1+6$。$x=7$。" }
                    ]
                },
                {
                    id: "3-3",
                    title: "3.3 解一元一次方程（二）—— 去括号与去分母",
                    icon: "🔓",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、去括号" },
                        { type: "paragraph", text: "当方程中含有括号时，需要先去括号才能进行移项和合并同类项。去括号的法则和整式加减中的去括号法则一致。" },
                        { type: "keypoint", label: "去括号法则", text: "① 括号前\"$+$\"号，各项<strong>不变号</strong>；<br>② 括号前\"$-$\"号，各项<strong>都变号</strong>；<br>③ 括号前有数字因数时，用<strong>分配律</strong>乘每一项。" },
                        { type: "warn", label: "易错点", text: "括号前有数字因数时，要用分配律把数字乘以括号内的<strong>每一项</strong>，不能漏乘！<br>如 $3(x-2) = 3x - 6$，不是 $3x - 2$。" },
                        { type: "example", title: "例题1", question: "解方程：$3(x-2)-2(2x+1)=5$", solution: "去括号：$3x-6-4x-2=5$<br>合并：$-x-8=5$<br>移项：$-x=13$<br>系数化为1：$x=-13$" },
                        { type: "example", title: "例题2", question: "解方程：$5-3(2x-4)=2x+7$", solution: "去括号：$5-6x+12=2x+7$<br>合并：$17-6x=2x+7$<br>移项：$-6x-2x=7-17$<br>合并：$-8x=-10$<br>系数化为1：$x=\\frac{-10}{-8}=\\frac{5}{4}$" },
                        { type: "heading", text: "二、去分母" },
                        { type: "paragraph", text: "当方程中含有分数系数时，直接计算比较麻烦。我们可以利用等式性质2，在方程两边同时乘以各分母的<strong>最小公倍数</strong>，把所有分母去掉，使方程变成整数系数的方程。" },
                        { type: "keypoint", label: "重点步骤", text: "方程两边同时乘以各分母的<strong>最小公倍数</strong>，去掉分母。" },
                        { type: "svg", svg: '<svg viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="280" height="80" rx="10" fill="#E8F0FE" stroke="#5B8DEF" stroke-width="2"/><text x="150" y="40" text-anchor="middle" font-size="16" fill="#333">x-1  -  x+2  = 1</text><text x="120" y="60" text-anchor="middle" font-size="12" fill="#5B8DEF">2    3</text><text x="150" y="82" text-anchor="middle" font-size="12" fill="#666">含分数的方程</text><text x="300" y="55" font-size="20" fill="#AB47BC" font-weight="bold">×</text><text x="325" y="55" font-size="16" fill="#AB47BC" font-weight="bold">6</text><text x="355" y="55" font-size="14" fill="#666">(最小公倍数)</text><text x="420" y="55" font-size="20" fill="#AB47BC" font-weight="bold">→</text><rect x="460" y="10" width="130" height="80" rx="10" fill="#E8F5E9" stroke="#66BB6A" stroke-width="2"/><text x="525" y="50" text-anchor="middle" font-size="14" fill="#2E7D32" font-weight="bold">3(x-1)-2(x+2)</text><text x="525" y="72" text-anchor="middle" font-size="14" fill="#2E7D32" font-weight="bold">= 6</text></svg>', caption: "3-6 去分母的过程" },
                        { type: "warn", label: "易错点", text: "去分母时三个常见错误：<br>① <strong>不要漏乘</strong>没有分母的项！每一项都要乘以最小公倍数。<br>② <strong>分子要加括号</strong>！如 $\\frac{x-1}{2}$ 去分母后写成 $3(x-1)$，不能写成 $3x-1$。<br>③ <strong>分子是多项式时</strong>，去分母后分子整体要加括号。" },
                        { type: "example", title: "例题3", question: "解方程：$\\frac{x-1}{2}-\\frac{x+2}{3}=1$", solution: "去分母（两边同乘6，6是2和3的最小公倍数）：<br>$3(x-1)-2(x+2)=6$<br>去括号：$3x-3-2x-4=6$<br>合并：$x-7=6$<br>移项：$x=13$" },
                        { type: "example", title: "例题4", question: "解方程：$\\frac{2x+1}{3}=\\frac{x-1}{2}+2$", solution: "去分母（两边同乘6）：<br>$2(2x+1)=3(x-1)+12$<br>去括号：$4x+2=3x-3+12$<br>合并：$4x+2=3x+9$<br>移项：$4x-3x=9-2$<br>$x=7$" },
                        { type: "tip", label: "找最小公倍数的技巧", text: "找各分母的最小公倍数：① 如果分母互质（如2和3），最小公倍数是它们的乘积（6）；② 如果分母有倍数关系（如2和4），最小公倍数是较大的那个（4）；③ 如果分母有公因数（如4和6），先分解质因数再取最大值（12）。" },
                        { type: "heading", text: "三、解方程完整步骤" },
                        { type: "keypoint", label: "五步法", text: "① <strong>去分母</strong>（两边同乘各分母的最小公倍数）→ ② <strong>去括号</strong>（用分配律）→ ③ <strong>移项</strong>（未知数移一边，常数移另一边，注意变号）→ ④ <strong>合并同类项</strong> → ⑤ <strong>系数化为1</strong>（两边同除以未知数的系数）" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 80" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="15" width="120" height="50" rx="10" fill="#FF8A65"/><text x="70" y="45" text-anchor="middle" font-size="13" fill="#fff" font-weight="bold">①去分母</text><text x="140" y="45" font-size="14" fill="#999">→</text><rect x="160" y="15" width="120" height="50" rx="10" fill="#5B8DEF"/><text x="220" y="45" text-anchor="middle" font-size="13" fill="#fff" font-weight="bold">②去括号</text><text x="290" y="45" font-size="14" fill="#999">→</text><rect x="310" y="15" width="100" height="50" rx="10" fill="#AB47BC"/><text x="360" y="45" text-anchor="middle" font-size="13" fill="#fff" font-weight="bold">③移项</text><text x="420" y="45" font-size="14" fill="#999">→</text><rect x="440" y="15" width="120" height="50" rx="10" fill="#66BB6A"/><text x="500" y="45" text-anchor="middle" font-size="13" fill="#fff" font-weight="bold">④合并同类项</text><text x="570" y="45" font-size="14" fill="#999">→</text><rect x="590" y="15" width="80" height="50" rx="10" fill="#26A69A"/><text x="630" y="45" text-anchor="middle" font-size="13" fill="#fff" font-weight="bold">⑤系数化1</text></svg>', caption: "3-7 解一元一次方程五步法" },
                        { type: "example", title: "例题5（综合）", question: "解方程：$\\frac{2x+1}{3}-\\frac{x-1}{2}=\\frac{5x+1}{6}$", solution: "去分母（乘6）：$2(2x+1)-3(x-1)=5x+1$<br>去括号：$4x+2-3x+3=5x+1$<br>合并：$x+5=5x+1$<br>移项：$x-5x=1-5$<br>合并：$-4x=-4$<br>系数化为1：$x=1$" },
                        { type: "example", title: "例题6（综合）", question: "解方程：$\\frac{3x-2}{4}-\\frac{x+1}{3}=\\frac{1}{2}$", solution: "去分母（乘12）：$3(3x-2)-4(x+1)=6$<br>去括号：$9x-6-4x-4=6$<br>合并：$5x-10=6$<br>移项：$5x=16$<br>系数化为1：$x=\\frac{16}{5}$" },
                        { type: "heading", text: "四、知识拓展" },
                        { type: "paragraph", text: "解一元一次方程的五步法是一个通用的解题框架，适用于所有一元一次方程。但并不是每个方程都需要全部五步——有些方程可能不需要去分母，有些可能不需要去括号。要根据方程的具体形式灵活选择。" },
                        { type: "paragraph", text: "在更高阶的数学中，一元一次方程的思想被推广到了多元方程组、高次方程、微分方程等领域。无论多么复杂的方程，其核心思想都是：通过一系列变形，把未知数\"孤立\"出来，最终求出它的值。" },
                        { type: "tip", label: "学习建议", text: "解方程的关键在于<strong>细心</strong>和<strong>规范</strong>。每一步都要写清楚，不要跳步。特别是去分母和去括号这两步，最容易出错。养成检验的好习惯，把解代入原方程验证。" }
                    ],
                    exercises: [
                        { type: "choice", question: "解方程 $2(x-3)=4$，正确的结果是（　　）", options: ["$x=1$", "$x=3$", "$x=5$", "$x=7$"], answer: "C", explanation: "去括号：$2x-6=4$，$2x=10$，$x=5$。验证：$2(5-3)=4$ ✓" },
                        { type: "choice", question: "解方程 $\\frac{x}{2}-1=\\frac{x-1}{3}$，去分母正确的是（　　）", options: ["$3x-1=2(x-1)$", "$3x-6=2(x-1)$", "$3x-1=2x-1$", "$3x-6=x-1$"], answer: "B", explanation: "两边同乘6，每一项都乘：$\\frac{x}{2}\\times6-1\\times6=\\frac{x-1}{3}\\times6$，即 $3x-6=2(x-1)$。常数项$-1$也要乘6。" },
                        { type: "choice", question: "方程 $\\frac{x+1}{2}-\\frac{2x-1}{3}=1$ 的解是（　　）", options: ["$x=1$", "$x=-1$", "$x=5$", "$x=-5$"], answer: "B", explanation: "去分母（乘6）：$3(x+1)-2(2x-1)=6$，去括号：$3x+3-4x+2=6$，合并：$-x+5=6$，$-x=1$，$x=-1$。" },
                        { type: "fill", question: "解方程：$\\frac{3x-1}{4}-1=\\frac{2x+1}{3}$，则 $x = $ ____", answer: "19", explanation: "去分母（乘12）：$3(3x-1)-12=4(2x+1)$，去括号：$9x-3-12=8x+4$，合并：$9x-15=8x+4$，移项：$x=19$。" },
                        { type: "fill", question: "解方程：$2(3x-1)-(x+4)=3(x-2)+4$，则 $x = $ ____。", answer: "-2", explanation: "去括号：$6x-2-x-4=3x-6+4$，合并：$5x-6=3x-2$，移项：$5x-3x=-2+6$，$2x=4$...不对，让我重算：移项 $5x-3x=-2+6$，$2x=4$，$x=2$？但答案给的是-2。让我重新化简：左边 $6x-2-x-4=5x-6$；右边 $3x-6+4=3x-2$。$5x-6=3x-2$，$2x=4$，$x=2$。答案应该是2。", answer: "2", explanation: "去括号：$6x-2-x-4=3x-6+4$，合并：$5x-6=3x-2$，移项：$5x-3x=-2+6$，$2x=4$，$x=2$。" }
                    ]
                },
                {
                    id: "3-4",
                    title: "3.4 实际问题与一元一次方程",
                    icon: "📐",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、列方程解应用题的步骤" },
                        { type: "paragraph", text: "学习了一元一次方程的解法后，我们就可以用它来解决实际生活中的问题了。列方程解应用题是初中数学的重要内容，也是考试的热点。" },
                        { type: "keypoint", label: "解题步骤", text: "① <strong>审题</strong>：读懂题意，找出已知量和未知量，确定等量关系<br>② <strong>设未知数</strong>：用字母表示未知量（通常设所求的量为 $x$）<br>③ <strong>列方程</strong>：根据等量关系列出方程<br>④ <strong>解方程</strong>：求出未知数的值<br>⑤ <strong>检验作答</strong>：检验解是否符合题意，写出答案" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 80" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="15" width="110" height="50" rx="10" fill="#FF8A65"/><text x="65" y="45" text-anchor="middle" font-size="14" fill="#fff" font-weight="bold">审题</text><text x="130" y="45" font-size="16" fill="#999">→</text><rect x="150" y="15" width="110" height="50" rx="10" fill="#5B8DEF"/><text x="205" y="45" text-anchor="middle" font-size="14" fill="#fff" font-weight="bold">设未知数</text><text x="270" y="45" font-size="16" fill="#999">→</text><rect x="290" y="15" width="110" height="50" rx="10" fill="#AB47BC"/><text x="345" y="45" text-anchor="middle" font-size="14" fill="#fff" font-weight="bold">列方程</text><text x="410" y="45" font-size="16" fill="#999">→</text><rect x="430" y="15" width="110" height="50" rx="10" fill="#66BB6A"/><text x="485" y="45" text-anchor="middle" font-size="14" fill="#fff" font-weight="bold">解方程</text><text x="550" y="45" font-size="16" fill="#999">→</text><rect x="570" y="15" width="100" height="50" rx="10" fill="#26A69A"/><text x="620" y="45" text-anchor="middle" font-size="14" fill="#fff" font-weight="bold">检验作答</text></svg>', caption: "3-8 列方程解应用题步骤" },
                        { type: "tip", label: "设未知数的技巧", text: "① <strong>直接设</strong>：问什么就设什么为 $x$；<br>② <strong>间接设</strong>：有时直接设不好列方程，可以设另一个量为 $x$，先求出它再求目标量；<br>③ 设未知数时要写清单位。" },
                        { type: "heading", text: "二、和差倍分问题" },
                        { type: "keypoint", label: "类型一：和差倍分问题", text: "<strong>等量关系</strong>：总量 $=$ 各部分之和；大数 $-$ 小数 $=$ 差；几倍量 $=$ 基数 $\\times$ 倍数。" },
                        { type: "example", title: "例题1（和倍问题）", question: "甲、乙两数之和为 $40$，甲数是乙数的 $3$ 倍，求甲、乙两数。", solution: "设乙数为 $x$，甲数为 $3x$。<br>列方程：$x + 3x = 40$<br>$4x = 40$，$x = 10$<br>乙数 $= 10$，甲数 $= 3 \\times 10 = 30$" },
                        { type: "example", title: "例题2（差倍问题）", question: "甲数比乙数大 $15$，甲数是乙数的 $4$ 倍，求甲、乙两数。", solution: "设乙数为 $x$，甲数为 $4x$。<br>列方程：$4x - x = 15$<br>$3x = 15$，$x = 5$<br>乙数 $= 5$，甲数 $= 4 \\times 5 = 20$" },
                        { type: "heading", text: "三、行程问题" },
                        { type: "keypoint", label: "类型二：行程问题", text: "<strong>基本公式</strong>：路程 $=$ 速度 $\\times$ 时间<br><strong>相遇问题</strong>：两人路程之和 $=$ 总路程<br><strong>追及问题</strong>：快者路程 $-$ 慢者路程 $=$ 原来距离<br><strong>航行问题</strong>：顺水速度 $=$ 静水速度 $+$ 水流速度；逆水速度 $=$ 静水速度 $-$ 水流速度" },
                        { type: "svg", svg: '<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg"><text x="20" y="25" font-size="14" fill="#5B8DEF" font-weight="bold">相遇问题</text><circle cx="30" cy="55" r="8" fill="#5B8DEF"/><text x="20" y="80" font-size="12" fill="#5B8DEF">甲</text><circle cx="570" cy="55" r="8" fill="#FF6B6B"/><text x="562" y="80" font-size="12" fill="#FF6B6B">乙</text><line x1="45" y1="55" x2="280" y2="55" stroke="#5B8DEF" stroke-width="2" stroke-dasharray="5,3"/><line x1="320" y1="55" x2="555" y2="55" stroke="#FF6B6B" stroke-width="2" stroke-dasharray="5,3"/><text x="300" y="48" text-anchor="middle" font-size="11" fill="#666">相遇点</text><circle cx="300" cy="55" r="5" fill="#66BB6A"/><text x="150" y="42" font-size="11" fill="#5B8DEF">甲走的路程</text><text x="450" y="42" font-size="11" fill="#FF6B6B">乙走的路程</text><text x="20" y="105" font-size="12" fill="#333">甲路程 + 乙路程 = 总距离</text><text x="20" y="140" font-size="14" fill="#66BB6A" font-weight="bold">追及问题</text><circle cx="50" cy="130" r="8" fill="#5B8DEF"/><text x="40" y="155" font-size="12" fill="#5B8DEF">快者</text><circle cx="200" cy="130" r="8" fill="#FF6B6B"/><text x="190" y="155" font-size="12" fill="#FF6B6B">慢者</text><line x1="60" y1="130" x2="180" y2="130" stroke="#999" stroke-width="1"/><line x1="210" y1="130" x2="450" y2="130" stroke="#FF6B6B" stroke-width="2" stroke-dasharray="5,3"/><line x1="60" y1="130" x2="450" y2="130" stroke="#5B8DEF" stroke-width="2" stroke-dasharray="5,3"/><text x="300" y="125" font-size="11" fill="#666">追及点</text><circle cx="450" cy="130" r="5" fill="#66BB6A"/><text x="100" y="120" font-size="11" fill="#5B8DEF">快者路程</text><text x="330" y="120" font-size="11" fill="#FF6B6B">慢者路程</text></svg>', caption: "3-9 相遇问题与追及问题" },
                        { type: "example", title: "例题3（相遇问题）", question: "甲、乙两地相距 $420$ 千米，客车每小时行 $60$ 千米，货车每小时行 $40$ 千米，两车同时相向而行，几小时后相遇？", solution: "设 $x$ 小时后相遇。<br>客车路程 $= 60x$，货车路程 $= 40x$<br>列方程：$60x + 40x = 420$<br>$100x = 420$，$x = 4.2$<br>答：$4.2$ 小时后相遇。" },
                        { type: "example", title: "例题4（追及问题）", question: "甲在乙前方 $100$ 米处，甲每秒走 $3$ 米，乙每秒走 $5$ 米，两人同时同向而行，乙几秒后追上甲？", solution: "设 $x$ 秒后追上。<br>乙走的路程 $-$ 甲走的路程 $=$ 原来距离<br>$5x - 3x = 100$<br>$2x = 100$，$x = 50$<br>答：$50$ 秒后追上。" },
                        { type: "heading", text: "四、利润问题" },
                        { type: "keypoint", label: "类型三：利润问题", text: "<strong>公式</strong>：<br>利润 $=$ 售价 $-$ 进价（成本）<br>利润率 $= \\frac{\\text{利润}}{\\text{进价}} \\times 100\\%$<br>售价 $=$ 进价 $\\times(1 +$ 利润率$)$<br>打折售价 $=$ 标价 $\\times$ 折扣" },
                        { type: "example", title: "例题5（利润问题）", question: "一件商品进价 $200$ 元，按标价 $8$ 折出售仍可获利 $20\\%$，求标价。", solution: "设标价 $x$ 元。售价 $= 0.8x$<br>利润 $= 0.8x - 200$，利润 $= 200 \\times 20\\% = 40$<br>列方程：$0.8x - 200 = 40$<br>$0.8x = 240$，$x = 300$<br>答：标价 $300$ 元。" },
                        { type: "example", title: "例题6（打折问题）", question: "一件商品原价 $500$ 元，先涨价 $10\\%$，再打 $9$ 折出售，求实际售价。比原价高还是低？", solution: "涨价后价格 $= 500 \\times (1 + 10\\%) = 550$ 元<br>打折后售价 $= 550 \\times 0.9 = 495$ 元<br>与原价比较：$495 < 500$，比原价低 $5$ 元。" },
                        { type: "heading", text: "五、其他常见类型" },
                        { type: "keypoint", label: "类型四：工程问题", text: "<strong>公式</strong>：工作量 $=$ 工作效率 $\\times$ 工作时间<br>各部分工作量之和 $=$ 总工作量（通常设总工作量为 $1$）" },
                        { type: "example", title: "例题7（工程问题）", question: "一项工程，甲单独做需 $10$ 天完成，乙单独做需 $15$ 天完成，两人合作需几天完成？", solution: "设合作需 $x$ 天。<br>甲效率 $= \\frac{1}{10}$，乙效率 $= \\frac{1}{15}$<br>列方程：$\\frac{x}{10} + \\frac{x}{15} = 1$<br>去分母（乘30）：$3x + 2x = 30$<br>$5x = 30$，$x = 6$<br>答：合作需 $6$ 天完成。" },
                        { type: "keypoint", label: "类型五：年龄问题", text: "<strong>关键</strong>：两人年龄差不变。不管过多少年，两人的年龄差始终保持不变。" },
                        { type: "example", title: "例题8（年龄问题）", question: "父亲今年 $40$ 岁，儿子今年 $12$ 岁，几年后父亲的年龄是儿子的 $2$ 倍？", solution: "设 $x$ 年后。<br>列方程：$40 + x = 2(12 + x)$<br>$40 + x = 24 + 2x$<br>$x = 16$<br>答：$16$ 年后。" },
                        { type: "tip", label: "解题总结", text: "列方程解应用题的关键是<strong>找等量关系</strong>。常见的找等量关系的方法：① 抓住题目中的关键词（\"是\"\"等于\"\"比...多/少\"\"共\"等）；② 利用基本公式（路程=速度×时间等）；③ 画图帮助分析（行程问题画线段图）。" }
                    ],
                    exercises: [
                        { type: "choice", question: "甲班有 $x$ 人，乙班人数比甲班的 $2$ 倍少 $5$ 人，两班共有 $70$ 人。下列方程正确的是（　　）", options: ["$x+2x=70$", "$x+2x-5=70$", "$x+2x+5=70$", "$2x-5=70$"], answer: "B", explanation: "甲班$x$人，乙班$(2x-5)$人。$x+(2x-5)=70$，即$x+2x-5=70$。" },
                        { type: "choice", question: "一件商品进价 $100$ 元，售价 $120$ 元，则利润率是（　　）", options: ["$16.7\\%$", "$20\\%$", "$25\\%$", "$120\\%$"], answer: "B", explanation: "利润 $=120-100=20$。利润率 $=\\frac{20}{100}\\times100\\%=20\\%$。" },
                        { type: "choice", question: "甲乙两人从同一地点背向而行，甲速 $5$ km/h，乙速 $4$ km/h，几小时后相距 $27$ km？", options: ["$2$ 小时", "$3$ 小时", "$4$ 小时", "$5$ 小时"], answer: "B", explanation: "设$x$小时后。$5x+4x=27$，$9x=27$，$x=3$。" },
                        { type: "fill", question: "一项工程，甲单独做需 $12$ 天，乙单独做需 $6$ 天，两人合作需 ____ 天完成。", answer: "4", explanation: "设合作需$x$天。$\\frac{x}{12}+\\frac{x}{6}=1$，去分母：$x+2x=12$，$3x=12$，$x=4$。" },
                        { type: "fill", question: "一件商品标价 $400$ 元，打 $8$ 折后仍获利 $20\\%$，则进价是 ____ 元。", answer: "240", explanation: "售价$=400\\times0.8=320$元。设进价$x$元：$320-x=20\\%x$，$320=1.2x$，$x\\approx266.7$？让我重算：$320=1.2x$，$x=320/1.2=266.67$。但这不太对。让我重新看：售价$=$进价$\\times(1+$利润率$)$，$320=x(1+0.2)$，$x=320/1.2\\approx266.7$。但答案给的是240...让我检查：如果进价240，利润$=320-240=80$，利润率$=80/240=33.3\\%$，不是20%。如果进价$=x$，利润率$=\\frac{320-x}{x}=20\\%$，$320-x=0.2x$，$320=1.2x$，$x=266.7$。所以答案应该是$266.7$或$\\frac{800}{3}$。让我改答案。", answer: "266.7", explanation: "售价$=400\\times0.8=320$元。设进价$x$元，利润率$=\\frac{320-x}{x}=20\\%$，$320-x=0.2x$，$320=1.2x$，$x=\\frac{320}{1.2}\\approx266.7$元。" }
                    ]
                }
            ]
        },
        // ===== 第四章 几何图形初步 =====
        {
            title: "第四章 几何图形初步",
            icon: "📐",
            color: "#26A69A",
            lessons: [
                {
                    id: "4-1",
                    title: "4.1 几何图形",
                    icon: "🔷",
                    difficulty: "基础",
                    content: [
                        { type: "heading", text: "一、生活中的几何图形" },
                        { type: "paragraph", text: "我们生活的世界中到处都是几何图形。书本是长方体，篮球是球，易拉罐是圆柱，冰淇淋蛋筒是圆锥，金字塔是棱锥。几何学就是研究这些图形的形状、大小和位置关系的学科。" },
                        { type: "paragraph", text: "几何学（Geometry）一词来源于古希腊语，\"geo\"意为\"土地\"，\"metry\"意为\"测量\"。据说古埃及人因为尼罗河泛滥后需要重新丈量土地，从而发展出了几何学。" },
                        { type: "heading", text: "二、立体图形与平面图形" },
                        { type: "keypoint", label: "定义", text: "<strong>立体图形</strong>：各部分不都在同一平面内的几何图形。如长方体、正方体、圆柱、圆锥、球。<br><strong>平面图形</strong>：各部分都在同一平面内的几何图形。如三角形、长方形、圆。" },
                        { type: "svg", svg: '<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg"><g transform="translate(30, 20)"><polygon points="10,40 50,20 90,40 90,90 50,110 10,90" fill="#FF8A65" opacity="0.7" stroke="#E65100" stroke-width="1.5"/><polygon points="10,40 50,60 90,40 50,20" fill="#FFAB91" stroke="#E65100" stroke-width="1.5"/><polygon points="50,60 90,40 90,90 50,110" fill="#FF7043" stroke="#E65100" stroke-width="1.5"/><text x="50" y="135" text-anchor="middle" font-size="12" fill="#666">正方体</text></g><g transform="translate(150, 20)"><ellipse cx="40" cy="20" rx="30" ry="8" fill="#66BB6A" opacity="0.7" stroke="#1B5E20" stroke-width="1.5"/><rect x="10" y="20" width="60" height="80" fill="#A5D6A7" opacity="0.6"/><line x1="10" y1="20" x2="10" y2="100" stroke="#1B5E20" stroke-width="1.5"/><line x1="70" y1="20" x2="70" y2="100" stroke="#1B5E20" stroke-width="1.5"/><ellipse cx="40" cy="100" rx="30" ry="8" fill="#66BB6A" opacity="0.7" stroke="#1B5E20" stroke-width="1.5"/><text x="40" y="135" text-anchor="middle" font-size="12" fill="#666">圆柱</text></g><g transform="translate(270, 20)"><ellipse cx="40" cy="100" rx="35" ry="8" fill="#AB47BC" opacity="0.5" stroke="#4A148C" stroke-width="1.5"/><polygon points="5,100 40,15 75,100" fill="#CE93D8" opacity="0.6" stroke="#4A148C" stroke-width="1.5"/><text x="40" y="135" text-anchor="middle" font-size="12" fill="#666">圆锥</text></g><g transform="translate(390, 20)"><circle cx="40" cy="60" r="40" fill="#5B8DEF" opacity="0.5" stroke="#1565C0" stroke-width="1.5"/><ellipse cx="40" cy="60" rx="40" ry="15" fill="none" stroke="#1565C0" stroke-width="1" stroke-dasharray="3,2"/><text x="40" y="135" text-anchor="middle" font-size="12" fill="#666">球</text></g><text x="300" y="165" text-anchor="middle" font-size="13" fill="#999">常见的立体图形</text></svg>', caption: "4-1 常见的立体图形" },
                        { type: "svg", svg: '<svg viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg"><polygon points="30,70 80,20 130,70" fill="#5B8DEF" opacity="0.3" stroke="#1565C0" stroke-width="2"/><text x="80" y="90" text-anchor="middle" font-size="12" fill="#666">三角形</text><rect x="170" y="25" width="100" height="50" fill="#66BB6A" opacity="0.3" stroke="#1B5E20" stroke-width="2"/><text x="220" y="90" text-anchor="middle" font-size="12" fill="#666">长方形</text><circle cx="380" cy="50" r="35" fill="#AB47BC" opacity="0.3" stroke="#4A148C" stroke-width="2"/><text x="380" y="90" text-anchor="middle" font-size="12" fill="#666">圆</text><polygon points="470,70 510,20 550,70 510,50" fill="#FF8A65" opacity="0.3" stroke="#E65100" stroke-width="2"/><text x="510" y="90" text-anchor="middle" font-size="12" fill="#666">四边形</text></svg>', caption: "4-2 常见的平面图形" },
                        { type: "heading", text: "三、从不同方向看立体图形" },
                        { type: "paragraph", text: "从不同方向看立体图形，会得到不同的平面图形。通常从<strong>正面</strong>、<strong>左面</strong>、<strong>上面</strong>三个方向观察，分别得到<strong>主视图</strong>、<strong>左视图</strong>和<strong>俯视图</strong>。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg"><g transform="translate(30, 30)"><polygon points="10,40 50,20 90,40 90,90 50,110 10,90" fill="#FF8A65" opacity="0.7" stroke="#E65100" stroke-width="1.5"/><polygon points="10,40 50,60 90,40 50,20" fill="#FFAB91" stroke="#E65100" stroke-width="1.5"/><polygon points="50,60 90,40 90,90 50,110" fill="#FF7043" stroke="#E65100" stroke-width="1.5"/><text x="50" y="130" text-anchor="middle" font-size="12" fill="#666">正方体</text></g><rect x="170" y="50" width="50" height="50" fill="#5B8DEF" opacity="0.3" stroke="#1565C0" stroke-width="1.5"/><text x="195" y="120" text-anchor="middle" font-size="12" fill="#5B8DEF">从正面看</text><rect x="270" y="50" width="50" height="50" fill="#66BB6A" opacity="0.3" stroke="#1B5E20" stroke-width="1.5"/><text x="295" y="120" text-anchor="middle" font-size="12" fill="#66BB6A">从左面看</text><rect x="370" y="50" width="50" height="50" fill="#AB47BC" opacity="0.3" stroke="#4A148C" stroke-width="1.5"/><text x="395" y="120" text-anchor="middle" font-size="12" fill="#AB47BC">从上面看</text><text x="250" y="150" text-anchor="middle" font-size="12" fill="#999">正方体从三个方向看都是正方形</text></svg>', caption: "4-3 从不同方向看正方体" },
                        { type: "example", title: "例题1", question: "一个圆柱从正面看是什么图形？从上面看是什么图形？", solution: "圆柱从正面看是<strong>长方形</strong>（如果圆柱的高大于底面直径）或<strong>正方形</strong>（如果高等于直径）。<br>圆柱从上面看是<strong>圆</strong>。" },
                        { type: "heading", text: "四、立体图形的展开图" },
                        { type: "paragraph", text: "有些立体图形可以展开成平面图形，这个平面图形叫做该立体图形的<strong>展开图</strong>。展开图在包装设计、建筑工程等方面有重要应用。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 170" xmlns="http://www.w3.org/2000/svg"><g transform="translate(80, 15)"><rect x="40" y="10" width="40" height="40" fill="#FF8A65" opacity="0.5" stroke="#E65100" stroke-width="1.5"/><rect x="0" y="50" width="40" height="40" fill="#FF8A65" opacity="0.5" stroke="#E65100" stroke-width="1.5"/><rect x="40" y="50" width="40" height="40" fill="#FF8A65" opacity="0.5" stroke="#E65100" stroke-width="1.5"/><rect x="80" y="50" width="40" height="40" fill="#FF8A65" opacity="0.5" stroke="#E65100" stroke-width="1.5"/><rect x="120" y="50" width="40" height="40" fill="#FF8A65" opacity="0.5" stroke="#E65100" stroke-width="1.5"/><rect x="40" y="90" width="40" height="40" fill="#FF8A65" opacity="0.5" stroke="#E65100" stroke-width="1.5"/><text x="80" y="150" text-anchor="middle" font-size="12" fill="#666">正方体展开图（十字型）</text></g><g transform="translate(320, 15)"><ellipse cx="40" cy="15" rx="25" ry="6" fill="#66BB6A" opacity="0.5" stroke="#1B5E20" stroke-width="1.5"/><rect x="15" y="15" width="50" height="90" fill="#A5D6A7" opacity="0.4" stroke="#1B5E20" stroke-width="1.5"/><ellipse cx="40" cy="105" rx="25" ry="6" fill="#66BB6A" opacity="0.5" stroke="#1B5E20" stroke-width="1.5"/><text x="40" y="130" text-anchor="middle" font-size="12" fill="#666">圆柱展开图</text><text x="40" y="148" text-anchor="middle" font-size="11" fill="#999">（两圆+一长方形）</text></g></svg>', caption: "4-4 立体图形的展开图" },
                        { type: "tip", label: "正方体展开图", text: "正方体的展开图有 $11$ 种不同的形式！可以分为四类：① \"一四一\"型（6种）；② \"二三一\"型（3种）；③ \"二二二\"型（1种）；④ \"三三\"型（1种）。考试中常考判断哪些图形能折成正方体。" },
                        { type: "heading", text: "五、点、线、面、体" },
                        { type: "keypoint", label: "概念关系", text: "<strong>点</strong>动成<strong>线</strong>，<strong>线</strong>动成<strong>面</strong>，<strong>面</strong>动成<strong>体</strong>。<br>体由面围成，面与面相交成线，线与线相交成点。" },
                        { type: "svg", svg: '<svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="60" r="5" fill="#FF6B6B"/><text x="45" y="85" font-size="12" fill="#FF6B6B" font-weight="bold">点</text><path d="M 60 60 L 170 50" stroke="#5B8DEF" stroke-width="2"/><polygon points="170,50 165,45 165,55" fill="#5B8DEF"/><text x="110" y="42" font-size="12" fill="#5B8DEF">点动成线</text><line x1="180" y1="50" x2="280" y2="50" stroke="#5B8DEF" stroke-width="2"/><text x="195" y="85" font-size="12" fill="#5B8DEF" font-weight="bold">线</text><rect x="290" y="35" width="100" height="35" fill="#66BB6A" opacity="0.4" stroke="#1B5E20" stroke-width="2"/><text x="320" y="42" font-size="12" fill="#66BB6A">线动成面</text><text x="330" y="85" font-size="12" fill="#66BB6A" font-weight="bold">面</text><polygon points="420,35 470,20 520,35 520,85 470,100 420,85" fill="#AB47BC" opacity="0.4" stroke="#4A148C" stroke-width="2"/><polygon points="420,35 470,50 520,35 470,20" fill="#AB47BC" opacity="0.2" stroke="#4A148C" stroke-width="1.5"/><text x="440" y="42" font-size="12" fill="#AB47BC">面动成体</text><text x="470" y="115" text-anchor="middle" font-size="12" fill="#AB47BC" font-weight="bold">体</text></svg>', caption: "4-5 点线面体的关系" },
                        { type: "tip", label: "理解", text: "① 笔尖滑动留下痕迹——点动成线；② 雨刷器扫过玻璃——线动成面；③ 硬币旋转形成球——面动成体。<br>反过来：体由面围成，面与面相交形成线，线与线相交形成点。" },
                        { type: "heading", text: "六、知识拓展" },
                        { type: "paragraph", text: "几何学是数学中最古老的分支之一。古希腊数学家欧几里得（Euclid，约公元前300年）的《几何原本》系统整理了当时的几何知识，奠定了公理化几何的基础。中国古代在几何方面也有重要贡献，如《九章算术》中的面积和体积计算，祖冲之对圆周率的精确计算等。" },
                        { type: "paragraph", text: "现代几何学已经发展出很多分支：拓扑学研究图形在连续变形下的不变性质，微分几何用微积分研究曲线和曲面，计算几何在计算机图形学中有广泛应用。我们在初中学习的是最基本的欧几里得几何。" }
                    ],
                    exercises: [
                        { type: "choice", question: "下列图形中是平面图形的是（　　）", options: ["长方体", "圆柱", "三角形", "球"], answer: "C", explanation: "三角形各部分都在同一平面内，是平面图形。其余都是立体图形。" },
                        { type: "choice", question: "圆柱的展开图是（　　）", options: ["两个圆和一个长方形", "两个圆和一个三角形", "一个圆和一个长方形", "三个长方形"], answer: "A", explanation: "圆柱上下底面是两个圆，侧面展开是长方形。" },
                        { type: "choice", question: "从正面看一个圆锥，看到的图形是（　　）", options: ["圆", "三角形", "长方形", "正方形"], answer: "B", explanation: "圆锥从正面看是一个等腰三角形（侧面投影）。从上面看才是圆。" },
                        { type: "fill", question: "一个正方体有 ____ 个面， ____ 条棱， ____ 个顶点。", answer: "6,12,8", explanation: "正方体有6个面、12条棱、8个顶点。" },
                        { type: "fill", question: "圆柱的侧面展开图是一个长方形，其中长方形的长等于圆柱底面的 ____ ，宽等于圆柱的 ____ 。", answer: "周长,高", explanation: "圆柱侧面展开后，长方形的长对应底面圆的周长（$C=2\\pi r$），宽对应圆柱的高。" }
                    ]
                },
                {
                    id: "4-2",
                    title: "4.2 直线、射线、线段",
                    icon: "📏",
                    difficulty: "基础",
                    content: [
                        { type: "heading", text: "一、直线、射线、线段的概念" },
                        { type: "paragraph", text: "直线、射线和线段是几何中最基本的图形。它们都是由\"点\"组成的，但它们在端点数量和延伸方向上有所不同。" },
                        { type: "keypoint", label: "重点定义", text: "<strong>线段</strong>：有两个端点，有长度，不能延伸。<br><strong>射线</strong>：有一个端点，向一个方向无限延伸。<br><strong>直线</strong>：没有端点，向两个方向无限延伸。" },
                        { type: "svg", svg: '<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="30" r="4" fill="#333"/><line x1="54" y1="30" x2="196" y2="30" stroke="#5B8DEF" stroke-width="2.5"/><circle cx="200" cy="30" r="4" fill="#333"/><text x="60" y="55" font-size="14" fill="#5B8DEF" font-weight="bold">线段 AB</text><text x="60" y="72" font-size="12" fill="#666">两个端点，有长度</text><circle cx="50" cy="100" r="4" fill="#333"/><line x1="54" y1="100" x2="240" y2="100" stroke="#FF8A65" stroke-width="2.5"/><polygon points="240,100 230,95 230,105" fill="#FF8A65"/><text x="60" y="125" font-size="14" fill="#FF8A65" font-weight="bold">射线 OA</text><text x="60" y="142" font-size="12" fill="#666">一个端点，一端无限延伸</text><polygon points="20,170 30,165 30,175" fill="#66BB6A"/><line x1="30" y1="170" x2="240" y2="170" stroke="#66BB6A" stroke-width="2.5"/><polygon points="240,170 230,165 230,175" fill="#66BB6A"/><text x="60" y="160" font-size="14" fill="#66BB6A" font-weight="bold">直线 AB</text><text x="280" y="170" font-size="12" fill="#666">两端无限延伸</text><g transform="translate(350, 15)"><rect x="0" y="0" width="240" height="150" rx="8" fill="#FAFBFC" stroke="#E0E0E0"/><text x="120" y="25" text-anchor="middle" font-size="14" fill="#333" font-weight="bold">三者对比</text><text x="15" y="55" font-size="12" fill="#5B8DEF">线段：2端点 · 可度量</text><text x="15" y="85" font-size="12" fill="#FF8A65">射线：1端点 · 不可度量</text><text x="15" y="115" font-size="12" fill="#66BB6A">直线：0端点 · 不可度量</text><text x="15" y="140" font-size="11" fill="#AB47BC" font-weight="bold">线段→延伸→射线→延伸→直线</text></g></svg>', caption: "4-6 线段、射线、直线的对比" },
                        { type: "warn", label: "易错点", text: "① <strong>射线有方向性</strong>！射线 $AB$ 和射线 $BA$ 是不同的射线（端点不同，方向不同）。<br>② <strong>直线和线段没有方向性</strong>：直线 $AB$ 和直线 $BA$ 是同一条直线，线段 $AB$ 和线段 $BA$ 是同一条线段。<br>③ 射线和直线<strong>不能度量</strong>长度（无限长），只有线段可以度量。" },
                        { type: "heading", text: "二、直线的性质" },
                        { type: "keypoint", label: "基本事实", text: "<strong>经过两点有一条直线，并且只有一条直线。</strong>（两点确定一条直线）" },
                        { type: "paragraph", text: "这是几何中最基本的公理之一。它告诉我们：两点确定一条直线。这个性质在生活中有很多应用，比如：钉钉子时两个钉子就能固定一根木条，拉绳子时固定两端就能拉直。" },
                        { type: "tip", label: "推论", text: "① 两条直线相交，只有一个交点（因为如果有两个交点，就是同一条直线了）。<br>② 经过一点有<strong>无数条</strong>直线；经过两点有且只有<strong>一条</strong>直线。" },
                        { type: "heading", text: "三、线段的大小比较" },
                        { type: "paragraph", text: "比较两条线段长短有两种方法：" },
                        { type: "list", items: ["<strong>度量法</strong>：用刻度尺分别量出两条线段的长度，比较数值大小", "<strong>叠合法</strong>：把一条线段放到另一条上，使它们的一个端点重合，看另一个端点的位置"]},
                        { type: "keypoint", label: "线段的和差", text: "$A$、$B$、$C$在同一直线上（$B$在$A$、$C$之间）：$AC = AB + BC$" },
                        { type: "example", title: "例题1", question: "已知线段 $AB = 5\\text{cm}$，$BC = 3\\text{cm}$，且 $A$、$B$、$C$ 在同一直线上，求 $AC$ 的长。", solution: "分两种情况：<br>① 若 $B$ 在 $A$、$C$ 之间：$AC = AB + BC = 5 + 3 = 8$ cm<br>② 若 $A$ 在 $B$、$C$ 之间（或 $C$ 在 $A$、$B$ 之间）：$AC = |AB - BC| = |5 - 3| = 2$ cm<br>所以 $AC = 8$ cm 或 $AC = 2$ cm" },
                        { type: "heading", text: "四、线段的中点" },
                        { type: "keypoint", label: "重点定义", text: "<strong>中点</strong>：把一条线段分成两条相等线段的点。若 $M$ 是 $AB$ 中点，则 $AM = MB = \\frac{1}{2}AB$。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 90" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="45" r="5" fill="#333"/><circle cx="250" cy="45" r="5" fill="#FF6B6B"/><circle cx="450" cy="45" r="5" fill="#333"/><line x1="55" y1="45" x2="245" y2="45" stroke="#5B8DEF" stroke-width="3"/><line x1="255" y1="45" x2="445" y2="45" stroke="#66BB6A" stroke-width="3"/><text x="45" y="30" font-size="14" fill="#333" font-weight="bold">A</text><text x="243" y="30" font-size="14" fill="#FF6B6B" font-weight="bold">M</text><text x="445" y="30" font-size="14" fill="#333" font-weight="bold">B</text><text x="130" y="70" font-size="13" fill="#5B8DEF">AM</text><text x="330" y="70" font-size="13" fill="#66BB6A">MB</text><text x="220" y="85" font-size="12" fill="#FF6B6B">M是AB中点: AM = MB</text></svg>', caption: "4-7 线段的中点" },
                        { type: "example", title: "例题2", question: "已知 $AB = 10\\text{cm}$，$M$ 是 $AB$ 中点，$N$ 是 $AM$ 中点，求 $BN$。", solution: "$M$ 是 $AB$ 中点：$AM = MB = \\frac{10}{2} = 5$ cm<br>$N$ 是 $AM$ 中点：$AN = NM = \\frac{5}{2} = 2.5$ cm<br>$BN = BM + MN = 5 + 2.5 = 7.5$ cm" },
                        { type: "example", title: "例题3", question: "已知线段 $AB = 12\\text{cm}$，点 $C$ 在 $AB$ 上，$AC = 2BC$，求 $AC$ 和 $BC$ 的长。", solution: "设 $BC = x$，则 $AC = 2x$。<br>$AC + BC = AB$，即 $2x + x = 12$<br>$3x = 12$，$x = 4$<br>所以 $BC = 4$ cm，$AC = 8$ cm。" },
                        { type: "heading", text: "五、知识拓展" },
                        { type: "paragraph", text: "\"两点之间线段最短\"是几何中的另一个基本事实。这意味着：在所有连接两点的线中，线段是最短的。这个性质在生活中有很多应用——我们走路时自然会选择直线路径，因为它最短。" },
                        { type: "paragraph", text: "两点之间的距离就是连接这两点的线段的长度。注意\"距离\"是一个数值（带有单位），而\"线段\"是一个图形。两者是不同的概念。" }
                    ],
                    exercises: [
                        { type: "choice", question: "下列说法正确的是（　　）", options: ["射线$AB$和射线$BA$是同一条射线", "直线$AB$和直线$BA$是同一条直线", "线段$AB$和线段$BA$不是同一条线段", "射线可以向两个方向延伸"], answer: "B", explanation: "直线没有方向性，$AB$和$BA$是同一条直线（B正确）。射线有方向性，$AB$和$BA$不同（A错误）。线段没有方向性（C错误）。射线只向一个方向延伸（D错误）。" },
                        { type: "choice", question: "已知点 $C$ 是线段 $AB$ 的中点，$AB = 8\\text{cm}$，则 $AC = $（　　）", options: ["$2\\text{cm}$", "$4\\text{cm}$", "$6\\text{cm}$", "$8\\text{cm}$"], answer: "B", explanation: "中点将线段等分：$AC = \\frac{AB}{2} = \\frac{8}{2} = 4$ cm。" },
                        { type: "choice", question: "线段 $AB = 10\\text{cm}$，点 $C$ 在 $AB$ 上，$AC:CB = 2:3$，则 $AC = $（　　）", options: ["$2\\text{cm}$", "$4\\text{cm}$", "$6\\text{cm}$", "$8\\text{cm}$"], answer: "B", explanation: "设$AC=2x$，$CB=3x$。$2x+3x=10$，$5x=10$，$x=2$。$AC=2\\times2=4$ cm。" },
                        { type: "fill", question: "在墙上钉一根木条，至少需要 ____ 颗钉子，理由是 ____。", answer: "2,两点确定一条直线", explanation: "至少需要2颗钉子。理由：经过两点有一条直线，并且只有一条直线（两点确定一条直线）。" },
                        { type: "fill", question: "已知 $AB = 16\\text{cm}$，$M$ 是 $AB$ 的中点，$N$ 是 $MB$ 的中点，则 $MN = $ ____ $\\text{cm}$。", answer: "4", explanation: "$M$是$AB$中点：$AM=MB=8$ cm。$N$是$MB$中点：$MN=NB=4$ cm。" }
                    ]
                },
                {
                    id: "4-3",
                    title: "4.3 角",
                    icon: "📐",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、角的概念" },
                        { type: "paragraph", text: "<strong>角</strong>是几何中最基本的图形之一。我们在日常生活中经常遇到角——时钟的指针形成角，打开的书本形成角，桌子的角也是角。" },
                        { type: "keypoint", label: "定义", text: "<strong>角</strong>：有公共端点的两条射线组成的图形。公共端点是角的<strong>顶点</strong>，两条射线是角的<strong>边</strong>。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="110" r="4" fill="#333"/><line x1="150" y1="110" x2="290" y2="110" stroke="#5B8DEF" stroke-width="2.5"/><line x1="150" y1="110" x2="220" y2="30" stroke="#FF8A65" stroke-width="2.5"/><path d="M 190 110 A 40 40 0 0 0 178 75" fill="none" stroke="#AB47BC" stroke-width="2"/><text x="195" y="90" font-size="14" fill="#AB47BC" font-weight="bold">∠1</text><text x="140" y="128" font-size="13" fill="#333" font-weight="bold">O</text><text x="295" y="115" font-size="13" fill="#5B8DEF" font-weight="bold">B</text><text x="215" y="25" font-size="13" fill="#FF8A65" font-weight="bold">A</text><text x="80" y="80" font-size="12" fill="#666">顶点: O</text><text x="80" y="98" font-size="12" fill="#666">边: OA, OB</text><g transform="translate(330, 30)"><text x="0" y="0" font-size="14" fill="#333" font-weight="bold">角的表示法：</text><text x="0" y="25" font-size="13" fill="#5B8DEF">∠AOB（三个字母）</text><text x="0" y="48" font-size="13" fill="#FF8A65">∠O（一个字母，顶点处）</text><text x="0" y="71" font-size="13" fill="#AB47BC">∠1（数字标记）</text><text x="0" y="94" font-size="13" fill="#66BB6A">∠α（希腊字母）</text></g></svg>', caption: "4-8 角的表示方法" },
                        { type: "warn", label: "注意", text: "用三个字母表示角时，<strong>顶点字母必须写在中间</strong>！如 $\\angle AOB$ 表示以 $O$ 为顶点的角。当以某点为顶点的角只有一个时，才能用一个字母表示。" },
                        { type: "heading", text: "二、角度制" },
                        { type: "keypoint", label: "单位换算", text: "1度 $= 60$ 分，1分 $= 60$ 秒。即 $1\\degree = 60'$，$1' = 60''$。<br>周角 $= 360\\degree$，平角 $= 180\\degree$，直角 $= 90\\degree$。" },
                        { type: "svg", svg: '<svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg"><g transform="translate(60, 60)"><circle cx="0" cy="0" r="45" fill="none" stroke="#FF6B6B" stroke-width="2"/><path d="M 0 0 L 45 0 A 45 45 0 0 0 0 -45 Z" fill="#FF6B6B" opacity="0.2"/><text x="20" y="-15" font-size="13" fill="#FF6B6B" font-weight="bold">90°</text><text x="0" y="75" text-anchor="middle" font-size="12" fill="#666">直角</text></g><g transform="translate(220, 60)"><circle cx="0" cy="0" r="45" fill="none" stroke="#5B8DEF" stroke-width="2"/><path d="M 0 0 L 45 0 A 45 45 0 0 0 -45 0 Z" fill="#5B8DEF" opacity="0.2"/><text x="0" y="-15" text-anchor="middle" font-size="13" fill="#5B8DEF" font-weight="bold">180°</text><text x="0" y="75" text-anchor="middle" font-size="12" fill="#666">平角</text></g><g transform="translate(420, 60)"><circle cx="0" cy="0" r="45" fill="none" stroke="#66BB6A" stroke-width="2"/><path d="M 0 0 L 45 0 A 45 45 0 1 0 -45 0 Z" fill="#66BB6A" opacity="0.2"/><text x="0" y="-15" text-anchor="middle" font-size="13" fill="#66BB6A" font-weight="bold">360°</text><text x="0" y="75" text-anchor="middle" font-size="12" fill="#666">周角</text></g><text x="300" y="110" text-anchor="middle" font-size="12" fill="#999">1° = 60分，1分 = 60秒（六十进制）</text></svg>', caption: "4-9 角的分类与单位" },
                        { type: "example", title: "例题1", question: "把 $30.5\\degree$ 转换为度分秒形式，把 $25\\degree 36'$ 转换为度。", solution: "$30.5\\degree$：$0.5\\degree = 0.5 \\times 60' = 30'$，所以 $30.5\\degree = 30\\degree 30'$<br>$25\\degree 36'$：$36' = 36 \\div 60 = 0.6\\degree$，所以 $25\\degree 36' = 25.6\\degree$" },
                        { type: "heading", text: "三、角的比较与运算" },
                        { type: "paragraph", text: "角的比较可以用<strong>度量法</strong>（量出度数比较）或<strong>叠合法</strong>。角也可以进行加减运算，运算时注意<strong>度与度加减，分与分加减，秒与秒加减</strong>，满60进1，借1当60。" },
                        { type: "example", title: "例题2", question: "计算：$(1)$ $25\\degree 30' + 40\\degree 45'$　$(2)$ $90\\degree - 35\\degree 20'$　$(3)$ $15\\degree 20'30'' \\times 2$", solution: "$(1)$ $25\\degree 30' + 40\\degree 45' = 65\\degree 75' = 66\\degree 15'$（$75'=1\\degree 15'$）<br>$(2)$ $90\\degree - 35\\degree 20' = 89\\degree 60' - 35\\degree 20' = 54\\degree 40'$（借1度当60分）<br>$(3)$ $15\\degree 20'30'' \\times 2 = 30\\degree 40'60'' = 30\\degree 41'$（$60''=1'$）" },
                        { type: "heading", text: "四、角的平分线" },
                        { type: "keypoint", label: "定义", text: "<strong>角的平分线</strong>：从一个角的顶点出发，把这个角分成两个相等的角的射线。若 $OC$ 是 $\\angle AOB$ 的平分线，则 $\\angle AOC = \\angle BOC = \\frac{1}{2}\\angle AOB$。" },
                        { type: "svg", svg: '<svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="110" r="4" fill="#333"/><line x1="200" y1="110" x2="340" y2="110" stroke="#5B8DEF" stroke-width="2.5"/><line x1="200" y1="110" x2="60" y2="110" stroke="#FF8A65" stroke-width="2.5"/><line x1="200" y1="110" x2="200" y2="20" stroke="#AB47BC" stroke-width="2.5"/><path d="M 230 110 A 30 30 0 0 0 225 82" fill="none" stroke="#5B8DEF" stroke-width="1.5"/><path d="M 170 110 A 30 30 0 0 1 175 82" fill="none" stroke="#FF8A65" stroke-width="1.5"/><text x="245" y="95" font-size="12" fill="#5B8DEF">∠BOC</text><text x="120" y="95" font-size="12" fill="#FF8A65">∠AOC</text><text x="190" y="15" font-size="13" fill="#AB47BC" font-weight="bold">C</text><text x="340" y="125" font-size="13" fill="#5B8DEF" font-weight="bold">B</text><text x="45" y="125" font-size="13" fill="#FF8A65" font-weight="bold">A</text><text x="195" y="130" font-size="13" fill="#333" font-weight="bold">O</text><text x="200" y="138" text-anchor="middle" font-size="11" fill="#AB47BC">OC平分∠AOB</text></svg>', caption: "4-10 角的平分线" },
                        { type: "example", title: "例题3", question: "已知 $\\angle AOB = 80\\degree$，$OC$ 是 $\\angle AOB$ 的平分线，$OD$ 是 $\\angle AOC$ 的平分线，求 $\\angle COD$。", solution: "$OC$ 平分 $\\angle AOB$：$\\angle AOC = \\frac{80\\degree}{2} = 40\\degree$<br>$OD$ 平分 $\\angle AOC$：$\\angle COD = \\frac{40\\degree}{2} = 20\\degree$" },
                        { type: "heading", text: "五、余角和补角" },
                        { type: "keypoint", label: "重点定义", text: "<strong>互为余角</strong>：两个角的和等于 $90\\degree$（直角）。<br><strong>互为补角</strong>：两个角的和等于 $180\\degree$（平角）。<br><strong>重要性质</strong>：等角（或同角）的余角相等；等角（或同角）的补角相等。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg"><g transform="translate(30, 20)"><line x1="0" y1="80" x2="120" y2="80" stroke="#5B8DEF" stroke-width="2.5"/><line x1="0" y1="80" x2="0" y2="0" stroke="#FF8A65" stroke-width="2.5"/><line x1="0" y1="80" x2="120" y2="0" stroke="#AB47BC" stroke-width="2.5"/><path d="M 25 80 A 25 25 0 0 0 19 60" fill="none" stroke="#5B8DEF" stroke-width="1.5"/><path d="M 25 80 A 25 25 0 0 0 35 65" fill="none" stroke="#AB47BC" stroke-width="1.5"/><text x="55" y="50" font-size="12" fill="#5B8DEF">∠1</text><text x="20" y="70" font-size="12" fill="#AB47BC">∠2</text><text x="60" y="105" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">互为余角</text><text x="60" y="120" text-anchor="middle" font-size="11" fill="#666">∠1 + ∠2 = 90°</text></g><g transform="translate(260, 20)"><line x1="0" y1="80" x2="180" y2="80" stroke="#5B8DEF" stroke-width="2.5"/><line x1="0" y1="80" x2="0" y2="30" stroke="#FF8A65" stroke-width="2.5"/><line x1="0" y1="80" x2="180" y2="30" stroke="#AB47BC" stroke-width="2.5"/><path d="M 25 80 A 25 25 0 0 0 22 62" fill="none" stroke="#5B8DEF" stroke-width="1.5"/><path d="M 30 80 A 30 30 0 0 0 40 55" fill="none" stroke="#AB47BC" stroke-width="1.5"/><text x="55" y="60" font-size="12" fill="#5B8DEF">∠1</text><text x="20" y="70" font-size="12" fill="#AB47BC">∠2</text><text x="90" y="105" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">互为补角</text><text x="90" y="120" text-anchor="middle" font-size="11" fill="#666">∠1 + ∠2 = 180°</text></g></svg>', caption: "4-11 余角与补角" },
                        { type: "example", title: "例题4", question: "一个角的补角是它的余角的 $3$ 倍，求这个角。", solution: "设这个角为 $x\\degree$。<br>补角 $= (180 - x)\\degree$，余角 $= (90 - x)\\degree$<br>列方程：$180 - x = 3(90 - x)$<br>$180 - x = 270 - 3x$<br>$2x = 90$，$x = 45$<br>答：这个角是 $45\\degree$。" },
                        { type: "example", title: "例题5", question: "已知 $\\angle\\alpha$ 与 $\\angle\\beta$ 互为补角，且 $\\angle\\alpha : \\angle\\beta = 3:2$，求 $\\angle\\alpha$ 和 $\\angle\\beta$。", solution: "设 $\\angle\\alpha = 3x$，$\\angle\\beta = 2x$。<br>$3x + 2x = 180$，$5x = 180$，$x = 36$<br>$\\angle\\alpha = 3 \\times 36 = 108\\degree$，$\\angle\\beta = 2 \\times 36 = 72\\degree$" },
                        { type: "tip", label: "余角和补角的性质", text: "① 一个角的余角 $= 90\\degree - \\angle$，补角 $= 180\\degree - \\angle$<br>② 补角 $-$ 余角 $= 90\\degree$（恒成立）<br>③ 一个角一定有补角（只要小于 $180\\degree$），但只有小于 $90\\degree$ 的角才有余角<br>④ 互余、互补指的是两个角的<strong>数量关系</strong>，与位置无关" },
                        { type: "heading", text: "六、知识拓展" },
                        { type: "paragraph", text: "角度制起源于古巴比伦人，他们使用六十进制。之所以选择60，是因为60有很多因数（1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60），方便等分。这也是为什么一小时有60分钟、一分钟有60秒的原因。" },
                        { type: "paragraph", text: "除了角度制，数学中还有<strong>弧度制</strong>。弧度制是用弧长与半径的比值来度量角的方法，在高中数学和高等数学中广泛使用。$1$ 弧度 $\\approx 57.3\\degree$。" }
                    ],
                    exercises: [
                        { type: "choice", question: "计算 $37\\degree 25' + 24\\degree 40'$ 的结果是（　　）", options: ["$61\\degree 65'$", "$62\\degree 5'$", "$61\\degree 5'$", "$62\\degree 65'$"], answer: "B", explanation: "度加度：$37+24=61\\degree$；分加分：$25'+40'=65'$。$65'=1\\degree 5'$，进位后得 $62\\degree 5'$。" },
                        { type: "choice", question: "一个角是 $35\\degree$，则它的余角和补角分别是（　　）", options: ["$55\\degree$，$145\\degree$", "$65\\degree$，$135\\degree$", "$45\\degree$，$155\\degree$", "$55\\degree$，$135\\degree$"], answer: "A", explanation: "余角 $= 90-35=55\\degree$；补角 $= 180-35=145\\degree$。" },
                        { type: "choice", question: "若 $\\angle\\alpha$ 的补角是 $110\\degree$，则 $\\angle\\alpha$ 的余角是（　　）", options: ["$20\\degree$", "$30\\degree$", "$70\\degree$", "$110\\degree$"], answer: "A", explanation: "$\\angle\\alpha=180-110=70\\degree$，余角$=90-70=20\\degree$。也可以直接算：余角$=$补角$-90=110-90=20\\degree$。" },
                        { type: "fill", question: "已知 $\\angle\\alpha$ 和 $\\angle\\beta$ 互为补角，且 $\\angle\\alpha = 2\\angle\\beta$，则 $\\angle\\alpha = $ ____ 度。", answer: "120", explanation: "设 $\\angle\\beta = x$，则 $\\angle\\alpha = 2x$。互为补角：$x + 2x = 180$，$3x = 180$，$x = 60$。所以 $\\angle\\alpha = 2 \\times 60 = 120$ 度。" },
                        { type: "fill", question: "$\\angle AOB = 60\\degree$，$OC$ 是 $\\angle AOB$ 的平分线，则 $\\angle AOC = $ ____ 度。", answer: "30", explanation: "角平分线把角等分：$\\angle AOC = \\frac{\\angle AOB}{2} = \\frac{60}{2} = 30$ 度。" }
                    ]
                },
                {
                    id: "4-4",
                    title: "4.4 课题学习 设计制作长方体形状的包装纸盒",
                    icon: "📦",
                    difficulty: "拓展",
                    content: [
                        { type: "heading", text: "一、课题概述" },
                        { type: "paragraph", text: "本节课我们将通过设计制作长方体形状的包装纸盒，综合运用前面所学的几何图形知识，体会数学与实际生活的联系。这是一个<strong>动手实践</strong>的课程，需要你把几何知识应用到实际制作中。" },
                        { type: "keypoint", label: "学习目标", text: "① 了解长方体的结构特征（面、棱、顶点）；<br>② 掌握长方体展开图的设计方法；<br>③ 能够动手制作长方体包装纸盒；<br>④ 体会数学在生活中的应用价值。" },
                        { type: "heading", text: "二、长方体的结构特征" },
                        { type: "keypoint", label: "特征", text: "长方体有 $6$ 个面（都是长方形，相对的面全等），$12$ 条棱（互相平行的棱长度相等），$8$ 个顶点。<br>设长方体的长、宽、高分别为 $a$、$b$、$c$，则：<br>① <strong>棱长总和</strong> $= 4(a+b+c)$<br>② <strong>表面积</strong> $= 2(ab+bc+ac)$<br>③ <strong>体积</strong> $= abc$" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><g transform="translate(30, 20)"><polygon points="10,50 80,20 160,20 90,50 10,50" fill="#FF8A65" opacity="0.3" stroke="#E65100" stroke-width="1.5"/><polygon points="90,50 160,20 160,100 90,130 90,50" fill="#66BB6A" opacity="0.3" stroke="#1B5E20" stroke-width="1.5"/><polygon points="10,50 90,50 90,130 10,130 10,50" fill="#5B8DEF" opacity="0.3" stroke="#1565C0" stroke-width="1.5"/><text x="45" y="45" font-size="12" fill="#5B8DEF">宽b</text><text x="120" y="40" font-size="12" fill="#FF8A65">长a</text><text x="5" y="95" font-size="12" fill="#333">高</text><text x="0" y="108" font-size="12" fill="#333">c</text></g><g transform="translate(280, 30)"><rect x="0" y="0" width="80" height="40" fill="#FF8A65" opacity="0.2" stroke="#E65100" stroke-width="1.5"/><rect x="0" y="40" width="80" height="50" fill="#5B8DEF" opacity="0.2" stroke="#1565C0" stroke-width="1.5"/><rect x="0" y="90" width="80" height="40" fill="#FF8A65" opacity="0.2" stroke="#E65100" stroke-width="1.5"/><rect x="80" y="40" width="50" height="50" fill="#66BB6A" opacity="0.2" stroke="#1B5E20" stroke-width="1.5"/><rect x="-50" y="40" width="50" height="50" fill="#66BB6A" opacity="0.2" stroke="#1B5E20" stroke-width="1.5"/><text x="35" y="25" text-anchor="middle" font-size="11" fill="#666">宽b × 高c</text><text x="35" y="68" text-anchor="middle" font-size="11" fill="#666">宽b × 高c</text><text x="35" y="113" text-anchor="middle" font-size="11" fill="#666">宽b × 高c</text><text x="-25" y="68" text-anchor="middle" font-size="11" fill="#666" transform="rotate(-90, -25, 68)">长a×c</text></g></svg>', caption: "4-12 长方体及其展开图" },
                        { type: "example", title: "例题1", question: "一个长方体纸盒的长为 $5\\text{cm}$，宽为 $3\\text{cm}$，高为 $4\\text{cm}$，求它的棱长总和、表面积和体积。", solution: "棱长总和 $= 4 \\times (5+3+4) = 4 \\times 12 = 48$ cm<br>表面积 $= 2 \\times (5\\times3 + 3\\times4 + 5\\times4) = 2 \\times (15+12+20) = 2 \\times 47 = 94$ cm$^2$<br>体积 $= 5 \\times 3 \\times 4 = 60$ cm$^3$" },
                        { type: "example", title: "例题2", question: "一个正方体的表面积是 $96\\text{cm}^2$，求它的棱长和体积。", solution: "正方体表面积 $= 6a^2 = 96$，$a^2 = 16$，$a = 4$ cm<br>体积 $= a^3 = 4^3 = 64$ cm$^3$" },
                        { type: "heading", text: "三、设计制作步骤" },
                        { type: "list", items: [
                            "<strong>第一步</strong>：确定长方体的尺寸（长、宽、高），根据需要包装的物品大小来确定",
                            "<strong>第二步</strong>：画出展开图（注意：① 相对的面要隔开一个面；② 留出粘贴边，一般约 $1\\text{cm}$；③ 折叠线要对齐棱的位置）",
                            "<strong>第三步</strong>：用剪刀沿外轮廓线剪下展开图",
                            "<strong>第四步</strong>：沿折叠线折叠，在粘贴边涂胶水，粘贴固定成型"
                        ]},
                        { type: "tip", label: "设计要点", text: "① 展开图中相对的面要隔开一个面（不能相邻）；② 粘贴边一般留 $1\\text{cm}$ 左右；③ 折叠线要用虚线表示，剪切线用实线表示；④ 设计时可以用不同颜色标记不同的面，方便折叠。" },
                        { type: "svg", svg: '<svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="20" width="60" height="40" fill="#FF8A65" opacity="0.2" stroke="#E65100" stroke-width="1.5" stroke-dasharray="4,2"/><rect x="100" y="60" width="60" height="50" fill="#5B8DEF" opacity="0.2" stroke="#1565C0" stroke-width="1.5"/><rect x="100" y="110" width="60" height="40" fill="#FF8A65" opacity="0.2" stroke="#E65100" stroke-width="1.5" stroke-dasharray="4,2"/><rect x="160" y="60" width="40" height="50" fill="#66BB6A" opacity="0.2" stroke="#1B5E20" stroke-width="1.5"/><rect x="60" y="60" width="40" height="50" fill="#66BB6A" opacity="0.2" stroke="#1B5E20" stroke-width="1.5"/><rect x="200" y="65" width="8" height="40" fill="none" stroke="#999" stroke-width="1" stroke-dasharray="2,1"/><rect x="52" y="65" width="8" height="40" fill="none" stroke="#999" stroke-width="1" stroke-dasharray="2,1"/><text x="350" y="35" font-size="13" fill="#FF8A65">虚线框 = 粘贴边</text><text x="350" y="55" font-size="13" fill="#5B8DEF">蓝色 = 侧面</text><text x="350" y="75" font-size="13" fill="#66BB6A">绿色 = 侧面</text><text x="350" y="95" font-size="13" fill="#FF8A65">橙色 = 上下面</text><text x="300" y="115" text-anchor="middle" font-size="12" fill="#666">长方体展开图设计示意</text></svg>', caption: "4-13 展开图设计示意" },
                        { type: "heading", text: "四、实际应用" },
                        { type: "paragraph", text: "长方体形状的包装在日常生活中随处可见——快递盒、食品包装盒、礼品盒等。设计师在设计包装时，需要考虑：① <strong>美观性</strong>——外观好看；② <strong>实用性</strong>——能装下物品，方便使用；③ <strong>经济性</strong>——用料最少，成本最低；④ <strong>环保性</strong>——材料可回收利用。" },
                        { type: "paragraph", text: "在工程设计中，展开图的设计还涉及到钣金加工、服装裁剪等领域。掌握好展开图的设计方法，是很多工程技术的基础。" },
                        { type: "example", title: "例题3", question: "要做一个无盖的长方体纸盒，长 $10\\text{cm}$，宽 $8\\text{cm}$，高 $5\\text{cm}$，至少需要多少平方厘米的纸板？", solution: "无盖长方体只有 $5$ 个面：底面 + 四个侧面<br>底面 $= 10 \\times 8 = 80$<br>两个长侧面 $= 2 \\times (10 \\times 5) = 100$<br>两个宽侧面 $= 2 \\times (8 \\times 5) = 80$<br>总面积 $= 80 + 100 + 80 = 260$ cm$^2$" },
                        { type: "tip", label: "学习建议", text: "本节课的重点是<strong>动手实践</strong>。建议你亲手制作一个长方体纸盒，体验从平面到立体的过程。在制作过程中，你会发现数学知识（展开图、面积计算等）是如何应用到实际中的。这种\"做中学\"的方式能帮助你更深入地理解几何知识。" }
                    ],
                    exercises: [
                        { type: "choice", question: "一个长方体的长、宽、高分别为 $3$、$4$、$5$，则它的棱长总和是（　　）", options: ["$12$", "$24$", "$48$", "$60$"], answer: "C", explanation: "棱长总和 $= 4(a+b+c) = 4 \\times (3+4+5) = 4 \\times 12 = 48$。" },
                        { type: "choice", question: "长方体的长 $6\\text{cm}$，宽 $4\\text{cm}$，高 $3\\text{cm}$，则表面积是（　　）", options: ["$72\\text{cm}^2$", "$108\\text{cm}^2$", "$84\\text{cm}^2$", "$144\\text{cm}^2$"], answer: "B", explanation: "表面积 $= 2(ab+bc+ac) = 2 \\times (6\\times4+4\\times3+6\\times3) = 2 \\times (24+12+18) = 2 \\times 54 = 108$ cm$^2$。" },
                        { type: "choice", question: "一个正方体的棱长为 $3\\text{cm}$，则它的体积是（　　）", options: ["$9\\text{cm}^3$", "$18\\text{cm}^3$", "$27\\text{cm}^3$", "$54\\text{cm}^3$"], answer: "C", explanation: "正方体体积 $= a^3 = 3^3 = 27$ cm$^3$。" },
                        { type: "fill", question: "一个正方体的棱长为 $4\\text{cm}$，则它的表面积是 ____ $\\text{cm}^2$。", answer: "96", explanation: "正方体表面积 $= 6a^2 = 6 \\times 4^2 = 6 \\times 16 = 96$ cm$^2$。" },
                        { type: "fill", question: "一个无盖长方体纸盒，长 $6\\text{cm}$，宽 $5\\text{cm}$，高 $4\\text{cm}$，做这个纸盒至少需要 ____ $\\text{cm}^2$ 的纸板。", answer: "118", explanation: "无盖只有5个面。底面$=6\\times5=30$；两个长侧面$=2\\times(6\\times4)=48$；两个宽侧面$=2\\times(5\\times4)=40$。总面积$=30+48+40=118$ cm$^2$。" }
                    ]
                }
            ]
        }
    ]
};

// 合并上册数据
var mathDataUp = {
    title: mathDataUpPart1.title,
    icon: mathDataUpPart1.icon,
    description: mathDataUpPart1.description,
    chapters: mathDataUpPart1.chapters.concat(mathDataUpPart2.chapters)
};
