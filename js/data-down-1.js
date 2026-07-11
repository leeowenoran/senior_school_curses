// ===== 初一数学 下册数据（第一部分：第5-7章）=====
var mathDataDownPart1 = {
    chapters: [
        // ===== 第五章 相交线与平行线 =====
        {
            title: "第五章 相交线与平行线",
            icon: "📏",
            color: "#FF6B6B",
            lessons: [
                {
                    id: "5-1",
                    title: "5.1 相交线",
                    icon: "✖️",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、相交线的概念" },
                        { type: "paragraph", text: "在同一平面内，如果两条直线有一个公共点，就说这两条直线<strong>相交</strong>，这个公共点叫做<strong>交点</strong>。两条直线相交会形成四个角，这些角之间有着特殊的关系。" },
                        { type: "heading", text: "二、邻补角" },
                        { type: "keypoint", label: "定义", text: "<strong>邻补角</strong>：两条直线相交所成的四个角中，有公共顶点和一条公共边，另一边互为反向延长线的两个角叫做邻补角。<br>邻补角<strong>互补</strong>（和为 $180\\degree$）。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="150" x2="450" y2="50" stroke="#5B8DEF" stroke-width="2.5"/><line x1="100" y1="30" x2="400" y2="170" stroke="#FF8A65" stroke-width="2.5"/><circle cx="250" cy="100" r="4" fill="#333"/><text x="255" y="115" font-size="13" fill="#333" font-weight="bold">O</text><text x="150" y="80" font-size="13" fill="#AB47BC" font-weight="bold">∠1</text><text x="300" y="80" font-size="13" fill="#66BB6A" font-weight="bold">∠2</text><text x="300" y="130" font-size="13" fill="#FF8A65" font-weight="bold">∠3</text><text x="150" y="130" font-size="13" fill="#5B8DEF" font-weight="bold">∠4</text><text x="330" y="180" font-size="12" fill="#AB47BC">∠1和∠2互为邻补角</text></svg>', caption: "5-1 相交线形成的角" },
                        { type: "paragraph", text: "邻补角的特征：① 有公共顶点；② 有一条公共边；③ 另一边互为反向延长线。图中 $\\angle 1$ 和 $\\angle 2$ 有公共顶点 $O$ 和公共边，另一边互为反向延长线，所以是邻补角。同样，$\\angle 1$ 和 $\\angle 4$、$\\angle 2$ 和 $\\angle 3$、$\\angle 3$ 和 $\\angle 4$ 也分别是邻补角。" },
                        { type: "tip", label: "邻补角的特征", text: "① 两个角共顶点；② 共一条边；③ 另两边在公共边的两侧且互为反向延长线；④ 两个角互补（$\\angle 1 + \\angle 2 = 180\\degree$）。<strong>注意：邻补角不仅互补，还相邻</strong>。互补但不相邻的角不是邻补角。" },
                        { type: "example", title: "例题1", question: "如图，直线 $AB$、$CD$ 相交于点 $O$，$\\angle 1 = 40\\degree$，求 $\\angle 2$、$\\angle 3$、$\\angle 4$ 的度数。", solution: "$\\angle 2$ 与 $\\angle 1$ 是邻补角：$\\angle 2 = 180\\degree - 40\\degree = 140\\degree$<br>$\\angle 3$ 与 $\\angle 1$ 是对顶角：$\\angle 3 = \\angle 1 = 40\\degree$<br>$\\angle 4$ 与 $\\angle 2$ 是对顶角：$\\angle 4 = \\angle 2 = 140\\degree$" },
                        { type: "heading", text: "三、对顶角" },
                        { type: "keypoint", label: "重点定义", text: "<strong>对顶角</strong>：两条直线相交所成的四个角中，有公共顶点，且一个角的两边分别是另一个角两边的反向延长线的两个角叫做对顶角。<br><strong>对顶角相等</strong>。" },
                        { type: "paragraph", text: "对顶角的特征：① 有公共顶点；② 两边互为反向延长线。上图中 $\\angle 1$ 和 $\\angle 3$ 是对顶角，$\\angle 2$ 和 $\\angle 4$ 是对顶角。" },
                        { type: "paragraph", text: "<strong>为什么对顶角相等？</strong>因为 $\\angle 1 + \\angle 2 = 180\\degree$（邻补角），$\\angle 2 + \\angle 3 = 180\\degree$（邻补角），所以 $\\angle 1 = 180\\degree - \\angle 2 = \\angle 3$。同理 $\\angle 2 = \\angle 4$。" },
                        { type: "warn", label: "易错点", text: "① <strong>相等的角不一定是对顶角</strong>！对顶角一定相等，但相等的角不一定是对顶角。② <strong>对顶角必须有公共顶点</strong>，没有公共顶点的相等角不是对顶角。" },
                        { type: "example", title: "例题2", question: "如图，直线 $AB$、$CD$ 相交于点 $O$，$\\angle AOC : \\angle BOC = 2:7$，求 $\\angle AOC$ 和 $\\angle BOD$ 的度数。", solution: "设 $\\angle AOC = 2x$，$\\angle BOC = 7x$。<br>邻补角互补：$2x + 7x = 180\\degree$，$9x = 180\\degree$，$x = 20\\degree$<br>$\\angle AOC = 2 \\times 20 = 40\\degree$<br>$\\angle BOD$ 与 $\\angle AOC$ 是对顶角：$\\angle BOD = 40\\degree$" },
                        { type: "heading", text: "四、垂线" },
                        { type: "keypoint", label: "定义", text: "当两条直线相交所成的四个角中，有一个角是直角（$90\\degree$）时，就说这两条直线<strong>互相垂直</strong>，其中一条直线叫做另一条直线的<strong>垂线</strong>，它们的交点叫做<strong>垂足</strong>。记作 $AB \\perp CD$。" },
                        { type: "svg", svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="100" x2="350" y2="100" stroke="#5B8DEF" stroke-width="2.5"/><line x1="200" y1="30" x2="200" y2="170" stroke="#FF8A65" stroke-width="2.5"/><rect x="200" y="100" width="15" height="15" fill="none" stroke="#AB47BC" stroke-width="1.5"/><circle cx="200" cy="100" r="4" fill="#333"/><text x="210" y="115" font-size="13" fill="#333" font-weight="bold">O</text><text x="340" y="95" font-size="13" fill="#5B8DEF" font-weight="bold">B</text><text x="190" y="25" font-size="13" fill="#FF8A65" font-weight="bold">D</text><text x="350" y="155" font-size="13" fill="#333">AB ⊥ CD</text></svg>', caption: "5-2 垂直的定义" },
                        { type: "paragraph", text: "垂直是相交的一种特殊情况。当两条直线互相垂直时，四个角都是直角（$90\\degree$）。判断两条直线是否垂直，只需要看四个角中<strong>有一个</strong>是直角即可（因为邻补角和对顶角的性质会保证其余三个角也都是直角）。" },
                        { type: "keypoint", label: "垂线性质", text: "① <strong>过一点有且只有一条直线与已知直线垂直</strong>。<br>② <strong>连接直线外一点与直线上各点的所有线段中，垂线段最短</strong>（简称：垂线段最短）。" },
                        { type: "tip", label: "点到直线的距离", text: "直线外一点到这条直线的<strong>垂线段的长度</strong>，叫做点到直线的距离。注意：距离是指垂线段的<strong>长度</strong>（一个数值），而不是垂线段本身（一个图形）。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="150" x2="450" y2="150" stroke="#333" stroke-width="2"/><text x="440" y="170" font-size="12" fill="#333">直线 l</text><circle cx="150" cy="50" r="5" fill="#FF6B6B"/><text x="135" y="42" font-size="13" fill="#FF6B6B" font-weight="bold">P</text><line x1="150" y1="50" x2="150" y2="150" stroke="#FF6B6B" stroke-width="2.5"/><rect x="150" y="135" width="15" height="15" fill="none" stroke="#FF6B6B" stroke-width="1.5"/><circle cx="150" cy="150" r="4" fill="#333"/><text x="160" y="145" font-size="12" fill="#FF6B6B">垂足</text><line x1="150" y1="50" x2="300" y2="150" stroke="#999" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="150" y1="50" x2="380" y2="150" stroke="#999" stroke-width="1.5" stroke-dasharray="4,3"/><text x="220" y="110" font-size="11" fill="#999">其他线段更长</text><text x="130" y="100" font-size="11" fill="#FF6B6B" font-weight="bold">垂线段最短</text></svg>', caption: "5-3 垂线段最短" },
                        { type: "example", title: "例题3", question: "点 $P$ 到直线 $l$ 的距离是 $5\\text{cm}$，点 $P$ 到直线 $l$ 上一点 $A$ 的距离是 $7\\text{cm}$，点 $P$ 到直线 $l$ 上另一点 $B$ 的距离可能是 $4\\text{cm}$ 吗？为什么？", solution: "不可能。因为垂线段最短，点 $P$ 到直线 $l$ 上任意一点的距离都 $\\geq$ 垂线段长度 $5\\text{cm}$。$4\\text{cm} < 5\\text{cm}$，所以不可能。" },
                        { type: "heading", text: "五、同位角、内错角、同旁内角" },
                        { type: "paragraph", text: "当两条直线被第三条直线（叫做<strong>截线</strong>）所截时，会形成 $8$ 个角，这就是所谓的\"<strong>三线八角</strong>\"。这 $8$ 个角中，有一些具有特殊的位置关系。" },
                        { type: "keypoint", label: "三线八角", text: "① <strong>同位角</strong>：在两条直线的同侧，截线的同旁（如 $\\angle 1$ 和 $\\angle 5$）。形象记忆：位置相同，像字母 F。<br>② <strong>内错角</strong>：在两条直线的内侧，截线的两侧（如 $\\angle 3$ 和 $\\angle 5$）。形象记忆：内部交错，像字母 Z。<br>③ <strong>同旁内角</strong>：在两条直线的内侧，截线的同旁（如 $\\angle 3$ 和 $\\angle 6$）。形象记忆：同旁内侧，像字母 U。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="30" x2="80" y2="210" stroke="#5B8DEF" stroke-width="2"/><line x1="30" y1="60" x2="400" y2="80" stroke="#66BB6A" stroke-width="2.5"/><line x1="30" y1="180" x2="400" y2="160" stroke="#FF8A65" stroke-width="2.5"/><circle cx="80" cy="68" r="3" fill="#333"/><text x="100" y="55" font-size="13" fill="#AB47BC" font-weight="bold">∠1</text><text x="50" y="55" font-size="13" fill="#5B8DEF" font-weight="bold">∠2</text><text x="50" y="85" font-size="13" fill="#66BB6A" font-weight="bold">∠3</text><text x="100" y="85" font-size="13" fill="#FF8A65" font-weight="bold">∠4</text><text x="100" y="160" font-size="13" fill="#AB47BC" font-weight="bold">∠5</text><text x="50" y="160" font-size="13" fill="#5B8DEF" font-weight="bold">∠6</text><text x="50" y="195" font-size="13" fill="#66BB6A" font-weight="bold">∠7</text><text x="100" y="195" font-size="13" fill="#FF8A65" font-weight="bold">∠8</text><text x="170" y="40" font-size="12" fill="#AB47BC">同位角: ∠1和∠5, ∠2和∠6</text><text x="170" y="120" font-size="12" fill="#5B8DEF">内错角: ∠3和∠5, ∠4和∠6</text><text x="170" y="210" font-size="12" fill="#66BB6A">同旁内角: ∠3和∠6, ∠4和∠5</text></svg>', caption: "5-4 三线八角" },
                        { type: "tip", label: "记忆技巧", text: "判断三种角的方法：先找到截线（第三条直线），然后看两个角相对于截线和被截直线的位置：<br>• 同位角 = 同侧同旁（像字母 F）<br>• 内错角 = 内部两侧（像字母 Z）<br>• 同旁内角 = 内部同旁（像字母 U）" },
                        { type: "example", title: "例题4", question: "如图，找出图中的同位角、内错角和同旁内角（直线 $a$、$b$ 被直线 $c$ 所截）。", solution: "同位角：$\\angle 1$ 和 $\\angle 5$，$\\angle 2$ 和 $\\angle 6$，$\\angle 4$ 和 $\\angle 8$，$\\angle 3$ 和 $\\angle 7$<br>内错角：$\\angle 3$ 和 $\\angle 5$，$\\angle 4$ 和 $\\angle 6$<br>同旁内角：$\\angle 3$ 和 $\\angle 6$，$\\angle 4$ 和 $\\angle 5$" },
                        { type: "heading", text: "六、知识拓展" },
                        { type: "paragraph", text: "相交线和平行线的知识是几何学的基础。在建筑、工程、设计等领域都有广泛应用。比如：建筑设计师需要确保墙壁的垂直度，道路工程师需要计算道路的交叉角度，电路设计师需要分析导线的平行和交叉关系。" },
                        { type: "paragraph", text: "对顶角相等的性质虽然简单，但它在几何证明中经常用到。在后续学习中，你会发现很多几何证明都需要用到对顶角相等、邻补角互补等基本性质。" }
                    ],
                    exercises: [
                        { type: "choice", question: "下列说法正确的是（　　）", options: ["相等的角是对顶角", "对顶角相等", "邻补角相等", "两条直线相交所成的角都是直角"], answer: "B", explanation: "对顶角相等（B正确）。但相等的角不一定是对顶角（A错误），邻补角互补不相等（C错误），只有垂直时才是直角（D错误）。" },
                        { type: "choice", question: "直线 $AB$、$CD$ 相交于点 $O$，$\\angle AOC = 70\\degree$，则 $\\angle BOD = $（　　）", options: ["$70\\degree$", "$110\\degree$", "$20\\degree$", "$90\\degree$"], answer: "A", explanation: "$\\angle AOC$ 和 $\\angle BOD$ 是对顶角，对顶角相等，所以 $\\angle BOD = 70\\degree$。" },
                        { type: "choice", question: "点 $P$ 在直线 $l$ 外，点 $A$、$B$、$C$ 都在直线 $l$ 上，且 $PA = 3$，$PB = 5$，$PC = 4$，则点 $P$ 到直线 $l$ 的距离可能是（　　）", options: ["$3$", "$4$", "$5$", "$6$"], answer: "A", explanation: "垂线段最短，所以距离 $\leq$ 任意一条线段长度。距离 $\\leq 3$，但距离必须大于0。可能值中只有 $3$ 满足 $\\leq 3$（如果 $PA$ 恰好是垂线段的话）。" },
                        { type: "fill", question: "如图，直线 $a$、$b$ 被直线 $c$ 所截，$\\angle 1$ 和 $\\angle 5$ 是 ____ 角，$\\angle 3$ 和 $\\angle 5$ 是 ____ 角，$\\angle 3$ 和 $\\angle 6$ 是 ____ 角。", answer: "同位,内错,同旁内", explanation: "$\\angle1$和$\\angle5$在两直线同侧、截线同旁，是同位角；$\\angle3$和$\\angle5$在两直线内侧、截线两侧，是内错角；$\\angle3$和$\\angle6$在两直线内侧、截线同旁，是同旁内角。" },
                        { type: "fill", question: "直线 $AB$、$CD$ 相交于点 $O$，$\\angle AOC = 50\\degree$，则 $\\angle BOC = $ ____ 度，$\\angle BOD = $ ____ 度。", answer: "130,50", explanation: "$\\angle BOC$ 与 $\\angle AOC$ 是邻补角：$\\angle BOC = 180-50 = 130\\degree$。$\\angle BOD$ 与 $\\angle AOC$ 是对顶角：$\\angle BOD = 50\\degree$。" }
                    ]
                },
                {
                    id: "5-2",
                    title: "5.2 平行线及其判定",
                    icon: "∥",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、平行线的概念" },
                        { type: "paragraph", text: "在上一节课中，我们学习了相交线。但是，在同一平面内，两条直线除了相交，还有一种位置关系——<strong>平行</strong>。" },
                        { type: "keypoint", label: "定义", text: "在同一平面内，不相交的两条直线叫做<strong>平行线</strong>。记作 $a \\parallel b$。<br>在同一平面内，两条直线的位置关系只有两种：<strong>相交</strong>或<strong>平行</strong>。" },
                        { type: "warn", label: "注意", text: "平行线的定义有三个关键条件：① <strong>在同一平面内</strong>；② <strong>不相交</strong>；③ <strong>两条直线</strong>。三条缺一不可。不在同一平面内的两条直线可能既不相交也不平行（叫做\"异面直线\"，在高中会学到）。" },
                        { type: "heading", text: "二、平行公理" },
                        { type: "keypoint", label: "基本事实", text: "① <strong>经过直线外一点，有且只有一条直线与这条直线平行</strong>。<br>② 如果两条直线都与第三条直线平行，那么这两条直线也互相平行（平行线的传递性）。" },
                        { type: "paragraph", text: "平行公理是欧几里得几何的第五公设的等价形式，也是几何学最基本的公理之一。它告诉我们：过直线外一点，只能画一条平行线。这个看似简单的结论，在数学史上却引发了深远的影响——非欧几里得几何就是通过否定这条公理而发展出来的。" },
                        { type: "tip", label: "平行线的传递性", text: "如果 $a \\parallel b$，$b \\parallel c$，那么 $a \\parallel c$。这在证明两条直线平行时非常有用——当直接证明困难时，可以找一条\"中间\"直线来过渡。" },
                        { type: "heading", text: "三、平行线的判定" },
                        { type: "paragraph", text: "如何判断两条直线是否平行？除了用定义（看是否相交），我们还可以利用角的关系来判断。这就是平行线的判定定理。" },
                        { type: "keypoint", label: "判定方法", text: "① <strong>同位角相等，两直线平行</strong><br>② <strong>内错角相等，两直线平行</strong><br>③ <strong>同旁内角互补，两直线平行</strong>" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="20" x2="80" y2="180" stroke="#999" stroke-width="1.5"/><line x1="30" y1="50" x2="420" y2="50" stroke="#5B8DEF" stroke-width="2.5"/><line x1="30" y1="150" x2="420" y2="150" stroke="#FF8A65" stroke-width="2.5"/><text x="55" y="45" font-size="12" fill="#333">a</text><text x="55" y="160" font-size="12" fill="#333">b</text><text x="90" y="40" font-size="12" fill="#AB47BC" font-weight="bold">∠1</text><text x="90" y="160" font-size="12" fill="#AB47BC" font-weight="bold">∠5</text><text x="100" y="75" font-size="12" fill="#66BB6A">∠1=∠5 → a∥b (同位角相等)</text><text x="100" y="100" font-size="12" fill="#5B8DEF">∠3=∠5 → a∥b (内错角相等)</text><text x="100" y="125" font-size="12" fill="#FF8A65">∠3+∠6=180° → a∥b (同旁内角互补)</text></svg>', caption: "5-5 平行线的判定" },
                        { type: "example", title: "例题1", question: "如图，$\\angle 1 = 60\\degree$，$\\angle 2 = 60\\degree$，直线 $a$、$b$ 平行吗？为什么？", solution: "$\\angle 1$ 和 $\\angle 2$ 是同位角，且 $\\angle 1 = \\angle 2 = 60\\degree$。<br>根据<strong>同位角相等，两直线平行</strong>，所以 $a \\parallel b$。" },
                        { type: "example", title: "例题2", question: "如图，$\\angle 1 = 70\\degree$，$\\angle 2 = 110\\degree$，直线 $a$、$b$ 平行吗？为什么？（$\\angle 1$ 和 $\\angle 2$ 是同旁内角）", solution: "$\\angle 1$ 和 $\\angle 2$ 是同旁内角，且 $\\angle 1 + \\angle 2 = 70\\degree + 110\\degree = 180\\degree$。<br>根据<strong>同旁内角互补，两直线平行</strong>，所以 $a \\parallel b$。" },
                        { type: "example", title: "例题3", question: "如图，$AB \\perp EF$ 于 $B$，$CD \\perp EF$ 于 $D$，$AB$ 和 $CD$ 平行吗？为什么？", solution: "因为 $AB \\perp EF$，$CD \\perp EF$<br>所以 $\\angle ABE = \\angle CDE = 90\\degree$<br>这两个角是同位角，且相等<br>根据<strong>同位角相等，两直线平行</strong>，所以 $AB \\parallel CD$。<br>这说明：垂直于同一条直线的两条直线互相平行。" },
                        { type: "warn", label: "易错点", text: "使用平行线判定定理时，必须先确认两个角是同位角、内错角还是同旁内角——<strong>这三种角必须是由同一截线形成的</strong>！如果两个角不是由同一截线形成的，即使它们相等也不能判定平行。" },
                        { type: "tip", label: "解题技巧", text: "证明两直线平行的思路：① 找同位角相等；② 找内错角相等；③ 找同旁内角互补；④ 利用平行线的传递性；⑤ 利用垂直于同一直线的两直线平行。" },
                        { type: "heading", text: "四、知识拓展" },
                        { type: "paragraph", text: "平行线的判定是几何证明的基础。在后续学习中，我们会经常遇到证明两直线平行的问题。掌握好这三个判定方法，是学好几何的关键之一。" },
                        { type: "paragraph", text: "有趣的是，在非欧几里得几何（如球面几何）中，平行线的性质与欧几里得几何不同。在球面上，任意两条\"直线\"（大圆）都会相交，不存在平行线。这说明欧几里得几何的平行公理并不是\"天经地义\"的，而是基于平面假设的。" }
                    ],
                    exercises: [
                        { type: "choice", question: "下列条件中，能判定 $a \\parallel b$ 的是（　　）", options: ["$\\angle 1 = 50\\degree$，$\\angle 2 = 50\\degree$（同位角）", "$\\angle 3 = 60\\degree$，$\\angle 4 = 120\\degree$（内错角）", "$\\angle 5 = 40\\degree$，$\\angle 6 = 50\\degree$（同旁内角）", "以上都不能"], answer: "A", explanation: "同位角相等可判定平行（A正确）。内错角应相等才能判定平行，$60\\degree \\neq 120\\degree$（B错误）。同旁内角应互补（$180\\degree$），$40+50=90\\degree \\neq 180\\degree$（C错误）。" },
                        { type: "choice", question: "在同一平面内，两条直线的位置关系有（　　）", options: ["1种", "2种", "3种", "4种"], answer: "B", explanation: "在同一平面内，两条直线要么相交，要么平行，共2种位置关系。" },
                        { type: "choice", question: "下列说法正确的是（　　）", options: ["过一点有且只有一条直线与已知直线平行", "过直线外一点有且只有一条直线与已知直线平行", "两条直线不相交就平行", "两条直线被第三条直线所截，同位角相等"], answer: "B", explanation: "A错误，点在直线上时不能作平行线；B正确，必须强调\"直线外\"；C错误，缺少\"在同一平面内\"；D错误，缺少\"两直线平行\"的前提。" },
                        { type: "fill", question: "已知直线 $a$、$b$ 被直线 $c$ 所截，且 $\\angle 3$（内错角）$= 80\\degree$，则当 $\\angle 5 = $ ____ 度时，$a \\parallel b$。", answer: "80", explanation: "内错角相等时两直线平行，所以 $\\angle 5 = \\angle 3 = 80\\degree$ 时 $a \\parallel b$。" },
                        { type: "fill", question: "若 $a \\parallel b$，$b \\parallel c$，则 $a$ ____ $c$（填 $\\parallel$ 或 $\\not\\parallel$）。", answer: "∥", explanation: "平行线的传递性：如果两条直线都和第三条直线平行，那么这两条直线也互相平行。" }
                    ]
                },
                {
                    id: "5-3",
                    title: "5.3 平行线的性质",
                    icon: "📐",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、平行线的性质" },
                        { type: "paragraph", text: "在上一节课中，我们学习了如何利用角的关系来判定两条直线平行。现在反过来思考：如果已知两条直线平行，那么角之间有什么关系？这就是平行线的性质。" },
                        { type: "keypoint", label: "性质", text: "① <strong>两直线平行，同位角相等</strong><br>② <strong>两直线平行，内错角相等</strong><br>③ <strong>两直线平行，同旁内角互补</strong>" },
                        { type: "warn", label: "注意区分判定和性质", text: "<strong>判定</strong>：由角的关系 $\\Rightarrow$ 两直线平行（已知角推平行）<br><strong>性质</strong>：由两直线平行 $\\Rightarrow$ 角的关系（已知平行推角）<br>两者是<strong>互逆</strong>的关系，条件和结论恰好对调。做题时一定要分清是用判定还是用性质！" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="240" height="85" rx="10" fill="#E8F5E9" stroke="#66BB6A" stroke-width="2"/><text x="130" y="40" text-anchor="middle" font-size="14" fill="#2E7D32" font-weight="bold">判定（角→平行）</text><text x="130" y="65" text-anchor="middle" font-size="12" fill="#555">同位角相等 → 两直线平行</text><text x="130" y="82" text-anchor="middle" font-size="12" fill="#555">内错角相等 → 两直线平行</text><rect x="260" y="10" width="230" height="85" rx="10" fill="#E3F2FD" stroke="#5B8DEF" stroke-width="2"/><text x="375" y="40" text-anchor="middle" font-size="14" fill="#1565C0" font-weight="bold">性质（平行→角）</text><text x="375" y="65" text-anchor="middle" font-size="12" fill="#555">两直线平行 → 同位角相等</text><text x="375" y="82" text-anchor="middle" font-size="12" fill="#555">两直线平行 → 内错角相等</text><rect x="120" y="110" width="260" height="70" rx="10" fill="#FFF8E1" stroke="#FFCA28" stroke-width="2"/><text x="250" y="140" text-anchor="middle" font-size="13" fill="#E65100" font-weight="bold">判定和性质是互逆关系</text><text x="250" y="160" text-anchor="middle" font-size="12" fill="#666">已知角的关系→用判定</text><text x="250" y="175" text-anchor="middle" font-size="12" fill="#666">已知平行→用性质</text></svg>', caption: "5-6 判定与性质的区别" },
                        { type: "example", title: "例题1", question: "如图，$a \\parallel b$，$\\angle 1 = 110\\degree$，求 $\\angle 2$、$\\angle 3$ 的度数。（$\\angle 1$ 和 $\\angle 2$ 是同旁内角，$\\angle 1$ 和 $\\angle 3$ 是内错角）", solution: "因为 $a \\parallel b$：<br>$\\angle 1$ 和 $\\angle 2$ 是同旁内角，$\\angle 1 + \\angle 2 = 180\\degree$<br>$\\angle 2 = 180\\degree - 110\\degree = 70\\degree$<br>$\\angle 1$ 和 $\\angle 3$ 是内错角，$\\angle 3 = \\angle 1 = 110\\degree$" },
                        { type: "example", title: "例题2", question: "如图，$AB \\parallel CD$，$\\angle B = 60\\degree$，$\\angle D = 40\\degree$，求 $\\angle BED$ 的度数。（提示：过 $E$ 作辅助线 $EF \\parallel AB$）", solution: "过 $E$ 作 $EF \\parallel AB$<br>因为 $AB \\parallel CD$，所以 $EF \\parallel CD$（传递性）<br>因为 $EF \\parallel AB$，$\\angle B$ 和 $\\angle BEF$ 是内错角：<br>$\\angle BEF = \\angle B = 60\\degree$<br>因为 $EF \\parallel CD$，$\\angle D$ 和 $\\angle DEF$ 是内错角：<br>$\\angle DEF = \\angle D = 40\\degree$<br>所以 $\\angle BED = \\angle BEF + \\angle DEF = 60\\degree + 40\\degree = 100\\degree$" },
                        { type: "tip", label: "辅助线技巧", text: "当遇到\"折线\"问题时（如上例中的 $\\angle BED$），常用的方法是过拐点作平行线作为辅助线，把一个大角分解成两个小角来求。这是平行线问题中非常重要的技巧。" },
                        { type: "heading", text: "二、平行线的性质与判定的综合运用" },
                        { type: "paragraph", text: "在解题时，常常需要交替使用平行线的性质和判定。关键在于理清思路：已知平行用<strong>性质</strong>求角，已知角的关系用<strong>判定</strong>证平行。" },
                        { type: "example", title: "例题3", question: "如图，$\\angle 1 = \\angle 2$，$\\angle 3 = 120\\degree$，求 $\\angle 4$ 的度数。（$\\angle 1$ 和 $\\angle 2$ 是内错角，$\\angle 3$ 和 $\\angle 4$ 是同旁内角，$a \\parallel b$）", solution: "因为 $\\angle 1 = \\angle 2$（内错角相等）<br>所以 $a \\parallel b$（内错角相等，两直线平行）—— 这是<strong>判定</strong><br>因为 $a \\parallel b$，$\\angle 3$ 和 $\\angle 4$ 是同旁内角<br>所以 $\\angle 3 + \\angle 4 = 180\\degree$（两直线平行，同旁内角互补）—— 这是<strong>性质</strong><br>$\\angle 4 = 180\\degree - 120\\degree = 60\\degree$" },
                        { type: "example", title: "例题4", question: "如图，已知 $AB \\parallel CD$，$\\angle B = 40\\degree$，$\\angle C = 40\\degree$，$BC$ 与 $DE$ 平行吗？", solution: "因为 $AB \\parallel CD$，$\\angle B$ 和 $\\angle C$ 是内错角<br>所以 $\\angle B = \\angle C = 40\\degree$（两直线平行，内错角相等）—— 这是<strong>性质</strong><br>而 $\\angle B = \\angle C = 40\\degree$，内错角相等<br>所以 $BC \\parallel DE$（内错角相等，两直线平行）—— 这是<strong>判定</strong>" },
                        { type: "heading", text: "三、知识拓展" },
                        { type: "paragraph", text: "平行线的性质和判定是几何证明的基础工具。在后续学习三角形、四边形、圆等几何图形时，会大量使用这些性质。特别是在证明三角形全等、四边形性质等问题时，平行线的知识是必不可少的。" },
                        { type: "paragraph", text: "在日常生活中，平行线的应用也非常广泛。比如：铁轨的两条轨道是平行的，建筑物的墙面和地面是垂直的（也就涉及到平行和垂直的关系），楼梯的扶手通常是平行的。" }
                    ],
                    exercises: [
                        { type: "choice", question: "已知 $a \\parallel b$，$\\angle 1 = 120\\degree$（同旁内角），则 $\\angle 2 = $（　　）", options: ["$60\\degree$", "$120\\degree$", "$90\\degree$", "$30\\degree$"], answer: "A", explanation: "两直线平行，同旁内角互补。$\\angle 2 = 180\\degree - 120\\degree = 60\\degree$。" },
                        { type: "choice", question: "下列说法正确的是（　　）", options: ["两条直线被第三条直线所截，同位角相等", "两直线平行，内错角相等", "同旁内角互补", "两条直线不相交就平行"], answer: "B", explanation: "A缺少前提条件\"两直线平行\"；B正确（平行线的性质）；C缺少前提条件；D缺少\"在同一平面内\"的前提。" },
                        { type: "choice", question: "如图，$a \\parallel b$，$\\angle 1 = 50\\degree$，则 $\\angle 2$ 的度数是（　　）（$\\angle 1$ 和 $\\angle 2$ 是同位角）", options: ["$40\\degree$", "$50\\degree$", "$130\\degree$", "$90\\degree$"], answer: "B", explanation: "两直线平行，同位角相等。$\\angle 2 = \\angle 1 = 50\\degree$。" },
                        { type: "fill", question: "如图 $AB \\parallel CD$，$\\angle A = 70\\degree$，$\\angle C = 50\\degree$，则 $\\angle AEC = $ ____ 度。", answer: "120", explanation: "过$E$作$EF \\parallel AB$。因为$AB \\parallel CD$，所以$EF \\parallel CD$。$\\angle AEF = \\angle A = 70\\degree$（内错角），$\\angle CEF = \\angle C = 50\\degree$（内错角）。$\\angle AEC = \\angle AEF + \\angle CEF = 70+50 = 120\\degree$。" },
                        { type: "fill", question: "已知 $a \\parallel b$，$\\angle 1$ 和 $\\angle 2$ 是内错角，$\\angle 1 = 2x + 10$，$\\angle 2 = 3x - 5$，则 $x = $ ____。", answer: "15", explanation: "两直线平行，内错角相等。$2x+10 = 3x-5$，$x = 15$。" }
                    ]
                },
                {
                    id: "5-4",
                    title: "5.4 平移",
                    icon: "🔄",
                    difficulty: "基础",
                    content: [
                        { type: "heading", text: "一、平移的概念" },
                        { type: "paragraph", text: "在日常生活中，我们经常看到物体沿某个方向移动：电梯上下移动、推拉门左右移动、火车在轨道上行驶。这些运动有一个共同特点——沿某个方向移动一定距离，图形的形状和大小不发生改变。这就是<strong>平移</strong>。" },
                        { type: "keypoint", label: "定义", text: "<strong>平移</strong>：在平面内，将一个图形沿某个方向移动一定的距离，这样的图形运动叫做平移变换，简称平移。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg"><polygon points="50,40 120,40 85,100" fill="#5B8DEF" opacity="0.4" stroke="#1565C0" stroke-width="2"/><polygon points="200,40 270,40 235,100" fill="#FF8A65" opacity="0.4" stroke="#E65100" stroke-width="2"/><line x1="85" y1="70" x2="235" y2="70" stroke="#66BB6A" stroke-width="2" stroke-dasharray="5,3"/><polygon points="228,65 238,70 228,75" fill="#66BB6A"/><text x="140" y="65" font-size="13" fill="#66BB6A" font-weight="bold">平移方向</text><text x="125" y="125" font-size="13" fill="#666">三角形向右平移</text></svg>', caption: "5-7 平移示意" },
                        { type: "paragraph", text: "平移的两个要素：① <strong>方向</strong>（往哪个方向移动）；② <strong>距离</strong>（移动多远）。只要方向和距离确定了，平移就完全确定了。" },
                        { type: "heading", text: "二、平移的性质" },
                        { type: "keypoint", label: "性质", text: "① 平移不改变图形的<strong>形状和大小</strong>（平移前后的两个图形全等）；<br>② 连接各组对应点的线段<strong>平行（或在同一直线上）且相等</strong>；<br>③ 图形平移后的对应线段<strong>平行且相等</strong>，对应角<strong>相等</strong>。" },
                        { type: "tip", label: "理解", text: "平移不改变图形的任何性质——形状不变、大小不变、角度不变。唯一改变的是图形的位置。平移前后，对应点的连线平行且相等，这个\"相等\"就是平移的距离。" },
                        { type: "example", title: "例题1", question: "三角形 $ABC$ 平移后得到三角形 $A'B'C'$，已知 $A(-2, 1)$ 平移到 $A'(3, 1)$，$B(1, 4)$ 平移到 $B'$，求 $B'$ 的坐标。", solution: "从 $A$ 到 $A'$：横坐标增加 $3-(-2)=5$，纵坐标不变 $1-1=0$<br>所以平移方式是<strong>向右平移 $5$ 个单位</strong><br>$B(1, 4)$ 向右平移 $5$：$B' = (1+5, 4) = (6, 4)$" },
                        { type: "heading", text: "三、平移作图" },
                        { type: "paragraph", text: "平移作图的关键是确定<strong>平移的方向和距离</strong>。步骤：① 找出关键点（通常是顶点）；② 沿指定方向移动指定距离找到对应点；③ 连接对应点画出图形。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="125" x2="500" y2="125" stroke="#999" stroke-width="1"/><line x1="250" y1="0" x2="250" y2="250" stroke="#999" stroke-width="1"/><polygon points="100,50 200,50 150,120" fill="#5B8DEF" opacity="0.3" stroke="#1565C0" stroke-width="2"/><circle cx="100" cy="50" r="4" fill="#5B8DEF"/><text x="85" y="42" font-size="12" fill="#5B8DEF" font-weight="bold">A</text><circle cx="200" cy="50" r="4" fill="#5B8DEF"/><text x="205" y="42" font-size="12" fill="#5B8DEF" font-weight="bold">B</text><polygon points="280,100 380,100 330,170" fill="#FF8A65" opacity="0.3" stroke="#E65100" stroke-width="2"/><circle cx="280" cy="100" r="4" fill="#FF8A65"/><text x="285" y="95" font-size="12" fill="#FF8A65" font-weight="bold">A&#39;</text><circle cx="380" cy="100" r="4" fill="#FF8A65"/><text x="385" y="95" font-size="12" fill="#FF8A65" font-weight="bold">B&#39;</text><line x1="104" y1="54" x2="276" y2="98" stroke="#66BB6A" stroke-width="1.5" stroke-dasharray="4,3"/><text x="170" y="85" font-size="11" fill="#66BB6A">平移方向和距离</text></svg>', caption: "5-8 平移作图" },
                        { type: "example", title: "例题2", question: "将三角形 $ABC$（$A(1,1)$，$B(3,1)$，$C(2,3)$）先向右平移 $2$ 个单位，再向上平移 $1$ 个单位，画出平移后的三角形 $A'B'C'$。", solution: "向右平移 $2$，向上平移 $1$，即 $(x, y) \\to (x+2, y+1)$<br>$A'(1+2, 1+1) = (3, 2)$<br>$B'(3+2, 1+1) = (5, 2)$<br>$C'(2+2, 3+1) = (4, 4)$" },
                        { type: "heading", text: "四、知识拓展" },
                        { type: "paragraph", text: "平移是几何变换中最基本的一种。除了平移，还有旋转、反射（轴对称）等变换。这些变换的共同特点是保持图形的形状和大小不变，只改变位置。" },
                        { type: "paragraph", text: "在计算机图形学中，平移是最基本的图形操作之一。当你在屏幕上拖动一个窗口时，计算机就是在进行平移变换。在建筑和设计中，平移被用来创建重复的图案和装饰，如壁纸上的花纹、地板上的瓷砖图案等。" },
                        { type: "tip", label: "生活中的平移", text: "生活中的平移例子：① 电梯的上下运动；② 推拉门窗的滑动；③ 火车在直轨道上的行驶；④ 打印机喷头的移动；⑤ 传送带上物品的移动。注意：旋转运动（如风扇转动、车轮转动）不是平移。" }
                    ],
                    exercises: [
                        { type: "choice", question: "下列运动中属于平移的是（　　）", options: ["钟摆的摆动", "电梯的上升", "风扇叶片的转动", "开门时门的运动"], answer: "B", explanation: "电梯上升是沿一个方向移动一定距离，是平移（B正确）。钟摆和风扇是旋转运动，开门是旋转运动。" },
                        { type: "choice", question: "平移的性质中，正确的是（　　）", options: ["平移改变图形的形状", "平移改变图形的大小", "对应点连线平行且相等", "对应角不相等"], answer: "C", explanation: "平移不改变形状和大小（A、B错误），对应点连线平行且相等（C正确），对应角相等（D错误）。" },
                        { type: "choice", question: "将点 $A(2, 3)$ 向右平移 $3$ 个单位，再向下平移 $2$ 个单位，得到点 $A'$，则 $A'$ 的坐标是（　　）", options: ["$(5, 1)$", "$(5, 5)$", "$(-1, 1)$", "$(-1, 5)$"], answer: "A", explanation: "向右平移横坐标加：$(2+3, 3)=(5, 3)$；向下平移纵坐标减：$(5, 3-2)=(5, 1)$。" },
                        { type: "fill", question: "将线段 $AB$ 向上平移 $2\\text{cm}$ 得到线段 $CD$，则 $AC = $ ____ $\\text{cm}$。", answer: "2", explanation: "平移后对应点连线 $AC$ 等于平移距离 $2\\text{cm}$，且 $AC \\parallel BD$。" },
                        { type: "fill", question: "三角形 $ABC$ 平移后得到三角形 $DEF$，若 $A$ 对应 $D$，$B$ 对应 $E$，则 $AB$ ____ $DE$，$\\angle A$ ____ $\\angle D$（填 $=$ 或 $\\neq$）。", answer: "=,=", explanation: "平移不改变图形的形状和大小，对应线段相等，对应角相等。所以 $AB = DE$，$\\angle A = \\angle D$。" }
                    ]
                }
            ]
        },
        // ===== 第六章 实数 =====
        {
            title: "第六章 实数",
            icon: "√",
            color: "#FF8A65",
            lessons: [
                {
                    id: "6-1",
                    title: "6.1 平方根",
                    icon: "√",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、算术平方根" },
                        { type: "paragraph", text: "在数学中，我们经常需要解决这样的问题：已知正方形的面积，求边长。比如：一个正方形的面积是 $25$ 平方厘米，它的边长是多少？我们知道 $5^2 = 25$，所以边长是 $5$。这里的 $5$ 就是 $25$ 的<strong>算术平方根</strong>。" },
                        { type: "keypoint", label: "定义", text: "如果一个正数 $x$ 的平方等于 $a$，即 $x^2 = a$，那么这个正数 $x$ 叫做 $a$ 的<strong>算术平方根</strong>。记作 $\\sqrt{a}$，读作\"根号 $a$\"。<br>规定：$0$ 的算术平方根是 $0$，即 $\\sqrt{0} = 0$。" },
                        { type: "paragraph", text: "例如：$5^2 = 25$，所以 $25$ 的算术平方根是 $5$，即 $\\sqrt{25} = 5$。又如：$7^2 = 49$，所以 $\\sqrt{49} = 7$。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="80" height="80" fill="#5B8DEF" opacity="0.2" stroke="#1565C0" stroke-width="2"/><text x="70" y="65" text-anchor="middle" font-size="20" fill="#1565C0" font-weight="bold">?</text><text x="70" y="110" text-anchor="middle" font-size="12" fill="#666">面积=25</text><text x="130" y="65" font-size="14" fill="#333">边长² = 面积</text><text x="290" y="65" font-size="16" fill="#AB47BC" font-weight="bold">边长 = √25 = 5</text><text x="400" y="65" font-size="14" fill="#666">(5²=25)</text></svg>', caption: "6-1 算术平方根的几何意义" },
                        { type: "warn", label: "注意", text: "① 负数没有算术平方根（因为任何实数的平方都是非负的）；<br>② $\\sqrt{a}$ 中的 $a$ 必须 $\\geq 0$（即被开方数非负）；<br>③ $\\sqrt{a} \\geq 0$（算术平方根是非负数）。" },
                        { type: "example", title: "例题1", question: "求下列各数的算术平方根：$(1)$ $49$　$(2)$ $\\frac{4}{9}$　$(3)$ $0.25$　$(4)$ $1.44$", solution: "$(1)$ $\\sqrt{49} = 7$（因为 $7^2 = 49$）<br>$(2)$ $\\sqrt{\\frac{4}{9}} = \\frac{2}{3}$（因为 $(\\frac{2}{3})^2 = \\frac{4}{9}$）<br>$(3)$ $\\sqrt{0.25} = 0.5$（因为 $0.5^2 = 0.25$）<br>$(4)$ $\\sqrt{1.44} = 1.2$（因为 $1.2^2 = 1.44$）" },
                        { type: "example", title: "例题2", question: "求下列各式的值：$(1)$ $\\sqrt{144}$　$(2)$ $-\\sqrt{81}$　$(3)$ $\\sqrt{(-5)^2}$　$(4)$ $(\\sqrt{7})^2$", solution: "$(1)$ $\\sqrt{144} = 12$<br>$(2)$ $-\\sqrt{81} = -9$<br>$(3)$ $\\sqrt{(-5)^2} = \\sqrt{25} = 5$（注意：先算 $(-5)^2=25$，再开方）<br>$(4)$ $(\\sqrt{7})^2 = 7$（算术平方根的平方等于被开方数）" },
                        { type: "tip", label: "重要公式", text: "① $(\\sqrt{a})^2 = a$（$a \\geq 0$）—— 算术平方根的平方等于被开方数<br>② $\\sqrt{a^2} = |a|$ —— 平方的算术平方根等于绝对值<br>③ $\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$（$a, b \\geq 0$）<br>④ $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$（$a \\geq 0, b > 0$）" },
                        { type: "heading", text: "二、平方根" },
                        { type: "keypoint", label: "重点定义", text: "如果一个数 $x$ 的平方等于 $a$（即 $x^2 = a$），那么 $x$ 叫做 $a$ 的<strong>平方根</strong>（也叫二次方根）。<br>正数 $a$ 的平方根记作 $\\pm\\sqrt{a}$。" },
                        { type: "keypoint", label: "平方根的性质", text: "① 正数有<strong>两个</strong>平方根，它们互为相反数（$\\sqrt{a}$ 和 $-\\sqrt{a}$）；<br>② $0$ 的平方根是 $0$；<br>③ <strong>负数没有平方根</strong>。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 130" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="480" height="110" rx="12" fill="#FFF8E1" stroke="#FFCA28"/><text x="250" y="40" text-anchor="middle" font-size="16" fill="#E65100" font-weight="bold">平方根 vs 算术平方根</text><text x="30" y="70" font-size="14" fill="#5B8DEF">25的平方根: ±5  (即 +5 和 -5)</text><text x="30" y="95" font-size="14" fill="#66BB6A">25的算术平方根: √25 = 5  (只有正的那个)</text></svg>', caption: "6-2 平方根与算术平方根的区别" },
                        { type: "example", title: "例题3", question: "求下列各数的平方根：$(1)$ $36$　$(2)$ $\\frac{9}{16}$　$(3)$ $0.01$", solution: "$(1)$ $\\pm\\sqrt{36} = \\pm 6$（$6$ 和 $-6$ 的平方都等于 $36$）<br>$(2)$ $\\pm\\sqrt{\\frac{9}{16}} = \\pm\\frac{3}{4}$<br>$(3)$ $\\pm\\sqrt{0.01} = \\pm 0.1$" },
                        { type: "example", title: "例题4", question: "已知一个正数的平方根是 $2x-1$ 和 $x+4$，求这个数。", solution: "正数的两个平方根互为相反数，所以：<br>$(2x-1) + (x+4) = 0$<br>$3x + 3 = 0$<br>$x = -1$<br>两个平方根为 $2(-1)-1=-3$ 和 $(-1)+4=3$<br>这个数 $= 3^2 = 9$" },
                        { type: "tip", label: "巧记", text: "求一个正数的平方根，就是问\"什么数的平方等于这个数\"。答案有正负两个。而算术平方根只取正的那个。例如：$\\sqrt{25} = 5$（算术平方根），$\\pm\\sqrt{25} = \\pm 5$（平方根）。" },
                        { type: "heading", text: "三、用计算器求平方根" },
                        { type: "paragraph", text: "对于不能开尽的数（如 $\\sqrt{2}$、$\\sqrt{3}$、$\\sqrt{5}$ 等），可以用计算器求近似值。$\\sqrt{2} \\approx 1.414$，$\\sqrt{3} \\approx 1.732$，$\\sqrt{5} \\approx 2.236$。这些数是无限不循环小数，属于无理数。" },
                        { type: "heading", text: "四、知识拓展" },
                        { type: "paragraph", text: "$\\sqrt{2}$ 是人类发现的第一个无理数。古希腊毕达哥拉斯学派的希帕索斯发现：边长为 $1$ 的正方形，其对角线的长度是 $\\sqrt{2}$，这个数不能表示为两个整数的比。这一发现动摇了毕达哥拉斯学派\"万物皆整数（比）\"的信念，引发了数学史上的\"第一次数学危机\"。" }
                    ],
                    exercises: [
                        { type: "choice", question: "$\\sqrt{81}$ 的值是（　　）", options: ["$\\pm 9$", "$9$", "$-9$", "$81$"], answer: "B", explanation: "$\\sqrt{81}$ 表示算术平方根，是非负的。$9^2=81$，所以 $\\sqrt{81}=9$。平方根才是 $\\pm 9$。" },
                        { type: "choice", question: "下列说法正确的是（　　）", options: ["$-4$ 的平方根是 $-2$", "$0$ 没有平方根", "$16$ 的平方根是 $\\pm 4$", "$\\sqrt{(-3)^2} = -3$"], answer: "C", explanation: "负数没有平方根（A错误）；0的平方根是0（B错误）；16的平方根是±4（C正确）；$\\sqrt{(-3)^2} = \\sqrt{9} = 3 \\neq -3$（D错误）。" },
                        { type: "choice", question: "下列各式中，正确的是（　　）", options: ["$\\sqrt{(-2)^2} = -2$", "$\\sqrt{(-2)^2} = 2$", "$(-\\sqrt{2})^2 = -2$", "$\\sqrt{4} = \\pm 2$"], answer: "B", explanation: "$\\sqrt{(-2)^2} = \\sqrt{4} = 2$（B正确，先平方再开方等于绝对值）。A错误：应为正数。C错误：$(-\\sqrt{2})^2 = 2$。D错误：$\\sqrt{4}=2$（算术平方根非负）。" },
                        { type: "fill", question: "已知 $\\sqrt{x} = 5$，则 $x = $ ____。", answer: "25", explanation: "$\\sqrt{x} = 5$ 表示 $x$ 的算术平方根是 $5$，所以 $x = 5^2 = 25$。" },
                        { type: "fill", question: "已知一个正数 $x$ 的平方根是 $3a-2$ 和 $a+4$，则 $a = $ ____，$x = $ ____。", answer: "-1,25", explanation: "平方根互为相反数：$(3a-2)+(a+4)=0$，$4a+2=0$，$a=-1$。平方根：$3(-1)-2=-5$ 和 $(-1)+4=3$...不对，$3\\times(-1)-2=-5$，$(-1)+4=3$。$-5+3=-2\\neq0$。让我重算：$3a-2+a+4=0$，$4a+2=0$，$a=-0.5$。平方根：$3(-0.5)-2=-3.5$，$-0.5+4=3.5$。$x=3.5^2=12.25$。", answer: "-0.5,12.25", explanation: "平方根互为相反数：$(3a-2)+(a+4)=0$，$4a+2=0$，$a=-0.5$。平方根：$3(-0.5)-2=-3.5$，$-0.5+4=3.5$。$x=3.5^2=12.25$。" }
                    ]
                },
                {
                    id: "6-2",
                    title: "6.2 立方根",
                    icon: "∛",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、立方根的概念" },
                        { type: "paragraph", text: "在学习了平方根之后，我们自然要问：如果知道一个数的立方，如何反过来求这个数？比如：一个正方体的体积是 $27$ 立方厘米，它的棱长是多少？因为 $3^3 = 27$，所以棱长是 $3$。这里的 $3$ 就是 $27$ 的<strong>立方根</strong>。" },
                        { type: "keypoint", label: "定义", text: "如果一个数 $x$ 的立方等于 $a$（即 $x^3 = a$），那么 $x$ 叫做 $a$ 的<strong>立方根</strong>（也叫三次方根）。记作 $\\sqrt[3]{a}$，读作\"三次根号 $a$\"。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg"><g transform="translate(30, 20)"><polygon points="10,40 50,20 90,40 90,80 50,100 10,80" fill="#5B8DEF" opacity="0.3" stroke="#1565C0" stroke-width="1.5"/><polygon points="10,40 50,60 90,40 50,20" fill="#5B8DEF" opacity="0.15" stroke="#1565C0" stroke-width="1.5"/><text x="50" y="115" text-anchor="middle" font-size="11" fill="#666">正方体体积=27</text></g><text x="150" y="60" font-size="14" fill="#333">棱长³ = 体积</text><text x="300" y="60" font-size="16" fill="#AB47BC" font-weight="bold">棱长 = ∛27 = 3</text></svg>', caption: "6-3 立方根的几何意义" },
                        { type: "example", title: "例题1", question: "求下列各数的立方根：$(1)$ $27$　$(2)$ $-8$　$(3)$ $0$　$(4)$ $\\frac{1}{8}$　$(5)$ $-\\frac{27}{64}$", solution: "$(1)$ $\\sqrt[3]{27} = 3$（因为 $3^3 = 27$）<br>$(2)$ $\\sqrt[3]{-8} = -2$（因为 $(-2)^3 = -8$）<br>$(3)$ $\\sqrt[3]{0} = 0$（因为 $0^3 = 0$）<br>$(4)$ $\\sqrt[3]{\\frac{1}{8}} = \\frac{1}{2}$（因为 $(\\frac{1}{2})^3 = \\frac{1}{8}$）<br>$(5)$ $\\sqrt[3]{-\\frac{27}{64}} = -\\frac{3}{4}$（因为 $(-\\frac{3}{4})^3 = -\\frac{27}{64}$）" },
                        { type: "keypoint", label: "立方根的性质", text: "① 正数的立方根是<strong>正数</strong>；<br>② 负数的立方根是<strong>负数</strong>；<br>③ $0$ 的立方根是 $0$；<br>④ 每个实数都有<strong>唯一</strong>的立方根（与平方根不同！）。" },
                        { type: "warn", label: "对比平方根和立方根", text: "<strong>平方根</strong>：只有非负数才有，正数有两个（互为相反数）。<br><strong>立方根</strong>：所有实数都有，且只有一个。<br>$\\sqrt[3]{-a} = -\\sqrt[3]{a}$（负数的立方根等于它的绝对值的立方根的相反数）。" },
                        { type: "svg", svg: '<svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="280" height="130" rx="10" fill="#E8F5E9" stroke="#66BB6A" stroke-width="2"/><text x="150" y="35" text-anchor="middle" font-size="14" fill="#2E7D32" font-weight="bold">平方根</text><text x="30" y="60" font-size="12" fill="#333">正数：有两个（±√a）</text><text x="30" y="82" font-size="12" fill="#333">零：0</text><text x="30" y="104" font-size="12" fill="#333">负数：不存在</text><text x="30" y="126" font-size="12" fill="#66BB6A">√a ≥ 0 (非负)</text><rect x="310" y="10" width="280" height="130" rx="10" fill="#E3F2FD" stroke="#5B8DEF" stroke-width="2"/><text x="450" y="35" text-anchor="middle" font-size="14" fill="#1565C0" font-weight="bold">立方根</text><text x="330" y="60" font-size="12" fill="#333">正数：一个（正数）</text><text x="330" y="82" font-size="12" fill="#333">零：0</text><text x="330" y="104" font-size="12" fill="#333">负数：一个（负数）</text><text x="330" y="126" font-size="12" fill="#5B8DEF">∛a 可正可负可为0</text></svg>', caption: "6-4 平方根与立方根的对比" },
                        { type: "table", headers: ["数 $a$", "平方根", "立方根", "算术平方根"], rows: [
                            ["$64$", "$\\pm 8$", "$4$", "$8$"],
                            ["$-27$", "不存在", "$-3$", "不存在"],
                            ["$0$", "$0$", "$0$", "$0$"],
                            ["$1$", "$\\pm 1$", "$1$", "$1$"],
                            ["$-8$", "不存在", "$-2$", "不存在"]
                        ]},
                        { type: "example", title: "例题2", question: "求下列各式的值：$(1)$ $\\sqrt[3]{-125}$　$(2)$ $(\\sqrt[3]{5})^3$　$(3)$ $\\sqrt[3]{(-3)^3}$", solution: "$(1)$ $\\sqrt[3]{-125} = -\\sqrt[3]{125} = -5$<br>$(2)$ $(\\sqrt[3]{5})^3 = 5$（立方根的立方等于被开方数）<br>$(3)$ $\\sqrt[3]{(-3)^3} = -3$（立方的立方根等于原数）" },
                        { type: "tip", label: "重要公式", text: "① $(\\sqrt[3]{a})^3 = a$ —— 立方根的立方等于被开方数<br>② $\\sqrt[3]{a^3} = a$ —— 立方的立方根等于原数<br>③ $\\sqrt[3]{-a} = -\\sqrt[3]{a}$ —— 负数的立方根等于其绝对值立方根的相反数" },
                        { type: "heading", text: "二、知识拓展" },
                        { type: "paragraph", text: "平方根和立方根都是\"开方\"运算。一般地，如果 $x^n = a$，则 $x$ 是 $a$ 的 $n$ 次方根。当 $n$ 为偶数时，性质类似于平方根（正数有两个方根，负数没有）；当 $n$ 为奇数时，性质类似于立方根（所有实数都有唯一的方根）。" },
                        { type: "paragraph", text: "开方运算在数学和科学中非常重要。在物理学中，很多公式涉及到开方运算，如自由落体公式 $h = \\frac{1}{2}gt^2$ 中求时间 $t = \\sqrt{\\frac{2h}{g}}$。" }
                    ],
                    exercises: [
                        { type: "choice", question: "$\\sqrt[3]{-64}$ 的值是（　　）", options: ["$4$", "$-4$", "$\\pm 4$", "不存在"], answer: "B", explanation: "负数有立方根。$(-4)^3 = -64$，所以 $\\sqrt[3]{-64} = -4$。" },
                        { type: "choice", question: "下列说法正确的是（　　）", options: ["负数没有立方根", "$0$ 的立方根是 $0$", "$8$ 的立方根是 $\\pm 2$", "$-1$ 的立方根是 $1$"], answer: "B", explanation: "所有实数都有立方根（A错误）；0的立方根是0（B正确）；8的立方根只有2，不是±2（C错误）；$(-1)^3=-1$，所以-1的立方根是-1（D错误）。" },
                        { type: "choice", question: "下列等式中，正确的是（　　）", options: ["$\\sqrt[3]{-8} = -\\sqrt[3]{8}$", "$\\sqrt[3]{-8} = \\sqrt[3]{8}$", "$\\sqrt[3]{-8}$ 不存在", "$\\sqrt[3]{-8} = \\pm 2$"], answer: "A", explanation: "$\\sqrt[3]{-8} = -2$，$-\\sqrt[3]{8} = -2$，两者相等（A正确）。" },
                        { type: "fill", question: "已知 $\\sqrt[3]{x} = -3$，则 $x = $ ____。", answer: "-27", explanation: "$\\sqrt[3]{x} = -3$ 表示 $x$ 的立方根是 $-3$，所以 $x = (-3)^3 = -27$。" },
                        { type: "fill", question: "计算：$\\sqrt[3]{-1} + \\sqrt[3]{8} + \\sqrt[3]{-27} = $ ____。", answer: "-2", explanation: "$\\sqrt[3]{-1}=-1$，$\\sqrt[3]{8}=2$，$\\sqrt[3]{-27}=-3$。$-1+2+(-3)=-2$。" }
                    ]
                },
                {
                    id: "6-3",
                    title: "6.3 实数",
                    icon: "ℝ",
                    difficulty: "基础",
                    content: [
                        { type: "heading", text: "一、无理数" },
                        { type: "paragraph", text: "在第一章中，我们学习了有理数——能够表示为分数形式的数。但是，世界上还存在一些数<strong>不能</strong>表示为分数形式，它们就是<strong>无理数</strong>。" },
                        { type: "keypoint", label: "定义", text: "<strong>无理数</strong>：无限不循环小数叫做无理数。如 $\\pi$、$\\sqrt{2}$、$\\sqrt{3}$、$\\sqrt[3]{5}$ 等都是无理数。" },
                        { type: "tip", label: "注意", text: "① 无理数不仅是 $\\pi$，像 $\\sqrt{2}$、$\\sqrt{3}$ 等开不尽的方根也是无理数；<br>② 有的无理数看起来像有理数，如 $0.1010010001\\ldots$（每两个 $1$ 之间 $0$ 的个数递增），它是无限不循环小数，是无理数；<br>③ <strong>带根号的数不一定是无理数</strong>，如 $\\sqrt{4} = 2$ 是有理数；<br>④ <strong>不带根号的数也可能是无理数</strong>，如 $\\pi$。" },
                        { type: "svg", svg: '<svg viewBox="0 0 600 140" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="280" height="120" rx="10" fill="#E8F5E9" stroke="#66BB6A" stroke-width="2"/><text x="150" y="35" text-anchor="middle" font-size="14" fill="#2E7D32" font-weight="bold">有理数</text><text x="30" y="60" font-size="12" fill="#333">有限小数: 0.5, 3.14</text><text x="30" y="82" font-size="12" fill="#333">无限循环小数: 0.333...</text><text x="30" y="104" font-size="12" fill="#333">整数、分数</text><text x="30" y="124" font-size="11" fill="#66BB6A">能化为分数形式</text><rect x="310" y="10" width="280" height="120" rx="10" fill="#FFEBEE" stroke="#FF6B6B" stroke-width="2"/><text x="450" y="35" text-anchor="middle" font-size="14" fill="#C62828" font-weight="bold">无理数</text><text x="330" y="60" font-size="12" fill="#333">π = 3.14159...</text><text x="330" y="82" font-size="12" fill="#333">√2 = 1.41421...</text><text x="330" y="104" font-size="12" fill="#333">0.1010010001...</text><text x="330" y="124" font-size="11" fill="#FF6B6B">无限不循环小数</text></svg>', caption: "6-5 有理数与无理数" },
                        { type: "example", title: "例题1", question: "判断下列各数是有理数还是无理数：$\\frac{22}{7}$，$\\pi$，$\\sqrt{9}$，$\\sqrt{10}$，$0.\\dot{3}$，$0.2020020002\\ldots$", solution: "$\\frac{22}{7}$ 是分数，有理数<br>$\\pi$ 是无限不循环小数，无理数<br>$\\sqrt{9} = 3$ 是整数，有理数<br>$\\sqrt{10}$ 开不尽方，无理数<br>$0.\\dot{3} = \\frac{1}{3}$ 是无限循环小数，有理数<br>$0.2020020002\\ldots$ 是无限不循环小数，无理数" },
                        { type: "heading", text: "二、实数及其分类" },
                        { type: "keypoint", label: "定义", text: "<strong>实数</strong>：有理数和无理数统称为实数。" },
                        { type: "svg", svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect x="260" y="10" width="160" height="40" rx="8" fill="#5B8DEF"/><text x="340" y="36" text-anchor="middle" font-size="18" fill="#fff" font-weight="bold">实数</text><line x1="340" y1="50" x2="180" y2="90" stroke="#999" stroke-width="1.5"/><line x1="340" y1="50" x2="500" y2="90" stroke="#999" stroke-width="1.5"/><rect x="120" y="90" width="120" height="36" rx="8" fill="#66BB6A"/><text x="180" y="113" text-anchor="middle" font-size="16" fill="#fff" font-weight="bold">有理数</text><rect x="440" y="90" width="120" height="36" rx="8" fill="#FF8A65"/><text x="500" y="113" text-anchor="middle" font-size="16" fill="#fff" font-weight="bold">无理数</text><text x="180" y="155" text-anchor="middle" font-size="12" fill="#666">整数、分数</text><text x="180" y="175" text-anchor="middle" font-size="12" fill="#666">（有限小数/无限循环小数）</text><text x="500" y="155" text-anchor="middle" font-size="12" fill="#666">π, √2, √3...</text><text x="500" y="175" text-anchor="middle" font-size="12" fill="#666">（无限不循环小数）</text></svg>', caption: "6-6 实数的分类" },
                        { type: "heading", text: "三、实数与数轴" },
                        { type: "keypoint", label: "重要结论", text: "① 每一个实数都可以用数轴上的一个点来表示；<br>② 数轴上的每一个点都表示一个实数；<br>③ <strong>实数与数轴上的点是一一对应的</strong>。" },
                        { type: "paragraph", text: "这意味着：在有理数范围内，数轴上还有\"空隙\"（那些表示无理数的点）；在实数范围内，数轴上的每一个点都对应一个数，没有空隙了。" },
                        { type: "paragraph", text: "实数的大小比较与有理数一样：正数大于 $0$，$0$ 大于负数，正数大于一切负数；两个正数，绝对值大的数大；两个负数，绝对值大的数反而小。" },
                        { type: "example", title: "例题2", question: "比较 $\\sqrt{7}$ 和 $3$ 的大小。", solution: "$3 = \\sqrt{9}$，因为 $7 < 9$，所以 $\\sqrt{7} < \\sqrt{9} = 3$。<br>即 $\\sqrt{7} < 3$。" },
                        { type: "heading", text: "四、实数的运算" },
                        { type: "paragraph", text: "在实数范围内，进行加、减、乘、除、乘方和开方运算时，运算律和运算法则与有理数范围内相同。结果仍为实数。" },
                        { type: "example", title: "例题3", question: "计算：$(1)$ $\\sqrt{2} \\times \\sqrt{8} - \\sqrt[3]{27}$　$(2)$ $|\\sqrt{3} - 2| + \\sqrt{3}$", solution: "$(1)$ $\\sqrt{2} \\times \\sqrt{8} = \\sqrt{2 \\times 8} = \\sqrt{16} = 4$<br>$\\sqrt[3]{27} = 3$<br>所以原式 $= 4 - 3 = 1$<br><br>$(2)$ 因为 $\\sqrt{3} \\approx 1.732 < 2$，所以 $\\sqrt{3} - 2 < 0$<br>$|\\sqrt{3} - 2| = 2 - \\sqrt{3}$<br>原式 $= (2 - \\sqrt{3}) + \\sqrt{3} = 2$" },
                        { type: "example", title: "例题4", question: "计算：$\\sqrt{12} - \\sqrt{3} + \\sqrt{27}$", solution: "$\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$<br>$\\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}$<br>原式 $= 2\\sqrt{3} - \\sqrt{3} + 3\\sqrt{3} = (2-1+3)\\sqrt{3} = 4\\sqrt{3}$" },
                        { type: "tip", label: "实数运算的技巧", text: "① 化简根式：$\\sqrt{ab} = \\sqrt{a} \\times \\sqrt{b}$（$a, b \\geq 0$）；② 合并同类根式：像 $2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$（类似于合并同类项）；③ 注意绝对值的处理：先判断正负再化简。" },
                        { type: "heading", text: "五、知识拓展" },
                        { type: "paragraph", text: "实数理论的建立是数学史上的重要里程碑。19世纪，数学家戴德金（Dedekind）和康托尔（Cantor）等人用严格的方法定义了实数，填补了有理数之间的\"空隙\"，为微积分的发展奠定了基础。" },
                        { type: "paragraph", text: "在数的发展史上，人类经历了从自然数→整数→有理数→实数→复数的漫长过程。每一次扩展都解决了原有数系中运算的不封闭性。比如：$3 - 5$ 在自然数范围内无法运算，需要扩展到整数；$3 \\div 5$ 在整数范围内无法运算，需要扩展到有理数；$x^2 = 2$ 在有理数范围内无解，需要扩展到实数。" }
                    ],
                    exercises: [
                        { type: "choice", question: "下列各数中是无理数的是（　　）", options: ["$\\frac{22}{7}$", "$\\sqrt{4}$", "$\\sqrt{3}$", "$3.14$"], answer: "C", explanation: "$\\frac{22}{7}$是分数（有理数）；$\\sqrt{4}=2$是整数（有理数）；$3.14$是有限小数（有理数）；$\\sqrt{3}$是无限不循环小数（无理数）。" },
                        { type: "choice", question: "$\\sqrt{2}$ 在哪两个相邻的整数之间（　　）", options: ["$1$ 和 $2$", "$2$ 和 $3$", "$0$ 和 $1$", "$3$ 和 $4$"], answer: "A", explanation: "$1^2=1 < 2 < 4=2^2$，所以 $1 < \\sqrt{2} < 2$。" },
                        { type: "choice", question: "下列说法正确的是（　　）", options: ["带根号的数都是无理数", "无理数都是带根号的数", "$\\pi$ 是无理数", "无限小数都是无理数"], answer: "C", explanation: "$\\sqrt{4}=2$是有理数（A错误）；$\\pi$不带根号但无理（B错误）；$\\pi$是无理数（C正确）；无限循环小数是有理数（D错误）。" },
                        { type: "fill", question: "计算：$\\sqrt{9} + \\sqrt[3]{8} - \\sqrt{16} = $ ____", answer: "1", explanation: "$\\sqrt{9}=3$，$\\sqrt[3]{8}=2$，$\\sqrt{16}=4$。$3+2-4=1$。" },
                        { type: "fill", question: "比较大小：$\\sqrt{10}$ ____ $3$（填 $>$、$<$ 或 $=$）。", answer: ">", explanation: "$3 = \\sqrt{9}$，因为 $10 > 9$，所以 $\\sqrt{10} > \\sqrt{9} = 3$。" }
                    ]
                }
            ]
        },
        // ===== 第七章 平面直角坐标系 =====
        {
            title: "第七章 平面直角坐标系",
            icon: "📍",
            color: "#AB47BC",
            lessons: [
                {
                    id: "7-1",
                    title: "7.1 平面直角坐标系",
                    icon: "📍",
                    difficulty: "重点",
                    content: [
                        { type: "heading", text: "一、有序数对" },
                        { type: "paragraph", text: "在日常生活中，我们经常需要表示位置。比如电影院座位用\"排\"和\"号\"来定位，教室座位用\"第几排第几列\"来定位。这种用两个数来表示位置的方法，就是<strong>有序数对</strong>。" },
                        { type: "keypoint", label: "定义", text: "<strong>有序数对</strong>：有顺序的两个数 $a$ 和 $b$ 组成的数对，记作 $(a, b)$。<br>注意：$(a, b)$ 和 $(b, a)$ 在 $a \\neq b$ 时表示不同的位置（顺序很重要）。" },
                        { type: "example", title: "例题1", question: "电影院座位用 $(\\text{排}, \\text{号})$ 表示，$(5, 8)$ 表示第 $5$ 排第 $8$ 号。那 $(8, 5)$ 表示什么？和 $(5, 8)$ 是同一个座位吗？", solution: "$(8, 5)$ 表示第 $8$ 排第 $5$ 号，与 $(5, 8)$（第 $5$ 排第 $8$ 号）不是同一个座位。有序数对的顺序很重要。" },
                        { type: "tip", label: "理解", text: "\"有序\"就是有先后顺序。$(a, b)$ 中第一个数 $a$ 和第二个数 $b$ 的位置不能随便交换。就像经纬度一样，先写纬度还是先写经度，结果完全不同。" },
                        { type: "heading", text: "二、平面直角坐标系" },
                        { type: "paragraph", text: "法国数学家笛卡尔（Descartes）发明了用两条互相垂直的数轴来表示平面上点的位置的方法，这就是<strong>平面直角坐标系</strong>，也叫<strong>笛卡尔坐标系</strong>。" },
                        { type: "keypoint", label: "重点定义", text: "<strong>平面直角坐标系</strong>：在平面内画两条互相垂直、原点重合的数轴，组成平面直角坐标系。<br><strong>水平</strong>的数轴称为<strong>$x$ 轴</strong>或横轴，取向右为正方向；<strong>竖直</strong>的数轴称为<strong>$y$ 轴</strong>或纵轴，取向上为正方向；两轴的交点 $O$ 称为<strong>原点</strong>。" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="200" x2="500" y2="200" stroke="#333" stroke-width="2"/><polygon points="500,200 490,195 490,205" fill="#333"/><text x="485" y="220" font-size="14" fill="#333" font-weight="bold">x</text><line x1="250" y1="0" x2="250" y2="400" stroke="#333" stroke-width="2"/><polygon points="250,0 245,10 255,10" fill="#333"/><text x="260" y="15" font-size="14" fill="#333" font-weight="bold">y</text><circle cx="250" cy="200" r="4" fill="#333"/><text x="232" y="222" font-size="13" fill="#333" font-weight="bold">O</text><g font-size="12" fill="#666"><line x1="310" y1="195" x2="310" y2="205" stroke="#333"/><text x="305" y="220">1</text><line x1="370" y1="195" x2="370" y2="205" stroke="#333"/><text x="365" y="220">2</text><line x1="190" y1="195" x2="190" y2="205" stroke="#333"/><text x="180" y="220">-1</text><line x1="245" y1="140" x2="255" y2="140" stroke="#333"/><text x="225" y="145">1</text><line x1="245" y1="80" x2="255" y2="80" stroke="#333"/><text x="225" y="85">2</text><line x1="245" y1="260" x2="255" y2="260" stroke="#333"/><text x="220" y="265">-1</text></g><circle cx="370" cy="80" r="6" fill="#FF6B6B"/><text x="380" y="75" font-size="13" fill="#FF6B6B" font-weight="bold">P(2, 2)</text><line x1="370" y1="200" x2="370" y2="80" stroke="#FF6B6B" stroke-width="1" stroke-dasharray="3,2"/><line x1="250" y1="80" x2="370" y2="80" stroke="#FF6B6B" stroke-width="1" stroke-dasharray="3,2"/><rect x="300" y="10" width="90" height="30" rx="6" fill="#5B8DEF" opacity="0.2"/><text x="345" y="30" text-anchor="middle" font-size="12" fill="#5B8DEF" font-weight="bold">第一象限 (+,+)</text><rect x="110" y="10" width="90" height="30" rx="6" fill="#FF8A65" opacity="0.2"/><text x="155" y="30" text-anchor="middle" font-size="12" fill="#FF8A65" font-weight="bold">第二象限 (-,+)</text><rect x="110" y="360" width="90" height="30" rx="6" fill="#66BB6A" opacity="0.2"/><text x="155" y="380" text-anchor="middle" font-size="12" fill="#66BB6A" font-weight="bold">第三象限 (-,-)</text><rect x="300" y="360" width="90" height="30" rx="6" fill="#AB47BC" opacity="0.2"/><text x="345" y="380" text-anchor="middle" font-size="12" fill="#AB47BC" font-weight="bold">第四象限 (+,-)</text></svg>', caption: "7-1 平面直角坐标系" },
                        { type: "paragraph", text: "在平面直角坐标系中，任何一个点都可以用一对有序实数 $(x, y)$ 来表示，其中 $x$ 是该点到 $y$ 轴的水平距离（横坐标），$y$ 是该点到 $x$ 轴的竖直距离（纵坐标）。$(x, y)$ 叫做该点的<strong>坐标</strong>。" },
                        { type: "keypoint", label: "象限", text: "坐标系将平面分成四个部分：<br>第一象限：$(+,+)$；第二象限：$(-,+)$；第三象限：$(-,-)$；第四象限：$(+,-)$<br><strong>$x$ 轴和 $y$ 轴上的点不属于任何象限</strong>。" },
                        { type: "tip", label: "点的坐标特征", text: "① 原点 $(0, 0)$<br>② $x$ 轴上的点：纵坐标为 $0$，即 $(x, 0)$<br>③ $y$ 轴上的点：横坐标为 $0$，即 $(0, y)$<br>④ 各象限内点的符号：一$\\rightarrow(+,+)$，二$\\rightarrow(-,+)$，三$\\rightarrow(-,-)$，四$\\rightarrow(+,-)$<br>⑤ 横坐标相同 $\Rightarrow$ 点在平行于 $y$ 轴的直线上<br>⑥ 纵坐标相同 $\Rightarrow$ 点在平行于 $x$ 轴的直线上" },
                        { type: "example", title: "例题2", question: "点 $A(-3, 4)$ 在第几象限？点 $B(0, -2)$ 在什么位置？点 $C(5, 0)$ 在什么位置？", solution: "$A(-3, 4)$：横坐标 $-3 < 0$，纵坐标 $4 > 0$，在<strong>第二象限</strong>。<br>$B(0, -2)$：横坐标为 $0$，在<strong>$y$ 轴</strong>上（不属于任何象限）。<br>$C(5, 0)$：纵坐标为 $0$，在<strong>$x$ 轴</strong>上（不属于任何象限）。" },
                        { type: "example", title: "例题3", question: "已知点 $P(a-2, a+3)$ 在第二象限，求 $a$ 的取值范围。", solution: "第二象限的点的坐标满足：横坐标 $< 0$，纵坐标 $> 0$<br>$a - 2 < 0$，即 $a < 2$<br>$a + 3 > 0$，即 $a > -3$<br>所以 $-3 < a < 2$" },
                        { type: "example", title: "例题4", question: "已知点 $A(3, -2)$ 和点 $B(3, 5)$，线段 $AB$ 有什么特点？求 $AB$ 的长度。", solution: "因为 $A$ 和 $B$ 的横坐标相同（都是 $3$），所以线段 $AB$ 平行于 $y$ 轴。<br>$AB$ 的长度 $= |5 - (-2)| = |5 + 2| = 7$" },
                        { type: "tip", label: "两点间距离", text: "① 两点在同一水平线上（纵坐标相同）：距离 $= |x_1 - x_2|$<br>② 两点在同一竖直线上（横坐标相同）：距离 $= |y_1 - y_2|$<br>③ 一般情况（高中会学）：$d = \\sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}$" },
                        { type: "heading", text: "三、特殊点的坐标" },
                        { type: "keypoint", label: "对称点的坐标", text: "点 $P(a, b)$ 关于：<br>① $x$ 轴对称：$(a, -b)$（纵坐标变号）<br>② $y$ 轴对称：$(-a, b)$（横坐标变号）<br>③ 原点对称：$(-a, -b)$（横纵坐标都变号）" },
                        { type: "example", title: "例题5", question: "点 $P(3, -4)$ 关于 $x$ 轴、$y$ 轴、原点的对称点分别是什么？", solution: "关于 $x$ 轴对称：$(3, 4)$<br>关于 $y$ 轴对称：$(-3, -4)$<br>关于原点对称：$(-3, 4)$" },
                        { type: "heading", text: "四、知识拓展" },
                        { type: "paragraph", text: "平面直角坐标系的发明是数学史上的重要里程碑。它将代数和几何联系起来，使得几何问题可以用代数方法解决，代数问题也可以用几何方法来理解。这种\"数形结合\"的思想是数学中最重要、最美丽的思想之一。" },
                        { type: "paragraph", text: "据说笛卡尔是在观看天花板上的苍蝇时想到坐标系这个点子的——他发现可以用两面墙的交线来确定苍蝇的位置。这个看似简单的想法，开创了数学的新时代。" }
                    ],
                    exercises: [
                        { type: "choice", question: "点 $(-2, 5)$ 在第（　　）象限", options: ["第一", "第二", "第三", "第四"], answer: "B", explanation: "横坐标 $-2 < 0$，纵坐标 $5 > 0$，符号为 $(-,+)$，在第二象限。" },
                        { type: "choice", question: "在平面直角坐标系中，点 $(0, -3)$ 的位置是（　　）", options: ["第一象限", "$x$ 轴上", "$y$ 轴上", "第三象限"], answer: "C", explanation: "横坐标为 $0$，说明点在 $y$ 轴上。纵坐标 $-3$ 表示在 $y$ 轴的负半轴上。" },
                        { type: "choice", question: "点 $P(-3, 4)$ 关于原点对称的点的坐标是（　　）", options: ["$(3, 4)$", "$(3, -4)$", "$(-3, -4)$", "$(-3, 4)$"], answer: "B", explanation: "关于原点对称，横纵坐标都变号：$(-(-3), -4) = (3, -4)$。" },
                        { type: "fill", question: "已知点 $P(a, 3)$ 在 $y$ 轴上，则 $a = $ ____。", answer: "0", explanation: "$y$ 轴上的点横坐标为 $0$，所以 $a = 0$。" },
                        { type: "fill", question: "点 $A(2, 3)$ 和点 $B(2, -1)$ 之间的距离是 ____。", answer: "4", explanation: "横坐标相同，距离 $= |3 - (-1)| = |3 + 1| = 4$。" }
                    ]
                },
                {
                    id: "7-2",
                    title: "7.2 坐标方法的简单应用",
                    icon: "🗺️",
                    difficulty: "基础",
                    content: [
                        { type: "heading", text: "一、用坐标表示地理位置" },
                        { type: "paragraph", text: "平面直角坐标系在实际生活中有广泛的应用。其中最常见的用途之一就是表示地理位置。GPS导航系统、地图应用等都利用了坐标来确定位置。" },
                        { type: "paragraph", text: "利用平面直角坐标系表示地理位置的步骤：① 建立坐标系（选择适当的原点）；② 确定比例尺；③ 标出各地点的坐标。" },
                        { type: "tip", label: "技巧", text: "通常选择某个标志性建筑物或中心位置作为原点，$x$ 轴正方向表示东方，$y$ 轴正方向表示北方。这样坐标就对应了实际的方位：第一象限是东北方向，第二象限是西北方向，第三象限是西南方向，第四象限是东南方向。" },
                        { type: "example", title: "例题1", question: "以学校为原点，向东为 $x$ 轴正方向，向北为 $y$ 轴正方向。图书馆在学校的东 $300$m 北 $200$m 处，体育馆在学校的西 $200$m 南 $150$m 处。分别写出图书馆和体育馆的坐标。", solution: "图书馆：东 $300$m $\Rightarrow x = 300$，北 $200$m $\Rightarrow y = 200$。坐标 $(300, 200)$<br>体育馆：西 $200$m $\Rightarrow x = -200$，南 $150$m $\Rightarrow y = -150$。坐标 $(-200, -150)$" },
                        { type: "heading", text: "二、用坐标表示平移" },
                        { type: "paragraph", text: "在第五章中，我们学习了图形的平移。现在，我们可以用坐标来精确描述平移——平移后的坐标变化是有规律的。" },
                        { type: "keypoint", label: "平移与坐标变化", text: "① <strong>左右平移</strong>：将点 $(x, y)$ 向右平移 $a$ 个单位 $\\rightarrow (x+a, y)$；向左平移 $a$ 个单位 $\\rightarrow (x-a, y)$<br>② <strong>上下平移</strong>：将点 $(x, y)$ 向上平移 $b$ 个单位 $\\rightarrow (x, y+b)$；向下平移 $b$ 个单位 $\\rightarrow (x, y-b)$<br>③ <strong>一般平移</strong>：向右 $a$，向上 $b$ $\rightarrow (x+a, y+b)$" },
                        { type: "svg", svg: '<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="150" x2="500" y2="150" stroke="#333" stroke-width="1.5"/><line x1="250" y1="0" x2="250" y2="300" stroke="#333" stroke-width="1.5"/><circle cx="200" cy="100" r="6" fill="#5B8DEF"/><text x="170" y="95" font-size="13" fill="#5B8DEF" font-weight="bold">A(-1, 1)</text><circle cx="320" cy="100" r="6" fill="#FF8A65"/><text x="325" y="95" font-size="13" fill="#FF8A65" font-weight="bold">A(3, 1)</text><line x1="206" y1="100" x2="314" y2="100" stroke="#66BB6A" stroke-width="2" stroke-dasharray="4,3"/><polygon points="314,100 306,95 306,105" fill="#66BB6A"/><text x="250" y="90" text-anchor="middle" font-size="12" fill="#66BB6A">向右平移4个单位</text><circle cx="200" cy="220" r="6" fill="#AB47BC"/><text x="155" y="240" font-size="13" fill="#AB47BC" font-weight="bold">A(-1, -3)</text><line x1="200" y1="106" x2="200" y2="214" stroke="#FF6B6B" stroke-width="2" stroke-dasharray="4,3"/><polygon points="200,214 195,206 205,206" fill="#FF6B6B"/><text x="210" y="170" font-size="12" fill="#FF6B6B">向下平移4个单位</text></svg>', caption: "7-2 用坐标表示平移" },
                        { type: "example", title: "例题2", question: "将点 $A(2, 3)$ 先向右平移 $3$ 个单位，再向上平移 $2$ 个单位，求平移后的坐标。", solution: "向右平移 $3$：横坐标加 $3$，$(2+3, 3) = (5, 3)$<br>再向上平移 $2$：纵坐标加 $2$，$(5, 3+2) = (5, 5)$<br>所以平移后的坐标为 $(5, 5)$" },
                        { type: "example", title: "例题3", question: "线段 $AB$ 的两个端点 $A(1, 2)$、$B(4, 5)$ 向左平移 $2$ 个单位，得到线段 $A'B'$，求 $A'$ 和 $B'$ 的坐标。", solution: "向左平移 $2$：横坐标减 $2$，纵坐标不变<br>$A' = (1-2, 2) = (-1, 2)$<br>$B' = (4-2, 5) = (2, 5)$" },
                        { type: "example", title: "例题4", question: "三角形 $ABC$ 的顶点 $A(0, 0)$、$B(2, 0)$、$C(1, 3)$ 平移后 $A$ 的对应点为 $A'(3, -1)$，求 $B'$ 和 $C'$ 的坐标。", solution: "从 $A(0, 0)$ 到 $A'(3, -1)$：横坐标加 $3$，纵坐标减 $1$<br>所以平移方式是：向右 $3$，向下 $1$<br>$B' = (2+3, 0-1) = (5, -1)$<br>$C' = (1+3, 3-1) = (4, 2)$" },
                        { type: "tip", label: "规律总结", text: "平移只改变坐标，不改变图形的形状和大小。左右平移只变横坐标，上下平移只变纵坐标。整个图形上每个点都做相同的平移，所以每个点的坐标变化量相同。" },
                        { type: "heading", text: "三、知识拓展" },
                        { type: "paragraph", text: "坐标方法的发明不仅改变了数学，也改变了世界。现代地图、GPS导航、计算机图形、建筑设计等所有涉及位置和空间的领域，都离不开坐标系。可以说，笛卡尔的坐标系是现代科技的基础之一。" },
                        { type: "paragraph", text: "在计算机图形学中，屏幕上的每一个像素都有一个坐标。当你在屏幕上移动鼠标时，系统就是在实时读取和更新鼠标的坐标位置。在游戏开发中，角色的移动就是通过改变坐标来实现的。" },
                        { type: "paragraph", text: "在地理学中，地球上的每一个位置都可以用经度和纬度来表示，这本质上就是一个球面坐标系。GPS系统就是通过卫星定位来确定你的经纬度坐标的。" }
                    ],
                    exercises: [
                        { type: "choice", question: "将点 $(3, -2)$ 向左平移 $4$ 个单位，得到的点的坐标是（　　）", options: ["$(7, -2)$", "$(-1, -2)$", "$(3, 2)$", "$(3, -6)$"], answer: "B", explanation: "向左平移横坐标减：$(3-4, -2) = (-1, -2)$。" },
                        { type: "choice", question: "点 $A(-2, 5)$ 向下平移 $3$ 个单位后的坐标是（　　）", options: ["$(-2, 8)$", "$(-2, 2)$", "$(1, 5)$", "$(-5, 5)$"], answer: "B", explanation: "向下平移纵坐标减：$(-2, 5-3) = (-2, 2)$。" },
                        { type: "choice", question: "点 $P(2, 3)$ 平移后得到 $P'(5, 1)$，则平移方式是（　　）", options: ["向右3，向上2", "向右3，向下2", "向左3，向上2", "向左3，向下2"], answer: "B", explanation: "横坐标从$2$到$5$，增加$3$，即向右$3$；纵坐标从$3$到$1$，减少$2$，即向下$2$。" },
                        { type: "fill", question: "将点 $(1, 2)$ 向右平移 $a$ 个单位后得到点 $(4, 2)$，则 $a = $ ____。", answer: "3", explanation: "向右平移横坐标加：$1 + a = 4$，$a = 3$。" },
                        { type: "fill", question: "三角形 $ABC$ 的顶点 $A(1,1)$、$B(3,1)$、$C(2,4)$ 向上平移 $3$ 个单位后，点 $C$ 的对应点 $C'$ 的坐标是 ____。", answer: "(2,7)", explanation: "向上平移纵坐标加：$C' = (2, 4+3) = (2, 7)$。" }
                    ]
                }
            ]
        }
    ]
};
