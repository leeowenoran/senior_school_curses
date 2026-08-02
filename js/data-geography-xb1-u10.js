/* 地理 · 选择性必修1 · 第4章 · 课时：洋流 */
(function () {
  var v = gzGetVolume('geography', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u10',
    name: '第2节 洋流',
    chapter: '选择性必修1 · 第4章 水的运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、洋流的概念与分类' },
      { type: 'paragraph', text: '洋流是海洋表层海水常年沿着一定方向作大规模流动的现象。按性质分，水温高于流经海区的为暖流，低于流经海区的为寒流。注意：暖流、寒流不是按水温绝对高低，而是相对于所流经海区而言。' },
      { type: 'list', items: ['洋流：表层海水大规模定向流动', '暖流：水温高于流经海区', '寒流：水温低于流经海区', '按成因分：风海流、密度流、补偿流'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">暖流与寒流</text><rect x="80" y="100" width="240" height="120" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="200" y="150" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">暖流</text><text x="200" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">水温高于周围</text><rect x="380" y="100" width="240" height="120" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="500" y="150" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">寒流</text><text x="500" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">水温低于周围</text></svg>', caption: '图1　暖流水温高于流经海区，寒流水温低于流经海区，均为相对概念。' },
      { type: 'keypoint', label: '重点·洋流分布模式', text: '<strong>中低纬大洋环流（以副热带为中心）：</strong>北半球顺时针、南半球逆时针，大洋东岸为寒流、西岸为暖流。<strong>中高纬（北半球以副极地为中心）：</strong>逆时针，大洋东岸为暖流、西岸为寒流。南纬 40° 附近西风漂流横贯全球。记忆「反气旋型（中低纬）顺北逆南」。' },
      { type: 'heading', text: '二、世界表层洋流的分布' },
      { type: 'paragraph', text: '在盛行风（主要是信风和西风）的吹拂下，世界大洋表层形成有规律的大洋环流。以副热带海区为中心的中低纬环流，北半球呈顺时针、南半球呈逆时针；北半球中高纬以副极地为中心呈逆时针；南半球中高纬受西风影响形成自西向东的西风漂流。' },
      { type: 'list', items: ['中低纬：北顺南逆（反气旋型）', '北半球中高纬：逆时针（气旋型）', '南半球中高纬：西风漂流（自西向东）', '北印度洋：季风环流，夏顺冬逆'] },
      { type: 'table', headers: ['海区', '环流方向', '大洋西岸', '大洋东岸'], rows: [['北半球中低纬', '顺时针', '暖流', '寒流'], ['南半球中低纬', '逆时针', '暖流', '寒流'], ['北半球中高纬', '逆时针', '寒流', '暖流'], ['南纬40°附近', '西风漂流', '自西向东', '绕极']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">世界表层洋流分布（模式）</text><circle cx="340" cy="180" r="120" fill="none" stroke="#2a6fa8" stroke-width="2"/><path d="M 340 60 A 120 120 0 0 1 460 180" fill="none" stroke="#c1583b" stroke-width="3" marker-end="url(#m1)"/><path d="M 460 180 A 120 120 0 0 1 340 300" fill="none" stroke="#3d6fb5" stroke-width="3" marker-end="url(#m2)"/><path d="M 340 300 A 120 120 0 0 1 220 180" fill="none" stroke="#c1583b" stroke-width="3" marker-end="url(#m3)"/><path d="M 220 180 A 120 120 0 0 1 340 60" fill="none" stroke="#3d6fb5" stroke-width="3" marker-end="url(#m4)"/><text x="340" y="185" font-size="12" fill="#1f3a4d" text-anchor="middle">北顺</text><text x="340" y="325" font-size="12" fill="#1f3a4d" text-anchor="middle">北半球中低纬环流顺时针，西岸暖流、东岸寒流。</text></svg>', caption: '图2　北半球中低纬大洋环流顺时针，西岸暖流、东岸寒流。' },
      { type: 'example', label: '例题·判洋流性质', text: '题目：位于北半球中低纬大陆西岸的洋流，其性质一般是？<br>A. 暖流　B. 寒流　C. 密度流　D. 补偿流<br>解析：北半球中低纬大洋环流呈顺时针，大洋西岸（即大陆东岸）是暖流，大陆西岸对应大洋东岸，为寒流。例如北美洲西海岸的加利福尼亚寒流、非洲西海岸的加那利寒流。所以大陆西岸一般是寒流，选 B。' },
      { type: 'heading', text: '三、洋流对地理环境的影响' },
      { type: 'paragraph', text: '洋流对气候、渔场、航行和海洋污染都有显著影响。暖流增温增湿，寒流降温减湿；寒暖流交汇或上升流海域饵料丰富，形成大渔场；顺着洋流航行省时、逆着费时；洋流还可加快污染物扩散，但也扩大污染范围。' },
      { type: 'warn', label: '易错·寒流未必降温到寒冷', text: '寒流是「相对流经海区水温较低」的洋流，在低纬出现的寒流（如秘鲁寒流）虽叫寒流，但绝对水温仍可能较高，只是比周围低、且有降温减湿作用。同理高纬的暖流绝对温度可能很低。判断性质看「相对周围」，不要看绝对温度。' },
      { type: 'tip', label: '提示·大渔场分布', text: '世界四大渔场中，北海道、纽芬兰、北海渔场位于寒暖流交汇处；秘鲁渔场由上升流（秘鲁寒流离岸、底层海水上泛）形成。记住「交汇多饵料、上升流也富渔」，渔场题基本可解。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">洋流对地理环境的影响</text><rect x="60" y="80" width="260" height="200" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="190" y="115" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">气候</text><text x="190" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">暖流增温增湿</text><text x="190" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">寒流降温减湿</text><rect x="360" y="80" width="260" height="200" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="490" y="115" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">生物与航行</text><text x="490" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">交汇处成大渔场</text><text x="490" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">顺流快、逆流慢</text></svg>', caption: '图3　洋流影响气候（暖湿寒干）、渔场（交汇/上升流）和航行速度。' },
      { type: 'heading', text: '四、北印度洋季风洋流' },
      { type: 'paragraph', text: '北印度洋受南亚季风影响，洋流方向随季节反转：夏季吹西南季风，海水向东流，环流呈顺时针；冬季吹东北季风，海水向西流，环流呈逆时针。这与多数大洋规律不同，是「夏顺冬逆」的特殊案例，也影响郑和下西洋等历史航线的选择。' },
      { type: 'list', items: ['夏季：西南季风，洋流顺时针', '冬季：东北季风，洋流逆时针', '夏顺冬逆，与季风一致', '历史上航海利用季风洋流'] },
      { type: 'keypoint', label: '重点·本课时核心结论', text: '<strong>洋流三句话：</strong>① 性质看相对水温（暖流高、寒流低）；② 分布看风带（中低纬北顺南逆、西暖东寒，南纬西风漂流）；③ 影响看「气候、渔场、航行、污染」四方面。北印度洋特殊，夏顺冬逆。' }
    ],
    exercises: [
      { type: 'choice', question: '关于暖流和寒流的叙述，正确的是？', options: ['暖流绝对水温一定高', '寒流绝对水温一定低', '暖流是水温高于流经海区的洋流', '寒流只出现在高纬度'], answer: '暖流是水温高于流经海区的洋流', explanation: '暖流和寒流是按洋流与其流经海区水温的相对高低来划分的：水温高于周围海区的是暖流，低于周围的是寒流，与绝对温度无关。例如低纬的秘鲁寒流绝对温度并不低，只是比周围低。因此只有「暖流是水温高于流经海区的洋流」正确。' },
      { type: 'choice', question: '北半球中低纬度大洋环流的方向是？', options: ['逆时针', '顺时针', '无固定方向', '随季节反转'], answer: '顺时针', explanation: '以副热带海区为中心的中低纬大洋环流，受信风和西风共同驱动，北半球呈顺时针方向流动，南半球呈逆时针方向。并且大洋西岸为暖流、东岸为寒流。这是「反气旋型」环流，是洋流分布的基本规律之一。' },
      { type: 'choice', question: '秘鲁渔场形成的主要原因是？', options: ['寒暖流交汇', '上升流带来饵料', '河流注入养分', '大陆架宽阔'], answer: '上升流带来饵料', explanation: '秘鲁渔场位于南美洲西海岸，受离岸风影响，表层海水被吹离海岸，底层冷海水上泛（上升流），将深海丰富的营养盐类带到表层，浮游生物大量繁殖，为鱼类提供充足饵料，形成世界大渔场。它并非寒暖流交汇形成，而是上升流成因。' },
      { type: 'fill', question: '北印度洋季风洋流夏季呈___（顺/逆）时针，冬季呈___时针。', answer: '顺；逆', explanation: '北印度洋受南亚季风控制，夏季西南季风推动海水自西向东流，洋流呈顺时针；冬季东北季风推动海水自东向西流，呈逆时针。即「夏顺冬逆」，与季风方向一致，是区别于其他大洋的特殊洋流模式。' },
      { type: 'fill', question: '寒流对沿岸气候有___温___湿的作用。', answer: '降；减', explanation: '寒流流经海区，水温低于周围，使近海面空气降温，水汽不易凝结，因此对沿岸气候起到降温、减湿的作用；与之相对，暖流有增温、增湿的作用。这也是寒流沿岸常出现荒漠（如秘鲁沿岸沙漠）的重要原因。' }
    ]
  });
})();
