/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第二章 电磁感应
 * 课时8：互感和自感
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u8',
    name: '互感和自感',
    chapter: '选择性必修第二册 · 第二章 电磁感应',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、互感现象' },
      { type: 'paragraph', text: '把两个线圈放得很近，当其中一个线圈里的电流发生变化时，它周围的磁场也跟着变，就会穿过旁边的另一个线圈，使另一个线圈的磁通量变化，从而在它里面激起感应电动势。这种"一个线圈的变化影响到另一个线圈"的现象，叫做互感。' },
      { type: 'keypoint', label: '重点·互感', text: '<strong>互感是指：一个线圈中的电流发生变化时，在邻近的另一个线圈中激发出感应电动势的现象。</strong>变压器正是利用互感，把电能从一个线圈送到另一个线圈。' },
      { type: 'list', items: ['两个线圈靠得越近，互感越明显', '原线圈电流变化越快，副线圈感应电动势越大', '变压器、手机无线充电都利用了互感', '互感是电磁感应最常见的应用之一'] },
      { type: 'heading', text: '二、自感现象' },
      { type: 'paragraph', text: '不仅别的线圈能影响我，线圈自己也能"影响自己"。当一个线圈里的电流发生变化时，穿过这个线圈自身的磁通量也会变化，于是在它自己身上也会激起感应电动势。这种由于自身电流变化而在自身线圈中产生感应电动势的现象，叫做自感。' },
      { type: 'keypoint', label: '重点·自感', text: '<strong>自感是线圈由于自身电流变化，而在自己身上产生感应电动势的现象。</strong>这个电动势总是试图阻碍原来电流的变化，体现了"电磁惯性"。' },
      { type: 'list', items: ['电流增大时，自感电动势阻碍电流增大', '电流减小时，自感电动势阻碍电流减小', '自感电动势方向总是"反着"电流的变化趋势', '断开开关瞬间，自感可能在线圈两端形成很高电压'] },
      { type: 'table', headers: ['情形', '电流如何变', '自感电动势的作用'], rows: [['通电瞬间', '电流由 0 增大', '阻碍增大，灯泡慢慢变亮'], ['稳定时', '电流不变', '无自感电动势'], ['断电瞬间', '电流由有变 0', '阻碍减小，可能产生高电压']] },
      { type: 'example', label: '例题·通电自感', text: '如图，线圈 L 与灯泡并联后接在电源上。闭合开关瞬间，为什么灯泡不是立刻最亮，而是逐渐变亮？<br><br><strong>解析</strong>：闭合开关时，流过线圈的电流要由 0 增大。线圈产生自感电动势，<strong>阻碍电流增大</strong>，于是电流只能逐渐上升，灯泡也就慢慢变亮，而不是一下跳到最亮。' },
      { type: 'warn', label: '易错', text: '<strong>自感电动势"阻碍变化"不等于"阻止变化"。</strong>电流最终还是会按外电路的要求增大或减小，只是过程变慢了。另外，断开开关瞬间自感电动势可能很高，足以在开关处打出电火花，处理大电感电路要小心。' },
      { type: 'heading', text: '三、自感系数' },
      { type: 'paragraph', text: '每个线圈阻碍自身电流变化的能力有强有弱，这个本领用一个物理量描述，叫自感系数，简称自感，符号 L。自感系数越大，同样的电流变化率产生的自感电动势越大。它的国际单位是亨利，简称亨，符号 H。' },
      { type: 'keypoint', label: '重点·自感系数 L', text: '<strong>自感系数 L 由线圈本身决定，自感电动势 E = L × ΔI / Δt。</strong>单位亨利(H)。线圈匝数越多、绕得越密、加了铁芯，自感系数通常越大。' },
      { type: 'list', items: ['匝数越多，自感系数 L 越大', '线圈越密、体积越大，L 越大', '插入铁芯会显著增大 L', '有铁芯的线圈常叫扼流圈，用来限制电流变化'] },
      { type: 'heading', text: '四、日光灯镇流器原理' },
      { type: 'paragraph', text: '老式日光灯里有一个重要的部件叫镇流器，它本质上就是一个带铁芯的线圈（利用了自感）。刚接通时，启动器断开使镇流器电流骤减，自感产生很高的瞬间电压，把灯管里的气体击穿发光；灯管点亮后，镇流器又凭借自感起到"限流"作用，让灯管稳定工作。' },
      { type: 'keypoint', label: '重点·日光灯镇流器', text: '<strong>镇流器利用自感：启动瞬间产生高压点亮灯管，正常工作时限制电流。</strong>没有这个高压，灯管里的气体点不着；没有限流，灯管会过流烧坏。' },
      { type: 'example', label: '例题·镇流器的作用', text: '日光灯刚启动时，为什么要靠镇流器产生高压？<br><br><strong>解析</strong>：灯管内的气体平时不导电，需要两端有很高的电压才能被"击穿"而发光。启动时启动器突然断开，镇流器（带铁芯线圈）中电流骤降，产生很高的自感电动势，叠加在电源电压上形成高压，<strong>击穿灯管气体</strong>使其发光；之后镇流器又限制电流，保护灯管。' },
      { type: 'tip', label: '提示', text: '<strong>自感不只是"麻烦"，更有大用处。</strong>除了日光灯镇流器，收音机里的扼流圈、继电器的线圈、各种滤波电路都靠自感来稳定或限制电流变化。理解自感，就能理解一大类电子器件的工作原理。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">互感：一线圈电流变化在邻近线圈激起感应电动势</text><circle cx="160" cy="160" r="50" fill="none" stroke="#2e9e8f" stroke-width="3"/><line x1="160" y1="110" x2="160" y2="90" stroke="#234b45" stroke-width="3"/><line x1="160" y1="210" x2="160" y2="230" stroke="#234b45" stroke-width="3"/><text x="160" y="258" font-size="12" fill="#234b45" text-anchor="middle">线圈1电流变化</text><text x="300" y="150" font-size="26" fill="#4fb3a5" text-anchor="middle">→</text><circle cx="430" cy="160" r="50" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="430" cy="160" r="14" fill="#4fb3a5"/><line x1="430" y1="110" x2="430" y2="90" stroke="#234b45" stroke-width="3"/><line x1="430" y1="210" x2="430" y2="230" stroke="#234b45" stroke-width="3"/><text x="430" y="258" font-size="12" fill="#234b45" text-anchor="middle">线圈2产生感应电动势</text></svg>', caption: '图1　线圈1电流变化时，靠近的线圈2中会激起感应电动势，这就是互感。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">自感：线圈自身电流变化，在自己身上激起电动势</text><circle cx="180" cy="160" r="44" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="180" cy="160" r="28" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="180" y="255" font-size="12" fill="#234b45" text-anchor="middle">带铁芯线圈 L</text><line x1="224" y1="160" x2="330" y2="160" stroke="#234b45" stroke-width="3"/><circle cx="380" cy="160" r="20" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="380" y="166" font-size="14" fill="#234b45" text-anchor="middle">灯</text><line x1="400" y1="160" x2="500" y2="160" stroke="#234b45" stroke-width="3"/><text x="285" y="138" font-size="22" fill="#234b45" text-anchor="middle">→</text><text x="290" y="120" font-size="12" fill="#234b45">电流变化</text><text x="545" y="160" font-size="28" fill="#4fb3a5" text-anchor="middle">↺</text><text x="545" y="255" font-size="12" fill="#234b45" text-anchor="middle">自感电动势阻碍变化</text></svg>', caption: '图2　线圈自身电流变化，会在自己身上激起自感电动势，阻碍电流的变化。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">日光灯镇流器：铁芯线圈利用自感产生高压</text><rect x="110" y="120" width="120" height="40" fill="#234b45"/><text x="170" y="146" font-size="14" fill="#e6f4f1" text-anchor="middle">铁芯线圈</text><line x1="230" y1="140" x2="330" y2="140" stroke="#234b45" stroke-width="3"/><rect x="330" y="120" width="120" height="40" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="390" y="146" font-size="13" fill="#234b45" text-anchor="middle">灯管</text><text x="175" y="98" font-size="14" fill="#4fb3a5" text-anchor="middle">高压点亮</text><text x="175" y="115" font-size="12" fill="#234b45" text-anchor="middle">启动瞬间</text><text x="510" y="138" font-size="22" fill="#234b45" text-anchor="middle">→</text><text x="545" y="116" font-size="12" fill="#234b45" text-anchor="middle">正常工作限流</text></svg>', caption: '图3　日光灯启动时，镇流器（铁芯线圈）利用自感产生高压点亮灯管，之后起限流作用。' }
    ],
    exercises: [
      { type: 'choice', question: '关于互感现象，下列说法正确的是？', options: ['线圈自身电流变化产生电动势', '一个线圈电流变化在邻近线圈产生感应电动势', '电池直接给另一个线圈供电', '涡流使两个线圈发热'], answer: '一个线圈电流变化在邻近线圈产生感应电动势', explanation: '互感是指当一个线圈中的电流发生变化时，它产生的变化磁场穿过邻近的另一个线圈，使另一个线圈的磁通量变化，从而在后者中激起感应电动势。变压器就是利用互感来传递电能的。自身电流变化在自身产生电动势属于自感，不是互感。' },
      { type: 'choice', question: '关于自感电动势的作用，下列说法正确的是？', options: ['总是加快电流的变化', '总是阻碍自身电流的变化', '与电流变化无关', '只在断开开关时出现'], answer: '总是阻碍自身电流的变化', explanation: '自感电动势是由于线圈自身电流变化而产生的，根据楞次定律，它总是阻碍引起它的电流变化：电流增大时阻碍增大，电流减小时阻碍减小。它不是加快变化，也不是只在断电时出现，而是贯穿整个电流变化过程。' },
      { type: 'choice', question: '日光灯中的镇流器主要作用是？', options: ['提供高压点亮灯管并限流', '把交流电变成直流电', '储存大量电荷', '放大电路中的电流'], answer: '提供高压点亮灯管并限流', explanation: '镇流器是一个带铁芯的线圈，利用自感工作。启动时电流骤断产生高压击穿灯管气体使之发光；灯管点亮后，它又依靠自感限制电流，防止灯管过流损坏。它并不把交流变直流，也不是储能或放大电流的元件。' },
      { type: 'fill', question: '自感系数 L 的国际单位是___（填"亨利"或"法拉"）。', answer: '亨利', explanation: '自感系数 L 描述线圈阻碍自身电流变化的能力，它的国际单位是亨利，简称亨，符号 H。法拉是电容的单位，不能混淆。线圈匝数越多、加铁芯后，自感系数 L 通常会明显增大。' },
      { type: 'fill', question: '自感电动势的大小满足 E = L × ___（用自感系数 L 与电流变化率表示）。', answer: 'ΔI / Δt', explanation: '自感电动势大小与自感系数 L 以及电流的变化率成正比，公式为 E = L × ΔI / Δt，其中 ΔI 是电流变化量，Δt 是变化所用时间。这个公式与法拉第定律 E = n × ΔΦ / Δt 本质上相通，因为自感磁通量正比于自身电流。' }
    ]
  });
})();
