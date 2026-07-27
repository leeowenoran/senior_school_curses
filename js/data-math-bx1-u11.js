/* ============================================================
 * 高一数学 · 必修 第一册 · 第五章 三角函数
 * 第18课时：任意角和弧度制（人教A版 §5.1）
 * 第19课时：三角函数的概念（人教A版 §5.2）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;
  v.points.push(

    /* ---------------- 第18课时 任意角和弧度制 ---------------- */
    {
      id: 'bx1-u11-l1',
      name: '任意角和弧度制',
      chapter: '第五章 三角函数 · 5.1',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、任意角' },
        { type: 'paragraph', text: '初中只研究 0°~360° 的角，但旋转可以超过一圈或反向旋转。用“旋转”来定义角，就得到了任意角。' },
        { type: 'keypoint', label: '重点·任意角', text: '一条射线绕端点旋转形成的图形叫<strong>角</strong>。按旋转方向：<strong>逆时针</strong>为正角，<strong>顺时针</strong>为负角，不旋转为零角。这样角可取任意实数度量。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 190" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="190" fill="#eef4fc"/><circle cx="340" cy="110" r="70" fill="none" stroke="#999" stroke-width="1.5"/><line x1="340" y1="110" x2="340" y2="40" stroke="#2b5b9e" stroke-width="3"/><path d="M340 110 L410 110 A70 70 0 0 1 410 150" fill="none" stroke="#e05d44" stroke-width="2.5"/><text x="340" y="35" font-size="14" fill="#2b5b9e" text-anchor="middle">始边(向上)</text><text x="430" y="135" font-size="14" fill="#c0392b" text-anchor="middle">逆时针→正角</text></svg>', caption: '图1　角由旋转产生：逆时针为正、顺时针为负、不转为0。' },
        { type: 'list', items: ['正角：逆时针旋转', '负角：顺时针旋转', '零角：没有旋转', '终边相同角：α + k·360°（k∈Z）'] },
        { type: 'heading', text: '二、象限角' },
        { type: 'keypoint', label: '重点·象限角', text: '把角的顶点与原点重合、始边与 x 轴正半轴重合，<strong>终边落在第几象限</strong>，就叫第几象限角。终边落在坐标轴上的角<strong>不属于任何象限</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><line x1="100" y1="120" x2="580" y2="120" stroke="#888" stroke-width="1.5"/><line x1="340" y1="40" x2="340" y2="200" stroke="#888" stroke-width="1.5"/><text x="470" y="80" font-size="14" fill="#2b5b9e">第一象限</text><text x="210" y="80" font-size="14" fill="#2b5b9e">第二象限</text><text x="210" y="180" font-size="14" fill="#2b5b9e">第三象限</text><text x="470" y="180" font-size="14" fill="#2b5b9e">第四象限</text><text x="340" y="125" font-size="12" fill="#888">O</text></svg>', caption: '图2　象限角：终边所在象限决定角的“归属”，坐标轴上的角不算象限角。' },
        { type: 'example', label: '例题1', text: '判断 390° 是第几象限角。<br><br><strong>解</strong>：390° = 360° + 30°，与 30° <strong>终边相同</strong>。30° 在第一象限，故 390° 是<strong>第一象限角</strong>。' },
        { type: 'heading', text: '三、弧度制' },
        { type: 'keypoint', label: '重点·弧度制', text: '用<strong>弧长与半径的比值</strong>度量角叫弧度制：<strong>|α| = l / r</strong>（l 为弧长，r 为半径）。关键换算：<strong>180° = π rad</strong>，故 360° = 2π rad，1° = π/180 rad，1 rad ≈ 57.3°。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="170" fill="#eef4fc"/><path d="M120 130 A70 70 0 0 1 190 60" fill="none" stroke="#2b5b9e" stroke-width="3"/><line x1="120" y1="130" x2="120" y2="40" stroke="#999" stroke-width="1.5"/><line x1="120" y1="130" x2="260" y2="130" stroke="#999" stroke-width="1.5"/><text x="120" y="150" font-size="13" fill="#1a3a5c">O</text><text x="190" y="100" font-size="13" fill="#2b5b9e">弧长 l</text><text x="280" y="70" font-size="14" fill="#c0392b">弧度 |α| = l/r</text></svg>', caption: '图3　弧度定义：角 α 的弧度 = 对应弧长 l 与半径 r 之比。' },
        { type: 'example', label: '例题2', text: '将 60°、90° 化为弧度。<br><br><strong>解</strong>：60° = 60 × π/180 = <strong>π/3 rad</strong>；90° = 90 × π/180 = <strong>π/2 rad</strong>。' },
        { type: 'heading', text: '四、弧长与扇形面积' },
        { type: 'table', headers: ['公式', '角度制', '弧度制'], rows: [['弧长', 'l = nπr/180', 'l = |α|·r'], ['扇形面积', 'S = nπr²/360', 'S = ½|α|·r²'], ['换算', '180°=π rad', '—']] },
        { type: 'warn', label: '易错', text: '三角计算中高频失误：①<strong>角度与弧度混用</strong>，同一式子既写 30° 又写 π/6（须统一，建议函数计算用弧度）；②<strong>忘记 180°=π rad</strong> 导致换算系数错；③<strong>扇形面积公式记混</strong>，弧度制下是 ½|α|r²（不是 αr² 也不是 ½lr 的误写，实际 ½lr 也对，因 l=|α|r）。' },
        { type: 'tip', label: '记忆', text: '弧度制换算记住“<strong>180°=π</strong>”这一个锚点：度→弧度乘 π/180，弧度→度乘 180/π。做三角函数题时<strong>统一用弧度</strong>，能避免单位混乱。终边相同角记“<strong>±360° 的整数倍</strong>”（弧度下是 ±2πk），是同角等价的核心。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['任意角：逆时针正、顺时针负、不转为0', '终边相同角：α + k·360°（k∈Z）', '象限角看终边所在象限（轴上角非象限角）', '弧度 |α|=l/r，180°=π rad', '弧长 l=|α|r，扇形 S=½|α|r²'] },
        { type: 'reading', text: '弧度制并不带“度”这样的单位，因为它本质上是两个长度的比值（无量纲）。在高等数学和物理中，所有三角函数、微积分公式都默认使用弧度，因为只有在弧度下才有简洁的导数公式（如 (sin x)′ = cos x）。养成“看到三角公式先确认是弧度”的习惯，能避免大量低级错误。' }
      ],
      exercises: [
        { type: 'choice', question: '390° 是第几象限角？', options: ['第一象限', '第二象限', '第三象限', '第四象限'], answer: '第一象限', explanation: '390°=360°+30°，与 30° 终边相同。30° 的终边在第一象限，故 390° 是第一象限角。' },
        { type: 'fill', question: '60° 用弧度表示为 ____ rad。', answer: 'π/3|π/3', explanation: '角度转弧度需乘以 π/180：60° = 60 × (π/180) = π/3 rad。这一步利用了 180° = π rad 的基本换算关系。' },
        { type: 'choice', question: '下列角中，终边在坐标轴上（非象限角）的是？', options: ['30°', '90°', '120°', '200°'], answer: '90°', explanation: '90° 的终边落在 y 轴正半轴上，属于坐标轴，不是任何象限的角。其余 30°、120°、200° 分别在一、二、三象限。故选 90°。' },
        { type: 'fill', question: '弧长公式（弧度制）l = ____（用 |α| 与半径 r 表示）。', answer: '|α|·r|α r', explanation: '弧度制下，圆心角 α 的弧长 l = |α|·r（|α| 为弧度值，r 为半径）。' },
        { type: 'choice', question: '180° 等于多少弧度？', options: ['π/2', 'π', '2π', '3π/2'], answer: 'π', explanation: '弧度制基本换算：180° = π rad（360° = 2π rad）。故选 π。' }
      ]
    },

    /* ---------------- 第19课时 三角函数的概念 ---------------- */
    {
      id: 'bx1-u11-l2',
      name: '三角函数的概念',
      chapter: '第五章 三角函数 · 5.2',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、单位圆定义法' },
        { type: 'paragraph', text: '三角函数的定义不再依赖“直角三角形”，而是用单位圆（半径为 1 的圆）上点的坐标，这样任意大小的角都有定义。' },
        { type: 'keypoint', label: '重点·单位圆定义', text: '设角 α 的终边与<strong>单位圆</strong>交于点 P(x, y)，则：<br><strong>sin α = y</strong>，<br><strong>cos α = x</strong>，<br><strong>tan α = y/x</strong>（x ≠ 0）。<br>这三个比值与所取点 P 在终边上的位置无关，只由角 α 决定。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><circle cx="340" cy="120" r="80" fill="none" stroke="#999" stroke-width="1.5"/><line x1="240" y1="120" x2="440" y2="120" stroke="#888" stroke-width="1"/><line x1="340" y1="20" x2="340" y2="200" stroke="#888" stroke-width="1"/><line x1="340" y1="120" x2="404" y2="76" stroke="#2b5b9e" stroke-width="3"/><circle cx="404" cy="76" r="6" fill="#e05d44"/><text x="404" y="68" font-size="14" fill="#c0392b" text-anchor="middle">P(x,y)</text><text x="372" y="100" font-size="14" fill="#1a3a5c">r=1</text></svg>', caption: '图1　单位圆定义：sinα=y、cosα=x、tanα=y/x（x≠0）。' },
        { type: 'list', items: ['sin α = 终边纵坐标 y', 'cos α = 终边横坐标 x', 'tan α = y/x（x≠0）', '定义与 P 在终边上的位置无关'] },
        { type: 'heading', text: '二、同角三角函数基本关系' },
        { type: 'keypoint', label: '重点·基本关系', text: '由单位圆 x² + y² = 1 直接得到：<br><strong>平方关系</strong>：<strong>sin²α + cos²α = 1</strong>；<br><strong>商数关系</strong>：<strong>tan α = sin α / cos α</strong>（cos α ≠ 0）。<br>这是三角函数化简与求值的根基。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="160" fill="#eef4fc"/><rect x="50" y="55" width="270" height="52" rx="8" fill="#2b5b9e"/><text x="185" y="88" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">sin²α+cos²α=1</text><rect x="360" y="55" width="270" height="52" rx="8" fill="#4a7de0"/><text x="495" y="88" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">tanα=sinα/cosα</text><text x="340" y="135" font-size="14" fill="#33536e" text-anchor="middle">两条基本关系贯穿所有三角化简</text></svg>', caption: '图2　同角三角函数两大基本关系：平方关系与商数关系。' },
        { type: 'example', label: '例题1', text: '已知 sin α = 3/5，α 在第一象限，求 cos α、tan α。<br><br><strong>解</strong>：由 sin²α+cos²α=1 得 cos α = √(1−(3/5)²) = 4/5（第一象限取正）；tan α = sinα/cosα = (3/5)/(4/5) = 3/4。' },
        { type: 'heading', text: '三、各象限的符号' },
        { type: 'keypoint', label: '重点·符号规律', text: '三角函数在各象限的正负号由终边坐标 x、y 决定：<br>① <strong>第一象限</strong>：sin、cos、tan 全正；<br>② <strong>第二象限</strong>：仅 sin 正；<br>③ <strong>第三象限</strong>：仅 tan 正；<br>④ <strong>第四象限</strong>：仅 cos 正。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 190" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="190" fill="#eef4fc"/><line x1="100" y1="110" x2="580" y2="110" stroke="#888" stroke-width="1.5"/><line x1="340" y1="30" x2="340" y2="190" stroke="#888" stroke-width="1.5"/><text x="460" y="80" font-size="14" fill="#5a7a2a">一：全正</text><text x="220" y="80" font-size="14" fill="#5a7a2a">二：sin+</text><text x="220" y="170" font-size="14" fill="#5a7a2a">三：tan+</text><text x="460" y="170" font-size="14" fill="#5a7a2a">四：cos+</text></svg>', caption: '图3　三角函数值符号：一全正、二正弦、三正切、四余弦。' },
        { type: 'example', label: '例题2', text: '判断 sin 200°·cos 200° 的符号。<br><br><strong>解</strong>：200° 在第三象限，sin 为负、cos 为负，二者相乘为<strong>正</strong>。' },
        { type: 'heading', text: '四、关系式与符号对照' },
        { type: 'table', headers: ['象限', 'sin α', 'cos α', 'tan α'], rows: [['一', '正', '正', '正'], ['二', '正', '负', '负'], ['三', '负', '负', '正'], ['四', '负', '正', '负']] },
        { type: 'warn', label: '易错', text: '常见失误：①<strong>忽略符号</strong>，已知 sin α 求 cos α 时忘记开方后按象限取舍正负；②<strong>tan α = y/x 中 x=0 无定义</strong>（终边在 y 轴上时 tan 不存在）；③<strong>平方关系开方带 ±</strong>，必须结合角所在象限确定。' },
        { type: 'tip', label: '记忆', text: '符号记忆口诀<strong>“一全正、二正弦、三正切、四余弦”</strong>。已知一角某三角函数值求其余量时，先用平方关系 sin²+cos²=1，再用商数关系求 tan；<strong>正负由象限定</strong>，没给象限就保留 ± 两种可能。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['单位圆：sinα=y, cosα=x, tanα=y/x', '平方关系 sin²α+cos²α=1', '商数关系 tanα=sinα/cosα', '符号：一全正、二正弦、三正切、四余弦', '开方求值时正负由所在象限决定'] },
        { type: 'reading', text: '单位圆定义的精妙之处在于：它把“角的大小”与“点的坐标”永久绑定，使三角函数成为定义在全体实数上的函数（而不仅是锐角）。后续诱导公式、周期性、图象，都可以从“终边绕单位圆旋转”这一几何直觉推出，因此牢固掌握单位圆定义，是学好整个三角章节的钥匙。' }
      ],
      exercises: [
        { type: 'choice', question: '根据单位圆定义，sin α 等于？', options: ['终边横坐标 x', '终边纵坐标 y', 'y/x', 'x/y'], answer: '终边纵坐标 y', explanation: '单位圆定义：角 α 终边与单位圆交点 P(x,y)，则 sinα=y（纵坐标）、cosα=x（横坐标）、tanα=y/x。故 sinα 等于纵坐标 y。' },
        { type: 'fill', question: '同角三角函数平方关系：sin²α + ____ = 1。', answer: 'cos²α', explanation: '由单位圆 x²+y²=1 且 x=cosα、y=sinα，得 sin²α+cos²α=1。故填空为 cos²α。' },
        { type: 'choice', question: 'tan α 有意义的前提是？', options: ['sin α ≠ 0', 'cos α ≠ 0', 'α 在第一象限', 'α 为锐角'], answer: 'cos α ≠ 0', explanation: 'tanα = sinα/cosα，分母不能为 0，故 cosα ≠ 0（即终边不在 y 轴上）时 tanα 有意义。故选“cos α ≠ 0”。' },
        { type: 'fill', question: '已知 sin α = 3/5 且 α 在第一象限，则 cos α = ____。', answer: '4/5', explanation: '由 sin²α+cos²α=1，cosα=±√(1−(3/5)²)=±4/5；α 在第一象限，cosα 为正，故 cosα=4/5。' },
        { type: 'choice', question: 'sin 200°·cos 200° 的符号是？', options: ['正', '负', '零', '不确定'], answer: '正', explanation: '200° 在第三象限，sinα<0、cosα<0，两负数相乘为正，故 sin200°·cos200°>0，符号为正。' }
      ]
    }

  );
})();
