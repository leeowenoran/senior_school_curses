/* ============================================================
 * 高三复习 · 实验专题 · 专题二 电学实验
 * 课时12：练习使用多用电表（欧姆表原理、读数、使用方法）
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u12',
    name: '练习使用多用电表（欧姆表原理、读数、使用方法）',
    chapter: '实验专题 · 专题二 电学实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、多用电表能干啥' },
      { type: 'paragraph', text: '多用电表（也叫万用表）是电学实验里的"瑞士军刀"，一个表能测电流、电压，还能测电阻。测电流、电压时它和普通的电流表、电压表差不多；但测电阻的那一档叫"欧姆表"，原理比较特别，需要表内自己带一节电池。' },
      { type: 'list', items: ['测直流电流（和电流表一样，串联）', '测直流电压（和电压表一样，并联）', '测电阻（欧姆档，表内自带电池）', '有的还能测交流电压、二极管、通断'] },
      { type: 'keypoint', label: '重点·红黑表笔极性', text: '<strong>多用电表红表笔接内部电路的负极，黑表笔接内部电池的正极。</strong>测电流、电压时电流仍要从红表笔流入、黑表笔流出；但测电阻时，黑表笔带正电，这和直觉正好相反，要特别记住。' },
      { type: 'heading', text: '二、欧姆表的工作原理' },
      { type: 'paragraph', text: '测电阻时，表内有一节电池（电动势 E）和调零电阻，还有灵敏电流计（表头）。把红黑表笔接在被测电阻 Rₓ 两端，就构成回路，电流 I = E / (R内 + Rₓ)。Rₓ 越大电流越小，所以刻度上"大电阻在左边、小电阻在右边"，而且刻度不均匀，越往左越密。' },
      { type: 'keypoint', label: '重点·欧姆表电流公式', text: '<strong>满偏时 Rₓ = 0（两笔短接），I = E / R内；测电阻时 I = E / (R内 + Rₓ)。</strong>可见 Rₓ 与 I 成反比，刻度非线性，左边密、右边疏，且电阻刻度与电流电压刻度方向相反。' },
      { type: 'example', label: '例题·欧姆表调零', text: '例：用欧姆档前必须把红黑表笔短接，此时 Rₓ = 0，调节调零旋钮使指针满偏。为什么？<br><strong>解析</strong>：短接时 Rₓ = 0，回路电流最大 I = E / R内，应让指针指在最右端"0 Ω"处。若指针不指零，说明电池旧了或 R内 变了，需调调零电阻补上，保证读数准确。' },
      { type: 'warn', label: '易错', text: '<strong>测电阻时绝不能让电阻带电或与其他电路相连！</strong>欧姆表靠内部电池工作，若被测电阻还连在通电电路里，外部电压会窜入表内烧坏电表，读数也毫无意义。测量前必须断电并把电阻从电路中断开单独测。' },
      { type: 'heading', text: '三、欧姆表怎么读数' },
      { type: 'paragraph', text: '欧姆表盘上标的是电阻刻度（Ω），读数时要先看清选择的"倍率"档，比如 ×1、×10、×100、×1k。用表盘上指针所指的刻度数值，乘上倍率，才是真实电阻值。' },
      { type: 'list', items: ['选好电阻倍率档（如 ×10）', '红黑短接调零后再测', '指针指在刻度某数值，读数 = 表盘刻度值 × 倍率', '指针偏左（接近无穷大）说明电阻很大或断路'] },
      { type: 'keypoint', label: '重点·读数乘倍率', text: '<strong>电阻测量值 = 表盘刻度读数 × 倍率。</strong>例如倍率 ×100、指针指在 20 处，则 R = 20 × 100 = 2000 Ω = 2 kΩ。为使读数准，应换挡让指针尽量指在中值附近。' },
      { type: 'example', label: '例题·读数计算', text: '例：欧姆表倍率为 ×10，指针指在刻度 15 处，求被测电阻。<br><strong>解析</strong>：电阻 = 15 × 10 = 150 Ω。若换挡到 ×100 再测同一电阻，指针会指到 1.5 处，说明选小倍率让指针更靠右、读数更清楚。' },
      { type: 'table', headers: ['测量对象', '表笔接法', '量程/倍率', '关键注意'], rows: [['电流', '串联', '电流档 mA/A', '电流从红笔进'], ['直流电压', '并联', '电压档 V', '红笔接高电势'], ['电阻', '并联在电阻两端', '欧姆档 ×倍率', '先调零、断电测'], ['通断', '并联', '蜂鸣档', '响表示导通']] },
      { type: 'heading', text: '四、完整使用步骤' },
      { type: 'paragraph', text: '拿到多用电表，先看清旋钮归位、表笔插对孔（红插"+"、黑插"COM"）。测什么就转到对应档，估测大小选合适量程；测电阻务必先选档、短接调零再读数；用完要把旋钮转到"OFF"或交流高压档，保护电表。' },
      { type: 'list', items: ['使用前：表笔插孔正确，机械调零（指针归左零）', '选档：测什么转什么档，量程由大到小试', '测电阻：选倍率 → 短接调零 → 测量 → 读数乘倍率', '使用后：旋钮置 OFF 或交流最高压档，表笔收好'] },
      { type: 'tip', label: '提示', text: '<strong>测电阻换挡后必须重新调零！</strong>不同倍率对应不同的 R内，调零电阻也要重新调整。很多同学换档不调零，结果整档读数都偏差很大。另外指针越靠近刻度中央读数越准，选档时要让指针落在中值附近。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">欧姆表内部原理（测电阻档）</text><rect x="50" y="80" width="110" height="55" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="105" y="112" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">电池 E</text><rect x="210" y="80" width="100" height="34" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="260" y="102" font-size="12" fill="#234b45" text-anchor="middle">调零电阻</text><circle cx="410" cy="97" r="18" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="410" y="102" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">表头</text><rect x="540" y="160" width="110" height="55" rx="8" fill="#4fb3a5"/><text x="595" y="192" font-size="12" fill="#234b45" text-anchor="middle">被测电阻 Rₓ</text><line x1="160" y1="105" x2="210" y2="97" stroke="#234b45" stroke-width="2"/><line x1="310" y1="97" x2="392" y2="97" stroke="#234b45" stroke-width="2"/><line x1="428" y1="97" x2="500" y2="97" stroke="#234b45" stroke-width="2"/><line x1="500" y1="97" x2="500" y2="160" stroke="#234b45" stroke-width="2"/><line x1="540" y1="187" x2="500" y2="187" stroke="#234b45" stroke-width="2"/><line x1="595" y1="215" x2="595" y2="260" stroke="#234b45" stroke-width="2"/><line x1="595" y1="260" x2="410" y2="260" stroke="#234b45" stroke-width="2"/><line x1="410" y1="260" x2="410" y2="115" stroke="#234b45" stroke-width="2"/><text x="340" y="308" font-size="13" fill="#234b45" text-anchor="middle">I = E / (R内 + Rₓ)，Rₓ 越大电流越小</text></svg>', caption: '图1　欧姆表内部：电池、调零电阻、表头串联，外接被测电阻 Rₓ。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">欧姆表刻度盘（左密右疏，反向）</text><rect x="100" y="80" width="480" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="130" y1="160" x2="550" y2="160" stroke="#234b45" stroke-width="2"/><text x="135" y="185" font-size="13" fill="#234b45" text-anchor="middle">∞</text><text x="250" y="185" font-size="13" fill="#234b45" text-anchor="middle">50</text><text x="350" y="185" font-size="13" fill="#234b45" text-anchor="middle">20</text><text x="470" y="185" font-size="13" fill="#234b45" text-anchor="middle">5</text><text x="545" y="185" font-size="13" fill="#234b45" text-anchor="middle">0</text><line x1="250" y1="150" x2="250" y2="170" stroke="#234b45" stroke-width="2"/><line x1="350" y1="150" x2="350" y2="170" stroke="#234b45" stroke-width="2"/><line x1="470" y1="150" x2="470" y2="170" stroke="#234b45" stroke-width="2"/><line x1="545" y1="148" x2="350" y2="100" stroke="#4fb3a5" stroke-width="3"/><circle cx="350" cy="100" r="5" fill="#4fb3a5"/><text x="340" y="280" font-size="13" fill="#234b45" text-anchor="middle">电阻刻度与电流电压相反：左无穷大、右为零，且左密右疏</text></svg>', caption: '图2　欧姆表刻度盘：零在右端，无穷大在左端，刻度不均匀。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">多用电表使用四步</text><rect x="40" y="80" width="140" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="110" y="115" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">①选档</text><rect x="200" y="80" width="140" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="270" y="115" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">②调零</text><rect x="360" y="80" width="140" height="70" rx="8" fill="#4fb3a5"/><text x="430" y="115" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">③测量</text><rect x="520" y="80" width="140" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="590" y="115" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">④读数×倍率</text><line x1="180" y1="115" x2="200" y2="115" stroke="#2e9e8f" stroke-width="2"/><polygon points="200,110 200,120 212,115" fill="#2e9e8f"/><line x1="340" y1="115" x2="360" y2="115" stroke="#2e9e8f" stroke-width="2"/><polygon points="360,110 360,120 372,115" fill="#2e9e8f"/><line x1="500" y1="115" x2="520" y2="115" stroke="#2e9e8f" stroke-width="2"/><polygon points="520,110 520,120 532,115" fill="#2e9e8f"/><text x="340" y="200" font-size="13" fill="#234b45" text-anchor="middle">测电阻：选倍率 → 短接调零 → 测量 → 刻度×倍率</text><text x="340" y="250" font-size="13" fill="#1f7a6e" font-weight="bold" text-anchor="middle">用完旋钮转到 OFF 或交流最高压档</text></svg>', caption: '图3　多用电表使用流程：选档、调零、测量、读数乘倍率。' }
    ],
    exercises: [
      { type: 'choice', question: '关于多用电表测电阻，下列说法错误的是？', options: ['欧姆表内部自带电池', '读数要乘上所选倍率', '测量时电阻可带电测量', '红表笔接内部负极、黑表笔接内部正极'], answer: '测量时电阻可带电测量', explanation: '欧姆表靠内部电池工作，测量时若被测电阻仍连在通电电路中，外部电压会窜入并可能烧坏电表，读数也无效。正确做法是先断开电源，把电阻从电路中断开单独测量。其余三项关于电池、倍率、笔极性的说法都正确。' },
      { type: 'choice', question: '欧姆表刻度盘的刻线分布特点是？', options: ['均匀，左小右大', '均匀，左大右小', '不均匀，左密右疏，零在右端', '与电压刻度相同'], answer: '不均匀，左密右疏，零在右端', explanation: '由 I = E / (R内 + Rₓ) 可知电流与电阻成反比，刻度不均匀。Rₓ = 0 时电流最大指针满偏在右端（标 0 Ω），Rₓ 很大时指针近左端（标 ∞），且越往左刻度越密。方向与电压电流刻度相反。' },
      { type: 'choice', question: '多用电表欧姆档倍率为 ×100，指针指在刻度 15 处，则电阻为？', options: ['15 Ω', '1500 Ω', '1.5 Ω', '150 Ω'], answer: '1500 Ω', explanation: '电阻读数 = 表盘刻度值 × 倍率 = 15 × 100 = 1500 Ω = 1.5 kΩ。注意必须乘倍率，且换挡后要重新短接调零再测。' },
      { type: 'fill', question: '欧姆表测电阻的公式：I = E / (R内 + ___)，其中满偏时两笔短接、该量为 0。', answer: 'Rₓ', explanation: '欧姆表内部电池、调零电阻、表头与被测电阻 Rₓ 构成回路，总电阻为 R内 + Rₓ，电流 I = E / (R内 + Rₓ)。当红黑短接 Rₓ = 0 时电流最大，指针满偏指向 0 Ω。' },
      { type: 'fill', question: '使用多用电表测电阻，换挡后必须重新进行 ___ 操作，否则整档读数都会偏大或偏小。', answer: '欧姆调零|调零', explanation: '不同倍率档对应的表内总电阻 R内 不同，调零电阻的位置也要相应改变。每次换挡后都要把红黑表笔短接，调节调零旋钮使指针指到 0 Ω，才能保证该档读数准确。' }
    ]
  });
})();
