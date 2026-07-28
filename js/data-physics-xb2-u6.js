/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第二章 电磁感应
 * 课时6：法拉第电磁感应定律
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u6',
    name: '法拉第电磁感应定律',
    chapter: '选择性必修第二册 · 第二章 电磁感应',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、感应电动势' },
      { type: 'paragraph', text: '上一节课我们知道，磁通量变化会在闭合回路里产生感应电流。其实，即使电路没有闭合，只要磁通量发生变化，回路两端也会出现一种"驱动力"，这种驱动力就叫感应电动势。只有电路闭合时，感应电动势才会推动电荷形成感应电流。' },
      { type: 'keypoint', label: '重点·感应电动势', text: '<strong>感应电动势是电磁感应的直接结果。</strong>磁通量一变化，就有感应电动势；电路闭合时才有感应电流。所以感应电动势比感应电流更"根本"。' },
      { type: 'list', items: ['电路不闭合：有感应电动势，但没有感应电流', '电路闭合：既有感应电动势，也有感应电流', '感应电动势的大小决定了感应电流的大小', '研究电磁感应，关键是研究感应电动势的大小'] },
      { type: 'heading', text: '二、法拉第电磁感应定律' },
      { type: 'paragraph', text: '感应电动势到底有多大？法拉第通过大量实验总结出定律：电路中感应电动势的大小，跟穿过这一电路的磁通量的变化率成正比。也就是说，磁通量变得越快，产生的电动势越大。' },
      { type: 'keypoint', label: '重点·法拉第电磁感应定律', text: '<strong>感应电动势 E = n × ΔΦ / Δt。</strong>其中 n 是线圈匝数，ΔΦ 是磁通量的变化量，Δt 是发生这一变化所用的时间，ΔΦ/Δt 叫磁通量的变化率。' },
      { type: 'list', items: ['n 是线圈匝数，匝数越多，总电动势越大', 'ΔΦ/Δt 是变化率，不是变化量本身', '磁通量变化越快（同样变化用更短时间），E 越大', '单匝线圈时 n = 1，公式变为 E = ΔΦ / Δt'] },
      { type: 'table', headers: ['符号', '含义', '单位'], rows: [['E', '感应电动势', '伏特(V)'], ['n', '线圈匝数', '无单位'], ['ΔΦ', '磁通量变化量', '韦伯(Wb)'], ['Δt', '变化所用时间', '秒(s)']] },
      { type: 'example', label: '例题·用法拉第定律计算', text: '一个 100 匝的线圈，在 0.2 秒内磁通量从 0.01 Wb 均匀增加到 0.05 Wb，求感应电动势大小。<br><br><strong>解析</strong>：磁通量变化量 ΔΦ = 0.05 − 0.01 = 0.04 Wb，时间 Δt = 0.2 s，匝数 n = 100。代入公式 E = n × ΔΦ / Δt = 100 × 0.04 / 0.2 = 20 V。所以感应电动势为 20 伏特。' },
      { type: 'warn', label: '易错', text: '<strong>ΔΦ/Δt 是"变化率"不是"变化量"。</strong>磁通量变化了很多，但如果用的时间也很长，变化率反而可能很小，电动势就小。相反，变化量不大但发生得极快，电动势也可能很大。看的是"快慢"，不是"多少"。' },
      { type: 'tip', label: '提示', text: '<strong>多匝线圈可以看成 n 个单匝线圈串联。</strong>每一匝都产生感应电动势，串联后总电动势就是各匝之和，所以公式里要乘匝数 n。' },
      { type: 'heading', text: '三、导体切割磁感线时的电动势' },
      { type: 'paragraph', text: '当一段导体在磁场中做切割磁感线运动时，也可以用一条更直观的公式计算感应电动势。设导体长度为 l，运动速度为 v，磁感应强度为 B，三者互相垂直，则感应电动势大小为 E = B × l × v。' },
      { type: 'keypoint', label: '重点·切割公式', text: '<strong>导体垂直切割磁感线时，感应电动势 E = B × l × v</strong>（要求 B、导体长度 l、速度 v 三者两两垂直）。这也是发电机能够发出电的核心原理。' },
      { type: 'list', items: ['B 是磁感应强度，越大电动势越大', 'l 是切割磁感线的导体有效长度', 'v 是导体相对磁场的垂直运动速度', '切割方向与 B、l 都不垂直时，要取垂直分量'] },
      { type: 'example', label: '例题·用切割公式计算', text: '一根长 0.5 米的导体棒，在磁感应强度 0.4 T 的匀强磁场中垂直切割磁感线，速度 2 m/s，求感应电动势。<br><br><strong>解析</strong>：题目说明"垂直切割"，即 B、l、v 两两垂直，直接代入 E = B × l × v = 0.4 × 0.5 × 2 = 0.4 V。所以感应电动势为 0.4 伏特。' },
      { type: 'warn', label: '易错', text: '<strong>切割公式 E = B × l × v 要求三者垂直。</strong>如果导体运动方向不垂直于磁场，或者导体不垂直于磁场摆放，都应该取"有效的垂直分量"，不能直接把 B、l、v 原数相乘，否则会算错。' },
      { type: 'tip', label: '提示', text: '<strong>切割公式其实是法拉第定律的特殊情形。</strong>导体切割时，ΔΦ/Δt 正好等于 B × l × v，两条公式本质相通，遇到切割情形用后者更省事。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">法拉第定律：感应电动势 E = n × ΔΦ / Δt</text><circle cx="170" cy="165" r="62" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="170" cy="165" r="43" fill="none" stroke="#4fb3a5" stroke-width="3"/><circle cx="170" cy="165" r="24" fill="none" stroke="#2e9e8f" stroke-width="3"/><text x="170" y="248" font-size="13" fill="#234b45" text-anchor="middle">n 匝线圈（相当于串联）</text><text x="345" y="172" font-size="38" fill="#234b45" text-anchor="middle">→</text><rect x="410" y="110" width="220" height="100" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="520" y="155" font-size="18" fill="#234b45" text-anchor="middle" font-weight="bold">E = n × ΔΦ / Δt</text><text x="520" y="190" font-size="13" fill="#234b45" text-anchor="middle">变化越快，E 越大</text></svg>', caption: '图1　多匝线圈磁通量变化时，感应电动势等于匝数 n 乘以磁通量变化率 ΔΦ/Δt。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">导体垂直切割磁感线：E = B × l × v</text><line x1="120" y1="95" x2="440" y2="95" stroke="#2e9e8f" stroke-width="3"/><line x1="120" y1="225" x2="440" y2="225" stroke="#2e9e8f" stroke-width="3"/><rect x="250" y="95" width="16" height="130" fill="#234b45"/><text x="258" y="86" font-size="13" fill="#234b45" text-anchor="middle">导体长 l</text><text x="300" y="165" font-size="24" fill="#234b45">→</text><text x="345" y="165" font-size="14" fill="#234b45">v</text><text x="165" y="150" font-size="18" fill="#4fb3a5">×</text><text x="200" y="195" font-size="18" fill="#4fb3a5">×</text><text x="360" y="135" font-size="18" fill="#4fb3a5">×</text><text x="395" y="195" font-size="18" fill="#4fb3a5">×</text><text x="200" y="258" font-size="13" fill="#234b45" text-anchor="middle">磁场 B 垂直纸面向里（× 表示）</text><rect x="470" y="100" width="180" height="110" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="560" y="150" font-size="17" fill="#234b45" text-anchor="middle" font-weight="bold">E = B × l × v</text><text x="560" y="186" font-size="12" fill="#234b45" text-anchor="middle">B、l、v 两两垂直</text></svg>', caption: '图2　导体棒在垂直磁场中向右切割，感应电动势 E = B × l × v。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">同样磁通量变化，所用时间越短电动势越大</text><rect x="60" y="70" width="240" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">情形一：慢</text><line x1="90" y1="220" x2="90" y2="130" stroke="#4fb3a5" stroke-width="3"/><line x1="90" y2="130" x2="270" y2="130" stroke="#4fb3a5" stroke-width="3"/><text x="180" y="245" font-size="12" fill="#234b45" text-anchor="middle">Δt 大 → E 小</text><rect x="380" y="70" width="240" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">情形二：快</text><line x1="410" y1="220" x2="410" y2="130" stroke="#4fb3a5" stroke-width="3"/><line x1="410" y2="130" x2="590" y2="130" stroke="#4fb3a5" stroke-width="3"/><text x="500" y="245" font-size="12" fill="#234b45" text-anchor="middle">Δt 小 → E 大</text></svg>', caption: '图3　相同的磁通量变化量，发生得越慢（Δt 大）电动势越小，发生得越快（Δt 小）电动势越大。' }
    ],
    exercises: [
      { type: 'choice', question: '法拉第电磁感应定律的表达式是？', options: ['E = ΔΦ', 'E = n × ΔΦ / Δt', 'E = B × l × v', 'E = Φ / t'], answer: 'E = n × ΔΦ / Δt', explanation: '法拉第电磁感应定律指出，感应电动势的大小与磁通量的变化率成正比，公式为 E = n × ΔΦ / Δt，其中 n 是线圈匝数，ΔΦ 是磁通量变化量，Δt 是变化所用时间。切割磁感线公式 E = B × l × v 只是它的一个特殊情形，不能当作普遍定律。' },
      { type: 'choice', question: '一段导体垂直切割磁感线时，感应电动势大小等于？', options: ['E = B × l / v', 'E = B × l × v', 'E = B / (l × v)', 'E = l × v / B'], answer: 'E = B × l × v', explanation: '当磁感应强度 B、导体有效长度 l、运动速度 v 三者两两垂直时，导体切割磁感线产生的感应电动势大小为 E = B × l × v。这个公式在发电机原理中经常用到，前提是三者必须互相垂直。' },
      { type: 'choice', question: '关于感应电动势和感应电流，下列说法正确的是？', options: ['有感应电动势就一定有感应电流', '电路不闭合时也可能有感应电动势', '感应电流大小只与磁通量大小有关', '感应电动势为零时磁通量一定为零'], answer: '电路不闭合时也可能有感应电动势', explanation: '感应电动势是磁通量变化的直接结果，只要磁通量变化就会产生，与电路是否闭合无关；而感应电流必须有闭合回路才会出现。因此电路不闭合时可以有感应电动势但没有感应电流。感应电动势大小取决于磁通量变化率，并非磁通量本身大小。' },
      { type: 'fill', question: '一个单匝线圈，磁通量在 0.1 秒内从 0 均匀变到 0.02 Wb，感应电动势 E = ΔΦ / Δt = ___ V。', answer: '0.2', explanation: '单匝线圈 n = 1，磁通量变化量 ΔΦ = 0.02 − 0 = 0.02 Wb，所用时间 Δt = 0.1 s。代入公式得 E = ΔΦ / Δt = 0.02 / 0.1 = 0.2 V。因此感应电动势为 0.2 伏特。' },
      { type: 'fill', question: '导体棒长度为 l，以速度 v 垂直切割磁感应强度为 B 的匀强磁场，产生的感应电动势 E = ___（三者两两垂直）。', answer: 'B × l × v', explanation: '当磁感应强度 B、导体有效长度 l、运动速度 v 三者两两垂直时，导体切割磁感线产生的感应电动势大小等于三者相乘，即 E = B × l × v。这是法拉第定律在切割情形下的简便表达式，是发电机工作的基本原理。' }
    ]
  });
})();
