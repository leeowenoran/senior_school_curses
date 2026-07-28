/* ============================================================
 * 高三复习 · 实验专题 · 专题二 电学实验
 * 课时14：传感器的简单应用（热敏电阻、光敏电阻、力传感器原理）
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u14',
    name: '传感器的简单应用（热敏电阻、光敏电阻、力传感器原理）',
    chapter: '实验专题 · 专题二 电学实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、传感器是干什么的' },
      { type: 'paragraph', text: '我们生活的世界充满了"非电"的信息：温度高低、光线明暗、压力大小。但电脑和电路只认电压、电流这些"电"信号。传感器就像一个翻译器，把温度、光照、力这些非电学量，转换成电阻、电压、电流等电学量，让电路能"感知"外界。' },
      { type: 'keypoint', label: '重点·传感器定义', text: '<strong>传感器是把非电学量（温度、光强、力等）转换成电学量（电阻、电压、电流）的器件。</strong>它通常是整个自动控制系统的"感觉器官"，先把外界信息变成电信号，再交给后续电路处理。' },
      { type: 'list', items: ['热敏电阻：温度变，电阻变', '光敏电阻：光照变，电阻变', '力传感器：受力变，输出电信号变', '它们本质都是"敏感元件 + 转换电路"'] },
      { type: 'heading', text: '二、热敏电阻（NTC 负温度系数）' },
      { type: 'paragraph', text: '热敏电阻对温度极敏感。最常见的是 NTC 型（负温度系数）：温度越高，电阻越小；温度越低，电阻越大。利用这个特性，把它接入电路，测出它的电阻（或两端电压），就能反推出环境温度。电饭锅、空调里的温控就用到它。' },
      { type: 'keypoint', label: '重点·NTC 热敏电阻', text: '<strong>NTC 热敏电阻：温度升高，电阻减小；温度降低，电阻增大。</strong>把它和定值电阻串联分压，温度变化时它分到的电压随之改变，从而把"温度"变成"电压"输出。' },
      { type: 'example', label: '例题·热敏电阻测温', text: '例：某 NTC 热敏电阻在 20 ℃ 时阻值为 10 kΩ，温度升高时阻值变小。把它与 10 kΩ 定值电阻串联接在 5 V 电源上，问温度升高时它两端电压怎样变？<br><strong>解析</strong>：串联分压，热敏电阻电压 U = E × R热 / (R热 + R定)。温度升高 R热 减小，分母变化小、分子变小，所以 U 减小。即温度越高，输出电压越低。' },
      { type: 'warn', label: '易错', text: '<strong>别把 NTC 和 PTC 搞反。</strong>题目若说"负温度系数 NTC"，温度升电阻降；若说"正温度系数 PTC"，则温度升电阻也升。高考常考 NTC，看到"热敏电阻随温度升高而电阻减小"要立刻反应是 NTC。' },
      { type: 'heading', text: '三、光敏电阻' },
      { type: 'paragraph', text: '光敏电阻由半导体材料做成，光照越强，它里面的导电"通道"越多，电阻就越小；光线越暗，电阻越大。把它接进电路，环境明暗一变，电路电流或电压就跟着变，于是光信号变成了电信号。路灯自动开关、照相机曝光控制都用到它。' },
      { type: 'list', items: ['光照增强 → 光敏电阻阻值减小', '光照减弱 → 光敏电阻阻值增大', '常和定值电阻串联，把光强变成电压', '用于光控开关、光电计数器'] },
      { type: 'keypoint', label: '重点·光敏电阻规律', text: '<strong>光敏电阻：光照越强，电阻越小；光照越弱，电阻越大。</strong>测量时把它与定值电阻串联分压，光照变化引起它两端电压变化，从而输出与光强对应的电信号。' },
      { type: 'example', label: '例题·光控电路', text: '例：光敏电阻与定值电阻串联接电源。白天光照强，光敏电阻阻值小；夜晚光照弱，阻值大。问夜晚它两端电压比白天高还是低？<br><strong>解析</strong>：由分压 U = E × R光 / (R光 + R定)，夜晚 R光 大，分子大、分母也略大但分子占比升高，U 增大。即夜晚光敏电阻分压更高，电路可据此点亮路灯。' },
      { type: 'table', headers: ['传感器', '敏感量', '规律', '典型应用'], rows: [['热敏电阻 NTC', '温度', '升温电阻减小', '温控、电饭锅'], ['光敏电阻', '光照', '光强电阻减小', '光控路灯、计数器'], ['力传感器', '压力/力', '形变引起电阻或电压变', '电子秤、称重']] },
      { type: 'heading', text: '四、力传感器原理' },
      { type: 'paragraph', text: '力传感器常用"应变片"实现：把很薄的金属或半导体片贴在受力的弹性体上。物体一压，弹性体发生微小形变，应变片的形状被拉长或压扁，它的电阻就随之改变；再把电阻变化转换成电压变化，就得到了与"力"对应的电信号。电子秤、体重秤就是这么工作的。' },
      { type: 'list', items: ['外力作用 → 弹性体微小形变', '应变片随形变，电阻改变', '电阻变化经桥式电路转为电压变化', '电压大小反映受力大小，显示重量'] },
      { type: 'tip', label: '提示', text: '<strong>三种传感器本质一样：都是"外界量 → 元件电阻变 → 电路电压/电流变"。</strong>做题时抓住核心规律（温升阻降、光强阻降、受力形变阻变），再结合串联分压公式 U = E × R / (R + R定) 分析输出电压即可。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">传感器：非电量 → 电量</text><rect x="50" y="100" width="150" height="90" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="125" y="135" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">外界信息</text><text x="125" y="160" font-size="12" fill="#234b45" text-anchor="middle">温度/光/力</text><rect x="270" y="100" width="150" height="90" rx="10" fill="#4fb3a5"/><text x="345" y="135" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">敏感元件</text><text x="345" y="160" font-size="12" fill="#234b45" text-anchor="middle">电阻变化</text><rect x="490" y="100" width="150" height="90" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="565" y="135" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">转换电路</text><text x="565" y="160" font-size="12" fill="#234b45" text-anchor="middle">电压/电流</text><line x1="200" y1="145" x2="268" y2="145" stroke="#2e9e8f" stroke-width="2"/><polygon points="268,140 268,150 280,145" fill="#2e9e8f"/><line x1="420" y1="145" x2="488" y2="145" stroke="#2e9e8f" stroke-width="2"/><polygon points="488,140 488,150 500,145" fill="#2e9e8f"/><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">温度/光/力 → 电阻变 → 电压电流变，被电路"感知"</text></svg>', caption: '图1　传感器把非电学量转换为电学量，是控制系统的"感觉器官"。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">热敏/光敏电阻串联分压电路</text><rect x="50" y="90" width="100" height="55" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="100" y="122" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">电源 E</text><rect x="220" y="90" width="140" height="45" rx="6" fill="#4fb3a5"/><text x="290" y="117" font-size="12" fill="#234b45" text-anchor="middle">热敏/光敏 R</text><rect x="430" y="90" width="140" height="45" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="117" font-size="12" fill="#234b45" text-anchor="middle">定值电阻 R定</text><line x1="150" y1="117" x2="220" y2="112" stroke="#234b45" stroke-width="2"/><line x1="360" y1="112" x2="430" y2="112" stroke="#234b45" stroke-width="2"/><line x1="570" y1="112" x2="600" y2="112" stroke="#234b45" stroke-width="2"/><line x1="600" y1="112" x2="600" y2="220" stroke="#234b45" stroke-width="2"/><line x1="600" y1="220" x2="290" y2="220" stroke="#234b45" stroke-width="2"/><line x1="290" y1="220" x2="290" y2="135" stroke="#234b45" stroke-width="2"/><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">输出电压 U = E × R / (R + R定)，R 随外界变化</text></svg>', caption: '图2　敏感电阻与定值电阻串联分压，把外界量变成输出电压。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">三种传感器规律对比</text><rect x="50" y="80" width="180" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="140" y="115" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">热敏 NTC</text><text x="140" y="138" font-size="12" fill="#234b45" text-anchor="middle">升温→电阻降</text><rect x="250" y="80" width="180" height="70" rx="8" fill="#4fb3a5"/><text x="340" y="115" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">光敏电阻</text><text x="340" y="138" font-size="12" fill="#234b45" text-anchor="middle">光强→电阻降</text><rect x="450" y="80" width="180" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="540" y="115" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">力传感器</text><text x="540" y="138" font-size="12" fill="#234b45" text-anchor="middle">受力→形变阻变</text><text x="340" y="210" font-size="13" fill="#234b45" text-anchor="middle">共同本质：外界量改变元件电阻</text><text x="340" y="250" font-size="13" fill="#1f7a6e" font-weight="bold" text-anchor="middle">再经分压电路，把电阻变化变成电压输出</text></svg>', caption: '图3　三种传感器规律对比：外界量变化引起元件电阻变化。' }
    ],
    exercises: [
      { type: 'choice', question: '关于 NTC 负温度系数热敏电阻，下列说法正确的是？', options: ['温度升高电阻增大', '温度升高电阻减小', '电阻与温度无关', '光照影响它的阻值'], answer: '温度升高电阻减小', explanation: 'NTC 是负温度系数热敏电阻，其阻值随温度升高而减小，随温度降低而增大。它只对温度敏感，光照不是它的控制量。这一规律常结合串联分压用来测温或控温。' },
      { type: 'choice', question: '光敏电阻在光照增强时，其阻值如何变化？', options: ['增大', '减小', '不变', '先增后减'], answer: '减小', explanation: '光敏电阻由半导体材料制成，光照越强，内部可导电的载流子越多，电阻越小；光照越弱，电阻越大。利用这一规律可把光信号转换为电信号，用于光控开关。' },
      { type: 'choice', question: '传感器的主要作用可以概括为？', options: ['把电能转为机械能', '把非电学量转换为电学量', '把光能直接转为电能', '只测量电流大小'], answer: '把非电学量转换为电学量', explanation: '传感器的本质是把温度、光照、力、压力等非电学量转换成电阻、电压、电流等电学量，供后续电路处理。它是自动控制系统中感知外界的"感觉器官"。' },
      { type: 'fill', question: '热敏电阻与定值电阻 R定 串联接在电源 E 上，热敏电阻两端电压 U = E × R / (R + ___)。', answer: 'R定', explanation: '这是串联电路分压公式：总电压 E 按电阻比例分配，热敏电阻 R 分得的电压 U = E × R / (R + R定)。当温度改变使 R 变化时，U 随之改变，从而把温度变成可测的电压信号。' },
      { type: 'fill', question: '力传感器（应变片）的工作原理是：外力使弹性体发生 ___，贴在上面的应变片电阻随之改变，再转换为电压信号。', answer: '微小形变|形变', explanation: '力传感器利用应变片：物体受力后弹性体产生微小形变，应变片被拉伸或压缩，其电阻发生改变；电阻变化经电桥等转换电路变成电压变化，电压大小对应受力大小，电子秤即基于此。' }
    ]
  });
})();
