/* 地理 · 选择性必修1 · 第3章 · 课时：气压带风带对气候的影响 */
(function () {
  var v = gzGetVolume('geography', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u8',
    name: '第3节 气压带风带对气候的影响',
    chapter: '选择性必修1 · 第3章 大气的运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、气压带风带如何决定气候' },
      { type: 'paragraph', text: '不同气压带和风带控制下的地区，大气运动和水汽状况不同，从而形成不同的气候特征。一般而言，低压带盛行上升气流、多阴雨；高压带盛行下沉气流、多晴朗干燥；西风带带来海洋湿润气流、温和多雨；信风带和极地东风带从较高纬度吹来、较干燥。' },
      { type: 'list', items: ['低压带：上升气流，多雨', '高压带：下沉气流，少雨', '西风带：从海洋吹向陆地，湿润', '信风、极地东风：较干燥'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">气压带与降水的关系</text><rect x="80" y="90" width="150" height="160" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="155" y="125" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">低压带</text><text x="155" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">上升气流</text><text x="155" y="190" font-size="12" fill="#1f3a4d" text-anchor="middle">多雨</text><rect x="300" y="90" width="150" height="160" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="375" y="125" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">高压带</text><text x="375" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">下沉气流</text><text x="375" y="190" font-size="12" fill="#1f3a4d" text-anchor="middle">少雨</text><rect x="520" y="90" width="110" height="160" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="575" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">西风带</text><text x="575" y="190" font-size="12" fill="#1f3a4d" text-anchor="middle">湿润</text></svg>', caption: '图1　低压带多雨、高压带少雨、西风带湿润，气压风带决定气候干湿。' },
      { type: 'keypoint', label: '重点·单一气压带风带控制的气候', text: '<strong>受单一气压带或风带长期控制的典型气候：</strong>热带雨林气候——赤道低压带（全年多雨）；热带沙漠气候——副热带高压带或信风带（全年干燥）；温带海洋性气候——西风带（全年温和湿润）；地中海气候——副高与西风交替（冬雨夏干）。' },
      { type: 'heading', text: '二、气压带风带交替控制下的气候' },
      { type: 'paragraph', text: '有些地区随季节受不同气压带或风带交替控制，气候呈现明显的季节差异。最典型的是地中海气候：夏季受副热带高压控制，炎热干燥；冬季受西风带控制，温和多雨。热带草原气候则受赤道低压（湿季）和信风带（干季）交替控制。' },
      { type: 'list', items: ['地中海气候：副高（夏干）+ 西风（冬雨）', '热带草原气候：赤道低压（湿季）+ 信风（干季）', '热带季风气候：气压带风带季节移动 + 海陆热力差异', '季节交替是这类气候的突出特征'] },
      { type: 'table', headers: ['气候类型', '控制因素', '特征'], rows: [['热带雨林气候', '赤道低压带', '全年高温多雨'], ['热带沙漠气候', '副高、信风', '全年高温少雨'], ['地中海气候', '副高与西风交替', '夏热干、冬温雨'], ['温带海洋性气候', '西风带', '全年温和湿润'], ['热带草原气候', '赤道低压与信风交替', '干湿两季分明']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">地中海气候：副高与西风交替</text><rect x="60" y="90" width="270" height="160" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="195" y="125" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">夏季</text><text x="195" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">副热带高压控制</text><text x="195" y="190" font-size="12" fill="#1f3a4d" text-anchor="middle">炎热干燥</text><rect x="360" y="90" width="270" height="160" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="495" y="125" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">冬季</text><text x="495" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">西风带控制</text><text x="495" y="190" font-size="12" fill="#1f3a4d" text-anchor="middle">温和多雨</text></svg>', caption: '图2　地中海气候夏季受副高控制炎热干燥，冬季受西风控制温和多雨。' },
      { type: 'example', label: '例题·判气候', text: '题目：某地全年受西风带控制，最可能是哪种气候？<br>A. 地中海气候　B. 温带海洋性气候　C. 热带沙漠气候　D. 热带雨林气候<br>解析：温带海洋性气候分布在南北纬 40°至 60° 大陆西岸，全年受盛行西风带控制，带来海洋湿润气流，形成全年温和湿润的特征。地中海气候是副高与西风交替而非全年西风，其余两项也不符。所以选 B。' },
      { type: 'heading', text: '三、季风环流' },
      { type: 'paragraph', text: '季风是大范围地区随季节盛行风向显著反转的现象。东亚季风最典型，其成因是海陆热力性质差异：夏季陆地升温快形成低压，风从海洋吹向陆地（东南季风，温暖湿润）；冬季陆地降温快形成高压，风从陆地吹向海洋（西北季风，寒冷干燥）。南亚季风还叠加气压带风带的季节移动。' },
      { type: 'warn', label: '易错·东亚与南亚季风成因', text: '东亚季风主要由海陆热力性质差异造成；南亚（印度）季风除了海陆差异，更叠加了气压带风带的季节移动（夏季南半球东南信风越过赤道右偏成西南季风）。因此南亚夏季风更强盛。考题若问「西南季风成因」，必须答上「气压带风带移动」。' },
      { type: 'tip', label: '提示·季风气候特征', text: '季风气候的共同点是「雨热同期」：夏季高温多雨、冬季寒冷（或温和）少雨。我国东部是典型季风气候，有利农业但旱涝频发。记忆时抓住「夏吹海风多雨、冬吹陆风少雨」这一风向反转主线。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">东亚季风：海陆热力差异</text><circle cx="200" cy="180" r="60" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="200" y="185" font-size="13" fill="#1f3a4d" text-anchor="middle">陆地</text><rect x="420" y="120" width="200" height="120" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="520" y="185" font-size="13" fill="#1f3a4d" text-anchor="middle">海洋</text><line x1="200" y1="140" x2="420" y2="140" stroke="#c1583b" stroke-width="2" marker-end="url(#s)"/><text x="310" y="130" font-size="12" fill="#1f3a4d">冬季：陆→海（干冷）</text><line x1="420" y1="220" x2="200" y2="220" stroke="#3d6fb5" stroke-width="2" marker-end="url(#s2)"/><text x="310" y="245" font-size="12" fill="#1f3a4d">夏季：海→陆（暖湿）</text></svg>', caption: '图3　东亚季风因海陆热力差异，冬季风由陆向海、夏季风由海向陆。' },
      { type: 'heading', text: '四、气候类型的判读思路' },
      { type: 'paragraph', text: '判读气候类型的一般思路是「以温定带、以水定型」：先看最冷月气温判断所属温度带（热带、亚热带、温带、寒带），再看降水季节分配判断具体类型（年雨型、夏雨型、冬雨型、少雨型）。结合纬度位置和大气环流即可锁定。' },
      { type: 'list', items: ['以温定带：最冷月均温定温度带', '以水定型：降水分配定具体类型', '年雨型：热带雨林、温带海洋性', '夏雨型：季风、草原；冬雨型：地中海；少雨型：沙漠'], },
      { type: 'keypoint', label: '重点·本课时核心结论', text: '<strong>气压带风带是气候的「总开关」：</strong>单一控制形成热带雨林、热带沙漠、温带海洋性等气候；交替控制形成地中海、热带草原气候；叠加海陆差异形成季风。判读用「以温定带、以水定型」，先定带、再定型、最后套环流。' }
    ],
    exercises: [
      { type: 'choice', question: '全年受赤道低气压带控制的气候类型是？', options: ['热带雨林气候', '地中海气候', '温带海洋性气候', '热带沙漠气候'], answer: '热带雨林气候', explanation: '赤道及其附近地区全年受赤道低气压带控制，盛行上升气流，全年高温多雨，形成热带雨林气候。地中海气候受副高与西风交替控制，温带海洋性气候受西风带控制，热带沙漠气候受副高或信风控制，均不符合「全年赤道低压」。' },
      { type: 'choice', question: '地中海气候的降水特征是？', options: ['全年多雨', '全年少雨', '夏雨冬干', '夏干冬雨'], answer: '夏干冬雨', explanation: '地中海气候分布在南北纬 30°至 40° 大陆西岸，夏季受副热带高压控制，盛行下沉气流，炎热干燥；冬季受西风带控制，温和多雨。因此其降水特征是夏季干燥、冬季多雨，即夏干冬雨型，与季风气候正好相反。' },
      { type: 'choice', question: '东亚季风形成的主要原因是？', options: ['气压带风带移动', '海陆热力性质差异', '地形阻挡', '洋流影响'], answer: '海陆热力性质差异', explanation: '东亚位于世界最大大陆（亚欧大陆）与最大大洋（太平洋）之间，海陆热力性质差异显著：夏季陆地升温快成低压、风从海洋吹向陆地，冬季陆地降温快成高压、风从陆地吹向海洋，形成典型季风。南亚季风才叠加气压带风带移动。' },
      { type: 'fill', question: '判读气候类型常用「以温定___、以水定___」的方法。', answer: '带；型', explanation: '气候判读的两步法是「以温定带、以水定型」。先看最冷月平均气温确定温度带（热带、亚热带、温带、寒带），再看年降水量及季节分配确定具体类型（年雨型、夏雨型、冬雨型、少雨型），最后结合纬度与大气环流锁定气候名称。' },
      { type: 'fill', question: '温带海洋性气候全年受___带控制，特征是全年___、湿润。', answer: '西风；温和', explanation: '温带海洋性气候分布在南北纬 40°至 60° 的大陆西岸，全年受盛行西风带控制，西风从海洋带来充足水汽，使得当地全年温和、降水分配均匀。其气温年较差小、最冷月均温在 0℃ 以上，是西风带单一控制的典型气候。' }
    ]
  });
})();
