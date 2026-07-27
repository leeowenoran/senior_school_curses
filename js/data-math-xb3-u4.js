/* ============================================================
 * 高二数学 · 选择性必修 第三册 · 第七章 随机变量及其分布
 * 第4单元：离散型随机变量的数字特征、二项分布与超几何分布
 * 第1课时：离散型随机变量的数字特征（人教A版 §7.3）
 * 第2课时：二项分布与超几何分布（人教A版 §7.4）
 * 数据注入：math.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'xb3');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 离散型随机变量的数字特征 ---------------- */
    {
      id: 'xb3-u4-l1',
      name: '离散型随机变量的数字特征',
      chapter: '第七章 随机变量及其分布 · 7.3',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、离散型随机变量的均值' },
        { type: 'paragraph', text: '离散型随机变量不仅由分布列描述“取哪些值、各以多大概率出现”，还需要用少数几个实数来刻画它的整体特征。最常用的两个数字特征是均值（数学期望）和方差，它们分别是“平均水平”和“波动大小”的定量刻画。' },
        { type: 'keypoint', label: '重点·均值定义', text: '<strong>离散型随机变量的均值（数学期望）</strong>：若 X 的可能取值为 x₁, x₂, …, x_n，对应概率为 p₁, p₂, …, p_n，则 X 的均值 E(X)=x₁p₁+x₂p₂+…+x_np_n = Σ x_i·p_i。它反映随机变量取值的<strong>平均水平</strong>。' },
        { type: 'paragraph', text: '均值本质上是分布列的“加权平均”：每个取值乘以它出现的概率再求和。权重（概率）越大，该取值对均值的影响也越大。当所有取值等概率时，均值就是这些取值的算术平均数。' },
        { type: 'keypoint', label: '重点·均值性质', text: '<strong>均值的线性性质</strong>：对任意常数 a、b，有 <strong>E(aX+b)=aE(X)+b</strong>。即随机变量作线性变换后，其均值按相同方式线性变换；特别地 E(X+b)=E(X)+b，E(aX)=aE(X)。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">均值 E(X) 是概率分布的“重心”或“平衡点”</text><line x1="80" y1="180" x2="600" y2="180" stroke="#33536e" stroke-width="2"/><g fill="#4a7de0"><circle cx="160" cy="180" r="9"/><circle cx="340" cy="180" r="9"/><circle cx="520" cy="180" r="9"/></g><g font-size="15" fill="#33536e" text-anchor="middle"><text x="160" y="210">x=1, p=1/3</text><text x="340" y="210">x=2, p=1/3</text><text x="520" y="210">x=3, p=1/3</text></g><line x1="340" y1="120" x2="340" y2="180" stroke="#e05d44" stroke-width="3"/><text x="340" y="110" font-size="16" fill="#c0392b" text-anchor="middle">E(X)=2（平衡点）</text><g font-size="14" fill="#33536e"><text x="80" y="250">三点等概率时，均值恰好落在中间；</text><text x="80" y="270">若各点概率不同，重心会向概率大的一侧偏移。</text></g></svg>', caption: '图1　均值相当于分布列的重心：以概率为权，使两侧“力矩”平衡的位置。' },
        { type: 'heading', text: '二、离散型随机变量的方差与标准差' },
        { type: 'paragraph', text: '仅仅知道均值有时不够。例如两个随机变量均值都是 2，但一个取值集中在 2 附近、另一个剧烈波动，二者的风险截然不同。为此需要第二个数字特征——方差，用来衡量取值偏离均值的程度。' },
        { type: 'keypoint', label: '重点·方差定义', text: '<strong>方差</strong>：D(X)=Σ(x_i-E(X))²·p_i，即各取值与均值之差的平方，以概率为权的加权平均。方差越大，取值越分散；方差越小，取值越集中。' },
        { type: 'keypoint', label: '重点·标准差', text: '<strong>标准差</strong>：σ(X)=√D(X)，是方差的算术平方根，与 X 同单位，便于在实际问题中比较离散程度。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">方差 D(X) 刻画取值偏离均值的程度</text><line x1="80" y1="150" x2="600" y2="150" stroke="#e05d44" stroke-width="2.5"/><text x="612" y="155" font-size="14" fill="#c0392b">均值线 E(X)</text><g fill="#4a7de0"><circle cx="160" cy="105" r="8"/><circle cx="280" cy="195" r="8"/><circle cx="400" cy="95" r="8"/><circle cx="520" cy="205" r="8"/></g><g stroke="#5a7a2a" stroke-width="1.5" stroke-dasharray="4 3"><line x1="160" y1="105" x2="160" y2="150"/><line x1="280" y1="195" x2="280" y2="150"/><line x1="400" y1="95" x2="400" y2="150"/><line x1="520" y1="205" x2="520" y2="150"/></g><g font-size="14" fill="#33536e"><text x="80" y="240">各点离均值线的竖直距离越大，说明取值越分散；</text><text x="80" y="262">方差正是这些偏差平方的加权平均（权为概率）。</text></g></svg>', caption: '图2　方差等于各取值到均值线偏差平方的加权和；偏差越大，方差越大。' },
        { type: 'list', items: ['方差非负：D(X) ≥ 0，且仅当 X 为常值时 D(X)=0', '方差越大，取值越分散；方差越小，取值越集中', '比较两组数据或分布时，均值相同则看方差判断稳定性'] },
        { type: 'warn', label: '易错', text: '计算方差时常见两类失分：①<strong>套错公式</strong>，把 D(X) 误写成 Σx_i²p_i 或 (Σx_i p_i)²，正确应为 Σ(x_i-E(X))²p_i；②<strong>线性性质符号错</strong>，误以为 D(aX+b)=aD(X) 或 D(aX+b)=a²D(X)+b，记住常数平移不改变方差，只有缩放 a 取平方。' },
        { type: 'example', label: '例题1', text: '设离散型随机变量 X 的取值为 1、2、3，对应概率均为 1/3。<br><br><strong>求</strong>：E(X) 与 D(X)。<br><strong>解</strong>：E(X)=1·(1/3)+2·(1/3)+3·(1/3)=2。<br>D(X)=(1-2)²·(1/3)+(2-2)²·(1/3)+(3-2)²·(1/3)=1·(1/3)+0+1·(1/3)=2/3。' },
        { type: 'heading', text: '三、均值与方差的线性性质' },
        { type: 'keypoint', label: '重点·方差的线性性质', text: '<strong>方差的线性性质</strong>：对任意常数 a、b，有 <strong>D(aX+b)=a²D(X)</strong>。注意平移 b 不影响离散程度（方差不变），而缩放 a 会使方差变为原来的 a² 倍；标准差则满足 σ(aX+b)=|a|σ(X)。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">线性变换 Y=aX+b 对均值、方差的影响</text><rect x="80" y="70" width="200" height="60" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="180" y="106" font-size="16" fill="#2b5b9e" text-anchor="middle">随机变量 X</text><text x="340" y="106" font-size="34" fill="#7a5aa0" text-anchor="middle">→</text><rect x="400" y="70" width="200" height="60" rx="8" fill="#dcd0ee" stroke="#7a5aa0" stroke-width="2"/><text x="500" y="106" font-size="16" fill="#7a5aa0" text-anchor="middle">Y = aX + b</text><text x="180" y="172" font-size="15" fill="#33536e" text-anchor="middle">E(X) 均值</text><text x="500" y="172" font-size="15" fill="#33536e" text-anchor="middle">E(Y)=aE(X)+b</text><text x="180" y="202" font-size="15" fill="#33536e" text-anchor="middle">D(X) 方差</text><text x="500" y="202" font-size="15" fill="#33536e" text-anchor="middle">D(Y)=a²D(X)</text><g font-size="14" fill="#33536e"><text x="80" y="242">平移 b 只改变均值、不改变离散程度（方差变为 a²D(X)）；</text><text x="80" y="264">缩放 a 同时放大均值和方差，且方差对 a 取平方。</text></g></svg>', caption: '图3　线性变换下：均值随 a、b 线性变，方差只被 a² 缩放，与 b 无关。' },
        { type: 'example', label: '例题2', text: '设 X 服从两点分布：P(X=1)=p，P(X=0)=1-p。<br><br><strong>求</strong>：E(X) 与 D(X)。<br><strong>解</strong>：E(X)=1·p+0·(1-p)=p。<br>D(X)=(1-p)²·p+(0-p)²·(1-p)=p(1-p)²+p²(1-p)=p(1-p)[(1-p)+p]=p(1-p)。' },
        { type: 'example', label: '例题3', text: '已知随机变量 X 满足 E(X)=3，令 Y=2X+1。<br><br><strong>求</strong>：E(Y)。<br><strong>解</strong>：由线性性质 E(aX+b)=aE(X)+b，得 E(Y)=E(2X+1)=2E(X)+1=2·3+1=7。' },
        { type: 'tip', label: '提示', text: '<strong>均值与方差的分工</strong>：均值告诉你“平均水平在哪里”，方差告诉你“数据围绕均值波动得厉不厉害”。例如两名射手平均命中环数相同，方差小者发挥更稳定，更值得信赖。' },
        { type: 'heading', text: '四、均值与方差的区别与联系' },
        { type: 'table', headers: ['数字特征', '符号', '意义', '受线性变换影响'], rows: [['均值', 'E(X)', '反映取值的平均水平', 'E(aX+b)=aE(X)+b'], ['方差', 'D(X)', '反映取值的离散程度（波动大小）', 'D(aX+b)=a²D(X)'], ['标准差', '√D(X)', '方差的算术平方根，与 X 同单位', 'σ(aX+b)=|a|σ(X)']] },
        { type: 'tip', label: '记忆', text: '<strong>记忆口诀</strong>：均值“加权求平均”，方差“偏差平方再加权”；线性变换中，均值跟着 a、b 走（aE+b），方差只认 a 的平方（a²D）。两点分布是二项分布的特例 B(1,p)，故 E=p、D=p(1-p)。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['均值 E(X)=Σx_i p_i，反映平均水平；方差 D(X)=Σ(x_i-E(X))²p_i，反映离散程度', '线性性质：E(aX+b)=aE(X)+b，D(aX+b)=a²D(X)', '标准差 σ(X)=√D(X)，与 X 同单位', '两点分布：E(X)=p，D(X)=p(1-p)', '先求均值再算方差，注意套公式前先确认分布列'] }
      ],
      exercises: [
        { type: 'choice', question: '设 X 为离散型随机变量，a、b 为常数，则 E(aX+b) 等于？', options: ['aE(X)+b', 'E(X)+b', 'aE(X)', 'aE(X)+b²'], answer: 'aE(X)+b', explanation: '根据均值的线性性质，对任意常数 a、b 都有 E(aX+b)=aE(X)+b。常数 b 直接进入均值，而 X 前的系数 a 也线性地作用于均值。选项 aE(X) 漏加了 b，E(X)+b 漏乘了 a，aE(X)+b² 把平移项错误地平方，均不正确。' },
        { type: 'choice', question: '设 X 为离散型随机变量，a、b 为常数，则 D(aX+b) 等于？', options: ['aD(X)', 'a²D(X)', 'D(X)+b', 'a²D(X)+b'], answer: 'a²D(X)', explanation: '根据方差的线性性质，D(aX+b)=a²D(X)。常数平移 b 不改变随机变量的离散程度，因此方差中不含 b；而缩放系数 a 以平方形式放大方差。选项 aD(X) 未平方，D(X)+b 错误加入平移项，a²D(X)+b 多出了不应有的 b。' },
        { type: 'choice', question: '在离散型随机变量的数字特征中，方差主要反映随机变量的什么？', options: ['平均水平', '取值的离散程度（波动大小）', '可能取到的最大值', '所有概率之和'], answer: '取值的离散程度（波动大小）', explanation: '方差 D(X)=Σ(x_i-E(X))²p_i 衡量各个取值偏离均值的程度，方差越大说明取值越分散、波动越大，因此方差反映的是取值的离散程度（波动大小）。平均水平由均值 E(X) 反映，与方差无关；最大值和概率之和也不是方差的含义。' },
        { type: 'fill', question: '离散型随机变量 X 以 0.5 的概率取 1、以 0.5 的概率取 2，则 E(X)=____。', answer: '1.5', explanation: '由均值定义 E(X)=Σx_i p_i，代入可得 E(X)=1×0.5+2×0.5=0.5+1=1.5。计算时只需把每个取值乘以对应概率再求和，注意两个概率之和为 1 已满足分布列的要求，无需额外处理。' },
        { type: 'fill', question: '若 X 服从两点分布，且 P(X=1)=p，P(X=0)=1-p，则 D(X)=____。', answer: 'p(1-p)', explanation: '两点分布是取 0 和 1 的特殊分布。由方差公式 D(X)=(1-p)²·p+(0-p)²·(1-p)=p(1-p)²+p²(1-p)=p(1-p)。也可直接记忆结论：两点分布的方差 D(X)=p(1-p)，它是二项分布 B(1,p) 在 n=1 时的特例。' }
      ]
    },

    /* ---------------- 第2课时 二项分布与超几何分布 ---------------- */
    {
      id: 'xb3-u4-l2',
      name: '二项分布与超几何分布',
      chapter: '第七章 随机变量及其分布 · 7.4',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、二项分布' },
        { type: 'paragraph', text: '在许多实际问题中，我们关心“在若干次相同条件下，某事件一共发生了多少次”。例如抛 10 次硬币出现几个正面、抽检 20 件产品有几件次品。当每次试验相互独立、成功概率保持不变时，事件发生的总次数就服从二项分布。' },
        { type: 'keypoint', label: '重点·二项分布定义', text: '<strong>二项分布</strong>：在 n 次独立重复试验（n 重伯努利试验）中，每次试验事件 A 发生的概率为 p（不发生为 1-p），记 X 为 A 发生的次数，则 X ~ B(n, p)，其概率分布为 P(X=k)=C_n^k·p^k·(1-p)^{n-k}（k=0,1,…,n）。' },
        { type: 'keypoint', label: '重点·期望与方差', text: '<strong>二项分布的均值与方差</strong>：若 X ~ B(n, p)，则 <strong>E(X)=np</strong>，<strong>D(X)=np(1-p)</strong>。这是二项分布最重要的两个数字特征，考试中常直接套用。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">二项分布：n 重伯努利试验</text><g font-size="14" fill="#2b5b9e" text-anchor="middle"><rect x="80" y="70" width="90" height="50" rx="6" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="125" y="100">试验1</text><rect x="200" y="70" width="90" height="50" rx="6" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="245" y="100">试验2</text><rect x="320" y="70" width="90" height="50" rx="6" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="365" y="100">试验3</text><rect x="440" y="70" width="90" height="50" rx="6" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="485" y="100">…</text><rect x="560" y="70" width="90" height="50" rx="6" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="605" y="100">试验n</text></g><g font-size="14" fill="#33536e" text-anchor="middle"><text x="125" y="150">成功 p / 失败 1-p</text><text x="245" y="150">成功 p / 失败 1-p</text><text x="365" y="150">成功 p / 失败 1-p</text><text x="605" y="150">成功 p / 失败 1-p</text></g><text x="340" y="200" font-size="16" fill="#7a5aa0" text-anchor="middle">X = 成功总次数 ~ B(n, p)</text><g font-size="14" fill="#33536e"><text x="80" y="240">每次试验相互独立、成功概率 p 不变；</text><text x="80" y="262">X 取 0~n，P(X=k)=C_n^k p^k (1-p)^{n-k}。</text></g></svg>', caption: '图1　n 次独立重复试验，每次二结果、成功概率 p 不变，成功总次数服从二项分布。' },
        { type: 'example', label: '例题1', text: '抛一枚均匀硬币 10 次，记 X 为正面向上的次数。<br><br><strong>解</strong>：每次抛掷独立，正面向上的概率 p=1/2，共 n=10 次，故 X ~ B(10, 1/2)。<br>P(X=3)=C_10^3·(1/2)³·(1/2)⁷=C_10^3·(1/2)^10=120/1024=15/128。<br>期望 E(X)=np=10·(1/2)=5。' },
        { type: 'heading', text: '二、超几何分布' },
        { type: 'paragraph', text: '与二项分布不同，超几何分布对应的是“不放回抽样”场景。例如从一批产品中一次性抽取若干件（或逐件抽取但不放回），每抽走一件，剩余总体的构成就发生变化，后续抽到次品的概率也随之改变，这时次品数服从超几何分布。' },
        { type: 'keypoint', label: '重点·超几何分布定义', text: '<strong>超几何分布</strong>：从含有 M 件次品的 N 件产品中<strong>不放回</strong>抽取 n 件，记 X 为抽到的次品数，则 X 服从超几何分布，P(X=k)=C_M^k·C_{N-M}^{n-k} / C_N^n（k=0,1,…,min(n,M)）。' },
        { type: 'keypoint', label: '重点·期望', text: '<strong>超几何分布的均值</strong>：若 X 服从超几何分布（参数 N, M, n），则 <strong>E(X)=n·M/N</strong>。它等于抽样比例 n/N 乘以总体中的次品数 M。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">超几何分布：不放回抽样</text><rect x="90" y="60" width="180" height="160" rx="14" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="180" y="52" font-size="14" fill="#2b5b9e" text-anchor="middle">袋中共 N 件</text><g fill="#e05d44"><circle cx="130" cy="100" r="12"/><circle cx="175" cy="130" r="12"/><circle cx="210" cy="185" r="12"/></g><g fill="#4a7de0"><circle cx="175" cy="95" r="12"/><circle cx="130" cy="155" r="12"/><circle cx="215" cy="135" r="12"/><circle cx="155" cy="195" r="12"/><circle cx="200" cy="175" r="12"/></g><text x="180" y="235" font-size="14" fill="#33536e" text-anchor="middle">其中 M 件次品（红），N-M 件正品（蓝）</text><text x="320" y="142" font-size="30" fill="#7a5aa0" text-anchor="middle">→</text><rect x="380" y="60" width="210" height="160" rx="14" fill="#dcd0ee" stroke="#7a5aa0" stroke-width="2"/><text x="485" y="52" font-size="14" fill="#7a5aa0" text-anchor="middle">抽出 n 件</text><g fill="#e05d44"><circle cx="430" cy="100" r="12"/><circle cx="490" cy="150" r="12"/></g><g fill="#4a7de0"><circle cx="470" cy="100" r="12"/><circle cx="430" cy="160" r="12"/><circle cx="540" cy="130" r="12"/><circle cx="510" cy="185" r="12"/></g><text x="485" y="235" font-size="14" fill="#33536e" text-anchor="middle">其中次品数 X 服从超几何分布</text><g font-size="14" fill="#33536e"><text x="80" y="272">不放回导致每次抽到次品的概率逐次改变；</text><text x="80" y="292">期望 E(X)=n·M/N。</text></g></svg>', caption: '图2　从 N 件（含 M 件次品）中不放回抽取 n 件，其中次品数 X 服从超几何分布。' },
        { type: 'example', label: '例题2', text: '一批产品共 100 件，其中含 5 件次品。从中不放回抽取 10 件，记 X 为抽到的次品数。<br><br><strong>解</strong>：X 服从超几何分布，N=100，M=5，n=10。<br>P(X=2)=C_5^2·C_95^8 / C_100^10。<br>期望 E(X)=n·M/N=10·5/100=0.5。' },
        { type: 'heading', text: '三、二项分布与超几何分布的区别' },
        { type: 'list', items: ['抽样方式：二项分布对应有放回（或独立重复），超几何对应不放回', '概率变化：二项分布每次成功概率 p 不变，超几何每次概率逐次变化', '近似关系：当总体 N 很大、抽样 n 较小时，超几何可近似看作二项分布', '判断口诀：看“是否放回”，放回用二项，不放回用超几何'] },
        { type: 'warn', label: '易错', text: '二者最易混淆之处在于“该用哪个”。<strong>关键看抽样方式</strong>：①若题目中明确“有放回”“独立重复”，用二项分布；②若“不放回”“一次性抽取”，用超几何分布；③当总体很大而抽样比例很小时，超几何分布近似于二项分布，但严格来说仍要区分。切勿见到“抽 n 件”就盲目套二项分布。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="34" font-size="17" fill="#2b5b9e" text-anchor="middle" font-weight="bold">二项分布 vs 超几何分布：核心区别</text><rect x="80" y="60" width="250" height="60" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="205" y="96" font-size="16" fill="#2b5b9e" text-anchor="middle">二项分布（有放回/独立）</text><rect x="350" y="60" width="250" height="60" rx="8" fill="#dcd0ee" stroke="#7a5aa0" stroke-width="2"/><text x="475" y="96" font-size="16" fill="#7a5aa0" text-anchor="middle">超几何（不放回）</text><g font-size="14" fill="#33536e"><text x="100" y="160">· 每次成功概率 p 不变</text><text x="100" y="186">· 试验相互独立</text><text x="100" y="212">· E(X)=np，D(X)=np(1-p)</text><text x="370" y="160">· 每次概率随抽走而变化</text><text x="370" y="186">· 试验不独立</text><text x="370" y="212">· E(X)=nM/N</text></g><g font-size="14" fill="#33536e"><text x="80" y="252">有放回或总体很大近似独立时用二项分布；</text><text x="80" y="272">严格不放回抽样则用超几何分布。</text></g></svg>', caption: '图3　两分布核心区别：有放回（独立、概率不变）用二项，不放回用超几何。' },
        { type: 'example', label: '例题3', text: '某工厂检验一批灯泡，若采用“有放回”抽检，每次抽检后放回，各次独立、每次次品率不变，则次品数 X 服从<strong>二项分布</strong>；若采用“不放回”抽检，每次抽走后总体改变，各次不独立，则次品数 X 服从<strong>超几何分布</strong>。' },
        { type: 'table', headers: ['对比项', '二项分布', '超几何分布'], rows: [['抽样方式', '有放回 / 独立重复', '不放回'], ['每次概率', '成功概率 p 不变', '概率逐次变化'], ['参数', 'n, p', 'N, M, n'], ['概率公式', 'P(X=k)=C_n^k p^k(1-p)^{n-k}', 'P(X=k)=C_M^k C_{N-M}^{n-k}/C_N^n'], ['期望', 'E(X)=np', 'E(X)=nM/N']] },
        { type: 'tip', label: '提示', text: '<strong>如何快速判别</strong>：先问一句“抽走一件后，下一件抽到次品的概率变了吗？”若不变（有放回或近似不变），用二项分布 B(n,p)；若变了（不放回），用超几何分布。记住二项分布期望 np、超几何期望 nM/N，二者形式相似但含义不同。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['二项分布 B(n,p)：n 次独立重复试验，P(X=k)=C_n^k p^k(1-p)^{n-k}，E=np，D=np(1-p)', '超几何分布：不放回抽样，P(X=k)=C_M^k C_{N-M}^{n-k}/C_N^n，E=nM/N', '核心区别：有放回（独立）用二项，不放回用超几何', '期望可直接使用公式，不必每次重新列分布列再求和'] }
      ],
      exercises: [
        { type: 'choice', question: '二项分布所适用的试验具有下列哪一特征？', options: ['n 次独立重复试验，每次成功概率 p 不变', '不放回抽样', '只进行单次试验', '连续型随机变量的取值'], answer: 'n 次独立重复试验，每次成功概率 p 不变', explanation: '二项分布描述的是 n 次独立重复试验（n 重伯努利试验）中成功次数的分布，其核心前提是每次试验相互独立且成功概率 p 保持不变。不放回抽样对应的是超几何分布；单次试验不构成“n 次”；连续型变量不属于离散型的二项分布范畴。' },
        { type: 'choice', question: '超几何分布通常适用于下列哪种抽样方式？', options: ['有放回抽样', '不放回抽样', '独立重复试验', '只抽取一件'], answer: '不放回抽样', explanation: '超几何分布研究的是从含 M 件次品的 N 件产品中“不放回”抽取 n 件时，抽到次品数的分布。由于不放回，每次抽取后总体构成改变、概率逐次变化，各次不独立。有放回或独立重复试验对应二项分布，而非超几何分布；只抽一件是 n=1 的退化情形。' },
        { type: 'choice', question: '若随机变量 X ~ B(10, 0.3)，则 E(X) 等于？', options: ['3', '0.3', '7', '10'], answer: '3', explanation: '对于二项分布 X ~ B(n, p)，其期望公式为 E(X)=np。本题中 n=10、p=0.3，故 E(X)=10×0.3=3。选项 0.3 误把参数 p 当作期望，7 是 n(1-p) 的结果，10 误把试验次数当作期望，均不正确。' },
        { type: 'fill', question: '若离散型随机变量 X ~ B(n, p)，则其数学期望 E(X)=____。', answer: 'np', explanation: '二项分布的期望公式为 E(X)=np，其中 n 为试验总次数、p 为每次试验成功的概率。该结论可由期望定义直接求和得到，也可由两点分布期望 p 经 n 次独立相加推出，是使用二项分布时最常直接套用的数字特征。' },
        { type: 'fill', question: '若离散型随机变量 X 服从超几何分布（总体 N 件中含 M 件次品，抽取 n 件），则 E(X)=____。', answer: 'n·M/N|nM/N', explanation: '超几何分布的期望公式为 E(X)=n·M/N，它等于抽样比例 n/N 乘以总体中的次品数 M。直观上，若总体中次品占比为 M/N，抽取 n 件则平均抽到 n·M/N 件次品。注意与二项分布期望 np 形式相似但含义不同，这里 p 被替换为 M/N。' }
      ]
    }

  );
})();
