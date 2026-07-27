/* ============================================================
 * 高三数学 · 高考复习专题 · 数列专题
 * 第 5 单元：数列求和（2 课时）
 * 数据注入：math.zt3.points（由 data-gz.js 末尾自动注册）
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt3');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 数列求和（公式法、分组求和、倒序相加） ---------------- */
    {
      id: 'zt3-u5-l1',
      name: '数列求和（公式·分组·倒序）',
      chapter: '数列专题复习 · 六 求和（公式·分组·倒序）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、公式法求和' },
        { type: 'paragraph', text: '在数列求和问题中，若通项本身属于等差或等比，或可直接套用常用求和公式，则优先采用公式法。公式法是最基础、最高效的求和方法，要求熟记等差、等比的前 n 项和公式以及平方和、立方和等常用结论。' },
        { type: 'keypoint', label: '重点·等差数列求和', text: '等差数列 {a_n} 的前 n 项和公式为 <strong>S_n = n(a_1+a_n)/2</strong>，也可写成 <strong>S_n = n a_1 + n(n−1)d/2</strong>，其中 a_1 为首项、d 为公差、a_n 为第 n 项。两个式子本质相同，前者用首尾项，后者用首项和公差。' },
        { type: 'keypoint', label: '重点·等比数列求和', text: '等比数列 {a_n} 公比为 q（q≠1）时，前 n 项和 <strong>S_n = a_1(1−q^n)/(1−q)</strong>，也常写成 <strong>S_n = a_1(q^n−1)/(q−1)</strong>。当 q = 1 时，S_n = n a_1，需单独讨论。' },
        { type: 'table', headers: ['公式名称', '求和公式'], rows: [
          ['等差数列 S_n', 'S_n = n(a_1+a_n)/2 = n a_1 + n(n−1)d/2'],
          ['等比数列 S_n（q≠1）', 'S_n = a_1(1−q^n)/(1−q)'],
          ['Σk（一至 n 的和）', 'Σ_{k=1}^{n} k = n(n+1)/2'],
          ['Σk²（平方的和）', 'Σ_{k=1}^{n} k² = n(n+1)(2n+1)/6'],
          ['Σk³（立方的和）', 'Σ_{k=1}^{n} k³ = [n(n+1)/2]²']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">三组常用求和公式卡</text><rect x="40" y="60" width="180" height="190" rx="10" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="130" y="92" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">Σk</text><text x="130" y="130" font-size="16" fill="#33536e" text-anchor="middle">k 从 1 到 n</text><text x="130" y="172" font-size="16" fill="#1a3a5c" text-anchor="middle">= n(n+1)/2</text><rect x="250" y="60" width="180" height="190" rx="10" fill="#d8e8d0" stroke="#5a7a2a" stroke-width="2"/><text x="340" y="92" font-size="17" font-weight="bold" fill="#5a7a2a" text-anchor="middle">Σk²</text><text x="340" y="130" font-size="15" fill="#33536e" text-anchor="middle">k² 从 1 到 n</text><text x="340" y="172" font-size="15" fill="#1a3a5c" text-anchor="middle">= n(n+1)(2n+1)/6</text><rect x="460" y="60" width="180" height="190" rx="10" fill="#e6dcf0" stroke="#7a5aa0" stroke-width="2"/><text x="550" y="92" font-size="17" font-weight="bold" fill="#7a5aa0" text-anchor="middle">Σk³</text><text x="550" y="130" font-size="15" fill="#33536e" text-anchor="middle">k³ 从 1 到 n</text><text x="550" y="172" font-size="14" fill="#1a3a5c" text-anchor="middle">= [n(n+1)/2]²</text><text x="340" y="285" font-size="14" fill="#33536e" text-anchor="middle">牢记三公式，等差等比求和可直接套用</text></svg>', caption: '图1　三组常用求和公式卡：Σk、Σk²、Σk³，熟记后可快速套用。' },
        { type: 'paragraph', text: '使用公式法时，先判断数列类型：能直接认出等差或等比的，套对应求和公式；遇到连续正整数、平方数、立方数的求和，可直接套用上方三公式，避免逐项相加出错。' },
        { type: 'example', label: '例题1', text: '求 Σ_{k=1}^{n} k 的值。<br><br><strong>解</strong>：Σ_{k=1}^{n} k 表示 1 + 2 + 3 + … + n，这是首项为 1、公差为 1 的等差数列求和，项数共 n 项，末项为 n。<br>由公式 S_n = n(a_1+a_n)/2，得 <strong>Σ_{k=1}^{n} k = n(1+n)/2 = n(n+1)/2</strong>。<br>也可由常用求和公式直接得到同样结果。该结论在后续分组求和与裂项相消中频繁使用。' },
        { type: 'heading', text: '二、分组求和' },
        { type: 'paragraph', text: '当数列的通项由两个或多个可求和的数列组合而成（相加或相减）时，整体往往不能直接套用单一公式。此时可把原数列按通项结构拆成若干组，每组分别求和后再合并，这种方法称为分组求和。' },
        { type: 'keypoint', label: '重点·适用情形', text: '若通项能写成 <strong>a_n = b_n ± c_n ± …</strong> 的形式，且 {b_n}、{c_n} 等各自是等差、等比或可公式求和的数列，则前 n 项和 <strong>S_n = Σb_n ± Σc_n ± …</strong>。先分后合是分组求和的核心思路。' },
        { type: 'example', label: '例题2', text: '已知数列 {a_n} 的通项 a_n = 2n + 3^n，求前 n 项和 S_n。<br><br><strong>解</strong>：通项由两部分组成，前一部分 2n 构成等差数列，后一部分 3^n 构成等比数列（首项 3，公比 3）。<br>分组求和：<br>Σ 2k = 2·Σk = 2·n(n+1)/2 = n(n+1)；<br>Σ 3^k（k=1 到 n）= 3(3^n−1)/(3−1) = 3(3^n−1)/2；<br>故 <strong>S_n = n(n+1) + 3(3^n−1)/2</strong>。' },
        { type: 'list', items: [
          '观察通项结构，识别其中可分别求和的子数列',
          '对每组分别使用等差、等比或常用求和公式求出部分和',
          '将各部分和按原符号合并，化简得到 S_n'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">分组求和：先分后合</text><text x="120" y="80" font-size="16" fill="#33536e" text-anchor="middle">通项 a_n</text><text x="120" y="112" font-size="18" fill="#1a3a5c" text-anchor="middle">= b_n + c_n</text><rect x="40" y="140" width="150" height="100" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="115" y="176" font-size="16" fill="#2b5b9e" text-anchor="middle">第一组 {b_n}</text><text x="115" y="206" font-size="15" fill="#33536e" text-anchor="middle">等差，可求和</text><rect x="265" y="140" width="150" height="100" rx="8" fill="#d8e8d0" stroke="#5a7a2a" stroke-width="2"/><text x="340" y="176" font-size="16" fill="#5a7a2a" text-anchor="middle">第二组 {c_n}</text><text x="340" y="206" font-size="15" fill="#33536e" text-anchor="middle">等比，可求和</text><text x="500" y="186" font-size="20" fill="#c0392b" text-anchor="middle">⇒ S_n</text><text x="500" y="214" font-size="15" fill="#33536e" text-anchor="middle">两组和相加</text><line x1="190" y1="190" x2="255" y2="190" stroke="#33536e" stroke-width="2"/><line x1="415" y1="190" x2="460" y2="190" stroke="#33536e" stroke-width="2"/><text x="340" y="270" font-size="14" fill="#33536e" text-anchor="middle">把不可直接求和的 a_n 拆成可分别求和的两组，再合并</text></svg>', caption: '图2　分组求和：将 a_n 拆成 {b_n} 与 {c_n} 两组分别求和，再合并。' },
        { type: 'tip', label: '提示', text: '分组求和的关键是<strong>正确拆分通项</strong>。拆分后要确认每一组确实是可求和的数列，若某组仍无法直接求和，则应考虑其他方法（如裂项相消）。合并时不要漏掉系数与正负号。' },
        { type: 'heading', text: '三、倒序相加' },
        { type: 'paragraph', text: '倒序相加法适用于这样一类数列：距首末两端等距离的两项之和相等（即 a_1+a_n = a_2+a_{n−1} = …）。将 S_n 正着写一遍、再倒着写一遍，两式对应项相加，每一项的和都相同，从而整体求出 S_n。等差数列求和公式正是用此法推导的。' },
        { type: 'keypoint', label: '重点·方法步骤', text: '设 S_n = a_1 + a_2 + … + a_n，将其倒序写为 S_n = a_n + a_{n−1} + … + a_1，两式相加得 <strong>2S_n = n(a_1+a_n)</strong>，故 <strong>S_n = n(a_1+a_n)/2</strong>。核心在于<strong>正序与倒序的对应项和相等</strong>。' },
        { type: 'example', label: '例题3', text: '用倒序相加法推导等差数列 {a_n} 的前 n 项和公式。<br><br><strong>解</strong>：设 S_n = a_1 + a_2 + … + a_n。<br>倒序写为 S_n = a_n + a_{n−1} + … + a_1。<br>两式相加，左侧为 2S_n，右侧共有 n 组，每组均为 a_1 + a_n（因等差中距首尾等距两项和相等），故 2S_n = n(a_1+a_n)，<br>即 <strong>S_n = n(a_1+a_n)/2</strong>。' },
        { type: 'warn', label: '易错', text: '使用倒序相加前，必须先验证<strong>对应项和相等</strong>这一条件。并非所有数列都满足，只有像等差数列这样首尾对称项和恒定者才适用。若盲目套用，会把不相等的项当成相等相加，导致结果错误。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">倒序相加法</text><text x="105" y="82" font-size="15" fill="#33536e" text-anchor="middle">S_n</text><text x="105" y="108" font-size="15" fill="#1a3a5c" text-anchor="middle">= a_1 + a_2 + … + a_n</text><text x="425" y="82" font-size="15" fill="#33536e" text-anchor="middle">S_n</text><text x="425" y="108" font-size="15" fill="#1a3a5c" text-anchor="middle">= a_n + … + a_2 + a_1</text><text x="265" y="152" font-size="16" fill="#2b5b9e" text-anchor="middle">两式相加</text><text x="265" y="182" font-size="15" fill="#1a3a5c" text-anchor="middle">2S_n = n(a_1 + a_n)</text><text x="265" y="210" font-size="16" fill="#c0392b" text-anchor="middle">对应项和均相等</text><line x1="40" y1="125" x2="185" y2="125" stroke="#4a7de0" stroke-width="2"/><line x1="360" y1="125" x2="505" y2="125" stroke="#4a7de0" stroke-width="2"/><text x="340" y="265" font-size="14" fill="#33536e" text-anchor="middle">首尾等距的两项和相等时，正序与倒序相加可整体求出 S_n</text></svg>', caption: '图3　倒序相加：正序 S_n 与倒序 S_n 对应项和相等，两式相加求 S_n。' },
        { type: 'list', items: [
          '公式法：等差、等比数列及 Σk、Σk²、Σk³ 直接套公式',
          '分组求和：通项为多个可求和数列的加减，先分后合',
          '倒序相加：首尾等距项和相等时，正序倒序相加求 S_n'
        ] },
        { type: 'tip', label: '小结', text: '三种方法各有适用场景：<strong>公式法最快捷</strong>，适合标准等差等比；<strong>分组求和</strong>处理复合通项；<strong>倒序相加</strong>适合对称结构和推导公式。解题时先看通项结构，再选方法，能显著提升效率。' }
      ],
      exercises: [
        { type: 'choice', question: '等比数列 {a_n} 公比为 q（q≠1），其前 n 项和 S_n 的公式是？', options: ['S_n = a_1(1−q^n)/(1−q)', 'S_n = a_1(1−q^n)/(1+q)', 'S_n = a_1(q^n−1)/(1+q)', 'S_n = a_1 q^n/(1−q)'], answer: 'S_n = a_1(1−q^n)/(1−q)', explanation: '等比数列前 n 项和公式（q≠1）为 S_n = a_1(1−q^n)/(1−q)，也可等价写成 a_1(q^n−1)/(q−1)。第二、三项分母写成 1+q 是错误变形；第四项漏掉了减 1，也不正确。掌握该公式时务必注意分母是 1−q 而非 1+q，且分子含有 1−q^n 这一整体。' },
        { type: 'choice', question: 'Σ_{k=1}^{n} k（即 1+2+…+n）的结果是？', options: ['n(n+1)/2', 'n(n−1)/2', 'n(n+1)', 'n²'], answer: 'n(n+1)/2', explanation: '连续正整数求和公式 Σ_{k=1}^{n} k = n(n+1)/2，可视为首项 1、末项 n、项数 n 的等差数列求和 S_n = n(1+n)/2。选项 n(n−1)/2 是求到 n−1 的情形，n(n+1) 多乘了 2，n² 则完全不对。该公式在分组求和与裂项中也经常作为基本工具使用。' },
        { type: 'choice', question: '数列通项 a_n = 2n + 3^n，求前 n 项和 S_n 宜采用的方法是？', options: ['公式法', '分组求和', '倒序相加', '裂项相消'], answer: '分组求和', explanation: '通项 a_n = 2n + 3^n 由等差数列部分 2n 与等比数列部分 3^n 相加而成，整体不能直接套用单一求和公式。应把数列拆成两组分别求和再合并，这正是分组求和法的典型适用情形。公式法只能处理单一等差或等比，倒序相加要求对称和相等，裂项相消用于可拆成差的形式。' },
        { type: 'fill', question: '等差数列 {a_n} 前 n 项和 S_n = n(a_1+a_n)/2，将 a_n = a_1 + (n−1)d 代入，可得 S_n = ____。', answer: 'n a_1 + n(n−1)d/2|n a_1 + n(n-1)d/2', explanation: '把 a_n = a_1 + (n−1)d 代入 S_n = n(a_1+a_n)/2，得 S_n = n[a_1 + a_1 + (n−1)d]/2 = n[2a_1 + (n−1)d]/2 = n a_1 + n(n−1)d/2。这是等差数列求和的第二种形式，用首项和公差直接表达，解题时与首末项形式等价，可根据题目已知条件灵活选用。' },
        { type: 'fill', question: 'Σ_{k=1}^{n} k²（即 1²+2²+…+n²）的求和公式为 Σk² = ____。', answer: 'n(n+1)(2n+1)/6', explanation: '正整数平方和的常用求和公式为 Σ_{k=1}^{n} k² = n(n+1)(2n+1)/6。该公式与 Σk = n(n+1)/2、Σk³ = [n(n+1)/2]² 并称为三大求和公式，建议牢固记忆。实际应用时直接代入 n 即可求出结果，无需逐项平方再相加。' }
      ]
    },

    /* ---------------- 第2课时 裂项相消法 ---------------- */
    {
      id: 'zt3-u5-l2',
      name: '数列求和（裂项相消）',
      chapter: '数列专题复习 · 六 求和（裂项相消）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、裂项相消的思想' },
        { type: 'paragraph', text: '裂项相消法用于处理通项本身难以直接求和、但能拆成两项之差的数列。将每一项裂成前后两项之差后，相邻项的正负部分会相互抵消，最终只剩首尾少数几项，从而轻松求得前 n 项和。它是高考中考查频率极高的求和技巧。' },
        { type: 'keypoint', label: '重点·核心思想', text: '裂项相消的关键是<strong>把通项 a_n 写成两项之差</strong> a_n = f(n) − f(n+1)（或 f(n−1) − f(n)）。求和时中间项成对抵消，只剩首末项：<strong>S_n = f(1) − f(n+1)</strong>。抵消是否彻底，取决于裂项形式是否正确。' },
        { type: 'table', headers: ['常见类型', '裂项公式'], rows: [
          ['1/[n(n+1)]', '1/n − 1/(n+1)'],
          ['1/[n(n+k)]', '1/k·(1/n − 1/(n+k))'],
          ['1/(4n²−1)', '1/2·(1/(2n−1) − 1/(2n+1))'],
          ['1/(√(n+1)+√n)', '√(n+1) − √n'],
          ['n·n!', '(n+1)! − n!']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">裂项相消：中间项抵消</text><text x="340" y="74" font-size="15" fill="#1a3a5c" text-anchor="middle">S_n = (1/1 − 1/2) + (1/2 − 1/3) + (1/3 − 1/4) + … + (1/n − 1/(n+1))</text><text x="90" y="128" font-size="16" fill="#2b5b9e" text-anchor="middle">+1/1</text><text x="220" y="128" font-size="16" fill="#e05d44" text-anchor="middle">−1/2 +1/2</text><text x="350" y="128" font-size="16" fill="#e05d44" text-anchor="middle">−1/3 +1/3</text><text x="470" y="128" font-size="16" fill="#e05d44" text-anchor="middle">… 抵消 …</text><text x="590" y="128" font-size="16" fill="#c0392b" text-anchor="middle">−1/(n+1)</text><rect x="40" y="155" width="600" height="58" rx="8" fill="#d8e8d0" stroke="#5a7a2a" stroke-width="2"/><text x="340" y="191" font-size="16" fill="#1a3a5c" text-anchor="middle">中间成对抵消，仅剩首项 1 与末项 −1/(n+1)</text><text x="340" y="258" font-size="15" fill="#33536e" text-anchor="middle">结果 S_n = 1 − 1/(n+1)</text></svg>', caption: '图1　裂项相消：中间项成对抵消，仅剩首项与末项。' },
        { type: 'paragraph', text: '掌握上表几种典型裂项后，遇到结构相似的通项时，先观察分母因式差或根式结构，再对照选用对应的裂项形式。裂项是否正确，可用通分还原来检验。' },
        { type: 'example', label: '例题1', text: '求 S_n = Σ_{k=1}^{n} 1/[k(k+1)]。<br><br><strong>解</strong>：由 1/[k(k+1)] = 1/k − 1/(k+1)，得<br>S_n = (1/1 − 1/2) + (1/2 − 1/3) + … + (1/n − 1/(n+1))。<br>中间项 −1/2 与 +1/2、−1/3 与 +1/3 等依次抵消，仅剩首项 1 与末项 −1/(n+1)，<br>故 <strong>S_n = 1 − 1/(n+1)</strong>。' },
        { type: 'heading', text: '二、典型裂项类型' },
        { type: 'keypoint', label: '重点·一般分式裂项', text: '对于 1/[n(n+k)]（k 为常数），裂项为 <strong>1/k·(1/n − 1/(n+k))</strong>。当 k = 1 时即回到 1/[n(n+1)]。本质是把分母两个相差 k 的因式拆开，相差多少就除以多少，保证通分后分子为 1。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">典型裂项：1/[n(n+1)]</text><rect x="60" y="70" width="240" height="90" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="180" y="110" font-size="18" fill="#1a3a5c" text-anchor="middle">1/[n(n+1)]</text><text x="180" y="140" font-size="14" fill="#33536e" text-anchor="middle">原通项</text><text x="345" y="120" font-size="22" fill="#c0392b" text-anchor="middle">⇒</text><rect x="380" y="70" width="240" height="90" rx="8" fill="#e6dcf0" stroke="#7a5aa0" stroke-width="2"/><text x="500" y="108" font-size="17" fill="#1a3a5c" text-anchor="middle">1/n − 1/(n+1)</text><text x="500" y="138" font-size="14" fill="#33536e" text-anchor="middle">两项之差</text><text x="340" y="205" font-size="15" fill="#33536e" text-anchor="middle">验证：1/n − 1/(n+1) = (n+1−n)/[n(n+1)] = 1/[n(n+1)]</text><text x="340" y="240" font-size="14" fill="#33536e" text-anchor="middle">相邻两项分母差 1，裂开后前后可衔接抵消</text></svg>', caption: '图2　典型裂项 1/[n(n+1)] = 1/n − 1/(n+1)，相邻分母差 1。' },
        { type: 'example', label: '例题2', text: '求 S_n = Σ_{k=1}^{n} 1/(4k²−1)。<br><br><strong>解</strong>：先化简分母 4k²−1 = (2k−1)(2k+1)，则 1/[(2k−1)(2k+1)] = 1/2·(1/(2k−1) − 1/(2k+1))。<br>故 S_n = 1/2·[(1/1 − 1/3) + (1/3 − 1/5) + … + (1/(2n−1) − 1/(2n+1))]。<br>中间全部抵消，只剩 1/1 与 −1/(2n+1)，<br>所以 <strong>S_n = 1/2·(1 − 1/(2n+1)) = n/(2n+1)</strong>。' },
        { type: 'list', items: [
          '观察通项分母结构，判断属于哪一类裂项',
          '准确写出裂项形式，并用通分还原验证',
          '展开求和式，确认中间项成对抵消只剩首尾',
          '合并首尾项并化简得到 S_n'
        ] },
        { type: 'keypoint', label: '重点·根式裂项', text: '对于含根式的 1/(√(n+1)+√n)，通过<strong>分母有理化</strong>可得 <strong>√(n+1) − √n</strong>。这类裂项前后根式差为 1，相加时同样能衔接抵消，常用于根式型求和。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">根式裂项相消</text><rect x="60" y="70" width="250" height="90" rx="8" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="185" y="110" font-size="16" fill="#1a3a5c" text-anchor="middle">1/(√(n+1)+√n)</text><text x="185" y="140" font-size="14" fill="#33536e" text-anchor="middle">分母有理化</text><text x="350" y="120" font-size="22" fill="#c0392b" text-anchor="middle">⇒</text><rect x="385" y="70" width="235" height="90" rx="8" fill="#d8e8d0" stroke="#5a7a2a" stroke-width="2"/><text x="502" y="115" font-size="17" fill="#1a3a5c" text-anchor="middle">√(n+1) − √n</text><text x="502" y="140" font-size="14" fill="#33536e" text-anchor="middle">两项之差</text><text x="340" y="205" font-size="15" fill="#33536e" text-anchor="middle">分子分母同乘 √(n+1)−√n 得 (√(n+1)−√n)/1</text><text x="340" y="240" font-size="14" fill="#33536e" text-anchor="middle">相邻根式差为常数 1，裂开后前后衔接抵消</text></svg>', caption: '图3　根式裂项：分母有理化得 √(n+1) − √n，前后衔接抵消。' },
        { type: 'example', label: '例题3', text: '求 S_n = Σ_{k=1}^{n} 1/[√(k+1)+√k]。<br><br><strong>解</strong>：分母有理化，分子分母同乘 √(k+1)−√k，得 1/[√(k+1)+√k] = √(k+1) − √k。<br>故 S_n = (√2 − √1) + (√3 − √2) + … + (√(n+1) − √n)。<br>中间 √2、√3、…、√n 全部抵消，只剩 −√1 与 √(n+1)，<br>所以 <strong>S_n = √(n+1) − 1</strong>。' },
        { type: 'paragraph', text: '根式裂项与分式裂项思路一致：寻找相邻项之间能够衔接抵消的结构。处理时先有理化或拆分母，再展开观察抵消规律，切勿在有理化步骤中算错符号或漏掉分母。' },
        { type: 'warn', label: '易错', text: '裂项相消最常见的两类错误：一是<strong>裂项系数写错</strong>，如把 1/[n(n+k)] 误写成 1/n − 1/(n+k)（漏掉 1/k）；二是<strong>抵消不彻底或看错剩余项</strong>，展开后应只留首尾，中间必须完全配对。写完务必用通分还原检验裂项正确性。' },
        { type: 'heading', text: '三、本课小结' },
        { type: 'paragraph', text: '裂项相消法通过把通项拆成两项之差，使相邻项相互抵消，把复杂求和转化为首尾少量项的运算。熟练记忆几种典型裂项，并养成通分检验的习惯，是稳拿这类高考题分数的关键。' },
        { type: 'tip', label: '记忆', text: '裂项口诀：<strong>分母差几就除以几，根式有理化拆成差</strong>。展开求和式后，中间项必抵消，只剩首末，再化简即可。遇到陌生通项，先尝试通分还原，确认裂项无误再求和。' },
        { type: 'list', items: [
          '裂项核心：a_n = f(n) − f(n+1)，使中间项抵消',
          '常见类型：分式型、根式型、阶乘型，对应不同裂法',
          '务必通分还原检验，避免系数与符号错误',
          '求和后只剩首尾项，化简得到 S_n'
        ] }
      ],
      exercises: [
        { type: 'choice', question: '裂项相消法的核心思想是？', options: ['将通项裂成两项之差，使中间项相互抵消', '将数列正序与倒序对应相加', '把通项分成几个可分别求和的数列', '直接套用等差求和公式'], answer: '将通项裂成两项之差，使中间项相互抵消', explanation: '裂项相消法的本质是把每一项通项写成前后两项之差，例如 a_n = f(n) − f(n+1)，求和时相邻项的正负部分恰好成对抵消，只剩首尾少量项。倒序相加是另一种方法，分组求和强调拆分后分别求和，直接套公式适用于标准等差等比，均与裂项相消的核心不同。' },
        { type: 'choice', question: '1/[n(n+1)] 的正确裂项形式是？', options: ['1/n − 1/(n+1)', '1/(n+1) − 1/n', '1/n + 1/(n+1)', 'n − (n+1)'], answer: '1/n − 1/(n+1)', explanation: '因为 1/n − 1/(n+1) = (n+1−n)/[n(n+1)] = 1/[n(n+1)]，所以正确裂项为 1/n − 1/(n+1)。第二项符号相反，通分后得负值；第三项是相加而非相减，无法产生抵消；第四项与原分式毫无关系。裂项正确性可通过通分还原来验证。' },
        { type: 'choice', question: '求和 Σ_{k=1}^{n} 1/[k(k+1)] 的结果是？', options: ['1 − 1/(n+1)', '1/(n+1)', '1 − 1/n', 'n'], answer: '1 − 1/(n+1)', explanation: '由 1/[k(k+1)] = 1/k − 1/(k+1)，求和展开后中间项全部抵消，仅剩首项 1 与末项 −1/(n+1)，故结果为 1 − 1/(n+1)。选项 1/(n+1) 只留下末项；1 − 1/n 把末项下标写错；n 与原结果相差甚远。裂项后务必确认只剩首尾两项再化简。' },
        { type: 'fill', question: '将 1/(4n²−1) 裂项为两项之差，可写成 1/(4n²−1) = ____。', answer: '1/2·(1/(2n−1) − 1/(2n+1))|1/2·(1/(2n−1)−1/(2n+1))', explanation: '分母 4n²−1 = (2n−1)(2n+1)，两因式相差 2，故裂项为 1/2·(1/(2n−1) − 1/(2n+1))。验证：1/2·[(2n+1)−(2n−1)]/[(2n−1)(2n+1)] = 1/2·2/(4n²−1) = 1/(4n²−1)，正确。注意前面的系数 1/2 不能遗漏，这是该类裂项最易出错之处。' },
        { type: 'fill', question: '将 1/(√(n+1)+√n) 分母有理化后，可化简为 1/(√(n+1)+√n) = ____。', answer: '√(n+1) − √n', explanation: '分子分母同乘 √(n+1)−√n，分母变为 (√(n+1)+√n)(√(n+1)−√n) = (n+1)−n = 1，故原式 = √(n+1)−√n。这类根式裂项前后根式差为 1，求和时相邻根式可衔接抵消，是根式型数列求和的常用手段，务必记牢有理化后的差式形式。' }
      ]
    }

  );
})();
