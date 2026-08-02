/* 地理 · 高三总复习 · 专题一 自然地理 · 第4章 地球上的水 · 第2节 洋流 */
(function () {
  var v = gzGetVolume('geography', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u13',
    name: '第2节 洋流',
    chapter: '高三地理复习 · 专题一 自然地理 · 第4章 地球上的水',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、洋流的概念与分类' },
      { type: 'paragraph', text: '洋流是海洋表层海水大规模沿一定方向常年稳定的流动。按性质分暖流和寒流：水温比流经海区高的是暖流（一般从低纬流向高纬），比流经海区低的是寒流（一般从高纬流向低纬）。洋流是调节全球热量和水热平衡的重要角色，对沿岸气候、渔场、航运、污染都有影响。' },
      { type: 'list', items: ['暖流：水温较高，多由低纬流向高纬', '寒流：水温较低，多由高纬流向低纬', '按成因：风海流、密度流、补偿流', '规模大、方向稳、影响深远'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">洋流性质（暖流与寒流）</text><rect x="40" y="120" width="600" height="160" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">海洋表层</text><path d="M80 180 Q340 140 600 180" fill="none" stroke="#c1583b" stroke-width="3"/><text x="340" y="160" font-size="13" fill="#c1583b" font-weight="bold">暖流（低纬→高纬，水温高）</text><path d="M80 240 Q340 280 600 240" fill="none" stroke="#3d6fb5" stroke-width="3"/><text x="340" y="300" font-size="13" fill="#3d6fb5" font-weight="bold">寒流（高纬→低纬，水温低）</text><text x="340" y="345" font-size="12" fill="#1f3a4d" text-anchor="middle">暖流增温增湿，寒流降温减湿，影响沿岸气候。</text></svg>', caption: '图1　暖流水温高于流经海区（多低纬向高纬），寒流相反，二者对气候影响不同。' },
      { type: 'keypoint', label: '重点·洋流分布模式', text: '<strong>中低纬大洋环流：北半球顺时针、南半球逆时针（反气旋型）；中高纬北半球逆时针（气旋型）。</strong>大洋西岸（大陆东岸）多为暖流，东岸（大陆西岸）多为寒流。北印度洋受季风影响形成「夏顺冬逆」的季风环流。记忆「北顺南逆、西暖东寒」能快速判读洋流图。' },
      { type: 'heading', text: '二、世界表层洋流分布' },
      { type: 'paragraph', text: '受盛行风和陆地轮廓影响，全球形成若干大洋环流。太平洋：北赤道暖流、日本暖流（黑潮）、北太平洋暖流、加利福尼亚寒流构成北半球顺时针环流；南半球有南赤道暖流、东澳大利亚暖流、西风漂流、秘鲁寒流形成逆时针环流。大西洋类似，含墨西哥湾暖流、北大西洋暖流、加那利寒流、本格拉寒流等。' },
      { type: 'list', items: ['北半球中低纬：顺时针环流，西岸暖流东岸寒流', '南半球中低纬：逆时针环流', '北半球中高纬：逆时针环流（逆时针气旋型）', '北印度洋：夏顺冬逆（季风洋流）'] },
      { type: 'table', headers: ['海域', '主要暖流', '主要寒流'], rows: [['太平洋（北）', '日本暖流、北太平洋暖流', '加利福尼亚寒流'], ['太平洋（南）', '东澳大利亚暖流', '秘鲁寒流'], ['大西洋（北）', '墨西哥湾暖流、北大西洋暖流', '加那利寒流'], ['印度洋（南）', '厄加勒斯暖流', '西澳大利亚寒流']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">中低纬大洋环流（北半球顺时针）</text><circle cx="340" cy="180" r="120" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><path d="M340 60 A120 120 0 1 1 339 60" fill="none" stroke="#c1583b" stroke-width="3" stroke-dasharray="2 6"/><path d="M460 180 A120 120 0 0 1 340 300" fill="none" stroke="#c1583b" stroke-width="3"/><path d="M340 300 A120 120 0 0 1 220 180" fill="none" stroke="#c1583b" stroke-width="3"/><path d="M220 180 A120 120 0 0 1 460 180" fill="none" stroke="#3d6fb5" stroke-width="3"/><text x="340" y="95" font-size="12" fill="#c1583b" font-weight="bold">暖流（西岸）</text><text x="340" y="280" font-size="12" fill="#3d6fb5" font-weight="bold">寒流（东岸）</text><text x="340" y="315" font-size="12" fill="#1f3a4d" text-anchor="middle">北半球中低纬环流顺时针，西侧为暖流、东侧为寒流。</text></svg>', caption: '图2　北半球中低纬大洋环流顺时针，大陆东岸（环流西侧）为暖流、西岸为寒流。' },
      { type: 'example', label: '例题·渔场成因', text: '题目：秘鲁渔场形成的主要原因是？<br>解析：秘鲁渔场位于南美洲西海岸，受秘鲁寒流（上升流）影响。底层冷海水上泛，把丰富的营养盐类带到表层，浮游生物大量繁殖，为鱼类提供充足饵料，形成大渔场。这类「寒流上升流型」渔场与北海道、纽芬兰等「寒暖流交汇型」渔场成因不同，做题要区分交汇与上升流。' },
      { type: 'heading', text: '三、洋流对地理环境的影响' },
      { type: 'paragraph', text: '洋流影响广泛：① 气候——暖流增温增湿（如北大西洋暖流使西欧温带海洋性气候向北延伸），寒流降温减湿（如秘鲁寒流使沿岸形成荒漠）；② 渔场——寒暖流交汇或上升流处饵料丰富；③ 航运——顺流省时、逆流费时；④ 污染——加快净化但扩大污染范围。' },
      { type: 'warn', label: '易错·暖寒流与气候', text: '① 暖流「增温增湿」、寒流「降温减湿」，这是对沿岸气候的影响，不是比较洋流本身温度；② 寒流流经也可能使沿岸更干旱（如西澳大利亚寒流沿岸荒漠）；③ 北大西洋暖流对欧洲西岸温暖湿润贡献巨大，没有它西欧会更冷。常考「某沿岸气候异常的洋流原因」，按性质判断。' },
      { type: 'tip', label: '提示·渔场成因两类', text: '世界大渔场成因分两类：寒暖流交汇型（北海道、纽芬兰、北海）和上升流型（秘鲁）。记忆时把「交汇」对应寒暖流相遇、「上升流」对应离岸风驱赶表层水、底层水补偿上泛。答题若问渔场，先定位洋流性质再判断成因类型。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">洋流对气候与渔场的影响</text><rect x="60" y="80" width="270" height="170" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="195" y="110" font-size="13" fill="#1f3a4d" font-weight="bold">对气候</text><text x="195" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">暖流增温增湿</text><text x="195" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">寒流降温减湿</text><rect x="350" y="80" width="270" height="170" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="485" y="110" font-size="13" fill="#1f3a4d" font-weight="bold">对生物</text><text x="485" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">寒暖流交汇→渔场</text><text x="485" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">上升流→渔场</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">此外还影响航运（顺逆流）和海洋污染（扩散与净化）。</text></svg>', caption: '图3　洋流影响气候（暖湿寒干）和生物（渔场），并关乎航运与污染。' },
      { type: 'heading', text: '四、厄尔尼诺与拉尼娜' },
      { type: 'paragraph', text: '赤道太平洋中东部海水温度异常升高称为厄尔尼诺现象，此时秘鲁沿岸上升流减弱、渔场减产，东南亚、澳大利亚干旱，南美西岸多雨，我国易出现暖冬。与之相反，赤道中东部海温异常偏低为拉尼娜，上升流增强、渔场增产，我国易出现冷冬、台风偏多。二者是海气相互作用的典型表现。' },
      { type: 'list', items: ['厄尔尼诺：中东太平洋海温偏高，上升流减弱', '拉尼娜：中东太平洋海温偏低，上升流增强', '厄尔尼诺年：南美西岸多雨、澳洲干旱', '拉尼娜年：我国易冷冬、台风偏多'] },
      { type: 'example', label: '例题·厄尔尼诺', text: '题目：厄尔尼诺现象发生时，秘鲁沿岸渔场往往？<br>解析：厄尔尼诺年赤道中东太平洋海温异常升高，东南信风减弱，秘鲁沿岸上升流（底层冷水上泛）减弱，营养盐减少、浮游生物减少，鱼类饵料不足，渔场减产。同时南美西岸降水增多、出现洪涝，而澳大利亚、印尼等地干旱。所以厄尔尼诺会使秘鲁渔场减产。' }
    ],
    exercises: [
      { type: 'choice', question: '关于暖流的叙述，正确的是？', options: ['水温比流经海区低', '一般由高纬流向低纬', '对沿岸增温增湿', '都分布在南半球'], answer: '对沿岸增温增湿', explanation: '暖流是水温高于所流经海区的洋流，一般由低纬流向高纬，对沿岸气候起增温增湿作用，如北大西洋暖流使西欧温和湿润。寒流才降温减湿且多从高纬流向低纬。暖寒流在南北半球均有分布。' },
      { type: 'choice', question: '北半球中低纬度大洋环流的方向是？', options: ['顺时针', '逆时针', '无固定方向', '夏顺冬逆'], answer: '顺时针', explanation: '受东北信风和西风驱动，北半球中低纬大洋环流呈顺时针方向，大陆东岸（环流西侧）为暖流、西岸为寒流；南半球同纬度则为逆时针。北印度洋因季风影响才呈夏顺冬逆，属于特殊区。' },
      { type: 'choice', question: '秘鲁渔场形成的主要原因是？', options: ['寒暖流交汇', '上升流带来营养盐', '河流注入养分', '纬度低水温高'], answer: '上升流带来营养盐', explanation: '秘鲁渔场位于南美西海岸，受秘鲁寒流（上升流）影响，底层冷海水上泛把丰富营养盐带到表层，浮游生物繁盛、鱼类饵料充足，形成大渔场。它属于上升流型渔场，不同于寒暖流交汇型的北海道、纽芬兰渔场。' },
      { type: 'fill', question: '洋流按水温相对于流经海区可分为___流和___流；前者多由低纬流向高纬。', answer: '暖；寒', explanation: '洋流按性质分为暖流和寒流：暖流水温高于流经海区，一般由低纬流向高纬，对沿岸增温增湿；寒流水温低于流经海区，一般由高纬流向低纬，降温减湿。判断性质不能只看纬度，应比较洋流与所经海区的水温。' },
      { type: 'fill', question: '厄尔尼诺现象指赤道___（中东）太平洋海表温度异常___，导致秘鲁沿岸上升流减弱、渔场减产。', answer: '中东部；升高', explanation: '厄尔尼诺是赤道中东太平洋海表温度持续异常升高的现象，常伴随东南信风减弱、秘鲁沿岸上升流减弱，营养盐减少使渔场减产，并引发全球气候异常（南美洪涝、澳洲干旱、我国易暖冬）。其反相为拉尼娜（海温偏低）。' }
    ]
  });
})();
