/* ============================================================
 * 高三复习 · 实验专题 · 专题二 电学实验
 * 课时13：测量电表的内阻（半偏法测电流表/电压表内阻）
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u13',
    name: '测量电表的内阻（半偏法测电流表/电压表内阻）',
    chapter: '实验专题 · 专题二 电学实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、为什么要测电表内阻' },
      { type: 'paragraph', text: '电流表和电压表看起来只是读数的工具，但它们自己也有电阻：电流表内阻 Rg 很小（几欧到几十欧），电压表内阻 Rv 很大（几千欧到几万欧）。在做精确实验（比如改装电表、测电源）时，必须先知道它们自身的内阻，才能修正误差或设计电路。' },
      { type: 'keypoint', label: '重点·电表内阻概念', text: '<strong>电流表内阻 Rg 很小，电压表内阻 Rv 很大。</strong>电流表是表头并联小电阻改装而成，所以阻值小；电压表是表头串联大电阻改装而成，所以阻值大。测量方法常用"半偏法"。' },
      { type: 'list', items: ['表头（灵敏电流计）内阻记为 Rg，满偏电流 Ig', '电流表 = 表头并联分流电阻，内阻小', '电压表 = 表头串联分压电阻，内阻大', '半偏法：利用"指针正好偏到一半"的关系求内阻'] },
      { type: 'heading', text: '二、半偏法测电流表内阻' },
      { type: 'paragraph', text: '电路：电源、开关、一个阻值很大的滑动变阻器 R₀（作限流或分压），再并联一个电阻箱 R′。先闭合主开关，调 R₀ 使电流表满偏；保持 R₀ 不动，再闭合电阻箱支路，调 R′ 使电流表指针正好偏到满偏的一半。在 R₀ 远大于 Rg 的条件下，可认为干路电流几乎不变，于是 Rg ≈ R′。' },
      { type: 'keypoint', label: '重点·电流表半偏结论', text: '<strong>当 R₀ 远大于 Rg 时，半偏法测得 Rg ≈ 电阻箱示数 R′。</strong>原理：满偏时总电流 Ig；并联 R′ 后电流分一半给 R′，另一半仍过表头，而干路电流近似不变，说明 R′ 与 Rg 分压相同、阻值相等。' },
      { type: 'example', label: '例题·电流表半偏', text: '例：半偏法测电流表内阻，调节电阻箱使指针半偏，此时电阻箱读数为 12.0 Ω。且 R₀ 远大于 Rg。求 Rg。<br><strong>解析</strong>：因 R₀ 远大于 Rg，干路电流近似不变，半偏时流过表头与电阻箱的电流相等，二者并联电压也相等，故 Rg ≈ R′ = 12.0 Ω。' },
      { type: 'warn', label: '易错', text: '<strong>半偏法测电流表内阻要求滑动变阻器阻值 R₀ 远大于 Rg，否则 Rg 会偏小。</strong>因为并联电阻箱后干路电流会略微增大，流过表头的半偏电流对应的实际总电流变大，算出的 R′ 比真实 Rg 略小。R₀ 越大，误差越小。' },
      { type: 'heading', text: '三、半偏法测电压表内阻' },
      { type: 'paragraph', text: '电压表内阻很大，半偏法要反过来：把电压表和一个电阻箱 R′ 串联，再接到电源上（可串一个大滑动变阻器调电压）。先调使电压表满偏；保持总电压不变，调大 R′ 使电压表读数降到满偏的一半。此时 R′ 上分到的电压正好等于电压表上的电压，于是 Rv ≈ R′。' },
      { type: 'list', items: ['电压表与电阻箱 R′ 串联，接可调电源', '先调至电压表满偏 Uv = 满偏值', '保持总电压不变，调 R′ 使电压表半偏', '半偏时 Rv 与 R′ 分得电压相等，故 Rv ≈ R′'] },
      { type: 'keypoint', label: '重点·电压表半偏结论', text: '<strong>电压表半偏时 Rv ≈ 电阻箱示数 R′。</strong>原理：电压表半偏说明它只剩一半电压，另一半电压落在串联的 R′ 上，二者电流相同、电压相同，阻值必相等。' },
      { type: 'example', label: '例题·电压表半偏', text: '例：半偏法测电压表内阻，保持总电压不变，调节串联电阻箱使电压表由满偏 3 V 降到 1.5 V，此时电阻箱读数为 3000 Ω。求 Rv。<br><strong>解析</strong>：半偏时电压表与电阻箱各分 1.5 V，电流相同，故 Rv = R′ = 3000 Ω = 3 kΩ。' },
      { type: 'table', headers: ['测量对象', '电路特点', '半偏条件', '读数关系'], rows: [['电流表 Rg', '并联电阻箱', 'R₀ 远大于 Rg', 'Rg ≈ R′'], ['电压表 Rv', '串联电阻箱', '保持总电压不变', 'Rv ≈ R′'], ['前提', '电流或电压近似不变', '误差来自近似', '近似相等']] },
      { type: 'heading', text: '四、其他方法与注意事项' },
      { type: 'paragraph', text: '除了半偏法，还可以用"替代法"（用电阻箱替换电表，调到效果相同，电阻箱读数即内阻）或用伏安法直接测。半偏法器材简单、操作方便，但存在系统误差，记住电流表半偏偏小的规律即可在高考中正确判断。' },
      { type: 'list', items: ['半偏法器材少、易操作，但有系统误差', '电流表半偏：Rg 测量值偏小（R₀ 不够大时）', '替代法最准：电阻箱替代后效果相同即等于内阻', '无论哪种都要注意电表量程，别烧表'] },
      { type: 'tip', label: '提示', text: '<strong>区分"电流表半偏"和"电压表半偏"的电路接法是关键。</strong>电流表是并联电阻箱（因为它内阻小），电压表是串联电阻箱（因为它内阻大）。记错串联并联，整个实验就错了。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">半偏法测电流表内阻 Rg</text><rect x="50" y="80" width="110" height="55" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="105" y="112" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">电源 E</text><rect x="200" y="80" width="150" height="34" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="275" y="102" font-size="12" fill="#234b45" text-anchor="middle">大滑动变阻器 R₀</text><circle cx="430" cy="97" r="18" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="430" y="102" font-size="12" fill="#234b45" text-anchor="middle" font-weight="bold">A(表)</text><rect x="500" y="160" width="120" height="40" rx="6" fill="#4fb3a5"/><text x="560" y="185" font-size="12" fill="#234b45" text-anchor="middle">电阻箱 R′</text><line x1="160" y1="105" x2="200" y2="97" stroke="#234b45" stroke-width="2"/><line x1="350" y1="97" x2="412" y2="97" stroke="#234b45" stroke-width="2"/><line x1="430" y1="115" x2="430" y2="160" stroke="#234b45" stroke-width="2"/><line x1="430" y1="160" x2="500" y2="180" stroke="#234b45" stroke-width="2"/><line x1="560" y1="200" x2="560" y2="250" stroke="#234b45" stroke-width="2"/><line x1="560" y1="250" x2="430" y2="250" stroke="#234b45" stroke-width="2"/><line x1="430" y1="250" x2="430" y2="270" stroke="#234b45" stroke-width="2"/><text x="340" y="310" font-size="13" fill="#234b45" text-anchor="middle">满偏后并联 R′，调至半偏，则 Rg ≈ R′（R₀ 远大于 Rg）</text></svg>', caption: '图1　半偏法测电流表内阻：电阻箱与被测表并联。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">半偏法测电压表内阻 Rv</text><rect x="50" y="80" width="110" height="55" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="105" y="112" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">电源 E</text><rect x="200" y="80" width="130" height="34" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="265" y="102" font-size="12" fill="#234b45" text-anchor="middle">可调电压</text><circle cx="430" cy="97" r="18" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="430" y="102" font-size="12" fill="#234b45" text-anchor="middle" font-weight="bold">V(表)</text><rect x="560" y="80" width="110" height="34" rx="6" fill="#4fb3a5"/><text x="615" y="102" font-size="12" fill="#234b45" text-anchor="middle">电阻箱 R′</text><line x1="160" y1="105" x2="200" y2="97" stroke="#234b45" stroke-width="2"/><line x1="330" y1="97" x2="412" y2="97" stroke="#234b45" stroke-width="2"/><line x1="448" y1="97" x2="560" y2="97" stroke="#234b45" stroke-width="2"/><line x1="615" y1="114" x2="615" y2="180" stroke="#234b45" stroke-width="2"/><line x1="615" y1="180" x2="430" y2="180" stroke="#234b45" stroke-width="2"/><line x1="430" y1="180" x2="430" y2="115" stroke="#234b45" stroke-width="2"/><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">满偏后调 R′ 使电压表半偏，则 Rv ≈ R′</text><text x="340" y="290" font-size="13" fill="#1f7a6e" font-weight="bold" text-anchor="middle">电压表与电阻箱串联，保持总电压不变</text></svg>', caption: '图2　半偏法测电压表内阻：电阻箱与被测表串联。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">半偏法误差来源（电流表）</text><rect x="60" y="90" width="240" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="140" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">理想情况</text><text x="180" y="168" font-size="12" fill="#234b45" text-anchor="middle">R₀ 远大于 Rg</text><rect x="400" y="90" width="240" height="120" rx="10" fill="#4fb3a5"/><text x="520" y="140" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">实际偏差</text><text x="520" y="168" font-size="12" fill="#234b45" text-anchor="middle">R₀ 不够大时 Rg 偏小</text><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">并联 R′ 后干路电流略增，使测得的 R′ 比真实 Rg 略小</text></svg>', caption: '图3　电流表半偏法存在系统误差：R₀ 不够大时测得 Rg 偏小。' }
    ],
    exercises: [
      { type: 'choice', question: '半偏法测电流表内阻时，电阻箱应怎样连接？', options: ['与电流表串联', '与电流表并联', '接在电源两端', '不用电阻箱'], answer: '与电流表并联', explanation: '电流表内阻很小，半偏法要把电阻箱与它并联。先调至电流表满偏，再并联电阻箱并调节使指针半偏。在 R₀ 远大于 Rg 时，干路电流近似不变，可得 Rg ≈ 电阻箱读数 R′。' },
      { type: 'choice', question: '半偏法测电流表内阻，若滑动变阻器 R₀ 不够大，测得的内阻值会？', options: ['准确等于真实值', '偏大', '偏小', '无法确定'], answer: '偏小', explanation: '并联电阻箱后总电阻变小，干路电流会略微增大。要保持表头半偏，实际流过表头的电流占比小于一半，说明 R′ 比真实 Rg 小，因此测得的 Rg 偏小。R₀ 越大误差越小。' },
      { type: 'choice', question: '半偏法测电压表内阻时，电压表与电阻箱的连接及条件是？', options: ['并联且改变总电压', '串联且保持总电压不变', '并联且保持总电压不变', '串联且改变总电压'], answer: '串联且保持总电压不变', explanation: '电压表内阻很大，半偏法把它与电阻箱串联，保持总电压不变，调节电阻箱使电压表读数由满偏降到半偏。此时二者电压相等、电流相同，故 Rv ≈ R′。' },
      { type: 'fill', question: '半偏法测电流表内阻，调节电阻箱使指针半偏，在 R₀ 远大于 Rg 时可认为 Rg ≈ ___ 的示数。', answer: '电阻箱 R′|R′|电阻箱', explanation: '半偏时表头与电阻箱电流相等且并联电压相等，二者阻值相等。因此被测电流表内阻 Rg 近似等于此时电阻箱的阻值 R′。前提是 R₀ 远大于 Rg，否则结果偏小。' },
      { type: 'fill', question: '半偏法测电压表内阻，保持总电压不变，电压表由满偏降到半偏时，电压表与串联电阻箱各自分得的电压相等，故 Rv ≈ ___ 的阻值。', answer: '电阻箱 R′|R′|电阻箱', explanation: '电压表与电阻箱串联，电流处处相等。半偏说明电压表只剩一半电压，另一半落在电阻箱上，二者电压相等、电流相等，所以阻值相等，即 Rv ≈ R′。' }
    ]
  });
})();
