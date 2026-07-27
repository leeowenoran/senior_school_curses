/* ============================================================
 * 高三数学 · 概率统计复习专题 · 第3单元
 * 第1课时：条件概率（对应五）
 * 第2课时：事件独立性与全概率公式（含贝叶斯）（对应六）
 * 数据注入：math.zt6.points
 * 注：本文件仅向 math.zt6.points 注入数据，不改动 data-gz.js
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt6');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 条件概率 ---------------- */
    {
      id: 'zt6-u3-l1',
      name: '条件概率',
      chapter: '概率统计复习 · 五、条件概率',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、条件概率的定义' },
        { type: 'paragraph', text: '在概率问题中，我们常遇到这样的情形：已经知道某个事件 A 发生了，再去求另一个事件 B 发生的概率。这种「在已知前提下的概率」就是条件概率，它是理解乘法公式、全概率公式与贝叶斯公式的共同基础。' },
        { type: 'keypoint', label: '重点·定义', text: '在<strong>事件 A 发生的条件下</strong>，事件 B 发生的概率叫做<strong>条件概率</strong>，记作 <strong>P(B|A)</strong>。计算公式为 <strong>P(B|A) = P(AB) / P(A)</strong>（要求 P(A) ＞ 0）。分母 P(A) 是前提事件发生的概率，分子 P(AB) 是 A、B 同时发生的概率。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><ellipse cx="280" cy="140" rx="120" ry="90" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><ellipse cx="400" cy="140" rx="120" ry="90" fill="#f6d3ca" stroke="#e05d44" stroke-width="2.5"/><ellipse cx="340" cy="140" rx="62" ry="56" fill="#b48fd0" stroke="#7a5aa0" stroke-width="2"/><text x="200" y="70" font-size="18" fill="#2b5b9e" font-weight="bold">A</text><text x="480" y="70" font-size="18" fill="#c0392b" font-weight="bold">B</text><text x="340" y="146" font-size="15" fill="#2b5b9e" font-weight="bold" text-anchor="middle">AB</text><g font-size="14" fill="#33536e"><text x="40" y="250">P(B|A) 是 AB 区域（紫）占整个 A 区域的比例</text><text x="40" y="270">即在 A 已发生后，B 也发生的概率</text></g></svg>', caption: '图1　条件概率 P(B|A)：把样本空间缩减为 A 后，求 B 在 A 中占比。' },
        { type: 'paragraph', text: '从公式看，P(B|A) 是把样本空间「缩小」到 A 之后，B 在其中的占比。它不再是在整个样本空间 Ω 下计算，而是换了一个更小的舞台重新计算概率。' },
        { type: 'keypoint', label: '重点·缩减样本空间', text: '可以把 P(B|A) 理解为：<strong>事件 A 发生以后，样本空间由 Ω 缩减为 A</strong>。在新的样本空间 A 中，B 发生等价于 A、B 同时发生，即落在 A∩B 中。因此条件概率本质是在「缩减后的样本空间」里算概率。' },
        { type: 'heading', text: '二、条件概率的性质' },
        { type: 'keypoint', label: '重点·三条公理', text: '在「A 已发生」这个前提下计算概率，仍然满足概率的三条公理：① <strong>0 ≤ P(B|A) ≤ 1</strong>；② <strong>P(Ω|A) = 1</strong>（必然事件的条件概率仍是 1）；③ 若 B1、B2 互斥，则 <strong>P(B1∪B2|A) = P(B1|A) + P(B2|A)</strong>。' },
        { type: 'list', items: ['非负性：对任意事件 B，都有 0 ≤ P(B|A) ≤ 1', '规范性：P(Ω|A)=1，即在 A 发生前提下整个缩减空间必然出现', '可加性：当 B1、B2 互斥时，P(B1∪B2|A)=P(B1|A)+P(B2|A)'] },
        { type: 'paragraph', text: '这三条性质说明，固定 A 之后，把 P(·|A) 整体看作一个「以 A 为样本空间」的概率测度是完全合理的，许多无条件概率的运算规律在条件概率下同样成立。' },
        { type: 'heading', text: '三、乘法公式' },
        { type: 'keypoint', label: '重点·乘法公式', text: '把条件概率公式两边同乘 P(A)，即可得到<strong>乘法公式</strong>：<strong>P(AB) = P(A)·P(B|A)</strong>。对称地也有 <strong>P(AB) = P(B)·P(A|B)</strong>。它用于求两个事件「接连发生、且彼此有关联」的联合概率。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="28" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">乘法公式树状图（不放回抽两次）</text><g font-size="14" fill="#33536e"><text x="40" y="80">第一次</text><text x="250" y="80">第二次</text></g><line x1="110" y1="120" x2="250" y2="90" stroke="#4a7de0" stroke-width="2"/><text x="145" y="100" font-size="14" fill="#2b5b9e">红 3/5</text><line x1="250" y1="90" x2="430" y2="70" stroke="#4a7de0" stroke-width="2"/><text x="300" y="78" font-size="14" fill="#2b5b9e">红 2/4</text><line x1="250" y1="90" x2="430" y2="110" stroke="#4a7de0" stroke-width="2"/><text x="300" y="118" font-size="14" fill="#2b5b9e">白 2/4</text><line x1="110" y1="200" x2="250" y2="170" stroke="#e05d44" stroke-width="2"/><text x="145" y="195" font-size="14" fill="#c0392b">白 2/5</text><line x1="250" y1="170" x2="430" y2="150" stroke="#e05d44" stroke-width="2"/><text x="300" y="158" font-size="14" fill="#c0392b">红 3/4</text><line x1="250" y1="170" x2="430" y2="190" stroke="#e05d44" stroke-width="2"/><text x="300" y="198" font-size="14" fill="#c0392b">白 1/4</text><g font-size="13" fill="#5a7a2a"><text x="470" y="74">P(红红)=3/5×2/4</text><text x="470" y="194">P(白红)=2/5×3/4</text></g><text x="340" y="285" font-size="14" fill="#33536e" text-anchor="middle">乘法公式：P(AB)=P(A)·P(B|A)，沿树枝相乘得到联合概率</text></svg>', caption: '图2　乘法公式对应概率树：每条路径上概率相乘，即得联合概率。' },
        { type: 'example', label: '例题', text: '袋中有 3 红 2 白共 5 个球，不放回地抽取两次。已知第一次抽到红球，求第二次也抽到红球的概率。<br><br><strong>解</strong>：设 A=第一次红，B=第二次红。由已知 P(A) ＞ 0，可用条件概率：<br>P(B|A) = P(AB) / P(A)。<br>也可直接在<strong>缩减样本空间</strong>中看：第一次已抽走 1 红，剩下 2 红 2 白共 4 球，其中红球 2 个，故<br>P(B|A) = 2/4 = 1/2。<br>答：第二次也抽到红球的概率为 1/2。' },
        { type: 'warn', label: '易错', text: '务必分清 <strong>P(B|A)</strong> 与 <strong>P(AB)</strong>：P(AB) 是 A、B 同时发生的概率（在原样本空间 Ω 中）；P(B|A) 是「A 已经发生后」B 再发生的概率（在缩减空间 A 中）。一般地 <strong>P(B|A) ≥ P(AB)</strong>（当 P(A) ＜ 1 时严格大于），二者含义与数值都不同，不能混用。' },
        { type: 'tip', label: '提示', text: '计算条件概率有两种常用思路：<strong>公式法</strong> P(B|A)=P(AB)/P(A)，适用于已知联合概率与边缘概率；<strong>缩减空间法</strong>，直接把样本空间限定为 A 后再数有利结果，适用于古典概型与摸球、抽签等问题，往往更直观。' },
        { type: 'heading', text: '四、条件概率与无条件概率对比' },
        { type: 'table', headers: ['概念', '符号', '含义', '所在空间'], rows: [['无条件概率', 'P(B)', '事件 B 自身发生的概率', '整个样本空间 Ω'], ['联合概率', 'P(AB)', 'A、B 同时发生的概率', '整个样本空间 Ω'], ['条件概率', 'P(B|A)', 'A 发生后 B 再发生的概率', '缩减空间 A']] },
        { type: 'paragraph', text: '三者容易混淆，记忆口诀：「P(AB) 是一起发生，P(B|A) 是你先发生后我再发生」。知道 A 已经发生，相当于提前把舞台缩小，所以 P(B|A) 通常比 P(B) 更能反映真实的关联。' },
        { type: 'keypoint', label: '重点·与独立的桥梁', text: '若 <strong>P(B|A) = P(B)</strong>，说明 A 的发生与否不影响 B 的概率，这正是「事件独立」的等价刻画。因此，条件概率成为连接「条件概率」与「独立性」两座桥梁的关键概念。' },
        { type: 'list', items: ['P(B|A) 表示在 A 发生条件下 B 的概率，公式 P(B|A)=P(AB)/P(A)', '条件概率同样满足非负、规范、可加三条公理', '乘法公式：P(AB)=P(A)P(B|A)=P(B)P(A|B)', 'P(B|A) 是在缩减样本空间 A 中计算，与 P(AB) 不同'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="30" y="34" font-size="16" fill="#2b5b9e" font-weight="bold">原始样本空间（5 球：3 红 2 白）</text><circle cx="70" cy="80" r="18" fill="#e05d44"/><circle cx="120" cy="80" r="18" fill="#e05d44"/><circle cx="170" cy="80" r="18" fill="#e05d44"/><circle cx="220" cy="80" r="18" fill="#fff" stroke="#c0392b" stroke-width="2"/><circle cx="270" cy="80" r="18" fill="#fff" stroke="#c0392b" stroke-width="2"/><text x="30" y="132" font-size="16" fill="#2b5b9e" font-weight="bold">已知第一次抽到红 → 缩减样本空间（剩 4 球）</text><circle cx="70" cy="172" r="18" fill="#e05d44"/><circle cx="120" cy="172" r="18" fill="#e05d44"/><circle cx="170" cy="172" r="18" fill="#fff" stroke="#c0392b" stroke-width="2"/><circle cx="220" cy="172" r="18" fill="#fff" stroke="#c0392b" stroke-width="2"/><g font-size="14" fill="#33536e"><text x="320" y="170">缩减后 4 球中仍有 2 红</text><text x="320" y="196">P(第二次红 | 第一次红)=2/4=1/2</text></g></svg>', caption: '图3　缩减样本空间示意：已知第一次抽到红，舞台由 5 球缩为 4 球。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['定义：P(B|A)=P(AB)/P(A)（要求 P(A) ＞ 0）', '性质：0 ≤ P(B|A) ≤ 1、P(Ω|A)=1、互斥可加', '乘法公式：P(AB)=P(A)P(B|A)=P(B)P(A|B)', '易错：P(B|A) 与 P(AB) 含义和数值都不同', '计算：公式法或缩减样本空间法'] }
      ],
      exercises: [
        { type: 'choice', question: '在事件 A 发生的条件下事件 B 发生的概率，其计算公式是？', options: ['P(B|A)=P(AB)/P(A) (P(A)>0)', 'P(B|A)=P(A)/P(AB)', 'P(B|A)=P(AB)·P(A)', 'P(B|A)=P(A)+P(B)-P(AB)'], answer: 'P(B|A)=P(AB)/P(A) (P(A)>0)', explanation: '条件概率 P(B|A) 表示在 A 发生的前提下 B 发生的概率，其定义为联合概率 P(AB) 除以前提事件概率 P(A)，即 P(B|A)=P(AB)/P(A)，且要求 P(A) ＞ 0。其余选项要么分子分母颠倒，要么把乘法错写成加、减法，都不符合定义。' },
        { type: 'choice', question: '袋中有 3 红 2 白共 5 球，不放回抽两次，已知第一次抽到红球，则第二次也抽到红球的概率是？', options: ['1/2', '2/5', '3/5', '3/10'], answer: '1/2', explanation: '第一次抽到红球后，袋中剩余 2 红 2 白共 4 个球，缩减样本空间中有 2 个红球，所以第二次抽到红球的概率为 2/4=1/2。选项 2/5、3/5 是原样本空间下的概率，3/10 是两次都红的无条件概率，均不符合题意。' },
        { type: 'choice', question: '乘法公式 P(AB) 的等价形式是？', options: ['P(AB)=P(A)+P(B)', 'P(AB)=P(A)·P(B|A)', 'P(AB)=P(A)-P(B)', 'P(AB)=P(B|A)/P(A)'], answer: 'P(AB)=P(A)·P(B|A)', explanation: '乘法公式由条件概率变形得到：P(B|A)=P(AB)/P(A) 两边同乘 P(A) 得 P(AB)=P(A)P(B|A)，对称地也有 P(AB)=P(B)P(A|B)。其余选项把乘法错写成了加、减或除法，都是错误的。' },
        { type: 'fill', question: '已知 P(A)=0.5，P(AB)=0.2，则 P(B|A)=____。', answer: '0.4', explanation: '由条件概率公式 P(B|A)=P(AB)/P(A)，代入 P(AB)=0.2、P(A)=0.5，得 P(B|A)=0.2/0.5=0.4。注意 P(B|A) 是在 A 发生前提下计算，与无条件概率 P(B) 不同，不能遗漏除以 P(A) 这一步。' },
        { type: 'fill', question: '袋中有 4 红 1 白共 5 球，不放回抽两次，已知第一次抽到红球，则第二次抽到白球的概率为____。', answer: '1/4', explanation: '第一次抽到红球后，缩减样本空间为剩余 3 红 1 白共 4 个球，其中白球 1 个，故第二次抽到白球的概率为 1/4。这正体现了条件概率「在缩减空间中计数」的思想，与无条件抽白球的概率 1/5 不同。' }
      ]
    },

    /* ---------------- 第2课时 事件独立性 + 全概率公式（含贝叶斯） ---------------- */
    {
      id: 'zt6-u3-l2',
      name: '事件独立性与全概率公式（含贝叶斯）',
      chapter: '概率统计复习 · 六、事件独立性与全概率公式（含贝叶斯）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、事件相互独立' },
        { type: 'paragraph', text: '当两个事件互不影响时，一个事件的发生不会改变另一个事件发生的可能性，这种关系称为「相互独立」。独立性是概率论中极重要的概念，也是后续二项分布、独立重复试验的基石。' },
        { type: 'keypoint', label: '重点·定义', text: '若事件 A 与 B 满足 <strong>P(AB) = P(A)·P(B)</strong>，则称 A 与 B <strong>相互独立</strong>。通俗地说，知道 A 是否发生，不会改变 B 发生的概率，即 <strong>P(B|A) = P(B)</strong>（当 P(A) ＞ 0 时）。' },
        { type: 'keypoint', label: '重点·性质', text: '相互独立具有「传播性」与「对偶性」：① 若 A、B 独立，则 <strong>A 与 B̄、Ā 与 B、Ā 与 B̄ 也都独立</strong>；② <strong>必然事件 Ω、不可能事件 ∅ 与任何事件都独立</strong>。特别注意：独立事件的补集关系依然成立。' },
        { type: 'list', items: ['若 A、B 独立，则 A 与 B̄ 也独立', '若 A、B 独立，则 Ā 与 B、Ā 与 B̄ 也独立', 'Ω 与任何事件独立，∅ 与任何事件独立', '独立关系的判定常用 P(AB)=P(A)P(B) 验证'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">独立事件 Venn 图：独立不一定互斥</text><ellipse cx="270" cy="140" rx="110" ry="80" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><ellipse cx="410" cy="140" rx="110" ry="80" fill="#f6d3ca" stroke="#e05d44" stroke-width="2.5"/><text x="230" y="100" font-size="18" fill="#2b5b9e" font-weight="bold">A</text><text x="450" y="100" font-size="18" fill="#c0392b" font-weight="bold">B</text><ellipse cx="340" cy="140" rx="55" ry="45" fill="#b48fd0" stroke="#7a5aa0" stroke-width="2"/><text x="340" y="146" font-size="14" fill="#2b5b9e" font-weight="bold" text-anchor="middle">AB</text><g font-size="14" fill="#33536e"><text x="40" y="232">两事件有重叠（AB≠∅），所以它们不互斥</text><text x="40" y="252">但 P(AB)=P(A)P(B) 时它们相互独立</text></g></svg>', caption: '图1　独立事件 Venn 图：有重叠说明不互斥，P(AB)=P(A)P(B) 时独立。' },
        { type: 'heading', text: '二、互斥与独立的辨析' },
        { type: 'keypoint', label: '重点·核心辨析', text: '<strong>互斥是集合关系，独立是概率关系</strong>，二者不可混淆。互斥指 A∩B=∅（不能同时发生）；独立指 P(AB)=P(A)·P(B)（互不影响）。一个讲的是「能否同时发生」，一个讲的是「是否互相影响」。' },
        { type: 'table', headers: ['维度', '互斥', '独立'], rows: [['本质', '集合关系 A∩B=∅', '概率关系 P(AB)=P(A)P(B)'], ['含义', '两事件不能同时发生', '一事件发生不影响另一事件概率'], ['重叠', '无重叠（AB=∅）', '一般可有重叠（AB≠∅）'], ['联系', 'P(A)>0 且 P(B)>0 且互斥则一定不独立', '独立事件一般并不互斥']] },
        { type: 'warn', label: '易错', text: '若 <strong>P(A) ＞ 0 且 P(B) ＞ 0</strong>，并且 A、B 互斥，则 P(AB)=0，而 P(A)P(B) ＞ 0，于是 <strong>P(AB) ≠ P(A)P(B)</strong>，即 A、B 一定<strong>不独立</strong>。所以「互斥」与「独立」在非零概率下几乎是对立的，绝不能因为「互不影响」就误以为「互不干扰等于互斥」。' },
        { type: 'paragraph', text: '反过来，若 A、B 独立且均非零概率，则 P(AB)=P(A)P(B) ＞ 0，说明它们可以同时发生，因而一定不互斥。只有其中一方概率为 0 时，互斥与独立才可能同时成立。' },
        { type: 'heading', text: '三、全概率公式（★2026 新高考新增重点）' },
        { type: 'keypoint', label: '重点·公式', text: '设 B1、B2、…、Bn 是样本空间 Ω 的一个<strong>划分</strong>（即两两互斥且并集为 Ω，且 P(Bi) ＞ 0），则对任意事件 A，有 <strong>P(A) = Σ P(Bi)·P(A|Bi)</strong>。它把复杂事件 A 的概率，按「原因」Bi 拆成若干易算的部分再求和。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">全概率公式：Ω 划分为 B1…Bn</text><rect x="60" y="70" width="120" height="120" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><rect x="180" y="70" width="120" height="120" fill="#d6e8c8" stroke="#5a7a2a" stroke-width="2"/><rect x="300" y="70" width="120" height="120" fill="#f6d3ca" stroke="#e05d44" stroke-width="2"/><rect x="420" y="70" width="120" height="120" fill="#e4d7f0" stroke="#7a5aa0" stroke-width="2"/><text x="120" y="135" font-size="20" fill="#2b5b9e" font-weight="bold" text-anchor="middle">B1</text><text x="240" y="135" font-size="20" fill="#5a7a2a" font-weight="bold" text-anchor="middle">B2</text><text x="360" y="135" font-size="20" fill="#c0392b" font-weight="bold" text-anchor="middle">B3</text><text x="480" y="135" font-size="20" fill="#7a5aa0" font-weight="bold" text-anchor="middle">…Bn</text><line x1="120" y1="190" x2="340" y2="240" stroke="#33536e" stroke-width="2"/><line x1="240" y1="190" x2="340" y2="240" stroke="#33536e" stroke-width="2"/><line x1="360" y1="190" x2="340" y2="240" stroke="#33536e" stroke-width="2"/><line x1="480" y1="190" x2="340" y2="240" stroke="#33536e" stroke-width="2"/><ellipse cx="340" cy="245" rx="40" ry="22" fill="#fff" stroke="#2b5b9e" stroke-width="2.5"/><text x="340" y="251" font-size="16" fill="#2b5b9e" font-weight="bold" text-anchor="middle">A</text><text x="340" y="270" font-size="14" fill="#33536e" text-anchor="middle">P(A)=Σ P(Bi)·P(A|Bi)</text></svg>', caption: '图2　全概率划分图：各「原因」Bi 汇集到「结果」A，加权求和得 P(A)。' },
        { type: 'list', items: ['① 定「原因」Bi：找到对样本空间的最根本分类（划分）', '② 定「结果」A：明确要求概率的事件', '③ 求先验 P(Bi) 与条件概率 P(A|Bi)', '④ 套公式：P(A)=Σ P(Bi)·P(A|Bi) 求和'] },
        { type: 'example', label: '例题1', text: '某工厂有甲、乙两条生产线，甲线产量占 60%，次品率为 2%；乙线产量占 40%，次品率为 5%。从总产品中任取一件，求它是次品的概率。<br><br><strong>解</strong>：设 B1=来自甲线，B2=来自乙线，A=抽到次品。<br>由划分：P(B1)=0.6，P(B2)=0.4；条件概率 P(A|B1)=0.02，P(A|B2)=0.05。<br>由全概率公式：<br>P(A)=P(B1)P(A|B1)+P(B2)P(A|B2)<br>=0.6×0.02+0.4×0.05=0.012+0.020=0.032。<br>答：任取一件为次品的概率是 0.032。' },
        { type: 'heading', text: '四、贝叶斯公式（由果溯因）' },
        { type: 'keypoint', label: '重点·公式', text: '贝叶斯公式用于「已知结果 A 发生了，反推是原因 Bi 导致」的概率：<strong>P(Bi|A) = P(Bi)·P(A|Bi) / Σ P(Bj)·P(A|Bj)</strong>。分母正是全概率 P(A)，所以也可写成 P(Bi|A)=P(Bi)P(A|Bi)/P(A)。它把「先验」更新为「后验」。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">贝叶斯公式：由果（A）溯因（Bi）</text><rect x="60" y="90" width="120" height="60" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><rect x="60" y="170" width="120" height="60" fill="#d6e8c8" stroke="#5a7a2a" stroke-width="2"/><text x="120" y="126" font-size="16" fill="#2b5b9e" font-weight="bold" text-anchor="middle">原因 B1</text><text x="120" y="206" font-size="16" fill="#5a7a2a" font-weight="bold" text-anchor="middle">原因 B2</text><line x1="180" y1="120" x2="320" y2="140" stroke="#e05d44" stroke-width="2.5"/><line x1="180" y1="200" x2="320" y2="160" stroke="#e05d44" stroke-width="2.5"/><text x="195" y="135" font-size="13" fill="#c0392b">P(A|B1)</text><text x="195" y="195" font-size="13" fill="#c0392b">P(A|B2)</text><ellipse cx="380" cy="150" rx="55" ry="35" fill="#f6d3ca" stroke="#e05d44" stroke-width="2.5"/><text x="380" y="156" font-size="16" fill="#c0392b" font-weight="bold" text-anchor="middle">结果 A</text><line x1="435" y1="150" x2="560" y2="150" stroke="#7a5aa0" stroke-width="2.5"/><text x="448" y="140" font-size="13" fill="#7a5aa0">反推 P(B1|A)</text><rect x="560" y="120" width="100" height="60" fill="#e4d7f0" stroke="#7a5aa0" stroke-width="2"/><text x="610" y="156" font-size="15" fill="#7a5aa0" font-weight="bold" text-anchor="middle">后验</text><text x="340" y="262" font-size="14" fill="#33536e" text-anchor="middle">先由 Bi 正向算到 A，再由 A 反向溯回原因 Bi</text></svg>', caption: '图3　贝叶斯流程图：先正向由原因算结果，再反向由结果溯原因。' },
        { type: 'example', label: '例题2', text: '甲、乙两厂产品分别占 60%、40%，次品率分别为 1%、2%。随机抽取一件发现是次品，求它来自甲厂的概率。<br><br><strong>解</strong>：设 B1=甲厂，B2=乙厂，A=次品。则 P(B1)=0.6，P(B2)=0.4，P(A|B1)=0.01，P(A|B2)=0.02。<br>先算分母（全概率）：<br>P(A)=0.6×0.01+0.4×0.02=0.006+0.008=0.014。<br>由贝叶斯：<br>P(B1|A)=P(B1)P(A|B1)/P(A)=0.006/0.014=3/7≈0.43。<br>答：该次品来自甲厂的概率约为 0.43（即 3/7）。' },
        { type: 'tip', label: '经典模型', text: '全概率与贝叶斯常见于两类模型：① <strong>产品质检</strong>——各厂占比（先验）乘以各自次品率（条件），求总次品率用全概率，已知次品反推来源厂用贝叶斯；② <strong>疾病诊断</strong>——患病率（先验）乘以检测准确率（条件），求实际患病概率用贝叶斯。抓住「先因后果用全概率，由果溯因用贝叶斯」即可。' },
        { type: 'warn', label: '易错', text: '贝叶斯最易错在<strong>混淆先验与后验</strong>。P(Bi) 是事先已知的「原因概率」（先验），P(Bi|A) 是看到结果 A 后更新的「原因概率」（后验）。分母必须用全概率 P(A)=Σ P(Bj)P(A|Bj) 归一化，不能直接用 P(A|Bi)。另外注意「检测准确率高」不等于「患病概率高」，需结合基础患病率。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['独立：P(AB)=P(A)P(B)；独立与互斥是不同概念', '互斥且均非零概率 ⇒ 一定不独立', '全概率：P(A)=Σ P(Bi)P(A|Bi)，先因后果', '贝叶斯：P(Bi|A)=P(Bi)P(A|Bi)/Σ P(Bj)P(A|Bj)，由果溯因', '经典模型：产品质检、疾病诊断'] }
      ],
      exercises: [
        { type: 'choice', question: '事件 A 与 B 相互独立的充要条件是？', options: ['P(AB)=P(A)·P(B)', 'P(A)+P(B)=1', 'A∩B=∅', 'P(A|B)=P(B)'], answer: 'P(AB)=P(A)·P(B)', explanation: '事件 A 与 B 相互独立的充要条件是 P(AB)=P(A)P(B)。选项 P(A)+P(B)=1 描述的是对立互补关系，A∩B=∅ 描述的是互斥关系，P(A|B)=P(B) 虽等价但前提是 P(B) ＞ 0，不如 P(AB)=P(A)P(B) 作为普适定义准确。' },
        { type: 'choice', question: '若 P(A)>0、P(B)>0 且 A、B 互斥，则 A、B 的关系是？', options: ['一定独立', '一定不独立', '可能独立', '必为对立事件'], answer: '一定不独立', explanation: '若 A、B 互斥，则 A∩B=∅，从而 P(AB)=0。但当 P(A) ＞ 0 且 P(B) ＞ 0 时，P(A)P(B) ＞ 0，于是 P(AB)=0 ≠ P(A)P(B)，不满足独立定义，故 A、B 一定不独立。这说明在非零概率下，互斥与独立不能共存。' },
        { type: 'choice', question: '设 B1、B2 为样本空间 Ω 的一个划分，则对任意事件 A，P(A) 等于？', options: ['P(B1)·P(B2)', 'P(B1)P(A|B1)+P(B2)P(A|B2)', 'P(A|B1)+P(A|B2)', 'P(B1)+P(B2)'], answer: 'P(B1)P(A|B1)+P(B2)P(A|B2)', explanation: '全概率公式要求 B1、B2 构成样本空间的划分（两两互斥且并为 Ω），则任意事件 A 的概率等于各划分块概率与其条件概率乘积之和，即 P(A)=P(B1)P(A|B1)+P(B2)P(A|B2)。其余选项或漏掉条件概率，或把和写成积，均错误。' },
        { type: 'fill', question: '甲线产量占 60% 次品率 2%，乙线占 40% 次品率 5%，任取一件为次品的概率 P(A)=____（写成小数）。', answer: '0.032', explanation: '由全概率公式，任取一件为次品的概率 P(A)=P(B1)P(A|B1)+P(B2)P(A|B2)=0.6×0.02+0.4×0.05=0.012+0.020=0.032。甲线占比大但次品率低，乙线占比小但次品率高，二者加权后总次品率为 3.2%。' },
        { type: 'fill', question: '甲、乙两厂产品占比 60%、40%，次品率分别为 1%、2%；若抽到一件为次品，则它来自甲厂的概率 P(B1|A)=____（写成分数）。', answer: '3/7', explanation: '由贝叶斯公式，P(B1|A)=P(B1)P(A|B1)/[P(B1)P(A|B1)+P(B2)P(A|B2)]=0.6×0.01/(0.6×0.01+0.4×0.02)=0.006/0.014=3/7≈0.43。虽甲厂占比更高，但乙厂次品率也更高，综合后该次品来自甲厂的概率略低于一半。' }
      ]
    }

  );
})();
