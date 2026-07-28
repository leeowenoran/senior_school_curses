/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第五章 传感器
 * 课时17：传感器及其工作原理
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u17',
    name: '传感器及其工作原理',
    chapter: '选择性必修第二册 · 第五章 传感器',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是传感器' },
      { type: 'paragraph', text: '我们身边到处是传感器：手机横过来屏幕跟着转，是重力传感器在起作用；空调自动停、自动开，是温度传感器在盯着室温；楼道里的灯天黑了自己亮，是光传感器在感受光线。它们就像一个会"看"、会"听"、会"摸"的小器官，把周围世界里看不见摸不着的变化，变成电路能处理的电信号。' },
      { type: 'keypoint', label: '重点·传感器是什么', text: '<strong>传感器是把温度、光照、压力、声音等非电学量，转换成电压、电流、电阻等电学量的元件或装置。</strong>一句话：它负责"感知外界变化"并"翻译"成电的信号。' },
      { type: 'paragraph', text: '为什么一定要换成电学量？因为电学量最容易测量、最容易传送到远处、也最容易交给电脑或芯片去判断和控制。比如同样是"温度高"，人靠感觉、动物靠本能，而机器靠的是把温度变成一段电压，再让电路去比较、去开关。现代自动控制离开了传感器寸步难行。' },
      { type: 'list', items: ['温度（冷热电饭煲要知道锅温）', '光照强弱（路灯要分清白天黑夜）', '压力大小（电子秤要称出重量）', '这些都要先变成电学量，才能被电路"读懂"'] },
      { type: 'heading', text: '二、传感器的基本组成' },
      { type: 'paragraph', text: '一个传感器通常分成两大部分：第一部分是敏感元件，它直接去"感受"被测量的变化；第二部分是转换电路，它把敏感元件感知到的结果，加工成标准、好用的电信号送出去。两部分配合，才完成"感知→翻译"的全过程。' },
      { type: 'list', items: ['敏感元件：直接感受温度、光、压力等被测量，并把变化"带出来"', '转换电路：把敏感元件输出的微弱变化，放大、整理成电压或电流等电信号', '两者缺一不可，合在一起才叫完整的传感器'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">传感器：把非电学量变成电学量</text><rect x="30" y="100" width="140" height="90" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="100" y="135" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">非电学量</text><text x="100" y="160" font-size="12" fill="#234b45" text-anchor="middle">温度 光 压力</text><line x1="172" y1="145" x2="200" y2="145" stroke="#234b45" stroke-width="2"/><polygon points="196,137 212,145 196,153" fill="#234b45"/><rect x="205" y="100" width="130" height="90" rx="10" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="270" y="135" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">敏感元件</text><text x="270" y="160" font-size="12" fill="#234b45" text-anchor="middle">感知变化</text><line x1="337" y1="145" x2="365" y2="145" stroke="#234b45" stroke-width="2"/><polygon points="361,137 377,145 361,153" fill="#234b45"/><rect x="370" y="100" width="130" height="90" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="435" y="135" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">转换电路</text><text x="435" y="160" font-size="12" fill="#234b45" text-anchor="middle">变成电信号</text><line x1="502" y1="145" x2="530" y2="145" stroke="#234b45" stroke-width="2"/><polygon points="526,137 542,145 526,153" fill="#234b45"/><rect x="535" y="100" width="130" height="90" rx="10" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="600" y="135" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">电学量</text><text x="600" y="160" font-size="12" fill="#234b45" text-anchor="middle">电压 电流 电阻</text><text x="340" y="240" font-size="13" fill="#234b45" text-anchor="middle">非电学量（温度、光、压力等）→ 电信号，方便测量、传送和自动控制</text></svg>', caption: '图1　传感器由敏感元件和转换电路组成，把温度、光、压力等非电学量变成电压、电流等电学量。' },
      { type: 'paragraph', text: '打个比方：敏感元件就像人的皮肤，先感觉到冷热的刺激；转换电路就像神经，把这个刺激变成大脑能识别的电信号。只有皮肤没有神经，大脑收不到消息；只有神经没有皮肤，又无从感知。两者配合，系统才知道"外面发生了什么"。' },
      { type: 'keypoint', label: '重点·核心环节', text: '<strong>敏感元件负责"感受"被测量的变化，转换电路负责把这种变化变成标准电信号输出。</strong>评价一个传感器，常看它灵不灵敏、准不准确、稳不稳定——这些性能都和这两部分有关。' },
      { type: 'heading', text: '三、常见敏感元件的特性' },
      { type: 'paragraph', text: '光敏电阻：它是用一种对光特别敏感的材料做的电阻。光照越强，材料里的"自由电荷"越多，电阻就越小；光照越弱，电阻就越大。所以它常被用来判断周围环境是亮还是暗。' },
      { type: 'paragraph', text: '热敏电阻：它的阻值会随着温度明显变化。教材里常见的"负温度系数"热敏电阻（也叫 NTC），特点是温度越高、电阻越小；温度越低、电阻越大。它常被埋在设备里测温度。' },
      { type: 'paragraph', text: '压敏电阻：它的阻值会随着外加压力的变化而改变。压力越大，阻值通常越小；压力越小，阻值越大。它常用来检测有没有被挤压、被撞击，或者称出压力的大小。' },
      { type: 'table', headers: ['敏感元件', '感受的量', '阻值变化规律'], rows: [['光敏电阻', '光照强弱', '光照强 → 阻值小；光照弱 → 阻值大'], ['热敏电阻（负温度系数）', '温度高低', '温度高 → 阻值小；温度低 → 阻值大'], ['压敏电阻', '压力大小', '压力大 → 阻值小；压力小 → 阻值大']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">光敏电阻：光照越强，阻值越小</text><rect x="40" y="70" width="280" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="102" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">光照强</text><text x="180" y="142" font-size="14" fill="#234b45" text-anchor="middle">电阻 小</text><text x="180" y="178" font-size="13" fill="#234b45" text-anchor="middle">导通好，电流大</text><text x="180" y="212" font-size="12" fill="#234b45" text-anchor="middle">例如白天、开灯时</text><rect x="360" y="70" width="280" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="102" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">光照弱</text><text x="500" y="142" font-size="14" fill="#234b45" text-anchor="middle">电阻 大</text><text x="500" y="178" font-size="13" fill="#234b45" text-anchor="middle">导通差，电流小</text><text x="500" y="212" font-size="12" fill="#234b45" text-anchor="middle">例如夜晚、关灯时</text></svg>', caption: '图2　光敏电阻在光照强时阻值小、电流大，光照弱时阻值大、电流小。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">热敏电阻与压敏电阻的阻值变化</text><rect x="40" y="80" width="280" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="112" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">热敏电阻（负温度）</text><text x="180" y="150" font-size="13" fill="#234b45" text-anchor="middle">温度 高 → 阻值 小</text><text x="180" y="180" font-size="13" fill="#234b45" text-anchor="middle">温度 低 → 阻值 大</text><text x="180" y="212" font-size="12" fill="#234b45" text-anchor="middle">常用于测温度、控温度</text><rect x="360" y="80" width="280" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="112" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">压敏电阻</text><text x="500" y="150" font-size="13" fill="#234b45" text-anchor="middle">压力 大 → 阻值 小</text><text x="500" y="180" font-size="13" fill="#234b45" text-anchor="middle">压力 小 → 阻值 大</text><text x="500" y="212" font-size="12" fill="#234b45" text-anchor="middle">常用于测压力、检撞击</text></svg>', caption: '图3　热敏电阻随温度升高阻值减小，压敏电阻随压力增大阻值减小。' },
      { type: 'keypoint', label: '重点·三种元件规律', text: '<strong>光敏电阻：光强→阻值小；热敏电阻（负温度系数）：温高→阻值小；压敏电阻：压大→阻值小。</strong>它们都属于"电阻值随被测量变化"的敏感元件，只是感受的对象不同。' },
      { type: 'warn', label: '易错', text: '<strong>别把"光敏"和"热敏"记混，更别把阻值变化方向记反。</strong>光敏电阻感受的是"光"不是"热"；热敏电阻常见的是"温度越高阻值越小"，若题目写的是正温度系数（PTC），规律就反过来了，一定要看清题设再下结论。' },
      { type: 'example', label: '例题·判断元件', text: '某电阻在光照变强时阻值明显变小，在温度变化时阻值几乎不变。它最可能是下列哪种元件？<br><br><strong>解析</strong>：<br>题目说"光照变强时阻值变小"，这正是<strong>光敏电阻</strong>的典型特征。同时它"温度变化时阻值几乎不变"，说明它并不对温度敏感，所以不是热敏电阻；它也不是随压力变化的压敏电阻。因此答案是光敏电阻，常用于需要分辨白天黑夜、有无光照的场合。' },
      { type: 'tip', label: '提示', text: '<strong>热敏电阻分两种：负温度系数（NTC，温高阻小）和正温度系数（PTC，温高阻大）。</strong>高中阶段教材和习题里若没有特别说明，通常指 NTC 负温度系数那一种。做题时看到"热敏电阻"先默认按"温高阻小"处理，除非题目另说。' },
      { type: 'list', items: ['传感器 = 敏感元件 + 转换电路，把非电学量变成电学量', '光敏电阻随光照增强阻值减小', '热敏电阻（负温度系数）随温度升高阻值减小', '压敏电阻随压力增大阻值减小', '三种元件都是"阻值随被测量变"，只是感受对象不同'] }
    ],
    exercises: [
      { type: 'choice', question: '传感器的主要作用是什么？', options: ['把电学量转换成非电学量', '把非电学量转换成便于测量和控制的电学量', '把声学量转换成光学量', '把化学量转换成力学量'], answer: '把非电学量转换成便于测量和控制的电学量', explanation: '传感器的本质是一个"感知并翻译"的装置：它把温度、光照、压力等非电学量转换成电压、电流、电阻等电学量。之所以要换成电学量，是因为电信号最容易被测量、传送、放大，也最容易被芯片和电路判断与控制。其他选项都把方向或对象说反了。' },
      { type: 'choice', question: '关于传感器的基本组成，下列说法正确的是？', options: ['传感器只由敏感元件组成', '传感器由敏感元件和转换电路组成', '传感器只由电源和导线组成', '传感器由显示器和键盘组成'], answer: '传感器由敏感元件和转换电路组成', explanation: '一个完整的传感器通常包含两大部分：敏感元件直接感受被测量的变化，转换电路把这个变化整理、放大成标准电信号输出。只有敏感元件没有转换电路，信号送不出去；只有电路没有敏感元件，又无从感知。电源、导线、显示器等只是外围辅助，并非传感器本身。' },
      { type: 'choice', question: '光敏电阻的阻值随光照增强而怎样变化？', options: ['增大', '减小', '保持不变', '先增大后减小'], answer: '减小', explanation: '光敏电阻由对光敏感的材料制成，光照越强，材料内部可被利用的载流子越多，导电能力越强，所以电阻越小；光照越弱则电阻越大。这个"光强阻小"的性质，正是光控路灯、自动感应灯等装置判断明暗的基础。' },
      { type: 'fill', question: '热敏电阻（负温度系数）的阻值随温度升高而___（填"增大"或"减小"）。', answer: '减小', explanation: '负温度系数热敏电阻简称 NTC，它的材料特性决定温度越高时电阻越小、温度越低时电阻越大。这跟金属导体"温度越高电阻越大"的规律正好相反，所以做题时要看清是热敏电阻还是普通金属，不能套用金属的规律。' },
      { type: 'fill', question: '传感器中直接"感受"被测量（如温度、光照）变化的部分，叫作___元件。', answer: '敏感', explanation: '传感器分为敏感元件和转换电路两部分。敏感元件直接接触或感应被测量，把温度、光、压力等的变化"带"出来；转换电路再把这些变化加工成电信号。所以"直接感受变化"的角色就是敏感元件，它是传感器的第一道关口。' }
    ]
  });
})();
