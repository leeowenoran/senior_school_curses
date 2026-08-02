/* 地理 · 必修 第二册 · 第1章 · 课时：第2节 人口迁移 */
(function () {
  var v = gzGetVolume('geography', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u2',
    name: '第2节 人口迁移',
    chapter: '必修 第二册 · 第1章 人口',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是人口迁移' },
      { type: 'paragraph', text: '人口迁移是指人们变更定居地、跨越一定行政区域、并且时间较长（通常以半年或一年以上为标准）的空间移动。它和日常上下班、出门旅游不同，旅游和通勤只是短时间离开，定居地没变，不算迁移。判断是否迁移，关键看「是否换了长期居住地」和「是否跨越了行政区」。' },
      { type: 'list', items: ['空间位移：必须发生地理位置的移动', '居住地变更：原来住的地方不再作为长期住所', '时间限度：通常要持续较长一段时间，不是临时外出', '跨越行政区：多指跨越县级以上行政边界'] },
      { type: 'keypoint', label: '重点·人口迁移的三要素', text: '<strong>人口迁移必须同时满足三点：</strong>① 空间上发生了移动；② 变更了定居地（不再是短期逗留）；③ 时间较长（一般以半年或一年以上为准）。三者缺一则只是人口流动，比如节假日返乡、出差旅游，都不算人口迁移。' },
      { type: 'heading', text: '二、人口迁移有哪些类型' },
      { type: 'paragraph', text: '按跨越的行政范围，人口迁移可分为国际迁移和国内迁移。国际迁移是跨越国界、改变国籍或长期居留地的移动，如跨国务工、留学移民；国内迁移是在同一国家内部、跨越不同行政区之间的移动，如从农村搬到城市、从西部搬到东部。按意愿还可分为自愿迁移和被迫迁移。' },
      { type: 'table', headers: ['分类依据', '类型', '例子'], rows: [['按范围', '国际迁移', '中国人去美国留学并定居'], ['按范围', '国内迁移', '农民工从农村到城市务工'], ['按意愿', '自愿迁移', '为更好工作主动搬家'], ['按意愿', '被迫迁移', '因灾害或战争离开家园']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">人口迁移的主要流向示意</text><rect x="60" y="90" width="180" height="180" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="150" y="150" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">农村</text><text x="150" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">人口迁出</text><rect x="440" y="90" width="180" height="180" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="530" y="150" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">城市</text><text x="530" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">人口迁入</text><line x1="245" y1="180" x2="435" y2="180" stroke="#2a6fa8" stroke-width="3"/><polygon points="435,180 420,172 420,188" fill="#2a6fa8"/><text x="340" y="165" font-size="12" fill="#1f3a4d" text-anchor="middle">乡→城</text><rect x="200" y="285" width="280" height="35" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="308" font-size="12" fill="#1f3a4d" text-anchor="middle">欠发达地区 → 发达地区的迁移最普遍</text></svg>', caption: '图1　人口迁移最常见的是从农村迁往城市、从欠发达地区迁往发达地区。' },
      { type: 'heading', text: '三、人口为什么会迁移：推拉理论' },
      { type: 'paragraph', text: '为什么有人愿意离开家乡？地理学用「推拉理论」解释：迁出地有一些让人待不下去的因素，叫推力，比如收入低、就业机会少、自然灾害；迁入地有一些吸引人的因素，叫拉力，比如工资高、学校好、医疗便利。此外还有中间阻力，如距离远、政策限制、迁移成本，会削弱迁移。' },
      { type: 'keypoint', label: '重点·推拉理论', text: '<strong>推力把人「推出去」，拉力把人「拉过来」。</strong>推力来自原住地的劣势（贫困、失业、灾害）；拉力来自目的地的优势（高薪、教育、医疗）。当拉力大于推力与中间阻力之和时，迁移就会发生。分析任何迁移现象，都可以从这三股力量入手。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">推拉理论示意图</text><rect x="60" y="80" width="200" height="210" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="160" y="110" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">迁出地（推力）</text><text x="160" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">收入低</text><text x="160" y="172" font-size="12" fill="#1f3a4d" text-anchor="middle">就业少</text><text x="160" y="199" font-size="12" fill="#1f3a4d" text-anchor="middle">灾害多</text><text x="160" y="226" font-size="12" fill="#1f3a4d" text-anchor="middle">环境差</text><rect x="420" y="80" width="200" height="210" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="520" y="110" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">迁入地（拉力）</text><text x="520" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">高工资</text><text x="520" y="172" font-size="12" fill="#1f3a4d" text-anchor="middle">好学校</text><text x="520" y="199" font-size="12" fill="#1f3a4d" text-anchor="middle">好医疗</text><text x="520" y="226" font-size="12" fill="#1f3a4d" text-anchor="middle">机会多</text><line x1="265" y1="185" x2="415" y2="185" stroke="#2a6fa8" stroke-width="3"/><polygon points="415,185 400,177 400,193" fill="#2a6fa8"/><text x="340" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">中间阻力（距离、成本、政策）会削弱这股迁移力量。</text></svg>', caption: '图2　迁出地推力与迁入地拉力共同决定人口迁移，中间阻力起削弱作用。' },
      { type: 'heading', text: '四、影响人口迁移的因素' },
      { type: 'paragraph', text: '推动或拉动人口迁移的因素可以分成三大类。自然因素包括气候、水源、土壤、灾害；经济因素是最主要的，如地区间收入差距、就业机会；社会因素包括文化教育、婚姻家庭、政策、战争等。在现代社会，经济因素往往起主导作用，但自然因素在灾害时期也会突然变得重要。' },
      { type: 'list', items: ['自然因素：气候宜人、水源充足吸引迁入；灾害迫使迁出', '经济因素：收入与就业机会差异是迁移的主要动力', '社会因素：教育、婚姻、政策、战争也会影响迁移方向'] },
      { type: 'warn', label: '易错·经济因素不是唯一', text: '① 常说经济因素主导，但不代表每次迁移都只为钱，求学、婚姻、政策安置也很常见；② 不要把「人口流动」和「人口迁移」混为一谈，流动时间短、不定居；③ 国际迁移与国内迁移的划分标准是是否跨越国界，不是距离的远近。' },
      { type: 'tip', label: '提示·答题先分维度', text: '分析某次人口迁移的原因时，先想「是自然、经济还是社会因素」，再分别找推力与拉力。多数高考和会考题的答案都是「经济因素为主，加上具体拉力（如就业机会多、收入高）」，按这个框架组织语言最稳妥。' },
      { type: 'heading', text: '五、人口迁移的影响' },
      { type: 'paragraph', text: '人口迁移对迁出地和迁入地都会带来影响，要分开看。对迁出地，缓解了人多地少的压力，但也可能造成人才和劳动力流失；对迁入地，补充了劳动力、促进经济发展，但也可能带来住房紧张、交通拥堵、治安等城市问题。所以迁移是把双刃剑。' },
      { type: 'table', headers: ['影响对象', '有利影响', '不利影响'], rows: [['迁出地', '缓解人地矛盾、增加汇款收入', '青壮年与人才流失'], ['迁入地', '补充劳动力、活跃经济', '住房交通压力大、资源紧张']] },
      { type: 'heading', text: '六、我国人口迁移的特点' },
      { type: 'paragraph', text: '新中国成立后，我国人口迁移大致分两个阶段。改革开放以前，迁移多由政策主导，如支援边疆、知识青年上山下乡；改革开放以后，以自发迁移为主，方向主要是从中西部内陆迁往东部沿海、从农村迁往城市，形成了规模庞大的农民工进城潮，也推动了城市群的发展。' },
      { type: 'list', items: ['改革开放前：计划性迁移为主，如支边、三线建设', '改革开放后：自发性迁移为主，乡—城、西—东流动', '近年趋势：城市群内部流动增加，部分人返乡创业'] },
      { type: 'example', label: '例题·判断迁移类型', text: '题目：某农民工从四川农村到广东东莞的工厂打工，并打算长期在东莞居住，这属于？<br>A. 国际迁移　B. 国内迁移　C. 人口流动　D. 短期旅游<br>解析：该农民工跨越了省级行政区（四川到广东），变更了长期居住地，且打算长期居住，符合人口迁移三要素，属于国内迁移而非国际迁移。若只是春节临时回家再返厂，则属于人口流动。所以正确选项是国内迁移。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">我国人口迁移的双向影响</text><rect x="40" y="60" width="280" height="240" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="92" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">对迁出地</text><text x="180" y="128" font-size="13" fill="#1f3a4d" text-anchor="middle">利：缓解人地矛盾</text><text x="180" y="163" font-size="13" fill="#1f3a4d" text-anchor="middle">利：汇款增加收入</text><text x="180" y="198" font-size="13" fill="#1f3a4d" text-anchor="middle">弊：人才劳动力流失</text><rect x="360" y="60" width="280" height="240" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="500" y="92" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">对迁入地</text><text x="500" y="128" font-size="13" fill="#1f3a4d" text-anchor="middle">利：补充劳动力</text><text x="500" y="163" font-size="13" fill="#1f3a4d" text-anchor="middle">利：促进经济活跃</text><text x="500" y="198" font-size="13" fill="#1f3a4d" text-anchor="middle">弊：住房交通压力大</text><text x="340" y="325" font-size="12" fill="#1f3a4d" text-anchor="middle">迁移对两地各有利弊，是人口再分布的双刃剑。</text></svg>', caption: '图3　人口迁移对迁出地和迁入地都同时存在有利与不利影响。' }
    ],
    exercises: [
      { type: 'choice', question: '下列属于人口迁移的是？', options: ['到外地旅游一周', '到邻市开会三天', '从农村搬到城市长期居住', '每天坐车上下班'], answer: '从农村搬到城市长期居住', explanation: '人口迁移要满足空间移动、变更定居地、时间较长三个条件。从农村搬到城市长期居住，跨越了行政区且变更了长期住所，属于迁移。旅游、开会、上下班都是短期离开、定居地没变，属于人口流动而非迁移。所以正确选项是从农村搬到城市长期居住。' },
      { type: 'choice', question: '根据推拉理论，吸引人口迁入目的地的因素称为？', options: ['推力', '拉力', '中间阻力', '自然增长率'], answer: '拉力', explanation: '推拉理论把影响迁移的力量分为推力、拉力和中间阻力。推力是迁出地让人离开的不利因素，拉力是迁入地吸引人的有利因素，如高工资、好学校、好医疗；中间阻力则削弱迁移。所以吸引人口迁入的因素称为拉力。正确选项是拉力。' },
      { type: 'choice', question: '改革开放以后，我国人口迁移的主要方向是？', options: ['从东部沿海到西部内陆', '从城市到农村', '从中西部内陆到东部沿海、从农村到城市', '从南方到北方'], answer: '从中西部内陆到东部沿海、从农村到城市', explanation: '改革开放后我国人口迁移以自发为主，受经济因素驱动，总体方向是从中西部内陆迁往东部沿海、从农村迁往城市，形成农民工进城潮。这与改革开放前计划性支边迁移不同。所以正确方向是从中西部内陆到东部沿海、从农村到城市。' },
      { type: 'fill', question: '人口迁移按跨越的行政范围可分为国际迁移和___。', answer: '国内迁移', explanation: '人口迁移按跨越的行政范围分为国际迁移和国内迁移。国际迁移指跨越国界、改变长期居留地的移动，如跨国务工移民；国内迁移指在一国之内跨越不同行政区之间的移动，如从农村到城市。二者划分标准是是否跨越国界，与距离远近无关。' },
      { type: 'fill', question: '人口迁移对迁出地可能缓解人地矛盾，但也可能造成___和劳动力流失。', answer: '人才流失', explanation: '人口迁移对迁出地既有有利影响也有不利影响。有利的是缓解了人多地少的矛盾，外出务工者寄回的汇款还能增加家乡收入；不利的是青壮年和有技能的人离开，造成人才流失和劳动力减少，不利于当地长期发展。答题时两类影响都要写到。' }
    ]
  });
})();
