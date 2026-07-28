/* ============================================================
 * 高一物理 · 必修 第一册 · 第二章 匀变速直线运动
 * 第8课时：匀变速直线运动的速度与时间关系
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u8',
    name: '匀变速直线运动的速度与时间关系',
    chapter: '必修第一册 · 第二章 匀变速直线运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是匀变速直线运动' },
      { type: 'paragraph', text: '如果一个物体沿着直线运动，而且它的加速度大小和方向都保持不变，这种运动就叫做匀变速直线运动。注意两个“不变”：一是运动轨迹是直线，二是加速度 a 不随时间改变。只要加速度恒定，不管速度是大是小、是增是减，都属于这一类。' },
      { type: 'paragraph', text: '匀变速直线运动包括两种情况：加速度方向与速度方向相同，速度越变越大，叫匀加速直线运动；加速度方向与速度方向相反，速度越变越小，叫匀减速直线运动。比如汽车平稳踩油门提速是匀加速，平稳刹车是匀减速。' },
      { type: 'keypoint', label: '重点·匀变速的定义', text: '<strong>匀变速直线运动 = 沿直线运动 + 加速度 a 恒定不变</strong>。<br>加速度恒定，就是 a 的大小和方向都不变。它既包含<strong>匀加速</strong>（a 与 v 同向，速度增大），也包含<strong>匀减速</strong>（a 与 v 反向，速度减小）。' },
      { type: 'list', items: [
        '匀加速：加速度与速度同向，速度随时间增大',
        '匀减速：加速度与速度反向，速度随时间减小',
        '共同前提：轨迹是直线，且 a 的大小、方向都不变'
      ] },
      { type: 'table', headers: ['运动类型', '加速度 a', '速度变化'], rows: [
        ['匀速直线', 'a = 0', '速度不变'],
        ['匀加速直线', 'a 与 v 同向，a > 0', '速度越来越大'],
        ['匀减速直线', 'a 与 v 反向，a < 0', '速度越来越小']
      ] },
      { type: 'heading', text: '二、速度公式 v = v₀ + a t' },
      { type: 'paragraph', text: '加速度的定义是 a = Δv / Δt，也就是 a = (v - v₀) / t，其中 v₀ 是初速度，v 是 t 秒后的末速度。把这个式子两边同乘 t，再移项，就得到速度公式：v = v₀ + a t。这个公式告诉我们在任意时刻 t 小车的速度是多少。' },
      { type: 'paragraph', text: '公式里的 v₀ 是开始计时时的初速度，a 是加速度，t 是从开始计时起经过的时间。这三个量知道任意两个，加上时间 t，就能算出末速度 v。它适用于一切匀变速直线运动，不管加速还是减速。' },
      { type: 'keypoint', label: '重点·速度公式', text: '速度公式：<strong>v = v₀ + a t</strong><br>由加速度定义 a = (v - v₀) / t 变形得到。<br><strong>v₀</strong>：初速度；<strong>a</strong>：加速度（可正可负）；<strong>t</strong>：运动时间；<strong>v</strong>：t 时刻的末速度。' },
      { type: 'example', label: '例题', text: '一小车以初速度 v₀ = 2 米/秒做匀加速运动，加速度 a = 0.5 米/秒²，求 4 秒后的速度。<br><br><strong>解析</strong>：代入 v = v₀ + a t，得 v = 2 + 0.5 × 4 = 2 + 2 = 4 米/秒。所以 4 秒后小车速度为 4 米/秒。注意 a 取正表示在加速，t 用秒为单位，结果与 v₀ 单位一致。' },
      { type: 'warn', label: '易错', text: '匀减速运动时<strong>加速度 a 要取负值</strong>。比如汽车以 v₀ = 10 米/秒刹车，加速度 a = -2 米/秒²，则 3 秒后 v = 10 + (-2) × 3 = 4 米/秒。若忘记给 a 加负号，会算出速度增大，与“减速”矛盾。' },
      { type: 'heading', text: '三、从 v-t 图像看速度公式' },
      { type: 'paragraph', text: '把速度公式画成图像：横轴是时间 t，纵轴是速度 v。公式 v = v₀ + a t 是一个一次函数，图像是一条斜直线。直线与纵轴的交点是 t = 0 时的速度，也就是初速度 v₀；而直线的倾斜程度（斜率）恰好等于加速度 a。' },
      { type: 'paragraph', text: '所以看 v-t 图像时，一眼能读出两个量：直线在纵轴的截距就是初速度 v₀，直线的斜率就是加速度 a。直线向上斜表示 a 为正（加速），向下斜表示 a 为负（减速），水平直线表示 a = 0（匀速）。' },
      { type: 'tip', label: '提示', text: '判断运动种类最快的方法就是看 v-t 图：<strong>水平直线 = 匀速</strong>（a=0）；<strong>向上斜直线 = 匀加速</strong>（a>0）；<strong>向下斜直线 = 匀减速</strong>（a<0）。斜率大小直接对应加速度的大小，不用死记公式也能判断。' },
      { type: 'keypoint', label: '重点·图像两要素', text: 'v-t 图像是一条斜直线：<br><strong>纵截距 = 初速度 v₀</strong><br><strong>斜率 = 加速度 a</strong><br>即整条直线刻画了 v = v₀ + a t 的关系。' },
      { type: 'heading', text: '四、本课小结' },
      { type: 'list', items: [
        '匀变速直线运动：沿直线且加速度 a 恒定',
        '匀加速 a 与 v 同向，匀减速 a 与 v 反向',
        '速度公式 v = v₀ + a t，由 a = Δv / Δt 变形',
        '匀减速时 a 取负值代入公式',
        'v-t 图是斜直线，纵截距为 v₀，斜率为 a'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图1　三类运动的 v-t 图像对比</text><line x1="90" y1="290" x2="90" y2="60" stroke="#234b45" stroke-width="2"/><line x1="90" y1="290" x2="610" y2="290" stroke="#234b45" stroke-width="2"/><text x="70" y="65" font-size="14" fill="#234b45">v</text><text x="610" y="312" font-size="14" fill="#234b45">t</text><line x1="90" y1="200" x2="580" y2="200" stroke="#4fb3a5" stroke-width="3"/><text x="430" y="190" font-size="13" fill="#234b45">匀速 a = 0（水平）</text><line x1="90" y1="260" x2="580" y2="110" stroke="#2e9e8f" stroke-width="3"/><text x="430" y="100" font-size="13" fill="#234b45">匀加速 a > 0（上斜）</text><line x1="90" y1="160" x2="580" y2="280" stroke="#234b45" stroke-width="3"/><text x="430" y="300" font-size="13" fill="#234b45">匀减速 a < 0（下斜）</text></svg>', caption: '图1　匀速、匀加速、匀减速的 v-t 图像：水平、上斜、下斜，一眼区分运动类型。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图2　速度公式的推导</text><rect x="80" y="90" width="520" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="118" font-size="15" fill="#234b45" text-anchor="middle">加速度定义 a = (v - v₀) / t</text><text x="340" y="178" font-size="14" fill="#234b45" text-anchor="middle">两边同乘 t：a t = v - v₀</text><text x="340" y="212" font-size="14" fill="#234b45" text-anchor="middle">移项得：v = v₀ + a t</text><text x="340" y="262" font-size="13" fill="#1f7a6e" text-anchor="middle">由定义变形即可得到速度公式</text></svg>', caption: '图2　从加速度定义 a = Δv / Δt 出发，变形即得速度公式 v = v₀ + a t。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图3　v-t 图读出 v₀ 与 a</text><line x1="90" y1="280" x2="90" y2="70" stroke="#234b45" stroke-width="2"/><line x1="90" y1="280" x2="600" y2="280" stroke="#234b45" stroke-width="2"/><text x="70" y="75" font-size="14" fill="#234b45">v</text><text x="600" y="300" font-size="14" fill="#234b45">t</text><line x1="90" y1="230" x2="540" y2="100" stroke="#2e9e8f" stroke-width="3"/><circle cx="90" cy="230" r="5" fill="#4fb3a5"/><text x="100" y="225" font-size="12" fill="#1f7a6e">纵截距 = v₀</text><line x1="200" y1="200" x2="340" y2="160" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="4 4"/><text x="360" y="150" font-size="12" fill="#234b45">斜率 = a</text></svg>', caption: '图3　v-t 斜直线的纵截距是初速度 v₀，直线斜率就是加速度 a。' }
    ],
    exercises: [
      { type: 'choice', question: '下列运动中，属于匀变速直线运动的是？', options: ['匀速直线运动', '沿直线且加速度恒定的运动', '沿曲线且速度增大的运动', '加速度逐渐减小的直线运动'], answer: '沿直线且加速度恒定的运动', explanation: '匀变速直线运动的两个条件是：轨迹为直线，且加速度大小和方向都恒定不变。匀速直线运动加速度为零虽恒定，但属特例；曲线运动和加速度变化的运动都不满足“直线+加速度恒定”。因此只有沿直线且加速度恒定的运动才符合定义。' },
      { type: 'choice', question: '一物体做匀减速直线运动，初速度 v₀ = 8 米/秒，加速度 a = -2 米/秒²，则 3 秒后的速度为？', options: ['2 米/秒', '14 米/秒', '6 米/秒', '8 米/秒'], answer: '2 米/秒', explanation: '代入速度公式 v = v₀ + a t = 8 + (-2) × 3 = 8 - 6 = 2 米/秒。匀减速时加速度取负值，若误取正会得 14 米/秒而违背“减速”题意。所以 3 秒后速度为 2 米/秒。' },
      { type: 'choice', question: '在匀变速直线运动的 v-t 图像中，直线的物理意义是？', options: ['纵截距是加速度，斜率是初速度', '纵截距是初速度 v₀，斜率是加速度 a', '纵截距是位移，斜率是时间', '直线与横轴夹角是速度'], answer: '纵截距是初速度 v₀，斜率是加速度 a', explanation: 'v = v₀ + a t 是一次函数，v-t 图像为斜直线。t = 0 时 v = v₀，所以纵截距是初速度；而一次函数斜率对应 a，因此直线斜率等于加速度。记住“截距是初速度，斜率是加速度”即可。' },
      { type: 'fill', question: '匀变速直线运动的速度公式为 ____（用 v₀、a、t 表示，即 v = v₀ + a t）。', answer: 'v = v₀ + a t|v=v0+at', explanation: '由加速度定义 a = (v - v₀) / t 变形可得速度公式 v = v₀ + a t。其中 v₀ 是初速度，a 是加速度，t 是时间，v 是末速度。该式适用于一切匀变速直线运动，是本章最核心的公式之一。' },
      { type: 'fill', question: '物体做匀减速直线运动时，加速度 a 应取 ____（填写“正值”或“负值”）。', answer: '负值|负数|负', explanation: '匀减速运动中加速度方向与速度方向相反，若规定速度方向为正，则加速度方向与正方向相反，应取负值。例如刹车时 a 为负，代入公式 v = v₀ + a t 后速度逐渐减小，符合减速实际。忘记取负会算出速度增大，与题意矛盾。' }
    ]
  });
})();
