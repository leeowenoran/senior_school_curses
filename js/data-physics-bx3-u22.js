/* ============================================================
 * 高一物理 · 必修 第三册 · 第十三章 电磁感应与电磁波初步
 * 课时22：电磁波
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u22',
    name: '电磁波',
    chapter: '必修第三册 · 第十三章 电磁感应与电磁波初步',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、变化的电场产生磁场，变化的磁场产生电场' },
      { type: 'paragraph', text: '前面学过：电流（运动的电荷）周围有磁场。科学家麦克斯韦进一步提出：不但电流能产生磁场，变化的电场也能在空间激起磁场；反过来，变化的磁场也能激起电场。如果电场在变化、由它激起的磁场也在变化，这个变化的磁场又会激起新的电场……这样一来，变化的电场和变化的磁场互相"喂养"，就会在空间里一圈圈地传播开去，形成电磁波。' },
      { type: 'keypoint', label: '重点·电磁场', text: '<strong>变化的电场能在周围空间产生磁场，变化的磁场能在周围空间产生电场。</strong>变化的电场和磁场互相联系、互相激发，形成一个不可分割的统一体，叫电磁场。' },
      { type: 'paragraph', text: '要特别留意"变化"二字。静止的电荷只产生静电场，不产生磁场；均匀变化的磁场产生稳定的电场，但稳定电场不再激发新磁场，就传不远。只有"非均匀变化"（持续振荡）的电磁场，才能像水波一样一圈圈向外传播，成为真正的电磁波。' },
      { type: 'list', items: ['静电场不激发磁场，只有变化的电场才激发磁场', '稳定（不变化）的磁场不激发电场', '非均匀变化的电场和磁场互相激发，才能形成传播的电磁波', '电场和磁场方向彼此垂直，且都垂直于传播方向'] },
      { type: 'example', label: '例题·理解电磁场', text: '下列说法是否正确？请说明理由。<br>① 静止的电荷周围存在磁场。<br>② 均匀变化的磁场能在周围产生电场。<br><br><strong>解析</strong>：<br>① 错误。静止电荷只产生静电场，不产生磁场，磁场由运动电荷（电流）或变化的电场产生。<br>② 正确。根据麦克斯韦理论，变化的磁场会在周围空间产生电场，均匀变化也能产生（产生的是稳定电场）。' },
      { type: 'warn', label: '易错', text: '不要把"电场产生磁场"想成无条件。必须是<strong>变化的</strong>电场才产生磁场，静止电荷的电场、恒定电场都不产生磁场。反过来同理。另外，能向外传播形成电磁波的，是<strong>交替变化（振荡）</strong>的电磁场，单一的、一次性的变化传不远。' },
      { type: 'table', headers: ['情形', '是否产生另一种场', '能否形成电磁波'], rows: [['静止电荷的电场', '不产生磁场', '不能'], ['恒定电流（稳恒磁场）', '不产生电场', '不能'], ['均匀变化的磁场', '产生稳定电场', '不能传播开'], ['振荡（非均匀变化）的电磁场', '互相激发', '能，形成电磁波']] },
      { type: 'heading', text: '二、电磁波：在空间中奔跑的电磁场' },
      { type: 'paragraph', text: '电磁波就是交替变化的电场和磁场在空间中由近及远传播形成的波。它不需要介质，在真空中也能传播——这一点和声波不同，声波必须靠空气、水等介质。太阳光、手机信号、WiFi、广播都是电磁波。电磁波是横波：电场方向和磁场方向互相垂直，且都垂直于波的传播方向。' },
      { type: 'keypoint', label: '重点·电磁波特点', text: '<strong>电磁波是变化的电磁场在空间的传播；它可以在真空中传播，不需要介质；电场、磁场、传播方向三者两两垂直，是横波。</strong>' },
      { type: 'tip', label: '提示', text: '记住电磁波和声波的一个大区别：<strong>声波是机械波，离开介质（如空气）就传不了；电磁波是电磁场，真空中反而传得最好（光速最大）。</strong>所以太阳的光和热能穿过近乎真空的太空到达地球。' },
      { type: 'list', items: ['电磁波传播不需要介质，真空中也能传', '电磁波是横波：E、B、传播方向两两垂直', '电磁波在真空中的速度等于光速', '光本身就是一种电磁波'] },
      { type: 'heading', text: '三、波长、频率和波速：c = λ × ν' },
      { type: 'paragraph', text: '任何波都有三个基本量：波长λ（相邻两个波峰之间的距离）、频率ν（每秒振动的次数，单位赫兹Hz）、波速c（波传播的速度）。三者满足关系：波速 = 波长 × 频率，即 c = λ × ν。对电磁波来说，在真空中波速c是一个固定不变的大常数，约等于 3.0×10⁸ m/s，正是光速。频率越高，波长就越短；频率越低，波长越长。' },
      { type: 'keypoint', label: '重点·波速公式', text: '<strong>电磁波满足 c = λ × ν</strong>，其中c是波速、λ是波长、ν是频率。在真空中 c ≈ 3.0×10⁸ m/s（即光速）。同一介质中c一定，频率越高则波长越短。' },
      { type: 'paragraph', text: '利用 c = λ × ν 可以做很多事。例如某电台广播频率是 100 MHz（即 1.0×10⁸ Hz），由 λ = c / ν = 3.0×10⁸ / 1.0×10⁸ = 3.0 m，可知其波长约3米。不同频率的电磁波用途不同：无线电波频率低、波长长，用于通信广播；可见光频率高得多，用于照明和成像；再高就是紫外线、X射线等。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">变化的电场与磁场互相激发形成电磁波</text><path d="M 80 150 Q 130 90 180 150 T 280 150 T 380 150 T 480 150 T 580 150" fill="none" stroke="#2e9e8f" stroke-width="3"/><line x1="80" y1="150" x2="600" y2="150" stroke="#234b45" stroke-width="1" stroke-dasharray="4,4"/><text x="230" y="100" font-size="13" fill="#234b45">电场E方向(上下)</text><line x1="180" y1="150" x2="180" y2="210" stroke="#4fb3a5" stroke-width="2"/><line x1="380" y1="150" x2="380" y2="210" stroke="#4fb3a5" stroke-width="2"/><text x="280" y="230" font-size="13" fill="#234b45">磁场B方向(垂直纸面内外)</text><text x="500" y="150" font-size="13" fill="#234b45">→传播方向</text></svg>', caption: '图1　电磁波中电场与磁场交替变化并向前传播，E、B与传播方向两两垂直。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">波长 λ 与频率 ν 的关系</text><path d="M 80 160 Q 130 90 180 160 T 280 160 T 380 160 T 480 160 T 580 160" fill="none" stroke="#2e9e8f" stroke-width="3"/><line x1="80" y1="160" x2="80" y2="200" stroke="#234b45" stroke-width="2"/><line x1="280" y1="160" x2="280" y2="200" stroke="#234b45" stroke-width="2"/><line x1="480" y1="160" x2="480" y2="200" stroke="#234b45" stroke-width="2"/><text x="180" y="220" font-size="13" fill="#234b45" text-anchor="middle">λ</text><text x="380" y="220" font-size="13" fill="#234b45" text-anchor="middle">λ</text><text x="90" y="95" font-size="13" fill="#234b45">波峰</text></svg>', caption: '图2　相邻两个波峰之间的距离叫波长λ，频率ν越大则λ越小（c=λ×ν）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电磁波谱：频率越高波长越短</text><rect x="60" y="120" width="90" height="60" rx="4" fill="#4fb3a5"/><rect x="160" y="120" width="80" height="60" rx="4" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="250" y="120" width="70" height="60" rx="4" fill="#4fb3a5"/><rect x="330" y="120" width="60" height="60" rx="4" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="400" y="120" width="50" height="60" rx="4" fill="#4fb3a5"/><rect x="460" y="120" width="40" height="60" rx="4" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="510" y="120" width="30" height="60" rx="4" fill="#4fb3a5"/><rect x="550" y="120" width="20" height="60" rx="4" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="105" y="200" font-size="11" fill="#234b45" text-anchor="middle">无线电</text><text x="320" y="200" font-size="11" fill="#234b45" text-anchor="middle">可见光</text><text x="560" y="200" font-size="11" fill="#234b45" text-anchor="middle">γ</text><text x="340" y="260" font-size="13" fill="#234b45" text-anchor="middle">从左到右频率ν升高、波长λ变短</text></svg>', caption: '图3　电磁波谱：无线电波到γ射线，频率越高、波长越短，本质都是电磁波。' }
    ],
    exercises: [
      { type: 'choice', question: '关于电磁波，下列说法正确的是？', options: ['电磁波传播需要空气等介质', '电磁波是横波，电场、磁场、传播方向两两垂直', '电磁波在真空中的速度小于光速', '静止电荷的电场能产生电磁波'], answer: '电磁波是横波，电场、磁场、传播方向两两垂直', explanation: '电磁波是横波，电场方向、磁场方向、传播方向三者两两垂直（B对）。电磁波的传播不需要介质，真空中也能传播，且真空中速度正好等于光速（A、C错）。静止电荷只产生静电场，不激发磁场，不能产生电磁波（D错）。' },
      { type: 'choice', question: '根据麦克斯韦电磁场理论，下列说法正确的是？', options: ['稳定的电场产生稳定的磁场', '均匀变化的电场产生恒定磁场', '变化的电场能在周围产生磁场', '静止电荷的电场也能产生磁场'], answer: '变化的电场能在周围产生磁场', explanation: '麦克斯韦理论指出：变化的电场能在周围空间产生磁场，这是电磁波能够形成的根源（C对）。静电场、恒定电场都不产生磁场（A、D错）。均匀变化的电场产生的是稳定的磁场，而非恒定磁场这一说法本身混乱，且稳定磁场不再激发电场，传不远（B表述不当）。核心是"变化的电场产生磁场"。' },
      { type: 'choice', question: '在真空中，某电磁波的波速、波长、频率满足的关系是？', options: ['c = λ / ν', 'c = λ × ν', 'c = ν / λ', 'c = λ + ν'], answer: 'c = λ × ν', explanation: '任何波都满足波速等于波长乘频率，对电磁波同样有 c = λ × ν（选B）。在真空中c约为3.0×10⁸ m/s。由此可推出λ = c / ν，频率越高波长越短。注意是乘法关系不是除法或加法。' },
      { type: 'fill', question: '电磁波在真空中的传播速度约为 ___ m/s（用科学计数法表示，如 3.0×10⁸）。', answer: '3.0×10⁸', explanation: '电磁波在真空中的传播速度是一个基本常数，大小等于光速，约为3.0×10⁸ m/s。这个数值在所有频率的电磁波（无线电、可见光、X射线等）中都相同，差别只在于频率ν和波长λ，二者满足 c = λ × ν。' },
      { type: 'fill', question: '已知某电磁波在真空中频率 ν = 1.0×10⁸ Hz，由 c = λ × ν 可得其波长 λ = c / ν = ___ m。', answer: '3.0', explanation: '由 λ = c / ν 计算：λ = 3.0×10⁸ / 1.0×10⁸ = 3.0 m。所以频率1.0×10⁸ Hz（即100 MHz）的电磁波波长约为3米，这正是常见的调频广播波段。频率越高波长越短，符合 c = λ × ν 的关系。' }
    ]
  });
})();
