/* ============================================================
 * 高一数学 · 必修 第二册 · 第十章 概率
 * 第1课时：频率与概率（人教A版 §10.3）
 * 第2课时：附录 重难点与考试提示（必修 第二册 · 附录）
 * 数据注入：math.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx2');
  if (!v) return;
  v.points.push(

    /* ---------------- 第1课时 频率与概率 ---------------- */
    {
      id: 'bx2-u10-l1',
      name: '频率与概率',
      chapter: '第十章 概率 · 10.3',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、频率的定义' },
        { type: 'paragraph', text: '在相同的条件下重复进行 n 次试验，事件 A 发生的次数 m 称为事件 A 出现的频数。频数 m 与试验总次数 n 的比值，叫做事件 A 发生的频率，记作 f(A) = m / n。频率是一个随具体试验而变化的数值。' },
        { type: 'keypoint', label: '重点·频率', text: '在相同条件下重复 n 次试验，事件 A 发生的<strong>频数</strong>为 m，则<strong>频率 f(A) = m / n</strong>。频率的取值范围是 0 ≤ f(A) ≤ 1。频率是<strong>试验的统计结果</strong>，会随试验的不同而波动，不是固定不变的数。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">频率随试验次数增加而趋于稳定</text><line x1="70" y1="220" x2="640" y2="220" stroke="#33536e" stroke-width="2"/><line x1="70" y1="40" x2="70" y2="220" stroke="#33536e" stroke-width="2"/><text x="650" y="225" font-size="13" fill="#33536e" text-anchor="end">试验次数 n</text><text x="45" y="50" font-size="13" fill="#33536e" text-anchor="middle">频率</text><line x1="70" y1="110" x2="640" y2="110" stroke="#c0392b" stroke-width="2" stroke-dasharray="6 5"/><text x="640" y="103" font-size="13" fill="#c0392b" text-anchor="end">概率 p = 0.5（常数）</text><polyline fill="none" stroke="#2b5b9e" stroke-width="2.5" points="70,165 130,90 190,145 250,100 310,132 370,108 430,120 490,110 550,114 610,111 640,110"/><text x="340" y="248" font-size="14" fill="#33536e" text-anchor="middle">折线初期波动大，随 n 增大逐渐收敛于概率</text></svg>', caption: '图1　频率随试验次数增加趋于稳定，并收敛到概率常数。' },
        { type: 'list', items: ['频率 = 频数 / 试验总次数，即 m / n', '0 ≤ 频率 ≤ 1，且必然事件的频率为 1、不可能事件的频率为 0', '频率带有随机性，换一批试验数据往往得到不同的值', '做大量重复试验时，频率会围绕某个固定值上下摆动'] },
        { type: 'heading', text: '二、概率的定义' },
        { type: 'keypoint', label: '重点·概率', text: '在一定条件下，事件 A 发生的可能性大小用一个实数来表示，这个数叫做事件 A 的<strong>概率</strong>，记作 <strong>P(A)</strong>。概率是事件本身固有的客观属性，是一个<strong>常数</strong>，不随具体试验的改变而改变。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">抛硬币正面向上的频率收敛于 0.5</text><line x1="70" y1="220" x2="640" y2="220" stroke="#33536e" stroke-width="2"/><line x1="70" y1="40" x2="70" y2="220" stroke="#33536e" stroke-width="2"/><text x="650" y="225" font-size="13" fill="#33536e" text-anchor="end">抛掷次数 n</text><text x="45" y="50" font-size="13" fill="#33536e" text-anchor="middle">频率</text><line x1="70" y1="110" x2="640" y2="110" stroke="#c0392b" stroke-width="2" stroke-dasharray="6 5"/><text x="640" y="103" font-size="13" fill="#c0392b" text-anchor="end">理论概率 0.5</text><polyline fill="none" stroke="#4a7de0" stroke-width="2.5" points="70,155 130,95 190,138 250,105 310,128 370,114 430,120 490,110 550,114 610,111 640,111"/><text x="340" y="248" font-size="14" fill="#33536e" text-anchor="middle">大量重复抛掷后，频率稳定在 0.5 附近</text></svg>', caption: '图2　抛均匀硬币，正面频率随抛掷次数增多而逼近 0.5。' },
        { type: 'list', items: ['概率 P(A) 满足 0 ≤ P(A) ≤ 1', '必然事件的概率为 1，不可能事件的概率为 0', '概率是客观存在的常数，与做不做试验无关', '对均匀硬币，正面向上的概率恒为 0.5'] },
        { type: 'heading', text: '三、频率与概率的关系' },
        { type: 'keypoint', label: '重点·关系', text: '<strong>频率是概率的近似值，随试验变化而变化；概率是频率的稳定值，是一个常数。</strong>当试验次数很大时，频率会在概率附近摆动，并且随着试验次数增加，摆动幅度越来越小，逐渐稳定在概率附近。' },
        { type: 'example', label: '例题1', text: '某同学做掷硬币试验，记录正面向上的频率：<br><br>掷 10 次时频率约为 0.60，掷 100 次时约为 0.52，掷 1000 次时约为 0.498。<br><br><strong>分析</strong>：频率从 0.60 逐步逼近 0.5，说明<strong>试验次数越多，频率越接近概率 0.5</strong>，频率是概率的近似表现。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">频率与概率的概念对比</text><rect x="70" y="55" width="250" height="140" rx="8" fill="#ffffff" stroke="#2b5b9e" stroke-width="2.5"/><rect x="360" y="55" width="250" height="140" rx="8" fill="#ffffff" stroke="#4a7de0" stroke-width="2.5"/><text x="195" y="85" font-size="16" fill="#2b5b9e" font-weight="bold" text-anchor="middle">频率</text><text x="485" y="85" font-size="16" fill="#4a7de0" font-weight="bold" text-anchor="middle">概率</text><text x="195" y="120" font-size="13" fill="#33536e" text-anchor="middle">随试验而变化的近似值</text><text x="195" y="150" font-size="13" fill="#33536e" text-anchor="middle">每次试验可能不同</text><text x="485" y="120" font-size="13" fill="#33536e" text-anchor="middle">客观存在的常数</text><text x="485" y="150" font-size="13" fill="#33536e" text-anchor="middle">不随试验改变</text><text x="340" y="215" font-size="14" fill="#33536e" text-anchor="middle">频率是概率的近似，概率是频率的稳定值</text></svg>', caption: '图3　频率与概率概念对比：一变一不变，一近似一稳定。' },
        { type: 'example', label: '例题2', text: '判断下列说法：①概率是频率的平均值；②概率是频率的稳定值；③频率随试验变化。<br><br><strong>解</strong>：②、③正确。概率不是把若干次频率取平均，而是当试验次数趋于无穷时频率所<strong>稳定于的那个常数</strong>；频率确实随每次试验而波动。' },
        { type: 'heading', text: '四、用频率估计概率' },
        { type: 'keypoint', label: '重点·估计', text: '在<strong>大量重复试验</strong>中，事件发生的频率稳定于某个常数，这个常数就是该事件的概率。因此当概率难以直接求得时，可以用<strong>稳定后的频率来估计概率</strong>。这就是用频率估计概率的基本思想。' },
        { type: 'table', headers: ['项目', '频率', '概率'], rows: [['本质', '试验的统计结果（近似值）', '事件固有的客观常数'], ['是否变化', '随试验变化而波动', '不随试验改变'], ['二者关系', '概率是频率的稳定值', '频率是概率的近似表现'], ['取值范围', '0 到 1 之间波动', '0 到 1 之间的常数']] },
        { type: 'example', label: '例题3', text: '<strong>估计</strong>：某厂对一批灯泡抽检，抽检 200 只中 6 只不合格，试估计该批灯泡的不合格率。<br><br><strong>解</strong>：不合格的频率 = 6 / 200 = 0.03。在大量抽检意义下可用频率估计概率，故估计不合格率约为 <strong>3%</strong>。' },
        { type: 'warn', label: '易错', text: '三种常见误区：①<strong>把频率当概率</strong>，用少数几次试验的频率直接当作概率，应强调“大量重复”；②<strong>认为概率会随试验改变</strong>，概率是常数，变的是频率；③<strong>误以为频率必然等于概率</strong>，二者只是“稳定趋近”而非严格相等。' },
        { type: 'tip', label: '记忆', text: '判断“频率与概率”的关系，记住一句口诀：<strong>“频率会变、概率是定，次数越多越逼近”</strong>。考试若给一段试验数据，先看次数是否足够大，再判断频率是否已稳定，用稳定值估计概率最稳妥。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['频率 = 频数 / 试验次数，随试验波动', '概率是事件固有的常数，不随试验改变', '概率是频率的稳定值，频率是概率的近似', '大量重复试验中可用稳定后的频率估计概率', '必然、不可能事件的概率分别为 1 和 0'] }
      ],
      exercises: [
        { type: 'choice', question: '关于频率与概率的关系，下列说法正确的是？', options: ['频率是概率的近似值，随试验变化', '概率随试验次数增加而变大', '频率是客观常数，不随试验改变', '概率是频率的近似值'], answer: '频率是概率的近似值，随试验变化', explanation: '频率是概率的近似值，会随具体试验的不同而波动；概率是频率稳定于的那个常数，不随试验改变。选项中“频率是概率的近似值，随试验变化”准确描述了二者关系，其余说法颠倒或错误。' },
        { type: 'fill', question: '在大量重复试验中，事件发生的频率稳定于某个常数，这个常数就是该事件的______。', answer: '概率', explanation: '在大量重复试验中，事件发生的频率会在某个常数附近摆动并稳定下来，这个常数就是该事件的概率。因此可用稳定后的频率估计概率，此处填“概率”。' },
        { type: 'choice', question: '抛一枚均匀硬币，下列说法正确的是？', options: ['抛掷 10 次，正面一定出现 5 次', '抛掷次数越多，正面频率越接近 0.5', '频率就是概率，二者完全相等', '概率为 0.5 意味着每次抛掷都有一半可能'], answer: '抛掷次数越多，正面频率越接近 0.5', explanation: '均匀硬币正面向上的概率恒为 0.5。频率是概率的近似，抛掷次数越多，正面出现的频率越接近 0.5；少量试验时频率可能偏离，不能说必然出现 5 次，频率也不等于概率。' },
        { type: 'fill', question: '频率与概率的关系中，概率是频率的______，是一个常数。', answer: '稳定值', explanation: '频率随试验波动，是概率的近似表现；概率是当试验次数很大时频率所稳定于的那个常数，因此概率是频率的稳定值，是一个不随试验改变的常数。填“稳定值”。' },
        { type: 'choice', question: '用频率估计概率的依据是？', options: ['频率必然等于概率', '在大量重复试验中频率稳定于概率', '概率可以通过一次试验的频率确定', '频率与概率没有任何关系'], answer: '在大量重复试验中频率稳定于概率', explanation: '用频率估计概率的依据是：在大量重复试验中，事件发生的频率会稳定于它的概率附近，于是可用稳定后的频率估计概率。频率并不必然等于概率，也不能仅凭一次试验确定。' }
      ]
    },

    /* ---------------- 第2课时 附录 重难点与考试提示 ---------------- */
    {
      id: 'bx2-u10-l2',
      name: '附录 重难点与考试提示',
      chapter: '必修 第二册 · 附录',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、本册框架与版本说明' },
        { type: 'paragraph', text: '本册为高中数学必修第二册，共包含五章内容，自第六章至第十章，依次覆盖平面向量、复数、立体几何初步、统计与概率。全书知识跨度大、综合性强，复习时应关注各章之间的知识迁移与综合运用。' },
        { type: 'keypoint', label: '重点·全书概览', text: '必修第二册共五章：<strong>第六章 平面向量及其应用、第七章 复数、第八章 立体几何初步、第九章 统计、第十章 概率</strong>。内容横跨<strong>代数（向量、复数）、几何（立体几何初步）、统计概率</strong>三大领域。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">必修第二册 全册五章知识地图</text><rect x="40" y="70" width="110" height="55" rx="8" fill="#2b5b9e"/><text x="95" y="92" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">第六章</text><text x="95" y="112" font-size="12" fill="#fff" text-anchor="middle">平面向量</text><rect x="170" y="70" width="110" height="55" rx="8" fill="#4a7de0"/><text x="225" y="92" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">第七章</text><text x="225" y="112" font-size="12" fill="#fff" text-anchor="middle">复数</text><rect x="300" y="70" width="110" height="55" rx="8" fill="#7a5aa0"/><text x="355" y="92" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">第八章</text><text x="355" y="112" font-size="12" fill="#fff" text-anchor="middle">立体几何</text><rect x="430" y="70" width="110" height="55" rx="8" fill="#5a7a2a"/><text x="485" y="92" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">第九章</text><text x="485" y="112" font-size="12" fill="#fff" text-anchor="middle">统计</text><rect x="560" y="70" width="110" height="55" rx="8" fill="#e05d44"/><text x="615" y="92" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">第十章</text><text x="615" y="112" font-size="12" fill="#fff" text-anchor="middle">概率</text><path d="M150 97 L168 97" stroke="#33536e" stroke-width="2"/><path d="M280 97 L298 97" stroke="#33536e" stroke-width="2"/><path d="M410 97 L428 97" stroke="#33536e" stroke-width="2"/><path d="M540 97 L558 97" stroke="#33536e" stroke-width="2"/><text x="340" y="170" font-size="14" fill="#33536e" text-anchor="middle">代数（向量·复数）→ 几何（立体几何）→ 统计概率</text><text x="340" y="215" font-size="14" fill="#33536e" text-anchor="middle">三大领域：代数、几何、统计概率，知识迁移贯穿全册</text></svg>', caption: '图1　全册五章知识地图：从代数经几何通向统计概率。' },
        { type: 'list', items: ['第六章 平面向量及其应用', '第七章 复数', '第八章 立体几何初步', '第九章 统计', '第十章 概率', '三大领域：代数、几何、统计概率'] },
        { type: 'heading', text: '二、本册重点梳理' },
        { type: 'keypoint', label: '重点·向量与复数', text: '本册重点之一：<strong>平面向量的线性运算与数量积</strong>（几何与坐标两套语言）、<strong>正余弦定理及其应用</strong>（解三角形）、<strong>复数的四则运算</strong>（加、减、乘、除及几何意义）。' },
        { type: 'keypoint', label: '重点·几何与统计概率', text: '本册重点之二：<strong>空间线面平行与垂直的判定与证明</strong>、<strong>空间几何体的体积与表面积计算</strong>、<strong>用样本估计总体的方法</strong>（直方图、茎叶图、数字特征）、<strong>古典概型的计算</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">重难点清单</text><rect x="40" y="55" width="300" height="220" rx="8" fill="#ffffff" stroke="#5a7a2a" stroke-width="2.5"/><text x="190" y="82" font-size="16" fill="#5a7a2a" font-weight="bold" text-anchor="middle">重点（必会）</text><text x="60" y="112" font-size="12" fill="#33536e">· 向量线性运算与数量积</text><text x="60" y="138" font-size="12" fill="#33536e">· 正余弦定理及应用</text><text x="60" y="164" font-size="12" fill="#33536e">· 复数四则运算</text><text x="60" y="190" font-size="12" fill="#33536e">· 线面平行垂直判定</text><text x="60" y="216" font-size="12" fill="#33536e">· 几何体体积表面积</text><text x="60" y="242" font-size="12" fill="#33536e">· 用样本估计总体</text><text x="60" y="268" font-size="12" fill="#33536e">· 古典概型计算</text><rect x="360" y="55" width="300" height="220" rx="8" fill="#ffffff" stroke="#c0392b" stroke-width="2.5"/><text x="510" y="82" font-size="16" fill="#c0392b" font-weight="bold" text-anchor="middle">难点（突破）</text><text x="380" y="112" font-size="12" fill="#33536e">· 向量法几何综合应用</text><text x="380" y="138" font-size="12" fill="#33536e">· 空间想象与线面关系</text><text x="380" y="164" font-size="12" fill="#33536e">· 转化与化归思想</text><text x="380" y="190" font-size="12" fill="#33536e">· 统计图表综合分析</text><text x="380" y="216" font-size="12" fill="#33536e">· 样本空间准确列举</text></svg>', caption: '图2　重难点清单：左侧为重点（必会），右侧为难点（突破）。' },
        { type: 'list', items: ['平面向量线性运算与数量积', '正余弦定理及其应用', '复数四则运算', '线面平行垂直判定与证明', '几何体体积与表面积', '用样本估计总体', '古典概型计算'] },
        { type: 'heading', text: '三、本册难点剖析' },
        { type: 'keypoint', label: '重点·难点解读', text: '本册难点集中在：<strong>向量法在几何中的综合应用</strong>、<strong>空间想象能力的建立</strong>（线面关系的判断与证明）、<strong>立体几何中的转化与化归思想</strong>、<strong>统计图表的综合分析</strong>、<strong>古典概型中对样本空间的准确列举</strong>。' },
        { type: 'example', label: '难点示例', text: '以“向量法解几何”为例：在平行四边形 ABCD 中，用向量表示对角线关系。<br><br><strong>分析</strong>：设向量 AB = a，向量 AD = b，则向量 AC = a + b，向量 BD = b − a。把几何位置转化为<strong>向量运算</strong>，正是“向量法综合应用”的核心，也是本册难点之一。' },
        { type: 'list', items: ['向量法在几何中的综合应用', '空间想象与线面关系判断证明', '立体几何转化与化归思想', '统计图表综合分析', '古典概型样本空间准确列举'] },
        { type: 'heading', text: '四、常用数学思想' },
        { type: 'keypoint', label: '重点·数学思想', text: '本册贯穿四种常用思想：<strong>数形结合</strong>（向量的几何意义）、<strong>转化与化归</strong>（立体几何中将空间问题化归为平面问题）、<strong>函数与方程</strong>（解三角形）、<strong>分类讨论</strong>（如复数、概率中的情形划分）。' },
        { type: 'table', headers: ['数学思想', '典型体现', '应用章节'], rows: [['数形结合', '向量的几何意义与坐标互化', '第六章'], ['转化与化归', '空间问题化归为平面问题', '第八章'], ['函数与方程', '正弦定理、余弦定理列方程', '第六章'], ['分类讨论', '复数、概型中的情形划分', '第七、十章']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><text x="340" y="30" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">数学思想与章节关联</text><rect x="60" y="60" width="150" height="50" rx="8" fill="#2b5b9e"/><text x="135" y="90" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">数形结合</text><rect x="265" y="60" width="150" height="50" rx="8" fill="#4a7de0"/><text x="340" y="90" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">转化化归</text><rect x="470" y="60" width="150" height="50" rx="8" fill="#7a5aa0"/><text x="545" y="90" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">函数方程</text><text x="340" y="150" font-size="14" fill="#33536e" text-anchor="middle">第六章向量 → 后续“空间向量与立体几何”基础</text><text x="340" y="182" font-size="14" fill="#33536e" text-anchor="middle">第八章立体几何 → 奠定空间向量法基础</text><text x="340" y="214" font-size="14" fill="#33536e" text-anchor="middle">统计概率 → 衔接“随机变量”“成对数据分析”</text></svg>', caption: '图3　数学思想与章节关联：思想统摄全册，章节前后衔接。' },
        { type: 'example', label: '思想示例', text: '以“函数与方程”思想解三角形：已知 △ABC 中 a = 2，b = 2√3，A = 30°，求 B。<br><br><strong>解</strong>：由正弦定理 a / sinA = b / sinB，代入得 2 / sin30° = 2√3 / sinB，解得 sinB = √3 / 2，故 B = 60° 或 120°。这里把几何条件转化为<strong>三角方程</strong>求解，体现函数与方程思想。' },
        { type: 'heading', text: '五、章节关联与后续衔接' },
        { type: 'keypoint', label: '重点·章节关联', text: '<strong>第六章平面向量</strong>是选择性必修中“空间向量与立体几何”的基础；<strong>第八章立体几何初步</strong>为后续用空间向量法解决立体几何问题奠定基础；<strong>统计与概率</strong>则与选择性必修的“随机变量及其分布”“成对数据的统计分析”相衔接。' },
        { type: 'warn', label: '易错', text: '复习时易犯两类失误：①<strong>割裂各章联系</strong>，只记单点知识，忽视向量、立体几何、统计概率之间的迁移；②<strong>忽视思想方法</strong>，只会套公式不会转化。建议以“知识地图”为主线，把重点、难点、思想串成网络。' },
        { type: 'tip', label: '复习建议', text: '备考策略：先把<strong>重点</strong>逐一过关（向量运算、正余弦定理、复数、体积表面积、统计估计、古典概型），再集中突破<strong>难点</strong>（向量法综合、空间想象、转化化归），最后用四大数学思想统摄全册，做跨章综合题提升迁移能力。' },
        { type: 'heading', text: '六、附录小结' },
        { type: 'list', items: ['全书五章：向量、复数、立体几何、统计、概率', '三大领域：代数、几何、统计概率', '重点七条、难点五条需逐一过关', '四大思想：数形结合、转化化归、函数方程、分类讨论', '注意各章与选择性必修内容的衔接迁移'] }
      ],
      exercises: [
        { type: 'choice', question: '下列哪组内容属于本册“重点”而非“难点”？', options: ['向量法在几何中的综合应用', '平面向量的线性运算与数量积', '空间想象能力的建立', '古典概型中样本空间的准确列举'], answer: '平面向量的线性运算与数量积', explanation: '本册重点包括平面向量的线性运算与数量积、正余弦定理、复数四则运算等基础计算内容；而向量法综合应用、空间想象建立、样本空间准确列举属于难点。故“平面向量的线性运算与数量积”是重点而非难点。' },
        { type: 'fill', question: '本册大纲依据的教材版本是______（如人教A版（2019））。', answer: '人教A版（2019）', explanation: '本册大纲依据人民教育出版社A版（2019年）编写，该版本目前在全国使用最为广泛。全书共五章，覆盖代数、几何、统计概率三大领域。此处填“人教A版（2019）”。' },
        { type: 'choice', question: '关于章节关联，下列说法正确的是？', options: ['第六章平面向量为后续空间向量与立体几何打基础', '第八章立体几何与统计概率毫无关联', '统计概率不衔接选择性必修内容', '第十章概率是全册第一关，独立成篇'], answer: '第六章平面向量为后续空间向量与立体几何打基础', explanation: '第六章平面向量及其应用是后续选择性必修“空间向量与立体几何”的基础；第八章立体几何初步为用空间向量法解立体几何问题奠基；统计概率与选择性必修的随机变量、成对数据分析相衔接。其余说法割裂了章节关联，错误。' },
        { type: 'fill', question: '常用数学思想中，“数形结合”主要体现在______的几何意义上（填知识模块）。', answer: '平面向量|向量', explanation: '数形结合思想在本册主要体现在平面向量的几何意义上：向量既有大小又有方向，可平移、可加可数乘，几何图形与坐标运算相互转化。故填“平面向量”（或“向量”）。' },
        { type: 'choice', question: '本册内容覆盖的三大领域是？', options: ['代数、几何、统计概率', '代数、三角、解析几何', '几何、概率、微积分', '代数、统计、数论'], answer: '代数、几何、统计概率', explanation: '必修第二册内容覆盖三大领域：代数（平面向量、复数）、几何（立体几何初步）、统计概率（统计与概率）。全书知识跨度大、综合性强，复习需注意各章之间的知识迁移与综合运用。故选“代数、几何、统计概率”。' }
      ]
    }

  );
})();
