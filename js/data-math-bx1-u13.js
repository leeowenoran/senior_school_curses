/* ============================================================
 * 高一数学 · 必修 第一册 · 第五章 三角函数
 * 第22课时：三角恒等变换（人教A版 §5.5）
 * 第23课时：函数 y = A sin(ωx + φ)（人教A版 §5.6）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;
  v.points.push(

    /* ---------------- 第22课时 三角恒等变换 ---------------- */
    {
      id: 'bx1-u13-l1',
      name: '三角恒等变换',
      chapter: '第五章 三角函数 · 5.5',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、两角和与差公式' },
        { type: 'paragraph', text: '两角和差公式把“两个角的三角函数”与“单个角的三角函数”联系起来，是三角恒等变换的核心工具。' },
        { type: 'keypoint', label: '重点·和差公式', text: '<strong>正弦</strong>：sin(α±β) = sinαcosβ ± cosαsinβ；<br><strong>余弦</strong>：cos(α±β) = cosαcosβ ∓ sinαsinβ；<br><strong>正切</strong>：tan(α±β) = (tanα ± tanβ)/(1 ∓ tanα·tanβ)。<br>记忆：正弦“同号同构”、余弦“异号”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="150" fill="#eef4fc"/><rect x="40" y="50" width="280" height="52" rx="8" fill="#2b5b9e"/><text x="180" y="83" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">sin(α±β)=sinαcosβ±cosαsinβ</text><rect x="360" y="50" width="280" height="52" rx="8" fill="#4a7de0"/><text x="500" y="83" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">cos(α±β)=cosαcosβ∓sinαsinβ</text><text x="340" y="128" font-size="14" fill="#33536e" text-anchor="middle">正弦同号、余弦异号，是和差公式的关键</text></svg>', caption: '图1　两角和差公式：正弦同号同构、余弦中间异号。' },
        { type: 'list', items: ['sin(α+β)=sinαcosβ+cosαsinβ', 'sin(α−β)=sinαcosβ−cosαsinβ', 'cos(α+β)=cosαcosβ−sinαsinβ', 'tan(α±β)=(tanα±tanβ)/(1∓tanαtanβ)'] },
        { type: 'heading', text: '二、二倍角公式' },
        { type: 'keypoint', label: '重点·二倍角', text: '令和差公式中 α = β 即得：<br><strong>sin2α = 2 sinα cosα</strong>；<br><strong>cos2α = cos²α − sin²α = 2cos²α − 1 = 1 − 2sin²α</strong>（三种等价形式，按需选用）；<br><strong>tan2α = 2tanα/(1 − tan²α)</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="150" fill="#eef4fc"/><rect x="50" y="50" width="200" height="52" rx="8" fill="#5a7a2a"/><text x="150" y="83" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">sin2α=2sinαcosα</text><rect x="280" y="50" width="200" height="52" rx="8" fill="#e05d44"/><text x="380" y="83" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">cos2α=2cos²α−1</text><rect x="510" y="50" width="150" height="52" rx="8" fill="#2b5b9e"/><text x="585" y="83" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">tan2α=…</text></svg>', caption: '图2　二倍角公式：由和角公式令 α=β 得到。' },
        { type: 'example', label: '例题1', text: '求 sin75°。<br><br><strong>解</strong>：75° = 45° + 30°，sin75° = sin(45°+30°) = sin45°cos30° + cos45°sin30° = (√2/2)(√3/2) + (√2/2)(1/2) = <strong>(√6 + √2)/4</strong>。' },
        { type: 'heading', text: '三、恒等变换的应用' },
        { type: 'keypoint', label: '重点·化简与求值', text: '恒等变换常用于：①<strong>化简</strong>复杂三角式；②<strong>求值</strong>（已知部分三角函数值求组合值）；③<strong>证明等式</strong>。技巧包括“切化弦”（把 tan 写成 sin/cos）、“降幂”（用 cos2α 形式降次）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="150" fill="#eef4fc"/><rect x="60" y="50" width="170" height="52" rx="8" fill="#2b5b9e"/><text x="145" y="83" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">观察结构</text><rect x="260" y="50" width="170" height="52" rx="8" fill="#4a7de0"/><text x="345" y="83" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">选公式</text><rect x="460" y="50" width="170" height="52" rx="8" fill="#5a7a2a"/><text x="545" y="83" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">化简</text><text x="340" y="128" font-size="14" fill="#33536e" text-anchor="middle">恒等变换三步：看结构→套公式→化简</text></svg>', caption: '图3　恒等变换流程：观察结构、选公式、化简。' },
        { type: 'example', label: '例题2', text: '已知 tanα = 2，求 sin2α。<br><br><strong>解</strong>：sin2α = 2sinαcosα。由 tanα=2 可设 sinα=2/√5、cosα=1/√5（取同号），则 sin2α = 2·(2/√5)(1/√5) = <strong>4/5</strong>。或利用 sin2α = 2tanα/(1+tan²α) = 4/5。' },
        { type: 'heading', text: '四、公式对照' },
        { type: 'table', headers: ['类型', '公式', '要点'], rows: [['正弦和', 'sin(α+β)=sinαcosβ+cosαsinβ', '同号'], ['余弦和', 'cos(α+β)=cosαcosβ−sinαsinβ', '异号'], ['二倍角 cos', 'cos2α=2cos²α−1=1−2sin²α', '可降幂'], ['二倍角 sin', 'sin2α=2sinαcosα', '升幂']] },
        { type: 'warn', label: '易错', text: '两大失误：①<strong>和差符号错</strong>，尤其余弦“中间异号”记成同号；②<strong>二倍角 cos 形式选错</strong>，不知 cos2α 有三种等价写法，降幂时应选含平方那一种（如 cos²α = (1+cos2α)/2）。此外 tan 和差公式分母“1∓tanαtanβ”的符号易混淆。' },
        { type: 'tip', label: '记忆', text: '和差公式记“<strong>正弦同号、余弦异号</strong>”。二倍角从和角令 α=β 现场推出最稳。遇到 tan 优先考虑“<strong>切化弦</strong>”；遇到高次（sin²、cos²）优先考虑用二倍角<strong>降幂</strong>。多练“由右往左”的逆用（如 asinα+bcosα 合成）。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['和差：正弦同号、余弦异号', 'sin2α=2sinαcosα', 'cos2α=cos²α−sin²α=2cos²α−1=1−2sin²α', 'tan2α=2tanα/(1−tan²α)', '技巧：切化弦、降幂、逆用公式'] },
        { type: 'reading', text: '恒等变换的“逆用”极其重要：例如式子 a·sinα + b·cosα 可提取 √(a²+b²) 合成成 R·sin(α+φ) 的形式（其中 tanφ = b/a），这一技巧在求最值、解三角方程、研究 y=A sin(ωx+φ) 时反复出现。记住公式不只是正向套用，更要能在复杂式子中“认出”公式的右端并反向合并。' }
      ],
      exercises: [
        { type: 'choice', question: 'sin(45°+30°) 的正确展开是？', options: ['sin45°sin30°+cos45°cos30°', 'sin45°cos30°+cos45°sin30°', 'sin45°cos30°−cos45°sin30°', 'sin45°+sin30°'], answer: 'sin45°cos30°+cos45°sin30°', explanation: '正弦和角公式：sin(α+β)=sinαcosβ+cosαsinβ。取 α=45°、β=30° 得 sin45°cos30°+cos45°sin30°。故选该式。' },
        { type: 'fill', question: '二倍角公式：sin2α = ____（用 sinα 与 cosα 表示）。', answer: '2sinαcosα', explanation: '由正弦和角公式令 α=β 得 sin2α=sinαcosα+cosαsinα=2sinαcosα。' },
        { type: 'choice', question: 'cos2α 的等价形式不包括？', options: ['cos²α−sin²α', '2cos²α−1', '1−2sin²α', '2sinαcosα'], answer: '2sinαcosα', explanation: 'cos2α 的三种等价形式是 cos²α−sin²α、2cos²α−1、1−2sin²α；而 2sinαcosα 是 sin2α，不是 cos2α。故选 2sinαcosα。' },
        { type: 'fill', question: '用二倍角降幂：cos²α = ____（用 cos2α 表示）。', answer: '(1+cos2α)/2|(1+cos2α)/2', explanation: '由 cos2α=2cos²α−1 移项得 2cos²α=1+cos2α，故 cos²α=(1+cos2α)/2，这是降幂公式。' },
        { type: 'choice', question: 'sin75° 的值约为（保留根号形式）？', options: ['(√6−√2)/4', '(√6+√2)/4', '(√3+1)/4', '(√6+√2)/2'], answer: '(√6+√2)/4', explanation: 'sin75°=sin(45°+30°)=sin45°cos30°+cos45°sin30°=(√2/2)(√3/2)+(√2/2)(1/2)=(√6+√2)/4。故选该式。' }
      ]
    },

    /* ---------------- 第23课时 函数 y = A sin(ωx + φ) ---------------- */
    {
      id: 'bx1-u13-l2',
      name: '函数 y = A sin(ωx + φ)',
      chapter: '第五章 三角函数 · 5.6',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、图象变换' },
        { type: 'paragraph', text: '从基础图象 y = sin x 出发，通过平移、伸缩三种操作，可以得到一般形式 y = A sin(ωx + φ)，它描述了振幅、频率、相位均可调的振动。' },
        { type: 'keypoint', label: '重点·变换顺序', text: '由 y = sin x 到 y = A sin(ωx + φ) 的变换：<br>① <strong>相位变换</strong>：左/右平移得 y = sin(x + φ)；<br>② <strong>周期变换</strong>：横坐标伸缩得 y = sin(ωx + φ)（周期 T = 2π/|ω|）；<br>③ <strong>振幅变换</strong>：纵坐标伸缩得 y = A sin(ωx + φ)（振幅 |A|）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="150" fill="#eef4fc"/><rect x="40" y="50" width="180" height="52" rx="8" fill="#2b5b9e"/><text x="130" y="83" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">平移φ</text><rect x="250" y="50" width="180" height="52" rx="8" fill="#4a7de0"/><text x="340" y="83" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">伸缩ω</text><rect x="460" y="50" width="180" height="52" rx="8" fill="#5a7a2a"/><text x="550" y="83" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">振幅A</text><text x="340" y="128" font-size="14" fill="#33536e" text-anchor="middle">三步：平移(相位)→伸缩(周期)→振幅</text></svg>', caption: '图1　从 sin x 到 A sin(ωx+φ) 的三种变换。' },
        { type: 'list', items: ['平移：y=sin(x+φ)，左加右减', '周期：y=sin(ωx+φ)，周期 T=2π/|ω|', '振幅：y=A sin(ωx+φ)，振幅为 |A|', 'φ 叫初相，决定图象水平起点'] },
        { type: 'heading', text: '二、参数意义' },
        { type: 'keypoint', label: '重点·参数', text: '<strong>A</strong>：<strong>振幅</strong>，决定波峰波谷的高度（值域 [−|A|, |A|]）；<br><strong>ω</strong>：决定<strong>周期</strong> T = <strong>2π/|ω|</strong>，|ω| 越大波形越密；<br><strong>φ</strong>：<strong>初相</strong>，决定图象相对 sin x 的水平平移量。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="150" fill="#eef4fc"/><rect x="50" y="50" width="170" height="52" rx="8" fill="#2b5b9e"/><text x="135" y="83" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">A 振幅(高)</text><rect x="260" y="50" width="170" height="52" rx="8" fill="#4a7de0"/><text x="345" y="83" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">ω 周期(密)</text><rect x="470" y="50" width="170" height="52" rx="8" fill="#e05d44"/><text x="555" y="83" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">φ 初相(移)</text></svg>', caption: '图2　三参数分工：A 管高度、ω 管疏密、φ 管平移。' },
        { type: 'example', label: '例题1', text: '指出 y = 3 sin(2x + π/3) 的振幅、周期、初相。<br><br><strong>解</strong>：振幅 <strong>A = 3</strong>；周期 T = 2π/|ω| = 2π/2 = <strong>π</strong>；初相 <strong>φ = π/3</strong>。' },
        { type: 'heading', text: '三、由图象求解析式' },
        { type: 'keypoint', label: '重点·逆向求解', text: '已知一部分图象求 y = A sin(ωx + φ)：<br>① 由波峰波谷差得 <strong>A</strong>；<br>② 由相邻峰谷水平距离得周期，进而 <strong>ω = 2π/T</strong>；<br>③ 代入一个已知点解 <strong>φ</strong>（注意相位范围）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="150" fill="#eef4fc"/><rect x="60" y="50" width="170" height="52" rx="8" fill="#2b5b9e"/><text x="145" y="83" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">看图得A</text><rect x="260" y="50" width="170" height="52" rx="8" fill="#4a7de0"/><text x="345" y="83" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">T→ω</text><rect x="460" y="50" width="170" height="52" rx="8" fill="#5a7a2a"/><text x="545" y="83" font-size="15" fill="#fff" font-weight="bold" text-anchor="middle">代点求φ</text><text x="340" y="128" font-size="14" fill="#33536e" text-anchor="middle">逆向：图象 → A、ω、φ</text></svg>', caption: '图3　由图象反求解析式：先 A、再 ω、后 φ。' },
        { type: 'example', label: '例题2', text: '某图象振幅为 2、周期为 π、且过 (0,1)，求 y = 2 sin(ωx + φ)。<br><br><strong>解</strong>：A=2，T=π ⇒ ω=2π/π=2。过 (0,1)：2 sinφ = 1 ⇒ sinφ = 1/2，取 φ = π/6，得 <strong>y = 2 sin(2x + π/6)</strong>。' },
        { type: 'heading', text: '四、参数与几何意义对照' },
        { type: 'table', headers: ['参数', '名称', '几何意义'], rows: [['A', '振幅', '波峰到平衡位置距离'], ['ω', '角频率', '周期 T = 2π/|ω|'], ['φ', '初相', '水平平移量'], ['(x+φ)→0 处', '起点', 'x = −φ/ω']] },
        { type: 'warn', label: '易错', text: '变换顺序易错：若先伸缩后平移，平移量会受 ω 影响（平移 φ/ω 而非 φ）。<strong>统一按“先 φ 后 ω”</strong> 不易乱。此外 <strong>A 是振幅取绝对值</strong>（A 可负，表示反向），周期公式用 |ω|，初相 φ 的取值要结合题目给定的范围。' },
        { type: 'tip', label: '记忆', text: '记参数口诀：<strong>“A 管高低、ω 管疏密、φ 管左右”</strong>。变换固定顺序：平移→伸缩→振幅。由图求式：先看峰谷差得 A，再看一个完整波的水平长度得 T 进而 ω，最后代入已知点解 φ。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['y=A sin(ωx+φ)：A振幅、ω角频率、φ初相', '周期 T=2π/|ω|，振幅 |A|', '变换顺序：平移→伸缩→振幅', '由图求式：先A、再ω(T)、后φ', '注意先φ后ω时平移量为φ'] },
        { type: 'reading', text: 'y = A sin(ωx + φ) 是描述一切简谐运动的统一模型：弹簧振子、单摆、交流电、声波都是它的实例。参数 A、ω、φ 分别对应物理中的振幅、角频率、初相位。掌握这套“从图象读参数、从参数画图”的双向能力，是把数学工具用于真实世界振动问题的关键一步。' }
      ],
      exercises: [
        { type: 'choice', question: '函数 y = 3 sin(2x + π/3) 的振幅是？', options: ['2', '3', 'π/3', '6'], answer: '3', explanation: '形如 y = A sin(ωx + φ) 的函数，其振幅为 |A|，即波峰到平衡位置的距离。此处 A = 3，故振幅为 3。' },
        { type: 'fill', question: '函数 y = 2 sin(4x) 的周期 T = ____（用 π 表示）。', answer: 'π/2', explanation: '对于 y = A sin(ωx + φ)，最小正周期公式为 T = 2π/|ω|。本题中 ω = 4，代入得 T = 2π/4 = π/2。' },
        { type: 'choice', question: '关于参数 φ（初相），正确的是？', options: ['决定振幅', '决定周期', '决定水平平移', '决定值域'], answer: '决定水平平移', explanation: 'φ 是初相，决定图象相对 y=sin x 的水平平移量（相位）。振幅由 A 决定、周期由 ω 决定、值域由 A 决定。故选“决定水平平移”。' },
        { type: 'fill', question: '由 y = sin x 变换到 y = sin(x + φ)，是向 ____（填“左”或“右”）平移 |φ| 个单位。', answer: '左', explanation: '“左加右减”：y=sin(x+φ) 相当于把 y=sin x 的图象向左平移 |φ| 个单位（φ>0 时）。故填“左”。' },
        { type: 'choice', question: '若某正弦曲线振幅为 2、周期为 π，则解析式可设为 y = 2 sin(ωx+φ)，其中 ω =？', options: ['π', '2', '1', '4'], answer: '2', explanation: '正弦型函数周期 T = 2π/|ω|。已知 T = π，则 2π/|ω| = π，解得 |ω| = 2，取 ω = 2 即可（负号仅表示波形反向）。故 ω = 2。' },
      ]
    }

  );
})();
