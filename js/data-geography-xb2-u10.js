/* 地理 · 选择性必修2 · 第4章 · 课时：资源跨区域调配 */
(function () {
  var v = gzGetVolume('geography', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u10',
    name: '资源跨区域调配',
    chapter: '选择性必修2 · 第4章 区际联系与区域协调发展',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、为什么需要资源跨区域调配' },
      { type: 'paragraph', text: '我国自然资源分布很不均衡：水能集中在西南，煤炭集中在晋陕蒙，油气在西北和东北，而经济发达、用能多的东部沿海资源相对贫乏。这种「资源富集区」与「资源消费区」在空间上错位，单靠本地资源无法满足需求，必须通过工程把资源从富余区调到紧缺区。' },
      { type: 'list', items: ['资源分布不均：西多东少、北多南少', '能源需求错位：东部沿海消费量大', '单纯靠本地无法平衡供需', '工程调配可优化资源配置效率'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">资源分布与需求的错位</text><rect x="40" y="70" width="280" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="110" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">资源富集区（西部北方）</text><text x="180" y="155" font-size="13" fill="#1f3a4d" text-anchor="middle">煤水油气丰富</text><text x="180" y="195" font-size="13" fill="#1f3a4d" text-anchor="middle">消费能力较弱</text><rect x="360" y="70" width="280" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="500" y="110" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">资源消费区（东部）</text><text x="500" y="155" font-size="13" fill="#1f3a4d" text-anchor="middle">经济发达耗能大</text><text x="500" y="195" font-size="13" fill="#1f3a4d" text-anchor="middle">本地资源不足</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">供需错位，催生跨区域调配工程。</text></svg>', caption: '图1　资源富集区与高能消费区空间错位，需要工程调配。' },
      { type: 'keypoint', label: '重点·调配的根本原因', text: '<strong>资源跨区域调配的根本原因有两条：</strong>① 自然资源空间分布不均（自然背景）；② 区域间经济发展不平衡导致资源供需不匹配（经济背景）。二者叠加，使资源富余区「有货用不掉」、紧缺区「想用没货」，于是通过西气东输、南水北调等工程实现优化配置。答题时自然与经济两个背景都要点到。' },
      { type: 'heading', text: '二、我国重大调配工程' },
      { type: 'paragraph', text: '代表性工程包括：西气东输（新疆气田送长三角、珠三角）、西电东送（西南水电、晋陕蒙火电送东部）、南水北调（南方水调北方）、北煤南运等。它们把西部的能源、南方的水送到需求地，既缓解了输入地瓶颈，也带动了输出地发展。' },
      { type: 'list', items: ['西气东输：天然气从西北送往东部', '西电东送：水电火电从西送东', '南水北调：南方水调到北方', '北煤南运：晋陕蒙煤炭支援南方'] },
      { type: 'table', headers: ['工程', '调配资源', '起止方向'], rows: [['西气东输', '天然气', '西北→华东华南'], ['西电东送', '电能', '西南/北方→东部'], ['南水北调', '水资源', '南方→北方'], ['北煤南运', '煤炭', '北方→南方']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">四大资源调配工程示意</text><rect x="40" y="60" width="140" height="190" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="110" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">西气东输</text><text x="110" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">气西北→东</text><rect x="200" y="60" width="140" height="190" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="270" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">西电东送</text><text x="270" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">电西→东</text><rect x="360" y="60" width="140" height="190" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="430" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">南水北调</text><text x="430" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">水南→北</text><rect x="520" y="60" width="140" height="190" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="590" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">北煤南运</text><text x="590" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">煤北→南</text><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">四大工程把西、北的资源送往东、南的消费地。</text></svg>', caption: '图2　西气东输、西电东送、南水北调、北煤南运构成调配骨架。' },
      { type: 'example', label: '例题·工程对应', text: '题目：把长江下游的水调到华北和西北，缓解北方缺水的工程是？<br>解析：这正是南水北调工程。它通过东、中、西三条线路，把长江流域丰富的水资源调到缺水严重的华北平原和西北地区，以缓解北方水资源短缺、优化空间配置。西气东输调气、西电东送调电、北煤南运调煤，均与「调水」不符。所以答案为南水北调。' },
      { type: 'heading', text: '三、调配的影响（双赢）' },
      { type: 'paragraph', text: '资源跨区域调配对输入地和输出地都是利好。对输入地：缓解资源短缺、改善能源结构、减轻环境污染、保障经济安全。对输出地：把资源优势变为经济优势、带动基建和就业、促进相关产业发展。但也带来工程成本、生态影响等挑战，需要统筹。' },
      { type: 'warn', label: '易错·要写双向影响', text: '① 调配题必须同时写输入地与输出地的影响，只写一边会丢一半分；② 输出地不只是「卖资源赚钱」，还包括带动产业、增加就业，但也有资源减少和生态压力；③ 输入地改善环境的同时要留意工程沿线的生态风险。考题常只问「对输出地意义」，看清主语再答。' },
      { type: 'tip', label: '提示·影响答题模板', text: '调配影响用「输入地—输出地」双栏法：输入地写「缓短缺、优结构、减污染、保安定」；输出地写「变优势、带产业、增就业、促基建」。再补一句「促进区域协调」，答案就完整且平衡。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">资源调配的双赢影响</text><rect x="40" y="60" width="290" height="190" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="185" y="95" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">输入地</text><text x="185" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">缓解短缺</text><text x="185" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">优化结构减污染</text><rect x="350" y="60" width="290" height="190" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="495" y="95" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">输出地</text><text x="495" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">变资源优势</text><text x="495" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">带产业增就业</text><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">输入输出各得其利，促进区域协调发展。</text></svg>', caption: '图3　资源调配对输入地缓解短缺、对输出地转化优势，实现双赢。' },
      { type: 'heading', text: '四、协调与可持续' },
      { type: 'paragraph', text: '调配工程是把双刃剑，要兼顾效率与生态。建设时要做好线路选优、移民安置、生态修复；运行中要合理定价、节约利用，避免输出地「资源依赖」、输入地「敞开口用」。最终目标是让资源在更大范围优化配置，支撑全国协调发展。' },
      { type: 'list', items: ['线路选优，减少生态扰动', '做好移民安置与生态修复', '节约利用，防止浪费', '避免输出地陷入资源依赖'] },
      { type: 'example', label: '例题·综合辨析', text: '题目：有人担心西气东输会让西部「资源被抽走」，你如何评价？<br>解析：这种担心不全面。工程确实把西部天然气输往东部，但西部获得了稳定的销售额、税收和就业岗位，并把资源优势转化为经济优势，带动了管道、化工等产业；同时合同约定留存部分气量供本地使用。真正要避免的是只卖原料、不培育深加工，陷入低端依赖。因此只要做好产业链延伸和生态保护，调配对西部利大于弊。' }
    ],
    exercises: [
      { type: 'choice', question: '我国资源跨区域调配的根本原因是？', options: ['人口分布均匀', '资源分布不均且供需错位', '交通极其便利', '各地区产业相同'], answer: '资源分布不均且供需错位', explanation: '资源跨区域调配的根本原因在于两方面：自然上我国资源空间分布不均（西多东少、北多南少），经济上区域发展水平不同导致资源供需错位——西部北方富集却消费弱，东部消费强却资源缺。二者叠加必须靠工程调配。人口、交通、产业均不是根本原因，且我国人口与产业分布其实并不均匀。因此正确选项是资源分布不均且供需错位。' },
      { type: 'choice', question: '下列工程中，把水资源从南方调到北方的是？', options: ['西气东输', '西电东送', '南水北调', '北煤南运'], answer: '南水北调', explanation: '南水北调通过东、中、西三线把长江流域的水调到华北和西北，目的是缓解北方缺水。西气东输调天然气、西电东送调电能、北煤南运调煤炭，均与调水无关。所以把南方水调往北方的工程是南水北调。' },
      { type: 'choice', question: '资源跨区域调配对输入地的主要意义是？', options: ['缓解资源短缺、优化能源结构', '资源被抽走、经济受损', '失业大量增加', '生态必然恶化'], answer: '缓解资源短缺、优化能源结构', explanation: '对输入地而言，调配工程能缓解本地资源短缺、补齐供给短板，同时用较清洁的天然气或水电替代部分煤炭，有助于优化能源结构、减轻大气污染、保障经济安全运行。资源被抽走是对输出地的误读，失业增加和生态必然恶化也不符合输入地的实际利好。故正确意义是缓解短缺、优化结构。' },
      { type: 'fill', question: '资源跨区域调配对输出地的意义在于把___优势转化为经济优势，并带动相关产业发展。', answer: '资源', explanation: '对资源输出地来说，调配工程让本地富集的煤、气、水、电得以外送，获得稳定的销售收入、税收和就业岗位，把长期「躺」在地下或江河里的资源优势变成了现实的经济优势，并拉动管道、化工、基建等产业。这也是区域协调发展中「先富带后富」的重要机制。' },
      { type: 'fill', question: '西电东送把西南的___电和晋陕蒙的___电送往东部沿海，缓解东部电力紧张。', answer: '水；火', explanation: '西电东送主要有三大通道：北通道送晋陕蒙的火电，中通道送三峡等长江中上游水电，南通道送云南贵州广西的水电。它把西部的清洁水电和北方煤电送到用能集中的东部，既缓解东部电力瓶颈，又使西部资源变现，是资源跨区域调配的代表性工程之一。' }
    ]
  });
})();
