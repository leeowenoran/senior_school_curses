/* ============================================================
 * 高一化学 · 必修 第一册 · 第四章 物质结构 元素周期律
 * 课时18：元素周期律
 * 数据注入：chemistry.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u18',
    name: '元素周期律',
    chapter: '必修 第一册 · 第四章 物质结构 元素周期律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是元素周期律' },
      { type: 'paragraph', text: '随着原子序数（即核内质子数，从小到大依次编号）不断增加，元素的性质并不是乱变的，而是呈现周期性的变化。也就是说，每隔一定数目，性质就"重复"出相似的规律。具体表现为：核外电子排布、原子半径、主要化合价、以及金属性/非金属性都随原子序数递增而呈周期性变化。这个规律就叫元素周期律。' },
      { type: 'keypoint', label: '重点·元素周期律', text: '<strong>元素的性质随原子序数递增而呈周期性变化，这就是元素周期律。</strong>周期性变化的方面包括：核外电子排布、原子半径、主要化合价、金属性和非金属性。它是整张元素周期表的"内在逻辑"。' },
      { type: 'list', items: ['原子序数 = 核内质子数，从小到大排列', '随原子序数递增，电子层结构周期性重复', '原子半径、化合价、金属性/非金属性都随之周期性变化', '周期律是元素周期表排列的根本依据'] },
      { type: 'heading', text: '二、原子半径的变化规律' },
      { type: 'paragraph', text: '原子半径指原子的大小。同周期（横行）从左到右，核电荷数增加，原子核对电子的吸引力增强，把电子"拉"得更紧，所以半径逐渐减小。同主族（竖列）从上到下，电子层数一层层增多，原子变"胖"，所以半径逐渐增大。' },
      { type: 'keypoint', label: '重点·半径两条规律', text: '<strong>同周期从左到右，原子半径逐渐减小（核电荷增多，引力增强）。</strong><strong>同主族从上到下，原子半径逐渐增大（电子层数增多）。</strong>比较半径时，先看电子层数，层数多的更大；层数相同再看核电荷数，核电荷大的更小。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">原子半径：同周期递减、同主族递增</text><text x="150" y="90" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">同周期（左→右）</text><circle cx="120" cy="140" r="34" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="120" y="145" font-size="12" fill="#4a3724" text-anchor="middle">Na</text><circle cx="220" cy="140" r="28" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="220" y="145" font-size="12" fill="#4a3724" text-anchor="middle">Mg</text><circle cx="310" cy="140" r="22" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="310" y="145" font-size="11" fill="#4a3724" text-anchor="middle">Cl</text><line x1="370" y1="140" x2="420" y2="140" stroke="#d98e3a" stroke-width="3"/><polygon points="420,134 433,140 420,146" fill="#d98e3a"/><text x="395" y="125" font-size="12" fill="#4a3724" text-anchor="middle">减小</text><text x="500" y="90" font-size="13" fill="#4a3724" text-anchor="middle" font-weight="bold">同主族（上→下）</text><circle cx="470" cy="130" r="20" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="470" y="135" font-size="11" fill="#4a3724" text-anchor="middle">F</text><circle cx="470" cy="180" r="28" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="470" y="185" font-size="11" fill="#4a3724" text-anchor="middle">Cl</text><circle cx="470" cy="240" r="36" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="470" y="245" font-size="11" fill="#4a3724" text-anchor="middle">Br</text><line x1="520" y1="180" x2="570" y2="180" stroke="#d98e3a" stroke-width="3"/><polygon points="570,174 583,180 570,186" fill="#d98e3a"/><text x="545" y="165" font-size="12" fill="#4a3724" text-anchor="middle">增大</text><text x="340" y="305" font-size="12" fill="#d98e3a" text-anchor="middle">比较半径：先看电子层数，再看核电荷数</text></svg>', caption: '图1　同一横行从左往右半径变小，同一竖列从上往下半径变大，原因分别是核电荷增加和电子层数增加。' },
      { type: 'list', items: ['同周期：核电荷数增大 → 引力增强 → 半径减小', '同主族：电子层数增多 → 原子变大 → 半径增大', '半径比较口诀：先比电子层数，层数多者大；再比核电荷数，核电荷大者小', '稀有气体半径一般不参与同周期直接比较'] },
      { type: 'heading', text: '三、化合价的变化规律' },
      { type: 'paragraph', text: '主族元素的最高正化合价，从左到右（同周期）从 +1 逐渐升到 +7（氧、氟例外）。最低负化合价的规律是：最低负价 = −(8 − 最外层电子数)，金属一般没有负价。比如氯最外层 7 个电子，最低负价为 −(8−7) = −1 价；氧、氟比较特殊，氟没有正价，氧一般也没有最高正价。' },
      { type: 'keypoint', label: '重点·化合价规律', text: '<strong>最高正价：同周期从左到右为 +1 → +7（O、F 除外）。</strong><strong>最低负价：= −(8 − 最外层电子数)（金属无负价）。</strong>例如 Cl 最高 +7、最低 −1；Na 只有 +1 价（金属无负价）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">化合价随原子序数变化的规律</text><line x1="80" y1="270" x2="620" y2="270" stroke="#b5651d" stroke-width="2"/><line x1="80" y1="70" x2="80" y2="270" stroke="#b5651d" stroke-width="2"/><text x="70" y="80" font-size="11" fill="#4a3724" text-anchor="end">+7</text><text x="70" y="170" font-size="11" fill="#4a3724" text-anchor="end">0</text><text x="70" y="270" font-size="11" fill="#4a3724" text-anchor="end">−1</text><polyline points="100,170 180,110 260,90 340,80 420,75 500,72 580,70" fill="none" stroke="#d98e3a" stroke-width="3"/><polyline points="100,170 180,230 260,250 340,260 420,265 500,268 580,270" fill="none" stroke="#b5651d" stroke-width="3"/><text x="340" y="300" font-size="12" fill="#4a3724" text-anchor="middle">原子序数递增 →（橙线）最高正价升；最低负价见蓝线</text></svg>', caption: '图2　随原子序数递增，最高正价由 +1 升至 +7（橙），最低负价由 −4 升至 −1（蓝），呈现周期性。' },
      { type: 'table', headers: ['性质', '同周期（左→右）', '同主族（上→下）'], rows: [['原子半径', '逐渐减小', '逐渐增大'], ['金属性', '逐渐减弱', '逐渐增强'], ['非金属性', '逐渐增强（右端最强）', '逐渐减弱'], ['最高正价', '从 +1 升到 +7', '相同（主族序数）'], ['最低负价', '从 −4 升到 −1', '相同（−(8−最外层)）']] },
      { type: 'heading', text: '四、金属性与非金属性的递变' },
      { type: 'paragraph', text: '金属性指原子失去电子、变成金属阳离子的能力；非金属性指原子得到电子、变成阴离子的能力。同周期从左到右，核电荷增加、原子半径减小，原子越难失电子、越易得电子，所以金属性减弱、非金属性增强。同主族从上到下，电子层数增多、半径增大，原子越易失电子，所以金属性增强、非金属性减弱。' },
      { type: 'keypoint', label: '重点·金属性/非金属性递变', text: '<strong>同周期从左到右：金属性减弱，非金属性增强。</strong><strong>同主族从上到下：金属性增强，非金属性减弱。</strong>周期表左下方金属性最强（如 Cs、Fr），右上方非金属性最强（F 最强）。' },
      { type: 'warn', label: '易错·半径与化合价', text: '<strong>第一，比较原子半径要先看电子层数、再看核电荷数，不能只比一边。</strong><strong>第二，稀有气体半径一般不参与同周期直接比较，因为它的半径测定方法和别的元素不同。</strong><strong>第三，氟 F 没有正价，氧 O 一般没有最高正价，它们是化合价规律的例外，不能硬套 +7 等规律。</strong>' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">金属性/非金属性的递变方向</text><rect x="60" y="70" width="220" height="200" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="170" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">金属性</text><text x="170" y="135" font-size="13" fill="#d98e3a" text-anchor="middle">强 ← 弱</text><text x="170" y="165" font-size="12" fill="#4a3724" text-anchor="middle">同周期：左强右弱</text><text x="170" y="195" font-size="12" fill="#4a3724" text-anchor="middle">同主族：上弱下强</text><text x="170" y="235" font-size="12" fill="#4a3724" text-anchor="middle">左下角 Cs 最强</text><rect x="400" y="70" width="220" height="200" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="510" y="105" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">非金属性</text><text x="510" y="135" font-size="13" fill="#d98e3a" text-anchor="middle">弱 → 强</text><text x="510" y="165" font-size="12" fill="#4a3724" text-anchor="middle">同周期：左弱右强</text><text x="510" y="195" font-size="12" fill="#4a3724" text-anchor="middle">同主族：上强下弱</text><text x="510" y="235" font-size="12" fill="#4a3724" text-anchor="middle">右上角 F 最强</text></svg>', caption: '图3　金属性在周期表左下方最强，非金属性在右上方最强；同周期左金右非，同主族下金上非。' },
      { type: 'example', label: '例题·性质递变', text: '比较第三周期中 Na、Mg、Cl 的金属性强弱。<br><br><strong>解析</strong>：Na、Mg、Cl 同处第 3 周期，从左往右原子序数递增、原子半径减小、核电荷吸引力增强。根据"同周期从左到右金属性减弱"的规律，三者金属性顺序为 <strong>Na ＞ Mg ＞ Cl</strong>。这也和实际一致：Na 遇水剧烈反应，Mg 反应平缓，Cl 是典型的非金属，几乎不显金属性。' },
      { type: 'tip', label: '提示·F 与 O 的特殊性', text: '氟是最活泼的非金属，电负性最大，因此<strong>没有正化合价</strong>；氧的非金属性仅次于氟，一般也<strong>不显最高正价</strong>（常见为 −2 价，在 OF₂ 等极少数化合物中显正价）。做题时遇到"最高正价 +7"之类的推断，要先确认不是 O、F，避免掉坑。' }
    ],
    exercises: [
      { type: 'choice', question: '关于同周期元素原子半径的变化，下列说法正确的是？', options: ['从左到右逐渐增大', '从左到右逐渐减小', '没有规律', '同周期半径完全相同'], answer: '从左到右逐渐减小', explanation: '同一周期从左到右，原子序数增大，核电荷数增多，原子核对核外电子的吸引力增强，把电子拉得更近，因此原子半径逐渐减小。例如第 3 周期 Na 半径大于 Mg，Mg 大于 Cl。所以"从左到右逐渐减小"正确。' },
      { type: 'choice', question: '同主族从上到下，元素的金属性变化规律是？', options: ['逐渐增强', '逐渐减弱', '不变', '先增强后减弱'], answer: '逐渐增强', explanation: '同一主族从上到下，电子层数逐渐增多，原子半径逐渐增大，原子核对最外层电子的束缚变弱，更容易失去电子，所以金属性逐渐增强、非金属性逐渐减弱。例如碱金属锂、钠、钾、铷、铯，越往下金属性越强，遇水反应越剧烈。' },
      { type: 'choice', question: '下列元素中，没有正化合价的是？', options: ['氯 Cl', '钠 Na', '氟 F', '硫 S'], answer: '氟 F', explanation: '氟是非金属性最强的元素，电负性最大，在化合物中总是显负价（通常为 −1），没有正化合价。钠只有 +1 正价，氯最高可到 +7 价，硫最高到 +6 价。因此没有正价的是氟 F，这是周期律中的特例。' },
      { type: 'fill', question: '主族元素的最低负化合价满足：最低负价 = −(8 − 最外层电子数)。氯 Cl 最外层有 7 个电子，其最低负价为 ___ 价。', answer: '-1', explanation: '根据最低负价公式：最低负价 = −(8 − 最外层电子数)。氯最外层有 7 个电子，代入得 −(8 − 7) = −1，所以氯的最低负价为 −1 价（如 HCl、NaCl 中 Cl 为 −1）。注意只有非金属才有负价，金属无负价。' },
      { type: 'fill', question: '比较原子半径时，一般先看___数，层数多者半径大；层数相同时再看核电荷数，核电荷数大者半径小。', answer: '电子层', explanation: '比较原子半径有两个层次：第一步看电子层数，电子层数越多，原子越大（如 Na 有 3 层大于 Li 的 2 层）；第二步若层数相同，再比较核电荷数，核电荷数越大，对电子吸引力越强，半径反而越小（同周期左到右减小）。所以先比电子层数。' }
    ]
  });
})();
