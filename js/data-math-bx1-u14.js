/* ============================================================
 * 高一数学 · 必修 第一册 · 第五章 三角函数
 * 第24课时：三角函数的应用（人教A版 §5.7）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;
  v.points.push(

    /* ---------------- 第24课时 三角函数的应用 ---------------- */
    {
      id: 'bx1-u14-l1',
      name: '三角函数的应用',
      chapter: '第五章 三角函数 · 5.7',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、用三角函数描述周期现象' },
        { type: 'paragraph', text: '自然界大量的“周而复始”现象——单摆、弹簧振动、潮汐、气温年变化、交流电——都可以用 y = A sin(ωx + φ) + h 这类三角函数模型刻画。' },
        { type: 'keypoint', label: '重点·建模形式', text: '最一般的周期模型为 <strong>y = A sin(ωx + φ) + h</strong>：<br>A 为<strong>振幅</strong>（偏离平衡位置的最大距离），<br>ω 决定<strong>周期 T = 2π/|ω|</strong>，<br>φ 为<strong>初相</strong>，<br>h 为<strong>平衡位置（中心线）</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="180" fill="#eef4fc"/><line x1="60" y1="100" x2="620" y2="100" stroke="#999" stroke-dasharray="5,4"/><path d="M80 100 Q150 40 220 100 Q290 160 360 100 Q430 40 500 100 Q570 160 600 100" fill="none" stroke="#2b5b9e" stroke-width="3"/><text x="340" y="40" font-size="14" fill="#2b5b9e" text-anchor="middle">波峰 A（高出中心线）</text><text x="340" y="160" font-size="14" fill="#c0392b" text-anchor="middle">波谷 −A（低于中心线）</text><text x="340" y="130" font-size="13" fill="#33536e" text-anchor="middle">中心线 y=h 即平衡位置</text></svg>', caption: '图1　周期模型 y=A sin(ωx+φ)+h：A 是振幅，h 是中心线（平衡位置）。' },
        { type: 'list', items: ['A：振幅（最大偏离）', 'T=2π/|ω|：周期（一次完整循环时长）', 'φ：初相（初始相位）', 'h：平衡位置/中心线'] },
        { type: 'heading', text: '二、建模步骤' },
        { type: 'keypoint', label: '重点·四步建模', text: '用三角函数解实际应用：<br>① <strong>设变量</strong>：选时间 t 为自变量，待求量为 y；<br>② <strong>定形式</strong>：据周期现象设 y = A sin(ωt + φ) + h；<br>③ <strong>求参数</strong>：由最值、周期、初始条件定 A、ω、φ、h；<br>④ <strong>求解答</strong>：代入具体时刻计算。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="150" fill="#eef4fc"/><rect x="40" y="50" width="150" height="52" rx="8" fill="#2b5b9e"/><text x="115" y="83" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">设变量</text><rect x="210" y="50" width="150" height="52" rx="8" fill="#4a7de0"/><text x="285" y="83" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">定形式</text><rect x="380" y="50" width="150" height="52" rx="8" fill="#5a7a2a"/><text x="455" y="83" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">求参数</text><rect x="550" y="50" width="120" height="52" rx="8" fill="#e05d44"/><text x="610" y="83" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">求解</text><text x="340" y="128" font-size="14" fill="#33536e" text-anchor="middle">三角函数应用建模四步</text></svg>', caption: '图2　应用建模四步：设变量→定形式→求参数→求解。' },
        { type: 'example', label: '例题1', text: '弹簧振子偏离平衡位置的最大距离为 5 cm，周期 2 s，从平衡位置向上开始运动。写出位移模型。<br><br><strong>解</strong>：A = 5，T = 2 ⇒ ω = 2π/2 = π。t = 0 时位移 0 且向上（sin 从 0 增），取 φ = 0、h = 0，故 <strong>y = 5 sin(π t)</strong>（单位 cm）。' },
        { type: 'heading', text: '三、常见实际场景' },
        { type: 'keypoint', label: '重点·场景对应', text: '① <strong>简谐运动</strong>（弹簧、单摆）：y = A sin(ωt + φ)；<br>② <strong>潮汐/气温</strong>：常加中心线 h，y = A sin(ωt + φ) + h；<br>③ <strong>交流电</strong>：电压 u = Uₘ sin(ωt + φ)，ω = 2πf（f 为频率）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="150" fill="#eef4fc"/><rect x="60" y="50" width="180" height="52" rx="8" fill="#2b5b9e"/><text x="150" y="83" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">简谐运动</text><rect x="260" y="50" width="180" height="52" rx="8" fill="#4a7de0"/><text x="350" y="83" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">潮汐气温(+h)</text><rect x="460" y="50" width="180" height="52" rx="8" fill="#5a7a2a"/><text x="550" y="83" font-size="14" fill="#fff" font-weight="bold" text-anchor="middle">交流电 u=Uₘsin</text></svg>', caption: '图3　三角模型的三类典型应用：振动、潮汐气温、交流电。' },
        { type: 'example', label: '例题2', text: '某海滨城市昼夜最高温 30℃、最低温 22℃，以正弦函数描述日气温 y(t)（t 为小时，t=0 为午夜）。<br><br><strong>解</strong>：中心线 h = (30+22)/2 = 26，振幅 A = (30−22)/2 = 4；周期 24 ⇒ ω = 2π/24 = π/12。最高温在 14 时，令 y = 26 + 4 sin(π/12·(t−14))。' },
        { type: 'heading', text: '四、建模注意点' },
        { type: 'table', headers: ['环节', '关键', '易错'], rows: [['定形式', '确认是周期现象', '非周期硬套三角'], ['求 A', '取(最大−最小)/2', '误用最大最小值本身'], ['求 ω', 'T=2π/|ω|', '周期与频率混淆'], ['求 φ', '代入初始条件', '初相范围不清']] },
        { type: 'warn', label: '易错', text: '三类失误：①<strong>振幅算错</strong>，A 应为 (最大值−最小值)/2，而非最大值本身；②<strong>周期与频率混淆</strong>，ω = 2π/T 且 T 是“一次循环的时长”，不是频率 f（ω = 2πf）；③<strong>初相 φ 定错</strong>，要代入一个已知时刻（如 t=0 或极值点）反解，并注意题目对 φ 范围的约定。' },
        { type: 'tip', label: '记忆', text: '应用建模口诀：<strong>“振幅看半差、周期定 ω、初相代点求”</strong>。先想清楚这是不是周期现象，再写 y = A sin(ωt + φ) + h，把“最大最小”翻译成 A 与 h，把“多久循环一次”翻译成 T 进而 ω，最后用一个已知点解出 φ。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['周期模型 y=A sin(ωx+φ)+h', 'A 振幅=(最大−最小)/2', 'T=2π/|ω|，h 为平衡位置', '建模四步：设变量→定形式→求参数→求解', 'φ 由已知时刻代入反解'] },
        { type: 'reading', text: '三角函数建模体现的是“用周期规律预测未来”的思想：只要现象真的近似周期（潮汐、四季、交流电流），我们就能用少量参数（A、ω、φ、h）把复杂变化压缩成一个简洁公式，并据此外推任意时刻的值。这也是傅里叶分析的核心直觉——任意周期信号都能分解为不同频率的正弦波叠加，本章学的单一正弦模型正是它的基石。' }
      ],
      exercises: [
        { type: 'choice', question: '在模型 y = A sin(ωx + φ) + h 中，h 表示？', options: ['振幅', '周期', '平衡位置（中心线）', '初相'], answer: '平衡位置（中心线）', explanation: '模型 y=A sin(ωx+φ)+h 中，A 是振幅、T=2π/|ω| 是周期、φ 是初相、h 是平衡位置（图象的中心线）。故 h 表示平衡位置。' },
        { type: 'fill', question: '某周期现象振幅为 4、中心线为 10，则最大值 = ____。', answer: '14', explanation: '最大值 = h + A = 10 + 4 = 14，最小值 = h − A = 6。故填 14。' },
        { type: 'choice', question: '某振动周期 T = 4 s，则角频率 ω =？', options: ['π/2', 'π', '2π', '4π'], answer: 'π/2', explanation: 'ω = 2π/T = 2π/4 = π/2。注意 ω 与频率 f=1/T 不同，ω=2πf。故选 π/2。' },
        { type: 'fill', question: '振幅 A = (最大值 − 最小值) / ____（填数字）。', answer: '2', explanation: '最大偏离平衡位置的距离为 A，由 最大值=h+A、最小值=h−A 相减得 最大值−最小值=2A，故 A=(最大值−最小值)/2。填 2。' },
        { type: 'choice', question: '关于三角函数应用建模，第一步通常应？', options: ['直接写 y=A sin(ωx+φ)', '确认现象是否为周期变化', '先求初相 φ', '先求振幅 A'], answer: '确认现象是否为周期变化', explanation: '只有现象确实近似周期（如振动、潮汐、气温），才适合用三角函数建模。非周期现象硬套三角模型会得出错误结论，故第一步应先确认周期性。' }
      ]
    }

  );
})();
