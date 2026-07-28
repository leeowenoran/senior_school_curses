/* ============================================================
 * 高三复习 · 实验专题 · 专题四 实验基础知识与技能
 * 课时19：实验误差分析（系统误差与偶然误差、有效数字、图像法处理数据、逐差法）
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u19',
    name: '实验误差分析（系统误差与偶然误差、有效数字、图像法处理数据、逐差法）',
    chapter: '实验专题 · 专题四 实验基础知识与技能',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、测量一定有误差' },
      { type: 'paragraph', text: '用任何仪器测量，测出来的数值和真实值都不会完全一样，这种差别叫做误差。误差不是错误——错误是看错刻度、记错数，可以靠细心避免；而误差是测量本身带出来的，只能想办法减小，不能彻底消灭。做实验的核心本领之一，就是知道误差从哪来、怎么让它变小。' },
      { type: 'keypoint', label: '重点·误差与错误', text: '<strong>误差不可避免、只能减小；错误可以避免、必须消灭。</strong>误差是测量值与真实值的差异，源于仪器、方法、环境等；错误是人为疏忽，应杜绝。' },
      { type: 'list', items: ['系统误差：由仪器不准、原理不完美、方法粗陋带来，方向固定', '偶然误差：由读数起伏、环境微小波动带来，时大时小、时正时负', '我们追求的是：系统误差尽量消除，偶然误差用多次测量取平均来减小'] },
      { type: 'heading', text: '二、系统误差与偶然误差' },
      { type: 'paragraph', text: '系统误差有"顽固的方向性"：比如一把尺子本身短了 1 mm，每次量都会偏小；用伏安法测电阻时电流表接在电压表外侧，测得的电阻总偏大或总偏小。它重复测量时大小方向几乎不变。偶然误差则像手抖、温度微动，多次测同一样本，结果会上下乱跳，但取很多次的平均，它就明显变小。' },
      { type: 'list', items: ['系统误差来源：仪器零点偏移、原理近似（如忽略电表内阻）、环境恒定偏差', '偶然误差来源：读数估读不同、空气流动、电源微小波动', '减小系统误差：校准仪器、改进电路接法、换更准的方法', '减小偶然误差：增加测量次数、取算术平均值'] },
      { type: 'table', headers: ['对比项', '系统误差', '偶然误差'], rows: [['产生原因', '仪器/方法/原理', '偶然因素、读数起伏'], ['特点', '方向固定、重复出现', '时大时小、时正时负'], ['减小办法', '校准、改进方法', '多次测量取平均'], ['能否抵消', '取平均不能消除', '取平均可明显减小']] },
      { type: 'warn', label: '易错', text: '<strong>系统误差用"多测几次取平均"是消不掉的。</strong>比如电流表内接法导致的电阻偏大，你测十次再平均，结果还是偏大同样多。必须换接法（外接）或加修正，才能动它的"方向"。把两种误差的减小方法搞反，是考试常扣分点。' },
      { type: 'heading', text: '三、有效数字——读数的"规矩"' },
      { type: 'paragraph', text: '有效数字是从左边第一个非零数字起，到末位（含估读的那一位）为止的所有数字。它记录了两件事：一是数值大小，二是测量精度。例如刻度尺读 2.34 cm，数字 2、3、4 都是有效的，其中 4 是估读位，说明你能读到 0.01 cm 这一位。2.34 是三位有效数字。' },
      { type: 'list', items: ['从左起第一个非零数字算有效，前面和中间的 0 算有效', '末尾的 0 也算有效，如 2.30 cm 是三位，比 2.3 cm 更准', '像 0.023 只有 2、3 两位有效数字（前面零只定位）', '运算结果的有效数字位数，由最不准的那个数据决定'] },
      { type: 'keypoint', label: '重点·有效数字位', text: '<strong>有效数字位数反映测量精度：2.30 cm 是三位、2.3 cm 是两位，前者更准。</strong>记录结果时估读到的那一位必须保留，不能随意删掉末尾的 0，否则等于谎报精度。' },
      { type: 'example', label: '例题·有效数字', text: '例：用分度 1 mm 的刻度尺测量，某次读数为 3.8 cm，另一同学读成 3.80 cm。哪个更规范？<br><strong>解析</strong>：分度 1 mm 的尺子应估读到 0.1 mm，即 0.01 cm 位，所以应写成 3.80 cm（三位有效数字），表示估读到了百分位。只写 3.8 cm 漏掉了估读位，少记一位，不规范。' },
      { type: 'heading', text: '四、图像法处理数据' },
      { type: 'paragraph', text: '把测到的一对对数据（x, y）描在坐标纸上，连成一条平滑的直线或曲线，这就是图像法。它的好处：第一，能一眼看出物理量之间是不是正比关系；第二，偶然误差被"平均"了，因为直线会自然从点群中间穿过；第三，从图线的斜率、截距还能求出我们想要的未知量。' },
      { type: 'list', items: ['选坐标：两轴代表的量和单位要写清', '描点：数据点在图上用 × 或 ● 标出', '连线：让直线（或平滑曲线）尽量多地从点中间穿过，不强行过每个点', '求斜率：在线上取两相距远的点，用 (y₂−y₁)/(x₂−x₁) 计算'] },
      { type: 'tip', label: '提示', text: '<strong>图像法求斜率时，两点一定要取在直线本身上，而不是取某个实测点。</strong>这样算出的斜率才代表整体规律。两点的横向距离尽量拉大，可以减小读数误差带来的相对影响。' },
      { type: 'heading', text: '五、逐差法——让数据不浪费' },
      { type: 'paragraph', text: '做匀变速运动实验时，我们常测出一串相邻位移 x₁、x₂、…、x₆。如果直接拿相邻差 (x₂−x₁) 求加速度，只用了一对数据，误差大。逐差法把数据分成前后两半相减：a = (x₄+x₅+x₆ − x₁−x₂−x₃) / (9 T²)，相当于同时用了全部 6 段数据，偶然误差被有效压低。' },
      { type: 'keypoint', label: '重点·逐差法公式', text: '<strong>逐差法：把偶数段位移前后对半相减求差，充分利用全部数据减小误差。</strong>六段时 a = (x₄+x₅+x₆ − x₁−x₂−x₃) / (9 T²)，其中 T 是相邻两段的计时间隔。' },
      { type: 'example', label: '例题·逐差法', text: '例：打点计时器研究小车，相邻计数点间隔 T = 0.1 s。测得六段位移（单位 cm）：x₁=2.80、x₂=3.20、x₃=3.60、x₄=4.00、x₅=4.40、x₆=4.80。求加速度。<br><strong>解析</strong>：用逐差法 a = (x₄+x₅+x₆ − x₁−x₂−x₃)/(9 T²) = (4.00+4.40+4.80 − 2.80−3.20−3.60)/(9×0.1²) = (13.2 − 9.6)/0.09 = 3.6/0.09 = 40 cm/s² = 0.40 m/s²。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">误差的两大类</text><rect x="40" y="70" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">系统误差</text><text x="180" y="135" font-size="12" fill="#234b45" text-anchor="middle">方向固定、重复出现</text><text x="180" y="162" font-size="12" fill="#234b45" text-anchor="middle">如尺子偏短→总偏小</text><text x="180" y="189" font-size="12" fill="#234b45" text-anchor="middle">取平均消不掉</text><text x="180" y="216" font-size="12" fill="#4fb3a5" text-anchor="middle">靠校准/改方法减小</text><rect x="360" y="70" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">偶然误差</text><text x="500" y="135" font-size="12" fill="#234b45" text-anchor="middle">时大时小、时正时负</text><text x="500" y="162" font-size="12" fill="#234b45" text-anchor="middle">如读数手抖</text><text x="500" y="189" font-size="12" fill="#234b45" text-anchor="middle">取平均可减小</text><text x="500" y="216" font-size="12" fill="#4fb3a5" text-anchor="middle">靠多测几次减小</text><text x="340" y="300" font-size="12" fill="#234b45" text-anchor="middle">两类误差来源不同，减小方法也不同</text></svg>', caption: '图1　系统误差方向固定、需校准改进；偶然误差随机波动、靠多次测量取平均减小。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">有效数字：估读到哪一位</text><rect x="60" y="80" width="420" height="46" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="70" y="109" font-size="13" fill="#234b45">刻度尺读 2.34 cm（估到 0.01 cm 位）</text><rect x="60" y="150" width="420" height="46" fill="#4fb3a5"/><text x="70" y="179" font-size="13" fill="#234b45">2.3 0 cm 表示估读到百分位，三位有效</text><rect x="60" y="220" width="420" height="46" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="70" y="249" font-size="13" fill="#234b45">末尾的 0 不能省，它代表精度</text><text x="520" y="180" font-size="40" fill="#1f7a6e" text-anchor="middle" font-weight="bold">3位</text></svg>', caption: '图2　2.30 cm 是三位有效数字，末位 0 表示估读到百分位，记录时不可省略。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图像法：从直线斜率求未知量</text><rect x="90" y="70" width="500" height="200" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="110" y1="250" x2="560" y2="250" stroke="#234b45" stroke-width="2"/><line x1="110" y1="250" x2="110" y2="90" stroke="#234b45" stroke-width="2"/><line x1="130" y1="235" x2="540" y2="105" stroke="#4fb3a5" stroke-width="3"/><polygon points="540,105 528,108 533,119" fill="#4fb3a5"/><circle cx="250" cy="200" r="4" fill="#234b45"/><circle cx="340" cy="170" r="4" fill="#234b45"/><circle cx="430" cy="140" r="4" fill="#234b45"/><circle cx="200" cy="218" r="5" fill="#2e9e8f"/><circle cx="490" cy="123" r="5" fill="#2e9e8f"/><text x="200" y="238" font-size="11" fill="#234b45" text-anchor="middle">(x₁,y₁)</text><text x="490" y="142" font-size="11" fill="#234b45" text-anchor="middle">(x₂,y₂)</text><text x="340" y="300" font-size="12" fill="#234b45" text-anchor="middle">斜率 k = (y₂ − y₁) / (x₂ − x₁)</text></svg>', caption: '图3　图像法取线上两点求斜率 k = (y₂−y₁)/(x₂−x₁)，可求出加速度、电阻等未知量。' }
    ],
    exercises: [
      { type: 'choice', question: '关于系统误差和偶然误差，下列说法正确的是？', options: ['系统误差可以通过多次测量取平均来消除', '偶然误差时大时小、方向随机，取平均可减小', '两者都能用多测几次的方法完全消除', '系统误差是由人为看错刻度造成的'], answer: '偶然误差时大时小、方向随机，取平均可减小', explanation: '偶然误差来自随机因素，单次测量时大时小、时正时负，多次测量取算术平均能明显减小它。系统误差方向固定、重复出现，取平均不能消除，只能靠校准仪器或改进方法；看错刻度属于错误而非误差。' },
      { type: 'choice', question: '用分度值为 1 mm 的刻度尺测量长度，下列记录符合有效数字规范的是？', options: ['2.3 cm', '2.30 cm', '2.305 cm', '23 mm'], answer: '2.30 cm', explanation: '分度 1 mm 的刻度尺应估读到 0.1 mm，即 0.01 cm 这一位，所以结果应写成三位有效数字如 2.30 cm。2.3 cm 漏掉估读位只有两位，不规范；2.305 cm 多估了一位，超出精度；23 mm 未体现估读。' },
      { type: 'choice', question: '用图像法处理数据求斜率时，下列做法正确的是？', options: ['取某一个实测数据点代入公式', '在图线上另外取两个相距较远的点计算', '直接用第一个和最后一个实测点', '斜率由手画直线的方向随便估'], answer: '在图线上另外取两个相距较远的点计算', explanation: '求斜率的两点必须取在拟合成的图线（直线）上，而不是某个原始数据点，这样结果代表整体规律、不被单个点的误差带偏。两点横向距离尽量拉大，可减小读数误差的相对影响，得到更可靠斜率。' },
      { type: 'fill', question: '打点计时器实验中，六段相邻位移 x₁…x₆、计时间隔 T，用逐差法求加速度的公式为 a = (x₄+x₅+x₆ − x₁−x₂−x₃) / ___（用 T 表示）。', answer: '9 T²', explanation: '逐差法把六段位移前后三对相减，相当于利用了全部数据。公式为 a = (x₄+x₅+x₆ − x₁−x₂−x₃)/(9 T²)，其中每个大差对应 3 个 T²，三对合计 9 T²。这样比只用相邻一段差求加速度误差更小。' },
      { type: 'fill', question: '误差和错误的根本区别在于：误差___（填"可以"或"不可"）避免，只能减小；错误___（填"可以"或"不可"）避免。', answer: '不可|可以', explanation: '误差是测量值与真实值的必然差异，由仪器、方法、环境决定，不可避免只能设法减小；错误是看错、记错等人为疏忽，完全可以避免也必须杜绝。填空题两空分别填"不可"与"可以"，也可用"不可|可以"表示两种皆可。' }
    ]
  });
})();
