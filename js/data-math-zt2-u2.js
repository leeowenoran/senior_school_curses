/* ============================================================
 * 高三数学 · 高考复习专题 · 三角与向量（zt2）
 * 第2单元：诱导公式 + 三角恒等变换（2 课时）
 * 数据注入：gzGetVolume('math','zt2').points
 * 注：zt2 已通过 data-gz.js 末尾的 GZ_REVIEW.math 遍历自动注册，
 *     本文件只负责注入课时数据，请勿改动 data-gz.js。
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt2');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 诱导公式 ---------------- */
    {
      id: 'zt2-u2-l1',
      name: '诱导公式',
      chapter: '三角与向量复习 · 二(四) 诱导公式',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、口诀与核心思想' },
        { type: 'paragraph', text: '诱导公式的作用，是把任意角的三角函数转化为锐角三角函数，从而利用 30°、45°、60° 等特殊角的三角函数值完成计算。记忆与运用这套公式，核心口诀只有八个字：奇变偶不变，符号看象限。' },
        { type: 'keypoint', label: '重点·口诀', text: '<strong>奇变偶不变，符号看象限</strong>。<br><strong>奇变偶不变</strong>：看附加角是 π/2 的奇数倍还是偶数倍。π/2 的奇数倍（π/2、3π/2）时函数名改变（sin 与 cos 互换、tan 与 cot 互换）；π/2 的偶数倍（0、π、2π）时函数名不变。<br><strong>符号看象限</strong>：把 α 看作锐角，判断原角所在象限，原三角函数在该象限的正负，就是结果的正负号。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">口诀示意：π/2 的奇数倍，函数名改变</text><line x1="60" y1="200" x2="620" y2="200" stroke="#33536e" stroke-width="2"/><line x1="340" y1="40" x2="340" y2="270" stroke="#33536e" stroke-width="2"/><text x="630" y="206" font-size="15" fill="#33536e">x</text><text x="346" y="52" font-size="15" fill="#33536e">y</text><circle cx="340" cy="200" r="120" fill="none" stroke="#4a7de0" stroke-width="2"/><line x1="340" y1="200" x2="448" y2="140" stroke="#2b5b9e" stroke-width="3"/><circle cx="448" cy="140" r="6" fill="#2b5b9e"/><text x="456" y="136" font-size="15" fill="#2b5b9e">α</text><line x1="340" y1="200" x2="400" y2="92" stroke="#e05d44" stroke-width="3"/><circle cx="400" cy="92" r="6" fill="#e05d44"/><text x="408" y="86" font-size="15" fill="#e05d44">π/2+α</text><path d="M448 140 L 448 110 L 418 110" fill="none" stroke="#7a5aa0" stroke-width="2"/><text x="120" y="272" font-size="14" fill="#33536e">两终边互相垂直 → sin 与 cos 互换（函数名改变）</text></svg>', caption: '图1　α 与 π/2+α 的终边互相垂直：π/2 的奇数倍使函数名 sin、cos 互换。' },
        { type: 'heading', text: '二、诱导公式分类' },
        { type: 'paragraph', text: '把常见角分成三组来记忆：关于原点对称（π±α、−α、2π±α 等）不改变函数名；绕 π/2、3π/2 旋转则改变函数名。下面分别列出三组的转化关系，使用时统一按口诀取符号。' },
        { type: 'keypoint', label: '重点·第一组', text: '<strong>函数名不变，符号看象限</strong>：<br>sin(-α) = -sinα，cos(-α) = cosα，tan(-α) = -tanα<br>sin(2π±α) = sinα，cos(2π±α) = cosα，tan(2π±α) = tanα<br>sin(π±α) = ∓sinα，cos(π±α) = -cosα，tan(π±α) = ±tanα' },
        { type: 'keypoint', label: '重点·第二组', text: '<strong>函数名改变，符号看象限</strong>：<br>sin(π/2±α) = cosα，cos(π/2±α) = ∓sinα<br>sin(3π/2±α) = -cosα，cos(3π/2±α) = ±sinα<br>正切相应互换为余切：tan(π/2±α) = ∓cotα' },
        { type: 'keypoint', label: '重点·第三组', text: '<strong>负角与周期处理</strong>：<br>负角先化正：用 sin(-α)=-sinα、cos(-α)=cosα 把负号提到函数之前，再处理剩余部分。<br>周期先化简：三角函数是周期函数，sin(α+2kπ)=sinα、cos(α+2kπ)=cosα（k∈Z），可先减去或加上 2π 的整数倍，把角化到 0 到 2π 范围内。' },
        { type: 'table', headers: ['角的形式', '函数名', '符号规律', '示例'], rows: [['-α、2π±α、π±α', '不变', '按原角象限定符号', 'sin(π-α)=sinα'], ['π/2 ± α、3π/2 ± α', '改变', '按原角象限定符号', 'cos(π/2-α)=sinα'], ['k·2π + α（k∈Z）', '不变', '符号为正', 'sin(α+2π)=sinα']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">终边对称：三种对称对应三种符号变化</text><line x1="60" y1="180" x2="620" y2="180" stroke="#33536e" stroke-width="2"/><line x1="340" y1="50" x2="340" y2="300" stroke="#33536e" stroke-width="2"/><circle cx="340" cy="180" r="130" fill="none" stroke="#4a7de0" stroke-width="2"/><line x1="340" y1="180" x2="430" y2="120" stroke="#2b5b9e" stroke-width="3"/><circle cx="430" cy="120" r="6" fill="#2b5b9e"/><text x="438" y="116" font-size="15" fill="#2b5b9e">α</text><line x1="340" y1="180" x2="430" y2="240" stroke="#e05d44" stroke-width="3" stroke-dasharray="6 4"/><circle cx="430" cy="240" r="6" fill="#e05d44"/><text x="438" y="262" font-size="15" fill="#e05d44">-α</text><line x1="340" y1="180" x2="250" y2="120" stroke="#5a7a2a" stroke-width="3" stroke-dasharray="6 4"/><circle cx="250" cy="120" r="6" fill="#5a7a2a"/><text x="200" y="116" font-size="15" fill="#5a7a2a">π-α</text><line x1="340" y1="180" x2="250" y2="240" stroke="#7a5aa0" stroke-width="3" stroke-dasharray="6 4"/><circle cx="250" cy="240" r="6" fill="#7a5aa0"/><text x="200" y="262" font-size="15" fill="#7a5aa0">π+α</text><text x="340" y="312" font-size="14" fill="#33536e" text-anchor="middle">红：关于x轴对称（cos不变，sin变号）；绿：关于y轴对称（sin不变，cos变号）；紫：关于原点对称（二者都变号）</text></svg>', caption: '图2　α 与 -α 关于x轴、α 与 π-α 关于y轴、α 与 π+α 关于原点，三种对称决定符号。' },
        { type: 'heading', text: '三、符号看象限' },
        { type: 'paragraph', text: '符号看象限是口诀中最容易出错的一环。操作方法为：暂时把 α 当作锐角（0 到 π/2），写出原角，看它落在第几象限，该象限内目标函数的正负，就是结果的符号。函数名与符号二者相互独立，分别由奇偶与象限决定。' },
        { type: 'warn', label: '易错', text: '判断符号时，必须把 α 视为锐角来定位原角所在象限，<strong>绝不能</strong>把 α 当成任意角，也不能直接挪用三角函数值的正负。例如 sin(π+α)：π+α 在第三象限，正弦为负，故 sin(π+α) = -sinα，符号来自第三象限正弦为负，而不是来自加 π 这一动作本身。' },
        { type: 'list', items: ['把 α 当作锐角，确定原角（如 π+α）所在象限', '查该象限中目标函数（sin、cos、tan）的正负', '函数名由 π/2 的倍数奇偶决定，符号由象限决定，二者独立'] },
        { type: 'heading', text: '四、典型角终边形图' },
        { type: 'paragraph', text: '以 30° 为基准角，观察 150°、210°、330° 的终边位置，能直观看到诱导公式与终边对称的对应关系，也有助于快速写出特殊角的三角函数值。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">典型角终边形图（以 30° 为基准）</text><line x1="60" y1="180" x2="620" y2="180" stroke="#33536e" stroke-width="2"/><line x1="340" y1="50" x2="340" y2="300" stroke="#33536e" stroke-width="2"/><circle cx="340" cy="180" r="130" fill="none" stroke="#4a7de0" stroke-width="2"/><line x1="340" y1="180" x2="452" y2="115" stroke="#2b5b9e" stroke-width="3"/><circle cx="452" cy="115" r="6" fill="#2b5b9e"/><text x="460" y="110" font-size="15" fill="#2b5b9e">30°</text><line x1="340" y1="180" x2="228" y2="115" stroke="#e05d44" stroke-width="3"/><circle cx="228" cy="115" r="6" fill="#e05d44"/><text x="160" y="110" font-size="15" fill="#e05d44">150°</text><line x1="340" y1="180" x2="228" y2="245" stroke="#5a7a2a" stroke-width="3"/><circle cx="228" cy="245" r="6" fill="#5a7a2a"/><text x="160" y="268" font-size="15" fill="#5a7a2a">210°</text><line x1="340" y1="180" x2="452" y2="245" stroke="#7a5aa0" stroke-width="3"/><circle cx="452" cy="245" r="6" fill="#7a5aa0"/><text x="460" y="268" font-size="15" fill="#7a5aa0">330°</text><text x="340" y="312" font-size="14" fill="#33536e" text-anchor="middle">30° 与 150° 关于y轴对称，30° 与 330° 关于x轴对称，30° 与 210° 关于原点对称</text></svg>', caption: '图3　以 30° 为基准，150°、210°、330° 的终边分别落在第二、第三、第四象限。' },
        { type: 'heading', text: '五、典型例题' },
        { type: 'example', label: '例题1', text: '求 sin210°。<br><br><strong>解</strong>：210° = 180° + 30°，由诱导公式 sin(π+α) = -sinα（α 视为锐角），得 sin210° = sin(180°+30°) = -sin30° = -1/2。' },
        { type: 'example', label: '例题2', text: '求 cos(-π/3)。<br><br><strong>解</strong>：由余弦的偶函数性质 cos(-α) = cosα，得 cos(-π/3) = cos(π/3) = 1/2。' },
        { type: 'example', label: '例题3', text: '求 tan(5π/4)。<br><br><strong>解</strong>：5π/4 = π + π/4，由诱导公式 tan(π+α) = tanα，得 tan(5π/4) = tan(π/4) = 1。' },
        { type: 'example', label: '例题4', text: '求 sin(π/2+α)。<br><br><strong>解</strong>：π/2 + α 是 π/2 的奇数倍，函数名改变，sin 变为 cos；把 α 视为锐角时 π/2+α 在第二象限，正弦为正，故 sin(π/2+α) = cosα。' },
        { type: 'example', label: '例题5', text: '化简 sin(π-α)cos(2π-α) / [cos(π/2-α)sin(π+α)]。<br><br><strong>解</strong>：逐项运用诱导公式：<br>sin(π-α) = sinα，cos(2π-α) = cosα，cos(π/2-α) = sinα，sin(π+α) = -sinα。<br>代入原式得 sinα·cosα / (sinα·(-sinα)) = cosα / (-sinα) = -cotα。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['口诀：奇变偶不变，符号看象限', '函数名是否改变，由 π/2 的倍数奇偶决定', '符号正负，由把 α 当锐角后原角所在象限决定', '负角先化正，周期先化到 0 到 2π 内', '化简连乘连除时逐项转化再约分'] },
        { type: 'tip', label: '提示', text: '诱导公式的本质是<strong>终边对称性</strong>：关于 x 轴对称对应正弦变号（cos 不变），关于 y 轴对称对应余弦变号（sin 不变），关于原点对称则两者都变号。从图形记忆比死记硬背更牢固。' }
      ],
      exercises: [
        { type: 'choice', question: '诱导公式口诀“奇变偶不变”中的“变”指的是？', options: ['函数值的符号改变', '函数名改变（sin与cos互换）', '角度大小改变', '计算顺序改变'], answer: '函数名改变（sin与cos互换）', explanation: '口诀中“变”指当附加角是 π/2 的奇数倍时函数名发生改变，即正弦与余弦互换、正切与余切互换；“偶不变”指 π/2 的偶数倍（0、π、2π）函数名保持不变。符号由“符号看象限”单独决定，与函数名变换无关。' },
        { type: 'choice', question: 'sin(π+α)（α 为锐角）等于下列哪个式子？', options: ['sinα', '-sinα', 'cosα', '-cosα'], answer: '-sinα', explanation: '由诱导公式 sin(π+α) = -sinα：π 是 π/2 的偶数倍，函数名不变；把 α 视为锐角时 π+α 在第三象限，正弦为负，故取负号。选项中只有 -sinα 同时满足函数名与符号，其余或因符号错误、或因函数名错误而不正确。' },
        { type: 'fill', question: 'cos(-π/4) = ____。（填具体数值，保留根号）', answer: '√2/2', explanation: '余弦是偶函数，满足 cos(-α) = cosα，故 cos(-π/4) = cos(π/4) = √2/2。也可理解为角 -π/4 与 π/4 关于 x 轴对称，余弦值相等且符号为正，因此直接得到 √2/2。' },
        { type: 'choice', question: '下列各式中，函数名需要改变的是？', options: ['sin(2π-α)', 'cos(π-α)', 'sin(π/2+α)', 'tan(π+α)'], answer: 'sin(π/2+α)', explanation: '判断是否改变函数名，看附加角是 π/2 的几倍：π/2+α 是 π/2 的 1 倍（奇数倍），函数名改变，sin 变为 cos；而 2π-α、π-α、π+α 都是 π/2 的偶数倍，函数名均不变。故只有 sin(π/2+α) 需要变名。' },
        { type: 'fill', question: 'tan(5π/4) = ____。', answer: '1', explanation: '5π/4 = π + π/4，由诱导公式 tan(π+α) = tanα（π 是 π/2 的偶数倍，正切名不变；π+α 在第三象限，正切为正），故 tan(5π/4) = tan(π/4) = 1。' }
      ]
    },

    /* ---------------- 第2课时 三角恒等变换 ---------------- */
    {
      id: 'zt2-u2-l2',
      name: '三角恒等变换',
      chapter: '三角与向量复习 · 二(五) 三角恒等变换',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、和差公式' },
        { type: 'paragraph', text: '和差公式是三角恒等变换的基础，它把两角和或差的三角函数展开成单角三角函数的乘积组合。所有二倍角、降幂、辅助角公式都可以由它推导出来。' },
        { type: 'keypoint', label: '重点·和差公式', text: '<strong>正弦和差</strong>：sin(α+β) = sinαcosβ + cosαsinβ；sin(α-β) = sinαcosβ - cosαsinβ。<br><strong>余弦和差</strong>：cos(α+β) = cosαcosβ - sinαsinβ；cos(α-β) = cosαcosβ + sinαsinβ。<br><strong>正切和差</strong>：tan(α+β) = (tanα+tanβ)/(1-tanαtanβ)；tan(α-β) = (tanα-tanβ)/(1+tanαtanβ)。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">和角公式：两角之和的三角函数展开</text><rect x="90" y="64" width="500" height="112" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2" rx="8"/><text x="340" y="100" font-size="16" fill="#2b5b9e" text-anchor="middle">sin(α+β) = sinα·cosβ + cosα·sinβ</text><text x="340" y="132" font-size="16" fill="#c0392b" text-anchor="middle">cos(α+β) = cosα·cosβ − sinα·sinβ</text><text x="340" y="164" font-size="15" fill="#33536e" text-anchor="middle">同名相乘，符号：正弦同号、余弦反号</text><text x="340" y="222" font-size="14" fill="#33536e" text-anchor="middle">记忆：展开后函数名不变，符号由原式运算符号决定（正弦同、余弦反）</text></svg>', caption: '图1　和角公式展开：正弦同名相加减，余弦同名相减加。' },
        { type: 'list', items: ['正弦公式：展开后函数名不变，符号与原式运算符号相同', '余弦公式：展开后函数名不变，符号与原式运算符号相反', '正切公式：分母恒为 1 减（或加）乘积，分子与原式同构'] },
        { type: 'heading', text: '二、二倍角与降幂公式' },
        { type: 'paragraph', text: '在正弦、余弦和差公式中令 β = α，即可得到二倍角公式；进一步把 cos2α 的三组等价形式移项，就能得到降幂公式，把二次幂化为一次二倍角，便于积分与化简。' },
        { type: 'keypoint', label: '重点·二倍角', text: '<strong>正弦二倍角</strong>：sin2α = 2sinαcosα。<br><strong>余弦二倍角</strong>：cos2α = cos²α - sin²α = 2cos²α - 1 = 1 - 2sin²α。<br><strong>正切二倍角</strong>：tan2α = 2tanα / (1 - tan²α)。' },
        { type: 'keypoint', label: '重点·降幂公式', text: '由 cos2α = 1 - 2sin²α 与 cos2α = 2cos²α - 1 移项得到：<br>sin²α = (1 - cos2α) / 2；<br>cos²α = (1 + cos2α) / 2。<br>降幂公式把平方结构化为一次二倍角，是化简 sin⁴x、cos⁴x 等偶次幂的关键工具。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">二倍角与降幂公式关系</text><rect x="110" y="58" width="240" height="50" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2" rx="6"/><text x="230" y="88" font-size="15" fill="#2b5b9e" text-anchor="middle">cos2α = cos²α − sin²α</text><rect x="380" y="58" width="200" height="50" fill="#d6ebd0" stroke="#5a7a2a" stroke-width="2" rx="6"/><text x="480" y="88" font-size="15" fill="#5a7a2a" text-anchor="middle">sin2α = 2sinαcosα</text><rect x="110" y="150" width="240" height="50" fill="#f6d8cf" stroke="#e05d44" stroke-width="2" rx="6"/><text x="230" y="180" font-size="15" fill="#c0392b" text-anchor="middle">cos2α = 2cos²α − 1</text><rect x="380" y="150" width="200" height="50" fill="#f6d8cf" stroke="#e05d44" stroke-width="2" rx="6"/><text x="480" y="180" font-size="15" fill="#c0392b" text-anchor="middle">cos2α = 1 − 2sin²α</text><line x1="230" y1="108" x2="230" y2="146" stroke="#33536e" stroke-width="2"/><polygon points="230,152 224,142 236,142" fill="#33536e"/><text x="340" y="246" font-size="14" fill="#33536e" text-anchor="middle">由 cos2α 解出：sin²α = (1−cos2α)/2，cos²α = (1+cos2α)/2（降幂）</text></svg>', caption: '图2　余弦二倍角的三种等价形式，向下推出降幂公式。' },
        { type: 'list', items: ['二倍角公式由和差公式令 β=α 直接得到', 'cos2α 三式等价，解题时按需选用最方便的形式', '降幂公式把 sin²α、cos²α 统一成一次二倍角'] },
        { type: 'heading', text: '三、辅助角公式' },
        { type: 'paragraph', text: '当式子同时含有 sin x 与 cos x 的线性组合时，可用辅助角公式把它们合并成单个正弦函数，从而方便求最值、周期与相位。这是解三角形与三角函数图像题的常用手段。' },
        { type: 'keypoint', label: '重点·辅助角', text: '对任意实数 a、b，有<br><strong>a sin x + b cos x = √(a²+b²) sin(x+φ)</strong>，<br>其中合成振幅为 √(a²+b²)，辅助角 φ 满足 <strong>tanφ = b/a</strong>，φ 的具体象限由 a、b 的符号共同决定（a 控制余弦项系数，b 控制正弦项系数）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">辅助角公式：振幅合成</text><polygon points="120,240 120,90 360,240" fill="none" stroke="#2b5b9e" stroke-width="2.5"/><text x="92" y="172" font-size="16" fill="#2b5b9e">b</text><text x="235" y="262" font-size="16" fill="#2b5b9e">a</text><text x="225" y="158" font-size="16" fill="#c0392b">R=√(a²+b²)</text><text x="172" y="200" font-size="15" fill="#7a5aa0">φ</text><rect x="420" y="110" width="220" height="80" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2" rx="8"/><text x="530" y="140" font-size="15" fill="#2b5b9e" text-anchor="middle">a sin x + b cos x</text><text x="530" y="170" font-size="15" fill="#c0392b" text-anchor="middle">= R sin(x+φ)</text><text x="340" y="286" font-size="14" fill="#33536e" text-anchor="middle">tanφ = b/a，R 为合成振幅；φ 由 a、b 的符号确定所在象限</text></svg>', caption: '图3　直角三角形合成：直角边 a、b，斜边 R=√(a²+b²)，对角 φ 满足 tanφ=b/a。' },
        { type: 'warn', label: '易错', text: '使用辅助角公式时，<strong>辅助角 φ 的象限必须结合 a、b 的符号确定</strong>，不能只由 tanφ = b/a 的最小正角取值。例如 a 为负时 φ 不在第一象限；此外若原式是 a cos x + b sin x，要先整理成“正弦项在前”的标准形式再套用公式。' },
        { type: 'heading', text: '四、核心思想与统一策略' },
        { type: 'paragraph', text: '三角恒等变换并非机械套公式，而是围绕“统一”展开：把不同的角、不同的函数、不同的结构，逐步变成同一种，从而创造约分、合并或应用已知公式的条件。' },
        { type: 'tip', label: '提示', text: '解题时遵循<strong>三统一</strong>思想：<br><strong>统一角</strong>——用和差、倍角把不同角化为同角；<br><strong>统一函数</strong>——用 sin²+cos²=1、切化弦等把函数种类减少；<br><strong>统一结构</strong>——把式子整理成可套用公式（如辅助角）的标准形式。' },
        { type: 'table', headers: ['统一目标', '常用手段', '典型用途'], rows: [['统一角', '和差、倍角公式', '化简含 α±β、2α 的混合式'], ['统一函数', '平方关系、切化弦', '减少 sin、cos、tan 混用'], ['统一结构', '辅助角公式', '求最值、周期、相位']] },
        { type: 'heading', text: '五、典型例题' },
        { type: 'example', label: '例题1', text: '化简 sin(α+β)cosβ - cos(α+β)sinβ。<br><br><strong>解</strong>：原式恰好是正弦差角公式的逆用，即 sin[(α+β) - β] = sinα。也可直接展开验证：sin(α+β)cosβ - cos(α+β)sinβ = (sinαcosβ+cosαsinβ)cosβ - (cosαcosβ-sinαsinβ)sinβ = sinαcos²β + cosαsinβcosβ - cosαcosβsinβ + sinαsin²β = sinα(cos²β+sin²β) = sinα。' },
        { type: 'example', label: '例题2', text: '已知 sinα = 3/5，cosβ = 5/13，且 α、β 均为锐角，求 sin(α+β)。<br><br><strong>解</strong>：α、β 为锐角，由 sinα = 3/5 得 cosα = √(1-9/25) = 4/5；由 cosβ = 5/13 得 sinβ = √(1-25/169) = 12/13。代入正弦和角公式：sin(α+β) = sinαcosβ + cosαsinβ = (3/5)(5/13) + (4/5)(12/13) = 15/65 + 48/65 = 63/65。' },
        { type: 'example', label: '例题3', text: '在例题2条件下，求 cos(α-β)。<br><br><strong>解</strong>：利用余弦差角公式 cos(α-β) = cosαcosβ + sinαsinβ。由例题2已知 cosα = 4/5、sinβ = 12/13，且 sinα = 3/5、cosβ = 5/13，代入得 cos(α-β) = (4/5)(5/13) + (3/5)(12/13) = 20/65 + 36/65 = 56/65。' },
        { type: 'example', label: '例题4', text: '将 y = √3 sin x + cos x 化为 A sin(x+φ) 的形式。<br><br><strong>解</strong>：由辅助角公式 a sin x + b cos x = √(a²+b²) sin(x+φ)，其中 a = √3、b = 1。故 A = √((√3)²+1²) = 2，tanφ = b/a = 1/√3，取 φ = π/6，于是 y = 2 sin(x+π/6)。' },
        { type: 'example', label: '例题5', text: '用降幂公式表示 sin⁴x。<br><br><strong>解</strong>：sin⁴x = (sin²x)²，先由降幂公式 sin²x = (1-cos2x)/2，代入得 sin⁴x = [(1-cos2x)/2]² = (1 - 2cos2x + cos²2x)/4。再对 cos²2x 降幂：cos²2x = (1+cos4x)/2，于是 sin⁴x = (1 - 2cos2x + (1+cos4x)/2)/4 = (3 - 4cos2x + cos4x)/8。' },
        { type: 'heading', text: '六、本课小结' },
        { type: 'list', items: ['和差公式：正弦同号、余弦反号，正切分子分母同构', '二倍角：sin2α=2sinαcosα，cos2α 有三组等价形式', '降幂：sin²α=(1-cos2α)/2，cos²α=(1+cos2α)/2', '辅助角：a sin x + b cos x = √(a²+b²) sin(x+φ)，tanφ=b/a', '核心思想：统一角、统一函数、统一结构'] }
      ],
      exercises: [
        { type: 'choice', question: '二倍角正弦公式 sin2α 等于？', options: ['sin²α + cos²α', '2sinαcosα', 'sinαcosα', '2sin²α-1'], answer: '2sinαcosα', explanation: '二倍角正弦公式由正弦和角公式令 β=α 得到：sin2α = sin(α+α) = sinαcosα + cosαsinα = 2sinαcosα。其余选项中，sin²α+cos²α=1 是平方关系，2sin²α-1 是余弦二倍角的变形，均不正确。' },
        { type: 'choice', question: '化简 a sin x + b cos x 可化为下列哪种形式？', options: ['√(a²+b²) sin(x+φ)', '(a+b) sin x', 'ab sin(x+φ)', '√(a²-b²) cos(x+φ)'], answer: '√(a²+b²) sin(x+φ)', explanation: '辅助角公式将同角的正弦与余弦线性组合合并为单个正弦：a sin x + b cos x = √(a²+b²) sin(x+φ)，其中振幅为 √(a²+b²)，tanφ = b/a。选项 (a+b) sin x 与 ab sin(x+φ) 不符合振幅合成规律，√(a²-b²) 在 a<b 时无意义，均错误。' },
        { type: 'fill', question: '降幂公式 sin²α = ____。（用 cos2α 表示）', answer: '(1-cos2α)/2', explanation: '由余弦二倍角公式 cos2α = 1 - 2sin²α，移项得 2sin²α = 1 - cos2α，于是 sin²α = (1 - cos2α)/2。同理 cos²α = (1 + cos2α)/2。降幂公式把二次幂化为一次二倍角，便于积分与高次幂化简。' },
        { type: 'choice', question: 'cos(α+β) 的正确展开式是？', options: ['cosαcosβ+sinαsinβ', 'cosαcosβ-sinαsinβ', 'sinαcosβ+cosαsinβ', 'sinαcosβ-cosαsinβ'], answer: 'cosαcosβ-sinαsinβ', explanation: '余弦和角公式为 cos(α+β) = cosαcosβ - sinαsinβ，特点是同名相乘、符号相反（减号）。选项 cosαcosβ+sinαsinβ 是余弦差角公式；后两项是正弦和差展开，均不正确。' },
        { type: 'fill', question: '将 y = √3 sin x + cos x 化为 A sin(x+φ)，则振幅 A = ____。', answer: '2', explanation: '根据辅助角公式，合成振幅 A = √(a²+b²)。本题中 a = √3、b = 1，故 A = √((√3)²+1²) = √(3+1) = √4 = 2。因此原式可写为 y = 2 sin(x+φ)，其中 φ 满足 tanφ = 1/√3（取 φ = π/6）。' }
      ]
    }

  );
})();
