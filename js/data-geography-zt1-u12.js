/* 地理 · 高三总复习 · 专题一 自然地理 · 第4章 地球上的水 · 第1节水循环与陆地水 */
(function () {
  var v = gzGetVolume('geography', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u12',
    name: '第1节 水循环与陆地水',
    chapter: '高三地理复习 · 专题一 自然地理 · 第4章 地球上的水',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、水循环的类型与环节' },
      { type: 'paragraph', text: '水循环是地球上水在海洋、陆地、大气之间连续运动的过程。按空间分为三类：海陆间循环（又称大循环，最重要，使陆地水得到补充）、海上内循环（水量最大）、陆地内循环。主要环节有蒸发、水汽输送、降水、下渗、地表径流和地下径流。水循环维持了全球水量动态平衡。' },
      { type: 'list', items: ['蒸发（蒸腾）：水变为水汽进入大气', '水汽输送：风把水汽从海洋带到陆地', '降水：水汽凝结落回地表', '下渗与径流：形成地表和地下水流回海洋'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">海陆间水循环示意</text><rect x="40" y="280" width="300" height="50" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="190" y="310" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">陆地</text><rect x="360" y="280" width="280" height="50" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="500" y="310" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">海洋</text><path d="M500 280 Q340 150 190 280" fill="none" stroke="#2a6fa8" stroke-width="2.5" stroke-dasharray="6 4"/><text x="340" y="160" font-size="13" fill="#2a6fa8" font-weight="bold">降水</text><path d="M500 270 Q420 180 350 120" fill="none" stroke="#c1583b" stroke-width="2.5"/><text x="430" y="180" font-size="12" fill="#c1583b">蒸发</text><path d="M350 120 Q260 140 190 280" fill="none" stroke="#3d6fb5" stroke-width="2.5"/><text x="240" y="200" font-size="12" fill="#3d6fb5">水汽输送</text><text x="190" y="270" font-size="12" fill="#1f3a4d" font-weight="bold">径流回到海洋</text><text x="340" y="345" font-size="12" fill="#1f3a4d" text-anchor="middle">海陆间循环使陆地水不断得到补充和更新，是最重要的大循环。</text></svg>', caption: '图1　海陆间水循环包括蒸发、水汽输送、降水、下渗和径流，维持陆地水量平衡。' },
      { type: 'keypoint', label: '重点·人类活动对水循环的影响', text: '<strong>人类主要通过影响「地表径流」和「下渗」来改变水循环。</strong>修水库、跨流域调水直接调节径流；植树造林、退耕还林增加下渗、涵养水源；城市硬化地面减少下渗、增加地表径流和洪涝风险；滥伐森林则削弱涵养能力。人类活动最易干预的环节是径流和下渗。' },
      { type: 'heading', text: '二、陆地水体的相互关系' },
      { type: 'paragraph', text: '陆地水体包括河流、湖泊、地下水、冰川、沼泽等，彼此相互联系、相互补给。河流补给方式多样：雨水补给（最普遍，季风区夏汛）、冰雪融水补给（西北内流河，夏汛但随气温）、地下水补给（稳定、常年）、湖泊补给（调蓄）。一条河流往往有多种补给来源。' },
      { type: 'list', items: ['雨水补给：季风区河流夏秋汛、冬春枯', '冰雪融水：气温升高补给增多，夏汛明显', '地下水补给：稳定可靠，与河水互补', '湖泊补给：对河流有调蓄作用，削峰补枯'] },
      { type: 'table', headers: ['补给类型', '主要影响因素', '汛期', '典型地区'], rows: [['雨水', '降水量', '夏秋', '东部季风区'], ['冰川融水', '气温', '夏季', '西北内流区'], ['积雪融水', '气温回升', '春汛', '东北'], ['地下水', '水位差', '常年', '各地']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">河流与地下水互补关系</text><path d="M60 200 Q200 160 340 200 Q480 240 620 200" fill="none" stroke="#3d6fb5" stroke-width="3"/><text x="340" y="190" font-size="13" fill="#3d6fb5" font-weight="bold">河流</text><rect x="60" y="220" width="560" height="60" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="255" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地下水（含水层）</text><line x1="200" y1="210" x2="200" y2="220" stroke="#1f3a4d" stroke-width="2" marker-end="url(#a)"/><text x="150" y="215" font-size="12" fill="#c1583b">汛期河补给地下</text><line x1="480" y1="220" x2="480" y2="210" stroke="#1f3a4d" stroke-width="2"/><text x="430" y="215" font-size="12" fill="#2a6fa8">枯水期地下补给河</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">丰水期河水补给地下水，枯水期地下水补给河流，二者互补。</text></svg>', caption: '图2　河流与地下水互为补给：汛期河流补给地下，枯水期相反。' },
      { type: 'example', label: '例题·河流补给', text: '题目：我国西北地区内流河的主要补给来源是？<br>解析：西北深居内陆、降水稀少，河流主要依靠高山冰雪融水补给，气温越高融水越多，因此夏季气温高时形成夏汛，冬季断流。这种河流水量随气温变化、年际变化小但季节变化大。与之不同，东部季风区河流以雨水补给为主。区分补给类型要看所处区域的自然特征。' },
      { type: 'heading', text: '三、水资源的分布与利用' },
      { type: 'paragraph', text: '全球水资源中咸水占绝大多数，淡水中冰川和深层地下水比重大，真正容易利用的河流水、淡水湖泊水、浅层地下水只占极小比例。水资源分布不均：总量巴西最多，人均巴西等国丰富、我国人均偏少；我国南多北少、东多西少，华北最缺水。合理利用要开源（跨流域调水、海水淡化）与节流（节水农业、提高利用率）并重。' },
      { type: 'warn', label: '易错·水资源概念', text: '① 水资源通常指陆地上可利用的淡水资源，主要是河流水、淡水湖泊水和浅层地下水，不包括冰川（难利用）和海水；② 水资源丰富程度看「径流量」，不只看降水量；③ 我国水资源时空分布不均，南多北少、夏秋多冬春少，故需跨流域调水和修水库调节。把「水资源=可利用淡水」厘清很关键。' },
      { type: 'tip', label: '提示·解决缺水途径', text: '缺水分资源型（总量不足，如华北）和水质型（水体污染，如南方部分城市）。对策：资源型靠跨流域调水（南水北调）、海水淡化；水质型靠治理污染、节约保护。记忆「开源节流、南水北调、节水优先」，能应对大多数水资源题。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">水资源构成（可利用淡水占比极小）</text><rect x="60" y="90" width="560" height="40" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="116" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">海洋咸水（约 96.5%）</text><rect x="60" y="150" width="200" height="40" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="160" y="176" font-size="12" fill="#1f3a4d" text-anchor="middle">冰川（难利用）</text><rect x="280" y="150" width="120" height="40" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="176" font-size="12" fill="#1f3a4d" text-anchor="middle">深层地下水</text><rect x="420" y="150" width="200" height="40" rx="10" fill="#2a6fa8" stroke="#2a6fa8" stroke-width="2"/><text x="520" y="176" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">可利用淡水</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">可利用淡水（河、湖、浅层地下水）占全球总水量比例极小。</text></svg>', caption: '图3　全球水总量中可利用的淡水资源占比极小，凸显节水与保护的重要。' },
      { type: 'heading', text: '四、水循环的意义' },
      { type: 'paragraph', text: '水循环具有重大地理意义：它使陆地淡水得以更新补充，维持全球水量平衡；驱动能量交换，调节气候；塑造地表形态（流水侵蚀、搬运、堆积）；成为物质迁移的载体，连接岩石圈、大气圈、水圈、生物圈。可以说，没有水循环，地球表层系统就无法运转。' },
      { type: 'list', items: ['维持全球水量动态平衡', '更新陆地淡水资源', '进行能量交换、调节气候', '塑造地表形态、连接四大圈层'] },
      { type: 'example', label: '例题·水循环意义', text: '题目：下列说法体现水循环意义的是？<br>解析：水循环的意义包括维持水量平衡、更新淡水、调节气候、塑造地貌、联系各圈层等。例如「黄河水滚滚东流注入渤海」体现了径流把陆地水送回海洋、维持平衡；「流水切割出峡谷」体现塑造地貌。凡涉及水体更新、能量输送、地貌塑造的表述，都属水循环意义，可据此判断选项。' }
    ],
    exercises: [
      { type: 'choice', question: '对人类活动而言，最易干预的水循环环节是？', options: ['蒸发', '降水', '地表径流和下渗', '水汽输送'], answer: '地表径流和下渗', explanation: '人类通过修建水库、跨流域调水直接调节地表径流，通过植树造林、城市硬化改变下渗，因此最容易干预的是地表径流和下渗环节。蒸发、降水、水汽输送由大尺度自然过程主导，人类难以直接控制。修水库、南水北调都是对径流的人为调节。' },
      { type: 'choice', question: '我国西北内流河的主要补给是？', options: ['雨水', '高山冰雪融水', '地下水', '湖泊水'], answer: '高山冰雪融水', explanation: '西北内陆降水稀少，河流主要依靠高山冰川和永久积雪的融水补给。气温越高融水越多，因此夏季形成明显夏汛，冬季常断流。其水量随气温季节变化大、年际变化小。东部季风区河流才以雨水补给为主。' },
      { type: 'choice', question: '通常所说可利用的水资源主要是指？', options: ['冰川水', '海洋水', '河流水、淡水湖泊水和浅层地下水', '深层地下水'], answer: '河流水、淡水湖泊水和浅层地下水', explanation: '水资源一般指陆地上可供人类利用的淡水资源，主要包括河流水、淡水湖泊水和浅层地下水。冰川虽储量大但位于高纬高山区难以利用，海洋水是咸水，深层地下水开采成本高。因此可利用淡水仅占全球水量极小部分。' },
      { type: 'fill', question: '水循环按空间可分为海陆间循环、___和___三种类型。', answer: '海上内循环；陆地内循环', explanation: '水循环按发生空间分为三类：海陆间循环（大循环，连接海洋与陆地，最重要）、海上内循环（海洋上的蒸发降水，水量最大）、陆地内循环（陆地内的蒸发降水）。其中海陆间循环使陆地水不断得到补充和更新，对陆地尤为重要。' },
      { type: 'fill', question: '河流与地下水互补：汛期___补给___，枯水期___补给___。', answer: '河水；地下水；地下水；河水', explanation: '丰水期河流水位高于地下水位，河水下渗补给地下水；枯水期河流水位下降低于地下水位，地下水汇入补给河流。二者相互补给使河流径流季节变化趋于平缓。这种互补关系是地下水对河流的重要调蓄作用。' }
    ]
  });
})();
