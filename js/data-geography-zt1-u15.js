/* 地理 · 高三总复习 · 专题一 自然地理 · 第5章 地表形态的塑造 · 第2节 外力作用与地貌 */
(function () {
  var v = gzGetVolume('geography', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u15',
    name: '第2节 外力作用与地貌',
    chapter: '高三地理复习 · 专题一 自然地理 · 第5章 地表形态的塑造',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、外力作用的能量与形式' },
      { type: 'paragraph', text: '外力作用能量主要来自太阳辐射和重力，通过风化、侵蚀、搬运、堆积（沉积）四种方式改造地表，使高低起伏趋于平缓。外力作用受气候、植被、岩性影响：干旱区以风力和物理风化为主，湿润区以流水作用为主，高寒区有冰川作用。它与内力作用相反，是「削高填低」的过程。' },
      { type: 'list', items: ['能量：太阳辐射和重力能', '四种方式：风化、侵蚀、搬运、堆积', '湿润区：流水作用为主', '干旱区：风力作用为主，高寒区：冰川作用'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">外力作用的四个环节</text><rect x="50" y="100" width="130" height="150" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="115" y="135" font-size="13" fill="#1f3a4d" font-weight="bold">风化</text><text x="115" y="170" font-size="12" fill="#1f3a4d" text-anchor="middle">岩石破碎</text><rect x="190" y="100" width="130" height="150" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="255" y="135" font-size="13" fill="#1f3a4d" font-weight="bold">侵蚀</text><text x="255" y="170" font-size="12" fill="#1f3a4d" text-anchor="middle">刻画地表</text><rect x="330" y="100" width="130" height="150" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="395" y="135" font-size="13" fill="#1f3a4d" font-weight="bold">搬运</text><text x="395" y="170" font-size="12" fill="#1f3a4d" text-anchor="middle">转移物质</text><rect x="470" y="100" width="130" height="150" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="535" y="135" font-size="13" fill="#1f3a4d" font-weight="bold">堆积</text><text x="535" y="170" font-size="12" fill="#1f3a4d" text-anchor="middle">塑造平原</text><text x="340" y="330" font-size="12" fill="#1f3a4d" text-anchor="middle">风化→侵蚀→搬运→堆积，外力把高处物质搬到低处，削高填低。</text></svg>', caption: '图1　外力作用四环节：风化破碎、侵蚀刻画、搬运转移、堆积塑造，使地表趋平。' },
      { type: 'keypoint', label: '重点·流水侵蚀与堆积', text: '<strong>河流上游以侵蚀（下切、溯源）为主，形成 V 形谷；中下游以堆积为主，形成冲积平原、河口三角洲。</strong>凹凸岸：凹岸侵蚀、凸岸堆积。河流出山口形成冲积扇，入海口形成三角洲。流速减慢、所带物质超出搬运能力时就会堆积。' },
      { type: 'heading', text: '二、流水地貌' },
      { type: 'paragraph', text: '流水是最普遍的外力。上游山区河流落差大、流速快，以下蚀和溯源侵蚀为主，形成峡谷（如长江三峡）；中下游地势平缓，侧蚀增强使河道弯曲（河曲），凸岸堆积、凹岸侵蚀；出山口因地形开阔流速骤减形成冲积扇；入海口泥沙堆积形成三角洲（如珠江、黄河三角洲）。' },
      { type: 'list', items: ['上游：下蚀、溯源侵蚀 → 峡谷、V 形谷', '中游：侧蚀增强 → 河曲，凹岸蚀凸岸积', '出山口：冲积扇', '入海口：三角洲'] },
      { type: 'table', headers: ['地貌', '成因', '部位', '实例'], rows: [['峡谷', '下蚀、溯源侵蚀', '河流上游', '长江三峡'], ['河曲', '侧蚀、凹蚀凸积', '河流中游', '荆江曲流'], ['冲积扇', '出山口堆积', '山前', '成都平原边缘'], ['三角洲', '河口堆积', '入海口', '珠江三角洲']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">河流凸岸堆积与凹岸侵蚀</text><path d="M60 200 Q200 120 340 200 Q480 280 620 200" fill="none" stroke="#3d6fb5" stroke-width="3"/><text x="200" y="150" font-size="13" fill="#c1583b" font-weight="bold">凹岸（侵蚀）</text><text x="480" y="250" font-size="13" fill="#2a6fa8" font-weight="bold">凸岸（堆积）</text><path d="M200 150 Q150 200 200 250" fill="none" stroke="#c1583b" stroke-width="2.5" stroke-dasharray="4 3"/><path d="M480 250 Q530 200 480 150" fill="none" stroke="#2a6fa8" stroke-width="2.5" stroke-dasharray="4 3"/><text x="340" y="315" font-size="12" fill="#1f3a4d" text-anchor="middle">河流弯曲处，凹岸受蚀、凸岸堆积；港口宜建凹岸、农田聚落宜在凸岸。</text></svg>', caption: '图2　河曲处凹岸侵蚀、凸岸堆积，港口常选址凹岸以获取深水。' },
      { type: 'example', label: '例题·港口选址', text: '题目：在弯曲河道处建货运港口，应选凹岸还是凸岸？为什么？<br>解析：应选凹岸。河流弯曲处凹岸受流水侵蚀、水深较大且不易淤积，利于船只停靠和航道维护；凸岸以堆积为主、水浅多泥沙，不宜建港但土地肥沃宜农耕聚落。因此港口、防洪堤等工程多布局凹岸，凸岸则发展农业或聚落。' },
      { type: 'heading', text: '三、风力与冰川地貌' },
      { type: 'paragraph', text: '干旱半干旱区风力作用显著：风蚀蘑菇、风蚀柱、雅丹地貌由风力侵蚀形成；沙丘、沙垄由风力堆积形成，沙丘缓坡为迎风坡、陡坡为背风坡。高寒区冰川侵蚀形成冰斗、角峰、U 形谷，冰川堆积形成冰碛丘陵。不同外力在不同气候区塑造出截然不同的地貌景观。' },
      { type: 'warn', label: '易错·风积地貌判定', text: '① 沙丘缓坡是迎风坡、陡坡是背风坡，据此可判断风向；② 风蚀地貌（蘑菇、雅丹）出现在风力强、物质疏松处，不是堆积产物；③ 冰川 U 形谷与流水 V 形谷形态不同，U 谷宽缓、V 谷陡峭；④ 不要把「风力堆积的沙丘」与「流水堆积的三角洲」混淆。审题看清外力类型。' },
      { type: 'tip', label: '提示·外力与气候对应', text: '判地貌先看区域气候：湿润季风区→流水作用（峡谷、三角洲），干旱区→风力作用（风蚀蘑菇、沙丘），高寒区→冰川作用（角峰、U 谷），海岸带→海浪作用（海蚀崖、沙滩）。把「外力类型 = 气候背景」对应起来，地貌成因题就迎刃而解。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">风力与冰川地貌</text><rect x="60" y="90" width="260" height="170" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="190" y="120" font-size="13" fill="#1f3a4d" font-weight="bold">风力地貌</text><text x="190" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">侵蚀：风蚀蘑菇、雅丹</text><text x="190" y="185" font-size="12" fill="#1f3a4d" text-anchor="middle">堆积：沙丘（缓坡迎风）</text><rect x="360" y="90" width="260" height="170" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="490" y="120" font-size="13" fill="#1f3a4d" font-weight="bold">冰川地貌</text><text x="490" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">侵蚀：角峰、U形谷</text><text x="490" y="185" font-size="12" fill="#1f3a4d" text-anchor="middle">堆积：冰碛丘陵</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">干旱区多风力地貌，高寒区多冰川地貌，湿润区多流水地貌。</text></svg>', caption: '图3　外力类型与气候背景对应：风成于旱区、冰成高寒区、水成湿润区。' },
      { type: 'heading', text: '四、人类活动与地表形态' },
      { type: 'paragraph', text: '人类活动也是一种外力：修梯田、植树造林可减缓侵蚀、保持水土；滥砍滥伐、陡坡开垦加剧水土流失；大型工程（水库、采石）直接改变地貌。人类应顺应自然规律，在利用和改造地表形态时注重生态保护，实现人地协调。' },
      { type: 'list', items: ['植树造林、修梯田：保持水土、减缓侵蚀', '陡坡开垦、滥伐：加剧水土流失', '工程建设：直接塑造或改变地貌', '原则：顺应自然、人地协调'] },
      { type: 'example', label: '例题·黄土高原', text: '题目：黄土高原千沟万壑的地表形态主要由什么外力作用造成？<br>解析：黄土高原土质疏松、降水集中且多暴雨，加之历史上植被破坏，流水侵蚀（特别是沟谷下切和黄土的湿陷）非常强烈，把平坦高原切割成千沟万壑。因此黄土高原地貌主要是流水侵蚀（外力）的结果，而黄土堆积本身是风力堆积（地质时期）。区分「黄土来源」与「现今沟壑成因」是两回事。' }
    ],
    exercises: [
      { type: 'choice', question: '河流入海口常形成的堆积地貌是？', options: ['冲积扇', '三角洲', '角峰', '沙丘'], answer: '三角洲', explanation: '河流携带泥沙到入海口，因河道展宽、流速减慢、海潮顶托，泥沙堆积形成河口三角洲（如珠江、长江三角洲）。冲积扇出现在河流出山口，角峰是冰川侵蚀地貌，沙丘是风力堆积地貌。不同部位堆积地貌不同，要对应位置判断。' },
      { type: 'choice', question: '关于沙丘的叙述，正确的是？', options: ['缓坡是背风坡', '陡坡是迎风坡', '缓坡是迎风坡、陡坡是背风坡', '与风向无关'], answer: '缓坡是迎风坡、陡坡是背风坡', explanation: '风积沙丘的迎风坡因风力沿坡面爬升、坡度缓，背风坡因砂粒堆积、坡度陡。所以缓坡为迎风坡、陡坡为背风坡，据此可推断当地风向。这是风积地貌判读的基本规律，常结合风向题考查。' },
      { type: 'choice', question: '下列由冰川侵蚀形成的是？', options: ['风蚀蘑菇', 'V 形谷', '角峰', '冲积扇'], answer: '角峰', explanation: '角峰是冰川侵蚀（冰斗进一步扩大、多个冰斗间山峰被削尖）形成的尖峭山峰，属冰川侵蚀地貌；冰碛丘陵才是冰川堆积。风蚀蘑菇是风力侵蚀，V 形谷是流水下蚀，冲积扇是流水堆积。区分外力类型与对应地貌是关键。' },
      { type: 'fill', question: '外力作用四种方式依次为风化、侵蚀、___和___。', answer: '搬运；堆积（沉积）', explanation: '外力作用通过风化（岩石破碎）、侵蚀（刻画地表）、搬运（转移物质）、堆积/沉积（在低处沉积）四个相互联系的环节改造地表，总体使高低起伏趋于平缓。气候差异决定主导外力：湿润区流水、干旱区风力、高寒区冰川。' },
      { type: 'fill', question: '河流弯曲处，___岸受侵蚀、___岸发生堆积；货运港口宜建在侵蚀岸。', answer: '凹；凸', explanation: '河道弯曲处，水流惯性使凹岸受强烈侵蚀、水深较大，凸岸流速慢发生堆积、水浅多沙。因此港口、防洪堤等工程宜布局在凹岸以获深水良好航道，凸岸土地肥沃宜农耕和聚落。这是河流地貌的重要应用规律。' }
    ]
  });
})();
