/* ============================================================
 * 高二物理 · 必修第三册 · 第十一章 电路及其应用
 * 课时14：实验：练习使用多用电表
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u14',
    name: '实验：练习使用多用电表',
    chapter: '必修第三册 · 第十一章 电路及其应用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、多用电表长什么样' },
      { type: 'paragraph', text: '多用电表（也叫万用表）是一个"万能表"，旋转中间的选择开关，就能测量电压、电流、电阻，有的还能测二极管、三极管。它主要由表盘（指针或数字显示）、选择开关、两个表笔插孔（红表笔、黑表笔）组成。中学实验室常用指针式，读数时要看表盘刻度。' },
      { type: 'keypoint', label: '重点·表笔接法', text: '<strong>红表笔插"+"孔、黑表笔插"−"或"COM"孔。测电压、电流时，电流应从红表笔流入、黑表笔流出（红进黑出）。测量电阻时，表内电池供电，黑表笔其实接的是电池正极。</strong>' },
      { type: 'paragraph', text: '多用电表表面通常有几条刻度线：最上面一条是电阻刻度（右边是 0、左边是 ∞，和电压电流刻度相反）；中间是电压和电流刻度（左边 0、右边满偏，均匀）。选不同档位，读对应的那一条线，还要注意档位倍率。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">多用电表的主要结构</text><rect x="120" y="70" width="220" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="230" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">表盘</text><line x1="150" y1="140" x2="310" y2="140" stroke="#234b45" stroke-width="2"/><line x1="150" y1="170" x2="310" y2="170" stroke="#4fb3a5" stroke-width="2"/><text x="230" y="200" font-size="12" fill="#234b45" text-anchor="middle">刻度（电阻/电压/电流）</text><rect x="380" y="110" width="90" height="90" rx="45" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="425" y="155" font-size="12" fill="#234b45" text-anchor="middle">选择开关</text><rect x="500" y="80" width="40" height="40" rx="6" fill="#4fb3a5"/><text x="520" y="160" font-size="12" fill="#234b45" text-anchor="middle">红笔</text><rect x="500" y="180" width="40" height="40" rx="6" fill="#234b45"/><text x="520" y="250" font-size="12" fill="#234b45" text-anchor="middle">黑笔</text></svg>', caption: '图1　多用电表由表盘、选择开关、红黑表笔插孔组成；旋转选择开关切换测量项目。' },
      { type: 'heading', text: '二、测量直流电压' },
      { type: 'paragraph', text: '测电压时，把选择开关拨到"V"直流电压档（带横线那种，别选到交流 "~"档），估计被测电压大小选合适量程（从小往大试，或用大量程先测）。然后让多用电表与被测元件并联，红表笔接电势高的一端、黑表笔接电势低的一端，读数看电压刻度线。' },
      { type: 'list', items: ['选档：直流电压档 V（非交流 ~）', '选量程：先选大的，再调到指针偏转明显的位置', '接法：与被测部分并联，红笔接高电势、黑笔接低电势', '读数：看电压刻度，乘以档位倍率'] },
      { type: 'keypoint', label: '重点·电压档读数', text: '<strong>读数 = 表盘指针示数 × 档位倍率。例如选 10 V 档，表盘满偏对应 10 V；若指针指在 5 格（满偏 10 格的一半），则读 5 V。要注意选对刻度线和倍率，不能漏乘。</strong>' },
      { type: 'tip', label: '提示·量程宁大勿小', text: '<strong>不知道电压大概多大时，先用最大量程试测</strong>，再逐步减小到指针偏转约满偏三分之二处，这样读数既安全又较准确。若用太小量程直接测大电压，可能打弯指针甚至烧表。' },
      { type: 'heading', text: '三、测量直流电流' },
      { type: 'paragraph', text: '测电流要把选择开关拨到"mA"或"A"电流档，然后让多用电表串联进电路（必须断开电路某处，把表串进去），同样红表笔接电流流入端、黑表笔接流出端。读电流刻度线。注意电流档内阻很小，绝不能把它并联在电源两端，否则会短路烧表！' },
      { type: 'warn', label: '易错·电流档严禁并联', text: '电流档内阻极小，如果像测电压那样并联在电源或元件两端，相当于把电源两端直接用导线连起来，会造成<strong>短路</strong>，电流极大，瞬间烧坏表头甚至电表。记住：<strong>测电流必须串联，测电压才并联。</strong>' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">测电流要串联，测电压要并联</text><rect x="60" y="100" width="220" height="100" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="170" y="140" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">测电流：串联</text><text x="170" y="170" font-size="13" fill="#234b45" text-anchor="middle">断开电路接进去</text><rect x="400" y="100" width="220" height="100" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="510" y="140" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">测电压：并联</text><text x="510" y="170" font-size="13" fill="#234b45" text-anchor="middle">并接在被测两端</text><polygon points="170,210 152,202 152,218" fill="#1f7a6e"/><polygon points="510,210 492,202 492,218" fill="#4fb3a5"/></svg>', caption: '图2　测电流时电表须串联进电路（左），测电压时电表须并联在被测元件两端（右），接法绝不能搞反。' },
      { type: 'heading', text: '四、测量电阻（欧姆档）' },
      { type: 'paragraph', text: '测电阻要把选择开关拨到"Ω"档。关键一步：<strong>先把两表笔短接（碰在一起），调节"欧姆调零"旋钮，让指针指到电阻刻度的 0 位置</strong>。然后断开表笔去测电阻，读电阻刻度线，再乘以档位倍率。每次换电阻档量程都要重新欧姆调零。' },
      { type: 'keypoint', label: '重点·欧姆档读数', text: '<strong>电阻读数 = 刻度示数 × 倍率。注意电阻刻度是"右 0 左 ∞"的反向刻度。例如用 ×10 档，指针指刻度 15，则电阻 = 15 × 10 = 150 Ω。换挡必须重新欧姆调零。</strong>' },
      { type: 'list', items: ['拨到 Ω 档并选好倍率（×1、×10、×100 等）', '两表笔短接，调零旋钮使指针指到 0 Ω', '断开表笔接被测电阻（电阻不能带电测量）', '读数 = 刻度值 × 倍率，换挡后重新调零'] },
      { type: 'warn', label: '易错·电阻不能带电测', text: '用欧姆档测电阻时，<strong>被测电阻必须与电路断开、不能带电</strong>。因为欧姆档靠表内电池供电，如果电阻还连在通电电路里，外部电压和表内电池叠加，既读数不准又可能损坏电表。测之前先关掉电源、把电阻一端焊开或拆下再测。' },
      { type: 'example', label: '例题·电阻读数', text: '用 ×100 档测某电阻，欧姆调零后指针指在刻度"12"处，求电阻值。<br><br><strong>解析</strong>：<br>电阻刻度示数为 12，倍率为 ×100。<br>电阻 R = 12 × 100 = 1200 Ω = 1.2 kΩ。<br>注意这里读的是电阻刻度（右 0 左 ∞），不是电压刻度。' },
      { type: 'tip', label: '提示·用完拨回关或高压档', text: '实验结束，应把选择开关拨到<strong>"OFF"关闭档或最高交流电压档</strong>，防止表内电池长期放电漏液损坏电表，也避免下次误用烧表。长期不用要取出电池。' },
      { type: 'table', headers: ['测量项目', '档位', '接法', '关键注意'], rows: [['直流电压', 'V（直流）', '并联', '红接高电势，选对倍率'], ['直流电流', 'mA / A', '串联', '严禁并联，防短路'], ['电阻', 'Ω', '断开电路测', '换挡先欧姆调零']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">欧姆档：短接调零再测量</text><rect x="80" y="90" width="250" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="205" y="130" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">两表笔短接</text><text x="205" y="162" font-size="13" fill="#234b45" text-anchor="middle">调零旋钮→指 0 Ω</text><rect x="370" y="90" width="250" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="130" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">接被测电阻</text><text x="495" y="162" font-size="13" fill="#234b45" text-anchor="middle">读刻度×倍率</text><text x="340" y="252" font-size="13" fill="#234b45" text-anchor="middle">换挡必须重新欧姆调零</text></svg>', caption: '图3　用欧姆档测电阻：先把两表笔短接、调零使指针指 0 Ω，再接被测电阻读数并乘倍率。' }
    ],
    exercises: [
      { type: 'choice', question: '关于多用电表测电阻，下列说法正确的是？', options: ['测电阻时电阻可以带电测量', '每次换电阻档量程都要重新欧姆调零', '电阻刻度是左 0 右 ∞，和电压刻度一样', '红表笔在欧姆档时内部接电池负极，电流从红笔流出'], answer: '每次换电阻档量程都要重新欧姆调零', explanation: '用欧姆档测电阻前，必须把两表笔短接，调节欧姆调零旋钮使指针指到刻度 0 Ω 处；并且每次更换倍率档（如从 ×10 换到 ×100）后，内部等效电阻变了，都要重新短接调零，否则读数不准。被测电阻必须断电、与电路断开再测；电阻刻度是右 0 左 ∞（与电压电流相反）；欧姆档内部电池使黑表笔为电源正极，电流从黑笔流出、红笔流入。' },
      { type: 'choice', question: '用多用电表测直流电流时，正确的操作是？', options: ['把表并联在被测元件两端', '把表串联进电路，红表笔接电流流入端', '可以像电压档一样直接并在电源两端', '不需要区分红黑表笔'], answer: '把表串联进电路，红表笔接电流流入端', explanation: '电流档内阻很小，必须串联接入电路才能测出流过该处的电流，且要保证电流从红表笔流入、黑表笔流出（红进黑出）。绝不能把电流档并联在电源或元件两端，否则相当于短路，会产生极大电流烧坏电表。红黑表笔极性也必须分清。' },
      { type: 'choice', question: '用 ×10 的欧姆档，指针指在刻度 20 处，则被测电阻为？', options: ['20 Ω', '200 Ω', '2 Ω', '2000 Ω'], answer: '200 Ω', explanation: '欧姆档读数 = 刻度示数 × 倍率。这里倍率是 ×10，指针刻度示数为 20，所以电阻 R = 20 × 10 = 200 Ω。注意读的是电阻刻度（右 0 左 ∞），并一定要乘上档位倍率，不能把 20 直接当欧姆数。若选 ×100 档同样指针位置则是 2000 Ω。' },
      { type: 'fill', question: '测量直流电压时，多用电表应___（填"串联"或"并联"）在被测元件两端，且红表笔应接电势___（填"高"或"低"）的一端。', answer: '并联|高', explanation: '电压是两点间的电势差，测电压时电表必须与被测部分并联，才能测得该两点间电压。按"红进黑出"原则，红表笔应接电势高（正）的一端，黑表笔接电势低（负）的一端，这样指针才能正向偏转。若接反，指针会反偏，可能打弯指针。这与测电流必须串联完全不同。' },
      { type: 'fill', question: '用欧姆档测电阻前，必须先让两表笔___（填"短接"或"断开"），调节调零旋钮使指针指到刻度___（填"0"或"∞"）处；若更换倍率档，应___（填"重新"或"不必"）调零。', answer: '短接|0|重新', explanation: '欧姆档靠表内电池供电，不同倍率档内部等效电阻不同，所以每次测量前（尤其换档后）都要把红黑表笔短接，调节欧姆调零旋钮使指针指在电阻刻度最右端的 0 Ω 处，消除内部电阻偏差。若更换倍率档（如 ×10 改 ×100）必须重新短接调零，否则读数会明显不准。被测电阻还要断电测量。' }
    ]
  });
})();
