/* ============================================================
 * 高三复习 · 实验专题 · 专题二 电学实验
 * 课时10：描绘小灯泡的伏安特性曲线（滑动变阻器分压接法）
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u10',
    name: '描绘小灯泡的伏安特性曲线（滑动变阻器分压接法）',
    chapter: '实验专题 · 专题二 电学实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、为什么要描绘小灯泡的伏安特性曲线' },
      { type: 'paragraph', text: '普通电阻（如金属丝）的电阻基本不变，电压升高一倍，电流也升高一倍，U-I 图线是一条过原点的直线。但小灯泡发光时温度很高，温度越高电阻越大，所以小灯泡的电阻不是定值。我们做实验，就是改变加在灯泡上的电压，记录对应的电流，画出 U-I 或 I-U 图线，看看它的"脾气"。' },
      { type: 'keypoint', label: '重点·小灯泡电阻随温度变', text: '<strong>小灯泡的电阻随温度升高而增大，所以伏安特性曲线不是直线，而是向上弯曲的。</strong>电压越大、灯越亮、温度越高，电阻越大，曲线越"平缓"（同样电压增量对应的电流增量变小）。' },
      { type: 'list', items: ['小灯泡电阻随温度升高而变大', 'U-I 图线是向上弯曲的曲线，不是直线', 'I-U 图线则是向下弯曲（斜率变小）', '本实验要测多组数据才能描出完整曲线'] },
      { type: 'heading', text: '二、为什么必须用分压接法' },
      { type: 'paragraph', text: '要画完整曲线，必须让小灯泡两端的电压从 0 开始一点点增大。如果用普通的"限流接法"，负载电压是从某个较大值往上调，起点不是 0，会丢掉电压很小的一段数据。滑动变阻器的"分压接法"能实现电压从 0 连续调到接近电源电动势，正好满足要求。' },
      { type: 'keypoint', label: '重点·分压接法', text: '<strong>分压接法：把滑动变阻器两端都接在电源上，滑片 P 引出一条线接负载。</strong>负载电压等于滑片到一端之间的电压，滑片移到端点时电压为 0，移到另一端时接近 E，可调范围从 0 到 E，非常广。' },
      { type: 'example', label: '例题·分压接法电压范围', text: '例：电源电动势 E = 4 V，滑动变阻器作分压器使用，负载为小灯泡。问灯泡两端电压 U 的可调范围。<br><strong>解析</strong>：分压接法中，滑片从一个端点滑到另一个端点，负载电压从 0 连续变化到接近 E，所以 U 的范围是 0 到约 4 V，这就是能取到从零开始全部数据的原因。' },
      { type: 'warn', label: '易错', text: '<strong>描绘小灯泡曲线切勿用限流接法代替分压接法。</strong>限流接法负载电压不能从 0 开始，会漏掉低压段的关键点，画出的曲线不完整。此外闭合开关前，分压接法要把滑片放在使负载电压为 0 的那一端。' },
      { type: 'heading', text: '三、电流表该用外接还是内接' },
      { type: 'paragraph', text: '小灯泡的电阻一般只有几欧，属于小电阻。如果用电流表内接，电流表分压会明显影响测量；用外接法时，电压表分流很小，误差更小。因此本实验通常采用电流表外接法。' },
      { type: 'list', items: ['小灯泡电阻小，选电流表外接法', '电压表并联在灯泡两端，测灯泡电压', '电流表测通过灯泡的电流', '电表量程要选合适，先估计最大电流再选档'] },
      { type: 'keypoint', label: '重点·外接法选取', text: '<strong>小灯泡电阻远小于电压表内阻，用外接法误差更小。</strong>电流表外接时，电压表读数就是灯泡真实电压，电流表读数略大（含电压表分流），但电压表内阻很大，分流很小，总体更准。' },
      { type: 'example', label: '例题·数据描点', text: '例：某次测得小灯泡电压 U = 2.0 V、电流 I = 0.30 A，求此时灯泡电阻。<br><strong>解析</strong>：由 R = U / I = 2.0 / 0.30 ≈ 6.7 Ω。多测几组算出不同电压下的电阻，会发现电压越高电阻越大，印证了电阻随温度升高。' },
      { type: 'table', headers: ['接法', '负载电压范围', '适用场景', '本实验是否采用'], rows: [['限流接法', '从某值到 E', '只需粗略调电流', '不采用'], ['分压接法', '0 到 E', '电压需从 0 连续调', '采用'], ['电流表内接', '—', '测大电阻', '不采用'], ['电流表外接', '—', '测小电阻', '采用']] },
      { type: 'heading', text: '四、实验步骤与注意事项' },
      { type: 'paragraph', text: '先把滑动变阻器接成分压器，滑片置于使灯泡电压为 0 的位置；选用电流表外接；闭合开关后，慢慢移动滑片，逐次增大电压，记录每组 U、I；最后以 U 为横轴、I 为纵轴（或反过来）描点连线，得到伏安特性曲线。' },
      { type: 'list', items: ['开关闭合前滑片置于分压最小（电压为 0）端', '电压从 0 起逐步增大，多取 8 到 10 组数据', '不要超过小灯泡额定电压，避免烧坏', '用平滑曲线连点，不画成折线'] },
      { type: 'tip', label: '提示', text: '<strong>画图时横坐标用电压 U、纵坐标用电流 I 最直观。</strong>曲线应从原点附近开始，随着电压升高越来越平缓。若图线在低压段看起来近似直线，那是因为灯丝温度还不高、电阻变化不大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">分压接法电路图（小灯泡为负载）</text><rect x="50" y="80" width="120" height="55" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="110" y="112" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">电源 E</text><rect x="200" y="70" width="240" height="34" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="320" y="92" font-size="12" fill="#234b45" text-anchor="middle">滑动变阻器（分压）</text><circle cx="490" cy="150" r="18" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="490" y="155" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">A</text><circle cx="490" cy="230" r="18" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="490" y="235" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">V</text><rect x="560" y="170" width="90" height="50" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="605" y="200" font-size="12" fill="#234b45" text-anchor="middle">小灯泡</text><line x1="170" y1="105" x2="200" y2="87" stroke="#234b45" stroke-width="2"/><line x1="320" y1="104" x2="320" y2="150" stroke="#234b45" stroke-width="2"/><line x1="320" y1="150" x2="472" y2="150" stroke="#234b45" stroke-width="2"/><line x1="508" y1="150" x2="560" y2="180" stroke="#234b45" stroke-width="2"/><line x1="605" y1="220" x2="605" y2="230" stroke="#234b45" stroke-width="2"/><line x1="490" y1="248" x2="490" y2="270" stroke="#234b45" stroke-width="2"/><line x1="320" y1="270" x2="490" y2="270" stroke="#234b45" stroke-width="2"/><line x1="440" y1="270" x2="440" y2="230" stroke="#234b45" stroke-width="2"/><line x1="440" y1="230" x2="472" y2="230" stroke="#234b45" stroke-width="2"/><text x="340" y="308" font-size="13" fill="#234b45" text-anchor="middle">滑片 P 输出电压接灯泡，电压可从 0 调到 E</text></svg>', caption: '图1　分压接法电路：滑动变阻器作分压器，小灯泡电压从 0 连续可调。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">小灯泡的伏安特性曲线（I-U 曲线）</text><line x1="90" y1="280" x2="620" y2="280" stroke="#234b45" stroke-width="2"/><line x1="90" y1="60" x2="90" y2="280" stroke="#234b45" stroke-width="2"/><text x="360" y="305" font-size="13" fill="#234b45" text-anchor="middle">电压 U（横轴）</text><text x="60" y="160" font-size="13" fill="#234b45" text-anchor="middle" transform="rotate(-90 60 160)">电流 I（纵轴）</text><path d="M 90 280 Q 280 250 420 160 Q 510 100 600 72" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="200" cy="268" r="4" fill="#4fb3a5"/><circle cx="320" cy="225" r="4" fill="#4fb3a5"/><circle cx="420" cy="160" r="4" fill="#4fb3a5"/><circle cx="520" cy="108" r="4" fill="#4fb3a5"/><text x="340" y="305" font-size="13" fill="#234b45" text-anchor="middle"> </text><text x="540" y="300" font-size="13" fill="#1f7a6e" font-weight="bold" text-anchor="middle">曲线向下弯曲：电压越高电阻越大</text></svg>', caption: '图2　小灯泡 I-U 曲线：随电压升高曲线变平缓，说明电阻增大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">限流接法 vs 分压接法电压范围</text><rect x="50" y="80" width="260" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="112" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">限流：U 从 U₀ 到 E</text><text x="180" y="135" font-size="12" fill="#234b45" text-anchor="middle">起点不是 0，丢低压段</text><rect x="370" y="80" width="260" height="70" rx="8" fill="#4fb3a5"/><text x="500" y="112" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">分压：U 从 0 到 E</text><text x="500" y="135" font-size="12" fill="#234b45" text-anchor="middle">从零起调，数据完整</text><rect x="240" y="190" width="200" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="225" font-size="13" fill="#234b45" text-anchor="middle">本实验选分压接法</text><text x="340" y="282" font-size="13" fill="#1f7a6e" font-weight="bold" text-anchor="middle">电压从 0 开始，才能描出完整曲线</text></svg>', caption: '图3　本实验选分压接法，使灯泡电压能从 0 连续调节。' }
    ],
    exercises: [
      { type: 'choice', question: '描绘小灯泡伏安特性曲线时，滑动变阻器应采用哪种接法？', options: ['限流接法', '分压接法', '既可限流也可分压', '不用滑动变阻器'], answer: '分压接法', explanation: '小灯泡电阻随温度变化，需要测从零电压开始的完整数据。分压接法能让负载电压从 0 连续调到接近电动势 E，而限流接法起点不为 0，无法取得低压段数据，故选分压接法。' },
      { type: 'choice', question: '关于小灯泡的伏安特性曲线，下列说法正确的是？', options: ['是一条过原点的直线', '电阻不变所以曲线是直线', '温度升高电阻变大，曲线向上弯曲', '电压越高电阻越小'], answer: '温度升高电阻变大，曲线向上弯曲', explanation: '小灯泡发光时温度高，金属灯丝电阻率随温度升高而增大，所以电阻变大。在 U-I 图线上表现为曲线向上弯曲（相同电压增量对应的电流增量变小），在 I-U 图线上表现为向下弯曲。' },
      { type: 'choice', question: '小灯泡电阻只有几欧，本实验电流表应接成？', options: ['内接法', '外接法', '内接外接结果相同', '不接电流表'], answer: '外接法', explanation: '被测电阻小，电压表内阻远大于小灯泡电阻，用外接法时电压表分流很小，误差小；内接法电流表分压明显，误差大。故小电阻用外接法。' },
      { type: 'fill', question: '分压接法中，负载（小灯泡）两端电压的可调范围是从 ___ 到接近 E。', answer: '0', explanation: '分压接法把滑动变阻器两端接电源，滑片引出的电压接负载。滑片移到端点时负载电压为 0，移到另一端时接近电动势 E，因此可调范围是 0 到 E，这正是本实验需要的。' },
      { type: 'fill', question: '某次测得小灯泡 U = 2.0 V、I = 0.40 A，则此时灯泡电阻 R = ___ Ω。', answer: '5.0|5', explanation: '由欧姆定律 R = U / I = 2.0 / 0.40 = 5.0 Ω。多测几组会发现电压越高电阻越大，说明灯丝电阻随温度升高而增大。注意保留与题目一致的有效数字。' }
    ]
  });
})();
