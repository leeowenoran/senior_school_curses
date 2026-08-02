/* 地理 · 必修 第二册 · 第2章 · 课时：第2节 城镇化 */
(function () {
  var v = gzGetVolume('geography', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u5',
    name: '第2节 城镇化',
    chapter: '必修 第二册 · 第2章 乡村和城镇',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是城镇化' },
      { type: 'paragraph', text: '城镇化又称城市化，是指人口向城镇集聚、城镇范围不断扩大、城镇人口占总人口比重上升的过程。简单说，就是一个国家越来越多的人住进城里，乡村慢慢变成城镇。它是社会经济发展的必然结果，也是衡量一个地区发展水平的重要标志。' },
      { type: 'list', items: ['人口向城镇集中：农村人进城找工作、安家', '地域转化：乡村田地、村庄变成街道和楼房', '比重上升：城镇人口在总人口中的比例不断提高'] },
      { type: 'keypoint', label: '重点·城镇化的衡量指标', text: '<strong>衡量城镇化水平最常用的指标是「城镇人口占总人口的比重」。</strong>比重越高，说明城镇化水平越高。注意看的是「比重」而不是城镇人口绝对数量，因为一个大国即使比重不高，城镇人口总数也可能很大。' },
      { type: 'heading', text: '二、城镇化水平的衡量与差异' },
      { type: 'paragraph', text: '不同国家的城镇化水平差别很大。一般来说，发达国家起步早、水平高，城镇人口比重常超过 70%；发展中国家起步晚、水平较低，但近年来速度很快。用城镇人口比重这把尺子，就能横向比较各国处在城镇化的什么阶段。' },
      { type: 'table', headers: ['对比项', '发达国家', '发展中国家'], rows: [['起步时间', '早（工业革命前后）', '晚（二战后加快）'], ['目前水平', '高，多超过 70%', '较低，但提升快'], ['发展速度', '慢，趋于稳定', '快，城镇迅速扩张']] },
      { type: 'list', items: ['看比重：城镇人口占总人口比例越高，城镇化水平越高', '看阶段：初期水平低增速慢，中期水平快速上升，后期水平高增速放慢', '看速度：发达国家慢而稳，发展中国家快而急'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">城镇化进程曲线（诺瑟姆 S 形曲线）</text><line x1="80" y1="290" x2="620" y2="290" stroke="#2a6fa8" stroke-width="2"/><line x1="80" y1="290" x2="80" y2="70" stroke="#2a6fa8" stroke-width="2"/><text x="60" y="300" font-size="11" fill="#1f3a4d">0</text><text x="635" y="295" font-size="11" fill="#1f3a4d">时间</text><path d="M 80 285 Q 220 280 320 180 T 600 90" fill="none" stroke="#3389c4" stroke-width="3"/><circle cx="200" cy="270" r="6" fill="#2a6fa8"/><circle cx="360" cy="170" r="6" fill="#2a6fa8"/><circle cx="520" cy="100" r="6" fill="#2a6fa8"/><text x="160" y="305" font-size="12" fill="#1f3a4d">初期阶段</text><text x="330" y="305" font-size="12" fill="#1f3a4d">中期阶段</text><text x="490" y="305" font-size="12" fill="#1f3a4d">后期阶段</text><text x="340" y="60" font-size="12" fill="#1f3a4d" text-anchor="middle">曲线先慢后快再慢，呈 S 形</text></svg>', caption: '图1　城镇化进程类似 S 形曲线，分初期、中期、后期三个阶段。' },
      { type: 'heading', text: '三、城镇化进程的三个阶段' },
      { type: 'paragraph', text: '城镇化不是匀速进行的，通常分成三个阶段。初期阶段：水平低、增长慢，乡村人口占多数。中期阶段：人口大量进城，城镇迅速膨胀，水平快速上升，这是许多发展中国家现在的样子。后期阶段：水平高、增长放慢，城镇人口趋于稳定，甚至出现人口向郊外回流。' },
      { type: 'list', items: ['初期：城镇化水平低于 30%，乡村人口占多数，发展缓慢', '中期：水平快速攀升，大量乡村人口涌入城镇，城市快速扩张', '后期：水平超过 70%，增速放缓，城镇发展趋于成熟'] },
      { type: 'keypoint', label: '重点·郊区化与逆城市化', text: '<strong>郊区化是市民迁往城市近郊，逆城市化是市民迁往更远的小城镇和乡村。</strong>二者都发生在城镇化后期，但逆城市化程度更深。它们不是城镇化倒退，而是城镇发展到一定阶段后，人们为躲避拥挤、追求更好环境而出现的现象。' },
      { type: 'warn', label: '易错·逆城市化不是城镇化倒退', text: '① 逆城市化表现为大城市人口减少、小城镇和乡村人口增加，但全国城镇人口比重仍在上升，因此不是城镇化水平下降；② 它发生在城镇化后期、交通和通信发达之后，与城市发展停滞不同；③ 不要把逆城市化与「城市衰退」混为一谈，经济中心往往仍在城市。' },
      { type: 'heading', text: '四、城镇化对地理环境的影响' },
      { type: 'paragraph', text: '城镇化像一把双刃剑。正面看，它聚集了人口、资金和技术，带动就业、便利生活、促进文化传播；负面看，城市变大也带来交通拥堵、住房紧张、环境污染、热岛效应等问题。理解这些影响，才能建设更宜居的城镇。' },
      { type: 'list', items: ['正面：就业机会多、生活便利、公共服务集中、经济活跃', '负面：交通拥堵、住房紧张、大气污染与垃圾增多', '生态：占用耕地、河湖被填、城市热岛效应增强'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">城镇扩张示意（农田与村庄逐步变为城区）</text><rect x="40" y="70" width="160" height="100" fill="#3389c4" stroke="#2a6fa8" stroke-width="1.5"/><text x="120" y="125" font-size="12" fill="#1f3a4d" text-anchor="middle">农田</text><rect x="40" y="200" width="160" height="80" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="120" y="245" font-size="12" fill="#1f3a4d" text-anchor="middle">村庄</text><rect x="260" y="90" width="200" height="150" fill="#2a6fa8" stroke="#2a6fa8" stroke-width="2"/><text x="360" y="170" font-size="13" fill="#e8f2fb" text-anchor="middle" font-weight="bold">城区扩大</text><polygon points="480,120 540,100 540,180 480,160" fill="#3389c4" stroke="#2a6fa8" stroke-width="1.5"/><text x="560" y="145" font-size="12" fill="#1f3a4d">继续扩张</text><line x1="200" y1="250" x2="260" y2="165" stroke="#2a6fa8" stroke-width="2" stroke-dasharray="5 4"/><text x="340" y="315" font-size="12" fill="#1f3a4d" text-anchor="middle">随着城镇化推进，农业用地被建设用地取代，城镇边界不断外推。</text></svg>', caption: '图2　城镇化过程中，农田和村庄逐渐被城区取代、边界外推。' },
      { type: 'heading', text: '五、城镇化带来的主要问题' },
      { type: 'paragraph', text: '当城镇发展太快、规划跟不上时，问题就会显现。交通上早晚高峰寸步难行；住房上出现拥挤的城中村和保障房不足；环境上出现雾霾、污水和垃圾围城；社会上还有就业和上学压力。这些问题提醒我们：城镇化不仅要快，更要讲究质量。' },
      { type: 'list', items: ['交通：机动车激增，道路拥堵，通勤时间长', '住房：地价上涨，部分人住房困难', '环境：废气废水排放多，热岛效应与污染加重', '社会：教育、医疗、就业等公共服务压力增大'] },
      { type: 'tip', label: '提示·新型城镇化方向', text: '我国提倡「新型城镇化」，核心是以人为中心，不是只盖楼。办法包括让进城农民平等享受公共服务、发展中小城市疏解大城市压力、用公交和绿地改善环境。记住关键词：集约、智能、绿色、包容，这就是高质量城镇化的方向。' },
      { type: 'example', label: '例题·判断城镇化阶段', text: '题目：某国城镇人口比重已达 82%，近年增长速度很慢，大城市周边出现人口向小城市和乡村迁移的现象。该国处于城镇化哪个阶段？有哪些表现？<br>解析：该国处于后期阶段。理由是城镇人口比重超过 70% 且增速放缓，符合后期特征；大城市人口外迁到小城市和乡村，正是逆城市化的表现。答题时抓住「比重高、增速慢、出现逆城市化」三个要点即可。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">城镇化的问题与应对（问题在左，对策在右）</text><rect x="40" y="70" width="260" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="170" y="100" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">主要问题</text><text x="170" y="140" font-size="13" fill="#1f3a4d" text-anchor="middle">交通拥堵</text><text x="170" y="175" font-size="13" fill="#1f3a4d" text-anchor="middle">住房紧张</text><text x="170" y="210" font-size="13" fill="#1f3a4d" text-anchor="middle">环境污染</text><text x="170" y="245" font-size="13" fill="#1f3a4d" text-anchor="middle">公共服务压力</text><rect x="380" y="70" width="260" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="510" y="100" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">应对对策</text><text x="510" y="140" font-size="13" fill="#1f3a4d" text-anchor="middle">发展公交</text><text x="510" y="175" font-size="13" fill="#1f3a4d" text-anchor="middle">增加保障房</text><text x="510" y="210" font-size="13" fill="#1f3a4d" text-anchor="middle">治理污染</text><text x="510" y="245" font-size="13" fill="#1f3a4d" text-anchor="middle">完善公共服务</text><line x1="300" y1="170" x2="380" y2="170" stroke="#2a6fa8" stroke-width="3"/><text x="340" y="160" font-size="11" fill="#1f3a4d" text-anchor="middle">对策</text><text x="340" y="315" font-size="12" fill="#1f3a4d" text-anchor="middle">针对交通、住房、环境等问题，规划与治理要同步跟进。</text></svg>', caption: '图3　城镇化问题需通过规划和治理来应对，走向高质量发展。' }
    ],
    exercises: [
      { type: 'choice', question: '衡量一个地区城镇化水平高低的常用指标是？', options: ['城镇人口总数', '城镇人口占总人口的比重', '城市楼房高度', '耕地面积大小'], answer: '城镇人口占总人口的比重', explanation: '城镇化水平看的是城镇人口在总人口中占的比例，比重越高说明城镇化水平越高，这是国际通用的衡量指标。城镇人口总数受国家大小影响，不能单独反映水平；楼房高度和耕地面积都不是衡量城镇化的标准。' },
      { type: 'choice', question: '关于城镇化进程三阶段的说法，正确的是？', options: ['初期阶段水平高增速快', '中期阶段水平快速上升', '后期阶段水平低且停滞', '三个阶段增长速度相同'], answer: '中期阶段水平快速上升', explanation: '城镇化进程通常分初期、中期、后期：初期水平低、增长慢；中期人口大量进城、水平快速上升；后期水平高、增速放缓。因此只有「中期阶段水平快速上升」正确，其余说法都与阶段特征相反。' },
      { type: 'choice', question: '城镇化后期出现大城市人口向小城市和乡村迁移，称为？', options: ['郊区化', '逆城市化', '城镇化倒退', '乡村复兴'], answer: '逆城市化', explanation: '逆城市化指城镇化后期，由于大城市拥挤、环境变差，人口迁往更远的小城镇和乡村的现象，但全国城镇人口比重仍在上升，并非城镇化倒退。郊区化只是迁往近郊，程度较浅。所以题干描述的现象是逆城市化。' },
      { type: 'fill', question: '城镇化又称___，是指人口向城镇集聚、城镇范围扩大、城镇人口占总人口比重___的过程。', answer: '城市化；上升', explanation: '城镇化也叫城市化，它的本质表现有三点：人口向城镇集中、城镇地域范围扩大、城镇人口占总人口的比重不断上升。这三点是判断一个地区是否处于城镇化进程的核心标志，学习时要整体理解。' },
      { type: 'fill', question: '城镇化带来的常见问题包括交通拥堵、住房紧张、___加剧和公共服务压力增大；我国提倡以人为核心的___城镇化来应对。', answer: '环境污染；新型', explanation: '城镇化过快易引发交通拥堵、住房紧张、环境污染和热岛效应、公共服务压力增大等问题。我国提出新型城镇化，强调以人为核心，注重集约、绿色、智能、包容，推动城镇化从速度型转向质量型，让居民生活更宜居。' }
    ]
  });
})();
