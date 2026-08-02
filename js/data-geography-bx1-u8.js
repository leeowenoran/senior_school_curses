/* 地理 · 必修 第一册 · 第3章 · 课时：第2节 海水的性质 */
(function () {
  var v = gzGetVolume('geography', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u8',
    name: '第2节 海水的性质',
    chapter: '必修 第一册 · 第3章 地球上的水',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、海水的基本性质有哪些' },
      { type: 'paragraph', text: '海水不是一杯白开水，它有自己的一套脾气，地理上主要看三个性质：温度、盐度和密度。温度说的是海水冷热，盐度说的是海水里溶解的盐有多少，密度说的是单位体积海水的轻重。这三个性质互相牵连，又随纬度、深度不同而变，是认识海洋的起点。' },
      { type: 'list', items: ['温度：海水冷热的程度，受太阳辐射影响最大', '盐度：每千克海水中溶解的盐类物质总量', '密度：单位体积海水的质量，和温度、盐度都有关', '三者的分布都有明显的水平和垂直规律'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">海水的三个性质</text><rect x="50" y="60" width="170" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="135" y="95" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">温度</text><text x="135" y="135" font-size="13" fill="#1f3a4d" text-anchor="middle">冷热程度</text><text x="135" y="170" font-size="13" fill="#1f3a4d" text-anchor="middle">随纬度降低</text><rect x="255" y="60" width="170" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="95" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">盐度</text><text x="340" y="135" font-size="13" fill="#1f3a4d" text-anchor="middle">含盐多少</text><text x="340" y="170" font-size="13" fill="#1f3a4d" text-anchor="middle">副热带最高</text><rect x="460" y="60" width="170" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="545" y="95" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">密度</text><text x="545" y="135" font-size="13" fill="#1f3a4d" text-anchor="middle">单位体积重</text><text x="545" y="170" font-size="13" fill="#1f3a4d" text-anchor="middle">极地最大</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">温度、盐度、密度是描述海水性质的三把尺子。</text></svg>', caption: '图1　海水性质主要看温度、盐度和密度三项。' },
      { type: 'keypoint', label: '重点·三个性质的定义', text: '<strong>温度</strong>是海水的冷热程度，主要取决于接收的太阳辐射多少；<strong>盐度</strong>是每千克海水中溶解的盐类物质（主要是氯化钠和氯化镁）的克数，世界大洋平均盐度约 3.5%；<strong>密度</strong>是单位体积海水的质量，温度越低、盐度越高，密度越大。三者中温度最容易被太阳影响，是主导因素。' },
      { type: 'heading', text: '二、海水的温度' },
      { type: 'paragraph', text: '海水温度主要来自太阳辐射。在水平方向上，表层水温大致从低纬度（赤道附近）向高纬度（两极附近）逐渐降低，因为低纬接收的太阳热量更多。在垂直方向上，表层受太阳加热明显，温度较高；往下到约一千米深度，温度随深度快速下降；一千米以下水温很低，而且几乎不再随深度变化。' },
      { type: 'list', items: ['水平：表层水温由低纬向高纬递减', '垂直：上层（0 至约 1000 米）降温快', '垂直：1000 米以下水温低且变化很小', '同一纬度，暖流经过处水温偏高，寒流偏低'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">表层水温随纬度变化</text><line x1="80" y1="60" x2="80" y2="290" stroke="#1f3a4d" stroke-width="2"/><line x1="80" y1="290" x2="620" y2="290" stroke="#1f3a4d" stroke-width="2"/><text x="60" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle" transform="rotate(-90 60 180)">水温 ℃</text><text x="350" y="312" font-size="12" fill="#1f3a4d" text-anchor="middle">纬度（赤道 → 两极）</text><polyline points="80,90 200,110 320,150 440,200 560,250" fill="none" stroke="#2a6fa8" stroke-width="3"/><text x="130" y="100" font-size="12" fill="#1f3a4d">赤道最暖</text><text x="500" y="270" font-size="12" fill="#1f3a4d">两极最冷</text><text x="340" y="330" font-size="12" fill="#1f3a4d" text-anchor="middle">表层水温从赤道向两极逐渐降低。</text></svg>', caption: '图2　表层水温由低纬度向高纬度递减。' },
      { type: 'table', headers: ['方向', '温度变化规律', '主要原因'], rows: [['水平（沿纬度）', '由低纬向高纬递减', '低纬接收太阳辐射更多'], ['垂直（上层）', '0 至约 1000 米降温快', '表层受太阳加热'], ['垂直（深层）', '1000 米以下低温且稳定', '不受太阳直接影响']] },
      { type: 'example', label: '例题·温度规律', text: '题目：关于海水温度垂直变化的叙述，正确的是？<br>A. 整层都随深度升高而升高<br>B. 1000 米以下水温变化很小<br>C. 表层比深层冷<br>D. 深度越大水温越高<br>解析：海水表层受太阳加热，温度较高；从表层往下到约一千米，温度随深度快速下降；一千米以下海水又冷又稳定，几乎不再随深度变化。所以 A、C、D 都说反了，只有「1000 米以下水温变化很小」正确，答案应选此项。' },
      { type: 'heading', text: '三、海水的盐度' },
      { type: 'paragraph', text: '盐度表示海水中含盐的多少，世界大洋平均盐度约 3.5%。在水平方向上，赤道附近降水多、蒸发相对少，盐度略低；副热带海区（南北纬约 20 度到 30 度）蒸发旺盛又少雨，盐度最高；再向高纬度，降水增多，盐度又下降。所以表层盐度大致从副热带向两侧（赤道和两极）递减。' },
      { type: 'warn', label: '易错·盐度最高不在赤道', text: '① 盐度最高的地方是副热带海区，不是赤道；赤道虽然热、蒸发强，但降水也特别多，海水被冲淡，盐度反而略低；② 副热带蒸发量大于降水量，盐分浓缩，盐度才最大；③ 高纬度降水多、蒸发弱，盐度也偏低。记住「副热带最高、向两侧递减」这个曲线形状最关键。' },
      { type: 'list', items: ['世界大洋平均盐度约 3.5%', '副热带海区蒸发大于降水，盐度最高', '赤道附近降水多，盐度略低于副热带', '高纬度降水多、蒸发弱，盐度较低', '有河流注入的海域盐度往往偏低'] },
      { type: 'heading', text: '四、海水的密度' },
      { type: 'paragraph', text: '密度是单位体积海水的轻重。海水越冷、越咸，密度就越大。在表层，赤道附近水温高，密度较小；副热带盐度高，密度有所增大；极地水温最低，密度最大。在垂直方向上，海水密度总体上随深度增加而增大，因为越深越冷、压力越大。密度直接影响船只的浮沉和航行安全。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">表层海水密度随纬度变化</text><line x1="80" y1="60" x2="80" y2="290" stroke="#1f3a4d" stroke-width="2"/><line x1="80" y1="290" x2="620" y2="290" stroke="#1f3a4d" stroke-width="2"/><text x="60" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle" transform="rotate(-90 60 180)">密度</text><text x="350" y="312" font-size="12" fill="#1f3a4d" text-anchor="middle">纬度（赤道 → 两极）</text><polyline points="80,250 200,210 320,180 440,150 560,100" fill="none" stroke="#2a6fa8" stroke-width="3"/><text x="130" y="270" font-size="12" fill="#1f3a4d">赤道偏小</text><text x="500" y="115" font-size="12" fill="#1f3a4d">极地最大</text><text x="340" y="330" font-size="12" fill="#1f3a4d" text-anchor="middle">表层海水密度由赤道向两极逐渐增大。</text></svg>', caption: '图3　表层海水密度从赤道向两极逐渐增大。' },
      { type: 'tip', label: '提示·三性质联系记', text: '温度、盐度、密度不是各管各的：温度高时密度小，盐度高时密度大。所以赤道热、密度小；极地冷、密度大；副热带盐度最高，密度居中偏高。把「<strong>热则轻、咸则重</strong>」这句话记住，三个性质的分布就能串起来想，考试时不容易记混。' },
      { type: 'table', headers: ['性质', '水平分布规律', '垂直分布规律'], rows: [['温度', '由低纬向高纬递减', '上层降得快，深层稳定'], ['盐度', '副热带最高，向两侧递减', '随深度先降后升'], ['密度', '由赤道向两极增大', '随深度增加而增大']] },
      { type: 'paragraph', text: '海水的三个性质各有规律，又彼此关联。了解它们，能帮助我们解释渔场分布、航运安全、海冰形成等许多现象，也是进一步学习海水运动的基础。' }
    ],
    exercises: [
      { type: 'choice', question: '关于世界大洋表层水温分布，正确的是？', options: ['由低纬向高纬递减', '由低纬向高纬递增', '各纬度基本相同', '赤道比两极低'], answer: '由低纬向高纬递减', explanation: '海水温度主要来自太阳辐射，低纬度（赤道附近）接收太阳热量多，水温高；高纬度（两极附近）接收热量少，水温低。所以表层水温大致从低纬度向高纬度逐渐降低，而不是递增或相同。赤道比两极暖，因此正确选项是「由低纬向高纬递减」。' },
      { type: 'choice', question: '世界大洋表层盐度最高的海区通常出现在？', options: ['赤道附近', '副热带海区', '两极地区', '有河流注入处'], answer: '副热带海区', explanation: '盐度高低取决于蒸发量和降水量的对比。副热带海区受副高控制，晴朗少雨、蒸发旺盛，蒸发量大于降水量，海水盐分被浓缩，盐度最高。赤道附近虽然蒸发强但降水更多，盐度反而略低；两极降水多、蒸发弱，盐度也低；有河流注入会冲淡海水。因此盐度最高处在副热带海区。' },
      { type: 'choice', question: '关于海水密度垂直变化的叙述，正确的是？', options: ['随深度增加而增大', '随深度增加而减小', '各深度都一样', '表层最大'], answer: '随深度增加而增大', explanation: '海水密度受温度和压力影响：越往深处，水温越低、压力越大，密度也就越大。所以总体上密度随深度增加而增大。表层受太阳加热、水温高，密度反而较小；极地表层因为特别冷，密度才明显偏大。因此正确说法是随深度增加而增大。' },
      { type: 'fill', question: '世界大洋平均盐度约为___%，盐度最高的海区在___。', answer: '3.5；副热带海区', explanation: '世界大洋的平均盐度约为 3.5%，也就是每千克海水中大约溶解 35 克盐类物质。盐度的高低由蒸发和降水的对比决定，副热带海区蒸发量大于降水量，海水浓缩，盐度达到最大；向赤道和两极方向盐度都会降低。因此平均盐度约 3.5%，最高出现在副热带海区。' },
      { type: 'fill', question: '海水的三个基本性质分别是温度、___和___。', answer: '盐度；密度', explanation: '认识海水性质主要看三项指标：温度表示海水冷热，受太阳辐射影响最大；盐度表示海水中溶解盐类的多少，世界平均约 3.5%；密度表示单位体积海水的质量，与温度和盐度都有关，热则轻、咸则重。这三项性质分布各有规律又相互影响，是学习海洋知识的基础。' }
    ]
  });
})();
