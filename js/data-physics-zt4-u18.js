/* ============================================================
 * 高三复习 · 实验专题 · 专题四 实验基础知识与技能
 * 课时18：基本仪器的读数（刻度尺、螺旋测微器、游标卡尺、秒表、电流表/电压表、天平）
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u18',
    name: '基本仪器的读数（刻度尺、螺旋测微器、游标卡尺、秒表、电流表/电压表、天平）',
    chapter: '实验专题 · 专题四 实验基础知识与技能',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、读数前先看清"分度值"' },
      { type: 'paragraph', text: '所有测量仪器的读数，第一步都是看清它的分度值——也就是相邻两刻线代表的物理量大小。比如一把尺子相邻刻线差 1 mm，分度值就是 1 mm；若差 0.1 mm，分度值就是 0.1 mm。分度值决定了你读数的精确程度，也决定了要不要"估读"到分度值的下一位。' },
      { type: 'keypoint', label: '重点·分度值与估读', text: '<strong>分度值是相邻两刻线代表的量；大多数需要估读到分度值的下一位（如刻度尺、螺旋测微器），但游标卡尺不估读。</strong>先定分度值，再谈怎么读，顺序不能乱。' },
      { type: 'list', items: ['刻度尺：分度常 1 mm，估读到 0.1 mm', '螺旋测微器：分度 0.01 mm，估读到 0.001 mm', '游标卡尺：分度有 0.1/0.05/0.02 mm，不估读', '电表：先定量程和分度值再读'] },
      { type: 'heading', text: '二、刻度尺与螺旋测微器' },
      { type: 'paragraph', text: '刻度尺读数时，让零刻线对准被测物一端，另一端对齐的刻线加上估读的一位就是结果，例如对齐 2.3 与 2.4 之间、估为 2.34 cm。螺旋测微器（千分尺）更精密：固定套筒上的读数加上可动微分筒的读数，再乘 0.01 mm，并估读到千分位。' },
      { type: 'list', items: ['螺旋测微器读数 = 固定刻度 + 可动刻度 × 0.01 mm', '若固定套筒露出半刻线（0.5 mm 线），要加上 0.5 mm', '最终结果估读到 0.001 mm（千分位）', '用完要松开棘轮，别让测砧长期紧压'] },
      { type: 'keypoint', label: '重点·螺旋测微器', text: '<strong>螺旋测微器读数 = 固定刻度 + 可动刻度格数 × 0.01 mm，估读到 0.001 mm。</strong>注意半刻线是否露出：露出则固定部分多 0.5 mm。它是高中最精密的长度读数工具。' },
      { type: 'example', label: '例题·螺旋测微器', text: '例：螺旋测微器固定套筒显示 5.5 mm（半刻线已露出），可动微分筒第 18 格后约 0.3 小格，即 18.3 格。求读数。<br><strong>解析</strong>：读数 = 5.5 + 18.3 × 0.01 = 5.5 + 0.183 = 5.683 mm。注意一定要估读到千分位，写成 5.683 mm。' },
      { type: 'warn', label: '易错', text: '<strong>螺旋测微器必须估读到 0.001 mm，而游标卡尺完全不估读——两者恰恰相反，极易混淆。</strong>若把螺旋测微器只读成 5.68 mm（少一位）会扣分；反过来给游标卡尺硬加一位小数也是错的。半刻线是否露出也常漏看，造成 0.5 mm 误差。' },
      { type: 'heading', text: '三、游标卡尺与秒表' },
      { type: 'paragraph', text: '游标卡尺靠主尺和可以滑动的游标配合读数，常见 10、20、50 分度，对应精度 0.1、0.05、0.02 mm。读数 = 主尺整毫米数 + 游标上第 n 条刻线对齐 × 精度，结果不估读。秒表则看小盘（分）和大盘（秒），注意秒表一般不估读。' },
      { type: 'list', items: ['游标卡尺读数 = 主尺整毫米 + 游标对齐格数 × 精度', '50 分度精度 0.02 mm，结果应为 0.02 的整数倍', '游标卡尺不估读，读到精度位即可', '秒表先读小盘分钟，再读大盘秒数相加'] },
      { type: 'table', headers: ['仪器', '精度/分度值', '是否估读', '单位'], rows: [['刻度尺', '1 mm', '估读一位', 'mm 或 cm'], ['螺旋测微器', '0.01 mm', '估读到 0.001 mm', 'mm'], ['游标卡尺(50分度)', '0.02 mm', '不估读', 'mm'], ['秒表', '0.1 s', '一般不估读', 's']] },
      { type: 'tip', label: '提示', text: '<strong>记口诀："螺旋要估三位、游标不估读"。</strong>游标卡尺读数时先在主尺找到游标零刻线左边的整毫米数，再找游标上与主尺刻线最对齐的那条，用格数乘精度。若 50 分度读成 20.3 mm（不是 0.02 倍数）一定算错。' },
      { type: 'heading', text: '四、电流表、电压表与天平' },
      { type: 'paragraph', text: '电表读数先确认量程和对应的分度值：如 0–0.6 A 量程分度 0.02 A，0–3 A 量程分度 0.1 A；电压表 0–3 V 分度 0.1 V，0–15 V 分度 0.5 V。指针式电表一般估读到分度值的下一位。天平测质量则先调平，读游码对应刻度加上砝码总质量。' },
      { type: 'list', items: ['先看清电表量程，再算分度值', '指针在第几小格就乘分度值，估读一位', '同一电表不同量程分度值不同，别套错', '天平：砝码总和 + 游码左端对准的刻度值'] },
      { type: 'warn', label: '易错·电表量程', text: '<strong>电表必须先看量程再读，同一表盘换量程分度值会变。</strong>例如电流表 0–0.6 A 分度 0.02 A，0–3 A 分度 0.1 A，若把 0.6 量程的指针按 3 A 量程读，数值会差 5 倍。读数前务必确认接线柱和量程档位。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">螺旋测微器读数</text><rect x="60" y="90" width="320" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="220" y="128" font-size="13" fill="#234b45" text-anchor="middle">固定套筒：读 mm（含半刻线）</text><rect x="60" y="180" width="320" height="60" rx="8" fill="#4fb3a5"/><text x="220" y="218" font-size="13" fill="#234b45" text-anchor="middle">微分筒：格数 × 0.01 mm</text><rect x="420" y="90" width="200" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="520" y="135" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">公式</text><text x="520" y="170" font-size="12" fill="#234b45" text-anchor="middle">读数 = 固定</text><text x="520" y="195" font-size="12" fill="#234b45" text-anchor="middle">+ 可动×0.01</text><text x="520" y="222" font-size="12" fill="#234b45" text-anchor="middle">估到 0.001 mm</text></svg>', caption: '图1　螺旋测微器：固定套筒读毫米（注意半刻线），微分筒格数乘 0.01 mm，估到千分位。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">游标卡尺读数</text><rect x="50" y="80" width="420" height="40" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="60" y="106" font-size="12" fill="#234b45">主尺（mm 整毫米）</text><rect x="50" y="140" width="420" height="34" fill="#4fb3a5"/><text x="60" y="163" font-size="12" fill="#234b45">游标（找对齐格 × 精度）</text><rect x="490" y="80" width="150" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="565" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">读数</text><text x="565" y="152" font-size="12" fill="#234b45" text-anchor="middle">= 主尺整mm</text><text x="565" y="178" font-size="12" fill="#234b45" text-anchor="middle">+ n×精度</text><text x="565" y="210" font-size="12" fill="#234b45" text-anchor="middle">不估读</text><text x="260" y="270" font-size="12" fill="#234b45" text-anchor="middle">50 分度精度 0.02 mm，结果必为 0.02 的整数倍</text></svg>', caption: '图2　游标卡尺：主尺整毫米数 + 游标对齐格数 × 精度，结果不估读。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电表读数：先定量程再读</text><circle cx="340" cy="160" r="90" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><g stroke="#234b45" stroke-width="1.5"><line x1="340" y1="75" x2="340" y2="95"/><line x1="340" y1="225" x2="340" y2="245"/><line x1="255" y1="160" x2="275" y2="160"/><line x1="405" y1="160" x2="425" y2="160"/></g><line x1="340" y1="160" x2="395" y2="120" stroke="#4fb3a5" stroke-width="3"/><text x="340" y="275" font-size="12" fill="#234b45" text-anchor="middle">先确认量程→算分度值→指针×分度，估读一位</text></svg>', caption: '图3　指针式电表：先定量程和分度值，再按指针位置读数并估读一位。' }
    ],
    exercises: [
      { type: 'choice', question: '关于螺旋测微器与游标卡尺的读数，下列说法正确的是？', options: ['两者都要估读一位', '螺旋测微器估读到 0.001 mm，游标卡尺不估读', '两者都不估读', '游标卡尺估读到 0.001 mm'], answer: '螺旋测微器估读到 0.001 mm，游标卡尺不估读', explanation: '螺旋测微器分度 0.01 mm，需估读到千分位即 0.001 mm；游标卡尺靠游标对齐读数，不估读，结果精确到其精度位（如 0.02 mm）。这是两套仪器最关键的区别，常考。' },
      { type: 'choice', question: '一只电流表有 0–0.6 A 和 0–3 A 两档，若使用 0–0.6 A 量程，其分度值约为？', options: ['0.1 A', '0.02 A', '0.5 A', '0.01 A'], answer: '0.02 A', explanation: '表盘通常把 0–0.6 A 量程均分成 30 小格，每格代表 0.6 / 30 = 0.02 A；而 0–3 A 量程均分成 30 格，每格 0.1 A。换量程分度值会变，读数前必须先确认所用档位。' },
      { type: 'choice', question: '50 分度游标卡尺的精度（分度值）是？', options: ['0.1 mm', '0.05 mm', '0.02 mm', '0.01 mm'], answer: '0.02 mm', explanation: '游标卡尺分度值 = 主尺 1 mm / 分度数。50 分度即 1 mm 分为 50 份，精度 = 1/50 = 0.02 mm。10 分度为 0.1 mm、20 分度为 0.05 mm，注意区分。' },
      { type: 'fill', question: '螺旋测微器读数 = 固定刻度 + 可动刻度格数 × ___ mm（填数值）。', answer: '0.01', explanation: '螺旋测微器螺杆螺距为 0.5 mm，微分筒转一圈前进 0.5 mm，筒上 50 小格，每格对应 0.5/50 = 0.01 mm。所以可动刻度每格代表 0.01 mm，读数时还要估读到下一位（0.001 mm）。' },
      { type: 'fill', question: '50 分度游标卡尺测得主尺整毫米为 20 mm，游标第 12 格与主尺刻线对齐，则读数为 ___ mm。', answer: '20.24', explanation: '游标卡尺读数 = 主尺整毫米 + 对齐格数 × 精度 = 20 + 12 × 0.02 = 20.24 mm。结果应为精度 0.02 mm 的整数倍，本题恰好 20.24 mm，且游标卡尺不估读。' }
    ]
  });
})();
