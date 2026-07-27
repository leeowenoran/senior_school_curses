/* ============================================================
 * 高三数学 · 高考复习专题 · 立体几何
 * 第4单元（2 课时）：四个公理 / 空间点、线、面的位置关系
 * 数据注入：math.zt4.points（由 data-gz.js 末尾 GZ_REVIEW.math 自动注册）
 * 注入模式：(function () { var v = gzGetVolume('math', 'zt4'); ... v.points.push(...) })();
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt4');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 四个公理 ---------------- */
    {
      id: 'zt4-u4-l1',
      name: '四个公理',
      chapter: '立体几何复习 · 五 四个公理',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、从公理出发构建立体几何' },
        { type: 'paragraph', text: '立体几何研究空间图形的形状、大小与位置关系。它的全部结论都建立在少数几条不加证明的公理之上。公理是经过长期实践反复验证、为大家公认的基本事实，是推理论证的逻辑起点。本课梳理四个公理，掌握它们就能判断空间中点、直线、平面的基本位置关系。' },
        { type: 'keypoint', label: '公理1', text: '<strong>如果一条直线上的两点在一个平面内，那么这条直线上的所有点都在这个平面内。</strong>简记为：直线上两点在面内 ⇒ 整条直线在面内。因此要证明“线在面内”，只需证明该直线上有<strong>两个点</strong>在平面内。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><polygon points="120,200 320,140 580,180 380,240" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="150" y="222" font-size="16" fill="#2b5b9e">平面 α</text><line x1="80" y1="120" x2="600" y2="210" stroke="#2b5b9e" stroke-width="3"/><circle cx="260" cy="160" r="6" fill="#e05d44"/><circle cx="440" cy="195" r="6" fill="#e05d44"/><text x="270" y="152" font-size="16" fill="#c0392b">A</text><text x="450" y="188" font-size="16" fill="#c0392b">B</text><text x="340" y="58" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">公理1：直线 a 上 A、B 在 α 内 ⇒ a ⊂ α</text><text x="340" y="262" font-size="15" fill="#33536e" text-anchor="middle">只要证直线上两点在面内，整条直线就在此平面内</text></svg>', caption: '图1　公理1：直线 a 上有两点 A、B 在平面 α 内，则整条直线 a 都在平面 α 内。' },
        { type: 'paragraph', text: '公理1常用来证明“直线在平面内”。只要在直线 a 上找到两个点 A、B，并证明 A∈α 且 B∈α，就能断定整条直线 a⊂α。这是将“线在面内”转化为“点是否在面内”的关键方法，也是后续证明线面关系的基础。' },
        { type: 'keypoint', label: '公理2', text: '<strong>经过不在同一条直线上的三点，有且只有一个平面。</strong>即不共线的三点确定一个唯一的平面。注意三点必须“不共线”，若三点共线则过该直线有无数个平面，不能确定唯一平面。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><polygon points="120,210 340,150 600,200 380,260" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><circle cx="230" cy="185" r="7" fill="#2b5b9e"/><circle cx="420" cy="170" r="7" fill="#2b5b9e"/><circle cx="330" cy="215" r="7" fill="#2b5b9e"/><text x="208" y="178" font-size="16" fill="#2b5b9e">A</text><text x="438" y="162" font-size="16" fill="#2b5b9e">B</text><text x="308" y="240" font-size="16" fill="#2b5b9e">C</text><text x="150" y="252" font-size="16" fill="#2b5b9e">平面 α</text><text x="340" y="58" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">公理2：不共线三点 A、B、C 确定唯一平面</text><text x="340" y="135" font-size="15" fill="#33536e" text-anchor="middle">A、B、C 不在同一直线上（三点不共线）</text></svg>', caption: '图2　公理2：不共线的三点 A、B、C 唯一确定一个平面 α。' },
        { type: 'keypoint', label: '公理3', text: '<strong>如果两个不重合的平面有一个公共点，那么它们有且只有一条过这个点的公共直线。</strong>记作 α∩β=a，且 P∈a。这条交线必然经过公共点 P，两平面不可能只交于一个点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><polygon points="100,160 320,100 520,160 300,220" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><polygon points="320,100 520,160 600,120 400,60" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2.5"/><line x1="320" y1="100" x2="520" y2="160" stroke="#e05d44" stroke-width="3.5"/><circle cx="420" cy="130" r="7" fill="#e05d44"/><text x="432" y="124" font-size="16" fill="#c0392b">P</text><text x="150" y="200" font-size="16" fill="#2b5b9e">平面 α</text><text x="540" y="100" font-size="16" fill="#2b5b9e">平面 β</text><text x="340" y="50" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">公理3：α ∩ β = P ⇒ 交线 a（红色直线）</text><text x="340" y="255" font-size="15" fill="#33536e" text-anchor="middle">两平面有一个公共点，则交于过该点的一条公共直线</text></svg>', caption: '图3　公理3：两平面 α、β 交于公共点 P，它们的交线是过 P 的红色直线 a。' },
        { type: 'keypoint', label: '公理4', text: '<strong>平行于同一条直线的两条直线互相平行。</strong>即若 a∥b 且 b∥c，则 a∥c。这是空间平行线具有传递性的体现，是平面几何平行传递性在空间中的推广。' },
        { type: 'paragraph', text: '公理4是平面几何中“平行传递性”在空间中的推广。它说明空间的平行关系也具有传递性：若 a∥b 且 b∥c，则 a∥c。利用它可以在不直接测量的情况下，由已知平行关系推出新的平行关系。' },
        { type: 'list', items: ['公理1：两点定线在面内（证线在面内只需证两点在面内）', '公理2：不共线三点确定唯一平面', '公理3：两平面有一公共点则交于一条公共直线', '公理4：平行同一直线的两直线平行（传递性）'] },
        { type: 'heading', text: '二、公理的综合应用' },
        { type: 'warn', label: '易错', text: '运用公理2时要注意<strong>三点必须不共线</strong>。若三点共线，则它们落在某条直线上，而过一条直线可以作无数个平面，无法唯一确定平面。另外，公理1中“直线上两点在面内”是充分条件，不需要也不容易逐一验证直线上所有点。' },
        { type: 'example', label: '例题1', text: '用公理说明：梯形一定是平面图形。<br><br><strong>解</strong>：梯形有一组对边平行，设梯形 ABCD 中 AB∥CD。根据公理4，平行直线 AB、CD 都平行于同一条直线，故 AB 与 CD 共面（两条平行直线可确定一个平面）。再由公理1，线段 AD、BC 的两个端点都在该平面内，故 AD、BC 也在该平面内。四条边都在同一平面内，所以梯形是平面图形。' },
        { type: 'example', label: '例题2', text: '已知三条直线 a、b、c 两两相交，且不过同一点。证明：a、b、c 共面。<br><br><strong>解</strong>：设 a∩b=A，b∩c=B，a∩c=C。因为 a、b 相交于点 A，根据公理2，经过相交直线 a、b 可确定一个平面 α。下面证 c⊂α：点 B 在 b 上、点 C 在 a 上，而 a⊂α、b⊂α，故 B∈α、C∈α。由公理1，直线 BC（即 c）上两点 B、C 在 α 内，所以 c⊂α。因此 a、b、c 都在平面 α 内，即三线共面。' },
        { type: 'example', label: '例题3', text: '在正方体 ABCD-A₁B₁C₁D₁ 中，已知 AB∥A₁B₁，A₁B₁∥C₁D₁。判断 AB 与 C₁D₁ 是否平行，并说明理由。<br><br><strong>解</strong>：由已知 AB∥A₁B₁ 且 A₁B₁∥C₁D₁，根据公理4（平行于同一条直线的两条直线互相平行），可得 AB∥C₁D₁。所以 AB 与 C₁D₁ 平行。' },
        { type: 'table', headers: ['公理', '内容（简述）', '主要作用'], rows: [['公理1', '直线上两点在面内 ⇒ 整条直线在面内', '判定直线在平面内'], ['公理2', '不共线三点确定唯一平面', '确定平面的依据'], ['公理3', '两平面有一公共点 ⇒ 交于一条公共直线', '判定两平面相交'], ['公理4', '平行于同一直线的两条直线平行', '空间平行线的传递性']] },
        { type: 'tip', label: '提示', text: '证明若干条直线“共面”的常用思路：<br>① 先由其中两条相交（或平行）直线确定一个平面；<br>② 再利用公理1证其余直线上的两点在该平面内，从而整条直线在该平面内。<br>这种“先定面、再证线在面内”的方法在立体几何证明中反复使用。' },
        { type: 'heading', text: '三、本课小结' },
        { type: 'list', items: ['公理1：直线上两点在面内 ⇒ 整条直线在面内（判线在面内）', '公理2：不共线三点确定唯一平面', '公理3：两平面有一公共点 ⇒ 交于唯一一条公共直线', '公理4：平行同一直线的两直线互相平行（传递性）', '共面证明：先由两线定面，再用公理1证其余线在面内'] },
        { type: 'paragraph', text: '四个公理是立体几何的基石。公理1、2、3分别解决“线在面内”“确定平面”“面面相交”的问题，公理4提供空间平行的传递性。熟练运用它们，就能对空间点、线、面的位置关系作出严谨判断与证明。' }
      ],
      exercises: [
        { type: 'choice', question: '根据公理1，要证明一条直线在一个平面内，只需证明？', options: ['直线上所有点都在平面内', '直线上有两个点在平面内', '直线与平面有一个公共点', '直线与平面有两个公共点'], answer: '直线上有两个点在平面内', explanation: '公理1指出：如果一条直线上的两点在一个平面内，那么这条直线上的所有点都在这个平面内，即该直线在此平面内。因此证明“线在面内”只需证直线上有两个点（即两点）在平面内即可，无需逐一验证所有点。' },
        { type: 'choice', question: '根据公理2，确定一个平面的条件可以是？', options: ['一条直线', '两条平行直线', '不共线的三点', '共线的三点'], answer: '不共线的三点', explanation: '公理2说明：经过不在同一条直线上的三点，有且只有一个平面。一条直线、两条平行直线、共线的三点都不能唯一确定平面（共线三点实质在一条直线上，过一条直线有无数个平面），只有不共线的三点才能确定唯一平面。' },
        { type: 'fill', question: '若 a ∥ b 且 b ∥ c，则由公理4可知 a 与 c 的位置关系是 ____（填“平行”或“相交”或“异面”）。', answer: '平行|a ∥ c|互相平行', explanation: '公理4即空间平行线的传递性：平行于同一条直线的两条直线互相平行。已知 a 平行于 b 且 b 平行于 c，则 a 与 c 也互相平行，即 a ∥ c。这是平面几何平行传递性在空间中的推广，可直接由公理推出。' },
        { type: 'fill', question: '若两个不重合的平面有一个公共点，则它们有且只有一条过该点的 ____。', answer: '公共直线|交线|直线', explanation: '公理3指出：如果两个不重合的平面有一个公共点，那么它们有且只有一条过这个点的公共直线，即两平面的交线。这条交线必须经过该公共点，且两平面不可能只交于一个点或几条互不相连的直线。' },
        { type: 'choice', question: '下列结论中，可由公理直接推出的是？', options: ['垂直于同一直线的两条直线平行', '平行于同一直线的两条直线平行', '相交于同一点的三条直线共面', '经过一点有且只有一条直线'], answer: '平行于同一直线的两条直线平行', explanation: '这是公理4的内容（空间平行线的传递性），可由公理直接推出。垂直于同一直线的两条直线在空间中可能平行、相交或异面，不能直接推出平行；相交于同一点的三条直线未必共面；经过一点有无数条直线，并非只有一条。' }
      ]
    },

    /* ---------------- 第2课时 空间点、线、面的位置关系 ---------------- */
    {
      id: 'zt4-u4-l2',
      name: '空间点、线、面的位置关系',
      chapter: '立体几何复习 · 五 位置关系',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、直线与直线的位置关系' },
        { type: 'paragraph', text: '空间中两条直线的位置关系，按它们是否共面以及公共点情况分为三类：平行、相交、异面。其中“异面直线”是空间特有的概念，平面几何中没有。准确区分这三种关系是研究空间线线关系的前提。' },
        { type: 'keypoint', label: '线线关系', text: '<strong>平行</strong>：在同一平面内且没有公共点（a∥b）。<br><strong>相交</strong>：在同一平面内且有且仅有一个公共点。<br><strong>异面</strong>：不同在任何一个平面内，既不平行也不相交，没有公共点。<br>前两者都“共面”，只有异面直线不共面。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="110" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">平行</text><line x1="40" y1="90" x2="180" y2="90" stroke="#2b5b9e" stroke-width="3"/><line x1="40" y1="130" x2="180" y2="130" stroke="#2b5b9e" stroke-width="3"/><text x="110" y="172" font-size="14" fill="#33536e" text-anchor="middle">共面且无公共点</text><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">相交</text><line x1="270" y1="150" x2="410" y2="70" stroke="#2b5b9e" stroke-width="3"/><line x1="270" y1="70" x2="410" y2="150" stroke="#2b5b9e" stroke-width="3"/><circle cx="340" cy="110" r="5" fill="#e05d44"/><text x="340" y="182" font-size="14" fill="#33536e" text-anchor="middle">共面且唯一公共点</text><text x="560" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">异面</text><polygon points="450,90 560,60 620,90 510,120" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><polygon points="500,170 610,140 660,165 550,195" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2"/><line x1="470" y1="105" x2="540" y2="85" stroke="#2b5b9e" stroke-width="3"/><line x1="520" y1="180" x2="600" y2="160" stroke="#e05d44" stroke-width="3" stroke-dasharray="6 4"/><text x="560" y="228" font-size="14" fill="#33536e" text-anchor="middle">不同平面，不平行不相交</text></svg>', caption: '图1　直线与直线三种位置关系：平行（共面）、相交（共面）、异面（不共面，红色虚线为被遮挡线）。' },
        { type: 'warn', label: '易错', text: '<strong>异面直线既不平行也不相交，且不在同一平面内。</strong>常见错误是把“不相交”直接说成“平行”——在同一平面内不相交才平行，但空间中不相交的两条直线还可能异面。判断异面不能只看有无公共点，还要看能否找到一个同时包含它们的平面。' },
        { type: 'list', items: ['平行：共面，无公共点', '相交：共面，唯一公共点', '异面：不共面，无公共点（既不平行也不相交）', '判定异面：反证法，假设共面推出矛盾；或利用过平面内一点与平面外一点的直线，与平面内不经过该点的直线异面'] },
        { type: 'heading', text: '二、直线与平面的位置关系' },
        { type: 'keypoint', label: '线面关系', text: '<strong>直线在平面内</strong>：直线上的所有点都在平面内，有无数公共点（a⊂α）。<br><strong>直线与平面相交</strong>：直线与平面有且只有一个公共点（a∩α=A）。<br><strong>直线与平面平行</strong>：直线与平面没有公共点，记作 a∥α。<br>三种情况对应公共点个数为“无数、一、零”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="110" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">在平面内</text><polygon points="40,200 180,160 260,200 120,240" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><line x1="70" y1="195" x2="230" y2="195" stroke="#2b5b9e" stroke-width="3"/><text x="110" y="272" font-size="14" fill="#33536e" text-anchor="middle">无数公共点</text><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">相交</text><polygon points="270,200 410,160 490,200 350,240" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><line x1="370" y1="90" x2="370" y2="210" stroke="#2b5b9e" stroke-width="3"/><circle cx="370" cy="200" r="5" fill="#e05d44"/><text x="340" y="272" font-size="14" fill="#33536e" text-anchor="middle">唯一公共点</text><text x="560" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">平行</text><polygon points="480,200 620,160 660,185 540,225" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><line x1="520" y1="120" x2="620" y2="120" stroke="#e05d44" stroke-width="3" stroke-dasharray="6 4"/><text x="560" y="272" font-size="14" fill="#33536e" text-anchor="middle">无公共点</text></svg>', caption: '图2　直线与平面三种位置关系：在内（无数公共点）、相交（唯一公共点）、平行（无公共点，红色虚线表示线在面外）。' },
        { type: 'paragraph', text: '直线与平面相交时，交点称为直线与平面的交点。直线在平面内是“线在面中”的特殊情形，它与线面平行、线面相交并列构成直线与平面位置关系的完整分类。判断线面关系，核心就是看公共点的个数。' },
        { type: 'heading', text: '三、平面与平面的位置关系' },
        { type: 'keypoint', label: '面面关系', text: '<strong>两个平面平行</strong>：没有公共点，记作 α∥β。<br><strong>两个平面相交</strong>：有一条公共直线，记作 α∩β=a。<br>平面与平面的位置关系只有这两种，由公共点情况（无公共点 / 有一条公共直线）决定。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="170" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">平行</text><polygon points="60,110 260,110 260,160 60,160" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><polygon points="60,200 260,200 260,250 60,250" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2.5"/><text x="160" y="278" font-size="14" fill="#33536e" text-anchor="middle">无公共点</text><text x="480" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">相交</text><polygon points="360,160 560,120 640,160 440,200" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><polygon points="360,160 440,200 480,170 400,130" fill="#dbe9fb" stroke="#4a7de0" stroke-width="2.5"/><line x1="360" y1="160" x2="640" y2="160" stroke="#e05d44" stroke-width="3.5"/><text x="500" y="242" font-size="14" fill="#33536e" text-anchor="middle">交于一条公共直线</text></svg>', caption: '图3　平面与平面两种位置关系：平行（无公共点）、相交（交于红色公共直线）。' },
        { type: 'list', items: ['平行：无公共点（α∥β）', '相交：有一条公共直线（α∩β=a）', '不存在“只有一个公共点”的面面关系：两平面若有公共点必在交线上，故公共点有无数个'] },
        { type: 'example', label: '例题1', text: '在正方体 ABCD-A₁B₁C₁D₁ 中，判断下列位置关系：(1) 棱 AB 与棱 CC₁；(2) 棱 AB 与棱 CD；(3) 面 ABCD 与面 A₁B₁C₁D₁。<br><br><strong>解</strong>：(1) AB 在底面、CC₁ 是侧棱，二者既不平行也不相交且不在同一平面内，故 AB 与 CC₁ 是<strong>异面直线</strong>；(2) AB 与 CD 在同一底面内且方向相同、无公共点，故 AB∥CD（平行）；(3) 上下底面没有公共点，故面 ABCD 与面 A₁B₁C₁D₁<strong>平行</strong>。' },
        { type: 'example', label: '例题2', text: '已知 a⊂α，点 P∈α，点 Q∉α，判断直线 PQ 与直线 a 的位置关系。<br><br><strong>解</strong>：点 P 在平面 α 内，点 Q 在平面 α 外，直线 a 在平面 α 内。直线 PQ 经过平面内一点 P 和平面外一点 Q，而直线 a 在平面 α 内且不经过点 P（若 a 经过 P 则 a、PQ 相交于 P，属相交），故 PQ 与 a 不同在任一平面内，且它们既不平行也不相交，所以 PQ 与 a 是<strong>异面直线</strong>。' },
        { type: 'table', headers: ['对象', '位置关系', '公共点情况'], rows: [['直线与直线', '平行 / 相交 / 异面', '无数 / 唯一 / 无'], ['直线与平面', '在内 / 相交 / 平行', '无数 / 唯一 / 无'], ['平面与平面', '平行 / 相交', '无 / 一条公共直线']] },
        { type: 'tip', label: '提示', text: '判断空间位置关系的一般步骤：<br>① 先看能否找到一个平面同时包含两条直线（共面则只可能是平行或相交）；<br>② 不能共面则为异面；<br>③ 线面、面面关系统一用“公共点个数”来划分：无数、一个、零个。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['线线：平行（共面无公共点）、相交（共面唯一公共点）、异面（不共面无公共点）', '线面：在内（无数公共点）、相交（唯一公共点）、平行（无公共点）', '面面：平行（无公共点）、相交（一条公共直线）', '异面直线既不平行也不相交，且不在同一平面内', '判断关系核心看公共点个数与是否共面'] },
        { type: 'paragraph', text: '空间点、线、面的位置关系是立体几何的核心内容。记住：线线有平行、相交、异面三类；线面有在内、相交、平行三种；面面有平行、相交两种。异面直线是空间特有的关系，判断时要特别注意“是否共面”。结合图形与集合语言，就能准确描述和论证各类位置关系。' }
      ],
      exercises: [
        { type: 'choice', question: '关于异面直线，下列说法正确的是？', options: ['异面直线没有公共点且在同一平面内', '异面直线既不平行也不相交', '异面直线一定互相垂直', '异面直线必不共面且互相平行'], answer: '异面直线既不平行也不相交', explanation: '异面直线是指不同在任何一个平面内的两条直线，它们既不平行也不相交，没有公共点。选项说其在同一平面内错误；异面直线未必垂直；异面直线不可能平行（平行则共面）。故正确表述是“既不平行也不相交”。' },
        { type: 'choice', question: '一条直线与一个平面的位置关系共有几种？', options: ['两种', '三种', '四种', '五种'], answer: '三种', explanation: '直线与平面的位置关系按公共点个数分为三种：直线在平面内（有无数公共点）、直线与平面相交（有且只有一个公共点）、直线与平面平行（没有公共点）。因此共有三种位置关系，对应三种公共点情况。' },
        { type: 'fill', question: '两个平面没有公共点，则这两个平面的位置关系是 ____（填“平行”或“相交”）。', answer: '平行|互相平行', explanation: '平面与平面的位置关系由公共点情况决定：没有公共点时两平面平行；有一条公共直线时两平面相交。题目给出两平面无公共点，因此它们互相平行。这是面面位置关系判断的基本依据。' },
        { type: 'fill', question: '在正方体 ABCD-A₁B₁C₁D₁ 中，直线 AB 与 C₁D₁ 的位置关系是 ____（填“平行”“相交”或“异面”）。', answer: '平行', explanation: '在正方体中，AB 位于底面 ABCD，C₁D₁ 位于顶面 A₁B₁C₁D₁，二者方向相同、所在平面平行且不相交，因此 AB 与 C₁D₁ 互相平行。属于直线与直线位置关系中的“平行”情形（共面且无公共点）。' },
        { type: 'choice', question: '下列情形中，表示直线与平面相交的是？', options: ['直线上有两点在平面内', '直线与平面有且只有一个公共点', '直线与平面没有公共点', '直线在平面内'], answer: '直线与平面有且只有一个公共点', explanation: '直线与平面相交的充要条件是它们有且只有一个公共点。直线上有两点在平面内时整条直线在平面内（线在面内），有无数公共点；直线与平面无公共点时二者平行；直线在平面内同样不是相交。故只有“唯一公共点”表示相交。' }
      ]
    }

  );
})();
