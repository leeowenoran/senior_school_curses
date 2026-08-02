/* ============================================================
 * 高二化学 · 选择性必修1 化学反应原理 · 第二章 化学反应速率与化学平衡
 * 课时7：化学平衡常数 K
 * 数据注入：chemistry.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u7',
    name: '化学平衡常数 K',
    chapter: '选择性必修1 化学反应原理 · 第二章 化学反应速率与化学平衡',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、平衡常数 K 是什么' },
      { type: 'paragraph', text: '大量实验发现，一个可逆反应达到平衡时，生成物浓度按化学计量数次方相乘、除以反应物浓度按化学计量数次方相乘，得到的比值是个定值，只与温度有关。这个定值就叫化学平衡常数，记作 K。它像一个"天平的刻度"，定量告诉我们反应向哪个方向走得远。' },
      { type: 'keypoint', label: '重点·K 的定义式', text: '<strong>K = 生成物浓度幂之积 / 反应物浓度幂之积</strong>，其中各浓度的幂次等于化学方程式中对应物质的化学计量数。例如 N₂ + 3H₂ ⇌ 2NH₃，则 K = c(NH₃)² / (c(N₂) · c(H₂)³)。固体和纯液体浓度视为常数，不写入表达式。' },
      { type: 'example', label: '例题·写出 K 表达式', text: '写出反应 2SO₂ + O₂ ⇌ 2SO₃ 的平衡常数表达式。<br><br><strong>解析</strong>：生成物只有 SO₃，其计量数为 2，写作 c(SO₃)²；反应物 SO₂ 计量数 2 写作 c(SO₂)²，O₂ 计量数 1 写作 c(O₂)。所以 K = c(SO₃)² / (c(SO₂)² · c(O₂))。注意幂次直接抄计量数，顺序生成物在上、反应物在下。' },
      { type: 'list', items: ['生成物浓度之积放分子，反应物放分母', '每种物质浓度的幂次 = 其化学计量数', '固体、纯液体的浓度视为 1，不写入表达式', '同一反应，方程式写法不同，K 的表达式也不同'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">平衡常数 K：生成物幂积 比 反应物幂积</text><rect x="60" y="80" width="260" height="70" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="190" y="115" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">分子：c(C)ᶜ · c(D)ᵈ</text><rect x="360" y="80" width="260" height="70" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="490" y="115" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">分母：c(A)ᵃ · c(B)ᵇ</text><line x1="320" y1="115" x2="360" y2="115" stroke="#d98e3a" stroke-width="3"/><text x="340" y="180" font-size="20" fill="#d98e3a" text-anchor="middle" font-weight="bold">K = 分子 / 分母</text><text x="340" y="230" font-size="12" fill="#4a3724" text-anchor="middle">固体、纯液体不写入，其浓度视为常数 1</text><text x="340" y="255" font-size="12" fill="#4a3724" text-anchor="middle">幂次直接抄化学计量数 a、b、c、d</text></svg>', caption: '图1　平衡常数 K 等于"生成物浓度幂之积"除以"反应物浓度幂之积"，幂次就是化学计量数。' },
      { type: 'heading', text: '二、K 的大小说明什么' },
      { type: 'paragraph', text: 'K 越大，说明平衡时生成物浓度相对越高，反应正向进行得越彻底；K 很小，说明平衡时反应物还占大多数，正向进行程度很小。一般 K 大于 10⁵ 可看作正向进行得相当完全，K 小于 10⁻⁵ 则几乎不正向进行。K 还只认温度：温度不变，K 就不变，跟怎么改变浓度、压强都没关系。' },
      { type: 'keypoint', label: '重点·K 只与温度有关', text: '<strong>平衡常数 K 只随温度变化，与浓度、压强、催化剂无关。</strong>对吸热反应，升高温度 K 增大；对放热反应，升高温度 K 减小。浓度和压强改变只能移动平衡位置，不能改变 K 这个值本身。' },
      { type: 'warn', label: '易错·K 与条件的关系', text: '学生常误以为"增大压强 K 变大""增加反应物 K 变大"。<strong>错！K 是常数，只由温度决定。</strong>改变浓度或压强会让平衡移动、各浓度重新分配，但移动后的新平衡仍满足同一个 K。只有改变温度才会让 K 本身的数值改变。' },
      { type: 'list', items: ['K 只随温度变化，与浓度、压强无关', '吸热反应：升温 K 增大；放热反应：升温 K 减小', 'K 很大→正向进行较完全；K 很小→几乎不正向', '催化剂不改变 K，也不移动平衡'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">温度对 K 的影响：吸热升温 K 增大</text><line x1="80" y1="60" x2="80" y2="230" stroke="#b5651d" stroke-width="2"/><line x1="80" y1="230" x2="620" y2="230" stroke="#b5651d" stroke-width="2"/><text x="350" y="255" font-size="13" fill="#4a3724" text-anchor="middle">温度 T</text><line x1="120" y1="200" x2="560" y2="90" stroke="#d98e3a" stroke-width="3"/><text x="320" y="150" font-size="13" fill="#d98e3a" text-anchor="middle">吸热反应：T↑ → K↑</text><line x1="120" y1="120" x2="560" y2="200" stroke="#b5651d" stroke-width="3" stroke-dasharray="7 5"/><text x="330" y="185" font-size="12" fill="#b5651d" text-anchor="middle">放热反应：T↑ → K↓</text></svg>', caption: '图2　温度升高时，吸热反应的 K 增大、放热反应的 K 减小；K 只随温度这一条曲线变化。' },
      { type: 'heading', text: '三、用 K 判断反应方向（浓度商 Q）' },
      { type: 'paragraph', text: '想知道某个时刻反应往哪边走，可算"浓度商" Q：它用和 K 完全相同的公式，但代入的是该时刻任意浓度（不一定平衡）。比较 Q 与 K：Q 小于 K，说明生成物还不够，反应正向走；Q 等于 K，已达平衡；Q 大于 K，生成物太多，反应逆向走。' },
      { type: 'keypoint', label: '重点·Q 与 K 的比较', text: '<strong>用同式算浓度商 Q：Q < K 时反应正向进行；Q = K 时达到平衡；Q > K 时反应逆向进行。</strong>Q 是"任意时刻的比值"，K 是"平衡时的比值"，把两者一比就知反应朝哪走，这是 K 最实用的功能。' },
      { type: 'table', headers: ['Q 与 K 关系', '反应方向', '含义'], rows: [['Q < K', '正向（右）进行', '生成物偏少，需多生成'], ['Q = K', '已达平衡', '正逆速率相等'], ['Q > K', '逆向（左）进行', '生成物偏多，需消耗']] },
      { type: 'heading', text: '四、转化率与 K 的应用' },
      { type: 'paragraph', text: '除了 K，还常用"转化率"描述反应进行程度：某反应物的转化率 α = 已经转化的量 / 初始的量，常用百分数表示。K 大、温度合适、适当增大反应物浓度或及时移走生成物，都能提高转化率。工业上调控反应就是围绕这两件工具展开的。' },
      { type: 'example', label: '例题·用 Q 判断方向', text: '某温度下反应 H₂ + I₂ ⇌ 2HI 的 K = 50。某时刻测得 c(H₂)=0.1、c(I₂)=0.1、c(HI)=0.4，判断反应方向。<br><br><strong>解析</strong>：先算 Q = c(HI)² / (c(H₂)·c(I₂)) = 0.4² / (0.1×0.1) = 0.16 / 0.01 = 16。因为 Q = 16 < K = 50，生成物还偏少，反应向正方向（向右）进行，直至 Q 升到等于 K。' },
      { type: 'warn', label: '易错·表达式里漏掉固体纯液体', text: '写 K 或 Q 时，<strong>固体和纯液体（如水溶液里的水）的浓度视为常数 1，坚决不写入表达式</strong>。例如 CaCO₃(s) ⇌ CaO(s) + CO₂(g)，K = c(CO₂)，与两个固体无关。若把它们写进去，K 的表达式就错了，后面判断全乱。' },
      { type: 'tip', label: '提示', text: '做题三步走：① 按计量数写对 K（固体纯液体不写）；② 温度变才动 K，浓度压强变只动 Q；③ 比 Q 和 K 定方向。把"K 是温度计、Q 是晴雨表"记心里：K 只随温度变，Q 随时变，二者一比知风向。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">浓度商 Q 与 K 比较：天平决定反应方向</text><rect x="120" y="80" width="180" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="210" y="110" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">Q 偏轻 → 正向</text><rect x="380" y="80" width="180" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="470" y="110" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">K 为定值</text><line x1="210" y1="140" x2="210" y2="170" stroke="#d98e3a" stroke-width="2"/><line x1="470" y1="140" x2="470" y2="170" stroke="#b5651d" stroke-width="2"/><text x="210" y="200" font-size="13" fill="#d98e3a" text-anchor="middle">Q < K：向右</text><text x="470" y="200" font-size="13" fill="#b5651d" text-anchor="middle">Q = K：平衡</text><text x="340" y="240" font-size="12" fill="#4a3724" text-anchor="middle">Q > K 则向左；Q 与 K 谁大谁小决定风向</text></svg>', caption: '图3　把 K 当成固定砝码，Q 是待称的秤盘：Q 比 K 小则反应向右补生成物，Q 比 K 大则向左消耗生成物。' }
    ],
    exercises: [
      { type: 'choice', question: '书写平衡常数 K 的表达式时，固体和纯液体应如何处理？', options: ['不写入表达式（其浓度视为常数1）', '当作 0 写入', '必须写入分子', '必须写入分母'], answer: '不写入表达式（其浓度视为常数1）', explanation: '固体和纯液体的浓度在反应中可视为常数，约定取为 1，因此不写入 K 或 Q 的表达式。例如 CaCO₃(s) 分解生成 CO₂(g) 的 K 只等于 c(CO₂)，与固体无关。若把它们写进去，表达式和数值都会出错。' },
      { type: 'choice', question: '化学平衡常数 K 的大小只与下列哪个因素有关？', options: ['反应物浓度', '压强', '温度', '催化剂'], answer: '温度', explanation: '平衡常数 K 是温度的函数，只随温度变化；增大或减小浓度、改变压强、使用催化剂都不会改变 K 的数值，它们只能使平衡移动或改变到达平衡的快慢。对吸热反应升温 K 增大，放热反应升温 K 减小，唯独温度能改 K 本身。' },
      { type: 'choice', question: '某时刻算得浓度商 Q 小于平衡常数 K，则反应将？', options: ['正向（向右）进行', '逆向（向左）进行', '已经平衡', '停止不动'], answer: '正向（向右）进行', explanation: '浓度商 Q 用任意时刻浓度按 K 的同式计算。Q < K 说明当前生成物相对偏少、反应物偏多，体系会通过正反应多生成生成物，使 Q 增大直到等于 K 达到平衡。所以 Q < K 时反应向正方向（向右）进行。' },
      { type: 'fill', question: '对反应 aA + bB ⇌ cC + dD，平衡常数表达式写作 K = ___。', answer: 'c(C)ᶜ · c(D)ᵈ / (c(A)ᵃ · c(B)ᵇ)', explanation: '平衡常数等于生成物浓度按计量数次方相乘之积，除以反应物浓度按计量数次方相乘之积。对该反应，生成物 C、D 分别取 c(C)ᶜ 与 c(D)ᵈ 作分子，反应物 A、B 分别取 c(A)ᵃ 与 c(B)ᵇ 作分母。固体纯液体不写入。这就是 K 的标准写法。' },
      { type: 'fill', question: '当反应达到化学平衡时，浓度商 Q 与平衡常数 K 的关系是：Q ___ K（填"大于""等于"或"小于"）。', answer: '等于', explanation: '浓度商 Q 用任意时刻浓度按 K 的同式计算。当体系恰好处于平衡时，各浓度就是平衡浓度，此时算出的 Q 必等于 K。Q = K 是平衡的直接判据；Q 与 K 不等则说明尚未平衡，反应会继续向某一方向进行直到二者相等。' }
    ]
  });
})();
