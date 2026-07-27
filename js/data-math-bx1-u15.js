/* ============================================================
 * 高一数学 · 必修 第一册 · 附录
 * 第25课时：重难点与考试提示（全册复习导航）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;
  v.points.push(

    /* ---------------- 第25课时 附录：重难点与考试提示 ---------------- */
    {
      id: 'bx1-u15-l1',
      name: '重难点与考试提示（全册导航）',
      chapter: '附录 · 高一数学必修第一册',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、全册知识体系概览' },
        { type: 'paragraph', text: '必修第一册以“语言基础—不等式工具—函数主线—指数对数—三角函数”为主线展开。集合与逻辑是后续一切数学内容的公共语言，函数是贯穿整个高中数学的核心思想。' },
        { type: 'keypoint', label: '重点·全册主线', text: '五章可概括为：<strong>① 集合与逻辑（语言基础）</strong> → <strong>② 不等式（研究工具）</strong> → <strong>③ 函数概念与性质（核心主线）</strong> → <strong>④ 指数与对数函数（函数家族）</strong> → <strong>⑤ 三角函数（周期现象）</strong>。把握这条主线，复习就有了抓手。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 140" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="140" fill="#eef4fc"/><rect x="20" y="50" width="110" height="48" rx="8" fill="#2b5b9e"/><text x="75" y="80" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">集合逻辑</text><rect x="148" y="50" width="110" height="48" rx="8" fill="#4a7de0"/><text x="203" y="80" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">不等式</text><rect x="276" y="50" width="110" height="48" rx="8" fill="#5a7a2a"/><text x="331" y="80" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">函数</text><rect x="404" y="50" width="120" height="48" rx="8" fill="#e05d44"/><text x="464" y="80" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">指数对数</text><rect x="540" y="50" width="120" height="48" rx="8" fill="#7a5aa0"/><text x="600" y="80" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">三角函数</text><text x="340" y="120" font-size="13" fill="#33536e" text-anchor="middle">五章递进：语言 → 工具 → 主线 → 家族 → 周期</text></svg>', caption: '图1　必修第一册五章知识地图：由语言基础走向函数主线。' },
        { type: 'list', items: ['第一章：集合运算、充分必要条件', '第二章：不等式性质、基本不等式求最值', '第三章：函数三要素、单调性与奇偶性', '第四章：指数/对数函数图象与性质、零点二分法', '第五章：三角函数定义、诱导公式、恒等变换'] },
        { type: 'heading', text: '二、重点内容清单' },
        { type: 'keypoint', label: '重点·必考', text: '全册高频考点：<strong>集合的交并补运算</strong>；<strong>充分必要条件的判断</strong>；<strong>基本不等式求最值（一正二定三相等）</strong>；<strong>函数单调性与奇偶性的判断证明</strong>；<strong>指数、对数函数的图象与性质</strong>；<strong>三角函数诱导公式与恒等变换</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 130" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="130" fill="#eef4fc"/><rect x="40" y="45" width="180" height="46" rx="8" fill="#2b5b9e"/><text x="130" y="74" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">集合与逻辑</text><rect x="250" y="45" width="180" height="46" rx="8" fill="#4a7de0"/><text x="340" y="74" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">不等式求最值</text><rect x="460" y="45" width="190" height="46" rx="8" fill="#5a7a2a"/><text x="555" y="74" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">函数与指对、三角</text><text x="340" y="115" font-size="13" fill="#33536e" text-anchor="middle">三大重点板块：运算、最值、性质</text></svg>', caption: '图2　重点板块：集合逻辑、不等式最值、函数与指对三角性质。' },
        { type: 'example', label: '例题1（综合）', text: '判断：“x > 3”是“x² > 9”的什么条件？<br><br><strong>解</strong>：x > 3 ⇒ x² > 9（成立）；但 x² > 9 时 x > 3 或 x < −3，不能推出 x > 3。故“x > 3”是“x² > 9”的<strong>充分不必要条件</strong>。此题综合了不等式性质与充分必要条件判断。' },
        { type: 'heading', text: '三、难点突破' },
        { type: 'keypoint', label: '重点·难点', text: '四大难点：①<strong>函数性质的综合应用</strong>（单调+奇偶联合推理）；②<strong>含参不等式的分类讨论</strong>（按参数符号、判别式分情况）；③<strong>零点存在性定理的应用</strong>（存在性≠唯一性）；④<strong>三角恒等变换的灵活运用</strong>（公式正向与逆用）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 130" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="130" fill="#eef4fc"/><rect x="40" y="45" width="160" height="46" rx="8" fill="#e05d44"/><text x="120" y="74" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">函数性质综合</text><rect x="230" y="45" width="160" height="46" rx="8" fill="#e05d44"/><text x="310" y="74" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">含参分类讨论</text><rect x="420" y="45" width="160" height="46" rx="8" fill="#e05d44"/><text x="500" y="74" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">零点定理应用</text><rect x="610" y="45" width="60" height="46" rx="8" fill="#e05d44"/><text x="640" y="74" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">三角</text><text x="340" y="115" font-size="13" fill="#33536e" text-anchor="middle">四大难点：综合、分类、定理、变换</text></svg>', caption: '图3　四大难点：函数综合、含参分类、零点应用、三角变换。' },
        { type: 'example', label: '例题2（综合）', text: '判断 f(x) = x³ − x 的奇偶性，并说明在 (−∞, 0) 上的单调性趋势。<br><br><strong>解</strong>：定义域 R 关于原点对称；f(−x) = −x³ + x = −(x³ − x) = −f(x)，故为<strong>奇函数</strong>。奇函数在对称区间单调性一致，而 x³−x 整体在 R 上并非单调，需分段讨论——提醒我们奇偶与单调要结合具体区间，不能笼统下结论。' },
        { type: 'heading', text: '四、常用数学思想' },
        { type: 'table', headers: ['思想方法', '典型应用', '关键动作'], rows: [['数形结合', '解不等式、函数性质', '画图象/数轴辅助'], ['分类讨论', '含参不等式、绝对值', '按参数符号/范围分情况'], ['函数与方程', '零点、根的分布', '方程⇔函数交点'], ['转化与化归', '三角化简、最值', '化归为熟悉模型']] },
        { type: 'warn', label: '易错总览', text: '全册最高频失分：①集合运算混淆“或/且”、忽略空集；②充分必要条件<strong>方向搞反</strong>；③基本不等式<strong>忽略一正二定三相等</strong>；④不等式<strong>乘负数忘变号</strong>；⑤函数<strong>定义域优先</strong>与奇偶先看对称性；⑥对数<strong>真数须为正</strong>；⑦诱导公式<strong>符号判错</strong>。逐项对照自查可大幅提分。' },
        { type: 'tip', label: '复习建议', text: '复习时建议“先骨架后细节”：先默写五章知识地图与三大重点板块，再逐个攻克四大难点；每章挑 2~3 道综合题练“数学思想”的运用（尤其数形结合与分类讨论）。错题本按上述易错点分类归档，考前重点回看。' },
        { type: 'heading', text: '五、衔接注意与版本说明' },
        { type: 'list', items: ['第一章集合与逻辑是后续所有数学内容的基础语言', '第三章函数思想贯穿整个高中数学，务必扎实', '第四章指数对数互为反函数，图象关于 y=x 对称', '第五章三角仅入门，后续还有更深的导数与恒等学习', '版本：依人教A版(2019)，北师大版增统计概率，苏教版合并幂指对为一章'] },
        { type: 'reading', text: '从全册看，必修第一册在“为高中数学奠基”：集合与逻辑提供语言，函数提供方法论，指数对数与三角提供两大基本函数族。后续的选择性必修会在此基础上引入导数、数列、立体几何与概率统计。因此本册的每一个概念都不是孤立的——比如“函数单调性”会在导数中重新被精确化，“零点”会延伸出更一般的方程的根的分布。现在打牢基础，后面事半功倍。' }
      ],
      exercises: [
        { type: 'choice', question: '“x > 3”是“x² > 9”的什么条件？', options: ['充分不必要条件', '必要不充分条件', '充要条件', '既不充分也不必要条件'], answer: '充分不必要条件', explanation: 'x>3 ⇒ x²>9 成立；但 x²>9 时 x>3 或 x<−3，不能推出 x>3。故“x>3”是“x²>9”的充分不必要条件。' },
        { type: 'fill', question: '用基本不等式求最值必须满足“一正、二____、三相等”。', answer: '定', explanation: '基本不等式求最值三条件：一正（量为正）、二定（和或积为定值）、三相等（等号能取到）。故填“定”。' },
        { type: 'choice', question: '下列数学思想中，解不等式“画数轴看区间”主要体现的是？', options: ['分类讨论', '数形结合', '转化与化归', '函数与方程'], answer: '数形结合', explanation: '把代数不等式转化为数轴上的区间图形来观察解集，正是“数形结合”思想的典型应用。故选数形结合。' },
        { type: 'fill', question: '函数 f(x)=x³−x 是 ____（填“奇”或“偶”或“非奇非偶”）函数。', answer: '奇', explanation: 'f(−x)=(−x)³−(−x)=−x³+x=−(x³−x)=−f(x)，且定义域 R 关于原点对称，故为奇函数。' },
        { type: 'choice', question: '关于必修第一册章节顺序，正确的是？', options: ['函数→集合→不等式', '集合逻辑→不等式→函数→指数对数→三角', '三角→函数→集合', '不等式→集合→函数'], answer: '集合逻辑→不等式→函数→指数对数→三角', explanation: '人教A版必修第一册顺序为：第一章集合与逻辑、第二章不等式、第三章函数概念与性质、第四章指数与对数函数、第五章三角函数。故选该顺序。' }
      ]
    }

  );
})();
