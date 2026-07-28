/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第五章 传感器
 * 课时18：传感器的应用
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u18',
    name: '传感器的应用',
    chapter: '选择性必修第二册 · 第五章 传感器',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、传感器应用的总体思路' },
      { type: 'paragraph', text: '传感器在仪器和电器里扮演"感觉器官"的角色。它先感知外界的温度、压力、光线等变化，把这些信息变成电信号，再交给后级的电路去判断，最后让电机、加热器、蜂鸣器、灯泡这些"执行元件"去真正做动作。可以这样记：传感器管"知道发生了什么"，执行元件管"去做点什么"。' },
      { type: 'list', items: ['第一步 感知：传感器把温度、光、压力等变成电信号', '第二步 转换传送：信号被放大、整理后送进控制电路', '第三步 判断处理：电路按设定规则决定要不要动作', '第四步 执行：电机、灯、铃等执行元件完成实际动作'] },
      { type: 'keypoint', label: '重点·传感器的角色', text: '<strong>传感器是自动控制系统里的"眼睛、鼻子、皮肤"，负责把外界信息变成电信号；真正"动手"的是后级的执行元件。</strong>没有传感器，控制系统就成了"瞎子"，不知道该何时动作。' },
      { type: 'heading', text: '二、力传感器——以电子秤为例' },
      { type: 'paragraph', text: '电子秤是最常见、也最好懂的力传感器应用。你把东西放上去，重物压在托盘上，托盘下的压力传感器（常是应变片）被压得微微变形，它的电阻随之改变，于是压力大小就被转换成电压大小。经过放大和换算，屏幕就显示出对应的质量。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电子秤：把压力变成质量显示</text><rect x="30" y="70" width="150" height="90" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="105" y="112" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">放重物</text><text x="105" y="138" font-size="12" fill="#234b45" text-anchor="middle">产生压力</text><line x1="182" y1="115" x2="208" y2="115" stroke="#234b45" stroke-width="2"/><polygon points="204,107 220,115 204,123" fill="#234b45"/><rect x="213" y="70" width="160" height="90" rx="10" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="293" y="112" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">压力传感器</text><text x="293" y="138" font-size="12" fill="#234b45" text-anchor="middle">受压 → 阻值变</text><line x1="375" y1="115" x2="401" y2="115" stroke="#234b45" stroke-width="2"/><polygon points="397,107 413,115 397,123" fill="#234b45"/><rect x="418" y="70" width="150" height="90" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="493" y="112" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">放大换算</text><text x="493" y="138" font-size="12" fill="#234b45" text-anchor="middle">变成质量数</text><line x1="570" y1="115" x2="596" y2="115" stroke="#234b45" stroke-width="2"/><polygon points="592,107 608,115 592,123" fill="#234b45"/><rect x="603" y="70" width="58" height="90" rx="10" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="632" y="118" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">显示</text><text x="340" y="225" font-size="13" fill="#234b45" text-anchor="middle">压力（非电学量）→ 电阻变化 → 电压 → 换算成质量</text></svg>', caption: '图1　电子秤用压力传感器把重物压力转成电信号，再换算并显示质量。' },
      { type: 'list', items: ['压力传感器常用应变片，受压力变形后电阻改变', '压力越大，输出信号越强，对应显示的质量越大', '信号要经过放大和换算，才能变成我们读得懂的"千克"数'] },
      { type: 'keypoint', label: '重点·电子秤原理', text: '<strong>电子秤把"压力"这个非电学量，通过压力传感器变成电阻（或电压）的变化，再换算成质量显示出来。</strong>它的核心是"压力→电信号→数字"这一转换链。' },
      { type: 'heading', text: '三、温度传感器——电饭煲、测温' },
      { type: 'paragraph', text: '电饭煲里装着温度传感器，它时刻盯着内锅的温度。煮饭时水没干，温度维持在约 100 摄氏度；等水烧干，温度继续上升超过设定值，传感器送出的信号也跟着变，控制电路据此切断加热、切换到保温。这样饭既煮熟又不会烧糊。' },
      { type: 'paragraph', text: '温度传感器的用处很广：额温枪、体温计靠它测体温；冰箱靠它判断要不要启动压缩机；空调靠它决定制冷还是制热。它们都是把"温度"先变成电信号，再交给电路去比较和控制。' },
      { type: 'table', headers: ['应用例子', '所用传感器', '被测量的量'], rows: [['电子秤', '力传感器（压力）', '压力 / 重力'], ['电饭煲', '温度传感器', '温度'], ['额温枪、冰箱', '温度传感器', '温度'], ['烟尘浓度报警', '光传感器', '光照强弱'], ['自动门', '光传感器（含红外）', '是否有人靠近（光/红外变化）']] },
      { type: 'heading', text: '四、光传感器——烟尘浓度、自动门' },
      { type: 'paragraph', text: '测烟尘浓度时，让一束光从一端射向另一端的光敏接收器。空气干净时，光几乎不被挡，接收器收到很强的光；一旦烟尘变多，光被烟尘颗粒挡住、散射掉，接收器收到的光就变弱。电路发现"光变弱到一定程度"就判断为超标，触发报警。' },
      { type: 'paragraph', text: '自动门也是光（或红外）传感器的功劳。门前有一个发射器不断发出红外光，你走近时身体挡住了这束光（或反射回一部分），接收器收到的光信号发生变化，电路判断"有人来了"，就控制电机把门打开。人走远后光恢复，门再关上。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">光传感器测烟尘：光被挡住就报警</text><rect x="40" y="110" width="90" height="60" rx="10" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="85" y="146" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">光源</text><line x1="130" y1="140" x2="300" y2="140" stroke="#234b45" stroke-width="2"/><circle cx="200" cy="130" r="6" fill="#234b45"/><circle cx="225" cy="150" r="5" fill="#234b45"/><circle cx="250" cy="132" r="4" fill="#234b45"/><text x="215" y="185" font-size="12" fill="#234b45" text-anchor="middle">空中烟尘挡光</text><rect x="310" y="110" width="100" height="60" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="360" y="146" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">接收器</text><line x1="410" y1="140" x2="470" y2="140" stroke="#234b45" stroke-width="2"/><polygon points="466,132 482,140 466,148" fill="#234b45"/><rect x="475" y="110" width="100" height="60" rx="10" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="525" y="146" font-size="13" fill="#234b45" text-anchor="middle"ounce="middle" font-weight="bold">报警</text><text x="340" y="240" font-size="13" fill="#234b45" text-anchor="middle">烟尘越多 → 光越弱 → 接收信号越弱 → 触发报警</text></svg>', caption: '图2　烟尘浓度越大，遮挡的光越多，光敏接收器收到的信号越弱，从而报警。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">自动门：人靠近挡光，门自动开</text><rect x="60" y="110" width="70" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="95" y="178" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">门</text><circle cx="200" cy="160" r="22" fill="#4fb3a5"/><text x="200" y="166" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">人</text><line x1="245" y1="140" x2="300" y2="140" stroke="#234b45" stroke-width="2"/><polygon points="296,132 312,140 296,148" fill="#234b45"/><rect x="305" y="110" width="120" height="60" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="365" y="146" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">光/红外传感</text><line x1="425" y1="140" x2="470" y2="140" stroke="#234b45" stroke-width="2"/><polygon points="466,132 482,140 466,148" fill="#234b45"/><rect x="475" y="110" width="120" height="60" rx="10" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="535" y="146" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">电机开门</text><text x="340" y="240" font-size="13" fill="#234b45" text-anchor="middle">人靠近 → 光/红外被挡 → 信号变化 → 电机驱动门打开</text></svg>', caption: '图3　自动门靠光（红外）传感器感知有人靠近，再驱动电机把门打开。' },
      { type: 'keypoint', label: '重点·光传感器应用', text: '<strong>光传感器把"光照强弱"变成电信号：烟尘越多光越弱、报警；人靠近挡住红外光、开门。</strong>判断的关键都是"光信号变强还是变弱"，再由后级电路决定动作。' },
      { type: 'warn', label: '易错', text: '<strong>别把"传感器"和"执行元件"混为一谈。</strong>传感器只负责感知并送出电信号，它本身并不会加热、不会开门、不会响铃；真正完成这些动作的是加热器、电机、蜂鸣器等执行元件。很多同学做题时把两者搞反，记住：传感器是"感觉器官"，执行元件才是"手脚"。' },
      { type: 'example', label: '例题·自动门用了什么', text: '商场自动门能在人走近时自动打开，主要依靠的是哪种传感器？它是如何工作的？<br><br><strong>解析</strong>：<br>主要依靠<strong>光传感器（常用红外光）</strong>。门前持续发射红外光，当人走近挡住或反射这束光时，接收器收到的光信号发生变化，控制电路判断"有人靠近"，于是命令电机把门打开；人离开后光恢复，门再关闭。这里传感器只负责"发现人来了"，真正开门的是电机这个执行元件。' },
      { type: 'tip', label: '提示', text: '<strong>判断一个应用用哪种传感器，先看它"感知的是什么量"。</strong>称重量靠力（压力）传感器，控温度靠温度传感器，辨明暗或测烟尘、感应人体靠光（红外）传感器。先确定被测量，再对应到元件，就不容易选错。' },
      { type: 'list', items: ['力传感器（电子秤）：压力 → 电信号 → 质量', '温度传感器（电饭煲、测温）：温度 → 电信号 → 控制加热', '光传感器（烟尘、自动门）：光照变化 → 电信号 → 报警或开门', '传感器只感知，动作由执行元件完成'] }
    ],
    exercises: [
      { type: 'choice', question: '电子秤测量质量，主要使用了下列哪类传感器？', options: ['力传感器（压力传感器）', '温度传感器', '光传感器', '声音传感器'], answer: '力传感器（压力传感器）', explanation: '电子秤的原理是把物体的重力（压力）作用在压力传感器上，传感器受压后电阻或电压发生变化，再换算成质量显示。所以核心是力传感器。温度传感器感知温度、光传感器感知光、声音传感器感知声音，都和电子秤称质量无关。' },
      { type: 'choice', question: '商场自动门能在人走近时自动打开，通常主要依靠？', options: ['光传感器（含红外）', '温度传感器', '力传感器', '湿度传感器'], answer: '光传感器（含红外）', explanation: '自动门多在门侧设置红外光发射与接收装置：人走近时挡住或反射红外光，使接收器收到的光信号改变，电路判断有人后驱动电机关门。它感知的是光（红外）的变化，而不是温度、压力或湿度，所以选光传感器。' },
      { type: 'choice', question: '关于传感器与执行元件，下列说法正确的是？', options: ['传感器直接完成加热、开门等动作', '传感器只负责感知并转换成电信号，动作由执行元件完成', '执行元件负责测量外界的物理量', '传感器和执行元件是同一个东西'], answer: '传感器只负责感知并转换成电信号，动作由执行元件完成', explanation: '在自动控制系统里，传感器相当于感觉器官，只负责把温度、光、压力等变成电信号；真正去加热、开门、响铃的是电机、加热器、蜂鸣器等执行元件。两者分工明确、不是同一个东西，传感器本身并不会去做物理动作。' },
      { type: 'fill', question: '电饭煲通过感知___（填一种被测量）来控制煮饭和切换到保温。', answer: '温度', explanation: '电饭煲内部装有温度传感器，它持续监测内锅温度。煮饭时锅内水没干，温度保持在约 100 摄氏度；水烧干后温度继续上升超过设定值，传感器信号变化，控制电路据此停止加热并切到保温。所以它靠感知"温度"来决策，而不是靠压力或光照。' },
      { type: 'fill', question: '测量烟尘浓度时，烟尘越多，被烟尘遮挡的光越___，光敏接收元件收到的光信号越弱（填"多"或"少"）。', answer: '少', explanation: '测烟尘浓度的装置让一束光射向对面的光敏接收器。空气干净时光几乎不被挡，接收器收到强光；烟尘增多后，光被烟尘颗粒吸收和散射，能到达接收器的光就变少，接收信号随之减弱。电路正是靠"光变弱"这个信号来判断烟尘超标并报警的。' }
    ]
  });
})();
