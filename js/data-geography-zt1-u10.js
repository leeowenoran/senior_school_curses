/* 地理 · 高三总复习 · 专题一 自然地理 · 第3章 地球上的大气 · 第3节 气压带和风带 */
(function () {
  var v = gzGetVolume('geography', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u10',
    name: '第3节 气压带和风带',
    chapter: '高三地理复习 · 专题一 自然地理 · 第3章 地球上的大气',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、三圈环流与气压带' },
      { type: 'paragraph', text: '假设地表均匀，赤道受热空气上升形成赤道低气压带，流向两极后在副热带下沉形成副热带高气压带，在副极地上升形成副极地低气压带，两极下沉形成极地高气压带。全球共 7 个气压带：赤道低、副热带高（南北各一）、副极地低（南北各一）、极地高（南北各一），高低气压带相间分布。' },
      { type: 'list', items: ['赤道低气压带：受热上升，多雨', '副热带高气压带：下沉气流，少雨', '副极地低气压带：冷暖气流相遇上升，多雨', '极地高气压带：冷却下沉，少雨'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">全球气压带（北半球一侧示意）</text><rect x="40" y="70" width="600" height="36" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="94" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">极地高压带</text><rect x="40" y="130" width="600" height="36" rx="8" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="154" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">副极地低压带</text><rect x="40" y="190" width="600" height="36" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="214" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">副热带高压带</text><rect x="40" y="250" width="600" height="36" rx="8" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="274" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">赤道低压带</text><text x="340" y="340" font-size="12" fill="#1f3a4d" text-anchor="middle">7 个气压带南北对称、高低相间分布；南半球与此镜像对称。</text></svg>', caption: '图1　全球 7 个气压带南北对称、高低压相间排列，由三圈环流形成。' },
      { type: 'keypoint', label: '重点·风带分布', text: '<strong>全球 6 个风带：信风带、西风带、极地东风带，南北半球各一。</strong>低纬信风（北东北信风、南东南信风）由副高吹向赤道低；中纬西风（北西南风、南西北风）由副高吹向副极地低；高纬极地东风由极地高压吹向副极地低。记忆「信风→赤道、西风→副极地、东风→副极地」。' },
      { type: 'heading', text: '二、风带的分布与性质' },
      { type: 'paragraph', text: '在气压带之间，空气由高压流向低压并受地转偏向力偏转形成风带。北半球低纬为东北信风，中纬为西南西风，高纬为东北极地东风；南半球对应为东南信风、西北西风、东南极地东风。风带风向随南北半球相反，但都由高压带吹向相邻低压带。' },
      { type: 'list', items: ['低纬信风带：北半球东北信风、南半球东南信风', '中纬西风带：北半球西南风、南半球西北风', '高纬极地东风带：北半球东北风、南半球东南风', '风带与气压带相间，随直射点季节移动而南北移动'] },
      { type: 'table', headers: ['风带', '北半球风向', '南半球风向', '气流来源'], rows: [['低纬信风带', '东北风', '东南风', '副高→赤道低'], ['中纬西风带', '西南风', '西北风', '副高→副极地低'], ['高纬极地东风带', '东北风', '东南风', '极地高→副极地低']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">全球风带（俯视，风向箭头）</text><circle cx="340" cy="175" r="130" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><line x1="210" y1="175" x2="470" y2="175" stroke="#1f3a4d" stroke-width="1.5"/><line x1="340" y1="45" x2="340" y2="305" stroke="#1f3a4d" stroke-width="1.5"/><path d="M300 110 Q340 90 380 110" fill="none" stroke="#c1583b" stroke-width="2"/><text x="340" y="100" font-size="12" fill="#c1583b" font-weight="bold">东北信风</text><path d="M300 240 Q340 260 380 240" fill="none" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="270" font-size="12" fill="#2a6fa8" font-weight="bold">西南西风</text><path d="M250 130 Q230 175 250 220" fill="none" stroke="#3d6fb5" stroke-width="2"/><text x="150" y="180" font-size="12" fill="#3d6fb5" font-weight="bold">极地东风</text><text x="340" y="315" font-size="12" fill="#1f3a4d" text-anchor="middle">以北半球为例：信风、西风、极地东风自低纬到高纬依次排列。</text></svg>', caption: '图2　北半球风带自低纬向高纬为东北信风、西南西风、东北极地东风。' },
      { type: 'example', label: '例题·气压带风带移动', text: '题目：北半球夏季，全球气压带风带整体如何移动？<br>解析：气压带风带随太阳直射点的季节移动而移动。北半球夏季，直射点北移，气压带风带也随之向北移动（南半球夏季则南移）。因此北半球夏季，副热带高压、西风带等整体北移，使得北纬 30°–40° 大陆西岸夏季受副高控制、冬季受西风控制，形成地中海气候。移动规律是「直射点往哪移，带就往哪移」。' },
      { type: 'heading', text: '三、气压带风带对气候的影响' },
      { type: 'paragraph', text: '气压带风带控制下的地区有典型气候特征：赤道低压带控制终年高温多雨（热带雨林气候）；副热带高压控制终年炎热干燥（热带沙漠气候）；西风带控制终年温和湿润（温带海洋性气候）；副极地低压多雨、极地高压少雨。单一气压带或风带长期控制往往形成单一特征气候。' },
      { type: 'warn', label: '易错·气压带与降水', text: '① 低压带（赤道低、副极地低）气流上升，水汽易凝结，多雨；② 高压带（副高、极地高）气流下沉，水汽难凝结，少雨；③ 西风带从海洋带来湿润气流，多雨；信风带若从陆地吹来则干燥。常考「某气压带控制下的气候特征」，按上升多雨、下沉少雨判断即可。' },
      { type: 'tip', label: '提示·气候成因归类', text: '记气候时按「受什么带控制」归类：受单一赤道低压→热带雨林气候；受单一副高→热带沙漠气候；受单一西风→温带海洋性气候；受副高和西风交替→地中海气候；受信风和赤道低压交替→热带草原气候。把气压带风带当「开关」，气候特征就顺理成章。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">气压带风带与气候对应</text><rect x="60" y="80" width="180" height="170" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="150" y="110" font-size="13" fill="#1f3a4d" font-weight="bold">赤道低压</text><text x="150" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">终年高温多雨</text><text x="150" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">→热带雨林气候</text><rect x="250" y="80" width="180" height="170" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="110" font-size="13" fill="#1f3a4d" font-weight="bold">副热带高压</text><text x="340" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">终年炎热干燥</text><text x="340" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">→热带沙漠气候</text><rect x="440" y="80" width="180" height="170" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="530" y="110" font-size="13" fill="#1f3a4d" font-weight="bold">中纬西风</text><text x="530" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">温和湿润</text><text x="530" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">→温带海洋性气候</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">气压带风带的控制性质，决定该地区基本气候特征。</text></svg>', caption: '图3　不同气压带风带长期控制形成不同气候，上升多雨、下沉少雨。' },
      { type: 'heading', text: '四、海陆分布对气压带的影响' },
      { type: 'paragraph', text: '地球表面并不均匀，海陆热力差异使气压带在大陆上被切断、分裂成高低气压中心。北半球陆地面积大，夏季大陆形成热低压（如亚洲低压），冬季形成冷高压（如亚洲高压），副热带高压被切断成海洋上的高压（夏威夷、亚速尔高压）。南半球海洋广，气压带较完整。这些活动中心随季节交替，是季风形成的重要背景。' },
      { type: 'list', items: ['北半球夏季：大陆热低压切断副高，海洋保留高压', '北半球冬季：大陆冷高压（亚洲高压）切断副极地低压', '南半球：海洋为主，气压带更连续完整', '海陆活动中心是季风和天气变化的重要系统'] },
      { type: 'example', label: '例题·亚洲高压', text: '题目：冬季影响我国的主要气压中心是？<br>解析：冬季亚欧大陆降温快、气温低，空气冷却下沉形成强大的冷高压，即亚洲高压（蒙古—西伯利亚高压）。它切断了副极地低压带，使寒冷干燥的气流吹向南方，是我国冬季风（西北风）的源地，带来寒冷干燥的天气。因此冬季控制我国的主要是亚洲高压。' }
    ],
    exercises: [
      { type: 'choice', question: '全球共有几个气压带？', options: ['3 个', '5 个', '7 个', '9 个'], answer: '7 个', explanation: '在理想均匀地表假设下，全球形成 7 个气压带：赤道低气压带 1 个，副热带高气压带南北各 1 个（共 2），副极地低气压带南北各 1 个（共 2），极地高气压带南北各 1 个（共 2），合计 7 个，南北对称、高低压相间分布。' },
      { type: 'choice', question: '北半球中纬度西风带的风向是？', options: ['东北风', '西南风', '东南风', '西北风'], answer: '西南风', explanation: '中纬西风带位于副热带高压与副极地低压之间，空气由副高吹向副极地低压，受地转偏向力影响北半球向右偏，形成西南风；南半球则向左偏成西北风。西风从海洋带来湿润气流，使大陆西岸温和多雨。' },
      { type: 'choice', question: '副热带高气压带控制下的气候特征是？', options: ['高温多雨', '温和湿润', '炎热干燥', '终年严寒'], answer: '炎热干燥', explanation: '副热带高压带盛行下沉气流，空气下沉增温、水汽难凝结，难以成云致雨，因此受其长期控制的地区终年炎热干燥，形成热带沙漠气候（如撒哈拉）。与之相对，低压带因上升气流而多雨。' },
      { type: 'fill', question: '气压带风带随___的季节移动而南北移动，北半球夏季整体向___移动。', answer: '太阳直射点；北', explanation: '气压带风带的位置不是固定的，而是随太阳直射点的季节移动而移动。直射点北移时（北半球夏半年），气压带风带整体向北移；直射点南移时整体向南移。这一移动是地中海气候、热带草原气候季节交替的重要原因。' },
      { type: 'fill', question: '冬季亚欧大陆上形成强大的冷高压，名称为___高压（蒙古—西伯利亚高压），它是我国___风（风向）的源地。', answer: '亚洲；西北', explanation: '冬季亚欧大陆降温快，空气冷却下沉形成亚洲高压（蒙古—西伯利亚高压），切断了副极地低压带。从该高压吹向东南的气流即我国冬季风，性质寒冷干燥，在东亚偏北风（西北风）。这是海陆热力差异造成的季节性气压中心。' }
    ]
  });
})();
