/* ============================================================
 * 高二物理 · 必修第三册 · 第十一章 电路及其应用
 * 课时10：电源和电流
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u10',
    name: '电源和电流',
    chapter: '必修第三册 · 第十一章 电路及其应用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、电流是怎样形成的' },
      { type: 'paragraph', text: '金属导线里有许多自由电子，平时它们到处乱跑、没有固定方向，整体上看并不往哪边走，所以导线里没有电流。要产生电流，必须让这些自由电荷持续地朝同一个方向移动。谁来推动它们呢？靠的就是电源。' },
      { type: 'keypoint', label: '重点·电流的形成条件', text: '<strong>要有持续的电流，必须同时具备两个条件：第一，有自由电荷（金属里有自由电子）；第二，导体两端存在电压（由电源提供），让自由电荷定向移动。</strong>' },
      { type: 'paragraph', text: '可以把它想象成水管里的水：水管里本来就有水（自由电荷），但如果没有水压（电压）把水往一处推，水就不会流动；一旦水泵（电源）造成两端水压不同，水就会持续流动形成水流。电荷的流动就是电流。' },
      { type: 'heading', text: '二、电源的作用' },
      { type: 'paragraph', text: '电源好比一个"电荷搬运工"。它把来到负极的自由电荷不断搬到正极，使正极总是缺少电子、负极总是多余电子，从而维持正负两极之间的电压（电势差）不变。这样导线里的自由电荷就会在电场力作用下持续定向移动，形成稳定的电流。' },
      { type: 'list', items: ['维持电势差：电源让正负两极保持一定的电压，这是电流能够持续的原因', '搬运电荷：电源把自由电荷从电势低的一端搬到电势高的一端，相当于把其他形式的能转化为电能', '提供能量：干电池靠化学反应、发电机靠电磁感应，本质都是把其他能变成电能供电路使用'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电源维持电势差，让电荷沿导线循环流动</text><rect x="60" y="70" width="260" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="190" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">电源（如干电池）</text><rect x="130" y="120" width="120" height="70" rx="6" fill="#4fb3a5"/><text x="190" y="158" font-size="13" fill="#234b45" text-anchor="middle">把电荷从负极</text><text x="190" y="176" font-size="13" fill="#234b45" text-anchor="middle">搬到正极</text><rect x="360" y="70" width="260" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="490" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">闭合导线</text><polygon points="490,150 510,142 510,158" fill="#234b45"/><text x="490" y="210" font-size="13" fill="#234b45" text-anchor="middle">自由电荷持续定向移动</text><text x="340" y="276" font-size="13" fill="#234b45" text-anchor="middle">电源是形成稳定电流的必要条件</text></svg>', caption: '图1　电源不断把电荷从一端搬到另一端，维持电压，使导线中的自由电荷持续定向移动形成电流。' },
      { type: 'paragraph', text: '要注意：电源内部，电荷是从负极被"搬"到正极（从低电势到高电势），靠的是非静电力；而在电源外部的导线上，正电荷从高电势流向低电势，靠的是电场力。整个回路里电荷循环流动，不会在某处堆积。' },
      { type: 'heading', text: '三、电流的大小——电流强度 I = q / t' },
      { type: 'paragraph', text: '电流有强有弱。怎么衡量强弱？看单位时间内穿过导线某一横截面的电荷量有多少。规定：通过横截面的电荷量 q 除以所用的时间 t，就是电流强度，简称电流，用字母 I 表示。公式是 I = q / t。' },
      { type: 'keypoint', label: '重点·电流定义式', text: '<strong>I = q / t。其中 I 是电流，q 是某段时间内穿过横截面的总电荷量，t 是这段时间。电流越大，说明相同时间里通过的电荷越多。</strong>' },
      { type: 'example', label: '例题·用定义式算电流', text: '某导线在 2 秒内有 6 库仑的电荷量通过横截面，求这段导线中的电流。<br><br><strong>解析</strong>：<br>已知 q = 6 C，t = 2 s。<br>由 I = q / t 得：I = 6 / 2 = 3 A。<br>所以导线中的电流是 3 安培。' },
      { type: 'warn', label: '易错', text: '公式里的 q 是<strong>穿过横截面的总电荷量</strong>，不是单个电荷的电荷量。比如 1 秒内通过了 10 亿个电子，q 要把这 10 亿个电子的电荷量全加在一起算，不能只拿一个电子的电荷量去代。另外电流是标量，虽然有"方向"，但相加时按代数相加，不按矢量合成。' },
      { type: 'table', headers: ['用电器', '电流大约数值', '说明'], rows: [['手电筒小灯泡', '约 0.3 A', '日常照明较小'], ['家用电冰箱', '约 1 A', '压缩机工作时'], ['教室日光灯', '约 0.2 A', '单支灯管'], ['雷电瞬间', '可达 2×10⁴ A 以上', '极其短暂且危险'], ['人体感知电流', '约 0.001 A', '超过则有触电危险']] },
      { type: 'heading', text: '四、电流的微观表达式 I = n × q × S × v' },
      { type: 'paragraph', text: '从微观角度看，电流和导体里自由电荷的多少、每个电荷带多少电、导线粗细、电荷跑多快都有关。设想一段横截面积为 S 的导线，单位体积内有 n 个自由电荷，每个带电量 q，电荷定向移动速度是 v。在 1 秒内，电荷走过距离 v，这段长度为 v 的柱体体积为 S × v，里面电荷数为 n × S × v，总电荷量 q总 = n × q × S × v，所以电流 I = n × q × S × v。' },
      { type: 'list', items: ['n：单位体积内的自由电荷数（叫自由电荷密度）', 'q：每个自由电荷带的电荷量', 'S：导线横截面积', 'v：自由电荷定向移动的平均速率'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">微观模型：I = n × q × S × v</text><rect x="80" y="70" width="300" height="160" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="230" y="94" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">导线（横截面积 S）</text><circle cx="140" cy="150" r="8" fill="#4fb3a5"/><circle cx="200" cy="130" r="8" fill="#4fb3a5"/><circle cx="260" cy="160" r="8" fill="#4fb3a5"/><circle cx="320" cy="140" r="8" fill="#4fb3a5"/><polygon points="300,108 318,100 318,116" fill="#234b45"/><text x="330" y="103" font-size="12" fill="#234b45">v</text><text x="180" y="232" font-size="13" fill="#234b45" text-anchor="middle">单位体积 n 个电荷</text><rect x="420" y="70" width="200" height="160" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="520" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">1秒走过体积</text><text x="520" y="128" font-size="13" fill="#234b45" text-anchor="middle">S × v</text><text x="520" y="156" font-size="13" fill="#234b45" text-anchor="middle">电荷数 n × S × v</text><text x="520" y="184" font-size="13" fill="#234b45" text-anchor="middle">电量 n × q × S × v</text></svg>', caption: '图2　从微观看，1 秒内通过横截面的电荷总量等于 n × q × S × v，这就是电流 I 的微观来源。' },
      { type: 'tip', label: '提示·电流方向的规定', text: '<strong>规定正电荷定向移动的方向为电流方向。</strong>金属里实际移动的是带负电的自由电子，电子往左跑，电流方向就向右。所以电流方向和电子实际移动方向正好相反。在电路外部，电流从电源正极流向负极。' },
      { type: 'paragraph', text: '值得注意：自由电子的定向移动速率 v 其实很慢，大约只有每秒几毫米到几厘米。那为什么一按开关灯立刻就亮？因为电场在导线中传播接近光速，开关一合，整条导线几乎同时建立电场，各处自由电子同时开始定向移动，所以灯几乎立刻就亮，并不是电子从开关"跑"到灯泡。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电流方向与电子实际移动方向相反</text><rect x="80" y="90" width="520" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="110" y="120" font-size="13" fill="#234b45">电源正极</text><text x="600" y="120" font-size="13" fill="#234b45" text-anchor="end">电源负极</text><polygon points="430,150 452,142 452,158" fill="#1f7a6e"/><text x="380" y="178" font-size="13" fill="#1f7a6e" font-weight="bold">电流方向 I（正电荷方向）</text><polygon points="250,158 232,150 232,166" fill="#4fb3a5"/><text x="300" y="190" font-size="13" fill="#234b45">电子实际移动方向</text><text x="340" y="248" font-size="13" fill="#234b45" text-anchor="middle">外部电路：电流从正极到负极，电子从负极到正极</text></svg>', caption: '图3　电路外部电流方向与电子实际移动方向相反：电流由正极流向负极，而带负电的电子由负极流向正极。' }
    ],
    exercises: [
      { type: 'choice', question: '关于电流的形成，下列说法正确的是？', options: ['只要导体里有自由电荷就一定能形成电流', '导体两端有电压是形成持续电流的必要条件之一', '自由电荷只要存在就会自动定向移动形成电流', '绝缘体里没有电荷所以不可能带电'], answer: '导体两端有电压是形成持续电流的必要条件之一', explanation: '形成持续电流必须同时具备两个条件：一是导体中有自由电荷，二是导体两端存在电压（由电源维持）使自由电荷定向移动。仅有自由电荷而没有电压，电荷只是无规则热运动，不会形成电流；绝缘体中自由电荷极少，难以形成电流，但并非完全没有电荷。' },
      { type: 'choice', question: '下列关于电源作用的说法，正确的是？', options: ['电源的作用是把电能转化成其他形式的能', '电源能维持正负极之间的电势差，使电流持续', '电源内部电荷从正极被搬到负极', '电源只在接通瞬间起作用，之后不再需要'], answer: '电源能维持正负极之间的电势差，使电流持续', explanation: '电源的本质是把其他形式的能（如化学能、机械能）转化为电能，并不断把自由电荷从负极搬到正极，从而维持正负极之间的电势差（电压）不变，使电路中的电流能够持续稳定。电源在电流持续存在期间一直起作用，并非只在接通瞬间工作。' },
      { type: 'choice', question: '已知某导线在 4 秒内通过了 8 库仑的电荷量，则该导线中的电流是？', options: ['0.5 A', '2 A', '12 A', '32 A'], answer: '2 A', explanation: '根据电流定义式 I = q / t，代入 q = 8 C，t = 4 s，得 I = 8 / 4 = 2 A。这里 q 是穿过横截面的总电荷量，直接用总电荷量除以时间即可，不需要考虑单个电荷的大小。' },
      { type: 'fill', question: '电流的微观表达式 I = n × q × S × v 中，字母 n 表示单位体积内的___（填"自由电荷数"或"总电荷量"）。', answer: '自由电荷数', explanation: '在微观表达式 I = n × q × S × v 中，n 是单位体积内的自由电荷数目，称为自由电荷密度；q 是每个自由电荷带的电荷量；S 是导线横截面积；v 是自由电荷定向移动的平均速率。四者的乘积 n×q×S×v 表示单位时间通过横截面的电荷量，也就是电流。' },
      { type: 'fill', question: '物理学中规定，___电荷定向移动的方向为电流的方向；金属导线中实际移动的是带负电的自由电子，所以电流方向与它实际移动方向___（填"相同"或"相反"）。', answer: '正|相反', explanation: '规定正电荷定向移动的方向为电流方向。在金属导体中，能够自由移动的是带负电的自由电子，电子向某一方向移动时，等效于正电荷向相反方向移动，因此电流方向与自由电子实际移动方向恰好相反。外部电路中电流从电源正极流向负极。' }
    ]
  });
})();
