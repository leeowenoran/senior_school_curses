/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题二 气体、固体和液体
 * 课时6：气体压强的微观解释与液柱、活塞封闭气体压强分析
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u6',
    name: '气体压强的微观解释与液柱、活塞封闭气体压强分析',
    chapter: '热学与近代物理 · 专题二 气体、固体和液体',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、气体压强的微观本质' },
      { type: 'paragraph', text: '我们吹气球时感到有压力，这个压力来自哪里？从微观看，气体由大量分子组成，这些分子在容器内不停地乱飞，不断撞击容器壁。每个分子撞一下壁，就给壁一个小小的冲量；大量分子持续、频繁地撞击，在宏观上就形成了稳定均匀的压强。' },
      { type: 'list', items: ['气体压强是大量分子对器壁频繁碰撞的平均效果', '单个分子碰撞是断续、偶然的，大量分子才形成稳定压强', '压强大小同时与分子数密度和分子平均动能有关'] },
      { type: 'keypoint', label: '重点·微观本质', text: '<strong>气体压强 p 取决于单位体积内的分子数（数密度）和分子的平均动能（温度）：温度越高、数密度越大，压强越大。</strong>压强来自分子对器壁的碰撞，不是分子之间互相"推挤"。' },
      { type: 'heading', text: '二、影响压强的两个微观因素' },
      { type: 'paragraph', text: '从微观看，分子平均动能越大（温度越高），每次撞击越"狠"、单位时间内撞击越频繁；单位体积内分子数越多（把气体压缩），单位时间撞到壁上的分子也越多。这两个因素都会使压强增大，这正是三条实验定律的微观根源。' },
      { type: 'keypoint', label: '重点·微观公式', text: '<strong>微观上 p = (2/3) × n × E_k（n 为数密度，E_k 为分子平均动能）。</strong>升高温度或减小体积都会使压强增大，与宏观实验定律完全一致。' },
      { type: 'example', label: '例题·查理定律的微观解释', text: '例：密闭气体加热但体积不变，为什么压强增大？<br><strong>解析</strong>：体积不变则数密度 n 不变；加热使温度升高，分子平均动能 E_k 增大，每次撞击更"狠"、更频繁，所以压强 p 增大。这正是查理定律 p ∝ T 的微观来源。' },
      { type: 'warn', label: '易错', text: '<strong>气体压强来自分子对器壁的碰撞，不是因为"分子互相推挤"；在通常容器尺度下，气体压强与重力无关。</strong>液柱、液面的压强才与重力和高度差有关，不要把两者混为一谈。' },
      { type: 'heading', text: '三、液柱封闭气体的压强' },
      { type: 'paragraph', text: '用一段液柱（如细管中的水银柱）把气体封住时，气体压强与液柱两侧的高度差有关。我们取与气体接触的液面为参考，对这段液柱列受力平衡：气体压强加上（或减去）液柱产生的附加压强 ρgh，等于另一侧（通常是大气压 p₀）的压强。' },
      { type: 'keypoint', label: '重点·液柱平衡', text: '<strong>液柱平衡时：p气 ± ρgh = 另一侧压强。</strong>气体在液柱下方（液柱压在气体上）时 p气 = p₀ + ρgh；气体在液柱上方时 p气 = p₀ − ρgh。关键是判明液柱相对气体的位置与方向。' },
      { type: 'list', items: ['先对液柱列受力平衡：气体压强、液柱重力、大气压共同作用', '高度差 h 产生附加压强 ρgh', '水银密度大，常用 cmHg 作为压强单位', '取与气体接触的液面为等高参考点列方程'] },
      { type: 'tip', label: '提示', text: '<strong>记忆：气体在液柱"下方"时，p气 = p₀ + ρgh；气体在液柱"上方"时，p气 = p₀ − ρgh（p₀ 为大气压）。</strong>拿不准时，想象液柱自身重力会把下方气体压得更紧，方向就不会错。' },
      { type: 'heading', text: '四、活塞封闭气体的压强' },
      { type: 'paragraph', text: '用可上下移动的活塞封闭气体时，对活塞这个"隔离体"做受力分析：气体对活塞向上（或向外）的压力 p气 × S、外界大气压对活塞的压力 p₀ × S、活塞自身重力 mg，以及可能的额外重物。静止时这些力合力为零。' },
      { type: 'keypoint', label: '重点·活塞平衡', text: '<strong>活塞平衡：p气 × S = p₀ × S + mg（或减去），即 p气 = p₀ ± mg/S。</strong>活塞质量不可忽略时必须计入重力；上方有重物 M 时再加 Mg/S。' },
      { type: 'example', label: '例题·活塞受力', text: '例：质量为 m 的活塞封闭气体，大气压强 p₀，活塞截面积 S，气体在活塞下方托住活塞，静止时求 p气。<br><strong>解析</strong>：对活塞受力平衡，向上 p气S = 向下 p₀S + mg，故 p气 = p₀ + mg/S。若活塞上方再放重物 M，则 p气 = p₀ + (m+M)g/S。' },
      { type: 'warn', label: '易错', text: '<strong>p₀S 中的 p₀ 是外界大气压，不是活塞上方"空气柱"的压强；要分清活塞是否计质量、是否受额外重物。</strong>若是倾斜放置的气缸，活塞重力在轴向的分量要乘 sinθ，不能直接用 mg。' },
      { type: 'table', headers: ['封闭方式', '平衡方程要点', '常见陷阱'], rows: [['液柱封闭', 'p气 ± ρgh = 另一侧压强', '混淆液柱相对气体的上下方向'], ['活塞封闭', 'p气S = p₀S ± mg ± 重物', '漏算活塞质量或重力分量']] },
      { type: 'heading', text: '五、液柱移动与活塞平衡判断' },
      { type: 'paragraph', text: '判断液柱或活塞会不会移动，常用"假设法"：先假设它不动，分别计算两侧压强的变化量 Δp，压强升高更大的一侧会把液柱推向另一侧。' },
      { type: 'list', items: ['假设液柱（或活塞）暂不动，分别算两侧压强变化 Δp', 'Δp 较大的一侧压强升高，推动液柱向另一侧', '升温时气体压强变化用 p/T 或 pV/T 判断', '活塞问题直接对活塞做受力平衡分析'] },
      { type: 'tip', label: '提示', text: '<strong>等效法：把倾斜液柱折算成竖直高度 h = L × sinθ，再算 ρgh，可避免方向判断错误。</strong>对活塞则记住"质量、重物、倾斜角度"这三类易漏项。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">气体分子频繁撞击器壁形成压强</text><rect x="40" y="60" width="600" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="40" y="60" width="22" height="200" fill="#4fb3a5"/><circle cx="180" cy="120" r="10" fill="#234b45"/><circle cx="320" cy="170" r="10" fill="#234b45"/><circle cx="450" cy="110" r="10" fill="#234b45"/><circle cx="520" cy="190" r="10" fill="#234b45"/><line x1="190" y1="120" x2="60" y2="120" stroke="#234b45" stroke-width="2"/><polygon points="60,114 60,126 44,120" fill="#234b45"/><line x1="460" y1="110" x2="62" y2="110" stroke="#234b45" stroke-width="2"/><polygon points="62,104 62,116 46,110" fill="#234b45"/><text x="340" y="288" font-size="13" fill="#234b45" text-anchor="middle">大量分子持续撞击器壁，宏观上形成稳定压强</text></svg>', caption: '图1　气体压强来自大量分子对容器壁的频繁碰撞（示意）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">液柱封闭：对液柱列平衡求气体压强</text><rect x="250" y="90" width="180" height="70" rx="6" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">气体 p气</text><rect x="250" y="160" width="180" height="80" fill="#234b45"/><text x="340" y="205" font-size="13" fill="#e6f4f1" text-anchor="middle">液柱 ρgh</text><text x="460" y="115" font-size="13" fill="#234b45">上方 p₀</text><line x1="440" y1="200" x2="500" y2="200" stroke="#234b45" stroke-width="2"/><text x="510" y="205" font-size="13" fill="#234b45">ρgh</text><text x="340" y="290" font-size="13" fill="#234b45" text-anchor="middle">平衡：p气 + ρgh = p₀（气体在液柱下方）</text></svg>', caption: '图2　液柱封闭气体：对液柱受力平衡得 p气 + ρgh = p₀。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">活塞封闭：对活塞受力平衡求气体压强</text><rect x="240" y="120" width="200" height="80" rx="6" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="150" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">气体 p气</text><rect x="235" y="100" width="210" height="20" fill="#234b45"/><text x="340" y="94" font-size="12" fill="#234b45" text-anchor="middle">活塞 m</text><rect x="320" y="60" width="40" height="40" fill="#234b45"/><text x="340" y="50" font-size="12" fill="#234b45" text-anchor="middle">重物</text><text x="470" y="115" font-size="13" fill="#234b45">上方 p₀</text><text x="470" y="160" font-size="13" fill="#234b45">p气S ↑</text><text x="340" y="290" font-size="13" fill="#234b45" text-anchor="middle">平衡：p气S = p₀S + mg + 重物重力</text></svg>', caption: '图3　活塞封闭气体：对活塞受力平衡得 p气 = p₀ + mg/S（+ 重物）。' }
    ],
    exercises: [
      { type: 'choice', question: '从微观角度看，气体压强的主要来源是？', options: ['分子之间的引力', '分子之间的斥力', '大量气体分子对器壁频繁碰撞', '气体受到的重力的作用'], answer: '大量气体分子对器壁频繁碰撞', explanation: '气体压强是大量分子持续、频繁地撞击容器壁产生的平均效果，来自分子对器壁的碰撞冲量，不是分子之间的引力或斥力，通常容器尺度下也与重力无关。温度升高或体积减小使压强增大，都可从碰撞更剧烈、更频繁来解释。' },
      { type: 'choice', question: '质量为 m 的活塞（不计摩擦，大气压强 p₀，截面积 S，气体在活塞下方）静止时，气体压强 p气 等于？', options: ['p₀ − mg/S', 'p₀ + mg/S', 'p₀', 'mg/S'], answer: 'p₀ + mg/S', explanation: '对活塞受力平衡：气体向上推活塞的力 p气S，与向下的大气压压力 p₀S、活塞重力 mg 平衡，即 p气S = p₀S + mg，所以 p气 = p₀ + mg/S。若活塞上方还有重物 M，应再加 Mg/S。' },
      { type: 'choice', question: '用液柱封闭气体，气体在液柱下方，则气体压强 p气 与大气压 p₀、液柱附加压强 ρgh 的关系为？', options: ['p气 = p₀ − ρgh', 'p气 = p₀ + ρgh', 'p气 = p₀', 'p气 = ρgh'], answer: 'p气 = p₀ + ρgh', explanation: '液柱压在气体上方时，对液柱受力平衡：气体向上的压强 p气 支撑着液柱重力产生的 ρgh 和上方大气压 p₀，故 p气 = p₀ + ρgh。若气体在液柱上方，则变为 p气 = p₀ − ρgh。判明液柱相对气体的上下位置是关键。' },
      { type: 'fill', question: '从微观上看，气体压强取决于单位体积内的分子数（数密度）和分子的______（填"平均动能"或"总质量"）。', answer: '平均动能', explanation: '气体压强的微观表达式为 p = (2/3) n E_k，其中 n 是数密度、E_k 是分子平均动能。温度越高（平均动能越大）、数密度越大，压强越大。这与宏观上的实验定律完全对应。' },
      { type: 'fill', question: '一段高度为 h 的液柱产生的附加压强为 ρg______（填物理量符号）。', answer: 'h', explanation: '液柱自身重力产生的附加压强为 ρgh，其中 ρ 为液体密度、g 为重力加速度、h 为液柱竖直高度。在液柱封闭气体问题中，这个 ρgh 要按液柱相对气体的位置加（或减）到气体压强与大气压的平衡式中。' }
    ]
  });
})();
