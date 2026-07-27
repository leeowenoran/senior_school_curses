/* ============================================================
 * 高一数学 · 必修 第一册 · 第一章 集合与常用逻辑用语
 * 第3课时：集合的基本运算（人教A版 §1.3）
 * 第4课时：充分条件与必要条件（人教A版 §1.4）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;
  v.points.push(

    /* ---------------- 第3课时 集合的基本运算 ---------------- */
    {
      id: 'bx1-u2-l1',
      name: '集合的基本运算',
      chapter: '第一章 集合与常用逻辑用语 · 1.3',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、并集' },
        { type: 'paragraph', text: '集合运算指由两个已知集合得到一个新集合的运算。并集是把两个集合的元素“合在一起”，是集合运算中最基础的一种。' },
        { type: 'keypoint', label: '重点·并集', text: '由所有属于集合 A <strong>或</strong>属于集合 B 的元素组成的集合，叫做 A 与 B 的<strong>并集</strong>，记作 <strong>A ∪ B</strong>。符号表示：<strong>A ∪ B = {x | x ∈ A 或 x ∈ B}</strong>。注意“或”是“并集”的关键，重复元素只算一次（互异性）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><ellipse cx="270" cy="125" rx="110" ry="82" fill="#7eb0e6" stroke="#2b5b9e" stroke-width="2.5"/><ellipse cx="410" cy="125" rx="110" ry="82" fill="#7eb0e6" stroke="#2b5b9e" stroke-width="2.5"/><text x="270" y="132" font-size="18" fill="#1a3a5c" font-weight="bold" text-anchor="middle">A</text><text x="410" y="132" font-size="18" fill="#1a3a5c" font-weight="bold" text-anchor="middle">B</text><text x="340" y="222" font-size="15" fill="#33536e" text-anchor="middle">A ∪ B：两圆及重叠部分共同组成的全部区域</text></svg>', caption: '图1　并集 A ∪ B：属于 A 或属于 B 的元素全部并入。' },
        { type: 'list', items: ['A ∪ A = A（幂等律）', 'A ∪ ∅ = A（空集是并运算的单位元）', 'A ⊆ (A ∪ B)，且 B ⊆ (A ∪ B)', '交换律：A ∪ B = B ∪ A'] },
        { type: 'heading', text: '二、交集' },
        { type: 'keypoint', label: '重点·交集', text: '由所有属于集合 A <strong>且</strong>属于集合 B 的元素组成的集合，叫做 A 与 B 的<strong>交集</strong>，记作 <strong>A ∩ B</strong>。符号表示：<strong>A ∩ B = {x | x ∈ A 且 x ∈ B}</strong>。“且”意味着只保留两集合的公共部分。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><ellipse cx="270" cy="125" rx="110" ry="82" fill="#eef4fc" stroke="#2b5b9e" stroke-width="2.5"/><ellipse cx="410" cy="125" rx="110" ry="82" fill="#eef4fc" stroke="#2b5b9e" stroke-width="2.5"/><ellipse cx="340" cy="125" rx="42" ry="62" fill="#2b5b9e"/><text x="270" y="132" font-size="18" fill="#1a3a5c" font-weight="bold" text-anchor="middle">A</text><text x="410" y="132" font-size="18" fill="#1a3a5c" font-weight="bold" text-anchor="middle">B</text><text x="340" y="222" font-size="15" fill="#33536e" text-anchor="middle">A ∩ B：两圆重叠的“透镜”区域（深色）</text></svg>', caption: '图2　交集 A ∩ B：只保留同时属于 A 和 B 的公共部分。' },
        { type: 'example', label: '例题1', text: '已知集合 A = {1, 2, 3}，B = {2, 3, 4}。<br><br><strong>解</strong>：A ∪ B 由属于 A 或 B 的所有元素组成，去重后为 <strong>{1, 2, 3, 4}</strong>；A ∩ B 由同时属于两者的元素组成，即 <strong>{2, 3}</strong>。' },
        { type: 'heading', text: '三、补集' },
        { type: 'keypoint', label: '重点·补集', text: '如果一个集合含有所研究问题中涉及的所有元素，则称这个集合为<strong>全集</strong>，通常记作 <strong>U</strong>。对于给定的全集 U，集合 A 的补集是由 U 中<strong>不属于 A</strong> 的所有元素组成的集合，记作 <strong>∁ᵤA</strong>，即 <strong>∁ᵤA = {x | x ∈ U 且 x ∉ A}</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><ellipse cx="340" cy="120" rx="210" ry="90" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="520" y="55" font-size="18" fill="#2b5b9e" font-weight="bold" text-anchor="middle">U</text><ellipse cx="300" cy="120" rx="110" ry="62" fill="#ffffff" stroke="#2b5b9e" stroke-width="2.5"/><text x="300" y="126" font-size="18" fill="#1a3a5c" font-weight="bold" text-anchor="middle">A</text><text x="470" y="120" font-size="15" fill="#c0392b" text-anchor="middle">∁ᵤA</text><text x="340" y="222" font-size="15" fill="#33536e" text-anchor="middle">∁ᵤA：全集 U 中扣去 A 后剩下的“环”区域</text></svg>', caption: '图3　补集 ∁ᵤA：在全集 U 内、集合 A 之外（红色环）的元素。' },
        { type: 'example', label: '例题2', text: '设全集 U = {1, 2, 3, 4, 5}，A = {1, 3}。<br><br><strong>解</strong>：∁ᵤA 由 U 中不属于 A 的元素组成，即 <strong>{2, 4, 5}</strong>。' },
        { type: 'heading', text: '四、常用运算律' },
        { type: 'table', headers: ['运算律', '并集形式', '交集形式'], rows: [['交换律', 'A ∪ B = B ∪ A', 'A ∩ B = B ∩ A'], ['结合律', '(A ∪ B) ∪ C = A ∪ (B ∪ C)', '(A ∩ B) ∩ C = A ∩ (B ∩ C)'], ['分配律', 'A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)', 'A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)'], ['德·摩根律', '∁ᵤ(A ∪ B) = ∁ᵤA ∩ ∁ᵤB', '∁ᵤ(A ∩ B) = ∁ᵤA ∪ ∁ᵤB']] },
        { type: 'keypoint', label: '重点·德·摩根律', text: '<strong>“并的补等于补的交，交的补等于补的并”</strong>：∁ᵤ(A ∪ B) = ∁ᵤA ∩ ∁ᵤB；∁ᵤ(A ∩ B) = ∁ᵤA ∪ ∁ᵤB。可记作“去括号时，∩ 与 ∪ 互换，并取补集”。' },
        { type: 'warn', label: '易错', text: '三类高频失误：①<strong>混淆“或”与“且”</strong>，把并集写成交集；②<strong>忽略全集 U</strong>，以为补集是“绝对剩余”，其实补集依赖于指定的全集；③<strong>端点取舍</strong>，用区间表示解集时注意开闭，并集/交集后端点要重新判定是否取到。' },
        { type: 'tip', label: '记忆', text: '求交、并、补时，<strong>先画 Venn 图</strong>往往比死记硬背更快更准。尤其是含参集合（如 A = {x | a &lt; x &lt; a+2}），把参数集合在数轴上或 Venn 中画出，再“看图取区域”，端点与空集情形一目了然。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['并集 A ∪ B = {x | x∈A 或 x∈B}', '交集 A ∩ B = {x | x∈A 且 x∈B}', '补集 ∁ᵤA = {x | x∈U 且 x∉A}', '常用律：交换、结合、分配、德·摩根律', '含参运算先画图，注意端点与空集'] }
      ],
      exercises: [
        { type: 'choice', question: '已知集合 A = {1, 2, 3}，B = {2, 3, 4}，则 A ∩ B = ?', options: ['{1, 2, 3, 4}', '{2, 3}', '{1, 4}', '∅'], answer: '{2, 3}', explanation: '交集 A ∩ B 由同时属于 A 和 B 的元素组成。A = {1,2,3}，B = {2,3,4}，公共元素是 2 和 3，故 A ∩ B = {2, 3}。{1,2,3,4} 是并集 A∪B，{1,4} 是两集合各自独有的元素，∅ 表示无公共元素，均不正确。' },
        { type: 'fill', question: '集合 A = {1, 2}，B = {2, 3}，则 A ∪ B = ____。', answer: '{1,2,3}|{1, 2, 3}', explanation: '并集 A ∪ B 由属于 A 或属于 B 的所有元素组成，去重后为 {1, 2, 3}。注意 2 同时在 A、B 中，按互异性只算一次，故填 {1, 2, 3}。' },
        { type: 'choice', question: '设全集 U = {1, 2, 3, 4}，A = {1, 2}，则 ∁ᵤA = ?', options: ['{1, 2}', '{3, 4}', '{1, 2, 3, 4}', '∅'], answer: '{3, 4}', explanation: '补集 ∁ᵤA 由全集 U 中不属于 A 的元素组成。U = {1,2,3,4}，A = {1,2}，剩余元素是 3、4，故 ∁ᵤA = {3, 4}。{1,2} 是 A 本身，U 是全集，∅ 表示无剩余，均不对。' },
        { type: 'fill', question: '德·摩根律：∁ᵤ(A ∪ B) = ____（用 ∁ᵤA、∁ᵤB 与 ∩ 或 ∪ 表示）。', answer: '∁ᵤA ∩ ∁ᵤB', explanation: '德·摩根律指出“并的补等于补的交”，即 ∁ᵤ(A ∪ B) = ∁ᵤA ∩ ∁ᵤB。可理解为：不在 A∪B 中的元素，既不在 A 中也不在 B 中，即在 ∁ᵤA 与 ∁ᵤB 的交集中。' },
        { type: 'choice', question: '下列命题中，恒成立的是？', options: ['A ∩ B = A', 'A ∪ B = B', 'A ∩ ∅ = ∅', 'A ⊆ (A ∩ B)'], answer: 'A ∩ ∅ = ∅', explanation: '空集与任何集合的交集都是空集，即 A ∩ ∅ = ∅ 恒成立。A∩B=A 仅当 A⊆B 时成立；A∪B=B 仅当 B⊇A 时成立；正确关系是 A∩B ⊆ A 而非 A ⊆ A∩B，故其余三项均不恒成立。' }
      ]
    },

    /* ---------------- 第4课时 充分条件与必要条件 ---------------- */
    {
      id: 'bx1-u2-l2',
      name: '充分条件与必要条件',
      chapter: '第一章 集合与常用逻辑用语 · 1.4',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、命题与推出关系' },
        { type: 'paragraph', text: '在数学中，我们常研究两个陈述 p、q 之间的逻辑推导关系。“若 p 则 q”成立，记作 p ⇒ q，读作“p 推出 q”，这是判断充分与必要的起点。' },
        { type: 'keypoint', label: '重点·推出', text: '如果由命题 p 成立可以推导出命题 q 成立，就说 <strong>p ⇒ q</strong>（p 推出 q）。此时 p 是 q 成立的“足够理由”，q 是 p 成立“必须具备的结果”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 190" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="190" fill="#eef4fc"/><rect x="110" y="80" width="110" height="52" rx="8" fill="#2b5b9e"/><text x="165" y="113" font-size="18" fill="#fff" font-weight="bold" text-anchor="middle">p</text><rect x="460" y="80" width="110" height="52" rx="8" fill="#4a7de0"/><text x="515" y="113" font-size="18" fill="#fff" font-weight="bold" text-anchor="middle">q</text><path d="M222 106 L448 106" stroke="#2b5b9e" stroke-width="3"/><polygon points="448,106 433,99 433,113" fill="#2b5b9e"/><text x="340" y="60" font-size="16" fill="#2b5b9e" font-weight="bold" text-anchor="middle">p ⇒ q（p 推出 q）</text><text x="340" y="172" font-size="14" fill="#33536e" text-anchor="middle">箭头方向就是推导方向</text></svg>', caption: '图1　推出关系 p ⇒ q：p 成立足以保证 q 成立。' },
        { type: 'heading', text: '二、充分条件' },
        { type: 'keypoint', label: '重点·充分条件', text: '若 <strong>p ⇒ q</strong>，则称 p 是 q 的<strong>充分条件</strong>。即“有 p 就足够（充分）推出 q”。记忆口诀：<strong>“有它就行”</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><ellipse cx="400" cy="115" rx="200" ry="82" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><ellipse cx="340" cy="115" rx="110" ry="50" fill="#7eb0e6" stroke="#2b5b9e" stroke-width="2.5"/><text x="400" y="45" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">Q（q 成立的范围）</text><text x="340" y="121" font-size="17" fill="#1a3a5c" font-weight="bold" text-anchor="middle">P（p 成立的范围）</text><text x="340" y="200" font-size="14" fill="#33536e" text-anchor="middle">p ⇒ q 对应 P ⊆ Q（满足 p 的元素都满足 q）</text></svg>', caption: '图2　p ⇒ q 可转化为集合关系：P ⊆ Q（小范围推大范围）。' },
        { type: 'example', label: '例题1', text: '判断：“x &gt; 2”是“x &gt; 0”的什么条件？<br><br><strong>解</strong>：若 x &gt; 2，则显然 x &gt; 0，故“x &gt; 2”⇒“x &gt; 0”成立，前者是后者的<strong>充分条件</strong>。' },
        { type: 'list', items: ['“x = 1”是“x² = 1”的充分条件（x = 1 ⇒ x² = 1，但反之不成立）', '“四边形两组对边分别平行”是“该四边形为平行四边形”的充要条件', '“三角形的一个内角为 90°”是“该三角形为直角三角形”的充要条件', '“明天下雨”是“明天地面湿”的充分条件（下雨必湿，但地面湿未必因雨）'] },
        { type: 'heading', text: '三、必要条件' },
        { type: 'keypoint', label: '重点·必要条件', text: '若 <strong>p ⇒ q</strong>，则称 q 是 p 的<strong>必要条件</strong>。即“没有 q 就推不出 p”，q 是 p 成立必须具备的条件。记忆口诀：<strong>“没它不行”</strong>。注意：p ⇒ q 时，p 是充分、q 是必要，二者方向相反。' },
        { type: 'example', label: '例题2', text: '承接上例：因“x &gt; 2”⇒“x &gt; 0”，所以“x &gt; 0”是“x &gt; 2”的<strong>必要条件</strong>（x 不大于 0 就不可能大于 2，没它不行），但不是充分条件（x &gt; 0 不能推出 x &gt; 2）。' },
        { type: 'heading', text: '四、充要条件' },
        { type: 'keypoint', label: '重点·充要条件', text: '若 <strong>p ⇒ q 且 q ⇒ p</strong>，则称 p 是 q 的<strong>充要条件</strong>，记作 <strong>p ⇔ q</strong>。此时 p、q 等价：有 p 就有 q，没 p 就没 q。记忆：<strong>“互为充分又必要”</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="180" fill="#eef4fc"/><ellipse cx="340" cy="90" rx="210" ry="62" fill="#7eb0e6" stroke="#2b5b9e" stroke-width="2.5"/><text x="340" y="60" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">P = Q</text><text x="340" y="98" font-size="16" fill="#1a3a5c" text-anchor="middle">p 与 q 范围完全相同</text><text x="340" y="150" font-size="14" fill="#33536e" text-anchor="middle">p ⇔ q：两集合重合，互为充要</text></svg>', caption: '图3　充要条件 p ⇔ q：P 与 Q 同一个范围（等价）。' },
        { type: 'example', label: '例题3', text: '判断：“三角形三边相等”是“三角形三角相等”的什么条件？<br><br><strong>解</strong>：等边三角形必等角，等角三角形必等边，二者互推，故为<strong>充要条件</strong>。' },
        { type: 'heading', text: '五、判断方法小结' },
        { type: 'table', headers: ['关系', '符号', '含义', '集合视角'], rows: [['p 是 q 的充分条件', 'p ⇒ q', '有 p 就够推出 q', 'P ⊆ Q'], ['p 是 q 的必要条件', 'q ⇒ p', '没 q 就推不出 p', 'Q ⊆ P'], ['p 是 q 的充要条件', 'p ⇔ q', '二者等价', 'P = Q']] },
        { type: 'warn', label: '易错', text: '最易混淆“充分”与“必要”的<strong>方向</strong>：p ⇒ q 时，<strong>p 在前是充分，q 在后反是必要</strong>。口诀“<strong>小范围推大范围</strong>”——范围小的条件更能“充分”推出范围大的，而范围大的才是小的“必要”前提。务必分清“谁推谁”。' },
        { type: 'tip', label: '记忆', text: '碰到“A 是 B 的什么条件”先写推出箭头：若 A ⇒ B，则 A 充分、B 必要；若 B ⇒ A，则 A 必要、B 充分；双向皆成立则充要。把条件翻译成<strong>集合的包含关系</strong>，用“小推大”一眼判定，几乎不会错。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['p ⇒ q：p 是 q 的充分条件（“有它就行”）', 'p ⇒ q：q 是 p 的必要条件（“没它不行”）', 'p ⇔ q：p 是 q 的充要条件（等价）', '判断核心：分清推出方向，善用“小范围推大范围”', '翻译成集合包含关系 P⊆Q / P=Q 可快速判定'] }
      ],
      exercises: [
        { type: 'choice', question: '“x > 2”是“x > 0”的什么条件？', options: ['充分不必要条件', '必要不充分条件', '充要条件', '既不充分也不必要条件'], answer: '充分不必要条件', explanation: '由 x > 2 可推出 x > 0（成立）；但 x > 0 不能推出 x > 2（如 x = 1）。故“x > 2”是“x > 0”的充分不必要条件。' },
        { type: 'fill', question: '若 p ⇒ q 且 q ⇒ p，则 p 是 q 的______条件。', answer: '充要', explanation: '当 p ⇒ q 且 q ⇒ p 时，p 与 q 等价，记作 p ⇔ q，称 p 是 q 的充要条件。故填“充要”。' },
        { type: 'choice', question: '“a = b”是“|a| = |b|”的什么条件？', options: ['充分不必要条件', '必要不充分条件', '充要条件', '既不充分也不必要条件'], answer: '充分不必要条件', explanation: 'a = b 时可推出 |a| = |b|（成立）；但 |a| = |b| 不能推出 a = b（如 a = 1, b = -1）。故“a = b”是“|a| = |b|”的充分不必要条件。' },
        { type: 'fill', question: '若 p 是 q 的必要条件，则 ______ ⇒ ______（在 p⇒q 与 q⇒p 中选填）。', answer: 'q⇒p', explanation: '“p 是 q 的必要条件”等价于“q ⇒ p”，即 q 成立必须要有 p 成立，q 能推出 p。故填 q⇒p。' },
        { type: 'choice', question: '下列命题中，p 是 q 的充要条件的是？', options: ['p：三角形等边，q：三角形等角', 'p：x > 0，q：x² > 0', 'p：a > b，q：a² > b²', 'p：两直线平行，q：两直线相交'], answer: 'p：三角形等边，q：三角形等角', explanation: '三角形等边当且仅当三角形等角，二者互推，是充要条件。其余：x>0⇒x²>0 但 x²>0⇏x>0（x 可为负），是充分不必要；a>b⇏a²>b²（如 a=1,b=-2）且不必要；平行与相交互斥，非充要。故选等边⇔等角。' }
      ]
    }

  );
})();
