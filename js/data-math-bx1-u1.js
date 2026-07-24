/* ============================================================
 * 高一数学 · 必修 第一册 · 第一章 集合与常用逻辑用语
 * 第1课时：集合的概念（人教A版 §1.1）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 集合的概念 ---------------- */
    {
      id: 'bx1-u1-l1',
      name: '集合的概念',
      chapter: '第一章 集合与常用逻辑用语 · 1.1',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、集合与元素的概念' },
        { type: 'paragraph', text: '在生活和学习中，我们常把一些对象看作一个整体。例如「高一(1)班的全体同学」「所有小于 5 的自然数」「方程 x² - 1 = 0 的所有实数解」。把这些确定的对象放在一起，就构成一个集合。研究集合，是学习函数、不等式、概率等高中数学知识的基础。' },
        { type: 'keypoint', label: '重点·定义', text: '一般地，<strong>把一些能够确定的、不同的对象看成一个整体</strong>，就说这个整体是由这些对象的全体构成的<strong>集合</strong>。集合中的<strong>每个对象</strong>叫做这个集合的<strong>元素</strong>。' },
        { type: 'paragraph', text: '集合通常用大写拉丁字母 A、B、C … 表示，元素用小写拉丁字母 a、b、c … 表示。元素与集合之间是「属于」或「不属于」的关系。' },
        { type: 'keypoint', label: '重点·符号', text: '若 a 是集合 A 的元素，记作 <strong>a ∈ A</strong>，读作「a 属于 A」；若 a 不是集合 A 的元素，记作 <strong>a ∉ A</strong>，读作「a 不属于 A」。符号「∈」的开口朝向集合，表示元素「进入」集合。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><ellipse cx="300" cy="130" rx="180" ry="92" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="300" y="56" font-size="22" fill="#2b5b9e" text-anchor="middle" font-weight="bold">A</text><g fill="#2b5b9e"><circle cx="220" cy="145" r="8"/><circle cx="300" cy="165" r="8"/><circle cx="380" cy="145" r="8"/></g><g font-size="16" fill="#2b5b9e"><text x="232" y="151">a</text><text x="312" y="171">b</text><text x="392" y="151">c</text></g><circle cx="540" cy="150" r="8" fill="#e05d44"/><text x="552" y="156" font-size="16" fill="#e05d44">d</text><g font-size="15" fill="#33536e"><text x="60" y="228">a、b、c 都在集合 A 内：a ∈ A，b ∈ A，c ∈ A</text><text x="60" y="250" fill="#c0392b">d 在集合 A 外：d ∉ A</text></g></svg>', caption: '图1　元素与集合的属于关系：封闭曲线表示集合 A，曲线内的点就是它的元素。' },
        { type: 'heading', text: '二、集合中元素的特性' },
        { type: 'paragraph', text: '一个对象能否作为集合的元素、集合如何区分不同元素，取决于集合元素的三条基本特性，它们是判断一组对象能否构成集合、以及求参数取值的关键依据。' },
        { type: 'keypoint', label: '重点·三大特性', text: '<strong>确定性</strong>：给定一个集合，任何一个对象是不是它的元素，结果是明确的，要么属于、要么不属于，不能模棱两可。<br><strong>互异性</strong>：集合中的元素<strong>互不相同</strong>，相同对象看作一个整体时只算作一个元素。<br><strong>无序性</strong>：集合中的元素<strong>没有先后顺序</strong>，{1, 2, 3} 与 {3, 2, 1} 表示同一个集合。' },
        { type: 'warn', label: '易错', text: '利用集合元素的<strong>互异性</strong>求参数时，求出参数后<strong>必须回代检验</strong>：若所得元素出现重复，则该值应舍去。这是考试中最常见的失分点。' },
        { type: 'example', label: '例题1', text: '已知集合 A = {2, x, x²}，若 3 ∈ A，求实数 x 的值。<br><br><strong>解</strong>：由 3 ∈ A 可知，3 等于集合 A 中的某一个元素，故 x = 3 或 x² = 3。<br>① 当 x = 3 时，A = {2, 3, 9}，元素互异，符合；<br>② 当 x² = 3 时，x = √3 或 x = -√3，A 分别为 {2, √3, 3} 与 {2, -√3, 3}，元素互异，符合。<br>综上，x = 3 或 x = ±√3。' },
        { type: 'heading', text: '三、集合的表示方法' },
        { type: 'paragraph', text: '表示一个集合，常用的方法有：自然语言、列举法、描述法和图示法（Venn 图）。其中<strong>列举法</strong>与<strong>描述法</strong>最为常用，需重点掌握。' },
        { type: 'keypoint', label: '重点·列举法', text: '<strong>列举法</strong>：把集合的元素<strong>一一列举出来</strong>，写在花括号「{ }」内，元素之间用逗号隔开。例如，由 1、2、3 构成的集合记为 A = {1, 2, 3}。当元素个数较多或无限时，可省略中间部分，如自然数集 N = {0, 1, 2, 3, …}。' },
        { type: 'keypoint', label: '重点·描述法', text: '<strong>描述法</strong>：把集合中元素的<strong>共同特征</strong>用符号语言描述出来，一般形式为 <strong>{x ∈ I | p(x)}</strong>，其中 x 是代表元素，I 是 x 的取值范围，p(x) 是 x 满足的性质。例如，小于 5 的实数构成的集合记为 {x ∈ R | x &lt; 5}。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f7fbf3"/><line x1="60" y1="110" x2="650" y2="110" stroke="#5a7a2a" stroke-width="2"/><polygon points="650,110 636,104 636,116" fill="#5a7a2a"/><g stroke="#5a7a2a" stroke-width="2"><line x1="140" y1="100" x2="140" y2="120"/><line x1="260" y1="100" x2="260" y2="120"/><line x1="380" y1="100" x2="380" y2="120"/><line x1="500" y1="100" x2="500" y2="120"/><line x1="620" y1="100" x2="620" y2="120"/></g><g font-size="16" fill="#5a7a2a" text-anchor="middle"><text x="140" y="142">1</text><text x="260" y="142">2</text><text x="380" y="142">3</text><text x="500" y="142">4</text><text x="620" y="142">5</text></g><circle cx="140" cy="110" r="7" fill="#fff" stroke="#5a7a2a" stroke-width="2.5"/><circle cx="620" cy="110" r="7" fill="#fff" stroke="#5a7a2a" stroke-width="2.5"/><g fill="#5a7a2a"><circle cx="260" cy="110" r="7"/><circle cx="380" cy="110" r="7"/><circle cx="500" cy="110" r="7"/></g><text x="340" y="48" font-size="16" fill="#3a5a1e" text-anchor="middle">描述法：B = {x ∈ Z | 1 &lt; x &lt; 5}</text><text x="340" y="180" font-size="16" fill="#3a5a1e" text-anchor="middle">列举法：B = {2, 3, 4}</text></svg>', caption: '图2　同一集合的两种表示：描述法给出元素满足的特征，列举法给出具体元素。' },
        { type: 'warn', label: '易错', text: '用描述法表示集合时，务必看清<strong>代表元素</strong>是什么：{x | y = f(x)} 的代表元素是 x，是<strong>自变量组成的数集</strong>；{y | y = f(x)} 的代表元素是 y，是<strong>函数值组成的数集</strong>；{(x, y) | y = f(x)} 的代表元素是 (x, y)，是<strong>点集</strong>。三者意义完全不同，切勿混淆。' },
        { type: 'tip', label: '提示', text: '<strong>Venn 图（图示法）</strong>：用<strong>封闭曲线的内部</strong>表示集合，能直观地展示集合以及集合之间的关系，常用于分析问题时辅助思考，是一种重要的图形语言。' },
        { type: 'heading', text: '四、集合相等' },
        { type: 'keypoint', label: '重点', text: '只要构成两个集合的<strong>元素完全相同</strong>，这两个集合就<strong>相等</strong>，记作 A = B。集合相等与元素的排列顺序无关，也与同一元素是否重复书写无关（相同元素只算一个）。' },
        { type: 'example', label: '例题2', text: '已知集合 A = {1, a}，B = {a², 1}，且 A = B，求 a 的值。<br><br><strong>解</strong>：由 A = B 知两集合元素完全相同。两集合都含有元素 1，则另一元素必对应相等，故 a = a²，即 a(a - 1) = 0，解得 a = 0 或 a = 1。<br><strong>检验互异性</strong>：当 a = 1 时，A = {1, 1}，元素重复，<strong>舍去</strong>；当 a = 0 时，A = {1, 0}，B = {0, 1}，元素互异且相等，符合。<br>综上，a = 0。' },
        { type: 'heading', text: '五、常用数集及其记法' },
        { type: 'paragraph', text: '数学中一些常用的数集有固定的字母记法，熟记它们是进行集合运算与数学表达的基础。下表列出五个最常用的数集。' },
        { type: 'table', headers: ['记法', '名称', '含义'], rows: [['N', '非负整数集（自然数集）', '全体非负整数：0, 1, 2, 3, …'], ['N⁺ 或 N*', '正整数集', '全体正整数：1, 2, 3, …'], ['Z', '整数集', '全体整数：…, -2, -1, 0, 1, 2, …'], ['Q', '有理数集', '全体有理数（可写成 p/q，q ≠ 0 的形式）'], ['R', '实数集', '全体实数（有理数与无理数的全体）']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><ellipse cx="340" cy="140" rx="300" ry="120" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2"/><text x="618" y="58" font-size="20" fill="#2b5b9e" font-weight="bold">R</text><ellipse cx="340" cy="140" rx="225" ry="92" fill="#c4dcf6" stroke="#4a7de0" stroke-width="2"/><text x="548" y="78" font-size="20" fill="#2b5b9e" font-weight="bold">Q</text><ellipse cx="340" cy="140" rx="155" ry="66" fill="#a8cdf0" stroke="#4a7de0" stroke-width="2"/><text x="478" y="98" font-size="20" fill="#2b5b9e" font-weight="bold">Z</text><ellipse cx="340" cy="140" rx="85" ry="40" fill="#7eb0e6" stroke="#4a7de0" stroke-width="2"/><text x="408" y="118" font-size="20" fill="#1a3a5c" font-weight="bold">N</text><text x="340" y="262" font-size="15" fill="#33536e" text-anchor="middle">N* ⊆ N ⊆ Z ⊆ Q ⊆ R（正整数集最小，实数集最大）</text></svg>', caption: '图3　常用数集之间的包含关系：越往内层，集合越小。' },
        { type: 'keypoint', label: '重点', text: '常用数集之间存在包含关系：<strong>N* ⊆ N ⊆ Z ⊆ Q ⊆ R</strong>。即正整数集是自然数集的子集，自然数集是整数集的子集，整数集是有理数集的子集，有理数集是实数集的子集。' },
        { type: 'tip', label: '记忆', text: '正整数集在 N 的右上角加「+」或「*」表示，即 <strong>N⁺ 或 N*</strong>，它比 N 少了一个元素 0。判断一个数属于哪个数集时，可从最外层 R 起，逐层向内判断。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['集合与元素：把一些确定的、不同的对象看成一个整体就是集合，每个对象是元素', '属于关系：a ∈ A 表示 a 是 A 的元素，a ∉ A 表示 a 不是 A 的元素', '元素三性：确定性、互异性、无序性（求参数后务必检验互异性）', '表示方法：自然语言、列举法 {…}、描述法 {x | p(x)}、Venn 图', '集合相等：元素完全相同则相等，与顺序无关', '常用数集：N、N*、Z、Q、R，且 N* ⊆ N ⊆ Z ⊆ Q ⊆ R'] }
      ],
      exercises: [
        { type: 'choice', question: '下列各组对象中，能构成集合的是？', options: ['高一(1)班身材较高的同学', '方程 x² - 1 = 0 的所有实数解', '接近于 0 的数', '我国著名的数学家'], answer: '方程 x² - 1 = 0 的所有实数解', explanation: '集合的元素必须具有确定性，即任一对象是否属于该集合是明确的。「较高」「接近于 0」「著名」都没有明确的判定标准，不满足确定性；而方程 x² - 1 = 0 的实数解为 -1 和 1，对象明确，能构成集合。' },
        { type: 'choice', question: '下列关系式中，正确的是？', options: ['1/2 ∈ Z', '√2 ∈ Q', '-3 ∈ N', '0 ∈ N'], answer: '0 ∈ N', explanation: 'N 为非负整数集（自然数集），包含 0，故 0 ∈ N 正确。1/2 不是整数，不属于 Z；√2 是无理数，不属于 Q；-3 是负整数，而 N 只含非负整数，故 -3 ∉ N。' },
        { type: 'fill', question: '已知集合 A = {1, a}，B = {a², 1}，若 A = B，则 a = ____。', answer: '0', explanation: '由 A = B 知两集合元素完全相同。两集合都含有元素 1，故另一元素对应相等，即 a = a²，解得 a = 0 或 a = 1。检验互异性：a = 1 时 A = {1, 1} 元素重复，舍去；a = 0 时 A = {1, 0}、B = {0, 1}，元素互异且相等，故 a = 0。' },
        { type: 'choice', question: '集合 A = {x | x² - x = 0} 用列举法表示为？', options: ['{0}', '{1}', '{0, 1}', '{0, 1, -1}'], answer: '{0, 1}', explanation: '解方程 x² - x = 0，即 x(x - 1) = 0，得 x = 0 或 x = 1，故集合 A 的元素为 0 和 1，用列举法表示为 {0, 1}。选项 {0}、{1} 各漏一个元素，{0, 1, -1} 多出了 -1，均不正确。' },
        { type: 'fill', question: '用列举法表示集合 M = {x ∈ N | x < 4} = ____。', answer: '{0,1,2,3}|{0, 1, 2, 3}|0,1,2,3', explanation: 'x ∈ N 表示 x 是非负整数（自然数，含 0），且 x < 4，所以 x 可取 0、1、2、3。用列举法把元素一一写在花括号内，得 M = {0, 1, 2, 3}。注意 N 包含 0，切勿漏写。' }
      ]
    }
  );
})();
