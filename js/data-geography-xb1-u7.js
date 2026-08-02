/* 地理 · 选择性必修1 · 第3章 · 课时：气压带和风带 */
(function () {
  var v = gzGetVolume('geography', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u7',
    name: '第2节 气压带和风带',
    chapter: '选择性必修1 · 第3章 大气的运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、大气环流与三圈环流' },
      { type: 'paragraph', text: '具有全球性的有规律的大气运动，称为大气环流。三圈环流是假设地表均一情况下，受太阳辐射和地转偏向力共同作用形成的大规模环流。它把全球近地面划分为七个气压带和六个风带，是理解全球气候分布的基础。' },
      { type: 'list', items: ['大气环流：全球性有规律的大气运动', '三圈环流：低纬、中纬、高纬三圈', '形成因素：高低纬受热不均 + 地转偏向力', '结果：七个气压带、六个风带'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">全球气压带与风带（北半球侧视）</text><circle cx="340" cy="185" r="120" fill="none" stroke="#2a6fa8" stroke-width="2"/><line x1="220" y1="185" x2="460" y2="185" stroke="#2a6fa8" stroke-width="1" stroke-dasharray="4 3"/><line x1="340" y1="65" x2="340" y2="305" stroke="#2a6fa8" stroke-width="1" stroke-dasharray="4 3"/><text x="340" y="100" font-size="11" fill="#1f3a4d" text-anchor="middle">赤道低气压带</text><text x="245" y="150" font-size="11" fill="#1f3a4d" text-anchor="middle">信风带</text><text x="435" y="150" font-size="11" fill="#1f3a4d" text-anchor="middle">西风带</text><text x="340" y="200" font-size="11" fill="#1f3a4d" text-anchor="middle">副高</text><text x="340" y="280" font-size="11" fill="#1f3a4d" text-anchor="middle">极地高气压带</text></svg>', caption: '图1　三圈环流形成七个气压带和六个风带，全球呈带状分布。' },
      { type: 'keypoint', label: '重点·七个气压带', text: '<strong>由赤道向两极依次为：</strong>赤道低气压带（1 个）、副热带高气压带（南北各 1，共 2）、副极地低气压带（南北各 1，共 2）、极地高气压带（南北各 1，共 2）。口诀：「低高低低高」——赤道低、副热带高、副极地低、极地高，相间排列。' },
      { type: 'heading', text: '二、风带的分布与风向' },
      { type: 'paragraph', text: '在气压带之间，空气由高压吹向低压，受地转偏向力影响偏转形成风带。全球六个风带为：低纬信风带、中纬西风带、高纬极地东风带，南北半球各一套。北半球信风为东北风、西风为西南风、极地东风为东北风。' },
      { type: 'list', items: ['低纬信风带：北半球东北信风、南半球东南信风', '中纬西风带：北半球西南风、南半球西北风', '高纬极地东风带：北半球东北风、南半球东南风', '风带方向与气压梯度、地转偏向力有关'] },
      { type: 'table', headers: ['风带', '北半球风向', '南半球风向'], rows: [['低纬信风带', '东北风', '东南风'], ['中纬西风带', '西南风', '西北风'], ['高纬极地东风带', '东北风', '东南风']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">气压带风带分布（以北半球为例）</text><rect x="60" y="70" width="560" height="40" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1"/><text x="340" y="95" font-size="12" fill="#1f3a4d" text-anchor="middle">赤道低气压带</text><rect x="60" y="120" width="560" height="40" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1"/><text x="340" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">信风带（东北）</text><rect x="60" y="170" width="560" height="40" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1"/><text x="340" y="195" font-size="12" fill="#1f3a4d" text-anchor="middle">副热带高气压带</text><rect x="60" y="220" width="560" height="40" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1"/><text x="340" y="245" font-size="12" fill="#1f3a4d" text-anchor="middle">西风带（西南）</text></svg>', caption: '图2　北半球自赤道向高纬依次为赤道低压、信风、副高、西风等带状排列。' },
      { type: 'example', label: '例题·判断风向', text: '题目：位于北半球的副热带高气压带与副极地低气压带之间，盛行什么风？<br>A. 东北信风　B. 西南西风　C. 东南信风　D. 极地东风<br>解析：副热带高压（约 30°N）与副极地低压（约 60°N）之间的风带是中纬西风带。北半球该带空气由副高吹向副极地低压，受地转偏向力右偏成西南风。所以盛行西南西风，选 B。' },
      { type: 'heading', text: '三、气压带风带的季节移动' },
      { type: 'paragraph', text: '由于太阳直射点随季节在南北回归线之间移动，整个气压带和风带也随之做南北移动。就北半球而言，夏季北移、冬季南移；南半球相反。这种移动使某些地区在不同季节受不同气压带风带控制，是形成季风和干湿季的重要原因。' },
      { type: 'warn', label: '易错·移动方向', text: '气压带风带随太阳直射点移动：直射点北移（北半球夏半年）时，全球气压带风带整体北移；直射点南移（北半球冬半年）时整体南移。判断「某带夏季到哪、冬季到哪」时，紧扣「跟随太阳走」即可，不要记成固定不动。' },
      { type: 'tip', label: '提示·记忆气压带顺序', text: '从赤道往两极背：「赤低、信风、副高、西风、副极地低、极地东风、极地高」。七个气压带与六个风带相间，低压带（赤道、副极地）对应上升气流多雨，高压带（副热带、极地）对应下沉气流少雨。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">气压带风带的季节移动</text><line x1="60" y1="150" x2="620" y2="150" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">平均位置</text><line x1="60" y1="110" x2="620" y2="110" stroke="#c1583b" stroke-width="2" stroke-dasharray="5 4"/><text x="340" y="100" font-size="12" fill="#1f3a4d" text-anchor="middle">夏季北移</text><line x1="60" y1="190" x2="620" y2="190" stroke="#3d6fb5" stroke-width="2" stroke-dasharray="5 4"/><text x="340" y="210" font-size="12" fill="#1f3a4d" text-anchor="middle">冬季南移</text><text x="340" y="265" font-size="12" fill="#1f3a4d" text-anchor="middle">气压带风带随太阳直射点南北移动。</text></svg>', caption: '图3　气压带风带随太阳直射点移动，北半球夏季北移、冬季南移。' },
      { type: 'heading', text: '四、海陆分布对气压带的影响' },
      { type: 'paragraph', text: '上述七个气压带和六个风带是假设地表均一时的理想模式。实际地球有海陆差异，尤其是北半球陆地面积大，冬季大陆降温快形成冷高压（如亚洲高压），夏季升温快形成热低压（如亚洲低压），切断了带状的气压带，使其呈块状分布。' },
      { type: 'list', items: ['理想状况：气压带呈连续带状', '实际北半球：海陆差异使气压带断裂成块状', '冬季亚洲高压强盛、切断副极地低压', '夏季亚洲低压强盛、切断副热带高压'] },
      { type: 'keypoint', label: '重点·本课时核心结论', text: '<strong>三圈环流给出「理想带状」：</strong>七个气压带、六个风带相间排列；它们随直射点季节移动。但真实地球因海陆分布，北半球气压带被切断成块状，南半球海洋广、带状更明显。理解「理想—实际」差异，是学气候的关键一步。' }
    ],
    exercises: [
      { type: 'choice', question: '南半球低纬信风带的风向是？', options: ['东北风', '东南风', '西南风', '西北风'], answer: '东南风', explanation: '低纬信风带位于赤道低压与副热带高压之间，空气由副高吹向赤道低压。在南半球，受地转偏向力左偏影响，最终形成东南风，即东南信风。北半球同一风带则为东北信风。因此南半球低纬信风是东南风。' },
      { type: 'choice', question: '关于气压带风带季节移动的叙述，正确的是？', options: ['固定不动', '随太阳直射点移动', '只随气温随机变化', '仅南半球移动'], answer: '随太阳直射点移动', explanation: '气压带和风带的位置随太阳直射点的季节移动而南北移动。就北半球而言，夏季直射点北移、气压带风带随之北移，冬季南移；南半球情况相反。因此它们是随太阳直射点有规律移动的，并非固定不动。' },
      { type: 'choice', question: '北半球中纬西风带的风向是？', options: ['东北风', '东南风', '西南风', '西北风'], answer: '西南风', explanation: '中纬西风带位于副热带高压与副极地低压之间，空气由副高吹向副极地低压。在北半球，受地转偏向力右偏，最终偏转成西南风，称盛行西风。南半球同一风带则为西北风。所以北半球中纬西风为西南风。' },
      { type: 'fill', question: '全球共形成___个气压带和___个风带。', answer: '七；六', explanation: '在假设地表均一的三圈环流模式下，全球近地面形成七个气压带（赤道低压 1、副热带高压 2、副极地低压 2、极地高压 2）和六个风带（信风、西风、极地东风各南北一套）。气压带与风带相间排列，这是大气环流的基本格局。' },
      { type: 'fill', question: '就北半球而言，气压带风带夏季向___（北/南）移动，冬季向___移动。', answer: '北；南', explanation: '气压带风带随太阳直射点的季节移动而移动。北半球夏半年太阳直射点北移，气压带风带整体北移；冬半年直射点南移，整体南移。记忆方法是「紧跟太阳走」：太阳往哪去，气压带风带就往哪移。' }
    ]
  });
})();
