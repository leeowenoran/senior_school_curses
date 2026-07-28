/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第三章 交变电流
 * 课时11：电感和电容对交变电流的影响
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u11',
    name: '电感和电容对交变电流的影响',
    chapter: '选择性必修第二册 · 第三章 交变电流',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、电感对交变电流的阻碍作用——感抗' },
      { type: 'paragraph', text: '线圈接入交变电流时，电流的大小和方向不断变化，线圈中会产生自感电动势，而这个自感电动势总是"阻碍"原电流的变化。结果就是线圈对交变电流表现出一种阻碍，这种阻碍作用叫做感抗。可以把感抗理解成"交流世界里线圈的电阻"，但它不是真正的电阻，不怎么发热，只是阻碍电流的通过。' },
      { type: 'keypoint', label: '重点·感抗', text: '<strong>感抗是电感对交变电流产生的阻碍作用，记作 Xₗ。</strong>感抗的大小与两个因素有关：交流电的频率 f 越高，感抗越大；线圈的自感系数 L 越大，感抗也越大。对直流（频率为零）而言，感抗为零，所以电感"通直流"。' },
      { type: 'list', items: ['感抗来自自感电动势对电流变化的阻碍', '频率越高、电感越大，感抗越大', '直流频率为零，感抗为零，所以电感能够"通直流"'] },
      { type: 'paragraph', text: '正因为感抗随频率升高而增大，电感对高频交变电流阻碍很强、对低频阻碍较弱。人们利用这一点来做"滤波"：在电路里串一个线圈，就能挡住高频杂波、放过低频有用信号。收音机、音响里常用这个办法。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电感通直流、阻交流</text><circle cx="120" cy="120" r="6" fill="#234b45"/><text x="120" y="105" font-size="13" fill="#234b45" text-anchor="middle">直流</text><line x1="126" y1="120" x2="240" y2="120" stroke="#234b45" stroke-width="2"/><path d="M250,90 q15,-30 30,0 q15,30 30,0 q15,-30 30,0 q15,30 30,0" fill="none" stroke="#2e9e8f" stroke-width="3"/><line x1="400" y1="120" x2="470" y2="120" stroke="#234b45" stroke-width="2"/><text x="320" y="160" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">线圈（电感）</text><text x="320" y="195" font-size="13" fill="#234b45" text-anchor="middle">直流畅通：感抗=0</text><circle cx="120" cy="250" r="6" fill="#234b45"/><text x="120" y="235" font-size="13" fill="#234b45" text-anchor="middle">交流</text><line x1="126" y1="250" x2="240" y2="250" stroke="#234b45" stroke-width="2"/><path d="M250,220 q15,-30 30,0 q15,30 30,0 q15,-30 30,0 q15,30 30,0" fill="none" stroke="#4fb3a5" stroke-width="3"/><line x1="400" y1="250" x2="470" y2="250" stroke="#234b45" stroke-width="2"/><text x="320" y="290" font-size="13" fill="#234b45" text-anchor="middle">交流受阻：感抗随频率增大</text></svg>', caption: '图1　直流通过线圈几乎不受阻碍（感抗为零），交变电流通过线圈会受到感抗阻碍，频率越高越难通过。' },
      { type: 'heading', text: '二、电容对交变电流的阻碍作用——容抗' },
      { type: 'paragraph', text: '电容器两个极板之间隔着绝缘介质，直流电根本"过不去"，所以电容"隔直流"。但接上交变电流时，电流方向反复变化，电容不断地充电、放电，相当于电荷在电路里来回"搬运"，宏观上看起来电流好像"通过了"电容。电容对交变电流的这种阻碍作用，叫做容抗。' },
      { type: 'keypoint', label: '重点·容抗', text: '<strong>容抗是电容对交变电流产生的阻碍作用，记作 X_c。</strong>容抗的大小也和两个因素有关：交流电的频率 f 越高，容抗越小；电容器的电容 C 越大，容抗也越小。对直流（频率为零）而言，容抗无限大，所以电容"隔直流、通交流"。' },
      { type: 'list', items: ['电容靠不断充放电让交流"看起来通过"', '频率越高、电容越大，容抗越小', '直流频率为零，容抗极大，所以电容"隔直流"'] },
      { type: 'paragraph', text: '和电感正好相反：电感"通直阻交"，电容"隔直通交"。而且两者都"看频率办事"——电感怕高频（高频难通），电容爱高频（高频易通）。这一对特性在电子电路里配合起来，能实现各种滤波和调谐。' },
      { type: 'table', headers: ['元件', '对直流', '对交流', '阻碍随频率升高'], rows: [['电感（线圈）', '畅通（感抗=0）', '受阻', '感抗增大，越难通过'], ['电容', '隔断（容抗极大）', '可通过', '容抗减小，越易通过']] },
      { type: 'heading', text: '三、扼流圈' },
      { type: 'paragraph', text: '扼流圈其实就是一只绕在铁芯（或铁氧体）上的线圈，专门利用感抗来"扼制"交流通过。低频扼流圈匝数多、自感大，对低频交流也有很大感抗，常用来阻挡低频交流、只让直流通过；高频扼流圈匝数少，主要阻挡高频杂波。它们都是感抗的实际应用。' },
      { type: 'example', label: '例题·区分通断特性', text: '在下面四句话中，哪几句是正确的？<br>① 电感通直流、阻交流。<br>② 电容通直流、隔交流。<br>③ 频率越高，感抗越大。<br>④ 频率越高，容抗越小。<br><br><strong>解析</strong>：<br>① 正确，电感对直流感抗为零、对交流有感抗。<br>② 错误，应该是电容"隔直流、通交流"。<br>③ 正确，感抗随频率升高而增大。<br>④ 正确，容抗随频率升高而减小。所以正确的是①③④。' },
      { type: 'warn', label: '易错', text: '<strong>别把"电容让交流通过"想成电荷真的穿过了极板。</strong>电荷并没有穿过绝缘层，而是电容交替充放电，使外电路里电流不断"接力"，宏观上才表现为交流通过了。另外，"通交流"不等于"无阻碍"，电容依然有容抗，只是频率越高阻碍越小。' },
      { type: 'tip', label: '提示', text: '<strong>一句话记住这对特性：电感通直阻交，电容隔直通交。</strong>再结合频率：高频时电感难通、电容易通。考试和做题时，先判断是电感还是电容，再看频率高低，阻碍大小就清楚了。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">扼流圈：利用感抗阻挡交流</text><rect x="270" y="60" width="140" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><path d="M300,70 q40,-20 0,40 q-40,20 0,40 q40,20 0,40 q-40,20 0,30" fill="none" stroke="#234b45" stroke-width="3"/><text x="340" y="282" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">线圈 + 铁芯</text><line x1="120" y1="160" x2="270" y2="160" stroke="#234b45" stroke-width="2"/><line x1="410" y1="160" x2="560" y2="160" stroke="#234b45" stroke-width="2"/><circle cx="110" cy="160" r="6" fill="#234b45"/><text x="110" y="145" font-size="13" fill="#234b45" text-anchor="middle">交流</text><text x="340" y="305" font-size="13" fill="#234b45" text-anchor="middle">感抗把交流"扼"在圈外，直流可过</text></svg>', caption: '图2　扼流圈由带铁芯的线圈构成，依靠较大的感抗阻挡交变电流通过，常让直流顺利通过而抑制交流。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">感抗、容抗随频率变化的相反趋势</text><line x1="80" y1="270" x2="600" y2="270" stroke="#2e9e8f" stroke-width="2"/><line x1="80" y1="60" x2="80" y2="270" stroke="#2e9e8f" stroke-width="2"/><text x="40" y="280" font-size="13" fill="#234b45" text-anchor="middle">频率 f →</text><path d="M120,260 Q300,200 560,80" fill="none" stroke="#234b45" stroke-width="3"/><text x="430" y="150" font-size="13" fill="#234b45" font-weight="bold">感抗 Xₗ 随 f 增大</text><path d="M120,80 Q300,140 560,255" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="300" y="200" font-size="13" fill="#234b45" font-weight="bold">容抗 X_c 随 f 减小</text></svg>', caption: '图3　感抗随频率升高而增大，容抗随频率升高而减小，两者趋势正好相反。' }
    ],
    exercises: [
      { type: 'choice', question: '关于电感对交变电流的作用，下列说法正确的是？', options: ['电感对直流和交流电的阻碍一样大', '电感通直流、阻交流，频率越高感抗越大', '电感通交流、阻直流', '频率越高，感抗越小'], answer: '电感通直流、阻交流，频率越高感抗越大', explanation: '电感对直流电的感抗为零（直流畅通），对交变电流产生感抗阻碍，这就是"通直流、阻交流"。感抗 Xₗ 随交流电频率 f 升高而增大，也随自感系数 L 增大而增大。因此频率越高越难通过，而不是越小。' },
      { type: 'choice', question: '关于电容对交变电流的作用，下列说法正确的是？', options: ['电容通直流、隔交流', '电容对交流没有阻碍', '电容隔直流、通交流，频率越高容抗越小', '频率越高，容抗越大'], answer: '电容隔直流、通交流，频率越高容抗越小', explanation: '电容器极板间是绝缘的，直流电无法通过，所以"隔直流"；交变电流使电容不断充放电，宏观上表现为交流"通过"，即"通交流"。容抗 X_c 随频率 f 升高而减小、随电容 C 增大而减小，因此频率越高越容易通过。' },
      { type: 'choice', question: '下列实际应用中，利用了"电感通直阻交"特性的是？', options: ['隔直电容', '高频旁路电容', '低频扼流圈', '电池'], answer: '低频扼流圈', explanation: '低频扼流圈是一只带铁芯的线圈，利用感抗阻挡低频交流、只让直流通过，正是"电感通直阻交"的应用。隔直电容和高频旁路电容利用的是电容"隔直通交"的特性，与电感无关；电池是电源，不属于这类应用。' },
      { type: 'fill', question: '电感对交变电流的阻碍作用叫做___（填"感抗"或"容抗"），电容对交变电流的阻碍作用叫做___（填"感抗"或"容抗"）。', answer: '感抗|容抗', explanation: '电感由于自感电动势阻碍电流变化，对交流表现出感抗；电容由于充放电特性，对交流表现出容抗。两者都是对交变电流的阻碍，但来源不同：感抗来自自感，容抗来自充放电，且它们随频率变化的趋势正好相反。' },
      { type: 'fill', question: '在电子电路中，常利用电感"通直流、阻交流"和电容"___、___"的相反特性来组成滤波电路（填电容的两条特性，用顿号隔开）。', answer: '隔直流、通交流', explanation: '电感通直流、阻交流，电容隔直流、通交流，二者对直流和交流的"态度"正好相反。把电感和电容配合使用，就能让直流或某一频率的信号通过、把不需要的交流杂波挡掉，这就是滤波电路的基本原理。' }
    ]
  });
})();
