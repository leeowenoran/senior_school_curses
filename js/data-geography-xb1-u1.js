/* 地理 · 选择性必修1 · 第1章 · 课时：地球的自转和公转 */
(function () {
  var v = gzGetVolume('geography', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u1',
    name: '第1节 地球的自转和公转',
    chapter: '选择性必修1 · 第1章 地球的运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、地球自转的基本特征' },
      { type: 'paragraph', text: '地球绕其自转轴的旋转运动叫做地球自转。自转轴的北端始终指向北极星附近，这就是我们常说的地轴。地球自转的方向是自西向东，从北极上空俯视呈逆时针，从南极上空俯视呈顺时针，可用「北逆南顺」来记忆。自转一周的真正周期是一个恒星日，时长约为 23 小时 56 分 4 秒。' },
      { type: 'list', items: ['方向：自西向东（北逆南顺）', '周期：恒星日约 23 时 56 分 4 秒，太阳日约 24 小时', '速度：角速度除南北极点外处处相等约 15°/时；线速度由赤道向两极递减', '地轴：北端始终指向北极星附近'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">地球自转方向与角线速度</text><circle cx="225" cy="200" r="95" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><circle cx="225" cy="200" r="6" fill="#2a6fa8"/><line x1="225" y1="200" x2="225" y2="108" stroke="#2a6fa8" stroke-width="2"/><text x="225" y="100" font-size="12" fill="#1f3a4d" text-anchor="middle">地轴指向北极星</text><path d="M 305 150 A 95 95 0 0 1 320 250" fill="none" stroke="#c1583b" stroke-width="3" marker-end="url(#ar1)"/><text x="330" y="150" font-size="12" fill="#1f3a4d">自转方向</text><text x="225" y="330" font-size="13" fill="#1f3a4d" text-anchor="middle">赤道线速度最大，向两极递减</text><rect x="420" y="120" width="220" height="160" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="530" y="150" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">速度对比</text><text x="530" y="185" font-size="12" fill="#1f3a4d" text-anchor="middle">角速度：除极点外均约 15°/时</text><text x="530" y="215" font-size="12" fill="#1f3a4d" text-anchor="middle">线速度：赤道约 1670 km/时</text><text x="530" y="245" font-size="12" fill="#1f3a4d" text-anchor="middle">两极线速度和角速度均为 0</text></svg>', caption: '图1　地球自西向东自转，角速度除极点外相等，线速度由赤道向两极递减。' },
      { type: 'keypoint', label: '重点·恒星日与太阳日', text: '<strong>恒星日是地球自转的真正周期</strong>，时长约 23 时 56 分 4 秒，以遥远恒星为参照；<strong>太阳日是我们日常使用的一天</strong>，约 24 小时，以太阳为参照。由于地球在自转的同时还在公转，参考点不同导致两者相差约 3 分 56 秒。考试问「自转周期」答恒星日，「一天」答太阳日。' },
      { type: 'heading', text: '二、地球公转的基本特征' },
      { type: 'paragraph', text: '地球绕太阳的运动叫做公转。公转轨道是一个接近正圆的椭圆，太阳位于椭圆的一个焦点上。地球公转的方向与自转相同，也是自西向东。公转的真正周期是 1 个恒星年，时长约为 365 日 6 时 9 分。由于轨道是椭圆，地球在公转过程中与太阳的距离会发生变化。' },
      { type: 'list', items: ['方向：自西向东', '轨道：接近正圆的椭圆，太阳位于一个焦点', '周期：恒星年约 365 日 6 时 9 分', '速度：近日点（1 月初）较快，远日点（7 月初）较慢'] },
      { type: 'table', headers: ['项目', '自转', '公转'], rows: [['旋转中心', '地轴', '太阳'], ['方向', '自西向东', '自西向东'], ['周期', '恒星日约 23 时 56 分', '恒星年约 365 日 6 时 9 分'], ['轨道形状', '—', '近似正圆的椭圆'], ['速度特征', '角速度除极点外相等', '近日点快、远日点慢']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">地球公转轨道与近日点、远日点</text><ellipse cx="340" cy="170" rx="280" ry="110" fill="none" stroke="#2a6fa8" stroke-width="2"/><circle cx="470" cy="170" r="14" fill="#e8a33d" stroke="#b5651d" stroke-width="2"/><text x="470" y="205" font-size="12" fill="#1f3a4d" text-anchor="middle">太阳（焦点）</text><circle cx="100" cy="170" r="10" fill="#2a6fa8"/><text x="100" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">近日点</text><circle cx="580" cy="170" r="10" fill="#2a6fa8"/><text x="580" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">远日点</text><text x="340" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">1 月初过近日点速度较快，7 月初过远日点速度较慢。</text></svg>', caption: '图2　公转轨道为椭圆，太阳位于焦点；1月初近日点最快，7月初远日点最慢。' },
      { type: 'example', label: '例题·判断速度', text: '题目：下列有关地球自转速度的叙述，正确的是？<br>A. 北京和广州的角速度不同　B. 广州的线速度大于北京<br>C. 南北极点线速度为 0 但角速度不为 0<br>解析：地球自转除南北极点外，各地角速度都相等，约 15°/时，所以北京与广州角速度相同，A 错；线速度由赤道向两极递减，广州纬度低于北京，离赤道更近，线速度更大，B 对；南北极点既无角速度也无线速度，均为 0，C 错。答案为 B。' },
      { type: 'heading', text: '三、黄赤交角及其影响' },
      { type: 'paragraph', text: '地球公转轨道平面（黄道面）与过地心且与地轴垂直的平面（赤道面）之间存在一个夹角，叫做黄赤交角，目前约为 23°26′。由于地轴在空间指向基本不变，黄赤交角使得太阳直射点在南北回归线之间做往返运动，这是地球上四季更替和五带划分的根本原因。' },
      { type: 'warn', label: '易错·两个含混点', text: '① 黄赤交角约 23°26′，不是 23.5° 的随意写法，正式考试写 23°26′ 更稳妥；② 太阳直射点只在南北回归线之间移动，最北到北回归线（23°26′N），最南到南回归线（23°26′S），不会越过。回归线之名正来源于此。' },
      { type: 'tip', label: '提示·直射点移动规律', text: '记住「两分两至」四个关键位置：春分（3 月 21 前后）直射赤道、夏至（6 月 22 前后）直射北回归线、秋分（9 月 23 前后）直射赤道、冬至（12 月 22 前后）直射南回归线。直射点移动方向：冬至→夏至向北移，夏至→冬至向南移。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">黄赤交角与太阳直射点的移动</text><ellipse cx="340" cy="220" rx="270" ry="70" fill="none" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">黄道面（公转轨道面）</text><line x1="340" y1="220" x2="340" y2="120" stroke="#c1583b" stroke-width="2"/><text x="348" y="170" font-size="12" fill="#1f3a4d">地轴（23°26′）</text><line x1="120" y1="220" x2="560" y2="220" stroke="#7ab87a" stroke-width="2" stroke-dasharray="5 4"/><text x="340" y="210" font-size="12" fill="#1f3a4d" text-anchor="middle">赤道面</text><text x="340" y="135" font-size="12" fill="#1f3a4d" text-anchor="middle">黄赤交角 23°26′</text><circle cx="200" cy="200" r="6" fill="#2a6fa8"/><text x="200" y="190" font-size="11" fill="#1f3a4d" text-anchor="middle">南回归线</text><circle cx="480" cy="200" r="6" fill="#2a6fa8"/><text x="480" y="190" font-size="11" fill="#1f3a4d" text-anchor="middle">北回归线</text><text x="340" y="345" font-size="12" fill="#1f3a4d" text-anchor="middle">直射点在南北回归线之间往返，形成四季与五带。</text></svg>', caption: '图3　黄赤交角约 23°26′，使太阳直射点在南北回归线之间往返移动。' },
      { type: 'heading', text: '四、小结：自转与公转共同塑造地球运动' },
      { type: 'paragraph', text: '自转和公转是地球同时进行的两种基本运动。自转产生昼夜交替和地转偏向力，公转叠加上黄赤交角，使直射点回归运动，进而产生正午太阳高度和昼夜长短的季节变化。两者结合，是后面学习地球运动地理意义的基础。' },
      { type: 'list', items: ['自转：方向自西向东、周期恒星日、角速度均一、线速度赤道最大', '公转：椭圆轨道、恒星年、近日点快远日点慢', '黄赤交角 23°26′ 是直射点回归运动和四季五带的根本原因', '地轴指向稳定，是黄赤交角得以保持的前提'] },
      { type: 'keypoint', label: '重点·本课时核心结论', text: '<strong>三个数字务必记牢：</strong>自转真正周期恒星日约 23 时 56 分；公转真正周期恒星年约 365 日 6 时 9 分；黄赤交角约 23°26′。<strong>两个方向：</strong>自转公转都自西向东。<strong>一条主线：</strong>黄赤交角 → 直射点回归运动 → 四季与五带。' }
    ],
    exercises: [
      { type: 'choice', question: '地球自转的真正周期是？', options: ['一个太阳日约 24 小时', '一个恒星日约 23 时 56 分', '一个恒星年约 365 日', '一个回归年约 365 日 5 时'], answer: '一个恒星日约 23 时 56 分', explanation: '地球自转的真正周期是以遥远恒星为参照的恒星日，时长约为 23 小时 56 分 4 秒；日常使用的 24 小时是太阳日，是以太阳为参照的周期，比恒星日长约 3 分 56 秒。恒星年是公转周期，回归年是直射点回归周期，都与自转无关。' },
      { type: 'choice', question: '关于地球自转线速度的叙述，正确的是？', options: ['赤道处最小', '由赤道向两极递减', '两极处线速度最大', '北京比广州线速度大'], answer: '由赤道向两极递减', explanation: '地球自转线速度随纬度升高而减小，赤道处最大，约为 1670 千米/时，向两极逐渐减小，到南北极点降为 0。广州纬度低于北京，离赤道更近，线速度比北京大。因此只有「由赤道向两极递减」这一项正确。' },
      { type: 'choice', question: '目前黄赤交角的度数约为？', options: ['0°', '23°26′', '66°34′', '30°'], answer: '23°26′', explanation: '黄赤交角是黄道面（地球公转轨道平面）与赤道面之间的夹角，目前约为 23°26′。它的存在使太阳直射点在南北回归线之间往返移动，是地球上四季更替和五带划分的根本原因。66°34′ 是地轴与黄道面的夹角，并非黄赤交角。' },
      { type: 'fill', question: '地球公转轨道是接近正圆的___，太阳位于椭圆的一个___上。', answer: '椭圆；焦点', explanation: '地球绕太阳公转的轨道是一个接近正圆的椭圆，太阳并不在椭圆中心，而是位于椭圆的一个焦点上。由于这一偏心的轨道，地球在 1 月初经过距离太阳最近的近日点、速度较快，7 月初经过最远的远日点、速度较慢。' },
      { type: 'fill', question: '从北极上空俯视，地球自转方向呈___（顺/逆）时针；从南极上空俯视呈___时针。', answer: '逆；顺', explanation: '地球自转方向为自西向东。从北极上空向下看，地球呈逆时针方向旋转；从南极上空向下看，则呈顺时针方向旋转。可以用「北逆南顺」四个字记忆，这是判断球面方向类题目的基础。' }
    ]
  });
})();
