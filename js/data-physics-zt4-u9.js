/* ============================================================
 * 高三复习 · 实验专题 · 专题二 电学实验
 * 课时9：测定金属的电阻率（伏安法测电阻、螺旋测微器/游标卡尺读数）
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u9',
    name: '测定金属的电阻率（伏安法测电阻、螺旋测微器/游标卡尺读数）',
    chapter: '实验专题 · 专题二 电学实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验目的与核心公式' },
      { type: 'paragraph', text: '我们知道不同金属导电本领不同，这种本领用"电阻率"ρ 表示。本实验就是取一段金属丝，先测出它的电阻 R，再量出它的长度 l 和粗细（直径 d），最后算出这种金属的电阻率。电阻率越小，金属越容易导电，比如铜的电阻率就比铁小。' },
      { type: 'list', items: ['用刻度尺量出金属丝接入电路的有效长度 l（单位用米）', '用螺旋测微器在多个位置测直径 d，取平均值', '用伏安法测出金属丝的电阻 R（R = U / I）', '由 ρ = R × S / l，且横截面积 S = π × (d/2)² 算出电阻率'] },
      { type: 'keypoint', label: '重点·电阻率公式', text: '<strong>电阻率 ρ = R × S / l，其中 R = U / I，S = π × (d/2)² = π × d² / 4。</strong>只要测出 R、l、d 三个量，就能算出金属丝材料的电阻率。注意 l 和 d 必须用国际单位（米），否则结果差 1000 倍。' },
      { type: 'heading', text: '二、游标卡尺怎样读数' },
      { type: 'paragraph', text: '游标卡尺用来测长度，比普通尺子更精确。它由主尺和可以滑动的"游标尺"组成。读数分两步：先看主尺上露出的整毫米数；再看游标尺上第几根刻线（格）和主尺刻线对齐，用这个格数乘上游标精度，就是零头。最后把两部分的数值相加。' },
      { type: 'keypoint', label: '重点·游标卡尺读数', text: '<strong>游标卡尺读数 = 主尺整毫米数 + 对齐格数 × 精度。</strong>常用精度有 0.1 mm、0.05 mm、0.02 mm 三种。游标卡尺<strong>不需要估读</strong>，直接读到精度的那一位即可。' },
      { type: 'example', label: '例题·游标卡尺', text: '例：用精度 0.1 mm 的游标卡尺测金属丝直径，主尺读数为 5 mm，游标尺第 7 格与主尺对齐。求直径。<br><strong>解析</strong>：零头 = 7 × 0.1 mm = 0.7 mm，直径 = 5 mm + 0.7 mm = 5.7 mm = 0.0057 m。注意结果要换算成米再代入公式。' },
      { type: 'warn', label: '易错', text: '<strong>游标卡尺读数千万别估读！</strong>很多同学把它当螺旋测微器，多写一个估计数字，结果就错了。另外主尺单位一般是毫米，最后算电阻率时一定统一成米（除以 1000）。' },
      { type: 'heading', text: '三、螺旋测微器（千分尺）怎样读数' },
      { type: 'paragraph', text: '螺旋测微器更精密，能读到 0.001 mm（千分之一毫米）。它有一根固定刻度的"主尺"和可转动的"可动刻度套筒"。固定刻度上能看到整毫米和半毫米线；转动套筒，套筒边缘的刻度转过几格，每格代表 0.01 mm，并且还要在格与格之间估读一位。' },
      { type: 'list', items: ['先读固定刻度：看露出主尺的整毫米数，若半毫米线已露出则再加 0.5 mm', '再读可动刻度：套筒上对齐基准线的格数 × 0.01 mm', '估读一位：在可动刻度格与格之间估计出下一位', '三者相加，得到以毫米为单位的直径'] },
      { type: 'keypoint', label: '重点·螺旋测微器读数', text: '<strong>螺旋测微器读数 = 固定刻度 + 可动刻度格数 × 0.01 mm，还要估读一位。</strong>例如固定刻度 2.5 mm、可动刻度 18.3 格，则 d = 2.5 + 18.3 × 0.01 = 2.683 mm。测量前要先读"零误差"。' },
      { type: 'example', label: '例题·螺旋测微器', text: '例：固定刻度露出 2.5 mm，可动刻度第 19.4 格与基准线对齐，无零误差。求直径 d。<br><strong>解析</strong>：d = 2.5 mm + 19.4 × 0.01 mm = 2.5 + 0.194 = 2.694 mm = 2.694×10⁻³ m。该值即为金属丝直径，用于算横截面积 S。' },
      { type: 'table', headers: ['仪器', '精度', '是否估读', '读数要点'], rows: [['游标卡尺', '0.1 / 0.05 / 0.02 mm', '不估读', '主尺整毫米 + 对齐格数 × 精度'], ['螺旋测微器', '0.01 mm', '估读一位', '固定刻度 + 可动格数 × 0.01 + 估读'], ['毫米刻度尺', '1 mm', '估读一位', '测金属丝有效长度 l']] },
      { type: 'heading', text: '四、伏安法测电阻与内外接法' },
      { type: 'paragraph', text: '测出金属丝两端电压 U 和流过它的电流 I，由 R = U / I 得到电阻。但电流表和电压表本身都有电阻，接法不同会带来系统误差。金属丝电阻通常只有几欧到几十欧，属于"小电阻"，测量时多用电流表外接法，以减小误差。' },
      { type: 'list', items: ['电流表外接法：电压表并联在"电流表 + 电阻"整体两端，适合测小电阻', '电流表内接法：电流表在电压表内侧，适合测大电阻', '本实验金属丝电阻较小，一般选外接法', '滑动变阻器常用限流式，保证电流不超过电表量程'] },
      { type: 'keypoint', label: '重点·内外接选择', text: '<strong>大电阻用内接（R_x 大于电压表内阻量级），小电阻用外接（R_x 小于电流表内阻量级）。</strong>简单记：内接测大阻、外接测小阻。金属丝电阻小，用外接法更准。' },
      { type: 'tip', label: '提示', text: '<strong>金属丝长度 l 不是整根丝长，而是接入电路那段的直线长度。</strong>测量时要把金属丝拉直，用刻度尺贴着量两端接线柱之间的长度，且要在通电前后多测几次取平均，减小发热带来的误差。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">伏安法测金属丝电阻（电流表外接）</text><rect x="40" y="70" width="120" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="100" y="105" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">电源 E</text><rect x="220" y="70" width="120" height="34" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="280" y="92" font-size="12" fill="#234b45" text-anchor="middle">滑动变阻器</text><circle cx="430" cy="87" r="20" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="430" y="92" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">A</text><rect x="500" y="160" width="120" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="560" y="195" font-size="12" fill="#234b45" text-anchor="middle">金属丝 Rₓ</text><circle cx="430" cy="240" r="20" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="430" y="245" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">V</text><line x1="160" y1="100" x2="220" y2="87" stroke="#234b45" stroke-width="2"/><line x1="340" y1="87" x2="410" y2="87" stroke="#234b45" stroke-width="2"/><line x1="450" y1="87" x2="450" y2="160" stroke="#234b45" stroke-width="2"/><line x1="450" y1="190" x2="500" y2="190" stroke="#234b45" stroke-width="2"/><line x1="620" y1="190" x2="650" y2="190" stroke="#234b45" stroke-width="2"/><line x1="650" y1="190" x2="650" y2="240" stroke="#234b45" stroke-width="2"/><line x1="650" y1="240" x2="450" y2="240" stroke="#234b45" stroke-width="2"/><line x1="430" y1="260" x2="430" y2="290" stroke="#234b45" stroke-width="2"/><line x1="40" y1="130" x2="40" y2="290" stroke="#234b45" stroke-width="2"/><line x1="40" y1="290" x2="430" y2="290" stroke="#234b45" stroke-width="2"/><text x="340" y="310" font-size="13" fill="#234b45" text-anchor="middle">电压表并联在金属丝两端，电流表测总电流，适合小电阻</text></svg>', caption: '图1　伏安法测电阻电路（电流表外接法），适用于金属丝这类小电阻。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">螺旋测微器读数示意</text><rect x="60" y="80" width="360" height="50" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="70" y="112" font-size="18" fill="#234b45" font-family="monospace">2.5 | 0 5 10 15 19.4</text><rect x="60" y="150" width="360" height="40" rx="6" fill="#4fb3a5"/><text x="240" y="176" font-size="13" fill="#234b45" text-anchor="middle">可动刻度套筒（每格 0.01 mm）</text><text x="240" y="225" font-size="14" fill="#234b45" text-anchor="middle">固定刻度 2.5 mm（半毫米线已露出）</text><text x="240" y="252" font-size="14" fill="#234b45" text-anchor="middle">可动 19.4 格 → 0.194 mm</text><text x="240" y="280" font-size="14" fill="#1f7a6e" font-weight="bold" text-anchor="middle">读数 d = 2.5 + 0.194 = 2.694 mm</text></svg>', caption: '图2　螺旋测微器读数：固定刻度加可动刻度，并估读一位。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">游标卡尺读数示意（精度 0.1 mm）</text><rect x="60" y="90" width="380" height="40" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="70" y="116" font-size="16" fill="#234b45" font-family="monospace">5 mm  0 1 2 3 4 5 6 7</text><rect x="60" y="150" width="200" height="30" rx="6" fill="#4fb3a5"/><text x="160" y="171" font-size="13" fill="#234b45" text-anchor="middle">游标尺（第 7 格对齐）</text><text x="240" y="220" font-size="14" fill="#234b45" text-anchor="middle">主尺整毫米 = 5 mm</text><text x="240" y="248" font-size="14" fill="#234b45" text-anchor="middle">对齐格数 7 × 0.1 = 0.7 mm</text><text x="240" y="278" font-size="14" fill="#1f7a6e" font-weight="bold" text-anchor="middle">读数 = 5 + 0.7 = 5.7 mm（不估读）</text></svg>', caption: '图3　游标卡尺读数：主尺整毫米数加对齐格数乘精度，不估读。' }
    ],
    exercises: [
      { type: 'choice', question: '测定金属电阻率实验中，计算电阻率 ρ 需要用到的物理量组合是？', options: ['电压 U、电流 I', '电阻 R、长度 l、直径 d', '电动势 E、内阻 r', '功率 P、时间 t'], answer: '电阻 R、长度 l、直径 d', explanation: '由 ρ = R × S / l 且 S = π × d² / 4 可知，只要测出金属丝的电阻 R、有效长度 l 和直径 d，就能算出电阻率 ρ。U、I 只是求 R 的中间量，E、r、P、t 与本实验无关。' },
      { type: 'choice', question: '用精度 0.1 mm 的游标卡尺读数，主尺为 5 mm、游标尺第 7 格对齐，正确读数是？', options: ['5.07 mm', '5.7 mm', '5.70 mm', '12 mm'], answer: '5.7 mm', explanation: '游标卡尺不估读，读数 = 主尺整毫米 5 mm + 对齐格数 7 × 精度 0.1 mm = 5.7 mm，直接写到精度的那一位即可，不能多写估计位。' },
      { type: 'choice', question: '金属丝电阻较小，伏安法测其电阻应优先选用？', options: ['电流表内接法', '电流表外接法', '随便哪种都一样', '不用电流表'], answer: '电流表外接法', explanation: '被测电阻较小时，电压表分流影响小，电流表外接法测出的误差更小；内接法适用于大电阻。因此金属丝这类小电阻宜用外接法。' },
      { type: 'fill', question: '螺旋测微器读数 = 固定刻度 + 可动刻度格数 × ___ mm，且需要估读一位。', answer: '0.01', explanation: '螺旋测微器（千分尺）的可动刻度每小格代表 0.01 mm，读数时把固定刻度、可动刻度格数乘 0.01 以及估读的一位三者相加，单位为毫米。' },
      { type: 'fill', question: '金属丝横截面积 S 与直径 d 的关系式写作 S = ___（用 π 和 d 表示）。', answer: 'π × d² / 4|π d² / 4|π × (d/2)²|π (d/2)²', explanation: '金属丝可看作粗细均匀的圆柱，横截面积是圆面积 S = π × (d/2)² = π × d² / 4。计算时需把直径 d 换算成米，才能得到以平方米为单位的横截面积。' }
    ]
  });
})();
