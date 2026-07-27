/* ============================================================
 * 高三数学 · 高考复习专题 · 三角与向量
 * 第3单元：三角函数的图像与性质、y=A sin(ωx+φ)
 * 数据注入：math.zt2.points（由 data-gz.js 自动注册）
 * ============================================================ */
(function () {
  var v = gzGetVolume("math", "zt2");
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 三角函数的图像与性质 ---------------- */
    {
      id: "zt2-u3-l1",
      name: "三角函数的图像与性质",
      chapter: "三角与向量复习 · 二(六) 图像与性质",
      difficulty: "中等",
      content: [
        { type: "heading", text: "一、y=sin x、y=cos x、y=tan x 的图像与性质" },
        { type: "paragraph", text: "三角函数是高考三角板块的核心，掌握它们的图像与性质是解题的基础。三条基本曲线 y=sin x、y=cos x、y=tan x 在周期、奇偶、单调、对称等方面各有规律，下面用一张对比表把它们集中呈现，再结合图像逐一理解。" },
        { type: "keypoint", label: "重点·三函数核心性质", text: "y=sin x 与 y=tan x 都是<strong>奇函数</strong>，图像关于原点中心对称；y=cos x 是<strong>偶函数</strong>，图像关于 y 轴对称。三者的最小正周期分别为 2π、2π、π。对称轴与对称中心是判断图像位置的关键，务必对照下表记牢。" },
        { type: "table", headers: ["性质", "y=sin x", "y=cos x", "y=tan x"], rows: [
          ["定义域", "R", "R", "{x | x ≠ π/2+kπ, k∈Z}"],
          ["值域", "[-1, 1]", "[-1, 1]", "R"],
          ["周期", "2π", "2π", "π"],
          ["奇偶性", "奇函数", "偶函数", "奇函数"],
          ["单调性", "增[-π/2+2kπ, π/2+2kπ]", "增[-π+2kπ, 2kπ]", "增(-π/2+kπ, π/2+kπ)"],
          ["对称轴", "x=π/2+kπ", "x=kπ", "无"],
          ["对称中心", "(kπ, 0)", "(π/2+kπ, 0)", "(kπ/2, 0)"]
        ] },
        { type: "paragraph", text: "先看 y=sin x：它在每一个区间 [-π/2+2kπ, π/2+2kπ]（k∈Z）上单调递增，在 [π/2+2kπ, 3π/2+2kπ] 上单调递减；波峰所在直线 x=π/2+kπ 是对称轴，图像与 x 轴交点 (kπ,0) 是对称中心。" },
        { type: "svg", svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图1　y = sin x 的图像（周期 2π）</text><line x1="40" y1="200" x2="640" y2="200" stroke="#33536e" stroke-width="1.5"/><line x1="340" y1="60" x2="340" y2="300" stroke="#33536e" stroke-width="1.5"/><path d="M 40,200 Q 115,80 190,200 Q 265,320 340,200 Q 415,80 490,200 Q 565,320 640,200" fill="none" stroke="#4a7de0" stroke-width="2.5"/><g stroke="#c0392b" stroke-width="1.3" stroke-dasharray="5,4"><line x1="265" y1="70" x2="265" y2="290"/><line x1="415" y1="70" x2="415" y2="290"/><line x1="565" y1="70" x2="565" y2="290"/></g><text x="418" y="84" font-size="13" fill="#c0392b">x=π/2+kπ</text><g fill="#2b5b9e"><circle cx="40" cy="200" r="4"/><circle cx="190" cy="200" r="4"/><circle cx="340" cy="200" r="4"/><circle cx="490" cy="200" r="4"/><circle cx="640" cy="200" r="4"/></g><text x="200" y="216" font-size="13" fill="#2b5b9e">对称轴 x=π/2+kπ（红虚线）</text><text x="300" y="290" font-size="13" fill="#2b5b9e">对称中心 (kπ,0)（蓝点）</text><line x1="340" y1="250" x2="640" y2="250" stroke="#5a7a2a" stroke-width="1.5"/><text x="345" y="244" font-size="13" fill="#5a7a2a">周期 T = 2π（一个完整波形宽度）</text></svg>', caption: "图1　y=sin x：红色虚线为对称轴 x=π/2+kπ，蓝色圆点为对称中心 (kπ,0)，完整波形宽度为周期 2π。" },
        { type: "paragraph", text: "再看 y=cos x：它在 [-π+2kπ, 2kπ]（k∈Z）上单调递增，在 [2kπ, π+2kπ] 上单调递减；对称轴是通过波峰的直线 x=kπ，对称中心是与 x 轴交点 (π/2+kπ, 0)。把 y=sin x 的图像向左平移 π/2 即可得到 y=cos x。" },
        { type: "svg", svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图2　y = cos x 的图像（周期 2π）</text><line x1="40" y1="200" x2="640" y2="200" stroke="#33536e" stroke-width="1.5"/><line x1="340" y1="60" x2="340" y2="300" stroke="#33536e" stroke-width="1.5"/><path d="M 40,140 Q 115,200 190,260 Q 265,200 340,140 Q 415,200 490,260 Q 565,200 640,140" fill="none" stroke="#4a7de0" stroke-width="2.5"/><g stroke="#c0392b" stroke-width="1.3" stroke-dasharray="5,4"><line x1="40" y1="70" x2="40" y2="290"/><line x1="190" y1="70" x2="190" y2="290"/><line x1="340" y1="70" x2="340" y2="290"/><line x1="490" y1="70" x2="490" y2="290"/><line x1="640" y1="70" x2="640" y2="290"/></g><text x="344" y="84" font-size="13" fill="#c0392b">对称轴 x=kπ（红虚线）</text><g fill="#2b5b9e"><circle cx="115" cy="200" r="4"/><circle cx="265" cy="200" r="4"/><circle cx="415" cy="200" r="4"/><circle cx="565" cy="200" r="4"/></g><text x="430" y="216" font-size="13" fill="#2b5b9e">对称中心 (π/2+kπ,0)（蓝点）</text><line x1="40" y1="250" x2="640" y2="250" stroke="#5a7a2a" stroke-width="1.5"/><text x="45" y="244" font-size="13" fill="#5a7a2a">周期 T = 2π</text></svg>', caption: "图2　y=cos x：红色虚线为对称轴 x=kπ，蓝色圆点为对称中心 (π/2+kπ,0)，周期为 2π。" },
        { type: "paragraph", text: "最后看 y=tan x：定义域为 {x | x ≠ π/2+kπ, k∈Z}，在每一个开区间 (-π/2+kπ, π/2+kπ)（k∈Z）上单调递增，但它<strong>没有对称轴</strong>，对称中心为 (kπ/2, 0)。图像被一组竖直渐近线 x=π/2+kπ 分隔成无穷多支。" },
        { type: "svg", svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图3　y = tan x 的图像（周期 π）</text><line x1="40" y1="200" x2="640" y2="200" stroke="#33536e" stroke-width="1.5"/><line x1="340" y1="60" x2="340" y2="300" stroke="#33536e" stroke-width="1.5"/><g stroke="#c0392b" stroke-width="1.3" stroke-dasharray="5,4"><line x1="190" y1="60" x2="190" y2="300"/><line x1="490" y1="60" x2="490" y2="300"/></g><text x="494" y="74" font-size="13" fill="#c0392b">x=π/2+kπ 渐近线</text><path d="M 40,200 Q 110,255 185,295" fill="none" stroke="#4a7de0" stroke-width="2.5"/><path d="M 185,295 Q 340,200 495,105" fill="none" stroke="#4a7de0" stroke-width="2.5"/><path d="M 495,105 Q 570,255 640,200" fill="none" stroke="#4a7de0" stroke-width="2.5"/><g fill="#2b5b9e"><circle cx="40" cy="200" r="4"/><circle cx="340" cy="200" r="4"/><circle cx="640" cy="200" r="4"/></g><text x="300" y="284" font-size="13" fill="#2b5b9e">对称中心 (kπ/2,0)（蓝点）</text><line x1="190" y1="250" x2="490" y2="250" stroke="#5a7a2a" stroke-width="1.5"/><text x="195" y="244" font-size="13" fill="#5a7a2a">周期 T = π</text></svg>', caption: "图3　y=tan x：红色虚线为渐近线 x=π/2+kπ，蓝色圆点为对称中心 (kπ/2,0)，周期为 π。" },
        { type: "warn", label: "易错", text: "y=tan x 的<strong>定义域必须排除</strong> x=π/2+kπ（k∈Z）这些使 cos x=0 的点，写单调区间时只能用<strong>开区间</strong>，不能把相邻两支连成闭区间。同时 tan x <strong>无对称轴</strong>，不要把正弦、余弦的对称轴规律套用到正切上。" },
        { type: "keypoint", label: "重点·对称与周期", text: "记忆口诀：<strong>正弦奇、余弦偶、正切奇</strong>；正弦对称轴 x=π/2+kπ、对称中心 (kπ,0)；余弦对称轴 x=kπ、对称中心 (π/2+kπ,0)；正切无对称轴、对称中心 (kπ/2,0)。周期：sin、cos 为 2π，tan 为 π。" },
        { type: "list", items: [
          "sin、cos 周期为 2π，tan 周期为 π",
          "sin 对称轴 x=π/2+kπ，对称中心 (kπ,0)",
          "cos 对称轴 x=kπ，对称中心 (π/2+kπ,0)",
          "tan 无对称轴，对称中心 (kπ/2,0)，定义域排除 x=π/2+kπ"
        ] },
        { type: "example", label: "例题1", text: "判断函数 y=sin x 的奇偶性，并求其最小正周期。<br><br><strong>解</strong>：对任意 x，有 sin(-x) = -sin x，满足 f(-x) = -f(x)，故 y=sin x 是<strong>奇函数</strong>。<br>又 sin(x+2π) = sin x 对一切 x 成立，且 2π 是满足此式的最小正数，所以<strong>最小正周期为 2π</strong>。" },
        { type: "example", label: "例题2", text: "已知函数 f(x) = cos(2x)，求其最小正周期与对称轴方程。<br><br><strong>解</strong>：由周期公式 T = 2π/|ω|，此处 ω=2，得 T = 2π/2 = <strong>π</strong>。<br>令 2x = kπ（k∈Z），解得 <strong>x = kπ/2</strong>，此即 f(x)=cos(2x) 的对称轴方程（相当于把余弦对称轴 x=kπ 中的 x 替换为 2x 后解出）。" },
        { type: "tip", label: "提示", text: "求 y=A sin(ωx+φ) 或 y=A cos(ωx+φ) 的<strong>对称轴</strong>，可令整体 ωx+φ 等于原函数的对称轴位置（正弦取 π/2+kπ，余弦取 kπ），再解出 x；求<strong>对称中心</strong>则令整体等于原函数对称中心横坐标（正弦、余弦取 kπ，正切取 kπ/2），令函数值为 0。" },
        { type: "heading", text: "二、从图像读出对称中心" },
        { type: "paragraph", text: "高考常给出一段三角函数图像，要求写出它的对称中心或对称轴。方法是：先找到图像与平衡位置（x 轴或中线）的交点，这些点就是对称中心的候选；再看波峰波谷所在的竖直线，即为对称轴。" },
        { type: "example", label: "例题3", text: "如图（见上方 y=sin x 图像），指出函数 y=sin x 在区间 [-2π, 2π] 上的所有对称中心。<br><br><strong>解</strong>：y=sin x 的对称中心为 (kπ, 0)（k∈Z）。在 [-2π, 2π] 上，k 可取 -2、-1、0、1、2，对应点为 <strong>(-2π,0)、(-π,0)、(0,0)、(π,0)、(2π,0)</strong>。这些点正是图像与 x 轴的交点。" },
        { type: "warn", label: "易错", text: "从图像读对称中心时，要找的是<strong>图像与平衡位置的交点</strong>，而不是波峰或波谷。波峰、波谷所在的竖直线是<strong>对称轴</strong>，二者不要混淆。另外，交点坐标必须写成 (横坐标, 0) 的形式，纵坐标为 0。" },
        { type: "list", items: [
          "判断奇偶性用 f(-x) 与 ±f(x) 比较",
          "求周期优先用 T=2π/|ω|（正切为 π/|ω|）",
          "对称轴令整体等于原函数对称轴位置",
          "对称中心令整体等于 kπ（或 kπ/2）并令值为 0"
        ] },
        { type: "keypoint", label: "本课小结", text: "本节课重点掌握 y=sin x、y=cos x、y=tan x 的<strong>定义域、值域、周期、奇偶性、单调性、对称轴、对称中心</strong>七项性质，其中对比表是核心。读图题先定位平衡点（对称中心）与波峰波谷线（对称轴），再结合 T=2π/|ω| 求解。" }
      ],
      exercises: [
        { type: "choice", question: "函数 y=sin x 的对称轴方程是下列哪一个？", options: ["x=kπ", "x=π/2+kπ", "x=π/2", "无对称轴"], answer: "x=π/2+kπ", explanation: "正弦函数 y=sin x 的图像关于直线 x=π/2+kπ（k∈Z）对称，这些直线恰好经过波峰与波谷，是其对称轴；x=kπ 是正弦的对称中心所在直线，不是对称轴；x=π/2 只给出其中一条，不完整。因此应选 x=π/2+kπ。" },
        { type: "choice", question: "函数 y=tan x 的定义域是下列哪一集合？", options: ["R", "{x | x ≠ kπ, k∈Z}", "{x | x ≠ π/2+kπ, k∈Z}", "[-1, 1]"], answer: "{x | x ≠ π/2+kπ, k∈Z}", explanation: "正切 tan x = sin x / cos x，当 cos x=0 即 x=π/2+kπ（k∈Z）时无定义，所以定义域要排除这些点，记作 {x | x ≠ π/2+kπ, k∈Z}。实数集 R 错在包含了无定义点；{x | x ≠ kπ} 排除的是整数倍 π，方向错误；[-1,1] 是值域而非定义域。" },
        { type: "choice", question: "函数 y=cos x 的对称中心坐标是下列哪一个？", options: ["(kπ, 0)", "(π/2+kπ, 0)", "(0, 0)", "(π/2, 0)"], answer: "(π/2+kπ, 0)", explanation: "余弦函数 y=cos x 的对称中心是图像与 x 轴的交点，坐标为 (π/2+kπ, 0)（k∈Z）；(kπ,0) 是正弦函数的对称中心；单独写 (0,0) 或 (π/2,0) 都只给出个别点，不能概括全部。故应选 (π/2+kπ, 0)。" },
        { type: "fill", question: "函数 y=sin x 的最小正周期是 ____。（填写表达式）", answer: "2π", explanation: "正弦函数 y=sin x 满足 sin(x+2π)=sin x 对一切 x 成立，且 2π 是使等式成立的正数中最小的，故最小正周期为 2π。也可由一般公式 T=2π/|ω|，此处 ω=1，直接得 T=2π。" },
        { type: "fill", question: "函数 y=cos(2x) 的最小正周期是 ____。（填写表达式）", answer: "π", explanation: "对 y=cos(2x)，其角频率 ω=2，由周期公式 T=2π/|ω| 得 T=2π/2=π。也可验证 cos(2(x+π))=cos(2x+2π)=cos(2x)，且 π 是使等式成立的正数中最小的，故最小正周期为 π。" }
      ]
    },

    /* ---------------- 第2课时 函数 y=A sin(ωx+φ) ---------------- */
    {
      id: "zt2-u3-l2",
      name: "函数 y=A sin(ωx+φ)",
      chapter: "三角与向量复习 · 二(七) y=A sin(ωx+φ)",
      difficulty: "中等",
      content: [
        { type: "heading", text: "一、参数 A、ω、φ 的意义与周期" },
        { type: "paragraph", text: "函数 y=A sin(ωx+φ)（A>0，ω>0）是正弦型函数的标准形式，三个参数各有明确的几何与物理意义。高考中常要求由图像或解析式求这些参数，或描述图像变换过程，因此必须理解每个字母的作用。" },
        { type: "keypoint", label: "重点·参数意义", text: "<strong>A</strong> 叫振幅，表示振动的最大幅度，等于波峰到平衡位置的距离；<strong>ω</strong> 叫角频率，决定周期长短；<strong>φ</strong> 叫初相，反映图像的横向起始位置。三者共同决定了正弦曲线的形状与位置。" },
        { type: "list", items: [
          "A：振幅，A>0，决定纵向拉伸倍数",
          "ω：角频率，ω>0，决定周期 T=2π/|ω|",
          "φ：初相，决定图像相对 y=sin x 的平移",
          "T=2π/|ω|：最小正周期，与 φ 无关"
        ] },
        { type: "table", headers: ["参数", "名称", "几何意义", "对图像的影响"], rows: [
          ["A", "振幅", "波峰到平衡位置的距离", "纵向拉伸为原来的 A 倍"],
          ["ω", "角频率", "决定周期长短", "周期 T=2π/|ω|，ω 越大波形越密"],
          ["φ", "初相", "横向起始位置", "图像相对 y=sin x 左右平移"],
          ["T", "周期", "相邻同相位点的间隔", "T=2π/|ω|，与 A、φ 无关"]
        ] },
        { type: "keypoint", label: "重点·周期公式", text: "正弦型函数 y=A sin(ωx+φ) 的最小正周期只与 ω 有关：<strong>T = 2π/|ω|</strong>。ω 越大，周期越小，波形越密；ω 越小，周期越大，波形越疏。初相 φ 和振幅 A 都不影响周期。" },
        { type: "svg", svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图1　由 y=sin x 到 y=A sin(ωx+φ) 的变换（先平移后伸缩）</text><g font-size="13" text-anchor="middle"><rect x="20" y="110" width="120" height="48" rx="6" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="1.5"/><text x="80" y="135">y=sin x</text><text x="80" y="155" font-size="11" fill="#33536e">原始图像</text><rect x="190" y="110" width="120" height="48" rx="6" fill="#cfe0f7" stroke="#4a7de0" stroke-width="1.5"/><text x="250" y="135">y=sin(x+φ)</text><text x="250" y="155" font-size="11" fill="#33536e">左加右减平移 |φ|</text><rect x="360" y="110" width="120" height="48" rx="6" fill="#cfe0f7" stroke="#4a7de0" stroke-width="1.5"/><text x="420" y="135">y=sin(ωx+φ)</text><text x="420" y="155" font-size="11" fill="#33536e">横坐标变 1/ω</text><rect x="530" y="110" width="130" height="48" rx="6" fill="#cfe0f7" stroke="#4a7de0" stroke-width="1.5"/><text x="595" y="135">y=A sin(ωx+φ)</text><text x="595" y="155" font-size="11" fill="#33536e">纵坐标变 A 倍</text></g><g stroke="#5a7a2a" stroke-width="2" fill="#5a7a2a"><line x1="142" y1="134" x2="186" y2="134"/><polygon points="186,134 178,129 178,139"/><line x1="312" y1="134" x2="356" y2="134"/><polygon points="356,134 348,129 348,139"/><line x1="482" y1="134" x2="526" y2="134"/><polygon points="526,134 518,129 518,139"/></g><text x="340" y="210" font-size="13" fill="#33536e" text-anchor="middle">注意：先平移后伸缩时，平移量为 |φ|（针对 x 本身）</text></svg>', caption: "图1　先平移后伸缩的变换流程：平移 |φ| → 横坐标变为原来的 1/ω → 纵坐标变为原来的 A 倍。" },
        { type: "heading", text: "二、由 y=sin x 到 y=A sin(ωx+φ) 的图像变换" },
        { type: "paragraph", text: "从基本函数 y=sin x 出发，经过平移、伸缩两类变换得到 y=A sin(ωx+φ)。变换顺序不同，平移的量也不同，这是考试高频易错点，必须分两种情况记清。" },
        { type: "keypoint", label: "先平移后伸缩", text: "顺序为：① 平移 |φ|（左加右减，针对 x 本身）得 y=sin(x+φ)；② 横坐标变为原来的 1/ω 得 y=sin(ωx+φ)；③ 纵坐标变为原来的 A 倍得 y=A sin(ωx+φ)。此顺序下<strong>平移量就是 |φ|</strong>。" },
        { type: "keypoint", label: "先伸缩后平移", text: "顺序为：① 横坐标变为原来的 1/ω 得 y=sin(ωx)；② 再平移得 y=sin(ωx+φ)=sin(ω(x+φ/ω))，说明此时<strong>平移量为 |φ|/ω</strong>，而不是 |φ|。伸缩在前会“放大”平移效果，因此平移量要除以 ω。" },
        { type: "warn", label: "易错", text: "图像变换的平移量<strong>依赖顺序</strong>：先平移后伸缩，平移 |φ|；先伸缩后平移，平移 |φ|/ω。很多同学不论顺序都写 |φ| 而丢分。记住口诀：<strong>伸缩在前，平移要除以 ω</strong>。" },
        { type: "example", label: "例题1", text: "求函数 y=2 sin(3x+π/4) 的振幅、周期和初相。<br><br><strong>解</strong>：对照 y=A sin(ωx+φ)，得 <strong>A=2</strong>，<strong>ω=3</strong>，<strong>φ=π/4</strong>。<br>振幅 A=2；周期 T=2π/|ω|=2π/3；初相 φ=π/4。注意初相是括号中的常数项，此处直接为 π/4。" },
        { type: "svg", svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图2　参数 A、ω、φ、T 的几何意义</text><line x1="40" y1="170" x2="640" y2="170" stroke="#33536e" stroke-width="1.5"/><path d="M 90,170 Q 180,70 270,170 Q 360,270 450,170 Q 540,70 630,170" fill="none" stroke="#4a7de0" stroke-width="2.5"/><g font-size="13" fill="#c0392b"><line x1="180" y1="70" x2="180" y2="170" stroke="#c0392b" stroke-width="1.2" stroke-dasharray="4,3"/><text x="120" y="120">A（振幅）</text></g><g font-size="13" fill="#7a5aa0"><line x1="270" y1="170" x2="450" y2="170" stroke="#7a5aa0" stroke-width="1.5"/><text x="330" y="162">T=2π/|ω|（周期）</text></g><g font-size="13" fill="#5a7a2a"><text x="95" y="200">起点含初相 φ</text></g><g font-size="13" fill="#2b5b9e"><text x="455" y="120">ω 决定周期长短</text></g></svg>', caption: "图2　波峰到平衡位置的距离为振幅 A；一个完整波形的长度为周期 T=2π/|ω|；起点横移反映初相 φ。" },
        { type: "heading", text: "三、由图像求解析式" },
        { type: "paragraph", text: "已知正弦型函数图像求 y=A sin(ωx+φ)，一般步骤：先用波峰波谷距求 A，用相邻对称中心或完整波形长度求 T 进而得 ω，最后代入一个已知点解出 φ（常取平衡点且单调上升处）。" },
        { type: "example", label: "例题2", text: "已知函数 y=A sin(ωx+φ)（A>0，ω>0）在一个周期内的图像最高点为 (π/12, 3)，相邻最低点为 (7π/12, -3)，且过平衡点 (π/3, 0) 上升，求解析式。<br><br><strong>解</strong>：由最高、最低纵坐标得 A=3。半个周期为 7π/12-π/12=π/2，故 T=π，ω=2π/T=2。代入 (π/3,0)：3 sin(2·π/3+φ)=0，且此处上升，取 2π/3+φ=π，得 φ=π/3。所以 <strong>y=3 sin(2x+π/3)</strong>。" },
        { type: "svg", svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">图3　周期 T = 2π/|ω|：ω 越大周期越小</text><line x1="40" y1="150" x2="640" y2="150" stroke="#33536e" stroke-width="1.5"/><path d="M 60,150 Q 105,100 150,150 Q 195,200 240,150 Q 285,100 330,150 Q 375,200 420,150 Q 465,100 510,150 Q 555,200 600,150" fill="none" stroke="#4a7de0" stroke-width="2.5"/><text x="150" y="100" font-size="12" fill="#2b5b9e">ω=1，T=2π</text><path d="M 60,150 Q 90,110 120,150 Q 150,190 180,150 Q 210,110 240,150 Q 270,190 300,150 Q 330,110 360,150 Q 390,190 420,150 Q 450,110 480,150 Q 510,190 540,150 Q 570,110 600,150" fill="none" stroke="#e05d44" stroke-width="2"/><text x="330" y="210" font-size="12" fill="#c0392b">ω=2，T=π（同样长度内波形更多）</text></svg>', caption: "图3　相同横坐标区间内，ω 越大波形越密、周期越小；周期公式为 T=2π/|ω|。" },
        { type: "tip", label: "提示", text: "由图像求 φ 时，优先选取<strong>平衡位置且函数单调递增</strong>的点 (x0,0)，令 ωx0+φ=0 或 2kπ，最简便；也可代入波峰令 ωx+φ=π/2+2kπ。两种取法算出的 φ 可能相差 2π 的整数倍，不影响函数本质。" },
        { type: "example", label: "例题3", text: "叙述由 y=sin x 到 y=sin(2x+π/3) 的变换步骤（先伸缩后平移）。<br><br><strong>解</strong>：先将 y=sin x 图像上所有点的横坐标变为原来的 1/2，得 y=sin(2x)；再向左平移 π/6（因为 sin(2(x+π/6))=sin(2x+π/3)），得 y=sin(2x+π/3)。此处平移量为 <strong>|φ|/ω = (π/3)/2 = π/6</strong>，而非 π/3。" },
        { type: "warn", label: "易错", text: "叙述变换步骤时要写清<strong>顺序与方向</strong>：左右平移用“左加右减”，且先伸缩后平移时平移量是 |φ|/ω。若题目未指定顺序，两种顺序都正确，但必须保证平移量随之改变，不能混用。" },
        { type: "list", items: [
          "求 A 用波峰到平衡位置的距离",
          "求 ω 用 T=2π/|ω|，T 由图像周期读出",
          "求 φ 代入已知点（优先平衡点上升处）",
          "先伸缩后平移时平移量为 |φ|/ω"
        ] },
        { type: "keypoint", label: "本课小结", text: "本节课掌握 y=A sin(ωx+φ) 中 A、ω、φ、T 的意义，特别是 <strong>T=2π/|ω|</strong> 与变换的两种顺序。核心提醒：<strong>先平移后伸缩平移 |φ|，先伸缩后平移平移 |φ|/ω</strong>。由图像求解析式按 A→ω→φ 顺序进行。" }
      ],
      exercises: [
        { type: "choice", question: "函数 y=2 sin(3x+π/4) 的振幅是下列哪一个？", options: ["2", "3", "π/4", "1/3"], answer: "2", explanation: "形如 y=A sin(ωx+φ) 的函数中，A 称为振幅，表示振动的最大幅度，即函数值偏离平衡位置的最大距离，等于波峰到平衡位置的距离。本题中 A=2，故振幅为 2；ω=3 是角频率，π/4 是初相，均不是振幅。" },
        { type: "choice", question: "函数 y=3 sin(2x) 的最小正周期 T 为下列哪一个？", options: ["π", "2π", "π/2", "4π"], answer: "π", explanation: "周期公式 T=2π/|ω| 对 y=A sin(ωx+φ) 恒成立。本题 ω=2，代入得 T=2π/2=π。也可由 sin(2(x+π))=sin(2x+2π)=sin(2x) 直接验证周期为 π，且为最小正周期，故选 π。" },
        { type: "choice", question: "将 y=sin x 的图像上所有点向左平移 π/3，所得函数解析式是？", options: ["y=sin(x+π/3)", "y=sin(x-π/3)", "y=sin(x+π/6)", "y=sin(3x)"], answer: "y=sin(x+π/3)", explanation: "图像左右平移遵循“左加右减”原则，针对的是自变量 x 本身。向左平移 π/3，需把 x 替换为 x+π/3，故得到 y=sin(x+π/3)；向右平移才用减号；若先伸缩则平移量会变化，但本题只作平移，故直接得 y=sin(x+π/3)。" },
        { type: "fill", question: "函数 y=2 sin(3x+π/4) 的初相 φ 是 ____。（填写表达式）", answer: "π/4", explanation: "解析式 y=A sin(ωx+φ) 中 φ 即初相，表示图像相对 y=sin x 的横向起始位置。本题中括号内常数项为 π/4，故初相 φ=π/4。注意初相是 x 系数为 1 时括号中的常数项，若写成 y=2 sin(3(x+π/12))，初相仍为 π/4 而非 π/12。" },
        { type: "fill", question: "由 y=sin x 先横坐标变为原来的 1/2（即 ω=2），再向左平移 π/6，所得解析式为 y=sin(2x+____)。（填写表达式）", answer: "π/3", explanation: "先伸缩：y=sin x → y=sin(2x)；再平移：左移 π/6 时把 x 换成 x+π/6，得 y=sin(2(x+π/6))=sin(2x+π/3)，故空格填 π/3。注意先伸缩后平移时，平移量要乘 ω（即 |φ|/ω=π/6 对应相位增量 π/3），与先平移情形不同。" }
      ]
    }

  );
})();
