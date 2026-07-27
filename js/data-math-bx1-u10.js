/* ============================================================
 * 高一数学 · 必修 第一册 · 第四章 指数函数与对数函数
 * 第17课时：函数的应用（二）— 零点、二分法与函数模型（人教A版 §4.5）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;
  v.points.push(

    /* ---------------- 第17课时 函数的应用（二） ---------------- */
    {
      id: 'bx1-u10-l1',
      name: '函数的应用（二）— 零点与二分法',
      chapter: '第四章 指数函数与对数函数 · 4.5',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、函数零点' },
        { type: 'paragraph', text: '求方程 f(x) = 0 的解，等价于找函数图象与 x 轴的交点。这个交点的“横坐标”就是函数的零点，是从“形”到“数”的桥梁。' },
        { type: 'keypoint', label: '重点·零点定义', text: '使 <strong>f(x) = 0</strong> 成立的实数 x 叫做函数 y = f(x) 的<strong>零点</strong>。<br>注意：<strong>零点是“数”（横坐标），不是点</strong>。函数有零点 ⇔ 方程 f(x)=0 有实根 ⇔ 图象与 x 轴有交点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><line x1="80" y1="160" x2="600" y2="160" stroke="#888" stroke-width="2.5"/><path d="M140 160 Q300 40 460 160" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="215" cy="160" r="6" fill="#e05d44"/><circle cx="385" cy="160" r="6" fill="#e05d44"/><text x="215" y="185" font-size="14" fill="#c0392b" text-anchor="middle">x₁（零点）</text><text x="385" y="185" font-size="14" fill="#c0392b" text-anchor="middle">x₂（零点）</text></svg>', caption: '图1　零点就是图象与 x 轴交点的横坐标（图中两个红点）。' },
        { type: 'list', items: ['零点是实数 x，使 f(x)=0', '有零点 ⇔ 方程有实根 ⇔ 图象交 x 轴', '求零点即解 f(x)=0', '二次函数零点个数由 Δ 决定'] },
        { type: 'heading', text: '二、零点存在性定理' },
        { type: 'keypoint', label: '重点·存在性定理', text: '若函数 y = f(x) 在闭区间 [a, b] 上<strong>图象连续</strong>，且 <strong>f(a)·f(b) &lt; 0</strong>（两端函数值异号），则在 (a, b) 内<strong>至少存在一个零点</strong> c，使 f(c) = 0。这是判断零点存在的充分条件。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><path d="M140 60 Q340 200 540 90" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="140" cy="60" r="6" fill="#5a7a2a"/><circle cx="540" cy="90" r="6" fill="#e05d44"/><text x="140" y="45" font-size="14" fill="#5a7a2a" text-anchor="middle">f(a)&gt;0</text><text x="540" y="75" font-size="14" fill="#c0392b" text-anchor="middle">f(b)&lt;0</text><text x="340" y="180" font-size="14" fill="#33536e" text-anchor="middle">一正一负跨过 x 轴 ⇒ 中间必有零点</text></svg>', caption: '图2　零点存在性定理：连续且两端异号，区间内必有零点。' },
        { type: 'example', label: '例题1', text: '判断 f(x) = x³ − 1 在区间 (0, 2) 内是否有零点。<br><br><strong>解</strong>：f(x) 连续，f(0) = −1 &lt; 0，f(2) = 7 &gt; 0，f(0)·f(2) &lt; 0，故在 (0, 2) 内<strong>至少存在一个零点</strong>（实际为 x = 1）。' },
        { type: 'heading', text: '三、二分法' },
        { type: 'keypoint', label: '重点·二分法', text: '对于变号零点，<strong>二分法</strong>用“不断取中点”逼近零点：<br>① 取区间中点 c = (a+b)/2；<br>② 若 f(c)=0 则 c 为零点；若 f(a)·f(c)&lt;0 则零点在 (a,c)，令 b=c；否则在 (c,b)，令 a=c；<br>③ 重复至区间长度小于精度要求。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="170" fill="#eef4fc"/><line x1="80" y1="130" x2="600" y2="130" stroke="#888" stroke-width="2"/><line x1="100" y1="110" x2="540" y2="110" stroke="#2b5b9e" stroke-width="4"/><line x1="320" y1="110" x2="540" y2="110" stroke="#e05d44" stroke-width="4"/><line x1="430" y1="110" x2="540" y2="110" stroke="#5a7a2a" stroke-width="4"/><text x="320" y="95" font-size="13" fill="#2b5b9e" text-anchor="middle">中点1</text><text x="430" y="95" font-size="13" fill="#c0392b" text-anchor="middle">中点2</text><text x="340" y="158" font-size="14" fill="#33536e" text-anchor="middle">每次取中点，区间长度减半，逐步逼近零点</text></svg>', caption: '图3　二分法：反复取中点，区间长度每次减半。' },
        { type: 'example', label: '例题2', text: '用二分法求 f(x)=x²−2 在 (1,2) 内的正根近似值（精度 0.5）。<br><br><strong>解</strong>：f(1)=−1, f(2)=2，中点 1.5，f(1.5)=0.25&gt;0，故根在 (1,1.5)，区间长 0.5 已达精度，近似根可取 <strong>1.25 或 1.5 区间</strong>（更精确继续二分）。' },
        { type: 'heading', text: '四、函数模型的应用' },
        { type: 'table', headers: ['模型', '形式', '适用场景'], rows: [['指数模型', 'y=a·bˣ', '增长/衰减（复利、衰变）'], ['对数模型', 'y=a+b·lnx', '增速放缓（学习曲线）'], ['幂模型', 'y=a·xᵏ', '尺度关系（面积、引力）']] },
        { type: 'warn', label: '易错', text: '两大误区：①<strong>把定理当充要条件</strong>——f(a)·f(b)&lt;0 只保证“至少一个”零点，不是唯一；且“有零点”也未必两端异号（如 x² 在 [−1,1] 有零点但两端同号）。②<strong>二分法只适用于变号零点</strong>，偶次重根（如 x²=0）两端同号，二分法失效，须换方法。' },
        { type: 'tip', label: '记忆', text: '判零点先想三件事：<strong>解方程 f(x)=0、看图象交 x 轴、用存在性定理验区间</strong>。二分法口诀“<strong>取中点、判异号、缩半边</strong>”，每次区间减半，是求近似根最稳的办法。注意它要求函数连续且两端函数值异号。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['零点是 f(x)=0 的横坐标（数不是点）', '有零点 ⇔ 方程有根 ⇔ 图象交 x 轴', '存在性定理：连续+两端异号 ⇒ 有零点', '二分法：取中点、判异号、缩半边', '二分法只处理变号零点（两端异号）'] },
        { type: 'reading', text: '零点存在性定理给出的是“存在性”而非“唯一性”，也不要求端点必须异号才有零点——这两点最易在选择题中设陷阱。例如 f(x)=x²−1 在 [−2,2] 上 f(−2)·f(2)&gt;0 但仍有两个零点，因为零点在内部且函数“两次穿越”x 轴。因此用定理只能“证有”，要“证唯一”还需结合单调性。' }
      ],
      exercises: [
        { type: 'choice', question: '函数 f(x) = x² − 1 的零点是？', options: ['1', '−1', '1 和 −1', '(1,0) 和 (−1,0)'], answer: '1 和 −1', explanation: '零点令 f(x)=0 即 x²−1=0，得 x=1 或 x=−1。零点是实数（横坐标），不是点，故选“1 和 −1”。' },
        { type: 'fill', question: '若函数 f(x) 在 [a,b] 连续且 f(a)·f(b) ____ 0，则 (a,b) 内至少存在一个零点。', answer: '<', explanation: '零点存在性定理：连续且两端函数值异号，即 f(a)·f(b) < 0 时，区间内至少有 1 个零点。故填“<”。' },
        { type: 'choice', question: '二分法适用的零点类型是？', options: ['任意零点', '变号零点（两端异号）', '重根零点', '所有实根'], answer: '变号零点（两端异号）', explanation: '二分法要求函数在区间两端函数值异号（变号零点），才能通过“取中点判异号”不断缩小区间。偶次重根（如 x²=0）两端同号，二分法无法使用。故选“变号零点（两端异号）”。' },
        { type: 'fill', question: 'f(x) 在 [a,b] 连续、f(a)=3、f(b)=−2，则在 (a,b) 内 ____（填“必有”或“必无”）零点。', answer: '必有', explanation: 'f(a)·f(b)=3×(−2)=−6<0，且函数连续，由零点存在性定理可知 (a,b) 内至少有一个零点。故填“必有”。' },
        { type: 'choice', question: '关于零点存在性定理，说法正确的是？', options: ['f(a)·f(b)<0 是唯一有零点的条件', '有零点则必 f(a)·f(b)<0', 'f(a)·f(b)<0 只保证至少一个零点', '定理要求函数不连续'], answer: 'f(a)·f(b)<0 只保证至少一个零点', explanation: '定理是充分非必要：f(a)·f(b)<0 只保证“至少一个”零点，不唯一，也不要求“有零点就必须异号”（如 x² 在 [−1,1] 有零点但两端同号）。且定理要求函数连续。故只有“f(a)·f(b)<0 只保证至少一个零点”正确。' }
      ]
    }

  );
})();
