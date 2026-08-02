/* 地理 · 选择性必修1 · 第1章 · 课时：地球运动的地理意义 */
(function () {
  var v = gzGetVolume('geography', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u2',
    name: '第2节 地球运动的地理意义',
    chapter: '选择性必修1 · 第1章 地球的运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、昼夜交替与晨昏线' },
      { type: 'paragraph', text: '由于地球是一个既不发光也不透明的球体，在同一时刻，地球表面总有一半朝向太阳（昼半球）、一半背向太阳（夜半球）。地球不停地自转，使昼半球和夜半球不断交替，形成昼夜交替，周期为一个太阳日约 24 小时。昼夜半球的分界线叫做晨昏线（圈）。' },
      { type: 'list', items: ['昼半球：朝向太阳，被照亮', '夜半球：背向太阳，不被照亮', '晨昏线：昼半球与夜半球的分界线', '昼夜交替周期约 24 小时，保证地表温度变化不过于剧烈'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">昼夜交替与晨昏线</text><circle cx="300" cy="185" r="100" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><path d="M 300 85 A 100 100 0 0 1 300 285" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1"/><text x="270" y="190" font-size="13" fill="#1f3a4d" text-anchor="middle">夜半球</text><text x="330" y="190" font-size="13" fill="#1f3a4d" text-anchor="middle">昼半球</text><line x1="200" y1="185" x2="400" y2="185" stroke="#c1583b" stroke-width="2"/><text x="300" y="175" font-size="11" fill="#1f3a4d" text-anchor="middle">晨昏线</text><circle cx="300" cy="185" r="5" fill="#2a6fa8"/><line x1="300" y1="185" x2="430" y2="185" stroke="#e8a33d" stroke-width="2"/><text x="430" y="178" font-size="11" fill="#1f3a4d" text-anchor="middle">太阳光线</text><text x="300" y="320" font-size="12" fill="#1f3a4d" text-anchor="middle">自转使昼半球与夜半球不断交替，周期约 24 小时。</text></svg>', caption: '图1　地球不发光不透明，自转产生昼夜交替，晨昏线为昼夜分界线。' },
      { type: 'keypoint', label: '重点·晨线与昏线的判断', text: '<strong>顺着地球自转方向，由夜进入昼的界线是晨线，由昼进入夜的界线是昏线。</strong>通俗记法：晨线迎来白天，昏线送走白天。在侧视图上，只要看清自转方向（自西向东），就能判断哪段是晨线、哪段是昏线，这是计算地方时的关键。' },
      { type: 'heading', text: '二、地方时与区时' },
      { type: 'paragraph', text: '地球自西向东自转，东边的地点比西边的地点先看到日出，东边的地方时更早。经度每隔 15°，地方时相差 1 小时；经度每隔 1°，地方时相差 4 分钟。为了统一时间，全球按经度划分为 24 个时区，每个时区跨 15°，各时区都以本区中央经线的地方时作为全区共同使用的时间，称为区时。' },
      { type: 'list', items: ['经度差 15° → 时间差 1 小时', '经度差 1° → 时间差 4 分钟', '东边地点时刻早，西边地点时刻晚', '全球共 24 个时区，每个时区跨 15°经度', '相邻时区区时相差 1 小时，东加西减'] },
      { type: 'table', headers: ['时区', '中央经线', '范围（近似）'], rows: [['中时区（零时区）', '0°', '7.5°W～7.5°E'], ['东八区', '120°E', '112.5°E～127.5°E'], ['东一区至东十二区', '15°E 递增', '向东每区加 15°'], ['西一区至西十二区', '15°W 递增', '向西每区加 15°']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">时区划分（自中时区向东、向西各 12 区）</text><rect x="40" y="90" width="600" height="160" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><line x1="340" y1="90" x2="340" y2="250" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="115" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">0°（中时区）</text><text x="160" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">西时区（西一～西十二）</text><text x="520" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">东时区（东一～东十二）</text><text x="160" y="185" font-size="11" fill="#1f3a4d" text-anchor="middle">越往西时刻越晚</text><text x="520" y="185" font-size="11" fill="#1f3a4d" text-anchor="middle">越往东时刻越早</text><text x="340" y="215" font-size="11" fill="#1f3a4d" text-anchor="middle">相邻时区相差 1 小时</text><text x="340" y="295" font-size="12" fill="#1f3a4d" text-anchor="middle">北京位于东八区，使用 120°E 的地方时作为标准时间。</text></svg>', caption: '图2　全球分为 24 个时区，自中时区向东、西各 12 个时区，相邻相差 1 小时。' },
      { type: 'example', label: '例题·区时计算', text: '题目：当北京（东八区）为 6 月 1 日 12 时时，伦敦（中时区）是何时？<br>解析：北京在东八区，伦敦在中时区（零时区），两地相差 8 个时区，即相差 8 小时。伦敦在北京西边，时刻更晚，应当用减法：12 时减去 8 小时，得到 6 月 1 日 4 时。所以伦敦时间为 6 月 1 日 4 时。' },
      { type: 'heading', text: '三、地表水平运动物体的偏移' },
      { type: 'paragraph', text: '由于地球自转，物体在地表做水平运动时，其运动方向会发生偏转，这种现象称为地转偏向力（科里奥利力）的作用。偏转规律是：在北半球向右偏，在南半球向左偏，在赤道上不偏转。地转偏向力对气流、洋流、河流均有明显影响。' },
      { type: 'warn', label: '易错·左右怎么定', text: '偏左偏右是相对于「运动前进方向」而言的。人面向物体运动的方向站立，北半球向右偏、南半球向左偏。不要把「左右」理解成地图的左右，地图上看北半球物体向右偏往往表现为向运动方向的右侧弯曲。顺着物体去路判断最稳妥。' },
      { type: 'tip', label: '提示·记忆技巧', text: '记一句口诀：「北右南左赤道不偏」。北半球河流右岸冲刷更厉害、南半球左岸冲刷更厉害，由此也可判断所在半球。气旋、反气旋的偏转方向同样来自这一规律。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">地转偏向力：北半球右偏、南半球左偏</text><rect x="60" y="80" width="270" height="220" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="195" y="110" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">北半球</text><line x1="120" y1="240" x2="120" y2="120" stroke="#2a6fa8" stroke-width="2"/><line x1="120" y1="240" x2="240" y2="240" stroke="#c1583b" stroke-width="3"/><text x="180" y="230" font-size="12" fill="#1f3a4d">运动方向</text><text x="250" y="180" font-size="12" fill="#1f3a4d">向右偏</text><rect x="350" y="80" width="270" height="220" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="485" y="110" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">南半球</text><line x1="410" y1="240" x2="410" y2="120" stroke="#2a6fa8" stroke-width="2"/><line x1="410" y1="240" x2="530" y2="240" stroke="#c1583b" stroke-width="3"/><text x="470" y="230" font-size="12" fill="#1f3a4d">运动方向</text><text x="360" y="180" font-size="12" fill="#1f3a4d">向左偏</text></svg>', caption: '图3　北半球水平运动物体向右偏，南半球向左偏，赤道上不偏转。' },
      { type: 'heading', text: '四、昼夜长短与正午太阳高度的变化' },
      { type: 'paragraph', text: '由于黄赤交角的存在，地球公转过程中太阳直射点在南北回归线之间移动，使各地昼夜长短和正午太阳高度随季节变化。夏至日北半球昼最长、夜最短，北极圈内出现极昼；冬至日相反。正午太阳高度由直射点向南北两侧递减，并随直射点移动而变化。' },
      { type: 'list', items: ['夏至（6 月 22 前后）：北半球昼最长夜最短，北极圈极昼', '冬至（12 月 22 前后）：北半球昼最短夜最长，北极圈极夜', '春分、秋分：全球昼夜平分', '正午太阳高度：由直射点向两侧递减，直射当地时达最大值 90°'] },
      { type: 'keypoint', label: '重点·本课时核心结论', text: '<strong>地球运动的地理意义可归纳为三条：</strong>① 自转产生昼夜交替和地转偏向力；② 自转＋经度差异产生地方时、区时；③ 自转＋公转＋黄赤交角产生昼夜长短和正午太阳高度的季节变化、四季与五带。做题时先判断考查的是自转意义还是公转意义，再套用相应规律。' }
    ],
    exercises: [
      { type: 'choice', question: '地球上水平运动的物体，其偏转规律是？', options: ['北半球向左偏', '南半球向右偏', '北半球向右偏、南半球向左偏', '赤道上偏转最明显'], answer: '北半球向右偏、南半球向左偏', explanation: '受地转偏向力影响，地表水平运动物体的偏转规律是：北半球向右偏，南半球向左偏，赤道上不偏转。这里的左右是相对于物体运动前进方向而言的。该规律直接影响气流、洋流和河流的流向与冲刷岸分布。' },
      { type: 'choice', question: '经度相差 15°，地方时相差？', options: ['1 分钟', '4 分钟', '1 小时', '2 小时'], answer: '1 小时', explanation: '地球自转一周 360° 用时约 24 小时，因此经度每相差 15°，地方时就相差 1 小时；经度每相差 1°，地方时相差 4 分钟。东边地点时刻早、西边晚。计算两地时间时，依据「东加西减」原则处理时差即可。' },
      { type: 'choice', question: '当北京（东八区）为 10 时，东京（东九区）约为？', options: ['9 时', '10 时', '11 时', '12 时'], answer: '11 时', explanation: '东京位于东九区，北京位于东八区，东京在北京东侧，两地相差 1 个时区即 1 小时。依据东加西减，东京时间应为北京 10 时加 1 小时，即 11 时。这类跨时区计算的关键是有序判断东西方向与相差时区数。' },
      { type: 'fill', question: '昼半球与夜半球的分界线叫做___，顺着地球自转方向由夜入昼的是___。', answer: '晨昏线；晨线', explanation: '昼夜半球的分界线称为晨昏线（圈）。顺着地球自转方向，由夜半球进入昼半球的界线是晨线，由昼半球进入夜半球的界线是昏线。判断晨昏线是计算地方时和确定日出日落时刻的重要基础。' },
      { type: 'fill', question: '夏至日（约 6 月 22 日）时，北半球各纬度昼___（长/短）于夜，北极圈内出现___现象。', answer: '长；极昼', explanation: '夏至日太阳直射北回归线，北半球各地达到一年中昼最长、夜最短的状态，纬度越高白昼越长，北极圈及其以北地区出现极昼现象。与之相对，冬至日直射南回归线，北半球昼最短夜最长，北极圈内出现极夜。' }
    ]
  });
})();
