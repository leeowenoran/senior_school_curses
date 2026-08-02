/* 地理 · 高三总复习 · 专题一 自然地理 · 第2章 宇宙中的地球 · 第2节 地球自转的特征与昼夜交替 */
(function () {
  var v = gzGetVolume('geography', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u4',
    name: '第2节 地球自转的特征与昼夜交替',
    chapter: '高三地理复习 · 专题一 自然地理 · 第2章 宇宙中的地球',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、地球自转的基本特征' },
      { type: 'paragraph', text: '地球绕地轴自西向东旋转，叫自转。自转的真正周期是恒星日，长约 23 时 56 分 4 秒；日常用的太阳日约 24 小时。自转角速度除南北两极点为零外，各地相等，约每小时 15°；线速度由赤道向两极递减，赤道最大、两极最小，同纬度海拔越高线速度越大。' },
      { type: 'list', items: ['方向：自西向东（北极上空看为逆时针，南极上空看为顺时针）', '周期：恒星日 23h56m4s，太阳日 24h', '角速度：除两极点外各地约 15°/h，全球相等', '线速度：赤道最大，向两极递减；同一纬度海拔高则线速度大'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">地球自转方向（俯视两极）</text><circle cx="200" cy="200" r="120" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="200" y="60" font-size="14" fill="#1f3a4d" font-weight="bold" text-anchor="middle">北极上空（逆时针）</text><path d="M200 110 A90 90 0 1 1 110 200" fill="none" stroke="#c1583b" stroke-width="3" marker-end="url(#none1)"/><circle cx="200" cy="80" r="5" fill="#2a6fa8"/><text x="200" y="78" font-size="11" fill="#2a6fa8" text-anchor="middle">N</text><circle cx="480" cy="200" r="120" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="480" y="60" font-size="14" fill="#1f3a4d" font-weight="bold" text-anchor="middle">南极上空（顺时针）</text><path d="M480 110 A90 90 0 1 0 390 200" fill="none" stroke="#c1583b" stroke-width="3"/><circle cx="480" cy="80" r="5" fill="#2a6fa8"/><text x="480" y="78" font-size="11" fill="#2a6fa8" text-anchor="middle">S</text><text x="340" y="345" font-size="12" fill="#1f3a4d" text-anchor="middle">记忆：北逆南顺。顺着自转方向，东边总比西边先见到日出。</text></svg>', caption: '图1　从北极上空看地球逆时针自转，南极上空看顺时针，统称「北逆南顺」。' },
      { type: 'keypoint', label: '重点·线速度分布规律', text: '<strong>线速度由赤道向两极递减：赤道最大，极点为零。</strong>同纬度上海拔越高线速度越大，所以发射卫星常选低纬度、地势高的地点（如海南文昌）以节省燃料。此外，航天发射多向偏东方向，可借助地球自转线速度获得初速度。' },
      { type: 'heading', text: '二、昼夜交替与晨昏线' },
      { type: 'paragraph', text: '由于地球是不透明、不发光的球体，且不停地自转，面向太阳的半球是白昼（昼半球），背向太阳的半球是黑夜（夜半球），两者的分界线叫晨昏线（圈）。顺着自转方向，由夜入昼的交界线是晨线，由昼入夜的是昏线。昼夜交替周期约 24 小时，使地表温度日变化不至于过于剧烈。' },
      { type: 'list', items: ['昼半球：朝向太阳，为白昼', '夜半球：背向太阳，为黑夜', '晨线：沿自转方向由夜到昼的界线', '昏线：沿自转方向由昼到夜的界线'] },
      { type: 'table', headers: ['概念', '含义', '判断方法'], rows: [['昼半球', '向阳的半边地球', '太阳高度 > 0', '可见太阳'], ['夜半球', '背阳的半边地球', '太阳高度 < 0', '不见太阳'], ['晨线', '夜转昼的界线', '沿自转方向进入昼', '日出'], ['昏线', '昼转夜的界线', '沿自转方向进入夜', '日落']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">昼夜半球与晨昏线</text><circle cx="340" cy="175" r="120" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><path d="M340 55 A120 120 0 0 1 340 295" fill="#cfe4f5" opacity="0.6"/><text x="270" y="180" font-size="14" fill="#1f3a4d" font-weight="bold">昼半球</text><text x="430" y="180" font-size="14" fill="#1f3a4d" font-weight="bold">夜半球</text><line x1="220" y1="120" x2="460" y2="230" stroke="#c1583b" stroke-width="2.5"/><text x="220" y="110" font-size="12" fill="#c1583b" font-weight="bold">晨线</text><text x="465" y="240" font-size="12" fill="#c1583b" font-weight="bold">昏线</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">太阳光线平行照射，晨昏线是大圆，把地球均分为昼夜两半球。</text></svg>', caption: '图2　晨昏线（圈）是昼夜半球的分界线，沿自转方向可区分晨线与昏线。' },
      { type: 'example', label: '例题·判断晨线昏线', text: '题目：沿地球自转方向，某条界线东侧由黑夜转为白昼，这条界线是？<br>解析：晨昏线中，沿自转方向由夜入昼的是晨线，由昼入夜的是昏线。题目说「东侧由黑夜转为白昼」，即顺着自转方向跨过该线进入白天，符合晨线定义。晨线对应日出时刻，昏线对应日落时刻。因此该界线是晨线。' },
      { type: 'heading', text: '三、昼夜交替的地理意义' },
      { type: 'paragraph', text: '昼夜交替使地球表面昼夜温差比月球小得多，有利于生命存在和有机物保存。它还是人类作息和「一天」时间单位的基础。在日照图上，晨昏线与经线的夹角是地方时计算的依据；晨线与赤道交点为当地 6 时，昏线与赤道交点为 18 时，是推断全球时刻的基准点。' },
      { type: 'warn', label: '易错·恒星日与太阳日', text: '① 恒星日是地球自转真正周期（23h56m4s），以遥远恒星为参照；太阳日是昼夜交替周期（24h），以太阳为参照；② 之所以太阳日比恒星日长约 4 分钟，是因为地球同时在公转，要多转约 1° 才再次正对太阳；③ 计算自转角速度用恒星日。混淆二者会导致地方时换算出错。' },
      { type: 'tip', label: '提示·日照图找时间基准', text: '在光照图上快速定位时间：晨昏线与赤道的交点分别是 6 时和 18 时；太阳直射的经线为 12 时，与之相对的经线为 0 时（或 24 时）。抓住这四个点，再结合经度差每 15° 差 1 小时，就能推出任意经线的地方时。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">日照图上的四个时间基准点</text><circle cx="340" cy="180" r="120" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><line x1="220" y1="180" x2="460" y2="180" stroke="#1f3a4d" stroke-width="2"/><line x1="340" y1="60" x2="340" y2="300" stroke="#1f3a4d" stroke-width="2"/><circle cx="340" cy="60" r="7" fill="#c1583b"/><text x="350" y="55" font-size="13" fill="#c1583b" font-weight="bold">12时（直射）</text><circle cx="340" cy="300" r="7" fill="#2a6fa8"/><text x="350" y="315" font-size="13" fill="#2a6fa8" font-weight="bold">0时/24时</text><circle cx="460" cy="180" r="7" fill="#2a6fa8"/><text x="470" y="175" font-size="13" fill="#2a6fa8" font-weight="bold">18时（昏线）</text><circle cx="220" cy="180" r="7" fill="#2a6fa8"/><text x="120" y="175" font-size="13" fill="#2a6fa8" font-weight="bold">6时（晨线）</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">以四个基准点为锚，按经度差 15°=1h 推算全球地方时。</text></svg>', caption: '图3　日照图中晨昏线与赤道交点、太阳直射经线是推算地方时的四个基准点。' },
      { type: 'heading', text: '四、自转与水平运动物体偏转' },
      { type: 'paragraph', text: '由于地球自转，地表做水平运动的物体会发生偏转，这叫地转偏向力（科里奥利力）。规律是：北半球向右偏，南半球向左偏，赤道上不偏。偏转方向可用「左右手定则」记忆。河流、气流、洋流都会受此影响，例如北半球河流右岸冲刷更厉害。' },
      { type: 'list', items: ['北半球：水平运动物体向右偏转', '南半球：水平运动物体向左偏转', '赤道：不发生偏转', '定则：北半球伸右掌、南半球伸左掌，掌心向上四指指运动方向，大拇指即偏转方向'] },
      { type: 'example', label: '例题·河岸冲刷', text: '题目：一条自南向北流的河流位于北半球，哪一岸冲刷更严重？<br>解析：北半球水平运动物体向右偏。河水自南向北流，面向下游（北）时右侧是东岸，因此水流向右偏向东岸，东岸受冲刷更强、坡度更陡，西岸（左岸）堆积。所以北半球自南向北的河流，东岸冲刷更严重。这一规律也用于判断河道主航道偏向。' }
    ],
    exercises: [
      { type: 'choice', question: '关于地球自转线速度的叙述，正确的是？', options: ['两极点最大', '赤道最小', '赤道最大、向两极递减', '全球处处相等'], answer: '赤道最大、向两极递减', explanation: '地球自转线速度随纬度升高而减小，赤道处约 1670 千米/时最大，向两极递减至极点为零；角速度除两极点外全球相等约 15°/h。同一纬度上海拔越高线速度越大，因此低纬高海拔处发射卫星较有利。' },
      { type: 'choice', question: '沿地球自转方向，由夜半球进入昼半球的界线是？', options: ['昏线', '晨线', '经线', '赤道'], answer: '晨线', explanation: '晨昏线把地球分为昼夜两半球。沿自转方向，由黑夜跨入白昼的界线是晨线，对应日出；由白昼跨入黑夜的界线是昏线，对应日落。晨线与赤道交点地方时为 6 时，昏线与赤道交点为 18 时。' },
      { type: 'choice', question: '北半球水平运动的物体会向哪侧偏转？', options: ['向左', '向右', '不偏转', '有时左有时右'], answer: '向右', explanation: '受地转偏向力影响，北半球水平运动物体向右偏转，南半球向左偏转，赤道上不偏转。可用左右手定则帮助记忆：北半球伸右手，四指指运动方向，大拇指朝右即偏转方向。河流、风、洋流都会因此改变方向。' },
      { type: 'fill', question: '地球自转的真正周期（恒星日）约为___时___分___秒。', answer: '23；56；4', explanation: '恒星日以遥远恒星为参照，是地球自转的真正周期，长度为 23 时 56 分 4 秒。日常使用的太阳日（昼夜交替周期）约 24 小时，比恒星日长约 4 分钟，原因是地球在自转同时还在公转，需多转约 1° 才再次正对太阳。' },
      { type: 'fill', question: '在光照图上，晨线与赤道的交点地方时为___时，昏线与赤道的交点地方时为___时。', answer: '6；18', explanation: '晨昏线平分赤道，赤道上终年昼夜平分，各 12 小时。因此晨线与赤道交点处恰为日出，地方时 6 时；昏线与赤道交点处恰为日落，地方时 18 时。这两个点是推算全球地方时的重要基准。' }
    ]
  });
})();
