/* ============================================================
 * 高一数学 · 必修 第一册 · 第五章 三角函数
 * 第20课时：诱导公式（人教A版 §5.3）
 * 第21课时：三角函数的图象与性质（人教A版 §5.4）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;
  v.points.push(

    /* ---------------- 第20课时 诱导公式 ---------------- */
    {
      id: 'bx1-u12-l1',
      name: '诱导公式',
      chapter: '第五章 三角函数 · 5.3',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、诱导公式的思想' },
        { type: 'paragraph', text: '诱导公式的核心，是利用角终边的<strong>对称性</strong>，把任意角的三角函数转化为锐角三角函数，从而方便求值与化简。' },
        { type: 'keypoint', label: '重点·对称来源', text: '角的终边关于 <strong>x 轴、y 轴、原点</strong> 对称时，其三角函数值之间存在确定关系。常用基础：<br>① 关于原点对称（α 与 −α）：sin(−α) = −sinα，cos(−α) = cosα；<br>② 关于 y 轴对称（α 与 π−α）：sin(π−α) = sinα，cos(π−α) = −cosα。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 190" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="190" fill="#eef4fc"/><circle cx="340" cy="100" r="70" fill="none" stroke="#999" stroke-width="1.5"/><line x1="240" y1="100" x2="440" y2="100" stroke="#888" stroke-width="1"/><line x1="340" y1="30" x2="340" y2="170" stroke="#888" stroke-width="1"/><line x1="340" y1="100" x2="395" y2="56" stroke="#2b5b9e" stroke-width="3"/><line x1="340" y1="100" x2="395" y2="144" stroke="#e05d44" stroke-width="3"/><text x="405" y="52" font-size="13" fill="#2b5b9e">α</text><text x="405" y="160" font-size="13" fill="#c0392b">−α</text><text x="340" y="180" font-size="13" fill="#33536e" text-anchor="middle">α 与 −α 关于 x 轴对称</text></svg>', caption: '图1　α 与 −α 关于 x 轴对称：正弦变号、余弦不变。' },
        { type: 'list', items: ['sin(−α) = −sinα，cos(−α) = cosα', 'sin(π−α) = sinα，cos(π−α) = −cosα', 'sin(π+α) = −sinα，cos(π+α) = −cosα', 'sin(π/2−α) = cosα，cos(π/2−α) = sinα'] },
        { type: 'heading', text: '二、常用公式汇总' },
        { type: 'keypoint', label: '重点·公式集', text: '除上述外，还常用：<br>sin(π/2 + α) = cosα，cos(π/2 + α) = −sinα；<br>sin(2π − α) = −sinα，cos(2π − α) = cosα；<br>tan(π ± α) = ±tanα，tan(−α) = −tanα。<br>它们都可统一在口诀之下。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="150" fill="#eef4fc"/><rect x="60" y="50" width="240" height="50" rx="8" fill="#2b5b9e"/><text x="180" y="82" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">sin(π−α)=sinα</text><rect x="380" y="50" width="240" height="50" rx="8" fill="#4a7de0"/><text x="500" y="82" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">cos(π/2−α)=sinα</text><text x="340" y="125" font-size="14" fill="#33536e" text-anchor="middle">所有公式都服务于“化归为锐角”</text></svg>', caption: '图2　诱导公式把任意角三角函数“翻译”成锐角三角函数。' },
        { type: 'example', label: '例题1', text: '化简 sin(−30°)。<br><br><strong>解</strong>：由 sin(−α) = −sinα，得 sin(−30°) = −sin30° = <strong>−1/2</strong>。' },
        { type: 'heading', text: '三、口诀“奇变偶不变，符号看象限”' },
        { type: 'keypoint', label: '重点·口诀', text: '对形如 <strong>sin(π/2 · k ± α)</strong> 的公式：<br><strong>“奇变偶不变”</strong>：k 为奇数时函数名改变（sin↔cos，tan↔cot），k 为偶数时函数名不变；<br><strong>“符号看象限”</strong>：把 α 看作锐角，看原函数在对应象限的<strong>符号</strong>，即为结果符号。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="150" fill="#eef4fc"/><rect x="50" y="50" width="280" height="52" rx="8" fill="#5a7a2a"/><text x="190" y="83" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">奇变偶不变</text><rect x="350" y="50" width="280" height="52" rx="8" fill="#e05d44"/><text x="490" y="83" font-size="16" fill="#fff" font-weight="bold" text-anchor="middle">符号看象限</text><text x="340" y="128" font-size="14" fill="#33536e" text-anchor="middle">口诀两步：先定变不变，再定正负</text></svg>', caption: '图3　诱导公式口诀：奇变偶不变，符号看象限。' },
        { type: 'example', label: '例题2', text: '求 sin(5π/6)。<br><br><strong>解</strong>：5π/6 = π − π/6，由 sin(π−α)=sinα 得 sin(5π/6) = sin(π/6) = <strong>1/2</strong>。也可用口诀：π/2·2−π/6（偶不变名），π−α 在第二象限 sin 为正，故 = sin(π/6)=1/2。' },
        { type: 'heading', text: '四、常用公式对照' },
        { type: 'table', headers: ['原式', '结果', '说明'], rows: [['sin(−α)', '−sinα', 'x轴对称'], ['cos(−α)', 'cosα', 'x轴对称'], ['sin(π−α)', 'sinα', 'y轴对称'], ['cos(π−α)', '−cosα', 'y轴对称'], ['sin(π/2−α)', 'cosα', '互余']] },
        { type: 'warn', label: '易错', text: '两大失误：①<strong>符号判错</strong>，死记结果却不知符号来源，遇复杂角就乱；务必用“符号看象限”——把 α 当锐角判断原函数在目标象限的正负。②<strong>“变名”搞反</strong>，k 为奇数才 sin↔cos 互换，偶数不变；tan 的互余角用 cot（高中常直接保留 tan 与诱导结果）。' },
        { type: 'tip', label: '记忆', text: '诱导公式无需硬背几十个，记住<strong>“奇变偶不变，符号看象限”</strong>即可现场推导。实战步骤：先把角写成 π/2 的整数倍 ± α，判 k 奇偶定函数名，再把 α 当锐角看原函数在对应象限符号。熟练后所有诱导公式秒出。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['诱导公式源于终边的对称性', '基础：sin(−α)=−sinα, cos(−α)=cosα', 'π−α：sin 不变、cos 变号', '口诀：奇变偶不变，符号看象限', '目标：把任意角化为锐角三角函数'] },
        { type: 'reading', text: '“符号看象限”中把 α 看作锐角，是一种<strong>符号判定技巧</strong>而非真的限制 α 为锐角——它只是为了确定结果的正负号。真正理解可回到单位圆：对称变换改变了坐标的某个分量符号（如关于 x 轴对称令 y→−y，即 sin 变号），从而自然得到公式。几何直观加上口诀，是掌握诱导公式最稳的组合。' }
      ],
      exercises: [
        { type: 'choice', question: 'sin(−30°) 的值等于？', options: ['1/2', '−1/2', '√3/2', '−√3/2'], answer: '−1/2', explanation: '由诱导公式 sin(−α) = −sinα，sin(−30°) = −sin30° = −1/2。' },
        { type: 'fill', question: 'cos(−α) = ____（用 cosα 或 sinα 表示）。', answer: 'cosα', explanation: '余弦函数是偶函数，其图象关于 y 轴对称，对应角 −α 与 α 的终边横坐标相同，因此 cos(−α) = cosα。这与正弦不同：正弦会变号而余弦不变号。' },
        { type: 'choice', question: 'sin(5π/6) 的值为？', options: ['1/2', '−1/2', '√3/2', '−√3/2'], answer: '1/2', explanation: '5π/6 = π − π/6，由 sin(π−α)=sinα 得 sin(5π/6)=sin(π/6)=1/2。' },
        { type: 'fill', question: '根据口诀“奇变偶不变”，sin(π/2 + α) = ____（填 cosα 或 −cosα 或 sinα 等）。', answer: 'cosα', explanation: 'π/2+α 可看作 π/2 的 1 倍（奇数）加 α，故函数名改变：sin↔cos；再用“符号看象限”，α 为锐角时 π/2+α 在第二象限，sin 为正，故 sin(π/2+α)=cosα。' },
        { type: 'choice', question: '关于诱导公式口诀，正确的是？', options: ['奇变偶不变指角度变不变', '偶数次时函数名改变', '符号看象限是把 α 当锐角判原符号', '诱导公式只适用于锐角'], answer: '符号看象限是把 α 当锐角判原符号', explanation: '口诀“奇变偶不变”指 π/2 整数倍的系数奇偶决定函数名是否改变（非角度变不变），A、B 错；诱导公式适用于任意角，D 错；C 正确：符号看象限是把 α 暂当锐角，判断原函数在目标象限的符号。' }
      ]
    },

    /* ---------------- 第21课时 三角函数的图象与性质 ---------------- */
    {
      id: 'bx1-u12-l2',
      name: '三角函数的图象与性质',
      chapter: '第五章 三角函数 · 5.4',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、正弦函数图象（五点法）' },
        { type: 'paragraph', text: '画三角函数简图最常用“五点法”：抓住一个周期内决定图象形状的五个关键点，连成光滑曲线。' },
        { type: 'keypoint', label: '重点·五点法', text: '对 y = sin x，在一个周期 [0, 2π] 上取五个关键点：<br><strong>(0,0)、(π/2,1)、(π,0)、(3π/2,−1)、(2π,0)</strong>。<br>依次描点连成光滑曲线，即得正弦函数图象（波浪形）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><line x1="60" y1="110" x2="620" y2="110" stroke="#888" stroke-width="1.5"/><path d="M80 110 Q150 30 220 110 Q290 190 360 110 Q430 30 500 110 Q570 190 600 110" fill="none" stroke="#2b5b9e" stroke-width="3"/><circle cx="80" cy="110" r="4" fill="#e05d44"/><circle cx="150" cy="55" r="4" fill="#e05d44"/><circle cx="220" cy="110" r="4" fill="#e05d44"/><circle cx="290" cy="165" r="4" fill="#e05d44"/><circle cx="360" cy="110" r="4" fill="#e05d44"/><text x="340" y="190" font-size="13" fill="#33536e" text-anchor="middle">五点法：取峰、谷、三个零点连成正弦波</text></svg>', caption: '图1　正弦函数图象（五点法）：峰、谷与三个零点决定波形。' },
        { type: 'list', items: ['五点：(0,0)(π/2,1)(π,0)(3π/2,−1)(2π,0)', 'y=sinx 是周期 2π 的波浪线', 'y=cosx 可由 sin 左移 π/2 得到', 'y=tanx 周期为 π，有竖直渐近线'] },
        { type: 'heading', text: '二、余弦与正切图象' },
        { type: 'keypoint', label: '重点·余弦与正切', text: '<strong>余弦 y = cos x</strong>：五点 (0,1)、(π/2,0)、(π,−1)、(3π/2,0)、(2π,1)，图象也是周期 2π 的波浪，起点在峰值。<br><strong>正切 y = tan x</strong>：周期为 <strong>π</strong>，在 x = π/2 + kπ 处有<strong>竖直渐近线</strong>，图象被渐近线隔成一段段上升曲线。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="170" fill="#eef4fc"/><path d="M80 110 Q150 30 220 110 Q290 190 360 110" fill="none" stroke="#4a7de0" stroke-width="3"/><line x1="290" y1="40" x2="290" y2="180" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="4,3"/><text x="340" y="155" font-size="13" fill="#33536e" text-anchor="middle">余弦（蓝）波峰起；正切（红虚线为渐近线，周期π）</text></svg>', caption: '图2　余弦以峰值起笔；正切被渐近线切成多段、周期 π。' },
        { type: 'example', label: '例题1', text: '由 y = sin x 的图象，说出它的最大值、最小值与周期。<br><br><strong>解</strong>：最大值为 <strong>1</strong>（在 x = π/2 + 2kπ），最小值为 <strong>−1</strong>（在 x = 3π/2 + 2kπ），周期 <strong>T = 2π</strong>。' },
        { type: 'heading', text: '三、基本性质' },
        { type: 'keypoint', label: '重点·性质', text: '① <strong>周期性</strong>：sin、cos 周期 2π，tan 周期 π；<br>② <strong>奇偶性</strong>：sin、tan 为<strong>奇函数</strong>，cos 为<strong>偶函数</strong>；<br>③ <strong>单调性</strong>：sin 在 [−π/2, π/2] 递增，cos 在 [0, π] 递减；<br>④ <strong>值域</strong>：sin、cos 为 [−1, 1]，tan 为 R。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="150" fill="#eef4fc"/><rect x="50" y="50" width="180" height="50" rx="8" fill="#2b5b9e"/><text x="140" y="82" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">sin/cos: T=2π</text><rect x="250" y="50" width="160" height="50" rx="8" fill="#4a7de0"/><text x="330" y="82" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">tan: T=π</text><rect x="430" y="50" width="200" height="50" rx="8" fill="#5a7a2a"/><text x="530" y="82" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">值域 sin/cos∈[−1,1]</text></svg>', caption: '图3　周期与值域概览：sin/cos 同期 2π 且值域 [−1,1]，tan 周期 π 值域 R。' },
        { type: 'example', label: '例题2', text: '求 f(x) = 3 sin x 的值域。<br><br><strong>解</strong>：sin x ∈ [−1, 1]，乘以 3 得 3 sin x ∈ [−3, 3]，故值域为 <strong>[−3, 3]</strong>（振幅被放大为 3）。' },
        { type: 'heading', text: '四、三函数性质对照' },
        { type: 'table', headers: ['函数', '周期', '奇偶性', '值域'], rows: [['y = sin x', '2π', '奇', '[−1,1]'], ['y = cos x', '2π', '偶', '[−1,1]'], ['y = tan x', 'π', '奇', 'R']] },
        { type: 'warn', label: '易错', text: '图象与性质常见错：①<strong>周期记混</strong>，把 tan 的周期也写成 2π（实为 π）；②<strong>五点取错</strong>，余弦的五点起点是峰值 (0,1) 不是零点；③<strong>单调性区间写反</strong>，sin 在 [−π/2,π/2] 增、在 [π/2,3π/2] 减；④<strong>忽视渐近线</strong>，tan 在 x=π/2+kπ 无定义。' },
        { type: 'tip', label: '记忆', text: '记性质用“<strong>三函数三张表</strong>”：sin/cos 周期同为 2π、值域同为 [−1,1]，奇偶不同（sin 奇、cos 偶）；tan 周期 π、值域 R、奇。画简图一律用<strong>五点法</strong>，余弦记得“从波峰起笔”。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['五点法画 sin/cos 简图', 'sin/cos 周期 2π，tan 周期 π', 'sin、tan 奇，cos 偶', 'sin/cos 值域 [−1,1]，tan 值域 R', '余弦五点从 (0,1) 波峰起笔'] },
        { type: 'reading', text: '三角函数的图象把“周期性”直观展现：每平移一个周期，波形完全重合。这一性质在物理（波）、信号（傅里叶）中至关重要。注意 y = A sin(ωx+φ) 在后续会学习——它的振幅 A、角频率 ω、初相 φ 都直接改写我们这里的基础性质（周期变为 2π/|ω|、值域变为 [−A, A]），所以牢固掌握 y = sin x 的“母图象”是前提。' }
      ],
      exercises: [
        { type: 'choice', question: '函数 y = sin x 的周期是？', options: ['π', '2π', 'π/2', '4π'], answer: '2π', explanation: '正弦函数 y=sin x 的最小正周期为 2π，即 sin(x+2π)=sin x 恒成立。故选 2π。' },
        { type: 'fill', question: 'y = sin x 的最大值是 ____（填数值）。', answer: '1', explanation: '正弦函数的值域为 [−1,1]，故最大值为 1（在 x=π/2+2kπ 处取得）。' },
        { type: 'choice', question: '下列函数中为偶函数的是？', options: ['y = sin x', 'y = cos x', 'y = tan x', 'y = sin(2x)'], answer: 'y = cos x', explanation: 'cos(−x)=cos x，故 y=cos x 是偶函数；sin x、tan x、sin 2x 均满足 f(−x)=−f(x)，是奇函数。故选 y=cos x。' },
        { type: 'fill', question: '函数 y = tan x 的最小正周期为 ____（用 π 表示）。', answer: 'π', explanation: '正切函数 y=tan x 的最小正周期是 π，即 tan(x+π)=tan x。' },
        { type: 'choice', question: 'f(x) = 2 sin x 的值域是？', options: ['[−1,1]', '[−2,2]', '[0,2]', 'R'], answer: '[−2,2]', explanation: 'sin x∈[−1,1]，乘以 2 得 2 sin x∈[−2,2]，故值域为 [−2,2]（振幅被放大为 2）。' }
      ]
    }

  );
})();
