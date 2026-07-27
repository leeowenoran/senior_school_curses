/* ============================================================
 * 高二数学 · 选择性必修 第三册 · 第七章 随机变量及其分布
 * 第1课时：条件概率与全概率公式（人教A版 §7.1）
 * 第2课时：离散型随机变量及其分布列（人教A版 §7.2）
 * 数据注入：math.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'xb3');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 条件概率与全概率公式 ---------------- */
    {
      id: 'xb3-u3-l1',
      name: '条件概率与全概率公式',
      chapter: '第七章 随机变量及其分布 · 7.1',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、条件概率的概念' },
        { type: 'paragraph', text: '在很多实际问题中，我们关心的往往不是事件 B 单独发生的概率，而是“在另一个事件 A 已经发生”的前提下，事件 B 发生的可能性大小。这种带有前提条件的概率，就是条件概率。例如掷两枚骰子时，已知第一枚掷出 6 点，再求点数和为 7 的概率，就是典型的条件概率问题。' },
        { type: 'keypoint', label: '重点·定义', text: '设 A、B 为两个事件，且 <strong>P(A) &gt; 0</strong>，则称 <strong>P(B|A) = P(AB) / P(A)</strong> 为在事件 A 发生的条件下事件 B 发生的<strong>条件概率</strong>。其中 P(AB) 是事件 A 与 B 同时发生的概率，P(A) 是事件 A 发生的概率。' },
        { type: 'paragraph', text: '条件概率也可以从“缩减样本空间”的角度来理解：既然已知 A 已经发生，那么所有可能的试验结果就只剩下 A 中的那些，原样本空间 Ω 被缩减成了 A。此时 B 发生，等价于“在 A 中、同时也在 B 中”的那部分，也就是 AB 在 A 中所占的比例。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef4fc"/><text x="40" y="40" font-size="17" fill="#2b5b9e" font-weight="bold">缩减样本空间：已知 A 发生，样本空间缩小到 A</text><ellipse cx="280" cy="145" rx="210" ry="80" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2.5"/><text x="470" y="92" font-size="16" fill="#2b5b9e">Ω（原样本空间）</text><ellipse cx="245" cy="145" rx="120" ry="55" fill="#7eb0e6" stroke="#2b5b9e" stroke-width="2.5"/><text x="245" y="151" font-size="16" fill="#1a3a5c" text-anchor="middle">A</text><ellipse cx="230" cy="145" rx="54" ry="28" fill="#e05d44" opacity="0.55" stroke="#c0392b" stroke-width="2"/><text x="230" y="151" font-size="15" fill="#fff" text-anchor="middle">AB</text><text x="40" y="225" font-size="14" fill="#33536e">说明：P(B|A) 等于在 A 中 B 所占比例，即红色 AB 区域占蓝色 A 区域的面积比</text><text x="40" y="245" font-size="14" fill="#33536e">已知 A 已发生，只需在 A 内考虑，Ω 不再起作用</text></svg>', caption: '图1　缩减样本空间：已知 A 发生，Ω 退化为 A，条件概率即 AB 在 A 中所占份额。' },
        { type: 'heading', text: '二、条件概率的性质' },
        { type: 'keypoint', label: '重点·性质', text: '条件概率 P(B|A) 具有与普通概率相同的基本性质：<br>① <strong>0 ≤ P(B|A) ≤ 1</strong>；<br>② <strong>P(Ω|A) = 1</strong>（在 A 发生条件下，必然事件的概率仍为 1）；<br>③ 若 B1、B2 互斥，则 <strong>P(B1∪B2|A) = P(B1|A) + P(B2|A)</strong>。' },
        { type: 'list', items: ['非负性：0 ≤ P(B|A) ≤ 1，条件概率仍是介于 0 与 1 之间的数', '规范性：P(Ω|A) = 1，必然事件的条件概率恒为 1', '可加性：互斥事件的条件概率可以直接相加'] },
        { type: 'warn', label: '易错', text: '使用条件概率公式 <strong>P(B|A) = P(AB)/P(A)</strong> 时，切记前提是 <strong>P(A) &gt; 0</strong>。若 P(A) = 0，分母为零、公式无意义，此时不能再谈“在 A 发生条件下”。另外，<strong>P(B|A) 与 P(A|B) 一般并不相等</strong>，两者分子同为 P(AB) 但分母不同，切勿混淆。' },
        { type: 'example', label: '例题1', text: '掷两枚均匀的骰子，已知第一枚掷出 6 点，求点数和为 7 的概率。<br><br><strong>解</strong>：记 A = {第一枚为 6 点}，B = {点数和为 7}。在 36 个等可能结果中，A 含 6 个结果（第一枚固定为 6，第二枚可取 1~6），故 P(A) = 6/36 = 1/6；AB = {第一枚为 6 且点数和为 7} = {(6,1)}，故 P(AB) = 1/36。<br>由条件概率公式得 P(B|A) = P(AB)/P(A) = (1/36) / (1/6) = <strong>1/6</strong>。' },
        { type: 'heading', text: '三、条件概率公式的应用' },
        { type: 'keypoint', label: '重点·公式', text: '条件概率的核心公式是 <strong>P(B|A) = P(AB) / P(A)（P(A) &gt; 0）</strong>。当 A、B 相互独立时，有 P(AB) = P(A)P(B)，此时 <strong>P(B|A) = P(B)</strong>，即 A 的发生并不影响 B 的概率。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef4fc"/><text x="40" y="40" font-size="17" fill="#2b5b9e" font-weight="bold">条件概率公式 P(B|A) = P(AB) / P(A)</text><ellipse cx="225" cy="130" rx="150" ry="70" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="225" y="70" font-size="16" fill="#2b5b9e">A</text><ellipse cx="225" cy="130" rx="60" ry="40" fill="#e05d44" opacity="0.5" stroke="#c0392b" stroke-width="2"/><text x="225" y="135" font-size="14" fill="#fff" text-anchor="middle">AB</text><text x="430" y="108" font-size="20" fill="#2b5b9e">P(B|A)</text><text x="430" y="138" font-size="15" fill="#33536e">= P(AB)</text><text x="430" y="163" font-size="15" fill="#33536e">÷ P(A)</text><text x="40" y="210" font-size="14" fill="#33536e">分母 P(A) 是原空间中 A 的概率，分子 P(AB) 是两事件同时发生的概率</text><text x="40" y="228" font-size="14" fill="#33536e">前提：P(A) &gt; 0，否则条件概率无意义</text></svg>', caption: '图2　条件概率公式示意：用 AB 与 A 的概率之商表示在 A 发生下 B 的概率。' },
        { type: 'paragraph', text: '这个公式看似简单，却是全概率公式、贝叶斯公式等后续知识的基础。解题时，关键是先明确“条件事件 A”和“目标事件 B”，再分别求出 P(A) 与 P(AB)，最后相除即可。' },
        { type: 'example', label: '例题2', text: '若事件 A、B 相互独立，且 P(A) = 0.4，P(B) = 0.5，求 P(B|A)。<br><br><strong>解</strong>：因为 A、B 独立，A 发生不影响 B 的概率，故 <strong>P(B|A) = P(B) = 0.5</strong>。也可用公式验证：P(AB) = P(A)P(B) = 0.4 × 0.5 = 0.2，于是 P(B|A) = 0.2 / 0.4 = 0.5，结果一致。' },
        { type: 'heading', text: '四、全概率公式' },
        { type: 'keypoint', label: '重点·全概率', text: '设 A1, A2, …, An 是样本空间 Ω 的一个<strong>划分</strong>（即它们两两互斥，且 A1∪A2∪…∪An = Ω），且 <strong>P(Ai) &gt; 0</strong>（i = 1,2,…,n），则对任一事件 B，有 <strong>P(B) = Σ P(Ai) P(B|Ai)</strong>。这就是<strong>全概率公式</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="40" y="40" font-size="17" fill="#2b5b9e" font-weight="bold">全概率公式：样本空间 Ω 被划分为 A1、A2、A3</text><rect x="80" y="70" width="520" height="130" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2.5"/><line x1="253" y1="70" x2="253" y2="200" stroke="#4a7de0" stroke-width="2"/><line x1="426" y1="70" x2="426" y2="200" stroke="#4a7de0" stroke-width="2"/><rect x="80" y="70" width="173" height="130" fill="#7eb0e6" opacity="0.6"/><rect x="253" y="70" width="173" height="130" fill="#9cc0ec" opacity="0.6"/><rect x="426" y="70" width="174" height="130" fill="#7eb0e6" opacity="0.6"/><text x="166" y="142" font-size="16" fill="#1a3a5c" text-anchor="middle" font-weight="bold">A1</text><text x="340" y="142" font-size="16" fill="#1a3a5c" text-anchor="middle" font-weight="bold">A2</text><text x="513" y="142" font-size="16" fill="#1a3a5c" text-anchor="middle" font-weight="bold">A3</text><ellipse cx="340" cy="135" rx="250" ry="55" fill="#e05d44" opacity="0.35" stroke="#c0392b" stroke-width="2"/><text x="340" y="108" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">B</text><text x="40" y="240" font-size="14" fill="#33536e">说明：事件 B 被划分切成 B∩A1、B∩A2、B∩A3 三块</text><text x="40" y="260" font-size="14" fill="#33536e">P(B) = P(A1)P(B|A1) + P(A2)P(B|A2) + P(A3)P(B|A3)</text><text x="40" y="278" font-size="14" fill="#33536e">A1、A2、A3 两两互斥且并为 Ω（构成 Ω 的一个划分）</text></svg>', caption: '图3　全概率划分：Ω 分成互不相交的 A1、A2、A3，事件 B 被各划分“切”成若干块后求和。' },
        { type: 'paragraph', text: '全概率公式的思想是“分而治之”：当直接求 P(B) 比较困难时，可以先按照一个划分把 Ω 分成若干块，在每一块上分别计算 B 发生的条件概率，再按各块的权重 P(Ai) 加权平均，从而得到 B 的总概率。' },
        { type: 'example', label: '例题3', text: '甲箱中有 3 红 2 白，乙箱中有 2 红 3 白。随机等可能地选一箱，再从该箱中任取一球，求取到红球的概率。<br><br><strong>解</strong>：记 A1 = {选甲箱}，A2 = {选乙箱}，则 P(A1) = P(A2) = 1/2，且 A1、A2 构成 Ω 的一个划分。记 B = {取到红球}，则 P(B|A1) = 3/5，P(B|A2) = 2/5。<br>由全概率公式：P(B) = P(A1)P(B|A1) + P(A2)P(B|A2) = (1/2)(3/5) + (1/2)(2/5) = <strong>1/2</strong>。' },
        { type: 'warn', label: '易错', text: '使用全概率公式前，必须先确认 <strong>A1…An 构成 Ω 的划分</strong>：它们既要两两互斥，又要并为整个样本空间，且每一块的 P(Ai) &gt; 0。如果划分不完整（漏掉某一块）或块之间有重叠，公式就会算错。题设中“随机选一箱”“按不同渠道生产”往往正对应一个自然的划分。' },
        { type: 'table', headers: ['名称', '公式或结论', '成立条件 / 说明'], rows: [['条件概率', 'P(B|A) = P(AB)/P(A)', '前提 P(A) > 0'], ['条件概率性质', '0≤P(B|A)≤1，P(Ω|A)=1', '与普通概率性质一致'], ['独立性推论', '若 A、B 独立，P(B|A)=P(B)', '此时 P(AB)=P(A)P(B)'], ['全概率公式', 'P(B)=Σ P(Ai)P(B|Ai)', 'A1…An 为 Ω 的一个划分']] },
        { type: 'tip', label: '提示', text: '判断一道题该用<strong>条件概率</strong>还是<strong>全概率</strong>：若题目已明确“已知某事件发生了”，往往直接套 P(B|A) 公式；若要求的是某个总概率，且能找到清晰的划分（如“先选箱再取球”“先抽产品再检验”），则用全概率公式把各分支的概率“拼”起来。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['条件概率 P(B|A)=P(AB)/P(A)，前提是 P(A)>0', '条件概率性质：0≤P(B|A)≤1、P(Ω|A)=1、互斥可加', '独立时 P(B|A)=P(B)', '全概率公式 P(B)=Σ P(Ai)P(B|Ai)，需 A1…An 为 Ω 的划分', '缩减样本空间是理解条件概率的直观方法'] }
      ],
      exercises: [
        { type: 'choice', question: '条件概率 P(B|A) 的正确公式是？', options: ['P(B|A) = P(AB) / P(A)', 'P(B|A) = P(A) / P(B)', 'P(B|A) = P(AB) · P(A)', 'P(B|A) = P(A) + P(B)'], answer: 'P(B|A) = P(AB) / P(A)', explanation: '条件概率 P(B|A) 表示在事件 A 已经发生的条件下事件 B 发生的概率，其定义公式为 P(B|A) = P(AB) / P(A)，其中 P(A) 必须大于 0。该公式把样本空间由 Ω 缩减到 A，分子是两个事件同时发生的概率，分母是 A 发生的概率。其余选项分子分母颠倒或运算符号错误，均不符合定义。' },
        { type: 'choice', question: '条件概率公式成立的前提条件是？', options: ['P(A) > 0', 'P(B) > 0', 'P(AB) > 0', 'P(A) = 1'], answer: 'P(A) > 0', explanation: '条件概率 P(B|A) 的定义要求分母 P(A) 不为 0，因此必须满足 P(A) > 0。若 P(A) = 0，则在 A 发生的条件下讨论 B 的概率没有意义，公式 P(B|A) = P(AB) / P(A) 也无定义。它与 P(B) 是否为 0 无关，也无需 P(AB) > 0，更不要求 A 必然发生（P(A)=1）。' },
        { type: 'choice', question: '全概率公式主要适用于下列哪种情形？', options: ['已知样本空间 Ω 的一个划分 A1…An 时求事件 B 的概率', '已知 P(A) 和 P(B) 直接求 P(AB)', '已知 P(B|A) 求 P(A|B)', '已知两个事件互斥时求并事件的概率'], answer: '已知样本空间 Ω 的一个划分 A1…An 时求事件 B 的概率', explanation: '全概率公式的思想是把复杂事件 B 按照样本空间的一个划分 A1, A2, …, An（两两互斥且并为 Ω，且 P(Ai) > 0）拆分成若干块，再用 P(B) = Σ P(Ai) P(B|Ai) 求和。它适用于已知划分及各部分条件概率、从而求 B 的总概率的情形。其余选项均不属于全概率公式的典型适用场景。' },
        { type: 'fill', question: '若 P(A) = 1/2，P(AB) = 1/4，则 P(B|A) = ____。', answer: '1/2', explanation: '由条件概率公式 P(B|A) = P(AB) / P(A)，代入已知数据得 P(B|A) = (1/4) / (1/2) = 1/2。也可以理解为在 A 发生的条件下，AB 占 A 的比例为一半。计算时注意用 P(AB) 除以 P(A)，而不是相反，且要求 P(A) > 0，本题中 P(A) = 1/2 满足前提条件。' },
        { type: 'fill', question: '若事件 A、B 相互独立，则 P(B|A) = ____。', answer: 'P(B)', explanation: '当事件 A 与 B 相互独立时，A 的发生不影响 B 发生的概率，因此在 A 发生的条件下 B 的概率等于 B 本身的概率，即 P(B|A) = P(B)。也可由定义推导：独立时 P(AB) = P(A)P(B)，故 P(B|A) = P(AB)/P(A) = P(A)P(B)/P(A) = P(B)。这是独立性的一个重要推论。' }
      ]
    },

    /* ---------------- 第2课时 离散型随机变量及其分布列 ---------------- */
    {
      id: 'xb3-u3-l2',
      name: '离散型随机变量及其分布列',
      chapter: '第七章 随机变量及其分布 · 7.2',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、随机变量的概念' },
        { type: 'paragraph', text: '在随机试验中，试验结果往往用文字描述，不便于计算和研究。为了用代数方法处理随机现象，我们把试验的每一个结果对应到一个实数，从而得到“随机变量”。例如掷一枚骰子，用 X 表示掷出的点数，X 就随试验结果的变化而变化。' },
        { type: 'keypoint', label: '重点·定义', text: '一般地，对于随机试验的每一个可能结果 ω，都有<strong>唯一的实数 X(ω) 与之对应</strong>，这样就得到一个定义在样本空间上的<strong>实数值函数 X</strong>，称为<strong>随机变量</strong>。随机变量常用大写字母 X、Y、ξ、η 等表示。' },
        { type: 'paragraph', text: '引入随机变量后，随机事件就可以用随机变量满足某种条件来表示。例如“掷出点数不小于 5”可写成 X ≥ 5。这种数量化的表达方式，使概率研究可以借助函数、图像等数学工具展开。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef4fc"/><text x="40" y="40" font-size="17" fill="#2b5b9e" font-weight="bold">随机变量 X：把样本点 ω 映射为实数 X(ω)</text><ellipse cx="170" cy="150" rx="110" ry="70" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2.5"/><text x="170" y="95" font-size="15" fill="#2b5b9e">样本空间 Ω</text><g fill="#2b5b9e"><circle cx="130" cy="140" r="6"/><circle cx="170" cy="160" r="6"/><circle cx="210" cy="150" r="6"/><circle cx="150" cy="178" r="6"/></g><g font-size="14" fill="#33536e"><text x="108" y="128">ω1</text><text x="150" y="152">ω2</text><text x="190" y="138">ω3</text></g><text x="244" y="132" font-size="30" fill="#2b5b9e">→</text><g font-size="17" fill="#e05d44"><text x="300" y="128">X(ω1)=1</text><text x="300" y="158">X(ω2)=2</text><text x="300" y="188">X(ω3)=0</text></g><line x1="470" y1="108" x2="470" y2="200" stroke="#5a7a2a" stroke-width="2"/><g stroke="#5a7a2a" stroke-width="1.5"><line x1="460" y1="138" x2="480" y2="138"/><line x1="460" y1="170" x2="480" y2="170"/></g><text x="490" y="143" font-size="15" fill="#5a7a2a">取值</text><text x="490" y="173" font-size="15" fill="#5a7a2a">0,1,2</text><text x="40" y="232" font-size="14" fill="#33536e">说明：每个试验结果（样本点）经 X 对应一个实数，X 随试验变化而变化</text><text x="40" y="250" font-size="14" fill="#33536e">随机变量将随机现象数量化，是概率研究的桥梁</text></svg>', caption: '图1　随机变量的映射：样本点 ω 经 X 对应到实数，实现随机现象的数量化。' },
        { type: 'heading', text: '二、离散型随机变量' },
        { type: 'keypoint', label: '重点·离散型', text: '如果随机变量 X 的<strong>所有可能取值能够一一列举出来</strong>（如有限个或可数无限个），则称 X 为<strong>离散型随机变量</strong>。例如掷骰子的点数、任取一球的红球个数，都是离散型随机变量；而身高、温度等连续取值的则不是。' },
        { type: 'list', items: ['离散型随机变量的取值可以逐个列出', '取值可以是有限个，也可以是可数无限个', '判断是否为离散型，看取值能否一一列举'] },
        { type: 'warn', label: '易错', text: '不要把“离散型”与“连续型”混淆：离散型的取值是<strong>分立、可列举</strong>的（如 0, 1, 2, …），而连续型（如测量长度、时间）的取值充满一个区间，无法一一列举。另外，随机变量是<strong>函数</strong>而非普通变量，它随试验结果而变，研究的是其取值的概率规律。' },
        { type: 'example', label: '例题1', text: '掷一枚均匀骰子，令 X 表示掷出的点数，写出 X 的分布列并检验。<br><br><strong>解</strong>：X 的可能取值为 1, 2, 3, 4, 5, 6，且每个点数出现的概率均为 1/6，故分布列为 P(X=k) = 1/6（k = 1, 2, …, 6）。检验：p_i ≥ 0 且 Σ p_i = 6 × (1/6) = 1，满足分布列性质。' },
        { type: 'heading', text: '三、离散型随机变量的分布列' },
        { type: 'keypoint', label: '重点·分布列', text: '设离散型随机变量 X 的可能取值为 x1, x2, …, xn，X 取 xi 的概率记为 <strong>P(X = xi) = pi</strong>（i = 1, 2, …, n），则称下表为 X 的<strong>分布列</strong>：第一行列出 X 的取值，第二行列出对应的概率。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="40" y="40" font-size="17" fill="#2b5b9e" font-weight="bold">分布列与概率条形图（以掷骰子为例）</text><rect x="60" y="60" width="250" height="80" fill="#fff" stroke="#4a7de0" stroke-width="2"/><line x1="60" y1="100" x2="310" y2="100" stroke="#4a7de0" stroke-width="1"/><g font-size="13" fill="#2b5b9e" text-anchor="middle"><text x="92" y="82">X</text><text x="145" y="82">1</text><text x="198" y="82">2</text><text x="251" y="82">3</text><text x="290" y="82">…</text><text x="92" y="122">P</text><text x="145" y="122">1/6</text><text x="198" y="122">1/6</text><text x="251" y="122">1/6</text><text x="290" y="122">…</text></g><g fill="#4a7de0"><rect x="120" y="170" width="28" height="60"/><rect x="170" y="170" width="28" height="60"/><rect x="220" y="170" width="28" height="60"/><rect x="270" y="170" width="28" height="60"/><rect x="320" y="170" width="28" height="60"/><rect x="370" y="170" width="28" height="60"/></g><line x1="100" y1="230" x2="420" y2="230" stroke="#33536e" stroke-width="1.5"/><g font-size="12" fill="#33536e" text-anchor="middle"><text x="134" y="248">1</text><text x="184" y="248">2</text><text x="234" y="248">3</text><text x="284" y="248">4</text><text x="334" y="248">5</text><text x="384" y="248">6</text></g><text x="440" y="150" font-size="15" fill="#33536e">条形高度 = p_i</text><text x="440" y="180" font-size="15" fill="#5a7a2a">每个 p_i = 1/6</text><text x="40" y="268" font-size="14" fill="#33536e">说明：分布列以表格列出各取值的概率，条形图直观展示概率大小</text><text x="40" y="280" font-size="13" fill="#33536e">所有条形高度之和对应总概率，应为 1</text></svg>', caption: '图2　分布列与对应概率条形图：表格给出各取值概率，条形高度即 p_i。' },
        { type: 'table', headers: ['X', 'x1', 'x2', '…', 'xn'], rows: [['P', 'p1', 'p2', '…', 'pn']] },
        { type: 'paragraph', text: '分布列完整地刻画了离散型随机变量的概率分布规律：从分布列可以看出随机变量取各个值的可能性大小。它是研究随机变量期望、方差等后续内容的基础工具。' },
        { type: 'keypoint', label: '重点·性质', text: '分布列中的概率必须满足两条基本性质：<br>① <strong>非负性</strong>：pi ≥ 0（i = 1, 2, …, n）；<br>② <strong>归一性</strong>：<strong>Σ pi = 1</strong>（所有可能取值的概率之和为 1）。这两条性质既是从分布列推出的结论，也是检验一组数能否作为分布列的依据。' },
        { type: 'example', label: '例题2', text: '抛一枚均匀硬币，令 X = 1 表示正面朝上，X = 0 表示反面朝上，求 X 的分布列。<br><br><strong>解</strong>：X 仅取 0 和 1 两个值，且 P(X=1) = 1/2，P(X=0) = 1/2。分布列为：P(X=1) = 1/2，P(X=0) = 1/2。检验：两概率均非负，且 1/2 + 1/2 = 1，满足分布列性质。这是最简单的两点分布。' },
        { type: 'heading', text: '四、两点分布（0-1 分布）' },
        { type: 'keypoint', label: '重点·两点分布', text: '若随机变量 X 只取 <strong>0 和 1</strong> 两个值，且 P(X=1) = p，P(X=0) = 1 - p（其中 <strong>0 &lt; p &lt; 1</strong>），则称 X 服从<strong>两点分布</strong>（或 0-1 分布）。它描述只有两种对立结果的试验，如“成功/失败”“合格/不合格”。' },
        { type: 'example', label: '例题3', text: '袋中装有 2 红 1 白共 3 个球，从中任取 1 球，令 X 表示取到红球的个数（0 或 1），求 X 的分布列。<br><br><strong>解</strong>：X 的可能取值为 0（取到白球）和 1（取到红球）。P(X=1) = 2/3，P(X=0) = 1/3。分布列为：P(X=1) = 2/3，P(X=0) = 1/3。检验：2/3 + 1/3 = 1，且均非负，符合分布列性质。' },
        { type: 'warn', label: '易错', text: '两点分布的参数 p 必须满足 <strong>0 &lt; p &lt; 1</strong>。当 p = 1 时 X 恒为 1，p = 0 时 X 恒为 0，这两种退化情形已无随机性，一般不作为标准两点分布讨论。此外，<strong>P(X=0) = 1 - p</strong> 由归一性直接得到，切勿把两个概率都当作独立未知量来处理。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef4fc"/><text x="40" y="40" font-size="17" fill="#2b5b9e" font-weight="bold">分布列性质：各概率之和为 1，即 Σp_i = 1</text><g fill="#4a7de0"><rect x="80" y="120" width="60" height="70"/><rect x="160" y="120" width="60" height="70"/><rect x="240" y="120" width="60" height="70"/><rect x="320" y="120" width="60" height="70"/></g><g fill="#5a7a2a"><rect x="400" y="120" width="60" height="70"/></g><g font-size="14" fill="#33536e" text-anchor="middle"><text x="110" y="210">p1</text><text x="190" y="210">p2</text><text x="270" y="210">p3</text><text x="350" y="210">p4</text><text x="430" y="210">p5</text></g><text x="500" y="128" font-size="18" fill="#e05d44" font-weight="bold">Σp_i = 1</text><text x="500" y="160" font-size="14" fill="#33536e">所有概率</text><text x="500" y="182" font-size="14" fill="#33536e">加起来</text><text x="40" y="232" font-size="14" fill="#33536e">说明：全部可能取值的概率之和必为 1，这是检验分布列正确性的关键</text><text x="40" y="250" font-size="13" fill="#33536e">另有 p_i ≥ 0（每个概率非负）</text></svg>', caption: '图3　概率和为 1：所有取值的概率累加等于 1，且每个 p_i 非负。' },
        { type: 'tip', label: '提示', text: '拿到一道“求分布列”的题，可按三步进行：<strong>第一步</strong>确定随机变量的所有可能取值；<strong>第二步</strong>逐个求出取各值的概率；<strong>第三步</strong>列成表格并检验 p_i ≥ 0 且 Σ p_i = 1。只要三步到位，分布列就既完整又不会出错。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['随机变量：把样本点映射为实数的函数 X', '离散型：取值可一一列举', '分布列：列出 X 各取值及对应概率 p_i', '性质：p_i ≥ 0 且 Σ p_i = 1', '两点分布：只取 0、1，P(X=1)=p，P(X=0)=1-p'] }
      ],
      exercises: [
        { type: 'choice', question: '离散型随机变量的分布列必须满足？', options: ['p_i ≥ 0 且 Σp_i = 1', 'p_i > 0 且 Σp_i = 1', 'p_i ≥ 0 且 Σp_i = 0', 'p_i 可正可负且 Σp_i = 1'], answer: 'p_i ≥ 0 且 Σp_i = 1', explanation: '离散型随机变量的分布列要求每一个概率 p_i 都非负（p_i ≥ 0），并且所有可能取值的概率之和必须等于 1（Σp_i = 1）。前者是因为概率不能为负，后者是因为所有可能结果的概率总和必然为整体 1。注意允许 p_i = 0，所以写成 p_i > 0 是错误的；概率和也不能为 0。' },
        { type: 'choice', question: '两点分布（0-1 分布）的随机变量取值是？', options: ['0 和 1', '任意实数', '1 和 2', '正整数'], answer: '0 和 1', explanation: '两点分布又称 0-1 分布，是指随机变量 X 只可能取 0 和 1 两个值，且 P(X=1) = p，P(X=0) = 1 - p，其中 0 < p < 1。它刻画的是只有两种对立结果的随机试验，例如一次试验的成功与失败。它并不是取任意实数，也不是取 1 和 2，更不是所有正整数。' },
        { type: 'choice', question: '下列各组数中，能作为离散型随机变量分布列的是？', options: ['各概率非负且和为 1 的那组', '概率中有负数但和为 1 的那组', '概率均为正但和大于 1 的那组', '概率非负但和小于 1 的那组'], answer: '各概率非负且和为 1 的那组', explanation: '判断一组数能否作为分布列，必须同时满足两条：一是每个概率 p_i ≥ 0，二是所有概率之和 Σp_i = 1。概率为负违背非负性；概率和大于 1 或小于 1 都违背归一性。因此只有“各概率非负且和为 1”的那组才符合分布列的两个基本性质。' },
        { type: 'fill', question: '若 P(X=1) = 0.3，P(X=2) = 0.5，则 P(X=3) = ____。', answer: '0.2', explanation: '由分布列的性质，所有可能取值的概率之和必须等于 1，即 P(X=1) + P(X=2) + P(X=3) = 1。代入已知得 0.3 + 0.5 + P(X=3) = 1，故 P(X=3) = 1 - 0.8 = 0.2。计算时要注意分布列的归一性，三个概率之和必须为 1，缺省的概率由总和为 1 唯一确定。' },
        { type: 'fill', question: '两点分布中若 P(X=1) = p，则 P(X=0) = ____。', answer: '1-p', explanation: '在两点分布（0-1 分布）中，随机变量 X 只取 0 和 1 两个值，且 0 < p < 1。由分布列的归一性，P(X=0) + P(X=1) = 1，已知 P(X=1) = p，因此 P(X=0) = 1 - p。这体现了两种对立结果概率互补的关系，也是两点分布标准形式的直接结论。' }
      ]
    }

  );
})();
