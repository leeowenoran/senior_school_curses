/* ============================================================
 * 高一物理 · 必修 第一册 · 第二章 匀变速直线运动
 * 第7课时：实验：探究小车速度随时间变化的规律
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u7',
    name: '实验：探究小车速度随时间变化的规律',
    chapter: '必修第一册 · 第二章 匀变速直线运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验目的与器材' },
      { type: 'paragraph', text: '这一节我们动手做一次真实实验，目标是看看小车在长木板上运动时，它的速度是不是随着时间均匀变化的。如果速度随时间均匀增加或减少，我们就说它做匀变速直线运动。实验不止是记数据，更重要的是学会把纸带上的点变成速度，再画成图像，最后从图中看出规律。' },
      { type: 'paragraph', text: '做这个实验，需要的器材有：一端带滑轮的长木板、可以下滑的小车、细绳和挂在绳上的钩码、夹在木板上的打点计时器、穿过计时器的纸带，还有学生电源、刻度尺和复写纸。打点计时器每隔相同时间（通常 0.02 秒）在纸带上打下一个点，小车拖动纸带，纸上就留下了它运动的“脚印”。' },
      { type: 'list', items: [
        '长木板（一端带滑轮）：让小车能在上面平稳滑动',
        '小车：研究对象，在钩码拉动下运动',
        '打点计时器 + 纸带：记录小车在不同时刻的位置',
        '钩码：通过细绳给小车提供拉力，让小车加速',
        '学生电源、刻度尺、复写纸：供电、测量、转印点迹'
      ] },
      { type: 'table', headers: ['器材', '作用'], rows: [
        ['打点计时器', '每隔 0.02 秒在纸带上打一个点'],
        ['纸带', '记录小车运动的位置序列'],
        ['钩码', '通过细绳拉动小车，使其加速'],
        ['长木板（带滑轮）', '提供近似水平的运动轨道'],
        ['刻度尺', '测量相邻点之间的距离']
      ] },
      { type: 'keypoint', label: '重点·实验核心思路', text: '实验的核心是：<strong>纸带上的点 = 小车在不同时刻的位置</strong>。<br>先由点间距求出各计数点的<strong>瞬时速度</strong>，再把（时间, 速度）描到 v-t 坐标系里，看这些点是否近似落在一条斜直线上。如果是，说明小车做匀变速直线运动，<strong>直线的斜率就是加速度 a</strong>。' },
      { type: 'heading', text: '二、实验步骤' },
      { type: 'paragraph', text: '第一步，把长木板平放，滑轮一端伸出桌外，打点计时器固定在木板没有滑轮的一端附近。把纸带穿过计时器，一端固定在小车上。挂上适当个数的钩码，让小车在钩码拉动下能平稳加速。' },
      { type: 'paragraph', text: '第二步，操作顺序非常关键：必须先接通打点计时器电源，让计时器稳定打点后，再释放小车。如果先放车后通电，纸带开头一段就没有点，数据就缺了。小车碰到滑轮前要及时用手接住，避免摔落。' },
      { type: 'list', items: [
        '① 组装器材：木板、滑轮、计时器、纸带、小车、钩码依次装好',
        '② 先通电：接通打点计时器电源，等它稳定打点',
        '③ 后放车：释放小车，让它拖着纸带运动',
        '④ 取纸带：小车到达滑轮前接住，关闭电源，取下纸带',
        '⑤ 重复：多打几条纸带，选点迹清晰的一条分析'
      ] },
      { type: 'tip', label: '提示', text: '记住口诀“<strong>先通电，后释放</strong>”。很多同学习惯先放手再去找开关，结果纸带开头的几个点空白，算速度时这一段就浪费了。养成先通电稳定、再放车的习惯，数据才完整。' },
      { type: 'keypoint', label: '重点·计数点的选取', text: '计时器每 0.02 秒打一个点，但相邻点太密不便测量。通常每 <strong>5 个点取一个计数点</strong>，这时相邻计数点之间的时间间隔 T = 0.1 秒。这样既能减小测量误差，又让计算更方便。' },
      { type: 'heading', text: '三、数据处理与图像' },
      { type: 'paragraph', text: '拿到纸带后，先标明计数点 0、1、2、3……。测出相邻计数点间的距离 x₁、x₂、x₃……。某个计数点的瞬时速度，可以用它前后两段位移的平均速度来近似，例如第 2 点的速度 v₂ ≈ (x₂ + x₃) / (2T)。这就是“中间时刻速度等于平均速度”的妙用。' },
      { type: 'paragraph', text: '算出每个计数点的速度后，建立一个直角坐标系：横轴是时间 t，纵轴是速度 v。把各点（t, v）描上去。你会发现这些点大致排成一条斜的直线。用直尺画一条最贴近这些点的直线，它就是小车的 v-t 图像。' },
      { type: 'keypoint', label: '重点·如何求加速度', text: '在 v-t 图像上取两个点 (t₁, v₁) 和 (t₂, v₂)，则加速度 <strong>a = (v₂ - v₁) / (t₂ - t₁)</strong>，也就是这条直线的斜率。注意 t 要代入真实的秒数，而不是计数点编号。' },
      { type: 'example', label: '例题', text: '某纸带每 5 个点取一计数点，T = 0.1 秒。测得 x₂ = 3.2 厘米，x₃ = 3.8 厘米，则第 2 计数点的瞬时速度 v₂ ≈ (x₂ + x₃) / (2T) = (3.2 + 3.8) / (2 × 0.1) = 7.0 / 0.2 = 35 厘米/秒 = 0.35 米/秒。<br><br><strong>解析</strong>：利用“中间时刻瞬时速度等于该段平均速度”，把第 2 点前后两段位移相加再除以总时间 2T，即可得到 v₂。注意单位换算，厘米/秒要除以 100 才是米/秒。' },
      { type: 'warn', label: '易错', text: '求某计数点速度时，要用<strong>它前后相邻两段</strong>位移 x(n) + x(n+1)，再除以 2T，而不是只用某一段。另外 T 是计数点间的时间间隔（通常 0.1 秒），不是计时器打点周期 0.02 秒，二者容易混淆。' },
      { type: 'heading', text: '四、实验结论' },
      { type: 'paragraph', text: '如果描出的各点近似落在同一条倾斜直线上，说明小车的速度随时间均匀变化，即小车做的是匀变速直线运动。直线向上倾斜表示速度越来越大（匀加速），向下倾斜表示速度越来越小（匀减速）。直线越陡，加速度越大。' },
      { type: 'tip', label: '提示', text: '实验允许点略有偏离直线，那只是测量误差。判断“是否一条直线”要看整体趋势，不要因为个别点偏一点就否定结论。画直线时应让尽量多的点落在线上，其余点均匀分布在直线两侧。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图1　实验装置示意图</text><rect x="60" y="120" width="520" height="22" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="320" y="136" font-size="13" fill="#234b45" text-anchor="middle">长木板（一端带滑轮）</text><rect x="80" y="90" width="80" height="34" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="120" y="112" font-size="13" fill="#234b45" text-anchor="middle">小车</text><rect x="500" y="118" width="20" height="26" rx="4" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="540" y="137" font-size="13" fill="#234b45">滑轮</text><line x1="120" y1="90" x2="120" y2="120" stroke="#2e9e8f" stroke-width="2"/><line x1="120" y1="120" x2="510" y2="120" stroke="#4fb3a5" stroke-width="2"/><rect x="500" y="150" width="34" height="40" rx="4" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="517" y="174" font-size="12" fill="#234b45" text-anchor="middle">钩码</text><line x1="510" y1="130" x2="517" y2="150" stroke="#2e9e8f" stroke-width="2"/><rect x="200" y="118" width="30" height="26" rx="4" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="215" y="135" font-size="11" fill="#234b45" text-anchor="middle">计时器</text><line x1="95" y1="124" x2="230" y2="124" stroke="#234b45" stroke-width="2" stroke-dasharray="4 4"/><text x="95" y="118" font-size="11" fill="#234b45">纸带</text><text x="320" y="270" font-size="14" fill="#234b45" text-anchor="middle">小车在钩码拉动下拖动纸带，计时器在纸上打点记录位置</text></svg>', caption: '图1　实验装置：小车、纸带、打点计时器、带滑轮长木板与钩码共同构成探究系统。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图2　纸带计数点与点间距</text><line x1="60" y1="150" x2="620" y2="150" stroke="#2e9e8f" stroke-width="2"/><circle cx="90" cy="150" r="5" fill="#4fb3a5"/><circle cx="180" cy="150" r="5" fill="#4fb3a5"/><circle cx="270" cy="150" r="5" fill="#4fb3a5"/><circle cx="360" cy="150" r="5" fill="#4fb3a5"/><circle cx="450" cy="150" r="5" fill="#4fb3a5"/><circle cx="540" cy="150" r="5" fill="#4fb3a5"/><text x="90" y="180" font-size="13" fill="#234b45" text-anchor="middle">0</text><text x="180" y="180" font-size="13" fill="#234b45" text-anchor="middle">1</text><text x="270" y="180" font-size="13" fill="#234b45" text-anchor="middle">2</text><text x="360" y="180" font-size="13" fill="#234b45" text-anchor="middle">3</text><text x="450" y="180" font-size="13" fill="#234b45" text-anchor="middle">4</text><text x="540" y="180" font-size="13" fill="#234b45" text-anchor="middle">5</text><line x1="90" y1="200" x2="180" y2="200" stroke="#2e9e8f" stroke-width="2"/><text x="135" y="220" font-size="12" fill="#234b45" text-anchor="middle">x1</text><line x1="180" y1="200" x2="270" y2="200" stroke="#2e9e8f" stroke-width="2"/><text x="225" y="220" font-size="12" fill="#234b45" text-anchor="middle">x2</text><line x1="270" y1="200" x2="360" y2="200" stroke="#2e9e8f" stroke-width="2"/><text x="315" y="220" font-size="12" fill="#234b45" text-anchor="middle">x3</text><text x="320" y="265" font-size="14" fill="#234b45" text-anchor="middle">相邻计数点时间间隔 T = 0.1 秒，测点间距求各点瞬时速度</text></svg>', caption: '图2　纸带上等间隔取计数点，测相邻段距离 x₁、x₂、x₃ 用以计算瞬时速度。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图3　v-t 图像与加速度</text><line x1="90" y1="280" x2="90" y2="70" stroke="#234b45" stroke-width="2"/><line x1="90" y1="280" x2="600" y2="280" stroke="#234b45" stroke-width="2"/><text x="70" y="75" font-size="14" fill="#234b45">v</text><text x="600" y="300" font-size="14" fill="#234b45">t</text><circle cx="160" cy="240" r="5" fill="#4fb3a5"/><circle cx="250" cy="200" r="5" fill="#4fb3a5"/><circle cx="340" cy="160" r="5" fill="#4fb3a5"/><circle cx="430" cy="120" r="5" fill="#4fb3a5"/><circle cx="520" cy="80" r="5" fill="#4fb3a5"/><line x1="160" y1="240" x2="520" y2="80" stroke="#2e9e8f" stroke-width="2"/><text x="320" y="300" font-size="13" fill="#234b45" text-anchor="middle">各点近似落在一条斜直线上 → 匀变速直线运动</text><text x="430" y="100" font-size="12" fill="#1f7a6e">斜率 = a</text></svg>', caption: '图3　把（t, v）描点连成直线，直线斜率即小车加速度 a。' }
    ],
    exercises: [
      { type: 'choice', question: '使用打点计时器探究小车运动时，正确的操作顺序是？', options: ['先释放小车，后接通电源', '先接通电源，后释放小车', '同时接通电源和释放小车', '先取纸带，后接通电源'], answer: '先接通电源，后释放小车', explanation: '正确顺序是先接通打点计时器电源，等它稳定打点后再释放小车。如果先放车后通电，纸带开头一段没有点迹，会损失数据。因此“先通电、后释放”是实验必须养成的操作习惯。' },
      { type: 'choice', question: '打点计时器每 0.02 秒打一个点，若每 5 个点取一个计数点，则相邻计数点的时间间隔 T 为？', options: ['0.02 秒', '0.04 秒', '0.1 秒', '0.5 秒'], answer: '0.1 秒', explanation: '每 5 个点取一个计数点，意味着两个计数点之间包含 5 个时间间隔。每个打点周期是 0.02 秒，所以 T = 5 × 0.02 = 0.1 秒。计时器打点周期是 0.02 秒，不要与计数点间隔混淆。' },
      { type: 'choice', question: '实验中把（t, v）描点后，发现各点近似落在一条倾斜直线上，说明小车做？', options: ['匀速直线运动', '匀变速直线运动', '静止不动', '圆周运动'], answer: '匀变速直线运动', explanation: 'v-t 图像是一条倾斜直线，表示速度随时间均匀变化，这正是匀变速直线运动的特征。直线斜率等于加速度 a，纵截距等于初速度 v₀。若图像是水平直线才是匀速，曲线则不是匀变速。' },
      { type: 'fill', question: '在 v-t 图像中，倾斜直线的斜率表示物理量是 ____（填写中文，即加速度）。', answer: '加速度|a|加速度a', explanation: '匀变速直线运动的 v-t 图像是一条倾斜直线，其斜率表示加速度 a，即 a = Δv / Δt。斜率越大加速度越大，斜率为正则加速，为负则减速。这是从图像读取加速度的核心方法。' },
      { type: 'fill', question: '求第 n 个计数点的瞬时速度时，可用它前后相邻两段位移 x(n) 与 x(n+1) 之和，再除以总时间 ____（用 T 表示，即 2T）。', answer: '2T|2T（两倍时间间隔）', explanation: '根据“中间时刻的瞬时速度等于该段平均速度”，第 n 点瞬时速度 v(n) ≈ (x(n) + x(n+1)) / (2T)，其中 2T 是这两段位移所对应的总时间。注意分母是 2T 而不是 T，常见错误是漏乘 2。' }
    ]
  });
})();
